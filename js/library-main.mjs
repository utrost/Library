// @__NO_SIDE_EFFECTS__
function bd(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const a of e.split(",")) t[a] = 1;
  return (a) => a in t;
}
const tt = {}, Er = [], Pa = () => {
}, Up = () => !1, au = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), iu = (e) => e.startsWith("onUpdate:"), Nt = Object.assign, gd = (e, t) => {
  const a = e.indexOf(t);
  a > -1 && e.splice(a, 1);
}, km = Object.prototype.hasOwnProperty, st = (e, t) => km.call(e, t), Le = Array.isArray, yn = (e) => ns(e) === "[object Map]", Ui = (e) => ns(e) === "[object Set]", jf = (e) => ns(e) === "[object Date]", ze = (e) => typeof e == "function", bt = (e) => typeof e == "string", Ga = (e) => typeof e == "symbol", ot = (e) => e !== null && typeof e == "object", zp = (e) => (ot(e) || ze(e)) && ze(e.then) && ze(e.catch), jp = Object.prototype.toString, ns = (e) => jp.call(e), Sm = (e) => ns(e).slice(8, -1), Bp = (e) => ns(e) === "[object Object]", md = (e) => bt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kl = /* @__PURE__ */ bd(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), nu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((a) => t[a] || (t[a] = e(a)));
}, Cm = /-\w/g, ea = nu(
  (e) => e.replace(Cm, (t) => t.slice(1).toUpperCase())
), Tm = /\B([A-Z])/g, qi = nu(
  (e) => e.replace(Tm, "-$1").toLowerCase()
), ru = nu((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gu = nu(
  (e) => e ? `on${ru(e)}` : ""
), jt = (e, t) => !Object.is(e, t), Ys = (e, ...t) => {
  for (let a = 0; a < e.length; a++)
    e[a](...t);
}, Hp = (e, t, a, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: a
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
function ha(e) {
  if (Le(e)) {
    const t = {};
    for (let a = 0; a < e.length; a++) {
      const i = e[a], n = bt(i) ? Om(i) : ha(i);
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
  return e.replace(xm, "").split(Em).forEach((a) => {
    if (a) {
      const i = a.split($m);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Te(e) {
  let t = "";
  if (bt(e))
    t = e;
  else if (Le(e))
    for (let a = 0; a < e.length; a++) {
      const i = Te(e[a]);
      i && (t += i + " ");
    }
  else if (ot(e))
    for (const a in e)
      e[a] && (t += a + " ");
  return t.trim();
}
function eo(e) {
  if (!e) return null;
  let { class: t, style: a } = e;
  return t && !bt(t) && (e.class = Te(t)), a && (e.style = ha(a)), e;
}
const Nm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Rm = /* @__PURE__ */ bd(Nm);
function Vp(e) {
  return !!e || e === "";
}
function Im(e, t) {
  if (e.length !== t.length) return !1;
  let a = !0;
  for (let i = 0; a && i < e.length; i++)
    a = zi(e[i], t[i]);
  return a;
}
function Hf(e, t) {
  if (e.size !== t.size) return !1;
  const a = Array.from(t), i = new Uint8Array(a.length);
  for (const n of e) {
    let r = -1;
    for (let s = 0; s < a.length; s++)
      if (!i[s] && zi(n, a[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function zi(e, t) {
  if (e === t) return !0;
  let a = jf(e), i = jf(t);
  if (a || i)
    return a && i ? e.getTime() === t.getTime() : !1;
  if (a = Ga(e), i = Ga(t), a || i)
    return e === t;
  if (a = Le(e), i = Le(t), a || i)
    return a && i ? Im(e, t) : !1;
  if (a = ot(e), i = ot(t), a || i) {
    if (!a || !i)
      return !1;
    if (a = yn(e), i = yn(t), a || i || (a = Ui(e), i = Ui(t), a || i))
      return a && i ? Hf(e, t) : !1;
    const n = Object.keys(e).length, r = Object.keys(t).length;
    if (n !== r)
      return !1;
    for (const s in e) {
      const c = e.hasOwnProperty(s), d = t.hasOwnProperty(s);
      if (c && !d || !c && d || !zi(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function yd(e, t) {
  return e.findIndex((a) => zi(a, t));
}
const qp = (e) => !!(e && e.__v_isRef === !0), o = (e) => bt(e) ? e : e == null ? "" : Le(e) || ot(e) && (e.toString === jp || !ze(e.toString)) ? qp(e) ? o(e.value) : JSON.stringify(e, Gp, 2) : String(e), Gp = (e, t) => qp(t) ? Gp(e, t.value) : yn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (a, [i, n], r) => (a[Ku(i, r) + " =>"] = n, a),
    {}
  )
} : Ui(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((a) => Ku(a))
} : Ga(t) ? Ku(t) : ot(t) && !Le(t) && !Bp(t) ? String(t) : t, Ku = (e, t = "") => {
  var a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ga(e) ? `Symbol(${(a = e.description) != null ? a : t})` : e
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
      let t, a;
      if (this.scopes) {
        const i = this.scopes.slice();
        for (t = 0, a = i.length; t < a; t++)
          i[t].pause();
      }
      for (t = 0, a = this.effects.length; t < a; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, a;
      if (this.scopes) {
        const n = this.scopes.slice();
        for (t = 0, a = n.length; t < a; t++)
          n[t].resume();
      }
      const i = this.effects.slice();
      for (t = 0, a = i.length; t < a; t++)
        i[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const a = zt;
      try {
        return zt = this, t();
      } finally {
        zt = a;
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
      let a, i;
      for (a = 0, i = this.effects.length; a < i; a++)
        this.effects[a].stop();
      for (this.effects.length = 0, a = 0, i = this.cleanups.length; a < i; a++)
        this.cleanups[a]();
      if (this.cleanups.length = 0, this.scopes) {
        const n = this.scopes.slice();
        for (a = 0, i = n.length; a < i; a++)
          n[a].stop(!0);
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
    const t = vt, a = Va;
    vt = this, Va = !0;
    try {
      return this.fn();
    } finally {
      Xp(this), vt = t, Va = a, this.flags &= -3;
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
let Wp = 0, Sl, Cl;
function Yp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Cl, Cl = e;
    return;
  }
  e.next = Sl, Sl = e;
}
function _d() {
  Wp++;
}
function wd() {
  if (--Wp > 0)
    return;
  if (Cl) {
    let t = Cl;
    for (Cl = void 0; t; ) {
      const a = t.next;
      t.next = void 0, t.flags &= -9, t = a;
    }
  }
  let e;
  for (; Sl; ) {
    let t = Sl;
    for (Sl = void 0; t; ) {
      const a = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      t = a;
    }
  }
  if (e) throw e;
}
function Zp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Xp(e) {
  let t, a = e.depsTail, i = a;
  for (; i; ) {
    const n = i.prevDep;
    i.version === -1 ? (i === a && (a = n), kd(i), Fm(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = n;
  }
  e.deps = t, e.depsTail = a;
}
function Lc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Jp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Jp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ml) || (e.globalVersion = Ml, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Lc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, a = vt, i = Va;
  vt = e, Va = !0;
  try {
    Zp(e);
    const n = e.fn(e._value);
    (t.version === 0 || jt(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
  } catch (n) {
    throw t.version++, n;
  } finally {
    vt = a, Va = i, Xp(e), e.flags &= -3;
  }
}
function kd(e, t = !1) {
  const { dep: a, prevSub: i, nextSub: n } = e;
  if (i && (i.nextSub = n, e.prevSub = void 0), n && (n.prevSub = i, e.nextSub = void 0), a.subs === e && (a.subs = i, !i && a.computed)) {
    a.computed.flags &= -5;
    for (let r = a.computed.deps; r; r = r.nextDep)
      kd(r, !0);
  }
  !t && !--a.sc && a.map && a.map.delete(a.key);
}
function Fm(e) {
  const { prevDep: t, nextDep: a } = e;
  t && (t.nextDep = a, e.prevDep = void 0), a && (a.prevDep = t, e.nextDep = void 0);
}
let Va = !0;
const Qp = [];
function ji() {
  Qp.push(Va), Va = !1;
}
function Bi() {
  const e = Qp.pop();
  Va = e === void 0 ? !0 : e;
}
function Vf(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const a = vt;
    vt = void 0;
    try {
      t();
    } finally {
      vt = a;
    }
  }
}
let Ml = 0;
class Mm {
  constructor(t, a) {
    this.sub = t, this.dep = a, this.version = a.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ou {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!vt || !Va || vt === this.computed)
      return;
    let a = this.activeLink;
    if (a === void 0 || a.sub !== vt)
      a = this.activeLink = new Mm(vt, this), vt.deps ? (a.prevDep = vt.depsTail, vt.depsTail.nextDep = a, vt.depsTail = a) : vt.deps = vt.depsTail = a, ev(a);
    else if (a.version === -1 && (a.version = this.version, a.nextDep)) {
      const i = a.nextDep;
      i.prevDep = a.prevDep, a.prevDep && (a.prevDep.nextDep = i), a.prevDep = vt.depsTail, a.nextDep = void 0, vt.depsTail.nextDep = a, vt.depsTail = a, vt.deps === a && (vt.deps = i);
    }
    return a;
  }
  trigger(t) {
    this.version++, Ml++, this.notify(t);
  }
  notify(t) {
    _d();
    try {
      for (let a = this.subs; a; a = a.prevSub)
        a.sub.notify() && a.sub.dep.notify();
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
      for (let i = t.deps; i; i = i.nextDep)
        ev(i);
    }
    const a = e.dep.subs;
    a !== e && (e.prevSub = a, a && (a.nextSub = e)), e.dep.subs = e;
  }
}
const Pc = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ Symbol(
  ""
), Dc = /* @__PURE__ */ Symbol(
  ""
), Ul = /* @__PURE__ */ Symbol(
  ""
);
function Xt(e, t, a) {
  if (Va && vt) {
    let i = Pc.get(e);
    i || Pc.set(e, i = /* @__PURE__ */ new Map());
    let n = i.get(a);
    n || (i.set(a, n = new ou()), n.map = i, n.key = a), n.track();
  }
}
function Ri(e, t, a, i, n, r) {
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
    const d = Le(e), _ = d && md(a);
    if (d && a === "length") {
      const v = Number(i);
      s.forEach((y, m) => {
        (m === "length" || m === Ul || !Ga(m) && m >= v) && c(y);
      });
    } else
      switch ((a !== void 0 || s.has(void 0)) && c(s.get(a)), _ && c(s.get(Ul)), t) {
        case "add":
          d ? _ && c(s.get("length")) : (c(s.get(ir)), yn(e) && c(s.get(Dc)));
          break;
        case "delete":
          d || (c(s.get(ir)), yn(e) && c(s.get(Dc)));
          break;
        case "set":
          yn(e) && c(s.get(ir));
          break;
      }
  }
  wd();
}
function yr(e) {
  const t = /* @__PURE__ */ lt(e);
  return t === e ? t : (Xt(t, "iterate", Ul), /* @__PURE__ */ Da(e) ? t : t.map(Ka));
}
function uu(e) {
  return Xt(e = /* @__PURE__ */ lt(e), "iterate", Ul), e;
}
function li(e, t) {
  return /* @__PURE__ */ Hi(e) ? Lr(/* @__PURE__ */ nr(e) ? Ka(t) : t) : Ka(t);
}
const Um = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yu(this, Symbol.iterator, (e) => li(this, e));
  },
  concat(...e) {
    return yr(this).concat(
      ...e.map((t) => Le(t) ? yr(t) : t)
    );
  },
  entries() {
    return Yu(this, "entries", (e) => (e[1] = li(this, e[1]), e));
  },
  every(e, t) {
    return Si(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Si(
      this,
      "filter",
      e,
      t,
      (a) => a.map((i) => li(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Si(
      this,
      "find",
      e,
      t,
      (a) => li(this, a),
      arguments
    );
  },
  findIndex(e, t) {
    return Si(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Si(
      this,
      "findLast",
      e,
      t,
      (a) => li(this, a),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Si(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Si(this, "forEach", e, t, void 0, arguments);
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
    return Si(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return rl(this, "pop");
  },
  push(...e) {
    return rl(this, "push", e);
  },
  reduce(e, ...t) {
    return qf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return qf(this, "reduceRight", e, t);
  },
  shift() {
    return rl(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Si(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return rl(this, "splice", e);
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
    return rl(this, "unshift", e);
  },
  values() {
    return Yu(this, "values", (e) => li(this, e));
  }
};
function Yu(e, t, a) {
  const i = uu(e), n = i[t]();
  return i !== e && !/* @__PURE__ */ Da(e) && (n._next = n.next, n.next = () => {
    const r = n._next();
    return r.done || (r.value = a(r.value)), r;
  }), n;
}
const zm = Array.prototype;
function Si(e, t, a, i, n, r) {
  const s = uu(e), c = s !== e && !/* @__PURE__ */ Da(e), d = s[t];
  if (d !== zm[t]) {
    const y = d.apply(e, r);
    return c ? Ka(y) : y;
  }
  let _ = a;
  s !== e && (c ? _ = function(y, m) {
    return a.call(this, li(e, y), m, e);
  } : a.length > 2 && (_ = function(y, m) {
    return a.call(this, y, m, e);
  }));
  const v = d.call(s, _, i);
  return c && n ? n(v) : v;
}
function qf(e, t, a, i) {
  const n = uu(e), r = n !== e && !/* @__PURE__ */ Da(e);
  let s = a, c = !1;
  n !== e && (r ? (c = i.length === 0, s = function(_, v, y) {
    return c && (c = !1, _ = li(e, _)), a.call(this, _, li(e, v), y, e);
  }) : a.length > 3 && (s = function(_, v, y) {
    return a.call(this, _, v, y, e);
  }));
  const d = n[t](s, ...i);
  return c ? li(e, d) : d;
}
function Zu(e, t, a) {
  const i = /* @__PURE__ */ lt(e);
  Xt(i, "iterate", Ul);
  const n = i[t](...a);
  return (n === -1 || n === !1) && /* @__PURE__ */ Td(a[0]) ? (a[0] = /* @__PURE__ */ lt(a[0]), i[t](...a)) : n;
}
function rl(e, t, a = []) {
  ji(), _d();
  const i = (/* @__PURE__ */ lt(e))[t].apply(e, a);
  return wd(), Bi(), i;
}
const jm = /* @__PURE__ */ bd("__proto__,__v_isRef,__isVue"), tv = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ga)
);
function Bm(e) {
  Ga(e) || (e = String(e));
  const t = /* @__PURE__ */ lt(this);
  return Xt(t, "has", e), t.hasOwnProperty(e);
}
class av {
  constructor(t = !1, a = !1) {
    this._isReadonly = t, this._isShallow = a;
  }
  get(t, a, i) {
    if (a === "__v_skip") return t.__v_skip;
    const n = this._isReadonly, r = this._isShallow;
    if (a === "__v_isReactive")
      return !n;
    if (a === "__v_isReadonly")
      return n;
    if (a === "__v_isShallow")
      return r;
    if (a === "__v_raw")
      return i === (n ? r ? Jm : lv : r ? rv : nv).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = Le(t);
    if (!n) {
      let d;
      if (s && (d = Um[a]))
        return d;
      if (a === "hasOwnProperty")
        return Bm;
    }
    const c = Reflect.get(
      t,
      a,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ta(t) ? t : i
    );
    if ((Ga(a) ? tv.has(a) : jm(a)) || (n || Xt(t, "get", a), r))
      return c;
    if (/* @__PURE__ */ ta(c)) {
      const d = s && md(a) ? c : c.value;
      return n && ot(d) ? /* @__PURE__ */ zl(d) : d;
    }
    return ot(c) ? n ? /* @__PURE__ */ zl(c) : /* @__PURE__ */ Lt(c) : c;
  }
}
class iv extends av {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, a, i, n) {
    let r = t[a];
    const s = Le(t) && md(a);
    if (!this._isShallow) {
      const _ = /* @__PURE__ */ Hi(r);
      if (!/* @__PURE__ */ Da(i) && !/* @__PURE__ */ Hi(i) && (r = /* @__PURE__ */ lt(r), i = /* @__PURE__ */ lt(i)), !s && /* @__PURE__ */ ta(r) && !/* @__PURE__ */ ta(i))
        return _ || (r.value = i), !0;
    }
    const c = s ? Number(a) < t.length : st(t, a), d = Reflect.set(
      t,
      a,
      i,
      /* @__PURE__ */ ta(t) ? t : n
    );
    return t === /* @__PURE__ */ lt(n) && d && (c ? jt(i, r) && Ri(t, "set", a, i) : Ri(t, "add", a, i)), d;
  }
  deleteProperty(t, a) {
    const i = st(t, a);
    t[a];
    const n = Reflect.deleteProperty(t, a);
    return n && i && Ri(t, "delete", a, void 0), n;
  }
  has(t, a) {
    const i = Reflect.has(t, a);
    return (!Ga(a) || !tv.has(a)) && Xt(t, "has", a), i;
  }
  ownKeys(t) {
    return Xt(
      t,
      "iterate",
      Le(t) ? "length" : ir
    ), Reflect.ownKeys(t);
  }
}
class Hm extends av {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, a) {
    return !0;
  }
  deleteProperty(t, a) {
    return !0;
  }
}
const Vm = /* @__PURE__ */ new iv(), qm = /* @__PURE__ */ new Hm(), Gm = /* @__PURE__ */ new iv(!0);
const Fc = (e) => e, Ps = (e) => Reflect.getPrototypeOf(e);
function Km(e, t, a) {
  return function(...i) {
    const n = this.__v_raw, r = /* @__PURE__ */ lt(n), s = yn(r), c = e === "entries" || e === Symbol.iterator && s, d = e === "keys" && s, _ = n[e](...i), v = a ? Fc : t ? Lr : Ka;
    return !t && Xt(
      r,
      "iterate",
      d ? Dc : ir
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
  const a = {
    get(n) {
      const r = this.__v_raw, s = /* @__PURE__ */ lt(r), c = /* @__PURE__ */ lt(n);
      e || (jt(n, c) && Xt(s, "get", n), Xt(s, "get", c));
      const { has: d } = Ps(s), _ = t ? Fc : e ? Lr : Ka;
      if (d.call(s, n))
        return _(r.get(n));
      if (d.call(s, c))
        return _(r.get(c));
      r !== s && r.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !e && Xt(/* @__PURE__ */ lt(n), "iterate", ir), n.size;
    },
    has(n) {
      const r = this.__v_raw, s = /* @__PURE__ */ lt(r), c = /* @__PURE__ */ lt(n);
      return e || (jt(n, c) && Xt(s, "has", n), Xt(s, "has", c)), n === c ? r.has(n) : r.has(n) || r.has(c);
    },
    forEach(n, r) {
      const s = this, c = s.__v_raw, d = /* @__PURE__ */ lt(c), _ = t ? Fc : e ? Lr : Ka;
      return !e && Xt(d, "iterate", ir), c.forEach((v, y) => n.call(r, _(v), _(y), s));
    }
  };
  return Nt(
    a,
    e ? {
      add: Ds("add"),
      set: Ds("set"),
      delete: Ds("delete"),
      clear: Ds("clear")
    } : {
      add(n) {
        const r = /* @__PURE__ */ lt(this), s = Ps(r), c = /* @__PURE__ */ lt(n), d = !t && !/* @__PURE__ */ Da(n) && !/* @__PURE__ */ Hi(n) ? c : n;
        return s.has.call(r, d) || jt(n, d) && s.has.call(r, n) || jt(c, d) && s.has.call(r, c) || (r.add(d), Ri(r, "add", d, d)), this;
      },
      set(n, r) {
        !t && !/* @__PURE__ */ Da(r) && !/* @__PURE__ */ Hi(r) && (r = /* @__PURE__ */ lt(r));
        const s = /* @__PURE__ */ lt(this), { has: c, get: d } = Ps(s);
        let _ = c.call(s, n);
        _ || (n = /* @__PURE__ */ lt(n), _ = c.call(s, n));
        const v = d.call(s, n);
        return s.set(n, r), _ ? jt(r, v) && Ri(s, "set", n, r) : Ri(s, "add", n, r), this;
      },
      delete(n) {
        const r = /* @__PURE__ */ lt(this), { has: s, get: c } = Ps(r);
        let d = s.call(r, n);
        d || (n = /* @__PURE__ */ lt(n), d = s.call(r, n)), c && c.call(r, n);
        const _ = r.delete(n);
        return d && Ri(r, "delete", n, void 0), _;
      },
      clear() {
        const n = /* @__PURE__ */ lt(this), r = n.size !== 0, s = n.clear();
        return r && Ri(
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
    a[n] = Km(n, e, t);
  }), a;
}
function Sd(e, t) {
  const a = Wm(e, t);
  return (i, n, r) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? i : Reflect.get(
    st(a, n) && n in i ? a : i,
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
  return /* @__PURE__ */ Hi(e) ? e : Cd(
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
function zl(e) {
  return Cd(
    e,
    !0,
    qm,
    Xm,
    lv
  );
}
function Cd(e, t, a, i, n) {
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
    s === 2 ? i : a
  );
  return n.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function nr(e) {
  return /* @__PURE__ */ Hi(e) ? /* @__PURE__ */ nr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Hi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Da(e) {
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
const Ka = (e) => ot(e) ? /* @__PURE__ */ Lt(e) : e, Lr = (e) => ot(e) ? /* @__PURE__ */ zl(e) : e;
// @__NO_SIDE_EFFECTS__
function ta(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function j(e) {
  return ov(e, !1);
}
// @__NO_SIDE_EFFECTS__
function sv(e) {
  return ov(e, !0);
}
function ov(e, t) {
  return /* @__PURE__ */ ta(e) ? e : new ay(e, t);
}
class ay {
  constructor(t, a) {
    this.dep = new ou(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = a ? t : /* @__PURE__ */ lt(t), this._value = a ? t : Ka(t), this.__v_isShallow = a;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const a = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Da(t) || /* @__PURE__ */ Hi(t);
    t = i ? t : /* @__PURE__ */ lt(t), jt(t, a) && (this._rawValue = t, this._value = i ? t : Ka(t), this.dep.trigger());
  }
}
function u(e) {
  return /* @__PURE__ */ ta(e) ? e.value : e;
}
function Di(e) {
  return ze(e) ? e() : u(e);
}
const iy = {
  get: (e, t, a) => t === "__v_raw" ? e : u(Reflect.get(e, t, a)),
  set: (e, t, a, i) => {
    const n = e[t];
    return /* @__PURE__ */ ta(n) && !/* @__PURE__ */ ta(a) ? (n.value = a, !0) : Reflect.set(e, t, a, i);
  }
};
function uv(e) {
  return /* @__PURE__ */ nr(e) ? e : new Proxy(e, iy);
}
class ny {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const a = this.dep = new ou(), { get: i, set: n } = t(a.track.bind(a), a.trigger.bind(a));
    this._get = i, this._set = n;
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
  constructor(t, a, i) {
    this.fn = t, this.setter = a, this._value = void 0, this.dep = new ou(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ml - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !a, this.isSSR = i;
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
function sy(e, t, a = !1) {
  let i, n;
  return ze(e) ? i = e : (i = e.get, n = e.set), new ly(i, n, a);
}
const Fs = {}, to = /* @__PURE__ */ new WeakMap();
let Zn;
function oy(e, t = !1, a = Zn) {
  if (a) {
    let i = to.get(a);
    i || to.set(a, i = []), i.push(e);
  }
}
function uy(e, t, a = tt) {
  const { immediate: i, deep: n, once: r, scheduler: s, augmentJob: c, call: d } = a, _ = (D) => n ? D : /* @__PURE__ */ Da(D) || n === !1 || n === 0 ? Ii(D, 1) : Ii(D);
  let v, y, m, k, S = !1, C = !1;
  if (/* @__PURE__ */ ta(e) ? (y = () => e.value, S = /* @__PURE__ */ Da(e)) : /* @__PURE__ */ nr(e) ? (y = () => _(e), S = !0) : Le(e) ? (C = !0, S = e.some((D) => /* @__PURE__ */ nr(D) || /* @__PURE__ */ Da(D)), y = () => e.map((D) => {
    if (/* @__PURE__ */ ta(D))
      return D.value;
    if (/* @__PURE__ */ nr(D))
      return _(D);
    if (ze(D))
      return d ? d(D, 2) : D();
  })) : ze(e) ? t ? y = d ? () => d(e, 2) : e : y = () => {
    if (m) {
      ji();
      try {
        m();
      } finally {
        Bi();
      }
    }
    const D = Zn;
    Zn = v;
    try {
      return d ? d(e, 3, [k]) : e(k);
    } finally {
      Zn = D;
    }
  } : y = Pa, t && n) {
    const D = y, fe = n === !0 ? 1 / 0 : n;
    y = () => Ii(D(), fe);
  }
  const $ = Dm(), L = () => {
    v.stop(), $ && $.active && gd($.effects, v);
  };
  if (r && t) {
    const D = t;
    t = (...fe) => {
      const J = D(...fe);
      return L(), J;
    };
  }
  let P = C ? new Array(e.length).fill(Fs) : Fs;
  const F = (D) => {
    if (!(!(v.flags & 1) || !v.dirty && !D))
      if (t) {
        const fe = v.run();
        if (D || n || S || (C ? fe.some((J, x) => jt(J, P[x])) : jt(fe, P))) {
          m && m();
          const J = Zn;
          Zn = v;
          try {
            const x = [
              fe,
              // pass undefined as the old value when it's changed for the first time
              P === Fs ? void 0 : C && P[0] === Fs ? [] : P,
              k
            ];
            P = fe, d ? d(t, 3, x) : (
              // @ts-expect-error
              t(...x)
            );
          } finally {
            Zn = J;
          }
        }
      } else
        v.run();
  };
  return c && c(F), v = new Kp(y), v.scheduler = s ? () => s(F, !1) : F, k = (D) => oy(D, !1, v), m = v.onStop = () => {
    const D = to.get(v);
    if (D) {
      if (d)
        d(D, 4);
      else
        for (const fe of D) fe();
      to.delete(v);
    }
  }, t ? i ? F(!0) : P = v.run() : s ? s(F.bind(null, !0), !0) : v.run(), L.pause = v.pause.bind(v), L.resume = v.resume.bind(v), L.stop = L, L;
}
function Ii(e, t = 1 / 0, a) {
  if (t <= 0 || !ot(e) || e.__v_skip || (a = a || /* @__PURE__ */ new Map(), (a.get(e) || 0) >= t))
    return e;
  if (a.set(e, t), t--, /* @__PURE__ */ ta(e))
    Ii(e.value, t, a);
  else if (Le(e))
    for (let i = 0; i < e.length; i++)
      Ii(e[i], t, a);
  else if (Ui(e) || yn(e))
    e.forEach((i) => {
      Ii(i, t, a);
    });
  else if (Bp(e)) {
    for (const i in e)
      Ii(e[i], t, a);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Ii(e[i], t, a);
  }
  return e;
}
function rs(e, t, a, i) {
  try {
    return i ? e(...i) : e();
  } catch (n) {
    cu(n, t, a);
  }
}
function Fa(e, t, a, i) {
  if (ze(e)) {
    const n = rs(e, t, a, i);
    return n && zp(n) && n.catch((r) => {
      cu(r, t, a);
    }), n;
  }
  if (Le(e)) {
    const n = [];
    for (let r = 0; r < e.length; r++)
      n.push(Fa(e[r], t, a, i));
    return n;
  }
}
function cu(e, t, a, i = !0) {
  const n = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || tt;
  if (t) {
    let c = t.parent;
    const d = t.proxy, _ = `https://vuejs.org/error-reference/#runtime-${a}`;
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
      ji(), rs(r, null, 10, [
        e,
        d,
        _
      ]), Bi();
      return;
    }
  }
  cy(e, a, n, i, s);
}
function cy(e, t, a, i = !0, n = !1) {
  if (n)
    throw e;
  console.error(e);
}
const ca = [];
let ii = -1;
const $r = [];
let vn = null, Cr = 0;
const cv = /* @__PURE__ */ Promise.resolve();
let ao = null;
function Pt(e) {
  const t = ao || cv;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function dy(e) {
  let t = ii + 1, a = ca.length;
  for (; t < a; ) {
    const i = t + a >>> 1, n = ca[i], r = jl(n);
    r < e || r === e && n.flags & 2 ? t = i + 1 : a = i;
  }
  return t;
}
function Ad(e) {
  if (!(e.flags & 1)) {
    const t = jl(e), a = ca[ca.length - 1];
    !a || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jl(a) ? ca.push(e) : ca.splice(dy(t), 0, e), e.flags |= 1, dv();
  }
}
function dv() {
  ao || (ao = cv.then(pv));
}
function fv(e) {
  if (!Le(e))
    vn && e.id === -1 ? vn.splice(Cr + 1, 0, e) : e.flags & 1 || ($r.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      $r.push(e[t]);
  dv();
}
function Gf(e, t, a = ii + 1) {
  for (; a < ca.length; a++) {
    const i = ca[a];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      ca.splice(a, 1), a--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function hv(e) {
  if ($r.length) {
    const t = [...new Set($r)].sort(
      (a, i) => jl(a) - jl(i)
    );
    if ($r.length = 0, vn) {
      for (let a = 0; a < t.length; a++)
        vn.push(t[a]);
      return;
    }
    for (vn = t, Cr = 0; Cr < vn.length; Cr++) {
      const a = vn[Cr];
      a.flags & 4 && (a.flags &= -2), a.flags & 8 || a(), a.flags &= -2;
    }
    vn = null, Cr = 0;
  }
}
const jl = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pv(e) {
  try {
    for (ii = 0; ii < ca.length; ii++) {
      const t = ca[ii];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), rs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ii < ca.length; ii++) {
      const t = ca[ii];
      t && (t.flags &= -2);
    }
    ii = -1, ca.length = 0, hv(), ao = null, (ca.length || $r.length) && pv();
  }
}
let Ht = null, du = null;
function io(e) {
  const t = Ht;
  return Ht = e, du = e && e.type.__scopeId || null, t;
}
function fy(e) {
  du = e;
}
function hy() {
  du = null;
}
const py = (e) => ke;
function ke(e, t = Ht, a) {
  if (!t || e._n)
    return e;
  const i = (...n) => {
    i._d && oo(-1);
    const r = io(t), s = Fi.length;
    let c;
    try {
      c = e(...n);
    } finally {
      for (let d = Fi.length; d > s; d--) Ld();
      io(r), i._d && oo(1);
    }
    return c;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function be(e, t) {
  if (Ht === null)
    return e;
  const a = gu(Ht), i = e.dirs || (e.dirs = []);
  for (let n = 0; n < t.length; n++) {
    let [r, s, c, d = tt] = t[n];
    r && (ze(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ii(s), i.push({
      dir: r,
      instance: a,
      value: s,
      oldValue: void 0,
      arg: c,
      modifiers: d
    }));
  }
  return e;
}
function Vn(e, t, a, i) {
  const n = e.dirs, r = t && t.dirs;
  for (let s = 0; s < n.length; s++) {
    const c = n[s];
    r && (c.oldValue = r[s].value);
    let d = c.dir[i];
    d && (ji(), Fa(d, a, 8, [
      e.el,
      c,
      e,
      t
    ]), Bi());
  }
}
function Ra(e, t) {
  if (Qt) {
    let a = Qt.provides;
    const i = Qt.parent && Qt.parent.provides;
    i === a && (a = Qt.provides = Object.create(i)), a[e] = t;
  }
}
function Jt(e, t, a = !1) {
  const i = Tn();
  if (i || Or) {
    let n = Or ? Or._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (n && e in n)
      return n[e];
    if (arguments.length > 1)
      return a && ze(t) ? t.call(i && i.proxy) : t;
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
function Ge(e, t, a) {
  return fu(e, t, a);
}
function fu(e, t, a = tt) {
  const { immediate: i, deep: n, flush: r, once: s } = a, c = Nt({}, a), d = t && i || !t && r !== "post";
  let _;
  if (Kl) {
    if (r === "sync") {
      const k = by();
      _ = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!d) {
      const k = () => {
      };
      return k.stop = Pa, k.resume = Pa, k.pause = Pa, k;
    }
  }
  const v = Qt;
  c.call = (k, S, C) => Fa(k, v, S, C);
  let y = !1;
  r === "post" ? c.scheduler = (k) => {
    ua(k, v && v.suspense);
  } : r !== "sync" && (y = !0, c.scheduler = (k, S) => {
    S ? k() : Ad(k);
  }), c.augmentJob = (k) => {
    t && (k.flags |= 4), y && (k.flags |= 2, v && (k.id = v.uid, k.i = v));
  };
  const m = uy(e, t, c);
  return Kl && (_ ? _.push(m) : d && m()), m;
}
function yy(e, t, a) {
  const i = this.proxy, n = bt(e) ? e.includes(".") ? vv(i, e) : () => i[e] : e.bind(i, i);
  let r;
  ze(t) ? r = t : (r = t.handler, a = t);
  const s = ss(this), c = fu(n, r.bind(i), a);
  return s(), c;
}
function vv(e, t) {
  const a = t.split(".");
  return () => {
    let i = e;
    for (let n = 0; n < a.length && i; n++)
      i = i[a[n]];
    return i;
  };
}
const fn = /* @__PURE__ */ new WeakMap(), bv = /* @__PURE__ */ Symbol("_vte"), hu = (e) => e.__isTeleport, Jn = (e) => e && (e.disabled || e.disabled === ""), _y = (e) => e && (e.defer || e.defer === ""), Kf = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Wf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Mc = (e, t) => {
  const a = e && e.to;
  return bt(a) ? t ? t(a) : null : a;
}, wy = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, a, i, n, r, s, c, d, _) {
    const {
      mc: v,
      pc: y,
      pbc: m,
      o: { insert: k, querySelector: S, createText: C, createComment: $, parentNode: L }
    } = _, P = Jn(t.props);
    let { dynamicChildren: F } = t;
    const D = (x, V, W) => {
      x.shapeFlag & 16 && v(
        x.children,
        V,
        W,
        n,
        r,
        s,
        c,
        d
      );
    }, fe = (x = t) => {
      const V = Jn(x.props), W = x.target = Mc(x.props, S), Z = Uc(W, x, C, k);
      W && (s !== "svg" && Kf(W) ? s = "svg" : s !== "mathml" && Wf(W) && (s = "mathml"), n && n.isCE && (n.ce._teleportTargets || (n.ce._teleportTargets = /* @__PURE__ */ new Set())).add(W), V || (D(x, W, Z), bl(x, !1)));
    }, J = (x) => {
      const V = () => {
        if (fn.get(x) === V) {
          if (fn.delete(x), Jn(x.props)) {
            const W = L(x.el) || a;
            D(x, W, x.anchor), bl(x, !0);
          }
          fe(x);
        }
      };
      fn.set(x, V), ua(V, r);
    };
    if (e == null) {
      const x = t.el = C(""), V = t.anchor = C("");
      if (k(x, a, i), k(V, a, i), _y(t.props) || r && r.pendingBranch) {
        J(t);
        return;
      }
      P && (D(t, a, V), bl(t, !0)), fe();
    } else {
      t.el = e.el;
      const x = t.anchor = e.anchor, V = fn.get(e);
      if (V) {
        V.flags |= 8, fn.delete(e), J(t);
        return;
      }
      t.targetStart = e.targetStart;
      const W = t.target = e.target, Z = t.targetAnchor = e.targetAnchor, ie = Jn(e.props), B = ie ? a : W, q = ie ? x : Z;
      if (s === "svg" || Kf(W) ? s = "svg" : (s === "mathml" || Wf(W)) && (s = "mathml"), F ? (m(
        e.dynamicChildren,
        F,
        B,
        n,
        r,
        s,
        c
      ), Id(e, t, !0)) : d || y(
        e,
        t,
        B,
        q,
        n,
        r,
        s,
        c,
        !1
      ), P)
        ie ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ms(
          t,
          a,
          x,
          _,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const M = Mc(t.props, S);
        M && (t.target = M, Ms(
          t,
          M,
          null,
          _,
          0
        ));
      } else ie && Ms(
        t,
        W,
        Z,
        _,
        1
      );
      bl(t, P);
    }
  },
  remove(e, t, a, { um: i, o: { remove: n } }, r) {
    const {
      shapeFlag: s,
      children: c,
      anchor: d,
      targetStart: _,
      targetAnchor: v,
      target: y,
      props: m
    } = e, k = Jn(m), S = r || !k, C = fn.get(e);
    if (C && (C.flags |= 8, fn.delete(e)), y && (n(_), n(v)), r && n(d), !C && (k || y) && s & 16)
      for (let $ = 0; $ < c.length; $++) {
        const L = c[$];
        i(
          L,
          t,
          a,
          S,
          !!L.dynamicChildren
        );
      }
  },
  move: Ms,
  hydrate: ky
};
function Ms(e, t, a, { o: { insert: i }, m: n }, r = 2) {
  r === 0 && i(e.targetAnchor, t, a);
  const { el: s, anchor: c, shapeFlag: d, children: _, props: v } = e, y = r === 2;
  if (y && i(s, t, a), !fn.has(e) && (!y || Jn(v)) && d & 16)
    for (let m = 0; m < _.length; m++)
      n(
        _[m],
        t,
        a,
        2
      );
  y && i(c, t, a);
}
function ky(e, t, a, i, n, r, {
  o: { nextSibling: s, parentNode: c, querySelector: d, insert: _, createText: v }
}, y) {
  function m($, L) {
    let P = L;
    for (; P; ) {
      if (P && P.nodeType === 8) {
        if (P.data === "teleport start anchor")
          t.targetStart = P;
        else if (P.data === "teleport anchor") {
          t.targetAnchor = P, $._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      P = s(P);
    }
  }
  function k($, L) {
    L.anchor = y(
      s($),
      L,
      c($),
      a,
      i,
      n,
      r
    );
  }
  const S = t.target = Mc(
    t.props,
    d
  ), C = Jn(t.props);
  if (S) {
    const $ = S._lpa || S.firstChild;
    t.shapeFlag & 16 && (C ? (k(e, t), m(S, $), t.targetAnchor || Uc(
      S,
      t,
      v,
      _,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      c(e) === S ? e : null
    )) : (t.anchor = s(e), m(S, $), t.targetAnchor || Uc(S, t, v, _), y(
      $ && s($),
      t,
      S,
      a,
      i,
      n,
      r
    ))), bl(t, C);
  } else C && t.shapeFlag & 16 && (k(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const Ed = wy;
function bl(e, t) {
  const a = e.ctx;
  if (a && a.ut) {
    let i, n;
    for (t ? (i = e.el, n = e.anchor) : (i = e.targetStart, n = e.targetAnchor); i && i !== n; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", a.uid), i = i.nextSibling;
    a.ut();
  }
}
function Uc(e, t, a, i, n = null) {
  const r = t.targetStart = a(""), s = t.targetAnchor = a("");
  return r[bv] = s, e && (i(r, e, n), i(s, e, n)), s;
}
const Ia = /* @__PURE__ */ Symbol("_leaveCb"), ll = /* @__PURE__ */ Symbol("_enterCb");
function Sy() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ct(() => {
    e.isMounted = !0;
  }), Ca(() => {
    e.isUnmounting = !0;
  }), e;
}
const $a = [Function, Array], gv = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: $a,
  onEnter: $a,
  onAfterEnter: $a,
  onEnterCancelled: $a,
  // leave
  onBeforeLeave: $a,
  onLeave: $a,
  onAfterLeave: $a,
  onLeaveCancelled: $a,
  // appear
  onBeforeAppear: $a,
  onAppear: $a,
  onAfterAppear: $a,
  onAppearCancelled: $a
}, mv = (e) => {
  const t = e.subTree;
  return t.component ? mv(t.component) : t;
}, Cy = {
  name: "BaseTransition",
  props: gv,
  setup(e, { slots: t }) {
    const a = Tn(), i = Sy();
    return () => {
      const n = t.default && wv(t.default(), !0), r = n && n.length ? yv(n) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        a.subTree ? A() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ lt(e), { mode: c } = s;
      if (i.isLeaving)
        return Xu(r);
      const d = no(r);
      if (!d)
        return Xu(r);
      let _ = zc(
        d,
        s,
        i,
        a,
        // #11061, ensure enterHooks is fresh after clone
        (y) => _ = y
      );
      d.type !== Bt && Bl(d, _);
      let v = a.subTree && no(a.subTree);
      if (v && v.type !== Bt && !Qn(v, d) && mv(a).type !== Bt) {
        let y = zc(
          v,
          s,
          i,
          a
        );
        if (Bl(v, y), c === "out-in" && d.type !== Bt)
          return i.isLeaving = !0, y.afterLeave = () => {
            i.isLeaving = !1, a.job.flags & 8 || a.update(), delete y.afterLeave, v = void 0;
          }, Xu(r);
        c === "in-out" && d.type !== Bt ? y.delayLeave = (m, k, S) => {
          const C = _v(
            i,
            v
          );
          C[String(v.key)] = v, m[Ia] = () => {
            k(), m[Ia] = void 0, delete _.delayedLeave, v = void 0;
          }, _.delayedLeave = () => {
            S(), delete _.delayedLeave, v = void 0;
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
    for (const a of e)
      if (a.type !== Bt) {
        t = a;
        break;
      }
  }
  return t;
}
const Ty = Cy;
function _v(e, t) {
  const { leavingVNodes: a } = e;
  let i = a.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), a.set(t.type, i)), i;
}
function zc(e, t, a, i, n) {
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
    onAfterLeave: S,
    onLeaveCancelled: C,
    onBeforeAppear: $,
    onAppear: L,
    onAfterAppear: P,
    onAppearCancelled: F
  } = t, D = String(e.key), fe = _v(a, e), J = (W, Z) => {
    W && Fa(
      W,
      i,
      9,
      Z
    );
  }, x = (W, Z) => {
    const ie = Z[1];
    J(W, Z), Le(W) ? W.every((B) => B.length <= 1) && ie() : W.length <= 1 && ie();
  }, V = {
    mode: s,
    persisted: c,
    beforeEnter(W) {
      let Z = d;
      if (!a.isMounted)
        if (r)
          Z = $ || d;
        else
          return;
      W[Ia] && W[Ia](
        !0
        /* cancelled */
      );
      const ie = fe[D];
      ie && Qn(e, ie) && ie.el[Ia] && ie.el[Ia](), J(Z, [W]);
    },
    enter(W) {
      if (fe[D] === e) return;
      let Z = _, ie = v, B = y;
      if (!a.isMounted)
        if (r)
          Z = L || _, ie = P || v, B = F || y;
        else
          return;
      let q = !1;
      W[ll] = (G) => {
        q || (q = !0, G ? J(B, [W]) : J(ie, [W]), V.delayedLeave && V.delayedLeave(), W[ll] = void 0);
      };
      const M = W[ll].bind(null, !1);
      Z ? x(Z, [W, M]) : M();
    },
    leave(W, Z) {
      const ie = String(e.key);
      if (W[ll] && W[ll](
        !0
        /* cancelled */
      ), a.isUnmounting)
        return Z();
      J(m, [W]);
      let B = !1;
      W[Ia] = (M) => {
        B || (B = !0, Z(), M ? J(C, [W]) : J(S, [W]), W[Ia] = void 0, fe[ie] === e && delete fe[ie]);
      };
      const q = W[Ia].bind(null, !1);
      fe[ie] = e, k ? x(k, [W, q]) : q();
    },
    clone(W) {
      const Z = zc(
        W,
        t,
        a,
        i,
        n
      );
      return n && n(Z), Z;
    }
  };
  return V;
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
  const { shapeFlag: t, children: a } = e;
  if (a) {
    if (t & 16)
      return a[0];
    if (t & 32 && ze(a.default))
      return a.default();
  }
}
function Bl(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const a = e.component.subTree;
    Bl(
      hu(a.type) && no(a) || a,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function wv(e, t = !1, a) {
  let i = [], n = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const c = a == null ? s.key : String(a) + String(s.key != null ? s.key : r);
    s.type === K ? (s.patchFlag & 128 && n++, i = i.concat(
      wv(s.children, t, c)
    )) : (t || s.type !== Bt) && i.push(c != null ? Sn(s, { key: c }) : s);
  }
  if (n > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function qt(e, t) {
  return ze(e) ? (
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
  const t = Tn(), a = /* @__PURE__ */ sv(null);
  if (t) {
    const n = t.refs === tt ? t.refs = {} : t.refs;
    Object.defineProperty(n, e, {
      enumerable: !0,
      get: () => a.value,
      set: (r) => a.value = r
    });
  }
  return a;
}
function Yf(e, t) {
  let a;
  return !!((a = Object.getOwnPropertyDescriptor(e, t)) && !a.configurable);
}
const ro = /* @__PURE__ */ new WeakMap();
function Tl(e, t, a, i, n = !1) {
  if (Le(e)) {
    e.forEach(
      (C, $) => Tl(
        C,
        t && (Le(t) ? t[$] : t),
        a,
        i,
        n
      )
    );
    return;
  }
  if (xr(i) && !n) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Tl(e, t, a, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? gu(i.component) : i.el, s = n ? null : r, { i: c, r: d } = e, _ = t && t.r, v = c.refs === tt ? c.refs = {} : c.refs, y = c.setupState, m = /* @__PURE__ */ lt(y), k = y === tt ? Up : (C) => Yf(v, C) ? !1 : st(m, C), S = (C, $) => !($ && Yf(v, $));
  if (_ != null && _ !== d) {
    if (Zf(t), bt(_))
      v[_] = null, k(_) && (y[_] = null);
    else if (/* @__PURE__ */ ta(_)) {
      const C = t;
      S(_, C.k) && (_.value = null), C.k && (v[C.k] = null);
    }
  }
  if (ze(d))
    rs(d, c, 12, [s, v]);
  else {
    const C = bt(d), $ = /* @__PURE__ */ ta(d);
    if (C || $) {
      const L = () => {
        if (e.f) {
          const P = C ? k(d) ? y[d] : v[d] : S() || !e.k ? d.value : v[e.k];
          if (n)
            Le(P) && gd(P, r);
          else if (Le(P))
            P.includes(r) || P.push(r);
          else if (C)
            v[d] = [r], k(d) && (y[d] = v[d]);
          else {
            const F = [r];
            S(d, e.k) && (d.value = F), e.k && (v[e.k] = F);
          }
        } else C ? (v[d] = s, k(d) && (y[d] = s)) : $ && (S(d, e.k) && (d.value = s), e.k && (v[e.k] = s));
      };
      if (s) {
        const P = () => {
          L(), ro.delete(e);
        };
        P.id = -1, ro.set(e, P), ua(P, a);
      } else
        Zf(e), L();
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
function Sv(e, t, a = Qt) {
  const i = e.__wdc || (e.__wdc = () => {
    let n = a;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return e();
  });
  if (vu(t, i, a), a) {
    let n = a.parent;
    for (; n && n.parent; )
      pu(n.parent.vnode) && Oy(i, t, a, n), n = n.parent;
  }
}
function Oy(e, t, a, i) {
  const n = vu(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Dr(() => {
    gd(i[t], n);
  }, a);
}
function vu(e, t, a = Qt, i = !1) {
  if (a) {
    const n = a[e] || (a[e] = []), r = t.__weh || (t.__weh = (...s) => {
      ji();
      const c = ss(a), d = Fa(t, a, e, s);
      return c(), Bi(), d;
    });
    return i ? n.unshift(r) : n.push(r), r;
  }
}
const Gi = (e) => (t, a = Qt) => {
  (!Kl || e === "sp") && vu(e, (...i) => t(...i), a);
}, Cv = Gi("bm"), Ct = Gi("m"), Tv = Gi(
  "bu"
), Ny = Gi("u"), Ca = Gi(
  "bum"
), Dr = Gi("um"), Ry = Gi(
  "sp"
), Iy = Gi("rtg"), Ly = Gi("rtc");
function Py(e, t = Qt) {
  vu("ec", e, t);
}
const $d = "components", Dy = "directives";
function Xe(e, t) {
  return Od($d, e, !0, t) || e;
}
const Av = /* @__PURE__ */ Symbol.for("v-ndc");
function xd(e) {
  return bt(e) ? Od($d, e, !1) || e : e || Av;
}
function Xf(e) {
  return Od(Dy, e);
}
function Od(e, t, a = !0, i = !1) {
  const n = Ht || Qt;
  if (n) {
    const r = n.type;
    if (e === $d) {
      const c = m1(
        r,
        !1
      );
      if (c && (c === t || c === ea(t) || c === ru(ea(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Jf(n[e] || r[e], t) || // global registration
      Jf(n.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function Jf(e, t) {
  return e && (e[t] || e[ea(t)] || e[ru(ea(t))]);
}
function oe(e, t, a, i) {
  let n;
  const r = a, s = Le(e);
  if (s || bt(e)) {
    const c = s && /* @__PURE__ */ nr(e);
    let d = !1, _ = !1;
    c && (d = !/* @__PURE__ */ Da(e), _ = /* @__PURE__ */ Hi(e), e = uu(e)), n = new Array(e.length);
    for (let v = 0, y = e.length; v < y; v++)
      n[v] = t(
        d ? _ ? Lr(Ka(e[v])) : Ka(e[v]) : e[v],
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
function He(e, t, a, i, n, r) {
  if (a == null && (a = {}), Ht.ce || Ht.parent && xr(Ht.parent) && Ht.parent.ce) {
    const _ = a, v = Object.keys(_).length > 0;
    return t !== "default" && (_.name = t), f(), Pe(
      K,
      null,
      [de("slot", _, i && i())],
      v ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const c = Fi.length;
  f();
  let d;
  try {
    const _ = s && Ev(s(a)), v = a.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    _ && _.key;
    d = Pe(
      K,
      {
        key: (v && !Ga(v) ? v : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!_ && i ? "_fb" : "")
      },
      _ || (i ? i() : []),
      _ && e._ === 1 ? 64 : -2
    );
  } catch (_) {
    for (let v = Fi.length; v > c; v--) Ld();
    throw _;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !n && d.scopeId && (d.slotScopeIds = [d.scopeId + "-s"]), d;
}
function Ev(e) {
  return e.some((t) => Vl(t) ? !(t.type === Bt || t.type === K && !Ev(t.children)) : !0) ? e : null;
}
const jc = (e) => e ? Yv(e) ? gu(e) : jc(e.parent) : null, Al = (
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
), Ju = (e, t) => e !== tt && !e.__isScriptSetup && st(e, t), Fy = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: a, setupState: i, data: n, props: r, accessCache: s, type: c, appContext: d } = e;
    if (t[0] !== "$") {
      const m = s[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return i[t];
          case 2:
            return n[t];
          case 4:
            return a[t];
          case 3:
            return r[t];
        }
      else {
        if (Ju(i, t))
          return s[t] = 1, i[t];
        if (n !== tt && st(n, t))
          return s[t] = 2, n[t];
        if (st(r, t))
          return s[t] = 3, r[t];
        if (a !== tt && st(a, t))
          return s[t] = 4, a[t];
        Bc && (s[t] = 0);
      }
    }
    const _ = Al[t];
    let v, y;
    if (_)
      return t === "$attrs" && Xt(e.attrs, "get", ""), _(e);
    if (
      // css module (injected by vue-loader)
      (v = c.__cssModules) && (v = v[t])
    )
      return v;
    if (a !== tt && st(a, t))
      return s[t] = 4, a[t];
    if (
      // global properties
      y = d.config.globalProperties, st(y, t)
    )
      return y[t];
  },
  set({ _: e }, t, a) {
    const { data: i, setupState: n, ctx: r } = e;
    return Ju(n, t) ? (n[t] = a, !0) : i !== tt && st(i, t) ? (i[t] = a, !0) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = a, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: a, ctx: i, appContext: n, props: r, type: s }
  }, c) {
    let d;
    return !!(a[c] || e !== tt && c[0] !== "$" && st(e, c) || Ju(t, c) || st(r, c) || st(i, c) || st(Al, c) || st(n.config.globalProperties, c) || (d = s.__cssModules) && d[c]);
  },
  defineProperty(e, t, a) {
    return a.get != null ? e._.accessCache[t] = 0 : st(a, "value") && this.set(e, t, a.value, null), Reflect.defineProperty(e, t, a);
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
  return Le(e) ? e.reduce(
    (t, a) => (t[a] = null, t),
    {}
  ) : e;
}
function zy(e, t) {
  return !e || !t ? e || t : Le(e) && Le(t) ? e.concat(t) : Nt({}, lo(e), lo(t));
}
let Bc = !0;
function jy(e) {
  const t = Ov(e), a = e.proxy, i = e.ctx;
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
    updated: S,
    activated: C,
    deactivated: $,
    beforeDestroy: L,
    beforeUnmount: P,
    destroyed: F,
    unmounted: D,
    render: fe,
    renderTracked: J,
    renderTriggered: x,
    errorCaptured: V,
    serverPrefetch: W,
    // public API
    expose: Z,
    inheritAttrs: ie,
    // assets
    components: B,
    directives: q,
    filters: M
  } = t;
  if (_ && By(_, i, null), s)
    for (const ne in s) {
      const X = s[ne];
      ze(X) && (i[ne] = X.bind(a));
    }
  if (n) {
    const ne = n.call(a, a);
    ot(ne) && (e.data = /* @__PURE__ */ Lt(ne));
  }
  if (Bc = !0, r)
    for (const ne in r) {
      const X = r[ne], le = ze(X) ? X.bind(a, a) : ze(X.get) ? X.get.bind(a, a) : Pa, _e = !ze(X) && ze(X.set) ? X.set.bind(a) : Pa, Re = H({
        get: le,
        set: _e
      });
      Object.defineProperty(i, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: ($e) => Re.value = $e
      });
    }
  if (c)
    for (const ne in c)
      xv(c[ne], i, a, ne);
  if (d) {
    const ne = ze(d) ? d.call(a) : d;
    Reflect.ownKeys(ne).forEach((X) => {
      Ra(X, ne[X]);
    });
  }
  v && Qf(v, e, "c");
  function ee(ne, X) {
    Le(X) ? X.forEach((le) => ne(le.bind(a))) : X && ne(X.bind(a));
  }
  if (ee(Cv, y), ee(Ct, m), ee(Tv, k), ee(Ny, S), ee($y, C), ee(xy, $), ee(Py, V), ee(Ly, J), ee(Iy, x), ee(Ca, P), ee(Dr, D), ee(Ry, W), Le(Z))
    if (Z.length) {
      const ne = e.exposed || (e.exposed = {});
      Z.forEach((X) => {
        Object.defineProperty(ne, X, {
          get: () => a[X],
          set: (le) => a[X] = le,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  fe && e.render === Pa && (e.render = fe), ie != null && (e.inheritAttrs = ie), B && (e.components = B), q && (e.directives = q), W && kv(e);
}
function By(e, t, a = Pa) {
  Le(e) && (e = Hc(e));
  for (const i in e) {
    const n = e[i];
    let r;
    ot(n) ? "default" in n ? r = Jt(
      n.from || i,
      n.default,
      !0
    ) : r = Jt(n.from || i) : r = Jt(n), /* @__PURE__ */ ta(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[i] = r;
  }
}
function Qf(e, t, a) {
  Fa(
    Le(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    a
  );
}
function xv(e, t, a, i) {
  let n = i.includes(".") ? vv(a, i) : () => a[i];
  if (bt(e)) {
    const r = t[e];
    ze(r) && Ge(n, r);
  } else if (ze(e))
    Ge(n, e.bind(a));
  else if (ot(e))
    if (Le(e))
      e.forEach((r) => xv(r, t, a, i));
    else {
      const r = ze(e.handler) ? e.handler.bind(a) : t[e.handler];
      ze(r) && Ge(n, r, e);
    }
}
function Ov(e) {
  const t = e.type, { mixins: a, extends: i } = t, {
    mixins: n,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, c = r.get(t);
  let d;
  return c ? d = c : !n.length && !a && !i ? d = t : (d = {}, n.length && n.forEach(
    (_) => so(d, _, s, !0)
  ), so(d, t, s)), ot(t) && r.set(t, d), d;
}
function so(e, t, a, i = !1) {
  const { mixins: n, extends: r } = t;
  r && so(e, r, a, !0), n && n.forEach(
    (s) => so(e, s, a, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const c = Hy[s] || a && a[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const Hy = {
  data: eh,
  props: th,
  emits: th,
  // objects
  methods: gl,
  computed: gl,
  // lifecycle
  beforeCreate: oa,
  created: oa,
  beforeMount: oa,
  mounted: oa,
  beforeUpdate: oa,
  updated: oa,
  beforeDestroy: oa,
  beforeUnmount: oa,
  destroyed: oa,
  unmounted: oa,
  activated: oa,
  deactivated: oa,
  errorCaptured: oa,
  serverPrefetch: oa,
  // assets
  components: gl,
  directives: gl,
  // watch
  watch: qy,
  // provide / inject
  provide: eh,
  inject: Vy
};
function eh(e, t) {
  return t ? e ? function() {
    return Nt(
      ze(e) ? e.call(this, this) : e,
      ze(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Vy(e, t) {
  return gl(Hc(e), Hc(t));
}
function Hc(e) {
  if (Le(e)) {
    const t = {};
    for (let a = 0; a < e.length; a++)
      t[e[a]] = e[a];
    return t;
  }
  return e;
}
function oa(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function gl(e, t) {
  return e ? Nt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function th(e, t) {
  return e ? Le(e) && Le(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Nt(
    /* @__PURE__ */ Object.create(null),
    lo(e),
    lo(t ?? {})
  ) : t;
}
function qy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const a = Nt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    a[i] = oa(e[i], t[i]);
  return a;
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
  return function(i, n = null) {
    ze(i) || (i = Nt({}, i)), n != null && !ot(n) && (n = null);
    const r = Nv(), s = /* @__PURE__ */ new WeakSet(), c = [];
    let d = !1;
    const _ = r.app = {
      _uid: Gy++,
      _component: i,
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
        return s.has(v) || (v && ze(v.install) ? (s.add(v), v.install(_, ...y)) : ze(v) && (s.add(v), v(_, ...y))), _;
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
          const k = _._ceVNode || de(i, n);
          return k.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(k, v, m), d = !0, _._container = v, v.__vue_app__ = _, gu(k.component);
        }
      },
      onUnmount(v) {
        c.push(v);
      },
      unmount() {
        d && (Fa(
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
function Rv(e, t, a = tt) {
  const i = Tn(), n = ea(t), r = qi(t), s = Iv(e, n), c = ry((d, _) => {
    let v, y = tt, m;
    return my(() => {
      const k = e[n];
      jt(v, k) && (v = k, _());
    }), {
      get() {
        return d(), a.get ? a.get(v) : v;
      },
      set(k) {
        const S = a.set ? a.set(k) : k;
        if (!jt(S, v) && !(y !== tt && jt(k, y)))
          return;
        const C = i.vnode.props, $ = !!(C && // check if parent has passed v-model
        (t in C || n in C || r in C) && (`onUpdate:${t}` in C || `onUpdate:${n}` in C || `onUpdate:${r}` in C));
        $ || (v = k, _()), i.emit(`update:${t}`, S), jt(k, y) && (jt(k, S) && !jt(S, m) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        $ && y !== tt && !jt(S, v)) && _(), y = k, m = S;
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
const Iv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ea(t)}Modifiers`] || e[`${qi(t)}Modifiers`];
function Wy(e, t, ...a) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || tt;
  let n = a;
  const r = t.startsWith("update:"), s = r && Iv(i, t.slice(7));
  s && (s.trim && (n = a.map((v) => bt(v) ? v.trim() : v)), s.number && (n = n.map(lu)));
  let c, d = i[c = Gu(t)] || // also try camelCase event handler (#2249)
  i[c = Gu(ea(t))];
  !d && r && (d = i[c = Gu(qi(t))]), d && Fa(
    d,
    e,
    6,
    n
  );
  const _ = i[c + "Once"];
  if (_) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Fa(
      _,
      e,
      6,
      n
    );
  }
}
const Yy = /* @__PURE__ */ new WeakMap();
function Lv(e, t, a = !1) {
  const i = a ? Yy : t.emitsCache, n = i.get(e);
  if (n !== void 0)
    return n;
  const r = e.emits;
  let s = {}, c = !1;
  if (!ze(e)) {
    const d = (_) => {
      const v = Lv(_, t, !0);
      v && (c = !0, Nt(s, v));
    };
    !a && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !c ? (ot(e) && i.set(e, null), null) : (Le(r) ? r.forEach((d) => s[d] = null) : Nt(s, r), ot(e) && i.set(e, s), s);
}
function bu(e, t) {
  return !e || !au(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, qi(t)) || st(e, t));
}
function ah(e) {
  const {
    type: t,
    vnode: a,
    proxy: i,
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
    ctx: S,
    inheritAttrs: C
  } = e, $ = io(e);
  let L, P;
  try {
    if (a.shapeFlag & 4) {
      const D = n || i, fe = D;
      L = si(
        _.call(
          fe,
          D,
          v,
          y,
          k,
          m,
          S
        )
      ), P = c;
    } else {
      const D = t;
      L = si(
        D.length > 1 ? D(
          y,
          { attrs: c, slots: s, emit: d }
        ) : D(
          y,
          null
        )
      ), P = t.props ? c : Zy(c);
    }
  } catch (D) {
    Fi.length = 0, cu(D, e, 1), L = de(Bt);
  }
  let F = L;
  if (P && C !== !1) {
    const D = Object.keys(P), { shapeFlag: fe } = F;
    D.length && fe & 7 && (r && D.some(iu) && (P = Xy(
      P,
      r
    )), F = Sn(F, P, !1, !0));
  }
  if (a.dirs && (F = Sn(F, null, !1, !0), F.dirs = F.dirs ? F.dirs.concat(a.dirs) : a.dirs), a.transition) {
    const D = hu(F.type) && no(F) || F;
    Bl(D, a.transition);
  }
  return L = F, io($), L;
}
const Zy = (e) => {
  let t;
  for (const a in e)
    (a === "class" || a === "style" || au(a)) && ((t || (t = {}))[a] = e[a]);
  return t;
}, Xy = (e, t) => {
  const a = {};
  for (const i in e)
    (!iu(i) || !(i.slice(9) in t)) && (a[i] = e[i]);
  return a;
};
function Jy(e, t, a) {
  const { props: i, children: n, component: r } = e, { props: s, children: c, patchFlag: d } = t, _ = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (a && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return i ? ih(i, s, _) : !!s;
    if (d & 8) {
      const v = t.dynamicProps;
      for (let y = 0; y < v.length; y++) {
        const m = v[y];
        if (Pv(s, i, m) && !bu(_, m))
          return !0;
      }
    }
  } else
    return (n || c) && (!c || !c.$stable) ? !0 : i === s ? !1 : i ? s ? ih(i, s, _) : !0 : !!s;
  return !1;
}
function ih(e, t, a) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let n = 0; n < i.length; n++) {
    const r = i[n];
    if (Pv(t, e, r) && !bu(a, r))
      return !0;
  }
  return !1;
}
function Pv(e, t, a) {
  const i = e[a], n = t[a];
  return a === "style" && ot(i) && ot(n) ? !zi(i, n) : i !== n;
}
function Qy({ vnode: e, parent: t, suspense: a }, i) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = i, e = n), n === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  a && a.activeBranch === e && (a.vnode.el = i);
}
const Dv = {}, Fv = () => Object.create(Dv), Mv = (e) => Object.getPrototypeOf(e) === Dv;
function e1(e, t, a, i = !1) {
  const n = {}, r = Fv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Uv(e, t, n, r);
  for (const s in e.propsOptions[0])
    s in n || (n[s] = void 0);
  a ? e.props = i ? n : /* @__PURE__ */ ey(n) : e.type.props ? e.props = n : e.props = r, e.attrs = r;
}
function t1(e, t, a, i) {
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
    (i || s > 0) && !(s & 16)
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
            const S = ea(m);
            n[S] = Vc(
              d,
              c,
              S,
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
      ((v = qi(y)) === y || !st(t, v))) && (d ? a && // for camelCase
      (a[y] !== void 0 || // for kebab-case
      a[v] !== void 0) && (n[y] = Vc(
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
  _ && Ri(e.attrs, "set", "");
}
function Uv(e, t, a, i) {
  const [n, r] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let d in t) {
      if (kl(d))
        continue;
      const _ = t[d];
      let v;
      n && st(n, v = ea(d)) ? !r || !r.includes(v) ? a[v] = _ : (c || (c = {}))[v] = _ : bu(e.emitsOptions, d) || (!(d in i) || _ !== i[d]) && (i[d] = _, s = !0);
    }
  if (r) {
    const d = /* @__PURE__ */ lt(a), _ = c || tt;
    for (let v = 0; v < r.length; v++) {
      const y = r[v];
      a[y] = Vc(
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
function Vc(e, t, a, i, n, r) {
  const s = e[a];
  if (s != null) {
    const c = st(s, "default");
    if (c && i === void 0) {
      const d = s.default;
      if (s.type !== Function && !s.skipFactory && ze(d)) {
        const { propsDefaults: _ } = n;
        if (a in _)
          i = _[a];
        else {
          const v = ss(n);
          i = _[a] = d.call(
            null,
            t
          ), v();
        }
      } else
        i = d;
      n.ce && n.ce._setProp(a, i);
    }
    s[
      0
      /* shouldCast */
    ] && (r && !c ? i = !1 : s[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === qi(a)) && (i = !0));
  }
  return i;
}
const a1 = /* @__PURE__ */ new WeakMap();
function zv(e, t, a = !1) {
  const i = a ? a1 : t.propsCache, n = i.get(e);
  if (n)
    return n;
  const r = e.props, s = {}, c = [];
  let d = !1;
  if (!ze(e)) {
    const v = (y) => {
      d = !0;
      const [m, k] = zv(y, t, !0);
      Nt(s, m), k && c.push(...k);
    };
    !a && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return ot(e) && i.set(e, Er), Er;
  if (Le(r))
    for (let v = 0; v < r.length; v++) {
      const y = ea(r[v]);
      nh(y) && (s[y] = tt);
    }
  else if (r)
    for (const v in r) {
      const y = ea(v);
      if (nh(y)) {
        const m = r[v], k = s[y] = Le(m) || ze(m) ? { type: m } : Nt({}, m), S = k.type;
        let C = !1, $ = !0;
        if (Le(S))
          for (let L = 0; L < S.length; ++L) {
            const P = S[L], F = ze(P) && P.name;
            if (F === "Boolean") {
              C = !0;
              break;
            } else F === "String" && ($ = !1);
          }
        else
          C = ze(S) && S.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = C, k[
          1
          /* shouldCastTrue */
        ] = $, (C || st(k, "default")) && c.push(y);
      }
    }
  const _ = [s, c];
  return ot(e) && i.set(e, _), _;
}
function nh(e) {
  return e[0] !== "$" && !kl(e);
}
const Nd = (e) => e === "_" || e === "_ctx" || e === "$stable", Rd = (e) => Le(e) ? e.map(si) : [si(e)], i1 = (e, t, a) => {
  if (t._n)
    return t;
  const i = ke((...n) => Rd(t(...n)), a);
  return i._c = !1, i;
}, jv = (e, t, a) => {
  const i = e._ctx;
  for (const n in e) {
    if (Nd(n)) continue;
    const r = e[n];
    if (ze(r))
      t[n] = i1(n, r, i);
    else if (r != null) {
      const s = Rd(r);
      t[n] = () => s;
    }
  }
}, Bv = (e, t) => {
  const a = Rd(t);
  e.slots.default = () => a;
}, Hv = (e, t, a) => {
  for (const i in t)
    (a || !Nd(i)) && (e[i] = t[i]);
}, n1 = (e, t, a) => {
  const i = e.slots = Fv();
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (Hv(i, t, a), a && Hp(i, "_", n, !0)) : jv(t, i);
  } else t && Bv(e, t);
}, r1 = (e, t, a) => {
  const { vnode: i, slots: n } = e;
  let r = !0, s = tt;
  if (i.shapeFlag & 32) {
    const c = t._;
    c ? a && c === 1 ? r = !1 : Hv(n, t, a) : (r = !t.$stable, jv(t, n)), s = t;
  } else t && (Bv(e, t), s = { default: 1 });
  if (r)
    for (const c in n)
      !Nd(c) && s[c] == null && delete n[c];
}, ua = c1;
function l1(e) {
  return s1(e);
}
function s1(e, t) {
  const a = su();
  a.__VUE__ = !0;
  const {
    insert: i,
    remove: n,
    patchProp: r,
    createElement: s,
    createText: c,
    createComment: d,
    setText: _,
    setElementText: v,
    parentNode: y,
    nextSibling: m,
    setScopeId: k = Pa,
    insertStaticContent: S
  } = e, C = (T, R, I, N = null, O = null, Y = null, ae = void 0, ue = null, ve = !!R.dynamicChildren) => {
    if (T === R)
      return;
    T && !Qn(T, R) && (N = Ne(T), $e(T, O, Y, !0), T = null), R.patchFlag === -2 && (ve = !1, R.dynamicChildren = null);
    const { type: ce, ref: xe, shapeFlag: we } = R;
    switch (ce) {
      case ls:
        $(T, R, I, N);
        break;
      case Bt:
        L(T, R, I, N);
        break;
      case Zs:
        T == null && P(R, I, N, ae);
        break;
      case K:
        B(
          T,
          R,
          I,
          N,
          O,
          Y,
          ae,
          ue,
          ve
        );
        break;
      default:
        we & 1 ? fe(
          T,
          R,
          I,
          N,
          O,
          Y,
          ae,
          ue,
          ve
        ) : we & 6 ? q(
          T,
          R,
          I,
          N,
          O,
          Y,
          ae,
          ue,
          ve
        ) : (we & 64 || we & 128) && ce.process(
          T,
          R,
          I,
          N,
          O,
          Y,
          ae,
          ue,
          ve,
          nt
        );
    }
    xe != null && O ? Tl(xe, T && T.ref, Y, R || T, !R) : xe == null && T && T.ref != null && Tl(T.ref, null, Y, T, !0);
  }, $ = (T, R, I, N) => {
    if (T == null)
      i(
        R.el = c(R.children),
        I,
        N
      );
    else {
      const O = R.el = T.el;
      R.children !== T.children && _(O, R.children);
    }
  }, L = (T, R, I, N) => {
    T == null ? i(
      R.el = d(R.children || ""),
      I,
      N
    ) : R.el = T.el;
  }, P = (T, R, I, N) => {
    [T.el, T.anchor] = S(
      T.children,
      R,
      I,
      N,
      T.el,
      T.anchor
    );
  }, F = ({ el: T, anchor: R }, I, N) => {
    let O;
    for (; T && T !== R; )
      O = m(T), i(T, I, N), T = O;
    i(R, I, N);
  }, D = ({ el: T, anchor: R }) => {
    let I;
    for (; T && T !== R; )
      I = m(T), n(T), T = I;
    n(R);
  }, fe = (T, R, I, N, O, Y, ae, ue, ve) => {
    if (R.type === "svg" ? ae = "svg" : R.type === "math" && (ae = "mathml"), T == null)
      J(
        R,
        I,
        N,
        O,
        Y,
        ae,
        ue,
        ve
      );
    else {
      const ce = T.el && T.el._isVueCE ? T.el : null;
      try {
        ce && ce._beginPatch(), W(
          T,
          R,
          O,
          Y,
          ae,
          ue,
          ve
        );
      } finally {
        ce && ce._endPatch();
      }
    }
  }, J = (T, R, I, N, O, Y, ae, ue) => {
    let ve, ce;
    const { props: xe, shapeFlag: we, transition: Ae, dirs: Oe } = T;
    if (ve = T.el = s(
      T.type,
      Y,
      xe && xe.is,
      xe
    ), we & 8 ? v(ve, T.children) : we & 16 && V(
      T.children,
      ve,
      null,
      N,
      O,
      Qu(T, Y),
      ae,
      ue
    ), Oe && Vn(T, null, N, "created"), x(ve, T, T.scopeId, ae, N), xe) {
      for (const Ye in xe)
        Ye !== "value" && !kl(Ye) && r(ve, Ye, null, xe[Ye], Y, N);
      "value" in xe && r(ve, "value", null, xe.value, Y), (ce = xe.onVnodeBeforeMount) && ti(ce, N, T);
    }
    Oe && Vn(T, null, N, "beforeMount");
    const Ve = o1(O, Ae);
    Ve && Ae.beforeEnter(ve), i(ve, R, I), ((ce = xe && xe.onVnodeMounted) || Ve || Oe) && ua(() => {
      ce && ti(ce, N, T), Ve && Ae.enter(ve), Oe && Vn(T, null, N, "mounted");
    }, O);
  }, x = (T, R, I, N, O) => {
    if (I && k(T, I), N)
      for (let Y = 0; Y < N.length; Y++)
        k(T, N[Y]);
    if (O) {
      let Y = O.subTree;
      if (R === Y || Gv(Y.type) && (Y.ssContent === R || Y.ssFallback === R)) {
        const ae = O.vnode;
        x(
          T,
          ae,
          ae.scopeId,
          ae.slotScopeIds,
          O.parent
        );
      }
    }
  }, V = (T, R, I, N, O, Y, ae, ue, ve = 0) => {
    for (let ce = ve; ce < T.length; ce++) {
      const xe = T[ce] = ue ? Ni(T[ce]) : si(T[ce]);
      C(
        null,
        xe,
        R,
        I,
        N,
        O,
        Y,
        ae,
        ue
      );
    }
  }, W = (T, R, I, N, O, Y, ae) => {
    const ue = R.el = T.el;
    let { patchFlag: ve, dynamicChildren: ce, dirs: xe } = R;
    ve |= T.patchFlag & 16;
    const we = T.props || tt, Ae = R.props || tt;
    let Oe;
    if (I && qn(I, !1), (Oe = Ae.onVnodeBeforeUpdate) && ti(Oe, I, R, T), xe && Vn(R, T, I, "beforeUpdate"), I && qn(I, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    ce && (!T.dynamicChildren || T.dynamicChildren.length !== ce.length) && (ve = 0, ae = !1, ce = null), (we.innerHTML && Ae.innerHTML == null || we.textContent && Ae.textContent == null) && v(ue, ""), ce ? Z(
      T.dynamicChildren,
      ce,
      ue,
      I,
      N,
      Qu(R, O),
      Y
    ) : ae || X(
      T,
      R,
      ue,
      null,
      I,
      N,
      Qu(R, O),
      Y,
      !1
    ), ve > 0) {
      if (ve & 16)
        ie(ue, we, Ae, I, O);
      else if (ve & 2 && we.class !== Ae.class && r(ue, "class", null, Ae.class, O), ve & 4 && r(ue, "style", we.style, Ae.style, O), ve & 8) {
        const Ve = R.dynamicProps;
        for (let Ye = 0; Ye < Ve.length; Ye++) {
          const qe = Ve[Ye], at = we[qe], dt = Ae[qe];
          (dt !== at || qe === "value") && r(ue, qe, at, dt, O, I);
        }
      }
      ve & 1 && T.children !== R.children && v(ue, R.children);
    } else !ae && ce == null && ie(ue, we, Ae, I, O);
    ((Oe = Ae.onVnodeUpdated) || xe) && ua(() => {
      Oe && ti(Oe, I, R, T), xe && Vn(R, T, I, "updated");
    }, N);
  }, Z = (T, R, I, N, O, Y, ae) => {
    for (let ue = 0; ue < R.length; ue++) {
      const ve = T[ue], ce = R[ue], xe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ve.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ve.type === K || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qn(ve, ce) || // - In the case of a component, it could contain anything.
        ve.shapeFlag & 198) ? y(ve.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          I
        )
      );
      C(
        ve,
        ce,
        xe,
        null,
        N,
        O,
        Y,
        ae,
        !0
      );
    }
  }, ie = (T, R, I, N, O) => {
    if (R !== I) {
      if (R !== tt)
        for (const Y in R)
          !kl(Y) && !(Y in I) && r(
            T,
            Y,
            R[Y],
            null,
            O,
            N
          );
      for (const Y in I) {
        if (kl(Y)) continue;
        const ae = I[Y], ue = R[Y];
        ae !== ue && Y !== "value" && r(T, Y, ue, ae, O, N);
      }
      "value" in I && r(T, "value", R.value, I.value, O);
    }
  }, B = (T, R, I, N, O, Y, ae, ue, ve) => {
    const ce = R.el = T ? T.el : c(""), xe = R.anchor = T ? T.anchor : c("");
    let { patchFlag: we, dynamicChildren: Ae, slotScopeIds: Oe } = R;
    Oe && (ue = ue ? ue.concat(Oe) : Oe), T == null ? (i(ce, I, N), i(xe, I, N), V(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      R.children || [],
      I,
      xe,
      O,
      Y,
      ae,
      ue,
      ve
    )) : we > 0 && we & 64 && Ae && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren && T.dynamicChildren.length === Ae.length ? (Z(
      T.dynamicChildren,
      Ae,
      I,
      O,
      Y,
      ae,
      ue
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (R.key != null || O && R === O.subTree) && Id(
      T,
      R,
      !0
      /* shallow */
    )) : X(
      T,
      R,
      I,
      xe,
      O,
      Y,
      ae,
      ue,
      ve
    );
  }, q = (T, R, I, N, O, Y, ae, ue, ve) => {
    R.slotScopeIds = ue, T == null ? R.shapeFlag & 512 ? O.ctx.activate(
      R,
      I,
      N,
      ae,
      ve
    ) : M(
      R,
      I,
      N,
      O,
      Y,
      ae,
      ve
    ) : G(T, R, ve);
  }, M = (T, R, I, N, O, Y, ae) => {
    const ue = T.component = p1(
      T,
      N,
      O
    );
    if (pu(T) && (ue.ctx.renderer = nt), v1(ue, !1, ae), ue.asyncDep) {
      if (O && O.registerDep(ue, ee, ae), !T.el) {
        const ve = ue.subTree = de(Bt);
        L(null, ve, R, I), T.placeholder = ve.el;
      }
    } else
      ee(
        ue,
        T,
        R,
        I,
        O,
        Y,
        ae
      );
  }, G = (T, R, I) => {
    const N = R.component = T.component;
    if (Jy(T, R, I))
      if (N.asyncDep && !N.asyncResolved) {
        ne(N, R, I);
        return;
      } else
        N.next = R, N.update();
    else
      R.el = T.el, N.vnode = R;
  }, ee = (T, R, I, N, O, Y, ae) => {
    const ue = () => {
      if (T.isMounted) {
        let { next: we, bu: Ae, u: Oe, parent: Ve, vnode: Ye } = T;
        {
          const gt = Vv(T);
          if (gt) {
            we && (we.el = Ye.el, ne(T, we, ae)), gt.asyncDep.then(() => {
              ua(() => {
                T.isUnmounted || ce();
              }, O);
            });
            return;
          }
        }
        let qe = we, at;
        qn(T, !1), we ? (we.el = Ye.el, ne(T, we, ae)) : we = Ye, Ae && Ys(Ae), (at = we.props && we.props.onVnodeBeforeUpdate) && ti(at, Ve, we, Ye), qn(T, !0);
        const dt = ah(T), yt = T.subTree;
        T.subTree = dt, C(
          yt,
          dt,
          // parent may have changed if it's in a teleport
          y(yt.el),
          // anchor may have changed if it's in a fragment
          Ne(yt),
          T,
          O,
          Y
        ), we.el = dt.el, qe === null && Qy(T, dt.el), Oe && ua(Oe, O), (at = we.props && we.props.onVnodeUpdated) && ua(
          () => ti(at, Ve, we, Ye),
          O
        );
      } else {
        let we;
        const { el: Ae, props: Oe } = R, { bm: Ve, m: Ye, parent: qe, root: at, type: dt } = T, yt = xr(R);
        qn(T, !1), Ve && Ys(Ve), !yt && (we = Oe && Oe.onVnodeBeforeMount) && ti(we, qe, R), qn(T, !0);
        {
          at.ce && at.ce._hasShadowRoot() && at.ce._injectChildStyle(
            dt,
            T.parent ? T.parent.type : void 0
          );
          const gt = T.subTree = ah(T);
          C(
            null,
            gt,
            I,
            N,
            T,
            O,
            Y
          ), R.el = gt.el;
        }
        if (Ye && ua(Ye, O), !yt && (we = Oe && Oe.onVnodeMounted)) {
          const gt = R;
          ua(
            () => ti(we, qe, gt),
            O
          );
        }
        (R.shapeFlag & 256 || qe && xr(qe.vnode) && qe.vnode.shapeFlag & 256) && T.a && ua(T.a, O), T.isMounted = !0, R = I = N = null;
      }
    };
    T.scope.on();
    const ve = T.effect = new Kp(ue);
    T.scope.off();
    const ce = T.update = ve.run.bind(ve), xe = T.job = ve.runIfDirty.bind(ve);
    xe.i = T, xe.id = T.uid, ve.scheduler = () => Ad(xe), qn(T, !0), ce();
  }, ne = (T, R, I) => {
    R.component = T;
    const N = T.vnode.props;
    T.vnode = R, T.next = null, t1(T, R.props, N, I), r1(T, R.children, I), ji(), Gf(T), Bi();
  }, X = (T, R, I, N, O, Y, ae, ue, ve = !1) => {
    const ce = T && T.children, xe = T ? T.shapeFlag : 0, we = R.children, { patchFlag: Ae, shapeFlag: Oe } = R;
    if (Ae > 0) {
      if (Ae & 128) {
        _e(
          ce,
          we,
          I,
          N,
          O,
          Y,
          ae,
          ue,
          ve
        );
        return;
      } else if (Ae & 256) {
        le(
          ce,
          we,
          I,
          N,
          O,
          Y,
          ae,
          ue,
          ve
        );
        return;
      }
    }
    Oe & 8 ? (xe & 16 && ye(ce, O, Y), we !== ce && v(I, we)) : xe & 16 ? Oe & 16 ? _e(
      ce,
      we,
      I,
      N,
      O,
      Y,
      ae,
      ue,
      ve
    ) : ye(ce, O, Y, !0) : (xe & 8 && v(I, ""), Oe & 16 && V(
      we,
      I,
      N,
      O,
      Y,
      ae,
      ue,
      ve
    ));
  }, le = (T, R, I, N, O, Y, ae, ue, ve) => {
    T = T || Er, R = R || Er;
    const ce = T.length, xe = R.length, we = Math.min(ce, xe);
    let Ae;
    for (Ae = 0; Ae < we; Ae++) {
      const Oe = R[Ae] = ve ? Ni(R[Ae]) : si(R[Ae]);
      C(
        T[Ae],
        Oe,
        I,
        null,
        O,
        Y,
        ae,
        ue,
        ve
      );
    }
    ce > xe ? ye(
      T,
      O,
      Y,
      !0,
      !1,
      we
    ) : V(
      R,
      I,
      N,
      O,
      Y,
      ae,
      ue,
      ve,
      we
    );
  }, _e = (T, R, I, N, O, Y, ae, ue, ve) => {
    let ce = 0;
    const xe = R.length;
    let we = T.length - 1, Ae = xe - 1;
    for (; ce <= we && ce <= Ae; ) {
      const Oe = T[ce], Ve = R[ce] = ve ? Ni(R[ce]) : si(R[ce]);
      if (Qn(Oe, Ve))
        C(
          Oe,
          Ve,
          I,
          null,
          O,
          Y,
          ae,
          ue,
          ve
        );
      else
        break;
      ce++;
    }
    for (; ce <= we && ce <= Ae; ) {
      const Oe = T[we], Ve = R[Ae] = ve ? Ni(R[Ae]) : si(R[Ae]);
      if (Qn(Oe, Ve))
        C(
          Oe,
          Ve,
          I,
          null,
          O,
          Y,
          ae,
          ue,
          ve
        );
      else
        break;
      we--, Ae--;
    }
    if (ce > we) {
      if (ce <= Ae) {
        const Oe = Ae + 1, Ve = Oe < xe ? R[Oe].el : N;
        for (; ce <= Ae; )
          C(
            null,
            R[ce] = ve ? Ni(R[ce]) : si(R[ce]),
            I,
            Ve,
            O,
            Y,
            ae,
            ue,
            ve
          ), ce++;
      }
    } else if (ce > Ae)
      for (; ce <= we; )
        $e(T[ce], O, Y, !0), ce++;
    else {
      const Oe = ce, Ve = ce, Ye = /* @__PURE__ */ new Map();
      for (ce = Ve; ce <= Ae; ce++) {
        const kt = R[ce] = ve ? Ni(R[ce]) : si(R[ce]);
        kt.key != null && Ye.set(kt.key, ce);
      }
      let qe, at = 0;
      const dt = Ae - Ve + 1;
      let yt = !1, gt = 0;
      const ia = new Array(dt);
      for (ce = 0; ce < dt; ce++) ia[ce] = 0;
      for (ce = Oe; ce <= we; ce++) {
        const kt = T[ce];
        if (at >= dt) {
          $e(kt, O, Y, !0);
          continue;
        }
        let Rt;
        if (kt.key != null)
          Rt = Ye.get(kt.key);
        else
          for (qe = Ve; qe <= Ae; qe++)
            if (ia[qe - Ve] === 0 && Qn(kt, R[qe])) {
              Rt = qe;
              break;
            }
        Rt === void 0 ? $e(kt, O, Y, !0) : (ia[Rt - Ve] = ce + 1, Rt >= gt ? gt = Rt : yt = !0, C(
          kt,
          R[Rt],
          I,
          null,
          O,
          Y,
          ae,
          ue,
          ve
        ), at++);
      }
      const pa = yt ? u1(ia) : Er;
      for (qe = pa.length - 1, ce = dt - 1; ce >= 0; ce--) {
        const kt = Ve + ce, Rt = R[kt], Ma = R[kt + 1], Gt = kt + 1 < xe ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ma.el || qv(Ma)
        ) : N;
        ia[ce] === 0 ? C(
          null,
          Rt,
          I,
          Gt,
          O,
          Y,
          ae,
          ue,
          ve
        ) : yt && (qe < 0 || ce !== pa[qe] ? Re(Rt, I, Gt, 2) : qe--);
      }
    }
  }, Re = (T, R, I, N, O = null) => {
    const { el: Y, type: ae, transition: ue, children: ve, shapeFlag: ce } = T;
    if (ce & 6) {
      Re(T.component.subTree, R, I, N);
      return;
    }
    if (ce & 128) {
      T.suspense.move(R, I, N);
      return;
    }
    if (ce & 64) {
      ae.move(T, R, I, nt);
      return;
    }
    if (ae === K) {
      i(Y, R, I);
      for (let we = 0; we < ve.length; we++)
        Re(ve[we], R, I, N);
      i(T.anchor, R, I);
      return;
    }
    if (ae === Zs) {
      F(T, R, I);
      return;
    }
    if (N !== 2 && ce & 1 && ue)
      if (N === 0)
        ue.persisted && !Y[Ia] ? i(Y, R, I) : (ue.beforeEnter(Y), i(Y, R, I), ua(() => ue.enter(Y), O));
      else {
        const { leave: we, delayLeave: Ae, afterLeave: Oe } = ue, Ve = () => {
          T.ctx.isUnmounted ? n(Y) : i(Y, R, I);
        }, Ye = () => {
          const qe = Y._isLeaving || !!Y[Ia];
          Y._isLeaving && Y[Ia](
            !0
            /* cancelled */
          ), ue.persisted && !qe ? Ve() : we(Y, () => {
            Ve(), Oe && Oe();
          });
        };
        Ae ? Ae(Y, Ve, Ye) : Ye();
      }
    else
      i(Y, R, I);
  }, $e = (T, R, I, N = !1, O = !1) => {
    const {
      type: Y,
      props: ae,
      ref: ue,
      children: ve,
      dynamicChildren: ce,
      shapeFlag: xe,
      patchFlag: we,
      dirs: Ae,
      cacheIndex: Oe,
      memo: Ve
    } = T;
    if (we === -2 && (O = !1), ue != null && (ji(), Tl(ue, null, I, T, !0), Bi()), Oe != null && (R.renderCache[Oe] = void 0), xe & 256) {
      R.ctx.deactivate(T);
      return;
    }
    const Ye = xe & 1 && Ae, qe = !xr(T);
    let at;
    if (qe && (at = ae && ae.onVnodeBeforeUnmount) && ti(at, R, T), xe & 6)
      ct(T.component, I, N);
    else {
      if (xe & 128) {
        T.suspense.unmount(I, N);
        return;
      }
      Ye && Vn(T, null, R, "beforeUnmount"), xe & 64 ? T.type.remove(
        T,
        R,
        I,
        nt,
        N
      ) : ce && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ce.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Y !== K || we > 0 && we & 64) ? ye(
        ce,
        R,
        I,
        !1,
        !0
      ) : (Y === K && we & 384 || !O && xe & 16) && ye(ve, R, I), N && Me(T);
    }
    const dt = Ve != null && Oe == null;
    (qe && (at = ae && ae.onVnodeUnmounted) || Ye || dt) && ua(() => {
      at && ti(at, R, T), Ye && Vn(T, null, R, "unmounted"), dt && (T.el = null);
    }, I);
  }, Me = (T) => {
    const { type: R, el: I, anchor: N, transition: O } = T;
    if (R === K) {
      Ze(I, N);
      return;
    }
    if (R === Zs) {
      D(T);
      return;
    }
    const Y = () => {
      n(I), O && !O.persisted && O.afterLeave && O.afterLeave();
    };
    if (T.shapeFlag & 1 && O && !O.persisted) {
      const { leave: ae, delayLeave: ue } = O, ve = () => ae(I, Y);
      ue ? ue(T.el, Y, ve) : ve();
    } else
      Y();
  }, Ze = (T, R) => {
    let I;
    for (; T !== R; )
      I = m(T), n(T), T = I;
    n(R);
  }, ct = (T, R, I) => {
    const { bum: N, scope: O, job: Y, subTree: ae, um: ue, m: ve, a: ce } = T;
    rh(ve), rh(ce), N && Ys(N), O.stop(), Y && (Y.flags |= 8, $e(ae, T, R, I)), ue && ua(ue, R), ua(() => {
      T.isUnmounted = !0;
    }, R);
  }, ye = (T, R, I, N = !1, O = !1, Y = 0) => {
    for (let ae = Y; ae < T.length; ae++)
      $e(T[ae], R, I, N, O);
  }, Ne = (T) => {
    if (T.shapeFlag & 6)
      return Ne(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const R = m(T.anchor || T.el), I = R && R[bv];
    return I ? m(I) : R;
  };
  let ge = !1;
  const De = (T, R, I) => {
    let N;
    T == null ? R._vnode && ($e(R._vnode, null, null, !0), N = R._vnode.component) : C(
      R._vnode || null,
      T,
      R,
      null,
      null,
      null,
      I
    ), R._vnode = T, ge || (ge = !0, Gf(N), hv(), ge = !1);
  }, nt = {
    p: C,
    um: $e,
    m: Re,
    r: Me,
    mt: M,
    mc: V,
    pc: X,
    pbc: Z,
    n: Ne,
    o: e
  };
  return {
    render: De,
    hydrate: void 0,
    createApp: Ky(De)
  };
}
function Qu({ type: e, props: t }, a) {
  return a === "svg" && e === "foreignObject" || a === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : a;
}
function qn({ effect: e, job: t }, a) {
  a ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function o1(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Id(e, t, a = !1) {
  const i = e.children, n = t.children;
  if (Le(i) && Le(n))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let c = n[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = n[r] = Ni(n[r]), c.el = s.el), !a && c.patchFlag !== -2 && Id(s, c)), c.type === ls && (c.patchFlag === -1 && (c = n[r] = Ni(c)), c.el = s.el), c.type === Bt && !c.el && (c.el = s.el);
    }
}
function u1(e) {
  const t = e.slice(), a = [0];
  let i, n, r, s, c;
  const d = e.length;
  for (i = 0; i < d; i++) {
    const _ = e[i];
    if (_ !== 0) {
      if (n = a[a.length - 1], e[n] < _) {
        t[i] = n, a.push(i);
        continue;
      }
      for (r = 0, s = a.length - 1; r < s; )
        c = r + s >> 1, e[a[c]] < _ ? r = c + 1 : s = c;
      _ < e[a[r]] && (r > 0 && (t[i] = a[r - 1]), a[r] = i);
    }
  }
  for (r = a.length, s = a[r - 1]; r-- > 0; )
    a[r] = s, s = t[s];
  return a;
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
  t && t.pendingBranch ? Le(e) ? t.effects.push(...e) : t.effects.push(e) : fv(e);
}
const K = /* @__PURE__ */ Symbol.for("v-fgt"), ls = /* @__PURE__ */ Symbol.for("v-txt"), Bt = /* @__PURE__ */ Symbol.for("v-cmt"), Zs = /* @__PURE__ */ Symbol.for("v-stc"), Fi = [];
let Sa = null;
function f(e = !1) {
  Fi.push(Sa = e ? null : []);
}
function Ld() {
  Fi.pop(), Sa = Fi[Fi.length - 1] || null;
}
let Hl = 1;
function oo(e, t = !1) {
  Hl += e, e < 0 && Sa && t && (Sa.hasOnce = !0);
}
function Kv(e) {
  return e.dynamicChildren = Hl > 0 ? Sa || Er : null, Ld(), Hl > 0 && Sa && Sa.push(e), e;
}
function p(e, t, a, i, n, r) {
  return Kv(
    l(
      e,
      t,
      a,
      i,
      n,
      r,
      !0
    )
  );
}
function Pe(e, t, a, i, n) {
  return Kv(
    de(
      e,
      t,
      a,
      i,
      n,
      !0
    )
  );
}
function Vl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Qn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Wv = ({ key: e }) => e ?? null, Xs = ({
  ref: e,
  ref_key: t,
  ref_for: a
}) => (typeof e == "number" && (e = "" + e), e != null ? bt(e) || /* @__PURE__ */ ta(e) || ze(e) ? { i: Ht, r: e, k: t, f: !!a } : e : null);
function l(e, t = null, a = null, i = 0, n = null, r = e === K ? 0 : 1, s = !1, c = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wv(t),
    ref: t && Xs(t),
    scopeId: du,
    slotScopeIds: null,
    children: a,
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
    patchFlag: i,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: Ht
  };
  return c ? (uo(d, a), r & 128 && e.normalize(d)) : a && (d.shapeFlag |= bt(a) ? 8 : 16), Hl > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Sa && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Sa.push(d), d;
}
const de = d1;
function d1(e, t = null, a = null, i = 0, n = null, r = !1) {
  if ((!e || e === Av) && (e = Bt), Vl(e)) {
    const c = Sn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return a && uo(c, a), Hl > 0 && !r && Sa && (c.shapeFlag & 6 ? Sa[Sa.indexOf(e)] = c : Sa.push(c)), c.patchFlag = -2, c;
  }
  if (y1(e) && (e = e.__vccOpts), t) {
    t = ql(t);
    let { class: c, style: d } = t;
    c && !bt(c) && (t.class = Te(c)), ot(d) && (/* @__PURE__ */ Td(d) && !Le(d) && (d = Nt({}, d)), t.style = ha(d));
  }
  const s = bt(e) ? 1 : Gv(e) ? 128 : hu(e) ? 64 : ot(e) ? 4 : ze(e) ? 2 : 0;
  return l(
    e,
    t,
    a,
    i,
    n,
    s,
    r,
    !0
  );
}
function ql(e) {
  return e ? /* @__PURE__ */ Td(e) || Mv(e) ? Nt({}, e) : e : null;
}
function Sn(e, t, a = !1, i = !1) {
  const { props: n, ref: r, patchFlag: s, children: c, transition: d } = e, _ = t ? aa(n || {}, t) : n, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: _,
    key: _ && Wv(_),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      a && r ? Le(r) ? r.concat(Xs(t)) : [r, Xs(t)] : Xs(t)
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
  return d && i && Bl(
    v,
    d.clone(v)
  ), v;
}
function Q(e = " ", t = 0) {
  return de(ls, null, e, t);
}
function A(e = "", t = !1) {
  return t ? (f(), Pe(Bt, null, e)) : de(Bt, null, e);
}
function si(e) {
  return e == null || typeof e == "boolean" ? de(Bt) : Le(e) ? de(
    K,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vl(e) ? Ni(e) : de(ls, null, String(e));
}
function Ni(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Sn(e);
}
function uo(e, t) {
  let a = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Le(t))
    a = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const n = t.default;
      n && (n._c && (n._d = !1), uo(e, n()), n._c && (n._d = !0));
      return;
    } else {
      a = 32;
      const n = t._;
      !n && !Mv(t) ? t._ctx = Ht : n === 3 && Ht && (Ht.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ze(t)) {
    if (i & 65) {
      uo(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ht }, a = 32;
  } else
    t = String(t), i & 64 ? (a = 16, t = [Q(t)]) : a = 8;
  e.children = t, e.shapeFlag |= a;
}
function aa(...e) {
  const t = {};
  for (let a = 0; a < e.length; a++) {
    const i = e[a];
    for (const n in i)
      if (n === "class")
        t.class !== i.class && (t.class = Te([t.class, i.class]));
      else if (n === "style")
        t.style = ha([t.style, i.style]);
      else if (au(n)) {
        const r = t[n], s = i[n];
        s && r !== s && !(Le(r) && r.includes(s)) ? t[n] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !iu(n) && (t[n] = s);
      } else n !== "" && (t[n] = i[n]);
  }
  return t;
}
function ti(e, t, a, i = null) {
  Fa(e, t, 7, [
    a,
    i
  ]);
}
const f1 = Nv();
let h1 = 0;
function p1(e, t, a) {
  const i = e.type, n = (t ? t.appContext : e.appContext) || f1, r = {
    uid: h1++,
    vnode: e,
    type: i,
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
    propsOptions: zv(i, n),
    emitsOptions: Lv(i, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: tt,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
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
    suspense: a,
    suspenseId: a ? a.pendingId : 0,
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
let co, Gl;
{
  const e = su(), t = (a, i) => {
    let n;
    return (n = e[a]) || (n = e[a] = []), n.push(i), (r) => {
      n.length > 1 ? n.forEach((s) => s(r)) : n[0](r);
    };
  };
  co = t(
    "__VUE_INSTANCE_SETTERS__",
    (a) => Qt = a
  ), Gl = t(
    "__VUE_SSR_SETTERS__",
    (a) => Kl = a
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
let Kl = !1;
function v1(e, t = !1, a = !1) {
  t && Gl(t);
  const { props: i, children: n } = e.vnode, r = Yv(e);
  e1(e, i, r, t), n1(e, n, a || t);
  const s = r ? b1(e, t) : void 0;
  return t && Gl(!1), s;
}
function b1(e, t) {
  const a = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fy);
  const { setup: i } = a;
  if (i) {
    ji();
    const n = e.setupContext = i.length > 1 ? Xv(e) : null, r = ss(e), s = rs(
      i,
      e,
      0,
      [
        e.props,
        n
      ]
    ), c = zp(s);
    if (Bi(), r(), (c || e.sp) && !xr(e) && kv(e), c) {
      if (s.then(lh, lh), t)
        return s.then((d) => {
          Gl(!0);
          try {
            sh(e, d, t);
          } finally {
            Gl(!1);
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
function sh(e, t, a) {
  ze(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ot(t) && (e.setupState = uv(t)), Zv(e);
}
function Zv(e, t, a) {
  const i = e.type;
  e.render || (e.render = i.render || Pa);
  {
    const n = ss(e);
    ji();
    try {
      jy(e);
    } finally {
      Bi(), n();
    }
  }
}
const g1 = {
  get(e, t) {
    return Xt(e, "get", ""), e[t];
  }
};
function Xv(e) {
  const t = (a) => {
    e.exposed = a || {};
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
    get(t, a) {
      if (a in t)
        return t[a];
      if (a in Al)
        return Al[a](e);
    },
    has(t, a) {
      return a in t || a in Al;
    }
  })) : e.proxy;
}
function m1(e, t = !0) {
  return ze(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function y1(e) {
  return ze(e) && "__vccOpts" in e;
}
const H = (e, t) => /* @__PURE__ */ sy(e, t, Kl);
function da(e, t, a) {
  try {
    oo(-1);
    const i = arguments.length;
    return i === 2 ? ot(t) && !Le(t) ? Vl(t) ? de(e, null, [t]) : de(e, t) : de(e, null, t) : (i > 3 ? a = Array.prototype.slice.call(arguments, 2) : i === 3 && Vl(a) && (a = [a]), de(e, t, a));
  } finally {
    oo(1);
  }
}
const _1 = "3.5.42", w1 = Pa;
let qc;
const oh = typeof window < "u" && window.trustedTypes;
if (oh)
  try {
    qc = /* @__PURE__ */ oh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Jv = qc ? (e) => qc.createHTML(e) : (e) => e, k1 = "http://www.w3.org/2000/svg", S1 = "http://www.w3.org/1998/Math/MathML", Oi = typeof document < "u" ? document : null, uh = Oi && /* @__PURE__ */ Oi.createElement("template"), C1 = {
  insert: (e, t, a) => {
    t.insertBefore(e, a || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, a, i) => {
    const n = t === "svg" ? Oi.createElementNS(k1, e) : t === "mathml" ? Oi.createElementNS(S1, e) : a ? Oi.createElement(e, { is: a }) : Oi.createElement(e);
    return e === "select" && i && i.multiple != null && n.setAttribute("multiple", i.multiple), n;
  },
  createText: (e) => Oi.createTextNode(e),
  createComment: (e) => Oi.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Oi.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, a, i, n, r) {
    const s = a ? a.previousSibling : t.lastChild;
    if (n && (n === r || n.nextSibling))
      for (; t.insertBefore(n.cloneNode(!0), a), !(n === r || !(n = n.nextSibling)); )
        ;
    else {
      uh.innerHTML = Jv(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const c = uh.content;
      if (i === "svg" || i === "mathml") {
        const d = c.firstChild;
        for (; d.firstChild; )
          c.appendChild(d.firstChild);
        c.removeChild(d);
      }
      t.insertBefore(c, a);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      a ? a.previousSibling : t.lastChild
    ];
  }
}, on = "transition", sl = "animation", Wl = /* @__PURE__ */ Symbol("_vtc"), Qv = {
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
  (e, { slots: t }) => da(Ty, $1(e), t)
), Gn = (e, t = []) => {
  Le(e) ? e.forEach((a) => a(...t)) : e && e(...t);
}, ch = (e) => e ? Le(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function $1(e) {
  const t = {};
  for (const B in e)
    B in Qv || (t[B] = e[B]);
  if (e.css === !1)
    return t;
  const {
    name: a = "v",
    type: i,
    duration: n,
    enterFromClass: r = `${a}-enter-from`,
    enterActiveClass: s = `${a}-enter-active`,
    enterToClass: c = `${a}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: _ = s,
    appearToClass: v = c,
    leaveFromClass: y = `${a}-leave-from`,
    leaveActiveClass: m = `${a}-leave-active`,
    leaveToClass: k = `${a}-leave-to`
  } = e, S = x1(n), C = S && S[0], $ = S && S[1], {
    onBeforeEnter: L,
    onEnter: P,
    onEnterCancelled: F,
    onLeave: D,
    onLeaveCancelled: fe,
    onBeforeAppear: J = L,
    onAppear: x = P,
    onAppearCancelled: V = F
  } = t, W = (B, q, M, G) => {
    B._enterCancelled = G, Kn(B, q ? v : c), Kn(B, q ? _ : s), M && M();
  }, Z = (B, q) => {
    B._isLeaving = !1, Kn(B, y), Kn(B, k), Kn(B, m), q && q();
  }, ie = (B) => (q, M) => {
    const G = B ? x : P, ee = () => W(q, B, M);
    Gn(G, [q, ee]), dh(() => {
      Kn(q, B ? d : r), Ci(q, B ? v : c), ch(G) || fh(q, i, C, ee);
    });
  };
  return Nt(t, {
    onBeforeEnter(B) {
      Gn(L, [B]), Ci(B, r), Ci(B, s);
    },
    onBeforeAppear(B) {
      Gn(J, [B]), Ci(B, d), Ci(B, _);
    },
    onEnter: ie(!1),
    onAppear: ie(!0),
    onLeave(B, q) {
      B._isLeaving = !0;
      const M = () => Z(B, q);
      Ci(B, y), B._enterCancelled ? (Ci(B, m), vh(B)) : (vh(B), Ci(B, m)), dh(() => {
        B._isLeaving && (Kn(B, y), Ci(B, k), ch(D) || fh(B, i, $, M));
      }), Gn(D, [B, M]);
    },
    onEnterCancelled(B) {
      W(B, !1, void 0, !0), Gn(F, [B]);
    },
    onAppearCancelled(B) {
      W(B, !0, void 0, !0), Gn(V, [B]);
    },
    onLeaveCancelled(B) {
      Z(B), Gn(fe, [B]);
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
function Ci(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.add(a)), (e[Wl] || (e[Wl] = /* @__PURE__ */ new Set())).add(t);
}
function Kn(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const a = e[Wl];
  a && (a.delete(t), a.size || (e[Wl] = void 0));
}
function dh(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let O1 = 0;
function fh(e, t, a, i) {
  const n = e._endId = ++O1, r = () => {
    n === e._endId && i();
  };
  if (a != null)
    return setTimeout(r, a);
  const { type: s, timeout: c, propCount: d } = N1(e, t);
  if (!s)
    return i();
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
  const a = window.getComputedStyle(e), i = (S) => (a[S] || "").split(", "), n = i(`${on}Delay`), r = i(`${on}Duration`), s = hh(n, r), c = i(`${sl}Delay`), d = i(`${sl}Duration`), _ = hh(c, d);
  let v = null, y = 0, m = 0;
  t === on ? s > 0 && (v = on, y = s, m = r.length) : t === sl ? _ > 0 && (v = sl, y = _, m = d.length) : (y = Math.max(s, _), v = y > 0 ? s > _ ? on : sl : null, m = v ? v === on ? r.length : d.length : 0);
  const k = v === on && /\b(?:transform|all)(?:,|$)/.test(
    i(`${on}Property`).toString()
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
  return Math.max(...t.map((a, i) => ph(a) + ph(e[i])));
}
function ph(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function vh(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function R1(e, t, a) {
  const i = e[Wl];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : a ? e.setAttribute("class", t) : e.className = t;
}
const fo = /* @__PURE__ */ Symbol("_vod"), eb = /* @__PURE__ */ Symbol("_vsh"), rr = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: a }) {
    e[fo] = e.style.display === "none" ? "" : e.style.display, a && t ? a.beforeEnter(e) : ol(e, t);
  },
  mounted(e, { value: t }, { transition: a }) {
    a && t && a.enter(e);
  },
  updated(e, { value: t, oldValue: a }, { transition: i }) {
    !t != !a && (i ? t ? (i.beforeEnter(e), ol(e, !0), i.enter(e)) : i.leave(e, () => {
      ol(e, !1);
    }) : ol(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ol(e, t);
  }
};
function ol(e, t) {
  e.style.display = t ? e[fo] : "none", e[eb] = !t;
}
const tb = /* @__PURE__ */ Symbol("");
function I1(e) {
  const t = Tn();
  if (!t)
    return;
  const a = t.ut = (n = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => ho(r, n));
  }, i = () => {
    const n = e(t.proxy);
    t.ce ? ho(t.ce, n) : Gc(t.subTree, n), a(n);
  };
  Tv(() => {
    fv(i);
  }), Ct(() => {
    Ge(i, Pa, { flush: "post" });
    const n = new MutationObserver(i);
    n.observe(t.subTree.el.parentNode, { childList: !0 }), Dr(() => n.disconnect());
  });
}
function Gc(e, t) {
  if (e.shapeFlag & 128) {
    const a = e.suspense;
    e = a.activeBranch, a.pendingBranch && !a.isHydrating && a.effects.push(() => {
      Gc(a.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    ho(e.el, t);
  else if (e.type === K)
    e.children.forEach((a) => Gc(a, t));
  else if (e.type === Zs) {
    let { el: a, anchor: i } = e;
    for (; a && (ho(a, t), a !== i); )
      a = a.nextSibling;
  }
}
function ho(e, t) {
  if (e.nodeType === 1) {
    const a = e.style;
    let i = "";
    for (const n in t) {
      const r = Lm(t[n]);
      a.setProperty(`--${n}`, r), i += `--${n}: ${r};`;
    }
    a[tb] = i;
  }
}
const L1 = /(?:^|;)\s*display\s*:/;
function P1(e, t, a) {
  const i = e.style, n = bt(a);
  let r = !1;
  if (a && !n) {
    if (t)
      if (bt(t))
        for (const s of t.split(";")) {
          const c = s.slice(0, s.indexOf(":")).trim();
          a[c] == null && ml(i, c, "");
        }
      else
        for (const s in t)
          a[s] == null && ml(i, s, "");
    for (const s in a) {
      s === "display" && (r = !0);
      const c = a[s];
      c != null ? F1(
        e,
        s,
        !bt(t) && t ? t[s] : void 0,
        c
      ) || ml(i, s, c) : ml(i, s, "");
    }
  } else if (n) {
    if (t !== a) {
      const s = i[tb];
      s && (a += ";" + s), i.cssText = a, r = L1.test(a);
    }
  } else t && e.removeAttribute("style");
  fo in e && (e[fo] = r ? i.display : "", e[eb] && (i.display = "none"));
}
const Us = /\s*!important$/;
function ml(e, t, a) {
  if (Le(a))
    a.forEach((i) => ml(e, t, i));
  else if (a == null && (a = ""), t.startsWith("--"))
    Us.test(a) ? e.setProperty(t, a.replace(Us, ""), "important") : e.setProperty(t, a);
  else {
    const i = D1(e, t);
    Us.test(a) ? e.setProperty(
      qi(i),
      a.replace(Us, ""),
      "important"
    ) : e[i] = a;
  }
}
const bh = ["Webkit", "Moz", "ms"], tc = {};
function D1(e, t) {
  const a = tc[t];
  if (a)
    return a;
  let i = ea(t);
  if (i !== "filter" && i in e)
    return tc[t] = i;
  i = ru(i);
  for (let n = 0; n < bh.length; n++) {
    const r = bh[n] + i;
    if (r in e)
      return tc[t] = r;
  }
  return t;
}
function F1(e, t, a, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && bt(i) && a === i;
}
const gh = "http://www.w3.org/1999/xlink";
function mh(e, t, a, i, n, r = Rm(t)) {
  i && t.startsWith("xlink:") ? a == null ? e.removeAttributeNS(gh, t.slice(6, t.length)) : e.setAttributeNS(gh, t, a) : a == null || r && !Vp(a) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ga(a) ? String(a) : a
  );
}
function yh(e, t, a, i, n) {
  if (t === "innerHTML" || t === "textContent") {
    a != null && (e[t] = t === "innerHTML" ? Jv(a) : a);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, d = a == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(a);
    (c !== d || !("_value" in e)) && (e.value = d), a == null && e.removeAttribute(t), e._value = a;
    return;
  }
  let s = !1;
  if (a === "" || a == null) {
    const c = typeof e[t];
    c === "boolean" ? a = Vp(a) : a == null && c === "string" ? (a = "", s = !0) : c === "number" && (a = 0, s = !0);
  }
  try {
    e[t] = a;
  } catch {
  }
  s && e.removeAttribute(n || t);
}
function gn(e, t, a, i) {
  e.addEventListener(t, a, i);
}
function M1(e, t, a, i) {
  e.removeEventListener(t, a, i);
}
const _h = /* @__PURE__ */ Symbol("_vei");
function U1(e, t, a, i, n = null) {
  const r = e[_h] || (e[_h] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [c, d] = B1(t);
    if (i) {
      const _ = r[t] = q1(
        i,
        n
      );
      gn(e, c, _, d);
    } else s && (M1(e, c, s, d), r[t] = void 0);
  }
}
const z1 = /(Once|Passive|Capture)$/, j1 = /^on:?(?:Once|Passive|Capture)$/;
function B1(e) {
  let t, a;
  for (; (a = e.match(z1)) && !j1.test(e); )
    t || (t = {}), e = e.slice(0, e.length - a[1].length), t[a[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : qi(e.slice(2)), t];
}
let ac = 0;
const H1 = /* @__PURE__ */ Promise.resolve(), V1 = () => ac || (H1.then(() => ac = 0), ac = Date.now());
function q1(e, t) {
  const a = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= a.attached)
      return;
    const n = a.value;
    if (Le(n)) {
      const r = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        r.call(i), i._stopped = !0;
      };
      const s = n.slice(), c = [i];
      for (let d = 0; d < s.length && !i._stopped; d++) {
        const _ = s[d];
        _ && Fa(
          _,
          t,
          5,
          c
        );
      }
    } else
      Fa(
        n,
        t,
        5,
        [i]
      );
  };
  return a.value = e, a.attached = V1(), a;
}
const wh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, G1 = (e, t, a, i, n, r) => {
  const s = n === "svg";
  t === "class" ? R1(e, i, s) : t === "style" ? P1(e, a, i) : au(t) ? iu(t) || U1(e, t, a, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : K1(e, t, i, s)) ? (yh(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && mh(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (W1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !bt(i))) ? yh(e, ea(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), mh(e, t, i, s));
};
function K1(e, t, a, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && wh(t) && ze(a));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const n = e.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return wh(t) && bt(a) ? !1 : t in e;
}
function W1(e, t) {
  const a = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!a)
    return !1;
  const i = ea(t);
  return Array.isArray(a) ? a.some((n) => ea(n) === i) : Object.keys(a).some((n) => ea(n) === i);
}
const Pr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Le(t) ? (a) => Ys(t, a) : t;
};
function Y1(e) {
  e.target.composing = !0;
}
function kh(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const oi = /* @__PURE__ */ Symbol("_assign"), zs = /* @__PURE__ */ Symbol("_initialValue");
function ic(e, t, a) {
  return t && (e = e.trim()), a && (e = lu(e)), e;
}
const Ue = {
  created(e, { modifiers: { lazy: t, trim: a, number: i } }, n) {
    e.parentNode && (e.type === "text" ? e[zs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[zs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[oi] = Pr(n);
    const r = i || n.props && n.props.type === "number";
    gn(e, t ? "change" : "input", (s) => {
      s.target.composing || e[oi](ic(e.value, a, r));
    }), (a || r) && gn(e, "change", () => {
      e.value = ic(e.value, a, r);
    }), t || (gn(e, "compositionstart", Y1), gn(e, "compositionend", kh), gn(e, "change", kh));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: a, number: i } }) {
    const n = t ?? "", r = e[zs];
    delete e[zs], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[oi](ic(e.value, a, i)) : e.value = n;
  },
  beforeUpdate(e, { value: t, oldValue: a, modifiers: { lazy: i, trim: n, number: r } }, s) {
    if (e[oi] = Pr(s), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? lu(e.value) : e.value, d = t ?? "";
    if (c === d)
      return;
    const _ = e.getRootNode();
    (_ instanceof Document || _ instanceof ShadowRoot) && _.activeElement === e && e.type !== "range" && (i && t === a || n && e.value.trim() === d) || (e.value = d);
  }
}, ui = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, a) {
    e[oi] = Pr(a), gn(e, "change", () => {
      const i = e._modelValue, n = Yl(e), r = e.checked, s = e[oi];
      if (Le(i)) {
        const c = yd(i, n), d = c !== -1;
        if (r && !d)
          s(i.concat(n));
        else if (!r && d) {
          const _ = [...i];
          _.splice(c, 1), s(_);
        }
      } else if (Ui(i)) {
        const c = new Set(i);
        r ? c.add(n) : c.delete(n), s(c);
      } else
        s(ab(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Sh,
  beforeUpdate(e, t, a) {
    e[oi] = Pr(a), Sh(e, t, a);
  }
};
function Sh(e, { value: t, oldValue: a }, i) {
  e._modelValue = t;
  let n;
  if (Le(t))
    n = yd(t, i.props.value) > -1;
  else if (Ui(t))
    n = t.has(i.props.value);
  else {
    if (t === a) return;
    n = zi(t, ab(e, !0));
  }
  e.checked !== n && (e.checked = n);
}
const it = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: a } }, i) {
    e._modelValue = t, gn(e, "change", () => {
      const n = Array.prototype.filter.call(e.options, (d) => d.selected).map(
        (d) => a ? lu(Yl(d)) : Yl(d)
      ), r = e.multiple, s = r ? Ui(e._modelValue) ? new Set(n) : n : n[0], c = e._pendingValue = [
        r,
        r ? Le(s) ? n.slice() : n : s
      ];
      try {
        e[oi](s);
      } finally {
        Pt(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[oi] = Pr(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ch(e, t);
  },
  beforeUpdate(e, { value: t }, a) {
    e._modelValue = t, e[oi] = Pr(a);
  },
  updated(e, { value: t }) {
    const a = e._pendingValue;
    e._pendingValue = void 0, (!a || a[0] !== e.multiple || !Z1(t, a[1], a[0])) && Ch(e, t);
  }
};
function Z1(e, t, a) {
  if (!a || Le(e)) return zi(e, t);
  if (Ui(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function Ch(e, t) {
  const a = e.multiple, i = Le(t);
  if (!(a && !i && !Ui(t))) {
    for (let n = 0, r = e.options.length; n < r; n++) {
      const s = e.options[n], c = Yl(s);
      if (a)
        if (i) {
          const d = typeof c;
          d === "string" || d === "number" ? s.selected = t.some((_) => String(_) === String(c)) : s.selected = yd(t, c) > -1;
        } else
          s.selected = t.has(c);
      else if (zi(Yl(s), t)) {
        e.selectedIndex !== n && (e.selectedIndex = n);
        return;
      }
    }
    !a && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Yl(e) {
  return "_value" in e ? e._value : e.value;
}
function ab(e, t) {
  const a = t ? "_trueValue" : "_falseValue";
  return a in e ? e[a] : t;
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
  exact: (e, t) => X1.some((a) => e[`${a}Key`] && !t.includes(a))
}, Se = (e, t) => {
  if (!e) return e;
  const a = e._withMods || (e._withMods = {}), i = t.join(".");
  return a[i] || (a[i] = ((n, ...r) => {
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
  const a = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return a[i] || (a[i] = ((n) => {
    if (!("key" in n))
      return;
    const r = qi(n.key);
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
const a_ = ((...e) => {
  const t = t_().createApp(...e), { mount: a } = t;
  return t.mount = (i) => {
    const n = n_(i);
    if (!n) return;
    const r = t._component;
    !ze(r) && !r.render && !r.template && (r.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const s = a(n, !1, i_(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), s;
  }, t;
});
function i_(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function n_(e) {
  return bt(e) ? document.querySelector(e) : e;
}
function po(e, t, a) {
  const i = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(i))
    return window._nc_initial_state.get(i);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const n = document.querySelector(i);
  if (n === null) {
    if (a !== void 0)
      return a;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const r = JSON.parse(atob(n.value));
    return window._nc_initial_state.set(i, r), r;
  } catch (r) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: r }), a !== void 0)
      return a;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: r });
  }
}
const Ah = (e, t, a) => {
  const i = Object.assign({
    escape: !0
  }, a || {}), n = function(r, s) {
    return s = s || {}, r.replace(
      /{([^{}]*)}/g,
      function(c, d) {
        const _ = s[d];
        return i.escape ? encodeURIComponent(typeof _ == "string" || typeof _ == "number" ? _.toString() : c) : typeof _ == "string" || typeof _ == "number" ? _.toString() : c;
      }
    );
  };
  return e.charAt(0) !== "/" && (e = "/" + e), n(e, t || {});
}, Et = (e, t, a) => {
  const i = Object.assign({
    noRewrite: !1
  }, a || {}), n = a?.baseURL ?? r_();
  return window?.OC?.config?.modRewriteWorking === !0 && !i.noRewrite ? n + Ah(e, t, a) : n + "/index.php" + Ah(e, t, a);
};
function r_() {
  let e = window._oc_webroot;
  if (typeof e > "u") {
    e = location.pathname;
    const t = e.indexOf("/index.php/");
    if (t !== -1)
      e = e.slice(0, t);
    else {
      const a = e.indexOf("/", 1);
      e = e.slice(0, a > 0 ? a : void 0);
    }
  }
  return e;
}
function Eh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, i = Array(t); a < t; a++) i[a] = e[a];
  return i;
}
function l_(e) {
  if (Array.isArray(e)) return e;
}
function s_(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var i, n, r, s, c = [], d = !0, _ = !1;
    try {
      if (r = (a = a.call(e)).next, t !== 0) for (; !(d = (i = r.call(a)).done) && (c.push(i.value), c.length !== t); d = !0) ;
    } catch (v) {
      _ = !0, n = v;
    } finally {
      try {
        if (!d && a.return != null && (s = a.return(), Object(s) !== s)) return;
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
    var a = {}.toString.call(e).slice(8, -1);
    return a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set" ? Array.from(e) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Eh(e, t) : void 0;
  }
}
const ib = Object.entries, $h = Object.setPrototypeOf, d_ = Object.isFrozen, nb = Object.getPrototypeOf, rb = Object.getOwnPropertyDescriptor;
let Dt = Object.freeze, Vt = Object.seal, Tr = Object.create, lb = typeof Reflect < "u" && Reflect, Kc = lb.apply, Wc = lb.construct;
Dt || (Dt = function(t) {
  return t;
});
Vt || (Vt = function(t) {
  return t;
});
Kc || (Kc = function(t, a) {
  for (var i = arguments.length, n = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++) n[r - 2] = arguments[r];
  return t.apply(a, n);
});
Wc || (Wc = function(t) {
  for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++) i[n - 1] = arguments[n];
  return new t(...i);
});
const Ti = wt(Array.prototype.forEach), f_ = wt(Array.prototype.lastIndexOf), xh = wt(Array.prototype.pop), ul = wt(Array.prototype.push), h_ = wt(Array.prototype.slice), p_ = wt(Array.prototype.splice), Nr = Array.isArray, nc = sb(Set), rc = wt(Set.prototype.add), cl = wt(Set.prototype.has), Xn = wt(String.prototype.toLowerCase), lc = wt(String.prototype.toString), Oh = wt(String.prototype.match), dl = wt(String.prototype.replace), Nh = wt(String.prototype.indexOf), v_ = wt(String.prototype.trim), b_ = wt(Number.prototype.toString), g_ = wt(Boolean.prototype.toString), Rh = typeof BigInt > "u" ? null : wt(BigInt.prototype.toString), Ih = typeof Symbol > "u" ? null : wt(Symbol.prototype.toString), fa = wt(Object.prototype.hasOwnProperty), fl = wt(Object.prototype.toString), Ut = wt(RegExp.prototype.test), Ai = sb(TypeError);
function wt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++) i[n - 1] = arguments[n];
    return Kc(e, t, i);
  };
}
function sb(e) {
  return function() {
    for (var t = arguments.length, a = new Array(t), i = 0; i < t; i++) a[i] = arguments[i];
    return Wc(e, a);
  };
}
function et(e, t) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Xn;
  if ($h && $h(e, null), !Nr(t)) return e;
  let i = t.length;
  for (; i--; ) {
    let n = t[i];
    if (typeof n == "string") {
      const r = a(n);
      r !== n && (d_(t) || (t[i] = r), n = r);
    }
    e[n] = !0;
  }
  return e;
}
function m_(e) {
  for (let t = 0; t < e.length; t++) fa(e, t) || (e[t] = null);
  return e;
}
function wa(e) {
  const t = Tr(null);
  for (const i of ib(e)) {
    var a = u_(i, 2);
    const n = a[0], r = a[1];
    fa(e, n) && (Nr(r) ? t[n] = m_(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = wa(r) : t[n] = r);
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
      return fl(e);
    case "function":
    case "object": {
      if (e === null) return fl(e);
      const t = e, a = Oa(t, "toString");
      if (typeof a == "function") {
        const i = a(t);
        return typeof i == "string" ? i : fl(i);
      }
      return fl(e);
    }
    default:
      return fl(e);
  }
}
function Oa(e, t) {
  for (; e !== null; ) {
    const i = rb(e, t);
    if (i) {
      if (i.get) return wt(i.get);
      if (typeof i.value == "function") return wt(i.value);
    }
    e = nb(e);
  }
  function a() {
    return null;
  }
  return a;
}
function __(e, t) {
  for (; e !== null; ) {
    const a = rb(e, t);
    if (a) return a.get ? wt(a.get) : null;
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
]), C_ = Vt(/{{[\w\W]*|^[\w\W]*}}/g), T_ = Vt(/<%[\w\W]*|^[\w\W]*%>/g), A_ = Vt(/\${[\w\W]*/g), E_ = Vt(/^data-[\-\w.\u00B7-\uFFFF]+$/), $_ = Vt(/^aria-[\-\w]+$/), Mh = Vt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), x_ = Vt(/^(?:\w+script|data):/i), O_ = Vt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), N_ = Vt(/^html$/i), R_ = Vt(/^[a-z][.\w]*(-[.\w]+)+$/i), dc = Vt(/<[/\w!]/g), Uh = Vt(/<[/\w]/g), I_ = Vt(/<\/no(script|embed|frames)/i), zh = Vt(/\/>/i), xt = {
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
}, L_ = Dt(et({}, [
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
}, D_ = function(t, a) {
  if (typeof t != "object" || typeof t.createPolicy != "function") return null;
  let i = null;
  const n = "data-tt-policy-suffix";
  a && a.hasAttribute(n) && (i = a.getAttribute(n));
  const r = "dompurify" + (i ? "#" + i : "");
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
}, un = function(t, a, i, n) {
  return fa(t, a) && Nr(t[a]) ? et(n.base ? wa(n.base) : {}, t[a], n.transform) : i;
}, fc = function(t, a, i) {
  const n = fa(t, a) ? t[a] : void 0;
  return n && typeof n == "object" ? wa(n) : i();
};
function ob() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : P_();
  const t = (pe) => ob(pe);
  if (t.version = "3.4.17", t.removed = [], !e || !e.document || e.document.nodeType !== xt.document || !e.Element)
    return t.isSupported = !1, t;
  let a = e.document;
  const i = a, n = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, c = e.Element, d = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const _ = e.DOMParser, v = e.trustedTypes, y = c.prototype, m = Oa(y, "cloneNode"), k = Oa(y, "remove"), S = Oa(y, "removeAttributeNode"), C = Oa(y, "nextSibling"), $ = Oa(y, "childNodes"), L = Oa(y, "parentNode"), P = Oa(y, "shadowRoot"), F = Oa(y, "attributes"), D = s && s.prototype ? Oa(s.prototype, "nodeType") : null, fe = s && s.prototype ? Oa(s.prototype, "nodeName") : null, J = s && s.prototype ? Oa(s.prototype, "ownerDocument") : null, x = function(E) {
    return D ? D(E) : E.nodeType;
  }, V = function(E) {
    return fe ? fe(E) : E.nodeName;
  }, W = __(y, "namespaceURI"), Z = function(E) {
    return W ? W(E) : E.namespaceURI;
  };
  if (typeof r == "function") {
    const pe = a.createElement("template");
    pe.content && pe.content.ownerDocument && (a = pe.content.ownerDocument);
  }
  let ie, B = "", q, M = !1, G = 0;
  const ee = function() {
    if (G > 0) throw Ai('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ne = function(E) {
    ee(), G++;
    try {
      return ie.createHTML(E);
    } finally {
      G--;
    }
  }, X = function(E) {
    ee(), G++;
    try {
      return ie.createScriptURL(E);
    } finally {
      G--;
    }
  }, le = function() {
    return M || (q = D_(v, n), M = !0), q;
  }, _e = a, Re = _e.implementation, $e = _e.createNodeIterator, Me = _e.createDocumentFragment, Ze = _e.getElementsByTagName, ct = i.importNode;
  let ye = jh();
  t.isSupported = typeof ib == "function" && typeof L == "function" && Re && Re.createHTMLDocument !== void 0;
  const Ne = C_, ge = T_, De = A_, nt = E_, te = $_, T = x_, R = O_, I = R_;
  let N = Mh, O = null;
  const Y = et({}, [
    ...Lh,
    ...sc,
    ...oc,
    ...uc,
    ...Ph
  ]);
  let ae = null;
  const ue = et({}, [
    ...Dh,
    ...cc,
    ...Fh,
    ...js
  ]);
  let ve = Object.seal(Tr(null, {
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
  })), ce = null, xe = null;
  const we = Object.seal(Tr(null, {
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
  let Ae = !0, Oe = !0, Ve = !1, Ye = !0, qe = !1, at = !0, dt = !1, yt = !1, gt = null, ia = null, pa = !1, kt = !1, Rt = !1, Ma = !1, Gt = !0, va = !1;
  const $n = "user-content-";
  let Wa = !0, xn = !1, Ta = null, Ya = {}, Za = null;
  const Fr = et({}, [
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
  let hi = null;
  const Ki = et({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let Wi = null;
  const Yi = et({}, [
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
  ]), rt = "http://www.w3.org/1998/Math/MathML", ur = "http://www.w3.org/2000/svg", ba = "http://www.w3.org/1999/xhtml";
  let pi = ba, Zi = !1, cr = null;
  const On = et({}, [
    rt,
    ur,
    ba
  ], lc), Xi = Dt([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let vi = et({}, Xi);
  const Ji = Dt(["annotation-xml"]);
  let bi = et({}, Ji);
  const Nn = et({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let Ua = null;
  const Qi = ["application/xhtml+xml", "text/html"], Tu = "text/html";
  let _t = null, Kt = null;
  const cs = a.createElement("form"), ds = function(E) {
    return E instanceof RegExp || E instanceof Function;
  }, Mr = function() {
    let E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Kt && Kt === E) return;
    (!E || typeof E != "object") && (E = {}), E = wa(E), Ua = Qi.indexOf(E.PARSER_MEDIA_TYPE) === -1 ? Tu : E.PARSER_MEDIA_TYPE, _t = Ua === "application/xhtml+xml" ? lc : Xn, O = un(E, "ALLOWED_TAGS", Y, { transform: _t }), ae = un(E, "ALLOWED_ATTR", ue, { transform: _t }), cr = un(E, "ALLOWED_NAMESPACES", On, { transform: lc }), Wi = un(E, "ADD_URI_SAFE_ATTR", Yi, {
      transform: _t,
      base: Yi
    }), hi = un(E, "ADD_DATA_URI_TAGS", Ki, {
      transform: _t,
      base: Ki
    }), Za = un(E, "FORBID_CONTENTS", Fr, { transform: _t }), ce = un(E, "FORBID_TAGS", wa({}), { transform: _t }), xe = un(E, "FORBID_ATTR", wa({}), { transform: _t }), Ya = fa(E, "USE_PROFILES") ? E.USE_PROFILES && typeof E.USE_PROFILES == "object" ? wa(E.USE_PROFILES) : E.USE_PROFILES : !1, Ae = E.ALLOW_ARIA_ATTR !== !1, Oe = E.ALLOW_DATA_ATTR !== !1, Ve = E.ALLOW_UNKNOWN_PROTOCOLS || !1, Ye = E.ALLOW_SELF_CLOSE_IN_ATTR !== !1, qe = E.SAFE_FOR_TEMPLATES || !1, at = E.SAFE_FOR_XML !== !1, dt = E.WHOLE_DOCUMENT || !1, kt = E.RETURN_DOM || !1, Rt = E.RETURN_DOM_FRAGMENT || !1, Ma = E.RETURN_TRUSTED_TYPE || !1, pa = E.FORCE_BODY || !1, Gt = E.SANITIZE_DOM !== !1, va = E.SANITIZE_NAMED_PROPS || !1, Wa = E.KEEP_CONTENT !== !1, xn = E.IN_PLACE || !1, N = w_(E.ALLOWED_URI_REGEXP) ? E.ALLOWED_URI_REGEXP : Mh, pi = typeof E.NAMESPACE == "string" ? E.NAMESPACE : ba, vi = fc(E, "MATHML_TEXT_INTEGRATION_POINTS", () => et({}, Xi)), bi = fc(E, "HTML_INTEGRATION_POINTS", () => et({}, Ji));
    const z = fc(E, "CUSTOM_ELEMENT_HANDLING", () => Tr(null));
    if (ve = Tr(null), fa(z, "tagNameCheck") && ds(z.tagNameCheck) && (ve.tagNameCheck = z.tagNameCheck), fa(z, "attributeNameCheck") && ds(z.attributeNameCheck) && (ve.attributeNameCheck = z.attributeNameCheck), fa(z, "allowCustomizedBuiltInElements") && typeof z.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = z.allowCustomizedBuiltInElements), Vt(ve), qe && (Oe = !1), Rt && (kt = !0), Ya && (O = et({}, Ph), ae = Tr(null), Ya.html === !0 && (et(O, Lh), et(ae, Dh)), Ya.svg === !0 && (et(O, sc), et(ae, cc), et(ae, js)), Ya.svgFilters === !0 && (et(O, oc), et(ae, cc), et(ae, js)), Ya.mathMl === !0 && (et(O, uc), et(ae, Fh), et(ae, js))), we.tagCheck = null, we.attributeCheck = null, fa(E, "ADD_TAGS") && (typeof E.ADD_TAGS == "function" ? we.tagCheck = E.ADD_TAGS : Nr(E.ADD_TAGS) && (O === Y && (O = wa(O)), et(O, E.ADD_TAGS, _t))), fa(E, "ADD_ATTR") && (typeof E.ADD_ATTR == "function" ? we.attributeCheck = E.ADD_ATTR : Nr(E.ADD_ATTR) && (ae === ue && (ae = wa(ae)), et(ae, E.ADD_ATTR, _t))), fa(E, "ADD_FORBID_CONTENTS") && Nr(E.ADD_FORBID_CONTENTS) && (Za === Fr && (Za = wa(Za)), et(Za, E.ADD_FORBID_CONTENTS, _t)), Wa && (O["#text"] = !0), dt && et(O, [
      "html",
      "head",
      "body"
    ]), O.table && (et(O, ["tbody"]), delete ce.tbody), E.TRUSTED_TYPES_POLICY) {
      if (typeof E.TRUSTED_TYPES_POLICY.createHTML != "function") throw Ai('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof E.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Ai('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const se = ie;
      ie = E.TRUSTED_TYPES_POLICY;
      try {
        B = ne("");
      } catch (re) {
        throw ie = se, re;
      }
    } else E.TRUSTED_TYPES_POLICY === null ? (ie = void 0, B = "") : (ie === void 0 && (ie = le()), ie && typeof B == "string" && (B = ne("")));
    Dt && Dt(E), Kt = E;
  }, fs = et({}, [
    ...sc,
    ...oc,
    ...k_
  ]), ht = et({}, [...uc, ...S_]), Ur = function(E, z, se) {
    return z.namespaceURI === ba ? E === "svg" : z.namespaceURI === rt ? E === "svg" && (se === "annotation-xml" || vi[se]) : !!fs[E];
  }, Au = function(E, z, se) {
    return z.namespaceURI === ba ? E === "math" : z.namespaceURI === ur ? E === "math" && bi[se] : !!ht[E];
  }, Eu = function(E, z, se) {
    return z.namespaceURI === ur && !bi[se] || z.namespaceURI === rt && !vi[se] ? !1 : !ht[E] && (Nn[E] || !fs[E]);
  }, gi = function(E) {
    const z = Z(E), se = Xn(V(E)), re = L(E);
    let Ie, Fe;
    return re && x(re) === xt.element ? (Ie = { namespaceURI: Z(re) }, Fe = Xn(V(re))) : (Ie = { namespaceURI: pi }, Fe = "template"), cr[z] ? z === ur ? Ur(se, Ie, Fe) : z === rt ? Au(se, Ie, Fe) : z === ba ? Eu(se, Ie, Fe) : !!(Ua === "application/xhtml+xml" && cr[z]) : !1;
  }, Xa = function(E) {
    ul(t.removed, { element: E });
    try {
      L(E).removeChild(E);
    } catch {
      if (k(E), !L(E)) throw Ai("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, mi = function(E, z, se) {
    try {
      S(E, z);
    } catch {
      try {
        E.removeAttribute(se);
      } catch {
      }
    }
  }, Rn = function(E) {
    jr(E);
    const z = $(E);
    z && Ti(h_(z), (re) => {
      try {
        k(re);
      } catch {
      }
    });
    const se = x(E) === xt.element ? F(E) : null;
    if (se) for (let re = se.length - 1; re >= 0; --re) {
      const Ie = se[re], Fe = Ie && Ie.name;
      typeof Fe == "string" && mi(E, Ie, Fe);
    }
  }, en = function(E, z, se) {
    if (!se) try {
      se = z.getAttributeNode(E);
    } catch {
      se = null;
    }
    ul(t.removed, {
      attribute: se || null,
      from: z
    });
    try {
      se ? S(z, se) : z.removeAttribute(E);
    } catch {
      try {
        z.removeAttribute(E);
      } catch {
      }
    }
    if (E === "is")
      if (kt || Rt) try {
        Xa(z);
      } catch {
      }
      else try {
        z.setAttribute(E, "");
      } catch {
      }
  }, hs = function(E) {
    const z = F(E);
    if (z)
      for (let se = z.length - 1; se >= 0; --se) {
        const re = z[se], Ie = re && re.name;
        typeof Ie != "string" || ae[_t(Ie)] || mi(E, re, Ie);
      }
  }, zr = function(E, z) {
    let se = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const re = [E];
    for (; re.length > 0; ) {
      const Ie = re.pop();
      if (z(Ie) === !1) continue;
      if (se && x(Ie) === xt.element) {
        const Ke = P(Ie);
        Aa(Ke) && re.push(Ke);
      }
      const Fe = $(Ie);
      if (Fe) for (let Ke = Fe.length - 1; Ke >= 0; --Ke) re.push(Fe[Ke]);
    }
  }, jr = function(E) {
    zr(E, (z) => {
      x(z) === xt.element && hs(z);
    });
  }, Br = function(E) {
    const z = [];
    return zr(E, (se) => {
      z.push(se);
    }, !0), z;
  }, $u = function(E, z) {
    const se = nc();
    Ti(Br(E), (re) => {
      x(re) === xt.element && rc(se, re);
    }), Ti(z, (re) => {
      x(re) === xt.element && !cl(se, re) && hs(re);
    });
  }, ps = function(E, z) {
    let se = !1;
    return Ti(t.removed, (re) => {
      re.element && (se = se || re.element === E, jr(re.element));
    }), $u(E, z), se;
  }, xu = 8, Ou = function(E, z) {
    const se = Ta;
    let re = null;
    const Ie = () => (re || (re = nc(), Ti(z, (Fe) => {
      rc(re, Fe);
    })), re);
    for (let Fe = 0; ; Fe++) {
      const Ke = Br(E), Tt = [E];
      let Wt = !1;
      if (Ti(Ke, (pt) => {
        x(pt) === xt.documentFragment ? ul(Tt, pt) : !Wt && !cl(se, pt) && (Wt = cl(Ie(), pt));
      }), !Wt) return;
      if (Fe >= xu) throw Ai("the tree kept changing during in-place sanitization; refusing to return it");
      Ti(Tt, (pt, It) => {
        Nu(pt, It > 0, E, Ie());
      });
    }
  }, Nu = function(E, z, se, re) {
    const Ie = Hr(E);
    let Fe;
    for (; Fe = Ie.nextNode(); )
      !cl(re, Fe) || cl(Ta, Fe) || (z && ga(ye.uponSanitizeShadowNode, Fe, null), hr(Fe, se), pr(Fe, se), Aa(Fe.content) && nn(Fe.content));
  }, Ru = function(E) {
    Ta && rc(Ta, E);
  }, vs = function(E, z) {
    return at ? E === "patchsrc" ? !0 : E === "for" && z !== "label" && z !== "output" : !1;
  }, Iu = function(E) {
    at && zr(E, (z) => {
      const se = x(z);
      if (se === xt.processingInstruction || se === xt.comment && Ut(Uh, z.data)) {
        try {
          k(z);
        } catch {
        }
        return !1;
      }
      if (se === xt.element) {
        const re = z, Ie = _t(V(z));
        try {
          re.hasAttribute && re.hasAttribute("patchsrc") && re.removeAttribute("patchsrc"), re.hasAttribute && re.hasAttribute("for") && vs("for", Ie) && re.removeAttribute("for");
        } catch {
        }
      }
      return !0;
    });
  }, bs = function(E) {
    let z = null, se = null;
    if (pa) E = "<remove></remove>" + E;
    else {
      const Fe = Oh(E, /^[\r\n\t ]+/);
      se = Fe && Fe[0];
    }
    Ua === "application/xhtml+xml" && pi === ba && (E = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + E + "</body></html>");
    const re = ie ? ne(E) : E;
    if (pi === ba) try {
      z = new _().parseFromString(re, Ua);
    } catch {
    }
    if (!z || !z.documentElement) {
      z = Re.createDocument(pi, "template", null);
      try {
        z.documentElement.innerHTML = Zi ? B : re;
      } catch {
      }
    }
    const Ie = z.body || z.documentElement;
    return E && se && Ie.insertBefore(a.createTextNode(se), Ie.childNodes[0] || null), pi === ba ? Ze.call(z, dt ? "html" : "body")[0] : dt ? z.documentElement : Ie;
  }, Hr = function(E) {
    const z = J ? J(E) : E.ownerDocument;
    return $e.call(z || E, E, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION, null);
  }, In = function(E) {
    return E = dl(E, Ne, " "), E = dl(E, ge, " "), E = dl(E, De, " "), E;
  }, Ln = function(E) {
    var z;
    dr(E);
    const se = (z = E.querySelectorAll) === null || z === void 0 ? void 0 : z.call(E, "template");
    se && Ti(se, (re) => {
      Aa(re.content) && Ln(re.content);
    });
  }, dr = function(E) {
    E.normalize();
    const z = J ? J(E) : E.ownerDocument, se = $e.call(z || E, E, d.SHOW_TEXT | d.SHOW_COMMENT | d.SHOW_CDATA_SECTION | d.SHOW_PROCESSING_INSTRUCTION, null);
    let re = se.nextNode();
    for (; re; )
      re.data = In(re.data), re = se.nextNode();
  }, tn = function(E) {
    const z = fe ? fe(E) : null;
    return typeof z != "string" || _t(z) !== "form" ? !1 : typeof E.nodeName != "string" || typeof E.textContent != "string" || typeof E.removeChild != "function" || E.attributes !== F(E) || typeof E.removeAttribute != "function" || typeof E.removeAttributeNode != "function" || typeof E.getAttributeNode != "function" || typeof E.setAttribute != "function" || typeof E.namespaceURI != "string" || typeof E.insertBefore != "function" || typeof E.hasChildNodes != "function" || E.nodeType !== D(E) || E.childNodes !== $(E);
  }, Aa = function(E) {
    if (!D || typeof E != "object" || E === null) return !1;
    try {
      return D(E) === xt.documentFragment;
    } catch {
      return !1;
    }
  }, an = function(E) {
    if (!D || typeof E != "object" || E === null) return !1;
    try {
      return typeof D(E) == "number";
    } catch {
      return !1;
    }
  };
  function ga(pe, E, z) {
    pe.length !== 0 && Ti(pe, (se) => {
      se.call(t, E, z, Kt);
    });
  }
  const gs = function(E, z) {
    return !!(at && E.hasChildNodes() && !an(E.firstElementChild) && Ut(dc, E.textContent) && Ut(dc, E.innerHTML) || at && L_[z] && x(E) === xt.element && Z(E) === ba && (an(E.firstElementChild) || typeof E.textContent == "string" && Ut(dc, E.textContent)) || E.nodeType === xt.processingInstruction || at && E.nodeType === xt.comment && Ut(Uh, E.data));
  }, Pn = function(E, z) {
    if (E instanceof RegExp) return Ut(E, z);
    if (E instanceof Function) {
      for (var se = arguments.length, re = new Array(se > 2 ? se - 2 : 0), Ie = 2; Ie < se; Ie++) re[Ie - 2] = arguments[Ie];
      return !!E(z, ...re);
    }
    return !1;
  }, Lu = function(E, z, se) {
    if (!ce[z] && Vr(z) && Pn(ve.tagNameCheck, z)) return !1;
    if (Wa && !Za[z] && !Za[Xn(z)]) {
      const re = L(E), Ie = $(E);
      if (Ie && re) {
        const Fe = Ie.length;
        for (let Ke = Fe - 1; Ke >= 0; --Ke) {
          const Tt = E === se ? m(Ie[Ke], !0) : Ie[Ke];
          re.insertBefore(Tt, C(E));
        }
      }
    }
    return Xa(E), !0;
  }, fr = function(E, z, se, re) {
    return E.length === 0 ? z : z === se || z === re ? wa(z) : z;
  }, Ja = function(E, z) {
    return E === z || L(E) !== null ? !1 : (xn && jr(E), !0);
  }, hr = function(E, z) {
    if (Ru(E), ga(ye.beforeSanitizeElements, E, null), Ja(E, z)) return !0;
    if (tn(E))
      return Xa(E), !0;
    const se = _t(V(E));
    if (O = fr(ye.uponSanitizeElement, O, Y, gt), ga(ye.uponSanitizeElement, E, {
      tagName: se,
      allowedTags: O
    }), Ja(E, z)) return !0;
    if (gs(E, se))
      return Xa(E), !0;
    if (ce[se] || !(we.tagCheck instanceof Function && we.tagCheck(se)) && !O[se]) {
      const re = Lu(E, se, z);
      return re === !1 && (ga(ye.afterSanitizeElements, E, null), Ja(E, z)) ? !0 : re;
    }
    if (x(E) === xt.element && !gi(E) || (se === "noscript" || se === "noembed" || se === "noframes") && Ut(I_, E.innerHTML))
      return Xa(E), !0;
    if (qe && E.nodeType === xt.text) {
      const re = In(E.textContent);
      E.textContent !== re && (ul(t.removed, { element: E.cloneNode() }), E.textContent = re);
    }
    return ga(ye.afterSanitizeElements, E, null), Ja(E, z);
  }, Ea = function(E, z, se) {
    if (xe[z] || vs(z, E) || Gt && (z === "id" || z === "name") && (se in a || se in cs)) return !1;
    const re = ae[z] || we.attributeCheck instanceof Function && we.attributeCheck(z, E);
    return Oe && Ut(nt, z) || Ae && Ut(te, z) ? !0 : re ? Wi[z] || Ut(N, dl(se, R, "")) || (z === "src" || z === "xlink:href" || z === "href") && E !== "script" && Nh(se, "data:") === 0 && hi[E] || Ve && !Ut(T, dl(se, R, "")) ? !0 : !se : Vr(E) && Pn(ve.tagNameCheck, E) && Pn(ve.attributeNameCheck, z, E) || z === "is" && ve.allowCustomizedBuiltInElements && Pn(ve.tagNameCheck, se);
  }, ms = et({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Vr = function(E) {
    return !ms[Xn(E)] && Ut(I, E);
  }, ys = function(E, z, se, re) {
    if (ie && typeof v == "object" && typeof v.getAttributeType == "function" && !se) switch (v.getAttributeType(E, z)) {
      case "TrustedHTML":
        return ne(re);
      case "TrustedScriptURL":
        return X(re);
    }
    return re;
  }, Pu = function(E, z, se, re) {
    try {
      return se ? E.setAttributeNS(se, z, re) : E.setAttribute(z, re), tn(E) ? (Xa(E), !1) : !0;
    } catch {
      return en(z, E), !1;
    }
  }, _s = function(E, z) {
    return at && Ut(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, z) ? !0 : Xn(E) === "attributename" && Oh(z, "href") !== null;
  }, pr = function(E, z) {
    if (ga(ye.beforeSanitizeAttributes, E, null), Ja(E, z)) return;
    const se = E.attributes;
    if (!se || tn(E)) return;
    ae = fr(ye.uponSanitizeAttribute, ae, ue, ia);
    const re = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ae,
      forceKeepAttr: void 0
    };
    let Ie = se.length;
    const Fe = _t(E.nodeName);
    for (; Ie--; ) {
      const Ke = se[Ie], Tt = Ke.name, Wt = Ke.namespaceURI, pt = Ke.value, It = _t(Tt), yi = pt;
      let $t = Tt === "value" ? yi : v_(yi), ws = !1;
      if (re.attrName = It, re.attrValue = $t, re.keepAttr = !0, re.forceKeepAttr = void 0, ga(ye.uponSanitizeAttribute, E, re), $t = re.attrValue, va && (It === "id" || It === "name") && Nh($t, $n) !== 0 && (en(Tt, E, Ke), $t = $n + $t, ws = !0), _s(Tt, $t)) {
        en(Tt, E, Ke);
        continue;
      }
      if (!re.forceKeepAttr) {
        if (!re.keepAttr) {
          en(Tt, E, Ke);
          continue;
        }
        if (!Ye && Ut(zh, $t)) {
          en(Tt, E, Ke);
          continue;
        }
        if (qe && ($t = In($t)), !Ea(Fe, It, $t)) {
          en(Tt, E, Ke);
          continue;
        }
        $t = ys(Fe, It, Wt, $t), $t !== yi && Pu(E, Tt, Wt, $t) && ws && xh(t.removed);
      }
    }
    ga(ye.afterSanitizeAttributes, E, null), Ja(E, z);
  }, nn = function(E) {
    let z = null;
    const se = Hr(E);
    for (ga(ye.beforeSanitizeShadowDOM, E, null); z = se.nextNode(); )
      if (ga(ye.uponSanitizeShadowNode, z, null), hr(z, E), pr(z, E), Aa(z.content) && nn(z.content), x(z) === xt.element) {
        const re = P(z);
        Aa(re) && (vr(re), nn(re));
      }
    qe && dr(E), ga(ye.afterSanitizeShadowDOM, E, null);
  }, vr = function(E) {
    const z = [{
      node: E,
      shadow: null
    }];
    for (; z.length > 0; ) {
      const se = z.pop();
      if (se.shadow) {
        nn(se.shadow);
        continue;
      }
      const re = se.node, Ie = x(re) === xt.element, Fe = $(re);
      if (Fe) for (let Ke = Fe.length - 1; Ke >= 0; --Ke) z.push({
        node: Fe[Ke],
        shadow: null
      });
      if (Ie) {
        const Ke = fe ? fe(re) : null;
        if (typeof Ke == "string" && _t(Ke) === "template") {
          const Tt = re.content;
          Aa(Tt) && z.push({
            node: Tt,
            shadow: null
          });
        }
      }
      if (Ie) {
        const Ke = P(re);
        Aa(Ke) && z.push({
          node: null,
          shadow: Ke
        }, {
          node: Ke,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(pe) {
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, z = null, se = null, re = null, Ie = null;
    if (Zi = !pe, Zi && (pe = "<!-->"), typeof pe != "string" && !an(pe) && (pe = y_(pe), typeof pe != "string"))
      throw Ai("dirty is not a string, aborting");
    if (!t.isSupported) return pe;
    yt ? (O = gt, ae = ia) : Mr(E), (ye.uponSanitizeElement.length > 0 || ye.uponSanitizeAttribute.length > 0) && (O = wa(O)), ye.uponSanitizeAttribute.length > 0 && (ae = wa(ae)), t.removed = [];
    const Fe = xn && typeof pe != "string" && an(pe);
    let Ke = [];
    const Tt = Ta;
    if (Fe) {
      Iu(pe);
      const It = V(pe);
      if (typeof It == "string") {
        const yi = _t(It);
        if (!O[yi] || ce[yi])
          throw Rn(pe), Ai("root node is forbidden and cannot be sanitized in-place");
      }
      if (tn(pe))
        throw Rn(pe), Ai("root node is clobbered and cannot be sanitized in-place");
      Ke = Br(pe), Ta = nc();
    } else if (an(pe))
      z = bs("<!---->"), se = z.ownerDocument.importNode(pe, !0), se.nodeType === xt.element && se.nodeName === "BODY" || se.nodeName === "HTML" ? z = se : z.appendChild(se), vr(z);
    else {
      if (!kt && !qe && !dt && pe.indexOf("<") === -1) return ie && Ma ? ne(pe) : pe;
      if (z = bs(pe), !z) return kt ? null : Ma ? B : "";
    }
    z && pa && Xa(z.firstChild);
    const Wt = Fe ? pe : z;
    try {
      Fe && vr(pe);
      const It = Hr(Wt);
      for (; re = It.nextNode(); )
        hr(re, Wt), pr(re, Wt), Aa(re.content) && nn(re.content);
      Fe && Ou(pe, Ke);
    } catch (It) {
      throw Fe && (Rn(pe), ps(pe, Ke)), It;
    } finally {
      Ta = Tt;
    }
    if (Fe) {
      if (ps(pe, Ke)) throw Ai("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return qe && Ln(pe), pe;
    }
    if (kt) {
      if (qe && Ln(z), Rt)
        for (Ie = Me.call(z.ownerDocument); z.firstChild; ) Ie.appendChild(z.firstChild);
      else Ie = z;
      return (ae.shadowroot || ae.shadowrootmode) && (Ie = ct.call(i, Ie, !0)), Ie;
    }
    let pt = dt ? z.outerHTML : z.innerHTML;
    return dt && O["!doctype"] && z.ownerDocument && z.ownerDocument.doctype && z.ownerDocument.doctype.name && Ut(N_, z.ownerDocument.doctype.name) && (pt = "<!DOCTYPE " + z.ownerDocument.doctype.name + `>
` + pt), qe && (pt = In(pt)), ie && Ma ? ne(pt) : pt;
  }, t.setConfig = function() {
    let pe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Mr(pe), yt = !0, gt = O, ia = ae;
  }, t.clearConfig = function() {
    Kt = null, yt = !1, gt = null, ia = null, ie = q, B = "";
  }, t.isValidAttribute = function(pe, E, z) {
    Kt || Mr({});
    const se = _t(pe), re = _t(E);
    return typeof z == "string" && (_s(E, z) || !Ye && Ut(zh, z)) ? !1 : Ea(se, re, z);
  }, t.addHook = function(pe, E) {
    typeof E == "function" && fa(ye, pe) && ul(ye[pe], E);
  }, t.removeHook = function(pe, E) {
    if (fa(ye, pe)) {
      if (E !== void 0) {
        const z = f_(ye[pe], E);
        return z === -1 ? void 0 : p_(ye[pe], z, 1)[0];
      }
      return xh(ye[pe]);
    }
  }, t.removeHooks = function(pe) {
    fa(ye, pe) && (ye[pe] = []);
  }, t.removeAllHooks = function() {
    ye = jh();
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
  function t(a) {
    var i = "" + a, n = e.exec(i);
    if (!n)
      return i;
    var r, s = "", c = 0, d = 0;
    for (c = n.index; c < i.length; c++) {
      switch (i.charCodeAt(c)) {
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
      d !== c && (s += i.substring(d, c)), d = c + 1, s += r;
    }
    return d !== c ? s + i.substring(d, c) : s;
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
function g(e, t, a, i, n) {
  const r = typeof a == "object" ? a : void 0, s = typeof i == "number" ? i : typeof a == "number" ? a : void 0, c = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof n == "object" ? n : typeof i == "object" ? i : {}
  }, d = (C) => C, _ = (c.sanitize ? ub.sanitize : d) || d, v = c.escape ? vo : d, y = (C) => typeof C == "string" || typeof C == "number", m = (C, $, L) => C.replace(/%n/g, "" + L).replace(/{([^{}]*)}/g, (P, F) => {
    if ($ === void 0 || !(F in $))
      return v(P);
    const D = $[F];
    return y(D) ? v(`${D}`) : typeof D == "object" && y(D.value) ? (D.escape !== !1 ? vo : d)(`${D.value}`) : v(P);
  });
  let S = (n?.bundle ?? db(e)).translations[t] || t;
  return S = Array.isArray(S) ? S[0] : S, _(typeof r == "object" || s !== void 0 ? m(
    S,
    r,
    s
  ) : S);
}
function At(e, t, a, i, n, r) {
  const s = "_" + t + "_::_" + a + "_", c = r?.bundle ?? db(e), d = c.translations[s];
  if (typeof d < "u") {
    const _ = d;
    if (Array.isArray(_)) {
      const v = c.pluralFunction(i);
      return g(e, _[v], n, i, r);
    }
  }
  return i === 1 ? g(e, t, n, i, r) : g(e, a, n, i, r);
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
function B_(e, t = () => "", a = 256) {
  const i = /* @__PURE__ */ new Map();
  let n;
  return (...r) => {
    if (r.length !== 2 || r.some((_) => typeof _ != "string")) return e(...r);
    const s = t();
    s !== n && (i.clear(), n = s);
    const c = JSON.stringify(r);
    if (i.has(c)) return i.get(c);
    const d = e(...r);
    return i.size >= a && i.delete(i.keys().next().value), i.set(c, d), d;
  };
}
class bo {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, a, i) {
    this.scope = `${i ? bo.GLOBAL_SCOPE_PERSISTENT : bo.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = a;
  }
  scopeKey(t) {
    return `${this.scope}${t}`;
  }
  setItem(t, a) {
    this.wrapped.setItem(this.scopeKey(t), a);
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
  return pc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...a) => console.error("SEMVER", ...a) : () => {
  }, pc;
}
var vc, Vh;
function pb() {
  if (Vh) return vc;
  Vh = 1;
  const e = "2.0.0", t = 256, a = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, n = t - 6;
  return vc = {
    MAX_LENGTH: t,
    MAX_SAFE_COMPONENT_LENGTH: i,
    MAX_SAFE_BUILD_LENGTH: n,
    MAX_SAFE_INTEGER: a,
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
      MAX_SAFE_COMPONENT_LENGTH: a,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: n
    } = pb(), r = hb();
    t = e.exports = {};
    const s = t.re = [], c = t.safeRe = [], d = t.src = [], _ = t.safeSrc = [], v = t.t = {};
    let y = 0;
    const m = "[a-zA-Z0-9-]", k = [
      ["\\s", 1],
      ["\\d", n],
      [m, i]
    ], S = ($) => {
      for (const [L, P] of k)
        $ = $.split(`${L}*`).join(`${L}{0,${P}}`).split(`${L}+`).join(`${L}{1,${P}}`);
      return $;
    }, C = ($, L, P) => {
      const F = S(L), D = y++;
      r($, D, L), v[$] = D, d[D] = L, _[D] = F, s[D] = new RegExp(L, P ? "g" : void 0), c[D] = new RegExp(F, P ? "g" : void 0);
    };
    C("NUMERICIDENTIFIER", "0|[1-9]\\d*"), C("NUMERICIDENTIFIERLOOSE", "\\d+"), C("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${m}*`), C("MAINVERSION", `(${d[v.NUMERICIDENTIFIER]})\\.(${d[v.NUMERICIDENTIFIER]})\\.(${d[v.NUMERICIDENTIFIER]})`), C("MAINVERSIONLOOSE", `(${d[v.NUMERICIDENTIFIERLOOSE]})\\.(${d[v.NUMERICIDENTIFIERLOOSE]})\\.(${d[v.NUMERICIDENTIFIERLOOSE]})`), C("PRERELEASEIDENTIFIER", `(?:${d[v.NONNUMERICIDENTIFIER]}|${d[v.NUMERICIDENTIFIER]})`), C("PRERELEASEIDENTIFIERLOOSE", `(?:${d[v.NONNUMERICIDENTIFIER]}|${d[v.NUMERICIDENTIFIERLOOSE]})`), C("PRERELEASE", `(?:-(${d[v.PRERELEASEIDENTIFIER]}(?:\\.${d[v.PRERELEASEIDENTIFIER]})*))`), C("PRERELEASELOOSE", `(?:-?(${d[v.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${d[v.PRERELEASEIDENTIFIERLOOSE]})*))`), C("BUILDIDENTIFIER", `${m}+`), C("BUILD", `(?:\\+(${d[v.BUILDIDENTIFIER]}(?:\\.${d[v.BUILDIDENTIFIER]})*))`), C("FULLPLAIN", `v?${d[v.MAINVERSION]}${d[v.PRERELEASE]}?${d[v.BUILD]}?`), C("FULL", `^${d[v.FULLPLAIN]}$`), C("LOOSEPLAIN", `[v=\\s]*${d[v.MAINVERSIONLOOSE]}${d[v.PRERELEASELOOSE]}?${d[v.BUILD]}?`), C("LOOSE", `^${d[v.LOOSEPLAIN]}$`), C("GTLT", "((?:<|>)?=?)"), C("XRANGEIDENTIFIERLOOSE", `${d[v.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), C("XRANGEIDENTIFIER", `${d[v.NUMERICIDENTIFIER]}|x|X|\\*`), C("XRANGEPLAIN", `[v=\\s]*(${d[v.XRANGEIDENTIFIER]})(?:\\.(${d[v.XRANGEIDENTIFIER]})(?:\\.(${d[v.XRANGEIDENTIFIER]})(?:${d[v.PRERELEASE]})?${d[v.BUILD]}?)?)?`), C("XRANGEPLAINLOOSE", `[v=\\s]*(${d[v.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[v.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[v.XRANGEIDENTIFIERLOOSE]})(?:${d[v.PRERELEASELOOSE]})?${d[v.BUILD]}?)?)?`), C("XRANGE", `^${d[v.GTLT]}\\s*${d[v.XRANGEPLAIN]}$`), C("XRANGELOOSE", `^${d[v.GTLT]}\\s*${d[v.XRANGEPLAINLOOSE]}$`), C("COERCEPLAIN", `(^|[^\\d])(\\d{1,${a}})(?:\\.(\\d{1,${a}}))?(?:\\.(\\d{1,${a}}))?`), C("COERCE", `${d[v.COERCEPLAIN]}(?:$|[^\\d])`), C("COERCEFULL", d[v.COERCEPLAIN] + `(?:${d[v.PRERELEASE]})?(?:${d[v.BUILD]})?(?:$|[^\\d])`), C("COERCERTL", d[v.COERCE], !0), C("COERCERTLFULL", d[v.COERCEFULL], !0), C("LONETILDE", "(?:~>?)"), C("TILDETRIM", `(\\s*)${d[v.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", C("TILDE", `^${d[v.LONETILDE]}${d[v.XRANGEPLAIN]}$`), C("TILDELOOSE", `^${d[v.LONETILDE]}${d[v.XRANGEPLAINLOOSE]}$`), C("LONECARET", "(?:\\^)"), C("CARETTRIM", `(\\s*)${d[v.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", C("CARET", `^${d[v.LONECARET]}${d[v.XRANGEPLAIN]}$`), C("CARETLOOSE", `^${d[v.LONECARET]}${d[v.XRANGEPLAINLOOSE]}$`), C("COMPARATORLOOSE", `^${d[v.GTLT]}\\s*(${d[v.LOOSEPLAIN]})$|^$`), C("COMPARATOR", `^${d[v.GTLT]}\\s*(${d[v.FULLPLAIN]})$|^$`), C("COMPARATORTRIM", `(\\s*)${d[v.GTLT]}\\s*(${d[v.LOOSEPLAIN]}|${d[v.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", C("HYPHENRANGE", `^\\s*(${d[v.XRANGEPLAIN]})\\s+-\\s+(${d[v.XRANGEPLAIN]})\\s*$`), C("HYPHENRANGELOOSE", `^\\s*(${d[v.XRANGEPLAINLOOSE]})\\s+-\\s+(${d[v.XRANGEPLAINLOOSE]})\\s*$`), C("STAR", "(<|>)?=?\\s*\\*"), C("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), C("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(Bs, Bs.exports)), Bs.exports;
}
var bc, Gh;
function G_() {
  if (Gh) return bc;
  Gh = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return bc = (i) => i ? typeof i != "object" ? e : i : t, bc;
}
var gc, Kh;
function K_() {
  if (Kh) return gc;
  Kh = 1;
  const e = /^[0-9]+$/, t = (i, n) => {
    if (typeof i == "number" && typeof n == "number")
      return i === n ? 0 : i < n ? -1 : 1;
    const r = e.test(i), s = e.test(n);
    return r && s && (i = +i, n = +n), i === n ? 0 : r && !s ? -1 : s && !r ? 1 : i < n ? -1 : 1;
  };
  return gc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, n) => t(n, i)
  }, gc;
}
var mc, Wh;
function vb() {
  if (Wh) return mc;
  Wh = 1;
  const e = hb(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: a } = pb(), { safeRe: i, t: n } = q_(), r = G_(), { compareIdentifiers: s } = K_(), c = (_, v) => {
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
      const m = v.trim().match(y.loose ? i[n.LOOSE] : i[n.FULL]);
      if (!m)
        throw new TypeError(`Invalid Version: ${v}`);
      if (this.raw = v, this.major = +m[1], this.minor = +m[2], this.patch = +m[3], this.major > a || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > a || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > a || this.patch < 0)
        throw new TypeError("Invalid patch version");
      m[4] ? this.prerelease = m[4].split(".").map((k) => {
        if (/^[0-9]+$/.test(k)) {
          const S = +k;
          if (S >= 0 && S < a)
            return S;
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
          const k = `-${y}`.match(this.options.loose ? i[n.PRERELEASELOOSE] : i[n.PRERELEASE]);
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
            let S = this.prerelease.length;
            for (; --S >= 0; )
              typeof this.prerelease[S] == "number" && (this.prerelease[S]++, S = -2);
            if (S === -1) {
              if (y === this.prerelease.join(".") && m === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(k);
            }
          }
          if (y) {
            let S = [y, k];
            if (m === !1 && (S = [y]), c(this.prerelease, y)) {
              const C = this.prerelease[y.split(".").length];
              isNaN(C) && (this.prerelease = S);
            } else
              this.prerelease = S;
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
  return yc = (a, i) => new e(a, i).major, yc;
}
var Y_ = W_();
const Zh = /* @__PURE__ */ Pd(Y_);
var _c, Xh;
function Z_() {
  if (Xh) return _c;
  Xh = 1;
  const e = vb();
  return _c = (a, i, n = !1) => {
    if (a instanceof e)
      return a;
    try {
      return new e(a, i);
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
  return wc = (a, i) => {
    const n = e(a, i);
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
  subscribe(t, a) {
    this.bus.subscribe(t, a);
  }
  unsubscribe(t, a) {
    this.bus.unsubscribe(t, a);
  }
  emit(t, ...a) {
    this.bus.emit(t, ...a);
  }
}
class t0 {
  handlers = /* @__PURE__ */ new Map();
  getVersion() {
    return "3.3.3";
  }
  subscribe(t, a) {
    this.handlers.set(
      t,
      (this.handlers.get(t) || []).concat(
        a
      )
    );
  }
  unsubscribe(t, a) {
    this.handlers.set(
      t,
      (this.handlers.get(t) || []).filter((i) => i !== a)
    );
  }
  emit(t, ...a) {
    (this.handlers.get(t) || []).forEach((n) => {
      try {
        n(a[0]);
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
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? hl = new e0(window._nc_event_bus) : hl = window._nc_event_bus = new t0(), hl);
}
function bb(e, t) {
  Dd().subscribe(e, t);
}
function a0(e, t) {
  Dd().unsubscribe(e, t);
}
function Mi(e, ...t) {
  Dd().emit(e, ...t);
}
const gb = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const i0 = Object.prototype.toString, n0 = (e) => i0.call(e) === "[object Object]", _r = () => {
}, r0 = /* @__PURE__ */ l0();
function l0() {
  var e, t, a;
  return gb && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((a = window) === null || a === void 0 ? void 0 : a.navigator.userAgent));
}
function kc(e) {
  return Array.isArray(e) ? e : [e];
}
function s0(e, t, a) {
  return Ge(e, t, {
    ...a,
    immediate: !0
  });
}
const mb = gb ? window : void 0;
function yl(e) {
  var t;
  const a = Di(e);
  return (t = a?.$el) !== null && t !== void 0 ? t : a;
}
function Rr(...e) {
  const t = (i, n, r, s) => (i.addEventListener(n, r, s), () => i.removeEventListener(n, r, s)), a = H(() => {
    const i = kc(Di(e[0])).filter((n) => n != null);
    return i.every((n) => typeof n != "string") ? i : void 0;
  });
  return s0(() => {
    var i, n;
    return [
      (i = (n = a.value) === null || n === void 0 ? void 0 : n.map((r) => yl(r))) !== null && i !== void 0 ? i : [mb].filter((r) => r != null),
      kc(Di(a.value ? e[1] : e[0])),
      kc(u(a.value ? e[2] : e[1])),
      Di(a.value ? e[3] : e[2])
    ];
  }, ([i, n, r, s], c, d) => {
    if (!i?.length || !n?.length || !r?.length) return;
    const _ = n0(s) ? { ...s } : s, v = i.flatMap((y) => n.flatMap((m) => r.map((k) => t(y, m, k, _))));
    d(() => {
      v.forEach((y) => y());
    });
  }, { flush: "post" });
}
let Qh = !1;
function ep(e, t, a = {}) {
  const { window: i = mb, ignore: n = [], capture: r = !0, detectIframe: s = !1, controls: c = !1 } = a;
  if (!i) return c ? {
    stop: _r,
    cancel: _r,
    trigger: _r
  } : _r;
  if (r0 && !Qh) {
    Qh = !0;
    const $ = { passive: !0 };
    Array.from(i.document.body.children).forEach((L) => L.addEventListener("click", _r, $)), i.document.documentElement.addEventListener("click", _r, $);
  }
  let d = !0;
  const _ = ($) => Di(n).some((L) => {
    if (typeof L == "string") return Array.from(i.document.querySelectorAll(L)).some((P) => P === $.target || $.composedPath().includes(P));
    {
      const P = yl(L);
      return P && ($.target === P || $.composedPath().includes(P));
    }
  });
  function v($) {
    const L = Di($);
    return L && L.$.subTree.shapeFlag === 16;
  }
  function y($, L) {
    const P = Di($), F = P.$.subTree && P.$.subTree.children;
    return F == null || !Array.isArray(F) ? !1 : F.some((D) => D.el === L.target || L.composedPath().includes(D.el));
  }
  const m = ($) => {
    const L = yl(e);
    if ($.target != null && !(!(L instanceof Element) && v(e) && y(e, $)) && !(!L || L === $.target || $.composedPath().includes(L))) {
      if ("detail" in $ && $.detail === 0 && (d = !_($)), !d) {
        d = !0;
        return;
      }
      t($);
    }
  };
  let k = !1;
  const S = [
    Rr(i, "click", ($) => {
      k || (k = !0, setTimeout(() => {
        k = !1;
      }, 0), m($));
    }, {
      passive: !0,
      capture: r
    }),
    Rr(i, "pointerdown", ($) => {
      const L = yl(e);
      d = !_($) && !!(L && !$.composedPath().includes(L));
    }, { passive: !0 }),
    s && Rr(i, "blur", ($) => {
      setTimeout(() => {
        const L = yl(e);
        let P = i.document.activeElement;
        for (; P?.shadowRoot; ) P = P.shadowRoot.activeElement;
        P?.tagName === "IFRAME" && !L?.contains(i.document.activeElement) && t($);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), C = () => S.forEach(($) => $());
  return c ? {
    stop: C,
    cancel: () => {
      d = !1;
    },
    trigger: ($) => {
      d = !0, m($), d = !1;
    }
  } : C;
}
function o0(e, t = {}) {
  const { threshold: a = 50, onSwipe: i, onSwipeEnd: n, onSwipeStart: r, passive: s = !0 } = t, c = /* @__PURE__ */ Lt({
    x: 0,
    y: 0
  }), d = /* @__PURE__ */ Lt({
    x: 0,
    y: 0
  }), _ = H(() => c.x - d.x), v = H(() => c.y - d.y), { max: y, abs: m } = Math, k = H(() => y(m(_.value), m(v.value)) >= a), S = /* @__PURE__ */ sv(!1), C = H(() => k.value ? m(_.value) > m(v.value) ? _.value > 0 ? "left" : "right" : v.value > 0 ? "up" : "down" : "none"), $ = (x) => [x.touches[0].clientX, x.touches[0].clientY], L = (x, V) => {
    c.x = x, c.y = V;
  }, P = (x, V) => {
    d.x = x, d.y = V;
  }, F = {
    passive: s,
    capture: !s
  }, D = (x) => {
    S.value && n?.(x, C.value), S.value = !1;
  }, fe = [
    Rr(e, "touchstart", (x) => {
      if (x.touches.length !== 1) return;
      const [V, W] = $(x);
      L(V, W), P(V, W), r?.(x);
    }, F),
    Rr(e, "touchmove", (x) => {
      if (x.touches.length !== 1) return;
      const [V, W] = $(x);
      P(V, W), F.capture && !F.passive && Math.abs(_.value) > Math.abs(v.value) && x.preventDefault(), !S.value && k.value && (S.value = !0), S.value && i?.(x);
    }, F),
    Rr(e, ["touchend", "touchcancel"], D, F)
  ];
  return {
    isSwiping: S,
    direction: C,
    coordsStart: c,
    coordsEnd: d,
    lengthX: _,
    lengthY: v,
    stop: () => fe.forEach((x) => x())
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
    let a = t, i = e, n = Uy(), r = My(), s = /* @__PURE__ */ j([]), c = H(() => s.value.reduce((te, T) => (te[~~T.id] = T) && te, {})), d = H(() => s.value.length), _ = /* @__PURE__ */ j(null), v = /* @__PURE__ */ j(!1), y = /* @__PURE__ */ j({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), m = /* @__PURE__ */ j({
      splitter: null,
      timeoutId: null
    }), k = H(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": y.value.dragging,
      "splitpanes--ready": v.value
    })), S = () => {
      document.addEventListener("mousemove", L, { passive: !1 }), document.addEventListener("mouseup", P), "ontouchstart" in window && (document.addEventListener("touchmove", L, { passive: !1 }), document.addEventListener("touchend", P));
    }, C = () => {
      document.removeEventListener("mousemove", L, { passive: !1 }), document.removeEventListener("mouseup", P), "ontouchstart" in window && (document.removeEventListener("touchmove", L, { passive: !1 }), document.removeEventListener("touchend", P));
    }, $ = (te, T) => {
      let R = te.target.closest(".splitpanes__splitter");
      if (R) {
        let { left: I, top: N } = R.getBoundingClientRect(), { clientX: O, clientY: Y } = "ontouchstart" in window && te.touches ? te.touches[0] : te;
        y.value.cursorOffset = i.horizontal ? Y - N : O - I;
      }
      S(), y.value.mouseDown = !0, y.value.activeSplitter = T, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, L = (te) => {
      y.value.mouseDown && (te.preventDefault(), y.value.dragging || (window.getSelection()?.removeAllRanges(), y.value.dragging = !0), requestAnimationFrame(() => {
        W(x(te)), De("resize", { event: te }, !0);
      }));
    }, P = (te) => {
      y.value.dragging && (window.getSelection()?.removeAllRanges(), De("resized", { event: te }, !0)), y.value.mouseDown = !1, y.value.activeSplitter = null, setTimeout(() => {
        y.value.dragging = !1, C(), document.documentElement.style.cursor = "";
      }, 100);
    }, F = (te, T) => {
      "ontouchstart" in window && (te.preventDefault(), m.value.splitter === T ? (clearTimeout(m.value.timeoutId), m.value.timeoutId = null, D(te, T), m.value.splitter = null) : (m.value.splitter = T, m.value.timeoutId = setTimeout(() => m.value.splitter = null, 500))), y.value.dragging || De("splitter-click", {
        event: te,
        index: T
      }, !0);
    }, D = (te, T) => {
      if (De("splitter-dblclick", {
        event: te,
        index: T
      }, !0), i.maximizePanes) {
        let R = 0;
        s.value = s.value.map((I, N) => (I.size = N === T ? I.max : I.min, N !== T && (R += I.min), I)), s.value[T].size -= R, De("pane-maximize", {
          event: te,
          index: T,
          pane: s.value[T]
        }), De("resized", {
          event: te,
          index: T
        }, !0);
      }
    }, fe = (te, T) => {
      if (!i.keyboardStep) return;
      let R = i.horizontal ? te.key === "ArrowDown" : te.key === "ArrowRight", I = i.horizontal ? te.key === "ArrowUp" : te.key === "ArrowLeft";
      if (!R && !I) return;
      te.preventDefault(), y.value.activeSplitter = T;
      let N = (R ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), O = B(T) + s.value[T].size;
      Z(Math.min(Math.max(O + N * i.keyboardStep, 0), 100)), De("resize", { event: te }, !0), De("resized", { event: te }, !0), y.value.activeSplitter = null;
    }, J = (te, T) => {
      let R = c.value[T];
      R && De("pane-click", {
        event: te,
        index: R.index,
        pane: R
      });
    }, x = (te) => {
      let T = _.value.getBoundingClientRect(), { clientX: R, clientY: I } = "ontouchstart" in window && te.touches ? te.touches[0] : te;
      return {
        x: R - (i.horizontal ? 0 : y.value.cursorOffset) - T.left,
        y: I - (i.horizontal ? y.value.cursorOffset : 0) - T.top
      };
    }, V = (te) => {
      te = te[i.horizontal ? "y" : "x"];
      let T = _.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (te = T - te), te * 100 / T;
    }, W = (te) => {
      Z(V(te));
    }, Z = (te) => {
      let T = y.value.activeSplitter;
      if (T === null || T >= s.value.length - 1) return;
      let R = {
        prevPanesSize: B(T),
        nextPanesSize: q(T),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, I = 0 + (i.pushOtherPanes ? 0 : R.prevPanesSize), N = 100 - (i.pushOtherPanes ? 0 : R.nextPanesSize);
      te = Math.max(Math.min(te, N), I);
      let O = [T, T + 1], Y = s.value[O[0]] || null, ae = s.value[O[1]] || null, ue = Y !== null && Y.max < 100 && te >= Y.max + R.prevPanesSize, ve = ae !== null && ae.max < 100 && te <= 100 - (ae.max + q(T + 1));
      if (ue || ve) {
        ue ? (Y.size = Y.max, ae.size = Math.min(Math.max(100 - Y.max - R.prevPanesSize - R.nextPanesSize, ae.min), ae.max)) : (Y.size = Math.min(Math.max(100 - ae.max - R.prevPanesSize - q(T + 1), Y.min), Y.max), ae.size = ae.max);
        return;
      }
      if (i.pushOtherPanes) {
        let ce = ie(R, te);
        if (!ce) return;
        ({ sums: R, panesToResize: O } = ce), Y = s.value[O[0]] || null, ae = s.value[O[1]] || null;
      }
      Y !== null && (Y.size = Math.min(Math.max(te - R.prevPanesSize - R.prevReachedMinPanes, Y.min), Y.max)), ae !== null && (ae.size = Math.min(Math.max(100 - te - R.nextPanesSize - R.nextReachedMinPanes, ae.min), ae.max));
    }, ie = (te, T) => {
      let R = y.value.activeSplitter, I = [R, R + 1];
      if (T < te.prevPanesSize + s.value[I[0]].min) {
        if (I[0] = M(R).index, te.prevReachedMinPanes = 0, I[0] < R && s.value.forEach((N, O) => {
          O > I[0] && O <= R && (N.size = N.min, te.prevReachedMinPanes += N.min);
        }), I[0] === void 0) return te.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((N, O) => {
          O > 0 && O <= R && (N.size = N.min, te.prevReachedMinPanes += N.min);
        }), s.value[I[1]].size = 100 - te.prevReachedMinPanes - s.value[0].min - te.prevPanesSize - te.nextPanesSize, null;
        te.prevPanesSize = B(I[0]);
      }
      return T > 100 - te.nextPanesSize - s.value[I[1]].min && (I[1] = G(R).index, te.nextReachedMinPanes = 0, I[1] > R + 1 && s.value.forEach((N, O) => {
        O > R && O < I[1] && (N.size = N.min, te.nextReachedMinPanes += N.min);
      }), te.nextPanesSize = I[1] === void 0 ? 0 : q(I[1] - 1), I[1] === void 0) ? (te.nextReachedMinPanes = 0, s.value.forEach((N, O) => {
        O >= R + 1 && (N.size = N.min, te.nextReachedMinPanes += N.min);
      }), I[0] !== void 0 && (s.value[I[0]].size = 100 - te.prevPanesSize - q(I[0] - 1)), null) : {
        sums: te,
        panesToResize: I
      };
    }, B = (te) => s.value.reduce((T, R, I) => T + (I < te ? R.size : 0), 0), q = (te) => s.value.reduce((T, R, I) => T + (I > te + 1 ? R.size : 0), 0), M = (te) => [...s.value].reverse().find((T) => T.index < te && T.size > T.min) || {}, G = (te) => s.value.find((T) => T.index > te + 1 && T.size > T.min) || {}, ee = () => {
      let te = Array.from(_.value?.children || []);
      for (let T of te) {
        let R = T.classList.contains("splitpanes__pane"), I = T.classList.contains("splitpanes__splitter");
        !R && !I && (T.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, ne = (te, T, R = !1) => {
      let I = te - 1, N = document.createElement("div");
      N.classList.add("splitpanes__splitter"), R || (N.onmousedown = (O) => $(O, I), typeof window < "u" && "ontouchstart" in window && (N.ontouchstart = (O) => $(O, I)), N.onclick = (O) => F(O, I + 1), i.keyboardStep && (N.setAttribute("tabindex", "0"), N.setAttribute("role", "separator"), N.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), N.onkeydown = (O) => fe(O, I))), N.ondblclick = (O) => D(O, I + 1), T.parentNode.insertBefore(N, T);
    }, X = (te) => {
      te.onmousedown = null, te.onclick = null, te.ondblclick = null, te.onkeydown = null, te.remove();
    }, le = () => {
      let te = Array.from(_.value?.children || []);
      for (let R of te) R.className.includes("splitpanes__splitter") && X(R);
      let T = 0;
      for (let R of te) R.className.includes("splitpanes__pane") && (!T && i.firstSplitter ? ne(T, R, !0) : T && ne(T, R), T++);
    }, _e = ({ uid: te, ...T }) => {
      let R = c.value[te];
      for (let [I, N] of Object.entries(T)) R[I] = N;
    }, Re = !1, $e = (te) => {
      let T = -1;
      Array.from(_.value?.children || []).some((R) => (R.className.includes("splitpanes__pane") && T++, R.isSameNode(te.el))), s.value.splice(T, 0, {
        ...te,
        index: T
      }), s.value.forEach((R, I) => R.index = I), v.value && !Re && (Re = !0, Pt(() => {
        le(), Ze({ addedPane: s.value[T] }), De("pane-add", { pane: s.value[T] }), Re = !1;
      }));
    }, Me = (te) => {
      let T = s.value.findIndex((I) => I.id === te);
      s.value[T].el = null;
      let R = s.value.splice(T, 1)[0];
      s.value.forEach((I, N) => I.index = N), Pt(() => {
        le(), De("pane-remove", { pane: R }), Ze({ removedPane: {
          ...R
        } });
      });
    }, Ze = (te = {}) => {
      !te.addedPane && !te.removedPane ? ye() : s.value.some((T) => T.givenSize !== null || T.min || T.max < 100) ? Ne(te) : ct(), v.value && De("resized");
    }, ct = () => {
      let te = 100 / d.value, T = 100, R = [], I = [];
      for (let N of s.value) N.size = Math.max(Math.min(te, N.max), N.min), T -= N.size, N.size >= N.max && R.push(N.id), N.size <= N.min && I.push(N.id);
      Math.abs(T) > 0.1 && ge(T, R, I);
    }, ye = () => {
      let te = 100, T = [], R = [], I = 0;
      for (let O of s.value) te -= O.size, O.givenSize !== null && I++, O.size >= O.max && T.push(O.id), O.size <= O.min && R.push(O.id);
      let N = 100;
      if (te > 0.1) {
        for (let O of s.value) O.givenSize === null && (O.size = Math.max(Math.min(te / (d.value - I), O.max), O.min)), N -= O.size;
        N > 0.1 && ge(N, T, R);
      }
    }, Ne = ({ addedPane: te, removedPane: T } = {}) => {
      let R = s.value.reduce((ue, ve) => ue + (ve.givenSize === null ? 0 : ve.givenSize), 0), I = s.value.filter((ue) => ue.givenSize === null).length, N = I > 0 ? (100 - R) / I : 0, O = 0, Y = [], ae = [];
      for (let ue of s.value) O -= ue.size, ue.size >= ue.max && Y.push(ue.id), ue.size <= ue.min && ae.push(ue.id);
      if (!(Math.abs(O) < 0.1)) {
        O = 100;
        for (let ue of s.value) ue.givenSize === null && (ue.size = Math.max(Math.min(N, ue.max), ue.min)), O -= ue.size, ue.size >= ue.max && Y.push(ue.id), ue.size <= ue.min && ae.push(ue.id);
        Math.abs(O) > 0.1 && ge(O, Y, ae);
      }
    }, ge = (te, T, R) => {
      let I;
      I = te > 0 ? te / (d.value - T.length) : te / (d.value - R.length), s.value.forEach((N, O) => {
        if (te > 0 && !T.includes(N.id)) {
          let Y = Math.max(Math.min(N.size + I, N.max), N.min), ae = Y - N.size;
          te -= ae, N.size = Y;
        } else if (!R.includes(N.id)) {
          let Y = Math.max(Math.min(N.size + I, N.max), N.min), ae = Y - N.size;
          te -= ae, N.size = Y;
        }
      }), Math.abs(te) > 0.1 && v.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, De = (te, T = void 0, R = !1) => {
      let I = T?.index ?? y.value.activeSplitter ?? null;
      a(te, {
        ...T,
        ...I !== null && { index: I },
        ...R && I !== null && {
          prevPane: s.value[I - +!!i.firstSplitter],
          nextPane: s.value[I + +!i.firstSplitter]
        },
        panes: s.value.map((N) => ({
          min: N.min,
          max: N.max,
          size: N.size
        }))
      });
    };
    Ge(() => i.firstSplitter, () => le()), Ge(() => i.horizontal, (te) => Pt(() => {
      a("direction-changed", {
        horizontal: te,
        panes: s.value.map((T) => ({
          min: T.min,
          max: T.max,
          size: T.size
        }))
      });
    })), Ct(() => {
      ee(), le(), Ze(), De("ready"), v.value = !0;
    }), Ca(() => v.value = !1);
    let nt = () => {
      let { class: te, ...T } = n;
      return da("div", {
        ref: _,
        class: [k.value, te],
        ...T
      }, r.default?.());
    };
    return Ra("panes", s), Ra("indexedPanes", c), Ra("horizontal", H(() => i.horizontal)), Ra("requestUpdate", _e), Ra("onPaneAdd", $e), Ra("onPaneRemove", Me), Ra("onPaneClick", J), (te, T) => (f(), Pe(xd(nt)));
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
    let t = e, a = Jt("requestUpdate"), i = Jt("onPaneAdd"), n = Jt("horizontal"), r = Jt("onPaneRemove"), s = Jt("onPaneClick"), c = Tn()?.uid, d = Jt("indexedPanes"), _ = H(() => d.value[c]), v = /* @__PURE__ */ j(null), y = H(() => {
      let C = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(C, k.value), m.value);
    }), m = H(() => {
      let C = parseFloat(t.minSize);
      return isNaN(C) ? 0 : C;
    }), k = H(() => {
      let C = parseFloat(t.maxSize);
      return isNaN(C) ? 100 : C;
    }), S = H(() => {
      let C = _.value?.size ?? (t.size === void 0 ? void 0 : y.value);
      return C === void 0 ? "" : `${n.value ? "height" : "width"}: ${C}%`;
    });
    return Ge(() => y.value, (C) => a({
      uid: c,
      size: C
    })), Ge(() => m.value, (C) => a({
      uid: c,
      min: C
    })), Ge(() => k.value, (C) => a({
      uid: c,
      max: C
    })), Ct(() => {
      i({
        id: c,
        el: v.value,
        min: m.value,
        max: k.value,
        givenSize: t.size === void 0 ? null : y.value,
        size: y.value
      });
    }), Ca(() => r(c)), (C, $) => (f(), p("div", {
      ref_key: "paneEl",
      ref: v,
      class: "splitpanes__pane",
      onClick: $[0] ||= (L) => u(s)(L, C._.uid),
      style: ha(S.value)
    }, [He(C.$slots, "default")], 4));
  }
}, d0 = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", f0 = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", h0 = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", p0 = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Fd = 1024, yb = Fd / 2, go = (e) => document.documentElement.clientWidth < e, _b = /* @__PURE__ */ j(go(Fd)), wb = /* @__PURE__ */ j(go(yb));
window.addEventListener("resize", () => {
  _b.value = go(Fd), wb.value = go(yb);
}, { passive: !0 });
function us() {
  return /* @__PURE__ */ zl(_b);
}
function v0() {
  return /* @__PURE__ */ zl(wb);
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
    const a = Object.values(t.translations[""] ?? {}).map(({ msgid: i, msgid_plural: n, msgstr: r }) => n !== void 0 ? [`_${i}_::_${n}_`, r] : [i, r[0]]);
    this.bundle.translations = {
      ...this.bundle.translations,
      ...Object.fromEntries(a)
    };
  }
  /**
   * Get translated string (singular form), optionally with placeholders
   *
   * @param original original string to translate
   * @param placeholders map of placeholder key to value
   */
  gettext(t, a = {}) {
    return g("", t, a, void 0, { bundle: this.bundle });
  }
  /**
   * Get translated string with plural forms
   *
   * @param singular Singular text form
   * @param plural Plural text form to be used if `count` requires it
   * @param count The number to insert into the text
   * @param placeholders optional map of placeholder key to value
   */
  ngettext(t, a, i, n = {}) {
    return At("", t, a, i, n, { bundle: this.bundle });
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
  addTranslation(t, a) {
    return this.translations[t] = a, this;
  }
  enableDebugMode() {
    return this.debug = !0, this;
  }
  build() {
    this.debug && console.debug(`Creating gettext instance for language ${this.language}`);
    const t = new b0((a) => j_(a, this.language));
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
      for (const { l: a, t: i } of t) {
        if (a !== os() || !i)
          continue;
        const n = Object.fromEntries(Object.entries(i).map(([r, s]) => [
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
  const a = e.__vccOpts || e;
  for (const [i, n] of t)
    a[i] = n;
  return a;
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
    const a = e, i = t, { formBoxItemClass: n } = R0(), r = Jt($0, null) !== null, s = H(() => r && a.to ? "RouterLink" : a.href ? "a" : "button"), c = H(() => s.value === "button" && typeof a.pressed == "boolean"), d = H(() => a.pressed ? "primary" : a.pressed === !1 && a.variant === "primary" ? "secondary" : a.variant), _ = H(() => d.value.startsWith("tertiary")), v = H(() => a.alignment.split("-")[0]), y = H(() => a.alignment.includes("-")), m = Jt("NcPopover:trigger:attrs", () => ({}), !1), k = H(() => m()), S = H(() => {
      if (s.value === "RouterLink")
        return {
          to: a.to,
          activeClass: "active"
        };
      if (s.value === "a")
        return {
          href: a.href || "#",
          target: a.target,
          rel: "nofollow noreferrer noopener",
          download: a.download || void 0
        };
      if (s.value === "button")
        return {
          ...k.value,
          "aria-pressed": a.pressed,
          type: a.type,
          disabled: a.disabled
        };
    });
    function C($) {
      c.value && i("update:pressed", !a.pressed), i("click", $);
    }
    return ($, L) => (f(), Pe(xd(s.value), aa({
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
    }, S.value, { onClick: C }), {
      default: ke(() => [
        l("span", I0, [
          l("span", L0, [
            He($.$slots, "icon", {}, void 0, !0)
          ]),
          l("span", P0, [
            He($.$slots, "default", {}, () => [
              Q(o(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), ci = /* @__PURE__ */ ut(D0, [["__scopeId", "data-v-47ce59a3"]]), F0 = ["aria-hidden", "aria-label"], M0 = {
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
      fb515064: a.value
    }));
    const t = e, a = H(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = H(() => {
      if (!t.svg || t.path)
        return;
      const n = ub.sanitize(t.svg), r = new DOMParser().parseFromString(n, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (n, r) => (f(), p("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Te(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (f(), p("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, z0)) : (f(), p("svg", M0, [
        l("path", { d: e.path }, null, 8, U0)
      ]))
    ], 10, F0));
  }
}), mu = /* @__PURE__ */ ut(j0, [["__scopeId", "data-v-aaedb1c3"]]);
H0();
function B0(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), Mi("csrf-token-update", { token: e, _internal: !0 }));
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
var Ot = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(Ot || {});
class q0 {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, a, i) {
    let n = "[" + Ot[a].toUpperCase() + "] ";
    return i && i.app && (n += i.app + ": "), typeof t == "string" ? n + t : (n += `Unexpected ${t.name}`, t.message && (n += ` "${t.message}"`), a === Ot.Debug && t.stack && (n += `

Stack trace:
${t.stack}`), n);
  }
  log(t, a, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof a == "object" && i?.error === void 0 && (i.error = a), t) {
        case Ot.Debug:
          console.debug(this.formatMessage(a, Ot.Debug, i), i);
          break;
        case Ot.Info:
          console.info(this.formatMessage(a, Ot.Info, i), i);
          break;
        case Ot.Warn:
          console.warn(this.formatMessage(a, Ot.Warn, i), i);
          break;
        case Ot.Error:
          console.error(this.formatMessage(a, Ot.Error, i), i);
          break;
        case Ot.Fatal:
        default:
          console.error(this.formatMessage(a, Ot.Fatal, i), i);
          break;
      }
  }
  debug(t, a) {
    this.log(Ot.Debug, t, Object.assign({}, this.context, a));
  }
  info(t, a) {
    this.log(Ot.Info, t, Object.assign({}, this.context, a));
  }
  warn(t, a) {
    this.log(Ot.Warn, t, Object.assign({}, this.context, a));
  }
  error(t, a) {
    this.log(Ot.Error, t, Object.assign({}, this.context, a));
  }
  fatal(t, a) {
    this.log(Ot.Fatal, t, Object.assign({}, this.context, a));
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
    const t = this, a = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? Ot.Warn, window._oc_debug && (t.context.level = Ot.Debug), document.removeEventListener("readystatechange", a)) : document.addEventListener("readystatechange", a);
    };
    return a(), this;
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
  let t = !1, a;
  return (...i) => (t || (t = !0, a = e(...i)), a);
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
  X0 = "0.3.0-alpha.7";
} catch {
  lr.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Tb() {
  return Jt("appName", Z0);
}
const J0 = Y0(() => {
  const e = po("core", "apps", []), t = Tb();
  return e.find(({ id: a }) => a === t)?.name ?? t;
}), Yc = z_();
An(T0);
const Q0 = /* @__PURE__ */ qt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = us();
    Ge(t, a), Ct(() => {
      a(t.value);
    }), Ca(() => {
      t.value && a(!1);
    });
    function a(i = !0) {
      const n = document.querySelector(".app-navigation .app-navigation-toggle");
      n && (n.style.display = i ? "none" : "", i === !0 && Mi("toggle-navigation", { open: !1 }));
    }
    return (i, n) => (f(), Pe(u(ci), {
      "aria-label": u(Ft)("Go back to the list"),
      class: Te(["app-details-toggle", { "app-details-toggle--mobile": u(t) }]),
      title: u(Ft)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: ke(() => [
        de(u(mu), {
          directional: "",
          path: u(d0)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), ew = /* @__PURE__ */ ut(Q0, [["__scopeId", "data-v-a28923a1"]]), ap = fb("nextcloud").persist().build(), tw = V_().theming?.name ?? "Nextcloud", aw = {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? Mi("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && Mi("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      ap.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), lr.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(ap.getItem(this.paneConfigID), 10);
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
}, iw = {
  key: 0,
  class: "hidden-visually"
}, nw = { class: "app-content-wrapper__list" }, rw = {
  key: 1,
  class: "app-content-wrapper"
};
function lw(e, t, a, i, n, r) {
  const s = Xe("NcAppContentDetailsToggle"), c = Xe("Pane"), d = Xe("Splitpanes");
  return f(), p("main", {
    id: "app-content-vue",
    class: Te(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    a.pageHeading ? (f(), p("h1", iw, o(a.pageHeading), 1)) : A("", !0),
    e.$slots.list ? (f(), p(K, { key: 1 }, [
      i.isMobile || a.layout === "no-split" ? (f(), p("div", {
        key: 0,
        class: Te(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": a.showDetails,
          "app-content-wrapper--show-list": !a.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        a.showDetails ? (f(), Pe(s, {
          key: 0,
          onClick: Se(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : A("", !0),
        be(l("div", nw, [
          He(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [rr, !a.showDetails]
        ]),
        a.showDetails ? He(e.$slots, "default", { key: 1 }, void 0, !0) : A("", !0)
      ], 2)) : a.layout === "vertical-split" || a.layout === "horizontal-split" ? (f(), p("div", rw, [
        de(d, {
          horizontal: a.layout === "horizontal-split",
          class: Te(["default-theme", {
            "splitpanes--horizontal": a.layout === "horizontal-split",
            "splitpanes--vertical": a.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
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
      ])) : A("", !0)
    ], 64)) : A("", !0),
    e.$slots.list ? A("", !0) : He(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const sw = /* @__PURE__ */ ut(aw, [["render", lw], ["__scopeId", "data-v-51427d61"]]);
var Ab = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], mo = /* @__PURE__ */ Ab.join(","), Eb = typeof Element > "u", sr = Eb ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, yo = !Eb && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, _o = function(t, a) {
  var i;
  a === void 0 && (a = !0);
  var n = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = n === "" || n === "true", s = r || a && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : _o(t.parentNode));
  return s;
}, ow = function(t) {
  var a, i = t == null || (a = t.getAttribute) === null || a === void 0 ? void 0 : a.call(t, "contenteditable");
  return i === "" || i === "true";
}, $b = function(t, a, i) {
  if (_o(t))
    return [];
  var n = Array.prototype.slice.apply(t.querySelectorAll(mo));
  return a && sr.call(t, mo) && n.unshift(t), n = n.filter(i), n;
}, wo = function(t, a, i) {
  for (var n = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!_o(s, !1))
      if (s.tagName === "SLOT") {
        var c = s.assignedElements(), d = c.length ? c : s.children, _ = wo(d, !0, i);
        i.flatten ? n.push.apply(n, _) : n.push({
          scopeParent: s,
          candidates: _
        });
      } else {
        var v = sr.call(s, mo);
        v && i.filter(s) && (a || !t.includes(s)) && n.push(s);
        var y = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), m = !_o(y, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (y && m) {
          var k = wo(y === !0 ? s.children : y.children, !0, i);
          i.flatten ? n.push.apply(n, k) : n.push({
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
}, uw = function(t, a) {
  var i = er(t);
  return i < 0 && a && !xb(t) ? 0 : i;
}, cw = function(t, a) {
  return t.tabIndex === a.tabIndex ? t.documentOrder - a.documentOrder : t.tabIndex - a.tabIndex;
}, Ob = function(t) {
  return t.tagName === "INPUT";
}, dw = function(t) {
  return Ob(t) && t.type === "hidden";
}, fw = function(t) {
  var a = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return a;
}, hw = function(t, a) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === a)
      return t[i];
}, pw = function(t) {
  if (!t.name)
    return !0;
  var a = t.form || yo(t), i = function(c) {
    return a.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, n;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    n = i(window.CSS.escape(t.name));
  else
    try {
      n = i(t.name);
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
  var a, i = t && yo(t), n = (a = i) === null || a === void 0 ? void 0 : a.host, r = !1;
  if (i && i !== t) {
    var s, c, d;
    for (r = !!((s = n) !== null && s !== void 0 && (c = s.ownerDocument) !== null && c !== void 0 && c.contains(n) || t != null && (d = t.ownerDocument) !== null && d !== void 0 && d.contains(t)); !r && n; ) {
      var _, v, y;
      i = yo(n), n = (_ = i) === null || _ === void 0 ? void 0 : _.host, r = !!((v = n) !== null && v !== void 0 && (y = v.ownerDocument) !== null && y !== void 0 && y.contains(n));
    }
  }
  return r;
}, ip = function(t) {
  var a = t.getBoundingClientRect(), i = a.width, n = a.height;
  return i === 0 && n === 0;
}, mw = function(t, a) {
  var i = a.displayCheck, n = a.getShadowRoot;
  if (i === "full-native" && "checkVisibility" in t) {
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
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof n == "function") {
      for (var v = t; t; ) {
        var y = t.parentElement, m = yo(t);
        if (y && !y.shadowRoot && n(y) === !0)
          return ip(t);
        t.assignedSlot ? t = t.assignedSlot : !y && m !== t.ownerDocument ? t = m.host : t = y;
      }
      t = v;
    }
    if (gw(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return ip(t);
  return !1;
}, yw = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var a = t.parentElement; a; ) {
      if (a.tagName === "FIELDSET" && a.disabled) {
        for (var i = 0; i < a.children.length; i++) {
          var n = a.children.item(i);
          if (n.tagName === "LEGEND")
            return sr.call(a, "fieldset[disabled] *") ? !0 : !n.contains(t);
        }
        return !0;
      }
      a = a.parentElement;
    }
  return !1;
}, ko = function(t, a) {
  return !(a.disabled || dw(a) || mw(a, t) || // For a details element with a summary, the summary element gets the focus
  fw(a) || yw(a));
}, Zc = function(t, a) {
  return !(bw(a) || er(a) < 0 || !ko(t, a));
}, _w = function(t) {
  var a = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(a) || a >= 0);
}, Nb = function(t) {
  var a = [], i = [];
  return t.forEach(function(n, r) {
    var s = !!n.scopeParent, c = s ? n.scopeParent : n, d = uw(c, s), _ = s ? Nb(n.candidates) : c;
    d === 0 ? s ? a.push.apply(a, _) : a.push(c) : i.push({
      documentOrder: r,
      tabIndex: d,
      item: n,
      isScope: s,
      content: _
    });
  }), i.sort(cw).reduce(function(n, r) {
    return r.isScope ? n.push.apply(n, r.content) : n.push(r.content), n;
  }, []).concat(a);
}, ww = function(t, a) {
  a = a || {};
  var i;
  return a.getShadowRoot ? i = wo([t], a.includeContainer, {
    filter: Zc.bind(null, a),
    flatten: !1,
    getShadowRoot: a.getShadowRoot,
    shadowRootFilter: _w
  }) : i = $b(t, a.includeContainer, Zc.bind(null, a)), Nb(i);
}, kw = function(t, a) {
  a = a || {};
  var i;
  return a.getShadowRoot ? i = wo([t], a.includeContainer, {
    filter: ko.bind(null, a),
    flatten: !0,
    getShadowRoot: a.getShadowRoot
  }) : i = $b(t, a.includeContainer, ko.bind(null, a)), i;
}, kr = function(t, a) {
  if (a = a || {}, !t)
    throw new Error("No node provided");
  return sr.call(t, mo) === !1 ? !1 : Zc(a, t);
}, Sw = /* @__PURE__ */ Ab.concat("iframe:not([inert]):not([inert] *)").join(","), Sc = function(t, a) {
  if (a = a || {}, !t)
    throw new Error("No node provided");
  return sr.call(t, Sw) === !1 ? !1 : ko(a, t);
};
function Xc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, i = Array(t); a < t; a++) i[a] = e[a];
  return i;
}
function Cw(e) {
  if (Array.isArray(e)) return Xc(e);
}
function np(e, t) {
  var a = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = Rb(e)) || t) {
      a && (e = a);
      var i = 0, n = function() {
      };
      return {
        s: n,
        n: function() {
          return i >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[i++]
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
      a = a.call(e);
    },
    n: function() {
      var d = a.next();
      return s = d.done, d;
    },
    e: function(d) {
      c = !0, r = d;
    },
    f: function() {
      try {
        s || a.return == null || a.return();
      } finally {
        if (c) throw r;
      }
    }
  };
}
function Tw(e, t, a) {
  return (t = Ow(t)) in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function Aw(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ew() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rp(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), a.push.apply(a, i);
  }
  return a;
}
function lp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rp(Object(a), !0).forEach(function(i) {
      Tw(e, i, a[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : rp(Object(a)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(a, i));
    });
  }
  return e;
}
function $w(e) {
  return Cw(e) || Aw(e) || Rb(e) || Ew();
}
function xw(e, t) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var i = a.call(e, t);
    if (typeof i != "object") return i;
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
    var a = {}.toString.call(e).slice(8, -1);
    return a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set" ? Array.from(e) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Xc(e, t) : void 0;
  }
}
var Li = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, a) {
    var i = Li.getActiveTrap(t);
    a !== i && Li.pauseTrap(t);
    var n = t.indexOf(a);
    n === -1 || t.splice(n, 1), t.push(a);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, a) {
    var i = t.indexOf(a);
    i !== -1 && t.splice(i, 1), Li.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var a = Li.getActiveTrap(t);
    a?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var a = Li.getActiveTrap(t);
    a && !a._isManuallyPaused() && a._setPausedState(!1);
  }
}, Nw = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Rw = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, El = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, Iw = function(t) {
  return El(t) && !t.shiftKey;
}, Lw = function(t) {
  return El(t) && t.shiftKey;
}, sp = function(t) {
  return setTimeout(t, 0);
}, pl = function(t) {
  for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++)
    i[n - 1] = arguments[n];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, Hs = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Pw = [], Md = function(t, a) {
  var i = a?.document || document, n = a?.trapStack || Pw, r = lp({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: Iw,
    isKeyBackward: Lw
  }, a), s = {
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
  }, c, d = function(M, G, ee) {
    return M && M[G] !== void 0 ? M[G] : r[ee || G];
  }, _ = function(M, G) {
    var ee = typeof G?.composedPath == "function" ? G.composedPath() : void 0;
    return s.containerGroups.findIndex(function(ne) {
      var X = ne.container, le = ne.tabbableNodes;
      return X.contains(M) || ee?.includes(X) || le.find(function(_e) {
        return _e === M;
      });
    });
  }, v = function(M) {
    var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ee = G.hasFallback, ne = ee === void 0 ? !1 : ee, X = G.params, le = X === void 0 ? [] : X, _e = r[M];
    if (typeof _e == "function" && (_e = _e.apply(void 0, $w(le))), _e === !0 && (_e = void 0), !_e) {
      if (_e === void 0 || _e === !1)
        return _e;
      throw new Error("`".concat(M, "` was specified but was not a node, or did not return a node"));
    }
    var Re = _e;
    if (typeof _e == "string") {
      try {
        Re = i.querySelector(_e);
      } catch ($e) {
        throw new Error("`".concat(M, '` appears to be an invalid selector; error="').concat($e.message, '"'));
      }
      if (!Re && !ne)
        throw new Error("`".concat(M, "` as selector refers to no known node"));
    }
    return Re;
  }, y = function(M) {
    var G = M.activeElement;
    return G ? G.shadowRoot && G.shadowRoot.activeElement !== null ? y(G.shadowRoot) : G : null;
  }, m = function() {
    var M = v("initialFocus", {
      hasFallback: !0
    });
    if (M === !1)
      return !1;
    if (M === void 0 || M && !Sc(M, r.tabbableOptions)) {
      var G = y(i);
      if (_(G) >= 0)
        M = G;
      else {
        var ee = s.tabbableGroups[0], ne = ee && ee.firstTabbableNode;
        M = ne || v("fallbackFocus");
      }
    } else M === null && (M = v("fallbackFocus"));
    if (!M)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return M;
  }, k = function() {
    if (s.containerGroups = s.containers.map(function(M) {
      var G = ww(M, r.tabbableOptions), ee = kw(M, r.tabbableOptions), ne = G.length > 0 ? G[0] : void 0, X = G.length > 0 ? G[G.length - 1] : void 0, le = ee.find(function($e) {
        return kr($e);
      }), _e = ee.slice().reverse().find(function($e) {
        return kr($e);
      }), Re = !!G.find(function($e) {
        return er($e) > 0;
      });
      return {
        container: M,
        tabbableNodes: G,
        focusableNodes: ee,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Re,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ne,
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
        firstDomTabbableNode: le,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: _e,
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
          return ct < 0 ? Ze ? ee.slice(ee.indexOf(Me) + 1).find(function(ye) {
            return kr(ye);
          }) : ee.slice(0, ee.indexOf(Me)).reverse().find(function(ye) {
            return kr(ye);
          }) : G[ct + (Ze ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(M) {
      return M.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !v("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(M) {
      return M.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, S = function(M) {
    if (M !== !1 && M !== y(document)) {
      if (!M || !M.focus) {
        S(m());
        return;
      }
      M.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = M, Nw(M) && M.select();
    }
  }, C = function(M) {
    var G = v("setReturnFocus", {
      params: [M]
    });
    return G || (G === !1 ? !1 : M);
  }, $ = function(M) {
    var G = M.target, ee = M.event, ne = M.isBackward, X = ne === void 0 ? !1 : ne;
    G = G || Hs(ee), k();
    var le = null;
    if (s.tabbableGroups.length > 0) {
      var _e = _(G, ee), Re = _e >= 0 ? s.containerGroups[_e] : void 0;
      if (_e < 0)
        X ? le = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : le = s.tabbableGroups[0].firstTabbableNode;
      else if (X) {
        var $e = s.tabbableGroups.findIndex(function(ge) {
          var De = ge.firstTabbableNode;
          return G === De;
        });
        if ($e < 0 && (Re.container === G || Sc(G, r.tabbableOptions) && !kr(G, r.tabbableOptions) && !Re.nextTabbableNode(G, !1)) && ($e = _e), $e >= 0) {
          var Me = $e === 0 ? s.tabbableGroups.length - 1 : $e - 1, Ze = s.tabbableGroups[Me];
          le = er(G) >= 0 ? Ze.lastTabbableNode : Ze.lastDomTabbableNode;
        } else El(ee) || (le = Re.nextTabbableNode(G, !1));
      } else {
        var ct = s.tabbableGroups.findIndex(function(ge) {
          var De = ge.lastTabbableNode;
          return G === De;
        });
        if (ct < 0 && (Re.container === G || Sc(G, r.tabbableOptions) && !kr(G, r.tabbableOptions) && !Re.nextTabbableNode(G)) && (ct = _e), ct >= 0) {
          var ye = ct === s.tabbableGroups.length - 1 ? 0 : ct + 1, Ne = s.tabbableGroups[ye];
          le = er(G) >= 0 ? Ne.firstTabbableNode : Ne.firstDomTabbableNode;
        } else El(ee) || (le = Re.nextTabbableNode(G));
      }
    } else
      le = v("fallbackFocus");
    return le;
  }, L = function(M) {
    var G = Hs(M);
    if (!(_(G, M) >= 0)) {
      if (pl(r.clickOutsideDeactivates, M)) {
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
      pl(r.allowOutsideClick, M) || M.preventDefault();
    }
  }, P = function(M) {
    var G = Hs(M), ee = _(G, M) >= 0;
    if (ee || G instanceof Document)
      ee && (s.mostRecentlyFocusedNode = G);
    else {
      M.stopImmediatePropagation();
      var ne, X = !0;
      if (s.mostRecentlyFocusedNode)
        if (er(s.mostRecentlyFocusedNode) > 0) {
          var le = _(s.mostRecentlyFocusedNode), _e = s.containerGroups[le].tabbableNodes;
          if (_e.length > 0) {
            var Re = _e.findIndex(function($e) {
              return $e === s.mostRecentlyFocusedNode;
            });
            Re >= 0 && (r.isKeyForward(s.recentNavEvent) ? Re + 1 < _e.length && (ne = _e[Re + 1], X = !1) : Re - 1 >= 0 && (ne = _e[Re - 1], X = !1));
          }
        } else
          s.containerGroups.some(function($e) {
            return $e.tabbableNodes.some(function(Me) {
              return er(Me) > 0;
            });
          }) || (X = !1);
      else
        X = !1;
      X && (ne = $({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), S(ne || s.mostRecentlyFocusedNode || m());
    }
    s.recentNavEvent = void 0;
  }, F = function(M) {
    var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = M;
    var ee = $({
      event: M,
      isBackward: G
    });
    ee && (El(M) && M.preventDefault(), S(ee));
  }, D = function(M) {
    (r.isKeyForward(M) || r.isKeyBackward(M)) && F(M, r.isKeyBackward(M));
  }, fe = function(M) {
    Rw(M) && pl(r.escapeDeactivates, M) !== !1 && (M.preventDefault(), c.deactivate());
  }, J = function(M) {
    var G = Hs(M);
    _(G, M) >= 0 || pl(r.clickOutsideDeactivates, M) || pl(r.allowOutsideClick, M) || (M.preventDefault(), M.stopImmediatePropagation());
  }, x = function() {
    if (s.active) {
      Li.activateTrap(n, c);
      var M;
      return r.delayInitialFocus ? M = new Promise(function(G) {
        s.delayInitialFocusTimer = sp(function() {
          S(m()), G();
        });
      }) : S(m()), i.addEventListener("focusin", P, !0), i.addEventListener("mousedown", L, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", L, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", J, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", D, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", fe), M;
    }
  }, V = function(M) {
    s.active && !s.paused && c._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var G = /* @__PURE__ */ new Set(), ee = /* @__PURE__ */ new Set(), ne = np(M), X;
    try {
      for (ne.s(); !(X = ne.n()).done; ) {
        var le = X.value;
        G.add(le);
        for (var _e = typeof ShadowRoot < "u" && le.getRootNode() instanceof ShadowRoot, Re = le; Re; ) {
          G.add(Re);
          var $e = Re.parentElement, Me = [];
          $e ? Me = $e.children : !$e && _e && (Me = Re.getRootNode().children, $e = Re.getRootNode().host, _e = typeof ShadowRoot < "u" && $e.getRootNode() instanceof ShadowRoot);
          var Ze = np(Me), ct;
          try {
            for (Ze.s(); !(ct = Ze.n()).done; ) {
              var ye = ct.value;
              ee.add(ye);
            }
          } catch (Ne) {
            Ze.e(Ne);
          } finally {
            Ze.f();
          }
          Re = $e;
        }
      }
    } catch (Ne) {
      ne.e(Ne);
    } finally {
      ne.f();
    }
    G.forEach(function(Ne) {
      ee.delete(Ne);
    }), s.adjacentElements = ee;
  }, W = function() {
    if (s.active)
      return i.removeEventListener("focusin", P, !0), i.removeEventListener("mousedown", L, !0), i.removeEventListener("touchstart", L, !0), i.removeEventListener("click", J, !0), i.removeEventListener("keydown", D, !0), i.removeEventListener("keydown", fe), c;
  }, Z = function(M) {
    var G = s.mostRecentlyFocusedNode;
    if (G) {
      var ee = M.some(function(X) {
        var le = Array.from(X.removedNodes);
        return le.some(function(_e) {
          return _e === G || typeof _e.contains == "function" && _e.contains(G);
        });
      });
      if (ee && s.containers.some(function(X) {
        return X?.isConnected;
      })) {
        k();
        var ne = m();
        S(ne);
      }
    }
  }, ie = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(Z) : void 0, B = function() {
    ie && (ie.disconnect(), s.active && !s.paused && s.containers.map(function(M) {
      ie.observe(M, {
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
    activate: function(M) {
      if (s.active)
        return this;
      var G = d(M, "onActivate"), ee = d(M, "onPostActivate"), ne = d(M, "checkCanFocusTrap"), X = Li.getActiveTrap(n), le = !1;
      if (X && !X.paused) {
        var _e;
        (_e = X._setSubtreeIsolation) === null || _e === void 0 || _e.call(X, !1), le = !0;
      }
      try {
        ne || k(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = y(i), G?.({
          trap: c
        });
        var Re = function() {
          ne && k();
          var Ze = function() {
            c._setSubtreeIsolation(!0), B(), ee?.({
              trap: c
            });
          }, ct = x();
          ct ? ct.then(Ze) : Ze();
        };
        if (ne)
          return ne(s.containers.concat()).then(Re, Re), this;
        Re();
      } catch (Me) {
        if (X === Li.getActiveTrap(n) && le) {
          var $e;
          ($e = X._setSubtreeIsolation) === null || $e === void 0 || $e.call(X, !0);
        }
        throw Me;
      }
      return this;
    },
    deactivate: function(M) {
      if (!s.active)
        return this;
      var G = lp({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, M);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || c._setSubtreeIsolation(!1), s.alreadySilent.clear(), W(), s.active = !1, s.paused = !1, B(), Li.deactivateTrap(n, c);
      var ee = d(G, "onDeactivate"), ne = d(G, "onPostDeactivate"), X = d(G, "checkCanReturnFocus"), le = d(G, "delayReturnFocus"), _e = d(G, "returnFocus", "returnFocusOnDeactivate");
      ee?.({
        trap: c
      });
      var Re = function() {
        _e && S(C(s.nodeFocusedBeforeActivation)), ne?.({
          trap: c
        });
      }, $e = function() {
        le && _e ? sp(Re) : Re();
      };
      return _e && X ? (X(C(s.nodeFocusedBeforeActivation)).then($e, $e), this) : ($e(), this);
    },
    pause: function(M) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, M)) : this;
    },
    unpause: function(M) {
      return s.active ? (s.manuallyPaused = !1, n[n.length - 1] !== this ? this : this._setPausedState(!1, M)) : this;
    },
    updateContainerElements: function(M) {
      var G = [].concat(M).filter(Boolean);
      return s.containers = G.map(function(ee) {
        return typeof ee == "string" ? i.querySelector(ee) : ee;
      }), r.isolateSubtrees && V(s.containers), s.active && (k(), s.paused || c._setSubtreeIsolation(!0)), B(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(M, G) {
        if (s.paused === M)
          return this;
        if (s.paused = M, M) {
          var ee = d(G, "onPause"), ne = d(G, "onPostPause");
          ee?.({
            trap: c
          }), W(), c._setSubtreeIsolation(!1), B(), ne?.({
            trap: c
          });
        } else {
          var X = d(G, "onUnpause"), le = d(G, "onPostUnpause");
          X?.({
            trap: c
          });
          var _e = function() {
            k();
            var $e = function() {
              c._setSubtreeIsolation(!0), B(), le?.({
                trap: c
              });
            }, Me = x();
            Me ? Me.then($e) : $e();
          };
          _e();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(M) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(G) {
          var ee;
          M ? r.isolateSubtrees === "aria-hidden" ? ((G.ariaHidden === "true" || ((ee = G.getAttribute("aria-hidden")) === null || ee === void 0 ? void 0 : ee.toLowerCase()) === "true") && s.alreadySilent.add(G), G.setAttribute("aria-hidden", "true")) : ((G.inert || G.hasAttribute("inert")) && s.alreadySilent.add(G), G.setAttribute("inert", !0)) : s.alreadySilent.has(G) || (r.isolateSubtrees === "aria-hidden" ? G.removeAttribute("aria-hidden") : G.removeAttribute("inert"));
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
      const t = this.entry.getBoundingClientRect(), a = e.getBoundingClientRect();
      this.top = t.top - a.top + e.scrollTop, this.height = t.height;
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
function Fw(e, t, a, i, n, r) {
  return f(), p("ul", {
    ref: "list",
    class: Te(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    l("div", {
      class: Te(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: ha(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    He(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Lb = /* @__PURE__ */ ut(Dw, [["render", Fw], ["__scopeId", "data-v-3e73e246"]]);
function Zl() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function Mw() {
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
    const t = Rv(e, "open"), a = H(() => t.value ? Ft("Close navigation") : Ft("Open navigation"));
    return (i, n) => (f(), p("div", Uw, [
      de(u(ci), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": a.value,
        title: a.value,
        variant: "tertiary",
        onClick: n[0] || (n[0] = (r) => t.value = !t.value)
      }, {
        icon: ke(() => [
          de(mu, {
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
    let a;
    const i = Jt(
      Pb,
      () => w1(),
      !1
    ), n = Ey("appNavigationContainer"), r = us(), s = /* @__PURE__ */ j(!r.value), c = H(() => r.value && s.value);
    gy(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), Ge(r, () => {
      s.value = !r.value;
    }), Ge(c, () => {
      v();
    }), Ct(() => {
      i(!0), bb("toggle-navigation", _), Mi("navigation-toggled", {
        open: s.value
      }), a = Md(n.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (a.deactivate({ returnFocus: !1 }), d(!1)), !1),
        fallbackFocus: n.value,
        trapStack: Zl(),
        escapeDeactivates: !1
      }), v();
    }), Dr(() => {
      i(!1), a0("toggle-navigation", _), a.deactivate();
    });
    function d(m) {
      if (s.value === m) {
        Mi("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = m === void 0 ? !s.value : m;
      const k = getComputedStyle(document.body), S = parseInt(k.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        Mi("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * S);
    }
    function _({ open: m }) {
      return d(m);
    }
    function v() {
      c.value ? a.activate() : a.deactivate();
    }
    function y() {
      r.value && d(!1);
    }
    return (m, k) => (f(), p("div", {
      ref: "appNavigationContainer",
      class: Te(["app-navigation", {
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
          He(m.$slots, "search", {}, void 0, !0)
        ]),
        l("div", {
          class: Te(["app-navigation__body", { "app-navigation__body--no-list": !m.$slots.list }])
        }, [
          He(m.$slots, "default", {}, void 0, !0)
        ], 2),
        m.$slots.list ? (f(), Pe(Lb, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: ke(() => [
            He(m.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : A("", !0),
        He(m.$slots, "footer", {}, void 0, !0)
      ], 40, Bw),
      de(jw, {
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
function Xw(e, t, a, i, n, r) {
  return f(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (f(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", Yw, [
        a.title ? (f(), p("title", Zw, o(a.title), 1)) : A("", !0)
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
}, ek = ["aria-hidden", "aria-label"], tk = ["fill", "width", "height"], ak = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, ik = { key: 0 };
function nk(e, t, a, i, n, r) {
  return f(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (f(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", ak, [
        a.title ? (f(), p("title", ik, o(a.title), 1)) : A("", !0)
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
function dk(e, t, a, i, n, r) {
  return f(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (f(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", uk, [
        a.title ? (f(), p("title", ck, o(a.title), 1)) : A("", !0)
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
function gk(e, t, a, i, n, r) {
  return f(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (f(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", vk, [
        a.title ? (f(), p("title", bk, o(a.title), 1)) : A("", !0)
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
    NcButton: ci
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
function _k(e, t, a, i, n, r) {
  const s = Xe("IconArrowRight"), c = Xe("NcButton"), d = Xe("IconClose");
  return f(), p("div", {
    class: Te(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    l("form", {
      onSubmit: t[1] || (t[1] = Se((..._) => r.confirm && r.confirm(..._), ["prevent"])),
      onKeydown: t[2] || (t[2] = ft(Se((..._) => r.cancel && r.cancel(..._), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Se(() => {
      }, ["stop", "prevent"]))
    }, [
      be(l("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (_) => r.valueModel = _),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: a.placeholder
      }, null, 8, yk), [
        [Ue, r.valueModel]
      ]),
      de(c, {
        "aria-label": n.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Se(r.confirm, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          de(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      de(c, {
        "aria-label": n.labelCancel,
        type: "reset",
        variant: a.primary ? "primary" : "tertiary",
        onClick: Se(r.cancel, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          de(d, { size: 20 })
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
function Rk(e, t, a, i, n, r) {
  const s = Xe("NcIconSvgWrapper");
  return f(), p("li", {
    class: Te(["action", { "action--disabled": a.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("button", aa({
      "aria-label": e.ariaLabel,
      class: ["action-button button-vue", {
        "action-button--active": r.isChecked,
        focusable: r.isFocusable
      }],
      disabled: a.disabled,
      title: e.title,
      type: r.nativeType
    }, r.buttonAttributes, {
      onClick: t[0] || (t[0] = (...c) => r.handleClick && r.handleClick(...c))
    }), [
      He(e.$slots, "icon", {}, () => [
        l("span", {
          class: Te([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: ha({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", Ak, [
        e.name ? (f(), p("strong", Ek, o(e.name), 1)) : A("", !0),
        e.isLongText ? (f(), p("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: o(e.text)
        }, null, 8, $k)) : (f(), p("span", xk, o(e.text), 1)),
        a.description ? (f(), p("span", {
          key: 3,
          class: "action-button__description",
          textContent: o(a.description)
        }, null, 8, Ok)) : A("", !0)
      ]),
      a.isMenu ? (f(), Pe(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (f(), Pe(s, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (f(), p("span", Nk)) : A("", !0),
      A("", !0)
    ], 16, Tk)
  ], 10, Ck);
}
const Ik = /* @__PURE__ */ ut(Sk, [["render", Rk], ["__scopeId", "data-v-6c2daf4e"]]);
function Lk(e, t = {}) {
  const a = Mw();
  Ge(e, () => {
    Di(t.disabled) || (Di(e) ? a.pause() : a.unpause());
  }), Dr(() => {
    a.unpause();
  });
}
const Pk = ["top", "right", "bottom", "left"], op = ["start", "end"], up = /* @__PURE__ */ Pk.reduce((e, t) => e.concat(t, t + "-" + op[0], t + "-" + op[1]), []), Xl = Math.min, Jc = Math.max, Dk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jb(e, t, a) {
  return Jc(e, Xl(t, a));
}
function or(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vi(e) {
  return e.split("-")[0];
}
function qa(e) {
  return e.split("-")[1];
}
function Bb(e) {
  return e === "x" ? "y" : "x";
}
function zd(e) {
  return e === "y" ? "height" : "width";
}
function Pi(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function jd(e) {
  return Bb(Pi(e));
}
function Hb(e, t, a) {
  a === void 0 && (a = !1);
  const i = qa(e), n = jd(e), r = zd(n);
  let s = n === "x" ? i === (a ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
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
function zk(e, t, a) {
  switch (e) {
    case "top":
    case "bottom":
      return a ? t ? dp : cp : t ? cp : dp;
    case "left":
    case "right":
      return t ? Mk : Uk;
    default:
      return [];
  }
}
function jk(e, t, a, i) {
  const n = qa(e);
  let r = zk(Vi(e), a === "start", i);
  return n && (r = r.map((s) => s + "-" + n), t && (r = r.concat(r.map(So)))), r;
}
function Co(e) {
  const t = Vi(e);
  return Dk[t] + e.slice(t.length);
}
function Bk(e) {
  var t, a, i, n;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (a = e.right) != null ? a : 0,
    bottom: (i = e.bottom) != null ? i : 0,
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
function $l(e) {
  const {
    x: t,
    y: a,
    width: i,
    height: n
  } = e;
  return {
    width: i,
    height: n,
    top: a,
    left: t,
    right: t + i,
    bottom: a + n,
    x: t,
    y: a
  };
}
function fp(e, t, a) {
  let {
    reference: i,
    floating: n
  } = e;
  const r = Pi(t), s = jd(t), c = zd(s), d = Vi(t), _ = r === "y", v = i.x + i.width / 2 - n.width / 2, y = i.y + i.height / 2 - n.height / 2, m = i[c] / 2 - n[c] / 2;
  let k;
  switch (d) {
    case "top":
      k = {
        x: v,
        y: i.y - n.height
      };
      break;
    case "bottom":
      k = {
        x: v,
        y: i.y + i.height
      };
      break;
    case "right":
      k = {
        x: i.x + i.width,
        y
      };
      break;
    case "left":
      k = {
        x: i.x - n.width,
        y
      };
      break;
    default:
      k = {
        x: i.x,
        y: i.y
      };
  }
  const S = qa(t);
  return S && (k[s] += m * (S === "end" ? 1 : -1) * (a && _ ? -1 : 1)), k;
}
async function Hk(e, t) {
  var a;
  t === void 0 && (t = {});
  const {
    x: i,
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
  } = or(t, e), S = Vb(k), $ = c[m ? y === "floating" ? "reference" : "floating" : y], L = $l(await r.getClippingRect({
    element: (a = await (r.isElement == null ? void 0 : r.isElement($))) == null || a ? $ : $.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: _,
    rootBoundary: v,
    strategy: d
  })), P = y === "floating" ? {
    x: i,
    y: n,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, F = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), D = await (r.isElement == null ? void 0 : r.isElement(F)) && await (r.getScale == null ? void 0 : r.getScale(F)) || {
    x: 1,
    y: 1
  }, fe = $l(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: P,
    offsetParent: F,
    strategy: d
  }) : P);
  return {
    top: (L.top - fe.top + S.top) / D.y,
    bottom: (fe.bottom - L.bottom + S.bottom) / D.y,
    left: (L.left - fe.left + S.left) / D.x,
    right: (fe.right - L.right + S.right) / D.x
  };
}
const Vk = 50, qk = async (e, t, a) => {
  const {
    placement: i = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: s
  } = a, c = s.detectOverflow ? s : {
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
  } = fp(_, i, d), m = i, k = 0;
  const S = {};
  for (let C = 0; C < r.length; C++) {
    const $ = r[C];
    if (!$)
      continue;
    const {
      name: L,
      fn: P
    } = $, {
      x: F,
      y: D,
      data: fe,
      reset: J
    } = await P({
      x: v,
      y,
      initialPlacement: i,
      placement: m,
      strategy: n,
      middlewareData: S,
      rects: _,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    v = F ?? v, y = D ?? y, S[L] = {
      ...S[L],
      ...fe
    }, J && k < Vk && (k++, typeof J == "object" && (J.placement && (m = J.placement), J.rects && (_ = J.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: n
    }) : J.rects), {
      x: v,
      y
    } = fp(_, m, d)), C = -1);
  }
  return {
    x: v,
    y,
    placement: m,
    strategy: n,
    middlewareData: S
  };
}, Gk = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: a,
      y: i,
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
      x: a,
      y: i
    }, k = jd(n), S = zd(k), C = await s.getDimensions(_), $ = k === "y", L = $ ? "top" : "left", P = $ ? "bottom" : "right", F = $ ? "clientHeight" : "clientWidth", D = r.reference[S] + r.reference[k] - m[k] - r.floating[S], fe = m[k] - r.reference[k], J = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(_));
    let x = J ? J[F] : 0;
    (!x || !await (s.isElement == null ? void 0 : s.isElement(J))) && (x = c.floating[F] || r.floating[S]);
    const V = D / 2 - fe / 2, W = x / 2 - C[S] / 2 - 1, Z = Xl(y[L], W), ie = Xl(y[P], W), B = x - C[S] - ie, q = x / 2 - C[S] / 2 + V, M = jb(Z, q, B), G = !d.arrow && qa(n) != null && q !== M && r.reference[S] / 2 - (q < Z ? Z : ie) - C[S] / 2 < 0, ee = G ? q < Z ? q - Z : q - B : 0;
    return {
      [k]: m[k] + ee,
      data: {
        [k]: M,
        centerOffset: q - M - ee,
        ...G && {
          alignmentOffset: ee
        }
      },
      reset: G
    };
  }
});
function Kk(e, t, a) {
  return (e ? [...a.filter((n) => qa(n) === e), ...a.filter((n) => qa(n) !== e)] : a.filter((n) => Vi(n) === n)).filter((n) => e ? qa(n) === e || (t ? So(n) !== n : !1) : !0);
}
const Wk = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var a, i, n;
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
        ...S
      } = or(e, t), C = y !== void 0 || m === up ? Kk(y || null, k, m) : m, $ = ((a = s.autoPlacement) == null ? void 0 : a.index) || 0, L = C[$];
      if (L == null)
        return {};
      if (c !== L)
        return {
          reset: {
            placement: C[0]
          }
        };
      const P = await d.detectOverflow(t, S), F = Hb(L, r, await (d.isRTL == null ? void 0 : d.isRTL(_.floating))), D = [P[Vi(L)], P[F[0]], P[F[1]]], fe = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: L,
        overflows: D
      }], J = C[$ + 1];
      if (J)
        return {
          data: {
            index: $ + 1,
            overflows: fe
          },
          reset: {
            placement: J
          }
        };
      const x = fe.map((Z) => {
        const ie = qa(Z.placement);
        return [Z.placement, ie && v ? (
          // Check along the mainAxis and main crossAxis side.
          Z.overflows.slice(0, 2).reduce((B, q) => B + q, 0)
        ) : (
          // Check only the mainAxis.
          Z.overflows[0]
        ), Z.overflows];
      }).sort((Z, ie) => Z[1] - ie[1]), W = ((n = x.filter((Z) => Z[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        qa(Z[0]) ? 2 : 3
      ).every((ie) => ie <= 0))[0]) == null ? void 0 : n[0]) || x[0][0];
      return W !== c ? {
        data: {
          index: $ + 1,
          overflows: fe
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
      var a, i;
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
        fallbackAxisSideDirection: S = "none",
        flipAlignment: C = !0,
        ...$
      } = or(e, t);
      if ((a = r.arrow) != null && a.alignmentOffset)
        return {};
      const L = Vi(n), P = Pi(c), F = Vi(c) === c, D = await (d.isRTL == null ? void 0 : d.isRTL(_.floating)), fe = m || (F || !C ? [Co(c)] : Fk(c)), J = S !== "none";
      !m && J && fe.push(...jk(c, C, S, D));
      const x = [c, ...fe], V = await d.detectOverflow(t, $), W = [];
      let Z = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (v && W.push(V[L]), y) {
        const M = Hb(n, s, D);
        W.push(V[M[0]], V[M[1]]);
      }
      if (Z = [...Z, {
        placement: n,
        overflows: W
      }], !W.every((M) => M <= 0)) {
        var ie, B;
        const M = (((ie = r.flip) == null ? void 0 : ie.index) || 0) + 1, G = x[M];
        if (G && (!(y === "alignment" ? P !== Pi(G) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Z.every((X) => Pi(X.placement) === P ? X.overflows[0] > 0 : !0)))
          return {
            data: {
              index: M,
              overflows: Z
            },
            reset: {
              placement: G
            }
          };
        let ee = (B = Z.filter((ne) => ne.overflows[0] <= 0).sort((ne, X) => ne.overflows[1] - X.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!ee)
          switch (k) {
            case "bestFit": {
              var q;
              const ne = (q = Z.filter((X) => {
                if (J) {
                  const le = Pi(X.placement);
                  return le === P || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  le === "y";
                }
                return !0;
              }).map((X) => [X.placement, X.overflows.filter((le) => le > 0).reduce((le, _e) => le + _e, 0)]).sort((X, le) => X[1] - le[1])[0]) == null ? void 0 : q[0];
              ne && (ee = ne);
              break;
            }
            case "initialPlacement":
              ee = c;
              break;
          }
        if (n !== ee)
          return {
            reset: {
              placement: ee
            }
          };
      }
      return {};
    }
  };
}, Zk = /* @__PURE__ */ new Set(["left", "top"]);
async function Xk(e, t) {
  const {
    placement: a,
    platform: i,
    elements: n
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(n.floating)), s = Vi(a), c = qa(a), d = Pi(a) === "y", _ = Zk.has(s) ? -1 : 1, v = r && d ? -1 : 1, y = or(t, e);
  let {
    mainAxis: m,
    crossAxis: k,
    alignmentAxis: S
  } = typeof y == "number" ? {
    mainAxis: y,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: y.mainAxis || 0,
    crossAxis: y.crossAxis || 0,
    alignmentAxis: y.alignmentAxis
  };
  return c && typeof S == "number" && (k = c === "end" ? S * -1 : S), d ? {
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
      var a, i;
      const {
        x: n,
        y: r,
        placement: s,
        middlewareData: c
      } = t, d = await Xk(t, e);
      return s === ((a = c.offset) == null ? void 0 : a.placement) && (i = c.arrow) != null && i.alignmentOffset ? {} : {
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
        x: a,
        y: i,
        placement: n,
        platform: r
      } = t, {
        mainAxis: s = !0,
        crossAxis: c = !1,
        limiter: d = {
          fn: (P) => {
            let {
              x: F,
              y: D
            } = P;
            return {
              x: F,
              y: D
            };
          }
        },
        ..._
      } = or(e, t), v = {
        x: a,
        y: i
      }, y = await r.detectOverflow(t, _), m = Pi(n), k = Bb(m);
      let S = v[k], C = v[m];
      const $ = (P, F) => jb(F + y[P === "y" ? "top" : "left"], F, F - y[P === "y" ? "bottom" : "right"]);
      s && (S = $(k, S)), c && (C = $(m, C));
      const L = d.fn({
        ...t,
        [k]: S,
        [m]: C
      });
      return {
        ...L,
        data: {
          x: L.x - a,
          y: L.y - i,
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
        placement: a,
        rects: i,
        platform: n,
        elements: r
      } = t, {
        apply: s = () => {
        },
        ...c
      } = or(e, t), d = await n.detectOverflow(t, c), _ = Vi(a), v = qa(a), y = Pi(a) === "y", {
        width: m,
        height: k
      } = i.floating;
      let S, C;
      _ === "top" || _ === "bottom" ? (S = _, C = v === (await (n.isRTL == null ? void 0 : n.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (C = _, S = v === "end" ? "top" : "bottom");
      const $ = k - d.top - d.bottom, L = m - d.left - d.right, P = Xl(k - d[S], $), F = Xl(m - d[C], L), D = t.middlewareData.shift, fe = !D;
      let J = P, x = F;
      D != null && D.enabled.x && (x = L), D != null && D.enabled.y && (J = $), fe && !v && (y ? x = m - 2 * Jc(d.left, d.right) : J = k - 2 * Jc(d.top, d.bottom)), await s({
        ...t,
        availableWidth: x,
        availableHeight: J
      });
      const V = await n.getDimensions(r.floating);
      return m !== V.width || k !== V.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function La(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function di(e) {
  return La(e).getComputedStyle(e);
}
const hp = Math.min, xl = Math.max, To = Math.round;
function qb(e) {
  const t = di(e);
  let a = parseFloat(t.width), i = parseFloat(t.height);
  const n = e.offsetWidth, r = e.offsetHeight, s = To(a) !== n || To(i) !== r;
  return s && (a = n, i = r), { width: a, height: i, fallback: s };
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
function fi(e) {
  return e instanceof La(e).HTMLElement;
}
function _n(e) {
  return e instanceof La(e).Element;
}
function Kb(e) {
  return e instanceof La(e).Node;
}
function pp(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof La(e).ShadowRoot || e instanceof ShadowRoot;
}
function _u(e) {
  const { overflow: t, overflowX: a, overflowY: i, display: n } = di(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + a) && !["inline", "contents"].includes(n);
}
function tS(e) {
  return ["table", "td", "th"].includes(Cn(e));
}
function Qc(e) {
  const t = /firefox/i.test(Gb()), a = di(e), i = a.backdropFilter || a.WebkitBackdropFilter;
  return a.transform !== "none" || a.perspective !== "none" || !!i && i !== "none" || t && a.willChange === "filter" || t && !!a.filter && a.filter !== "none" || ["transform", "perspective"].some(((n) => a.willChange.includes(n))) || ["paint", "layout", "strict", "content"].some(((n) => {
    const r = a.contain;
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
  if (!fi(t)) return Zb;
  const a = t.getBoundingClientRect(), { width: i, height: n, fallback: r } = qb(t);
  let s = (r ? To(a.width) : a.width) / i, c = (r ? To(a.height) : a.height) / n;
  return s && Number.isFinite(s) || (s = 1), c && Number.isFinite(c) || (c = 1), { x: s, y: c };
}
function Jl(e, t, a, i) {
  var n, r;
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  const s = e.getBoundingClientRect(), c = Yb(e);
  let d = Zb;
  t && (i ? _n(i) && (d = Ir(i)) : d = Ir(e));
  const _ = c ? La(c) : window, v = !Wb() && a;
  let y = (s.left + (v && ((n = _.visualViewport) == null ? void 0 : n.offsetLeft) || 0)) / d.x, m = (s.top + (v && ((r = _.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / d.y, k = s.width / d.x, S = s.height / d.y;
  if (c) {
    const C = La(c), $ = i && _n(i) ? La(i) : i;
    let L = C.frameElement;
    for (; L && i && $ !== C; ) {
      const P = Ir(L), F = L.getBoundingClientRect(), D = getComputedStyle(L);
      F.x += (L.clientLeft + parseFloat(D.paddingLeft)) * P.x, F.y += (L.clientTop + parseFloat(D.paddingTop)) * P.y, y *= P.x, m *= P.y, k *= P.x, S *= P.y, y += F.x, m += F.y, L = La(L).frameElement;
    }
  }
  return { width: k, height: S, top: m, right: y + k, bottom: m + S, left: y, x: y, y: m };
}
function wn(e) {
  return ((Kb(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function wu(e) {
  return _n(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Xb(e) {
  return Jl(wn(e)).left + wu(e).scrollLeft;
}
function Ql(e) {
  if (Cn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || pp(e) && e.host || wn(e);
  return pp(t) ? t.host : t;
}
function Jb(e) {
  const t = Ql(e);
  return Bd(t) ? t.ownerDocument.body : fi(t) && _u(t) ? t : Jb(t);
}
function Ao(e, t) {
  var a;
  t === void 0 && (t = []);
  const i = Jb(e), n = i === ((a = e.ownerDocument) == null ? void 0 : a.body), r = La(i);
  return n ? t.concat(r, r.visualViewport || [], _u(i) ? i : []) : t.concat(i, Ao(i));
}
function vp(e, t, a) {
  return t === "viewport" ? $l((function(i, n) {
    const r = La(i), s = wn(i), c = r.visualViewport;
    let d = s.clientWidth, _ = s.clientHeight, v = 0, y = 0;
    if (c) {
      d = c.width, _ = c.height;
      const m = Wb();
      (m || !m && n === "fixed") && (v = c.offsetLeft, y = c.offsetTop);
    }
    return { width: d, height: _, x: v, y };
  })(e, a)) : _n(t) ? $l((function(i, n) {
    const r = Jl(i, !0, n === "fixed"), s = r.top + i.clientTop, c = r.left + i.clientLeft, d = fi(i) ? Ir(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * d.x, height: i.clientHeight * d.y, x: c * d.x, y: s * d.y };
  })(t, a)) : $l((function(i) {
    const n = wn(i), r = wu(i), s = i.ownerDocument.body, c = xl(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth), d = xl(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
    let _ = -r.scrollLeft + Xb(i);
    const v = -r.scrollTop;
    return di(s).direction === "rtl" && (_ += xl(n.clientWidth, s.clientWidth) - c), { width: c, height: d, x: _, y: v };
  })(wn(e)));
}
function bp(e) {
  return fi(e) && di(e).position !== "fixed" ? e.offsetParent : null;
}
function gp(e) {
  const t = La(e);
  let a = bp(e);
  for (; a && tS(a) && di(a).position === "static"; ) a = bp(a);
  return a && (Cn(a) === "html" || Cn(a) === "body" && di(a).position === "static" && !Qc(a)) ? t : a || (function(i) {
    let n = Ql(i);
    for (; fi(n) && !Bd(n); ) {
      if (Qc(n)) return n;
      n = Ql(n);
    }
    return null;
  })(e) || t;
}
function aS(e, t, a) {
  const i = fi(t), n = wn(t), r = Jl(e, !0, a === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (i || !i && a !== "fixed") if ((Cn(t) !== "body" || _u(n)) && (s = wu(t)), fi(t)) {
    const d = Jl(t, !0);
    c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
  } else n && (c.x = Xb(n));
  return { x: r.left + s.scrollLeft - c.x, y: r.top + s.scrollTop - c.y, width: r.width, height: r.height };
}
const iS = { getClippingRect: function(e) {
  let { element: t, boundary: a, rootBoundary: i, strategy: n } = e;
  const r = a === "clippingAncestors" ? (function(_, v) {
    const y = v.get(_);
    if (y) return y;
    let m = Ao(_).filter((($) => _n($) && Cn($) !== "body")), k = null;
    const S = di(_).position === "fixed";
    let C = S ? Ql(_) : _;
    for (; _n(C) && !Bd(C); ) {
      const $ = di(C), L = Qc(C);
      (S ? L || k : L || $.position !== "static" || !k || !["absolute", "fixed"].includes(k.position)) ? k = $ : m = m.filter(((P) => P !== C)), C = Ql(C);
    }
    return v.set(_, m), m;
  })(t, this._c) : [].concat(a), s = [...r, i], c = s[0], d = s.reduce(((_, v) => {
    const y = vp(t, v, n);
    return _.top = xl(y.top, _.top), _.right = hp(y.right, _.right), _.bottom = hp(y.bottom, _.bottom), _.left = xl(y.left, _.left), _;
  }), vp(t, c, n));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: a, strategy: i } = e;
  const n = fi(a), r = wn(a);
  if (a === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const d = { x: 0, y: 0 };
  if ((n || !n && i !== "fixed") && ((Cn(a) !== "body" || _u(r)) && (s = wu(a)), fi(a))) {
    const _ = Jl(a);
    c = Ir(a), d.x = _.x + a.clientLeft, d.y = _.y + a.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - s.scrollLeft * c.x + d.x, y: t.y * c.y - s.scrollTop * c.y + d.y };
}, isElement: _n, getDimensions: function(e) {
  return fi(e) ? qb(e) : e.getBoundingClientRect();
}, getOffsetParent: gp, getDocumentElement: wn, getScale: Ir, async getElementRects(e) {
  let { reference: t, floating: a, strategy: i } = e;
  const n = this.getOffsetParent || gp, r = this.getDimensions;
  return { reference: aS(t, await n(a), i), floating: { x: 0, y: 0, ...await r(a) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => di(e).direction === "rtl" }, nS = (e, t, a) => {
  const i = /* @__PURE__ */ new Map(), n = { platform: iS, ...a }, r = { ...n.platform, _c: i };
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
  let a = kn.themes[e] || {}, i;
  do
    i = a[t], typeof i > "u" ? a.$extend ? a = kn.themes[a.$extend] || {} : (a = null, i = kn[t]) : a = null;
  while (a);
  return i;
}
function rS(e) {
  const t = [e];
  let a = kn.themes[e] || {};
  do
    a.$extend && !a.$resetCss ? (t.push(a.$extend), a = kn.themes[a.$extend] || {}) : a = null;
  while (a);
  return t.map((i) => `v-popper--theme-${i}`);
}
function mp(e) {
  const t = [e];
  let a = kn.themes[e] || {};
  do
    a.$extend ? (t.push(a.$extend), a = kn.themes[a.$extend] || {}) : a = null;
  while (a);
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
  const a = e.indexOf(t);
  a !== -1 && e.splice(a, 1);
}
function Cc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Ha = [];
let Wn = null;
const kp = {};
function Sp(e) {
  let t = kp[e];
  return t || (t = kp[e] = []), t;
}
let td = function() {
};
typeof window < "u" && (td = window.Element);
function Je(e) {
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
      default: Je("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Je("positioningDisabled")
    },
    placement: {
      type: String,
      default: Je("placement"),
      validator: (e) => lS.includes(e)
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
    show({ event: e = null, skipDelay: t = !1, force: a = !1 } = {}) {
      var i, n;
      (i = this.parentPopper) != null && i.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (a || !this.disabled) && (((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: e = null, skipDelay: t = !1 } = {}) {
      var a;
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
        ((a = this.parentPopper) == null ? void 0 : a.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
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
        fn: ({ placement: i, rects: n, middlewareData: r }) => {
          let s;
          const { centerOffset: c } = r.arrow;
          return i.startsWith("top") || i.startsWith("bottom") ? s = Math.abs(c) > n.reference.width / 2 : s = Math.abs(c) > n.reference.height / 2, {
            data: {
              overflow: s
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const i = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: n, placement: r, middlewareData: s }) => {
            var c;
            if ((c = s.autoSize) != null && c.skip)
              return {};
            let d, _;
            return r.startsWith("top") || r.startsWith("bottom") ? d = n.reference.width : _ = n.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = d != null ? `${d}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = _ != null ? `${_}px` : null, {
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
        apply: ({ availableWidth: i, availableHeight: n }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = n != null ? `${n}px` : null;
        }
      })));
      const a = await nS(this.$_referenceNode, this.$_popperNode, e);
      Object.assign(this.result, {
        x: a.x,
        y: a.y,
        placement: a.placement,
        strategy: a.strategy,
        arrow: {
          ...a.middlewareData.arrow,
          ...a.middlewareData.arrowOverflow
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
        const t = this.$_referenceNode.getBoundingClientRect(), a = this.$_popperNode.querySelector(".v-popper__wrapper"), i = a.parentNode.getBoundingClientRect(), n = t.x + t.width / 2 - (i.left + a.offsetLeft), r = t.y + t.height / 2 - (i.top + a.offsetTop);
        this.result.transformOrigin = `${n}px ${r}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let a = 0; a < Ha.length; a++)
          t = Ha[a], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Ha.push(this), document.body.classList.add("v-popper--some-open");
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
      this.skipTransition = e, wp(Ha, this), Ha.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const a of mp(this.theme)) {
        const i = Sp(a);
        wp(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${a}`);
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
      const e = (a) => {
        this.isShown && !this.$_hideInProgress || (a.usedByTooltip = !0, !this.$_preventShow && this.show({ event: a }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, yp, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], yp, this.popperTriggers, this.popperShowTriggers, e);
      const t = (a) => {
        a.usedByTooltip || this.hide({ event: a });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, _p, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], _p, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, a) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: a }), e.forEach((i) => i.addEventListener(t, a, es ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, a, i, n) {
      let r = a;
      i != null && (r = typeof i == "function" ? i(r) : i), r.forEach((s) => {
        const c = t[s];
        c && this.$_registerEventListeners(e, c, n);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((a) => {
        const { targetNodes: i, eventType: n, handler: r } = a;
        !e || e === n ? i.forEach((s) => s.removeEventListener(n, r)) : t.push(a);
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
      for (const a of this.$_targetNodes) {
        const i = a.getAttribute(e);
        i && (a.removeAttribute(e), a.setAttribute(t, i));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const a in e) {
          const i = e[a];
          i == null ? t.removeAttribute(a) : t.setAttribute(a, i);
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
        const t = this.$_popperNode.getBoundingClientRect(), a = Ol - hn, i = Nl - pn, n = t.left + t.width / 2 - hn + (t.top + t.height / 2) - pn + t.width + t.height, r = hn + a * n, s = pn + i * n;
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
    const e = es ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Cp(t), e), document.addEventListener("touchend", (t) => Tp(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Cp(e), !0), window.addEventListener("click", (e) => Tp(e, !1), !0);
  window.addEventListener("resize", uS);
}
function Cp(e, t) {
  for (let a = 0; a < Ha.length; a++) {
    const i = Ha[a];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Tp(e, t) {
  sS(e, t);
}
function sS(e, t) {
  const a = {};
  for (let i = Ha.length - 1; i >= 0; i--) {
    const n = Ha[i];
    try {
      const r = n.containsGlobalTarget = n.mouseDownContains || n.popperNode().contains(e.target);
      n.pendingHide = !1, requestAnimationFrame(() => {
        if (n.pendingHide = !1, !a[n.randomId] && Ap(n, r, e)) {
          if (n.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let c = n.parentPopper;
            for (; c; )
              a[c.randomId] = !0, c = c.parentPopper;
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
function Ap(e, t, a) {
  return a.closeAllPopover || a.closePopover && t || oS(e, a) && !t;
}
function oS(e, t) {
  if (typeof e.autoHide == "function") {
    const a = e.autoHide(t);
    return e.lastAutoHide = a, a;
  }
  return e.autoHide;
}
function uS() {
  for (let e = 0; e < Ha.length; e++)
    Ha[e].$_computePosition();
}
let hn = 0, pn = 0, Ol = 0, Nl = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  hn = Ol, pn = Nl, Ol = e.clientX, Nl = e.clientY;
}, es ? {
  passive: !0
} : void 0);
function qs(e, t, a, i, n, r, s, c) {
  const d = ((s - n) * (t - r) - (c - r) * (e - n)) / ((c - r) * (a - e) - (s - n) * (i - t)), _ = ((a - e) * (t - r) - (i - t) * (e - n)) / ((c - r) * (a - e) - (s - n) * (i - t));
  return d >= 0 && d <= 1 && _ >= 0 && _ <= 1;
}
const cS = {
  extends: eg()
}, Hd = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [i, n] of t)
    a[i] = n;
  return a;
};
function dS(e, t, a, i, n, r) {
  return f(), p("div", {
    ref: "reference",
    class: Te(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    He(e.$slots, "default", eo(ql(e.slotData)))
  ], 2);
}
const fS = /* @__PURE__ */ Hd(cS, [["render", dS]]);
function hS() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var a = e.indexOf("Trident/");
  if (a > 0) {
    var i = e.indexOf("rv:");
    return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10);
  }
  var n = e.indexOf("Edge/");
  return n > 0 ? parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) : -1;
}
let Js;
function ad() {
  ad.init || (ad.init = !0, Js = hS() !== -1);
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
    ad(), Pt(() => {
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
const bS = /* @__PURE__ */ pS((e, t, a, i, n, r) => (f(), Pe("div", vS)));
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
function SS(e, t, a, i, n, r) {
  const s = Xe("ResizeObserver");
  return f(), p("div", {
    id: e.popperId,
    ref: "popover",
    class: Te(["v-popper__popper", [
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
    style: ha(e.result ? {
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
      style: ha(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      l("div", yS, [
        e.mounted ? (f(), p(K, { key: 0 }, [
          l("div", null, [
            He(e.$slots, "default")
          ]),
          e.handleResize ? (f(), Pe(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (c) => e.$emit("resize", c))
          })) : A("", !0)
        ], 64)) : A("", !0)
      ], 512),
      l("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: ha(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, kS, 4)
    ], 4)
  ], 46, mS);
}
const ag = /* @__PURE__ */ Hd(gS, [["render", SS]]), ig = {
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
let id = function() {
};
typeof window < "u" && (id = window.Element);
const CS = /* @__PURE__ */ qt({
  name: "VPopperWrapper",
  components: {
    Popper: fS,
    PopperContent: ag
  },
  mixins: [
    ig,
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
      type: [String, Object, id, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, id],
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
function TS(e, t, a, i, n, r) {
  const s = Xe("PopperContent"), c = Xe("Popper");
  return f(), Pe(c, aa({ ref: "popper" }, e.$props, {
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
      isShown: _,
      shouldMountContent: v,
      skipTransition: y,
      autoHide: m,
      show: k,
      hide: S,
      handleResize: C,
      onResize: $,
      classes: L,
      result: P
    }) => [
      He(e.$slots, "default", {
        shown: _,
        show: k,
        hide: S
      }),
      de(s, {
        ref: "popperContent",
        "popper-id": d,
        theme: e.finalTheme,
        shown: _,
        mounted: v,
        "skip-transition": y,
        "auto-hide": m,
        "handle-resize": C,
        classes: L,
        result: P,
        onHide: S,
        onResize: $
      }, {
        default: ke(() => [
          He(e.$slots, "popper", {
            shown: _,
            hide: S
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
      for (const a of t)
        a.removeAttribute("aria-describedby");
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
function RS(e, t, a, i, n, r) {
  const s = Xe("NcPopoverTriggerProvider"), c = Xe("Dropdown");
  return f(), Pe(c, {
    ref: "popover",
    shown: n.internalShown,
    "onUpdate:shown": [
      t[0] || (t[0] = (d) => n.internalShown = d),
      t[1] || (t[1] = (d) => n.internalShown = d)
    ],
    autoHide: !a.noCloseOnClickOutside && a.closeOnClickOutside,
    boundary: a.boundary || void 0,
    container: a.container,
    delay: a.delay,
    distance: 4,
    handleResize: "",
    noAutoFocus: !0,
    placement: r.internalPlacement,
    popperClass: [e.$style.ncPopover, a.popoverBaseClass],
    popperTriggers: r.popperTriggers,
    popperHideTriggers: r.popperHideTriggers,
    popperShowTriggers: r.popperShowTriggers,
    theme: i.theme,
    triggers: r.internalTriggers,
    hideTriggers: r.hideTriggers,
    showTriggers: r.showTriggers,
    onApplyShow: r.afterShow,
    onApplyHide: r.afterHide
  }, {
    popper: ke((d) => [
      He(e.$slots, "default", eo(ql(d)))
    ]),
    default: ke(() => [
      de(s, {
        shown: n.internalShown,
        popupRole: a.popupRole
      }, {
        default: ke((d) => [
          He(e.$slots, "trigger", eo(ql(d)))
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
function US(e, t, a, i, n, r) {
  return f(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (f(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", FS, [
        a.title ? (f(), p("title", MS, o(a.title), 1)) : A("", !0)
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
      const a = t;
      if (a.type === Bt)
        return !1;
      if (a.type === K && !qd(a.children))
        return !1;
      if (a.type === ls && !a.children.trim())
        return !1;
    }
    return !0;
  });
}
const jS = ".focusable", BS = {
  name: "NcActions",
  components: {
    NcButton: ci,
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
      [Ud]: H(() => this.actionsMenuSemanticType === "menu"),
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
        const t = this.getFocusableMenuItemElements(), a = [...t].indexOf(document.activeElement);
        if (a === -1)
          return;
        const i = e.shiftKey ? a - 1 : a + 1;
        (i < 0 || i === t.length) && this.closeMenu(!0), this.focusIndex = i, this.focusAction();
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
        const t = [...this.getFocusableMenuItemElements()].findIndex((a) => a.getAttribute("aria-checked") === "true" && a.getAttribute("role") === "menuitemradio");
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
    const e = [], t = (k, S) => {
      k.forEach((C) => {
        if (this.isAction(C)) {
          S.push(C);
          return;
        }
        C.type === K && t(C.children, S);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let a = e.filter(this.isValidSingleAction);
    this.forceMenu && a.length > 0 && this.inline > 0 && (a = []);
    const i = a.slice(0, this.inline), n = e.filter((k) => !i.includes(k)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], c = ["NcActionLink", "NcActionRouter"], d = n.some((k) => s.includes(this.getActionName(k))), _ = n.some((k) => r.includes(this.getActionName(k))), v = n.some((k) => c.includes(this.getActionName(k)));
    d ? this.actionsMenuSemanticType = "dialog" : _ ? this.actionsMenuSemanticType = "menu" : v ? this.actionsMenuSemanticType = "navigation" : e.filter((S) => this.getActionName(S).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const y = (k) => {
      const S = k?.props?.icon, C = k?.children?.icon?.()?.[0] ?? (this.isIconUrl(S) ? da("img", { class: "action-item__menutoggle__icon", src: S, alt: "" }) : da("span", { class: ["icon", S] })), $ = k?.children?.default?.()?.[0]?.children?.trim(), L = this.forceName ? $ : "";
      let P = k?.props?.title;
      this.forceName || P || (P = $);
      const F = { ...k?.props ?? {} }, D = ["submit", "reset"].includes(F.type) ? F.modelValue : "button";
      return delete F.modelValue, delete F.type, da(
        ci,
        aa(
          F,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": k?.props?.["aria-label"] || $,
            title: P,
            disabled: this.disabled || k?.props?.disabled,
            pressed: k?.props?.modelValue,
            size: this.size,
            type: D,
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
          icon: () => C
        }
      );
    }, m = (k) => {
      const S = qd(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? da("span", { class: ["icon", this.defaultIcon] }) : da(zS, { size: 20 }), C = `${this.randomId}-trigger`;
      return da(
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
          trigger: () => da(ci, {
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
            icon: () => S,
            default: () => this.menuName
          }),
          default: () => da("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            da("ul", {
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
    return e.length === 1 && a.length === 1 && !this.forceMenu ? y(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), i.length > 0 && this.inline > 0 ? da(
      "div",
      {
        class: [
          "action-items",
          `action-item--${this.triggerButtonVariant}`
        ]
      },
      [
        // Render inline actions
        ...i.map(y),
        // render the rest within the popover menu
        n.length > 0 ? da(
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
    ) : da(
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
    const t = e, a = H(() => {
      const i = ["#777", "#CCC"];
      return t.appearance === "light" ? i : t.appearance === "dark" ? i.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (i, n) => (f(), p("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (f(), p("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        l("path", {
          fill: a.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, qS),
        l("path", {
          fill: a.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (f(), p("title", KS, o(e.name), 1)) : A("", !0)
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
function eC(e, t, a, i, n, r) {
  return f(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (f(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", JS, [
        a.title ? (f(), p("title", QS, o(a.title), 1)) : A("", !0)
      ])
    ], 8, XS))
  ], 16, ZS);
}
const tC = /* @__PURE__ */ ut(YS, [["render", eC]]), aC = {
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
}, iC = ["aria-hidden", "aria-label"], nC = ["fill", "width", "height"], rC = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, lC = { key: 0 };
function sC(e, t, a, i, n, r) {
  return f(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (f(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", rC, [
        a.title ? (f(), p("title", lC, o(a.title), 1)) : A("", !0)
      ])
    ], 8, nC))
  ], 16, iC);
}
const oC = /* @__PURE__ */ ut(aC, [["render", sC]]);
An(S0);
const uC = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: ci,
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
function cC(e, t, a, i, n, r) {
  const s = Xe("ChevronUp"), c = Xe("ChevronDown"), d = Xe("NcButton");
  return f(), Pe(d, {
    class: Te(["icon-collapse", {
      "icon-collapse--active": a.active,
      "icon-collapse--open": a.open
    }]),
    "aria-label": r.labelButton,
    variant: a.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: ke(() => [
      a.open ? (f(), Pe(s, {
        key: 0,
        size: 20
      })) : (f(), Pe(c, {
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
    onClick(e, t, a) {
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && a && (t?.(e), e.preventDefault(), this.isMobile && Mi("toggle-navigation", { open: !1 }));
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
      const a = t.querySelector("button");
      this.focused && a && (e.preventDefault(), a.focus(), this.focused = !1);
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
function _C(e, t, a, i, n, r) {
  const s = Xe("NcLoadingIcon"), c = Xe("NcInputConfirmCancel"), d = Xe("Pencil"), _ = Xe("NcActionButton"), v = Xe("Undo"), y = Xe("NcActions"), m = Xe("NcAppNavigationIconCollapsible");
  return f(), p("li", {
    id: a.id,
    class: Te([{
      "app-navigation-entry--opened": n.opened,
      "app-navigation-entry--pinned": a.pinned,
      "app-navigation-entry--collapsible": a.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (f(), Pe(xd(r.isRouterLink ? "router-link" : "NcVNodes"), eo(ql({ ...r.isRouterLink && { custom: !0, to: a.to } })), {
      default: ke(({ href: k, navigate: S, isActive: C }) => [
        l("div", {
          ref: "entry",
          class: Te(["app-navigation-entry", {
            "app-navigation-entry--editing": n.editingActive,
            "app-navigation-entry--deleted": a.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: a.to && C || a.active
          }]),
          onPointerenter: t[4] || (t[4] = (...$) => r.requestHighlight && r.requestHighlight(...$)),
          onFocusin: t[5] || (t[5] = (...$) => r.requestHighlight && r.requestHighlight(...$))
        }, [
          a.undo ? A("", !0) : (f(), p("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": a.active || a.to && C ? "page" : void 0,
            "aria-description": a.ariaDescription,
            "aria-expanded": e.$slots.default ? n.opened.toString() : void 0,
            href: a.href || k || "#",
            target: r.isExternal(a.href) ? "_blank" : void 0,
            title: a.title || a.name,
            onBlur: t[1] || (t[1] = (...$) => r.handleBlur && r.handleBlur(...$)),
            onClick: ($) => r.onClick($, S, k),
            onFocus: t[2] || (t[2] = (...$) => r.handleFocus && r.handleFocus(...$)),
            onKeydown: t[3] || (t[3] = ft(Se((...$) => r.handleTab && r.handleTab(...$), ["exact"]), ["tab"]))
          }, [
            l("div", {
              class: Te(["app-navigation-entry-icon", { [a.icon]: a.icon }])
            }, [
              a.loading ? (f(), Pe(s, { key: 0 })) : He(e.$slots, "icon", {
                key: 1,
                active: a.active || a.to && C
              }, void 0, !0)
            ], 2),
            l("span", {
              class: Te(["app-navigation-entry__name", { "hidden-visually": n.editingActive }])
            }, o(a.name), 3),
            n.editingActive ? (f(), p("div", vC, [
              de(c, {
                ref: "editingInput",
                modelValue: n.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = ($) => n.editingValue = $),
                placeholder: a.editPlaceholder !== "" ? a.editPlaceholder : a.name,
                primary: a.to && C || a.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : A("", !0)
          ], 40, pC)),
          a.undo ? (f(), p("div", bC, [
            l("div", gC, o(a.name), 1)
          ])) : A("", !0),
          (e.$slots.actions || e.$slots.counter || a.editable || a.undo) && !n.editingActive ? (f(), p("div", {
            key: 2,
            class: Te(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": a.forceDisplayActions || n.menuOpenLocalValue || a.menuOpen }])
          }, [
            e.$slots.counter ? (f(), p("div", mC, [
              He(e.$slots, "counter", {}, void 0, !0)
            ])) : A("", !0),
            e.$slots.actions || a.editable && !n.editingActive || a.undo ? (f(), Pe(y, {
              key: 1,
              ref: "actions",
              class: "app-navigation-entry__actions",
              container: "#app-navigation-vue",
              boundariesElement: n.actionsBoundariesElement,
              inline: a.inlineActions,
              placement: a.menuPlacement,
              open: a.menuOpen,
              forceMenu: a.forceMenu,
              defaultIcon: a.menuIcon,
              variant: "tertiary",
              "onUpdate:open": r.onMenuToggle
            }, {
              icon: ke(() => [
                He(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: ke(() => [
                a.editable && !n.editingActive ? (f(), Pe(_, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: ke(() => [
                    de(d, { size: 20 })
                  ]),
                  default: ke(() => [
                    Q(" " + o(a.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : A("", !0),
                a.undo ? (f(), Pe(_, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: ke(() => [
                    de(v, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : A("", !0),
                He(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : A("", !0)
          ], 2)) : A("", !0),
          a.allowCollapse && e.$slots.default ? (f(), Pe(m, {
            key: 3,
            active: a.to && C || a.active,
            open: n.opened,
            onClick: Se(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : A("", !0),
          He(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (f(), p("ul", yC, [
      He(e.$slots, "default", {}, void 0, !0)
    ])) : A("", !0)
  ], 10, hC);
}
const ai = /* @__PURE__ */ ut(fC, [["render", _C], ["__scopeId", "data-v-01bef41b"]]), Ac = /* @__PURE__ */ new WeakMap(), wC = {
  mounted(e, t) {
    const a = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = ep(e, t.value, { capture: a });
    else {
      const [n, r] = t.value;
      i = ep(e, n, Object.assign({ capture: a }, r));
    }
    Ac.set(e, i);
  },
  unmounted(e) {
    const t = Ac.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Ac.delete(e);
  }
}, kC = {
  mounted(e) {
    e.focus();
  }
}, SC = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", CC = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", rd = "numeric", ld = "ascii", sd = "alpha", Rl = "asciinumeric", _l = "alphanumeric", od = "domain", lg = "emoji", TC = "scheme", AC = "slashscheme", Ec = "whitespace";
function EC(e, t) {
  return e in t || (t[e] = []), t[e];
}
function tr(e, t, a) {
  t[rd] && (t[Rl] = !0, t[_l] = !0), t[ld] && (t[Rl] = !0, t[sd] = !0), t[Rl] && (t[_l] = !0), t[sd] && (t[_l] = !0), t[_l] && (t[od] = !0), t[lg] && (t[od] = !0);
  for (const i in t) {
    const n = EC(i, a);
    n.indexOf(e) < 0 && n.push(e);
  }
}
function $C(e, t) {
  const a = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (a[i] = !0);
  return a;
}
function ka(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
ka.groups = {};
ka.prototype = {
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
    const t = this, a = t.j[e];
    if (a)
      return a;
    for (let i = 0; i < t.jr.length; i++) {
      const n = t.jr[i][0], r = t.jr[i][1];
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
  ta(e, t, a, i) {
    for (let n = 0; n < e.length; n++)
      this.tt(e[n], t, a, i);
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
  tr(e, t, a, i) {
    i = i || ka.groups;
    let n;
    return t && t.j ? n = t : (n = new ka(t), a && i && tr(t, a, i)), this.jr.push([e, n]), n;
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
  ts(e, t, a, i) {
    let n = this;
    const r = e.length;
    if (!r)
      return n;
    for (let s = 0; s < r - 1; s++)
      n = n.tt(e[s]);
    return n.tt(e[r - 1], t, a, i);
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
  tt(e, t, a, i) {
    i = i || ka.groups;
    const n = this;
    if (t && t.j)
      return n.j[e] = t, t;
    const r = t;
    let s, c = n.go(e);
    if (c ? (s = new ka(), Object.assign(s.j, c.j), s.jr.push.apply(s.jr, c.jr), s.jd = c.jd, s.t = c.t) : s = new ka(), r) {
      if (i)
        if (s.t && typeof s.t == "string") {
          const d = Object.assign($C(s.t, i), a);
          tr(r, d, i);
        } else a && tr(r, a, i);
      s.t = r;
    }
    return n.j[e] = s, s;
  }
};
const We = (e, t, a, i, n) => e.ta(t, a, i, n), St = (e, t, a, i, n) => e.tr(t, a, i, n), xp = (e, t, a, i, n) => e.ts(t, a, i, n), me = (e, t, a, i, n) => e.tt(t, a, i, n), xi = "WORD", ud = "UWORD", sg = "ASCIINUMERICAL", og = "ALPHANUMERICAL", ts = "LOCALHOST", cd = "TLD", dd = "UTLD", Qs = "SCHEME", Ar = "SLASH_SCHEME", Kd = "NUM", fd = "WS", Wd = "NL", Il = "OPENBRACE", Ll = "CLOSEBRACE", Eo = "OPENBRACKET", $o = "CLOSEBRACKET", xo = "OPENPAREN", Oo = "CLOSEPAREN", No = "OPENANGLEBRACKET", Ro = "CLOSEANGLEBRACKET", Io = "FULLWIDTHLEFTPAREN", Lo = "FULLWIDTHRIGHTPAREN", Po = "LEFTCORNERBRACKET", Do = "RIGHTCORNERBRACKET", Fo = "LEFTWHITECORNERBRACKET", Mo = "RIGHTWHITECORNERBRACKET", Uo = "FULLWIDTHLESSTHAN", zo = "FULLWIDTHGREATERTHAN", jo = "AMPERSAND", Bo = "APOSTROPHE", Ho = "ASTERISK", bn = "AT", Vo = "BACKSLASH", qo = "BACKTICK", Go = "CARET", ar = "COLON", Yd = "COMMA", Ko = "DOLLAR", ni = "DOT", Wo = "EQUALS", Zd = "EXCLAMATION", Na = "HYPHEN", Pl = "PERCENT", Yo = "PIPE", Zo = "PLUS", Xo = "POUND", Dl = "QUERY", Xd = "QUOTE", ug = "FULLWIDTHMIDDLEDOT", Jd = "SEMI", ri = "SLASH", Fl = "TILDE", Jo = "UNDERSCORE", cg = "EMOJI", Qo = "SYM";
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
  CLOSEBRACE: Ll,
  CLOSEBRACKET: $o,
  CLOSEPAREN: Oo,
  COLON: ar,
  COMMA: Yd,
  DOLLAR: Ko,
  DOT: ni,
  EMOJI: cg,
  EQUALS: Wo,
  EXCLAMATION: Zd,
  FULLWIDTHGREATERTHAN: zo,
  FULLWIDTHLEFTPAREN: Io,
  FULLWIDTHLESSTHAN: Uo,
  FULLWIDTHMIDDLEDOT: ug,
  FULLWIDTHRIGHTPAREN: Lo,
  HYPHEN: Na,
  LEFTCORNERBRACKET: Po,
  LEFTWHITECORNERBRACKET: Fo,
  LOCALHOST: ts,
  NL: Wd,
  NUM: Kd,
  OPENANGLEBRACKET: No,
  OPENBRACE: Il,
  OPENBRACKET: Eo,
  OPENPAREN: xo,
  PERCENT: Pl,
  PIPE: Yo,
  PLUS: Zo,
  POUND: Xo,
  QUERY: Dl,
  QUOTE: Xd,
  RIGHTCORNERBRACKET: Do,
  RIGHTWHITECORNERBRACKET: Mo,
  SCHEME: Qs,
  SEMI: Jd,
  SLASH: ri,
  SLASH_SCHEME: Ar,
  SYM: Qo,
  TILDE: Fl,
  TLD: cd,
  UNDERSCORE: Jo,
  UTLD: dd,
  UWORD: ud,
  WORD: xi,
  WS: fd
});
const Ei = /[a-z]/, vl = new RegExp("\\p{L}", "u"), $c = new RegExp("\\p{Emoji}", "u"), $i = /\d/, xc = /\s/, Op = "\r", Oc = `
`, xC = "️", OC = "‍", Nc = "￼";
let Gs = null, Ks = null;
function NC(e = []) {
  const t = {};
  ka.groups = t;
  const a = new ka();
  Gs == null && (Gs = Np(SC)), Ks == null && (Ks = Np(CC)), me(a, "'", Bo), me(a, "{", Il), me(a, "}", Ll), me(a, "[", Eo), me(a, "]", $o), me(a, "(", xo), me(a, ")", Oo), me(a, "<", No), me(a, ">", Ro), me(a, "（", Io), me(a, "）", Lo), me(a, "「", Po), me(a, "」", Do), me(a, "『", Fo), me(a, "』", Mo), me(a, "＜", Uo), me(a, "＞", zo), me(a, "&", jo), me(a, "*", Ho), me(a, "@", bn), me(a, "`", qo), me(a, "^", Go), me(a, ":", ar), me(a, ",", Yd), me(a, "$", Ko), me(a, ".", ni), me(a, "=", Wo), me(a, "!", Zd), me(a, "-", Na), me(a, "%", Pl), me(a, "|", Yo), me(a, "+", Zo), me(a, "#", Xo), me(a, "?", Dl), me(a, '"', Xd), me(a, "/", ri), me(a, ";", Jd), me(a, "~", Fl), me(a, "_", Jo), me(a, "\\", Vo), me(a, "・", ug);
  const i = St(a, $i, Kd, {
    [rd]: !0
  });
  St(i, $i, i);
  const n = St(i, Ei, sg, {
    [Rl]: !0
  }), r = St(i, vl, og, {
    [_l]: !0
  }), s = St(a, Ei, xi, {
    [ld]: !0
  });
  St(s, $i, n), St(s, Ei, s), St(n, $i, n), St(n, Ei, n);
  const c = St(a, vl, ud, {
    [sd]: !0
  });
  St(c, Ei), St(c, $i, r), St(c, vl, c), St(r, $i, r), St(r, Ei), St(r, vl, r);
  const d = me(a, Oc, Wd, {
    [Ec]: !0
  }), _ = me(a, Op, fd, {
    [Ec]: !0
  }), v = St(a, xc, fd, {
    [Ec]: !0
  });
  me(a, Nc, v), me(_, Oc, d), me(_, Nc, v), St(_, xc, v), me(v, Op), me(v, Oc), St(v, xc, v), me(v, Nc, v);
  const y = St(a, $c, cg, {
    [lg]: !0
  });
  me(y, "#"), St(y, $c, y), me(y, xC, y);
  const m = me(y, OC);
  me(m, "#"), St(m, $c, y);
  const k = [[Ei, s], [$i, n]], S = [[Ei, null], [vl, c], [$i, r]];
  for (let C = 0; C < Gs.length; C++)
    cn(a, Gs[C], cd, xi, k);
  for (let C = 0; C < Ks.length; C++)
    cn(a, Ks[C], dd, ud, S);
  tr(cd, {
    tld: !0,
    ascii: !0
  }, t), tr(dd, {
    utld: !0,
    alpha: !0
  }, t), cn(a, "file", Qs, xi, k), cn(a, "mailto", Qs, xi, k), cn(a, "http", Ar, xi, k), cn(a, "https", Ar, xi, k), cn(a, "ftp", Ar, xi, k), cn(a, "ftps", Ar, xi, k), tr(Qs, {
    scheme: !0,
    ascii: !0
  }, t), tr(Ar, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((C, $) => C[0] > $[0] ? 1 : -1);
  for (let C = 0; C < e.length; C++) {
    const $ = e[C][0], P = e[C][1] ? {
      [TC]: !0
    } : {
      [AC]: !0
    };
    $.indexOf("-") >= 0 ? P[od] = !0 : Ei.test($) ? $i.test($) ? P[Rl] = !0 : P[ld] = !0 : P[rd] = !0, xp(a, $, $, P);
  }
  return xp(a, "localhost", ts, {
    ascii: !0
  }), a.jd = new ka(Qo), {
    start: a,
    tokens: Object.assign({
      groups: t
    }, dg)
  };
}
function fg(e, t) {
  const a = RC(t.replace(/[A-Z]/g, (c) => c.toLowerCase())), i = a.length, n = [];
  let r = 0, s = 0;
  for (; s < i; ) {
    let c = e, d = null, _ = 0, v = null, y = -1, m = -1;
    for (; s < i && (d = c.go(a[s])); )
      c = d, c.accepts() ? (y = 0, m = 0, v = c) : y >= 0 && (y += a[s].length, m++), _ += a[s].length, r += a[s].length, s++;
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
  const t = [], a = e.length;
  let i = 0;
  for (; i < a; ) {
    let n = e.charCodeAt(i), r, s = n < 55296 || n > 56319 || i + 1 === a || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(s), i += s.length;
  }
  return t;
}
function cn(e, t, a, i, n) {
  let r;
  const s = t.length;
  for (let c = 0; c < s - 1; c++) {
    const d = t[c];
    e.j[d] ? r = e.j[d] : (r = new ka(i), r.jr = n.slice(), e.j[d] = r), e = r;
  }
  return r = new ka(a), r.jr = n.slice(), e.j[t[s - 1]] = r, r;
}
function Np(e) {
  const t = [], a = [];
  let i = 0, n = "0123456789";
  for (; i < e.length; ) {
    let r = 0;
    for (; n.indexOf(e[i + r]) >= 0; )
      r++;
    if (r > 0) {
      t.push(a.join(""));
      for (let s = parseInt(e.substring(i, i + r), 10); s > 0; s--)
        a.pop();
      i += r;
    } else
      a.push(e[i]), i++;
  }
  return t;
}
const as = {
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
  let a = Object.assign({}, as);
  e && (a = Object.assign(a, e instanceof Qd ? e.o : e));
  const i = a.ignoreTags, n = [];
  for (let r = 0; r < i.length; r++)
    n.push(i[r].toUpperCase());
  this.o = a, t && (this.defaultRender = t), this.ignoreTags = n;
}
Qd.prototype = {
  o: as,
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
  get(e, t, a) {
    const i = t != null;
    let n = this.o[e];
    return n && (typeof n == "object" ? (n = a.t in n ? n[a.t] : as[e], typeof n == "function" && i && (n = n(t, a))) : typeof n == "function" && i && (n = n(t, a.t, a)), n);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(e, t, a) {
    let i = this.o[e];
    return typeof i == "function" && t != null && (i = i(t, a.t, a)), i;
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
    const t = this.toString(), a = e.get("truncate", t, this), i = e.get("format", t, this);
    return a && i.length > a ? i.substring(0, a) + "…" : i;
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
  toObject(e = as.defaultProtocol) {
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
    const t = this, a = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", a, this), n = e.get("tagName", a, t), r = this.toFormattedString(e), s = {}, c = e.get("className", a, t), d = e.get("target", a, t), _ = e.get("rel", a, t), v = e.getObj("attributes", a, t), y = e.getObj("events", a, t);
    return s.href = i, c && (s.class = c), d && (s.target = d), _ && (s.rel = _), v && Object.assign(s, v), {
      tagName: n,
      attributes: s,
      content: r,
      eventListeners: y
    };
  }
};
function Su(e, t) {
  class a extends hg {
    constructor(n, r) {
      super(n, r), this.t = e;
    }
  }
  for (const i in t)
    a.prototype[i] = t[i];
  return a.t = e, a;
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
  toHref(e = as.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== ts && e[1].t === ar;
  }
}), xa = (e) => new ka(e);
function PC({
  groups: e
}) {
  const t = e.domain.concat([jo, Ho, bn, Vo, qo, Go, Ko, Wo, Na, Kd, Pl, Yo, Zo, Xo, ri, Qo, Fl, Jo]), a = [Bo, ar, Yd, ni, Zd, Pl, Dl, Xd, Jd, No, Ro, Il, Ll, $o, Eo, xo, Oo, Io, Lo, Po, Do, Fo, Mo, Uo, zo], i = [jo, Bo, Ho, Vo, qo, Go, Ko, Wo, Na, Il, Ll, Pl, Yo, Zo, Xo, Dl, ri, Qo, Fl, Jo], n = xa(), r = me(n, Fl);
  We(r, i, r), We(r, e.domain, r);
  const s = xa(), c = xa(), d = xa();
  We(n, e.domain, s), We(n, e.scheme, c), We(n, e.slashscheme, d), We(s, i, r), We(s, e.domain, s);
  const _ = me(s, bn);
  me(r, bn, _), me(c, bn, _), me(d, bn, _);
  const v = me(r, ni);
  We(v, i, r), We(v, e.domain, r);
  const y = xa();
  We(_, e.domain, y), We(y, e.domain, y);
  const m = me(y, ni);
  We(m, e.domain, y);
  const k = xa(IC);
  We(m, e.tld, k), We(m, e.utld, k), me(_, ts, k);
  const S = me(y, Na);
  me(S, Na, S), We(S, e.domain, y), We(k, e.domain, y), me(k, ni, m), me(k, Na, S);
  const C = me(s, Na), $ = me(s, ni);
  me(C, Na, C), We(C, e.domain, s), We($, i, r), We($, e.domain, s);
  const L = xa(Ws);
  We($, e.tld, L), We($, e.utld, L), We(L, e.domain, s), We(L, i, r), me(L, ni, $), me(L, Na, C), me(L, bn, _);
  const P = me(L, ar), F = xa(Ws);
  We(P, e.numeric, F);
  const D = xa(Ws), fe = xa();
  We(D, t, D), We(D, a, fe), We(fe, t, D), We(fe, a, fe), me(L, ri, D), me(F, ri, D);
  const J = me(c, ar), x = me(d, ar), V = me(x, ri), W = me(V, ri);
  We(c, e.domain, s), me(c, ni, $), me(c, Na, C), We(d, e.domain, s), me(d, ni, $), me(d, Na, C), We(J, e.domain, D), me(J, ri, D), me(J, Dl, D), We(W, e.domain, D), We(W, t, D), me(W, ri, D);
  const Z = [
    [Il, Ll],
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
  for (let ie = 0; ie < Z.length; ie++) {
    const [B, q] = Z[ie], M = me(D, B);
    me(fe, B, M);
    const G = xa(Ws);
    We(M, t, G);
    const ee = xa();
    We(M, a, ee), me(M, q, D), We(G, t, G), We(G, a, ee), We(ee, t, G), We(ee, a, ee), me(G, q, D), me(ee, q, D);
  }
  return me(n, ts, L), me(n, Wd, LC), {
    start: n,
    tokens: dg
  };
}
function DC(e, t, a) {
  let i = a.length, n = 0, r = [], s = [];
  for (; n < i; ) {
    let c = e, d = null, _ = null, v = 0, y = null, m = -1;
    for (; n < i && !(d = c.go(a[n].t)); )
      s.push(a[n++]);
    for (; n < i && (_ = d || c.go(a[n].t)); )
      d = null, c = _, c.accepts() ? (m = 0, y = c) : m >= 0 && m++, n++, v++;
    if (m < 0)
      n -= v, n < i && (s.push(a[n]), n++);
    else {
      s.length > 0 && (r.push(Rc(Ip, t, s)), s = []), n -= m, v -= m;
      const k = y.t, S = a.slice(n - v, n);
      r.push(Rc(k, t, S));
    }
  }
  return s.length > 0 && r.push(Rc(Ip, t, s)), r;
}
function Rc(e, t, a) {
  const i = a[0].s, n = a[a.length - 1].e, r = t.slice(i, n);
  return new e(r, a);
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
  }, jC), a = pg(e), i = [];
  for (const n of a)
    n.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !n.isLink || !t.check(n) ? i.push(vo(n.toString())) : i.push(t.render(n));
  return i.join("");
}
function UC(e) {
  return e.replace(/"/g, "&quot;");
}
function zC(e) {
  const t = [];
  for (const a in e) {
    const i = e[a] + "";
    t.push(`${a}="${UC(i)}"`);
  }
  return t.join(" ");
}
function jC({ tagName: e, attributes: t, content: a }) {
  return `<${e} ${zC(t)}>${vo(a)}</${e}>`;
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
    return (a, i) => be((f(), p("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Q(o(e.name), 1)
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
    return (a, i) => (f(), p("div", {
      "aria-labelledby": u(t),
      class: "empty-content",
      role: "note"
    }, [
      a.$slots.icon ? (f(), p("div", GC, [
        He(a.$slots, "icon", {}, void 0, !0)
      ])) : A("", !0),
      e.name !== "" || a.$slots.name ? (f(), p("div", {
        key: 1,
        id: u(t),
        class: "empty-content__name"
      }, [
        He(a.$slots, "name", {}, () => [
          Q(o(e.name), 1)
        ], !0)
      ], 8, KC)) : A("", !0),
      e.description !== "" || a.$slots.description ? (f(), p("p", WC, [
        He(a.$slots, "description", {}, () => [
          Q(o(e.description), 1)
        ], !0)
      ])) : A("", !0),
      a.$slots.action ? (f(), p("div", YC, [
        He(a.$slots, "action", {}, void 0, !0)
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
}, QC = ["aria-hidden", "aria-label"], e2 = ["fill", "width", "height"], t2 = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, a2 = { key: 0 };
function i2(e, t, a, i, n, r) {
  return f(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (f(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", t2, [
        a.title ? (f(), p("title", a2, o(a.title), 1)) : A("", !0)
      ])
    ], 8, e2))
  ], 16, QC);
}
const n2 = /* @__PURE__ */ ut(JC, [["render", i2]]), r2 = {
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
function c2(e, t, a, i, n, r) {
  return f(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (f(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", o2, [
        a.title ? (f(), p("title", u2, o(a.title), 1)) : A("", !0)
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
function g2(e, t, a, i, n, r) {
  return f(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (f(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", v2, [
        a.title ? (f(), p("title", b2, o(a.title), 1)) : A("", !0)
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
    const t = Rv(e, "selected"), a = /* @__PURE__ */ j(!1);
    function i() {
      t.value = !0, a.value = !1, requestAnimationFrame(() => {
        a.value = !0;
      });
    }
    return (n, r) => (f(), p("button", {
      class: Te(["button-vue", [n.$style.sidebarTabsButton, {
        [n.$style.sidebarTabsButton_selected]: t.value,
        [n.$style.sidebarTabsButton_legacy]: u(En),
        [n.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      l("span", {
        class: Te([n.$style.sidebarTabsButton__icon, { [n.$style.sidebarTabsButton__icon_pop]: a.value }]),
        onAnimationend: r[0] || (r[0] = (s) => a.value = !1)
      }, [
        l("span", {
          class: Te([n.$style.sidebarTabsButton__iconLayer, { [n.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          de(nd, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: ke(() => [
              l("span", {
                class: Te([n.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        l("span", {
          class: Te([n.$style.sidebarTabsButton__iconLayer, { [n.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          de(nd, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: ke(() => [
              l("span", {
                class: Te([n.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      l("span", {
        class: Te(n.$style.sidebarTabsButton__name)
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
      this.tabs.push(e), this.tabs.sort((t, a) => t.order === a.order ? t.name.localeCompare(a.name, [U_()]) : t.order - a.order), this.updateActive();
    },
    /**
     * Unregister child tab from the tabs
     *
     * @param {string} id tab's id
     */
    unregisterTab(e) {
      const t = this.tabs.findIndex((a) => a.id === e);
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
      const t = e.getBoundingClientRect(), a = this.$refs.nav.getBoundingClientRect(), i = this.highlightVisible;
      this.highlightAnimated = i, this.highlightOverActive = e.getAttribute("aria-selected") === "true", this.highlightLeft = t.left - a.left, this.highlightTop = t.top - a.top, this.highlightWidth = t.width, this.highlightHeight = t.height, i || (this.highlightVisible = !0, this.$nextTick(() => requestAnimationFrame(() => {
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
function D2(e, t, a, i, n, r) {
  const s = Xe("NcAppSidebarTabsButton");
  return f(), p("div", P2, [
    r.hasMultipleTabs || r.showForSingleTab ? (f(), p("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Te(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": n.isLegacy34 }]),
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
      n.highlightEnabled ? (f(), p("div", {
        key: 0,
        class: Te(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": n.highlightVisible,
          "app-sidebar-tabs__highlight--animated": n.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": n.highlightOverActive
        }]),
        style: ha(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : A("", !0),
      (f(!0), p(K, null, oe(n.tabs, (c) => (f(), Pe(s, {
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
      class: Te(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      He(e.$slots, "default", {}, void 0, !0)
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
    NcButton: ci,
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
    const e = /* @__PURE__ */ j(null);
    return Ra("NcAppSidebar:header:ref", e), {
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
function K2(e, t, a, i, n, r) {
  const s = Xe("IconDockRight"), c = Xe("NcButton"), d = Xe("NcLoadingIcon"), _ = Xe("IconStar"), v = Xe("IconStarOutline"), y = Xe("NcAppSidebarHeader"), m = Xe("IconArrowRight"), k = Xe("NcActions"), S = Xe("IconClose"), C = Xe("NcAppSidebarTabs"), $ = Xe("NcEmptyContent"), L = Xf("focus"), P = Xf("click-outside");
  return f(), Pe(E1, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: ke(() => [
      be(l("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = ft((...F) => r.onKeydownEsc && r.onKeydownEsc(...F), ["esc"]))
      }, [
        r.ncContentSelector && !a.open && !a.noToggle ? (f(), Pe(Ed, {
          key: 0,
          to: r.ncContentSelector
        }, [
          de(c, aa({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", a.toggleClasses],
            variant: "tertiary"
          }, a.toggleAttrs, {
            onClick: t[0] || (t[0] = (F) => e.$emit("update:open", !0))
          }), {
            icon: ke(() => [
              He(e.$slots, "toggle-icon", {}, () => [
                de(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : A("", !0),
        l("header", {
          class: Te(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || a.background,
            "app-sidebar-header--compact": a.compact
          }])
        }, [
          a.empty ? (f(), Pe(y, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: a.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : He(e.$slots, "info", { key: 0 }, () => [
            l("div", z2, [
              r.isSlotPopulated(e.$slots.header?.()) || a.background ? (f(), p("div", {
                key: 0,
                class: Te(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: ha({
                  backgroundImage: `url(${a.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...F) => r.onFigureClick && r.onFigureClick(...F)),
                onKeydown: t[2] || (t[2] = ft((...F) => r.onFigureClick && r.onFigureClick(...F), ["enter"]))
              }, [
                He(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : A("", !0),
              l("div", {
                class: Te(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": a.nameEditable && !a.subname,
                  "app-sidebar-header__desc--with-subname--editable": a.nameEditable && a.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (f(), p("div", j2, [
                  He(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (f(), Pe(c, {
                      key: 0,
                      "aria-label": n.favoriteTranslated,
                      pressed: n.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Se(r.toggleStarred, ["prevent"])
                    }, {
                      icon: ke(() => [
                        a.starLoading ? (f(), Pe(d, { key: 0 })) : n.isStarred ? (f(), Pe(_, {
                          key: 1,
                          size: 20
                        })) : (f(), Pe(v, {
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
                    be(de(y, {
                      class: "app-sidebar-header__mainname",
                      name: a.name,
                      linkify: a.linkifyName,
                      title: a.title,
                      tabindex: a.nameEditable ? 0 : -1,
                      onClick: Se(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [rr, !a.nameEditable]
                    ]),
                    a.nameEditable ? be((f(), p("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Se((...F) => r.onSubmitName && r.onSubmitName(...F), ["prevent"]))
                    }, [
                      be(l("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: a.namePlaceholder,
                        value: a.name,
                        onKeydown: t[3] || (t[3] = ft(Se((...F) => r.onDismissEditing && r.onDismissEditing(...F), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...F) => r.onNameInput && r.onNameInput(...F))
                      }, null, 40, V2), [
                        [L]
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
                      [P, () => r.onSubmitName()]
                    ]) : A("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (f(), Pe(k, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: a.forceMenu
                    }, {
                      default: ke(() => [
                        He(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : A("", !0)
                  ]),
                  a.subname.trim() !== "" || e.$slots.subname ? (f(), p("p", {
                    key: 0,
                    title: a.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    He(e.$slots, "subname", {}, () => [
                      Q(o(a.subname), 1)
                    ], !0)
                  ], 8, q2)) : A("", !0)
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
            onClick: Se(r.closeSidebar, ["prevent"])
          }, {
            icon: ke(() => [
              de(S, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !a.empty ? (f(), p("div", G2, [
            He(e.$slots, "description", {}, void 0, !0)
          ])) : A("", !0)
        ], 2),
        be(de(C, {
          ref: "tabs",
          active: a.active,
          forceTabs: a.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: ke(() => [
            He(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [rr, !a.loading]
        ]),
        a.loading ? (f(), Pe($, { key: 1 }, {
          icon: ke(() => [
            de(d, { size: 64 })
          ]),
          _: 1
        })) : A("", !0)
      ], 40, U2), [
        [rr, a.open]
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
}, Q2 = { class: "action-link__name" }, eT = ["textContent"], tT = ["textContent"], aT = {
  key: 2,
  class: "action-link__text"
};
function iT(e, t, a, i, n, r) {
  return f(), p("li", {
    class: "action",
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("a", {
      download: a.download,
      href: a.href,
      "aria-label": e.ariaLabel,
      target: a.target,
      title: a.title,
      class: "action-link focusable",
      rel: "nofollow noreferrer noopener",
      role: r.isInSemanticMenu && "menuitem",
      onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s))
    }, [
      He(e.$slots, "icon", {}, () => [
        l("span", {
          "aria-hidden": "true",
          class: Te(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: ha({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (f(), p("span", J2, [
        l("strong", Q2, o(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: o(e.text)
        }, null, 8, eT)
      ])) : e.isLongText ? (f(), p("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: o(e.text)
      }, null, 8, tT)) : (f(), p("span", aT, o(e.text), 1)),
      A("", !0)
    ], 8, X2)
  ], 8, Z2);
}
const Ic = /* @__PURE__ */ ut(Y2, [["render", iT], ["__scopeId", "data-v-32f01b7a"]]);
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
    Ra(Pb, c), Ra(Db, "#content-vue"), Ra("appName", H(() => t.appName));
    const a = us(), i = /* @__PURE__ */ j(!1), n = /* @__PURE__ */ j(), r = H(() => n.value === "navigation" ? rT : nT);
    Cv(() => {
      const d = document.getElementById("skip-actions");
      d && (d.innerHTML = "", d.classList.add("vue-skip-actions"));
    });
    function s() {
      Mi("toggle-navigation", { open: !0 }), Pt(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function c(d) {
      i.value = d, n.value || (n.value = "navigation");
    }
    return (d, _) => (f(), p("div", {
      id: "content-vue",
      class: Te(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": u(En) }]])
    }, [
      (f(), Pe(Ed, { to: "#skip-actions" }, [
        l("div", lT, [
          l("div", sT, o(u(Ft)("Keyboard navigation help")), 1),
          l("div", oT, [
            be(de(ci, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Se(s, ["prevent"]),
              onFocusin: _[0] || (_[0] = (v) => n.value = "navigation"),
              onMouseover: _[1] || (_[1] = (v) => n.value = "navigation")
            }, {
              default: ke(() => [
                Q(o(u(Ft)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [rr, i.value]
            ]),
            de(ci, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: _[2] || (_[2] = (v) => n.value = "content"),
              onMouseover: _[3] || (_[3] = (v) => n.value = "content")
            }, {
              default: ke(() => [
                Q(o(u(Ft)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          be(de(mu, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [rr, !u(a)]
          ])
        ])
      ])),
      He(d.$slots, "default", {}, void 0, !0)
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
    const t = e, a = /* @__PURE__ */ j(!1), i = /* @__PURE__ */ j(!1), n = /* @__PURE__ */ j(!1), r = /* @__PURE__ */ j(!1), s = /* @__PURE__ */ j([]), c = /* @__PURE__ */ j(!1), d = /* @__PURE__ */ j(0);
    async function _() {
      a.value = !a.value, !(!a.value || i.value || n.value) && await v();
    }
    async function v() {
      if (!n.value) {
        n.value = !0, r.value = !1;
        try {
          const y = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(d.value) }), m = await fetch(`${t.childrenUrl}?${y}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!m.ok) throw new Error("Shelf children request failed");
          const k = await m.json(), S = Array.isArray(k?.nodes) ? k.nodes : [];
          s.value.push(...S), c.value = k?.hasMore === !0, d.value = Number.isInteger(k?.nextOffset) ? k.nextOffset : s.value.length, i.value = !c.value;
        } catch {
          r.value = !0;
        } finally {
          n.value = !1;
        }
      }
    }
    return (y, m) => {
      const k = Xe("ShelfTreeNode", !0);
      return f(), p("li", dT, [
        e.node.hasChildren ? (f(), p("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(a.value),
          "aria-label": a.value ? u(g)("library", "Collapse {folder}", { folder: e.node.label }) : u(g)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: _
        }, o(a.value ? "−" : "+"), 9, fT)) : A("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", pT, [
            l("strong", null, [
              l("bdi", vT, o(e.node.label), 1)
            ]),
            l("span", null, o(u(At)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", bT, [
            l("bdi", gT, o(e.node.path), 1)
          ])
        ], 8, hT),
        n.value ? (f(), p("small", mT, o(u(g)("library", "Loading folders…")), 1)) : r.value ? (f(), p("small", yT, o(u(g)("library", "Could not load folders.")), 1)) : A("", !0),
        a.value && s.value.length ? (f(), p("ul", _T, [
          (f(!0), p(K, null, oe(s.value, (S) => (f(), Pe(k, {
            key: S.id,
            node: S,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : A("", !0),
        a.value && c.value ? (f(), p("button", {
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
    const t = e, a = /* @__PURE__ */ j(null), i = /* @__PURE__ */ j(typeof IntersectionObserver > "u"), n = /* @__PURE__ */ j("loading");
    let r;
    return Ge(() => t.src, () => {
      n.value = "loading";
    }), Ct(() => {
      i.value || (r = new IntersectionObserver((s) => {
        s.some((c) => c.isIntersecting) && (i.value = !0, r.disconnect());
      }, { rootMargin: "240px" }), r.observe(a.value));
    }), Ca(() => r?.disconnect()), (s, c) => (f(), p("span", {
      ref_key: "frame",
      ref: a,
      class: Te(["library-cover-frame", { "library-cover-frame--error": n.value === "error" }])
    }, [
      n.value === "loading" ? (f(), p("span", ST)) : A("", !0),
      (f(), p("img", {
        key: e.src,
        class: Te(["library-cover-image", { "library-cover-image--loaded": n.value === "loaded" }]),
        src: i.value ? e.src : void 0,
        alt: "",
        loading: "lazy",
        decoding: "async",
        onLoad: c[0] || (c[0] = (d) => n.value = "loaded"),
        onError: c[1] || (c[1] = (d) => n.value = "error")
      }, null, 42, CT)),
      n.value === "error" ? (f(), p("span", TT, o(u(g)("library", "Cover unavailable")), 1)) : A("", !0)
    ], 2));
  }
};
async function Lp(e = "", t = "", a = null) {
  const i = await fetch(`${Et("/apps/library/api/lists")}${e}`, {
    method: a === null ? "GET" : "POST",
    credentials: "same-origin",
    cache: "no-store",
    headers: { Accept: "application/json", ...a === null ? {} : { "Content-Type": "application/json", requesttoken: t } },
    ...a === null ? {} : { body: JSON.stringify(a) }
  });
  if (!i.ok) {
    const n = i.status === 409 ? g("library", "This list changed in another tab. Reload the list before trying again. Your unsaved text is still here.") : i.status === 404 ? g("library", "This list or entry is no longer available.") : i.status === 422 ? g("library", "Check the name, text length and selected books, then try again.") : g("library", "Could not save or load the list. Check your connection and reload before retrying."), r = new Error(n);
    throw r.status = i.status, r;
  }
  return i.json();
}
const Yn = /* @__PURE__ */ new Map();
function mn(e = "", t = "", a = null) {
  if (a !== null)
    return Yn.clear(), Lp(e, t, a).finally(() => Yn.clear());
  if (Yn.has(e)) return Yn.get(e);
  const i = Lp(e, t).finally(() => {
    Yn.get(e) === i && Yn.delete(e);
  });
  return Yn.set(e, i), i;
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
    const a = e, i = t, n = /* @__PURE__ */ j([]), r = /* @__PURE__ */ j(""), s = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j(""), d = /* @__PURE__ */ j("");
    async function _() {
      s.value = !0, c.value = "";
      try {
        const y = await mn(a.itemIds.length === 1 ? `?itemId=${a.itemIds[0]}` : "");
        n.value = y.lists;
        const m = Number(r.value) || a.preferredListId || Number(new URLSearchParams(window.location.search).get("addToList"));
        r.value = String(n.value.find((k) => k.id === m)?.id || n.value[0]?.id || "");
      } catch (y) {
        c.value = y.message;
      } finally {
        s.value = !1;
      }
    }
    async function v() {
      const y = n.value.find((k) => k.id === Number(r.value));
      if (s.value || !y || a.itemIds.length === 0) return;
      const m = [...a.itemIds];
      s.value = !0, c.value = "", d.value = "";
      try {
        const k = await mn(`/${y.id}/actions`, a.requestToken, { action: "add", revision: y.revision, itemIds: m });
        y.revision = k.revision, d.value = g("library", "Added: {added}. Already in list: {present}. Unavailable: {skipped}.", { added: k.added, present: k.alreadyPresent, skipped: k.skipped }), m.length === 1 && k.skipped === 0 && (y.containsItem = !0), i("added", k);
      } catch (k) {
        c.value = k.message;
      } finally {
        s.value = !1;
      }
    }
    return Ge(() => a.itemIds.join(","), () => {
      d.value = "";
    }), Ct(_), (y, m) => (f(), p("div", {
      class: "library-add-to-list",
      "aria-busy": s.value ? "true" : "false"
    }, [
      l("div", ET, [
        n.value.length ? be((f(), p("select", {
          key: 0,
          "onUpdate:modelValue": m[0] || (m[0] = (k) => r.value = k),
          disabled: s.value,
          "aria-label": u(g)("library", "Choose a list"),
          onChange: m[1] || (m[1] = (k) => d.value = "")
        }, [
          (f(!0), p(K, null, oe(n.value, (k) => (f(), p("option", {
            key: k.id,
            value: String(k.id)
          }, o(k.name), 9, xT))), 128))
        ], 40, $T)), [
          [it, r.value]
        ]) : A("", !0),
        n.value.length ? (f(), p("button", {
          key: 1,
          type: "button",
          class: "button primary",
          disabled: s.value || e.itemIds.length === 0 || !r.value,
          onClick: v
        }, o(u(g)("library", "Add to list")), 9, OT)) : A("", !0),
        !s.value && !n.value.length && !c.value ? (f(), p("a", {
          key: 2,
          href: `${e.listsUrl}&new=1`
        }, o(u(g)("library", "Create a new list")), 9, NT)) : A("", !0),
        d.value && r.value ? (f(), p("a", {
          key: 3,
          href: `${e.listsUrl}&listId=${r.value}`
        }, o(u(g)("library", "Back to list")), 9, RT)) : A("", !0)
      ]),
      s.value ? (f(), p("p", IT, o(u(g)("library", "Loading or saving…")), 1)) : A("", !0),
      c.value ? (f(), p("p", LT, o(c.value), 1)) : A("", !0),
      c.value ? (f(), p("button", {
        key: 2,
        type: "button",
        class: "button secondary",
        disabled: s.value,
        onClick: _
      }, o(u(g)("library", "Reload list")), 9, PT)) : A("", !0),
      d.value ? (f(), p("p", DT, o(d.value), 1)) : A("", !0)
    ], 8, AT));
  }
}, FT = ["onKeydown"], MT = ["aria-label", "aria-describedby"], UT = ["id"], Be = {
  __name: "LabelHelp",
  props: { text: { type: String, required: !0 } },
  setup(e) {
    const t = Ay(), a = /* @__PURE__ */ j(null), i = /* @__PURE__ */ j(null), n = /* @__PURE__ */ j(!1), r = /* @__PURE__ */ j({});
    let s;
    const c = `${t}-label`;
    Ct(() => {
      const $ = a.value?.closest("label"), L = $?.querySelector("input, select, textarea"), P = a.value?.closest("h1, h2, h3, h4");
      $ && L && !$.htmlFor && (L.id ||= `${t}-control`, $.htmlFor = L.id);
      for (const F of [L, P])
        F && !F.hasAttribute("aria-label") && !F.hasAttribute("aria-labelledby") && F.setAttribute("aria-labelledby", c);
    });
    async function d() {
      clearTimeout(s), n.value = !0, await Pt(), _();
    }
    function _() {
      if (!a.value || !i.value) return;
      const $ = a.value.getBoundingClientRect(), L = i.value.offsetHeight;
      r.value = { left: `${Math.max(8, Math.min($.left, window.innerWidth - 336))}px`, top: `${Math.max(8, $.bottom + L + 12 < window.innerHeight ? $.bottom + 8 : $.top - L - 8)}px` };
    }
    function v() {
      clearTimeout(s);
    }
    function y() {
      clearTimeout(s), n.value = !1;
    }
    function m() {
      s = setTimeout(() => {
        a.value?.contains(document.activeElement) || y();
      }, 150);
    }
    function k($) {
      !a.value?.contains($.target) && !i.value?.contains($.target) && y();
    }
    function S($) {
      $.key === "Escape" && y();
    }
    function C($) {
      n.value && (!($.target instanceof Node) || !i.value?.contains($.target)) && _();
    }
    return document.addEventListener("keydown", S), document.addEventListener("pointerdown", k), window.addEventListener("scroll", C, !0), Ca(() => {
      clearTimeout(s), document.removeEventListener("pointerdown", k), window.removeEventListener("scroll", C, !0), document.removeEventListener("keydown", S);
    }), ($, L) => (f(), p("span", {
      ref_key: "anchor",
      ref: a,
      class: "library-label-help",
      onPointerenter: L[0] || (L[0] = (P) => P.pointerType !== "touch" && d()),
      onPointerleave: m,
      onKeydown: ft(Se(y, ["stop", "prevent"]), ["esc"])
    }, [
      l("span", { id: c }, [
        He($.$slots, "default")
      ]),
      l("button", {
        type: "button",
        class: "library-label-help-button",
        "aria-label": u(g)("library", "Help"),
        "aria-describedby": n.value ? u(t) : void 0,
        onFocus: d,
        onBlur: m,
        onClick: Se(d, ["stop", "prevent"])
      }, "?", 40, MT),
      (f(), Pe(Ed, { to: "body" }, [
        n.value ? (f(), p("span", {
          key: 0,
          id: u(t),
          ref_key: "popup",
          ref: i,
          class: "library-label-help-popup",
          role: "tooltip",
          style: ha(r.value),
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
}, tA = ["href"], aA = ["disabled"], iA = ["disabled"], nA = ["aria-label"], rA = ["disabled"], lA = ["disabled"], sA = {
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
    const a = e, i = t, n = /* @__PURE__ */ j([]), r = /* @__PURE__ */ j(null), s = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j(""), d = /* @__PURE__ */ j(""), _ = /* @__PURE__ */ j(!1), v = /* @__PURE__ */ Lt({ name: "", description: "" }), y = /* @__PURE__ */ j(null), m = /* @__PURE__ */ j(""), k = /* @__PURE__ */ j(!1), S = /* @__PURE__ */ j(null), C = /* @__PURE__ */ j(null), $ = /* @__PURE__ */ j(null), L = /* @__PURE__ */ j(Number(new URLSearchParams(window.location.search).get("listId")) || null), P = Number(new URLSearchParams(window.location.search).get("addItem")) || null, F = H(() => !s.value && y.value === null);
    async function D(B = 1, q = _.value) {
      s.value = !0, c.value = "";
      try {
        L.value ? r.value = await mn(`/${L.value}?page=${B}`) : n.value = (await mn()).lists, q || (y.value = null, _.value = !1);
      } catch (M) {
        c.value = M.message;
      } finally {
        s.value = !1;
      }
    }
    function fe() {
      v.name = r.value?.list.name || "", v.description = r.value?.list.description || "", _.value = !0, k.value = !1, c.value = "";
    }
    async function J() {
      s.value = !0, c.value = "", d.value = "";
      try {
        if (r.value)
          await mn(`/${r.value.list.id}/actions`, a.requestToken, { action: "update", revision: r.value.list.revision, ...v });
        else {
          L.value = (await mn("", a.requestToken, v)).list.id;
          const B = new URL(window.location.href);
          B.searchParams.set("listId", L.value), window.history.replaceState({}, "", B);
        }
        _.value = !1, await D(1, !0), i("changed"), d.value = g("library", "List saved."), await Pt(), $.value?.focus();
      } catch (B) {
        c.value = B.message;
      } finally {
        s.value = !1;
      }
    }
    async function x(B, q) {
      s.value = !0, c.value = "", d.value = "";
      try {
        const M = await mn(`/${r.value.list.id}/actions`, a.requestToken, { ...B, revision: r.value.list.revision });
        if (B.action === "delete") {
          r.value = null, L.value = null, k.value = !1;
          const G = new URL(window.location.href);
          G.searchParams.delete("listId"), window.history.replaceState({}, "", G);
        }
        if (y.value = null, S.value = null, B.action === "note") {
          const G = r.value.entries.find((ee) => ee.id === B.entryId);
          G && (G.note = B.note.trim()), r.value.list.revision = M.revision;
        } else await D(r.value?.page || 1);
        B.action === "delete" && i("changed"), d.value = q, await Pt(), B.action === "move" ? document.getElementById(`library-list-entry-${B.entryId}`)?.focus() : $.value?.focus();
      } catch (M) {
        c.value = M.message;
      } finally {
        s.value = !1;
      }
    }
    function V(B) {
      y.value = B.id, m.value = B.note, S.value = null;
    }
    function W(B, q) {
      return x({ action: "move", entryId: B.id, direction: q }, g("library", "Reading order saved."));
    }
    function Z(B, q) {
      C.value = q.id, B.dataTransfer.setData("text/plain", String(q.id));
    }
    function ie(B) {
      if (C.value === null || !F.value) return;
      const q = C.value;
      return C.value = null, x({ action: "move", entryId: q, beforeId: B }, g("library", "Reading order saved."));
    }
    return Ct(async () => {
      await D(), !L.value && new URLSearchParams(window.location.search).get("new") === "1" && fe();
    }), (B, q) => (f(), p("section", {
      class: "library-personal-lists",
      "aria-label": u(g)("library", "Personal lists"),
      "aria-busy": s.value ? "true" : "false"
    }, [
      l("header", jT, [
        l("div", null, [
          L.value ? (f(), p("a", {
            key: 0,
            href: e.listsUrl
          }, "← " + o(u(g)("library", "All lists")), 9, BT)) : A("", !0),
          l("h1", {
            ref_key: "heading",
            ref: $,
            tabindex: "-1"
          }, [
            de(Be, {
              text: u(g)("library", "Private reading lists, in your own order, with your own notes.")
            }, {
              default: ke(() => [
                Q(o(r.value?.list.name || u(g)("library", "Lists")), 1)
              ]),
              _: 1
            }, 8, ["text"])
          ], 512)
        ]),
        !r.value && !L.value ? (f(), p("button", {
          key: 0,
          type: "button",
          class: "button primary",
          disabled: s.value || _.value,
          onClick: fe
        }, o(u(g)("library", "New list")), 9, HT)) : A("", !0)
      ]),
      c.value ? (f(), p("p", VT, o(c.value), 1)) : A("", !0),
      c.value ? (f(), p("button", {
        key: 1,
        type: "button",
        class: "button secondary",
        disabled: s.value,
        onClick: q[0] || (q[0] = (M) => D(r.value?.page || 1, !0))
      }, o(u(g)("library", "Reload list")), 9, qT)) : A("", !0),
      d.value ? (f(), p("p", GT, o(d.value), 1)) : A("", !0),
      s.value ? (f(), p("p", KT, o(u(g)("library", "Loading or saving…")), 1)) : A("", !0),
      _.value ? (f(), p("form", {
        key: 4,
        class: "library-list-editor",
        onSubmit: Se(J, ["prevent"])
      }, [
        l("label", null, [
          Q(o(u(g)("library", "List name")), 1),
          be(l("input", {
            "onUpdate:modelValue": q[1] || (q[1] = (M) => v.name = M),
            required: "",
            maxlength: "120",
            disabled: s.value
          }, null, 8, WT), [
            [Ue, v.name]
          ])
        ]),
        l("label", null, [
          Q(o(u(g)("library", "Description / list note")), 1),
          be(l("textarea", {
            "onUpdate:modelValue": q[2] || (q[2] = (M) => v.description = M),
            rows: "3",
            maxlength: "10000",
            disabled: s.value
          }, null, 8, YT), [
            [Ue, v.description]
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
            onClick: q[3] || (q[3] = (M) => _.value = !1)
          }, o(u(g)("library", "Cancel")), 9, JT)
        ])
      ], 32)) : A("", !0),
      r.value ? (f(), p(K, { key: 5 }, [
        r.value.list.description && !_.value ? (f(), p("p", QT, o(r.value.list.description), 1)) : A("", !0),
        _.value ? A("", !0) : (f(), p("div", eA, [
          l("a", {
            class: "button primary",
            href: `${e.catalogueUrl}?addToList=${r.value.list.id}`
          }, o(u(g)("library", "Add books from catalogue")), 9, tA),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !F.value,
            onClick: fe
          }, o(u(g)("library", "Edit list")), 9, aA),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !F.value,
            onClick: q[4] || (q[4] = (M) => k.value = !k.value)
          }, o(u(g)("library", "Delete list")), 9, iA)
        ])),
        k.value ? (f(), p("div", {
          key: 2,
          class: "library-list-confirm",
          role: "group",
          "aria-label": u(g)("library", "Confirm list deletion")
        }, [
          l("p", null, o(u(g)("library", "Delete this list and all its notes? Books stay in your library. This cannot be undone.")), 1),
          l("button", {
            class: "button",
            type: "button",
            disabled: !F.value,
            onClick: q[5] || (q[5] = (M) => x({ action: "delete" }, u(g)("library", "List deleted.")))
          }, o(u(g)("library", "Delete list and notes")), 9, rA),
          l("button", {
            class: "button secondary",
            type: "button",
            disabled: s.value,
            onClick: q[6] || (q[6] = (M) => k.value = !1)
          }, o(u(g)("library", "Cancel")), 9, lA)
        ], 8, nA)) : A("", !0),
        r.value.total === 0 && !s.value ? (f(), p("p", sA, o(u(g)("library", "This list is empty. Select books in the catalogue and choose Add to list.")), 1)) : A("", !0),
        l("ol", {
          class: "library-list-entries",
          start: (r.value.page - 1) * 25 + 1
        }, [
          (f(!0), p(K, null, oe(r.value.entries, (M) => (f(), p("li", {
            id: `library-list-entry-${M.id}`,
            key: M.id,
            class: "library-list-entry",
            tabindex: "-1",
            onDragover: q[11] || (q[11] = Se(() => {
            }, ["prevent"])),
            onDrop: Se((G) => ie(M.id), ["prevent"])
          }, [
            l("div", cA, [
              l("span", {
                class: "library-list-drag",
                draggable: F.value,
                title: u(g)("library", "Drag to reorder, or use Move up and Move down"),
                "aria-hidden": "true",
                onDragstart: (G) => Z(G, M),
                onDragend: q[7] || (q[7] = (G) => C.value = null)
              }, "⠿", 40, dA),
              M.book ? (f(), p("img", {
                key: 0,
                src: M.book.coverUrl,
                alt: "",
                width: "48",
                height: "64",
                loading: "lazy"
              }, null, 8, fA)) : A("", !0),
              l("div", hA, [
                M.book ? (f(), p("h2", pA, [
                  l("a", {
                    href: M.book.detailsUrl,
                    dir: "auto"
                  }, o(M.book.title), 9, vA)
                ])) : (f(), p("h2", bA, o(u(g)("library", "Unavailable book")), 1)),
                M.book?.creators ? (f(), p("p", gA, o(M.book.creators), 1)) : A("", !0),
                M.book ? A("", !0) : (f(), p("p", mA, o(u(g)("library", "The file is missing or access is unavailable. Your note and place in the list are kept.")), 1))
              ]),
              M.book ? (f(), p("a", {
                key: 1,
                class: "button secondary",
                href: M.book.openUrl
              }, o(u(g)("library", "Open")), 9, yA)) : A("", !0)
            ]),
            M.note && y.value !== M.id ? (f(), p("p", _A, o(M.note), 1)) : A("", !0),
            y.value === M.id ? (f(), p("form", {
              key: 1,
              class: "library-list-editor",
              onSubmit: Se((G) => x({ action: "note", entryId: M.id, note: m.value }, u(g)("library", "Note saved.")), ["prevent"])
            }, [
              l("label", null, [
                Q(o(u(g)("library", "Your note for this book in this list")), 1),
                be(l("textarea", {
                  "onUpdate:modelValue": q[8] || (q[8] = (G) => m.value = G),
                  maxlength: "10000",
                  rows: "3",
                  disabled: s.value
                }, null, 8, kA), [
                  [Ue, m.value]
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
                  onClick: q[9] || (q[9] = (G) => y.value = null)
                }, o(u(g)("library", "Cancel")), 9, TA)
              ])
            ], 40, wA)) : (f(), p("div", AA, [
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !F.value,
                onClick: (G) => V(M)
              }, o(M.note ? u(g)("library", "Edit note") : u(g)("library", "Add note")), 9, EA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !F.value || M.number === 1,
                onClick: (G) => W(M, "up")
              }, o(u(g)("library", "Move up")), 9, $A),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !F.value || M.number === r.value.total,
                onClick: (G) => W(M, "down")
              }, o(u(g)("library", "Move down")), 9, xA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !F.value,
                onClick: (G) => S.value = M.id
              }, o(u(g)("library", "Remove from list")), 9, OA)
            ])),
            S.value === M.id ? (f(), p("div", NA, [
              l("p", null, o(u(g)("library", "Remove this entry and its note? The book stays in your library.")), 1),
              l("button", {
                type: "button",
                class: "button",
                disabled: !F.value,
                onClick: (G) => x({ action: "remove", entryId: M.id }, u(g)("library", "Book removed from list."))
              }, o(u(g)("library", "Remove entry and note")), 9, RA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: s.value,
                onClick: q[10] || (q[10] = (G) => S.value = null)
              }, o(u(g)("library", "Cancel")), 9, IA)
            ])) : A("", !0)
          ], 40, uA))), 128))
        ], 8, oA),
        r.value.pages > 1 ? (f(), p("nav", {
          key: 4,
          class: "library-list-actions",
          "aria-label": u(g)("library", "List pages")
        }, [
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !F.value || r.value.page === 1,
            onClick: q[12] || (q[12] = (M) => D(r.value.page - 1))
          }, o(u(g)("library", "Previous page")), 9, PA),
          l("span", null, o(u(g)("library", "Page {page} of {pages}", { page: r.value.page, pages: r.value.pages })), 1),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !F.value || r.value.page === r.value.pages,
            onClick: q[13] || (q[13] = (M) => D(r.value.page + 1))
          }, o(u(g)("library", "Next page")), 9, DA)
        ], 8, LA)) : A("", !0)
      ], 64)) : L.value ? A("", !0) : (f(), p(K, { key: 6 }, [
        u(P) ? (f(), Pe(hd, {
          key: 0,
          "item-ids": [u(P)],
          "request-token": e.requestToken,
          "lists-url": e.listsUrl,
          onAdded: q[14] || (q[14] = (M) => D())
        }, null, 8, ["item-ids", "request-token", "lists-url"])) : A("", !0),
        !n.value.length && !s.value && !_.value ? (f(), p("p", FA, o(u(g)("library", "Create your first list for a reading plan, a project or books to return to.")), 1)) : A("", !0),
        l("ul", MA, [
          (f(!0), p(K, null, oe(n.value, (M) => (f(), p("li", {
            key: M.id
          }, [
            l("a", {
              href: `${e.listsUrl}&listId=${M.id}`
            }, [
              l("h2", zA, o(M.name), 1),
              l("p", null, o(u(g)("library", "Books: {count}", { count: M.count })), 1),
              M.description ? (f(), p("p", jA, o(M.description), 1)) : A("", !0)
            ], 8, UA)
          ]))), 128))
        ])
      ], 64))
    ], 8, zT));
  }
}, tf = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [i, n] of t)
    a[i] = n;
  return a;
}, HA = ["aria-busy"], VA = ["href"], qA = { id: "author-conflicts-heading" }, GA = {
  key: 0,
  role: "status"
}, KA = {
  key: 1,
  role: "status"
}, WA = {
  key: 2,
  role: "alert"
}, YA = ["disabled"], ZA = ["aria-label"], XA = { class: "author-conflict-comparison" }, JA = { dir: "auto" }, QA = { dir: "auto" }, eE = { key: 0 }, tE = { key: 0 }, aE = { class: "author-conflict-actions" }, iE = ["disabled"], nE = ["disabled"], rE = ["disabled"], lE = { key: 0 }, sE = { class: "author-conflict-books" }, oE = ["href"], uE = ["disabled", "onClick"], cE = ["aria-label"], dE = ["disabled"], fE = ["disabled"], hE = {
  __name: "AuthorConflicts",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, a = /* @__PURE__ */ j(null), i = /* @__PURE__ */ j(null), n = /* @__PURE__ */ j(!1), r = /* @__PURE__ */ j(""), s = /* @__PURE__ */ j(""), c = /* @__PURE__ */ j(1), d = /* @__PURE__ */ j(null);
    async function _(k, S = null) {
      const C = await fetch(Et("/apps/library/api/authors/conflicts") + k, {
        credentials: "same-origin",
        cache: "no-store",
        method: S === null ? "GET" : "POST",
        headers: { Accept: "application/json", ...S === null ? {} : { "Content-Type": "application/json", requesttoken: t.requestToken } },
        ...S === null ? {} : { body: JSON.stringify(S) }
      });
      if (!C.ok) throw new Error(C.status === 409 ? g("library", "This book or its author assignments changed. Reload and review again.") : g("library", "Could not load or resolve the author change. Please retry."));
      return C.json();
    }
    async function v(k = 1) {
      n.value = !0, r.value = "", i.value = null;
      try {
        a.value = await _(`?page=${k}`), c.value = k;
      } catch (S) {
        r.value = S.message;
      } finally {
        n.value = !1;
      }
    }
    async function y(k) {
      n.value = !0, r.value = "", s.value = "", i.value = null;
      try {
        i.value = await _(`/${k.id}`), await Pt(), d.value?.focus();
      } catch (S) {
        r.value = S.message;
      } finally {
        n.value = !1;
      }
    }
    async function m(k) {
      n.value = !0, r.value = "";
      try {
        await _(`/${i.value.id}`, { choice: k, token: i.value.token }), s.value = g("library", "Author change resolved. Book metadata and files are unchanged."), await v(c.value), !a.value.books.length && c.value > 1 && await v(c.value - 1);
      } catch (S) {
        r.value = S.message, i.value = null;
      } finally {
        n.value = !1;
      }
    }
    return Ct(() => v()), (k, S) => (f(), p("section", {
      class: "author-conflicts",
      "aria-busy": n.value,
      "aria-labelledby": "author-conflicts-heading"
    }, [
      l("a", {
        href: `${e.catalogueUrl}?authors=1`
      }, o(u(g)("library", "All authors")), 9, VA),
      l("h1", qA, o(u(g)("library", "Review imported author changes")), 1),
      n.value ? (f(), p("p", GA, o(u(g)("library", "Loading")), 1)) : A("", !0),
      s.value ? (f(), p("p", KA, o(s.value), 1)) : A("", !0),
      r.value ? (f(), p("p", WA, [
        Q(o(r.value) + " ", 1),
        l("button", {
          disabled: n.value,
          onClick: S[0] || (S[0] = (C) => v(c.value))
        }, o(u(g)("library", "Reload")), 9, YA)
      ])) : A("", !0),
      i.value ? (f(), p("section", {
        key: 3,
        class: "author-conflict-review",
        "aria-label": u(g)("library", "Review change")
      }, [
        l("h2", {
          ref_key: "heading",
          ref: d,
          tabindex: "-1",
          dir: "auto"
        }, o(i.value.title), 513),
        l("div", XA, [
          l("section", null, [
            l("h3", null, o(u(g)("library", "Current assignments")), 1),
            l("ol", null, [
              (f(!0), p(K, null, oe(i.value.current, (C, $) => (f(), p("li", { key: $ }, [
                l("strong", JA, o(C.name), 1),
                l("span", QA, o(u(g)("library", "Original credit: {credit}", { credit: C.credit })), 1)
              ]))), 128))
            ]),
            i.value.current.length ? A("", !0) : (f(), p("p", eE, o(u(g)("library", "No authors recorded")), 1))
          ]),
          l("section", null, [
            l("h3", null, o(u(g)("library", "Imported credits")), 1),
            l("ol", null, [
              (f(!0), p(K, null, oe(i.value.incoming, (C, $) => (f(), p("li", {
                key: $,
                dir: "auto"
              }, o(C), 1))), 128))
            ]),
            i.value.incoming.length ? A("", !0) : (f(), p("p", tE, o(u(g)("library", "No authors recorded")), 1))
          ])
        ]),
        l("p", null, o(u(g)("library", "Using imported authors replaces this book’s current assignments. Book metadata and files stay unchanged. This decision has no automatic undo.")), 1),
        l("div", aE, [
          l("button", {
            disabled: n.value,
            onClick: S[1] || (S[1] = (C) => m("keep"))
          }, o(u(g)("library", "Keep current assignments")), 9, iE),
          l("button", {
            disabled: n.value,
            onClick: S[2] || (S[2] = (C) => m("import"))
          }, o(u(g)("library", "Use imported authors")), 9, nE),
          l("button", {
            disabled: n.value,
            onClick: S[3] || (S[3] = (C) => i.value = null)
          }, o(u(g)("library", "Cancel")), 9, rE)
        ])
      ], 8, ZA)) : a.value ? (f(), p(K, { key: 4 }, [
        a.value.books.length ? A("", !0) : (f(), p("p", lE, o(u(g)("library", "No author changes need review.")), 1)),
        l("ul", sE, [
          (f(!0), p(K, null, oe(a.value.books, (C) => (f(), p("li", {
            key: C.id
          }, [
            l("a", {
              href: u(Et)("/apps/library/items/{id}", { id: C.id }),
              dir: "auto"
            }, o(C.title), 9, oE),
            l("button", {
              disabled: n.value,
              onClick: ($) => y(C)
            }, o(u(g)("library", "Review change")), 9, uE)
          ]))), 128))
        ]),
        l("nav", {
          "aria-label": u(g)("library", "Author pages")
        }, [
          l("button", {
            disabled: n.value || c.value === 1,
            onClick: S[4] || (S[4] = (C) => v(c.value - 1))
          }, o(u(g)("library", "Previous")), 9, dE),
          l("span", null, o(u(g)("library", "Page {page}", { page: c.value })), 1),
          l("button", {
            disabled: n.value || !a.value.hasNext,
            onClick: S[5] || (S[5] = (C) => v(c.value + 1))
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
}, VE = ["disabled"], qE = ["disabled"], GE = { for: "author-display" }, KE = ["disabled"], WE = { for: "author-sort" }, YE = ["disabled"], ZE = { for: "author-given" }, XE = ["disabled"], JE = { for: "author-family" }, QE = ["disabled"], e$ = { for: "author-bio" }, t$ = ["disabled"], a$ = { for: "author-photo" }, i$ = ["disabled"], n$ = { key: 0 }, r$ = ["disabled"], l$ = ["disabled"], s$ = ["disabled"], o$ = {
  key: 6,
  class: "author-actions"
}, u$ = ["disabled"], c$ = ["aria-label"], d$ = { role: "status" }, f$ = { for: "target-search" }, h$ = ["disabled"], p$ = ["disabled"], v$ = ["disabled"], b$ = { for: "target-author" }, g$ = ["disabled"], m$ = { value: "" }, y$ = ["value"], _$ = ["disabled"], w$ = ["disabled"], k$ = ["aria-label"], S$ = { key: 0 }, C$ = ["disabled"], T$ = ["aria-label"], A$ = { for: "author-book-search" }, E$ = ["disabled"], $$ = ["disabled"], x$ = { for: "author-book-sort" }, O$ = ["disabled"], N$ = { value: "title" }, R$ = { value: "newest" }, I$ = { value: "series" }, L$ = { class: "author-view-controls" }, P$ = ["aria-pressed"], D$ = ["aria-pressed"], F$ = { key: 0 }, M$ = { key: 1 }, U$ = { key: 0 }, z$ = ["value", "aria-label", "disabled"], j$ = ["href", "aria-label"], B$ = { class: "author-book-description" }, H$ = ["href"], V$ = {
  key: 0,
  dir: "auto"
}, q$ = { key: 1 }, G$ = { key: 2 }, K$ = {
  key: 3,
  dir: "auto"
}, W$ = {
  key: 6,
  class: "author-history",
  open: ""
}, Y$ = ["data-author-task-id"], Z$ = ["disabled", "onClick"], X$ = { key: 1 }, J$ = {
  key: 7,
  class: "author-history"
}, Q$ = ["data-operation-id"], ex = { key: 0 }, tx = ["disabled", "onClick"], ax = ["aria-label"], ix = ["disabled"], nx = ["disabled"], rx = {
  __name: "Authors",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, a = /* @__PURE__ */ j(null), i = /* @__PURE__ */ j(!1), n = /* @__PURE__ */ j(""), r = /* @__PURE__ */ j(""), s = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j([]), d = /* @__PURE__ */ j(""), _ = /* @__PURE__ */ j([]), v = /* @__PURE__ */ j(""), y = /* @__PURE__ */ j(null), m = /* @__PURE__ */ j(!1), k = /* @__PURE__ */ j([]), S = /* @__PURE__ */ j([]), C = H(() => S.value.filter((I) => I.status !== "completed" && I.status !== "cancelled"));
    let $ = null;
    const L = /* @__PURE__ */ j(""), P = /* @__PURE__ */ j(!1), F = /* @__PURE__ */ j(1), D = new URLSearchParams(location.search).get("authorConflicts") === "1", fe = /* @__PURE__ */ j(Number(new URLSearchParams(location.search).get("authorId")) || null), J = /* @__PURE__ */ j(""), x = /* @__PURE__ */ j("title"), V = /* @__PURE__ */ j("grid"), W = /* @__PURE__ */ j(!1), Z = /* @__PURE__ */ j(!1), ie = /* @__PURE__ */ j(null), B = /* @__PURE__ */ j(!1), q = /* @__PURE__ */ Lt({ display_name: "", sort_name: "", given_name: "", family_name: "", biography: "" }), M = H(() => (a.value?.author?.display_name || "").trim().split(/\s+/u).slice(0, 2).map((I) => Array.from(I)[0] || "").join("").toLocaleUpperCase()), G = H(() => Et("/apps/library/api/authors/{id}/photo", { id: fe.value }) + "?v=" + encodeURIComponent(a.value?.author?.photo_key || "")), ee = H(() => {
      if (x.value !== "series") return [{ name: null, books: a.value?.books || [] }];
      const I = /* @__PURE__ */ new Map();
      for (const N of a.value?.books || []) {
        const O = N.series_name || "";
        I.has(O) || I.set(O, []), I.get(O).push(N);
      }
      return Array.from(I, ([N, O]) => ({ name: N, books: O }));
    });
    function ne(I) {
      return Et("/apps/library/items/{id}/cover", { id: I.id }) + "?v=" + encodeURIComponent(`${I.cover_revision || ""}-${I.etag || ""}`);
    }
    function X(I) {
      ie.value = I.target.files?.[0] || null, ie.value && (B.value = !1);
    }
    async function le(I, N = null) {
      const O = await fetch(Et("/apps/library/api/authors") + I, {
        credentials: "same-origin",
        cache: "no-store",
        method: N === null ? "GET" : "POST",
        headers: { Accept: "application/json", ...N === null ? {} : { ...N instanceof FormData ? {} : { "Content-Type": "application/json" }, requesttoken: t.requestToken } },
        ...N === null ? {} : { body: N instanceof FormData ? N : JSON.stringify(N) }
      });
      if (!O.ok && (await O.clone().json().catch(() => ({}))).error === "invalid_photo") throw new Error(g("library", "Choose a valid JPEG, PNG or WebP image up to 10 MiB."));
      if (!O.ok) throw new Error(O.status === 413 ? g("library", "This change exceeds the supported size. Reassign books in smaller groups.") : O.status === 503 ? g("library", "Author migration must finish before editing. Refresh to check progress.") : O.status === 409 ? g("library", "The author or affected books changed. Reload and review again. Your draft is preserved.") : g("library", "Could not load or save the author. Check the fields and reload before retrying."));
      return O.json();
    }
    async function _e(I = 1) {
      i.value = !0, n.value = "";
      try {
        a.value = await le(fe.value ? `/${fe.value}?page=${I}&search=${encodeURIComponent(J.value.trim())}&sort=${x.value}` : `?page=${I}&search=${encodeURIComponent(L.value.trim())}&unused=${P.value ? 1 : 0}`), F.value = I, y.value = null, c.value = [], Z.value = !1, k.value = await le("/history"), S.value = await le("/tasks"), Re();
      } catch (N) {
        n.value = N.message;
      } finally {
        i.value = !1;
      }
    }
    function Re() {
      $ !== null && clearTimeout($), $ = null, S.value.some((I) => I.status === "queued" || I.status === "running") && ($ = setTimeout($e, 5e3));
    }
    async function $e() {
      $ = null;
      try {
        const I = S.value.some((N) => N.status === "queued" || N.status === "running");
        if (S.value = await le("/tasks"), I && !S.value.some((N) => N.status === "queued" || N.status === "running")) {
          await _e(F.value);
          return;
        }
      } catch (I) {
        n.value = I.message;
      }
      Re();
    }
    function Me(I) {
      return I.status === "queued" ? g("library", "Queued") : I.status === "running" ? g("library", "Running") : I.status === "conflict" ? g("library", "Needs review") : g("library", "Failed");
    }
    function Ze() {
      for (const I of Object.keys(q)) q[I] = a.value.author[I] || "";
      s.value = !0, r.value = "", ie.value = null, B.value = !1;
    }
    async function ct() {
      i.value = !0, n.value = "";
      try {
        const I = new FormData();
        for (const [N, O] of Object.entries(q)) I.set(N, O);
        I.set("revision", String(a.value.author.revision)), I.set("remove_photo", B.value ? "1" : "0"), ie.value && I.set("photo", ie.value), await le(`/${fe.value}`, I), s.value = !1, Z.value = !1, await _e(1), r.value = g("library", "Author saved. Original book credits are preserved.");
      } catch (I) {
        n.value = I.message;
      } finally {
        i.value = !1;
      }
    }
    function ye() {
      m.value = !1, y.value = null, c.value = [];
    }
    async function Ne() {
      i.value = !0, n.value = "", y.value = null;
      try {
        _.value = (await le(`?search=${encodeURIComponent(d.value.trim())}`)).authors.filter((I) => Number(I.id) !== fe.value), v.value = "";
      } catch (I) {
        n.value = I.message;
      } finally {
        i.value = !1;
      }
    }
    async function ge() {
      i.value = !0, n.value = "", y.value = null;
      try {
        const I = await le("", { name: d.value.trim() });
        _.value = [I], v.value = String(I.id);
      } catch (I) {
        n.value = I.message;
      } finally {
        i.value = !1;
      }
    }
    async function De() {
      i.value = !0, n.value = "", y.value = null;
      try {
        y.value = await le(`/${fe.value}/preview`, { target: Number(v.value), items: c.value });
      } catch (I) {
        n.value = I.message;
      } finally {
        i.value = !1;
      }
    }
    async function nt() {
      i.value = !0, n.value = "";
      try {
        const I = await le(`/${fe.value}/assign`, { target: Number(v.value), items: c.value, token: y.value.token });
        r.value = I.queued ? g("library", "Author change queued. The books will update together when the background job finishes.") : g("library", "Author assignments saved. Original credits are preserved. Undo is available in Recent changes."), m.value = !1, y.value = null, await _e(F.value);
      } catch (I) {
        n.value = I.message;
      } finally {
        i.value = !1;
      }
    }
    async function te(I) {
      i.value = !0, n.value = "";
      try {
        const N = await le(`/history/${I.id}/undo`, {});
        r.value = N.queued ? g("library", "Author undo queued. The books will update together when the background job finishes.") : g("library", "Author change undone."), await _e(F.value);
      } catch (N) {
        n.value = N.message;
      } finally {
        i.value = !1;
      }
    }
    async function T(I) {
      i.value = !0, n.value = "";
      try {
        await le(`/tasks/${I.id}/cancel`, {}), await _e(F.value);
      } catch (N) {
        n.value = N.message;
      } finally {
        i.value = !1;
      }
    }
    async function R(I) {
      i.value = !0, n.value = "";
      try {
        await le(`/${I.id}/remove-unused`, { revision: Number(I.revision) }), r.value = g("library", "Unused author removed."), await _e(F.value);
      } catch (N) {
        n.value = N.message;
      } finally {
        i.value = !1;
      }
    }
    return Ct(() => {
      D || _e();
    }), Dr(() => {
      $ !== null && clearTimeout($);
    }), (I, N) => D ? (f(), Pe(pE, {
      key: 0,
      "request-token": e.requestToken,
      "catalogue-url": e.catalogueUrl
    }, null, 8, ["request-token", "catalogue-url"])) : (f(), p("section", {
      key: 1,
      class: "library-authors",
      "aria-busy": i.value,
      "aria-labelledby": "authors-heading"
    }, [
      fe.value ? (f(), p("a", {
        key: 0,
        href: `${e.catalogueUrl}?authors=1`
      }, o(u(g)("library", "All authors")), 9, bE)) : A("", !0),
      l("header", gE, [
        fe.value && a.value?.author ? (f(), p("div", mE, [
          a.value.author.photo_key && !Z.value ? (f(), p("img", {
            key: a.value.author.photo_key,
            src: G.value,
            alt: u(g)("library", "Portrait of {author}", { author: a.value.author.display_name }),
            onError: N[0] || (N[0] = (O) => Z.value = !0)
          }, null, 40, yE)) : (f(), p("span", _E, o(M.value), 1))
        ])) : A("", !0),
        l("h1", wE, o(a.value?.author?.display_name || u(g)("library", "Authors")), 1)
      ]),
      n.value ? (f(), p("p", kE, [
        Q(o(n.value) + " ", 1),
        l("button", {
          disabled: i.value,
          onClick: N[1] || (N[1] = (O) => _e(F.value))
        }, o(u(g)("library", "Reload")), 9, SE)
      ])) : A("", !0),
      r.value ? (f(), p("p", CE, o(r.value), 1)) : A("", !0),
      i.value ? (f(), p("p", TE, o(u(g)("library", "Loading")), 1)) : A("", !0),
      fe.value ? a.value?.author ? (f(), p(K, { key: 5 }, [
        l("p", null, o(u(At)("library", "%n book", "%n books", a.value.bookCount)), 1),
        a.value.bookCount ? (f(), p("p", DE, [
          l("a", {
            href: `${e.catalogueUrl}?authorId=${fe.value}`
          }, o(u(g)("library", "Browse this author in the catalogue")), 9, FE)
        ])) : A("", !0),
        a.value.author.biography && !s.value ? (f(), p("section", ME, [
          l("h2", null, o(u(g)("library", "Biography")), 1),
          l("p", UE, o(W.value || a.value.author.biography.length <= 320 ? a.value.author.biography : a.value.author.biography.slice(0, 280) + "…"), 1),
          a.value.author.biography.length > 320 ? (f(), p("button", {
            key: 0,
            "aria-expanded": W.value,
            onClick: N[6] || (N[6] = (O) => W.value = !W.value)
          }, o(W.value ? u(g)("library", "Show less") : u(g)("library", "Show more")), 9, zE)) : A("", !0)
        ])) : A("", !0),
        a.value.author.merged_into ? (f(), p("p", jE, [
          l("a", {
            href: `${e.catalogueUrl}?authors=1&authorId=${a.value.author.merged_into}`
          }, o(u(g)("library", "Open merged author")), 9, BE)
        ])) : A("", !0),
        !a.value.canEdit && !a.value.author.merged_into ? (f(), p("p", HE, [
          Q(o(u(g)("library", "Author migration must finish before editing. Refresh to check progress.")) + " ", 1),
          l("button", {
            disabled: i.value,
            onClick: N[7] || (N[7] = (O) => _e(F.value))
          }, o(u(g)("library", "Refresh")), 9, VE)
        ])) : A("", !0),
        !s.value && !m.value ? (f(), p("button", {
          key: 4,
          disabled: i.value || !a.value.canEdit,
          onClick: Ze
        }, o(u(g)("library", "Edit author")), 9, qE)) : A("", !0),
        s.value ? (f(), p("form", {
          key: 5,
          class: "author-editor",
          onSubmit: Se(ct, ["prevent"])
        }, [
          l("p", null, o(u(g)("library", "This edits the shared author record. Book credits and files stay unchanged.")), 1),
          l("label", GE, o(u(g)("library", "Preferred name")), 1),
          be(l("input", {
            id: "author-display",
            "onUpdate:modelValue": N[8] || (N[8] = (O) => q.display_name = O),
            maxlength: "255",
            required: "",
            disabled: i.value
          }, null, 8, KE), [
            [Ue, q.display_name]
          ]),
          l("label", WE, [
            Q(o(u(g)("library", "Sort name")) + " ", 1),
            de(Be, {
              text: u(g)("library", "For example: Doe, John. Controls author directory ordering.")
            }, null, 8, ["text"])
          ]),
          be(l("input", {
            id: "author-sort",
            "onUpdate:modelValue": N[9] || (N[9] = (O) => q.sort_name = O),
            maxlength: "255",
            required: "",
            disabled: i.value
          }, null, 8, YE), [
            [Ue, q.sort_name]
          ]),
          l("label", ZE, [
            Q(o(u(g)("library", "Given name")) + " ", 1),
            de(Be, {
              text: u(g)("library", "Optional. Leave empty for organisations or names you cannot safely split.")
            }, null, 8, ["text"])
          ]),
          be(l("input", {
            id: "author-given",
            "onUpdate:modelValue": N[10] || (N[10] = (O) => q.given_name = O),
            maxlength: "255",
            disabled: i.value
          }, null, 8, XE), [
            [Ue, q.given_name]
          ]),
          l("label", JE, o(u(g)("library", "Family name")), 1),
          be(l("input", {
            id: "author-family",
            "onUpdate:modelValue": N[11] || (N[11] = (O) => q.family_name = O),
            maxlength: "255",
            disabled: i.value
          }, null, 8, QE), [
            [Ue, q.family_name]
          ]),
          l("label", e$, [
            Q(o(u(g)("library", "Biography")) + " ", 1),
            de(Be, {
              text: u(g)("library", "Optional plain text, up to 10,000 characters. This profile is private to your account.")
            }, null, 8, ["text"])
          ]),
          be(l("textarea", {
            id: "author-bio",
            "onUpdate:modelValue": N[12] || (N[12] = (O) => q.biography = O),
            maxlength: "10000",
            rows: "5",
            disabled: i.value
          }, null, 8, t$), [
            [Ue, q.biography]
          ]),
          l("label", a$, [
            Q(o(u(g)("library", "Author photo")) + " ", 1),
            de(Be, {
              text: u(g)("library", "JPEG, PNG or WebP, up to 10 MiB. Saved as a small square portrait; the original upload is discarded.")
            }, null, 8, ["text"])
          ]),
          l("input", {
            id: "author-photo",
            type: "file",
            accept: "image/jpeg,image/png,image/webp",
            disabled: i.value,
            onChange: X
          }, null, 40, i$),
          a.value.author.photo_key ? (f(), p("label", n$, [
            be(l("input", {
              "onUpdate:modelValue": N[13] || (N[13] = (O) => B.value = O),
              type: "checkbox",
              disabled: i.value || !!ie.value
            }, null, 8, r$), [
              [ui, B.value]
            ]),
            Q(" " + o(u(g)("library", "Remove photo")), 1)
          ])) : A("", !0),
          l("div", null, [
            l("button", {
              class: "primary",
              disabled: i.value,
              type: "submit"
            }, o(u(g)("library", "Save author")), 9, l$),
            N[29] || (N[29] = Q()),
            l("button", {
              disabled: i.value,
              type: "button",
              onClick: N[14] || (N[14] = (O) => s.value = !1)
            }, o(u(g)("library", "Cancel")), 9, s$)
          ])
        ], 32)) : A("", !0),
        !s.value && !m.value ? (f(), p("details", o$, [
          l("summary", null, o(u(g)("library", "More actions")), 1),
          l("button", {
            disabled: i.value || !a.value.canEdit,
            onClick: N[15] || (N[15] = (O) => m.value = !0)
          }, o(u(g)("library", "Merge or reassign")), 9, u$)
        ])) : A("", !0),
        m.value ? (f(), p("section", {
          key: 7,
          class: "author-assignment",
          "aria-label": u(g)("library", "Merge or reassign")
        }, [
          l("label", null, [
            Q(o(u(g)("library", "Books to change")) + " ", 1),
            de(Be, {
              text: u(g)("library", "Leave all books unselected to merge this author. Select individual books below to reassign only those credits, keeping both authors.")
            }, null, 8, ["text"])
          ]),
          l("p", d$, o(c.value.length ? u(At)("library", "%n selected book", "%n selected books", c.value.length) : u(g)("library", "Merge all books into the chosen author")), 1),
          l("form", {
            class: "author-search",
            onSubmit: Se(Ne, ["prevent"])
          }, [
            l("label", f$, o(u(g)("library", "Find destination author")), 1),
            be(l("input", {
              id: "target-search",
              "onUpdate:modelValue": N[16] || (N[16] = (O) => d.value = O),
              type: "search",
              maxlength: "255",
              disabled: i.value
            }, null, 8, h$), [
              [Ue, d.value]
            ]),
            l("button", { disabled: i.value }, o(u(g)("library", "Search")), 9, p$)
          ], 32),
          l("div", null, [
            l("button", {
              disabled: i.value || !d.value.trim(),
              onClick: ge
            }, o(u(g)("library", "Create separate author")), 9, v$),
            N[30] || (N[30] = Q()),
            de(Be, {
              text: u(g)("library", "Creates a new person using the entered name, even if someone with that name already exists.")
            }, null, 8, ["text"])
          ]),
          l("label", b$, o(u(g)("library", "Destination author")), 1),
          be(l("select", {
            id: "target-author",
            "onUpdate:modelValue": N[17] || (N[17] = (O) => v.value = O),
            disabled: i.value,
            onChange: N[18] || (N[18] = (O) => y.value = null)
          }, [
            l("option", m$, o(u(g)("library", "Choose an author")), 1),
            (f(!0), p(K, null, oe(_.value, (O) => (f(), p("option", {
              key: O.id,
              value: O.id
            }, o(O.display_name) + " — " + o(O.sort_name) + " (#" + o(O.id) + ")", 9, y$))), 128))
          ], 40, g$), [
            [it, v.value]
          ]),
          l("div", null, [
            l("button", {
              disabled: i.value || !v.value,
              onClick: De
            }, o(u(g)("library", "Review change")), 9, _$),
            N[31] || (N[31] = Q()),
            l("button", {
              disabled: i.value,
              onClick: ye
            }, o(u(g)("library", "Cancel")), 9, w$)
          ]),
          y.value ? (f(), p("section", {
            key: 0,
            class: "author-review",
            "aria-label": u(g)("library", "Review change")
          }, [
            l("h2", null, o(y.value.source) + " → " + o(y.value.target), 1),
            l("p", null, o(y.value.merge ? u(g)("library", "Merge these authors. Future imports of the old name will use the destination author.") : u(g)("library", "Reassign these books. Both author records remain available.")), 1),
            l("p", null, o(u(At)("library", "%n book", "%n books", y.value.bookCount)), 1),
            y.value.queued ? (f(), p("p", S$, o(u(g)("library", "The first 20 books are shown. This change will run in the background.")), 1)) : A("", !0),
            l("ul", null, [
              (f(!0), p(K, null, oe(y.value.books, (O) => (f(), p("li", {
                key: O.id
              }, o(O.title) + " — " + o(u(g)("library", "Original credit: {credit}", { credit: O.credit || "—" })), 1))), 128))
            ]),
            l("button", {
              class: "primary",
              disabled: i.value,
              onClick: nt
            }, o(u(g)("library", "Confirm author change")), 9, C$)
          ], 8, k$)) : A("", !0)
        ], 8, c$)) : A("", !0),
        l("section", {
          class: "author-catalogue",
          "aria-label": u(g)("library", "Books in your library")
        }, [
          l("h2", null, o(u(g)("library", "Books in your library")), 1),
          l("form", {
            class: "author-book-controls",
            onSubmit: N[24] || (N[24] = Se((O) => _e(1), ["prevent"]))
          }, [
            l("label", A$, o(u(g)("library", "Search titles")), 1),
            be(l("input", {
              id: "author-book-search",
              "onUpdate:modelValue": N[19] || (N[19] = (O) => J.value = O),
              type: "search",
              maxlength: "255",
              disabled: i.value || s.value
            }, null, 8, E$), [
              [Ue, J.value]
            ]),
            l("button", {
              disabled: i.value || s.value
            }, o(u(g)("library", "Search")), 9, $$),
            l("label", x$, o(u(g)("library", "Sort")), 1),
            be(l("select", {
              id: "author-book-sort",
              "onUpdate:modelValue": N[20] || (N[20] = (O) => x.value = O),
              disabled: i.value || s.value,
              onChange: N[21] || (N[21] = (O) => _e(1))
            }, [
              l("option", N$, o(u(g)("library", "Title")), 1),
              l("option", R$, o(u(g)("library", "Publication date, newest first")), 1),
              l("option", I$, o(u(g)("library", "Series, then title")), 1)
            ], 40, O$), [
              [it, x.value]
            ]),
            l("div", L$, [
              l("button", {
                type: "button",
                "aria-pressed": V.value === "grid",
                onClick: N[22] || (N[22] = (O) => V.value = "grid")
              }, o(u(g)("library", "Covers")), 9, P$),
              N[32] || (N[32] = Q()),
              l("button", {
                type: "button",
                "aria-pressed": V.value === "list",
                onClick: N[23] || (N[23] = (O) => V.value = "list")
              }, o(u(g)("library", "List")), 9, D$)
            ])
          ], 32),
          J.value ? (f(), p("p", F$, o(u(At)("library", "%n book", "%n books", a.value.matchingCount)), 1)) : A("", !0),
          a.value.books.length ? A("", !0) : (f(), p("p", M$, o(u(g)("library", "No books match this view.")), 1)),
          (f(!0), p(K, null, oe(ee.value, (O) => (f(), p("section", {
            key: O.name ?? "all",
            class: "author-book-group"
          }, [
            O.name !== null ? (f(), p("h3", U$, o(O.name || u(g)("library", "No series recorded")), 1)) : A("", !0),
            l("ul", {
              class: Te(["author-books", { "author-books-grid": V.value === "grid" }])
            }, [
              (f(!0), p(K, null, oe(O.books, (Y) => (f(), p("li", {
                key: Y.id
              }, [
                m.value ? be((f(), p("input", {
                  key: 0,
                  "onUpdate:modelValue": N[25] || (N[25] = (ae) => c.value = ae),
                  type: "checkbox",
                  value: Number(Y.id),
                  "aria-label": u(g)("library", "Select {title}", { title: Y.title }),
                  disabled: i.value,
                  onChange: N[26] || (N[26] = (ae) => y.value = null)
                }, null, 40, z$)), [
                  [ui, c.value]
                ]) : A("", !0),
                l("a", {
                  class: "author-book-cover",
                  href: u(Et)("/apps/library/items/{id}", { id: Y.id }),
                  "aria-label": Y.title
                }, [
                  de(ef, {
                    src: ne(Y)
                  }, null, 8, ["src"])
                ], 8, j$),
                l("div", B$, [
                  l("a", {
                    class: "author-book-title",
                    href: u(Et)("/apps/library/items/{id}", { id: Y.id }),
                    dir: "auto"
                  }, o(Y.title), 9, H$),
                  Y.series_name ? (f(), p("span", V$, [
                    Q(o(Y.series_name), 1),
                    Y.series_number ? (f(), p(K, { key: 0 }, [
                      Q(" · " + o(Y.series_number), 1)
                    ], 64)) : A("", !0)
                  ])) : A("", !0),
                  Y.publication_date ? (f(), p("span", q$, o(Y.publication_date), 1)) : A("", !0),
                  l("span", null, o(Y.extension?.toUpperCase()), 1),
                  Y.scan_status === "missing" ? (f(), p("span", G$, o(u(g)("library", "File missing")), 1)) : A("", !0),
                  m.value ? (f(), p("span", K$, o(u(g)("library", "Original credit: {credit}", { credit: Y.creators || "—" })), 1)) : A("", !0)
                ])
              ]))), 128))
            ], 2)
          ]))), 128))
        ], 8, T$)
      ], 64)) : A("", !0) : (f(), p(K, { key: 4 }, [
        l("form", {
          class: "author-search",
          onSubmit: N[4] || (N[4] = Se((O) => _e(1), ["prevent"]))
        }, [
          l("label", AE, [
            Q(o(u(g)("library", "Search authors")) + " ", 1),
            de(Be, {
              text: u(g)("library", "Matches the beginning of the preferred name or sort name.")
            }, null, 8, ["text"])
          ]),
          be(l("input", {
            id: "author-search",
            "onUpdate:modelValue": N[2] || (N[2] = (O) => L.value = O),
            maxlength: "255",
            type: "search"
          }, null, 512), [
            [Ue, L.value]
          ]),
          l("label", null, [
            be(l("input", {
              "onUpdate:modelValue": N[3] || (N[3] = (O) => P.value = O),
              type: "checkbox"
            }, null, 512), [
              [ui, P.value]
            ]),
            Q(" " + o(u(g)("library", "Unused authors")), 1)
          ]),
          l("button", {
            disabled: i.value,
            type: "submit"
          }, o(u(g)("library", "Search")), 9, EE)
        ], 32),
        a.value?.migration && (a.value.migration.pending || a.value.migration.failed || a.value.migration.conflict) ? (f(), p("p", $E, [
          Q(o(u(g)("library", "Author migration: {pending} pending, {failed} failed, {conflict} need review.", a.value.migration)) + " ", 1),
          a.value.migration.conflict ? (f(), p("a", {
            key: 0,
            href: `${e.catalogueUrl}?authors=1&authorConflicts=1`
          }, o(u(g)("library", "Review imported author changes")), 9, xE)) : A("", !0),
          l("button", {
            disabled: i.value,
            onClick: N[5] || (N[5] = (O) => _e(F.value))
          }, o(u(g)("library", "Refresh")), 9, OE)
        ])) : A("", !0),
        a.value ? (f(), p("ul", NE, [
          (f(!0), p(K, null, oe(a.value.authors, (O) => (f(), p("li", {
            key: O.id
          }, [
            l("a", {
              href: `${e.catalogueUrl}?authors=1&authorId=${O.id}`,
              dir: "auto"
            }, o(O.display_name), 9, RE),
            l("span", IE, o(O.sort_name), 1),
            l("span", null, o(u(At)("library", "%n book", "%n books", Number(O.book_count))), 1),
            P.value && Number(O.book_count) === 0 ? (f(), p("button", {
              key: 0,
              disabled: i.value || a.value.migration.pending || a.value.migration.failed,
              onClick: (Y) => R(O)
            }, o(u(g)("library", "Remove unused author")), 9, LE)) : A("", !0)
          ]))), 128))
        ])) : A("", !0),
        a.value && !a.value.authors.length ? (f(), p("p", PE, o(u(g)("library", "No authors found.")), 1)) : A("", !0)
      ], 64)),
      C.value.length ? (f(), p("details", W$, [
        l("summary", null, o(u(g)("library", "Background author changes")), 1),
        l("ul", null, [
          (f(!0), p(K, null, oe(C.value, (O) => (f(), p("li", {
            key: O.id,
            "data-author-task-id": O.id
          }, [
            l("span", null, o(Me(O)) + " · " + o(u(At)("library", "%n book", "%n books", Number(O.book_count))), 1),
            O.status === "queued" ? (f(), p("button", {
              key: 0,
              disabled: i.value,
              onClick: (Y) => T(O)
            }, o(u(g)("library", "Cancel")), 9, Z$)) : A("", !0),
            O.status === "conflict" || O.status === "failed" ? (f(), p("span", X$, o(u(g)("library", "Review the author and try again. No books were changed by this task.")), 1)) : A("", !0)
          ], 8, Y$))), 128))
        ])
      ])) : A("", !0),
      k.value.length ? (f(), p("details", J$, [
        l("summary", null, o(u(g)("library", "Recent changes")), 1),
        l("ul", null, [
          (f(!0), p(K, null, oe(k.value, (O) => (f(), p("li", {
            key: O.id,
            "data-operation-id": O.id
          }, [
            l("span", null, o(O.source) + " → " + o(O.target) + " · " + o(u(At)("library", "%n book", "%n books", Number(O.books))), 1),
            Number(O.undone) ? (f(), p("span", ex, o(u(g)("library", "Undone")), 1)) : (f(), p("button", {
              key: 1,
              disabled: i.value,
              onClick: (Y) => te(O)
            }, o(u(g)("library", "Undo")), 9, tx))
          ], 8, Q$))), 128))
        ])
      ])) : A("", !0),
      a.value ? (f(), p("nav", {
        key: 8,
        class: "author-pagination",
        "aria-label": u(g)("library", "Author pages")
      }, [
        l("button", {
          disabled: i.value || s.value || F.value === 1,
          onClick: N[27] || (N[27] = (O) => _e(F.value - 1))
        }, o(u(g)("library", "Previous")), 9, ix),
        l("span", null, o(u(g)("library", "Page {page}", { page: F.value })), 1),
        l("button", {
          disabled: i.value || s.value || !a.value.hasNext,
          onClick: N[28] || (N[28] = (O) => _e(F.value + 1))
        }, o(u(g)("library", "Next")), 9, nx)
      ], 8, ax)) : A("", !0)
    ], 8, vE));
  }
}, lx = /* @__PURE__ */ tf(rx, [["__scopeId", "data-v-e6ada8fd"]]), sx = ["aria-busy"], ox = ["href"], ux = { id: "library-series-heading" }, cx = {
  key: 1,
  role: "alert"
}, dx = ["disabled"], fx = {
  key: 2,
  role: "status"
}, hx = {
  key: 3,
  role: "status"
}, px = { for: "series-search" }, vx = ["disabled"], bx = {
  key: 0,
  role: "status"
}, gx = ["disabled"], mx = {
  key: 1,
  class: "series-directory"
}, yx = ["href"], _x = { key: 2 }, wx = {
  key: 0,
  class: "series-description",
  dir: "auto"
}, kx = { key: 1 }, Sx = ["href"], Cx = ["disabled"], Tx = { for: "series-name" }, Ax = ["disabled"], Ex = { for: "series-description" }, $x = ["disabled"], xx = ["disabled"], Ox = ["disabled"], Nx = { class: "series-books" }, Rx = { key: 0 }, Ix = ["href"], Lx = { dir: "auto" }, Px = { key: 1 }, Dx = ["aria-label"], Fx = ["disabled"], Mx = ["disabled"], Ux = {
  __name: "Series",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, a = Number(new URLSearchParams(location.search).get("seriesId")) || null, i = /* @__PURE__ */ j(null), n = /* @__PURE__ */ j(1), r = /* @__PURE__ */ j(""), s = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j(""), d = /* @__PURE__ */ j(""), _ = /* @__PURE__ */ j(!1), v = /* @__PURE__ */ Lt({ name: "", description: "" });
    async function y($, L = null) {
      const P = await fetch(Et("/apps/library/api/series") + $, {
        credentials: "same-origin",
        cache: "no-store",
        method: L === null ? "GET" : "POST",
        headers: { Accept: "application/json", ...L === null ? {} : { "Content-Type": "application/json", requesttoken: t.requestToken } },
        ...L === null ? {} : { body: JSON.stringify(L) }
      });
      if (!P.ok) throw new Error(P.status === 409 ? g("library", "This series changed. Reload and review your edit.") : g("library", "Could not load or save the series."));
      return P.json();
    }
    async function m($ = 1) {
      s.value = !0, c.value = "";
      try {
        i.value = await y(a ? `/${a}?page=${$}` : `?page=${$}&search=${encodeURIComponent(r.value.trim())}`), n.value = $;
      } catch (L) {
        c.value = L.message;
      } finally {
        s.value = !1;
      }
    }
    function k() {
      v.name = i.value.series.display_name, v.description = i.value.series.description || "", _.value = !0, d.value = "";
    }
    async function S() {
      s.value = !0, c.value = "";
      try {
        i.value = await y(`/${a}`, { name: v.name, description: v.description, revision: Number(i.value.series.revision) }), _.value = !1, d.value = g("library", "Series saved. Original book metadata is preserved.");
      } catch ($) {
        c.value = $.message;
      } finally {
        s.value = !1;
      }
    }
    function C($) {
      return Et("/apps/library/items/{id}/cover", { id: $.id }) + "?v=" + encodeURIComponent(`${$.cover_revision || ""}-${$.etag || ""}`);
    }
    return Ct(() => m()), ($, L) => (f(), p("section", {
      class: "library-series",
      "aria-busy": s.value,
      "aria-labelledby": "library-series-heading"
    }, [
      u(a) ? (f(), p("a", {
        key: 0,
        href: `${e.catalogueUrl}?series=1`
      }, o(u(g)("library", "All series")), 9, ox)) : A("", !0),
      l("h1", ux, o(i.value?.series?.display_name || u(g)("library", "Series")), 1),
      c.value ? (f(), p("p", cx, [
        Q(o(c.value) + " ", 1),
        l("button", {
          disabled: s.value,
          onClick: L[0] || (L[0] = (P) => m(n.value))
        }, o(u(g)("library", "Reload")), 9, dx)
      ])) : A("", !0),
      d.value ? (f(), p("p", fx, o(d.value), 1)) : A("", !0),
      s.value ? (f(), p("p", hx, o(u(g)("library", "Loading")), 1)) : A("", !0),
      u(a) ? i.value?.series ? (f(), p(K, { key: 5 }, [
        l("p", null, o(u(At)("library", "%n book", "%n books", Number(i.value.bookCount))), 1),
        i.value.series.description && !_.value ? (f(), p("p", wx, o(i.value.series.description), 1)) : A("", !0),
        i.value.bookCount ? (f(), p("p", kx, [
          l("a", {
            href: `${e.catalogueUrl}?seriesId=${u(a)}`
          }, o(u(g)("library", "Browse this series in the catalogue")), 9, Sx)
        ])) : A("", !0),
        _.value ? A("", !0) : (f(), p("button", {
          key: 2,
          disabled: s.value,
          onClick: k
        }, o(u(g)("library", "Edit series")), 9, Cx)),
        _.value ? (f(), p("form", {
          key: 3,
          class: "series-editor",
          onSubmit: Se(S, ["prevent"])
        }, [
          l("label", Tx, [
            Q(o(u(g)("library", "Preferred name")) + " ", 1),
            de(Be, {
              text: u(g)("library", "Renaming this shared series changes its display name; the original text in each book stays unchanged.")
            }, null, 8, ["text"])
          ]),
          be(l("input", {
            id: "series-name",
            "onUpdate:modelValue": L[4] || (L[4] = (P) => v.name = P),
            maxlength: "255",
            required: "",
            disabled: s.value
          }, null, 8, Ax), [
            [Ue, v.name]
          ]),
          l("label", Ex, o(u(g)("library", "Description")), 1),
          be(l("textarea", {
            id: "series-description",
            "onUpdate:modelValue": L[5] || (L[5] = (P) => v.description = P),
            maxlength: "10000",
            rows: "4",
            disabled: s.value
          }, null, 8, $x), [
            [Ue, v.description]
          ]),
          l("div", null, [
            l("button", {
              type: "submit",
              class: "primary",
              disabled: s.value
            }, o(u(g)("library", "Save series")), 9, xx),
            L[9] || (L[9] = Q()),
            l("button", {
              type: "button",
              disabled: s.value,
              onClick: L[6] || (L[6] = (P) => _.value = !1)
            }, o(u(g)("library", "Cancel")), 9, Ox)
          ])
        ], 32)) : A("", !0),
        l("ol", Nx, [
          (f(!0), p(K, null, oe(i.value.books, (P) => (f(), p("li", {
            key: P.id
          }, [
            de(ef, {
              src: C(P)
            }, null, 8, ["src"]),
            l("div", null, [
              P.part_number ? (f(), p("span", Rx, o(u(g)("library", "Part {number}", { number: P.part_number })), 1)) : A("", !0),
              l("a", {
                href: u(Et)("/apps/library/items/{id}", { id: P.id }),
                dir: "auto"
              }, o(P.title), 9, Ix),
              l("small", Lx, o(P.creators || "—"), 1),
              P.scan_status === "missing" ? (f(), p("small", Px, o(u(g)("library", "File missing")), 1)) : A("", !0)
            ])
          ]))), 128))
        ])
      ], 64)) : A("", !0) : (f(), p(K, { key: 4 }, [
        l("form", {
          class: "series-search",
          onSubmit: L[2] || (L[2] = Se((P) => m(1), ["prevent"]))
        }, [
          l("label", px, [
            Q(o(u(g)("library", "Search series")) + " ", 1),
            de(Be, {
              text: u(g)("library", "Matches the beginning of a preferred series name.")
            }, null, 8, ["text"])
          ]),
          be(l("input", {
            id: "series-search",
            "onUpdate:modelValue": L[1] || (L[1] = (P) => r.value = P),
            type: "search",
            maxlength: "255"
          }, null, 512), [
            [Ue, r.value]
          ]),
          l("button", {
            disabled: s.value,
            type: "submit"
          }, o(u(g)("library", "Search")), 9, vx)
        ], 32),
        i.value?.migration && (i.value.migration.pending || i.value.migration.failed) ? (f(), p("p", bx, [
          Q(o(u(g)("library", "Series migration: {pending} pending, {failed} failed.", i.value.migration)) + " ", 1),
          l("button", {
            disabled: s.value,
            onClick: L[3] || (L[3] = (P) => m(n.value))
          }, o(u(g)("library", "Refresh")), 9, gx)
        ])) : A("", !0),
        i.value ? (f(), p("ul", mx, [
          (f(!0), p(K, null, oe(i.value.series, (P) => (f(), p("li", {
            key: P.id
          }, [
            l("a", {
              href: `${e.catalogueUrl}?series=1&seriesId=${P.id}`,
              dir: "auto"
            }, o(P.display_name), 9, yx),
            l("span", null, o(u(At)("library", "%n book", "%n books", Number(P.book_count))), 1)
          ]))), 128))
        ])) : A("", !0),
        i.value && !i.value.series.length ? (f(), p("p", _x, o(u(g)("library", "No series found yet.")), 1)) : A("", !0)
      ], 64)),
      i.value ? (f(), p("nav", {
        key: 6,
        class: "series-pagination",
        "aria-label": u(g)("library", "Series pages")
      }, [
        l("button", {
          disabled: s.value || n.value === 1,
          onClick: L[7] || (L[7] = (P) => m(n.value - 1))
        }, o(u(g)("library", "Previous")), 9, Fx),
        l("span", null, o(u(g)("library", "Page {page}", { page: n.value })), 1),
        l("button", {
          disabled: s.value || !i.value.hasNext,
          onClick: L[8] || (L[8] = (P) => m(n.value + 1))
        }, o(u(g)("library", "Next")), 9, Mx)
      ], 8, Dx)) : A("", !0)
    ], 8, sx));
  }
}, zx = /* @__PURE__ */ tf(Ux, [["__scopeId", "data-v-0767001f"]]);
function vg(e, t, a) {
  const i = /* @__PURE__ */ j({}), n = /* @__PURE__ */ j("idle");
  let r, s, c = 0;
  return Ge([e, t], () => {
    clearTimeout(r), s?.abort();
    const d = ++c;
    i.value = {}, n.value = t.value ? "pending" : "disabled", !(!t.value || !e.value.length) && (r = setTimeout(async () => {
      s = new AbortController();
      try {
        const _ = await fetch(Et("/apps/library/api/duplicate-suggestions/lookup"), { method: "POST", credentials: "same-origin", cache: "no-store", signal: s.signal, headers: { "Content-Type": "application/json", requesttoken: a.value }, body: JSON.stringify({ itemIds: e.value.slice(0, 100) }) });
        if (!_.ok) throw new Error("lookup_failed");
        const v = await _.json();
        if (d !== c) return;
        i.value = v.items || {}, n.value = v.enabled ? v.status : "disabled";
      } catch (_) {
        d === c && _.name !== "AbortError" && (n.value = "error");
      }
    }, 250));
  }, { immediate: !0 }), Ca(() => {
    c++, clearTimeout(r), s?.abort();
  }), { results: i, status: n };
}
const jx = ["aria-label", "aria-busy"], Bx = {
  key: 0,
  role: "status"
}, Hx = {
  key: 1,
  role: "alert"
}, Vx = {
  key: 2,
  role: "status"
}, qx = { key: 3 }, Gx = { key: 4 }, Kx = {
  key: 5,
  role: "status"
}, Wx = {
  key: 6,
  class: "library-suggestion-list"
}, Yx = ["href"], Zx = ["disabled", "onClick"], Xx = {
  key: 0,
  role: "status"
}, Jx = { class: "library-suggestion-list" }, Qx = { class: "library-suggestion-comparison" }, e3 = ["src"], t3 = { class: "library-duplicate-actions" }, a3 = ["href"], i3 = ["href"], n3 = ["disabled", "onClick"], r3 = { class: "library-duplicate-actions" }, l3 = ["disabled"], s3 = ["disabled"], o3 = ["disabled"], bg = {
  __name: "DuplicateSuggestions",
  props: { itemId: Number, requestToken: String, enabled: { type: Boolean, default: !0 }, compareId: { type: Number, default: 0 }, full: { type: Boolean, default: !1 } },
  setup(e) {
    const t = e, a = /* @__PURE__ */ j(0), i = H(() => (a.value, t.itemId ? [t.itemId] : [])), n = H(() => t.enabled), r = H(() => t.requestToken), { results: s, status: c } = vg(i, n, r), d = H(() => s.value[t.itemId]), _ = /* @__PURE__ */ j(null), v = /* @__PURE__ */ j(!1), y = /* @__PURE__ */ j(""), m = /* @__PURE__ */ j(!1), k = { formats: g("library", "Alternative formats"), languages: g("library", "Different languages"), years: g("library", "Different publication years"), publishers: g("library", "Different publishers"), identifiers: g("library", "Different ISBNs") };
    let S = 0;
    async function C(P, F) {
      const D = await fetch(Et("/apps/library/api/duplicate-suggestions" + P), { credentials: "same-origin", cache: "no-store", method: F ? "POST" : "GET", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...F ? { body: JSON.stringify(F) } : {} });
      if (!D.ok) throw new Error(D.status === 409 ? g("library", "These books changed after the scan. Run a new scan before reviewing this comparison.") : g("library", "Could not complete the duplicate review. Please try again."));
      return D.json();
    }
    async function $(P) {
      const F = ++S;
      v.value = !0, y.value = "", m.value = !1;
      try {
        const D = await C(`/compare/${t.itemId}/${P}`);
        F === S && (_.value = D);
      } catch (D) {
        F === S && (y.value = D.message);
      } finally {
        F === S && (v.value = !1);
      }
    }
    async function L(P, F = 0) {
      v.value = !0, y.value = "";
      try {
        await C(`/compare/${_.value.books[0].id}/${_.value.books[1].id}`, { signature: _.value.signature, decision: P, preferredId: F }), m.value = !0, a.value++, _.value = null;
      } catch (D) {
        y.value = D.message;
      } finally {
        v.value = !1;
      }
    }
    return Ge(() => [t.itemId, t.compareId], () => {
      S++, _.value = null, t.full && t.compareId && $(t.compareId);
    }, { immediate: !0 }), (P, F) => (f(), p("section", {
      class: "library-duplicate-suggestions",
      "aria-label": u(g)("library", "Possible duplicates"),
      "aria-busy": v.value ? "true" : "false"
    }, [
      l("h3", null, o(u(g)("library", "Possible duplicates")), 1),
      u(c) === "pending" ? (f(), p("p", Bx, o(u(g)("library", "Checking possible duplicates")), 1)) : A("", !0),
      u(c) === "error" || y.value ? (f(), p("p", Hx, o(y.value || u(g)("library", "Could not complete the duplicate review. Please try again.")), 1)) : A("", !0),
      u(c) === "building" || d.value?.status === "partial" ? (f(), p("p", Vx, o(u(g)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : A("", !0),
      d.value?.status === "unavailable" ? (f(), p("p", qx, o(u(g)("library", "These books are no longer available. Start a new scan.")), 1)) : A("", !0),
      d.value?.status === "checked" && !d.value.count ? (f(), p("p", Gx, o(u(g)("library", "No unreviewed suggestions found.")), 1)) : A("", !0),
      m.value ? (f(), p("p", Kx, o(u(g)("library", "Review saved. Your files and catalogue metadata were not changed.")), 1)) : A("", !0),
      d.value?.count && !_.value ? (f(), p("ul", Wx, [
        (f(!0), p(K, null, oe(d.value.matches, (D) => (f(), p("li", {
          key: D.id
        }, [
          e.full ? (f(), p("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: (fe) => $(D.id)
          }, [
            l("bdi", null, o(D.title), 1),
            Q(" · " + o(D.format.toUpperCase()), 1)
          ], 8, Zx)) : (f(), p("a", {
            key: 0,
            href: D.url
          }, [
            l("bdi", null, o(D.title), 1),
            Q(" · " + o(D.format.toUpperCase()), 1)
          ], 8, Yx))
        ]))), 128))
      ])) : A("", !0),
      _.value ? (f(), p(K, { key: 7 }, [
        _.value.reasons.length ? A("", !0) : (f(), p("p", Xx, o(u(g)("library", "These books no longer match the current metadata rules.")), 1)),
        l("ul", Jx, [
          (f(!0), p(K, null, oe(_.value.flags, (D) => (f(), p("li", { key: D }, o(k[D]), 1))), 128))
        ]),
        l("div", Qx, [
          (f(!0), p(K, null, oe(_.value.books, (D) => (f(), p("article", {
            key: D.id
          }, [
            l("img", {
              src: D.coverUrl,
              alt: "",
              width: "64",
              height: "88"
            }, null, 8, e3),
            l("h3", null, [
              l("bdi", null, o(D.title), 1)
            ]),
            l("p", null, [
              l("bdi", null, o(D.authors.join("; ")), 1)
            ]),
            l("p", null, o(D.format.toUpperCase()) + " · " + o(D.language || "—") + " · " + o(D.publicationDate || "—"), 1),
            l("p", null, [
              l("bdi", null, o(D.publisher), 1)
            ]),
            l("p", null, [
              l("bdi", null, o(D.path), 1)
            ]),
            l("div", t3, [
              l("a", {
                class: "button secondary",
                href: D.detailsUrl
              }, o(u(g)("library", "Details")), 9, a3),
              l("a", {
                class: "button secondary",
                href: D.openUrl
              }, o(u(g)("library", "Open")), 9, i3),
              l("button", {
                class: "button primary",
                disabled: v.value,
                onClick: (fe) => L("preferred", D.id)
              }, o(u(g)("library", "Prefer this copy")), 9, n3)
            ])
          ]))), 128))
        ]),
        l("div", r3, [
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: F[0] || (F[0] = (D) => L("keep"))
          }, o(u(g)("library", "Keep both")), 9, l3),
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: F[1] || (F[1] = (D) => L("dismissed"))
          }, o(u(g)("library", "Dismiss match")), 9, s3),
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: F[2] || (F[2] = (D) => L("unreviewed"))
          }, o(u(g)("library", "Reset review decision")), 9, o3)
        ])
      ], 64)) : A("", !0)
    ], 8, jx));
  }
}, u3 = ["aria-busy"], c3 = ["checked", "disabled"], d3 = {
  key: 0,
  role: "alert"
}, f3 = {
  key: 1,
  role: "status"
}, h3 = {
  key: 2,
  role: "alert"
}, p3 = {
  key: 3,
  role: "status"
}, v3 = {
  __name: "DuplicateSuggestionSettings",
  props: { requestToken: String },
  setup(e) {
    const t = e, a = /* @__PURE__ */ j({ enabled: !1, status: "disabled" }), i = /* @__PURE__ */ j(!1), n = /* @__PURE__ */ j("");
    let r = !0, s;
    async function c() {
      try {
        const _ = await fetch(Et("/apps/library/api/duplicate-suggestions"), { cache: "no-store", credentials: "same-origin" });
        if (!_.ok) throw new Error();
        const v = await _.json();
        r && (a.value = v, v.status === "building" && (s = setTimeout(c, 5e3)));
      } catch {
        r && (n.value = g("library", "Could not complete the duplicate review. Please try again."));
      }
    }
    async function d(_) {
      i.value = !0, n.value = "", clearTimeout(s);
      try {
        const v = await fetch(Et("/apps/library/api/duplicate-suggestions"), { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, body: JSON.stringify({ enabled: _.target.checked }) });
        if (!v.ok) throw new Error();
        a.value = await v.json(), a.value.status === "building" && (s = setTimeout(c, 2e3));
      } catch {
        n.value = g("library", "Could not complete the duplicate review. Please try again.");
      } finally {
        i.value = !1;
      }
    }
    return Ct(c), Ca(() => {
      r = !1, clearTimeout(s);
    }), (_, v) => (f(), p("section", {
      class: "library-auto-duplicate-settings",
      "aria-busy": i.value ? "true" : "false"
    }, [
      l("label", null, [
        l("input", {
          type: "checkbox",
          checked: a.value.enabled,
          disabled: i.value,
          onChange: d
        }, null, 40, c3),
        de(Be, {
          text: u(g)("library", "Build a private metadata index in the background. Suggestions check the whole library without reading book contents.")
        }, {
          default: ke(() => [
            Q(o(u(g)("library", "Show possible duplicates while browsing")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      n.value ? (f(), p("p", d3, o(n.value), 1)) : A("", !0),
      a.value.status === "building" ? (f(), p("p", f3, o(u(g)("library", "Indexing metadata")) + " · " + o(a.value.processed) + "/" + o(a.value.total), 1)) : A("", !0),
      a.value.status === "failed" ? (f(), p("p", h3, o(u(g)("library", "Duplicate scan failed")), 1)) : A("", !0),
      a.value.status === "ready" ? (f(), p("p", p3, o(u(g)("library", "Automatic duplicate suggestions are ready.")), 1)) : A("", !0)
    ], 8, u3));
  }
}, b3 = ["aria-label", "aria-busy"], g3 = ["href"], m3 = {
  key: 1,
  role: "alert"
}, y3 = {
  key: 2,
  role: "status"
}, _3 = ["disabled"], w3 = { value: "0" }, k3 = ["value"], S3 = { class: "library-duplicate-checkbox" }, C3 = ["disabled"], T3 = ["disabled"], A3 = ["value", "disabled"], E3 = { value: "" }, $3 = ["value"], x3 = ["aria-label"], O3 = { role: "status" }, N3 = ["value", "max", "aria-label"], R3 = {
  key: 1,
  role: "status"
}, I3 = {
  key: 2,
  role: "alert"
}, L3 = {
  key: 3,
  role: "alert"
}, P3 = { class: "library-duplicate-actions" }, D3 = ["disabled"], F3 = ["disabled"], M3 = ["disabled"], U3 = ["disabled"], z3 = { value: "all" }, j3 = ["value"], B3 = {
  key: 0,
  role: "status"
}, H3 = ["data-pair-id"], V3 = {
  key: 0,
  role: "status"
}, q3 = { class: "library-duplicate-decision" }, G3 = ["aria-label"], K3 = ["aria-label"], W3 = {
  key: 1,
  role: "alert"
}, Y3 = { class: "library-duplicate-books" }, Z3 = { class: "library-duplicate-book-heading" }, X3 = ["src"], J3 = { dir: "auto" }, Q3 = { dir: "auto" }, e4 = { key: 0 }, t4 = { dir: "auto" }, a4 = { dir: "ltr" }, i4 = { dir: "auto" }, n4 = { class: "library-duplicate-actions" }, r4 = ["href"], l4 = ["href"], s4 = ["disabled", "onClick"], o4 = { class: "library-duplicate-actions" }, u4 = ["disabled", "onClick"], c4 = ["disabled", "onClick"], d4 = ["disabled", "onClick"], f4 = ["aria-label"], h4 = ["disabled"], p4 = ["disabled"], v4 = {
  __name: "PossibleDuplicates",
  props: { requestToken: String, reviewUrl: String },
  setup(e) {
    const t = Number(new URLSearchParams(window.location.search).get("bookId")) || 0, a = Number(new URLSearchParams(window.location.search).get("compareId")) || 0, i = e, n = /* @__PURE__ */ j([]), r = /* @__PURE__ */ j([]), s = /* @__PURE__ */ j("0"), c = /* @__PURE__ */ j(!1), d = /* @__PURE__ */ j(null), _ = /* @__PURE__ */ j(!1), v = /* @__PURE__ */ j(""), y = /* @__PURE__ */ j(""), m = /* @__PURE__ */ j("unreviewed");
    let k, S = !0, C = 0;
    const $ = H(() => d.value?.status === "running"), L = H(() => ({ running: g("library", "Finding possible duplicates"), completed: g("library", "Duplicate scan complete"), cancelled: g("library", "Duplicate scan cancelled"), failed: g("library", "Duplicate scan failed"), limited: g("library", "Duplicate scan reached its limit") })), P = H(() => ({ unreviewed: g("library", "To review"), preferred: g("library", "Preferred copy selected"), keep: g("library", "Keep both"), dismissed: g("library", "Dismissed") })), F = H(() => ({ identical: g("library", "Identical file contents"), isbn: g("library", "Same ISBN"), title_author: g("library", "Same normalized title and authors"), similar_title_author: g("library", "Similar title and matching authors") })), D = H(() => ({ formats: g("library", "Alternative formats"), languages: g("library", "Different languages"), years: g("library", "Different publication years"), publishers: g("library", "Different publishers"), identifiers: g("library", "Different ISBNs") })), fe = (ee) => ee < 1048576 ? new Intl.NumberFormat(document.documentElement.lang || "en", { style: "unit", unit: ee < 1e3 ? "byte" : "kilobyte", maximumFractionDigits: 2 }).format(ee < 1e3 ? ee : ee / 1e3) : new Intl.NumberFormat(document.documentElement.lang || "en", { maximumFractionDigits: 2 }).format(ee / 1048576) + " " + g("library", "MiB");
    async function J(ee = "", ne) {
      const X = await fetch(Et(`/apps/library/api/duplicates${ee}`), { credentials: "same-origin", cache: "no-store", method: ne === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: i.requestToken }, ...ne === void 0 ? {} : { body: JSON.stringify(ne) } }), le = await X.json().catch(() => ({}));
      if (!X.ok)
        throw X.status === 409 ? new Error(g("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")) : le.error === "decision_limit" ? new Error(g("library", "This account has 10,000 saved review decisions. Reset an old decision before saving another.")) : le.error === "history_limit" ? new Error(g("library", "Three duplicate scans are already saved. Discard an old scan before starting another.")) : le.error === "scope_limit" ? new Error(g("library", "This scope is too large. Choose a smaller library root.")) : X.status === 404 ? new Error(g("library", "This scan or these books are no longer available.")) : new Error(g("library", "Could not complete the duplicate review. Please try again."));
      return le;
    }
    async function x() {
      const ee = await J();
      S && (n.value = ee.roots, r.value = ee.scans);
    }
    async function V(ee) {
      _.value = !0, v.value = "";
      try {
        await ee();
      } catch (ne) {
        S && (v.value = ne.message);
      } finally {
        S && (_.value = !1);
      }
    }
    function W() {
      if (clearTimeout(k), !S || !$.value) return;
      const ee = C, ne = d.value.id;
      k = setTimeout(async () => {
        try {
          if (await J(`/${ne}/advance`, {}), !S || ee !== C) return;
          const X = await J(`/${ne}?page=${d.value.page}&filter=${m.value}`);
          if (!S || ee !== C) return;
          d.value = X, $.value || await x(), W();
        } catch (X) {
          S && ee === C && (v.value = X.message);
        }
      }, 1500);
    }
    async function Z() {
      await V(async () => {
        d.value = await J("", { rootId: Number(s.value), contents: c.value }), C++, m.value = "unreviewed", y.value = "", await x(), W();
      });
    }
    async function ie(ee, ne = 1) {
      const X = ++C;
      clearTimeout(k), await V(async () => {
        const le = await J(`/${ee}?page=${ne}&filter=${m.value}`);
        S && X === C && (d.value = le, s.value = String(le.rootId), c.value = !!le.contents, W());
      });
    }
    function B(ee) {
      m.value = "unreviewed", y.value = "", ee.target.value && ie(ee.target.value);
    }
    async function q() {
      C++, clearTimeout(k), await V(async () => {
        await J(`/${d.value.id}/cancel`, {}), d.value = await J(`/${d.value.id}?filter=${m.value}`), await x();
      });
    }
    async function M() {
      C++, clearTimeout(k), await V(async () => {
        await J(`/${d.value.id}/discard`, {}), d.value = null, await x();
      });
    }
    async function G(ee, ne, X = 0) {
      C++, clearTimeout(k), await V(async () => {
        await J(`/${d.value.id}/pairs/${ee.id}`, { signature: ee.signature, decision: ne, preferredId: X }), y.value = g("library", "Review saved. Your files and catalogue metadata were not changed."), d.value = await J(`/${d.value.id}?page=${d.value.page}&filter=${m.value}`), W();
      });
    }
    return Ct(() => V(x)), Ca(() => {
      S = !1, C++, clearTimeout(k);
    }), (ee, ne) => (f(), p("section", {
      class: "library-duplicates",
      "aria-label": u(g)("library", "Possible duplicates"),
      "aria-busy": _.value ? "true" : "false"
    }, [
      l("a", { href: e.reviewUrl }, "← " + o(u(g)("library", "Review")), 9, g3),
      l("h1", null, [
        de(Be, {
          text: u(g)("library", "Find possible copies from titles, authors and valid ISBNs. Name order and punctuation are normalized for comparison only. Editions and translations can be different books. Review decisions are private and never delete, merge or hide publications.")
        }, {
          default: ke(() => [
            Q(o(u(g)("library", "Possible duplicates")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      de(v3, { "request-token": e.requestToken }, null, 8, ["request-token"]),
      u(t) ? (f(), Pe(bg, {
        key: 0,
        "item-id": u(t),
        "compare-id": u(a),
        "request-token": e.requestToken,
        full: ""
      }, null, 8, ["item-id", "compare-id", "request-token"])) : A("", !0),
      v.value ? (f(), p("p", m3, o(v.value), 1)) : A("", !0),
      y.value ? (f(), p("p", y3, o(y.value), 1)) : A("", !0),
      l("form", {
        class: "library-duplicate-toolbar",
        onSubmit: Se(Z, ["prevent"])
      }, [
        l("label", null, [
          Q(o(u(g)("library", "Library root")), 1),
          be(l("select", {
            "onUpdate:modelValue": ne[0] || (ne[0] = (X) => s.value = X),
            disabled: _.value || $.value
          }, [
            l("option", w3, o(u(g)("library", "All library roots")), 1),
            (f(!0), p(K, null, oe(n.value, (X) => (f(), p("option", {
              key: X.id,
              value: String(X.id)
            }, o(X.label), 9, k3))), 128))
          ], 8, _3), [
            [it, s.value]
          ])
        ]),
        l("label", S3, [
          be(l("input", {
            "onUpdate:modelValue": ne[1] || (ne[1] = (X) => c.value = X),
            type: "checkbox",
            disabled: _.value || $.value
          }, null, 8, C3), [
            [ui, c.value]
          ]),
          de(Be, {
            text: u(g)("library", "Read equal-size candidates to confirm identical contents, including renamed copies with different metadata. This can take longer on remote storage. Checks are limited to 64 MiB per file and 512 MiB per scan; skipped checks are reported.")
          }, {
            default: ke(() => [
              Q(o(u(g)("library", "Compare file contents")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        l("button", {
          class: "button primary",
          disabled: _.value || $.value || !n.value.length
        }, o(u(g)("library", "Find possible duplicates")), 9, T3)
      ], 32),
      l("label", null, [
        de(Be, {
          text: u(g)("library", "Scans continue through Nextcloud background jobs and can be reopened for seven days. Review decisions are reused when the same books have not changed. Each comparison is independent; choosing a preferred copy does not change catalogue ordering.")
        }, {
          default: ke(() => [
            Q(o(u(g)("library", "Saved duplicate scans")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        l("select", {
          value: d.value?.id || "",
          disabled: _.value,
          onChange: B
        }, [
          l("option", E3, o(u(g)("library", "Choose a scan")), 1),
          (f(!0), p(K, null, oe(r.value, (X) => (f(), p("option", {
            key: X.id,
            value: X.id
          }, o(new Date(Number(X.created_at) * 1e3).toLocaleString()) + " · " + o(L.value[X.status]), 9, $3))), 128))
        ], 40, A3)
      ]),
      d.value ? (f(), p(K, { key: 3 }, [
        l("section", {
          class: "library-duplicate-progress",
          "aria-label": u(g)("library", "Duplicate scan progress")
        }, [
          l("strong", null, o(d.value.rootId ? d.value.label : u(g)("library", "All library roots")), 1),
          l("p", O3, [
            Q(o(L.value[d.value.status]), 1),
            $.value ? (f(), p(K, { key: 0 }, [
              Q(" · " + o(d.value.phase === "index" ? u(g)("library", "Indexing metadata") : u(g)("library", "Comparing candidates")), 1)
            ], 64)) : A("", !0),
            Q(" · " + o(d.value.processed) + "/" + o(d.value.total), 1)
          ]),
          $.value ? (f(), p("progress", {
            key: 0,
            value: d.value.phase === "index" ? d.value.processed : void 0,
            max: Math.max(d.value.total, 1),
            "aria-label": u(g)("library", "Duplicate scan progress")
          }, null, 8, N3)) : A("", !0),
          l("p", null, o(u(g)("library", "Possible matches")) + ": " + o(d.value.matches) + " · " + o(u(g)("library", "Comparisons checked")) + ": " + o(d.value.examined), 1),
          d.value.hashSkipped || d.value.unavailable ? (f(), p("p", R3, o(u(g)("library", "Content checks skipped")) + ": " + o(d.value.hashSkipped) + " · " + o(u(g)("library", "Unavailable books")) + ": " + o(d.value.unavailable), 1)) : A("", !0),
          d.value.status === "limited" ? (f(), p("p", I3, o(u(g)("library", "These results are partial. A large candidate group or scan limit was reached. Try a smaller root or improve the metadata before scanning again.")), 1)) : A("", !0),
          d.value.status === "failed" ? (f(), p("p", L3, o(u(g)("library", "The scan stopped before completion. Its results are partial. Refresh or start a new scan.")), 1)) : A("", !0),
          l("div", P3, [
            $.value ? (f(), p("button", {
              key: 0,
              class: "button secondary",
              disabled: _.value,
              onClick: q
            }, o(u(g)("library", "Cancel scan")), 9, D3)) : A("", !0),
            l("button", {
              class: "button secondary",
              disabled: _.value,
              onClick: ne[2] || (ne[2] = (X) => ie(d.value.id, d.value.page))
            }, o(u(g)("library", "Refresh results")), 9, F3),
            l("button", {
              class: "button secondary",
              disabled: _.value || $.value,
              onClick: M
            }, o(u(g)("library", "Discard scan")), 9, M3)
          ])
        ], 8, x3),
        l("label", null, [
          Q(o(u(g)("library", "Show comparisons")), 1),
          be(l("select", {
            "onUpdate:modelValue": ne[3] || (ne[3] = (X) => m.value = X),
            disabled: _.value,
            onChange: ne[4] || (ne[4] = (X) => ie(d.value.id))
          }, [
            l("option", z3, o(u(g)("library", "All")) + " (" + o(d.value.matches) + ")", 1),
            (f(!0), p(K, null, oe(P.value, (X, le) => (f(), p("option", {
              key: le,
              value: le
            }, o(X) + " (" + o(d.value.counts[le] || 0) + ")", 9, j3))), 128))
          ], 40, U3), [
            [it, m.value]
          ])
        ]),
        !d.value.pairs.length && !$.value ? (f(), p("p", B3, o(u(g)("library", "No comparisons in this view.")), 1)) : A("", !0),
        (f(!0), p(K, null, oe(d.value.pairs, (X) => (f(), p("article", {
          key: X.id,
          class: "library-duplicate-pair",
          "data-pair-id": X.id
        }, [
          X.unavailable ? (f(), p("p", V3, o(u(g)("library", "These books are no longer available. Start a new scan.")), 1)) : (f(), p(K, { key: 1 }, [
            l("header", null, [
              l("h2", null, o(X.reasons.includes("identical") ? u(g)("library", "Identical file contents") : u(g)("library", "Possible duplicates")), 1),
              l("span", q3, o(P.value[X.decision]), 1)
            ]),
            l("ul", {
              class: "library-duplicate-reasons",
              "aria-label": u(g)("library", "Why these books match")
            }, [
              (f(!0), p(K, null, oe(X.reasons, (le) => (f(), p("li", { key: le }, o(F.value[le]), 1))), 128))
            ], 8, G3),
            X.flags.length ? (f(), p("ul", {
              key: 0,
              class: "library-duplicate-flags",
              "aria-label": u(g)("library", "Differences to review")
            }, [
              (f(!0), p(K, null, oe(X.flags, (le) => (f(), p("li", { key: le }, o(D.value[le]), 1))), 128))
            ], 8, K3)) : A("", !0),
            X.stale ? (f(), p("p", W3, o(u(g)("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")), 1)) : A("", !0),
            l("div", Y3, [
              (f(!0), p(K, null, oe(X.books, (le) => (f(), p("section", {
                key: le.id,
                class: Te(["library-duplicate-book", { "library-duplicate-preferred": X.preferredId === le.id }])
              }, [
                l("div", Z3, [
                  l("img", {
                    src: le.coverUrl,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, X3),
                  l("div", null, [
                    l("h3", J3, o(le.title), 1),
                    l("p", Q3, o(le.authors.join("; ") || "—"), 1),
                    X.preferredId === le.id ? (f(), p("strong", e4, o(u(g)("library", "Preferred copy")), 1)) : A("", !0)
                  ])
                ]),
                l("dl", null, [
                  l("div", null, [
                    l("dt", null, o(u(g)("library", "Format")), 1),
                    l("dd", null, o(le.format.toUpperCase()) + " · " + o(fe(le.size)), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(g)("library", "Language")), 1),
                    l("dd", null, o(le.language || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(g)("library", "Publication date")), 1),
                    l("dd", null, o(le.publicationDate || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(g)("library", "Publisher")), 1),
                    l("dd", t4, o(le.publisher || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(g)("library", "ISBN")), 1),
                    l("dd", a4, o(le.isbn.join(", ") || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(g)("library", "Location")), 1),
                    l("dd", i4, o(le.path), 1)
                  ])
                ]),
                l("div", n4, [
                  l("a", {
                    class: "button secondary",
                    href: le.openUrl
                  }, o(u(g)("library", "Open")), 9, r4),
                  l("a", {
                    class: "button secondary",
                    href: le.detailsUrl
                  }, o(u(g)("library", "Details")), 9, l4),
                  l("button", {
                    class: "button primary",
                    disabled: _.value || $.value || X.stale,
                    onClick: (_e) => G(X, "preferred", le.id)
                  }, o(u(g)("library", "Prefer this copy")), 9, s4)
                ])
              ], 2))), 128))
            ]),
            l("div", o4, [
              l("button", {
                class: "button secondary",
                disabled: _.value || $.value || X.stale,
                onClick: (le) => G(X, "keep")
              }, o(u(g)("library", "Keep both")), 9, u4),
              l("button", {
                class: "button secondary",
                disabled: _.value || $.value || X.stale,
                onClick: (le) => G(X, "dismissed")
              }, o(u(g)("library", "Dismiss match")), 9, c4),
              X.decision !== "unreviewed" ? (f(), p("button", {
                key: 0,
                class: "button secondary",
                disabled: _.value || $.value || X.stale,
                onClick: (le) => G(X, "unreviewed")
              }, o(u(g)("library", "Reset review decision")), 9, d4)) : A("", !0)
            ])
          ], 64))
        ], 8, H3))), 128)),
        l("nav", {
          class: "library-duplicate-actions",
          "aria-label": u(g)("library", "Duplicate comparison pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: _.value || d.value.page === 1,
            onClick: ne[5] || (ne[5] = (X) => ie(d.value.id, d.value.page - 1))
          }, o(u(g)("library", "Previous page")), 9, h4),
          l("span", null, o(d.value.page), 1),
          l("button", {
            class: "button secondary",
            disabled: _.value || !d.value.hasNext,
            onClick: ne[6] || (ne[6] = (X) => ie(d.value.id, d.value.page + 1))
          }, o(u(g)("library", "Next page")), 9, p4)
        ], 8, f4)
      ], 64)) : A("", !0)
    ], 8, b3));
  }
}, af = ["title", "subtitle", "author", "series", "seriesNumber", "language", "publisher", "subject", "year", "genre"], b4 = /* @__PURE__ */ new Set([...af, "ignore", "folder", "folders", "extension"]);
function gg(e, t, a = {}) {
  if (!t || t.length > 1e3 || e.length > 2e3) return { status: "invalid", reason: "pattern", changes: [] };
  if (/%folders?%(?!\/)/.test(t)) return { status: "invalid", reason: "pattern", changes: [] };
  const i = (y) => y === "%folders%/" ? "folders" : y.slice(1, -1), n = t.split(/(%folders%\/|%[A-Za-z]+%)/).filter(Boolean);
  if (n.some((y) => y.includes("%") && !b4.has(i(y))) || n.filter((y) => y.startsWith("%")).length > 16) return { status: "invalid", reason: "pattern", changes: [] };
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
    const S = n[y];
    if (!S.startsWith("%")) {
      e.startsWith(S, m) && d(y + 1, m + S.length, k);
      return;
    }
    const C = i(S);
    if (C === "folders") {
      d(y + 1, m, k);
      for (let P = m; P < e.length && !s && c.length < 2; P++) e[P] === "/" && d(y + 1, P + 1, k);
      return;
    }
    const $ = e.indexOf("/", m), L = $ < 0 ? e.length : $;
    for (let P = m + 1; P <= L && !s && c.length < 2; P++) {
      const F = e.slice(m, P);
      C === "folder" && P !== L || C === "extension" && !/^[A-Za-z0-9]{1,12}$/.test(F) || d(y + 1, P, [...k, { key: C, raw: F }]);
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
    const S = String(a[y] || ""), C = y === "author" && Array.isArray(a.authors) ? JSON.stringify([k]) === JSON.stringify(a.authors) : S === k;
    v.push({ field: y, raw: m, value: k, ...y === "author" ? { values: [k] } : {}, before: S, previewOnly: !1, status: C ? "unchanged" : S.trim() ? "conflict" : "ready" });
  }
  return { status: v.some((y) => y.status === "conflict") ? "conflict" : v.some((y) => y.status === "ready") ? "ready" : "unchanged", changes: v };
}
function mg(e) {
  return ({ english: "en", german: "de", deutsch: "de", french: "fr", français: "fr", arabic: "ar" }[e.toLowerCase()] || e.toLowerCase()).replace(/^([a-z]{2,3})-([a-z]{2})$/, (a, i, n) => `${i}-${n.toUpperCase()}`);
}
function yg(e, t) {
  const a = { title: 512, subtitle: 512, author: 1024, series: 255, seriesNumber: 64, genre: 255, language: 64, publisher: 512, subject: 2048, year: 4 };
  return e in a ? !!t && [...t].length <= a[e] && !/[\x00-\x1f\x7f]/.test(t) && (e !== "year" || Number(t) > 0) : !0;
}
const g4 = [...af];
function is(e) {
  const t = e.split("/"), a = t.pop() || "", i = a.lastIndexOf(".");
  return [...t, i > 0 ? a.slice(0, i) : a];
}
function Cu(e = "ignore") {
  return { field: e, split: null, prefix: "", suffix: "", underscores: !1, mapFrom: "", mapTo: "", authorSeparator: "", reverseName: !1 };
}
function pd(e, t, a) {
  if (!t) return [e];
  if (a === "every") return e.split(t);
  const i = a === "last" ? e.lastIndexOf(t) : e.indexOf(t);
  return i < 0 ? [e] : [e.slice(0, i), e.slice(i + t.length)];
}
function eu(e) {
  return { version: 1, combineAuthors: !1, parts: is(e).map((t, a, i) => Cu(a === i.length - 1 ? "title" : "ignore")) };
}
function tu(e, t, a = {}) {
  const i = (y) => ({ status: y, changes: [] });
  if (!e || e.length > 2e3 || t?.version !== 1 || !Array.isArray(t.parts) || t.parts.length > 64) return i("invalid");
  const n = is(e);
  if (n.length !== t.parts.length) return i("unmatched");
  const r = /* @__PURE__ */ new Map();
  let s = 0, c = "";
  function d(y, m, k = 0) {
    if (c) return;
    if (++s > 128 || k > 6 || !m) {
      c = "invalid";
      return;
    }
    if (m.split) {
      const { delimiter: L, occurrence: P, children: F } = m.split;
      if (typeof L != "string" || !L || L.length > 100 || !["first", "last", "every"].includes(P) || !Array.isArray(F)) {
        c = "invalid";
        return;
      }
      const D = pd(y, L, P);
      if (D.length !== F.length || D.length < 2) {
        c = "unmatched";
        return;
      }
      D.forEach((fe, J) => d(fe, F[J], k + 1));
      return;
    }
    if (m.field === "ignore") return;
    if (!g4.includes(m.field)) {
      c = "invalid";
      return;
    }
    let S = y.trim();
    if (m.prefix) {
      if (!S.startsWith(m.prefix)) {
        c = "unmatched";
        return;
      }
      S = S.slice(m.prefix.length);
    }
    if (m.suffix) {
      if (!S.endsWith(m.suffix)) {
        c = "unmatched";
        return;
      }
      S = S.slice(0, -m.suffix.length);
    }
    if (m.underscores && (S = S.replaceAll("_", " ")), S = S.trim(), m.mapFrom && S === m.mapFrom && (S = m.mapTo.trim()), m.field === "language" && (S = mg(S)), !S || m.field === "year" && !/^\d{4}$/.test(S) || m.field === "language" && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(S)) {
      c = "invalid";
      return;
    }
    if (!yg(m.field, S)) {
      c = "invalid";
      return;
    }
    let C = [S];
    if (m.field === "author") {
      if (C = (m.authorSeparator ? S.split(m.authorSeparator) : C).map((L) => L.trim()), m.reverseName && (C = C.map((L) => {
        const P = L.split(",").map((F) => F.trim());
        return P.length !== 2 || P.some((F) => !F) ? (c = "invalid", L) : `${P[1]} ${P[0]}`;
      }), c))
        return;
      if (C.some((L) => !L || [...L].length > 255)) {
        c = "invalid";
        return;
      }
    }
    const $ = r.get(m.field);
    $ ? m.field === "author" && t.combineAuthors ? ($.values = [.../* @__PURE__ */ new Set([...$.values, ...C])], $.raw.push(y)) : JSON.stringify($.values) !== JSON.stringify(C) && (c = "ambiguous") : r.set(m.field, { raw: [y], values: [...new Set(C)] });
  }
  if (n.forEach((y, m) => d(y, t.parts[m])), c) return i(c);
  const _ = r.get("author")?.values;
  if (_ && (_.length > 32 || [..._.join("; ")].length > 1024)) return i("invalid");
  const v = [...r].map(([y, m]) => {
    const k = m.values.join("; "), S = String(a[y] || ""), C = y === "author" && Array.isArray(a.authors) ? JSON.stringify(m.values) === JSON.stringify(a.authors) : S === k;
    return {
      field: y,
      raw: m.raw.join(" / "),
      value: k,
      values: m.values,
      before: S,
      previewOnly: !1,
      status: C ? "unchanged" : S.trim() ? "conflict" : "ready"
    };
  });
  return { status: v.some((y) => y.status === "conflict") ? "conflict" : v.some((y) => y.status === "ready") ? "ready" : "unchanged", changes: v };
}
const m4 = ["aria-label", "aria-busy"], y4 = {
  key: 0,
  role: "alert"
}, _4 = ["disabled"], w4 = {
  key: 2,
  role: "status"
}, k4 = ["disabled"], S4 = { class: "library-inference-presets" }, C4 = ["disabled"], T4 = ["disabled"], A4 = ["disabled"], E4 = ["aria-label"], $4 = ["value", "aria-label"], x4 = { class: "library-inference-before-after" }, O4 = { key: 0 }, N4 = ["aria-label"], R4 = ["aria-label"], I4 = { class: "library-inference-path" }, L4 = { class: "library-inference-presets" }, P4 = ["disabled"], D4 = ["disabled"], F4 = ["disabled"], M4 = ["disabled"], U4 = ["disabled"], z4 = { class: "library-inference-history" }, j4 = ["disabled", "onClick"], _g = {
  __name: "InferenceApply",
  props: { results: { type: Array, required: !0 }, labels: { type: Object, required: !0 }, context: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, wholeFolder: Boolean },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const a = e, i = t, n = /* @__PURE__ */ j([]), r = /* @__PURE__ */ j(null), s = /* @__PURE__ */ j([]), c = /* @__PURE__ */ j(!1), d = /* @__PURE__ */ j(""), _ = /* @__PURE__ */ j(""), v = /* @__PURE__ */ j(""), y = /* @__PURE__ */ new Set(["author", "title", "subtitle", "series", "seriesNumber", "genre", "language", "publisher", "subject", "year"]), m = H(() => a.results.filter((ie) => ["ready", "conflict"].includes(ie.status) && ie.revision).map((ie) => ({ ...ie, changes: ie.changes.filter((B) => y.has(B.field) && ["ready", "conflict"].includes(B.status)) })).filter((ie) => ie.changes.length)), k = (ie, B) => `${ie.id}:${B.field}`, S = H(() => m.value.map((ie) => ({ id: ie.id, revision: ie.revision, changes: Object.fromEntries(ie.changes.filter((B) => n.value.includes(k(ie, B))).map((B) => [B.field, B.field === "author" ? B.values || [B.value] : B.value])) })).filter((ie) => Object.keys(ie.changes).length)), C = H(() => ({ prepared: g("library", "Awaiting approval"), applied: g("library", "Applied"), undone: g("library", "Undone") }));
    let $ = 0;
    Ge(() => JSON.stringify([a.results, a.context]), () => {
      n.value = [], r.value?.status === "prepared" && (r.value = null), v.value = "", $++;
    }), Ge(() => JSON.stringify(n.value), () => {
      r.value?.status === "prepared" && (r.value = null), v.value = "", $++;
    });
    function L() {
      n.value = m.value.flatMap((ie) => ie.changes.filter((B) => B.status === "ready").map((B) => k(ie, B)));
    }
    async function P(ie = "", B) {
      const q = await fetch(Et(`/apps/library/api/inference/batches${ie}`), { credentials: "same-origin", cache: "no-store", method: B === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: a.requestToken }, ...B === void 0 ? {} : { body: JSON.stringify(B) } }), M = await q.json();
      if (!q.ok)
        throw q.status === 409 ? (r.value && (r.value = { ...r.value, blocked: !0 }), new Error(g("library", "This review is stale or expired. Reload the sample and review again. Undo cannot overwrite later metadata changes."))) : M.error === "history_limit" ? new Error(g("library", "Recent batch history is full. Discard unused reviews or wait for history to expire.")) : q.status === 404 ? new Error(g("library", "The batch or one of its books is no longer available.")) : new Error(g("library", "Could not save these changes. Check the selected values or use a smaller selection."));
      return M;
    }
    async function F() {
      s.value = (await P()).batches;
    }
    async function D(ie) {
      c.value = !0, d.value = "", _.value = "";
      try {
        await ie();
      } catch (B) {
        d.value = B.message;
      } finally {
        c.value = !1;
      }
    }
    function fe() {
      r.value = null, d.value = "", v.value = "", i("changed");
    }
    async function J() {
      const ie = $;
      await D(async () => {
        const B = await P("", { proposals: S.value, context: a.context });
        ie === $ && (r.value = B), await F();
      });
    }
    async function x(ie) {
      await D(async () => {
        r.value = await P(`/${ie}`), v.value = "";
      });
    }
    async function V() {
      if (!r.value || a.disabled) return;
      const ie = r.value, B = ie.id;
      await D(async () => {
        const q = await P(`/${B}/apply`, {});
        r.value = { ...ie, ...q }, _.value = g("library", "Selected metadata changes were applied. Source files were not changed."), n.value = [], await F(), i("changed");
      });
    }
    async function W() {
      const ie = r.value, B = ie.id;
      await D(async () => {
        const q = await P(`/${B}/undo`, {});
        r.value = { ...ie, ...q }, v.value = "", _.value = g("library", "The batch was undone. Previous metadata and provenance were restored."), await F(), i("changed");
      });
    }
    async function Z() {
      await D(async () => {
        await P(`/${r.value.id}/discard`, {}), r.value = null, await F();
      });
    }
    return Ct(() => D(F)), (ie, B) => (f(), p("section", {
      class: "library-inference-apply",
      "aria-label": u(g)("library", "Review and apply metadata"),
      "aria-busy": c.value ? "true" : "false"
    }, [
      l("h2", null, [
        de(Be, {
          text: e.wholeFolder ? u(g)("library", "Choose fields from this page only. Existing values require individual selection. Apply and Undo operate on this reviewed batch of at most 40 books.") : u(g)("library", "Choose fields from this sample only. Replacements require individual selection. Authors are stored in their preview order, with exact duplicates removed.")
        }, {
          default: ke(() => [
            Q(o(e.wholeFolder ? u(g)("library", "Review and apply metadata") : u(g)("library", "4. Review and apply metadata")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      d.value ? (f(), p("p", y4, o(d.value), 1)) : A("", !0),
      r.value?.blocked ? (f(), p("button", {
        key: 1,
        class: "button secondary",
        disabled: c.value,
        onClick: fe
      }, o(u(g)("library", "Load sample")), 9, _4)) : A("", !0),
      _.value ? (f(), p("p", w4, o(_.value), 1)) : A("", !0),
      l("fieldset", {
        disabled: c.value || e.disabled,
        class: "library-inference-approval-fields"
      }, [
        l("div", S4, [
          l("button", {
            class: "button secondary",
            disabled: !m.value.length,
            onClick: L
          }, o(u(g)("library", "Select empty fields")), 9, C4),
          l("button", {
            class: "button secondary",
            disabled: !n.value.length,
            onClick: B[0] || (B[0] = (q) => n.value = [])
          }, o(u(g)("library", "Clear selection")), 9, T4),
          l("button", {
            class: "button primary",
            disabled: !S.value.length || r.value?.status === "prepared",
            onClick: J
          }, o(u(g)("library", "Review selected changes")) + " (" + o(n.value.length) + ")", 9, A4)
        ]),
        l("div", {
          class: Te(["library-inference-approval-candidates", { "library-inference-approval-scroll": m.value.length > 8 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(g)("library", "Select metadata fields")
        }, [
          (f(!0), p(K, null, oe(m.value, (q) => (f(), p("details", {
            key: q.id,
            class: "library-inference-result"
          }, [
            l("summary", null, o(q.path), 1),
            (f(!0), p(K, null, oe(q.changes, (M) => (f(), p("label", {
              key: M.field,
              class: "library-inference-approval-field"
            }, [
              be(l("input", {
                "onUpdate:modelValue": B[1] || (B[1] = (G) => n.value = G),
                type: "checkbox",
                value: k(q, M),
                "aria-label": `${e.labels[M.field]}: ${q.path}`
              }, null, 8, $4), [
                [ui, n.value]
              ]),
              l("span", null, [
                l("strong", null, o(e.labels[M.field]), 1),
                l("span", x4, [
                  l("span", null, o(M.before || "—"), 1),
                  B[4] || (B[4] = l("span", { "aria-hidden": "true" }, " → ", -1)),
                  l("strong", null, o(M.value), 1)
                ]),
                M.status === "conflict" ? (f(), p("small", O4, o(u(g)("library", "Replaces an existing value")), 1)) : A("", !0)
              ])
            ]))), 128))
          ]))), 128))
        ], 10, E4)
      ], 8, k4),
      r.value ? (f(), p("section", {
        key: 3,
        class: "library-inference-confirm",
        "aria-label": u(g)("library", "Confirmed change review")
      }, [
        l("h3", null, o(C.value[r.value.status]), 1),
        l("p", null, [
          de(Be, {
            text: u(g)("library", "Reviews expire after 30 minutes. Applied batches can be undone for seven days, provided their metadata, source file and access have not changed. A stale item blocks the entire batch.")
          }, {
            default: ke(() => [
              Q(o(u(g)("library", "Available until")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          Q(": " + o(new Date(r.value.expiresAt * 1e3).toLocaleString()), 1)
        ]),
        l("div", {
          class: Te(["library-inference-confirm-entries", { "library-inference-approval-scroll": r.value.entries.length > 4 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(g)("library", "Reviewed metadata changes")
        }, [
          (f(!0), p(K, null, oe(r.value.entries, (q) => (f(), p("article", {
            key: q.id
          }, [
            l("h4", I4, o(q.path), 1),
            l("dl", null, [
              (f(!0), p(K, null, oe(q.changes, (M) => (f(), p("div", {
                key: M.field
              }, [
                l("dt", null, o(e.labels[M.field]), 1),
                l("dd", null, [
                  l("span", null, o(u(g)("library", "Before")) + ": " + o(M.before || "—"), 1),
                  l("strong", null, o(u(g)("library", "After")) + ": " + o(M.after), 1)
                ])
              ]))), 128))
            ])
          ]))), 128))
        ], 10, R4),
        l("div", L4, [
          r.value.status === "prepared" ? (f(), p("button", {
            key: 0,
            class: "button primary",
            disabled: c.value || e.disabled || r.value.blocked,
            onClick: V
          }, o(u(g)("library", "Apply reviewed changes")), 9, P4)) : A("", !0),
          r.value.status !== "applied" ? (f(), p("button", {
            key: 1,
            class: "button secondary",
            disabled: c.value,
            onClick: Z
          }, o(u(g)("library", "Discard review")), 9, D4)) : A("", !0),
          r.value.status === "applied" && !v.value ? (f(), p("button", {
            key: 2,
            class: "button secondary",
            disabled: c.value || r.value.blocked,
            onClick: B[2] || (B[2] = (q) => v.value = r.value.id)
          }, o(u(g)("library", "Undo this batch")), 9, F4)) : A("", !0),
          v.value ? (f(), p(K, { key: 3 }, [
            l("button", {
              class: "button primary",
              disabled: c.value || r.value.blocked,
              onClick: W
            }, o(u(g)("library", "Confirm undo")), 9, M4),
            l("button", {
              class: "button secondary",
              disabled: c.value,
              onClick: B[3] || (B[3] = (q) => v.value = "")
            }, o(u(g)("library", "Cancel")), 9, U4)
          ], 64)) : A("", !0)
        ])
      ], 8, N4)) : A("", !0),
      l("details", z4, [
        l("summary", null, o(u(g)("library", "Recent metadata batches")) + " (" + o(s.value.length) + ")", 1),
        l("ul", null, [
          (f(!0), p(K, null, oe(s.value, (q) => (f(), p("li", {
            key: q.id
          }, [
            l("button", {
              class: "button secondary",
              disabled: c.value,
              onClick: (M) => x(q.id)
            }, o(new Date(Number(q.created_at) * 1e3).toLocaleString()) + " · " + o(C.value[q.status]), 9, j4)
          ]))), 128))
        ])
      ])
    ], 8, m4));
  }
}, B4 = { class: "library-inference-rule-trace" }, H4 = { key: 0 }, vd = {
  __name: "InferenceRuleTrace",
  props: { result: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 } },
  setup(e) {
    return (t, a) => (f(), p("div", B4, [
      (f(!0), p(K, null, oe(e.result.conflicts || [], (i) => (f(), p("div", {
        key: i.field,
        class: "library-inference-rule-conflict"
      }, [
        l("strong", null, o(u(g)("library", "Conflicting rules")) + ": " + o(e.labels[i.field]), 1),
        l("ul", null, [
          (f(!0), p(K, null, oe(i.proposals, (n, r) => (f(), p("li", { key: r }, [
            l("bdi", null, o(n.value), 1),
            l("small", null, o(n.sources.map((s) => s.name).join(", ")), 1)
          ]))), 128))
        ])
      ]))), 128)),
      e.result.attempts?.length ? (f(), p("details", H4, [
        l("summary", null, [
          de(Be, {
            text: u(g)("library", "Evaluated from the deepest assigned folder upward. An ambiguous match stops fallback. Rules above a successful match are not used. Conflicting fields have no single proposed value.")
          }, {
            default: ke(() => [
              Q(o(u(g)("library", "Rule evaluation")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        l("ul", null, [
          (f(!0), p(K, null, oe(e.result.attempts, (i) => (f(), p("li", {
            key: i.id
          }, [
            l("strong", null, o(i.name), 1),
            l("bdi", null, o(i.folder || "/"), 1),
            l("small", null, o(e.statuses[i.status]), 1)
          ]))), 128))
        ])
      ])) : A("", !0)
    ]));
  }
}, V4 = ["aria-label", "aria-busy"], q4 = {
  key: 0,
  role: "alert"
}, G4 = { class: "library-inference-presets" }, K4 = ["disabled"], W4 = ["value", "disabled"], Y4 = { value: "" }, Z4 = ["value"], X4 = { class: "library-inference-path" }, J4 = { role: "status" }, Q4 = ["value", "max", "aria-label"], eO = { class: "library-inference-presets" }, tO = ["disabled"], aO = ["disabled"], iO = ["disabled"], nO = {
  key: 1,
  role: "alert"
}, rO = {
  key: 2,
  role: "alert"
}, lO = {
  key: 0,
  class: "library-analysis-definition",
  dir: "ltr"
}, sO = { key: 1 }, oO = { key: 2 }, uO = ["disabled"], cO = { value: "all" }, dO = ["value"], fO = ["aria-label"], hO = { class: "library-inference-path" }, pO = ["aria-label"], vO = ["disabled"], bO = ["disabled"], gO = {
  __name: "InferenceAnalysis",
  props: { definition: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 }, requestToken: String, disabled: Boolean },
  setup(e) {
    const t = e, a = /* @__PURE__ */ j(null), i = /* @__PURE__ */ j([]), n = /* @__PURE__ */ j(!1), r = /* @__PURE__ */ j(""), s = /* @__PURE__ */ j("all");
    let c, d = 0, _ = !0;
    const v = H(() => a.value?.status === "running"), y = H(() => ({ running: g("library", "Analysing"), completed: g("library", "Analysis complete"), cancelled: g("library", "Analysis cancelled"), failed: g("library", "Analysis failed"), limited: g("library", "Analysis limit reached") })), m = H(() => ({ ...t.statuses, unavailable: g("library", "Changed or unavailable books") }));
    async function k(J = "", x) {
      const V = await fetch(Et(`/apps/library/api/inference/analyses${J}`), { credentials: "same-origin", cache: "no-store", method: x === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...x === void 0 ? {} : { body: JSON.stringify(x) } }), W = await V.json();
      if (!V.ok)
        throw W.error === "analysis_history_limit" ? new Error(g("library", "Five folder analyses are already saved. Discard an old analysis before starting another.")) : W.error === "analysis_limit" ? new Error(g("library", "This folder exceeds the analysis limit. Choose a smaller subfolder.")) : V.status === 404 ? new Error(g("library", "This analysis or its folder is no longer available.")) : new Error(g("library", "Could not analyse this folder. Check the rule, folder and your access."));
      return W;
    }
    async function S() {
      const J = await k();
      _ && (i.value = J.jobs);
    }
    async function C(J) {
      n.value = !0, r.value = "";
      try {
        await J();
      } catch (x) {
        _ && (r.value = x.message);
      } finally {
        _ && (n.value = !1);
      }
    }
    function $() {
      if (clearTimeout(c), !_ || !v.value) return;
      const J = a.value.id, x = d;
      c = setTimeout(async () => {
        try {
          if (await k(`/${J}/advance`, {}), !_ || d !== x) return;
          const V = await k(`/${J}?page=${a.value.page}&filter=${s.value}`);
          if (!_ || d !== x) return;
          a.value = V, v.value || await S(), $();
        } catch (V) {
          _ && d === x && (r.value = V.message);
        }
      }, 1500);
    }
    async function L() {
      await C(async () => {
        const J = await k("", { definition: t.definition });
        d++, s.value = "all", a.value = J, await S(), $();
      });
    }
    async function P(J, x = 1) {
      const V = ++d;
      clearTimeout(c), await C(async () => {
        const W = await k(`/${J}?page=${x}&filter=${s.value}`);
        _ && V === d && (a.value = W, $());
      });
    }
    function F(J) {
      s.value = "all", J.target.value && P(J.target.value);
    }
    async function D() {
      const J = a.value.id;
      d++, clearTimeout(c), await C(async () => {
        await k(`/${J}/cancel`, {}), a.value = await k(`/${J}?filter=${s.value}`), await S();
      });
    }
    async function fe() {
      const J = a.value.id;
      d++, clearTimeout(c), await C(async () => {
        await k(`/${J}/discard`, {}), a.value = null, await S();
      });
    }
    return Ct(() => C(S)), Ca(() => {
      _ = !1, d++, clearTimeout(c);
    }), (J, x) => (f(), p("section", {
      class: "library-inference-analysis library-inference-step",
      "aria-label": u(g)("library", "Whole-folder analysis"),
      "aria-busy": n.value ? "true" : "false"
    }, [
      l("h2", null, [
        de(Be, {
          text: u(g)("library", "Analyse all indexed books in the loaded folder using a snapshot of the current rule. Analysis continues through Nextcloud background jobs after you leave. Results are saved for seven days. New books require a new analysis; source files remain unchanged.")
        }, {
          default: ke(() => [
            Q(o(u(g)("library", "5. Analyse the whole folder")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      r.value ? (f(), p("p", q4, o(r.value), 1)) : A("", !0),
      l("div", G4, [
        l("button", {
          class: "button primary",
          disabled: n.value || e.disabled || v.value,
          onClick: L
        }, o(u(g)("library", "Analyse whole folder")), 9, K4),
        l("label", null, [
          de(Be, {
            text: u(g)("library", "Select a saved analysis to reopen its results. Each page contains at most 40 books. Changes and Undo remain separate for each approved batch.")
          }, {
            default: ke(() => [
              Q(o(u(g)("library", "Saved analyses")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          l("select", {
            value: a.value?.id || "",
            disabled: n.value,
            onChange: F
          }, [
            l("option", Y4, o(u(g)("library", "Choose an analysis")), 1),
            (f(!0), p(K, null, oe(i.value, (V) => (f(), p("option", {
              key: V.id,
              value: V.id
            }, o(new Date(Number(V.created_at) * 1e3).toLocaleString()) + " · " + o(y.value[V.status]) + " · " + o(V.processed) + "/" + o(V.total), 9, Z4))), 128))
          ], 40, W4)
        ])
      ]),
      a.value ? (f(), p(K, { key: 1 }, [
        l("p", X4, o(a.value.scope), 1),
        l("p", J4, o(y.value[a.value.status]) + " · " + o(a.value.processed) + "/" + o(a.value.total), 1),
        v.value ? (f(), p("progress", {
          key: 0,
          value: a.value.processed,
          max: Math.max(a.value.total, 1),
          "aria-label": u(g)("library", "Analysis progress")
        }, null, 8, Q4)) : A("", !0),
        l("div", eO, [
          v.value ? (f(), p("button", {
            key: 0,
            class: "button secondary",
            disabled: n.value,
            onClick: D
          }, o(u(g)("library", "Cancel analysis")), 9, tO)) : A("", !0),
          l("button", {
            class: "button secondary",
            disabled: n.value,
            onClick: x[0] || (x[0] = (V) => P(a.value.id, a.value.page))
          }, o(u(g)("library", "Refresh results")), 9, aO),
          l("button", {
            class: "button secondary",
            disabled: n.value || v.value,
            onClick: fe
          }, o(u(g)("library", "Discard analysis")), 9, iO)
        ]),
        a.value.status === "limited" ? (f(), p("p", nO, o(u(g)("library", "Analysis stopped at its storage limit. These results are partial. Choose a smaller subfolder for a complete analysis.")), 1)) : A("", !0),
        a.value.status === "failed" ? (f(), p("p", rO, o(u(g)("library", "Analysis stopped before completion. Check folder access and start a new analysis. These results are partial.")), 1)) : A("", !0),
        l("details", null, [
          l("summary", null, o(u(g)("library", "Rule used for this analysis")), 1),
          a.value.definition.mode === "pattern" ? (f(), p("code", lO, o(a.value.definition.pattern), 1)) : a.value.definition.mode === "folders" ? (f(), p("ul", sO, [
            (f(!0), p(K, null, oe(a.value.definition.assignments, (V) => (f(), p("li", {
              key: V.id
            }, o(V.folder || "/") + " · " + o(V.definition.name), 1))), 128))
          ])) : (f(), p("ul", oO, [
            (f(!0), p(K, null, oe(a.value.definition.rule.parts, (V, W) => (f(), p("li", { key: W }, o(W + 1) + " · " + o(e.labels[V.field] || u(g)("library", "Ignore")), 1))), 128))
          ]))
        ]),
        l("label", null, [
          Q(o(u(g)("library", "Show results")), 1),
          be(l("select", {
            "onUpdate:modelValue": x[1] || (x[1] = (V) => s.value = V),
            disabled: n.value,
            onChange: x[2] || (x[2] = (V) => P(a.value.id))
          }, [
            l("option", cO, o(u(g)("library", "All")) + " (" + o(Object.values(a.value.counts).reduce((V, W) => V + W, 0)) + ")", 1),
            (f(!0), p(K, null, oe(m.value, (V, W) => (f(), p("option", {
              key: W,
              value: W
            }, o(V) + " (" + o(a.value.counts[W] || 0) + ")", 9, dO))), 128))
          ], 40, uO), [
            [it, s.value]
          ])
        ]),
        l("div", {
          class: "library-analysis-results",
          role: "region",
          tabindex: "0",
          "aria-label": u(g)("library", "Analysis results")
        }, [
          (f(!0), p(K, null, oe(a.value.items, (V) => (f(), p("details", {
            key: V.id,
            class: "library-inference-result"
          }, [
            l("summary", null, [
              l("span", hO, o(V.path || "—"), 1),
              l("strong", null, o(m.value[V.status]), 1)
            ]),
            a.value.definition.mode === "folders" ? (f(), Pe(vd, {
              key: 0,
              result: V,
              labels: e.labels,
              statuses: m.value
            }, null, 8, ["result", "labels", "statuses"])) : A("", !0),
            (f(!0), p(K, null, oe(V.changes, (W) => (f(), p("dl", {
              key: W.field
            }, [
              l("dt", null, o(e.labels[W.field]), 1),
              l("dd", null, o(W.before || "—") + " → " + o(W.value), 1)
            ]))), 128))
          ]))), 128))
        ], 8, fO),
        l("nav", {
          class: "library-inference-presets",
          "aria-label": u(g)("library", "Analysis pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: n.value || a.value.page === 1,
            onClick: x[3] || (x[3] = (V) => P(a.value.id, a.value.page - 1))
          }, o(u(g)("library", "Previous page")), 9, vO),
          l("span", null, o(a.value.page), 1),
          l("button", {
            class: "button secondary",
            disabled: n.value || !a.value.hasNext,
            onClick: x[4] || (x[4] = (V) => P(a.value.id, a.value.page + 1))
          }, o(u(g)("library", "Next page")), 9, bO)
        ], 8, pO),
        de(_g, {
          "whole-folder": "",
          results: a.value.items,
          labels: e.labels,
          "request-token": e.requestToken,
          context: JSON.stringify({ analysisId: a.value.id }),
          disabled: n.value || v.value,
          onChanged: x[5] || (x[5] = (V) => P(a.value.id, a.value.page))
        }, null, 8, ["results", "labels", "request-token", "context", "disabled"])
      ], 64)) : A("", !0)
    ], 8, V4));
  }
}, mO = { class: "library-inference-part" }, yO = { class: "library-inference-part-source" }, _O = { class: "library-inference-part-options" }, wO = { value: "first" }, kO = { value: "last" }, SO = { value: "every" }, CO = {
  key: 0,
  role: "status"
}, TO = ["aria-label"], AO = { value: "ignore" }, EO = ["value"], $O = { key: 1 }, xO = { class: "library-inference-part-options" }, OO = { class: "library-inference-checkbox" }, NO = {
  key: 2,
  class: "library-inference-part-options"
}, RO = { value: "none" }, IO = { value: "semicolon" }, LO = { value: "and" }, PO = { value: "custom" }, DO = { key: 0 }, FO = ["value"], MO = { class: "library-inference-checkbox" }, Pp = " and ", UO = {
  __name: "InferencePart",
  props: { node: { type: Object, required: !0 }, value: { type: String, default: "" }, fields: { type: Array, required: !0 }, depth: { type: Number, default: 0 } },
  setup(e) {
    const t = e, a = /* @__PURE__ */ j(t.node.split?.delimiter || " - "), i = /* @__PURE__ */ j(t.node.split?.occurrence || "first"), n = H(() => t.node.split ? pd(t.value, t.node.split.delimiter, t.node.split.occurrence) : []), r = H({
      get: () => t.node.authorSeparatorChoice || "none",
      set: (d) => {
        t.node.authorSeparatorChoice = d, t.node.authorSeparator = { none: "", semicolon: ";", ampersand: "&", and: Pp, custom: t.node.customAuthorSeparator || "" }[d];
      }
    });
    function s(d) {
      t.node.customAuthorSeparator = d.target.value, t.node.authorSeparator = d.target.value;
    }
    function c() {
      const d = pd(t.value, a.value, i.value).length, _ = t.node.split?.children || [];
      t.node.split = {
        delimiter: a.value,
        occurrence: i.value,
        children: Array.from({ length: Math.min(32, Math.max(2, d)) }, (v, y) => _[y] || Cu(y === 0 ? t.node.field : "ignore"))
      };
    }
    return (d, _) => {
      const v = Xe("InferencePart", !0);
      return f(), p("div", mO, [
        l("bdi", yO, o(e.value || "—"), 1),
        e.node.split ? (f(), p(K, { key: 0 }, [
          l("div", _O, [
            l("label", null, [
              Q(o(u(g)("library", "Separator")), 1),
              be(l("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (y) => a.value = y),
                maxlength: "100",
                onInput: c
              }, null, 544), [
                [Ue, a.value]
              ])
            ]),
            l("label", null, [
              Q(o(u(g)("library", "Split at")), 1),
              be(l("select", {
                "onUpdate:modelValue": _[1] || (_[1] = (y) => i.value = y),
                onChange: c
              }, [
                l("option", wO, o(u(g)("library", "First occurrence")), 1),
                l("option", kO, o(u(g)("library", "Last occurrence")), 1),
                l("option", SO, o(u(g)("library", "Every occurrence")), 1)
              ], 544), [
                [it, i.value]
              ])
            ])
          ]),
          n.value.length !== e.node.split.children.length || !e.node.split.delimiter ? (f(), p("p", CO, o(u(g)("library", "This example does not match the split. Adjust the separator or select another example.")), 1)) : A("", !0),
          l("button", {
            class: "button secondary",
            onClick: _[2] || (_[2] = (y) => e.node.split = null)
          }, o(u(g)("library", "Use whole part")), 1),
          (f(!0), p(K, null, oe(e.node.split.children, (y, m) => (f(), Pe(v, {
            key: m,
            node: y,
            value: n.value[m] || "",
            fields: e.fields,
            depth: e.depth + 1
          }, null, 8, ["node", "value", "fields", "depth"]))), 128))
        ], 64)) : (f(), p(K, { key: 1 }, [
          l("label", null, [
            Q(o(u(g)("library", "Field")), 1),
            be(l("select", {
              "onUpdate:modelValue": _[3] || (_[3] = (y) => e.node.field = y),
              "aria-label": `${u(g)("library", "Field")}: ${e.value}`
            }, [
              l("option", AO, o(u(g)("library", "Ignore this part")), 1),
              (f(!0), p(K, null, oe(e.fields, (y) => (f(), p("option", {
                key: y[0],
                value: y[0]
              }, o(y[1]), 9, EO))), 128))
            ], 8, TO), [
              [it, e.node.field]
            ])
          ]),
          e.depth < 6 ? (f(), p("button", {
            key: 0,
            class: "button secondary",
            onClick: c
          }, o(u(g)("library", "Split this part")), 1)) : A("", !0),
          e.node.field !== "ignore" ? (f(), p("details", $O, [
            l("summary", null, o(u(g)("library", "Transform this value")), 1),
            l("div", xO, [
              l("label", null, [
                Q(o(u(g)("library", "Remove prefix")), 1),
                be(l("input", {
                  "onUpdate:modelValue": _[4] || (_[4] = (y) => e.node.prefix = y),
                  maxlength: "100"
                }, null, 512), [
                  [Ue, e.node.prefix]
                ])
              ]),
              l("label", null, [
                Q(o(u(g)("library", "Remove suffix")), 1),
                be(l("input", {
                  "onUpdate:modelValue": _[5] || (_[5] = (y) => e.node.suffix = y),
                  maxlength: "100"
                }, null, 512), [
                  [Ue, e.node.suffix]
                ])
              ]),
              l("label", OO, [
                be(l("input", {
                  "onUpdate:modelValue": _[6] || (_[6] = (y) => e.node.underscores = y),
                  type: "checkbox"
                }, null, 512), [
                  [ui, e.node.underscores]
                ]),
                Q(o(u(g)("library", "Replace underscores with spaces")), 1)
              ]),
              l("label", null, [
                de(Be, {
                  text: u(g)("library", "Affixes must match. Value mapping follows affix removal and underscore replacement.")
                }, {
                  default: ke(() => [
                    Q(o(u(g)("library", "Map exact value")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                be(l("input", {
                  "onUpdate:modelValue": _[7] || (_[7] = (y) => e.node.mapFrom = y),
                  maxlength: "200"
                }, null, 512), [
                  [Ue, e.node.mapFrom]
                ])
              ]),
              l("label", null, [
                Q(o(u(g)("library", "Replacement value")), 1),
                be(l("input", {
                  "onUpdate:modelValue": _[8] || (_[8] = (y) => e.node.mapTo = y),
                  maxlength: "200"
                }, null, 512), [
                  [Ue, e.node.mapTo]
                ])
              ])
            ])
          ])) : A("", !0),
          e.node.field === "author" ? (f(), p("div", NO, [
            l("label", null, [
              de(Be, {
                text: u(g)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + (r.value === "and" ? " " + u(g)("library", "Spaces around the word are required.") : "")
              }, {
                default: ke(() => [
                  Q(o(u(g)("library", "Separate authors by")), 1)
                ]),
                _: 1
              }, 8, ["text"]),
              be(l("select", {
                "onUpdate:modelValue": _[9] || (_[9] = (y) => r.value = y)
              }, [
                l("option", RO, o(u(g)("library", "None (keep one name)")), 1),
                l("option", IO, o(u(g)("library", "Semicolon (;)")), 1),
                _[11] || (_[11] = l("option", { value: "ampersand" }, "&", -1)),
                l("option", LO, o(u(g)("library", "Word separator")) + ": " + o(Pp.trim()), 1),
                l("option", PO, o(u(g)("library", "Custom separator")), 1)
              ], 512), [
                [it, r.value]
              ])
            ]),
            r.value === "custom" ? (f(), p("label", DO, [
              Q(o(u(g)("library", "Custom separator")), 1),
              l("input", {
                value: e.node.customAuthorSeparator || "",
                maxlength: "100",
                onInput: s
              }, null, 40, FO)
            ])) : A("", !0),
            l("label", MO, [
              be(l("input", {
                "onUpdate:modelValue": _[10] || (_[10] = (y) => e.node.reverseName = y),
                type: "checkbox"
              }, null, 512), [
                [ui, e.node.reverseName]
              ]),
              Q(o(u(g)("library", "Convert Surname, Given name to Given name Surname")), 1)
            ])
          ])) : A("", !0)
        ], 64))
      ]);
    };
  }
}, zO = ["aria-busy"], jO = ["disabled"], BO = {
  value: "",
  disabled: ""
}, HO = ["value"], VO = ["disabled"], qO = ["disabled"], GO = ["disabled"], KO = ["disabled"], WO = ["disabled"], YO = {
  key: 0,
  role: "alert"
}, ZO = ["disabled"], XO = {
  key: 1,
  role: "status"
}, Dp = {
  __name: "InferencePatterns",
  props: { pattern: { type: String, default: "" }, mode: { type: String, default: "pattern" }, rule: { type: Object, default: null }, requestToken: { type: String, default: "" } },
  emits: ["choose", "choose-rule"],
  setup(e, { emit: t }) {
    const a = e, i = t, n = H(() => a.mode === "guided"), r = H(() => n.value ? JSON.stringify(a.rule) : a.pattern), s = (V) => (V.kind || "pattern") === "guided" ? JSON.stringify(V.rule) : V.pattern, c = /* @__PURE__ */ j([]), d = /* @__PURE__ */ j(""), _ = /* @__PURE__ */ j(""), v = /* @__PURE__ */ j(!1), y = /* @__PURE__ */ j(""), m = /* @__PURE__ */ j(""), k = /* @__PURE__ */ j(""), S = /* @__PURE__ */ j([]), C = H(() => [
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
    ]), $ = H(() => [...n.value ? [] : C.value.map((V) => ({ ...V, id: `preset-${V.id}` })).filter((V) => !S.value.includes(V.id)), ...c.value.filter((V) => (V.kind || "pattern") === a.mode)].sort((V, W) => V.name.localeCompare(W.name))), L = H(() => $.value.find((V) => V.id === _.value));
    Ge([r, $], () => {
      k.value = "", (!L.value || s(L.value) !== r.value) && (_.value = $.value.find((V) => s(V) === r.value)?.id || "");
    }, { immediate: !0 });
    const P = H(() => [g("library", "Patterns match paths relative to the selected folder. Adjust literal prefixes such as books/ when needed. Ambiguous names still need review."), L.value?.example ? `${g("library", "Example path")}: ${L.value.example}` : ""].filter(Boolean).join(`

`));
    function F(V) {
      const W = $.value.find((Z) => Z.id === V.target.value);
      W && (_.value = W.id, n.value ? i("choose-rule", JSON.parse(JSON.stringify(W.rule))) : i("choose", W.pattern), m.value = "", k.value = "");
    }
    async function D(V = "", W = null) {
      const Z = await fetch(`${Et("/apps/library/api/inference/patterns")}${V}`, {
        method: W === null ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...W === null ? {} : { "Content-Type": "application/json", requesttoken: a.requestToken } },
        ...W === null ? {} : { body: JSON.stringify(W) }
      });
      if (!Z.ok) throw new Error(Z.status === 409 ? g("library", "That name already exists. Choose a different name.") : Z.status === 422 ? g("library", "Check the definition and name. You can save up to 100 rules and patterns.") : g("library", "Could not load or save rules and patterns. Check your connection and try again."));
      return Z.json();
    }
    async function fe() {
      v.value = !0, y.value = "";
      try {
        const V = await D();
        c.value = V.patterns, S.value = V.hidden || [];
      } catch (V) {
        y.value = V.message;
      } finally {
        v.value = !1;
      }
    }
    async function J() {
      v.value = !0, y.value = "", m.value = "";
      try {
        const V = await D("", { name: d.value, ...n.value ? { kind: "guided", rule: a.rule } : { pattern: a.pattern } });
        c.value = [...c.value, V.saved].sort((W, Z) => W.name.localeCompare(Z.name)), _.value = V.saved.id, d.value = "", m.value = n.value ? g("library", "Rule saved to your account.") : g("library", "Pattern saved to your account.");
      } catch (V) {
        y.value = V.message;
      } finally {
        v.value = !1;
      }
    }
    async function x(V) {
      v.value = !0, y.value = "", m.value = "";
      try {
        await D(`/${V}/delete`, {}), c.value = c.value.filter((W) => W.id !== V), S.value = [...S.value, V], _.value = "", k.value = "", m.value = n.value ? g("library", "Saved rule deleted. The current preview is unchanged.") : g("library", "Saved pattern deleted. The current preview is unchanged.");
      } catch (W) {
        y.value = W.message;
      } finally {
        v.value = !1;
      }
    }
    return Ct(fe), (V, W) => (f(), p("div", {
      class: "library-inference-templates",
      "aria-busy": v.value ? "true" : "false"
    }, [
      l("label", null, [
        de(Be, {
          text: n.value ? u(g)("library", "Select a rule to restore its assignments, splits, transformations and author options. Folder scope stays unchanged.") : P.value
        }, {
          default: ke(() => [
            Q(o(n.value ? u(g)("library", "Saved rule") : u(g)("library", "Pattern")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        be(l("select", {
          "onUpdate:modelValue": W[0] || (W[0] = (Z) => _.value = Z),
          disabled: v.value,
          onChange: F
        }, [
          l("option", BO, o(n.value ? u(g)("library", "Custom rule") : u(g)("library", "Custom pattern")), 1),
          (f(!0), p(K, null, oe($.value, (Z) => (f(), p("option", {
            key: Z.id,
            value: Z.id
          }, o(Z.name), 9, HO))), 128))
        ], 40, jO), [
          [it, _.value]
        ])
      ]),
      He(V.$slots, "default"),
      l("form", {
        onSubmit: Se(J, ["prevent"])
      }, [
        l("label", null, [
          de(Be, {
            text: u(g)("library", "Saved privately to your account. Save changes under a new name; existing definitions are not overwritten. Folder scope and example paths are not saved.")
          }, {
            default: ke(() => [
              Q(o(n.value ? u(g)("library", "Rule name") : u(g)("library", "Pattern name")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          be(l("input", {
            "onUpdate:modelValue": W[1] || (W[1] = (Z) => d.value = Z),
            maxlength: "120",
            required: "",
            disabled: v.value
          }, null, 8, VO), [
            [Ue, d.value]
          ])
        ]),
        l("button", {
          class: "button secondary",
          disabled: v.value || !d.value.trim() || (n.value ? !e.rule : !e.pattern.trim())
        }, o(n.value ? u(g)("library", "Save current rule as new") : u(g)("library", "Save current pattern as new")), 9, qO),
        L.value && !k.value ? (f(), p("button", {
          key: 0,
          type: "button",
          class: "button secondary",
          disabled: v.value,
          onClick: W[2] || (W[2] = (Z) => k.value = L.value.id)
        }, o(n.value ? u(g)("library", "Delete rule") : u(g)("library", "Delete pattern")), 9, GO)) : A("", !0),
        k.value ? (f(), p(K, { key: 1 }, [
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: W[3] || (W[3] = (Z) => x(k.value))
          }, o(u(g)("library", "Confirm deletion")), 9, KO),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: W[4] || (W[4] = (Z) => k.value = "")
          }, o(u(g)("library", "Cancel")), 9, WO)
        ], 64)) : A("", !0)
      ], 32),
      y.value ? (f(), p("p", YO, [
        Q(o(y.value) + " ", 1),
        l("button", {
          class: "button secondary",
          disabled: v.value,
          onClick: fe
        }, o(n.value ? u(g)("library", "Reload saved rules") : u(g)("library", "Reload saved patterns")), 9, ZO)
      ])) : A("", !0),
      m.value ? (f(), p("p", XO, o(m.value), 1)) : A("", !0)
    ], 8, zO));
  }
}, JO = ["aria-busy"], QO = ["disabled"], eN = {
  value: "",
  disabled: ""
}, tN = ["value"], aN = { class: "library-inference-path" }, iN = { class: "library-inference-checkbox" }, nN = ["disabled"], rN = ["disabled"], lN = {
  key: 0,
  role: "status"
}, sN = {
  key: 1,
  role: "alert"
}, oN = ["disabled"], uN = { key: 2 }, cN = { class: "library-inference-folder-list" }, dN = {
  key: 0,
  role: "status"
}, fN = ["disabled", "onClick"], hN = ["disabled", "onClick"], pN = ["disabled"], vN = {
  __name: "InferenceFolderRules",
  props: { rootId: { type: String, default: "" }, folder: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, scopePending: Boolean },
  emits: ["loaded"],
  setup(e, { emit: t }) {
    const a = e, i = t, n = /* @__PURE__ */ j([]), r = /* @__PURE__ */ j([]), s = /* @__PURE__ */ j(""), c = /* @__PURE__ */ j(!0), d = /* @__PURE__ */ j(!1), _ = /* @__PURE__ */ j(!1), v = /* @__PURE__ */ j(""), y = /* @__PURE__ */ j(""), m = H(() => a.disabled || d.value || _.value);
    let k = 0;
    async function S(P, F) {
      const D = await fetch(Et(`/apps/library/api/inference/${P}`), {
        method: F === void 0 ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...F === void 0 ? {} : { "Content-Type": "application/json", requesttoken: a.requestToken } },
        ...F === void 0 ? {} : { body: JSON.stringify(F) }
      });
      if (!D.ok) throw new Error(D.status === 409 ? g("library", "This rule is already assigned to this folder.") : D.status === 422 ? g("library", "Check the folder and rule. You can save up to 100 folder assignments.") : D.status === 404 ? g("library", "The folder or saved rule is unavailable. Reload and check your access.") : g("library", "Could not load or save folder rules. Try again."));
      return D.json();
    }
    async function C() {
      const P = ++k, F = a.rootId;
      if (r.value = [], y.value = "", v.value = "", i("loaded", { rootId: F, assignments: [] }), !!F) {
        d.value = !0;
        try {
          const [D, fe] = await Promise.all([S("patterns"), S(`folders?rootId=${encodeURIComponent(F)}`)]);
          if (P !== k) return;
          n.value = D.patterns, r.value = fe.assignments, n.value.some((J) => J.id === s.value) || (s.value = ""), i("loaded", { rootId: F, assignments: fe.assignments });
        } catch (D) {
          P === k && (v.value = D.message);
        } finally {
          P === k && (d.value = !1);
        }
      }
    }
    async function $() {
      if (!(m.value || a.scopePending || !s.value)) {
        _.value = !0, v.value = "";
        try {
          await S("folders", { rootId: a.rootId, folder: a.folder, recursive: c.value, definitionId: s.value }), await C();
        } catch (P) {
          v.value = P.message;
        } finally {
          _.value = !1;
        }
      }
    }
    async function L(P) {
      if (!m.value) {
        _.value = !0, v.value = "";
        try {
          await S(`folders/${P}/delete`, {}), await C();
        } catch (F) {
          v.value = F.message;
        } finally {
          _.value = !1;
        }
      }
    }
    return Ge(() => a.rootId, C, { immediate: !0 }), Ca(() => {
      k++;
    }), (P, F) => (f(), p("div", {
      class: "library-inference-folder-rules",
      "aria-busy": m.value ? "true" : "false"
    }, [
      l("form", {
        onSubmit: Se($, ["prevent"])
      }, [
        l("label", null, [
          de(Be, {
            text: u(g)("library", "Save a guided rule or advanced pattern first. Assignments keep a fixed copy, even if the saved definition is later deleted. Rules only generate previews; they do not run on scans or change books.")
          }, {
            default: ke(() => [
              Q(o(u(g)("library", "Saved rule or pattern")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          be(l("select", {
            "onUpdate:modelValue": F[0] || (F[0] = (D) => s.value = D),
            disabled: m.value
          }, [
            l("option", eN, o(u(g)("library", "Choose a saved definition")), 1),
            (f(!0), p(K, null, oe(n.value, (D) => (f(), p("option", {
              key: D.id,
              value: D.id
            }, o(D.name), 9, tN))), 128))
          ], 8, QO), [
            [it, s.value]
          ])
        ]),
        l("p", aN, [
          Q(o(u(g)("library", "Assignment folder")) + ": ", 1),
          l("bdi", null, o(e.folder || "/"), 1)
        ]),
        l("label", iN, [
          be(l("input", {
            "onUpdate:modelValue": F[1] || (F[1] = (D) => c.value = D),
            type: "checkbox",
            disabled: m.value
          }, null, 8, nN), [
            [ui, c.value]
          ]),
          Q(o(u(g)("library", "Use in subfolders")), 1)
        ]),
        l("button", {
          class: "button primary",
          disabled: m.value || e.scopePending || !s.value || !e.rootId
        }, o(u(g)("library", "Assign to this folder")), 9, rN)
      ], 32),
      e.scopePending ? (f(), p("p", lN, o(u(g)("library", "Load the folder before assigning a rule.")), 1)) : A("", !0),
      v.value ? (f(), p("p", sN, o(v.value), 1)) : A("", !0),
      l("button", {
        class: "button secondary",
        disabled: m.value,
        onClick: C
      }, o(u(g)("library", "Reload folder rules")), 9, oN),
      l("h3", null, [
        de(Be, {
          text: u(g)("library", "Rules match paths relative to their assigned folder. A deeper matching folder wins; if it does not match, an ancestor can be used. Equally specific conflicting rules require review. All assignments for this root are listed here.")
        }, {
          default: ke(() => [
            Q(o(u(g)("library", "Rules for this root")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      !r.value.length && !d.value ? (f(), p("p", uN, o(u(g)("library", "No folder rules assigned yet.")), 1)) : A("", !0),
      l("ul", cN, [
        (f(!0), p(K, null, oe(r.value, (D) => (f(), p("li", {
          key: D.id,
          class: "library-inference-folder-entry"
        }, [
          l("strong", null, o(D.definition.name), 1),
          l("bdi", null, o(D.folder || "/"), 1),
          l("small", null, o(D.recursive ? u(g)("library", "Includes subfolders") : u(g)("library", "Direct children only")), 1),
          D.available ? A("", !0) : (f(), p("p", dN, o(u(g)("library", "Folder unavailable or replaced. Remove this assignment and assign again after checking the folder.")), 1)),
          y.value !== D.id ? (f(), p("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: m.value,
            onClick: (fe) => y.value = D.id
          }, o(u(g)("library", "Remove assignment")), 9, fN)) : (f(), p(K, { key: 2 }, [
            l("button", {
              class: "button secondary",
              disabled: m.value,
              onClick: (fe) => L(D.id)
            }, o(u(g)("library", "Confirm removal")), 9, hN),
            l("button", {
              class: "button secondary",
              disabled: m.value,
              onClick: F[2] || (F[2] = (fe) => y.value = "")
            }, o(u(g)("library", "Cancel")), 9, pN)
          ], 64))
        ]))), 128))
      ])
    ], 8, JO));
  }
};
function bN(e, t, a, i = {}) {
  const n = [t, e].filter(Boolean).join("/"), r = a.filter((c) => c.available && (!c.folder || n.startsWith(`${c.folder}/`))).map((c) => ({ ...c, relative: c.folder ? n.slice(c.folder.length + 1) : n, depth: c.folder ? c.folder.split("/").length : 0 })).filter((c) => c.recursive || !c.relative.includes("/")).sort((c, d) => d.depth - c.depth || c.id.localeCompare(d.id)), s = [];
  for (const c of [...new Set(r.map((d) => d.depth))]) {
    const d = [];
    for (const m of r.filter((k) => k.depth === c)) {
      const k = m.definition, S = k.kind === "guided" ? tu(m.relative, k.rule, i) : gg(m.relative, k.pattern, i), C = { id: m.id, name: k.name, folder: m.folder };
      s.push({ ...C, status: S.status }), ["ready", "conflict", "unchanged"].includes(S.status) && S.changes.length && d.push({ result: S, source: C });
    }
    if (s.some((m) => m.status === "ambiguous")) return { status: "ambiguous", changes: [], conflicts: [], attempts: s };
    if (!d.length) continue;
    const _ = /* @__PURE__ */ new Map();
    for (const { result: m, source: k } of d) for (const S of m.changes) {
      const C = _.get(S.field) || /* @__PURE__ */ new Map(), $ = JSON.stringify(S.values || [S.value]), L = C.get($);
      L ? L.sources.push(k) : C.set($, { ...S, sources: [k] }), _.set(S.field, C);
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
function wl(e) {
  const t = e.split(",").map((a) => a.trim());
  return t.length === 2 && t.every((a) => a && wg.test(a)) && e.length <= 120;
}
function Sr(e) {
  const t = e.split(",").map((a) => a.trim());
  return (wl(e) ? `${t[1]} ${t[0]}` : e).trim().replace(/\s+/g, " ").toLocaleLowerCase("en");
}
function sa(e, t = {}) {
  return { ...Cu(e), ...t };
}
function dn(e, t, ...a) {
  return { ...Cu(), split: { delimiter: e, occurrence: t, children: a } };
}
function gN(e, t = []) {
  if (typeof e != "string" || !e || e.length > 2e3 || is(e).length > 64) return [];
  const a = is(e), i = a.length - 1, n = a[i], r = a.slice(0, -1), s = eu(e), c = [], d = [];
  let _ = n, v = (Z) => Z, y = (Z) => Z, m = "", k = sa("title"), S = !1;
  const C = /^(.*\S) \(((?:18|19|20)\d{2})\)$/.exec(_), $ = !C && /^(.*\S) ((?:18|19|20)\d{2})$/.exec(_);
  C ? (_ = C[1], v = (Z) => dn(" (", "last", Z, sa("year", { suffix: ")" })), c.push("year-parentheses")) : $ && (_ = $[1], v = (Z) => dn(" ", "last", Z, sa("year")), c.push("year-trailing"), d.push("year-may-be-title"));
  const L = /^(.*\S) by (.+)$/.exec(_), P = /^(.*\S) - (.+)$/.exec(_), F = L || P, D = !L && P && (wl(P[1]) || Mp(P[1]) && r.some((Z) => Sr(Z) === Sr(P[1]))), fe = /^.+ #\d{1,3}(?:\.\d+)? - .+$/.test(_) && _.split(" - ").length === 2;
  D ? (m = P[1], _ = P[2], y = (Z) => dn(" - ", "first", sa("author"), Z), c.push("author-first"), d.push("author-needs-review")) : F && !fe && (Mp(F[2]) || wl(F[2])) && (m = F[2], _ = F[1], y = (Z) => dn(L ? " by " : " - ", "last", Z, sa("author")), c.push(L ? "author-by" : "author-dash"), r.some((Z) => Sr(Z) === Sr(m)) ? c.push("author-folder-agrees") : d.push("author-needs-review"));
  const J = /^(.*\S) #(\d{1,3}(?:\.\d+)?) - (.+)$/.exec(_), x = /^(\d{1,3}(?:\.\d+)?)\. (.+)$/.exec(_);
  if (J)
    k = dn(" #", "first", sa("series"), dn(" - ", "first", sa("seriesNumber"), sa("title"))), S = !0, c.push("series-inline");
  else if (x && r.length) {
    const Z = r.at(-1);
    !wl(Z) && !(m && Sr(Z) === Sr(m)) && !Fp.has(Z.toLowerCase()) && !Z.includes("_") && (k = dn(". ", "first", sa("seriesNumber"), sa("title")), s.parts[i - 1] = sa("series"), S = !0, c.push("series-folder"), d.push("series-needs-review"));
  }
  if (s.parts[i] = v(y(k)), !m) {
    const Z = S ? i - 2 : i - 1;
    Z >= 0 && wl(a[Z]) && (s.parts[Z] = sa("author"), c.push("author-comma"), d.push("author-needs-review"));
  }
  for (let Z = r.length - 1; Z >= 0; Z--) {
    if (s.parts[Z].field !== "ignore") continue;
    const ie = r[Z], B = ie.indexOf("_"), q = B < 0 ? ie : ie.slice(0, B);
    if (Fp.has(q.toLowerCase())) {
      s.parts[Z] = B < 0 ? sa("language") : dn("_", "first", sa("language"), sa("genre", { underscores: !0 })), c.push(B < 0 ? "language-folder" : "language-genre-folder");
      break;
    }
  }
  const V = [], W = (Z, ie, B, q) => {
    const M = tu(e, ie);
    if (!["ready", "conflict", "unchanged"].includes(M.status)) return;
    const G = t.slice(0, 40).map((ne) => typeof ne == "string" ? ne : ne.path).filter((ne) => typeof ne == "string"), ee = G.filter((ne) => ["ready", "conflict", "unchanged"].includes(tu(ne, ie).status)).length;
    V.push({ id: Z, rule: ie, clues: B, warnings: [...new Set(q)], preview: M.changes, matched: ee, total: G.length });
  };
  return c.length && W("detected", s, c, d), W("filename", eu(e), ["filename-title"], /(?:^|\D)(?:18|19|20)\d{2}(?:\D|$)/.test(n) ? ["year-may-be-title"] : []), V;
}
const mN = { class: "library-inference-suggestions" }, yN = ["disabled"], _N = {
  value: "",
  disabled: ""
}, wN = ["value"], kN = {
  key: 0,
  "aria-live": "polite"
}, SN = {
  __name: "InferenceSuggestions",
  props: { path: { type: String, default: "" }, sample: { type: Array, default: () => [] }, rule: { type: Object, default: null } },
  emits: ["choose"],
  setup(e, { emit: t }) {
    const a = e, i = t, n = /* @__PURE__ */ j(""), r = H(() => gN(a.path, a.sample)), s = H(() => r.value.find((v) => v.id === n.value)), c = H(() => ({
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
    })), d = H(() => ({
      "year-may-be-title": g("library", "A year-like number may belong to the title. Check before applying."),
      "author-needs-review": g("library", "A name-shaped phrase may be a title or several people. Check the author; commas are preserved."),
      "series-needs-review": g("library", "Check that the parent folder names a series and the number is its position.")
    }));
    Ge(() => a.path, () => {
      n.value = "";
    }), Ge(() => JSON.stringify(a.rule), (v) => {
      s.value && JSON.stringify(s.value.rule) !== v && (n.value = "");
    });
    function _(v) {
      n.value = v.target.value, s.value && i("choose", JSON.parse(JSON.stringify(s.value.rule)));
    }
    return (v, y) => (f(), p("div", mN, [
      l("label", null, [
        de(Be, {
          text: u(g)("library", "Suggest editable assignments from the selected example. Check the live preview and other books before applying. Matching counts describe this page and its structure, not verified metadata.") + (s.value ? `

` + s.value.clues.map((m) => c.value[m]).join(`
`) : "")
        }, {
          default: ke(() => [
            Q(o(u(g)("library", "Suggest fields")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        be(l("select", {
          "onUpdate:modelValue": y[0] || (y[0] = (m) => n.value = m),
          disabled: !r.value.length,
          onChange: _
        }, [
          l("option", _N, o(u(g)("library", "Choose a suggestion")), 1),
          (f(!0), p(K, null, oe(r.value, (m) => (f(), p("option", {
            key: m.id,
            value: m.id
          }, o(m.id === "filename" ? u(g)("library", "Title from filename") : u(g)("library", "Suggested assignments")), 9, wN))), 128))
        ], 40, yN), [
          [it, n.value]
        ])
      ]),
      s.value ? (f(), p("div", kN, [
        l("p", null, o(u(g)("library", "{matched} of {total} paths on this page match this structure.", { matched: s.value.matched, total: s.value.total })), 1),
        (f(!0), p(K, null, oe(s.value.warnings, (m) => (f(), p("p", {
          key: m,
          class: "library-inference-suggestion-warning"
        }, o(d.value[m]), 1))), 128))
      ])) : A("", !0)
    ]));
  }
}, CN = ["aria-label", "aria-busy"], TN = {
  key: 0,
  role: "alert"
}, AN = {
  key: 1,
  role: "status"
}, EN = { class: "library-inference-step" }, $N = ["disabled"], xN = ["value"], ON = ["disabled", "placeholder"], NN = { class: "library-inference-checkbox" }, RN = ["disabled"], IN = ["disabled"], LN = {
  key: 0,
  class: "library-inference-path"
}, PN = ["aria-label"], DN = ["disabled"], FN = ["disabled", "onClick"], MN = {
  key: 2,
  class: "library-inference-step"
}, UN = { class: "library-inference-editor" }, zN = { class: "library-inference-controls" }, jN = { class: "library-inference-scope" }, BN = ["value"], HN = ["open"], VN = { value: "guided" }, qN = { value: "pattern" }, GN = { value: "folders" }, KN = {
  key: 0,
  role: "status"
}, WN = { class: "library-inference-checkbox" }, YN = {
  key: 2,
  class: "library-inference-pattern",
  open: ""
}, ZN = ["aria-label"], XN = ["title"], JN = {
  key: 0,
  "aria-live": "polite",
  "aria-atomic": "true"
}, QN = { class: "library-inference-live-status" }, eR = { key: 1 }, tR = {
  key: 0,
  class: "library-inference-author-chips"
}, aR = {
  key: 1,
  dir: "auto"
}, iR = { dir: "auto" }, nR = { key: 2 }, rR = { dir: "auto" }, lR = { key: 3 }, sR = { key: 2 }, oR = { key: 1 }, uR = {
  class: "library-inference-path",
  dir: "ltr"
}, cR = { class: "library-inference-step" }, dR = { value: "all" }, fR = ["value"], hR = { key: 0 }, pR = { class: "library-inference-path" }, vR = {
  key: 1,
  class: "library-inference-table-scroll"
}, bR = { key: 2 }, gR = ["aria-label"], mR = ["disabled"], yR = ["disabled"], _R = {
  __name: "PathInference",
  props: { requestToken: { type: String, default: "" } },
  setup(e) {
    const t = /* @__PURE__ */ j([]), a = /* @__PURE__ */ j(""), i = /* @__PURE__ */ j(""), n = /* @__PURE__ */ j(!0), r = /* @__PURE__ */ j([]), s = /* @__PURE__ */ j(1), c = /* @__PURE__ */ j(!1), d = /* @__PURE__ */ j(!1), _ = /* @__PURE__ */ j(""), v = /* @__PURE__ */ j(""), y = /* @__PURE__ */ j(""), m = /* @__PURE__ */ j(""), k = /* @__PURE__ */ j(""), S = /* @__PURE__ */ j([]), C = /* @__PURE__ */ j(null), $ = /* @__PURE__ */ j("guided"), L = /* @__PURE__ */ j(0), P = /* @__PURE__ */ j("%folders%/%title%.%extension%"), F = /* @__PURE__ */ j("all"), D = /* @__PURE__ */ j(!0);
    let fe = 0;
    const J = H(() => [
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
    ]), x = H(() => Object.fromEntries(J.value)), V = H(() => ({
      ready: g("library", "Empty field suggestions"),
      conflict: g("library", "Existing values need review"),
      unmatched: g("library", "Unmatched paths"),
      ambiguous: g("library", "Ambiguous matches"),
      invalid: g("library", "Invalid pattern or value"),
      unchanged: g("library", "No changes")
    })), W = H(() => r.value.map((ye) => ({ ...ye, ...$.value === "folders" ? bN(ye.path, k.value, S.value, ye.current) : $.value === "guided" ? tu(ye.path, C.value, ye.current) : gg(ye.path, P.value, ye.current) }))), Z = H(() => W.value.find((ye) => ye.path === y.value)), ie = H(() => W.value.filter((ye) => F.value === "all" || ye.status === F.value)), B = H(() => [...new Set(r.value.filter((ye) => ye.path.includes("/")).map((ye) => ye.path.split("/")[0]))]);
    function q(ye) {
      i.value = [i.value.replace(/\/$/, ""), ye].filter(Boolean).join("/"), Me();
    }
    function M() {
      i.value = i.value.replace(/\/$/, "").split("/").slice(0, -1).join("/"), Me();
    }
    const G = H(() => W.value.reduce((ye, Ne) => (ye[Ne.status] = (ye[Ne.status] || 0) + 1, ye), {})), ee = H(() => a.value !== m.value || i.value.replace(/^\/+|\/+$/g, "") !== k.value), ne = H(() => is(y.value));
    function X() {
      !C.value && y.value && (C.value = eu(y.value));
    }
    function le() {
      C.value = eu(y.value), L.value++, $.value = "guided";
    }
    function _e(ye) {
      C.value = ye, L.value++, $.value = "guided";
    }
    function Re(ye) {
      _e(ye), D.value = !1;
    }
    function $e(ye) {
      P.value = ye, $.value = "pattern";
    }
    async function Me(ye = 1) {
      const Ne = ++fe;
      d.value = !0, _.value = "", r.value = [];
      try {
        const ge = new URLSearchParams();
        a.value && (ge.set("rootId", a.value), ge.set("folder", i.value), ge.set("recursive", n.value ? "1" : "0"), ge.set("page", String(ye)));
        const De = await fetch(`${Et("/apps/library/api/inference/sample")}?${ge}`, { credentials: "same-origin", cache: "no-store" });
        if (!De.ok) throw new Error(g("library", "Could not load this folder. Check its path and your access."));
        const nt = await De.json();
        if (Ne !== fe) return;
        if (t.value = nt.roots, !a.value && (a.value = String(nt.roots[0]?.id || ""), a.value))
          return Me();
        m.value !== a.value && (S.value = []), m.value = a.value;
        const te = nt.roots.find((T) => String(T.id) === a.value)?.path.replace(/\/$/, "") || "";
        k.value = nt.scope.slice(te.length).replace(/^\//, ""), r.value = nt.items || [], s.value = nt.page || 1, c.value = !!nt.hasNext, v.value = nt.scope || "", y.value = r.value[0]?.path || "", X();
      } catch (ge) {
        Ne === fe && (_.value = ge.message);
      } finally {
        Ne === fe && (d.value = !1);
      }
    }
    function Ze(ye) {
      ye.rootId === m.value && (S.value = ye.assignments);
    }
    function ct() {
      i.value = "", Me();
    }
    return Ct(() => Me()), (ye, Ne) => (f(), p("section", {
      class: "library-inference",
      "aria-label": u(g)("library", "Extract metadata from paths"),
      "aria-busy": d.value ? "true" : "false"
    }, [
      l("h1", null, [
        de(Be, {
          text: u(g)("library", "Preview a naming rule, select fields and review before applying. Source files are never changed.")
        }, {
          default: ke(() => [
            Q(o(u(g)("library", "Extract metadata from paths")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      _.value ? (f(), p("p", TN, o(_.value), 1)) : A("", !0),
      d.value ? (f(), p("p", AN, o(u(g)("library", "Loading or saving…")), 1)) : A("", !0),
      l("section", EN, [
        l("h2", null, o(u(g)("library", "1. Choose a folder")), 1),
        l("form", {
          class: "library-inference-scope",
          onSubmit: Ne[3] || (Ne[3] = Se((ge) => Me(), ["prevent"]))
        }, [
          l("label", null, [
            de(Be, {
              text: u(g)("library", "Up to 40 accessible indexed books per page. Counts below describe this sample, not the entire folder.")
            }, {
              default: ke(() => [
                Q(o(u(g)("library", "Library root")), 1)
              ]),
              _: 1
            }, 8, ["text"]),
            be(l("select", {
              "onUpdate:modelValue": Ne[0] || (Ne[0] = (ge) => a.value = ge),
              disabled: d.value || !t.value.length,
              onChange: ct
            }, [
              (f(!0), p(K, null, oe(t.value, (ge) => (f(), p("option", {
                key: ge.id,
                value: String(ge.id)
              }, o(ge.label), 9, xN))), 128))
            ], 40, $N), [
              [it, a.value]
            ])
          ]),
          l("label", null, [
            Q(o(u(g)("library", "Subfolder relative to this root")), 1),
            be(l("input", {
              "onUpdate:modelValue": Ne[1] || (Ne[1] = (ge) => i.value = ge),
              type: "text",
              disabled: d.value,
              placeholder: u(g)("library", "Leave empty for the whole root")
            }, null, 8, ON), [
              [Ue, i.value]
            ])
          ]),
          l("label", NN, [
            be(l("input", {
              "onUpdate:modelValue": Ne[2] || (Ne[2] = (ge) => n.value = ge),
              type: "checkbox",
              disabled: d.value
            }, null, 8, RN), [
              [ui, n.value]
            ]),
            Q(o(u(g)("library", "Include subfolders")), 1)
          ]),
          l("button", {
            class: "button primary",
            disabled: d.value || !a.value
          }, o(u(g)("library", "Load sample")), 9, IN)
        ], 32),
        v.value ? (f(), p("p", LN, o(v.value), 1)) : A("", !0),
        l("div", {
          class: "library-inference-presets",
          "aria-label": u(g)("library", "Folders in this sample")
        }, [
          i.value ? (f(), p("button", {
            key: 0,
            class: "button secondary",
            disabled: d.value,
            onClick: M
          }, o(u(g)("library", "Parent folder")), 9, DN)) : A("", !0),
          (f(!0), p(K, null, oe(B.value, (ge) => (f(), p("button", {
            key: ge,
            class: "button secondary",
            disabled: d.value,
            onClick: (De) => q(ge)
          }, o(ge) + "/", 9, FN))), 128))
        ], 8, PN)
      ]),
      r.value.length ? (f(), p("section", MN, [
        l("h2", null, o(u(g)("library", "2. Describe the structure")), 1),
        l("div", UN, [
          l("div", zN, [
            l("div", jN, [
              l("label", null, [
                de(Be, {
                  text: u(g)("library", "Assignments stay the same when you select another example. Reset them to use a different folder structure.")
                }, {
                  default: ke(() => [
                    Q(o(u(g)("library", "Example path")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                be(l("select", {
                  "onUpdate:modelValue": Ne[4] || (Ne[4] = (ge) => y.value = ge),
                  onChange: Ne[5] || (Ne[5] = (ge) => X())
                }, [
                  (f(!0), p(K, null, oe(r.value, (ge) => (f(), p("option", {
                    key: ge.id,
                    value: ge.path
                  }, o(ge.path), 9, BN))), 128))
                ], 544), [
                  [it, y.value]
                ])
              ])
            ]),
            de(SN, {
              path: y.value,
              sample: r.value,
              rule: $.value === "guided" ? C.value : null,
              onChoose: Re
            }, null, 8, ["path", "sample", "rule"]),
            l("details", {
              class: "library-inference-customize",
              open: D.value,
              onToggle: Ne[9] || (Ne[9] = (ge) => D.value = ge.target.open)
            }, [
              l("summary", null, o(u(g)("library", "Edit pattern")), 1),
              l("label", null, [
                Q(o(u(g)("library", "Rule editor")), 1),
                be(l("select", {
                  "onUpdate:modelValue": Ne[6] || (Ne[6] = (ge) => $.value = ge)
                }, [
                  l("option", VN, o(u(g)("library", "Guided assignments")), 1),
                  l("option", qN, o(u(g)("library", "Advanced pattern")), 1),
                  l("option", GN, o(u(g)("library", "Folder rules")), 1)
                ], 512), [
                  [it, $.value]
                ])
              ]),
              $.value === "folders" ? (f(), Pe(vN, {
                key: 0,
                "root-id": m.value,
                folder: k.value,
                "request-token": e.requestToken,
                disabled: d.value,
                "scope-pending": ee.value,
                onLoaded: Ze
              }, null, 8, ["root-id", "folder", "request-token", "disabled", "scope-pending"])) : A("", !0),
              $.value === "guided" && C.value ? (f(), p(K, { key: 1 }, [
                de(Dp, {
                  mode: "guided",
                  rule: C.value,
                  "request-token": e.requestToken,
                  onChooseRule: _e
                }, null, 8, ["rule", "request-token"]),
                l("button", {
                  class: "button secondary",
                  onClick: le
                }, o(u(g)("library", "Reset assignments from this example")), 1),
                ne.value.length !== C.value.parts.length ? (f(), p("p", KN, o(u(g)("library", "This example has a different folder depth and does not match the rule.")), 1)) : A("", !0),
                (f(!0), p(K, null, oe(C.value.parts, (ge, De) => (f(), p("div", {
                  key: `${L.value}-${De}`
                }, [
                  l("h3", null, o(De === C.value.parts.length - 1 ? u(g)("library", "Filename") : u(g)("library", "Folder")) + " " + o(De + 1), 1),
                  de(UO, {
                    node: ge,
                    value: ne.value[De] || "",
                    fields: J.value
                  }, null, 8, ["node", "value", "fields"])
                ]))), 128)),
                l("label", WN, [
                  be(l("input", {
                    "onUpdate:modelValue": Ne[7] || (Ne[7] = (ge) => C.value.combineAuthors = ge),
                    type: "checkbox"
                  }, null, 512), [
                    [ui, C.value.combineAuthors]
                  ]),
                  de(Be, {
                    text: u(g)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + " " + u(g)("library", "Each author is stored separately and can be used to filter the catalogue.")
                  }, {
                    default: ke(() => [
                      Q(o(u(g)("library", "Combine authors from multiple parts")), 1)
                    ]),
                    _: 1
                  }, 8, ["text"])
                ])
              ], 64)) : A("", !0),
              $.value === "pattern" ? (f(), p("details", YN, [
                l("summary", null, o(u(g)("library", "Pattern and presets")), 1),
                de(Dp, {
                  pattern: P.value,
                  "request-token": e.requestToken,
                  onChoose: $e
                }, {
                  default: ke(() => [
                    l("label", null, [
                      de(Be, {
                        text: u(g)("library", "Placeholders capture text. Separators must match exactly. %folder% ignores one folder; %folders%/ ignores any folder depth; %ignore% ignores one filename part.") + `

` + J.value.map((ge) => `%${ge[0]}%`).join(" · ")
                      }, {
                        default: ke(() => [
                          Q(o(u(g)("library", "Advanced pattern")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      be(l("input", {
                        "onUpdate:modelValue": Ne[8] || (Ne[8] = (ge) => P.value = ge),
                        maxlength: "1000",
                        spellcheck: "false",
                        dir: "ltr"
                      }, null, 512), [
                        [Ue, P.value]
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["pattern", "request-token"])
              ])) : A("", !0)
            ], 40, HN)
          ]),
          l("aside", {
            class: "library-inference-live",
            "aria-label": u(g)("library", "Live preview")
          }, [
            l("h3", null, o(u(g)("library", "Live preview")), 1),
            l("p", {
              class: "library-inference-live-path",
              title: y.value
            }, o(y.value), 9, XN),
            Z.value ? (f(), p("div", JN, [
              l("p", QN, o(V.value[Z.value.status]), 1),
              $.value === "folders" ? (f(), Pe(vd, {
                key: 0,
                result: Z.value,
                labels: x.value,
                statuses: V.value
              }, null, 8, ["result", "labels", "statuses"])) : A("", !0),
              Z.value.changes.length ? (f(), p("dl", eR, [
                (f(!0), p(K, null, oe(Z.value.changes, (ge) => (f(), p("div", {
                  key: ge.field,
                  class: Te(["library-inference-live-field", `library-inference-live-field--${ge.status}`])
                }, [
                  l("dt", null, o(x.value[ge.field]), 1),
                  l("dd", null, [
                    ge.field === "author" && ge.values ? (f(), p("span", tR, [
                      (f(!0), p(K, null, oe(ge.values, (De) => (f(), p("strong", {
                        key: De,
                        dir: "auto"
                      }, o(De), 1))), 128))
                    ])) : (f(), p("strong", aR, o(ge.value || "—"), 1)),
                    l("small", null, [
                      Q(o(u(g)("library", "Current value")) + ": ", 1),
                      l("span", iR, o(ge.before || "—"), 1)
                    ]),
                    ge.raw !== ge.value ? (f(), p("small", nR, [
                      Q(o(u(g)("library", "Source text")) + ": ", 1),
                      l("span", rR, o(ge.raw), 1)
                    ])) : A("", !0),
                    l("small", null, o(V.value[ge.status]), 1),
                    ge.sources ? (f(), p("small", lR, o(u(g)("library", "Matched rule")) + ": " + o(ge.sources.map((De) => De.name).join(", ")), 1)) : A("", !0)
                  ])
                ], 2))), 128))
              ])) : Z.value.conflicts?.length ? A("", !0) : (f(), p("p", sR, o(u(g)("library", "No fields extracted from this example. Check the rule, separators and transformations.")), 1))
            ])) : A("", !0),
            $.value === "pattern" ? (f(), p("details", oR, [
              l("summary", null, o(u(g)("library", "Active pattern")), 1),
              l("code", uR, o(P.value), 1)
            ])) : A("", !0)
          ], 8, ZN)
        ])
      ])) : A("", !0),
      l("section", cR, [
        l("h2", null, o(u(g)("library", "3. Review the sample")), 1),
        l("label", null, [
          de(Be, {
            text: u(g)("library", "Fill empty fields first. Existing values are flagged for review. No changes are applied in this preview.")
          }, {
            default: ke(() => [
              Q(o(u(g)("library", "Show results")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          be(l("select", {
            "onUpdate:modelValue": Ne[10] || (Ne[10] = (ge) => F.value = ge)
          }, [
            l("option", dR, o(u(g)("library", "All")) + " (" + o(W.value.length) + ")", 1),
            (f(!0), p(K, null, oe(V.value, (ge, De) => (f(), p("option", {
              key: De,
              value: De
            }, o(ge) + " (" + o(G.value[De] || 0) + ")", 9, fR))), 128))
          ], 512), [
            [it, F.value]
          ])
        ]),
        !ie.value.length && !d.value ? (f(), p("p", hR, o(u(g)("library", "No sample results here. Try another folder, page or result filter.")), 1)) : A("", !0),
        (f(!0), p(K, null, oe(ie.value, (ge) => (f(), p("details", {
          key: ge.id,
          class: "library-inference-result"
        }, [
          l("summary", null, [
            l("span", pR, o(ge.path), 1),
            l("strong", null, o(V.value[ge.status]), 1)
          ]),
          $.value === "folders" ? (f(), Pe(vd, {
            key: 0,
            result: ge,
            labels: x.value,
            statuses: V.value
          }, null, 8, ["result", "labels", "statuses"])) : A("", !0),
          ge.changes.length ? (f(), p("div", vR, [
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
                (f(!0), p(K, null, oe(ge.changes, (De) => (f(), p("tr", {
                  key: De.field
                }, [
                  l("th", null, o(x.value[De.field]), 1),
                  l("td", null, o(De.before || "—"), 1),
                  l("td", null, [
                    Q(o(De.value), 1),
                    l("small", null, o(V.value[De.status]), 1)
                  ]),
                  l("td", null, o(De.raw), 1)
                ]))), 128))
              ])
            ])
          ])) : ge.conflicts?.length ? A("", !0) : (f(), p("p", bR, o(u(g)("library", "Check separators, folder depth and field assignments. A unique interpretation is required.")), 1))
        ]))), 128)),
        l("nav", {
          class: "library-inference-presets",
          "aria-label": u(g)("library", "Sample pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: d.value || s.value === 1,
            onClick: Ne[11] || (Ne[11] = (ge) => Me(s.value - 1))
          }, o(u(g)("library", "Previous page")), 9, mR),
          l("span", null, o(s.value), 1),
          l("button", {
            class: "button secondary",
            disabled: d.value || !c.value,
            onClick: Ne[12] || (Ne[12] = (ge) => Me(s.value + 1))
          }, o(u(g)("library", "Next page")), 9, yR)
        ], 8, gR)
      ]),
      de(_g, {
        class: "library-inference-step",
        results: W.value,
        labels: x.value,
        "request-token": e.requestToken,
        disabled: d.value || ee.value,
        context: JSON.stringify({ mode: $.value, pattern: $.value === "pattern" ? P.value : void 0, rule: $.value === "guided" ? C.value : void 0, folderRules: $.value === "folders" ? S.value : void 0, rootId: m.value, folder: k.value }),
        onChanged: Ne[13] || (Ne[13] = (ge) => Me(s.value))
      }, null, 8, ["results", "labels", "request-token", "disabled", "context"]),
      de(gO, {
        definition: { mode: $.value, pattern: P.value, rule: C.value, rootId: m.value, folder: k.value, recursive: n.value },
        labels: x.value,
        statuses: V.value,
        "request-token": e.requestToken,
        disabled: d.value || ee.value || !m.value
      }, null, 8, ["definition", "labels", "statuses", "request-token", "disabled"])
    ], 8, CN));
  }
}, wR = ["aria-label", "title", "onClick"], kR = {
  key: 0,
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, SR = { id: "library-sidebar-filters-heading" }, CR = ["aria-label"], TR = ["value"], AR = ["name", "value"], ER = ["value"], $R = ["value"], xR = {
  class: "library-filter-group",
  "data-library-filter-group": "content"
}, OR = ["title"], NR = ["placeholder"], RR = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "q"
}, IR = { value: "" }, LR = ["value"], PR = { class: "library-publisher-filter" }, DR = { for: "library-publisher-search" }, FR = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], MR = ["value"], UR = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, zR = {
  key: 1,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, jR = ["id", "aria-selected"], BR = ["onClick"], HR = { class: "library-publication-filter" }, VR = { for: "library-publication-search" }, qR = ["placeholder", "aria-expanded"], GR = ["value"], KR = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, WR = {
  key: 1,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, YR = ["onClick"], ZR = { class: "library-year-filter" }, XR = { for: "library-year-search" }, JR = ["placeholder", "aria-expanded"], QR = ["value"], eI = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, tI = {
  key: 1,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, aI = ["onClick"], iI = { class: "library-creator-filter" }, nI = { for: "library-creator-search" }, rI = ["placeholder", "title", "aria-expanded"], lI = ["value"], sI = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, oI = {
  key: 1,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, uI = ["onClick"], cI = { class: "library-tag-filter" }, dI = { for: "library-tag-search" }, fI = ["placeholder", "aria-expanded"], hI = ["value"], pI = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, vI = ["onClick"], bI = { value: "" }, gI = ["value"], mI = {
  class: "library-filter-group",
  "data-library-filter-group": "location"
}, yI = { value: "" }, _I = ["value"], wI = { class: "library-folder-filter" }, kI = { for: "library-folder-search" }, SI = ["placeholder", "title", "aria-expanded"], CI = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, TI = ["onClick"], AI = {
  class: "library-filter-group",
  "data-library-filter-group": "review"
}, EI = { value: "" }, $I = ["value"], xI = { value: "" }, OI = ["value"], NI = { class: "library-subject-filter" }, RI = { for: "library-subject-search" }, II = ["placeholder", "title", "aria-expanded"], LI = ["value"], PI = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, DI = {
  key: 1,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, FI = ["onClick"], MI = { class: "library-classification-filter" }, UI = { for: "library-classification-search" }, zI = ["placeholder", "title", "aria-expanded"], jI = ["value"], BI = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, HI = ["onClick"], VI = { value: "" }, qI = { value: "1" }, GI = {
  class: "library-filter-group",
  "data-library-filter-group": "personal"
}, KI = {
  type: "submit",
  class: "button primary"
}, WI = ["href"], YI = ["lang", "dir"], ZI = ["aria-label"], XI = ["href", "aria-label", "title", "onClick"], JI = ["title"], QI = ["href"], eL = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, tL = { class: "library-review-header" }, aL = { class: "library-muted library-catalogue-eyebrow" }, iL = { id: "library-review-heading" }, nL = ["aria-label"], rL = ["href", "aria-current", "onClick"], lL = ["aria-label"], sL = ["name", "value"], oL = {
  type: "submit",
  class: "button secondary"
}, uL = ["aria-busy"], cL = { key: 0 }, dL = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, fL = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, hL = { class: "library-metadata-review-workbench-copy" }, pL = { class: "library-muted library-catalogue-eyebrow" }, vL = ["title"], bL = {
  key: 0,
  class: "library-metadata-review-card"
}, gL = {
  class: "library-bidi-human",
  dir: "auto"
}, mL = { class: "library-muted" }, yL = {
  class: "library-bidi-machine",
  dir: "ltr"
}, _L = { class: "library-metadata-review-fields" }, wL = {
  class: "library-bidi-human",
  dir: "auto"
}, kL = {
  class: "library-bidi-human",
  dir: "auto"
}, SL = {
  class: "library-bidi-human",
  dir: "auto"
}, CL = {
  class: "library-bidi-machine",
  dir: "ltr"
}, TL = {
  class: "library-bidi-human",
  dir: "auto"
}, AL = {
  class: "library-bidi-human",
  dir: "auto"
}, EL = ["action"], $L = ["value"], xL = ["value"], OL = ["disabled", "title"], NL = { class: "library-metadata-review-actions" }, RL = ["href"], IL = ["href"], LL = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, PL = ["href"], DL = ["aria-label"], FL = ["onClick"], ML = {
  class: "library-bidi-human",
  dir: "auto"
}, UL = {
  key: 0,
  class: "library-muted"
}, zL = {
  class: "library-bidi-human",
  dir: "auto"
}, jL = {
  key: 1,
  class: "library-scan-error"
}, BL = {
  class: "library-bidi-human",
  dir: "auto"
}, HL = ["onClick"], VL = ["href", "onClick"], qL = ["aria-label"], GL = ["href"], KL = {
  key: 1,
  class: "library-muted"
}, WL = { key: 0 }, YL = ["href"], ZL = {
  key: 3,
  class: "library-muted"
}, XL = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, JL = { class: "library-home-header" }, QL = { class: "library-muted library-catalogue-eyebrow" }, eP = { id: "library-home-heading" }, tP = ["aria-label"], aP = ["aria-label"], iP = ["href", "aria-label", "onClick"], nP = ["title"], rP = { class: "library-empty-actions" }, lP = ["href"], sP = ["href"], oP = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, uP = { id: "library-continue-heading" }, cP = ["href"], dP = {
  key: 0,
  class: "library-home-card-row"
}, fP = ["aria-label", "onClick"], hP = { class: "library-cover-frame" }, pP = ["src"], vP = { class: "library-cover-summary" }, bP = ["onClick"], gP = { dir: "auto" }, mP = {
  key: 0,
  class: "library-cover-creator"
}, yP = { dir: "auto" }, _P = ["href", "onClick"], wP = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, kP = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, SP = { id: "library-recent-heading" }, CP = ["href"], TP = {
  key: 0,
  class: "library-home-card-row"
}, AP = ["aria-label", "onClick"], EP = { class: "library-cover-frame" }, $P = ["src"], xP = { class: "library-cover-summary" }, OP = ["onClick"], NP = { dir: "auto" }, RP = {
  key: 0,
  class: "library-cover-creator"
}, IP = { dir: "auto" }, LP = ["href", "onClick"], PP = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, DP = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, FP = { id: "library-home-shelves-heading" }, MP = ["href"], UP = ["aria-label"], zP = ["href"], jP = { dir: "auto" }, BP = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, HP = {
  key: 1,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, VP = { id: "library-home-attention-heading" }, qP = { class: "library-muted" }, GP = ["href"], KP = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, WP = { class: "library-home-header" }, YP = { class: "library-muted library-catalogue-eyebrow" }, ZP = { id: "library-shelves-landing-heading" }, XP = ["aria-label"], JP = ["aria-label"], QP = ["href", "aria-label", "onClick"], e8 = ["title"], t8 = { class: "library-empty-actions" }, a8 = ["href"], i8 = ["href"], n8 = ["aria-label"], r8 = { class: "library-shelf-tree" }, l8 = {
  key: 2,
  class: "library-shelves-empty",
  role: "status"
}, s8 = { class: "library-muted" }, o8 = { class: "library-empty-actions" }, u8 = ["href"], c8 = ["href"], d8 = ["aria-busy"], f8 = { class: "library-catalogue-header" }, h8 = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, p8 = ["aria-label"], v8 = { class: "library-mobile-filter-count" }, b8 = ["aria-label"], g8 = ["value"], m8 = ["name", "value"], y8 = { class: "library-mobile-filter-group" }, _8 = { class: "library-quick-filter-search" }, w8 = ["placeholder"], k8 = { value: "" }, S8 = ["value"], C8 = { class: "library-publisher-filter" }, T8 = { for: "library-mobile-publisher-search" }, A8 = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], E8 = ["value"], $8 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, x8 = {
  key: 1,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, O8 = ["id", "aria-selected"], N8 = ["onClick"], R8 = { class: "library-publication-filter" }, I8 = { for: "library-mobile-publication-search" }, L8 = ["placeholder", "aria-expanded"], P8 = ["value"], D8 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, F8 = {
  key: 1,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, M8 = ["onClick"], U8 = { class: "library-year-filter" }, z8 = { for: "library-mobile-year-search" }, j8 = ["placeholder", "aria-expanded"], B8 = ["value"], H8 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, V8 = {
  key: 1,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, q8 = ["onClick"], G8 = { class: "library-creator-filter" }, K8 = { for: "library-mobile-creator-search" }, W8 = ["placeholder", "title", "aria-expanded"], Y8 = ["value"], Z8 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, X8 = {
  key: 1,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, J8 = ["onClick"], Q8 = { value: "" }, e5 = ["value"], t5 = { class: "library-subject-filter" }, a5 = { for: "library-mobile-subject-search" }, i5 = ["placeholder", "title", "aria-expanded"], n5 = ["value"], r5 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, l5 = {
  key: 1,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, s5 = ["onClick"], o5 = { class: "library-classification-filter" }, u5 = { for: "library-mobile-classification-search" }, c5 = ["placeholder", "title", "aria-expanded"], d5 = ["value"], f5 = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, h5 = ["onClick"], p5 = { class: "library-mobile-filter-group" }, v5 = { value: "" }, b5 = ["value"], g5 = { class: "library-folder-filter" }, m5 = { for: "library-mobile-folder-search" }, y5 = ["placeholder", "title", "aria-expanded"], _5 = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, w5 = ["onClick"], k5 = { class: "library-mobile-filter-group" }, S5 = { value: "" }, C5 = ["value"], T5 = { value: "" }, A5 = ["value"], E5 = { value: "" }, $5 = { value: "1" }, x5 = { class: "library-mobile-filter-group" }, O5 = { class: "library-tag-filter" }, N5 = { for: "library-tag-search" }, R5 = ["placeholder", "aria-expanded"], I5 = ["value"], L5 = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, P5 = ["onClick"], D5 = { value: "title" }, F5 = { value: "recent" }, M5 = { value: "publicationDate" }, U5 = { value: "publication" }, z5 = { value: "lastOpened" }, j5 = { value: "format" }, B5 = { value: "compact" }, H5 = { value: "list" }, V5 = { class: "library-mobile-filter-actions" }, q5 = ["href"], G5 = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, K5 = ["aria-label"], W5 = { class: "library-catalogue-control-band" }, Y5 = {
  id: "library-collections",
  class: "library-saved-collections"
}, Z5 = ["title"], X5 = ["action", "title"], J5 = ["value"], Q5 = ["value"], eD = { class: "library-control-label" }, tD = ["placeholder", "disabled"], aD = ["disabled", "title"], iD = ["aria-label"], nD = ["name", "value"], rD = {
  class: "library-sort-control",
  "data-library-control": "sort"
}, lD = { value: "title" }, sD = { value: "recent" }, oD = { value: "publicationDate" }, uD = { value: "publication" }, cD = { value: "lastOpened" }, dD = { value: "format" }, fD = ["aria-label"], hD = ["aria-pressed"], pD = ["aria-pressed"], vD = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, bD = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, gD = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, mD = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, yD = { key: 0 }, _D = { key: 1 }, wD = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, kD = { class: "library-muted library-catalogue-eyebrow" }, SD = ["title"], CD = ["aria-label"], TD = { key: 0 }, AD = { key: 1 }, ED = { key: 2 }, $D = ["aria-label"], xD = { key: 0 }, OD = { key: 1 }, ND = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, RD = { class: "library-muted library-catalogue-eyebrow" }, ID = ["title"], LD = ["aria-label"], PD = ["href"], DD = {
  key: 0,
  class: "library-notice"
}, FD = { class: "library-publication-issue-label" }, MD = ["href"], UD = { class: "library-muted" }, zD = {
  key: 1,
  class: "library-publication-unknown-issues"
}, jD = ["title"], BD = ["href"], HD = { class: "library-catalogue-status-row" }, VD = { class: "library-muted library-filter-result-summary" }, qD = ["aria-label"], GD = { class: "library-pagination-range" }, KD = { key: 0 }, WD = ["href"], YD = {
  key: 1,
  class: "library-muted"
}, ZD = ["href"], XD = {
  key: 3,
  class: "library-muted"
}, JD = ["title"], QD = { class: "library-empty-actions" }, e9 = ["href"], t9 = { class: "library-muted" }, a9 = ["title"], i9 = { class: "library-empty-actions" }, n9 = ["href"], r9 = ["title"], l9 = ["aria-label"], s9 = ["href", "aria-label", "onClick"], o9 = ["title"], u9 = {
  key: 1,
  class: "library-muted"
}, c9 = { class: "library-empty-actions" }, d9 = ["href"], f9 = ["title"], h9 = { class: "library-empty-actions" }, p9 = ["href"], v9 = ["aria-label"], b9 = { class: "library-list-selection-actions" }, g9 = { class: "library-select-visible" }, m9 = ["checked"], y9 = ["title"], _9 = {
  key: 0,
  "aria-live": "polite"
}, w9 = ["aria-label"], k9 = { value: "" }, S9 = { value: "tag" }, C9 = { value: "untag" }, T9 = { value: "edit" }, A9 = { value: "covers" }, E9 = { value: "reset" }, $9 = ["action"], x9 = ["value"], O9 = ["placeholder"], N9 = ["title"], R9 = ["action"], I9 = ["value"], L9 = ["placeholder"], P9 = ["title"], D9 = ["action"], F9 = ["value"], M9 = ["name", "value"], U9 = ["title"], z9 = ["action"], j9 = ["value"], B9 = ["name", "value"], H9 = { name: "bulkEditField" }, V9 = { value: "publicationType" }, q9 = { value: "subtitle" }, G9 = { value: "creators" }, K9 = { value: "publication" }, W9 = { value: "series" }, Y9 = { value: "seriesNumber" }, Z9 = { value: "genre" }, X9 = { value: "publicationDate" }, J9 = { value: "language" }, Q9 = { value: "publisher" }, eF = { value: "subjects" }, tF = { value: "classifications" }, aF = ["placeholder"], iF = ["title"], nF = ["action"], rF = ["value"], lF = ["name", "value"], sF = ["title"], oF = {
  key: 6,
  class: "library-duplicate-page-status",
  role: "status"
}, uF = {
  key: 7,
  class: "library-catalogue-list-scroll",
  "data-library-catalogue-list-scroll": ""
}, cF = {
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, dF = { class: "hidden-visually" }, fF = { class: "library-catalogue-list-selection" }, hF = { class: "hidden-visually" }, pF = { class: "library-catalogue-list-cover-heading" }, vF = { class: "hidden-visually" }, bF = { scope: "col" }, gF = { scope: "col" }, mF = { scope: "col" }, yF = { scope: "col" }, _F = { scope: "col" }, wF = { scope: "col" }, kF = { scope: "col" }, SF = { class: "library-catalogue-list-selection" }, CF = { class: "library-item-selection" }, TF = ["checked", "aria-label", "onChange"], AF = { class: "library-catalogue-list-cover-cell" }, EF = ["aria-label", "onClick"], $F = ["src"], xF = {
  scope: "row",
  class: "library-catalogue-list-title-cell"
}, OF = ["onClick"], NF = {
  class: "library-bidi-human",
  dir: "auto"
}, RF = ["href"], IF = { class: "library-catalogue-list-creators" }, LF = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, PF = ["aria-label"], DF = ["datetime"], FF = ["aria-label"], MF = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, UF = ["aria-label"], zF = ["dir"], jF = ["aria-label"], BF = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, HF = ["aria-label"], VF = { class: "library-catalogue-list-actions" }, qF = ["href", "onClick"], GF = ["onClick"], KF = { class: "library-item-selection" }, WF = ["checked", "aria-label", "onChange"], YF = ["aria-labelledby", "aria-expanded", "onClick"], ZF = ["id"], XF = ["action", "onSubmit"], JF = ["value"], QF = ["value"], eM = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], tM = ["data-library-star-error"], aM = { class: "library-cover-summary" }, iM = { class: "library-cover-primary" }, nM = ["href"], rM = ["id"], lM = ["onClick"], sM = {
  class: "library-bidi-human",
  dir: "auto"
}, oM = {
  key: 1,
  class: "library-cover-creator"
}, uM = {
  class: "library-bidi-human",
  dir: "auto"
}, cM = {
  key: 2,
  class: "library-cover-context"
}, dM = {
  class: "library-bidi-human",
  dir: "auto"
}, fM = ["aria-label"], hM = { class: "library-pagination-range" }, pM = { key: 0 }, vM = ["href"], bM = {
  key: 1,
  class: "library-muted"
}, gM = ["href"], mM = {
  key: 3,
  class: "library-muted"
}, yM = { class: "library-sidebar-content" }, _M = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, wM = ["role"], kM = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, SM = { class: "library-sidebar-publication-header" }, CM = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, TM = ["src"], AM = { class: "library-sidebar-publication-summary" }, EM = { class: "library-muted library-catalogue-eyebrow" }, $M = {
  class: "library-bidi-human",
  dir: "auto"
}, xM = { key: 0 }, OM = {
  class: "library-bidi-machine",
  dir: "ltr"
}, NM = { class: "library-detail-drawer-actions" }, RM = ["href"], IM = ["aria-label"], LM = ["aria-current", "onClick"], PM = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, DM = { id: "library-sidebar-overview-heading" }, FM = {
  key: 0,
  class: "library-sidebar-description"
}, MM = {
  class: "library-bidi-human",
  dir: "auto"
}, UM = { class: "library-detail-drawer-facts" }, zM = { key: 0 }, jM = ["href", "title"], BM = {
  class: "library-bidi-human",
  dir: "auto"
}, HM = { key: 1 }, VM = ["href", "title"], qM = { key: 1 }, GM = { key: 2 }, KM = { key: 2 }, WM = ["href", "title"], YM = {
  class: "library-bidi-human",
  dir: "auto"
}, ZM = { key: 3 }, XM = { class: "library-detail-facet-list" }, JM = ["href", "title", "onClick"], QM = {
  class: "library-bidi-machine",
  dir: "ltr"
}, e6 = { key: 4 }, t6 = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, a6 = { id: "library-sidebar-metadata-heading" }, i6 = ["placeholder"], n6 = ["onUpdate:modelValue", "aria-label", "placeholder"], r6 = ["onUpdate:modelValue", "aria-label"], l6 = ["onClick"], s6 = {
  key: 0,
  role: "alert"
}, o6 = {
  key: 1,
  role: "status"
}, u6 = ["disabled"], c6 = {
  key: 1,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, d6 = { id: "library-sidebar-suggestions-heading" }, f6 = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, h6 = { id: "library-sidebar-activity-heading" }, p6 = { class: "library-detail-drawer-facts" }, v6 = { key: 0 }, b6 = { key: 1 }, g6 = { key: 2 }, m6 = { class: "library-detail-drawer-file" }, y6 = ["href"], _6 = { dir: "ltr" }, w6 = {
  key: 1,
  dir: "ltr"
}, k6 = ["aria-label"], S6 = ["href"], C6 = { dir: "auto" }, T6 = ["aria-label"], A6 = ["href"], E6 = { dir: "auto" }, $6 = ["aria-label"], x6 = ["href"], O6 = { dir: "auto" }, N6 = ["aria-label"], R6 = ["disabled"], I6 = ["disabled"], L6 = 20, P6 = "/apps/library", D6 = 2147483647, F6 = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = B_(g, () => `${os()}:${cb()}`), a = e, i = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = Object.freeze([
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
      for (const h of Object.keys(r)) {
        const U = [...new Set([...b.keys()].filter((Ee) => Ee === h || Ee.startsWith(`${h}[`)))], he = U.reduce((Ee, je) => Ee + b.getAll(je).length, 0);
        if (he > 1 || U.some((Ee) => Ee !== h)) {
          for (const Ee of U) b.delete(Ee);
          continue;
        }
        h !== "status" && he === 1 && !s(h, b.get(h)) && b.delete(h);
      }
      return b;
    }
    function d(w) {
      return Object.keys(r).some((b) => w.getAll(b).length === 1 && s(b, w.get(b)));
    }
    function _(w) {
      return Object.fromEntries(Object.entries(w || {}).filter(([b, h]) => b === "status" || !Object.prototype.hasOwnProperty.call(r, b) || s(b, h)));
    }
    const v = Object.freeze(["compact", "list"]);
    function y(w) {
      return v.includes(w) ? w : "compact";
    }
    const m = /* @__PURE__ */ Lt({
      ...a.state,
      items: a.state.items || [],
      activeFilters: a.state.activeFilters || {},
      cataloguePagination: a.state.cataloguePagination || {}
    }), k = /* @__PURE__ */ Lt((m.items || []).map((w) => ({ ...w }))), S = H(() => k), C = H(() => m.shelves || []), $ = H(() => m.formats || []), L = H(() => m.publicationTypes?.length ? m.publicationTypes : i), P = H(() => m.publications || []), F = H(() => m.publicationIssueContext || null), D = H(() => m.scanStatuses || []), fe = H(() => m.workflowStatuses || []), J = H(() => m.cataloguePagination || {
      page: 1,
      limit: 100,
      total: S.value.length,
      visible: S.value.length,
      from: S.value.length > 0 ? 1 : 0,
      to: S.value.length,
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
    const V = /* @__PURE__ */ j(x.publication), W = /* @__PURE__ */ j(x.q), Z = /* @__PURE__ */ j(!1), ie = /* @__PURE__ */ j(null), B = H(() => {
      const w = V.value.trim().toLocaleLowerCase();
      return (w !== "" && ie.value !== null ? ie.value : P.value).filter((h) => w === "" || h.toLocaleLowerCase().includes(w)).slice(0, L6);
    });
    Ge(() => x.publication, (w) => {
      V.value = w || "";
    }), Ge(() => x.q, (w) => {
      W.value = w || "";
    });
    let q = null, M = null, G = 0;
    Ge(V, (w) => {
      window.clearTimeout(q), M?.abort(), M = null, ie.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const h = ++G;
      q = window.setTimeout(() => {
        Jg(b, h);
      }, 200);
    });
    const ee = /* @__PURE__ */ j(x.publisher), ne = /* @__PURE__ */ j(!1), X = /* @__PURE__ */ j(null), le = H(() => X.value || []);
    Ge(() => x.publisher, (w) => {
      ee.value = w || "";
    });
    let _e = null, Re = null, $e = 0;
    Ge(ee, (w) => {
      window.clearTimeout(_e), Re?.abort(), Re = null, X.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const h = ++$e;
      _e = window.setTimeout(() => {
        Gg(b, h);
      }, 200);
    });
    const Me = /* @__PURE__ */ j(x.creator), Ze = /* @__PURE__ */ j(!1), ct = /* @__PURE__ */ j(null), ye = H(() => ct.value || []);
    Ge(() => x.creator, (w) => {
      Me.value = w || "";
    });
    let Ne = null, ge = null, De = 0;
    Ge(Me, (w) => {
      window.clearTimeout(Ne), ge?.abort(), ge = null, ct.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const h = ++De;
      Ne = window.setTimeout(() => {
        qg(b, h);
      }, 200);
    });
    const nt = /* @__PURE__ */ j(x.folder), te = /* @__PURE__ */ j(!1), T = /* @__PURE__ */ j(null), R = H(() => T.value || []);
    Ge(() => x.folder, (w) => {
      nt.value = w || "";
    });
    let I = null, N = null, O = 0;
    Ge(nt, (w) => {
      window.clearTimeout(I), N?.abort(), N = null, T.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const h = ++O;
      I = window.setTimeout(() => {
        Zg(b, h);
      }, 200);
    });
    const Y = /* @__PURE__ */ j(x.subject), ae = /* @__PURE__ */ j(!1), ue = /* @__PURE__ */ j(null), ve = H(() => ue.value || []);
    Ge(() => x.subject, (w) => {
      Y.value = w || "";
    });
    let ce = null, xe = null, we = 0;
    Ge(Y, (w) => {
      window.clearTimeout(ce), xe?.abort(), xe = null, ue.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const h = ++we;
      ce = window.setTimeout(() => {
        Kg(b, h);
      }, 200);
    });
    const Ae = /* @__PURE__ */ j(x.classification), Oe = /* @__PURE__ */ j(!1), Ve = /* @__PURE__ */ j(null), Ye = H(() => Ve.value || []);
    Ge(() => x.classification, (w) => {
      Ae.value = w || "";
    });
    let qe = null, at = null, dt = 0;
    Ge(Ae, (w) => {
      window.clearTimeout(qe), at?.abort(), at = null, Ve.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const h = ++dt;
      qe = window.setTimeout(() => {
        Wg(b, h);
      }, 200);
    });
    const yt = /* @__PURE__ */ j(x.tag), gt = /* @__PURE__ */ j(!1), ia = /* @__PURE__ */ j(null), pa = H(() => ia.value || []);
    Ge(() => x.tag, (w) => {
      yt.value = w || "";
    });
    let kt = null, Rt = null, Ma = 0;
    Ge(yt, (w) => {
      window.clearTimeout(kt), Rt?.abort(), Rt = null, ia.value = null;
      const b = String(w || "").trim();
      if (b.length < 2) return;
      const h = ++Ma;
      kt = window.setTimeout(() => {
        Yg(b, h);
      }, 200);
    });
    const Gt = /* @__PURE__ */ j(x.year), va = /* @__PURE__ */ j(!1), $n = /* @__PURE__ */ j(null), Wa = H(() => $n.value || []);
    Ge(() => x.year, (w) => {
      Gt.value = w || "";
    });
    let xn = null, Ta = null, Ya = 0;
    Ge(Gt, (w) => {
      window.clearTimeout(xn), Ta?.abort(), Ta = null, $n.value = null;
      const b = String(w || "").trim();
      if (b.length < 2) return;
      const h = ++Ya;
      xn = window.setTimeout(() => {
        Xg(b, h);
      }, 200);
    });
    const Za = Object.fromEntries(Object.keys(x).map((w) => [w, w === "sort" ? "title" : w === "view" ? "compact" : ""])), Fr = window.location.pathname.indexOf(P6), hi = Fr >= 0 ? window.location.pathname.slice(0, Fr) : "", Ki = {
      catalogue: `${hi}/apps/library/`,
      review: `${hi}/apps/library/?scannerConflicts=1`,
      settings: `${hi}/settings/user/library`
    };
    function Wi(w, b) {
      if (typeof w != "string" || w === "") return b;
      try {
        const h = hi ? `${hi}/` : "/";
        let U = w;
        for (let he = 0; he < 5; he += 1) {
          if (!U.startsWith("/") || U.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(U)) return b;
          const Ee = new URL(U, window.location.origin);
          if (Ee.origin !== window.location.origin || !Ee.pathname.startsWith(h)) return b;
          const je = U.split(/[?#]/, 1)[0];
          for (const _a of je.split("/")) {
            let Qa = _a;
            for (let mr = 0; mr < 5; mr += 1) {
              const ei = decodeURIComponent(Qa);
              if (/[\\/\u0000-\u001f\u007f]/.test(ei) || ei === "." || ei === "..") return b;
              if (ei === Qa) break;
              if (Qa = ei, mr === 4) return b;
            }
          }
          const Qe = decodeURI(U);
          if (Qe === U) return w;
          U = Qe;
        }
        return b;
      } catch {
        return b;
      }
    }
    const Yi = H(() => Wi(m.settingsUrl, Ki.settings)), rt = H(() => Wi(m.catalogueRootUrl, Ki.catalogue)), ur = H(() => Wi(m.homeUrl, `${Ki.catalogue}?home=1`)), ba = H(() => Wi(m.shelvesUrl, `${Ki.catalogue}?shelves=1`)), pi = H(() => Wi(m.reviewUrl || m.scannerConflictReviewUrl, Ki.review)), Zi = H(() => Object.entries(r).some(([w, b]) => x[w] === b)), cr = H(() => n.reduce((w, b) => w + Number(Vu.value[b.countKey] || 0), 0)), On = H(() => m.surface === "home"), Xi = H(() => m.surface === "shelves"), vi = H(() => m.surface === "duplicates"), Ji = H(() => m.surface === "inference"), bi = H(() => m.surface === "authors"), Nn = H(() => m.surface === "series"), Ua = H(() => m.surface === "lists"), Qi = H(() => `${rt.value}?lists=1`), Tu = Number(new URLSearchParams(window.location.search).get("addToList")) || null, _t = /* @__PURE__ */ j([]), Kt = /* @__PURE__ */ j("");
    async function cs() {
      try {
        _t.value = (await mn()).lists;
      } catch {
      }
    }
    Ct(cs);
    const ds = H(() => !bi.value && !Nn.value && !vi.value && !Ji.value && !Ua.value && !On.value && !Xi.value && !Zi.value && !x.starred && x.recentlyOpened !== "1" && !x.shelf), Mr = H(() => [
      { key: "home", name: t("library", "Home"), href: ur.value, active: On.value },
      { key: "all", name: t("library", "All publications"), href: rt.value, active: ds.value },
      { key: "starred", name: t("library", "Starred"), href: `${rt.value}?starred=1`, active: x.starred === "1" },
      { key: "continue", name: t("library", "Continue reading"), href: `${rt.value}?recentlyOpened=1&sort=lastOpened`, active: x.recentlyOpened === "1" },
      { key: "shelves", name: t("library", "Shelves"), href: ba.value, active: Xi.value || !!x.shelf },
      { key: "collections", name: t("library", "Collections"), href: `${rt.value}#library-collections`, active: !1 }
    ]), fs = H(() => pe.value.map((w) => ({
      key: `collection-${w.id}`,
      rawName: w.name,
      id: w.id,
      name: w.countPending ? w.name : `${w.name} (${At("library", "%n item", "%n items", Number(w.count || 0))})`,
      href: hm(w.filters),
      active: pm(w.filters)
    }))), ht = H(() => m.requestToken || ""), Ur = H(() => !!m.duplicateSuggestions), Au = H(() => JSON.stringify(S.value.map((w) => [w.id, w.title, w.creators, w.publicationDate]))), Eu = H(() => JSON.parse(Au.value).map((w) => Number(w[0]))), { results: gi, status: Xa } = vg(Eu, Ur, ht);
    function mi(w, b) {
      const h = String(w?.recordOpenUrl || "");
      if (!h || !ht.value) return;
      const U = new URLSearchParams({ requesttoken: ht.value });
      try {
        if (navigator.sendBeacon) {
          const he = new Blob([U.toString()], { type: "application/x-www-form-urlencoded" });
          navigator.sendBeacon(h, he);
          return;
        }
      } catch {
      }
      fetch(h, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", requesttoken: ht.value },
        body: U,
        credentials: "same-origin",
        keepalive: !0
      }).catch(() => {
      });
    }
    const Rn = H(() => m.catalogueEndpointUrl || "/apps/library/catalogue"), en = H(() => m.shelfChildrenUrl || "/apps/library/shelves/children"), hs = H(() => m.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), zr = H(() => m.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), jr = H(() => m.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), Br = H(() => m.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), $u = H(() => m.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), ps = H(() => m.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), xu = H(() => m.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), Ou = H(() => m.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Nu = H(() => m.itemSidebarUrlTemplate || `${hi}/apps/library/items/__ITEM_ID__/sidebar`), Ru = H(() => m.batchTagUrl || "/apps/library/bulk/tags"), vs = H(() => m.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Iu = H(() => m.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), bs = H(() => m.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Hr = H(() => m.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), In = H(() => m.scannerConflictReviewUrl || "?scannerConflicts=1");
    m.importHealthSummary, m.importHealthSummary && Object.keys(m.importHealthSummary).length > 0;
    const Ln = H(() => m.discoveryPage === "publication"), dr = H(() => m.discoveryPage === "year"), tn = H(() => m.discoveryPage === "creator"), Aa = H(() => Ln.value || dr.value || tn.value), an = H(() => m.discoveryTitle || x.publication || x.year || x.creator || ""), ga = H(() => Aa.value ? an.value : t("library", "Library")), gs = H(() => tn.value ? t("library", "Creator") : dr.value ? t("library", "Publication year") : t("library", "Publication / series")), Pn = H(() => Number(m.rootCount || 0)), Lu = H(() => Number(m.enabledRootCount || 0)), fr = H(() => Pn.value === 0), Ja = H(() => Pn.value > 0 && Lu.value === 0), hr = H(() => Wt.value.length > 0), Ea = /* @__PURE__ */ j(!1), ms = /* @__PURE__ */ j(null), Vr = /* @__PURE__ */ j(null), ys = {
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
    }, pr = H(() => {
      if (typeof window > "u") return "";
      const w = new URLSearchParams(window.location.search);
      if (w.get("batchMetadataApplyResult") !== "1") return "";
      const b = w.get("batchMetadataField") || "field", h = w.get("batchMetadataApplied") || "0", U = w.get("batchMetadataUnchanged") || "0", he = w.get("batchMetadataSkipped") || "0";
      return t("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: h, field: b, unchanged: U, skipped: he });
    }), nn = H(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? t("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), vr = H(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? t("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), pe = H(() => m.savedCollections || []), E = H(() => m.savedCollectionSaveUrl || "/apps/library/collections"), z = H(() => m.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), se = v, re = H(() => se.includes(x.view) ? x.view : "compact"), Ie = H(() => ({
      "library-cover-gallery--compact": re.value === "compact"
    }));
    function Fe(w) {
      const b = String(w || "").trim();
      if (b.length <= 32) return b;
      const h = b.split("/").filter(Boolean);
      return h.length > 0 ? `…/${h.at(-1)}` : b;
    }
    function Ke(w, b) {
      const h = String(b || "").trim();
      if (h === "" || Pu[w] === h) return "";
      if (w === "format") return h.toUpperCase();
      if (w === "folder") return Fe(h);
      const U = _s[w]?.[h];
      return U ? t("library", U) : h;
    }
    function Tt(w, b) {
      const h = String(x[w] || "").trim(), U = Ke(w, h), he = t("library", b);
      return {
        key: w,
        label: he,
        value: h,
        displayValue: U,
        title: U ? `${he}: ${h}` : he
      };
    }
    const Wt = H(() => Object.entries(ys).map(([w, b]) => Tt(w, b)).filter((w) => w.value !== "" && !(w.key === "sort" && w.value === "title") && !(w.key === "view" && w.value === "compact"))), pt = H(() => Wt.value.filter((w) => !["sort", "view"].includes(w.key))), It = H(() => Wt.value.length), yi = H(() => {
      const w = new URLSearchParams();
      for (const h of pt.value) w.set(h.key, h.value);
      const b = w.toString();
      return `${rt.value}${b ? `?${b}` : ""}`;
    }), $t = H(() => pt.value[0] || null), ws = H(() => W.value.trim() !== String(x.q || "").trim()), kg = H(() => String(x.q || "").trim() !== "" || ws.value);
    function ma(w) {
      return ({
        q: W,
        publisher: ee,
        publication: V,
        creator: Me,
        subject: Y,
        year: Gt,
        folder: nt,
        classification: Ae,
        tag: yt
      }[w]?.value ?? "").trim() !== String(x[w] || "").trim();
    }
    function za(w) {
      return ma(w) ? w === "q" ? t("library", "Not applied yet — press Enter or Apply.") : t("library", "Press Enter or Apply to use this value.") : "";
    }
    function _i(w) {
      return { "library-filter-apply--pending": ma(w) };
    }
    const Sg = H(() => It.value > 0 ? t("library", "Filters ({count})", { count: It.value }) : t("library", "Filters")), Cg = H(() => It.value > 0 ? t("library", "Open filters panel; {count} active filters", { count: It.value }) : t("library", "Open filters panel")), Tg = H(() => At("library", "Show %n item", "Show %n items", Number(J.value.total || 0)));
    function Ag(w) {
      Ea.value = w.currentTarget?.open === !0, Ea.value && Pt(() => {
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
    ]), nf = H(() => Object.entries(_(x)).filter(([w, b]) => !Eg.has(w) && String(b || "").trim() !== "").map(([w, b]) => ({ key: w, value: b }))), $g = H(() => Object.entries(x).filter(([w, b]) => !["q", "sort", "starred"].includes(w) && String(b || "").trim() !== "").map(([w, b]) => ({ key: w, value: b }))), ks = H(() => Object.entries(_(x)).filter(([w, b]) => String(b || "").trim() !== "").map(([w, b]) => ({ key: w, value: b }))), xg = H(() => ks.value.filter(({ key: w, value: b }) => w !== "q" && !(w === "sort" && b === "title"))), Ss = H(() => m.homeRows || { continueReading: [], recentlyAdded: [] }), rf = H(() => m.homeShelves || []), lf = H(() => m.shelfTree || []), Du = H(() => m.needsAttention || { count: 0, url: `${rt.value}?needsMetadata=1` }), na = /* @__PURE__ */ j([]), Cs = H(() => new Set(na.value));
    function sf(w, b) {
      const h = new Set(na.value);
      b ? h.add(Number(w)) : h.delete(Number(w)), na.value = [...h];
    }
    function Og(w) {
      na.value = w.currentTarget.checked ? S.value.map((b) => Number(b.id)) : [];
    }
    function Ng() {
      const w = new Set(S.value.map((b) => Number(b.id)));
      na.value = na.value.filter((b) => w.has(b));
    }
    function Rg(w) {
      const b = w.target;
      if (b instanceof HTMLFormElement) {
        b.querySelectorAll("input[data-library-selected-id]").forEach((h) => h.remove());
        for (const h of na.value) {
          const U = document.createElement("input");
          U.type = "hidden", U.name = "itemIds[]", U.value = String(h), U.dataset.librarySelectedId = "1", b.appendChild(U);
        }
      }
    }
    const Ce = /* @__PURE__ */ j(null), Dn = /* @__PURE__ */ j(null), ra = /* @__PURE__ */ Lt({ loading: !1, error: "", missing: !1 }), Fn = /* @__PURE__ */ j("overview"), ja = /* @__PURE__ */ Lt({ saving: !1, saved: !1, error: "" }), mt = /* @__PURE__ */ Lt({ title: "", publicationDate: "", series: "", seriesNumber: "", genre: "", identifiers: [] }), of = /* @__PURE__ */ j(null), Mn = /* @__PURE__ */ j(null), Un = /* @__PURE__ */ j(!1);
    let Fu = null, wi = null, Ts = null, Mu = !1, qr = null, Uu = 0;
    const rn = H(() => Dn.value !== null), Gr = H(() => Ce.value ? S.value.findIndex((w) => w.id === Ce.value.id) : -1), As = H(() => Gr.value > 0 ? S.value[Gr.value - 1] : null), Es = H(() => Gr.value >= 0 && Gr.value < S.value.length - 1 ? S.value[Gr.value + 1] : null), uf = H(() => Mg(Ce.value?.description || "")), zn = H(() => Pg(Ce.value?.publicationDate || "")), cf = H(() => Dg(Ce.value?.language || "")), Ig = ["publicationType", "title", "subtitle", "creators", "publication", "series", "seriesNumber", "genre", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Lg = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Kr(w) {
      const b = String(w ?? "").trim(), h = b.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return h ? h[1] : b;
    }
    function Pg(w) {
      const h = Kr(w).match(/^(\d{4})/u);
      return h ? h[1] : "";
    }
    function Dg(w) {
      return String(w ?? "").split(/[;,\n]+/u).map((b) => b.trim()).filter(Boolean);
    }
    function df(w, b) {
      const h = new URLSearchParams();
      for (const [U, he] of Object.entries(x)) {
        const Ee = String(he || "").trim();
        Ee !== "" && !(U === "sort" && Ee === "title") && !(U === "view" && Ee === "compact") && h.set(U, Ee);
      }
      return h.set(w, String(b || "").trim()), h.delete("page"), c(h);
    }
    function $s(w, b) {
      const U = df(w, b).toString();
      return `${rt.value}${U ? `?${U}` : ""}`;
    }
    function xs(w, b, h) {
      const U = String(h || "").trim();
      if (U === "") return;
      w?.preventDefault?.();
      const he = df(b, U);
      Yr({ historyMode: "none" }), Yt(null, {
        params: he,
        generation: ++la,
        historyMode: "push"
      });
    }
    function Fg(w) {
      return String(w ?? "").replace(/&#x([0-9a-f]+);/giu, (b, h) => String.fromCodePoint(Number.parseInt(h, 16))).replace(/&#(\d+);/gu, (b, h) => String.fromCodePoint(Number.parseInt(h, 10))).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#039;", "'").replaceAll("&apos;", "'").replaceAll("&nbsp;", " ").replaceAll("&amp;", "&");
    }
    function Mg(w) {
      let b = String(w ?? "").trim();
      if (b === "") return "";
      for (let h = 0; h < 2; h += 1) {
        const U = Fg(b);
        if (U === b) break;
        b = U;
      }
      return b = b.replace(/<\s*(script|style)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/giu, "").replace(/<\s*(br|hr)\b[^>]*\/?>/giu, `
`).replace(/<\s*\/\s*(p|div|section|article|blockquote|li|tr|h[1-6])\s*>/giu, `

`).replace(/<\s*(p|div|section|article|blockquote|ul|ol|li|table|tbody|thead|tr|td|th|h[1-6])\b[^>]*>/giu, "").replace(/<[^>]+>/gu, "").replace(/\u00a0/gu, " ").replace(/[^\S\r\n]+/gu, " ").replace(/[ \t]*\n[ \t]*/gu, `
`).replace(/\n{3,}/gu, `

`).trim(), b;
    }
    function ff(w) {
      return { ...w, publicationDate: Kr(w?.publicationDate) };
    }
    function hf(w) {
      for (const b of ["series", "seriesNumber", "genre"]) mt[b] = String(w?.[b] || "");
      mt.title = String(w?.title || ""), mt.publicationDate = Kr(w?.publicationDate), mt.identifiers = Array.isArray(w?.identifiers) ? w.identifiers.map((b) => ({ scheme: String(b?.scheme || ""), displayValue: String(b?.displayValue || b?.value || "") })) : [], Object.assign(ja, { saving: !1, saved: !1, error: "" });
    }
    function Ug() {
      mt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function zg(w) {
      mt.identifiers.splice(w, 1);
    }
    async function jg() {
      const w = Ce.value;
      if (!w?.updateUrl || ja.saving) return;
      Object.assign(ja, { saving: !0, saved: !1, error: "" });
      const b = new FormData();
      b.set("requesttoken", ht.value), b.set("metadataAutosave", "1");
      for (const h of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const U = w[h];
        b.set(h, Array.isArray(U) ? U.join(", ") : String(U ?? ""));
      }
      for (const h of ["series", "seriesNumber", "genre"]) b.set(h, mt[h]);
      b.set("title", mt.title), b.set("publicationDate", Kr(mt.publicationDate)), mt.identifiers.forEach((h, U) => {
        b.set(`identifiers[${U}][scheme]`, h.scheme), b.set(`identifiers[${U}][displayValue]`, h.displayValue);
      });
      try {
        const h = await fetch(w.updateUrl, { method: "POST", body: b, credentials: "same-origin", headers: { Accept: "application/json" } }), U = await h.json().catch(() => ({}));
        if (!h.ok || U.saved !== !0) throw new Error(U.error || t("library", "Metadata could not be saved."));
        for (const Ee of ["series", "seriesNumber", "genre"]) w[Ee] = mt[Ee].trim();
        w.title = mt.title.trim(), w.publicationDate = Kr(mt.publicationDate), w.identifiers = mt.identifiers.filter((Ee) => Ee.scheme.trim() || Ee.displayValue.trim()).map((Ee) => ({ ...Ee }));
        const he = S.value.find((Ee) => Number(Ee.id) === Number(w.id));
        he && (he.title = w.title, he.publicationDate = w.publicationDate), ja.saved = !0;
      } catch (h) {
        ja.error = h?.message || t("library", "Metadata could not be saved.");
      } finally {
        ja.saving = !1;
      }
    }
    const ln = H(() => {
      const w = s("scannerConflicts", x.scannerConflicts) || s("weakMetadata", x.weakMetadata), b = w ? S.value.find((h) => Os(h).length > 0) : null;
      return {
        enabled: w,
        item: b,
        fields: b ? Os(b) : [],
        reviewNextUrl: In.value,
        skipUrl: J.value.nextUrl || In.value
      };
    }), Bg = H(() => n.map((w) => ({
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
      let h = [];
      try {
        h = JSON.parse(b.rejectedFields || "[]");
      } catch {
      }
      Array.isArray(h) || (h = []);
      const U = w.fieldSources || {};
      return Ig.filter((he) => Object.prototype.hasOwnProperty.call(b, he)).map((he) => {
        const Ee = zu(w[he]), je = zu(b[he]), Qe = zu(U[he] || w.metadataSource || "scanner"), _a = Qe.includes("filename") || Qe.includes("path") ? je : "", Qa = Qe.includes("sidecar") ? je : "";
        return { field: he, currentValue: Ee, scannerCandidate: je, pathTemplateCandidate: _a, sidecarValue: Qa, sourceProvenance: Qe, rejected: h.includes(he), differs: Ee !== je };
      }).filter((he) => he.differs);
    }
    let jn = 0, Bn = null;
    function pf() {
      const w = new URLSearchParams(window.location.search).getAll("item");
      if (w.length !== 1 || !/^[1-9][0-9]*$/.test(w[0])) return null;
      const b = Number(w[0]);
      return Number.isSafeInteger(b) && b <= D6 ? b : null;
    }
    function vf(w, b = "push") {
      const h = new URL(window.location.href);
      h.searchParams.delete("item"), w !== null && h.searchParams.set("item", String(w)), history[`${b}State`]({}, "", `${h.pathname}${h.search}${h.hash}`);
    }
    async function Wr(w, { historyMode: b = "push", seed: h = null } = {}) {
      Bn?.abort();
      const U = ++jn, he = new AbortController();
      Bn = he, Dn.value = w, Fn.value = "overview", Ce.value = h && Number(h.id) === w ? ff(h) : null, Ce.value && hf(Ce.value), Object.assign(ra, { loading: !0, error: "", missing: !1 }), b !== "none" && vf(w, b);
      try {
        const Ee = Nu.value.replace("__ITEM_ID__", encodeURIComponent(String(w))), je = await fetch(Ee, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: he.signal });
        if (U !== jn) return;
        if (!je.ok) {
          Ce.value = null, ra.missing = je.status === 404, ra.error = je.status === 404 ? t("library", "This publication is unavailable or you do not have access.") : t("library", "Could not load publication details. Try again.");
          return;
        }
        const Qe = await je.json();
        if (U !== jn) return;
        if (typeof Qe?.item?.id != "number" || !Number.isSafeInteger(Qe.item.id) || Qe.item.id !== w) {
          Ce.value = null, ra.missing = !1, ra.error = t("library", "Could not load publication details. Try again.");
          return;
        }
        Ce.value = ff(Qe.item), hf(Ce.value), await Pt();
      } catch (Ee) {
        U === jn && Ee?.name !== "AbortError" && (Ce.value = null, ra.missing = !1, ra.error = t("library", "Could not load publication details. Try again."));
      } finally {
        U === jn && (ra.loading = !1, Bn = null);
      }
    }
    function Ba(w, b) {
      ju(), Fu = b?.currentTarget instanceof HTMLElement ? b.currentTarget : null, Wr(Number(w.id), { seed: w });
    }
    function Yr({ historyMode: w = "push", restoreFocus: b = !0 } = {}) {
      Ts = b ? Fu : null, Fu = null, Bn?.abort(), Bn = null, jn += 1, Dn.value = null, Ce.value = null, Fn.value = "overview", Object.assign(ra, { loading: !1, error: "", missing: !1 }), w !== "none" && vf(null, w);
    }
    function bf() {
      Un.value ? (Mn.value?.$refs?.sidebar || Mn.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : of.value?.focus();
    }
    function Hg() {
      const w = Ts;
      if (Ts = null, ju(), Mu || !w?.isConnected) return;
      const b = Uu;
      qr = window.requestAnimationFrame(() => {
        qr = null, !(b !== Uu || Mu || rn.value || !w.isConnected) && w.focus();
      });
    }
    function ju() {
      Uu += 1, qr !== null && (window.cancelAnimationFrame(qr), qr = null);
    }
    function Zr(w = wi) {
      Un.value = !!w?.matches, rn.value && Pt(bf);
    }
    function Ns(w) {
      w && Wr(Number(w.id), { seed: w });
    }
    const Xr = /* @__PURE__ */ j(null);
    let la = 0, br = null, gr = null, Jr = null, gf = !1, Qr = null;
    const Mt = /* @__PURE__ */ Lt({ loading: !1, error: "", completed: !1 });
    function Vg(w) {
      const b = c(new FormData(w));
      b.delete("publicationSearch"), b.delete("creatorSearch"), b.delete("subjectSearch"), b.delete("publisherSearch"), b.delete("classificationSearch"), b.delete("tagSearch"), b.delete("folderSearch"), b.delete("yearSearch");
      for (const h of Array.from(b.keys()))
        String(b.get(h) || "").trim() === "" && b.delete(h);
      return b.delete("page"), b.get("view") === "compact" && b.delete("view"), b.get("sort") === "title" && b.delete("sort"), b;
    }
    async function Hn(w, b, h) {
      const U = new URLSearchParams();
      for (const [je, Qe] of Object.entries(x)) {
        const _a = String(Qe || "").trim();
        je !== w && _a !== "" && !(je === "sort" && _a === "title") && !(je === "view" && _a === "compact") && U.set(je, _a);
      }
      U.set(`${w}Search`, b);
      const he = new AbortController();
      w === "creator" ? ge = he : w === "publisher" ? Re = he : w === "subject" ? xe = he : w === "classification" ? at = he : w === "tag" ? Rt = he : w === "folder" ? N = he : Ta = he;
      const Ee = w === "creator" ? zr.value : w === "publisher" ? jr.value : w === "subject" ? Br.value : w === "classification" ? $u.value : w === "tag" ? ps.value : w === "folder" ? xu.value : Ou.value;
      try {
        const je = await fetch(`${Ee}?${U}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: he.signal });
        if (!je.ok) throw new Error(`${w} suggestions request failed: ${je.status}`);
        const Qe = await je.json(), _a = w === "creator" ? De : w === "publisher" ? $e : w === "subject" ? we : w === "classification" ? dt : w === "tag" ? Ma : w === "folder" ? O : Ya, Qa = w === "creator" ? Me.value : w === "publisher" ? ee.value : w === "subject" ? Y.value : w === "classification" ? Ae.value : w === "tag" ? yt.value : w === "folder" ? nt.value : Gt.value;
        h === _a && Qa.trim() === b && (w === "creator" ? ct.value = Array.isArray(Qe.creators) ? Qe.creators : [] : w === "publisher" ? X.value = Array.isArray(Qe.publishers) ? Qe.publishers : [] : w === "subject" ? ue.value = Array.isArray(Qe.subjects) ? Qe.subjects : [] : w === "classification" ? Ve.value = Array.isArray(Qe.classifications) ? Qe.classifications : [] : w === "tag" ? ia.value = Array.isArray(Qe.tags) ? Qe.tags : [] : w === "folder" ? T.value = Array.isArray(Qe.folders) ? Qe.folders : [] : $n.value = Array.isArray(Qe.years) ? Qe.years : []);
      } catch (je) {
        je?.name !== "AbortError" && (w === "creator" && h === De && (ct.value = null), w === "publisher" && h === $e && (X.value = null), w === "subject" && h === we && (ue.value = null), w === "classification" && h === dt && (Ve.value = null), w === "tag" && h === Ma && (ia.value = null), w === "folder" && h === O && (T.value = null), w === "year" && h === Ya && ($n.value = null));
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
      const h = new URLSearchParams();
      for (const [he, Ee] of Object.entries(x)) {
        const je = String(Ee || "").trim();
        he !== "publication" && je !== "" && !(he === "sort" && je === "title") && !(he === "view" && je === "compact") && h.set(he, je);
      }
      h.set("publicationSearch", w);
      const U = new AbortController();
      M = U;
      try {
        const he = await fetch(`${hs.value}?${h}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: U.signal
        });
        if (!he.ok) throw new Error(`Publication suggestions request failed: ${he.status}`);
        const Ee = await he.json();
        b === G && V.value.trim() === w && (ie.value = Array.isArray(Ee.publications) ? Ee.publications : []);
      } catch (he) {
        he?.name !== "AbortError" && b === G && (ie.value = null);
      } finally {
        b === G && (M = null);
      }
    }
    function Qg(w) {
      k.splice(0, k.length, ...(w.items || []).map((h) => ({ ...h }))), Ng();
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
      for (const h of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "subjects", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "creatorSuggestionsUrl", "publisherSuggestionsUrl", "subjectSuggestionsUrl", "classificationSuggestionsUrl", "tagSuggestionsUrl", "folderSuggestionsUrl", "yearSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "smartViewCountsPending", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        !b.has(h) && Object.prototype.hasOwnProperty.call(w, h) && (m[h] = w[h]);
      Object.assign(x, Za, w.activeFilters || {}), x.view = y(x.view);
    }
    async function em() {
      if (m.surface !== "index") return;
      const w = la, b = JSON.stringify({ ...x }), h = new URLSearchParams();
      h.set("hydrate", "1");
      for (const [he, Ee] of Object.entries(x)) {
        const je = String(Ee || "").trim();
        je !== "" && !(he === "sort" && je === "title") && !(he === "view" && je === "compact") && h.set(he, je);
      }
      const U = new AbortController();
      gr = U;
      try {
        const he = await fetch(`${Rn.value}${h.size ? `?${h}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: U.signal
        });
        if (!he.ok) return;
        const Ee = await he.json();
        if (w !== la || b !== JSON.stringify({ ...x })) return;
        for (const je of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(Ee, je) && (m[je] = Ee[je]);
      } catch (he) {
        if (he?.name !== "AbortError") return;
      } finally {
        gr === U && (gr = null), U.signal.aborted || mf();
      }
    }
    async function mf() {
      if (!Zi.value || gf || Jr) return;
      const w = new AbortController();
      Jr = w;
      try {
        const b = await fetch(`${Rn.value}?hydrate=counts`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: w.signal });
        if (!b.ok || w.signal.aborted) return;
        const h = await b.json();
        h.smartViewCounts && (m.smartViewCounts = h.smartViewCounts), h.smartViewCountsPending && (m.smartViewCountsPending = h.smartViewCountsPending), gf = !0;
      } catch {
      } finally {
        Jr === w && (Jr = null);
      }
    }
    function tm() {
      gr?.abort(), gr = null;
    }
    async function Yt(w, b = null) {
      const h = w?.currentTarget?.tagName === "FORM" ? w.currentTarget : w?.currentTarget?.form;
      if (!h && !b?.params) return;
      const U = c(b?.params ?? Vg(h));
      if (On.value || Xi.value) {
        el(U, rt.value);
        return;
      }
      const he = U.toString(), Ee = he ? `?${he}` : "", je = b?.generation ?? ++la, Qe = d(U), _a = b?.historyMode ?? (Qe ? "push" : "replace"), Qa = b?.historyTraversal === !0;
      if (je !== la) return;
      tm(), b === null && br?.abort();
      const mr = new AbortController();
      br = mr, Mt.loading = !0, Mt.error = "", Mt.completed = !1;
      try {
        const ei = await fetch(Rn.value + Ee, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: mr.signal
        });
        if (je !== la) return;
        if (!ei.ok) {
          Qa ? el(U) : Qe ? Mt.error = t("library", "Could not load this review queue. Try again.") : el(U);
          return;
        }
        const wm = await ei.json();
        if (je !== la) return;
        Qg(wm), mf(), Mt.completed = !0, _a !== "none" && (history[_a === "push" ? "pushState" : "replaceState"]({}, "", he ? `?${he}` : window.location.pathname), rn.value && Yr({ historyMode: "none" }));
      } catch (ei) {
        je === la && ei?.name !== "AbortError" && (Qa ? el(U) : Qe ? Mt.error = t("library", "Could not load this review queue. Try again.") : el(U));
      } finally {
        je === la && (br = null, Mt.loading = !1);
      }
    }
    function yf() {
      br?.abort();
      const w = new URLSearchParams(window.location.search), b = pf();
      w.has("item") && b === null && (w.delete("item"), history.replaceState({}, "", `${window.location.pathname}${w.toString() ? `?${w}` : ""}${window.location.hash}`)), b === null ? Yr({ historyMode: "none" }) : Wr(b, { historyMode: "none", seed: S.value.find((h) => Number(h.id) === b) || null }), w.delete("item"), Yt(null, {
        params: c(w),
        generation: ++la,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function el(w, b = window.location.pathname) {
      const h = document.createElement("form");
      h.method = "get", h.action = b, h.hidden = !0;
      for (const [U, he] of w.entries()) {
        const Ee = document.createElement("input");
        Ee.type = "hidden", Ee.name = U, Ee.value = he, h.appendChild(Ee);
      }
      document.body.appendChild(h), h.submit(), h.remove();
    }
    function ya(w, b = null, h = null) {
      if (b === null) {
        Yt(w);
        return;
      }
      Yt({ currentTarget: w }, { params: b, generation: h });
    }
    async function am(w, b = V.value) {
      x.publication = String(b || "").trim(), V.value = x.publication, Z.value = !1, await Pt(), Yt({ currentTarget: w });
    }
    function _f(w, b) {
      am(b.currentTarget.form, w);
    }
    async function im(w) {
      x.q = String(W.value || "").trim(), x.publication = String(V.value || "").trim(), x.publisher = String(ee.value || "").trim(), x.creator = String(Me.value || "").trim(), x.subject = String(Y.value || "").trim(), x.folder = String(nt.value || "").trim(), x.year = String(Gt.value || "").trim(), Z.value = !1, ne.value = !1, Ze.value = !1, ae.value = !1, te.value = !1, va.value = !1, await Pt(), Yt({ currentTarget: w });
    }
    async function sn(w, b, h) {
      x[b] = String(h || "").trim(), b === "creator" ? (Me.value = x.creator, Ze.value = !1) : b === "publisher" ? (ee.value = x.publisher, ne.value = !1) : b === "subject" ? (Y.value = x.subject, ae.value = !1) : b === "folder" ? (nt.value = x.folder, te.value = !1) : b === "classification" ? (Ae.value = x.classification, Oe.value = !1) : b === "tag" ? (yt.value = x.tag, gt.value = !1) : (Gt.value = x.year, va.value = !1), ki[b] = -1, await Pt(), Yt({ currentTarget: w });
    }
    function wf(w) {
      im(w.currentTarget);
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
    function Ef(w, b = Y.value) {
      window.clearTimeout(ce), xe?.abort(), xe = null, sn(w, "subject", b);
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
    const ki = /* @__PURE__ */ Lt({
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
      return le.value;
    }
    function Bu(w, b, h) {
      return `library-${w}-${b}-suggestion-${h}`;
    }
    function Of(w, b) {
      const h = ki[b];
      return h >= 0 ? Bu(w, b, h) : void 0;
    }
    function Hu(w, b) {
      ne.value = b, b || (ki[w] = -1);
    }
    function Nf(w) {
      ki[w] = -1, Hu(w, !0);
    }
    function lm(w, b, h) {
      sn(h, w, b);
    }
    function Rf(w, b) {
      const h = rm();
      if (w.key === "Escape") {
        Hu(b, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(w.key) || h.length === 0) return;
      if (w.key === "Enter") {
        const Ee = ki[b];
        if (Ee < 0) return;
        w.preventDefault(), lm(b, h[Ee], w.currentTarget.form);
        return;
      }
      w.preventDefault(), Hu(b, !0);
      const U = ki[b], he = w.key === "ArrowDown" ? 1 : -1;
      ki[b] = U < 0 ? he > 0 ? 0 : h.length - 1 : (U + he + h.length) % h.length;
    }
    function If(w) {
      const b = new URLSearchParams();
      for (const [h, U] of Object.entries(x)) {
        const he = String(U || "").trim();
        he !== "" && h !== w && !(h === "sort" && he === "title") && !(h === "view" && he === "compact") && b.set(h, he);
      }
      return b;
    }
    function tl(w) {
      const b = If(w).toString();
      return `${rt.value}${b ? `?${b}` : ""}`;
    }
    function al(w) {
      const b = If(w);
      x[w] = w === "sort" ? "title" : w === "view" ? "compact" : "", Yt(null, {
        params: b,
        generation: ++la
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
        ["sort", "view"].includes(b) || (x[b] = Za[b]);
      Yt(null, {
        params: w,
        generation: ++la
      }), !On.value && !Xi.value && Pt(() => {
        Vr.value?.focus?.();
      });
    }
    function sm(w) {
      const b = new URL(w.href, window.location.origin).searchParams;
      Yt(null, {
        params: b,
        generation: ++la
      });
    }
    function om() {
      return tl("q");
    }
    const Vu = H(() => m.smartViewCounts || {}), um = H(() => new Set(m.smartViewCountsPending || []));
    function cm(w) {
      return um.value.has(w) || !Object.prototype.hasOwnProperty.call(Vu.value, w) ? "—" : Number(Vu.value[w] || 0);
    }
    const Pf = H(() => {
      const w = {};
      for (const [b, h] of Object.entries(x)) {
        const U = String(h || "").trim();
        U !== "" && !(b === "sort" && U === "title") && (w[b] = U);
      }
      return w;
    }), dm = H(() => JSON.stringify(Pf.value)), qu = H(() => Object.keys(Pf.value).length > 0);
    function Df(w) {
      if (!se.includes(w)) return;
      x.view = w;
      const b = new URLSearchParams();
      for (const [h, U] of Object.entries(_(x))) {
        const he = String(U || "").trim();
        he !== "" && !(h === "sort" && he === "title") && !(h === "view" && he === "compact") && b.set(h, he);
      }
      b.delete("page"), Yt(null, {
        params: b,
        generation: ++la
      });
    }
    function fm(w) {
      const b = c(window.location.search);
      for (const U of Object.keys(ys))
        b.delete(U);
      b.delete("page");
      for (const [U, he] of Object.entries(w)) {
        const Ee = U === "view" ? y(he) : String(he || "").trim();
        Ee !== "" && !(U === "view" && Ee === "compact") && b.set(U, Ee);
      }
      const h = b.toString();
      return h ? `?${h}` : "?";
    }
    function hm(w) {
      return fm(w || {});
    }
    function pm(w) {
      const h = Object.entries(w && typeof w == "object" ? w : {}).filter(([, U]) => String(U ?? "").trim() !== "");
      return h.length === 0 ? !1 : h.every(([U, he]) => String(x[U] ?? "") === String(he ?? ""));
    }
    function vm(w) {
      return z.value.replace("__COLLECTION_ID__", encodeURIComponent(String(w || "0")));
    }
    function bm(w) {
      if (!ht.value) return;
      const b = document.createElement("form");
      b.method = "post", b.action = vm(w), b.className = "library-navigation-saved-collection-delete-form";
      const h = document.createElement("input");
      h.type = "hidden", h.name = "requesttoken", h.value = ht.value, b.appendChild(h), document.body.appendChild(b), b.submit();
    }
    function Ls(w) {
      return String(w || "").toUpperCase();
    }
    function gm(w) {
      return m.creatorLandingUrls?.[w] || `/apps/library/creators/${encodeURIComponent(w)}`;
    }
    function Ff(w) {
      const b = String(w?.publication || "").trim(), h = String(w?.publicationDate || "").trim();
      return b && h ? `${b} · ${h}` : b || h;
    }
    function Mf(w) {
      const b = String(w?.tagName || "").toLowerCase();
      return w?.isContentEditable || ["input", "select", "textarea", "button"].includes(b);
    }
    function mm(w) {
      w.key !== "/" || w.metaKey || w.ctrlKey || w.altKey || w.shiftKey || Mf(w.target) || (w.preventDefault(), Xr.value?.focus(), Xr.value?.select?.());
    }
    async function ym(w) {
      w.key !== "Escape" || document.activeElement !== Xr.value || x.q === "" || (w.preventDefault(), W.value = "", x.q = "", await Pt(), ya({ currentTarget: Xr.value }));
    }
    function _m(w) {
      if (!rn.value || w.metaKey || w.ctrlKey || w.altKey)
        return !1;
      if (w.key === "Escape")
        return w.preventDefault(), Yr(), !0;
      if (w.key === "Tab" && Un.value) {
        if (Mn.value?.focusTrap) return !1;
        const b = Mn.value?.$refs?.sidebar || Mn.value?.$el || Mn.value, h = [...b?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Ee) => !Ee.hidden && Ee.getAttribute("aria-hidden") !== "true");
        if (h.length === 0) return !1;
        const U = h[0], he = h[h.length - 1];
        if (w.shiftKey && (document.activeElement === U || !b.contains(document.activeElement)))
          return w.preventDefault(), he.focus(), !0;
        if (!w.shiftKey && (document.activeElement === he || !b.contains(document.activeElement)))
          return w.preventDefault(), U.focus(), !0;
      }
      return Mf(w.target) ? !1 : w.key === "ArrowLeft" && As.value ? (w.preventDefault(), Ns(As.value), !0) : w.key === "ArrowRight" && Es.value ? (w.preventDefault(), Ns(Es.value), !0) : !1;
    }
    function Uf(w) {
      document.querySelector("dialog[open]") || _m(w) || (mm(w), ym(w));
    }
    Ct(() => {
      if (bi.value || Nn.value || Ua.value || Ji.value || vi.value) return;
      window.addEventListener("keydown", Uf), window.addEventListener("popstate", yf), wi = window.matchMedia?.("(max-width: 1023px)") || null, Zr(), wi?.addEventListener ? wi.addEventListener("change", Zr) : wi?.addListener?.(Zr);
      const w = new URLSearchParams(window.location.search), b = pf();
      w.has("item") && b === null ? (w.delete("item"), history.replaceState({}, "", `${window.location.pathname}${w.toString() ? `?${w}` : ""}${window.location.hash}`)) : b !== null && Wr(b, { historyMode: "none", seed: S.value.find((h) => Number(h.id) === b) || null }), Qr = window.requestAnimationFrame(() => {
        Qr = null, em();
      });
    }), Ca(() => {
      Mu = !0, ju(), window.removeEventListener("keydown", Uf), window.removeEventListener("popstate", yf), window.clearTimeout(q), window.clearTimeout(Ne), window.clearTimeout(ce), window.clearTimeout(xn), M?.abort(), ge?.abort(), xe?.abort(), Ta?.abort(), la += 1, Qr !== null && window.cancelAnimationFrame(Qr), Qr = null, gr?.abort(), Jr?.abort(), br?.abort(), br = null, jn += 1, Bn?.abort(), Bn = null, wi?.removeEventListener ? wi.removeEventListener("change", Zr) : wi?.removeListener?.(Zr), wi = null, Ts = null;
    });
    const il = /* @__PURE__ */ Lt({}), nl = /* @__PURE__ */ Lt({});
    async function zf(w, b) {
      const h = b?.currentTarget?.closest?.("form") || b?.currentTarget;
      if (!h || !w?.starUrl || il[w.id]) return;
      const U = !!w.starred;
      il[w.id] = !0, nl[w.id] = "", w.starred = !U;
      try {
        (await fetch(w.starUrl, {
          method: "POST",
          body: new FormData(h),
          credentials: "same-origin"
        })).ok || (w.starred = U, nl[w.id] = t("library", "Could not update star. Try again."));
      } catch {
        w.starred = U, nl[w.id] = t("library", "Could not update star. Try again.");
      } finally {
        il[w.id] = !1;
      }
    }
    return (w, b) => (f(), Pe(u(cT), { "app-name": "library" }, {
      default: ke(() => [
        de(u(qw), {
          "aria-label": u(t)("library", "Library navigation")
        }, {
          list: ke(() => [
            de(u(Lb), null, {
              default: ke(() => [
                (f(!0), p(K, null, oe(Mr.value, (h) => (f(), Pe(u(ai), {
                  key: h.key,
                  active: h.active,
                  href: h.href,
                  name: h.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                (f(!0), p(K, null, oe(fs.value, (h) => (f(), p("div", {
                  key: h.key,
                  class: "library-navigation-saved-collection-row"
                }, [
                  de(u(ai), {
                    class: "library-navigation-saved-collection",
                    active: h.active,
                    href: h.href,
                    name: h.name
                  }, null, 8, ["active", "href", "name"]),
                  l("button", {
                    type: "button",
                    class: "library-navigation-saved-collection-delete-action",
                    style: { background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.42)", color: "#fff" },
                    "aria-label": `${u(t)("library", "Delete collection")}: ${h.rawName}`,
                    title: `${u(t)("library", "Delete collection")}: ${h.rawName}`,
                    onClick: Se((U) => bm(h.id), ["stop", "prevent"])
                  }, "✕", 8, wR)
                ]))), 128)),
                de(u(ai), {
                  active: bi.value,
                  href: `${rt.value}?authors=1`,
                  name: u(t)("library", "Authors")
                }, null, 8, ["active", "href", "name"]),
                de(u(ai), {
                  active: Nn.value,
                  href: `${rt.value}?series=1`,
                  name: u(t)("library", "Series")
                }, null, 8, ["active", "href", "name"]),
                de(u(ai), {
                  active: Ua.value,
                  href: Qi.value,
                  name: u(t)("library", "Lists")
                }, null, 8, ["active", "href", "name"]),
                de(u(ai), {
                  class: "library-navigation-create-list",
                  href: `${Qi.value}&new=1`,
                  name: u(t)("library", "Create a new list")
                }, null, 8, ["href", "name"]),
                (f(!0), p(K, null, oe(_t.value, (h) => (f(), Pe(u(ai), {
                  key: `personal-list-${h.id}`,
                  class: "library-navigation-personal-list",
                  href: `${Qi.value}&listId=${h.id}`,
                  name: h.name
                }, null, 8, ["href", "name"]))), 128)),
                de(u(ai), {
                  active: Ji.value,
                  href: `${rt.value}?infer=1`,
                  name: u(t)("library", "Extract metadata")
                }, null, 8, ["active", "href", "name"]),
                de(u(ai), {
                  active: Zi.value,
                  href: pi.value,
                  name: cr.value > 0 ? `${u(t)("library", "Review")} (${cr.value})` : u(t)("library", "Review")
                }, null, 8, ["active", "href", "name"]),
                de(u(ai), {
                  class: "library-navigation-personal-list",
                  active: vi.value,
                  href: `${rt.value}?duplicates=1`,
                  name: u(t)("library", "Possible duplicates")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: ke(() => [
            !bi.value && !Nn.value && !Ua.value && !Ji.value && !vi.value ? (f(), p("section", kR, [
              l("h2", SR, o(u(t)("library", "Filters")), 1),
              l("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": u(t)("library", "Catalogue search and filters"),
                onSubmit: Se(wf, ["prevent"])
              }, [
                l("input", {
                  type: "hidden",
                  name: "folder",
                  value: x.folder
                }, null, 8, TR),
                (f(!0), p(K, null, oe(nf.value, (h) => (f(), p("input", {
                  key: `sidebar-${h.key}`,
                  type: "hidden",
                  name: h.key,
                  value: h.value
                }, null, 8, AR))), 128)),
                x.sort && x.sort !== "title" ? (f(), p("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: x.sort
                }, null, 8, ER)) : A("", !0),
                x.view && x.view !== "compact" ? (f(), p("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: x.view
                }, null, 8, $R)) : A("", !0),
                l("fieldset", xR, [
                  l("legend", null, o(u(t)("library", "Content")), 1),
                  l("label", {
                    class: "library-quick-filter-search",
                    title: u(t)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                  }, [
                    l("span", null, [
                      Q(o(u(t)("library", "Search")) + " ", 1),
                      b[112] || (b[112] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                    ]),
                    be(l("input", {
                      ref_key: "quickSearchInput",
                      ref: Xr,
                      "onUpdate:modelValue": b[0] || (b[0] = (h) => W.value = h),
                      "data-library-quick-search": "",
                      type: "search",
                      name: "q",
                      placeholder: u(t)("library", "Title, creator, description, filename or folder")
                    }, null, 8, NR), [
                      [Ue, W.value]
                    ]),
                    ma("q") ? (f(), p("small", RR, o(za("q")), 1)) : A("", !0)
                  ], 8, OR),
                  l("label", null, [
                    Q(o(u(t)("library", "Type")), 1),
                    be(l("select", {
                      "onUpdate:modelValue": b[1] || (b[1] = (h) => x.type = h),
                      name: "type",
                      onChange: b[2] || (b[2] = (h) => ya(h))
                    }, [
                      l("option", IR, o(u(t)("library", "All types")), 1),
                      (f(!0), p(K, null, oe(L.value, (h) => (f(), p("option", {
                        key: h,
                        value: h
                      }, o(h), 9, LR))), 128))
                    ], 544), [
                      [it, x.type]
                    ])
                  ]),
                  l("div", PR, [
                    l("label", DR, o(u(t)("library", "Publisher")), 1),
                    be(l("input", {
                      id: "library-publisher-search",
                      "onUpdate:modelValue": b[3] || (b[3] = (h) => ee.value = h),
                      type: "search",
                      name: "publisherSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search publishers"),
                      title: u(t)("library", "Exact publisher matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publisher-suggestions",
                      "aria-activedescendant": Of("desktop", "publisher"),
                      "aria-expanded": ne.value && le.value.length > 0 ? "true" : "false",
                      onFocus: b[4] || (b[4] = (h) => Nf("publisher")),
                      onKeydown: b[5] || (b[5] = (h) => Rf(h, "publisher"))
                    }, null, 40, FR), [
                      [Ue, ee.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publisher",
                      value: x.publisher
                    }, null, 8, MR),
                    ma("publisher") ? (f(), p("small", UR, o(za("publisher")), 1)) : A("", !0),
                    ne.value && le.value.length > 0 ? (f(), p("ul", zR, [
                      (f(!0), p(K, null, oe(le.value, (h, U) => (f(), p("li", {
                        id: Bu("desktop", "publisher", U),
                        key: h,
                        role: "option",
                        "aria-selected": ki.publisher === U ? "true" : "false"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publisher-suggestion",
                          onMousedown: b[6] || (b[6] = Se(() => {
                          }, ["prevent"])),
                          onClick: (he) => Sf(h, he)
                        }, o(h), 41, BR)
                      ], 8, jR))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Te(["button secondary library-publisher-apply", _i("publisher")])
                    }, o(u(t)("library", "Apply publisher")), 3)
                  ]),
                  l("div", HR, [
                    l("label", VR, o(u(t)("library", "Series / periodical")), 1),
                    be(l("input", {
                      id: "library-publication-search",
                      "onUpdate:modelValue": b[7] || (b[7] = (h) => V.value = h),
                      type: "search",
                      name: "publicationSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search series and periodicals"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publication-suggestions",
                      "aria-expanded": Z.value && B.value.length > 0 ? "true" : "false",
                      onFocus: b[8] || (b[8] = (h) => Z.value = !0),
                      onKeydown: b[9] || (b[9] = ft((h) => Z.value = !1, ["escape"]))
                    }, null, 40, qR), [
                      [Ue, V.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publication",
                      value: x.publication
                    }, null, 8, GR),
                    ma("publication") ? (f(), p("small", KR, o(za("publication")), 1)) : A("", !0),
                    Z.value && B.value.length > 0 ? (f(), p("ul", WR, [
                      (f(!0), p(K, null, oe(B.value, (h) => (f(), p("li", {
                        key: h,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publication-suggestion",
                          onMousedown: b[10] || (b[10] = Se(() => {
                          }, ["prevent"])),
                          onClick: (U) => _f(h, U)
                        }, o(h), 41, YR)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Te(["button secondary library-publication-apply", _i("publication")])
                    }, o(u(t)("library", "Apply series")), 3)
                  ]),
                  l("div", ZR, [
                    l("label", XR, o(u(t)("library", "Publication year")), 1),
                    be(l("input", {
                      id: "library-year-search",
                      "onUpdate:modelValue": b[11] || (b[11] = (h) => Gt.value = h),
                      type: "search",
                      name: "yearSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search publication years"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-year-suggestions",
                      "aria-expanded": va.value && Wa.value.length > 0 ? "true" : "false",
                      onFocus: b[12] || (b[12] = (h) => va.value = !0),
                      onKeydown: b[13] || (b[13] = ft((h) => va.value = !1, ["escape"]))
                    }, null, 40, JR), [
                      [Ue, Gt.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "year",
                      value: x.year
                    }, null, 8, QR),
                    ma("year") ? (f(), p("small", eI, o(za("year")), 1)) : A("", !0),
                    va.value && Wa.value.length > 0 ? (f(), p("ul", tI, [
                      (f(!0), p(K, null, oe(Wa.value, (h) => (f(), p("li", {
                        key: h,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-year-suggestion",
                          onMousedown: b[14] || (b[14] = Se(() => {
                          }, ["prevent"])),
                          onClick: (U) => xf(h, U)
                        }, o(h), 41, aI)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Te(["button secondary library-year-apply", _i("year")])
                    }, o(u(t)("library", "Apply year")), 3)
                  ]),
                  l("div", iI, [
                    l("label", nI, o(u(t)("library", "Creator")), 1),
                    be(l("input", {
                      id: "library-creator-search",
                      "onUpdate:modelValue": b[15] || (b[15] = (h) => Me.value = h),
                      type: "search",
                      name: "creatorSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search creators"),
                      title: u(t)("library", "Match an individual author; existing full-field filters remain usable"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-creator-suggestions",
                      "aria-expanded": Ze.value && ye.value.length > 0 ? "true" : "false",
                      onFocus: b[16] || (b[16] = (h) => Ze.value = !0),
                      onKeydown: b[17] || (b[17] = ft((h) => Ze.value = !1, ["escape"]))
                    }, null, 40, rI), [
                      [Ue, Me.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "creator",
                      value: x.creator
                    }, null, 8, lI),
                    ma("creator") ? (f(), p("small", sI, o(za("creator")), 1)) : A("", !0),
                    Ze.value && ye.value.length > 0 ? (f(), p("ul", oI, [
                      (f(!0), p(K, null, oe(ye.value, (h) => (f(), p("li", {
                        key: h,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-creator-suggestion",
                          onMousedown: b[18] || (b[18] = Se(() => {
                          }, ["prevent"])),
                          onClick: (U) => kf(h, U)
                        }, o(h), 41, uI)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Te(["button secondary library-creator-apply", _i("creator")])
                    }, o(u(t)("library", "Apply creator")), 3)
                  ]),
                  l("div", cI, [
                    l("label", dI, o(u(t)("library", "Nextcloud tag")), 1),
                    be(l("input", {
                      id: "library-tag-search",
                      "onUpdate:modelValue": b[19] || (b[19] = (h) => yt.value = h),
                      type: "search",
                      name: "tagSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search tags"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-tag-suggestions",
                      "aria-expanded": gt.value && pa.value.length > 0 ? "true" : "false",
                      onFocus: b[20] || (b[20] = (h) => gt.value = !0),
                      onKeydown: b[21] || (b[21] = ft((h) => gt.value = !1, ["escape"]))
                    }, null, 40, fI), [
                      [Ue, yt.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "tag",
                      value: x.tag
                    }, null, 8, hI),
                    gt.value && pa.value.length > 0 ? (f(), p("ul", pI, [
                      (f(!0), p(K, null, oe(pa.value, (h) => (f(), p("li", {
                        key: h,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-tag-suggestion",
                          onMousedown: b[22] || (b[22] = Se(() => {
                          }, ["prevent"])),
                          onClick: (U) => Tf(h, U)
                        }, o(h), 41, vI)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Te(["button secondary library-tag-apply", _i("tag")])
                    }, o(u(t)("library", "Apply tag")), 3)
                  ]),
                  l("label", null, [
                    Q(o(u(t)("library", "Format")), 1),
                    be(l("select", {
                      "onUpdate:modelValue": b[23] || (b[23] = (h) => x.format = h),
                      name: "format",
                      onChange: b[24] || (b[24] = (h) => ya(h))
                    }, [
                      l("option", bI, o(u(t)("library", "All formats")), 1),
                      (f(!0), p(K, null, oe($.value, (h) => (f(), p("option", {
                        key: h,
                        value: h
                      }, o(Ls(h)), 9, gI))), 128))
                    ], 544), [
                      [it, x.format]
                    ])
                  ])
                ]),
                l("fieldset", mI, [
                  l("legend", null, o(u(t)("library", "Location")), 1),
                  l("label", null, [
                    Q(o(u(t)("library", "Shelf")), 1),
                    be(l("select", {
                      "onUpdate:modelValue": b[25] || (b[25] = (h) => x.shelf = h),
                      name: "shelf",
                      onChange: b[26] || (b[26] = (h) => ya(h))
                    }, [
                      l("option", yI, o(u(t)("library", "All shelves")), 1),
                      (f(!0), p(K, null, oe(C.value, (h) => (f(), p("option", {
                        key: h,
                        value: h
                      }, o(h), 9, _I))), 128))
                    ], 544), [
                      [it, x.shelf]
                    ])
                  ]),
                  l("div", wI, [
                    l("label", kI, o(u(t)("library", "Folder")), 1),
                    be(l("input", {
                      id: "library-folder-search",
                      "onUpdate:modelValue": b[27] || (b[27] = (h) => nt.value = h),
                      type: "search",
                      name: "folderSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Type at least 3 path characters"),
                      title: u(t)("library", "Select an exact folder path"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-folder-suggestions",
                      "aria-expanded": te.value && R.value.length > 0 ? "true" : "false",
                      onFocus: b[28] || (b[28] = (h) => te.value = !0),
                      onKeydown: b[29] || (b[29] = ft((h) => te.value = !1, ["escape"]))
                    }, null, 40, SI), [
                      [Ue, nt.value]
                    ]),
                    te.value && R.value.length > 0 ? (f(), p("ul", CI, [
                      (f(!0), p(K, null, oe(R.value, (h) => (f(), p("li", {
                        key: h,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-folder-suggestion",
                          onMousedown: b[30] || (b[30] = Se(() => {
                          }, ["prevent"])),
                          onClick: (U) => Af(h, U)
                        }, o(h), 41, TI)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Te(["button secondary library-folder-apply", _i("folder")])
                    }, o(u(t)("library", "Apply folder")), 3)
                  ])
                ]),
                l("fieldset", AI, [
                  l("legend", null, o(u(t)("library", "Review")), 1),
                  l("label", null, [
                    Q(o(u(t)("library", "Scan status")), 1),
                    be(l("select", {
                      "onUpdate:modelValue": b[31] || (b[31] = (h) => x.status = h),
                      name: "status",
                      onChange: b[32] || (b[32] = (h) => ya(h))
                    }, [
                      l("option", EI, o(u(t)("library", "All scan statuses")), 1),
                      (f(!0), p(K, null, oe(D.value, (h) => (f(), p("option", {
                        key: h,
                        value: h
                      }, o(h), 9, $I))), 128))
                    ], 544), [
                      [it, x.status]
                    ])
                  ]),
                  l("label", null, [
                    Q(o(u(t)("library", "Workflow status")), 1),
                    be(l("select", {
                      "onUpdate:modelValue": b[33] || (b[33] = (h) => x.workflowStatus = h),
                      name: "workflowStatus",
                      onChange: b[34] || (b[34] = (h) => ya(h))
                    }, [
                      l("option", xI, o(u(t)("library", "All workflow statuses")), 1),
                      (f(!0), p(K, null, oe(fe.value, (h) => (f(), p("option", {
                        key: h,
                        value: h
                      }, o(h), 9, OI))), 128))
                    ], 544), [
                      [it, x.workflowStatus]
                    ])
                  ]),
                  l("div", NI, [
                    l("label", RI, o(u(t)("library", "Subject")), 1),
                    be(l("input", {
                      id: "library-subject-search",
                      "onUpdate:modelValue": b[35] || (b[35] = (h) => Y.value = h),
                      type: "search",
                      name: "subjectSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search subjects"),
                      title: u(t)("library", "Exact subject matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-subject-suggestions",
                      "aria-expanded": ae.value && ve.value.length > 0 ? "true" : "false",
                      onFocus: b[36] || (b[36] = (h) => ae.value = !0),
                      onKeydown: b[37] || (b[37] = ft((h) => ae.value = !1, ["escape"]))
                    }, null, 40, II), [
                      [Ue, Y.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "subject",
                      value: x.subject
                    }, null, 8, LI),
                    ma("subject") ? (f(), p("small", PI, o(za("subject")), 1)) : A("", !0),
                    ae.value && ve.value.length > 0 ? (f(), p("ul", DI, [
                      (f(!0), p(K, null, oe(ve.value, (h) => (f(), p("li", {
                        key: h,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-subject-suggestion",
                          onMousedown: b[38] || (b[38] = Se(() => {
                          }, ["prevent"])),
                          onClick: (U) => $f(h, U)
                        }, o(h), 41, FI)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "button",
                      class: Te(["button secondary library-subject-apply", _i("subject")]),
                      onClick: nm
                    }, o(u(t)("library", "Apply subject")), 3)
                  ]),
                  l("div", MI, [
                    l("label", UI, o(u(t)("library", "Classification")), 1),
                    be(l("input", {
                      id: "library-classification-search",
                      "onUpdate:modelValue": b[39] || (b[39] = (h) => Ae.value = h),
                      type: "search",
                      name: "classificationSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search classifications"),
                      title: u(t)("library", "Exact classification matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-classification-suggestions",
                      "aria-expanded": Oe.value && Ye.value.length > 0 ? "true" : "false",
                      onFocus: b[40] || (b[40] = (h) => Oe.value = !0),
                      onKeydown: b[41] || (b[41] = ft((h) => Oe.value = !1, ["escape"]))
                    }, null, 40, zI), [
                      [Ue, Ae.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "classification",
                      value: x.classification
                    }, null, 8, jI),
                    Oe.value && Ye.value.length > 0 ? (f(), p("ul", BI, [
                      (f(!0), p(K, null, oe(Ye.value, (h) => (f(), p("li", {
                        key: h,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-classification-suggestion",
                          onMousedown: b[42] || (b[42] = Se(() => {
                          }, ["prevent"])),
                          onClick: (U) => Cf(h, U)
                        }, o(h), 41, HI)
                      ]))), 128))
                    ])) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: Te(["button secondary library-classification-apply", _i("classification")])
                    }, o(u(t)("library", "Apply classification")), 3)
                  ]),
                  l("label", null, [
                    Q(o(u(t)("library", "Suggested updates")), 1),
                    be(l("select", {
                      "onUpdate:modelValue": b[43] || (b[43] = (h) => x.scannerConflicts = h),
                      name: "scannerConflicts",
                      onChange: b[44] || (b[44] = (h) => ya(h))
                    }, [
                      l("option", VI, o(u(t)("library", "All metadata")), 1),
                      l("option", qI, o(u(t)("library", "Suggested updates")), 1)
                    ], 544), [
                      [it, x.scannerConflicts]
                    ])
                  ])
                ]),
                l("fieldset", GI, [
                  l("legend", null, o(u(t)("library", "Personal / display")), 1)
                ]),
                l("button", KI, o(u(t)("library", "Apply filters")), 1)
              ], 40, CR)
            ])) : A("", !0),
            l("a", {
              class: "library-navigation-settings-link",
              href: Yi.value
            }, [
              b[113] || (b[113] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, o(u(t)("library", "Settings")), 1)
            ], 8, WI)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        de(u(sw), null, {
          default: ke(() => [
            l("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: m.language || "en",
              dir: m.direction || "ltr",
              tabindex: "-1"
            }, [
              vi.value ? (f(), Pe(v4, {
                key: 0,
                "request-token": ht.value,
                "review-url": pi.value
              }, null, 8, ["request-token", "review-url"])) : Ji.value ? (f(), Pe(_R, {
                key: 1,
                "request-token": ht.value
              }, null, 8, ["request-token"])) : bi.value ? (f(), Pe(lx, {
                key: 2,
                "request-token": ht.value,
                "catalogue-url": rt.value
              }, null, 8, ["request-token", "catalogue-url"])) : Nn.value ? (f(), Pe(zx, {
                key: 3,
                "request-token": ht.value,
                "catalogue-url": rt.value
              }, null, 8, ["request-token", "catalogue-url"])) : Ua.value ? (f(), Pe(BA, {
                key: 4,
                onChanged: cs,
                "request-token": ht.value,
                "catalogue-url": rt.value,
                "lists-url": Qi.value
              }, null, 8, ["request-token", "catalogue-url", "lists-url"])) : (f(), p(K, { key: 5 }, [
                Wt.value.length > 0 ? (f(), p("nav", {
                  key: 0,
                  class: "library-active-filter-chips",
                  "aria-label": u(t)("library", "Active filters")
                }, [
                  l("span", null, o(u(t)("library", "Active filters")), 1),
                  (f(!0), p(K, null, oe(Wt.value, (h) => (f(), p("a", {
                    key: h.key,
                    href: tl(h.key),
                    class: "library-filter-chip",
                    "aria-label": `${u(t)("library", "Remove filter")}: ${h.label}`,
                    title: h.title,
                    onClick: Se((U) => al(h.key), ["prevent"])
                  }, [
                    l("strong", null, [
                      Q(o(h.label), 1),
                      h.displayValue ? (f(), p(K, { key: 0 }, [
                        Q(":")
                      ], 64)) : A("", !0)
                    ]),
                    h.displayValue ? (f(), p(K, { key: 0 }, [
                      b[114] || (b[114] = Q(o(" "), -1)),
                      l("span", {
                        class: "library-filter-chip-value",
                        title: h.value
                      }, o(h.displayValue), 9, JI)
                    ], 64)) : A("", !0),
                    b[115] || (b[115] = Q()),
                    b[116] || (b[116] = l("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, XI))), 128)),
                  pt.value.length > 0 ? (f(), p("a", {
                    key: 0,
                    href: Rs(),
                    class: "library-active-filter-clear-all",
                    onClick: Se(Is, ["prevent"])
                  }, o(u(t)("library", "Clear all")), 9, QI)) : A("", !0)
                ], 8, ZI)) : A("", !0),
                Zi.value ? (f(), p("section", eL, [
                  l("header", tL, [
                    l("p", aL, o(u(t)("library", "Metadata cleanup")), 1),
                    l("h2", iL, o(u(t)("library", "Review")), 1),
                    de(Be, {
                      text: u(t)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")
                    }, {
                      default: ke(() => [
                        Q(o(u(t)("library", "Metadata cleanup")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"])
                  ]),
                  l("nav", {
                    class: "library-review-queues",
                    "aria-label": u(t)("library", "Review queues")
                  }, [
                    (f(!0), p(K, null, oe(Bg.value, (h) => (f(), p("a", {
                      key: h.key,
                      class: Te(["library-review-queue-link", { active: h.active }]),
                      href: h.href,
                      "aria-current": h.active ? "page" : void 0,
                      onClick: Se((U) => sm(h), ["prevent"])
                    }, [
                      l("span", null, o(h.label), 1),
                      l("b", null, o(cm(h.countKey)), 1)
                    ], 10, rL))), 128))
                  ], 8, nL),
                  l("form", {
                    method: "get",
                    class: "library-review-filter-form",
                    "aria-label": u(t)("library", "Filter current review queue"),
                    onSubmit: Se(Yt, ["prevent"])
                  }, [
                    (f(!0), p(K, null, oe(xg.value, (h) => (f(), p("input", {
                      key: `review-${h.key}`,
                      type: "hidden",
                      name: h.key,
                      value: h.value
                    }, null, 8, sL))), 128)),
                    l("label", null, [
                      Q(o(u(t)("library", "Search within this queue")), 1),
                      be(l("input", {
                        "onUpdate:modelValue": b[45] || (b[45] = (h) => x.q = h),
                        type: "search",
                        name: "q"
                      }, null, 512), [
                        [Ue, x.q]
                      ])
                    ]),
                    l("button", oL, o(u(t)("library", "Apply")), 1)
                  ], 40, lL),
                  l("div", {
                    class: "library-review-request-status",
                    role: "status",
                    "aria-live": "polite",
                    "aria-busy": Mt.loading ? "true" : "false"
                  }, [
                    Mt.loading ? (f(), p("span", cL, o(u(t)("library", "Loading review queue…")), 1)) : A("", !0)
                  ], 8, uL),
                  Mt.error ? (f(), p("p", dL, o(Mt.error), 1)) : A("", !0),
                  ln.value.enabled ? (f(), p("section", fL, [
                    l("div", hL, [
                      l("p", pL, o(u(t)("library", "Metadata review workbench")), 1),
                      l("h3", {
                        id: "library-metadata-review-workbench-heading",
                        title: u(t)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                      }, o(u(t)("library", "Review next suggestion")), 9, vL)
                    ]),
                    ln.value.item ? (f(), p("article", bL, [
                      l("header", null, [
                        l("strong", null, [
                          l("bdi", gL, o(ln.value.item.title), 1)
                        ]),
                        l("span", mL, [
                          l("bdi", yL, o(ln.value.item.cachedPath), 1)
                        ])
                      ]),
                      l("div", _L, [
                        (f(!0), p(K, null, oe(ln.value.fields, (h) => (f(), p("article", {
                          key: h.field,
                          class: "library-metadata-review-field"
                        }, [
                          l("h4", null, [
                            l("bdi", wL, o(h.field), 1)
                          ]),
                          l("dl", null, [
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Current value")), 1),
                              l("dd", null, [
                                l("bdi", kL, o(h.currentValue || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Suggested value")), 1),
                              l("dd", null, [
                                l("bdi", SL, o(h.scannerCandidate || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Path-based suggestion")), 1),
                              l("dd", null, [
                                l("bdi", CL, o(h.pathTemplateCandidate || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Sidecar value")), 1),
                              l("dd", null, [
                                l("bdi", TL, o(h.sidecarValue || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Source")), 1),
                              l("dd", null, [
                                l("bdi", AL, o(h.sourceProvenance || "—"), 1)
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
                            }, null, 8, $L),
                            l("input", {
                              type: "hidden",
                              name: "field",
                              value: h.field
                            }, null, 8, xL),
                            b[117] || (b[117] = l("input", {
                              type: "hidden",
                              name: "returnTo",
                              value: "catalogue"
                            }, null, -1)),
                            l("button", {
                              type: "submit",
                              class: "button secondary",
                              disabled: h.rejected,
                              title: h.rejected ? u(t)("library", "This source value exceeds field limits. Edit the field instead.") : void 0
                            }, o(u(t)("library", "Use suggested value")), 9, OL)
                          ], 8, EL)
                        ]))), 128))
                      ]),
                      l("footer", NL, [
                        l("a", {
                          class: "button secondary",
                          href: ln.value.item.detailsUrl
                        }, o(u(t)("library", "Maintenance")), 9, RL),
                        l("a", {
                          class: "button secondary",
                          href: ln.value.skipUrl
                        }, o(u(t)("library", "Skip to next suggestion")), 9, IL)
                      ])
                    ])) : A("", !0)
                  ])) : A("", !0),
                  S.value.length === 0 && !Mt.loading && !Mt.error ? (f(), p("div", LL, [
                    l("h3", null, o(u(t)("library", "This review queue is clear")), 1),
                    l("p", null, o(u(t)("library", "Choose another queue or return to the catalogue.")), 1),
                    l("a", {
                      class: "button primary",
                      href: rt.value
                    }, o(u(t)("library", "Back to Library")), 9, PL)
                  ])) : (f(), p("div", {
                    key: 3,
                    class: "library-review-results",
                    role: "region",
                    "aria-label": u(t)("library", "Review results")
                  }, [
                    (f(!0), p(K, null, oe(S.value, (h) => (f(), p("article", {
                      key: h.id,
                      class: "library-review-result-card"
                    }, [
                      l("div", null, [
                        l("h3", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (U) => Ba(h, U)
                          }, [
                            l("bdi", ML, o(h.title), 1)
                          ], 8, FL)
                        ]),
                        h.creators ? (f(), p("p", UL, [
                          l("bdi", zL, o(h.displayCreators ?? h.creators), 1)
                        ])) : A("", !0),
                        h.scanError ? (f(), p("p", jL, [
                          l("bdi", BL, o(h.scanError), 1)
                        ])) : A("", !0)
                      ]),
                      l("p", null, [
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (U) => Ba(h, U)
                        }, o(u(t)("library", "Details")), 9, HL),
                        l("a", {
                          class: "button primary",
                          href: h.openUrl,
                          onClick: (U) => mi(h, U)
                        }, o(u(t)("library", "Open")), 9, VL)
                      ])
                    ]))), 128))
                  ], 8, DL)),
                  S.value.length > 0 ? (f(), p("nav", {
                    key: 4,
                    class: "library-pagination",
                    "aria-label": u(t)("library", "Review pagination")
                  }, [
                    J.value.previousUrl ? (f(), p("a", {
                      key: 0,
                      href: J.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, GL)) : (f(), p("span", KL, o(u(t)("library", "Previous")), 1)),
                    l("span", null, [
                      Q(o(u(t)("library", "Page")) + " " + o(J.value.page), 1),
                      J.value.total > 0 ? (f(), p("span", WL, " · " + o(J.value.from) + "–" + o(J.value.to), 1)) : A("", !0)
                    ]),
                    J.value.nextUrl ? (f(), p("a", {
                      key: 2,
                      href: J.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, YL)) : (f(), p("span", ZL, o(u(t)("library", "Next")), 1))
                  ], 8, qL)) : A("", !0)
                ])) : On.value ? (f(), p("main", XL, [
                  l("header", JL, [
                    l("p", QL, o(u(t)("library", "Your library")), 1),
                    l("h2", eP, o(u(t)("library", "Home")), 1)
                  ]),
                  pt.value.length > 0 ? (f(), p("aside", {
                    key: 0,
                    class: "library-active-filter-callout",
                    "aria-label": u(t)("library", "Active catalogue filters")
                  }, [
                    l("h3", null, o(u(t)("library", "Active catalogue filters")), 1),
                    l("nav", {
                      class: "library-active-filter-callout-chips",
                      "aria-label": u(t)("library", "Active catalogue filters")
                    }, [
                      (f(!0), p(K, null, oe(pt.value, (h) => (f(), p("a", {
                        key: `callout-${h.key}`,
                        href: tl(h.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${h.label}`,
                        onClick: Se((U) => al(h.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          Q(o(h.label), 1),
                          h.displayValue ? (f(), p(K, { key: 0 }, [
                            Q(":")
                          ], 64)) : A("", !0)
                        ]),
                        h.displayValue ? (f(), p(K, { key: 0 }, [
                          b[118] || (b[118] = Q(o(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: h.value
                          }, o(h.displayValue), 9, nP)
                        ], 64)) : A("", !0),
                        b[119] || (b[119] = Q()),
                        b[120] || (b[120] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, iP))), 128))
                    ], 8, aP),
                    l("p", rP, [
                      l("a", {
                        class: "button primary library-filter-callout-view",
                        href: yi.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, lP),
                      l("a", {
                        class: "button secondary",
                        href: Rs(),
                        onClick: Se(Is, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, sP)
                    ])
                  ], 8, tP)) : A("", !0),
                  l("section", oP, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", uP, [
                          de(Be, {
                            text: u(t)("library", "Pick up publications you opened recently.")
                          }, {
                            default: ke(() => [
                              Q(o(u(t)("library", "Continue reading")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", {
                        href: `${rt.value}?recentlyOpened=1&sort=lastOpened`
                      }, o(u(t)("library", "View all")), 9, cP)
                    ]),
                    Ss.value.continueReading.length ? (f(), p("div", dP, [
                      (f(!0), p(K, null, oe(Ss.value.continueReading, (h) => (f(), p("article", {
                        key: `continue-${h.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${h.title}`,
                          onClick: (U) => Ba(h, U)
                        }, [
                          l("span", hP, [
                            l("img", {
                              class: "library-cover-image",
                              src: h.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, pP)
                          ])
                        ], 8, fP),
                        l("div", vP, [
                          l("h4", null, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (U) => Ba(h, U)
                            }, [
                              l("bdi", gP, o(h.title), 1)
                            ], 8, bP)
                          ]),
                          h.creators ? (f(), p("p", mP, [
                            l("bdi", yP, o(h.displayCreators ?? h.creators), 1)
                          ])) : A("", !0),
                          l("a", {
                            class: "library-cover-read",
                            href: h.openUrl,
                            onClick: (U) => mi(h, U)
                          }, o(u(t)("library", "Open")), 9, _P)
                        ])
                      ]))), 128))
                    ])) : (f(), p("p", wP, o(u(t)("library", "Publications you open will appear here.")), 1))
                  ]),
                  l("section", kP, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", SP, [
                          de(Be, {
                            text: u(t)("library", "The latest publications indexed from your Library roots.")
                          }, {
                            default: ke(() => [
                              Q(o(u(t)("library", "Recently added")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", {
                        href: `${rt.value}?sort=recent`
                      }, o(u(t)("library", "View all")), 9, CP)
                    ]),
                    Ss.value.recentlyAdded.length ? (f(), p("div", TP, [
                      (f(!0), p(K, null, oe(Ss.value.recentlyAdded, (h) => (f(), p("article", {
                        key: `recent-${h.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${h.title}`,
                          onClick: (U) => Ba(h, U)
                        }, [
                          l("span", EP, [
                            l("img", {
                              class: "library-cover-image",
                              src: h.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, $P)
                          ])
                        ], 8, AP),
                        l("div", xP, [
                          l("h4", null, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (U) => Ba(h, U)
                            }, [
                              l("bdi", NP, o(h.title), 1)
                            ], 8, OP)
                          ]),
                          h.creators ? (f(), p("p", RP, [
                            l("bdi", IP, o(h.displayCreators ?? h.creators), 1)
                          ])) : A("", !0),
                          l("a", {
                            class: "library-cover-read",
                            href: h.openUrl,
                            onClick: (U) => mi(h, U)
                          }, o(u(t)("library", "Open")), 9, LP)
                        ])
                      ]))), 128))
                    ])) : (f(), p("p", PP, o(u(t)("library", "Recently indexed publications will appear here.")), 1))
                  ]),
                  l("section", DP, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", FP, [
                          de(Be, {
                            text: u(t)("library", "Browse the folders that organize your publications.")
                          }, {
                            default: ke(() => [
                              Q(o(u(t)("library", "Shelves")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", { href: ba.value }, o(u(t)("library", "View all")), 9, MP)
                    ]),
                    rf.value.length ? (f(), p("nav", {
                      key: 0,
                      class: "library-home-shelves",
                      "aria-label": u(t)("library", "Shelves")
                    }, [
                      (f(!0), p(K, null, oe(rf.value, (h) => (f(), p("a", {
                        key: h.shelf,
                        href: h.url
                      }, [
                        l("strong", null, [
                          l("bdi", jP, o(h.shelf), 1)
                        ]),
                        l("span", null, o(u(At)("library", "%n item", "%n items", Number(h.itemCount || 0))), 1)
                      ], 8, zP))), 128))
                    ], 8, UP)) : (f(), p("p", BP, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1))
                  ]),
                  Number(Du.value.count || 0) > 0 ? (f(), p("aside", HP, [
                    l("div", null, [
                      l("h3", VP, o(u(t)("library", "Needs attention")), 1),
                      l("p", qP, o(u(At)("library", "%n publication needs better details.", "%n publications need better details.", Number(Du.value.count || 0))), 1)
                    ]),
                    l("a", {
                      class: "button tertiary",
                      href: Du.value.url
                    }, o(u(t)("library", "Review")), 9, GP)
                  ])) : A("", !0)
                ])) : Xi.value ? (f(), p("main", KP, [
                  l("header", WP, [
                    l("p", YP, o(u(t)("library", "Your library")), 1),
                    l("h2", ZP, [
                      de(Be, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: ke(() => [
                          Q(o(u(t)("library", "Shelves")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ])
                  ]),
                  pt.value.length > 0 ? (f(), p("aside", {
                    key: 0,
                    class: "library-active-filter-callout",
                    "aria-label": u(t)("library", "Active catalogue filters")
                  }, [
                    l("h3", null, o(u(t)("library", "Active catalogue filters")), 1),
                    l("nav", {
                      class: "library-active-filter-callout-chips",
                      "aria-label": u(t)("library", "Active catalogue filters")
                    }, [
                      (f(!0), p(K, null, oe(pt.value, (h) => (f(), p("a", {
                        key: `callout-${h.key}`,
                        href: tl(h.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${h.label}`,
                        onClick: Se((U) => al(h.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          Q(o(h.label), 1),
                          h.displayValue ? (f(), p(K, { key: 0 }, [
                            Q(":")
                          ], 64)) : A("", !0)
                        ]),
                        h.displayValue ? (f(), p(K, { key: 0 }, [
                          b[121] || (b[121] = Q(o(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: h.value
                          }, o(h.displayValue), 9, e8)
                        ], 64)) : A("", !0),
                        b[122] || (b[122] = Q()),
                        b[123] || (b[123] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, QP))), 128))
                    ], 8, JP),
                    l("p", t8, [
                      l("a", {
                        class: "button primary library-filter-callout-view",
                        href: yi.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, a8),
                      l("a", {
                        class: "button secondary",
                        href: Rs(),
                        onClick: Se(Is, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, i8)
                    ])
                  ], 8, XP)) : A("", !0),
                  lf.value.length ? (f(), p("nav", {
                    key: 1,
                    "aria-label": u(t)("library", "Shelves")
                  }, [
                    l("ul", r8, [
                      (f(!0), p(K, null, oe(lf.value, (h) => (f(), Pe(kT, {
                        key: h.id,
                        node: h,
                        "children-url": en.value
                      }, null, 8, ["node", "children-url"]))), 128))
                    ])
                  ], 8, n8)) : (f(), p("section", l8, [
                    l("h3", null, [
                      de(Be, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: ke(() => [
                          Q(o(u(t)("library", "Shelves")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    l("p", s8, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1),
                    l("p", o8, [
                      l("a", {
                        class: "button primary",
                        href: Yi.value
                      }, o(u(t)("library", "Add a Library root")), 9, u8),
                      l("a", {
                        class: "button secondary",
                        href: rt.value
                      }, o(u(t)("library", "All publications")), 9, c8)
                    ])
                  ]))
                ])) : (f(), p("section", {
                  key: 4,
                  id: "library-catalogue",
                  class: Te(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": Mt.loading }]),
                  "aria-labelledby": "library-catalogue-heading",
                  "aria-busy": Mt.loading ? "true" : "false"
                }, [
                  l("header", f8, [
                    Aa.value ? (f(), p("p", h8, o(gs.value), 1)) : A("", !0),
                    l("h2", {
                      id: "library-catalogue-heading",
                      ref_key: "catalogueHeadingElement",
                      ref: Vr,
                      tabindex: "-1"
                    }, o(ga.value), 513)
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
                      l("span", v8, o(u(At)("library", "%n item", "%n items", Number(J.value.total || 0))), 1),
                      l("strong", null, o(Sg.value), 1)
                    ], 8, p8),
                    l("form", {
                      method: "get",
                      class: "library-mobile-filter-form",
                      "aria-label": u(t)("library", "Mobile catalogue filters"),
                      onSubmit: Se(wf, ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "folder",
                        value: x.folder
                      }, null, 8, g8),
                      (f(!0), p(K, null, oe(nf.value, (h) => (f(), p("input", {
                        key: `mobile-hidden-${h.key}`,
                        type: "hidden",
                        name: h.key,
                        value: h.value
                      }, null, 8, m8))), 128)),
                      l("fieldset", y8, [
                        l("legend", null, o(u(t)("library", "Content")), 1),
                        l("label", _8, [
                          l("span", null, o(u(t)("library", "Search")), 1),
                          be(l("input", {
                            ref_key: "mobileFilterSearchInput",
                            ref: ms,
                            "onUpdate:modelValue": b[46] || (b[46] = (h) => W.value = h),
                            "data-library-mobile-filter-search": "",
                            type: "search",
                            name: "q",
                            placeholder: u(t)("library", "Title, creator, description, filename or folder")
                          }, null, 8, w8), [
                            [Ue, W.value]
                          ])
                        ]),
                        l("label", null, [
                          Q(o(u(t)("library", "Type")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[47] || (b[47] = (h) => x.type = h),
                            name: "type",
                            onChange: b[48] || (b[48] = (h) => ya(h))
                          }, [
                            l("option", k8, o(u(t)("library", "All types")), 1),
                            (f(!0), p(K, null, oe(L.value, (h) => (f(), p("option", {
                              key: `mobile-type-${h}`,
                              value: h
                            }, o(h), 9, S8))), 128))
                          ], 544), [
                            [it, x.type]
                          ])
                        ]),
                        l("div", C8, [
                          l("label", T8, o(u(t)("library", "Publisher")), 1),
                          be(l("input", {
                            id: "library-mobile-publisher-search",
                            "onUpdate:modelValue": b[49] || (b[49] = (h) => ee.value = h),
                            type: "search",
                            name: "publisherSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search publishers"),
                            title: u(t)("library", "Exact publisher matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-publisher-suggestions",
                            "aria-activedescendant": Of("mobile", "publisher"),
                            "aria-expanded": ne.value && le.value.length > 0 ? "true" : "false",
                            onFocus: b[50] || (b[50] = (h) => Nf("publisher")),
                            onKeydown: b[51] || (b[51] = (h) => Rf(h, "publisher"))
                          }, null, 40, A8), [
                            [Ue, ee.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "publisher",
                            value: x.publisher
                          }, null, 8, E8),
                          ma("publisher") ? (f(), p("small", $8, o(za("publisher")), 1)) : A("", !0),
                          Ea.value && ne.value && le.value.length > 0 ? (f(), p("ul", x8, [
                            (f(!0), p(K, null, oe(le.value, (h, U) => (f(), p("li", {
                              id: Bu("mobile", "publisher", U),
                              key: `mobile-publisher-${h}`,
                              role: "option",
                              "aria-selected": ki.publisher === U ? "true" : "false"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-publisher-suggestion",
                                onMousedown: b[52] || (b[52] = Se(() => {
                                }, ["prevent"])),
                                onClick: (he) => Sf(h, he)
                              }, o(h), 41, N8)
                            ], 8, O8))), 128))
                          ])) : A("", !0)
                        ]),
                        l("div", R8, [
                          l("label", I8, o(u(t)("library", "Series / periodical")), 1),
                          be(l("input", {
                            id: "library-mobile-publication-search",
                            "onUpdate:modelValue": b[53] || (b[53] = (h) => V.value = h),
                            type: "search",
                            name: "publicationSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search series and periodicals"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-publication-suggestions",
                            "aria-expanded": Z.value && B.value.length > 0 ? "true" : "false",
                            onFocus: b[54] || (b[54] = (h) => Z.value = !0),
                            onKeydown: b[55] || (b[55] = ft((h) => Z.value = !1, ["escape"]))
                          }, null, 40, L8), [
                            [Ue, V.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "publication",
                            value: x.publication
                          }, null, 8, P8),
                          ma("publication") ? (f(), p("small", D8, o(za("publication")), 1)) : A("", !0),
                          Ea.value && Z.value && B.value.length > 0 ? (f(), p("ul", F8, [
                            (f(!0), p(K, null, oe(B.value, (h) => (f(), p("li", {
                              key: `mobile-publication-${h}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-publication-suggestion",
                                onMousedown: b[56] || (b[56] = Se(() => {
                                }, ["prevent"])),
                                onClick: (U) => _f(h, U)
                              }, o(h), 41, M8)
                            ]))), 128))
                          ])) : A("", !0)
                        ]),
                        l("div", U8, [
                          l("label", z8, o(u(t)("library", "Publication year")), 1),
                          be(l("input", {
                            id: "library-mobile-year-search",
                            "onUpdate:modelValue": b[57] || (b[57] = (h) => Gt.value = h),
                            type: "search",
                            name: "yearSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search publication years"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-year-suggestions",
                            "aria-expanded": va.value && Wa.value.length > 0 ? "true" : "false",
                            onFocus: b[58] || (b[58] = (h) => va.value = !0),
                            onKeydown: b[59] || (b[59] = ft((h) => va.value = !1, ["escape"]))
                          }, null, 40, j8), [
                            [Ue, Gt.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "year",
                            value: x.year
                          }, null, 8, B8),
                          ma("year") ? (f(), p("small", H8, o(za("year")), 1)) : A("", !0),
                          Ea.value && va.value && Wa.value.length > 0 ? (f(), p("ul", V8, [
                            (f(!0), p(K, null, oe(Wa.value, (h) => (f(), p("li", {
                              key: `mobile-year-${h}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-year-suggestion",
                                onMousedown: b[60] || (b[60] = Se(() => {
                                }, ["prevent"])),
                                onClick: (U) => xf(h, U)
                              }, o(h), 41, q8)
                            ]))), 128))
                          ])) : A("", !0)
                        ]),
                        l("div", G8, [
                          l("label", K8, o(u(t)("library", "Creator")), 1),
                          be(l("input", {
                            id: "library-mobile-creator-search",
                            "onUpdate:modelValue": b[61] || (b[61] = (h) => Me.value = h),
                            type: "search",
                            name: "creatorSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search creators"),
                            title: u(t)("library", "Match an individual author; existing full-field filters remain usable"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-creator-suggestions",
                            "aria-expanded": Ze.value && ye.value.length > 0 ? "true" : "false",
                            onFocus: b[62] || (b[62] = (h) => Ze.value = !0),
                            onKeydown: b[63] || (b[63] = ft((h) => Ze.value = !1, ["escape"]))
                          }, null, 40, W8), [
                            [Ue, Me.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "creator",
                            value: x.creator
                          }, null, 8, Y8),
                          ma("creator") ? (f(), p("small", Z8, o(za("creator")), 1)) : A("", !0),
                          Ea.value && Ze.value && ye.value.length > 0 ? (f(), p("ul", X8, [
                            (f(!0), p(K, null, oe(ye.value, (h) => (f(), p("li", {
                              key: `mobile-creator-${h}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-creator-suggestion",
                                onMousedown: b[64] || (b[64] = Se(() => {
                                }, ["prevent"])),
                                onClick: (U) => kf(h, U)
                              }, o(h), 41, J8)
                            ]))), 128))
                          ])) : A("", !0)
                        ]),
                        l("label", null, [
                          Q(o(u(t)("library", "Format")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[65] || (b[65] = (h) => x.format = h),
                            name: "format",
                            onChange: b[66] || (b[66] = (h) => ya(h))
                          }, [
                            l("option", Q8, o(u(t)("library", "All formats")), 1),
                            (f(!0), p(K, null, oe($.value, (h) => (f(), p("option", {
                              key: `mobile-format-${h}`,
                              value: h
                            }, o(Ls(h)), 9, e5))), 128))
                          ], 544), [
                            [it, x.format]
                          ])
                        ]),
                        l("div", t5, [
                          l("label", a5, o(u(t)("library", "Subject")), 1),
                          be(l("input", {
                            id: "library-mobile-subject-search",
                            "onUpdate:modelValue": b[67] || (b[67] = (h) => Y.value = h),
                            type: "search",
                            name: "subjectSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search subjects"),
                            title: u(t)("library", "Exact subject matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-subject-suggestions",
                            "aria-expanded": ae.value && ve.value.length > 0 ? "true" : "false",
                            onFocus: b[68] || (b[68] = (h) => ae.value = !0),
                            onKeydown: b[69] || (b[69] = ft((h) => ae.value = !1, ["escape"]))
                          }, null, 40, i5), [
                            [Ue, Y.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "subject",
                            value: x.subject
                          }, null, 8, n5),
                          ma("subject") ? (f(), p("small", r5, o(za("subject")), 1)) : A("", !0),
                          Ea.value && ae.value && ve.value.length > 0 ? (f(), p("ul", l5, [
                            (f(!0), p(K, null, oe(ve.value, (h) => (f(), p("li", {
                              key: `mobile-subject-${h}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-subject-suggestion",
                                onMousedown: b[70] || (b[70] = Se(() => {
                                }, ["prevent"])),
                                onClick: (U) => $f(h, U)
                              }, o(h), 41, s5)
                            ]))), 128))
                          ])) : A("", !0)
                        ]),
                        l("div", o5, [
                          l("label", u5, o(u(t)("library", "Classification")), 1),
                          be(l("input", {
                            id: "library-mobile-classification-search",
                            "onUpdate:modelValue": b[71] || (b[71] = (h) => Ae.value = h),
                            type: "search",
                            name: "classificationSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search classifications"),
                            title: u(t)("library", "Exact classification matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-classification-suggestions",
                            "aria-expanded": Oe.value && Ye.value.length > 0 ? "true" : "false",
                            onFocus: b[72] || (b[72] = (h) => Oe.value = !0),
                            onKeydown: b[73] || (b[73] = ft((h) => Oe.value = !1, ["escape"]))
                          }, null, 40, c5), [
                            [Ue, Ae.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "classification",
                            value: x.classification
                          }, null, 8, d5),
                          Ea.value && Oe.value && Ye.value.length > 0 ? (f(), p("ul", f5, [
                            (f(!0), p(K, null, oe(Ye.value, (h) => (f(), p("li", {
                              key: `mobile-classification-${h}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-classification-suggestion",
                                onMousedown: b[74] || (b[74] = Se(() => {
                                }, ["prevent"])),
                                onClick: (U) => Cf(h, U)
                              }, o(h), 41, h5)
                            ]))), 128))
                          ])) : A("", !0)
                        ])
                      ]),
                      l("fieldset", p5, [
                        l("legend", null, o(u(t)("library", "Location")), 1),
                        l("label", null, [
                          Q(o(u(t)("library", "Shelf")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[75] || (b[75] = (h) => x.shelf = h),
                            name: "shelf",
                            onChange: b[76] || (b[76] = (h) => ya(h))
                          }, [
                            l("option", v5, o(u(t)("library", "All shelves")), 1),
                            (f(!0), p(K, null, oe(C.value, (h) => (f(), p("option", {
                              key: `mobile-shelf-${h}`,
                              value: h
                            }, o(h), 9, b5))), 128))
                          ], 544), [
                            [it, x.shelf]
                          ])
                        ]),
                        l("div", g5, [
                          l("label", m5, o(u(t)("library", "Folder")), 1),
                          be(l("input", {
                            id: "library-mobile-folder-search",
                            "onUpdate:modelValue": b[77] || (b[77] = (h) => nt.value = h),
                            type: "search",
                            name: "folderSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Type at least 3 path characters"),
                            title: u(t)("library", "Select an exact folder path"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-folder-suggestions",
                            "aria-expanded": te.value && R.value.length > 0 ? "true" : "false",
                            onFocus: b[78] || (b[78] = (h) => te.value = !0),
                            onKeydown: b[79] || (b[79] = ft((h) => te.value = !1, ["escape"]))
                          }, null, 40, y5), [
                            [Ue, nt.value]
                          ]),
                          Ea.value && te.value && R.value.length > 0 ? (f(), p("ul", _5, [
                            (f(!0), p(K, null, oe(R.value, (h) => (f(), p("li", {
                              key: `mobile-folder-${h}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-folder-suggestion",
                                onMousedown: b[80] || (b[80] = Se(() => {
                                }, ["prevent"])),
                                onClick: (U) => Af(h, U)
                              }, o(h), 41, w5)
                            ]))), 128))
                          ])) : A("", !0)
                        ])
                      ]),
                      l("fieldset", k5, [
                        l("legend", null, o(u(t)("library", "Review")), 1),
                        l("label", null, [
                          Q(o(u(t)("library", "Scan status")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[81] || (b[81] = (h) => x.status = h),
                            name: "status",
                            onChange: b[82] || (b[82] = (h) => ya(h))
                          }, [
                            l("option", S5, o(u(t)("library", "All scan statuses")), 1),
                            (f(!0), p(K, null, oe(D.value, (h) => (f(), p("option", {
                              key: `mobile-scan-${h}`,
                              value: h
                            }, o(h), 9, C5))), 128))
                          ], 544), [
                            [it, x.status]
                          ])
                        ]),
                        l("label", null, [
                          Q(o(u(t)("library", "Workflow status")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[83] || (b[83] = (h) => x.workflowStatus = h),
                            name: "workflowStatus",
                            onChange: b[84] || (b[84] = (h) => ya(h))
                          }, [
                            l("option", T5, o(u(t)("library", "All workflow statuses")), 1),
                            (f(!0), p(K, null, oe(fe.value, (h) => (f(), p("option", {
                              key: `mobile-workflow-${h}`,
                              value: h
                            }, o(h), 9, A5))), 128))
                          ], 544), [
                            [it, x.workflowStatus]
                          ])
                        ]),
                        l("label", null, [
                          Q(o(u(t)("library", "Suggested updates")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[85] || (b[85] = (h) => x.scannerConflicts = h),
                            name: "scannerConflicts",
                            onChange: b[86] || (b[86] = (h) => ya(h))
                          }, [
                            l("option", E5, o(u(t)("library", "All metadata")), 1),
                            l("option", $5, o(u(t)("library", "Suggested updates")), 1)
                          ], 544), [
                            [it, x.scannerConflicts]
                          ])
                        ])
                      ]),
                      l("fieldset", x5, [
                        l("legend", null, o(u(t)("library", "Personal / display")), 1),
                        l("div", O5, [
                          l("label", N5, o(u(t)("library", "Nextcloud tag")), 1),
                          be(l("input", {
                            id: "library-tag-search",
                            "onUpdate:modelValue": b[87] || (b[87] = (h) => yt.value = h),
                            type: "search",
                            name: "tagSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search tags"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-tag-suggestions",
                            "aria-expanded": gt.value && pa.value.length > 0 ? "true" : "false",
                            onFocus: b[88] || (b[88] = (h) => gt.value = !0),
                            onKeydown: b[89] || (b[89] = ft((h) => gt.value = !1, ["escape"]))
                          }, null, 40, R5), [
                            [Ue, yt.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "tag",
                            value: x.tag
                          }, null, 8, I5),
                          gt.value && pa.value.length > 0 ? (f(), p("ul", L5, [
                            (f(!0), p(K, null, oe(pa.value, (h) => (f(), p("li", {
                              key: h,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-tag-suggestion",
                                onMousedown: b[90] || (b[90] = Se(() => {
                                }, ["prevent"])),
                                onClick: (U) => Tf(h, U)
                              }, o(h), 41, P5)
                            ]))), 128))
                          ])) : A("", !0),
                          l("button", {
                            type: "submit",
                            class: Te(["button secondary library-tag-apply", _i("tag")])
                          }, o(u(t)("library", "Apply tag")), 3)
                        ]),
                        l("label", null, [
                          Q(o(u(t)("library", "Sort")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[91] || (b[91] = (h) => x.sort = h),
                            name: "sort",
                            onChange: Yt
                          }, [
                            l("option", D5, o(u(t)("library", "Title")), 1),
                            l("option", F5, o(u(t)("library", "Date added")), 1),
                            l("option", M5, o(u(t)("library", "Publication date")), 1),
                            l("option", U5, o(u(t)("library", "Series")), 1),
                            l("option", z5, o(u(t)("library", "Recently opened")), 1),
                            l("option", j5, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [it, x.sort]
                          ])
                        ]),
                        l("label", null, [
                          Q(o(u(t)("library", "View")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[92] || (b[92] = (h) => x.view = h),
                            name: "view",
                            onChange: Yt
                          }, [
                            l("option", B5, o(u(t)("library", "Compact")), 1),
                            l("option", H5, o(u(t)("library", "List")), 1)
                          ], 544), [
                            [it, x.view]
                          ])
                        ])
                      ]),
                      l("div", V5, [
                        pt.value.length > 0 ? (f(), p("a", {
                          key: 0,
                          href: Rs(),
                          class: "button secondary library-mobile-filter-clear",
                          onClick: Se(Is, ["prevent"])
                        }, o(u(t)("library", "Clear all")), 9, q5)) : A("", !0),
                        l("button", G5, o(Tg.value), 1)
                      ])
                    ], 40, b8)
                  ], 32),
                  l("nav", {
                    class: "library-catalogue-workspace library-workspace-menubar",
                    "aria-label": u(t)("library", "One catalogue workspace")
                  }, [
                    l("div", W5, [
                      l("section", Y5, [
                        l("h3", {
                          title: u(t)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                        }, o(u(t)("library", "Collections")), 9, Z5),
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
                          }, null, 8, J5),
                          l("input", {
                            type: "hidden",
                            name: "savedCollectionFilters",
                            value: dm.value
                          }, null, 8, Q5),
                          l("label", null, [
                            l("span", eD, o(u(t)("library", "Collection name")), 1),
                            l("input", {
                              type: "text",
                              name: "savedCollectionName",
                              placeholder: u(t)("library", "e.g. Bremen photo books"),
                              disabled: !qu.value,
                              autocomplete: "off"
                            }, null, 8, tD)
                          ]),
                          l("button", {
                            type: "submit",
                            class: "button secondary",
                            disabled: !qu.value,
                            title: u(t)("library", "Save current view")
                          }, o(u(t)("library", "Save")), 9, aD)
                        ], 8, X5)
                      ]),
                      l("form", {
                        method: "get",
                        class: "library-quick-filter-bar library-catalogue-toolbar",
                        "aria-label": u(t)("library", "Catalogue toolbar"),
                        onSubmit: Se(Yt, ["prevent"])
                      }, [
                        (f(!0), p(K, null, oe($g.value, (h) => (f(), p("input", {
                          key: h.key,
                          type: "hidden",
                          name: h.key,
                          value: h.value
                        }, null, 8, nD))), 128)),
                        l("label", rD, [
                          Q(o(u(t)("library", "Sort")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[93] || (b[93] = (h) => x.sort = h),
                            name: "sort",
                            onChange: Yt
                          }, [
                            l("option", lD, o(u(t)("library", "Title")), 1),
                            l("option", sD, o(u(t)("library", "Date added")), 1),
                            l("option", oD, o(u(t)("library", "Publication date")), 1),
                            l("option", uD, o(u(t)("library", "Series")), 1),
                            l("option", cD, o(u(t)("library", "Recently opened")), 1),
                            l("option", dD, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [it, x.sort]
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
                            class: Te({ active: re.value === "compact" }),
                            "aria-pressed": re.value === "compact" ? "true" : "false",
                            onClick: b[94] || (b[94] = (h) => Df("compact"))
                          }, o(u(t)("library", "Compact")), 11, hD),
                          l("button", {
                            type: "button",
                            "data-library-view-mode": "list",
                            class: Te({ active: re.value === "list" }),
                            "aria-pressed": re.value === "list" ? "true" : "false",
                            onClick: b[95] || (b[95] = (h) => Df("list"))
                          }, o(u(t)("library", "List")), 11, pD)
                        ], 8, fD)
                      ], 40, iD)
                    ])
                  ], 8, K5),
                  nn.value ? (f(), p("p", vD, o(nn.value), 1)) : A("", !0),
                  vr.value ? (f(), p("p", bD, o(vr.value), 1)) : A("", !0),
                  pr.value ? (f(), p("p", gD, o(pr.value), 1)) : A("", !0),
                  l("div", mD, [
                    Mt.loading ? (f(), p("span", yD, o(u(t)("library", "Updating catalogue…")), 1)) : Mt.completed ? (f(), p("span", _D, o(u(At)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(J.value.total || 0))), 1)) : A("", !0)
                  ]),
                  Aa.value ? (f(), p("section", wD, [
                    l("p", kD, o(gs.value), 1),
                    l("h3", {
                      id: "library-discovery-heading",
                      title: tn.value ? u(t)("library", "Items by this creator, sorted by publication context when available.") : dr.value ? u(t)("library", "Items from this publication year, sorted by publication date when available.") : u(t)("library", "Items in this publication, sorted by issue/date context when available.")
                    }, o(an.value), 9, SD),
                    l("div", {
                      class: "library-discovery-hero-metrics",
                      "aria-label": u(t)("library", "Discovery summary")
                    }, [
                      l("span", null, o(u(At)("library", "%n item", "%n items", J.value.total)), 1),
                      F.value?.earliestYear && F.value?.latestYear ? (f(), p("span", TD, o(F.value.earliestYear) + "–" + o(F.value.latestYear), 1)) : A("", !0),
                      F.value?.datedCount ? (f(), p("span", AD, o(F.value.datedCount) + " " + o(u(t)("library", "dated")), 1)) : A("", !0),
                      F.value?.undatedCount > 0 ? (f(), p("span", ED, o(F.value.undatedCount) + " " + o(u(t)("library", "undated")), 1)) : A("", !0)
                    ], 8, CD),
                    Ln.value && F.value ? (f(), p("aside", {
                      key: 0,
                      class: "library-publication-issue-context",
                      "aria-label": u(t)("library", "Publication issue/date context")
                    }, [
                      l("strong", null, o(u(t)("library", "Publication contents")), 1),
                      l("span", null, o(u(At)("library", "%n item", "%n items", F.value.itemCount)), 1),
                      F.value.earliestYear && F.value.latestYear ? (f(), p("span", xD, o(F.value.earliestYear) + "–" + o(F.value.latestYear), 1)) : A("", !0),
                      l("span", null, o(F.value.datedCount) + " " + o(u(t)("library", "with issue/date coverage")), 1),
                      F.value.undatedCount > 0 ? (f(), p("span", OD, o(F.value.undatedCount) + " " + o(u(t)("library", "without dates yet")), 1)) : A("", !0),
                      l("span", null, o(u(t)("library", "read-only grouping")), 1)
                    ], 8, $D)) : A("", !0),
                    Ln.value && F.value?.issueGroups?.length ? (f(), p("section", ND, [
                      l("div", null, [
                        l("p", RD, o(u(t)("library", "Issue order")), 1),
                        l("h4", {
                          id: "library-publication-issue-groups-heading",
                          title: u(t)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                        }, o(u(t)("library", "Read-only issue/date grouping")), 9, ID)
                      ]),
                      l("div", {
                        class: "library-publication-issue-strip",
                        "aria-label": u(t)("library", "Visual issue strip")
                      }, [
                        (f(!0), p(K, null, oe(F.value.issueGroups, (h) => (f(), p("a", {
                          key: `strip-${h.label}`,
                          class: "library-issue-strip-card",
                          href: h.items?.[0]?.detailsUrl || "#"
                        }, [
                          l("span", null, o(h.label), 1),
                          l("strong", null, o(h.items?.[0]?.issueLabel || u(t)("library", "Issue")), 1),
                          l("small", null, o(u(At)("library", "%n item", "%n items", h.items?.length || 0)), 1)
                        ], 8, PD))), 128))
                      ], 8, LD),
                      F.value.gapRanges?.length ? (f(), p("p", DD, o(u(t)("library", "Gap")) + ": " + o(F.value.gapRanges.join(", ")), 1)) : A("", !0),
                      (f(!0), p(K, null, oe(F.value.issueGroups, (h) => (f(), p("div", {
                        key: h.label,
                        class: "library-publication-issue-group"
                      }, [
                        l("h5", null, o(h.label), 1),
                        l("ol", null, [
                          (f(!0), p(K, null, oe(h.items, (U, he) => (f(), p("li", {
                            key: U.itemId
                          }, [
                            l("span", FD, o(U.issueLabel), 1),
                            l("a", {
                              href: U.detailsUrl || "#"
                            }, o(U.title), 9, MD),
                            l("small", null, [
                              Q(o(U.publicationType), 1),
                              U.publicationDate ? (f(), p(K, { key: 0 }, [
                                Q(" · " + o(U.publicationDate), 1)
                              ], 64)) : A("", !0)
                            ]),
                            l("small", UD, [
                              he > 0 ? (f(), p(K, { key: 0 }, [
                                Q(o(u(t)("library", "Previous issue")), 1)
                              ], 64)) : A("", !0),
                              he > 0 && he < h.items.length - 1 ? (f(), p(K, { key: 1 }, [
                                Q(" · ")
                              ], 64)) : A("", !0),
                              he < h.items.length - 1 ? (f(), p(K, { key: 2 }, [
                                Q(o(u(t)("library", "Next issue")), 1)
                              ], 64)) : A("", !0)
                            ])
                          ]))), 128))
                        ])
                      ]))), 128)),
                      F.value.unknownIssueItems?.length ? (f(), p("details", zD, [
                        l("summary", {
                          title: u(t)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                        }, o(u(t)("library", "Unknown issue/date")) + " · " + o(F.value.unknownIssueItems.length), 9, jD)
                      ])) : A("", !0)
                    ])) : A("", !0),
                    l("p", null, [
                      l("a", {
                        href: rt.value,
                        class: "button secondary library-discovery-back-link"
                      }, o(u(t)("library", "Back to full catalogue")), 9, BD)
                    ])
                  ])) : A("", !0),
                  l("div", HD, [
                    l("p", VD, o(u(t)("library", "Showing")) + " " + o(J.value.from) + "–" + o(J.value.to) + " " + o(u(t)("library", "of")) + " " + o(J.value.total) + " " + o(u(t)("library", "catalogue items")), 1),
                    l("nav", {
                      class: "library-pagination library-pagination--top",
                      "aria-label": u(t)("library", "Catalogue pagination")
                    }, [
                      l("span", GD, [
                        Q(o(u(t)("library", "Page")) + " " + o(J.value.page), 1),
                        J.value.total > 0 ? (f(), p("span", KD, " · " + o(J.value.from) + "–" + o(J.value.to), 1)) : A("", !0)
                      ]),
                      J.value.previousUrl ? (f(), p("a", {
                        key: 0,
                        href: J.value.previousUrl
                      }, o(u(t)("library", "Previous")), 9, WD)) : (f(), p("span", YD, o(u(t)("library", "Previous")), 1)),
                      J.value.nextUrl ? (f(), p("a", {
                        key: 2,
                        href: J.value.nextUrl
                      }, o(u(t)("library", "Next")), 9, ZD)) : (f(), p("span", XD, o(u(t)("library", "Next")), 1))
                    ], 8, qD)
                  ]),
                  S.value.length === 0 ? (f(), p("div", {
                    key: 4,
                    class: Te(["library-empty-content", { "library-first-run-guidance": fr.value || Ja.value, "library-filter-empty-state": hr.value && !fr.value && !Ja.value }]),
                    role: "status"
                  }, [
                    fr.value ? (f(), p(K, { key: 0 }, [
                      l("h3", {
                        title: u(t)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                      }, o(u(t)("library", "Start with one Library root")), 9, JD),
                      l("p", QD, [
                        l("a", {
                          href: Yi.value,
                          class: "button primary"
                        }, o(u(t)("library", "Add a Library root")), 9, e9),
                        l("span", t9, o(u(t)("library", "Run a scan after saving a root")), 1)
                      ])
                    ], 64)) : Ja.value ? (f(), p(K, { key: 1 }, [
                      l("h3", {
                        title: u(t)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                      }, o(u(t)("library", "No enabled Library roots")), 9, a9),
                      l("p", i9, [
                        l("a", {
                          href: Yi.value,
                          class: "button primary"
                        }, o(u(t)("library", "Open Library settings")), 9, n9)
                      ])
                    ], 64)) : hr.value ? (f(), p(K, { key: 2 }, [
                      l("h3", {
                        title: u(t)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                      }, o(u(t)("library", "No items match these filters")), 9, r9),
                      pt.value.length > 0 ? (f(), p("nav", {
                        key: 0,
                        class: "library-empty-filter-chips",
                        "aria-label": u(t)("library", "Remove active filters")
                      }, [
                        (f(!0), p(K, null, oe(pt.value, (h) => (f(), p("a", {
                          key: `empty-${h.key}`,
                          href: tl(h.key),
                          class: "library-filter-chip",
                          "aria-label": `${u(t)("library", "Remove filter")}: ${h.label}`,
                          onClick: Se((U) => al(h.key), ["prevent"])
                        }, [
                          l("strong", null, [
                            Q(o(h.label), 1),
                            h.displayValue ? (f(), p(K, { key: 0 }, [
                              Q(":")
                            ], 64)) : A("", !0)
                          ]),
                          h.displayValue ? (f(), p(K, { key: 0 }, [
                            b[124] || (b[124] = Q(o(" "), -1)),
                            l("span", {
                              class: "library-filter-chip-value",
                              title: h.value
                            }, o(h.displayValue), 9, o9)
                          ], 64)) : A("", !0),
                          b[125] || (b[125] = Q()),
                          b[126] || (b[126] = l("span", { "aria-hidden": "true" }, "×", -1))
                        ], 8, s9))), 128))
                      ], 8, l9)) : A("", !0),
                      $t.value ? (f(), p("p", u9, o(u(t)("library", "Try removing {filter}.", { filter: $t.value.displayValue ? `${$t.value.label}: ${$t.value.displayValue}` : $t.value.label })), 1)) : A("", !0),
                      l("p", c9, [
                        kg.value ? (f(), p("a", {
                          key: 0,
                          href: om(),
                          class: "button secondary library-empty-clear-search",
                          onClick: b[96] || (b[96] = Se((h) => al("q"), ["prevent"]))
                        }, o(u(t)("library", "Clear search")), 9, d9)) : A("", !0)
                      ])
                    ], 64)) : (f(), p(K, { key: 3 }, [
                      l("h3", {
                        title: u(t)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                      }, o(u(t)("library", "No catalogue items yet")), 9, f9),
                      l("p", h9, [
                        l("a", {
                          href: Yi.value,
                          class: "button primary"
                        }, o(u(t)("library", "Run a scan from settings")), 9, p9)
                      ])
                    ], 64))
                  ], 2)) : A("", !0),
                  S.value.length > 0 ? (f(), p("section", {
                    key: 5,
                    class: Te(["library-list-selection", { "library-list-selection--active": na.value.length }]),
                    "aria-label": u(t)("library", "Selection")
                  }, [
                    l("div", b9, [
                      l("label", g9, [
                        l("input", {
                          type: "checkbox",
                          checked: na.value.length === S.value.length,
                          onChange: Og
                        }, null, 40, m9),
                        l("span", {
                          title: u(t)("library", "Select all publications on this page")
                        }, o(u(t)("library", "Select all")), 9, y9)
                      ]),
                      na.value.length ? (f(), p("span", _9, o(u(At)("library", "%n publication selected", "%n publications selected", na.value.length)), 1)) : A("", !0),
                      be(de(hd, {
                        "item-ids": na.value,
                        "request-token": ht.value,
                        "lists-url": Qi.value,
                        "preferred-list-id": u(Tu)
                      }, null, 8, ["item-ids", "request-token", "lists-url", "preferred-list-id"]), [
                        [rr, na.value.length]
                      ]),
                      na.value.length ? be((f(), p("select", {
                        key: 1,
                        "onUpdate:modelValue": b[97] || (b[97] = (h) => Kt.value = h),
                        "aria-label": u(t)("library", "More actions")
                      }, [
                        l("option", k9, o(u(t)("library", "More actions")), 1),
                        l("option", S9, o(u(t)("library", "Add tag")), 1),
                        l("option", C9, o(u(t)("library", "Remove tag")), 1),
                        l("option", T9, o(u(t)("library", "Preview edit")), 1),
                        l("option", A9, o(u(t)("library", "Fresh covers")), 1),
                        l("option", E9, o(u(t)("library", "Reset metadata")), 1)
                      ], 8, w9)), [
                        [it, Kt.value]
                      ]) : A("", !0)
                    ]),
                    na.value.length && Kt.value ? (f(), p("div", {
                      key: 0,
                      class: "library-selection-action",
                      onSubmitCapture: Rg
                    }, [
                      Kt.value === "tag" ? (f(), p("form", {
                        key: 0,
                        method: "post",
                        action: Ru.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, x9),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Add tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, O9)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button primary",
                          title: u(t)("library", "Applies only to the selected publications.")
                        }, o(u(t)("library", "Apply")), 9, N9)
                      ], 8, $9)) : A("", !0),
                      Kt.value === "untag" ? (f(), p("form", {
                        key: 1,
                        method: "post",
                        action: vs.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, I9),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Remove tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, L9)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Removes the tag only from the selected publications.")
                        }, o(u(t)("library", "Remove")), 9, P9)
                      ], 8, R9)) : A("", !0),
                      Kt.value === "reset" ? (f(), p("form", {
                        key: 2,
                        method: "post",
                        action: Iu.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, F9),
                        (f(!0), p(K, null, oe(ks.value, (h) => (f(), p("input", {
                          key: `reset-${h.key}`,
                          type: "hidden",
                          name: h.key,
                          value: h.value
                        }, null, 8, M9))), 128)),
                        b[127] || (b[127] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Reset metadata")), 9, U9)
                      ], 8, D9)) : A("", !0),
                      Kt.value === "edit" ? (f(), p("form", {
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
                        }, null, 8, j9),
                        (f(!0), p(K, null, oe(ks.value, (h) => (f(), p("input", {
                          key: `edit-preview-${h.key}`,
                          type: "hidden",
                          name: h.key,
                          value: h.value
                        }, null, 8, B9))), 128)),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Field")), 1),
                          l("select", H9, [
                            l("option", V9, o(u(t)("library", "Publication type")), 1),
                            l("option", q9, o(u(t)("library", "Subtitle")), 1),
                            l("option", G9, o(u(t)("library", "Creators")), 1),
                            l("option", K9, o(u(t)("library", "Series / periodical")), 1),
                            l("option", W9, o(u(t)("library", "Series")), 1),
                            l("option", Y9, o(u(t)("library", "Part in series")), 1),
                            l("option", Z9, o(u(t)("library", "Genre")), 1),
                            l("option", X9, o(u(t)("library", "Publication date")), 1),
                            l("option", J9, o(u(t)("library", "Language")), 1),
                            l("option", Q9, o(u(t)("library", "Publisher")), 1),
                            l("option", eF, o(u(t)("library", "Subjects")), 1),
                            l("option", tF, o(u(t)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Value")), 1),
                          l("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: u(t)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, aF)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Preview first, then apply from the review page.")
                        }, o(u(t)("library", "Preview edit")), 9, iF)
                      ], 8, z9)) : A("", !0),
                      Kt.value === "covers" ? (f(), p("form", {
                        key: 4,
                        method: "post",
                        action: Hr.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, rF),
                        (f(!0), p(K, null, oe(ks.value, (h) => (f(), p("input", {
                          key: `cover-${h.key}`,
                          type: "hidden",
                          name: h.key,
                          value: h.value
                        }, null, 8, lF))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Fresh covers")), 9, sF)
                      ], 8, nF)) : A("", !0),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: b[98] || (b[98] = (h) => Kt.value = "")
                      }, o(u(t)("library", "Cancel")), 1)
                    ], 32)) : A("", !0)
                  ], 10, v9)) : A("", !0),
                  Ur.value && (u(Xa) === "building" || Object.values(u(gi)).some((h) => h.status === "partial")) ? (f(), p("p", oF, o(u(t)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : A("", !0),
                  S.value.length > 0 && re.value === "list" ? (f(), p("div", uF, [
                    l("table", cF, [
                      l("caption", dF, o(u(t)("library", "Catalogue list")), 1),
                      l("thead", null, [
                        l("tr", null, [
                          l("th", fF, [
                            l("span", hF, o(u(t)("library", "Selection")), 1)
                          ]),
                          l("th", pF, [
                            l("span", vF, o(u(t)("library", "Cover")), 1)
                          ]),
                          l("th", bF, o(u(t)("library", "Title")), 1),
                          l("th", gF, o(u(t)("library", "Creators")), 1),
                          l("th", mF, o(u(t)("library", "Publication date")), 1),
                          l("th", yF, o(u(t)("library", "Series")), 1),
                          l("th", _F, o(u(t)("library", "Format")), 1),
                          l("th", wF, o(u(t)("library", "Shelf")), 1),
                          l("th", kF, o(u(t)("library", "Actions")), 1)
                        ])
                      ]),
                      l("tbody", null, [
                        (f(!0), p(K, null, oe(S.value, (h) => (f(), p("tr", {
                          key: h.id,
                          class: Te(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Cs.value.has(Number(h.id)), "library-catalogue-list-row--open": rn.value && Number(Dn.value) === Number(h.id) }])
                        }, [
                          l("td", SF, [
                            l("label", CF, [
                              l("input", {
                                type: "checkbox",
                                checked: Cs.value.has(Number(h.id)),
                                "aria-label": `${u(t)("library", "Select publication")}: ${h.title}`,
                                onChange: (U) => sf(h.id, U.currentTarget.checked)
                              }, null, 40, TF)
                            ])
                          ]),
                          l("td", AF, [
                            l("button", {
                              type: "button",
                              class: "library-catalogue-list-cover",
                              "aria-label": `${u(t)("library", "Details")}: ${h.title}`,
                              onClick: (U) => Ba(h, U)
                            }, [
                              l("img", {
                                src: h.coverUrl,
                                alt: "",
                                loading: "lazy",
                                decoding: "async"
                              }, null, 8, $F)
                            ], 8, EF)
                          ]),
                          l("th", xF, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button library-catalogue-list-title",
                              onClick: (U) => Ba(h, U)
                            }, [
                              l("bdi", NF, o(h.title), 1)
                            ], 8, OF),
                            u(gi)[h.id]?.count ? (f(), p("a", {
                              key: 0,
                              class: "library-duplicate-badge",
                              href: `${rt.value}?duplicates=1&bookId=${h.id}`
                            }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(gi)[h.id].count) + o(u(gi)[h.id].status === "partial" ? "+" : ""), 9, RF)) : A("", !0)
                          ]),
                          l("td", IF, [
                            h.creators ? (f(), p("bdi", LF, o(h.displayCreators ?? h.creators), 1)) : (f(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, PF))
                          ]),
                          l("td", null, [
                            h.publicationDate ? (f(), p("time", {
                              key: 0,
                              datetime: h.publicationDate
                            }, o(h.publicationDate), 9, DF)) : (f(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, FF))
                          ]),
                          l("td", null, [
                            h.publication ? (f(), p("bdi", MF, o(h.publication), 1)) : (f(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, UF))
                          ]),
                          l("td", null, [
                            h.extension || h.publicationType ? (f(), p("bdi", {
                              key: 0,
                              class: Te(h.extension ? "library-bidi-machine" : "library-bidi-human"),
                              dir: h.extension ? "ltr" : "auto"
                            }, o(h.extension ? Ls(h.extension) : h.publicationType), 11, zF)) : (f(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, jF))
                          ]),
                          l("td", null, [
                            h.shelf ? (f(), p("bdi", BF, o(h.shelf), 1)) : (f(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, HF))
                          ]),
                          l("td", VF, [
                            l("a", {
                              class: "button primary",
                              href: h.openUrl,
                              onClick: (U) => mi(h, U)
                            }, o(u(t)("library", "Open")), 9, qF),
                            l("button", {
                              type: "button",
                              class: "button secondary",
                              onClick: (U) => Ba(h, U)
                            }, o(u(t)("library", "Details")), 9, GF)
                          ])
                        ], 2))), 128))
                      ])
                    ])
                  ])) : S.value.length > 0 ? (f(), p("div", {
                    key: 8,
                    class: Te(["library-cover-gallery", Ie.value])
                  }, [
                    (f(!0), p(K, null, oe(S.value, (h) => (f(), p("article", {
                      key: h.id,
                      class: Te(["library-cover-card", { "library-cover-card--selected": Cs.value.has(Number(h.id)), "library-cover-card--open": rn.value && Number(Dn.value) === Number(h.id) }])
                    }, [
                      l("label", KF, [
                        l("input", {
                          type: "checkbox",
                          checked: Cs.value.has(Number(h.id)),
                          "aria-label": `${u(t)("library", "Select publication")}: ${h.title}`,
                          onChange: (U) => sf(h.id, U.currentTarget.checked)
                        }, null, 40, WF)
                      ]),
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-labelledby": `library-details-action-${h.id} library-card-title-${h.id}`,
                        "aria-expanded": rn.value && Number(Dn.value) === Number(h.id) ? "true" : "false",
                        onClick: (U) => Ba(h, U)
                      }, [
                        l("span", {
                          id: `library-details-action-${h.id}`,
                          class: "hidden-visually"
                        }, o(u(t)("library", "Details")), 9, ZF),
                        de(ef, {
                          src: h.coverUrl
                        }, null, 8, ["src"])
                      ], 8, YF),
                      l("form", {
                        method: "post",
                        action: h.starUrl,
                        class: "library-cover-star-form",
                        onSubmit: Se((U) => zf(h, U), ["prevent"])
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, JF),
                        b[128] || (b[128] = l("input", {
                          type: "hidden",
                          name: "returnTo",
                          value: "catalogue"
                        }, null, -1)),
                        l("input", {
                          type: "hidden",
                          name: "starred",
                          value: h.starred ? "0" : "1"
                        }, null, 8, QF),
                        l("button", {
                          type: "submit",
                          class: Te(["library-cover-star-button", { "library-cover-star-button--starred": h.starred }]),
                          "aria-pressed": h.starred ? "true" : "false",
                          title: h.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-label": h.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-busy": il[h.id] ? "true" : void 0,
                          disabled: il[h.id],
                          onClick: Se((U) => zf(h, U), ["prevent"])
                        }, o(h.starred ? "★" : "☆"), 11, eM),
                        nl[h.id] ? (f(), p("span", {
                          key: 0,
                          "data-library-star-error": h.id,
                          class: "library-star-feedback",
                          role: "alert"
                        }, o(nl[h.id]), 9, tM)) : A("", !0)
                      ], 40, XF),
                      l("div", aM, [
                        l("div", iM, [
                          u(gi)[h.id]?.count ? (f(), p("a", {
                            key: 0,
                            class: "library-duplicate-badge",
                            href: `${rt.value}?duplicates=1&bookId=${h.id}`
                          }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(gi)[h.id].count) + o(u(gi)[h.id].status === "partial" ? "+" : ""), 9, nM)) : A("", !0),
                          l("h3", {
                            id: `library-card-title-${h.id}`
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (U) => Ba(h, U)
                            }, [
                              l("bdi", sM, o(h.title), 1)
                            ], 8, lM)
                          ], 8, rM),
                          h.creators ? (f(), p("p", oM, [
                            l("bdi", uM, o(h.displayCreators ?? h.creators), 1)
                          ])) : A("", !0),
                          Ff(h) ? (f(), p("p", cM, [
                            l("bdi", dM, o(Ff(h)), 1)
                          ])) : A("", !0)
                        ])
                      ])
                    ], 2))), 128))
                  ], 2)) : A("", !0),
                  S.value.length > 0 ? (f(), p("nav", {
                    key: 9,
                    class: "library-pagination library-pagination--bottom",
                    "aria-label": u(t)("library", "Catalogue pagination")
                  }, [
                    l("span", hM, [
                      Q(o(u(t)("library", "Page")) + " " + o(J.value.page), 1),
                      J.value.total > 0 ? (f(), p("span", pM, " · " + o(J.value.from) + "–" + o(J.value.to), 1)) : A("", !0)
                    ]),
                    J.value.previousUrl ? (f(), p("a", {
                      key: 0,
                      href: J.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, vM)) : (f(), p("span", bM, o(u(t)("library", "Previous")), 1)),
                    J.value.nextUrl ? (f(), p("a", {
                      key: 2,
                      href: J.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, gM)) : (f(), p("span", mM, o(u(t)("library", "Next")), 1))
                  ], 8, fM)) : A("", !0)
                ], 10, d8))
              ], 64))
            ], 8, YI)
          ]),
          _: 1
        }),
        de(u(W2), {
          ref_key: "sidebarComponent",
          ref: Mn,
          class: "library-native-item-sidebar",
          open: rn.value,
          "no-toggle": "",
          loading: ra.loading,
          name: Ce.value?.title || u(t)("library", "Publication details"),
          subname: Ce.value?.displayCreators ?? Ce.value?.creators ?? "",
          role: Un.value ? "dialog" : void 0,
          "aria-modal": Un.value ? "true" : void 0,
          "aria-labelledby": Un.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Un.value && Ce.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: bf,
          onClosed: Hg,
          onClose: Yr
        }, {
          default: ke(() => [
            l("div", yM, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: of,
                class: "hidden-visually",
                tabindex: "-1"
              }, o(Ce.value?.title || u(t)("library", "Publication details")), 513),
              ra.loading && !Ce.value ? (f(), p("p", _M, o(u(t)("library", "Loading publication details…")), 1)) : ra.error ? (f(), p("div", {
                key: 1,
                class: "library-sidebar-state",
                role: ra.missing ? "status" : "alert"
              }, [
                l("p", null, o(ra.error), 1),
                ra.missing ? A("", !0) : (f(), p("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: b[99] || (b[99] = (h) => Wr(Dn.value, { historyMode: "none" }))
                }, o(u(t)("library", "Try again")), 1))
              ], 8, wM)) : Ce.value ? (f(), p(K, { key: 2 }, [
                l("p", kM, o(u(t)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", SM, [
                  l("span", CM, o(u(t)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: Ce.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy",
                    decoding: "async"
                  }, null, 8, TM),
                  l("div", AM, [
                    l("p", EM, [
                      l("bdi", $M, o(Ce.value.publicationType || u(t)("library", "Publication")), 1),
                      Ce.value.extension ? (f(), p("span", xM, [
                        b[129] || (b[129] = Q(" · ", -1)),
                        l("bdi", OM, o(Ls(Ce.value.extension)), 1)
                      ])) : A("", !0)
                    ]),
                    l("div", NM, [
                      l("a", {
                        class: "button primary",
                        href: Ce.value.openUrl,
                        onClick: b[100] || (b[100] = (h) => mi(Ce.value, h))
                      }, o(u(t)("library", "Open")), 9, RM),
                      de(u(Gd), {
                        "aria-label": u(t)("library", "File and maintenance actions")
                      }, {
                        default: ke(() => [
                          de(u(Ic), {
                            href: Ce.value.filesUrl
                          }, {
                            default: ke(() => [
                              Q(o(u(t)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          de(u(Ic), {
                            href: Ce.value.downloadUrl
                          }, {
                            default: ke(() => [
                              Q(o(u(t)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          de(u(Ic), {
                            href: Ce.value.detailsUrl
                          }, {
                            default: ke(() => [
                              Q(o(u(t)("library", "Maintenance (legacy)")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ])
                  ])
                ]),
                (f(), Pe(hd, {
                  key: Ce.value.id,
                  "item-ids": [Number(Ce.value.id)],
                  "request-token": ht.value,
                  "lists-url": Qi.value
                }, null, 8, ["item-ids", "request-token", "lists-url"])),
                l("nav", {
                  class: "library-sidebar-sections",
                  "aria-label": u(t)("library", "Publication detail sections")
                }, [
                  (f(), p(K, null, oe(Lg, (h) => l("button", {
                    key: h.key,
                    type: "button",
                    class: Te({ active: Fn.value === h.key }),
                    "aria-current": Fn.value === h.key ? "page" : void 0,
                    onClick: (U) => Fn.value = h.key
                  }, o(u(t)("library", h.label)), 11, LM)), 64))
                ], 8, IM),
                Fn.value === "overview" ? (f(), p("section", PM, [
                  l("h3", DM, o(u(t)("library", "Overview")), 1),
                  uf.value ? (f(), p("p", FM, [
                    l("bdi", MM, o(uf.value), 1)
                  ])) : A("", !0),
                  l("dl", UM, [
                    Ce.value.publication ? (f(), p("div", zM, [
                      l("dt", null, o(u(t)("library", "Series")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: $s("publication", Ce.value.publication),
                          title: u(t)("library", "Filter catalogue by this series"),
                          onClick: b[101] || (b[101] = (h) => xs(h, "publication", Ce.value.publication))
                        }, [
                          l("bdi", BM, o(Ce.value.publication), 1)
                        ], 8, jM)
                      ])
                    ])) : A("", !0),
                    Ce.value.publicationDate ? (f(), p("div", HM, [
                      l("dt", null, o(u(t)("library", "Date")), 1),
                      l("dd", null, [
                        zn.value ? (f(), p("a", {
                          key: 0,
                          class: "library-detail-facet-link",
                          href: $s("year", zn.value),
                          title: u(t)("library", "Filter catalogue by this publication year"),
                          onClick: b[102] || (b[102] = (h) => xs(h, "year", zn.value))
                        }, o(zn.value), 9, VM)) : A("", !0),
                        zn.value && Ce.value.publicationDate !== zn.value ? (f(), p("span", qM, " · ")) : A("", !0),
                        Ce.value.publicationDate !== zn.value ? (f(), p("span", GM, o(Ce.value.publicationDate), 1)) : A("", !0)
                      ])
                    ])) : A("", !0),
                    Ce.value.publisher ? (f(), p("div", KM, [
                      l("dt", null, o(u(t)("library", "Publisher")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: $s("publisher", Ce.value.publisher),
                          title: u(t)("library", "Filter catalogue by this publisher"),
                          onClick: b[103] || (b[103] = (h) => xs(h, "publisher", Ce.value.publisher))
                        }, [
                          l("bdi", YM, o(Ce.value.publisher), 1)
                        ], 8, WM)
                      ])
                    ])) : A("", !0),
                    cf.value.length ? (f(), p("div", ZM, [
                      l("dt", null, o(u(t)("library", "Language")), 1),
                      l("dd", XM, [
                        (f(!0), p(K, null, oe(cf.value, (h) => (f(), p("a", {
                          key: h,
                          class: "library-detail-facet-link",
                          href: $s("language", h),
                          title: u(t)("library", "Filter catalogue by this language"),
                          onClick: (U) => xs(U, "language", h)
                        }, [
                          l("bdi", QM, o(h), 1)
                        ], 8, JM))), 128))
                      ])
                    ])) : A("", !0),
                    Ce.value.shelf ? (f(), p("div", e6, [
                      l("dt", null, o(u(t)("library", "Shelf")), 1),
                      l("dd", null, o(Ce.value.shelf), 1)
                    ])) : A("", !0)
                  ])
                ])) : Fn.value === "metadata" ? (f(), p("section", t6, [
                  Ur.value ? (f(), Pe(bg, {
                    key: `${Ce.value.id}:${Ce.value.title}:${Ce.value.creators}`,
                    "item-id": Number(Ce.value.id),
                    "request-token": ht.value
                  }, null, 8, ["item-id", "request-token"])) : A("", !0),
                  l("h3", a6, o(u(t)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Se(jg, ["prevent"])
                  }, [
                    l("label", null, [
                      Q(o(u(t)("library", "Title")), 1),
                      be(l("input", {
                        "onUpdate:modelValue": b[104] || (b[104] = (h) => mt.title = h),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [Ue, mt.title]
                      ])
                    ]),
                    l("label", null, [
                      de(Be, {
                        text: u(t)("library", "Book series name, stored separately from the existing Publication field.")
                      }, {
                        default: ke(() => [
                          Q(o(u(t)("library", "Series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      be(l("input", {
                        "onUpdate:modelValue": b[105] || (b[105] = (h) => mt.series = h),
                        name: "series",
                        maxlength: "255"
                      }, null, 512), [
                        [Ue, mt.series]
                      ])
                    ]),
                    l("label", null, [
                      de(Be, {
                        text: u(t)("library", "Text such as 01, 2.5 or Volume II. Leading zeros and labels are preserved.")
                      }, {
                        default: ke(() => [
                          Q(o(u(t)("library", "Part in series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      be(l("input", {
                        "onUpdate:modelValue": b[106] || (b[106] = (h) => mt.seriesNumber = h),
                        name: "seriesNumber",
                        maxlength: "64"
                      }, null, 512), [
                        [Ue, mt.seriesNumber]
                      ])
                    ]),
                    l("label", null, [
                      de(Be, {
                        text: u(t)("library", "A genre label such as Science fiction. Separate from subjects, file format and publication type.")
                      }, {
                        default: ke(() => [
                          Q(o(u(t)("library", "Genre")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      be(l("input", {
                        "onUpdate:modelValue": b[107] || (b[107] = (h) => mt.genre = h),
                        name: "genre",
                        maxlength: "255"
                      }, null, 512), [
                        [Ue, mt.genre]
                      ])
                    ]),
                    l("label", null, [
                      Q(o(u(t)("library", "Publication date")), 1),
                      be(l("input", {
                        "onUpdate:modelValue": b[108] || (b[108] = (h) => mt.publicationDate = h),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: u(t)("library", "e.g. 2026")
                      }, null, 8, i6), [
                        [Ue, mt.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, o(u(t)("library", "Identifiers")), 1),
                      (f(!0), p(K, null, oe(mt.identifiers, (h, U) => (f(), p("div", {
                        key: U,
                        class: "library-sidebar-identifier"
                      }, [
                        be(l("input", {
                          "onUpdate:modelValue": (he) => h.scheme = he,
                          "aria-label": u(t)("library", "Identifier type"),
                          placeholder: u(t)("library", "Identifier type")
                        }, null, 8, n6), [
                          [Ue, h.scheme]
                        ]),
                        be(l("input", {
                          "onUpdate:modelValue": (he) => h.displayValue = he,
                          "aria-label": u(t)("library", "Identifier value")
                        }, null, 8, r6), [
                          [Ue, h.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (he) => zg(U)
                        }, o(u(t)("library", "Remove")), 9, l6)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Ug
                      }, o(u(t)("library", "Add identifier")), 1)
                    ]),
                    de(Be, {
                      text: u(t)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")
                    }, {
                      default: ke(() => [
                        Q(o(u(t)("library", "Maintenance")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"]),
                    ja.error ? (f(), p("p", s6, o(ja.error), 1)) : ja.saved ? (f(), p("p", o6, o(u(t)("library", "Metadata saved.")), 1)) : A("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: ja.saving
                    }, o(ja.saving ? u(t)("library", "Saving…") : u(t)("library", "Save metadata")), 9, u6)
                  ], 32),
                  Os(Ce.value).length ? (f(), p("section", c6, [
                    l("h4", d6, [
                      de(Be, {
                        text: u(t)("library", "Suggestions are optional and never replace your edits automatically.")
                      }, {
                        default: ke(() => [
                          Q(o(u(t)("library", "Scanner suggestions")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    l("dl", null, [
                      (f(!0), p(K, null, oe(Os(Ce.value), (h) => (f(), p("div", {
                        key: h.field
                      }, [
                        l("dt", null, o(h.field) + " · " + o(h.sourceProvenance), 1),
                        l("dd", null, [
                          Q(o(u(t)("library", "Current")) + ": " + o(h.currentValue || "—"), 1),
                          b[130] || (b[130] = l("br", null, null, -1)),
                          Q(o(u(t)("library", "Suggestion")) + ": " + o(h.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : A("", !0)
                ])) : (f(), p("section", f6, [
                  l("h3", h6, o(u(t)("library", "Activity")), 1),
                  l("dl", p6, [
                    l("div", null, [
                      l("dt", null, o(u(t)("library", "Scan status")), 1),
                      l("dd", null, o(Ce.value.scanStatus || "—"), 1)
                    ]),
                    Ce.value.workflowStatus ? (f(), p("div", v6, [
                      l("dt", null, o(u(t)("library", "Workflow")), 1),
                      l("dd", null, o(Ce.value.workflowStatus), 1)
                    ])) : A("", !0),
                    Ce.value.metadataSource ? (f(), p("div", b6, [
                      l("dt", null, o(u(t)("library", "Metadata source")), 1),
                      l("dd", null, o(Ce.value.metadataSource), 1)
                    ])) : A("", !0),
                    Ce.value.cachedPath ? (f(), p("div", g6, [
                      l("dt", null, o(u(t)("library", "File")), 1),
                      l("dd", m6, [
                        Ce.value.openUrl ? (f(), p("a", {
                          key: 0,
                          href: Ce.value.openUrl,
                          onClick: b[109] || (b[109] = (h) => mi(Ce.value, h))
                        }, [
                          l("bdi", _6, o(Ce.value.cachedPath), 1)
                        ], 8, y6)) : (f(), p("bdi", w6, o(Ce.value.cachedPath), 1))
                      ])
                    ])) : A("", !0)
                  ])
                ])),
                Ce.value.canonicalAuthors?.length ? (f(), p("nav", {
                  key: 3,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Authors")
                }, [
                  (f(!0), p(K, null, oe(Ce.value.canonicalAuthors, (h) => (f(), p("a", {
                    key: h.id,
                    class: "button secondary",
                    href: `${w.generateUrl("/apps/library/")}?authors=1&authorId=${h.id}`
                  }, [
                    l("bdi", C6, o(h.name), 1)
                  ], 8, S6))), 128))
                ], 8, k6)) : Ce.value.authors?.length ? (f(), p("nav", {
                  key: 4,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Creators")
                }, [
                  (f(!0), p(K, null, oe(Ce.value.authors, (h) => (f(), p("a", {
                    key: h,
                    class: "button secondary",
                    href: gm(h)
                  }, [
                    l("bdi", E6, o(h), 1)
                  ], 8, A6))), 128))
                ], 8, T6)) : A("", !0),
                Ce.value.canonicalSeries?.length ? (f(), p("nav", {
                  key: 5,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Series")
                }, [
                  (f(!0), p(K, null, oe(Ce.value.canonicalSeries, (h) => (f(), p("a", {
                    key: h.id,
                    class: "button secondary",
                    href: `${w.generateUrl("/apps/library/")}?series=1&seriesId=${h.id}`
                  }, [
                    l("bdi", O6, [
                      Q(o(h.name), 1),
                      h.part ? (f(), p(K, { key: 0 }, [
                        Q(" · " + o(h.part), 1)
                      ], 64)) : A("", !0)
                    ])
                  ], 8, x6))), 128))
                ], 8, $6)) : A("", !0),
                l("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": u(t)("library", "Browse neighbouring items")
                }, [
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !As.value,
                    onClick: b[110] || (b[110] = (h) => Ns(As.value))
                  }, o(u(t)("library", "Previous item")), 9, R6),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Es.value,
                    onClick: b[111] || (b[111] = (h) => Ns(Es.value))
                  }, o(u(t)("library", "Next item")), 9, I6)
                ], 8, N6)
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
function M6() {
  window.LibraryStartupWatchdog?.fail();
}
function U6(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = po("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !U6(e))
    throw new Error("Library startup prerequisites are unavailable");
  const a = {
    ...e,
    duplicateSuggestions: po("library", "duplicateSuggestions", !1),
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  a_(F6, { state: a }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  M6(), console.error("[library] Vue startup failed", e);
}
