// @__NO_SIDE_EFFECTS__
function bd(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const i of e.split(",")) t[i] = 1;
  return (i) => i in t;
}
const it = {}, Er = [], Pi = () => {
}, Up = () => !1, iu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), au = (e) => e.startsWith("onUpdate:"), Nt = Object.assign, gd = (e, t) => {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}, km = Object.prototype.hasOwnProperty, st = (e, t) => km.call(e, t), Pe = Array.isArray, yn = (e) => as(e) === "[object Map]", Ua = (e) => as(e) === "[object Set]", jf = (e) => as(e) === "[object Date]", je = (e) => typeof e == "function", bt = (e) => typeof e == "string", Gi = (e) => typeof e == "symbol", ot = (e) => e !== null && typeof e == "object", zp = (e) => (ot(e) || je(e)) && je(e.then) && je(e.catch), jp = Object.prototype.toString, as = (e) => jp.call(e), Sm = (e) => as(e).slice(8, -1), Bp = (e) => as(e) === "[object Object]", md = (e) => bt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, wl = /* @__PURE__ */ bd(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), nu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((i) => t[i] || (t[i] = e(i)));
}, Cm = /-\w/g, ei = nu(
  (e) => e.replace(Cm, (t) => t.slice(1).toUpperCase())
), Tm = /\B([A-Z])/g, qa = nu(
  (e) => e.replace(Tm, "-$1").toLowerCase()
), ru = nu((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gu = nu(
  (e) => e ? `on${ru(e)}` : ""
), jt = (e, t) => !Object.is(e, t), Ys = (e, ...t) => {
  for (let i = 0; i < e.length; i++)
    e[i](...t);
}, Hp = (e, t, i, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: i
  });
}, lu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Am = (e) => {
  const t = bt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Bf;
const su = () => Bf || (Bf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function hi(e) {
  if (Pe(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const a = e[i], n = bt(a) ? Om(a) : hi(a);
      if (n)
        for (const r in n)
          t[r] = n[r];
    }
    return t;
  } else if (bt(e) || ot(e))
    return e;
}
const Em = /;(?![^(]*\))/g, $m = /:([^]+)/, xm = /\/\*[^]*?\*\//g;
function Om(e) {
  const t = {};
  return e.replace(xm, "").split(Em).forEach((i) => {
    if (i) {
      const a = i.split($m);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function Ee(e) {
  let t = "";
  if (bt(e))
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
function eo(e) {
  if (!e) return null;
  let { class: t, style: i } = e;
  return t && !bt(t) && (e.class = Ee(t)), i && (e.style = hi(i)), e;
}
const Nm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Rm = /* @__PURE__ */ bd(Nm);
function Vp(e) {
  return !!e || e === "";
}
function Im(e, t) {
  if (e.length !== t.length) return !1;
  let i = !0;
  for (let a = 0; i && a < e.length; a++)
    i = za(e[a], t[a]);
  return i;
}
function Hf(e, t) {
  if (e.size !== t.size) return !1;
  const i = Array.from(t), a = new Uint8Array(i.length);
  for (const n of e) {
    let r = -1;
    for (let s = 0; s < i.length; s++)
      if (!a[s] && za(n, i[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    a[r] = 1;
  }
  return !0;
}
function za(e, t) {
  if (e === t) return !0;
  let i = jf(e), a = jf(t);
  if (i || a)
    return i && a ? e.getTime() === t.getTime() : !1;
  if (i = Gi(e), a = Gi(t), i || a)
    return e === t;
  if (i = Pe(e), a = Pe(t), i || a)
    return i && a ? Im(e, t) : !1;
  if (i = ot(e), a = ot(t), i || a) {
    if (!i || !a)
      return !1;
    if (i = yn(e), a = yn(t), i || a || (i = Ua(e), a = Ua(t), i || a))
      return i && a ? Hf(e, t) : !1;
    const n = Object.keys(e).length, r = Object.keys(t).length;
    if (n !== r)
      return !1;
    for (const s in e) {
      const c = e.hasOwnProperty(s), d = t.hasOwnProperty(s);
      if (c && !d || !c && d || !za(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function yd(e, t) {
  return e.findIndex((i) => za(i, t));
}
const qp = (e) => !!(e && e.__v_isRef === !0), o = (e) => bt(e) ? e : e == null ? "" : Pe(e) || ot(e) && (e.toString === jp || !je(e.toString)) ? qp(e) ? o(e.value) : JSON.stringify(e, Gp, 2) : String(e), Gp = (e, t) => qp(t) ? Gp(e, t.value) : yn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (i, [a, n], r) => (i[Ku(a, r) + " =>"] = n, i),
    {}
  )
} : Ua(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((i) => Ku(i))
} : Gi(t) ? Ku(t) : ot(t) && !Pe(t) && !Bp(t) ? String(t) : t, Ku = (e, t = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Gi(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e
  );
};
function Lm(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let zt;
class Pm {
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
function Dm() {
  return zt;
}
let vt;
const Wu = /* @__PURE__ */ new WeakSet();
class Kp {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Yp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Vf(this), Zp(this);
    const t = vt, i = Vi;
    vt = this, Vi = !0;
    try {
      return this.fn();
    } finally {
      Xp(this), vt = t, Vi = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        kd(t);
      this.deps = this.depsTail = void 0, Vf(this), this.onStop && this.onStop(), this.flags &= -2;
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
let Wp = 0, kl, Sl;
function Yp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Sl, Sl = e;
    return;
  }
  e.next = kl, kl = e;
}
function _d() {
  Wp++;
}
function wd() {
  if (--Wp > 0)
    return;
  if (Sl) {
    let t = Sl;
    for (Sl = void 0; t; ) {
      const i = t.next;
      t.next = void 0, t.flags &= -9, t = i;
    }
  }
  let e;
  for (; kl; ) {
    let t = kl;
    for (kl = void 0; t; ) {
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
function Zp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Xp(e) {
  let t, i = e.depsTail, a = i;
  for (; a; ) {
    const n = a.prevDep;
    a.version === -1 ? (a === i && (i = n), kd(a), Fm(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = n;
  }
  e.deps = t, e.depsTail = i;
}
function Lc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Jp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Jp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Fl) || (e.globalVersion = Fl, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Lc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, i = vt, a = Vi;
  vt = e, Vi = !0;
  try {
    Zp(e);
    const n = e.fn(e._value);
    (t.version === 0 || jt(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
  } catch (n) {
    throw t.version++, n;
  } finally {
    vt = i, Vi = a, Xp(e), e.flags &= -3;
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
function Fm(e) {
  const { prevDep: t, nextDep: i } = e;
  t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
}
let Vi = !0;
const Qp = [];
function ja() {
  Qp.push(Vi), Vi = !1;
}
function Ba() {
  const e = Qp.pop();
  Vi = e === void 0 ? !0 : e;
}
function Vf(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const i = vt;
    vt = void 0;
    try {
      t();
    } finally {
      vt = i;
    }
  }
}
let Fl = 0;
class Mm {
  constructor(t, i) {
    this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ou {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!vt || !Vi || vt === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== vt)
      i = this.activeLink = new Mm(vt, this), vt.deps ? (i.prevDep = vt.depsTail, vt.depsTail.nextDep = i, vt.depsTail = i) : vt.deps = vt.depsTail = i, ev(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const a = i.nextDep;
      a.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = a), i.prevDep = vt.depsTail, i.nextDep = void 0, vt.depsTail.nextDep = i, vt.depsTail = i, vt.deps === i && (vt.deps = a);
    }
    return i;
  }
  trigger(t) {
    this.version++, Fl++, this.notify(t);
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
function ev(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep)
        ev(a);
    }
    const i = e.dep.subs;
    i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
  }
}
const Pc = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ Symbol(
  ""
), Dc = /* @__PURE__ */ Symbol(
  ""
), Ml = /* @__PURE__ */ Symbol(
  ""
);
function Xt(e, t, i) {
  if (Vi && vt) {
    let a = Pc.get(e);
    a || Pc.set(e, a = /* @__PURE__ */ new Map());
    let n = a.get(i);
    n || (a.set(i, n = new ou()), n.map = a, n.key = i), n.track();
  }
}
function Ra(e, t, i, a, n, r) {
  const s = Pc.get(e);
  if (!s) {
    Fl++;
    return;
  }
  const c = (d) => {
    d && d.trigger();
  };
  if (_d(), t === "clear")
    s.forEach(c);
  else {
    const d = Pe(e), _ = d && md(i);
    if (d && i === "length") {
      const v = Number(a);
      s.forEach((y, m) => {
        (m === "length" || m === Ml || !Gi(m) && m >= v) && c(y);
      });
    } else
      switch ((i !== void 0 || s.has(void 0)) && c(s.get(i)), _ && c(s.get(Ml)), t) {
        case "add":
          d ? _ && c(s.get("length")) : (c(s.get(ar)), yn(e) && c(s.get(Dc)));
          break;
        case "delete":
          d || (c(s.get(ar)), yn(e) && c(s.get(Dc)));
          break;
        case "set":
          yn(e) && c(s.get(ar));
          break;
      }
  }
  wd();
}
function yr(e) {
  const t = /* @__PURE__ */ lt(e);
  return t === e ? t : (Xt(t, "iterate", Ml), /* @__PURE__ */ Di(e) ? t : t.map(Ki));
}
function uu(e) {
  return Xt(e = /* @__PURE__ */ lt(e), "iterate", Ml), e;
}
function la(e, t) {
  return /* @__PURE__ */ Ha(e) ? Lr(/* @__PURE__ */ nr(e) ? Ki(t) : t) : Ki(t);
}
const Um = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yu(this, Symbol.iterator, (e) => la(this, e));
  },
  concat(...e) {
    return yr(this).concat(
      ...e.map((t) => Pe(t) ? yr(t) : t)
    );
  },
  entries() {
    return Yu(this, "entries", (e) => (e[1] = la(this, e[1]), e));
  },
  every(e, t) {
    return Sa(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Sa(
      this,
      "filter",
      e,
      t,
      (i) => i.map((a) => la(this, a)),
      arguments
    );
  },
  find(e, t) {
    return Sa(
      this,
      "find",
      e,
      t,
      (i) => la(this, i),
      arguments
    );
  },
  findIndex(e, t) {
    return Sa(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Sa(
      this,
      "findLast",
      e,
      t,
      (i) => la(this, i),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Sa(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Sa(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Zu(this, "includes", e);
  },
  indexOf(...e) {
    return Zu(this, "indexOf", e);
  },
  join(e) {
    return yr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Zu(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Sa(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return nl(this, "pop");
  },
  push(...e) {
    return nl(this, "push", e);
  },
  reduce(e, ...t) {
    return qf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return qf(this, "reduceRight", e, t);
  },
  shift() {
    return nl(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Sa(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return nl(this, "splice", e);
  },
  toReversed() {
    return yr(this).toReversed();
  },
  toSorted(e) {
    return yr(this).toSorted(e);
  },
  toSpliced(...e) {
    return yr(this).toSpliced(...e);
  },
  unshift(...e) {
    return nl(this, "unshift", e);
  },
  values() {
    return Yu(this, "values", (e) => la(this, e));
  }
};
function Yu(e, t, i) {
  const a = uu(e), n = a[t]();
  return a !== e && !/* @__PURE__ */ Di(e) && (n._next = n.next, n.next = () => {
    const r = n._next();
    return r.done || (r.value = i(r.value)), r;
  }), n;
}
const zm = Array.prototype;
function Sa(e, t, i, a, n, r) {
  const s = uu(e), c = s !== e && !/* @__PURE__ */ Di(e), d = s[t];
  if (d !== zm[t]) {
    const y = d.apply(e, r);
    return c ? Ki(y) : y;
  }
  let _ = i;
  s !== e && (c ? _ = function(y, m) {
    return i.call(this, la(e, y), m, e);
  } : i.length > 2 && (_ = function(y, m) {
    return i.call(this, y, m, e);
  }));
  const v = d.call(s, _, a);
  return c && n ? n(v) : v;
}
function qf(e, t, i, a) {
  const n = uu(e), r = n !== e && !/* @__PURE__ */ Di(e);
  let s = i, c = !1;
  n !== e && (r ? (c = a.length === 0, s = function(_, v, y) {
    return c && (c = !1, _ = la(e, _)), i.call(this, _, la(e, v), y, e);
  }) : i.length > 3 && (s = function(_, v, y) {
    return i.call(this, _, v, y, e);
  }));
  const d = n[t](s, ...a);
  return c ? la(e, d) : d;
}
function Zu(e, t, i) {
  const a = /* @__PURE__ */ lt(e);
  Xt(a, "iterate", Ml);
  const n = a[t](...i);
  return (n === -1 || n === !1) && /* @__PURE__ */ Td(i[0]) ? (i[0] = /* @__PURE__ */ lt(i[0]), a[t](...i)) : n;
}
function nl(e, t, i = []) {
  ja(), _d();
  const a = (/* @__PURE__ */ lt(e))[t].apply(e, i);
  return wd(), Ba(), a;
}
const jm = /* @__PURE__ */ bd("__proto__,__v_isRef,__isVue"), tv = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Gi)
);
function Bm(e) {
  Gi(e) || (e = String(e));
  const t = /* @__PURE__ */ lt(this);
  return Xt(t, "has", e), t.hasOwnProperty(e);
}
class iv {
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
      return a === (n ? r ? Jm : lv : r ? rv : nv).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const s = Pe(t);
    if (!n) {
      let d;
      if (s && (d = Um[i]))
        return d;
      if (i === "hasOwnProperty")
        return Bm;
    }
    const c = Reflect.get(
      t,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ti(t) ? t : a
    );
    if ((Gi(i) ? tv.has(i) : jm(i)) || (n || Xt(t, "get", i), r))
      return c;
    if (/* @__PURE__ */ ti(c)) {
      const d = s && md(i) ? c : c.value;
      return n && ot(d) ? /* @__PURE__ */ Ul(d) : d;
    }
    return ot(c) ? n ? /* @__PURE__ */ Ul(c) : /* @__PURE__ */ Lt(c) : c;
  }
}
class av extends iv {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, i, a, n) {
    let r = t[i];
    const s = Pe(t) && md(i);
    if (!this._isShallow) {
      const _ = /* @__PURE__ */ Ha(r);
      if (!/* @__PURE__ */ Di(a) && !/* @__PURE__ */ Ha(a) && (r = /* @__PURE__ */ lt(r), a = /* @__PURE__ */ lt(a)), !s && /* @__PURE__ */ ti(r) && !/* @__PURE__ */ ti(a))
        return _ || (r.value = a), !0;
    }
    const c = s ? Number(i) < t.length : st(t, i), d = Reflect.set(
      t,
      i,
      a,
      /* @__PURE__ */ ti(t) ? t : n
    );
    return t === /* @__PURE__ */ lt(n) && d && (c ? jt(a, r) && Ra(t, "set", i, a) : Ra(t, "add", i, a)), d;
  }
  deleteProperty(t, i) {
    const a = st(t, i);
    t[i];
    const n = Reflect.deleteProperty(t, i);
    return n && a && Ra(t, "delete", i, void 0), n;
  }
  has(t, i) {
    const a = Reflect.has(t, i);
    return (!Gi(i) || !tv.has(i)) && Xt(t, "has", i), a;
  }
  ownKeys(t) {
    return Xt(
      t,
      "iterate",
      Pe(t) ? "length" : ar
    ), Reflect.ownKeys(t);
  }
}
class Hm extends iv {
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
const Vm = /* @__PURE__ */ new av(), qm = /* @__PURE__ */ new Hm(), Gm = /* @__PURE__ */ new av(!0);
const Fc = (e) => e, Ps = (e) => Reflect.getPrototypeOf(e);
function Km(e, t, i) {
  return function(...a) {
    const n = this.__v_raw, r = /* @__PURE__ */ lt(n), s = yn(r), c = e === "entries" || e === Symbol.iterator && s, d = e === "keys" && s, _ = n[e](...a), v = i ? Fc : t ? Lr : Ki;
    return !t && Xt(
      r,
      "iterate",
      d ? Dc : ar
    ), Nt(
      // inheriting all iterator properties
      Object.create(_),
      {
        // iterator protocol
        next() {
          const { value: y, done: m } = _.next();
          return m ? { value: y, done: m } : {
            value: c ? [v(y[0]), v(y[1])] : v(y),
            done: m
          };
        }
      }
    );
  };
}
function Ds(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Wm(e, t) {
  const i = {
    get(n) {
      const r = this.__v_raw, s = /* @__PURE__ */ lt(r), c = /* @__PURE__ */ lt(n);
      e || (jt(n, c) && Xt(s, "get", n), Xt(s, "get", c));
      const { has: d } = Ps(s), _ = t ? Fc : e ? Lr : Ki;
      if (d.call(s, n))
        return _(r.get(n));
      if (d.call(s, c))
        return _(r.get(c));
      r !== s && r.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !e && Xt(/* @__PURE__ */ lt(n), "iterate", ar), n.size;
    },
    has(n) {
      const r = this.__v_raw, s = /* @__PURE__ */ lt(r), c = /* @__PURE__ */ lt(n);
      return e || (jt(n, c) && Xt(s, "has", n), Xt(s, "has", c)), n === c ? r.has(n) : r.has(n) || r.has(c);
    },
    forEach(n, r) {
      const s = this, c = s.__v_raw, d = /* @__PURE__ */ lt(c), _ = t ? Fc : e ? Lr : Ki;
      return !e && Xt(d, "iterate", ar), c.forEach((v, y) => n.call(r, _(v), _(y), s));
    }
  };
  return Nt(
    i,
    e ? {
      add: Ds("add"),
      set: Ds("set"),
      delete: Ds("delete"),
      clear: Ds("clear")
    } : {
      add(n) {
        const r = /* @__PURE__ */ lt(this), s = Ps(r), c = /* @__PURE__ */ lt(n), d = !t && !/* @__PURE__ */ Di(n) && !/* @__PURE__ */ Ha(n) ? c : n;
        return s.has.call(r, d) || jt(n, d) && s.has.call(r, n) || jt(c, d) && s.has.call(r, c) || (r.add(d), Ra(r, "add", d, d)), this;
      },
      set(n, r) {
        !t && !/* @__PURE__ */ Di(r) && !/* @__PURE__ */ Ha(r) && (r = /* @__PURE__ */ lt(r));
        const s = /* @__PURE__ */ lt(this), { has: c, get: d } = Ps(s);
        let _ = c.call(s, n);
        _ || (n = /* @__PURE__ */ lt(n), _ = c.call(s, n));
        const v = d.call(s, n);
        return s.set(n, r), _ ? jt(r, v) && Ra(s, "set", n, r) : Ra(s, "add", n, r), this;
      },
      delete(n) {
        const r = /* @__PURE__ */ lt(this), { has: s, get: c } = Ps(r);
        let d = s.call(r, n);
        d || (n = /* @__PURE__ */ lt(n), d = s.call(r, n)), c && c.call(r, n);
        const _ = r.delete(n);
        return d && Ra(r, "delete", n, void 0), _;
      },
      clear() {
        const n = /* @__PURE__ */ lt(this), r = n.size !== 0, s = n.clear();
        return r && Ra(
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
    i[n] = Km(n, e, t);
  }), i;
}
function Sd(e, t) {
  const i = Wm(e, t);
  return (a, n, r) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? a : Reflect.get(
    st(i, n) && n in a ? i : a,
    n,
    r
  );
}
const Ym = {
  get: /* @__PURE__ */ Sd(!1, !1)
}, Zm = {
  get: /* @__PURE__ */ Sd(!1, !0)
}, Xm = {
  get: /* @__PURE__ */ Sd(!0, !1)
};
const nv = /* @__PURE__ */ new WeakMap(), rv = /* @__PURE__ */ new WeakMap(), lv = /* @__PURE__ */ new WeakMap(), Jm = /* @__PURE__ */ new WeakMap();
function Qm(e) {
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
function Lt(e) {
  return /* @__PURE__ */ Ha(e) ? e : Cd(
    e,
    !1,
    Vm,
    Ym,
    nv
  );
}
// @__NO_SIDE_EFFECTS__
function ey(e) {
  return Cd(
    e,
    !1,
    Gm,
    Zm,
    rv
  );
}
// @__NO_SIDE_EFFECTS__
function Ul(e) {
  return Cd(
    e,
    !0,
    qm,
    Xm,
    lv
  );
}
function Cd(e, t, i, a, n) {
  if (!ot(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = n.get(e);
  if (r)
    return r;
  const s = Qm(Sm(e));
  if (s === 0)
    return e;
  const c = new Proxy(
    e,
    s === 2 ? a : i
  );
  return n.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function nr(e) {
  return /* @__PURE__ */ Ha(e) ? /* @__PURE__ */ nr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ha(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Di(e) {
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
function ty(e) {
  return !st(e, "__v_skip") && Object.isExtensible(e) && Hp(e, "__v_skip", !0), e;
}
const Ki = (e) => ot(e) ? /* @__PURE__ */ Lt(e) : e, Lr = (e) => ot(e) ? /* @__PURE__ */ Ul(e) : e;
// @__NO_SIDE_EFFECTS__
function ti(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function U(e) {
  return ov(e, !1);
}
// @__NO_SIDE_EFFECTS__
function sv(e) {
  return ov(e, !0);
}
function ov(e, t) {
  return /* @__PURE__ */ ti(e) ? e : new iy(e, t);
}
class iy {
  constructor(t, i) {
    this.dep = new ou(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? t : /* @__PURE__ */ lt(t), this._value = i ? t : Ki(t), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const i = this._rawValue, a = this.__v_isShallow || /* @__PURE__ */ Di(t) || /* @__PURE__ */ Ha(t);
    t = a ? t : /* @__PURE__ */ lt(t), jt(t, i) && (this._rawValue = t, this._value = a ? t : Ki(t), this.dep.trigger());
  }
}
function u(e) {
  return /* @__PURE__ */ ti(e) ? e.value : e;
}
function Da(e) {
  return je(e) ? e() : u(e);
}
const ay = {
  get: (e, t, i) => t === "__v_raw" ? e : u(Reflect.get(e, t, i)),
  set: (e, t, i, a) => {
    const n = e[t];
    return /* @__PURE__ */ ti(n) && !/* @__PURE__ */ ti(i) ? (n.value = i, !0) : Reflect.set(e, t, i, a);
  }
};
function uv(e) {
  return /* @__PURE__ */ nr(e) ? e : new Proxy(e, ay);
}
class ny {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const i = this.dep = new ou(), { get: a, set: n } = t(i.track.bind(i), i.trigger.bind(i));
    this._get = a, this._set = n;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function ry(e) {
  return new ny(e);
}
class ly {
  constructor(t, i, a) {
    this.fn = t, this.setter = i, this._value = void 0, this.dep = new ou(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Fl - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    vt !== this)
      return Yp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Jp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function sy(e, t, i = !1) {
  let a, n;
  return je(e) ? a = e : (a = e.get, n = e.set), new ly(a, n, i);
}
const Fs = {}, to = /* @__PURE__ */ new WeakMap();
let Zn;
function oy(e, t = !1, i = Zn) {
  if (i) {
    let a = to.get(i);
    a || to.set(i, a = []), a.push(e);
  }
}
function uy(e, t, i = it) {
  const { immediate: a, deep: n, once: r, scheduler: s, augmentJob: c, call: d } = i, _ = (I) => n ? I : /* @__PURE__ */ Di(I) || n === !1 || n === 0 ? Ia(I, 1) : Ia(I);
  let v, y, m, k, C = !1, S = !1;
  if (/* @__PURE__ */ ti(e) ? (y = () => e.value, C = /* @__PURE__ */ Di(e)) : /* @__PURE__ */ nr(e) ? (y = () => _(e), C = !0) : Pe(e) ? (S = !0, C = e.some((I) => /* @__PURE__ */ nr(I) || /* @__PURE__ */ Di(I)), y = () => e.map((I) => {
    if (/* @__PURE__ */ ti(I))
      return I.value;
    if (/* @__PURE__ */ nr(I))
      return _(I);
    if (je(I))
      return d ? d(I, 2) : I();
  })) : je(e) ? t ? y = d ? () => d(e, 2) : e : y = () => {
    if (m) {
      ja();
      try {
        m();
      } finally {
        Ba();
      }
    }
    const I = Zn;
    Zn = v;
    try {
      return d ? d(e, 3, [k]) : e(k);
    } finally {
      Zn = I;
    }
  } : y = Pi, t && n) {
    const I = y, he = n === !0 ? 1 / 0 : n;
    y = () => Ia(I(), he);
  }
  const $ = Dm(), R = () => {
    v.stop(), $ && $.active && gd($.effects, v);
  };
  if (r && t) {
    const I = t;
    t = (...he) => {
      const Q = I(...he);
      return R(), Q;
    };
  }
  let N = S ? new Array(e.length).fill(Fs) : Fs;
  const P = (I) => {
    if (!(!(v.flags & 1) || !v.dirty && !I))
      if (t) {
        const he = v.run();
        if (I || n || C || (S ? he.some((Q, x) => jt(Q, N[x])) : jt(he, N))) {
          m && m();
          const Q = Zn;
          Zn = v;
          try {
            const x = [
              he,
              // pass undefined as the old value when it's changed for the first time
              N === Fs ? void 0 : S && N[0] === Fs ? [] : N,
              k
            ];
            N = he, d ? d(t, 3, x) : (
              // @ts-expect-error
              t(...x)
            );
          } finally {
            Zn = Q;
          }
        }
      } else
        v.run();
  };
  return c && c(P), v = new Kp(y), v.scheduler = s ? () => s(P, !1) : P, k = (I) => oy(I, !1, v), m = v.onStop = () => {
    const I = to.get(v);
    if (I) {
      if (d)
        d(I, 4);
      else
        for (const he of I) he();
      to.delete(v);
    }
  }, t ? a ? P(!0) : N = v.run() : s ? s(P.bind(null, !0), !0) : v.run(), R.pause = v.pause.bind(v), R.resume = v.resume.bind(v), R.stop = R, R;
}
function Ia(e, t = 1 / 0, i) {
  if (t <= 0 || !ot(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t))
    return e;
  if (i.set(e, t), t--, /* @__PURE__ */ ti(e))
    Ia(e.value, t, i);
  else if (Pe(e))
    for (let a = 0; a < e.length; a++)
      Ia(e[a], t, i);
  else if (Ua(e) || yn(e))
    e.forEach((a) => {
      Ia(a, t, i);
    });
  else if (Bp(e)) {
    for (const a in e)
      Ia(e[a], t, i);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Ia(e[a], t, i);
  }
  return e;
}
function ns(e, t, i, a) {
  try {
    return a ? e(...a) : e();
  } catch (n) {
    cu(n, t, i);
  }
}
function Fi(e, t, i, a) {
  if (je(e)) {
    const n = ns(e, t, i, a);
    return n && zp(n) && n.catch((r) => {
      cu(r, t, i);
    }), n;
  }
  if (Pe(e)) {
    const n = [];
    for (let r = 0; r < e.length; r++)
      n.push(Fi(e[r], t, i, a));
    return n;
  }
}
function cu(e, t, i, a = !0) {
  const n = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || it;
  if (t) {
    let c = t.parent;
    const d = t.proxy, _ = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; c; ) {
      const v = c.ec;
      if (v) {
        for (let y = 0; y < v.length; y++)
          if (v[y](e, d, _) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      ja(), ns(r, null, 10, [
        e,
        d,
        _
      ]), Ba();
      return;
    }
  }
  cy(e, i, n, a, s);
}
function cy(e, t, i, a = !0, n = !1) {
  if (n)
    throw e;
  console.error(e);
}
const ci = [];
let aa = -1;
const $r = [];
let vn = null, Cr = 0;
const cv = /* @__PURE__ */ Promise.resolve();
let io = null;
function Pt(e) {
  const t = io || cv;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function dy(e) {
  let t = aa + 1, i = ci.length;
  for (; t < i; ) {
    const a = t + i >>> 1, n = ci[a], r = zl(n);
    r < e || r === e && n.flags & 2 ? t = a + 1 : i = a;
  }
  return t;
}
function Ad(e) {
  if (!(e.flags & 1)) {
    const t = zl(e), i = ci[ci.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= zl(i) ? ci.push(e) : ci.splice(dy(t), 0, e), e.flags |= 1, dv();
  }
}
function dv() {
  io || (io = cv.then(pv));
}
function fv(e) {
  if (!Pe(e))
    vn && e.id === -1 ? vn.splice(Cr + 1, 0, e) : e.flags & 1 || ($r.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      $r.push(e[t]);
  dv();
}
function Gf(e, t, i = aa + 1) {
  for (; i < ci.length; i++) {
    const a = ci[i];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      ci.splice(i, 1), i--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function hv(e) {
  if ($r.length) {
    const t = [...new Set($r)].sort(
      (i, a) => zl(i) - zl(a)
    );
    if ($r.length = 0, vn) {
      for (let i = 0; i < t.length; i++)
        vn.push(t[i]);
      return;
    }
    for (vn = t, Cr = 0; Cr < vn.length; Cr++) {
      const i = vn[Cr];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    vn = null, Cr = 0;
  }
}
const zl = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pv(e) {
  try {
    for (aa = 0; aa < ci.length; aa++) {
      const t = ci[aa];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ns(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; aa < ci.length; aa++) {
      const t = ci[aa];
      t && (t.flags &= -2);
    }
    aa = -1, ci.length = 0, hv(), io = null, (ci.length || $r.length) && pv();
  }
}
let Ht = null, du = null;
function ao(e) {
  const t = Ht;
  return Ht = e, du = e && e.type.__scopeId || null, t;
}
function fy(e) {
  du = e;
}
function hy() {
  du = null;
}
const py = (e) => Se;
function Se(e, t = Ht, i) {
  if (!t || e._n)
    return e;
  const a = (...n) => {
    a._d && oo(-1);
    const r = ao(t), s = Fa.length;
    let c;
    try {
      c = e(...n);
    } finally {
      for (let d = Fa.length; d > s; d--) Ld();
      ao(r), a._d && oo(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function ye(e, t) {
  if (Ht === null)
    return e;
  const i = gu(Ht), a = e.dirs || (e.dirs = []);
  for (let n = 0; n < t.length; n++) {
    let [r, s, c, d = it] = t[n];
    r && (je(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ia(s), a.push({
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
function Vn(e, t, i, a) {
  const n = e.dirs, r = t && t.dirs;
  for (let s = 0; s < n.length; s++) {
    const c = n[s];
    r && (c.oldValue = r[s].value);
    let d = c.dir[a];
    d && (ja(), Fi(d, i, 8, [
      e.el,
      c,
      e,
      t
    ]), Ba());
  }
}
function Ri(e, t) {
  if (Qt) {
    let i = Qt.provides;
    const a = Qt.parent && Qt.parent.provides;
    a === i && (i = Qt.provides = Object.create(a)), i[e] = t;
  }
}
function Jt(e, t, i = !1) {
  const a = Tn();
  if (a || Or) {
    let n = Or ? Or._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (n && e in n)
      return n[e];
    if (arguments.length > 1)
      return i && je(t) ? t.call(a && a.proxy) : t;
  }
}
const vy = /* @__PURE__ */ Symbol.for("v-scx"), by = () => Jt(vy);
function gy(e, t) {
  return fu(e, null, t);
}
function my(e, t) {
  return fu(
    e,
    null,
    { flush: "sync" }
  );
}
function Ke(e, t, i) {
  return fu(e, t, i);
}
function fu(e, t, i = it) {
  const { immediate: a, deep: n, flush: r, once: s } = i, c = Nt({}, i), d = t && a || !t && r !== "post";
  let _;
  if (Gl) {
    if (r === "sync") {
      const k = by();
      _ = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!d) {
      const k = () => {
      };
      return k.stop = Pi, k.resume = Pi, k.pause = Pi, k;
    }
  }
  const v = Qt;
  c.call = (k, C, S) => Fi(k, v, C, S);
  let y = !1;
  r === "post" ? c.scheduler = (k) => {
    ui(k, v && v.suspense);
  } : r !== "sync" && (y = !0, c.scheduler = (k, C) => {
    C ? k() : Ad(k);
  }), c.augmentJob = (k) => {
    t && (k.flags |= 4), y && (k.flags |= 2, v && (k.id = v.uid, k.i = v));
  };
  const m = uy(e, t, c);
  return Gl && (_ ? _.push(m) : d && m()), m;
}
function yy(e, t, i) {
  const a = this.proxy, n = bt(e) ? e.includes(".") ? vv(a, e) : () => a[e] : e.bind(a, a);
  let r;
  je(t) ? r = t : (r = t.handler, i = t);
  const s = ss(this), c = fu(n, r.bind(a), i);
  return s(), c;
}
function vv(e, t) {
  const i = t.split(".");
  return () => {
    let a = e;
    for (let n = 0; n < i.length && a; n++)
      a = a[i[n]];
    return a;
  };
}
const fn = /* @__PURE__ */ new WeakMap(), bv = /* @__PURE__ */ Symbol("_vte"), hu = (e) => e.__isTeleport, Jn = (e) => e && (e.disabled || e.disabled === ""), _y = (e) => e && (e.defer || e.defer === ""), Kf = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Wf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Mc = (e, t) => {
  const i = e && e.to;
  return bt(i) ? t ? t(i) : null : i;
}, wy = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, i, a, n, r, s, c, d, _) {
    const {
      mc: v,
      pc: y,
      pbc: m,
      o: { insert: k, querySelector: C, createText: S, createComment: $, parentNode: R }
    } = _, N = Jn(t.props);
    let { dynamicChildren: P } = t;
    const I = (x, B, W) => {
      x.shapeFlag & 16 && v(
        x.children,
        B,
        W,
        n,
        r,
        s,
        c,
        d
      );
    }, he = (x = t) => {
      const B = Jn(x.props), W = x.target = Mc(x.props, C), Z = Uc(W, x, S, k);
      W && (s !== "svg" && Kf(W) ? s = "svg" : s !== "mathml" && Wf(W) && (s = "mathml"), n && n.isCE && (n.ce._teleportTargets || (n.ce._teleportTargets = /* @__PURE__ */ new Set())).add(W), B || (I(x, W, Z), vl(x, !1)));
    }, Q = (x) => {
      const B = () => {
        if (fn.get(x) === B) {
          if (fn.delete(x), Jn(x.props)) {
            const W = R(x.el) || i;
            I(x, W, x.anchor), vl(x, !0);
          }
          he(x);
        }
      };
      fn.set(x, B), ui(B, r);
    };
    if (e == null) {
      const x = t.el = S(""), B = t.anchor = S("");
      if (k(x, i, a), k(B, i, a), _y(t.props) || r && r.pendingBranch) {
        Q(t);
        return;
      }
      N && (I(t, i, B), vl(t, !0)), he();
    } else {
      t.el = e.el;
      const x = t.anchor = e.anchor, B = fn.get(e);
      if (B) {
        B.flags |= 8, fn.delete(e), Q(t);
        return;
      }
      t.targetStart = e.targetStart;
      const W = t.target = e.target, Z = t.targetAnchor = e.targetAnchor, le = Jn(e.props), H = le ? i : W, Y = le ? x : Z;
      if (s === "svg" || Kf(W) ? s = "svg" : (s === "mathml" || Wf(W)) && (s = "mathml"), P ? (m(
        e.dynamicChildren,
        P,
        H,
        n,
        r,
        s,
        c
      ), Id(e, t, !0)) : d || y(
        e,
        t,
        H,
        Y,
        n,
        r,
        s,
        c,
        !1
      ), N)
        le ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ms(
          t,
          i,
          x,
          _,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const L = Mc(t.props, C);
        L && (t.target = L, Ms(
          t,
          L,
          null,
          _,
          0
        ));
      } else le && Ms(
        t,
        W,
        Z,
        _,
        1
      );
      vl(t, N);
    }
  },
  remove(e, t, i, { um: a, o: { remove: n } }, r) {
    const {
      shapeFlag: s,
      children: c,
      anchor: d,
      targetStart: _,
      targetAnchor: v,
      target: y,
      props: m
    } = e, k = Jn(m), C = r || !k, S = fn.get(e);
    if (S && (S.flags |= 8, fn.delete(e)), y && (n(_), n(v)), r && n(d), !S && (k || y) && s & 16)
      for (let $ = 0; $ < c.length; $++) {
        const R = c[$];
        a(
          R,
          t,
          i,
          C,
          !!R.dynamicChildren
        );
      }
  },
  move: Ms,
  hydrate: ky
};
function Ms(e, t, i, { o: { insert: a }, m: n }, r = 2) {
  r === 0 && a(e.targetAnchor, t, i);
  const { el: s, anchor: c, shapeFlag: d, children: _, props: v } = e, y = r === 2;
  if (y && a(s, t, i), !fn.has(e) && (!y || Jn(v)) && d & 16)
    for (let m = 0; m < _.length; m++)
      n(
        _[m],
        t,
        i,
        2
      );
  y && a(c, t, i);
}
function ky(e, t, i, a, n, r, {
  o: { nextSibling: s, parentNode: c, querySelector: d, insert: _, createText: v }
}, y) {
  function m($, R) {
    let N = R;
    for (; N; ) {
      if (N && N.nodeType === 8) {
        if (N.data === "teleport start anchor")
          t.targetStart = N;
        else if (N.data === "teleport anchor") {
          t.targetAnchor = N, $._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      N = s(N);
    }
  }
  function k($, R) {
    R.anchor = y(
      s($),
      R,
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
  ), S = Jn(t.props);
  if (C) {
    const $ = C._lpa || C.firstChild;
    t.shapeFlag & 16 && (S ? (k(e, t), m(C, $), t.targetAnchor || Uc(
      C,
      t,
      v,
      _,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      c(e) === C ? e : null
    )) : (t.anchor = s(e), m(C, $), t.targetAnchor || Uc(C, t, v, _), y(
      $ && s($),
      t,
      C,
      i,
      a,
      n,
      r
    ))), vl(t, S);
  } else S && t.shapeFlag & 16 && (k(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const Ed = wy;
function vl(e, t) {
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
  return r[bv] = s, e && (a(r, e, n), a(s, e, n)), s;
}
const Ii = /* @__PURE__ */ Symbol("_leaveCb"), rl = /* @__PURE__ */ Symbol("_enterCb");
function Sy() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ct(() => {
    e.isMounted = !0;
  }), Ci(() => {
    e.isUnmounting = !0;
  }), e;
}
const $i = [Function, Array], gv = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: $i,
  onEnter: $i,
  onAfterEnter: $i,
  onEnterCancelled: $i,
  // leave
  onBeforeLeave: $i,
  onLeave: $i,
  onAfterLeave: $i,
  onLeaveCancelled: $i,
  // appear
  onBeforeAppear: $i,
  onAppear: $i,
  onAfterAppear: $i,
  onAppearCancelled: $i
}, mv = (e) => {
  const t = e.subTree;
  return t.component ? mv(t.component) : t;
}, Cy = {
  name: "BaseTransition",
  props: gv,
  setup(e, { slots: t }) {
    const i = Tn(), a = Sy();
    return () => {
      const n = t.default && wv(t.default(), !0), r = n && n.length ? yv(n) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        i.subTree ? A() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ lt(e), { mode: c } = s;
      if (a.isLeaving)
        return Xu(r);
      const d = no(r);
      if (!d)
        return Xu(r);
      let _ = zc(
        d,
        s,
        a,
        i,
        // #11061, ensure enterHooks is fresh after clone
        (y) => _ = y
      );
      d.type !== Bt && jl(d, _);
      let v = i.subTree && no(i.subTree);
      if (v && v.type !== Bt && !Qn(v, d) && mv(i).type !== Bt) {
        let y = zc(
          v,
          s,
          a,
          i
        );
        if (jl(v, y), c === "out-in" && d.type !== Bt)
          return a.isLeaving = !0, y.afterLeave = () => {
            a.isLeaving = !1, i.job.flags & 8 || i.update(), delete y.afterLeave, v = void 0;
          }, Xu(r);
        c === "in-out" && d.type !== Bt ? y.delayLeave = (m, k, C) => {
          const S = _v(
            a,
            v
          );
          S[String(v.key)] = v, m[Ii] = () => {
            k(), m[Ii] = void 0, delete _.delayedLeave, v = void 0;
          }, _.delayedLeave = () => {
            C(), delete _.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return r;
    };
  }
};
function yv(e) {
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
const Ty = Cy;
function _v(e, t) {
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
    onEnter: _,
    onAfterEnter: v,
    onEnterCancelled: y,
    onBeforeLeave: m,
    onLeave: k,
    onAfterLeave: C,
    onLeaveCancelled: S,
    onBeforeAppear: $,
    onAppear: R,
    onAfterAppear: N,
    onAppearCancelled: P
  } = t, I = String(e.key), he = _v(i, e), Q = (W, Z) => {
    W && Fi(
      W,
      a,
      9,
      Z
    );
  }, x = (W, Z) => {
    const le = Z[1];
    Q(W, Z), Pe(W) ? W.every((H) => H.length <= 1) && le() : W.length <= 1 && le();
  }, B = {
    mode: s,
    persisted: c,
    beforeEnter(W) {
      let Z = d;
      if (!i.isMounted)
        if (r)
          Z = $ || d;
        else
          return;
      W[Ii] && W[Ii](
        !0
        /* cancelled */
      );
      const le = he[I];
      le && Qn(e, le) && le.el[Ii] && le.el[Ii](), Q(Z, [W]);
    },
    enter(W) {
      if (he[I] === e) return;
      let Z = _, le = v, H = y;
      if (!i.isMounted)
        if (r)
          Z = R || _, le = N || v, H = P || y;
        else
          return;
      let Y = !1;
      W[rl] = (G) => {
        Y || (Y = !0, G ? Q(H, [W]) : Q(le, [W]), B.delayedLeave && B.delayedLeave(), W[rl] = void 0);
      };
      const L = W[rl].bind(null, !1);
      Z ? x(Z, [W, L]) : L();
    },
    leave(W, Z) {
      const le = String(e.key);
      if (W[rl] && W[rl](
        !0
        /* cancelled */
      ), i.isUnmounting)
        return Z();
      Q(m, [W]);
      let H = !1;
      W[Ii] = (L) => {
        H || (H = !0, Z(), L ? Q(S, [W]) : Q(C, [W]), W[Ii] = void 0, he[le] === e && delete he[le]);
      };
      const Y = W[Ii].bind(null, !1);
      he[le] = e, k ? x(k, [W, Y]) : Y();
    },
    clone(W) {
      const Z = zc(
        W,
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
  if (pu(e))
    return e = Sn(e), e.children = null, e;
}
function no(e) {
  if (!pu(e))
    return hu(e.type) && e.children ? yv(e.children) : e;
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
function jl(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const i = e.component.subTree;
    jl(
      hu(i.type) && no(i) || i,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function wv(e, t = !1, i) {
  let a = [], n = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const c = i == null ? s.key : String(i) + String(s.key != null ? s.key : r);
    s.type === K ? (s.patchFlag & 128 && n++, a = a.concat(
      wv(s.children, t, c)
    )) : (t || s.type !== Bt) && a.push(c != null ? Sn(s, { key: c }) : s);
  }
  if (n > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function qt(e, t) {
  return je(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Nt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ay() {
  const e = Tn();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function kv(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ey(e) {
  const t = Tn(), i = /* @__PURE__ */ sv(null);
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
function Yf(e, t) {
  let i;
  return !!((i = Object.getOwnPropertyDescriptor(e, t)) && !i.configurable);
}
const ro = /* @__PURE__ */ new WeakMap();
function Cl(e, t, i, a, n = !1) {
  if (Pe(e)) {
    e.forEach(
      (S, $) => Cl(
        S,
        t && (Pe(t) ? t[$] : t),
        i,
        a,
        n
      )
    );
    return;
  }
  if (xr(a) && !n) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Cl(e, t, i, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? gu(a.component) : a.el, s = n ? null : r, { i: c, r: d } = e, _ = t && t.r, v = c.refs === it ? c.refs = {} : c.refs, y = c.setupState, m = /* @__PURE__ */ lt(y), k = y === it ? Up : (S) => Yf(v, S) ? !1 : st(m, S), C = (S, $) => !($ && Yf(v, $));
  if (_ != null && _ !== d) {
    if (Zf(t), bt(_))
      v[_] = null, k(_) && (y[_] = null);
    else if (/* @__PURE__ */ ti(_)) {
      const S = t;
      C(_, S.k) && (_.value = null), S.k && (v[S.k] = null);
    }
  }
  if (je(d))
    ns(d, c, 12, [s, v]);
  else {
    const S = bt(d), $ = /* @__PURE__ */ ti(d);
    if (S || $) {
      const R = () => {
        if (e.f) {
          const N = S ? k(d) ? y[d] : v[d] : C() || !e.k ? d.value : v[e.k];
          if (n)
            Pe(N) && gd(N, r);
          else if (Pe(N))
            N.includes(r) || N.push(r);
          else if (S)
            v[d] = [r], k(d) && (y[d] = v[d]);
          else {
            const P = [r];
            C(d, e.k) && (d.value = P), e.k && (v[e.k] = P);
          }
        } else S ? (v[d] = s, k(d) && (y[d] = s)) : $ && (C(d, e.k) && (d.value = s), e.k && (v[e.k] = s));
      };
      if (s) {
        const N = () => {
          R(), ro.delete(e);
        };
        N.id = -1, ro.set(e, N), ui(N, i);
      } else
        Zf(e), R();
    }
  }
}
function Zf(e) {
  const t = ro.get(e);
  t && (t.flags |= 8, ro.delete(e));
}
su().requestIdleCallback;
su().cancelIdleCallback;
const xr = (e) => !!e.type.__asyncLoader, pu = (e) => e.type.__isKeepAlive;
function $y(e, t) {
  Sv(e, "a", t);
}
function xy(e, t) {
  Sv(e, "da", t);
}
function Sv(e, t, i = Qt) {
  const a = e.__wdc || (e.__wdc = () => {
    let n = i;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return e();
  });
  if (vu(t, a, i), i) {
    let n = i.parent;
    for (; n && n.parent; )
      pu(n.parent.vnode) && Oy(a, t, i, n), n = n.parent;
  }
}
function Oy(e, t, i, a) {
  const n = vu(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  rs(() => {
    gd(a[t], n);
  }, i);
}
function vu(e, t, i = Qt, a = !1) {
  if (i) {
    const n = i[e] || (i[e] = []), r = t.__weh || (t.__weh = (...s) => {
      ja();
      const c = ss(i), d = Fi(t, i, e, s);
      return c(), Ba(), d;
    });
    return a ? n.unshift(r) : n.push(r), r;
  }
}
const Ga = (e) => (t, i = Qt) => {
  (!Gl || e === "sp") && vu(e, (...a) => t(...a), i);
}, Cv = Ga("bm"), Ct = Ga("m"), Tv = Ga(
  "bu"
), Ny = Ga("u"), Ci = Ga(
  "bum"
), rs = Ga("um"), Ry = Ga(
  "sp"
), Iy = Ga("rtg"), Ly = Ga("rtc");
function Py(e, t = Qt) {
  vu("ec", e, t);
}
const $d = "components", Dy = "directives";
function Je(e, t) {
  return Od($d, e, !0, t) || e;
}
const Av = /* @__PURE__ */ Symbol.for("v-ndc");
function xd(e) {
  return bt(e) ? Od($d, e, !1) || e : e || Av;
}
function Xf(e) {
  return Od(Dy, e);
}
function Od(e, t, i = !0, a = !1) {
  const n = Ht || Qt;
  if (n) {
    const r = n.type;
    if (e === $d) {
      const c = m1(
        r,
        !1
      );
      if (c && (c === t || c === ei(t) || c === ru(ei(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Jf(n[e] || r[e], t) || // global registration
      Jf(n.appContext[e], t)
    );
    return !s && a ? r : s;
  }
}
function Jf(e, t) {
  return e && (e[t] || e[ei(t)] || e[ru(ei(t))]);
}
function de(e, t, i, a) {
  let n;
  const r = i, s = Pe(e);
  if (s || bt(e)) {
    const c = s && /* @__PURE__ */ nr(e);
    let d = !1, _ = !1;
    c && (d = !/* @__PURE__ */ Di(e), _ = /* @__PURE__ */ Ha(e), e = uu(e)), n = new Array(e.length);
    for (let v = 0, y = e.length; v < y; v++)
      n[v] = t(
        d ? _ ? Lr(Ki(e[v])) : Ki(e[v]) : e[v],
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
      for (let d = 0, _ = c.length; d < _; d++) {
        const v = c[d];
        n[d] = t(e[v], v, d, r);
      }
    }
  else
    n = [];
  return n;
}
function Ve(e, t, i, a, n, r) {
  if (i == null && (i = {}), Ht.ce || Ht.parent && xr(Ht.parent) && Ht.parent.ce) {
    const _ = i, v = Object.keys(_).length > 0;
    return t !== "default" && (_.name = t), h(), De(
      K,
      null,
      [fe("slot", _, a && a())],
      v ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const c = Fa.length;
  h();
  let d;
  try {
    const _ = s && Ev(s(i)), v = i.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    _ && _.key;
    d = De(
      K,
      {
        key: (v && !Gi(v) ? v : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!_ && a ? "_fb" : "")
      },
      _ || (a ? a() : []),
      _ && e._ === 1 ? 64 : -2
    );
  } catch (_) {
    for (let v = Fa.length; v > c; v--) Ld();
    throw _;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !n && d.scopeId && (d.slotScopeIds = [d.scopeId + "-s"]), d;
}
function Ev(e) {
  return e.some((t) => Hl(t) ? !(t.type === Bt || t.type === K && !Ev(t.children)) : !0) ? e : null;
}
const jc = (e) => e ? Yv(e) ? gu(e) : jc(e.parent) : null, Tl = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Nt(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => Ov(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ad(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pt.bind(e.proxy)),
    $watch: (e) => yy.bind(e)
  })
), Ju = (e, t) => e !== it && !e.__isScriptSetup && st(e, t), Fy = {
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
    const _ = Tl[t];
    let v, y;
    if (_)
      return t === "$attrs" && Xt(e.attrs, "get", ""), _(e);
    if (
      // css module (injected by vue-loader)
      (v = c.__cssModules) && (v = v[t])
    )
      return v;
    if (i !== it && st(i, t))
      return s[t] = 4, i[t];
    if (
      // global properties
      y = d.config.globalProperties, st(y, t)
    )
      return y[t];
  },
  set({ _: e }, t, i) {
    const { data: a, setupState: n, ctx: r } = e;
    return Ju(n, t) ? (n[t] = i, !0) : a !== it && st(a, t) ? (a[t] = i, !0) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = i, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: i, ctx: a, appContext: n, props: r, type: s }
  }, c) {
    let d;
    return !!(i[c] || e !== it && c[0] !== "$" && st(e, c) || Ju(t, c) || st(r, c) || st(a, c) || st(Tl, c) || st(n.config.globalProperties, c) || (d = s.__cssModules) && d[c]);
  },
  defineProperty(e, t, i) {
    return i.get != null ? e._.accessCache[t] = 0 : st(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
  }
};
function My() {
  return $v().slots;
}
function Uy() {
  return $v().attrs;
}
function $v(e) {
  const t = Tn();
  return t.setupContext || (t.setupContext = Xv(t));
}
function lo(e) {
  return Pe(e) ? e.reduce(
    (t, i) => (t[i] = null, t),
    {}
  ) : e;
}
function zy(e, t) {
  return !e || !t ? e || t : Pe(e) && Pe(t) ? e.concat(t) : Nt({}, lo(e), lo(t));
}
let Bc = !0;
function jy(e) {
  const t = Ov(e), i = e.proxy, a = e.ctx;
  Bc = !1, t.beforeCreate && Qf(t.beforeCreate, e, "bc");
  const {
    // state
    data: n,
    computed: r,
    methods: s,
    watch: c,
    provide: d,
    inject: _,
    // lifecycle
    created: v,
    beforeMount: y,
    mounted: m,
    beforeUpdate: k,
    updated: C,
    activated: S,
    deactivated: $,
    beforeDestroy: R,
    beforeUnmount: N,
    destroyed: P,
    unmounted: I,
    render: he,
    renderTracked: Q,
    renderTriggered: x,
    errorCaptured: B,
    serverPrefetch: W,
    // public API
    expose: Z,
    inheritAttrs: le,
    // assets
    components: H,
    directives: Y,
    filters: L
  } = t;
  if (_ && By(_, a, null), s)
    for (const ae in s) {
      const J = s[ae];
      je(J) && (a[ae] = J.bind(i));
    }
  if (n) {
    const ae = n.call(i, i);
    ot(ae) && (e.data = /* @__PURE__ */ Lt(ae));
  }
  if (Bc = !0, r)
    for (const ae in r) {
      const J = r[ae], ve = je(J) ? J.bind(i, i) : je(J.get) ? J.get.bind(i, i) : Pi, Ae = !je(J) && je(J.set) ? J.set.bind(i) : Pi, Le = j({
        get: ve,
        set: Ae
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
      xv(c[ae], a, i, ae);
  if (d) {
    const ae = je(d) ? d.call(i) : d;
    Reflect.ownKeys(ae).forEach((J) => {
      Ri(J, ae[J]);
    });
  }
  v && Qf(v, e, "c");
  function X(ae, J) {
    Pe(J) ? J.forEach((ve) => ae(ve.bind(i))) : J && ae(J.bind(i));
  }
  if (X(Cv, y), X(Ct, m), X(Tv, k), X(Ny, C), X($y, S), X(xy, $), X(Py, B), X(Ly, Q), X(Iy, x), X(Ci, N), X(rs, I), X(Ry, W), Pe(Z))
    if (Z.length) {
      const ae = e.exposed || (e.exposed = {});
      Z.forEach((J) => {
        Object.defineProperty(ae, J, {
          get: () => i[J],
          set: (ve) => i[J] = ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  he && e.render === Pi && (e.render = he), le != null && (e.inheritAttrs = le), H && (e.components = H), Y && (e.directives = Y), W && kv(e);
}
function By(e, t, i = Pi) {
  Pe(e) && (e = Hc(e));
  for (const a in e) {
    const n = e[a];
    let r;
    ot(n) ? "default" in n ? r = Jt(
      n.from || a,
      n.default,
      !0
    ) : r = Jt(n.from || a) : r = Jt(n), /* @__PURE__ */ ti(r) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[a] = r;
  }
}
function Qf(e, t, i) {
  Fi(
    Pe(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    i
  );
}
function xv(e, t, i, a) {
  let n = a.includes(".") ? vv(i, a) : () => i[a];
  if (bt(e)) {
    const r = t[e];
    je(r) && Ke(n, r);
  } else if (je(e))
    Ke(n, e.bind(i));
  else if (ot(e))
    if (Pe(e))
      e.forEach((r) => xv(r, t, i, a));
    else {
      const r = je(e.handler) ? e.handler.bind(i) : t[e.handler];
      je(r) && Ke(n, r, e);
    }
}
function Ov(e) {
  const t = e.type, { mixins: i, extends: a } = t, {
    mixins: n,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, c = r.get(t);
  let d;
  return c ? d = c : !n.length && !i && !a ? d = t : (d = {}, n.length && n.forEach(
    (_) => so(d, _, s, !0)
  ), so(d, t, s)), ot(t) && r.set(t, d), d;
}
function so(e, t, i, a = !1) {
  const { mixins: n, extends: r } = t;
  r && so(e, r, i, !0), n && n.forEach(
    (s) => so(e, s, i, !0)
  );
  for (const s in t)
    if (!(a && s === "expose")) {
      const c = Hy[s] || i && i[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const Hy = {
  data: eh,
  props: th,
  emits: th,
  // objects
  methods: bl,
  computed: bl,
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
  components: bl,
  directives: bl,
  // watch
  watch: qy,
  // provide / inject
  provide: eh,
  inject: Vy
};
function eh(e, t) {
  return t ? e ? function() {
    return Nt(
      je(e) ? e.call(this, this) : e,
      je(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Vy(e, t) {
  return bl(Hc(e), Hc(t));
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
function bl(e, t) {
  return e ? Nt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function th(e, t) {
  return e ? Pe(e) && Pe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Nt(
    /* @__PURE__ */ Object.create(null),
    lo(e),
    lo(t ?? {})
  ) : t;
}
function qy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const i = Nt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    i[a] = oi(e[a], t[a]);
  return i;
}
function Nv() {
  return {
    app: null,
    config: {
      isNativeTag: Up,
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
let Gy = 0;
function Ky(e, t) {
  return function(a, n = null) {
    je(a) || (a = Nt({}, a)), n != null && !ot(n) && (n = null);
    const r = Nv(), s = /* @__PURE__ */ new WeakSet(), c = [];
    let d = !1;
    const _ = r.app = {
      _uid: Gy++,
      _component: a,
      _props: n,
      _container: null,
      _context: r,
      _instance: null,
      version: _1,
      get config() {
        return r.config;
      },
      set config(v) {
      },
      use(v, ...y) {
        return s.has(v) || (v && je(v.install) ? (s.add(v), v.install(_, ...y)) : je(v) && (s.add(v), v(_, ...y))), _;
      },
      mixin(v) {
        return r.mixins.includes(v) || r.mixins.push(v), _;
      },
      component(v, y) {
        return y ? (r.components[v] = y, _) : r.components[v];
      },
      directive(v, y) {
        return y ? (r.directives[v] = y, _) : r.directives[v];
      },
      mount(v, y, m) {
        if (!d) {
          const k = _._ceVNode || fe(a, n);
          return k.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(k, v, m), d = !0, _._container = v, v.__vue_app__ = _, gu(k.component);
        }
      },
      onUnmount(v) {
        c.push(v);
      },
      unmount() {
        d && (Fi(
          c,
          _._instance,
          16
        ), e(null, _._container), delete _._container.__vue_app__);
      },
      provide(v, y) {
        return r.provides[v] = y, _;
      },
      runWithContext(v) {
        const y = Or;
        Or = _;
        try {
          return v();
        } finally {
          Or = y;
        }
      }
    };
    return _;
  };
}
let Or = null;
function Rv(e, t, i = it) {
  const a = Tn(), n = ei(t), r = qa(t), s = Iv(e, n), c = ry((d, _) => {
    let v, y = it, m;
    return my(() => {
      const k = e[n];
      jt(v, k) && (v = k, _());
    }), {
      get() {
        return d(), i.get ? i.get(v) : v;
      },
      set(k) {
        const C = i.set ? i.set(k) : k;
        if (!jt(C, v) && !(y !== it && jt(k, y)))
          return;
        const S = a.vnode.props, $ = !!(S && // check if parent has passed v-model
        (t in S || n in S || r in S) && (`onUpdate:${t}` in S || `onUpdate:${n}` in S || `onUpdate:${r}` in S));
        $ || (v = k, _()), a.emit(`update:${t}`, C), jt(k, y) && (jt(k, C) && !jt(C, m) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        $ && y !== it && !jt(C, v)) && _(), y = k, m = C;
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
const Iv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ei(t)}Modifiers`] || e[`${qa(t)}Modifiers`];
function Wy(e, t, ...i) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || it;
  let n = i;
  const r = t.startsWith("update:"), s = r && Iv(a, t.slice(7));
  s && (s.trim && (n = i.map((v) => bt(v) ? v.trim() : v)), s.number && (n = n.map(lu)));
  let c, d = a[c = Gu(t)] || // also try camelCase event handler (#2249)
  a[c = Gu(ei(t))];
  !d && r && (d = a[c = Gu(qa(t))]), d && Fi(
    d,
    e,
    6,
    n
  );
  const _ = a[c + "Once"];
  if (_) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Fi(
      _,
      e,
      6,
      n
    );
  }
}
const Yy = /* @__PURE__ */ new WeakMap();
function Lv(e, t, i = !1) {
  const a = i ? Yy : t.emitsCache, n = a.get(e);
  if (n !== void 0)
    return n;
  const r = e.emits;
  let s = {}, c = !1;
  if (!je(e)) {
    const d = (_) => {
      const v = Lv(_, t, !0);
      v && (c = !0, Nt(s, v));
    };
    !i && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !c ? (ot(e) && a.set(e, null), null) : (Pe(r) ? r.forEach((d) => s[d] = null) : Nt(s, r), ot(e) && a.set(e, s), s);
}
function bu(e, t) {
  return !e || !iu(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, qa(t)) || st(e, t));
}
function ih(e) {
  const {
    type: t,
    vnode: i,
    proxy: a,
    withProxy: n,
    propsOptions: [r],
    slots: s,
    attrs: c,
    emit: d,
    render: _,
    renderCache: v,
    props: y,
    data: m,
    setupState: k,
    ctx: C,
    inheritAttrs: S
  } = e, $ = ao(e);
  let R, N;
  try {
    if (i.shapeFlag & 4) {
      const I = n || a, he = I;
      R = sa(
        _.call(
          he,
          I,
          v,
          y,
          k,
          m,
          C
        )
      ), N = c;
    } else {
      const I = t;
      R = sa(
        I.length > 1 ? I(
          y,
          { attrs: c, slots: s, emit: d }
        ) : I(
          y,
          null
        )
      ), N = t.props ? c : Zy(c);
    }
  } catch (I) {
    Fa.length = 0, cu(I, e, 1), R = fe(Bt);
  }
  let P = R;
  if (N && S !== !1) {
    const I = Object.keys(N), { shapeFlag: he } = P;
    I.length && he & 7 && (r && I.some(au) && (N = Xy(
      N,
      r
    )), P = Sn(P, N, !1, !0));
  }
  if (i.dirs && (P = Sn(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(i.dirs) : i.dirs), i.transition) {
    const I = hu(P.type) && no(P) || P;
    jl(I, i.transition);
  }
  return R = P, ao($), R;
}
const Zy = (e) => {
  let t;
  for (const i in e)
    (i === "class" || i === "style" || iu(i)) && ((t || (t = {}))[i] = e[i]);
  return t;
}, Xy = (e, t) => {
  const i = {};
  for (const a in e)
    (!au(a) || !(a.slice(9) in t)) && (i[a] = e[a]);
  return i;
};
function Jy(e, t, i) {
  const { props: a, children: n, component: r } = e, { props: s, children: c, patchFlag: d } = t, _ = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (i && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? ah(a, s, _) : !!s;
    if (d & 8) {
      const v = t.dynamicProps;
      for (let y = 0; y < v.length; y++) {
        const m = v[y];
        if (Pv(s, a, m) && !bu(_, m))
          return !0;
      }
    }
  } else
    return (n || c) && (!c || !c.$stable) ? !0 : a === s ? !1 : a ? s ? ah(a, s, _) : !0 : !!s;
  return !1;
}
function ah(e, t, i) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let n = 0; n < a.length; n++) {
    const r = a[n];
    if (Pv(t, e, r) && !bu(i, r))
      return !0;
  }
  return !1;
}
function Pv(e, t, i) {
  const a = e[i], n = t[i];
  return i === "style" && ot(a) && ot(n) ? !za(a, n) : a !== n;
}
function Qy({ vnode: e, parent: t, suspense: i }, a) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = a, e = n), n === e)
      (e = t.vnode).el = a, t = t.parent;
    else
      break;
  }
  i && i.activeBranch === e && (i.vnode.el = a);
}
const Dv = {}, Fv = () => Object.create(Dv), Mv = (e) => Object.getPrototypeOf(e) === Dv;
function e1(e, t, i, a = !1) {
  const n = {}, r = Fv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Uv(e, t, n, r);
  for (const s in e.propsOptions[0])
    s in n || (n[s] = void 0);
  i ? e.props = a ? n : /* @__PURE__ */ ey(n) : e.type.props ? e.props = n : e.props = r, e.attrs = r;
}
function t1(e, t, i, a) {
  const {
    props: n,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, c = /* @__PURE__ */ lt(n), [d] = e.propsOptions;
  let _ = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const v = e.vnode.dynamicProps;
      for (let y = 0; y < v.length; y++) {
        let m = v[y];
        if (bu(e.emitsOptions, m))
          continue;
        const k = t[m];
        if (d)
          if (st(r, m))
            k !== r[m] && (r[m] = k, _ = !0);
          else {
            const C = ei(m);
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
          k !== r[m] && (r[m] = k, _ = !0);
      }
    }
  } else {
    Uv(e, t, n, r) && (_ = !0);
    let v;
    for (const y in c)
      (!t || // for camelCase
      !st(t, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = qa(y)) === y || !st(t, v))) && (d ? i && // for camelCase
      (i[y] !== void 0 || // for kebab-case
      i[v] !== void 0) && (n[y] = Vc(
        d,
        c,
        y,
        void 0,
        e,
        !0
      )) : delete n[y]);
    if (r !== c)
      for (const y in r)
        (!t || !st(t, y)) && (delete r[y], _ = !0);
  }
  _ && Ra(e.attrs, "set", "");
}
function Uv(e, t, i, a) {
  const [n, r] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let d in t) {
      if (wl(d))
        continue;
      const _ = t[d];
      let v;
      n && st(n, v = ei(d)) ? !r || !r.includes(v) ? i[v] = _ : (c || (c = {}))[v] = _ : bu(e.emitsOptions, d) || (!(d in a) || _ !== a[d]) && (a[d] = _, s = !0);
    }
  if (r) {
    const d = /* @__PURE__ */ lt(i), _ = c || it;
    for (let v = 0; v < r.length; v++) {
      const y = r[v];
      i[y] = Vc(
        n,
        d,
        y,
        _[y],
        e,
        !st(_, y)
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
        const { propsDefaults: _ } = n;
        if (i in _)
          a = _[i];
        else {
          const v = ss(n);
          a = _[i] = d.call(
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
    ] && (a === "" || a === qa(i)) && (a = !0));
  }
  return a;
}
const i1 = /* @__PURE__ */ new WeakMap();
function zv(e, t, i = !1) {
  const a = i ? i1 : t.propsCache, n = a.get(e);
  if (n)
    return n;
  const r = e.props, s = {}, c = [];
  let d = !1;
  if (!je(e)) {
    const v = (y) => {
      d = !0;
      const [m, k] = zv(y, t, !0);
      Nt(s, m), k && c.push(...k);
    };
    !i && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return ot(e) && a.set(e, Er), Er;
  if (Pe(r))
    for (let v = 0; v < r.length; v++) {
      const y = ei(r[v]);
      nh(y) && (s[y] = it);
    }
  else if (r)
    for (const v in r) {
      const y = ei(v);
      if (nh(y)) {
        const m = r[v], k = s[y] = Pe(m) || je(m) ? { type: m } : Nt({}, m), C = k.type;
        let S = !1, $ = !0;
        if (Pe(C))
          for (let R = 0; R < C.length; ++R) {
            const N = C[R], P = je(N) && N.name;
            if (P === "Boolean") {
              S = !0;
              break;
            } else P === "String" && ($ = !1);
          }
        else
          S = je(C) && C.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = S, k[
          1
          /* shouldCastTrue */
        ] = $, (S || st(k, "default")) && c.push(y);
      }
    }
  const _ = [s, c];
  return ot(e) && a.set(e, _), _;
}
function nh(e) {
  return e[0] !== "$" && !wl(e);
}
const Nd = (e) => e === "_" || e === "_ctx" || e === "$stable", Rd = (e) => Pe(e) ? e.map(sa) : [sa(e)], a1 = (e, t, i) => {
  if (t._n)
    return t;
  const a = Se((...n) => Rd(t(...n)), i);
  return a._c = !1, a;
}, jv = (e, t, i) => {
  const a = e._ctx;
  for (const n in e) {
    if (Nd(n)) continue;
    const r = e[n];
    if (je(r))
      t[n] = a1(n, r, a);
    else if (r != null) {
      const s = Rd(r);
      t[n] = () => s;
    }
  }
}, Bv = (e, t) => {
  const i = Rd(t);
  e.slots.default = () => i;
}, Hv = (e, t, i) => {
  for (const a in t)
    (i || !Nd(a)) && (e[a] = t[a]);
}, n1 = (e, t, i) => {
  const a = e.slots = Fv();
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (Hv(a, t, i), i && Hp(a, "_", n, !0)) : jv(t, a);
  } else t && Bv(e, t);
}, r1 = (e, t, i) => {
  const { vnode: a, slots: n } = e;
  let r = !0, s = it;
  if (a.shapeFlag & 32) {
    const c = t._;
    c ? i && c === 1 ? r = !1 : Hv(n, t, i) : (r = !t.$stable, jv(t, n)), s = t;
  } else t && (Bv(e, t), s = { default: 1 });
  if (r)
    for (const c in n)
      !Nd(c) && s[c] == null && delete n[c];
}, ui = c1;
function l1(e) {
  return s1(e);
}
function s1(e, t) {
  const i = su();
  i.__VUE__ = !0;
  const {
    insert: a,
    remove: n,
    patchProp: r,
    createElement: s,
    createText: c,
    createComment: d,
    setText: _,
    setElementText: v,
    parentNode: y,
    nextSibling: m,
    setScopeId: k = Pi,
    insertStaticContent: C
  } = e, S = (T, O, D, q = null, z = null, te = null, re = void 0, ue = null, me = !!O.dynamicChildren) => {
    if (T === O)
      return;
    T && !Qn(T, O) && (q = be(T), Oe(T, z, te, !0), T = null), O.patchFlag === -2 && (me = !1, O.dynamicChildren = null);
    const { type: ce, ref: Ne, shapeFlag: ke } = O;
    switch (ce) {
      case ls:
        $(T, O, D, q);
        break;
      case Bt:
        R(T, O, D, q);
        break;
      case Zs:
        T == null && N(O, D, q, re);
        break;
      case K:
        H(
          T,
          O,
          D,
          q,
          z,
          te,
          re,
          ue,
          me
        );
        break;
      default:
        ke & 1 ? he(
          T,
          O,
          D,
          q,
          z,
          te,
          re,
          ue,
          me
        ) : ke & 6 ? Y(
          T,
          O,
          D,
          q,
          z,
          te,
          re,
          ue,
          me
        ) : (ke & 64 || ke & 128) && ce.process(
          T,
          O,
          D,
          q,
          z,
          te,
          re,
          ue,
          me,
          Ue
        );
    }
    Ne != null && z ? Cl(Ne, T && T.ref, te, O || T, !O) : Ne == null && T && T.ref != null && Cl(T.ref, null, te, T, !0);
  }, $ = (T, O, D, q) => {
    if (T == null)
      a(
        O.el = c(O.children),
        D,
        q
      );
    else {
      const z = O.el = T.el;
      O.children !== T.children && _(z, O.children);
    }
  }, R = (T, O, D, q) => {
    T == null ? a(
      O.el = d(O.children || ""),
      D,
      q
    ) : O.el = T.el;
  }, N = (T, O, D, q) => {
    [T.el, T.anchor] = C(
      T.children,
      O,
      D,
      q,
      T.el,
      T.anchor
    );
  }, P = ({ el: T, anchor: O }, D, q) => {
    let z;
    for (; T && T !== O; )
      z = m(T), a(T, D, q), T = z;
    a(O, D, q);
  }, I = ({ el: T, anchor: O }) => {
    let D;
    for (; T && T !== O; )
      D = m(T), n(T), T = D;
    n(O);
  }, he = (T, O, D, q, z, te, re, ue, me) => {
    if (O.type === "svg" ? re = "svg" : O.type === "math" && (re = "mathml"), T == null)
      Q(
        O,
        D,
        q,
        z,
        te,
        re,
        ue,
        me
      );
    else {
      const ce = T.el && T.el._isVueCE ? T.el : null;
      try {
        ce && ce._beginPatch(), W(
          T,
          O,
          z,
          te,
          re,
          ue,
          me
        );
      } finally {
        ce && ce._endPatch();
      }
    }
  }, Q = (T, O, D, q, z, te, re, ue) => {
    let me, ce;
    const { props: Ne, shapeFlag: ke, transition: $e, dirs: Re } = T;
    if (me = T.el = s(
      T.type,
      te,
      Ne && Ne.is,
      Ne
    ), ke & 8 ? v(me, T.children) : ke & 16 && B(
      T.children,
      me,
      null,
      q,
      z,
      Qu(T, te),
      re,
      ue
    ), Re && Vn(T, null, q, "created"), x(me, T, T.scopeId, re, q), Ne) {
      for (const Ze in Ne)
        Ze !== "value" && !wl(Ze) && r(me, Ze, null, Ne[Ze], te, q);
      "value" in Ne && r(me, "value", null, Ne.value, te), (ce = Ne.onVnodeBeforeMount) && ta(ce, q, T);
    }
    Re && Vn(T, null, q, "beforeMount");
    const qe = o1(z, $e);
    qe && $e.beforeEnter(me), a(me, O, D), ((ce = Ne && Ne.onVnodeMounted) || qe || Re) && ui(() => {
      ce && ta(ce, q, T), qe && $e.enter(me), Re && Vn(T, null, q, "mounted");
    }, z);
  }, x = (T, O, D, q, z) => {
    if (D && k(T, D), q)
      for (let te = 0; te < q.length; te++)
        k(T, q[te]);
    if (z) {
      let te = z.subTree;
      if (O === te || Gv(te.type) && (te.ssContent === O || te.ssFallback === O)) {
        const re = z.vnode;
        x(
          T,
          re,
          re.scopeId,
          re.slotScopeIds,
          z.parent
        );
      }
    }
  }, B = (T, O, D, q, z, te, re, ue, me = 0) => {
    for (let ce = me; ce < T.length; ce++) {
      const Ne = T[ce] = ue ? Na(T[ce]) : sa(T[ce]);
      S(
        null,
        Ne,
        O,
        D,
        q,
        z,
        te,
        re,
        ue
      );
    }
  }, W = (T, O, D, q, z, te, re) => {
    const ue = O.el = T.el;
    let { patchFlag: me, dynamicChildren: ce, dirs: Ne } = O;
    me |= T.patchFlag & 16;
    const ke = T.props || it, $e = O.props || it;
    let Re;
    if (D && qn(D, !1), (Re = $e.onVnodeBeforeUpdate) && ta(Re, D, O, T), Ne && Vn(O, T, D, "beforeUpdate"), D && qn(D, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    ce && (!T.dynamicChildren || T.dynamicChildren.length !== ce.length) && (me = 0, re = !1, ce = null), (ke.innerHTML && $e.innerHTML == null || ke.textContent && $e.textContent == null) && v(ue, ""), ce ? Z(
      T.dynamicChildren,
      ce,
      ue,
      D,
      q,
      Qu(O, z),
      te
    ) : re || J(
      T,
      O,
      ue,
      null,
      D,
      q,
      Qu(O, z),
      te,
      !1
    ), me > 0) {
      if (me & 16)
        le(ue, ke, $e, D, z);
      else if (me & 2 && ke.class !== $e.class && r(ue, "class", null, $e.class, z), me & 4 && r(ue, "style", ke.style, $e.style, z), me & 8) {
        const qe = O.dynamicProps;
        for (let Ze = 0; Ze < qe.length; Ze++) {
          const Ge = qe[Ze], at = ke[Ge], dt = $e[Ge];
          (dt !== at || Ge === "value") && r(ue, Ge, at, dt, z, D);
        }
      }
      me & 1 && T.children !== O.children && v(ue, O.children);
    } else !re && ce == null && le(ue, ke, $e, D, z);
    ((Re = $e.onVnodeUpdated) || Ne) && ui(() => {
      Re && ta(Re, D, O, T), Ne && Vn(O, T, D, "updated");
    }, q);
  }, Z = (T, O, D, q, z, te, re) => {
    for (let ue = 0; ue < O.length; ue++) {
      const me = T[ue], ce = O[ue], Ne = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        me.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (me.type === K || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qn(me, ce) || // - In the case of a component, it could contain anything.
        me.shapeFlag & 198) ? y(me.el) : (
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
        q,
        z,
        te,
        re,
        !0
      );
    }
  }, le = (T, O, D, q, z) => {
    if (O !== D) {
      if (O !== it)
        for (const te in O)
          !wl(te) && !(te in D) && r(
            T,
            te,
            O[te],
            null,
            z,
            q
          );
      for (const te in D) {
        if (wl(te)) continue;
        const re = D[te], ue = O[te];
        re !== ue && te !== "value" && r(T, te, ue, re, z, q);
      }
      "value" in D && r(T, "value", O.value, D.value, z);
    }
  }, H = (T, O, D, q, z, te, re, ue, me) => {
    const ce = O.el = T ? T.el : c(""), Ne = O.anchor = T ? T.anchor : c("");
    let { patchFlag: ke, dynamicChildren: $e, slotScopeIds: Re } = O;
    Re && (ue = ue ? ue.concat(Re) : Re), T == null ? (a(ce, D, q), a(Ne, D, q), B(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      D,
      Ne,
      z,
      te,
      re,
      ue,
      me
    )) : ke > 0 && ke & 64 && $e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren && T.dynamicChildren.length === $e.length ? (Z(
      T.dynamicChildren,
      $e,
      D,
      z,
      te,
      re,
      ue
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (O.key != null || z && O === z.subTree) && Id(
      T,
      O,
      !0
      /* shallow */
    )) : J(
      T,
      O,
      D,
      Ne,
      z,
      te,
      re,
      ue,
      me
    );
  }, Y = (T, O, D, q, z, te, re, ue, me) => {
    O.slotScopeIds = ue, T == null ? O.shapeFlag & 512 ? z.ctx.activate(
      O,
      D,
      q,
      re,
      me
    ) : L(
      O,
      D,
      q,
      z,
      te,
      re,
      me
    ) : G(T, O, me);
  }, L = (T, O, D, q, z, te, re) => {
    const ue = T.component = p1(
      T,
      q,
      z
    );
    if (pu(T) && (ue.ctx.renderer = Ue), v1(ue, !1, re), ue.asyncDep) {
      if (z && z.registerDep(ue, X, re), !T.el) {
        const me = ue.subTree = fe(Bt);
        R(null, me, O, D), T.placeholder = me.el;
      }
    } else
      X(
        ue,
        T,
        O,
        D,
        z,
        te,
        re
      );
  }, G = (T, O, D) => {
    const q = O.component = T.component;
    if (Jy(T, O, D))
      if (q.asyncDep && !q.asyncResolved) {
        ae(q, O, D);
        return;
      } else
        q.next = O, q.update();
    else
      O.el = T.el, q.vnode = O;
  }, X = (T, O, D, q, z, te, re) => {
    const ue = () => {
      if (T.isMounted) {
        let { next: ke, bu: $e, u: Re, parent: qe, vnode: Ze } = T;
        {
          const gt = Vv(T);
          if (gt) {
            ke && (ke.el = Ze.el, ae(T, ke, re)), gt.asyncDep.then(() => {
              ui(() => {
                T.isUnmounted || ce();
              }, z);
            });
            return;
          }
        }
        let Ge = ke, at;
        qn(T, !1), ke ? (ke.el = Ze.el, ae(T, ke, re)) : ke = Ze, $e && Ys($e), (at = ke.props && ke.props.onVnodeBeforeUpdate) && ta(at, qe, ke, Ze), qn(T, !0);
        const dt = ih(T), yt = T.subTree;
        T.subTree = dt, S(
          yt,
          dt,
          // parent may have changed if it's in a teleport
          y(yt.el),
          // anchor may have changed if it's in a fragment
          be(yt),
          T,
          z,
          te
        ), ke.el = dt.el, Ge === null && Qy(T, dt.el), Re && ui(Re, z), (at = ke.props && ke.props.onVnodeUpdated) && ui(
          () => ta(at, qe, ke, Ze),
          z
        );
      } else {
        let ke;
        const { el: $e, props: Re } = O, { bm: qe, m: Ze, parent: Ge, root: at, type: dt } = T, yt = xr(O);
        qn(T, !1), qe && Ys(qe), !yt && (ke = Re && Re.onVnodeBeforeMount) && ta(ke, Ge, O), qn(T, !0);
        {
          at.ce && at.ce._hasShadowRoot() && at.ce._injectChildStyle(
            dt,
            T.parent ? T.parent.type : void 0
          );
          const gt = T.subTree = ih(T);
          S(
            null,
            gt,
            D,
            q,
            T,
            z,
            te
          ), O.el = gt.el;
        }
        if (Ze && ui(Ze, z), !yt && (ke = Re && Re.onVnodeMounted)) {
          const gt = O;
          ui(
            () => ta(ke, Ge, gt),
            z
          );
        }
        (O.shapeFlag & 256 || Ge && xr(Ge.vnode) && Ge.vnode.shapeFlag & 256) && T.a && ui(T.a, z), T.isMounted = !0, O = D = q = null;
      }
    };
    T.scope.on();
    const me = T.effect = new Kp(ue);
    T.scope.off();
    const ce = T.update = me.run.bind(me), Ne = T.job = me.runIfDirty.bind(me);
    Ne.i = T, Ne.id = T.uid, me.scheduler = () => Ad(Ne), qn(T, !0), ce();
  }, ae = (T, O, D) => {
    O.component = T;
    const q = T.vnode.props;
    T.vnode = O, T.next = null, t1(T, O.props, q, D), r1(T, O.children, D), ja(), Gf(T), Ba();
  }, J = (T, O, D, q, z, te, re, ue, me = !1) => {
    const ce = T && T.children, Ne = T ? T.shapeFlag : 0, ke = O.children, { patchFlag: $e, shapeFlag: Re } = O;
    if ($e > 0) {
      if ($e & 128) {
        Ae(
          ce,
          ke,
          D,
          q,
          z,
          te,
          re,
          ue,
          me
        );
        return;
      } else if ($e & 256) {
        ve(
          ce,
          ke,
          D,
          q,
          z,
          te,
          re,
          ue,
          me
        );
        return;
      }
    }
    Re & 8 ? (Ne & 16 && we(ce, z, te), ke !== ce && v(D, ke)) : Ne & 16 ? Re & 16 ? Ae(
      ce,
      ke,
      D,
      q,
      z,
      te,
      re,
      ue,
      me
    ) : we(ce, z, te, !0) : (Ne & 8 && v(D, ""), Re & 16 && B(
      ke,
      D,
      q,
      z,
      te,
      re,
      ue,
      me
    ));
  }, ve = (T, O, D, q, z, te, re, ue, me) => {
    T = T || Er, O = O || Er;
    const ce = T.length, Ne = O.length, ke = Math.min(ce, Ne);
    let $e;
    for ($e = 0; $e < ke; $e++) {
      const Re = O[$e] = me ? Na(O[$e]) : sa(O[$e]);
      S(
        T[$e],
        Re,
        D,
        null,
        z,
        te,
        re,
        ue,
        me
      );
    }
    ce > Ne ? we(
      T,
      z,
      te,
      !0,
      !1,
      ke
    ) : B(
      O,
      D,
      q,
      z,
      te,
      re,
      ue,
      me,
      ke
    );
  }, Ae = (T, O, D, q, z, te, re, ue, me) => {
    let ce = 0;
    const Ne = O.length;
    let ke = T.length - 1, $e = Ne - 1;
    for (; ce <= ke && ce <= $e; ) {
      const Re = T[ce], qe = O[ce] = me ? Na(O[ce]) : sa(O[ce]);
      if (Qn(Re, qe))
        S(
          Re,
          qe,
          D,
          null,
          z,
          te,
          re,
          ue,
          me
        );
      else
        break;
      ce++;
    }
    for (; ce <= ke && ce <= $e; ) {
      const Re = T[ke], qe = O[$e] = me ? Na(O[$e]) : sa(O[$e]);
      if (Qn(Re, qe))
        S(
          Re,
          qe,
          D,
          null,
          z,
          te,
          re,
          ue,
          me
        );
      else
        break;
      ke--, $e--;
    }
    if (ce > ke) {
      if (ce <= $e) {
        const Re = $e + 1, qe = Re < Ne ? O[Re].el : q;
        for (; ce <= $e; )
          S(
            null,
            O[ce] = me ? Na(O[ce]) : sa(O[ce]),
            D,
            qe,
            z,
            te,
            re,
            ue,
            me
          ), ce++;
      }
    } else if (ce > $e)
      for (; ce <= ke; )
        Oe(T[ce], z, te, !0), ce++;
    else {
      const Re = ce, qe = ce, Ze = /* @__PURE__ */ new Map();
      for (ce = qe; ce <= $e; ce++) {
        const kt = O[ce] = me ? Na(O[ce]) : sa(O[ce]);
        kt.key != null && Ze.set(kt.key, ce);
      }
      let Ge, at = 0;
      const dt = $e - qe + 1;
      let yt = !1, gt = 0;
      const ai = new Array(dt);
      for (ce = 0; ce < dt; ce++) ai[ce] = 0;
      for (ce = Re; ce <= ke; ce++) {
        const kt = T[ce];
        if (at >= dt) {
          Oe(kt, z, te, !0);
          continue;
        }
        let Rt;
        if (kt.key != null)
          Rt = Ze.get(kt.key);
        else
          for (Ge = qe; Ge <= $e; Ge++)
            if (ai[Ge - qe] === 0 && Qn(kt, O[Ge])) {
              Rt = Ge;
              break;
            }
        Rt === void 0 ? Oe(kt, z, te, !0) : (ai[Rt - qe] = ce + 1, Rt >= gt ? gt = Rt : yt = !0, S(
          kt,
          O[Rt],
          D,
          null,
          z,
          te,
          re,
          ue,
          me
        ), at++);
      }
      const pi = yt ? u1(ai) : Er;
      for (Ge = pi.length - 1, ce = dt - 1; ce >= 0; ce--) {
        const kt = qe + ce, Rt = O[kt], Mi = O[kt + 1], Gt = kt + 1 < Ne ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Mi.el || qv(Mi)
        ) : q;
        ai[ce] === 0 ? S(
          null,
          Rt,
          D,
          Gt,
          z,
          te,
          re,
          ue,
          me
        ) : yt && (Ge < 0 || ce !== pi[Ge] ? Le(Rt, D, Gt, 2) : Ge--);
      }
    }
  }, Le = (T, O, D, q, z = null) => {
    const { el: te, type: re, transition: ue, children: me, shapeFlag: ce } = T;
    if (ce & 6) {
      Le(T.component.subTree, O, D, q);
      return;
    }
    if (ce & 128) {
      T.suspense.move(O, D, q);
      return;
    }
    if (ce & 64) {
      re.move(T, O, D, Ue);
      return;
    }
    if (re === K) {
      a(te, O, D);
      for (let ke = 0; ke < me.length; ke++)
        Le(me[ke], O, D, q);
      a(T.anchor, O, D);
      return;
    }
    if (re === Zs) {
      P(T, O, D);
      return;
    }
    if (q !== 2 && ce & 1 && ue)
      if (q === 0)
        ue.persisted && !te[Ii] ? a(te, O, D) : (ue.beforeEnter(te), a(te, O, D), ui(() => ue.enter(te), z));
      else {
        const { leave: ke, delayLeave: $e, afterLeave: Re } = ue, qe = () => {
          T.ctx.isUnmounted ? n(te) : a(te, O, D);
        }, Ze = () => {
          const Ge = te._isLeaving || !!te[Ii];
          te._isLeaving && te[Ii](
            !0
            /* cancelled */
          ), ue.persisted && !Ge ? qe() : ke(te, () => {
            qe(), Re && Re();
          });
        };
        $e ? $e(te, qe, Ze) : Ze();
      }
    else
      a(te, O, D);
  }, Oe = (T, O, D, q = !1, z = !1) => {
    const {
      type: te,
      props: re,
      ref: ue,
      children: me,
      dynamicChildren: ce,
      shapeFlag: Ne,
      patchFlag: ke,
      dirs: $e,
      cacheIndex: Re,
      memo: qe
    } = T;
    if (ke === -2 && (z = !1), ue != null && (ja(), Cl(ue, null, D, T, !0), Ba()), Re != null && (O.renderCache[Re] = void 0), Ne & 256) {
      O.ctx.deactivate(T);
      return;
    }
    const Ze = Ne & 1 && $e, Ge = !xr(T);
    let at;
    if (Ge && (at = re && re.onVnodeBeforeUnmount) && ta(at, O, T), Ne & 6)
      ct(T.component, D, q);
    else {
      if (Ne & 128) {
        T.suspense.unmount(D, q);
        return;
      }
      Ze && Vn(T, null, O, "beforeUnmount"), Ne & 64 ? T.type.remove(
        T,
        O,
        D,
        Ue,
        q
      ) : ce && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ce.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (te !== K || ke > 0 && ke & 64) ? we(
        ce,
        O,
        D,
        !1,
        !0
      ) : (te === K && ke & 384 || !z && Ne & 16) && we(me, O, D), q && Me(T);
    }
    const dt = qe != null && Re == null;
    (Ge && (at = re && re.onVnodeUnmounted) || Ze || dt) && ui(() => {
      at && ta(at, O, T), Ze && Vn(T, null, O, "unmounted"), dt && (T.el = null);
    }, D);
  }, Me = (T) => {
    const { type: O, el: D, anchor: q, transition: z } = T;
    if (O === K) {
      Xe(D, q);
      return;
    }
    if (O === Zs) {
      I(T);
      return;
    }
    const te = () => {
      n(D), z && !z.persisted && z.afterLeave && z.afterLeave();
    };
    if (T.shapeFlag & 1 && z && !z.persisted) {
      const { leave: re, delayLeave: ue } = z, me = () => re(D, te);
      ue ? ue(T.el, te, me) : me();
    } else
      te();
  }, Xe = (T, O) => {
    let D;
    for (; T !== O; )
      D = m(T), n(T), T = D;
    n(O);
  }, ct = (T, O, D) => {
    const { bum: q, scope: z, job: te, subTree: re, um: ue, m: me, a: ce } = T;
    rh(me), rh(ce), q && Ys(q), z.stop(), te && (te.flags |= 8, Oe(re, T, O, D)), ue && ui(ue, O), ui(() => {
      T.isUnmounted = !0;
    }, O);
  }, we = (T, O, D, q = !1, z = !1, te = 0) => {
    for (let re = te; re < T.length; re++)
      Oe(T[re], O, D, q, z);
  }, be = (T) => {
    if (T.shapeFlag & 6)
      return be(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const O = m(T.anchor || T.el), D = O && O[bv];
    return D ? m(D) : O;
  };
  let V = !1;
  const ne = (T, O, D) => {
    let q;
    T == null ? O._vnode && (Oe(O._vnode, null, null, !0), q = O._vnode.component) : S(
      O._vnode || null,
      T,
      O,
      null,
      null,
      null,
      D
    ), O._vnode = T, V || (V = !0, Gf(q), hv(), V = !1);
  }, Ue = {
    p: S,
    um: Oe,
    m: Le,
    r: Me,
    mt: L,
    mc: B,
    pc: J,
    pbc: Z,
    n: be,
    o: e
  };
  return {
    render: ne,
    hydrate: void 0,
    createApp: Ky(ne)
  };
}
function Qu({ type: e, props: t }, i) {
  return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
}
function qn({ effect: e, job: t }, i) {
  i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function o1(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Id(e, t, i = !1) {
  const a = e.children, n = t.children;
  if (Pe(a) && Pe(n))
    for (let r = 0; r < a.length; r++) {
      const s = a[r];
      let c = n[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = n[r] = Na(n[r]), c.el = s.el), !i && c.patchFlag !== -2 && Id(s, c)), c.type === ls && (c.patchFlag === -1 && (c = n[r] = Na(c)), c.el = s.el), c.type === Bt && !c.el && (c.el = s.el);
    }
}
function u1(e) {
  const t = e.slice(), i = [0];
  let a, n, r, s, c;
  const d = e.length;
  for (a = 0; a < d; a++) {
    const _ = e[a];
    if (_ !== 0) {
      if (n = i[i.length - 1], e[n] < _) {
        t[a] = n, i.push(a);
        continue;
      }
      for (r = 0, s = i.length - 1; r < s; )
        c = r + s >> 1, e[i[c]] < _ ? r = c + 1 : s = c;
      _ < e[i[r]] && (r > 0 && (t[a] = i[r - 1]), i[r] = a);
    }
  }
  for (r = i.length, s = i[r - 1]; r-- > 0; )
    i[r] = s, s = t[s];
  return i;
}
function Vv(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Vv(t);
}
function rh(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function qv(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? qv(t.subTree) : null;
}
const Gv = (e) => e.__isSuspense;
function c1(e, t) {
  t && t.pendingBranch ? Pe(e) ? t.effects.push(...e) : t.effects.push(e) : fv(e);
}
const K = /* @__PURE__ */ Symbol.for("v-fgt"), ls = /* @__PURE__ */ Symbol.for("v-txt"), Bt = /* @__PURE__ */ Symbol.for("v-cmt"), Zs = /* @__PURE__ */ Symbol.for("v-stc"), Fa = [];
let Si = null;
function h(e = !1) {
  Fa.push(Si = e ? null : []);
}
function Ld() {
  Fa.pop(), Si = Fa[Fa.length - 1] || null;
}
let Bl = 1;
function oo(e, t = !1) {
  Bl += e, e < 0 && Si && t && (Si.hasOnce = !0);
}
function Kv(e) {
  return e.dynamicChildren = Bl > 0 ? Si || Er : null, Ld(), Bl > 0 && Si && Si.push(e), e;
}
function p(e, t, i, a, n, r) {
  return Kv(
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
  return Kv(
    fe(
      e,
      t,
      i,
      a,
      n,
      !0
    )
  );
}
function Hl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Qn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Wv = ({ key: e }) => e ?? null, Xs = ({
  ref: e,
  ref_key: t,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? bt(e) || /* @__PURE__ */ ti(e) || je(e) ? { i: Ht, r: e, k: t, f: !!i } : e : null);
function l(e, t = null, i = null, a = 0, n = null, r = e === K ? 0 : 1, s = !1, c = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wv(t),
    ref: t && Xs(t),
    scopeId: du,
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
  return c ? (uo(d, i), r & 128 && e.normalize(d)) : i && (d.shapeFlag |= bt(i) ? 8 : 16), Bl > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Si && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Si.push(d), d;
}
const fe = d1;
function d1(e, t = null, i = null, a = 0, n = null, r = !1) {
  if ((!e || e === Av) && (e = Bt), Hl(e)) {
    const c = Sn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return i && uo(c, i), Bl > 0 && !r && Si && (c.shapeFlag & 6 ? Si[Si.indexOf(e)] = c : Si.push(c)), c.patchFlag = -2, c;
  }
  if (y1(e) && (e = e.__vccOpts), t) {
    t = Vl(t);
    let { class: c, style: d } = t;
    c && !bt(c) && (t.class = Ee(c)), ot(d) && (/* @__PURE__ */ Td(d) && !Pe(d) && (d = Nt({}, d)), t.style = hi(d));
  }
  const s = bt(e) ? 1 : Gv(e) ? 128 : hu(e) ? 64 : ot(e) ? 4 : je(e) ? 2 : 0;
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
function Vl(e) {
  return e ? /* @__PURE__ */ Td(e) || Mv(e) ? Nt({}, e) : e : null;
}
function Sn(e, t, i = !1, a = !1) {
  const { props: n, ref: r, patchFlag: s, children: c, transition: d } = e, _ = t ? ii(n || {}, t) : n, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: _,
    key: _ && Wv(_),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && r ? Pe(r) ? r.concat(Xs(t)) : [r, Xs(t)] : Xs(t)
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
    patchFlag: t && e.type !== K ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Sn(e.ssContent),
    ssFallback: e.ssFallback && Sn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && a && jl(
    v,
    d.clone(v)
  ), v;
}
function ee(e = " ", t = 0) {
  return fe(ls, null, e, t);
}
function A(e = "", t = !1) {
  return t ? (h(), De(Bt, null, e)) : fe(Bt, null, e);
}
function sa(e) {
  return e == null || typeof e == "boolean" ? fe(Bt) : Pe(e) ? fe(
    K,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Hl(e) ? Na(e) : fe(ls, null, String(e));
}
function Na(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Sn(e);
}
function uo(e, t) {
  let i = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (Pe(t))
    i = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const n = t.default;
      n && (n._c && (n._d = !1), uo(e, n()), n._c && (n._d = !0));
      return;
    } else {
      i = 32;
      const n = t._;
      !n && !Mv(t) ? t._ctx = Ht : n === 3 && Ht && (Ht.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (je(t)) {
    if (a & 65) {
      uo(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ht }, i = 32;
  } else
    t = String(t), a & 64 ? (i = 16, t = [ee(t)]) : i = 8;
  e.children = t, e.shapeFlag |= i;
}
function ii(...e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    for (const n in a)
      if (n === "class")
        t.class !== a.class && (t.class = Ee([t.class, a.class]));
      else if (n === "style")
        t.style = hi([t.style, a.style]);
      else if (iu(n)) {
        const r = t[n], s = a[n];
        s && r !== s && !(Pe(r) && r.includes(s)) ? t[n] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !au(n) && (t[n] = s);
      } else n !== "" && (t[n] = a[n]);
  }
  return t;
}
function ta(e, t, i, a = null) {
  Fi(e, t, 7, [
    i,
    a
  ]);
}
const f1 = Nv();
let h1 = 0;
function p1(e, t, i) {
  const a = e.type, n = (t ? t.appContext : e.appContext) || f1, r = {
    uid: h1++,
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
    scope: new Pm(
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
    propsOptions: zv(a, n),
    emitsOptions: Lv(a, n),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Wy.bind(null, r), e.ce && e.ce(r), r;
}
let Qt = null;
const Tn = () => Qt || Ht;
let co, ql;
{
  const e = su(), t = (i, a) => {
    let n;
    return (n = e[i]) || (n = e[i] = []), n.push(a), (r) => {
      n.length > 1 ? n.forEach((s) => s(r)) : n[0](r);
    };
  };
  co = t(
    "__VUE_INSTANCE_SETTERS__",
    (i) => Qt = i
  ), ql = t(
    "__VUE_SSR_SETTERS__",
    (i) => Gl = i
  );
}
const ss = (e) => {
  const t = Qt;
  return co(e), e.scope.on(), () => {
    e.scope.off(), co(t);
  };
}, lh = () => {
  Qt && Qt.scope.off(), co(null);
};
function Yv(e) {
  return e.vnode.shapeFlag & 4;
}
let Gl = !1;
function v1(e, t = !1, i = !1) {
  t && ql(t);
  const { props: a, children: n } = e.vnode, r = Yv(e);
  e1(e, a, r, t), n1(e, n, i || t);
  const s = r ? b1(e, t) : void 0;
  return t && ql(!1), s;
}
function b1(e, t) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fy);
  const { setup: a } = i;
  if (a) {
    ja();
    const n = e.setupContext = a.length > 1 ? Xv(e) : null, r = ss(e), s = ns(
      a,
      e,
      0,
      [
        e.props,
        n
      ]
    ), c = zp(s);
    if (Ba(), r(), (c || e.sp) && !xr(e) && kv(e), c) {
      if (s.then(lh, lh), t)
        return s.then((d) => {
          ql(!0);
          try {
            sh(e, d, t);
          } finally {
            ql(!1);
          }
        }).catch((d) => {
          cu(d, e, 0);
        });
      e.asyncDep = s;
    } else
      sh(e, s);
  } else
    Zv(e);
}
function sh(e, t, i) {
  je(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ot(t) && (e.setupState = uv(t)), Zv(e);
}
function Zv(e, t, i) {
  const a = e.type;
  e.render || (e.render = a.render || Pi);
  {
    const n = ss(e);
    ja();
    try {
      jy(e);
    } finally {
      Ba(), n();
    }
  }
}
const g1 = {
  get(e, t) {
    return Xt(e, "get", ""), e[t];
  }
};
function Xv(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  return {
    attrs: new Proxy(e.attrs, g1),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function gu(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(uv(ty(e.exposed)), {
    get(t, i) {
      if (i in t)
        return t[i];
      if (i in Tl)
        return Tl[i](e);
    },
    has(t, i) {
      return i in t || i in Tl;
    }
  })) : e.proxy;
}
function m1(e, t = !0) {
  return je(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function y1(e) {
  return je(e) && "__vccOpts" in e;
}
const j = (e, t) => /* @__PURE__ */ sy(e, t, Gl);
function di(e, t, i) {
  try {
    oo(-1);
    const a = arguments.length;
    return a === 2 ? ot(t) && !Pe(t) ? Hl(t) ? fe(e, null, [t]) : fe(e, t) : fe(e, null, t) : (a > 3 ? i = Array.prototype.slice.call(arguments, 2) : a === 3 && Hl(i) && (i = [i]), fe(e, t, i));
  } finally {
    oo(1);
  }
}
const _1 = "3.5.42", w1 = Pi;
let qc;
const oh = typeof window < "u" && window.trustedTypes;
if (oh)
  try {
    qc = /* @__PURE__ */ oh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Jv = qc ? (e) => qc.createHTML(e) : (e) => e, k1 = "http://www.w3.org/2000/svg", S1 = "http://www.w3.org/1998/Math/MathML", Oa = typeof document < "u" ? document : null, uh = Oa && /* @__PURE__ */ Oa.createElement("template"), C1 = {
  insert: (e, t, i) => {
    t.insertBefore(e, i || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, i, a) => {
    const n = t === "svg" ? Oa.createElementNS(k1, e) : t === "mathml" ? Oa.createElementNS(S1, e) : i ? Oa.createElement(e, { is: i }) : Oa.createElement(e);
    return e === "select" && a && a.multiple != null && n.setAttribute("multiple", a.multiple), n;
  },
  createText: (e) => Oa.createTextNode(e),
  createComment: (e) => Oa.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Oa.querySelector(e),
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
      uh.innerHTML = Jv(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const c = uh.content;
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
}, on = "transition", ll = "animation", Kl = /* @__PURE__ */ Symbol("_vtc"), Qv = {
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
}, T1 = /* @__PURE__ */ Nt(
  {},
  gv,
  Qv
), A1 = (e) => (e.displayName = "Transition", e.props = T1, e), E1 = /* @__PURE__ */ A1(
  (e, { slots: t }) => di(Ty, $1(e), t)
), Gn = (e, t = []) => {
  Pe(e) ? e.forEach((i) => i(...t)) : e && e(...t);
}, ch = (e) => e ? Pe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function $1(e) {
  const t = {};
  for (const H in e)
    H in Qv || (t[H] = e[H]);
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
    appearActiveClass: _ = s,
    appearToClass: v = c,
    leaveFromClass: y = `${i}-leave-from`,
    leaveActiveClass: m = `${i}-leave-active`,
    leaveToClass: k = `${i}-leave-to`
  } = e, C = x1(n), S = C && C[0], $ = C && C[1], {
    onBeforeEnter: R,
    onEnter: N,
    onEnterCancelled: P,
    onLeave: I,
    onLeaveCancelled: he,
    onBeforeAppear: Q = R,
    onAppear: x = N,
    onAppearCancelled: B = P
  } = t, W = (H, Y, L, G) => {
    H._enterCancelled = G, Kn(H, Y ? v : c), Kn(H, Y ? _ : s), L && L();
  }, Z = (H, Y) => {
    H._isLeaving = !1, Kn(H, y), Kn(H, k), Kn(H, m), Y && Y();
  }, le = (H) => (Y, L) => {
    const G = H ? x : N, X = () => W(Y, H, L);
    Gn(G, [Y, X]), dh(() => {
      Kn(Y, H ? d : r), Ca(Y, H ? v : c), ch(G) || fh(Y, a, S, X);
    });
  };
  return Nt(t, {
    onBeforeEnter(H) {
      Gn(R, [H]), Ca(H, r), Ca(H, s);
    },
    onBeforeAppear(H) {
      Gn(Q, [H]), Ca(H, d), Ca(H, _);
    },
    onEnter: le(!1),
    onAppear: le(!0),
    onLeave(H, Y) {
      H._isLeaving = !0;
      const L = () => Z(H, Y);
      Ca(H, y), H._enterCancelled ? (Ca(H, m), vh(H)) : (vh(H), Ca(H, m)), dh(() => {
        H._isLeaving && (Kn(H, y), Ca(H, k), ch(I) || fh(H, a, $, L));
      }), Gn(I, [H, L]);
    },
    onEnterCancelled(H) {
      W(H, !1, void 0, !0), Gn(P, [H]);
    },
    onAppearCancelled(H) {
      W(H, !0, void 0, !0), Gn(B, [H]);
    },
    onLeaveCancelled(H) {
      Z(H), Gn(he, [H]);
    }
  });
}
function x1(e) {
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
  return Am(e);
}
function Ca(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[Kl] || (e[Kl] = /* @__PURE__ */ new Set())).add(t);
}
function Kn(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const i = e[Kl];
  i && (i.delete(t), i.size || (e[Kl] = void 0));
}
function dh(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let O1 = 0;
function fh(e, t, i, a) {
  const n = e._endId = ++O1, r = () => {
    n === e._endId && a();
  };
  if (i != null)
    return setTimeout(r, i);
  const { type: s, timeout: c, propCount: d } = N1(e, t);
  if (!s)
    return a();
  const _ = s + "end";
  let v = 0;
  const y = () => {
    e.removeEventListener(_, m), r();
  }, m = (k) => {
    k.target === e && ++v >= d && y();
  };
  setTimeout(() => {
    v < d && y();
  }, c + 1), e.addEventListener(_, m);
}
function N1(e, t) {
  const i = window.getComputedStyle(e), a = (C) => (i[C] || "").split(", "), n = a(`${on}Delay`), r = a(`${on}Duration`), s = hh(n, r), c = a(`${ll}Delay`), d = a(`${ll}Duration`), _ = hh(c, d);
  let v = null, y = 0, m = 0;
  t === on ? s > 0 && (v = on, y = s, m = r.length) : t === ll ? _ > 0 && (v = ll, y = _, m = d.length) : (y = Math.max(s, _), v = y > 0 ? s > _ ? on : ll : null, m = v ? v === on ? r.length : d.length : 0);
  const k = v === on && /\b(?:transform|all)(?:,|$)/.test(
    a(`${on}Property`).toString()
  );
  return {
    type: v,
    timeout: y,
    propCount: m,
    hasTransform: k
  };
}
function hh(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((i, a) => ph(i) + ph(e[a])));
}
function ph(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function vh(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function R1(e, t, i) {
  const a = e[Kl];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
}
const fo = /* @__PURE__ */ Symbol("_vod"), eb = /* @__PURE__ */ Symbol("_vsh"), rr = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: i }) {
    e[fo] = e.style.display === "none" ? "" : e.style.display, i && t ? i.beforeEnter(e) : sl(e, t);
  },
  mounted(e, { value: t }, { transition: i }) {
    i && t && i.enter(e);
  },
  updated(e, { value: t, oldValue: i }, { transition: a }) {
    !t != !i && (a ? t ? (a.beforeEnter(e), sl(e, !0), a.enter(e)) : a.leave(e, () => {
      sl(e, !1);
    }) : sl(e, t));
  },
  beforeUnmount(e, { value: t }) {
    sl(e, t);
  }
};
function sl(e, t) {
  e.style.display = t ? e[fo] : "none", e[eb] = !t;
}
const tb = /* @__PURE__ */ Symbol("");
function I1(e) {
  const t = Tn();
  if (!t)
    return;
  const i = t.ut = (n = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => ho(r, n));
  }, a = () => {
    const n = e(t.proxy);
    t.ce ? ho(t.ce, n) : Gc(t.subTree, n), i(n);
  };
  Tv(() => {
    fv(a);
  }), Ct(() => {
    Ke(a, Pi, { flush: "post" });
    const n = new MutationObserver(a);
    n.observe(t.subTree.el.parentNode, { childList: !0 }), rs(() => n.disconnect());
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
    ho(e.el, t);
  else if (e.type === K)
    e.children.forEach((i) => Gc(i, t));
  else if (e.type === Zs) {
    let { el: i, anchor: a } = e;
    for (; i && (ho(i, t), i !== a); )
      i = i.nextSibling;
  }
}
function ho(e, t) {
  if (e.nodeType === 1) {
    const i = e.style;
    let a = "";
    for (const n in t) {
      const r = Lm(t[n]);
      i.setProperty(`--${n}`, r), a += `--${n}: ${r};`;
    }
    i[tb] = a;
  }
}
const L1 = /(?:^|;)\s*display\s*:/;
function P1(e, t, i) {
  const a = e.style, n = bt(i);
  let r = !1;
  if (i && !n) {
    if (t)
      if (bt(t))
        for (const s of t.split(";")) {
          const c = s.slice(0, s.indexOf(":")).trim();
          i[c] == null && gl(a, c, "");
        }
      else
        for (const s in t)
          i[s] == null && gl(a, s, "");
    for (const s in i) {
      s === "display" && (r = !0);
      const c = i[s];
      c != null ? F1(
        e,
        s,
        !bt(t) && t ? t[s] : void 0,
        c
      ) || gl(a, s, c) : gl(a, s, "");
    }
  } else if (n) {
    if (t !== i) {
      const s = a[tb];
      s && (i += ";" + s), a.cssText = i, r = L1.test(i);
    }
  } else t && e.removeAttribute("style");
  fo in e && (e[fo] = r ? a.display : "", e[eb] && (a.display = "none"));
}
const Us = /\s*!important$/;
function gl(e, t, i) {
  if (Pe(i))
    i.forEach((a) => gl(e, t, a));
  else if (i == null && (i = ""), t.startsWith("--"))
    Us.test(i) ? e.setProperty(t, i.replace(Us, ""), "important") : e.setProperty(t, i);
  else {
    const a = D1(e, t);
    Us.test(i) ? e.setProperty(
      qa(a),
      i.replace(Us, ""),
      "important"
    ) : e[a] = i;
  }
}
const bh = ["Webkit", "Moz", "ms"], tc = {};
function D1(e, t) {
  const i = tc[t];
  if (i)
    return i;
  let a = ei(t);
  if (a !== "filter" && a in e)
    return tc[t] = a;
  a = ru(a);
  for (let n = 0; n < bh.length; n++) {
    const r = bh[n] + a;
    if (r in e)
      return tc[t] = r;
  }
  return t;
}
function F1(e, t, i, a) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && bt(a) && i === a;
}
const gh = "http://www.w3.org/1999/xlink";
function mh(e, t, i, a, n, r = Rm(t)) {
  a && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(gh, t.slice(6, t.length)) : e.setAttributeNS(gh, t, i) : i == null || r && !Vp(i) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Gi(i) ? String(i) : i
  );
}
function yh(e, t, i, a, n) {
  if (t === "innerHTML" || t === "textContent") {
    i != null && (e[t] = t === "innerHTML" ? Jv(i) : i);
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
    c === "boolean" ? i = Vp(i) : i == null && c === "string" ? (i = "", s = !0) : c === "number" && (i = 0, s = !0);
  }
  try {
    e[t] = i;
  } catch {
  }
  s && e.removeAttribute(n || t);
}
function gn(e, t, i, a) {
  e.addEventListener(t, i, a);
}
function M1(e, t, i, a) {
  e.removeEventListener(t, i, a);
}
const _h = /* @__PURE__ */ Symbol("_vei");
function U1(e, t, i, a, n = null) {
  const r = e[_h] || (e[_h] = {}), s = r[t];
  if (a && s)
    s.value = a;
  else {
    const [c, d] = B1(t);
    if (a) {
      const _ = r[t] = q1(
        a,
        n
      );
      gn(e, c, _, d);
    } else s && (M1(e, c, s, d), r[t] = void 0);
  }
}
const z1 = /(Once|Passive|Capture)$/, j1 = /^on:?(?:Once|Passive|Capture)$/;
function B1(e) {
  let t, i;
  for (; (i = e.match(z1)) && !j1.test(e); )
    t || (t = {}), e = e.slice(0, e.length - i[1].length), t[i[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : qa(e.slice(2)), t];
}
let ic = 0;
const H1 = /* @__PURE__ */ Promise.resolve(), V1 = () => ic || (H1.then(() => ic = 0), ic = Date.now());
function q1(e, t) {
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
        const _ = s[d];
        _ && Fi(
          _,
          t,
          5,
          c
        );
      }
    } else
      Fi(
        n,
        t,
        5,
        [a]
      );
  };
  return i.value = e, i.attached = V1(), i;
}
const wh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, G1 = (e, t, i, a, n, r) => {
  const s = n === "svg";
  t === "class" ? R1(e, a, s) : t === "style" ? P1(e, i, a) : iu(t) ? au(t) || U1(e, t, i, a, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : K1(e, t, a, s)) ? (yh(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && mh(e, t, a, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (W1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !bt(a))) ? yh(e, ei(t), a, r, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), mh(e, t, a, s));
};
function K1(e, t, i, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && wh(t) && je(i));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const n = e.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return wh(t) && bt(i) ? !1 : t in e;
}
function W1(e, t) {
  const i = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!i)
    return !1;
  const a = ei(t);
  return Array.isArray(i) ? i.some((n) => ei(n) === a) : Object.keys(i).some((n) => ei(n) === a);
}
const Pr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Pe(t) ? (i) => Ys(t, i) : t;
};
function Y1(e) {
  e.target.composing = !0;
}
function kh(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const oa = /* @__PURE__ */ Symbol("_assign"), zs = /* @__PURE__ */ Symbol("_initialValue");
function ac(e, t, i) {
  return t && (e = e.trim()), i && (e = lu(e)), e;
}
const ze = {
  created(e, { modifiers: { lazy: t, trim: i, number: a } }, n) {
    e.parentNode && (e.type === "text" ? e[zs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[zs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[oa] = Pr(n);
    const r = a || n.props && n.props.type === "number";
    gn(e, t ? "change" : "input", (s) => {
      s.target.composing || e[oa](ac(e.value, i, r));
    }), (i || r) && gn(e, "change", () => {
      e.value = ac(e.value, i, r);
    }), t || (gn(e, "compositionstart", Y1), gn(e, "compositionend", kh), gn(e, "change", kh));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: i, number: a } }) {
    const n = t ?? "", r = e[zs];
    delete e[zs], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[oa](ac(e.value, i, a)) : e.value = n;
  },
  beforeUpdate(e, { value: t, oldValue: i, modifiers: { lazy: a, trim: n, number: r } }, s) {
    if (e[oa] = Pr(s), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? lu(e.value) : e.value, d = t ?? "";
    if (c === d)
      return;
    const _ = e.getRootNode();
    (_ instanceof Document || _ instanceof ShadowRoot) && _.activeElement === e && e.type !== "range" && (a && t === i || n && e.value.trim() === d) || (e.value = d);
  }
}, ua = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, i) {
    e[oa] = Pr(i), gn(e, "change", () => {
      const a = e._modelValue, n = Wl(e), r = e.checked, s = e[oa];
      if (Pe(a)) {
        const c = yd(a, n), d = c !== -1;
        if (r && !d)
          s(a.concat(n));
        else if (!r && d) {
          const _ = [...a];
          _.splice(c, 1), s(_);
        }
      } else if (Ua(a)) {
        const c = new Set(a);
        r ? c.add(n) : c.delete(n), s(c);
      } else
        s(ib(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Sh,
  beforeUpdate(e, t, i) {
    e[oa] = Pr(i), Sh(e, t, i);
  }
};
function Sh(e, { value: t, oldValue: i }, a) {
  e._modelValue = t;
  let n;
  if (Pe(t))
    n = yd(t, a.props.value) > -1;
  else if (Ua(t))
    n = t.has(a.props.value);
  else {
    if (t === i) return;
    n = za(t, ib(e, !0));
  }
  e.checked !== n && (e.checked = n);
}
const nt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: i } }, a) {
    e._modelValue = t, gn(e, "change", () => {
      const n = Array.prototype.filter.call(e.options, (d) => d.selected).map(
        (d) => i ? lu(Wl(d)) : Wl(d)
      ), r = e.multiple, s = r ? Ua(e._modelValue) ? new Set(n) : n : n[0], c = e._pendingValue = [
        r,
        r ? Pe(s) ? n.slice() : n : s
      ];
      try {
        e[oa](s);
      } finally {
        Pt(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[oa] = Pr(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ch(e, t);
  },
  beforeUpdate(e, { value: t }, i) {
    e._modelValue = t, e[oa] = Pr(i);
  },
  updated(e, { value: t }) {
    const i = e._pendingValue;
    e._pendingValue = void 0, (!i || i[0] !== e.multiple || !Z1(t, i[1], i[0])) && Ch(e, t);
  }
};
function Z1(e, t, i) {
  if (!i || Pe(e)) return za(e, t);
  if (Ua(e)) {
    if (e.size !== t.length) return !1;
    for (const a of t)
      if (!e.has(a)) return !1;
    return !0;
  }
  return !1;
}
function Ch(e, t) {
  const i = e.multiple, a = Pe(t);
  if (!(i && !a && !Ua(t))) {
    for (let n = 0, r = e.options.length; n < r; n++) {
      const s = e.options[n], c = Wl(s);
      if (i)
        if (a) {
          const d = typeof c;
          d === "string" || d === "number" ? s.selected = t.some((_) => String(_) === String(c)) : s.selected = yd(t, c) > -1;
        } else
          s.selected = t.has(c);
      else if (za(Wl(s), t)) {
        e.selectedIndex !== n && (e.selectedIndex = n);
        return;
      }
    }
    !i && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Wl(e) {
  return "_value" in e ? e._value : e.value;
}
function ib(e, t) {
  const i = t ? "_trueValue" : "_falseValue";
  return i in e ? e[i] : t;
}
const X1 = ["ctrl", "shift", "alt", "meta"], J1 = {
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
  exact: (e, t) => X1.some((i) => e[`${i}Key`] && !t.includes(i))
}, Ce = (e, t) => {
  if (!e) return e;
  const i = e._withMods || (e._withMods = {}), a = t.join(".");
  return i[a] || (i[a] = ((n, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const c = J1[t[s]];
      if (c && c(n, t)) return;
    }
    return e(n, ...r);
  }));
}, Q1 = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ft = (e, t) => {
  const i = e._withKeys || (e._withKeys = {}), a = t.join(".");
  return i[a] || (i[a] = ((n) => {
    if (!("key" in n))
      return;
    const r = qa(n.key);
    if (t.some(
      (s) => s === r || Q1[s] === r
    ))
      return e(n);
  }));
}, e_ = /* @__PURE__ */ Nt({ patchProp: G1 }, C1);
let Th;
function t_() {
  return Th || (Th = l1(e_));
}
const i_ = ((...e) => {
  const t = t_().createApp(...e), { mount: i } = t;
  return t.mount = (a) => {
    const n = n_(a);
    if (!n) return;
    const r = t._component;
    !je(r) && !r.render && !r.template && (r.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const s = i(n, !1, a_(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), s;
  }, t;
});
function a_(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function n_(e) {
  return bt(e) ? document.querySelector(e) : e;
}
function po(e, t, i) {
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
const Ah = (e, t, i) => {
  const a = Object.assign({
    escape: !0
  }, i || {}), n = function(r, s) {
    return s = s || {}, r.replace(
      /{([^{}]*)}/g,
      function(c, d) {
        const _ = s[d];
        return a.escape ? encodeURIComponent(typeof _ == "string" || typeof _ == "number" ? _.toString() : c) : typeof _ == "string" || typeof _ == "number" ? _.toString() : c;
      }
    );
  };
  return e.charAt(0) !== "/" && (e = "/" + e), n(e, t || {});
}, At = (e, t, i) => {
  const a = Object.assign({
    noRewrite: !1
  }, i || {}), n = i?.baseURL ?? r_();
  return window?.OC?.config?.modRewriteWorking === !0 && !a.noRewrite ? n + Ah(e, t, i) : n + "/index.php" + Ah(e, t, i);
};
function r_() {
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
function Eh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, a = Array(t); i < t; i++) a[i] = e[i];
  return a;
}
function l_(e) {
  if (Array.isArray(e)) return e;
}
function s_(e, t) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var a, n, r, s, c = [], d = !0, _ = !1;
    try {
      if (r = (i = i.call(e)).next, t !== 0) for (; !(d = (a = r.call(i)).done) && (c.push(a.value), c.length !== t); d = !0) ;
    } catch (v) {
      _ = !0, n = v;
    } finally {
      try {
        if (!d && i.return != null && (s = i.return(), Object(s) !== s)) return;
      } finally {
        if (_) throw n;
      }
    }
    return c;
  }
}
function o_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function u_(e, t) {
  return l_(e) || s_(e, t) || c_(e, t) || o_();
}
function c_(e, t) {
  if (e) {
    if (typeof e == "string") return Eh(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Eh(e, t) : void 0;
  }
}
const ab = Object.entries, $h = Object.setPrototypeOf, d_ = Object.isFrozen, nb = Object.getPrototypeOf, rb = Object.getOwnPropertyDescriptor;
let Dt = Object.freeze, Vt = Object.seal, Tr = Object.create, lb = typeof Reflect < "u" && Reflect, Kc = lb.apply, Wc = lb.construct;
Dt || (Dt = function(t) {
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
const Ta = wt(Array.prototype.forEach), f_ = wt(Array.prototype.lastIndexOf), xh = wt(Array.prototype.pop), ol = wt(Array.prototype.push), h_ = wt(Array.prototype.slice), p_ = wt(Array.prototype.splice), Nr = Array.isArray, nc = sb(Set), rc = wt(Set.prototype.add), ul = wt(Set.prototype.has), Xn = wt(String.prototype.toLowerCase), lc = wt(String.prototype.toString), Oh = wt(String.prototype.match), cl = wt(String.prototype.replace), Nh = wt(String.prototype.indexOf), v_ = wt(String.prototype.trim), b_ = wt(Number.prototype.toString), g_ = wt(Boolean.prototype.toString), Rh = typeof BigInt > "u" ? null : wt(BigInt.prototype.toString), Ih = typeof Symbol > "u" ? null : wt(Symbol.prototype.toString), fi = wt(Object.prototype.hasOwnProperty), dl = wt(Object.prototype.toString), Ut = wt(RegExp.prototype.test), Aa = sb(TypeError);
function wt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) a[n - 1] = arguments[n];
    return Kc(e, t, a);
  };
}
function sb(e) {
  return function() {
    for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] = arguments[a];
    return Wc(e, i);
  };
}
function tt(e, t) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Xn;
  if ($h && $h(e, null), !Nr(t)) return e;
  let a = t.length;
  for (; a--; ) {
    let n = t[a];
    if (typeof n == "string") {
      const r = i(n);
      r !== n && (d_(t) || (t[a] = r), n = r);
    }
    e[n] = !0;
  }
  return e;
}
function m_(e) {
  for (let t = 0; t < e.length; t++) fi(e, t) || (e[t] = null);
  return e;
}
function wi(e) {
  const t = Tr(null);
  for (const a of ab(e)) {
    var i = u_(a, 2);
    const n = i[0], r = i[1];
    fi(e, n) && (Nr(r) ? t[n] = m_(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = wi(r) : t[n] = r);
  }
  return t;
}
function y_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return b_(e);
    case "boolean":
      return g_(e);
    case "bigint":
      return Rh ? Rh(e) : "0";
    case "symbol":
      return Ih ? Ih(e) : "Symbol()";
    case "undefined":
      return dl(e);
    case "function":
    case "object": {
      if (e === null) return dl(e);
      const t = e, i = Oi(t, "toString");
      if (typeof i == "function") {
        const a = i(t);
        return typeof a == "string" ? a : dl(a);
      }
      return dl(e);
    }
    default:
      return dl(e);
  }
}
function Oi(e, t) {
  for (; e !== null; ) {
    const a = rb(e, t);
    if (a) {
      if (a.get) return wt(a.get);
      if (typeof a.value == "function") return wt(a.value);
    }
    e = nb(e);
  }
  function i() {
    return null;
  }
  return i;
}
function __(e, t) {
  for (; e !== null; ) {
    const i = rb(e, t);
    if (i) return i.get ? wt(i.get) : null;
    e = nb(e);
  }
  return null;
}
function w_(e) {
  try {
    return Ut(e, ""), !0;
  } catch {
    return !1;
  }
}
const Lh = Dt([
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
]), sc = Dt([
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
]), oc = Dt([
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
]), k_ = Dt([
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
]), uc = Dt([
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
]), S_ = Dt([
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
]), Ph = Dt(["#text"]), Dh = Dt([
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
]), cc = Dt([
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
]), Fh = Dt([
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
]), js = Dt([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), C_ = Vt(/{{[\w\W]*|^[\w\W]*}}/g), T_ = Vt(/<%[\w\W]*|^[\w\W]*%>/g), A_ = Vt(/\${[\w\W]*/g), E_ = Vt(/^data-[\-\w.\u00B7-\uFFFF]+$/), $_ = Vt(/^aria-[\-\w]+$/), Mh = Vt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), x_ = Vt(/^(?:\w+script|data):/i), O_ = Vt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), N_ = Vt(/^html$/i), R_ = Vt(/^[a-z][.\w]*(-[.\w]+)+$/i), dc = Vt(/<[/\w!]/g), Uh = Vt(/<[/\w]/g), I_ = Vt(/<\/no(script|embed|frames)/i), zh = Vt(/\/>/i), $t = {
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
}, L_ = Dt(tt({}, [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
])), P_ = function() {
  return typeof window > "u" ? null : window;
}, D_ = function(t, i) {
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
}, jh = function() {
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
}, un = function(t, i, a, n) {
  return fi(t, i) && Nr(t[i]) ? tt(n.base ? wi(n.base) : {}, t[i], n.transform) : a;
}, fc = function(t, i, a) {
  const n = fi(t, i) ? t[i] : void 0;
  return n && typeof n == "object" ? wi(n) : a();
};
function ob() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : P_();
  const t = (ge) => ob(ge);
  if (t.version = "3.4.17", t.removed = [], !e || !e.document || e.document.nodeType !== $t.document || !e.Element)
    return t.isSupported = !1, t;
  let i = e.document;
  const a = i, n = a.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, c = e.Element, d = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const _ = e.DOMParser, v = e.trustedTypes, y = c.prototype, m = Oi(y, "cloneNode"), k = Oi(y, "remove"), C = Oi(y, "removeAttributeNode"), S = Oi(y, "nextSibling"), $ = Oi(y, "childNodes"), R = Oi(y, "parentNode"), N = Oi(y, "shadowRoot"), P = Oi(y, "attributes"), I = s && s.prototype ? Oi(s.prototype, "nodeType") : null, he = s && s.prototype ? Oi(s.prototype, "nodeName") : null, Q = s && s.prototype ? Oi(s.prototype, "ownerDocument") : null, x = function(E) {
    return I ? I(E) : E.nodeType;
  }, B = function(E) {
    return he ? he(E) : E.nodeName;
  }, W = __(y, "namespaceURI"), Z = function(E) {
    return W ? W(E) : E.namespaceURI;
  };
  if (typeof r == "function") {
    const ge = i.createElement("template");
    ge.content && ge.content.ownerDocument && (i = ge.content.ownerDocument);
  }
  let le, H = "", Y, L = !1, G = 0;
  const X = function() {
    if (G > 0) throw Aa('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ae = function(E) {
    X(), G++;
    try {
      return le.createHTML(E);
    } finally {
      G--;
    }
  }, J = function(E) {
    X(), G++;
    try {
      return le.createScriptURL(E);
    } finally {
      G--;
    }
  }, ve = function() {
    return L || (Y = D_(v, n), L = !0), Y;
  }, Ae = i, Le = Ae.implementation, Oe = Ae.createNodeIterator, Me = Ae.createDocumentFragment, Xe = Ae.getElementsByTagName, ct = a.importNode;
  let we = jh();
  t.isSupported = typeof ab == "function" && typeof R == "function" && Le && Le.createHTMLDocument !== void 0;
  const be = C_, V = T_, ne = A_, Ue = E_, ie = $_, T = x_, O = O_, D = R_;
  let q = Mh, z = null;
  const te = tt({}, [
    ...Lh,
    ...sc,
    ...oc,
    ...uc,
    ...Ph
  ]);
  let re = null;
  const ue = tt({}, [
    ...Dh,
    ...cc,
    ...Fh,
    ...js
  ]);
  let me = Object.seal(Tr(null, {
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
  const ke = Object.seal(Tr(null, {
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
  let $e = !0, Re = !0, qe = !1, Ze = !0, Ge = !1, at = !0, dt = !1, yt = !1, gt = null, ai = null, pi = !1, kt = !1, Rt = !1, Mi = !1, Gt = !0, vi = !1;
  const $n = "user-content-";
  let Wi = !0, xn = !1, Ti = null, Yi = {}, Zi = null;
  const Dr = tt({}, [
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
  let ha = null;
  const Ka = tt({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let Wa = null;
  const Ya = tt({}, [
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
  ]), rt = "http://www.w3.org/1998/Math/MathML", ur = "http://www.w3.org/2000/svg", bi = "http://www.w3.org/1999/xhtml";
  let pa = bi, Za = !1, cr = null;
  const On = tt({}, [
    rt,
    ur,
    bi
  ], lc), Xa = Dt([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let va = tt({}, Xa);
  const Ja = Dt(["annotation-xml"]);
  let ba = tt({}, Ja);
  const Nn = tt({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let Ui = null;
  const Qa = ["application/xhtml+xml", "text/html"], Tu = "text/html";
  let _t = null, Kt = null;
  const cs = i.createElement("form"), ds = function(E) {
    return E instanceof RegExp || E instanceof Function;
  }, Fr = function() {
    let E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Kt && Kt === E) return;
    (!E || typeof E != "object") && (E = {}), E = wi(E), Ui = Qa.indexOf(E.PARSER_MEDIA_TYPE) === -1 ? Tu : E.PARSER_MEDIA_TYPE, _t = Ui === "application/xhtml+xml" ? lc : Xn, z = un(E, "ALLOWED_TAGS", te, { transform: _t }), re = un(E, "ALLOWED_ATTR", ue, { transform: _t }), cr = un(E, "ALLOWED_NAMESPACES", On, { transform: lc }), Wa = un(E, "ADD_URI_SAFE_ATTR", Ya, {
      transform: _t,
      base: Ya
    }), ha = un(E, "ADD_DATA_URI_TAGS", Ka, {
      transform: _t,
      base: Ka
    }), Zi = un(E, "FORBID_CONTENTS", Dr, { transform: _t }), ce = un(E, "FORBID_TAGS", wi({}), { transform: _t }), Ne = un(E, "FORBID_ATTR", wi({}), { transform: _t }), Yi = fi(E, "USE_PROFILES") ? E.USE_PROFILES && typeof E.USE_PROFILES == "object" ? wi(E.USE_PROFILES) : E.USE_PROFILES : !1, $e = E.ALLOW_ARIA_ATTR !== !1, Re = E.ALLOW_DATA_ATTR !== !1, qe = E.ALLOW_UNKNOWN_PROTOCOLS || !1, Ze = E.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ge = E.SAFE_FOR_TEMPLATES || !1, at = E.SAFE_FOR_XML !== !1, dt = E.WHOLE_DOCUMENT || !1, kt = E.RETURN_DOM || !1, Rt = E.RETURN_DOM_FRAGMENT || !1, Mi = E.RETURN_TRUSTED_TYPE || !1, pi = E.FORCE_BODY || !1, Gt = E.SANITIZE_DOM !== !1, vi = E.SANITIZE_NAMED_PROPS || !1, Wi = E.KEEP_CONTENT !== !1, xn = E.IN_PLACE || !1, q = w_(E.ALLOWED_URI_REGEXP) ? E.ALLOWED_URI_REGEXP : Mh, pa = typeof E.NAMESPACE == "string" ? E.NAMESPACE : bi, va = fc(E, "MATHML_TEXT_INTEGRATION_POINTS", () => tt({}, Xa)), ba = fc(E, "HTML_INTEGRATION_POINTS", () => tt({}, Ja));
    const M = fc(E, "CUSTOM_ELEMENT_HANDLING", () => Tr(null));
    if (me = Tr(null), fi(M, "tagNameCheck") && ds(M.tagNameCheck) && (me.tagNameCheck = M.tagNameCheck), fi(M, "attributeNameCheck") && ds(M.attributeNameCheck) && (me.attributeNameCheck = M.attributeNameCheck), fi(M, "allowCustomizedBuiltInElements") && typeof M.allowCustomizedBuiltInElements == "boolean" && (me.allowCustomizedBuiltInElements = M.allowCustomizedBuiltInElements), Vt(me), Ge && (Re = !1), Rt && (kt = !0), Yi && (z = tt({}, Ph), re = Tr(null), Yi.html === !0 && (tt(z, Lh), tt(re, Dh)), Yi.svg === !0 && (tt(z, sc), tt(re, cc), tt(re, js)), Yi.svgFilters === !0 && (tt(z, oc), tt(re, cc), tt(re, js)), Yi.mathMl === !0 && (tt(z, uc), tt(re, Fh), tt(re, js))), ke.tagCheck = null, ke.attributeCheck = null, fi(E, "ADD_TAGS") && (typeof E.ADD_TAGS == "function" ? ke.tagCheck = E.ADD_TAGS : Nr(E.ADD_TAGS) && (z === te && (z = wi(z)), tt(z, E.ADD_TAGS, _t))), fi(E, "ADD_ATTR") && (typeof E.ADD_ATTR == "function" ? ke.attributeCheck = E.ADD_ATTR : Nr(E.ADD_ATTR) && (re === ue && (re = wi(re)), tt(re, E.ADD_ATTR, _t))), fi(E, "ADD_FORBID_CONTENTS") && Nr(E.ADD_FORBID_CONTENTS) && (Zi === Dr && (Zi = wi(Zi)), tt(Zi, E.ADD_FORBID_CONTENTS, _t)), Wi && (z["#text"] = !0), dt && tt(z, [
      "html",
      "head",
      "body"
    ]), z.table && (tt(z, ["tbody"]), delete ce.tbody), E.TRUSTED_TYPES_POLICY) {
      if (typeof E.TRUSTED_TYPES_POLICY.createHTML != "function") throw Aa('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof E.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Aa('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const oe = le;
      le = E.TRUSTED_TYPES_POLICY;
      try {
        H = ae("");
      } catch (se) {
        throw le = oe, se;
      }
    } else E.TRUSTED_TYPES_POLICY === null ? (le = void 0, H = "") : (le === void 0 && (le = ve()), le && typeof H == "string" && (H = ae("")));
    Dt && Dt(E), Kt = E;
  }, fs = tt({}, [
    ...sc,
    ...oc,
    ...k_
  ]), ht = tt({}, [...uc, ...S_]), Mr = function(E, M, oe) {
    return M.namespaceURI === bi ? E === "svg" : M.namespaceURI === rt ? E === "svg" && (oe === "annotation-xml" || va[oe]) : !!fs[E];
  }, Au = function(E, M, oe) {
    return M.namespaceURI === bi ? E === "math" : M.namespaceURI === ur ? E === "math" && ba[oe] : !!ht[E];
  }, Eu = function(E, M, oe) {
    return M.namespaceURI === ur && !ba[oe] || M.namespaceURI === rt && !va[oe] ? !1 : !ht[E] && (Nn[E] || !fs[E]);
  }, ga = function(E) {
    const M = Z(E), oe = Xn(B(E)), se = R(E);
    let Ie, Fe;
    return se && x(se) === $t.element ? (Ie = { namespaceURI: Z(se) }, Fe = Xn(B(se))) : (Ie = { namespaceURI: pa }, Fe = "template"), cr[M] ? M === ur ? Mr(oe, Ie, Fe) : M === rt ? Au(oe, Ie, Fe) : M === bi ? Eu(oe, Ie, Fe) : !!(Ui === "application/xhtml+xml" && cr[M]) : !1;
  }, Xi = function(E) {
    ol(t.removed, { element: E });
    try {
      R(E).removeChild(E);
    } catch {
      if (k(E), !R(E)) throw Aa("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ma = function(E, M, oe) {
    try {
      C(E, M);
    } catch {
      try {
        E.removeAttribute(oe);
      } catch {
      }
    }
  }, Rn = function(E) {
    zr(E);
    const M = $(E);
    M && Ta(h_(M), (se) => {
      try {
        k(se);
      } catch {
      }
    });
    const oe = x(E) === $t.element ? P(E) : null;
    if (oe) for (let se = oe.length - 1; se >= 0; --se) {
      const Ie = oe[se], Fe = Ie && Ie.name;
      typeof Fe == "string" && ma(E, Ie, Fe);
    }
  }, en = function(E, M, oe) {
    if (!oe) try {
      oe = M.getAttributeNode(E);
    } catch {
      oe = null;
    }
    ol(t.removed, {
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
      if (kt || Rt) try {
        Xi(M);
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
        const se = M[oe], Ie = se && se.name;
        typeof Ie != "string" || re[_t(Ie)] || ma(E, se, Ie);
      }
  }, Ur = function(E, M) {
    let oe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const se = [E];
    for (; se.length > 0; ) {
      const Ie = se.pop();
      if (M(Ie) === !1) continue;
      if (oe && x(Ie) === $t.element) {
        const We = N(Ie);
        Ai(We) && se.push(We);
      }
      const Fe = $(Ie);
      if (Fe) for (let We = Fe.length - 1; We >= 0; --We) se.push(Fe[We]);
    }
  }, zr = function(E) {
    Ur(E, (M) => {
      x(M) === $t.element && hs(M);
    });
  }, jr = function(E) {
    const M = [];
    return Ur(E, (oe) => {
      M.push(oe);
    }, !0), M;
  }, $u = function(E, M) {
    const oe = nc();
    Ta(jr(E), (se) => {
      x(se) === $t.element && rc(oe, se);
    }), Ta(M, (se) => {
      x(se) === $t.element && !ul(oe, se) && hs(se);
    });
  }, ps = function(E, M) {
    let oe = !1;
    return Ta(t.removed, (se) => {
      se.element && (oe = oe || se.element === E, zr(se.element));
    }), $u(E, M), oe;
  }, xu = 8, Ou = function(E, M) {
    const oe = Ti;
    let se = null;
    const Ie = () => (se || (se = nc(), Ta(M, (Fe) => {
      rc(se, Fe);
    })), se);
    for (let Fe = 0; ; Fe++) {
      const We = jr(E), Tt = [E];
      let Wt = !1;
      if (Ta(We, (pt) => {
        x(pt) === $t.documentFragment ? ol(Tt, pt) : !Wt && !ul(oe, pt) && (Wt = ul(Ie(), pt));
      }), !Wt) return;
      if (Fe >= xu) throw Aa("the tree kept changing during in-place sanitization; refusing to return it");
      Ta(Tt, (pt, It) => {
        Nu(pt, It > 0, E, Ie());
      });
    }
  }, Nu = function(E, M, oe, se) {
    const Ie = Br(E);
    let Fe;
    for (; Fe = Ie.nextNode(); )
      !ul(se, Fe) || ul(Ti, Fe) || (M && gi(we.uponSanitizeShadowNode, Fe, null), hr(Fe, oe), pr(Fe, oe), Ai(Fe.content) && nn(Fe.content));
  }, Ru = function(E) {
    Ti && rc(Ti, E);
  }, vs = function(E, M) {
    return at ? E === "patchsrc" ? !0 : E === "for" && M !== "label" && M !== "output" : !1;
  }, Iu = function(E) {
    at && Ur(E, (M) => {
      const oe = x(M);
      if (oe === $t.processingInstruction || oe === $t.comment && Ut(Uh, M.data)) {
        try {
          k(M);
        } catch {
        }
        return !1;
      }
      if (oe === $t.element) {
        const se = M, Ie = _t(B(M));
        try {
          se.hasAttribute && se.hasAttribute("patchsrc") && se.removeAttribute("patchsrc"), se.hasAttribute && se.hasAttribute("for") && vs("for", Ie) && se.removeAttribute("for");
        } catch {
        }
      }
      return !0;
    });
  }, bs = function(E) {
    let M = null, oe = null;
    if (pi) E = "<remove></remove>" + E;
    else {
      const Fe = Oh(E, /^[\r\n\t ]+/);
      oe = Fe && Fe[0];
    }
    Ui === "application/xhtml+xml" && pa === bi && (E = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + E + "</body></html>");
    const se = le ? ae(E) : E;
    if (pa === bi) try {
      M = new _().parseFromString(se, Ui);
    } catch {
    }
    if (!M || !M.documentElement) {
      M = Le.createDocument(pa, "template", null);
      try {
        M.documentElement.innerHTML = Za ? H : se;
      } catch {
      }
    }
    const Ie = M.body || M.documentElement;
    return E && oe && Ie.insertBefore(i.createTextNode(oe), Ie.childNodes[0] || null), pa === bi ? Xe.call(M, dt ? "html" : "body")[0] : dt ? M.documentElement : Ie;
  }, Br = function(E) {
    const M = Q ? Q(E) : E.ownerDocument;
    return Oe.call(M || E, E, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION, null);
  }, In = function(E) {
    return E = cl(E, be, " "), E = cl(E, V, " "), E = cl(E, ne, " "), E;
  }, Ln = function(E) {
    var M;
    dr(E);
    const oe = (M = E.querySelectorAll) === null || M === void 0 ? void 0 : M.call(E, "template");
    oe && Ta(oe, (se) => {
      Ai(se.content) && Ln(se.content);
    });
  }, dr = function(E) {
    E.normalize();
    const M = Q ? Q(E) : E.ownerDocument, oe = Oe.call(M || E, E, d.SHOW_TEXT | d.SHOW_COMMENT | d.SHOW_CDATA_SECTION | d.SHOW_PROCESSING_INSTRUCTION, null);
    let se = oe.nextNode();
    for (; se; )
      se.data = In(se.data), se = oe.nextNode();
  }, tn = function(E) {
    const M = he ? he(E) : null;
    return typeof M != "string" || _t(M) !== "form" ? !1 : typeof E.nodeName != "string" || typeof E.textContent != "string" || typeof E.removeChild != "function" || E.attributes !== P(E) || typeof E.removeAttribute != "function" || typeof E.removeAttributeNode != "function" || typeof E.getAttributeNode != "function" || typeof E.setAttribute != "function" || typeof E.namespaceURI != "string" || typeof E.insertBefore != "function" || typeof E.hasChildNodes != "function" || E.nodeType !== I(E) || E.childNodes !== $(E);
  }, Ai = function(E) {
    if (!I || typeof E != "object" || E === null) return !1;
    try {
      return I(E) === $t.documentFragment;
    } catch {
      return !1;
    }
  }, an = function(E) {
    if (!I || typeof E != "object" || E === null) return !1;
    try {
      return typeof I(E) == "number";
    } catch {
      return !1;
    }
  };
  function gi(ge, E, M) {
    ge.length !== 0 && Ta(ge, (oe) => {
      oe.call(t, E, M, Kt);
    });
  }
  const gs = function(E, M) {
    return !!(at && E.hasChildNodes() && !an(E.firstElementChild) && Ut(dc, E.textContent) && Ut(dc, E.innerHTML) || at && L_[M] && x(E) === $t.element && Z(E) === bi && (an(E.firstElementChild) || typeof E.textContent == "string" && Ut(dc, E.textContent)) || E.nodeType === $t.processingInstruction || at && E.nodeType === $t.comment && Ut(Uh, E.data));
  }, Pn = function(E, M) {
    if (E instanceof RegExp) return Ut(E, M);
    if (E instanceof Function) {
      for (var oe = arguments.length, se = new Array(oe > 2 ? oe - 2 : 0), Ie = 2; Ie < oe; Ie++) se[Ie - 2] = arguments[Ie];
      return !!E(M, ...se);
    }
    return !1;
  }, Lu = function(E, M, oe) {
    if (!ce[M] && Hr(M) && Pn(me.tagNameCheck, M)) return !1;
    if (Wi && !Zi[M] && !Zi[Xn(M)]) {
      const se = R(E), Ie = $(E);
      if (Ie && se) {
        const Fe = Ie.length;
        for (let We = Fe - 1; We >= 0; --We) {
          const Tt = E === oe ? m(Ie[We], !0) : Ie[We];
          se.insertBefore(Tt, S(E));
        }
      }
    }
    return Xi(E), !0;
  }, fr = function(E, M, oe, se) {
    return E.length === 0 ? M : M === oe || M === se ? wi(M) : M;
  }, Ji = function(E, M) {
    return E === M || R(E) !== null ? !1 : (xn && zr(E), !0);
  }, hr = function(E, M) {
    if (Ru(E), gi(we.beforeSanitizeElements, E, null), Ji(E, M)) return !0;
    if (tn(E))
      return Xi(E), !0;
    const oe = _t(B(E));
    if (z = fr(we.uponSanitizeElement, z, te, gt), gi(we.uponSanitizeElement, E, {
      tagName: oe,
      allowedTags: z
    }), Ji(E, M)) return !0;
    if (gs(E, oe))
      return Xi(E), !0;
    if (ce[oe] || !(ke.tagCheck instanceof Function && ke.tagCheck(oe)) && !z[oe]) {
      const se = Lu(E, oe, M);
      return se === !1 && (gi(we.afterSanitizeElements, E, null), Ji(E, M)) ? !0 : se;
    }
    if (x(E) === $t.element && !ga(E) || (oe === "noscript" || oe === "noembed" || oe === "noframes") && Ut(I_, E.innerHTML))
      return Xi(E), !0;
    if (Ge && E.nodeType === $t.text) {
      const se = In(E.textContent);
      E.textContent !== se && (ol(t.removed, { element: E.cloneNode() }), E.textContent = se);
    }
    return gi(we.afterSanitizeElements, E, null), Ji(E, M);
  }, Ei = function(E, M, oe) {
    if (Ne[M] || vs(M, E) || Gt && (M === "id" || M === "name") && (oe in i || oe in cs)) return !1;
    const se = re[M] || ke.attributeCheck instanceof Function && ke.attributeCheck(M, E);
    return Re && Ut(Ue, M) || $e && Ut(ie, M) ? !0 : se ? Wa[M] || Ut(q, cl(oe, O, "")) || (M === "src" || M === "xlink:href" || M === "href") && E !== "script" && Nh(oe, "data:") === 0 && ha[E] || qe && !Ut(T, cl(oe, O, "")) ? !0 : !oe : Hr(E) && Pn(me.tagNameCheck, E) && Pn(me.attributeNameCheck, M, E) || M === "is" && me.allowCustomizedBuiltInElements && Pn(me.tagNameCheck, oe);
  }, ms = tt({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Hr = function(E) {
    return !ms[Xn(E)] && Ut(D, E);
  }, ys = function(E, M, oe, se) {
    if (le && typeof v == "object" && typeof v.getAttributeType == "function" && !oe) switch (v.getAttributeType(E, M)) {
      case "TrustedHTML":
        return ae(se);
      case "TrustedScriptURL":
        return J(se);
    }
    return se;
  }, Pu = function(E, M, oe, se) {
    try {
      return oe ? E.setAttributeNS(oe, M, se) : E.setAttribute(M, se), tn(E) ? (Xi(E), !1) : !0;
    } catch {
      return en(M, E), !1;
    }
  }, _s = function(E, M) {
    return at && Ut(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, M) ? !0 : Xn(E) === "attributename" && Oh(M, "href") !== null;
  }, pr = function(E, M) {
    if (gi(we.beforeSanitizeAttributes, E, null), Ji(E, M)) return;
    const oe = E.attributes;
    if (!oe || tn(E)) return;
    re = fr(we.uponSanitizeAttribute, re, ue, ai);
    const se = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: re,
      forceKeepAttr: void 0
    };
    let Ie = oe.length;
    const Fe = _t(E.nodeName);
    for (; Ie--; ) {
      const We = oe[Ie], Tt = We.name, Wt = We.namespaceURI, pt = We.value, It = _t(Tt), ya = pt;
      let Et = Tt === "value" ? ya : v_(ya), ws = !1;
      if (se.attrName = It, se.attrValue = Et, se.keepAttr = !0, se.forceKeepAttr = void 0, gi(we.uponSanitizeAttribute, E, se), Et = se.attrValue, vi && (It === "id" || It === "name") && Nh(Et, $n) !== 0 && (en(Tt, E, We), Et = $n + Et, ws = !0), _s(Tt, Et)) {
        en(Tt, E, We);
        continue;
      }
      if (!se.forceKeepAttr) {
        if (!se.keepAttr) {
          en(Tt, E, We);
          continue;
        }
        if (!Ze && Ut(zh, Et)) {
          en(Tt, E, We);
          continue;
        }
        if (Ge && (Et = In(Et)), !Ei(Fe, It, Et)) {
          en(Tt, E, We);
          continue;
        }
        Et = ys(Fe, It, Wt, Et), Et !== ya && Pu(E, Tt, Wt, Et) && ws && xh(t.removed);
      }
    }
    gi(we.afterSanitizeAttributes, E, null), Ji(E, M);
  }, nn = function(E) {
    let M = null;
    const oe = Br(E);
    for (gi(we.beforeSanitizeShadowDOM, E, null); M = oe.nextNode(); )
      if (gi(we.uponSanitizeShadowNode, M, null), hr(M, E), pr(M, E), Ai(M.content) && nn(M.content), x(M) === $t.element) {
        const se = N(M);
        Ai(se) && (vr(se), nn(se));
      }
    Ge && dr(E), gi(we.afterSanitizeShadowDOM, E, null);
  }, vr = function(E) {
    const M = [{
      node: E,
      shadow: null
    }];
    for (; M.length > 0; ) {
      const oe = M.pop();
      if (oe.shadow) {
        nn(oe.shadow);
        continue;
      }
      const se = oe.node, Ie = x(se) === $t.element, Fe = $(se);
      if (Fe) for (let We = Fe.length - 1; We >= 0; --We) M.push({
        node: Fe[We],
        shadow: null
      });
      if (Ie) {
        const We = he ? he(se) : null;
        if (typeof We == "string" && _t(We) === "template") {
          const Tt = se.content;
          Ai(Tt) && M.push({
            node: Tt,
            shadow: null
          });
        }
      }
      if (Ie) {
        const We = N(se);
        Ai(We) && M.push({
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
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = null, oe = null, se = null, Ie = null;
    if (Za = !ge, Za && (ge = "<!-->"), typeof ge != "string" && !an(ge) && (ge = y_(ge), typeof ge != "string"))
      throw Aa("dirty is not a string, aborting");
    if (!t.isSupported) return ge;
    yt ? (z = gt, re = ai) : Fr(E), (we.uponSanitizeElement.length > 0 || we.uponSanitizeAttribute.length > 0) && (z = wi(z)), we.uponSanitizeAttribute.length > 0 && (re = wi(re)), t.removed = [];
    const Fe = xn && typeof ge != "string" && an(ge);
    let We = [];
    const Tt = Ti;
    if (Fe) {
      Iu(ge);
      const It = B(ge);
      if (typeof It == "string") {
        const ya = _t(It);
        if (!z[ya] || ce[ya])
          throw Rn(ge), Aa("root node is forbidden and cannot be sanitized in-place");
      }
      if (tn(ge))
        throw Rn(ge), Aa("root node is clobbered and cannot be sanitized in-place");
      We = jr(ge), Ti = nc();
    } else if (an(ge))
      M = bs("<!---->"), oe = M.ownerDocument.importNode(ge, !0), oe.nodeType === $t.element && oe.nodeName === "BODY" || oe.nodeName === "HTML" ? M = oe : M.appendChild(oe), vr(M);
    else {
      if (!kt && !Ge && !dt && ge.indexOf("<") === -1) return le && Mi ? ae(ge) : ge;
      if (M = bs(ge), !M) return kt ? null : Mi ? H : "";
    }
    M && pi && Xi(M.firstChild);
    const Wt = Fe ? ge : M;
    try {
      Fe && vr(ge);
      const It = Br(Wt);
      for (; se = It.nextNode(); )
        hr(se, Wt), pr(se, Wt), Ai(se.content) && nn(se.content);
      Fe && Ou(ge, We);
    } catch (It) {
      throw Fe && (Rn(ge), ps(ge, We)), It;
    } finally {
      Ti = Tt;
    }
    if (Fe) {
      if (ps(ge, We)) throw Aa("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return Ge && Ln(ge), ge;
    }
    if (kt) {
      if (Ge && Ln(M), Rt)
        for (Ie = Me.call(M.ownerDocument); M.firstChild; ) Ie.appendChild(M.firstChild);
      else Ie = M;
      return (re.shadowroot || re.shadowrootmode) && (Ie = ct.call(a, Ie, !0)), Ie;
    }
    let pt = dt ? M.outerHTML : M.innerHTML;
    return dt && z["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && Ut(N_, M.ownerDocument.doctype.name) && (pt = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + pt), Ge && (pt = In(pt)), le && Mi ? ae(pt) : pt;
  }, t.setConfig = function() {
    let ge = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Fr(ge), yt = !0, gt = z, ai = re;
  }, t.clearConfig = function() {
    Kt = null, yt = !1, gt = null, ai = null, le = Y, H = "";
  }, t.isValidAttribute = function(ge, E, M) {
    Kt || Fr({});
    const oe = _t(ge), se = _t(E);
    return typeof M == "string" && (_s(E, M) || !Ze && Ut(zh, M)) ? !1 : Ei(oe, se, M);
  }, t.addHook = function(ge, E) {
    typeof E == "function" && fi(we, ge) && ol(we[ge], E);
  }, t.removeHook = function(ge, E) {
    if (fi(we, ge)) {
      if (E !== void 0) {
        const M = f_(we[ge], E);
        return M === -1 ? void 0 : p_(we[ge], M, 1)[0];
      }
      return xh(we[ge]);
    }
  }, t.removeHooks = function(ge) {
    fi(we, ge) && (we[ge] = []);
  }, t.removeAllHooks = function() {
    we = jh();
  }, t;
}
var ub = ob();
function Pd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hc, Bh;
function F_() {
  if (Bh) return hc;
  Bh = 1;
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
var M_ = F_();
const vo = /* @__PURE__ */ Pd(M_);
function cb() {
  return globalThis._nc_l10n_locale;
}
function U_() {
  return cb().replaceAll(/_/g, "-");
}
function os() {
  return globalThis._nc_l10n_language;
}
function z_(e) {
  const t = os();
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
function db(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function g(e, t, i, a, n) {
  const r = typeof i == "object" ? i : void 0, s = typeof a == "number" ? a : typeof i == "number" ? i : void 0, c = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof n == "object" ? n : typeof a == "object" ? a : {}
  }, d = (S) => S, _ = (c.sanitize ? ub.sanitize : d) || d, v = c.escape ? vo : d, y = (S) => typeof S == "string" || typeof S == "number", m = (S, $, R) => S.replace(/%n/g, "" + R).replace(/{([^{}]*)}/g, (N, P) => {
    if ($ === void 0 || !(P in $))
      return v(N);
    const I = $[P];
    return y(I) ? v(`${I}`) : typeof I == "object" && y(I.value) ? (I.escape !== !1 ? vo : d)(`${I.value}`) : v(N);
  });
  let C = (n?.bundle ?? db(e)).translations[t] || t;
  return C = Array.isArray(C) ? C[0] : C, _(typeof r == "object" || s !== void 0 ? m(
    C,
    r,
    s
  ) : C);
}
function Ot(e, t, i, a, n, r) {
  const s = "_" + t + "_::_" + i + "_", c = r?.bundle ?? db(e), d = c.translations[s];
  if (typeof d < "u") {
    const _ = d;
    if (Array.isArray(_)) {
      const v = c.pluralFunction(a);
      return g(e, _[v], n, a, r);
    }
  }
  return a === 1 ? g(e, t, n, a, r) : g(e, i, n, a, r);
}
function j_(e, t = os()) {
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
function B_(e, t = () => "", i = 256) {
  const a = /* @__PURE__ */ new Map();
  let n;
  return (...r) => {
    if (r.length !== 2 || r.some((_) => typeof _ != "string")) return e(...r);
    const s = t();
    s !== n && (a.clear(), n = s);
    const c = JSON.stringify(r);
    if (a.has(c)) return a.get(c);
    const d = e(...r);
    return a.size >= i && a.delete(a.keys().next().value), a.set(c, d), d;
  };
}
class bo {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, i, a) {
    this.scope = `${a ? bo.GLOBAL_SCOPE_PERSISTENT : bo.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = i;
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
class H_ {
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
    return new bo(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function fb(e) {
  return new H_(e);
}
function V_() {
  try {
    return po("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var pc, Hh;
function hb() {
  if (Hh) return pc;
  Hh = 1;
  var e = {};
  return pc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...i) => console.error("SEMVER", ...i) : () => {
  }, pc;
}
var vc, Vh;
function pb() {
  if (Vh) return vc;
  Vh = 1;
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
var Bs = { exports: {} }, qh;
function q_() {
  return qh || (qh = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: i,
      MAX_SAFE_BUILD_LENGTH: a,
      MAX_LENGTH: n
    } = pb(), r = hb();
    t = e.exports = {};
    const s = t.re = [], c = t.safeRe = [], d = t.src = [], _ = t.safeSrc = [], v = t.t = {};
    let y = 0;
    const m = "[a-zA-Z0-9-]", k = [
      ["\\s", 1],
      ["\\d", n],
      [m, a]
    ], C = ($) => {
      for (const [R, N] of k)
        $ = $.split(`${R}*`).join(`${R}{0,${N}}`).split(`${R}+`).join(`${R}{1,${N}}`);
      return $;
    }, S = ($, R, N) => {
      const P = C(R), I = y++;
      r($, I, R), v[$] = I, d[I] = R, _[I] = P, s[I] = new RegExp(R, N ? "g" : void 0), c[I] = new RegExp(P, N ? "g" : void 0);
    };
    S("NUMERICIDENTIFIER", "0|[1-9]\\d*"), S("NUMERICIDENTIFIERLOOSE", "\\d+"), S("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${m}*`), S("MAINVERSION", `(${d[v.NUMERICIDENTIFIER]})\\.(${d[v.NUMERICIDENTIFIER]})\\.(${d[v.NUMERICIDENTIFIER]})`), S("MAINVERSIONLOOSE", `(${d[v.NUMERICIDENTIFIERLOOSE]})\\.(${d[v.NUMERICIDENTIFIERLOOSE]})\\.(${d[v.NUMERICIDENTIFIERLOOSE]})`), S("PRERELEASEIDENTIFIER", `(?:${d[v.NONNUMERICIDENTIFIER]}|${d[v.NUMERICIDENTIFIER]})`), S("PRERELEASEIDENTIFIERLOOSE", `(?:${d[v.NONNUMERICIDENTIFIER]}|${d[v.NUMERICIDENTIFIERLOOSE]})`), S("PRERELEASE", `(?:-(${d[v.PRERELEASEIDENTIFIER]}(?:\\.${d[v.PRERELEASEIDENTIFIER]})*))`), S("PRERELEASELOOSE", `(?:-?(${d[v.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${d[v.PRERELEASEIDENTIFIERLOOSE]})*))`), S("BUILDIDENTIFIER", `${m}+`), S("BUILD", `(?:\\+(${d[v.BUILDIDENTIFIER]}(?:\\.${d[v.BUILDIDENTIFIER]})*))`), S("FULLPLAIN", `v?${d[v.MAINVERSION]}${d[v.PRERELEASE]}?${d[v.BUILD]}?`), S("FULL", `^${d[v.FULLPLAIN]}$`), S("LOOSEPLAIN", `[v=\\s]*${d[v.MAINVERSIONLOOSE]}${d[v.PRERELEASELOOSE]}?${d[v.BUILD]}?`), S("LOOSE", `^${d[v.LOOSEPLAIN]}$`), S("GTLT", "((?:<|>)?=?)"), S("XRANGEIDENTIFIERLOOSE", `${d[v.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), S("XRANGEIDENTIFIER", `${d[v.NUMERICIDENTIFIER]}|x|X|\\*`), S("XRANGEPLAIN", `[v=\\s]*(${d[v.XRANGEIDENTIFIER]})(?:\\.(${d[v.XRANGEIDENTIFIER]})(?:\\.(${d[v.XRANGEIDENTIFIER]})(?:${d[v.PRERELEASE]})?${d[v.BUILD]}?)?)?`), S("XRANGEPLAINLOOSE", `[v=\\s]*(${d[v.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[v.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[v.XRANGEIDENTIFIERLOOSE]})(?:${d[v.PRERELEASELOOSE]})?${d[v.BUILD]}?)?)?`), S("XRANGE", `^${d[v.GTLT]}\\s*${d[v.XRANGEPLAIN]}$`), S("XRANGELOOSE", `^${d[v.GTLT]}\\s*${d[v.XRANGEPLAINLOOSE]}$`), S("COERCEPLAIN", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`), S("COERCE", `${d[v.COERCEPLAIN]}(?:$|[^\\d])`), S("COERCEFULL", d[v.COERCEPLAIN] + `(?:${d[v.PRERELEASE]})?(?:${d[v.BUILD]})?(?:$|[^\\d])`), S("COERCERTL", d[v.COERCE], !0), S("COERCERTLFULL", d[v.COERCEFULL], !0), S("LONETILDE", "(?:~>?)"), S("TILDETRIM", `(\\s*)${d[v.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", S("TILDE", `^${d[v.LONETILDE]}${d[v.XRANGEPLAIN]}$`), S("TILDELOOSE", `^${d[v.LONETILDE]}${d[v.XRANGEPLAINLOOSE]}$`), S("LONECARET", "(?:\\^)"), S("CARETTRIM", `(\\s*)${d[v.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", S("CARET", `^${d[v.LONECARET]}${d[v.XRANGEPLAIN]}$`), S("CARETLOOSE", `^${d[v.LONECARET]}${d[v.XRANGEPLAINLOOSE]}$`), S("COMPARATORLOOSE", `^${d[v.GTLT]}\\s*(${d[v.LOOSEPLAIN]})$|^$`), S("COMPARATOR", `^${d[v.GTLT]}\\s*(${d[v.FULLPLAIN]})$|^$`), S("COMPARATORTRIM", `(\\s*)${d[v.GTLT]}\\s*(${d[v.LOOSEPLAIN]}|${d[v.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", S("HYPHENRANGE", `^\\s*(${d[v.XRANGEPLAIN]})\\s+-\\s+(${d[v.XRANGEPLAIN]})\\s*$`), S("HYPHENRANGELOOSE", `^\\s*(${d[v.XRANGEPLAINLOOSE]})\\s+-\\s+(${d[v.XRANGEPLAINLOOSE]})\\s*$`), S("STAR", "(<|>)?=?\\s*\\*"), S("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), S("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(Bs, Bs.exports)), Bs.exports;
}
var bc, Gh;
function G_() {
  if (Gh) return bc;
  Gh = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return bc = (a) => a ? typeof a != "object" ? e : a : t, bc;
}
var gc, Kh;
function K_() {
  if (Kh) return gc;
  Kh = 1;
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
var mc, Wh;
function vb() {
  if (Wh) return mc;
  Wh = 1;
  const e = hb(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: i } = pb(), { safeRe: a, t: n } = q_(), r = G_(), { compareIdentifiers: s } = K_(), c = (_, v) => {
    const y = v.split(".");
    if (y.length > _.length)
      return !1;
    for (let m = 0; m < y.length; m++)
      if (s(_[m], y[m]) !== 0)
        return !1;
    return !0;
  };
  class d {
    constructor(v, y) {
      if (y = r(y), v instanceof d) {
        if (v.loose === !!y.loose && v.includePrerelease === !!y.includePrerelease)
          return v;
        v = v.version;
      } else if (typeof v != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof v}".`);
      if (v.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", v, y), this.options = y, this.loose = !!y.loose, this.includePrerelease = !!y.includePrerelease;
      const m = v.trim().match(y.loose ? a[n.LOOSE] : a[n.FULL]);
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
      let y = 0;
      do {
        const m = this.prerelease[y], k = v.prerelease[y];
        if (e("prerelease compare", y, m, k), m === void 0 && k === void 0)
          return 0;
        if (k === void 0)
          return 1;
        if (m === void 0)
          return -1;
        if (m === k)
          continue;
        return s(m, k);
      } while (++y);
    }
    compareBuild(v) {
      v instanceof d || (v = new d(v, this.options));
      let y = 0;
      do {
        const m = this.build[y], k = v.build[y];
        if (e("build compare", y, m, k), m === void 0 && k === void 0)
          return 0;
        if (k === void 0)
          return 1;
        if (m === void 0)
          return -1;
        if (m === k)
          continue;
        return s(m, k);
      } while (++y);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(v, y, m) {
      if (v.startsWith("pre")) {
        if (!y && m === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (y) {
          const k = `-${y}`.match(this.options.loose ? a[n.PRERELEASELOOSE] : a[n.PRERELEASE]);
          if (!k || k[1] !== y)
            throw new Error(`invalid identifier: ${y}`);
        }
      }
      switch (v) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", y, m);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", y, m);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", y, m), this.inc("pre", y, m);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", y, m), this.inc("pre", y, m);
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
              if (y === this.prerelease.join(".") && m === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(k);
            }
          }
          if (y) {
            let C = [y, k];
            if (m === !1 && (C = [y]), c(this.prerelease, y)) {
              const S = this.prerelease[y.split(".").length];
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
var yc, Yh;
function W_() {
  if (Yh) return yc;
  Yh = 1;
  const e = vb();
  return yc = (i, a) => new e(i, a).major, yc;
}
var Y_ = W_();
const Zh = /* @__PURE__ */ Pd(Y_);
var _c, Xh;
function Z_() {
  if (Xh) return _c;
  Xh = 1;
  const e = vb();
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
var wc, Jh;
function X_() {
  if (Jh) return wc;
  Jh = 1;
  const e = Z_();
  return wc = (i, a) => {
    const n = e(i, a);
    return n ? n.version : null;
  }, wc;
}
var J_ = X_();
const Q_ = /* @__PURE__ */ Pd(J_);
class e0 {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !Q_(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Zh(t.getVersion()) !== Zh(this.getVersion()) && console.warn(
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
class t0 {
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
let fl = null;
function Dd() {
  return fl !== null ? fl : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? fl = new e0(window._nc_event_bus) : fl = window._nc_event_bus = new t0(), fl);
}
function bb(e, t) {
  Dd().subscribe(e, t);
}
function i0(e, t) {
  Dd().unsubscribe(e, t);
}
function Ma(e, ...t) {
  Dd().emit(e, ...t);
}
const gb = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const a0 = Object.prototype.toString, n0 = (e) => a0.call(e) === "[object Object]", _r = () => {
}, r0 = /* @__PURE__ */ l0();
function l0() {
  var e, t, i;
  return gb && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((i = window) === null || i === void 0 ? void 0 : i.navigator.userAgent));
}
function kc(e) {
  return Array.isArray(e) ? e : [e];
}
function s0(e, t, i) {
  return Ke(e, t, {
    ...i,
    immediate: !0
  });
}
const mb = gb ? window : void 0;
function ml(e) {
  var t;
  const i = Da(e);
  return (t = i?.$el) !== null && t !== void 0 ? t : i;
}
function Rr(...e) {
  const t = (a, n, r, s) => (a.addEventListener(n, r, s), () => a.removeEventListener(n, r, s)), i = j(() => {
    const a = kc(Da(e[0])).filter((n) => n != null);
    return a.every((n) => typeof n != "string") ? a : void 0;
  });
  return s0(() => {
    var a, n;
    return [
      (a = (n = i.value) === null || n === void 0 ? void 0 : n.map((r) => ml(r))) !== null && a !== void 0 ? a : [mb].filter((r) => r != null),
      kc(Da(i.value ? e[1] : e[0])),
      kc(u(i.value ? e[2] : e[1])),
      Da(i.value ? e[3] : e[2])
    ];
  }, ([a, n, r, s], c, d) => {
    if (!a?.length || !n?.length || !r?.length) return;
    const _ = n0(s) ? { ...s } : s, v = a.flatMap((y) => n.flatMap((m) => r.map((k) => t(y, m, k, _))));
    d(() => {
      v.forEach((y) => y());
    });
  }, { flush: "post" });
}
let Qh = !1;
function ep(e, t, i = {}) {
  const { window: a = mb, ignore: n = [], capture: r = !0, detectIframe: s = !1, controls: c = !1 } = i;
  if (!a) return c ? {
    stop: _r,
    cancel: _r,
    trigger: _r
  } : _r;
  if (r0 && !Qh) {
    Qh = !0;
    const $ = { passive: !0 };
    Array.from(a.document.body.children).forEach((R) => R.addEventListener("click", _r, $)), a.document.documentElement.addEventListener("click", _r, $);
  }
  let d = !0;
  const _ = ($) => Da(n).some((R) => {
    if (typeof R == "string") return Array.from(a.document.querySelectorAll(R)).some((N) => N === $.target || $.composedPath().includes(N));
    {
      const N = ml(R);
      return N && ($.target === N || $.composedPath().includes(N));
    }
  });
  function v($) {
    const R = Da($);
    return R && R.$.subTree.shapeFlag === 16;
  }
  function y($, R) {
    const N = Da($), P = N.$.subTree && N.$.subTree.children;
    return P == null || !Array.isArray(P) ? !1 : P.some((I) => I.el === R.target || R.composedPath().includes(I.el));
  }
  const m = ($) => {
    const R = ml(e);
    if ($.target != null && !(!(R instanceof Element) && v(e) && y(e, $)) && !(!R || R === $.target || $.composedPath().includes(R))) {
      if ("detail" in $ && $.detail === 0 && (d = !_($)), !d) {
        d = !0;
        return;
      }
      t($);
    }
  };
  let k = !1;
  const C = [
    Rr(a, "click", ($) => {
      k || (k = !0, setTimeout(() => {
        k = !1;
      }, 0), m($));
    }, {
      passive: !0,
      capture: r
    }),
    Rr(a, "pointerdown", ($) => {
      const R = ml(e);
      d = !_($) && !!(R && !$.composedPath().includes(R));
    }, { passive: !0 }),
    s && Rr(a, "blur", ($) => {
      setTimeout(() => {
        const R = ml(e);
        let N = a.document.activeElement;
        for (; N?.shadowRoot; ) N = N.shadowRoot.activeElement;
        N?.tagName === "IFRAME" && !R?.contains(a.document.activeElement) && t($);
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
function o0(e, t = {}) {
  const { threshold: i = 50, onSwipe: a, onSwipeEnd: n, onSwipeStart: r, passive: s = !0 } = t, c = /* @__PURE__ */ Lt({
    x: 0,
    y: 0
  }), d = /* @__PURE__ */ Lt({
    x: 0,
    y: 0
  }), _ = j(() => c.x - d.x), v = j(() => c.y - d.y), { max: y, abs: m } = Math, k = j(() => y(m(_.value), m(v.value)) >= i), C = /* @__PURE__ */ sv(!1), S = j(() => k.value ? m(_.value) > m(v.value) ? _.value > 0 ? "left" : "right" : v.value > 0 ? "up" : "down" : "none"), $ = (x) => [x.touches[0].clientX, x.touches[0].clientY], R = (x, B) => {
    c.x = x, c.y = B;
  }, N = (x, B) => {
    d.x = x, d.y = B;
  }, P = {
    passive: s,
    capture: !s
  }, I = (x) => {
    C.value && n?.(x, S.value), C.value = !1;
  }, he = [
    Rr(e, "touchstart", (x) => {
      if (x.touches.length !== 1) return;
      const [B, W] = $(x);
      R(B, W), N(B, W), r?.(x);
    }, P),
    Rr(e, "touchmove", (x) => {
      if (x.touches.length !== 1) return;
      const [B, W] = $(x);
      N(B, W), P.capture && !P.passive && Math.abs(_.value) > Math.abs(v.value) && x.preventDefault(), !C.value && k.value && (C.value = !0), C.value && a?.(x);
    }, P),
    Rr(e, ["touchend", "touchcancel"], I, P)
  ];
  return {
    isSwiping: C,
    direction: S,
    coordsStart: c,
    coordsEnd: d,
    lengthX: _,
    lengthY: v,
    stop: () => he.forEach((x) => x())
  };
}
var u0 = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let i = t, a = e, n = Uy(), r = My(), s = /* @__PURE__ */ U([]), c = j(() => s.value.reduce((ie, T) => (ie[~~T.id] = T) && ie, {})), d = j(() => s.value.length), _ = /* @__PURE__ */ U(null), v = /* @__PURE__ */ U(!1), y = /* @__PURE__ */ U({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), m = /* @__PURE__ */ U({
      splitter: null,
      timeoutId: null
    }), k = j(() => ({
      [`splitpanes splitpanes--${a.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": y.value.dragging,
      "splitpanes--ready": v.value
    })), C = () => {
      document.addEventListener("mousemove", R, { passive: !1 }), document.addEventListener("mouseup", N), "ontouchstart" in window && (document.addEventListener("touchmove", R, { passive: !1 }), document.addEventListener("touchend", N));
    }, S = () => {
      document.removeEventListener("mousemove", R, { passive: !1 }), document.removeEventListener("mouseup", N), "ontouchstart" in window && (document.removeEventListener("touchmove", R, { passive: !1 }), document.removeEventListener("touchend", N));
    }, $ = (ie, T) => {
      let O = ie.target.closest(".splitpanes__splitter");
      if (O) {
        let { left: D, top: q } = O.getBoundingClientRect(), { clientX: z, clientY: te } = "ontouchstart" in window && ie.touches ? ie.touches[0] : ie;
        y.value.cursorOffset = a.horizontal ? te - q : z - D;
      }
      C(), y.value.mouseDown = !0, y.value.activeSplitter = T, document.documentElement.style.cursor = a.horizontal ? "row-resize" : "col-resize";
    }, R = (ie) => {
      y.value.mouseDown && (ie.preventDefault(), y.value.dragging || (window.getSelection()?.removeAllRanges(), y.value.dragging = !0), requestAnimationFrame(() => {
        W(x(ie)), ne("resize", { event: ie }, !0);
      }));
    }, N = (ie) => {
      y.value.dragging && (window.getSelection()?.removeAllRanges(), ne("resized", { event: ie }, !0)), y.value.mouseDown = !1, y.value.activeSplitter = null, setTimeout(() => {
        y.value.dragging = !1, S(), document.documentElement.style.cursor = "";
      }, 100);
    }, P = (ie, T) => {
      "ontouchstart" in window && (ie.preventDefault(), m.value.splitter === T ? (clearTimeout(m.value.timeoutId), m.value.timeoutId = null, I(ie, T), m.value.splitter = null) : (m.value.splitter = T, m.value.timeoutId = setTimeout(() => m.value.splitter = null, 500))), y.value.dragging || ne("splitter-click", {
        event: ie,
        index: T
      }, !0);
    }, I = (ie, T) => {
      if (ne("splitter-dblclick", {
        event: ie,
        index: T
      }, !0), a.maximizePanes) {
        let O = 0;
        s.value = s.value.map((D, q) => (D.size = q === T ? D.max : D.min, q !== T && (O += D.min), D)), s.value[T].size -= O, ne("pane-maximize", {
          event: ie,
          index: T,
          pane: s.value[T]
        }), ne("resized", {
          event: ie,
          index: T
        }, !0);
      }
    }, he = (ie, T) => {
      if (!a.keyboardStep) return;
      let O = a.horizontal ? ie.key === "ArrowDown" : ie.key === "ArrowRight", D = a.horizontal ? ie.key === "ArrowUp" : ie.key === "ArrowLeft";
      if (!O && !D) return;
      ie.preventDefault(), y.value.activeSplitter = T;
      let q = (O ? 1 : -1) * (a.rtl && !a.horizontal ? -1 : 1), z = H(T) + s.value[T].size;
      Z(Math.min(Math.max(z + q * a.keyboardStep, 0), 100)), ne("resize", { event: ie }, !0), ne("resized", { event: ie }, !0), y.value.activeSplitter = null;
    }, Q = (ie, T) => {
      let O = c.value[T];
      O && ne("pane-click", {
        event: ie,
        index: O.index,
        pane: O
      });
    }, x = (ie) => {
      let T = _.value.getBoundingClientRect(), { clientX: O, clientY: D } = "ontouchstart" in window && ie.touches ? ie.touches[0] : ie;
      return {
        x: O - (a.horizontal ? 0 : y.value.cursorOffset) - T.left,
        y: D - (a.horizontal ? y.value.cursorOffset : 0) - T.top
      };
    }, B = (ie) => {
      ie = ie[a.horizontal ? "y" : "x"];
      let T = _.value[a.horizontal ? "clientHeight" : "clientWidth"];
      return a.rtl && !a.horizontal && (ie = T - ie), ie * 100 / T;
    }, W = (ie) => {
      Z(B(ie));
    }, Z = (ie) => {
      let T = y.value.activeSplitter;
      if (T === null || T >= s.value.length - 1) return;
      let O = {
        prevPanesSize: H(T),
        nextPanesSize: Y(T),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, D = 0 + (a.pushOtherPanes ? 0 : O.prevPanesSize), q = 100 - (a.pushOtherPanes ? 0 : O.nextPanesSize);
      ie = Math.max(Math.min(ie, q), D);
      let z = [T, T + 1], te = s.value[z[0]] || null, re = s.value[z[1]] || null, ue = te !== null && te.max < 100 && ie >= te.max + O.prevPanesSize, me = re !== null && re.max < 100 && ie <= 100 - (re.max + Y(T + 1));
      if (ue || me) {
        ue ? (te.size = te.max, re.size = Math.min(Math.max(100 - te.max - O.prevPanesSize - O.nextPanesSize, re.min), re.max)) : (te.size = Math.min(Math.max(100 - re.max - O.prevPanesSize - Y(T + 1), te.min), te.max), re.size = re.max);
        return;
      }
      if (a.pushOtherPanes) {
        let ce = le(O, ie);
        if (!ce) return;
        ({ sums: O, panesToResize: z } = ce), te = s.value[z[0]] || null, re = s.value[z[1]] || null;
      }
      te !== null && (te.size = Math.min(Math.max(ie - O.prevPanesSize - O.prevReachedMinPanes, te.min), te.max)), re !== null && (re.size = Math.min(Math.max(100 - ie - O.nextPanesSize - O.nextReachedMinPanes, re.min), re.max));
    }, le = (ie, T) => {
      let O = y.value.activeSplitter, D = [O, O + 1];
      if (T < ie.prevPanesSize + s.value[D[0]].min) {
        if (D[0] = L(O).index, ie.prevReachedMinPanes = 0, D[0] < O && s.value.forEach((q, z) => {
          z > D[0] && z <= O && (q.size = q.min, ie.prevReachedMinPanes += q.min);
        }), D[0] === void 0) return ie.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((q, z) => {
          z > 0 && z <= O && (q.size = q.min, ie.prevReachedMinPanes += q.min);
        }), s.value[D[1]].size = 100 - ie.prevReachedMinPanes - s.value[0].min - ie.prevPanesSize - ie.nextPanesSize, null;
        ie.prevPanesSize = H(D[0]);
      }
      return T > 100 - ie.nextPanesSize - s.value[D[1]].min && (D[1] = G(O).index, ie.nextReachedMinPanes = 0, D[1] > O + 1 && s.value.forEach((q, z) => {
        z > O && z < D[1] && (q.size = q.min, ie.nextReachedMinPanes += q.min);
      }), ie.nextPanesSize = D[1] === void 0 ? 0 : Y(D[1] - 1), D[1] === void 0) ? (ie.nextReachedMinPanes = 0, s.value.forEach((q, z) => {
        z >= O + 1 && (q.size = q.min, ie.nextReachedMinPanes += q.min);
      }), D[0] !== void 0 && (s.value[D[0]].size = 100 - ie.prevPanesSize - Y(D[0] - 1)), null) : {
        sums: ie,
        panesToResize: D
      };
    }, H = (ie) => s.value.reduce((T, O, D) => T + (D < ie ? O.size : 0), 0), Y = (ie) => s.value.reduce((T, O, D) => T + (D > ie + 1 ? O.size : 0), 0), L = (ie) => [...s.value].reverse().find((T) => T.index < ie && T.size > T.min) || {}, G = (ie) => s.value.find((T) => T.index > ie + 1 && T.size > T.min) || {}, X = () => {
      let ie = Array.from(_.value?.children || []);
      for (let T of ie) {
        let O = T.classList.contains("splitpanes__pane"), D = T.classList.contains("splitpanes__splitter");
        !O && !D && (T.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, ae = (ie, T, O = !1) => {
      let D = ie - 1, q = document.createElement("div");
      q.classList.add("splitpanes__splitter"), O || (q.onmousedown = (z) => $(z, D), typeof window < "u" && "ontouchstart" in window && (q.ontouchstart = (z) => $(z, D)), q.onclick = (z) => P(z, D + 1), a.keyboardStep && (q.setAttribute("tabindex", "0"), q.setAttribute("role", "separator"), q.setAttribute("aria-orientation", a.horizontal ? "horizontal" : "vertical"), q.onkeydown = (z) => he(z, D))), q.ondblclick = (z) => I(z, D + 1), T.parentNode.insertBefore(q, T);
    }, J = (ie) => {
      ie.onmousedown = null, ie.onclick = null, ie.ondblclick = null, ie.onkeydown = null, ie.remove();
    }, ve = () => {
      let ie = Array.from(_.value?.children || []);
      for (let O of ie) O.className.includes("splitpanes__splitter") && J(O);
      let T = 0;
      for (let O of ie) O.className.includes("splitpanes__pane") && (!T && a.firstSplitter ? ae(T, O, !0) : T && ae(T, O), T++);
    }, Ae = ({ uid: ie, ...T }) => {
      let O = c.value[ie];
      for (let [D, q] of Object.entries(T)) O[D] = q;
    }, Le = !1, Oe = (ie) => {
      let T = -1;
      Array.from(_.value?.children || []).some((O) => (O.className.includes("splitpanes__pane") && T++, O.isSameNode(ie.el))), s.value.splice(T, 0, {
        ...ie,
        index: T
      }), s.value.forEach((O, D) => O.index = D), v.value && !Le && (Le = !0, Pt(() => {
        ve(), Xe({ addedPane: s.value[T] }), ne("pane-add", { pane: s.value[T] }), Le = !1;
      }));
    }, Me = (ie) => {
      let T = s.value.findIndex((D) => D.id === ie);
      s.value[T].el = null;
      let O = s.value.splice(T, 1)[0];
      s.value.forEach((D, q) => D.index = q), Pt(() => {
        ve(), ne("pane-remove", { pane: O }), Xe({ removedPane: {
          ...O
        } });
      });
    }, Xe = (ie = {}) => {
      !ie.addedPane && !ie.removedPane ? we() : s.value.some((T) => T.givenSize !== null || T.min || T.max < 100) ? be(ie) : ct(), v.value && ne("resized");
    }, ct = () => {
      let ie = 100 / d.value, T = 100, O = [], D = [];
      for (let q of s.value) q.size = Math.max(Math.min(ie, q.max), q.min), T -= q.size, q.size >= q.max && O.push(q.id), q.size <= q.min && D.push(q.id);
      Math.abs(T) > 0.1 && V(T, O, D);
    }, we = () => {
      let ie = 100, T = [], O = [], D = 0;
      for (let z of s.value) ie -= z.size, z.givenSize !== null && D++, z.size >= z.max && T.push(z.id), z.size <= z.min && O.push(z.id);
      let q = 100;
      if (ie > 0.1) {
        for (let z of s.value) z.givenSize === null && (z.size = Math.max(Math.min(ie / (d.value - D), z.max), z.min)), q -= z.size;
        q > 0.1 && V(q, T, O);
      }
    }, be = ({ addedPane: ie, removedPane: T } = {}) => {
      let O = s.value.reduce((ue, me) => ue + (me.givenSize === null ? 0 : me.givenSize), 0), D = s.value.filter((ue) => ue.givenSize === null).length, q = D > 0 ? (100 - O) / D : 0, z = 0, te = [], re = [];
      for (let ue of s.value) z -= ue.size, ue.size >= ue.max && te.push(ue.id), ue.size <= ue.min && re.push(ue.id);
      if (!(Math.abs(z) < 0.1)) {
        z = 100;
        for (let ue of s.value) ue.givenSize === null && (ue.size = Math.max(Math.min(q, ue.max), ue.min)), z -= ue.size, ue.size >= ue.max && te.push(ue.id), ue.size <= ue.min && re.push(ue.id);
        Math.abs(z) > 0.1 && V(z, te, re);
      }
    }, V = (ie, T, O) => {
      let D;
      D = ie > 0 ? ie / (d.value - T.length) : ie / (d.value - O.length), s.value.forEach((q, z) => {
        if (ie > 0 && !T.includes(q.id)) {
          let te = Math.max(Math.min(q.size + D, q.max), q.min), re = te - q.size;
          ie -= re, q.size = te;
        } else if (!O.includes(q.id)) {
          let te = Math.max(Math.min(q.size + D, q.max), q.min), re = te - q.size;
          ie -= re, q.size = te;
        }
      }), Math.abs(ie) > 0.1 && v.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, ne = (ie, T = void 0, O = !1) => {
      let D = T?.index ?? y.value.activeSplitter ?? null;
      i(ie, {
        ...T,
        ...D !== null && { index: D },
        ...O && D !== null && {
          prevPane: s.value[D - +!!a.firstSplitter],
          nextPane: s.value[D + +!a.firstSplitter]
        },
        panes: s.value.map((q) => ({
          min: q.min,
          max: q.max,
          size: q.size
        }))
      });
    };
    Ke(() => a.firstSplitter, () => ve()), Ke(() => a.horizontal, (ie) => Pt(() => {
      i("direction-changed", {
        horizontal: ie,
        panes: s.value.map((T) => ({
          min: T.min,
          max: T.max,
          size: T.size
        }))
      });
    })), Ct(() => {
      X(), ve(), Xe(), ne("ready"), v.value = !0;
    }), Ci(() => v.value = !1);
    let Ue = () => {
      let { class: ie, ...T } = n;
      return di("div", {
        ref: _,
        class: [k.value, ie],
        ...T
      }, r.default?.());
    };
    return Ri("panes", s), Ri("indexedPanes", c), Ri("horizontal", j(() => a.horizontal)), Ri("requestUpdate", Ae), Ri("onPaneAdd", Oe), Ri("onPaneRemove", Me), Ri("onPaneClick", Q), (ie, T) => (h(), De(xd(Ue)));
  }
}), c0 = {
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
    let t = e, i = Jt("requestUpdate"), a = Jt("onPaneAdd"), n = Jt("horizontal"), r = Jt("onPaneRemove"), s = Jt("onPaneClick"), c = Tn()?.uid, d = Jt("indexedPanes"), _ = j(() => d.value[c]), v = /* @__PURE__ */ U(null), y = j(() => {
      let S = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(S, k.value), m.value);
    }), m = j(() => {
      let S = parseFloat(t.minSize);
      return isNaN(S) ? 0 : S;
    }), k = j(() => {
      let S = parseFloat(t.maxSize);
      return isNaN(S) ? 100 : S;
    }), C = j(() => {
      let S = _.value?.size ?? (t.size === void 0 ? void 0 : y.value);
      return S === void 0 ? "" : `${n.value ? "height" : "width"}: ${S}%`;
    });
    return Ke(() => y.value, (S) => i({
      uid: c,
      size: S
    })), Ke(() => m.value, (S) => i({
      uid: c,
      min: S
    })), Ke(() => k.value, (S) => i({
      uid: c,
      max: S
    })), Ct(() => {
      a({
        id: c,
        el: v.value,
        min: m.value,
        max: k.value,
        givenSize: t.size === void 0 ? null : y.value,
        size: y.value
      });
    }), Ci(() => r(c)), (S, $) => (h(), p("div", {
      ref_key: "paneEl",
      ref: v,
      class: "splitpanes__pane",
      onClick: $[0] ||= (R) => u(s)(R, S._.uid),
      style: hi(C.value)
    }, [Ve(S.$slots, "default")], 4));
  }
}, d0 = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", f0 = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", h0 = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", p0 = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Fd = 1024, yb = Fd / 2, go = (e) => document.documentElement.clientWidth < e, _b = /* @__PURE__ */ U(go(Fd)), wb = /* @__PURE__ */ U(go(yb));
window.addEventListener("resize", () => {
  _b.value = go(Fd), wb.value = go(yb);
}, { passive: !0 });
function us() {
  return /* @__PURE__ */ Ul(_b);
}
function v0() {
  return /* @__PURE__ */ Ul(wb);
}
class b0 {
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
    return g("", t, i, void 0, { bundle: this.bundle });
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
    return Ot("", t, i, a, n, { bundle: this.bundle });
  }
}
class g0 {
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
    return this.setLanguage(os().replace("-", "_"));
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
    const t = new b0((i) => j_(i, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function m0() {
  return new g0();
}
const kb = m0().detectLanguage().build(), Ft = (...e) => kb.gettext(...e);
function An(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: i, t: a } of t) {
        if (i !== os() || !a)
          continue;
        const n = Object.fromEntries(Object.entries(a).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        kb.addTranslations({
          translations: {
            "": n
          }
        });
      }
      t.registered = !0;
    }
}
const y0 = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], _0 = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], w0 = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], k0 = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], S0 = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], C0 = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], T0 = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], A0 = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], E0 = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const $0 = /* @__PURE__ */ Symbol(""), [x0] = window.OC?.config?.version?.split(".") ?? [], Sb = Number.parseInt(x0 ?? "35"), O0 = Sb < 32, En = Sb < 34, N0 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function R0() {
  return Jt(N0, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const ut = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [a, n] of t)
    i[a] = n;
  return i;
}, I0 = { class: "button-vue__wrapper" }, L0 = { class: "button-vue__icon" }, P0 = { class: "button-vue__text" }, D0 = /* @__PURE__ */ qt({
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
    const i = e, a = t, { formBoxItemClass: n } = R0(), r = Jt($0, null) !== null, s = j(() => r && i.to ? "RouterLink" : i.href ? "a" : "button"), c = j(() => s.value === "button" && typeof i.pressed == "boolean"), d = j(() => i.pressed ? "primary" : i.pressed === !1 && i.variant === "primary" ? "secondary" : i.variant), _ = j(() => d.value.startsWith("tertiary")), v = j(() => i.alignment.split("-")[0]), y = j(() => i.alignment.includes("-")), m = Jt("NcPopover:trigger:attrs", () => ({}), !1), k = j(() => m()), C = j(() => {
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
    return ($, R) => (h(), De(xd(s.value), ii({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${d.value}`]: d.value,
          "button-vue--tertiary": _.value,
          "button-vue--wide": e.wide,
          [`button-vue--${v.value}`]: v.value !== "center",
          "button-vue--reverse": y.value,
          "button-vue--legacy": u(O0),
          "button-vue--legacy34": u(En)
        },
        u(n)
      ]],
      "aria-label": e.ariaLabel
    }, C.value, { onClick: S }), {
      default: Se(() => [
        l("span", I0, [
          l("span", L0, [
            Ve($.$slots, "icon", {}, void 0, !0)
          ]),
          l("span", P0, [
            Ve($.$slots, "default", {}, () => [
              ee(o(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), ca = /* @__PURE__ */ ut(D0, [["__scopeId", "data-v-47ce59a3"]]), F0 = ["aria-hidden", "aria-label"], M0 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, U0 = ["d"], z0 = ["innerHTML"], j0 = /* @__PURE__ */ qt({
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
    I1((n) => ({
      fb515064: i.value
    }));
    const t = e, i = j(() => typeof t.size == "number" ? `${t.size}px` : t.size), a = j(() => {
      if (!t.svg || t.path)
        return;
      const n = ub.sanitize(t.svg), r = new DOMParser().parseFromString(n, "image/svg+xml");
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
      }, null, 8, z0)) : (h(), p("svg", M0, [
        l("path", { d: e.path }, null, 8, U0)
      ]))
    ], 10, F0));
  }
}), mu = /* @__PURE__ */ ut(j0, [["__scopeId", "data-v-aaedb1c3"]]);
H0();
function B0(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), Ma("csrf-token-update", { token: e, _internal: !0 }));
}
function H0() {
  bb("csrf-token-update", ({ token: e, _internal: t }) => {
    t || B0(e);
  });
}
fb("public").persist().build();
let wr;
function tp(e, t) {
  return e ? e.getAttribute(t) : null;
}
function V0() {
  if (wr !== void 0)
    return wr;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = tp(e, "data-user");
  return t === null ? (wr = null, wr) : (wr = {
    uid: t,
    displayName: tp(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, wr);
}
var xt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(xt || {});
class q0 {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, i, a) {
    let n = "[" + xt[i].toUpperCase() + "] ";
    return a && a.app && (n += a.app + ": "), typeof t == "string" ? n + t : (n += `Unexpected ${t.name}`, t.message && (n += ` "${t.message}"`), i === xt.Debug && t.stack && (n += `

Stack trace:
${t.stack}`), n);
  }
  log(t, i, a) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof i == "object" && a?.error === void 0 && (a.error = i), t) {
        case xt.Debug:
          console.debug(this.formatMessage(i, xt.Debug, a), a);
          break;
        case xt.Info:
          console.info(this.formatMessage(i, xt.Info, a), a);
          break;
        case xt.Warn:
          console.warn(this.formatMessage(i, xt.Warn, a), a);
          break;
        case xt.Error:
          console.error(this.formatMessage(i, xt.Error, a), a);
          break;
        case xt.Fatal:
        default:
          console.error(this.formatMessage(i, xt.Fatal, a), a);
          break;
      }
  }
  debug(t, i) {
    this.log(xt.Debug, t, Object.assign({}, this.context, i));
  }
  info(t, i) {
    this.log(xt.Info, t, Object.assign({}, this.context, i));
  }
  warn(t, i) {
    this.log(xt.Warn, t, Object.assign({}, this.context, i));
  }
  error(t, i) {
    this.log(xt.Error, t, Object.assign({}, this.context, i));
  }
  fatal(t, i) {
    this.log(xt.Fatal, t, Object.assign({}, this.context, i));
  }
}
function G0(e) {
  return new q0(e);
}
class K0 {
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
    const t = V0();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, i = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? xt.Warn, window._oc_debug && (t.context.level = xt.Debug), document.removeEventListener("readystatechange", i)) : document.addEventListener("readystatechange", i);
    };
    return i(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function W0() {
  return new K0(G0);
}
const lr = W0().detectUser().setApp("@nextcloud/vue").build();
function Y0(e) {
  let t = !1, i;
  return (...a) => (t || (t = !0, i = e(...a)), i);
}
let Cb = "missing-app-name";
try {
  Cb = "library";
} catch {
  lr.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const Z0 = Cb;
let X0 = "";
try {
  X0 = "0.3.0-alpha.5";
} catch {
  lr.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Tb() {
  return Jt("appName", Z0);
}
const J0 = Y0(() => {
  const e = po("core", "apps", []), t = Tb();
  return e.find(({ id: i }) => i === t)?.name ?? t;
}), Yc = z_();
An(T0);
const Q0 = /* @__PURE__ */ qt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = us();
    Ke(t, i), Ct(() => {
      i(t.value);
    }), Ci(() => {
      t.value && i(!1);
    });
    function i(a = !0) {
      const n = document.querySelector(".app-navigation .app-navigation-toggle");
      n && (n.style.display = a ? "none" : "", a === !0 && Ma("toggle-navigation", { open: !1 }));
    }
    return (a, n) => (h(), De(u(ca), {
      "aria-label": u(Ft)("Go back to the list"),
      class: Ee(["app-details-toggle", { "app-details-toggle--mobile": u(t) }]),
      title: u(Ft)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Se(() => [
        fe(u(mu), {
          directional: "",
          path: u(d0)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), ew = /* @__PURE__ */ ut(Q0, [["__scopeId", "data-v-a28923a1"]]), ip = fb("nextcloud").persist().build(), tw = V_().theming?.name ?? "Nextcloud", iw = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: ew,
    Pane: c0,
    Splitpanes: u0
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
      appName: Tb(),
      localizedAppName: J0(),
      isMobile: us(),
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
        return lr.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(tw), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = o0(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? Ma("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && Ma("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      ip.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), lr.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(ip.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return lr.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, aw = {
  key: 0,
  class: "hidden-visually"
}, nw = { class: "app-content-wrapper__list" }, rw = {
  key: 1,
  class: "app-content-wrapper"
};
function lw(e, t, i, a, n, r) {
  const s = Je("NcAppContentDetailsToggle"), c = Je("Pane"), d = Je("Splitpanes");
  return h(), p("main", {
    id: "app-content-vue",
    class: Ee(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    i.pageHeading ? (h(), p("h1", aw, o(i.pageHeading), 1)) : A("", !0),
    e.$slots.list ? (h(), p(K, { key: 1 }, [
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
        ye(l("div", nw, [
          Ve(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [rr, !i.showDetails]
        ]),
        i.showDetails ? Ve(e.$slots, "default", { key: 1 }, void 0, !0) : A("", !0)
      ], 2)) : i.layout === "vertical-split" || i.layout === "horizontal-split" ? (h(), p("div", rw, [
        fe(d, {
          horizontal: i.layout === "horizontal-split",
          class: Ee(["default-theme", {
            "splitpanes--horizontal": i.layout === "horizontal-split",
            "splitpanes--vertical": i.layout === "vertical-split"
          }]),
          rtl: a.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Se(() => [
            fe(c, {
              class: "splitpanes__pane-list",
              size: n.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Se(() => [
                Ve(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            fe(c, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Se(() => [
                Ve(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : A("", !0)
    ], 64)) : A("", !0),
    e.$slots.list ? A("", !0) : Ve(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const sw = /* @__PURE__ */ ut(iw, [["render", lw], ["__scopeId", "data-v-51427d61"]]);
var Ab = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], mo = /* @__PURE__ */ Ab.join(","), Eb = typeof Element > "u", sr = Eb ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, yo = !Eb && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, _o = function(t, i) {
  var a;
  i === void 0 && (i = !0);
  var n = t == null || (a = t.getAttribute) === null || a === void 0 ? void 0 : a.call(t, "inert"), r = n === "" || n === "true", s = r || i && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : _o(t.parentNode));
  return s;
}, ow = function(t) {
  var i, a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "contenteditable");
  return a === "" || a === "true";
}, $b = function(t, i, a) {
  if (_o(t))
    return [];
  var n = Array.prototype.slice.apply(t.querySelectorAll(mo));
  return i && sr.call(t, mo) && n.unshift(t), n = n.filter(a), n;
}, wo = function(t, i, a) {
  for (var n = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!_o(s, !1))
      if (s.tagName === "SLOT") {
        var c = s.assignedElements(), d = c.length ? c : s.children, _ = wo(d, !0, a);
        a.flatten ? n.push.apply(n, _) : n.push({
          scopeParent: s,
          candidates: _
        });
      } else {
        var v = sr.call(s, mo);
        v && a.filter(s) && (i || !t.includes(s)) && n.push(s);
        var y = s.shadowRoot || // check for an undisclosed shadow
        typeof a.getShadowRoot == "function" && a.getShadowRoot(s), m = !_o(y, !1) && (!a.shadowRootFilter || a.shadowRootFilter(s));
        if (y && m) {
          var k = wo(y === !0 ? s.children : y.children, !0, a);
          a.flatten ? n.push.apply(n, k) : n.push({
            scopeParent: s,
            candidates: k
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return n;
}, xb = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, er = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || ow(t)) && !xb(t) ? 0 : t.tabIndex;
}, uw = function(t, i) {
  var a = er(t);
  return a < 0 && i && !xb(t) ? 0 : a;
}, cw = function(t, i) {
  return t.tabIndex === i.tabIndex ? t.documentOrder - i.documentOrder : t.tabIndex - i.tabIndex;
}, Ob = function(t) {
  return t.tagName === "INPUT";
}, dw = function(t) {
  return Ob(t) && t.type === "hidden";
}, fw = function(t) {
  var i = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(a) {
    return a.tagName === "SUMMARY";
  });
  return i;
}, hw = function(t, i) {
  for (var a = 0; a < t.length; a++)
    if (t[a].checked && t[a].form === i)
      return t[a];
}, pw = function(t) {
  if (!t.name)
    return !0;
  var i = t.form || yo(t), a = function(c) {
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
  var r = hw(n, t.form);
  return !r || r === t;
}, vw = function(t) {
  return Ob(t) && t.type === "radio";
}, bw = function(t) {
  return vw(t) && !pw(t);
}, gw = function(t) {
  var i, a = t && yo(t), n = (i = a) === null || i === void 0 ? void 0 : i.host, r = !1;
  if (a && a !== t) {
    var s, c, d;
    for (r = !!((s = n) !== null && s !== void 0 && (c = s.ownerDocument) !== null && c !== void 0 && c.contains(n) || t != null && (d = t.ownerDocument) !== null && d !== void 0 && d.contains(t)); !r && n; ) {
      var _, v, y;
      a = yo(n), n = (_ = a) === null || _ === void 0 ? void 0 : _.host, r = !!((v = n) !== null && v !== void 0 && (y = v.ownerDocument) !== null && y !== void 0 && y.contains(n));
    }
  }
  return r;
}, ap = function(t) {
  var i = t.getBoundingClientRect(), a = i.width, n = i.height;
  return a === 0 && n === 0;
}, mw = function(t, i) {
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
  var d = sr.call(t, "details>summary:first-of-type"), _ = d ? t.parentElement : t;
  if (sr.call(_, "details:not([open]) *"))
    return !0;
  if (!a || a === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  a === "full-native" || a === "legacy-full") {
    if (typeof n == "function") {
      for (var v = t; t; ) {
        var y = t.parentElement, m = yo(t);
        if (y && !y.shadowRoot && n(y) === !0)
          return ap(t);
        t.assignedSlot ? t = t.assignedSlot : !y && m !== t.ownerDocument ? t = m.host : t = y;
      }
      t = v;
    }
    if (gw(t))
      return !t.getClientRects().length;
    if (a !== "legacy-full")
      return !0;
  } else if (a === "non-zero-area")
    return ap(t);
  return !1;
}, yw = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var i = t.parentElement; i; ) {
      if (i.tagName === "FIELDSET" && i.disabled) {
        for (var a = 0; a < i.children.length; a++) {
          var n = i.children.item(a);
          if (n.tagName === "LEGEND")
            return sr.call(i, "fieldset[disabled] *") ? !0 : !n.contains(t);
        }
        return !0;
      }
      i = i.parentElement;
    }
  return !1;
}, ko = function(t, i) {
  return !(i.disabled || dw(i) || mw(i, t) || // For a details element with a summary, the summary element gets the focus
  fw(i) || yw(i));
}, Zc = function(t, i) {
  return !(bw(i) || er(i) < 0 || !ko(t, i));
}, _w = function(t) {
  var i = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(i) || i >= 0);
}, Nb = function(t) {
  var i = [], a = [];
  return t.forEach(function(n, r) {
    var s = !!n.scopeParent, c = s ? n.scopeParent : n, d = uw(c, s), _ = s ? Nb(n.candidates) : c;
    d === 0 ? s ? i.push.apply(i, _) : i.push(c) : a.push({
      documentOrder: r,
      tabIndex: d,
      item: n,
      isScope: s,
      content: _
    });
  }), a.sort(cw).reduce(function(n, r) {
    return r.isScope ? n.push.apply(n, r.content) : n.push(r.content), n;
  }, []).concat(i);
}, ww = function(t, i) {
  i = i || {};
  var a;
  return i.getShadowRoot ? a = wo([t], i.includeContainer, {
    filter: Zc.bind(null, i),
    flatten: !1,
    getShadowRoot: i.getShadowRoot,
    shadowRootFilter: _w
  }) : a = $b(t, i.includeContainer, Zc.bind(null, i)), Nb(a);
}, kw = function(t, i) {
  i = i || {};
  var a;
  return i.getShadowRoot ? a = wo([t], i.includeContainer, {
    filter: ko.bind(null, i),
    flatten: !0,
    getShadowRoot: i.getShadowRoot
  }) : a = $b(t, i.includeContainer, ko.bind(null, i)), a;
}, kr = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return sr.call(t, mo) === !1 ? !1 : Zc(i, t);
}, Sw = /* @__PURE__ */ Ab.concat("iframe:not([inert]):not([inert] *)").join(","), Sc = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return sr.call(t, Sw) === !1 ? !1 : ko(i, t);
};
function Xc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, a = Array(t); i < t; i++) a[i] = e[i];
  return a;
}
function Cw(e) {
  if (Array.isArray(e)) return Xc(e);
}
function np(e, t) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!i) {
    if (Array.isArray(e) || (i = Rb(e)) || t) {
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
function Tw(e, t, i) {
  return (t = Ow(t)) in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}
function Aw(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ew() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rp(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), i.push.apply(i, a);
  }
  return i;
}
function lp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rp(Object(i), !0).forEach(function(a) {
      Tw(e, a, i[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : rp(Object(i)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(i, a));
    });
  }
  return e;
}
function $w(e) {
  return Cw(e) || Aw(e) || Rb(e) || Ew();
}
function xw(e, t) {
  if (typeof e != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var a = i.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ow(e) {
  var t = xw(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Rb(e, t) {
  if (e) {
    if (typeof e == "string") return Xc(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Xc(e, t) : void 0;
  }
}
var La = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, i) {
    var a = La.getActiveTrap(t);
    i !== a && La.pauseTrap(t);
    var n = t.indexOf(i);
    n === -1 || t.splice(n, 1), t.push(i);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, i) {
    var a = t.indexOf(i);
    a !== -1 && t.splice(a, 1), La.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var i = La.getActiveTrap(t);
    i?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var i = La.getActiveTrap(t);
    i && !i._isManuallyPaused() && i._setPausedState(!1);
  }
}, Nw = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Rw = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Al = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, Iw = function(t) {
  return Al(t) && !t.shiftKey;
}, Lw = function(t) {
  return Al(t) && t.shiftKey;
}, sp = function(t) {
  return setTimeout(t, 0);
}, hl = function(t) {
  for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
    a[n - 1] = arguments[n];
  return typeof t == "function" ? t.apply(void 0, a) : t;
}, Hs = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Pw = [], Md = function(t, i) {
  var a = i?.document || document, n = i?.trapStack || Pw, r = lp({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: Iw,
    isKeyBackward: Lw
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
  }, c, d = function(L, G, X) {
    return L && L[G] !== void 0 ? L[G] : r[X || G];
  }, _ = function(L, G) {
    var X = typeof G?.composedPath == "function" ? G.composedPath() : void 0;
    return s.containerGroups.findIndex(function(ae) {
      var J = ae.container, ve = ae.tabbableNodes;
      return J.contains(L) || X?.includes(J) || ve.find(function(Ae) {
        return Ae === L;
      });
    });
  }, v = function(L) {
    var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = G.hasFallback, ae = X === void 0 ? !1 : X, J = G.params, ve = J === void 0 ? [] : J, Ae = r[L];
    if (typeof Ae == "function" && (Ae = Ae.apply(void 0, $w(ve))), Ae === !0 && (Ae = void 0), !Ae) {
      if (Ae === void 0 || Ae === !1)
        return Ae;
      throw new Error("`".concat(L, "` was specified but was not a node, or did not return a node"));
    }
    var Le = Ae;
    if (typeof Ae == "string") {
      try {
        Le = a.querySelector(Ae);
      } catch (Oe) {
        throw new Error("`".concat(L, '` appears to be an invalid selector; error="').concat(Oe.message, '"'));
      }
      if (!Le && !ae)
        throw new Error("`".concat(L, "` as selector refers to no known node"));
    }
    return Le;
  }, y = function(L) {
    var G = L.activeElement;
    return G ? G.shadowRoot && G.shadowRoot.activeElement !== null ? y(G.shadowRoot) : G : null;
  }, m = function() {
    var L = v("initialFocus", {
      hasFallback: !0
    });
    if (L === !1)
      return !1;
    if (L === void 0 || L && !Sc(L, r.tabbableOptions)) {
      var G = y(a);
      if (_(G) >= 0)
        L = G;
      else {
        var X = s.tabbableGroups[0], ae = X && X.firstTabbableNode;
        L = ae || v("fallbackFocus");
      }
    } else L === null && (L = v("fallbackFocus"));
    if (!L)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return L;
  }, k = function() {
    if (s.containerGroups = s.containers.map(function(L) {
      var G = ww(L, r.tabbableOptions), X = kw(L, r.tabbableOptions), ae = G.length > 0 ? G[0] : void 0, J = G.length > 0 ? G[G.length - 1] : void 0, ve = X.find(function(Oe) {
        return kr(Oe);
      }), Ae = X.slice().reverse().find(function(Oe) {
        return kr(Oe);
      }), Le = !!G.find(function(Oe) {
        return er(Oe) > 0;
      });
      return {
        container: L,
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
        firstDomTabbableNode: ve,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: Ae,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Me) {
          var Xe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, ct = G.indexOf(Me);
          return ct < 0 ? Xe ? X.slice(X.indexOf(Me) + 1).find(function(we) {
            return kr(we);
          }) : X.slice(0, X.indexOf(Me)).reverse().find(function(we) {
            return kr(we);
          }) : G[ct + (Xe ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(L) {
      return L.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !v("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(L) {
      return L.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, C = function(L) {
    if (L !== !1 && L !== y(document)) {
      if (!L || !L.focus) {
        C(m());
        return;
      }
      L.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = L, Nw(L) && L.select();
    }
  }, S = function(L) {
    var G = v("setReturnFocus", {
      params: [L]
    });
    return G || (G === !1 ? !1 : L);
  }, $ = function(L) {
    var G = L.target, X = L.event, ae = L.isBackward, J = ae === void 0 ? !1 : ae;
    G = G || Hs(X), k();
    var ve = null;
    if (s.tabbableGroups.length > 0) {
      var Ae = _(G, X), Le = Ae >= 0 ? s.containerGroups[Ae] : void 0;
      if (Ae < 0)
        J ? ve = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : ve = s.tabbableGroups[0].firstTabbableNode;
      else if (J) {
        var Oe = s.tabbableGroups.findIndex(function(V) {
          var ne = V.firstTabbableNode;
          return G === ne;
        });
        if (Oe < 0 && (Le.container === G || Sc(G, r.tabbableOptions) && !kr(G, r.tabbableOptions) && !Le.nextTabbableNode(G, !1)) && (Oe = Ae), Oe >= 0) {
          var Me = Oe === 0 ? s.tabbableGroups.length - 1 : Oe - 1, Xe = s.tabbableGroups[Me];
          ve = er(G) >= 0 ? Xe.lastTabbableNode : Xe.lastDomTabbableNode;
        } else Al(X) || (ve = Le.nextTabbableNode(G, !1));
      } else {
        var ct = s.tabbableGroups.findIndex(function(V) {
          var ne = V.lastTabbableNode;
          return G === ne;
        });
        if (ct < 0 && (Le.container === G || Sc(G, r.tabbableOptions) && !kr(G, r.tabbableOptions) && !Le.nextTabbableNode(G)) && (ct = Ae), ct >= 0) {
          var we = ct === s.tabbableGroups.length - 1 ? 0 : ct + 1, be = s.tabbableGroups[we];
          ve = er(G) >= 0 ? be.firstTabbableNode : be.firstDomTabbableNode;
        } else Al(X) || (ve = Le.nextTabbableNode(G));
      }
    } else
      ve = v("fallbackFocus");
    return ve;
  }, R = function(L) {
    var G = Hs(L);
    if (!(_(G, L) >= 0)) {
      if (hl(r.clickOutsideDeactivates, L)) {
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
      hl(r.allowOutsideClick, L) || L.preventDefault();
    }
  }, N = function(L) {
    var G = Hs(L), X = _(G, L) >= 0;
    if (X || G instanceof Document)
      X && (s.mostRecentlyFocusedNode = G);
    else {
      L.stopImmediatePropagation();
      var ae, J = !0;
      if (s.mostRecentlyFocusedNode)
        if (er(s.mostRecentlyFocusedNode) > 0) {
          var ve = _(s.mostRecentlyFocusedNode), Ae = s.containerGroups[ve].tabbableNodes;
          if (Ae.length > 0) {
            var Le = Ae.findIndex(function(Oe) {
              return Oe === s.mostRecentlyFocusedNode;
            });
            Le >= 0 && (r.isKeyForward(s.recentNavEvent) ? Le + 1 < Ae.length && (ae = Ae[Le + 1], J = !1) : Le - 1 >= 0 && (ae = Ae[Le - 1], J = !1));
          }
        } else
          s.containerGroups.some(function(Oe) {
            return Oe.tabbableNodes.some(function(Me) {
              return er(Me) > 0;
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
  }, P = function(L) {
    var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = L;
    var X = $({
      event: L,
      isBackward: G
    });
    X && (Al(L) && L.preventDefault(), C(X));
  }, I = function(L) {
    (r.isKeyForward(L) || r.isKeyBackward(L)) && P(L, r.isKeyBackward(L));
  }, he = function(L) {
    Rw(L) && hl(r.escapeDeactivates, L) !== !1 && (L.preventDefault(), c.deactivate());
  }, Q = function(L) {
    var G = Hs(L);
    _(G, L) >= 0 || hl(r.clickOutsideDeactivates, L) || hl(r.allowOutsideClick, L) || (L.preventDefault(), L.stopImmediatePropagation());
  }, x = function() {
    if (s.active) {
      La.activateTrap(n, c);
      var L;
      return r.delayInitialFocus ? L = new Promise(function(G) {
        s.delayInitialFocusTimer = sp(function() {
          C(m()), G();
        });
      }) : C(m()), a.addEventListener("focusin", N, !0), a.addEventListener("mousedown", R, {
        capture: !0,
        passive: !1
      }), a.addEventListener("touchstart", R, {
        capture: !0,
        passive: !1
      }), a.addEventListener("click", Q, {
        capture: !0,
        passive: !1
      }), a.addEventListener("keydown", I, {
        capture: !0,
        passive: !1
      }), a.addEventListener("keydown", he), L;
    }
  }, B = function(L) {
    s.active && !s.paused && c._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var G = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set(), ae = np(L), J;
    try {
      for (ae.s(); !(J = ae.n()).done; ) {
        var ve = J.value;
        G.add(ve);
        for (var Ae = typeof ShadowRoot < "u" && ve.getRootNode() instanceof ShadowRoot, Le = ve; Le; ) {
          G.add(Le);
          var Oe = Le.parentElement, Me = [];
          Oe ? Me = Oe.children : !Oe && Ae && (Me = Le.getRootNode().children, Oe = Le.getRootNode().host, Ae = typeof ShadowRoot < "u" && Oe.getRootNode() instanceof ShadowRoot);
          var Xe = np(Me), ct;
          try {
            for (Xe.s(); !(ct = Xe.n()).done; ) {
              var we = ct.value;
              X.add(we);
            }
          } catch (be) {
            Xe.e(be);
          } finally {
            Xe.f();
          }
          Le = Oe;
        }
      }
    } catch (be) {
      ae.e(be);
    } finally {
      ae.f();
    }
    G.forEach(function(be) {
      X.delete(be);
    }), s.adjacentElements = X;
  }, W = function() {
    if (s.active)
      return a.removeEventListener("focusin", N, !0), a.removeEventListener("mousedown", R, !0), a.removeEventListener("touchstart", R, !0), a.removeEventListener("click", Q, !0), a.removeEventListener("keydown", I, !0), a.removeEventListener("keydown", he), c;
  }, Z = function(L) {
    var G = s.mostRecentlyFocusedNode;
    if (G) {
      var X = L.some(function(J) {
        var ve = Array.from(J.removedNodes);
        return ve.some(function(Ae) {
          return Ae === G || typeof Ae.contains == "function" && Ae.contains(G);
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
  }, le = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(Z) : void 0, H = function() {
    le && (le.disconnect(), s.active && !s.paused && s.containers.map(function(L) {
      le.observe(L, {
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
    activate: function(L) {
      if (s.active)
        return this;
      var G = d(L, "onActivate"), X = d(L, "onPostActivate"), ae = d(L, "checkCanFocusTrap"), J = La.getActiveTrap(n), ve = !1;
      if (J && !J.paused) {
        var Ae;
        (Ae = J._setSubtreeIsolation) === null || Ae === void 0 || Ae.call(J, !1), ve = !0;
      }
      try {
        ae || k(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = y(a), G?.({
          trap: c
        });
        var Le = function() {
          ae && k();
          var Xe = function() {
            c._setSubtreeIsolation(!0), H(), X?.({
              trap: c
            });
          }, ct = x();
          ct ? ct.then(Xe) : Xe();
        };
        if (ae)
          return ae(s.containers.concat()).then(Le, Le), this;
        Le();
      } catch (Me) {
        if (J === La.getActiveTrap(n) && ve) {
          var Oe;
          (Oe = J._setSubtreeIsolation) === null || Oe === void 0 || Oe.call(J, !0);
        }
        throw Me;
      }
      return this;
    },
    deactivate: function(L) {
      if (!s.active)
        return this;
      var G = lp({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, L);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || c._setSubtreeIsolation(!1), s.alreadySilent.clear(), W(), s.active = !1, s.paused = !1, H(), La.deactivateTrap(n, c);
      var X = d(G, "onDeactivate"), ae = d(G, "onPostDeactivate"), J = d(G, "checkCanReturnFocus"), ve = d(G, "delayReturnFocus"), Ae = d(G, "returnFocus", "returnFocusOnDeactivate");
      X?.({
        trap: c
      });
      var Le = function() {
        Ae && C(S(s.nodeFocusedBeforeActivation)), ae?.({
          trap: c
        });
      }, Oe = function() {
        ve && Ae ? sp(Le) : Le();
      };
      return Ae && J ? (J(S(s.nodeFocusedBeforeActivation)).then(Oe, Oe), this) : (Oe(), this);
    },
    pause: function(L) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, L)) : this;
    },
    unpause: function(L) {
      return s.active ? (s.manuallyPaused = !1, n[n.length - 1] !== this ? this : this._setPausedState(!1, L)) : this;
    },
    updateContainerElements: function(L) {
      var G = [].concat(L).filter(Boolean);
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
      value: function(L, G) {
        if (s.paused === L)
          return this;
        if (s.paused = L, L) {
          var X = d(G, "onPause"), ae = d(G, "onPostPause");
          X?.({
            trap: c
          }), W(), c._setSubtreeIsolation(!1), H(), ae?.({
            trap: c
          });
        } else {
          var J = d(G, "onUnpause"), ve = d(G, "onPostUnpause");
          J?.({
            trap: c
          });
          var Ae = function() {
            k();
            var Oe = function() {
              c._setSubtreeIsolation(!0), H(), ve?.({
                trap: c
              });
            }, Me = x();
            Me ? Me.then(Oe) : Oe();
          };
          Ae();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(L) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(G) {
          var X;
          L ? r.isolateSubtrees === "aria-hidden" ? ((G.ariaHidden === "true" || ((X = G.getAttribute("aria-hidden")) === null || X === void 0 ? void 0 : X.toLowerCase()) === "true") && s.alreadySilent.add(G), G.setAttribute("aria-hidden", "true")) : ((G.inert || G.hasAttribute("inert")) && s.alreadySilent.add(G), G.setAttribute("inert", !0)) : s.alreadySilent.has(G) || (r.isolateSubtrees === "aria-hidden" ? G.removeAttribute("aria-hidden") : G.removeAttribute("inert"));
        });
      }
    }
  }), c.updateContainerElements(t), c;
};
const Ib = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), Dw = /* @__PURE__ */ qt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [Ib]: {
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
function Fw(e, t, i, a, n, r) {
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
      style: hi(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Ve(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Lb = /* @__PURE__ */ ut(Dw, [["render", Fw], ["__scopeId", "data-v-3e73e246"]]);
function Yl() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function Mw() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...Yl()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === Yl().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const Pb = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Db = /* @__PURE__ */ Symbol.for("NcContent:selector");
An(k0);
const Uw = { class: "app-navigation-toggle-wrapper" }, zw = /* @__PURE__ */ qt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Rv(e, "open"), i = j(() => t.value ? Ft("Close navigation") : Ft("Open navigation"));
    return (a, n) => (h(), p("div", Uw, [
      fe(u(ca), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": i.value,
        title: i.value,
        variant: "tertiary",
        onClick: n[0] || (n[0] = (r) => t.value = !t.value)
      }, {
        icon: Se(() => [
          fe(mu, {
            path: u(p0),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), jw = /* @__PURE__ */ ut(zw, [["__scopeId", "data-v-e8177cc7"]]), Bw = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], Hw = { class: "app-navigation__search" }, Vw = /* @__PURE__ */ qt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let i;
    const a = Jt(
      Pb,
      () => w1(),
      !1
    ), n = Ey("appNavigationContainer"), r = us(), s = /* @__PURE__ */ U(!r.value), c = j(() => r.value && s.value);
    gy(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), Ke(r, () => {
      s.value = !r.value;
    }), Ke(c, () => {
      v();
    }), Ct(() => {
      a(!0), bb("toggle-navigation", _), Ma("navigation-toggled", {
        open: s.value
      }), i = Md(n.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (i.deactivate({ returnFocus: !1 }), d(!1)), !1),
        fallbackFocus: n.value,
        trapStack: Yl(),
        escapeDeactivates: !1
      }), v();
    }), rs(() => {
      a(!1), i0("toggle-navigation", _), i.deactivate();
    });
    function d(m) {
      if (s.value === m) {
        Ma("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = m === void 0 ? !s.value : m;
      const k = getComputedStyle(document.body), C = parseInt(k.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        Ma("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * C);
    }
    function _({ open: m }) {
      return d(m);
    }
    function v() {
      c.value ? i.activate() : i.deactivate();
    }
    function y() {
      r.value && d(!1);
    }
    return (m, k) => (h(), p("div", {
      ref: "appNavigationContainer",
      class: Ee(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": u(En)
      }])
    }, [
      l("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: ft(y, ["esc"])
      }, [
        l("div", Hw, [
          Ve(m.$slots, "search", {}, void 0, !0)
        ]),
        l("div", {
          class: Ee(["app-navigation__body", { "app-navigation__body--no-list": !m.$slots.list }])
        }, [
          Ve(m.$slots, "default", {}, void 0, !0)
        ], 2),
        m.$slots.list ? (h(), De(Lb, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Se(() => [
            Ve(m.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : A("", !0),
        Ve(m.$slots, "footer", {}, void 0, !0)
      ], 40, Bw),
      fe(jw, {
        open: s.value,
        "onUpdate:open": d
      }, null, 8, ["open"])
    ], 2));
  }
}), qw = /* @__PURE__ */ ut(Vw, [["__scopeId", "data-v-37908cd4"]]), Gw = {
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
}, Kw = ["aria-hidden", "aria-label"], Ww = ["fill", "width", "height"], Yw = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, Zw = { key: 0 };
function Xw(e, t, i, a, n, r) {
  return h(), p("span", ii(e.$attrs, {
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
      l("path", Yw, [
        i.title ? (h(), p("title", Zw, o(i.title), 1)) : A("", !0)
      ])
    ], 8, Ww))
  ], 16, Kw);
}
const Jw = /* @__PURE__ */ ut(Gw, [["render", Xw]]), Qw = {
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
}, ek = ["aria-hidden", "aria-label"], tk = ["fill", "width", "height"], ik = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, ak = { key: 0 };
function nk(e, t, i, a, n, r) {
  return h(), p("span", ii(e.$attrs, {
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
      l("path", ik, [
        i.title ? (h(), p("title", ak, o(i.title), 1)) : A("", !0)
      ])
    ], 8, tk))
  ], 16, ek);
}
const rk = /* @__PURE__ */ ut(Qw, [["render", nk]]), lk = {
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
}, sk = ["aria-hidden", "aria-label"], ok = ["fill", "width", "height"], uk = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, ck = { key: 0 };
function dk(e, t, i, a, n, r) {
  return h(), p("span", ii(e.$attrs, {
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
      l("path", uk, [
        i.title ? (h(), p("title", ck, o(i.title), 1)) : A("", !0)
      ])
    ], 8, ok))
  ], 16, sk);
}
const Fb = /* @__PURE__ */ ut(lk, [["render", dk]]), fk = {
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
}, hk = ["aria-hidden", "aria-label"], pk = ["fill", "width", "height"], vk = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, bk = { key: 0 };
function gk(e, t, i, a, n, r) {
  return h(), p("span", ii(e.$attrs, {
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
      l("path", vk, [
        i.title ? (h(), p("title", bk, o(i.title), 1)) : A("", !0)
      ])
    ], 8, pk))
  ], 16, hk);
}
const Mb = /* @__PURE__ */ ut(fk, [["render", gk]]);
An(_0);
const mk = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Fb,
    IconClose: Mb,
    NcButton: ca
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
    return { isLegacy34: En };
  },
  data() {
    return {
      labelConfirm: Ft("Confirm changes"),
      labelCancel: Ft("Cancel changes")
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
}, yk = ["placeholder"];
function _k(e, t, i, a, n, r) {
  const s = Je("IconArrowRight"), c = Je("NcButton"), d = Je("IconClose");
  return h(), p("div", {
    class: Ee(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": a.isLegacy34 }])
  }, [
    l("form", {
      onSubmit: t[1] || (t[1] = Ce((..._) => r.confirm && r.confirm(..._), ["prevent"])),
      onKeydown: t[2] || (t[2] = ft(Ce((..._) => r.cancel && r.cancel(..._), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Ce(() => {
      }, ["stop", "prevent"]))
    }, [
      ye(l("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (_) => r.valueModel = _),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: i.placeholder
      }, null, 8, yk), [
        [ze, r.valueModel]
      ]),
      fe(c, {
        "aria-label": n.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Ce(r.confirm, ["stop", "prevent"])
      }, {
        icon: Se(() => [
          fe(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      fe(c, {
        "aria-label": n.labelCancel,
        type: "reset",
        variant: i.primary ? "primary" : "tertiary",
        onClick: Ce(r.cancel, ["stop", "prevent"])
      }, {
        icon: Se(() => [
          fe(d, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const wk = /* @__PURE__ */ ut(mk, [["render", _k], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function yu() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Ud = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Ub = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), kk = {
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
}, zb = {
  mixins: [kk],
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
      from: Ub
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
}, Sk = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: mu
  },
  mixins: [zb],
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
      mdiCheck: f0,
      mdiChevronRight: h0
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
}, Ck = ["role"], Tk = ["aria-label", "disabled", "title", "type"], Ak = { class: "action-button__longtext-wrapper" }, Ek = {
  key: 0,
  class: "action-button__name"
}, $k = ["textContent"], xk = {
  key: 2,
  class: "action-button__text"
}, Ok = ["textContent"], Nk = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function Rk(e, t, i, a, n, r) {
  const s = Je("NcIconSvgWrapper");
  return h(), p("li", {
    class: Ee(["action", { "action--disabled": i.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("button", ii({
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
      Ve(e.$slots, "icon", {}, () => [
        l("span", {
          class: Ee([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: hi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", Ak, [
        e.name ? (h(), p("strong", Ek, o(e.name), 1)) : A("", !0),
        e.isLongText ? (h(), p("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: o(e.text)
        }, null, 8, $k)) : (h(), p("span", xk, o(e.text), 1)),
        i.description ? (h(), p("span", {
          key: 3,
          class: "action-button__description",
          textContent: o(i.description)
        }, null, 8, Ok)) : A("", !0)
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
      }, null, 8, ["path"])) : r.isChecked === !1 ? (h(), p("span", Nk)) : A("", !0),
      A("", !0)
    ], 16, Tk)
  ], 10, Ck);
}
const Ik = /* @__PURE__ */ ut(Sk, [["render", Rk], ["__scopeId", "data-v-6c2daf4e"]]);
function Lk(e, t = {}) {
  const i = Mw();
  Ke(e, () => {
    Da(t.disabled) || (Da(e) ? i.pause() : i.unpause());
  }), rs(() => {
    i.unpause();
  });
}
const Pk = ["top", "right", "bottom", "left"], op = ["start", "end"], up = /* @__PURE__ */ Pk.reduce((e, t) => e.concat(t, t + "-" + op[0], t + "-" + op[1]), []), Zl = Math.min, Jc = Math.max, Dk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jb(e, t, i) {
  return Jc(e, Zl(t, i));
}
function or(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Va(e) {
  return e.split("-")[0];
}
function qi(e) {
  return e.split("-")[1];
}
function Bb(e) {
  return e === "x" ? "y" : "x";
}
function zd(e) {
  return e === "y" ? "height" : "width";
}
function Pa(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function jd(e) {
  return Bb(Pa(e));
}
function Hb(e, t, i) {
  i === void 0 && (i = !1);
  const a = qi(e), n = jd(e), r = zd(n);
  let s = n === "x" ? a === (i ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = Co(s)), [s, Co(s)];
}
function Fk(e) {
  const t = Co(e);
  return [So(e), t, So(t)];
}
function So(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const cp = ["left", "right"], dp = ["right", "left"], Mk = ["top", "bottom"], Uk = ["bottom", "top"];
function zk(e, t, i) {
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? dp : cp : t ? cp : dp;
    case "left":
    case "right":
      return t ? Mk : Uk;
    default:
      return [];
  }
}
function jk(e, t, i, a) {
  const n = qi(e);
  let r = zk(Va(e), i === "start", a);
  return n && (r = r.map((s) => s + "-" + n), t && (r = r.concat(r.map(So)))), r;
}
function Co(e) {
  const t = Va(e);
  return Dk[t] + e.slice(t.length);
}
function Bk(e) {
  var t, i, a, n;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (i = e.right) != null ? i : 0,
    bottom: (a = e.bottom) != null ? a : 0,
    left: (n = e.left) != null ? n : 0
  };
}
function Vb(e) {
  return typeof e != "number" ? Bk(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function El(e) {
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
function fp(e, t, i) {
  let {
    reference: a,
    floating: n
  } = e;
  const r = Pa(t), s = jd(t), c = zd(s), d = Va(t), _ = r === "y", v = a.x + a.width / 2 - n.width / 2, y = a.y + a.height / 2 - n.height / 2, m = a[c] / 2 - n[c] / 2;
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
        y
      };
      break;
    case "left":
      k = {
        x: a.x - n.width,
        y
      };
      break;
    default:
      k = {
        x: a.x,
        y: a.y
      };
  }
  const C = qi(t);
  return C && (k[s] += m * (C === "end" ? 1 : -1) * (i && _ ? -1 : 1)), k;
}
async function Hk(e, t) {
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
    boundary: _ = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: y = "floating",
    altBoundary: m = !1,
    padding: k = 0
  } = or(t, e), C = Vb(k), $ = c[m ? y === "floating" ? "reference" : "floating" : y], R = El(await r.getClippingRect({
    element: (i = await (r.isElement == null ? void 0 : r.isElement($))) == null || i ? $ : $.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: _,
    rootBoundary: v,
    strategy: d
  })), N = y === "floating" ? {
    x: a,
    y: n,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, P = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), I = await (r.isElement == null ? void 0 : r.isElement(P)) && await (r.getScale == null ? void 0 : r.getScale(P)) || {
    x: 1,
    y: 1
  }, he = El(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: N,
    offsetParent: P,
    strategy: d
  }) : N);
  return {
    top: (R.top - he.top + C.top) / I.y,
    bottom: (he.bottom - R.bottom + C.bottom) / I.y,
    left: (R.left - he.left + C.left) / I.x,
    right: (he.right - R.right + C.right) / I.x
  };
}
const Vk = 50, qk = async (e, t, i) => {
  const {
    placement: a = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: s
  } = i, c = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Hk
  }, d = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let _ = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: n
  }), {
    x: v,
    y
  } = fp(_, a, d), m = a, k = 0;
  const C = {};
  for (let S = 0; S < r.length; S++) {
    const $ = r[S];
    if (!$)
      continue;
    const {
      name: R,
      fn: N
    } = $, {
      x: P,
      y: I,
      data: he,
      reset: Q
    } = await N({
      x: v,
      y,
      initialPlacement: a,
      placement: m,
      strategy: n,
      middlewareData: C,
      rects: _,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    v = P ?? v, y = I ?? y, C[R] = {
      ...C[R],
      ...he
    }, Q && k < Vk && (k++, typeof Q == "object" && (Q.placement && (m = Q.placement), Q.rects && (_ = Q.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: n
    }) : Q.rects), {
      x: v,
      y
    } = fp(_, m, d)), S = -1);
  }
  return {
    x: v,
    y,
    placement: m,
    strategy: n,
    middlewareData: C
  };
}, Gk = (e) => ({
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
      element: _,
      padding: v = 0
    } = or(e, t) || {};
    if (_ == null)
      return {};
    const y = Vb(v), m = {
      x: i,
      y: a
    }, k = jd(n), C = zd(k), S = await s.getDimensions(_), $ = k === "y", R = $ ? "top" : "left", N = $ ? "bottom" : "right", P = $ ? "clientHeight" : "clientWidth", I = r.reference[C] + r.reference[k] - m[k] - r.floating[C], he = m[k] - r.reference[k], Q = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(_));
    let x = Q ? Q[P] : 0;
    (!x || !await (s.isElement == null ? void 0 : s.isElement(Q))) && (x = c.floating[P] || r.floating[C]);
    const B = I / 2 - he / 2, W = x / 2 - S[C] / 2 - 1, Z = Zl(y[R], W), le = Zl(y[N], W), H = x - S[C] - le, Y = x / 2 - S[C] / 2 + B, L = jb(Z, Y, H), G = !d.arrow && qi(n) != null && Y !== L && r.reference[C] / 2 - (Y < Z ? Z : le) - S[C] / 2 < 0, X = G ? Y < Z ? Y - Z : Y - H : 0;
    return {
      [k]: m[k] + X,
      data: {
        [k]: L,
        centerOffset: Y - L - X,
        ...G && {
          alignmentOffset: X
        }
      },
      reset: G
    };
  }
});
function Kk(e, t, i) {
  return (e ? [...i.filter((n) => qi(n) === e), ...i.filter((n) => qi(n) !== e)] : i.filter((n) => Va(n) === n)).filter((n) => e ? qi(n) === e || (t ? So(n) !== n : !1) : !0);
}
const Wk = function(e) {
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
        elements: _
      } = t, {
        crossAxis: v = !1,
        alignment: y,
        allowedPlacements: m = up,
        autoAlignment: k = !0,
        ...C
      } = or(e, t), S = y !== void 0 || m === up ? Kk(y || null, k, m) : m, $ = ((i = s.autoPlacement) == null ? void 0 : i.index) || 0, R = S[$];
      if (R == null)
        return {};
      if (c !== R)
        return {
          reset: {
            placement: S[0]
          }
        };
      const N = await d.detectOverflow(t, C), P = Hb(R, r, await (d.isRTL == null ? void 0 : d.isRTL(_.floating))), I = [N[Va(R)], N[P[0]], N[P[1]]], he = [...((a = s.autoPlacement) == null ? void 0 : a.overflows) || [], {
        placement: R,
        overflows: I
      }], Q = S[$ + 1];
      if (Q)
        return {
          data: {
            index: $ + 1,
            overflows: he
          },
          reset: {
            placement: Q
          }
        };
      const x = he.map((Z) => {
        const le = qi(Z.placement);
        return [Z.placement, le && v ? (
          // Check along the mainAxis and main crossAxis side.
          Z.overflows.slice(0, 2).reduce((H, Y) => H + Y, 0)
        ) : (
          // Check only the mainAxis.
          Z.overflows[0]
        ), Z.overflows];
      }).sort((Z, le) => Z[1] - le[1]), W = ((n = x.filter((Z) => Z[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        qi(Z[0]) ? 2 : 3
      ).every((le) => le <= 0))[0]) == null ? void 0 : n[0]) || x[0][0];
      return W !== c ? {
        data: {
          index: $ + 1,
          overflows: he
        },
        reset: {
          placement: W
        }
      } : {};
    }
  };
}, Yk = function(e) {
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
        elements: _
      } = t, {
        mainAxis: v = !0,
        crossAxis: y = !0,
        fallbackPlacements: m,
        fallbackStrategy: k = "bestFit",
        fallbackAxisSideDirection: C = "none",
        flipAlignment: S = !0,
        ...$
      } = or(e, t);
      if ((i = r.arrow) != null && i.alignmentOffset)
        return {};
      const R = Va(n), N = Pa(c), P = Va(c) === c, I = await (d.isRTL == null ? void 0 : d.isRTL(_.floating)), he = m || (P || !S ? [Co(c)] : Fk(c)), Q = C !== "none";
      !m && Q && he.push(...jk(c, S, C, I));
      const x = [c, ...he], B = await d.detectOverflow(t, $), W = [];
      let Z = ((a = r.flip) == null ? void 0 : a.overflows) || [];
      if (v && W.push(B[R]), y) {
        const L = Hb(n, s, I);
        W.push(B[L[0]], B[L[1]]);
      }
      if (Z = [...Z, {
        placement: n,
        overflows: W
      }], !W.every((L) => L <= 0)) {
        var le, H;
        const L = (((le = r.flip) == null ? void 0 : le.index) || 0) + 1, G = x[L];
        if (G && (!(y === "alignment" ? N !== Pa(G) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Z.every((J) => Pa(J.placement) === N ? J.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
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
                  const ve = Pa(J.placement);
                  return ve === N || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ve === "y";
                }
                return !0;
              }).map((J) => [J.placement, J.overflows.filter((ve) => ve > 0).reduce((ve, Ae) => ve + Ae, 0)]).sort((J, ve) => J[1] - ve[1])[0]) == null ? void 0 : Y[0];
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
}, Zk = /* @__PURE__ */ new Set(["left", "top"]);
async function Xk(e, t) {
  const {
    placement: i,
    platform: a,
    elements: n
  } = e, r = await (a.isRTL == null ? void 0 : a.isRTL(n.floating)), s = Va(i), c = qi(i), d = Pa(i) === "y", _ = Zk.has(s) ? -1 : 1, v = r && d ? -1 : 1, y = or(t, e);
  let {
    mainAxis: m,
    crossAxis: k,
    alignmentAxis: C
  } = typeof y == "number" ? {
    mainAxis: y,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: y.mainAxis || 0,
    crossAxis: y.crossAxis || 0,
    alignmentAxis: y.alignmentAxis
  };
  return c && typeof C == "number" && (k = c === "end" ? C * -1 : C), d ? {
    x: k * v,
    y: m * _
  } : {
    x: m * _,
    y: k * v
  };
}
const Jk = function(e) {
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
      } = t, d = await Xk(t, e);
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
}, Qk = function(e) {
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
          fn: (N) => {
            let {
              x: P,
              y: I
            } = N;
            return {
              x: P,
              y: I
            };
          }
        },
        ..._
      } = or(e, t), v = {
        x: i,
        y: a
      }, y = await r.detectOverflow(t, _), m = Pa(n), k = Bb(m);
      let C = v[k], S = v[m];
      const $ = (N, P) => jb(P + y[N === "y" ? "top" : "left"], P, P - y[N === "y" ? "bottom" : "right"]);
      s && (C = $(k, C)), c && (S = $(m, S));
      const R = d.fn({
        ...t,
        [k]: C,
        [m]: S
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
}, eS = function(e) {
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
      } = or(e, t), d = await n.detectOverflow(t, c), _ = Va(i), v = qi(i), y = Pa(i) === "y", {
        width: m,
        height: k
      } = a.floating;
      let C, S;
      _ === "top" || _ === "bottom" ? (C = _, S = v === (await (n.isRTL == null ? void 0 : n.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (S = _, C = v === "end" ? "top" : "bottom");
      const $ = k - d.top - d.bottom, R = m - d.left - d.right, N = Zl(k - d[C], $), P = Zl(m - d[S], R), I = t.middlewareData.shift, he = !I;
      let Q = N, x = P;
      I != null && I.enabled.x && (x = R), I != null && I.enabled.y && (Q = $), he && !v && (y ? x = m - 2 * Jc(d.left, d.right) : Q = k - 2 * Jc(d.top, d.bottom)), await s({
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
function Li(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function da(e) {
  return Li(e).getComputedStyle(e);
}
const hp = Math.min, $l = Math.max, To = Math.round;
function qb(e) {
  const t = da(e);
  let i = parseFloat(t.width), a = parseFloat(t.height);
  const n = e.offsetWidth, r = e.offsetHeight, s = To(i) !== n || To(a) !== r;
  return s && (i = n, a = r), { width: i, height: a, fallback: s };
}
function Cn(e) {
  return Kb(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Vs;
function Gb() {
  if (Vs) return Vs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Vs = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Vs) : navigator.userAgent;
}
function fa(e) {
  return e instanceof Li(e).HTMLElement;
}
function _n(e) {
  return e instanceof Li(e).Element;
}
function Kb(e) {
  return e instanceof Li(e).Node;
}
function pp(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Li(e).ShadowRoot || e instanceof ShadowRoot;
}
function _u(e) {
  const { overflow: t, overflowX: i, overflowY: a, display: n } = da(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + i) && !["inline", "contents"].includes(n);
}
function tS(e) {
  return ["table", "td", "th"].includes(Cn(e));
}
function Qc(e) {
  const t = /firefox/i.test(Gb()), i = da(e), a = i.backdropFilter || i.WebkitBackdropFilter;
  return i.transform !== "none" || i.perspective !== "none" || !!a && a !== "none" || t && i.willChange === "filter" || t && !!i.filter && i.filter !== "none" || ["transform", "perspective"].some(((n) => i.willChange.includes(n))) || ["paint", "layout", "strict", "content"].some(((n) => {
    const r = i.contain;
    return r != null && r.includes(n);
  }));
}
function Wb() {
  return !/^((?!chrome|android).)*safari/i.test(Gb());
}
function Bd(e) {
  return ["html", "body", "#document"].includes(Cn(e));
}
function Yb(e) {
  return _n(e) ? e : e.contextElement;
}
const Zb = { x: 1, y: 1 };
function Ir(e) {
  const t = Yb(e);
  if (!fa(t)) return Zb;
  const i = t.getBoundingClientRect(), { width: a, height: n, fallback: r } = qb(t);
  let s = (r ? To(i.width) : i.width) / a, c = (r ? To(i.height) : i.height) / n;
  return s && Number.isFinite(s) || (s = 1), c && Number.isFinite(c) || (c = 1), { x: s, y: c };
}
function Xl(e, t, i, a) {
  var n, r;
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  const s = e.getBoundingClientRect(), c = Yb(e);
  let d = Zb;
  t && (a ? _n(a) && (d = Ir(a)) : d = Ir(e));
  const _ = c ? Li(c) : window, v = !Wb() && i;
  let y = (s.left + (v && ((n = _.visualViewport) == null ? void 0 : n.offsetLeft) || 0)) / d.x, m = (s.top + (v && ((r = _.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / d.y, k = s.width / d.x, C = s.height / d.y;
  if (c) {
    const S = Li(c), $ = a && _n(a) ? Li(a) : a;
    let R = S.frameElement;
    for (; R && a && $ !== S; ) {
      const N = Ir(R), P = R.getBoundingClientRect(), I = getComputedStyle(R);
      P.x += (R.clientLeft + parseFloat(I.paddingLeft)) * N.x, P.y += (R.clientTop + parseFloat(I.paddingTop)) * N.y, y *= N.x, m *= N.y, k *= N.x, C *= N.y, y += P.x, m += P.y, R = Li(R).frameElement;
    }
  }
  return { width: k, height: C, top: m, right: y + k, bottom: m + C, left: y, x: y, y: m };
}
function wn(e) {
  return ((Kb(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function wu(e) {
  return _n(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Xb(e) {
  return Xl(wn(e)).left + wu(e).scrollLeft;
}
function Jl(e) {
  if (Cn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || pp(e) && e.host || wn(e);
  return pp(t) ? t.host : t;
}
function Jb(e) {
  const t = Jl(e);
  return Bd(t) ? t.ownerDocument.body : fa(t) && _u(t) ? t : Jb(t);
}
function Ao(e, t) {
  var i;
  t === void 0 && (t = []);
  const a = Jb(e), n = a === ((i = e.ownerDocument) == null ? void 0 : i.body), r = Li(a);
  return n ? t.concat(r, r.visualViewport || [], _u(a) ? a : []) : t.concat(a, Ao(a));
}
function vp(e, t, i) {
  return t === "viewport" ? El((function(a, n) {
    const r = Li(a), s = wn(a), c = r.visualViewport;
    let d = s.clientWidth, _ = s.clientHeight, v = 0, y = 0;
    if (c) {
      d = c.width, _ = c.height;
      const m = Wb();
      (m || !m && n === "fixed") && (v = c.offsetLeft, y = c.offsetTop);
    }
    return { width: d, height: _, x: v, y };
  })(e, i)) : _n(t) ? El((function(a, n) {
    const r = Xl(a, !0, n === "fixed"), s = r.top + a.clientTop, c = r.left + a.clientLeft, d = fa(a) ? Ir(a) : { x: 1, y: 1 };
    return { width: a.clientWidth * d.x, height: a.clientHeight * d.y, x: c * d.x, y: s * d.y };
  })(t, i)) : El((function(a) {
    const n = wn(a), r = wu(a), s = a.ownerDocument.body, c = $l(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth), d = $l(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
    let _ = -r.scrollLeft + Xb(a);
    const v = -r.scrollTop;
    return da(s).direction === "rtl" && (_ += $l(n.clientWidth, s.clientWidth) - c), { width: c, height: d, x: _, y: v };
  })(wn(e)));
}
function bp(e) {
  return fa(e) && da(e).position !== "fixed" ? e.offsetParent : null;
}
function gp(e) {
  const t = Li(e);
  let i = bp(e);
  for (; i && tS(i) && da(i).position === "static"; ) i = bp(i);
  return i && (Cn(i) === "html" || Cn(i) === "body" && da(i).position === "static" && !Qc(i)) ? t : i || (function(a) {
    let n = Jl(a);
    for (; fa(n) && !Bd(n); ) {
      if (Qc(n)) return n;
      n = Jl(n);
    }
    return null;
  })(e) || t;
}
function iS(e, t, i) {
  const a = fa(t), n = wn(t), r = Xl(e, !0, i === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (a || !a && i !== "fixed") if ((Cn(t) !== "body" || _u(n)) && (s = wu(t)), fa(t)) {
    const d = Xl(t, !0);
    c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
  } else n && (c.x = Xb(n));
  return { x: r.left + s.scrollLeft - c.x, y: r.top + s.scrollTop - c.y, width: r.width, height: r.height };
}
const aS = { getClippingRect: function(e) {
  let { element: t, boundary: i, rootBoundary: a, strategy: n } = e;
  const r = i === "clippingAncestors" ? (function(_, v) {
    const y = v.get(_);
    if (y) return y;
    let m = Ao(_).filter((($) => _n($) && Cn($) !== "body")), k = null;
    const C = da(_).position === "fixed";
    let S = C ? Jl(_) : _;
    for (; _n(S) && !Bd(S); ) {
      const $ = da(S), R = Qc(S);
      (C ? R || k : R || $.position !== "static" || !k || !["absolute", "fixed"].includes(k.position)) ? k = $ : m = m.filter(((N) => N !== S)), S = Jl(S);
    }
    return v.set(_, m), m;
  })(t, this._c) : [].concat(i), s = [...r, a], c = s[0], d = s.reduce(((_, v) => {
    const y = vp(t, v, n);
    return _.top = $l(y.top, _.top), _.right = hp(y.right, _.right), _.bottom = hp(y.bottom, _.bottom), _.left = $l(y.left, _.left), _;
  }), vp(t, c, n));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: i, strategy: a } = e;
  const n = fa(i), r = wn(i);
  if (i === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const d = { x: 0, y: 0 };
  if ((n || !n && a !== "fixed") && ((Cn(i) !== "body" || _u(r)) && (s = wu(i)), fa(i))) {
    const _ = Xl(i);
    c = Ir(i), d.x = _.x + i.clientLeft, d.y = _.y + i.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - s.scrollLeft * c.x + d.x, y: t.y * c.y - s.scrollTop * c.y + d.y };
}, isElement: _n, getDimensions: function(e) {
  return fa(e) ? qb(e) : e.getBoundingClientRect();
}, getOffsetParent: gp, getDocumentElement: wn, getScale: Ir, async getElementRects(e) {
  let { reference: t, floating: i, strategy: a } = e;
  const n = this.getOffsetParent || gp, r = this.getDimensions;
  return { reference: iS(t, await n(i), a), floating: { x: 0, y: 0, ...await r(i) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => da(e).direction === "rtl" }, nS = (e, t, i) => {
  const a = /* @__PURE__ */ new Map(), n = { platform: aS, ...i }, r = { ...n.platform, _c: a };
  return qk(e, t, { ...n, platform: r });
}, kn = {
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
  let i = kn.themes[e] || {}, a;
  do
    a = i[t], typeof a > "u" ? i.$extend ? i = kn.themes[i.$extend] || {} : (i = null, a = kn[t]) : i = null;
  while (i);
  return a;
}
function rS(e) {
  const t = [e];
  let i = kn.themes[e] || {};
  do
    i.$extend && !i.$resetCss ? (t.push(i.$extend), i = kn.themes[i.$extend] || {}) : i = null;
  while (i);
  return t.map((a) => `v-popper--theme-${a}`);
}
function mp(e) {
  const t = [e];
  let i = kn.themes[e] || {};
  do
    i.$extend ? (t.push(i.$extend), i = kn.themes[i.$extend] || {}) : i = null;
  while (i);
  return t;
}
let Ql = !1;
if (typeof window < "u") {
  Ql = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Ql = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Qb = !1;
typeof window < "u" && typeof navigator < "u" && (Qb = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const lS = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), yp = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, _p = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function wp(e, t) {
  const i = e.indexOf(t);
  i !== -1 && e.splice(i, 1);
}
function Cc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Hi = [];
let Wn = null;
const kp = {};
function Sp(e) {
  let t = kp[e];
  return t || (t = kp[e] = []), t;
}
let td = function() {
};
typeof window < "u" && (td = window.Element);
function Qe(e) {
  return function(t) {
    return ed(t.theme, e);
  };
}
const Tc = "__floating-vue__popper", eg = () => /* @__PURE__ */ qt({
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
      validator: (e) => lS.includes(e)
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
      (this.distance || this.skidding) && e.middleware.push(Jk({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Wk({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Qk({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Yk({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Gk({
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
            let d, _;
            return r.startsWith("top") || r.startsWith("bottom") ? d = n.reference.width : _ = n.reference.height, this.$_innerNode.style[a === "min" ? "minWidth" : a === "max" ? "maxWidth" : "width"] = d != null ? `${d}px` : null, this.$_innerNode.style[a === "min" ? "minHeight" : a === "max" ? "maxHeight" : "height"] = _ != null ? `${_}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(eS({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: a, availableHeight: n }) => {
          this.$_innerNode.style.maxWidth = a != null ? `${a}px` : null, this.$_innerNode.style.maxHeight = n != null ? `${n}px` : null;
        }
      })));
      const i = await nS(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Wn && this.instantMove && Wn.instantMove && Wn !== this.parentPopper) {
        Wn.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Wn = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Cc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Ao(this.$_referenceNode),
        ...Ao(this.$_popperNode)
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
        for (let i = 0; i < Hi.length; i++)
          t = Hi[i], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Hi.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of mp(this.theme))
        Sp(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Cc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, wp(Hi, this), Hi.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const i of mp(this.theme)) {
        const a = Sp(i);
        wp(a, this), a.length === 0 && document.body.classList.remove(`v-popper--some-open--${i}`);
      }
      Wn === this && (Wn = null), this.isShown = !1, this.$_applyAttrsToTarget({
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
      this.$_registerTriggerListeners(this.$_targetNodes, yp, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], yp, this.popperTriggers, this.popperShowTriggers, e);
      const t = (i) => {
        i.usedByTooltip || this.hide({ event: i });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, _p, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], _p, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, i) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: i }), e.forEach((a) => a.addEventListener(t, i, Ql ? {
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
      if (xl >= e.left && xl <= e.right && Ol >= e.top && Ol <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), i = xl - hn, a = Ol - pn, n = t.left + t.width / 2 - hn + (t.top + t.height / 2) - pn + t.width + t.height, r = hn + i * n, s = pn + a * n;
        return qs(hn, pn, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        qs(hn, pn, r, s, t.left, t.top, t.right, t.top) || // Top edge
        qs(hn, pn, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        qs(hn, pn, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Qb) {
    const e = Ql ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Cp(t), e), document.addEventListener("touchend", (t) => Tp(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Cp(e), !0), window.addEventListener("click", (e) => Tp(e, !1), !0);
  window.addEventListener("resize", uS);
}
function Cp(e, t) {
  for (let i = 0; i < Hi.length; i++) {
    const a = Hi[i];
    try {
      a.mouseDownContains = a.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Tp(e, t) {
  sS(e, t);
}
function sS(e, t) {
  const i = {};
  for (let a = Hi.length - 1; a >= 0; a--) {
    const n = Hi[a];
    try {
      const r = n.containsGlobalTarget = n.mouseDownContains || n.popperNode().contains(e.target);
      n.pendingHide = !1, requestAnimationFrame(() => {
        if (n.pendingHide = !1, !i[n.randomId] && Ap(n, r, e)) {
          if (n.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let c = n.parentPopper;
            for (; c; )
              i[c.randomId] = !0, c = c.parentPopper;
            return;
          }
          let s = n.parentPopper;
          for (; s && Ap(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Ap(e, t, i) {
  return i.closeAllPopover || i.closePopover && t || oS(e, i) && !t;
}
function oS(e, t) {
  if (typeof e.autoHide == "function") {
    const i = e.autoHide(t);
    return e.lastAutoHide = i, i;
  }
  return e.autoHide;
}
function uS() {
  for (let e = 0; e < Hi.length; e++)
    Hi[e].$_computePosition();
}
let hn = 0, pn = 0, xl = 0, Ol = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  hn = xl, pn = Ol, xl = e.clientX, Ol = e.clientY;
}, Ql ? {
  passive: !0
} : void 0);
function qs(e, t, i, a, n, r, s, c) {
  const d = ((s - n) * (t - r) - (c - r) * (e - n)) / ((c - r) * (i - e) - (s - n) * (a - t)), _ = ((i - e) * (t - r) - (a - t) * (e - n)) / ((c - r) * (i - e) - (s - n) * (a - t));
  return d >= 0 && d <= 1 && _ >= 0 && _ <= 1;
}
const cS = {
  extends: eg()
}, Hd = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [a, n] of t)
    i[a] = n;
  return i;
};
function dS(e, t, i, a, n, r) {
  return h(), p("div", {
    ref: "reference",
    class: Ee(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Ve(e.$slots, "default", eo(Vl(e.slotData)))
  ], 2);
}
const fS = /* @__PURE__ */ Hd(cS, [["render", dS]]);
function hS() {
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
let Js;
function id() {
  id.init || (id.init = !0, Js = hS() !== -1);
}
var ku = {
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
    id(), Pt(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Js && this.$el.appendChild(e), e.data = "about:blank", Js || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Js && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const pS = /* @__PURE__ */ py();
fy("data-v-b329ee4c");
const vS = {
  class: "resize-observer",
  tabindex: "-1"
};
hy();
const bS = /* @__PURE__ */ pS((e, t, i, a, n, r) => (h(), De("div", vS)));
ku.render = bS;
ku.__scopeId = "data-v-b329ee4c";
ku.__file = "src/components/ResizeObserver.vue";
const tg = (e = "theme") => ({
  computed: {
    themeClass() {
      return rS(this[e]);
    }
  }
}), gS = /* @__PURE__ */ qt({
  name: "VPopperContent",
  components: {
    ResizeObserver: ku
  },
  mixins: [
    tg()
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
}), mS = ["id", "aria-hidden", "tabindex", "data-popper-placement"], yS = {
  ref: "inner",
  class: "v-popper__inner"
}, _S = /* @__PURE__ */ l("div", { class: "v-popper__arrow-outer" }, null, -1), wS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-inner" }, null, -1), kS = [
  _S,
  wS
];
function SS(e, t, i, a, n, r) {
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
      l("div", yS, [
        e.mounted ? (h(), p(K, { key: 0 }, [
          l("div", null, [
            Ve(e.$slots, "default")
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
        style: hi(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, kS, 4)
    ], 4)
  ], 46, mS);
}
const ig = /* @__PURE__ */ Hd(gS, [["render", SS]]), ag = {
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
const CS = /* @__PURE__ */ qt({
  name: "VPopperWrapper",
  components: {
    Popper: fS,
    PopperContent: ig
  },
  mixins: [
    ag,
    tg("finalTheme")
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
function TS(e, t, i, a, n, r) {
  const s = Je("PopperContent"), c = Je("Popper");
  return h(), De(c, ii({ ref: "popper" }, e.$props, {
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
    default: Se(({
      popperId: d,
      isShown: _,
      shouldMountContent: v,
      skipTransition: y,
      autoHide: m,
      show: k,
      hide: C,
      handleResize: S,
      onResize: $,
      classes: R,
      result: N
    }) => [
      Ve(e.$slots, "default", {
        shown: _,
        show: k,
        hide: C
      }),
      fe(s, {
        ref: "popperContent",
        "popper-id": d,
        theme: e.finalTheme,
        shown: _,
        mounted: v,
        "skip-transition": y,
        "auto-hide": m,
        "handle-resize": S,
        classes: R,
        result: N,
        onHide: C,
        onResize: $
      }, {
        default: Se(() => [
          Ve(e.$slots, "popper", {
            shown: _,
            hide: C
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Vd = /* @__PURE__ */ Hd(CS, [["render", TS]]), AS = {
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
eg();
const Ep = kn, ES = AS, $S = /* @__PURE__ */ qt({
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
}), xS = "_ncPopover_qgtYg", OS = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: xS
}, ng = "nc-popover-9";
Ep.themes[ng] = structuredClone(Ep.themes.dropdown);
const NS = {
  name: "NcPopover",
  components: {
    Dropdown: ES,
    NcPopoverTriggerProvider: $S
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
      theme: ng
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
        trapStack: Yl(),
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
        lr.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function RS(e, t, i, a, n, r) {
  const s = Je("NcPopoverTriggerProvider"), c = Je("Dropdown");
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
    popper: Se((d) => [
      Ve(e.$slots, "default", eo(Vl(d)))
    ]),
    default: Se(() => [
      fe(s, {
        shown: n.internalShown,
        popupRole: i.popupRole
      }, {
        default: Se((d) => [
          Ve(e.$slots, "trigger", eo(Vl(d)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const IS = {
  $style: OS
}, $p = /* @__PURE__ */ ut(NS, [["render", RS], ["__cssModules", IS]]), LS = {
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
}, PS = ["aria-hidden", "aria-label"], DS = ["fill", "width", "height"], FS = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, MS = { key: 0 };
function US(e, t, i, a, n, r) {
  return h(), p("span", ii(e.$attrs, {
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
      l("path", FS, [
        i.title ? (h(), p("title", MS, o(i.title), 1)) : A("", !0)
      ])
    ], 8, DS))
  ], 16, PS);
}
const zS = /* @__PURE__ */ ut(LS, [["render", US]]);
An(y0);
function qd(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const i = t;
      if (i.type === Bt)
        return !1;
      if (i.type === K && !qd(i.children))
        return !1;
      if (i.type === ls && !i.children.trim())
        return !1;
    }
    return !0;
  });
}
const jS = ".focusable", BS = {
  name: "NcActions",
  components: {
    NcButton: ca,
    NcPopover: $p
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
      [Ub]: this.closeMenu
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
      default: Ft("Actions")
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
      randomId: yu()
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
    Lk(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(jS);
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
        S.type === K && t(S.children, C);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let i = e.filter(this.isValidSingleAction);
    this.forceMenu && i.length > 0 && this.inline > 0 && (i = []);
    const a = i.slice(0, this.inline), n = e.filter((k) => !a.includes(k)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], c = ["NcActionLink", "NcActionRouter"], d = n.some((k) => s.includes(this.getActionName(k))), _ = n.some((k) => r.includes(this.getActionName(k))), v = n.some((k) => c.includes(this.getActionName(k)));
    d ? this.actionsMenuSemanticType = "dialog" : _ ? this.actionsMenuSemanticType = "menu" : v ? this.actionsMenuSemanticType = "navigation" : e.filter((C) => this.getActionName(C).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const y = (k) => {
      const C = k?.props?.icon, S = k?.children?.icon?.()?.[0] ?? (this.isIconUrl(C) ? di("img", { class: "action-item__menutoggle__icon", src: C, alt: "" }) : di("span", { class: ["icon", C] })), $ = k?.children?.default?.()?.[0]?.children?.trim(), R = this.forceName ? $ : "";
      let N = k?.props?.title;
      this.forceName || N || (N = $);
      const P = { ...k?.props ?? {} }, I = ["submit", "reset"].includes(P.type) ? P.modelValue : "button";
      return delete P.modelValue, delete P.type, di(
        ca,
        ii(
          P,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": k?.props?.["aria-label"] || $,
            title: N,
            disabled: this.disabled || k?.props?.disabled,
            pressed: k?.props?.modelValue,
            size: this.size,
            type: I,
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
          icon: () => S
        }
      );
    }, m = (k) => {
      const C = qd(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? di("span", { class: ["icon", this.defaultIcon] }) : di(zS, { size: 20 }), S = `${this.randomId}-trigger`;
      return di(
        $p,
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
          trigger: () => di(ca, {
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
              "aria-labelledby": S,
              "aria-modal": this.actionsMenuSemanticType === "dialog" ? "true" : void 0
            }, [
              k
            ])
          ])
        }
      );
    };
    return e.length === 1 && i.length === 1 && !this.forceMenu ? y(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), a.length > 0 && this.inline > 0 ? di(
      "div",
      {
        class: [
          "action-items",
          `action-item--${this.triggerButtonVariant}`
        ]
      },
      [
        // Render inline actions
        ...a.map(y),
        // render the rest within the popover menu
        n.length > 0 ? di(
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
}, Gd = /* @__PURE__ */ ut(BS, [["__scopeId", "data-v-7206c1f1"]]), HS = ["aria-label"], VS = ["width", "height"], qS = ["fill"], GS = ["fill"], KS = { key: 0 }, WS = /* @__PURE__ */ qt({
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
        }, null, 8, qS),
        l("path", {
          fill: i.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (h(), p("title", KS, o(e.name), 1)) : A("", !0)
        ], 8, GS)
      ], 8, VS))
    ], 8, HS));
  }
}), rg = /* @__PURE__ */ ut(WS, [["__scopeId", "data-v-cf399190"]]), nd = /* @__PURE__ */ qt({
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
}), YS = {
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
}, ZS = ["aria-hidden", "aria-label"], XS = ["fill", "width", "height"], JS = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, QS = { key: 0 };
function eC(e, t, i, a, n, r) {
  return h(), p("span", ii(e.$attrs, {
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
      l("path", JS, [
        i.title ? (h(), p("title", QS, o(i.title), 1)) : A("", !0)
      ])
    ], 8, XS))
  ], 16, ZS);
}
const tC = /* @__PURE__ */ ut(YS, [["render", eC]]), iC = {
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
}, aC = ["aria-hidden", "aria-label"], nC = ["fill", "width", "height"], rC = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, lC = { key: 0 };
function sC(e, t, i, a, n, r) {
  return h(), p("span", ii(e.$attrs, {
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
      l("path", rC, [
        i.title ? (h(), p("title", lC, o(i.title), 1)) : A("", !0)
      ])
    ], 8, nC))
  ], 16, aC);
}
const oC = /* @__PURE__ */ ut(iC, [["render", sC]]);
An(S0);
const uC = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: ca,
    ChevronDown: Jw,
    ChevronUp: rk
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
    return { isLegacy34: En };
  },
  computed: {
    labelButton() {
      return this.open ? Ft("Collapse menu") : Ft("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function cC(e, t, i, a, n, r) {
  const s = Je("ChevronUp"), c = Je("ChevronDown"), d = Je("NcButton");
  return h(), De(d, {
    class: Ee(["icon-collapse", {
      "icon-collapse--active": i.active,
      "icon-collapse--open": i.open
    }]),
    "aria-label": r.labelButton,
    variant: i.active && a.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Se(() => [
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
const dC = /* @__PURE__ */ ut(uC, [["render", cC], ["__scopeId", "data-v-cfbd3794"]]);
An(C0, E0);
const fC = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: Gd,
    NcActionButton: Ik,
    NcAppNavigationIconCollapsible: dC,
    NcInputConfirmCancel: wk,
    NcLoadingIcon: rg,
    NcVNodes: nd,
    Pencil: tC,
    Undo: oC
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: Ib, default: null }
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
      default: () => yu(),
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
      isMobile: us(),
      isLegacy34: En
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
      return this.editLabel ? this.editLabel : Ft("Edit item");
    },
    undoButtonAriaLabel() {
      return Ft("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && i && (t?.(e), e.preventDefault(), this.isMobile && Ma("toggle-navigation", { open: !1 }));
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
}, hC = ["id"], pC = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], vC = {
  key: 0,
  class: "editingContainer"
}, bC = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, gC = { class: "app-navigation-entry__deleted-description" }, mC = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, yC = {
  key: 0,
  class: "app-navigation-entry__children"
};
function _C(e, t, i, a, n, r) {
  const s = Je("NcLoadingIcon"), c = Je("NcInputConfirmCancel"), d = Je("Pencil"), _ = Je("NcActionButton"), v = Je("Undo"), y = Je("NcActions"), m = Je("NcAppNavigationIconCollapsible");
  return h(), p("li", {
    id: i.id,
    class: Ee([{
      "app-navigation-entry--opened": n.opened,
      "app-navigation-entry--pinned": i.pinned,
      "app-navigation-entry--collapsible": i.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (h(), De(xd(r.isRouterLink ? "router-link" : "NcVNodes"), eo(Vl({ ...r.isRouterLink && { custom: !0, to: i.to } })), {
      default: Se(({ href: k, navigate: C, isActive: S }) => [
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
            onKeydown: t[3] || (t[3] = ft(Ce((...$) => r.handleTab && r.handleTab(...$), ["exact"]), ["tab"]))
          }, [
            l("div", {
              class: Ee(["app-navigation-entry-icon", { [i.icon]: i.icon }])
            }, [
              i.loading ? (h(), De(s, { key: 0 })) : Ve(e.$slots, "icon", {
                key: 1,
                active: i.active || i.to && S
              }, void 0, !0)
            ], 2),
            l("span", {
              class: Ee(["app-navigation-entry__name", { "hidden-visually": n.editingActive }])
            }, o(i.name), 3),
            n.editingActive ? (h(), p("div", vC, [
              fe(c, {
                ref: "editingInput",
                modelValue: n.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = ($) => n.editingValue = $),
                placeholder: i.editPlaceholder !== "" ? i.editPlaceholder : i.name,
                primary: i.to && S || i.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : A("", !0)
          ], 40, pC)),
          i.undo ? (h(), p("div", bC, [
            l("div", gC, o(i.name), 1)
          ])) : A("", !0),
          (e.$slots.actions || e.$slots.counter || i.editable || i.undo) && !n.editingActive ? (h(), p("div", {
            key: 2,
            class: Ee(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": i.forceDisplayActions || n.menuOpenLocalValue || i.menuOpen }])
          }, [
            e.$slots.counter ? (h(), p("div", mC, [
              Ve(e.$slots, "counter", {}, void 0, !0)
            ])) : A("", !0),
            e.$slots.actions || i.editable && !n.editingActive || i.undo ? (h(), De(y, {
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
              icon: Se(() => [
                Ve(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Se(() => [
                i.editable && !n.editingActive ? (h(), De(_, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Se(() => [
                    fe(d, { size: 20 })
                  ]),
                  default: Se(() => [
                    ee(" " + o(i.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : A("", !0),
                i.undo ? (h(), De(_, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Se(() => [
                    fe(v, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : A("", !0),
                Ve(e.$slots, "actions", {}, void 0, !0)
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
          Ve(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (h(), p("ul", yC, [
      Ve(e.$slots, "default", {}, void 0, !0)
    ])) : A("", !0)
  ], 10, hC);
}
const ia = /* @__PURE__ */ ut(fC, [["render", _C], ["__scopeId", "data-v-01bef41b"]]), Ac = /* @__PURE__ */ new WeakMap(), wC = {
  mounted(e, t) {
    const i = !t.modifiers.bubble;
    let a;
    if (typeof t.value == "function") a = ep(e, t.value, { capture: i });
    else {
      const [n, r] = t.value;
      a = ep(e, n, Object.assign({ capture: i }, r));
    }
    Ac.set(e, a);
  },
  unmounted(e) {
    const t = Ac.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Ac.delete(e);
  }
}, kC = {
  mounted(e) {
    e.focus();
  }
}, SC = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", CC = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", rd = "numeric", ld = "ascii", sd = "alpha", Nl = "asciinumeric", yl = "alphanumeric", od = "domain", lg = "emoji", TC = "scheme", AC = "slashscheme", Ec = "whitespace";
function EC(e, t) {
  return e in t || (t[e] = []), t[e];
}
function tr(e, t, i) {
  t[rd] && (t[Nl] = !0, t[yl] = !0), t[ld] && (t[Nl] = !0, t[sd] = !0), t[Nl] && (t[yl] = !0), t[sd] && (t[yl] = !0), t[yl] && (t[od] = !0), t[lg] && (t[od] = !0);
  for (const a in t) {
    const n = EC(a, i);
    n.indexOf(e) < 0 && n.push(e);
  }
}
function $C(e, t) {
  const i = {};
  for (const a in t)
    t[a].indexOf(e) >= 0 && (i[a] = !0);
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
    a = a || ki.groups;
    let n;
    return t && t.j ? n = t : (n = new ki(t), i && a && tr(t, i, a)), this.jr.push([e, n]), n;
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
    a = a || ki.groups;
    const n = this;
    if (t && t.j)
      return n.j[e] = t, t;
    const r = t;
    let s, c = n.go(e);
    if (c ? (s = new ki(), Object.assign(s.j, c.j), s.jr.push.apply(s.jr, c.jr), s.jd = c.jd, s.t = c.t) : s = new ki(), r) {
      if (a)
        if (s.t && typeof s.t == "string") {
          const d = Object.assign($C(s.t, a), i);
          tr(r, d, a);
        } else i && tr(r, i, a);
      s.t = r;
    }
    return n.j[e] = s, s;
  }
};
const Ye = (e, t, i, a, n) => e.ta(t, i, a, n), St = (e, t, i, a, n) => e.tr(t, i, a, n), xp = (e, t, i, a, n) => e.ts(t, i, a, n), _e = (e, t, i, a, n) => e.tt(t, i, a, n), xa = "WORD", ud = "UWORD", sg = "ASCIINUMERICAL", og = "ALPHANUMERICAL", es = "LOCALHOST", cd = "TLD", dd = "UTLD", Qs = "SCHEME", Ar = "SLASH_SCHEME", Kd = "NUM", fd = "WS", Wd = "NL", Rl = "OPENBRACE", Il = "CLOSEBRACE", Eo = "OPENBRACKET", $o = "CLOSEBRACKET", xo = "OPENPAREN", Oo = "CLOSEPAREN", No = "OPENANGLEBRACKET", Ro = "CLOSEANGLEBRACKET", Io = "FULLWIDTHLEFTPAREN", Lo = "FULLWIDTHRIGHTPAREN", Po = "LEFTCORNERBRACKET", Do = "RIGHTCORNERBRACKET", Fo = "LEFTWHITECORNERBRACKET", Mo = "RIGHTWHITECORNERBRACKET", Uo = "FULLWIDTHLESSTHAN", zo = "FULLWIDTHGREATERTHAN", jo = "AMPERSAND", Bo = "APOSTROPHE", Ho = "ASTERISK", bn = "AT", Vo = "BACKSLASH", qo = "BACKTICK", Go = "CARET", ir = "COLON", Yd = "COMMA", Ko = "DOLLAR", na = "DOT", Wo = "EQUALS", Zd = "EXCLAMATION", Ni = "HYPHEN", Ll = "PERCENT", Yo = "PIPE", Zo = "PLUS", Xo = "POUND", Pl = "QUERY", Xd = "QUOTE", ug = "FULLWIDTHMIDDLEDOT", Jd = "SEMI", ra = "SLASH", Dl = "TILDE", Jo = "UNDERSCORE", cg = "EMOJI", Qo = "SYM";
var dg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: og,
  AMPERSAND: jo,
  APOSTROPHE: Bo,
  ASCIINUMERICAL: sg,
  ASTERISK: Ho,
  AT: bn,
  BACKSLASH: Vo,
  BACKTICK: qo,
  CARET: Go,
  CLOSEANGLEBRACKET: Ro,
  CLOSEBRACE: Il,
  CLOSEBRACKET: $o,
  CLOSEPAREN: Oo,
  COLON: ir,
  COMMA: Yd,
  DOLLAR: Ko,
  DOT: na,
  EMOJI: cg,
  EQUALS: Wo,
  EXCLAMATION: Zd,
  FULLWIDTHGREATERTHAN: zo,
  FULLWIDTHLEFTPAREN: Io,
  FULLWIDTHLESSTHAN: Uo,
  FULLWIDTHMIDDLEDOT: ug,
  FULLWIDTHRIGHTPAREN: Lo,
  HYPHEN: Ni,
  LEFTCORNERBRACKET: Po,
  LEFTWHITECORNERBRACKET: Fo,
  LOCALHOST: es,
  NL: Wd,
  NUM: Kd,
  OPENANGLEBRACKET: No,
  OPENBRACE: Rl,
  OPENBRACKET: Eo,
  OPENPAREN: xo,
  PERCENT: Ll,
  PIPE: Yo,
  PLUS: Zo,
  POUND: Xo,
  QUERY: Pl,
  QUOTE: Xd,
  RIGHTCORNERBRACKET: Do,
  RIGHTWHITECORNERBRACKET: Mo,
  SCHEME: Qs,
  SEMI: Jd,
  SLASH: ra,
  SLASH_SCHEME: Ar,
  SYM: Qo,
  TILDE: Dl,
  TLD: cd,
  UNDERSCORE: Jo,
  UTLD: dd,
  UWORD: ud,
  WORD: xa,
  WS: fd
});
const Ea = /[a-z]/, pl = new RegExp("\\p{L}", "u"), $c = new RegExp("\\p{Emoji}", "u"), $a = /\d/, xc = /\s/, Op = "\r", Oc = `
`, xC = "️", OC = "‍", Nc = "￼";
let Gs = null, Ks = null;
function NC(e = []) {
  const t = {};
  ki.groups = t;
  const i = new ki();
  Gs == null && (Gs = Np(SC)), Ks == null && (Ks = Np(CC)), _e(i, "'", Bo), _e(i, "{", Rl), _e(i, "}", Il), _e(i, "[", Eo), _e(i, "]", $o), _e(i, "(", xo), _e(i, ")", Oo), _e(i, "<", No), _e(i, ">", Ro), _e(i, "（", Io), _e(i, "）", Lo), _e(i, "「", Po), _e(i, "」", Do), _e(i, "『", Fo), _e(i, "』", Mo), _e(i, "＜", Uo), _e(i, "＞", zo), _e(i, "&", jo), _e(i, "*", Ho), _e(i, "@", bn), _e(i, "`", qo), _e(i, "^", Go), _e(i, ":", ir), _e(i, ",", Yd), _e(i, "$", Ko), _e(i, ".", na), _e(i, "=", Wo), _e(i, "!", Zd), _e(i, "-", Ni), _e(i, "%", Ll), _e(i, "|", Yo), _e(i, "+", Zo), _e(i, "#", Xo), _e(i, "?", Pl), _e(i, '"', Xd), _e(i, "/", ra), _e(i, ";", Jd), _e(i, "~", Dl), _e(i, "_", Jo), _e(i, "\\", Vo), _e(i, "・", ug);
  const a = St(i, $a, Kd, {
    [rd]: !0
  });
  St(a, $a, a);
  const n = St(a, Ea, sg, {
    [Nl]: !0
  }), r = St(a, pl, og, {
    [yl]: !0
  }), s = St(i, Ea, xa, {
    [ld]: !0
  });
  St(s, $a, n), St(s, Ea, s), St(n, $a, n), St(n, Ea, n);
  const c = St(i, pl, ud, {
    [sd]: !0
  });
  St(c, Ea), St(c, $a, r), St(c, pl, c), St(r, $a, r), St(r, Ea), St(r, pl, r);
  const d = _e(i, Oc, Wd, {
    [Ec]: !0
  }), _ = _e(i, Op, fd, {
    [Ec]: !0
  }), v = St(i, xc, fd, {
    [Ec]: !0
  });
  _e(i, Nc, v), _e(_, Oc, d), _e(_, Nc, v), St(_, xc, v), _e(v, Op), _e(v, Oc), St(v, xc, v), _e(v, Nc, v);
  const y = St(i, $c, cg, {
    [lg]: !0
  });
  _e(y, "#"), St(y, $c, y), _e(y, xC, y);
  const m = _e(y, OC);
  _e(m, "#"), St(m, $c, y);
  const k = [[Ea, s], [$a, n]], C = [[Ea, null], [pl, c], [$a, r]];
  for (let S = 0; S < Gs.length; S++)
    cn(i, Gs[S], cd, xa, k);
  for (let S = 0; S < Ks.length; S++)
    cn(i, Ks[S], dd, ud, C);
  tr(cd, {
    tld: !0,
    ascii: !0
  }, t), tr(dd, {
    utld: !0,
    alpha: !0
  }, t), cn(i, "file", Qs, xa, k), cn(i, "mailto", Qs, xa, k), cn(i, "http", Ar, xa, k), cn(i, "https", Ar, xa, k), cn(i, "ftp", Ar, xa, k), cn(i, "ftps", Ar, xa, k), tr(Qs, {
    scheme: !0,
    ascii: !0
  }, t), tr(Ar, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((S, $) => S[0] > $[0] ? 1 : -1);
  for (let S = 0; S < e.length; S++) {
    const $ = e[S][0], N = e[S][1] ? {
      [TC]: !0
    } : {
      [AC]: !0
    };
    $.indexOf("-") >= 0 ? N[od] = !0 : Ea.test($) ? $a.test($) ? N[Nl] = !0 : N[ld] = !0 : N[rd] = !0, xp(i, $, $, N);
  }
  return xp(i, "localhost", es, {
    ascii: !0
  }), i.jd = new ki(Qo), {
    start: i,
    tokens: Object.assign({
      groups: t
    }, dg)
  };
}
function fg(e, t) {
  const i = RC(t.replace(/[A-Z]/g, (c) => c.toLowerCase())), a = i.length, n = [];
  let r = 0, s = 0;
  for (; s < a; ) {
    let c = e, d = null, _ = 0, v = null, y = -1, m = -1;
    for (; s < a && (d = c.go(i[s])); )
      c = d, c.accepts() ? (y = 0, m = 0, v = c) : y >= 0 && (y += i[s].length, m++), _ += i[s].length, r += i[s].length, s++;
    r -= y, s -= m, _ -= y, n.push({
      t: v.t,
      // token type/name
      v: t.slice(r - _, r),
      // string value
      s: r - _,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return n;
}
function RC(e) {
  const t = [], i = e.length;
  let a = 0;
  for (; a < i; ) {
    let n = e.charCodeAt(a), r, s = n < 55296 || n > 56319 || a + 1 === i || (r = e.charCodeAt(a + 1)) < 56320 || r > 57343 ? e[a] : e.slice(a, a + 2);
    t.push(s), a += s.length;
  }
  return t;
}
function cn(e, t, i, a, n) {
  let r;
  const s = t.length;
  for (let c = 0; c < s - 1; c++) {
    const d = t[c];
    e.j[d] ? r = e.j[d] : (r = new ki(a), r.jr = n.slice(), e.j[d] = r), e = r;
  }
  return r = new ki(i), r.jr = n.slice(), e.j[t[s - 1]] = r, r;
}
function Np(e) {
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
const ts = {
  defaultProtocol: "http",
  events: null,
  format: Rp,
  formatHref: Rp,
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
  let i = Object.assign({}, ts);
  e && (i = Object.assign(i, e instanceof Qd ? e.o : e));
  const a = i.ignoreTags, n = [];
  for (let r = 0; r < a.length; r++)
    n.push(a[r].toUpperCase());
  this.o = i, t && (this.defaultRender = t), this.ignoreTags = n;
}
Qd.prototype = {
  o: ts,
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
    return n && (typeof n == "object" ? (n = i.t in n ? n[i.t] : ts[e], typeof n == "function" && a && (n = n(t, i))) : typeof n == "function" && a && (n = n(t, i.t, i)), n);
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
function Rp(e) {
  return e;
}
function hg(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
hg.prototype = {
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
  toObject(e = ts.defaultProtocol) {
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
    const t = this, i = this.toHref(e.get("defaultProtocol")), a = e.get("formatHref", i, this), n = e.get("tagName", i, t), r = this.toFormattedString(e), s = {}, c = e.get("className", i, t), d = e.get("target", i, t), _ = e.get("rel", i, t), v = e.getObj("attributes", i, t), y = e.getObj("events", i, t);
    return s.href = a, c && (s.class = c), d && (s.target = d), _ && (s.rel = _), v && Object.assign(s, v), {
      tagName: n,
      attributes: s,
      content: r,
      eventListeners: y
    };
  }
};
function Su(e, t) {
  class i extends hg {
    constructor(n, r) {
      super(n, r), this.t = e;
    }
  }
  for (const a in t)
    i.prototype[a] = t[a];
  return i.t = e, i;
}
const IC = Su("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Ip = Su("text"), LC = Su("nl"), Ws = Su("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = ts.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== es && e[1].t === ir;
  }
}), xi = (e) => new ki(e);
function PC({
  groups: e
}) {
  const t = e.domain.concat([jo, Ho, bn, Vo, qo, Go, Ko, Wo, Ni, Kd, Ll, Yo, Zo, Xo, ra, Qo, Dl, Jo]), i = [Bo, ir, Yd, na, Zd, Ll, Pl, Xd, Jd, No, Ro, Rl, Il, $o, Eo, xo, Oo, Io, Lo, Po, Do, Fo, Mo, Uo, zo], a = [jo, Bo, Ho, Vo, qo, Go, Ko, Wo, Ni, Rl, Il, Ll, Yo, Zo, Xo, Pl, ra, Qo, Dl, Jo], n = xi(), r = _e(n, Dl);
  Ye(r, a, r), Ye(r, e.domain, r);
  const s = xi(), c = xi(), d = xi();
  Ye(n, e.domain, s), Ye(n, e.scheme, c), Ye(n, e.slashscheme, d), Ye(s, a, r), Ye(s, e.domain, s);
  const _ = _e(s, bn);
  _e(r, bn, _), _e(c, bn, _), _e(d, bn, _);
  const v = _e(r, na);
  Ye(v, a, r), Ye(v, e.domain, r);
  const y = xi();
  Ye(_, e.domain, y), Ye(y, e.domain, y);
  const m = _e(y, na);
  Ye(m, e.domain, y);
  const k = xi(IC);
  Ye(m, e.tld, k), Ye(m, e.utld, k), _e(_, es, k);
  const C = _e(y, Ni);
  _e(C, Ni, C), Ye(C, e.domain, y), Ye(k, e.domain, y), _e(k, na, m), _e(k, Ni, C);
  const S = _e(s, Ni), $ = _e(s, na);
  _e(S, Ni, S), Ye(S, e.domain, s), Ye($, a, r), Ye($, e.domain, s);
  const R = xi(Ws);
  Ye($, e.tld, R), Ye($, e.utld, R), Ye(R, e.domain, s), Ye(R, a, r), _e(R, na, $), _e(R, Ni, S), _e(R, bn, _);
  const N = _e(R, ir), P = xi(Ws);
  Ye(N, e.numeric, P);
  const I = xi(Ws), he = xi();
  Ye(I, t, I), Ye(I, i, he), Ye(he, t, I), Ye(he, i, he), _e(R, ra, I), _e(P, ra, I);
  const Q = _e(c, ir), x = _e(d, ir), B = _e(x, ra), W = _e(B, ra);
  Ye(c, e.domain, s), _e(c, na, $), _e(c, Ni, S), Ye(d, e.domain, s), _e(d, na, $), _e(d, Ni, S), Ye(Q, e.domain, I), _e(Q, ra, I), _e(Q, Pl, I), Ye(W, e.domain, I), Ye(W, t, I), _e(W, ra, I);
  const Z = [
    [Rl, Il],
    // {}
    [Eo, $o],
    // []
    [xo, Oo],
    // ()
    [No, Ro],
    // <>
    [Io, Lo],
    // （）
    [Po, Do],
    // 「」
    [Fo, Mo],
    // 『』
    [Uo, zo]
    // ＜＞
  ];
  for (let le = 0; le < Z.length; le++) {
    const [H, Y] = Z[le], L = _e(I, H);
    _e(he, H, L);
    const G = xi(Ws);
    Ye(L, t, G);
    const X = xi();
    Ye(L, i, X), _e(L, Y, I), Ye(G, t, G), Ye(G, i, X), Ye(X, t, G), Ye(X, i, X), _e(G, Y, I), _e(X, Y, I);
  }
  return _e(n, es, R), _e(n, Wd, LC), {
    start: n,
    tokens: dg
  };
}
function DC(e, t, i) {
  let a = i.length, n = 0, r = [], s = [];
  for (; n < a; ) {
    let c = e, d = null, _ = null, v = 0, y = null, m = -1;
    for (; n < a && !(d = c.go(i[n].t)); )
      s.push(i[n++]);
    for (; n < a && (_ = d || c.go(i[n].t)); )
      d = null, c = _, c.accepts() ? (m = 0, y = c) : m >= 0 && m++, n++, v++;
    if (m < 0)
      n -= v, n < a && (s.push(i[n]), n++);
    else {
      s.length > 0 && (r.push(Rc(Ip, t, s)), s = []), n -= m, v -= m;
      const k = y.t, C = i.slice(n - v, n);
      r.push(Rc(k, t, C));
    }
  }
  return s.length > 0 && r.push(Rc(Ip, t, s)), r;
}
function Rc(e, t, i) {
  const a = i[0].s, n = i[i.length - 1].e, r = t.slice(a, n);
  return new e(r, i);
}
const Zt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function FC() {
  Zt.scanner = NC(Zt.customSchemes);
  for (let e = 0; e < Zt.tokenQueue.length; e++)
    Zt.tokenQueue[e][1]({
      scanner: Zt.scanner
    });
  Zt.parser = PC(Zt.scanner.tokens);
  for (let e = 0; e < Zt.pluginQueue.length; e++)
    Zt.pluginQueue[e][1]({
      scanner: Zt.scanner,
      parser: Zt.parser
    });
  return Zt.initialized = !0, Zt;
}
function pg(e) {
  return Zt.initialized || FC(), DC(Zt.parser.start, e, fg(Zt.scanner.start, e));
}
pg.scan = fg;
function MC(e) {
  const t = new Qd({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, jC), i = pg(e), a = [];
  for (const n of i)
    n.t === "nl" && t.get("nl2br") ? a.push(`<br>
`) : !n.isLink || !t.check(n) ? a.push(vo(n.toString())) : a.push(t.render(n));
  return a.join("");
}
function UC(e) {
  return e.replace(/"/g, "&quot;");
}
function zC(e) {
  const t = [];
  for (const i in e) {
    const a = e[i] + "";
    t.push(`${i}="${UC(a)}"`);
  }
  return t.join(" ");
}
function jC({ tagName: e, attributes: t, content: i }) {
  return `<${e} ${zC(t)}>${vo(i)}</${e}>`;
}
const BC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = MC(t.text));
}, HC = ["title"], VC = /* @__PURE__ */ qt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Jt("NcAppSidebar:header:ref");
    return (i, a) => ye((h(), p("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      ee(o(e.name), 1)
    ], 8, HC)), [
      [u(BC), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), qC = ["aria-labelledby"], GC = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, KC = ["id"], WC = {
  key: 2,
  class: "empty-content__description"
}, YC = {
  key: 3,
  class: "empty-content__action"
}, ZC = /* @__PURE__ */ qt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = yu();
    return (i, a) => (h(), p("div", {
      "aria-labelledby": u(t),
      class: "empty-content",
      role: "note"
    }, [
      i.$slots.icon ? (h(), p("div", GC, [
        Ve(i.$slots, "icon", {}, void 0, !0)
      ])) : A("", !0),
      e.name !== "" || i.$slots.name ? (h(), p("div", {
        key: 1,
        id: u(t),
        class: "empty-content__name"
      }, [
        Ve(i.$slots, "name", {}, () => [
          ee(o(e.name), 1)
        ], !0)
      ], 8, KC)) : A("", !0),
      e.description !== "" || i.$slots.description ? (h(), p("p", WC, [
        Ve(i.$slots, "description", {}, () => [
          ee(o(e.description), 1)
        ], !0)
      ])) : A("", !0),
      i.$slots.action ? (h(), p("div", YC, [
        Ve(i.$slots, "action", {}, void 0, !0)
      ])) : A("", !0)
    ], 8, qC));
  }
}), XC = /* @__PURE__ */ ut(ZC, [["__scopeId", "data-v-8609a4c1"]]), JC = {
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
}, QC = ["aria-hidden", "aria-label"], e2 = ["fill", "width", "height"], t2 = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, i2 = { key: 0 };
function a2(e, t, i, a, n, r) {
  return h(), p("span", ii(e.$attrs, {
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
      l("path", t2, [
        i.title ? (h(), p("title", i2, o(i.title), 1)) : A("", !0)
      ])
    ], 8, e2))
  ], 16, QC);
}
const n2 = /* @__PURE__ */ ut(JC, [["render", a2]]), r2 = {
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
}, l2 = ["aria-hidden", "aria-label"], s2 = ["fill", "width", "height"], o2 = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, u2 = { key: 0 };
function c2(e, t, i, a, n, r) {
  return h(), p("span", ii(e.$attrs, {
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
      l("path", o2, [
        i.title ? (h(), p("title", u2, o(i.title), 1)) : A("", !0)
      ])
    ], 8, s2))
  ], 16, l2);
}
const d2 = /* @__PURE__ */ ut(r2, [["render", c2]]), f2 = {
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
}, h2 = ["aria-hidden", "aria-label"], p2 = ["fill", "width", "height"], v2 = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, b2 = { key: 0 };
function g2(e, t, i, a, n, r) {
  return h(), p("span", ii(e.$attrs, {
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
      l("path", v2, [
        i.title ? (h(), p("title", b2, o(i.title), 1)) : A("", !0)
      ])
    ], 8, p2))
  ], 16, h2);
}
const m2 = /* @__PURE__ */ ut(f2, [["render", g2]]), y2 = ["aria-selected", "tabindex"], _2 = /* @__PURE__ */ qt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ zy({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Rv(e, "selected"), i = /* @__PURE__ */ U(!1);
    function a() {
      t.value = !0, i.value = !1, requestAnimationFrame(() => {
        i.value = !0;
      });
    }
    return (n, r) => (h(), p("button", {
      class: Ee(["button-vue", [n.$style.sidebarTabsButton, {
        [n.$style.sidebarTabsButton_selected]: t.value,
        [n.$style.sidebarTabsButton_legacy]: u(En),
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
          fe(nd, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Se(() => [
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
          fe(nd, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Se(() => [
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
    ], 10, y2));
  }
}), w2 = "_sidebarTabsButton_q3kBA", k2 = "_sidebarTabsButton_legacy_KQ4d1", S2 = "_sidebarTabsButton_selected_Pjayf", C2 = "_sidebarTabsButton_animatedHighlight_uvp-0", T2 = "_sidebarTabsButton__name_rlQsL", A2 = "_sidebarTabsButton__icon_QzZg4", E2 = "_sidebarTabsButton__iconLayer_ZkZan", $2 = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", x2 = "_sidebarTabsButton__icon_pop_IA0By", O2 = "_sidebarTabsButton__legacyIcon_QhcNW", N2 = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: w2,
  sidebarTabsButton_legacy: k2,
  sidebarTabsButton_selected: S2,
  sidebarTabsButton_animatedHighlight: C2,
  sidebarTabsButton__name: T2,
  sidebarTabsButton__icon: A2,
  sidebarTabsButton__iconLayer: E2,
  sidebarTabsButton__iconLayer_hidden: $2,
  sidebarTabsButton__icon_pop: x2,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: O2
}, R2 = {
  $style: N2
}, I2 = /* @__PURE__ */ ut(_2, [["__cssModules", R2]]), L2 = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: I2
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
      isLegacy34: En,
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
      this.tabs.push(e), this.tabs.sort((t, i) => t.order === i.order ? t.name.localeCompare(i.name, [U_()]) : t.order - i.order), this.updateActive();
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
}, P2 = { class: "app-sidebar-tabs" };
function D2(e, t, i, a, n, r) {
  const s = Je("NcAppSidebarTabsButton");
  return h(), p("div", P2, [
    r.hasMultipleTabs || r.showForSingleTab ? (h(), p("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ee(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": n.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = ft(Ce((...c) => r.focusPreviousTab && r.focusPreviousTab(...c), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = ft(Ce((...c) => r.focusNextTab && r.focusNextTab(...c), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = ft(Ce((...c) => r.focusActiveTabContent && r.focusActiveTabContent(...c), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = ft(Ce((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = ft(Ce((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = ft(Ce((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = ft(Ce((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["page-down"]))
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
        style: hi(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : A("", !0),
      (h(!0), p(K, null, de(n.tabs, (c) => (h(), De(s, {
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
      Ve(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const F2 = /* @__PURE__ */ ut(L2, [["render", D2], ["__scopeId", "data-v-74190d2a"]]);
An(w0);
const M2 = {
  name: "NcAppSidebar",
  components: {
    NcActions: Gd,
    NcAppSidebarHeader: VC,
    NcAppSidebarTabs: F2,
    NcButton: ca,
    NcLoadingIcon: rg,
    NcEmptyContent: XC,
    IconArrowRight: Fb,
    IconClose: Mb,
    IconDockRight: n2,
    IconStar: d2,
    IconStarOutline: m2
  },
  directives: {
    Focus: kC,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: wC
  },
  inject: {
    ncContentSelector: {
      from: Db,
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
    const e = /* @__PURE__ */ U(null);
    return Ri("NcAppSidebar:header:ref", e), {
      uid: yu(),
      isMobile: v0(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: Ft("Change name"),
      closeTranslated: Ft("Close sidebar"),
      favoriteTranslated: Ft("Favorite"),
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
    t: Ft,
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
        trapStack: Yl(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && lr.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, U2 = ["aria-labelledby"], z2 = { class: "app-sidebar-header__info" }, j2 = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, B2 = { class: "app-sidebar-header__name-container" }, H2 = { class: "app-sidebar-header__mainname-container" }, V2 = ["placeholder", "value"], q2 = ["title"], G2 = {
  key: 2,
  class: "app-sidebar-header__description"
};
function K2(e, t, i, a, n, r) {
  const s = Je("IconDockRight"), c = Je("NcButton"), d = Je("NcLoadingIcon"), _ = Je("IconStar"), v = Je("IconStarOutline"), y = Je("NcAppSidebarHeader"), m = Je("IconArrowRight"), k = Je("NcActions"), C = Je("IconClose"), S = Je("NcAppSidebarTabs"), $ = Je("NcEmptyContent"), R = Xf("focus"), N = Xf("click-outside");
  return h(), De(E1, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Se(() => [
      ye(l("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${a.uid}__header`,
        onKeydown: t[6] || (t[6] = ft((...P) => r.onKeydownEsc && r.onKeydownEsc(...P), ["esc"]))
      }, [
        r.ncContentSelector && !i.open && !i.noToggle ? (h(), De(Ed, {
          key: 0,
          to: r.ncContentSelector
        }, [
          fe(c, ii({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", i.toggleClasses],
            variant: "tertiary"
          }, i.toggleAttrs, {
            onClick: t[0] || (t[0] = (P) => e.$emit("update:open", !0))
          }), {
            icon: Se(() => [
              Ve(e.$slots, "toggle-icon", {}, () => [
                fe(s, { size: 20 })
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
          i.empty ? (h(), De(y, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: i.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Ve(e.$slots, "info", { key: 0 }, () => [
            l("div", z2, [
              r.isSlotPopulated(e.$slots.header?.()) || i.background ? (h(), p("div", {
                key: 0,
                class: Ee(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: hi({
                  backgroundImage: `url(${i.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...P) => r.onFigureClick && r.onFigureClick(...P)),
                onKeydown: t[2] || (t[2] = ft((...P) => r.onFigureClick && r.onFigureClick(...P), ["enter"]))
              }, [
                Ve(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : A("", !0),
              l("div", {
                class: Ee(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": i.nameEditable && !i.subname,
                  "app-sidebar-header__desc--with-subname--editable": i.nameEditable && i.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (h(), p("div", j2, [
                  Ve(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (h(), De(c, {
                      key: 0,
                      "aria-label": n.favoriteTranslated,
                      pressed: n.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Ce(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Se(() => [
                        i.starLoading ? (h(), De(d, { key: 0 })) : n.isStarred ? (h(), De(_, {
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
                l("div", B2, [
                  l("div", H2, [
                    ye(fe(y, {
                      class: "app-sidebar-header__mainname",
                      name: i.name,
                      linkify: i.linkifyName,
                      title: i.title,
                      tabindex: i.nameEditable ? 0 : -1,
                      onClick: Ce(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [rr, !i.nameEditable]
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
                        onKeydown: t[3] || (t[3] = ft(Ce((...P) => r.onDismissEditing && r.onDismissEditing(...P), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...P) => r.onNameInput && r.onNameInput(...P))
                      }, null, 40, V2), [
                        [R]
                      ]),
                      fe(c, {
                        "aria-label": n.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Se(() => [
                          fe(m, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [N, () => r.onSubmitName()]
                    ]) : A("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (h(), De(k, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: i.forceMenu
                    }, {
                      default: Se(() => [
                        Ve(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : A("", !0)
                  ]),
                  i.subname.trim() !== "" || e.$slots.subname ? (h(), p("p", {
                    key: 0,
                    title: i.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Ve(e.$slots, "subname", {}, () => [
                      ee(o(i.subname), 1)
                    ], !0)
                  ], 8, q2)) : A("", !0)
                ])
              ], 2)
            ])
          ], !0),
          fe(c, {
            ref: "closeButton",
            "aria-label": n.closeTranslated,
            title: n.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Ce(r.closeSidebar, ["prevent"])
          }, {
            icon: Se(() => [
              fe(C, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !i.empty ? (h(), p("div", G2, [
            Ve(e.$slots, "description", {}, void 0, !0)
          ])) : A("", !0)
        ], 2),
        ye(fe(S, {
          ref: "tabs",
          active: i.active,
          forceTabs: i.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Se(() => [
            Ve(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [rr, !i.loading]
        ]),
        i.loading ? (h(), De($, { key: 1 }, {
          icon: Se(() => [
            fe(d, { size: 64 })
          ]),
          _: 1
        })) : A("", !0)
      ], 40, U2), [
        [rr, i.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const W2 = /* @__PURE__ */ ut(M2, [["render", K2], ["__scopeId", "data-v-c2c6820b"]]), Y2 = {
  name: "NcActionLink",
  mixins: [zb],
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
}, Z2 = ["role"], X2 = ["download", "href", "aria-label", "target", "title", "role"], J2 = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, Q2 = { class: "action-link__name" }, eT = ["textContent"], tT = ["textContent"], iT = {
  key: 2,
  class: "action-link__text"
};
function aT(e, t, i, a, n, r) {
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
      Ve(e.$slots, "icon", {}, () => [
        l("span", {
          "aria-hidden": "true",
          class: Ee(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: hi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (h(), p("span", J2, [
        l("strong", Q2, o(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: o(e.text)
        }, null, 8, eT)
      ])) : e.isLongText ? (h(), p("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: o(e.text)
      }, null, 8, tT)) : (h(), p("span", iT, o(e.text), 1)),
      A("", !0)
    ], 8, X2)
  ], 8, Z2);
}
const Ic = /* @__PURE__ */ ut(Y2, [["render", aT], ["__scopeId", "data-v-32f01b7a"]]);
An(A0);
const nT = `<!--
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
`, rT = `<!--
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
`, lT = { class: "vue-skip-actions__container" }, sT = { class: "vue-skip-actions__headline" }, oT = { class: "vue-skip-actions__buttons" }, uT = /* @__PURE__ */ qt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    Ri(Pb, c), Ri(Db, "#content-vue"), Ri("appName", j(() => t.appName));
    const i = us(), a = /* @__PURE__ */ U(!1), n = /* @__PURE__ */ U(), r = j(() => n.value === "navigation" ? rT : nT);
    Cv(() => {
      const d = document.getElementById("skip-actions");
      d && (d.innerHTML = "", d.classList.add("vue-skip-actions"));
    });
    function s() {
      Ma("toggle-navigation", { open: !0 }), Pt(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function c(d) {
      a.value = d, n.value || (n.value = "navigation");
    }
    return (d, _) => (h(), p("div", {
      id: "content-vue",
      class: Ee(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": u(En) }]])
    }, [
      (h(), De(Ed, { to: "#skip-actions" }, [
        l("div", lT, [
          l("div", sT, o(u(Ft)("Keyboard navigation help")), 1),
          l("div", oT, [
            ye(fe(ca, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Ce(s, ["prevent"]),
              onFocusin: _[0] || (_[0] = (v) => n.value = "navigation"),
              onMouseover: _[1] || (_[1] = (v) => n.value = "navigation")
            }, {
              default: Se(() => [
                ee(o(u(Ft)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [rr, a.value]
            ]),
            fe(ca, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: _[2] || (_[2] = (v) => n.value = "content"),
              onMouseover: _[3] || (_[3] = (v) => n.value = "content")
            }, {
              default: Se(() => [
                ee(o(u(Ft)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          ye(fe(mu, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [rr, !u(i)]
          ])
        ])
      ])),
      Ve(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), cT = /* @__PURE__ */ ut(uT, [["__scopeId", "data-v-d13dcb98"]]), dT = { class: "library-shelf-tree-node" }, fT = ["aria-expanded", "aria-label"], hT = ["href"], pT = { class: "library-shelf-summary-title" }, vT = { dir: "auto" }, bT = { class: "library-muted" }, gT = { dir: "auto" }, mT = {
  key: 1,
  role: "status",
  class: "library-muted"
}, yT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, _T = {
  key: 3,
  class: "library-shelf-tree"
}, wT = ["disabled"], kT = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ U(!1), a = /* @__PURE__ */ U(!1), n = /* @__PURE__ */ U(!1), r = /* @__PURE__ */ U(!1), s = /* @__PURE__ */ U([]), c = /* @__PURE__ */ U(!1), d = /* @__PURE__ */ U(0);
    async function _() {
      i.value = !i.value, !(!i.value || a.value || n.value) && await v();
    }
    async function v() {
      if (!n.value) {
        n.value = !0, r.value = !1;
        try {
          const y = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(d.value) }), m = await fetch(`${t.childrenUrl}?${y}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
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
    return (y, m) => {
      const k = Je("ShelfTreeNode", !0);
      return h(), p("li", dT, [
        e.node.hasChildren ? (h(), p("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(i.value),
          "aria-label": i.value ? u(g)("library", "Collapse {folder}", { folder: e.node.label }) : u(g)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: _
        }, o(i.value ? "−" : "+"), 9, fT)) : A("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", pT, [
            l("strong", null, [
              l("bdi", vT, o(e.node.label), 1)
            ]),
            l("span", null, o(u(Ot)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", bT, [
            l("bdi", gT, o(e.node.path), 1)
          ])
        ], 8, hT),
        n.value ? (h(), p("small", mT, o(u(g)("library", "Loading folders…")), 1)) : r.value ? (h(), p("small", yT, o(u(g)("library", "Could not load folders.")), 1)) : A("", !0),
        i.value && s.value.length ? (h(), p("ul", _T, [
          (h(!0), p(K, null, de(s.value, (C) => (h(), De(k, {
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
        }, o(u(g)("library", "Load more folders")), 9, wT)) : A("", !0)
      ]);
    };
  }
}, ST = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, CT = ["src"], TT = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, ef = {
  __name: "CatalogueCover",
  props: { src: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ U(null), a = /* @__PURE__ */ U(typeof IntersectionObserver > "u"), n = /* @__PURE__ */ U("loading");
    let r;
    return Ke(() => t.src, () => {
      n.value = "loading";
    }), Ct(() => {
      a.value || (r = new IntersectionObserver((s) => {
        s.some((c) => c.isIntersecting) && (a.value = !0, r.disconnect());
      }, { rootMargin: "240px" }), r.observe(i.value));
    }), Ci(() => r?.disconnect()), (s, c) => (h(), p("span", {
      ref_key: "frame",
      ref: i,
      class: Ee(["library-cover-frame", { "library-cover-frame--error": n.value === "error" }])
    }, [
      n.value === "loading" ? (h(), p("span", ST)) : A("", !0),
      (h(), p("img", {
        key: e.src,
        class: Ee(["library-cover-image", { "library-cover-image--loaded": n.value === "loaded" }]),
        src: a.value ? e.src : void 0,
        alt: "",
        loading: "lazy",
        decoding: "async",
        onLoad: c[0] || (c[0] = (d) => n.value = "loaded"),
        onError: c[1] || (c[1] = (d) => n.value = "error")
      }, null, 42, CT)),
      n.value === "error" ? (h(), p("span", TT, o(u(g)("library", "Cover unavailable")), 1)) : A("", !0)
    ], 2));
  }
};
async function Lp(e = "", t = "", i = null) {
  const a = await fetch(`${At("/apps/library/api/lists")}${e}`, {
    method: i === null ? "GET" : "POST",
    credentials: "same-origin",
    cache: "no-store",
    headers: { Accept: "application/json", ...i === null ? {} : { "Content-Type": "application/json", requesttoken: t } },
    ...i === null ? {} : { body: JSON.stringify(i) }
  });
  if (!a.ok) {
    const n = a.status === 409 ? g("library", "This list changed in another tab. Reload the list before trying again. Your unsaved text is still here.") : a.status === 404 ? g("library", "This list or entry is no longer available.") : a.status === 422 ? g("library", "Check the name, text length and selected books, then try again.") : g("library", "Could not save or load the list. Check your connection and reload before retrying."), r = new Error(n);
    throw r.status = a.status, r;
  }
  return a.json();
}
const Yn = /* @__PURE__ */ new Map();
function mn(e = "", t = "", i = null) {
  if (i !== null)
    return Yn.clear(), Lp(e, t, i).finally(() => Yn.clear());
  if (Yn.has(e)) return Yn.get(e);
  const a = Lp(e, t).finally(() => {
    Yn.get(e) === a && Yn.delete(e);
  });
  return Yn.set(e, a), a;
}
const AT = ["aria-busy"], ET = { class: "library-list-inline-actions" }, $T = ["disabled", "aria-label"], xT = ["value"], OT = ["disabled"], NT = ["href"], RT = ["href"], IT = {
  key: 0,
  role: "status"
}, LT = {
  key: 1,
  role: "alert"
}, PT = ["disabled"], DT = {
  key: 3,
  role: "status"
}, hd = {
  __name: "AddToList",
  props: { preferredListId: { type: Number, default: null }, itemIds: { type: Array, required: !0 }, requestToken: { type: String, default: "" }, listsUrl: { type: String, required: !0 } },
  emits: ["added"],
  setup(e, { emit: t }) {
    const i = e, a = t, n = /* @__PURE__ */ U([]), r = /* @__PURE__ */ U(""), s = /* @__PURE__ */ U(!1), c = /* @__PURE__ */ U(""), d = /* @__PURE__ */ U("");
    async function _() {
      s.value = !0, c.value = "";
      try {
        const y = await mn(i.itemIds.length === 1 ? `?itemId=${i.itemIds[0]}` : "");
        n.value = y.lists;
        const m = Number(r.value) || i.preferredListId || Number(new URLSearchParams(window.location.search).get("addToList"));
        r.value = String(n.value.find((k) => k.id === m)?.id || n.value[0]?.id || "");
      } catch (y) {
        c.value = y.message;
      } finally {
        s.value = !1;
      }
    }
    async function v() {
      const y = n.value.find((k) => k.id === Number(r.value));
      if (s.value || !y || i.itemIds.length === 0) return;
      const m = [...i.itemIds];
      s.value = !0, c.value = "", d.value = "";
      try {
        const k = await mn(`/${y.id}/actions`, i.requestToken, { action: "add", revision: y.revision, itemIds: m });
        y.revision = k.revision, d.value = g("library", "Added: {added}. Already in list: {present}. Unavailable: {skipped}.", { added: k.added, present: k.alreadyPresent, skipped: k.skipped }), m.length === 1 && k.skipped === 0 && (y.containsItem = !0), a("added", k);
      } catch (k) {
        c.value = k.message;
      } finally {
        s.value = !1;
      }
    }
    return Ke(() => i.itemIds.join(","), () => {
      d.value = "";
    }), Ct(_), (y, m) => (h(), p("div", {
      class: "library-add-to-list",
      "aria-busy": s.value ? "true" : "false"
    }, [
      l("div", ET, [
        n.value.length ? ye((h(), p("select", {
          key: 0,
          "onUpdate:modelValue": m[0] || (m[0] = (k) => r.value = k),
          disabled: s.value,
          "aria-label": u(g)("library", "Choose a list"),
          onChange: m[1] || (m[1] = (k) => d.value = "")
        }, [
          (h(!0), p(K, null, de(n.value, (k) => (h(), p("option", {
            key: k.id,
            value: String(k.id)
          }, o(k.name), 9, xT))), 128))
        ], 40, $T)), [
          [nt, r.value]
        ]) : A("", !0),
        n.value.length ? (h(), p("button", {
          key: 1,
          type: "button",
          class: "button primary",
          disabled: s.value || e.itemIds.length === 0 || !r.value,
          onClick: v
        }, o(u(g)("library", "Add to list")), 9, OT)) : A("", !0),
        !s.value && !n.value.length && !c.value ? (h(), p("a", {
          key: 2,
          href: `${e.listsUrl}&new=1`
        }, o(u(g)("library", "Create a new list")), 9, NT)) : A("", !0),
        d.value && r.value ? (h(), p("a", {
          key: 3,
          href: `${e.listsUrl}&listId=${r.value}`
        }, o(u(g)("library", "Back to list")), 9, RT)) : A("", !0)
      ]),
      s.value ? (h(), p("p", IT, o(u(g)("library", "Loading or saving…")), 1)) : A("", !0),
      c.value ? (h(), p("p", LT, o(c.value), 1)) : A("", !0),
      c.value ? (h(), p("button", {
        key: 2,
        type: "button",
        class: "button secondary",
        disabled: s.value,
        onClick: _
      }, o(u(g)("library", "Reload list")), 9, PT)) : A("", !0),
      d.value ? (h(), p("p", DT, o(d.value), 1)) : A("", !0)
    ], 8, AT));
  }
}, FT = ["onKeydown"], MT = ["aria-label", "aria-describedby"], UT = ["id"], He = {
  __name: "LabelHelp",
  props: { text: { type: String, required: !0 } },
  setup(e) {
    const t = Ay(), i = /* @__PURE__ */ U(null), a = /* @__PURE__ */ U(null), n = /* @__PURE__ */ U(!1), r = /* @__PURE__ */ U({});
    let s;
    const c = `${t}-label`;
    Ct(() => {
      const $ = i.value?.closest("label"), R = $?.querySelector("input, select, textarea"), N = i.value?.closest("h1, h2, h3, h4");
      $ && R && !$.htmlFor && (R.id ||= `${t}-control`, $.htmlFor = R.id);
      for (const P of [R, N])
        P && !P.hasAttribute("aria-label") && !P.hasAttribute("aria-labelledby") && P.setAttribute("aria-labelledby", c);
    });
    async function d() {
      clearTimeout(s), n.value = !0, await Pt(), _();
    }
    function _() {
      if (!i.value || !a.value) return;
      const $ = i.value.getBoundingClientRect(), R = a.value.offsetHeight;
      r.value = { left: `${Math.max(8, Math.min($.left, window.innerWidth - 336))}px`, top: `${Math.max(8, $.bottom + R + 12 < window.innerHeight ? $.bottom + 8 : $.top - R - 8)}px` };
    }
    function v() {
      clearTimeout(s);
    }
    function y() {
      clearTimeout(s), n.value = !1;
    }
    function m() {
      s = setTimeout(() => {
        i.value?.contains(document.activeElement) || y();
      }, 150);
    }
    function k($) {
      !i.value?.contains($.target) && !a.value?.contains($.target) && y();
    }
    function C($) {
      $.key === "Escape" && y();
    }
    function S($) {
      n.value && (!($.target instanceof Node) || !a.value?.contains($.target)) && _();
    }
    return document.addEventListener("keydown", C), document.addEventListener("pointerdown", k), window.addEventListener("scroll", S, !0), Ci(() => {
      clearTimeout(s), document.removeEventListener("pointerdown", k), window.removeEventListener("scroll", S, !0), document.removeEventListener("keydown", C);
    }), ($, R) => (h(), p("span", {
      ref_key: "anchor",
      ref: i,
      class: "library-label-help",
      onPointerenter: R[0] || (R[0] = (N) => N.pointerType !== "touch" && d()),
      onPointerleave: m,
      onKeydown: ft(Ce(y, ["stop", "prevent"]), ["esc"])
    }, [
      l("span", { id: c }, [
        Ve($.$slots, "default")
      ]),
      l("button", {
        type: "button",
        class: "library-label-help-button",
        "aria-label": u(g)("library", "Help"),
        "aria-describedby": n.value ? u(t) : void 0,
        onFocus: d,
        onBlur: m,
        onClick: Ce(d, ["stop", "prevent"])
      }, "?", 40, MT),
      (h(), De(Ed, { to: "body" }, [
        n.value ? (h(), p("span", {
          key: 0,
          id: u(t),
          ref_key: "popup",
          ref: a,
          class: "library-label-help-popup",
          role: "tooltip",
          style: hi(r.value),
          onPointerenter: v,
          onPointerleave: m
        }, o(e.text), 45, UT)) : A("", !0)
      ]))
    ], 40, FT));
  }
}, zT = ["aria-label", "aria-busy"], jT = { class: "library-lists-heading" }, BT = ["href"], HT = ["disabled"], VT = {
  key: 0,
  role: "alert"
}, qT = ["disabled"], GT = {
  key: 2,
  role: "status"
}, KT = {
  key: 3,
  role: "status"
}, WT = ["disabled"], YT = ["disabled"], ZT = { class: "library-list-actions" }, XT = ["disabled"], JT = ["disabled"], QT = {
  key: 0,
  class: "library-list-description",
  dir: "auto"
}, eA = {
  key: 1,
  class: "library-list-actions"
}, tA = ["href"], iA = ["disabled"], aA = ["disabled"], nA = ["aria-label"], rA = ["disabled"], lA = ["disabled"], sA = {
  key: 3,
  class: "library-lists-empty"
}, oA = ["start"], uA = ["id", "onDrop"], cA = { class: "library-list-entry-heading" }, dA = ["draggable", "title", "onDragstart"], fA = ["src"], hA = { class: "library-list-book" }, pA = { key: 0 }, vA = ["href"], bA = { key: 1 }, gA = {
  key: 2,
  dir: "auto"
}, mA = { key: 3 }, yA = ["href"], _A = {
  key: 0,
  class: "library-list-note",
  dir: "auto"
}, wA = ["onSubmit"], kA = ["disabled"], SA = { class: "library-list-actions" }, CA = ["disabled"], TA = ["disabled"], AA = {
  key: 2,
  class: "library-list-actions"
}, EA = ["disabled", "onClick"], $A = ["disabled", "onClick"], xA = ["disabled", "onClick"], OA = ["disabled", "onClick"], NA = {
  key: 3,
  class: "library-list-confirm"
}, RA = ["disabled", "onClick"], IA = ["disabled"], LA = ["aria-label"], PA = ["disabled"], DA = ["disabled"], FA = {
  key: 1,
  class: "library-lists-empty"
}, MA = { class: "library-list-cards" }, UA = ["href"], zA = { dir: "auto" }, jA = {
  key: 0,
  dir: "auto"
}, BA = {
  __name: "PersonalLists",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 }, listsUrl: { type: String, required: !0 } },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const i = e, a = t, n = /* @__PURE__ */ U([]), r = /* @__PURE__ */ U(null), s = /* @__PURE__ */ U(!1), c = /* @__PURE__ */ U(""), d = /* @__PURE__ */ U(""), _ = /* @__PURE__ */ U(!1), v = /* @__PURE__ */ Lt({ name: "", description: "" }), y = /* @__PURE__ */ U(null), m = /* @__PURE__ */ U(""), k = /* @__PURE__ */ U(!1), C = /* @__PURE__ */ U(null), S = /* @__PURE__ */ U(null), $ = /* @__PURE__ */ U(null), R = /* @__PURE__ */ U(Number(new URLSearchParams(window.location.search).get("listId")) || null), N = Number(new URLSearchParams(window.location.search).get("addItem")) || null, P = j(() => !s.value && y.value === null);
    async function I(H = 1, Y = _.value) {
      s.value = !0, c.value = "";
      try {
        R.value ? r.value = await mn(`/${R.value}?page=${H}`) : n.value = (await mn()).lists, Y || (y.value = null, _.value = !1);
      } catch (L) {
        c.value = L.message;
      } finally {
        s.value = !1;
      }
    }
    function he() {
      v.name = r.value?.list.name || "", v.description = r.value?.list.description || "", _.value = !0, k.value = !1, c.value = "";
    }
    async function Q() {
      s.value = !0, c.value = "", d.value = "";
      try {
        if (r.value)
          await mn(`/${r.value.list.id}/actions`, i.requestToken, { action: "update", revision: r.value.list.revision, ...v });
        else {
          R.value = (await mn("", i.requestToken, v)).list.id;
          const H = new URL(window.location.href);
          H.searchParams.set("listId", R.value), window.history.replaceState({}, "", H);
        }
        _.value = !1, await I(1, !0), a("changed"), d.value = g("library", "List saved."), await Pt(), $.value?.focus();
      } catch (H) {
        c.value = H.message;
      } finally {
        s.value = !1;
      }
    }
    async function x(H, Y) {
      s.value = !0, c.value = "", d.value = "";
      try {
        const L = await mn(`/${r.value.list.id}/actions`, i.requestToken, { ...H, revision: r.value.list.revision });
        if (H.action === "delete") {
          r.value = null, R.value = null, k.value = !1;
          const G = new URL(window.location.href);
          G.searchParams.delete("listId"), window.history.replaceState({}, "", G);
        }
        if (y.value = null, C.value = null, H.action === "note") {
          const G = r.value.entries.find((X) => X.id === H.entryId);
          G && (G.note = H.note.trim()), r.value.list.revision = L.revision;
        } else await I(r.value?.page || 1);
        H.action === "delete" && a("changed"), d.value = Y, await Pt(), H.action === "move" ? document.getElementById(`library-list-entry-${H.entryId}`)?.focus() : $.value?.focus();
      } catch (L) {
        c.value = L.message;
      } finally {
        s.value = !1;
      }
    }
    function B(H) {
      y.value = H.id, m.value = H.note, C.value = null;
    }
    function W(H, Y) {
      return x({ action: "move", entryId: H.id, direction: Y }, g("library", "Reading order saved."));
    }
    function Z(H, Y) {
      S.value = Y.id, H.dataTransfer.setData("text/plain", String(Y.id));
    }
    function le(H) {
      if (S.value === null || !P.value) return;
      const Y = S.value;
      return S.value = null, x({ action: "move", entryId: Y, beforeId: H }, g("library", "Reading order saved."));
    }
    return Ct(async () => {
      await I(), !R.value && new URLSearchParams(window.location.search).get("new") === "1" && he();
    }), (H, Y) => (h(), p("section", {
      class: "library-personal-lists",
      "aria-label": u(g)("library", "Personal lists"),
      "aria-busy": s.value ? "true" : "false"
    }, [
      l("header", jT, [
        l("div", null, [
          R.value ? (h(), p("a", {
            key: 0,
            href: e.listsUrl
          }, "← " + o(u(g)("library", "All lists")), 9, BT)) : A("", !0),
          l("h1", {
            ref_key: "heading",
            ref: $,
            tabindex: "-1"
          }, [
            fe(He, {
              text: u(g)("library", "Private reading lists, in your own order, with your own notes.")
            }, {
              default: Se(() => [
                ee(o(r.value?.list.name || u(g)("library", "Lists")), 1)
              ]),
              _: 1
            }, 8, ["text"])
          ], 512)
        ]),
        !r.value && !R.value ? (h(), p("button", {
          key: 0,
          type: "button",
          class: "button primary",
          disabled: s.value || _.value,
          onClick: he
        }, o(u(g)("library", "New list")), 9, HT)) : A("", !0)
      ]),
      c.value ? (h(), p("p", VT, o(c.value), 1)) : A("", !0),
      c.value ? (h(), p("button", {
        key: 1,
        type: "button",
        class: "button secondary",
        disabled: s.value,
        onClick: Y[0] || (Y[0] = (L) => I(r.value?.page || 1, !0))
      }, o(u(g)("library", "Reload list")), 9, qT)) : A("", !0),
      d.value ? (h(), p("p", GT, o(d.value), 1)) : A("", !0),
      s.value ? (h(), p("p", KT, o(u(g)("library", "Loading or saving…")), 1)) : A("", !0),
      _.value ? (h(), p("form", {
        key: 4,
        class: "library-list-editor",
        onSubmit: Ce(Q, ["prevent"])
      }, [
        l("label", null, [
          ee(o(u(g)("library", "List name")), 1),
          ye(l("input", {
            "onUpdate:modelValue": Y[1] || (Y[1] = (L) => v.name = L),
            required: "",
            maxlength: "120",
            disabled: s.value
          }, null, 8, WT), [
            [ze, v.name]
          ])
        ]),
        l("label", null, [
          ee(o(u(g)("library", "Description / list note")), 1),
          ye(l("textarea", {
            "onUpdate:modelValue": Y[2] || (Y[2] = (L) => v.description = L),
            rows: "3",
            maxlength: "10000",
            disabled: s.value
          }, null, 8, YT), [
            [ze, v.description]
          ])
        ]),
        l("div", ZT, [
          l("button", {
            type: "submit",
            class: "button primary",
            disabled: s.value || !v.name.trim()
          }, o(u(g)("library", "Save list")), 9, XT),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: s.value,
            onClick: Y[3] || (Y[3] = (L) => _.value = !1)
          }, o(u(g)("library", "Cancel")), 9, JT)
        ])
      ], 32)) : A("", !0),
      r.value ? (h(), p(K, { key: 5 }, [
        r.value.list.description && !_.value ? (h(), p("p", QT, o(r.value.list.description), 1)) : A("", !0),
        _.value ? A("", !0) : (h(), p("div", eA, [
          l("a", {
            class: "button primary",
            href: `${e.catalogueUrl}?addToList=${r.value.list.id}`
          }, o(u(g)("library", "Add books from catalogue")), 9, tA),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value,
            onClick: he
          }, o(u(g)("library", "Edit list")), 9, iA),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value,
            onClick: Y[4] || (Y[4] = (L) => k.value = !k.value)
          }, o(u(g)("library", "Delete list")), 9, aA)
        ])),
        k.value ? (h(), p("div", {
          key: 2,
          class: "library-list-confirm",
          role: "group",
          "aria-label": u(g)("library", "Confirm list deletion")
        }, [
          l("p", null, o(u(g)("library", "Delete this list and all its notes? Books stay in your library. This cannot be undone.")), 1),
          l("button", {
            class: "button",
            type: "button",
            disabled: !P.value,
            onClick: Y[5] || (Y[5] = (L) => x({ action: "delete" }, u(g)("library", "List deleted.")))
          }, o(u(g)("library", "Delete list and notes")), 9, rA),
          l("button", {
            class: "button secondary",
            type: "button",
            disabled: s.value,
            onClick: Y[6] || (Y[6] = (L) => k.value = !1)
          }, o(u(g)("library", "Cancel")), 9, lA)
        ], 8, nA)) : A("", !0),
        r.value.total === 0 && !s.value ? (h(), p("p", sA, o(u(g)("library", "This list is empty. Select books in the catalogue and choose Add to list.")), 1)) : A("", !0),
        l("ol", {
          class: "library-list-entries",
          start: (r.value.page - 1) * 25 + 1
        }, [
          (h(!0), p(K, null, de(r.value.entries, (L) => (h(), p("li", {
            id: `library-list-entry-${L.id}`,
            key: L.id,
            class: "library-list-entry",
            tabindex: "-1",
            onDragover: Y[11] || (Y[11] = Ce(() => {
            }, ["prevent"])),
            onDrop: Ce((G) => le(L.id), ["prevent"])
          }, [
            l("div", cA, [
              l("span", {
                class: "library-list-drag",
                draggable: P.value,
                title: u(g)("library", "Drag to reorder, or use Move up and Move down"),
                "aria-hidden": "true",
                onDragstart: (G) => Z(G, L),
                onDragend: Y[7] || (Y[7] = (G) => S.value = null)
              }, "⠿", 40, dA),
              L.book ? (h(), p("img", {
                key: 0,
                src: L.book.coverUrl,
                alt: "",
                width: "48",
                height: "64",
                loading: "lazy"
              }, null, 8, fA)) : A("", !0),
              l("div", hA, [
                L.book ? (h(), p("h2", pA, [
                  l("a", {
                    href: L.book.detailsUrl,
                    dir: "auto"
                  }, o(L.book.title), 9, vA)
                ])) : (h(), p("h2", bA, o(u(g)("library", "Unavailable book")), 1)),
                L.book?.creators ? (h(), p("p", gA, o(L.book.creators), 1)) : A("", !0),
                L.book ? A("", !0) : (h(), p("p", mA, o(u(g)("library", "The file is missing or access is unavailable. Your note and place in the list are kept.")), 1))
              ]),
              L.book ? (h(), p("a", {
                key: 1,
                class: "button secondary",
                href: L.book.openUrl
              }, o(u(g)("library", "Open")), 9, yA)) : A("", !0)
            ]),
            L.note && y.value !== L.id ? (h(), p("p", _A, o(L.note), 1)) : A("", !0),
            y.value === L.id ? (h(), p("form", {
              key: 1,
              class: "library-list-editor",
              onSubmit: Ce((G) => x({ action: "note", entryId: L.id, note: m.value }, u(g)("library", "Note saved.")), ["prevent"])
            }, [
              l("label", null, [
                ee(o(u(g)("library", "Your note for this book in this list")), 1),
                ye(l("textarea", {
                  "onUpdate:modelValue": Y[8] || (Y[8] = (G) => m.value = G),
                  maxlength: "10000",
                  rows: "3",
                  disabled: s.value
                }, null, 8, kA), [
                  [ze, m.value]
                ])
              ]),
              l("div", SA, [
                l("button", {
                  type: "submit",
                  class: "button primary",
                  disabled: s.value
                }, o(u(g)("library", "Save note")), 9, CA),
                l("button", {
                  type: "button",
                  class: "button secondary",
                  disabled: s.value,
                  onClick: Y[9] || (Y[9] = (G) => y.value = null)
                }, o(u(g)("library", "Cancel")), 9, TA)
              ])
            ], 40, wA)) : (h(), p("div", AA, [
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value,
                onClick: (G) => B(L)
              }, o(L.note ? u(g)("library", "Edit note") : u(g)("library", "Add note")), 9, EA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value || L.number === 1,
                onClick: (G) => W(L, "up")
              }, o(u(g)("library", "Move up")), 9, $A),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value || L.number === r.value.total,
                onClick: (G) => W(L, "down")
              }, o(u(g)("library", "Move down")), 9, xA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value,
                onClick: (G) => C.value = L.id
              }, o(u(g)("library", "Remove from list")), 9, OA)
            ])),
            C.value === L.id ? (h(), p("div", NA, [
              l("p", null, o(u(g)("library", "Remove this entry and its note? The book stays in your library.")), 1),
              l("button", {
                type: "button",
                class: "button",
                disabled: !P.value,
                onClick: (G) => x({ action: "remove", entryId: L.id }, u(g)("library", "Book removed from list."))
              }, o(u(g)("library", "Remove entry and note")), 9, RA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: s.value,
                onClick: Y[10] || (Y[10] = (G) => C.value = null)
              }, o(u(g)("library", "Cancel")), 9, IA)
            ])) : A("", !0)
          ], 40, uA))), 128))
        ], 8, oA),
        r.value.pages > 1 ? (h(), p("nav", {
          key: 4,
          class: "library-list-actions",
          "aria-label": u(g)("library", "List pages")
        }, [
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value || r.value.page === 1,
            onClick: Y[12] || (Y[12] = (L) => I(r.value.page - 1))
          }, o(u(g)("library", "Previous page")), 9, PA),
          l("span", null, o(u(g)("library", "Page {page} of {pages}", { page: r.value.page, pages: r.value.pages })), 1),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value || r.value.page === r.value.pages,
            onClick: Y[13] || (Y[13] = (L) => I(r.value.page + 1))
          }, o(u(g)("library", "Next page")), 9, DA)
        ], 8, LA)) : A("", !0)
      ], 64)) : R.value ? A("", !0) : (h(), p(K, { key: 6 }, [
        u(N) ? (h(), De(hd, {
          key: 0,
          "item-ids": [u(N)],
          "request-token": e.requestToken,
          "lists-url": e.listsUrl,
          onAdded: Y[14] || (Y[14] = (L) => I())
        }, null, 8, ["item-ids", "request-token", "lists-url"])) : A("", !0),
        !n.value.length && !s.value && !_.value ? (h(), p("p", FA, o(u(g)("library", "Create your first list for a reading plan, a project or books to return to.")), 1)) : A("", !0),
        l("ul", MA, [
          (h(!0), p(K, null, de(n.value, (L) => (h(), p("li", {
            key: L.id
          }, [
            l("a", {
              href: `${e.listsUrl}&listId=${L.id}`
            }, [
              l("h2", zA, o(L.name), 1),
              l("p", null, o(u(g)("library", "Books: {count}", { count: L.count })), 1),
              L.description ? (h(), p("p", jA, o(L.description), 1)) : A("", !0)
            ], 8, UA)
          ]))), 128))
        ])
      ], 64))
    ], 8, zT));
  }
}, tf = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [a, n] of t)
    i[a] = n;
  return i;
}, HA = ["aria-busy"], VA = ["href"], qA = { id: "author-conflicts-heading" }, GA = {
  key: 0,
  role: "status"
}, KA = {
  key: 1,
  role: "status"
}, WA = {
  key: 2,
  role: "alert"
}, YA = ["disabled"], ZA = ["aria-label"], XA = { class: "author-conflict-comparison" }, JA = { dir: "auto" }, QA = { dir: "auto" }, eE = { key: 0 }, tE = { key: 0 }, iE = { class: "author-conflict-actions" }, aE = ["disabled"], nE = ["disabled"], rE = ["disabled"], lE = { key: 0 }, sE = { class: "author-conflict-books" }, oE = ["href"], uE = ["disabled", "onClick"], cE = ["aria-label"], dE = ["disabled"], fE = ["disabled"], hE = {
  __name: "AuthorConflicts",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ U(null), a = /* @__PURE__ */ U(null), n = /* @__PURE__ */ U(!1), r = /* @__PURE__ */ U(""), s = /* @__PURE__ */ U(""), c = /* @__PURE__ */ U(1), d = /* @__PURE__ */ U(null);
    async function _(k, C = null) {
      const S = await fetch(At("/apps/library/api/authors/conflicts") + k, {
        credentials: "same-origin",
        cache: "no-store",
        method: C === null ? "GET" : "POST",
        headers: { Accept: "application/json", ...C === null ? {} : { "Content-Type": "application/json", requesttoken: t.requestToken } },
        ...C === null ? {} : { body: JSON.stringify(C) }
      });
      if (!S.ok) throw new Error(S.status === 409 ? g("library", "This book or its author assignments changed. Reload and review again.") : g("library", "Could not load or resolve the author change. Please retry."));
      return S.json();
    }
    async function v(k = 1) {
      n.value = !0, r.value = "", a.value = null;
      try {
        i.value = await _(`?page=${k}`), c.value = k;
      } catch (C) {
        r.value = C.message;
      } finally {
        n.value = !1;
      }
    }
    async function y(k) {
      n.value = !0, r.value = "", s.value = "", a.value = null;
      try {
        a.value = await _(`/${k.id}`), await Pt(), d.value?.focus();
      } catch (C) {
        r.value = C.message;
      } finally {
        n.value = !1;
      }
    }
    async function m(k) {
      n.value = !0, r.value = "";
      try {
        await _(`/${a.value.id}`, { choice: k, token: a.value.token }), s.value = g("library", "Author change resolved. Book metadata and files are unchanged."), await v(c.value), !i.value.books.length && c.value > 1 && await v(c.value - 1);
      } catch (C) {
        r.value = C.message, a.value = null;
      } finally {
        n.value = !1;
      }
    }
    return Ct(() => v()), (k, C) => (h(), p("section", {
      class: "author-conflicts",
      "aria-busy": n.value,
      "aria-labelledby": "author-conflicts-heading"
    }, [
      l("a", {
        href: `${e.catalogueUrl}?authors=1`
      }, o(u(g)("library", "All authors")), 9, VA),
      l("h1", qA, o(u(g)("library", "Review imported author changes")), 1),
      n.value ? (h(), p("p", GA, o(u(g)("library", "Loading")), 1)) : A("", !0),
      s.value ? (h(), p("p", KA, o(s.value), 1)) : A("", !0),
      r.value ? (h(), p("p", WA, [
        ee(o(r.value) + " ", 1),
        l("button", {
          disabled: n.value,
          onClick: C[0] || (C[0] = (S) => v(c.value))
        }, o(u(g)("library", "Reload")), 9, YA)
      ])) : A("", !0),
      a.value ? (h(), p("section", {
        key: 3,
        class: "author-conflict-review",
        "aria-label": u(g)("library", "Review change")
      }, [
        l("h2", {
          ref_key: "heading",
          ref: d,
          tabindex: "-1",
          dir: "auto"
        }, o(a.value.title), 513),
        l("div", XA, [
          l("section", null, [
            l("h3", null, o(u(g)("library", "Current assignments")), 1),
            l("ol", null, [
              (h(!0), p(K, null, de(a.value.current, (S, $) => (h(), p("li", { key: $ }, [
                l("strong", JA, o(S.name), 1),
                l("span", QA, o(u(g)("library", "Original credit: {credit}", { credit: S.credit })), 1)
              ]))), 128))
            ]),
            a.value.current.length ? A("", !0) : (h(), p("p", eE, o(u(g)("library", "No authors recorded")), 1))
          ]),
          l("section", null, [
            l("h3", null, o(u(g)("library", "Imported credits")), 1),
            l("ol", null, [
              (h(!0), p(K, null, de(a.value.incoming, (S, $) => (h(), p("li", {
                key: $,
                dir: "auto"
              }, o(S), 1))), 128))
            ]),
            a.value.incoming.length ? A("", !0) : (h(), p("p", tE, o(u(g)("library", "No authors recorded")), 1))
          ])
        ]),
        l("p", null, o(u(g)("library", "Using imported authors replaces this book’s current assignments. Book metadata and files stay unchanged. This decision has no automatic undo.")), 1),
        l("div", iE, [
          l("button", {
            disabled: n.value,
            onClick: C[1] || (C[1] = (S) => m("keep"))
          }, o(u(g)("library", "Keep current assignments")), 9, aE),
          l("button", {
            disabled: n.value,
            onClick: C[2] || (C[2] = (S) => m("import"))
          }, o(u(g)("library", "Use imported authors")), 9, nE),
          l("button", {
            disabled: n.value,
            onClick: C[3] || (C[3] = (S) => a.value = null)
          }, o(u(g)("library", "Cancel")), 9, rE)
        ])
      ], 8, ZA)) : i.value ? (h(), p(K, { key: 4 }, [
        i.value.books.length ? A("", !0) : (h(), p("p", lE, o(u(g)("library", "No author changes need review.")), 1)),
        l("ul", sE, [
          (h(!0), p(K, null, de(i.value.books, (S) => (h(), p("li", {
            key: S.id
          }, [
            l("a", {
              href: u(At)("/apps/library/items/{id}", { id: S.id }),
              dir: "auto"
            }, o(S.title), 9, oE),
            l("button", {
              disabled: n.value,
              onClick: ($) => y(S)
            }, o(u(g)("library", "Review change")), 9, uE)
          ]))), 128))
        ]),
        l("nav", {
          "aria-label": u(g)("library", "Author pages")
        }, [
          l("button", {
            disabled: n.value || c.value === 1,
            onClick: C[4] || (C[4] = (S) => v(c.value - 1))
          }, o(u(g)("library", "Previous")), 9, dE),
          l("span", null, o(u(g)("library", "Page {page}", { page: c.value })), 1),
          l("button", {
            disabled: n.value || !i.value.hasNext,
            onClick: C[5] || (C[5] = (S) => v(c.value + 1))
          }, o(u(g)("library", "Next")), 9, fE)
        ], 8, cE)
      ], 64)) : A("", !0)
    ], 8, HA));
  }
}, pE = /* @__PURE__ */ tf(hE, [["__scopeId", "data-v-8078a3f5"]]), vE = ["aria-busy"], bE = ["href"], gE = { class: "author-profile-header" }, mE = {
  key: 0,
  class: "author-portrait"
}, yE = ["src", "alt"], _E = {
  key: 1,
  "aria-hidden": "true"
}, wE = { id: "authors-heading" }, kE = {
  key: 1,
  role: "alert"
}, SE = ["disabled"], CE = {
  key: 2,
  role: "status"
}, TE = {
  key: 3,
  role: "status"
}, AE = { for: "author-search" }, EE = ["disabled"], $E = {
  key: 0,
  role: "status"
}, xE = ["href"], OE = ["disabled"], NE = {
  key: 1,
  class: "author-directory"
}, RE = ["href"], IE = { dir: "auto" }, LE = ["disabled", "onClick"], PE = { key: 2 }, DE = { key: 0 }, FE = ["href"], ME = {
  key: 1,
  class: "author-biography"
}, UE = { dir: "auto" }, zE = ["aria-expanded"], jE = { key: 2 }, BE = ["href"], HE = {
  key: 3,
  role: "status"
}, VE = ["disabled"], qE = ["disabled"], GE = { for: "author-display" }, KE = ["disabled"], WE = { for: "author-sort" }, YE = ["disabled"], ZE = { for: "author-given" }, XE = ["disabled"], JE = { for: "author-family" }, QE = ["disabled"], e$ = { for: "author-bio" }, t$ = ["disabled"], i$ = { for: "author-photo" }, a$ = ["disabled"], n$ = { key: 0 }, r$ = ["disabled"], l$ = ["disabled"], s$ = ["disabled"], o$ = {
  key: 6,
  class: "author-actions"
}, u$ = ["disabled"], c$ = ["aria-label"], d$ = { role: "status" }, f$ = { for: "target-search" }, h$ = ["disabled"], p$ = ["disabled"], v$ = ["disabled"], b$ = { for: "target-author" }, g$ = ["disabled"], m$ = { value: "" }, y$ = ["value"], _$ = ["disabled"], w$ = ["disabled"], k$ = ["aria-label"], S$ = ["disabled"], C$ = ["aria-label"], T$ = { for: "author-book-search" }, A$ = ["disabled"], E$ = ["disabled"], $$ = { for: "author-book-sort" }, x$ = ["disabled"], O$ = { value: "title" }, N$ = { value: "newest" }, R$ = { value: "series" }, I$ = { class: "author-view-controls" }, L$ = ["aria-pressed"], P$ = ["aria-pressed"], D$ = { key: 0 }, F$ = { key: 1 }, M$ = { key: 0 }, U$ = ["value", "aria-label", "disabled"], z$ = ["href", "aria-label"], j$ = { class: "author-book-description" }, B$ = ["href"], H$ = {
  key: 0,
  dir: "auto"
}, V$ = { key: 1 }, q$ = { key: 2 }, G$ = {
  key: 3,
  dir: "auto"
}, K$ = {
  key: 6,
  class: "author-history"
}, W$ = ["data-operation-id"], Y$ = { key: 0 }, Z$ = ["disabled", "onClick"], X$ = ["aria-label"], J$ = ["disabled"], Q$ = ["disabled"], ex = {
  __name: "Authors",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ U(null), a = /* @__PURE__ */ U(!1), n = /* @__PURE__ */ U(""), r = /* @__PURE__ */ U(""), s = /* @__PURE__ */ U(!1), c = /* @__PURE__ */ U([]), d = /* @__PURE__ */ U(""), _ = /* @__PURE__ */ U([]), v = /* @__PURE__ */ U(""), y = /* @__PURE__ */ U(null), m = /* @__PURE__ */ U(!1), k = /* @__PURE__ */ U([]), C = /* @__PURE__ */ U(""), S = /* @__PURE__ */ U(!1), $ = /* @__PURE__ */ U(1), R = new URLSearchParams(location.search).get("authorConflicts") === "1", N = /* @__PURE__ */ U(Number(new URLSearchParams(location.search).get("authorId")) || null), P = /* @__PURE__ */ U(""), I = /* @__PURE__ */ U("title"), he = /* @__PURE__ */ U("grid"), Q = /* @__PURE__ */ U(!1), x = /* @__PURE__ */ U(!1), B = /* @__PURE__ */ U(null), W = /* @__PURE__ */ U(!1), Z = /* @__PURE__ */ Lt({ display_name: "", sort_name: "", given_name: "", family_name: "", biography: "" }), le = j(() => (i.value?.author?.display_name || "").trim().split(/\s+/u).slice(0, 2).map((be) => Array.from(be)[0] || "").join("").toLocaleUpperCase()), H = j(() => At("/apps/library/api/authors/{id}/photo", { id: N.value }) + "?v=" + encodeURIComponent(i.value?.author?.photo_key || "")), Y = j(() => {
      if (I.value !== "series") return [{ name: null, books: i.value?.books || [] }];
      const be = /* @__PURE__ */ new Map();
      for (const V of i.value?.books || []) {
        const ne = V.series_name || "";
        be.has(ne) || be.set(ne, []), be.get(ne).push(V);
      }
      return Array.from(be, ([V, ne]) => ({ name: V, books: ne }));
    });
    function L(be) {
      return At("/apps/library/items/{id}/cover", { id: be.id }) + "?v=" + encodeURIComponent(`${be.cover_revision || ""}-${be.etag || ""}`);
    }
    function G(be) {
      B.value = be.target.files?.[0] || null, B.value && (W.value = !1);
    }
    async function X(be, V = null) {
      const ne = await fetch(At("/apps/library/api/authors") + be, {
        credentials: "same-origin",
        cache: "no-store",
        method: V === null ? "GET" : "POST",
        headers: { Accept: "application/json", ...V === null ? {} : { ...V instanceof FormData ? {} : { "Content-Type": "application/json" }, requesttoken: t.requestToken } },
        ...V === null ? {} : { body: V instanceof FormData ? V : JSON.stringify(V) }
      });
      if (!ne.ok && (await ne.clone().json().catch(() => ({}))).error === "invalid_photo") throw new Error(g("library", "Choose a valid JPEG, PNG or WebP image up to 10 MiB."));
      if (!ne.ok) throw new Error(ne.status === 413 ? g("library", "This change is too large. Select fewer books to reassign.") : ne.status === 503 ? g("library", "Author migration must finish before editing. Refresh to check progress.") : ne.status === 409 ? g("library", "The author or affected books changed. Reload and review again. Your draft is preserved.") : g("library", "Could not load or save the author. Check the fields and reload before retrying."));
      return ne.json();
    }
    async function ae(be = 1) {
      a.value = !0, n.value = "";
      try {
        i.value = await X(N.value ? `/${N.value}?page=${be}&search=${encodeURIComponent(P.value.trim())}&sort=${I.value}` : `?page=${be}&search=${encodeURIComponent(C.value.trim())}&unused=${S.value ? 1 : 0}`), $.value = be, y.value = null, c.value = [], x.value = !1, k.value = await X("/history");
      } catch (V) {
        n.value = V.message;
      } finally {
        a.value = !1;
      }
    }
    function J() {
      for (const be of Object.keys(Z)) Z[be] = i.value.author[be] || "";
      s.value = !0, r.value = "", B.value = null, W.value = !1;
    }
    async function ve() {
      a.value = !0, n.value = "";
      try {
        const be = new FormData();
        for (const [V, ne] of Object.entries(Z)) be.set(V, ne);
        be.set("revision", String(i.value.author.revision)), be.set("remove_photo", W.value ? "1" : "0"), B.value && be.set("photo", B.value), await X(`/${N.value}`, be), s.value = !1, x.value = !1, await ae(1), r.value = g("library", "Author saved. Original book credits are preserved.");
      } catch (be) {
        n.value = be.message;
      } finally {
        a.value = !1;
      }
    }
    function Ae() {
      m.value = !1, y.value = null, c.value = [];
    }
    async function Le() {
      a.value = !0, n.value = "", y.value = null;
      try {
        _.value = (await X(`?search=${encodeURIComponent(d.value.trim())}`)).authors.filter((be) => Number(be.id) !== N.value), v.value = "";
      } catch (be) {
        n.value = be.message;
      } finally {
        a.value = !1;
      }
    }
    async function Oe() {
      a.value = !0, n.value = "", y.value = null;
      try {
        const be = await X("", { name: d.value.trim() });
        _.value = [be], v.value = String(be.id);
      } catch (be) {
        n.value = be.message;
      } finally {
        a.value = !1;
      }
    }
    async function Me() {
      a.value = !0, n.value = "", y.value = null;
      try {
        y.value = await X(`/${N.value}/preview`, { target: Number(v.value), items: c.value });
      } catch (be) {
        n.value = be.message;
      } finally {
        a.value = !1;
      }
    }
    async function Xe() {
      a.value = !0, n.value = "";
      try {
        await X(`/${N.value}/assign`, { target: Number(v.value), items: c.value, token: y.value.token }), r.value = g("library", "Author assignments saved. Original credits are preserved. Undo is available in Recent changes."), m.value = !1, y.value = null, await ae($.value);
      } catch (be) {
        n.value = be.message;
      } finally {
        a.value = !1;
      }
    }
    async function ct(be) {
      a.value = !0, n.value = "";
      try {
        await X(`/history/${be.id}/undo`, {}), r.value = g("library", "Author change undone."), await ae($.value);
      } catch (V) {
        n.value = V.message;
      } finally {
        a.value = !1;
      }
    }
    async function we(be) {
      a.value = !0, n.value = "";
      try {
        await X(`/${be.id}/remove-unused`, { revision: Number(be.revision) }), r.value = g("library", "Unused author removed."), await ae($.value);
      } catch (V) {
        n.value = V.message;
      } finally {
        a.value = !1;
      }
    }
    return Ct(() => {
      R || ae();
    }), (be, V) => R ? (h(), De(pE, {
      key: 0,
      "request-token": e.requestToken,
      "catalogue-url": e.catalogueUrl
    }, null, 8, ["request-token", "catalogue-url"])) : (h(), p("section", {
      key: 1,
      class: "library-authors",
      "aria-busy": a.value,
      "aria-labelledby": "authors-heading"
    }, [
      N.value ? (h(), p("a", {
        key: 0,
        href: `${e.catalogueUrl}?authors=1`
      }, o(u(g)("library", "All authors")), 9, bE)) : A("", !0),
      l("header", gE, [
        N.value && i.value?.author ? (h(), p("div", mE, [
          i.value.author.photo_key && !x.value ? (h(), p("img", {
            key: i.value.author.photo_key,
            src: H.value,
            alt: u(g)("library", "Portrait of {author}", { author: i.value.author.display_name }),
            onError: V[0] || (V[0] = (ne) => x.value = !0)
          }, null, 40, yE)) : (h(), p("span", _E, o(le.value), 1))
        ])) : A("", !0),
        l("h1", wE, o(i.value?.author?.display_name || u(g)("library", "Authors")), 1)
      ]),
      n.value ? (h(), p("p", kE, [
        ee(o(n.value) + " ", 1),
        l("button", {
          disabled: a.value,
          onClick: V[1] || (V[1] = (ne) => ae($.value))
        }, o(u(g)("library", "Reload")), 9, SE)
      ])) : A("", !0),
      r.value ? (h(), p("p", CE, o(r.value), 1)) : A("", !0),
      a.value ? (h(), p("p", TE, o(u(g)("library", "Loading")), 1)) : A("", !0),
      N.value ? i.value?.author ? (h(), p(K, { key: 5 }, [
        l("p", null, o(u(Ot)("library", "%n book", "%n books", i.value.bookCount)), 1),
        i.value.bookCount ? (h(), p("p", DE, [
          l("a", {
            href: `${e.catalogueUrl}?authorId=${N.value}`
          }, o(u(g)("library", "Browse this author in the catalogue")), 9, FE)
        ])) : A("", !0),
        i.value.author.biography && !s.value ? (h(), p("section", ME, [
          l("h2", null, o(u(g)("library", "Biography")), 1),
          l("p", UE, o(Q.value || i.value.author.biography.length <= 320 ? i.value.author.biography : i.value.author.biography.slice(0, 280) + "…"), 1),
          i.value.author.biography.length > 320 ? (h(), p("button", {
            key: 0,
            "aria-expanded": Q.value,
            onClick: V[6] || (V[6] = (ne) => Q.value = !Q.value)
          }, o(Q.value ? u(g)("library", "Show less") : u(g)("library", "Show more")), 9, zE)) : A("", !0)
        ])) : A("", !0),
        i.value.author.merged_into ? (h(), p("p", jE, [
          l("a", {
            href: `${e.catalogueUrl}?authors=1&authorId=${i.value.author.merged_into}`
          }, o(u(g)("library", "Open merged author")), 9, BE)
        ])) : A("", !0),
        !i.value.canEdit && !i.value.author.merged_into ? (h(), p("p", HE, [
          ee(o(u(g)("library", "Author migration must finish before editing. Refresh to check progress.")) + " ", 1),
          l("button", {
            disabled: a.value,
            onClick: V[7] || (V[7] = (ne) => ae($.value))
          }, o(u(g)("library", "Refresh")), 9, VE)
        ])) : A("", !0),
        !s.value && !m.value ? (h(), p("button", {
          key: 4,
          disabled: a.value || !i.value.canEdit,
          onClick: J
        }, o(u(g)("library", "Edit author")), 9, qE)) : A("", !0),
        s.value ? (h(), p("form", {
          key: 5,
          class: "author-editor",
          onSubmit: Ce(ve, ["prevent"])
        }, [
          l("p", null, o(u(g)("library", "This edits the shared author record. Book credits and files stay unchanged.")), 1),
          l("label", GE, o(u(g)("library", "Preferred name")), 1),
          ye(l("input", {
            id: "author-display",
            "onUpdate:modelValue": V[8] || (V[8] = (ne) => Z.display_name = ne),
            maxlength: "255",
            required: "",
            disabled: a.value
          }, null, 8, KE), [
            [ze, Z.display_name]
          ]),
          l("label", WE, [
            ee(o(u(g)("library", "Sort name")) + " ", 1),
            fe(He, {
              text: u(g)("library", "For example: Doe, John. Controls author directory ordering.")
            }, null, 8, ["text"])
          ]),
          ye(l("input", {
            id: "author-sort",
            "onUpdate:modelValue": V[9] || (V[9] = (ne) => Z.sort_name = ne),
            maxlength: "255",
            required: "",
            disabled: a.value
          }, null, 8, YE), [
            [ze, Z.sort_name]
          ]),
          l("label", ZE, [
            ee(o(u(g)("library", "Given name")) + " ", 1),
            fe(He, {
              text: u(g)("library", "Optional. Leave empty for organisations or names you cannot safely split.")
            }, null, 8, ["text"])
          ]),
          ye(l("input", {
            id: "author-given",
            "onUpdate:modelValue": V[10] || (V[10] = (ne) => Z.given_name = ne),
            maxlength: "255",
            disabled: a.value
          }, null, 8, XE), [
            [ze, Z.given_name]
          ]),
          l("label", JE, o(u(g)("library", "Family name")), 1),
          ye(l("input", {
            id: "author-family",
            "onUpdate:modelValue": V[11] || (V[11] = (ne) => Z.family_name = ne),
            maxlength: "255",
            disabled: a.value
          }, null, 8, QE), [
            [ze, Z.family_name]
          ]),
          l("label", e$, [
            ee(o(u(g)("library", "Biography")) + " ", 1),
            fe(He, {
              text: u(g)("library", "Optional plain text, up to 10,000 characters. This profile is private to your account.")
            }, null, 8, ["text"])
          ]),
          ye(l("textarea", {
            id: "author-bio",
            "onUpdate:modelValue": V[12] || (V[12] = (ne) => Z.biography = ne),
            maxlength: "10000",
            rows: "5",
            disabled: a.value
          }, null, 8, t$), [
            [ze, Z.biography]
          ]),
          l("label", i$, [
            ee(o(u(g)("library", "Author photo")) + " ", 1),
            fe(He, {
              text: u(g)("library", "JPEG, PNG or WebP, up to 10 MiB. Saved as a small square portrait; the original upload is discarded.")
            }, null, 8, ["text"])
          ]),
          l("input", {
            id: "author-photo",
            type: "file",
            accept: "image/jpeg,image/png,image/webp",
            disabled: a.value,
            onChange: G
          }, null, 40, a$),
          i.value.author.photo_key ? (h(), p("label", n$, [
            ye(l("input", {
              "onUpdate:modelValue": V[13] || (V[13] = (ne) => W.value = ne),
              type: "checkbox",
              disabled: a.value || !!B.value
            }, null, 8, r$), [
              [ua, W.value]
            ]),
            ee(" " + o(u(g)("library", "Remove photo")), 1)
          ])) : A("", !0),
          l("div", null, [
            l("button", {
              class: "primary",
              disabled: a.value,
              type: "submit"
            }, o(u(g)("library", "Save author")), 9, l$),
            V[29] || (V[29] = ee()),
            l("button", {
              disabled: a.value,
              type: "button",
              onClick: V[14] || (V[14] = (ne) => s.value = !1)
            }, o(u(g)("library", "Cancel")), 9, s$)
          ])
        ], 32)) : A("", !0),
        !s.value && !m.value ? (h(), p("details", o$, [
          l("summary", null, o(u(g)("library", "More actions")), 1),
          l("button", {
            disabled: a.value || !i.value.canEdit,
            onClick: V[15] || (V[15] = (ne) => m.value = !0)
          }, o(u(g)("library", "Merge or reassign")), 9, u$)
        ])) : A("", !0),
        m.value ? (h(), p("section", {
          key: 7,
          class: "author-assignment",
          "aria-label": u(g)("library", "Merge or reassign")
        }, [
          l("label", null, [
            ee(o(u(g)("library", "Books to change")) + " ", 1),
            fe(He, {
              text: u(g)("library", "Leave all books unselected to merge this author. Select individual books below to reassign only those credits, keeping both authors.")
            }, null, 8, ["text"])
          ]),
          l("p", d$, o(c.value.length ? u(Ot)("library", "%n selected book", "%n selected books", c.value.length) : u(g)("library", "Merge all books into the chosen author")), 1),
          l("form", {
            class: "author-search",
            onSubmit: Ce(Le, ["prevent"])
          }, [
            l("label", f$, o(u(g)("library", "Find destination author")), 1),
            ye(l("input", {
              id: "target-search",
              "onUpdate:modelValue": V[16] || (V[16] = (ne) => d.value = ne),
              type: "search",
              maxlength: "255",
              disabled: a.value
            }, null, 8, h$), [
              [ze, d.value]
            ]),
            l("button", { disabled: a.value }, o(u(g)("library", "Search")), 9, p$)
          ], 32),
          l("div", null, [
            l("button", {
              disabled: a.value || !d.value.trim(),
              onClick: Oe
            }, o(u(g)("library", "Create separate author")), 9, v$),
            V[30] || (V[30] = ee()),
            fe(He, {
              text: u(g)("library", "Creates a new person using the entered name, even if someone with that name already exists.")
            }, null, 8, ["text"])
          ]),
          l("label", b$, o(u(g)("library", "Destination author")), 1),
          ye(l("select", {
            id: "target-author",
            "onUpdate:modelValue": V[17] || (V[17] = (ne) => v.value = ne),
            disabled: a.value,
            onChange: V[18] || (V[18] = (ne) => y.value = null)
          }, [
            l("option", m$, o(u(g)("library", "Choose an author")), 1),
            (h(!0), p(K, null, de(_.value, (ne) => (h(), p("option", {
              key: ne.id,
              value: ne.id
            }, o(ne.display_name) + " — " + o(ne.sort_name) + " (#" + o(ne.id) + ")", 9, y$))), 128))
          ], 40, g$), [
            [nt, v.value]
          ]),
          l("div", null, [
            l("button", {
              disabled: a.value || !v.value,
              onClick: Me
            }, o(u(g)("library", "Review change")), 9, _$),
            V[31] || (V[31] = ee()),
            l("button", {
              disabled: a.value,
              onClick: Ae
            }, o(u(g)("library", "Cancel")), 9, w$)
          ]),
          y.value ? (h(), p("section", {
            key: 0,
            class: "author-review",
            "aria-label": u(g)("library", "Review change")
          }, [
            l("h2", null, o(y.value.source) + " → " + o(y.value.target), 1),
            l("p", null, o(y.value.merge ? u(g)("library", "Merge these authors. Future imports of the old name will use the destination author.") : u(g)("library", "Reassign these books. Both author records remain available.")), 1),
            l("p", null, o(u(Ot)("library", "%n book", "%n books", y.value.books.length)), 1),
            l("ul", null, [
              (h(!0), p(K, null, de(y.value.books, (ne) => (h(), p("li", {
                key: ne.id
              }, o(ne.title) + " — " + o(u(g)("library", "Original credit: {credit}", { credit: ne.credit || "—" })), 1))), 128))
            ]),
            l("button", {
              class: "primary",
              disabled: a.value,
              onClick: Xe
            }, o(u(g)("library", "Confirm author change")), 9, S$)
          ], 8, k$)) : A("", !0)
        ], 8, c$)) : A("", !0),
        l("section", {
          class: "author-catalogue",
          "aria-label": u(g)("library", "Books in your library")
        }, [
          l("h2", null, o(u(g)("library", "Books in your library")), 1),
          l("form", {
            class: "author-book-controls",
            onSubmit: V[24] || (V[24] = Ce((ne) => ae(1), ["prevent"]))
          }, [
            l("label", T$, o(u(g)("library", "Search titles")), 1),
            ye(l("input", {
              id: "author-book-search",
              "onUpdate:modelValue": V[19] || (V[19] = (ne) => P.value = ne),
              type: "search",
              maxlength: "255",
              disabled: a.value || s.value
            }, null, 8, A$), [
              [ze, P.value]
            ]),
            l("button", {
              disabled: a.value || s.value
            }, o(u(g)("library", "Search")), 9, E$),
            l("label", $$, o(u(g)("library", "Sort")), 1),
            ye(l("select", {
              id: "author-book-sort",
              "onUpdate:modelValue": V[20] || (V[20] = (ne) => I.value = ne),
              disabled: a.value || s.value,
              onChange: V[21] || (V[21] = (ne) => ae(1))
            }, [
              l("option", O$, o(u(g)("library", "Title")), 1),
              l("option", N$, o(u(g)("library", "Publication date, newest first")), 1),
              l("option", R$, o(u(g)("library", "Series, then title")), 1)
            ], 40, x$), [
              [nt, I.value]
            ]),
            l("div", I$, [
              l("button", {
                type: "button",
                "aria-pressed": he.value === "grid",
                onClick: V[22] || (V[22] = (ne) => he.value = "grid")
              }, o(u(g)("library", "Covers")), 9, L$),
              V[32] || (V[32] = ee()),
              l("button", {
                type: "button",
                "aria-pressed": he.value === "list",
                onClick: V[23] || (V[23] = (ne) => he.value = "list")
              }, o(u(g)("library", "List")), 9, P$)
            ])
          ], 32),
          P.value ? (h(), p("p", D$, o(u(Ot)("library", "%n book", "%n books", i.value.matchingCount)), 1)) : A("", !0),
          i.value.books.length ? A("", !0) : (h(), p("p", F$, o(u(g)("library", "No books match this view.")), 1)),
          (h(!0), p(K, null, de(Y.value, (ne) => (h(), p("section", {
            key: ne.name ?? "all",
            class: "author-book-group"
          }, [
            ne.name !== null ? (h(), p("h3", M$, o(ne.name || u(g)("library", "No series recorded")), 1)) : A("", !0),
            l("ul", {
              class: Ee(["author-books", { "author-books-grid": he.value === "grid" }])
            }, [
              (h(!0), p(K, null, de(ne.books, (Ue) => (h(), p("li", {
                key: Ue.id
              }, [
                m.value ? ye((h(), p("input", {
                  key: 0,
                  "onUpdate:modelValue": V[25] || (V[25] = (ie) => c.value = ie),
                  type: "checkbox",
                  value: Number(Ue.id),
                  "aria-label": u(g)("library", "Select {title}", { title: Ue.title }),
                  disabled: a.value,
                  onChange: V[26] || (V[26] = (ie) => y.value = null)
                }, null, 40, U$)), [
                  [ua, c.value]
                ]) : A("", !0),
                l("a", {
                  class: "author-book-cover",
                  href: u(At)("/apps/library/items/{id}", { id: Ue.id }),
                  "aria-label": Ue.title
                }, [
                  fe(ef, {
                    src: L(Ue)
                  }, null, 8, ["src"])
                ], 8, z$),
                l("div", j$, [
                  l("a", {
                    class: "author-book-title",
                    href: u(At)("/apps/library/items/{id}", { id: Ue.id }),
                    dir: "auto"
                  }, o(Ue.title), 9, B$),
                  Ue.series_name ? (h(), p("span", H$, [
                    ee(o(Ue.series_name), 1),
                    Ue.series_number ? (h(), p(K, { key: 0 }, [
                      ee(" · " + o(Ue.series_number), 1)
                    ], 64)) : A("", !0)
                  ])) : A("", !0),
                  Ue.publication_date ? (h(), p("span", V$, o(Ue.publication_date), 1)) : A("", !0),
                  l("span", null, o(Ue.extension?.toUpperCase()), 1),
                  Ue.scan_status === "missing" ? (h(), p("span", q$, o(u(g)("library", "File missing")), 1)) : A("", !0),
                  m.value ? (h(), p("span", G$, o(u(g)("library", "Original credit: {credit}", { credit: Ue.creators || "—" })), 1)) : A("", !0)
                ])
              ]))), 128))
            ], 2)
          ]))), 128))
        ], 8, C$)
      ], 64)) : A("", !0) : (h(), p(K, { key: 4 }, [
        l("form", {
          class: "author-search",
          onSubmit: V[4] || (V[4] = Ce((ne) => ae(1), ["prevent"]))
        }, [
          l("label", AE, [
            ee(o(u(g)("library", "Search authors")) + " ", 1),
            fe(He, {
              text: u(g)("library", "Matches the beginning of the preferred name or sort name.")
            }, null, 8, ["text"])
          ]),
          ye(l("input", {
            id: "author-search",
            "onUpdate:modelValue": V[2] || (V[2] = (ne) => C.value = ne),
            maxlength: "255",
            type: "search"
          }, null, 512), [
            [ze, C.value]
          ]),
          l("label", null, [
            ye(l("input", {
              "onUpdate:modelValue": V[3] || (V[3] = (ne) => S.value = ne),
              type: "checkbox"
            }, null, 512), [
              [ua, S.value]
            ]),
            ee(" " + o(u(g)("library", "Unused authors")), 1)
          ]),
          l("button", {
            disabled: a.value,
            type: "submit"
          }, o(u(g)("library", "Search")), 9, EE)
        ], 32),
        i.value?.migration && (i.value.migration.pending || i.value.migration.failed || i.value.migration.conflict) ? (h(), p("p", $E, [
          ee(o(u(g)("library", "Author migration: {pending} pending, {failed} failed, {conflict} need review.", i.value.migration)) + " ", 1),
          i.value.migration.conflict ? (h(), p("a", {
            key: 0,
            href: `${e.catalogueUrl}?authors=1&authorConflicts=1`
          }, o(u(g)("library", "Review imported author changes")), 9, xE)) : A("", !0),
          l("button", {
            disabled: a.value,
            onClick: V[5] || (V[5] = (ne) => ae($.value))
          }, o(u(g)("library", "Refresh")), 9, OE)
        ])) : A("", !0),
        i.value ? (h(), p("ul", NE, [
          (h(!0), p(K, null, de(i.value.authors, (ne) => (h(), p("li", {
            key: ne.id
          }, [
            l("a", {
              href: `${e.catalogueUrl}?authors=1&authorId=${ne.id}`,
              dir: "auto"
            }, o(ne.display_name), 9, RE),
            l("span", IE, o(ne.sort_name), 1),
            l("span", null, o(u(Ot)("library", "%n book", "%n books", Number(ne.book_count))), 1),
            S.value && Number(ne.book_count) === 0 ? (h(), p("button", {
              key: 0,
              disabled: a.value || i.value.migration.pending || i.value.migration.failed,
              onClick: (Ue) => we(ne)
            }, o(u(g)("library", "Remove unused author")), 9, LE)) : A("", !0)
          ]))), 128))
        ])) : A("", !0),
        i.value && !i.value.authors.length ? (h(), p("p", PE, o(u(g)("library", "No authors found.")), 1)) : A("", !0)
      ], 64)),
      k.value.length ? (h(), p("details", K$, [
        l("summary", null, o(u(g)("library", "Recent changes")), 1),
        l("ul", null, [
          (h(!0), p(K, null, de(k.value, (ne) => (h(), p("li", {
            key: ne.id,
            "data-operation-id": ne.id
          }, [
            l("span", null, o(ne.source) + " → " + o(ne.target) + " · " + o(u(Ot)("library", "%n book", "%n books", Number(ne.books))), 1),
            Number(ne.undone) ? (h(), p("span", Y$, o(u(g)("library", "Undone")), 1)) : (h(), p("button", {
              key: 1,
              disabled: a.value,
              onClick: (Ue) => ct(ne)
            }, o(u(g)("library", "Undo")), 9, Z$))
          ], 8, W$))), 128))
        ])
      ])) : A("", !0),
      i.value ? (h(), p("nav", {
        key: 7,
        class: "author-pagination",
        "aria-label": u(g)("library", "Author pages")
      }, [
        l("button", {
          disabled: a.value || s.value || $.value === 1,
          onClick: V[27] || (V[27] = (ne) => ae($.value - 1))
        }, o(u(g)("library", "Previous")), 9, J$),
        l("span", null, o(u(g)("library", "Page {page}", { page: $.value })), 1),
        l("button", {
          disabled: a.value || s.value || !i.value.hasNext,
          onClick: V[28] || (V[28] = (ne) => ae($.value + 1))
        }, o(u(g)("library", "Next")), 9, Q$)
      ], 8, X$)) : A("", !0)
    ], 8, vE));
  }
}, tx = /* @__PURE__ */ tf(ex, [["__scopeId", "data-v-fcd3e9dc"]]), ix = ["aria-busy"], ax = ["href"], nx = { id: "library-series-heading" }, rx = {
  key: 1,
  role: "alert"
}, lx = ["disabled"], sx = {
  key: 2,
  role: "status"
}, ox = {
  key: 3,
  role: "status"
}, ux = { for: "series-search" }, cx = ["disabled"], dx = {
  key: 0,
  role: "status"
}, fx = ["disabled"], hx = {
  key: 1,
  class: "series-directory"
}, px = ["href"], vx = { key: 2 }, bx = {
  key: 0,
  class: "series-description",
  dir: "auto"
}, gx = { key: 1 }, mx = ["href"], yx = ["disabled"], _x = { for: "series-name" }, wx = ["disabled"], kx = { for: "series-description" }, Sx = ["disabled"], Cx = ["disabled"], Tx = ["disabled"], Ax = { class: "series-books" }, Ex = { key: 0 }, $x = ["href"], xx = { dir: "auto" }, Ox = { key: 1 }, Nx = ["aria-label"], Rx = ["disabled"], Ix = ["disabled"], Lx = {
  __name: "Series",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = Number(new URLSearchParams(location.search).get("seriesId")) || null, a = /* @__PURE__ */ U(null), n = /* @__PURE__ */ U(1), r = /* @__PURE__ */ U(""), s = /* @__PURE__ */ U(!1), c = /* @__PURE__ */ U(""), d = /* @__PURE__ */ U(""), _ = /* @__PURE__ */ U(!1), v = /* @__PURE__ */ Lt({ name: "", description: "" });
    async function y($, R = null) {
      const N = await fetch(At("/apps/library/api/series") + $, {
        credentials: "same-origin",
        cache: "no-store",
        method: R === null ? "GET" : "POST",
        headers: { Accept: "application/json", ...R === null ? {} : { "Content-Type": "application/json", requesttoken: t.requestToken } },
        ...R === null ? {} : { body: JSON.stringify(R) }
      });
      if (!N.ok) throw new Error(N.status === 409 ? g("library", "This series changed. Reload and review your edit.") : g("library", "Could not load or save the series."));
      return N.json();
    }
    async function m($ = 1) {
      s.value = !0, c.value = "";
      try {
        a.value = await y(i ? `/${i}?page=${$}` : `?page=${$}&search=${encodeURIComponent(r.value.trim())}`), n.value = $;
      } catch (R) {
        c.value = R.message;
      } finally {
        s.value = !1;
      }
    }
    function k() {
      v.name = a.value.series.display_name, v.description = a.value.series.description || "", _.value = !0, d.value = "";
    }
    async function C() {
      s.value = !0, c.value = "";
      try {
        a.value = await y(`/${i}`, { name: v.name, description: v.description, revision: Number(a.value.series.revision) }), _.value = !1, d.value = g("library", "Series saved. Original book metadata is preserved.");
      } catch ($) {
        c.value = $.message;
      } finally {
        s.value = !1;
      }
    }
    function S($) {
      return At("/apps/library/items/{id}/cover", { id: $.id }) + "?v=" + encodeURIComponent(`${$.cover_revision || ""}-${$.etag || ""}`);
    }
    return Ct(() => m()), ($, R) => (h(), p("section", {
      class: "library-series",
      "aria-busy": s.value,
      "aria-labelledby": "library-series-heading"
    }, [
      u(i) ? (h(), p("a", {
        key: 0,
        href: `${e.catalogueUrl}?series=1`
      }, o(u(g)("library", "All series")), 9, ax)) : A("", !0),
      l("h1", nx, o(a.value?.series?.display_name || u(g)("library", "Series")), 1),
      c.value ? (h(), p("p", rx, [
        ee(o(c.value) + " ", 1),
        l("button", {
          disabled: s.value,
          onClick: R[0] || (R[0] = (N) => m(n.value))
        }, o(u(g)("library", "Reload")), 9, lx)
      ])) : A("", !0),
      d.value ? (h(), p("p", sx, o(d.value), 1)) : A("", !0),
      s.value ? (h(), p("p", ox, o(u(g)("library", "Loading")), 1)) : A("", !0),
      u(i) ? a.value?.series ? (h(), p(K, { key: 5 }, [
        l("p", null, o(u(Ot)("library", "%n book", "%n books", Number(a.value.bookCount))), 1),
        a.value.series.description && !_.value ? (h(), p("p", bx, o(a.value.series.description), 1)) : A("", !0),
        a.value.bookCount ? (h(), p("p", gx, [
          l("a", {
            href: `${e.catalogueUrl}?seriesId=${u(i)}`
          }, o(u(g)("library", "Browse this series in the catalogue")), 9, mx)
        ])) : A("", !0),
        _.value ? A("", !0) : (h(), p("button", {
          key: 2,
          disabled: s.value,
          onClick: k
        }, o(u(g)("library", "Edit series")), 9, yx)),
        _.value ? (h(), p("form", {
          key: 3,
          class: "series-editor",
          onSubmit: Ce(C, ["prevent"])
        }, [
          l("label", _x, [
            ee(o(u(g)("library", "Preferred name")) + " ", 1),
            fe(He, {
              text: u(g)("library", "Renaming this shared series changes its display name; the original text in each book stays unchanged.")
            }, null, 8, ["text"])
          ]),
          ye(l("input", {
            id: "series-name",
            "onUpdate:modelValue": R[4] || (R[4] = (N) => v.name = N),
            maxlength: "255",
            required: "",
            disabled: s.value
          }, null, 8, wx), [
            [ze, v.name]
          ]),
          l("label", kx, o(u(g)("library", "Description")), 1),
          ye(l("textarea", {
            id: "series-description",
            "onUpdate:modelValue": R[5] || (R[5] = (N) => v.description = N),
            maxlength: "10000",
            rows: "4",
            disabled: s.value
          }, null, 8, Sx), [
            [ze, v.description]
          ]),
          l("div", null, [
            l("button", {
              type: "submit",
              class: "primary",
              disabled: s.value
            }, o(u(g)("library", "Save series")), 9, Cx),
            R[9] || (R[9] = ee()),
            l("button", {
              type: "button",
              disabled: s.value,
              onClick: R[6] || (R[6] = (N) => _.value = !1)
            }, o(u(g)("library", "Cancel")), 9, Tx)
          ])
        ], 32)) : A("", !0),
        l("ol", Ax, [
          (h(!0), p(K, null, de(a.value.books, (N) => (h(), p("li", {
            key: N.id
          }, [
            fe(ef, {
              src: S(N)
            }, null, 8, ["src"]),
            l("div", null, [
              N.part_number ? (h(), p("span", Ex, o(u(g)("library", "Part {number}", { number: N.part_number })), 1)) : A("", !0),
              l("a", {
                href: u(At)("/apps/library/items/{id}", { id: N.id }),
                dir: "auto"
              }, o(N.title), 9, $x),
              l("small", xx, o(N.creators || "—"), 1),
              N.scan_status === "missing" ? (h(), p("small", Ox, o(u(g)("library", "File missing")), 1)) : A("", !0)
            ])
          ]))), 128))
        ])
      ], 64)) : A("", !0) : (h(), p(K, { key: 4 }, [
        l("form", {
          class: "series-search",
          onSubmit: R[2] || (R[2] = Ce((N) => m(1), ["prevent"]))
        }, [
          l("label", ux, [
            ee(o(u(g)("library", "Search series")) + " ", 1),
            fe(He, {
              text: u(g)("library", "Matches the beginning of a preferred series name.")
            }, null, 8, ["text"])
          ]),
          ye(l("input", {
            id: "series-search",
            "onUpdate:modelValue": R[1] || (R[1] = (N) => r.value = N),
            type: "search",
            maxlength: "255"
          }, null, 512), [
            [ze, r.value]
          ]),
          l("button", {
            disabled: s.value,
            type: "submit"
          }, o(u(g)("library", "Search")), 9, cx)
        ], 32),
        a.value?.migration && (a.value.migration.pending || a.value.migration.failed) ? (h(), p("p", dx, [
          ee(o(u(g)("library", "Series migration: {pending} pending, {failed} failed.", a.value.migration)) + " ", 1),
          l("button", {
            disabled: s.value,
            onClick: R[3] || (R[3] = (N) => m(n.value))
          }, o(u(g)("library", "Refresh")), 9, fx)
        ])) : A("", !0),
        a.value ? (h(), p("ul", hx, [
          (h(!0), p(K, null, de(a.value.series, (N) => (h(), p("li", {
            key: N.id
          }, [
            l("a", {
              href: `${e.catalogueUrl}?series=1&seriesId=${N.id}`,
              dir: "auto"
            }, o(N.display_name), 9, px),
            l("span", null, o(u(Ot)("library", "%n book", "%n books", Number(N.book_count))), 1)
          ]))), 128))
        ])) : A("", !0),
        a.value && !a.value.series.length ? (h(), p("p", vx, o(u(g)("library", "No series found yet.")), 1)) : A("", !0)
      ], 64)),
      a.value ? (h(), p("nav", {
        key: 6,
        class: "series-pagination",
        "aria-label": u(g)("library", "Series pages")
      }, [
        l("button", {
          disabled: s.value || n.value === 1,
          onClick: R[7] || (R[7] = (N) => m(n.value - 1))
        }, o(u(g)("library", "Previous")), 9, Rx),
        l("span", null, o(u(g)("library", "Page {page}", { page: n.value })), 1),
        l("button", {
          disabled: s.value || !a.value.hasNext,
          onClick: R[8] || (R[8] = (N) => m(n.value + 1))
        }, o(u(g)("library", "Next")), 9, Ix)
      ], 8, Nx)) : A("", !0)
    ], 8, ix));
  }
}, Px = /* @__PURE__ */ tf(Lx, [["__scopeId", "data-v-0767001f"]]);
function vg(e, t, i) {
  const a = /* @__PURE__ */ U({}), n = /* @__PURE__ */ U("idle");
  let r, s, c = 0;
  return Ke([e, t], () => {
    clearTimeout(r), s?.abort();
    const d = ++c;
    a.value = {}, n.value = t.value ? "pending" : "disabled", !(!t.value || !e.value.length) && (r = setTimeout(async () => {
      s = new AbortController();
      try {
        const _ = await fetch(At("/apps/library/api/duplicate-suggestions/lookup"), { method: "POST", credentials: "same-origin", cache: "no-store", signal: s.signal, headers: { "Content-Type": "application/json", requesttoken: i.value }, body: JSON.stringify({ itemIds: e.value.slice(0, 100) }) });
        if (!_.ok) throw new Error("lookup_failed");
        const v = await _.json();
        if (d !== c) return;
        a.value = v.items || {}, n.value = v.enabled ? v.status : "disabled";
      } catch (_) {
        d === c && _.name !== "AbortError" && (n.value = "error");
      }
    }, 250));
  }, { immediate: !0 }), Ci(() => {
    c++, clearTimeout(r), s?.abort();
  }), { results: a, status: n };
}
const Dx = ["aria-label", "aria-busy"], Fx = {
  key: 0,
  role: "status"
}, Mx = {
  key: 1,
  role: "alert"
}, Ux = {
  key: 2,
  role: "status"
}, zx = { key: 3 }, jx = { key: 4 }, Bx = {
  key: 5,
  role: "status"
}, Hx = {
  key: 6,
  class: "library-suggestion-list"
}, Vx = ["href"], qx = ["disabled", "onClick"], Gx = {
  key: 0,
  role: "status"
}, Kx = { class: "library-suggestion-list" }, Wx = { class: "library-suggestion-comparison" }, Yx = ["src"], Zx = { class: "library-duplicate-actions" }, Xx = ["href"], Jx = ["href"], Qx = ["disabled", "onClick"], e3 = { class: "library-duplicate-actions" }, t3 = ["disabled"], i3 = ["disabled"], a3 = ["disabled"], bg = {
  __name: "DuplicateSuggestions",
  props: { itemId: Number, requestToken: String, enabled: { type: Boolean, default: !0 }, compareId: { type: Number, default: 0 }, full: { type: Boolean, default: !1 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ U(0), a = j(() => (i.value, t.itemId ? [t.itemId] : [])), n = j(() => t.enabled), r = j(() => t.requestToken), { results: s, status: c } = vg(a, n, r), d = j(() => s.value[t.itemId]), _ = /* @__PURE__ */ U(null), v = /* @__PURE__ */ U(!1), y = /* @__PURE__ */ U(""), m = /* @__PURE__ */ U(!1), k = { formats: g("library", "Alternative formats"), languages: g("library", "Different languages"), years: g("library", "Different publication years"), publishers: g("library", "Different publishers"), identifiers: g("library", "Different ISBNs") };
    let C = 0;
    async function S(N, P) {
      const I = await fetch(At("/apps/library/api/duplicate-suggestions" + N), { credentials: "same-origin", cache: "no-store", method: P ? "POST" : "GET", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...P ? { body: JSON.stringify(P) } : {} });
      if (!I.ok) throw new Error(I.status === 409 ? g("library", "These books changed after the scan. Run a new scan before reviewing this comparison.") : g("library", "Could not complete the duplicate review. Please try again."));
      return I.json();
    }
    async function $(N) {
      const P = ++C;
      v.value = !0, y.value = "", m.value = !1;
      try {
        const I = await S(`/compare/${t.itemId}/${N}`);
        P === C && (_.value = I);
      } catch (I) {
        P === C && (y.value = I.message);
      } finally {
        P === C && (v.value = !1);
      }
    }
    async function R(N, P = 0) {
      v.value = !0, y.value = "";
      try {
        await S(`/compare/${_.value.books[0].id}/${_.value.books[1].id}`, { signature: _.value.signature, decision: N, preferredId: P }), m.value = !0, i.value++, _.value = null;
      } catch (I) {
        y.value = I.message;
      } finally {
        v.value = !1;
      }
    }
    return Ke(() => [t.itemId, t.compareId], () => {
      C++, _.value = null, t.full && t.compareId && $(t.compareId);
    }, { immediate: !0 }), (N, P) => (h(), p("section", {
      class: "library-duplicate-suggestions",
      "aria-label": u(g)("library", "Possible duplicates"),
      "aria-busy": v.value ? "true" : "false"
    }, [
      l("h3", null, o(u(g)("library", "Possible duplicates")), 1),
      u(c) === "pending" ? (h(), p("p", Fx, o(u(g)("library", "Checking possible duplicates")), 1)) : A("", !0),
      u(c) === "error" || y.value ? (h(), p("p", Mx, o(y.value || u(g)("library", "Could not complete the duplicate review. Please try again.")), 1)) : A("", !0),
      u(c) === "building" || d.value?.status === "partial" ? (h(), p("p", Ux, o(u(g)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : A("", !0),
      d.value?.status === "unavailable" ? (h(), p("p", zx, o(u(g)("library", "These books are no longer available. Start a new scan.")), 1)) : A("", !0),
      d.value?.status === "checked" && !d.value.count ? (h(), p("p", jx, o(u(g)("library", "No unreviewed suggestions found.")), 1)) : A("", !0),
      m.value ? (h(), p("p", Bx, o(u(g)("library", "Review saved. Your files and catalogue metadata were not changed.")), 1)) : A("", !0),
      d.value?.count && !_.value ? (h(), p("ul", Hx, [
        (h(!0), p(K, null, de(d.value.matches, (I) => (h(), p("li", {
          key: I.id
        }, [
          e.full ? (h(), p("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: (he) => $(I.id)
          }, [
            l("bdi", null, o(I.title), 1),
            ee(" · " + o(I.format.toUpperCase()), 1)
          ], 8, qx)) : (h(), p("a", {
            key: 0,
            href: I.url
          }, [
            l("bdi", null, o(I.title), 1),
            ee(" · " + o(I.format.toUpperCase()), 1)
          ], 8, Vx))
        ]))), 128))
      ])) : A("", !0),
      _.value ? (h(), p(K, { key: 7 }, [
        _.value.reasons.length ? A("", !0) : (h(), p("p", Gx, o(u(g)("library", "These books no longer match the current metadata rules.")), 1)),
        l("ul", Kx, [
          (h(!0), p(K, null, de(_.value.flags, (I) => (h(), p("li", { key: I }, o(k[I]), 1))), 128))
        ]),
        l("div", Wx, [
          (h(!0), p(K, null, de(_.value.books, (I) => (h(), p("article", {
            key: I.id
          }, [
            l("img", {
              src: I.coverUrl,
              alt: "",
              width: "64",
              height: "88"
            }, null, 8, Yx),
            l("h3", null, [
              l("bdi", null, o(I.title), 1)
            ]),
            l("p", null, [
              l("bdi", null, o(I.authors.join("; ")), 1)
            ]),
            l("p", null, o(I.format.toUpperCase()) + " · " + o(I.language || "—") + " · " + o(I.publicationDate || "—"), 1),
            l("p", null, [
              l("bdi", null, o(I.publisher), 1)
            ]),
            l("p", null, [
              l("bdi", null, o(I.path), 1)
            ]),
            l("div", Zx, [
              l("a", {
                class: "button secondary",
                href: I.detailsUrl
              }, o(u(g)("library", "Details")), 9, Xx),
              l("a", {
                class: "button secondary",
                href: I.openUrl
              }, o(u(g)("library", "Open")), 9, Jx),
              l("button", {
                class: "button primary",
                disabled: v.value,
                onClick: (he) => R("preferred", I.id)
              }, o(u(g)("library", "Prefer this copy")), 9, Qx)
            ])
          ]))), 128))
        ]),
        l("div", e3, [
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[0] || (P[0] = (I) => R("keep"))
          }, o(u(g)("library", "Keep both")), 9, t3),
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[1] || (P[1] = (I) => R("dismissed"))
          }, o(u(g)("library", "Dismiss match")), 9, i3),
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[2] || (P[2] = (I) => R("unreviewed"))
          }, o(u(g)("library", "Reset review decision")), 9, a3)
        ])
      ], 64)) : A("", !0)
    ], 8, Dx));
  }
}, n3 = ["aria-busy"], r3 = ["checked", "disabled"], l3 = {
  key: 0,
  role: "alert"
}, s3 = {
  key: 1,
  role: "status"
}, o3 = {
  key: 2,
  role: "alert"
}, u3 = {
  key: 3,
  role: "status"
}, c3 = {
  __name: "DuplicateSuggestionSettings",
  props: { requestToken: String },
  setup(e) {
    const t = e, i = /* @__PURE__ */ U({ enabled: !1, status: "disabled" }), a = /* @__PURE__ */ U(!1), n = /* @__PURE__ */ U("");
    let r = !0, s;
    async function c() {
      try {
        const _ = await fetch(At("/apps/library/api/duplicate-suggestions"), { cache: "no-store", credentials: "same-origin" });
        if (!_.ok) throw new Error();
        const v = await _.json();
        r && (i.value = v, v.status === "building" && (s = setTimeout(c, 5e3)));
      } catch {
        r && (n.value = g("library", "Could not complete the duplicate review. Please try again."));
      }
    }
    async function d(_) {
      a.value = !0, n.value = "", clearTimeout(s);
      try {
        const v = await fetch(At("/apps/library/api/duplicate-suggestions"), { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, body: JSON.stringify({ enabled: _.target.checked }) });
        if (!v.ok) throw new Error();
        i.value = await v.json(), i.value.status === "building" && (s = setTimeout(c, 2e3));
      } catch {
        n.value = g("library", "Could not complete the duplicate review. Please try again.");
      } finally {
        a.value = !1;
      }
    }
    return Ct(c), Ci(() => {
      r = !1, clearTimeout(s);
    }), (_, v) => (h(), p("section", {
      class: "library-auto-duplicate-settings",
      "aria-busy": a.value ? "true" : "false"
    }, [
      l("label", null, [
        l("input", {
          type: "checkbox",
          checked: i.value.enabled,
          disabled: a.value,
          onChange: d
        }, null, 40, r3),
        fe(He, {
          text: u(g)("library", "Build a private metadata index in the background. Suggestions check the whole library without reading book contents.")
        }, {
          default: Se(() => [
            ee(o(u(g)("library", "Show possible duplicates while browsing")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      n.value ? (h(), p("p", l3, o(n.value), 1)) : A("", !0),
      i.value.status === "building" ? (h(), p("p", s3, o(u(g)("library", "Indexing metadata")) + " · " + o(i.value.processed) + "/" + o(i.value.total), 1)) : A("", !0),
      i.value.status === "failed" ? (h(), p("p", o3, o(u(g)("library", "Duplicate scan failed")), 1)) : A("", !0),
      i.value.status === "ready" ? (h(), p("p", u3, o(u(g)("library", "Automatic duplicate suggestions are ready.")), 1)) : A("", !0)
    ], 8, n3));
  }
}, d3 = ["aria-label", "aria-busy"], f3 = ["href"], h3 = {
  key: 1,
  role: "alert"
}, p3 = {
  key: 2,
  role: "status"
}, v3 = ["disabled"], b3 = { value: "0" }, g3 = ["value"], m3 = { class: "library-duplicate-checkbox" }, y3 = ["disabled"], _3 = ["disabled"], w3 = ["value", "disabled"], k3 = { value: "" }, S3 = ["value"], C3 = ["aria-label"], T3 = { role: "status" }, A3 = ["value", "max", "aria-label"], E3 = {
  key: 1,
  role: "status"
}, $3 = {
  key: 2,
  role: "alert"
}, x3 = {
  key: 3,
  role: "alert"
}, O3 = { class: "library-duplicate-actions" }, N3 = ["disabled"], R3 = ["disabled"], I3 = ["disabled"], L3 = ["disabled"], P3 = { value: "all" }, D3 = ["value"], F3 = {
  key: 0,
  role: "status"
}, M3 = ["data-pair-id"], U3 = {
  key: 0,
  role: "status"
}, z3 = { class: "library-duplicate-decision" }, j3 = ["aria-label"], B3 = ["aria-label"], H3 = {
  key: 1,
  role: "alert"
}, V3 = { class: "library-duplicate-books" }, q3 = { class: "library-duplicate-book-heading" }, G3 = ["src"], K3 = { dir: "auto" }, W3 = { dir: "auto" }, Y3 = { key: 0 }, Z3 = { dir: "auto" }, X3 = { dir: "ltr" }, J3 = { dir: "auto" }, Q3 = { class: "library-duplicate-actions" }, e4 = ["href"], t4 = ["href"], i4 = ["disabled", "onClick"], a4 = { class: "library-duplicate-actions" }, n4 = ["disabled", "onClick"], r4 = ["disabled", "onClick"], l4 = ["disabled", "onClick"], s4 = ["aria-label"], o4 = ["disabled"], u4 = ["disabled"], c4 = {
  __name: "PossibleDuplicates",
  props: { requestToken: String, reviewUrl: String },
  setup(e) {
    const t = Number(new URLSearchParams(window.location.search).get("bookId")) || 0, i = Number(new URLSearchParams(window.location.search).get("compareId")) || 0, a = e, n = /* @__PURE__ */ U([]), r = /* @__PURE__ */ U([]), s = /* @__PURE__ */ U("0"), c = /* @__PURE__ */ U(!1), d = /* @__PURE__ */ U(null), _ = /* @__PURE__ */ U(!1), v = /* @__PURE__ */ U(""), y = /* @__PURE__ */ U(""), m = /* @__PURE__ */ U("unreviewed");
    let k, C = !0, S = 0;
    const $ = j(() => d.value?.status === "running"), R = j(() => ({ running: g("library", "Finding possible duplicates"), completed: g("library", "Duplicate scan complete"), cancelled: g("library", "Duplicate scan cancelled"), failed: g("library", "Duplicate scan failed"), limited: g("library", "Duplicate scan reached its limit") })), N = j(() => ({ unreviewed: g("library", "To review"), preferred: g("library", "Preferred copy selected"), keep: g("library", "Keep both"), dismissed: g("library", "Dismissed") })), P = j(() => ({ identical: g("library", "Identical file contents"), isbn: g("library", "Same ISBN"), title_author: g("library", "Same normalized title and authors"), similar_title_author: g("library", "Similar title and matching authors") })), I = j(() => ({ formats: g("library", "Alternative formats"), languages: g("library", "Different languages"), years: g("library", "Different publication years"), publishers: g("library", "Different publishers"), identifiers: g("library", "Different ISBNs") })), he = (X) => X < 1048576 ? new Intl.NumberFormat(document.documentElement.lang || "en", { style: "unit", unit: X < 1e3 ? "byte" : "kilobyte", maximumFractionDigits: 2 }).format(X < 1e3 ? X : X / 1e3) : new Intl.NumberFormat(document.documentElement.lang || "en", { maximumFractionDigits: 2 }).format(X / 1048576) + " " + g("library", "MiB");
    async function Q(X = "", ae) {
      const J = await fetch(At(`/apps/library/api/duplicates${X}`), { credentials: "same-origin", cache: "no-store", method: ae === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: a.requestToken }, ...ae === void 0 ? {} : { body: JSON.stringify(ae) } }), ve = await J.json().catch(() => ({}));
      if (!J.ok)
        throw J.status === 409 ? new Error(g("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")) : ve.error === "decision_limit" ? new Error(g("library", "This account has 10,000 saved review decisions. Reset an old decision before saving another.")) : ve.error === "history_limit" ? new Error(g("library", "Three duplicate scans are already saved. Discard an old scan before starting another.")) : ve.error === "scope_limit" ? new Error(g("library", "This scope is too large. Choose a smaller library root.")) : J.status === 404 ? new Error(g("library", "This scan or these books are no longer available.")) : new Error(g("library", "Could not complete the duplicate review. Please try again."));
      return ve;
    }
    async function x() {
      const X = await Q();
      C && (n.value = X.roots, r.value = X.scans);
    }
    async function B(X) {
      _.value = !0, v.value = "";
      try {
        await X();
      } catch (ae) {
        C && (v.value = ae.message);
      } finally {
        C && (_.value = !1);
      }
    }
    function W() {
      if (clearTimeout(k), !C || !$.value) return;
      const X = S, ae = d.value.id;
      k = setTimeout(async () => {
        try {
          if (await Q(`/${ae}/advance`, {}), !C || X !== S) return;
          const J = await Q(`/${ae}?page=${d.value.page}&filter=${m.value}`);
          if (!C || X !== S) return;
          d.value = J, $.value || await x(), W();
        } catch (J) {
          C && X === S && (v.value = J.message);
        }
      }, 1500);
    }
    async function Z() {
      await B(async () => {
        d.value = await Q("", { rootId: Number(s.value), contents: c.value }), S++, m.value = "unreviewed", y.value = "", await x(), W();
      });
    }
    async function le(X, ae = 1) {
      const J = ++S;
      clearTimeout(k), await B(async () => {
        const ve = await Q(`/${X}?page=${ae}&filter=${m.value}`);
        C && J === S && (d.value = ve, s.value = String(ve.rootId), c.value = !!ve.contents, W());
      });
    }
    function H(X) {
      m.value = "unreviewed", y.value = "", X.target.value && le(X.target.value);
    }
    async function Y() {
      S++, clearTimeout(k), await B(async () => {
        await Q(`/${d.value.id}/cancel`, {}), d.value = await Q(`/${d.value.id}?filter=${m.value}`), await x();
      });
    }
    async function L() {
      S++, clearTimeout(k), await B(async () => {
        await Q(`/${d.value.id}/discard`, {}), d.value = null, await x();
      });
    }
    async function G(X, ae, J = 0) {
      S++, clearTimeout(k), await B(async () => {
        await Q(`/${d.value.id}/pairs/${X.id}`, { signature: X.signature, decision: ae, preferredId: J }), y.value = g("library", "Review saved. Your files and catalogue metadata were not changed."), d.value = await Q(`/${d.value.id}?page=${d.value.page}&filter=${m.value}`), W();
      });
    }
    return Ct(() => B(x)), Ci(() => {
      C = !1, S++, clearTimeout(k);
    }), (X, ae) => (h(), p("section", {
      class: "library-duplicates",
      "aria-label": u(g)("library", "Possible duplicates"),
      "aria-busy": _.value ? "true" : "false"
    }, [
      l("a", { href: e.reviewUrl }, "← " + o(u(g)("library", "Review")), 9, f3),
      l("h1", null, [
        fe(He, {
          text: u(g)("library", "Find possible copies from titles, authors and valid ISBNs. Name order and punctuation are normalized for comparison only. Editions and translations can be different books. Review decisions are private and never delete, merge or hide publications.")
        }, {
          default: Se(() => [
            ee(o(u(g)("library", "Possible duplicates")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      fe(c3, { "request-token": e.requestToken }, null, 8, ["request-token"]),
      u(t) ? (h(), De(bg, {
        key: 0,
        "item-id": u(t),
        "compare-id": u(i),
        "request-token": e.requestToken,
        full: ""
      }, null, 8, ["item-id", "compare-id", "request-token"])) : A("", !0),
      v.value ? (h(), p("p", h3, o(v.value), 1)) : A("", !0),
      y.value ? (h(), p("p", p3, o(y.value), 1)) : A("", !0),
      l("form", {
        class: "library-duplicate-toolbar",
        onSubmit: Ce(Z, ["prevent"])
      }, [
        l("label", null, [
          ee(o(u(g)("library", "Library root")), 1),
          ye(l("select", {
            "onUpdate:modelValue": ae[0] || (ae[0] = (J) => s.value = J),
            disabled: _.value || $.value
          }, [
            l("option", b3, o(u(g)("library", "All library roots")), 1),
            (h(!0), p(K, null, de(n.value, (J) => (h(), p("option", {
              key: J.id,
              value: String(J.id)
            }, o(J.label), 9, g3))), 128))
          ], 8, v3), [
            [nt, s.value]
          ])
        ]),
        l("label", m3, [
          ye(l("input", {
            "onUpdate:modelValue": ae[1] || (ae[1] = (J) => c.value = J),
            type: "checkbox",
            disabled: _.value || $.value
          }, null, 8, y3), [
            [ua, c.value]
          ]),
          fe(He, {
            text: u(g)("library", "Read equal-size candidates to confirm identical contents, including renamed copies with different metadata. This can take longer on remote storage. Checks are limited to 64 MiB per file and 512 MiB per scan; skipped checks are reported.")
          }, {
            default: Se(() => [
              ee(o(u(g)("library", "Compare file contents")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        l("button", {
          class: "button primary",
          disabled: _.value || $.value || !n.value.length
        }, o(u(g)("library", "Find possible duplicates")), 9, _3)
      ], 32),
      l("label", null, [
        fe(He, {
          text: u(g)("library", "Scans continue through Nextcloud background jobs and can be reopened for seven days. Review decisions are reused when the same books have not changed. Each comparison is independent; choosing a preferred copy does not change catalogue ordering.")
        }, {
          default: Se(() => [
            ee(o(u(g)("library", "Saved duplicate scans")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        l("select", {
          value: d.value?.id || "",
          disabled: _.value,
          onChange: H
        }, [
          l("option", k3, o(u(g)("library", "Choose a scan")), 1),
          (h(!0), p(K, null, de(r.value, (J) => (h(), p("option", {
            key: J.id,
            value: J.id
          }, o(new Date(Number(J.created_at) * 1e3).toLocaleString()) + " · " + o(R.value[J.status]), 9, S3))), 128))
        ], 40, w3)
      ]),
      d.value ? (h(), p(K, { key: 3 }, [
        l("section", {
          class: "library-duplicate-progress",
          "aria-label": u(g)("library", "Duplicate scan progress")
        }, [
          l("strong", null, o(d.value.rootId ? d.value.label : u(g)("library", "All library roots")), 1),
          l("p", T3, [
            ee(o(R.value[d.value.status]), 1),
            $.value ? (h(), p(K, { key: 0 }, [
              ee(" · " + o(d.value.phase === "index" ? u(g)("library", "Indexing metadata") : u(g)("library", "Comparing candidates")), 1)
            ], 64)) : A("", !0),
            ee(" · " + o(d.value.processed) + "/" + o(d.value.total), 1)
          ]),
          $.value ? (h(), p("progress", {
            key: 0,
            value: d.value.phase === "index" ? d.value.processed : void 0,
            max: Math.max(d.value.total, 1),
            "aria-label": u(g)("library", "Duplicate scan progress")
          }, null, 8, A3)) : A("", !0),
          l("p", null, o(u(g)("library", "Possible matches")) + ": " + o(d.value.matches) + " · " + o(u(g)("library", "Comparisons checked")) + ": " + o(d.value.examined), 1),
          d.value.hashSkipped || d.value.unavailable ? (h(), p("p", E3, o(u(g)("library", "Content checks skipped")) + ": " + o(d.value.hashSkipped) + " · " + o(u(g)("library", "Unavailable books")) + ": " + o(d.value.unavailable), 1)) : A("", !0),
          d.value.status === "limited" ? (h(), p("p", $3, o(u(g)("library", "These results are partial. A large candidate group or scan limit was reached. Try a smaller root or improve the metadata before scanning again.")), 1)) : A("", !0),
          d.value.status === "failed" ? (h(), p("p", x3, o(u(g)("library", "The scan stopped before completion. Its results are partial. Refresh or start a new scan.")), 1)) : A("", !0),
          l("div", O3, [
            $.value ? (h(), p("button", {
              key: 0,
              class: "button secondary",
              disabled: _.value,
              onClick: Y
            }, o(u(g)("library", "Cancel scan")), 9, N3)) : A("", !0),
            l("button", {
              class: "button secondary",
              disabled: _.value,
              onClick: ae[2] || (ae[2] = (J) => le(d.value.id, d.value.page))
            }, o(u(g)("library", "Refresh results")), 9, R3),
            l("button", {
              class: "button secondary",
              disabled: _.value || $.value,
              onClick: L
            }, o(u(g)("library", "Discard scan")), 9, I3)
          ])
        ], 8, C3),
        l("label", null, [
          ee(o(u(g)("library", "Show comparisons")), 1),
          ye(l("select", {
            "onUpdate:modelValue": ae[3] || (ae[3] = (J) => m.value = J),
            disabled: _.value,
            onChange: ae[4] || (ae[4] = (J) => le(d.value.id))
          }, [
            l("option", P3, o(u(g)("library", "All")) + " (" + o(d.value.matches) + ")", 1),
            (h(!0), p(K, null, de(N.value, (J, ve) => (h(), p("option", {
              key: ve,
              value: ve
            }, o(J) + " (" + o(d.value.counts[ve] || 0) + ")", 9, D3))), 128))
          ], 40, L3), [
            [nt, m.value]
          ])
        ]),
        !d.value.pairs.length && !$.value ? (h(), p("p", F3, o(u(g)("library", "No comparisons in this view.")), 1)) : A("", !0),
        (h(!0), p(K, null, de(d.value.pairs, (J) => (h(), p("article", {
          key: J.id,
          class: "library-duplicate-pair",
          "data-pair-id": J.id
        }, [
          J.unavailable ? (h(), p("p", U3, o(u(g)("library", "These books are no longer available. Start a new scan.")), 1)) : (h(), p(K, { key: 1 }, [
            l("header", null, [
              l("h2", null, o(J.reasons.includes("identical") ? u(g)("library", "Identical file contents") : u(g)("library", "Possible duplicates")), 1),
              l("span", z3, o(N.value[J.decision]), 1)
            ]),
            l("ul", {
              class: "library-duplicate-reasons",
              "aria-label": u(g)("library", "Why these books match")
            }, [
              (h(!0), p(K, null, de(J.reasons, (ve) => (h(), p("li", { key: ve }, o(P.value[ve]), 1))), 128))
            ], 8, j3),
            J.flags.length ? (h(), p("ul", {
              key: 0,
              class: "library-duplicate-flags",
              "aria-label": u(g)("library", "Differences to review")
            }, [
              (h(!0), p(K, null, de(J.flags, (ve) => (h(), p("li", { key: ve }, o(I.value[ve]), 1))), 128))
            ], 8, B3)) : A("", !0),
            J.stale ? (h(), p("p", H3, o(u(g)("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")), 1)) : A("", !0),
            l("div", V3, [
              (h(!0), p(K, null, de(J.books, (ve) => (h(), p("section", {
                key: ve.id,
                class: Ee(["library-duplicate-book", { "library-duplicate-preferred": J.preferredId === ve.id }])
              }, [
                l("div", q3, [
                  l("img", {
                    src: ve.coverUrl,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, G3),
                  l("div", null, [
                    l("h3", K3, o(ve.title), 1),
                    l("p", W3, o(ve.authors.join("; ") || "—"), 1),
                    J.preferredId === ve.id ? (h(), p("strong", Y3, o(u(g)("library", "Preferred copy")), 1)) : A("", !0)
                  ])
                ]),
                l("dl", null, [
                  l("div", null, [
                    l("dt", null, o(u(g)("library", "Format")), 1),
                    l("dd", null, o(ve.format.toUpperCase()) + " · " + o(he(ve.size)), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(g)("library", "Language")), 1),
                    l("dd", null, o(ve.language || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(g)("library", "Publication date")), 1),
                    l("dd", null, o(ve.publicationDate || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(g)("library", "Publisher")), 1),
                    l("dd", Z3, o(ve.publisher || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(g)("library", "ISBN")), 1),
                    l("dd", X3, o(ve.isbn.join(", ") || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(g)("library", "Location")), 1),
                    l("dd", J3, o(ve.path), 1)
                  ])
                ]),
                l("div", Q3, [
                  l("a", {
                    class: "button secondary",
                    href: ve.openUrl
                  }, o(u(g)("library", "Open")), 9, e4),
                  l("a", {
                    class: "button secondary",
                    href: ve.detailsUrl
                  }, o(u(g)("library", "Details")), 9, t4),
                  l("button", {
                    class: "button primary",
                    disabled: _.value || $.value || J.stale,
                    onClick: (Ae) => G(J, "preferred", ve.id)
                  }, o(u(g)("library", "Prefer this copy")), 9, i4)
                ])
              ], 2))), 128))
            ]),
            l("div", a4, [
              l("button", {
                class: "button secondary",
                disabled: _.value || $.value || J.stale,
                onClick: (ve) => G(J, "keep")
              }, o(u(g)("library", "Keep both")), 9, n4),
              l("button", {
                class: "button secondary",
                disabled: _.value || $.value || J.stale,
                onClick: (ve) => G(J, "dismissed")
              }, o(u(g)("library", "Dismiss match")), 9, r4),
              J.decision !== "unreviewed" ? (h(), p("button", {
                key: 0,
                class: "button secondary",
                disabled: _.value || $.value || J.stale,
                onClick: (ve) => G(J, "unreviewed")
              }, o(u(g)("library", "Reset review decision")), 9, l4)) : A("", !0)
            ])
          ], 64))
        ], 8, M3))), 128)),
        l("nav", {
          class: "library-duplicate-actions",
          "aria-label": u(g)("library", "Duplicate comparison pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: _.value || d.value.page === 1,
            onClick: ae[5] || (ae[5] = (J) => le(d.value.id, d.value.page - 1))
          }, o(u(g)("library", "Previous page")), 9, o4),
          l("span", null, o(d.value.page), 1),
          l("button", {
            class: "button secondary",
            disabled: _.value || !d.value.hasNext,
            onClick: ae[6] || (ae[6] = (J) => le(d.value.id, d.value.page + 1))
          }, o(u(g)("library", "Next page")), 9, u4)
        ], 8, s4)
      ], 64)) : A("", !0)
    ], 8, d3));
  }
}, af = ["title", "subtitle", "author", "series", "seriesNumber", "language", "publisher", "subject", "year", "genre"], d4 = /* @__PURE__ */ new Set([...af, "ignore", "folder", "folders", "extension"]);
function gg(e, t, i = {}) {
  if (!t || t.length > 1e3 || e.length > 2e3) return { status: "invalid", reason: "pattern", changes: [] };
  if (/%folders?%(?!\/)/.test(t)) return { status: "invalid", reason: "pattern", changes: [] };
  const a = (y) => y === "%folders%/" ? "folders" : y.slice(1, -1), n = t.split(/(%folders%\/|%[A-Za-z]+%)/).filter(Boolean);
  if (n.some((y) => y.includes("%") && !d4.has(a(y))) || n.filter((y) => y.startsWith("%")).length > 16) return { status: "invalid", reason: "pattern", changes: [] };
  if (/%[A-Za-z]+%%[A-Za-z]+%/.test(t)) return { status: "invalid", reason: "delimiter", changes: [] };
  let r = 0, s = !1;
  const c = [];
  function d(y, m, k) {
    if (++r > 5e3) {
      s = !0;
      return;
    }
    if (c.length > 1) return;
    if (y === n.length) {
      m === e.length && c.push(k);
      return;
    }
    const C = n[y];
    if (!C.startsWith("%")) {
      e.startsWith(C, m) && d(y + 1, m + C.length, k);
      return;
    }
    const S = a(C);
    if (S === "folders") {
      d(y + 1, m, k);
      for (let N = m; N < e.length && !s && c.length < 2; N++) e[N] === "/" && d(y + 1, N + 1, k);
      return;
    }
    const $ = e.indexOf("/", m), R = $ < 0 ? e.length : $;
    for (let N = m + 1; N <= R && !s && c.length < 2; N++) {
      const P = e.slice(m, N);
      S === "folder" && N !== R || S === "extension" && !/^[A-Za-z0-9]{1,12}$/.test(P) || d(y + 1, N, [...k, { key: S, raw: P }]);
    }
  }
  if (d(0, 0, []), s || c.length > 1) return { status: "ambiguous", changes: [] };
  if (!c.length) return { status: "unmatched", changes: [] };
  const _ = /* @__PURE__ */ new Map(), v = [];
  for (const { key: y, raw: m } of c[0]) {
    if (!af.includes(y)) continue;
    let k = m.trim();
    if (_.has(y) && _.get(y) !== k) return { status: "ambiguous", changes: [] };
    if (_.has(y)) continue;
    if (_.set(y, k), y === "year" && !/^\d{4}$/.test(k)) return { status: "invalid", reason: "year", changes: [] };
    if (y === "language" && (k = mg(k)), y === "language" && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(k)) return { status: "invalid", reason: "language", changes: [] };
    if (y === "author" && [...k].length > 255) return { status: "invalid", changes: [] };
    if (!yg(y, k)) return { status: "invalid", changes: [] };
    const C = String(i[y] || ""), S = y === "author" && Array.isArray(i.authors) ? JSON.stringify([k]) === JSON.stringify(i.authors) : C === k;
    v.push({ field: y, raw: m, value: k, ...y === "author" ? { values: [k] } : {}, before: C, previewOnly: !1, status: S ? "unchanged" : C.trim() ? "conflict" : "ready" });
  }
  return { status: v.some((y) => y.status === "conflict") ? "conflict" : v.some((y) => y.status === "ready") ? "ready" : "unchanged", changes: v };
}
function mg(e) {
  return ({ english: "en", german: "de", deutsch: "de", french: "fr", français: "fr", arabic: "ar" }[e.toLowerCase()] || e.toLowerCase()).replace(/^([a-z]{2,3})-([a-z]{2})$/, (i, a, n) => `${a}-${n.toUpperCase()}`);
}
function yg(e, t) {
  const i = { title: 512, subtitle: 512, author: 1024, series: 255, seriesNumber: 64, genre: 255, language: 64, publisher: 512, subject: 2048, year: 4 };
  return e in i ? !!t && [...t].length <= i[e] && !/[\x00-\x1f\x7f]/.test(t) && (e !== "year" || Number(t) > 0) : !0;
}
const f4 = [...af];
function is(e) {
  const t = e.split("/"), i = t.pop() || "", a = i.lastIndexOf(".");
  return [...t, a > 0 ? i.slice(0, a) : i];
}
function Cu(e = "ignore") {
  return { field: e, split: null, prefix: "", suffix: "", underscores: !1, mapFrom: "", mapTo: "", authorSeparator: "", reverseName: !1 };
}
function pd(e, t, i) {
  if (!t) return [e];
  if (i === "every") return e.split(t);
  const a = i === "last" ? e.lastIndexOf(t) : e.indexOf(t);
  return a < 0 ? [e] : [e.slice(0, a), e.slice(a + t.length)];
}
function eu(e) {
  return { version: 1, combineAuthors: !1, parts: is(e).map((t, i, a) => Cu(i === a.length - 1 ? "title" : "ignore")) };
}
function tu(e, t, i = {}) {
  const a = (y) => ({ status: y, changes: [] });
  if (!e || e.length > 2e3 || t?.version !== 1 || !Array.isArray(t.parts) || t.parts.length > 64) return a("invalid");
  const n = is(e);
  if (n.length !== t.parts.length) return a("unmatched");
  const r = /* @__PURE__ */ new Map();
  let s = 0, c = "";
  function d(y, m, k = 0) {
    if (c) return;
    if (++s > 128 || k > 6 || !m) {
      c = "invalid";
      return;
    }
    if (m.split) {
      const { delimiter: R, occurrence: N, children: P } = m.split;
      if (typeof R != "string" || !R || R.length > 100 || !["first", "last", "every"].includes(N) || !Array.isArray(P)) {
        c = "invalid";
        return;
      }
      const I = pd(y, R, N);
      if (I.length !== P.length || I.length < 2) {
        c = "unmatched";
        return;
      }
      I.forEach((he, Q) => d(he, P[Q], k + 1));
      return;
    }
    if (m.field === "ignore") return;
    if (!f4.includes(m.field)) {
      c = "invalid";
      return;
    }
    let C = y.trim();
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
      if (S = (m.authorSeparator ? C.split(m.authorSeparator) : S).map((R) => R.trim()), m.reverseName && (S = S.map((R) => {
        const N = R.split(",").map((P) => P.trim());
        return N.length !== 2 || N.some((P) => !P) ? (c = "invalid", R) : `${N[1]} ${N[0]}`;
      }), c))
        return;
      if (S.some((R) => !R || [...R].length > 255)) {
        c = "invalid";
        return;
      }
    }
    const $ = r.get(m.field);
    $ ? m.field === "author" && t.combineAuthors ? ($.values = [.../* @__PURE__ */ new Set([...$.values, ...S])], $.raw.push(y)) : JSON.stringify($.values) !== JSON.stringify(S) && (c = "ambiguous") : r.set(m.field, { raw: [y], values: [...new Set(S)] });
  }
  if (n.forEach((y, m) => d(y, t.parts[m])), c) return a(c);
  const _ = r.get("author")?.values;
  if (_ && (_.length > 32 || [..._.join("; ")].length > 1024)) return a("invalid");
  const v = [...r].map(([y, m]) => {
    const k = m.values.join("; "), C = String(i[y] || ""), S = y === "author" && Array.isArray(i.authors) ? JSON.stringify(m.values) === JSON.stringify(i.authors) : C === k;
    return {
      field: y,
      raw: m.raw.join(" / "),
      value: k,
      values: m.values,
      before: C,
      previewOnly: !1,
      status: S ? "unchanged" : C.trim() ? "conflict" : "ready"
    };
  });
  return { status: v.some((y) => y.status === "conflict") ? "conflict" : v.some((y) => y.status === "ready") ? "ready" : "unchanged", changes: v };
}
const h4 = ["aria-label", "aria-busy"], p4 = {
  key: 0,
  role: "alert"
}, v4 = ["disabled"], b4 = {
  key: 2,
  role: "status"
}, g4 = ["disabled"], m4 = { class: "library-inference-presets" }, y4 = ["disabled"], _4 = ["disabled"], w4 = ["disabled"], k4 = ["aria-label"], S4 = ["value", "aria-label"], C4 = { class: "library-inference-before-after" }, T4 = { key: 0 }, A4 = ["aria-label"], E4 = ["aria-label"], $4 = { class: "library-inference-path" }, x4 = { class: "library-inference-presets" }, O4 = ["disabled"], N4 = ["disabled"], R4 = ["disabled"], I4 = ["disabled"], L4 = ["disabled"], P4 = { class: "library-inference-history" }, D4 = ["disabled", "onClick"], _g = {
  __name: "InferenceApply",
  props: { results: { type: Array, required: !0 }, labels: { type: Object, required: !0 }, context: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, wholeFolder: Boolean },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const i = e, a = t, n = /* @__PURE__ */ U([]), r = /* @__PURE__ */ U(null), s = /* @__PURE__ */ U([]), c = /* @__PURE__ */ U(!1), d = /* @__PURE__ */ U(""), _ = /* @__PURE__ */ U(""), v = /* @__PURE__ */ U(""), y = /* @__PURE__ */ new Set(["author", "title", "subtitle", "series", "seriesNumber", "genre", "language", "publisher", "subject", "year"]), m = j(() => i.results.filter((le) => ["ready", "conflict"].includes(le.status) && le.revision).map((le) => ({ ...le, changes: le.changes.filter((H) => y.has(H.field) && ["ready", "conflict"].includes(H.status)) })).filter((le) => le.changes.length)), k = (le, H) => `${le.id}:${H.field}`, C = j(() => m.value.map((le) => ({ id: le.id, revision: le.revision, changes: Object.fromEntries(le.changes.filter((H) => n.value.includes(k(le, H))).map((H) => [H.field, H.field === "author" ? H.values || [H.value] : H.value])) })).filter((le) => Object.keys(le.changes).length)), S = j(() => ({ prepared: g("library", "Awaiting approval"), applied: g("library", "Applied"), undone: g("library", "Undone") }));
    let $ = 0;
    Ke(() => JSON.stringify([i.results, i.context]), () => {
      n.value = [], r.value?.status === "prepared" && (r.value = null), v.value = "", $++;
    }), Ke(() => JSON.stringify(n.value), () => {
      r.value?.status === "prepared" && (r.value = null), v.value = "", $++;
    });
    function R() {
      n.value = m.value.flatMap((le) => le.changes.filter((H) => H.status === "ready").map((H) => k(le, H)));
    }
    async function N(le = "", H) {
      const Y = await fetch(At(`/apps/library/api/inference/batches${le}`), { credentials: "same-origin", cache: "no-store", method: H === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: i.requestToken }, ...H === void 0 ? {} : { body: JSON.stringify(H) } }), L = await Y.json();
      if (!Y.ok)
        throw Y.status === 409 ? (r.value && (r.value = { ...r.value, blocked: !0 }), new Error(g("library", "This review is stale or expired. Reload the sample and review again. Undo cannot overwrite later metadata changes."))) : L.error === "history_limit" ? new Error(g("library", "Recent batch history is full. Discard unused reviews or wait for history to expire.")) : Y.status === 404 ? new Error(g("library", "The batch or one of its books is no longer available.")) : new Error(g("library", "Could not save these changes. Check the selected values or use a smaller selection."));
      return L;
    }
    async function P() {
      s.value = (await N()).batches;
    }
    async function I(le) {
      c.value = !0, d.value = "", _.value = "";
      try {
        await le();
      } catch (H) {
        d.value = H.message;
      } finally {
        c.value = !1;
      }
    }
    function he() {
      r.value = null, d.value = "", v.value = "", a("changed");
    }
    async function Q() {
      const le = $;
      await I(async () => {
        const H = await N("", { proposals: C.value, context: i.context });
        le === $ && (r.value = H), await P();
      });
    }
    async function x(le) {
      await I(async () => {
        r.value = await N(`/${le}`), v.value = "";
      });
    }
    async function B() {
      if (!r.value || i.disabled) return;
      const le = r.value, H = le.id;
      await I(async () => {
        const Y = await N(`/${H}/apply`, {});
        r.value = { ...le, ...Y }, _.value = g("library", "Selected metadata changes were applied. Source files were not changed."), n.value = [], await P(), a("changed");
      });
    }
    async function W() {
      const le = r.value, H = le.id;
      await I(async () => {
        const Y = await N(`/${H}/undo`, {});
        r.value = { ...le, ...Y }, v.value = "", _.value = g("library", "The batch was undone. Previous metadata and provenance were restored."), await P(), a("changed");
      });
    }
    async function Z() {
      await I(async () => {
        await N(`/${r.value.id}/discard`, {}), r.value = null, await P();
      });
    }
    return Ct(() => I(P)), (le, H) => (h(), p("section", {
      class: "library-inference-apply",
      "aria-label": u(g)("library", "Review and apply metadata"),
      "aria-busy": c.value ? "true" : "false"
    }, [
      l("h2", null, [
        fe(He, {
          text: e.wholeFolder ? u(g)("library", "Choose fields from this page only. Existing values require individual selection. Apply and Undo operate on this reviewed batch of at most 40 books.") : u(g)("library", "Choose fields from this sample only. Replacements require individual selection. Authors are stored in their preview order, with exact duplicates removed.")
        }, {
          default: Se(() => [
            ee(o(e.wholeFolder ? u(g)("library", "Review and apply metadata") : u(g)("library", "4. Review and apply metadata")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      d.value ? (h(), p("p", p4, o(d.value), 1)) : A("", !0),
      r.value?.blocked ? (h(), p("button", {
        key: 1,
        class: "button secondary",
        disabled: c.value,
        onClick: he
      }, o(u(g)("library", "Load sample")), 9, v4)) : A("", !0),
      _.value ? (h(), p("p", b4, o(_.value), 1)) : A("", !0),
      l("fieldset", {
        disabled: c.value || e.disabled,
        class: "library-inference-approval-fields"
      }, [
        l("div", m4, [
          l("button", {
            class: "button secondary",
            disabled: !m.value.length,
            onClick: R
          }, o(u(g)("library", "Select empty fields")), 9, y4),
          l("button", {
            class: "button secondary",
            disabled: !n.value.length,
            onClick: H[0] || (H[0] = (Y) => n.value = [])
          }, o(u(g)("library", "Clear selection")), 9, _4),
          l("button", {
            class: "button primary",
            disabled: !C.value.length || r.value?.status === "prepared",
            onClick: Q
          }, o(u(g)("library", "Review selected changes")) + " (" + o(n.value.length) + ")", 9, w4)
        ]),
        l("div", {
          class: Ee(["library-inference-approval-candidates", { "library-inference-approval-scroll": m.value.length > 8 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(g)("library", "Select metadata fields")
        }, [
          (h(!0), p(K, null, de(m.value, (Y) => (h(), p("details", {
            key: Y.id,
            class: "library-inference-result"
          }, [
            l("summary", null, o(Y.path), 1),
            (h(!0), p(K, null, de(Y.changes, (L) => (h(), p("label", {
              key: L.field,
              class: "library-inference-approval-field"
            }, [
              ye(l("input", {
                "onUpdate:modelValue": H[1] || (H[1] = (G) => n.value = G),
                type: "checkbox",
                value: k(Y, L),
                "aria-label": `${e.labels[L.field]}: ${Y.path}`
              }, null, 8, S4), [
                [ua, n.value]
              ]),
              l("span", null, [
                l("strong", null, o(e.labels[L.field]), 1),
                l("span", C4, [
                  l("span", null, o(L.before || "—"), 1),
                  H[4] || (H[4] = l("span", { "aria-hidden": "true" }, " → ", -1)),
                  l("strong", null, o(L.value), 1)
                ]),
                L.status === "conflict" ? (h(), p("small", T4, o(u(g)("library", "Replaces an existing value")), 1)) : A("", !0)
              ])
            ]))), 128))
          ]))), 128))
        ], 10, k4)
      ], 8, g4),
      r.value ? (h(), p("section", {
        key: 3,
        class: "library-inference-confirm",
        "aria-label": u(g)("library", "Confirmed change review")
      }, [
        l("h3", null, o(S.value[r.value.status]), 1),
        l("p", null, [
          fe(He, {
            text: u(g)("library", "Reviews expire after 30 minutes. Applied batches can be undone for seven days, provided their metadata, source file and access have not changed. A stale item blocks the entire batch.")
          }, {
            default: Se(() => [
              ee(o(u(g)("library", "Available until")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ee(": " + o(new Date(r.value.expiresAt * 1e3).toLocaleString()), 1)
        ]),
        l("div", {
          class: Ee(["library-inference-confirm-entries", { "library-inference-approval-scroll": r.value.entries.length > 4 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(g)("library", "Reviewed metadata changes")
        }, [
          (h(!0), p(K, null, de(r.value.entries, (Y) => (h(), p("article", {
            key: Y.id
          }, [
            l("h4", $4, o(Y.path), 1),
            l("dl", null, [
              (h(!0), p(K, null, de(Y.changes, (L) => (h(), p("div", {
                key: L.field
              }, [
                l("dt", null, o(e.labels[L.field]), 1),
                l("dd", null, [
                  l("span", null, o(u(g)("library", "Before")) + ": " + o(L.before || "—"), 1),
                  l("strong", null, o(u(g)("library", "After")) + ": " + o(L.after), 1)
                ])
              ]))), 128))
            ])
          ]))), 128))
        ], 10, E4),
        l("div", x4, [
          r.value.status === "prepared" ? (h(), p("button", {
            key: 0,
            class: "button primary",
            disabled: c.value || e.disabled || r.value.blocked,
            onClick: B
          }, o(u(g)("library", "Apply reviewed changes")), 9, O4)) : A("", !0),
          r.value.status !== "applied" ? (h(), p("button", {
            key: 1,
            class: "button secondary",
            disabled: c.value,
            onClick: Z
          }, o(u(g)("library", "Discard review")), 9, N4)) : A("", !0),
          r.value.status === "applied" && !v.value ? (h(), p("button", {
            key: 2,
            class: "button secondary",
            disabled: c.value || r.value.blocked,
            onClick: H[2] || (H[2] = (Y) => v.value = r.value.id)
          }, o(u(g)("library", "Undo this batch")), 9, R4)) : A("", !0),
          v.value ? (h(), p(K, { key: 3 }, [
            l("button", {
              class: "button primary",
              disabled: c.value || r.value.blocked,
              onClick: W
            }, o(u(g)("library", "Confirm undo")), 9, I4),
            l("button", {
              class: "button secondary",
              disabled: c.value,
              onClick: H[3] || (H[3] = (Y) => v.value = "")
            }, o(u(g)("library", "Cancel")), 9, L4)
          ], 64)) : A("", !0)
        ])
      ], 8, A4)) : A("", !0),
      l("details", P4, [
        l("summary", null, o(u(g)("library", "Recent metadata batches")) + " (" + o(s.value.length) + ")", 1),
        l("ul", null, [
          (h(!0), p(K, null, de(s.value, (Y) => (h(), p("li", {
            key: Y.id
          }, [
            l("button", {
              class: "button secondary",
              disabled: c.value,
              onClick: (L) => x(Y.id)
            }, o(new Date(Number(Y.created_at) * 1e3).toLocaleString()) + " · " + o(S.value[Y.status]), 9, D4)
          ]))), 128))
        ])
      ])
    ], 8, h4));
  }
}, F4 = { class: "library-inference-rule-trace" }, M4 = { key: 0 }, vd = {
  __name: "InferenceRuleTrace",
  props: { result: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 } },
  setup(e) {
    return (t, i) => (h(), p("div", F4, [
      (h(!0), p(K, null, de(e.result.conflicts || [], (a) => (h(), p("div", {
        key: a.field,
        class: "library-inference-rule-conflict"
      }, [
        l("strong", null, o(u(g)("library", "Conflicting rules")) + ": " + o(e.labels[a.field]), 1),
        l("ul", null, [
          (h(!0), p(K, null, de(a.proposals, (n, r) => (h(), p("li", { key: r }, [
            l("bdi", null, o(n.value), 1),
            l("small", null, o(n.sources.map((s) => s.name).join(", ")), 1)
          ]))), 128))
        ])
      ]))), 128)),
      e.result.attempts?.length ? (h(), p("details", M4, [
        l("summary", null, [
          fe(He, {
            text: u(g)("library", "Evaluated from the deepest assigned folder upward. An ambiguous match stops fallback. Rules above a successful match are not used. Conflicting fields have no single proposed value.")
          }, {
            default: Se(() => [
              ee(o(u(g)("library", "Rule evaluation")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        l("ul", null, [
          (h(!0), p(K, null, de(e.result.attempts, (a) => (h(), p("li", {
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
}, U4 = ["aria-label", "aria-busy"], z4 = {
  key: 0,
  role: "alert"
}, j4 = { class: "library-inference-presets" }, B4 = ["disabled"], H4 = ["value", "disabled"], V4 = { value: "" }, q4 = ["value"], G4 = { class: "library-inference-path" }, K4 = { role: "status" }, W4 = ["value", "max", "aria-label"], Y4 = { class: "library-inference-presets" }, Z4 = ["disabled"], X4 = ["disabled"], J4 = ["disabled"], Q4 = {
  key: 1,
  role: "alert"
}, eO = {
  key: 2,
  role: "alert"
}, tO = {
  key: 0,
  class: "library-analysis-definition",
  dir: "ltr"
}, iO = { key: 1 }, aO = { key: 2 }, nO = ["disabled"], rO = { value: "all" }, lO = ["value"], sO = ["aria-label"], oO = { class: "library-inference-path" }, uO = ["aria-label"], cO = ["disabled"], dO = ["disabled"], fO = {
  __name: "InferenceAnalysis",
  props: { definition: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 }, requestToken: String, disabled: Boolean },
  setup(e) {
    const t = e, i = /* @__PURE__ */ U(null), a = /* @__PURE__ */ U([]), n = /* @__PURE__ */ U(!1), r = /* @__PURE__ */ U(""), s = /* @__PURE__ */ U("all");
    let c, d = 0, _ = !0;
    const v = j(() => i.value?.status === "running"), y = j(() => ({ running: g("library", "Analysing"), completed: g("library", "Analysis complete"), cancelled: g("library", "Analysis cancelled"), failed: g("library", "Analysis failed"), limited: g("library", "Analysis limit reached") })), m = j(() => ({ ...t.statuses, unavailable: g("library", "Changed or unavailable books") }));
    async function k(Q = "", x) {
      const B = await fetch(At(`/apps/library/api/inference/analyses${Q}`), { credentials: "same-origin", cache: "no-store", method: x === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...x === void 0 ? {} : { body: JSON.stringify(x) } }), W = await B.json();
      if (!B.ok)
        throw W.error === "analysis_history_limit" ? new Error(g("library", "Five folder analyses are already saved. Discard an old analysis before starting another.")) : W.error === "analysis_limit" ? new Error(g("library", "This folder exceeds the analysis limit. Choose a smaller subfolder.")) : B.status === 404 ? new Error(g("library", "This analysis or its folder is no longer available.")) : new Error(g("library", "Could not analyse this folder. Check the rule, folder and your access."));
      return W;
    }
    async function C() {
      const Q = await k();
      _ && (a.value = Q.jobs);
    }
    async function S(Q) {
      n.value = !0, r.value = "";
      try {
        await Q();
      } catch (x) {
        _ && (r.value = x.message);
      } finally {
        _ && (n.value = !1);
      }
    }
    function $() {
      if (clearTimeout(c), !_ || !v.value) return;
      const Q = i.value.id, x = d;
      c = setTimeout(async () => {
        try {
          if (await k(`/${Q}/advance`, {}), !_ || d !== x) return;
          const B = await k(`/${Q}?page=${i.value.page}&filter=${s.value}`);
          if (!_ || d !== x) return;
          i.value = B, v.value || await C(), $();
        } catch (B) {
          _ && d === x && (r.value = B.message);
        }
      }, 1500);
    }
    async function R() {
      await S(async () => {
        const Q = await k("", { definition: t.definition });
        d++, s.value = "all", i.value = Q, await C(), $();
      });
    }
    async function N(Q, x = 1) {
      const B = ++d;
      clearTimeout(c), await S(async () => {
        const W = await k(`/${Q}?page=${x}&filter=${s.value}`);
        _ && B === d && (i.value = W, $());
      });
    }
    function P(Q) {
      s.value = "all", Q.target.value && N(Q.target.value);
    }
    async function I() {
      const Q = i.value.id;
      d++, clearTimeout(c), await S(async () => {
        await k(`/${Q}/cancel`, {}), i.value = await k(`/${Q}?filter=${s.value}`), await C();
      });
    }
    async function he() {
      const Q = i.value.id;
      d++, clearTimeout(c), await S(async () => {
        await k(`/${Q}/discard`, {}), i.value = null, await C();
      });
    }
    return Ct(() => S(C)), Ci(() => {
      _ = !1, d++, clearTimeout(c);
    }), (Q, x) => (h(), p("section", {
      class: "library-inference-analysis library-inference-step",
      "aria-label": u(g)("library", "Whole-folder analysis"),
      "aria-busy": n.value ? "true" : "false"
    }, [
      l("h2", null, [
        fe(He, {
          text: u(g)("library", "Analyse all indexed books in the loaded folder using a snapshot of the current rule. Analysis continues through Nextcloud background jobs after you leave. Results are saved for seven days. New books require a new analysis; source files remain unchanged.")
        }, {
          default: Se(() => [
            ee(o(u(g)("library", "5. Analyse the whole folder")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      r.value ? (h(), p("p", z4, o(r.value), 1)) : A("", !0),
      l("div", j4, [
        l("button", {
          class: "button primary",
          disabled: n.value || e.disabled || v.value,
          onClick: R
        }, o(u(g)("library", "Analyse whole folder")), 9, B4),
        l("label", null, [
          fe(He, {
            text: u(g)("library", "Select a saved analysis to reopen its results. Each page contains at most 40 books. Changes and Undo remain separate for each approved batch.")
          }, {
            default: Se(() => [
              ee(o(u(g)("library", "Saved analyses")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          l("select", {
            value: i.value?.id || "",
            disabled: n.value,
            onChange: P
          }, [
            l("option", V4, o(u(g)("library", "Choose an analysis")), 1),
            (h(!0), p(K, null, de(a.value, (B) => (h(), p("option", {
              key: B.id,
              value: B.id
            }, o(new Date(Number(B.created_at) * 1e3).toLocaleString()) + " · " + o(y.value[B.status]) + " · " + o(B.processed) + "/" + o(B.total), 9, q4))), 128))
          ], 40, H4)
        ])
      ]),
      i.value ? (h(), p(K, { key: 1 }, [
        l("p", G4, o(i.value.scope), 1),
        l("p", K4, o(y.value[i.value.status]) + " · " + o(i.value.processed) + "/" + o(i.value.total), 1),
        v.value ? (h(), p("progress", {
          key: 0,
          value: i.value.processed,
          max: Math.max(i.value.total, 1),
          "aria-label": u(g)("library", "Analysis progress")
        }, null, 8, W4)) : A("", !0),
        l("div", Y4, [
          v.value ? (h(), p("button", {
            key: 0,
            class: "button secondary",
            disabled: n.value,
            onClick: I
          }, o(u(g)("library", "Cancel analysis")), 9, Z4)) : A("", !0),
          l("button", {
            class: "button secondary",
            disabled: n.value,
            onClick: x[0] || (x[0] = (B) => N(i.value.id, i.value.page))
          }, o(u(g)("library", "Refresh results")), 9, X4),
          l("button", {
            class: "button secondary",
            disabled: n.value || v.value,
            onClick: he
          }, o(u(g)("library", "Discard analysis")), 9, J4)
        ]),
        i.value.status === "limited" ? (h(), p("p", Q4, o(u(g)("library", "Analysis stopped at its storage limit. These results are partial. Choose a smaller subfolder for a complete analysis.")), 1)) : A("", !0),
        i.value.status === "failed" ? (h(), p("p", eO, o(u(g)("library", "Analysis stopped before completion. Check folder access and start a new analysis. These results are partial.")), 1)) : A("", !0),
        l("details", null, [
          l("summary", null, o(u(g)("library", "Rule used for this analysis")), 1),
          i.value.definition.mode === "pattern" ? (h(), p("code", tO, o(i.value.definition.pattern), 1)) : i.value.definition.mode === "folders" ? (h(), p("ul", iO, [
            (h(!0), p(K, null, de(i.value.definition.assignments, (B) => (h(), p("li", {
              key: B.id
            }, o(B.folder || "/") + " · " + o(B.definition.name), 1))), 128))
          ])) : (h(), p("ul", aO, [
            (h(!0), p(K, null, de(i.value.definition.rule.parts, (B, W) => (h(), p("li", { key: W }, o(W + 1) + " · " + o(e.labels[B.field] || u(g)("library", "Ignore")), 1))), 128))
          ]))
        ]),
        l("label", null, [
          ee(o(u(g)("library", "Show results")), 1),
          ye(l("select", {
            "onUpdate:modelValue": x[1] || (x[1] = (B) => s.value = B),
            disabled: n.value,
            onChange: x[2] || (x[2] = (B) => N(i.value.id))
          }, [
            l("option", rO, o(u(g)("library", "All")) + " (" + o(Object.values(i.value.counts).reduce((B, W) => B + W, 0)) + ")", 1),
            (h(!0), p(K, null, de(m.value, (B, W) => (h(), p("option", {
              key: W,
              value: W
            }, o(B) + " (" + o(i.value.counts[W] || 0) + ")", 9, lO))), 128))
          ], 40, nO), [
            [nt, s.value]
          ])
        ]),
        l("div", {
          class: "library-analysis-results",
          role: "region",
          tabindex: "0",
          "aria-label": u(g)("library", "Analysis results")
        }, [
          (h(!0), p(K, null, de(i.value.items, (B) => (h(), p("details", {
            key: B.id,
            class: "library-inference-result"
          }, [
            l("summary", null, [
              l("span", oO, o(B.path || "—"), 1),
              l("strong", null, o(m.value[B.status]), 1)
            ]),
            i.value.definition.mode === "folders" ? (h(), De(vd, {
              key: 0,
              result: B,
              labels: e.labels,
              statuses: m.value
            }, null, 8, ["result", "labels", "statuses"])) : A("", !0),
            (h(!0), p(K, null, de(B.changes, (W) => (h(), p("dl", {
              key: W.field
            }, [
              l("dt", null, o(e.labels[W.field]), 1),
              l("dd", null, o(W.before || "—") + " → " + o(W.value), 1)
            ]))), 128))
          ]))), 128))
        ], 8, sO),
        l("nav", {
          class: "library-inference-presets",
          "aria-label": u(g)("library", "Analysis pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: n.value || i.value.page === 1,
            onClick: x[3] || (x[3] = (B) => N(i.value.id, i.value.page - 1))
          }, o(u(g)("library", "Previous page")), 9, cO),
          l("span", null, o(i.value.page), 1),
          l("button", {
            class: "button secondary",
            disabled: n.value || !i.value.hasNext,
            onClick: x[4] || (x[4] = (B) => N(i.value.id, i.value.page + 1))
          }, o(u(g)("library", "Next page")), 9, dO)
        ], 8, uO),
        fe(_g, {
          "whole-folder": "",
          results: i.value.items,
          labels: e.labels,
          "request-token": e.requestToken,
          context: JSON.stringify({ analysisId: i.value.id }),
          disabled: n.value || v.value,
          onChanged: x[5] || (x[5] = (B) => N(i.value.id, i.value.page))
        }, null, 8, ["results", "labels", "request-token", "context", "disabled"])
      ], 64)) : A("", !0)
    ], 8, U4));
  }
}, hO = { class: "library-inference-part" }, pO = { class: "library-inference-part-source" }, vO = { class: "library-inference-part-options" }, bO = { value: "first" }, gO = { value: "last" }, mO = { value: "every" }, yO = {
  key: 0,
  role: "status"
}, _O = ["aria-label"], wO = { value: "ignore" }, kO = ["value"], SO = { key: 1 }, CO = { class: "library-inference-part-options" }, TO = { class: "library-inference-checkbox" }, AO = {
  key: 2,
  class: "library-inference-part-options"
}, EO = { value: "none" }, $O = { value: "semicolon" }, xO = { value: "and" }, OO = { value: "custom" }, NO = { key: 0 }, RO = ["value"], IO = { class: "library-inference-checkbox" }, Pp = " and ", LO = {
  __name: "InferencePart",
  props: { node: { type: Object, required: !0 }, value: { type: String, default: "" }, fields: { type: Array, required: !0 }, depth: { type: Number, default: 0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ U(t.node.split?.delimiter || " - "), a = /* @__PURE__ */ U(t.node.split?.occurrence || "first"), n = j(() => t.node.split ? pd(t.value, t.node.split.delimiter, t.node.split.occurrence) : []), r = j({
      get: () => t.node.authorSeparatorChoice || "none",
      set: (d) => {
        t.node.authorSeparatorChoice = d, t.node.authorSeparator = { none: "", semicolon: ";", ampersand: "&", and: Pp, custom: t.node.customAuthorSeparator || "" }[d];
      }
    });
    function s(d) {
      t.node.customAuthorSeparator = d.target.value, t.node.authorSeparator = d.target.value;
    }
    function c() {
      const d = pd(t.value, i.value, a.value).length, _ = t.node.split?.children || [];
      t.node.split = {
        delimiter: i.value,
        occurrence: a.value,
        children: Array.from({ length: Math.min(32, Math.max(2, d)) }, (v, y) => _[y] || Cu(y === 0 ? t.node.field : "ignore"))
      };
    }
    return (d, _) => {
      const v = Je("InferencePart", !0);
      return h(), p("div", hO, [
        l("bdi", pO, o(e.value || "—"), 1),
        e.node.split ? (h(), p(K, { key: 0 }, [
          l("div", vO, [
            l("label", null, [
              ee(o(u(g)("library", "Separator")), 1),
              ye(l("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (y) => i.value = y),
                maxlength: "100",
                onInput: c
              }, null, 544), [
                [ze, i.value]
              ])
            ]),
            l("label", null, [
              ee(o(u(g)("library", "Split at")), 1),
              ye(l("select", {
                "onUpdate:modelValue": _[1] || (_[1] = (y) => a.value = y),
                onChange: c
              }, [
                l("option", bO, o(u(g)("library", "First occurrence")), 1),
                l("option", gO, o(u(g)("library", "Last occurrence")), 1),
                l("option", mO, o(u(g)("library", "Every occurrence")), 1)
              ], 544), [
                [nt, a.value]
              ])
            ])
          ]),
          n.value.length !== e.node.split.children.length || !e.node.split.delimiter ? (h(), p("p", yO, o(u(g)("library", "This example does not match the split. Adjust the separator or select another example.")), 1)) : A("", !0),
          l("button", {
            class: "button secondary",
            onClick: _[2] || (_[2] = (y) => e.node.split = null)
          }, o(u(g)("library", "Use whole part")), 1),
          (h(!0), p(K, null, de(e.node.split.children, (y, m) => (h(), De(v, {
            key: m,
            node: y,
            value: n.value[m] || "",
            fields: e.fields,
            depth: e.depth + 1
          }, null, 8, ["node", "value", "fields", "depth"]))), 128))
        ], 64)) : (h(), p(K, { key: 1 }, [
          l("label", null, [
            ee(o(u(g)("library", "Field")), 1),
            ye(l("select", {
              "onUpdate:modelValue": _[3] || (_[3] = (y) => e.node.field = y),
              "aria-label": `${u(g)("library", "Field")}: ${e.value}`
            }, [
              l("option", wO, o(u(g)("library", "Ignore this part")), 1),
              (h(!0), p(K, null, de(e.fields, (y) => (h(), p("option", {
                key: y[0],
                value: y[0]
              }, o(y[1]), 9, kO))), 128))
            ], 8, _O), [
              [nt, e.node.field]
            ])
          ]),
          e.depth < 6 ? (h(), p("button", {
            key: 0,
            class: "button secondary",
            onClick: c
          }, o(u(g)("library", "Split this part")), 1)) : A("", !0),
          e.node.field !== "ignore" ? (h(), p("details", SO, [
            l("summary", null, o(u(g)("library", "Transform this value")), 1),
            l("div", CO, [
              l("label", null, [
                ee(o(u(g)("library", "Remove prefix")), 1),
                ye(l("input", {
                  "onUpdate:modelValue": _[4] || (_[4] = (y) => e.node.prefix = y),
                  maxlength: "100"
                }, null, 512), [
                  [ze, e.node.prefix]
                ])
              ]),
              l("label", null, [
                ee(o(u(g)("library", "Remove suffix")), 1),
                ye(l("input", {
                  "onUpdate:modelValue": _[5] || (_[5] = (y) => e.node.suffix = y),
                  maxlength: "100"
                }, null, 512), [
                  [ze, e.node.suffix]
                ])
              ]),
              l("label", TO, [
                ye(l("input", {
                  "onUpdate:modelValue": _[6] || (_[6] = (y) => e.node.underscores = y),
                  type: "checkbox"
                }, null, 512), [
                  [ua, e.node.underscores]
                ]),
                ee(o(u(g)("library", "Replace underscores with spaces")), 1)
              ]),
              l("label", null, [
                fe(He, {
                  text: u(g)("library", "Affixes must match. Value mapping follows affix removal and underscore replacement.")
                }, {
                  default: Se(() => [
                    ee(o(u(g)("library", "Map exact value")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                ye(l("input", {
                  "onUpdate:modelValue": _[7] || (_[7] = (y) => e.node.mapFrom = y),
                  maxlength: "200"
                }, null, 512), [
                  [ze, e.node.mapFrom]
                ])
              ]),
              l("label", null, [
                ee(o(u(g)("library", "Replacement value")), 1),
                ye(l("input", {
                  "onUpdate:modelValue": _[8] || (_[8] = (y) => e.node.mapTo = y),
                  maxlength: "200"
                }, null, 512), [
                  [ze, e.node.mapTo]
                ])
              ])
            ])
          ])) : A("", !0),
          e.node.field === "author" ? (h(), p("div", AO, [
            l("label", null, [
              fe(He, {
                text: u(g)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + (r.value === "and" ? " " + u(g)("library", "Spaces around the word are required.") : "")
              }, {
                default: Se(() => [
                  ee(o(u(g)("library", "Separate authors by")), 1)
                ]),
                _: 1
              }, 8, ["text"]),
              ye(l("select", {
                "onUpdate:modelValue": _[9] || (_[9] = (y) => r.value = y)
              }, [
                l("option", EO, o(u(g)("library", "None (keep one name)")), 1),
                l("option", $O, o(u(g)("library", "Semicolon (;)")), 1),
                _[11] || (_[11] = l("option", { value: "ampersand" }, "&", -1)),
                l("option", xO, o(u(g)("library", "Word separator")) + ": " + o(Pp.trim()), 1),
                l("option", OO, o(u(g)("library", "Custom separator")), 1)
              ], 512), [
                [nt, r.value]
              ])
            ]),
            r.value === "custom" ? (h(), p("label", NO, [
              ee(o(u(g)("library", "Custom separator")), 1),
              l("input", {
                value: e.node.customAuthorSeparator || "",
                maxlength: "100",
                onInput: s
              }, null, 40, RO)
            ])) : A("", !0),
            l("label", IO, [
              ye(l("input", {
                "onUpdate:modelValue": _[10] || (_[10] = (y) => e.node.reverseName = y),
                type: "checkbox"
              }, null, 512), [
                [ua, e.node.reverseName]
              ]),
              ee(o(u(g)("library", "Convert Surname, Given name to Given name Surname")), 1)
            ])
          ])) : A("", !0)
        ], 64))
      ]);
    };
  }
}, PO = ["aria-busy"], DO = ["disabled"], FO = {
  value: "",
  disabled: ""
}, MO = ["value"], UO = ["disabled"], zO = ["disabled"], jO = ["disabled"], BO = ["disabled"], HO = ["disabled"], VO = {
  key: 0,
  role: "alert"
}, qO = ["disabled"], GO = {
  key: 1,
  role: "status"
}, Dp = {
  __name: "InferencePatterns",
  props: { pattern: { type: String, default: "" }, mode: { type: String, default: "pattern" }, rule: { type: Object, default: null }, requestToken: { type: String, default: "" } },
  emits: ["choose", "choose-rule"],
  setup(e, { emit: t }) {
    const i = e, a = t, n = j(() => i.mode === "guided"), r = j(() => n.value ? JSON.stringify(i.rule) : i.pattern), s = (B) => (B.kind || "pattern") === "guided" ? JSON.stringify(B.rule) : B.pattern, c = /* @__PURE__ */ U([]), d = /* @__PURE__ */ U(""), _ = /* @__PURE__ */ U(""), v = /* @__PURE__ */ U(!1), y = /* @__PURE__ */ U(""), m = /* @__PURE__ */ U(""), k = /* @__PURE__ */ U(""), C = /* @__PURE__ */ U([]), S = j(() => [
      { id: "title", name: g("library", "Title from filename"), pattern: "%folders%/%title%.%extension%", example: "Author/Book title.epub" },
      { id: "by", name: g("library", "Title by Author"), pattern: "%folders%/%title% by %author%.%extension%", example: "books/english_fiction/A Magic Deep and Drowning by Hester Fox.epub" },
      { id: "title-author-year", name: g("library", "Title - Author (Year)"), pattern: "%folders%/%title% - %author% (%year%).%extension%", example: "Adrian Tchaikovsky/Children of Time - Adrian Tchaikovsky (2016).epub" },
      { id: "author-title", name: g("library", "Author - Title"), pattern: "%folders%/%author% - %title%.%extension%", example: "Ada Quill - A Quiet Orchard.epub" },
      { id: "author-folder", name: g("library", "Author folder / Title"), pattern: "%folders%/%author%/%title%.%extension%", example: "Ada Quill/A Quiet Orchard.epub" },
      { id: "series", name: g("library", "Series folder / Number. Title - Author (Year)"), pattern: "%folders%/%series%/%seriesNumber%. %title% - %author% (%year%).%extension%", example: "Arthur C. Clarke/Space Odyssey/01. 2001 A Space Odyssey - Arthur C. Clarke (1968).epub" },
      { id: "series-inline", name: g("library", "Series #Number - Title - Author (Year)"), pattern: "%folders%/%series% #%seriesNumber% - %title% - %author% (%year%).%extension%", example: "Brandon Sanderson/Mistborn #04 - The Alloy of Law - Brandon Sanderson (2011).epub" },
      { id: "language-subject", name: g("library", "books / Language_Subject / Title - Author (Year)"), pattern: "books/%language%_%subject%/%folders%/%title% - %author% (%year%).%extension%", example: "books/english_fiction/Adrian Tchaikovsky/Children of Time - Adrian Tchaikovsky (2016).epub" },
      { id: "language-subject-by", name: g("library", "books / Language_Subject / Title by Author"), pattern: "books/%language%_%subject%/%folders%/%title% by %author%.%extension%", example: "books/english_fiction/A String in Her Tale by Mark Ezra.epub" },
      { id: "series-underscore", name: g("library", "Series folder / Number_Title_Author"), pattern: "%folders%/%series%/%seriesNumber%_%title%_%author%.%extension%", example: "Orchard Notes/2.5_Autumn Appendix_Ada Quill.epub" }
    ]), $ = j(() => [...n.value ? [] : S.value.map((B) => ({ ...B, id: `preset-${B.id}` })).filter((B) => !C.value.includes(B.id)), ...c.value.filter((B) => (B.kind || "pattern") === i.mode)].sort((B, W) => B.name.localeCompare(W.name))), R = j(() => $.value.find((B) => B.id === _.value));
    Ke([r, $], () => {
      k.value = "", (!R.value || s(R.value) !== r.value) && (_.value = $.value.find((B) => s(B) === r.value)?.id || "");
    }, { immediate: !0 });
    const N = j(() => [g("library", "Patterns match paths relative to the selected folder. Adjust literal prefixes such as books/ when needed. Ambiguous names still need review."), R.value?.example ? `${g("library", "Example path")}: ${R.value.example}` : ""].filter(Boolean).join(`

`));
    function P(B) {
      const W = $.value.find((Z) => Z.id === B.target.value);
      W && (_.value = W.id, n.value ? a("choose-rule", JSON.parse(JSON.stringify(W.rule))) : a("choose", W.pattern), m.value = "", k.value = "");
    }
    async function I(B = "", W = null) {
      const Z = await fetch(`${At("/apps/library/api/inference/patterns")}${B}`, {
        method: W === null ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...W === null ? {} : { "Content-Type": "application/json", requesttoken: i.requestToken } },
        ...W === null ? {} : { body: JSON.stringify(W) }
      });
      if (!Z.ok) throw new Error(Z.status === 409 ? g("library", "That name already exists. Choose a different name.") : Z.status === 422 ? g("library", "Check the definition and name. You can save up to 100 rules and patterns.") : g("library", "Could not load or save rules and patterns. Check your connection and try again."));
      return Z.json();
    }
    async function he() {
      v.value = !0, y.value = "";
      try {
        const B = await I();
        c.value = B.patterns, C.value = B.hidden || [];
      } catch (B) {
        y.value = B.message;
      } finally {
        v.value = !1;
      }
    }
    async function Q() {
      v.value = !0, y.value = "", m.value = "";
      try {
        const B = await I("", { name: d.value, ...n.value ? { kind: "guided", rule: i.rule } : { pattern: i.pattern } });
        c.value = [...c.value, B.saved].sort((W, Z) => W.name.localeCompare(Z.name)), _.value = B.saved.id, d.value = "", m.value = n.value ? g("library", "Rule saved to your account.") : g("library", "Pattern saved to your account.");
      } catch (B) {
        y.value = B.message;
      } finally {
        v.value = !1;
      }
    }
    async function x(B) {
      v.value = !0, y.value = "", m.value = "";
      try {
        await I(`/${B}/delete`, {}), c.value = c.value.filter((W) => W.id !== B), C.value = [...C.value, B], _.value = "", k.value = "", m.value = n.value ? g("library", "Saved rule deleted. The current preview is unchanged.") : g("library", "Saved pattern deleted. The current preview is unchanged.");
      } catch (W) {
        y.value = W.message;
      } finally {
        v.value = !1;
      }
    }
    return Ct(he), (B, W) => (h(), p("div", {
      class: "library-inference-templates",
      "aria-busy": v.value ? "true" : "false"
    }, [
      l("label", null, [
        fe(He, {
          text: n.value ? u(g)("library", "Select a rule to restore its assignments, splits, transformations and author options. Folder scope stays unchanged.") : N.value
        }, {
          default: Se(() => [
            ee(o(n.value ? u(g)("library", "Saved rule") : u(g)("library", "Pattern")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        ye(l("select", {
          "onUpdate:modelValue": W[0] || (W[0] = (Z) => _.value = Z),
          disabled: v.value,
          onChange: P
        }, [
          l("option", FO, o(n.value ? u(g)("library", "Custom rule") : u(g)("library", "Custom pattern")), 1),
          (h(!0), p(K, null, de($.value, (Z) => (h(), p("option", {
            key: Z.id,
            value: Z.id
          }, o(Z.name), 9, MO))), 128))
        ], 40, DO), [
          [nt, _.value]
        ])
      ]),
      Ve(B.$slots, "default"),
      l("form", {
        onSubmit: Ce(Q, ["prevent"])
      }, [
        l("label", null, [
          fe(He, {
            text: u(g)("library", "Saved privately to your account. Save changes under a new name; existing definitions are not overwritten. Folder scope and example paths are not saved.")
          }, {
            default: Se(() => [
              ee(o(n.value ? u(g)("library", "Rule name") : u(g)("library", "Pattern name")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ye(l("input", {
            "onUpdate:modelValue": W[1] || (W[1] = (Z) => d.value = Z),
            maxlength: "120",
            required: "",
            disabled: v.value
          }, null, 8, UO), [
            [ze, d.value]
          ])
        ]),
        l("button", {
          class: "button secondary",
          disabled: v.value || !d.value.trim() || (n.value ? !e.rule : !e.pattern.trim())
        }, o(n.value ? u(g)("library", "Save current rule as new") : u(g)("library", "Save current pattern as new")), 9, zO),
        R.value && !k.value ? (h(), p("button", {
          key: 0,
          type: "button",
          class: "button secondary",
          disabled: v.value,
          onClick: W[2] || (W[2] = (Z) => k.value = R.value.id)
        }, o(n.value ? u(g)("library", "Delete rule") : u(g)("library", "Delete pattern")), 9, jO)) : A("", !0),
        k.value ? (h(), p(K, { key: 1 }, [
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: W[3] || (W[3] = (Z) => x(k.value))
          }, o(u(g)("library", "Confirm deletion")), 9, BO),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: W[4] || (W[4] = (Z) => k.value = "")
          }, o(u(g)("library", "Cancel")), 9, HO)
        ], 64)) : A("", !0)
      ], 32),
      y.value ? (h(), p("p", VO, [
        ee(o(y.value) + " ", 1),
        l("button", {
          class: "button secondary",
          disabled: v.value,
          onClick: he
        }, o(n.value ? u(g)("library", "Reload saved rules") : u(g)("library", "Reload saved patterns")), 9, qO)
      ])) : A("", !0),
      m.value ? (h(), p("p", GO, o(m.value), 1)) : A("", !0)
    ], 8, PO));
  }
}, KO = ["aria-busy"], WO = ["disabled"], YO = {
  value: "",
  disabled: ""
}, ZO = ["value"], XO = { class: "library-inference-path" }, JO = { class: "library-inference-checkbox" }, QO = ["disabled"], eN = ["disabled"], tN = {
  key: 0,
  role: "status"
}, iN = {
  key: 1,
  role: "alert"
}, aN = ["disabled"], nN = { key: 2 }, rN = { class: "library-inference-folder-list" }, lN = {
  key: 0,
  role: "status"
}, sN = ["disabled", "onClick"], oN = ["disabled", "onClick"], uN = ["disabled"], cN = {
  __name: "InferenceFolderRules",
  props: { rootId: { type: String, default: "" }, folder: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, scopePending: Boolean },
  emits: ["loaded"],
  setup(e, { emit: t }) {
    const i = e, a = t, n = /* @__PURE__ */ U([]), r = /* @__PURE__ */ U([]), s = /* @__PURE__ */ U(""), c = /* @__PURE__ */ U(!0), d = /* @__PURE__ */ U(!1), _ = /* @__PURE__ */ U(!1), v = /* @__PURE__ */ U(""), y = /* @__PURE__ */ U(""), m = j(() => i.disabled || d.value || _.value);
    let k = 0;
    async function C(N, P) {
      const I = await fetch(At(`/apps/library/api/inference/${N}`), {
        method: P === void 0 ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...P === void 0 ? {} : { "Content-Type": "application/json", requesttoken: i.requestToken } },
        ...P === void 0 ? {} : { body: JSON.stringify(P) }
      });
      if (!I.ok) throw new Error(I.status === 409 ? g("library", "This rule is already assigned to this folder.") : I.status === 422 ? g("library", "Check the folder and rule. You can save up to 100 folder assignments.") : I.status === 404 ? g("library", "The folder or saved rule is unavailable. Reload and check your access.") : g("library", "Could not load or save folder rules. Try again."));
      return I.json();
    }
    async function S() {
      const N = ++k, P = i.rootId;
      if (r.value = [], y.value = "", v.value = "", a("loaded", { rootId: P, assignments: [] }), !!P) {
        d.value = !0;
        try {
          const [I, he] = await Promise.all([C("patterns"), C(`folders?rootId=${encodeURIComponent(P)}`)]);
          if (N !== k) return;
          n.value = I.patterns, r.value = he.assignments, n.value.some((Q) => Q.id === s.value) || (s.value = ""), a("loaded", { rootId: P, assignments: he.assignments });
        } catch (I) {
          N === k && (v.value = I.message);
        } finally {
          N === k && (d.value = !1);
        }
      }
    }
    async function $() {
      if (!(m.value || i.scopePending || !s.value)) {
        _.value = !0, v.value = "";
        try {
          await C("folders", { rootId: i.rootId, folder: i.folder, recursive: c.value, definitionId: s.value }), await S();
        } catch (N) {
          v.value = N.message;
        } finally {
          _.value = !1;
        }
      }
    }
    async function R(N) {
      if (!m.value) {
        _.value = !0, v.value = "";
        try {
          await C(`folders/${N}/delete`, {}), await S();
        } catch (P) {
          v.value = P.message;
        } finally {
          _.value = !1;
        }
      }
    }
    return Ke(() => i.rootId, S, { immediate: !0 }), Ci(() => {
      k++;
    }), (N, P) => (h(), p("div", {
      class: "library-inference-folder-rules",
      "aria-busy": m.value ? "true" : "false"
    }, [
      l("form", {
        onSubmit: Ce($, ["prevent"])
      }, [
        l("label", null, [
          fe(He, {
            text: u(g)("library", "Save a guided rule or advanced pattern first. Assignments keep a fixed copy, even if the saved definition is later deleted. Rules only generate previews; they do not run on scans or change books.")
          }, {
            default: Se(() => [
              ee(o(u(g)("library", "Saved rule or pattern")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ye(l("select", {
            "onUpdate:modelValue": P[0] || (P[0] = (I) => s.value = I),
            disabled: m.value
          }, [
            l("option", YO, o(u(g)("library", "Choose a saved definition")), 1),
            (h(!0), p(K, null, de(n.value, (I) => (h(), p("option", {
              key: I.id,
              value: I.id
            }, o(I.name), 9, ZO))), 128))
          ], 8, WO), [
            [nt, s.value]
          ])
        ]),
        l("p", XO, [
          ee(o(u(g)("library", "Assignment folder")) + ": ", 1),
          l("bdi", null, o(e.folder || "/"), 1)
        ]),
        l("label", JO, [
          ye(l("input", {
            "onUpdate:modelValue": P[1] || (P[1] = (I) => c.value = I),
            type: "checkbox",
            disabled: m.value
          }, null, 8, QO), [
            [ua, c.value]
          ]),
          ee(o(u(g)("library", "Use in subfolders")), 1)
        ]),
        l("button", {
          class: "button primary",
          disabled: m.value || e.scopePending || !s.value || !e.rootId
        }, o(u(g)("library", "Assign to this folder")), 9, eN)
      ], 32),
      e.scopePending ? (h(), p("p", tN, o(u(g)("library", "Load the folder before assigning a rule.")), 1)) : A("", !0),
      v.value ? (h(), p("p", iN, o(v.value), 1)) : A("", !0),
      l("button", {
        class: "button secondary",
        disabled: m.value,
        onClick: S
      }, o(u(g)("library", "Reload folder rules")), 9, aN),
      l("h3", null, [
        fe(He, {
          text: u(g)("library", "Rules match paths relative to their assigned folder. A deeper matching folder wins; if it does not match, an ancestor can be used. Equally specific conflicting rules require review. All assignments for this root are listed here.")
        }, {
          default: Se(() => [
            ee(o(u(g)("library", "Rules for this root")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      !r.value.length && !d.value ? (h(), p("p", nN, o(u(g)("library", "No folder rules assigned yet.")), 1)) : A("", !0),
      l("ul", rN, [
        (h(!0), p(K, null, de(r.value, (I) => (h(), p("li", {
          key: I.id,
          class: "library-inference-folder-entry"
        }, [
          l("strong", null, o(I.definition.name), 1),
          l("bdi", null, o(I.folder || "/"), 1),
          l("small", null, o(I.recursive ? u(g)("library", "Includes subfolders") : u(g)("library", "Direct children only")), 1),
          I.available ? A("", !0) : (h(), p("p", lN, o(u(g)("library", "Folder unavailable or replaced. Remove this assignment and assign again after checking the folder.")), 1)),
          y.value !== I.id ? (h(), p("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: m.value,
            onClick: (he) => y.value = I.id
          }, o(u(g)("library", "Remove assignment")), 9, sN)) : (h(), p(K, { key: 2 }, [
            l("button", {
              class: "button secondary",
              disabled: m.value,
              onClick: (he) => R(I.id)
            }, o(u(g)("library", "Confirm removal")), 9, oN),
            l("button", {
              class: "button secondary",
              disabled: m.value,
              onClick: P[2] || (P[2] = (he) => y.value = "")
            }, o(u(g)("library", "Cancel")), 9, uN)
          ], 64))
        ]))), 128))
      ])
    ], 8, KO));
  }
};
function dN(e, t, i, a = {}) {
  const n = [t, e].filter(Boolean).join("/"), r = i.filter((c) => c.available && (!c.folder || n.startsWith(`${c.folder}/`))).map((c) => ({ ...c, relative: c.folder ? n.slice(c.folder.length + 1) : n, depth: c.folder ? c.folder.split("/").length : 0 })).filter((c) => c.recursive || !c.relative.includes("/")).sort((c, d) => d.depth - c.depth || c.id.localeCompare(d.id)), s = [];
  for (const c of [...new Set(r.map((d) => d.depth))]) {
    const d = [];
    for (const m of r.filter((k) => k.depth === c)) {
      const k = m.definition, C = k.kind === "guided" ? tu(m.relative, k.rule, a) : gg(m.relative, k.pattern, a), S = { id: m.id, name: k.name, folder: m.folder };
      s.push({ ...S, status: C.status }), ["ready", "conflict", "unchanged"].includes(C.status) && C.changes.length && d.push({ result: C, source: S });
    }
    if (s.some((m) => m.status === "ambiguous")) return { status: "ambiguous", changes: [], conflicts: [], attempts: s };
    if (!d.length) continue;
    const _ = /* @__PURE__ */ new Map();
    for (const { result: m, source: k } of d) for (const C of m.changes) {
      const S = _.get(C.field) || /* @__PURE__ */ new Map(), $ = JSON.stringify(C.values || [C.value]), R = S.get($);
      R ? R.sources.push(k) : S.set($, { ...C, sources: [k] }), _.set(C.field, S);
    }
    const v = [], y = [];
    for (const [m, k] of _)
      k.size > 1 ? y.push({ field: m, proposals: [...k.values()] }) : v.push([...k.values()][0]);
    return { status: y.length ? "ambiguous" : v.some((m) => m.status === "conflict") ? "conflict" : v.some((m) => m.status === "ready") ? "ready" : "unchanged", changes: v, conflicts: y, attempts: s };
  }
  return { status: "unmatched", changes: [], conflicts: [], attempts: s };
}
const Fp = /* @__PURE__ */ new Set(["english", "en", "german", "deutsch", "de", "french", "français", "fr", "arabic", "ar"]), wg = /^[\p{L}\p{M}][\p{L}\p{M} .’'\-]*$/u;
function Mp(e) {
  const t = e.trim().split(/\s+/);
  return e.length <= 120 && t.length >= 2 && t.length <= 7 && wg.test(e);
}
function _l(e) {
  const t = e.split(",").map((i) => i.trim());
  return t.length === 2 && t.every((i) => i && wg.test(i)) && e.length <= 120;
}
function Sr(e) {
  const t = e.split(",").map((i) => i.trim());
  return (_l(e) ? `${t[1]} ${t[0]}` : e).trim().replace(/\s+/g, " ").toLocaleLowerCase("en");
}
function si(e, t = {}) {
  return { ...Cu(e), ...t };
}
function dn(e, t, ...i) {
  return { ...Cu(), split: { delimiter: e, occurrence: t, children: i } };
}
function fN(e, t = []) {
  if (typeof e != "string" || !e || e.length > 2e3 || is(e).length > 64) return [];
  const i = is(e), a = i.length - 1, n = i[a], r = i.slice(0, -1), s = eu(e), c = [], d = [];
  let _ = n, v = (Z) => Z, y = (Z) => Z, m = "", k = si("title"), C = !1;
  const S = /^(.*\S) \(((?:18|19|20)\d{2})\)$/.exec(_), $ = !S && /^(.*\S) ((?:18|19|20)\d{2})$/.exec(_);
  S ? (_ = S[1], v = (Z) => dn(" (", "last", Z, si("year", { suffix: ")" })), c.push("year-parentheses")) : $ && (_ = $[1], v = (Z) => dn(" ", "last", Z, si("year")), c.push("year-trailing"), d.push("year-may-be-title"));
  const R = /^(.*\S) by (.+)$/.exec(_), N = /^(.*\S) - (.+)$/.exec(_), P = R || N, I = !R && N && (_l(N[1]) || Mp(N[1]) && r.some((Z) => Sr(Z) === Sr(N[1]))), he = /^.+ #\d{1,3}(?:\.\d+)? - .+$/.test(_) && _.split(" - ").length === 2;
  I ? (m = N[1], _ = N[2], y = (Z) => dn(" - ", "first", si("author"), Z), c.push("author-first"), d.push("author-needs-review")) : P && !he && (Mp(P[2]) || _l(P[2])) && (m = P[2], _ = P[1], y = (Z) => dn(R ? " by " : " - ", "last", Z, si("author")), c.push(R ? "author-by" : "author-dash"), r.some((Z) => Sr(Z) === Sr(m)) ? c.push("author-folder-agrees") : d.push("author-needs-review"));
  const Q = /^(.*\S) #(\d{1,3}(?:\.\d+)?) - (.+)$/.exec(_), x = /^(\d{1,3}(?:\.\d+)?)\. (.+)$/.exec(_);
  if (Q)
    k = dn(" #", "first", si("series"), dn(" - ", "first", si("seriesNumber"), si("title"))), C = !0, c.push("series-inline");
  else if (x && r.length) {
    const Z = r.at(-1);
    !_l(Z) && !(m && Sr(Z) === Sr(m)) && !Fp.has(Z.toLowerCase()) && !Z.includes("_") && (k = dn(". ", "first", si("seriesNumber"), si("title")), s.parts[a - 1] = si("series"), C = !0, c.push("series-folder"), d.push("series-needs-review"));
  }
  if (s.parts[a] = v(y(k)), !m) {
    const Z = C ? a - 2 : a - 1;
    Z >= 0 && _l(i[Z]) && (s.parts[Z] = si("author"), c.push("author-comma"), d.push("author-needs-review"));
  }
  for (let Z = r.length - 1; Z >= 0; Z--) {
    if (s.parts[Z].field !== "ignore") continue;
    const le = r[Z], H = le.indexOf("_"), Y = H < 0 ? le : le.slice(0, H);
    if (Fp.has(Y.toLowerCase())) {
      s.parts[Z] = H < 0 ? si("language") : dn("_", "first", si("language"), si("genre", { underscores: !0 })), c.push(H < 0 ? "language-folder" : "language-genre-folder");
      break;
    }
  }
  const B = [], W = (Z, le, H, Y) => {
    const L = tu(e, le);
    if (!["ready", "conflict", "unchanged"].includes(L.status)) return;
    const G = t.slice(0, 40).map((ae) => typeof ae == "string" ? ae : ae.path).filter((ae) => typeof ae == "string"), X = G.filter((ae) => ["ready", "conflict", "unchanged"].includes(tu(ae, le).status)).length;
    B.push({ id: Z, rule: le, clues: H, warnings: [...new Set(Y)], preview: L.changes, matched: X, total: G.length });
  };
  return c.length && W("detected", s, c, d), W("filename", eu(e), ["filename-title"], /(?:^|\D)(?:18|19|20)\d{2}(?:\D|$)/.test(n) ? ["year-may-be-title"] : []), B;
}
const hN = { class: "library-inference-suggestions" }, pN = ["disabled"], vN = {
  value: "",
  disabled: ""
}, bN = ["value"], gN = {
  key: 0,
  "aria-live": "polite"
}, mN = {
  __name: "InferenceSuggestions",
  props: { path: { type: String, default: "" }, sample: { type: Array, default: () => [] }, rule: { type: Object, default: null } },
  emits: ["choose"],
  setup(e, { emit: t }) {
    const i = e, a = t, n = /* @__PURE__ */ U(""), r = j(() => fN(i.path, i.sample)), s = j(() => r.value.find((v) => v.id === n.value)), c = j(() => ({
      "year-parentheses": g("library", "Trailing year in parentheses"),
      "year-trailing": g("library", "Possible trailing year"),
      "author-by": g("library", "Title by Author"),
      "author-dash": g("library", "Title - Author"),
      "author-first": g("library", "Author - Title"),
      "author-folder-agrees": g("library", "Author matches a folder name"),
      "author-comma": g("library", "Possible Surname, Given name folder"),
      "series-inline": g("library", "Series #Number - Title"),
      "series-folder": g("library", "Series folder with a numbered title"),
      "language-folder": g("library", "Recognized language folder"),
      "language-genre-folder": g("library", "Language and genre in one folder"),
      "filename-title": g("library", "Title from filename")
    })), d = j(() => ({
      "year-may-be-title": g("library", "A year-like number may belong to the title. Check before applying."),
      "author-needs-review": g("library", "A name-shaped phrase may be a title or several people. Check the author; commas are preserved."),
      "series-needs-review": g("library", "Check that the parent folder names a series and the number is its position.")
    }));
    Ke(() => i.path, () => {
      n.value = "";
    }), Ke(() => JSON.stringify(i.rule), (v) => {
      s.value && JSON.stringify(s.value.rule) !== v && (n.value = "");
    });
    function _(v) {
      n.value = v.target.value, s.value && a("choose", JSON.parse(JSON.stringify(s.value.rule)));
    }
    return (v, y) => (h(), p("div", hN, [
      l("label", null, [
        fe(He, {
          text: u(g)("library", "Suggest editable assignments from the selected example. Check the live preview and other books before applying. Matching counts describe this page and its structure, not verified metadata.") + (s.value ? `

` + s.value.clues.map((m) => c.value[m]).join(`
`) : "")
        }, {
          default: Se(() => [
            ee(o(u(g)("library", "Suggest fields")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        ye(l("select", {
          "onUpdate:modelValue": y[0] || (y[0] = (m) => n.value = m),
          disabled: !r.value.length,
          onChange: _
        }, [
          l("option", vN, o(u(g)("library", "Choose a suggestion")), 1),
          (h(!0), p(K, null, de(r.value, (m) => (h(), p("option", {
            key: m.id,
            value: m.id
          }, o(m.id === "filename" ? u(g)("library", "Title from filename") : u(g)("library", "Suggested assignments")), 9, bN))), 128))
        ], 40, pN), [
          [nt, n.value]
        ])
      ]),
      s.value ? (h(), p("div", gN, [
        l("p", null, o(u(g)("library", "{matched} of {total} paths on this page match this structure.", { matched: s.value.matched, total: s.value.total })), 1),
        (h(!0), p(K, null, de(s.value.warnings, (m) => (h(), p("p", {
          key: m,
          class: "library-inference-suggestion-warning"
        }, o(d.value[m]), 1))), 128))
      ])) : A("", !0)
    ]));
  }
}, yN = ["aria-label", "aria-busy"], _N = {
  key: 0,
  role: "alert"
}, wN = {
  key: 1,
  role: "status"
}, kN = { class: "library-inference-step" }, SN = ["disabled"], CN = ["value"], TN = ["disabled", "placeholder"], AN = { class: "library-inference-checkbox" }, EN = ["disabled"], $N = ["disabled"], xN = {
  key: 0,
  class: "library-inference-path"
}, ON = ["aria-label"], NN = ["disabled"], RN = ["disabled", "onClick"], IN = {
  key: 2,
  class: "library-inference-step"
}, LN = { class: "library-inference-editor" }, PN = { class: "library-inference-controls" }, DN = { class: "library-inference-scope" }, FN = ["value"], MN = ["open"], UN = { value: "guided" }, zN = { value: "pattern" }, jN = { value: "folders" }, BN = {
  key: 0,
  role: "status"
}, HN = { class: "library-inference-checkbox" }, VN = {
  key: 2,
  class: "library-inference-pattern",
  open: ""
}, qN = ["aria-label"], GN = ["title"], KN = {
  key: 0,
  "aria-live": "polite",
  "aria-atomic": "true"
}, WN = { class: "library-inference-live-status" }, YN = { key: 1 }, ZN = {
  key: 0,
  class: "library-inference-author-chips"
}, XN = {
  key: 1,
  dir: "auto"
}, JN = { dir: "auto" }, QN = { key: 2 }, eR = { dir: "auto" }, tR = { key: 3 }, iR = { key: 2 }, aR = { key: 1 }, nR = {
  class: "library-inference-path",
  dir: "ltr"
}, rR = { class: "library-inference-step" }, lR = { value: "all" }, sR = ["value"], oR = { key: 0 }, uR = { class: "library-inference-path" }, cR = {
  key: 1,
  class: "library-inference-table-scroll"
}, dR = { key: 2 }, fR = ["aria-label"], hR = ["disabled"], pR = ["disabled"], vR = {
  __name: "PathInference",
  props: { requestToken: { type: String, default: "" } },
  setup(e) {
    const t = /* @__PURE__ */ U([]), i = /* @__PURE__ */ U(""), a = /* @__PURE__ */ U(""), n = /* @__PURE__ */ U(!0), r = /* @__PURE__ */ U([]), s = /* @__PURE__ */ U(1), c = /* @__PURE__ */ U(!1), d = /* @__PURE__ */ U(!1), _ = /* @__PURE__ */ U(""), v = /* @__PURE__ */ U(""), y = /* @__PURE__ */ U(""), m = /* @__PURE__ */ U(""), k = /* @__PURE__ */ U(""), C = /* @__PURE__ */ U([]), S = /* @__PURE__ */ U(null), $ = /* @__PURE__ */ U("guided"), R = /* @__PURE__ */ U(0), N = /* @__PURE__ */ U("%folders%/%title%.%extension%"), P = /* @__PURE__ */ U("all"), I = /* @__PURE__ */ U(!0);
    let he = 0;
    const Q = j(() => [
      ["title", g("library", "Title")],
      ["subtitle", g("library", "Subtitle")],
      ["author", g("library", "Creators")],
      ["series", g("library", "Series")],
      ["seriesNumber", g("library", "Part in series")],
      ["language", g("library", "Language")],
      ["genre", g("library", "Genre")],
      ["publisher", g("library", "Publisher")],
      ["subject", g("library", "Subjects")],
      ["year", g("library", "Publication year")]
    ]), x = j(() => Object.fromEntries(Q.value)), B = j(() => ({
      ready: g("library", "Empty field suggestions"),
      conflict: g("library", "Existing values need review"),
      unmatched: g("library", "Unmatched paths"),
      ambiguous: g("library", "Ambiguous matches"),
      invalid: g("library", "Invalid pattern or value"),
      unchanged: g("library", "No changes")
    })), W = j(() => r.value.map((we) => ({ ...we, ...$.value === "folders" ? dN(we.path, k.value, C.value, we.current) : $.value === "guided" ? tu(we.path, S.value, we.current) : gg(we.path, N.value, we.current) }))), Z = j(() => W.value.find((we) => we.path === y.value)), le = j(() => W.value.filter((we) => P.value === "all" || we.status === P.value)), H = j(() => [...new Set(r.value.filter((we) => we.path.includes("/")).map((we) => we.path.split("/")[0]))]);
    function Y(we) {
      a.value = [a.value.replace(/\/$/, ""), we].filter(Boolean).join("/"), Me();
    }
    function L() {
      a.value = a.value.replace(/\/$/, "").split("/").slice(0, -1).join("/"), Me();
    }
    const G = j(() => W.value.reduce((we, be) => (we[be.status] = (we[be.status] || 0) + 1, we), {})), X = j(() => i.value !== m.value || a.value.replace(/^\/+|\/+$/g, "") !== k.value), ae = j(() => is(y.value));
    function J() {
      !S.value && y.value && (S.value = eu(y.value));
    }
    function ve() {
      S.value = eu(y.value), R.value++, $.value = "guided";
    }
    function Ae(we) {
      S.value = we, R.value++, $.value = "guided";
    }
    function Le(we) {
      Ae(we), I.value = !1;
    }
    function Oe(we) {
      N.value = we, $.value = "pattern";
    }
    async function Me(we = 1) {
      const be = ++he;
      d.value = !0, _.value = "", r.value = [];
      try {
        const V = new URLSearchParams();
        i.value && (V.set("rootId", i.value), V.set("folder", a.value), V.set("recursive", n.value ? "1" : "0"), V.set("page", String(we)));
        const ne = await fetch(`${At("/apps/library/api/inference/sample")}?${V}`, { credentials: "same-origin", cache: "no-store" });
        if (!ne.ok) throw new Error(g("library", "Could not load this folder. Check its path and your access."));
        const Ue = await ne.json();
        if (be !== he) return;
        if (t.value = Ue.roots, !i.value && (i.value = String(Ue.roots[0]?.id || ""), i.value))
          return Me();
        m.value !== i.value && (C.value = []), m.value = i.value;
        const ie = Ue.roots.find((T) => String(T.id) === i.value)?.path.replace(/\/$/, "") || "";
        k.value = Ue.scope.slice(ie.length).replace(/^\//, ""), r.value = Ue.items || [], s.value = Ue.page || 1, c.value = !!Ue.hasNext, v.value = Ue.scope || "", y.value = r.value[0]?.path || "", J();
      } catch (V) {
        be === he && (_.value = V.message);
      } finally {
        be === he && (d.value = !1);
      }
    }
    function Xe(we) {
      we.rootId === m.value && (C.value = we.assignments);
    }
    function ct() {
      a.value = "", Me();
    }
    return Ct(() => Me()), (we, be) => (h(), p("section", {
      class: "library-inference",
      "aria-label": u(g)("library", "Extract metadata from paths"),
      "aria-busy": d.value ? "true" : "false"
    }, [
      l("h1", null, [
        fe(He, {
          text: u(g)("library", "Preview a naming rule, select fields and review before applying. Source files are never changed.")
        }, {
          default: Se(() => [
            ee(o(u(g)("library", "Extract metadata from paths")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      _.value ? (h(), p("p", _N, o(_.value), 1)) : A("", !0),
      d.value ? (h(), p("p", wN, o(u(g)("library", "Loading or saving…")), 1)) : A("", !0),
      l("section", kN, [
        l("h2", null, o(u(g)("library", "1. Choose a folder")), 1),
        l("form", {
          class: "library-inference-scope",
          onSubmit: be[3] || (be[3] = Ce((V) => Me(), ["prevent"]))
        }, [
          l("label", null, [
            fe(He, {
              text: u(g)("library", "Up to 40 accessible indexed books per page. Counts below describe this sample, not the entire folder.")
            }, {
              default: Se(() => [
                ee(o(u(g)("library", "Library root")), 1)
              ]),
              _: 1
            }, 8, ["text"]),
            ye(l("select", {
              "onUpdate:modelValue": be[0] || (be[0] = (V) => i.value = V),
              disabled: d.value || !t.value.length,
              onChange: ct
            }, [
              (h(!0), p(K, null, de(t.value, (V) => (h(), p("option", {
                key: V.id,
                value: String(V.id)
              }, o(V.label), 9, CN))), 128))
            ], 40, SN), [
              [nt, i.value]
            ])
          ]),
          l("label", null, [
            ee(o(u(g)("library", "Subfolder relative to this root")), 1),
            ye(l("input", {
              "onUpdate:modelValue": be[1] || (be[1] = (V) => a.value = V),
              type: "text",
              disabled: d.value,
              placeholder: u(g)("library", "Leave empty for the whole root")
            }, null, 8, TN), [
              [ze, a.value]
            ])
          ]),
          l("label", AN, [
            ye(l("input", {
              "onUpdate:modelValue": be[2] || (be[2] = (V) => n.value = V),
              type: "checkbox",
              disabled: d.value
            }, null, 8, EN), [
              [ua, n.value]
            ]),
            ee(o(u(g)("library", "Include subfolders")), 1)
          ]),
          l("button", {
            class: "button primary",
            disabled: d.value || !i.value
          }, o(u(g)("library", "Load sample")), 9, $N)
        ], 32),
        v.value ? (h(), p("p", xN, o(v.value), 1)) : A("", !0),
        l("div", {
          class: "library-inference-presets",
          "aria-label": u(g)("library", "Folders in this sample")
        }, [
          a.value ? (h(), p("button", {
            key: 0,
            class: "button secondary",
            disabled: d.value,
            onClick: L
          }, o(u(g)("library", "Parent folder")), 9, NN)) : A("", !0),
          (h(!0), p(K, null, de(H.value, (V) => (h(), p("button", {
            key: V,
            class: "button secondary",
            disabled: d.value,
            onClick: (ne) => Y(V)
          }, o(V) + "/", 9, RN))), 128))
        ], 8, ON)
      ]),
      r.value.length ? (h(), p("section", IN, [
        l("h2", null, o(u(g)("library", "2. Describe the structure")), 1),
        l("div", LN, [
          l("div", PN, [
            l("div", DN, [
              l("label", null, [
                fe(He, {
                  text: u(g)("library", "Assignments stay the same when you select another example. Reset them to use a different folder structure.")
                }, {
                  default: Se(() => [
                    ee(o(u(g)("library", "Example path")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                ye(l("select", {
                  "onUpdate:modelValue": be[4] || (be[4] = (V) => y.value = V),
                  onChange: be[5] || (be[5] = (V) => J())
                }, [
                  (h(!0), p(K, null, de(r.value, (V) => (h(), p("option", {
                    key: V.id,
                    value: V.path
                  }, o(V.path), 9, FN))), 128))
                ], 544), [
                  [nt, y.value]
                ])
              ])
            ]),
            fe(mN, {
              path: y.value,
              sample: r.value,
              rule: $.value === "guided" ? S.value : null,
              onChoose: Le
            }, null, 8, ["path", "sample", "rule"]),
            l("details", {
              class: "library-inference-customize",
              open: I.value,
              onToggle: be[9] || (be[9] = (V) => I.value = V.target.open)
            }, [
              l("summary", null, o(u(g)("library", "Edit pattern")), 1),
              l("label", null, [
                ee(o(u(g)("library", "Rule editor")), 1),
                ye(l("select", {
                  "onUpdate:modelValue": be[6] || (be[6] = (V) => $.value = V)
                }, [
                  l("option", UN, o(u(g)("library", "Guided assignments")), 1),
                  l("option", zN, o(u(g)("library", "Advanced pattern")), 1),
                  l("option", jN, o(u(g)("library", "Folder rules")), 1)
                ], 512), [
                  [nt, $.value]
                ])
              ]),
              $.value === "folders" ? (h(), De(cN, {
                key: 0,
                "root-id": m.value,
                folder: k.value,
                "request-token": e.requestToken,
                disabled: d.value,
                "scope-pending": X.value,
                onLoaded: Xe
              }, null, 8, ["root-id", "folder", "request-token", "disabled", "scope-pending"])) : A("", !0),
              $.value === "guided" && S.value ? (h(), p(K, { key: 1 }, [
                fe(Dp, {
                  mode: "guided",
                  rule: S.value,
                  "request-token": e.requestToken,
                  onChooseRule: Ae
                }, null, 8, ["rule", "request-token"]),
                l("button", {
                  class: "button secondary",
                  onClick: ve
                }, o(u(g)("library", "Reset assignments from this example")), 1),
                ae.value.length !== S.value.parts.length ? (h(), p("p", BN, o(u(g)("library", "This example has a different folder depth and does not match the rule.")), 1)) : A("", !0),
                (h(!0), p(K, null, de(S.value.parts, (V, ne) => (h(), p("div", {
                  key: `${R.value}-${ne}`
                }, [
                  l("h3", null, o(ne === S.value.parts.length - 1 ? u(g)("library", "Filename") : u(g)("library", "Folder")) + " " + o(ne + 1), 1),
                  fe(LO, {
                    node: V,
                    value: ae.value[ne] || "",
                    fields: Q.value
                  }, null, 8, ["node", "value", "fields"])
                ]))), 128)),
                l("label", HN, [
                  ye(l("input", {
                    "onUpdate:modelValue": be[7] || (be[7] = (V) => S.value.combineAuthors = V),
                    type: "checkbox"
                  }, null, 512), [
                    [ua, S.value.combineAuthors]
                  ]),
                  fe(He, {
                    text: u(g)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + " " + u(g)("library", "Each author is stored separately and can be used to filter the catalogue.")
                  }, {
                    default: Se(() => [
                      ee(o(u(g)("library", "Combine authors from multiple parts")), 1)
                    ]),
                    _: 1
                  }, 8, ["text"])
                ])
              ], 64)) : A("", !0),
              $.value === "pattern" ? (h(), p("details", VN, [
                l("summary", null, o(u(g)("library", "Pattern and presets")), 1),
                fe(Dp, {
                  pattern: N.value,
                  "request-token": e.requestToken,
                  onChoose: Oe
                }, {
                  default: Se(() => [
                    l("label", null, [
                      fe(He, {
                        text: u(g)("library", "Placeholders capture text. Separators must match exactly. %folder% ignores one folder; %folders%/ ignores any folder depth; %ignore% ignores one filename part.") + `

` + Q.value.map((V) => `%${V[0]}%`).join(" · ")
                      }, {
                        default: Se(() => [
                          ee(o(u(g)("library", "Advanced pattern")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ye(l("input", {
                        "onUpdate:modelValue": be[8] || (be[8] = (V) => N.value = V),
                        maxlength: "1000",
                        spellcheck: "false",
                        dir: "ltr"
                      }, null, 512), [
                        [ze, N.value]
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["pattern", "request-token"])
              ])) : A("", !0)
            ], 40, MN)
          ]),
          l("aside", {
            class: "library-inference-live",
            "aria-label": u(g)("library", "Live preview")
          }, [
            l("h3", null, o(u(g)("library", "Live preview")), 1),
            l("p", {
              class: "library-inference-live-path",
              title: y.value
            }, o(y.value), 9, GN),
            Z.value ? (h(), p("div", KN, [
              l("p", WN, o(B.value[Z.value.status]), 1),
              $.value === "folders" ? (h(), De(vd, {
                key: 0,
                result: Z.value,
                labels: x.value,
                statuses: B.value
              }, null, 8, ["result", "labels", "statuses"])) : A("", !0),
              Z.value.changes.length ? (h(), p("dl", YN, [
                (h(!0), p(K, null, de(Z.value.changes, (V) => (h(), p("div", {
                  key: V.field,
                  class: Ee(["library-inference-live-field", `library-inference-live-field--${V.status}`])
                }, [
                  l("dt", null, o(x.value[V.field]), 1),
                  l("dd", null, [
                    V.field === "author" && V.values ? (h(), p("span", ZN, [
                      (h(!0), p(K, null, de(V.values, (ne) => (h(), p("strong", {
                        key: ne,
                        dir: "auto"
                      }, o(ne), 1))), 128))
                    ])) : (h(), p("strong", XN, o(V.value || "—"), 1)),
                    l("small", null, [
                      ee(o(u(g)("library", "Current value")) + ": ", 1),
                      l("span", JN, o(V.before || "—"), 1)
                    ]),
                    V.raw !== V.value ? (h(), p("small", QN, [
                      ee(o(u(g)("library", "Source text")) + ": ", 1),
                      l("span", eR, o(V.raw), 1)
                    ])) : A("", !0),
                    l("small", null, o(B.value[V.status]), 1),
                    V.sources ? (h(), p("small", tR, o(u(g)("library", "Matched rule")) + ": " + o(V.sources.map((ne) => ne.name).join(", ")), 1)) : A("", !0)
                  ])
                ], 2))), 128))
              ])) : Z.value.conflicts?.length ? A("", !0) : (h(), p("p", iR, o(u(g)("library", "No fields extracted from this example. Check the rule, separators and transformations.")), 1))
            ])) : A("", !0),
            $.value === "pattern" ? (h(), p("details", aR, [
              l("summary", null, o(u(g)("library", "Active pattern")), 1),
              l("code", nR, o(N.value), 1)
            ])) : A("", !0)
          ], 8, qN)
        ])
      ])) : A("", !0),
      l("section", rR, [
        l("h2", null, o(u(g)("library", "3. Review the sample")), 1),
        l("label", null, [
          fe(He, {
            text: u(g)("library", "Fill empty fields first. Existing values are flagged for review. No changes are applied in this preview.")
          }, {
            default: Se(() => [
              ee(o(u(g)("library", "Show results")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ye(l("select", {
            "onUpdate:modelValue": be[10] || (be[10] = (V) => P.value = V)
          }, [
            l("option", lR, o(u(g)("library", "All")) + " (" + o(W.value.length) + ")", 1),
            (h(!0), p(K, null, de(B.value, (V, ne) => (h(), p("option", {
              key: ne,
              value: ne
            }, o(V) + " (" + o(G.value[ne] || 0) + ")", 9, sR))), 128))
          ], 512), [
            [nt, P.value]
          ])
        ]),
        !le.value.length && !d.value ? (h(), p("p", oR, o(u(g)("library", "No sample results here. Try another folder, page or result filter.")), 1)) : A("", !0),
        (h(!0), p(K, null, de(le.value, (V) => (h(), p("details", {
          key: V.id,
          class: "library-inference-result"
        }, [
          l("summary", null, [
            l("span", uR, o(V.path), 1),
            l("strong", null, o(B.value[V.status]), 1)
          ]),
          $.value === "folders" ? (h(), De(vd, {
            key: 0,
            result: V,
            labels: x.value,
            statuses: B.value
          }, null, 8, ["result", "labels", "statuses"])) : A("", !0),
          V.changes.length ? (h(), p("div", cR, [
            l("table", null, [
              l("thead", null, [
                l("tr", null, [
                  l("th", null, o(u(g)("library", "Field")), 1),
                  l("th", null, o(u(g)("library", "Current value")), 1),
                  l("th", null, o(u(g)("library", "Proposed value")), 1),
                  l("th", null, o(u(g)("library", "Source text")), 1)
                ])
              ]),
              l("tbody", null, [
                (h(!0), p(K, null, de(V.changes, (ne) => (h(), p("tr", {
                  key: ne.field
                }, [
                  l("th", null, o(x.value[ne.field]), 1),
                  l("td", null, o(ne.before || "—"), 1),
                  l("td", null, [
                    ee(o(ne.value), 1),
                    l("small", null, o(B.value[ne.status]), 1)
                  ]),
                  l("td", null, o(ne.raw), 1)
                ]))), 128))
              ])
            ])
          ])) : V.conflicts?.length ? A("", !0) : (h(), p("p", dR, o(u(g)("library", "Check separators, folder depth and field assignments. A unique interpretation is required.")), 1))
        ]))), 128)),
        l("nav", {
          class: "library-inference-presets",
          "aria-label": u(g)("library", "Sample pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: d.value || s.value === 1,
            onClick: be[11] || (be[11] = (V) => Me(s.value - 1))
          }, o(u(g)("library", "Previous page")), 9, hR),
          l("span", null, o(s.value), 1),
          l("button", {
            class: "button secondary",
            disabled: d.value || !c.value,
            onClick: be[12] || (be[12] = (V) => Me(s.value + 1))
          }, o(u(g)("library", "Next page")), 9, pR)
        ], 8, fR)
      ]),
      fe(_g, {
        class: "library-inference-step",
        results: W.value,
        labels: x.value,
        "request-token": e.requestToken,
        disabled: d.value || X.value,
        context: JSON.stringify({ mode: $.value, pattern: $.value === "pattern" ? N.value : void 0, rule: $.value === "guided" ? S.value : void 0, folderRules: $.value === "folders" ? C.value : void 0, rootId: m.value, folder: k.value }),
        onChanged: be[13] || (be[13] = (V) => Me(s.value))
      }, null, 8, ["results", "labels", "request-token", "disabled", "context"]),
      fe(fO, {
        definition: { mode: $.value, pattern: N.value, rule: S.value, rootId: m.value, folder: k.value, recursive: n.value },
        labels: x.value,
        statuses: B.value,
        "request-token": e.requestToken,
        disabled: d.value || X.value || !m.value
      }, null, 8, ["definition", "labels", "statuses", "request-token", "disabled"])
    ], 8, yN));
  }
}, bR = ["aria-label", "title", "onClick"], gR = {
  key: 0,
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, mR = { id: "library-sidebar-filters-heading" }, yR = ["aria-label"], _R = ["value"], wR = ["name", "value"], kR = ["value"], SR = ["value"], CR = {
  class: "library-filter-group",
  "data-library-filter-group": "content"
}, TR = ["title"], AR = ["placeholder"], ER = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "q"
}, $R = { value: "" }, xR = ["value"], OR = { class: "library-publisher-filter" }, NR = { for: "library-publisher-search" }, RR = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], IR = ["value"], LR = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, PR = {
  key: 1,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, DR = ["id", "aria-selected"], FR = ["onClick"], MR = { class: "library-publication-filter" }, UR = { for: "library-publication-search" }, zR = ["placeholder", "aria-expanded"], jR = ["value"], BR = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, HR = {
  key: 1,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, VR = ["onClick"], qR = { class: "library-year-filter" }, GR = { for: "library-year-search" }, KR = ["placeholder", "aria-expanded"], WR = ["value"], YR = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, ZR = {
  key: 1,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, XR = ["onClick"], JR = { class: "library-creator-filter" }, QR = { for: "library-creator-search" }, eI = ["placeholder", "title", "aria-expanded"], tI = ["value"], iI = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, aI = {
  key: 1,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, nI = ["onClick"], rI = { class: "library-tag-filter" }, lI = { for: "library-tag-search" }, sI = ["placeholder", "aria-expanded"], oI = ["value"], uI = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, cI = ["onClick"], dI = { value: "" }, fI = ["value"], hI = {
  class: "library-filter-group",
  "data-library-filter-group": "location"
}, pI = { value: "" }, vI = ["value"], bI = { class: "library-folder-filter" }, gI = { for: "library-folder-search" }, mI = ["placeholder", "title", "aria-expanded"], yI = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, _I = ["onClick"], wI = {
  class: "library-filter-group",
  "data-library-filter-group": "review"
}, kI = { value: "" }, SI = ["value"], CI = { value: "" }, TI = ["value"], AI = { class: "library-subject-filter" }, EI = { for: "library-subject-search" }, $I = ["placeholder", "title", "aria-expanded"], xI = ["value"], OI = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, NI = {
  key: 1,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, RI = ["onClick"], II = { class: "library-classification-filter" }, LI = { for: "library-classification-search" }, PI = ["placeholder", "title", "aria-expanded"], DI = ["value"], FI = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, MI = ["onClick"], UI = { value: "" }, zI = { value: "1" }, jI = {
  class: "library-filter-group",
  "data-library-filter-group": "personal"
}, BI = {
  type: "submit",
  class: "button primary"
}, HI = ["href"], VI = ["lang", "dir"], qI = ["aria-label"], GI = ["href", "aria-label", "title", "onClick"], KI = ["title"], WI = ["href"], YI = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, ZI = { class: "library-review-header" }, XI = { class: "library-muted library-catalogue-eyebrow" }, JI = { id: "library-review-heading" }, QI = ["aria-label"], eL = ["href", "aria-current", "onClick"], tL = ["aria-label"], iL = ["name", "value"], aL = {
  type: "submit",
  class: "button secondary"
}, nL = ["aria-busy"], rL = { key: 0 }, lL = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, sL = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, oL = { class: "library-metadata-review-workbench-copy" }, uL = { class: "library-muted library-catalogue-eyebrow" }, cL = ["title"], dL = {
  key: 0,
  class: "library-metadata-review-card"
}, fL = {
  class: "library-bidi-human",
  dir: "auto"
}, hL = { class: "library-muted" }, pL = {
  class: "library-bidi-machine",
  dir: "ltr"
}, vL = { class: "library-metadata-review-fields" }, bL = {
  class: "library-bidi-human",
  dir: "auto"
}, gL = {
  class: "library-bidi-human",
  dir: "auto"
}, mL = {
  class: "library-bidi-human",
  dir: "auto"
}, yL = {
  class: "library-bidi-machine",
  dir: "ltr"
}, _L = {
  class: "library-bidi-human",
  dir: "auto"
}, wL = {
  class: "library-bidi-human",
  dir: "auto"
}, kL = ["action"], SL = ["value"], CL = ["value"], TL = ["disabled", "title"], AL = { class: "library-metadata-review-actions" }, EL = ["href"], $L = ["href"], xL = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, OL = ["href"], NL = ["aria-label"], RL = ["onClick"], IL = {
  class: "library-bidi-human",
  dir: "auto"
}, LL = {
  key: 0,
  class: "library-muted"
}, PL = {
  class: "library-bidi-human",
  dir: "auto"
}, DL = {
  key: 1,
  class: "library-scan-error"
}, FL = {
  class: "library-bidi-human",
  dir: "auto"
}, ML = ["onClick"], UL = ["href", "onClick"], zL = ["aria-label"], jL = ["href"], BL = {
  key: 1,
  class: "library-muted"
}, HL = { key: 0 }, VL = ["href"], qL = {
  key: 3,
  class: "library-muted"
}, GL = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, KL = { class: "library-home-header" }, WL = { class: "library-muted library-catalogue-eyebrow" }, YL = { id: "library-home-heading" }, ZL = ["aria-label"], XL = ["aria-label"], JL = ["href", "aria-label", "onClick"], QL = ["title"], eP = { class: "library-empty-actions" }, tP = ["href"], iP = ["href"], aP = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, nP = { id: "library-continue-heading" }, rP = ["href"], lP = {
  key: 0,
  class: "library-home-card-row"
}, sP = ["aria-label", "onClick"], oP = { class: "library-cover-frame" }, uP = ["src"], cP = { class: "library-cover-summary" }, dP = ["onClick"], fP = { dir: "auto" }, hP = {
  key: 0,
  class: "library-cover-creator"
}, pP = { dir: "auto" }, vP = ["href", "onClick"], bP = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, gP = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, mP = { id: "library-recent-heading" }, yP = ["href"], _P = {
  key: 0,
  class: "library-home-card-row"
}, wP = ["aria-label", "onClick"], kP = { class: "library-cover-frame" }, SP = ["src"], CP = { class: "library-cover-summary" }, TP = ["onClick"], AP = { dir: "auto" }, EP = {
  key: 0,
  class: "library-cover-creator"
}, $P = { dir: "auto" }, xP = ["href", "onClick"], OP = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, NP = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, RP = { id: "library-home-shelves-heading" }, IP = ["href"], LP = ["aria-label"], PP = ["href"], DP = { dir: "auto" }, FP = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, MP = {
  key: 1,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, UP = { id: "library-home-attention-heading" }, zP = { class: "library-muted" }, jP = ["href"], BP = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, HP = { class: "library-home-header" }, VP = { class: "library-muted library-catalogue-eyebrow" }, qP = { id: "library-shelves-landing-heading" }, GP = ["aria-label"], KP = ["aria-label"], WP = ["href", "aria-label", "onClick"], YP = ["title"], ZP = { class: "library-empty-actions" }, XP = ["href"], JP = ["href"], QP = ["aria-label"], e8 = { class: "library-shelf-tree" }, t8 = {
  key: 2,
  class: "library-shelves-empty",
  role: "status"
}, i8 = { class: "library-muted" }, a8 = { class: "library-empty-actions" }, n8 = ["href"], r8 = ["href"], l8 = ["aria-busy"], s8 = { class: "library-catalogue-header" }, o8 = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, u8 = ["aria-label"], c8 = { class: "library-mobile-filter-count" }, d8 = ["aria-label"], f8 = ["value"], h8 = ["name", "value"], p8 = { class: "library-mobile-filter-group" }, v8 = { class: "library-quick-filter-search" }, b8 = ["placeholder"], g8 = { value: "" }, m8 = ["value"], y8 = { class: "library-publisher-filter" }, _8 = { for: "library-mobile-publisher-search" }, w8 = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], k8 = ["value"], S8 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, C8 = {
  key: 1,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, T8 = ["id", "aria-selected"], A8 = ["onClick"], E8 = { class: "library-publication-filter" }, $8 = { for: "library-mobile-publication-search" }, x8 = ["placeholder", "aria-expanded"], O8 = ["value"], N8 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, R8 = {
  key: 1,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, I8 = ["onClick"], L8 = { class: "library-year-filter" }, P8 = { for: "library-mobile-year-search" }, D8 = ["placeholder", "aria-expanded"], F8 = ["value"], M8 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, U8 = {
  key: 1,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, z8 = ["onClick"], j8 = { class: "library-creator-filter" }, B8 = { for: "library-mobile-creator-search" }, H8 = ["placeholder", "title", "aria-expanded"], V8 = ["value"], q8 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, G8 = {
  key: 1,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, K8 = ["onClick"], W8 = { value: "" }, Y8 = ["value"], Z8 = { class: "library-subject-filter" }, X8 = { for: "library-mobile-subject-search" }, J8 = ["placeholder", "title", "aria-expanded"], Q8 = ["value"], e5 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, t5 = {
  key: 1,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, i5 = ["onClick"], a5 = { class: "library-classification-filter" }, n5 = { for: "library-mobile-classification-search" }, r5 = ["placeholder", "title", "aria-expanded"], l5 = ["value"], s5 = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, o5 = ["onClick"], u5 = { class: "library-mobile-filter-group" }, c5 = { value: "" }, d5 = ["value"], f5 = { class: "library-folder-filter" }, h5 = { for: "library-mobile-folder-search" }, p5 = ["placeholder", "title", "aria-expanded"], v5 = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, b5 = ["onClick"], g5 = { class: "library-mobile-filter-group" }, m5 = { value: "" }, y5 = ["value"], _5 = { value: "" }, w5 = ["value"], k5 = { value: "" }, S5 = { value: "1" }, C5 = { class: "library-mobile-filter-group" }, T5 = { class: "library-tag-filter" }, A5 = { for: "library-tag-search" }, E5 = ["placeholder", "aria-expanded"], $5 = ["value"], x5 = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, O5 = ["onClick"], N5 = { value: "title" }, R5 = { value: "recent" }, I5 = { value: "publicationDate" }, L5 = { value: "publication" }, P5 = { value: "lastOpened" }, D5 = { value: "format" }, F5 = { value: "compact" }, M5 = { value: "list" }, U5 = { class: "library-mobile-filter-actions" }, z5 = ["href"], j5 = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, B5 = ["aria-label"], H5 = { class: "library-catalogue-control-band" }, V5 = {
  id: "library-collections",
  class: "library-saved-collections"
}, q5 = ["title"], G5 = ["action", "title"], K5 = ["value"], W5 = ["value"], Y5 = { class: "library-control-label" }, Z5 = ["placeholder", "disabled"], X5 = ["disabled", "title"], J5 = ["aria-label"], Q5 = ["name", "value"], eD = {
  class: "library-sort-control",
  "data-library-control": "sort"
}, tD = { value: "title" }, iD = { value: "recent" }, aD = { value: "publicationDate" }, nD = { value: "publication" }, rD = { value: "lastOpened" }, lD = { value: "format" }, sD = ["aria-label"], oD = ["aria-pressed"], uD = ["aria-pressed"], cD = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, dD = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, fD = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, hD = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, pD = { key: 0 }, vD = { key: 1 }, bD = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, gD = { class: "library-muted library-catalogue-eyebrow" }, mD = ["title"], yD = ["aria-label"], _D = { key: 0 }, wD = { key: 1 }, kD = { key: 2 }, SD = ["aria-label"], CD = { key: 0 }, TD = { key: 1 }, AD = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, ED = { class: "library-muted library-catalogue-eyebrow" }, $D = ["title"], xD = ["aria-label"], OD = ["href"], ND = {
  key: 0,
  class: "library-notice"
}, RD = { class: "library-publication-issue-label" }, ID = ["href"], LD = { class: "library-muted" }, PD = {
  key: 1,
  class: "library-publication-unknown-issues"
}, DD = ["title"], FD = ["href"], MD = { class: "library-catalogue-status-row" }, UD = { class: "library-muted library-filter-result-summary" }, zD = ["aria-label"], jD = { class: "library-pagination-range" }, BD = { key: 0 }, HD = ["href"], VD = {
  key: 1,
  class: "library-muted"
}, qD = ["href"], GD = {
  key: 3,
  class: "library-muted"
}, KD = ["title"], WD = { class: "library-empty-actions" }, YD = ["href"], ZD = { class: "library-muted" }, XD = ["title"], JD = { class: "library-empty-actions" }, QD = ["href"], eF = ["title"], tF = ["aria-label"], iF = ["href", "aria-label", "onClick"], aF = ["title"], nF = {
  key: 1,
  class: "library-muted"
}, rF = { class: "library-empty-actions" }, lF = ["href"], sF = ["title"], oF = { class: "library-empty-actions" }, uF = ["href"], cF = ["aria-label"], dF = { class: "library-list-selection-actions" }, fF = { class: "library-select-visible" }, hF = ["checked"], pF = ["title"], vF = {
  key: 0,
  "aria-live": "polite"
}, bF = ["aria-label"], gF = { value: "" }, mF = { value: "tag" }, yF = { value: "untag" }, _F = { value: "edit" }, wF = { value: "covers" }, kF = { value: "reset" }, SF = ["action"], CF = ["value"], TF = ["placeholder"], AF = ["title"], EF = ["action"], $F = ["value"], xF = ["placeholder"], OF = ["title"], NF = ["action"], RF = ["value"], IF = ["name", "value"], LF = ["title"], PF = ["action"], DF = ["value"], FF = ["name", "value"], MF = { name: "bulkEditField" }, UF = { value: "publicationType" }, zF = { value: "subtitle" }, jF = { value: "creators" }, BF = { value: "publication" }, HF = { value: "series" }, VF = { value: "seriesNumber" }, qF = { value: "genre" }, GF = { value: "publicationDate" }, KF = { value: "language" }, WF = { value: "publisher" }, YF = { value: "subjects" }, ZF = { value: "classifications" }, XF = ["placeholder"], JF = ["title"], QF = ["action"], e9 = ["value"], t9 = ["name", "value"], i9 = ["title"], a9 = {
  key: 6,
  class: "library-duplicate-page-status",
  role: "status"
}, n9 = {
  key: 7,
  class: "library-catalogue-list-scroll",
  "data-library-catalogue-list-scroll": ""
}, r9 = {
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, l9 = { class: "hidden-visually" }, s9 = { class: "library-catalogue-list-selection" }, o9 = { class: "hidden-visually" }, u9 = { class: "library-catalogue-list-cover-heading" }, c9 = { class: "hidden-visually" }, d9 = { scope: "col" }, f9 = { scope: "col" }, h9 = { scope: "col" }, p9 = { scope: "col" }, v9 = { scope: "col" }, b9 = { scope: "col" }, g9 = { scope: "col" }, m9 = { class: "library-catalogue-list-selection" }, y9 = { class: "library-item-selection" }, _9 = ["checked", "aria-label", "onChange"], w9 = { class: "library-catalogue-list-cover-cell" }, k9 = ["aria-label", "onClick"], S9 = ["src"], C9 = {
  scope: "row",
  class: "library-catalogue-list-title-cell"
}, T9 = ["onClick"], A9 = {
  class: "library-bidi-human",
  dir: "auto"
}, E9 = ["href"], $9 = { class: "library-catalogue-list-creators" }, x9 = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, O9 = ["aria-label"], N9 = ["datetime"], R9 = ["aria-label"], I9 = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, L9 = ["aria-label"], P9 = ["dir"], D9 = ["aria-label"], F9 = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, M9 = ["aria-label"], U9 = { class: "library-catalogue-list-actions" }, z9 = ["href", "onClick"], j9 = ["onClick"], B9 = { class: "library-item-selection" }, H9 = ["checked", "aria-label", "onChange"], V9 = ["aria-labelledby", "aria-expanded", "onClick"], q9 = ["id"], G9 = ["action", "onSubmit"], K9 = ["value"], W9 = ["value"], Y9 = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], Z9 = ["data-library-star-error"], X9 = { class: "library-cover-summary" }, J9 = { class: "library-cover-primary" }, Q9 = ["href"], eM = ["id"], tM = ["onClick"], iM = {
  class: "library-bidi-human",
  dir: "auto"
}, aM = {
  key: 1,
  class: "library-cover-creator"
}, nM = {
  class: "library-bidi-human",
  dir: "auto"
}, rM = {
  key: 2,
  class: "library-cover-context"
}, lM = {
  class: "library-bidi-human",
  dir: "auto"
}, sM = ["aria-label"], oM = { class: "library-pagination-range" }, uM = { key: 0 }, cM = ["href"], dM = {
  key: 1,
  class: "library-muted"
}, fM = ["href"], hM = {
  key: 3,
  class: "library-muted"
}, pM = { class: "library-sidebar-content" }, vM = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, bM = ["role"], gM = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, mM = { class: "library-sidebar-publication-header" }, yM = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, _M = ["src"], wM = { class: "library-sidebar-publication-summary" }, kM = { class: "library-muted library-catalogue-eyebrow" }, SM = {
  class: "library-bidi-human",
  dir: "auto"
}, CM = { key: 0 }, TM = {
  class: "library-bidi-machine",
  dir: "ltr"
}, AM = { class: "library-detail-drawer-actions" }, EM = ["href"], $M = ["aria-label"], xM = ["aria-current", "onClick"], OM = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, NM = { id: "library-sidebar-overview-heading" }, RM = {
  key: 0,
  class: "library-sidebar-description"
}, IM = {
  class: "library-bidi-human",
  dir: "auto"
}, LM = { class: "library-detail-drawer-facts" }, PM = { key: 0 }, DM = ["href", "title"], FM = {
  class: "library-bidi-human",
  dir: "auto"
}, MM = { key: 1 }, UM = ["href", "title"], zM = { key: 1 }, jM = { key: 2 }, BM = { key: 2 }, HM = ["href", "title"], VM = {
  class: "library-bidi-human",
  dir: "auto"
}, qM = { key: 3 }, GM = { class: "library-detail-facet-list" }, KM = ["href", "title", "onClick"], WM = {
  class: "library-bidi-machine",
  dir: "ltr"
}, YM = { key: 4 }, ZM = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, XM = { id: "library-sidebar-metadata-heading" }, JM = ["placeholder"], QM = ["onUpdate:modelValue", "aria-label", "placeholder"], e6 = ["onUpdate:modelValue", "aria-label"], t6 = ["onClick"], i6 = {
  key: 0,
  role: "alert"
}, a6 = {
  key: 1,
  role: "status"
}, n6 = ["disabled"], r6 = {
  key: 1,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, l6 = { id: "library-sidebar-suggestions-heading" }, s6 = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, o6 = { id: "library-sidebar-activity-heading" }, u6 = { class: "library-detail-drawer-facts" }, c6 = { key: 0 }, d6 = { key: 1 }, f6 = { key: 2 }, h6 = { class: "library-detail-drawer-file" }, p6 = ["href"], v6 = { dir: "ltr" }, b6 = {
  key: 1,
  dir: "ltr"
}, g6 = ["aria-label"], m6 = ["href"], y6 = { dir: "auto" }, _6 = ["aria-label"], w6 = ["href"], k6 = { dir: "auto" }, S6 = ["aria-label"], C6 = ["href"], T6 = { dir: "auto" }, A6 = ["aria-label"], E6 = ["disabled"], $6 = ["disabled"], x6 = 20, O6 = "/apps/library", N6 = 2147483647, R6 = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = B_(g, () => `${os()}:${cb()}`), i = e, a = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = Object.freeze([
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
        const F = [...new Set([...b.keys()].filter((xe) => xe === f || xe.startsWith(`${f}[`)))], pe = F.reduce((xe, Be) => xe + b.getAll(Be).length, 0);
        if (pe > 1 || F.some((xe) => xe !== f)) {
          for (const xe of F) b.delete(xe);
          continue;
        }
        f !== "status" && pe === 1 && !s(f, b.get(f)) && b.delete(f);
      }
      return b;
    }
    function d(w) {
      return Object.keys(r).some((b) => w.getAll(b).length === 1 && s(b, w.get(b)));
    }
    function _(w) {
      return Object.fromEntries(Object.entries(w || {}).filter(([b, f]) => b === "status" || !Object.prototype.hasOwnProperty.call(r, b) || s(b, f)));
    }
    const v = Object.freeze(["compact", "list"]);
    function y(w) {
      return v.includes(w) ? w : "compact";
    }
    const m = /* @__PURE__ */ Lt({
      ...i.state,
      items: i.state.items || [],
      activeFilters: i.state.activeFilters || {},
      cataloguePagination: i.state.cataloguePagination || {}
    }), k = /* @__PURE__ */ Lt((m.items || []).map((w) => ({ ...w }))), C = j(() => k), S = j(() => m.shelves || []), $ = j(() => m.formats || []), R = j(() => m.publicationTypes?.length ? m.publicationTypes : a), N = j(() => m.publications || []), P = j(() => m.publicationIssueContext || null), I = j(() => m.scanStatuses || []), he = j(() => m.workflowStatuses || []), Q = j(() => m.cataloguePagination || {
      page: 1,
      limit: 100,
      total: C.value.length,
      visible: C.value.length,
      from: C.value.length > 0 ? 1 : 0,
      to: C.value.length,
      previousUrl: "",
      nextUrl: ""
    }), x = /* @__PURE__ */ Lt({
      q: m.activeFilters?.q || "",
      view: y(m.activeFilters?.view),
      type: m.activeFilters?.type || "",
      publisher: m.activeFilters?.publisher || "",
      publication: m.activeFilters?.publication || "",
      year: m.activeFilters?.year || "",
      language: m.activeFilters?.language || "",
      creator: m.activeFilters?.creator || "",
      authorId: m.activeFilters?.authorId || "",
      seriesId: m.activeFilters?.seriesId || "",
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
    const B = /* @__PURE__ */ U(x.publication), W = /* @__PURE__ */ U(x.q), Z = /* @__PURE__ */ U(!1), le = /* @__PURE__ */ U(null), H = j(() => {
      const w = B.value.trim().toLocaleLowerCase();
      return (w !== "" && le.value !== null ? le.value : N.value).filter((f) => w === "" || f.toLocaleLowerCase().includes(w)).slice(0, x6);
    });
    Ke(() => x.publication, (w) => {
      B.value = w || "";
    }), Ke(() => x.q, (w) => {
      W.value = w || "";
    });
    let Y = null, L = null, G = 0;
    Ke(B, (w) => {
      window.clearTimeout(Y), L?.abort(), L = null, le.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++G;
      Y = window.setTimeout(() => {
        Jg(b, f);
      }, 200);
    });
    const X = /* @__PURE__ */ U(x.publisher), ae = /* @__PURE__ */ U(!1), J = /* @__PURE__ */ U(null), ve = j(() => J.value || []);
    Ke(() => x.publisher, (w) => {
      X.value = w || "";
    });
    let Ae = null, Le = null, Oe = 0;
    Ke(X, (w) => {
      window.clearTimeout(Ae), Le?.abort(), Le = null, J.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++Oe;
      Ae = window.setTimeout(() => {
        Gg(b, f);
      }, 200);
    });
    const Me = /* @__PURE__ */ U(x.creator), Xe = /* @__PURE__ */ U(!1), ct = /* @__PURE__ */ U(null), we = j(() => ct.value || []);
    Ke(() => x.creator, (w) => {
      Me.value = w || "";
    });
    let be = null, V = null, ne = 0;
    Ke(Me, (w) => {
      window.clearTimeout(be), V?.abort(), V = null, ct.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++ne;
      be = window.setTimeout(() => {
        qg(b, f);
      }, 200);
    });
    const Ue = /* @__PURE__ */ U(x.folder), ie = /* @__PURE__ */ U(!1), T = /* @__PURE__ */ U(null), O = j(() => T.value || []);
    Ke(() => x.folder, (w) => {
      Ue.value = w || "";
    });
    let D = null, q = null, z = 0;
    Ke(Ue, (w) => {
      window.clearTimeout(D), q?.abort(), q = null, T.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++z;
      D = window.setTimeout(() => {
        Zg(b, f);
      }, 200);
    });
    const te = /* @__PURE__ */ U(x.subject), re = /* @__PURE__ */ U(!1), ue = /* @__PURE__ */ U(null), me = j(() => ue.value || []);
    Ke(() => x.subject, (w) => {
      te.value = w || "";
    });
    let ce = null, Ne = null, ke = 0;
    Ke(te, (w) => {
      window.clearTimeout(ce), Ne?.abort(), Ne = null, ue.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++ke;
      ce = window.setTimeout(() => {
        Kg(b, f);
      }, 200);
    });
    const $e = /* @__PURE__ */ U(x.classification), Re = /* @__PURE__ */ U(!1), qe = /* @__PURE__ */ U(null), Ze = j(() => qe.value || []);
    Ke(() => x.classification, (w) => {
      $e.value = w || "";
    });
    let Ge = null, at = null, dt = 0;
    Ke($e, (w) => {
      window.clearTimeout(Ge), at?.abort(), at = null, qe.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++dt;
      Ge = window.setTimeout(() => {
        Wg(b, f);
      }, 200);
    });
    const yt = /* @__PURE__ */ U(x.tag), gt = /* @__PURE__ */ U(!1), ai = /* @__PURE__ */ U(null), pi = j(() => ai.value || []);
    Ke(() => x.tag, (w) => {
      yt.value = w || "";
    });
    let kt = null, Rt = null, Mi = 0;
    Ke(yt, (w) => {
      window.clearTimeout(kt), Rt?.abort(), Rt = null, ai.value = null;
      const b = String(w || "").trim();
      if (b.length < 2) return;
      const f = ++Mi;
      kt = window.setTimeout(() => {
        Yg(b, f);
      }, 200);
    });
    const Gt = /* @__PURE__ */ U(x.year), vi = /* @__PURE__ */ U(!1), $n = /* @__PURE__ */ U(null), Wi = j(() => $n.value || []);
    Ke(() => x.year, (w) => {
      Gt.value = w || "";
    });
    let xn = null, Ti = null, Yi = 0;
    Ke(Gt, (w) => {
      window.clearTimeout(xn), Ti?.abort(), Ti = null, $n.value = null;
      const b = String(w || "").trim();
      if (b.length < 2) return;
      const f = ++Yi;
      xn = window.setTimeout(() => {
        Xg(b, f);
      }, 200);
    });
    const Zi = Object.fromEntries(Object.keys(x).map((w) => [w, w === "sort" ? "title" : w === "view" ? "compact" : ""])), Dr = window.location.pathname.indexOf(O6), ha = Dr >= 0 ? window.location.pathname.slice(0, Dr) : "", Ka = {
      catalogue: `${ha}/apps/library/`,
      review: `${ha}/apps/library/?scannerConflicts=1`,
      settings: `${ha}/settings/user/library`
    };
    function Wa(w, b) {
      if (typeof w != "string" || w === "") return b;
      try {
        const f = ha ? `${ha}/` : "/";
        let F = w;
        for (let pe = 0; pe < 5; pe += 1) {
          if (!F.startsWith("/") || F.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(F)) return b;
          const xe = new URL(F, window.location.origin);
          if (xe.origin !== window.location.origin || !xe.pathname.startsWith(f)) return b;
          const Be = F.split(/[?#]/, 1)[0];
          for (const _i of Be.split("/")) {
            let Qi = _i;
            for (let mr = 0; mr < 5; mr += 1) {
              const ea = decodeURIComponent(Qi);
              if (/[\\/\u0000-\u001f\u007f]/.test(ea) || ea === "." || ea === "..") return b;
              if (ea === Qi) break;
              if (Qi = ea, mr === 4) return b;
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
    const Ya = j(() => Wa(m.settingsUrl, Ka.settings)), rt = j(() => Wa(m.catalogueRootUrl, Ka.catalogue)), ur = j(() => Wa(m.homeUrl, `${Ka.catalogue}?home=1`)), bi = j(() => Wa(m.shelvesUrl, `${Ka.catalogue}?shelves=1`)), pa = j(() => Wa(m.reviewUrl || m.scannerConflictReviewUrl, Ka.review)), Za = j(() => Object.entries(r).some(([w, b]) => x[w] === b)), cr = j(() => n.reduce((w, b) => w + Number(Vu.value[b.countKey] || 0), 0)), On = j(() => m.surface === "home"), Xa = j(() => m.surface === "shelves"), va = j(() => m.surface === "duplicates"), Ja = j(() => m.surface === "inference"), ba = j(() => m.surface === "authors"), Nn = j(() => m.surface === "series"), Ui = j(() => m.surface === "lists"), Qa = j(() => `${rt.value}?lists=1`), Tu = Number(new URLSearchParams(window.location.search).get("addToList")) || null, _t = /* @__PURE__ */ U([]), Kt = /* @__PURE__ */ U("");
    async function cs() {
      try {
        _t.value = (await mn()).lists;
      } catch {
      }
    }
    Ct(cs);
    const ds = j(() => !ba.value && !Nn.value && !va.value && !Ja.value && !Ui.value && !On.value && !Xa.value && !Za.value && !x.starred && x.recentlyOpened !== "1" && !x.shelf), Fr = j(() => [
      { key: "home", name: t("library", "Home"), href: ur.value, active: On.value },
      { key: "all", name: t("library", "All publications"), href: rt.value, active: ds.value },
      { key: "starred", name: t("library", "Starred"), href: `${rt.value}?starred=1`, active: x.starred === "1" },
      { key: "continue", name: t("library", "Continue reading"), href: `${rt.value}?recentlyOpened=1&sort=lastOpened`, active: x.recentlyOpened === "1" },
      { key: "shelves", name: t("library", "Shelves"), href: bi.value, active: Xa.value || !!x.shelf },
      { key: "collections", name: t("library", "Collections"), href: `${rt.value}#library-collections`, active: !1 }
    ]), fs = j(() => ge.value.map((w) => ({
      key: `collection-${w.id}`,
      rawName: w.name,
      id: w.id,
      name: w.countPending ? w.name : `${w.name} (${Ot("library", "%n item", "%n items", Number(w.count || 0))})`,
      href: hm(w.filters),
      active: pm(w.filters)
    }))), ht = j(() => m.requestToken || ""), Mr = j(() => !!m.duplicateSuggestions), Au = j(() => JSON.stringify(C.value.map((w) => [w.id, w.title, w.creators, w.publicationDate]))), Eu = j(() => JSON.parse(Au.value).map((w) => Number(w[0]))), { results: ga, status: Xi } = vg(Eu, Mr, ht);
    function ma(w, b) {
      const f = String(w?.recordOpenUrl || "");
      if (!f || !ht.value) return;
      const F = new URLSearchParams({ requesttoken: ht.value });
      try {
        if (navigator.sendBeacon) {
          const pe = new Blob([F.toString()], { type: "application/x-www-form-urlencoded" });
          navigator.sendBeacon(f, pe);
          return;
        }
      } catch {
      }
      fetch(f, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", requesttoken: ht.value },
        body: F,
        credentials: "same-origin",
        keepalive: !0
      }).catch(() => {
      });
    }
    const Rn = j(() => m.catalogueEndpointUrl || "/apps/library/catalogue"), en = j(() => m.shelfChildrenUrl || "/apps/library/shelves/children"), hs = j(() => m.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), Ur = j(() => m.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), zr = j(() => m.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), jr = j(() => m.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), $u = j(() => m.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), ps = j(() => m.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), xu = j(() => m.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), Ou = j(() => m.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Nu = j(() => m.itemSidebarUrlTemplate || `${ha}/apps/library/items/__ITEM_ID__/sidebar`), Ru = j(() => m.batchTagUrl || "/apps/library/bulk/tags"), vs = j(() => m.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Iu = j(() => m.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), bs = j(() => m.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Br = j(() => m.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), In = j(() => m.scannerConflictReviewUrl || "?scannerConflicts=1");
    m.importHealthSummary, m.importHealthSummary && Object.keys(m.importHealthSummary).length > 0;
    const Ln = j(() => m.discoveryPage === "publication"), dr = j(() => m.discoveryPage === "year"), tn = j(() => m.discoveryPage === "creator"), Ai = j(() => Ln.value || dr.value || tn.value), an = j(() => m.discoveryTitle || x.publication || x.year || x.creator || ""), gi = j(() => Ai.value ? an.value : t("library", "Library")), gs = j(() => tn.value ? t("library", "Creator") : dr.value ? t("library", "Publication year") : t("library", "Publication / series")), Pn = j(() => Number(m.rootCount || 0)), Lu = j(() => Number(m.enabledRootCount || 0)), fr = j(() => Pn.value === 0), Ji = j(() => Pn.value > 0 && Lu.value === 0), hr = j(() => Wt.value.length > 0), Ei = /* @__PURE__ */ U(!1), ms = /* @__PURE__ */ U(null), Hr = /* @__PURE__ */ U(null), ys = {
      q: "Search",
      sort: "Sort",
      view: "View mode",
      type: "Type",
      publisher: "Publisher",
      publication: "Series / periodical",
      year: "Publication year",
      language: "Language",
      creator: "Creator",
      authorId: "Author ID",
      seriesId: "Series ID",
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
    }, Pu = {
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
    }, _s = {
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
    }, pr = j(() => {
      if (typeof window > "u") return "";
      const w = new URLSearchParams(window.location.search);
      if (w.get("batchMetadataApplyResult") !== "1") return "";
      const b = w.get("batchMetadataField") || "field", f = w.get("batchMetadataApplied") || "0", F = w.get("batchMetadataUnchanged") || "0", pe = w.get("batchMetadataSkipped") || "0";
      return t("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: b, unchanged: F, skipped: pe });
    }), nn = j(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? t("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), vr = j(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? t("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), ge = j(() => m.savedCollections || []), E = j(() => m.savedCollectionSaveUrl || "/apps/library/collections"), M = j(() => m.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), oe = v, se = j(() => oe.includes(x.view) ? x.view : "compact"), Ie = j(() => ({
      "library-cover-gallery--compact": se.value === "compact"
    }));
    function Fe(w) {
      const b = String(w || "").trim();
      if (b.length <= 32) return b;
      const f = b.split("/").filter(Boolean);
      return f.length > 0 ? `…/${f.at(-1)}` : b;
    }
    function We(w, b) {
      const f = String(b || "").trim();
      if (f === "" || Pu[w] === f) return "";
      if (w === "format") return f.toUpperCase();
      if (w === "folder") return Fe(f);
      const F = _s[w]?.[f];
      return F ? t("library", F) : f;
    }
    function Tt(w, b) {
      const f = String(x[w] || "").trim(), F = We(w, f), pe = t("library", b);
      return {
        key: w,
        label: pe,
        value: f,
        displayValue: F,
        title: F ? `${pe}: ${f}` : pe
      };
    }
    const Wt = j(() => Object.entries(ys).map(([w, b]) => Tt(w, b)).filter((w) => w.value !== "" && !(w.key === "sort" && w.value === "title") && !(w.key === "view" && w.value === "compact"))), pt = j(() => Wt.value.filter((w) => !["sort", "view"].includes(w.key))), It = j(() => Wt.value.length), ya = j(() => {
      const w = new URLSearchParams();
      for (const f of pt.value) w.set(f.key, f.value);
      const b = w.toString();
      return `${rt.value}${b ? `?${b}` : ""}`;
    }), Et = j(() => pt.value[0] || null), ws = j(() => W.value.trim() !== String(x.q || "").trim()), kg = j(() => String(x.q || "").trim() !== "" || ws.value);
    function mi(w) {
      return ({
        q: W,
        publisher: X,
        publication: B,
        creator: Me,
        subject: te,
        year: Gt,
        folder: Ue,
        classification: $e,
        tag: yt
      }[w]?.value ?? "").trim() !== String(x[w] || "").trim();
    }
    function zi(w) {
      return mi(w) ? w === "q" ? t("library", "Not applied yet — press Enter or Apply.") : t("library", "Press Enter or Apply to use this value.") : "";
    }
    function _a(w) {
      return { "library-filter-apply--pending": mi(w) };
    }
    const Sg = j(() => It.value > 0 ? t("library", "Filters ({count})", { count: It.value }) : t("library", "Filters")), Cg = j(() => It.value > 0 ? t("library", "Open filters panel; {count} active filters", { count: It.value }) : t("library", "Open filters panel")), Tg = j(() => Ot("library", "Show %n item", "Show %n items", Number(Q.value.total || 0)));
    function Ag(w) {
      Ei.value = w.currentTarget?.open === !0, Ei.value && Pt(() => {
        ms.value?.focus?.();
      });
    }
    const Eg = /* @__PURE__ */ new Set([
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
    ]), nf = j(() => Object.entries(_(x)).filter(([w, b]) => !Eg.has(w) && String(b || "").trim() !== "").map(([w, b]) => ({ key: w, value: b }))), $g = j(() => Object.entries(x).filter(([w, b]) => !["q", "sort", "starred"].includes(w) && String(b || "").trim() !== "").map(([w, b]) => ({ key: w, value: b }))), ks = j(() => Object.entries(_(x)).filter(([w, b]) => String(b || "").trim() !== "").map(([w, b]) => ({ key: w, value: b }))), xg = j(() => ks.value.filter(({ key: w, value: b }) => w !== "q" && !(w === "sort" && b === "title"))), Ss = j(() => m.homeRows || { continueReading: [], recentlyAdded: [] }), rf = j(() => m.homeShelves || []), lf = j(() => m.shelfTree || []), Du = j(() => m.needsAttention || { count: 0, url: `${rt.value}?needsMetadata=1` }), ni = /* @__PURE__ */ U([]), Cs = j(() => new Set(ni.value));
    function sf(w, b) {
      const f = new Set(ni.value);
      b ? f.add(Number(w)) : f.delete(Number(w)), ni.value = [...f];
    }
    function Og(w) {
      ni.value = w.currentTarget.checked ? C.value.map((b) => Number(b.id)) : [];
    }
    function Ng() {
      const w = new Set(C.value.map((b) => Number(b.id)));
      ni.value = ni.value.filter((b) => w.has(b));
    }
    function Rg(w) {
      const b = w.target;
      if (b instanceof HTMLFormElement) {
        b.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of ni.value) {
          const F = document.createElement("input");
          F.type = "hidden", F.name = "itemIds[]", F.value = String(f), F.dataset.librarySelectedId = "1", b.appendChild(F);
        }
      }
    }
    const Te = /* @__PURE__ */ U(null), Dn = /* @__PURE__ */ U(null), ri = /* @__PURE__ */ Lt({ loading: !1, error: "", missing: !1 }), Fn = /* @__PURE__ */ U("overview"), ji = /* @__PURE__ */ Lt({ saving: !1, saved: !1, error: "" }), mt = /* @__PURE__ */ Lt({ title: "", publicationDate: "", series: "", seriesNumber: "", genre: "", identifiers: [] }), of = /* @__PURE__ */ U(null), Mn = /* @__PURE__ */ U(null), Un = /* @__PURE__ */ U(!1);
    let Fu = null, wa = null, Ts = null, Mu = !1, Vr = null, Uu = 0;
    const rn = j(() => Dn.value !== null), qr = j(() => Te.value ? C.value.findIndex((w) => w.id === Te.value.id) : -1), As = j(() => qr.value > 0 ? C.value[qr.value - 1] : null), Es = j(() => qr.value >= 0 && qr.value < C.value.length - 1 ? C.value[qr.value + 1] : null), uf = j(() => Mg(Te.value?.description || "")), zn = j(() => Pg(Te.value?.publicationDate || "")), cf = j(() => Dg(Te.value?.language || "")), Ig = ["publicationType", "title", "subtitle", "creators", "publication", "series", "seriesNumber", "genre", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Lg = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Gr(w) {
      const b = String(w ?? "").trim(), f = b.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : b;
    }
    function Pg(w) {
      const f = Gr(w).match(/^(\d{4})/u);
      return f ? f[1] : "";
    }
    function Dg(w) {
      return String(w ?? "").split(/[;,\n]+/u).map((b) => b.trim()).filter(Boolean);
    }
    function df(w, b) {
      const f = new URLSearchParams();
      for (const [F, pe] of Object.entries(x)) {
        const xe = String(pe || "").trim();
        xe !== "" && !(F === "sort" && xe === "title") && !(F === "view" && xe === "compact") && f.set(F, xe);
      }
      return f.set(w, String(b || "").trim()), f.delete("page"), c(f);
    }
    function $s(w, b) {
      const F = df(w, b).toString();
      return `${rt.value}${F ? `?${F}` : ""}`;
    }
    function xs(w, b, f) {
      const F = String(f || "").trim();
      if (F === "") return;
      w?.preventDefault?.();
      const pe = df(b, F);
      Wr({ historyMode: "none" }), Yt(null, {
        params: pe,
        generation: ++li,
        historyMode: "push"
      });
    }
    function Fg(w) {
      return String(w ?? "").replace(/&#x([0-9a-f]+);/giu, (b, f) => String.fromCodePoint(Number.parseInt(f, 16))).replace(/&#(\d+);/gu, (b, f) => String.fromCodePoint(Number.parseInt(f, 10))).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#039;", "'").replaceAll("&apos;", "'").replaceAll("&nbsp;", " ").replaceAll("&amp;", "&");
    }
    function Mg(w) {
      let b = String(w ?? "").trim();
      if (b === "") return "";
      for (let f = 0; f < 2; f += 1) {
        const F = Fg(b);
        if (F === b) break;
        b = F;
      }
      return b = b.replace(/<\s*(script|style)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/giu, "").replace(/<\s*(br|hr)\b[^>]*\/?>/giu, `
`).replace(/<\s*\/\s*(p|div|section|article|blockquote|li|tr|h[1-6])\s*>/giu, `

`).replace(/<\s*(p|div|section|article|blockquote|ul|ol|li|table|tbody|thead|tr|td|th|h[1-6])\b[^>]*>/giu, "").replace(/<[^>]+>/gu, "").replace(/\u00a0/gu, " ").replace(/[^\S\r\n]+/gu, " ").replace(/[ \t]*\n[ \t]*/gu, `
`).replace(/\n{3,}/gu, `

`).trim(), b;
    }
    function ff(w) {
      return { ...w, publicationDate: Gr(w?.publicationDate) };
    }
    function hf(w) {
      for (const b of ["series", "seriesNumber", "genre"]) mt[b] = String(w?.[b] || "");
      mt.title = String(w?.title || ""), mt.publicationDate = Gr(w?.publicationDate), mt.identifiers = Array.isArray(w?.identifiers) ? w.identifiers.map((b) => ({ scheme: String(b?.scheme || ""), displayValue: String(b?.displayValue || b?.value || "") })) : [], Object.assign(ji, { saving: !1, saved: !1, error: "" });
    }
    function Ug() {
      mt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function zg(w) {
      mt.identifiers.splice(w, 1);
    }
    async function jg() {
      const w = Te.value;
      if (!w?.updateUrl || ji.saving) return;
      Object.assign(ji, { saving: !0, saved: !1, error: "" });
      const b = new FormData();
      b.set("requesttoken", ht.value), b.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const F = w[f];
        b.set(f, Array.isArray(F) ? F.join(", ") : String(F ?? ""));
      }
      for (const f of ["series", "seriesNumber", "genre"]) b.set(f, mt[f]);
      b.set("title", mt.title), b.set("publicationDate", Gr(mt.publicationDate)), mt.identifiers.forEach((f, F) => {
        b.set(`identifiers[${F}][scheme]`, f.scheme), b.set(`identifiers[${F}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(w.updateUrl, { method: "POST", body: b, credentials: "same-origin", headers: { Accept: "application/json" } }), F = await f.json().catch(() => ({}));
        if (!f.ok || F.saved !== !0) throw new Error(F.error || t("library", "Metadata could not be saved."));
        for (const xe of ["series", "seriesNumber", "genre"]) w[xe] = mt[xe].trim();
        w.title = mt.title.trim(), w.publicationDate = Gr(mt.publicationDate), w.identifiers = mt.identifiers.filter((xe) => xe.scheme.trim() || xe.displayValue.trim()).map((xe) => ({ ...xe }));
        const pe = C.value.find((xe) => Number(xe.id) === Number(w.id));
        pe && (pe.title = w.title, pe.publicationDate = w.publicationDate), ji.saved = !0;
      } catch (f) {
        ji.error = f?.message || t("library", "Metadata could not be saved.");
      } finally {
        ji.saving = !1;
      }
    }
    const ln = j(() => {
      const w = s("scannerConflicts", x.scannerConflicts) || s("weakMetadata", x.weakMetadata), b = w ? C.value.find((f) => Os(f).length > 0) : null;
      return {
        enabled: w,
        item: b,
        fields: b ? Os(b) : [],
        reviewNextUrl: In.value,
        skipUrl: Q.value.nextUrl || In.value
      };
    }), Bg = j(() => n.map((w) => ({
      ...w,
      label: t("library", w.label),
      href: `${rt.value}?${encodeURIComponent(w.key)}=${encodeURIComponent(w.value)}`,
      active: String(x[w.key] || "") === w.value
    })));
    function zu(w) {
      return Array.isArray(w) ? JSON.stringify(w) : w == null ? "" : String(w);
    }
    function Os(w) {
      const b = w.fieldValues || {};
      let f = [];
      try {
        f = JSON.parse(b.rejectedFields || "[]");
      } catch {
      }
      Array.isArray(f) || (f = []);
      const F = w.fieldSources || {};
      return Ig.filter((pe) => Object.prototype.hasOwnProperty.call(b, pe)).map((pe) => {
        const xe = zu(w[pe]), Be = zu(b[pe]), et = zu(F[pe] || w.metadataSource || "scanner"), _i = et.includes("filename") || et.includes("path") ? Be : "", Qi = et.includes("sidecar") ? Be : "";
        return { field: pe, currentValue: xe, scannerCandidate: Be, pathTemplateCandidate: _i, sidecarValue: Qi, sourceProvenance: et, rejected: f.includes(pe), differs: xe !== Be };
      }).filter((pe) => pe.differs);
    }
    let jn = 0, Bn = null;
    function pf() {
      const w = new URLSearchParams(window.location.search).getAll("item");
      if (w.length !== 1 || !/^[1-9][0-9]*$/.test(w[0])) return null;
      const b = Number(w[0]);
      return Number.isSafeInteger(b) && b <= N6 ? b : null;
    }
    function vf(w, b = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), w !== null && f.searchParams.set("item", String(w)), history[`${b}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function Kr(w, { historyMode: b = "push", seed: f = null } = {}) {
      Bn?.abort();
      const F = ++jn, pe = new AbortController();
      Bn = pe, Dn.value = w, Fn.value = "overview", Te.value = f && Number(f.id) === w ? ff(f) : null, Te.value && hf(Te.value), Object.assign(ri, { loading: !0, error: "", missing: !1 }), b !== "none" && vf(w, b);
      try {
        const xe = Nu.value.replace("__ITEM_ID__", encodeURIComponent(String(w))), Be = await fetch(xe, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: pe.signal });
        if (F !== jn) return;
        if (!Be.ok) {
          Te.value = null, ri.missing = Be.status === 404, ri.error = Be.status === 404 ? t("library", "This publication is unavailable or you do not have access.") : t("library", "Could not load publication details. Try again.");
          return;
        }
        const et = await Be.json();
        if (F !== jn) return;
        if (typeof et?.item?.id != "number" || !Number.isSafeInteger(et.item.id) || et.item.id !== w) {
          Te.value = null, ri.missing = !1, ri.error = t("library", "Could not load publication details. Try again.");
          return;
        }
        Te.value = ff(et.item), hf(Te.value), await Pt();
      } catch (xe) {
        F === jn && xe?.name !== "AbortError" && (Te.value = null, ri.missing = !1, ri.error = t("library", "Could not load publication details. Try again."));
      } finally {
        F === jn && (ri.loading = !1, Bn = null);
      }
    }
    function Bi(w, b) {
      ju(), Fu = b?.currentTarget instanceof HTMLElement ? b.currentTarget : null, Kr(Number(w.id), { seed: w });
    }
    function Wr({ historyMode: w = "push", restoreFocus: b = !0 } = {}) {
      Ts = b ? Fu : null, Fu = null, Bn?.abort(), Bn = null, jn += 1, Dn.value = null, Te.value = null, Fn.value = "overview", Object.assign(ri, { loading: !1, error: "", missing: !1 }), w !== "none" && vf(null, w);
    }
    function bf() {
      Un.value ? (Mn.value?.$refs?.sidebar || Mn.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : of.value?.focus();
    }
    function Hg() {
      const w = Ts;
      if (Ts = null, ju(), Mu || !w?.isConnected) return;
      const b = Uu;
      Vr = window.requestAnimationFrame(() => {
        Vr = null, !(b !== Uu || Mu || rn.value || !w.isConnected) && w.focus();
      });
    }
    function ju() {
      Uu += 1, Vr !== null && (window.cancelAnimationFrame(Vr), Vr = null);
    }
    function Yr(w = wa) {
      Un.value = !!w?.matches, rn.value && Pt(bf);
    }
    function Ns(w) {
      w && Kr(Number(w.id), { seed: w });
    }
    const Zr = /* @__PURE__ */ U(null);
    let li = 0, br = null, gr = null, Xr = null, gf = !1, Jr = null;
    const Mt = /* @__PURE__ */ Lt({ loading: !1, error: "", completed: !1 });
    function Vg(w) {
      const b = c(new FormData(w));
      b.delete("publicationSearch"), b.delete("creatorSearch"), b.delete("subjectSearch"), b.delete("publisherSearch"), b.delete("classificationSearch"), b.delete("tagSearch"), b.delete("folderSearch"), b.delete("yearSearch");
      for (const f of Array.from(b.keys()))
        String(b.get(f) || "").trim() === "" && b.delete(f);
      return b.delete("page"), b.get("view") === "compact" && b.delete("view"), b.get("sort") === "title" && b.delete("sort"), b;
    }
    async function Hn(w, b, f) {
      const F = new URLSearchParams();
      for (const [Be, et] of Object.entries(x)) {
        const _i = String(et || "").trim();
        Be !== w && _i !== "" && !(Be === "sort" && _i === "title") && !(Be === "view" && _i === "compact") && F.set(Be, _i);
      }
      F.set(`${w}Search`, b);
      const pe = new AbortController();
      w === "creator" ? V = pe : w === "publisher" ? Le = pe : w === "subject" ? Ne = pe : w === "classification" ? at = pe : w === "tag" ? Rt = pe : w === "folder" ? q = pe : Ti = pe;
      const xe = w === "creator" ? Ur.value : w === "publisher" ? zr.value : w === "subject" ? jr.value : w === "classification" ? $u.value : w === "tag" ? ps.value : w === "folder" ? xu.value : Ou.value;
      try {
        const Be = await fetch(`${xe}?${F}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: pe.signal });
        if (!Be.ok) throw new Error(`${w} suggestions request failed: ${Be.status}`);
        const et = await Be.json(), _i = w === "creator" ? ne : w === "publisher" ? Oe : w === "subject" ? ke : w === "classification" ? dt : w === "tag" ? Mi : w === "folder" ? z : Yi, Qi = w === "creator" ? Me.value : w === "publisher" ? X.value : w === "subject" ? te.value : w === "classification" ? $e.value : w === "tag" ? yt.value : w === "folder" ? Ue.value : Gt.value;
        f === _i && Qi.trim() === b && (w === "creator" ? ct.value = Array.isArray(et.creators) ? et.creators : [] : w === "publisher" ? J.value = Array.isArray(et.publishers) ? et.publishers : [] : w === "subject" ? ue.value = Array.isArray(et.subjects) ? et.subjects : [] : w === "classification" ? qe.value = Array.isArray(et.classifications) ? et.classifications : [] : w === "tag" ? ai.value = Array.isArray(et.tags) ? et.tags : [] : w === "folder" ? T.value = Array.isArray(et.folders) ? et.folders : [] : $n.value = Array.isArray(et.years) ? et.years : []);
      } catch (Be) {
        Be?.name !== "AbortError" && (w === "creator" && f === ne && (ct.value = null), w === "publisher" && f === Oe && (J.value = null), w === "subject" && f === ke && (ue.value = null), w === "classification" && f === dt && (qe.value = null), w === "tag" && f === Mi && (ai.value = null), w === "folder" && f === z && (T.value = null), w === "year" && f === Yi && ($n.value = null));
      }
    }
    function qg(w, b) {
      return Hn("creator", w, b);
    }
    function Gg(w, b) {
      return Hn("publisher", w, b);
    }
    function Kg(w, b) {
      return Hn("subject", w, b);
    }
    function Wg(w, b) {
      return Hn("classification", w, b);
    }
    function Yg(w, b) {
      return Hn("tag", w, b);
    }
    function Zg(w, b) {
      return Hn("folder", w, b);
    }
    function Xg(w, b) {
      return Hn("year", w, b);
    }
    async function Jg(w, b) {
      const f = new URLSearchParams();
      for (const [pe, xe] of Object.entries(x)) {
        const Be = String(xe || "").trim();
        pe !== "publication" && Be !== "" && !(pe === "sort" && Be === "title") && !(pe === "view" && Be === "compact") && f.set(pe, Be);
      }
      f.set("publicationSearch", w);
      const F = new AbortController();
      L = F;
      try {
        const pe = await fetch(`${hs.value}?${f}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: F.signal
        });
        if (!pe.ok) throw new Error(`Publication suggestions request failed: ${pe.status}`);
        const xe = await pe.json();
        b === G && B.value.trim() === w && (le.value = Array.isArray(xe.publications) ? xe.publications : []);
      } catch (pe) {
        pe?.name !== "AbortError" && b === G && (le.value = null);
      } finally {
        b === G && (L = null);
      }
    }
    function Qg(w) {
      k.splice(0, k.length, ...(w.items || []).map((f) => ({ ...f }))), Ng();
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
      Object.assign(x, Zi, w.activeFilters || {}), x.view = y(x.view);
    }
    async function em() {
      if (m.surface !== "index") return;
      const w = li, b = JSON.stringify({ ...x }), f = new URLSearchParams();
      f.set("hydrate", "1");
      for (const [pe, xe] of Object.entries(x)) {
        const Be = String(xe || "").trim();
        Be !== "" && !(pe === "sort" && Be === "title") && !(pe === "view" && Be === "compact") && f.set(pe, Be);
      }
      const F = new AbortController();
      gr = F;
      try {
        const pe = await fetch(`${Rn.value}${f.size ? `?${f}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: F.signal
        });
        if (!pe.ok) return;
        const xe = await pe.json();
        if (w !== li || b !== JSON.stringify({ ...x })) return;
        for (const Be of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(xe, Be) && (m[Be] = xe[Be]);
      } catch (pe) {
        if (pe?.name !== "AbortError") return;
      } finally {
        gr === F && (gr = null), F.signal.aborted || mf();
      }
    }
    async function mf() {
      if (!Za.value || gf || Xr) return;
      const w = new AbortController();
      Xr = w;
      try {
        const b = await fetch(`${Rn.value}?hydrate=counts`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: w.signal });
        if (!b.ok || w.signal.aborted) return;
        const f = await b.json();
        f.smartViewCounts && (m.smartViewCounts = f.smartViewCounts), f.smartViewCountsPending && (m.smartViewCountsPending = f.smartViewCountsPending), gf = !0;
      } catch {
      } finally {
        Xr === w && (Xr = null);
      }
    }
    function tm() {
      gr?.abort(), gr = null;
    }
    async function Yt(w, b = null) {
      const f = w?.currentTarget?.tagName === "FORM" ? w.currentTarget : w?.currentTarget?.form;
      if (!f && !b?.params) return;
      const F = c(b?.params ?? Vg(f));
      if (On.value || Xa.value) {
        Qr(F, rt.value);
        return;
      }
      const pe = F.toString(), xe = pe ? `?${pe}` : "", Be = b?.generation ?? ++li, et = d(F), _i = b?.historyMode ?? (et ? "push" : "replace"), Qi = b?.historyTraversal === !0;
      if (Be !== li) return;
      tm(), b === null && br?.abort();
      const mr = new AbortController();
      br = mr, Mt.loading = !0, Mt.error = "", Mt.completed = !1;
      try {
        const ea = await fetch(Rn.value + xe, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: mr.signal
        });
        if (Be !== li) return;
        if (!ea.ok) {
          Qi ? Qr(F) : et ? Mt.error = t("library", "Could not load this review queue. Try again.") : Qr(F);
          return;
        }
        const wm = await ea.json();
        if (Be !== li) return;
        Qg(wm), mf(), Mt.completed = !0, _i !== "none" && (history[_i === "push" ? "pushState" : "replaceState"]({}, "", pe ? `?${pe}` : window.location.pathname), rn.value && Wr({ historyMode: "none" }));
      } catch (ea) {
        Be === li && ea?.name !== "AbortError" && (Qi ? Qr(F) : et ? Mt.error = t("library", "Could not load this review queue. Try again.") : Qr(F));
      } finally {
        Be === li && (br = null, Mt.loading = !1);
      }
    }
    function yf() {
      br?.abort();
      const w = new URLSearchParams(window.location.search), b = pf();
      w.has("item") && b === null && (w.delete("item"), history.replaceState({}, "", `${window.location.pathname}${w.toString() ? `?${w}` : ""}${window.location.hash}`)), b === null ? Wr({ historyMode: "none" }) : Kr(b, { historyMode: "none", seed: C.value.find((f) => Number(f.id) === b) || null }), w.delete("item"), Yt(null, {
        params: c(w),
        generation: ++li,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function Qr(w, b = window.location.pathname) {
      const f = document.createElement("form");
      f.method = "get", f.action = b, f.hidden = !0;
      for (const [F, pe] of w.entries()) {
        const xe = document.createElement("input");
        xe.type = "hidden", xe.name = F, xe.value = pe, f.appendChild(xe);
      }
      document.body.appendChild(f), f.submit(), f.remove();
    }
    function yi(w, b = null, f = null) {
      if (b === null) {
        Yt(w);
        return;
      }
      Yt({ currentTarget: w }, { params: b, generation: f });
    }
    async function im(w, b = B.value) {
      x.publication = String(b || "").trim(), B.value = x.publication, Z.value = !1, await Pt(), Yt({ currentTarget: w });
    }
    function _f(w, b) {
      im(b.currentTarget.form, w);
    }
    async function am(w) {
      x.q = String(W.value || "").trim(), x.publication = String(B.value || "").trim(), x.publisher = String(X.value || "").trim(), x.creator = String(Me.value || "").trim(), x.subject = String(te.value || "").trim(), x.folder = String(Ue.value || "").trim(), x.year = String(Gt.value || "").trim(), Z.value = !1, ae.value = !1, Xe.value = !1, re.value = !1, ie.value = !1, vi.value = !1, await Pt(), Yt({ currentTarget: w });
    }
    async function sn(w, b, f) {
      x[b] = String(f || "").trim(), b === "creator" ? (Me.value = x.creator, Xe.value = !1) : b === "publisher" ? (X.value = x.publisher, ae.value = !1) : b === "subject" ? (te.value = x.subject, re.value = !1) : b === "folder" ? (Ue.value = x.folder, ie.value = !1) : b === "classification" ? ($e.value = x.classification, Re.value = !1) : b === "tag" ? (yt.value = x.tag, gt.value = !1) : (Gt.value = x.year, vi.value = !1), ka[b] = -1, await Pt(), Yt({ currentTarget: w });
    }
    function wf(w) {
      am(w.currentTarget);
    }
    function kf(w, b) {
      sn(b.currentTarget.form, "creator", w);
    }
    function Sf(w, b) {
      sn(b.currentTarget.form, "publisher", w);
    }
    function Cf(w, b) {
      sn(b.currentTarget.form, "classification", w);
    }
    function Tf(w, b) {
      sn(b.currentTarget.form, "tag", w);
    }
    function Af(w, b) {
      sn(b.currentTarget.form, "folder", w);
    }
    function Ef(w, b = te.value) {
      window.clearTimeout(ce), Ne?.abort(), Ne = null, sn(w, "subject", b);
    }
    function nm(w) {
      Ef(w.currentTarget.form);
    }
    function $f(w, b) {
      Ef(b.currentTarget.form, w);
    }
    function xf(w, b) {
      sn(b.currentTarget.form, "year", w);
    }
    const ka = /* @__PURE__ */ Lt({
      publisher: -1,
      publication: -1,
      year: -1,
      creator: -1,
      tag: -1,
      folder: -1,
      subject: -1,
      classification: -1
    });
    function rm(w) {
      return ve.value;
    }
    function Bu(w, b, f) {
      return `library-${w}-${b}-suggestion-${f}`;
    }
    function Of(w, b) {
      const f = ka[b];
      return f >= 0 ? Bu(w, b, f) : void 0;
    }
    function Hu(w, b) {
      ae.value = b, b || (ka[w] = -1);
    }
    function Nf(w) {
      ka[w] = -1, Hu(w, !0);
    }
    function lm(w, b, f) {
      sn(f, w, b);
    }
    function Rf(w, b) {
      const f = rm();
      if (w.key === "Escape") {
        Hu(b, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(w.key) || f.length === 0) return;
      if (w.key === "Enter") {
        const xe = ka[b];
        if (xe < 0) return;
        w.preventDefault(), lm(b, f[xe], w.currentTarget.form);
        return;
      }
      w.preventDefault(), Hu(b, !0);
      const F = ka[b], pe = w.key === "ArrowDown" ? 1 : -1;
      ka[b] = F < 0 ? pe > 0 ? 0 : f.length - 1 : (F + pe + f.length) % f.length;
    }
    function If(w) {
      const b = new URLSearchParams();
      for (const [f, F] of Object.entries(x)) {
        const pe = String(F || "").trim();
        pe !== "" && f !== w && !(f === "sort" && pe === "title") && !(f === "view" && pe === "compact") && b.set(f, pe);
      }
      return b;
    }
    function el(w) {
      const b = If(w).toString();
      return `${rt.value}${b ? `?${b}` : ""}`;
    }
    function tl(w) {
      const b = If(w);
      x[w] = w === "sort" ? "title" : w === "view" ? "compact" : "", Yt(null, {
        params: b,
        generation: ++li
      });
    }
    function Lf() {
      const w = new URLSearchParams();
      return x.sort && x.sort !== "title" && w.set("sort", x.sort), x.view && x.view !== "compact" && w.set("view", x.view), w;
    }
    function Rs() {
      const w = Lf().toString();
      return `${rt.value}${w ? `?${w}` : ""}`;
    }
    function Is() {
      const w = Lf();
      for (const b of Object.keys(x))
        ["sort", "view"].includes(b) || (x[b] = Zi[b]);
      Yt(null, {
        params: w,
        generation: ++li
      }), !On.value && !Xa.value && Pt(() => {
        Hr.value?.focus?.();
      });
    }
    function sm(w) {
      const b = new URL(w.href, window.location.origin).searchParams;
      Yt(null, {
        params: b,
        generation: ++li
      });
    }
    function om() {
      return el("q");
    }
    const Vu = j(() => m.smartViewCounts || {}), um = j(() => new Set(m.smartViewCountsPending || []));
    function cm(w) {
      return um.value.has(w) || !Object.prototype.hasOwnProperty.call(Vu.value, w) ? "—" : Number(Vu.value[w] || 0);
    }
    const Pf = j(() => {
      const w = {};
      for (const [b, f] of Object.entries(x)) {
        const F = String(f || "").trim();
        F !== "" && !(b === "sort" && F === "title") && (w[b] = F);
      }
      return w;
    }), dm = j(() => JSON.stringify(Pf.value)), qu = j(() => Object.keys(Pf.value).length > 0);
    function Df(w) {
      if (!oe.includes(w)) return;
      x.view = w;
      const b = new URLSearchParams();
      for (const [f, F] of Object.entries(_(x))) {
        const pe = String(F || "").trim();
        pe !== "" && !(f === "sort" && pe === "title") && !(f === "view" && pe === "compact") && b.set(f, pe);
      }
      b.delete("page"), Yt(null, {
        params: b,
        generation: ++li
      });
    }
    function fm(w) {
      const b = c(window.location.search);
      for (const F of Object.keys(ys))
        b.delete(F);
      b.delete("page");
      for (const [F, pe] of Object.entries(w)) {
        const xe = F === "view" ? y(pe) : String(pe || "").trim();
        xe !== "" && !(F === "view" && xe === "compact") && b.set(F, xe);
      }
      const f = b.toString();
      return f ? `?${f}` : "?";
    }
    function hm(w) {
      return fm(w || {});
    }
    function pm(w) {
      const f = Object.entries(w && typeof w == "object" ? w : {}).filter(([, F]) => String(F ?? "").trim() !== "");
      return f.length === 0 ? !1 : f.every(([F, pe]) => String(x[F] ?? "") === String(pe ?? ""));
    }
    function vm(w) {
      return M.value.replace("__COLLECTION_ID__", encodeURIComponent(String(w || "0")));
    }
    function bm(w) {
      if (!ht.value) return;
      const b = document.createElement("form");
      b.method = "post", b.action = vm(w), b.className = "library-navigation-saved-collection-delete-form";
      const f = document.createElement("input");
      f.type = "hidden", f.name = "requesttoken", f.value = ht.value, b.appendChild(f), document.body.appendChild(b), b.submit();
    }
    function Ls(w) {
      return String(w || "").toUpperCase();
    }
    function gm(w) {
      return m.creatorLandingUrls?.[w] || `/apps/library/creators/${encodeURIComponent(w)}`;
    }
    function Ff(w) {
      const b = String(w?.publication || "").trim(), f = String(w?.publicationDate || "").trim();
      return b && f ? `${b} · ${f}` : b || f;
    }
    function Mf(w) {
      const b = String(w?.tagName || "").toLowerCase();
      return w?.isContentEditable || ["input", "select", "textarea", "button"].includes(b);
    }
    function mm(w) {
      w.key !== "/" || w.metaKey || w.ctrlKey || w.altKey || w.shiftKey || Mf(w.target) || (w.preventDefault(), Zr.value?.focus(), Zr.value?.select?.());
    }
    async function ym(w) {
      w.key !== "Escape" || document.activeElement !== Zr.value || x.q === "" || (w.preventDefault(), W.value = "", x.q = "", await Pt(), yi({ currentTarget: Zr.value }));
    }
    function _m(w) {
      if (!rn.value || w.metaKey || w.ctrlKey || w.altKey)
        return !1;
      if (w.key === "Escape")
        return w.preventDefault(), Wr(), !0;
      if (w.key === "Tab" && Un.value) {
        if (Mn.value?.focusTrap) return !1;
        const b = Mn.value?.$refs?.sidebar || Mn.value?.$el || Mn.value, f = [...b?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((xe) => !xe.hidden && xe.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const F = f[0], pe = f[f.length - 1];
        if (w.shiftKey && (document.activeElement === F || !b.contains(document.activeElement)))
          return w.preventDefault(), pe.focus(), !0;
        if (!w.shiftKey && (document.activeElement === pe || !b.contains(document.activeElement)))
          return w.preventDefault(), F.focus(), !0;
      }
      return Mf(w.target) ? !1 : w.key === "ArrowLeft" && As.value ? (w.preventDefault(), Ns(As.value), !0) : w.key === "ArrowRight" && Es.value ? (w.preventDefault(), Ns(Es.value), !0) : !1;
    }
    function Uf(w) {
      document.querySelector("dialog[open]") || _m(w) || (mm(w), ym(w));
    }
    Ct(() => {
      if (ba.value || Nn.value || Ui.value || Ja.value || va.value) return;
      window.addEventListener("keydown", Uf), window.addEventListener("popstate", yf), wa = window.matchMedia?.("(max-width: 1023px)") || null, Yr(), wa?.addEventListener ? wa.addEventListener("change", Yr) : wa?.addListener?.(Yr);
      const w = new URLSearchParams(window.location.search), b = pf();
      w.has("item") && b === null ? (w.delete("item"), history.replaceState({}, "", `${window.location.pathname}${w.toString() ? `?${w}` : ""}${window.location.hash}`)) : b !== null && Kr(b, { historyMode: "none", seed: C.value.find((f) => Number(f.id) === b) || null }), Jr = window.requestAnimationFrame(() => {
        Jr = null, em();
      });
    }), Ci(() => {
      Mu = !0, ju(), window.removeEventListener("keydown", Uf), window.removeEventListener("popstate", yf), window.clearTimeout(Y), window.clearTimeout(be), window.clearTimeout(ce), window.clearTimeout(xn), L?.abort(), V?.abort(), Ne?.abort(), Ti?.abort(), li += 1, Jr !== null && window.cancelAnimationFrame(Jr), Jr = null, gr?.abort(), Xr?.abort(), br?.abort(), br = null, jn += 1, Bn?.abort(), Bn = null, wa?.removeEventListener ? wa.removeEventListener("change", Yr) : wa?.removeListener?.(Yr), wa = null, Ts = null;
    });
    const il = /* @__PURE__ */ Lt({}), al = /* @__PURE__ */ Lt({});
    async function zf(w, b) {
      const f = b?.currentTarget?.closest?.("form") || b?.currentTarget;
      if (!f || !w?.starUrl || il[w.id]) return;
      const F = !!w.starred;
      il[w.id] = !0, al[w.id] = "", w.starred = !F;
      try {
        (await fetch(w.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (w.starred = F, al[w.id] = t("library", "Could not update star. Try again."));
      } catch {
        w.starred = F, al[w.id] = t("library", "Could not update star. Try again.");
      } finally {
        il[w.id] = !1;
      }
    }
    return (w, b) => (h(), De(u(cT), { "app-name": "library" }, {
      default: Se(() => [
        fe(u(qw), {
          "aria-label": u(t)("library", "Library navigation")
        }, {
          list: Se(() => [
            fe(u(Lb), null, {
              default: Se(() => [
                (h(!0), p(K, null, de(Fr.value, (f) => (h(), De(u(ia), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                (h(!0), p(K, null, de(fs.value, (f) => (h(), p("div", {
                  key: f.key,
                  class: "library-navigation-saved-collection-row"
                }, [
                  fe(u(ia), {
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
                    onClick: Ce((F) => bm(f.id), ["stop", "prevent"])
                  }, "✕", 8, bR)
                ]))), 128)),
                fe(u(ia), {
                  active: ba.value,
                  href: `${rt.value}?authors=1`,
                  name: u(t)("library", "Authors")
                }, null, 8, ["active", "href", "name"]),
                fe(u(ia), {
                  active: Nn.value,
                  href: `${rt.value}?series=1`,
                  name: u(t)("library", "Series")
                }, null, 8, ["active", "href", "name"]),
                fe(u(ia), {
                  active: Ui.value,
                  href: Qa.value,
                  name: u(t)("library", "Lists")
                }, null, 8, ["active", "href", "name"]),
                fe(u(ia), {
                  class: "library-navigation-create-list",
                  href: `${Qa.value}&new=1`,
                  name: u(t)("library", "Create a new list")
                }, null, 8, ["href", "name"]),
                (h(!0), p(K, null, de(_t.value, (f) => (h(), De(u(ia), {
                  key: `personal-list-${f.id}`,
                  class: "library-navigation-personal-list",
                  href: `${Qa.value}&listId=${f.id}`,
                  name: f.name
                }, null, 8, ["href", "name"]))), 128)),
                fe(u(ia), {
                  active: Ja.value,
                  href: `${rt.value}?infer=1`,
                  name: u(t)("library", "Extract metadata")
                }, null, 8, ["active", "href", "name"]),
                fe(u(ia), {
                  active: Za.value,
                  href: pa.value,
                  name: cr.value > 0 ? `${u(t)("library", "Review")} (${cr.value})` : u(t)("library", "Review")
                }, null, 8, ["active", "href", "name"]),
                fe(u(ia), {
                  class: "library-navigation-personal-list",
                  active: va.value,
                  href: `${rt.value}?duplicates=1`,
                  name: u(t)("library", "Possible duplicates")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Se(() => [
            !ba.value && !Nn.value && !Ui.value && !Ja.value && !va.value ? (h(), p("section", gR, [
              l("h2", mR, o(u(t)("library", "Filters")), 1),
              l("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": u(t)("library", "Catalogue search and filters"),
                onSubmit: Ce(wf, ["prevent"])
              }, [
                l("input", {
                  type: "hidden",
                  name: "folder",
                  value: x.folder
                }, null, 8, _R),
                (h(!0), p(K, null, de(nf.value, (f) => (h(), p("input", {
                  key: `sidebar-${f.key}`,
                  type: "hidden",
                  name: f.key,
                  value: f.value
                }, null, 8, wR))), 128)),
                x.sort && x.sort !== "title" ? (h(), p("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: x.sort
                }, null, 8, kR)) : A("", !0),
                x.view && x.view !== "compact" ? (h(), p("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: x.view
                }, null, 8, SR)) : A("", !0),
                l("fieldset", CR, [
                  l("legend", null, o(u(t)("library", "Content")), 1),
                  l("label", {
                    class: "library-quick-filter-search",
                    title: u(t)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                  }, [
                    l("span", null, [
                      ee(o(u(t)("library", "Search")) + " ", 1),
                      b[112] || (b[112] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                    ]),
                    ye(l("input", {
                      ref_key: "quickSearchInput",
                      ref: Zr,
                      "onUpdate:modelValue": b[0] || (b[0] = (f) => W.value = f),
                      "data-library-quick-search": "",
                      type: "search",
                      name: "q",
                      placeholder: u(t)("library", "Title, creator, description, filename or folder")
                    }, null, 8, AR), [
                      [ze, W.value]
                    ]),
                    mi("q") ? (h(), p("small", ER, o(zi("q")), 1)) : A("", !0)
                  ], 8, TR),
                  l("label", null, [
                    ee(o(u(t)("library", "Type")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[1] || (b[1] = (f) => x.type = f),
                      name: "type",
                      onChange: b[2] || (b[2] = (f) => yi(f))
                    }, [
                      l("option", $R, o(u(t)("library", "All types")), 1),
                      (h(!0), p(K, null, de(R.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(f), 9, xR))), 128))
                    ], 544), [
                      [nt, x.type]
                    ])
                  ]),
                  l("div", OR, [
                    l("label", NR, o(u(t)("library", "Publisher")), 1),
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
                      "aria-activedescendant": Of("desktop", "publisher"),
                      "aria-expanded": ae.value && ve.value.length > 0 ? "true" : "false",
                      onFocus: b[4] || (b[4] = (f) => Nf("publisher")),
                      onKeydown: b[5] || (b[5] = (f) => Rf(f, "publisher"))
                    }, null, 40, RR), [
                      [ze, X.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publisher",
                      value: x.publisher
                    }, null, 8, IR),
                    mi("publisher") ? (h(), p("small", LR, o(zi("publisher")), 1)) : A("", !0),
                    ae.value && ve.value.length > 0 ? (h(), p("ul", PR, [
                      (h(!0), p(K, null, de(ve.value, (f, F) => (h(), p("li", {
                        id: Bu("desktop", "publisher", F),
                        key: f,
                        role: "option",
                        "aria-selected": ka.publisher === F ? "true" : "false"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publisher-suggestion",
                          onMousedown: b[6] || (b[6] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (pe) => Sf(f, pe)
                        }, o(f), 41, FR)
                      ], 8, DR))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-publisher-apply", _a("publisher")])
                    }, o(u(t)("library", "Apply publisher")), 3)
                  ]),
                  l("div", MR, [
                    l("label", UR, o(u(t)("library", "Series / periodical")), 1),
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
                      onKeydown: b[9] || (b[9] = ft((f) => Z.value = !1, ["escape"]))
                    }, null, 40, zR), [
                      [ze, B.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publication",
                      value: x.publication
                    }, null, 8, jR),
                    mi("publication") ? (h(), p("small", BR, o(zi("publication")), 1)) : A("", !0),
                    Z.value && H.value.length > 0 ? (h(), p("ul", HR, [
                      (h(!0), p(K, null, de(H.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publication-suggestion",
                          onMousedown: b[10] || (b[10] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => _f(f, F)
                        }, o(f), 41, VR)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-publication-apply", _a("publication")])
                    }, o(u(t)("library", "Apply series")), 3)
                  ]),
                  l("div", qR, [
                    l("label", GR, o(u(t)("library", "Publication year")), 1),
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
                      "aria-expanded": vi.value && Wi.value.length > 0 ? "true" : "false",
                      onFocus: b[12] || (b[12] = (f) => vi.value = !0),
                      onKeydown: b[13] || (b[13] = ft((f) => vi.value = !1, ["escape"]))
                    }, null, 40, KR), [
                      [ze, Gt.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "year",
                      value: x.year
                    }, null, 8, WR),
                    mi("year") ? (h(), p("small", YR, o(zi("year")), 1)) : A("", !0),
                    vi.value && Wi.value.length > 0 ? (h(), p("ul", ZR, [
                      (h(!0), p(K, null, de(Wi.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-year-suggestion",
                          onMousedown: b[14] || (b[14] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => xf(f, F)
                        }, o(f), 41, XR)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-year-apply", _a("year")])
                    }, o(u(t)("library", "Apply year")), 3)
                  ]),
                  l("div", JR, [
                    l("label", QR, o(u(t)("library", "Creator")), 1),
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
                      "aria-expanded": Xe.value && we.value.length > 0 ? "true" : "false",
                      onFocus: b[16] || (b[16] = (f) => Xe.value = !0),
                      onKeydown: b[17] || (b[17] = ft((f) => Xe.value = !1, ["escape"]))
                    }, null, 40, eI), [
                      [ze, Me.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "creator",
                      value: x.creator
                    }, null, 8, tI),
                    mi("creator") ? (h(), p("small", iI, o(zi("creator")), 1)) : A("", !0),
                    Xe.value && we.value.length > 0 ? (h(), p("ul", aI, [
                      (h(!0), p(K, null, de(we.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-creator-suggestion",
                          onMousedown: b[18] || (b[18] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => kf(f, F)
                        }, o(f), 41, nI)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-creator-apply", _a("creator")])
                    }, o(u(t)("library", "Apply creator")), 3)
                  ]),
                  l("div", rI, [
                    l("label", lI, o(u(t)("library", "Nextcloud tag")), 1),
                    ye(l("input", {
                      id: "library-tag-search",
                      "onUpdate:modelValue": b[19] || (b[19] = (f) => yt.value = f),
                      type: "search",
                      name: "tagSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search tags"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-tag-suggestions",
                      "aria-expanded": gt.value && pi.value.length > 0 ? "true" : "false",
                      onFocus: b[20] || (b[20] = (f) => gt.value = !0),
                      onKeydown: b[21] || (b[21] = ft((f) => gt.value = !1, ["escape"]))
                    }, null, 40, sI), [
                      [ze, yt.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "tag",
                      value: x.tag
                    }, null, 8, oI),
                    gt.value && pi.value.length > 0 ? (h(), p("ul", uI, [
                      (h(!0), p(K, null, de(pi.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-tag-suggestion",
                          onMousedown: b[22] || (b[22] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => Tf(f, F)
                        }, o(f), 41, cI)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-tag-apply", _a("tag")])
                    }, o(u(t)("library", "Apply tag")), 3)
                  ]),
                  l("label", null, [
                    ee(o(u(t)("library", "Format")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[23] || (b[23] = (f) => x.format = f),
                      name: "format",
                      onChange: b[24] || (b[24] = (f) => yi(f))
                    }, [
                      l("option", dI, o(u(t)("library", "All formats")), 1),
                      (h(!0), p(K, null, de($.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(Ls(f)), 9, fI))), 128))
                    ], 544), [
                      [nt, x.format]
                    ])
                  ])
                ]),
                l("fieldset", hI, [
                  l("legend", null, o(u(t)("library", "Location")), 1),
                  l("label", null, [
                    ee(o(u(t)("library", "Shelf")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[25] || (b[25] = (f) => x.shelf = f),
                      name: "shelf",
                      onChange: b[26] || (b[26] = (f) => yi(f))
                    }, [
                      l("option", pI, o(u(t)("library", "All shelves")), 1),
                      (h(!0), p(K, null, de(S.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(f), 9, vI))), 128))
                    ], 544), [
                      [nt, x.shelf]
                    ])
                  ]),
                  l("div", bI, [
                    l("label", gI, o(u(t)("library", "Folder")), 1),
                    ye(l("input", {
                      id: "library-folder-search",
                      "onUpdate:modelValue": b[27] || (b[27] = (f) => Ue.value = f),
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
                      onKeydown: b[29] || (b[29] = ft((f) => ie.value = !1, ["escape"]))
                    }, null, 40, mI), [
                      [ze, Ue.value]
                    ]),
                    ie.value && O.value.length > 0 ? (h(), p("ul", yI, [
                      (h(!0), p(K, null, de(O.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-folder-suggestion",
                          onMousedown: b[30] || (b[30] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => Af(f, F)
                        }, o(f), 41, _I)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-folder-apply", _a("folder")])
                    }, o(u(t)("library", "Apply folder")), 3)
                  ])
                ]),
                l("fieldset", wI, [
                  l("legend", null, o(u(t)("library", "Review")), 1),
                  l("label", null, [
                    ee(o(u(t)("library", "Scan status")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[31] || (b[31] = (f) => x.status = f),
                      name: "status",
                      onChange: b[32] || (b[32] = (f) => yi(f))
                    }, [
                      l("option", kI, o(u(t)("library", "All scan statuses")), 1),
                      (h(!0), p(K, null, de(I.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(f), 9, SI))), 128))
                    ], 544), [
                      [nt, x.status]
                    ])
                  ]),
                  l("label", null, [
                    ee(o(u(t)("library", "Workflow status")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[33] || (b[33] = (f) => x.workflowStatus = f),
                      name: "workflowStatus",
                      onChange: b[34] || (b[34] = (f) => yi(f))
                    }, [
                      l("option", CI, o(u(t)("library", "All workflow statuses")), 1),
                      (h(!0), p(K, null, de(he.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(f), 9, TI))), 128))
                    ], 544), [
                      [nt, x.workflowStatus]
                    ])
                  ]),
                  l("div", AI, [
                    l("label", EI, o(u(t)("library", "Subject")), 1),
                    ye(l("input", {
                      id: "library-subject-search",
                      "onUpdate:modelValue": b[35] || (b[35] = (f) => te.value = f),
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
                      onKeydown: b[37] || (b[37] = ft((f) => re.value = !1, ["escape"]))
                    }, null, 40, $I), [
                      [ze, te.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "subject",
                      value: x.subject
                    }, null, 8, xI),
                    mi("subject") ? (h(), p("small", OI, o(zi("subject")), 1)) : A("", !0),
                    re.value && me.value.length > 0 ? (h(), p("ul", NI, [
                      (h(!0), p(K, null, de(me.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-subject-suggestion",
                          onMousedown: b[38] || (b[38] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => $f(f, F)
                        }, o(f), 41, RI)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "button",
                      class: Ee(["button secondary library-subject-apply", _a("subject")]),
                      onClick: nm
                    }, o(u(t)("library", "Apply subject")), 3)
                  ]),
                  l("div", II, [
                    l("label", LI, o(u(t)("library", "Classification")), 1),
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
                      onKeydown: b[41] || (b[41] = ft((f) => Re.value = !1, ["escape"]))
                    }, null, 40, PI), [
                      [ze, $e.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "classification",
                      value: x.classification
                    }, null, 8, DI),
                    Re.value && Ze.value.length > 0 ? (h(), p("ul", FI, [
                      (h(!0), p(K, null, de(Ze.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-classification-suggestion",
                          onMousedown: b[42] || (b[42] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => Cf(f, F)
                        }, o(f), 41, MI)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-classification-apply", _a("classification")])
                    }, o(u(t)("library", "Apply classification")), 3)
                  ]),
                  l("label", null, [
                    ee(o(u(t)("library", "Suggested updates")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[43] || (b[43] = (f) => x.scannerConflicts = f),
                      name: "scannerConflicts",
                      onChange: b[44] || (b[44] = (f) => yi(f))
                    }, [
                      l("option", UI, o(u(t)("library", "All metadata")), 1),
                      l("option", zI, o(u(t)("library", "Suggested updates")), 1)
                    ], 544), [
                      [nt, x.scannerConflicts]
                    ])
                  ])
                ]),
                l("fieldset", jI, [
                  l("legend", null, o(u(t)("library", "Personal / display")), 1)
                ]),
                l("button", BI, o(u(t)("library", "Apply filters")), 1)
              ], 40, yR)
            ])) : A("", !0),
            l("a", {
              class: "library-navigation-settings-link",
              href: Ya.value
            }, [
              b[113] || (b[113] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, o(u(t)("library", "Settings")), 1)
            ], 8, HI)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        fe(u(sw), null, {
          default: Se(() => [
            l("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: m.language || "en",
              dir: m.direction || "ltr",
              tabindex: "-1"
            }, [
              va.value ? (h(), De(c4, {
                key: 0,
                "request-token": ht.value,
                "review-url": pa.value
              }, null, 8, ["request-token", "review-url"])) : Ja.value ? (h(), De(vR, {
                key: 1,
                "request-token": ht.value
              }, null, 8, ["request-token"])) : ba.value ? (h(), De(tx, {
                key: 2,
                "request-token": ht.value,
                "catalogue-url": rt.value
              }, null, 8, ["request-token", "catalogue-url"])) : Nn.value ? (h(), De(Px, {
                key: 3,
                "request-token": ht.value,
                "catalogue-url": rt.value
              }, null, 8, ["request-token", "catalogue-url"])) : Ui.value ? (h(), De(BA, {
                key: 4,
                onChanged: cs,
                "request-token": ht.value,
                "catalogue-url": rt.value,
                "lists-url": Qa.value
              }, null, 8, ["request-token", "catalogue-url", "lists-url"])) : (h(), p(K, { key: 5 }, [
                Wt.value.length > 0 ? (h(), p("nav", {
                  key: 0,
                  class: "library-active-filter-chips",
                  "aria-label": u(t)("library", "Active filters")
                }, [
                  l("span", null, o(u(t)("library", "Active filters")), 1),
                  (h(!0), p(K, null, de(Wt.value, (f) => (h(), p("a", {
                    key: f.key,
                    href: el(f.key),
                    class: "library-filter-chip",
                    "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                    title: f.title,
                    onClick: Ce((F) => tl(f.key), ["prevent"])
                  }, [
                    l("strong", null, [
                      ee(o(f.label), 1),
                      f.displayValue ? (h(), p(K, { key: 0 }, [
                        ee(":")
                      ], 64)) : A("", !0)
                    ]),
                    f.displayValue ? (h(), p(K, { key: 0 }, [
                      b[114] || (b[114] = ee(o(" "), -1)),
                      l("span", {
                        class: "library-filter-chip-value",
                        title: f.value
                      }, o(f.displayValue), 9, KI)
                    ], 64)) : A("", !0),
                    b[115] || (b[115] = ee()),
                    b[116] || (b[116] = l("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, GI))), 128)),
                  pt.value.length > 0 ? (h(), p("a", {
                    key: 0,
                    href: Rs(),
                    class: "library-active-filter-clear-all",
                    onClick: Ce(Is, ["prevent"])
                  }, o(u(t)("library", "Clear all")), 9, WI)) : A("", !0)
                ], 8, qI)) : A("", !0),
                Za.value ? (h(), p("section", YI, [
                  l("header", ZI, [
                    l("p", XI, o(u(t)("library", "Metadata cleanup")), 1),
                    l("h2", JI, o(u(t)("library", "Review")), 1),
                    fe(He, {
                      text: u(t)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")
                    }, {
                      default: Se(() => [
                        ee(o(u(t)("library", "Metadata cleanup")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"])
                  ]),
                  l("nav", {
                    class: "library-review-queues",
                    "aria-label": u(t)("library", "Review queues")
                  }, [
                    (h(!0), p(K, null, de(Bg.value, (f) => (h(), p("a", {
                      key: f.key,
                      class: Ee(["library-review-queue-link", { active: f.active }]),
                      href: f.href,
                      "aria-current": f.active ? "page" : void 0,
                      onClick: Ce((F) => sm(f), ["prevent"])
                    }, [
                      l("span", null, o(f.label), 1),
                      l("b", null, o(cm(f.countKey)), 1)
                    ], 10, eL))), 128))
                  ], 8, QI),
                  l("form", {
                    method: "get",
                    class: "library-review-filter-form",
                    "aria-label": u(t)("library", "Filter current review queue"),
                    onSubmit: Ce(Yt, ["prevent"])
                  }, [
                    (h(!0), p(K, null, de(xg.value, (f) => (h(), p("input", {
                      key: `review-${f.key}`,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, iL))), 128)),
                    l("label", null, [
                      ee(o(u(t)("library", "Search within this queue")), 1),
                      ye(l("input", {
                        "onUpdate:modelValue": b[45] || (b[45] = (f) => x.q = f),
                        type: "search",
                        name: "q"
                      }, null, 512), [
                        [ze, x.q]
                      ])
                    ]),
                    l("button", aL, o(u(t)("library", "Apply")), 1)
                  ], 40, tL),
                  l("div", {
                    class: "library-review-request-status",
                    role: "status",
                    "aria-live": "polite",
                    "aria-busy": Mt.loading ? "true" : "false"
                  }, [
                    Mt.loading ? (h(), p("span", rL, o(u(t)("library", "Loading review queue…")), 1)) : A("", !0)
                  ], 8, nL),
                  Mt.error ? (h(), p("p", lL, o(Mt.error), 1)) : A("", !0),
                  ln.value.enabled ? (h(), p("section", sL, [
                    l("div", oL, [
                      l("p", uL, o(u(t)("library", "Metadata review workbench")), 1),
                      l("h3", {
                        id: "library-metadata-review-workbench-heading",
                        title: u(t)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                      }, o(u(t)("library", "Review next suggestion")), 9, cL)
                    ]),
                    ln.value.item ? (h(), p("article", dL, [
                      l("header", null, [
                        l("strong", null, [
                          l("bdi", fL, o(ln.value.item.title), 1)
                        ]),
                        l("span", hL, [
                          l("bdi", pL, o(ln.value.item.cachedPath), 1)
                        ])
                      ]),
                      l("div", vL, [
                        (h(!0), p(K, null, de(ln.value.fields, (f) => (h(), p("article", {
                          key: f.field,
                          class: "library-metadata-review-field"
                        }, [
                          l("h4", null, [
                            l("bdi", bL, o(f.field), 1)
                          ]),
                          l("dl", null, [
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Current value")), 1),
                              l("dd", null, [
                                l("bdi", gL, o(f.currentValue || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Suggested value")), 1),
                              l("dd", null, [
                                l("bdi", mL, o(f.scannerCandidate || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Path-based suggestion")), 1),
                              l("dd", null, [
                                l("bdi", yL, o(f.pathTemplateCandidate || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Sidecar value")), 1),
                              l("dd", null, [
                                l("bdi", _L, o(f.sidecarValue || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Source")), 1),
                              l("dd", null, [
                                l("bdi", wL, o(f.sourceProvenance || "—"), 1)
                              ])
                            ])
                          ]),
                          l("form", {
                            method: "post",
                            action: ln.value.item.resetFieldUrl,
                            class: "library-metadata-review-accept-form"
                          }, [
                            l("input", {
                              type: "hidden",
                              name: "requesttoken",
                              value: ht.value
                            }, null, 8, SL),
                            l("input", {
                              type: "hidden",
                              name: "field",
                              value: f.field
                            }, null, 8, CL),
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
                            }, o(u(t)("library", "Use suggested value")), 9, TL)
                          ], 8, kL)
                        ]))), 128))
                      ]),
                      l("footer", AL, [
                        l("a", {
                          class: "button secondary",
                          href: ln.value.item.detailsUrl
                        }, o(u(t)("library", "Maintenance")), 9, EL),
                        l("a", {
                          class: "button secondary",
                          href: ln.value.skipUrl
                        }, o(u(t)("library", "Skip to next suggestion")), 9, $L)
                      ])
                    ])) : A("", !0)
                  ])) : A("", !0),
                  C.value.length === 0 && !Mt.loading && !Mt.error ? (h(), p("div", xL, [
                    l("h3", null, o(u(t)("library", "This review queue is clear")), 1),
                    l("p", null, o(u(t)("library", "Choose another queue or return to the catalogue.")), 1),
                    l("a", {
                      class: "button primary",
                      href: rt.value
                    }, o(u(t)("library", "Back to Library")), 9, OL)
                  ])) : (h(), p("div", {
                    key: 3,
                    class: "library-review-results",
                    role: "region",
                    "aria-label": u(t)("library", "Review results")
                  }, [
                    (h(!0), p(K, null, de(C.value, (f) => (h(), p("article", {
                      key: f.id,
                      class: "library-review-result-card"
                    }, [
                      l("div", null, [
                        l("h3", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (F) => Bi(f, F)
                          }, [
                            l("bdi", IL, o(f.title), 1)
                          ], 8, RL)
                        ]),
                        f.creators ? (h(), p("p", LL, [
                          l("bdi", PL, o(f.displayCreators ?? f.creators), 1)
                        ])) : A("", !0),
                        f.scanError ? (h(), p("p", DL, [
                          l("bdi", FL, o(f.scanError), 1)
                        ])) : A("", !0)
                      ]),
                      l("p", null, [
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (F) => Bi(f, F)
                        }, o(u(t)("library", "Details")), 9, ML),
                        l("a", {
                          class: "button primary",
                          href: f.openUrl,
                          onClick: (F) => ma(f, F)
                        }, o(u(t)("library", "Open")), 9, UL)
                      ])
                    ]))), 128))
                  ], 8, NL)),
                  C.value.length > 0 ? (h(), p("nav", {
                    key: 4,
                    class: "library-pagination",
                    "aria-label": u(t)("library", "Review pagination")
                  }, [
                    Q.value.previousUrl ? (h(), p("a", {
                      key: 0,
                      href: Q.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, jL)) : (h(), p("span", BL, o(u(t)("library", "Previous")), 1)),
                    l("span", null, [
                      ee(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                      Q.value.total > 0 ? (h(), p("span", HL, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : A("", !0)
                    ]),
                    Q.value.nextUrl ? (h(), p("a", {
                      key: 2,
                      href: Q.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, VL)) : (h(), p("span", qL, o(u(t)("library", "Next")), 1))
                  ], 8, zL)) : A("", !0)
                ])) : On.value ? (h(), p("main", GL, [
                  l("header", KL, [
                    l("p", WL, o(u(t)("library", "Your library")), 1),
                    l("h2", YL, o(u(t)("library", "Home")), 1)
                  ]),
                  pt.value.length > 0 ? (h(), p("aside", {
                    key: 0,
                    class: "library-active-filter-callout",
                    "aria-label": u(t)("library", "Active catalogue filters")
                  }, [
                    l("h3", null, o(u(t)("library", "Active catalogue filters")), 1),
                    l("nav", {
                      class: "library-active-filter-callout-chips",
                      "aria-label": u(t)("library", "Active catalogue filters")
                    }, [
                      (h(!0), p(K, null, de(pt.value, (f) => (h(), p("a", {
                        key: `callout-${f.key}`,
                        href: el(f.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                        onClick: Ce((F) => tl(f.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          ee(o(f.label), 1),
                          f.displayValue ? (h(), p(K, { key: 0 }, [
                            ee(":")
                          ], 64)) : A("", !0)
                        ]),
                        f.displayValue ? (h(), p(K, { key: 0 }, [
                          b[118] || (b[118] = ee(o(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: f.value
                          }, o(f.displayValue), 9, QL)
                        ], 64)) : A("", !0),
                        b[119] || (b[119] = ee()),
                        b[120] || (b[120] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, JL))), 128))
                    ], 8, XL),
                    l("p", eP, [
                      l("a", {
                        class: "button primary library-filter-callout-view",
                        href: ya.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, tP),
                      l("a", {
                        class: "button secondary",
                        href: Rs(),
                        onClick: Ce(Is, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, iP)
                    ])
                  ], 8, ZL)) : A("", !0),
                  l("section", aP, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", nP, [
                          fe(He, {
                            text: u(t)("library", "Pick up publications you opened recently.")
                          }, {
                            default: Se(() => [
                              ee(o(u(t)("library", "Continue reading")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", {
                        href: `${rt.value}?recentlyOpened=1&sort=lastOpened`
                      }, o(u(t)("library", "View all")), 9, rP)
                    ]),
                    Ss.value.continueReading.length ? (h(), p("div", lP, [
                      (h(!0), p(K, null, de(Ss.value.continueReading, (f) => (h(), p("article", {
                        key: `continue-${f.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                          onClick: (F) => Bi(f, F)
                        }, [
                          l("span", oP, [
                            l("img", {
                              class: "library-cover-image",
                              src: f.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, uP)
                          ])
                        ], 8, sP),
                        l("div", cP, [
                          l("h4", null, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => Bi(f, F)
                            }, [
                              l("bdi", fP, o(f.title), 1)
                            ], 8, dP)
                          ]),
                          f.creators ? (h(), p("p", hP, [
                            l("bdi", pP, o(f.displayCreators ?? f.creators), 1)
                          ])) : A("", !0),
                          l("a", {
                            class: "library-cover-read",
                            href: f.openUrl,
                            onClick: (F) => ma(f, F)
                          }, o(u(t)("library", "Open")), 9, vP)
                        ])
                      ]))), 128))
                    ])) : (h(), p("p", bP, o(u(t)("library", "Publications you open will appear here.")), 1))
                  ]),
                  l("section", gP, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", mP, [
                          fe(He, {
                            text: u(t)("library", "The latest publications indexed from your Library roots.")
                          }, {
                            default: Se(() => [
                              ee(o(u(t)("library", "Recently added")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", {
                        href: `${rt.value}?sort=recent`
                      }, o(u(t)("library", "View all")), 9, yP)
                    ]),
                    Ss.value.recentlyAdded.length ? (h(), p("div", _P, [
                      (h(!0), p(K, null, de(Ss.value.recentlyAdded, (f) => (h(), p("article", {
                        key: `recent-${f.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                          onClick: (F) => Bi(f, F)
                        }, [
                          l("span", kP, [
                            l("img", {
                              class: "library-cover-image",
                              src: f.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, SP)
                          ])
                        ], 8, wP),
                        l("div", CP, [
                          l("h4", null, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => Bi(f, F)
                            }, [
                              l("bdi", AP, o(f.title), 1)
                            ], 8, TP)
                          ]),
                          f.creators ? (h(), p("p", EP, [
                            l("bdi", $P, o(f.displayCreators ?? f.creators), 1)
                          ])) : A("", !0),
                          l("a", {
                            class: "library-cover-read",
                            href: f.openUrl,
                            onClick: (F) => ma(f, F)
                          }, o(u(t)("library", "Open")), 9, xP)
                        ])
                      ]))), 128))
                    ])) : (h(), p("p", OP, o(u(t)("library", "Recently indexed publications will appear here.")), 1))
                  ]),
                  l("section", NP, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", RP, [
                          fe(He, {
                            text: u(t)("library", "Browse the folders that organize your publications.")
                          }, {
                            default: Se(() => [
                              ee(o(u(t)("library", "Shelves")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", { href: bi.value }, o(u(t)("library", "View all")), 9, IP)
                    ]),
                    rf.value.length ? (h(), p("nav", {
                      key: 0,
                      class: "library-home-shelves",
                      "aria-label": u(t)("library", "Shelves")
                    }, [
                      (h(!0), p(K, null, de(rf.value, (f) => (h(), p("a", {
                        key: f.shelf,
                        href: f.url
                      }, [
                        l("strong", null, [
                          l("bdi", DP, o(f.shelf), 1)
                        ]),
                        l("span", null, o(u(Ot)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                      ], 8, PP))), 128))
                    ], 8, LP)) : (h(), p("p", FP, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1))
                  ]),
                  Number(Du.value.count || 0) > 0 ? (h(), p("aside", MP, [
                    l("div", null, [
                      l("h3", UP, o(u(t)("library", "Needs attention")), 1),
                      l("p", zP, o(u(Ot)("library", "%n publication needs better details.", "%n publications need better details.", Number(Du.value.count || 0))), 1)
                    ]),
                    l("a", {
                      class: "button tertiary",
                      href: Du.value.url
                    }, o(u(t)("library", "Review")), 9, jP)
                  ])) : A("", !0)
                ])) : Xa.value ? (h(), p("main", BP, [
                  l("header", HP, [
                    l("p", VP, o(u(t)("library", "Your library")), 1),
                    l("h2", qP, [
                      fe(He, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: Se(() => [
                          ee(o(u(t)("library", "Shelves")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ])
                  ]),
                  pt.value.length > 0 ? (h(), p("aside", {
                    key: 0,
                    class: "library-active-filter-callout",
                    "aria-label": u(t)("library", "Active catalogue filters")
                  }, [
                    l("h3", null, o(u(t)("library", "Active catalogue filters")), 1),
                    l("nav", {
                      class: "library-active-filter-callout-chips",
                      "aria-label": u(t)("library", "Active catalogue filters")
                    }, [
                      (h(!0), p(K, null, de(pt.value, (f) => (h(), p("a", {
                        key: `callout-${f.key}`,
                        href: el(f.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                        onClick: Ce((F) => tl(f.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          ee(o(f.label), 1),
                          f.displayValue ? (h(), p(K, { key: 0 }, [
                            ee(":")
                          ], 64)) : A("", !0)
                        ]),
                        f.displayValue ? (h(), p(K, { key: 0 }, [
                          b[121] || (b[121] = ee(o(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: f.value
                          }, o(f.displayValue), 9, YP)
                        ], 64)) : A("", !0),
                        b[122] || (b[122] = ee()),
                        b[123] || (b[123] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, WP))), 128))
                    ], 8, KP),
                    l("p", ZP, [
                      l("a", {
                        class: "button primary library-filter-callout-view",
                        href: ya.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, XP),
                      l("a", {
                        class: "button secondary",
                        href: Rs(),
                        onClick: Ce(Is, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, JP)
                    ])
                  ], 8, GP)) : A("", !0),
                  lf.value.length ? (h(), p("nav", {
                    key: 1,
                    "aria-label": u(t)("library", "Shelves")
                  }, [
                    l("ul", e8, [
                      (h(!0), p(K, null, de(lf.value, (f) => (h(), De(kT, {
                        key: f.id,
                        node: f,
                        "children-url": en.value
                      }, null, 8, ["node", "children-url"]))), 128))
                    ])
                  ], 8, QP)) : (h(), p("section", t8, [
                    l("h3", null, [
                      fe(He, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: Se(() => [
                          ee(o(u(t)("library", "Shelves")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    l("p", i8, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1),
                    l("p", a8, [
                      l("a", {
                        class: "button primary",
                        href: Ya.value
                      }, o(u(t)("library", "Add a Library root")), 9, n8),
                      l("a", {
                        class: "button secondary",
                        href: rt.value
                      }, o(u(t)("library", "All publications")), 9, r8)
                    ])
                  ]))
                ])) : (h(), p("section", {
                  key: 4,
                  id: "library-catalogue",
                  class: Ee(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": Mt.loading }]),
                  "aria-labelledby": "library-catalogue-heading",
                  "aria-busy": Mt.loading ? "true" : "false"
                }, [
                  l("header", s8, [
                    Ai.value ? (h(), p("p", o8, o(gs.value), 1)) : A("", !0),
                    l("h2", {
                      id: "library-catalogue-heading",
                      ref_key: "catalogueHeadingElement",
                      ref: Hr,
                      tabindex: "-1"
                    }, o(gi.value), 513)
                  ]),
                  l("details", {
                    class: "library-mobile-filter-panel",
                    "data-library-control": "filter",
                    onToggle: Ag
                  }, [
                    l("summary", {
                      class: "library-mobile-filter-trigger",
                      "aria-label": Cg.value
                    }, [
                      l("span", c8, o(u(Ot)("library", "%n item", "%n items", Number(Q.value.total || 0))), 1),
                      l("strong", null, o(Sg.value), 1)
                    ], 8, u8),
                    l("form", {
                      method: "get",
                      class: "library-mobile-filter-form",
                      "aria-label": u(t)("library", "Mobile catalogue filters"),
                      onSubmit: Ce(wf, ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "folder",
                        value: x.folder
                      }, null, 8, f8),
                      (h(!0), p(K, null, de(nf.value, (f) => (h(), p("input", {
                        key: `mobile-hidden-${f.key}`,
                        type: "hidden",
                        name: f.key,
                        value: f.value
                      }, null, 8, h8))), 128)),
                      l("fieldset", p8, [
                        l("legend", null, o(u(t)("library", "Content")), 1),
                        l("label", v8, [
                          l("span", null, o(u(t)("library", "Search")), 1),
                          ye(l("input", {
                            ref_key: "mobileFilterSearchInput",
                            ref: ms,
                            "onUpdate:modelValue": b[46] || (b[46] = (f) => W.value = f),
                            "data-library-mobile-filter-search": "",
                            type: "search",
                            name: "q",
                            placeholder: u(t)("library", "Title, creator, description, filename or folder")
                          }, null, 8, b8), [
                            [ze, W.value]
                          ])
                        ]),
                        l("label", null, [
                          ee(o(u(t)("library", "Type")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[47] || (b[47] = (f) => x.type = f),
                            name: "type",
                            onChange: b[48] || (b[48] = (f) => yi(f))
                          }, [
                            l("option", g8, o(u(t)("library", "All types")), 1),
                            (h(!0), p(K, null, de(R.value, (f) => (h(), p("option", {
                              key: `mobile-type-${f}`,
                              value: f
                            }, o(f), 9, m8))), 128))
                          ], 544), [
                            [nt, x.type]
                          ])
                        ]),
                        l("div", y8, [
                          l("label", _8, o(u(t)("library", "Publisher")), 1),
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
                            "aria-activedescendant": Of("mobile", "publisher"),
                            "aria-expanded": ae.value && ve.value.length > 0 ? "true" : "false",
                            onFocus: b[50] || (b[50] = (f) => Nf("publisher")),
                            onKeydown: b[51] || (b[51] = (f) => Rf(f, "publisher"))
                          }, null, 40, w8), [
                            [ze, X.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "publisher",
                            value: x.publisher
                          }, null, 8, k8),
                          mi("publisher") ? (h(), p("small", S8, o(zi("publisher")), 1)) : A("", !0),
                          Ei.value && ae.value && ve.value.length > 0 ? (h(), p("ul", C8, [
                            (h(!0), p(K, null, de(ve.value, (f, F) => (h(), p("li", {
                              id: Bu("mobile", "publisher", F),
                              key: `mobile-publisher-${f}`,
                              role: "option",
                              "aria-selected": ka.publisher === F ? "true" : "false"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-publisher-suggestion",
                                onMousedown: b[52] || (b[52] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (pe) => Sf(f, pe)
                              }, o(f), 41, A8)
                            ], 8, T8))), 128))
                          ])) : A("", !0)
                        ]),
                        l("div", E8, [
                          l("label", $8, o(u(t)("library", "Series / periodical")), 1),
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
                            onKeydown: b[55] || (b[55] = ft((f) => Z.value = !1, ["escape"]))
                          }, null, 40, x8), [
                            [ze, B.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "publication",
                            value: x.publication
                          }, null, 8, O8),
                          mi("publication") ? (h(), p("small", N8, o(zi("publication")), 1)) : A("", !0),
                          Ei.value && Z.value && H.value.length > 0 ? (h(), p("ul", R8, [
                            (h(!0), p(K, null, de(H.value, (f) => (h(), p("li", {
                              key: `mobile-publication-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-publication-suggestion",
                                onMousedown: b[56] || (b[56] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => _f(f, F)
                              }, o(f), 41, I8)
                            ]))), 128))
                          ])) : A("", !0)
                        ]),
                        l("div", L8, [
                          l("label", P8, o(u(t)("library", "Publication year")), 1),
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
                            "aria-expanded": vi.value && Wi.value.length > 0 ? "true" : "false",
                            onFocus: b[58] || (b[58] = (f) => vi.value = !0),
                            onKeydown: b[59] || (b[59] = ft((f) => vi.value = !1, ["escape"]))
                          }, null, 40, D8), [
                            [ze, Gt.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "year",
                            value: x.year
                          }, null, 8, F8),
                          mi("year") ? (h(), p("small", M8, o(zi("year")), 1)) : A("", !0),
                          Ei.value && vi.value && Wi.value.length > 0 ? (h(), p("ul", U8, [
                            (h(!0), p(K, null, de(Wi.value, (f) => (h(), p("li", {
                              key: `mobile-year-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-year-suggestion",
                                onMousedown: b[60] || (b[60] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => xf(f, F)
                              }, o(f), 41, z8)
                            ]))), 128))
                          ])) : A("", !0)
                        ]),
                        l("div", j8, [
                          l("label", B8, o(u(t)("library", "Creator")), 1),
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
                            "aria-expanded": Xe.value && we.value.length > 0 ? "true" : "false",
                            onFocus: b[62] || (b[62] = (f) => Xe.value = !0),
                            onKeydown: b[63] || (b[63] = ft((f) => Xe.value = !1, ["escape"]))
                          }, null, 40, H8), [
                            [ze, Me.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "creator",
                            value: x.creator
                          }, null, 8, V8),
                          mi("creator") ? (h(), p("small", q8, o(zi("creator")), 1)) : A("", !0),
                          Ei.value && Xe.value && we.value.length > 0 ? (h(), p("ul", G8, [
                            (h(!0), p(K, null, de(we.value, (f) => (h(), p("li", {
                              key: `mobile-creator-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-creator-suggestion",
                                onMousedown: b[64] || (b[64] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => kf(f, F)
                              }, o(f), 41, K8)
                            ]))), 128))
                          ])) : A("", !0)
                        ]),
                        l("label", null, [
                          ee(o(u(t)("library", "Format")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[65] || (b[65] = (f) => x.format = f),
                            name: "format",
                            onChange: b[66] || (b[66] = (f) => yi(f))
                          }, [
                            l("option", W8, o(u(t)("library", "All formats")), 1),
                            (h(!0), p(K, null, de($.value, (f) => (h(), p("option", {
                              key: `mobile-format-${f}`,
                              value: f
                            }, o(Ls(f)), 9, Y8))), 128))
                          ], 544), [
                            [nt, x.format]
                          ])
                        ]),
                        l("div", Z8, [
                          l("label", X8, o(u(t)("library", "Subject")), 1),
                          ye(l("input", {
                            id: "library-mobile-subject-search",
                            "onUpdate:modelValue": b[67] || (b[67] = (f) => te.value = f),
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
                            onKeydown: b[69] || (b[69] = ft((f) => re.value = !1, ["escape"]))
                          }, null, 40, J8), [
                            [ze, te.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "subject",
                            value: x.subject
                          }, null, 8, Q8),
                          mi("subject") ? (h(), p("small", e5, o(zi("subject")), 1)) : A("", !0),
                          Ei.value && re.value && me.value.length > 0 ? (h(), p("ul", t5, [
                            (h(!0), p(K, null, de(me.value, (f) => (h(), p("li", {
                              key: `mobile-subject-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-subject-suggestion",
                                onMousedown: b[70] || (b[70] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => $f(f, F)
                              }, o(f), 41, i5)
                            ]))), 128))
                          ])) : A("", !0)
                        ]),
                        l("div", a5, [
                          l("label", n5, o(u(t)("library", "Classification")), 1),
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
                            onKeydown: b[73] || (b[73] = ft((f) => Re.value = !1, ["escape"]))
                          }, null, 40, r5), [
                            [ze, $e.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "classification",
                            value: x.classification
                          }, null, 8, l5),
                          Ei.value && Re.value && Ze.value.length > 0 ? (h(), p("ul", s5, [
                            (h(!0), p(K, null, de(Ze.value, (f) => (h(), p("li", {
                              key: `mobile-classification-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-classification-suggestion",
                                onMousedown: b[74] || (b[74] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => Cf(f, F)
                              }, o(f), 41, o5)
                            ]))), 128))
                          ])) : A("", !0)
                        ])
                      ]),
                      l("fieldset", u5, [
                        l("legend", null, o(u(t)("library", "Location")), 1),
                        l("label", null, [
                          ee(o(u(t)("library", "Shelf")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[75] || (b[75] = (f) => x.shelf = f),
                            name: "shelf",
                            onChange: b[76] || (b[76] = (f) => yi(f))
                          }, [
                            l("option", c5, o(u(t)("library", "All shelves")), 1),
                            (h(!0), p(K, null, de(S.value, (f) => (h(), p("option", {
                              key: `mobile-shelf-${f}`,
                              value: f
                            }, o(f), 9, d5))), 128))
                          ], 544), [
                            [nt, x.shelf]
                          ])
                        ]),
                        l("div", f5, [
                          l("label", h5, o(u(t)("library", "Folder")), 1),
                          ye(l("input", {
                            id: "library-mobile-folder-search",
                            "onUpdate:modelValue": b[77] || (b[77] = (f) => Ue.value = f),
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
                            onKeydown: b[79] || (b[79] = ft((f) => ie.value = !1, ["escape"]))
                          }, null, 40, p5), [
                            [ze, Ue.value]
                          ]),
                          Ei.value && ie.value && O.value.length > 0 ? (h(), p("ul", v5, [
                            (h(!0), p(K, null, de(O.value, (f) => (h(), p("li", {
                              key: `mobile-folder-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-folder-suggestion",
                                onMousedown: b[80] || (b[80] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => Af(f, F)
                              }, o(f), 41, b5)
                            ]))), 128))
                          ])) : A("", !0)
                        ])
                      ]),
                      l("fieldset", g5, [
                        l("legend", null, o(u(t)("library", "Review")), 1),
                        l("label", null, [
                          ee(o(u(t)("library", "Scan status")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[81] || (b[81] = (f) => x.status = f),
                            name: "status",
                            onChange: b[82] || (b[82] = (f) => yi(f))
                          }, [
                            l("option", m5, o(u(t)("library", "All scan statuses")), 1),
                            (h(!0), p(K, null, de(I.value, (f) => (h(), p("option", {
                              key: `mobile-scan-${f}`,
                              value: f
                            }, o(f), 9, y5))), 128))
                          ], 544), [
                            [nt, x.status]
                          ])
                        ]),
                        l("label", null, [
                          ee(o(u(t)("library", "Workflow status")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[83] || (b[83] = (f) => x.workflowStatus = f),
                            name: "workflowStatus",
                            onChange: b[84] || (b[84] = (f) => yi(f))
                          }, [
                            l("option", _5, o(u(t)("library", "All workflow statuses")), 1),
                            (h(!0), p(K, null, de(he.value, (f) => (h(), p("option", {
                              key: `mobile-workflow-${f}`,
                              value: f
                            }, o(f), 9, w5))), 128))
                          ], 544), [
                            [nt, x.workflowStatus]
                          ])
                        ]),
                        l("label", null, [
                          ee(o(u(t)("library", "Suggested updates")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[85] || (b[85] = (f) => x.scannerConflicts = f),
                            name: "scannerConflicts",
                            onChange: b[86] || (b[86] = (f) => yi(f))
                          }, [
                            l("option", k5, o(u(t)("library", "All metadata")), 1),
                            l("option", S5, o(u(t)("library", "Suggested updates")), 1)
                          ], 544), [
                            [nt, x.scannerConflicts]
                          ])
                        ])
                      ]),
                      l("fieldset", C5, [
                        l("legend", null, o(u(t)("library", "Personal / display")), 1),
                        l("div", T5, [
                          l("label", A5, o(u(t)("library", "Nextcloud tag")), 1),
                          ye(l("input", {
                            id: "library-tag-search",
                            "onUpdate:modelValue": b[87] || (b[87] = (f) => yt.value = f),
                            type: "search",
                            name: "tagSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search tags"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-tag-suggestions",
                            "aria-expanded": gt.value && pi.value.length > 0 ? "true" : "false",
                            onFocus: b[88] || (b[88] = (f) => gt.value = !0),
                            onKeydown: b[89] || (b[89] = ft((f) => gt.value = !1, ["escape"]))
                          }, null, 40, E5), [
                            [ze, yt.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "tag",
                            value: x.tag
                          }, null, 8, $5),
                          gt.value && pi.value.length > 0 ? (h(), p("ul", x5, [
                            (h(!0), p(K, null, de(pi.value, (f) => (h(), p("li", {
                              key: f,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-tag-suggestion",
                                onMousedown: b[90] || (b[90] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => Tf(f, F)
                              }, o(f), 41, O5)
                            ]))), 128))
                          ])) : A("", !0),
                          l("button", {
                            type: "submit",
                            class: Ee(["button secondary library-tag-apply", _a("tag")])
                          }, o(u(t)("library", "Apply tag")), 3)
                        ]),
                        l("label", null, [
                          ee(o(u(t)("library", "Sort")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[91] || (b[91] = (f) => x.sort = f),
                            name: "sort",
                            onChange: Yt
                          }, [
                            l("option", N5, o(u(t)("library", "Title")), 1),
                            l("option", R5, o(u(t)("library", "Date added")), 1),
                            l("option", I5, o(u(t)("library", "Publication date")), 1),
                            l("option", L5, o(u(t)("library", "Series")), 1),
                            l("option", P5, o(u(t)("library", "Recently opened")), 1),
                            l("option", D5, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [nt, x.sort]
                          ])
                        ]),
                        l("label", null, [
                          ee(o(u(t)("library", "View")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[92] || (b[92] = (f) => x.view = f),
                            name: "view",
                            onChange: Yt
                          }, [
                            l("option", F5, o(u(t)("library", "Compact")), 1),
                            l("option", M5, o(u(t)("library", "List")), 1)
                          ], 544), [
                            [nt, x.view]
                          ])
                        ])
                      ]),
                      l("div", U5, [
                        pt.value.length > 0 ? (h(), p("a", {
                          key: 0,
                          href: Rs(),
                          class: "button secondary library-mobile-filter-clear",
                          onClick: Ce(Is, ["prevent"])
                        }, o(u(t)("library", "Clear all")), 9, z5)) : A("", !0),
                        l("button", j5, o(Tg.value), 1)
                      ])
                    ], 40, d8)
                  ], 32),
                  l("nav", {
                    class: "library-catalogue-workspace library-workspace-menubar",
                    "aria-label": u(t)("library", "One catalogue workspace")
                  }, [
                    l("div", H5, [
                      l("section", V5, [
                        l("h3", {
                          title: u(t)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                        }, o(u(t)("library", "Collections")), 9, q5),
                        l("form", {
                          method: "post",
                          action: E.value,
                          class: "library-saved-collection-save-form",
                          title: qu.value ? "" : u(t)("library", "Choose search terms or filters first, then save them as a custom collection.")
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: ht.value
                          }, null, 8, K5),
                          l("input", {
                            type: "hidden",
                            name: "savedCollectionFilters",
                            value: dm.value
                          }, null, 8, W5),
                          l("label", null, [
                            l("span", Y5, o(u(t)("library", "Collection name")), 1),
                            l("input", {
                              type: "text",
                              name: "savedCollectionName",
                              placeholder: u(t)("library", "e.g. Bremen photo books"),
                              disabled: !qu.value,
                              autocomplete: "off"
                            }, null, 8, Z5)
                          ]),
                          l("button", {
                            type: "submit",
                            class: "button secondary",
                            disabled: !qu.value,
                            title: u(t)("library", "Save current view")
                          }, o(u(t)("library", "Save")), 9, X5)
                        ], 8, G5)
                      ]),
                      l("form", {
                        method: "get",
                        class: "library-quick-filter-bar library-catalogue-toolbar",
                        "aria-label": u(t)("library", "Catalogue toolbar"),
                        onSubmit: Ce(Yt, ["prevent"])
                      }, [
                        (h(!0), p(K, null, de($g.value, (f) => (h(), p("input", {
                          key: f.key,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, Q5))), 128)),
                        l("label", eD, [
                          ee(o(u(t)("library", "Sort")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[93] || (b[93] = (f) => x.sort = f),
                            name: "sort",
                            onChange: Yt
                          }, [
                            l("option", tD, o(u(t)("library", "Title")), 1),
                            l("option", iD, o(u(t)("library", "Date added")), 1),
                            l("option", aD, o(u(t)("library", "Publication date")), 1),
                            l("option", nD, o(u(t)("library", "Series")), 1),
                            l("option", rD, o(u(t)("library", "Recently opened")), 1),
                            l("option", lD, o(u(t)("library", "Format")), 1)
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
                            class: Ee({ active: se.value === "compact" }),
                            "aria-pressed": se.value === "compact" ? "true" : "false",
                            onClick: b[94] || (b[94] = (f) => Df("compact"))
                          }, o(u(t)("library", "Compact")), 11, oD),
                          l("button", {
                            type: "button",
                            "data-library-view-mode": "list",
                            class: Ee({ active: se.value === "list" }),
                            "aria-pressed": se.value === "list" ? "true" : "false",
                            onClick: b[95] || (b[95] = (f) => Df("list"))
                          }, o(u(t)("library", "List")), 11, uD)
                        ], 8, sD)
                      ], 40, J5)
                    ])
                  ], 8, B5),
                  nn.value ? (h(), p("p", cD, o(nn.value), 1)) : A("", !0),
                  vr.value ? (h(), p("p", dD, o(vr.value), 1)) : A("", !0),
                  pr.value ? (h(), p("p", fD, o(pr.value), 1)) : A("", !0),
                  l("div", hD, [
                    Mt.loading ? (h(), p("span", pD, o(u(t)("library", "Updating catalogue…")), 1)) : Mt.completed ? (h(), p("span", vD, o(u(Ot)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(Q.value.total || 0))), 1)) : A("", !0)
                  ]),
                  Ai.value ? (h(), p("section", bD, [
                    l("p", gD, o(gs.value), 1),
                    l("h3", {
                      id: "library-discovery-heading",
                      title: tn.value ? u(t)("library", "Items by this creator, sorted by publication context when available.") : dr.value ? u(t)("library", "Items from this publication year, sorted by publication date when available.") : u(t)("library", "Items in this publication, sorted by issue/date context when available.")
                    }, o(an.value), 9, mD),
                    l("div", {
                      class: "library-discovery-hero-metrics",
                      "aria-label": u(t)("library", "Discovery summary")
                    }, [
                      l("span", null, o(u(Ot)("library", "%n item", "%n items", Q.value.total)), 1),
                      P.value?.earliestYear && P.value?.latestYear ? (h(), p("span", _D, o(P.value.earliestYear) + "–" + o(P.value.latestYear), 1)) : A("", !0),
                      P.value?.datedCount ? (h(), p("span", wD, o(P.value.datedCount) + " " + o(u(t)("library", "dated")), 1)) : A("", !0),
                      P.value?.undatedCount > 0 ? (h(), p("span", kD, o(P.value.undatedCount) + " " + o(u(t)("library", "undated")), 1)) : A("", !0)
                    ], 8, yD),
                    Ln.value && P.value ? (h(), p("aside", {
                      key: 0,
                      class: "library-publication-issue-context",
                      "aria-label": u(t)("library", "Publication issue/date context")
                    }, [
                      l("strong", null, o(u(t)("library", "Publication contents")), 1),
                      l("span", null, o(u(Ot)("library", "%n item", "%n items", P.value.itemCount)), 1),
                      P.value.earliestYear && P.value.latestYear ? (h(), p("span", CD, o(P.value.earliestYear) + "–" + o(P.value.latestYear), 1)) : A("", !0),
                      l("span", null, o(P.value.datedCount) + " " + o(u(t)("library", "with issue/date coverage")), 1),
                      P.value.undatedCount > 0 ? (h(), p("span", TD, o(P.value.undatedCount) + " " + o(u(t)("library", "without dates yet")), 1)) : A("", !0),
                      l("span", null, o(u(t)("library", "read-only grouping")), 1)
                    ], 8, SD)) : A("", !0),
                    Ln.value && P.value?.issueGroups?.length ? (h(), p("section", AD, [
                      l("div", null, [
                        l("p", ED, o(u(t)("library", "Issue order")), 1),
                        l("h4", {
                          id: "library-publication-issue-groups-heading",
                          title: u(t)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                        }, o(u(t)("library", "Read-only issue/date grouping")), 9, $D)
                      ]),
                      l("div", {
                        class: "library-publication-issue-strip",
                        "aria-label": u(t)("library", "Visual issue strip")
                      }, [
                        (h(!0), p(K, null, de(P.value.issueGroups, (f) => (h(), p("a", {
                          key: `strip-${f.label}`,
                          class: "library-issue-strip-card",
                          href: f.items?.[0]?.detailsUrl || "#"
                        }, [
                          l("span", null, o(f.label), 1),
                          l("strong", null, o(f.items?.[0]?.issueLabel || u(t)("library", "Issue")), 1),
                          l("small", null, o(u(Ot)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                        ], 8, OD))), 128))
                      ], 8, xD),
                      P.value.gapRanges?.length ? (h(), p("p", ND, o(u(t)("library", "Gap")) + ": " + o(P.value.gapRanges.join(", ")), 1)) : A("", !0),
                      (h(!0), p(K, null, de(P.value.issueGroups, (f) => (h(), p("div", {
                        key: f.label,
                        class: "library-publication-issue-group"
                      }, [
                        l("h5", null, o(f.label), 1),
                        l("ol", null, [
                          (h(!0), p(K, null, de(f.items, (F, pe) => (h(), p("li", {
                            key: F.itemId
                          }, [
                            l("span", RD, o(F.issueLabel), 1),
                            l("a", {
                              href: F.detailsUrl || "#"
                            }, o(F.title), 9, ID),
                            l("small", null, [
                              ee(o(F.publicationType), 1),
                              F.publicationDate ? (h(), p(K, { key: 0 }, [
                                ee(" · " + o(F.publicationDate), 1)
                              ], 64)) : A("", !0)
                            ]),
                            l("small", LD, [
                              pe > 0 ? (h(), p(K, { key: 0 }, [
                                ee(o(u(t)("library", "Previous issue")), 1)
                              ], 64)) : A("", !0),
                              pe > 0 && pe < f.items.length - 1 ? (h(), p(K, { key: 1 }, [
                                ee(" · ")
                              ], 64)) : A("", !0),
                              pe < f.items.length - 1 ? (h(), p(K, { key: 2 }, [
                                ee(o(u(t)("library", "Next issue")), 1)
                              ], 64)) : A("", !0)
                            ])
                          ]))), 128))
                        ])
                      ]))), 128)),
                      P.value.unknownIssueItems?.length ? (h(), p("details", PD, [
                        l("summary", {
                          title: u(t)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                        }, o(u(t)("library", "Unknown issue/date")) + " · " + o(P.value.unknownIssueItems.length), 9, DD)
                      ])) : A("", !0)
                    ])) : A("", !0),
                    l("p", null, [
                      l("a", {
                        href: rt.value,
                        class: "button secondary library-discovery-back-link"
                      }, o(u(t)("library", "Back to full catalogue")), 9, FD)
                    ])
                  ])) : A("", !0),
                  l("div", MD, [
                    l("p", UD, o(u(t)("library", "Showing")) + " " + o(Q.value.from) + "–" + o(Q.value.to) + " " + o(u(t)("library", "of")) + " " + o(Q.value.total) + " " + o(u(t)("library", "catalogue items")), 1),
                    l("nav", {
                      class: "library-pagination library-pagination--top",
                      "aria-label": u(t)("library", "Catalogue pagination")
                    }, [
                      l("span", jD, [
                        ee(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                        Q.value.total > 0 ? (h(), p("span", BD, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : A("", !0)
                      ]),
                      Q.value.previousUrl ? (h(), p("a", {
                        key: 0,
                        href: Q.value.previousUrl
                      }, o(u(t)("library", "Previous")), 9, HD)) : (h(), p("span", VD, o(u(t)("library", "Previous")), 1)),
                      Q.value.nextUrl ? (h(), p("a", {
                        key: 2,
                        href: Q.value.nextUrl
                      }, o(u(t)("library", "Next")), 9, qD)) : (h(), p("span", GD, o(u(t)("library", "Next")), 1))
                    ], 8, zD)
                  ]),
                  C.value.length === 0 ? (h(), p("div", {
                    key: 4,
                    class: Ee(["library-empty-content", { "library-first-run-guidance": fr.value || Ji.value, "library-filter-empty-state": hr.value && !fr.value && !Ji.value }]),
                    role: "status"
                  }, [
                    fr.value ? (h(), p(K, { key: 0 }, [
                      l("h3", {
                        title: u(t)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                      }, o(u(t)("library", "Start with one Library root")), 9, KD),
                      l("p", WD, [
                        l("a", {
                          href: Ya.value,
                          class: "button primary"
                        }, o(u(t)("library", "Add a Library root")), 9, YD),
                        l("span", ZD, o(u(t)("library", "Run a scan after saving a root")), 1)
                      ])
                    ], 64)) : Ji.value ? (h(), p(K, { key: 1 }, [
                      l("h3", {
                        title: u(t)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                      }, o(u(t)("library", "No enabled Library roots")), 9, XD),
                      l("p", JD, [
                        l("a", {
                          href: Ya.value,
                          class: "button primary"
                        }, o(u(t)("library", "Open Library settings")), 9, QD)
                      ])
                    ], 64)) : hr.value ? (h(), p(K, { key: 2 }, [
                      l("h3", {
                        title: u(t)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                      }, o(u(t)("library", "No items match these filters")), 9, eF),
                      pt.value.length > 0 ? (h(), p("nav", {
                        key: 0,
                        class: "library-empty-filter-chips",
                        "aria-label": u(t)("library", "Remove active filters")
                      }, [
                        (h(!0), p(K, null, de(pt.value, (f) => (h(), p("a", {
                          key: `empty-${f.key}`,
                          href: el(f.key),
                          class: "library-filter-chip",
                          "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                          onClick: Ce((F) => tl(f.key), ["prevent"])
                        }, [
                          l("strong", null, [
                            ee(o(f.label), 1),
                            f.displayValue ? (h(), p(K, { key: 0 }, [
                              ee(":")
                            ], 64)) : A("", !0)
                          ]),
                          f.displayValue ? (h(), p(K, { key: 0 }, [
                            b[124] || (b[124] = ee(o(" "), -1)),
                            l("span", {
                              class: "library-filter-chip-value",
                              title: f.value
                            }, o(f.displayValue), 9, aF)
                          ], 64)) : A("", !0),
                          b[125] || (b[125] = ee()),
                          b[126] || (b[126] = l("span", { "aria-hidden": "true" }, "×", -1))
                        ], 8, iF))), 128))
                      ], 8, tF)) : A("", !0),
                      Et.value ? (h(), p("p", nF, o(u(t)("library", "Try removing {filter}.", { filter: Et.value.displayValue ? `${Et.value.label}: ${Et.value.displayValue}` : Et.value.label })), 1)) : A("", !0),
                      l("p", rF, [
                        kg.value ? (h(), p("a", {
                          key: 0,
                          href: om(),
                          class: "button secondary library-empty-clear-search",
                          onClick: b[96] || (b[96] = Ce((f) => tl("q"), ["prevent"]))
                        }, o(u(t)("library", "Clear search")), 9, lF)) : A("", !0)
                      ])
                    ], 64)) : (h(), p(K, { key: 3 }, [
                      l("h3", {
                        title: u(t)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                      }, o(u(t)("library", "No catalogue items yet")), 9, sF),
                      l("p", oF, [
                        l("a", {
                          href: Ya.value,
                          class: "button primary"
                        }, o(u(t)("library", "Run a scan from settings")), 9, uF)
                      ])
                    ], 64))
                  ], 2)) : A("", !0),
                  C.value.length > 0 ? (h(), p("section", {
                    key: 5,
                    class: Ee(["library-list-selection", { "library-list-selection--active": ni.value.length }]),
                    "aria-label": u(t)("library", "Selection")
                  }, [
                    l("div", dF, [
                      l("label", fF, [
                        l("input", {
                          type: "checkbox",
                          checked: ni.value.length === C.value.length,
                          onChange: Og
                        }, null, 40, hF),
                        l("span", {
                          title: u(t)("library", "Select all publications on this page")
                        }, o(u(t)("library", "Select all")), 9, pF)
                      ]),
                      ni.value.length ? (h(), p("span", vF, o(u(Ot)("library", "%n publication selected", "%n publications selected", ni.value.length)), 1)) : A("", !0),
                      ye(fe(hd, {
                        "item-ids": ni.value,
                        "request-token": ht.value,
                        "lists-url": Qa.value,
                        "preferred-list-id": u(Tu)
                      }, null, 8, ["item-ids", "request-token", "lists-url", "preferred-list-id"]), [
                        [rr, ni.value.length]
                      ]),
                      ni.value.length ? ye((h(), p("select", {
                        key: 1,
                        "onUpdate:modelValue": b[97] || (b[97] = (f) => Kt.value = f),
                        "aria-label": u(t)("library", "More actions")
                      }, [
                        l("option", gF, o(u(t)("library", "More actions")), 1),
                        l("option", mF, o(u(t)("library", "Add tag")), 1),
                        l("option", yF, o(u(t)("library", "Remove tag")), 1),
                        l("option", _F, o(u(t)("library", "Preview edit")), 1),
                        l("option", wF, o(u(t)("library", "Fresh covers")), 1),
                        l("option", kF, o(u(t)("library", "Reset metadata")), 1)
                      ], 8, bF)), [
                        [nt, Kt.value]
                      ]) : A("", !0)
                    ]),
                    ni.value.length && Kt.value ? (h(), p("div", {
                      key: 0,
                      class: "library-selection-action",
                      onSubmitCapture: Rg
                    }, [
                      Kt.value === "tag" ? (h(), p("form", {
                        key: 0,
                        method: "post",
                        action: Ru.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, CF),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Add tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, TF)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button primary",
                          title: u(t)("library", "Applies only to the selected publications.")
                        }, o(u(t)("library", "Apply")), 9, AF)
                      ], 8, SF)) : A("", !0),
                      Kt.value === "untag" ? (h(), p("form", {
                        key: 1,
                        method: "post",
                        action: vs.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, $F),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Remove tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, xF)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Removes the tag only from the selected publications.")
                        }, o(u(t)("library", "Remove")), 9, OF)
                      ], 8, EF)) : A("", !0),
                      Kt.value === "reset" ? (h(), p("form", {
                        key: 2,
                        method: "post",
                        action: Iu.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, RF),
                        (h(!0), p(K, null, de(ks.value, (f) => (h(), p("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, IF))), 128)),
                        b[127] || (b[127] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Reset metadata")), 9, LF)
                      ], 8, NF)) : A("", !0),
                      Kt.value === "edit" ? (h(), p("form", {
                        key: 3,
                        method: "post",
                        action: bs.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, DF),
                        (h(!0), p(K, null, de(ks.value, (f) => (h(), p("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, FF))), 128)),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Field")), 1),
                          l("select", MF, [
                            l("option", UF, o(u(t)("library", "Publication type")), 1),
                            l("option", zF, o(u(t)("library", "Subtitle")), 1),
                            l("option", jF, o(u(t)("library", "Creators")), 1),
                            l("option", BF, o(u(t)("library", "Series / periodical")), 1),
                            l("option", HF, o(u(t)("library", "Series")), 1),
                            l("option", VF, o(u(t)("library", "Part in series")), 1),
                            l("option", qF, o(u(t)("library", "Genre")), 1),
                            l("option", GF, o(u(t)("library", "Publication date")), 1),
                            l("option", KF, o(u(t)("library", "Language")), 1),
                            l("option", WF, o(u(t)("library", "Publisher")), 1),
                            l("option", YF, o(u(t)("library", "Subjects")), 1),
                            l("option", ZF, o(u(t)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Value")), 1),
                          l("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: u(t)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, XF)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Preview first, then apply from the review page.")
                        }, o(u(t)("library", "Preview edit")), 9, JF)
                      ], 8, PF)) : A("", !0),
                      Kt.value === "covers" ? (h(), p("form", {
                        key: 4,
                        method: "post",
                        action: Br.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, e9),
                        (h(!0), p(K, null, de(ks.value, (f) => (h(), p("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, t9))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Fresh covers")), 9, i9)
                      ], 8, QF)) : A("", !0),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: b[98] || (b[98] = (f) => Kt.value = "")
                      }, o(u(t)("library", "Cancel")), 1)
                    ], 32)) : A("", !0)
                  ], 10, cF)) : A("", !0),
                  Mr.value && (u(Xi) === "building" || Object.values(u(ga)).some((f) => f.status === "partial")) ? (h(), p("p", a9, o(u(t)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : A("", !0),
                  C.value.length > 0 && se.value === "list" ? (h(), p("div", n9, [
                    l("table", r9, [
                      l("caption", l9, o(u(t)("library", "Catalogue list")), 1),
                      l("thead", null, [
                        l("tr", null, [
                          l("th", s9, [
                            l("span", o9, o(u(t)("library", "Selection")), 1)
                          ]),
                          l("th", u9, [
                            l("span", c9, o(u(t)("library", "Cover")), 1)
                          ]),
                          l("th", d9, o(u(t)("library", "Title")), 1),
                          l("th", f9, o(u(t)("library", "Creators")), 1),
                          l("th", h9, o(u(t)("library", "Publication date")), 1),
                          l("th", p9, o(u(t)("library", "Series")), 1),
                          l("th", v9, o(u(t)("library", "Format")), 1),
                          l("th", b9, o(u(t)("library", "Shelf")), 1),
                          l("th", g9, o(u(t)("library", "Actions")), 1)
                        ])
                      ]),
                      l("tbody", null, [
                        (h(!0), p(K, null, de(C.value, (f) => (h(), p("tr", {
                          key: f.id,
                          class: Ee(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Cs.value.has(Number(f.id)), "library-catalogue-list-row--open": rn.value && Number(Dn.value) === Number(f.id) }])
                        }, [
                          l("td", m9, [
                            l("label", y9, [
                              l("input", {
                                type: "checkbox",
                                checked: Cs.value.has(Number(f.id)),
                                "aria-label": `${u(t)("library", "Select publication")}: ${f.title}`,
                                onChange: (F) => sf(f.id, F.currentTarget.checked)
                              }, null, 40, _9)
                            ])
                          ]),
                          l("td", w9, [
                            l("button", {
                              type: "button",
                              class: "library-catalogue-list-cover",
                              "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                              onClick: (F) => Bi(f, F)
                            }, [
                              l("img", {
                                src: f.coverUrl,
                                alt: "",
                                loading: "lazy",
                                decoding: "async"
                              }, null, 8, S9)
                            ], 8, k9)
                          ]),
                          l("th", C9, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button library-catalogue-list-title",
                              onClick: (F) => Bi(f, F)
                            }, [
                              l("bdi", A9, o(f.title), 1)
                            ], 8, T9),
                            u(ga)[f.id]?.count ? (h(), p("a", {
                              key: 0,
                              class: "library-duplicate-badge",
                              href: `${rt.value}?duplicates=1&bookId=${f.id}`
                            }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(ga)[f.id].count) + o(u(ga)[f.id].status === "partial" ? "+" : ""), 9, E9)) : A("", !0)
                          ]),
                          l("td", $9, [
                            f.creators ? (h(), p("bdi", x9, o(f.displayCreators ?? f.creators), 1)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, O9))
                          ]),
                          l("td", null, [
                            f.publicationDate ? (h(), p("time", {
                              key: 0,
                              datetime: f.publicationDate
                            }, o(f.publicationDate), 9, N9)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, R9))
                          ]),
                          l("td", null, [
                            f.publication ? (h(), p("bdi", I9, o(f.publication), 1)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, L9))
                          ]),
                          l("td", null, [
                            f.extension || f.publicationType ? (h(), p("bdi", {
                              key: 0,
                              class: Ee(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                              dir: f.extension ? "ltr" : "auto"
                            }, o(f.extension ? Ls(f.extension) : f.publicationType), 11, P9)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, D9))
                          ]),
                          l("td", null, [
                            f.shelf ? (h(), p("bdi", F9, o(f.shelf), 1)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, M9))
                          ]),
                          l("td", U9, [
                            l("a", {
                              class: "button primary",
                              href: f.openUrl,
                              onClick: (F) => ma(f, F)
                            }, o(u(t)("library", "Open")), 9, z9),
                            l("button", {
                              type: "button",
                              class: "button secondary",
                              onClick: (F) => Bi(f, F)
                            }, o(u(t)("library", "Details")), 9, j9)
                          ])
                        ], 2))), 128))
                      ])
                    ])
                  ])) : C.value.length > 0 ? (h(), p("div", {
                    key: 8,
                    class: Ee(["library-cover-gallery", Ie.value])
                  }, [
                    (h(!0), p(K, null, de(C.value, (f) => (h(), p("article", {
                      key: f.id,
                      class: Ee(["library-cover-card", { "library-cover-card--selected": Cs.value.has(Number(f.id)), "library-cover-card--open": rn.value && Number(Dn.value) === Number(f.id) }])
                    }, [
                      l("label", B9, [
                        l("input", {
                          type: "checkbox",
                          checked: Cs.value.has(Number(f.id)),
                          "aria-label": `${u(t)("library", "Select publication")}: ${f.title}`,
                          onChange: (F) => sf(f.id, F.currentTarget.checked)
                        }, null, 40, H9)
                      ]),
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                        "aria-expanded": rn.value && Number(Dn.value) === Number(f.id) ? "true" : "false",
                        onClick: (F) => Bi(f, F)
                      }, [
                        l("span", {
                          id: `library-details-action-${f.id}`,
                          class: "hidden-visually"
                        }, o(u(t)("library", "Details")), 9, q9),
                        fe(ef, {
                          src: f.coverUrl
                        }, null, 8, ["src"])
                      ], 8, V9),
                      l("form", {
                        method: "post",
                        action: f.starUrl,
                        class: "library-cover-star-form",
                        onSubmit: Ce((F) => zf(f, F), ["prevent"])
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, K9),
                        b[128] || (b[128] = l("input", {
                          type: "hidden",
                          name: "returnTo",
                          value: "catalogue"
                        }, null, -1)),
                        l("input", {
                          type: "hidden",
                          name: "starred",
                          value: f.starred ? "0" : "1"
                        }, null, 8, W9),
                        l("button", {
                          type: "submit",
                          class: Ee(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                          "aria-pressed": f.starred ? "true" : "false",
                          title: f.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-label": f.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-busy": il[f.id] ? "true" : void 0,
                          disabled: il[f.id],
                          onClick: Ce((F) => zf(f, F), ["prevent"])
                        }, o(f.starred ? "★" : "☆"), 11, Y9),
                        al[f.id] ? (h(), p("span", {
                          key: 0,
                          "data-library-star-error": f.id,
                          class: "library-star-feedback",
                          role: "alert"
                        }, o(al[f.id]), 9, Z9)) : A("", !0)
                      ], 40, G9),
                      l("div", X9, [
                        l("div", J9, [
                          u(ga)[f.id]?.count ? (h(), p("a", {
                            key: 0,
                            class: "library-duplicate-badge",
                            href: `${rt.value}?duplicates=1&bookId=${f.id}`
                          }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(ga)[f.id].count) + o(u(ga)[f.id].status === "partial" ? "+" : ""), 9, Q9)) : A("", !0),
                          l("h3", {
                            id: `library-card-title-${f.id}`
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => Bi(f, F)
                            }, [
                              l("bdi", iM, o(f.title), 1)
                            ], 8, tM)
                          ], 8, eM),
                          f.creators ? (h(), p("p", aM, [
                            l("bdi", nM, o(f.displayCreators ?? f.creators), 1)
                          ])) : A("", !0),
                          Ff(f) ? (h(), p("p", rM, [
                            l("bdi", lM, o(Ff(f)), 1)
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
                    l("span", oM, [
                      ee(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                      Q.value.total > 0 ? (h(), p("span", uM, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : A("", !0)
                    ]),
                    Q.value.previousUrl ? (h(), p("a", {
                      key: 0,
                      href: Q.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, cM)) : (h(), p("span", dM, o(u(t)("library", "Previous")), 1)),
                    Q.value.nextUrl ? (h(), p("a", {
                      key: 2,
                      href: Q.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, fM)) : (h(), p("span", hM, o(u(t)("library", "Next")), 1))
                  ], 8, sM)) : A("", !0)
                ], 10, l8))
              ], 64))
            ], 8, VI)
          ]),
          _: 1
        }),
        fe(u(W2), {
          ref_key: "sidebarComponent",
          ref: Mn,
          class: "library-native-item-sidebar",
          open: rn.value,
          "no-toggle": "",
          loading: ri.loading,
          name: Te.value?.title || u(t)("library", "Publication details"),
          subname: Te.value?.displayCreators ?? Te.value?.creators ?? "",
          role: Un.value ? "dialog" : void 0,
          "aria-modal": Un.value ? "true" : void 0,
          "aria-labelledby": Un.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Un.value && Te.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: bf,
          onClosed: Hg,
          onClose: Wr
        }, {
          default: Se(() => [
            l("div", pM, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: of,
                class: "hidden-visually",
                tabindex: "-1"
              }, o(Te.value?.title || u(t)("library", "Publication details")), 513),
              ri.loading && !Te.value ? (h(), p("p", vM, o(u(t)("library", "Loading publication details…")), 1)) : ri.error ? (h(), p("div", {
                key: 1,
                class: "library-sidebar-state",
                role: ri.missing ? "status" : "alert"
              }, [
                l("p", null, o(ri.error), 1),
                ri.missing ? A("", !0) : (h(), p("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: b[99] || (b[99] = (f) => Kr(Dn.value, { historyMode: "none" }))
                }, o(u(t)("library", "Try again")), 1))
              ], 8, bM)) : Te.value ? (h(), p(K, { key: 2 }, [
                l("p", gM, o(u(t)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", mM, [
                  l("span", yM, o(u(t)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: Te.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy",
                    decoding: "async"
                  }, null, 8, _M),
                  l("div", wM, [
                    l("p", kM, [
                      l("bdi", SM, o(Te.value.publicationType || u(t)("library", "Publication")), 1),
                      Te.value.extension ? (h(), p("span", CM, [
                        b[129] || (b[129] = ee(" · ", -1)),
                        l("bdi", TM, o(Ls(Te.value.extension)), 1)
                      ])) : A("", !0)
                    ]),
                    l("div", AM, [
                      l("a", {
                        class: "button primary",
                        href: Te.value.openUrl,
                        onClick: b[100] || (b[100] = (f) => ma(Te.value, f))
                      }, o(u(t)("library", "Open")), 9, EM),
                      fe(u(Gd), {
                        "aria-label": u(t)("library", "File and maintenance actions")
                      }, {
                        default: Se(() => [
                          fe(u(Ic), {
                            href: Te.value.filesUrl
                          }, {
                            default: Se(() => [
                              ee(o(u(t)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          fe(u(Ic), {
                            href: Te.value.downloadUrl
                          }, {
                            default: Se(() => [
                              ee(o(u(t)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          fe(u(Ic), {
                            href: Te.value.detailsUrl
                          }, {
                            default: Se(() => [
                              ee(o(u(t)("library", "Maintenance (legacy)")), 1)
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
                  key: Te.value.id,
                  "item-ids": [Number(Te.value.id)],
                  "request-token": ht.value,
                  "lists-url": Qa.value
                }, null, 8, ["item-ids", "request-token", "lists-url"])),
                l("nav", {
                  class: "library-sidebar-sections",
                  "aria-label": u(t)("library", "Publication detail sections")
                }, [
                  (h(), p(K, null, de(Lg, (f) => l("button", {
                    key: f.key,
                    type: "button",
                    class: Ee({ active: Fn.value === f.key }),
                    "aria-current": Fn.value === f.key ? "page" : void 0,
                    onClick: (F) => Fn.value = f.key
                  }, o(u(t)("library", f.label)), 11, xM)), 64))
                ], 8, $M),
                Fn.value === "overview" ? (h(), p("section", OM, [
                  l("h3", NM, o(u(t)("library", "Overview")), 1),
                  uf.value ? (h(), p("p", RM, [
                    l("bdi", IM, o(uf.value), 1)
                  ])) : A("", !0),
                  l("dl", LM, [
                    Te.value.publication ? (h(), p("div", PM, [
                      l("dt", null, o(u(t)("library", "Series")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: $s("publication", Te.value.publication),
                          title: u(t)("library", "Filter catalogue by this series"),
                          onClick: b[101] || (b[101] = (f) => xs(f, "publication", Te.value.publication))
                        }, [
                          l("bdi", FM, o(Te.value.publication), 1)
                        ], 8, DM)
                      ])
                    ])) : A("", !0),
                    Te.value.publicationDate ? (h(), p("div", MM, [
                      l("dt", null, o(u(t)("library", "Date")), 1),
                      l("dd", null, [
                        zn.value ? (h(), p("a", {
                          key: 0,
                          class: "library-detail-facet-link",
                          href: $s("year", zn.value),
                          title: u(t)("library", "Filter catalogue by this publication year"),
                          onClick: b[102] || (b[102] = (f) => xs(f, "year", zn.value))
                        }, o(zn.value), 9, UM)) : A("", !0),
                        zn.value && Te.value.publicationDate !== zn.value ? (h(), p("span", zM, " · ")) : A("", !0),
                        Te.value.publicationDate !== zn.value ? (h(), p("span", jM, o(Te.value.publicationDate), 1)) : A("", !0)
                      ])
                    ])) : A("", !0),
                    Te.value.publisher ? (h(), p("div", BM, [
                      l("dt", null, o(u(t)("library", "Publisher")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: $s("publisher", Te.value.publisher),
                          title: u(t)("library", "Filter catalogue by this publisher"),
                          onClick: b[103] || (b[103] = (f) => xs(f, "publisher", Te.value.publisher))
                        }, [
                          l("bdi", VM, o(Te.value.publisher), 1)
                        ], 8, HM)
                      ])
                    ])) : A("", !0),
                    cf.value.length ? (h(), p("div", qM, [
                      l("dt", null, o(u(t)("library", "Language")), 1),
                      l("dd", GM, [
                        (h(!0), p(K, null, de(cf.value, (f) => (h(), p("a", {
                          key: f,
                          class: "library-detail-facet-link",
                          href: $s("language", f),
                          title: u(t)("library", "Filter catalogue by this language"),
                          onClick: (F) => xs(F, "language", f)
                        }, [
                          l("bdi", WM, o(f), 1)
                        ], 8, KM))), 128))
                      ])
                    ])) : A("", !0),
                    Te.value.shelf ? (h(), p("div", YM, [
                      l("dt", null, o(u(t)("library", "Shelf")), 1),
                      l("dd", null, o(Te.value.shelf), 1)
                    ])) : A("", !0)
                  ])
                ])) : Fn.value === "metadata" ? (h(), p("section", ZM, [
                  Mr.value ? (h(), De(bg, {
                    key: `${Te.value.id}:${Te.value.title}:${Te.value.creators}`,
                    "item-id": Number(Te.value.id),
                    "request-token": ht.value
                  }, null, 8, ["item-id", "request-token"])) : A("", !0),
                  l("h3", XM, o(u(t)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Ce(jg, ["prevent"])
                  }, [
                    l("label", null, [
                      ee(o(u(t)("library", "Title")), 1),
                      ye(l("input", {
                        "onUpdate:modelValue": b[104] || (b[104] = (f) => mt.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [ze, mt.title]
                      ])
                    ]),
                    l("label", null, [
                      fe(He, {
                        text: u(t)("library", "Book series name, stored separately from the existing Publication field.")
                      }, {
                        default: Se(() => [
                          ee(o(u(t)("library", "Series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ye(l("input", {
                        "onUpdate:modelValue": b[105] || (b[105] = (f) => mt.series = f),
                        name: "series",
                        maxlength: "255"
                      }, null, 512), [
                        [ze, mt.series]
                      ])
                    ]),
                    l("label", null, [
                      fe(He, {
                        text: u(t)("library", "Text such as 01, 2.5 or Volume II. Leading zeros and labels are preserved.")
                      }, {
                        default: Se(() => [
                          ee(o(u(t)("library", "Part in series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ye(l("input", {
                        "onUpdate:modelValue": b[106] || (b[106] = (f) => mt.seriesNumber = f),
                        name: "seriesNumber",
                        maxlength: "64"
                      }, null, 512), [
                        [ze, mt.seriesNumber]
                      ])
                    ]),
                    l("label", null, [
                      fe(He, {
                        text: u(t)("library", "A genre label such as Science fiction. Separate from subjects, file format and publication type.")
                      }, {
                        default: Se(() => [
                          ee(o(u(t)("library", "Genre")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ye(l("input", {
                        "onUpdate:modelValue": b[107] || (b[107] = (f) => mt.genre = f),
                        name: "genre",
                        maxlength: "255"
                      }, null, 512), [
                        [ze, mt.genre]
                      ])
                    ]),
                    l("label", null, [
                      ee(o(u(t)("library", "Publication date")), 1),
                      ye(l("input", {
                        "onUpdate:modelValue": b[108] || (b[108] = (f) => mt.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: u(t)("library", "e.g. 2026")
                      }, null, 8, JM), [
                        [ze, mt.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, o(u(t)("library", "Identifiers")), 1),
                      (h(!0), p(K, null, de(mt.identifiers, (f, F) => (h(), p("div", {
                        key: F,
                        class: "library-sidebar-identifier"
                      }, [
                        ye(l("input", {
                          "onUpdate:modelValue": (pe) => f.scheme = pe,
                          "aria-label": u(t)("library", "Identifier type"),
                          placeholder: u(t)("library", "Identifier type")
                        }, null, 8, QM), [
                          [ze, f.scheme]
                        ]),
                        ye(l("input", {
                          "onUpdate:modelValue": (pe) => f.displayValue = pe,
                          "aria-label": u(t)("library", "Identifier value")
                        }, null, 8, e6), [
                          [ze, f.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (pe) => zg(F)
                        }, o(u(t)("library", "Remove")), 9, t6)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Ug
                      }, o(u(t)("library", "Add identifier")), 1)
                    ]),
                    fe(He, {
                      text: u(t)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")
                    }, {
                      default: Se(() => [
                        ee(o(u(t)("library", "Maintenance")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"]),
                    ji.error ? (h(), p("p", i6, o(ji.error), 1)) : ji.saved ? (h(), p("p", a6, o(u(t)("library", "Metadata saved.")), 1)) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: ji.saving
                    }, o(ji.saving ? u(t)("library", "Saving…") : u(t)("library", "Save metadata")), 9, n6)
                  ], 32),
                  Os(Te.value).length ? (h(), p("section", r6, [
                    l("h4", l6, [
                      fe(He, {
                        text: u(t)("library", "Suggestions are optional and never replace your edits automatically.")
                      }, {
                        default: Se(() => [
                          ee(o(u(t)("library", "Scanner suggestions")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    l("dl", null, [
                      (h(!0), p(K, null, de(Os(Te.value), (f) => (h(), p("div", {
                        key: f.field
                      }, [
                        l("dt", null, o(f.field) + " · " + o(f.sourceProvenance), 1),
                        l("dd", null, [
                          ee(o(u(t)("library", "Current")) + ": " + o(f.currentValue || "—"), 1),
                          b[130] || (b[130] = l("br", null, null, -1)),
                          ee(o(u(t)("library", "Suggestion")) + ": " + o(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : A("", !0)
                ])) : (h(), p("section", s6, [
                  l("h3", o6, o(u(t)("library", "Activity")), 1),
                  l("dl", u6, [
                    l("div", null, [
                      l("dt", null, o(u(t)("library", "Scan status")), 1),
                      l("dd", null, o(Te.value.scanStatus || "—"), 1)
                    ]),
                    Te.value.workflowStatus ? (h(), p("div", c6, [
                      l("dt", null, o(u(t)("library", "Workflow")), 1),
                      l("dd", null, o(Te.value.workflowStatus), 1)
                    ])) : A("", !0),
                    Te.value.metadataSource ? (h(), p("div", d6, [
                      l("dt", null, o(u(t)("library", "Metadata source")), 1),
                      l("dd", null, o(Te.value.metadataSource), 1)
                    ])) : A("", !0),
                    Te.value.cachedPath ? (h(), p("div", f6, [
                      l("dt", null, o(u(t)("library", "File")), 1),
                      l("dd", h6, [
                        Te.value.openUrl ? (h(), p("a", {
                          key: 0,
                          href: Te.value.openUrl,
                          onClick: b[109] || (b[109] = (f) => ma(Te.value, f))
                        }, [
                          l("bdi", v6, o(Te.value.cachedPath), 1)
                        ], 8, p6)) : (h(), p("bdi", b6, o(Te.value.cachedPath), 1))
                      ])
                    ])) : A("", !0)
                  ])
                ])),
                Te.value.canonicalAuthors?.length ? (h(), p("nav", {
                  key: 3,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Authors")
                }, [
                  (h(!0), p(K, null, de(Te.value.canonicalAuthors, (f) => (h(), p("a", {
                    key: f.id,
                    class: "button secondary",
                    href: `${w.generateUrl("/apps/library/")}?authors=1&authorId=${f.id}`
                  }, [
                    l("bdi", y6, o(f.name), 1)
                  ], 8, m6))), 128))
                ], 8, g6)) : Te.value.authors?.length ? (h(), p("nav", {
                  key: 4,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Creators")
                }, [
                  (h(!0), p(K, null, de(Te.value.authors, (f) => (h(), p("a", {
                    key: f,
                    class: "button secondary",
                    href: gm(f)
                  }, [
                    l("bdi", k6, o(f), 1)
                  ], 8, w6))), 128))
                ], 8, _6)) : A("", !0),
                Te.value.canonicalSeries?.length ? (h(), p("nav", {
                  key: 5,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Series")
                }, [
                  (h(!0), p(K, null, de(Te.value.canonicalSeries, (f) => (h(), p("a", {
                    key: f.id,
                    class: "button secondary",
                    href: `${w.generateUrl("/apps/library/")}?series=1&seriesId=${f.id}`
                  }, [
                    l("bdi", T6, [
                      ee(o(f.name), 1),
                      f.part ? (h(), p(K, { key: 0 }, [
                        ee(" · " + o(f.part), 1)
                      ], 64)) : A("", !0)
                    ])
                  ], 8, C6))), 128))
                ], 8, S6)) : A("", !0),
                l("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": u(t)("library", "Browse neighbouring items")
                }, [
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !As.value,
                    onClick: b[110] || (b[110] = (f) => Ns(As.value))
                  }, o(u(t)("library", "Previous item")), 9, E6),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Es.value,
                    onClick: b[111] || (b[111] = (f) => Ns(Es.value))
                  }, o(u(t)("library", "Next item")), 9, $6)
                ], 8, A6)
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
function I6() {
  window.LibraryStartupWatchdog?.fail();
}
function L6(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = po("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !L6(e))
    throw new Error("Library startup prerequisites are unavailable");
  const i = {
    ...e,
    duplicateSuggestions: po("library", "duplicateSuggestions", !1),
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  i_(R6, { state: i }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  I6(), console.error("[library] Vue startup failed", e);
}
