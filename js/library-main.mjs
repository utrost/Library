// @__NO_SIDE_EFFECTS__
function bd(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const i of e.split(",")) t[i] = 1;
  return (i) => i in t;
}
const tt = {}, Tr = [], Di = () => {
}, Fp = () => !1, eu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), tu = (e) => e.startsWith("onUpdate:"), xt = Object.assign, gd = (e, t) => {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}, wm = Object.prototype.hasOwnProperty, st = (e, t) => wm.call(e, t), Pe = Array.isArray, gn = (e) => ns(e) === "[object Map]", Ma = (e) => ns(e) === "[object Set]", Uf = (e) => ns(e) === "[object Date]", ze = (e) => typeof e == "function", vt = (e) => typeof e == "string", Ki = (e) => typeof e == "symbol", ot = (e) => e !== null && typeof e == "object", Mp = (e) => (ot(e) || ze(e)) && ze(e.then) && ze(e.catch), Up = Object.prototype.toString, ns = (e) => Up.call(e), km = (e) => ns(e).slice(8, -1), zp = (e) => ns(e) === "[object Object]", md = (e) => vt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kl = /* @__PURE__ */ bd(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), iu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((i) => t[i] || (t[i] = e(i)));
}, Sm = /-\w/g, Qt = iu(
  (e) => e.replace(Sm, (t) => t.slice(1).toUpperCase())
), Cm = /\B([A-Z])/g, Va = iu(
  (e) => e.replace(Cm, "-$1").toLowerCase()
), au = iu((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gu = iu(
  (e) => e ? `on${au(e)}` : ""
), jt = (e, t) => !Object.is(e, t), Ks = (e, ...t) => {
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
}, Tm = (e) => {
  const t = vt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let zf;
const ru = () => zf || (zf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function pi(e) {
  if (Pe(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const a = e[i], n = vt(a) ? xm(a) : pi(a);
      if (n)
        for (const r in n)
          t[r] = n[r];
    }
    return t;
  } else if (vt(e) || ot(e))
    return e;
}
const Am = /;(?![^(]*\))/g, Em = /:([^]+)/, $m = /\/\*[^]*?\*\//g;
function xm(e) {
  const t = {};
  return e.replace($m, "").split(Am).forEach((i) => {
    if (i) {
      const a = i.split(Em);
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
const Om = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Nm = /* @__PURE__ */ bd(Om);
function Bp(e) {
  return !!e || e === "";
}
function Rm(e, t) {
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
    return i && a ? Rm(e, t) : !1;
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
const Hp = (e) => !!(e && e.__v_isRef === !0), o = (e) => vt(e) ? e : e == null ? "" : Pe(e) || ot(e) && (e.toString === Up || !ze(e.toString)) ? Hp(e) ? o(e.value) : JSON.stringify(e, Vp, 2) : String(e), Vp = (e, t) => Hp(t) ? Vp(e, t.value) : gn(t) ? {
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
function Im(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let zt;
class Lm {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && zt && (zt.active ? (this.parent = zt, this.index = (zt.scopes || (zt.scopes = [])).push(
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
      const i = zt;
      try {
        return zt = this, t();
      } finally {
        zt = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = zt, zt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (zt === this)
        zt = this.prevScope;
      else {
        let t = zt;
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
function Pm() {
  return zt;
}
let pt;
const Wu = /* @__PURE__ */ new WeakSet();
class qp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, zt && (zt.active ? zt.effects.push(this) : this.flags &= -2);
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
    a.version === -1 ? (a === i && (i = n), kd(a), Dm(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = n;
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
    (t.version === 0 || jt(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
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
function Dm(e) {
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
class Fm {
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
      i = this.activeLink = new Fm(pt, this), pt.deps ? (i.prevDep = pt.depsTail, pt.depsTail.nextDep = i, pt.depsTail = i) : pt.deps = pt.depsTail = i, Jp(i);
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
function Zt(e, t, i) {
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
  return t === e ? t : (Zt(t, "iterate", Ul), /* @__PURE__ */ Fi(e) ? t : t.map(Wi));
}
function su(e) {
  return Zt(e = /* @__PURE__ */ lt(e), "iterate", Ul), e;
}
function na(e, t) {
  return /* @__PURE__ */ Ba(e) ? Rr(/* @__PURE__ */ er(e) ? Wi(t) : t) : Wi(t);
}
const Mm = {
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
const Um = Array.prototype;
function wa(e, t, i, a, n, r) {
  const s = su(e), c = s !== e && !/* @__PURE__ */ Fi(e), d = s[t];
  if (d !== Um[t]) {
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
  Zt(a, "iterate", Ul);
  const n = a[t](...i);
  return (n === -1 || n === !1) && /* @__PURE__ */ Td(i[0]) ? (i[0] = /* @__PURE__ */ lt(i[0]), a[t](...i)) : n;
}
function rl(e, t, i = []) {
  za(), _d();
  const a = (/* @__PURE__ */ lt(e))[t].apply(e, i);
  return wd(), ja(), a;
}
const zm = /* @__PURE__ */ bd("__proto__,__v_isRef,__isVue"), Qp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ki)
);
function jm(e) {
  Ki(e) || (e = String(e));
  const t = /* @__PURE__ */ lt(this);
  return Zt(t, "has", e), t.hasOwnProperty(e);
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
      return a === (n ? r ? Xm : nv : r ? av : iv).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const s = Pe(t);
    if (!n) {
      let d;
      if (s && (d = Mm[i]))
        return d;
      if (i === "hasOwnProperty")
        return jm;
    }
    const c = Reflect.get(
      t,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ei(t) ? t : a
    );
    if ((Ki(i) ? Qp.has(i) : zm(i)) || (n || Zt(t, "get", i), r))
      return c;
    if (/* @__PURE__ */ ei(c)) {
      const d = s && md(i) ? c : c.value;
      return n && ot(d) ? /* @__PURE__ */ zl(d) : d;
    }
    return ot(c) ? n ? /* @__PURE__ */ zl(c) : /* @__PURE__ */ Rt(c) : c;
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
    return t === /* @__PURE__ */ lt(n) && d && (c ? jt(a, r) && Na(t, "set", i, a) : Na(t, "add", i, a)), d;
  }
  deleteProperty(t, i) {
    const a = st(t, i);
    t[i];
    const n = Reflect.deleteProperty(t, i);
    return n && a && Na(t, "delete", i, void 0), n;
  }
  has(t, i) {
    const a = Reflect.has(t, i);
    return (!Ki(i) || !Qp.has(i)) && Zt(t, "has", i), a;
  }
  ownKeys(t) {
    return Zt(
      t,
      "iterate",
      Pe(t) ? "length" : Qn
    ), Reflect.ownKeys(t);
  }
}
class Bm extends ev {
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
const Hm = /* @__PURE__ */ new tv(), Vm = /* @__PURE__ */ new Bm(), qm = /* @__PURE__ */ new tv(!0);
const Fc = (e) => e, Is = (e) => Reflect.getPrototypeOf(e);
function Gm(e, t, i) {
  return function(...a) {
    const n = this.__v_raw, r = /* @__PURE__ */ lt(n), s = gn(r), c = e === "entries" || e === Symbol.iterator && s, d = e === "keys" && s, y = n[e](...a), v = i ? Fc : t ? Rr : Wi;
    return !t && Zt(
      r,
      "iterate",
      d ? Dc : Qn
    ), xt(
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
function Km(e, t) {
  const i = {
    get(n) {
      const r = this.__v_raw, s = /* @__PURE__ */ lt(r), c = /* @__PURE__ */ lt(n);
      e || (jt(n, c) && Zt(s, "get", n), Zt(s, "get", c));
      const { has: d } = Is(s), y = t ? Fc : e ? Rr : Wi;
      if (d.call(s, n))
        return y(r.get(n));
      if (d.call(s, c))
        return y(r.get(c));
      r !== s && r.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !e && Zt(/* @__PURE__ */ lt(n), "iterate", Qn), n.size;
    },
    has(n) {
      const r = this.__v_raw, s = /* @__PURE__ */ lt(r), c = /* @__PURE__ */ lt(n);
      return e || (jt(n, c) && Zt(s, "has", n), Zt(s, "has", c)), n === c ? r.has(n) : r.has(n) || r.has(c);
    },
    forEach(n, r) {
      const s = this, c = s.__v_raw, d = /* @__PURE__ */ lt(c), y = t ? Fc : e ? Rr : Wi;
      return !e && Zt(d, "iterate", Qn), c.forEach((v, g) => n.call(r, y(v), y(g), s));
    }
  };
  return xt(
    i,
    e ? {
      add: Ls("add"),
      set: Ls("set"),
      delete: Ls("delete"),
      clear: Ls("clear")
    } : {
      add(n) {
        const r = /* @__PURE__ */ lt(this), s = Is(r), c = /* @__PURE__ */ lt(n), d = !t && !/* @__PURE__ */ Fi(n) && !/* @__PURE__ */ Ba(n) ? c : n;
        return s.has.call(r, d) || jt(n, d) && s.has.call(r, n) || jt(c, d) && s.has.call(r, c) || (r.add(d), Na(r, "add", d, d)), this;
      },
      set(n, r) {
        !t && !/* @__PURE__ */ Fi(r) && !/* @__PURE__ */ Ba(r) && (r = /* @__PURE__ */ lt(r));
        const s = /* @__PURE__ */ lt(this), { has: c, get: d } = Is(s);
        let y = c.call(s, n);
        y || (n = /* @__PURE__ */ lt(n), y = c.call(s, n));
        const v = d.call(s, n);
        return s.set(n, r), y ? jt(r, v) && Na(s, "set", n, r) : Na(s, "add", n, r), this;
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
    i[n] = Gm(n, e, t);
  }), i;
}
function Sd(e, t) {
  const i = Km(e, t);
  return (a, n, r) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? a : Reflect.get(
    st(i, n) && n in a ? i : a,
    n,
    r
  );
}
const Wm = {
  get: /* @__PURE__ */ Sd(!1, !1)
}, Ym = {
  get: /* @__PURE__ */ Sd(!1, !0)
}, Zm = {
  get: /* @__PURE__ */ Sd(!0, !1)
};
const iv = /* @__PURE__ */ new WeakMap(), av = /* @__PURE__ */ new WeakMap(), nv = /* @__PURE__ */ new WeakMap(), Xm = /* @__PURE__ */ new WeakMap();
function Jm(e) {
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
function Rt(e) {
  return /* @__PURE__ */ Ba(e) ? e : Cd(
    e,
    !1,
    Hm,
    Wm,
    iv
  );
}
// @__NO_SIDE_EFFECTS__
function Qm(e) {
  return Cd(
    e,
    !1,
    qm,
    Ym,
    av
  );
}
// @__NO_SIDE_EFFECTS__
function zl(e) {
  return Cd(
    e,
    !0,
    Vm,
    Zm,
    nv
  );
}
function Cd(e, t, i, a, n) {
  if (!ot(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = n.get(e);
  if (r)
    return r;
  const s = Jm(km(e));
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
function ey(e) {
  return !st(e, "__v_skip") && Object.isExtensible(e) && jp(e, "__v_skip", !0), e;
}
const Wi = (e) => ot(e) ? /* @__PURE__ */ Rt(e) : e, Rr = (e) => ot(e) ? /* @__PURE__ */ zl(e) : e;
// @__NO_SIDE_EFFECTS__
function ei(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function z(e) {
  return lv(e, !1);
}
// @__NO_SIDE_EFFECTS__
function rv(e) {
  return lv(e, !0);
}
function lv(e, t) {
  return /* @__PURE__ */ ei(e) ? e : new ty(e, t);
}
class ty {
  constructor(t, i) {
    this.dep = new lu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? t : /* @__PURE__ */ lt(t), this._value = i ? t : Wi(t), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const i = this._rawValue, a = this.__v_isShallow || /* @__PURE__ */ Fi(t) || /* @__PURE__ */ Ba(t);
    t = a ? t : /* @__PURE__ */ lt(t), jt(t, i) && (this._rawValue = t, this._value = a ? t : Wi(t), this.dep.trigger());
  }
}
function u(e) {
  return /* @__PURE__ */ ei(e) ? e.value : e;
}
function Pa(e) {
  return ze(e) ? e() : u(e);
}
const iy = {
  get: (e, t, i) => t === "__v_raw" ? e : u(Reflect.get(e, t, i)),
  set: (e, t, i, a) => {
    const n = e[t];
    return /* @__PURE__ */ ei(n) && !/* @__PURE__ */ ei(i) ? (n.value = i, !0) : Reflect.set(e, t, i, a);
  }
};
function sv(e) {
  return /* @__PURE__ */ er(e) ? e : new Proxy(e, iy);
}
class ay {
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
function ny(e) {
  return new ay(e);
}
class ry {
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
function ly(e, t, i = !1) {
  let a, n;
  return ze(e) ? a = e : (a = e.get, n = e.set), new ry(a, n, i);
}
const Ps = {}, Qs = /* @__PURE__ */ new WeakMap();
let Gn;
function sy(e, t = !1, i = Gn) {
  if (i) {
    let a = Qs.get(i);
    a || Qs.set(i, a = []), a.push(e);
  }
}
function oy(e, t, i = tt) {
  const { immediate: a, deep: n, once: r, scheduler: s, augmentJob: c, call: d } = i, y = (N) => n ? N : /* @__PURE__ */ Fi(N) || n === !1 || n === 0 ? Ra(N, 1) : Ra(N);
  let v, g, m, k, C = !1, S = !1;
  if (/* @__PURE__ */ ei(e) ? (g = () => e.value, C = /* @__PURE__ */ Fi(e)) : /* @__PURE__ */ er(e) ? (g = () => y(e), C = !0) : Pe(e) ? (S = !0, C = e.some((N) => /* @__PURE__ */ er(N) || /* @__PURE__ */ Fi(N)), g = () => e.map((N) => {
    if (/* @__PURE__ */ ei(N))
      return N.value;
    if (/* @__PURE__ */ er(N))
      return y(N);
    if (ze(N))
      return d ? d(N, 2) : N();
  })) : ze(e) ? t ? g = d ? () => d(e, 2) : e : g = () => {
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
  const $ = Pm(), L = () => {
    v.stop(), $ && $.active && gd($.effects, v);
  };
  if (r && t) {
    const N = t;
    t = (...pe) => {
      const Q = N(...pe);
      return L(), Q;
    };
  }
  let I = S ? new Array(e.length).fill(Ps) : Ps;
  const P = (N) => {
    if (!(!(v.flags & 1) || !v.dirty && !N))
      if (t) {
        const pe = v.run();
        if (N || n || C || (S ? pe.some((Q, x) => jt(Q, I[x])) : jt(pe, I))) {
          m && m();
          const Q = Gn;
          Gn = v;
          try {
            const x = [
              pe,
              // pass undefined as the old value when it's changed for the first time
              I === Ps ? void 0 : S && I[0] === Ps ? [] : I,
              k
            ];
            I = pe, d ? d(t, 3, x) : (
              // @ts-expect-error
              t(...x)
            );
          } finally {
            Gn = Q;
          }
        }
      } else
        v.run();
  };
  return c && c(P), v = new qp(g), v.scheduler = s ? () => s(P, !1) : P, k = (N) => sy(N, !1, v), m = v.onStop = () => {
    const N = Qs.get(v);
    if (N) {
      if (d)
        d(N, 4);
      else
        for (const pe of N) pe();
      Qs.delete(v);
    }
  }, t ? a ? P(!0) : I = v.run() : s ? s(P.bind(null, !0), !0) : v.run(), L.pause = v.pause.bind(v), L.resume = v.resume.bind(v), L.stop = L, L;
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
  if (ze(e)) {
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
  const n = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || tt;
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
  uy(e, i, n, a, s);
}
function uy(e, t, i, a = !0, n = !1) {
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
function Nt(e) {
  const t = eo || ov;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function cy(e) {
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
    !(e.flags & 2) && t >= jl(i) ? ci.push(e) : ci.splice(cy(t), 0, e), e.flags |= 1, uv();
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
let Ht = null, uu = null;
function to(e) {
  const t = Ht;
  return Ht = e, uu = e && e.type.__scopeId || null, t;
}
function dy(e) {
  uu = e;
}
function fy() {
  uu = null;
}
const hy = (e) => ke;
function ke(e, t = Ht, i) {
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
  if (Ht === null)
    return e;
  const i = vu(Ht), a = e.dirs || (e.dirs = []);
  for (let n = 0; n < t.length; n++) {
    let [r, s, c, d = tt] = t[n];
    r && (ze(r) && (r = {
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
  if (Jt) {
    let i = Jt.provides;
    const a = Jt.parent && Jt.parent.provides;
    a === i && (i = Jt.provides = Object.create(a)), i[e] = t;
  }
}
function Xt(e, t, i = !1) {
  const a = Sn();
  if (a || $r) {
    let n = $r ? $r._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (n && e in n)
      return n[e];
    if (arguments.length > 1)
      return i && ze(t) ? t.call(a && a.proxy) : t;
  }
}
const py = /* @__PURE__ */ Symbol.for("v-scx"), vy = () => Xt(py);
function by(e, t) {
  return cu(e, null, t);
}
function gy(e, t) {
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
  const { immediate: a, deep: n, flush: r, once: s } = i, c = xt({}, i), d = t && a || !t && r !== "post";
  let y;
  if (Kl) {
    if (r === "sync") {
      const k = vy();
      y = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!d) {
      const k = () => {
      };
      return k.stop = Di, k.resume = Di, k.pause = Di, k;
    }
  }
  const v = Jt;
  c.call = (k, C, S) => Mi(k, v, C, S);
  let g = !1;
  r === "post" ? c.scheduler = (k) => {
    ui(k, v && v.suspense);
  } : r !== "sync" && (g = !0, c.scheduler = (k, C) => {
    C ? k() : Ad(k);
  }), c.augmentJob = (k) => {
    t && (k.flags |= 4), g && (k.flags |= 2, v && (k.id = v.uid, k.i = v));
  };
  const m = oy(e, t, c);
  return Kl && (y ? y.push(m) : d && m()), m;
}
function my(e, t, i) {
  const a = this.proxy, n = vt(e) ? e.includes(".") ? hv(a, e) : () => a[e] : e.bind(a, a);
  let r;
  ze(t) ? r = t : (r = t.handler, i = t);
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
const cn = /* @__PURE__ */ new WeakMap(), pv = /* @__PURE__ */ Symbol("_vte"), du = (e) => e.__isTeleport, Wn = (e) => e && (e.disabled || e.disabled === ""), yy = (e) => e && (e.defer || e.defer === ""), qf = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Gf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Mc = (e, t) => {
  const i = e && e.to;
  return vt(i) ? t ? t(i) : null : i;
}, _y = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, i, a, n, r, s, c, d, y) {
    const {
      mc: v,
      pc: g,
      pbc: m,
      o: { insert: k, querySelector: C, createText: S, createComment: $, parentNode: L }
    } = y, I = Wn(t.props);
    let { dynamicChildren: P } = t;
    const N = (x, B, K) => {
      x.shapeFlag & 16 && v(
        x.children,
        B,
        K,
        n,
        r,
        s,
        c,
        d
      );
    }, pe = (x = t) => {
      const B = Wn(x.props), K = x.target = Mc(x.props, C), Z = Uc(K, x, S, k);
      K && (s !== "svg" && qf(K) ? s = "svg" : s !== "mathml" && Gf(K) && (s = "mathml"), n && n.isCE && (n.ce._teleportTargets || (n.ce._teleportTargets = /* @__PURE__ */ new Set())).add(K), B || (N(x, K, Z), bl(x, !1)));
    }, Q = (x) => {
      const B = () => {
        if (cn.get(x) === B) {
          if (cn.delete(x), Wn(x.props)) {
            const K = L(x.el) || i;
            N(x, K, x.anchor), bl(x, !0);
          }
          pe(x);
        }
      };
      cn.set(x, B), ui(B, r);
    };
    if (e == null) {
      const x = t.el = S(""), B = t.anchor = S("");
      if (k(x, i, a), k(B, i, a), yy(t.props) || r && r.pendingBranch) {
        Q(t);
        return;
      }
      I && (N(t, i, B), bl(t, !0)), pe();
    } else {
      t.el = e.el;
      const x = t.anchor = e.anchor, B = cn.get(e);
      if (B) {
        B.flags |= 8, cn.delete(e), Q(t);
        return;
      }
      t.targetStart = e.targetStart;
      const K = t.target = e.target, Z = t.targetAnchor = e.targetAnchor, se = Wn(e.props), H = se ? i : K, Y = se ? x : Z;
      if (s === "svg" || qf(K) ? s = "svg" : (s === "mathml" || Gf(K)) && (s = "mathml"), P ? (m(
        e.dynamicChildren,
        P,
        H,
        n,
        r,
        s,
        c
      ), Id(e, t, !0)) : d || g(
        e,
        t,
        H,
        Y,
        n,
        r,
        s,
        c,
        !1
      ), I)
        se ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ds(
          t,
          i,
          x,
          y,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const R = Mc(t.props, C);
        R && (t.target = R, Ds(
          t,
          R,
          null,
          y,
          0
        ));
      } else se && Ds(
        t,
        K,
        Z,
        y,
        1
      );
      bl(t, I);
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
    } = e, k = Wn(m), C = r || !k, S = cn.get(e);
    if (S && (S.flags |= 8, cn.delete(e)), g && (n(y), n(v)), r && n(d), !S && (k || g) && s & 16)
      for (let $ = 0; $ < c.length; $++) {
        const L = c[$];
        a(
          L,
          t,
          i,
          C,
          !!L.dynamicChildren
        );
      }
  },
  move: Ds,
  hydrate: wy
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
function wy(e, t, i, a, n, r, {
  o: { nextSibling: s, parentNode: c, querySelector: d, insert: y, createText: v }
}, g) {
  function m($, L) {
    let I = L;
    for (; I; ) {
      if (I && I.nodeType === 8) {
        if (I.data === "teleport start anchor")
          t.targetStart = I;
        else if (I.data === "teleport anchor") {
          t.targetAnchor = I, $._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      I = s(I);
    }
  }
  function k($, L) {
    L.anchor = g(
      s($),
      L,
      c($),
      i,
      a,
      n,
      r
    );
  }
  const C = t.target = Mc(
    t.props,
    d
  ), S = Wn(t.props);
  if (C) {
    const $ = C._lpa || C.firstChild;
    t.shapeFlag & 16 && (S ? (k(e, t), m(C, $), t.targetAnchor || Uc(
      C,
      t,
      v,
      y,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      c(e) === C ? e : null
    )) : (t.anchor = s(e), m(C, $), t.targetAnchor || Uc(C, t, v, y), g(
      $ && s($),
      t,
      C,
      i,
      a,
      n,
      r
    ))), bl(t, S);
  } else S && t.shapeFlag & 16 && (k(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const Ed = _y;
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
function ky() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Tt(() => {
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
}, Sy = {
  name: "BaseTransition",
  props: vv,
  setup(e, { slots: t }) {
    const i = Sn(), a = ky();
    return () => {
      const n = t.default && yv(t.default(), !0), r = n && n.length ? gv(n) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        i.subTree ? A() : void 0
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
      d.type !== Bt && Bl(d, y);
      let v = i.subTree && io(i.subTree);
      if (v && v.type !== Bt && !Yn(v, d) && bv(i).type !== Bt) {
        let g = zc(
          v,
          s,
          a,
          i
        );
        if (Bl(v, g), c === "out-in" && d.type !== Bt)
          return a.isLeaving = !0, g.afterLeave = () => {
            a.isLeaving = !1, i.job.flags & 8 || i.update(), delete g.afterLeave, v = void 0;
          }, Xu(r);
        c === "in-out" && d.type !== Bt ? g.delayLeave = (m, k, C) => {
          const S = mv(
            a,
            v
          );
          S[String(v.key)] = v, m[Li] = () => {
            k(), m[Li] = void 0, delete y.delayedLeave, v = void 0;
          }, y.delayedLeave = () => {
            C(), delete y.delayedLeave, v = void 0;
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
      if (i.type !== Bt) {
        t = i;
        break;
      }
  }
  return t;
}
const Cy = Sy;
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
    onAfterLeave: C,
    onLeaveCancelled: S,
    onBeforeAppear: $,
    onAppear: L,
    onAfterAppear: I,
    onAppearCancelled: P
  } = t, N = String(e.key), pe = mv(i, e), Q = (K, Z) => {
    K && Mi(
      K,
      a,
      9,
      Z
    );
  }, x = (K, Z) => {
    const se = Z[1];
    Q(K, Z), Pe(K) ? K.every((H) => H.length <= 1) && se() : K.length <= 1 && se();
  }, B = {
    mode: s,
    persisted: c,
    beforeEnter(K) {
      let Z = d;
      if (!i.isMounted)
        if (r)
          Z = $ || d;
        else
          return;
      K[Li] && K[Li](
        !0
        /* cancelled */
      );
      const se = pe[N];
      se && Yn(e, se) && se.el[Li] && se.el[Li](), Q(Z, [K]);
    },
    enter(K) {
      if (pe[N] === e) return;
      let Z = y, se = v, H = g;
      if (!i.isMounted)
        if (r)
          Z = L || y, se = I || v, H = P || g;
        else
          return;
      let Y = !1;
      K[ll] = (G) => {
        Y || (Y = !0, G ? Q(H, [K]) : Q(se, [K]), B.delayedLeave && B.delayedLeave(), K[ll] = void 0);
      };
      const R = K[ll].bind(null, !1);
      Z ? x(Z, [K, R]) : R();
    },
    leave(K, Z) {
      const se = String(e.key);
      if (K[ll] && K[ll](
        !0
        /* cancelled */
      ), i.isUnmounting)
        return Z();
      Q(m, [K]);
      let H = !1;
      K[Li] = (R) => {
        H || (H = !0, Z(), R ? Q(S, [K]) : Q(C, [K]), K[Li] = void 0, pe[se] === e && delete pe[se]);
      };
      const Y = K[Li].bind(null, !1);
      pe[se] = e, k ? x(k, [K, Y]) : Y();
    },
    clone(K) {
      const Z = zc(
        K,
        t,
        i,
        a,
        n
      );
      return n && n(Z), Z;
    }
  };
  return B;
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
    if (t & 32 && ze(i.default))
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
    s.type === W ? (s.patchFlag & 128 && n++, a = a.concat(
      yv(s.children, t, c)
    )) : (t || s.type !== Bt) && a.push(c != null ? wn(s, { key: c }) : s);
  }
  if (n > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function qt(e, t) {
  return ze(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    xt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ty() {
  const e = Sn();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function _v(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ay(e) {
  const t = Sn(), i = /* @__PURE__ */ rv(null);
  if (t) {
    const n = t.refs === tt ? t.refs = {} : t.refs;
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
      (S, $) => Tl(
        S,
        t && (Pe(t) ? t[$] : t),
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
  const r = a.shapeFlag & 4 ? vu(a.component) : a.el, s = n ? null : r, { i: c, r: d } = e, y = t && t.r, v = c.refs === tt ? c.refs = {} : c.refs, g = c.setupState, m = /* @__PURE__ */ lt(g), k = g === tt ? Fp : (S) => Kf(v, S) ? !1 : st(m, S), C = (S, $) => !($ && Kf(v, $));
  if (y != null && y !== d) {
    if (Wf(t), vt(y))
      v[y] = null, k(y) && (g[y] = null);
    else if (/* @__PURE__ */ ei(y)) {
      const S = t;
      C(y, S.k) && (y.value = null), S.k && (v[S.k] = null);
    }
  }
  if (ze(d))
    rs(d, c, 12, [s, v]);
  else {
    const S = vt(d), $ = /* @__PURE__ */ ei(d);
    if (S || $) {
      const L = () => {
        if (e.f) {
          const I = S ? k(d) ? g[d] : v[d] : C() || !e.k ? d.value : v[e.k];
          if (n)
            Pe(I) && gd(I, r);
          else if (Pe(I))
            I.includes(r) || I.push(r);
          else if (S)
            v[d] = [r], k(d) && (g[d] = v[d]);
          else {
            const P = [r];
            C(d, e.k) && (d.value = P), e.k && (v[e.k] = P);
          }
        } else S ? (v[d] = s, k(d) && (g[d] = s)) : $ && (C(d, e.k) && (d.value = s), e.k && (v[e.k] = s));
      };
      if (s) {
        const I = () => {
          L(), ao.delete(e);
        };
        I.id = -1, ao.set(e, I), ui(I, i);
      } else
        Wf(e), L();
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
function Ey(e, t) {
  wv(e, "a", t);
}
function $y(e, t) {
  wv(e, "da", t);
}
function wv(e, t, i = Jt) {
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
      fu(n.parent.vnode) && xy(a, t, i, n), n = n.parent;
  }
}
function xy(e, t, i, a) {
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
function hu(e, t, i = Jt, a = !1) {
  if (i) {
    const n = i[e] || (i[e] = []), r = t.__weh || (t.__weh = (...s) => {
      za();
      const c = os(i), d = Mi(t, i, e, s);
      return c(), ja(), d;
    });
    return a ? n.unshift(r) : n.push(r), r;
  }
}
const qa = (e) => (t, i = Jt) => {
  (!Kl || e === "sp") && hu(e, (...a) => t(...a), i);
}, kv = qa("bm"), Tt = qa("m"), Sv = qa(
  "bu"
), Oy = qa("u"), Ti = qa(
  "bum"
), ls = qa("um"), Ny = qa(
  "sp"
), Ry = qa("rtg"), Iy = qa("rtc");
function Ly(e, t = Jt) {
  hu("ec", e, t);
}
const $d = "components", Py = "directives";
function Xe(e, t) {
  return Od($d, e, !0, t) || e;
}
const Cv = /* @__PURE__ */ Symbol.for("v-ndc");
function xd(e) {
  return vt(e) ? Od($d, e, !1) || e : e || Cv;
}
function Yf(e) {
  return Od(Py, e);
}
function Od(e, t, i = !0, a = !1) {
  const n = Ht || Jt;
  if (n) {
    const r = n.type;
    if (e === $d) {
      const c = g1(
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
function fe(e, t, i, a) {
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
function Be(e, t, i, a, n, r) {
  if (i == null && (i = {}), Ht.ce || Ht.parent && Er(Ht.parent) && Ht.parent.ce) {
    const y = i, v = Object.keys(y).length > 0;
    return t !== "default" && (y.name = t), h(), De(
      W,
      null,
      [he("slot", y, a && a())],
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
    d = De(
      W,
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
  return e.some((t) => Vl(t) ? !(t.type === Bt || t.type === W && !Tv(t.children)) : !0) ? e : null;
}
const jc = (e) => e ? Kv(e) ? vu(e) : jc(e.parent) : null, Al = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ xt(/* @__PURE__ */ Object.create(null), {
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
    $nextTick: (e) => e.n || (e.n = Nt.bind(e.proxy)),
    $watch: (e) => my.bind(e)
  })
), Ju = (e, t) => e !== tt && !e.__isScriptSetup && st(e, t), Dy = {
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
        if (n !== tt && st(n, t))
          return s[t] = 2, n[t];
        if (st(r, t))
          return s[t] = 3, r[t];
        if (i !== tt && st(i, t))
          return s[t] = 4, i[t];
        Bc && (s[t] = 0);
      }
    }
    const y = Al[t];
    let v, g;
    if (y)
      return t === "$attrs" && Zt(e.attrs, "get", ""), y(e);
    if (
      // css module (injected by vue-loader)
      (v = c.__cssModules) && (v = v[t])
    )
      return v;
    if (i !== tt && st(i, t))
      return s[t] = 4, i[t];
    if (
      // global properties
      g = d.config.globalProperties, st(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, i) {
    const { data: a, setupState: n, ctx: r } = e;
    return Ju(n, t) ? (n[t] = i, !0) : a !== tt && st(a, t) ? (a[t] = i, !0) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = i, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: i, ctx: a, appContext: n, props: r, type: s }
  }, c) {
    let d;
    return !!(i[c] || e !== tt && c[0] !== "$" && st(e, c) || Ju(t, c) || st(r, c) || st(a, c) || st(Al, c) || st(n.config.globalProperties, c) || (d = s.__cssModules) && d[c]);
  },
  defineProperty(e, t, i) {
    return i.get != null ? e._.accessCache[t] = 0 : st(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
  }
};
function Fy() {
  return Av().slots;
}
function My() {
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
function Uy(e, t) {
  return !e || !t ? e || t : Pe(e) && Pe(t) ? e.concat(t) : xt({}, no(e), no(t));
}
let Bc = !0;
function zy(e) {
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
    updated: C,
    activated: S,
    deactivated: $,
    beforeDestroy: L,
    beforeUnmount: I,
    destroyed: P,
    unmounted: N,
    render: pe,
    renderTracked: Q,
    renderTriggered: x,
    errorCaptured: B,
    serverPrefetch: K,
    // public API
    expose: Z,
    inheritAttrs: se,
    // assets
    components: H,
    directives: Y,
    filters: R
  } = t;
  if (y && jy(y, a, null), s)
    for (const ae in s) {
      const J = s[ae];
      ze(J) && (a[ae] = J.bind(i));
    }
  if (n) {
    const ae = n.call(i, i);
    ot(ae) && (e.data = /* @__PURE__ */ Rt(ae));
  }
  if (Bc = !0, r)
    for (const ae in r) {
      const J = r[ae], be = ze(J) ? J.bind(i, i) : ze(J.get) ? J.get.bind(i, i) : Di, Te = !ze(J) && ze(J.set) ? J.set.bind(i) : Di, Le = j({
        get: be,
        set: Te
      });
      Object.defineProperty(a, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (Oe) => Le.value = Oe
      });
    }
  if (c)
    for (const ae in c)
      Ev(c[ae], a, i, ae);
  if (d) {
    const ae = ze(d) ? d.call(i) : d;
    Reflect.ownKeys(ae).forEach((J) => {
      Ii(J, ae[J]);
    });
  }
  v && Xf(v, e, "c");
  function X(ae, J) {
    Pe(J) ? J.forEach((be) => ae(be.bind(i))) : J && ae(J.bind(i));
  }
  if (X(kv, g), X(Tt, m), X(Sv, k), X(Oy, C), X(Ey, S), X($y, $), X(Ly, B), X(Iy, Q), X(Ry, x), X(Ti, I), X(ls, N), X(Ny, K), Pe(Z))
    if (Z.length) {
      const ae = e.exposed || (e.exposed = {});
      Z.forEach((J) => {
        Object.defineProperty(ae, J, {
          get: () => i[J],
          set: (be) => i[J] = be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  pe && e.render === Di && (e.render = pe), se != null && (e.inheritAttrs = se), H && (e.components = H), Y && (e.directives = Y), K && _v(e);
}
function jy(e, t, i = Di) {
  Pe(e) && (e = Hc(e));
  for (const a in e) {
    const n = e[a];
    let r;
    ot(n) ? "default" in n ? r = Xt(
      n.from || a,
      n.default,
      !0
    ) : r = Xt(n.from || a) : r = Xt(n), /* @__PURE__ */ ei(r) ? Object.defineProperty(t, a, {
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
    ze(r) && qe(n, r);
  } else if (ze(e))
    qe(n, e.bind(i));
  else if (ot(e))
    if (Pe(e))
      e.forEach((r) => Ev(r, t, i, a));
    else {
      const r = ze(e.handler) ? e.handler.bind(i) : t[e.handler];
      ze(r) && qe(n, r, e);
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
      const c = By[s] || i && i[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const By = {
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
  watch: Vy,
  // provide / inject
  provide: Jf,
  inject: Hy
};
function Jf(e, t) {
  return t ? e ? function() {
    return xt(
      ze(e) ? e.call(this, this) : e,
      ze(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Hy(e, t) {
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
  return e ? xt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Qf(e, t) {
  return e ? Pe(e) && Pe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : xt(
    /* @__PURE__ */ Object.create(null),
    no(e),
    no(t ?? {})
  ) : t;
}
function Vy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const i = xt(/* @__PURE__ */ Object.create(null), e);
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
let qy = 0;
function Gy(e, t) {
  return function(a, n = null) {
    ze(a) || (a = xt({}, a)), n != null && !ot(n) && (n = null);
    const r = xv(), s = /* @__PURE__ */ new WeakSet(), c = [];
    let d = !1;
    const y = r.app = {
      _uid: qy++,
      _component: a,
      _props: n,
      _container: null,
      _context: r,
      _instance: null,
      version: y1,
      get config() {
        return r.config;
      },
      set config(v) {
      },
      use(v, ...g) {
        return s.has(v) || (v && ze(v.install) ? (s.add(v), v.install(y, ...g)) : ze(v) && (s.add(v), v(y, ...g))), y;
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
          const k = y._ceVNode || he(a, n);
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
  const a = Sn(), n = Qt(t), r = Va(t), s = Nv(e, n), c = ny((d, y) => {
    let v, g = tt, m;
    return gy(() => {
      const k = e[n];
      jt(v, k) && (v = k, y());
    }), {
      get() {
        return d(), i.get ? i.get(v) : v;
      },
      set(k) {
        const C = i.set ? i.set(k) : k;
        if (!jt(C, v) && !(g !== tt && jt(k, g)))
          return;
        const S = a.vnode.props, $ = !!(S && // check if parent has passed v-model
        (t in S || n in S || r in S) && (`onUpdate:${t}` in S || `onUpdate:${n}` in S || `onUpdate:${r}` in S));
        $ || (v = k, y()), a.emit(`update:${t}`, C), jt(k, g) && (jt(k, C) && !jt(C, m) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        $ && g !== tt && !jt(C, v)) && y(), g = k, m = C;
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
const Nv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Qt(t)}Modifiers`] || e[`${Va(t)}Modifiers`];
function Ky(e, t, ...i) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || tt;
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
const Wy = /* @__PURE__ */ new WeakMap();
function Rv(e, t, i = !1) {
  const a = i ? Wy : t.emitsCache, n = a.get(e);
  if (n !== void 0)
    return n;
  const r = e.emits;
  let s = {}, c = !1;
  if (!ze(e)) {
    const d = (y) => {
      const v = Rv(y, t, !0);
      v && (c = !0, xt(s, v));
    };
    !i && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !c ? (ot(e) && a.set(e, null), null) : (Pe(r) ? r.forEach((d) => s[d] = null) : xt(s, r), ot(e) && a.set(e, s), s);
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
    ctx: C,
    inheritAttrs: S
  } = e, $ = to(e);
  let L, I;
  try {
    if (i.shapeFlag & 4) {
      const N = n || a, pe = N;
      L = ra(
        y.call(
          pe,
          N,
          v,
          g,
          k,
          m,
          C
        )
      ), I = c;
    } else {
      const N = t;
      L = ra(
        N.length > 1 ? N(
          g,
          { attrs: c, slots: s, emit: d }
        ) : N(
          g,
          null
        )
      ), I = t.props ? c : Yy(c);
    }
  } catch (N) {
    Da.length = 0, ou(N, e, 1), L = he(Bt);
  }
  let P = L;
  if (I && S !== !1) {
    const N = Object.keys(I), { shapeFlag: pe } = P;
    N.length && pe & 7 && (r && N.some(tu) && (I = Zy(
      I,
      r
    )), P = wn(P, I, !1, !0));
  }
  if (i.dirs && (P = wn(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(i.dirs) : i.dirs), i.transition) {
    const N = du(P.type) && io(P) || P;
    Bl(N, i.transition);
  }
  return L = P, to($), L;
}
const Yy = (e) => {
  let t;
  for (const i in e)
    (i === "class" || i === "style" || eu(i)) && ((t || (t = {}))[i] = e[i]);
  return t;
}, Zy = (e, t) => {
  const i = {};
  for (const a in e)
    (!tu(a) || !(a.slice(9) in t)) && (i[a] = e[a]);
  return i;
};
function Xy(e, t, i) {
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
function Jy({ vnode: e, parent: t, suspense: i }, a) {
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
function Qy(e, t, i, a = !1) {
  const n = {}, r = Pv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Fv(e, t, n, r);
  for (const s in e.propsOptions[0])
    s in n || (n[s] = void 0);
  i ? e.props = a ? n : /* @__PURE__ */ Qm(n) : e.type.props ? e.props = n : e.props = r, e.attrs = r;
}
function e1(e, t, i, a) {
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
            const C = Qt(m);
            n[C] = Vc(
              d,
              c,
              C,
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
    const d = /* @__PURE__ */ lt(i), y = c || tt;
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
      if (s.type !== Function && !s.skipFactory && ze(d)) {
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
const t1 = /* @__PURE__ */ new WeakMap();
function Mv(e, t, i = !1) {
  const a = i ? t1 : t.propsCache, n = a.get(e);
  if (n)
    return n;
  const r = e.props, s = {}, c = [];
  let d = !1;
  if (!ze(e)) {
    const v = (g) => {
      d = !0;
      const [m, k] = Mv(g, t, !0);
      xt(s, m), k && c.push(...k);
    };
    !i && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return ot(e) && a.set(e, Tr), Tr;
  if (Pe(r))
    for (let v = 0; v < r.length; v++) {
      const g = Qt(r[v]);
      ih(g) && (s[g] = tt);
    }
  else if (r)
    for (const v in r) {
      const g = Qt(v);
      if (ih(g)) {
        const m = r[v], k = s[g] = Pe(m) || ze(m) ? { type: m } : xt({}, m), C = k.type;
        let S = !1, $ = !0;
        if (Pe(C))
          for (let L = 0; L < C.length; ++L) {
            const I = C[L], P = ze(I) && I.name;
            if (P === "Boolean") {
              S = !0;
              break;
            } else P === "String" && ($ = !1);
          }
        else
          S = ze(C) && C.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = S, k[
          1
          /* shouldCastTrue */
        ] = $, (S || st(k, "default")) && c.push(g);
      }
    }
  const y = [s, c];
  return ot(e) && a.set(e, y), y;
}
function ih(e) {
  return e[0] !== "$" && !kl(e);
}
const Nd = (e) => e === "_" || e === "_ctx" || e === "$stable", Rd = (e) => Pe(e) ? e.map(ra) : [ra(e)], i1 = (e, t, i) => {
  if (t._n)
    return t;
  const a = ke((...n) => Rd(t(...n)), i);
  return a._c = !1, a;
}, Uv = (e, t, i) => {
  const a = e._ctx;
  for (const n in e) {
    if (Nd(n)) continue;
    const r = e[n];
    if (ze(r))
      t[n] = i1(n, r, a);
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
}, a1 = (e, t, i) => {
  const a = e.slots = Pv();
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (jv(a, t, i), i && jp(a, "_", n, !0)) : Uv(t, a);
  } else t && zv(e, t);
}, n1 = (e, t, i) => {
  const { vnode: a, slots: n } = e;
  let r = !0, s = tt;
  if (a.shapeFlag & 32) {
    const c = t._;
    c ? i && c === 1 ? r = !1 : jv(n, t, i) : (r = !t.$stable, Uv(t, n)), s = t;
  } else t && (zv(e, t), s = { default: 1 });
  if (r)
    for (const c in n)
      !Nd(c) && s[c] == null && delete n[c];
}, ui = u1;
function r1(e) {
  return l1(e);
}
function l1(e, t) {
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
    insertStaticContent: C
  } = e, S = (T, O, D, V = null, U = null, ee = null, re = void 0, ue = null, me = !!O.dynamicChildren) => {
    if (T === O)
      return;
    T && !Yn(T, O) && (V = te(T), Oe(T, U, ee, !0), T = null), O.patchFlag === -2 && (me = !1, O.dynamicChildren = null);
    const { type: ce, ref: Ne, shapeFlag: we } = O;
    switch (ce) {
      case ss:
        $(T, O, D, V);
        break;
      case Bt:
        L(T, O, D, V);
        break;
      case Ws:
        T == null && I(O, D, V, re);
        break;
      case W:
        H(
          T,
          O,
          D,
          V,
          U,
          ee,
          re,
          ue,
          me
        );
        break;
      default:
        we & 1 ? pe(
          T,
          O,
          D,
          V,
          U,
          ee,
          re,
          ue,
          me
        ) : we & 6 ? Y(
          T,
          O,
          D,
          V,
          U,
          ee,
          re,
          ue,
          me
        ) : (we & 64 || we & 128) && ce.process(
          T,
          O,
          D,
          V,
          U,
          ee,
          re,
          ue,
          me,
          it
        );
    }
    Ne != null && U ? Tl(Ne, T && T.ref, ee, O || T, !O) : Ne == null && T && T.ref != null && Tl(T.ref, null, ee, T, !0);
  }, $ = (T, O, D, V) => {
    if (T == null)
      a(
        O.el = c(O.children),
        D,
        V
      );
    else {
      const U = O.el = T.el;
      O.children !== T.children && y(U, O.children);
    }
  }, L = (T, O, D, V) => {
    T == null ? a(
      O.el = d(O.children || ""),
      D,
      V
    ) : O.el = T.el;
  }, I = (T, O, D, V) => {
    [T.el, T.anchor] = C(
      T.children,
      O,
      D,
      V,
      T.el,
      T.anchor
    );
  }, P = ({ el: T, anchor: O }, D, V) => {
    let U;
    for (; T && T !== O; )
      U = m(T), a(T, D, V), T = U;
    a(O, D, V);
  }, N = ({ el: T, anchor: O }) => {
    let D;
    for (; T && T !== O; )
      D = m(T), n(T), T = D;
    n(O);
  }, pe = (T, O, D, V, U, ee, re, ue, me) => {
    if (O.type === "svg" ? re = "svg" : O.type === "math" && (re = "mathml"), T == null)
      Q(
        O,
        D,
        V,
        U,
        ee,
        re,
        ue,
        me
      );
    else {
      const ce = T.el && T.el._isVueCE ? T.el : null;
      try {
        ce && ce._beginPatch(), K(
          T,
          O,
          U,
          ee,
          re,
          ue,
          me
        );
      } finally {
        ce && ce._endPatch();
      }
    }
  }, Q = (T, O, D, V, U, ee, re, ue) => {
    let me, ce;
    const { props: Ne, shapeFlag: we, transition: $e, dirs: Re } = T;
    if (me = T.el = s(
      T.type,
      ee,
      Ne && Ne.is,
      Ne
    ), we & 8 ? v(me, T.children) : we & 16 && B(
      T.children,
      me,
      null,
      V,
      U,
      Qu(T, ee),
      re,
      ue
    ), Re && zn(T, null, V, "created"), x(me, T, T.scopeId, re, V), Ne) {
      for (const Ye in Ne)
        Ye !== "value" && !kl(Ye) && r(me, Ye, null, Ne[Ye], ee, V);
      "value" in Ne && r(me, "value", null, Ne.value, ee), (ce = Ne.onVnodeBeforeMount) && ea(ce, V, T);
    }
    Re && zn(T, null, V, "beforeMount");
    const He = s1(U, $e);
    He && $e.beforeEnter(me), a(me, O, D), ((ce = Ne && Ne.onVnodeMounted) || He || Re) && ui(() => {
      ce && ea(ce, V, T), He && $e.enter(me), Re && zn(T, null, V, "mounted");
    }, U);
  }, x = (T, O, D, V, U) => {
    if (D && k(T, D), V)
      for (let ee = 0; ee < V.length; ee++)
        k(T, V[ee]);
    if (U) {
      let ee = U.subTree;
      if (O === ee || Vv(ee.type) && (ee.ssContent === O || ee.ssFallback === O)) {
        const re = U.vnode;
        x(
          T,
          re,
          re.scopeId,
          re.slotScopeIds,
          U.parent
        );
      }
    }
  }, B = (T, O, D, V, U, ee, re, ue, me = 0) => {
    for (let ce = me; ce < T.length; ce++) {
      const Ne = T[ce] = ue ? Oa(T[ce]) : ra(T[ce]);
      S(
        null,
        Ne,
        O,
        D,
        V,
        U,
        ee,
        re,
        ue
      );
    }
  }, K = (T, O, D, V, U, ee, re) => {
    const ue = O.el = T.el;
    let { patchFlag: me, dynamicChildren: ce, dirs: Ne } = O;
    me |= T.patchFlag & 16;
    const we = T.props || tt, $e = O.props || tt;
    let Re;
    if (D && jn(D, !1), (Re = $e.onVnodeBeforeUpdate) && ea(Re, D, O, T), Ne && zn(O, T, D, "beforeUpdate"), D && jn(D, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    ce && (!T.dynamicChildren || T.dynamicChildren.length !== ce.length) && (me = 0, re = !1, ce = null), (we.innerHTML && $e.innerHTML == null || we.textContent && $e.textContent == null) && v(ue, ""), ce ? Z(
      T.dynamicChildren,
      ce,
      ue,
      D,
      V,
      Qu(O, U),
      ee
    ) : re || J(
      T,
      O,
      ue,
      null,
      D,
      V,
      Qu(O, U),
      ee,
      !1
    ), me > 0) {
      if (me & 16)
        se(ue, we, $e, D, U);
      else if (me & 2 && we.class !== $e.class && r(ue, "class", null, $e.class, U), me & 4 && r(ue, "style", we.style, $e.style, U), me & 8) {
        const He = O.dynamicProps;
        for (let Ye = 0; Ye < He.length; Ye++) {
          const Ve = He[Ye], at = we[Ve], dt = $e[Ve];
          (dt !== at || Ve === "value") && r(ue, Ve, at, dt, U, D);
        }
      }
      me & 1 && T.children !== O.children && v(ue, O.children);
    } else !re && ce == null && se(ue, we, $e, D, U);
    ((Re = $e.onVnodeUpdated) || Ne) && ui(() => {
      Re && ea(Re, D, O, T), Ne && zn(O, T, D, "updated");
    }, V);
  }, Z = (T, O, D, V, U, ee, re) => {
    for (let ue = 0; ue < O.length; ue++) {
      const me = T[ue], ce = O[ue], Ne = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        me.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (me.type === W || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Yn(me, ce) || // - In the case of a component, it could contain anything.
        me.shapeFlag & 198) ? g(me.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          D
        )
      );
      S(
        me,
        ce,
        Ne,
        null,
        V,
        U,
        ee,
        re,
        !0
      );
    }
  }, se = (T, O, D, V, U) => {
    if (O !== D) {
      if (O !== tt)
        for (const ee in O)
          !kl(ee) && !(ee in D) && r(
            T,
            ee,
            O[ee],
            null,
            U,
            V
          );
      for (const ee in D) {
        if (kl(ee)) continue;
        const re = D[ee], ue = O[ee];
        re !== ue && ee !== "value" && r(T, ee, ue, re, U, V);
      }
      "value" in D && r(T, "value", O.value, D.value, U);
    }
  }, H = (T, O, D, V, U, ee, re, ue, me) => {
    const ce = O.el = T ? T.el : c(""), Ne = O.anchor = T ? T.anchor : c("");
    let { patchFlag: we, dynamicChildren: $e, slotScopeIds: Re } = O;
    Re && (ue = ue ? ue.concat(Re) : Re), T == null ? (a(ce, D, V), a(Ne, D, V), B(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      D,
      Ne,
      U,
      ee,
      re,
      ue,
      me
    )) : we > 0 && we & 64 && $e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren && T.dynamicChildren.length === $e.length ? (Z(
      T.dynamicChildren,
      $e,
      D,
      U,
      ee,
      re,
      ue
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (O.key != null || U && O === U.subTree) && Id(
      T,
      O,
      !0
      /* shallow */
    )) : J(
      T,
      O,
      D,
      Ne,
      U,
      ee,
      re,
      ue,
      me
    );
  }, Y = (T, O, D, V, U, ee, re, ue, me) => {
    O.slotScopeIds = ue, T == null ? O.shapeFlag & 512 ? U.ctx.activate(
      O,
      D,
      V,
      re,
      me
    ) : R(
      O,
      D,
      V,
      U,
      ee,
      re,
      me
    ) : G(T, O, me);
  }, R = (T, O, D, V, U, ee, re) => {
    const ue = T.component = h1(
      T,
      V,
      U
    );
    if (fu(T) && (ue.ctx.renderer = it), p1(ue, !1, re), ue.asyncDep) {
      if (U && U.registerDep(ue, X, re), !T.el) {
        const me = ue.subTree = he(Bt);
        L(null, me, O, D), T.placeholder = me.el;
      }
    } else
      X(
        ue,
        T,
        O,
        D,
        U,
        ee,
        re
      );
  }, G = (T, O, D) => {
    const V = O.component = T.component;
    if (Xy(T, O, D))
      if (V.asyncDep && !V.asyncResolved) {
        ae(V, O, D);
        return;
      } else
        V.next = O, V.update();
    else
      O.el = T.el, V.vnode = O;
  }, X = (T, O, D, V, U, ee, re) => {
    const ue = () => {
      if (T.isMounted) {
        let { next: we, bu: $e, u: Re, parent: He, vnode: Ye } = T;
        {
          const bt = Bv(T);
          if (bt) {
            we && (we.el = Ye.el, ae(T, we, re)), bt.asyncDep.then(() => {
              ui(() => {
                T.isUnmounted || ce();
              }, U);
            });
            return;
          }
        }
        let Ve = we, at;
        jn(T, !1), we ? (we.el = Ye.el, ae(T, we, re)) : we = Ye, $e && Ks($e), (at = we.props && we.props.onVnodeBeforeUpdate) && ea(at, He, we, Ye), jn(T, !0);
        const dt = eh(T), _t = T.subTree;
        T.subTree = dt, S(
          _t,
          dt,
          // parent may have changed if it's in a teleport
          g(_t.el),
          // anchor may have changed if it's in a fragment
          te(_t),
          T,
          U,
          ee
        ), we.el = dt.el, Ve === null && Jy(T, dt.el), Re && ui(Re, U), (at = we.props && we.props.onVnodeUpdated) && ui(
          () => ea(at, He, we, Ye),
          U
        );
      } else {
        let we;
        const { el: $e, props: Re } = O, { bm: He, m: Ye, parent: Ve, root: at, type: dt } = T, _t = Er(O);
        jn(T, !1), He && Ks(He), !_t && (we = Re && Re.onVnodeBeforeMount) && ea(we, Ve, O), jn(T, !0);
        {
          at.ce && at.ce._hasShadowRoot() && at.ce._injectChildStyle(
            dt,
            T.parent ? T.parent.type : void 0
          );
          const bt = T.subTree = eh(T);
          S(
            null,
            bt,
            D,
            V,
            T,
            U,
            ee
          ), O.el = bt.el;
        }
        if (Ye && ui(Ye, U), !_t && (we = Re && Re.onVnodeMounted)) {
          const bt = O;
          ui(
            () => ea(we, Ve, bt),
            U
          );
        }
        (O.shapeFlag & 256 || Ve && Er(Ve.vnode) && Ve.vnode.shapeFlag & 256) && T.a && ui(T.a, U), T.isMounted = !0, O = D = V = null;
      }
    };
    T.scope.on();
    const me = T.effect = new qp(ue);
    T.scope.off();
    const ce = T.update = me.run.bind(me), Ne = T.job = me.runIfDirty.bind(me);
    Ne.i = T, Ne.id = T.uid, me.scheduler = () => Ad(Ne), jn(T, !0), ce();
  }, ae = (T, O, D) => {
    O.component = T;
    const V = T.vnode.props;
    T.vnode = O, T.next = null, e1(T, O.props, V, D), n1(T, O.children, D), za(), Vf(T), ja();
  }, J = (T, O, D, V, U, ee, re, ue, me = !1) => {
    const ce = T && T.children, Ne = T ? T.shapeFlag : 0, we = O.children, { patchFlag: $e, shapeFlag: Re } = O;
    if ($e > 0) {
      if ($e & 128) {
        Te(
          ce,
          we,
          D,
          V,
          U,
          ee,
          re,
          ue,
          me
        );
        return;
      } else if ($e & 256) {
        be(
          ce,
          we,
          D,
          V,
          U,
          ee,
          re,
          ue,
          me
        );
        return;
      }
    }
    Re & 8 ? (Ne & 16 && le(ce, U, ee), we !== ce && v(D, we)) : Ne & 16 ? Re & 16 ? Te(
      ce,
      we,
      D,
      V,
      U,
      ee,
      re,
      ue,
      me
    ) : le(ce, U, ee, !0) : (Ne & 8 && v(D, ""), Re & 16 && B(
      we,
      D,
      V,
      U,
      ee,
      re,
      ue,
      me
    ));
  }, be = (T, O, D, V, U, ee, re, ue, me) => {
    T = T || Tr, O = O || Tr;
    const ce = T.length, Ne = O.length, we = Math.min(ce, Ne);
    let $e;
    for ($e = 0; $e < we; $e++) {
      const Re = O[$e] = me ? Oa(O[$e]) : ra(O[$e]);
      S(
        T[$e],
        Re,
        D,
        null,
        U,
        ee,
        re,
        ue,
        me
      );
    }
    ce > Ne ? le(
      T,
      U,
      ee,
      !0,
      !1,
      we
    ) : B(
      O,
      D,
      V,
      U,
      ee,
      re,
      ue,
      me,
      we
    );
  }, Te = (T, O, D, V, U, ee, re, ue, me) => {
    let ce = 0;
    const Ne = O.length;
    let we = T.length - 1, $e = Ne - 1;
    for (; ce <= we && ce <= $e; ) {
      const Re = T[ce], He = O[ce] = me ? Oa(O[ce]) : ra(O[ce]);
      if (Yn(Re, He))
        S(
          Re,
          He,
          D,
          null,
          U,
          ee,
          re,
          ue,
          me
        );
      else
        break;
      ce++;
    }
    for (; ce <= we && ce <= $e; ) {
      const Re = T[we], He = O[$e] = me ? Oa(O[$e]) : ra(O[$e]);
      if (Yn(Re, He))
        S(
          Re,
          He,
          D,
          null,
          U,
          ee,
          re,
          ue,
          me
        );
      else
        break;
      we--, $e--;
    }
    if (ce > we) {
      if (ce <= $e) {
        const Re = $e + 1, He = Re < Ne ? O[Re].el : V;
        for (; ce <= $e; )
          S(
            null,
            O[ce] = me ? Oa(O[ce]) : ra(O[ce]),
            D,
            He,
            U,
            ee,
            re,
            ue,
            me
          ), ce++;
      }
    } else if (ce > $e)
      for (; ce <= we; )
        Oe(T[ce], U, ee, !0), ce++;
    else {
      const Re = ce, He = ce, Ye = /* @__PURE__ */ new Map();
      for (ce = He; ce <= $e; ce++) {
        const kt = O[ce] = me ? Oa(O[ce]) : ra(O[ce]);
        kt.key != null && Ye.set(kt.key, ce);
      }
      let Ve, at = 0;
      const dt = $e - He + 1;
      let _t = !1, bt = 0;
      const ii = new Array(dt);
      for (ce = 0; ce < dt; ce++) ii[ce] = 0;
      for (ce = Re; ce <= we; ce++) {
        const kt = T[ce];
        if (at >= dt) {
          Oe(kt, U, ee, !0);
          continue;
        }
        let Ot;
        if (kt.key != null)
          Ot = Ye.get(kt.key);
        else
          for (Ve = He; Ve <= $e; Ve++)
            if (ii[Ve - He] === 0 && Yn(kt, O[Ve])) {
              Ot = Ve;
              break;
            }
        Ot === void 0 ? Oe(kt, U, ee, !0) : (ii[Ot - He] = ce + 1, Ot >= bt ? bt = Ot : _t = !0, S(
          kt,
          O[Ot],
          D,
          null,
          U,
          ee,
          re,
          ue,
          me
        ), at++);
      }
      const vi = _t ? o1(ii) : Tr;
      for (Ve = vi.length - 1, ce = dt - 1; ce >= 0; ce--) {
        const kt = He + ce, Ot = O[kt], Ui = O[kt + 1], Gt = kt + 1 < Ne ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ui.el || Hv(Ui)
        ) : V;
        ii[ce] === 0 ? S(
          null,
          Ot,
          D,
          Gt,
          U,
          ee,
          re,
          ue,
          me
        ) : _t && (Ve < 0 || ce !== vi[Ve] ? Le(Ot, D, Gt, 2) : Ve--);
      }
    }
  }, Le = (T, O, D, V, U = null) => {
    const { el: ee, type: re, transition: ue, children: me, shapeFlag: ce } = T;
    if (ce & 6) {
      Le(T.component.subTree, O, D, V);
      return;
    }
    if (ce & 128) {
      T.suspense.move(O, D, V);
      return;
    }
    if (ce & 64) {
      re.move(T, O, D, it);
      return;
    }
    if (re === W) {
      a(ee, O, D);
      for (let we = 0; we < me.length; we++)
        Le(me[we], O, D, V);
      a(T.anchor, O, D);
      return;
    }
    if (re === Ws) {
      P(T, O, D);
      return;
    }
    if (V !== 2 && ce & 1 && ue)
      if (V === 0)
        ue.persisted && !ee[Li] ? a(ee, O, D) : (ue.beforeEnter(ee), a(ee, O, D), ui(() => ue.enter(ee), U));
      else {
        const { leave: we, delayLeave: $e, afterLeave: Re } = ue, He = () => {
          T.ctx.isUnmounted ? n(ee) : a(ee, O, D);
        }, Ye = () => {
          const Ve = ee._isLeaving || !!ee[Li];
          ee._isLeaving && ee[Li](
            !0
            /* cancelled */
          ), ue.persisted && !Ve ? He() : we(ee, () => {
            He(), Re && Re();
          });
        };
        $e ? $e(ee, He, Ye) : Ye();
      }
    else
      a(ee, O, D);
  }, Oe = (T, O, D, V = !1, U = !1) => {
    const {
      type: ee,
      props: re,
      ref: ue,
      children: me,
      dynamicChildren: ce,
      shapeFlag: Ne,
      patchFlag: we,
      dirs: $e,
      cacheIndex: Re,
      memo: He
    } = T;
    if (we === -2 && (U = !1), ue != null && (za(), Tl(ue, null, D, T, !0), ja()), Re != null && (O.renderCache[Re] = void 0), Ne & 256) {
      O.ctx.deactivate(T);
      return;
    }
    const Ye = Ne & 1 && $e, Ve = !Er(T);
    let at;
    if (Ve && (at = re && re.onVnodeBeforeUnmount) && ea(at, O, T), Ne & 6)
      ct(T.component, D, V);
    else {
      if (Ne & 128) {
        T.suspense.unmount(D, V);
        return;
      }
      Ye && zn(T, null, O, "beforeUnmount"), Ne & 64 ? T.type.remove(
        T,
        O,
        D,
        it,
        V
      ) : ce && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ce.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ee !== W || we > 0 && we & 64) ? le(
        ce,
        O,
        D,
        !1,
        !0
      ) : (ee === W && we & 384 || !U && Ne & 16) && le(me, O, D), V && Me(T);
    }
    const dt = He != null && Re == null;
    (Ve && (at = re && re.onVnodeUnmounted) || Ye || dt) && ui(() => {
      at && ea(at, O, T), Ye && zn(T, null, O, "unmounted"), dt && (T.el = null);
    }, D);
  }, Me = (T) => {
    const { type: O, el: D, anchor: V, transition: U } = T;
    if (O === W) {
      Ze(D, V);
      return;
    }
    if (O === Ws) {
      N(T);
      return;
    }
    const ee = () => {
      n(D), U && !U.persisted && U.afterLeave && U.afterLeave();
    };
    if (T.shapeFlag & 1 && U && !U.persisted) {
      const { leave: re, delayLeave: ue } = U, me = () => re(D, ee);
      ue ? ue(T.el, ee, me) : me();
    } else
      ee();
  }, Ze = (T, O) => {
    let D;
    for (; T !== O; )
      D = m(T), n(T), T = D;
    n(O);
  }, ct = (T, O, D) => {
    const { bum: V, scope: U, job: ee, subTree: re, um: ue, m: me, a: ce } = T;
    ah(me), ah(ce), V && Ks(V), U.stop(), ee && (ee.flags |= 8, Oe(re, T, O, D)), ue && ui(ue, O), ui(() => {
      T.isUnmounted = !0;
    }, O);
  }, le = (T, O, D, V = !1, U = !1, ee = 0) => {
    for (let re = ee; re < T.length; re++)
      Oe(T[re], O, D, V, U);
  }, te = (T) => {
    if (T.shapeFlag & 6)
      return te(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const O = m(T.anchor || T.el), D = O && O[pv];
    return D ? m(D) : O;
  };
  let q = !1;
  const Se = (T, O, D) => {
    let V;
    T == null ? O._vnode && (Oe(O._vnode, null, null, !0), V = O._vnode.component) : S(
      O._vnode || null,
      T,
      O,
      null,
      null,
      null,
      D
    ), O._vnode = T, q || (q = !0, Vf(V), dv(), q = !1);
  }, it = {
    p: S,
    um: Oe,
    m: Le,
    r: Me,
    mt: R,
    mc: B,
    pc: J,
    pbc: Z,
    n: te,
    o: e
  };
  return {
    render: Se,
    hydrate: void 0,
    createApp: Gy(Se)
  };
}
function Qu({ type: e, props: t }, i) {
  return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
}
function jn({ effect: e, job: t }, i) {
  i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function s1(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Id(e, t, i = !1) {
  const a = e.children, n = t.children;
  if (Pe(a) && Pe(n))
    for (let r = 0; r < a.length; r++) {
      const s = a[r];
      let c = n[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = n[r] = Oa(n[r]), c.el = s.el), !i && c.patchFlag !== -2 && Id(s, c)), c.type === ss && (c.patchFlag === -1 && (c = n[r] = Oa(c)), c.el = s.el), c.type === Bt && !c.el && (c.el = s.el);
    }
}
function o1(e) {
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
function u1(e, t) {
  t && t.pendingBranch ? Pe(e) ? t.effects.push(...e) : t.effects.push(e) : cv(e);
}
const W = /* @__PURE__ */ Symbol.for("v-fgt"), ss = /* @__PURE__ */ Symbol.for("v-txt"), Bt = /* @__PURE__ */ Symbol.for("v-cmt"), Ws = /* @__PURE__ */ Symbol.for("v-stc"), Da = [];
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
function De(e, t, i, a, n) {
  return qv(
    he(
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
}) => (typeof e == "number" && (e = "" + e), e != null ? vt(e) || /* @__PURE__ */ ei(e) || ze(e) ? { i: Ht, r: e, k: t, f: !!i } : e : null);
function l(e, t = null, i = null, a = 0, n = null, r = e === W ? 0 : 1, s = !1, c = !1) {
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
    ctx: Ht
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
const he = c1;
function c1(e, t = null, i = null, a = 0, n = null, r = !1) {
  if ((!e || e === Cv) && (e = Bt), Vl(e)) {
    const c = wn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return i && so(c, i), Hl > 0 && !r && Ci && (c.shapeFlag & 6 ? Ci[Ci.indexOf(e)] = c : Ci.push(c)), c.patchFlag = -2, c;
  }
  if (m1(e) && (e = e.__vccOpts), t) {
    t = ql(t);
    let { class: c, style: d } = t;
    c && !vt(c) && (t.class = Ee(c)), ot(d) && (/* @__PURE__ */ Td(d) && !Pe(d) && (d = xt({}, d)), t.style = pi(d));
  }
  const s = vt(e) ? 1 : Vv(e) ? 128 : du(e) ? 64 : ot(e) ? 4 : ze(e) ? 2 : 0;
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
  return e ? /* @__PURE__ */ Td(e) || Dv(e) ? xt({}, e) : e : null;
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
function ie(e = " ", t = 0) {
  return he(ss, null, e, t);
}
function A(e = "", t = !1) {
  return t ? (h(), De(Bt, null, e)) : he(Bt, null, e);
}
function ra(e) {
  return e == null || typeof e == "boolean" ? he(Bt) : Pe(e) ? he(
    W,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vl(e) ? Oa(e) : he(ss, null, String(e));
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
      !n && !Dv(t) ? t._ctx = Ht : n === 3 && Ht && (Ht.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ze(t)) {
    if (a & 65) {
      so(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ht }, i = 32;
  } else
    t = String(t), a & 64 ? (i = 16, t = [ie(t)]) : i = 8;
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
const d1 = xv();
let f1 = 0;
function h1(e, t, i) {
  const a = e.type, n = (t ? t.appContext : e.appContext) || d1, r = {
    uid: f1++,
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
    scope: new Lm(
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
    propsDefaults: tt,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Ky.bind(null, r), e.ce && e.ce(r), r;
}
let Jt = null;
const Sn = () => Jt || Ht;
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
    (i) => Jt = i
  ), Gl = t(
    "__VUE_SSR_SETTERS__",
    (i) => Kl = i
  );
}
const os = (e) => {
  const t = Jt;
  return oo(e), e.scope.on(), () => {
    e.scope.off(), oo(t);
  };
}, nh = () => {
  Jt && Jt.scope.off(), oo(null);
};
function Kv(e) {
  return e.vnode.shapeFlag & 4;
}
let Kl = !1;
function p1(e, t = !1, i = !1) {
  t && Gl(t);
  const { props: a, children: n } = e.vnode, r = Kv(e);
  Qy(e, a, r, t), a1(e, n, i || t);
  const s = r ? v1(e, t) : void 0;
  return t && Gl(!1), s;
}
function v1(e, t) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Dy);
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
  ze(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ot(t) && (e.setupState = sv(t)), Wv(e);
}
function Wv(e, t, i) {
  const a = e.type;
  e.render || (e.render = a.render || Di);
  {
    const n = os(e);
    za();
    try {
      zy(e);
    } finally {
      ja(), n();
    }
  }
}
const b1 = {
  get(e, t) {
    return Zt(e, "get", ""), e[t];
  }
};
function Yv(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  return {
    attrs: new Proxy(e.attrs, b1),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vu(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(sv(ey(e.exposed)), {
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
function g1(e, t = !0) {
  return ze(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function m1(e) {
  return ze(e) && "__vccOpts" in e;
}
const j = (e, t) => /* @__PURE__ */ ly(e, t, Kl);
function fi(e, t, i) {
  try {
    lo(-1);
    const a = arguments.length;
    return a === 2 ? ot(t) && !Pe(t) ? Vl(t) ? he(e, null, [t]) : he(e, t) : he(e, null, t) : (a > 3 ? i = Array.prototype.slice.call(arguments, 2) : a === 3 && Vl(i) && (i = [i]), he(e, t, i));
  } finally {
    lo(1);
  }
}
const y1 = "3.5.42", _1 = Di;
let qc;
const lh = typeof window < "u" && window.trustedTypes;
if (lh)
  try {
    qc = /* @__PURE__ */ lh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Zv = qc ? (e) => qc.createHTML(e) : (e) => e, w1 = "http://www.w3.org/2000/svg", k1 = "http://www.w3.org/1998/Math/MathML", xa = typeof document < "u" ? document : null, sh = xa && /* @__PURE__ */ xa.createElement("template"), S1 = {
  insert: (e, t, i) => {
    t.insertBefore(e, i || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, i, a) => {
    const n = t === "svg" ? xa.createElementNS(w1, e) : t === "mathml" ? xa.createElementNS(k1, e) : i ? xa.createElement(e, { is: i }) : xa.createElement(e);
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
}, C1 = /* @__PURE__ */ xt(
  {},
  vv,
  Xv
), T1 = (e) => (e.displayName = "Transition", e.props = C1, e), A1 = /* @__PURE__ */ T1(
  (e, { slots: t }) => fi(Cy, E1(e), t)
), Bn = (e, t = []) => {
  Pe(e) ? e.forEach((i) => i(...t)) : e && e(...t);
}, oh = (e) => e ? Pe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function E1(e) {
  const t = {};
  for (const H in e)
    H in Xv || (t[H] = e[H]);
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
  } = e, C = $1(n), S = C && C[0], $ = C && C[1], {
    onBeforeEnter: L,
    onEnter: I,
    onEnterCancelled: P,
    onLeave: N,
    onLeaveCancelled: pe,
    onBeforeAppear: Q = L,
    onAppear: x = I,
    onAppearCancelled: B = P
  } = t, K = (H, Y, R, G) => {
    H._enterCancelled = G, Hn(H, Y ? v : c), Hn(H, Y ? y : s), R && R();
  }, Z = (H, Y) => {
    H._isLeaving = !1, Hn(H, g), Hn(H, k), Hn(H, m), Y && Y();
  }, se = (H) => (Y, R) => {
    const G = H ? x : I, X = () => K(Y, H, R);
    Bn(G, [Y, X]), uh(() => {
      Hn(Y, H ? d : r), ka(Y, H ? v : c), oh(G) || ch(Y, a, S, X);
    });
  };
  return xt(t, {
    onBeforeEnter(H) {
      Bn(L, [H]), ka(H, r), ka(H, s);
    },
    onBeforeAppear(H) {
      Bn(Q, [H]), ka(H, d), ka(H, y);
    },
    onEnter: se(!1),
    onAppear: se(!0),
    onLeave(H, Y) {
      H._isLeaving = !0;
      const R = () => Z(H, Y);
      ka(H, g), H._enterCancelled ? (ka(H, m), hh(H)) : (hh(H), ka(H, m)), uh(() => {
        H._isLeaving && (Hn(H, g), ka(H, k), oh(N) || ch(H, a, $, R));
      }), Bn(N, [H, R]);
    },
    onEnterCancelled(H) {
      K(H, !1, void 0, !0), Bn(P, [H]);
    },
    onAppearCancelled(H) {
      K(H, !0, void 0, !0), Bn(B, [H]);
    },
    onLeaveCancelled(H) {
      Z(H), Bn(pe, [H]);
    }
  });
}
function $1(e) {
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
  return Tm(e);
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
let x1 = 0;
function ch(e, t, i, a) {
  const n = e._endId = ++x1, r = () => {
    n === e._endId && a();
  };
  if (i != null)
    return setTimeout(r, i);
  const { type: s, timeout: c, propCount: d } = O1(e, t);
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
function O1(e, t) {
  const i = window.getComputedStyle(e), a = (C) => (i[C] || "").split(", "), n = a(`${ln}Delay`), r = a(`${ln}Duration`), s = dh(n, r), c = a(`${sl}Delay`), d = a(`${sl}Duration`), y = dh(c, d);
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
function N1(e, t, i) {
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
function R1(e) {
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
  }), Tt(() => {
    qe(a, Di, { flush: "post" });
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
  else if (e.type === W)
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
      const r = Im(t[n]);
      i.setProperty(`--${n}`, r), a += `--${n}: ${r};`;
    }
    i[Qv] = a;
  }
}
const I1 = /(?:^|;)\s*display\s*:/;
function L1(e, t, i) {
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
      c != null ? D1(
        e,
        s,
        !vt(t) && t ? t[s] : void 0,
        c
      ) || ml(a, s, c) : ml(a, s, "");
    }
  } else if (n) {
    if (t !== i) {
      const s = a[Qv];
      s && (i += ";" + s), a.cssText = i, r = I1.test(i);
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
    const a = P1(e, t);
    Fs.test(i) ? e.setProperty(
      Va(a),
      i.replace(Fs, ""),
      "important"
    ) : e[a] = i;
  }
}
const ph = ["Webkit", "Moz", "ms"], tc = {};
function P1(e, t) {
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
function D1(e, t, i, a) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && vt(a) && i === a;
}
const vh = "http://www.w3.org/1999/xlink";
function bh(e, t, i, a, n, r = Nm(t)) {
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
function F1(e, t, i, a) {
  e.removeEventListener(t, i, a);
}
const mh = /* @__PURE__ */ Symbol("_vei");
function M1(e, t, i, a, n = null) {
  const r = e[mh] || (e[mh] = {}), s = r[t];
  if (a && s)
    s.value = a;
  else {
    const [c, d] = j1(t);
    if (a) {
      const y = r[t] = V1(
        a,
        n
      );
      vn(e, c, y, d);
    } else s && (F1(e, c, s, d), r[t] = void 0);
  }
}
const U1 = /(Once|Passive|Capture)$/, z1 = /^on:?(?:Once|Passive|Capture)$/;
function j1(e) {
  let t, i;
  for (; (i = e.match(U1)) && !z1.test(e); )
    t || (t = {}), e = e.slice(0, e.length - i[1].length), t[i[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Va(e.slice(2)), t];
}
let ic = 0;
const B1 = /* @__PURE__ */ Promise.resolve(), H1 = () => ic || (B1.then(() => ic = 0), ic = Date.now());
function V1(e, t) {
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
  return i.value = e, i.attached = H1(), i;
}
const yh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, q1 = (e, t, i, a, n, r) => {
  const s = n === "svg";
  t === "class" ? N1(e, a, s) : t === "style" ? L1(e, i, a) : eu(t) ? tu(t) || M1(e, t, i, a, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : G1(e, t, a, s)) ? (gh(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && bh(e, t, a, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (K1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !vt(a))) ? gh(e, Qt(t), a, r, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), bh(e, t, a, s));
};
function G1(e, t, i, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && yh(t) && ze(i));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const n = e.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return yh(t) && vt(i) ? !1 : t in e;
}
function K1(e, t) {
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
function W1(e) {
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
const Ue = {
  created(e, { modifiers: { lazy: t, trim: i, number: a } }, n) {
    e.parentNode && (e.type === "text" ? e[Ms] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Ms] = e.defaultValue.replace(/\r\n?/g, `
`))), e[la] = Ir(n);
    const r = a || n.props && n.props.type === "number";
    vn(e, t ? "change" : "input", (s) => {
      s.target.composing || e[la](ac(e.value, i, r));
    }), (i || r) && vn(e, "change", () => {
      e.value = ac(e.value, i, r);
    }), t || (vn(e, "compositionstart", W1), vn(e, "compositionend", _h), vn(e, "change", _h));
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
        Nt(() => {
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
    e._pendingValue = void 0, (!i || i[0] !== e.multiple || !Y1(t, i[1], i[0])) && kh(e, t);
  }
};
function Y1(e, t, i) {
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
const Z1 = ["ctrl", "shift", "alt", "meta"], X1 = {
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
  exact: (e, t) => Z1.some((i) => e[`${i}Key`] && !t.includes(i))
}, Ce = (e, t) => {
  if (!e) return e;
  const i = e._withMods || (e._withMods = {}), a = t.join(".");
  return i[a] || (i[a] = ((n, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const c = X1[t[s]];
      if (c && c(n, t)) return;
    }
    return e(n, ...r);
  }));
}, J1 = {
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
      (s) => s === r || J1[s] === r
    ))
      return e(n);
  }));
}, Q1 = /* @__PURE__ */ xt({ patchProp: q1 }, S1);
let Sh;
function e_() {
  return Sh || (Sh = r1(Q1));
}
const t_ = ((...e) => {
  const t = e_().createApp(...e), { mount: i } = t;
  return t.mount = (a) => {
    const n = a_(a);
    if (!n) return;
    const r = t._component;
    !ze(r) && !r.render && !r.template && (r.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const s = i(n, !1, i_(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), s;
  }, t;
});
function i_(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function a_(e) {
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
}, Lt = (e, t, i) => {
  const a = Object.assign({
    noRewrite: !1
  }, i || {}), n = i?.baseURL ?? n_();
  return window?.OC?.config?.modRewriteWorking === !0 && !a.noRewrite ? n + Ch(e, t, i) : n + "/index.php" + Ch(e, t, i);
};
function n_() {
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
function r_(e) {
  if (Array.isArray(e)) return e;
}
function l_(e, t) {
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
function s_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function o_(e, t) {
  return r_(e) || l_(e, t) || u_(e, t) || s_();
}
function u_(e, t) {
  if (e) {
    if (typeof e == "string") return Th(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Th(e, t) : void 0;
  }
}
const tb = Object.entries, Ah = Object.setPrototypeOf, c_ = Object.isFrozen, ib = Object.getPrototypeOf, ab = Object.getOwnPropertyDescriptor;
let Pt = Object.freeze, Vt = Object.seal, Sr = Object.create, nb = typeof Reflect < "u" && Reflect, Kc = nb.apply, Wc = nb.construct;
Pt || (Pt = function(t) {
  return t;
});
Vt || (Vt = function(t) {
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
const Sa = wt(Array.prototype.forEach), d_ = wt(Array.prototype.lastIndexOf), Eh = wt(Array.prototype.pop), ul = wt(Array.prototype.push), f_ = wt(Array.prototype.slice), h_ = wt(Array.prototype.splice), xr = Array.isArray, nc = rb(Set), rc = wt(Set.prototype.add), cl = wt(Set.prototype.has), Kn = wt(String.prototype.toLowerCase), lc = wt(String.prototype.toString), $h = wt(String.prototype.match), dl = wt(String.prototype.replace), xh = wt(String.prototype.indexOf), p_ = wt(String.prototype.trim), v_ = wt(Number.prototype.toString), b_ = wt(Boolean.prototype.toString), Oh = typeof BigInt > "u" ? null : wt(BigInt.prototype.toString), Nh = typeof Symbol > "u" ? null : wt(Symbol.prototype.toString), hi = wt(Object.prototype.hasOwnProperty), fl = wt(Object.prototype.toString), Ut = wt(RegExp.prototype.test), Ca = rb(TypeError);
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
function et(e, t) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Kn;
  if (Ah && Ah(e, null), !xr(t)) return e;
  let a = t.length;
  for (; a--; ) {
    let n = t[a];
    if (typeof n == "string") {
      const r = i(n);
      r !== n && (c_(t) || (t[a] = r), n = r);
    }
    e[n] = !0;
  }
  return e;
}
function g_(e) {
  for (let t = 0; t < e.length; t++) hi(e, t) || (e[t] = null);
  return e;
}
function ki(e) {
  const t = Sr(null);
  for (const a of tb(e)) {
    var i = o_(a, 2);
    const n = i[0], r = i[1];
    hi(e, n) && (xr(r) ? t[n] = g_(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = ki(r) : t[n] = r);
  }
  return t;
}
function m_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return v_(e);
    case "boolean":
      return b_(e);
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
function y_(e, t) {
  for (; e !== null; ) {
    const i = ab(e, t);
    if (i) return i.get ? wt(i.get) : null;
    e = ib(e);
  }
  return null;
}
function __(e) {
  try {
    return Ut(e, ""), !0;
  } catch {
    return !1;
  }
}
const Rh = Pt([
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
]), sc = Pt([
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
]), oc = Pt([
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
]), w_ = Pt([
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
]), uc = Pt([
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
]), k_ = Pt([
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
]), Ih = Pt(["#text"]), Lh = Pt([
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
]), cc = Pt([
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
]), Ph = Pt([
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
]), Us = Pt([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), S_ = Vt(/{{[\w\W]*|^[\w\W]*}}/g), C_ = Vt(/<%[\w\W]*|^[\w\W]*%>/g), T_ = Vt(/\${[\w\W]*/g), A_ = Vt(/^data-[\-\w.\u00B7-\uFFFF]+$/), E_ = Vt(/^aria-[\-\w]+$/), Dh = Vt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), $_ = Vt(/^(?:\w+script|data):/i), x_ = Vt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), O_ = Vt(/^html$/i), N_ = Vt(/^[a-z][.\w]*(-[.\w]+)+$/i), dc = Vt(/<[/\w!]/g), Fh = Vt(/<[/\w]/g), R_ = Vt(/<\/no(script|embed|frames)/i), Mh = Vt(/\/>/i), Et = {
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
}, I_ = Pt(et({}, [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
])), L_ = function() {
  return typeof window > "u" ? null : window;
}, P_ = function(t, i) {
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
  return hi(t, i) && xr(t[i]) ? et(n.base ? ki(n.base) : {}, t[i], n.transform) : a;
}, fc = function(t, i, a) {
  const n = hi(t, i) ? t[i] : void 0;
  return n && typeof n == "object" ? ki(n) : a();
};
function lb() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : L_();
  const t = (ge) => lb(ge);
  if (t.version = "3.4.17", t.removed = [], !e || !e.document || e.document.nodeType !== Et.document || !e.Element)
    return t.isSupported = !1, t;
  let i = e.document;
  const a = i, n = a.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, c = e.Element, d = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, v = e.trustedTypes, g = c.prototype, m = Ni(g, "cloneNode"), k = Ni(g, "remove"), C = Ni(g, "removeAttributeNode"), S = Ni(g, "nextSibling"), $ = Ni(g, "childNodes"), L = Ni(g, "parentNode"), I = Ni(g, "shadowRoot"), P = Ni(g, "attributes"), N = s && s.prototype ? Ni(s.prototype, "nodeType") : null, pe = s && s.prototype ? Ni(s.prototype, "nodeName") : null, Q = s && s.prototype ? Ni(s.prototype, "ownerDocument") : null, x = function(E) {
    return N ? N(E) : E.nodeType;
  }, B = function(E) {
    return pe ? pe(E) : E.nodeName;
  }, K = y_(g, "namespaceURI"), Z = function(E) {
    return K ? K(E) : E.namespaceURI;
  };
  if (typeof r == "function") {
    const ge = i.createElement("template");
    ge.content && ge.content.ownerDocument && (i = ge.content.ownerDocument);
  }
  let se, H = "", Y, R = !1, G = 0;
  const X = function() {
    if (G > 0) throw Ca('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ae = function(E) {
    X(), G++;
    try {
      return se.createHTML(E);
    } finally {
      G--;
    }
  }, J = function(E) {
    X(), G++;
    try {
      return se.createScriptURL(E);
    } finally {
      G--;
    }
  }, be = function() {
    return R || (Y = P_(v, n), R = !0), Y;
  }, Te = i, Le = Te.implementation, Oe = Te.createNodeIterator, Me = Te.createDocumentFragment, Ze = Te.getElementsByTagName, ct = a.importNode;
  let le = Uh();
  t.isSupported = typeof tb == "function" && typeof L == "function" && Le && Le.createHTMLDocument !== void 0;
  const te = S_, q = C_, Se = T_, it = A_, ne = E_, T = $_, O = x_, D = N_;
  let V = Dh, U = null;
  const ee = et({}, [
    ...Rh,
    ...sc,
    ...oc,
    ...uc,
    ...Ih
  ]);
  let re = null;
  const ue = et({}, [
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
  })), ce = null, Ne = null;
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
  let $e = !0, Re = !0, He = !1, Ye = !0, Ve = !1, at = !0, dt = !1, _t = !1, bt = null, ii = null, vi = !1, kt = !1, Ot = !1, Ui = !1, Gt = !0, bi = !1;
  const An = "user-content-";
  let Yi = !0, En = !1, Ai = null, Zi = {}, Xi = null;
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
  let da = null;
  const Ga = et({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let Ka = null;
  const Wa = et({}, [
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
  const $n = et({}, [
    ft,
    rr,
    gi
  ], lc), Za = Pt([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let ha = et({}, Za);
  const Xa = Pt(["annotation-xml"]);
  let pa = et({}, Xa);
  const xn = et({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let Ei = null;
  const Su = ["application/xhtml+xml", "text/html"], ds = "text/html";
  let rt = null, va = null;
  const Cu = i.createElement("form"), fs = function(E) {
    return E instanceof RegExp || E instanceof Function;
  }, Pr = function() {
    let E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (va && va === E) return;
    (!E || typeof E != "object") && (E = {}), E = ki(E), Ei = Su.indexOf(E.PARSER_MEDIA_TYPE) === -1 ? ds : E.PARSER_MEDIA_TYPE, rt = Ei === "application/xhtml+xml" ? lc : Kn, U = sn(E, "ALLOWED_TAGS", ee, { transform: rt }), re = sn(E, "ALLOWED_ATTR", ue, { transform: rt }), lr = sn(E, "ALLOWED_NAMESPACES", $n, { transform: lc }), Ka = sn(E, "ADD_URI_SAFE_ATTR", Wa, {
      transform: rt,
      base: Wa
    }), da = sn(E, "ADD_DATA_URI_TAGS", Ga, {
      transform: rt,
      base: Ga
    }), Xi = sn(E, "FORBID_CONTENTS", Lr, { transform: rt }), ce = sn(E, "FORBID_TAGS", ki({}), { transform: rt }), Ne = sn(E, "FORBID_ATTR", ki({}), { transform: rt }), Zi = hi(E, "USE_PROFILES") ? E.USE_PROFILES && typeof E.USE_PROFILES == "object" ? ki(E.USE_PROFILES) : E.USE_PROFILES : !1, $e = E.ALLOW_ARIA_ATTR !== !1, Re = E.ALLOW_DATA_ATTR !== !1, He = E.ALLOW_UNKNOWN_PROTOCOLS || !1, Ye = E.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ve = E.SAFE_FOR_TEMPLATES || !1, at = E.SAFE_FOR_XML !== !1, dt = E.WHOLE_DOCUMENT || !1, kt = E.RETURN_DOM || !1, Ot = E.RETURN_DOM_FRAGMENT || !1, Ui = E.RETURN_TRUSTED_TYPE || !1, vi = E.FORCE_BODY || !1, Gt = E.SANITIZE_DOM !== !1, bi = E.SANITIZE_NAMED_PROPS || !1, Yi = E.KEEP_CONTENT !== !1, En = E.IN_PLACE || !1, V = __(E.ALLOWED_URI_REGEXP) ? E.ALLOWED_URI_REGEXP : Dh, fa = typeof E.NAMESPACE == "string" ? E.NAMESPACE : gi, ha = fc(E, "MATHML_TEXT_INTEGRATION_POINTS", () => et({}, Za)), pa = fc(E, "HTML_INTEGRATION_POINTS", () => et({}, Xa));
    const M = fc(E, "CUSTOM_ELEMENT_HANDLING", () => Sr(null));
    if (me = Sr(null), hi(M, "tagNameCheck") && fs(M.tagNameCheck) && (me.tagNameCheck = M.tagNameCheck), hi(M, "attributeNameCheck") && fs(M.attributeNameCheck) && (me.attributeNameCheck = M.attributeNameCheck), hi(M, "allowCustomizedBuiltInElements") && typeof M.allowCustomizedBuiltInElements == "boolean" && (me.allowCustomizedBuiltInElements = M.allowCustomizedBuiltInElements), Vt(me), Ve && (Re = !1), Ot && (kt = !0), Zi && (U = et({}, Ih), re = Sr(null), Zi.html === !0 && (et(U, Rh), et(re, Lh)), Zi.svg === !0 && (et(U, sc), et(re, cc), et(re, Us)), Zi.svgFilters === !0 && (et(U, oc), et(re, cc), et(re, Us)), Zi.mathMl === !0 && (et(U, uc), et(re, Ph), et(re, Us))), we.tagCheck = null, we.attributeCheck = null, hi(E, "ADD_TAGS") && (typeof E.ADD_TAGS == "function" ? we.tagCheck = E.ADD_TAGS : xr(E.ADD_TAGS) && (U === ee && (U = ki(U)), et(U, E.ADD_TAGS, rt))), hi(E, "ADD_ATTR") && (typeof E.ADD_ATTR == "function" ? we.attributeCheck = E.ADD_ATTR : xr(E.ADD_ATTR) && (re === ue && (re = ki(re)), et(re, E.ADD_ATTR, rt))), hi(E, "ADD_FORBID_CONTENTS") && xr(E.ADD_FORBID_CONTENTS) && (Xi === Lr && (Xi = ki(Xi)), et(Xi, E.ADD_FORBID_CONTENTS, rt)), Yi && (U["#text"] = !0), dt && et(U, [
      "html",
      "head",
      "body"
    ]), U.table && (et(U, ["tbody"]), delete ce.tbody), E.TRUSTED_TYPES_POLICY) {
      if (typeof E.TRUSTED_TYPES_POLICY.createHTML != "function") throw Ca('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof E.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Ca('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const oe = se;
      se = E.TRUSTED_TYPES_POLICY;
      try {
        H = ae("");
      } catch (de) {
        throw se = oe, de;
      }
    } else E.TRUSTED_TYPES_POLICY === null ? (se = void 0, H = "") : (se === void 0 && (se = be()), se && typeof H == "string" && (H = ae("")));
    Pt && Pt(E), va = E;
  }, gt = et({}, [
    ...sc,
    ...oc,
    ...w_
  ]), sr = et({}, [...uc, ...k_]), Tu = function(E, M, oe) {
    return M.namespaceURI === gi ? E === "svg" : M.namespaceURI === ft ? E === "svg" && (oe === "annotation-xml" || ha[oe]) : !!gt[E];
  }, Au = function(E, M, oe) {
    return M.namespaceURI === gi ? E === "math" : M.namespaceURI === rr ? E === "math" && pa[oe] : !!sr[E];
  }, ba = function(E, M, oe) {
    return M.namespaceURI === rr && !pa[oe] || M.namespaceURI === ft && !ha[oe] ? !1 : !sr[E] && (xn[E] || !gt[E]);
  }, Eu = function(E) {
    const M = Z(E), oe = Kn(B(E)), de = L(E);
    let Ie, Fe;
    return de && x(de) === Et.element ? (Ie = { namespaceURI: Z(de) }, Fe = Kn(B(de))) : (Ie = { namespaceURI: fa }, Fe = "template"), lr[M] ? M === rr ? Tu(oe, Ie, Fe) : M === ft ? Au(oe, Ie, Fe) : M === gi ? ba(oe, Ie, Fe) : !!(Ei === "application/xhtml+xml" && lr[M]) : !1;
  }, ai = function(E) {
    ul(t.removed, { element: E });
    try {
      L(E).removeChild(E);
    } catch {
      if (k(E), !L(E)) throw Ca("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, or = function(E, M, oe) {
    try {
      C(E, M);
    } catch {
      try {
        E.removeAttribute(oe);
      } catch {
      }
    }
  }, Dr = function(E) {
    Mr(E);
    const M = $(E);
    M && Sa(f_(M), (de) => {
      try {
        k(de);
      } catch {
      }
    });
    const oe = x(E) === Et.element ? P(E) : null;
    if (oe) for (let de = oe.length - 1; de >= 0; --de) {
      const Ie = oe[de], Fe = Ie && Ie.name;
      typeof Fe == "string" && or(E, Ie, Fe);
    }
  }, Ja = function(E, M, oe) {
    if (!oe) try {
      oe = M.getAttributeNode(E);
    } catch {
      oe = null;
    }
    ul(t.removed, {
      attribute: oe || null,
      from: M
    });
    try {
      oe ? C(M, oe) : M.removeAttribute(E);
    } catch {
      try {
        M.removeAttribute(E);
      } catch {
      }
    }
    if (E === "is")
      if (kt || Ot) try {
        ai(M);
      } catch {
      }
      else try {
        M.setAttribute(E, "");
      } catch {
      }
  }, hs = function(E) {
    const M = P(E);
    if (M)
      for (let oe = M.length - 1; oe >= 0; --oe) {
        const de = M[oe], Ie = de && de.name;
        typeof Ie != "string" || re[rt(Ie)] || or(E, de, Ie);
      }
  }, Fr = function(E, M) {
    let oe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const de = [E];
    for (; de.length > 0; ) {
      const Ie = de.pop();
      if (M(Ie) === !1) continue;
      if (oe && x(Ie) === Et.element) {
        const Ke = I(Ie);
        zi(Ke) && de.push(Ke);
      }
      const Fe = $(Ie);
      if (Fe) for (let Ke = Fe.length - 1; Ke >= 0; --Ke) de.push(Fe[Ke]);
    }
  }, Mr = function(E) {
    Fr(E, (M) => {
      x(M) === Et.element && hs(M);
    });
  }, Ur = function(E) {
    const M = [];
    return Fr(E, (oe) => {
      M.push(oe);
    }, !0), M;
  }, $u = function(E, M) {
    const oe = nc();
    Sa(Ur(E), (de) => {
      x(de) === Et.element && rc(oe, de);
    }), Sa(M, (de) => {
      x(de) === Et.element && !cl(oe, de) && hs(de);
    });
  }, ps = function(E, M) {
    let oe = !1;
    return Sa(t.removed, (de) => {
      de.element && (oe = oe || de.element === E, Mr(de.element));
    }), $u(E, M), oe;
  }, xu = 8, Ou = function(E, M) {
    const oe = Ai;
    let de = null;
    const Ie = () => (de || (de = nc(), Sa(M, (Fe) => {
      rc(de, Fe);
    })), de);
    for (let Fe = 0; ; Fe++) {
      const Ke = Ur(E), mt = [E];
      let Ct = !1;
      if (Sa(Ke, (At) => {
        x(At) === Et.documentFragment ? ul(mt, At) : !Ct && !cl(oe, At) && (Ct = cl(Ie(), At));
      }), !Ct) return;
      if (Fe >= xu) throw Ca("the tree kept changing during in-place sanitization; refusing to return it");
      Sa(mt, (At, Ft) => {
        Nu(At, Ft > 0, E, Ie());
      });
    }
  }, Nu = function(E, M, oe, de) {
    const Ie = ur(E);
    let Fe;
    for (; Fe = Ie.nextNode(); )
      !cl(de, Fe) || cl(Ai, Fe) || (M && di(le.uponSanitizeShadowNode, Fe, null), mi(Fe, oe), hr(Fe, oe), zi(Fe.content) && tn(Fe.content));
  }, Ru = function(E) {
    Ai && rc(Ai, E);
  }, vs = function(E, M) {
    return at ? E === "patchsrc" ? !0 : E === "for" && M !== "label" && M !== "output" : !1;
  }, Iu = function(E) {
    at && Fr(E, (M) => {
      const oe = x(M);
      if (oe === Et.processingInstruction || oe === Et.comment && Ut(Fh, M.data)) {
        try {
          k(M);
        } catch {
        }
        return !1;
      }
      if (oe === Et.element) {
        const de = M, Ie = rt(B(M));
        try {
          de.hasAttribute && de.hasAttribute("patchsrc") && de.removeAttribute("patchsrc"), de.hasAttribute && de.hasAttribute("for") && vs("for", Ie) && de.removeAttribute("for");
        } catch {
        }
      }
      return !0;
    });
  }, bs = function(E) {
    let M = null, oe = null;
    if (vi) E = "<remove></remove>" + E;
    else {
      const Fe = $h(E, /^[\r\n\t ]+/);
      oe = Fe && Fe[0];
    }
    Ei === "application/xhtml+xml" && fa === gi && (E = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + E + "</body></html>");
    const de = se ? ae(E) : E;
    if (fa === gi) try {
      M = new y().parseFromString(de, Ei);
    } catch {
    }
    if (!M || !M.documentElement) {
      M = Le.createDocument(fa, "template", null);
      try {
        M.documentElement.innerHTML = Ya ? H : de;
      } catch {
      }
    }
    const Ie = M.body || M.documentElement;
    return E && oe && Ie.insertBefore(i.createTextNode(oe), Ie.childNodes[0] || null), fa === gi ? Ze.call(M, dt ? "html" : "body")[0] : dt ? M.documentElement : Ie;
  }, ur = function(E) {
    const M = Q ? Q(E) : E.ownerDocument;
    return Oe.call(M || E, E, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION, null);
  }, Qa = function(E) {
    return E = dl(E, te, " "), E = dl(E, q, " "), E = dl(E, Se, " "), E;
  }, On = function(E) {
    var M;
    cr(E);
    const oe = (M = E.querySelectorAll) === null || M === void 0 ? void 0 : M.call(E, "template");
    oe && Sa(oe, (de) => {
      zi(de.content) && On(de.content);
    });
  }, cr = function(E) {
    E.normalize();
    const M = Q ? Q(E) : E.ownerDocument, oe = Oe.call(M || E, E, d.SHOW_TEXT | d.SHOW_COMMENT | d.SHOW_CDATA_SECTION | d.SHOW_PROCESSING_INSTRUCTION, null);
    let de = oe.nextNode();
    for (; de; )
      de.data = Qa(de.data), de = oe.nextNode();
  }, en = function(E) {
    const M = pe ? pe(E) : null;
    return typeof M != "string" || rt(M) !== "form" ? !1 : typeof E.nodeName != "string" || typeof E.textContent != "string" || typeof E.removeChild != "function" || E.attributes !== P(E) || typeof E.removeAttribute != "function" || typeof E.removeAttributeNode != "function" || typeof E.getAttributeNode != "function" || typeof E.setAttribute != "function" || typeof E.namespaceURI != "string" || typeof E.insertBefore != "function" || typeof E.hasChildNodes != "function" || E.nodeType !== N(E) || E.childNodes !== $(E);
  }, zi = function(E) {
    if (!N || typeof E != "object" || E === null) return !1;
    try {
      return N(E) === Et.documentFragment;
    } catch {
      return !1;
    }
  }, Nn = function(E) {
    if (!N || typeof E != "object" || E === null) return !1;
    try {
      return typeof N(E) == "number";
    } catch {
      return !1;
    }
  };
  function di(ge, E, M) {
    ge.length !== 0 && Sa(ge, (oe) => {
      oe.call(t, E, M, va);
    });
  }
  const gs = function(E, M) {
    return !!(at && E.hasChildNodes() && !Nn(E.firstElementChild) && Ut(dc, E.textContent) && Ut(dc, E.innerHTML) || at && I_[M] && x(E) === Et.element && Z(E) === gi && (Nn(E.firstElementChild) || typeof E.textContent == "string" && Ut(dc, E.textContent)) || E.nodeType === Et.processingInstruction || at && E.nodeType === Et.comment && Ut(Fh, E.data));
  }, dr = function(E, M) {
    if (E instanceof RegExp) return Ut(E, M);
    if (E instanceof Function) {
      for (var oe = arguments.length, de = new Array(oe > 2 ? oe - 2 : 0), Ie = 2; Ie < oe; Ie++) de[Ie - 2] = arguments[Ie];
      return !!E(M, ...de);
    }
    return !1;
  }, zr = function(E, M, oe) {
    if (!ce[M] && Br(M) && dr(me.tagNameCheck, M)) return !1;
    if (Yi && !Xi[M] && !Xi[Kn(M)]) {
      const de = L(E), Ie = $(E);
      if (Ie && de) {
        const Fe = Ie.length;
        for (let Ke = Fe - 1; Ke >= 0; --Ke) {
          const mt = E === oe ? m(Ie[Ke], !0) : Ie[Ke];
          de.insertBefore(mt, S(E));
        }
      }
    }
    return ai(E), !0;
  }, fr = function(E, M, oe, de) {
    return E.length === 0 ? M : M === oe || M === de ? ki(M) : M;
  }, ga = function(E, M) {
    return E === M || L(E) !== null ? !1 : (En && Mr(E), !0);
  }, mi = function(E, M) {
    if (Ru(E), di(le.beforeSanitizeElements, E, null), ga(E, M)) return !0;
    if (en(E))
      return ai(E), !0;
    const oe = rt(B(E));
    if (U = fr(le.uponSanitizeElement, U, ee, bt), di(le.uponSanitizeElement, E, {
      tagName: oe,
      allowedTags: U
    }), ga(E, M)) return !0;
    if (gs(E, oe))
      return ai(E), !0;
    if (ce[oe] || !(we.tagCheck instanceof Function && we.tagCheck(oe)) && !U[oe]) {
      const de = zr(E, oe, M);
      return de === !1 && (di(le.afterSanitizeElements, E, null), ga(E, M)) ? !0 : de;
    }
    if (x(E) === Et.element && !Eu(E) || (oe === "noscript" || oe === "noembed" || oe === "noframes") && Ut(R_, E.innerHTML))
      return ai(E), !0;
    if (Ve && E.nodeType === Et.text) {
      const de = Qa(E.textContent);
      E.textContent !== de && (ul(t.removed, { element: E.cloneNode() }), E.textContent = de);
    }
    return di(le.afterSanitizeElements, E, null), ga(E, M);
  }, jr = function(E, M, oe) {
    if (Ne[M] || vs(M, E) || Gt && (M === "id" || M === "name") && (oe in i || oe in Cu)) return !1;
    const de = re[M] || we.attributeCheck instanceof Function && we.attributeCheck(M, E);
    return Re && Ut(it, M) || $e && Ut(ne, M) ? !0 : de ? Ka[M] || Ut(V, dl(oe, O, "")) || (M === "src" || M === "xlink:href" || M === "href") && E !== "script" && xh(oe, "data:") === 0 && da[E] || He && !Ut(T, dl(oe, O, "")) ? !0 : !oe : Br(E) && dr(me.tagNameCheck, E) && dr(me.attributeNameCheck, M, E) || M === "is" && me.allowCustomizedBuiltInElements && dr(me.tagNameCheck, oe);
  }, ms = et({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Br = function(E) {
    return !ms[Kn(E)] && Ut(D, E);
  }, Lu = function(E, M, oe, de) {
    if (se && typeof v == "object" && typeof v.getAttributeType == "function" && !oe) switch (v.getAttributeType(E, M)) {
      case "TrustedHTML":
        return ae(de);
      case "TrustedScriptURL":
        return J(de);
    }
    return de;
  }, Pu = function(E, M, oe, de) {
    try {
      return oe ? E.setAttributeNS(oe, M, de) : E.setAttribute(M, de), en(E) ? (ai(E), !1) : !0;
    } catch {
      return Ja(M, E), !1;
    }
  }, Hr = function(E, M) {
    return at && Ut(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, M) ? !0 : Kn(E) === "attributename" && $h(M, "href") !== null;
  }, hr = function(E, M) {
    if (di(le.beforeSanitizeAttributes, E, null), ga(E, M)) return;
    const oe = E.attributes;
    if (!oe || en(E)) return;
    re = fr(le.uponSanitizeAttribute, re, ue, ii);
    const de = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: re,
      forceKeepAttr: void 0
    };
    let Ie = oe.length;
    const Fe = rt(E.nodeName);
    for (; Ie--; ) {
      const Ke = oe[Ie], mt = Ke.name, Ct = Ke.namespaceURI, At = Ke.value, Ft = rt(mt), $i = At;
      let Kt = mt === "value" ? $i : p_($i), ys = !1;
      if (de.attrName = Ft, de.attrValue = Kt, de.keepAttr = !0, de.forceKeepAttr = void 0, di(le.uponSanitizeAttribute, E, de), Kt = de.attrValue, bi && (Ft === "id" || Ft === "name") && xh(Kt, An) !== 0 && (Ja(mt, E, Ke), Kt = An + Kt, ys = !0), Hr(mt, Kt)) {
        Ja(mt, E, Ke);
        continue;
      }
      if (!de.forceKeepAttr) {
        if (!de.keepAttr) {
          Ja(mt, E, Ke);
          continue;
        }
        if (!Ye && Ut(Mh, Kt)) {
          Ja(mt, E, Ke);
          continue;
        }
        if (Ve && (Kt = Qa(Kt)), !jr(Fe, Ft, Kt)) {
          Ja(mt, E, Ke);
          continue;
        }
        Kt = Lu(Fe, Ft, Ct, Kt), Kt !== $i && Pu(E, mt, Ct, Kt) && ys && Eh(t.removed);
      }
    }
    di(le.afterSanitizeAttributes, E, null), ga(E, M);
  }, tn = function(E) {
    let M = null;
    const oe = ur(E);
    for (di(le.beforeSanitizeShadowDOM, E, null); M = oe.nextNode(); )
      if (di(le.uponSanitizeShadowNode, M, null), mi(M, E), hr(M, E), zi(M.content) && tn(M.content), x(M) === Et.element) {
        const de = I(M);
        zi(de) && (Vr(de), tn(de));
      }
    Ve && cr(E), di(le.afterSanitizeShadowDOM, E, null);
  }, Vr = function(E) {
    const M = [{
      node: E,
      shadow: null
    }];
    for (; M.length > 0; ) {
      const oe = M.pop();
      if (oe.shadow) {
        tn(oe.shadow);
        continue;
      }
      const de = oe.node, Ie = x(de) === Et.element, Fe = $(de);
      if (Fe) for (let Ke = Fe.length - 1; Ke >= 0; --Ke) M.push({
        node: Fe[Ke],
        shadow: null
      });
      if (Ie) {
        const Ke = pe ? pe(de) : null;
        if (typeof Ke == "string" && rt(Ke) === "template") {
          const mt = de.content;
          zi(mt) && M.push({
            node: mt,
            shadow: null
          });
        }
      }
      if (Ie) {
        const Ke = I(de);
        zi(Ke) && M.push({
          node: null,
          shadow: Ke
        }, {
          node: Ke,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(ge) {
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = null, oe = null, de = null, Ie = null;
    if (Ya = !ge, Ya && (ge = "<!-->"), typeof ge != "string" && !Nn(ge) && (ge = m_(ge), typeof ge != "string"))
      throw Ca("dirty is not a string, aborting");
    if (!t.isSupported) return ge;
    _t ? (U = bt, re = ii) : Pr(E), (le.uponSanitizeElement.length > 0 || le.uponSanitizeAttribute.length > 0) && (U = ki(U)), le.uponSanitizeAttribute.length > 0 && (re = ki(re)), t.removed = [];
    const Fe = En && typeof ge != "string" && Nn(ge);
    let Ke = [];
    const mt = Ai;
    if (Fe) {
      Iu(ge);
      const Ft = B(ge);
      if (typeof Ft == "string") {
        const $i = rt(Ft);
        if (!U[$i] || ce[$i])
          throw Dr(ge), Ca("root node is forbidden and cannot be sanitized in-place");
      }
      if (en(ge))
        throw Dr(ge), Ca("root node is clobbered and cannot be sanitized in-place");
      Ke = Ur(ge), Ai = nc();
    } else if (Nn(ge))
      M = bs("<!---->"), oe = M.ownerDocument.importNode(ge, !0), oe.nodeType === Et.element && oe.nodeName === "BODY" || oe.nodeName === "HTML" ? M = oe : M.appendChild(oe), Vr(M);
    else {
      if (!kt && !Ve && !dt && ge.indexOf("<") === -1) return se && Ui ? ae(ge) : ge;
      if (M = bs(ge), !M) return kt ? null : Ui ? H : "";
    }
    M && vi && ai(M.firstChild);
    const Ct = Fe ? ge : M;
    try {
      Fe && Vr(ge);
      const Ft = ur(Ct);
      for (; de = Ft.nextNode(); )
        mi(de, Ct), hr(de, Ct), zi(de.content) && tn(de.content);
      Fe && Ou(ge, Ke);
    } catch (Ft) {
      throw Fe && (Dr(ge), ps(ge, Ke)), Ft;
    } finally {
      Ai = mt;
    }
    if (Fe) {
      if (ps(ge, Ke)) throw Ca("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return Ve && On(ge), ge;
    }
    if (kt) {
      if (Ve && On(M), Ot)
        for (Ie = Me.call(M.ownerDocument); M.firstChild; ) Ie.appendChild(M.firstChild);
      else Ie = M;
      return (re.shadowroot || re.shadowrootmode) && (Ie = ct.call(a, Ie, !0)), Ie;
    }
    let At = dt ? M.outerHTML : M.innerHTML;
    return dt && U["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && Ut(O_, M.ownerDocument.doctype.name) && (At = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + At), Ve && (At = Qa(At)), se && Ui ? ae(At) : At;
  }, t.setConfig = function() {
    let ge = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pr(ge), _t = !0, bt = U, ii = re;
  }, t.clearConfig = function() {
    va = null, _t = !1, bt = null, ii = null, se = Y, H = "";
  }, t.isValidAttribute = function(ge, E, M) {
    va || Pr({});
    const oe = rt(ge), de = rt(E);
    return typeof M == "string" && (Hr(E, M) || !Ye && Ut(Mh, M)) ? !1 : jr(oe, de, M);
  }, t.addHook = function(ge, E) {
    typeof E == "function" && hi(le, ge) && ul(le[ge], E);
  }, t.removeHook = function(ge, E) {
    if (hi(le, ge)) {
      if (E !== void 0) {
        const M = d_(le[ge], E);
        return M === -1 ? void 0 : h_(le[ge], M, 1)[0];
      }
      return Eh(le[ge]);
    }
  }, t.removeHooks = function(ge) {
    hi(le, ge) && (le[ge] = []);
  }, t.removeAllHooks = function() {
    le = Uh();
  }, t;
}
var sb = lb();
function Pd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hc, zh;
function D_() {
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
var F_ = D_();
const ho = /* @__PURE__ */ Pd(F_);
function ob() {
  return globalThis._nc_l10n_locale;
}
function M_() {
  return ob().replaceAll(/_/g, "-");
}
function us() {
  return globalThis._nc_l10n_language;
}
function U_(e) {
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
  }, d = (S) => S, y = (c.sanitize ? sb.sanitize : d) || d, v = c.escape ? ho : d, g = (S) => typeof S == "string" || typeof S == "number", m = (S, $, L) => S.replace(/%n/g, "" + L).replace(/{([^{}]*)}/g, (I, P) => {
    if ($ === void 0 || !(P in $))
      return v(I);
    const N = $[P];
    return g(N) ? v(`${N}`) : typeof N == "object" && g(N.value) ? (N.escape !== !1 ? ho : d)(`${N.value}`) : v(I);
  });
  let C = (n?.bundle ?? ub(e)).translations[t] || t;
  return C = Array.isArray(C) ? C[0] : C, y(typeof r == "object" || s !== void 0 ? m(
    C,
    r,
    s
  ) : C);
}
function It(e, t, i, a, n, r) {
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
function z_(e, t = us()) {
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
function j_(e, t = () => "", i = 256) {
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
class B_ {
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
  return new B_(e);
}
function H_() {
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
function V_() {
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
    ], C = ($) => {
      for (const [L, I] of k)
        $ = $.split(`${L}*`).join(`${L}{0,${I}}`).split(`${L}+`).join(`${L}{1,${I}}`);
      return $;
    }, S = ($, L, I) => {
      const P = C(L), N = g++;
      r($, N, L), v[$] = N, d[N] = L, y[N] = P, s[N] = new RegExp(L, I ? "g" : void 0), c[N] = new RegExp(P, I ? "g" : void 0);
    };
    S("NUMERICIDENTIFIER", "0|[1-9]\\d*"), S("NUMERICIDENTIFIERLOOSE", "\\d+"), S("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${m}*`), S("MAINVERSION", `(${d[v.NUMERICIDENTIFIER]})\\.(${d[v.NUMERICIDENTIFIER]})\\.(${d[v.NUMERICIDENTIFIER]})`), S("MAINVERSIONLOOSE", `(${d[v.NUMERICIDENTIFIERLOOSE]})\\.(${d[v.NUMERICIDENTIFIERLOOSE]})\\.(${d[v.NUMERICIDENTIFIERLOOSE]})`), S("PRERELEASEIDENTIFIER", `(?:${d[v.NONNUMERICIDENTIFIER]}|${d[v.NUMERICIDENTIFIER]})`), S("PRERELEASEIDENTIFIERLOOSE", `(?:${d[v.NONNUMERICIDENTIFIER]}|${d[v.NUMERICIDENTIFIERLOOSE]})`), S("PRERELEASE", `(?:-(${d[v.PRERELEASEIDENTIFIER]}(?:\\.${d[v.PRERELEASEIDENTIFIER]})*))`), S("PRERELEASELOOSE", `(?:-?(${d[v.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${d[v.PRERELEASEIDENTIFIERLOOSE]})*))`), S("BUILDIDENTIFIER", `${m}+`), S("BUILD", `(?:\\+(${d[v.BUILDIDENTIFIER]}(?:\\.${d[v.BUILDIDENTIFIER]})*))`), S("FULLPLAIN", `v?${d[v.MAINVERSION]}${d[v.PRERELEASE]}?${d[v.BUILD]}?`), S("FULL", `^${d[v.FULLPLAIN]}$`), S("LOOSEPLAIN", `[v=\\s]*${d[v.MAINVERSIONLOOSE]}${d[v.PRERELEASELOOSE]}?${d[v.BUILD]}?`), S("LOOSE", `^${d[v.LOOSEPLAIN]}$`), S("GTLT", "((?:<|>)?=?)"), S("XRANGEIDENTIFIERLOOSE", `${d[v.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), S("XRANGEIDENTIFIER", `${d[v.NUMERICIDENTIFIER]}|x|X|\\*`), S("XRANGEPLAIN", `[v=\\s]*(${d[v.XRANGEIDENTIFIER]})(?:\\.(${d[v.XRANGEIDENTIFIER]})(?:\\.(${d[v.XRANGEIDENTIFIER]})(?:${d[v.PRERELEASE]})?${d[v.BUILD]}?)?)?`), S("XRANGEPLAINLOOSE", `[v=\\s]*(${d[v.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[v.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[v.XRANGEIDENTIFIERLOOSE]})(?:${d[v.PRERELEASELOOSE]})?${d[v.BUILD]}?)?)?`), S("XRANGE", `^${d[v.GTLT]}\\s*${d[v.XRANGEPLAIN]}$`), S("XRANGELOOSE", `^${d[v.GTLT]}\\s*${d[v.XRANGEPLAINLOOSE]}$`), S("COERCEPLAIN", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`), S("COERCE", `${d[v.COERCEPLAIN]}(?:$|[^\\d])`), S("COERCEFULL", d[v.COERCEPLAIN] + `(?:${d[v.PRERELEASE]})?(?:${d[v.BUILD]})?(?:$|[^\\d])`), S("COERCERTL", d[v.COERCE], !0), S("COERCERTLFULL", d[v.COERCEFULL], !0), S("LONETILDE", "(?:~>?)"), S("TILDETRIM", `(\\s*)${d[v.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", S("TILDE", `^${d[v.LONETILDE]}${d[v.XRANGEPLAIN]}$`), S("TILDELOOSE", `^${d[v.LONETILDE]}${d[v.XRANGEPLAINLOOSE]}$`), S("LONECARET", "(?:\\^)"), S("CARETTRIM", `(\\s*)${d[v.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", S("CARET", `^${d[v.LONECARET]}${d[v.XRANGEPLAIN]}$`), S("CARETLOOSE", `^${d[v.LONECARET]}${d[v.XRANGEPLAINLOOSE]}$`), S("COMPARATORLOOSE", `^${d[v.GTLT]}\\s*(${d[v.LOOSEPLAIN]})$|^$`), S("COMPARATOR", `^${d[v.GTLT]}\\s*(${d[v.FULLPLAIN]})$|^$`), S("COMPARATORTRIM", `(\\s*)${d[v.GTLT]}\\s*(${d[v.LOOSEPLAIN]}|${d[v.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", S("HYPHENRANGE", `^\\s*(${d[v.XRANGEPLAIN]})\\s+-\\s+(${d[v.XRANGEPLAIN]})\\s*$`), S("HYPHENRANGELOOSE", `^\\s*(${d[v.XRANGEPLAINLOOSE]})\\s+-\\s+(${d[v.XRANGEPLAINLOOSE]})\\s*$`), S("STAR", "(<|>)?=?\\s*\\*"), S("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), S("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(zs, zs.exports)), zs.exports;
}
var bc, Vh;
function q_() {
  if (Vh) return bc;
  Vh = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return bc = (a) => a ? typeof a != "object" ? e : a : t, bc;
}
var gc, qh;
function G_() {
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
  const e = db(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: i } = fb(), { safeRe: a, t: n } = V_(), r = q_(), { compareIdentifiers: s } = G_(), c = (y, v) => {
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
          const C = +k;
          if (C >= 0 && C < i)
            return C;
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
            let C = this.prerelease.length;
            for (; --C >= 0; )
              typeof this.prerelease[C] == "number" && (this.prerelease[C]++, C = -2);
            if (C === -1) {
              if (g === this.prerelease.join(".") && m === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(k);
            }
          }
          if (g) {
            let C = [g, k];
            if (m === !1 && (C = [g]), c(this.prerelease, g)) {
              const S = this.prerelease[g.split(".").length];
              isNaN(S) && (this.prerelease = C);
            } else
              this.prerelease = C;
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
function K_() {
  if (Kh) return yc;
  Kh = 1;
  const e = hb();
  return yc = (i, a) => new e(i, a).major, yc;
}
var W_ = K_();
const Wh = /* @__PURE__ */ Pd(W_);
var _c, Yh;
function Y_() {
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
function Z_() {
  if (Zh) return wc;
  Zh = 1;
  const e = Y_();
  return wc = (i, a) => {
    const n = e(i, a);
    return n ? n.version : null;
  }, wc;
}
var X_ = Z_();
const J_ = /* @__PURE__ */ Pd(X_);
class Q_ {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !J_(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Wh(t.getVersion()) !== Wh(this.getVersion()) && console.warn(
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
class e0 {
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
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? hl = new Q_(window._nc_event_bus) : hl = window._nc_event_bus = new e0(), hl);
}
function pb(e, t) {
  Dd().subscribe(e, t);
}
function t0(e, t) {
  Dd().unsubscribe(e, t);
}
function Fa(e, ...t) {
  Dd().emit(e, ...t);
}
const vb = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const i0 = Object.prototype.toString, a0 = (e) => i0.call(e) === "[object Object]", mr = () => {
}, n0 = /* @__PURE__ */ r0();
function r0() {
  var e, t, i;
  return vb && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((i = window) === null || i === void 0 ? void 0 : i.navigator.userAgent));
}
function kc(e) {
  return Array.isArray(e) ? e : [e];
}
function l0(e, t, i) {
  return qe(e, t, {
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
  const t = (a, n, r, s) => (a.addEventListener(n, r, s), () => a.removeEventListener(n, r, s)), i = j(() => {
    const a = kc(Pa(e[0])).filter((n) => n != null);
    return a.every((n) => typeof n != "string") ? a : void 0;
  });
  return l0(() => {
    var a, n;
    return [
      (a = (n = i.value) === null || n === void 0 ? void 0 : n.map((r) => yl(r))) !== null && a !== void 0 ? a : [bb].filter((r) => r != null),
      kc(Pa(i.value ? e[1] : e[0])),
      kc(u(i.value ? e[2] : e[1])),
      Pa(i.value ? e[3] : e[2])
    ];
  }, ([a, n, r, s], c, d) => {
    if (!a?.length || !n?.length || !r?.length) return;
    const y = a0(s) ? { ...s } : s, v = a.flatMap((g) => n.flatMap((m) => r.map((k) => t(g, m, k, y))));
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
  if (n0 && !Xh) {
    Xh = !0;
    const $ = { passive: !0 };
    Array.from(a.document.body.children).forEach((L) => L.addEventListener("click", mr, $)), a.document.documentElement.addEventListener("click", mr, $);
  }
  let d = !0;
  const y = ($) => Pa(n).some((L) => {
    if (typeof L == "string") return Array.from(a.document.querySelectorAll(L)).some((I) => I === $.target || $.composedPath().includes(I));
    {
      const I = yl(L);
      return I && ($.target === I || $.composedPath().includes(I));
    }
  });
  function v($) {
    const L = Pa($);
    return L && L.$.subTree.shapeFlag === 16;
  }
  function g($, L) {
    const I = Pa($), P = I.$.subTree && I.$.subTree.children;
    return P == null || !Array.isArray(P) ? !1 : P.some((N) => N.el === L.target || L.composedPath().includes(N.el));
  }
  const m = ($) => {
    const L = yl(e);
    if ($.target != null && !(!(L instanceof Element) && v(e) && g(e, $)) && !(!L || L === $.target || $.composedPath().includes(L))) {
      if ("detail" in $ && $.detail === 0 && (d = !y($)), !d) {
        d = !0;
        return;
      }
      t($);
    }
  };
  let k = !1;
  const C = [
    Or(a, "click", ($) => {
      k || (k = !0, setTimeout(() => {
        k = !1;
      }, 0), m($));
    }, {
      passive: !0,
      capture: r
    }),
    Or(a, "pointerdown", ($) => {
      const L = yl(e);
      d = !y($) && !!(L && !$.composedPath().includes(L));
    }, { passive: !0 }),
    s && Or(a, "blur", ($) => {
      setTimeout(() => {
        const L = yl(e);
        let I = a.document.activeElement;
        for (; I?.shadowRoot; ) I = I.shadowRoot.activeElement;
        I?.tagName === "IFRAME" && !L?.contains(a.document.activeElement) && t($);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), S = () => C.forEach(($) => $());
  return c ? {
    stop: S,
    cancel: () => {
      d = !1;
    },
    trigger: ($) => {
      d = !0, m($), d = !1;
    }
  } : S;
}
function s0(e, t = {}) {
  const { threshold: i = 50, onSwipe: a, onSwipeEnd: n, onSwipeStart: r, passive: s = !0 } = t, c = /* @__PURE__ */ Rt({
    x: 0,
    y: 0
  }), d = /* @__PURE__ */ Rt({
    x: 0,
    y: 0
  }), y = j(() => c.x - d.x), v = j(() => c.y - d.y), { max: g, abs: m } = Math, k = j(() => g(m(y.value), m(v.value)) >= i), C = /* @__PURE__ */ rv(!1), S = j(() => k.value ? m(y.value) > m(v.value) ? y.value > 0 ? "left" : "right" : v.value > 0 ? "up" : "down" : "none"), $ = (x) => [x.touches[0].clientX, x.touches[0].clientY], L = (x, B) => {
    c.x = x, c.y = B;
  }, I = (x, B) => {
    d.x = x, d.y = B;
  }, P = {
    passive: s,
    capture: !s
  }, N = (x) => {
    C.value && n?.(x, S.value), C.value = !1;
  }, pe = [
    Or(e, "touchstart", (x) => {
      if (x.touches.length !== 1) return;
      const [B, K] = $(x);
      L(B, K), I(B, K), r?.(x);
    }, P),
    Or(e, "touchmove", (x) => {
      if (x.touches.length !== 1) return;
      const [B, K] = $(x);
      I(B, K), P.capture && !P.passive && Math.abs(y.value) > Math.abs(v.value) && x.preventDefault(), !C.value && k.value && (C.value = !0), C.value && a?.(x);
    }, P),
    Or(e, ["touchend", "touchcancel"], N, P)
  ];
  return {
    isSwiping: C,
    direction: S,
    coordsStart: c,
    coordsEnd: d,
    lengthX: y,
    lengthY: v,
    stop: () => pe.forEach((x) => x())
  };
}
var o0 = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let i = t, a = e, n = My(), r = Fy(), s = /* @__PURE__ */ z([]), c = j(() => s.value.reduce((ne, T) => (ne[~~T.id] = T) && ne, {})), d = j(() => s.value.length), y = /* @__PURE__ */ z(null), v = /* @__PURE__ */ z(!1), g = /* @__PURE__ */ z({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), m = /* @__PURE__ */ z({
      splitter: null,
      timeoutId: null
    }), k = j(() => ({
      [`splitpanes splitpanes--${a.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": g.value.dragging,
      "splitpanes--ready": v.value
    })), C = () => {
      document.addEventListener("mousemove", L, { passive: !1 }), document.addEventListener("mouseup", I), "ontouchstart" in window && (document.addEventListener("touchmove", L, { passive: !1 }), document.addEventListener("touchend", I));
    }, S = () => {
      document.removeEventListener("mousemove", L, { passive: !1 }), document.removeEventListener("mouseup", I), "ontouchstart" in window && (document.removeEventListener("touchmove", L, { passive: !1 }), document.removeEventListener("touchend", I));
    }, $ = (ne, T) => {
      let O = ne.target.closest(".splitpanes__splitter");
      if (O) {
        let { left: D, top: V } = O.getBoundingClientRect(), { clientX: U, clientY: ee } = "ontouchstart" in window && ne.touches ? ne.touches[0] : ne;
        g.value.cursorOffset = a.horizontal ? ee - V : U - D;
      }
      C(), g.value.mouseDown = !0, g.value.activeSplitter = T, document.documentElement.style.cursor = a.horizontal ? "row-resize" : "col-resize";
    }, L = (ne) => {
      g.value.mouseDown && (ne.preventDefault(), g.value.dragging || (window.getSelection()?.removeAllRanges(), g.value.dragging = !0), requestAnimationFrame(() => {
        K(x(ne)), Se("resize", { event: ne }, !0);
      }));
    }, I = (ne) => {
      g.value.dragging && (window.getSelection()?.removeAllRanges(), Se("resized", { event: ne }, !0)), g.value.mouseDown = !1, g.value.activeSplitter = null, setTimeout(() => {
        g.value.dragging = !1, S(), document.documentElement.style.cursor = "";
      }, 100);
    }, P = (ne, T) => {
      "ontouchstart" in window && (ne.preventDefault(), m.value.splitter === T ? (clearTimeout(m.value.timeoutId), m.value.timeoutId = null, N(ne, T), m.value.splitter = null) : (m.value.splitter = T, m.value.timeoutId = setTimeout(() => m.value.splitter = null, 500))), g.value.dragging || Se("splitter-click", {
        event: ne,
        index: T
      }, !0);
    }, N = (ne, T) => {
      if (Se("splitter-dblclick", {
        event: ne,
        index: T
      }, !0), a.maximizePanes) {
        let O = 0;
        s.value = s.value.map((D, V) => (D.size = V === T ? D.max : D.min, V !== T && (O += D.min), D)), s.value[T].size -= O, Se("pane-maximize", {
          event: ne,
          index: T,
          pane: s.value[T]
        }), Se("resized", {
          event: ne,
          index: T
        }, !0);
      }
    }, pe = (ne, T) => {
      if (!a.keyboardStep) return;
      let O = a.horizontal ? ne.key === "ArrowDown" : ne.key === "ArrowRight", D = a.horizontal ? ne.key === "ArrowUp" : ne.key === "ArrowLeft";
      if (!O && !D) return;
      ne.preventDefault(), g.value.activeSplitter = T;
      let V = (O ? 1 : -1) * (a.rtl && !a.horizontal ? -1 : 1), U = H(T) + s.value[T].size;
      Z(Math.min(Math.max(U + V * a.keyboardStep, 0), 100)), Se("resize", { event: ne }, !0), Se("resized", { event: ne }, !0), g.value.activeSplitter = null;
    }, Q = (ne, T) => {
      let O = c.value[T];
      O && Se("pane-click", {
        event: ne,
        index: O.index,
        pane: O
      });
    }, x = (ne) => {
      let T = y.value.getBoundingClientRect(), { clientX: O, clientY: D } = "ontouchstart" in window && ne.touches ? ne.touches[0] : ne;
      return {
        x: O - (a.horizontal ? 0 : g.value.cursorOffset) - T.left,
        y: D - (a.horizontal ? g.value.cursorOffset : 0) - T.top
      };
    }, B = (ne) => {
      ne = ne[a.horizontal ? "y" : "x"];
      let T = y.value[a.horizontal ? "clientHeight" : "clientWidth"];
      return a.rtl && !a.horizontal && (ne = T - ne), ne * 100 / T;
    }, K = (ne) => {
      Z(B(ne));
    }, Z = (ne) => {
      let T = g.value.activeSplitter;
      if (T === null || T >= s.value.length - 1) return;
      let O = {
        prevPanesSize: H(T),
        nextPanesSize: Y(T),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, D = 0 + (a.pushOtherPanes ? 0 : O.prevPanesSize), V = 100 - (a.pushOtherPanes ? 0 : O.nextPanesSize);
      ne = Math.max(Math.min(ne, V), D);
      let U = [T, T + 1], ee = s.value[U[0]] || null, re = s.value[U[1]] || null, ue = ee !== null && ee.max < 100 && ne >= ee.max + O.prevPanesSize, me = re !== null && re.max < 100 && ne <= 100 - (re.max + Y(T + 1));
      if (ue || me) {
        ue ? (ee.size = ee.max, re.size = Math.min(Math.max(100 - ee.max - O.prevPanesSize - O.nextPanesSize, re.min), re.max)) : (ee.size = Math.min(Math.max(100 - re.max - O.prevPanesSize - Y(T + 1), ee.min), ee.max), re.size = re.max);
        return;
      }
      if (a.pushOtherPanes) {
        let ce = se(O, ne);
        if (!ce) return;
        ({ sums: O, panesToResize: U } = ce), ee = s.value[U[0]] || null, re = s.value[U[1]] || null;
      }
      ee !== null && (ee.size = Math.min(Math.max(ne - O.prevPanesSize - O.prevReachedMinPanes, ee.min), ee.max)), re !== null && (re.size = Math.min(Math.max(100 - ne - O.nextPanesSize - O.nextReachedMinPanes, re.min), re.max));
    }, se = (ne, T) => {
      let O = g.value.activeSplitter, D = [O, O + 1];
      if (T < ne.prevPanesSize + s.value[D[0]].min) {
        if (D[0] = R(O).index, ne.prevReachedMinPanes = 0, D[0] < O && s.value.forEach((V, U) => {
          U > D[0] && U <= O && (V.size = V.min, ne.prevReachedMinPanes += V.min);
        }), D[0] === void 0) return ne.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((V, U) => {
          U > 0 && U <= O && (V.size = V.min, ne.prevReachedMinPanes += V.min);
        }), s.value[D[1]].size = 100 - ne.prevReachedMinPanes - s.value[0].min - ne.prevPanesSize - ne.nextPanesSize, null;
        ne.prevPanesSize = H(D[0]);
      }
      return T > 100 - ne.nextPanesSize - s.value[D[1]].min && (D[1] = G(O).index, ne.nextReachedMinPanes = 0, D[1] > O + 1 && s.value.forEach((V, U) => {
        U > O && U < D[1] && (V.size = V.min, ne.nextReachedMinPanes += V.min);
      }), ne.nextPanesSize = D[1] === void 0 ? 0 : Y(D[1] - 1), D[1] === void 0) ? (ne.nextReachedMinPanes = 0, s.value.forEach((V, U) => {
        U >= O + 1 && (V.size = V.min, ne.nextReachedMinPanes += V.min);
      }), D[0] !== void 0 && (s.value[D[0]].size = 100 - ne.prevPanesSize - Y(D[0] - 1)), null) : {
        sums: ne,
        panesToResize: D
      };
    }, H = (ne) => s.value.reduce((T, O, D) => T + (D < ne ? O.size : 0), 0), Y = (ne) => s.value.reduce((T, O, D) => T + (D > ne + 1 ? O.size : 0), 0), R = (ne) => [...s.value].reverse().find((T) => T.index < ne && T.size > T.min) || {}, G = (ne) => s.value.find((T) => T.index > ne + 1 && T.size > T.min) || {}, X = () => {
      let ne = Array.from(y.value?.children || []);
      for (let T of ne) {
        let O = T.classList.contains("splitpanes__pane"), D = T.classList.contains("splitpanes__splitter");
        !O && !D && (T.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, ae = (ne, T, O = !1) => {
      let D = ne - 1, V = document.createElement("div");
      V.classList.add("splitpanes__splitter"), O || (V.onmousedown = (U) => $(U, D), typeof window < "u" && "ontouchstart" in window && (V.ontouchstart = (U) => $(U, D)), V.onclick = (U) => P(U, D + 1), a.keyboardStep && (V.setAttribute("tabindex", "0"), V.setAttribute("role", "separator"), V.setAttribute("aria-orientation", a.horizontal ? "horizontal" : "vertical"), V.onkeydown = (U) => pe(U, D))), V.ondblclick = (U) => N(U, D + 1), T.parentNode.insertBefore(V, T);
    }, J = (ne) => {
      ne.onmousedown = null, ne.onclick = null, ne.ondblclick = null, ne.onkeydown = null, ne.remove();
    }, be = () => {
      let ne = Array.from(y.value?.children || []);
      for (let O of ne) O.className.includes("splitpanes__splitter") && J(O);
      let T = 0;
      for (let O of ne) O.className.includes("splitpanes__pane") && (!T && a.firstSplitter ? ae(T, O, !0) : T && ae(T, O), T++);
    }, Te = ({ uid: ne, ...T }) => {
      let O = c.value[ne];
      for (let [D, V] of Object.entries(T)) O[D] = V;
    }, Le = !1, Oe = (ne) => {
      let T = -1;
      Array.from(y.value?.children || []).some((O) => (O.className.includes("splitpanes__pane") && T++, O.isSameNode(ne.el))), s.value.splice(T, 0, {
        ...ne,
        index: T
      }), s.value.forEach((O, D) => O.index = D), v.value && !Le && (Le = !0, Nt(() => {
        be(), Ze({ addedPane: s.value[T] }), Se("pane-add", { pane: s.value[T] }), Le = !1;
      }));
    }, Me = (ne) => {
      let T = s.value.findIndex((D) => D.id === ne);
      s.value[T].el = null;
      let O = s.value.splice(T, 1)[0];
      s.value.forEach((D, V) => D.index = V), Nt(() => {
        be(), Se("pane-remove", { pane: O }), Ze({ removedPane: {
          ...O
        } });
      });
    }, Ze = (ne = {}) => {
      !ne.addedPane && !ne.removedPane ? le() : s.value.some((T) => T.givenSize !== null || T.min || T.max < 100) ? te(ne) : ct(), v.value && Se("resized");
    }, ct = () => {
      let ne = 100 / d.value, T = 100, O = [], D = [];
      for (let V of s.value) V.size = Math.max(Math.min(ne, V.max), V.min), T -= V.size, V.size >= V.max && O.push(V.id), V.size <= V.min && D.push(V.id);
      Math.abs(T) > 0.1 && q(T, O, D);
    }, le = () => {
      let ne = 100, T = [], O = [], D = 0;
      for (let U of s.value) ne -= U.size, U.givenSize !== null && D++, U.size >= U.max && T.push(U.id), U.size <= U.min && O.push(U.id);
      let V = 100;
      if (ne > 0.1) {
        for (let U of s.value) U.givenSize === null && (U.size = Math.max(Math.min(ne / (d.value - D), U.max), U.min)), V -= U.size;
        V > 0.1 && q(V, T, O);
      }
    }, te = ({ addedPane: ne, removedPane: T } = {}) => {
      let O = s.value.reduce((ue, me) => ue + (me.givenSize === null ? 0 : me.givenSize), 0), D = s.value.filter((ue) => ue.givenSize === null).length, V = D > 0 ? (100 - O) / D : 0, U = 0, ee = [], re = [];
      for (let ue of s.value) U -= ue.size, ue.size >= ue.max && ee.push(ue.id), ue.size <= ue.min && re.push(ue.id);
      if (!(Math.abs(U) < 0.1)) {
        U = 100;
        for (let ue of s.value) ue.givenSize === null && (ue.size = Math.max(Math.min(V, ue.max), ue.min)), U -= ue.size, ue.size >= ue.max && ee.push(ue.id), ue.size <= ue.min && re.push(ue.id);
        Math.abs(U) > 0.1 && q(U, ee, re);
      }
    }, q = (ne, T, O) => {
      let D;
      D = ne > 0 ? ne / (d.value - T.length) : ne / (d.value - O.length), s.value.forEach((V, U) => {
        if (ne > 0 && !T.includes(V.id)) {
          let ee = Math.max(Math.min(V.size + D, V.max), V.min), re = ee - V.size;
          ne -= re, V.size = ee;
        } else if (!O.includes(V.id)) {
          let ee = Math.max(Math.min(V.size + D, V.max), V.min), re = ee - V.size;
          ne -= re, V.size = ee;
        }
      }), Math.abs(ne) > 0.1 && v.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, Se = (ne, T = void 0, O = !1) => {
      let D = T?.index ?? g.value.activeSplitter ?? null;
      i(ne, {
        ...T,
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
    qe(() => a.firstSplitter, () => be()), qe(() => a.horizontal, (ne) => Nt(() => {
      i("direction-changed", {
        horizontal: ne,
        panes: s.value.map((T) => ({
          min: T.min,
          max: T.max,
          size: T.size
        }))
      });
    })), Tt(() => {
      X(), be(), Ze(), Se("ready"), v.value = !0;
    }), Ti(() => v.value = !1);
    let it = () => {
      let { class: ne, ...T } = n;
      return fi("div", {
        ref: y,
        class: [k.value, ne],
        ...T
      }, r.default?.());
    };
    return Ii("panes", s), Ii("indexedPanes", c), Ii("horizontal", j(() => a.horizontal)), Ii("requestUpdate", Te), Ii("onPaneAdd", Oe), Ii("onPaneRemove", Me), Ii("onPaneClick", Q), (ne, T) => (h(), De(xd(it)));
  }
}), u0 = {
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
    let t = e, i = Xt("requestUpdate"), a = Xt("onPaneAdd"), n = Xt("horizontal"), r = Xt("onPaneRemove"), s = Xt("onPaneClick"), c = Sn()?.uid, d = Xt("indexedPanes"), y = j(() => d.value[c]), v = /* @__PURE__ */ z(null), g = j(() => {
      let S = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(S, k.value), m.value);
    }), m = j(() => {
      let S = parseFloat(t.minSize);
      return isNaN(S) ? 0 : S;
    }), k = j(() => {
      let S = parseFloat(t.maxSize);
      return isNaN(S) ? 100 : S;
    }), C = j(() => {
      let S = y.value?.size ?? (t.size === void 0 ? void 0 : g.value);
      return S === void 0 ? "" : `${n.value ? "height" : "width"}: ${S}%`;
    });
    return qe(() => g.value, (S) => i({
      uid: c,
      size: S
    })), qe(() => m.value, (S) => i({
      uid: c,
      min: S
    })), qe(() => k.value, (S) => i({
      uid: c,
      max: S
    })), Tt(() => {
      a({
        id: c,
        el: v.value,
        min: m.value,
        max: k.value,
        givenSize: t.size === void 0 ? null : g.value,
        size: g.value
      });
    }), Ti(() => r(c)), (S, $) => (h(), p("div", {
      ref_key: "paneEl",
      ref: v,
      class: "splitpanes__pane",
      onClick: $[0] ||= (L) => u(s)(L, S._.uid),
      style: pi(C.value)
    }, [Be(S.$slots, "default")], 4));
  }
}, c0 = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", d0 = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", f0 = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", h0 = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Fd = 1024, gb = Fd / 2, vo = (e) => document.documentElement.clientWidth < e, mb = /* @__PURE__ */ z(vo(Fd)), yb = /* @__PURE__ */ z(vo(gb));
window.addEventListener("resize", () => {
  mb.value = vo(Fd), yb.value = vo(gb);
}, { passive: !0 });
function cs() {
  return /* @__PURE__ */ zl(mb);
}
function p0() {
  return /* @__PURE__ */ zl(yb);
}
class v0 {
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
    return It("", t, i, a, n, { bundle: this.bundle });
  }
}
class b0 {
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
    const t = new v0((i) => z_(i, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function g0() {
  return new b0();
}
const _b = g0().detectLanguage().build(), Dt = (...e) => _b.gettext(...e);
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
const m0 = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], y0 = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], _0 = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], w0 = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], k0 = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], S0 = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], C0 = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], T0 = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], A0 = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const E0 = /* @__PURE__ */ Symbol(""), [$0] = window.OC?.config?.version?.split(".") ?? [], wb = Number.parseInt($0 ?? "35"), x0 = wb < 32, Tn = wb < 34, O0 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function N0() {
  return Xt(O0, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const ut = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [a, n] of t)
    i[a] = n;
  return i;
}, R0 = { class: "button-vue__wrapper" }, I0 = { class: "button-vue__icon" }, L0 = { class: "button-vue__text" }, P0 = /* @__PURE__ */ qt({
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
    const i = e, a = t, { formBoxItemClass: n } = N0(), r = Xt(E0, null) !== null, s = j(() => r && i.to ? "RouterLink" : i.href ? "a" : "button"), c = j(() => s.value === "button" && typeof i.pressed == "boolean"), d = j(() => i.pressed ? "primary" : i.pressed === !1 && i.variant === "primary" ? "secondary" : i.variant), y = j(() => d.value.startsWith("tertiary")), v = j(() => i.alignment.split("-")[0]), g = j(() => i.alignment.includes("-")), m = Xt("NcPopover:trigger:attrs", () => ({}), !1), k = j(() => m()), C = j(() => {
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
    function S($) {
      c.value && a("update:pressed", !i.pressed), a("click", $);
    }
    return ($, L) => (h(), De(xd(s.value), ti({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${d.value}`]: d.value,
          "button-vue--tertiary": y.value,
          "button-vue--wide": e.wide,
          [`button-vue--${v.value}`]: v.value !== "center",
          "button-vue--reverse": g.value,
          "button-vue--legacy": u(x0),
          "button-vue--legacy34": u(Tn)
        },
        u(n)
      ]],
      "aria-label": e.ariaLabel
    }, C.value, { onClick: S }), {
      default: ke(() => [
        l("span", R0, [
          l("span", I0, [
            Be($.$slots, "icon", {}, void 0, !0)
          ]),
          l("span", L0, [
            Be($.$slots, "default", {}, () => [
              ie(o(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), oa = /* @__PURE__ */ ut(P0, [["__scopeId", "data-v-47ce59a3"]]), D0 = ["aria-hidden", "aria-label"], F0 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, M0 = ["d"], U0 = ["innerHTML"], z0 = /* @__PURE__ */ qt({
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
    R1((n) => ({
      fb515064: i.value
    }));
    const t = e, i = j(() => typeof t.size == "number" ? `${t.size}px` : t.size), a = j(() => {
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
      }, null, 8, U0)) : (h(), p("svg", F0, [
        l("path", { d: e.path }, null, 8, M0)
      ]))
    ], 10, D0));
  }
}), bu = /* @__PURE__ */ ut(z0, [["__scopeId", "data-v-aaedb1c3"]]);
B0();
function j0(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), Fa("csrf-token-update", { token: e, _internal: !0 }));
}
function B0() {
  pb("csrf-token-update", ({ token: e, _internal: t }) => {
    t || j0(e);
  });
}
cb("public").persist().build();
let yr;
function Qh(e, t) {
  return e ? e.getAttribute(t) : null;
}
function H0() {
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
var $t = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))($t || {});
class V0 {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, i, a) {
    let n = "[" + $t[i].toUpperCase() + "] ";
    return a && a.app && (n += a.app + ": "), typeof t == "string" ? n + t : (n += `Unexpected ${t.name}`, t.message && (n += ` "${t.message}"`), i === $t.Debug && t.stack && (n += `

Stack trace:
${t.stack}`), n);
  }
  log(t, i, a) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof i == "object" && a?.error === void 0 && (a.error = i), t) {
        case $t.Debug:
          console.debug(this.formatMessage(i, $t.Debug, a), a);
          break;
        case $t.Info:
          console.info(this.formatMessage(i, $t.Info, a), a);
          break;
        case $t.Warn:
          console.warn(this.formatMessage(i, $t.Warn, a), a);
          break;
        case $t.Error:
          console.error(this.formatMessage(i, $t.Error, a), a);
          break;
        case $t.Fatal:
        default:
          console.error(this.formatMessage(i, $t.Fatal, a), a);
          break;
      }
  }
  debug(t, i) {
    this.log($t.Debug, t, Object.assign({}, this.context, i));
  }
  info(t, i) {
    this.log($t.Info, t, Object.assign({}, this.context, i));
  }
  warn(t, i) {
    this.log($t.Warn, t, Object.assign({}, this.context, i));
  }
  error(t, i) {
    this.log($t.Error, t, Object.assign({}, this.context, i));
  }
  fatal(t, i) {
    this.log($t.Fatal, t, Object.assign({}, this.context, i));
  }
}
function q0(e) {
  return new V0(e);
}
class G0 {
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
    const t = H0();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, i = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? $t.Warn, window._oc_debug && (t.context.level = $t.Debug), document.removeEventListener("readystatechange", i)) : document.addEventListener("readystatechange", i);
    };
    return i(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function K0() {
  return new G0(q0);
}
const ir = K0().detectUser().setApp("@nextcloud/vue").build();
function W0(e) {
  let t = !1, i;
  return (...a) => (t || (t = !0, i = e(...a)), i);
}
let kb = "missing-app-name";
try {
  kb = "library";
} catch {
  ir.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const Y0 = kb;
let Z0 = "";
try {
  Z0 = "0.3.0-alpha.4";
} catch {
  ir.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Sb() {
  return Xt("appName", Y0);
}
const X0 = W0(() => {
  const e = fo("core", "apps", []), t = Sb();
  return e.find(({ id: i }) => i === t)?.name ?? t;
}), Yc = U_();
Cn(C0);
const J0 = /* @__PURE__ */ qt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = cs();
    qe(t, i), Tt(() => {
      i(t.value);
    }), Ti(() => {
      t.value && i(!1);
    });
    function i(a = !0) {
      const n = document.querySelector(".app-navigation .app-navigation-toggle");
      n && (n.style.display = a ? "none" : "", a === !0 && Fa("toggle-navigation", { open: !1 }));
    }
    return (a, n) => (h(), De(u(oa), {
      "aria-label": u(Dt)("Go back to the list"),
      class: Ee(["app-details-toggle", { "app-details-toggle--mobile": u(t) }]),
      title: u(Dt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: ke(() => [
        he(u(bu), {
          directional: "",
          path: u(c0)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), Q0 = /* @__PURE__ */ ut(J0, [["__scopeId", "data-v-a28923a1"]]), ep = cb("nextcloud").persist().build(), ew = H_().theming?.name ?? "Nextcloud", tw = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: Q0,
    Pane: u0,
    Splitpanes: o0
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
      localizedAppName: X0(),
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
      return e.add(ew), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = s0(this.$el, {
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
}, iw = {
  key: 0,
  class: "hidden-visually"
}, aw = { class: "app-content-wrapper__list" }, nw = {
  key: 1,
  class: "app-content-wrapper"
};
function rw(e, t, i, a, n, r) {
  const s = Xe("NcAppContentDetailsToggle"), c = Xe("Pane"), d = Xe("Splitpanes");
  return h(), p("main", {
    id: "app-content-vue",
    class: Ee(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    i.pageHeading ? (h(), p("h1", iw, o(i.pageHeading), 1)) : A("", !0),
    e.$slots.list ? (h(), p(W, { key: 1 }, [
      a.isMobile || i.layout === "no-split" ? (h(), p("div", {
        key: 0,
        class: Ee(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": i.showDetails,
          "app-content-wrapper--show-list": !i.showDetails,
          "app-content-wrapper--mobile": a.isMobile
        }])
      }, [
        i.showDetails ? (h(), De(s, {
          key: 0,
          onClick: Ce(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : A("", !0),
        ye(l("div", aw, [
          Be(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [tr, !i.showDetails]
        ]),
        i.showDetails ? Be(e.$slots, "default", { key: 1 }, void 0, !0) : A("", !0)
      ], 2)) : i.layout === "vertical-split" || i.layout === "horizontal-split" ? (h(), p("div", nw, [
        he(d, {
          horizontal: i.layout === "horizontal-split",
          class: Ee(["default-theme", {
            "splitpanes--horizontal": i.layout === "horizontal-split",
            "splitpanes--vertical": i.layout === "vertical-split"
          }]),
          rtl: a.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: ke(() => [
            he(c, {
              class: "splitpanes__pane-list",
              size: n.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: ke(() => [
                Be(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            he(c, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: ke(() => [
                Be(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : A("", !0)
    ], 64)) : A("", !0),
    e.$slots.list ? A("", !0) : Be(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const lw = /* @__PURE__ */ ut(tw, [["render", rw], ["__scopeId", "data-v-51427d61"]]);
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
}, sw = function(t) {
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
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || sw(t)) && !Eb(t) ? 0 : t.tabIndex;
}, ow = function(t, i) {
  var a = Zn(t);
  return a < 0 && i && !Eb(t) ? 0 : a;
}, uw = function(t, i) {
  return t.tabIndex === i.tabIndex ? t.documentOrder - i.documentOrder : t.tabIndex - i.tabIndex;
}, $b = function(t) {
  return t.tagName === "INPUT";
}, cw = function(t) {
  return $b(t) && t.type === "hidden";
}, dw = function(t) {
  var i = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(a) {
    return a.tagName === "SUMMARY";
  });
  return i;
}, fw = function(t, i) {
  for (var a = 0; a < t.length; a++)
    if (t[a].checked && t[a].form === i)
      return t[a];
}, hw = function(t) {
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
  var r = fw(n, t.form);
  return !r || r === t;
}, pw = function(t) {
  return $b(t) && t.type === "radio";
}, vw = function(t) {
  return pw(t) && !hw(t);
}, bw = function(t) {
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
}, gw = function(t, i) {
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
    if (bw(t))
      return !t.getClientRects().length;
    if (a !== "legacy-full")
      return !0;
  } else if (a === "non-zero-area")
    return tp(t);
  return !1;
}, mw = function(t) {
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
  return !(i.disabled || cw(i) || gw(i, t) || // For a details element with a summary, the summary element gets the focus
  dw(i) || mw(i));
}, Zc = function(t, i) {
  return !(vw(i) || Zn(i) < 0 || !_o(t, i));
}, yw = function(t) {
  var i = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(i) || i >= 0);
}, xb = function(t) {
  var i = [], a = [];
  return t.forEach(function(n, r) {
    var s = !!n.scopeParent, c = s ? n.scopeParent : n, d = ow(c, s), y = s ? xb(n.candidates) : c;
    d === 0 ? s ? i.push.apply(i, y) : i.push(c) : a.push({
      documentOrder: r,
      tabIndex: d,
      item: n,
      isScope: s,
      content: y
    });
  }), a.sort(uw).reduce(function(n, r) {
    return r.isScope ? n.push.apply(n, r.content) : n.push(r.content), n;
  }, []).concat(i);
}, _w = function(t, i) {
  i = i || {};
  var a;
  return i.getShadowRoot ? a = yo([t], i.includeContainer, {
    filter: Zc.bind(null, i),
    flatten: !1,
    getShadowRoot: i.getShadowRoot,
    shadowRootFilter: yw
  }) : a = Ab(t, i.includeContainer, Zc.bind(null, i)), xb(a);
}, ww = function(t, i) {
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
}, kw = /* @__PURE__ */ Cb.concat("iframe:not([inert]):not([inert] *)").join(","), Sc = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return ar.call(t, kw) === !1 ? !1 : _o(i, t);
};
function Xc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, a = Array(t); i < t; i++) a[i] = e[i];
  return a;
}
function Sw(e) {
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
function Cw(e, t, i) {
  return (t = xw(t)) in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}
function Tw(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Aw() {
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
      Cw(e, a, i[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ap(Object(i)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(i, a));
    });
  }
  return e;
}
function Ew(e) {
  return Sw(e) || Tw(e) || Ob(e) || Aw();
}
function $w(e, t) {
  if (typeof e != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var a = i.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xw(e) {
  var t = $w(e, "string");
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
}, Ow = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Nw = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, El = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, Rw = function(t) {
  return El(t) && !t.shiftKey;
}, Iw = function(t) {
  return El(t) && t.shiftKey;
}, rp = function(t) {
  return setTimeout(t, 0);
}, pl = function(t) {
  for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
    a[n - 1] = arguments[n];
  return typeof t == "function" ? t.apply(void 0, a) : t;
}, js = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Lw = [], Md = function(t, i) {
  var a = i?.document || document, n = i?.trapStack || Lw, r = np({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: Rw,
    isKeyBackward: Iw
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
  }, c, d = function(R, G, X) {
    return R && R[G] !== void 0 ? R[G] : r[X || G];
  }, y = function(R, G) {
    var X = typeof G?.composedPath == "function" ? G.composedPath() : void 0;
    return s.containerGroups.findIndex(function(ae) {
      var J = ae.container, be = ae.tabbableNodes;
      return J.contains(R) || X?.includes(J) || be.find(function(Te) {
        return Te === R;
      });
    });
  }, v = function(R) {
    var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = G.hasFallback, ae = X === void 0 ? !1 : X, J = G.params, be = J === void 0 ? [] : J, Te = r[R];
    if (typeof Te == "function" && (Te = Te.apply(void 0, Ew(be))), Te === !0 && (Te = void 0), !Te) {
      if (Te === void 0 || Te === !1)
        return Te;
      throw new Error("`".concat(R, "` was specified but was not a node, or did not return a node"));
    }
    var Le = Te;
    if (typeof Te == "string") {
      try {
        Le = a.querySelector(Te);
      } catch (Oe) {
        throw new Error("`".concat(R, '` appears to be an invalid selector; error="').concat(Oe.message, '"'));
      }
      if (!Le && !ae)
        throw new Error("`".concat(R, "` as selector refers to no known node"));
    }
    return Le;
  }, g = function(R) {
    var G = R.activeElement;
    return G ? G.shadowRoot && G.shadowRoot.activeElement !== null ? g(G.shadowRoot) : G : null;
  }, m = function() {
    var R = v("initialFocus", {
      hasFallback: !0
    });
    if (R === !1)
      return !1;
    if (R === void 0 || R && !Sc(R, r.tabbableOptions)) {
      var G = g(a);
      if (y(G) >= 0)
        R = G;
      else {
        var X = s.tabbableGroups[0], ae = X && X.firstTabbableNode;
        R = ae || v("fallbackFocus");
      }
    } else R === null && (R = v("fallbackFocus"));
    if (!R)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return R;
  }, k = function() {
    if (s.containerGroups = s.containers.map(function(R) {
      var G = _w(R, r.tabbableOptions), X = ww(R, r.tabbableOptions), ae = G.length > 0 ? G[0] : void 0, J = G.length > 0 ? G[G.length - 1] : void 0, be = X.find(function(Oe) {
        return _r(Oe);
      }), Te = X.slice().reverse().find(function(Oe) {
        return _r(Oe);
      }), Le = !!G.find(function(Oe) {
        return Zn(Oe) > 0;
      });
      return {
        container: R,
        tabbableNodes: G,
        focusableNodes: X,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Le,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ae,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: J,
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
        nextTabbableNode: function(Me) {
          var Ze = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, ct = G.indexOf(Me);
          return ct < 0 ? Ze ? X.slice(X.indexOf(Me) + 1).find(function(le) {
            return _r(le);
          }) : X.slice(0, X.indexOf(Me)).reverse().find(function(le) {
            return _r(le);
          }) : G[ct + (Ze ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(R) {
      return R.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !v("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(R) {
      return R.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, C = function(R) {
    if (R !== !1 && R !== g(document)) {
      if (!R || !R.focus) {
        C(m());
        return;
      }
      R.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = R, Ow(R) && R.select();
    }
  }, S = function(R) {
    var G = v("setReturnFocus", {
      params: [R]
    });
    return G || (G === !1 ? !1 : R);
  }, $ = function(R) {
    var G = R.target, X = R.event, ae = R.isBackward, J = ae === void 0 ? !1 : ae;
    G = G || js(X), k();
    var be = null;
    if (s.tabbableGroups.length > 0) {
      var Te = y(G, X), Le = Te >= 0 ? s.containerGroups[Te] : void 0;
      if (Te < 0)
        J ? be = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : be = s.tabbableGroups[0].firstTabbableNode;
      else if (J) {
        var Oe = s.tabbableGroups.findIndex(function(q) {
          var Se = q.firstTabbableNode;
          return G === Se;
        });
        if (Oe < 0 && (Le.container === G || Sc(G, r.tabbableOptions) && !_r(G, r.tabbableOptions) && !Le.nextTabbableNode(G, !1)) && (Oe = Te), Oe >= 0) {
          var Me = Oe === 0 ? s.tabbableGroups.length - 1 : Oe - 1, Ze = s.tabbableGroups[Me];
          be = Zn(G) >= 0 ? Ze.lastTabbableNode : Ze.lastDomTabbableNode;
        } else El(X) || (be = Le.nextTabbableNode(G, !1));
      } else {
        var ct = s.tabbableGroups.findIndex(function(q) {
          var Se = q.lastTabbableNode;
          return G === Se;
        });
        if (ct < 0 && (Le.container === G || Sc(G, r.tabbableOptions) && !_r(G, r.tabbableOptions) && !Le.nextTabbableNode(G)) && (ct = Te), ct >= 0) {
          var le = ct === s.tabbableGroups.length - 1 ? 0 : ct + 1, te = s.tabbableGroups[le];
          be = Zn(G) >= 0 ? te.firstTabbableNode : te.firstDomTabbableNode;
        } else El(X) || (be = Le.nextTabbableNode(G));
      }
    } else
      be = v("fallbackFocus");
    return be;
  }, L = function(R) {
    var G = js(R);
    if (!(y(G, R) >= 0)) {
      if (pl(r.clickOutsideDeactivates, R)) {
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
      pl(r.allowOutsideClick, R) || R.preventDefault();
    }
  }, I = function(R) {
    var G = js(R), X = y(G, R) >= 0;
    if (X || G instanceof Document)
      X && (s.mostRecentlyFocusedNode = G);
    else {
      R.stopImmediatePropagation();
      var ae, J = !0;
      if (s.mostRecentlyFocusedNode)
        if (Zn(s.mostRecentlyFocusedNode) > 0) {
          var be = y(s.mostRecentlyFocusedNode), Te = s.containerGroups[be].tabbableNodes;
          if (Te.length > 0) {
            var Le = Te.findIndex(function(Oe) {
              return Oe === s.mostRecentlyFocusedNode;
            });
            Le >= 0 && (r.isKeyForward(s.recentNavEvent) ? Le + 1 < Te.length && (ae = Te[Le + 1], J = !1) : Le - 1 >= 0 && (ae = Te[Le - 1], J = !1));
          }
        } else
          s.containerGroups.some(function(Oe) {
            return Oe.tabbableNodes.some(function(Me) {
              return Zn(Me) > 0;
            });
          }) || (J = !1);
      else
        J = !1;
      J && (ae = $({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), C(ae || s.mostRecentlyFocusedNode || m());
    }
    s.recentNavEvent = void 0;
  }, P = function(R) {
    var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = R;
    var X = $({
      event: R,
      isBackward: G
    });
    X && (El(R) && R.preventDefault(), C(X));
  }, N = function(R) {
    (r.isKeyForward(R) || r.isKeyBackward(R)) && P(R, r.isKeyBackward(R));
  }, pe = function(R) {
    Nw(R) && pl(r.escapeDeactivates, R) !== !1 && (R.preventDefault(), c.deactivate());
  }, Q = function(R) {
    var G = js(R);
    y(G, R) >= 0 || pl(r.clickOutsideDeactivates, R) || pl(r.allowOutsideClick, R) || (R.preventDefault(), R.stopImmediatePropagation());
  }, x = function() {
    if (s.active) {
      Ia.activateTrap(n, c);
      var R;
      return r.delayInitialFocus ? R = new Promise(function(G) {
        s.delayInitialFocusTimer = rp(function() {
          C(m()), G();
        });
      }) : C(m()), a.addEventListener("focusin", I, !0), a.addEventListener("mousedown", L, {
        capture: !0,
        passive: !1
      }), a.addEventListener("touchstart", L, {
        capture: !0,
        passive: !1
      }), a.addEventListener("click", Q, {
        capture: !0,
        passive: !1
      }), a.addEventListener("keydown", N, {
        capture: !0,
        passive: !1
      }), a.addEventListener("keydown", pe), R;
    }
  }, B = function(R) {
    s.active && !s.paused && c._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var G = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set(), ae = ip(R), J;
    try {
      for (ae.s(); !(J = ae.n()).done; ) {
        var be = J.value;
        G.add(be);
        for (var Te = typeof ShadowRoot < "u" && be.getRootNode() instanceof ShadowRoot, Le = be; Le; ) {
          G.add(Le);
          var Oe = Le.parentElement, Me = [];
          Oe ? Me = Oe.children : !Oe && Te && (Me = Le.getRootNode().children, Oe = Le.getRootNode().host, Te = typeof ShadowRoot < "u" && Oe.getRootNode() instanceof ShadowRoot);
          var Ze = ip(Me), ct;
          try {
            for (Ze.s(); !(ct = Ze.n()).done; ) {
              var le = ct.value;
              X.add(le);
            }
          } catch (te) {
            Ze.e(te);
          } finally {
            Ze.f();
          }
          Le = Oe;
        }
      }
    } catch (te) {
      ae.e(te);
    } finally {
      ae.f();
    }
    G.forEach(function(te) {
      X.delete(te);
    }), s.adjacentElements = X;
  }, K = function() {
    if (s.active)
      return a.removeEventListener("focusin", I, !0), a.removeEventListener("mousedown", L, !0), a.removeEventListener("touchstart", L, !0), a.removeEventListener("click", Q, !0), a.removeEventListener("keydown", N, !0), a.removeEventListener("keydown", pe), c;
  }, Z = function(R) {
    var G = s.mostRecentlyFocusedNode;
    if (G) {
      var X = R.some(function(J) {
        var be = Array.from(J.removedNodes);
        return be.some(function(Te) {
          return Te === G || typeof Te.contains == "function" && Te.contains(G);
        });
      });
      if (X && s.containers.some(function(J) {
        return J?.isConnected;
      })) {
        k();
        var ae = m();
        C(ae);
      }
    }
  }, se = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(Z) : void 0, H = function() {
    se && (se.disconnect(), s.active && !s.paused && s.containers.map(function(R) {
      se.observe(R, {
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
    activate: function(R) {
      if (s.active)
        return this;
      var G = d(R, "onActivate"), X = d(R, "onPostActivate"), ae = d(R, "checkCanFocusTrap"), J = Ia.getActiveTrap(n), be = !1;
      if (J && !J.paused) {
        var Te;
        (Te = J._setSubtreeIsolation) === null || Te === void 0 || Te.call(J, !1), be = !0;
      }
      try {
        ae || k(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = g(a), G?.({
          trap: c
        });
        var Le = function() {
          ae && k();
          var Ze = function() {
            c._setSubtreeIsolation(!0), H(), X?.({
              trap: c
            });
          }, ct = x();
          ct ? ct.then(Ze) : Ze();
        };
        if (ae)
          return ae(s.containers.concat()).then(Le, Le), this;
        Le();
      } catch (Me) {
        if (J === Ia.getActiveTrap(n) && be) {
          var Oe;
          (Oe = J._setSubtreeIsolation) === null || Oe === void 0 || Oe.call(J, !0);
        }
        throw Me;
      }
      return this;
    },
    deactivate: function(R) {
      if (!s.active)
        return this;
      var G = np({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, R);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || c._setSubtreeIsolation(!1), s.alreadySilent.clear(), K(), s.active = !1, s.paused = !1, H(), Ia.deactivateTrap(n, c);
      var X = d(G, "onDeactivate"), ae = d(G, "onPostDeactivate"), J = d(G, "checkCanReturnFocus"), be = d(G, "delayReturnFocus"), Te = d(G, "returnFocus", "returnFocusOnDeactivate");
      X?.({
        trap: c
      });
      var Le = function() {
        Te && C(S(s.nodeFocusedBeforeActivation)), ae?.({
          trap: c
        });
      }, Oe = function() {
        be && Te ? rp(Le) : Le();
      };
      return Te && J ? (J(S(s.nodeFocusedBeforeActivation)).then(Oe, Oe), this) : (Oe(), this);
    },
    pause: function(R) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, R)) : this;
    },
    unpause: function(R) {
      return s.active ? (s.manuallyPaused = !1, n[n.length - 1] !== this ? this : this._setPausedState(!1, R)) : this;
    },
    updateContainerElements: function(R) {
      var G = [].concat(R).filter(Boolean);
      return s.containers = G.map(function(X) {
        return typeof X == "string" ? a.querySelector(X) : X;
      }), r.isolateSubtrees && B(s.containers), s.active && (k(), s.paused || c._setSubtreeIsolation(!0)), H(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(R, G) {
        if (s.paused === R)
          return this;
        if (s.paused = R, R) {
          var X = d(G, "onPause"), ae = d(G, "onPostPause");
          X?.({
            trap: c
          }), K(), c._setSubtreeIsolation(!1), H(), ae?.({
            trap: c
          });
        } else {
          var J = d(G, "onUnpause"), be = d(G, "onPostUnpause");
          J?.({
            trap: c
          });
          var Te = function() {
            k();
            var Oe = function() {
              c._setSubtreeIsolation(!0), H(), be?.({
                trap: c
              });
            }, Me = x();
            Me ? Me.then(Oe) : Oe();
          };
          Te();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(R) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(G) {
          var X;
          R ? r.isolateSubtrees === "aria-hidden" ? ((G.ariaHidden === "true" || ((X = G.getAttribute("aria-hidden")) === null || X === void 0 ? void 0 : X.toLowerCase()) === "true") && s.alreadySilent.add(G), G.setAttribute("aria-hidden", "true")) : ((G.inert || G.hasAttribute("inert")) && s.alreadySilent.add(G), G.setAttribute("inert", !0)) : s.alreadySilent.has(G) || (r.isolateSubtrees === "aria-hidden" ? G.removeAttribute("aria-hidden") : G.removeAttribute("inert"));
        });
      }
    }
  }), c.updateContainerElements(t), c;
};
const Nb = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), Pw = /* @__PURE__ */ qt({
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
function Dw(e, t, i, a, n, r) {
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
    Be(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Rb = /* @__PURE__ */ ut(Pw, [["render", Dw], ["__scopeId", "data-v-3e73e246"]]);
function Zl() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function Fw() {
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
Cn(w0);
const Mw = { class: "app-navigation-toggle-wrapper" }, Uw = /* @__PURE__ */ qt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Ov(e, "open"), i = j(() => t.value ? Dt("Close navigation") : Dt("Open navigation"));
    return (a, n) => (h(), p("div", Mw, [
      he(u(oa), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": i.value,
        title: i.value,
        variant: "tertiary",
        onClick: n[0] || (n[0] = (r) => t.value = !t.value)
      }, {
        icon: ke(() => [
          he(bu, {
            path: u(h0),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), zw = /* @__PURE__ */ ut(Uw, [["__scopeId", "data-v-e8177cc7"]]), jw = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], Bw = { class: "app-navigation__search" }, Hw = /* @__PURE__ */ qt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let i;
    const a = Xt(
      Ib,
      () => _1(),
      !1
    ), n = Ay("appNavigationContainer"), r = cs(), s = /* @__PURE__ */ z(!r.value), c = j(() => r.value && s.value);
    by(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), qe(r, () => {
      s.value = !r.value;
    }), qe(c, () => {
      v();
    }), Tt(() => {
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
      a(!1), t0("toggle-navigation", y), i.deactivate();
    });
    function d(m) {
      if (s.value === m) {
        Fa("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = m === void 0 ? !s.value : m;
      const k = getComputedStyle(document.body), C = parseInt(k.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        Fa("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * C);
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
        l("div", Bw, [
          Be(m.$slots, "search", {}, void 0, !0)
        ]),
        l("div", {
          class: Ee(["app-navigation__body", { "app-navigation__body--no-list": !m.$slots.list }])
        }, [
          Be(m.$slots, "default", {}, void 0, !0)
        ], 2),
        m.$slots.list ? (h(), De(Rb, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: ke(() => [
            Be(m.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : A("", !0),
        Be(m.$slots, "footer", {}, void 0, !0)
      ], 40, jw),
      he(zw, {
        open: s.value,
        "onUpdate:open": d
      }, null, 8, ["open"])
    ], 2));
  }
}), Vw = /* @__PURE__ */ ut(Hw, [["__scopeId", "data-v-37908cd4"]]), qw = {
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
}, Gw = ["aria-hidden", "aria-label"], Kw = ["fill", "width", "height"], Ww = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, Yw = { key: 0 };
function Zw(e, t, i, a, n, r) {
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
      l("path", Ww, [
        i.title ? (h(), p("title", Yw, o(i.title), 1)) : A("", !0)
      ])
    ], 8, Kw))
  ], 16, Gw);
}
const Xw = /* @__PURE__ */ ut(qw, [["render", Zw]]), Jw = {
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
}, Qw = ["aria-hidden", "aria-label"], ek = ["fill", "width", "height"], tk = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, ik = { key: 0 };
function ak(e, t, i, a, n, r) {
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
      l("path", tk, [
        i.title ? (h(), p("title", ik, o(i.title), 1)) : A("", !0)
      ])
    ], 8, ek))
  ], 16, Qw);
}
const nk = /* @__PURE__ */ ut(Jw, [["render", ak]]), rk = {
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
}, lk = ["aria-hidden", "aria-label"], sk = ["fill", "width", "height"], ok = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, uk = { key: 0 };
function ck(e, t, i, a, n, r) {
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
      l("path", ok, [
        i.title ? (h(), p("title", uk, o(i.title), 1)) : A("", !0)
      ])
    ], 8, sk))
  ], 16, lk);
}
const Pb = /* @__PURE__ */ ut(rk, [["render", ck]]), dk = {
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
}, fk = ["aria-hidden", "aria-label"], hk = ["fill", "width", "height"], pk = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, vk = { key: 0 };
function bk(e, t, i, a, n, r) {
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
      l("path", pk, [
        i.title ? (h(), p("title", vk, o(i.title), 1)) : A("", !0)
      ])
    ], 8, hk))
  ], 16, fk);
}
const Db = /* @__PURE__ */ ut(dk, [["render", bk]]);
Cn(y0);
const gk = {
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
      labelConfirm: Dt("Confirm changes"),
      labelCancel: Dt("Cancel changes")
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
}, mk = ["placeholder"];
function yk(e, t, i, a, n, r) {
  const s = Xe("IconArrowRight"), c = Xe("NcButton"), d = Xe("IconClose");
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
      }, null, 8, mk), [
        [Ue, r.valueModel]
      ]),
      he(c, {
        "aria-label": n.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Ce(r.confirm, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          he(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      he(c, {
        "aria-label": n.labelCancel,
        type: "reset",
        variant: i.primary ? "primary" : "tertiary",
        onClick: Ce(r.cancel, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          he(d, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const _k = /* @__PURE__ */ ut(gk, [["render", yk], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function gu() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Ud = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Fb = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), wk = {
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
  mixins: [wk],
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
}, kk = {
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
      mdiCheck: d0,
      mdiChevronRight: f0
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
}, Sk = ["role"], Ck = ["aria-label", "disabled", "title", "type"], Tk = { class: "action-button__longtext-wrapper" }, Ak = {
  key: 0,
  class: "action-button__name"
}, Ek = ["textContent"], $k = {
  key: 2,
  class: "action-button__text"
}, xk = ["textContent"], Ok = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function Nk(e, t, i, a, n, r) {
  const s = Xe("NcIconSvgWrapper");
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
      Be(e.$slots, "icon", {}, () => [
        l("span", {
          class: Ee([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: pi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", Tk, [
        e.name ? (h(), p("strong", Ak, o(e.name), 1)) : A("", !0),
        e.isLongText ? (h(), p("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: o(e.text)
        }, null, 8, Ek)) : (h(), p("span", $k, o(e.text), 1)),
        i.description ? (h(), p("span", {
          key: 3,
          class: "action-button__description",
          textContent: o(i.description)
        }, null, 8, xk)) : A("", !0)
      ]),
      i.isMenu ? (h(), De(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: a.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (h(), De(s, {
        key: 1,
        path: a.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (h(), p("span", Ok)) : A("", !0),
      A("", !0)
    ], 16, Ck)
  ], 10, Sk);
}
const Rk = /* @__PURE__ */ ut(kk, [["render", Nk], ["__scopeId", "data-v-6c2daf4e"]]);
function Ik(e, t = {}) {
  const i = Fw();
  qe(e, () => {
    Pa(t.disabled) || (Pa(e) ? i.pause() : i.unpause());
  }), ls(() => {
    i.unpause();
  });
}
const Lk = ["top", "right", "bottom", "left"], lp = ["start", "end"], sp = /* @__PURE__ */ Lk.reduce((e, t) => e.concat(t, t + "-" + lp[0], t + "-" + lp[1]), []), Xl = Math.min, Jc = Math.max, Pk = {
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
function Dk(e) {
  const t = ko(e);
  return [wo(e), t, wo(t)];
}
function wo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const op = ["left", "right"], up = ["right", "left"], Fk = ["top", "bottom"], Mk = ["bottom", "top"];
function Uk(e, t, i) {
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? up : op : t ? op : up;
    case "left":
    case "right":
      return t ? Fk : Mk;
    default:
      return [];
  }
}
function zk(e, t, i, a) {
  const n = Gi(e);
  let r = Uk(Ha(e), i === "start", a);
  return n && (r = r.map((s) => s + "-" + n), t && (r = r.concat(r.map(wo)))), r;
}
function ko(e) {
  const t = Ha(e);
  return Pk[t] + e.slice(t.length);
}
function jk(e) {
  var t, i, a, n;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (i = e.right) != null ? i : 0,
    bottom: (a = e.bottom) != null ? a : 0,
    left: (n = e.left) != null ? n : 0
  };
}
function Bb(e) {
  return typeof e != "number" ? jk(e) : {
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
  const C = Gi(t);
  return C && (k[s] += m * (C === "end" ? 1 : -1) * (i && y ? -1 : 1)), k;
}
async function Bk(e, t) {
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
  } = nr(t, e), C = Bb(k), $ = c[m ? g === "floating" ? "reference" : "floating" : g], L = $l(await r.getClippingRect({
    element: (i = await (r.isElement == null ? void 0 : r.isElement($))) == null || i ? $ : $.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: y,
    rootBoundary: v,
    strategy: d
  })), I = g === "floating" ? {
    x: a,
    y: n,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, P = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), N = await (r.isElement == null ? void 0 : r.isElement(P)) && await (r.getScale == null ? void 0 : r.getScale(P)) || {
    x: 1,
    y: 1
  }, pe = $l(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: I,
    offsetParent: P,
    strategy: d
  }) : I);
  return {
    top: (L.top - pe.top + C.top) / N.y,
    bottom: (pe.bottom - L.bottom + C.bottom) / N.y,
    left: (L.left - pe.left + C.left) / N.x,
    right: (pe.right - L.right + C.right) / N.x
  };
}
const Hk = 50, Vk = async (e, t, i) => {
  const {
    placement: a = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: s
  } = i, c = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Bk
  }, d = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let y = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: n
  }), {
    x: v,
    y: g
  } = cp(y, a, d), m = a, k = 0;
  const C = {};
  for (let S = 0; S < r.length; S++) {
    const $ = r[S];
    if (!$)
      continue;
    const {
      name: L,
      fn: I
    } = $, {
      x: P,
      y: N,
      data: pe,
      reset: Q
    } = await I({
      x: v,
      y: g,
      initialPlacement: a,
      placement: m,
      strategy: n,
      middlewareData: C,
      rects: y,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    v = P ?? v, g = N ?? g, C[L] = {
      ...C[L],
      ...pe
    }, Q && k < Hk && (k++, typeof Q == "object" && (Q.placement && (m = Q.placement), Q.rects && (y = Q.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: n
    }) : Q.rects), {
      x: v,
      y: g
    } = cp(y, m, d)), S = -1);
  }
  return {
    x: v,
    y: g,
    placement: m,
    strategy: n,
    middlewareData: C
  };
}, qk = (e) => ({
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
    }, k = jd(n), C = zd(k), S = await s.getDimensions(y), $ = k === "y", L = $ ? "top" : "left", I = $ ? "bottom" : "right", P = $ ? "clientHeight" : "clientWidth", N = r.reference[C] + r.reference[k] - m[k] - r.floating[C], pe = m[k] - r.reference[k], Q = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(y));
    let x = Q ? Q[P] : 0;
    (!x || !await (s.isElement == null ? void 0 : s.isElement(Q))) && (x = c.floating[P] || r.floating[C]);
    const B = N / 2 - pe / 2, K = x / 2 - S[C] / 2 - 1, Z = Xl(g[L], K), se = Xl(g[I], K), H = x - S[C] - se, Y = x / 2 - S[C] / 2 + B, R = Ub(Z, Y, H), G = !d.arrow && Gi(n) != null && Y !== R && r.reference[C] / 2 - (Y < Z ? Z : se) - S[C] / 2 < 0, X = G ? Y < Z ? Y - Z : Y - H : 0;
    return {
      [k]: m[k] + X,
      data: {
        [k]: R,
        centerOffset: Y - R - X,
        ...G && {
          alignmentOffset: X
        }
      },
      reset: G
    };
  }
});
function Gk(e, t, i) {
  return (e ? [...i.filter((n) => Gi(n) === e), ...i.filter((n) => Gi(n) !== e)] : i.filter((n) => Ha(n) === n)).filter((n) => e ? Gi(n) === e || (t ? wo(n) !== n : !1) : !0);
}
const Kk = function(e) {
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
        ...C
      } = nr(e, t), S = g !== void 0 || m === sp ? Gk(g || null, k, m) : m, $ = ((i = s.autoPlacement) == null ? void 0 : i.index) || 0, L = S[$];
      if (L == null)
        return {};
      if (c !== L)
        return {
          reset: {
            placement: S[0]
          }
        };
      const I = await d.detectOverflow(t, C), P = jb(L, r, await (d.isRTL == null ? void 0 : d.isRTL(y.floating))), N = [I[Ha(L)], I[P[0]], I[P[1]]], pe = [...((a = s.autoPlacement) == null ? void 0 : a.overflows) || [], {
        placement: L,
        overflows: N
      }], Q = S[$ + 1];
      if (Q)
        return {
          data: {
            index: $ + 1,
            overflows: pe
          },
          reset: {
            placement: Q
          }
        };
      const x = pe.map((Z) => {
        const se = Gi(Z.placement);
        return [Z.placement, se && v ? (
          // Check along the mainAxis and main crossAxis side.
          Z.overflows.slice(0, 2).reduce((H, Y) => H + Y, 0)
        ) : (
          // Check only the mainAxis.
          Z.overflows[0]
        ), Z.overflows];
      }).sort((Z, se) => Z[1] - se[1]), K = ((n = x.filter((Z) => Z[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Gi(Z[0]) ? 2 : 3
      ).every((se) => se <= 0))[0]) == null ? void 0 : n[0]) || x[0][0];
      return K !== c ? {
        data: {
          index: $ + 1,
          overflows: pe
        },
        reset: {
          placement: K
        }
      } : {};
    }
  };
}, Wk = function(e) {
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
        fallbackAxisSideDirection: C = "none",
        flipAlignment: S = !0,
        ...$
      } = nr(e, t);
      if ((i = r.arrow) != null && i.alignmentOffset)
        return {};
      const L = Ha(n), I = La(c), P = Ha(c) === c, N = await (d.isRTL == null ? void 0 : d.isRTL(y.floating)), pe = m || (P || !S ? [ko(c)] : Dk(c)), Q = C !== "none";
      !m && Q && pe.push(...zk(c, S, C, N));
      const x = [c, ...pe], B = await d.detectOverflow(t, $), K = [];
      let Z = ((a = r.flip) == null ? void 0 : a.overflows) || [];
      if (v && K.push(B[L]), g) {
        const R = jb(n, s, N);
        K.push(B[R[0]], B[R[1]]);
      }
      if (Z = [...Z, {
        placement: n,
        overflows: K
      }], !K.every((R) => R <= 0)) {
        var se, H;
        const R = (((se = r.flip) == null ? void 0 : se.index) || 0) + 1, G = x[R];
        if (G && (!(g === "alignment" ? I !== La(G) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Z.every((J) => La(J.placement) === I ? J.overflows[0] > 0 : !0)))
          return {
            data: {
              index: R,
              overflows: Z
            },
            reset: {
              placement: G
            }
          };
        let X = (H = Z.filter((ae) => ae.overflows[0] <= 0).sort((ae, J) => ae.overflows[1] - J.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!X)
          switch (k) {
            case "bestFit": {
              var Y;
              const ae = (Y = Z.filter((J) => {
                if (Q) {
                  const be = La(J.placement);
                  return be === I || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  be === "y";
                }
                return !0;
              }).map((J) => [J.placement, J.overflows.filter((be) => be > 0).reduce((be, Te) => be + Te, 0)]).sort((J, be) => J[1] - be[1])[0]) == null ? void 0 : Y[0];
              ae && (X = ae);
              break;
            }
            case "initialPlacement":
              X = c;
              break;
          }
        if (n !== X)
          return {
            reset: {
              placement: X
            }
          };
      }
      return {};
    }
  };
}, Yk = /* @__PURE__ */ new Set(["left", "top"]);
async function Zk(e, t) {
  const {
    placement: i,
    platform: a,
    elements: n
  } = e, r = await (a.isRTL == null ? void 0 : a.isRTL(n.floating)), s = Ha(i), c = Gi(i), d = La(i) === "y", y = Yk.has(s) ? -1 : 1, v = r && d ? -1 : 1, g = nr(t, e);
  let {
    mainAxis: m,
    crossAxis: k,
    alignmentAxis: C
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: g.mainAxis || 0,
    crossAxis: g.crossAxis || 0,
    alignmentAxis: g.alignmentAxis
  };
  return c && typeof C == "number" && (k = c === "end" ? C * -1 : C), d ? {
    x: k * v,
    y: m * y
  } : {
    x: m * y,
    y: k * v
  };
}
const Xk = function(e) {
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
      } = t, d = await Zk(t, e);
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
}, Jk = function(e) {
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
          fn: (I) => {
            let {
              x: P,
              y: N
            } = I;
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
      let C = v[k], S = v[m];
      const $ = (I, P) => Ub(P + g[I === "y" ? "top" : "left"], P, P - g[I === "y" ? "bottom" : "right"]);
      s && (C = $(k, C)), c && (S = $(m, S));
      const L = d.fn({
        ...t,
        [k]: C,
        [m]: S
      });
      return {
        ...L,
        data: {
          x: L.x - i,
          y: L.y - a,
          enabled: {
            [k]: s,
            [m]: c
          }
        }
      };
    }
  };
}, Qk = function(e) {
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
      let C, S;
      y === "top" || y === "bottom" ? (C = y, S = v === (await (n.isRTL == null ? void 0 : n.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (S = y, C = v === "end" ? "top" : "bottom");
      const $ = k - d.top - d.bottom, L = m - d.left - d.right, I = Xl(k - d[C], $), P = Xl(m - d[S], L), N = t.middlewareData.shift, pe = !N;
      let Q = I, x = P;
      N != null && N.enabled.x && (x = L), N != null && N.enabled.y && (Q = $), pe && !v && (g ? x = m - 2 * Jc(d.left, d.right) : Q = k - 2 * Jc(d.top, d.bottom)), await s({
        ...t,
        availableWidth: x,
        availableHeight: Q
      });
      const B = await n.getDimensions(r.floating);
      return m !== B.width || k !== B.height ? {
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
function eS(e) {
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
  let g = (s.left + (v && ((n = y.visualViewport) == null ? void 0 : n.offsetLeft) || 0)) / d.x, m = (s.top + (v && ((r = y.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / d.y, k = s.width / d.x, C = s.height / d.y;
  if (c) {
    const S = Pi(c), $ = a && mn(a) ? Pi(a) : a;
    let L = S.frameElement;
    for (; L && a && $ !== S; ) {
      const I = Nr(L), P = L.getBoundingClientRect(), N = getComputedStyle(L);
      P.x += (L.clientLeft + parseFloat(N.paddingLeft)) * I.x, P.y += (L.clientTop + parseFloat(N.paddingTop)) * I.y, g *= I.x, m *= I.y, k *= I.x, C *= I.y, g += P.x, m += P.y, L = Pi(L).frameElement;
    }
  }
  return { width: k, height: C, top: m, right: g + k, bottom: m + C, left: g, x: g, y: m };
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
  for (; i && eS(i) && ua(i).position === "static"; ) i = pp(i);
  return i && (kn(i) === "html" || kn(i) === "body" && ua(i).position === "static" && !Qc(i)) ? t : i || (function(a) {
    let n = Ql(a);
    for (; ca(n) && !Bd(n); ) {
      if (Qc(n)) return n;
      n = Ql(n);
    }
    return null;
  })(e) || t;
}
function tS(e, t, i) {
  const a = ca(t), n = yn(t), r = Jl(e, !0, i === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (a || !a && i !== "fixed") if ((kn(t) !== "body" || mu(n)) && (s = yu(t)), ca(t)) {
    const d = Jl(t, !0);
    c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
  } else n && (c.x = Yb(n));
  return { x: r.left + s.scrollLeft - c.x, y: r.top + s.scrollTop - c.y, width: r.width, height: r.height };
}
const iS = { getClippingRect: function(e) {
  let { element: t, boundary: i, rootBoundary: a, strategy: n } = e;
  const r = i === "clippingAncestors" ? (function(y, v) {
    const g = v.get(y);
    if (g) return g;
    let m = Co(y).filter((($) => mn($) && kn($) !== "body")), k = null;
    const C = ua(y).position === "fixed";
    let S = C ? Ql(y) : y;
    for (; mn(S) && !Bd(S); ) {
      const $ = ua(S), L = Qc(S);
      (C ? L || k : L || $.position !== "static" || !k || !["absolute", "fixed"].includes(k.position)) ? k = $ : m = m.filter(((I) => I !== S)), S = Ql(S);
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
  return { reference: tS(t, await n(i), a), floating: { x: 0, y: 0, ...await r(i) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => ua(e).direction === "rtl" }, aS = (e, t, i) => {
  const a = /* @__PURE__ */ new Map(), n = { platform: iS, ...i }, r = { ...n.platform, _c: a };
  return Vk(e, t, { ...n, platform: r });
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
function nS(e) {
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
const rS = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
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
function Je(e) {
  return function(t) {
    return ed(t.theme, e);
  };
}
const Tc = "__floating-vue__popper", Jb = () => /* @__PURE__ */ qt({
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
      validator: (e) => rS.includes(e)
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
      (this.distance || this.skidding) && e.middleware.push(Xk({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Kk({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Jk({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Wk({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(qk({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Qk({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: a, availableHeight: n }) => {
          this.$_innerNode.style.maxWidth = a != null ? `${a}px` : null, this.$_innerNode.style.maxHeight = n != null ? `${n}px` : null;
        }
      })));
      const i = await aS(this.$_referenceNode, this.$_popperNode, e);
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
  window.addEventListener("resize", oS);
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
  lS(e, t);
}
function lS(e, t) {
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
  return i.closeAllPopover || i.closePopover && t || sS(e, i) && !t;
}
function sS(e, t) {
  if (typeof e.autoHide == "function") {
    const i = e.autoHide(t);
    return e.lastAutoHide = i, i;
  }
  return e.autoHide;
}
function oS() {
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
const uS = {
  extends: Jb()
}, Hd = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [a, n] of t)
    i[a] = n;
  return i;
};
function cS(e, t, i, a, n, r) {
  return h(), p("div", {
    ref: "reference",
    class: Ee(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Be(e.$slots, "default", Js(ql(e.slotData)))
  ], 2);
}
const dS = /* @__PURE__ */ Hd(uS, [["render", cS]]);
function fS() {
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
  id.init || (id.init = !0, Zs = fS() !== -1);
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
    id(), Nt(() => {
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
const hS = /* @__PURE__ */ hy();
dy("data-v-b329ee4c");
const pS = {
  class: "resize-observer",
  tabindex: "-1"
};
fy();
const vS = /* @__PURE__ */ hS((e, t, i, a, n, r) => (h(), De("div", pS)));
_u.render = vS;
_u.__scopeId = "data-v-b329ee4c";
_u.__file = "src/components/ResizeObserver.vue";
const Qb = (e = "theme") => ({
  computed: {
    themeClass() {
      return nS(this[e]);
    }
  }
}), bS = /* @__PURE__ */ qt({
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
}), gS = ["id", "aria-hidden", "tabindex", "data-popper-placement"], mS = {
  ref: "inner",
  class: "v-popper__inner"
}, yS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-outer" }, null, -1), _S = /* @__PURE__ */ l("div", { class: "v-popper__arrow-inner" }, null, -1), wS = [
  yS,
  _S
];
function kS(e, t, i, a, n, r) {
  const s = Xe("ResizeObserver");
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
      l("div", mS, [
        e.mounted ? (h(), p(W, { key: 0 }, [
          l("div", null, [
            Be(e.$slots, "default")
          ]),
          e.handleResize ? (h(), De(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (c) => e.$emit("resize", c))
          })) : A("", !0)
        ], 64)) : A("", !0)
      ], 512),
      l("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: pi(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, wS, 4)
    ], 4)
  ], 46, gS);
}
const eg = /* @__PURE__ */ Hd(bS, [["render", kS]]), tg = {
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
const SS = /* @__PURE__ */ qt({
  name: "VPopperWrapper",
  components: {
    Popper: dS,
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
function CS(e, t, i, a, n, r) {
  const s = Xe("PopperContent"), c = Xe("Popper");
  return h(), De(c, ti({ ref: "popper" }, e.$props, {
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
      hide: C,
      handleResize: S,
      onResize: $,
      classes: L,
      result: I
    }) => [
      Be(e.$slots, "default", {
        shown: y,
        show: k,
        hide: C
      }),
      he(s, {
        ref: "popperContent",
        "popper-id": d,
        theme: e.finalTheme,
        shown: y,
        mounted: v,
        "skip-transition": g,
        "auto-hide": m,
        "handle-resize": S,
        classes: L,
        result: I,
        onHide: C,
        onResize: $
      }, {
        default: ke(() => [
          Be(e.$slots, "popper", {
            shown: y,
            hide: C
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Vd = /* @__PURE__ */ Hd(SS, [["render", CS]]), TS = {
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
const Tp = _n, AS = TS, ES = /* @__PURE__ */ qt({
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
}), $S = "_ncPopover_qgtYg", xS = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: $S
}, ig = "nc-popover-9";
Tp.themes[ig] = structuredClone(Tp.themes.dropdown);
const OS = {
  name: "NcPopover",
  components: {
    Dropdown: AS,
    NcPopoverTriggerProvider: ES
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
function NS(e, t, i, a, n, r) {
  const s = Xe("NcPopoverTriggerProvider"), c = Xe("Dropdown");
  return h(), De(c, {
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
      Be(e.$slots, "default", Js(ql(d)))
    ]),
    default: ke(() => [
      he(s, {
        shown: n.internalShown,
        popupRole: i.popupRole
      }, {
        default: ke((d) => [
          Be(e.$slots, "trigger", Js(ql(d)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const RS = {
  $style: xS
}, Ap = /* @__PURE__ */ ut(OS, [["render", NS], ["__cssModules", RS]]), IS = {
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
}, LS = ["aria-hidden", "aria-label"], PS = ["fill", "width", "height"], DS = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, FS = { key: 0 };
function MS(e, t, i, a, n, r) {
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
      l("path", DS, [
        i.title ? (h(), p("title", FS, o(i.title), 1)) : A("", !0)
      ])
    ], 8, PS))
  ], 16, LS);
}
const US = /* @__PURE__ */ ut(IS, [["render", MS]]);
Cn(m0);
function qd(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const i = t;
      if (i.type === Bt)
        return !1;
      if (i.type === W && !qd(i.children))
        return !1;
      if (i.type === ss && !i.children.trim())
        return !1;
    }
    return !0;
  });
}
const zS = ".focusable", jS = {
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
      [Ud]: j(() => this.actionsMenuSemanticType === "menu"),
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
      default: Dt("Actions")
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
    Ik(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(zS);
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
    const e = [], t = (k, C) => {
      k.forEach((S) => {
        if (this.isAction(S)) {
          C.push(S);
          return;
        }
        S.type === W && t(S.children, C);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let i = e.filter(this.isValidSingleAction);
    this.forceMenu && i.length > 0 && this.inline > 0 && (i = []);
    const a = i.slice(0, this.inline), n = e.filter((k) => !a.includes(k)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], c = ["NcActionLink", "NcActionRouter"], d = n.some((k) => s.includes(this.getActionName(k))), y = n.some((k) => r.includes(this.getActionName(k))), v = n.some((k) => c.includes(this.getActionName(k)));
    d ? this.actionsMenuSemanticType = "dialog" : y ? this.actionsMenuSemanticType = "menu" : v ? this.actionsMenuSemanticType = "navigation" : e.filter((C) => this.getActionName(C).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const g = (k) => {
      const C = k?.props?.icon, S = k?.children?.icon?.()?.[0] ?? (this.isIconUrl(C) ? fi("img", { class: "action-item__menutoggle__icon", src: C, alt: "" }) : fi("span", { class: ["icon", C] })), $ = k?.children?.default?.()?.[0]?.children?.trim(), L = this.forceName ? $ : "";
      let I = k?.props?.title;
      this.forceName || I || (I = $);
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
            "aria-label": k?.props?.["aria-label"] || $,
            title: I,
            disabled: this.disabled || k?.props?.disabled,
            pressed: k?.props?.modelValue,
            size: this.size,
            type: N,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (L ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": k?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => L,
          icon: () => S
        }
      );
    }, m = (k) => {
      const C = qd(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? fi("span", { class: ["icon", this.defaultIcon] }) : fi(US, { size: 20 }), S = `${this.randomId}-trigger`;
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
            id: S,
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
            icon: () => C,
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
              "aria-labelledby": S,
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
}, Gd = /* @__PURE__ */ ut(jS, [["__scopeId", "data-v-7206c1f1"]]), BS = ["aria-label"], HS = ["width", "height"], VS = ["fill"], qS = ["fill"], GS = { key: 0 }, KS = /* @__PURE__ */ qt({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, i = j(() => {
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
        }, null, 8, VS),
        l("path", {
          fill: i.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (h(), p("title", GS, o(e.name), 1)) : A("", !0)
        ], 8, qS)
      ], 8, HS))
    ], 8, BS));
  }
}), ag = /* @__PURE__ */ ut(KS, [["__scopeId", "data-v-cf399190"]]), nd = /* @__PURE__ */ qt({
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
}), WS = {
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
}, YS = ["aria-hidden", "aria-label"], ZS = ["fill", "width", "height"], XS = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, JS = { key: 0 };
function QS(e, t, i, a, n, r) {
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
      l("path", XS, [
        i.title ? (h(), p("title", JS, o(i.title), 1)) : A("", !0)
      ])
    ], 8, ZS))
  ], 16, YS);
}
const eC = /* @__PURE__ */ ut(WS, [["render", QS]]), tC = {
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
}, iC = ["aria-hidden", "aria-label"], aC = ["fill", "width", "height"], nC = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, rC = { key: 0 };
function lC(e, t, i, a, n, r) {
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
      l("path", nC, [
        i.title ? (h(), p("title", rC, o(i.title), 1)) : A("", !0)
      ])
    ], 8, aC))
  ], 16, iC);
}
const sC = /* @__PURE__ */ ut(tC, [["render", lC]]);
Cn(k0);
const oC = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: oa,
    ChevronDown: Xw,
    ChevronUp: nk
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
      return this.open ? Dt("Collapse menu") : Dt("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function uC(e, t, i, a, n, r) {
  const s = Xe("ChevronUp"), c = Xe("ChevronDown"), d = Xe("NcButton");
  return h(), De(d, {
    class: Ee(["icon-collapse", {
      "icon-collapse--active": i.active,
      "icon-collapse--open": i.open
    }]),
    "aria-label": r.labelButton,
    variant: i.active && a.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: ke(() => [
      i.open ? (h(), De(s, {
        key: 0,
        size: 20
      })) : (h(), De(c, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const cC = /* @__PURE__ */ ut(oC, [["render", uC], ["__scopeId", "data-v-cfbd3794"]]);
Cn(S0, A0);
const dC = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: Gd,
    NcActionButton: Rk,
    NcAppNavigationIconCollapsible: cC,
    NcInputConfirmCancel: _k,
    NcLoadingIcon: ag,
    NcVNodes: nd,
    Pencil: eC,
    Undo: sC
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
      return this.editLabel ? this.editLabel : Dt("Edit item");
    },
    undoButtonAriaLabel() {
      return Dt("Undo changes");
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
}, fC = ["id"], hC = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], pC = {
  key: 0,
  class: "editingContainer"
}, vC = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, bC = { class: "app-navigation-entry__deleted-description" }, gC = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, mC = {
  key: 0,
  class: "app-navigation-entry__children"
};
function yC(e, t, i, a, n, r) {
  const s = Xe("NcLoadingIcon"), c = Xe("NcInputConfirmCancel"), d = Xe("Pencil"), y = Xe("NcActionButton"), v = Xe("Undo"), g = Xe("NcActions"), m = Xe("NcAppNavigationIconCollapsible");
  return h(), p("li", {
    id: i.id,
    class: Ee([{
      "app-navigation-entry--opened": n.opened,
      "app-navigation-entry--pinned": i.pinned,
      "app-navigation-entry--collapsible": i.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (h(), De(xd(r.isRouterLink ? "router-link" : "NcVNodes"), Js(ql({ ...r.isRouterLink && { custom: !0, to: i.to } })), {
      default: ke(({ href: k, navigate: C, isActive: S }) => [
        l("div", {
          ref: "entry",
          class: Ee(["app-navigation-entry", {
            "app-navigation-entry--editing": n.editingActive,
            "app-navigation-entry--deleted": i.undo,
            "app-navigation-entry--legacy": a.isLegacy34,
            active: i.to && S || i.active
          }]),
          onPointerenter: t[4] || (t[4] = (...$) => r.requestHighlight && r.requestHighlight(...$)),
          onFocusin: t[5] || (t[5] = (...$) => r.requestHighlight && r.requestHighlight(...$))
        }, [
          i.undo ? A("", !0) : (h(), p("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": i.active || i.to && S ? "page" : void 0,
            "aria-description": i.ariaDescription,
            "aria-expanded": e.$slots.default ? n.opened.toString() : void 0,
            href: i.href || k || "#",
            target: r.isExternal(i.href) ? "_blank" : void 0,
            title: i.title || i.name,
            onBlur: t[1] || (t[1] = (...$) => r.handleBlur && r.handleBlur(...$)),
            onClick: ($) => r.onClick($, C, k),
            onFocus: t[2] || (t[2] = (...$) => r.handleFocus && r.handleFocus(...$)),
            onKeydown: t[3] || (t[3] = ht(Ce((...$) => r.handleTab && r.handleTab(...$), ["exact"]), ["tab"]))
          }, [
            l("div", {
              class: Ee(["app-navigation-entry-icon", { [i.icon]: i.icon }])
            }, [
              i.loading ? (h(), De(s, { key: 0 })) : Be(e.$slots, "icon", {
                key: 1,
                active: i.active || i.to && S
              }, void 0, !0)
            ], 2),
            l("span", {
              class: Ee(["app-navigation-entry__name", { "hidden-visually": n.editingActive }])
            }, o(i.name), 3),
            n.editingActive ? (h(), p("div", pC, [
              he(c, {
                ref: "editingInput",
                modelValue: n.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = ($) => n.editingValue = $),
                placeholder: i.editPlaceholder !== "" ? i.editPlaceholder : i.name,
                primary: i.to && S || i.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : A("", !0)
          ], 40, hC)),
          i.undo ? (h(), p("div", vC, [
            l("div", bC, o(i.name), 1)
          ])) : A("", !0),
          (e.$slots.actions || e.$slots.counter || i.editable || i.undo) && !n.editingActive ? (h(), p("div", {
            key: 2,
            class: Ee(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": i.forceDisplayActions || n.menuOpenLocalValue || i.menuOpen }])
          }, [
            e.$slots.counter ? (h(), p("div", gC, [
              Be(e.$slots, "counter", {}, void 0, !0)
            ])) : A("", !0),
            e.$slots.actions || i.editable && !n.editingActive || i.undo ? (h(), De(g, {
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
                Be(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: ke(() => [
                i.editable && !n.editingActive ? (h(), De(y, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: ke(() => [
                    he(d, { size: 20 })
                  ]),
                  default: ke(() => [
                    ie(" " + o(i.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : A("", !0),
                i.undo ? (h(), De(y, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: ke(() => [
                    he(v, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : A("", !0),
                Be(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : A("", !0)
          ], 2)) : A("", !0),
          i.allowCollapse && e.$slots.default ? (h(), De(m, {
            key: 3,
            active: i.to && S || i.active,
            open: n.opened,
            onClick: Ce(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : A("", !0),
          Be(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (h(), p("ul", mC, [
      Be(e.$slots, "default", {}, void 0, !0)
    ])) : A("", !0)
  ], 10, fC);
}
const Ta = /* @__PURE__ */ ut(dC, [["render", yC], ["__scopeId", "data-v-01bef41b"]]), Ac = /* @__PURE__ */ new WeakMap(), _C = {
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
}, wC = {
  mounted(e) {
    e.focus();
  }
}, kC = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", SC = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", rd = "numeric", ld = "ascii", sd = "alpha", Rl = "asciinumeric", _l = "alphanumeric", od = "domain", ng = "emoji", CC = "scheme", TC = "slashscheme", Ec = "whitespace";
function AC(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Xn(e, t, i) {
  t[rd] && (t[Rl] = !0, t[_l] = !0), t[ld] && (t[Rl] = !0, t[sd] = !0), t[Rl] && (t[_l] = !0), t[sd] && (t[_l] = !0), t[_l] && (t[od] = !0), t[ng] && (t[od] = !0);
  for (const a in t) {
    const n = AC(a, i);
    n.indexOf(e) < 0 && n.push(e);
  }
}
function EC(e, t) {
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
          const d = Object.assign(EC(s.t, a), i);
          Xn(r, d, a);
        } else i && Xn(r, i, a);
      s.t = r;
    }
    return n.j[e] = s, s;
  }
};
const We = (e, t, i, a, n) => e.ta(t, i, a, n), St = (e, t, i, a, n) => e.tr(t, i, a, n), Ep = (e, t, i, a, n) => e.ts(t, i, a, n), _e = (e, t, i, a, n) => e.tt(t, i, a, n), $a = "WORD", ud = "UWORD", rg = "ASCIINUMERICAL", lg = "ALPHANUMERICAL", ts = "LOCALHOST", cd = "TLD", dd = "UTLD", Xs = "SCHEME", Cr = "SLASH_SCHEME", Kd = "NUM", fd = "WS", Wd = "NL", Il = "OPENBRACE", Ll = "CLOSEBRACE", To = "OPENBRACKET", Ao = "CLOSEBRACKET", Eo = "OPENPAREN", $o = "CLOSEPAREN", xo = "OPENANGLEBRACKET", Oo = "CLOSEANGLEBRACKET", No = "FULLWIDTHLEFTPAREN", Ro = "FULLWIDTHRIGHTPAREN", Io = "LEFTCORNERBRACKET", Lo = "RIGHTCORNERBRACKET", Po = "LEFTWHITECORNERBRACKET", Do = "RIGHTWHITECORNERBRACKET", Fo = "FULLWIDTHLESSTHAN", Mo = "FULLWIDTHGREATERTHAN", Uo = "AMPERSAND", zo = "APOSTROPHE", jo = "ASTERISK", pn = "AT", Bo = "BACKSLASH", Ho = "BACKTICK", Vo = "CARET", Jn = "COLON", Yd = "COMMA", qo = "DOLLAR", ia = "DOT", Go = "EQUALS", Zd = "EXCLAMATION", Ri = "HYPHEN", Pl = "PERCENT", Ko = "PIPE", Wo = "PLUS", Yo = "POUND", Dl = "QUERY", Xd = "QUOTE", sg = "FULLWIDTHMIDDLEDOT", Jd = "SEMI", aa = "SLASH", Fl = "TILDE", Zo = "UNDERSCORE", og = "EMOJI", Xo = "SYM";
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
`, $C = "️", xC = "‍", Nc = "￼";
let Vs = null, qs = null;
function OC(e = []) {
  const t = {};
  Si.groups = t;
  const i = new Si();
  Vs == null && (Vs = xp(kC)), qs == null && (qs = xp(SC)), _e(i, "'", zo), _e(i, "{", Il), _e(i, "}", Ll), _e(i, "[", To), _e(i, "]", Ao), _e(i, "(", Eo), _e(i, ")", $o), _e(i, "<", xo), _e(i, ">", Oo), _e(i, "（", No), _e(i, "）", Ro), _e(i, "「", Io), _e(i, "」", Lo), _e(i, "『", Po), _e(i, "』", Do), _e(i, "＜", Fo), _e(i, "＞", Mo), _e(i, "&", Uo), _e(i, "*", jo), _e(i, "@", pn), _e(i, "`", Ho), _e(i, "^", Vo), _e(i, ":", Jn), _e(i, ",", Yd), _e(i, "$", qo), _e(i, ".", ia), _e(i, "=", Go), _e(i, "!", Zd), _e(i, "-", Ri), _e(i, "%", Pl), _e(i, "|", Ko), _e(i, "+", Wo), _e(i, "#", Yo), _e(i, "?", Dl), _e(i, '"', Xd), _e(i, "/", aa), _e(i, ";", Jd), _e(i, "~", Fl), _e(i, "_", Zo), _e(i, "\\", Bo), _e(i, "・", sg);
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
  _e(g, "#"), St(g, $c, g), _e(g, $C, g);
  const m = _e(g, xC);
  _e(m, "#"), St(m, $c, g);
  const k = [[Aa, s], [Ea, n]], C = [[Aa, null], [vl, c], [Ea, r]];
  for (let S = 0; S < Vs.length; S++)
    on(i, Vs[S], cd, $a, k);
  for (let S = 0; S < qs.length; S++)
    on(i, qs[S], dd, ud, C);
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
  }, t), e = e.sort((S, $) => S[0] > $[0] ? 1 : -1);
  for (let S = 0; S < e.length; S++) {
    const $ = e[S][0], I = e[S][1] ? {
      [CC]: !0
    } : {
      [TC]: !0
    };
    $.indexOf("-") >= 0 ? I[od] = !0 : Aa.test($) ? Ea.test($) ? I[Rl] = !0 : I[ld] = !0 : I[rd] = !0, Ep(i, $, $, I);
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
  const i = NC(t.replace(/[A-Z]/g, (c) => c.toLowerCase())), a = i.length, n = [];
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
function NC(e) {
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
const RC = wu("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Np = wu("text"), IC = wu("nl"), Gs = wu("url", {
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
function LC({
  groups: e
}) {
  const t = e.domain.concat([Uo, jo, pn, Bo, Ho, Vo, qo, Go, Ri, Kd, Pl, Ko, Wo, Yo, aa, Xo, Fl, Zo]), i = [zo, Jn, Yd, ia, Zd, Pl, Dl, Xd, Jd, xo, Oo, Il, Ll, Ao, To, Eo, $o, No, Ro, Io, Lo, Po, Do, Fo, Mo], a = [Uo, zo, jo, Bo, Ho, Vo, qo, Go, Ri, Il, Ll, Pl, Ko, Wo, Yo, Dl, aa, Xo, Fl, Zo], n = Oi(), r = _e(n, Fl);
  We(r, a, r), We(r, e.domain, r);
  const s = Oi(), c = Oi(), d = Oi();
  We(n, e.domain, s), We(n, e.scheme, c), We(n, e.slashscheme, d), We(s, a, r), We(s, e.domain, s);
  const y = _e(s, pn);
  _e(r, pn, y), _e(c, pn, y), _e(d, pn, y);
  const v = _e(r, ia);
  We(v, a, r), We(v, e.domain, r);
  const g = Oi();
  We(y, e.domain, g), We(g, e.domain, g);
  const m = _e(g, ia);
  We(m, e.domain, g);
  const k = Oi(RC);
  We(m, e.tld, k), We(m, e.utld, k), _e(y, ts, k);
  const C = _e(g, Ri);
  _e(C, Ri, C), We(C, e.domain, g), We(k, e.domain, g), _e(k, ia, m), _e(k, Ri, C);
  const S = _e(s, Ri), $ = _e(s, ia);
  _e(S, Ri, S), We(S, e.domain, s), We($, a, r), We($, e.domain, s);
  const L = Oi(Gs);
  We($, e.tld, L), We($, e.utld, L), We(L, e.domain, s), We(L, a, r), _e(L, ia, $), _e(L, Ri, S), _e(L, pn, y);
  const I = _e(L, Jn), P = Oi(Gs);
  We(I, e.numeric, P);
  const N = Oi(Gs), pe = Oi();
  We(N, t, N), We(N, i, pe), We(pe, t, N), We(pe, i, pe), _e(L, aa, N), _e(P, aa, N);
  const Q = _e(c, Jn), x = _e(d, Jn), B = _e(x, aa), K = _e(B, aa);
  We(c, e.domain, s), _e(c, ia, $), _e(c, Ri, S), We(d, e.domain, s), _e(d, ia, $), _e(d, Ri, S), We(Q, e.domain, N), _e(Q, aa, N), _e(Q, Dl, N), We(K, e.domain, N), We(K, t, N), _e(K, aa, N);
  const Z = [
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
  for (let se = 0; se < Z.length; se++) {
    const [H, Y] = Z[se], R = _e(N, H);
    _e(pe, H, R);
    const G = Oi(Gs);
    We(R, t, G);
    const X = Oi();
    We(R, i, X), _e(R, Y, N), We(G, t, G), We(G, i, X), We(X, t, G), We(X, i, X), _e(G, Y, N), _e(X, Y, N);
  }
  return _e(n, ts, L), _e(n, Wd, IC), {
    start: n,
    tokens: ug
  };
}
function PC(e, t, i) {
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
      const k = g.t, C = i.slice(n - v, n);
      r.push(Rc(k, t, C));
    }
  }
  return s.length > 0 && r.push(Rc(Np, t, s)), r;
}
function Rc(e, t, i) {
  const a = i[0].s, n = i[i.length - 1].e, r = t.slice(a, n);
  return new e(r, i);
}
const Yt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function DC() {
  Yt.scanner = OC(Yt.customSchemes);
  for (let e = 0; e < Yt.tokenQueue.length; e++)
    Yt.tokenQueue[e][1]({
      scanner: Yt.scanner
    });
  Yt.parser = LC(Yt.scanner.tokens);
  for (let e = 0; e < Yt.pluginQueue.length; e++)
    Yt.pluginQueue[e][1]({
      scanner: Yt.scanner,
      parser: Yt.parser
    });
  return Yt.initialized = !0, Yt;
}
function fg(e) {
  return Yt.initialized || DC(), PC(Yt.parser.start, e, cg(Yt.scanner.start, e));
}
fg.scan = cg;
function FC(e) {
  const t = new Qd({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, zC), i = fg(e), a = [];
  for (const n of i)
    n.t === "nl" && t.get("nl2br") ? a.push(`<br>
`) : !n.isLink || !t.check(n) ? a.push(ho(n.toString())) : a.push(t.render(n));
  return a.join("");
}
function MC(e) {
  return e.replace(/"/g, "&quot;");
}
function UC(e) {
  const t = [];
  for (const i in e) {
    const a = e[i] + "";
    t.push(`${i}="${MC(a)}"`);
  }
  return t.join(" ");
}
function zC({ tagName: e, attributes: t, content: i }) {
  return `<${e} ${UC(t)}>${ho(i)}</${e}>`;
}
const jC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = FC(t.text));
}, BC = ["title"], HC = /* @__PURE__ */ qt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Xt("NcAppSidebar:header:ref");
    return (i, a) => ye((h(), p("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      ie(o(e.name), 1)
    ], 8, BC)), [
      [u(jC), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), VC = ["aria-labelledby"], qC = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, GC = ["id"], KC = {
  key: 2,
  class: "empty-content__description"
}, WC = {
  key: 3,
  class: "empty-content__action"
}, YC = /* @__PURE__ */ qt({
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
      i.$slots.icon ? (h(), p("div", qC, [
        Be(i.$slots, "icon", {}, void 0, !0)
      ])) : A("", !0),
      e.name !== "" || i.$slots.name ? (h(), p("div", {
        key: 1,
        id: u(t),
        class: "empty-content__name"
      }, [
        Be(i.$slots, "name", {}, () => [
          ie(o(e.name), 1)
        ], !0)
      ], 8, GC)) : A("", !0),
      e.description !== "" || i.$slots.description ? (h(), p("p", KC, [
        Be(i.$slots, "description", {}, () => [
          ie(o(e.description), 1)
        ], !0)
      ])) : A("", !0),
      i.$slots.action ? (h(), p("div", WC, [
        Be(i.$slots, "action", {}, void 0, !0)
      ])) : A("", !0)
    ], 8, VC));
  }
}), ZC = /* @__PURE__ */ ut(YC, [["__scopeId", "data-v-8609a4c1"]]), XC = {
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
}, JC = ["aria-hidden", "aria-label"], QC = ["fill", "width", "height"], e2 = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, t2 = { key: 0 };
function i2(e, t, i, a, n, r) {
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
      l("path", e2, [
        i.title ? (h(), p("title", t2, o(i.title), 1)) : A("", !0)
      ])
    ], 8, QC))
  ], 16, JC);
}
const a2 = /* @__PURE__ */ ut(XC, [["render", i2]]), n2 = {
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
}, r2 = ["aria-hidden", "aria-label"], l2 = ["fill", "width", "height"], s2 = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, o2 = { key: 0 };
function u2(e, t, i, a, n, r) {
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
      l("path", s2, [
        i.title ? (h(), p("title", o2, o(i.title), 1)) : A("", !0)
      ])
    ], 8, l2))
  ], 16, r2);
}
const c2 = /* @__PURE__ */ ut(n2, [["render", u2]]), d2 = {
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
}, f2 = ["aria-hidden", "aria-label"], h2 = ["fill", "width", "height"], p2 = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, v2 = { key: 0 };
function b2(e, t, i, a, n, r) {
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
      l("path", p2, [
        i.title ? (h(), p("title", v2, o(i.title), 1)) : A("", !0)
      ])
    ], 8, h2))
  ], 16, f2);
}
const g2 = /* @__PURE__ */ ut(d2, [["render", b2]]), m2 = ["aria-selected", "tabindex"], y2 = /* @__PURE__ */ qt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Uy({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Ov(e, "selected"), i = /* @__PURE__ */ z(!1);
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
          he(nd, {
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
          he(nd, {
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
    ], 10, m2));
  }
}), _2 = "_sidebarTabsButton_q3kBA", w2 = "_sidebarTabsButton_legacy_KQ4d1", k2 = "_sidebarTabsButton_selected_Pjayf", S2 = "_sidebarTabsButton_animatedHighlight_uvp-0", C2 = "_sidebarTabsButton__name_rlQsL", T2 = "_sidebarTabsButton__icon_QzZg4", A2 = "_sidebarTabsButton__iconLayer_ZkZan", E2 = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", $2 = "_sidebarTabsButton__icon_pop_IA0By", x2 = "_sidebarTabsButton__legacyIcon_QhcNW", O2 = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: _2,
  sidebarTabsButton_legacy: w2,
  sidebarTabsButton_selected: k2,
  sidebarTabsButton_animatedHighlight: S2,
  sidebarTabsButton__name: C2,
  sidebarTabsButton__icon: T2,
  sidebarTabsButton__iconLayer: A2,
  sidebarTabsButton__iconLayer_hidden: E2,
  sidebarTabsButton__icon_pop: $2,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: x2
}, N2 = {
  $style: O2
}, R2 = /* @__PURE__ */ ut(y2, [["__cssModules", N2]]), I2 = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: R2
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
      this.tabs.push(e), this.tabs.sort((t, i) => t.order === i.order ? t.name.localeCompare(i.name, [M_()]) : t.order - i.order), this.updateActive();
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
}, L2 = { class: "app-sidebar-tabs" };
function P2(e, t, i, a, n, r) {
  const s = Xe("NcAppSidebarTabsButton");
  return h(), p("div", L2, [
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
      }, null, 6)) : A("", !0),
      (h(!0), p(W, null, fe(n.tabs, (c) => (h(), De(s, {
        id: `tab-button-${c.id}`,
        key: c.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${c.id}`,
        selected: n.activeTab === c.id,
        animatedHighlight: n.highlightEnabled,
        tab: c,
        "onUpdate:selected": (d) => r.setActive(c.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : A("", !0),
    l("div", {
      class: Ee(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Be(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const D2 = /* @__PURE__ */ ut(I2, [["render", P2], ["__scopeId", "data-v-74190d2a"]]);
Cn(_0);
const F2 = {
  name: "NcAppSidebar",
  components: {
    NcActions: Gd,
    NcAppSidebarHeader: HC,
    NcAppSidebarTabs: D2,
    NcButton: oa,
    NcLoadingIcon: ag,
    NcEmptyContent: ZC,
    IconArrowRight: Pb,
    IconClose: Db,
    IconDockRight: a2,
    IconStar: c2,
    IconStarOutline: g2
  },
  directives: {
    Focus: wC,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: _C
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
    const e = /* @__PURE__ */ z(null);
    return Ii("NcAppSidebar:header:ref", e), {
      uid: gu(),
      isMobile: p0(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: Dt("Change name"),
      closeTranslated: Dt("Close sidebar"),
      favoriteTranslated: Dt("Favorite"),
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
    t: Dt,
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
}, M2 = ["aria-labelledby"], U2 = { class: "app-sidebar-header__info" }, z2 = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, j2 = { class: "app-sidebar-header__name-container" }, B2 = { class: "app-sidebar-header__mainname-container" }, H2 = ["placeholder", "value"], V2 = ["title"], q2 = {
  key: 2,
  class: "app-sidebar-header__description"
};
function G2(e, t, i, a, n, r) {
  const s = Xe("IconDockRight"), c = Xe("NcButton"), d = Xe("NcLoadingIcon"), y = Xe("IconStar"), v = Xe("IconStarOutline"), g = Xe("NcAppSidebarHeader"), m = Xe("IconArrowRight"), k = Xe("NcActions"), C = Xe("IconClose"), S = Xe("NcAppSidebarTabs"), $ = Xe("NcEmptyContent"), L = Yf("focus"), I = Yf("click-outside");
  return h(), De(A1, {
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
        r.ncContentSelector && !i.open && !i.noToggle ? (h(), De(Ed, {
          key: 0,
          to: r.ncContentSelector
        }, [
          he(c, ti({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", i.toggleClasses],
            variant: "tertiary"
          }, i.toggleAttrs, {
            onClick: t[0] || (t[0] = (P) => e.$emit("update:open", !0))
          }), {
            icon: ke(() => [
              Be(e.$slots, "toggle-icon", {}, () => [
                he(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : A("", !0),
        l("header", {
          class: Ee(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || i.background,
            "app-sidebar-header--compact": i.compact
          }])
        }, [
          i.empty ? (h(), De(g, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: i.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Be(e.$slots, "info", { key: 0 }, () => [
            l("div", U2, [
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
                Be(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : A("", !0),
              l("div", {
                class: Ee(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": i.nameEditable && !i.subname,
                  "app-sidebar-header__desc--with-subname--editable": i.nameEditable && i.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (h(), p("div", z2, [
                  Be(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (h(), De(c, {
                      key: 0,
                      "aria-label": n.favoriteTranslated,
                      pressed: n.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Ce(r.toggleStarred, ["prevent"])
                    }, {
                      icon: ke(() => [
                        i.starLoading ? (h(), De(d, { key: 0 })) : n.isStarred ? (h(), De(y, {
                          key: 1,
                          size: 20
                        })) : (h(), De(v, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : A("", !0)
                  ], !0)
                ])) : A("", !0),
                l("div", j2, [
                  l("div", B2, [
                    ye(he(g, {
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
                      }, null, 40, H2), [
                        [L]
                      ]),
                      he(c, {
                        "aria-label": n.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: ke(() => [
                          he(m, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [I, () => r.onSubmitName()]
                    ]) : A("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (h(), De(k, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: i.forceMenu
                    }, {
                      default: ke(() => [
                        Be(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : A("", !0)
                  ]),
                  i.subname.trim() !== "" || e.$slots.subname ? (h(), p("p", {
                    key: 0,
                    title: i.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Be(e.$slots, "subname", {}, () => [
                      ie(o(i.subname), 1)
                    ], !0)
                  ], 8, V2)) : A("", !0)
                ])
              ], 2)
            ])
          ], !0),
          he(c, {
            ref: "closeButton",
            "aria-label": n.closeTranslated,
            title: n.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Ce(r.closeSidebar, ["prevent"])
          }, {
            icon: ke(() => [
              he(C, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !i.empty ? (h(), p("div", q2, [
            Be(e.$slots, "description", {}, void 0, !0)
          ])) : A("", !0)
        ], 2),
        ye(he(S, {
          ref: "tabs",
          active: i.active,
          forceTabs: i.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: ke(() => [
            Be(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [tr, !i.loading]
        ]),
        i.loading ? (h(), De($, { key: 1 }, {
          icon: ke(() => [
            he(d, { size: 64 })
          ]),
          _: 1
        })) : A("", !0)
      ], 40, M2), [
        [tr, i.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const K2 = /* @__PURE__ */ ut(F2, [["render", G2], ["__scopeId", "data-v-c2c6820b"]]), W2 = {
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
}, Y2 = ["role"], Z2 = ["download", "href", "aria-label", "target", "title", "role"], X2 = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, J2 = { class: "action-link__name" }, Q2 = ["textContent"], eT = ["textContent"], tT = {
  key: 2,
  class: "action-link__text"
};
function iT(e, t, i, a, n, r) {
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
          class: Ee(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: pi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (h(), p("span", X2, [
        l("strong", J2, o(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: o(e.text)
        }, null, 8, Q2)
      ])) : e.isLongText ? (h(), p("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: o(e.text)
      }, null, 8, eT)) : (h(), p("span", tT, o(e.text), 1)),
      A("", !0)
    ], 8, Z2)
  ], 8, Y2);
}
const Ic = /* @__PURE__ */ ut(W2, [["render", iT], ["__scopeId", "data-v-32f01b7a"]]);
Cn(T0);
const aT = `<!--
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
`, nT = `<!--
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
`, rT = { class: "vue-skip-actions__container" }, lT = { class: "vue-skip-actions__headline" }, sT = { class: "vue-skip-actions__buttons" }, oT = /* @__PURE__ */ qt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    Ii(Ib, c), Ii(Lb, "#content-vue"), Ii("appName", j(() => t.appName));
    const i = cs(), a = /* @__PURE__ */ z(!1), n = /* @__PURE__ */ z(), r = j(() => n.value === "navigation" ? nT : aT);
    kv(() => {
      const d = document.getElementById("skip-actions");
      d && (d.innerHTML = "", d.classList.add("vue-skip-actions"));
    });
    function s() {
      Fa("toggle-navigation", { open: !0 }), Nt(() => {
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
      (h(), De(Ed, { to: "#skip-actions" }, [
        l("div", rT, [
          l("div", lT, o(u(Dt)("Keyboard navigation help")), 1),
          l("div", sT, [
            ye(he(oa, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Ce(s, ["prevent"]),
              onFocusin: y[0] || (y[0] = (v) => n.value = "navigation"),
              onMouseover: y[1] || (y[1] = (v) => n.value = "navigation")
            }, {
              default: ke(() => [
                ie(o(u(Dt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [tr, a.value]
            ]),
            he(oa, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: y[2] || (y[2] = (v) => n.value = "content"),
              onMouseover: y[3] || (y[3] = (v) => n.value = "content")
            }, {
              default: ke(() => [
                ie(o(u(Dt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          ye(he(bu, {
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
}), uT = /* @__PURE__ */ ut(oT, [["__scopeId", "data-v-d13dcb98"]]), cT = { class: "library-shelf-tree-node" }, dT = ["aria-expanded", "aria-label"], fT = ["href"], hT = { class: "library-shelf-summary-title" }, pT = { dir: "auto" }, vT = { class: "library-muted" }, bT = { dir: "auto" }, gT = {
  key: 1,
  role: "status",
  class: "library-muted"
}, mT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, yT = {
  key: 3,
  class: "library-shelf-tree"
}, _T = ["disabled"], wT = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ z(!1), a = /* @__PURE__ */ z(!1), n = /* @__PURE__ */ z(!1), r = /* @__PURE__ */ z(!1), s = /* @__PURE__ */ z([]), c = /* @__PURE__ */ z(!1), d = /* @__PURE__ */ z(0);
    async function y() {
      i.value = !i.value, !(!i.value || a.value || n.value) && await v();
    }
    async function v() {
      if (!n.value) {
        n.value = !0, r.value = !1;
        try {
          const g = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(d.value) }), m = await fetch(`${t.childrenUrl}?${g}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!m.ok) throw new Error("Shelf children request failed");
          const k = await m.json(), C = Array.isArray(k?.nodes) ? k.nodes : [];
          s.value.push(...C), c.value = k?.hasMore === !0, d.value = Number.isInteger(k?.nextOffset) ? k.nextOffset : s.value.length, a.value = !c.value;
        } catch {
          r.value = !0;
        } finally {
          n.value = !1;
        }
      }
    }
    return (g, m) => {
      const k = Xe("ShelfTreeNode", !0);
      return h(), p("li", cT, [
        e.node.hasChildren ? (h(), p("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(i.value),
          "aria-label": i.value ? u(_)("library", "Collapse {folder}", { folder: e.node.label }) : u(_)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: y
        }, o(i.value ? "−" : "+"), 9, dT)) : A("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", hT, [
            l("strong", null, [
              l("bdi", pT, o(e.node.label), 1)
            ]),
            l("span", null, o(u(It)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", vT, [
            l("bdi", bT, o(e.node.path), 1)
          ])
        ], 8, fT),
        n.value ? (h(), p("small", gT, o(u(_)("library", "Loading folders…")), 1)) : r.value ? (h(), p("small", mT, o(u(_)("library", "Could not load folders.")), 1)) : A("", !0),
        i.value && s.value.length ? (h(), p("ul", yT, [
          (h(!0), p(W, null, fe(s.value, (C) => (h(), De(k, {
            key: C.id,
            node: C,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : A("", !0),
        i.value && c.value ? (h(), p("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: n.value,
          onClick: v
        }, o(u(_)("library", "Load more folders")), 9, _T)) : A("", !0)
      ]);
    };
  }
}, kT = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, ST = ["src"], CT = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, hg = {
  __name: "CatalogueCover",
  props: { src: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ z(null), a = /* @__PURE__ */ z(typeof IntersectionObserver > "u"), n = /* @__PURE__ */ z("loading");
    let r;
    return qe(() => t.src, () => {
      n.value = "loading";
    }), Tt(() => {
      a.value || (r = new IntersectionObserver((s) => {
        s.some((c) => c.isIntersecting) && (a.value = !0, r.disconnect());
      }, { rootMargin: "240px" }), r.observe(i.value));
    }), Ti(() => r?.disconnect()), (s, c) => (h(), p("span", {
      ref_key: "frame",
      ref: i,
      class: Ee(["library-cover-frame", { "library-cover-frame--error": n.value === "error" }])
    }, [
      n.value === "loading" ? (h(), p("span", kT)) : A("", !0),
      (h(), p("img", {
        key: e.src,
        class: Ee(["library-cover-image", { "library-cover-image--loaded": n.value === "loaded" }]),
        src: a.value ? e.src : void 0,
        alt: "",
        loading: "lazy",
        decoding: "async",
        onLoad: c[0] || (c[0] = (d) => n.value = "loaded"),
        onError: c[1] || (c[1] = (d) => n.value = "error")
      }, null, 42, ST)),
      n.value === "error" ? (h(), p("span", CT, o(u(_)("library", "Cover unavailable")), 1)) : A("", !0)
    ], 2));
  }
};
async function Rp(e = "", t = "", i = null) {
  const a = await fetch(`${Lt("/apps/library/api/lists")}${e}`, {
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
const TT = ["aria-busy"], AT = { class: "library-list-inline-actions" }, ET = ["disabled", "aria-label"], $T = ["value"], xT = ["disabled"], OT = ["href"], NT = ["href"], RT = {
  key: 0,
  role: "status"
}, IT = {
  key: 1,
  role: "alert"
}, LT = ["disabled"], PT = {
  key: 3,
  role: "status"
}, hd = {
  __name: "AddToList",
  props: { preferredListId: { type: Number, default: null }, itemIds: { type: Array, required: !0 }, requestToken: { type: String, default: "" }, listsUrl: { type: String, required: !0 } },
  emits: ["added"],
  setup(e, { emit: t }) {
    const i = e, a = t, n = /* @__PURE__ */ z([]), r = /* @__PURE__ */ z(""), s = /* @__PURE__ */ z(!1), c = /* @__PURE__ */ z(""), d = /* @__PURE__ */ z("");
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
    return qe(() => i.itemIds.join(","), () => {
      d.value = "";
    }), Tt(y), (g, m) => (h(), p("div", {
      class: "library-add-to-list",
      "aria-busy": s.value ? "true" : "false"
    }, [
      l("div", AT, [
        n.value.length ? ye((h(), p("select", {
          key: 0,
          "onUpdate:modelValue": m[0] || (m[0] = (k) => r.value = k),
          disabled: s.value,
          "aria-label": u(_)("library", "Choose a list"),
          onChange: m[1] || (m[1] = (k) => d.value = "")
        }, [
          (h(!0), p(W, null, fe(n.value, (k) => (h(), p("option", {
            key: k.id,
            value: String(k.id)
          }, o(k.name), 9, $T))), 128))
        ], 40, ET)), [
          [nt, r.value]
        ]) : A("", !0),
        n.value.length ? (h(), p("button", {
          key: 1,
          type: "button",
          class: "button primary",
          disabled: s.value || e.itemIds.length === 0 || !r.value,
          onClick: v
        }, o(u(_)("library", "Add to list")), 9, xT)) : A("", !0),
        !s.value && !n.value.length && !c.value ? (h(), p("a", {
          key: 2,
          href: `${e.listsUrl}&new=1`
        }, o(u(_)("library", "Create a new list")), 9, OT)) : A("", !0),
        d.value && r.value ? (h(), p("a", {
          key: 3,
          href: `${e.listsUrl}&listId=${r.value}`
        }, o(u(_)("library", "Back to list")), 9, NT)) : A("", !0)
      ]),
      s.value ? (h(), p("p", RT, o(u(_)("library", "Loading or saving…")), 1)) : A("", !0),
      c.value ? (h(), p("p", IT, o(c.value), 1)) : A("", !0),
      c.value ? (h(), p("button", {
        key: 2,
        type: "button",
        class: "button secondary",
        disabled: s.value,
        onClick: y
      }, o(u(_)("library", "Reload list")), 9, LT)) : A("", !0),
      d.value ? (h(), p("p", PT, o(d.value), 1)) : A("", !0)
    ], 8, TT));
  }
}, DT = ["onKeydown"], FT = ["aria-label", "aria-describedby"], MT = ["id"], Ge = {
  __name: "LabelHelp",
  props: { text: { type: String, required: !0 } },
  setup(e) {
    const t = Ty(), i = /* @__PURE__ */ z(null), a = /* @__PURE__ */ z(null), n = /* @__PURE__ */ z(!1), r = /* @__PURE__ */ z({});
    let s;
    const c = `${t}-label`;
    Tt(() => {
      const $ = i.value?.closest("label"), L = $?.querySelector("input, select, textarea"), I = i.value?.closest("h1, h2, h3, h4");
      $ && L && !$.htmlFor && (L.id ||= `${t}-control`, $.htmlFor = L.id);
      for (const P of [L, I])
        P && !P.hasAttribute("aria-label") && !P.hasAttribute("aria-labelledby") && P.setAttribute("aria-labelledby", c);
    });
    async function d() {
      clearTimeout(s), n.value = !0, await Nt(), y();
    }
    function y() {
      if (!i.value || !a.value) return;
      const $ = i.value.getBoundingClientRect(), L = a.value.offsetHeight;
      r.value = { left: `${Math.max(8, Math.min($.left, window.innerWidth - 336))}px`, top: `${Math.max(8, $.bottom + L + 12 < window.innerHeight ? $.bottom + 8 : $.top - L - 8)}px` };
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
    function k($) {
      !i.value?.contains($.target) && !a.value?.contains($.target) && g();
    }
    function C($) {
      $.key === "Escape" && g();
    }
    function S($) {
      n.value && (!($.target instanceof Node) || !a.value?.contains($.target)) && y();
    }
    return document.addEventListener("keydown", C), document.addEventListener("pointerdown", k), window.addEventListener("scroll", S, !0), Ti(() => {
      clearTimeout(s), document.removeEventListener("pointerdown", k), window.removeEventListener("scroll", S, !0), document.removeEventListener("keydown", C);
    }), ($, L) => (h(), p("span", {
      ref_key: "anchor",
      ref: i,
      class: "library-label-help",
      onPointerenter: L[0] || (L[0] = (I) => I.pointerType !== "touch" && d()),
      onPointerleave: m,
      onKeydown: ht(Ce(g, ["stop", "prevent"]), ["esc"])
    }, [
      l("span", { id: c }, [
        Be($.$slots, "default")
      ]),
      l("button", {
        type: "button",
        class: "library-label-help-button",
        "aria-label": u(_)("library", "Help"),
        "aria-describedby": n.value ? u(t) : void 0,
        onFocus: d,
        onBlur: m,
        onClick: Ce(d, ["stop", "prevent"])
      }, "?", 40, FT),
      (h(), De(Ed, { to: "body" }, [
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
        }, o(e.text), 45, MT)) : A("", !0)
      ]))
    ], 40, DT));
  }
}, UT = ["aria-label", "aria-busy"], zT = { class: "library-lists-heading" }, jT = ["href"], BT = ["disabled"], HT = {
  key: 0,
  role: "alert"
}, VT = ["disabled"], qT = {
  key: 2,
  role: "status"
}, GT = {
  key: 3,
  role: "status"
}, KT = ["disabled"], WT = ["disabled"], YT = { class: "library-list-actions" }, ZT = ["disabled"], XT = ["disabled"], JT = {
  key: 0,
  class: "library-list-description",
  dir: "auto"
}, QT = {
  key: 1,
  class: "library-list-actions"
}, eA = ["href"], tA = ["disabled"], iA = ["disabled"], aA = ["aria-label"], nA = ["disabled"], rA = ["disabled"], lA = {
  key: 3,
  class: "library-lists-empty"
}, sA = ["start"], oA = ["id", "onDrop"], uA = { class: "library-list-entry-heading" }, cA = ["draggable", "title", "onDragstart"], dA = ["src"], fA = { class: "library-list-book" }, hA = { key: 0 }, pA = ["href"], vA = { key: 1 }, bA = {
  key: 2,
  dir: "auto"
}, gA = { key: 3 }, mA = ["href"], yA = {
  key: 0,
  class: "library-list-note",
  dir: "auto"
}, _A = ["onSubmit"], wA = ["disabled"], kA = { class: "library-list-actions" }, SA = ["disabled"], CA = ["disabled"], TA = {
  key: 2,
  class: "library-list-actions"
}, AA = ["disabled", "onClick"], EA = ["disabled", "onClick"], $A = ["disabled", "onClick"], xA = ["disabled", "onClick"], OA = {
  key: 3,
  class: "library-list-confirm"
}, NA = ["disabled", "onClick"], RA = ["disabled"], IA = ["aria-label"], LA = ["disabled"], PA = ["disabled"], DA = {
  key: 1,
  class: "library-lists-empty"
}, FA = { class: "library-list-cards" }, MA = ["href"], UA = { dir: "auto" }, zA = {
  key: 0,
  dir: "auto"
}, jA = {
  __name: "PersonalLists",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 }, listsUrl: { type: String, required: !0 } },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const i = e, a = t, n = /* @__PURE__ */ z([]), r = /* @__PURE__ */ z(null), s = /* @__PURE__ */ z(!1), c = /* @__PURE__ */ z(""), d = /* @__PURE__ */ z(""), y = /* @__PURE__ */ z(!1), v = /* @__PURE__ */ Rt({ name: "", description: "" }), g = /* @__PURE__ */ z(null), m = /* @__PURE__ */ z(""), k = /* @__PURE__ */ z(!1), C = /* @__PURE__ */ z(null), S = /* @__PURE__ */ z(null), $ = /* @__PURE__ */ z(null), L = /* @__PURE__ */ z(Number(new URLSearchParams(window.location.search).get("listId")) || null), I = Number(new URLSearchParams(window.location.search).get("addItem")) || null, P = j(() => !s.value && g.value === null);
    async function N(H = 1, Y = y.value) {
      s.value = !0, c.value = "";
      try {
        L.value ? r.value = await bn(`/${L.value}?page=${H}`) : n.value = (await bn()).lists, Y || (g.value = null, y.value = !1);
      } catch (R) {
        c.value = R.message;
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
          L.value = (await bn("", i.requestToken, v)).list.id;
          const H = new URL(window.location.href);
          H.searchParams.set("listId", L.value), window.history.replaceState({}, "", H);
        }
        y.value = !1, await N(1, !0), a("changed"), d.value = _("library", "List saved."), await Nt(), $.value?.focus();
      } catch (H) {
        c.value = H.message;
      } finally {
        s.value = !1;
      }
    }
    async function x(H, Y) {
      s.value = !0, c.value = "", d.value = "";
      try {
        const R = await bn(`/${r.value.list.id}/actions`, i.requestToken, { ...H, revision: r.value.list.revision });
        if (H.action === "delete") {
          r.value = null, L.value = null, k.value = !1;
          const G = new URL(window.location.href);
          G.searchParams.delete("listId"), window.history.replaceState({}, "", G);
        }
        if (g.value = null, C.value = null, H.action === "note") {
          const G = r.value.entries.find((X) => X.id === H.entryId);
          G && (G.note = H.note.trim()), r.value.list.revision = R.revision;
        } else await N(r.value?.page || 1);
        H.action === "delete" && a("changed"), d.value = Y, await Nt(), H.action === "move" ? document.getElementById(`library-list-entry-${H.entryId}`)?.focus() : $.value?.focus();
      } catch (R) {
        c.value = R.message;
      } finally {
        s.value = !1;
      }
    }
    function B(H) {
      g.value = H.id, m.value = H.note, C.value = null;
    }
    function K(H, Y) {
      return x({ action: "move", entryId: H.id, direction: Y }, _("library", "Reading order saved."));
    }
    function Z(H, Y) {
      S.value = Y.id, H.dataTransfer.setData("text/plain", String(Y.id));
    }
    function se(H) {
      if (S.value === null || !P.value) return;
      const Y = S.value;
      return S.value = null, x({ action: "move", entryId: Y, beforeId: H }, _("library", "Reading order saved."));
    }
    return Tt(async () => {
      await N(), !L.value && new URLSearchParams(window.location.search).get("new") === "1" && pe();
    }), (H, Y) => (h(), p("section", {
      class: "library-personal-lists",
      "aria-label": u(_)("library", "Personal lists"),
      "aria-busy": s.value ? "true" : "false"
    }, [
      l("header", zT, [
        l("div", null, [
          L.value ? (h(), p("a", {
            key: 0,
            href: e.listsUrl
          }, "← " + o(u(_)("library", "All lists")), 9, jT)) : A("", !0),
          l("h1", {
            ref_key: "heading",
            ref: $,
            tabindex: "-1"
          }, [
            he(Ge, {
              text: u(_)("library", "Private reading lists, in your own order, with your own notes.")
            }, {
              default: ke(() => [
                ie(o(r.value?.list.name || u(_)("library", "Lists")), 1)
              ]),
              _: 1
            }, 8, ["text"])
          ], 512)
        ]),
        !r.value && !L.value ? (h(), p("button", {
          key: 0,
          type: "button",
          class: "button primary",
          disabled: s.value || y.value,
          onClick: pe
        }, o(u(_)("library", "New list")), 9, BT)) : A("", !0)
      ]),
      c.value ? (h(), p("p", HT, o(c.value), 1)) : A("", !0),
      c.value ? (h(), p("button", {
        key: 1,
        type: "button",
        class: "button secondary",
        disabled: s.value,
        onClick: Y[0] || (Y[0] = (R) => N(r.value?.page || 1, !0))
      }, o(u(_)("library", "Reload list")), 9, VT)) : A("", !0),
      d.value ? (h(), p("p", qT, o(d.value), 1)) : A("", !0),
      s.value ? (h(), p("p", GT, o(u(_)("library", "Loading or saving…")), 1)) : A("", !0),
      y.value ? (h(), p("form", {
        key: 4,
        class: "library-list-editor",
        onSubmit: Ce(Q, ["prevent"])
      }, [
        l("label", null, [
          ie(o(u(_)("library", "List name")), 1),
          ye(l("input", {
            "onUpdate:modelValue": Y[1] || (Y[1] = (R) => v.name = R),
            required: "",
            maxlength: "120",
            disabled: s.value
          }, null, 8, KT), [
            [Ue, v.name]
          ])
        ]),
        l("label", null, [
          ie(o(u(_)("library", "Description / list note")), 1),
          ye(l("textarea", {
            "onUpdate:modelValue": Y[2] || (Y[2] = (R) => v.description = R),
            rows: "3",
            maxlength: "10000",
            disabled: s.value
          }, null, 8, WT), [
            [Ue, v.description]
          ])
        ]),
        l("div", YT, [
          l("button", {
            type: "submit",
            class: "button primary",
            disabled: s.value || !v.name.trim()
          }, o(u(_)("library", "Save list")), 9, ZT),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: s.value,
            onClick: Y[3] || (Y[3] = (R) => y.value = !1)
          }, o(u(_)("library", "Cancel")), 9, XT)
        ])
      ], 32)) : A("", !0),
      r.value ? (h(), p(W, { key: 5 }, [
        r.value.list.description && !y.value ? (h(), p("p", JT, o(r.value.list.description), 1)) : A("", !0),
        y.value ? A("", !0) : (h(), p("div", QT, [
          l("a", {
            class: "button primary",
            href: `${e.catalogueUrl}?addToList=${r.value.list.id}`
          }, o(u(_)("library", "Add books from catalogue")), 9, eA),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value,
            onClick: pe
          }, o(u(_)("library", "Edit list")), 9, tA),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value,
            onClick: Y[4] || (Y[4] = (R) => k.value = !k.value)
          }, o(u(_)("library", "Delete list")), 9, iA)
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
            onClick: Y[5] || (Y[5] = (R) => x({ action: "delete" }, u(_)("library", "List deleted.")))
          }, o(u(_)("library", "Delete list and notes")), 9, nA),
          l("button", {
            class: "button secondary",
            type: "button",
            disabled: s.value,
            onClick: Y[6] || (Y[6] = (R) => k.value = !1)
          }, o(u(_)("library", "Cancel")), 9, rA)
        ], 8, aA)) : A("", !0),
        r.value.total === 0 && !s.value ? (h(), p("p", lA, o(u(_)("library", "This list is empty. Select books in the catalogue and choose Add to list.")), 1)) : A("", !0),
        l("ol", {
          class: "library-list-entries",
          start: (r.value.page - 1) * 25 + 1
        }, [
          (h(!0), p(W, null, fe(r.value.entries, (R) => (h(), p("li", {
            id: `library-list-entry-${R.id}`,
            key: R.id,
            class: "library-list-entry",
            tabindex: "-1",
            onDragover: Y[11] || (Y[11] = Ce(() => {
            }, ["prevent"])),
            onDrop: Ce((G) => se(R.id), ["prevent"])
          }, [
            l("div", uA, [
              l("span", {
                class: "library-list-drag",
                draggable: P.value,
                title: u(_)("library", "Drag to reorder, or use Move up and Move down"),
                "aria-hidden": "true",
                onDragstart: (G) => Z(G, R),
                onDragend: Y[7] || (Y[7] = (G) => S.value = null)
              }, "⠿", 40, cA),
              R.book ? (h(), p("img", {
                key: 0,
                src: R.book.coverUrl,
                alt: "",
                width: "48",
                height: "64",
                loading: "lazy"
              }, null, 8, dA)) : A("", !0),
              l("div", fA, [
                R.book ? (h(), p("h2", hA, [
                  l("a", {
                    href: R.book.detailsUrl,
                    dir: "auto"
                  }, o(R.book.title), 9, pA)
                ])) : (h(), p("h2", vA, o(u(_)("library", "Unavailable book")), 1)),
                R.book?.creators ? (h(), p("p", bA, o(R.book.creators), 1)) : A("", !0),
                R.book ? A("", !0) : (h(), p("p", gA, o(u(_)("library", "The file is missing or access is unavailable. Your note and place in the list are kept.")), 1))
              ]),
              R.book ? (h(), p("a", {
                key: 1,
                class: "button secondary",
                href: R.book.openUrl
              }, o(u(_)("library", "Open")), 9, mA)) : A("", !0)
            ]),
            R.note && g.value !== R.id ? (h(), p("p", yA, o(R.note), 1)) : A("", !0),
            g.value === R.id ? (h(), p("form", {
              key: 1,
              class: "library-list-editor",
              onSubmit: Ce((G) => x({ action: "note", entryId: R.id, note: m.value }, u(_)("library", "Note saved.")), ["prevent"])
            }, [
              l("label", null, [
                ie(o(u(_)("library", "Your note for this book in this list")), 1),
                ye(l("textarea", {
                  "onUpdate:modelValue": Y[8] || (Y[8] = (G) => m.value = G),
                  maxlength: "10000",
                  rows: "3",
                  disabled: s.value
                }, null, 8, wA), [
                  [Ue, m.value]
                ])
              ]),
              l("div", kA, [
                l("button", {
                  type: "submit",
                  class: "button primary",
                  disabled: s.value
                }, o(u(_)("library", "Save note")), 9, SA),
                l("button", {
                  type: "button",
                  class: "button secondary",
                  disabled: s.value,
                  onClick: Y[9] || (Y[9] = (G) => g.value = null)
                }, o(u(_)("library", "Cancel")), 9, CA)
              ])
            ], 40, _A)) : (h(), p("div", TA, [
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value,
                onClick: (G) => B(R)
              }, o(R.note ? u(_)("library", "Edit note") : u(_)("library", "Add note")), 9, AA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value || R.number === 1,
                onClick: (G) => K(R, "up")
              }, o(u(_)("library", "Move up")), 9, EA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value || R.number === r.value.total,
                onClick: (G) => K(R, "down")
              }, o(u(_)("library", "Move down")), 9, $A),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value,
                onClick: (G) => C.value = R.id
              }, o(u(_)("library", "Remove from list")), 9, xA)
            ])),
            C.value === R.id ? (h(), p("div", OA, [
              l("p", null, o(u(_)("library", "Remove this entry and its note? The book stays in your library.")), 1),
              l("button", {
                type: "button",
                class: "button",
                disabled: !P.value,
                onClick: (G) => x({ action: "remove", entryId: R.id }, u(_)("library", "Book removed from list."))
              }, o(u(_)("library", "Remove entry and note")), 9, NA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: s.value,
                onClick: Y[10] || (Y[10] = (G) => C.value = null)
              }, o(u(_)("library", "Cancel")), 9, RA)
            ])) : A("", !0)
          ], 40, oA))), 128))
        ], 8, sA),
        r.value.pages > 1 ? (h(), p("nav", {
          key: 4,
          class: "library-list-actions",
          "aria-label": u(_)("library", "List pages")
        }, [
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value || r.value.page === 1,
            onClick: Y[12] || (Y[12] = (R) => N(r.value.page - 1))
          }, o(u(_)("library", "Previous page")), 9, LA),
          l("span", null, o(u(_)("library", "Page {page} of {pages}", { page: r.value.page, pages: r.value.pages })), 1),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value || r.value.page === r.value.pages,
            onClick: Y[13] || (Y[13] = (R) => N(r.value.page + 1))
          }, o(u(_)("library", "Next page")), 9, PA)
        ], 8, IA)) : A("", !0)
      ], 64)) : L.value ? A("", !0) : (h(), p(W, { key: 6 }, [
        u(I) ? (h(), De(hd, {
          key: 0,
          "item-ids": [u(I)],
          "request-token": e.requestToken,
          "lists-url": e.listsUrl,
          onAdded: Y[14] || (Y[14] = (R) => N())
        }, null, 8, ["item-ids", "request-token", "lists-url"])) : A("", !0),
        !n.value.length && !s.value && !y.value ? (h(), p("p", DA, o(u(_)("library", "Create your first list for a reading plan, a project or books to return to.")), 1)) : A("", !0),
        l("ul", FA, [
          (h(!0), p(W, null, fe(n.value, (R) => (h(), p("li", {
            key: R.id
          }, [
            l("a", {
              href: `${e.listsUrl}&listId=${R.id}`
            }, [
              l("h2", UA, o(R.name), 1),
              l("p", null, o(u(_)("library", "Books: {count}", { count: R.count })), 1),
              R.description ? (h(), p("p", zA, o(R.description), 1)) : A("", !0)
            ], 8, MA)
          ]))), 128))
        ])
      ], 64))
    ], 8, UT));
  }
}, pg = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [a, n] of t)
    i[a] = n;
  return i;
}, BA = ["aria-busy"], HA = ["href"], VA = { id: "author-conflicts-heading" }, qA = {
  key: 0,
  role: "status"
}, GA = {
  key: 1,
  role: "status"
}, KA = {
  key: 2,
  role: "alert"
}, WA = ["disabled"], YA = ["aria-label"], ZA = { class: "author-conflict-comparison" }, XA = { dir: "auto" }, JA = { dir: "auto" }, QA = { key: 0 }, eE = { key: 0 }, tE = { class: "author-conflict-actions" }, iE = ["disabled"], aE = ["disabled"], nE = ["disabled"], rE = { key: 0 }, lE = { class: "author-conflict-books" }, sE = ["href"], oE = ["disabled", "onClick"], uE = ["aria-label"], cE = ["disabled"], dE = ["disabled"], fE = {
  __name: "AuthorConflicts",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ z(null), a = /* @__PURE__ */ z(null), n = /* @__PURE__ */ z(!1), r = /* @__PURE__ */ z(""), s = /* @__PURE__ */ z(""), c = /* @__PURE__ */ z(1), d = /* @__PURE__ */ z(null);
    async function y(k, C = null) {
      const S = await fetch(Lt("/apps/library/api/authors/conflicts") + k, {
        credentials: "same-origin",
        cache: "no-store",
        method: C === null ? "GET" : "POST",
        headers: { Accept: "application/json", ...C === null ? {} : { "Content-Type": "application/json", requesttoken: t.requestToken } },
        ...C === null ? {} : { body: JSON.stringify(C) }
      });
      if (!S.ok) throw new Error(S.status === 409 ? _("library", "This book or its author assignments changed. Reload and review again.") : _("library", "Could not load or resolve the author change. Please retry."));
      return S.json();
    }
    async function v(k = 1) {
      n.value = !0, r.value = "", a.value = null;
      try {
        i.value = await y(`?page=${k}`), c.value = k;
      } catch (C) {
        r.value = C.message;
      } finally {
        n.value = !1;
      }
    }
    async function g(k) {
      n.value = !0, r.value = "", s.value = "", a.value = null;
      try {
        a.value = await y(`/${k.id}`), await Nt(), d.value?.focus();
      } catch (C) {
        r.value = C.message;
      } finally {
        n.value = !1;
      }
    }
    async function m(k) {
      n.value = !0, r.value = "";
      try {
        await y(`/${a.value.id}`, { choice: k, token: a.value.token }), s.value = _("library", "Author change resolved. Book metadata and files are unchanged."), await v(c.value), !i.value.books.length && c.value > 1 && await v(c.value - 1);
      } catch (C) {
        r.value = C.message, a.value = null;
      } finally {
        n.value = !1;
      }
    }
    return Tt(() => v()), (k, C) => (h(), p("section", {
      class: "author-conflicts",
      "aria-busy": n.value,
      "aria-labelledby": "author-conflicts-heading"
    }, [
      l("a", {
        href: `${e.catalogueUrl}?authors=1`
      }, o(u(_)("library", "All authors")), 9, HA),
      l("h1", VA, o(u(_)("library", "Review imported author changes")), 1),
      n.value ? (h(), p("p", qA, o(u(_)("library", "Loading")), 1)) : A("", !0),
      s.value ? (h(), p("p", GA, o(s.value), 1)) : A("", !0),
      r.value ? (h(), p("p", KA, [
        ie(o(r.value) + " ", 1),
        l("button", {
          disabled: n.value,
          onClick: C[0] || (C[0] = (S) => v(c.value))
        }, o(u(_)("library", "Reload")), 9, WA)
      ])) : A("", !0),
      a.value ? (h(), p("section", {
        key: 3,
        class: "author-conflict-review",
        "aria-label": u(_)("library", "Review change")
      }, [
        l("h2", {
          ref_key: "heading",
          ref: d,
          tabindex: "-1",
          dir: "auto"
        }, o(a.value.title), 513),
        l("div", ZA, [
          l("section", null, [
            l("h3", null, o(u(_)("library", "Current assignments")), 1),
            l("ol", null, [
              (h(!0), p(W, null, fe(a.value.current, (S, $) => (h(), p("li", { key: $ }, [
                l("strong", XA, o(S.name), 1),
                l("span", JA, o(u(_)("library", "Original credit: {credit}", { credit: S.credit })), 1)
              ]))), 128))
            ]),
            a.value.current.length ? A("", !0) : (h(), p("p", QA, o(u(_)("library", "No authors recorded")), 1))
          ]),
          l("section", null, [
            l("h3", null, o(u(_)("library", "Imported credits")), 1),
            l("ol", null, [
              (h(!0), p(W, null, fe(a.value.incoming, (S, $) => (h(), p("li", {
                key: $,
                dir: "auto"
              }, o(S), 1))), 128))
            ]),
            a.value.incoming.length ? A("", !0) : (h(), p("p", eE, o(u(_)("library", "No authors recorded")), 1))
          ])
        ]),
        l("p", null, o(u(_)("library", "Using imported authors replaces this book’s current assignments. Book metadata and files stay unchanged. This decision has no automatic undo.")), 1),
        l("div", tE, [
          l("button", {
            disabled: n.value,
            onClick: C[1] || (C[1] = (S) => m("keep"))
          }, o(u(_)("library", "Keep current assignments")), 9, iE),
          l("button", {
            disabled: n.value,
            onClick: C[2] || (C[2] = (S) => m("import"))
          }, o(u(_)("library", "Use imported authors")), 9, aE),
          l("button", {
            disabled: n.value,
            onClick: C[3] || (C[3] = (S) => a.value = null)
          }, o(u(_)("library", "Cancel")), 9, nE)
        ])
      ], 8, YA)) : i.value ? (h(), p(W, { key: 4 }, [
        i.value.books.length ? A("", !0) : (h(), p("p", rE, o(u(_)("library", "No author changes need review.")), 1)),
        l("ul", lE, [
          (h(!0), p(W, null, fe(i.value.books, (S) => (h(), p("li", {
            key: S.id
          }, [
            l("a", {
              href: u(Lt)("/apps/library/items/{id}", { id: S.id }),
              dir: "auto"
            }, o(S.title), 9, sE),
            l("button", {
              disabled: n.value,
              onClick: ($) => g(S)
            }, o(u(_)("library", "Review change")), 9, oE)
          ]))), 128))
        ]),
        l("nav", {
          "aria-label": u(_)("library", "Author pages")
        }, [
          l("button", {
            disabled: n.value || c.value === 1,
            onClick: C[4] || (C[4] = (S) => v(c.value - 1))
          }, o(u(_)("library", "Previous")), 9, cE),
          l("span", null, o(u(_)("library", "Page {page}", { page: c.value })), 1),
          l("button", {
            disabled: n.value || !i.value.hasNext,
            onClick: C[5] || (C[5] = (S) => v(c.value + 1))
          }, o(u(_)("library", "Next")), 9, dE)
        ], 8, uE)
      ], 64)) : A("", !0)
    ], 8, BA));
  }
}, hE = /* @__PURE__ */ pg(fE, [["__scopeId", "data-v-8078a3f5"]]), pE = ["aria-busy"], vE = ["href"], bE = { class: "author-profile-header" }, gE = {
  key: 0,
  class: "author-portrait"
}, mE = ["src", "alt"], yE = {
  key: 1,
  "aria-hidden": "true"
}, _E = { id: "authors-heading" }, wE = {
  key: 1,
  role: "alert"
}, kE = ["disabled"], SE = {
  key: 2,
  role: "status"
}, CE = {
  key: 3,
  role: "status"
}, TE = { for: "author-search" }, AE = ["disabled"], EE = {
  key: 0,
  role: "status"
}, $E = ["href"], xE = ["disabled"], OE = {
  key: 1,
  class: "author-directory"
}, NE = ["href"], RE = { dir: "auto" }, IE = { key: 2 }, LE = {
  key: 0,
  class: "author-biography"
}, PE = { dir: "auto" }, DE = ["aria-expanded"], FE = { key: 1 }, ME = ["href"], UE = {
  key: 2,
  role: "status"
}, zE = ["disabled"], jE = ["disabled"], BE = { for: "author-display" }, HE = ["disabled"], VE = { for: "author-sort" }, qE = ["disabled"], GE = { for: "author-given" }, KE = ["disabled"], WE = { for: "author-family" }, YE = ["disabled"], ZE = { for: "author-bio" }, XE = ["disabled"], JE = { for: "author-photo" }, QE = ["disabled"], e$ = { key: 0 }, t$ = ["disabled"], i$ = ["disabled"], a$ = ["disabled"], n$ = {
  key: 5,
  class: "author-actions"
}, r$ = ["disabled"], l$ = ["aria-label"], s$ = { role: "status" }, o$ = { for: "target-search" }, u$ = ["disabled"], c$ = ["disabled"], d$ = ["disabled"], f$ = { for: "target-author" }, h$ = ["disabled"], p$ = { value: "" }, v$ = ["value"], b$ = ["disabled"], g$ = ["disabled"], m$ = ["aria-label"], y$ = ["disabled"], _$ = ["aria-label"], w$ = { for: "author-book-search" }, k$ = ["disabled"], S$ = ["disabled"], C$ = { for: "author-book-sort" }, T$ = ["disabled"], A$ = { value: "title" }, E$ = { value: "newest" }, $$ = { value: "series" }, x$ = { class: "author-view-controls" }, O$ = ["aria-pressed"], N$ = ["aria-pressed"], R$ = { key: 0 }, I$ = { key: 1 }, L$ = { key: 0 }, P$ = ["value", "aria-label", "disabled"], D$ = ["href", "aria-label"], F$ = { class: "author-book-description" }, M$ = ["href"], U$ = {
  key: 0,
  dir: "auto"
}, z$ = { key: 1 }, j$ = { key: 2 }, B$ = {
  key: 3,
  dir: "auto"
}, H$ = {
  key: 6,
  class: "author-history"
}, V$ = ["data-operation-id"], q$ = { key: 0 }, G$ = ["disabled", "onClick"], K$ = ["aria-label"], W$ = ["disabled"], Y$ = ["disabled"], Z$ = {
  __name: "Authors",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ z(null), a = /* @__PURE__ */ z(!1), n = /* @__PURE__ */ z(""), r = /* @__PURE__ */ z(""), s = /* @__PURE__ */ z(!1), c = /* @__PURE__ */ z([]), d = /* @__PURE__ */ z(""), y = /* @__PURE__ */ z([]), v = /* @__PURE__ */ z(""), g = /* @__PURE__ */ z(null), m = /* @__PURE__ */ z(!1), k = /* @__PURE__ */ z([]), C = /* @__PURE__ */ z(""), S = /* @__PURE__ */ z(!1), $ = /* @__PURE__ */ z(1), L = new URLSearchParams(location.search).get("authorConflicts") === "1", I = /* @__PURE__ */ z(Number(new URLSearchParams(location.search).get("authorId")) || null), P = /* @__PURE__ */ z(""), N = /* @__PURE__ */ z("title"), pe = /* @__PURE__ */ z("grid"), Q = /* @__PURE__ */ z(!1), x = /* @__PURE__ */ z(!1), B = /* @__PURE__ */ z(null), K = /* @__PURE__ */ z(!1), Z = /* @__PURE__ */ Rt({ display_name: "", sort_name: "", given_name: "", family_name: "", biography: "" }), se = j(() => (i.value?.author?.display_name || "").trim().split(/\s+/u).slice(0, 2).map((le) => Array.from(le)[0] || "").join("").toLocaleUpperCase()), H = j(() => Lt("/apps/library/api/authors/{id}/photo", { id: I.value }) + "?v=" + encodeURIComponent(i.value?.author?.photo_key || "")), Y = j(() => {
      if (N.value !== "series") return [{ name: null, books: i.value?.books || [] }];
      const le = /* @__PURE__ */ new Map();
      for (const te of i.value?.books || []) {
        const q = te.series_name || "";
        le.has(q) || le.set(q, []), le.get(q).push(te);
      }
      return Array.from(le, ([te, q]) => ({ name: te, books: q }));
    });
    function R(le) {
      return Lt("/apps/library/items/{id}/cover", { id: le.id }) + "?v=" + encodeURIComponent(`${le.cover_revision || ""}-${le.etag || ""}`);
    }
    function G(le) {
      B.value = le.target.files?.[0] || null, B.value && (K.value = !1);
    }
    async function X(le, te = null) {
      const q = await fetch(Lt("/apps/library/api/authors") + le, {
        credentials: "same-origin",
        cache: "no-store",
        method: te === null ? "GET" : "POST",
        headers: { Accept: "application/json", ...te === null ? {} : { ...te instanceof FormData ? {} : { "Content-Type": "application/json" }, requesttoken: t.requestToken } },
        ...te === null ? {} : { body: te instanceof FormData ? te : JSON.stringify(te) }
      });
      if (!q.ok && (await q.clone().json().catch(() => ({}))).error === "invalid_photo") throw new Error(_("library", "Choose a valid JPEG, PNG or WebP image up to 10 MiB."));
      if (!q.ok) throw new Error(q.status === 413 ? _("library", "This change is too large. Select fewer books to reassign.") : q.status === 503 ? _("library", "Author migration must finish before editing. Refresh to check progress.") : q.status === 409 ? _("library", "The author or affected books changed. Reload and review again. Your draft is preserved.") : _("library", "Could not load or save the author. Check the fields and reload before retrying."));
      return q.json();
    }
    async function ae(le = 1) {
      a.value = !0, n.value = "";
      try {
        i.value = await X(I.value ? `/${I.value}?page=${le}&search=${encodeURIComponent(P.value.trim())}&sort=${N.value}` : `?page=${le}&search=${encodeURIComponent(C.value.trim())}&unused=${S.value ? 1 : 0}`), $.value = le, g.value = null, c.value = [], x.value = !1, k.value = await X("/history");
      } catch (te) {
        n.value = te.message;
      } finally {
        a.value = !1;
      }
    }
    function J() {
      for (const le of Object.keys(Z)) Z[le] = i.value.author[le] || "";
      s.value = !0, r.value = "", B.value = null, K.value = !1;
    }
    async function be() {
      a.value = !0, n.value = "";
      try {
        const le = new FormData();
        for (const [te, q] of Object.entries(Z)) le.set(te, q);
        le.set("revision", String(i.value.author.revision)), le.set("remove_photo", K.value ? "1" : "0"), B.value && le.set("photo", B.value), await X(`/${I.value}`, le), s.value = !1, x.value = !1, await ae(1), r.value = _("library", "Author saved. Original book credits are preserved.");
      } catch (le) {
        n.value = le.message;
      } finally {
        a.value = !1;
      }
    }
    function Te() {
      m.value = !1, g.value = null, c.value = [];
    }
    async function Le() {
      a.value = !0, n.value = "", g.value = null;
      try {
        y.value = (await X(`?search=${encodeURIComponent(d.value.trim())}`)).authors.filter((le) => Number(le.id) !== I.value), v.value = "";
      } catch (le) {
        n.value = le.message;
      } finally {
        a.value = !1;
      }
    }
    async function Oe() {
      a.value = !0, n.value = "", g.value = null;
      try {
        const le = await X("", { name: d.value.trim() });
        y.value = [le], v.value = String(le.id);
      } catch (le) {
        n.value = le.message;
      } finally {
        a.value = !1;
      }
    }
    async function Me() {
      a.value = !0, n.value = "", g.value = null;
      try {
        g.value = await X(`/${I.value}/preview`, { target: Number(v.value), items: c.value });
      } catch (le) {
        n.value = le.message;
      } finally {
        a.value = !1;
      }
    }
    async function Ze() {
      a.value = !0, n.value = "";
      try {
        await X(`/${I.value}/assign`, { target: Number(v.value), items: c.value, token: g.value.token }), r.value = _("library", "Author assignments saved. Original credits are preserved. Undo is available in Recent changes."), m.value = !1, g.value = null, await ae($.value);
      } catch (le) {
        n.value = le.message;
      } finally {
        a.value = !1;
      }
    }
    async function ct(le) {
      a.value = !0, n.value = "";
      try {
        await X(`/history/${le.id}/undo`, {}), r.value = _("library", "Author change undone."), await ae($.value);
      } catch (te) {
        n.value = te.message;
      } finally {
        a.value = !1;
      }
    }
    return Tt(() => {
      L || ae();
    }), (le, te) => L ? (h(), De(hE, {
      key: 0,
      "request-token": e.requestToken,
      "catalogue-url": e.catalogueUrl
    }, null, 8, ["request-token", "catalogue-url"])) : (h(), p("section", {
      key: 1,
      class: "library-authors",
      "aria-busy": a.value,
      "aria-labelledby": "authors-heading"
    }, [
      I.value ? (h(), p("a", {
        key: 0,
        href: `${e.catalogueUrl}?authors=1`
      }, o(u(_)("library", "All authors")), 9, vE)) : A("", !0),
      l("header", bE, [
        I.value && i.value?.author ? (h(), p("div", gE, [
          i.value.author.photo_key && !x.value ? (h(), p("img", {
            key: i.value.author.photo_key,
            src: H.value,
            alt: u(_)("library", "Portrait of {author}", { author: i.value.author.display_name }),
            onError: te[0] || (te[0] = (q) => x.value = !0)
          }, null, 40, mE)) : (h(), p("span", yE, o(se.value), 1))
        ])) : A("", !0),
        l("h1", _E, o(i.value?.author?.display_name || u(_)("library", "Authors")), 1)
      ]),
      n.value ? (h(), p("p", wE, [
        ie(o(n.value) + " ", 1),
        l("button", {
          disabled: a.value,
          onClick: te[1] || (te[1] = (q) => ae($.value))
        }, o(u(_)("library", "Reload")), 9, kE)
      ])) : A("", !0),
      r.value ? (h(), p("p", SE, o(r.value), 1)) : A("", !0),
      a.value ? (h(), p("p", CE, o(u(_)("library", "Loading")), 1)) : A("", !0),
      I.value ? i.value?.author ? (h(), p(W, { key: 5 }, [
        l("p", null, o(u(It)("library", "%n book", "%n books", i.value.bookCount)), 1),
        i.value.author.biography && !s.value ? (h(), p("section", LE, [
          l("h2", null, o(u(_)("library", "Biography")), 1),
          l("p", PE, o(Q.value || i.value.author.biography.length <= 320 ? i.value.author.biography : i.value.author.biography.slice(0, 280) + "…"), 1),
          i.value.author.biography.length > 320 ? (h(), p("button", {
            key: 0,
            "aria-expanded": Q.value,
            onClick: te[6] || (te[6] = (q) => Q.value = !Q.value)
          }, o(Q.value ? u(_)("library", "Show less") : u(_)("library", "Show more")), 9, DE)) : A("", !0)
        ])) : A("", !0),
        i.value.author.merged_into ? (h(), p("p", FE, [
          l("a", {
            href: `${e.catalogueUrl}?authors=1&authorId=${i.value.author.merged_into}`
          }, o(u(_)("library", "Open merged author")), 9, ME)
        ])) : A("", !0),
        !i.value.canEdit && !i.value.author.merged_into ? (h(), p("p", UE, [
          ie(o(u(_)("library", "Author migration must finish before editing. Refresh to check progress.")) + " ", 1),
          l("button", {
            disabled: a.value,
            onClick: te[7] || (te[7] = (q) => ae($.value))
          }, o(u(_)("library", "Refresh")), 9, zE)
        ])) : A("", !0),
        !s.value && !m.value ? (h(), p("button", {
          key: 3,
          disabled: a.value || !i.value.canEdit,
          onClick: J
        }, o(u(_)("library", "Edit author")), 9, jE)) : A("", !0),
        s.value ? (h(), p("form", {
          key: 4,
          class: "author-editor",
          onSubmit: Ce(be, ["prevent"])
        }, [
          l("p", null, o(u(_)("library", "This edits the shared author record. Book credits and files stay unchanged.")), 1),
          l("label", BE, o(u(_)("library", "Preferred name")), 1),
          ye(l("input", {
            id: "author-display",
            "onUpdate:modelValue": te[8] || (te[8] = (q) => Z.display_name = q),
            maxlength: "255",
            required: "",
            disabled: a.value
          }, null, 8, HE), [
            [Ue, Z.display_name]
          ]),
          l("label", VE, [
            ie(o(u(_)("library", "Sort name")) + " ", 1),
            he(Ge, {
              text: u(_)("library", "For example: Doe, John. Controls author directory ordering.")
            }, null, 8, ["text"])
          ]),
          ye(l("input", {
            id: "author-sort",
            "onUpdate:modelValue": te[9] || (te[9] = (q) => Z.sort_name = q),
            maxlength: "255",
            required: "",
            disabled: a.value
          }, null, 8, qE), [
            [Ue, Z.sort_name]
          ]),
          l("label", GE, [
            ie(o(u(_)("library", "Given name")) + " ", 1),
            he(Ge, {
              text: u(_)("library", "Optional. Leave empty for organisations or names you cannot safely split.")
            }, null, 8, ["text"])
          ]),
          ye(l("input", {
            id: "author-given",
            "onUpdate:modelValue": te[10] || (te[10] = (q) => Z.given_name = q),
            maxlength: "255",
            disabled: a.value
          }, null, 8, KE), [
            [Ue, Z.given_name]
          ]),
          l("label", WE, o(u(_)("library", "Family name")), 1),
          ye(l("input", {
            id: "author-family",
            "onUpdate:modelValue": te[11] || (te[11] = (q) => Z.family_name = q),
            maxlength: "255",
            disabled: a.value
          }, null, 8, YE), [
            [Ue, Z.family_name]
          ]),
          l("label", ZE, [
            ie(o(u(_)("library", "Biography")) + " ", 1),
            he(Ge, {
              text: u(_)("library", "Optional plain text, up to 10,000 characters. This profile is private to your account.")
            }, null, 8, ["text"])
          ]),
          ye(l("textarea", {
            id: "author-bio",
            "onUpdate:modelValue": te[12] || (te[12] = (q) => Z.biography = q),
            maxlength: "10000",
            rows: "5",
            disabled: a.value
          }, null, 8, XE), [
            [Ue, Z.biography]
          ]),
          l("label", JE, [
            ie(o(u(_)("library", "Author photo")) + " ", 1),
            he(Ge, {
              text: u(_)("library", "JPEG, PNG or WebP, up to 10 MiB. Saved as a small square portrait; the original upload is discarded.")
            }, null, 8, ["text"])
          ]),
          l("input", {
            id: "author-photo",
            type: "file",
            accept: "image/jpeg,image/png,image/webp",
            disabled: a.value,
            onChange: G
          }, null, 40, QE),
          i.value.author.photo_key ? (h(), p("label", e$, [
            ye(l("input", {
              "onUpdate:modelValue": te[13] || (te[13] = (q) => K.value = q),
              type: "checkbox",
              disabled: a.value || !!B.value
            }, null, 8, t$), [
              [sa, K.value]
            ]),
            ie(" " + o(u(_)("library", "Remove photo")), 1)
          ])) : A("", !0),
          l("div", null, [
            l("button", {
              class: "primary",
              disabled: a.value,
              type: "submit"
            }, o(u(_)("library", "Save author")), 9, i$),
            te[29] || (te[29] = ie()),
            l("button", {
              disabled: a.value,
              type: "button",
              onClick: te[14] || (te[14] = (q) => s.value = !1)
            }, o(u(_)("library", "Cancel")), 9, a$)
          ])
        ], 32)) : A("", !0),
        !s.value && !m.value ? (h(), p("details", n$, [
          l("summary", null, o(u(_)("library", "More actions")), 1),
          l("button", {
            disabled: a.value || !i.value.canEdit,
            onClick: te[15] || (te[15] = (q) => m.value = !0)
          }, o(u(_)("library", "Merge or reassign")), 9, r$)
        ])) : A("", !0),
        m.value ? (h(), p("section", {
          key: 6,
          class: "author-assignment",
          "aria-label": u(_)("library", "Merge or reassign")
        }, [
          l("label", null, [
            ie(o(u(_)("library", "Books to change")) + " ", 1),
            he(Ge, {
              text: u(_)("library", "Leave all books unselected to merge this author. Select individual books below to reassign only those credits, keeping both authors.")
            }, null, 8, ["text"])
          ]),
          l("p", s$, o(c.value.length ? u(It)("library", "%n selected book", "%n selected books", c.value.length) : u(_)("library", "Merge all books into the chosen author")), 1),
          l("form", {
            class: "author-search",
            onSubmit: Ce(Le, ["prevent"])
          }, [
            l("label", o$, o(u(_)("library", "Find destination author")), 1),
            ye(l("input", {
              id: "target-search",
              "onUpdate:modelValue": te[16] || (te[16] = (q) => d.value = q),
              type: "search",
              maxlength: "255",
              disabled: a.value
            }, null, 8, u$), [
              [Ue, d.value]
            ]),
            l("button", { disabled: a.value }, o(u(_)("library", "Search")), 9, c$)
          ], 32),
          l("div", null, [
            l("button", {
              disabled: a.value || !d.value.trim(),
              onClick: Oe
            }, o(u(_)("library", "Create separate author")), 9, d$),
            te[30] || (te[30] = ie()),
            he(Ge, {
              text: u(_)("library", "Creates a new person using the entered name, even if someone with that name already exists.")
            }, null, 8, ["text"])
          ]),
          l("label", f$, o(u(_)("library", "Destination author")), 1),
          ye(l("select", {
            id: "target-author",
            "onUpdate:modelValue": te[17] || (te[17] = (q) => v.value = q),
            disabled: a.value,
            onChange: te[18] || (te[18] = (q) => g.value = null)
          }, [
            l("option", p$, o(u(_)("library", "Choose an author")), 1),
            (h(!0), p(W, null, fe(y.value, (q) => (h(), p("option", {
              key: q.id,
              value: q.id
            }, o(q.display_name) + " — " + o(q.sort_name) + " (#" + o(q.id) + ")", 9, v$))), 128))
          ], 40, h$), [
            [nt, v.value]
          ]),
          l("div", null, [
            l("button", {
              disabled: a.value || !v.value,
              onClick: Me
            }, o(u(_)("library", "Review change")), 9, b$),
            te[31] || (te[31] = ie()),
            l("button", {
              disabled: a.value,
              onClick: Te
            }, o(u(_)("library", "Cancel")), 9, g$)
          ]),
          g.value ? (h(), p("section", {
            key: 0,
            class: "author-review",
            "aria-label": u(_)("library", "Review change")
          }, [
            l("h2", null, o(g.value.source) + " → " + o(g.value.target), 1),
            l("p", null, o(g.value.merge ? u(_)("library", "Merge these authors. Future imports of the old name will use the destination author.") : u(_)("library", "Reassign these books. Both author records remain available.")), 1),
            l("p", null, o(u(It)("library", "%n book", "%n books", g.value.books.length)), 1),
            l("ul", null, [
              (h(!0), p(W, null, fe(g.value.books, (q) => (h(), p("li", {
                key: q.id
              }, o(q.title) + " — " + o(u(_)("library", "Original credit: {credit}", { credit: q.credit || "—" })), 1))), 128))
            ]),
            l("button", {
              class: "primary",
              disabled: a.value,
              onClick: Ze
            }, o(u(_)("library", "Confirm author change")), 9, y$)
          ], 8, m$)) : A("", !0)
        ], 8, l$)) : A("", !0),
        l("section", {
          class: "author-catalogue",
          "aria-label": u(_)("library", "Books in your library")
        }, [
          l("h2", null, o(u(_)("library", "Books in your library")), 1),
          l("form", {
            class: "author-book-controls",
            onSubmit: te[24] || (te[24] = Ce((q) => ae(1), ["prevent"]))
          }, [
            l("label", w$, o(u(_)("library", "Search titles")), 1),
            ye(l("input", {
              id: "author-book-search",
              "onUpdate:modelValue": te[19] || (te[19] = (q) => P.value = q),
              type: "search",
              maxlength: "255",
              disabled: a.value || s.value
            }, null, 8, k$), [
              [Ue, P.value]
            ]),
            l("button", {
              disabled: a.value || s.value
            }, o(u(_)("library", "Search")), 9, S$),
            l("label", C$, o(u(_)("library", "Sort")), 1),
            ye(l("select", {
              id: "author-book-sort",
              "onUpdate:modelValue": te[20] || (te[20] = (q) => N.value = q),
              disabled: a.value || s.value,
              onChange: te[21] || (te[21] = (q) => ae(1))
            }, [
              l("option", A$, o(u(_)("library", "Title")), 1),
              l("option", E$, o(u(_)("library", "Publication date, newest first")), 1),
              l("option", $$, o(u(_)("library", "Series, then title")), 1)
            ], 40, T$), [
              [nt, N.value]
            ]),
            l("div", x$, [
              l("button", {
                type: "button",
                "aria-pressed": pe.value === "grid",
                onClick: te[22] || (te[22] = (q) => pe.value = "grid")
              }, o(u(_)("library", "Covers")), 9, O$),
              te[32] || (te[32] = ie()),
              l("button", {
                type: "button",
                "aria-pressed": pe.value === "list",
                onClick: te[23] || (te[23] = (q) => pe.value = "list")
              }, o(u(_)("library", "List")), 9, N$)
            ])
          ], 32),
          P.value ? (h(), p("p", R$, o(u(It)("library", "%n book", "%n books", i.value.matchingCount)), 1)) : A("", !0),
          i.value.books.length ? A("", !0) : (h(), p("p", I$, o(u(_)("library", "No books match this view.")), 1)),
          (h(!0), p(W, null, fe(Y.value, (q) => (h(), p("section", {
            key: q.name ?? "all",
            class: "author-book-group"
          }, [
            q.name !== null ? (h(), p("h3", L$, o(q.name || u(_)("library", "No series recorded")), 1)) : A("", !0),
            l("ul", {
              class: Ee(["author-books", { "author-books-grid": pe.value === "grid" }])
            }, [
              (h(!0), p(W, null, fe(q.books, (Se) => (h(), p("li", {
                key: Se.id
              }, [
                m.value ? ye((h(), p("input", {
                  key: 0,
                  "onUpdate:modelValue": te[25] || (te[25] = (it) => c.value = it),
                  type: "checkbox",
                  value: Number(Se.id),
                  "aria-label": u(_)("library", "Select {title}", { title: Se.title }),
                  disabled: a.value,
                  onChange: te[26] || (te[26] = (it) => g.value = null)
                }, null, 40, P$)), [
                  [sa, c.value]
                ]) : A("", !0),
                l("a", {
                  class: "author-book-cover",
                  href: u(Lt)("/apps/library/items/{id}", { id: Se.id }),
                  "aria-label": Se.title
                }, [
                  he(hg, {
                    src: R(Se)
                  }, null, 8, ["src"])
                ], 8, D$),
                l("div", F$, [
                  l("a", {
                    class: "author-book-title",
                    href: u(Lt)("/apps/library/items/{id}", { id: Se.id }),
                    dir: "auto"
                  }, o(Se.title), 9, M$),
                  Se.series_name ? (h(), p("span", U$, [
                    ie(o(Se.series_name), 1),
                    Se.series_number ? (h(), p(W, { key: 0 }, [
                      ie(" · " + o(Se.series_number), 1)
                    ], 64)) : A("", !0)
                  ])) : A("", !0),
                  Se.publication_date ? (h(), p("span", z$, o(Se.publication_date), 1)) : A("", !0),
                  l("span", null, o(Se.extension?.toUpperCase()), 1),
                  Se.scan_status === "missing" ? (h(), p("span", j$, o(u(_)("library", "File missing")), 1)) : A("", !0),
                  m.value ? (h(), p("span", B$, o(u(_)("library", "Original credit: {credit}", { credit: Se.creators || "—" })), 1)) : A("", !0)
                ])
              ]))), 128))
            ], 2)
          ]))), 128))
        ], 8, _$)
      ], 64)) : A("", !0) : (h(), p(W, { key: 4 }, [
        l("form", {
          class: "author-search",
          onSubmit: te[4] || (te[4] = Ce((q) => ae(1), ["prevent"]))
        }, [
          l("label", TE, [
            ie(o(u(_)("library", "Search authors")) + " ", 1),
            he(Ge, {
              text: u(_)("library", "Matches the beginning of the preferred name or sort name.")
            }, null, 8, ["text"])
          ]),
          ye(l("input", {
            id: "author-search",
            "onUpdate:modelValue": te[2] || (te[2] = (q) => C.value = q),
            maxlength: "255",
            type: "search"
          }, null, 512), [
            [Ue, C.value]
          ]),
          l("label", null, [
            ye(l("input", {
              "onUpdate:modelValue": te[3] || (te[3] = (q) => S.value = q),
              type: "checkbox"
            }, null, 512), [
              [sa, S.value]
            ]),
            ie(" " + o(u(_)("library", "Unused authors")), 1)
          ]),
          l("button", {
            disabled: a.value,
            type: "submit"
          }, o(u(_)("library", "Search")), 9, AE)
        ], 32),
        i.value?.migration && (i.value.migration.pending || i.value.migration.failed || i.value.migration.conflict) ? (h(), p("p", EE, [
          ie(o(u(_)("library", "Author migration: {pending} pending, {failed} failed, {conflict} need review.", i.value.migration)) + " ", 1),
          i.value.migration.conflict ? (h(), p("a", {
            key: 0,
            href: `${e.catalogueUrl}?authors=1&authorConflicts=1`
          }, o(u(_)("library", "Review imported author changes")), 9, $E)) : A("", !0),
          l("button", {
            disabled: a.value,
            onClick: te[5] || (te[5] = (q) => ae($.value))
          }, o(u(_)("library", "Refresh")), 9, xE)
        ])) : A("", !0),
        i.value ? (h(), p("ul", OE, [
          (h(!0), p(W, null, fe(i.value.authors, (q) => (h(), p("li", {
            key: q.id
          }, [
            l("a", {
              href: `${e.catalogueUrl}?authors=1&authorId=${q.id}`,
              dir: "auto"
            }, o(q.display_name), 9, NE),
            l("span", RE, o(q.sort_name), 1),
            l("span", null, o(u(It)("library", "%n book", "%n books", Number(q.book_count))), 1)
          ]))), 128))
        ])) : A("", !0),
        i.value && !i.value.authors.length ? (h(), p("p", IE, o(u(_)("library", "No authors found.")), 1)) : A("", !0)
      ], 64)),
      k.value.length ? (h(), p("details", H$, [
        l("summary", null, o(u(_)("library", "Recent changes")), 1),
        l("ul", null, [
          (h(!0), p(W, null, fe(k.value, (q) => (h(), p("li", {
            key: q.id,
            "data-operation-id": q.id
          }, [
            l("span", null, o(q.source) + " → " + o(q.target) + " · " + o(u(It)("library", "%n book", "%n books", Number(q.books))), 1),
            Number(q.undone) ? (h(), p("span", q$, o(u(_)("library", "Undone")), 1)) : (h(), p("button", {
              key: 1,
              disabled: a.value,
              onClick: (Se) => ct(q)
            }, o(u(_)("library", "Undo")), 9, G$))
          ], 8, V$))), 128))
        ])
      ])) : A("", !0),
      i.value ? (h(), p("nav", {
        key: 7,
        class: "author-pagination",
        "aria-label": u(_)("library", "Author pages")
      }, [
        l("button", {
          disabled: a.value || s.value || $.value === 1,
          onClick: te[27] || (te[27] = (q) => ae($.value - 1))
        }, o(u(_)("library", "Previous")), 9, W$),
        l("span", null, o(u(_)("library", "Page {page}", { page: $.value })), 1),
        l("button", {
          disabled: a.value || s.value || !i.value.hasNext,
          onClick: te[28] || (te[28] = (q) => ae($.value + 1))
        }, o(u(_)("library", "Next")), 9, Y$)
      ], 8, K$)) : A("", !0)
    ], 8, pE));
  }
}, X$ = /* @__PURE__ */ pg(Z$, [["__scopeId", "data-v-417f027c"]]);
function vg(e, t, i) {
  const a = /* @__PURE__ */ z({}), n = /* @__PURE__ */ z("idle");
  let r, s, c = 0;
  return qe([e, t], () => {
    clearTimeout(r), s?.abort();
    const d = ++c;
    a.value = {}, n.value = t.value ? "pending" : "disabled", !(!t.value || !e.value.length) && (r = setTimeout(async () => {
      s = new AbortController();
      try {
        const y = await fetch(Lt("/apps/library/api/duplicate-suggestions/lookup"), { method: "POST", credentials: "same-origin", cache: "no-store", signal: s.signal, headers: { "Content-Type": "application/json", requesttoken: i.value }, body: JSON.stringify({ itemIds: e.value.slice(0, 100) }) });
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
const J$ = ["aria-label", "aria-busy"], Q$ = {
  key: 0,
  role: "status"
}, ex = {
  key: 1,
  role: "alert"
}, tx = {
  key: 2,
  role: "status"
}, ix = { key: 3 }, ax = { key: 4 }, nx = {
  key: 5,
  role: "status"
}, rx = {
  key: 6,
  class: "library-suggestion-list"
}, lx = ["href"], sx = ["disabled", "onClick"], ox = {
  key: 0,
  role: "status"
}, ux = { class: "library-suggestion-list" }, cx = { class: "library-suggestion-comparison" }, dx = ["src"], fx = { class: "library-duplicate-actions" }, hx = ["href"], px = ["href"], vx = ["disabled", "onClick"], bx = { class: "library-duplicate-actions" }, gx = ["disabled"], mx = ["disabled"], yx = ["disabled"], bg = {
  __name: "DuplicateSuggestions",
  props: { itemId: Number, requestToken: String, enabled: { type: Boolean, default: !0 }, compareId: { type: Number, default: 0 }, full: { type: Boolean, default: !1 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ z(0), a = j(() => (i.value, t.itemId ? [t.itemId] : [])), n = j(() => t.enabled), r = j(() => t.requestToken), { results: s, status: c } = vg(a, n, r), d = j(() => s.value[t.itemId]), y = /* @__PURE__ */ z(null), v = /* @__PURE__ */ z(!1), g = /* @__PURE__ */ z(""), m = /* @__PURE__ */ z(!1), k = { formats: _("library", "Alternative formats"), languages: _("library", "Different languages"), years: _("library", "Different publication years"), publishers: _("library", "Different publishers"), identifiers: _("library", "Different ISBNs") };
    let C = 0;
    async function S(I, P) {
      const N = await fetch(Lt("/apps/library/api/duplicate-suggestions" + I), { credentials: "same-origin", cache: "no-store", method: P ? "POST" : "GET", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...P ? { body: JSON.stringify(P) } : {} });
      if (!N.ok) throw new Error(N.status === 409 ? _("library", "These books changed after the scan. Run a new scan before reviewing this comparison.") : _("library", "Could not complete the duplicate review. Please try again."));
      return N.json();
    }
    async function $(I) {
      const P = ++C;
      v.value = !0, g.value = "", m.value = !1;
      try {
        const N = await S(`/compare/${t.itemId}/${I}`);
        P === C && (y.value = N);
      } catch (N) {
        P === C && (g.value = N.message);
      } finally {
        P === C && (v.value = !1);
      }
    }
    async function L(I, P = 0) {
      v.value = !0, g.value = "";
      try {
        await S(`/compare/${y.value.books[0].id}/${y.value.books[1].id}`, { signature: y.value.signature, decision: I, preferredId: P }), m.value = !0, i.value++, y.value = null;
      } catch (N) {
        g.value = N.message;
      } finally {
        v.value = !1;
      }
    }
    return qe(() => [t.itemId, t.compareId], () => {
      C++, y.value = null, t.full && t.compareId && $(t.compareId);
    }, { immediate: !0 }), (I, P) => (h(), p("section", {
      class: "library-duplicate-suggestions",
      "aria-label": u(_)("library", "Possible duplicates"),
      "aria-busy": v.value ? "true" : "false"
    }, [
      l("h3", null, o(u(_)("library", "Possible duplicates")), 1),
      u(c) === "pending" ? (h(), p("p", Q$, o(u(_)("library", "Checking possible duplicates")), 1)) : A("", !0),
      u(c) === "error" || g.value ? (h(), p("p", ex, o(g.value || u(_)("library", "Could not complete the duplicate review. Please try again.")), 1)) : A("", !0),
      u(c) === "building" || d.value?.status === "partial" ? (h(), p("p", tx, o(u(_)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : A("", !0),
      d.value?.status === "unavailable" ? (h(), p("p", ix, o(u(_)("library", "These books are no longer available. Start a new scan.")), 1)) : A("", !0),
      d.value?.status === "checked" && !d.value.count ? (h(), p("p", ax, o(u(_)("library", "No unreviewed suggestions found.")), 1)) : A("", !0),
      m.value ? (h(), p("p", nx, o(u(_)("library", "Review saved. Your files and catalogue metadata were not changed.")), 1)) : A("", !0),
      d.value?.count && !y.value ? (h(), p("ul", rx, [
        (h(!0), p(W, null, fe(d.value.matches, (N) => (h(), p("li", {
          key: N.id
        }, [
          e.full ? (h(), p("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: (pe) => $(N.id)
          }, [
            l("bdi", null, o(N.title), 1),
            ie(" · " + o(N.format.toUpperCase()), 1)
          ], 8, sx)) : (h(), p("a", {
            key: 0,
            href: N.url
          }, [
            l("bdi", null, o(N.title), 1),
            ie(" · " + o(N.format.toUpperCase()), 1)
          ], 8, lx))
        ]))), 128))
      ])) : A("", !0),
      y.value ? (h(), p(W, { key: 7 }, [
        y.value.reasons.length ? A("", !0) : (h(), p("p", ox, o(u(_)("library", "These books no longer match the current metadata rules.")), 1)),
        l("ul", ux, [
          (h(!0), p(W, null, fe(y.value.flags, (N) => (h(), p("li", { key: N }, o(k[N]), 1))), 128))
        ]),
        l("div", cx, [
          (h(!0), p(W, null, fe(y.value.books, (N) => (h(), p("article", {
            key: N.id
          }, [
            l("img", {
              src: N.coverUrl,
              alt: "",
              width: "64",
              height: "88"
            }, null, 8, dx),
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
            l("div", fx, [
              l("a", {
                class: "button secondary",
                href: N.detailsUrl
              }, o(u(_)("library", "Details")), 9, hx),
              l("a", {
                class: "button secondary",
                href: N.openUrl
              }, o(u(_)("library", "Open")), 9, px),
              l("button", {
                class: "button primary",
                disabled: v.value,
                onClick: (pe) => L("preferred", N.id)
              }, o(u(_)("library", "Prefer this copy")), 9, vx)
            ])
          ]))), 128))
        ]),
        l("div", bx, [
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[0] || (P[0] = (N) => L("keep"))
          }, o(u(_)("library", "Keep both")), 9, gx),
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[1] || (P[1] = (N) => L("dismissed"))
          }, o(u(_)("library", "Dismiss match")), 9, mx),
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[2] || (P[2] = (N) => L("unreviewed"))
          }, o(u(_)("library", "Reset review decision")), 9, yx)
        ])
      ], 64)) : A("", !0)
    ], 8, J$));
  }
}, _x = ["aria-busy"], wx = ["checked", "disabled"], kx = {
  key: 0,
  role: "alert"
}, Sx = {
  key: 1,
  role: "status"
}, Cx = {
  key: 2,
  role: "alert"
}, Tx = {
  key: 3,
  role: "status"
}, Ax = {
  __name: "DuplicateSuggestionSettings",
  props: { requestToken: String },
  setup(e) {
    const t = e, i = /* @__PURE__ */ z({ enabled: !1, status: "disabled" }), a = /* @__PURE__ */ z(!1), n = /* @__PURE__ */ z("");
    let r = !0, s;
    async function c() {
      try {
        const y = await fetch(Lt("/apps/library/api/duplicate-suggestions"), { cache: "no-store", credentials: "same-origin" });
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
        const v = await fetch(Lt("/apps/library/api/duplicate-suggestions"), { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, body: JSON.stringify({ enabled: y.target.checked }) });
        if (!v.ok) throw new Error();
        i.value = await v.json(), i.value.status === "building" && (s = setTimeout(c, 2e3));
      } catch {
        n.value = _("library", "Could not complete the duplicate review. Please try again.");
      } finally {
        a.value = !1;
      }
    }
    return Tt(c), Ti(() => {
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
        }, null, 40, wx),
        he(Ge, {
          text: u(_)("library", "Build a private metadata index in the background. Suggestions check the whole library without reading book contents.")
        }, {
          default: ke(() => [
            ie(o(u(_)("library", "Show possible duplicates while browsing")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      n.value ? (h(), p("p", kx, o(n.value), 1)) : A("", !0),
      i.value.status === "building" ? (h(), p("p", Sx, o(u(_)("library", "Indexing metadata")) + " · " + o(i.value.processed) + "/" + o(i.value.total), 1)) : A("", !0),
      i.value.status === "failed" ? (h(), p("p", Cx, o(u(_)("library", "Duplicate scan failed")), 1)) : A("", !0),
      i.value.status === "ready" ? (h(), p("p", Tx, o(u(_)("library", "Automatic duplicate suggestions are ready.")), 1)) : A("", !0)
    ], 8, _x));
  }
}, Ex = ["aria-label", "aria-busy"], $x = ["href"], xx = {
  key: 1,
  role: "alert"
}, Ox = {
  key: 2,
  role: "status"
}, Nx = ["disabled"], Rx = { value: "0" }, Ix = ["value"], Lx = { class: "library-duplicate-checkbox" }, Px = ["disabled"], Dx = ["disabled"], Fx = ["value", "disabled"], Mx = { value: "" }, Ux = ["value"], zx = ["aria-label"], jx = { role: "status" }, Bx = ["value", "max", "aria-label"], Hx = {
  key: 1,
  role: "status"
}, Vx = {
  key: 2,
  role: "alert"
}, qx = {
  key: 3,
  role: "alert"
}, Gx = { class: "library-duplicate-actions" }, Kx = ["disabled"], Wx = ["disabled"], Yx = ["disabled"], Zx = ["disabled"], Xx = { value: "all" }, Jx = ["value"], Qx = {
  key: 0,
  role: "status"
}, e3 = ["data-pair-id"], t3 = {
  key: 0,
  role: "status"
}, i3 = { class: "library-duplicate-decision" }, a3 = ["aria-label"], n3 = ["aria-label"], r3 = {
  key: 1,
  role: "alert"
}, l3 = { class: "library-duplicate-books" }, s3 = { class: "library-duplicate-book-heading" }, o3 = ["src"], u3 = { dir: "auto" }, c3 = { dir: "auto" }, d3 = { key: 0 }, f3 = { dir: "auto" }, h3 = { dir: "ltr" }, p3 = { dir: "auto" }, v3 = { class: "library-duplicate-actions" }, b3 = ["href"], g3 = ["href"], m3 = ["disabled", "onClick"], y3 = { class: "library-duplicate-actions" }, _3 = ["disabled", "onClick"], w3 = ["disabled", "onClick"], k3 = ["disabled", "onClick"], S3 = ["aria-label"], C3 = ["disabled"], T3 = ["disabled"], A3 = {
  __name: "PossibleDuplicates",
  props: { requestToken: String, reviewUrl: String },
  setup(e) {
    const t = Number(new URLSearchParams(window.location.search).get("bookId")) || 0, i = Number(new URLSearchParams(window.location.search).get("compareId")) || 0, a = e, n = /* @__PURE__ */ z([]), r = /* @__PURE__ */ z([]), s = /* @__PURE__ */ z("0"), c = /* @__PURE__ */ z(!1), d = /* @__PURE__ */ z(null), y = /* @__PURE__ */ z(!1), v = /* @__PURE__ */ z(""), g = /* @__PURE__ */ z(""), m = /* @__PURE__ */ z("unreviewed");
    let k, C = !0, S = 0;
    const $ = j(() => d.value?.status === "running"), L = j(() => ({ running: _("library", "Finding possible duplicates"), completed: _("library", "Duplicate scan complete"), cancelled: _("library", "Duplicate scan cancelled"), failed: _("library", "Duplicate scan failed"), limited: _("library", "Duplicate scan reached its limit") })), I = j(() => ({ unreviewed: _("library", "To review"), preferred: _("library", "Preferred copy selected"), keep: _("library", "Keep both"), dismissed: _("library", "Dismissed") })), P = j(() => ({ identical: _("library", "Identical file contents"), isbn: _("library", "Same ISBN"), title_author: _("library", "Same normalized title and authors"), similar_title_author: _("library", "Similar title and matching authors") })), N = j(() => ({ formats: _("library", "Alternative formats"), languages: _("library", "Different languages"), years: _("library", "Different publication years"), publishers: _("library", "Different publishers"), identifiers: _("library", "Different ISBNs") })), pe = (X) => X < 1048576 ? new Intl.NumberFormat(document.documentElement.lang || "en", { style: "unit", unit: X < 1e3 ? "byte" : "kilobyte", maximumFractionDigits: 2 }).format(X < 1e3 ? X : X / 1e3) : new Intl.NumberFormat(document.documentElement.lang || "en", { maximumFractionDigits: 2 }).format(X / 1048576) + " " + _("library", "MiB");
    async function Q(X = "", ae) {
      const J = await fetch(Lt(`/apps/library/api/duplicates${X}`), { credentials: "same-origin", cache: "no-store", method: ae === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: a.requestToken }, ...ae === void 0 ? {} : { body: JSON.stringify(ae) } }), be = await J.json().catch(() => ({}));
      if (!J.ok)
        throw J.status === 409 ? new Error(_("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")) : be.error === "decision_limit" ? new Error(_("library", "This account has 10,000 saved review decisions. Reset an old decision before saving another.")) : be.error === "history_limit" ? new Error(_("library", "Three duplicate scans are already saved. Discard an old scan before starting another.")) : be.error === "scope_limit" ? new Error(_("library", "This scope is too large. Choose a smaller library root.")) : J.status === 404 ? new Error(_("library", "This scan or these books are no longer available.")) : new Error(_("library", "Could not complete the duplicate review. Please try again."));
      return be;
    }
    async function x() {
      const X = await Q();
      C && (n.value = X.roots, r.value = X.scans);
    }
    async function B(X) {
      y.value = !0, v.value = "";
      try {
        await X();
      } catch (ae) {
        C && (v.value = ae.message);
      } finally {
        C && (y.value = !1);
      }
    }
    function K() {
      if (clearTimeout(k), !C || !$.value) return;
      const X = S, ae = d.value.id;
      k = setTimeout(async () => {
        try {
          if (await Q(`/${ae}/advance`, {}), !C || X !== S) return;
          const J = await Q(`/${ae}?page=${d.value.page}&filter=${m.value}`);
          if (!C || X !== S) return;
          d.value = J, $.value || await x(), K();
        } catch (J) {
          C && X === S && (v.value = J.message);
        }
      }, 1500);
    }
    async function Z() {
      await B(async () => {
        d.value = await Q("", { rootId: Number(s.value), contents: c.value }), S++, m.value = "unreviewed", g.value = "", await x(), K();
      });
    }
    async function se(X, ae = 1) {
      const J = ++S;
      clearTimeout(k), await B(async () => {
        const be = await Q(`/${X}?page=${ae}&filter=${m.value}`);
        C && J === S && (d.value = be, s.value = String(be.rootId), c.value = !!be.contents, K());
      });
    }
    function H(X) {
      m.value = "unreviewed", g.value = "", X.target.value && se(X.target.value);
    }
    async function Y() {
      S++, clearTimeout(k), await B(async () => {
        await Q(`/${d.value.id}/cancel`, {}), d.value = await Q(`/${d.value.id}?filter=${m.value}`), await x();
      });
    }
    async function R() {
      S++, clearTimeout(k), await B(async () => {
        await Q(`/${d.value.id}/discard`, {}), d.value = null, await x();
      });
    }
    async function G(X, ae, J = 0) {
      S++, clearTimeout(k), await B(async () => {
        await Q(`/${d.value.id}/pairs/${X.id}`, { signature: X.signature, decision: ae, preferredId: J }), g.value = _("library", "Review saved. Your files and catalogue metadata were not changed."), d.value = await Q(`/${d.value.id}?page=${d.value.page}&filter=${m.value}`), K();
      });
    }
    return Tt(() => B(x)), Ti(() => {
      C = !1, S++, clearTimeout(k);
    }), (X, ae) => (h(), p("section", {
      class: "library-duplicates",
      "aria-label": u(_)("library", "Possible duplicates"),
      "aria-busy": y.value ? "true" : "false"
    }, [
      l("a", { href: e.reviewUrl }, "← " + o(u(_)("library", "Review")), 9, $x),
      l("h1", null, [
        he(Ge, {
          text: u(_)("library", "Find possible copies from titles, authors and valid ISBNs. Name order and punctuation are normalized for comparison only. Editions and translations can be different books. Review decisions are private and never delete, merge or hide publications.")
        }, {
          default: ke(() => [
            ie(o(u(_)("library", "Possible duplicates")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      he(Ax, { "request-token": e.requestToken }, null, 8, ["request-token"]),
      u(t) ? (h(), De(bg, {
        key: 0,
        "item-id": u(t),
        "compare-id": u(i),
        "request-token": e.requestToken,
        full: ""
      }, null, 8, ["item-id", "compare-id", "request-token"])) : A("", !0),
      v.value ? (h(), p("p", xx, o(v.value), 1)) : A("", !0),
      g.value ? (h(), p("p", Ox, o(g.value), 1)) : A("", !0),
      l("form", {
        class: "library-duplicate-toolbar",
        onSubmit: Ce(Z, ["prevent"])
      }, [
        l("label", null, [
          ie(o(u(_)("library", "Library root")), 1),
          ye(l("select", {
            "onUpdate:modelValue": ae[0] || (ae[0] = (J) => s.value = J),
            disabled: y.value || $.value
          }, [
            l("option", Rx, o(u(_)("library", "All library roots")), 1),
            (h(!0), p(W, null, fe(n.value, (J) => (h(), p("option", {
              key: J.id,
              value: String(J.id)
            }, o(J.label), 9, Ix))), 128))
          ], 8, Nx), [
            [nt, s.value]
          ])
        ]),
        l("label", Lx, [
          ye(l("input", {
            "onUpdate:modelValue": ae[1] || (ae[1] = (J) => c.value = J),
            type: "checkbox",
            disabled: y.value || $.value
          }, null, 8, Px), [
            [sa, c.value]
          ]),
          he(Ge, {
            text: u(_)("library", "Read equal-size candidates to confirm identical contents, including renamed copies with different metadata. This can take longer on remote storage. Checks are limited to 64 MiB per file and 512 MiB per scan; skipped checks are reported.")
          }, {
            default: ke(() => [
              ie(o(u(_)("library", "Compare file contents")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        l("button", {
          class: "button primary",
          disabled: y.value || $.value || !n.value.length
        }, o(u(_)("library", "Find possible duplicates")), 9, Dx)
      ], 32),
      l("label", null, [
        he(Ge, {
          text: u(_)("library", "Scans continue through Nextcloud background jobs and can be reopened for seven days. Review decisions are reused when the same books have not changed. Each comparison is independent; choosing a preferred copy does not change catalogue ordering.")
        }, {
          default: ke(() => [
            ie(o(u(_)("library", "Saved duplicate scans")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        l("select", {
          value: d.value?.id || "",
          disabled: y.value,
          onChange: H
        }, [
          l("option", Mx, o(u(_)("library", "Choose a scan")), 1),
          (h(!0), p(W, null, fe(r.value, (J) => (h(), p("option", {
            key: J.id,
            value: J.id
          }, o(new Date(Number(J.created_at) * 1e3).toLocaleString()) + " · " + o(L.value[J.status]), 9, Ux))), 128))
        ], 40, Fx)
      ]),
      d.value ? (h(), p(W, { key: 3 }, [
        l("section", {
          class: "library-duplicate-progress",
          "aria-label": u(_)("library", "Duplicate scan progress")
        }, [
          l("strong", null, o(d.value.rootId ? d.value.label : u(_)("library", "All library roots")), 1),
          l("p", jx, [
            ie(o(L.value[d.value.status]), 1),
            $.value ? (h(), p(W, { key: 0 }, [
              ie(" · " + o(d.value.phase === "index" ? u(_)("library", "Indexing metadata") : u(_)("library", "Comparing candidates")), 1)
            ], 64)) : A("", !0),
            ie(" · " + o(d.value.processed) + "/" + o(d.value.total), 1)
          ]),
          $.value ? (h(), p("progress", {
            key: 0,
            value: d.value.phase === "index" ? d.value.processed : void 0,
            max: Math.max(d.value.total, 1),
            "aria-label": u(_)("library", "Duplicate scan progress")
          }, null, 8, Bx)) : A("", !0),
          l("p", null, o(u(_)("library", "Possible matches")) + ": " + o(d.value.matches) + " · " + o(u(_)("library", "Comparisons checked")) + ": " + o(d.value.examined), 1),
          d.value.hashSkipped || d.value.unavailable ? (h(), p("p", Hx, o(u(_)("library", "Content checks skipped")) + ": " + o(d.value.hashSkipped) + " · " + o(u(_)("library", "Unavailable books")) + ": " + o(d.value.unavailable), 1)) : A("", !0),
          d.value.status === "limited" ? (h(), p("p", Vx, o(u(_)("library", "These results are partial. A large candidate group or scan limit was reached. Try a smaller root or improve the metadata before scanning again.")), 1)) : A("", !0),
          d.value.status === "failed" ? (h(), p("p", qx, o(u(_)("library", "The scan stopped before completion. Its results are partial. Refresh or start a new scan.")), 1)) : A("", !0),
          l("div", Gx, [
            $.value ? (h(), p("button", {
              key: 0,
              class: "button secondary",
              disabled: y.value,
              onClick: Y
            }, o(u(_)("library", "Cancel scan")), 9, Kx)) : A("", !0),
            l("button", {
              class: "button secondary",
              disabled: y.value,
              onClick: ae[2] || (ae[2] = (J) => se(d.value.id, d.value.page))
            }, o(u(_)("library", "Refresh results")), 9, Wx),
            l("button", {
              class: "button secondary",
              disabled: y.value || $.value,
              onClick: R
            }, o(u(_)("library", "Discard scan")), 9, Yx)
          ])
        ], 8, zx),
        l("label", null, [
          ie(o(u(_)("library", "Show comparisons")), 1),
          ye(l("select", {
            "onUpdate:modelValue": ae[3] || (ae[3] = (J) => m.value = J),
            disabled: y.value,
            onChange: ae[4] || (ae[4] = (J) => se(d.value.id))
          }, [
            l("option", Xx, o(u(_)("library", "All")) + " (" + o(d.value.matches) + ")", 1),
            (h(!0), p(W, null, fe(I.value, (J, be) => (h(), p("option", {
              key: be,
              value: be
            }, o(J) + " (" + o(d.value.counts[be] || 0) + ")", 9, Jx))), 128))
          ], 40, Zx), [
            [nt, m.value]
          ])
        ]),
        !d.value.pairs.length && !$.value ? (h(), p("p", Qx, o(u(_)("library", "No comparisons in this view.")), 1)) : A("", !0),
        (h(!0), p(W, null, fe(d.value.pairs, (J) => (h(), p("article", {
          key: J.id,
          class: "library-duplicate-pair",
          "data-pair-id": J.id
        }, [
          J.unavailable ? (h(), p("p", t3, o(u(_)("library", "These books are no longer available. Start a new scan.")), 1)) : (h(), p(W, { key: 1 }, [
            l("header", null, [
              l("h2", null, o(J.reasons.includes("identical") ? u(_)("library", "Identical file contents") : u(_)("library", "Possible duplicates")), 1),
              l("span", i3, o(I.value[J.decision]), 1)
            ]),
            l("ul", {
              class: "library-duplicate-reasons",
              "aria-label": u(_)("library", "Why these books match")
            }, [
              (h(!0), p(W, null, fe(J.reasons, (be) => (h(), p("li", { key: be }, o(P.value[be]), 1))), 128))
            ], 8, a3),
            J.flags.length ? (h(), p("ul", {
              key: 0,
              class: "library-duplicate-flags",
              "aria-label": u(_)("library", "Differences to review")
            }, [
              (h(!0), p(W, null, fe(J.flags, (be) => (h(), p("li", { key: be }, o(N.value[be]), 1))), 128))
            ], 8, n3)) : A("", !0),
            J.stale ? (h(), p("p", r3, o(u(_)("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")), 1)) : A("", !0),
            l("div", l3, [
              (h(!0), p(W, null, fe(J.books, (be) => (h(), p("section", {
                key: be.id,
                class: Ee(["library-duplicate-book", { "library-duplicate-preferred": J.preferredId === be.id }])
              }, [
                l("div", s3, [
                  l("img", {
                    src: be.coverUrl,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, o3),
                  l("div", null, [
                    l("h3", u3, o(be.title), 1),
                    l("p", c3, o(be.authors.join("; ") || "—"), 1),
                    J.preferredId === be.id ? (h(), p("strong", d3, o(u(_)("library", "Preferred copy")), 1)) : A("", !0)
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
                    l("dd", f3, o(be.publisher || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(_)("library", "ISBN")), 1),
                    l("dd", h3, o(be.isbn.join(", ") || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(_)("library", "Location")), 1),
                    l("dd", p3, o(be.path), 1)
                  ])
                ]),
                l("div", v3, [
                  l("a", {
                    class: "button secondary",
                    href: be.openUrl
                  }, o(u(_)("library", "Open")), 9, b3),
                  l("a", {
                    class: "button secondary",
                    href: be.detailsUrl
                  }, o(u(_)("library", "Details")), 9, g3),
                  l("button", {
                    class: "button primary",
                    disabled: y.value || $.value || J.stale,
                    onClick: (Te) => G(J, "preferred", be.id)
                  }, o(u(_)("library", "Prefer this copy")), 9, m3)
                ])
              ], 2))), 128))
            ]),
            l("div", y3, [
              l("button", {
                class: "button secondary",
                disabled: y.value || $.value || J.stale,
                onClick: (be) => G(J, "keep")
              }, o(u(_)("library", "Keep both")), 9, _3),
              l("button", {
                class: "button secondary",
                disabled: y.value || $.value || J.stale,
                onClick: (be) => G(J, "dismissed")
              }, o(u(_)("library", "Dismiss match")), 9, w3),
              J.decision !== "unreviewed" ? (h(), p("button", {
                key: 0,
                class: "button secondary",
                disabled: y.value || $.value || J.stale,
                onClick: (be) => G(J, "unreviewed")
              }, o(u(_)("library", "Reset review decision")), 9, k3)) : A("", !0)
            ])
          ], 64))
        ], 8, e3))), 128)),
        l("nav", {
          class: "library-duplicate-actions",
          "aria-label": u(_)("library", "Duplicate comparison pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: y.value || d.value.page === 1,
            onClick: ae[5] || (ae[5] = (J) => se(d.value.id, d.value.page - 1))
          }, o(u(_)("library", "Previous page")), 9, C3),
          l("span", null, o(d.value.page), 1),
          l("button", {
            class: "button secondary",
            disabled: y.value || !d.value.hasNext,
            onClick: ae[6] || (ae[6] = (J) => se(d.value.id, d.value.page + 1))
          }, o(u(_)("library", "Next page")), 9, T3)
        ], 8, S3)
      ], 64)) : A("", !0)
    ], 8, Ex));
  }
}, ef = ["title", "subtitle", "author", "series", "seriesNumber", "language", "publisher", "subject", "year", "genre"], E3 = /* @__PURE__ */ new Set([...ef, "ignore", "folder", "folders", "extension"]);
function gg(e, t, i = {}) {
  if (!t || t.length > 1e3 || e.length > 2e3) return { status: "invalid", reason: "pattern", changes: [] };
  if (/%folders?%(?!\/)/.test(t)) return { status: "invalid", reason: "pattern", changes: [] };
  const a = (g) => g === "%folders%/" ? "folders" : g.slice(1, -1), n = t.split(/(%folders%\/|%[A-Za-z]+%)/).filter(Boolean);
  if (n.some((g) => g.includes("%") && !E3.has(a(g))) || n.filter((g) => g.startsWith("%")).length > 16) return { status: "invalid", reason: "pattern", changes: [] };
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
    const C = n[g];
    if (!C.startsWith("%")) {
      e.startsWith(C, m) && d(g + 1, m + C.length, k);
      return;
    }
    const S = a(C);
    if (S === "folders") {
      d(g + 1, m, k);
      for (let I = m; I < e.length && !s && c.length < 2; I++) e[I] === "/" && d(g + 1, I + 1, k);
      return;
    }
    const $ = e.indexOf("/", m), L = $ < 0 ? e.length : $;
    for (let I = m + 1; I <= L && !s && c.length < 2; I++) {
      const P = e.slice(m, I);
      S === "folder" && I !== L || S === "extension" && !/^[A-Za-z0-9]{1,12}$/.test(P) || d(g + 1, I, [...k, { key: S, raw: P }]);
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
    if (g === "language" && (k = mg(k)), g === "language" && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(k)) return { status: "invalid", reason: "language", changes: [] };
    if (g === "author" && [...k].length > 255) return { status: "invalid", changes: [] };
    if (!yg(g, k)) return { status: "invalid", changes: [] };
    const C = String(i[g] || ""), S = g === "author" && Array.isArray(i.authors) ? JSON.stringify([k]) === JSON.stringify(i.authors) : C === k;
    v.push({ field: g, raw: m, value: k, ...g === "author" ? { values: [k] } : {}, before: C, previewOnly: !1, status: S ? "unchanged" : C.trim() ? "conflict" : "ready" });
  }
  return { status: v.some((g) => g.status === "conflict") ? "conflict" : v.some((g) => g.status === "ready") ? "ready" : "unchanged", changes: v };
}
function mg(e) {
  return ({ english: "en", german: "de", deutsch: "de", french: "fr", français: "fr", arabic: "ar" }[e.toLowerCase()] || e.toLowerCase()).replace(/^([a-z]{2,3})-([a-z]{2})$/, (i, a, n) => `${a}-${n.toUpperCase()}`);
}
function yg(e, t) {
  const i = { title: 512, subtitle: 512, author: 1024, series: 255, seriesNumber: 64, genre: 255, language: 64, publisher: 512, subject: 2048, year: 4 };
  return e in i ? !!t && [...t].length <= i[e] && !/[\x00-\x1f\x7f]/.test(t) && (e !== "year" || Number(t) > 0) : !0;
}
const $3 = [...ef];
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
      const { delimiter: L, occurrence: I, children: P } = m.split;
      if (typeof L != "string" || !L || L.length > 100 || !["first", "last", "every"].includes(I) || !Array.isArray(P)) {
        c = "invalid";
        return;
      }
      const N = pd(g, L, I);
      if (N.length !== P.length || N.length < 2) {
        c = "unmatched";
        return;
      }
      N.forEach((pe, Q) => d(pe, P[Q], k + 1));
      return;
    }
    if (m.field === "ignore") return;
    if (!$3.includes(m.field)) {
      c = "invalid";
      return;
    }
    let C = g.trim();
    if (m.prefix) {
      if (!C.startsWith(m.prefix)) {
        c = "unmatched";
        return;
      }
      C = C.slice(m.prefix.length);
    }
    if (m.suffix) {
      if (!C.endsWith(m.suffix)) {
        c = "unmatched";
        return;
      }
      C = C.slice(0, -m.suffix.length);
    }
    if (m.underscores && (C = C.replaceAll("_", " ")), C = C.trim(), m.mapFrom && C === m.mapFrom && (C = m.mapTo.trim()), m.field === "language" && (C = mg(C)), !C || m.field === "year" && !/^\d{4}$/.test(C) || m.field === "language" && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(C)) {
      c = "invalid";
      return;
    }
    if (!yg(m.field, C)) {
      c = "invalid";
      return;
    }
    let S = [C];
    if (m.field === "author") {
      if (S = (m.authorSeparator ? C.split(m.authorSeparator) : S).map((L) => L.trim()), m.reverseName && (S = S.map((L) => {
        const I = L.split(",").map((P) => P.trim());
        return I.length !== 2 || I.some((P) => !P) ? (c = "invalid", L) : `${I[1]} ${I[0]}`;
      }), c))
        return;
      if (S.some((L) => !L || [...L].length > 255)) {
        c = "invalid";
        return;
      }
    }
    const $ = r.get(m.field);
    $ ? m.field === "author" && t.combineAuthors ? ($.values = [.../* @__PURE__ */ new Set([...$.values, ...S])], $.raw.push(g)) : JSON.stringify($.values) !== JSON.stringify(S) && (c = "ambiguous") : r.set(m.field, { raw: [g], values: [...new Set(S)] });
  }
  if (n.forEach((g, m) => d(g, t.parts[m])), c) return a(c);
  const y = r.get("author")?.values;
  if (y && (y.length > 32 || [...y.join("; ")].length > 1024)) return a("invalid");
  const v = [...r].map(([g, m]) => {
    const k = m.values.join("; "), C = String(i[g] || ""), S = g === "author" && Array.isArray(i.authors) ? JSON.stringify(m.values) === JSON.stringify(i.authors) : C === k;
    return {
      field: g,
      raw: m.raw.join(" / "),
      value: k,
      values: m.values,
      before: C,
      previewOnly: !1,
      status: S ? "unchanged" : C.trim() ? "conflict" : "ready"
    };
  });
  return { status: v.some((g) => g.status === "conflict") ? "conflict" : v.some((g) => g.status === "ready") ? "ready" : "unchanged", changes: v };
}
const x3 = ["aria-label", "aria-busy"], O3 = {
  key: 0,
  role: "alert"
}, N3 = ["disabled"], R3 = {
  key: 2,
  role: "status"
}, I3 = ["disabled"], L3 = { class: "library-inference-presets" }, P3 = ["disabled"], D3 = ["disabled"], F3 = ["disabled"], M3 = ["aria-label"], U3 = ["value", "aria-label"], z3 = { class: "library-inference-before-after" }, j3 = { key: 0 }, B3 = ["aria-label"], H3 = ["aria-label"], V3 = { class: "library-inference-path" }, q3 = { class: "library-inference-presets" }, G3 = ["disabled"], K3 = ["disabled"], W3 = ["disabled"], Y3 = ["disabled"], Z3 = ["disabled"], X3 = { class: "library-inference-history" }, J3 = ["disabled", "onClick"], _g = {
  __name: "InferenceApply",
  props: { results: { type: Array, required: !0 }, labels: { type: Object, required: !0 }, context: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, wholeFolder: Boolean },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const i = e, a = t, n = /* @__PURE__ */ z([]), r = /* @__PURE__ */ z(null), s = /* @__PURE__ */ z([]), c = /* @__PURE__ */ z(!1), d = /* @__PURE__ */ z(""), y = /* @__PURE__ */ z(""), v = /* @__PURE__ */ z(""), g = /* @__PURE__ */ new Set(["author", "title", "subtitle", "series", "seriesNumber", "genre", "language", "publisher", "subject", "year"]), m = j(() => i.results.filter((se) => ["ready", "conflict"].includes(se.status) && se.revision).map((se) => ({ ...se, changes: se.changes.filter((H) => g.has(H.field) && ["ready", "conflict"].includes(H.status)) })).filter((se) => se.changes.length)), k = (se, H) => `${se.id}:${H.field}`, C = j(() => m.value.map((se) => ({ id: se.id, revision: se.revision, changes: Object.fromEntries(se.changes.filter((H) => n.value.includes(k(se, H))).map((H) => [H.field, H.field === "author" ? H.values || [H.value] : H.value])) })).filter((se) => Object.keys(se.changes).length)), S = j(() => ({ prepared: _("library", "Awaiting approval"), applied: _("library", "Applied"), undone: _("library", "Undone") }));
    let $ = 0;
    qe(() => JSON.stringify([i.results, i.context]), () => {
      n.value = [], r.value?.status === "prepared" && (r.value = null), v.value = "", $++;
    }), qe(() => JSON.stringify(n.value), () => {
      r.value?.status === "prepared" && (r.value = null), v.value = "", $++;
    });
    function L() {
      n.value = m.value.flatMap((se) => se.changes.filter((H) => H.status === "ready").map((H) => k(se, H)));
    }
    async function I(se = "", H) {
      const Y = await fetch(Lt(`/apps/library/api/inference/batches${se}`), { credentials: "same-origin", cache: "no-store", method: H === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: i.requestToken }, ...H === void 0 ? {} : { body: JSON.stringify(H) } }), R = await Y.json();
      if (!Y.ok)
        throw Y.status === 409 ? (r.value && (r.value = { ...r.value, blocked: !0 }), new Error(_("library", "This review is stale or expired. Reload the sample and review again. Undo cannot overwrite later metadata changes."))) : R.error === "history_limit" ? new Error(_("library", "Recent batch history is full. Discard unused reviews or wait for history to expire.")) : Y.status === 404 ? new Error(_("library", "The batch or one of its books is no longer available.")) : new Error(_("library", "Could not save these changes. Check the selected values or use a smaller selection."));
      return R;
    }
    async function P() {
      s.value = (await I()).batches;
    }
    async function N(se) {
      c.value = !0, d.value = "", y.value = "";
      try {
        await se();
      } catch (H) {
        d.value = H.message;
      } finally {
        c.value = !1;
      }
    }
    function pe() {
      r.value = null, d.value = "", v.value = "", a("changed");
    }
    async function Q() {
      const se = $;
      await N(async () => {
        const H = await I("", { proposals: C.value, context: i.context });
        se === $ && (r.value = H), await P();
      });
    }
    async function x(se) {
      await N(async () => {
        r.value = await I(`/${se}`), v.value = "";
      });
    }
    async function B() {
      if (!r.value || i.disabled) return;
      const se = r.value, H = se.id;
      await N(async () => {
        const Y = await I(`/${H}/apply`, {});
        r.value = { ...se, ...Y }, y.value = _("library", "Selected metadata changes were applied. Source files were not changed."), n.value = [], await P(), a("changed");
      });
    }
    async function K() {
      const se = r.value, H = se.id;
      await N(async () => {
        const Y = await I(`/${H}/undo`, {});
        r.value = { ...se, ...Y }, v.value = "", y.value = _("library", "The batch was undone. Previous metadata and provenance were restored."), await P(), a("changed");
      });
    }
    async function Z() {
      await N(async () => {
        await I(`/${r.value.id}/discard`, {}), r.value = null, await P();
      });
    }
    return Tt(() => N(P)), (se, H) => (h(), p("section", {
      class: "library-inference-apply",
      "aria-label": u(_)("library", "Review and apply metadata"),
      "aria-busy": c.value ? "true" : "false"
    }, [
      l("h2", null, [
        he(Ge, {
          text: e.wholeFolder ? u(_)("library", "Choose fields from this page only. Existing values require individual selection. Apply and Undo operate on this reviewed batch of at most 40 books.") : u(_)("library", "Choose fields from this sample only. Replacements require individual selection. Authors are stored in their preview order, with exact duplicates removed.")
        }, {
          default: ke(() => [
            ie(o(e.wholeFolder ? u(_)("library", "Review and apply metadata") : u(_)("library", "4. Review and apply metadata")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      d.value ? (h(), p("p", O3, o(d.value), 1)) : A("", !0),
      r.value?.blocked ? (h(), p("button", {
        key: 1,
        class: "button secondary",
        disabled: c.value,
        onClick: pe
      }, o(u(_)("library", "Load sample")), 9, N3)) : A("", !0),
      y.value ? (h(), p("p", R3, o(y.value), 1)) : A("", !0),
      l("fieldset", {
        disabled: c.value || e.disabled,
        class: "library-inference-approval-fields"
      }, [
        l("div", L3, [
          l("button", {
            class: "button secondary",
            disabled: !m.value.length,
            onClick: L
          }, o(u(_)("library", "Select empty fields")), 9, P3),
          l("button", {
            class: "button secondary",
            disabled: !n.value.length,
            onClick: H[0] || (H[0] = (Y) => n.value = [])
          }, o(u(_)("library", "Clear selection")), 9, D3),
          l("button", {
            class: "button primary",
            disabled: !C.value.length || r.value?.status === "prepared",
            onClick: Q
          }, o(u(_)("library", "Review selected changes")) + " (" + o(n.value.length) + ")", 9, F3)
        ]),
        l("div", {
          class: Ee(["library-inference-approval-candidates", { "library-inference-approval-scroll": m.value.length > 8 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(_)("library", "Select metadata fields")
        }, [
          (h(!0), p(W, null, fe(m.value, (Y) => (h(), p("details", {
            key: Y.id,
            class: "library-inference-result"
          }, [
            l("summary", null, o(Y.path), 1),
            (h(!0), p(W, null, fe(Y.changes, (R) => (h(), p("label", {
              key: R.field,
              class: "library-inference-approval-field"
            }, [
              ye(l("input", {
                "onUpdate:modelValue": H[1] || (H[1] = (G) => n.value = G),
                type: "checkbox",
                value: k(Y, R),
                "aria-label": `${e.labels[R.field]}: ${Y.path}`
              }, null, 8, U3), [
                [sa, n.value]
              ]),
              l("span", null, [
                l("strong", null, o(e.labels[R.field]), 1),
                l("span", z3, [
                  l("span", null, o(R.before || "—"), 1),
                  H[4] || (H[4] = l("span", { "aria-hidden": "true" }, " → ", -1)),
                  l("strong", null, o(R.value), 1)
                ]),
                R.status === "conflict" ? (h(), p("small", j3, o(u(_)("library", "Replaces an existing value")), 1)) : A("", !0)
              ])
            ]))), 128))
          ]))), 128))
        ], 10, M3)
      ], 8, I3),
      r.value ? (h(), p("section", {
        key: 3,
        class: "library-inference-confirm",
        "aria-label": u(_)("library", "Confirmed change review")
      }, [
        l("h3", null, o(S.value[r.value.status]), 1),
        l("p", null, [
          he(Ge, {
            text: u(_)("library", "Reviews expire after 30 minutes. Applied batches can be undone for seven days, provided their metadata, source file and access have not changed. A stale item blocks the entire batch.")
          }, {
            default: ke(() => [
              ie(o(u(_)("library", "Available until")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ie(": " + o(new Date(r.value.expiresAt * 1e3).toLocaleString()), 1)
        ]),
        l("div", {
          class: Ee(["library-inference-confirm-entries", { "library-inference-approval-scroll": r.value.entries.length > 4 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(_)("library", "Reviewed metadata changes")
        }, [
          (h(!0), p(W, null, fe(r.value.entries, (Y) => (h(), p("article", {
            key: Y.id
          }, [
            l("h4", V3, o(Y.path), 1),
            l("dl", null, [
              (h(!0), p(W, null, fe(Y.changes, (R) => (h(), p("div", {
                key: R.field
              }, [
                l("dt", null, o(e.labels[R.field]), 1),
                l("dd", null, [
                  l("span", null, o(u(_)("library", "Before")) + ": " + o(R.before || "—"), 1),
                  l("strong", null, o(u(_)("library", "After")) + ": " + o(R.after), 1)
                ])
              ]))), 128))
            ])
          ]))), 128))
        ], 10, H3),
        l("div", q3, [
          r.value.status === "prepared" ? (h(), p("button", {
            key: 0,
            class: "button primary",
            disabled: c.value || e.disabled || r.value.blocked,
            onClick: B
          }, o(u(_)("library", "Apply reviewed changes")), 9, G3)) : A("", !0),
          r.value.status !== "applied" ? (h(), p("button", {
            key: 1,
            class: "button secondary",
            disabled: c.value,
            onClick: Z
          }, o(u(_)("library", "Discard review")), 9, K3)) : A("", !0),
          r.value.status === "applied" && !v.value ? (h(), p("button", {
            key: 2,
            class: "button secondary",
            disabled: c.value || r.value.blocked,
            onClick: H[2] || (H[2] = (Y) => v.value = r.value.id)
          }, o(u(_)("library", "Undo this batch")), 9, W3)) : A("", !0),
          v.value ? (h(), p(W, { key: 3 }, [
            l("button", {
              class: "button primary",
              disabled: c.value || r.value.blocked,
              onClick: K
            }, o(u(_)("library", "Confirm undo")), 9, Y3),
            l("button", {
              class: "button secondary",
              disabled: c.value,
              onClick: H[3] || (H[3] = (Y) => v.value = "")
            }, o(u(_)("library", "Cancel")), 9, Z3)
          ], 64)) : A("", !0)
        ])
      ], 8, B3)) : A("", !0),
      l("details", X3, [
        l("summary", null, o(u(_)("library", "Recent metadata batches")) + " (" + o(s.value.length) + ")", 1),
        l("ul", null, [
          (h(!0), p(W, null, fe(s.value, (Y) => (h(), p("li", {
            key: Y.id
          }, [
            l("button", {
              class: "button secondary",
              disabled: c.value,
              onClick: (R) => x(Y.id)
            }, o(new Date(Number(Y.created_at) * 1e3).toLocaleString()) + " · " + o(S.value[Y.status]), 9, J3)
          ]))), 128))
        ])
      ])
    ], 8, x3));
  }
}, Q3 = { class: "library-inference-rule-trace" }, e4 = { key: 0 }, vd = {
  __name: "InferenceRuleTrace",
  props: { result: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 } },
  setup(e) {
    return (t, i) => (h(), p("div", Q3, [
      (h(!0), p(W, null, fe(e.result.conflicts || [], (a) => (h(), p("div", {
        key: a.field,
        class: "library-inference-rule-conflict"
      }, [
        l("strong", null, o(u(_)("library", "Conflicting rules")) + ": " + o(e.labels[a.field]), 1),
        l("ul", null, [
          (h(!0), p(W, null, fe(a.proposals, (n, r) => (h(), p("li", { key: r }, [
            l("bdi", null, o(n.value), 1),
            l("small", null, o(n.sources.map((s) => s.name).join(", ")), 1)
          ]))), 128))
        ])
      ]))), 128)),
      e.result.attempts?.length ? (h(), p("details", e4, [
        l("summary", null, [
          he(Ge, {
            text: u(_)("library", "Evaluated from the deepest assigned folder upward. An ambiguous match stops fallback. Rules above a successful match are not used. Conflicting fields have no single proposed value.")
          }, {
            default: ke(() => [
              ie(o(u(_)("library", "Rule evaluation")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        l("ul", null, [
          (h(!0), p(W, null, fe(e.result.attempts, (a) => (h(), p("li", {
            key: a.id
          }, [
            l("strong", null, o(a.name), 1),
            l("bdi", null, o(a.folder || "/"), 1),
            l("small", null, o(e.statuses[a.status]), 1)
          ]))), 128))
        ])
      ])) : A("", !0)
    ]));
  }
}, t4 = ["aria-label", "aria-busy"], i4 = {
  key: 0,
  role: "alert"
}, a4 = { class: "library-inference-presets" }, n4 = ["disabled"], r4 = ["value", "disabled"], l4 = { value: "" }, s4 = ["value"], o4 = { class: "library-inference-path" }, u4 = { role: "status" }, c4 = ["value", "max", "aria-label"], d4 = { class: "library-inference-presets" }, f4 = ["disabled"], h4 = ["disabled"], p4 = ["disabled"], v4 = {
  key: 1,
  role: "alert"
}, b4 = {
  key: 2,
  role: "alert"
}, g4 = {
  key: 0,
  class: "library-analysis-definition",
  dir: "ltr"
}, m4 = { key: 1 }, y4 = { key: 2 }, _4 = ["disabled"], w4 = { value: "all" }, k4 = ["value"], S4 = ["aria-label"], C4 = { class: "library-inference-path" }, T4 = ["aria-label"], A4 = ["disabled"], E4 = ["disabled"], $4 = {
  __name: "InferenceAnalysis",
  props: { definition: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 }, requestToken: String, disabled: Boolean },
  setup(e) {
    const t = e, i = /* @__PURE__ */ z(null), a = /* @__PURE__ */ z([]), n = /* @__PURE__ */ z(!1), r = /* @__PURE__ */ z(""), s = /* @__PURE__ */ z("all");
    let c, d = 0, y = !0;
    const v = j(() => i.value?.status === "running"), g = j(() => ({ running: _("library", "Analysing"), completed: _("library", "Analysis complete"), cancelled: _("library", "Analysis cancelled"), failed: _("library", "Analysis failed"), limited: _("library", "Analysis limit reached") })), m = j(() => ({ ...t.statuses, unavailable: _("library", "Changed or unavailable books") }));
    async function k(Q = "", x) {
      const B = await fetch(Lt(`/apps/library/api/inference/analyses${Q}`), { credentials: "same-origin", cache: "no-store", method: x === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...x === void 0 ? {} : { body: JSON.stringify(x) } }), K = await B.json();
      if (!B.ok)
        throw K.error === "analysis_history_limit" ? new Error(_("library", "Five folder analyses are already saved. Discard an old analysis before starting another.")) : K.error === "analysis_limit" ? new Error(_("library", "This folder exceeds the analysis limit. Choose a smaller subfolder.")) : B.status === 404 ? new Error(_("library", "This analysis or its folder is no longer available.")) : new Error(_("library", "Could not analyse this folder. Check the rule, folder and your access."));
      return K;
    }
    async function C() {
      const Q = await k();
      y && (a.value = Q.jobs);
    }
    async function S(Q) {
      n.value = !0, r.value = "";
      try {
        await Q();
      } catch (x) {
        y && (r.value = x.message);
      } finally {
        y && (n.value = !1);
      }
    }
    function $() {
      if (clearTimeout(c), !y || !v.value) return;
      const Q = i.value.id, x = d;
      c = setTimeout(async () => {
        try {
          if (await k(`/${Q}/advance`, {}), !y || d !== x) return;
          const B = await k(`/${Q}?page=${i.value.page}&filter=${s.value}`);
          if (!y || d !== x) return;
          i.value = B, v.value || await C(), $();
        } catch (B) {
          y && d === x && (r.value = B.message);
        }
      }, 1500);
    }
    async function L() {
      await S(async () => {
        const Q = await k("", { definition: t.definition });
        d++, s.value = "all", i.value = Q, await C(), $();
      });
    }
    async function I(Q, x = 1) {
      const B = ++d;
      clearTimeout(c), await S(async () => {
        const K = await k(`/${Q}?page=${x}&filter=${s.value}`);
        y && B === d && (i.value = K, $());
      });
    }
    function P(Q) {
      s.value = "all", Q.target.value && I(Q.target.value);
    }
    async function N() {
      const Q = i.value.id;
      d++, clearTimeout(c), await S(async () => {
        await k(`/${Q}/cancel`, {}), i.value = await k(`/${Q}?filter=${s.value}`), await C();
      });
    }
    async function pe() {
      const Q = i.value.id;
      d++, clearTimeout(c), await S(async () => {
        await k(`/${Q}/discard`, {}), i.value = null, await C();
      });
    }
    return Tt(() => S(C)), Ti(() => {
      y = !1, d++, clearTimeout(c);
    }), (Q, x) => (h(), p("section", {
      class: "library-inference-analysis library-inference-step",
      "aria-label": u(_)("library", "Whole-folder analysis"),
      "aria-busy": n.value ? "true" : "false"
    }, [
      l("h2", null, [
        he(Ge, {
          text: u(_)("library", "Analyse all indexed books in the loaded folder using a snapshot of the current rule. Analysis continues through Nextcloud background jobs after you leave. Results are saved for seven days. New books require a new analysis; source files remain unchanged.")
        }, {
          default: ke(() => [
            ie(o(u(_)("library", "5. Analyse the whole folder")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      r.value ? (h(), p("p", i4, o(r.value), 1)) : A("", !0),
      l("div", a4, [
        l("button", {
          class: "button primary",
          disabled: n.value || e.disabled || v.value,
          onClick: L
        }, o(u(_)("library", "Analyse whole folder")), 9, n4),
        l("label", null, [
          he(Ge, {
            text: u(_)("library", "Select a saved analysis to reopen its results. Each page contains at most 40 books. Changes and Undo remain separate for each approved batch.")
          }, {
            default: ke(() => [
              ie(o(u(_)("library", "Saved analyses")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          l("select", {
            value: i.value?.id || "",
            disabled: n.value,
            onChange: P
          }, [
            l("option", l4, o(u(_)("library", "Choose an analysis")), 1),
            (h(!0), p(W, null, fe(a.value, (B) => (h(), p("option", {
              key: B.id,
              value: B.id
            }, o(new Date(Number(B.created_at) * 1e3).toLocaleString()) + " · " + o(g.value[B.status]) + " · " + o(B.processed) + "/" + o(B.total), 9, s4))), 128))
          ], 40, r4)
        ])
      ]),
      i.value ? (h(), p(W, { key: 1 }, [
        l("p", o4, o(i.value.scope), 1),
        l("p", u4, o(g.value[i.value.status]) + " · " + o(i.value.processed) + "/" + o(i.value.total), 1),
        v.value ? (h(), p("progress", {
          key: 0,
          value: i.value.processed,
          max: Math.max(i.value.total, 1),
          "aria-label": u(_)("library", "Analysis progress")
        }, null, 8, c4)) : A("", !0),
        l("div", d4, [
          v.value ? (h(), p("button", {
            key: 0,
            class: "button secondary",
            disabled: n.value,
            onClick: N
          }, o(u(_)("library", "Cancel analysis")), 9, f4)) : A("", !0),
          l("button", {
            class: "button secondary",
            disabled: n.value,
            onClick: x[0] || (x[0] = (B) => I(i.value.id, i.value.page))
          }, o(u(_)("library", "Refresh results")), 9, h4),
          l("button", {
            class: "button secondary",
            disabled: n.value || v.value,
            onClick: pe
          }, o(u(_)("library", "Discard analysis")), 9, p4)
        ]),
        i.value.status === "limited" ? (h(), p("p", v4, o(u(_)("library", "Analysis stopped at its storage limit. These results are partial. Choose a smaller subfolder for a complete analysis.")), 1)) : A("", !0),
        i.value.status === "failed" ? (h(), p("p", b4, o(u(_)("library", "Analysis stopped before completion. Check folder access and start a new analysis. These results are partial.")), 1)) : A("", !0),
        l("details", null, [
          l("summary", null, o(u(_)("library", "Rule used for this analysis")), 1),
          i.value.definition.mode === "pattern" ? (h(), p("code", g4, o(i.value.definition.pattern), 1)) : i.value.definition.mode === "folders" ? (h(), p("ul", m4, [
            (h(!0), p(W, null, fe(i.value.definition.assignments, (B) => (h(), p("li", {
              key: B.id
            }, o(B.folder || "/") + " · " + o(B.definition.name), 1))), 128))
          ])) : (h(), p("ul", y4, [
            (h(!0), p(W, null, fe(i.value.definition.rule.parts, (B, K) => (h(), p("li", { key: K }, o(K + 1) + " · " + o(e.labels[B.field] || u(_)("library", "Ignore")), 1))), 128))
          ]))
        ]),
        l("label", null, [
          ie(o(u(_)("library", "Show results")), 1),
          ye(l("select", {
            "onUpdate:modelValue": x[1] || (x[1] = (B) => s.value = B),
            disabled: n.value,
            onChange: x[2] || (x[2] = (B) => I(i.value.id))
          }, [
            l("option", w4, o(u(_)("library", "All")) + " (" + o(Object.values(i.value.counts).reduce((B, K) => B + K, 0)) + ")", 1),
            (h(!0), p(W, null, fe(m.value, (B, K) => (h(), p("option", {
              key: K,
              value: K
            }, o(B) + " (" + o(i.value.counts[K] || 0) + ")", 9, k4))), 128))
          ], 40, _4), [
            [nt, s.value]
          ])
        ]),
        l("div", {
          class: "library-analysis-results",
          role: "region",
          tabindex: "0",
          "aria-label": u(_)("library", "Analysis results")
        }, [
          (h(!0), p(W, null, fe(i.value.items, (B) => (h(), p("details", {
            key: B.id,
            class: "library-inference-result"
          }, [
            l("summary", null, [
              l("span", C4, o(B.path || "—"), 1),
              l("strong", null, o(m.value[B.status]), 1)
            ]),
            i.value.definition.mode === "folders" ? (h(), De(vd, {
              key: 0,
              result: B,
              labels: e.labels,
              statuses: m.value
            }, null, 8, ["result", "labels", "statuses"])) : A("", !0),
            (h(!0), p(W, null, fe(B.changes, (K) => (h(), p("dl", {
              key: K.field
            }, [
              l("dt", null, o(e.labels[K.field]), 1),
              l("dd", null, o(K.before || "—") + " → " + o(K.value), 1)
            ]))), 128))
          ]))), 128))
        ], 8, S4),
        l("nav", {
          class: "library-inference-presets",
          "aria-label": u(_)("library", "Analysis pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: n.value || i.value.page === 1,
            onClick: x[3] || (x[3] = (B) => I(i.value.id, i.value.page - 1))
          }, o(u(_)("library", "Previous page")), 9, A4),
          l("span", null, o(i.value.page), 1),
          l("button", {
            class: "button secondary",
            disabled: n.value || !i.value.hasNext,
            onClick: x[4] || (x[4] = (B) => I(i.value.id, i.value.page + 1))
          }, o(u(_)("library", "Next page")), 9, E4)
        ], 8, T4),
        he(_g, {
          "whole-folder": "",
          results: i.value.items,
          labels: e.labels,
          "request-token": e.requestToken,
          context: JSON.stringify({ analysisId: i.value.id }),
          disabled: n.value || v.value,
          onChanged: x[5] || (x[5] = (B) => I(i.value.id, i.value.page))
        }, null, 8, ["results", "labels", "request-token", "context", "disabled"])
      ], 64)) : A("", !0)
    ], 8, t4));
  }
}, x4 = { class: "library-inference-part" }, O4 = { class: "library-inference-part-source" }, N4 = { class: "library-inference-part-options" }, R4 = { value: "first" }, I4 = { value: "last" }, L4 = { value: "every" }, P4 = {
  key: 0,
  role: "status"
}, D4 = ["aria-label"], F4 = { value: "ignore" }, M4 = ["value"], U4 = { key: 1 }, z4 = { class: "library-inference-part-options" }, j4 = { class: "library-inference-checkbox" }, B4 = {
  key: 2,
  class: "library-inference-part-options"
}, H4 = { value: "none" }, V4 = { value: "semicolon" }, q4 = { value: "and" }, G4 = { value: "custom" }, K4 = { key: 0 }, W4 = ["value"], Y4 = { class: "library-inference-checkbox" }, Ip = " and ", Z4 = {
  __name: "InferencePart",
  props: { node: { type: Object, required: !0 }, value: { type: String, default: "" }, fields: { type: Array, required: !0 }, depth: { type: Number, default: 0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ z(t.node.split?.delimiter || " - "), a = /* @__PURE__ */ z(t.node.split?.occurrence || "first"), n = j(() => t.node.split ? pd(t.value, t.node.split.delimiter, t.node.split.occurrence) : []), r = j({
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
      const v = Xe("InferencePart", !0);
      return h(), p("div", x4, [
        l("bdi", O4, o(e.value || "—"), 1),
        e.node.split ? (h(), p(W, { key: 0 }, [
          l("div", N4, [
            l("label", null, [
              ie(o(u(_)("library", "Separator")), 1),
              ye(l("input", {
                "onUpdate:modelValue": y[0] || (y[0] = (g) => i.value = g),
                maxlength: "100",
                onInput: c
              }, null, 544), [
                [Ue, i.value]
              ])
            ]),
            l("label", null, [
              ie(o(u(_)("library", "Split at")), 1),
              ye(l("select", {
                "onUpdate:modelValue": y[1] || (y[1] = (g) => a.value = g),
                onChange: c
              }, [
                l("option", R4, o(u(_)("library", "First occurrence")), 1),
                l("option", I4, o(u(_)("library", "Last occurrence")), 1),
                l("option", L4, o(u(_)("library", "Every occurrence")), 1)
              ], 544), [
                [nt, a.value]
              ])
            ])
          ]),
          n.value.length !== e.node.split.children.length || !e.node.split.delimiter ? (h(), p("p", P4, o(u(_)("library", "This example does not match the split. Adjust the separator or select another example.")), 1)) : A("", !0),
          l("button", {
            class: "button secondary",
            onClick: y[2] || (y[2] = (g) => e.node.split = null)
          }, o(u(_)("library", "Use whole part")), 1),
          (h(!0), p(W, null, fe(e.node.split.children, (g, m) => (h(), De(v, {
            key: m,
            node: g,
            value: n.value[m] || "",
            fields: e.fields,
            depth: e.depth + 1
          }, null, 8, ["node", "value", "fields", "depth"]))), 128))
        ], 64)) : (h(), p(W, { key: 1 }, [
          l("label", null, [
            ie(o(u(_)("library", "Field")), 1),
            ye(l("select", {
              "onUpdate:modelValue": y[3] || (y[3] = (g) => e.node.field = g),
              "aria-label": `${u(_)("library", "Field")}: ${e.value}`
            }, [
              l("option", F4, o(u(_)("library", "Ignore this part")), 1),
              (h(!0), p(W, null, fe(e.fields, (g) => (h(), p("option", {
                key: g[0],
                value: g[0]
              }, o(g[1]), 9, M4))), 128))
            ], 8, D4), [
              [nt, e.node.field]
            ])
          ]),
          e.depth < 6 ? (h(), p("button", {
            key: 0,
            class: "button secondary",
            onClick: c
          }, o(u(_)("library", "Split this part")), 1)) : A("", !0),
          e.node.field !== "ignore" ? (h(), p("details", U4, [
            l("summary", null, o(u(_)("library", "Transform this value")), 1),
            l("div", z4, [
              l("label", null, [
                ie(o(u(_)("library", "Remove prefix")), 1),
                ye(l("input", {
                  "onUpdate:modelValue": y[4] || (y[4] = (g) => e.node.prefix = g),
                  maxlength: "100"
                }, null, 512), [
                  [Ue, e.node.prefix]
                ])
              ]),
              l("label", null, [
                ie(o(u(_)("library", "Remove suffix")), 1),
                ye(l("input", {
                  "onUpdate:modelValue": y[5] || (y[5] = (g) => e.node.suffix = g),
                  maxlength: "100"
                }, null, 512), [
                  [Ue, e.node.suffix]
                ])
              ]),
              l("label", j4, [
                ye(l("input", {
                  "onUpdate:modelValue": y[6] || (y[6] = (g) => e.node.underscores = g),
                  type: "checkbox"
                }, null, 512), [
                  [sa, e.node.underscores]
                ]),
                ie(o(u(_)("library", "Replace underscores with spaces")), 1)
              ]),
              l("label", null, [
                he(Ge, {
                  text: u(_)("library", "Affixes must match. Value mapping follows affix removal and underscore replacement.")
                }, {
                  default: ke(() => [
                    ie(o(u(_)("library", "Map exact value")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                ye(l("input", {
                  "onUpdate:modelValue": y[7] || (y[7] = (g) => e.node.mapFrom = g),
                  maxlength: "200"
                }, null, 512), [
                  [Ue, e.node.mapFrom]
                ])
              ]),
              l("label", null, [
                ie(o(u(_)("library", "Replacement value")), 1),
                ye(l("input", {
                  "onUpdate:modelValue": y[8] || (y[8] = (g) => e.node.mapTo = g),
                  maxlength: "200"
                }, null, 512), [
                  [Ue, e.node.mapTo]
                ])
              ])
            ])
          ])) : A("", !0),
          e.node.field === "author" ? (h(), p("div", B4, [
            l("label", null, [
              he(Ge, {
                text: u(_)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + (r.value === "and" ? " " + u(_)("library", "Spaces around the word are required.") : "")
              }, {
                default: ke(() => [
                  ie(o(u(_)("library", "Separate authors by")), 1)
                ]),
                _: 1
              }, 8, ["text"]),
              ye(l("select", {
                "onUpdate:modelValue": y[9] || (y[9] = (g) => r.value = g)
              }, [
                l("option", H4, o(u(_)("library", "None (keep one name)")), 1),
                l("option", V4, o(u(_)("library", "Semicolon (;)")), 1),
                y[11] || (y[11] = l("option", { value: "ampersand" }, "&", -1)),
                l("option", q4, o(u(_)("library", "Word separator")) + ": " + o(Ip.trim()), 1),
                l("option", G4, o(u(_)("library", "Custom separator")), 1)
              ], 512), [
                [nt, r.value]
              ])
            ]),
            r.value === "custom" ? (h(), p("label", K4, [
              ie(o(u(_)("library", "Custom separator")), 1),
              l("input", {
                value: e.node.customAuthorSeparator || "",
                maxlength: "100",
                onInput: s
              }, null, 40, W4)
            ])) : A("", !0),
            l("label", Y4, [
              ye(l("input", {
                "onUpdate:modelValue": y[10] || (y[10] = (g) => e.node.reverseName = g),
                type: "checkbox"
              }, null, 512), [
                [sa, e.node.reverseName]
              ]),
              ie(o(u(_)("library", "Convert Surname, Given name to Given name Surname")), 1)
            ])
          ])) : A("", !0)
        ], 64))
      ]);
    };
  }
}, X4 = ["aria-busy"], J4 = ["disabled"], Q4 = {
  value: "",
  disabled: ""
}, eO = ["value"], tO = ["disabled"], iO = ["disabled"], aO = ["disabled"], nO = ["disabled"], rO = ["disabled"], lO = {
  key: 0,
  role: "alert"
}, sO = ["disabled"], oO = {
  key: 1,
  role: "status"
}, Lp = {
  __name: "InferencePatterns",
  props: { pattern: { type: String, default: "" }, mode: { type: String, default: "pattern" }, rule: { type: Object, default: null }, requestToken: { type: String, default: "" } },
  emits: ["choose", "choose-rule"],
  setup(e, { emit: t }) {
    const i = e, a = t, n = j(() => i.mode === "guided"), r = j(() => n.value ? JSON.stringify(i.rule) : i.pattern), s = (B) => (B.kind || "pattern") === "guided" ? JSON.stringify(B.rule) : B.pattern, c = /* @__PURE__ */ z([]), d = /* @__PURE__ */ z(""), y = /* @__PURE__ */ z(""), v = /* @__PURE__ */ z(!1), g = /* @__PURE__ */ z(""), m = /* @__PURE__ */ z(""), k = /* @__PURE__ */ z(""), C = /* @__PURE__ */ z([]), S = j(() => [
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
    ]), $ = j(() => [...n.value ? [] : S.value.map((B) => ({ ...B, id: `preset-${B.id}` })).filter((B) => !C.value.includes(B.id)), ...c.value.filter((B) => (B.kind || "pattern") === i.mode)].sort((B, K) => B.name.localeCompare(K.name))), L = j(() => $.value.find((B) => B.id === y.value));
    qe([r, $], () => {
      k.value = "", (!L.value || s(L.value) !== r.value) && (y.value = $.value.find((B) => s(B) === r.value)?.id || "");
    }, { immediate: !0 });
    const I = j(() => [_("library", "Patterns match paths relative to the selected folder. Adjust literal prefixes such as books/ when needed. Ambiguous names still need review."), L.value?.example ? `${_("library", "Example path")}: ${L.value.example}` : ""].filter(Boolean).join(`

`));
    function P(B) {
      const K = $.value.find((Z) => Z.id === B.target.value);
      K && (y.value = K.id, n.value ? a("choose-rule", JSON.parse(JSON.stringify(K.rule))) : a("choose", K.pattern), m.value = "", k.value = "");
    }
    async function N(B = "", K = null) {
      const Z = await fetch(`${Lt("/apps/library/api/inference/patterns")}${B}`, {
        method: K === null ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...K === null ? {} : { "Content-Type": "application/json", requesttoken: i.requestToken } },
        ...K === null ? {} : { body: JSON.stringify(K) }
      });
      if (!Z.ok) throw new Error(Z.status === 409 ? _("library", "That name already exists. Choose a different name.") : Z.status === 422 ? _("library", "Check the definition and name. You can save up to 100 rules and patterns.") : _("library", "Could not load or save rules and patterns. Check your connection and try again."));
      return Z.json();
    }
    async function pe() {
      v.value = !0, g.value = "";
      try {
        const B = await N();
        c.value = B.patterns, C.value = B.hidden || [];
      } catch (B) {
        g.value = B.message;
      } finally {
        v.value = !1;
      }
    }
    async function Q() {
      v.value = !0, g.value = "", m.value = "";
      try {
        const B = await N("", { name: d.value, ...n.value ? { kind: "guided", rule: i.rule } : { pattern: i.pattern } });
        c.value = [...c.value, B.saved].sort((K, Z) => K.name.localeCompare(Z.name)), y.value = B.saved.id, d.value = "", m.value = n.value ? _("library", "Rule saved to your account.") : _("library", "Pattern saved to your account.");
      } catch (B) {
        g.value = B.message;
      } finally {
        v.value = !1;
      }
    }
    async function x(B) {
      v.value = !0, g.value = "", m.value = "";
      try {
        await N(`/${B}/delete`, {}), c.value = c.value.filter((K) => K.id !== B), C.value = [...C.value, B], y.value = "", k.value = "", m.value = n.value ? _("library", "Saved rule deleted. The current preview is unchanged.") : _("library", "Saved pattern deleted. The current preview is unchanged.");
      } catch (K) {
        g.value = K.message;
      } finally {
        v.value = !1;
      }
    }
    return Tt(pe), (B, K) => (h(), p("div", {
      class: "library-inference-templates",
      "aria-busy": v.value ? "true" : "false"
    }, [
      l("label", null, [
        he(Ge, {
          text: n.value ? u(_)("library", "Select a rule to restore its assignments, splits, transformations and author options. Folder scope stays unchanged.") : I.value
        }, {
          default: ke(() => [
            ie(o(n.value ? u(_)("library", "Saved rule") : u(_)("library", "Pattern")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        ye(l("select", {
          "onUpdate:modelValue": K[0] || (K[0] = (Z) => y.value = Z),
          disabled: v.value,
          onChange: P
        }, [
          l("option", Q4, o(n.value ? u(_)("library", "Custom rule") : u(_)("library", "Custom pattern")), 1),
          (h(!0), p(W, null, fe($.value, (Z) => (h(), p("option", {
            key: Z.id,
            value: Z.id
          }, o(Z.name), 9, eO))), 128))
        ], 40, J4), [
          [nt, y.value]
        ])
      ]),
      Be(B.$slots, "default"),
      l("form", {
        onSubmit: Ce(Q, ["prevent"])
      }, [
        l("label", null, [
          he(Ge, {
            text: u(_)("library", "Saved privately to your account. Save changes under a new name; existing definitions are not overwritten. Folder scope and example paths are not saved.")
          }, {
            default: ke(() => [
              ie(o(n.value ? u(_)("library", "Rule name") : u(_)("library", "Pattern name")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ye(l("input", {
            "onUpdate:modelValue": K[1] || (K[1] = (Z) => d.value = Z),
            maxlength: "120",
            required: "",
            disabled: v.value
          }, null, 8, tO), [
            [Ue, d.value]
          ])
        ]),
        l("button", {
          class: "button secondary",
          disabled: v.value || !d.value.trim() || (n.value ? !e.rule : !e.pattern.trim())
        }, o(n.value ? u(_)("library", "Save current rule as new") : u(_)("library", "Save current pattern as new")), 9, iO),
        L.value && !k.value ? (h(), p("button", {
          key: 0,
          type: "button",
          class: "button secondary",
          disabled: v.value,
          onClick: K[2] || (K[2] = (Z) => k.value = L.value.id)
        }, o(n.value ? u(_)("library", "Delete rule") : u(_)("library", "Delete pattern")), 9, aO)) : A("", !0),
        k.value ? (h(), p(W, { key: 1 }, [
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: K[3] || (K[3] = (Z) => x(k.value))
          }, o(u(_)("library", "Confirm deletion")), 9, nO),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: K[4] || (K[4] = (Z) => k.value = "")
          }, o(u(_)("library", "Cancel")), 9, rO)
        ], 64)) : A("", !0)
      ], 32),
      g.value ? (h(), p("p", lO, [
        ie(o(g.value) + " ", 1),
        l("button", {
          class: "button secondary",
          disabled: v.value,
          onClick: pe
        }, o(n.value ? u(_)("library", "Reload saved rules") : u(_)("library", "Reload saved patterns")), 9, sO)
      ])) : A("", !0),
      m.value ? (h(), p("p", oO, o(m.value), 1)) : A("", !0)
    ], 8, X4));
  }
}, uO = ["aria-busy"], cO = ["disabled"], dO = {
  value: "",
  disabled: ""
}, fO = ["value"], hO = { class: "library-inference-path" }, pO = { class: "library-inference-checkbox" }, vO = ["disabled"], bO = ["disabled"], gO = {
  key: 0,
  role: "status"
}, mO = {
  key: 1,
  role: "alert"
}, yO = ["disabled"], _O = { key: 2 }, wO = { class: "library-inference-folder-list" }, kO = {
  key: 0,
  role: "status"
}, SO = ["disabled", "onClick"], CO = ["disabled", "onClick"], TO = ["disabled"], AO = {
  __name: "InferenceFolderRules",
  props: { rootId: { type: String, default: "" }, folder: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, scopePending: Boolean },
  emits: ["loaded"],
  setup(e, { emit: t }) {
    const i = e, a = t, n = /* @__PURE__ */ z([]), r = /* @__PURE__ */ z([]), s = /* @__PURE__ */ z(""), c = /* @__PURE__ */ z(!0), d = /* @__PURE__ */ z(!1), y = /* @__PURE__ */ z(!1), v = /* @__PURE__ */ z(""), g = /* @__PURE__ */ z(""), m = j(() => i.disabled || d.value || y.value);
    let k = 0;
    async function C(I, P) {
      const N = await fetch(Lt(`/apps/library/api/inference/${I}`), {
        method: P === void 0 ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...P === void 0 ? {} : { "Content-Type": "application/json", requesttoken: i.requestToken } },
        ...P === void 0 ? {} : { body: JSON.stringify(P) }
      });
      if (!N.ok) throw new Error(N.status === 409 ? _("library", "This rule is already assigned to this folder.") : N.status === 422 ? _("library", "Check the folder and rule. You can save up to 100 folder assignments.") : N.status === 404 ? _("library", "The folder or saved rule is unavailable. Reload and check your access.") : _("library", "Could not load or save folder rules. Try again."));
      return N.json();
    }
    async function S() {
      const I = ++k, P = i.rootId;
      if (r.value = [], g.value = "", v.value = "", a("loaded", { rootId: P, assignments: [] }), !!P) {
        d.value = !0;
        try {
          const [N, pe] = await Promise.all([C("patterns"), C(`folders?rootId=${encodeURIComponent(P)}`)]);
          if (I !== k) return;
          n.value = N.patterns, r.value = pe.assignments, n.value.some((Q) => Q.id === s.value) || (s.value = ""), a("loaded", { rootId: P, assignments: pe.assignments });
        } catch (N) {
          I === k && (v.value = N.message);
        } finally {
          I === k && (d.value = !1);
        }
      }
    }
    async function $() {
      if (!(m.value || i.scopePending || !s.value)) {
        y.value = !0, v.value = "";
        try {
          await C("folders", { rootId: i.rootId, folder: i.folder, recursive: c.value, definitionId: s.value }), await S();
        } catch (I) {
          v.value = I.message;
        } finally {
          y.value = !1;
        }
      }
    }
    async function L(I) {
      if (!m.value) {
        y.value = !0, v.value = "";
        try {
          await C(`folders/${I}/delete`, {}), await S();
        } catch (P) {
          v.value = P.message;
        } finally {
          y.value = !1;
        }
      }
    }
    return qe(() => i.rootId, S, { immediate: !0 }), Ti(() => {
      k++;
    }), (I, P) => (h(), p("div", {
      class: "library-inference-folder-rules",
      "aria-busy": m.value ? "true" : "false"
    }, [
      l("form", {
        onSubmit: Ce($, ["prevent"])
      }, [
        l("label", null, [
          he(Ge, {
            text: u(_)("library", "Save a guided rule or advanced pattern first. Assignments keep a fixed copy, even if the saved definition is later deleted. Rules only generate previews; they do not run on scans or change books.")
          }, {
            default: ke(() => [
              ie(o(u(_)("library", "Saved rule or pattern")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ye(l("select", {
            "onUpdate:modelValue": P[0] || (P[0] = (N) => s.value = N),
            disabled: m.value
          }, [
            l("option", dO, o(u(_)("library", "Choose a saved definition")), 1),
            (h(!0), p(W, null, fe(n.value, (N) => (h(), p("option", {
              key: N.id,
              value: N.id
            }, o(N.name), 9, fO))), 128))
          ], 8, cO), [
            [nt, s.value]
          ])
        ]),
        l("p", hO, [
          ie(o(u(_)("library", "Assignment folder")) + ": ", 1),
          l("bdi", null, o(e.folder || "/"), 1)
        ]),
        l("label", pO, [
          ye(l("input", {
            "onUpdate:modelValue": P[1] || (P[1] = (N) => c.value = N),
            type: "checkbox",
            disabled: m.value
          }, null, 8, vO), [
            [sa, c.value]
          ]),
          ie(o(u(_)("library", "Use in subfolders")), 1)
        ]),
        l("button", {
          class: "button primary",
          disabled: m.value || e.scopePending || !s.value || !e.rootId
        }, o(u(_)("library", "Assign to this folder")), 9, bO)
      ], 32),
      e.scopePending ? (h(), p("p", gO, o(u(_)("library", "Load the folder before assigning a rule.")), 1)) : A("", !0),
      v.value ? (h(), p("p", mO, o(v.value), 1)) : A("", !0),
      l("button", {
        class: "button secondary",
        disabled: m.value,
        onClick: S
      }, o(u(_)("library", "Reload folder rules")), 9, yO),
      l("h3", null, [
        he(Ge, {
          text: u(_)("library", "Rules match paths relative to their assigned folder. A deeper matching folder wins; if it does not match, an ancestor can be used. Equally specific conflicting rules require review. All assignments for this root are listed here.")
        }, {
          default: ke(() => [
            ie(o(u(_)("library", "Rules for this root")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      !r.value.length && !d.value ? (h(), p("p", _O, o(u(_)("library", "No folder rules assigned yet.")), 1)) : A("", !0),
      l("ul", wO, [
        (h(!0), p(W, null, fe(r.value, (N) => (h(), p("li", {
          key: N.id,
          class: "library-inference-folder-entry"
        }, [
          l("strong", null, o(N.definition.name), 1),
          l("bdi", null, o(N.folder || "/"), 1),
          l("small", null, o(N.recursive ? u(_)("library", "Includes subfolders") : u(_)("library", "Direct children only")), 1),
          N.available ? A("", !0) : (h(), p("p", kO, o(u(_)("library", "Folder unavailable or replaced. Remove this assignment and assign again after checking the folder.")), 1)),
          g.value !== N.id ? (h(), p("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: m.value,
            onClick: (pe) => g.value = N.id
          }, o(u(_)("library", "Remove assignment")), 9, SO)) : (h(), p(W, { key: 2 }, [
            l("button", {
              class: "button secondary",
              disabled: m.value,
              onClick: (pe) => L(N.id)
            }, o(u(_)("library", "Confirm removal")), 9, CO),
            l("button", {
              class: "button secondary",
              disabled: m.value,
              onClick: P[2] || (P[2] = (pe) => g.value = "")
            }, o(u(_)("library", "Cancel")), 9, TO)
          ], 64))
        ]))), 128))
      ])
    ], 8, uO));
  }
};
function EO(e, t, i, a = {}) {
  const n = [t, e].filter(Boolean).join("/"), r = i.filter((c) => c.available && (!c.folder || n.startsWith(`${c.folder}/`))).map((c) => ({ ...c, relative: c.folder ? n.slice(c.folder.length + 1) : n, depth: c.folder ? c.folder.split("/").length : 0 })).filter((c) => c.recursive || !c.relative.includes("/")).sort((c, d) => d.depth - c.depth || c.id.localeCompare(d.id)), s = [];
  for (const c of [...new Set(r.map((d) => d.depth))]) {
    const d = [];
    for (const m of r.filter((k) => k.depth === c)) {
      const k = m.definition, C = k.kind === "guided" ? Qo(m.relative, k.rule, a) : gg(m.relative, k.pattern, a), S = { id: m.id, name: k.name, folder: m.folder };
      s.push({ ...S, status: C.status }), ["ready", "conflict", "unchanged"].includes(C.status) && C.changes.length && d.push({ result: C, source: S });
    }
    if (s.some((m) => m.status === "ambiguous")) return { status: "ambiguous", changes: [], conflicts: [], attempts: s };
    if (!d.length) continue;
    const y = /* @__PURE__ */ new Map();
    for (const { result: m, source: k } of d) for (const C of m.changes) {
      const S = y.get(C.field) || /* @__PURE__ */ new Map(), $ = JSON.stringify(C.values || [C.value]), L = S.get($);
      L ? L.sources.push(k) : S.set($, { ...C, sources: [k] }), y.set(C.field, S);
    }
    const v = [], g = [];
    for (const [m, k] of y)
      k.size > 1 ? g.push({ field: m, proposals: [...k.values()] }) : v.push([...k.values()][0]);
    return { status: g.length ? "ambiguous" : v.some((m) => m.status === "conflict") ? "conflict" : v.some((m) => m.status === "ready") ? "ready" : "unchanged", changes: v, conflicts: g, attempts: s };
  }
  return { status: "unmatched", changes: [], conflicts: [], attempts: s };
}
const Pp = /* @__PURE__ */ new Set(["english", "en", "german", "deutsch", "de", "french", "français", "fr", "arabic", "ar"]), wg = /^[\p{L}\p{M}][\p{L}\p{M} .’'\-]*$/u;
function Dp(e) {
  const t = e.trim().split(/\s+/);
  return e.length <= 120 && t.length >= 2 && t.length <= 7 && wg.test(e);
}
function wl(e) {
  const t = e.split(",").map((i) => i.trim());
  return t.length === 2 && t.every((i) => i && wg.test(i)) && e.length <= 120;
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
function $O(e, t = []) {
  if (typeof e != "string" || !e || e.length > 2e3 || as(e).length > 64) return [];
  const i = as(e), a = i.length - 1, n = i[a], r = i.slice(0, -1), s = Jo(e), c = [], d = [];
  let y = n, v = (Z) => Z, g = (Z) => Z, m = "", k = si("title"), C = !1;
  const S = /^(.*\S) \(((?:18|19|20)\d{2})\)$/.exec(y), $ = !S && /^(.*\S) ((?:18|19|20)\d{2})$/.exec(y);
  S ? (y = S[1], v = (Z) => un(" (", "last", Z, si("year", { suffix: ")" })), c.push("year-parentheses")) : $ && (y = $[1], v = (Z) => un(" ", "last", Z, si("year")), c.push("year-trailing"), d.push("year-may-be-title"));
  const L = /^(.*\S) by (.+)$/.exec(y), I = /^(.*\S) - (.+)$/.exec(y), P = L || I, N = !L && I && (wl(I[1]) || Dp(I[1]) && r.some((Z) => wr(Z) === wr(I[1]))), pe = /^.+ #\d{1,3}(?:\.\d+)? - .+$/.test(y) && y.split(" - ").length === 2;
  N ? (m = I[1], y = I[2], g = (Z) => un(" - ", "first", si("author"), Z), c.push("author-first"), d.push("author-needs-review")) : P && !pe && (Dp(P[2]) || wl(P[2])) && (m = P[2], y = P[1], g = (Z) => un(L ? " by " : " - ", "last", Z, si("author")), c.push(L ? "author-by" : "author-dash"), r.some((Z) => wr(Z) === wr(m)) ? c.push("author-folder-agrees") : d.push("author-needs-review"));
  const Q = /^(.*\S) #(\d{1,3}(?:\.\d+)?) - (.+)$/.exec(y), x = /^(\d{1,3}(?:\.\d+)?)\. (.+)$/.exec(y);
  if (Q)
    k = un(" #", "first", si("series"), un(" - ", "first", si("seriesNumber"), si("title"))), C = !0, c.push("series-inline");
  else if (x && r.length) {
    const Z = r.at(-1);
    !wl(Z) && !(m && wr(Z) === wr(m)) && !Pp.has(Z.toLowerCase()) && !Z.includes("_") && (k = un(". ", "first", si("seriesNumber"), si("title")), s.parts[a - 1] = si("series"), C = !0, c.push("series-folder"), d.push("series-needs-review"));
  }
  if (s.parts[a] = v(g(k)), !m) {
    const Z = C ? a - 2 : a - 1;
    Z >= 0 && wl(i[Z]) && (s.parts[Z] = si("author"), c.push("author-comma"), d.push("author-needs-review"));
  }
  for (let Z = r.length - 1; Z >= 0; Z--) {
    if (s.parts[Z].field !== "ignore") continue;
    const se = r[Z], H = se.indexOf("_"), Y = H < 0 ? se : se.slice(0, H);
    if (Pp.has(Y.toLowerCase())) {
      s.parts[Z] = H < 0 ? si("language") : un("_", "first", si("language"), si("genre", { underscores: !0 })), c.push(H < 0 ? "language-folder" : "language-genre-folder");
      break;
    }
  }
  const B = [], K = (Z, se, H, Y) => {
    const R = Qo(e, se);
    if (!["ready", "conflict", "unchanged"].includes(R.status)) return;
    const G = t.slice(0, 40).map((ae) => typeof ae == "string" ? ae : ae.path).filter((ae) => typeof ae == "string"), X = G.filter((ae) => ["ready", "conflict", "unchanged"].includes(Qo(ae, se).status)).length;
    B.push({ id: Z, rule: se, clues: H, warnings: [...new Set(Y)], preview: R.changes, matched: X, total: G.length });
  };
  return c.length && K("detected", s, c, d), K("filename", Jo(e), ["filename-title"], /(?:^|\D)(?:18|19|20)\d{2}(?:\D|$)/.test(n) ? ["year-may-be-title"] : []), B;
}
const xO = { class: "library-inference-suggestions" }, OO = ["disabled"], NO = {
  value: "",
  disabled: ""
}, RO = ["value"], IO = {
  key: 0,
  "aria-live": "polite"
}, LO = {
  __name: "InferenceSuggestions",
  props: { path: { type: String, default: "" }, sample: { type: Array, default: () => [] }, rule: { type: Object, default: null } },
  emits: ["choose"],
  setup(e, { emit: t }) {
    const i = e, a = t, n = /* @__PURE__ */ z(""), r = j(() => $O(i.path, i.sample)), s = j(() => r.value.find((v) => v.id === n.value)), c = j(() => ({
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
    })), d = j(() => ({
      "year-may-be-title": _("library", "A year-like number may belong to the title. Check before applying."),
      "author-needs-review": _("library", "A name-shaped phrase may be a title or several people. Check the author; commas are preserved."),
      "series-needs-review": _("library", "Check that the parent folder names a series and the number is its position.")
    }));
    qe(() => i.path, () => {
      n.value = "";
    }), qe(() => JSON.stringify(i.rule), (v) => {
      s.value && JSON.stringify(s.value.rule) !== v && (n.value = "");
    });
    function y(v) {
      n.value = v.target.value, s.value && a("choose", JSON.parse(JSON.stringify(s.value.rule)));
    }
    return (v, g) => (h(), p("div", xO, [
      l("label", null, [
        he(Ge, {
          text: u(_)("library", "Suggest editable assignments from the selected example. Check the live preview and other books before applying. Matching counts describe this page and its structure, not verified metadata.") + (s.value ? `

` + s.value.clues.map((m) => c.value[m]).join(`
`) : "")
        }, {
          default: ke(() => [
            ie(o(u(_)("library", "Suggest fields")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        ye(l("select", {
          "onUpdate:modelValue": g[0] || (g[0] = (m) => n.value = m),
          disabled: !r.value.length,
          onChange: y
        }, [
          l("option", NO, o(u(_)("library", "Choose a suggestion")), 1),
          (h(!0), p(W, null, fe(r.value, (m) => (h(), p("option", {
            key: m.id,
            value: m.id
          }, o(m.id === "filename" ? u(_)("library", "Title from filename") : u(_)("library", "Suggested assignments")), 9, RO))), 128))
        ], 40, OO), [
          [nt, n.value]
        ])
      ]),
      s.value ? (h(), p("div", IO, [
        l("p", null, o(u(_)("library", "{matched} of {total} paths on this page match this structure.", { matched: s.value.matched, total: s.value.total })), 1),
        (h(!0), p(W, null, fe(s.value.warnings, (m) => (h(), p("p", {
          key: m,
          class: "library-inference-suggestion-warning"
        }, o(d.value[m]), 1))), 128))
      ])) : A("", !0)
    ]));
  }
}, PO = ["aria-label", "aria-busy"], DO = {
  key: 0,
  role: "alert"
}, FO = {
  key: 1,
  role: "status"
}, MO = { class: "library-inference-step" }, UO = ["disabled"], zO = ["value"], jO = ["disabled", "placeholder"], BO = { class: "library-inference-checkbox" }, HO = ["disabled"], VO = ["disabled"], qO = {
  key: 0,
  class: "library-inference-path"
}, GO = ["aria-label"], KO = ["disabled"], WO = ["disabled", "onClick"], YO = {
  key: 2,
  class: "library-inference-step"
}, ZO = { class: "library-inference-editor" }, XO = { class: "library-inference-controls" }, JO = { class: "library-inference-scope" }, QO = ["value"], eN = ["open"], tN = { value: "guided" }, iN = { value: "pattern" }, aN = { value: "folders" }, nN = {
  key: 0,
  role: "status"
}, rN = { class: "library-inference-checkbox" }, lN = {
  key: 2,
  class: "library-inference-pattern",
  open: ""
}, sN = ["aria-label"], oN = ["title"], uN = {
  key: 0,
  "aria-live": "polite",
  "aria-atomic": "true"
}, cN = { class: "library-inference-live-status" }, dN = { key: 1 }, fN = {
  key: 0,
  class: "library-inference-author-chips"
}, hN = {
  key: 1,
  dir: "auto"
}, pN = { dir: "auto" }, vN = { key: 2 }, bN = { dir: "auto" }, gN = { key: 3 }, mN = { key: 2 }, yN = { key: 1 }, _N = {
  class: "library-inference-path",
  dir: "ltr"
}, wN = { class: "library-inference-step" }, kN = { value: "all" }, SN = ["value"], CN = { key: 0 }, TN = { class: "library-inference-path" }, AN = {
  key: 1,
  class: "library-inference-table-scroll"
}, EN = { key: 2 }, $N = ["aria-label"], xN = ["disabled"], ON = ["disabled"], NN = {
  __name: "PathInference",
  props: { requestToken: { type: String, default: "" } },
  setup(e) {
    const t = /* @__PURE__ */ z([]), i = /* @__PURE__ */ z(""), a = /* @__PURE__ */ z(""), n = /* @__PURE__ */ z(!0), r = /* @__PURE__ */ z([]), s = /* @__PURE__ */ z(1), c = /* @__PURE__ */ z(!1), d = /* @__PURE__ */ z(!1), y = /* @__PURE__ */ z(""), v = /* @__PURE__ */ z(""), g = /* @__PURE__ */ z(""), m = /* @__PURE__ */ z(""), k = /* @__PURE__ */ z(""), C = /* @__PURE__ */ z([]), S = /* @__PURE__ */ z(null), $ = /* @__PURE__ */ z("guided"), L = /* @__PURE__ */ z(0), I = /* @__PURE__ */ z("%folders%/%title%.%extension%"), P = /* @__PURE__ */ z("all"), N = /* @__PURE__ */ z(!0);
    let pe = 0;
    const Q = j(() => [
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
    ]), x = j(() => Object.fromEntries(Q.value)), B = j(() => ({
      ready: _("library", "Empty field suggestions"),
      conflict: _("library", "Existing values need review"),
      unmatched: _("library", "Unmatched paths"),
      ambiguous: _("library", "Ambiguous matches"),
      invalid: _("library", "Invalid pattern or value"),
      unchanged: _("library", "No changes")
    })), K = j(() => r.value.map((le) => ({ ...le, ...$.value === "folders" ? EO(le.path, k.value, C.value, le.current) : $.value === "guided" ? Qo(le.path, S.value, le.current) : gg(le.path, I.value, le.current) }))), Z = j(() => K.value.find((le) => le.path === g.value)), se = j(() => K.value.filter((le) => P.value === "all" || le.status === P.value)), H = j(() => [...new Set(r.value.filter((le) => le.path.includes("/")).map((le) => le.path.split("/")[0]))]);
    function Y(le) {
      a.value = [a.value.replace(/\/$/, ""), le].filter(Boolean).join("/"), Me();
    }
    function R() {
      a.value = a.value.replace(/\/$/, "").split("/").slice(0, -1).join("/"), Me();
    }
    const G = j(() => K.value.reduce((le, te) => (le[te.status] = (le[te.status] || 0) + 1, le), {})), X = j(() => i.value !== m.value || a.value.replace(/^\/+|\/+$/g, "") !== k.value), ae = j(() => as(g.value));
    function J() {
      !S.value && g.value && (S.value = Jo(g.value));
    }
    function be() {
      S.value = Jo(g.value), L.value++, $.value = "guided";
    }
    function Te(le) {
      S.value = le, L.value++, $.value = "guided";
    }
    function Le(le) {
      Te(le), N.value = !1;
    }
    function Oe(le) {
      I.value = le, $.value = "pattern";
    }
    async function Me(le = 1) {
      const te = ++pe;
      d.value = !0, y.value = "", r.value = [];
      try {
        const q = new URLSearchParams();
        i.value && (q.set("rootId", i.value), q.set("folder", a.value), q.set("recursive", n.value ? "1" : "0"), q.set("page", String(le)));
        const Se = await fetch(`${Lt("/apps/library/api/inference/sample")}?${q}`, { credentials: "same-origin", cache: "no-store" });
        if (!Se.ok) throw new Error(_("library", "Could not load this folder. Check its path and your access."));
        const it = await Se.json();
        if (te !== pe) return;
        if (t.value = it.roots, !i.value && (i.value = String(it.roots[0]?.id || ""), i.value))
          return Me();
        m.value !== i.value && (C.value = []), m.value = i.value;
        const ne = it.roots.find((T) => String(T.id) === i.value)?.path.replace(/\/$/, "") || "";
        k.value = it.scope.slice(ne.length).replace(/^\//, ""), r.value = it.items || [], s.value = it.page || 1, c.value = !!it.hasNext, v.value = it.scope || "", g.value = r.value[0]?.path || "", J();
      } catch (q) {
        te === pe && (y.value = q.message);
      } finally {
        te === pe && (d.value = !1);
      }
    }
    function Ze(le) {
      le.rootId === m.value && (C.value = le.assignments);
    }
    function ct() {
      a.value = "", Me();
    }
    return Tt(() => Me()), (le, te) => (h(), p("section", {
      class: "library-inference",
      "aria-label": u(_)("library", "Extract metadata from paths"),
      "aria-busy": d.value ? "true" : "false"
    }, [
      l("h1", null, [
        he(Ge, {
          text: u(_)("library", "Preview a naming rule, select fields and review before applying. Source files are never changed.")
        }, {
          default: ke(() => [
            ie(o(u(_)("library", "Extract metadata from paths")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      y.value ? (h(), p("p", DO, o(y.value), 1)) : A("", !0),
      d.value ? (h(), p("p", FO, o(u(_)("library", "Loading or saving…")), 1)) : A("", !0),
      l("section", MO, [
        l("h2", null, o(u(_)("library", "1. Choose a folder")), 1),
        l("form", {
          class: "library-inference-scope",
          onSubmit: te[3] || (te[3] = Ce((q) => Me(), ["prevent"]))
        }, [
          l("label", null, [
            he(Ge, {
              text: u(_)("library", "Up to 40 accessible indexed books per page. Counts below describe this sample, not the entire folder.")
            }, {
              default: ke(() => [
                ie(o(u(_)("library", "Library root")), 1)
              ]),
              _: 1
            }, 8, ["text"]),
            ye(l("select", {
              "onUpdate:modelValue": te[0] || (te[0] = (q) => i.value = q),
              disabled: d.value || !t.value.length,
              onChange: ct
            }, [
              (h(!0), p(W, null, fe(t.value, (q) => (h(), p("option", {
                key: q.id,
                value: String(q.id)
              }, o(q.label), 9, zO))), 128))
            ], 40, UO), [
              [nt, i.value]
            ])
          ]),
          l("label", null, [
            ie(o(u(_)("library", "Subfolder relative to this root")), 1),
            ye(l("input", {
              "onUpdate:modelValue": te[1] || (te[1] = (q) => a.value = q),
              type: "text",
              disabled: d.value,
              placeholder: u(_)("library", "Leave empty for the whole root")
            }, null, 8, jO), [
              [Ue, a.value]
            ])
          ]),
          l("label", BO, [
            ye(l("input", {
              "onUpdate:modelValue": te[2] || (te[2] = (q) => n.value = q),
              type: "checkbox",
              disabled: d.value
            }, null, 8, HO), [
              [sa, n.value]
            ]),
            ie(o(u(_)("library", "Include subfolders")), 1)
          ]),
          l("button", {
            class: "button primary",
            disabled: d.value || !i.value
          }, o(u(_)("library", "Load sample")), 9, VO)
        ], 32),
        v.value ? (h(), p("p", qO, o(v.value), 1)) : A("", !0),
        l("div", {
          class: "library-inference-presets",
          "aria-label": u(_)("library", "Folders in this sample")
        }, [
          a.value ? (h(), p("button", {
            key: 0,
            class: "button secondary",
            disabled: d.value,
            onClick: R
          }, o(u(_)("library", "Parent folder")), 9, KO)) : A("", !0),
          (h(!0), p(W, null, fe(H.value, (q) => (h(), p("button", {
            key: q,
            class: "button secondary",
            disabled: d.value,
            onClick: (Se) => Y(q)
          }, o(q) + "/", 9, WO))), 128))
        ], 8, GO)
      ]),
      r.value.length ? (h(), p("section", YO, [
        l("h2", null, o(u(_)("library", "2. Describe the structure")), 1),
        l("div", ZO, [
          l("div", XO, [
            l("div", JO, [
              l("label", null, [
                he(Ge, {
                  text: u(_)("library", "Assignments stay the same when you select another example. Reset them to use a different folder structure.")
                }, {
                  default: ke(() => [
                    ie(o(u(_)("library", "Example path")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                ye(l("select", {
                  "onUpdate:modelValue": te[4] || (te[4] = (q) => g.value = q),
                  onChange: te[5] || (te[5] = (q) => J())
                }, [
                  (h(!0), p(W, null, fe(r.value, (q) => (h(), p("option", {
                    key: q.id,
                    value: q.path
                  }, o(q.path), 9, QO))), 128))
                ], 544), [
                  [nt, g.value]
                ])
              ])
            ]),
            he(LO, {
              path: g.value,
              sample: r.value,
              rule: $.value === "guided" ? S.value : null,
              onChoose: Le
            }, null, 8, ["path", "sample", "rule"]),
            l("details", {
              class: "library-inference-customize",
              open: N.value,
              onToggle: te[9] || (te[9] = (q) => N.value = q.target.open)
            }, [
              l("summary", null, o(u(_)("library", "Edit pattern")), 1),
              l("label", null, [
                ie(o(u(_)("library", "Rule editor")), 1),
                ye(l("select", {
                  "onUpdate:modelValue": te[6] || (te[6] = (q) => $.value = q)
                }, [
                  l("option", tN, o(u(_)("library", "Guided assignments")), 1),
                  l("option", iN, o(u(_)("library", "Advanced pattern")), 1),
                  l("option", aN, o(u(_)("library", "Folder rules")), 1)
                ], 512), [
                  [nt, $.value]
                ])
              ]),
              $.value === "folders" ? (h(), De(AO, {
                key: 0,
                "root-id": m.value,
                folder: k.value,
                "request-token": e.requestToken,
                disabled: d.value,
                "scope-pending": X.value,
                onLoaded: Ze
              }, null, 8, ["root-id", "folder", "request-token", "disabled", "scope-pending"])) : A("", !0),
              $.value === "guided" && S.value ? (h(), p(W, { key: 1 }, [
                he(Lp, {
                  mode: "guided",
                  rule: S.value,
                  "request-token": e.requestToken,
                  onChooseRule: Te
                }, null, 8, ["rule", "request-token"]),
                l("button", {
                  class: "button secondary",
                  onClick: be
                }, o(u(_)("library", "Reset assignments from this example")), 1),
                ae.value.length !== S.value.parts.length ? (h(), p("p", nN, o(u(_)("library", "This example has a different folder depth and does not match the rule.")), 1)) : A("", !0),
                (h(!0), p(W, null, fe(S.value.parts, (q, Se) => (h(), p("div", {
                  key: `${L.value}-${Se}`
                }, [
                  l("h3", null, o(Se === S.value.parts.length - 1 ? u(_)("library", "Filename") : u(_)("library", "Folder")) + " " + o(Se + 1), 1),
                  he(Z4, {
                    node: q,
                    value: ae.value[Se] || "",
                    fields: Q.value
                  }, null, 8, ["node", "value", "fields"])
                ]))), 128)),
                l("label", rN, [
                  ye(l("input", {
                    "onUpdate:modelValue": te[7] || (te[7] = (q) => S.value.combineAuthors = q),
                    type: "checkbox"
                  }, null, 512), [
                    [sa, S.value.combineAuthors]
                  ]),
                  he(Ge, {
                    text: u(_)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + " " + u(_)("library", "Each author is stored separately and can be used to filter the catalogue.")
                  }, {
                    default: ke(() => [
                      ie(o(u(_)("library", "Combine authors from multiple parts")), 1)
                    ]),
                    _: 1
                  }, 8, ["text"])
                ])
              ], 64)) : A("", !0),
              $.value === "pattern" ? (h(), p("details", lN, [
                l("summary", null, o(u(_)("library", "Pattern and presets")), 1),
                he(Lp, {
                  pattern: I.value,
                  "request-token": e.requestToken,
                  onChoose: Oe
                }, {
                  default: ke(() => [
                    l("label", null, [
                      he(Ge, {
                        text: u(_)("library", "Placeholders capture text. Separators must match exactly. %folder% ignores one folder; %folders%/ ignores any folder depth; %ignore% ignores one filename part.") + `

` + Q.value.map((q) => `%${q[0]}%`).join(" · ")
                      }, {
                        default: ke(() => [
                          ie(o(u(_)("library", "Advanced pattern")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ye(l("input", {
                        "onUpdate:modelValue": te[8] || (te[8] = (q) => I.value = q),
                        maxlength: "1000",
                        spellcheck: "false",
                        dir: "ltr"
                      }, null, 512), [
                        [Ue, I.value]
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["pattern", "request-token"])
              ])) : A("", !0)
            ], 40, eN)
          ]),
          l("aside", {
            class: "library-inference-live",
            "aria-label": u(_)("library", "Live preview")
          }, [
            l("h3", null, o(u(_)("library", "Live preview")), 1),
            l("p", {
              class: "library-inference-live-path",
              title: g.value
            }, o(g.value), 9, oN),
            Z.value ? (h(), p("div", uN, [
              l("p", cN, o(B.value[Z.value.status]), 1),
              $.value === "folders" ? (h(), De(vd, {
                key: 0,
                result: Z.value,
                labels: x.value,
                statuses: B.value
              }, null, 8, ["result", "labels", "statuses"])) : A("", !0),
              Z.value.changes.length ? (h(), p("dl", dN, [
                (h(!0), p(W, null, fe(Z.value.changes, (q) => (h(), p("div", {
                  key: q.field,
                  class: Ee(["library-inference-live-field", `library-inference-live-field--${q.status}`])
                }, [
                  l("dt", null, o(x.value[q.field]), 1),
                  l("dd", null, [
                    q.field === "author" && q.values ? (h(), p("span", fN, [
                      (h(!0), p(W, null, fe(q.values, (Se) => (h(), p("strong", {
                        key: Se,
                        dir: "auto"
                      }, o(Se), 1))), 128))
                    ])) : (h(), p("strong", hN, o(q.value || "—"), 1)),
                    l("small", null, [
                      ie(o(u(_)("library", "Current value")) + ": ", 1),
                      l("span", pN, o(q.before || "—"), 1)
                    ]),
                    q.raw !== q.value ? (h(), p("small", vN, [
                      ie(o(u(_)("library", "Source text")) + ": ", 1),
                      l("span", bN, o(q.raw), 1)
                    ])) : A("", !0),
                    l("small", null, o(B.value[q.status]), 1),
                    q.sources ? (h(), p("small", gN, o(u(_)("library", "Matched rule")) + ": " + o(q.sources.map((Se) => Se.name).join(", ")), 1)) : A("", !0)
                  ])
                ], 2))), 128))
              ])) : Z.value.conflicts?.length ? A("", !0) : (h(), p("p", mN, o(u(_)("library", "No fields extracted from this example. Check the rule, separators and transformations.")), 1))
            ])) : A("", !0),
            $.value === "pattern" ? (h(), p("details", yN, [
              l("summary", null, o(u(_)("library", "Active pattern")), 1),
              l("code", _N, o(I.value), 1)
            ])) : A("", !0)
          ], 8, sN)
        ])
      ])) : A("", !0),
      l("section", wN, [
        l("h2", null, o(u(_)("library", "3. Review the sample")), 1),
        l("label", null, [
          he(Ge, {
            text: u(_)("library", "Fill empty fields first. Existing values are flagged for review. No changes are applied in this preview.")
          }, {
            default: ke(() => [
              ie(o(u(_)("library", "Show results")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ye(l("select", {
            "onUpdate:modelValue": te[10] || (te[10] = (q) => P.value = q)
          }, [
            l("option", kN, o(u(_)("library", "All")) + " (" + o(K.value.length) + ")", 1),
            (h(!0), p(W, null, fe(B.value, (q, Se) => (h(), p("option", {
              key: Se,
              value: Se
            }, o(q) + " (" + o(G.value[Se] || 0) + ")", 9, SN))), 128))
          ], 512), [
            [nt, P.value]
          ])
        ]),
        !se.value.length && !d.value ? (h(), p("p", CN, o(u(_)("library", "No sample results here. Try another folder, page or result filter.")), 1)) : A("", !0),
        (h(!0), p(W, null, fe(se.value, (q) => (h(), p("details", {
          key: q.id,
          class: "library-inference-result"
        }, [
          l("summary", null, [
            l("span", TN, o(q.path), 1),
            l("strong", null, o(B.value[q.status]), 1)
          ]),
          $.value === "folders" ? (h(), De(vd, {
            key: 0,
            result: q,
            labels: x.value,
            statuses: B.value
          }, null, 8, ["result", "labels", "statuses"])) : A("", !0),
          q.changes.length ? (h(), p("div", AN, [
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
                (h(!0), p(W, null, fe(q.changes, (Se) => (h(), p("tr", {
                  key: Se.field
                }, [
                  l("th", null, o(x.value[Se.field]), 1),
                  l("td", null, o(Se.before || "—"), 1),
                  l("td", null, [
                    ie(o(Se.value), 1),
                    l("small", null, o(B.value[Se.status]), 1)
                  ]),
                  l("td", null, o(Se.raw), 1)
                ]))), 128))
              ])
            ])
          ])) : q.conflicts?.length ? A("", !0) : (h(), p("p", EN, o(u(_)("library", "Check separators, folder depth and field assignments. A unique interpretation is required.")), 1))
        ]))), 128)),
        l("nav", {
          class: "library-inference-presets",
          "aria-label": u(_)("library", "Sample pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: d.value || s.value === 1,
            onClick: te[11] || (te[11] = (q) => Me(s.value - 1))
          }, o(u(_)("library", "Previous page")), 9, xN),
          l("span", null, o(s.value), 1),
          l("button", {
            class: "button secondary",
            disabled: d.value || !c.value,
            onClick: te[12] || (te[12] = (q) => Me(s.value + 1))
          }, o(u(_)("library", "Next page")), 9, ON)
        ], 8, $N)
      ]),
      he(_g, {
        class: "library-inference-step",
        results: K.value,
        labels: x.value,
        "request-token": e.requestToken,
        disabled: d.value || X.value,
        context: JSON.stringify({ mode: $.value, pattern: $.value === "pattern" ? I.value : void 0, rule: $.value === "guided" ? S.value : void 0, folderRules: $.value === "folders" ? C.value : void 0, rootId: m.value, folder: k.value }),
        onChanged: te[13] || (te[13] = (q) => Me(s.value))
      }, null, 8, ["results", "labels", "request-token", "disabled", "context"]),
      he($4, {
        definition: { mode: $.value, pattern: I.value, rule: S.value, rootId: m.value, folder: k.value, recursive: n.value },
        labels: x.value,
        statuses: B.value,
        "request-token": e.requestToken,
        disabled: d.value || X.value || !m.value
      }, null, 8, ["definition", "labels", "statuses", "request-token", "disabled"])
    ], 8, PO));
  }
}, RN = ["aria-label", "title", "onClick"], IN = {
  key: 0,
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, LN = { id: "library-sidebar-filters-heading" }, PN = ["aria-label"], DN = ["value"], FN = ["name", "value"], MN = ["value"], UN = ["value"], zN = {
  class: "library-filter-group",
  "data-library-filter-group": "content"
}, jN = ["title"], BN = ["placeholder"], HN = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "q"
}, VN = { value: "" }, qN = ["value"], GN = { class: "library-publisher-filter" }, KN = { for: "library-publisher-search" }, WN = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], YN = ["value"], ZN = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, XN = {
  key: 1,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, JN = ["id", "aria-selected"], QN = ["onClick"], eR = { class: "library-publication-filter" }, tR = { for: "library-publication-search" }, iR = ["placeholder", "aria-expanded"], aR = ["value"], nR = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, rR = {
  key: 1,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, lR = ["onClick"], sR = { class: "library-year-filter" }, oR = { for: "library-year-search" }, uR = ["placeholder", "aria-expanded"], cR = ["value"], dR = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, fR = {
  key: 1,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, hR = ["onClick"], pR = { class: "library-creator-filter" }, vR = { for: "library-creator-search" }, bR = ["placeholder", "title", "aria-expanded"], gR = ["value"], mR = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, yR = {
  key: 1,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, _R = ["onClick"], wR = { class: "library-tag-filter" }, kR = { for: "library-tag-search" }, SR = ["placeholder", "aria-expanded"], CR = ["value"], TR = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, AR = ["onClick"], ER = { value: "" }, $R = ["value"], xR = {
  class: "library-filter-group",
  "data-library-filter-group": "location"
}, OR = { value: "" }, NR = ["value"], RR = { class: "library-folder-filter" }, IR = { for: "library-folder-search" }, LR = ["placeholder", "title", "aria-expanded"], PR = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, DR = ["onClick"], FR = {
  class: "library-filter-group",
  "data-library-filter-group": "review"
}, MR = { value: "" }, UR = ["value"], zR = { value: "" }, jR = ["value"], BR = { class: "library-subject-filter" }, HR = { for: "library-subject-search" }, VR = ["placeholder", "title", "aria-expanded"], qR = ["value"], GR = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, KR = {
  key: 1,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, WR = ["onClick"], YR = { class: "library-classification-filter" }, ZR = { for: "library-classification-search" }, XR = ["placeholder", "title", "aria-expanded"], JR = ["value"], QR = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, eI = ["onClick"], tI = { value: "" }, iI = { value: "1" }, aI = {
  class: "library-filter-group",
  "data-library-filter-group": "personal"
}, nI = {
  type: "submit",
  class: "button primary"
}, rI = ["href"], lI = ["lang", "dir"], sI = ["aria-label"], oI = ["href", "aria-label", "title", "onClick"], uI = ["title"], cI = ["href"], dI = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, fI = { class: "library-review-header" }, hI = { class: "library-muted library-catalogue-eyebrow" }, pI = { id: "library-review-heading" }, vI = ["aria-label"], bI = ["href", "aria-current", "onClick"], gI = ["aria-label"], mI = ["name", "value"], yI = {
  type: "submit",
  class: "button secondary"
}, _I = ["aria-busy"], wI = { key: 0 }, kI = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, SI = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, CI = { class: "library-metadata-review-workbench-copy" }, TI = { class: "library-muted library-catalogue-eyebrow" }, AI = ["title"], EI = {
  key: 0,
  class: "library-metadata-review-card"
}, $I = {
  class: "library-bidi-human",
  dir: "auto"
}, xI = { class: "library-muted" }, OI = {
  class: "library-bidi-machine",
  dir: "ltr"
}, NI = { class: "library-metadata-review-fields" }, RI = {
  class: "library-bidi-human",
  dir: "auto"
}, II = {
  class: "library-bidi-human",
  dir: "auto"
}, LI = {
  class: "library-bidi-human",
  dir: "auto"
}, PI = {
  class: "library-bidi-machine",
  dir: "ltr"
}, DI = {
  class: "library-bidi-human",
  dir: "auto"
}, FI = {
  class: "library-bidi-human",
  dir: "auto"
}, MI = ["action"], UI = ["value"], zI = ["value"], jI = ["disabled", "title"], BI = { class: "library-metadata-review-actions" }, HI = ["href"], VI = ["href"], qI = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, GI = ["href"], KI = ["aria-label"], WI = ["onClick"], YI = {
  class: "library-bidi-human",
  dir: "auto"
}, ZI = {
  key: 0,
  class: "library-muted"
}, XI = {
  class: "library-bidi-human",
  dir: "auto"
}, JI = {
  key: 1,
  class: "library-scan-error"
}, QI = {
  class: "library-bidi-human",
  dir: "auto"
}, eL = ["onClick"], tL = ["href", "onClick"], iL = ["aria-label"], aL = ["href"], nL = {
  key: 1,
  class: "library-muted"
}, rL = { key: 0 }, lL = ["href"], sL = {
  key: 3,
  class: "library-muted"
}, oL = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, uL = { class: "library-home-header" }, cL = { class: "library-muted library-catalogue-eyebrow" }, dL = { id: "library-home-heading" }, fL = ["aria-label"], hL = ["aria-label"], pL = ["href", "aria-label", "onClick"], vL = ["title"], bL = { class: "library-empty-actions" }, gL = ["href"], mL = ["href"], yL = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, _L = { id: "library-continue-heading" }, wL = ["href"], kL = {
  key: 0,
  class: "library-home-card-row"
}, SL = ["aria-label", "onClick"], CL = { class: "library-cover-frame" }, TL = ["src"], AL = { class: "library-cover-summary" }, EL = ["onClick"], $L = { dir: "auto" }, xL = {
  key: 0,
  class: "library-cover-creator"
}, OL = { dir: "auto" }, NL = ["href", "onClick"], RL = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, IL = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, LL = { id: "library-recent-heading" }, PL = ["href"], DL = {
  key: 0,
  class: "library-home-card-row"
}, FL = ["aria-label", "onClick"], ML = { class: "library-cover-frame" }, UL = ["src"], zL = { class: "library-cover-summary" }, jL = ["onClick"], BL = { dir: "auto" }, HL = {
  key: 0,
  class: "library-cover-creator"
}, VL = { dir: "auto" }, qL = ["href", "onClick"], GL = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, KL = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, WL = { id: "library-home-shelves-heading" }, YL = ["href"], ZL = ["aria-label"], XL = ["href"], JL = { dir: "auto" }, QL = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, eP = {
  key: 1,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, tP = { id: "library-home-attention-heading" }, iP = { class: "library-muted" }, aP = ["href"], nP = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, rP = { class: "library-home-header" }, lP = { class: "library-muted library-catalogue-eyebrow" }, sP = { id: "library-shelves-landing-heading" }, oP = ["aria-label"], uP = ["aria-label"], cP = ["href", "aria-label", "onClick"], dP = ["title"], fP = { class: "library-empty-actions" }, hP = ["href"], pP = ["href"], vP = ["aria-label"], bP = { class: "library-shelf-tree" }, gP = {
  key: 2,
  class: "library-shelves-empty",
  role: "status"
}, mP = { class: "library-muted" }, yP = { class: "library-empty-actions" }, _P = ["href"], wP = ["href"], kP = ["aria-busy"], SP = { class: "library-catalogue-header" }, CP = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, TP = ["aria-label"], AP = { class: "library-mobile-filter-count" }, EP = ["aria-label"], $P = ["value"], xP = ["name", "value"], OP = { class: "library-mobile-filter-group" }, NP = { class: "library-quick-filter-search" }, RP = ["placeholder"], IP = { value: "" }, LP = ["value"], PP = { class: "library-publisher-filter" }, DP = { for: "library-mobile-publisher-search" }, FP = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], MP = ["value"], UP = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, zP = {
  key: 1,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, jP = ["id", "aria-selected"], BP = ["onClick"], HP = { class: "library-publication-filter" }, VP = { for: "library-mobile-publication-search" }, qP = ["placeholder", "aria-expanded"], GP = ["value"], KP = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, WP = {
  key: 1,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, YP = ["onClick"], ZP = { class: "library-year-filter" }, XP = { for: "library-mobile-year-search" }, JP = ["placeholder", "aria-expanded"], QP = ["value"], e8 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, t8 = {
  key: 1,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, i8 = ["onClick"], a8 = { class: "library-creator-filter" }, n8 = { for: "library-mobile-creator-search" }, r8 = ["placeholder", "title", "aria-expanded"], l8 = ["value"], s8 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, o8 = {
  key: 1,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, u8 = ["onClick"], c8 = { value: "" }, d8 = ["value"], f8 = { class: "library-subject-filter" }, h8 = { for: "library-mobile-subject-search" }, p8 = ["placeholder", "title", "aria-expanded"], v8 = ["value"], b8 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, g8 = {
  key: 1,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, m8 = ["onClick"], y8 = { class: "library-classification-filter" }, _8 = { for: "library-mobile-classification-search" }, w8 = ["placeholder", "title", "aria-expanded"], k8 = ["value"], S8 = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, C8 = ["onClick"], T8 = { class: "library-mobile-filter-group" }, A8 = { value: "" }, E8 = ["value"], $8 = { class: "library-folder-filter" }, x8 = { for: "library-mobile-folder-search" }, O8 = ["placeholder", "title", "aria-expanded"], N8 = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, R8 = ["onClick"], I8 = { class: "library-mobile-filter-group" }, L8 = { value: "" }, P8 = ["value"], D8 = { value: "" }, F8 = ["value"], M8 = { value: "" }, U8 = { value: "1" }, z8 = { class: "library-mobile-filter-group" }, j8 = { class: "library-tag-filter" }, B8 = { for: "library-tag-search" }, H8 = ["placeholder", "aria-expanded"], V8 = ["value"], q8 = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, G8 = ["onClick"], K8 = { value: "title" }, W8 = { value: "recent" }, Y8 = { value: "publicationDate" }, Z8 = { value: "publication" }, X8 = { value: "lastOpened" }, J8 = { value: "format" }, Q8 = { value: "compact" }, e5 = { value: "list" }, t5 = { class: "library-mobile-filter-actions" }, i5 = ["href"], a5 = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, n5 = ["aria-label"], r5 = { class: "library-catalogue-control-band" }, l5 = {
  id: "library-collections",
  class: "library-saved-collections"
}, s5 = ["title"], o5 = ["action", "title"], u5 = ["value"], c5 = ["value"], d5 = { class: "library-control-label" }, f5 = ["placeholder", "disabled"], h5 = ["disabled", "title"], p5 = ["aria-label"], v5 = ["name", "value"], b5 = {
  class: "library-sort-control",
  "data-library-control": "sort"
}, g5 = { value: "title" }, m5 = { value: "recent" }, y5 = { value: "publicationDate" }, _5 = { value: "publication" }, w5 = { value: "lastOpened" }, k5 = { value: "format" }, S5 = ["aria-label"], C5 = ["aria-pressed"], T5 = ["aria-pressed"], A5 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, E5 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, $5 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, x5 = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, O5 = { key: 0 }, N5 = { key: 1 }, R5 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, I5 = { class: "library-muted library-catalogue-eyebrow" }, L5 = ["title"], P5 = ["aria-label"], D5 = { key: 0 }, F5 = { key: 1 }, M5 = { key: 2 }, U5 = ["aria-label"], z5 = { key: 0 }, j5 = { key: 1 }, B5 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, H5 = { class: "library-muted library-catalogue-eyebrow" }, V5 = ["title"], q5 = ["aria-label"], G5 = ["href"], K5 = {
  key: 0,
  class: "library-notice"
}, W5 = { class: "library-publication-issue-label" }, Y5 = ["href"], Z5 = { class: "library-muted" }, X5 = {
  key: 1,
  class: "library-publication-unknown-issues"
}, J5 = ["title"], Q5 = ["href"], eD = { class: "library-catalogue-status-row" }, tD = { class: "library-muted library-filter-result-summary" }, iD = ["aria-label"], aD = { class: "library-pagination-range" }, nD = { key: 0 }, rD = ["href"], lD = {
  key: 1,
  class: "library-muted"
}, sD = ["href"], oD = {
  key: 3,
  class: "library-muted"
}, uD = ["title"], cD = { class: "library-empty-actions" }, dD = ["href"], fD = { class: "library-muted" }, hD = ["title"], pD = { class: "library-empty-actions" }, vD = ["href"], bD = ["title"], gD = ["aria-label"], mD = ["href", "aria-label", "onClick"], yD = ["title"], _D = {
  key: 1,
  class: "library-muted"
}, wD = { class: "library-empty-actions" }, kD = ["href"], SD = ["title"], CD = { class: "library-empty-actions" }, TD = ["href"], AD = ["aria-label"], ED = { class: "library-list-selection-actions" }, $D = { class: "library-select-visible" }, xD = ["checked"], OD = ["title"], ND = {
  key: 0,
  "aria-live": "polite"
}, RD = ["aria-label"], ID = { value: "" }, LD = { value: "tag" }, PD = { value: "untag" }, DD = { value: "edit" }, FD = { value: "covers" }, MD = { value: "reset" }, UD = ["action"], zD = ["value"], jD = ["placeholder"], BD = ["title"], HD = ["action"], VD = ["value"], qD = ["placeholder"], GD = ["title"], KD = ["action"], WD = ["value"], YD = ["name", "value"], ZD = ["title"], XD = ["action"], JD = ["value"], QD = ["name", "value"], eF = { name: "bulkEditField" }, tF = { value: "publicationType" }, iF = { value: "subtitle" }, aF = { value: "creators" }, nF = { value: "publication" }, rF = { value: "series" }, lF = { value: "seriesNumber" }, sF = { value: "genre" }, oF = { value: "publicationDate" }, uF = { value: "language" }, cF = { value: "publisher" }, dF = { value: "subjects" }, fF = { value: "classifications" }, hF = ["placeholder"], pF = ["title"], vF = ["action"], bF = ["value"], gF = ["name", "value"], mF = ["title"], yF = {
  key: 6,
  class: "library-duplicate-page-status",
  role: "status"
}, _F = {
  key: 7,
  class: "library-catalogue-list-scroll",
  "data-library-catalogue-list-scroll": ""
}, wF = {
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, kF = { class: "hidden-visually" }, SF = { class: "library-catalogue-list-selection" }, CF = { class: "hidden-visually" }, TF = { class: "library-catalogue-list-cover-heading" }, AF = { class: "hidden-visually" }, EF = { scope: "col" }, $F = { scope: "col" }, xF = { scope: "col" }, OF = { scope: "col" }, NF = { scope: "col" }, RF = { scope: "col" }, IF = { scope: "col" }, LF = { class: "library-catalogue-list-selection" }, PF = { class: "library-item-selection" }, DF = ["checked", "aria-label", "onChange"], FF = { class: "library-catalogue-list-cover-cell" }, MF = ["aria-label", "onClick"], UF = ["src"], zF = {
  scope: "row",
  class: "library-catalogue-list-title-cell"
}, jF = ["onClick"], BF = {
  class: "library-bidi-human",
  dir: "auto"
}, HF = ["href"], VF = { class: "library-catalogue-list-creators" }, qF = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, GF = ["aria-label"], KF = ["datetime"], WF = ["aria-label"], YF = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, ZF = ["aria-label"], XF = ["dir"], JF = ["aria-label"], QF = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, e9 = ["aria-label"], t9 = { class: "library-catalogue-list-actions" }, i9 = ["href", "onClick"], a9 = ["onClick"], n9 = { class: "library-item-selection" }, r9 = ["checked", "aria-label", "onChange"], l9 = ["aria-labelledby", "aria-expanded", "onClick"], s9 = ["id"], o9 = ["action", "onSubmit"], u9 = ["value"], c9 = ["value"], d9 = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], f9 = ["data-library-star-error"], h9 = { class: "library-cover-summary" }, p9 = { class: "library-cover-primary" }, v9 = ["href"], b9 = ["id"], g9 = ["onClick"], m9 = {
  class: "library-bidi-human",
  dir: "auto"
}, y9 = {
  key: 1,
  class: "library-cover-creator"
}, _9 = {
  class: "library-bidi-human",
  dir: "auto"
}, w9 = {
  key: 2,
  class: "library-cover-context"
}, k9 = {
  class: "library-bidi-human",
  dir: "auto"
}, S9 = ["aria-label"], C9 = { class: "library-pagination-range" }, T9 = { key: 0 }, A9 = ["href"], E9 = {
  key: 1,
  class: "library-muted"
}, $9 = ["href"], x9 = {
  key: 3,
  class: "library-muted"
}, O9 = { class: "library-sidebar-content" }, N9 = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, R9 = ["role"], I9 = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, L9 = { class: "library-sidebar-publication-header" }, P9 = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, D9 = ["src"], F9 = { class: "library-sidebar-publication-summary" }, M9 = { class: "library-muted library-catalogue-eyebrow" }, U9 = {
  class: "library-bidi-human",
  dir: "auto"
}, z9 = { key: 0 }, j9 = {
  class: "library-bidi-machine",
  dir: "ltr"
}, B9 = { class: "library-detail-drawer-actions" }, H9 = ["href"], V9 = ["aria-label"], q9 = ["aria-current", "onClick"], G9 = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, K9 = { id: "library-sidebar-overview-heading" }, W9 = {
  key: 0,
  class: "library-sidebar-description"
}, Y9 = {
  class: "library-bidi-human",
  dir: "auto"
}, Z9 = { class: "library-detail-drawer-facts" }, X9 = { key: 0 }, J9 = ["href", "title"], Q9 = {
  class: "library-bidi-human",
  dir: "auto"
}, eM = { key: 1 }, tM = ["href", "title"], iM = { key: 1 }, aM = { key: 2 }, nM = { key: 2 }, rM = ["href", "title"], lM = {
  class: "library-bidi-human",
  dir: "auto"
}, sM = { key: 3 }, oM = { class: "library-detail-facet-list" }, uM = ["href", "title", "onClick"], cM = {
  class: "library-bidi-machine",
  dir: "ltr"
}, dM = { key: 4 }, fM = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, hM = { id: "library-sidebar-metadata-heading" }, pM = ["placeholder"], vM = ["onUpdate:modelValue", "aria-label", "placeholder"], bM = ["onUpdate:modelValue", "aria-label"], gM = ["onClick"], mM = {
  key: 0,
  role: "alert"
}, yM = {
  key: 1,
  role: "status"
}, _M = ["disabled"], wM = {
  key: 1,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, kM = { id: "library-sidebar-suggestions-heading" }, SM = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, CM = { id: "library-sidebar-activity-heading" }, TM = { class: "library-detail-drawer-facts" }, AM = { key: 0 }, EM = { key: 1 }, $M = { key: 2 }, xM = { class: "library-detail-drawer-file" }, OM = ["href"], NM = { dir: "ltr" }, RM = {
  key: 1,
  dir: "ltr"
}, IM = ["aria-label"], LM = ["href"], PM = { dir: "auto" }, DM = ["aria-label"], FM = ["href"], MM = { dir: "auto" }, UM = ["aria-label"], zM = ["disabled"], jM = ["disabled"], BM = 20, HM = "/apps/library", VM = 2147483647, qM = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = j_(_, () => `${us()}:${ob()}`), i = e, a = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = Object.freeze([
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
        const F = [...new Set([...b.keys()].filter((xe) => xe === f || xe.startsWith(`${f}[`)))], ve = F.reduce((xe, je) => xe + b.getAll(je).length, 0);
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
    const m = /* @__PURE__ */ Rt({
      ...i.state,
      items: i.state.items || [],
      activeFilters: i.state.activeFilters || {},
      cataloguePagination: i.state.cataloguePagination || {}
    }), k = /* @__PURE__ */ Rt((m.items || []).map((w) => ({ ...w }))), C = j(() => k), S = j(() => m.shelves || []), $ = j(() => m.formats || []), L = j(() => m.publicationTypes?.length ? m.publicationTypes : a), I = j(() => m.publications || []), P = j(() => m.publicationIssueContext || null), N = j(() => m.scanStatuses || []), pe = j(() => m.workflowStatuses || []), Q = j(() => m.cataloguePagination || {
      page: 1,
      limit: 100,
      total: C.value.length,
      visible: C.value.length,
      from: C.value.length > 0 ? 1 : 0,
      to: C.value.length,
      previousUrl: "",
      nextUrl: ""
    }), x = /* @__PURE__ */ Rt({
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
      w !== "status" && (s(w, x[w]) || (x[w] = ""));
    const B = /* @__PURE__ */ z(x.publication), K = /* @__PURE__ */ z(x.q), Z = /* @__PURE__ */ z(!1), se = /* @__PURE__ */ z(null), H = j(() => {
      const w = B.value.trim().toLocaleLowerCase();
      return (w !== "" && se.value !== null ? se.value : I.value).filter((f) => w === "" || f.toLocaleLowerCase().includes(w)).slice(0, BM);
    });
    qe(() => x.publication, (w) => {
      B.value = w || "";
    }), qe(() => x.q, (w) => {
      K.value = w || "";
    });
    let Y = null, R = null, G = 0;
    qe(B, (w) => {
      window.clearTimeout(Y), R?.abort(), R = null, se.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++G;
      Y = window.setTimeout(() => {
        Xg(b, f);
      }, 200);
    });
    const X = /* @__PURE__ */ z(x.publisher), ae = /* @__PURE__ */ z(!1), J = /* @__PURE__ */ z(null), be = j(() => J.value || []);
    qe(() => x.publisher, (w) => {
      X.value = w || "";
    });
    let Te = null, Le = null, Oe = 0;
    qe(X, (w) => {
      window.clearTimeout(Te), Le?.abort(), Le = null, J.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++Oe;
      Te = window.setTimeout(() => {
        qg(b, f);
      }, 200);
    });
    const Me = /* @__PURE__ */ z(x.creator), Ze = /* @__PURE__ */ z(!1), ct = /* @__PURE__ */ z(null), le = j(() => ct.value || []);
    qe(() => x.creator, (w) => {
      Me.value = w || "";
    });
    let te = null, q = null, Se = 0;
    qe(Me, (w) => {
      window.clearTimeout(te), q?.abort(), q = null, ct.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++Se;
      te = window.setTimeout(() => {
        Vg(b, f);
      }, 200);
    });
    const it = /* @__PURE__ */ z(x.folder), ne = /* @__PURE__ */ z(!1), T = /* @__PURE__ */ z(null), O = j(() => T.value || []);
    qe(() => x.folder, (w) => {
      it.value = w || "";
    });
    let D = null, V = null, U = 0;
    qe(it, (w) => {
      window.clearTimeout(D), V?.abort(), V = null, T.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++U;
      D = window.setTimeout(() => {
        Yg(b, f);
      }, 200);
    });
    const ee = /* @__PURE__ */ z(x.subject), re = /* @__PURE__ */ z(!1), ue = /* @__PURE__ */ z(null), me = j(() => ue.value || []);
    qe(() => x.subject, (w) => {
      ee.value = w || "";
    });
    let ce = null, Ne = null, we = 0;
    qe(ee, (w) => {
      window.clearTimeout(ce), Ne?.abort(), Ne = null, ue.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++we;
      ce = window.setTimeout(() => {
        Gg(b, f);
      }, 200);
    });
    const $e = /* @__PURE__ */ z(x.classification), Re = /* @__PURE__ */ z(!1), He = /* @__PURE__ */ z(null), Ye = j(() => He.value || []);
    qe(() => x.classification, (w) => {
      $e.value = w || "";
    });
    let Ve = null, at = null, dt = 0;
    qe($e, (w) => {
      window.clearTimeout(Ve), at?.abort(), at = null, He.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++dt;
      Ve = window.setTimeout(() => {
        Kg(b, f);
      }, 200);
    });
    const _t = /* @__PURE__ */ z(x.tag), bt = /* @__PURE__ */ z(!1), ii = /* @__PURE__ */ z(null), vi = j(() => ii.value || []);
    qe(() => x.tag, (w) => {
      _t.value = w || "";
    });
    let kt = null, Ot = null, Ui = 0;
    qe(_t, (w) => {
      window.clearTimeout(kt), Ot?.abort(), Ot = null, ii.value = null;
      const b = String(w || "").trim();
      if (b.length < 2) return;
      const f = ++Ui;
      kt = window.setTimeout(() => {
        Wg(b, f);
      }, 200);
    });
    const Gt = /* @__PURE__ */ z(x.year), bi = /* @__PURE__ */ z(!1), An = /* @__PURE__ */ z(null), Yi = j(() => An.value || []);
    qe(() => x.year, (w) => {
      Gt.value = w || "";
    });
    let En = null, Ai = null, Zi = 0;
    qe(Gt, (w) => {
      window.clearTimeout(En), Ai?.abort(), Ai = null, An.value = null;
      const b = String(w || "").trim();
      if (b.length < 2) return;
      const f = ++Zi;
      En = window.setTimeout(() => {
        Zg(b, f);
      }, 200);
    });
    const Xi = Object.fromEntries(Object.keys(x).map((w) => [w, w === "sort" ? "title" : w === "view" ? "compact" : ""])), Lr = window.location.pathname.indexOf(HM), da = Lr >= 0 ? window.location.pathname.slice(0, Lr) : "", Ga = {
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
          const je = F.split(/[?#]/, 1)[0];
          for (const wi of je.split("/")) {
            let Ji = wi;
            for (let br = 0; br < 5; br += 1) {
              const Qi = decodeURIComponent(Ji);
              if (/[\\/\u0000-\u001f\u007f]/.test(Qi) || Qi === "." || Qi === "..") return b;
              if (Qi === Ji) break;
              if (Ji = Qi, br === 4) return b;
            }
          }
          const Qe = decodeURI(F);
          if (Qe === F) return w;
          F = Qe;
        }
        return b;
      } catch {
        return b;
      }
    }
    const Wa = j(() => Ka(m.settingsUrl, Ga.settings)), ft = j(() => Ka(m.catalogueRootUrl, Ga.catalogue)), rr = j(() => Ka(m.homeUrl, `${Ga.catalogue}?home=1`)), gi = j(() => Ka(m.shelvesUrl, `${Ga.catalogue}?shelves=1`)), fa = j(() => Ka(m.reviewUrl || m.scannerConflictReviewUrl, Ga.review)), Ya = j(() => Object.entries(r).some(([w, b]) => x[w] === b)), lr = j(() => n.reduce((w, b) => w + Number(Vu.value[b.countKey] || 0), 0)), $n = j(() => m.surface === "home"), Za = j(() => m.surface === "shelves"), ha = j(() => m.surface === "duplicates"), Xa = j(() => m.surface === "inference"), pa = j(() => m.surface === "authors"), xn = j(() => m.surface === "lists"), Ei = j(() => `${ft.value}?lists=1`), Su = Number(new URLSearchParams(window.location.search).get("addToList")) || null, ds = /* @__PURE__ */ z([]), rt = /* @__PURE__ */ z("");
    async function va() {
      try {
        ds.value = (await bn()).lists;
      } catch {
      }
    }
    Tt(va);
    const Cu = j(() => !pa.value && !ha.value && !Xa.value && !xn.value && !$n.value && !Za.value && !Ya.value && !x.starred && x.recentlyOpened !== "1" && !x.shelf), fs = j(() => [
      { key: "home", name: t("library", "Home"), href: rr.value, active: $n.value },
      { key: "all", name: t("library", "All publications"), href: ft.value, active: Cu.value },
      { key: "starred", name: t("library", "Starred"), href: `${ft.value}?starred=1`, active: x.starred === "1" },
      { key: "continue", name: t("library", "Continue reading"), href: `${ft.value}?recentlyOpened=1&sort=lastOpened`, active: x.recentlyOpened === "1" },
      { key: "shelves", name: t("library", "Shelves"), href: gi.value, active: Za.value || !!x.shelf },
      { key: "collections", name: t("library", "Collections"), href: `${ft.value}#library-collections`, active: !1 }
    ]), Pr = j(() => Vr.value.map((w) => ({
      key: `collection-${w.id}`,
      rawName: w.name,
      id: w.id,
      name: w.countPending ? w.name : `${w.name} (${It("library", "%n item", "%n items", Number(w.count || 0))})`,
      href: fm(w.filters),
      active: hm(w.filters)
    }))), gt = j(() => m.requestToken || ""), sr = j(() => !!m.duplicateSuggestions), Tu = j(() => JSON.stringify(C.value.map((w) => [w.id, w.title, w.creators, w.publicationDate]))), Au = j(() => JSON.parse(Tu.value).map((w) => Number(w[0]))), { results: ba, status: Eu } = vg(Au, sr, gt);
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
    const or = j(() => m.catalogueEndpointUrl || "/apps/library/catalogue"), Dr = j(() => m.shelfChildrenUrl || "/apps/library/shelves/children"), Ja = j(() => m.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), hs = j(() => m.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), Fr = j(() => m.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), Mr = j(() => m.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), Ur = j(() => m.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), $u = j(() => m.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), ps = j(() => m.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), xu = j(() => m.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Ou = j(() => m.itemSidebarUrlTemplate || `${da}/apps/library/items/__ITEM_ID__/sidebar`), Nu = j(() => m.batchTagUrl || "/apps/library/bulk/tags"), Ru = j(() => m.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), vs = j(() => m.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Iu = j(() => m.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), bs = j(() => m.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), ur = j(() => m.scannerConflictReviewUrl || "?scannerConflicts=1");
    m.importHealthSummary, m.importHealthSummary && Object.keys(m.importHealthSummary).length > 0;
    const Qa = j(() => m.discoveryPage === "publication"), On = j(() => m.discoveryPage === "year"), cr = j(() => m.discoveryPage === "creator"), en = j(() => Qa.value || On.value || cr.value), zi = j(() => m.discoveryTitle || x.publication || x.year || x.creator || ""), Nn = j(() => en.value ? zi.value : t("library", "Library")), di = j(() => cr.value ? t("library", "Creator") : On.value ? t("library", "Publication year") : t("library", "Publication / series")), gs = j(() => Number(m.rootCount || 0)), dr = j(() => Number(m.enabledRootCount || 0)), zr = j(() => gs.value === 0), fr = j(() => gs.value > 0 && dr.value === 0), ga = j(() => mt.value.length > 0), mi = /* @__PURE__ */ z(!1), jr = /* @__PURE__ */ z(null), ms = /* @__PURE__ */ z(null), Br = {
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
    }, Hr = j(() => {
      if (typeof window > "u") return "";
      const w = new URLSearchParams(window.location.search);
      if (w.get("batchMetadataApplyResult") !== "1") return "";
      const b = w.get("batchMetadataField") || "field", f = w.get("batchMetadataApplied") || "0", F = w.get("batchMetadataUnchanged") || "0", ve = w.get("batchMetadataSkipped") || "0";
      return t("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: b, unchanged: F, skipped: ve });
    }), hr = j(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? t("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), tn = j(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? t("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), Vr = j(() => m.savedCollections || []), ge = j(() => m.savedCollectionSaveUrl || "/apps/library/collections"), E = j(() => m.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), M = v, oe = j(() => M.includes(x.view) ? x.view : "compact"), de = j(() => ({
      "library-cover-gallery--compact": oe.value === "compact"
    }));
    function Ie(w) {
      const b = String(w || "").trim();
      if (b.length <= 32) return b;
      const f = b.split("/").filter(Boolean);
      return f.length > 0 ? `…/${f.at(-1)}` : b;
    }
    function Fe(w, b) {
      const f = String(b || "").trim();
      if (f === "" || Lu[w] === f) return "";
      if (w === "format") return f.toUpperCase();
      if (w === "folder") return Ie(f);
      const F = Pu[w]?.[f];
      return F ? t("library", F) : f;
    }
    function Ke(w, b) {
      const f = String(x[w] || "").trim(), F = Fe(w, f), ve = t("library", b);
      return {
        key: w,
        label: ve,
        value: f,
        displayValue: F,
        title: F ? `${ve}: ${f}` : ve
      };
    }
    const mt = j(() => Object.entries(Br).map(([w, b]) => Ke(w, b)).filter((w) => w.value !== "" && !(w.key === "sort" && w.value === "title") && !(w.key === "view" && w.value === "compact"))), Ct = j(() => mt.value.filter((w) => !["sort", "view"].includes(w.key))), At = j(() => mt.value.length), Ft = j(() => {
      const w = new URLSearchParams();
      for (const f of Ct.value) w.set(f.key, f.value);
      const b = w.toString();
      return `${ft.value}${b ? `?${b}` : ""}`;
    }), $i = j(() => Ct.value[0] || null), Kt = j(() => K.value.trim() !== String(x.q || "").trim()), ys = j(() => String(x.q || "").trim() !== "" || Kt.value);
    function yi(w) {
      return ({
        q: K,
        publisher: X,
        publication: B,
        creator: Me,
        subject: ee,
        year: Gt,
        folder: it,
        classification: $e,
        tag: _t
      }[w]?.value ?? "").trim() !== String(x[w] || "").trim();
    }
    function ji(w) {
      return yi(w) ? w === "q" ? t("library", "Not applied yet — press Enter or Apply.") : t("library", "Press Enter or Apply to use this value.") : "";
    }
    function ma(w) {
      return { "library-filter-apply--pending": yi(w) };
    }
    const kg = j(() => At.value > 0 ? t("library", "Filters ({count})", { count: At.value }) : t("library", "Filters")), Sg = j(() => At.value > 0 ? t("library", "Open filters panel; {count} active filters", { count: At.value }) : t("library", "Open filters panel")), Cg = j(() => It("library", "Show %n item", "Show %n items", Number(Q.value.total || 0)));
    function Tg(w) {
      mi.value = w.currentTarget?.open === !0, mi.value && Nt(() => {
        jr.value?.focus?.();
      });
    }
    const Ag = /* @__PURE__ */ new Set([
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
    ]), tf = j(() => Object.entries(y(x)).filter(([w, b]) => !Ag.has(w) && String(b || "").trim() !== "").map(([w, b]) => ({ key: w, value: b }))), Eg = j(() => Object.entries(x).filter(([w, b]) => !["q", "sort", "starred"].includes(w) && String(b || "").trim() !== "").map(([w, b]) => ({ key: w, value: b }))), _s = j(() => Object.entries(y(x)).filter(([w, b]) => String(b || "").trim() !== "").map(([w, b]) => ({ key: w, value: b }))), $g = j(() => _s.value.filter(({ key: w, value: b }) => w !== "q" && !(w === "sort" && b === "title"))), ws = j(() => m.homeRows || { continueReading: [], recentlyAdded: [] }), af = j(() => m.homeShelves || []), nf = j(() => m.shelfTree || []), Du = j(() => m.needsAttention || { count: 0, url: `${ft.value}?needsMetadata=1` }), ni = /* @__PURE__ */ z([]), ks = j(() => new Set(ni.value));
    function rf(w, b) {
      const f = new Set(ni.value);
      b ? f.add(Number(w)) : f.delete(Number(w)), ni.value = [...f];
    }
    function xg(w) {
      ni.value = w.currentTarget.checked ? C.value.map((b) => Number(b.id)) : [];
    }
    function Og() {
      const w = new Set(C.value.map((b) => Number(b.id)));
      ni.value = ni.value.filter((b) => w.has(b));
    }
    function Ng(w) {
      const b = w.target;
      if (b instanceof HTMLFormElement) {
        b.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of ni.value) {
          const F = document.createElement("input");
          F.type = "hidden", F.name = "itemIds[]", F.value = String(f), F.dataset.librarySelectedId = "1", b.appendChild(F);
        }
      }
    }
    const Ae = /* @__PURE__ */ z(null), Rn = /* @__PURE__ */ z(null), ri = /* @__PURE__ */ Rt({ loading: !1, error: "", missing: !1 }), In = /* @__PURE__ */ z("overview"), Bi = /* @__PURE__ */ Rt({ saving: !1, saved: !1, error: "" }), yt = /* @__PURE__ */ Rt({ title: "", publicationDate: "", series: "", seriesNumber: "", genre: "", identifiers: [] }), lf = /* @__PURE__ */ z(null), Ln = /* @__PURE__ */ z(null), Pn = /* @__PURE__ */ z(!1);
    let Fu = null, ya = null, Ss = null, Mu = !1, qr = null, Uu = 0;
    const an = j(() => Rn.value !== null), Gr = j(() => Ae.value ? C.value.findIndex((w) => w.id === Ae.value.id) : -1), Cs = j(() => Gr.value > 0 ? C.value[Gr.value - 1] : null), Ts = j(() => Gr.value >= 0 && Gr.value < C.value.length - 1 ? C.value[Gr.value + 1] : null), sf = j(() => Fg(Ae.value?.description || "")), Dn = j(() => Lg(Ae.value?.publicationDate || "")), of = j(() => Pg(Ae.value?.language || "")), Rg = ["publicationType", "title", "subtitle", "creators", "publication", "series", "seriesNumber", "genre", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Ig = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Kr(w) {
      const b = String(w ?? "").trim(), f = b.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : b;
    }
    function Lg(w) {
      const f = Kr(w).match(/^(\d{4})/u);
      return f ? f[1] : "";
    }
    function Pg(w) {
      return String(w ?? "").split(/[;,\n]+/u).map((b) => b.trim()).filter(Boolean);
    }
    function uf(w, b) {
      const f = new URLSearchParams();
      for (const [F, ve] of Object.entries(x)) {
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
      Yr({ historyMode: "none" }), Wt(null, {
        params: ve,
        generation: ++li,
        historyMode: "push"
      });
    }
    function Dg(w) {
      return String(w ?? "").replace(/&#x([0-9a-f]+);/giu, (b, f) => String.fromCodePoint(Number.parseInt(f, 16))).replace(/&#(\d+);/gu, (b, f) => String.fromCodePoint(Number.parseInt(f, 10))).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#039;", "'").replaceAll("&apos;", "'").replaceAll("&nbsp;", " ").replaceAll("&amp;", "&");
    }
    function Fg(w) {
      let b = String(w ?? "").trim();
      if (b === "") return "";
      for (let f = 0; f < 2; f += 1) {
        const F = Dg(b);
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
    function Mg() {
      yt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Ug(w) {
      yt.identifiers.splice(w, 1);
    }
    async function zg() {
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
        const ve = C.value.find((xe) => Number(xe.id) === Number(w.id));
        ve && (ve.title = w.title, ve.publicationDate = w.publicationDate), Bi.saved = !0;
      } catch (f) {
        Bi.error = f?.message || t("library", "Metadata could not be saved.");
      } finally {
        Bi.saving = !1;
      }
    }
    const nn = j(() => {
      const w = s("scannerConflicts", x.scannerConflicts) || s("weakMetadata", x.weakMetadata), b = w ? C.value.find((f) => $s(f).length > 0) : null;
      return {
        enabled: w,
        item: b,
        fields: b ? $s(b) : [],
        reviewNextUrl: ur.value,
        skipUrl: Q.value.nextUrl || ur.value
      };
    }), jg = j(() => n.map((w) => ({
      ...w,
      label: t("library", w.label),
      href: `${ft.value}?${encodeURIComponent(w.key)}=${encodeURIComponent(w.value)}`,
      active: String(x[w.key] || "") === w.value
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
      return Rg.filter((ve) => Object.prototype.hasOwnProperty.call(b, ve)).map((ve) => {
        const xe = zu(w[ve]), je = zu(b[ve]), Qe = zu(F[ve] || w.metadataSource || "scanner"), wi = Qe.includes("filename") || Qe.includes("path") ? je : "", Ji = Qe.includes("sidecar") ? je : "";
        return { field: ve, currentValue: xe, scannerCandidate: je, pathTemplateCandidate: wi, sidecarValue: Ji, sourceProvenance: Qe, rejected: f.includes(ve), differs: xe !== je };
      }).filter((ve) => ve.differs);
    }
    let Fn = 0, Mn = null;
    function ff() {
      const w = new URLSearchParams(window.location.search).getAll("item");
      if (w.length !== 1 || !/^[1-9][0-9]*$/.test(w[0])) return null;
      const b = Number(w[0]);
      return Number.isSafeInteger(b) && b <= VM ? b : null;
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
        const xe = Ou.value.replace("__ITEM_ID__", encodeURIComponent(String(w))), je = await fetch(xe, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ve.signal });
        if (F !== Fn) return;
        if (!je.ok) {
          Ae.value = null, ri.missing = je.status === 404, ri.error = je.status === 404 ? t("library", "This publication is unavailable or you do not have access.") : t("library", "Could not load publication details. Try again.");
          return;
        }
        const Qe = await je.json();
        if (F !== Fn) return;
        if (typeof Qe?.item?.id != "number" || !Number.isSafeInteger(Qe.item.id) || Qe.item.id !== w) {
          Ae.value = null, ri.missing = !1, ri.error = t("library", "Could not load publication details. Try again.");
          return;
        }
        Ae.value = cf(Qe.item), df(Ae.value), await Nt();
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
    function Bg() {
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
      Pn.value = !!w?.matches, an.value && Nt(pf);
    }
    function xs(w) {
      w && Wr(Number(w.id), { seed: w });
    }
    const Xr = /* @__PURE__ */ z(null);
    let li = 0, pr = null, vr = null, Jr = null, vf = !1, Qr = null;
    const Mt = /* @__PURE__ */ Rt({ loading: !1, error: "", completed: !1 });
    function Hg(w) {
      const b = c(new FormData(w));
      b.delete("publicationSearch"), b.delete("creatorSearch"), b.delete("subjectSearch"), b.delete("publisherSearch"), b.delete("classificationSearch"), b.delete("tagSearch"), b.delete("folderSearch"), b.delete("yearSearch");
      for (const f of Array.from(b.keys()))
        String(b.get(f) || "").trim() === "" && b.delete(f);
      return b.delete("page"), b.get("view") === "compact" && b.delete("view"), b.get("sort") === "title" && b.delete("sort"), b;
    }
    async function Un(w, b, f) {
      const F = new URLSearchParams();
      for (const [je, Qe] of Object.entries(x)) {
        const wi = String(Qe || "").trim();
        je !== w && wi !== "" && !(je === "sort" && wi === "title") && !(je === "view" && wi === "compact") && F.set(je, wi);
      }
      F.set(`${w}Search`, b);
      const ve = new AbortController();
      w === "creator" ? q = ve : w === "publisher" ? Le = ve : w === "subject" ? Ne = ve : w === "classification" ? at = ve : w === "tag" ? Ot = ve : w === "folder" ? V = ve : Ai = ve;
      const xe = w === "creator" ? hs.value : w === "publisher" ? Fr.value : w === "subject" ? Mr.value : w === "classification" ? Ur.value : w === "tag" ? $u.value : w === "folder" ? ps.value : xu.value;
      try {
        const je = await fetch(`${xe}?${F}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ve.signal });
        if (!je.ok) throw new Error(`${w} suggestions request failed: ${je.status}`);
        const Qe = await je.json(), wi = w === "creator" ? Se : w === "publisher" ? Oe : w === "subject" ? we : w === "classification" ? dt : w === "tag" ? Ui : w === "folder" ? U : Zi, Ji = w === "creator" ? Me.value : w === "publisher" ? X.value : w === "subject" ? ee.value : w === "classification" ? $e.value : w === "tag" ? _t.value : w === "folder" ? it.value : Gt.value;
        f === wi && Ji.trim() === b && (w === "creator" ? ct.value = Array.isArray(Qe.creators) ? Qe.creators : [] : w === "publisher" ? J.value = Array.isArray(Qe.publishers) ? Qe.publishers : [] : w === "subject" ? ue.value = Array.isArray(Qe.subjects) ? Qe.subjects : [] : w === "classification" ? He.value = Array.isArray(Qe.classifications) ? Qe.classifications : [] : w === "tag" ? ii.value = Array.isArray(Qe.tags) ? Qe.tags : [] : w === "folder" ? T.value = Array.isArray(Qe.folders) ? Qe.folders : [] : An.value = Array.isArray(Qe.years) ? Qe.years : []);
      } catch (je) {
        je?.name !== "AbortError" && (w === "creator" && f === Se && (ct.value = null), w === "publisher" && f === Oe && (J.value = null), w === "subject" && f === we && (ue.value = null), w === "classification" && f === dt && (He.value = null), w === "tag" && f === Ui && (ii.value = null), w === "folder" && f === U && (T.value = null), w === "year" && f === Zi && (An.value = null));
      }
    }
    function Vg(w, b) {
      return Un("creator", w, b);
    }
    function qg(w, b) {
      return Un("publisher", w, b);
    }
    function Gg(w, b) {
      return Un("subject", w, b);
    }
    function Kg(w, b) {
      return Un("classification", w, b);
    }
    function Wg(w, b) {
      return Un("tag", w, b);
    }
    function Yg(w, b) {
      return Un("folder", w, b);
    }
    function Zg(w, b) {
      return Un("year", w, b);
    }
    async function Xg(w, b) {
      const f = new URLSearchParams();
      for (const [ve, xe] of Object.entries(x)) {
        const je = String(xe || "").trim();
        ve !== "publication" && je !== "" && !(ve === "sort" && je === "title") && !(ve === "view" && je === "compact") && f.set(ve, je);
      }
      f.set("publicationSearch", w);
      const F = new AbortController();
      R = F;
      try {
        const ve = await fetch(`${Ja.value}?${f}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: F.signal
        });
        if (!ve.ok) throw new Error(`Publication suggestions request failed: ${ve.status}`);
        const xe = await ve.json();
        b === G && B.value.trim() === w && (se.value = Array.isArray(xe.publications) ? xe.publications : []);
      } catch (ve) {
        ve?.name !== "AbortError" && b === G && (se.value = null);
      } finally {
        b === G && (R = null);
      }
    }
    function Jg(w) {
      k.splice(0, k.length, ...(w.items || []).map((f) => ({ ...f }))), Og();
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
      Object.assign(x, Xi, w.activeFilters || {}), x.view = g(x.view);
    }
    async function Qg() {
      if (m.surface !== "index") return;
      const w = li, b = JSON.stringify({ ...x }), f = new URLSearchParams();
      f.set("hydrate", "1");
      for (const [ve, xe] of Object.entries(x)) {
        const je = String(xe || "").trim();
        je !== "" && !(ve === "sort" && je === "title") && !(ve === "view" && je === "compact") && f.set(ve, je);
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
        if (w !== li || b !== JSON.stringify({ ...x })) return;
        for (const je of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(xe, je) && (m[je] = xe[je]);
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
    function em() {
      vr?.abort(), vr = null;
    }
    async function Wt(w, b = null) {
      const f = w?.currentTarget?.tagName === "FORM" ? w.currentTarget : w?.currentTarget?.form;
      if (!f && !b?.params) return;
      const F = c(b?.params ?? Hg(f));
      if ($n.value || Za.value) {
        el(F, ft.value);
        return;
      }
      const ve = F.toString(), xe = ve ? `?${ve}` : "", je = b?.generation ?? ++li, Qe = d(F), wi = b?.historyMode ?? (Qe ? "push" : "replace"), Ji = b?.historyTraversal === !0;
      if (je !== li) return;
      em(), b === null && pr?.abort();
      const br = new AbortController();
      pr = br, Mt.loading = !0, Mt.error = "", Mt.completed = !1;
      try {
        const Qi = await fetch(or.value + xe, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: br.signal
        });
        if (je !== li) return;
        if (!Qi.ok) {
          Ji ? el(F) : Qe ? Mt.error = t("library", "Could not load this review queue. Try again.") : el(F);
          return;
        }
        const _m = await Qi.json();
        if (je !== li) return;
        Jg(_m), bf(), Mt.completed = !0, wi !== "none" && (history[wi === "push" ? "pushState" : "replaceState"]({}, "", ve ? `?${ve}` : window.location.pathname), an.value && Yr({ historyMode: "none" }));
      } catch (Qi) {
        je === li && Qi?.name !== "AbortError" && (Ji ? el(F) : Qe ? Mt.error = t("library", "Could not load this review queue. Try again.") : el(F));
      } finally {
        je === li && (pr = null, Mt.loading = !1);
      }
    }
    function gf() {
      pr?.abort();
      const w = new URLSearchParams(window.location.search), b = ff();
      w.has("item") && b === null && (w.delete("item"), history.replaceState({}, "", `${window.location.pathname}${w.toString() ? `?${w}` : ""}${window.location.hash}`)), b === null ? Yr({ historyMode: "none" }) : Wr(b, { historyMode: "none", seed: C.value.find((f) => Number(f.id) === b) || null }), w.delete("item"), Wt(null, {
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
        Wt(w);
        return;
      }
      Wt({ currentTarget: w }, { params: b, generation: f });
    }
    async function tm(w, b = B.value) {
      x.publication = String(b || "").trim(), B.value = x.publication, Z.value = !1, await Nt(), Wt({ currentTarget: w });
    }
    function mf(w, b) {
      tm(b.currentTarget.form, w);
    }
    async function im(w) {
      x.q = String(K.value || "").trim(), x.publication = String(B.value || "").trim(), x.publisher = String(X.value || "").trim(), x.creator = String(Me.value || "").trim(), x.subject = String(ee.value || "").trim(), x.folder = String(it.value || "").trim(), x.year = String(Gt.value || "").trim(), Z.value = !1, ae.value = !1, Ze.value = !1, re.value = !1, ne.value = !1, bi.value = !1, await Nt(), Wt({ currentTarget: w });
    }
    async function rn(w, b, f) {
      x[b] = String(f || "").trim(), b === "creator" ? (Me.value = x.creator, Ze.value = !1) : b === "publisher" ? (X.value = x.publisher, ae.value = !1) : b === "subject" ? (ee.value = x.subject, re.value = !1) : b === "folder" ? (it.value = x.folder, ne.value = !1) : b === "classification" ? ($e.value = x.classification, Re.value = !1) : b === "tag" ? (_t.value = x.tag, bt.value = !1) : (Gt.value = x.year, bi.value = !1), _a[b] = -1, await Nt(), Wt({ currentTarget: w });
    }
    function yf(w) {
      im(w.currentTarget);
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
      window.clearTimeout(ce), Ne?.abort(), Ne = null, rn(w, "subject", b);
    }
    function am(w) {
      Tf(w.currentTarget.form);
    }
    function Af(w, b) {
      Tf(b.currentTarget.form, w);
    }
    function Ef(w, b) {
      rn(b.currentTarget.form, "year", w);
    }
    const _a = /* @__PURE__ */ Rt({
      publisher: -1,
      publication: -1,
      year: -1,
      creator: -1,
      tag: -1,
      folder: -1,
      subject: -1,
      classification: -1
    });
    function nm(w) {
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
      ae.value = b, b || (_a[w] = -1);
    }
    function xf(w) {
      _a[w] = -1, Hu(w, !0);
    }
    function rm(w, b, f) {
      rn(f, w, b);
    }
    function Of(w, b) {
      const f = nm();
      if (w.key === "Escape") {
        Hu(b, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(w.key) || f.length === 0) return;
      if (w.key === "Enter") {
        const xe = _a[b];
        if (xe < 0) return;
        w.preventDefault(), rm(b, f[xe], w.currentTarget.form);
        return;
      }
      w.preventDefault(), Hu(b, !0);
      const F = _a[b], ve = w.key === "ArrowDown" ? 1 : -1;
      _a[b] = F < 0 ? ve > 0 ? 0 : f.length - 1 : (F + ve + f.length) % f.length;
    }
    function Nf(w) {
      const b = new URLSearchParams();
      for (const [f, F] of Object.entries(x)) {
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
      x[w] = w === "sort" ? "title" : w === "view" ? "compact" : "", Wt(null, {
        params: b,
        generation: ++li
      });
    }
    function Rf() {
      const w = new URLSearchParams();
      return x.sort && x.sort !== "title" && w.set("sort", x.sort), x.view && x.view !== "compact" && w.set("view", x.view), w;
    }
    function Os() {
      const w = Rf().toString();
      return `${ft.value}${w ? `?${w}` : ""}`;
    }
    function Ns() {
      const w = Rf();
      for (const b of Object.keys(x))
        ["sort", "view"].includes(b) || (x[b] = Xi[b]);
      Wt(null, {
        params: w,
        generation: ++li
      }), !$n.value && !Za.value && Nt(() => {
        ms.value?.focus?.();
      });
    }
    function lm(w) {
      const b = new URL(w.href, window.location.origin).searchParams;
      Wt(null, {
        params: b,
        generation: ++li
      });
    }
    function sm() {
      return tl("q");
    }
    const Vu = j(() => m.smartViewCounts || {}), om = j(() => new Set(m.smartViewCountsPending || []));
    function um(w) {
      return om.value.has(w) || !Object.prototype.hasOwnProperty.call(Vu.value, w) ? "—" : Number(Vu.value[w] || 0);
    }
    const If = j(() => {
      const w = {};
      for (const [b, f] of Object.entries(x)) {
        const F = String(f || "").trim();
        F !== "" && !(b === "sort" && F === "title") && (w[b] = F);
      }
      return w;
    }), cm = j(() => JSON.stringify(If.value)), qu = j(() => Object.keys(If.value).length > 0);
    function Lf(w) {
      if (!M.includes(w)) return;
      x.view = w;
      const b = new URLSearchParams();
      for (const [f, F] of Object.entries(y(x))) {
        const ve = String(F || "").trim();
        ve !== "" && !(f === "sort" && ve === "title") && !(f === "view" && ve === "compact") && b.set(f, ve);
      }
      b.delete("page"), Wt(null, {
        params: b,
        generation: ++li
      });
    }
    function dm(w) {
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
    function fm(w) {
      return dm(w || {});
    }
    function hm(w) {
      const f = Object.entries(w && typeof w == "object" ? w : {}).filter(([, F]) => String(F ?? "").trim() !== "");
      return f.length === 0 ? !1 : f.every(([F, ve]) => String(x[F] ?? "") === String(ve ?? ""));
    }
    function pm(w) {
      return E.value.replace("__COLLECTION_ID__", encodeURIComponent(String(w || "0")));
    }
    function vm(w) {
      if (!gt.value) return;
      const b = document.createElement("form");
      b.method = "post", b.action = pm(w), b.className = "library-navigation-saved-collection-delete-form";
      const f = document.createElement("input");
      f.type = "hidden", f.name = "requesttoken", f.value = gt.value, b.appendChild(f), document.body.appendChild(b), b.submit();
    }
    function Rs(w) {
      return String(w || "").toUpperCase();
    }
    function bm(w) {
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
    function gm(w) {
      w.key !== "/" || w.metaKey || w.ctrlKey || w.altKey || w.shiftKey || Df(w.target) || (w.preventDefault(), Xr.value?.focus(), Xr.value?.select?.());
    }
    async function mm(w) {
      w.key !== "Escape" || document.activeElement !== Xr.value || x.q === "" || (w.preventDefault(), K.value = "", x.q = "", await Nt(), _i({ currentTarget: Xr.value }));
    }
    function ym(w) {
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
      document.querySelector("dialog[open]") || ym(w) || (gm(w), mm(w));
    }
    Tt(() => {
      if (pa.value || xn.value || Xa.value || ha.value) return;
      window.addEventListener("keydown", Ff), window.addEventListener("popstate", gf), ya = window.matchMedia?.("(max-width: 1023px)") || null, Zr(), ya?.addEventListener ? ya.addEventListener("change", Zr) : ya?.addListener?.(Zr);
      const w = new URLSearchParams(window.location.search), b = ff();
      w.has("item") && b === null ? (w.delete("item"), history.replaceState({}, "", `${window.location.pathname}${w.toString() ? `?${w}` : ""}${window.location.hash}`)) : b !== null && Wr(b, { historyMode: "none", seed: C.value.find((f) => Number(f.id) === b) || null }), Qr = window.requestAnimationFrame(() => {
        Qr = null, Qg();
      });
    }), Ti(() => {
      Mu = !0, ju(), window.removeEventListener("keydown", Ff), window.removeEventListener("popstate", gf), window.clearTimeout(Y), window.clearTimeout(te), window.clearTimeout(ce), window.clearTimeout(En), R?.abort(), q?.abort(), Ne?.abort(), Ai?.abort(), li += 1, Qr !== null && window.cancelAnimationFrame(Qr), Qr = null, vr?.abort(), Jr?.abort(), pr?.abort(), pr = null, Fn += 1, Mn?.abort(), Mn = null, ya?.removeEventListener ? ya.removeEventListener("change", Zr) : ya?.removeListener?.(Zr), ya = null, Ss = null;
    });
    const al = /* @__PURE__ */ Rt({}), nl = /* @__PURE__ */ Rt({});
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
    return (w, b) => (h(), De(u(uT), { "app-name": "library" }, {
      default: ke(() => [
        he(u(Vw), {
          "aria-label": u(t)("library", "Library navigation")
        }, {
          list: ke(() => [
            he(u(Rb), null, {
              default: ke(() => [
                (h(!0), p(W, null, fe(fs.value, (f) => (h(), De(u(Ta), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                (h(!0), p(W, null, fe(Pr.value, (f) => (h(), p("div", {
                  key: f.key,
                  class: "library-navigation-saved-collection-row"
                }, [
                  he(u(Ta), {
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
                    onClick: Ce((F) => vm(f.id), ["stop", "prevent"])
                  }, "✕", 8, RN)
                ]))), 128)),
                he(u(Ta), {
                  active: pa.value,
                  href: `${ft.value}?authors=1`,
                  name: u(t)("library", "Authors")
                }, null, 8, ["active", "href", "name"]),
                he(u(Ta), {
                  active: xn.value,
                  href: Ei.value,
                  name: u(t)("library", "Lists")
                }, null, 8, ["active", "href", "name"]),
                he(u(Ta), {
                  class: "library-navigation-create-list",
                  href: `${Ei.value}&new=1`,
                  name: u(t)("library", "Create a new list")
                }, null, 8, ["href", "name"]),
                (h(!0), p(W, null, fe(ds.value, (f) => (h(), De(u(Ta), {
                  key: `personal-list-${f.id}`,
                  class: "library-navigation-personal-list",
                  href: `${Ei.value}&listId=${f.id}`,
                  name: f.name
                }, null, 8, ["href", "name"]))), 128)),
                he(u(Ta), {
                  active: Xa.value,
                  href: `${ft.value}?infer=1`,
                  name: u(t)("library", "Extract metadata")
                }, null, 8, ["active", "href", "name"]),
                he(u(Ta), {
                  active: Ya.value,
                  href: fa.value,
                  name: lr.value > 0 ? `${u(t)("library", "Review")} (${lr.value})` : u(t)("library", "Review")
                }, null, 8, ["active", "href", "name"]),
                he(u(Ta), {
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
            !pa.value && !xn.value && !Xa.value && !ha.value ? (h(), p("section", IN, [
              l("h2", LN, o(u(t)("library", "Filters")), 1),
              l("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": u(t)("library", "Catalogue search and filters"),
                onSubmit: Ce(yf, ["prevent"])
              }, [
                l("input", {
                  type: "hidden",
                  name: "folder",
                  value: x.folder
                }, null, 8, DN),
                (h(!0), p(W, null, fe(tf.value, (f) => (h(), p("input", {
                  key: `sidebar-${f.key}`,
                  type: "hidden",
                  name: f.key,
                  value: f.value
                }, null, 8, FN))), 128)),
                x.sort && x.sort !== "title" ? (h(), p("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: x.sort
                }, null, 8, MN)) : A("", !0),
                x.view && x.view !== "compact" ? (h(), p("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: x.view
                }, null, 8, UN)) : A("", !0),
                l("fieldset", zN, [
                  l("legend", null, o(u(t)("library", "Content")), 1),
                  l("label", {
                    class: "library-quick-filter-search",
                    title: u(t)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                  }, [
                    l("span", null, [
                      ie(o(u(t)("library", "Search")) + " ", 1),
                      b[112] || (b[112] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                    ]),
                    ye(l("input", {
                      ref_key: "quickSearchInput",
                      ref: Xr,
                      "onUpdate:modelValue": b[0] || (b[0] = (f) => K.value = f),
                      "data-library-quick-search": "",
                      type: "search",
                      name: "q",
                      placeholder: u(t)("library", "Title, creator, description, filename or folder")
                    }, null, 8, BN), [
                      [Ue, K.value]
                    ]),
                    yi("q") ? (h(), p("small", HN, o(ji("q")), 1)) : A("", !0)
                  ], 8, jN),
                  l("label", null, [
                    ie(o(u(t)("library", "Type")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[1] || (b[1] = (f) => x.type = f),
                      name: "type",
                      onChange: b[2] || (b[2] = (f) => _i(f))
                    }, [
                      l("option", VN, o(u(t)("library", "All types")), 1),
                      (h(!0), p(W, null, fe(L.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(f), 9, qN))), 128))
                    ], 544), [
                      [nt, x.type]
                    ])
                  ]),
                  l("div", GN, [
                    l("label", KN, o(u(t)("library", "Publisher")), 1),
                    ye(l("input", {
                      id: "library-publisher-search",
                      "onUpdate:modelValue": b[3] || (b[3] = (f) => X.value = f),
                      type: "search",
                      name: "publisherSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search publishers"),
                      title: u(t)("library", "Exact publisher matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publisher-suggestions",
                      "aria-activedescendant": $f("desktop", "publisher"),
                      "aria-expanded": ae.value && be.value.length > 0 ? "true" : "false",
                      onFocus: b[4] || (b[4] = (f) => xf("publisher")),
                      onKeydown: b[5] || (b[5] = (f) => Of(f, "publisher"))
                    }, null, 40, WN), [
                      [Ue, X.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publisher",
                      value: x.publisher
                    }, null, 8, YN),
                    yi("publisher") ? (h(), p("small", ZN, o(ji("publisher")), 1)) : A("", !0),
                    ae.value && be.value.length > 0 ? (h(), p("ul", XN, [
                      (h(!0), p(W, null, fe(be.value, (f, F) => (h(), p("li", {
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
                        }, o(f), 41, QN)
                      ], 8, JN))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-publisher-apply", ma("publisher")])
                    }, o(u(t)("library", "Apply publisher")), 3)
                  ]),
                  l("div", eR, [
                    l("label", tR, o(u(t)("library", "Series / periodical")), 1),
                    ye(l("input", {
                      id: "library-publication-search",
                      "onUpdate:modelValue": b[7] || (b[7] = (f) => B.value = f),
                      type: "search",
                      name: "publicationSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search series and periodicals"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publication-suggestions",
                      "aria-expanded": Z.value && H.value.length > 0 ? "true" : "false",
                      onFocus: b[8] || (b[8] = (f) => Z.value = !0),
                      onKeydown: b[9] || (b[9] = ht((f) => Z.value = !1, ["escape"]))
                    }, null, 40, iR), [
                      [Ue, B.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publication",
                      value: x.publication
                    }, null, 8, aR),
                    yi("publication") ? (h(), p("small", nR, o(ji("publication")), 1)) : A("", !0),
                    Z.value && H.value.length > 0 ? (h(), p("ul", rR, [
                      (h(!0), p(W, null, fe(H.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publication-suggestion",
                          onMousedown: b[10] || (b[10] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => mf(f, F)
                        }, o(f), 41, lR)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-publication-apply", ma("publication")])
                    }, o(u(t)("library", "Apply series")), 3)
                  ]),
                  l("div", sR, [
                    l("label", oR, o(u(t)("library", "Publication year")), 1),
                    ye(l("input", {
                      id: "library-year-search",
                      "onUpdate:modelValue": b[11] || (b[11] = (f) => Gt.value = f),
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
                    }, null, 40, uR), [
                      [Ue, Gt.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "year",
                      value: x.year
                    }, null, 8, cR),
                    yi("year") ? (h(), p("small", dR, o(ji("year")), 1)) : A("", !0),
                    bi.value && Yi.value.length > 0 ? (h(), p("ul", fR, [
                      (h(!0), p(W, null, fe(Yi.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-year-suggestion",
                          onMousedown: b[14] || (b[14] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => Ef(f, F)
                        }, o(f), 41, hR)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-year-apply", ma("year")])
                    }, o(u(t)("library", "Apply year")), 3)
                  ]),
                  l("div", pR, [
                    l("label", vR, o(u(t)("library", "Creator")), 1),
                    ye(l("input", {
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
                      "aria-expanded": Ze.value && le.value.length > 0 ? "true" : "false",
                      onFocus: b[16] || (b[16] = (f) => Ze.value = !0),
                      onKeydown: b[17] || (b[17] = ht((f) => Ze.value = !1, ["escape"]))
                    }, null, 40, bR), [
                      [Ue, Me.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "creator",
                      value: x.creator
                    }, null, 8, gR),
                    yi("creator") ? (h(), p("small", mR, o(ji("creator")), 1)) : A("", !0),
                    Ze.value && le.value.length > 0 ? (h(), p("ul", yR, [
                      (h(!0), p(W, null, fe(le.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-creator-suggestion",
                          onMousedown: b[18] || (b[18] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => _f(f, F)
                        }, o(f), 41, _R)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-creator-apply", ma("creator")])
                    }, o(u(t)("library", "Apply creator")), 3)
                  ]),
                  l("div", wR, [
                    l("label", kR, o(u(t)("library", "Nextcloud tag")), 1),
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
                    }, null, 40, SR), [
                      [Ue, _t.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "tag",
                      value: x.tag
                    }, null, 8, CR),
                    bt.value && vi.value.length > 0 ? (h(), p("ul", TR, [
                      (h(!0), p(W, null, fe(vi.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-tag-suggestion",
                          onMousedown: b[22] || (b[22] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => Sf(f, F)
                        }, o(f), 41, AR)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-tag-apply", ma("tag")])
                    }, o(u(t)("library", "Apply tag")), 3)
                  ]),
                  l("label", null, [
                    ie(o(u(t)("library", "Format")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[23] || (b[23] = (f) => x.format = f),
                      name: "format",
                      onChange: b[24] || (b[24] = (f) => _i(f))
                    }, [
                      l("option", ER, o(u(t)("library", "All formats")), 1),
                      (h(!0), p(W, null, fe($.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(Rs(f)), 9, $R))), 128))
                    ], 544), [
                      [nt, x.format]
                    ])
                  ])
                ]),
                l("fieldset", xR, [
                  l("legend", null, o(u(t)("library", "Location")), 1),
                  l("label", null, [
                    ie(o(u(t)("library", "Shelf")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[25] || (b[25] = (f) => x.shelf = f),
                      name: "shelf",
                      onChange: b[26] || (b[26] = (f) => _i(f))
                    }, [
                      l("option", OR, o(u(t)("library", "All shelves")), 1),
                      (h(!0), p(W, null, fe(S.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(f), 9, NR))), 128))
                    ], 544), [
                      [nt, x.shelf]
                    ])
                  ]),
                  l("div", RR, [
                    l("label", IR, o(u(t)("library", "Folder")), 1),
                    ye(l("input", {
                      id: "library-folder-search",
                      "onUpdate:modelValue": b[27] || (b[27] = (f) => it.value = f),
                      type: "search",
                      name: "folderSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Type at least 3 path characters"),
                      title: u(t)("library", "Select an exact folder path"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-folder-suggestions",
                      "aria-expanded": ne.value && O.value.length > 0 ? "true" : "false",
                      onFocus: b[28] || (b[28] = (f) => ne.value = !0),
                      onKeydown: b[29] || (b[29] = ht((f) => ne.value = !1, ["escape"]))
                    }, null, 40, LR), [
                      [Ue, it.value]
                    ]),
                    ne.value && O.value.length > 0 ? (h(), p("ul", PR, [
                      (h(!0), p(W, null, fe(O.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-folder-suggestion",
                          onMousedown: b[30] || (b[30] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => Cf(f, F)
                        }, o(f), 41, DR)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-folder-apply", ma("folder")])
                    }, o(u(t)("library", "Apply folder")), 3)
                  ])
                ]),
                l("fieldset", FR, [
                  l("legend", null, o(u(t)("library", "Review")), 1),
                  l("label", null, [
                    ie(o(u(t)("library", "Scan status")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[31] || (b[31] = (f) => x.status = f),
                      name: "status",
                      onChange: b[32] || (b[32] = (f) => _i(f))
                    }, [
                      l("option", MR, o(u(t)("library", "All scan statuses")), 1),
                      (h(!0), p(W, null, fe(N.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(f), 9, UR))), 128))
                    ], 544), [
                      [nt, x.status]
                    ])
                  ]),
                  l("label", null, [
                    ie(o(u(t)("library", "Workflow status")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[33] || (b[33] = (f) => x.workflowStatus = f),
                      name: "workflowStatus",
                      onChange: b[34] || (b[34] = (f) => _i(f))
                    }, [
                      l("option", zR, o(u(t)("library", "All workflow statuses")), 1),
                      (h(!0), p(W, null, fe(pe.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(f), 9, jR))), 128))
                    ], 544), [
                      [nt, x.workflowStatus]
                    ])
                  ]),
                  l("div", BR, [
                    l("label", HR, o(u(t)("library", "Subject")), 1),
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
                      "aria-expanded": re.value && me.value.length > 0 ? "true" : "false",
                      onFocus: b[36] || (b[36] = (f) => re.value = !0),
                      onKeydown: b[37] || (b[37] = ht((f) => re.value = !1, ["escape"]))
                    }, null, 40, VR), [
                      [Ue, ee.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "subject",
                      value: x.subject
                    }, null, 8, qR),
                    yi("subject") ? (h(), p("small", GR, o(ji("subject")), 1)) : A("", !0),
                    re.value && me.value.length > 0 ? (h(), p("ul", KR, [
                      (h(!0), p(W, null, fe(me.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-subject-suggestion",
                          onMousedown: b[38] || (b[38] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => Af(f, F)
                        }, o(f), 41, WR)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "button",
                      class: Ee(["button secondary library-subject-apply", ma("subject")]),
                      onClick: am
                    }, o(u(t)("library", "Apply subject")), 3)
                  ]),
                  l("div", YR, [
                    l("label", ZR, o(u(t)("library", "Classification")), 1),
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
                      "aria-expanded": Re.value && Ye.value.length > 0 ? "true" : "false",
                      onFocus: b[40] || (b[40] = (f) => Re.value = !0),
                      onKeydown: b[41] || (b[41] = ht((f) => Re.value = !1, ["escape"]))
                    }, null, 40, XR), [
                      [Ue, $e.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "classification",
                      value: x.classification
                    }, null, 8, JR),
                    Re.value && Ye.value.length > 0 ? (h(), p("ul", QR, [
                      (h(!0), p(W, null, fe(Ye.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-classification-suggestion",
                          onMousedown: b[42] || (b[42] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => kf(f, F)
                        }, o(f), 41, eI)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-classification-apply", ma("classification")])
                    }, o(u(t)("library", "Apply classification")), 3)
                  ]),
                  l("label", null, [
                    ie(o(u(t)("library", "Suggested updates")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[43] || (b[43] = (f) => x.scannerConflicts = f),
                      name: "scannerConflicts",
                      onChange: b[44] || (b[44] = (f) => _i(f))
                    }, [
                      l("option", tI, o(u(t)("library", "All metadata")), 1),
                      l("option", iI, o(u(t)("library", "Suggested updates")), 1)
                    ], 544), [
                      [nt, x.scannerConflicts]
                    ])
                  ])
                ]),
                l("fieldset", aI, [
                  l("legend", null, o(u(t)("library", "Personal / display")), 1)
                ]),
                l("button", nI, o(u(t)("library", "Apply filters")), 1)
              ], 40, PN)
            ])) : A("", !0),
            l("a", {
              class: "library-navigation-settings-link",
              href: Wa.value
            }, [
              b[113] || (b[113] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, o(u(t)("library", "Settings")), 1)
            ], 8, rI)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        he(u(lw), null, {
          default: ke(() => [
            l("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: m.language || "en",
              dir: m.direction || "ltr",
              tabindex: "-1"
            }, [
              ha.value ? (h(), De(A3, {
                key: 0,
                "request-token": gt.value,
                "review-url": fa.value
              }, null, 8, ["request-token", "review-url"])) : Xa.value ? (h(), De(NN, {
                key: 1,
                "request-token": gt.value
              }, null, 8, ["request-token"])) : pa.value ? (h(), De(X$, {
                key: 2,
                "request-token": gt.value,
                "catalogue-url": ft.value
              }, null, 8, ["request-token", "catalogue-url"])) : xn.value ? (h(), De(jA, {
                key: 3,
                onChanged: va,
                "request-token": gt.value,
                "catalogue-url": ft.value,
                "lists-url": Ei.value
              }, null, 8, ["request-token", "catalogue-url", "lists-url"])) : (h(), p(W, { key: 4 }, [
                mt.value.length > 0 ? (h(), p("nav", {
                  key: 0,
                  class: "library-active-filter-chips",
                  "aria-label": u(t)("library", "Active filters")
                }, [
                  l("span", null, o(u(t)("library", "Active filters")), 1),
                  (h(!0), p(W, null, fe(mt.value, (f) => (h(), p("a", {
                    key: f.key,
                    href: tl(f.key),
                    class: "library-filter-chip",
                    "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                    title: f.title,
                    onClick: Ce((F) => il(f.key), ["prevent"])
                  }, [
                    l("strong", null, [
                      ie(o(f.label), 1),
                      f.displayValue ? (h(), p(W, { key: 0 }, [
                        ie(":")
                      ], 64)) : A("", !0)
                    ]),
                    f.displayValue ? (h(), p(W, { key: 0 }, [
                      b[114] || (b[114] = ie(o(" "), -1)),
                      l("span", {
                        class: "library-filter-chip-value",
                        title: f.value
                      }, o(f.displayValue), 9, uI)
                    ], 64)) : A("", !0),
                    b[115] || (b[115] = ie()),
                    b[116] || (b[116] = l("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, oI))), 128)),
                  Ct.value.length > 0 ? (h(), p("a", {
                    key: 0,
                    href: Os(),
                    class: "library-active-filter-clear-all",
                    onClick: Ce(Ns, ["prevent"])
                  }, o(u(t)("library", "Clear all")), 9, cI)) : A("", !0)
                ], 8, sI)) : A("", !0),
                Ya.value ? (h(), p("section", dI, [
                  l("header", fI, [
                    l("p", hI, o(u(t)("library", "Metadata cleanup")), 1),
                    l("h2", pI, o(u(t)("library", "Review")), 1),
                    he(Ge, {
                      text: u(t)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")
                    }, {
                      default: ke(() => [
                        ie(o(u(t)("library", "Metadata cleanup")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"])
                  ]),
                  l("nav", {
                    class: "library-review-queues",
                    "aria-label": u(t)("library", "Review queues")
                  }, [
                    (h(!0), p(W, null, fe(jg.value, (f) => (h(), p("a", {
                      key: f.key,
                      class: Ee(["library-review-queue-link", { active: f.active }]),
                      href: f.href,
                      "aria-current": f.active ? "page" : void 0,
                      onClick: Ce((F) => lm(f), ["prevent"])
                    }, [
                      l("span", null, o(f.label), 1),
                      l("b", null, o(um(f.countKey)), 1)
                    ], 10, bI))), 128))
                  ], 8, vI),
                  l("form", {
                    method: "get",
                    class: "library-review-filter-form",
                    "aria-label": u(t)("library", "Filter current review queue"),
                    onSubmit: Ce(Wt, ["prevent"])
                  }, [
                    (h(!0), p(W, null, fe($g.value, (f) => (h(), p("input", {
                      key: `review-${f.key}`,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, mI))), 128)),
                    l("label", null, [
                      ie(o(u(t)("library", "Search within this queue")), 1),
                      ye(l("input", {
                        "onUpdate:modelValue": b[45] || (b[45] = (f) => x.q = f),
                        type: "search",
                        name: "q"
                      }, null, 512), [
                        [Ue, x.q]
                      ])
                    ]),
                    l("button", yI, o(u(t)("library", "Apply")), 1)
                  ], 40, gI),
                  l("div", {
                    class: "library-review-request-status",
                    role: "status",
                    "aria-live": "polite",
                    "aria-busy": Mt.loading ? "true" : "false"
                  }, [
                    Mt.loading ? (h(), p("span", wI, o(u(t)("library", "Loading review queue…")), 1)) : A("", !0)
                  ], 8, _I),
                  Mt.error ? (h(), p("p", kI, o(Mt.error), 1)) : A("", !0),
                  nn.value.enabled ? (h(), p("section", SI, [
                    l("div", CI, [
                      l("p", TI, o(u(t)("library", "Metadata review workbench")), 1),
                      l("h3", {
                        id: "library-metadata-review-workbench-heading",
                        title: u(t)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                      }, o(u(t)("library", "Review next suggestion")), 9, AI)
                    ]),
                    nn.value.item ? (h(), p("article", EI, [
                      l("header", null, [
                        l("strong", null, [
                          l("bdi", $I, o(nn.value.item.title), 1)
                        ]),
                        l("span", xI, [
                          l("bdi", OI, o(nn.value.item.cachedPath), 1)
                        ])
                      ]),
                      l("div", NI, [
                        (h(!0), p(W, null, fe(nn.value.fields, (f) => (h(), p("article", {
                          key: f.field,
                          class: "library-metadata-review-field"
                        }, [
                          l("h4", null, [
                            l("bdi", RI, o(f.field), 1)
                          ]),
                          l("dl", null, [
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Current value")), 1),
                              l("dd", null, [
                                l("bdi", II, o(f.currentValue || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Suggested value")), 1),
                              l("dd", null, [
                                l("bdi", LI, o(f.scannerCandidate || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Path-based suggestion")), 1),
                              l("dd", null, [
                                l("bdi", PI, o(f.pathTemplateCandidate || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Sidecar value")), 1),
                              l("dd", null, [
                                l("bdi", DI, o(f.sidecarValue || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Source")), 1),
                              l("dd", null, [
                                l("bdi", FI, o(f.sourceProvenance || "—"), 1)
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
                            }, null, 8, UI),
                            l("input", {
                              type: "hidden",
                              name: "field",
                              value: f.field
                            }, null, 8, zI),
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
                            }, o(u(t)("library", "Use suggested value")), 9, jI)
                          ], 8, MI)
                        ]))), 128))
                      ]),
                      l("footer", BI, [
                        l("a", {
                          class: "button secondary",
                          href: nn.value.item.detailsUrl
                        }, o(u(t)("library", "Maintenance")), 9, HI),
                        l("a", {
                          class: "button secondary",
                          href: nn.value.skipUrl
                        }, o(u(t)("library", "Skip to next suggestion")), 9, VI)
                      ])
                    ])) : A("", !0)
                  ])) : A("", !0),
                  C.value.length === 0 && !Mt.loading && !Mt.error ? (h(), p("div", qI, [
                    l("h3", null, o(u(t)("library", "This review queue is clear")), 1),
                    l("p", null, o(u(t)("library", "Choose another queue or return to the catalogue.")), 1),
                    l("a", {
                      class: "button primary",
                      href: ft.value
                    }, o(u(t)("library", "Back to Library")), 9, GI)
                  ])) : (h(), p("div", {
                    key: 3,
                    class: "library-review-results",
                    role: "region",
                    "aria-label": u(t)("library", "Review results")
                  }, [
                    (h(!0), p(W, null, fe(C.value, (f) => (h(), p("article", {
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
                            l("bdi", YI, o(f.title), 1)
                          ], 8, WI)
                        ]),
                        f.creators ? (h(), p("p", ZI, [
                          l("bdi", XI, o(f.displayCreators ?? f.creators), 1)
                        ])) : A("", !0),
                        f.scanError ? (h(), p("p", JI, [
                          l("bdi", QI, o(f.scanError), 1)
                        ])) : A("", !0)
                      ]),
                      l("p", null, [
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (F) => Hi(f, F)
                        }, o(u(t)("library", "Details")), 9, eL),
                        l("a", {
                          class: "button primary",
                          href: f.openUrl,
                          onClick: (F) => ai(f, F)
                        }, o(u(t)("library", "Open")), 9, tL)
                      ])
                    ]))), 128))
                  ], 8, KI)),
                  C.value.length > 0 ? (h(), p("nav", {
                    key: 4,
                    class: "library-pagination",
                    "aria-label": u(t)("library", "Review pagination")
                  }, [
                    Q.value.previousUrl ? (h(), p("a", {
                      key: 0,
                      href: Q.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, aL)) : (h(), p("span", nL, o(u(t)("library", "Previous")), 1)),
                    l("span", null, [
                      ie(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                      Q.value.total > 0 ? (h(), p("span", rL, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : A("", !0)
                    ]),
                    Q.value.nextUrl ? (h(), p("a", {
                      key: 2,
                      href: Q.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, lL)) : (h(), p("span", sL, o(u(t)("library", "Next")), 1))
                  ], 8, iL)) : A("", !0)
                ])) : $n.value ? (h(), p("main", oL, [
                  l("header", uL, [
                    l("p", cL, o(u(t)("library", "Your library")), 1),
                    l("h2", dL, o(u(t)("library", "Home")), 1)
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
                      (h(!0), p(W, null, fe(Ct.value, (f) => (h(), p("a", {
                        key: `callout-${f.key}`,
                        href: tl(f.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                        onClick: Ce((F) => il(f.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          ie(o(f.label), 1),
                          f.displayValue ? (h(), p(W, { key: 0 }, [
                            ie(":")
                          ], 64)) : A("", !0)
                        ]),
                        f.displayValue ? (h(), p(W, { key: 0 }, [
                          b[118] || (b[118] = ie(o(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: f.value
                          }, o(f.displayValue), 9, vL)
                        ], 64)) : A("", !0),
                        b[119] || (b[119] = ie()),
                        b[120] || (b[120] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, pL))), 128))
                    ], 8, hL),
                    l("p", bL, [
                      l("a", {
                        class: "button primary library-filter-callout-view",
                        href: Ft.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, gL),
                      l("a", {
                        class: "button secondary",
                        href: Os(),
                        onClick: Ce(Ns, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, mL)
                    ])
                  ], 8, fL)) : A("", !0),
                  l("section", yL, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", _L, [
                          he(Ge, {
                            text: u(t)("library", "Pick up publications you opened recently.")
                          }, {
                            default: ke(() => [
                              ie(o(u(t)("library", "Continue reading")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", {
                        href: `${ft.value}?recentlyOpened=1&sort=lastOpened`
                      }, o(u(t)("library", "View all")), 9, wL)
                    ]),
                    ws.value.continueReading.length ? (h(), p("div", kL, [
                      (h(!0), p(W, null, fe(ws.value.continueReading, (f) => (h(), p("article", {
                        key: `continue-${f.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                          onClick: (F) => Hi(f, F)
                        }, [
                          l("span", CL, [
                            l("img", {
                              class: "library-cover-image",
                              src: f.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, TL)
                          ])
                        ], 8, SL),
                        l("div", AL, [
                          l("h4", null, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => Hi(f, F)
                            }, [
                              l("bdi", $L, o(f.title), 1)
                            ], 8, EL)
                          ]),
                          f.creators ? (h(), p("p", xL, [
                            l("bdi", OL, o(f.displayCreators ?? f.creators), 1)
                          ])) : A("", !0),
                          l("a", {
                            class: "library-cover-read",
                            href: f.openUrl,
                            onClick: (F) => ai(f, F)
                          }, o(u(t)("library", "Open")), 9, NL)
                        ])
                      ]))), 128))
                    ])) : (h(), p("p", RL, o(u(t)("library", "Publications you open will appear here.")), 1))
                  ]),
                  l("section", IL, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", LL, [
                          he(Ge, {
                            text: u(t)("library", "The latest publications indexed from your Library roots.")
                          }, {
                            default: ke(() => [
                              ie(o(u(t)("library", "Recently added")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", {
                        href: `${ft.value}?sort=recent`
                      }, o(u(t)("library", "View all")), 9, PL)
                    ]),
                    ws.value.recentlyAdded.length ? (h(), p("div", DL, [
                      (h(!0), p(W, null, fe(ws.value.recentlyAdded, (f) => (h(), p("article", {
                        key: `recent-${f.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                          onClick: (F) => Hi(f, F)
                        }, [
                          l("span", ML, [
                            l("img", {
                              class: "library-cover-image",
                              src: f.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, UL)
                          ])
                        ], 8, FL),
                        l("div", zL, [
                          l("h4", null, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => Hi(f, F)
                            }, [
                              l("bdi", BL, o(f.title), 1)
                            ], 8, jL)
                          ]),
                          f.creators ? (h(), p("p", HL, [
                            l("bdi", VL, o(f.displayCreators ?? f.creators), 1)
                          ])) : A("", !0),
                          l("a", {
                            class: "library-cover-read",
                            href: f.openUrl,
                            onClick: (F) => ai(f, F)
                          }, o(u(t)("library", "Open")), 9, qL)
                        ])
                      ]))), 128))
                    ])) : (h(), p("p", GL, o(u(t)("library", "Recently indexed publications will appear here.")), 1))
                  ]),
                  l("section", KL, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", WL, [
                          he(Ge, {
                            text: u(t)("library", "Browse the folders that organize your publications.")
                          }, {
                            default: ke(() => [
                              ie(o(u(t)("library", "Shelves")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", { href: gi.value }, o(u(t)("library", "View all")), 9, YL)
                    ]),
                    af.value.length ? (h(), p("nav", {
                      key: 0,
                      class: "library-home-shelves",
                      "aria-label": u(t)("library", "Shelves")
                    }, [
                      (h(!0), p(W, null, fe(af.value, (f) => (h(), p("a", {
                        key: f.shelf,
                        href: f.url
                      }, [
                        l("strong", null, [
                          l("bdi", JL, o(f.shelf), 1)
                        ]),
                        l("span", null, o(u(It)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                      ], 8, XL))), 128))
                    ], 8, ZL)) : (h(), p("p", QL, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1))
                  ]),
                  Number(Du.value.count || 0) > 0 ? (h(), p("aside", eP, [
                    l("div", null, [
                      l("h3", tP, o(u(t)("library", "Needs attention")), 1),
                      l("p", iP, o(u(It)("library", "%n publication needs better details.", "%n publications need better details.", Number(Du.value.count || 0))), 1)
                    ]),
                    l("a", {
                      class: "button tertiary",
                      href: Du.value.url
                    }, o(u(t)("library", "Review")), 9, aP)
                  ])) : A("", !0)
                ])) : Za.value ? (h(), p("main", nP, [
                  l("header", rP, [
                    l("p", lP, o(u(t)("library", "Your library")), 1),
                    l("h2", sP, [
                      he(Ge, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: ke(() => [
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
                      (h(!0), p(W, null, fe(Ct.value, (f) => (h(), p("a", {
                        key: `callout-${f.key}`,
                        href: tl(f.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                        onClick: Ce((F) => il(f.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          ie(o(f.label), 1),
                          f.displayValue ? (h(), p(W, { key: 0 }, [
                            ie(":")
                          ], 64)) : A("", !0)
                        ]),
                        f.displayValue ? (h(), p(W, { key: 0 }, [
                          b[121] || (b[121] = ie(o(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: f.value
                          }, o(f.displayValue), 9, dP)
                        ], 64)) : A("", !0),
                        b[122] || (b[122] = ie()),
                        b[123] || (b[123] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, cP))), 128))
                    ], 8, uP),
                    l("p", fP, [
                      l("a", {
                        class: "button primary library-filter-callout-view",
                        href: Ft.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, hP),
                      l("a", {
                        class: "button secondary",
                        href: Os(),
                        onClick: Ce(Ns, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, pP)
                    ])
                  ], 8, oP)) : A("", !0),
                  nf.value.length ? (h(), p("nav", {
                    key: 1,
                    "aria-label": u(t)("library", "Shelves")
                  }, [
                    l("ul", bP, [
                      (h(!0), p(W, null, fe(nf.value, (f) => (h(), De(wT, {
                        key: f.id,
                        node: f,
                        "children-url": Dr.value
                      }, null, 8, ["node", "children-url"]))), 128))
                    ])
                  ], 8, vP)) : (h(), p("section", gP, [
                    l("h3", null, [
                      he(Ge, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: ke(() => [
                          ie(o(u(t)("library", "Shelves")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    l("p", mP, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1),
                    l("p", yP, [
                      l("a", {
                        class: "button primary",
                        href: Wa.value
                      }, o(u(t)("library", "Add a Library root")), 9, _P),
                      l("a", {
                        class: "button secondary",
                        href: ft.value
                      }, o(u(t)("library", "All publications")), 9, wP)
                    ])
                  ]))
                ])) : (h(), p("section", {
                  key: 4,
                  id: "library-catalogue",
                  class: Ee(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": Mt.loading }]),
                  "aria-labelledby": "library-catalogue-heading",
                  "aria-busy": Mt.loading ? "true" : "false"
                }, [
                  l("header", SP, [
                    en.value ? (h(), p("p", CP, o(di.value), 1)) : A("", !0),
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
                    onToggle: Tg
                  }, [
                    l("summary", {
                      class: "library-mobile-filter-trigger",
                      "aria-label": Sg.value
                    }, [
                      l("span", AP, o(u(It)("library", "%n item", "%n items", Number(Q.value.total || 0))), 1),
                      l("strong", null, o(kg.value), 1)
                    ], 8, TP),
                    l("form", {
                      method: "get",
                      class: "library-mobile-filter-form",
                      "aria-label": u(t)("library", "Mobile catalogue filters"),
                      onSubmit: Ce(yf, ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "folder",
                        value: x.folder
                      }, null, 8, $P),
                      (h(!0), p(W, null, fe(tf.value, (f) => (h(), p("input", {
                        key: `mobile-hidden-${f.key}`,
                        type: "hidden",
                        name: f.key,
                        value: f.value
                      }, null, 8, xP))), 128)),
                      l("fieldset", OP, [
                        l("legend", null, o(u(t)("library", "Content")), 1),
                        l("label", NP, [
                          l("span", null, o(u(t)("library", "Search")), 1),
                          ye(l("input", {
                            ref_key: "mobileFilterSearchInput",
                            ref: jr,
                            "onUpdate:modelValue": b[46] || (b[46] = (f) => K.value = f),
                            "data-library-mobile-filter-search": "",
                            type: "search",
                            name: "q",
                            placeholder: u(t)("library", "Title, creator, description, filename or folder")
                          }, null, 8, RP), [
                            [Ue, K.value]
                          ])
                        ]),
                        l("label", null, [
                          ie(o(u(t)("library", "Type")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[47] || (b[47] = (f) => x.type = f),
                            name: "type",
                            onChange: b[48] || (b[48] = (f) => _i(f))
                          }, [
                            l("option", IP, o(u(t)("library", "All types")), 1),
                            (h(!0), p(W, null, fe(L.value, (f) => (h(), p("option", {
                              key: `mobile-type-${f}`,
                              value: f
                            }, o(f), 9, LP))), 128))
                          ], 544), [
                            [nt, x.type]
                          ])
                        ]),
                        l("div", PP, [
                          l("label", DP, o(u(t)("library", "Publisher")), 1),
                          ye(l("input", {
                            id: "library-mobile-publisher-search",
                            "onUpdate:modelValue": b[49] || (b[49] = (f) => X.value = f),
                            type: "search",
                            name: "publisherSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search publishers"),
                            title: u(t)("library", "Exact publisher matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-publisher-suggestions",
                            "aria-activedescendant": $f("mobile", "publisher"),
                            "aria-expanded": ae.value && be.value.length > 0 ? "true" : "false",
                            onFocus: b[50] || (b[50] = (f) => xf("publisher")),
                            onKeydown: b[51] || (b[51] = (f) => Of(f, "publisher"))
                          }, null, 40, FP), [
                            [Ue, X.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "publisher",
                            value: x.publisher
                          }, null, 8, MP),
                          yi("publisher") ? (h(), p("small", UP, o(ji("publisher")), 1)) : A("", !0),
                          mi.value && ae.value && be.value.length > 0 ? (h(), p("ul", zP, [
                            (h(!0), p(W, null, fe(be.value, (f, F) => (h(), p("li", {
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
                              }, o(f), 41, BP)
                            ], 8, jP))), 128))
                          ])) : A("", !0)
                        ]),
                        l("div", HP, [
                          l("label", VP, o(u(t)("library", "Series / periodical")), 1),
                          ye(l("input", {
                            id: "library-mobile-publication-search",
                            "onUpdate:modelValue": b[53] || (b[53] = (f) => B.value = f),
                            type: "search",
                            name: "publicationSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search series and periodicals"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-publication-suggestions",
                            "aria-expanded": Z.value && H.value.length > 0 ? "true" : "false",
                            onFocus: b[54] || (b[54] = (f) => Z.value = !0),
                            onKeydown: b[55] || (b[55] = ht((f) => Z.value = !1, ["escape"]))
                          }, null, 40, qP), [
                            [Ue, B.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "publication",
                            value: x.publication
                          }, null, 8, GP),
                          yi("publication") ? (h(), p("small", KP, o(ji("publication")), 1)) : A("", !0),
                          mi.value && Z.value && H.value.length > 0 ? (h(), p("ul", WP, [
                            (h(!0), p(W, null, fe(H.value, (f) => (h(), p("li", {
                              key: `mobile-publication-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-publication-suggestion",
                                onMousedown: b[56] || (b[56] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => mf(f, F)
                              }, o(f), 41, YP)
                            ]))), 128))
                          ])) : A("", !0)
                        ]),
                        l("div", ZP, [
                          l("label", XP, o(u(t)("library", "Publication year")), 1),
                          ye(l("input", {
                            id: "library-mobile-year-search",
                            "onUpdate:modelValue": b[57] || (b[57] = (f) => Gt.value = f),
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
                          }, null, 40, JP), [
                            [Ue, Gt.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "year",
                            value: x.year
                          }, null, 8, QP),
                          yi("year") ? (h(), p("small", e8, o(ji("year")), 1)) : A("", !0),
                          mi.value && bi.value && Yi.value.length > 0 ? (h(), p("ul", t8, [
                            (h(!0), p(W, null, fe(Yi.value, (f) => (h(), p("li", {
                              key: `mobile-year-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-year-suggestion",
                                onMousedown: b[60] || (b[60] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => Ef(f, F)
                              }, o(f), 41, i8)
                            ]))), 128))
                          ])) : A("", !0)
                        ]),
                        l("div", a8, [
                          l("label", n8, o(u(t)("library", "Creator")), 1),
                          ye(l("input", {
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
                            "aria-expanded": Ze.value && le.value.length > 0 ? "true" : "false",
                            onFocus: b[62] || (b[62] = (f) => Ze.value = !0),
                            onKeydown: b[63] || (b[63] = ht((f) => Ze.value = !1, ["escape"]))
                          }, null, 40, r8), [
                            [Ue, Me.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "creator",
                            value: x.creator
                          }, null, 8, l8),
                          yi("creator") ? (h(), p("small", s8, o(ji("creator")), 1)) : A("", !0),
                          mi.value && Ze.value && le.value.length > 0 ? (h(), p("ul", o8, [
                            (h(!0), p(W, null, fe(le.value, (f) => (h(), p("li", {
                              key: `mobile-creator-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-creator-suggestion",
                                onMousedown: b[64] || (b[64] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => _f(f, F)
                              }, o(f), 41, u8)
                            ]))), 128))
                          ])) : A("", !0)
                        ]),
                        l("label", null, [
                          ie(o(u(t)("library", "Format")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[65] || (b[65] = (f) => x.format = f),
                            name: "format",
                            onChange: b[66] || (b[66] = (f) => _i(f))
                          }, [
                            l("option", c8, o(u(t)("library", "All formats")), 1),
                            (h(!0), p(W, null, fe($.value, (f) => (h(), p("option", {
                              key: `mobile-format-${f}`,
                              value: f
                            }, o(Rs(f)), 9, d8))), 128))
                          ], 544), [
                            [nt, x.format]
                          ])
                        ]),
                        l("div", f8, [
                          l("label", h8, o(u(t)("library", "Subject")), 1),
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
                            "aria-expanded": re.value && me.value.length > 0 ? "true" : "false",
                            onFocus: b[68] || (b[68] = (f) => re.value = !0),
                            onKeydown: b[69] || (b[69] = ht((f) => re.value = !1, ["escape"]))
                          }, null, 40, p8), [
                            [Ue, ee.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "subject",
                            value: x.subject
                          }, null, 8, v8),
                          yi("subject") ? (h(), p("small", b8, o(ji("subject")), 1)) : A("", !0),
                          mi.value && re.value && me.value.length > 0 ? (h(), p("ul", g8, [
                            (h(!0), p(W, null, fe(me.value, (f) => (h(), p("li", {
                              key: `mobile-subject-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-subject-suggestion",
                                onMousedown: b[70] || (b[70] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => Af(f, F)
                              }, o(f), 41, m8)
                            ]))), 128))
                          ])) : A("", !0)
                        ]),
                        l("div", y8, [
                          l("label", _8, o(u(t)("library", "Classification")), 1),
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
                            "aria-expanded": Re.value && Ye.value.length > 0 ? "true" : "false",
                            onFocus: b[72] || (b[72] = (f) => Re.value = !0),
                            onKeydown: b[73] || (b[73] = ht((f) => Re.value = !1, ["escape"]))
                          }, null, 40, w8), [
                            [Ue, $e.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "classification",
                            value: x.classification
                          }, null, 8, k8),
                          mi.value && Re.value && Ye.value.length > 0 ? (h(), p("ul", S8, [
                            (h(!0), p(W, null, fe(Ye.value, (f) => (h(), p("li", {
                              key: `mobile-classification-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-classification-suggestion",
                                onMousedown: b[74] || (b[74] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => kf(f, F)
                              }, o(f), 41, C8)
                            ]))), 128))
                          ])) : A("", !0)
                        ])
                      ]),
                      l("fieldset", T8, [
                        l("legend", null, o(u(t)("library", "Location")), 1),
                        l("label", null, [
                          ie(o(u(t)("library", "Shelf")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[75] || (b[75] = (f) => x.shelf = f),
                            name: "shelf",
                            onChange: b[76] || (b[76] = (f) => _i(f))
                          }, [
                            l("option", A8, o(u(t)("library", "All shelves")), 1),
                            (h(!0), p(W, null, fe(S.value, (f) => (h(), p("option", {
                              key: `mobile-shelf-${f}`,
                              value: f
                            }, o(f), 9, E8))), 128))
                          ], 544), [
                            [nt, x.shelf]
                          ])
                        ]),
                        l("div", $8, [
                          l("label", x8, o(u(t)("library", "Folder")), 1),
                          ye(l("input", {
                            id: "library-mobile-folder-search",
                            "onUpdate:modelValue": b[77] || (b[77] = (f) => it.value = f),
                            type: "search",
                            name: "folderSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Type at least 3 path characters"),
                            title: u(t)("library", "Select an exact folder path"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-folder-suggestions",
                            "aria-expanded": ne.value && O.value.length > 0 ? "true" : "false",
                            onFocus: b[78] || (b[78] = (f) => ne.value = !0),
                            onKeydown: b[79] || (b[79] = ht((f) => ne.value = !1, ["escape"]))
                          }, null, 40, O8), [
                            [Ue, it.value]
                          ]),
                          mi.value && ne.value && O.value.length > 0 ? (h(), p("ul", N8, [
                            (h(!0), p(W, null, fe(O.value, (f) => (h(), p("li", {
                              key: `mobile-folder-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-folder-suggestion",
                                onMousedown: b[80] || (b[80] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => Cf(f, F)
                              }, o(f), 41, R8)
                            ]))), 128))
                          ])) : A("", !0)
                        ])
                      ]),
                      l("fieldset", I8, [
                        l("legend", null, o(u(t)("library", "Review")), 1),
                        l("label", null, [
                          ie(o(u(t)("library", "Scan status")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[81] || (b[81] = (f) => x.status = f),
                            name: "status",
                            onChange: b[82] || (b[82] = (f) => _i(f))
                          }, [
                            l("option", L8, o(u(t)("library", "All scan statuses")), 1),
                            (h(!0), p(W, null, fe(N.value, (f) => (h(), p("option", {
                              key: `mobile-scan-${f}`,
                              value: f
                            }, o(f), 9, P8))), 128))
                          ], 544), [
                            [nt, x.status]
                          ])
                        ]),
                        l("label", null, [
                          ie(o(u(t)("library", "Workflow status")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[83] || (b[83] = (f) => x.workflowStatus = f),
                            name: "workflowStatus",
                            onChange: b[84] || (b[84] = (f) => _i(f))
                          }, [
                            l("option", D8, o(u(t)("library", "All workflow statuses")), 1),
                            (h(!0), p(W, null, fe(pe.value, (f) => (h(), p("option", {
                              key: `mobile-workflow-${f}`,
                              value: f
                            }, o(f), 9, F8))), 128))
                          ], 544), [
                            [nt, x.workflowStatus]
                          ])
                        ]),
                        l("label", null, [
                          ie(o(u(t)("library", "Suggested updates")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[85] || (b[85] = (f) => x.scannerConflicts = f),
                            name: "scannerConflicts",
                            onChange: b[86] || (b[86] = (f) => _i(f))
                          }, [
                            l("option", M8, o(u(t)("library", "All metadata")), 1),
                            l("option", U8, o(u(t)("library", "Suggested updates")), 1)
                          ], 544), [
                            [nt, x.scannerConflicts]
                          ])
                        ])
                      ]),
                      l("fieldset", z8, [
                        l("legend", null, o(u(t)("library", "Personal / display")), 1),
                        l("div", j8, [
                          l("label", B8, o(u(t)("library", "Nextcloud tag")), 1),
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
                          }, null, 40, H8), [
                            [Ue, _t.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "tag",
                            value: x.tag
                          }, null, 8, V8),
                          bt.value && vi.value.length > 0 ? (h(), p("ul", q8, [
                            (h(!0), p(W, null, fe(vi.value, (f) => (h(), p("li", {
                              key: f,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-tag-suggestion",
                                onMousedown: b[90] || (b[90] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => Sf(f, F)
                              }, o(f), 41, G8)
                            ]))), 128))
                          ])) : A("", !0),
                          l("button", {
                            type: "submit",
                            class: Ee(["button secondary library-tag-apply", ma("tag")])
                          }, o(u(t)("library", "Apply tag")), 3)
                        ]),
                        l("label", null, [
                          ie(o(u(t)("library", "Sort")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[91] || (b[91] = (f) => x.sort = f),
                            name: "sort",
                            onChange: Wt
                          }, [
                            l("option", K8, o(u(t)("library", "Title")), 1),
                            l("option", W8, o(u(t)("library", "Date added")), 1),
                            l("option", Y8, o(u(t)("library", "Publication date")), 1),
                            l("option", Z8, o(u(t)("library", "Series")), 1),
                            l("option", X8, o(u(t)("library", "Recently opened")), 1),
                            l("option", J8, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [nt, x.sort]
                          ])
                        ]),
                        l("label", null, [
                          ie(o(u(t)("library", "View")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[92] || (b[92] = (f) => x.view = f),
                            name: "view",
                            onChange: Wt
                          }, [
                            l("option", Q8, o(u(t)("library", "Compact")), 1),
                            l("option", e5, o(u(t)("library", "List")), 1)
                          ], 544), [
                            [nt, x.view]
                          ])
                        ])
                      ]),
                      l("div", t5, [
                        Ct.value.length > 0 ? (h(), p("a", {
                          key: 0,
                          href: Os(),
                          class: "button secondary library-mobile-filter-clear",
                          onClick: Ce(Ns, ["prevent"])
                        }, o(u(t)("library", "Clear all")), 9, i5)) : A("", !0),
                        l("button", a5, o(Cg.value), 1)
                      ])
                    ], 40, EP)
                  ], 32),
                  l("nav", {
                    class: "library-catalogue-workspace library-workspace-menubar",
                    "aria-label": u(t)("library", "One catalogue workspace")
                  }, [
                    l("div", r5, [
                      l("section", l5, [
                        l("h3", {
                          title: u(t)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                        }, o(u(t)("library", "Collections")), 9, s5),
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
                          }, null, 8, u5),
                          l("input", {
                            type: "hidden",
                            name: "savedCollectionFilters",
                            value: cm.value
                          }, null, 8, c5),
                          l("label", null, [
                            l("span", d5, o(u(t)("library", "Collection name")), 1),
                            l("input", {
                              type: "text",
                              name: "savedCollectionName",
                              placeholder: u(t)("library", "e.g. Bremen photo books"),
                              disabled: !qu.value,
                              autocomplete: "off"
                            }, null, 8, f5)
                          ]),
                          l("button", {
                            type: "submit",
                            class: "button secondary",
                            disabled: !qu.value,
                            title: u(t)("library", "Save current view")
                          }, o(u(t)("library", "Save")), 9, h5)
                        ], 8, o5)
                      ]),
                      l("form", {
                        method: "get",
                        class: "library-quick-filter-bar library-catalogue-toolbar",
                        "aria-label": u(t)("library", "Catalogue toolbar"),
                        onSubmit: Ce(Wt, ["prevent"])
                      }, [
                        (h(!0), p(W, null, fe(Eg.value, (f) => (h(), p("input", {
                          key: f.key,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, v5))), 128)),
                        l("label", b5, [
                          ie(o(u(t)("library", "Sort")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[93] || (b[93] = (f) => x.sort = f),
                            name: "sort",
                            onChange: Wt
                          }, [
                            l("option", g5, o(u(t)("library", "Title")), 1),
                            l("option", m5, o(u(t)("library", "Date added")), 1),
                            l("option", y5, o(u(t)("library", "Publication date")), 1),
                            l("option", _5, o(u(t)("library", "Series")), 1),
                            l("option", w5, o(u(t)("library", "Recently opened")), 1),
                            l("option", k5, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [nt, x.sort]
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
                            class: Ee({ active: oe.value === "compact" }),
                            "aria-pressed": oe.value === "compact" ? "true" : "false",
                            onClick: b[94] || (b[94] = (f) => Lf("compact"))
                          }, o(u(t)("library", "Compact")), 11, C5),
                          l("button", {
                            type: "button",
                            "data-library-view-mode": "list",
                            class: Ee({ active: oe.value === "list" }),
                            "aria-pressed": oe.value === "list" ? "true" : "false",
                            onClick: b[95] || (b[95] = (f) => Lf("list"))
                          }, o(u(t)("library", "List")), 11, T5)
                        ], 8, S5)
                      ], 40, p5)
                    ])
                  ], 8, n5),
                  hr.value ? (h(), p("p", A5, o(hr.value), 1)) : A("", !0),
                  tn.value ? (h(), p("p", E5, o(tn.value), 1)) : A("", !0),
                  Hr.value ? (h(), p("p", $5, o(Hr.value), 1)) : A("", !0),
                  l("div", x5, [
                    Mt.loading ? (h(), p("span", O5, o(u(t)("library", "Updating catalogue…")), 1)) : Mt.completed ? (h(), p("span", N5, o(u(It)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(Q.value.total || 0))), 1)) : A("", !0)
                  ]),
                  en.value ? (h(), p("section", R5, [
                    l("p", I5, o(di.value), 1),
                    l("h3", {
                      id: "library-discovery-heading",
                      title: cr.value ? u(t)("library", "Items by this creator, sorted by publication context when available.") : On.value ? u(t)("library", "Items from this publication year, sorted by publication date when available.") : u(t)("library", "Items in this publication, sorted by issue/date context when available.")
                    }, o(zi.value), 9, L5),
                    l("div", {
                      class: "library-discovery-hero-metrics",
                      "aria-label": u(t)("library", "Discovery summary")
                    }, [
                      l("span", null, o(u(It)("library", "%n item", "%n items", Q.value.total)), 1),
                      P.value?.earliestYear && P.value?.latestYear ? (h(), p("span", D5, o(P.value.earliestYear) + "–" + o(P.value.latestYear), 1)) : A("", !0),
                      P.value?.datedCount ? (h(), p("span", F5, o(P.value.datedCount) + " " + o(u(t)("library", "dated")), 1)) : A("", !0),
                      P.value?.undatedCount > 0 ? (h(), p("span", M5, o(P.value.undatedCount) + " " + o(u(t)("library", "undated")), 1)) : A("", !0)
                    ], 8, P5),
                    Qa.value && P.value ? (h(), p("aside", {
                      key: 0,
                      class: "library-publication-issue-context",
                      "aria-label": u(t)("library", "Publication issue/date context")
                    }, [
                      l("strong", null, o(u(t)("library", "Publication contents")), 1),
                      l("span", null, o(u(It)("library", "%n item", "%n items", P.value.itemCount)), 1),
                      P.value.earliestYear && P.value.latestYear ? (h(), p("span", z5, o(P.value.earliestYear) + "–" + o(P.value.latestYear), 1)) : A("", !0),
                      l("span", null, o(P.value.datedCount) + " " + o(u(t)("library", "with issue/date coverage")), 1),
                      P.value.undatedCount > 0 ? (h(), p("span", j5, o(P.value.undatedCount) + " " + o(u(t)("library", "without dates yet")), 1)) : A("", !0),
                      l("span", null, o(u(t)("library", "read-only grouping")), 1)
                    ], 8, U5)) : A("", !0),
                    Qa.value && P.value?.issueGroups?.length ? (h(), p("section", B5, [
                      l("div", null, [
                        l("p", H5, o(u(t)("library", "Issue order")), 1),
                        l("h4", {
                          id: "library-publication-issue-groups-heading",
                          title: u(t)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                        }, o(u(t)("library", "Read-only issue/date grouping")), 9, V5)
                      ]),
                      l("div", {
                        class: "library-publication-issue-strip",
                        "aria-label": u(t)("library", "Visual issue strip")
                      }, [
                        (h(!0), p(W, null, fe(P.value.issueGroups, (f) => (h(), p("a", {
                          key: `strip-${f.label}`,
                          class: "library-issue-strip-card",
                          href: f.items?.[0]?.detailsUrl || "#"
                        }, [
                          l("span", null, o(f.label), 1),
                          l("strong", null, o(f.items?.[0]?.issueLabel || u(t)("library", "Issue")), 1),
                          l("small", null, o(u(It)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                        ], 8, G5))), 128))
                      ], 8, q5),
                      P.value.gapRanges?.length ? (h(), p("p", K5, o(u(t)("library", "Gap")) + ": " + o(P.value.gapRanges.join(", ")), 1)) : A("", !0),
                      (h(!0), p(W, null, fe(P.value.issueGroups, (f) => (h(), p("div", {
                        key: f.label,
                        class: "library-publication-issue-group"
                      }, [
                        l("h5", null, o(f.label), 1),
                        l("ol", null, [
                          (h(!0), p(W, null, fe(f.items, (F, ve) => (h(), p("li", {
                            key: F.itemId
                          }, [
                            l("span", W5, o(F.issueLabel), 1),
                            l("a", {
                              href: F.detailsUrl || "#"
                            }, o(F.title), 9, Y5),
                            l("small", null, [
                              ie(o(F.publicationType), 1),
                              F.publicationDate ? (h(), p(W, { key: 0 }, [
                                ie(" · " + o(F.publicationDate), 1)
                              ], 64)) : A("", !0)
                            ]),
                            l("small", Z5, [
                              ve > 0 ? (h(), p(W, { key: 0 }, [
                                ie(o(u(t)("library", "Previous issue")), 1)
                              ], 64)) : A("", !0),
                              ve > 0 && ve < f.items.length - 1 ? (h(), p(W, { key: 1 }, [
                                ie(" · ")
                              ], 64)) : A("", !0),
                              ve < f.items.length - 1 ? (h(), p(W, { key: 2 }, [
                                ie(o(u(t)("library", "Next issue")), 1)
                              ], 64)) : A("", !0)
                            ])
                          ]))), 128))
                        ])
                      ]))), 128)),
                      P.value.unknownIssueItems?.length ? (h(), p("details", X5, [
                        l("summary", {
                          title: u(t)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                        }, o(u(t)("library", "Unknown issue/date")) + " · " + o(P.value.unknownIssueItems.length), 9, J5)
                      ])) : A("", !0)
                    ])) : A("", !0),
                    l("p", null, [
                      l("a", {
                        href: ft.value,
                        class: "button secondary library-discovery-back-link"
                      }, o(u(t)("library", "Back to full catalogue")), 9, Q5)
                    ])
                  ])) : A("", !0),
                  l("div", eD, [
                    l("p", tD, o(u(t)("library", "Showing")) + " " + o(Q.value.from) + "–" + o(Q.value.to) + " " + o(u(t)("library", "of")) + " " + o(Q.value.total) + " " + o(u(t)("library", "catalogue items")), 1),
                    l("nav", {
                      class: "library-pagination library-pagination--top",
                      "aria-label": u(t)("library", "Catalogue pagination")
                    }, [
                      l("span", aD, [
                        ie(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                        Q.value.total > 0 ? (h(), p("span", nD, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : A("", !0)
                      ]),
                      Q.value.previousUrl ? (h(), p("a", {
                        key: 0,
                        href: Q.value.previousUrl
                      }, o(u(t)("library", "Previous")), 9, rD)) : (h(), p("span", lD, o(u(t)("library", "Previous")), 1)),
                      Q.value.nextUrl ? (h(), p("a", {
                        key: 2,
                        href: Q.value.nextUrl
                      }, o(u(t)("library", "Next")), 9, sD)) : (h(), p("span", oD, o(u(t)("library", "Next")), 1))
                    ], 8, iD)
                  ]),
                  C.value.length === 0 ? (h(), p("div", {
                    key: 4,
                    class: Ee(["library-empty-content", { "library-first-run-guidance": zr.value || fr.value, "library-filter-empty-state": ga.value && !zr.value && !fr.value }]),
                    role: "status"
                  }, [
                    zr.value ? (h(), p(W, { key: 0 }, [
                      l("h3", {
                        title: u(t)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                      }, o(u(t)("library", "Start with one Library root")), 9, uD),
                      l("p", cD, [
                        l("a", {
                          href: Wa.value,
                          class: "button primary"
                        }, o(u(t)("library", "Add a Library root")), 9, dD),
                        l("span", fD, o(u(t)("library", "Run a scan after saving a root")), 1)
                      ])
                    ], 64)) : fr.value ? (h(), p(W, { key: 1 }, [
                      l("h3", {
                        title: u(t)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                      }, o(u(t)("library", "No enabled Library roots")), 9, hD),
                      l("p", pD, [
                        l("a", {
                          href: Wa.value,
                          class: "button primary"
                        }, o(u(t)("library", "Open Library settings")), 9, vD)
                      ])
                    ], 64)) : ga.value ? (h(), p(W, { key: 2 }, [
                      l("h3", {
                        title: u(t)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                      }, o(u(t)("library", "No items match these filters")), 9, bD),
                      Ct.value.length > 0 ? (h(), p("nav", {
                        key: 0,
                        class: "library-empty-filter-chips",
                        "aria-label": u(t)("library", "Remove active filters")
                      }, [
                        (h(!0), p(W, null, fe(Ct.value, (f) => (h(), p("a", {
                          key: `empty-${f.key}`,
                          href: tl(f.key),
                          class: "library-filter-chip",
                          "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                          onClick: Ce((F) => il(f.key), ["prevent"])
                        }, [
                          l("strong", null, [
                            ie(o(f.label), 1),
                            f.displayValue ? (h(), p(W, { key: 0 }, [
                              ie(":")
                            ], 64)) : A("", !0)
                          ]),
                          f.displayValue ? (h(), p(W, { key: 0 }, [
                            b[124] || (b[124] = ie(o(" "), -1)),
                            l("span", {
                              class: "library-filter-chip-value",
                              title: f.value
                            }, o(f.displayValue), 9, yD)
                          ], 64)) : A("", !0),
                          b[125] || (b[125] = ie()),
                          b[126] || (b[126] = l("span", { "aria-hidden": "true" }, "×", -1))
                        ], 8, mD))), 128))
                      ], 8, gD)) : A("", !0),
                      $i.value ? (h(), p("p", _D, o(u(t)("library", "Try removing {filter}.", { filter: $i.value.displayValue ? `${$i.value.label}: ${$i.value.displayValue}` : $i.value.label })), 1)) : A("", !0),
                      l("p", wD, [
                        ys.value ? (h(), p("a", {
                          key: 0,
                          href: sm(),
                          class: "button secondary library-empty-clear-search",
                          onClick: b[96] || (b[96] = Ce((f) => il("q"), ["prevent"]))
                        }, o(u(t)("library", "Clear search")), 9, kD)) : A("", !0)
                      ])
                    ], 64)) : (h(), p(W, { key: 3 }, [
                      l("h3", {
                        title: u(t)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                      }, o(u(t)("library", "No catalogue items yet")), 9, SD),
                      l("p", CD, [
                        l("a", {
                          href: Wa.value,
                          class: "button primary"
                        }, o(u(t)("library", "Run a scan from settings")), 9, TD)
                      ])
                    ], 64))
                  ], 2)) : A("", !0),
                  C.value.length > 0 ? (h(), p("section", {
                    key: 5,
                    class: Ee(["library-list-selection", { "library-list-selection--active": ni.value.length }]),
                    "aria-label": u(t)("library", "Selection")
                  }, [
                    l("div", ED, [
                      l("label", $D, [
                        l("input", {
                          type: "checkbox",
                          checked: ni.value.length === C.value.length,
                          onChange: xg
                        }, null, 40, xD),
                        l("span", {
                          title: u(t)("library", "Select all publications on this page")
                        }, o(u(t)("library", "Select all")), 9, OD)
                      ]),
                      ni.value.length ? (h(), p("span", ND, o(u(It)("library", "%n publication selected", "%n publications selected", ni.value.length)), 1)) : A("", !0),
                      ye(he(hd, {
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
                        l("option", ID, o(u(t)("library", "More actions")), 1),
                        l("option", LD, o(u(t)("library", "Add tag")), 1),
                        l("option", PD, o(u(t)("library", "Remove tag")), 1),
                        l("option", DD, o(u(t)("library", "Preview edit")), 1),
                        l("option", FD, o(u(t)("library", "Fresh covers")), 1),
                        l("option", MD, o(u(t)("library", "Reset metadata")), 1)
                      ], 8, RD)), [
                        [nt, rt.value]
                      ]) : A("", !0)
                    ]),
                    ni.value.length && rt.value ? (h(), p("div", {
                      key: 0,
                      class: "library-selection-action",
                      onSubmitCapture: Ng
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
                        }, null, 8, zD),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Add tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, jD)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button primary",
                          title: u(t)("library", "Applies only to the selected publications.")
                        }, o(u(t)("library", "Apply")), 9, BD)
                      ], 8, UD)) : A("", !0),
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
                        }, null, 8, VD),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Remove tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, qD)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Removes the tag only from the selected publications.")
                        }, o(u(t)("library", "Remove")), 9, GD)
                      ], 8, HD)) : A("", !0),
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
                        }, null, 8, WD),
                        (h(!0), p(W, null, fe(_s.value, (f) => (h(), p("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, YD))), 128)),
                        b[127] || (b[127] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Reset metadata")), 9, ZD)
                      ], 8, KD)) : A("", !0),
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
                        }, null, 8, JD),
                        (h(!0), p(W, null, fe(_s.value, (f) => (h(), p("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, QD))), 128)),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Field")), 1),
                          l("select", eF, [
                            l("option", tF, o(u(t)("library", "Publication type")), 1),
                            l("option", iF, o(u(t)("library", "Subtitle")), 1),
                            l("option", aF, o(u(t)("library", "Creators")), 1),
                            l("option", nF, o(u(t)("library", "Series / periodical")), 1),
                            l("option", rF, o(u(t)("library", "Series")), 1),
                            l("option", lF, o(u(t)("library", "Part in series")), 1),
                            l("option", sF, o(u(t)("library", "Genre")), 1),
                            l("option", oF, o(u(t)("library", "Publication date")), 1),
                            l("option", uF, o(u(t)("library", "Language")), 1),
                            l("option", cF, o(u(t)("library", "Publisher")), 1),
                            l("option", dF, o(u(t)("library", "Subjects")), 1),
                            l("option", fF, o(u(t)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Value")), 1),
                          l("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: u(t)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, hF)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Preview first, then apply from the review page.")
                        }, o(u(t)("library", "Preview edit")), 9, pF)
                      ], 8, XD)) : A("", !0),
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
                        }, null, 8, bF),
                        (h(!0), p(W, null, fe(_s.value, (f) => (h(), p("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, gF))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Fresh covers")), 9, mF)
                      ], 8, vF)) : A("", !0),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: b[98] || (b[98] = (f) => rt.value = "")
                      }, o(u(t)("library", "Cancel")), 1)
                    ], 32)) : A("", !0)
                  ], 10, AD)) : A("", !0),
                  sr.value && (u(Eu) === "building" || Object.values(u(ba)).some((f) => f.status === "partial")) ? (h(), p("p", yF, o(u(t)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : A("", !0),
                  C.value.length > 0 && oe.value === "list" ? (h(), p("div", _F, [
                    l("table", wF, [
                      l("caption", kF, o(u(t)("library", "Catalogue list")), 1),
                      l("thead", null, [
                        l("tr", null, [
                          l("th", SF, [
                            l("span", CF, o(u(t)("library", "Selection")), 1)
                          ]),
                          l("th", TF, [
                            l("span", AF, o(u(t)("library", "Cover")), 1)
                          ]),
                          l("th", EF, o(u(t)("library", "Title")), 1),
                          l("th", $F, o(u(t)("library", "Creators")), 1),
                          l("th", xF, o(u(t)("library", "Publication date")), 1),
                          l("th", OF, o(u(t)("library", "Series")), 1),
                          l("th", NF, o(u(t)("library", "Format")), 1),
                          l("th", RF, o(u(t)("library", "Shelf")), 1),
                          l("th", IF, o(u(t)("library", "Actions")), 1)
                        ])
                      ]),
                      l("tbody", null, [
                        (h(!0), p(W, null, fe(C.value, (f) => (h(), p("tr", {
                          key: f.id,
                          class: Ee(["library-catalogue-list-row", { "library-catalogue-list-row--selected": ks.value.has(Number(f.id)), "library-catalogue-list-row--open": an.value && Number(Rn.value) === Number(f.id) }])
                        }, [
                          l("td", LF, [
                            l("label", PF, [
                              l("input", {
                                type: "checkbox",
                                checked: ks.value.has(Number(f.id)),
                                "aria-label": `${u(t)("library", "Select publication")}: ${f.title}`,
                                onChange: (F) => rf(f.id, F.currentTarget.checked)
                              }, null, 40, DF)
                            ])
                          ]),
                          l("td", FF, [
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
                              }, null, 8, UF)
                            ], 8, MF)
                          ]),
                          l("th", zF, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button library-catalogue-list-title",
                              onClick: (F) => Hi(f, F)
                            }, [
                              l("bdi", BF, o(f.title), 1)
                            ], 8, jF),
                            u(ba)[f.id]?.count ? (h(), p("a", {
                              key: 0,
                              class: "library-duplicate-badge",
                              href: `${ft.value}?duplicates=1&bookId=${f.id}`
                            }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(ba)[f.id].count) + o(u(ba)[f.id].status === "partial" ? "+" : ""), 9, HF)) : A("", !0)
                          ]),
                          l("td", VF, [
                            f.creators ? (h(), p("bdi", qF, o(f.displayCreators ?? f.creators), 1)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, GF))
                          ]),
                          l("td", null, [
                            f.publicationDate ? (h(), p("time", {
                              key: 0,
                              datetime: f.publicationDate
                            }, o(f.publicationDate), 9, KF)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, WF))
                          ]),
                          l("td", null, [
                            f.publication ? (h(), p("bdi", YF, o(f.publication), 1)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, ZF))
                          ]),
                          l("td", null, [
                            f.extension || f.publicationType ? (h(), p("bdi", {
                              key: 0,
                              class: Ee(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                              dir: f.extension ? "ltr" : "auto"
                            }, o(f.extension ? Rs(f.extension) : f.publicationType), 11, XF)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, JF))
                          ]),
                          l("td", null, [
                            f.shelf ? (h(), p("bdi", QF, o(f.shelf), 1)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, e9))
                          ]),
                          l("td", t9, [
                            l("a", {
                              class: "button primary",
                              href: f.openUrl,
                              onClick: (F) => ai(f, F)
                            }, o(u(t)("library", "Open")), 9, i9),
                            l("button", {
                              type: "button",
                              class: "button secondary",
                              onClick: (F) => Hi(f, F)
                            }, o(u(t)("library", "Details")), 9, a9)
                          ])
                        ], 2))), 128))
                      ])
                    ])
                  ])) : C.value.length > 0 ? (h(), p("div", {
                    key: 8,
                    class: Ee(["library-cover-gallery", de.value])
                  }, [
                    (h(!0), p(W, null, fe(C.value, (f) => (h(), p("article", {
                      key: f.id,
                      class: Ee(["library-cover-card", { "library-cover-card--selected": ks.value.has(Number(f.id)), "library-cover-card--open": an.value && Number(Rn.value) === Number(f.id) }])
                    }, [
                      l("label", n9, [
                        l("input", {
                          type: "checkbox",
                          checked: ks.value.has(Number(f.id)),
                          "aria-label": `${u(t)("library", "Select publication")}: ${f.title}`,
                          onChange: (F) => rf(f.id, F.currentTarget.checked)
                        }, null, 40, r9)
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
                        }, o(u(t)("library", "Details")), 9, s9),
                        he(hg, {
                          src: f.coverUrl
                        }, null, 8, ["src"])
                      ], 8, l9),
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
                        }, null, 8, u9),
                        b[128] || (b[128] = l("input", {
                          type: "hidden",
                          name: "returnTo",
                          value: "catalogue"
                        }, null, -1)),
                        l("input", {
                          type: "hidden",
                          name: "starred",
                          value: f.starred ? "0" : "1"
                        }, null, 8, c9),
                        l("button", {
                          type: "submit",
                          class: Ee(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                          "aria-pressed": f.starred ? "true" : "false",
                          title: f.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-label": f.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-busy": al[f.id] ? "true" : void 0,
                          disabled: al[f.id],
                          onClick: Ce((F) => Mf(f, F), ["prevent"])
                        }, o(f.starred ? "★" : "☆"), 11, d9),
                        nl[f.id] ? (h(), p("span", {
                          key: 0,
                          "data-library-star-error": f.id,
                          class: "library-star-feedback",
                          role: "alert"
                        }, o(nl[f.id]), 9, f9)) : A("", !0)
                      ], 40, o9),
                      l("div", h9, [
                        l("div", p9, [
                          u(ba)[f.id]?.count ? (h(), p("a", {
                            key: 0,
                            class: "library-duplicate-badge",
                            href: `${ft.value}?duplicates=1&bookId=${f.id}`
                          }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(ba)[f.id].count) + o(u(ba)[f.id].status === "partial" ? "+" : ""), 9, v9)) : A("", !0),
                          l("h3", {
                            id: `library-card-title-${f.id}`
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => Hi(f, F)
                            }, [
                              l("bdi", m9, o(f.title), 1)
                            ], 8, g9)
                          ], 8, b9),
                          f.creators ? (h(), p("p", y9, [
                            l("bdi", _9, o(f.displayCreators ?? f.creators), 1)
                          ])) : A("", !0),
                          Pf(f) ? (h(), p("p", w9, [
                            l("bdi", k9, o(Pf(f)), 1)
                          ])) : A("", !0)
                        ])
                      ])
                    ], 2))), 128))
                  ], 2)) : A("", !0),
                  C.value.length > 0 ? (h(), p("nav", {
                    key: 9,
                    class: "library-pagination library-pagination--bottom",
                    "aria-label": u(t)("library", "Catalogue pagination")
                  }, [
                    l("span", C9, [
                      ie(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                      Q.value.total > 0 ? (h(), p("span", T9, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : A("", !0)
                    ]),
                    Q.value.previousUrl ? (h(), p("a", {
                      key: 0,
                      href: Q.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, A9)) : (h(), p("span", E9, o(u(t)("library", "Previous")), 1)),
                    Q.value.nextUrl ? (h(), p("a", {
                      key: 2,
                      href: Q.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, $9)) : (h(), p("span", x9, o(u(t)("library", "Next")), 1))
                  ], 8, S9)) : A("", !0)
                ], 10, kP))
              ], 64))
            ], 8, lI)
          ]),
          _: 1
        }),
        he(u(K2), {
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
          onClosed: Bg,
          onClose: Yr
        }, {
          default: ke(() => [
            l("div", O9, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: lf,
                class: "hidden-visually",
                tabindex: "-1"
              }, o(Ae.value?.title || u(t)("library", "Publication details")), 513),
              ri.loading && !Ae.value ? (h(), p("p", N9, o(u(t)("library", "Loading publication details…")), 1)) : ri.error ? (h(), p("div", {
                key: 1,
                class: "library-sidebar-state",
                role: ri.missing ? "status" : "alert"
              }, [
                l("p", null, o(ri.error), 1),
                ri.missing ? A("", !0) : (h(), p("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: b[99] || (b[99] = (f) => Wr(Rn.value, { historyMode: "none" }))
                }, o(u(t)("library", "Try again")), 1))
              ], 8, R9)) : Ae.value ? (h(), p(W, { key: 2 }, [
                l("p", I9, o(u(t)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", L9, [
                  l("span", P9, o(u(t)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: Ae.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy",
                    decoding: "async"
                  }, null, 8, D9),
                  l("div", F9, [
                    l("p", M9, [
                      l("bdi", U9, o(Ae.value.publicationType || u(t)("library", "Publication")), 1),
                      Ae.value.extension ? (h(), p("span", z9, [
                        b[129] || (b[129] = ie(" · ", -1)),
                        l("bdi", j9, o(Rs(Ae.value.extension)), 1)
                      ])) : A("", !0)
                    ]),
                    l("div", B9, [
                      l("a", {
                        class: "button primary",
                        href: Ae.value.openUrl,
                        onClick: b[100] || (b[100] = (f) => ai(Ae.value, f))
                      }, o(u(t)("library", "Open")), 9, H9),
                      he(u(Gd), {
                        "aria-label": u(t)("library", "File and maintenance actions")
                      }, {
                        default: ke(() => [
                          he(u(Ic), {
                            href: Ae.value.filesUrl
                          }, {
                            default: ke(() => [
                              ie(o(u(t)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          he(u(Ic), {
                            href: Ae.value.downloadUrl
                          }, {
                            default: ke(() => [
                              ie(o(u(t)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          he(u(Ic), {
                            href: Ae.value.detailsUrl
                          }, {
                            default: ke(() => [
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
                (h(), De(hd, {
                  key: Ae.value.id,
                  "item-ids": [Number(Ae.value.id)],
                  "request-token": gt.value,
                  "lists-url": Ei.value
                }, null, 8, ["item-ids", "request-token", "lists-url"])),
                l("nav", {
                  class: "library-sidebar-sections",
                  "aria-label": u(t)("library", "Publication detail sections")
                }, [
                  (h(), p(W, null, fe(Ig, (f) => l("button", {
                    key: f.key,
                    type: "button",
                    class: Ee({ active: In.value === f.key }),
                    "aria-current": In.value === f.key ? "page" : void 0,
                    onClick: (F) => In.value = f.key
                  }, o(u(t)("library", f.label)), 11, q9)), 64))
                ], 8, V9),
                In.value === "overview" ? (h(), p("section", G9, [
                  l("h3", K9, o(u(t)("library", "Overview")), 1),
                  sf.value ? (h(), p("p", W9, [
                    l("bdi", Y9, o(sf.value), 1)
                  ])) : A("", !0),
                  l("dl", Z9, [
                    Ae.value.publication ? (h(), p("div", X9, [
                      l("dt", null, o(u(t)("library", "Series")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: As("publication", Ae.value.publication),
                          title: u(t)("library", "Filter catalogue by this series"),
                          onClick: b[101] || (b[101] = (f) => Es(f, "publication", Ae.value.publication))
                        }, [
                          l("bdi", Q9, o(Ae.value.publication), 1)
                        ], 8, J9)
                      ])
                    ])) : A("", !0),
                    Ae.value.publicationDate ? (h(), p("div", eM, [
                      l("dt", null, o(u(t)("library", "Date")), 1),
                      l("dd", null, [
                        Dn.value ? (h(), p("a", {
                          key: 0,
                          class: "library-detail-facet-link",
                          href: As("year", Dn.value),
                          title: u(t)("library", "Filter catalogue by this publication year"),
                          onClick: b[102] || (b[102] = (f) => Es(f, "year", Dn.value))
                        }, o(Dn.value), 9, tM)) : A("", !0),
                        Dn.value && Ae.value.publicationDate !== Dn.value ? (h(), p("span", iM, " · ")) : A("", !0),
                        Ae.value.publicationDate !== Dn.value ? (h(), p("span", aM, o(Ae.value.publicationDate), 1)) : A("", !0)
                      ])
                    ])) : A("", !0),
                    Ae.value.publisher ? (h(), p("div", nM, [
                      l("dt", null, o(u(t)("library", "Publisher")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: As("publisher", Ae.value.publisher),
                          title: u(t)("library", "Filter catalogue by this publisher"),
                          onClick: b[103] || (b[103] = (f) => Es(f, "publisher", Ae.value.publisher))
                        }, [
                          l("bdi", lM, o(Ae.value.publisher), 1)
                        ], 8, rM)
                      ])
                    ])) : A("", !0),
                    of.value.length ? (h(), p("div", sM, [
                      l("dt", null, o(u(t)("library", "Language")), 1),
                      l("dd", oM, [
                        (h(!0), p(W, null, fe(of.value, (f) => (h(), p("a", {
                          key: f,
                          class: "library-detail-facet-link",
                          href: As("language", f),
                          title: u(t)("library", "Filter catalogue by this language"),
                          onClick: (F) => Es(F, "language", f)
                        }, [
                          l("bdi", cM, o(f), 1)
                        ], 8, uM))), 128))
                      ])
                    ])) : A("", !0),
                    Ae.value.shelf ? (h(), p("div", dM, [
                      l("dt", null, o(u(t)("library", "Shelf")), 1),
                      l("dd", null, o(Ae.value.shelf), 1)
                    ])) : A("", !0)
                  ])
                ])) : In.value === "metadata" ? (h(), p("section", fM, [
                  sr.value ? (h(), De(bg, {
                    key: `${Ae.value.id}:${Ae.value.title}:${Ae.value.creators}`,
                    "item-id": Number(Ae.value.id),
                    "request-token": gt.value
                  }, null, 8, ["item-id", "request-token"])) : A("", !0),
                  l("h3", hM, o(u(t)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Ce(zg, ["prevent"])
                  }, [
                    l("label", null, [
                      ie(o(u(t)("library", "Title")), 1),
                      ye(l("input", {
                        "onUpdate:modelValue": b[104] || (b[104] = (f) => yt.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [Ue, yt.title]
                      ])
                    ]),
                    l("label", null, [
                      he(Ge, {
                        text: u(t)("library", "Book series name, stored separately from the existing Publication field.")
                      }, {
                        default: ke(() => [
                          ie(o(u(t)("library", "Series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ye(l("input", {
                        "onUpdate:modelValue": b[105] || (b[105] = (f) => yt.series = f),
                        name: "series",
                        maxlength: "255"
                      }, null, 512), [
                        [Ue, yt.series]
                      ])
                    ]),
                    l("label", null, [
                      he(Ge, {
                        text: u(t)("library", "Text such as 01, 2.5 or Volume II. Leading zeros and labels are preserved.")
                      }, {
                        default: ke(() => [
                          ie(o(u(t)("library", "Part in series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ye(l("input", {
                        "onUpdate:modelValue": b[106] || (b[106] = (f) => yt.seriesNumber = f),
                        name: "seriesNumber",
                        maxlength: "64"
                      }, null, 512), [
                        [Ue, yt.seriesNumber]
                      ])
                    ]),
                    l("label", null, [
                      he(Ge, {
                        text: u(t)("library", "A genre label such as Science fiction. Separate from subjects, file format and publication type.")
                      }, {
                        default: ke(() => [
                          ie(o(u(t)("library", "Genre")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ye(l("input", {
                        "onUpdate:modelValue": b[107] || (b[107] = (f) => yt.genre = f),
                        name: "genre",
                        maxlength: "255"
                      }, null, 512), [
                        [Ue, yt.genre]
                      ])
                    ]),
                    l("label", null, [
                      ie(o(u(t)("library", "Publication date")), 1),
                      ye(l("input", {
                        "onUpdate:modelValue": b[108] || (b[108] = (f) => yt.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: u(t)("library", "e.g. 2026")
                      }, null, 8, pM), [
                        [Ue, yt.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, o(u(t)("library", "Identifiers")), 1),
                      (h(!0), p(W, null, fe(yt.identifiers, (f, F) => (h(), p("div", {
                        key: F,
                        class: "library-sidebar-identifier"
                      }, [
                        ye(l("input", {
                          "onUpdate:modelValue": (ve) => f.scheme = ve,
                          "aria-label": u(t)("library", "Identifier type"),
                          placeholder: u(t)("library", "Identifier type")
                        }, null, 8, vM), [
                          [Ue, f.scheme]
                        ]),
                        ye(l("input", {
                          "onUpdate:modelValue": (ve) => f.displayValue = ve,
                          "aria-label": u(t)("library", "Identifier value")
                        }, null, 8, bM), [
                          [Ue, f.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (ve) => Ug(F)
                        }, o(u(t)("library", "Remove")), 9, gM)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Mg
                      }, o(u(t)("library", "Add identifier")), 1)
                    ]),
                    he(Ge, {
                      text: u(t)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")
                    }, {
                      default: ke(() => [
                        ie(o(u(t)("library", "Maintenance")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"]),
                    Bi.error ? (h(), p("p", mM, o(Bi.error), 1)) : Bi.saved ? (h(), p("p", yM, o(u(t)("library", "Metadata saved.")), 1)) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Bi.saving
                    }, o(Bi.saving ? u(t)("library", "Saving…") : u(t)("library", "Save metadata")), 9, _M)
                  ], 32),
                  $s(Ae.value).length ? (h(), p("section", wM, [
                    l("h4", kM, [
                      he(Ge, {
                        text: u(t)("library", "Suggestions are optional and never replace your edits automatically.")
                      }, {
                        default: ke(() => [
                          ie(o(u(t)("library", "Scanner suggestions")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    l("dl", null, [
                      (h(!0), p(W, null, fe($s(Ae.value), (f) => (h(), p("div", {
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
                  ])) : A("", !0)
                ])) : (h(), p("section", SM, [
                  l("h3", CM, o(u(t)("library", "Activity")), 1),
                  l("dl", TM, [
                    l("div", null, [
                      l("dt", null, o(u(t)("library", "Scan status")), 1),
                      l("dd", null, o(Ae.value.scanStatus || "—"), 1)
                    ]),
                    Ae.value.workflowStatus ? (h(), p("div", AM, [
                      l("dt", null, o(u(t)("library", "Workflow")), 1),
                      l("dd", null, o(Ae.value.workflowStatus), 1)
                    ])) : A("", !0),
                    Ae.value.metadataSource ? (h(), p("div", EM, [
                      l("dt", null, o(u(t)("library", "Metadata source")), 1),
                      l("dd", null, o(Ae.value.metadataSource), 1)
                    ])) : A("", !0),
                    Ae.value.cachedPath ? (h(), p("div", $M, [
                      l("dt", null, o(u(t)("library", "File")), 1),
                      l("dd", xM, [
                        Ae.value.openUrl ? (h(), p("a", {
                          key: 0,
                          href: Ae.value.openUrl,
                          onClick: b[109] || (b[109] = (f) => ai(Ae.value, f))
                        }, [
                          l("bdi", NM, o(Ae.value.cachedPath), 1)
                        ], 8, OM)) : (h(), p("bdi", RM, o(Ae.value.cachedPath), 1))
                      ])
                    ])) : A("", !0)
                  ])
                ])),
                Ae.value.canonicalAuthors?.length ? (h(), p("nav", {
                  key: 3,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Authors")
                }, [
                  (h(!0), p(W, null, fe(Ae.value.canonicalAuthors, (f) => (h(), p("a", {
                    key: f.id,
                    class: "button secondary",
                    href: `${w.generateUrl("/apps/library/")}?authors=1&authorId=${f.id}`
                  }, [
                    l("bdi", PM, o(f.name), 1)
                  ], 8, LM))), 128))
                ], 8, IM)) : Ae.value.authors?.length ? (h(), p("nav", {
                  key: 4,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Creators")
                }, [
                  (h(!0), p(W, null, fe(Ae.value.authors, (f) => (h(), p("a", {
                    key: f,
                    class: "button secondary",
                    href: bm(f)
                  }, [
                    l("bdi", MM, o(f), 1)
                  ], 8, FM))), 128))
                ], 8, DM)) : A("", !0),
                l("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": u(t)("library", "Browse neighbouring items")
                }, [
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Cs.value,
                    onClick: b[110] || (b[110] = (f) => xs(Cs.value))
                  }, o(u(t)("library", "Previous item")), 9, zM),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Ts.value,
                    onClick: b[111] || (b[111] = (f) => xs(Ts.value))
                  }, o(u(t)("library", "Next item")), 9, jM)
                ], 8, UM)
              ], 64)) : A("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function GM() {
  window.LibraryStartupWatchdog?.fail();
}
function KM(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = fo("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !KM(e))
    throw new Error("Library startup prerequisites are unavailable");
  const i = {
    ...e,
    duplicateSuggestions: fo("library", "duplicateSuggestions", !1),
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  t_(qM, { state: i }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  GM(), console.error("[library] Vue startup failed", e);
}
