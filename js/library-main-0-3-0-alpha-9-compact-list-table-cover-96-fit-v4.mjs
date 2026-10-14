// @__NO_SIDE_EFFECTS__
function bd(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const a of e.split(",")) t[a] = 1;
  return (a) => a in t;
}
const at = {}, Er = [], Pa = () => {
}, Up = () => !1, au = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), iu = (e) => e.startsWith("onUpdate:"), Ot = Object.assign, gd = (e, t) => {
  const a = e.indexOf(t);
  a > -1 && e.splice(a, 1);
}, km = Object.prototype.hasOwnProperty, st = (e, t) => km.call(e, t), Le = Array.isArray, yn = (e) => ns(e) === "[object Map]", Ui = (e) => ns(e) === "[object Set]", jf = (e) => ns(e) === "[object Date]", ze = (e) => typeof e == "function", bt = (e) => typeof e == "string", Ka = (e) => typeof e == "symbol", ot = (e) => e !== null && typeof e == "object", zp = (e) => (ot(e) || ze(e)) && ze(e.then) && ze(e.catch), jp = Object.prototype.toString, ns = (e) => jp.call(e), Sm = (e) => ns(e).slice(8, -1), Bp = (e) => ns(e) === "[object Object]", md = (e) => bt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kl = /* @__PURE__ */ bd(
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
      const i = e[a], n = bt(i) ? Nm(i) : ha(i);
      if (n)
        for (const l in n)
          t[l] = n[l];
    }
    return t;
  } else if (bt(e) || ot(e))
    return e;
}
const Em = /;(?![^(]*\))/g, $m = /:([^]+)/, xm = /\/\*[^]*?\*\//g;
function Nm(e) {
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
const Om = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Rm = /* @__PURE__ */ bd(Om);
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
    let l = -1;
    for (let s = 0; s < a.length; s++)
      if (!i[s] && zi(n, a[s])) {
        l = s;
        break;
      }
    if (l < 0) return !1;
    i[l] = 1;
  }
  return !0;
}
function zi(e, t) {
  if (e === t) return !0;
  let a = jf(e), i = jf(t);
  if (a || i)
    return a && i ? e.getTime() === t.getTime() : !1;
  if (a = Ka(e), i = Ka(t), a || i)
    return e === t;
  if (a = Le(e), i = Le(t), a || i)
    return a && i ? Im(e, t) : !1;
  if (a = ot(e), i = ot(t), a || i) {
    if (!a || !i)
      return !1;
    if (a = yn(e), i = yn(t), a || i || (a = Ui(e), i = Ui(t), a || i))
      return a && i ? Hf(e, t) : !1;
    const n = Object.keys(e).length, l = Object.keys(t).length;
    if (n !== l)
      return !1;
    for (const s in e) {
      const c = e.hasOwnProperty(s), f = t.hasOwnProperty(s);
      if (c && !f || !c && f || !zi(e[s], t[s]))
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
    (a, [i, n], l) => (a[Ku(i, l) + " =>"] = n, a),
    {}
  )
} : Ui(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((a) => Ku(a))
} : Ka(t) ? Ku(t) : ot(t) && !Le(t) && !Bp(t) ? String(t) : t, Ku = (e, t = "") => {
  var a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ka(e) ? `Symbol(${(a = e.description) != null ? a : t})` : e
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
    for (let l = a.computed.deps; l; l = l.nextDep)
      kd(l, !0);
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
function Ri(e, t, a, i, n, l) {
  const s = Pc.get(e);
  if (!s) {
    Ml++;
    return;
  }
  const c = (f) => {
    f && f.trigger();
  };
  if (_d(), t === "clear")
    s.forEach(c);
  else {
    const f = Le(e), _ = f && md(a);
    if (f && a === "length") {
      const v = Number(i);
      s.forEach((m, y) => {
        (y === "length" || y === Ul || !Ka(y) && y >= v) && c(m);
      });
    } else
      switch ((a !== void 0 || s.has(void 0)) && c(s.get(a)), _ && c(s.get(Ul)), t) {
        case "add":
          f ? _ && c(s.get("length")) : (c(s.get(ir)), yn(e) && c(s.get(Dc)));
          break;
        case "delete":
          f || (c(s.get(ir)), yn(e) && c(s.get(Dc)));
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
  return t === e ? t : (Xt(t, "iterate", Ul), /* @__PURE__ */ Da(e) ? t : t.map(Wa));
}
function uu(e) {
  return Xt(e = /* @__PURE__ */ lt(e), "iterate", Ul), e;
}
function si(e, t) {
  return /* @__PURE__ */ Hi(e) ? Lr(/* @__PURE__ */ nr(e) ? Wa(t) : t) : Wa(t);
}
const Um = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yu(this, Symbol.iterator, (e) => si(this, e));
  },
  concat(...e) {
    return yr(this).concat(
      ...e.map((t) => Le(t) ? yr(t) : t)
    );
  },
  entries() {
    return Yu(this, "entries", (e) => (e[1] = si(this, e[1]), e));
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
      (a) => a.map((i) => si(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Si(
      this,
      "find",
      e,
      t,
      (a) => si(this, a),
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
      (a) => si(this, a),
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
    return Yu(this, "values", (e) => si(this, e));
  }
};
function Yu(e, t, a) {
  const i = uu(e), n = i[t]();
  return i !== e && !/* @__PURE__ */ Da(e) && (n._next = n.next, n.next = () => {
    const l = n._next();
    return l.done || (l.value = a(l.value)), l;
  }), n;
}
const zm = Array.prototype;
function Si(e, t, a, i, n, l) {
  const s = uu(e), c = s !== e && !/* @__PURE__ */ Da(e), f = s[t];
  if (f !== zm[t]) {
    const m = f.apply(e, l);
    return c ? Wa(m) : m;
  }
  let _ = a;
  s !== e && (c ? _ = function(m, y) {
    return a.call(this, si(e, m), y, e);
  } : a.length > 2 && (_ = function(m, y) {
    return a.call(this, m, y, e);
  }));
  const v = f.call(s, _, i);
  return c && n ? n(v) : v;
}
function qf(e, t, a, i) {
  const n = uu(e), l = n !== e && !/* @__PURE__ */ Da(e);
  let s = a, c = !1;
  n !== e && (l ? (c = i.length === 0, s = function(_, v, m) {
    return c && (c = !1, _ = si(e, _)), a.call(this, _, si(e, v), m, e);
  }) : a.length > 3 && (s = function(_, v, m) {
    return a.call(this, _, v, m, e);
  }));
  const f = n[t](s, ...i);
  return c ? si(e, f) : f;
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
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ka)
);
function Bm(e) {
  Ka(e) || (e = String(e));
  const t = /* @__PURE__ */ lt(this);
  return Xt(t, "has", e), t.hasOwnProperty(e);
}
class av {
  constructor(t = !1, a = !1) {
    this._isReadonly = t, this._isShallow = a;
  }
  get(t, a, i) {
    if (a === "__v_skip") return t.__v_skip;
    const n = this._isReadonly, l = this._isShallow;
    if (a === "__v_isReactive")
      return !n;
    if (a === "__v_isReadonly")
      return n;
    if (a === "__v_isShallow")
      return l;
    if (a === "__v_raw")
      return i === (n ? l ? Jm : lv : l ? rv : nv).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = Le(t);
    if (!n) {
      let f;
      if (s && (f = Um[a]))
        return f;
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
    if ((Ka(a) ? tv.has(a) : jm(a)) || (n || Xt(t, "get", a), l))
      return c;
    if (/* @__PURE__ */ ta(c)) {
      const f = s && md(a) ? c : c.value;
      return n && ot(f) ? /* @__PURE__ */ zl(f) : f;
    }
    return ot(c) ? n ? /* @__PURE__ */ zl(c) : /* @__PURE__ */ Lt(c) : c;
  }
}
class iv extends av {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, a, i, n) {
    let l = t[a];
    const s = Le(t) && md(a);
    if (!this._isShallow) {
      const _ = /* @__PURE__ */ Hi(l);
      if (!/* @__PURE__ */ Da(i) && !/* @__PURE__ */ Hi(i) && (l = /* @__PURE__ */ lt(l), i = /* @__PURE__ */ lt(i)), !s && /* @__PURE__ */ ta(l) && !/* @__PURE__ */ ta(i))
        return _ || (l.value = i), !0;
    }
    const c = s ? Number(a) < t.length : st(t, a), f = Reflect.set(
      t,
      a,
      i,
      /* @__PURE__ */ ta(t) ? t : n
    );
    return t === /* @__PURE__ */ lt(n) && f && (c ? jt(i, l) && Ri(t, "set", a, i) : Ri(t, "add", a, i)), f;
  }
  deleteProperty(t, a) {
    const i = st(t, a);
    t[a];
    const n = Reflect.deleteProperty(t, a);
    return n && i && Ri(t, "delete", a, void 0), n;
  }
  has(t, a) {
    const i = Reflect.has(t, a);
    return (!Ka(a) || !tv.has(a)) && Xt(t, "has", a), i;
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
    const n = this.__v_raw, l = /* @__PURE__ */ lt(n), s = yn(l), c = e === "entries" || e === Symbol.iterator && s, f = e === "keys" && s, _ = n[e](...i), v = a ? Fc : t ? Lr : Wa;
    return !t && Xt(
      l,
      "iterate",
      f ? Dc : ir
    ), Ot(
      // inheriting all iterator properties
      Object.create(_),
      {
        // iterator protocol
        next() {
          const { value: m, done: y } = _.next();
          return y ? { value: m, done: y } : {
            value: c ? [v(m[0]), v(m[1])] : v(m),
            done: y
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
      const l = this.__v_raw, s = /* @__PURE__ */ lt(l), c = /* @__PURE__ */ lt(n);
      e || (jt(n, c) && Xt(s, "get", n), Xt(s, "get", c));
      const { has: f } = Ps(s), _ = t ? Fc : e ? Lr : Wa;
      if (f.call(s, n))
        return _(l.get(n));
      if (f.call(s, c))
        return _(l.get(c));
      l !== s && l.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !e && Xt(/* @__PURE__ */ lt(n), "iterate", ir), n.size;
    },
    has(n) {
      const l = this.__v_raw, s = /* @__PURE__ */ lt(l), c = /* @__PURE__ */ lt(n);
      return e || (jt(n, c) && Xt(s, "has", n), Xt(s, "has", c)), n === c ? l.has(n) : l.has(n) || l.has(c);
    },
    forEach(n, l) {
      const s = this, c = s.__v_raw, f = /* @__PURE__ */ lt(c), _ = t ? Fc : e ? Lr : Wa;
      return !e && Xt(f, "iterate", ir), c.forEach((v, m) => n.call(l, _(v), _(m), s));
    }
  };
  return Ot(
    a,
    e ? {
      add: Ds("add"),
      set: Ds("set"),
      delete: Ds("delete"),
      clear: Ds("clear")
    } : {
      add(n) {
        const l = /* @__PURE__ */ lt(this), s = Ps(l), c = /* @__PURE__ */ lt(n), f = !t && !/* @__PURE__ */ Da(n) && !/* @__PURE__ */ Hi(n) ? c : n;
        return s.has.call(l, f) || jt(n, f) && s.has.call(l, n) || jt(c, f) && s.has.call(l, c) || (l.add(f), Ri(l, "add", f, f)), this;
      },
      set(n, l) {
        !t && !/* @__PURE__ */ Da(l) && !/* @__PURE__ */ Hi(l) && (l = /* @__PURE__ */ lt(l));
        const s = /* @__PURE__ */ lt(this), { has: c, get: f } = Ps(s);
        let _ = c.call(s, n);
        _ || (n = /* @__PURE__ */ lt(n), _ = c.call(s, n));
        const v = f.call(s, n);
        return s.set(n, l), _ ? jt(l, v) && Ri(s, "set", n, l) : Ri(s, "add", n, l), this;
      },
      delete(n) {
        const l = /* @__PURE__ */ lt(this), { has: s, get: c } = Ps(l);
        let f = s.call(l, n);
        f || (n = /* @__PURE__ */ lt(n), f = s.call(l, n)), c && c.call(l, n);
        const _ = l.delete(n);
        return f && Ri(l, "delete", n, void 0), _;
      },
      clear() {
        const n = /* @__PURE__ */ lt(this), l = n.size !== 0, s = n.clear();
        return l && Ri(
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
  return (i, n, l) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? i : Reflect.get(
    st(a, n) && n in i ? a : i,
    n,
    l
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
  const l = n.get(e);
  if (l)
    return l;
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
const Wa = (e) => ot(e) ? /* @__PURE__ */ Lt(e) : e, Lr = (e) => ot(e) ? /* @__PURE__ */ zl(e) : e;
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
    this.dep = new ou(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = a ? t : /* @__PURE__ */ lt(t), this._value = a ? t : Wa(t), this.__v_isShallow = a;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const a = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Da(t) || /* @__PURE__ */ Hi(t);
    t = i ? t : /* @__PURE__ */ lt(t), jt(t, a) && (this._rawValue = t, this._value = i ? t : Wa(t), this.dep.trigger());
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
function uy(e, t, a = at) {
  const { immediate: i, deep: n, once: l, scheduler: s, augmentJob: c, call: f } = a, _ = (L) => n ? L : /* @__PURE__ */ Da(L) || n === !1 || n === 0 ? Ii(L, 1) : Ii(L);
  let v, m, y, k, C = !1, S = !1;
  if (/* @__PURE__ */ ta(e) ? (m = () => e.value, C = /* @__PURE__ */ Da(e)) : /* @__PURE__ */ nr(e) ? (m = () => _(e), C = !0) : Le(e) ? (S = !0, C = e.some((L) => /* @__PURE__ */ nr(L) || /* @__PURE__ */ Da(L)), m = () => e.map((L) => {
    if (/* @__PURE__ */ ta(L))
      return L.value;
    if (/* @__PURE__ */ nr(L))
      return _(L);
    if (ze(L))
      return f ? f(L, 2) : L();
  })) : ze(e) ? t ? m = f ? () => f(e, 2) : e : m = () => {
    if (y) {
      ji();
      try {
        y();
      } finally {
        Bi();
      }
    }
    const L = Zn;
    Zn = v;
    try {
      return f ? f(e, 3, [k]) : e(k);
    } finally {
      Zn = L;
    }
  } : m = Pa, t && n) {
    const L = m, le = n === !0 ? 1 / 0 : n;
    m = () => Ii(L(), le);
  }
  const x = Dm(), F = () => {
    v.stop(), x && x.active && gd(x.effects, v);
  };
  if (l && t) {
    const L = t;
    t = (...le) => {
      const te = L(...le);
      return F(), te;
    };
  }
  let M = S ? new Array(e.length).fill(Fs) : Fs;
  const P = (L) => {
    if (!(!(v.flags & 1) || !v.dirty && !L))
      if (t) {
        const le = v.run();
        if (L || n || C || (S ? le.some((te, $) => jt(te, M[$])) : jt(le, M))) {
          y && y();
          const te = Zn;
          Zn = v;
          try {
            const $ = [
              le,
              // pass undefined as the old value when it's changed for the first time
              M === Fs ? void 0 : S && M[0] === Fs ? [] : M,
              k
            ];
            M = le, f ? f(t, 3, $) : (
              // @ts-expect-error
              t(...$)
            );
          } finally {
            Zn = te;
          }
        }
      } else
        v.run();
  };
  return c && c(P), v = new Kp(m), v.scheduler = s ? () => s(P, !1) : P, k = (L) => oy(L, !1, v), y = v.onStop = () => {
    const L = to.get(v);
    if (L) {
      if (f)
        f(L, 4);
      else
        for (const le of L) le();
      to.delete(v);
    }
  }, t ? i ? P(!0) : M = v.run() : s ? s(P.bind(null, !0), !0) : v.run(), F.pause = v.pause.bind(v), F.resume = v.resume.bind(v), F.stop = F, F;
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
    return n && zp(n) && n.catch((l) => {
      cu(l, t, a);
    }), n;
  }
  if (Le(e)) {
    const n = [];
    for (let l = 0; l < e.length; l++)
      n.push(Fa(e[l], t, a, i));
    return n;
  }
}
function cu(e, t, a, i = !0) {
  const n = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: s } = t && t.appContext.config || at;
  if (t) {
    let c = t.parent;
    const f = t.proxy, _ = `https://vuejs.org/error-reference/#runtime-${a}`;
    for (; c; ) {
      const v = c.ec;
      if (v) {
        for (let m = 0; m < v.length; m++)
          if (v[m](e, f, _) === !1)
            return;
      }
      c = c.parent;
    }
    if (l) {
      ji(), rs(l, null, 10, [
        e,
        f,
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
let ni = -1;
const $r = [];
let vn = null, Cr = 0;
const cv = /* @__PURE__ */ Promise.resolve();
let ao = null;
function Pt(e) {
  const t = ao || cv;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function dy(e) {
  let t = ni + 1, a = ca.length;
  for (; t < a; ) {
    const i = t + a >>> 1, n = ca[i], l = jl(n);
    l < e || l === e && n.flags & 2 ? t = i + 1 : a = i;
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
function Gf(e, t, a = ni + 1) {
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
    for (ni = 0; ni < ca.length; ni++) {
      const t = ca[ni];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), rs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ni < ca.length; ni++) {
      const t = ca[ni];
      t && (t.flags &= -2);
    }
    ni = -1, ca.length = 0, hv(), ao = null, (ca.length || $r.length) && pv();
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
    const l = io(t), s = Fi.length;
    let c;
    try {
      c = e(...n);
    } finally {
      for (let f = Fi.length; f > s; f--) Ld();
      io(l), i._d && oo(1);
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
    let [l, s, c, f = at] = t[n];
    l && (ze(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && Ii(s), i.push({
      dir: l,
      instance: a,
      value: s,
      oldValue: void 0,
      arg: c,
      modifiers: f
    }));
  }
  return e;
}
function Vn(e, t, a, i) {
  const n = e.dirs, l = t && t.dirs;
  for (let s = 0; s < n.length; s++) {
    const c = n[s];
    l && (c.oldValue = l[s].value);
    let f = c.dir[i];
    f && (ji(), Fa(f, a, 8, [
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
  if (i || Nr) {
    let n = Nr ? Nr._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
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
function fu(e, t, a = at) {
  const { immediate: i, deep: n, flush: l, once: s } = a, c = Ot({}, a), f = t && i || !t && l !== "post";
  let _;
  if (Kl) {
    if (l === "sync") {
      const k = by();
      _ = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!f) {
      const k = () => {
      };
      return k.stop = Pa, k.resume = Pa, k.pause = Pa, k;
    }
  }
  const v = Qt;
  c.call = (k, C, S) => Fa(k, v, C, S);
  let m = !1;
  l === "post" ? c.scheduler = (k) => {
    ua(k, v && v.suspense);
  } : l !== "sync" && (m = !0, c.scheduler = (k, C) => {
    C ? k() : Ad(k);
  }), c.augmentJob = (k) => {
    t && (k.flags |= 4), m && (k.flags |= 2, v && (k.id = v.uid, k.i = v));
  };
  const y = uy(e, t, c);
  return Kl && (_ ? _.push(y) : f && y()), y;
}
function yy(e, t, a) {
  const i = this.proxy, n = bt(e) ? e.includes(".") ? vv(i, e) : () => i[e] : e.bind(i, i);
  let l;
  ze(t) ? l = t : (l = t.handler, a = t);
  const s = ss(this), c = fu(n, l.bind(i), a);
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
  process(e, t, a, i, n, l, s, c, f, _) {
    const {
      mc: v,
      pc: m,
      pbc: y,
      o: { insert: k, querySelector: C, createText: S, createComment: x, parentNode: F }
    } = _, M = Jn(t.props);
    let { dynamicChildren: P } = t;
    const L = ($, G, Z) => {
      $.shapeFlag & 16 && v(
        $.children,
        G,
        Z,
        n,
        l,
        s,
        c,
        f
      );
    }, le = ($ = t) => {
      const G = Jn($.props), Z = $.target = Mc($.props, C), ee = Uc(Z, $, S, k);
      Z && (s !== "svg" && Kf(Z) ? s = "svg" : s !== "mathml" && Wf(Z) && (s = "mathml"), n && n.isCE && (n.ce._teleportTargets || (n.ce._teleportTargets = /* @__PURE__ */ new Set())).add(Z), G || (L($, Z, ee), bl($, !1)));
    }, te = ($) => {
      const G = () => {
        if (fn.get($) === G) {
          if (fn.delete($), Jn($.props)) {
            const Z = F($.el) || a;
            L($, Z, $.anchor), bl($, !0);
          }
          le($);
        }
      };
      fn.set($, G), ua(G, l);
    };
    if (e == null) {
      const $ = t.el = S(""), G = t.anchor = S("");
      if (k($, a, i), k(G, a, i), _y(t.props) || l && l.pendingBranch) {
        te(t);
        return;
      }
      M && (L(t, a, G), bl(t, !0)), le();
    } else {
      t.el = e.el;
      const $ = t.anchor = e.anchor, G = fn.get(e);
      if (G) {
        G.flags |= 8, fn.delete(e), te(t);
        return;
      }
      t.targetStart = e.targetStart;
      const Z = t.target = e.target, ee = t.targetAnchor = e.targetAnchor, re = Jn(e.props), V = re ? a : Z, K = re ? $ : ee;
      if (s === "svg" || Kf(Z) ? s = "svg" : (s === "mathml" || Wf(Z)) && (s = "mathml"), P ? (y(
        e.dynamicChildren,
        P,
        V,
        n,
        l,
        s,
        c
      ), Id(e, t, !0)) : f || m(
        e,
        t,
        V,
        K,
        n,
        l,
        s,
        c,
        !1
      ), M)
        re ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ms(
          t,
          a,
          $,
          _,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const D = Mc(t.props, C);
        D && (t.target = D, Ms(
          t,
          D,
          null,
          _,
          0
        ));
      } else re && Ms(
        t,
        Z,
        ee,
        _,
        1
      );
      bl(t, M);
    }
  },
  remove(e, t, a, { um: i, o: { remove: n } }, l) {
    const {
      shapeFlag: s,
      children: c,
      anchor: f,
      targetStart: _,
      targetAnchor: v,
      target: m,
      props: y
    } = e, k = Jn(y), C = l || !k, S = fn.get(e);
    if (S && (S.flags |= 8, fn.delete(e)), m && (n(_), n(v)), l && n(f), !S && (k || m) && s & 16)
      for (let x = 0; x < c.length; x++) {
        const F = c[x];
        i(
          F,
          t,
          a,
          C,
          !!F.dynamicChildren
        );
      }
  },
  move: Ms,
  hydrate: ky
};
function Ms(e, t, a, { o: { insert: i }, m: n }, l = 2) {
  l === 0 && i(e.targetAnchor, t, a);
  const { el: s, anchor: c, shapeFlag: f, children: _, props: v } = e, m = l === 2;
  if (m && i(s, t, a), !fn.has(e) && (!m || Jn(v)) && f & 16)
    for (let y = 0; y < _.length; y++)
      n(
        _[y],
        t,
        a,
        2
      );
  m && i(c, t, a);
}
function ky(e, t, a, i, n, l, {
  o: { nextSibling: s, parentNode: c, querySelector: f, insert: _, createText: v }
}, m) {
  function y(x, F) {
    let M = F;
    for (; M; ) {
      if (M && M.nodeType === 8) {
        if (M.data === "teleport start anchor")
          t.targetStart = M;
        else if (M.data === "teleport anchor") {
          t.targetAnchor = M, x._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      M = s(M);
    }
  }
  function k(x, F) {
    F.anchor = m(
      s(x),
      F,
      c(x),
      a,
      i,
      n,
      l
    );
  }
  const C = t.target = Mc(
    t.props,
    f
  ), S = Jn(t.props);
  if (C) {
    const x = C._lpa || C.firstChild;
    t.shapeFlag & 16 && (S ? (k(e, t), y(C, x), t.targetAnchor || Uc(
      C,
      t,
      v,
      _,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      c(e) === C ? e : null
    )) : (t.anchor = s(e), y(C, x), t.targetAnchor || Uc(C, t, v, _), m(
      x && s(x),
      t,
      C,
      a,
      i,
      n,
      l
    ))), bl(t, S);
  } else S && t.shapeFlag & 16 && (k(e, t), t.targetStart = e, t.targetAnchor = s(e));
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
  const l = t.targetStart = a(""), s = t.targetAnchor = a("");
  return l[bv] = s, e && (i(l, e, n), i(s, e, n)), s;
}
const Ia = /* @__PURE__ */ Symbol("_leaveCb"), ll = /* @__PURE__ */ Symbol("_enterCb");
function Sy() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Tt(() => {
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
      const n = t.default && wv(t.default(), !0), l = n && n.length ? yv(n) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        a.subTree ? T() : void 0
      );
      if (!l)
        return;
      const s = /* @__PURE__ */ lt(e), { mode: c } = s;
      if (i.isLeaving)
        return Xu(l);
      const f = no(l);
      if (!f)
        return Xu(l);
      let _ = zc(
        f,
        s,
        i,
        a,
        // #11061, ensure enterHooks is fresh after clone
        (m) => _ = m
      );
      f.type !== Bt && Bl(f, _);
      let v = a.subTree && no(a.subTree);
      if (v && v.type !== Bt && !Qn(v, f) && mv(a).type !== Bt) {
        let m = zc(
          v,
          s,
          i,
          a
        );
        if (Bl(v, m), c === "out-in" && f.type !== Bt)
          return i.isLeaving = !0, m.afterLeave = () => {
            i.isLeaving = !1, a.job.flags & 8 || a.update(), delete m.afterLeave, v = void 0;
          }, Xu(l);
        c === "in-out" && f.type !== Bt ? m.delayLeave = (y, k, C) => {
          const S = _v(
            i,
            v
          );
          S[String(v.key)] = v, y[Ia] = () => {
            k(), y[Ia] = void 0, delete _.delayedLeave, v = void 0;
          }, _.delayedLeave = () => {
            C(), delete _.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return l;
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
    appear: l,
    mode: s,
    persisted: c = !1,
    onBeforeEnter: f,
    onEnter: _,
    onAfterEnter: v,
    onEnterCancelled: m,
    onBeforeLeave: y,
    onLeave: k,
    onAfterLeave: C,
    onLeaveCancelled: S,
    onBeforeAppear: x,
    onAppear: F,
    onAfterAppear: M,
    onAppearCancelled: P
  } = t, L = String(e.key), le = _v(a, e), te = (Z, ee) => {
    Z && Fa(
      Z,
      i,
      9,
      ee
    );
  }, $ = (Z, ee) => {
    const re = ee[1];
    te(Z, ee), Le(Z) ? Z.every((V) => V.length <= 1) && re() : Z.length <= 1 && re();
  }, G = {
    mode: s,
    persisted: c,
    beforeEnter(Z) {
      let ee = f;
      if (!a.isMounted)
        if (l)
          ee = x || f;
        else
          return;
      Z[Ia] && Z[Ia](
        !0
        /* cancelled */
      );
      const re = le[L];
      re && Qn(e, re) && re.el[Ia] && re.el[Ia](), te(ee, [Z]);
    },
    enter(Z) {
      if (le[L] === e) return;
      let ee = _, re = v, V = m;
      if (!a.isMounted)
        if (l)
          ee = F || _, re = M || v, V = P || m;
        else
          return;
      let K = !1;
      Z[ll] = (Y) => {
        K || (K = !0, Y ? te(V, [Z]) : te(re, [Z]), G.delayedLeave && G.delayedLeave(), Z[ll] = void 0);
      };
      const D = Z[ll].bind(null, !1);
      ee ? $(ee, [Z, D]) : D();
    },
    leave(Z, ee) {
      const re = String(e.key);
      if (Z[ll] && Z[ll](
        !0
        /* cancelled */
      ), a.isUnmounting)
        return ee();
      te(y, [Z]);
      let V = !1;
      Z[Ia] = (D) => {
        V || (V = !0, ee(), D ? te(S, [Z]) : te(C, [Z]), Z[Ia] = void 0, le[re] === e && delete le[re]);
      };
      const K = Z[Ia].bind(null, !1);
      le[re] = e, k ? $(k, [Z, K]) : K();
    },
    clone(Z) {
      const ee = zc(
        Z,
        t,
        a,
        i,
        n
      );
      return n && n(ee), ee;
    }
  };
  return G;
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
  for (let l = 0; l < e.length; l++) {
    let s = e[l];
    const c = a == null ? s.key : String(a) + String(s.key != null ? s.key : l);
    s.type === W ? (s.patchFlag & 128 && n++, i = i.concat(
      wv(s.children, t, c)
    )) : (t || s.type !== Bt) && i.push(c != null ? Sn(s, { key: c }) : s);
  }
  if (n > 1)
    for (let l = 0; l < i.length; l++)
      i[l].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function qt(e, t) {
  return ze(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ot({ name: e.name }, t, { setup: e })
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
    const n = t.refs === at ? t.refs = {} : t.refs;
    Object.defineProperty(n, e, {
      enumerable: !0,
      get: () => a.value,
      set: (l) => a.value = l
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
      (S, x) => Tl(
        S,
        t && (Le(t) ? t[x] : t),
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
  const l = i.shapeFlag & 4 ? gu(i.component) : i.el, s = n ? null : l, { i: c, r: f } = e, _ = t && t.r, v = c.refs === at ? c.refs = {} : c.refs, m = c.setupState, y = /* @__PURE__ */ lt(m), k = m === at ? Up : (S) => Yf(v, S) ? !1 : st(y, S), C = (S, x) => !(x && Yf(v, x));
  if (_ != null && _ !== f) {
    if (Zf(t), bt(_))
      v[_] = null, k(_) && (m[_] = null);
    else if (/* @__PURE__ */ ta(_)) {
      const S = t;
      C(_, S.k) && (_.value = null), S.k && (v[S.k] = null);
    }
  }
  if (ze(f))
    rs(f, c, 12, [s, v]);
  else {
    const S = bt(f), x = /* @__PURE__ */ ta(f);
    if (S || x) {
      const F = () => {
        if (e.f) {
          const M = S ? k(f) ? m[f] : v[f] : C() || !e.k ? f.value : v[e.k];
          if (n)
            Le(M) && gd(M, l);
          else if (Le(M))
            M.includes(l) || M.push(l);
          else if (S)
            v[f] = [l], k(f) && (m[f] = v[f]);
          else {
            const P = [l];
            C(f, e.k) && (f.value = P), e.k && (v[e.k] = P);
          }
        } else S ? (v[f] = s, k(f) && (m[f] = s)) : x && (C(f, e.k) && (f.value = s), e.k && (v[e.k] = s));
      };
      if (s) {
        const M = () => {
          F(), ro.delete(e);
        };
        M.id = -1, ro.set(e, M), ua(M, a);
      } else
        Zf(e), F();
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
      pu(n.parent.vnode) && Ny(i, t, a, n), n = n.parent;
  }
}
function Ny(e, t, a, i) {
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
    const n = a[e] || (a[e] = []), l = t.__weh || (t.__weh = (...s) => {
      ji();
      const c = ss(a), f = Fa(t, a, e, s);
      return c(), Bi(), f;
    });
    return i ? n.unshift(l) : n.push(l), l;
  }
}
const Gi = (e) => (t, a = Qt) => {
  (!Kl || e === "sp") && vu(e, (...i) => t(...i), a);
}, Cv = Gi("bm"), Tt = Gi("m"), Tv = Gi(
  "bu"
), Oy = Gi("u"), Ca = Gi(
  "bum"
), Dr = Gi("um"), Ry = Gi(
  "sp"
), Iy = Gi("rtg"), Ly = Gi("rtc");
function Py(e, t = Qt) {
  vu("ec", e, t);
}
const $d = "components", Dy = "directives";
function Xe(e, t) {
  return Nd($d, e, !0, t) || e;
}
const Av = /* @__PURE__ */ Symbol.for("v-ndc");
function xd(e) {
  return bt(e) ? Nd($d, e, !1) || e : e || Av;
}
function Xf(e) {
  return Nd(Dy, e);
}
function Nd(e, t, a = !0, i = !1) {
  const n = Ht || Qt;
  if (n) {
    const l = n.type;
    if (e === $d) {
      const c = m1(
        l,
        !1
      );
      if (c && (c === t || c === ea(t) || c === ru(ea(t))))
        return l;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Jf(n[e] || l[e], t) || // global registration
      Jf(n.appContext[e], t)
    );
    return !s && i ? l : s;
  }
}
function Jf(e, t) {
  return e && (e[t] || e[ea(t)] || e[ru(ea(t))]);
}
function oe(e, t, a, i) {
  let n;
  const l = a, s = Le(e);
  if (s || bt(e)) {
    const c = s && /* @__PURE__ */ nr(e);
    let f = !1, _ = !1;
    c && (f = !/* @__PURE__ */ Da(e), _ = /* @__PURE__ */ Hi(e), e = uu(e)), n = new Array(e.length);
    for (let v = 0, m = e.length; v < m; v++)
      n[v] = t(
        f ? _ ? Lr(Wa(e[v])) : Wa(e[v]) : e[v],
        v,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    n = new Array(e);
    for (let c = 0; c < e; c++)
      n[c] = t(c + 1, c, void 0, l);
  } else if (ot(e))
    if (e[Symbol.iterator])
      n = Array.from(
        e,
        (c, f) => t(c, f, void 0, l)
      );
    else {
      const c = Object.keys(e);
      n = new Array(c.length);
      for (let f = 0, _ = c.length; f < _; f++) {
        const v = c[f];
        n[f] = t(e[v], v, f, l);
      }
    }
  else
    n = [];
  return n;
}
function He(e, t, a, i, n, l) {
  if (a == null && (a = {}), Ht.ce || Ht.parent && xr(Ht.parent) && Ht.parent.ce) {
    const _ = a, v = Object.keys(_).length > 0;
    return t !== "default" && (_.name = t), d(), Pe(
      W,
      null,
      [ce("slot", _, i && i())],
      v ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const c = Fi.length;
  d();
  let f;
  try {
    const _ = s && Ev(s(a)), v = a.key || l || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    _ && _.key;
    f = Pe(
      W,
      {
        key: (v && !Ka(v) ? v : `_${t}`) + // #7256 force differentiate fallback content from actual content
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
  return !n && f.scopeId && (f.slotScopeIds = [f.scopeId + "-s"]), f;
}
function Ev(e) {
  return e.some((t) => Vl(t) ? !(t.type === Bt || t.type === W && !Ev(t.children)) : !0) ? e : null;
}
const jc = (e) => e ? Yv(e) ? gu(e) : jc(e.parent) : null, Al = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ot(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => Nv(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ad(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pt.bind(e.proxy)),
    $watch: (e) => yy.bind(e)
  })
), Ju = (e, t) => e !== at && !e.__isScriptSetup && st(e, t), Fy = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: a, setupState: i, data: n, props: l, accessCache: s, type: c, appContext: f } = e;
    if (t[0] !== "$") {
      const y = s[t];
      if (y !== void 0)
        switch (y) {
          case 1:
            return i[t];
          case 2:
            return n[t];
          case 4:
            return a[t];
          case 3:
            return l[t];
        }
      else {
        if (Ju(i, t))
          return s[t] = 1, i[t];
        if (n !== at && st(n, t))
          return s[t] = 2, n[t];
        if (st(l, t))
          return s[t] = 3, l[t];
        if (a !== at && st(a, t))
          return s[t] = 4, a[t];
        Bc && (s[t] = 0);
      }
    }
    const _ = Al[t];
    let v, m;
    if (_)
      return t === "$attrs" && Xt(e.attrs, "get", ""), _(e);
    if (
      // css module (injected by vue-loader)
      (v = c.__cssModules) && (v = v[t])
    )
      return v;
    if (a !== at && st(a, t))
      return s[t] = 4, a[t];
    if (
      // global properties
      m = f.config.globalProperties, st(m, t)
    )
      return m[t];
  },
  set({ _: e }, t, a) {
    const { data: i, setupState: n, ctx: l } = e;
    return Ju(n, t) ? (n[t] = a, !0) : i !== at && st(i, t) ? (i[t] = a, !0) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = a, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: a, ctx: i, appContext: n, props: l, type: s }
  }, c) {
    let f;
    return !!(a[c] || e !== at && c[0] !== "$" && st(e, c) || Ju(t, c) || st(l, c) || st(i, c) || st(Al, c) || st(n.config.globalProperties, c) || (f = s.__cssModules) && f[c]);
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
  return !e || !t ? e || t : Le(e) && Le(t) ? e.concat(t) : Ot({}, lo(e), lo(t));
}
let Bc = !0;
function jy(e) {
  const t = Nv(e), a = e.proxy, i = e.ctx;
  Bc = !1, t.beforeCreate && Qf(t.beforeCreate, e, "bc");
  const {
    // state
    data: n,
    computed: l,
    methods: s,
    watch: c,
    provide: f,
    inject: _,
    // lifecycle
    created: v,
    beforeMount: m,
    mounted: y,
    beforeUpdate: k,
    updated: C,
    activated: S,
    deactivated: x,
    beforeDestroy: F,
    beforeUnmount: M,
    destroyed: P,
    unmounted: L,
    render: le,
    renderTracked: te,
    renderTriggered: $,
    errorCaptured: G,
    serverPrefetch: Z,
    // public API
    expose: ee,
    inheritAttrs: re,
    // assets
    components: V,
    directives: K,
    filters: D
  } = t;
  if (_ && By(_, i, null), s)
    for (const J in s) {
      const U = s[J];
      ze(U) && (i[J] = U.bind(a));
    }
  if (n) {
    const J = n.call(a, a);
    ot(J) && (e.data = /* @__PURE__ */ Lt(J));
  }
  if (Bc = !0, l)
    for (const J in l) {
      const U = l[J], H = ze(U) ? U.bind(a, a) : ze(U.get) ? U.get.bind(a, a) : Pa, ye = !ze(U) && ze(U.set) ? U.set.bind(a) : Pa, Re = q({
        get: H,
        set: ye
      });
      Object.defineProperty(i, J, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: ($e) => Re.value = $e
      });
    }
  if (c)
    for (const J in c)
      xv(c[J], i, a, J);
  if (f) {
    const J = ze(f) ? f.call(a) : f;
    Reflect.ownKeys(J).forEach((U) => {
      Ra(U, J[U]);
    });
  }
  v && Qf(v, e, "c");
  function ae(J, U) {
    Le(U) ? U.forEach((H) => J(H.bind(a))) : U && J(U.bind(a));
  }
  if (ae(Cv, m), ae(Tt, y), ae(Tv, k), ae(Oy, C), ae($y, S), ae(xy, x), ae(Py, G), ae(Ly, te), ae(Iy, $), ae(Ca, M), ae(Dr, L), ae(Ry, Z), Le(ee))
    if (ee.length) {
      const J = e.exposed || (e.exposed = {});
      ee.forEach((U) => {
        Object.defineProperty(J, U, {
          get: () => a[U],
          set: (H) => a[U] = H,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  le && e.render === Pa && (e.render = le), re != null && (e.inheritAttrs = re), V && (e.components = V), K && (e.directives = K), Z && kv(e);
}
function By(e, t, a = Pa) {
  Le(e) && (e = Hc(e));
  for (const i in e) {
    const n = e[i];
    let l;
    ot(n) ? "default" in n ? l = Jt(
      n.from || i,
      n.default,
      !0
    ) : l = Jt(n.from || i) : l = Jt(n), /* @__PURE__ */ ta(l) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (s) => l.value = s
    }) : t[i] = l;
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
    const l = t[e];
    ze(l) && Ge(n, l);
  } else if (ze(e))
    Ge(n, e.bind(a));
  else if (ot(e))
    if (Le(e))
      e.forEach((l) => xv(l, t, a, i));
    else {
      const l = ze(e.handler) ? e.handler.bind(a) : t[e.handler];
      ze(l) && Ge(n, l, e);
    }
}
function Nv(e) {
  const t = e.type, { mixins: a, extends: i } = t, {
    mixins: n,
    optionsCache: l,
    config: { optionMergeStrategies: s }
  } = e.appContext, c = l.get(t);
  let f;
  return c ? f = c : !n.length && !a && !i ? f = t : (f = {}, n.length && n.forEach(
    (_) => so(f, _, s, !0)
  ), so(f, t, s)), ot(t) && l.set(t, f), f;
}
function so(e, t, a, i = !1) {
  const { mixins: n, extends: l } = t;
  l && so(e, l, a, !0), n && n.forEach(
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
    return Ot(
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
  return e ? Ot(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function th(e, t) {
  return e ? Le(e) && Le(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ot(
    /* @__PURE__ */ Object.create(null),
    lo(e),
    lo(t ?? {})
  ) : t;
}
function qy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const a = Ot(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    a[i] = oa(e[i], t[i]);
  return a;
}
function Ov() {
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
    ze(i) || (i = Ot({}, i)), n != null && !ot(n) && (n = null);
    const l = Ov(), s = /* @__PURE__ */ new WeakSet(), c = [];
    let f = !1;
    const _ = l.app = {
      _uid: Gy++,
      _component: i,
      _props: n,
      _container: null,
      _context: l,
      _instance: null,
      version: _1,
      get config() {
        return l.config;
      },
      set config(v) {
      },
      use(v, ...m) {
        return s.has(v) || (v && ze(v.install) ? (s.add(v), v.install(_, ...m)) : ze(v) && (s.add(v), v(_, ...m))), _;
      },
      mixin(v) {
        return l.mixins.includes(v) || l.mixins.push(v), _;
      },
      component(v, m) {
        return m ? (l.components[v] = m, _) : l.components[v];
      },
      directive(v, m) {
        return m ? (l.directives[v] = m, _) : l.directives[v];
      },
      mount(v, m, y) {
        if (!f) {
          const k = _._ceVNode || ce(i, n);
          return k.appContext = l, y === !0 ? y = "svg" : y === !1 && (y = void 0), e(k, v, y), f = !0, _._container = v, v.__vue_app__ = _, gu(k.component);
        }
      },
      onUnmount(v) {
        c.push(v);
      },
      unmount() {
        f && (Fa(
          c,
          _._instance,
          16
        ), e(null, _._container), delete _._container.__vue_app__);
      },
      provide(v, m) {
        return l.provides[v] = m, _;
      },
      runWithContext(v) {
        const m = Nr;
        Nr = _;
        try {
          return v();
        } finally {
          Nr = m;
        }
      }
    };
    return _;
  };
}
let Nr = null;
function Rv(e, t, a = at) {
  const i = Tn(), n = ea(t), l = qi(t), s = Iv(e, n), c = ry((f, _) => {
    let v, m = at, y;
    return my(() => {
      const k = e[n];
      jt(v, k) && (v = k, _());
    }), {
      get() {
        return f(), a.get ? a.get(v) : v;
      },
      set(k) {
        const C = a.set ? a.set(k) : k;
        if (!jt(C, v) && !(m !== at && jt(k, m)))
          return;
        const S = i.vnode.props, x = !!(S && // check if parent has passed v-model
        (t in S || n in S || l in S) && (`onUpdate:${t}` in S || `onUpdate:${n}` in S || `onUpdate:${l}` in S));
        x || (v = k, _()), i.emit(`update:${t}`, C), jt(k, m) && (jt(k, C) && !jt(C, y) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        x && m !== at && !jt(C, v)) && _(), m = k, y = C;
      }
    };
  });
  return c[Symbol.iterator] = () => {
    let f = 0;
    return {
      next() {
        return f < 2 ? { value: f++ ? s || at : c, done: !1 } : { done: !0 };
      }
    };
  }, c;
}
const Iv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ea(t)}Modifiers`] || e[`${qi(t)}Modifiers`];
function Wy(e, t, ...a) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || at;
  let n = a;
  const l = t.startsWith("update:"), s = l && Iv(i, t.slice(7));
  s && (s.trim && (n = a.map((v) => bt(v) ? v.trim() : v)), s.number && (n = n.map(lu)));
  let c, f = i[c = Gu(t)] || // also try camelCase event handler (#2249)
  i[c = Gu(ea(t))];
  !f && l && (f = i[c = Gu(qi(t))]), f && Fa(
    f,
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
  const l = e.emits;
  let s = {}, c = !1;
  if (!ze(e)) {
    const f = (_) => {
      const v = Lv(_, t, !0);
      v && (c = !0, Ot(s, v));
    };
    !a && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !l && !c ? (ot(e) && i.set(e, null), null) : (Le(l) ? l.forEach((f) => s[f] = null) : Ot(s, l), ot(e) && i.set(e, s), s);
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
    propsOptions: [l],
    slots: s,
    attrs: c,
    emit: f,
    render: _,
    renderCache: v,
    props: m,
    data: y,
    setupState: k,
    ctx: C,
    inheritAttrs: S
  } = e, x = io(e);
  let F, M;
  try {
    if (a.shapeFlag & 4) {
      const L = n || i, le = L;
      F = oi(
        _.call(
          le,
          L,
          v,
          m,
          k,
          y,
          C
        )
      ), M = c;
    } else {
      const L = t;
      F = oi(
        L.length > 1 ? L(
          m,
          { attrs: c, slots: s, emit: f }
        ) : L(
          m,
          null
        )
      ), M = t.props ? c : Zy(c);
    }
  } catch (L) {
    Fi.length = 0, cu(L, e, 1), F = ce(Bt);
  }
  let P = F;
  if (M && S !== !1) {
    const L = Object.keys(M), { shapeFlag: le } = P;
    L.length && le & 7 && (l && L.some(iu) && (M = Xy(
      M,
      l
    )), P = Sn(P, M, !1, !0));
  }
  if (a.dirs && (P = Sn(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(a.dirs) : a.dirs), a.transition) {
    const L = hu(P.type) && no(P) || P;
    Bl(L, a.transition);
  }
  return F = P, io(x), F;
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
  const { props: i, children: n, component: l } = e, { props: s, children: c, patchFlag: f } = t, _ = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (a && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return i ? ih(i, s, _) : !!s;
    if (f & 8) {
      const v = t.dynamicProps;
      for (let m = 0; m < v.length; m++) {
        const y = v[m];
        if (Pv(s, i, y) && !bu(_, y))
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
    const l = i[n];
    if (Pv(t, e, l) && !bu(a, l))
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
  const n = {}, l = Fv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Uv(e, t, n, l);
  for (const s in e.propsOptions[0])
    s in n || (n[s] = void 0);
  a ? e.props = i ? n : /* @__PURE__ */ ey(n) : e.type.props ? e.props = n : e.props = l, e.attrs = l;
}
function t1(e, t, a, i) {
  const {
    props: n,
    attrs: l,
    vnode: { patchFlag: s }
  } = e, c = /* @__PURE__ */ lt(n), [f] = e.propsOptions;
  let _ = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const v = e.vnode.dynamicProps;
      for (let m = 0; m < v.length; m++) {
        let y = v[m];
        if (bu(e.emitsOptions, y))
          continue;
        const k = t[y];
        if (f)
          if (st(l, y))
            k !== l[y] && (l[y] = k, _ = !0);
          else {
            const C = ea(y);
            n[C] = Vc(
              f,
              c,
              C,
              k,
              e,
              !1
            );
          }
        else
          k !== l[y] && (l[y] = k, _ = !0);
      }
    }
  } else {
    Uv(e, t, n, l) && (_ = !0);
    let v;
    for (const m in c)
      (!t || // for camelCase
      !st(t, m) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = qi(m)) === m || !st(t, v))) && (f ? a && // for camelCase
      (a[m] !== void 0 || // for kebab-case
      a[v] !== void 0) && (n[m] = Vc(
        f,
        c,
        m,
        void 0,
        e,
        !0
      )) : delete n[m]);
    if (l !== c)
      for (const m in l)
        (!t || !st(t, m)) && (delete l[m], _ = !0);
  }
  _ && Ri(e.attrs, "set", "");
}
function Uv(e, t, a, i) {
  const [n, l] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let f in t) {
      if (kl(f))
        continue;
      const _ = t[f];
      let v;
      n && st(n, v = ea(f)) ? !l || !l.includes(v) ? a[v] = _ : (c || (c = {}))[v] = _ : bu(e.emitsOptions, f) || (!(f in i) || _ !== i[f]) && (i[f] = _, s = !0);
    }
  if (l) {
    const f = /* @__PURE__ */ lt(a), _ = c || at;
    for (let v = 0; v < l.length; v++) {
      const m = l[v];
      a[m] = Vc(
        n,
        f,
        m,
        _[m],
        e,
        !st(_, m)
      );
    }
  }
  return s;
}
function Vc(e, t, a, i, n, l) {
  const s = e[a];
  if (s != null) {
    const c = st(s, "default");
    if (c && i === void 0) {
      const f = s.default;
      if (s.type !== Function && !s.skipFactory && ze(f)) {
        const { propsDefaults: _ } = n;
        if (a in _)
          i = _[a];
        else {
          const v = ss(n);
          i = _[a] = f.call(
            null,
            t
          ), v();
        }
      } else
        i = f;
      n.ce && n.ce._setProp(a, i);
    }
    s[
      0
      /* shouldCast */
    ] && (l && !c ? i = !1 : s[
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
  const l = e.props, s = {}, c = [];
  let f = !1;
  if (!ze(e)) {
    const v = (m) => {
      f = !0;
      const [y, k] = zv(m, t, !0);
      Ot(s, y), k && c.push(...k);
    };
    !a && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!l && !f)
    return ot(e) && i.set(e, Er), Er;
  if (Le(l))
    for (let v = 0; v < l.length; v++) {
      const m = ea(l[v]);
      nh(m) && (s[m] = at);
    }
  else if (l)
    for (const v in l) {
      const m = ea(v);
      if (nh(m)) {
        const y = l[v], k = s[m] = Le(y) || ze(y) ? { type: y } : Ot({}, y), C = k.type;
        let S = !1, x = !0;
        if (Le(C))
          for (let F = 0; F < C.length; ++F) {
            const M = C[F], P = ze(M) && M.name;
            if (P === "Boolean") {
              S = !0;
              break;
            } else P === "String" && (x = !1);
          }
        else
          S = ze(C) && C.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = S, k[
          1
          /* shouldCastTrue */
        ] = x, (S || st(k, "default")) && c.push(m);
      }
    }
  const _ = [s, c];
  return ot(e) && i.set(e, _), _;
}
function nh(e) {
  return e[0] !== "$" && !kl(e);
}
const Od = (e) => e === "_" || e === "_ctx" || e === "$stable", Rd = (e) => Le(e) ? e.map(oi) : [oi(e)], i1 = (e, t, a) => {
  if (t._n)
    return t;
  const i = ke((...n) => Rd(t(...n)), a);
  return i._c = !1, i;
}, jv = (e, t, a) => {
  const i = e._ctx;
  for (const n in e) {
    if (Od(n)) continue;
    const l = e[n];
    if (ze(l))
      t[n] = i1(n, l, i);
    else if (l != null) {
      const s = Rd(l);
      t[n] = () => s;
    }
  }
}, Bv = (e, t) => {
  const a = Rd(t);
  e.slots.default = () => a;
}, Hv = (e, t, a) => {
  for (const i in t)
    (a || !Od(i)) && (e[i] = t[i]);
}, n1 = (e, t, a) => {
  const i = e.slots = Fv();
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (Hv(i, t, a), a && Hp(i, "_", n, !0)) : jv(t, i);
  } else t && Bv(e, t);
}, r1 = (e, t, a) => {
  const { vnode: i, slots: n } = e;
  let l = !0, s = at;
  if (i.shapeFlag & 32) {
    const c = t._;
    c ? a && c === 1 ? l = !1 : Hv(n, t, a) : (l = !t.$stable, jv(t, n)), s = t;
  } else t && (Bv(e, t), s = { default: 1 });
  if (l)
    for (const c in n)
      !Od(c) && s[c] == null && delete n[c];
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
    patchProp: l,
    createElement: s,
    createText: c,
    createComment: f,
    setText: _,
    setElementText: v,
    parentNode: m,
    nextSibling: y,
    setScopeId: k = Pa,
    insertStaticContent: C
  } = e, S = (A, R, I, O = null, N = null, X = null, ne = void 0, de = null, ve = !!R.dynamicChildren) => {
    if (A === R)
      return;
    A && !Qn(A, R) && (O = Oe(A), $e(A, N, X, !0), A = null), R.patchFlag === -2 && (ve = !1, R.dynamicChildren = null);
    const { type: fe, ref: xe, shapeFlag: we } = R;
    switch (fe) {
      case ls:
        x(A, R, I, O);
        break;
      case Bt:
        F(A, R, I, O);
        break;
      case Zs:
        A == null && M(R, I, O, ne);
        break;
      case W:
        V(
          A,
          R,
          I,
          O,
          N,
          X,
          ne,
          de,
          ve
        );
        break;
      default:
        we & 1 ? le(
          A,
          R,
          I,
          O,
          N,
          X,
          ne,
          de,
          ve
        ) : we & 6 ? K(
          A,
          R,
          I,
          O,
          N,
          X,
          ne,
          de,
          ve
        ) : (we & 64 || we & 128) && fe.process(
          A,
          R,
          I,
          O,
          N,
          X,
          ne,
          de,
          ve,
          nt
        );
    }
    xe != null && N ? Tl(xe, A && A.ref, X, R || A, !R) : xe == null && A && A.ref != null && Tl(A.ref, null, X, A, !0);
  }, x = (A, R, I, O) => {
    if (A == null)
      i(
        R.el = c(R.children),
        I,
        O
      );
    else {
      const N = R.el = A.el;
      R.children !== A.children && _(N, R.children);
    }
  }, F = (A, R, I, O) => {
    A == null ? i(
      R.el = f(R.children || ""),
      I,
      O
    ) : R.el = A.el;
  }, M = (A, R, I, O) => {
    [A.el, A.anchor] = C(
      A.children,
      R,
      I,
      O,
      A.el,
      A.anchor
    );
  }, P = ({ el: A, anchor: R }, I, O) => {
    let N;
    for (; A && A !== R; )
      N = y(A), i(A, I, O), A = N;
    i(R, I, O);
  }, L = ({ el: A, anchor: R }) => {
    let I;
    for (; A && A !== R; )
      I = y(A), n(A), A = I;
    n(R);
  }, le = (A, R, I, O, N, X, ne, de, ve) => {
    if (R.type === "svg" ? ne = "svg" : R.type === "math" && (ne = "mathml"), A == null)
      te(
        R,
        I,
        O,
        N,
        X,
        ne,
        de,
        ve
      );
    else {
      const fe = A.el && A.el._isVueCE ? A.el : null;
      try {
        fe && fe._beginPatch(), Z(
          A,
          R,
          N,
          X,
          ne,
          de,
          ve
        );
      } finally {
        fe && fe._endPatch();
      }
    }
  }, te = (A, R, I, O, N, X, ne, de) => {
    let ve, fe;
    const { props: xe, shapeFlag: we, transition: Ae, dirs: Ne } = A;
    if (ve = A.el = s(
      A.type,
      X,
      xe && xe.is,
      xe
    ), we & 8 ? v(ve, A.children) : we & 16 && G(
      A.children,
      ve,
      null,
      O,
      N,
      Qu(A, X),
      ne,
      de
    ), Ne && Vn(A, null, O, "created"), $(ve, A, A.scopeId, ne, O), xe) {
      for (const Ye in xe)
        Ye !== "value" && !kl(Ye) && l(ve, Ye, null, xe[Ye], X, O);
      "value" in xe && l(ve, "value", null, xe.value, X), (fe = xe.onVnodeBeforeMount) && ai(fe, O, A);
    }
    Ne && Vn(A, null, O, "beforeMount");
    const Ve = o1(N, Ae);
    Ve && Ae.beforeEnter(ve), i(ve, R, I), ((fe = xe && xe.onVnodeMounted) || Ve || Ne) && ua(() => {
      fe && ai(fe, O, A), Ve && Ae.enter(ve), Ne && Vn(A, null, O, "mounted");
    }, N);
  }, $ = (A, R, I, O, N) => {
    if (I && k(A, I), O)
      for (let X = 0; X < O.length; X++)
        k(A, O[X]);
    if (N) {
      let X = N.subTree;
      if (R === X || Gv(X.type) && (X.ssContent === R || X.ssFallback === R)) {
        const ne = N.vnode;
        $(
          A,
          ne,
          ne.scopeId,
          ne.slotScopeIds,
          N.parent
        );
      }
    }
  }, G = (A, R, I, O, N, X, ne, de, ve = 0) => {
    for (let fe = ve; fe < A.length; fe++) {
      const xe = A[fe] = de ? Oi(A[fe]) : oi(A[fe]);
      S(
        null,
        xe,
        R,
        I,
        O,
        N,
        X,
        ne,
        de
      );
    }
  }, Z = (A, R, I, O, N, X, ne) => {
    const de = R.el = A.el;
    let { patchFlag: ve, dynamicChildren: fe, dirs: xe } = R;
    ve |= A.patchFlag & 16;
    const we = A.props || at, Ae = R.props || at;
    let Ne;
    if (I && qn(I, !1), (Ne = Ae.onVnodeBeforeUpdate) && ai(Ne, I, R, A), xe && Vn(R, A, I, "beforeUpdate"), I && qn(I, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    fe && (!A.dynamicChildren || A.dynamicChildren.length !== fe.length) && (ve = 0, ne = !1, fe = null), (we.innerHTML && Ae.innerHTML == null || we.textContent && Ae.textContent == null) && v(de, ""), fe ? ee(
      A.dynamicChildren,
      fe,
      de,
      I,
      O,
      Qu(R, N),
      X
    ) : ne || U(
      A,
      R,
      de,
      null,
      I,
      O,
      Qu(R, N),
      X,
      !1
    ), ve > 0) {
      if (ve & 16)
        re(de, we, Ae, I, N);
      else if (ve & 2 && we.class !== Ae.class && l(de, "class", null, Ae.class, N), ve & 4 && l(de, "style", we.style, Ae.style, N), ve & 8) {
        const Ve = R.dynamicProps;
        for (let Ye = 0; Ye < Ve.length; Ye++) {
          const qe = Ve[Ye], it = we[qe], dt = Ae[qe];
          (dt !== it || qe === "value") && l(de, qe, it, dt, N, I);
        }
      }
      ve & 1 && A.children !== R.children && v(de, R.children);
    } else !ne && fe == null && re(de, we, Ae, I, N);
    ((Ne = Ae.onVnodeUpdated) || xe) && ua(() => {
      Ne && ai(Ne, I, R, A), xe && Vn(R, A, I, "updated");
    }, O);
  }, ee = (A, R, I, O, N, X, ne) => {
    for (let de = 0; de < R.length; de++) {
      const ve = A[de], fe = R[de], xe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ve.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ve.type === W || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qn(ve, fe) || // - In the case of a component, it could contain anything.
        ve.shapeFlag & 198) ? m(ve.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          I
        )
      );
      S(
        ve,
        fe,
        xe,
        null,
        O,
        N,
        X,
        ne,
        !0
      );
    }
  }, re = (A, R, I, O, N) => {
    if (R !== I) {
      if (R !== at)
        for (const X in R)
          !kl(X) && !(X in I) && l(
            A,
            X,
            R[X],
            null,
            N,
            O
          );
      for (const X in I) {
        if (kl(X)) continue;
        const ne = I[X], de = R[X];
        ne !== de && X !== "value" && l(A, X, de, ne, N, O);
      }
      "value" in I && l(A, "value", R.value, I.value, N);
    }
  }, V = (A, R, I, O, N, X, ne, de, ve) => {
    const fe = R.el = A ? A.el : c(""), xe = R.anchor = A ? A.anchor : c("");
    let { patchFlag: we, dynamicChildren: Ae, slotScopeIds: Ne } = R;
    Ne && (de = de ? de.concat(Ne) : Ne), A == null ? (i(fe, I, O), i(xe, I, O), G(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      R.children || [],
      I,
      xe,
      N,
      X,
      ne,
      de,
      ve
    )) : we > 0 && we & 64 && Ae && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    A.dynamicChildren && A.dynamicChildren.length === Ae.length ? (ee(
      A.dynamicChildren,
      Ae,
      I,
      N,
      X,
      ne,
      de
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (R.key != null || N && R === N.subTree) && Id(
      A,
      R,
      !0
      /* shallow */
    )) : U(
      A,
      R,
      I,
      xe,
      N,
      X,
      ne,
      de,
      ve
    );
  }, K = (A, R, I, O, N, X, ne, de, ve) => {
    R.slotScopeIds = de, A == null ? R.shapeFlag & 512 ? N.ctx.activate(
      R,
      I,
      O,
      ne,
      ve
    ) : D(
      R,
      I,
      O,
      N,
      X,
      ne,
      ve
    ) : Y(A, R, ve);
  }, D = (A, R, I, O, N, X, ne) => {
    const de = A.component = p1(
      A,
      O,
      N
    );
    if (pu(A) && (de.ctx.renderer = nt), v1(de, !1, ne), de.asyncDep) {
      if (N && N.registerDep(de, ae, ne), !A.el) {
        const ve = de.subTree = ce(Bt);
        F(null, ve, R, I), A.placeholder = ve.el;
      }
    } else
      ae(
        de,
        A,
        R,
        I,
        N,
        X,
        ne
      );
  }, Y = (A, R, I) => {
    const O = R.component = A.component;
    if (Jy(A, R, I))
      if (O.asyncDep && !O.asyncResolved) {
        J(O, R, I);
        return;
      } else
        O.next = R, O.update();
    else
      R.el = A.el, O.vnode = R;
  }, ae = (A, R, I, O, N, X, ne) => {
    const de = () => {
      if (A.isMounted) {
        let { next: we, bu: Ae, u: Ne, parent: Ve, vnode: Ye } = A;
        {
          const gt = Vv(A);
          if (gt) {
            we && (we.el = Ye.el, J(A, we, ne)), gt.asyncDep.then(() => {
              ua(() => {
                A.isUnmounted || fe();
              }, N);
            });
            return;
          }
        }
        let qe = we, it;
        qn(A, !1), we ? (we.el = Ye.el, J(A, we, ne)) : we = Ye, Ae && Ys(Ae), (it = we.props && we.props.onVnodeBeforeUpdate) && ai(it, Ve, we, Ye), qn(A, !0);
        const dt = ah(A), _t = A.subTree;
        A.subTree = dt, S(
          _t,
          dt,
          // parent may have changed if it's in a teleport
          m(_t.el),
          // anchor may have changed if it's in a fragment
          Oe(_t),
          A,
          N,
          X
        ), we.el = dt.el, qe === null && Qy(A, dt.el), Ne && ua(Ne, N), (it = we.props && we.props.onVnodeUpdated) && ua(
          () => ai(it, Ve, we, Ye),
          N
        );
      } else {
        let we;
        const { el: Ae, props: Ne } = R, { bm: Ve, m: Ye, parent: qe, root: it, type: dt } = A, _t = xr(R);
        qn(A, !1), Ve && Ys(Ve), !_t && (we = Ne && Ne.onVnodeBeforeMount) && ai(we, qe, R), qn(A, !0);
        {
          it.ce && it.ce._hasShadowRoot() && it.ce._injectChildStyle(
            dt,
            A.parent ? A.parent.type : void 0
          );
          const gt = A.subTree = ah(A);
          S(
            null,
            gt,
            I,
            O,
            A,
            N,
            X
          ), R.el = gt.el;
        }
        if (Ye && ua(Ye, N), !_t && (we = Ne && Ne.onVnodeMounted)) {
          const gt = R;
          ua(
            () => ai(we, qe, gt),
            N
          );
        }
        (R.shapeFlag & 256 || qe && xr(qe.vnode) && qe.vnode.shapeFlag & 256) && A.a && ua(A.a, N), A.isMounted = !0, R = I = O = null;
      }
    };
    A.scope.on();
    const ve = A.effect = new Kp(de);
    A.scope.off();
    const fe = A.update = ve.run.bind(ve), xe = A.job = ve.runIfDirty.bind(ve);
    xe.i = A, xe.id = A.uid, ve.scheduler = () => Ad(xe), qn(A, !0), fe();
  }, J = (A, R, I) => {
    R.component = A;
    const O = A.vnode.props;
    A.vnode = R, A.next = null, t1(A, R.props, O, I), r1(A, R.children, I), ji(), Gf(A), Bi();
  }, U = (A, R, I, O, N, X, ne, de, ve = !1) => {
    const fe = A && A.children, xe = A ? A.shapeFlag : 0, we = R.children, { patchFlag: Ae, shapeFlag: Ne } = R;
    if (Ae > 0) {
      if (Ae & 128) {
        ye(
          fe,
          we,
          I,
          O,
          N,
          X,
          ne,
          de,
          ve
        );
        return;
      } else if (Ae & 256) {
        H(
          fe,
          we,
          I,
          O,
          N,
          X,
          ne,
          de,
          ve
        );
        return;
      }
    }
    Ne & 8 ? (xe & 16 && _e(fe, N, X), we !== fe && v(I, we)) : xe & 16 ? Ne & 16 ? ye(
      fe,
      we,
      I,
      O,
      N,
      X,
      ne,
      de,
      ve
    ) : _e(fe, N, X, !0) : (xe & 8 && v(I, ""), Ne & 16 && G(
      we,
      I,
      O,
      N,
      X,
      ne,
      de,
      ve
    ));
  }, H = (A, R, I, O, N, X, ne, de, ve) => {
    A = A || Er, R = R || Er;
    const fe = A.length, xe = R.length, we = Math.min(fe, xe);
    let Ae;
    for (Ae = 0; Ae < we; Ae++) {
      const Ne = R[Ae] = ve ? Oi(R[Ae]) : oi(R[Ae]);
      S(
        A[Ae],
        Ne,
        I,
        null,
        N,
        X,
        ne,
        de,
        ve
      );
    }
    fe > xe ? _e(
      A,
      N,
      X,
      !0,
      !1,
      we
    ) : G(
      R,
      I,
      O,
      N,
      X,
      ne,
      de,
      ve,
      we
    );
  }, ye = (A, R, I, O, N, X, ne, de, ve) => {
    let fe = 0;
    const xe = R.length;
    let we = A.length - 1, Ae = xe - 1;
    for (; fe <= we && fe <= Ae; ) {
      const Ne = A[fe], Ve = R[fe] = ve ? Oi(R[fe]) : oi(R[fe]);
      if (Qn(Ne, Ve))
        S(
          Ne,
          Ve,
          I,
          null,
          N,
          X,
          ne,
          de,
          ve
        );
      else
        break;
      fe++;
    }
    for (; fe <= we && fe <= Ae; ) {
      const Ne = A[we], Ve = R[Ae] = ve ? Oi(R[Ae]) : oi(R[Ae]);
      if (Qn(Ne, Ve))
        S(
          Ne,
          Ve,
          I,
          null,
          N,
          X,
          ne,
          de,
          ve
        );
      else
        break;
      we--, Ae--;
    }
    if (fe > we) {
      if (fe <= Ae) {
        const Ne = Ae + 1, Ve = Ne < xe ? R[Ne].el : O;
        for (; fe <= Ae; )
          S(
            null,
            R[fe] = ve ? Oi(R[fe]) : oi(R[fe]),
            I,
            Ve,
            N,
            X,
            ne,
            de,
            ve
          ), fe++;
      }
    } else if (fe > Ae)
      for (; fe <= we; )
        $e(A[fe], N, X, !0), fe++;
    else {
      const Ne = fe, Ve = fe, Ye = /* @__PURE__ */ new Map();
      for (fe = Ve; fe <= Ae; fe++) {
        const St = R[fe] = ve ? Oi(R[fe]) : oi(R[fe]);
        St.key != null && Ye.set(St.key, fe);
      }
      let qe, it = 0;
      const dt = Ae - Ve + 1;
      let _t = !1, gt = 0;
      const ia = new Array(dt);
      for (fe = 0; fe < dt; fe++) ia[fe] = 0;
      for (fe = Ne; fe <= we; fe++) {
        const St = A[fe];
        if (it >= dt) {
          $e(St, N, X, !0);
          continue;
        }
        let Rt;
        if (St.key != null)
          Rt = Ye.get(St.key);
        else
          for (qe = Ve; qe <= Ae; qe++)
            if (ia[qe - Ve] === 0 && Qn(St, R[qe])) {
              Rt = qe;
              break;
            }
        Rt === void 0 ? $e(St, N, X, !0) : (ia[Rt - Ve] = fe + 1, Rt >= gt ? gt = Rt : _t = !0, S(
          St,
          R[Rt],
          I,
          null,
          N,
          X,
          ne,
          de,
          ve
        ), it++);
      }
      const pa = _t ? u1(ia) : Er;
      for (qe = pa.length - 1, fe = dt - 1; fe >= 0; fe--) {
        const St = Ve + fe, Rt = R[St], Ma = R[St + 1], Gt = St + 1 < xe ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ma.el || qv(Ma)
        ) : O;
        ia[fe] === 0 ? S(
          null,
          Rt,
          I,
          Gt,
          N,
          X,
          ne,
          de,
          ve
        ) : _t && (qe < 0 || fe !== pa[qe] ? Re(Rt, I, Gt, 2) : qe--);
      }
    }
  }, Re = (A, R, I, O, N = null) => {
    const { el: X, type: ne, transition: de, children: ve, shapeFlag: fe } = A;
    if (fe & 6) {
      Re(A.component.subTree, R, I, O);
      return;
    }
    if (fe & 128) {
      A.suspense.move(R, I, O);
      return;
    }
    if (fe & 64) {
      ne.move(A, R, I, nt);
      return;
    }
    if (ne === W) {
      i(X, R, I);
      for (let we = 0; we < ve.length; we++)
        Re(ve[we], R, I, O);
      i(A.anchor, R, I);
      return;
    }
    if (ne === Zs) {
      P(A, R, I);
      return;
    }
    if (O !== 2 && fe & 1 && de)
      if (O === 0)
        de.persisted && !X[Ia] ? i(X, R, I) : (de.beforeEnter(X), i(X, R, I), ua(() => de.enter(X), N));
      else {
        const { leave: we, delayLeave: Ae, afterLeave: Ne } = de, Ve = () => {
          A.ctx.isUnmounted ? n(X) : i(X, R, I);
        }, Ye = () => {
          const qe = X._isLeaving || !!X[Ia];
          X._isLeaving && X[Ia](
            !0
            /* cancelled */
          ), de.persisted && !qe ? Ve() : we(X, () => {
            Ve(), Ne && Ne();
          });
        };
        Ae ? Ae(X, Ve, Ye) : Ye();
      }
    else
      i(X, R, I);
  }, $e = (A, R, I, O = !1, N = !1) => {
    const {
      type: X,
      props: ne,
      ref: de,
      children: ve,
      dynamicChildren: fe,
      shapeFlag: xe,
      patchFlag: we,
      dirs: Ae,
      cacheIndex: Ne,
      memo: Ve
    } = A;
    if (we === -2 && (N = !1), de != null && (ji(), Tl(de, null, I, A, !0), Bi()), Ne != null && (R.renderCache[Ne] = void 0), xe & 256) {
      R.ctx.deactivate(A);
      return;
    }
    const Ye = xe & 1 && Ae, qe = !xr(A);
    let it;
    if (qe && (it = ne && ne.onVnodeBeforeUnmount) && ai(it, R, A), xe & 6)
      ct(A.component, I, O);
    else {
      if (xe & 128) {
        A.suspense.unmount(I, O);
        return;
      }
      Ye && Vn(A, null, R, "beforeUnmount"), xe & 64 ? A.type.remove(
        A,
        R,
        I,
        nt,
        O
      ) : fe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !fe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (X !== W || we > 0 && we & 64) ? _e(
        fe,
        R,
        I,
        !1,
        !0
      ) : (X === W && we & 384 || !N && xe & 16) && _e(ve, R, I), O && Ue(A);
    }
    const dt = Ve != null && Ne == null;
    (qe && (it = ne && ne.onVnodeUnmounted) || Ye || dt) && ua(() => {
      it && ai(it, R, A), Ye && Vn(A, null, R, "unmounted"), dt && (A.el = null);
    }, I);
  }, Ue = (A) => {
    const { type: R, el: I, anchor: O, transition: N } = A;
    if (R === W) {
      Ze(I, O);
      return;
    }
    if (R === Zs) {
      L(A);
      return;
    }
    const X = () => {
      n(I), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (A.shapeFlag & 1 && N && !N.persisted) {
      const { leave: ne, delayLeave: de } = N, ve = () => ne(I, X);
      de ? de(A.el, X, ve) : ve();
    } else
      X();
  }, Ze = (A, R) => {
    let I;
    for (; A !== R; )
      I = y(A), n(A), A = I;
    n(R);
  }, ct = (A, R, I) => {
    const { bum: O, scope: N, job: X, subTree: ne, um: de, m: ve, a: fe } = A;
    rh(ve), rh(fe), O && Ys(O), N.stop(), X && (X.flags |= 8, $e(ne, A, R, I)), de && ua(de, R), ua(() => {
      A.isUnmounted = !0;
    }, R);
  }, _e = (A, R, I, O = !1, N = !1, X = 0) => {
    for (let ne = X; ne < A.length; ne++)
      $e(A[ne], R, I, O, N);
  }, Oe = (A) => {
    if (A.shapeFlag & 6)
      return Oe(A.component.subTree);
    if (A.shapeFlag & 128)
      return A.suspense.next();
    const R = y(A.anchor || A.el), I = R && R[bv];
    return I ? y(I) : R;
  };
  let ge = !1;
  const De = (A, R, I) => {
    let O;
    A == null ? R._vnode && ($e(R._vnode, null, null, !0), O = R._vnode.component) : S(
      R._vnode || null,
      A,
      R,
      null,
      null,
      null,
      I
    ), R._vnode = A, ge || (ge = !0, Gf(O), hv(), ge = !1);
  }, nt = {
    p: S,
    um: $e,
    m: Re,
    r: Ue,
    mt: D,
    mc: G,
    pc: U,
    pbc: ee,
    n: Oe,
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
    for (let l = 0; l < i.length; l++) {
      const s = i[l];
      let c = n[l];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = n[l] = Oi(n[l]), c.el = s.el), !a && c.patchFlag !== -2 && Id(s, c)), c.type === ls && (c.patchFlag === -1 && (c = n[l] = Oi(c)), c.el = s.el), c.type === Bt && !c.el && (c.el = s.el);
    }
}
function u1(e) {
  const t = e.slice(), a = [0];
  let i, n, l, s, c;
  const f = e.length;
  for (i = 0; i < f; i++) {
    const _ = e[i];
    if (_ !== 0) {
      if (n = a[a.length - 1], e[n] < _) {
        t[i] = n, a.push(i);
        continue;
      }
      for (l = 0, s = a.length - 1; l < s; )
        c = l + s >> 1, e[a[c]] < _ ? l = c + 1 : s = c;
      _ < e[a[l]] && (l > 0 && (t[i] = a[l - 1]), a[l] = i);
    }
  }
  for (l = a.length, s = a[l - 1]; l-- > 0; )
    a[l] = s, s = t[s];
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
const W = /* @__PURE__ */ Symbol.for("v-fgt"), ls = /* @__PURE__ */ Symbol.for("v-txt"), Bt = /* @__PURE__ */ Symbol.for("v-cmt"), Zs = /* @__PURE__ */ Symbol.for("v-stc"), Fi = [];
let Sa = null;
function d(e = !1) {
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
function p(e, t, a, i, n, l) {
  return Kv(
    r(
      e,
      t,
      a,
      i,
      n,
      l,
      !0
    )
  );
}
function Pe(e, t, a, i, n) {
  return Kv(
    ce(
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
function r(e, t = null, a = null, i = 0, n = null, l = e === W ? 0 : 1, s = !1, c = !1) {
  const f = {
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
    shapeFlag: l,
    patchFlag: i,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: Ht
  };
  return c ? (uo(f, a), l & 128 && e.normalize(f)) : a && (f.shapeFlag |= bt(a) ? 8 : 16), Hl > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Sa && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Sa.push(f), f;
}
const ce = d1;
function d1(e, t = null, a = null, i = 0, n = null, l = !1) {
  if ((!e || e === Av) && (e = Bt), Vl(e)) {
    const c = Sn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return a && uo(c, a), Hl > 0 && !l && Sa && (c.shapeFlag & 6 ? Sa[Sa.indexOf(e)] = c : Sa.push(c)), c.patchFlag = -2, c;
  }
  if (y1(e) && (e = e.__vccOpts), t) {
    t = ql(t);
    let { class: c, style: f } = t;
    c && !bt(c) && (t.class = Te(c)), ot(f) && (/* @__PURE__ */ Td(f) && !Le(f) && (f = Ot({}, f)), t.style = ha(f));
  }
  const s = bt(e) ? 1 : Gv(e) ? 128 : hu(e) ? 64 : ot(e) ? 4 : ze(e) ? 2 : 0;
  return r(
    e,
    t,
    a,
    i,
    n,
    s,
    l,
    !0
  );
}
function ql(e) {
  return e ? /* @__PURE__ */ Td(e) || Mv(e) ? Ot({}, e) : e : null;
}
function Sn(e, t, a = !1, i = !1) {
  const { props: n, ref: l, patchFlag: s, children: c, transition: f } = e, _ = t ? aa(n || {}, t) : n, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: _,
    key: _ && Wv(_),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      a && l ? Le(l) ? l.concat(Xs(t)) : [l, Xs(t)] : Xs(t)
    ) : l,
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
    transition: f,
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
  return f && i && Bl(
    v,
    f.clone(v)
  ), v;
}
function Q(e = " ", t = 0) {
  return ce(ls, null, e, t);
}
function T(e = "", t = !1) {
  return t ? (d(), Pe(Bt, null, e)) : ce(Bt, null, e);
}
function oi(e) {
  return e == null || typeof e == "boolean" ? ce(Bt) : Le(e) ? ce(
    W,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vl(e) ? Oi(e) : ce(ls, null, String(e));
}
function Oi(e) {
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
        const l = t[n], s = i[n];
        s && l !== s && !(Le(l) && l.includes(s)) ? t[n] = l ? [].concat(l, s) : s : s == null && l == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !iu(n) && (t[n] = s);
      } else n !== "" && (t[n] = i[n]);
  }
  return t;
}
function ai(e, t, a, i = null) {
  Fa(e, t, 7, [
    a,
    i
  ]);
}
const f1 = Ov();
let h1 = 0;
function p1(e, t, a) {
  const i = e.type, n = (t ? t.appContext : e.appContext) || f1, l = {
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
    propsDefaults: at,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: at,
    data: at,
    props: at,
    attrs: at,
    slots: at,
    refs: at,
    setupState: at,
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = Wy.bind(null, l), e.ce && e.ce(l), l;
}
let Qt = null;
const Tn = () => Qt || Ht;
let co, Gl;
{
  const e = su(), t = (a, i) => {
    let n;
    return (n = e[a]) || (n = e[a] = []), n.push(i), (l) => {
      n.length > 1 ? n.forEach((s) => s(l)) : n[0](l);
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
  const { props: i, children: n } = e.vnode, l = Yv(e);
  e1(e, i, l, t), n1(e, n, a || t);
  const s = l ? b1(e, t) : void 0;
  return t && Gl(!1), s;
}
function b1(e, t) {
  const a = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fy);
  const { setup: i } = a;
  if (i) {
    ji();
    const n = e.setupContext = i.length > 1 ? Xv(e) : null, l = ss(e), s = rs(
      i,
      e,
      0,
      [
        e.props,
        n
      ]
    ), c = zp(s);
    if (Bi(), l(), (c || e.sp) && !xr(e) && kv(e), c) {
      if (s.then(lh, lh), t)
        return s.then((f) => {
          Gl(!0);
          try {
            sh(e, f, t);
          } finally {
            Gl(!1);
          }
        }).catch((f) => {
          cu(f, e, 0);
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
const q = (e, t) => /* @__PURE__ */ sy(e, t, Kl);
function da(e, t, a) {
  try {
    oo(-1);
    const i = arguments.length;
    return i === 2 ? ot(t) && !Le(t) ? Vl(t) ? ce(e, null, [t]) : ce(e, t) : ce(e, null, t) : (i > 3 ? a = Array.prototype.slice.call(arguments, 2) : i === 3 && Vl(a) && (a = [a]), ce(e, t, a));
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
const Jv = qc ? (e) => qc.createHTML(e) : (e) => e, k1 = "http://www.w3.org/2000/svg", S1 = "http://www.w3.org/1998/Math/MathML", Ni = typeof document < "u" ? document : null, uh = Ni && /* @__PURE__ */ Ni.createElement("template"), C1 = {
  insert: (e, t, a) => {
    t.insertBefore(e, a || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, a, i) => {
    const n = t === "svg" ? Ni.createElementNS(k1, e) : t === "mathml" ? Ni.createElementNS(S1, e) : a ? Ni.createElement(e, { is: a }) : Ni.createElement(e);
    return e === "select" && i && i.multiple != null && n.setAttribute("multiple", i.multiple), n;
  },
  createText: (e) => Ni.createTextNode(e),
  createComment: (e) => Ni.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ni.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, a, i, n, l) {
    const s = a ? a.previousSibling : t.lastChild;
    if (n && (n === l || n.nextSibling))
      for (; t.insertBefore(n.cloneNode(!0), a), !(n === l || !(n = n.nextSibling)); )
        ;
    else {
      uh.innerHTML = Jv(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const c = uh.content;
      if (i === "svg" || i === "mathml") {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
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
}, T1 = /* @__PURE__ */ Ot(
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
  for (const V in e)
    V in Qv || (t[V] = e[V]);
  if (e.css === !1)
    return t;
  const {
    name: a = "v",
    type: i,
    duration: n,
    enterFromClass: l = `${a}-enter-from`,
    enterActiveClass: s = `${a}-enter-active`,
    enterToClass: c = `${a}-enter-to`,
    appearFromClass: f = l,
    appearActiveClass: _ = s,
    appearToClass: v = c,
    leaveFromClass: m = `${a}-leave-from`,
    leaveActiveClass: y = `${a}-leave-active`,
    leaveToClass: k = `${a}-leave-to`
  } = e, C = x1(n), S = C && C[0], x = C && C[1], {
    onBeforeEnter: F,
    onEnter: M,
    onEnterCancelled: P,
    onLeave: L,
    onLeaveCancelled: le,
    onBeforeAppear: te = F,
    onAppear: $ = M,
    onAppearCancelled: G = P
  } = t, Z = (V, K, D, Y) => {
    V._enterCancelled = Y, Kn(V, K ? v : c), Kn(V, K ? _ : s), D && D();
  }, ee = (V, K) => {
    V._isLeaving = !1, Kn(V, m), Kn(V, k), Kn(V, y), K && K();
  }, re = (V) => (K, D) => {
    const Y = V ? $ : M, ae = () => Z(K, V, D);
    Gn(Y, [K, ae]), dh(() => {
      Kn(K, V ? f : l), Ci(K, V ? v : c), ch(Y) || fh(K, i, S, ae);
    });
  };
  return Ot(t, {
    onBeforeEnter(V) {
      Gn(F, [V]), Ci(V, l), Ci(V, s);
    },
    onBeforeAppear(V) {
      Gn(te, [V]), Ci(V, f), Ci(V, _);
    },
    onEnter: re(!1),
    onAppear: re(!0),
    onLeave(V, K) {
      V._isLeaving = !0;
      const D = () => ee(V, K);
      Ci(V, m), V._enterCancelled ? (Ci(V, y), vh(V)) : (vh(V), Ci(V, y)), dh(() => {
        V._isLeaving && (Kn(V, m), Ci(V, k), ch(L) || fh(V, i, x, D));
      }), Gn(L, [V, D]);
    },
    onEnterCancelled(V) {
      Z(V, !1, void 0, !0), Gn(P, [V]);
    },
    onAppearCancelled(V) {
      Z(V, !0, void 0, !0), Gn(G, [V]);
    },
    onLeaveCancelled(V) {
      ee(V), Gn(le, [V]);
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
let N1 = 0;
function fh(e, t, a, i) {
  const n = e._endId = ++N1, l = () => {
    n === e._endId && i();
  };
  if (a != null)
    return setTimeout(l, a);
  const { type: s, timeout: c, propCount: f } = O1(e, t);
  if (!s)
    return i();
  const _ = s + "end";
  let v = 0;
  const m = () => {
    e.removeEventListener(_, y), l();
  }, y = (k) => {
    k.target === e && ++v >= f && m();
  };
  setTimeout(() => {
    v < f && m();
  }, c + 1), e.addEventListener(_, y);
}
function O1(e, t) {
  const a = window.getComputedStyle(e), i = (C) => (a[C] || "").split(", "), n = i(`${on}Delay`), l = i(`${on}Duration`), s = hh(n, l), c = i(`${sl}Delay`), f = i(`${sl}Duration`), _ = hh(c, f);
  let v = null, m = 0, y = 0;
  t === on ? s > 0 && (v = on, m = s, y = l.length) : t === sl ? _ > 0 && (v = sl, m = _, y = f.length) : (m = Math.max(s, _), v = m > 0 ? s > _ ? on : sl : null, y = v ? v === on ? l.length : f.length : 0);
  const k = v === on && /\b(?:transform|all)(?:,|$)/.test(
    i(`${on}Property`).toString()
  );
  return {
    type: v,
    timeout: m,
    propCount: y,
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
    ).forEach((l) => ho(l, n));
  }, i = () => {
    const n = e(t.proxy);
    t.ce ? ho(t.ce, n) : Gc(t.subTree, n), a(n);
  };
  Tv(() => {
    fv(i);
  }), Tt(() => {
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
  else if (e.type === W)
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
      const l = Lm(t[n]);
      a.setProperty(`--${n}`, l), i += `--${n}: ${l};`;
    }
    a[tb] = i;
  }
}
const L1 = /(?:^|;)\s*display\s*:/;
function P1(e, t, a) {
  const i = e.style, n = bt(a);
  let l = !1;
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
      s === "display" && (l = !0);
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
      s && (a += ";" + s), i.cssText = a, l = L1.test(a);
    }
  } else t && e.removeAttribute("style");
  fo in e && (e[fo] = l ? i.display : "", e[eb] && (i.display = "none"));
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
    const l = bh[n] + i;
    if (l in e)
      return tc[t] = l;
  }
  return t;
}
function F1(e, t, a, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && bt(i) && a === i;
}
const gh = "http://www.w3.org/1999/xlink";
function mh(e, t, a, i, n, l = Rm(t)) {
  i && t.startsWith("xlink:") ? a == null ? e.removeAttributeNS(gh, t.slice(6, t.length)) : e.setAttributeNS(gh, t, a) : a == null || l && !Vp(a) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : Ka(a) ? String(a) : a
  );
}
function yh(e, t, a, i, n) {
  if (t === "innerHTML" || t === "textContent") {
    a != null && (e[t] = t === "innerHTML" ? Jv(a) : a);
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const c = l === "OPTION" ? e.getAttribute("value") || "" : e.value, f = a == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(a);
    (c !== f || !("_value" in e)) && (e.value = f), a == null && e.removeAttribute(t), e._value = a;
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
  const l = e[_h] || (e[_h] = {}), s = l[t];
  if (i && s)
    s.value = i;
  else {
    const [c, f] = B1(t);
    if (i) {
      const _ = l[t] = q1(
        i,
        n
      );
      gn(e, c, _, f);
    } else s && (M1(e, c, s, f), l[t] = void 0);
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
      const l = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        l.call(i), i._stopped = !0;
      };
      const s = n.slice(), c = [i];
      for (let f = 0; f < s.length && !i._stopped; f++) {
        const _ = s[f];
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, G1 = (e, t, a, i, n, l) => {
  const s = n === "svg";
  t === "class" ? R1(e, i, s) : t === "style" ? P1(e, a, i) : au(t) ? iu(t) || U1(e, t, a, i, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : K1(e, t, i, s)) ? (yh(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && mh(e, t, i, s, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (W1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !bt(i))) ? yh(e, ea(t), i, l, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), mh(e, t, i, s));
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
const ui = /* @__PURE__ */ Symbol("_assign"), zs = /* @__PURE__ */ Symbol("_initialValue");
function ic(e, t, a) {
  return t && (e = e.trim()), a && (e = lu(e)), e;
}
const Me = {
  created(e, { modifiers: { lazy: t, trim: a, number: i } }, n) {
    e.parentNode && (e.type === "text" ? e[zs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[zs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[ui] = Pr(n);
    const l = i || n.props && n.props.type === "number";
    gn(e, t ? "change" : "input", (s) => {
      s.target.composing || e[ui](ic(e.value, a, l));
    }), (a || l) && gn(e, "change", () => {
      e.value = ic(e.value, a, l);
    }), t || (gn(e, "compositionstart", Y1), gn(e, "compositionend", kh), gn(e, "change", kh));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: a, number: i } }) {
    const n = t ?? "", l = e[zs];
    delete e[zs], l !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== l ? e[ui](ic(e.value, a, i)) : e.value = n;
  },
  beforeUpdate(e, { value: t, oldValue: a, modifiers: { lazy: i, trim: n, number: l } }, s) {
    if (e[ui] = Pr(s), e.composing) return;
    const c = (l || e.type === "number") && !/^0\d/.test(e.value) ? lu(e.value) : e.value, f = t ?? "";
    if (c === f)
      return;
    const _ = e.getRootNode();
    (_ instanceof Document || _ instanceof ShadowRoot) && _.activeElement === e && e.type !== "range" && (i && t === a || n && e.value.trim() === f) || (e.value = f);
  }
}, qa = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, a) {
    e[ui] = Pr(a), gn(e, "change", () => {
      const i = e._modelValue, n = Yl(e), l = e.checked, s = e[ui];
      if (Le(i)) {
        const c = yd(i, n), f = c !== -1;
        if (l && !f)
          s(i.concat(n));
        else if (!l && f) {
          const _ = [...i];
          _.splice(c, 1), s(_);
        }
      } else if (Ui(i)) {
        const c = new Set(i);
        l ? c.add(n) : c.delete(n), s(c);
      } else
        s(ab(e, l));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Sh,
  beforeUpdate(e, t, a) {
    e[ui] = Pr(a), Sh(e, t, a);
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
const tt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: a } }, i) {
    e._modelValue = t, gn(e, "change", () => {
      const n = Array.prototype.filter.call(e.options, (f) => f.selected).map(
        (f) => a ? lu(Yl(f)) : Yl(f)
      ), l = e.multiple, s = l ? Ui(e._modelValue) ? new Set(n) : n : n[0], c = e._pendingValue = [
        l,
        l ? Le(s) ? n.slice() : n : s
      ];
      try {
        e[ui](s);
      } finally {
        Pt(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[ui] = Pr(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ch(e, t);
  },
  beforeUpdate(e, { value: t }, a) {
    e._modelValue = t, e[ui] = Pr(a);
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
    for (let n = 0, l = e.options.length; n < l; n++) {
      const s = e.options[n], c = Yl(s);
      if (a)
        if (i) {
          const f = typeof c;
          f === "string" || f === "number" ? s.selected = t.some((_) => String(_) === String(c)) : s.selected = yd(t, c) > -1;
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
  return a[i] || (a[i] = ((n, ...l) => {
    for (let s = 0; s < t.length; s++) {
      const c = J1[t[s]];
      if (c && c(n, t)) return;
    }
    return e(n, ...l);
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
    const l = qi(n.key);
    if (t.some(
      (s) => s === l || Q1[s] === l
    ))
      return e(n);
  }));
}, e_ = /* @__PURE__ */ Ot({ patchProp: G1 }, C1);
let Th;
function t_() {
  return Th || (Th = l1(e_));
}
const a_ = ((...e) => {
  const t = t_().createApp(...e), { mount: a } = t;
  return t.mount = (i) => {
    const n = n_(i);
    if (!n) return;
    const l = t._component;
    !ze(l) && !l.render && !l.template && (l.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
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
    const l = JSON.parse(atob(n.value));
    return window._nc_initial_state.set(i, l), l;
  } catch (l) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: l }), a !== void 0)
      return a;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: l });
  }
}
const Ah = (e, t, a) => {
  const i = Object.assign({
    escape: !0
  }, a || {}), n = function(l, s) {
    return s = s || {}, l.replace(
      /{([^{}]*)}/g,
      function(c, f) {
        const _ = s[f];
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
    var i, n, l, s, c = [], f = !0, _ = !1;
    try {
      if (l = (a = a.call(e)).next, t !== 0) for (; !(f = (i = l.call(a)).done) && (c.push(i.value), c.length !== t); f = !0) ;
    } catch (v) {
      _ = !0, n = v;
    } finally {
      try {
        if (!f && a.return != null && (s = a.return(), Object(s) !== s)) return;
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
  for (var i = arguments.length, n = new Array(i > 2 ? i - 2 : 0), l = 2; l < i; l++) n[l - 2] = arguments[l];
  return t.apply(a, n);
});
Wc || (Wc = function(t) {
  for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++) i[n - 1] = arguments[n];
  return new t(...i);
});
const Ti = kt(Array.prototype.forEach), f_ = kt(Array.prototype.lastIndexOf), xh = kt(Array.prototype.pop), ul = kt(Array.prototype.push), h_ = kt(Array.prototype.slice), p_ = kt(Array.prototype.splice), Or = Array.isArray, nc = sb(Set), rc = kt(Set.prototype.add), cl = kt(Set.prototype.has), Xn = kt(String.prototype.toLowerCase), lc = kt(String.prototype.toString), Nh = kt(String.prototype.match), dl = kt(String.prototype.replace), Oh = kt(String.prototype.indexOf), v_ = kt(String.prototype.trim), b_ = kt(Number.prototype.toString), g_ = kt(Boolean.prototype.toString), Rh = typeof BigInt > "u" ? null : kt(BigInt.prototype.toString), Ih = typeof Symbol > "u" ? null : kt(Symbol.prototype.toString), fa = kt(Object.prototype.hasOwnProperty), fl = kt(Object.prototype.toString), Ut = kt(RegExp.prototype.test), Ai = sb(TypeError);
function kt(e) {
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
  if ($h && $h(e, null), !Or(t)) return e;
  let i = t.length;
  for (; i--; ) {
    let n = t[i];
    if (typeof n == "string") {
      const l = a(n);
      l !== n && (d_(t) || (t[i] = l), n = l);
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
    const n = a[0], l = a[1];
    fa(e, n) && (Or(l) ? t[n] = m_(l) : l && typeof l == "object" && l.constructor === Object ? t[n] = wa(l) : t[n] = l);
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
      const t = e, a = Na(t, "toString");
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
function Na(e, t) {
  for (; e !== null; ) {
    const i = rb(e, t);
    if (i) {
      if (i.get) return kt(i.get);
      if (typeof i.value == "function") return kt(i.value);
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
    if (a) return a.get ? kt(a.get) : null;
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
]), C_ = Vt(/{{[\w\W]*|^[\w\W]*}}/g), T_ = Vt(/<%[\w\W]*|^[\w\W]*%>/g), A_ = Vt(/\${[\w\W]*/g), E_ = Vt(/^data-[\-\w.\u00B7-\uFFFF]+$/), $_ = Vt(/^aria-[\-\w]+$/), Mh = Vt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), x_ = Vt(/^(?:\w+script|data):/i), N_ = Vt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), O_ = Vt(/^html$/i), R_ = Vt(/^[a-z][.\w]*(-[.\w]+)+$/i), dc = Vt(/<[/\w!]/g), Uh = Vt(/<[/\w]/g), I_ = Vt(/<\/no(script|embed|frames)/i), zh = Vt(/\/>/i), xt = {
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
  const l = "dompurify" + (i ? "#" + i : "");
  try {
    return t.createPolicy(l, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
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
  return fa(t, a) && Or(t[a]) ? et(n.base ? wa(n.base) : {}, t[a], n.transform) : i;
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
  const l = e.HTMLTemplateElement, s = e.Node, c = e.Element, f = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const _ = e.DOMParser, v = e.trustedTypes, m = c.prototype, y = Na(m, "cloneNode"), k = Na(m, "remove"), C = Na(m, "removeAttributeNode"), S = Na(m, "nextSibling"), x = Na(m, "childNodes"), F = Na(m, "parentNode"), M = Na(m, "shadowRoot"), P = Na(m, "attributes"), L = s && s.prototype ? Na(s.prototype, "nodeType") : null, le = s && s.prototype ? Na(s.prototype, "nodeName") : null, te = s && s.prototype ? Na(s.prototype, "ownerDocument") : null, $ = function(E) {
    return L ? L(E) : E.nodeType;
  }, G = function(E) {
    return le ? le(E) : E.nodeName;
  }, Z = __(m, "namespaceURI"), ee = function(E) {
    return Z ? Z(E) : E.namespaceURI;
  };
  if (typeof l == "function") {
    const pe = a.createElement("template");
    pe.content && pe.content.ownerDocument && (a = pe.content.ownerDocument);
  }
  let re, V = "", K, D = !1, Y = 0;
  const ae = function() {
    if (Y > 0) throw Ai('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, J = function(E) {
    ae(), Y++;
    try {
      return re.createHTML(E);
    } finally {
      Y--;
    }
  }, U = function(E) {
    ae(), Y++;
    try {
      return re.createScriptURL(E);
    } finally {
      Y--;
    }
  }, H = function() {
    return D || (K = D_(v, n), D = !0), K;
  }, ye = a, Re = ye.implementation, $e = ye.createNodeIterator, Ue = ye.createDocumentFragment, Ze = ye.getElementsByTagName, ct = i.importNode;
  let _e = jh();
  t.isSupported = typeof ib == "function" && typeof F == "function" && Re && Re.createHTMLDocument !== void 0;
  const Oe = C_, ge = T_, De = A_, nt = E_, ie = $_, A = x_, R = N_, I = R_;
  let O = Mh, N = null;
  const X = et({}, [
    ...Lh,
    ...sc,
    ...oc,
    ...uc,
    ...Ph
  ]);
  let ne = null;
  const de = et({}, [
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
  })), fe = null, xe = null;
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
  let Ae = !0, Ne = !0, Ve = !1, Ye = !0, qe = !1, it = !0, dt = !1, _t = !1, gt = null, ia = null, pa = !1, St = !1, Rt = !1, Ma = !1, Gt = !0, va = !1;
  const $n = "user-content-";
  let Ya = !0, xn = !1, Ta = null, Za = {}, Xa = null;
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
  const Nn = et({}, [
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
  const On = et({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let Ua = null;
  const Qi = ["application/xhtml+xml", "text/html"], Tu = "text/html";
  let wt = null, Kt = null;
  const cs = a.createElement("form"), ds = function(E) {
    return E instanceof RegExp || E instanceof Function;
  }, Mr = function() {
    let E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Kt && Kt === E) return;
    (!E || typeof E != "object") && (E = {}), E = wa(E), Ua = Qi.indexOf(E.PARSER_MEDIA_TYPE) === -1 ? Tu : E.PARSER_MEDIA_TYPE, wt = Ua === "application/xhtml+xml" ? lc : Xn, N = un(E, "ALLOWED_TAGS", X, { transform: wt }), ne = un(E, "ALLOWED_ATTR", de, { transform: wt }), cr = un(E, "ALLOWED_NAMESPACES", Nn, { transform: lc }), Wi = un(E, "ADD_URI_SAFE_ATTR", Yi, {
      transform: wt,
      base: Yi
    }), hi = un(E, "ADD_DATA_URI_TAGS", Ki, {
      transform: wt,
      base: Ki
    }), Xa = un(E, "FORBID_CONTENTS", Fr, { transform: wt }), fe = un(E, "FORBID_TAGS", wa({}), { transform: wt }), xe = un(E, "FORBID_ATTR", wa({}), { transform: wt }), Za = fa(E, "USE_PROFILES") ? E.USE_PROFILES && typeof E.USE_PROFILES == "object" ? wa(E.USE_PROFILES) : E.USE_PROFILES : !1, Ae = E.ALLOW_ARIA_ATTR !== !1, Ne = E.ALLOW_DATA_ATTR !== !1, Ve = E.ALLOW_UNKNOWN_PROTOCOLS || !1, Ye = E.ALLOW_SELF_CLOSE_IN_ATTR !== !1, qe = E.SAFE_FOR_TEMPLATES || !1, it = E.SAFE_FOR_XML !== !1, dt = E.WHOLE_DOCUMENT || !1, St = E.RETURN_DOM || !1, Rt = E.RETURN_DOM_FRAGMENT || !1, Ma = E.RETURN_TRUSTED_TYPE || !1, pa = E.FORCE_BODY || !1, Gt = E.SANITIZE_DOM !== !1, va = E.SANITIZE_NAMED_PROPS || !1, Ya = E.KEEP_CONTENT !== !1, xn = E.IN_PLACE || !1, O = w_(E.ALLOWED_URI_REGEXP) ? E.ALLOWED_URI_REGEXP : Mh, pi = typeof E.NAMESPACE == "string" ? E.NAMESPACE : ba, vi = fc(E, "MATHML_TEXT_INTEGRATION_POINTS", () => et({}, Xi)), bi = fc(E, "HTML_INTEGRATION_POINTS", () => et({}, Ji));
    const B = fc(E, "CUSTOM_ELEMENT_HANDLING", () => Tr(null));
    if (ve = Tr(null), fa(B, "tagNameCheck") && ds(B.tagNameCheck) && (ve.tagNameCheck = B.tagNameCheck), fa(B, "attributeNameCheck") && ds(B.attributeNameCheck) && (ve.attributeNameCheck = B.attributeNameCheck), fa(B, "allowCustomizedBuiltInElements") && typeof B.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = B.allowCustomizedBuiltInElements), Vt(ve), qe && (Ne = !1), Rt && (St = !0), Za && (N = et({}, Ph), ne = Tr(null), Za.html === !0 && (et(N, Lh), et(ne, Dh)), Za.svg === !0 && (et(N, sc), et(ne, cc), et(ne, js)), Za.svgFilters === !0 && (et(N, oc), et(ne, cc), et(ne, js)), Za.mathMl === !0 && (et(N, uc), et(ne, Fh), et(ne, js))), we.tagCheck = null, we.attributeCheck = null, fa(E, "ADD_TAGS") && (typeof E.ADD_TAGS == "function" ? we.tagCheck = E.ADD_TAGS : Or(E.ADD_TAGS) && (N === X && (N = wa(N)), et(N, E.ADD_TAGS, wt))), fa(E, "ADD_ATTR") && (typeof E.ADD_ATTR == "function" ? we.attributeCheck = E.ADD_ATTR : Or(E.ADD_ATTR) && (ne === de && (ne = wa(ne)), et(ne, E.ADD_ATTR, wt))), fa(E, "ADD_FORBID_CONTENTS") && Or(E.ADD_FORBID_CONTENTS) && (Xa === Fr && (Xa = wa(Xa)), et(Xa, E.ADD_FORBID_CONTENTS, wt)), Ya && (N["#text"] = !0), dt && et(N, [
      "html",
      "head",
      "body"
    ]), N.table && (et(N, ["tbody"]), delete fe.tbody), E.TRUSTED_TYPES_POLICY) {
      if (typeof E.TRUSTED_TYPES_POLICY.createHTML != "function") throw Ai('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof E.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Ai('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const ue = re;
      re = E.TRUSTED_TYPES_POLICY;
      try {
        V = J("");
      } catch (se) {
        throw re = ue, se;
      }
    } else E.TRUSTED_TYPES_POLICY === null ? (re = void 0, V = "") : (re === void 0 && (re = H()), re && typeof V == "string" && (V = J("")));
    Dt && Dt(E), Kt = E;
  }, fs = et({}, [
    ...sc,
    ...oc,
    ...k_
  ]), ht = et({}, [...uc, ...S_]), Ur = function(E, B, ue) {
    return B.namespaceURI === ba ? E === "svg" : B.namespaceURI === rt ? E === "svg" && (ue === "annotation-xml" || vi[ue]) : !!fs[E];
  }, Au = function(E, B, ue) {
    return B.namespaceURI === ba ? E === "math" : B.namespaceURI === ur ? E === "math" && bi[ue] : !!ht[E];
  }, Eu = function(E, B, ue) {
    return B.namespaceURI === ur && !bi[ue] || B.namespaceURI === rt && !vi[ue] ? !1 : !ht[E] && (On[E] || !fs[E]);
  }, gi = function(E) {
    const B = ee(E), ue = Xn(G(E)), se = F(E);
    let Ie, Fe;
    return se && $(se) === xt.element ? (Ie = { namespaceURI: ee(se) }, Fe = Xn(G(se))) : (Ie = { namespaceURI: pi }, Fe = "template"), cr[B] ? B === ur ? Ur(ue, Ie, Fe) : B === rt ? Au(ue, Ie, Fe) : B === ba ? Eu(ue, Ie, Fe) : !!(Ua === "application/xhtml+xml" && cr[B]) : !1;
  }, Ja = function(E) {
    ul(t.removed, { element: E });
    try {
      F(E).removeChild(E);
    } catch {
      if (k(E), !F(E)) throw Ai("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, mi = function(E, B, ue) {
    try {
      C(E, B);
    } catch {
      try {
        E.removeAttribute(ue);
      } catch {
      }
    }
  }, Rn = function(E) {
    jr(E);
    const B = x(E);
    B && Ti(h_(B), (se) => {
      try {
        k(se);
      } catch {
      }
    });
    const ue = $(E) === xt.element ? P(E) : null;
    if (ue) for (let se = ue.length - 1; se >= 0; --se) {
      const Ie = ue[se], Fe = Ie && Ie.name;
      typeof Fe == "string" && mi(E, Ie, Fe);
    }
  }, en = function(E, B, ue) {
    if (!ue) try {
      ue = B.getAttributeNode(E);
    } catch {
      ue = null;
    }
    ul(t.removed, {
      attribute: ue || null,
      from: B
    });
    try {
      ue ? C(B, ue) : B.removeAttribute(E);
    } catch {
      try {
        B.removeAttribute(E);
      } catch {
      }
    }
    if (E === "is")
      if (St || Rt) try {
        Ja(B);
      } catch {
      }
      else try {
        B.setAttribute(E, "");
      } catch {
      }
  }, hs = function(E) {
    const B = P(E);
    if (B)
      for (let ue = B.length - 1; ue >= 0; --ue) {
        const se = B[ue], Ie = se && se.name;
        typeof Ie != "string" || ne[wt(Ie)] || mi(E, se, Ie);
      }
  }, zr = function(E, B) {
    let ue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const se = [E];
    for (; se.length > 0; ) {
      const Ie = se.pop();
      if (B(Ie) === !1) continue;
      if (ue && $(Ie) === xt.element) {
        const Ke = M(Ie);
        Aa(Ke) && se.push(Ke);
      }
      const Fe = x(Ie);
      if (Fe) for (let Ke = Fe.length - 1; Ke >= 0; --Ke) se.push(Fe[Ke]);
    }
  }, jr = function(E) {
    zr(E, (B) => {
      $(B) === xt.element && hs(B);
    });
  }, Br = function(E) {
    const B = [];
    return zr(E, (ue) => {
      B.push(ue);
    }, !0), B;
  }, $u = function(E, B) {
    const ue = nc();
    Ti(Br(E), (se) => {
      $(se) === xt.element && rc(ue, se);
    }), Ti(B, (se) => {
      $(se) === xt.element && !cl(ue, se) && hs(se);
    });
  }, ps = function(E, B) {
    let ue = !1;
    return Ti(t.removed, (se) => {
      se.element && (ue = ue || se.element === E, jr(se.element));
    }), $u(E, B), ue;
  }, xu = 8, Nu = function(E, B) {
    const ue = Ta;
    let se = null;
    const Ie = () => (se || (se = nc(), Ti(B, (Fe) => {
      rc(se, Fe);
    })), se);
    for (let Fe = 0; ; Fe++) {
      const Ke = Br(E), At = [E];
      let Wt = !1;
      if (Ti(Ke, (pt) => {
        $(pt) === xt.documentFragment ? ul(At, pt) : !Wt && !cl(ue, pt) && (Wt = cl(Ie(), pt));
      }), !Wt) return;
      if (Fe >= xu) throw Ai("the tree kept changing during in-place sanitization; refusing to return it");
      Ti(At, (pt, It) => {
        Ou(pt, It > 0, E, Ie());
      });
    }
  }, Ou = function(E, B, ue, se) {
    const Ie = Hr(E);
    let Fe;
    for (; Fe = Ie.nextNode(); )
      !cl(se, Fe) || cl(Ta, Fe) || (B && ga(_e.uponSanitizeShadowNode, Fe, null), hr(Fe, ue), pr(Fe, ue), Aa(Fe.content) && nn(Fe.content));
  }, Ru = function(E) {
    Ta && rc(Ta, E);
  }, vs = function(E, B) {
    return it ? E === "patchsrc" ? !0 : E === "for" && B !== "label" && B !== "output" : !1;
  }, Iu = function(E) {
    it && zr(E, (B) => {
      const ue = $(B);
      if (ue === xt.processingInstruction || ue === xt.comment && Ut(Uh, B.data)) {
        try {
          k(B);
        } catch {
        }
        return !1;
      }
      if (ue === xt.element) {
        const se = B, Ie = wt(G(B));
        try {
          se.hasAttribute && se.hasAttribute("patchsrc") && se.removeAttribute("patchsrc"), se.hasAttribute && se.hasAttribute("for") && vs("for", Ie) && se.removeAttribute("for");
        } catch {
        }
      }
      return !0;
    });
  }, bs = function(E) {
    let B = null, ue = null;
    if (pa) E = "<remove></remove>" + E;
    else {
      const Fe = Nh(E, /^[\r\n\t ]+/);
      ue = Fe && Fe[0];
    }
    Ua === "application/xhtml+xml" && pi === ba && (E = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + E + "</body></html>");
    const se = re ? J(E) : E;
    if (pi === ba) try {
      B = new _().parseFromString(se, Ua);
    } catch {
    }
    if (!B || !B.documentElement) {
      B = Re.createDocument(pi, "template", null);
      try {
        B.documentElement.innerHTML = Zi ? V : se;
      } catch {
      }
    }
    const Ie = B.body || B.documentElement;
    return E && ue && Ie.insertBefore(a.createTextNode(ue), Ie.childNodes[0] || null), pi === ba ? Ze.call(B, dt ? "html" : "body")[0] : dt ? B.documentElement : Ie;
  }, Hr = function(E) {
    const B = te ? te(E) : E.ownerDocument;
    return $e.call(B || E, E, f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION, null);
  }, In = function(E) {
    return E = dl(E, Oe, " "), E = dl(E, ge, " "), E = dl(E, De, " "), E;
  }, Ln = function(E) {
    var B;
    dr(E);
    const ue = (B = E.querySelectorAll) === null || B === void 0 ? void 0 : B.call(E, "template");
    ue && Ti(ue, (se) => {
      Aa(se.content) && Ln(se.content);
    });
  }, dr = function(E) {
    E.normalize();
    const B = te ? te(E) : E.ownerDocument, ue = $e.call(B || E, E, f.SHOW_TEXT | f.SHOW_COMMENT | f.SHOW_CDATA_SECTION | f.SHOW_PROCESSING_INSTRUCTION, null);
    let se = ue.nextNode();
    for (; se; )
      se.data = In(se.data), se = ue.nextNode();
  }, tn = function(E) {
    const B = le ? le(E) : null;
    return typeof B != "string" || wt(B) !== "form" ? !1 : typeof E.nodeName != "string" || typeof E.textContent != "string" || typeof E.removeChild != "function" || E.attributes !== P(E) || typeof E.removeAttribute != "function" || typeof E.removeAttributeNode != "function" || typeof E.getAttributeNode != "function" || typeof E.setAttribute != "function" || typeof E.namespaceURI != "string" || typeof E.insertBefore != "function" || typeof E.hasChildNodes != "function" || E.nodeType !== L(E) || E.childNodes !== x(E);
  }, Aa = function(E) {
    if (!L || typeof E != "object" || E === null) return !1;
    try {
      return L(E) === xt.documentFragment;
    } catch {
      return !1;
    }
  }, an = function(E) {
    if (!L || typeof E != "object" || E === null) return !1;
    try {
      return typeof L(E) == "number";
    } catch {
      return !1;
    }
  };
  function ga(pe, E, B) {
    pe.length !== 0 && Ti(pe, (ue) => {
      ue.call(t, E, B, Kt);
    });
  }
  const gs = function(E, B) {
    return !!(it && E.hasChildNodes() && !an(E.firstElementChild) && Ut(dc, E.textContent) && Ut(dc, E.innerHTML) || it && L_[B] && $(E) === xt.element && ee(E) === ba && (an(E.firstElementChild) || typeof E.textContent == "string" && Ut(dc, E.textContent)) || E.nodeType === xt.processingInstruction || it && E.nodeType === xt.comment && Ut(Uh, E.data));
  }, Pn = function(E, B) {
    if (E instanceof RegExp) return Ut(E, B);
    if (E instanceof Function) {
      for (var ue = arguments.length, se = new Array(ue > 2 ? ue - 2 : 0), Ie = 2; Ie < ue; Ie++) se[Ie - 2] = arguments[Ie];
      return !!E(B, ...se);
    }
    return !1;
  }, Lu = function(E, B, ue) {
    if (!fe[B] && Vr(B) && Pn(ve.tagNameCheck, B)) return !1;
    if (Ya && !Xa[B] && !Xa[Xn(B)]) {
      const se = F(E), Ie = x(E);
      if (Ie && se) {
        const Fe = Ie.length;
        for (let Ke = Fe - 1; Ke >= 0; --Ke) {
          const At = E === ue ? y(Ie[Ke], !0) : Ie[Ke];
          se.insertBefore(At, S(E));
        }
      }
    }
    return Ja(E), !0;
  }, fr = function(E, B, ue, se) {
    return E.length === 0 ? B : B === ue || B === se ? wa(B) : B;
  }, Qa = function(E, B) {
    return E === B || F(E) !== null ? !1 : (xn && jr(E), !0);
  }, hr = function(E, B) {
    if (Ru(E), ga(_e.beforeSanitizeElements, E, null), Qa(E, B)) return !0;
    if (tn(E))
      return Ja(E), !0;
    const ue = wt(G(E));
    if (N = fr(_e.uponSanitizeElement, N, X, gt), ga(_e.uponSanitizeElement, E, {
      tagName: ue,
      allowedTags: N
    }), Qa(E, B)) return !0;
    if (gs(E, ue))
      return Ja(E), !0;
    if (fe[ue] || !(we.tagCheck instanceof Function && we.tagCheck(ue)) && !N[ue]) {
      const se = Lu(E, ue, B);
      return se === !1 && (ga(_e.afterSanitizeElements, E, null), Qa(E, B)) ? !0 : se;
    }
    if ($(E) === xt.element && !gi(E) || (ue === "noscript" || ue === "noembed" || ue === "noframes") && Ut(I_, E.innerHTML))
      return Ja(E), !0;
    if (qe && E.nodeType === xt.text) {
      const se = In(E.textContent);
      E.textContent !== se && (ul(t.removed, { element: E.cloneNode() }), E.textContent = se);
    }
    return ga(_e.afterSanitizeElements, E, null), Qa(E, B);
  }, Ea = function(E, B, ue) {
    if (xe[B] || vs(B, E) || Gt && (B === "id" || B === "name") && (ue in a || ue in cs)) return !1;
    const se = ne[B] || we.attributeCheck instanceof Function && we.attributeCheck(B, E);
    return Ne && Ut(nt, B) || Ae && Ut(ie, B) ? !0 : se ? Wi[B] || Ut(O, dl(ue, R, "")) || (B === "src" || B === "xlink:href" || B === "href") && E !== "script" && Oh(ue, "data:") === 0 && hi[E] || Ve && !Ut(A, dl(ue, R, "")) ? !0 : !ue : Vr(E) && Pn(ve.tagNameCheck, E) && Pn(ve.attributeNameCheck, B, E) || B === "is" && ve.allowCustomizedBuiltInElements && Pn(ve.tagNameCheck, ue);
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
  }, ys = function(E, B, ue, se) {
    if (re && typeof v == "object" && typeof v.getAttributeType == "function" && !ue) switch (v.getAttributeType(E, B)) {
      case "TrustedHTML":
        return J(se);
      case "TrustedScriptURL":
        return U(se);
    }
    return se;
  }, Pu = function(E, B, ue, se) {
    try {
      return ue ? E.setAttributeNS(ue, B, se) : E.setAttribute(B, se), tn(E) ? (Ja(E), !1) : !0;
    } catch {
      return en(B, E), !1;
    }
  }, _s = function(E, B) {
    return it && Ut(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, B) ? !0 : Xn(E) === "attributename" && Nh(B, "href") !== null;
  }, pr = function(E, B) {
    if (ga(_e.beforeSanitizeAttributes, E, null), Qa(E, B)) return;
    const ue = E.attributes;
    if (!ue || tn(E)) return;
    ne = fr(_e.uponSanitizeAttribute, ne, de, ia);
    const se = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ne,
      forceKeepAttr: void 0
    };
    let Ie = ue.length;
    const Fe = wt(E.nodeName);
    for (; Ie--; ) {
      const Ke = ue[Ie], At = Ke.name, Wt = Ke.namespaceURI, pt = Ke.value, It = wt(At), yi = pt;
      let $t = At === "value" ? yi : v_(yi), ws = !1;
      if (se.attrName = It, se.attrValue = $t, se.keepAttr = !0, se.forceKeepAttr = void 0, ga(_e.uponSanitizeAttribute, E, se), $t = se.attrValue, va && (It === "id" || It === "name") && Oh($t, $n) !== 0 && (en(At, E, Ke), $t = $n + $t, ws = !0), _s(At, $t)) {
        en(At, E, Ke);
        continue;
      }
      if (!se.forceKeepAttr) {
        if (!se.keepAttr) {
          en(At, E, Ke);
          continue;
        }
        if (!Ye && Ut(zh, $t)) {
          en(At, E, Ke);
          continue;
        }
        if (qe && ($t = In($t)), !Ea(Fe, It, $t)) {
          en(At, E, Ke);
          continue;
        }
        $t = ys(Fe, It, Wt, $t), $t !== yi && Pu(E, At, Wt, $t) && ws && xh(t.removed);
      }
    }
    ga(_e.afterSanitizeAttributes, E, null), Qa(E, B);
  }, nn = function(E) {
    let B = null;
    const ue = Hr(E);
    for (ga(_e.beforeSanitizeShadowDOM, E, null); B = ue.nextNode(); )
      if (ga(_e.uponSanitizeShadowNode, B, null), hr(B, E), pr(B, E), Aa(B.content) && nn(B.content), $(B) === xt.element) {
        const se = M(B);
        Aa(se) && (vr(se), nn(se));
      }
    qe && dr(E), ga(_e.afterSanitizeShadowDOM, E, null);
  }, vr = function(E) {
    const B = [{
      node: E,
      shadow: null
    }];
    for (; B.length > 0; ) {
      const ue = B.pop();
      if (ue.shadow) {
        nn(ue.shadow);
        continue;
      }
      const se = ue.node, Ie = $(se) === xt.element, Fe = x(se);
      if (Fe) for (let Ke = Fe.length - 1; Ke >= 0; --Ke) B.push({
        node: Fe[Ke],
        shadow: null
      });
      if (Ie) {
        const Ke = le ? le(se) : null;
        if (typeof Ke == "string" && wt(Ke) === "template") {
          const At = se.content;
          Aa(At) && B.push({
            node: At,
            shadow: null
          });
        }
      }
      if (Ie) {
        const Ke = M(se);
        Aa(Ke) && B.push({
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
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, B = null, ue = null, se = null, Ie = null;
    if (Zi = !pe, Zi && (pe = "<!-->"), typeof pe != "string" && !an(pe) && (pe = y_(pe), typeof pe != "string"))
      throw Ai("dirty is not a string, aborting");
    if (!t.isSupported) return pe;
    _t ? (N = gt, ne = ia) : Mr(E), (_e.uponSanitizeElement.length > 0 || _e.uponSanitizeAttribute.length > 0) && (N = wa(N)), _e.uponSanitizeAttribute.length > 0 && (ne = wa(ne)), t.removed = [];
    const Fe = xn && typeof pe != "string" && an(pe);
    let Ke = [];
    const At = Ta;
    if (Fe) {
      Iu(pe);
      const It = G(pe);
      if (typeof It == "string") {
        const yi = wt(It);
        if (!N[yi] || fe[yi])
          throw Rn(pe), Ai("root node is forbidden and cannot be sanitized in-place");
      }
      if (tn(pe))
        throw Rn(pe), Ai("root node is clobbered and cannot be sanitized in-place");
      Ke = Br(pe), Ta = nc();
    } else if (an(pe))
      B = bs("<!---->"), ue = B.ownerDocument.importNode(pe, !0), ue.nodeType === xt.element && ue.nodeName === "BODY" || ue.nodeName === "HTML" ? B = ue : B.appendChild(ue), vr(B);
    else {
      if (!St && !qe && !dt && pe.indexOf("<") === -1) return re && Ma ? J(pe) : pe;
      if (B = bs(pe), !B) return St ? null : Ma ? V : "";
    }
    B && pa && Ja(B.firstChild);
    const Wt = Fe ? pe : B;
    try {
      Fe && vr(pe);
      const It = Hr(Wt);
      for (; se = It.nextNode(); )
        hr(se, Wt), pr(se, Wt), Aa(se.content) && nn(se.content);
      Fe && Nu(pe, Ke);
    } catch (It) {
      throw Fe && (Rn(pe), ps(pe, Ke)), It;
    } finally {
      Ta = At;
    }
    if (Fe) {
      if (ps(pe, Ke)) throw Ai("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return qe && Ln(pe), pe;
    }
    if (St) {
      if (qe && Ln(B), Rt)
        for (Ie = Ue.call(B.ownerDocument); B.firstChild; ) Ie.appendChild(B.firstChild);
      else Ie = B;
      return (ne.shadowroot || ne.shadowrootmode) && (Ie = ct.call(i, Ie, !0)), Ie;
    }
    let pt = dt ? B.outerHTML : B.innerHTML;
    return dt && N["!doctype"] && B.ownerDocument && B.ownerDocument.doctype && B.ownerDocument.doctype.name && Ut(O_, B.ownerDocument.doctype.name) && (pt = "<!DOCTYPE " + B.ownerDocument.doctype.name + `>
` + pt), qe && (pt = In(pt)), re && Ma ? J(pt) : pt;
  }, t.setConfig = function() {
    let pe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Mr(pe), _t = !0, gt = N, ia = ne;
  }, t.clearConfig = function() {
    Kt = null, _t = !1, gt = null, ia = null, re = K, V = "";
  }, t.isValidAttribute = function(pe, E, B) {
    Kt || Mr({});
    const ue = wt(pe), se = wt(E);
    return typeof B == "string" && (_s(E, B) || !Ye && Ut(zh, B)) ? !1 : Ea(ue, se, B);
  }, t.addHook = function(pe, E) {
    typeof E == "function" && fa(_e, pe) && ul(_e[pe], E);
  }, t.removeHook = function(pe, E) {
    if (fa(_e, pe)) {
      if (E !== void 0) {
        const B = f_(_e[pe], E);
        return B === -1 ? void 0 : p_(_e[pe], B, 1)[0];
      }
      return xh(_e[pe]);
    }
  }, t.removeHooks = function(pe) {
    fa(_e, pe) && (_e[pe] = []);
  }, t.removeAllHooks = function() {
    _e = jh();
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
    var l, s = "", c = 0, f = 0;
    for (c = n.index; c < i.length; c++) {
      switch (i.charCodeAt(c)) {
        case 34:
          l = "&quot;";
          break;
        case 38:
          l = "&amp;";
          break;
        case 39:
          l = "&#39;";
          break;
        case 60:
          l = "&lt;";
          break;
        case 62:
          l = "&gt;";
          break;
        default:
          continue;
      }
      f !== c && (s += i.substring(f, c)), f = c + 1, s += l;
    }
    return f !== c ? s + i.substring(f, c) : s;
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
function b(e, t, a, i, n) {
  const l = typeof a == "object" ? a : void 0, s = typeof i == "number" ? i : typeof a == "number" ? a : void 0, c = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof n == "object" ? n : typeof i == "object" ? i : {}
  }, f = (S) => S, _ = (c.sanitize ? ub.sanitize : f) || f, v = c.escape ? vo : f, m = (S) => typeof S == "string" || typeof S == "number", y = (S, x, F) => S.replace(/%n/g, "" + F).replace(/{([^{}]*)}/g, (M, P) => {
    if (x === void 0 || !(P in x))
      return v(M);
    const L = x[P];
    return m(L) ? v(`${L}`) : typeof L == "object" && m(L.value) ? (L.escape !== !1 ? vo : f)(`${L.value}`) : v(M);
  });
  let C = (n?.bundle ?? db(e)).translations[t] || t;
  return C = Array.isArray(C) ? C[0] : C, _(typeof l == "object" || s !== void 0 ? y(
    C,
    l,
    s
  ) : C);
}
function yt(e, t, a, i, n, l) {
  const s = "_" + t + "_::_" + a + "_", c = l?.bundle ?? db(e), f = c.translations[s];
  if (typeof f < "u") {
    const _ = f;
    if (Array.isArray(_)) {
      const v = c.pluralFunction(i);
      return b(e, _[v], n, i, l);
    }
  }
  return i === 1 ? b(e, t, n, i, l) : b(e, a, n, i, l);
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
  return (...l) => {
    if (l.length !== 2 || l.some((_) => typeof _ != "string")) return e(...l);
    const s = t();
    s !== n && (i.clear(), n = s);
    const c = JSON.stringify(l);
    if (i.has(c)) return i.get(c);
    const f = e(...l);
    return i.size >= a && i.delete(i.keys().next().value), i.set(c, f), f;
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
    } = pb(), l = hb();
    t = e.exports = {};
    const s = t.re = [], c = t.safeRe = [], f = t.src = [], _ = t.safeSrc = [], v = t.t = {};
    let m = 0;
    const y = "[a-zA-Z0-9-]", k = [
      ["\\s", 1],
      ["\\d", n],
      [y, i]
    ], C = (x) => {
      for (const [F, M] of k)
        x = x.split(`${F}*`).join(`${F}{0,${M}}`).split(`${F}+`).join(`${F}{1,${M}}`);
      return x;
    }, S = (x, F, M) => {
      const P = C(F), L = m++;
      l(x, L, F), v[x] = L, f[L] = F, _[L] = P, s[L] = new RegExp(F, M ? "g" : void 0), c[L] = new RegExp(P, M ? "g" : void 0);
    };
    S("NUMERICIDENTIFIER", "0|[1-9]\\d*"), S("NUMERICIDENTIFIERLOOSE", "\\d+"), S("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${y}*`), S("MAINVERSION", `(${f[v.NUMERICIDENTIFIER]})\\.(${f[v.NUMERICIDENTIFIER]})\\.(${f[v.NUMERICIDENTIFIER]})`), S("MAINVERSIONLOOSE", `(${f[v.NUMERICIDENTIFIERLOOSE]})\\.(${f[v.NUMERICIDENTIFIERLOOSE]})\\.(${f[v.NUMERICIDENTIFIERLOOSE]})`), S("PRERELEASEIDENTIFIER", `(?:${f[v.NONNUMERICIDENTIFIER]}|${f[v.NUMERICIDENTIFIER]})`), S("PRERELEASEIDENTIFIERLOOSE", `(?:${f[v.NONNUMERICIDENTIFIER]}|${f[v.NUMERICIDENTIFIERLOOSE]})`), S("PRERELEASE", `(?:-(${f[v.PRERELEASEIDENTIFIER]}(?:\\.${f[v.PRERELEASEIDENTIFIER]})*))`), S("PRERELEASELOOSE", `(?:-?(${f[v.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${f[v.PRERELEASEIDENTIFIERLOOSE]})*))`), S("BUILDIDENTIFIER", `${y}+`), S("BUILD", `(?:\\+(${f[v.BUILDIDENTIFIER]}(?:\\.${f[v.BUILDIDENTIFIER]})*))`), S("FULLPLAIN", `v?${f[v.MAINVERSION]}${f[v.PRERELEASE]}?${f[v.BUILD]}?`), S("FULL", `^${f[v.FULLPLAIN]}$`), S("LOOSEPLAIN", `[v=\\s]*${f[v.MAINVERSIONLOOSE]}${f[v.PRERELEASELOOSE]}?${f[v.BUILD]}?`), S("LOOSE", `^${f[v.LOOSEPLAIN]}$`), S("GTLT", "((?:<|>)?=?)"), S("XRANGEIDENTIFIERLOOSE", `${f[v.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), S("XRANGEIDENTIFIER", `${f[v.NUMERICIDENTIFIER]}|x|X|\\*`), S("XRANGEPLAIN", `[v=\\s]*(${f[v.XRANGEIDENTIFIER]})(?:\\.(${f[v.XRANGEIDENTIFIER]})(?:\\.(${f[v.XRANGEIDENTIFIER]})(?:${f[v.PRERELEASE]})?${f[v.BUILD]}?)?)?`), S("XRANGEPLAINLOOSE", `[v=\\s]*(${f[v.XRANGEIDENTIFIERLOOSE]})(?:\\.(${f[v.XRANGEIDENTIFIERLOOSE]})(?:\\.(${f[v.XRANGEIDENTIFIERLOOSE]})(?:${f[v.PRERELEASELOOSE]})?${f[v.BUILD]}?)?)?`), S("XRANGE", `^${f[v.GTLT]}\\s*${f[v.XRANGEPLAIN]}$`), S("XRANGELOOSE", `^${f[v.GTLT]}\\s*${f[v.XRANGEPLAINLOOSE]}$`), S("COERCEPLAIN", `(^|[^\\d])(\\d{1,${a}})(?:\\.(\\d{1,${a}}))?(?:\\.(\\d{1,${a}}))?`), S("COERCE", `${f[v.COERCEPLAIN]}(?:$|[^\\d])`), S("COERCEFULL", f[v.COERCEPLAIN] + `(?:${f[v.PRERELEASE]})?(?:${f[v.BUILD]})?(?:$|[^\\d])`), S("COERCERTL", f[v.COERCE], !0), S("COERCERTLFULL", f[v.COERCEFULL], !0), S("LONETILDE", "(?:~>?)"), S("TILDETRIM", `(\\s*)${f[v.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", S("TILDE", `^${f[v.LONETILDE]}${f[v.XRANGEPLAIN]}$`), S("TILDELOOSE", `^${f[v.LONETILDE]}${f[v.XRANGEPLAINLOOSE]}$`), S("LONECARET", "(?:\\^)"), S("CARETTRIM", `(\\s*)${f[v.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", S("CARET", `^${f[v.LONECARET]}${f[v.XRANGEPLAIN]}$`), S("CARETLOOSE", `^${f[v.LONECARET]}${f[v.XRANGEPLAINLOOSE]}$`), S("COMPARATORLOOSE", `^${f[v.GTLT]}\\s*(${f[v.LOOSEPLAIN]})$|^$`), S("COMPARATOR", `^${f[v.GTLT]}\\s*(${f[v.FULLPLAIN]})$|^$`), S("COMPARATORTRIM", `(\\s*)${f[v.GTLT]}\\s*(${f[v.LOOSEPLAIN]}|${f[v.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", S("HYPHENRANGE", `^\\s*(${f[v.XRANGEPLAIN]})\\s+-\\s+(${f[v.XRANGEPLAIN]})\\s*$`), S("HYPHENRANGELOOSE", `^\\s*(${f[v.XRANGEPLAINLOOSE]})\\s+-\\s+(${f[v.XRANGEPLAINLOOSE]})\\s*$`), S("STAR", "(<|>)?=?\\s*\\*"), S("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), S("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
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
    const l = e.test(i), s = e.test(n);
    return l && s && (i = +i, n = +n), i === n ? 0 : l && !s ? -1 : s && !l ? 1 : i < n ? -1 : 1;
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
  const e = hb(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: a } = pb(), { safeRe: i, t: n } = q_(), l = G_(), { compareIdentifiers: s } = K_(), c = (_, v) => {
    const m = v.split(".");
    if (m.length > _.length)
      return !1;
    for (let y = 0; y < m.length; y++)
      if (s(_[y], m[y]) !== 0)
        return !1;
    return !0;
  };
  class f {
    constructor(v, m) {
      if (m = l(m), v instanceof f) {
        if (v.loose === !!m.loose && v.includePrerelease === !!m.includePrerelease)
          return v;
        v = v.version;
      } else if (typeof v != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof v}".`);
      if (v.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", v, m), this.options = m, this.loose = !!m.loose, this.includePrerelease = !!m.includePrerelease;
      const y = v.trim().match(m.loose ? i[n.LOOSE] : i[n.FULL]);
      if (!y)
        throw new TypeError(`Invalid Version: ${v}`);
      if (this.raw = v, this.major = +y[1], this.minor = +y[2], this.patch = +y[3], this.major > a || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > a || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > a || this.patch < 0)
        throw new TypeError("Invalid patch version");
      y[4] ? this.prerelease = y[4].split(".").map((k) => {
        if (/^[0-9]+$/.test(k)) {
          const C = +k;
          if (C >= 0 && C < a)
            return C;
        }
        return k;
      }) : this.prerelease = [], this.build = y[5] ? y[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(v) {
      if (e("SemVer.compare", this.version, this.options, v), !(v instanceof f)) {
        if (typeof v == "string" && v === this.version)
          return 0;
        v = new f(v, this.options);
      }
      return v.version === this.version ? 0 : this.compareMain(v) || this.comparePre(v);
    }
    compareMain(v) {
      return v instanceof f || (v = new f(v, this.options)), this.major < v.major ? -1 : this.major > v.major ? 1 : this.minor < v.minor ? -1 : this.minor > v.minor ? 1 : this.patch < v.patch ? -1 : this.patch > v.patch ? 1 : 0;
    }
    comparePre(v) {
      if (v instanceof f || (v = new f(v, this.options)), this.prerelease.length && !v.prerelease.length)
        return -1;
      if (!this.prerelease.length && v.prerelease.length)
        return 1;
      if (!this.prerelease.length && !v.prerelease.length)
        return 0;
      let m = 0;
      do {
        const y = this.prerelease[m], k = v.prerelease[m];
        if (e("prerelease compare", m, y, k), y === void 0 && k === void 0)
          return 0;
        if (k === void 0)
          return 1;
        if (y === void 0)
          return -1;
        if (y === k)
          continue;
        return s(y, k);
      } while (++m);
    }
    compareBuild(v) {
      v instanceof f || (v = new f(v, this.options));
      let m = 0;
      do {
        const y = this.build[m], k = v.build[m];
        if (e("build compare", m, y, k), y === void 0 && k === void 0)
          return 0;
        if (k === void 0)
          return 1;
        if (y === void 0)
          return -1;
        if (y === k)
          continue;
        return s(y, k);
      } while (++m);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(v, m, y) {
      if (v.startsWith("pre")) {
        if (!m && y === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (m) {
          const k = `-${m}`.match(this.options.loose ? i[n.PRERELEASELOOSE] : i[n.PRERELEASE]);
          if (!k || k[1] !== m)
            throw new Error(`invalid identifier: ${m}`);
        }
      }
      switch (v) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", m, y);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", m, y);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", m, y), this.inc("pre", m, y);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", m, y), this.inc("pre", m, y);
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
          const k = Number(y) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [k];
          else {
            let C = this.prerelease.length;
            for (; --C >= 0; )
              typeof this.prerelease[C] == "number" && (this.prerelease[C]++, C = -2);
            if (C === -1) {
              if (m === this.prerelease.join(".") && y === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(k);
            }
          }
          if (m) {
            let C = [m, k];
            if (y === !1 && (C = [m]), c(this.prerelease, m)) {
              const S = this.prerelease[m.split(".").length];
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
  return mc = f, mc;
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
    } catch (l) {
      if (!n)
        return null;
      throw l;
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
      } catch (l) {
        console.error("could not invoke event listener", l);
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
  const t = (i, n, l, s) => (i.addEventListener(n, l, s), () => i.removeEventListener(n, l, s)), a = q(() => {
    const i = kc(Di(e[0])).filter((n) => n != null);
    return i.every((n) => typeof n != "string") ? i : void 0;
  });
  return s0(() => {
    var i, n;
    return [
      (i = (n = a.value) === null || n === void 0 ? void 0 : n.map((l) => yl(l))) !== null && i !== void 0 ? i : [mb].filter((l) => l != null),
      kc(Di(a.value ? e[1] : e[0])),
      kc(u(a.value ? e[2] : e[1])),
      Di(a.value ? e[3] : e[2])
    ];
  }, ([i, n, l, s], c, f) => {
    if (!i?.length || !n?.length || !l?.length) return;
    const _ = n0(s) ? { ...s } : s, v = i.flatMap((m) => n.flatMap((y) => l.map((k) => t(m, y, k, _))));
    f(() => {
      v.forEach((m) => m());
    });
  }, { flush: "post" });
}
let Qh = !1;
function ep(e, t, a = {}) {
  const { window: i = mb, ignore: n = [], capture: l = !0, detectIframe: s = !1, controls: c = !1 } = a;
  if (!i) return c ? {
    stop: _r,
    cancel: _r,
    trigger: _r
  } : _r;
  if (r0 && !Qh) {
    Qh = !0;
    const x = { passive: !0 };
    Array.from(i.document.body.children).forEach((F) => F.addEventListener("click", _r, x)), i.document.documentElement.addEventListener("click", _r, x);
  }
  let f = !0;
  const _ = (x) => Di(n).some((F) => {
    if (typeof F == "string") return Array.from(i.document.querySelectorAll(F)).some((M) => M === x.target || x.composedPath().includes(M));
    {
      const M = yl(F);
      return M && (x.target === M || x.composedPath().includes(M));
    }
  });
  function v(x) {
    const F = Di(x);
    return F && F.$.subTree.shapeFlag === 16;
  }
  function m(x, F) {
    const M = Di(x), P = M.$.subTree && M.$.subTree.children;
    return P == null || !Array.isArray(P) ? !1 : P.some((L) => L.el === F.target || F.composedPath().includes(L.el));
  }
  const y = (x) => {
    const F = yl(e);
    if (x.target != null && !(!(F instanceof Element) && v(e) && m(e, x)) && !(!F || F === x.target || x.composedPath().includes(F))) {
      if ("detail" in x && x.detail === 0 && (f = !_(x)), !f) {
        f = !0;
        return;
      }
      t(x);
    }
  };
  let k = !1;
  const C = [
    Rr(i, "click", (x) => {
      k || (k = !0, setTimeout(() => {
        k = !1;
      }, 0), y(x));
    }, {
      passive: !0,
      capture: l
    }),
    Rr(i, "pointerdown", (x) => {
      const F = yl(e);
      f = !_(x) && !!(F && !x.composedPath().includes(F));
    }, { passive: !0 }),
    s && Rr(i, "blur", (x) => {
      setTimeout(() => {
        const F = yl(e);
        let M = i.document.activeElement;
        for (; M?.shadowRoot; ) M = M.shadowRoot.activeElement;
        M?.tagName === "IFRAME" && !F?.contains(i.document.activeElement) && t(x);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), S = () => C.forEach((x) => x());
  return c ? {
    stop: S,
    cancel: () => {
      f = !1;
    },
    trigger: (x) => {
      f = !0, y(x), f = !1;
    }
  } : S;
}
function o0(e, t = {}) {
  const { threshold: a = 50, onSwipe: i, onSwipeEnd: n, onSwipeStart: l, passive: s = !0 } = t, c = /* @__PURE__ */ Lt({
    x: 0,
    y: 0
  }), f = /* @__PURE__ */ Lt({
    x: 0,
    y: 0
  }), _ = q(() => c.x - f.x), v = q(() => c.y - f.y), { max: m, abs: y } = Math, k = q(() => m(y(_.value), y(v.value)) >= a), C = /* @__PURE__ */ sv(!1), S = q(() => k.value ? y(_.value) > y(v.value) ? _.value > 0 ? "left" : "right" : v.value > 0 ? "up" : "down" : "none"), x = ($) => [$.touches[0].clientX, $.touches[0].clientY], F = ($, G) => {
    c.x = $, c.y = G;
  }, M = ($, G) => {
    f.x = $, f.y = G;
  }, P = {
    passive: s,
    capture: !s
  }, L = ($) => {
    C.value && n?.($, S.value), C.value = !1;
  }, le = [
    Rr(e, "touchstart", ($) => {
      if ($.touches.length !== 1) return;
      const [G, Z] = x($);
      F(G, Z), M(G, Z), l?.($);
    }, P),
    Rr(e, "touchmove", ($) => {
      if ($.touches.length !== 1) return;
      const [G, Z] = x($);
      M(G, Z), P.capture && !P.passive && Math.abs(_.value) > Math.abs(v.value) && $.preventDefault(), !C.value && k.value && (C.value = !0), C.value && i?.($);
    }, P),
    Rr(e, ["touchend", "touchcancel"], L, P)
  ];
  return {
    isSwiping: C,
    direction: S,
    coordsStart: c,
    coordsEnd: f,
    lengthX: _,
    lengthY: v,
    stop: () => le.forEach(($) => $())
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
    let a = t, i = e, n = Uy(), l = My(), s = /* @__PURE__ */ j([]), c = q(() => s.value.reduce((ie, A) => (ie[~~A.id] = A) && ie, {})), f = q(() => s.value.length), _ = /* @__PURE__ */ j(null), v = /* @__PURE__ */ j(!1), m = /* @__PURE__ */ j({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), y = /* @__PURE__ */ j({
      splitter: null,
      timeoutId: null
    }), k = q(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": m.value.dragging,
      "splitpanes--ready": v.value
    })), C = () => {
      document.addEventListener("mousemove", F, { passive: !1 }), document.addEventListener("mouseup", M), "ontouchstart" in window && (document.addEventListener("touchmove", F, { passive: !1 }), document.addEventListener("touchend", M));
    }, S = () => {
      document.removeEventListener("mousemove", F, { passive: !1 }), document.removeEventListener("mouseup", M), "ontouchstart" in window && (document.removeEventListener("touchmove", F, { passive: !1 }), document.removeEventListener("touchend", M));
    }, x = (ie, A) => {
      let R = ie.target.closest(".splitpanes__splitter");
      if (R) {
        let { left: I, top: O } = R.getBoundingClientRect(), { clientX: N, clientY: X } = "ontouchstart" in window && ie.touches ? ie.touches[0] : ie;
        m.value.cursorOffset = i.horizontal ? X - O : N - I;
      }
      C(), m.value.mouseDown = !0, m.value.activeSplitter = A, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, F = (ie) => {
      m.value.mouseDown && (ie.preventDefault(), m.value.dragging || (window.getSelection()?.removeAllRanges(), m.value.dragging = !0), requestAnimationFrame(() => {
        Z($(ie)), De("resize", { event: ie }, !0);
      }));
    }, M = (ie) => {
      m.value.dragging && (window.getSelection()?.removeAllRanges(), De("resized", { event: ie }, !0)), m.value.mouseDown = !1, m.value.activeSplitter = null, setTimeout(() => {
        m.value.dragging = !1, S(), document.documentElement.style.cursor = "";
      }, 100);
    }, P = (ie, A) => {
      "ontouchstart" in window && (ie.preventDefault(), y.value.splitter === A ? (clearTimeout(y.value.timeoutId), y.value.timeoutId = null, L(ie, A), y.value.splitter = null) : (y.value.splitter = A, y.value.timeoutId = setTimeout(() => y.value.splitter = null, 500))), m.value.dragging || De("splitter-click", {
        event: ie,
        index: A
      }, !0);
    }, L = (ie, A) => {
      if (De("splitter-dblclick", {
        event: ie,
        index: A
      }, !0), i.maximizePanes) {
        let R = 0;
        s.value = s.value.map((I, O) => (I.size = O === A ? I.max : I.min, O !== A && (R += I.min), I)), s.value[A].size -= R, De("pane-maximize", {
          event: ie,
          index: A,
          pane: s.value[A]
        }), De("resized", {
          event: ie,
          index: A
        }, !0);
      }
    }, le = (ie, A) => {
      if (!i.keyboardStep) return;
      let R = i.horizontal ? ie.key === "ArrowDown" : ie.key === "ArrowRight", I = i.horizontal ? ie.key === "ArrowUp" : ie.key === "ArrowLeft";
      if (!R && !I) return;
      ie.preventDefault(), m.value.activeSplitter = A;
      let O = (R ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), N = V(A) + s.value[A].size;
      ee(Math.min(Math.max(N + O * i.keyboardStep, 0), 100)), De("resize", { event: ie }, !0), De("resized", { event: ie }, !0), m.value.activeSplitter = null;
    }, te = (ie, A) => {
      let R = c.value[A];
      R && De("pane-click", {
        event: ie,
        index: R.index,
        pane: R
      });
    }, $ = (ie) => {
      let A = _.value.getBoundingClientRect(), { clientX: R, clientY: I } = "ontouchstart" in window && ie.touches ? ie.touches[0] : ie;
      return {
        x: R - (i.horizontal ? 0 : m.value.cursorOffset) - A.left,
        y: I - (i.horizontal ? m.value.cursorOffset : 0) - A.top
      };
    }, G = (ie) => {
      ie = ie[i.horizontal ? "y" : "x"];
      let A = _.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (ie = A - ie), ie * 100 / A;
    }, Z = (ie) => {
      ee(G(ie));
    }, ee = (ie) => {
      let A = m.value.activeSplitter;
      if (A === null || A >= s.value.length - 1) return;
      let R = {
        prevPanesSize: V(A),
        nextPanesSize: K(A),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, I = 0 + (i.pushOtherPanes ? 0 : R.prevPanesSize), O = 100 - (i.pushOtherPanes ? 0 : R.nextPanesSize);
      ie = Math.max(Math.min(ie, O), I);
      let N = [A, A + 1], X = s.value[N[0]] || null, ne = s.value[N[1]] || null, de = X !== null && X.max < 100 && ie >= X.max + R.prevPanesSize, ve = ne !== null && ne.max < 100 && ie <= 100 - (ne.max + K(A + 1));
      if (de || ve) {
        de ? (X.size = X.max, ne.size = Math.min(Math.max(100 - X.max - R.prevPanesSize - R.nextPanesSize, ne.min), ne.max)) : (X.size = Math.min(Math.max(100 - ne.max - R.prevPanesSize - K(A + 1), X.min), X.max), ne.size = ne.max);
        return;
      }
      if (i.pushOtherPanes) {
        let fe = re(R, ie);
        if (!fe) return;
        ({ sums: R, panesToResize: N } = fe), X = s.value[N[0]] || null, ne = s.value[N[1]] || null;
      }
      X !== null && (X.size = Math.min(Math.max(ie - R.prevPanesSize - R.prevReachedMinPanes, X.min), X.max)), ne !== null && (ne.size = Math.min(Math.max(100 - ie - R.nextPanesSize - R.nextReachedMinPanes, ne.min), ne.max));
    }, re = (ie, A) => {
      let R = m.value.activeSplitter, I = [R, R + 1];
      if (A < ie.prevPanesSize + s.value[I[0]].min) {
        if (I[0] = D(R).index, ie.prevReachedMinPanes = 0, I[0] < R && s.value.forEach((O, N) => {
          N > I[0] && N <= R && (O.size = O.min, ie.prevReachedMinPanes += O.min);
        }), I[0] === void 0) return ie.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((O, N) => {
          N > 0 && N <= R && (O.size = O.min, ie.prevReachedMinPanes += O.min);
        }), s.value[I[1]].size = 100 - ie.prevReachedMinPanes - s.value[0].min - ie.prevPanesSize - ie.nextPanesSize, null;
        ie.prevPanesSize = V(I[0]);
      }
      return A > 100 - ie.nextPanesSize - s.value[I[1]].min && (I[1] = Y(R).index, ie.nextReachedMinPanes = 0, I[1] > R + 1 && s.value.forEach((O, N) => {
        N > R && N < I[1] && (O.size = O.min, ie.nextReachedMinPanes += O.min);
      }), ie.nextPanesSize = I[1] === void 0 ? 0 : K(I[1] - 1), I[1] === void 0) ? (ie.nextReachedMinPanes = 0, s.value.forEach((O, N) => {
        N >= R + 1 && (O.size = O.min, ie.nextReachedMinPanes += O.min);
      }), I[0] !== void 0 && (s.value[I[0]].size = 100 - ie.prevPanesSize - K(I[0] - 1)), null) : {
        sums: ie,
        panesToResize: I
      };
    }, V = (ie) => s.value.reduce((A, R, I) => A + (I < ie ? R.size : 0), 0), K = (ie) => s.value.reduce((A, R, I) => A + (I > ie + 1 ? R.size : 0), 0), D = (ie) => [...s.value].reverse().find((A) => A.index < ie && A.size > A.min) || {}, Y = (ie) => s.value.find((A) => A.index > ie + 1 && A.size > A.min) || {}, ae = () => {
      let ie = Array.from(_.value?.children || []);
      for (let A of ie) {
        let R = A.classList.contains("splitpanes__pane"), I = A.classList.contains("splitpanes__splitter");
        !R && !I && (A.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, J = (ie, A, R = !1) => {
      let I = ie - 1, O = document.createElement("div");
      O.classList.add("splitpanes__splitter"), R || (O.onmousedown = (N) => x(N, I), typeof window < "u" && "ontouchstart" in window && (O.ontouchstart = (N) => x(N, I)), O.onclick = (N) => P(N, I + 1), i.keyboardStep && (O.setAttribute("tabindex", "0"), O.setAttribute("role", "separator"), O.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), O.onkeydown = (N) => le(N, I))), O.ondblclick = (N) => L(N, I + 1), A.parentNode.insertBefore(O, A);
    }, U = (ie) => {
      ie.onmousedown = null, ie.onclick = null, ie.ondblclick = null, ie.onkeydown = null, ie.remove();
    }, H = () => {
      let ie = Array.from(_.value?.children || []);
      for (let R of ie) R.className.includes("splitpanes__splitter") && U(R);
      let A = 0;
      for (let R of ie) R.className.includes("splitpanes__pane") && (!A && i.firstSplitter ? J(A, R, !0) : A && J(A, R), A++);
    }, ye = ({ uid: ie, ...A }) => {
      let R = c.value[ie];
      for (let [I, O] of Object.entries(A)) R[I] = O;
    }, Re = !1, $e = (ie) => {
      let A = -1;
      Array.from(_.value?.children || []).some((R) => (R.className.includes("splitpanes__pane") && A++, R.isSameNode(ie.el))), s.value.splice(A, 0, {
        ...ie,
        index: A
      }), s.value.forEach((R, I) => R.index = I), v.value && !Re && (Re = !0, Pt(() => {
        H(), Ze({ addedPane: s.value[A] }), De("pane-add", { pane: s.value[A] }), Re = !1;
      }));
    }, Ue = (ie) => {
      let A = s.value.findIndex((I) => I.id === ie);
      s.value[A].el = null;
      let R = s.value.splice(A, 1)[0];
      s.value.forEach((I, O) => I.index = O), Pt(() => {
        H(), De("pane-remove", { pane: R }), Ze({ removedPane: {
          ...R
        } });
      });
    }, Ze = (ie = {}) => {
      !ie.addedPane && !ie.removedPane ? _e() : s.value.some((A) => A.givenSize !== null || A.min || A.max < 100) ? Oe(ie) : ct(), v.value && De("resized");
    }, ct = () => {
      let ie = 100 / f.value, A = 100, R = [], I = [];
      for (let O of s.value) O.size = Math.max(Math.min(ie, O.max), O.min), A -= O.size, O.size >= O.max && R.push(O.id), O.size <= O.min && I.push(O.id);
      Math.abs(A) > 0.1 && ge(A, R, I);
    }, _e = () => {
      let ie = 100, A = [], R = [], I = 0;
      for (let N of s.value) ie -= N.size, N.givenSize !== null && I++, N.size >= N.max && A.push(N.id), N.size <= N.min && R.push(N.id);
      let O = 100;
      if (ie > 0.1) {
        for (let N of s.value) N.givenSize === null && (N.size = Math.max(Math.min(ie / (f.value - I), N.max), N.min)), O -= N.size;
        O > 0.1 && ge(O, A, R);
      }
    }, Oe = ({ addedPane: ie, removedPane: A } = {}) => {
      let R = s.value.reduce((de, ve) => de + (ve.givenSize === null ? 0 : ve.givenSize), 0), I = s.value.filter((de) => de.givenSize === null).length, O = I > 0 ? (100 - R) / I : 0, N = 0, X = [], ne = [];
      for (let de of s.value) N -= de.size, de.size >= de.max && X.push(de.id), de.size <= de.min && ne.push(de.id);
      if (!(Math.abs(N) < 0.1)) {
        N = 100;
        for (let de of s.value) de.givenSize === null && (de.size = Math.max(Math.min(O, de.max), de.min)), N -= de.size, de.size >= de.max && X.push(de.id), de.size <= de.min && ne.push(de.id);
        Math.abs(N) > 0.1 && ge(N, X, ne);
      }
    }, ge = (ie, A, R) => {
      let I;
      I = ie > 0 ? ie / (f.value - A.length) : ie / (f.value - R.length), s.value.forEach((O, N) => {
        if (ie > 0 && !A.includes(O.id)) {
          let X = Math.max(Math.min(O.size + I, O.max), O.min), ne = X - O.size;
          ie -= ne, O.size = X;
        } else if (!R.includes(O.id)) {
          let X = Math.max(Math.min(O.size + I, O.max), O.min), ne = X - O.size;
          ie -= ne, O.size = X;
        }
      }), Math.abs(ie) > 0.1 && v.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, De = (ie, A = void 0, R = !1) => {
      let I = A?.index ?? m.value.activeSplitter ?? null;
      a(ie, {
        ...A,
        ...I !== null && { index: I },
        ...R && I !== null && {
          prevPane: s.value[I - +!!i.firstSplitter],
          nextPane: s.value[I + +!i.firstSplitter]
        },
        panes: s.value.map((O) => ({
          min: O.min,
          max: O.max,
          size: O.size
        }))
      });
    };
    Ge(() => i.firstSplitter, () => H()), Ge(() => i.horizontal, (ie) => Pt(() => {
      a("direction-changed", {
        horizontal: ie,
        panes: s.value.map((A) => ({
          min: A.min,
          max: A.max,
          size: A.size
        }))
      });
    })), Tt(() => {
      ae(), H(), Ze(), De("ready"), v.value = !0;
    }), Ca(() => v.value = !1);
    let nt = () => {
      let { class: ie, ...A } = n;
      return da("div", {
        ref: _,
        class: [k.value, ie],
        ...A
      }, l.default?.());
    };
    return Ra("panes", s), Ra("indexedPanes", c), Ra("horizontal", q(() => i.horizontal)), Ra("requestUpdate", ye), Ra("onPaneAdd", $e), Ra("onPaneRemove", Ue), Ra("onPaneClick", te), (ie, A) => (d(), Pe(xd(nt)));
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
    let t = e, a = Jt("requestUpdate"), i = Jt("onPaneAdd"), n = Jt("horizontal"), l = Jt("onPaneRemove"), s = Jt("onPaneClick"), c = Tn()?.uid, f = Jt("indexedPanes"), _ = q(() => f.value[c]), v = /* @__PURE__ */ j(null), m = q(() => {
      let S = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(S, k.value), y.value);
    }), y = q(() => {
      let S = parseFloat(t.minSize);
      return isNaN(S) ? 0 : S;
    }), k = q(() => {
      let S = parseFloat(t.maxSize);
      return isNaN(S) ? 100 : S;
    }), C = q(() => {
      let S = _.value?.size ?? (t.size === void 0 ? void 0 : m.value);
      return S === void 0 ? "" : `${n.value ? "height" : "width"}: ${S}%`;
    });
    return Ge(() => m.value, (S) => a({
      uid: c,
      size: S
    })), Ge(() => y.value, (S) => a({
      uid: c,
      min: S
    })), Ge(() => k.value, (S) => a({
      uid: c,
      max: S
    })), Tt(() => {
      i({
        id: c,
        el: v.value,
        min: y.value,
        max: k.value,
        givenSize: t.size === void 0 ? null : m.value,
        size: m.value
      });
    }), Ca(() => l(c)), (S, x) => (d(), p("div", {
      ref_key: "paneEl",
      ref: v,
      class: "splitpanes__pane",
      onClick: x[0] ||= (F) => u(s)(F, S._.uid),
      style: ha(C.value)
    }, [He(S.$slots, "default")], 4));
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
    const a = Object.values(t.translations[""] ?? {}).map(({ msgid: i, msgid_plural: n, msgstr: l }) => n !== void 0 ? [`_${i}_::_${n}_`, l] : [i, l[0]]);
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
    return b("", t, a, void 0, { bundle: this.bundle });
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
    return yt("", t, a, i, n, { bundle: this.bundle });
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
        const n = Object.fromEntries(Object.entries(i).map(([l, s]) => [
          l,
          {
            msgid: l,
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
const $0 = /* @__PURE__ */ Symbol(""), [x0] = window.OC?.config?.version?.split(".") ?? [], Sb = Number.parseInt(x0 ?? "35"), N0 = Sb < 32, En = Sb < 34, O0 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function R0() {
  return Jt(O0, {
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
    const a = e, i = t, { formBoxItemClass: n } = R0(), l = Jt($0, null) !== null, s = q(() => l && a.to ? "RouterLink" : a.href ? "a" : "button"), c = q(() => s.value === "button" && typeof a.pressed == "boolean"), f = q(() => a.pressed ? "primary" : a.pressed === !1 && a.variant === "primary" ? "secondary" : a.variant), _ = q(() => f.value.startsWith("tertiary")), v = q(() => a.alignment.split("-")[0]), m = q(() => a.alignment.includes("-")), y = Jt("NcPopover:trigger:attrs", () => ({}), !1), k = q(() => y()), C = q(() => {
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
    function S(x) {
      c.value && i("update:pressed", !a.pressed), i("click", x);
    }
    return (x, F) => (d(), Pe(xd(s.value), aa({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${f.value}`]: f.value,
          "button-vue--tertiary": _.value,
          "button-vue--wide": e.wide,
          [`button-vue--${v.value}`]: v.value !== "center",
          "button-vue--reverse": m.value,
          "button-vue--legacy": u(N0),
          "button-vue--legacy34": u(En)
        },
        u(n)
      ]],
      "aria-label": e.ariaLabel
    }, C.value, { onClick: S }), {
      default: ke(() => [
        r("span", I0, [
          r("span", L0, [
            He(x.$slots, "icon", {}, void 0, !0)
          ]),
          r("span", P0, [
            He(x.$slots, "default", {}, () => [
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
    const t = e, a = q(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = q(() => {
      if (!t.svg || t.path)
        return;
      const n = ub.sanitize(t.svg), l = new DOMParser().parseFromString(n, "image/svg+xml");
      return l.querySelector("parsererror") ? "" : (l.documentElement.id && l.documentElement.removeAttribute("id"), l.documentElement.outerHTML);
    });
    return (n, l) => (d(), p("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Te(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (d(), p("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, z0)) : (d(), p("svg", M0, [
        r("path", { d: e.path }, null, 8, U0)
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
var Nt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(Nt || {});
class q0 {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, a, i) {
    let n = "[" + Nt[a].toUpperCase() + "] ";
    return i && i.app && (n += i.app + ": "), typeof t == "string" ? n + t : (n += `Unexpected ${t.name}`, t.message && (n += ` "${t.message}"`), a === Nt.Debug && t.stack && (n += `

Stack trace:
${t.stack}`), n);
  }
  log(t, a, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof a == "object" && i?.error === void 0 && (i.error = a), t) {
        case Nt.Debug:
          console.debug(this.formatMessage(a, Nt.Debug, i), i);
          break;
        case Nt.Info:
          console.info(this.formatMessage(a, Nt.Info, i), i);
          break;
        case Nt.Warn:
          console.warn(this.formatMessage(a, Nt.Warn, i), i);
          break;
        case Nt.Error:
          console.error(this.formatMessage(a, Nt.Error, i), i);
          break;
        case Nt.Fatal:
        default:
          console.error(this.formatMessage(a, Nt.Fatal, i), i);
          break;
      }
  }
  debug(t, a) {
    this.log(Nt.Debug, t, Object.assign({}, this.context, a));
  }
  info(t, a) {
    this.log(Nt.Info, t, Object.assign({}, this.context, a));
  }
  warn(t, a) {
    this.log(Nt.Warn, t, Object.assign({}, this.context, a));
  }
  error(t, a) {
    this.log(Nt.Error, t, Object.assign({}, this.context, a));
  }
  fatal(t, a) {
    this.log(Nt.Fatal, t, Object.assign({}, this.context, a));
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
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? Nt.Warn, window._oc_debug && (t.context.level = Nt.Debug), document.removeEventListener("readystatechange", a)) : document.addEventListener("readystatechange", a);
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
  X0 = "0.3.0-alpha.9";
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
    Ge(t, a), Tt(() => {
      a(t.value);
    }), Ca(() => {
      t.value && a(!1);
    });
    function a(i = !0) {
      const n = document.querySelector(".app-navigation .app-navigation-toggle");
      n && (n.style.display = i ? "none" : "", i === !0 && Mi("toggle-navigation", { open: !1 }));
    }
    return (i, n) => (d(), Pe(u(ci), {
      "aria-label": u(Ft)("Go back to the list"),
      class: Te(["app-details-toggle", { "app-details-toggle--mobile": u(t) }]),
      title: u(Ft)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: ke(() => [
        ce(u(mu), {
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
function lw(e, t, a, i, n, l) {
  const s = Xe("NcAppContentDetailsToggle"), c = Xe("Pane"), f = Xe("Splitpanes");
  return d(), p("main", {
    id: "app-content-vue",
    class: Te(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    a.pageHeading ? (d(), p("h1", iw, o(a.pageHeading), 1)) : T("", !0),
    e.$slots.list ? (d(), p(W, { key: 1 }, [
      i.isMobile || a.layout === "no-split" ? (d(), p("div", {
        key: 0,
        class: Te(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": a.showDetails,
          "app-content-wrapper--show-list": !a.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        a.showDetails ? (d(), Pe(s, {
          key: 0,
          onClick: Se(l.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : T("", !0),
        be(r("div", nw, [
          He(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [rr, !a.showDetails]
        ]),
        a.showDetails ? He(e.$slots, "default", { key: 1 }, void 0, !0) : T("", !0)
      ], 2)) : a.layout === "vertical-split" || a.layout === "horizontal-split" ? (d(), p("div", rw, [
        ce(f, {
          horizontal: a.layout === "horizontal-split",
          class: Te(["default-theme", {
            "splitpanes--horizontal": a.layout === "horizontal-split",
            "splitpanes--vertical": a.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: l.handlePaneResize
        }, {
          default: ke(() => [
            ce(c, {
              class: "splitpanes__pane-list",
              size: n.listPaneSize || l.paneDefaults.list.size,
              minSize: l.paneDefaults.list.min,
              maxSize: l.paneDefaults.list.max
            }, {
              default: ke(() => [
                He(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            ce(c, {
              class: "splitpanes__pane-details",
              size: l.detailsPaneSize,
              minSize: l.paneDefaults.details.min,
              maxSize: l.paneDefaults.details.max
            }, {
              default: ke(() => [
                He(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : T("", !0)
    ], 64)) : T("", !0),
    e.$slots.list ? T("", !0) : He(e.$slots, "default", { key: 2 }, void 0, !0)
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
  var n = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), l = n === "" || n === "true", s = l || a && t && // closest does not exist on shadow roots, so we fall back to a manual
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
  for (var n = [], l = Array.from(t); l.length; ) {
    var s = l.shift();
    if (!_o(s, !1))
      if (s.tagName === "SLOT") {
        var c = s.assignedElements(), f = c.length ? c : s.children, _ = wo(f, !0, i);
        i.flatten ? n.push.apply(n, _) : n.push({
          scopeParent: s,
          candidates: _
        });
      } else {
        var v = sr.call(s, mo);
        v && i.filter(s) && (a || !t.includes(s)) && n.push(s);
        var m = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), y = !_o(m, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (m && y) {
          var k = wo(m === !0 ? s.children : m.children, !0, i);
          i.flatten ? n.push.apply(n, k) : n.push({
            scopeParent: s,
            candidates: k
          });
        } else
          l.unshift.apply(l, s.children);
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
}, Nb = function(t) {
  return t.tagName === "INPUT";
}, dw = function(t) {
  return Nb(t) && t.type === "hidden";
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
  var l = hw(n, t.form);
  return !l || l === t;
}, vw = function(t) {
  return Nb(t) && t.type === "radio";
}, bw = function(t) {
  return vw(t) && !pw(t);
}, gw = function(t) {
  var a, i = t && yo(t), n = (a = i) === null || a === void 0 ? void 0 : a.host, l = !1;
  if (i && i !== t) {
    var s, c, f;
    for (l = !!((s = n) !== null && s !== void 0 && (c = s.ownerDocument) !== null && c !== void 0 && c.contains(n) || t != null && (f = t.ownerDocument) !== null && f !== void 0 && f.contains(t)); !l && n; ) {
      var _, v, m;
      i = yo(n), n = (_ = i) === null || _ === void 0 ? void 0 : _.host, l = !!((v = n) !== null && v !== void 0 && (m = v.ownerDocument) !== null && m !== void 0 && m.contains(n));
    }
  }
  return l;
}, ip = function(t) {
  var a = t.getBoundingClientRect(), i = a.width, n = a.height;
  return i === 0 && n === 0;
}, mw = function(t, a) {
  var i = a.displayCheck, n = a.getShadowRoot;
  if (i === "full-native" && "checkVisibility" in t) {
    var l = t.checkVisibility({
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
    return !l;
  }
  var s = getComputedStyle(t), c = s.visibility;
  if (c === "hidden" || c === "collapse")
    return !0;
  var f = sr.call(t, "details>summary:first-of-type"), _ = f ? t.parentElement : t;
  if (sr.call(_, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof n == "function") {
      for (var v = t; t; ) {
        var m = t.parentElement, y = yo(t);
        if (m && !m.shadowRoot && n(m) === !0)
          return ip(t);
        t.assignedSlot ? t = t.assignedSlot : !m && y !== t.ownerDocument ? t = y.host : t = m;
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
}, Ob = function(t) {
  var a = [], i = [];
  return t.forEach(function(n, l) {
    var s = !!n.scopeParent, c = s ? n.scopeParent : n, f = uw(c, s), _ = s ? Ob(n.candidates) : c;
    f === 0 ? s ? a.push.apply(a, _) : a.push(c) : i.push({
      documentOrder: l,
      tabIndex: f,
      item: n,
      isScope: s,
      content: _
    });
  }), i.sort(cw).reduce(function(n, l) {
    return l.isScope ? n.push.apply(n, l.content) : n.push(l.content), n;
  }, []).concat(a);
}, ww = function(t, a) {
  a = a || {};
  var i;
  return a.getShadowRoot ? i = wo([t], a.includeContainer, {
    filter: Zc.bind(null, a),
    flatten: !1,
    getShadowRoot: a.getShadowRoot,
    shadowRootFilter: _w
  }) : i = $b(t, a.includeContainer, Zc.bind(null, a)), Ob(i);
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
        e: function(f) {
          throw f;
        },
        f: n
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var l, s = !0, c = !1;
  return {
    s: function() {
      a = a.call(e);
    },
    n: function() {
      var f = a.next();
      return s = f.done, f;
    },
    e: function(f) {
      c = !0, l = f;
    },
    f: function() {
      try {
        s || a.return == null || a.return();
      } finally {
        if (c) throw l;
      }
    }
  };
}
function Tw(e, t, a) {
  return (t = Nw(t)) in e ? Object.defineProperty(e, t, {
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
function Nw(e) {
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
}, Ow = function(t) {
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
  var i = a?.document || document, n = a?.trapStack || Pw, l = lp({
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
  }, c, f = function(D, Y, ae) {
    return D && D[Y] !== void 0 ? D[Y] : l[ae || Y];
  }, _ = function(D, Y) {
    var ae = typeof Y?.composedPath == "function" ? Y.composedPath() : void 0;
    return s.containerGroups.findIndex(function(J) {
      var U = J.container, H = J.tabbableNodes;
      return U.contains(D) || ae?.includes(U) || H.find(function(ye) {
        return ye === D;
      });
    });
  }, v = function(D) {
    var Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ae = Y.hasFallback, J = ae === void 0 ? !1 : ae, U = Y.params, H = U === void 0 ? [] : U, ye = l[D];
    if (typeof ye == "function" && (ye = ye.apply(void 0, $w(H))), ye === !0 && (ye = void 0), !ye) {
      if (ye === void 0 || ye === !1)
        return ye;
      throw new Error("`".concat(D, "` was specified but was not a node, or did not return a node"));
    }
    var Re = ye;
    if (typeof ye == "string") {
      try {
        Re = i.querySelector(ye);
      } catch ($e) {
        throw new Error("`".concat(D, '` appears to be an invalid selector; error="').concat($e.message, '"'));
      }
      if (!Re && !J)
        throw new Error("`".concat(D, "` as selector refers to no known node"));
    }
    return Re;
  }, m = function(D) {
    var Y = D.activeElement;
    return Y ? Y.shadowRoot && Y.shadowRoot.activeElement !== null ? m(Y.shadowRoot) : Y : null;
  }, y = function() {
    var D = v("initialFocus", {
      hasFallback: !0
    });
    if (D === !1)
      return !1;
    if (D === void 0 || D && !Sc(D, l.tabbableOptions)) {
      var Y = m(i);
      if (_(Y) >= 0)
        D = Y;
      else {
        var ae = s.tabbableGroups[0], J = ae && ae.firstTabbableNode;
        D = J || v("fallbackFocus");
      }
    } else D === null && (D = v("fallbackFocus"));
    if (!D)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return D;
  }, k = function() {
    if (s.containerGroups = s.containers.map(function(D) {
      var Y = ww(D, l.tabbableOptions), ae = kw(D, l.tabbableOptions), J = Y.length > 0 ? Y[0] : void 0, U = Y.length > 0 ? Y[Y.length - 1] : void 0, H = ae.find(function($e) {
        return kr($e);
      }), ye = ae.slice().reverse().find(function($e) {
        return kr($e);
      }), Re = !!Y.find(function($e) {
        return er($e) > 0;
      });
      return {
        container: D,
        tabbableNodes: Y,
        focusableNodes: ae,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Re,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: J,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: U,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: H,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: ye,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Ue) {
          var Ze = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, ct = Y.indexOf(Ue);
          return ct < 0 ? Ze ? ae.slice(ae.indexOf(Ue) + 1).find(function(_e) {
            return kr(_e);
          }) : ae.slice(0, ae.indexOf(Ue)).reverse().find(function(_e) {
            return kr(_e);
          }) : Y[ct + (Ze ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(D) {
      return D.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !v("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(D) {
      return D.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, C = function(D) {
    if (D !== !1 && D !== m(document)) {
      if (!D || !D.focus) {
        C(y());
        return;
      }
      D.focus({
        preventScroll: !!l.preventScroll
      }), s.mostRecentlyFocusedNode = D, Ow(D) && D.select();
    }
  }, S = function(D) {
    var Y = v("setReturnFocus", {
      params: [D]
    });
    return Y || (Y === !1 ? !1 : D);
  }, x = function(D) {
    var Y = D.target, ae = D.event, J = D.isBackward, U = J === void 0 ? !1 : J;
    Y = Y || Hs(ae), k();
    var H = null;
    if (s.tabbableGroups.length > 0) {
      var ye = _(Y, ae), Re = ye >= 0 ? s.containerGroups[ye] : void 0;
      if (ye < 0)
        U ? H = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : H = s.tabbableGroups[0].firstTabbableNode;
      else if (U) {
        var $e = s.tabbableGroups.findIndex(function(ge) {
          var De = ge.firstTabbableNode;
          return Y === De;
        });
        if ($e < 0 && (Re.container === Y || Sc(Y, l.tabbableOptions) && !kr(Y, l.tabbableOptions) && !Re.nextTabbableNode(Y, !1)) && ($e = ye), $e >= 0) {
          var Ue = $e === 0 ? s.tabbableGroups.length - 1 : $e - 1, Ze = s.tabbableGroups[Ue];
          H = er(Y) >= 0 ? Ze.lastTabbableNode : Ze.lastDomTabbableNode;
        } else El(ae) || (H = Re.nextTabbableNode(Y, !1));
      } else {
        var ct = s.tabbableGroups.findIndex(function(ge) {
          var De = ge.lastTabbableNode;
          return Y === De;
        });
        if (ct < 0 && (Re.container === Y || Sc(Y, l.tabbableOptions) && !kr(Y, l.tabbableOptions) && !Re.nextTabbableNode(Y)) && (ct = ye), ct >= 0) {
          var _e = ct === s.tabbableGroups.length - 1 ? 0 : ct + 1, Oe = s.tabbableGroups[_e];
          H = er(Y) >= 0 ? Oe.firstTabbableNode : Oe.firstDomTabbableNode;
        } else El(ae) || (H = Re.nextTabbableNode(Y));
      }
    } else
      H = v("fallbackFocus");
    return H;
  }, F = function(D) {
    var Y = Hs(D);
    if (!(_(Y, D) >= 0)) {
      if (pl(l.clickOutsideDeactivates, D)) {
        c.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: l.returnFocusOnDeactivate
        });
        return;
      }
      pl(l.allowOutsideClick, D) || D.preventDefault();
    }
  }, M = function(D) {
    var Y = Hs(D), ae = _(Y, D) >= 0;
    if (ae || Y instanceof Document)
      ae && (s.mostRecentlyFocusedNode = Y);
    else {
      D.stopImmediatePropagation();
      var J, U = !0;
      if (s.mostRecentlyFocusedNode)
        if (er(s.mostRecentlyFocusedNode) > 0) {
          var H = _(s.mostRecentlyFocusedNode), ye = s.containerGroups[H].tabbableNodes;
          if (ye.length > 0) {
            var Re = ye.findIndex(function($e) {
              return $e === s.mostRecentlyFocusedNode;
            });
            Re >= 0 && (l.isKeyForward(s.recentNavEvent) ? Re + 1 < ye.length && (J = ye[Re + 1], U = !1) : Re - 1 >= 0 && (J = ye[Re - 1], U = !1));
          }
        } else
          s.containerGroups.some(function($e) {
            return $e.tabbableNodes.some(function(Ue) {
              return er(Ue) > 0;
            });
          }) || (U = !1);
      else
        U = !1;
      U && (J = x({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: l.isKeyBackward(s.recentNavEvent)
      })), C(J || s.mostRecentlyFocusedNode || y());
    }
    s.recentNavEvent = void 0;
  }, P = function(D) {
    var Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = D;
    var ae = x({
      event: D,
      isBackward: Y
    });
    ae && (El(D) && D.preventDefault(), C(ae));
  }, L = function(D) {
    (l.isKeyForward(D) || l.isKeyBackward(D)) && P(D, l.isKeyBackward(D));
  }, le = function(D) {
    Rw(D) && pl(l.escapeDeactivates, D) !== !1 && (D.preventDefault(), c.deactivate());
  }, te = function(D) {
    var Y = Hs(D);
    _(Y, D) >= 0 || pl(l.clickOutsideDeactivates, D) || pl(l.allowOutsideClick, D) || (D.preventDefault(), D.stopImmediatePropagation());
  }, $ = function() {
    if (s.active) {
      Li.activateTrap(n, c);
      var D;
      return l.delayInitialFocus ? D = new Promise(function(Y) {
        s.delayInitialFocusTimer = sp(function() {
          C(y()), Y();
        });
      }) : C(y()), i.addEventListener("focusin", M, !0), i.addEventListener("mousedown", F, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", F, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", te, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", L, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", le), D;
    }
  }, G = function(D) {
    s.active && !s.paused && c._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var Y = /* @__PURE__ */ new Set(), ae = /* @__PURE__ */ new Set(), J = np(D), U;
    try {
      for (J.s(); !(U = J.n()).done; ) {
        var H = U.value;
        Y.add(H);
        for (var ye = typeof ShadowRoot < "u" && H.getRootNode() instanceof ShadowRoot, Re = H; Re; ) {
          Y.add(Re);
          var $e = Re.parentElement, Ue = [];
          $e ? Ue = $e.children : !$e && ye && (Ue = Re.getRootNode().children, $e = Re.getRootNode().host, ye = typeof ShadowRoot < "u" && $e.getRootNode() instanceof ShadowRoot);
          var Ze = np(Ue), ct;
          try {
            for (Ze.s(); !(ct = Ze.n()).done; ) {
              var _e = ct.value;
              ae.add(_e);
            }
          } catch (Oe) {
            Ze.e(Oe);
          } finally {
            Ze.f();
          }
          Re = $e;
        }
      }
    } catch (Oe) {
      J.e(Oe);
    } finally {
      J.f();
    }
    Y.forEach(function(Oe) {
      ae.delete(Oe);
    }), s.adjacentElements = ae;
  }, Z = function() {
    if (s.active)
      return i.removeEventListener("focusin", M, !0), i.removeEventListener("mousedown", F, !0), i.removeEventListener("touchstart", F, !0), i.removeEventListener("click", te, !0), i.removeEventListener("keydown", L, !0), i.removeEventListener("keydown", le), c;
  }, ee = function(D) {
    var Y = s.mostRecentlyFocusedNode;
    if (Y) {
      var ae = D.some(function(U) {
        var H = Array.from(U.removedNodes);
        return H.some(function(ye) {
          return ye === Y || typeof ye.contains == "function" && ye.contains(Y);
        });
      });
      if (ae && s.containers.some(function(U) {
        return U?.isConnected;
      })) {
        k();
        var J = y();
        C(J);
      }
    }
  }, re = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(ee) : void 0, V = function() {
    re && (re.disconnect(), s.active && !s.paused && s.containers.map(function(D) {
      re.observe(D, {
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
    activate: function(D) {
      if (s.active)
        return this;
      var Y = f(D, "onActivate"), ae = f(D, "onPostActivate"), J = f(D, "checkCanFocusTrap"), U = Li.getActiveTrap(n), H = !1;
      if (U && !U.paused) {
        var ye;
        (ye = U._setSubtreeIsolation) === null || ye === void 0 || ye.call(U, !1), H = !0;
      }
      try {
        J || k(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = m(i), Y?.({
          trap: c
        });
        var Re = function() {
          J && k();
          var Ze = function() {
            c._setSubtreeIsolation(!0), V(), ae?.({
              trap: c
            });
          }, ct = $();
          ct ? ct.then(Ze) : Ze();
        };
        if (J)
          return J(s.containers.concat()).then(Re, Re), this;
        Re();
      } catch (Ue) {
        if (U === Li.getActiveTrap(n) && H) {
          var $e;
          ($e = U._setSubtreeIsolation) === null || $e === void 0 || $e.call(U, !0);
        }
        throw Ue;
      }
      return this;
    },
    deactivate: function(D) {
      if (!s.active)
        return this;
      var Y = lp({
        onDeactivate: l.onDeactivate,
        onPostDeactivate: l.onPostDeactivate,
        checkCanReturnFocus: l.checkCanReturnFocus
      }, D);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || c._setSubtreeIsolation(!1), s.alreadySilent.clear(), Z(), s.active = !1, s.paused = !1, V(), Li.deactivateTrap(n, c);
      var ae = f(Y, "onDeactivate"), J = f(Y, "onPostDeactivate"), U = f(Y, "checkCanReturnFocus"), H = f(Y, "delayReturnFocus"), ye = f(Y, "returnFocus", "returnFocusOnDeactivate");
      ae?.({
        trap: c
      });
      var Re = function() {
        ye && C(S(s.nodeFocusedBeforeActivation)), J?.({
          trap: c
        });
      }, $e = function() {
        H && ye ? sp(Re) : Re();
      };
      return ye && U ? (U(S(s.nodeFocusedBeforeActivation)).then($e, $e), this) : ($e(), this);
    },
    pause: function(D) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, D)) : this;
    },
    unpause: function(D) {
      return s.active ? (s.manuallyPaused = !1, n[n.length - 1] !== this ? this : this._setPausedState(!1, D)) : this;
    },
    updateContainerElements: function(D) {
      var Y = [].concat(D).filter(Boolean);
      return s.containers = Y.map(function(ae) {
        return typeof ae == "string" ? i.querySelector(ae) : ae;
      }), l.isolateSubtrees && G(s.containers), s.active && (k(), s.paused || c._setSubtreeIsolation(!0)), V(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(D, Y) {
        if (s.paused === D)
          return this;
        if (s.paused = D, D) {
          var ae = f(Y, "onPause"), J = f(Y, "onPostPause");
          ae?.({
            trap: c
          }), Z(), c._setSubtreeIsolation(!1), V(), J?.({
            trap: c
          });
        } else {
          var U = f(Y, "onUnpause"), H = f(Y, "onPostUnpause");
          U?.({
            trap: c
          });
          var ye = function() {
            k();
            var $e = function() {
              c._setSubtreeIsolation(!0), V(), H?.({
                trap: c
              });
            }, Ue = $();
            Ue ? Ue.then($e) : $e();
          };
          ye();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(D) {
        l.isolateSubtrees && s.adjacentElements.forEach(function(Y) {
          var ae;
          D ? l.isolateSubtrees === "aria-hidden" ? ((Y.ariaHidden === "true" || ((ae = Y.getAttribute("aria-hidden")) === null || ae === void 0 ? void 0 : ae.toLowerCase()) === "true") && s.alreadySilent.add(Y), Y.setAttribute("aria-hidden", "true")) : ((Y.inert || Y.hasAttribute("inert")) && s.alreadySilent.add(Y), Y.setAttribute("inert", !0)) : s.alreadySilent.has(Y) || (l.isolateSubtrees === "aria-hidden" ? Y.removeAttribute("aria-hidden") : Y.removeAttribute("inert"));
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
function Fw(e, t, a, i, n, l) {
  return d(), p("ul", {
    ref: "list",
    class: Te(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    r("div", {
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
    const t = Rv(e, "open"), a = q(() => t.value ? Ft("Close navigation") : Ft("Open navigation"));
    return (i, n) => (d(), p("div", Uw, [
      ce(u(ci), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": a.value,
        title: a.value,
        variant: "tertiary",
        onClick: n[0] || (n[0] = (l) => t.value = !t.value)
      }, {
        icon: ke(() => [
          ce(mu, {
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
    ), n = Ey("appNavigationContainer"), l = us(), s = /* @__PURE__ */ j(!l.value), c = q(() => l.value && s.value);
    gy(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), Ge(l, () => {
      s.value = !l.value;
    }), Ge(c, () => {
      v();
    }), Tt(() => {
      i(!0), bb("toggle-navigation", _), Mi("navigation-toggled", {
        open: s.value
      }), a = Md(n.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (l.value && (a.deactivate({ returnFocus: !1 }), f(!1)), !1),
        fallbackFocus: n.value,
        trapStack: Zl(),
        escapeDeactivates: !1
      }), v();
    }), Dr(() => {
      i(!1), a0("toggle-navigation", _), a.deactivate();
    });
    function f(y) {
      if (s.value === y) {
        Mi("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = y === void 0 ? !s.value : y;
      const k = getComputedStyle(document.body), C = parseInt(k.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        Mi("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * C);
    }
    function _({ open: y }) {
      return f(y);
    }
    function v() {
      c.value ? a.activate() : a.deactivate();
    }
    function m() {
      l.value && f(!1);
    }
    return (y, k) => (d(), p("div", {
      ref: "appNavigationContainer",
      class: Te(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": u(En)
      }])
    }, [
      r("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: ft(m, ["esc"])
      }, [
        r("div", Hw, [
          He(y.$slots, "search", {}, void 0, !0)
        ]),
        r("div", {
          class: Te(["app-navigation__body", { "app-navigation__body--no-list": !y.$slots.list }])
        }, [
          He(y.$slots, "default", {}, void 0, !0)
        ], 2),
        y.$slots.list ? (d(), Pe(Lb, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: ke(() => [
            He(y.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : T("", !0),
        He(y.$slots, "footer", {}, void 0, !0)
      ], 40, Bw),
      ce(jw, {
        open: s.value,
        "onUpdate:open": f
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
function Xw(e, t, a, i, n, l) {
  return d(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (d(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      r("path", Yw, [
        a.title ? (d(), p("title", Zw, o(a.title), 1)) : T("", !0)
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
function nk(e, t, a, i, n, l) {
  return d(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (d(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      r("path", ak, [
        a.title ? (d(), p("title", ik, o(a.title), 1)) : T("", !0)
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
function dk(e, t, a, i, n, l) {
  return d(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (d(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      r("path", uk, [
        a.title ? (d(), p("title", ck, o(a.title), 1)) : T("", !0)
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
function gk(e, t, a, i, n, l) {
  return d(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (d(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      r("path", vk, [
        a.title ? (d(), p("title", bk, o(a.title), 1)) : T("", !0)
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
function _k(e, t, a, i, n, l) {
  const s = Xe("IconArrowRight"), c = Xe("NcButton"), f = Xe("IconClose");
  return d(), p("div", {
    class: Te(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    r("form", {
      onSubmit: t[1] || (t[1] = Se((..._) => l.confirm && l.confirm(..._), ["prevent"])),
      onKeydown: t[2] || (t[2] = ft(Se((..._) => l.cancel && l.cancel(..._), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Se(() => {
      }, ["stop", "prevent"]))
    }, [
      be(r("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (_) => l.valueModel = _),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: a.placeholder
      }, null, 8, yk), [
        [Me, l.valueModel]
      ]),
      ce(c, {
        "aria-label": n.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Se(l.confirm, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          ce(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      ce(c, {
        "aria-label": n.labelCancel,
        type: "reset",
        variant: a.primary ? "primary" : "tertiary",
        onClick: Se(l.cancel, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          ce(f, { size: 20 })
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
}, Nk = ["textContent"], Ok = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function Rk(e, t, a, i, n, l) {
  const s = Xe("NcIconSvgWrapper");
  return d(), p("li", {
    class: Te(["action", { "action--disabled": a.disabled }]),
    role: l.isInSemanticMenu && "presentation"
  }, [
    r("button", aa({
      "aria-label": e.ariaLabel,
      class: ["action-button button-vue", {
        "action-button--active": l.isChecked,
        focusable: l.isFocusable
      }],
      disabled: a.disabled,
      title: e.title,
      type: l.nativeType
    }, l.buttonAttributes, {
      onClick: t[0] || (t[0] = (...c) => l.handleClick && l.handleClick(...c))
    }), [
      He(e.$slots, "icon", {}, () => [
        r("span", {
          class: Te([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: ha({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      r("span", Ak, [
        e.name ? (d(), p("strong", Ek, o(e.name), 1)) : T("", !0),
        e.isLongText ? (d(), p("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: o(e.text)
        }, null, 8, $k)) : (d(), p("span", xk, o(e.text), 1)),
        a.description ? (d(), p("span", {
          key: 3,
          class: "action-button__description",
          textContent: o(a.description)
        }, null, 8, Nk)) : T("", !0)
      ]),
      a.isMenu ? (d(), Pe(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : l.isChecked ? (d(), Pe(s, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : l.isChecked === !1 ? (d(), p("span", Ok)) : T("", !0),
      T("", !0)
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
function Ga(e) {
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
  const i = Ga(e), n = jd(e), l = zd(n);
  let s = n === "x" ? i === (a ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (s = Co(s)), [s, Co(s)];
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
  const n = Ga(e);
  let l = zk(Vi(e), a === "start", i);
  return n && (l = l.map((s) => s + "-" + n), t && (l = l.concat(l.map(So)))), l;
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
  const l = Pi(t), s = jd(t), c = zd(s), f = Vi(t), _ = l === "y", v = i.x + i.width / 2 - n.width / 2, m = i.y + i.height / 2 - n.height / 2, y = i[c] / 2 - n[c] / 2;
  let k;
  switch (f) {
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
        y: m
      };
      break;
    case "left":
      k = {
        x: i.x - n.width,
        y: m
      };
      break;
    default:
      k = {
        x: i.x,
        y: i.y
      };
  }
  const C = Ga(t);
  return C && (k[s] += y * (C === "end" ? 1 : -1) * (a && _ ? -1 : 1)), k;
}
async function Hk(e, t) {
  var a;
  t === void 0 && (t = {});
  const {
    x: i,
    y: n,
    platform: l,
    rects: s,
    elements: c,
    strategy: f
  } = e, {
    boundary: _ = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: m = "floating",
    altBoundary: y = !1,
    padding: k = 0
  } = or(t, e), C = Vb(k), x = c[y ? m === "floating" ? "reference" : "floating" : m], F = $l(await l.getClippingRect({
    element: (a = await (l.isElement == null ? void 0 : l.isElement(x))) == null || a ? x : x.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(c.floating)),
    boundary: _,
    rootBoundary: v,
    strategy: f
  })), M = m === "floating" ? {
    x: i,
    y: n,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, P = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(c.floating)), L = await (l.isElement == null ? void 0 : l.isElement(P)) && await (l.getScale == null ? void 0 : l.getScale(P)) || {
    x: 1,
    y: 1
  }, le = $l(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: M,
    offsetParent: P,
    strategy: f
  }) : M);
  return {
    top: (F.top - le.top + C.top) / L.y,
    bottom: (le.bottom - F.bottom + C.bottom) / L.y,
    left: (F.left - le.left + C.left) / L.x,
    right: (le.right - F.right + C.right) / L.x
  };
}
const Vk = 50, qk = async (e, t, a) => {
  const {
    placement: i = "bottom",
    strategy: n = "absolute",
    middleware: l = [],
    platform: s
  } = a, c = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Hk
  }, f = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let _ = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: n
  }), {
    x: v,
    y: m
  } = fp(_, i, f), y = i, k = 0;
  const C = {};
  for (let S = 0; S < l.length; S++) {
    const x = l[S];
    if (!x)
      continue;
    const {
      name: F,
      fn: M
    } = x, {
      x: P,
      y: L,
      data: le,
      reset: te
    } = await M({
      x: v,
      y: m,
      initialPlacement: i,
      placement: y,
      strategy: n,
      middlewareData: C,
      rects: _,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    v = P ?? v, m = L ?? m, C[F] = {
      ...C[F],
      ...le
    }, te && k < Vk && (k++, typeof te == "object" && (te.placement && (y = te.placement), te.rects && (_ = te.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: n
    }) : te.rects), {
      x: v,
      y: m
    } = fp(_, y, f)), S = -1);
  }
  return {
    x: v,
    y: m,
    placement: y,
    strategy: n,
    middlewareData: C
  };
}, Gk = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: a,
      y: i,
      placement: n,
      rects: l,
      platform: s,
      elements: c,
      middlewareData: f
    } = t, {
      element: _,
      padding: v = 0
    } = or(e, t) || {};
    if (_ == null)
      return {};
    const m = Vb(v), y = {
      x: a,
      y: i
    }, k = jd(n), C = zd(k), S = await s.getDimensions(_), x = k === "y", F = x ? "top" : "left", M = x ? "bottom" : "right", P = x ? "clientHeight" : "clientWidth", L = l.reference[C] + l.reference[k] - y[k] - l.floating[C], le = y[k] - l.reference[k], te = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(_));
    let $ = te ? te[P] : 0;
    (!$ || !await (s.isElement == null ? void 0 : s.isElement(te))) && ($ = c.floating[P] || l.floating[C]);
    const G = L / 2 - le / 2, Z = $ / 2 - S[C] / 2 - 1, ee = Xl(m[F], Z), re = Xl(m[M], Z), V = $ - S[C] - re, K = $ / 2 - S[C] / 2 + G, D = jb(ee, K, V), Y = !f.arrow && Ga(n) != null && K !== D && l.reference[C] / 2 - (K < ee ? ee : re) - S[C] / 2 < 0, ae = Y ? K < ee ? K - ee : K - V : 0;
    return {
      [k]: y[k] + ae,
      data: {
        [k]: D,
        centerOffset: K - D - ae,
        ...Y && {
          alignmentOffset: ae
        }
      },
      reset: Y
    };
  }
});
function Kk(e, t, a) {
  return (e ? [...a.filter((n) => Ga(n) === e), ...a.filter((n) => Ga(n) !== e)] : a.filter((n) => Vi(n) === n)).filter((n) => e ? Ga(n) === e || (t ? So(n) !== n : !1) : !0);
}
const Wk = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var a, i, n;
      const {
        rects: l,
        middlewareData: s,
        placement: c,
        platform: f,
        elements: _
      } = t, {
        crossAxis: v = !1,
        alignment: m,
        allowedPlacements: y = up,
        autoAlignment: k = !0,
        ...C
      } = or(e, t), S = m !== void 0 || y === up ? Kk(m || null, k, y) : y, x = ((a = s.autoPlacement) == null ? void 0 : a.index) || 0, F = S[x];
      if (F == null)
        return {};
      if (c !== F)
        return {
          reset: {
            placement: S[0]
          }
        };
      const M = await f.detectOverflow(t, C), P = Hb(F, l, await (f.isRTL == null ? void 0 : f.isRTL(_.floating))), L = [M[Vi(F)], M[P[0]], M[P[1]]], le = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: F,
        overflows: L
      }], te = S[x + 1];
      if (te)
        return {
          data: {
            index: x + 1,
            overflows: le
          },
          reset: {
            placement: te
          }
        };
      const $ = le.map((ee) => {
        const re = Ga(ee.placement);
        return [ee.placement, re && v ? (
          // Check along the mainAxis and main crossAxis side.
          ee.overflows.slice(0, 2).reduce((V, K) => V + K, 0)
        ) : (
          // Check only the mainAxis.
          ee.overflows[0]
        ), ee.overflows];
      }).sort((ee, re) => ee[1] - re[1]), Z = ((n = $.filter((ee) => ee[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Ga(ee[0]) ? 2 : 3
      ).every((re) => re <= 0))[0]) == null ? void 0 : n[0]) || $[0][0];
      return Z !== c ? {
        data: {
          index: x + 1,
          overflows: le
        },
        reset: {
          placement: Z
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
        middlewareData: l,
        rects: s,
        initialPlacement: c,
        platform: f,
        elements: _
      } = t, {
        mainAxis: v = !0,
        crossAxis: m = !0,
        fallbackPlacements: y,
        fallbackStrategy: k = "bestFit",
        fallbackAxisSideDirection: C = "none",
        flipAlignment: S = !0,
        ...x
      } = or(e, t);
      if ((a = l.arrow) != null && a.alignmentOffset)
        return {};
      const F = Vi(n), M = Pi(c), P = Vi(c) === c, L = await (f.isRTL == null ? void 0 : f.isRTL(_.floating)), le = y || (P || !S ? [Co(c)] : Fk(c)), te = C !== "none";
      !y && te && le.push(...jk(c, S, C, L));
      const $ = [c, ...le], G = await f.detectOverflow(t, x), Z = [];
      let ee = ((i = l.flip) == null ? void 0 : i.overflows) || [];
      if (v && Z.push(G[F]), m) {
        const D = Hb(n, s, L);
        Z.push(G[D[0]], G[D[1]]);
      }
      if (ee = [...ee, {
        placement: n,
        overflows: Z
      }], !Z.every((D) => D <= 0)) {
        var re, V;
        const D = (((re = l.flip) == null ? void 0 : re.index) || 0) + 1, Y = $[D];
        if (Y && (!(m === "alignment" ? M !== Pi(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        ee.every((U) => Pi(U.placement) === M ? U.overflows[0] > 0 : !0)))
          return {
            data: {
              index: D,
              overflows: ee
            },
            reset: {
              placement: Y
            }
          };
        let ae = (V = ee.filter((J) => J.overflows[0] <= 0).sort((J, U) => J.overflows[1] - U.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!ae)
          switch (k) {
            case "bestFit": {
              var K;
              const J = (K = ee.filter((U) => {
                if (te) {
                  const H = Pi(U.placement);
                  return H === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  H === "y";
                }
                return !0;
              }).map((U) => [U.placement, U.overflows.filter((H) => H > 0).reduce((H, ye) => H + ye, 0)]).sort((U, H) => U[1] - H[1])[0]) == null ? void 0 : K[0];
              J && (ae = J);
              break;
            }
            case "initialPlacement":
              ae = c;
              break;
          }
        if (n !== ae)
          return {
            reset: {
              placement: ae
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
  } = e, l = await (i.isRTL == null ? void 0 : i.isRTL(n.floating)), s = Vi(a), c = Ga(a), f = Pi(a) === "y", _ = Zk.has(s) ? -1 : 1, v = l && f ? -1 : 1, m = or(t, e);
  let {
    mainAxis: y,
    crossAxis: k,
    alignmentAxis: C
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return c && typeof C == "number" && (k = c === "end" ? C * -1 : C), f ? {
    x: k * v,
    y: y * _
  } : {
    x: y * _,
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
        y: l,
        placement: s,
        middlewareData: c
      } = t, f = await Xk(t, e);
      return s === ((a = c.offset) == null ? void 0 : a.placement) && (i = c.arrow) != null && i.alignmentOffset ? {} : {
        x: n + f.x,
        y: l + f.y,
        data: {
          ...f,
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
        platform: l
      } = t, {
        mainAxis: s = !0,
        crossAxis: c = !1,
        limiter: f = {
          fn: (M) => {
            let {
              x: P,
              y: L
            } = M;
            return {
              x: P,
              y: L
            };
          }
        },
        ..._
      } = or(e, t), v = {
        x: a,
        y: i
      }, m = await l.detectOverflow(t, _), y = Pi(n), k = Bb(y);
      let C = v[k], S = v[y];
      const x = (M, P) => jb(P + m[M === "y" ? "top" : "left"], P, P - m[M === "y" ? "bottom" : "right"]);
      s && (C = x(k, C)), c && (S = x(y, S));
      const F = f.fn({
        ...t,
        [k]: C,
        [y]: S
      });
      return {
        ...F,
        data: {
          x: F.x - a,
          y: F.y - i,
          enabled: {
            [k]: s,
            [y]: c
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
        elements: l
      } = t, {
        apply: s = () => {
        },
        ...c
      } = or(e, t), f = await n.detectOverflow(t, c), _ = Vi(a), v = Ga(a), m = Pi(a) === "y", {
        width: y,
        height: k
      } = i.floating;
      let C, S;
      _ === "top" || _ === "bottom" ? (C = _, S = v === (await (n.isRTL == null ? void 0 : n.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (S = _, C = v === "end" ? "top" : "bottom");
      const x = k - f.top - f.bottom, F = y - f.left - f.right, M = Xl(k - f[C], x), P = Xl(y - f[S], F), L = t.middlewareData.shift, le = !L;
      let te = M, $ = P;
      L != null && L.enabled.x && ($ = F), L != null && L.enabled.y && (te = x), le && !v && (m ? $ = y - 2 * Jc(f.left, f.right) : te = k - 2 * Jc(f.top, f.bottom)), await s({
        ...t,
        availableWidth: $,
        availableHeight: te
      });
      const G = await n.getDimensions(l.floating);
      return y !== G.width || k !== G.height ? {
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
  const n = e.offsetWidth, l = e.offsetHeight, s = To(a) !== n || To(i) !== l;
  return s && (a = n, i = l), { width: a, height: i, fallback: s };
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
    const l = a.contain;
    return l != null && l.includes(n);
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
  const a = t.getBoundingClientRect(), { width: i, height: n, fallback: l } = qb(t);
  let s = (l ? To(a.width) : a.width) / i, c = (l ? To(a.height) : a.height) / n;
  return s && Number.isFinite(s) || (s = 1), c && Number.isFinite(c) || (c = 1), { x: s, y: c };
}
function Jl(e, t, a, i) {
  var n, l;
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  const s = e.getBoundingClientRect(), c = Yb(e);
  let f = Zb;
  t && (i ? _n(i) && (f = Ir(i)) : f = Ir(e));
  const _ = c ? La(c) : window, v = !Wb() && a;
  let m = (s.left + (v && ((n = _.visualViewport) == null ? void 0 : n.offsetLeft) || 0)) / f.x, y = (s.top + (v && ((l = _.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / f.y, k = s.width / f.x, C = s.height / f.y;
  if (c) {
    const S = La(c), x = i && _n(i) ? La(i) : i;
    let F = S.frameElement;
    for (; F && i && x !== S; ) {
      const M = Ir(F), P = F.getBoundingClientRect(), L = getComputedStyle(F);
      P.x += (F.clientLeft + parseFloat(L.paddingLeft)) * M.x, P.y += (F.clientTop + parseFloat(L.paddingTop)) * M.y, m *= M.x, y *= M.y, k *= M.x, C *= M.y, m += P.x, y += P.y, F = La(F).frameElement;
    }
  }
  return { width: k, height: C, top: y, right: m + k, bottom: y + C, left: m, x: m, y };
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
  const i = Jb(e), n = i === ((a = e.ownerDocument) == null ? void 0 : a.body), l = La(i);
  return n ? t.concat(l, l.visualViewport || [], _u(i) ? i : []) : t.concat(i, Ao(i));
}
function vp(e, t, a) {
  return t === "viewport" ? $l((function(i, n) {
    const l = La(i), s = wn(i), c = l.visualViewport;
    let f = s.clientWidth, _ = s.clientHeight, v = 0, m = 0;
    if (c) {
      f = c.width, _ = c.height;
      const y = Wb();
      (y || !y && n === "fixed") && (v = c.offsetLeft, m = c.offsetTop);
    }
    return { width: f, height: _, x: v, y: m };
  })(e, a)) : _n(t) ? $l((function(i, n) {
    const l = Jl(i, !0, n === "fixed"), s = l.top + i.clientTop, c = l.left + i.clientLeft, f = fi(i) ? Ir(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * f.x, height: i.clientHeight * f.y, x: c * f.x, y: s * f.y };
  })(t, a)) : $l((function(i) {
    const n = wn(i), l = wu(i), s = i.ownerDocument.body, c = xl(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth), f = xl(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
    let _ = -l.scrollLeft + Xb(i);
    const v = -l.scrollTop;
    return di(s).direction === "rtl" && (_ += xl(n.clientWidth, s.clientWidth) - c), { width: c, height: f, x: _, y: v };
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
  const i = fi(t), n = wn(t), l = Jl(e, !0, a === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (i || !i && a !== "fixed") if ((Cn(t) !== "body" || _u(n)) && (s = wu(t)), fi(t)) {
    const f = Jl(t, !0);
    c.x = f.x + t.clientLeft, c.y = f.y + t.clientTop;
  } else n && (c.x = Xb(n));
  return { x: l.left + s.scrollLeft - c.x, y: l.top + s.scrollTop - c.y, width: l.width, height: l.height };
}
const iS = { getClippingRect: function(e) {
  let { element: t, boundary: a, rootBoundary: i, strategy: n } = e;
  const l = a === "clippingAncestors" ? (function(_, v) {
    const m = v.get(_);
    if (m) return m;
    let y = Ao(_).filter(((x) => _n(x) && Cn(x) !== "body")), k = null;
    const C = di(_).position === "fixed";
    let S = C ? Ql(_) : _;
    for (; _n(S) && !Bd(S); ) {
      const x = di(S), F = Qc(S);
      (C ? F || k : F || x.position !== "static" || !k || !["absolute", "fixed"].includes(k.position)) ? k = x : y = y.filter(((M) => M !== S)), S = Ql(S);
    }
    return v.set(_, y), y;
  })(t, this._c) : [].concat(a), s = [...l, i], c = s[0], f = s.reduce(((_, v) => {
    const m = vp(t, v, n);
    return _.top = xl(m.top, _.top), _.right = hp(m.right, _.right), _.bottom = hp(m.bottom, _.bottom), _.left = xl(m.left, _.left), _;
  }), vp(t, c, n));
  return { width: f.right - f.left, height: f.bottom - f.top, x: f.left, y: f.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: a, strategy: i } = e;
  const n = fi(a), l = wn(a);
  if (a === l) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const f = { x: 0, y: 0 };
  if ((n || !n && i !== "fixed") && ((Cn(a) !== "body" || _u(l)) && (s = wu(a)), fi(a))) {
    const _ = Jl(a);
    c = Ir(a), f.x = _.x + a.clientLeft, f.y = _.y + a.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - s.scrollLeft * c.x + f.x, y: t.y * c.y - s.scrollTop * c.y + f.y };
}, isElement: _n, getDimensions: function(e) {
  return fi(e) ? qb(e) : e.getBoundingClientRect();
}, getOffsetParent: gp, getDocumentElement: wn, getScale: Ir, async getElementRects(e) {
  let { reference: t, floating: a, strategy: i } = e;
  const n = this.getOffsetParent || gp, l = this.getDimensions;
  return { reference: aS(t, await n(a), i), floating: { x: 0, y: 0, ...await l(a) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => di(e).direction === "rtl" }, nS = (e, t, a) => {
  const i = /* @__PURE__ */ new Map(), n = { platform: iS, ...a }, l = { ...n.platform, _c: i };
  return qk(e, t, { ...n, platform: l });
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
        fn: ({ placement: i, rects: n, middlewareData: l }) => {
          let s;
          const { centerOffset: c } = l.arrow;
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
          fn: ({ rects: n, placement: l, middlewareData: s }) => {
            var c;
            if ((c = s.autoSize) != null && c.skip)
              return {};
            let f, _;
            return l.startsWith("top") || l.startsWith("bottom") ? f = n.reference.width : _ = n.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = f != null ? `${f}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = _ != null ? `${_}px` : null, {
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
        const t = this.$_referenceNode.getBoundingClientRect(), a = this.$_popperNode.querySelector(".v-popper__wrapper"), i = a.parentNode.getBoundingClientRect(), n = t.x + t.width / 2 - (i.left + a.offsetLeft), l = t.y + t.height / 2 - (i.top + a.offsetTop);
        this.result.transformOrigin = `${n}px ${l}px`;
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
      let l = a;
      i != null && (l = typeof i == "function" ? i(l) : i), l.forEach((s) => {
        const c = t[s];
        c && this.$_registerEventListeners(e, c, n);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((a) => {
        const { targetNodes: i, eventType: n, handler: l } = a;
        !e || e === n ? i.forEach((s) => s.removeEventListener(n, l)) : t.push(a);
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
      if (Nl >= e.left && Nl <= e.right && Ol >= e.top && Ol <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), a = Nl - hn, i = Ol - pn, n = t.left + t.width / 2 - hn + (t.top + t.height / 2) - pn + t.width + t.height, l = hn + a * n, s = pn + i * n;
        return qs(hn, pn, l, s, t.left, t.top, t.left, t.bottom) || // Left edge
        qs(hn, pn, l, s, t.left, t.top, t.right, t.top) || // Top edge
        qs(hn, pn, l, s, t.right, t.top, t.right, t.bottom) || // Right edge
        qs(hn, pn, l, s, t.left, t.bottom, t.right, t.bottom);
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
      const l = n.containsGlobalTarget = n.mouseDownContains || n.popperNode().contains(e.target);
      n.pendingHide = !1, requestAnimationFrame(() => {
        if (n.pendingHide = !1, !a[n.randomId] && Ap(n, l, e)) {
          if (n.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && l) {
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
let hn = 0, pn = 0, Nl = 0, Ol = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  hn = Nl, pn = Ol, Nl = e.clientX, Ol = e.clientY;
}, es ? {
  passive: !0
} : void 0);
function qs(e, t, a, i, n, l, s, c) {
  const f = ((s - n) * (t - l) - (c - l) * (e - n)) / ((c - l) * (a - e) - (s - n) * (i - t)), _ = ((a - e) * (t - l) - (i - t) * (e - n)) / ((c - l) * (a - e) - (s - n) * (i - t));
  return f >= 0 && f <= 1 && _ >= 0 && _ <= 1;
}
const cS = {
  extends: eg()
}, Hd = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [i, n] of t)
    a[i] = n;
  return a;
};
function dS(e, t, a, i, n, l) {
  return d(), p("div", {
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
const bS = /* @__PURE__ */ pS((e, t, a, i, n, l) => (d(), Pe("div", vS)));
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
}, _S = /* @__PURE__ */ r("div", { class: "v-popper__arrow-outer" }, null, -1), wS = /* @__PURE__ */ r("div", { class: "v-popper__arrow-inner" }, null, -1), kS = [
  _S,
  wS
];
function SS(e, t, a, i, n, l) {
  const s = Xe("ResizeObserver");
  return d(), p("div", {
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
    r("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (c) => e.autoHide && e.$emit("hide"))
    }),
    r("div", {
      class: "v-popper__wrapper",
      style: ha(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      r("div", yS, [
        e.mounted ? (d(), p(W, { key: 0 }, [
          r("div", null, [
            He(e.$slots, "default")
          ]),
          e.handleResize ? (d(), Pe(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (c) => e.$emit("resize", c))
          })) : T("", !0)
        ], 64)) : T("", !0)
      ], 512),
      r("div", {
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
function TS(e, t, a, i, n, l) {
  const s = Xe("PopperContent"), c = Xe("Popper");
  return d(), Pe(c, aa({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (f) => e.$emit("update:shown", f)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: ke(({
      popperId: f,
      isShown: _,
      shouldMountContent: v,
      skipTransition: m,
      autoHide: y,
      show: k,
      hide: C,
      handleResize: S,
      onResize: x,
      classes: F,
      result: M
    }) => [
      He(e.$slots, "default", {
        shown: _,
        show: k,
        hide: C
      }),
      ce(s, {
        ref: "popperContent",
        "popper-id": f,
        theme: e.finalTheme,
        shown: _,
        mounted: v,
        "skip-transition": m,
        "auto-hide": y,
        "handle-resize": S,
        classes: F,
        result: M,
        onHide: C,
        onResize: x
      }, {
        default: ke(() => [
          He(e.$slots, "popper", {
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
}), xS = "_ncPopover_qgtYg", NS = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: xS
}, ng = "nc-popover-9";
Ep.themes[ng] = structuredClone(Ep.themes.dropdown);
const OS = {
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
function RS(e, t, a, i, n, l) {
  const s = Xe("NcPopoverTriggerProvider"), c = Xe("Dropdown");
  return d(), Pe(c, {
    ref: "popover",
    shown: n.internalShown,
    "onUpdate:shown": [
      t[0] || (t[0] = (f) => n.internalShown = f),
      t[1] || (t[1] = (f) => n.internalShown = f)
    ],
    autoHide: !a.noCloseOnClickOutside && a.closeOnClickOutside,
    boundary: a.boundary || void 0,
    container: a.container,
    delay: a.delay,
    distance: 4,
    handleResize: "",
    noAutoFocus: !0,
    placement: l.internalPlacement,
    popperClass: [e.$style.ncPopover, a.popoverBaseClass],
    popperTriggers: l.popperTriggers,
    popperHideTriggers: l.popperHideTriggers,
    popperShowTriggers: l.popperShowTriggers,
    theme: i.theme,
    triggers: l.internalTriggers,
    hideTriggers: l.hideTriggers,
    showTriggers: l.showTriggers,
    onApplyShow: l.afterShow,
    onApplyHide: l.afterHide
  }, {
    popper: ke((f) => [
      He(e.$slots, "default", eo(ql(f)))
    ]),
    default: ke(() => [
      ce(s, {
        shown: n.internalShown,
        popupRole: a.popupRole
      }, {
        default: ke((f) => [
          He(e.$slots, "trigger", eo(ql(f)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const IS = {
  $style: NS
}, $p = /* @__PURE__ */ ut(OS, [["render", RS], ["__cssModules", IS]]), LS = {
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
function US(e, t, a, i, n, l) {
  return d(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (d(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      r("path", FS, [
        a.title ? (d(), p("title", MS, o(a.title), 1)) : T("", !0)
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
      if (a.type === W && !qd(a.children))
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
      [Ud]: q(() => this.actionsMenuSemanticType === "menu"),
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
    let a = e.filter(this.isValidSingleAction);
    this.forceMenu && a.length > 0 && this.inline > 0 && (a = []);
    const i = a.slice(0, this.inline), n = e.filter((k) => !i.includes(k)), l = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], c = ["NcActionLink", "NcActionRouter"], f = n.some((k) => s.includes(this.getActionName(k))), _ = n.some((k) => l.includes(this.getActionName(k))), v = n.some((k) => c.includes(this.getActionName(k)));
    f ? this.actionsMenuSemanticType = "dialog" : _ ? this.actionsMenuSemanticType = "menu" : v ? this.actionsMenuSemanticType = "navigation" : e.filter((C) => this.getActionName(C).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const m = (k) => {
      const C = k?.props?.icon, S = k?.children?.icon?.()?.[0] ?? (this.isIconUrl(C) ? da("img", { class: "action-item__menutoggle__icon", src: C, alt: "" }) : da("span", { class: ["icon", C] })), x = k?.children?.default?.()?.[0]?.children?.trim(), F = this.forceName ? x : "";
      let M = k?.props?.title;
      this.forceName || M || (M = x);
      const P = { ...k?.props ?? {} }, L = ["submit", "reset"].includes(P.type) ? P.modelValue : "button";
      return delete P.modelValue, delete P.type, da(
        ci,
        aa(
          P,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": k?.props?.["aria-label"] || x,
            title: M,
            disabled: this.disabled || k?.props?.disabled,
            pressed: k?.props?.modelValue,
            size: this.size,
            type: L,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (F ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": k?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => F,
          icon: () => S
        }
      );
    }, y = (k) => {
      const C = qd(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? da("span", { class: ["icon", this.defaultIcon] }) : da(zS, { size: 20 }), S = `${this.randomId}-trigger`;
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
              "aria-labelledby": S,
              "aria-modal": this.actionsMenuSemanticType === "dialog" ? "true" : void 0
            }, [
              k
            ])
          ])
        }
      );
    };
    return e.length === 1 && a.length === 1 && !this.forceMenu ? m(e[0]) : (this.$nextTick(() => {
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
        ...i.map(m),
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
          [y(n)]
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
        y(e)
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
    const t = e, a = q(() => {
      const i = ["#777", "#CCC"];
      return t.appearance === "light" ? i : t.appearance === "dark" ? i.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (i, n) => (d(), p("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (d(), p("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        r("path", {
          fill: a.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, qS),
        r("path", {
          fill: a.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (d(), p("title", KS, o(e.name), 1)) : T("", !0)
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
function eC(e, t, a, i, n, l) {
  return d(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (d(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      r("path", JS, [
        a.title ? (d(), p("title", QS, o(a.title), 1)) : T("", !0)
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
function sC(e, t, a, i, n, l) {
  return d(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (d(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      r("path", rC, [
        a.title ? (d(), p("title", lC, o(a.title), 1)) : T("", !0)
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
function cC(e, t, a, i, n, l) {
  const s = Xe("ChevronUp"), c = Xe("ChevronDown"), f = Xe("NcButton");
  return d(), Pe(f, {
    class: Te(["icon-collapse", {
      "icon-collapse--active": a.active,
      "icon-collapse--open": a.open
    }]),
    "aria-label": l.labelButton,
    variant: a.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: l.onClick
  }, {
    icon: ke(() => [
      a.open ? (d(), Pe(s, {
        key: 0,
        size: 20
      })) : (d(), Pe(c, {
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
function _C(e, t, a, i, n, l) {
  const s = Xe("NcLoadingIcon"), c = Xe("NcInputConfirmCancel"), f = Xe("Pencil"), _ = Xe("NcActionButton"), v = Xe("Undo"), m = Xe("NcActions"), y = Xe("NcAppNavigationIconCollapsible");
  return d(), p("li", {
    id: a.id,
    class: Te([{
      "app-navigation-entry--opened": n.opened,
      "app-navigation-entry--pinned": a.pinned,
      "app-navigation-entry--collapsible": a.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (d(), Pe(xd(l.isRouterLink ? "router-link" : "NcVNodes"), eo(ql({ ...l.isRouterLink && { custom: !0, to: a.to } })), {
      default: ke(({ href: k, navigate: C, isActive: S }) => [
        r("div", {
          ref: "entry",
          class: Te(["app-navigation-entry", {
            "app-navigation-entry--editing": n.editingActive,
            "app-navigation-entry--deleted": a.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: a.to && S || a.active
          }]),
          onPointerenter: t[4] || (t[4] = (...x) => l.requestHighlight && l.requestHighlight(...x)),
          onFocusin: t[5] || (t[5] = (...x) => l.requestHighlight && l.requestHighlight(...x))
        }, [
          a.undo ? T("", !0) : (d(), p("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": a.active || a.to && S ? "page" : void 0,
            "aria-description": a.ariaDescription,
            "aria-expanded": e.$slots.default ? n.opened.toString() : void 0,
            href: a.href || k || "#",
            target: l.isExternal(a.href) ? "_blank" : void 0,
            title: a.title || a.name,
            onBlur: t[1] || (t[1] = (...x) => l.handleBlur && l.handleBlur(...x)),
            onClick: (x) => l.onClick(x, C, k),
            onFocus: t[2] || (t[2] = (...x) => l.handleFocus && l.handleFocus(...x)),
            onKeydown: t[3] || (t[3] = ft(Se((...x) => l.handleTab && l.handleTab(...x), ["exact"]), ["tab"]))
          }, [
            r("div", {
              class: Te(["app-navigation-entry-icon", { [a.icon]: a.icon }])
            }, [
              a.loading ? (d(), Pe(s, { key: 0 })) : He(e.$slots, "icon", {
                key: 1,
                active: a.active || a.to && S
              }, void 0, !0)
            ], 2),
            r("span", {
              class: Te(["app-navigation-entry__name", { "hidden-visually": n.editingActive }])
            }, o(a.name), 3),
            n.editingActive ? (d(), p("div", vC, [
              ce(c, {
                ref: "editingInput",
                modelValue: n.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (x) => n.editingValue = x),
                placeholder: a.editPlaceholder !== "" ? a.editPlaceholder : a.name,
                primary: a.to && S || a.active,
                onCancel: l.cancelEditing,
                onConfirm: l.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : T("", !0)
          ], 40, pC)),
          a.undo ? (d(), p("div", bC, [
            r("div", gC, o(a.name), 1)
          ])) : T("", !0),
          (e.$slots.actions || e.$slots.counter || a.editable || a.undo) && !n.editingActive ? (d(), p("div", {
            key: 2,
            class: Te(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": a.forceDisplayActions || n.menuOpenLocalValue || a.menuOpen }])
          }, [
            e.$slots.counter ? (d(), p("div", mC, [
              He(e.$slots, "counter", {}, void 0, !0)
            ])) : T("", !0),
            e.$slots.actions || a.editable && !n.editingActive || a.undo ? (d(), Pe(m, {
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
              "onUpdate:open": l.onMenuToggle
            }, {
              icon: ke(() => [
                He(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: ke(() => [
                a.editable && !n.editingActive ? (d(), Pe(_, {
                  key: 0,
                  "aria-label": l.editButtonAriaLabel,
                  onClick: l.handleEdit
                }, {
                  icon: ke(() => [
                    ce(f, { size: 20 })
                  ]),
                  default: ke(() => [
                    Q(" " + o(a.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : T("", !0),
                a.undo ? (d(), Pe(_, {
                  key: 1,
                  "aria-label": l.undoButtonAriaLabel,
                  onClick: l.handleUndo
                }, {
                  icon: ke(() => [
                    ce(v, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : T("", !0),
                He(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : T("", !0)
          ], 2)) : T("", !0),
          a.allowCollapse && e.$slots.default ? (d(), Pe(y, {
            key: 3,
            active: a.to && S || a.active,
            open: n.opened,
            onClick: Se(l.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : T("", !0),
          He(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    l.canHaveChildren && e.$slots.default ? (d(), p("ul", yC, [
      He(e.$slots, "default", {}, void 0, !0)
    ])) : T("", !0)
  ], 10, hC);
}
const ii = /* @__PURE__ */ ut(fC, [["render", _C], ["__scopeId", "data-v-01bef41b"]]), Ac = /* @__PURE__ */ new WeakMap(), wC = {
  mounted(e, t) {
    const a = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = ep(e, t.value, { capture: a });
    else {
      const [n, l] = t.value;
      i = ep(e, n, Object.assign({ capture: a }, l));
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
      const n = t.jr[i][0], l = t.jr[i][1];
      if (l && n.test(e))
        return l;
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
    const l = e.length;
    if (!l)
      return n;
    for (let s = 0; s < l - 1; s++)
      n = n.tt(e[s]);
    return n.tt(e[l - 1], t, a, i);
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
    const l = t;
    let s, c = n.go(e);
    if (c ? (s = new ka(), Object.assign(s.j, c.j), s.jr.push.apply(s.jr, c.jr), s.jd = c.jd, s.t = c.t) : s = new ka(), l) {
      if (i)
        if (s.t && typeof s.t == "string") {
          const f = Object.assign($C(s.t, i), a);
          tr(l, f, i);
        } else a && tr(l, a, i);
      s.t = l;
    }
    return n.j[e] = s, s;
  }
};
const We = (e, t, a, i, n) => e.ta(t, a, i, n), Ct = (e, t, a, i, n) => e.tr(t, a, i, n), xp = (e, t, a, i, n) => e.ts(t, a, i, n), me = (e, t, a, i, n) => e.tt(t, a, i, n), xi = "WORD", ud = "UWORD", sg = "ASCIINUMERICAL", og = "ALPHANUMERICAL", ts = "LOCALHOST", cd = "TLD", dd = "UTLD", Qs = "SCHEME", Ar = "SLASH_SCHEME", Kd = "NUM", fd = "WS", Wd = "NL", Il = "OPENBRACE", Ll = "CLOSEBRACE", Eo = "OPENBRACKET", $o = "CLOSEBRACKET", xo = "OPENPAREN", No = "CLOSEPAREN", Oo = "OPENANGLEBRACKET", Ro = "CLOSEANGLEBRACKET", Io = "FULLWIDTHLEFTPAREN", Lo = "FULLWIDTHRIGHTPAREN", Po = "LEFTCORNERBRACKET", Do = "RIGHTCORNERBRACKET", Fo = "LEFTWHITECORNERBRACKET", Mo = "RIGHTWHITECORNERBRACKET", Uo = "FULLWIDTHLESSTHAN", zo = "FULLWIDTHGREATERTHAN", jo = "AMPERSAND", Bo = "APOSTROPHE", Ho = "ASTERISK", bn = "AT", Vo = "BACKSLASH", qo = "BACKTICK", Go = "CARET", ar = "COLON", Yd = "COMMA", Ko = "DOLLAR", ri = "DOT", Wo = "EQUALS", Zd = "EXCLAMATION", Oa = "HYPHEN", Pl = "PERCENT", Yo = "PIPE", Zo = "PLUS", Xo = "POUND", Dl = "QUERY", Xd = "QUOTE", ug = "FULLWIDTHMIDDLEDOT", Jd = "SEMI", li = "SLASH", Fl = "TILDE", Jo = "UNDERSCORE", cg = "EMOJI", Qo = "SYM";
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
  CLOSEPAREN: No,
  COLON: ar,
  COMMA: Yd,
  DOLLAR: Ko,
  DOT: ri,
  EMOJI: cg,
  EQUALS: Wo,
  EXCLAMATION: Zd,
  FULLWIDTHGREATERTHAN: zo,
  FULLWIDTHLEFTPAREN: Io,
  FULLWIDTHLESSTHAN: Uo,
  FULLWIDTHMIDDLEDOT: ug,
  FULLWIDTHRIGHTPAREN: Lo,
  HYPHEN: Oa,
  LEFTCORNERBRACKET: Po,
  LEFTWHITECORNERBRACKET: Fo,
  LOCALHOST: ts,
  NL: Wd,
  NUM: Kd,
  OPENANGLEBRACKET: Oo,
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
  SLASH: li,
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
const Ei = /[a-z]/, vl = new RegExp("\\p{L}", "u"), $c = new RegExp("\\p{Emoji}", "u"), $i = /\d/, xc = /\s/, Np = "\r", Nc = `
`, xC = "️", NC = "‍", Oc = "￼";
let Gs = null, Ks = null;
function OC(e = []) {
  const t = {};
  ka.groups = t;
  const a = new ka();
  Gs == null && (Gs = Op(SC)), Ks == null && (Ks = Op(CC)), me(a, "'", Bo), me(a, "{", Il), me(a, "}", Ll), me(a, "[", Eo), me(a, "]", $o), me(a, "(", xo), me(a, ")", No), me(a, "<", Oo), me(a, ">", Ro), me(a, "（", Io), me(a, "）", Lo), me(a, "「", Po), me(a, "」", Do), me(a, "『", Fo), me(a, "』", Mo), me(a, "＜", Uo), me(a, "＞", zo), me(a, "&", jo), me(a, "*", Ho), me(a, "@", bn), me(a, "`", qo), me(a, "^", Go), me(a, ":", ar), me(a, ",", Yd), me(a, "$", Ko), me(a, ".", ri), me(a, "=", Wo), me(a, "!", Zd), me(a, "-", Oa), me(a, "%", Pl), me(a, "|", Yo), me(a, "+", Zo), me(a, "#", Xo), me(a, "?", Dl), me(a, '"', Xd), me(a, "/", li), me(a, ";", Jd), me(a, "~", Fl), me(a, "_", Jo), me(a, "\\", Vo), me(a, "・", ug);
  const i = Ct(a, $i, Kd, {
    [rd]: !0
  });
  Ct(i, $i, i);
  const n = Ct(i, Ei, sg, {
    [Rl]: !0
  }), l = Ct(i, vl, og, {
    [_l]: !0
  }), s = Ct(a, Ei, xi, {
    [ld]: !0
  });
  Ct(s, $i, n), Ct(s, Ei, s), Ct(n, $i, n), Ct(n, Ei, n);
  const c = Ct(a, vl, ud, {
    [sd]: !0
  });
  Ct(c, Ei), Ct(c, $i, l), Ct(c, vl, c), Ct(l, $i, l), Ct(l, Ei), Ct(l, vl, l);
  const f = me(a, Nc, Wd, {
    [Ec]: !0
  }), _ = me(a, Np, fd, {
    [Ec]: !0
  }), v = Ct(a, xc, fd, {
    [Ec]: !0
  });
  me(a, Oc, v), me(_, Nc, f), me(_, Oc, v), Ct(_, xc, v), me(v, Np), me(v, Nc), Ct(v, xc, v), me(v, Oc, v);
  const m = Ct(a, $c, cg, {
    [lg]: !0
  });
  me(m, "#"), Ct(m, $c, m), me(m, xC, m);
  const y = me(m, NC);
  me(y, "#"), Ct(y, $c, m);
  const k = [[Ei, s], [$i, n]], C = [[Ei, null], [vl, c], [$i, l]];
  for (let S = 0; S < Gs.length; S++)
    cn(a, Gs[S], cd, xi, k);
  for (let S = 0; S < Ks.length; S++)
    cn(a, Ks[S], dd, ud, C);
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
  }, t), e = e.sort((S, x) => S[0] > x[0] ? 1 : -1);
  for (let S = 0; S < e.length; S++) {
    const x = e[S][0], M = e[S][1] ? {
      [TC]: !0
    } : {
      [AC]: !0
    };
    x.indexOf("-") >= 0 ? M[od] = !0 : Ei.test(x) ? $i.test(x) ? M[Rl] = !0 : M[ld] = !0 : M[rd] = !0, xp(a, x, x, M);
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
  let l = 0, s = 0;
  for (; s < i; ) {
    let c = e, f = null, _ = 0, v = null, m = -1, y = -1;
    for (; s < i && (f = c.go(a[s])); )
      c = f, c.accepts() ? (m = 0, y = 0, v = c) : m >= 0 && (m += a[s].length, y++), _ += a[s].length, l += a[s].length, s++;
    l -= m, s -= y, _ -= m, n.push({
      t: v.t,
      // token type/name
      v: t.slice(l - _, l),
      // string value
      s: l - _,
      // start index
      e: l
      // end index (excluding)
    });
  }
  return n;
}
function RC(e) {
  const t = [], a = e.length;
  let i = 0;
  for (; i < a; ) {
    let n = e.charCodeAt(i), l, s = n < 55296 || n > 56319 || i + 1 === a || (l = e.charCodeAt(i + 1)) < 56320 || l > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(s), i += s.length;
  }
  return t;
}
function cn(e, t, a, i, n) {
  let l;
  const s = t.length;
  for (let c = 0; c < s - 1; c++) {
    const f = t[c];
    e.j[f] ? l = e.j[f] : (l = new ka(i), l.jr = n.slice(), e.j[f] = l), e = l;
  }
  return l = new ka(a), l.jr = n.slice(), e.j[t[s - 1]] = l, l;
}
function Op(e) {
  const t = [], a = [];
  let i = 0, n = "0123456789";
  for (; i < e.length; ) {
    let l = 0;
    for (; n.indexOf(e[i + l]) >= 0; )
      l++;
    if (l > 0) {
      t.push(a.join(""));
      for (let s = parseInt(e.substring(i, i + l), 10); s > 0; s--)
        a.pop();
      i += l;
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
  for (let l = 0; l < i.length; l++)
    n.push(i[l].toUpperCase());
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
    const t = this, a = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", a, this), n = e.get("tagName", a, t), l = this.toFormattedString(e), s = {}, c = e.get("className", a, t), f = e.get("target", a, t), _ = e.get("rel", a, t), v = e.getObj("attributes", a, t), m = e.getObj("events", a, t);
    return s.href = i, c && (s.class = c), f && (s.target = f), _ && (s.rel = _), v && Object.assign(s, v), {
      tagName: n,
      attributes: s,
      content: l,
      eventListeners: m
    };
  }
};
function Su(e, t) {
  class a extends hg {
    constructor(n, l) {
      super(n, l), this.t = e;
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
  const t = e.domain.concat([jo, Ho, bn, Vo, qo, Go, Ko, Wo, Oa, Kd, Pl, Yo, Zo, Xo, li, Qo, Fl, Jo]), a = [Bo, ar, Yd, ri, Zd, Pl, Dl, Xd, Jd, Oo, Ro, Il, Ll, $o, Eo, xo, No, Io, Lo, Po, Do, Fo, Mo, Uo, zo], i = [jo, Bo, Ho, Vo, qo, Go, Ko, Wo, Oa, Il, Ll, Pl, Yo, Zo, Xo, Dl, li, Qo, Fl, Jo], n = xa(), l = me(n, Fl);
  We(l, i, l), We(l, e.domain, l);
  const s = xa(), c = xa(), f = xa();
  We(n, e.domain, s), We(n, e.scheme, c), We(n, e.slashscheme, f), We(s, i, l), We(s, e.domain, s);
  const _ = me(s, bn);
  me(l, bn, _), me(c, bn, _), me(f, bn, _);
  const v = me(l, ri);
  We(v, i, l), We(v, e.domain, l);
  const m = xa();
  We(_, e.domain, m), We(m, e.domain, m);
  const y = me(m, ri);
  We(y, e.domain, m);
  const k = xa(IC);
  We(y, e.tld, k), We(y, e.utld, k), me(_, ts, k);
  const C = me(m, Oa);
  me(C, Oa, C), We(C, e.domain, m), We(k, e.domain, m), me(k, ri, y), me(k, Oa, C);
  const S = me(s, Oa), x = me(s, ri);
  me(S, Oa, S), We(S, e.domain, s), We(x, i, l), We(x, e.domain, s);
  const F = xa(Ws);
  We(x, e.tld, F), We(x, e.utld, F), We(F, e.domain, s), We(F, i, l), me(F, ri, x), me(F, Oa, S), me(F, bn, _);
  const M = me(F, ar), P = xa(Ws);
  We(M, e.numeric, P);
  const L = xa(Ws), le = xa();
  We(L, t, L), We(L, a, le), We(le, t, L), We(le, a, le), me(F, li, L), me(P, li, L);
  const te = me(c, ar), $ = me(f, ar), G = me($, li), Z = me(G, li);
  We(c, e.domain, s), me(c, ri, x), me(c, Oa, S), We(f, e.domain, s), me(f, ri, x), me(f, Oa, S), We(te, e.domain, L), me(te, li, L), me(te, Dl, L), We(Z, e.domain, L), We(Z, t, L), me(Z, li, L);
  const ee = [
    [Il, Ll],
    // {}
    [Eo, $o],
    // []
    [xo, No],
    // ()
    [Oo, Ro],
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
  for (let re = 0; re < ee.length; re++) {
    const [V, K] = ee[re], D = me(L, V);
    me(le, V, D);
    const Y = xa(Ws);
    We(D, t, Y);
    const ae = xa();
    We(D, a, ae), me(D, K, L), We(Y, t, Y), We(Y, a, ae), We(ae, t, Y), We(ae, a, ae), me(Y, K, L), me(ae, K, L);
  }
  return me(n, ts, F), me(n, Wd, LC), {
    start: n,
    tokens: dg
  };
}
function DC(e, t, a) {
  let i = a.length, n = 0, l = [], s = [];
  for (; n < i; ) {
    let c = e, f = null, _ = null, v = 0, m = null, y = -1;
    for (; n < i && !(f = c.go(a[n].t)); )
      s.push(a[n++]);
    for (; n < i && (_ = f || c.go(a[n].t)); )
      f = null, c = _, c.accepts() ? (y = 0, m = c) : y >= 0 && y++, n++, v++;
    if (y < 0)
      n -= v, n < i && (s.push(a[n]), n++);
    else {
      s.length > 0 && (l.push(Rc(Ip, t, s)), s = []), n -= y, v -= y;
      const k = m.t, C = a.slice(n - v, n);
      l.push(Rc(k, t, C));
    }
  }
  return s.length > 0 && l.push(Rc(Ip, t, s)), l;
}
function Rc(e, t, a) {
  const i = a[0].s, n = a[a.length - 1].e, l = t.slice(i, n);
  return new e(l, a);
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
  Zt.scanner = OC(Zt.customSchemes);
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
    return (a, i) => be((d(), p("h2", {
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
    return (a, i) => (d(), p("div", {
      "aria-labelledby": u(t),
      class: "empty-content",
      role: "note"
    }, [
      a.$slots.icon ? (d(), p("div", GC, [
        He(a.$slots, "icon", {}, void 0, !0)
      ])) : T("", !0),
      e.name !== "" || a.$slots.name ? (d(), p("div", {
        key: 1,
        id: u(t),
        class: "empty-content__name"
      }, [
        He(a.$slots, "name", {}, () => [
          Q(o(e.name), 1)
        ], !0)
      ], 8, KC)) : T("", !0),
      e.description !== "" || a.$slots.description ? (d(), p("p", WC, [
        He(a.$slots, "description", {}, () => [
          Q(o(e.description), 1)
        ], !0)
      ])) : T("", !0),
      a.$slots.action ? (d(), p("div", YC, [
        He(a.$slots, "action", {}, void 0, !0)
      ])) : T("", !0)
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
function i2(e, t, a, i, n, l) {
  return d(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (d(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      r("path", t2, [
        a.title ? (d(), p("title", a2, o(a.title), 1)) : T("", !0)
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
function c2(e, t, a, i, n, l) {
  return d(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (d(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      r("path", o2, [
        a.title ? (d(), p("title", u2, o(a.title), 1)) : T("", !0)
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
function g2(e, t, a, i, n, l) {
  return d(), p("span", aa(e.$attrs, {
    "aria-hidden": a.title ? null : "true",
    "aria-label": a.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (d(), p("svg", {
      fill: a.fillColor,
      class: "material-design-icon__svg",
      width: a.size,
      height: a.size,
      viewBox: "0 0 24 24"
    }, [
      r("path", v2, [
        a.title ? (d(), p("title", b2, o(a.title), 1)) : T("", !0)
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
    return (n, l) => (d(), p("button", {
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
      r("span", {
        class: Te([n.$style.sidebarTabsButton__icon, { [n.$style.sidebarTabsButton__icon_pop]: a.value }]),
        onAnimationend: l[0] || (l[0] = (s) => a.value = !1)
      }, [
        r("span", {
          class: Te([n.$style.sidebarTabsButton__iconLayer, { [n.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          ce(nd, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: ke(() => [
              r("span", {
                class: Te([n.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        r("span", {
          class: Te([n.$style.sidebarTabsButton__iconLayer, { [n.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          ce(nd, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: ke(() => [
              r("span", {
                class: Te([n.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      r("span", {
        class: Te(n.$style.sidebarTabsButton__name)
      }, o(e.tab.name), 3)
    ], 10, y2));
  }
}), w2 = "_sidebarTabsButton_q3kBA", k2 = "_sidebarTabsButton_legacy_KQ4d1", S2 = "_sidebarTabsButton_selected_Pjayf", C2 = "_sidebarTabsButton_animatedHighlight_uvp-0", T2 = "_sidebarTabsButton__name_rlQsL", A2 = "_sidebarTabsButton__icon_QzZg4", E2 = "_sidebarTabsButton__iconLayer_ZkZan", $2 = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", x2 = "_sidebarTabsButton__icon_pop_IA0By", N2 = "_sidebarTabsButton__legacyIcon_QhcNW", O2 = {
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
  sidebarTabsButton__legacyIcon: N2
}, R2 = {
  $style: O2
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
function D2(e, t, a, i, n, l) {
  const s = Xe("NcAppSidebarTabsButton");
  return d(), p("div", P2, [
    l.hasMultipleTabs || l.showForSingleTab ? (d(), p("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Te(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": n.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = ft(Se((...c) => l.focusPreviousTab && l.focusPreviousTab(...c), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = ft(Se((...c) => l.focusNextTab && l.focusNextTab(...c), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = ft(Se((...c) => l.focusActiveTabContent && l.focusActiveTabContent(...c), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = ft(Se((...c) => l.focusFirstTab && l.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = ft(Se((...c) => l.focusLastTab && l.focusLastTab(...c), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = ft(Se((...c) => l.focusFirstTab && l.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = ft(Se((...c) => l.focusLastTab && l.focusLastTab(...c), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...c) => l.handleHighlight && l.handleHighlight(...c)),
      onPointerleave: t[8] || (t[8] = (...c) => l.hideHighlight && l.hideHighlight(...c)),
      onFocusin: t[9] || (t[9] = (...c) => l.handleHighlight && l.handleHighlight(...c)),
      onFocusout: t[10] || (t[10] = (...c) => l.onHighlightFocusOut && l.onHighlightFocusOut(...c))
    }, [
      n.highlightEnabled ? (d(), p("div", {
        key: 0,
        class: Te(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": n.highlightVisible,
          "app-sidebar-tabs__highlight--animated": n.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": n.highlightOverActive
        }]),
        style: ha(l.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : T("", !0),
      (d(!0), p(W, null, oe(n.tabs, (c) => (d(), Pe(s, {
        id: `tab-button-${c.id}`,
        key: c.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${c.id}`,
        selected: n.activeTab === c.id,
        animatedHighlight: n.highlightEnabled,
        tab: c,
        "onUpdate:selected": (f) => l.setActive(c.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : T("", !0),
    r("div", {
      class: Te(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": l.hasMultipleTabs }])
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
function K2(e, t, a, i, n, l) {
  const s = Xe("IconDockRight"), c = Xe("NcButton"), f = Xe("NcLoadingIcon"), _ = Xe("IconStar"), v = Xe("IconStarOutline"), m = Xe("NcAppSidebarHeader"), y = Xe("IconArrowRight"), k = Xe("NcActions"), C = Xe("IconClose"), S = Xe("NcAppSidebarTabs"), x = Xe("NcEmptyContent"), F = Xf("focus"), M = Xf("click-outside");
  return d(), Pe(E1, {
    appear: "",
    name: "slide-right",
    onAfterEnter: l.onAfterEnter,
    onAfterLeave: l.onAfterLeave
  }, {
    default: ke(() => [
      be(r("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = ft((...P) => l.onKeydownEsc && l.onKeydownEsc(...P), ["esc"]))
      }, [
        l.ncContentSelector && !a.open && !a.noToggle ? (d(), Pe(Ed, {
          key: 0,
          to: l.ncContentSelector
        }, [
          ce(c, aa({
            ref: "toggle",
            "aria-label": l.t("Open sidebar"),
            class: ["app-sidebar__toggle", a.toggleClasses],
            variant: "tertiary"
          }, a.toggleAttrs, {
            onClick: t[0] || (t[0] = (P) => e.$emit("update:open", !0))
          }), {
            icon: ke(() => [
              He(e.$slots, "toggle-icon", {}, () => [
                ce(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : T("", !0),
        r("header", {
          class: Te(["app-sidebar-header", {
            "app-sidebar-header--with-figure": l.isSlotPopulated(e.$slots.header?.()) || a.background,
            "app-sidebar-header--compact": a.compact
          }])
        }, [
          a.empty ? (d(), Pe(m, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: a.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : He(e.$slots, "info", { key: 0 }, () => [
            r("div", z2, [
              l.isSlotPopulated(e.$slots.header?.()) || a.background ? (d(), p("div", {
                key: 0,
                class: Te(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": l.hasFigureClickListener
                }]),
                style: ha({
                  backgroundImage: `url(${a.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...P) => l.onFigureClick && l.onFigureClick(...P)),
                onKeydown: t[2] || (t[2] = ft((...P) => l.onFigureClick && l.onFigureClick(...P), ["enter"]))
              }, [
                He(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : T("", !0),
              r("div", {
                class: Te(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": l.canStar || l.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": a.nameEditable && !a.subname,
                  "app-sidebar-header__desc--with-subname--editable": a.nameEditable && a.subname,
                  "app-sidebar-header__desc--without-actions": !l.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                l.canStar || l.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (d(), p("div", j2, [
                  He(e.$slots, "tertiary-actions", {}, () => [
                    l.canStar ? (d(), Pe(c, {
                      key: 0,
                      "aria-label": n.favoriteTranslated,
                      pressed: n.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Se(l.toggleStarred, ["prevent"])
                    }, {
                      icon: ke(() => [
                        a.starLoading ? (d(), Pe(f, { key: 0 })) : n.isStarred ? (d(), Pe(_, {
                          key: 1,
                          size: 20
                        })) : (d(), Pe(v, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : T("", !0)
                  ], !0)
                ])) : T("", !0),
                r("div", B2, [
                  r("div", H2, [
                    be(ce(m, {
                      class: "app-sidebar-header__mainname",
                      name: a.name,
                      linkify: a.linkifyName,
                      title: a.title,
                      tabindex: a.nameEditable ? 0 : -1,
                      onClick: Se(l.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [rr, !a.nameEditable]
                    ]),
                    a.nameEditable ? be((d(), p("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Se((...P) => l.onSubmitName && l.onSubmitName(...P), ["prevent"]))
                    }, [
                      be(r("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: a.namePlaceholder,
                        value: a.name,
                        onKeydown: t[3] || (t[3] = ft(Se((...P) => l.onDismissEditing && l.onDismissEditing(...P), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...P) => l.onNameInput && l.onNameInput(...P))
                      }, null, 40, V2), [
                        [F]
                      ]),
                      ce(c, {
                        "aria-label": n.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: ke(() => [
                          ce(y, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [M, () => l.onSubmitName()]
                    ]) : T("", !0),
                    l.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (d(), Pe(k, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: a.forceMenu
                    }, {
                      default: ke(() => [
                        He(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : T("", !0)
                  ]),
                  a.subname.trim() !== "" || e.$slots.subname ? (d(), p("p", {
                    key: 0,
                    title: a.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    He(e.$slots, "subname", {}, () => [
                      Q(o(a.subname), 1)
                    ], !0)
                  ], 8, q2)) : T("", !0)
                ])
              ], 2)
            ])
          ], !0),
          ce(c, {
            ref: "closeButton",
            "aria-label": n.closeTranslated,
            title: n.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Se(l.closeSidebar, ["prevent"])
          }, {
            icon: ke(() => [
              ce(C, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          l.isSlotPopulated(e.$slots.description?.()) && !a.empty ? (d(), p("div", G2, [
            He(e.$slots, "description", {}, void 0, !0)
          ])) : T("", !0)
        ], 2),
        be(ce(S, {
          ref: "tabs",
          active: a.active,
          forceTabs: a.forceTabs,
          "onUpdate:active": l.onUpdateActive
        }, {
          default: ke(() => [
            He(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [rr, !a.loading]
        ]),
        a.loading ? (d(), Pe(x, { key: 1 }, {
          icon: ke(() => [
            ce(f, { size: 64 })
          ]),
          _: 1
        })) : T("", !0)
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
function iT(e, t, a, i, n, l) {
  return d(), p("li", {
    class: "action",
    role: l.isInSemanticMenu && "presentation"
  }, [
    r("a", {
      download: a.download,
      href: a.href,
      "aria-label": e.ariaLabel,
      target: a.target,
      title: a.title,
      class: "action-link focusable",
      rel: "nofollow noreferrer noopener",
      role: l.isInSemanticMenu && "menuitem",
      onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s))
    }, [
      He(e.$slots, "icon", {}, () => [
        r("span", {
          "aria-hidden": "true",
          class: Te(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: ha({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (d(), p("span", J2, [
        r("strong", Q2, o(e.name), 1),
        t[1] || (t[1] = r("br", null, null, -1)),
        r("span", {
          class: "action-link__longtext",
          textContent: o(e.text)
        }, null, 8, eT)
      ])) : e.isLongText ? (d(), p("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: o(e.text)
      }, null, 8, tT)) : (d(), p("span", aT, o(e.text), 1)),
      T("", !0)
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
    Ra(Pb, c), Ra(Db, "#content-vue"), Ra("appName", q(() => t.appName));
    const a = us(), i = /* @__PURE__ */ j(!1), n = /* @__PURE__ */ j(), l = q(() => n.value === "navigation" ? rT : nT);
    Cv(() => {
      const f = document.getElementById("skip-actions");
      f && (f.innerHTML = "", f.classList.add("vue-skip-actions"));
    });
    function s() {
      Mi("toggle-navigation", { open: !0 }), Pt(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function c(f) {
      i.value = f, n.value || (n.value = "navigation");
    }
    return (f, _) => (d(), p("div", {
      id: "content-vue",
      class: Te(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": u(En) }]])
    }, [
      (d(), Pe(Ed, { to: "#skip-actions" }, [
        r("div", lT, [
          r("div", sT, o(u(Ft)("Keyboard navigation help")), 1),
          r("div", oT, [
            be(ce(ci, {
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
            ce(ci, {
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
          be(ce(mu, {
            class: "vue-skip-actions__image",
            svg: l.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [rr, !u(a)]
          ])
        ])
      ])),
      He(f.$slots, "default", {}, void 0, !0)
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
    const t = e, a = /* @__PURE__ */ j(!1), i = /* @__PURE__ */ j(!1), n = /* @__PURE__ */ j(!1), l = /* @__PURE__ */ j(!1), s = /* @__PURE__ */ j([]), c = /* @__PURE__ */ j(!1), f = /* @__PURE__ */ j(0);
    async function _() {
      a.value = !a.value, !(!a.value || i.value || n.value) && await v();
    }
    async function v() {
      if (!n.value) {
        n.value = !0, l.value = !1;
        try {
          const m = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(f.value) }), y = await fetch(`${t.childrenUrl}?${m}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!y.ok) throw new Error("Shelf children request failed");
          const k = await y.json(), C = Array.isArray(k?.nodes) ? k.nodes : [];
          s.value.push(...C), c.value = k?.hasMore === !0, f.value = Number.isInteger(k?.nextOffset) ? k.nextOffset : s.value.length, i.value = !c.value;
        } catch {
          l.value = !0;
        } finally {
          n.value = !1;
        }
      }
    }
    return (m, y) => {
      const k = Xe("ShelfTreeNode", !0);
      return d(), p("li", dT, [
        e.node.hasChildren ? (d(), p("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(a.value),
          "aria-label": a.value ? u(b)("library", "Collapse {folder}", { folder: e.node.label }) : u(b)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: _
        }, o(a.value ? "−" : "+"), 9, fT)) : T("", !0),
        r("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          r("span", pT, [
            r("strong", null, [
              r("bdi", vT, o(e.node.label), 1)
            ]),
            r("span", null, o(u(yt)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          r("small", bT, [
            r("bdi", gT, o(e.node.path), 1)
          ])
        ], 8, hT),
        n.value ? (d(), p("small", mT, o(u(b)("library", "Loading folders…")), 1)) : l.value ? (d(), p("small", yT, o(u(b)("library", "Could not load folders.")), 1)) : T("", !0),
        a.value && s.value.length ? (d(), p("ul", _T, [
          (d(!0), p(W, null, oe(s.value, (C) => (d(), Pe(k, {
            key: C.id,
            node: C,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : T("", !0),
        a.value && c.value ? (d(), p("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: n.value,
          onClick: v
        }, o(u(b)("library", "Load more folders")), 9, wT)) : T("", !0)
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
    let l;
    return Ge(() => t.src, () => {
      n.value = "loading";
    }), Tt(() => {
      i.value || (l = new IntersectionObserver((s) => {
        s.some((c) => c.isIntersecting) && (i.value = !0, l.disconnect());
      }, { rootMargin: "240px" }), l.observe(a.value));
    }), Ca(() => l?.disconnect()), (s, c) => (d(), p("span", {
      ref_key: "frame",
      ref: a,
      class: Te(["library-cover-frame", { "library-cover-frame--error": n.value === "error" }])
    }, [
      n.value === "loading" ? (d(), p("span", ST)) : T("", !0),
      (d(), p("img", {
        key: e.src,
        class: Te(["library-cover-image", { "library-cover-image--loaded": n.value === "loaded" }]),
        src: i.value ? e.src : void 0,
        alt: "",
        loading: "lazy",
        decoding: "async",
        onLoad: c[0] || (c[0] = (f) => n.value = "loaded"),
        onError: c[1] || (c[1] = (f) => n.value = "error")
      }, null, 42, CT)),
      n.value === "error" ? (d(), p("span", TT, o(u(b)("library", "Cover unavailable")), 1)) : T("", !0)
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
    const n = i.status === 409 ? b("library", "This list changed in another tab. Reload the list before trying again. Your unsaved text is still here.") : i.status === 404 ? b("library", "This list or entry is no longer available.") : i.status === 422 ? b("library", "Check the name, text length and selected books, then try again.") : b("library", "Could not save or load the list. Check your connection and reload before retrying."), l = new Error(n);
    throw l.status = i.status, l;
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
const AT = ["aria-busy"], ET = { class: "library-list-inline-actions" }, $T = ["disabled", "aria-label"], xT = ["value"], NT = ["disabled"], OT = ["href"], RT = ["href"], IT = {
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
    const a = e, i = t, n = /* @__PURE__ */ j([]), l = /* @__PURE__ */ j(""), s = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j(""), f = /* @__PURE__ */ j("");
    async function _() {
      s.value = !0, c.value = "";
      try {
        const m = await mn(a.itemIds.length === 1 ? `?itemId=${a.itemIds[0]}` : "");
        n.value = m.lists;
        const y = Number(l.value) || a.preferredListId || Number(new URLSearchParams(window.location.search).get("addToList"));
        l.value = String(n.value.find((k) => k.id === y)?.id || n.value[0]?.id || "");
      } catch (m) {
        c.value = m.message;
      } finally {
        s.value = !1;
      }
    }
    async function v() {
      const m = n.value.find((k) => k.id === Number(l.value));
      if (s.value || !m || a.itemIds.length === 0) return;
      const y = [...a.itemIds];
      s.value = !0, c.value = "", f.value = "";
      try {
        const k = await mn(`/${m.id}/actions`, a.requestToken, { action: "add", revision: m.revision, itemIds: y });
        m.revision = k.revision, f.value = b("library", "Added: {added}. Already in list: {present}. Unavailable: {skipped}.", { added: k.added, present: k.alreadyPresent, skipped: k.skipped }), y.length === 1 && k.skipped === 0 && (m.containsItem = !0), i("added", k);
      } catch (k) {
        c.value = k.message;
      } finally {
        s.value = !1;
      }
    }
    return Ge(() => a.itemIds.join(","), () => {
      f.value = "";
    }), Tt(_), (m, y) => (d(), p("div", {
      class: "library-add-to-list",
      "aria-busy": s.value ? "true" : "false"
    }, [
      r("div", ET, [
        n.value.length ? be((d(), p("select", {
          key: 0,
          "onUpdate:modelValue": y[0] || (y[0] = (k) => l.value = k),
          disabled: s.value,
          "aria-label": u(b)("library", "Choose a list"),
          onChange: y[1] || (y[1] = (k) => f.value = "")
        }, [
          (d(!0), p(W, null, oe(n.value, (k) => (d(), p("option", {
            key: k.id,
            value: String(k.id)
          }, o(k.name), 9, xT))), 128))
        ], 40, $T)), [
          [tt, l.value]
        ]) : T("", !0),
        n.value.length ? (d(), p("button", {
          key: 1,
          type: "button",
          class: "button primary",
          disabled: s.value || e.itemIds.length === 0 || !l.value,
          onClick: v
        }, o(u(b)("library", "Add to list")), 9, NT)) : T("", !0),
        !s.value && !n.value.length && !c.value ? (d(), p("a", {
          key: 2,
          href: `${e.listsUrl}&new=1`
        }, o(u(b)("library", "Create a new list")), 9, OT)) : T("", !0),
        f.value && l.value ? (d(), p("a", {
          key: 3,
          href: `${e.listsUrl}&listId=${l.value}`
        }, o(u(b)("library", "Back to list")), 9, RT)) : T("", !0)
      ]),
      s.value ? (d(), p("p", IT, o(u(b)("library", "Loading or saving…")), 1)) : T("", !0),
      c.value ? (d(), p("p", LT, o(c.value), 1)) : T("", !0),
      c.value ? (d(), p("button", {
        key: 2,
        type: "button",
        class: "button secondary",
        disabled: s.value,
        onClick: _
      }, o(u(b)("library", "Reload list")), 9, PT)) : T("", !0),
      f.value ? (d(), p("p", DT, o(f.value), 1)) : T("", !0)
    ], 8, AT));
  }
}, FT = ["onKeydown"], MT = ["aria-label", "aria-describedby"], UT = ["id"], Be = {
  __name: "LabelHelp",
  props: { text: { type: String, required: !0 } },
  setup(e) {
    const t = Ay(), a = /* @__PURE__ */ j(null), i = /* @__PURE__ */ j(null), n = /* @__PURE__ */ j(!1), l = /* @__PURE__ */ j({});
    let s;
    const c = `${t}-label`;
    Tt(() => {
      const x = a.value?.closest("label"), F = x?.querySelector("input, select, textarea"), M = a.value?.closest("h1, h2, h3, h4");
      x && F && !x.htmlFor && (F.id ||= `${t}-control`, x.htmlFor = F.id);
      for (const P of [F, M])
        P && !P.hasAttribute("aria-label") && !P.hasAttribute("aria-labelledby") && P.setAttribute("aria-labelledby", c);
    });
    async function f() {
      clearTimeout(s), n.value = !0, await Pt(), _();
    }
    function _() {
      if (!a.value || !i.value) return;
      const x = a.value.getBoundingClientRect(), F = i.value.offsetHeight;
      l.value = { left: `${Math.max(8, Math.min(x.left, window.innerWidth - 336))}px`, top: `${Math.max(8, x.bottom + F + 12 < window.innerHeight ? x.bottom + 8 : x.top - F - 8)}px` };
    }
    function v() {
      clearTimeout(s);
    }
    function m() {
      clearTimeout(s), n.value = !1;
    }
    function y() {
      s = setTimeout(() => {
        a.value?.contains(document.activeElement) || m();
      }, 150);
    }
    function k(x) {
      !a.value?.contains(x.target) && !i.value?.contains(x.target) && m();
    }
    function C(x) {
      x.key === "Escape" && m();
    }
    function S(x) {
      n.value && (!(x.target instanceof Node) || !i.value?.contains(x.target)) && _();
    }
    return document.addEventListener("keydown", C), document.addEventListener("pointerdown", k), window.addEventListener("scroll", S, !0), Ca(() => {
      clearTimeout(s), document.removeEventListener("pointerdown", k), window.removeEventListener("scroll", S, !0), document.removeEventListener("keydown", C);
    }), (x, F) => (d(), p("span", {
      ref_key: "anchor",
      ref: a,
      class: "library-label-help",
      onPointerenter: F[0] || (F[0] = (M) => M.pointerType !== "touch" && f()),
      onPointerleave: y,
      onKeydown: ft(Se(m, ["stop", "prevent"]), ["esc"])
    }, [
      r("span", { id: c }, [
        He(x.$slots, "default")
      ]),
      r("button", {
        type: "button",
        class: "library-label-help-button",
        "aria-label": u(b)("library", "Help"),
        "aria-describedby": n.value ? u(t) : void 0,
        onFocus: f,
        onBlur: y,
        onClick: Se(f, ["stop", "prevent"])
      }, "?", 40, MT),
      (d(), Pe(Ed, { to: "body" }, [
        n.value ? (d(), p("span", {
          key: 0,
          id: u(t),
          ref_key: "popup",
          ref: i,
          class: "library-label-help-popup",
          role: "tooltip",
          style: ha(l.value),
          onPointerenter: v,
          onPointerleave: y
        }, o(e.text), 45, UT)) : T("", !0)
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
}, EA = ["disabled", "onClick"], $A = ["disabled", "onClick"], xA = ["disabled", "onClick"], NA = ["disabled", "onClick"], OA = {
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
    const a = e, i = t, n = /* @__PURE__ */ j([]), l = /* @__PURE__ */ j(null), s = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j(""), f = /* @__PURE__ */ j(""), _ = /* @__PURE__ */ j(!1), v = /* @__PURE__ */ Lt({ name: "", description: "" }), m = /* @__PURE__ */ j(null), y = /* @__PURE__ */ j(""), k = /* @__PURE__ */ j(!1), C = /* @__PURE__ */ j(null), S = /* @__PURE__ */ j(null), x = /* @__PURE__ */ j(null), F = /* @__PURE__ */ j(Number(new URLSearchParams(window.location.search).get("listId")) || null), M = Number(new URLSearchParams(window.location.search).get("addItem")) || null, P = q(() => !s.value && m.value === null);
    async function L(V = 1, K = _.value) {
      s.value = !0, c.value = "";
      try {
        F.value ? l.value = await mn(`/${F.value}?page=${V}`) : n.value = (await mn()).lists, K || (m.value = null, _.value = !1);
      } catch (D) {
        c.value = D.message;
      } finally {
        s.value = !1;
      }
    }
    function le() {
      v.name = l.value?.list.name || "", v.description = l.value?.list.description || "", _.value = !0, k.value = !1, c.value = "";
    }
    async function te() {
      s.value = !0, c.value = "", f.value = "";
      try {
        if (l.value)
          await mn(`/${l.value.list.id}/actions`, a.requestToken, { action: "update", revision: l.value.list.revision, ...v });
        else {
          F.value = (await mn("", a.requestToken, v)).list.id;
          const V = new URL(window.location.href);
          V.searchParams.set("listId", F.value), window.history.replaceState({}, "", V);
        }
        _.value = !1, await L(1, !0), i("changed"), f.value = b("library", "List saved."), await Pt(), x.value?.focus();
      } catch (V) {
        c.value = V.message;
      } finally {
        s.value = !1;
      }
    }
    async function $(V, K) {
      s.value = !0, c.value = "", f.value = "";
      try {
        const D = await mn(`/${l.value.list.id}/actions`, a.requestToken, { ...V, revision: l.value.list.revision });
        if (V.action === "delete") {
          l.value = null, F.value = null, k.value = !1;
          const Y = new URL(window.location.href);
          Y.searchParams.delete("listId"), window.history.replaceState({}, "", Y);
        }
        if (m.value = null, C.value = null, V.action === "note") {
          const Y = l.value.entries.find((ae) => ae.id === V.entryId);
          Y && (Y.note = V.note.trim()), l.value.list.revision = D.revision;
        } else await L(l.value?.page || 1);
        V.action === "delete" && i("changed"), f.value = K, await Pt(), V.action === "move" ? document.getElementById(`library-list-entry-${V.entryId}`)?.focus() : x.value?.focus();
      } catch (D) {
        c.value = D.message;
      } finally {
        s.value = !1;
      }
    }
    function G(V) {
      m.value = V.id, y.value = V.note, C.value = null;
    }
    function Z(V, K) {
      return $({ action: "move", entryId: V.id, direction: K }, b("library", "Reading order saved."));
    }
    function ee(V, K) {
      S.value = K.id, V.dataTransfer.setData("text/plain", String(K.id));
    }
    function re(V) {
      if (S.value === null || !P.value) return;
      const K = S.value;
      return S.value = null, $({ action: "move", entryId: K, beforeId: V }, b("library", "Reading order saved."));
    }
    return Tt(async () => {
      await L(), !F.value && new URLSearchParams(window.location.search).get("new") === "1" && le();
    }), (V, K) => (d(), p("section", {
      class: "library-personal-lists",
      "aria-label": u(b)("library", "Personal lists"),
      "aria-busy": s.value ? "true" : "false"
    }, [
      r("header", jT, [
        r("div", null, [
          F.value ? (d(), p("a", {
            key: 0,
            href: e.listsUrl
          }, "← " + o(u(b)("library", "All lists")), 9, BT)) : T("", !0),
          r("h1", {
            ref_key: "heading",
            ref: x,
            tabindex: "-1"
          }, [
            ce(Be, {
              text: u(b)("library", "Private reading lists, in your own order, with your own notes.")
            }, {
              default: ke(() => [
                Q(o(l.value?.list.name || u(b)("library", "Lists")), 1)
              ]),
              _: 1
            }, 8, ["text"])
          ], 512)
        ]),
        !l.value && !F.value ? (d(), p("button", {
          key: 0,
          type: "button",
          class: "button primary",
          disabled: s.value || _.value,
          onClick: le
        }, o(u(b)("library", "New list")), 9, HT)) : T("", !0)
      ]),
      c.value ? (d(), p("p", VT, o(c.value), 1)) : T("", !0),
      c.value ? (d(), p("button", {
        key: 1,
        type: "button",
        class: "button secondary",
        disabled: s.value,
        onClick: K[0] || (K[0] = (D) => L(l.value?.page || 1, !0))
      }, o(u(b)("library", "Reload list")), 9, qT)) : T("", !0),
      f.value ? (d(), p("p", GT, o(f.value), 1)) : T("", !0),
      s.value ? (d(), p("p", KT, o(u(b)("library", "Loading or saving…")), 1)) : T("", !0),
      _.value ? (d(), p("form", {
        key: 4,
        class: "library-list-editor",
        onSubmit: Se(te, ["prevent"])
      }, [
        r("label", null, [
          Q(o(u(b)("library", "List name")), 1),
          be(r("input", {
            "onUpdate:modelValue": K[1] || (K[1] = (D) => v.name = D),
            required: "",
            maxlength: "120",
            disabled: s.value
          }, null, 8, WT), [
            [Me, v.name]
          ])
        ]),
        r("label", null, [
          Q(o(u(b)("library", "Description / list note")), 1),
          be(r("textarea", {
            "onUpdate:modelValue": K[2] || (K[2] = (D) => v.description = D),
            rows: "3",
            maxlength: "10000",
            disabled: s.value
          }, null, 8, YT), [
            [Me, v.description]
          ])
        ]),
        r("div", ZT, [
          r("button", {
            type: "submit",
            class: "button primary",
            disabled: s.value || !v.name.trim()
          }, o(u(b)("library", "Save list")), 9, XT),
          r("button", {
            type: "button",
            class: "button secondary",
            disabled: s.value,
            onClick: K[3] || (K[3] = (D) => _.value = !1)
          }, o(u(b)("library", "Cancel")), 9, JT)
        ])
      ], 32)) : T("", !0),
      l.value ? (d(), p(W, { key: 5 }, [
        l.value.list.description && !_.value ? (d(), p("p", QT, o(l.value.list.description), 1)) : T("", !0),
        _.value ? T("", !0) : (d(), p("div", eA, [
          r("a", {
            class: "button primary",
            href: `${e.catalogueUrl}?addToList=${l.value.list.id}`
          }, o(u(b)("library", "Add books from catalogue")), 9, tA),
          r("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value,
            onClick: le
          }, o(u(b)("library", "Edit list")), 9, aA),
          r("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value,
            onClick: K[4] || (K[4] = (D) => k.value = !k.value)
          }, o(u(b)("library", "Delete list")), 9, iA)
        ])),
        k.value ? (d(), p("div", {
          key: 2,
          class: "library-list-confirm",
          role: "group",
          "aria-label": u(b)("library", "Confirm list deletion")
        }, [
          r("p", null, o(u(b)("library", "Delete this list and all its notes? Books stay in your library. This cannot be undone.")), 1),
          r("button", {
            class: "button",
            type: "button",
            disabled: !P.value,
            onClick: K[5] || (K[5] = (D) => $({ action: "delete" }, u(b)("library", "List deleted.")))
          }, o(u(b)("library", "Delete list and notes")), 9, rA),
          r("button", {
            class: "button secondary",
            type: "button",
            disabled: s.value,
            onClick: K[6] || (K[6] = (D) => k.value = !1)
          }, o(u(b)("library", "Cancel")), 9, lA)
        ], 8, nA)) : T("", !0),
        l.value.total === 0 && !s.value ? (d(), p("p", sA, o(u(b)("library", "This list is empty. Select books in the catalogue and choose Add to list.")), 1)) : T("", !0),
        r("ol", {
          class: "library-list-entries",
          start: (l.value.page - 1) * 25 + 1
        }, [
          (d(!0), p(W, null, oe(l.value.entries, (D) => (d(), p("li", {
            id: `library-list-entry-${D.id}`,
            key: D.id,
            class: "library-list-entry",
            tabindex: "-1",
            onDragover: K[11] || (K[11] = Se(() => {
            }, ["prevent"])),
            onDrop: Se((Y) => re(D.id), ["prevent"])
          }, [
            r("div", cA, [
              r("span", {
                class: "library-list-drag",
                draggable: P.value,
                title: u(b)("library", "Drag to reorder, or use Move up and Move down"),
                "aria-hidden": "true",
                onDragstart: (Y) => ee(Y, D),
                onDragend: K[7] || (K[7] = (Y) => S.value = null)
              }, "⠿", 40, dA),
              D.book ? (d(), p("img", {
                key: 0,
                src: D.book.coverUrl,
                alt: "",
                width: "48",
                height: "64",
                loading: "lazy"
              }, null, 8, fA)) : T("", !0),
              r("div", hA, [
                D.book ? (d(), p("h2", pA, [
                  r("a", {
                    href: D.book.detailsUrl,
                    dir: "auto"
                  }, o(D.book.title), 9, vA)
                ])) : (d(), p("h2", bA, o(u(b)("library", "Unavailable book")), 1)),
                D.book?.creators ? (d(), p("p", gA, o(D.book.creators), 1)) : T("", !0),
                D.book ? T("", !0) : (d(), p("p", mA, o(u(b)("library", "The file is missing or access is unavailable. Your note and place in the list are kept.")), 1))
              ]),
              D.book ? (d(), p("a", {
                key: 1,
                class: "button secondary",
                href: D.book.openUrl
              }, o(u(b)("library", "Open")), 9, yA)) : T("", !0)
            ]),
            D.note && m.value !== D.id ? (d(), p("p", _A, o(D.note), 1)) : T("", !0),
            m.value === D.id ? (d(), p("form", {
              key: 1,
              class: "library-list-editor",
              onSubmit: Se((Y) => $({ action: "note", entryId: D.id, note: y.value }, u(b)("library", "Note saved.")), ["prevent"])
            }, [
              r("label", null, [
                Q(o(u(b)("library", "Your note for this book in this list")), 1),
                be(r("textarea", {
                  "onUpdate:modelValue": K[8] || (K[8] = (Y) => y.value = Y),
                  maxlength: "10000",
                  rows: "3",
                  disabled: s.value
                }, null, 8, kA), [
                  [Me, y.value]
                ])
              ]),
              r("div", SA, [
                r("button", {
                  type: "submit",
                  class: "button primary",
                  disabled: s.value
                }, o(u(b)("library", "Save note")), 9, CA),
                r("button", {
                  type: "button",
                  class: "button secondary",
                  disabled: s.value,
                  onClick: K[9] || (K[9] = (Y) => m.value = null)
                }, o(u(b)("library", "Cancel")), 9, TA)
              ])
            ], 40, wA)) : (d(), p("div", AA, [
              r("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value,
                onClick: (Y) => G(D)
              }, o(D.note ? u(b)("library", "Edit note") : u(b)("library", "Add note")), 9, EA),
              r("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value || D.number === 1,
                onClick: (Y) => Z(D, "up")
              }, o(u(b)("library", "Move up")), 9, $A),
              r("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value || D.number === l.value.total,
                onClick: (Y) => Z(D, "down")
              }, o(u(b)("library", "Move down")), 9, xA),
              r("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value,
                onClick: (Y) => C.value = D.id
              }, o(u(b)("library", "Remove from list")), 9, NA)
            ])),
            C.value === D.id ? (d(), p("div", OA, [
              r("p", null, o(u(b)("library", "Remove this entry and its note? The book stays in your library.")), 1),
              r("button", {
                type: "button",
                class: "button",
                disabled: !P.value,
                onClick: (Y) => $({ action: "remove", entryId: D.id }, u(b)("library", "Book removed from list."))
              }, o(u(b)("library", "Remove entry and note")), 9, RA),
              r("button", {
                type: "button",
                class: "button secondary",
                disabled: s.value,
                onClick: K[10] || (K[10] = (Y) => C.value = null)
              }, o(u(b)("library", "Cancel")), 9, IA)
            ])) : T("", !0)
          ], 40, uA))), 128))
        ], 8, oA),
        l.value.pages > 1 ? (d(), p("nav", {
          key: 4,
          class: "library-list-actions",
          "aria-label": u(b)("library", "List pages")
        }, [
          r("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value || l.value.page === 1,
            onClick: K[12] || (K[12] = (D) => L(l.value.page - 1))
          }, o(u(b)("library", "Previous page")), 9, PA),
          r("span", null, o(u(b)("library", "Page {page} of {pages}", { page: l.value.page, pages: l.value.pages })), 1),
          r("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value || l.value.page === l.value.pages,
            onClick: K[13] || (K[13] = (D) => L(l.value.page + 1))
          }, o(u(b)("library", "Next page")), 9, DA)
        ], 8, LA)) : T("", !0)
      ], 64)) : F.value ? T("", !0) : (d(), p(W, { key: 6 }, [
        u(M) ? (d(), Pe(hd, {
          key: 0,
          "item-ids": [u(M)],
          "request-token": e.requestToken,
          "lists-url": e.listsUrl,
          onAdded: K[14] || (K[14] = (D) => L())
        }, null, 8, ["item-ids", "request-token", "lists-url"])) : T("", !0),
        !n.value.length && !s.value && !_.value ? (d(), p("p", FA, o(u(b)("library", "Create your first list for a reading plan, a project or books to return to.")), 1)) : T("", !0),
        r("ul", MA, [
          (d(!0), p(W, null, oe(n.value, (D) => (d(), p("li", {
            key: D.id
          }, [
            r("a", {
              href: `${e.listsUrl}&listId=${D.id}`
            }, [
              r("h2", zA, o(D.name), 1),
              r("p", null, o(u(b)("library", "Books: {count}", { count: D.count })), 1),
              D.description ? (d(), p("p", jA, o(D.description), 1)) : T("", !0)
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
    const t = e, a = /* @__PURE__ */ j(null), i = /* @__PURE__ */ j(null), n = /* @__PURE__ */ j(!1), l = /* @__PURE__ */ j(""), s = /* @__PURE__ */ j(""), c = /* @__PURE__ */ j(1), f = /* @__PURE__ */ j(null);
    async function _(k, C = null) {
      const S = await fetch(Et("/apps/library/api/authors/conflicts") + k, {
        credentials: "same-origin",
        cache: "no-store",
        method: C === null ? "GET" : "POST",
        headers: { Accept: "application/json", ...C === null ? {} : { "Content-Type": "application/json", requesttoken: t.requestToken } },
        ...C === null ? {} : { body: JSON.stringify(C) }
      });
      if (!S.ok) throw new Error(S.status === 409 ? b("library", "This book or its author assignments changed. Reload and review again.") : b("library", "Could not load or resolve the author change. Please retry."));
      return S.json();
    }
    async function v(k = 1) {
      n.value = !0, l.value = "", i.value = null;
      try {
        a.value = await _(`?page=${k}`), c.value = k;
      } catch (C) {
        l.value = C.message;
      } finally {
        n.value = !1;
      }
    }
    async function m(k) {
      n.value = !0, l.value = "", s.value = "", i.value = null;
      try {
        i.value = await _(`/${k.id}`), await Pt(), f.value?.focus();
      } catch (C) {
        l.value = C.message;
      } finally {
        n.value = !1;
      }
    }
    async function y(k) {
      n.value = !0, l.value = "";
      try {
        await _(`/${i.value.id}`, { choice: k, token: i.value.token }), s.value = b("library", "Author change resolved. Book metadata and files are unchanged."), await v(c.value), !a.value.books.length && c.value > 1 && await v(c.value - 1);
      } catch (C) {
        l.value = C.message, i.value = null;
      } finally {
        n.value = !1;
      }
    }
    return Tt(() => v()), (k, C) => (d(), p("section", {
      class: "author-conflicts",
      "aria-busy": n.value,
      "aria-labelledby": "author-conflicts-heading"
    }, [
      r("a", {
        href: `${e.catalogueUrl}?authors=1`
      }, o(u(b)("library", "All authors")), 9, VA),
      r("h1", qA, o(u(b)("library", "Review imported author changes")), 1),
      n.value ? (d(), p("p", GA, o(u(b)("library", "Loading")), 1)) : T("", !0),
      s.value ? (d(), p("p", KA, o(s.value), 1)) : T("", !0),
      l.value ? (d(), p("p", WA, [
        Q(o(l.value) + " ", 1),
        r("button", {
          disabled: n.value,
          onClick: C[0] || (C[0] = (S) => v(c.value))
        }, o(u(b)("library", "Reload")), 9, YA)
      ])) : T("", !0),
      i.value ? (d(), p("section", {
        key: 3,
        class: "author-conflict-review",
        "aria-label": u(b)("library", "Review change")
      }, [
        r("h2", {
          ref_key: "heading",
          ref: f,
          tabindex: "-1",
          dir: "auto"
        }, o(i.value.title), 513),
        r("div", XA, [
          r("section", null, [
            r("h3", null, o(u(b)("library", "Current assignments")), 1),
            r("ol", null, [
              (d(!0), p(W, null, oe(i.value.current, (S, x) => (d(), p("li", { key: x }, [
                r("strong", JA, o(S.name), 1),
                r("span", QA, o(u(b)("library", "Original credit: {credit}", { credit: S.credit })), 1)
              ]))), 128))
            ]),
            i.value.current.length ? T("", !0) : (d(), p("p", eE, o(u(b)("library", "No authors recorded")), 1))
          ]),
          r("section", null, [
            r("h3", null, o(u(b)("library", "Imported credits")), 1),
            r("ol", null, [
              (d(!0), p(W, null, oe(i.value.incoming, (S, x) => (d(), p("li", {
                key: x,
                dir: "auto"
              }, o(S), 1))), 128))
            ]),
            i.value.incoming.length ? T("", !0) : (d(), p("p", tE, o(u(b)("library", "No authors recorded")), 1))
          ])
        ]),
        r("p", null, o(u(b)("library", "Using imported authors replaces this book’s current assignments. Book metadata and files stay unchanged. This decision has no automatic undo.")), 1),
        r("div", aE, [
          r("button", {
            disabled: n.value,
            onClick: C[1] || (C[1] = (S) => y("keep"))
          }, o(u(b)("library", "Keep current assignments")), 9, iE),
          r("button", {
            disabled: n.value,
            onClick: C[2] || (C[2] = (S) => y("import"))
          }, o(u(b)("library", "Use imported authors")), 9, nE),
          r("button", {
            disabled: n.value,
            onClick: C[3] || (C[3] = (S) => i.value = null)
          }, o(u(b)("library", "Cancel")), 9, rE)
        ])
      ], 8, ZA)) : a.value ? (d(), p(W, { key: 4 }, [
        a.value.books.length ? T("", !0) : (d(), p("p", lE, o(u(b)("library", "No author changes need review.")), 1)),
        r("ul", sE, [
          (d(!0), p(W, null, oe(a.value.books, (S) => (d(), p("li", {
            key: S.id
          }, [
            r("a", {
              href: u(Et)("/apps/library/items/{id}", { id: S.id }),
              dir: "auto"
            }, o(S.title), 9, oE),
            r("button", {
              disabled: n.value,
              onClick: (x) => m(S)
            }, o(u(b)("library", "Review change")), 9, uE)
          ]))), 128))
        ]),
        r("nav", {
          "aria-label": u(b)("library", "Author pages")
        }, [
          r("button", {
            disabled: n.value || c.value === 1,
            onClick: C[4] || (C[4] = (S) => v(c.value - 1))
          }, o(u(b)("library", "Previous")), 9, dE),
          r("span", null, o(u(b)("library", "Page {page}", { page: c.value })), 1),
          r("button", {
            disabled: n.value || !a.value.hasNext,
            onClick: C[5] || (C[5] = (S) => v(c.value + 1))
          }, o(u(b)("library", "Next")), 9, fE)
        ], 8, cE)
      ], 64)) : T("", !0)
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
}, xE = ["href"], NE = ["disabled"], OE = {
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
}, u$ = ["disabled"], c$ = ["aria-label"], d$ = { role: "status" }, f$ = { for: "target-search" }, h$ = ["disabled"], p$ = ["disabled"], v$ = ["disabled"], b$ = { for: "target-author" }, g$ = ["disabled"], m$ = { value: "" }, y$ = ["value"], _$ = ["disabled"], w$ = ["disabled"], k$ = ["aria-label"], S$ = { key: 0 }, C$ = ["disabled"], T$ = ["aria-label"], A$ = { for: "author-book-search" }, E$ = ["disabled"], $$ = ["disabled"], x$ = { for: "author-book-sort" }, N$ = ["disabled"], O$ = { value: "title" }, R$ = { value: "newest" }, I$ = { value: "series" }, L$ = { class: "author-view-controls" }, P$ = ["aria-pressed"], D$ = ["aria-pressed"], F$ = { key: 0 }, M$ = { key: 1 }, U$ = { key: 0 }, z$ = ["value", "aria-label", "disabled"], j$ = ["href", "aria-label"], B$ = { class: "author-book-description" }, H$ = ["href"], V$ = {
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
    const t = e, a = /* @__PURE__ */ j(null), i = /* @__PURE__ */ j(!1), n = /* @__PURE__ */ j(""), l = /* @__PURE__ */ j(""), s = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j([]), f = /* @__PURE__ */ j(""), _ = /* @__PURE__ */ j([]), v = /* @__PURE__ */ j(""), m = /* @__PURE__ */ j(null), y = /* @__PURE__ */ j(!1), k = /* @__PURE__ */ j([]), C = /* @__PURE__ */ j([]), S = q(() => C.value.filter((I) => I.status !== "completed" && I.status !== "cancelled"));
    let x = null;
    const F = /* @__PURE__ */ j(""), M = /* @__PURE__ */ j(!1), P = /* @__PURE__ */ j(1), L = new URLSearchParams(location.search).get("authorConflicts") === "1", le = /* @__PURE__ */ j(Number(new URLSearchParams(location.search).get("authorId")) || null), te = /* @__PURE__ */ j(""), $ = /* @__PURE__ */ j("title"), G = /* @__PURE__ */ j("grid"), Z = /* @__PURE__ */ j(!1), ee = /* @__PURE__ */ j(!1), re = /* @__PURE__ */ j(null), V = /* @__PURE__ */ j(!1), K = /* @__PURE__ */ Lt({ display_name: "", sort_name: "", given_name: "", family_name: "", biography: "" }), D = q(() => (a.value?.author?.display_name || "").trim().split(/\s+/u).slice(0, 2).map((I) => Array.from(I)[0] || "").join("").toLocaleUpperCase()), Y = q(() => Et("/apps/library/api/authors/{id}/photo", { id: le.value }) + "?v=" + encodeURIComponent(a.value?.author?.photo_key || "")), ae = q(() => {
      if ($.value !== "series") return [{ name: null, books: a.value?.books || [] }];
      const I = /* @__PURE__ */ new Map();
      for (const O of a.value?.books || []) {
        const N = O.series_name || "";
        I.has(N) || I.set(N, []), I.get(N).push(O);
      }
      return Array.from(I, ([O, N]) => ({ name: O, books: N }));
    });
    function J(I) {
      return Et("/apps/library/items/{id}/cover", { id: I.id }) + "?v=" + encodeURIComponent(`${I.cover_revision || ""}-${I.etag || ""}`);
    }
    function U(I) {
      re.value = I.target.files?.[0] || null, re.value && (V.value = !1);
    }
    async function H(I, O = null) {
      const N = await fetch(Et("/apps/library/api/authors") + I, {
        credentials: "same-origin",
        cache: "no-store",
        method: O === null ? "GET" : "POST",
        headers: { Accept: "application/json", ...O === null ? {} : { ...O instanceof FormData ? {} : { "Content-Type": "application/json" }, requesttoken: t.requestToken } },
        ...O === null ? {} : { body: O instanceof FormData ? O : JSON.stringify(O) }
      });
      if (!N.ok && (await N.clone().json().catch(() => ({}))).error === "invalid_photo") throw new Error(b("library", "Choose a valid JPEG, PNG or WebP image up to 10 MiB."));
      if (!N.ok) throw new Error(N.status === 413 ? b("library", "This change exceeds the supported size. Reassign books in smaller groups.") : N.status === 503 ? b("library", "Author migration must finish before editing. Refresh to check progress.") : N.status === 409 ? b("library", "The author or affected books changed. Reload and review again. Your draft is preserved.") : b("library", "Could not load or save the author. Check the fields and reload before retrying."));
      return N.json();
    }
    async function ye(I = 1) {
      i.value = !0, n.value = "";
      try {
        a.value = await H(le.value ? `/${le.value}?page=${I}&search=${encodeURIComponent(te.value.trim())}&sort=${$.value}` : `?page=${I}&search=${encodeURIComponent(F.value.trim())}&unused=${M.value ? 1 : 0}`), P.value = I, m.value = null, c.value = [], ee.value = !1, k.value = await H("/history"), C.value = await H("/tasks"), Re();
      } catch (O) {
        n.value = O.message;
      } finally {
        i.value = !1;
      }
    }
    function Re() {
      x !== null && clearTimeout(x), x = null, C.value.some((I) => I.status === "queued" || I.status === "running") && (x = setTimeout($e, 5e3));
    }
    async function $e() {
      x = null;
      try {
        const I = C.value.some((O) => O.status === "queued" || O.status === "running");
        if (C.value = await H("/tasks"), I && !C.value.some((O) => O.status === "queued" || O.status === "running")) {
          await ye(P.value);
          return;
        }
      } catch (I) {
        n.value = I.message;
      }
      Re();
    }
    function Ue(I) {
      return I.status === "queued" ? b("library", "Queued") : I.status === "running" ? b("library", "Running") : I.status === "conflict" ? b("library", "Needs review") : b("library", "Failed");
    }
    function Ze() {
      for (const I of Object.keys(K)) K[I] = a.value.author[I] || "";
      s.value = !0, l.value = "", re.value = null, V.value = !1;
    }
    async function ct() {
      i.value = !0, n.value = "";
      try {
        const I = new FormData();
        for (const [O, N] of Object.entries(K)) I.set(O, N);
        I.set("revision", String(a.value.author.revision)), I.set("remove_photo", V.value ? "1" : "0"), re.value && I.set("photo", re.value), await H(`/${le.value}`, I), s.value = !1, ee.value = !1, await ye(1), l.value = b("library", "Author saved. Original book credits are preserved.");
      } catch (I) {
        n.value = I.message;
      } finally {
        i.value = !1;
      }
    }
    function _e() {
      y.value = !1, m.value = null, c.value = [];
    }
    async function Oe() {
      i.value = !0, n.value = "", m.value = null;
      try {
        _.value = (await H(`?search=${encodeURIComponent(f.value.trim())}`)).authors.filter((I) => Number(I.id) !== le.value), v.value = "";
      } catch (I) {
        n.value = I.message;
      } finally {
        i.value = !1;
      }
    }
    async function ge() {
      i.value = !0, n.value = "", m.value = null;
      try {
        const I = await H("", { name: f.value.trim() });
        _.value = [I], v.value = String(I.id);
      } catch (I) {
        n.value = I.message;
      } finally {
        i.value = !1;
      }
    }
    async function De() {
      i.value = !0, n.value = "", m.value = null;
      try {
        m.value = await H(`/${le.value}/preview`, { target: Number(v.value), items: c.value });
      } catch (I) {
        n.value = I.message;
      } finally {
        i.value = !1;
      }
    }
    async function nt() {
      i.value = !0, n.value = "";
      try {
        const I = await H(`/${le.value}/assign`, { target: Number(v.value), items: c.value, token: m.value.token });
        l.value = I.queued ? b("library", "Author change queued. The books will update together when the background job finishes.") : b("library", "Author assignments saved. Original credits are preserved. Undo is available in Recent changes."), y.value = !1, m.value = null, await ye(P.value);
      } catch (I) {
        n.value = I.message;
      } finally {
        i.value = !1;
      }
    }
    async function ie(I) {
      i.value = !0, n.value = "";
      try {
        const O = await H(`/history/${I.id}/undo`, {});
        l.value = O.queued ? b("library", "Author undo queued. The books will update together when the background job finishes.") : b("library", "Author change undone."), await ye(P.value);
      } catch (O) {
        n.value = O.message;
      } finally {
        i.value = !1;
      }
    }
    async function A(I) {
      i.value = !0, n.value = "";
      try {
        await H(`/tasks/${I.id}/cancel`, {}), await ye(P.value);
      } catch (O) {
        n.value = O.message;
      } finally {
        i.value = !1;
      }
    }
    async function R(I) {
      i.value = !0, n.value = "";
      try {
        await H(`/${I.id}/remove-unused`, { revision: Number(I.revision) }), l.value = b("library", "Unused author removed."), await ye(P.value);
      } catch (O) {
        n.value = O.message;
      } finally {
        i.value = !1;
      }
    }
    return Tt(() => {
      L || ye();
    }), Dr(() => {
      x !== null && clearTimeout(x);
    }), (I, O) => L ? (d(), Pe(pE, {
      key: 0,
      "request-token": e.requestToken,
      "catalogue-url": e.catalogueUrl
    }, null, 8, ["request-token", "catalogue-url"])) : (d(), p("section", {
      key: 1,
      class: "library-authors",
      "aria-busy": i.value,
      "aria-labelledby": "authors-heading"
    }, [
      le.value ? (d(), p("a", {
        key: 0,
        href: `${e.catalogueUrl}?authors=1`
      }, o(u(b)("library", "All authors")), 9, bE)) : T("", !0),
      r("header", gE, [
        le.value && a.value?.author ? (d(), p("div", mE, [
          a.value.author.photo_key && !ee.value ? (d(), p("img", {
            key: a.value.author.photo_key,
            src: Y.value,
            alt: u(b)("library", "Portrait of {author}", { author: a.value.author.display_name }),
            onError: O[0] || (O[0] = (N) => ee.value = !0)
          }, null, 40, yE)) : (d(), p("span", _E, o(D.value), 1))
        ])) : T("", !0),
        r("h1", wE, o(a.value?.author?.display_name || u(b)("library", "Authors")), 1)
      ]),
      n.value ? (d(), p("p", kE, [
        Q(o(n.value) + " ", 1),
        r("button", {
          disabled: i.value,
          onClick: O[1] || (O[1] = (N) => ye(P.value))
        }, o(u(b)("library", "Reload")), 9, SE)
      ])) : T("", !0),
      l.value ? (d(), p("p", CE, o(l.value), 1)) : T("", !0),
      i.value ? (d(), p("p", TE, o(u(b)("library", "Loading")), 1)) : T("", !0),
      le.value ? a.value?.author ? (d(), p(W, { key: 5 }, [
        r("p", null, o(u(yt)("library", "%n book", "%n books", a.value.bookCount)), 1),
        a.value.bookCount ? (d(), p("p", DE, [
          r("a", {
            href: `${e.catalogueUrl}?authorId=${le.value}`
          }, o(u(b)("library", "Browse this author in the catalogue")), 9, FE)
        ])) : T("", !0),
        a.value.author.biography && !s.value ? (d(), p("section", ME, [
          r("h2", null, o(u(b)("library", "Biography")), 1),
          r("p", UE, o(Z.value || a.value.author.biography.length <= 320 ? a.value.author.biography : a.value.author.biography.slice(0, 280) + "…"), 1),
          a.value.author.biography.length > 320 ? (d(), p("button", {
            key: 0,
            "aria-expanded": Z.value,
            onClick: O[6] || (O[6] = (N) => Z.value = !Z.value)
          }, o(Z.value ? u(b)("library", "Show less") : u(b)("library", "Show more")), 9, zE)) : T("", !0)
        ])) : T("", !0),
        a.value.author.merged_into ? (d(), p("p", jE, [
          r("a", {
            href: `${e.catalogueUrl}?authors=1&authorId=${a.value.author.merged_into}`
          }, o(u(b)("library", "Open merged author")), 9, BE)
        ])) : T("", !0),
        !a.value.canEdit && !a.value.author.merged_into ? (d(), p("p", HE, [
          Q(o(u(b)("library", "Author migration must finish before editing. Refresh to check progress.")) + " ", 1),
          r("button", {
            disabled: i.value,
            onClick: O[7] || (O[7] = (N) => ye(P.value))
          }, o(u(b)("library", "Refresh")), 9, VE)
        ])) : T("", !0),
        !s.value && !y.value ? (d(), p("button", {
          key: 4,
          disabled: i.value || !a.value.canEdit,
          onClick: Ze
        }, o(u(b)("library", "Edit author")), 9, qE)) : T("", !0),
        s.value ? (d(), p("form", {
          key: 5,
          class: "author-editor",
          onSubmit: Se(ct, ["prevent"])
        }, [
          r("p", null, o(u(b)("library", "This edits the shared author record. Book credits and files stay unchanged.")), 1),
          r("label", GE, o(u(b)("library", "Preferred name")), 1),
          be(r("input", {
            id: "author-display",
            "onUpdate:modelValue": O[8] || (O[8] = (N) => K.display_name = N),
            maxlength: "255",
            required: "",
            disabled: i.value
          }, null, 8, KE), [
            [Me, K.display_name]
          ]),
          r("label", WE, [
            Q(o(u(b)("library", "Sort name")) + " ", 1),
            ce(Be, {
              text: u(b)("library", "For example: Doe, John. Controls author directory ordering.")
            }, null, 8, ["text"])
          ]),
          be(r("input", {
            id: "author-sort",
            "onUpdate:modelValue": O[9] || (O[9] = (N) => K.sort_name = N),
            maxlength: "255",
            required: "",
            disabled: i.value
          }, null, 8, YE), [
            [Me, K.sort_name]
          ]),
          r("label", ZE, [
            Q(o(u(b)("library", "Given name")) + " ", 1),
            ce(Be, {
              text: u(b)("library", "Optional. Leave empty for organisations or names you cannot safely split.")
            }, null, 8, ["text"])
          ]),
          be(r("input", {
            id: "author-given",
            "onUpdate:modelValue": O[10] || (O[10] = (N) => K.given_name = N),
            maxlength: "255",
            disabled: i.value
          }, null, 8, XE), [
            [Me, K.given_name]
          ]),
          r("label", JE, o(u(b)("library", "Family name")), 1),
          be(r("input", {
            id: "author-family",
            "onUpdate:modelValue": O[11] || (O[11] = (N) => K.family_name = N),
            maxlength: "255",
            disabled: i.value
          }, null, 8, QE), [
            [Me, K.family_name]
          ]),
          r("label", e$, [
            Q(o(u(b)("library", "Biography")) + " ", 1),
            ce(Be, {
              text: u(b)("library", "Optional plain text, up to 10,000 characters. This profile is private to your account.")
            }, null, 8, ["text"])
          ]),
          be(r("textarea", {
            id: "author-bio",
            "onUpdate:modelValue": O[12] || (O[12] = (N) => K.biography = N),
            maxlength: "10000",
            rows: "5",
            disabled: i.value
          }, null, 8, t$), [
            [Me, K.biography]
          ]),
          r("label", a$, [
            Q(o(u(b)("library", "Author photo")) + " ", 1),
            ce(Be, {
              text: u(b)("library", "JPEG, PNG or WebP, up to 10 MiB. Saved as a small square portrait; the original upload is discarded.")
            }, null, 8, ["text"])
          ]),
          r("input", {
            id: "author-photo",
            type: "file",
            accept: "image/jpeg,image/png,image/webp",
            disabled: i.value,
            onChange: U
          }, null, 40, i$),
          a.value.author.photo_key ? (d(), p("label", n$, [
            be(r("input", {
              "onUpdate:modelValue": O[13] || (O[13] = (N) => V.value = N),
              type: "checkbox",
              disabled: i.value || !!re.value
            }, null, 8, r$), [
              [qa, V.value]
            ]),
            Q(" " + o(u(b)("library", "Remove photo")), 1)
          ])) : T("", !0),
          r("div", null, [
            r("button", {
              class: "primary",
              disabled: i.value,
              type: "submit"
            }, o(u(b)("library", "Save author")), 9, l$),
            O[29] || (O[29] = Q()),
            r("button", {
              disabled: i.value,
              type: "button",
              onClick: O[14] || (O[14] = (N) => s.value = !1)
            }, o(u(b)("library", "Cancel")), 9, s$)
          ])
        ], 32)) : T("", !0),
        !s.value && !y.value ? (d(), p("details", o$, [
          r("summary", null, o(u(b)("library", "More actions")), 1),
          r("button", {
            disabled: i.value || !a.value.canEdit,
            onClick: O[15] || (O[15] = (N) => y.value = !0)
          }, o(u(b)("library", "Merge or reassign")), 9, u$)
        ])) : T("", !0),
        y.value ? (d(), p("section", {
          key: 7,
          class: "author-assignment",
          "aria-label": u(b)("library", "Merge or reassign")
        }, [
          r("label", null, [
            Q(o(u(b)("library", "Books to change")) + " ", 1),
            ce(Be, {
              text: u(b)("library", "Leave all books unselected to merge this author. Select individual books below to reassign only those credits, keeping both authors.")
            }, null, 8, ["text"])
          ]),
          r("p", d$, o(c.value.length ? u(yt)("library", "%n selected book", "%n selected books", c.value.length) : u(b)("library", "Merge all books into the chosen author")), 1),
          r("form", {
            class: "author-search",
            onSubmit: Se(Oe, ["prevent"])
          }, [
            r("label", f$, o(u(b)("library", "Find destination author")), 1),
            be(r("input", {
              id: "target-search",
              "onUpdate:modelValue": O[16] || (O[16] = (N) => f.value = N),
              type: "search",
              maxlength: "255",
              disabled: i.value
            }, null, 8, h$), [
              [Me, f.value]
            ]),
            r("button", { disabled: i.value }, o(u(b)("library", "Search")), 9, p$)
          ], 32),
          r("div", null, [
            r("button", {
              disabled: i.value || !f.value.trim(),
              onClick: ge
            }, o(u(b)("library", "Create separate author")), 9, v$),
            O[30] || (O[30] = Q()),
            ce(Be, {
              text: u(b)("library", "Creates a new person using the entered name, even if someone with that name already exists.")
            }, null, 8, ["text"])
          ]),
          r("label", b$, o(u(b)("library", "Destination author")), 1),
          be(r("select", {
            id: "target-author",
            "onUpdate:modelValue": O[17] || (O[17] = (N) => v.value = N),
            disabled: i.value,
            onChange: O[18] || (O[18] = (N) => m.value = null)
          }, [
            r("option", m$, o(u(b)("library", "Choose an author")), 1),
            (d(!0), p(W, null, oe(_.value, (N) => (d(), p("option", {
              key: N.id,
              value: N.id
            }, o(N.display_name) + " — " + o(N.sort_name) + " (#" + o(N.id) + ")", 9, y$))), 128))
          ], 40, g$), [
            [tt, v.value]
          ]),
          r("div", null, [
            r("button", {
              disabled: i.value || !v.value,
              onClick: De
            }, o(u(b)("library", "Review change")), 9, _$),
            O[31] || (O[31] = Q()),
            r("button", {
              disabled: i.value,
              onClick: _e
            }, o(u(b)("library", "Cancel")), 9, w$)
          ]),
          m.value ? (d(), p("section", {
            key: 0,
            class: "author-review",
            "aria-label": u(b)("library", "Review change")
          }, [
            r("h2", null, o(m.value.source) + " → " + o(m.value.target), 1),
            r("p", null, o(m.value.merge ? u(b)("library", "Merge these authors. Future imports of the old name will use the destination author.") : u(b)("library", "Reassign these books. Both author records remain available.")), 1),
            r("p", null, o(u(yt)("library", "%n book", "%n books", m.value.bookCount)), 1),
            m.value.queued ? (d(), p("p", S$, o(u(b)("library", "The first 20 books are shown. This change will run in the background.")), 1)) : T("", !0),
            r("ul", null, [
              (d(!0), p(W, null, oe(m.value.books, (N) => (d(), p("li", {
                key: N.id
              }, o(N.title) + " — " + o(u(b)("library", "Original credit: {credit}", { credit: N.credit || "—" })), 1))), 128))
            ]),
            r("button", {
              class: "primary",
              disabled: i.value,
              onClick: nt
            }, o(u(b)("library", "Confirm author change")), 9, C$)
          ], 8, k$)) : T("", !0)
        ], 8, c$)) : T("", !0),
        r("section", {
          class: "author-catalogue",
          "aria-label": u(b)("library", "Books in your library")
        }, [
          r("h2", null, o(u(b)("library", "Books in your library")), 1),
          r("form", {
            class: "author-book-controls",
            onSubmit: O[24] || (O[24] = Se((N) => ye(1), ["prevent"]))
          }, [
            r("label", A$, o(u(b)("library", "Search titles")), 1),
            be(r("input", {
              id: "author-book-search",
              "onUpdate:modelValue": O[19] || (O[19] = (N) => te.value = N),
              type: "search",
              maxlength: "255",
              disabled: i.value || s.value
            }, null, 8, E$), [
              [Me, te.value]
            ]),
            r("button", {
              disabled: i.value || s.value
            }, o(u(b)("library", "Search")), 9, $$),
            r("label", x$, o(u(b)("library", "Sort")), 1),
            be(r("select", {
              id: "author-book-sort",
              "onUpdate:modelValue": O[20] || (O[20] = (N) => $.value = N),
              disabled: i.value || s.value,
              onChange: O[21] || (O[21] = (N) => ye(1))
            }, [
              r("option", O$, o(u(b)("library", "Title")), 1),
              r("option", R$, o(u(b)("library", "Publication date, newest first")), 1),
              r("option", I$, o(u(b)("library", "Series, then title")), 1)
            ], 40, N$), [
              [tt, $.value]
            ]),
            r("div", L$, [
              r("button", {
                type: "button",
                "aria-pressed": G.value === "grid",
                onClick: O[22] || (O[22] = (N) => G.value = "grid")
              }, o(u(b)("library", "Covers")), 9, P$),
              O[32] || (O[32] = Q()),
              r("button", {
                type: "button",
                "aria-pressed": G.value === "list",
                onClick: O[23] || (O[23] = (N) => G.value = "list")
              }, o(u(b)("library", "List")), 9, D$)
            ])
          ], 32),
          te.value ? (d(), p("p", F$, o(u(yt)("library", "%n book", "%n books", a.value.matchingCount)), 1)) : T("", !0),
          a.value.books.length ? T("", !0) : (d(), p("p", M$, o(u(b)("library", "No books match this view.")), 1)),
          (d(!0), p(W, null, oe(ae.value, (N) => (d(), p("section", {
            key: N.name ?? "all",
            class: "author-book-group"
          }, [
            N.name !== null ? (d(), p("h3", U$, o(N.name || u(b)("library", "No series recorded")), 1)) : T("", !0),
            r("ul", {
              class: Te(["author-books", { "author-books-grid": G.value === "grid" }])
            }, [
              (d(!0), p(W, null, oe(N.books, (X) => (d(), p("li", {
                key: X.id
              }, [
                y.value ? be((d(), p("input", {
                  key: 0,
                  "onUpdate:modelValue": O[25] || (O[25] = (ne) => c.value = ne),
                  type: "checkbox",
                  value: Number(X.id),
                  "aria-label": u(b)("library", "Select {title}", { title: X.title }),
                  disabled: i.value,
                  onChange: O[26] || (O[26] = (ne) => m.value = null)
                }, null, 40, z$)), [
                  [qa, c.value]
                ]) : T("", !0),
                r("a", {
                  class: "author-book-cover",
                  href: u(Et)("/apps/library/items/{id}", { id: X.id }),
                  "aria-label": X.title
                }, [
                  ce(ef, {
                    src: J(X)
                  }, null, 8, ["src"])
                ], 8, j$),
                r("div", B$, [
                  r("a", {
                    class: "author-book-title",
                    href: u(Et)("/apps/library/items/{id}", { id: X.id }),
                    dir: "auto"
                  }, o(X.title), 9, H$),
                  X.series_name ? (d(), p("span", V$, [
                    Q(o(X.series_name), 1),
                    X.series_number ? (d(), p(W, { key: 0 }, [
                      Q(" · " + o(X.series_number), 1)
                    ], 64)) : T("", !0)
                  ])) : T("", !0),
                  X.publication_date ? (d(), p("span", q$, o(X.publication_date), 1)) : T("", !0),
                  r("span", null, o(X.extension?.toUpperCase()), 1),
                  X.scan_status === "missing" ? (d(), p("span", G$, o(u(b)("library", "File missing")), 1)) : T("", !0),
                  y.value ? (d(), p("span", K$, o(u(b)("library", "Original credit: {credit}", { credit: X.creators || "—" })), 1)) : T("", !0)
                ])
              ]))), 128))
            ], 2)
          ]))), 128))
        ], 8, T$)
      ], 64)) : T("", !0) : (d(), p(W, { key: 4 }, [
        r("form", {
          class: "author-search",
          onSubmit: O[4] || (O[4] = Se((N) => ye(1), ["prevent"]))
        }, [
          r("label", AE, [
            Q(o(u(b)("library", "Search authors")) + " ", 1),
            ce(Be, {
              text: u(b)("library", "Matches the beginning of the preferred name or sort name.")
            }, null, 8, ["text"])
          ]),
          be(r("input", {
            id: "author-search",
            "onUpdate:modelValue": O[2] || (O[2] = (N) => F.value = N),
            maxlength: "255",
            type: "search"
          }, null, 512), [
            [Me, F.value]
          ]),
          r("label", null, [
            be(r("input", {
              "onUpdate:modelValue": O[3] || (O[3] = (N) => M.value = N),
              type: "checkbox"
            }, null, 512), [
              [qa, M.value]
            ]),
            Q(" " + o(u(b)("library", "Unused authors")), 1)
          ]),
          r("button", {
            disabled: i.value,
            type: "submit"
          }, o(u(b)("library", "Search")), 9, EE)
        ], 32),
        a.value?.migration && (a.value.migration.pending || a.value.migration.failed || a.value.migration.conflict) ? (d(), p("p", $E, [
          Q(o(u(b)("library", "Author migration: {pending} pending, {failed} failed, {conflict} need review.", a.value.migration)) + " ", 1),
          a.value.migration.conflict ? (d(), p("a", {
            key: 0,
            href: `${e.catalogueUrl}?authors=1&authorConflicts=1`
          }, o(u(b)("library", "Review imported author changes")), 9, xE)) : T("", !0),
          r("button", {
            disabled: i.value,
            onClick: O[5] || (O[5] = (N) => ye(P.value))
          }, o(u(b)("library", "Refresh")), 9, NE)
        ])) : T("", !0),
        a.value ? (d(), p("ul", OE, [
          (d(!0), p(W, null, oe(a.value.authors, (N) => (d(), p("li", {
            key: N.id
          }, [
            r("a", {
              href: `${e.catalogueUrl}?authors=1&authorId=${N.id}`,
              dir: "auto"
            }, o(N.display_name), 9, RE),
            r("span", IE, o(N.sort_name), 1),
            r("span", null, o(u(yt)("library", "%n book", "%n books", Number(N.book_count))), 1),
            M.value && Number(N.book_count) === 0 ? (d(), p("button", {
              key: 0,
              disabled: i.value || a.value.migration.pending || a.value.migration.failed,
              onClick: (X) => R(N)
            }, o(u(b)("library", "Remove unused author")), 9, LE)) : T("", !0)
          ]))), 128))
        ])) : T("", !0),
        a.value && !a.value.authors.length ? (d(), p("p", PE, o(u(b)("library", "No authors found.")), 1)) : T("", !0)
      ], 64)),
      S.value.length ? (d(), p("details", W$, [
        r("summary", null, o(u(b)("library", "Background author changes")), 1),
        r("ul", null, [
          (d(!0), p(W, null, oe(S.value, (N) => (d(), p("li", {
            key: N.id,
            "data-author-task-id": N.id
          }, [
            r("span", null, o(Ue(N)) + " · " + o(u(yt)("library", "%n book", "%n books", Number(N.book_count))), 1),
            N.status === "queued" ? (d(), p("button", {
              key: 0,
              disabled: i.value,
              onClick: (X) => A(N)
            }, o(u(b)("library", "Cancel")), 9, Z$)) : T("", !0),
            N.status === "conflict" || N.status === "failed" ? (d(), p("span", X$, o(u(b)("library", "Review the author and try again. No books were changed by this task.")), 1)) : T("", !0)
          ], 8, Y$))), 128))
        ])
      ])) : T("", !0),
      k.value.length ? (d(), p("details", J$, [
        r("summary", null, o(u(b)("library", "Recent changes")), 1),
        r("ul", null, [
          (d(!0), p(W, null, oe(k.value, (N) => (d(), p("li", {
            key: N.id,
            "data-operation-id": N.id
          }, [
            r("span", null, o(N.source) + " → " + o(N.target) + " · " + o(u(yt)("library", "%n book", "%n books", Number(N.books))), 1),
            Number(N.undone) ? (d(), p("span", ex, o(u(b)("library", "Undone")), 1)) : (d(), p("button", {
              key: 1,
              disabled: i.value,
              onClick: (X) => ie(N)
            }, o(u(b)("library", "Undo")), 9, tx))
          ], 8, Q$))), 128))
        ])
      ])) : T("", !0),
      a.value ? (d(), p("nav", {
        key: 8,
        class: "author-pagination",
        "aria-label": u(b)("library", "Author pages")
      }, [
        r("button", {
          disabled: i.value || s.value || P.value === 1,
          onClick: O[27] || (O[27] = (N) => ye(P.value - 1))
        }, o(u(b)("library", "Previous")), 9, ix),
        r("span", null, o(u(b)("library", "Page {page}", { page: P.value })), 1),
        r("button", {
          disabled: i.value || s.value || !a.value.hasNext,
          onClick: O[28] || (O[28] = (N) => ye(P.value + 1))
        }, o(u(b)("library", "Next")), 9, nx)
      ], 8, ax)) : T("", !0)
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
}, gx = { key: 0 }, mx = ["disabled"], yx = {
  key: 1,
  class: "series-directory"
}, _x = ["href"], wx = { key: 2 }, kx = { key: 0 }, Sx = ["href"], Cx = {
  key: 1,
  class: "series-description",
  dir: "auto"
}, Tx = { key: 2 }, Ax = ["href"], Ex = ["disabled"], $x = { for: "series-name" }, xx = ["disabled"], Nx = { for: "series-description" }, Ox = ["disabled"], Rx = ["disabled"], Ix = ["disabled"], Lx = {
  key: 5,
  class: "series-actions"
}, Px = ["disabled"], Dx = {
  key: 1,
  class: "series-assignment"
}, Fx = { role: "status" }, Mx = { for: "series-target-search" }, Ux = ["disabled"], zx = ["disabled"], jx = { for: "series-target" }, Bx = ["disabled"], Hx = { value: "" }, Vx = ["value"], qx = ["disabled"], Gx = ["disabled"], Kx = ["aria-label"], Wx = ["disabled"], Yx = { class: "series-books" }, Zx = ["value", "aria-label", "disabled"], Xx = { key: 0 }, Jx = ["href"], Qx = { dir: "auto" }, e3 = { key: 1 }, t3 = {
  key: 6,
  class: "series-conflicts",
  open: ""
}, a3 = { dir: "auto" }, i3 = { dir: "auto" }, n3 = { dir: "auto" }, r3 = ["disabled", "onClick"], l3 = ["disabled", "onClick"], s3 = ["disabled"], o3 = ["disabled"], u3 = {
  key: 7,
  class: "series-history"
}, c3 = ["data-series-operation-id"], d3 = { key: 0 }, f3 = ["disabled", "onClick"], h3 = ["aria-label"], p3 = ["disabled"], v3 = ["disabled"], b3 = {
  __name: "Series",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, a = Number(new URLSearchParams(location.search).get("seriesId")) || null, i = /* @__PURE__ */ j(null), n = /* @__PURE__ */ j(1), l = /* @__PURE__ */ j(""), s = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j(""), f = /* @__PURE__ */ j(""), _ = /* @__PURE__ */ j(!1), v = /* @__PURE__ */ j(!1), m = /* @__PURE__ */ j([]), y = /* @__PURE__ */ j(""), k = /* @__PURE__ */ j([]), C = /* @__PURE__ */ j(""), S = /* @__PURE__ */ j(null), x = /* @__PURE__ */ j([]), F = /* @__PURE__ */ j({ items: [], page: 1, hasNext: !1 }), M = /* @__PURE__ */ j(1), P = /* @__PURE__ */ Lt({ name: "", description: "" });
    async function L(J, U = null) {
      const H = await fetch(Et("/apps/library/api/series") + J, {
        credentials: "same-origin",
        cache: "no-store",
        method: U === null ? "GET" : "POST",
        headers: { Accept: "application/json", ...U === null ? {} : { "Content-Type": "application/json", requesttoken: t.requestToken } },
        ...U === null ? {} : { body: JSON.stringify(U) }
      });
      if (!H.ok) throw new Error(H.status === 413 ? b("library", "Choose at most 500 books for one series change.") : H.status === 409 ? b("library", "This series changed. Reload and review your edit.") : b("library", "Could not load or save the series."));
      return H.json();
    }
    async function le(J = 1) {
      s.value = !0, c.value = "";
      try {
        const [U, H, ye] = await Promise.all([
          L(a ? `/${a}?page=${J}` : `?page=${J}&search=${encodeURIComponent(l.value.trim())}`),
          L("/history"),
          L(`/conflicts?page=${M.value}`)
        ]);
        i.value = U, x.value = H, F.value = ye, S.value = null, n.value = J;
      } catch (U) {
        c.value = U.message;
      } finally {
        s.value = !1;
      }
    }
    function te() {
      P.name = i.value.series.display_name, P.description = i.value.series.description || "", _.value = !0, f.value = "";
    }
    async function $() {
      s.value = !0, c.value = "";
      try {
        i.value = await L(`/${a}`, { name: P.name, description: P.description, revision: Number(i.value.series.revision) }), _.value = !1, f.value = b("library", "Series saved. Original book metadata is preserved.");
      } catch (J) {
        c.value = J.message;
      } finally {
        s.value = !1;
      }
    }
    function G(J) {
      return Et("/apps/library/items/{id}/cover", { id: J.id }) + "?v=" + encodeURIComponent(`${J.cover_revision || ""}-${J.etag || ""}`);
    }
    async function Z() {
      s.value = !0, c.value = "", S.value = null;
      try {
        k.value = (await L(`?search=${encodeURIComponent(y.value.trim())}`)).series.filter((J) => Number(J.id) !== a), C.value = "";
      } catch (J) {
        c.value = J.message;
      } finally {
        s.value = !1;
      }
    }
    async function ee() {
      s.value = !0, c.value = "", S.value = null;
      try {
        const J = await L("", { name: y.value.trim() });
        k.value = [J.series], C.value = String(J.series.id);
      } catch (J) {
        c.value = J.message;
      } finally {
        s.value = !1;
      }
    }
    async function re() {
      s.value = !0, c.value = "";
      try {
        S.value = await L(`/${a}/preview`, { target: Number(C.value), items: m.value.map(Number) });
      } catch (J) {
        c.value = J.message;
      } finally {
        s.value = !1;
      }
    }
    function V() {
      v.value = !1, S.value = null, m.value = [];
    }
    async function K() {
      s.value = !0, c.value = "";
      try {
        await L(`/${a}/assign`, { target: Number(C.value), items: m.value.map(Number), token: S.value.token }), v.value = !1, m.value = [], await le(1), f.value = b("library", "Series assignment saved. Original book metadata is preserved.");
      } catch (J) {
        c.value = J.message;
      } finally {
        s.value = !1;
      }
    }
    async function D(J) {
      s.value = !0, c.value = "";
      try {
        await L(`/history/${J.id}/undo`, {}), await le(n.value), f.value = b("library", "Series change undone.");
      } catch (U) {
        c.value = U.message;
      } finally {
        s.value = !1;
      }
    }
    async function Y(J, U) {
      s.value = !0, c.value = "";
      try {
        await L(`/conflicts/${J.id}/resolve`, { choice: U, token: J.token }), M.value = 1, await le(n.value), f.value = b("library", "Imported series change reviewed.");
      } catch (H) {
        c.value = H.message;
      } finally {
        s.value = !1;
      }
    }
    async function ae(J) {
      M.value = J, await le(n.value);
    }
    return Tt(() => le()), (J, U) => (d(), p("section", {
      class: "library-series",
      "aria-busy": s.value,
      "aria-labelledby": "library-series-heading"
    }, [
      u(a) ? (d(), p("a", {
        key: 0,
        href: `${e.catalogueUrl}?series=1`
      }, o(u(b)("library", "All series")), 9, ox)) : T("", !0),
      r("h1", ux, o(i.value?.series?.display_name || u(b)("library", "Series")), 1),
      c.value ? (d(), p("p", cx, [
        Q(o(c.value) + " ", 1),
        r("button", {
          disabled: s.value,
          onClick: U[0] || (U[0] = (H) => le(n.value))
        }, o(u(b)("library", "Reload")), 9, dx)
      ])) : T("", !0),
      f.value ? (d(), p("p", fx, o(f.value), 1)) : T("", !0),
      s.value ? (d(), p("p", hx, o(u(b)("library", "Loading")), 1)) : T("", !0),
      u(a) ? i.value?.series ? (d(), p(W, { key: 5 }, [
        r("p", null, o(u(yt)("library", "%n book", "%n books", Number(i.value.bookCount))), 1),
        i.value.series.merged_into ? (d(), p("p", kx, [
          r("a", {
            href: `${e.catalogueUrl}?series=1&seriesId=${i.value.series.merged_into}`
          }, o(u(b)("library", "Open merged series")), 9, Sx)
        ])) : T("", !0),
        i.value.series.description && !_.value ? (d(), p("p", Cx, o(i.value.series.description), 1)) : T("", !0),
        i.value.bookCount ? (d(), p("p", Tx, [
          r("a", {
            href: `${e.catalogueUrl}?seriesId=${u(a)}`
          }, o(u(b)("library", "Browse this series in the catalogue")), 9, Ax)
        ])) : T("", !0),
        !_.value && !i.value.series.merged_into ? (d(), p("button", {
          key: 3,
          disabled: s.value,
          onClick: te
        }, o(u(b)("library", "Edit series")), 9, Ex)) : T("", !0),
        _.value ? (d(), p("form", {
          key: 4,
          class: "series-editor",
          onSubmit: Se($, ["prevent"])
        }, [
          r("label", $x, [
            Q(o(u(b)("library", "Preferred name")) + " ", 1),
            ce(Be, {
              text: u(b)("library", "Renaming this shared series changes its display name; the original text in each book stays unchanged.")
            }, null, 8, ["text"])
          ]),
          be(r("input", {
            id: "series-name",
            "onUpdate:modelValue": U[4] || (U[4] = (H) => P.name = H),
            maxlength: "255",
            required: "",
            disabled: s.value
          }, null, 8, xx), [
            [Me, P.name]
          ]),
          r("label", Nx, o(u(b)("library", "Description")), 1),
          be(r("textarea", {
            id: "series-description",
            "onUpdate:modelValue": U[5] || (U[5] = (H) => P.description = H),
            maxlength: "10000",
            rows: "4",
            disabled: s.value
          }, null, 8, Ox), [
            [Me, P.description]
          ]),
          r("div", null, [
            r("button", {
              type: "submit",
              class: "primary",
              disabled: s.value
            }, o(u(b)("library", "Save series")), 9, Rx),
            U[17] || (U[17] = Q()),
            r("button", {
              type: "button",
              disabled: s.value,
              onClick: U[6] || (U[6] = (H) => _.value = !1)
            }, o(u(b)("library", "Cancel")), 9, Ix)
          ])
        ], 32)) : T("", !0),
        !_.value && !i.value.series.merged_into ? (d(), p("details", Lx, [
          r("summary", null, o(u(b)("library", "Move or merge books")), 1),
          v.value ? T("", !0) : (d(), p("button", {
            key: 0,
            disabled: s.value,
            onClick: U[7] || (U[7] = (H) => v.value = !0)
          }, o(u(b)("library", "Choose destination series")), 9, Px)),
          v.value ? (d(), p("section", Dx, [
            r("label", null, [
              Q(o(u(b)("library", "Books to change")) + " ", 1),
              ce(Be, {
                text: u(b)("library", "Leave books unselected to merge the whole series. Select books below to move only those books. Original file metadata remains unchanged.")
              }, null, 8, ["text"])
            ]),
            r("p", Fx, o(m.value.length ? u(yt)("library", "%n selected book", "%n selected books", m.value.length) : u(b)("library", "Merge all books into the destination series")), 1),
            r("form", {
              class: "series-search",
              onSubmit: Se(Z, ["prevent"])
            }, [
              r("label", Mx, o(u(b)("library", "Find destination series")), 1),
              be(r("input", {
                id: "series-target-search",
                "onUpdate:modelValue": U[8] || (U[8] = (H) => y.value = H),
                type: "search",
                maxlength: "255"
              }, null, 512), [
                [Me, y.value]
              ]),
              r("button", {
                type: "submit",
                disabled: s.value
              }, o(u(b)("library", "Search")), 9, Ux)
            ], 32),
            r("div", null, [
              r("button", {
                disabled: s.value || !y.value.trim(),
                onClick: ee
              }, o(u(b)("library", "Create series")), 9, zx)
            ]),
            r("label", jx, o(u(b)("library", "Destination series")), 1),
            be(r("select", {
              id: "series-target",
              "onUpdate:modelValue": U[9] || (U[9] = (H) => C.value = H),
              disabled: s.value,
              onChange: U[10] || (U[10] = (H) => S.value = null)
            }, [
              r("option", Hx, o(u(b)("library", "Choose a series")), 1),
              (d(!0), p(W, null, oe(k.value, (H) => (d(), p("option", {
                key: H.id,
                value: String(H.id)
              }, o(H.display_name) + " (#" + o(H.id) + ")", 9, Vx))), 128))
            ], 40, Bx), [
              [tt, C.value]
            ]),
            r("div", null, [
              r("button", {
                disabled: s.value || !C.value,
                onClick: re
              }, o(u(b)("library", "Review change")), 9, qx),
              U[18] || (U[18] = Q()),
              r("button", {
                disabled: s.value,
                onClick: V
              }, o(u(b)("library", "Cancel")), 9, Gx)
            ]),
            S.value ? (d(), p("section", {
              key: 0,
              class: "series-review",
              "aria-label": u(b)("library", "Review change")
            }, [
              r("h2", null, o(S.value.source) + " → " + o(S.value.target), 1),
              r("p", null, o(u(yt)("library", "%n book", "%n books", Number(S.value.bookCount))), 1),
              r("p", null, o(S.value.merge ? u(b)("library", "Future imports using the old series name will use the destination series.") : u(b)("library", "Only selected books will move. Both series remain available.")), 1),
              r("ul", null, [
                (d(!0), p(W, null, oe(S.value.books, (H) => (d(), p("li", {
                  key: H.id,
                  dir: "auto"
                }, o(H.title), 1))), 128))
              ]),
              r("button", {
                class: "primary",
                disabled: s.value,
                onClick: K
              }, o(u(b)("library", "Confirm series change")), 9, Wx)
            ], 8, Kx)) : T("", !0)
          ])) : T("", !0)
        ])) : T("", !0),
        r("ol", Yx, [
          (d(!0), p(W, null, oe(i.value.books, (H) => (d(), p("li", {
            key: H.id
          }, [
            v.value ? be((d(), p("input", {
              key: 0,
              "onUpdate:modelValue": U[11] || (U[11] = (ye) => m.value = ye),
              type: "checkbox",
              value: Number(H.id),
              "aria-label": u(b)("library", "Select {title}", { title: H.title }),
              disabled: s.value,
              onChange: U[12] || (U[12] = (ye) => S.value = null)
            }, null, 40, Zx)), [
              [qa, m.value]
            ]) : T("", !0),
            ce(ef, {
              src: G(H)
            }, null, 8, ["src"]),
            r("div", null, [
              H.part_number ? (d(), p("span", Xx, o(u(b)("library", "Part {number}", { number: H.part_number })), 1)) : T("", !0),
              r("a", {
                href: u(Et)("/apps/library/items/{id}", { id: H.id }),
                dir: "auto"
              }, o(H.title), 9, Jx),
              r("small", Qx, o(H.creators || "—"), 1),
              H.scan_status === "missing" ? (d(), p("small", e3, o(u(b)("library", "File missing")), 1)) : T("", !0)
            ])
          ]))), 128))
        ])
      ], 64)) : T("", !0) : (d(), p(W, { key: 4 }, [
        r("form", {
          class: "series-search",
          onSubmit: U[2] || (U[2] = Se((H) => le(1), ["prevent"]))
        }, [
          r("label", px, [
            Q(o(u(b)("library", "Search series")) + " ", 1),
            ce(Be, {
              text: u(b)("library", "Matches the beginning of a preferred series name.")
            }, null, 8, ["text"])
          ]),
          be(r("input", {
            id: "series-search",
            "onUpdate:modelValue": U[1] || (U[1] = (H) => l.value = H),
            type: "search",
            maxlength: "255"
          }, null, 512), [
            [Me, l.value]
          ]),
          r("button", {
            disabled: s.value,
            type: "submit"
          }, o(u(b)("library", "Search")), 9, vx)
        ], 32),
        i.value?.migration && (i.value.migration.pending || i.value.migration.failed || i.value.migration.conflict) ? (d(), p("p", bx, [
          Q(o(u(b)("library", "Series migration: {pending} pending, {failed} failed.", i.value.migration)) + " ", 1),
          i.value.migration.conflict ? (d(), p("span", gx, o(u(yt)("library", "%n imported series change to review", "%n imported series changes to review", Number(i.value.migration.conflict))), 1)) : T("", !0),
          r("button", {
            disabled: s.value,
            onClick: U[3] || (U[3] = (H) => le(n.value))
          }, o(u(b)("library", "Refresh")), 9, mx)
        ])) : T("", !0),
        i.value ? (d(), p("ul", yx, [
          (d(!0), p(W, null, oe(i.value.series, (H) => (d(), p("li", {
            key: H.id
          }, [
            r("a", {
              href: `${e.catalogueUrl}?series=1&seriesId=${H.id}`,
              dir: "auto"
            }, o(H.display_name), 9, _x),
            r("span", null, o(u(yt)("library", "%n book", "%n books", Number(H.book_count))), 1)
          ]))), 128))
        ])) : T("", !0),
        i.value && !i.value.series.length ? (d(), p("p", wx, o(u(b)("library", "No series found yet.")), 1)) : T("", !0)
      ], 64)),
      F.value.items.length ? (d(), p("details", t3, [
        r("summary", null, o(u(b)("library", "Review imported series changes")), 1),
        r("ul", null, [
          (d(!0), p(W, null, oe(F.value.items, (H) => (d(), p("li", {
            key: H.id
          }, [
            r("strong", a3, o(H.title), 1),
            r("span", null, [
              Q(o(u(b)("library", "Assigned series")) + ": ", 1),
              r("span", i3, [
                Q(o(H.assignedName), 1),
                H.assignedNumber ? (d(), p(W, { key: 0 }, [
                  Q(" · " + o(H.assignedNumber), 1)
                ], 64)) : T("", !0)
              ])
            ]),
            r("span", null, [
              Q(o(u(b)("library", "New imported series")) + ": ", 1),
              r("span", n3, [
                Q(o(H.incomingName || "—"), 1),
                H.incomingNumber ? (d(), p(W, { key: 0 }, [
                  Q(" · " + o(H.incomingNumber), 1)
                ], 64)) : T("", !0)
              ])
            ]),
            r("div", null, [
              r("button", {
                disabled: s.value,
                onClick: (ye) => Y(H, "keep")
              }, o(u(b)("library", "Keep assignment")), 9, r3),
              U[19] || (U[19] = Q()),
              r("button", {
                disabled: s.value,
                onClick: (ye) => Y(H, "import")
              }, o(u(b)("library", "Use imported series")), 9, l3)
            ])
          ]))), 128))
        ]),
        r("div", null, [
          r("button", {
            disabled: s.value || M.value === 1,
            onClick: U[13] || (U[13] = (H) => ae(M.value - 1))
          }, o(u(b)("library", "Previous")), 9, s3),
          U[20] || (U[20] = Q()),
          r("button", {
            disabled: s.value || !F.value.hasNext,
            onClick: U[14] || (U[14] = (H) => ae(M.value + 1))
          }, o(u(b)("library", "Next")), 9, o3)
        ])
      ])) : T("", !0),
      x.value.length ? (d(), p("details", u3, [
        r("summary", null, o(u(b)("library", "Recent changes")), 1),
        r("ul", null, [
          (d(!0), p(W, null, oe(x.value, (H) => (d(), p("li", {
            key: H.id,
            "data-series-operation-id": H.id
          }, [
            r("span", null, o(H.source) + " → " + o(H.target) + " · " + o(u(yt)("library", "%n book", "%n books", Number(H.books))), 1),
            Number(H.undone) ? (d(), p("span", d3, o(u(b)("library", "Undone")), 1)) : (d(), p("button", {
              key: 1,
              disabled: s.value,
              onClick: (ye) => D(H)
            }, o(u(b)("library", "Undo")), 9, f3))
          ], 8, c3))), 128))
        ])
      ])) : T("", !0),
      i.value ? (d(), p("nav", {
        key: 8,
        class: "series-pagination",
        "aria-label": u(b)("library", "Series pages")
      }, [
        r("button", {
          disabled: s.value || n.value === 1,
          onClick: U[15] || (U[15] = (H) => le(n.value - 1))
        }, o(u(b)("library", "Previous")), 9, p3),
        r("span", null, o(u(b)("library", "Page {page}", { page: n.value })), 1),
        r("button", {
          disabled: s.value || !i.value.hasNext,
          onClick: U[16] || (U[16] = (H) => le(n.value + 1))
        }, o(u(b)("library", "Next")), 9, v3)
      ], 8, h3)) : T("", !0)
    ], 8, sx));
  }
}, g3 = /* @__PURE__ */ tf(b3, [["__scopeId", "data-v-dc1a718f"]]);
function vg(e, t, a) {
  const i = /* @__PURE__ */ j({}), n = /* @__PURE__ */ j("idle");
  let l, s, c = 0;
  return Ge([e, t], () => {
    clearTimeout(l), s?.abort();
    const f = ++c;
    i.value = {}, n.value = t.value ? "pending" : "disabled", !(!t.value || !e.value.length) && (l = setTimeout(async () => {
      s = new AbortController();
      try {
        const _ = await fetch(Et("/apps/library/api/duplicate-suggestions/lookup"), { method: "POST", credentials: "same-origin", cache: "no-store", signal: s.signal, headers: { "Content-Type": "application/json", requesttoken: a.value }, body: JSON.stringify({ itemIds: e.value.slice(0, 100) }) });
        if (!_.ok) throw new Error("lookup_failed");
        const v = await _.json();
        if (f !== c) return;
        i.value = v.items || {}, n.value = v.enabled ? v.status : "disabled";
      } catch (_) {
        f === c && _.name !== "AbortError" && (n.value = "error");
      }
    }, 250));
  }, { immediate: !0 }), Ca(() => {
    c++, clearTimeout(l), s?.abort();
  }), { results: i, status: n };
}
const m3 = ["aria-label", "aria-busy"], y3 = {
  key: 0,
  role: "status"
}, _3 = {
  key: 1,
  role: "alert"
}, w3 = {
  key: 2,
  role: "status"
}, k3 = { key: 3 }, S3 = { key: 4 }, C3 = {
  key: 5,
  role: "status"
}, T3 = {
  key: 6,
  class: "library-suggestion-list"
}, A3 = ["href"], E3 = ["disabled", "onClick"], $3 = {
  key: 0,
  role: "status"
}, x3 = { class: "library-suggestion-list" }, N3 = { class: "library-suggestion-comparison" }, O3 = ["src"], R3 = { class: "library-duplicate-actions" }, I3 = ["href"], L3 = ["href"], P3 = ["disabled", "onClick"], D3 = { class: "library-duplicate-actions" }, F3 = ["disabled"], M3 = ["disabled"], U3 = ["disabled"], bg = {
  __name: "DuplicateSuggestions",
  props: { itemId: Number, requestToken: String, enabled: { type: Boolean, default: !0 }, compareId: { type: Number, default: 0 }, full: { type: Boolean, default: !1 } },
  setup(e) {
    const t = e, a = /* @__PURE__ */ j(0), i = q(() => (a.value, t.itemId ? [t.itemId] : [])), n = q(() => t.enabled), l = q(() => t.requestToken), { results: s, status: c } = vg(i, n, l), f = q(() => s.value[t.itemId]), _ = /* @__PURE__ */ j(null), v = /* @__PURE__ */ j(!1), m = /* @__PURE__ */ j(""), y = /* @__PURE__ */ j(!1), k = { formats: b("library", "Alternative formats"), languages: b("library", "Different languages"), years: b("library", "Different publication years"), publishers: b("library", "Different publishers"), identifiers: b("library", "Different ISBNs") };
    let C = 0;
    async function S(M, P) {
      const L = await fetch(Et("/apps/library/api/duplicate-suggestions" + M), { credentials: "same-origin", cache: "no-store", method: P ? "POST" : "GET", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...P ? { body: JSON.stringify(P) } : {} });
      if (!L.ok) throw new Error(L.status === 409 ? b("library", "These books changed after the scan. Run a new scan before reviewing this comparison.") : b("library", "Could not complete the duplicate review. Please try again."));
      return L.json();
    }
    async function x(M) {
      const P = ++C;
      v.value = !0, m.value = "", y.value = !1;
      try {
        const L = await S(`/compare/${t.itemId}/${M}`);
        P === C && (_.value = L);
      } catch (L) {
        P === C && (m.value = L.message);
      } finally {
        P === C && (v.value = !1);
      }
    }
    async function F(M, P = 0) {
      v.value = !0, m.value = "";
      try {
        await S(`/compare/${_.value.books[0].id}/${_.value.books[1].id}`, { signature: _.value.signature, decision: M, preferredId: P }), y.value = !0, a.value++, _.value = null;
      } catch (L) {
        m.value = L.message;
      } finally {
        v.value = !1;
      }
    }
    return Ge(() => [t.itemId, t.compareId], () => {
      C++, _.value = null, t.full && t.compareId && x(t.compareId);
    }, { immediate: !0 }), (M, P) => (d(), p("section", {
      class: "library-duplicate-suggestions",
      "aria-label": u(b)("library", "Possible duplicates"),
      "aria-busy": v.value ? "true" : "false"
    }, [
      r("h3", null, o(u(b)("library", "Possible duplicates")), 1),
      u(c) === "pending" ? (d(), p("p", y3, o(u(b)("library", "Checking possible duplicates")), 1)) : T("", !0),
      u(c) === "error" || m.value ? (d(), p("p", _3, o(m.value || u(b)("library", "Could not complete the duplicate review. Please try again.")), 1)) : T("", !0),
      u(c) === "building" || f.value?.status === "partial" ? (d(), p("p", w3, o(u(b)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : T("", !0),
      f.value?.status === "unavailable" ? (d(), p("p", k3, o(u(b)("library", "These books are no longer available. Start a new scan.")), 1)) : T("", !0),
      f.value?.status === "checked" && !f.value.count ? (d(), p("p", S3, o(u(b)("library", "No unreviewed suggestions found.")), 1)) : T("", !0),
      y.value ? (d(), p("p", C3, o(u(b)("library", "Review saved. Your files and catalogue metadata were not changed.")), 1)) : T("", !0),
      f.value?.count && !_.value ? (d(), p("ul", T3, [
        (d(!0), p(W, null, oe(f.value.matches, (L) => (d(), p("li", {
          key: L.id
        }, [
          e.full ? (d(), p("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: (le) => x(L.id)
          }, [
            r("bdi", null, o(L.title), 1),
            Q(" · " + o(L.format.toUpperCase()), 1)
          ], 8, E3)) : (d(), p("a", {
            key: 0,
            href: L.url
          }, [
            r("bdi", null, o(L.title), 1),
            Q(" · " + o(L.format.toUpperCase()), 1)
          ], 8, A3))
        ]))), 128))
      ])) : T("", !0),
      _.value ? (d(), p(W, { key: 7 }, [
        _.value.reasons.length ? T("", !0) : (d(), p("p", $3, o(u(b)("library", "These books no longer match the current metadata rules.")), 1)),
        r("ul", x3, [
          (d(!0), p(W, null, oe(_.value.flags, (L) => (d(), p("li", { key: L }, o(k[L]), 1))), 128))
        ]),
        r("div", N3, [
          (d(!0), p(W, null, oe(_.value.books, (L) => (d(), p("article", {
            key: L.id
          }, [
            r("img", {
              src: L.coverUrl,
              alt: "",
              width: "64",
              height: "88"
            }, null, 8, O3),
            r("h3", null, [
              r("bdi", null, o(L.title), 1)
            ]),
            r("p", null, [
              r("bdi", null, o(L.authors.join("; ")), 1)
            ]),
            r("p", null, o(L.format.toUpperCase()) + " · " + o(L.language || "—") + " · " + o(L.publicationDate || "—"), 1),
            r("p", null, [
              r("bdi", null, o(L.publisher), 1)
            ]),
            r("p", null, [
              r("bdi", null, o(L.path), 1)
            ]),
            r("div", R3, [
              r("a", {
                class: "button secondary",
                href: L.detailsUrl
              }, o(u(b)("library", "Details")), 9, I3),
              r("a", {
                class: "button secondary",
                href: L.openUrl
              }, o(u(b)("library", "Open")), 9, L3),
              r("button", {
                class: "button primary",
                disabled: v.value,
                onClick: (le) => F("preferred", L.id)
              }, o(u(b)("library", "Prefer this copy")), 9, P3)
            ])
          ]))), 128))
        ]),
        r("div", D3, [
          r("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[0] || (P[0] = (L) => F("keep"))
          }, o(u(b)("library", "Keep both")), 9, F3),
          r("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[1] || (P[1] = (L) => F("dismissed"))
          }, o(u(b)("library", "Dismiss match")), 9, M3),
          r("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[2] || (P[2] = (L) => F("unreviewed"))
          }, o(u(b)("library", "Reset review decision")), 9, U3)
        ])
      ], 64)) : T("", !0)
    ], 8, m3));
  }
}, z3 = ["aria-busy"], j3 = ["checked", "disabled"], B3 = {
  key: 0,
  role: "alert"
}, H3 = {
  key: 1,
  role: "status"
}, V3 = {
  key: 2,
  role: "alert"
}, q3 = {
  key: 3,
  role: "status"
}, G3 = {
  __name: "DuplicateSuggestionSettings",
  props: { requestToken: String },
  setup(e) {
    const t = e, a = /* @__PURE__ */ j({ enabled: !1, status: "disabled" }), i = /* @__PURE__ */ j(!1), n = /* @__PURE__ */ j("");
    let l = !0, s;
    async function c() {
      try {
        const _ = await fetch(Et("/apps/library/api/duplicate-suggestions"), { cache: "no-store", credentials: "same-origin" });
        if (!_.ok) throw new Error();
        const v = await _.json();
        l && (a.value = v, v.status === "building" && (s = setTimeout(c, 5e3)));
      } catch {
        l && (n.value = b("library", "Could not complete the duplicate review. Please try again."));
      }
    }
    async function f(_) {
      i.value = !0, n.value = "", clearTimeout(s);
      try {
        const v = await fetch(Et("/apps/library/api/duplicate-suggestions"), { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, body: JSON.stringify({ enabled: _.target.checked }) });
        if (!v.ok) throw new Error();
        a.value = await v.json(), a.value.status === "building" && (s = setTimeout(c, 2e3));
      } catch {
        n.value = b("library", "Could not complete the duplicate review. Please try again.");
      } finally {
        i.value = !1;
      }
    }
    return Tt(c), Ca(() => {
      l = !1, clearTimeout(s);
    }), (_, v) => (d(), p("section", {
      class: "library-auto-duplicate-settings",
      "aria-busy": i.value ? "true" : "false"
    }, [
      r("label", null, [
        r("input", {
          type: "checkbox",
          checked: a.value.enabled,
          disabled: i.value,
          onChange: f
        }, null, 40, j3),
        ce(Be, {
          text: u(b)("library", "Build a private metadata index in the background. Suggestions check the whole library without reading book contents.")
        }, {
          default: ke(() => [
            Q(o(u(b)("library", "Show possible duplicates while browsing")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      n.value ? (d(), p("p", B3, o(n.value), 1)) : T("", !0),
      a.value.status === "building" ? (d(), p("p", H3, o(u(b)("library", "Indexing metadata")) + " · " + o(a.value.processed) + "/" + o(a.value.total), 1)) : T("", !0),
      a.value.status === "failed" ? (d(), p("p", V3, o(u(b)("library", "Duplicate scan failed")), 1)) : T("", !0),
      a.value.status === "ready" ? (d(), p("p", q3, o(u(b)("library", "Automatic duplicate suggestions are ready.")), 1)) : T("", !0)
    ], 8, z3));
  }
}, K3 = ["aria-label", "aria-busy"], W3 = ["href"], Y3 = {
  key: 1,
  role: "alert"
}, Z3 = {
  key: 2,
  role: "status"
}, X3 = ["disabled"], J3 = { value: "0" }, Q3 = ["value"], e4 = { class: "library-duplicate-checkbox" }, t4 = ["disabled"], a4 = ["disabled"], i4 = ["value", "disabled"], n4 = { value: "" }, r4 = ["value"], l4 = ["aria-label"], s4 = { role: "status" }, o4 = ["value", "max", "aria-label"], u4 = {
  key: 1,
  role: "status"
}, c4 = {
  key: 2,
  role: "alert"
}, d4 = {
  key: 3,
  role: "alert"
}, f4 = { class: "library-duplicate-actions" }, h4 = ["disabled"], p4 = ["disabled"], v4 = ["disabled"], b4 = ["disabled"], g4 = { value: "all" }, m4 = ["value"], y4 = {
  key: 0,
  role: "status"
}, _4 = ["data-pair-id"], w4 = {
  key: 0,
  role: "status"
}, k4 = { class: "library-duplicate-decision" }, S4 = ["aria-label"], C4 = ["aria-label"], T4 = {
  key: 1,
  role: "alert"
}, A4 = { class: "library-duplicate-books" }, E4 = { class: "library-duplicate-book-heading" }, $4 = ["src"], x4 = { dir: "auto" }, N4 = { dir: "auto" }, O4 = { key: 0 }, R4 = { dir: "auto" }, I4 = { dir: "ltr" }, L4 = { dir: "auto" }, P4 = { class: "library-duplicate-actions" }, D4 = ["href"], F4 = ["href"], M4 = ["disabled", "onClick"], U4 = { class: "library-duplicate-actions" }, z4 = ["disabled", "onClick"], j4 = ["disabled", "onClick"], B4 = ["disabled", "onClick"], H4 = ["aria-label"], V4 = ["disabled"], q4 = ["disabled"], G4 = {
  __name: "PossibleDuplicates",
  props: { requestToken: String, reviewUrl: String },
  setup(e) {
    const t = Number(new URLSearchParams(window.location.search).get("bookId")) || 0, a = Number(new URLSearchParams(window.location.search).get("compareId")) || 0, i = e, n = /* @__PURE__ */ j([]), l = /* @__PURE__ */ j([]), s = /* @__PURE__ */ j("0"), c = /* @__PURE__ */ j(!1), f = /* @__PURE__ */ j(null), _ = /* @__PURE__ */ j(!1), v = /* @__PURE__ */ j(""), m = /* @__PURE__ */ j(""), y = /* @__PURE__ */ j("unreviewed");
    let k, C = !0, S = 0;
    const x = q(() => f.value?.status === "running"), F = q(() => ({ running: b("library", "Finding possible duplicates"), completed: b("library", "Duplicate scan complete"), cancelled: b("library", "Duplicate scan cancelled"), failed: b("library", "Duplicate scan failed"), limited: b("library", "Duplicate scan reached its limit") })), M = q(() => ({ unreviewed: b("library", "To review"), preferred: b("library", "Preferred copy selected"), keep: b("library", "Keep both"), dismissed: b("library", "Dismissed") })), P = q(() => ({ identical: b("library", "Identical file contents"), isbn: b("library", "Same ISBN"), title_author: b("library", "Same normalized title and authors"), similar_title_author: b("library", "Similar title and matching authors") })), L = q(() => ({ formats: b("library", "Alternative formats"), languages: b("library", "Different languages"), years: b("library", "Different publication years"), publishers: b("library", "Different publishers"), identifiers: b("library", "Different ISBNs") })), le = (ae) => ae < 1048576 ? new Intl.NumberFormat(document.documentElement.lang || "en", { style: "unit", unit: ae < 1e3 ? "byte" : "kilobyte", maximumFractionDigits: 2 }).format(ae < 1e3 ? ae : ae / 1e3) : new Intl.NumberFormat(document.documentElement.lang || "en", { maximumFractionDigits: 2 }).format(ae / 1048576) + " " + b("library", "MiB");
    async function te(ae = "", J) {
      const U = await fetch(Et(`/apps/library/api/duplicates${ae}`), { credentials: "same-origin", cache: "no-store", method: J === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: i.requestToken }, ...J === void 0 ? {} : { body: JSON.stringify(J) } }), H = await U.json().catch(() => ({}));
      if (!U.ok)
        throw U.status === 409 ? new Error(b("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")) : H.error === "decision_limit" ? new Error(b("library", "This account has 10,000 saved review decisions. Reset an old decision before saving another.")) : H.error === "history_limit" ? new Error(b("library", "Three duplicate scans are already saved. Discard an old scan before starting another.")) : H.error === "scope_limit" ? new Error(b("library", "This scope is too large. Choose a smaller library root.")) : U.status === 404 ? new Error(b("library", "This scan or these books are no longer available.")) : new Error(b("library", "Could not complete the duplicate review. Please try again."));
      return H;
    }
    async function $() {
      const ae = await te();
      C && (n.value = ae.roots, l.value = ae.scans);
    }
    async function G(ae) {
      _.value = !0, v.value = "";
      try {
        await ae();
      } catch (J) {
        C && (v.value = J.message);
      } finally {
        C && (_.value = !1);
      }
    }
    function Z() {
      if (clearTimeout(k), !C || !x.value) return;
      const ae = S, J = f.value.id;
      k = setTimeout(async () => {
        try {
          if (await te(`/${J}/advance`, {}), !C || ae !== S) return;
          const U = await te(`/${J}?page=${f.value.page}&filter=${y.value}`);
          if (!C || ae !== S) return;
          f.value = U, x.value || await $(), Z();
        } catch (U) {
          C && ae === S && (v.value = U.message);
        }
      }, 1500);
    }
    async function ee() {
      await G(async () => {
        f.value = await te("", { rootId: Number(s.value), contents: c.value }), S++, y.value = "unreviewed", m.value = "", await $(), Z();
      });
    }
    async function re(ae, J = 1) {
      const U = ++S;
      clearTimeout(k), await G(async () => {
        const H = await te(`/${ae}?page=${J}&filter=${y.value}`);
        C && U === S && (f.value = H, s.value = String(H.rootId), c.value = !!H.contents, Z());
      });
    }
    function V(ae) {
      y.value = "unreviewed", m.value = "", ae.target.value && re(ae.target.value);
    }
    async function K() {
      S++, clearTimeout(k), await G(async () => {
        await te(`/${f.value.id}/cancel`, {}), f.value = await te(`/${f.value.id}?filter=${y.value}`), await $();
      });
    }
    async function D() {
      S++, clearTimeout(k), await G(async () => {
        await te(`/${f.value.id}/discard`, {}), f.value = null, await $();
      });
    }
    async function Y(ae, J, U = 0) {
      S++, clearTimeout(k), await G(async () => {
        await te(`/${f.value.id}/pairs/${ae.id}`, { signature: ae.signature, decision: J, preferredId: U }), m.value = b("library", "Review saved. Your files and catalogue metadata were not changed."), f.value = await te(`/${f.value.id}?page=${f.value.page}&filter=${y.value}`), Z();
      });
    }
    return Tt(() => G($)), Ca(() => {
      C = !1, S++, clearTimeout(k);
    }), (ae, J) => (d(), p("section", {
      class: "library-duplicates",
      "aria-label": u(b)("library", "Possible duplicates"),
      "aria-busy": _.value ? "true" : "false"
    }, [
      r("a", { href: e.reviewUrl }, "← " + o(u(b)("library", "Review")), 9, W3),
      r("h1", null, [
        ce(Be, {
          text: u(b)("library", "Find possible copies from titles, authors and valid ISBNs. Name order and punctuation are normalized for comparison only. Editions and translations can be different books. Review decisions are private and never delete, merge or hide publications.")
        }, {
          default: ke(() => [
            Q(o(u(b)("library", "Possible duplicates")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      ce(G3, { "request-token": e.requestToken }, null, 8, ["request-token"]),
      u(t) ? (d(), Pe(bg, {
        key: 0,
        "item-id": u(t),
        "compare-id": u(a),
        "request-token": e.requestToken,
        full: ""
      }, null, 8, ["item-id", "compare-id", "request-token"])) : T("", !0),
      v.value ? (d(), p("p", Y3, o(v.value), 1)) : T("", !0),
      m.value ? (d(), p("p", Z3, o(m.value), 1)) : T("", !0),
      r("form", {
        class: "library-duplicate-toolbar",
        onSubmit: Se(ee, ["prevent"])
      }, [
        r("label", null, [
          Q(o(u(b)("library", "Library root")), 1),
          be(r("select", {
            "onUpdate:modelValue": J[0] || (J[0] = (U) => s.value = U),
            disabled: _.value || x.value
          }, [
            r("option", J3, o(u(b)("library", "All library roots")), 1),
            (d(!0), p(W, null, oe(n.value, (U) => (d(), p("option", {
              key: U.id,
              value: String(U.id)
            }, o(U.label), 9, Q3))), 128))
          ], 8, X3), [
            [tt, s.value]
          ])
        ]),
        r("label", e4, [
          be(r("input", {
            "onUpdate:modelValue": J[1] || (J[1] = (U) => c.value = U),
            type: "checkbox",
            disabled: _.value || x.value
          }, null, 8, t4), [
            [qa, c.value]
          ]),
          ce(Be, {
            text: u(b)("library", "Read equal-size candidates to confirm identical contents, including renamed copies with different metadata. This can take longer on remote storage. Checks are limited to 64 MiB per file and 512 MiB per scan; skipped checks are reported.")
          }, {
            default: ke(() => [
              Q(o(u(b)("library", "Compare file contents")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        r("button", {
          class: "button primary",
          disabled: _.value || x.value || !n.value.length
        }, o(u(b)("library", "Find possible duplicates")), 9, a4)
      ], 32),
      r("label", null, [
        ce(Be, {
          text: u(b)("library", "Scans continue through Nextcloud background jobs and can be reopened for seven days. Review decisions are reused when the same books have not changed. Each comparison is independent; choosing a preferred copy does not change catalogue ordering.")
        }, {
          default: ke(() => [
            Q(o(u(b)("library", "Saved duplicate scans")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        r("select", {
          value: f.value?.id || "",
          disabled: _.value,
          onChange: V
        }, [
          r("option", n4, o(u(b)("library", "Choose a scan")), 1),
          (d(!0), p(W, null, oe(l.value, (U) => (d(), p("option", {
            key: U.id,
            value: U.id
          }, o(new Date(Number(U.created_at) * 1e3).toLocaleString()) + " · " + o(F.value[U.status]), 9, r4))), 128))
        ], 40, i4)
      ]),
      f.value ? (d(), p(W, { key: 3 }, [
        r("section", {
          class: "library-duplicate-progress",
          "aria-label": u(b)("library", "Duplicate scan progress")
        }, [
          r("strong", null, o(f.value.rootId ? f.value.label : u(b)("library", "All library roots")), 1),
          r("p", s4, [
            Q(o(F.value[f.value.status]), 1),
            x.value ? (d(), p(W, { key: 0 }, [
              Q(" · " + o(f.value.phase === "index" ? u(b)("library", "Indexing metadata") : u(b)("library", "Comparing candidates")), 1)
            ], 64)) : T("", !0),
            Q(" · " + o(f.value.processed) + "/" + o(f.value.total), 1)
          ]),
          x.value ? (d(), p("progress", {
            key: 0,
            value: f.value.phase === "index" ? f.value.processed : void 0,
            max: Math.max(f.value.total, 1),
            "aria-label": u(b)("library", "Duplicate scan progress")
          }, null, 8, o4)) : T("", !0),
          r("p", null, o(u(b)("library", "Possible matches")) + ": " + o(f.value.matches) + " · " + o(u(b)("library", "Comparisons checked")) + ": " + o(f.value.examined), 1),
          f.value.hashSkipped || f.value.unavailable ? (d(), p("p", u4, o(u(b)("library", "Content checks skipped")) + ": " + o(f.value.hashSkipped) + " · " + o(u(b)("library", "Unavailable books")) + ": " + o(f.value.unavailable), 1)) : T("", !0),
          f.value.status === "limited" ? (d(), p("p", c4, o(u(b)("library", "These results are partial. A large candidate group or scan limit was reached. Try a smaller root or improve the metadata before scanning again.")), 1)) : T("", !0),
          f.value.status === "failed" ? (d(), p("p", d4, o(u(b)("library", "The scan stopped before completion. Its results are partial. Refresh or start a new scan.")), 1)) : T("", !0),
          r("div", f4, [
            x.value ? (d(), p("button", {
              key: 0,
              class: "button secondary",
              disabled: _.value,
              onClick: K
            }, o(u(b)("library", "Cancel scan")), 9, h4)) : T("", !0),
            r("button", {
              class: "button secondary",
              disabled: _.value,
              onClick: J[2] || (J[2] = (U) => re(f.value.id, f.value.page))
            }, o(u(b)("library", "Refresh results")), 9, p4),
            r("button", {
              class: "button secondary",
              disabled: _.value || x.value,
              onClick: D
            }, o(u(b)("library", "Discard scan")), 9, v4)
          ])
        ], 8, l4),
        r("label", null, [
          Q(o(u(b)("library", "Show comparisons")), 1),
          be(r("select", {
            "onUpdate:modelValue": J[3] || (J[3] = (U) => y.value = U),
            disabled: _.value,
            onChange: J[4] || (J[4] = (U) => re(f.value.id))
          }, [
            r("option", g4, o(u(b)("library", "All")) + " (" + o(f.value.matches) + ")", 1),
            (d(!0), p(W, null, oe(M.value, (U, H) => (d(), p("option", {
              key: H,
              value: H
            }, o(U) + " (" + o(f.value.counts[H] || 0) + ")", 9, m4))), 128))
          ], 40, b4), [
            [tt, y.value]
          ])
        ]),
        !f.value.pairs.length && !x.value ? (d(), p("p", y4, o(u(b)("library", "No comparisons in this view.")), 1)) : T("", !0),
        (d(!0), p(W, null, oe(f.value.pairs, (U) => (d(), p("article", {
          key: U.id,
          class: "library-duplicate-pair",
          "data-pair-id": U.id
        }, [
          U.unavailable ? (d(), p("p", w4, o(u(b)("library", "These books are no longer available. Start a new scan.")), 1)) : (d(), p(W, { key: 1 }, [
            r("header", null, [
              r("h2", null, o(U.reasons.includes("identical") ? u(b)("library", "Identical file contents") : u(b)("library", "Possible duplicates")), 1),
              r("span", k4, o(M.value[U.decision]), 1)
            ]),
            r("ul", {
              class: "library-duplicate-reasons",
              "aria-label": u(b)("library", "Why these books match")
            }, [
              (d(!0), p(W, null, oe(U.reasons, (H) => (d(), p("li", { key: H }, o(P.value[H]), 1))), 128))
            ], 8, S4),
            U.flags.length ? (d(), p("ul", {
              key: 0,
              class: "library-duplicate-flags",
              "aria-label": u(b)("library", "Differences to review")
            }, [
              (d(!0), p(W, null, oe(U.flags, (H) => (d(), p("li", { key: H }, o(L.value[H]), 1))), 128))
            ], 8, C4)) : T("", !0),
            U.stale ? (d(), p("p", T4, o(u(b)("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")), 1)) : T("", !0),
            r("div", A4, [
              (d(!0), p(W, null, oe(U.books, (H) => (d(), p("section", {
                key: H.id,
                class: Te(["library-duplicate-book", { "library-duplicate-preferred": U.preferredId === H.id }])
              }, [
                r("div", E4, [
                  r("img", {
                    src: H.coverUrl,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, $4),
                  r("div", null, [
                    r("h3", x4, o(H.title), 1),
                    r("p", N4, o(H.authors.join("; ") || "—"), 1),
                    U.preferredId === H.id ? (d(), p("strong", O4, o(u(b)("library", "Preferred copy")), 1)) : T("", !0)
                  ])
                ]),
                r("dl", null, [
                  r("div", null, [
                    r("dt", null, o(u(b)("library", "Format")), 1),
                    r("dd", null, o(H.format.toUpperCase()) + " · " + o(le(H.size)), 1)
                  ]),
                  r("div", null, [
                    r("dt", null, o(u(b)("library", "Language")), 1),
                    r("dd", null, o(H.language || "—"), 1)
                  ]),
                  r("div", null, [
                    r("dt", null, o(u(b)("library", "Publication date")), 1),
                    r("dd", null, o(H.publicationDate || "—"), 1)
                  ]),
                  r("div", null, [
                    r("dt", null, o(u(b)("library", "Publisher")), 1),
                    r("dd", R4, o(H.publisher || "—"), 1)
                  ]),
                  r("div", null, [
                    r("dt", null, o(u(b)("library", "ISBN")), 1),
                    r("dd", I4, o(H.isbn.join(", ") || "—"), 1)
                  ]),
                  r("div", null, [
                    r("dt", null, o(u(b)("library", "Location")), 1),
                    r("dd", L4, o(H.path), 1)
                  ])
                ]),
                r("div", P4, [
                  r("a", {
                    class: "button secondary",
                    href: H.openUrl
                  }, o(u(b)("library", "Open")), 9, D4),
                  r("a", {
                    class: "button secondary",
                    href: H.detailsUrl
                  }, o(u(b)("library", "Details")), 9, F4),
                  r("button", {
                    class: "button primary",
                    disabled: _.value || x.value || U.stale,
                    onClick: (ye) => Y(U, "preferred", H.id)
                  }, o(u(b)("library", "Prefer this copy")), 9, M4)
                ])
              ], 2))), 128))
            ]),
            r("div", U4, [
              r("button", {
                class: "button secondary",
                disabled: _.value || x.value || U.stale,
                onClick: (H) => Y(U, "keep")
              }, o(u(b)("library", "Keep both")), 9, z4),
              r("button", {
                class: "button secondary",
                disabled: _.value || x.value || U.stale,
                onClick: (H) => Y(U, "dismissed")
              }, o(u(b)("library", "Dismiss match")), 9, j4),
              U.decision !== "unreviewed" ? (d(), p("button", {
                key: 0,
                class: "button secondary",
                disabled: _.value || x.value || U.stale,
                onClick: (H) => Y(U, "unreviewed")
              }, o(u(b)("library", "Reset review decision")), 9, B4)) : T("", !0)
            ])
          ], 64))
        ], 8, _4))), 128)),
        r("nav", {
          class: "library-duplicate-actions",
          "aria-label": u(b)("library", "Duplicate comparison pages")
        }, [
          r("button", {
            class: "button secondary",
            disabled: _.value || f.value.page === 1,
            onClick: J[5] || (J[5] = (U) => re(f.value.id, f.value.page - 1))
          }, o(u(b)("library", "Previous page")), 9, V4),
          r("span", null, o(f.value.page), 1),
          r("button", {
            class: "button secondary",
            disabled: _.value || !f.value.hasNext,
            onClick: J[6] || (J[6] = (U) => re(f.value.id, f.value.page + 1))
          }, o(u(b)("library", "Next page")), 9, q4)
        ], 8, H4)
      ], 64)) : T("", !0)
    ], 8, K3));
  }
}, af = ["title", "subtitle", "author", "series", "seriesNumber", "language", "publisher", "subject", "year", "genre"], K4 = /* @__PURE__ */ new Set([...af, "ignore", "folder", "folders", "extension"]);
function gg(e, t, a = {}) {
  if (!t || t.length > 1e3 || e.length > 2e3) return { status: "invalid", reason: "pattern", changes: [] };
  if (/%folders?%(?!\/)/.test(t)) return { status: "invalid", reason: "pattern", changes: [] };
  const i = (m) => m === "%folders%/" ? "folders" : m.slice(1, -1), n = t.split(/(%folders%\/|%[A-Za-z]+%)/).filter(Boolean);
  if (n.some((m) => m.includes("%") && !K4.has(i(m))) || n.filter((m) => m.startsWith("%")).length > 16) return { status: "invalid", reason: "pattern", changes: [] };
  if (/%[A-Za-z]+%%[A-Za-z]+%/.test(t)) return { status: "invalid", reason: "delimiter", changes: [] };
  let l = 0, s = !1;
  const c = [];
  function f(m, y, k) {
    if (++l > 5e3) {
      s = !0;
      return;
    }
    if (c.length > 1) return;
    if (m === n.length) {
      y === e.length && c.push(k);
      return;
    }
    const C = n[m];
    if (!C.startsWith("%")) {
      e.startsWith(C, y) && f(m + 1, y + C.length, k);
      return;
    }
    const S = i(C);
    if (S === "folders") {
      f(m + 1, y, k);
      for (let M = y; M < e.length && !s && c.length < 2; M++) e[M] === "/" && f(m + 1, M + 1, k);
      return;
    }
    const x = e.indexOf("/", y), F = x < 0 ? e.length : x;
    for (let M = y + 1; M <= F && !s && c.length < 2; M++) {
      const P = e.slice(y, M);
      S === "folder" && M !== F || S === "extension" && !/^[A-Za-z0-9]{1,12}$/.test(P) || f(m + 1, M, [...k, { key: S, raw: P }]);
    }
  }
  if (f(0, 0, []), s || c.length > 1) return { status: "ambiguous", changes: [] };
  if (!c.length) return { status: "unmatched", changes: [] };
  const _ = /* @__PURE__ */ new Map(), v = [];
  for (const { key: m, raw: y } of c[0]) {
    if (!af.includes(m)) continue;
    let k = y.trim();
    if (_.has(m) && _.get(m) !== k) return { status: "ambiguous", changes: [] };
    if (_.has(m)) continue;
    if (_.set(m, k), m === "year" && !/^\d{4}$/.test(k)) return { status: "invalid", reason: "year", changes: [] };
    if (m === "language" && (k = mg(k)), m === "language" && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(k)) return { status: "invalid", reason: "language", changes: [] };
    if (m === "author" && [...k].length > 255) return { status: "invalid", changes: [] };
    if (!yg(m, k)) return { status: "invalid", changes: [] };
    const C = String(a[m] || ""), S = m === "author" && Array.isArray(a.authors) ? JSON.stringify([k]) === JSON.stringify(a.authors) : C === k;
    v.push({ field: m, raw: y, value: k, ...m === "author" ? { values: [k] } : {}, before: C, previewOnly: !1, status: S ? "unchanged" : C.trim() ? "conflict" : "ready" });
  }
  return { status: v.some((m) => m.status === "conflict") ? "conflict" : v.some((m) => m.status === "ready") ? "ready" : "unchanged", changes: v };
}
function mg(e) {
  return ({ english: "en", german: "de", deutsch: "de", french: "fr", français: "fr", arabic: "ar" }[e.toLowerCase()] || e.toLowerCase()).replace(/^([a-z]{2,3})-([a-z]{2})$/, (a, i, n) => `${i}-${n.toUpperCase()}`);
}
function yg(e, t) {
  const a = { title: 512, subtitle: 512, author: 1024, series: 255, seriesNumber: 64, genre: 255, language: 64, publisher: 512, subject: 2048, year: 4 };
  return e in a ? !!t && [...t].length <= a[e] && !/[\x00-\x1f\x7f]/.test(t) && (e !== "year" || Number(t) > 0) : !0;
}
const W4 = [...af];
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
  const i = (m) => ({ status: m, changes: [] });
  if (!e || e.length > 2e3 || t?.version !== 1 || !Array.isArray(t.parts) || t.parts.length > 64) return i("invalid");
  const n = is(e);
  if (n.length !== t.parts.length) return i("unmatched");
  const l = /* @__PURE__ */ new Map();
  let s = 0, c = "";
  function f(m, y, k = 0) {
    if (c) return;
    if (++s > 128 || k > 6 || !y) {
      c = "invalid";
      return;
    }
    if (y.split) {
      const { delimiter: F, occurrence: M, children: P } = y.split;
      if (typeof F != "string" || !F || F.length > 100 || !["first", "last", "every"].includes(M) || !Array.isArray(P)) {
        c = "invalid";
        return;
      }
      const L = pd(m, F, M);
      if (L.length !== P.length || L.length < 2) {
        c = "unmatched";
        return;
      }
      L.forEach((le, te) => f(le, P[te], k + 1));
      return;
    }
    if (y.field === "ignore") return;
    if (!W4.includes(y.field)) {
      c = "invalid";
      return;
    }
    let C = m.trim();
    if (y.prefix) {
      if (!C.startsWith(y.prefix)) {
        c = "unmatched";
        return;
      }
      C = C.slice(y.prefix.length);
    }
    if (y.suffix) {
      if (!C.endsWith(y.suffix)) {
        c = "unmatched";
        return;
      }
      C = C.slice(0, -y.suffix.length);
    }
    if (y.underscores && (C = C.replaceAll("_", " ")), C = C.trim(), y.mapFrom && C === y.mapFrom && (C = y.mapTo.trim()), y.field === "language" && (C = mg(C)), !C || y.field === "year" && !/^\d{4}$/.test(C) || y.field === "language" && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(C)) {
      c = "invalid";
      return;
    }
    if (!yg(y.field, C)) {
      c = "invalid";
      return;
    }
    let S = [C];
    if (y.field === "author") {
      if (S = (y.authorSeparator ? C.split(y.authorSeparator) : S).map((F) => F.trim()), y.reverseName && (S = S.map((F) => {
        const M = F.split(",").map((P) => P.trim());
        return M.length !== 2 || M.some((P) => !P) ? (c = "invalid", F) : `${M[1]} ${M[0]}`;
      }), c))
        return;
      if (S.some((F) => !F || [...F].length > 255)) {
        c = "invalid";
        return;
      }
    }
    const x = l.get(y.field);
    x ? y.field === "author" && t.combineAuthors ? (x.values = [.../* @__PURE__ */ new Set([...x.values, ...S])], x.raw.push(m)) : JSON.stringify(x.values) !== JSON.stringify(S) && (c = "ambiguous") : l.set(y.field, { raw: [m], values: [...new Set(S)] });
  }
  if (n.forEach((m, y) => f(m, t.parts[y])), c) return i(c);
  const _ = l.get("author")?.values;
  if (_ && (_.length > 32 || [..._.join("; ")].length > 1024)) return i("invalid");
  const v = [...l].map(([m, y]) => {
    const k = y.values.join("; "), C = String(a[m] || ""), S = m === "author" && Array.isArray(a.authors) ? JSON.stringify(y.values) === JSON.stringify(a.authors) : C === k;
    return {
      field: m,
      raw: y.raw.join(" / "),
      value: k,
      values: y.values,
      before: C,
      previewOnly: !1,
      status: S ? "unchanged" : C.trim() ? "conflict" : "ready"
    };
  });
  return { status: v.some((m) => m.status === "conflict") ? "conflict" : v.some((m) => m.status === "ready") ? "ready" : "unchanged", changes: v };
}
const Y4 = ["aria-label", "aria-busy"], Z4 = {
  key: 0,
  role: "alert"
}, X4 = ["disabled"], J4 = {
  key: 2,
  role: "status"
}, Q4 = ["disabled"], eN = { class: "library-inference-presets" }, tN = ["disabled"], aN = ["disabled"], iN = ["disabled"], nN = ["aria-label"], rN = ["value", "aria-label"], lN = { class: "library-inference-before-after" }, sN = { key: 0 }, oN = ["aria-label"], uN = ["aria-label"], cN = { class: "library-inference-path" }, dN = { class: "library-inference-presets" }, fN = ["disabled"], hN = ["disabled"], pN = ["disabled"], vN = ["disabled"], bN = ["disabled"], gN = { class: "library-inference-history" }, mN = ["disabled", "onClick"], _g = {
  __name: "InferenceApply",
  props: { results: { type: Array, required: !0 }, labels: { type: Object, required: !0 }, context: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, wholeFolder: Boolean },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const a = e, i = t, n = /* @__PURE__ */ j([]), l = /* @__PURE__ */ j(null), s = /* @__PURE__ */ j([]), c = /* @__PURE__ */ j(!1), f = /* @__PURE__ */ j(""), _ = /* @__PURE__ */ j(""), v = /* @__PURE__ */ j(""), m = /* @__PURE__ */ new Set(["author", "title", "subtitle", "series", "seriesNumber", "genre", "language", "publisher", "subject", "year"]), y = q(() => a.results.filter((re) => ["ready", "conflict"].includes(re.status) && re.revision).map((re) => ({ ...re, changes: re.changes.filter((V) => m.has(V.field) && ["ready", "conflict"].includes(V.status)) })).filter((re) => re.changes.length)), k = (re, V) => `${re.id}:${V.field}`, C = q(() => y.value.map((re) => ({ id: re.id, revision: re.revision, changes: Object.fromEntries(re.changes.filter((V) => n.value.includes(k(re, V))).map((V) => [V.field, V.field === "author" ? V.values || [V.value] : V.value])) })).filter((re) => Object.keys(re.changes).length)), S = q(() => ({ prepared: b("library", "Awaiting approval"), applied: b("library", "Applied"), undone: b("library", "Undone") }));
    let x = 0;
    Ge(() => JSON.stringify([a.results, a.context]), () => {
      n.value = [], l.value?.status === "prepared" && (l.value = null), v.value = "", x++;
    }), Ge(() => JSON.stringify(n.value), () => {
      l.value?.status === "prepared" && (l.value = null), v.value = "", x++;
    });
    function F() {
      n.value = y.value.flatMap((re) => re.changes.filter((V) => V.status === "ready").map((V) => k(re, V)));
    }
    async function M(re = "", V) {
      const K = await fetch(Et(`/apps/library/api/inference/batches${re}`), { credentials: "same-origin", cache: "no-store", method: V === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: a.requestToken }, ...V === void 0 ? {} : { body: JSON.stringify(V) } }), D = await K.json();
      if (!K.ok)
        throw K.status === 409 ? (l.value && (l.value = { ...l.value, blocked: !0 }), new Error(b("library", "This review is stale or expired. Reload the sample and review again. Undo cannot overwrite later metadata changes."))) : D.error === "history_limit" ? new Error(b("library", "Recent batch history is full. Discard unused reviews or wait for history to expire.")) : K.status === 404 ? new Error(b("library", "The batch or one of its books is no longer available.")) : new Error(b("library", "Could not save these changes. Check the selected values or use a smaller selection."));
      return D;
    }
    async function P() {
      s.value = (await M()).batches;
    }
    async function L(re) {
      c.value = !0, f.value = "", _.value = "";
      try {
        await re();
      } catch (V) {
        f.value = V.message;
      } finally {
        c.value = !1;
      }
    }
    function le() {
      l.value = null, f.value = "", v.value = "", i("changed");
    }
    async function te() {
      const re = x;
      await L(async () => {
        const V = await M("", { proposals: C.value, context: a.context });
        re === x && (l.value = V), await P();
      });
    }
    async function $(re) {
      await L(async () => {
        l.value = await M(`/${re}`), v.value = "";
      });
    }
    async function G() {
      if (!l.value || a.disabled) return;
      const re = l.value, V = re.id;
      await L(async () => {
        const K = await M(`/${V}/apply`, {});
        l.value = { ...re, ...K }, _.value = b("library", "Selected metadata changes were applied. Source files were not changed."), n.value = [], await P(), i("changed");
      });
    }
    async function Z() {
      const re = l.value, V = re.id;
      await L(async () => {
        const K = await M(`/${V}/undo`, {});
        l.value = { ...re, ...K }, v.value = "", _.value = b("library", "The batch was undone. Previous metadata and provenance were restored."), await P(), i("changed");
      });
    }
    async function ee() {
      await L(async () => {
        await M(`/${l.value.id}/discard`, {}), l.value = null, await P();
      });
    }
    return Tt(() => L(P)), (re, V) => (d(), p("section", {
      class: "library-inference-apply",
      "aria-label": u(b)("library", "Review and apply metadata"),
      "aria-busy": c.value ? "true" : "false"
    }, [
      r("h2", null, [
        ce(Be, {
          text: e.wholeFolder ? u(b)("library", "Choose fields from this page only. Existing values require individual selection. Apply and Undo operate on this reviewed batch of at most 40 books.") : u(b)("library", "Choose fields from this sample only. Replacements require individual selection. Authors are stored in their preview order, with exact duplicates removed.")
        }, {
          default: ke(() => [
            Q(o(e.wholeFolder ? u(b)("library", "Review and apply metadata") : u(b)("library", "4. Review and apply metadata")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      f.value ? (d(), p("p", Z4, o(f.value), 1)) : T("", !0),
      l.value?.blocked ? (d(), p("button", {
        key: 1,
        class: "button secondary",
        disabled: c.value,
        onClick: le
      }, o(u(b)("library", "Load sample")), 9, X4)) : T("", !0),
      _.value ? (d(), p("p", J4, o(_.value), 1)) : T("", !0),
      r("fieldset", {
        disabled: c.value || e.disabled,
        class: "library-inference-approval-fields"
      }, [
        r("div", eN, [
          r("button", {
            class: "button secondary",
            disabled: !y.value.length,
            onClick: F
          }, o(u(b)("library", "Select empty fields")), 9, tN),
          r("button", {
            class: "button secondary",
            disabled: !n.value.length,
            onClick: V[0] || (V[0] = (K) => n.value = [])
          }, o(u(b)("library", "Clear selection")), 9, aN),
          r("button", {
            class: "button primary",
            disabled: !C.value.length || l.value?.status === "prepared",
            onClick: te
          }, o(u(b)("library", "Review selected changes")) + " (" + o(n.value.length) + ")", 9, iN)
        ]),
        r("div", {
          class: Te(["library-inference-approval-candidates", { "library-inference-approval-scroll": y.value.length > 8 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(b)("library", "Select metadata fields")
        }, [
          (d(!0), p(W, null, oe(y.value, (K) => (d(), p("details", {
            key: K.id,
            class: "library-inference-result"
          }, [
            r("summary", null, o(K.path), 1),
            (d(!0), p(W, null, oe(K.changes, (D) => (d(), p("label", {
              key: D.field,
              class: "library-inference-approval-field"
            }, [
              be(r("input", {
                "onUpdate:modelValue": V[1] || (V[1] = (Y) => n.value = Y),
                type: "checkbox",
                value: k(K, D),
                "aria-label": `${e.labels[D.field]}: ${K.path}`
              }, null, 8, rN), [
                [qa, n.value]
              ]),
              r("span", null, [
                r("strong", null, o(e.labels[D.field]), 1),
                r("span", lN, [
                  r("span", null, o(D.before || "—"), 1),
                  V[4] || (V[4] = r("span", { "aria-hidden": "true" }, " → ", -1)),
                  r("strong", null, o(D.value), 1)
                ]),
                D.status === "conflict" ? (d(), p("small", sN, o(u(b)("library", "Replaces an existing value")), 1)) : T("", !0)
              ])
            ]))), 128))
          ]))), 128))
        ], 10, nN)
      ], 8, Q4),
      l.value ? (d(), p("section", {
        key: 3,
        class: "library-inference-confirm",
        "aria-label": u(b)("library", "Confirmed change review")
      }, [
        r("h3", null, o(S.value[l.value.status]), 1),
        r("p", null, [
          ce(Be, {
            text: u(b)("library", "Reviews expire after 30 minutes. Applied batches can be undone for seven days, provided their metadata, source file and access have not changed. A stale item blocks the entire batch.")
          }, {
            default: ke(() => [
              Q(o(u(b)("library", "Available until")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          Q(": " + o(new Date(l.value.expiresAt * 1e3).toLocaleString()), 1)
        ]),
        r("div", {
          class: Te(["library-inference-confirm-entries", { "library-inference-approval-scroll": l.value.entries.length > 4 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(b)("library", "Reviewed metadata changes")
        }, [
          (d(!0), p(W, null, oe(l.value.entries, (K) => (d(), p("article", {
            key: K.id
          }, [
            r("h4", cN, o(K.path), 1),
            r("dl", null, [
              (d(!0), p(W, null, oe(K.changes, (D) => (d(), p("div", {
                key: D.field
              }, [
                r("dt", null, o(e.labels[D.field]), 1),
                r("dd", null, [
                  r("span", null, o(u(b)("library", "Before")) + ": " + o(D.before || "—"), 1),
                  r("strong", null, o(u(b)("library", "After")) + ": " + o(D.after), 1)
                ])
              ]))), 128))
            ])
          ]))), 128))
        ], 10, uN),
        r("div", dN, [
          l.value.status === "prepared" ? (d(), p("button", {
            key: 0,
            class: "button primary",
            disabled: c.value || e.disabled || l.value.blocked,
            onClick: G
          }, o(u(b)("library", "Apply reviewed changes")), 9, fN)) : T("", !0),
          l.value.status !== "applied" ? (d(), p("button", {
            key: 1,
            class: "button secondary",
            disabled: c.value,
            onClick: ee
          }, o(u(b)("library", "Discard review")), 9, hN)) : T("", !0),
          l.value.status === "applied" && !v.value ? (d(), p("button", {
            key: 2,
            class: "button secondary",
            disabled: c.value || l.value.blocked,
            onClick: V[2] || (V[2] = (K) => v.value = l.value.id)
          }, o(u(b)("library", "Undo this batch")), 9, pN)) : T("", !0),
          v.value ? (d(), p(W, { key: 3 }, [
            r("button", {
              class: "button primary",
              disabled: c.value || l.value.blocked,
              onClick: Z
            }, o(u(b)("library", "Confirm undo")), 9, vN),
            r("button", {
              class: "button secondary",
              disabled: c.value,
              onClick: V[3] || (V[3] = (K) => v.value = "")
            }, o(u(b)("library", "Cancel")), 9, bN)
          ], 64)) : T("", !0)
        ])
      ], 8, oN)) : T("", !0),
      r("details", gN, [
        r("summary", null, o(u(b)("library", "Recent metadata batches")) + " (" + o(s.value.length) + ")", 1),
        r("ul", null, [
          (d(!0), p(W, null, oe(s.value, (K) => (d(), p("li", {
            key: K.id
          }, [
            r("button", {
              class: "button secondary",
              disabled: c.value,
              onClick: (D) => $(K.id)
            }, o(new Date(Number(K.created_at) * 1e3).toLocaleString()) + " · " + o(S.value[K.status]), 9, mN)
          ]))), 128))
        ])
      ])
    ], 8, Y4));
  }
}, yN = { class: "library-inference-rule-trace" }, _N = { key: 0 }, vd = {
  __name: "InferenceRuleTrace",
  props: { result: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 } },
  setup(e) {
    return (t, a) => (d(), p("div", yN, [
      (d(!0), p(W, null, oe(e.result.conflicts || [], (i) => (d(), p("div", {
        key: i.field,
        class: "library-inference-rule-conflict"
      }, [
        r("strong", null, o(u(b)("library", "Conflicting rules")) + ": " + o(e.labels[i.field]), 1),
        r("ul", null, [
          (d(!0), p(W, null, oe(i.proposals, (n, l) => (d(), p("li", { key: l }, [
            r("bdi", null, o(n.value), 1),
            r("small", null, o(n.sources.map((s) => s.name).join(", ")), 1)
          ]))), 128))
        ])
      ]))), 128)),
      e.result.attempts?.length ? (d(), p("details", _N, [
        r("summary", null, [
          ce(Be, {
            text: u(b)("library", "Evaluated from the deepest assigned folder upward. An ambiguous match stops fallback. Rules above a successful match are not used. Conflicting fields have no single proposed value.")
          }, {
            default: ke(() => [
              Q(o(u(b)("library", "Rule evaluation")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        r("ul", null, [
          (d(!0), p(W, null, oe(e.result.attempts, (i) => (d(), p("li", {
            key: i.id
          }, [
            r("strong", null, o(i.name), 1),
            r("bdi", null, o(i.folder || "/"), 1),
            r("small", null, o(e.statuses[i.status]), 1)
          ]))), 128))
        ])
      ])) : T("", !0)
    ]));
  }
}, wN = ["aria-label", "aria-busy"], kN = {
  key: 0,
  role: "alert"
}, SN = { class: "library-inference-presets" }, CN = ["disabled"], TN = ["value", "disabled"], AN = { value: "" }, EN = ["value"], $N = { class: "library-inference-path" }, xN = { role: "status" }, NN = ["value", "max", "aria-label"], ON = { class: "library-inference-presets" }, RN = ["disabled"], IN = ["disabled"], LN = ["disabled"], PN = {
  key: 1,
  role: "alert"
}, DN = {
  key: 2,
  role: "alert"
}, FN = {
  key: 0,
  class: "library-analysis-definition",
  dir: "ltr"
}, MN = { key: 1 }, UN = { key: 2 }, zN = ["disabled"], jN = { value: "all" }, BN = ["value"], HN = ["aria-label"], VN = { class: "library-inference-path" }, qN = ["aria-label"], GN = ["disabled"], KN = ["disabled"], WN = {
  __name: "InferenceAnalysis",
  props: { definition: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 }, requestToken: String, disabled: Boolean },
  setup(e) {
    const t = e, a = /* @__PURE__ */ j(null), i = /* @__PURE__ */ j([]), n = /* @__PURE__ */ j(!1), l = /* @__PURE__ */ j(""), s = /* @__PURE__ */ j("all");
    let c, f = 0, _ = !0;
    const v = q(() => a.value?.status === "running"), m = q(() => ({ running: b("library", "Analysing"), completed: b("library", "Analysis complete"), cancelled: b("library", "Analysis cancelled"), failed: b("library", "Analysis failed"), limited: b("library", "Analysis limit reached") })), y = q(() => ({ ...t.statuses, unavailable: b("library", "Changed or unavailable books") }));
    async function k(te = "", $) {
      const G = await fetch(Et(`/apps/library/api/inference/analyses${te}`), { credentials: "same-origin", cache: "no-store", method: $ === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...$ === void 0 ? {} : { body: JSON.stringify($) } }), Z = await G.json();
      if (!G.ok)
        throw Z.error === "analysis_history_limit" ? new Error(b("library", "Five folder analyses are already saved. Discard an old analysis before starting another.")) : Z.error === "analysis_limit" ? new Error(b("library", "This folder exceeds the analysis limit. Choose a smaller subfolder.")) : G.status === 404 ? new Error(b("library", "This analysis or its folder is no longer available.")) : new Error(b("library", "Could not analyse this folder. Check the rule, folder and your access."));
      return Z;
    }
    async function C() {
      const te = await k();
      _ && (i.value = te.jobs);
    }
    async function S(te) {
      n.value = !0, l.value = "";
      try {
        await te();
      } catch ($) {
        _ && (l.value = $.message);
      } finally {
        _ && (n.value = !1);
      }
    }
    function x() {
      if (clearTimeout(c), !_ || !v.value) return;
      const te = a.value.id, $ = f;
      c = setTimeout(async () => {
        try {
          if (await k(`/${te}/advance`, {}), !_ || f !== $) return;
          const G = await k(`/${te}?page=${a.value.page}&filter=${s.value}`);
          if (!_ || f !== $) return;
          a.value = G, v.value || await C(), x();
        } catch (G) {
          _ && f === $ && (l.value = G.message);
        }
      }, 1500);
    }
    async function F() {
      await S(async () => {
        const te = await k("", { definition: t.definition });
        f++, s.value = "all", a.value = te, await C(), x();
      });
    }
    async function M(te, $ = 1) {
      const G = ++f;
      clearTimeout(c), await S(async () => {
        const Z = await k(`/${te}?page=${$}&filter=${s.value}`);
        _ && G === f && (a.value = Z, x());
      });
    }
    function P(te) {
      s.value = "all", te.target.value && M(te.target.value);
    }
    async function L() {
      const te = a.value.id;
      f++, clearTimeout(c), await S(async () => {
        await k(`/${te}/cancel`, {}), a.value = await k(`/${te}?filter=${s.value}`), await C();
      });
    }
    async function le() {
      const te = a.value.id;
      f++, clearTimeout(c), await S(async () => {
        await k(`/${te}/discard`, {}), a.value = null, await C();
      });
    }
    return Tt(() => S(C)), Ca(() => {
      _ = !1, f++, clearTimeout(c);
    }), (te, $) => (d(), p("section", {
      class: "library-inference-analysis library-inference-step",
      "aria-label": u(b)("library", "Whole-folder analysis"),
      "aria-busy": n.value ? "true" : "false"
    }, [
      r("h2", null, [
        ce(Be, {
          text: u(b)("library", "Analyse all indexed books in the loaded folder using a snapshot of the current rule. Analysis continues through Nextcloud background jobs after you leave. Results are saved for seven days. New books require a new analysis; source files remain unchanged.")
        }, {
          default: ke(() => [
            Q(o(u(b)("library", "5. Analyse the whole folder")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      l.value ? (d(), p("p", kN, o(l.value), 1)) : T("", !0),
      r("div", SN, [
        r("button", {
          class: "button primary",
          disabled: n.value || e.disabled || v.value,
          onClick: F
        }, o(u(b)("library", "Analyse whole folder")), 9, CN),
        r("label", null, [
          ce(Be, {
            text: u(b)("library", "Select a saved analysis to reopen its results. Each page contains at most 40 books. Changes and Undo remain separate for each approved batch.")
          }, {
            default: ke(() => [
              Q(o(u(b)("library", "Saved analyses")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          r("select", {
            value: a.value?.id || "",
            disabled: n.value,
            onChange: P
          }, [
            r("option", AN, o(u(b)("library", "Choose an analysis")), 1),
            (d(!0), p(W, null, oe(i.value, (G) => (d(), p("option", {
              key: G.id,
              value: G.id
            }, o(new Date(Number(G.created_at) * 1e3).toLocaleString()) + " · " + o(m.value[G.status]) + " · " + o(G.processed) + "/" + o(G.total), 9, EN))), 128))
          ], 40, TN)
        ])
      ]),
      a.value ? (d(), p(W, { key: 1 }, [
        r("p", $N, o(a.value.scope), 1),
        r("p", xN, o(m.value[a.value.status]) + " · " + o(a.value.processed) + "/" + o(a.value.total), 1),
        v.value ? (d(), p("progress", {
          key: 0,
          value: a.value.processed,
          max: Math.max(a.value.total, 1),
          "aria-label": u(b)("library", "Analysis progress")
        }, null, 8, NN)) : T("", !0),
        r("div", ON, [
          v.value ? (d(), p("button", {
            key: 0,
            class: "button secondary",
            disabled: n.value,
            onClick: L
          }, o(u(b)("library", "Cancel analysis")), 9, RN)) : T("", !0),
          r("button", {
            class: "button secondary",
            disabled: n.value,
            onClick: $[0] || ($[0] = (G) => M(a.value.id, a.value.page))
          }, o(u(b)("library", "Refresh results")), 9, IN),
          r("button", {
            class: "button secondary",
            disabled: n.value || v.value,
            onClick: le
          }, o(u(b)("library", "Discard analysis")), 9, LN)
        ]),
        a.value.status === "limited" ? (d(), p("p", PN, o(u(b)("library", "Analysis stopped at its storage limit. These results are partial. Choose a smaller subfolder for a complete analysis.")), 1)) : T("", !0),
        a.value.status === "failed" ? (d(), p("p", DN, o(u(b)("library", "Analysis stopped before completion. Check folder access and start a new analysis. These results are partial.")), 1)) : T("", !0),
        r("details", null, [
          r("summary", null, o(u(b)("library", "Rule used for this analysis")), 1),
          a.value.definition.mode === "pattern" ? (d(), p("code", FN, o(a.value.definition.pattern), 1)) : a.value.definition.mode === "folders" ? (d(), p("ul", MN, [
            (d(!0), p(W, null, oe(a.value.definition.assignments, (G) => (d(), p("li", {
              key: G.id
            }, o(G.folder || "/") + " · " + o(G.definition.name), 1))), 128))
          ])) : (d(), p("ul", UN, [
            (d(!0), p(W, null, oe(a.value.definition.rule.parts, (G, Z) => (d(), p("li", { key: Z }, o(Z + 1) + " · " + o(e.labels[G.field] || u(b)("library", "Ignore")), 1))), 128))
          ]))
        ]),
        r("label", null, [
          Q(o(u(b)("library", "Show results")), 1),
          be(r("select", {
            "onUpdate:modelValue": $[1] || ($[1] = (G) => s.value = G),
            disabled: n.value,
            onChange: $[2] || ($[2] = (G) => M(a.value.id))
          }, [
            r("option", jN, o(u(b)("library", "All")) + " (" + o(Object.values(a.value.counts).reduce((G, Z) => G + Z, 0)) + ")", 1),
            (d(!0), p(W, null, oe(y.value, (G, Z) => (d(), p("option", {
              key: Z,
              value: Z
            }, o(G) + " (" + o(a.value.counts[Z] || 0) + ")", 9, BN))), 128))
          ], 40, zN), [
            [tt, s.value]
          ])
        ]),
        r("div", {
          class: "library-analysis-results",
          role: "region",
          tabindex: "0",
          "aria-label": u(b)("library", "Analysis results")
        }, [
          (d(!0), p(W, null, oe(a.value.items, (G) => (d(), p("details", {
            key: G.id,
            class: "library-inference-result"
          }, [
            r("summary", null, [
              r("span", VN, o(G.path || "—"), 1),
              r("strong", null, o(y.value[G.status]), 1)
            ]),
            a.value.definition.mode === "folders" ? (d(), Pe(vd, {
              key: 0,
              result: G,
              labels: e.labels,
              statuses: y.value
            }, null, 8, ["result", "labels", "statuses"])) : T("", !0),
            (d(!0), p(W, null, oe(G.changes, (Z) => (d(), p("dl", {
              key: Z.field
            }, [
              r("dt", null, o(e.labels[Z.field]), 1),
              r("dd", null, o(Z.before || "—") + " → " + o(Z.value), 1)
            ]))), 128))
          ]))), 128))
        ], 8, HN),
        r("nav", {
          class: "library-inference-presets",
          "aria-label": u(b)("library", "Analysis pages")
        }, [
          r("button", {
            class: "button secondary",
            disabled: n.value || a.value.page === 1,
            onClick: $[3] || ($[3] = (G) => M(a.value.id, a.value.page - 1))
          }, o(u(b)("library", "Previous page")), 9, GN),
          r("span", null, o(a.value.page), 1),
          r("button", {
            class: "button secondary",
            disabled: n.value || !a.value.hasNext,
            onClick: $[4] || ($[4] = (G) => M(a.value.id, a.value.page + 1))
          }, o(u(b)("library", "Next page")), 9, KN)
        ], 8, qN),
        ce(_g, {
          "whole-folder": "",
          results: a.value.items,
          labels: e.labels,
          "request-token": e.requestToken,
          context: JSON.stringify({ analysisId: a.value.id }),
          disabled: n.value || v.value,
          onChanged: $[5] || ($[5] = (G) => M(a.value.id, a.value.page))
        }, null, 8, ["results", "labels", "request-token", "context", "disabled"])
      ], 64)) : T("", !0)
    ], 8, wN));
  }
}, YN = { class: "library-inference-part" }, ZN = { class: "library-inference-part-source" }, XN = { class: "library-inference-part-options" }, JN = { value: "first" }, QN = { value: "last" }, eO = { value: "every" }, tO = {
  key: 0,
  role: "status"
}, aO = ["aria-label"], iO = { value: "ignore" }, nO = ["value"], rO = { key: 1 }, lO = { class: "library-inference-part-options" }, sO = { class: "library-inference-checkbox" }, oO = {
  key: 2,
  class: "library-inference-part-options"
}, uO = { value: "none" }, cO = { value: "semicolon" }, dO = { value: "and" }, fO = { value: "custom" }, hO = { key: 0 }, pO = ["value"], vO = { class: "library-inference-checkbox" }, Pp = " and ", bO = {
  __name: "InferencePart",
  props: { node: { type: Object, required: !0 }, value: { type: String, default: "" }, fields: { type: Array, required: !0 }, depth: { type: Number, default: 0 } },
  setup(e) {
    const t = e, a = /* @__PURE__ */ j(t.node.split?.delimiter || " - "), i = /* @__PURE__ */ j(t.node.split?.occurrence || "first"), n = q(() => t.node.split ? pd(t.value, t.node.split.delimiter, t.node.split.occurrence) : []), l = q({
      get: () => t.node.authorSeparatorChoice || "none",
      set: (f) => {
        t.node.authorSeparatorChoice = f, t.node.authorSeparator = { none: "", semicolon: ";", ampersand: "&", and: Pp, custom: t.node.customAuthorSeparator || "" }[f];
      }
    });
    function s(f) {
      t.node.customAuthorSeparator = f.target.value, t.node.authorSeparator = f.target.value;
    }
    function c() {
      const f = pd(t.value, a.value, i.value).length, _ = t.node.split?.children || [];
      t.node.split = {
        delimiter: a.value,
        occurrence: i.value,
        children: Array.from({ length: Math.min(32, Math.max(2, f)) }, (v, m) => _[m] || Cu(m === 0 ? t.node.field : "ignore"))
      };
    }
    return (f, _) => {
      const v = Xe("InferencePart", !0);
      return d(), p("div", YN, [
        r("bdi", ZN, o(e.value || "—"), 1),
        e.node.split ? (d(), p(W, { key: 0 }, [
          r("div", XN, [
            r("label", null, [
              Q(o(u(b)("library", "Separator")), 1),
              be(r("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (m) => a.value = m),
                maxlength: "100",
                onInput: c
              }, null, 544), [
                [Me, a.value]
              ])
            ]),
            r("label", null, [
              Q(o(u(b)("library", "Split at")), 1),
              be(r("select", {
                "onUpdate:modelValue": _[1] || (_[1] = (m) => i.value = m),
                onChange: c
              }, [
                r("option", JN, o(u(b)("library", "First occurrence")), 1),
                r("option", QN, o(u(b)("library", "Last occurrence")), 1),
                r("option", eO, o(u(b)("library", "Every occurrence")), 1)
              ], 544), [
                [tt, i.value]
              ])
            ])
          ]),
          n.value.length !== e.node.split.children.length || !e.node.split.delimiter ? (d(), p("p", tO, o(u(b)("library", "This example does not match the split. Adjust the separator or select another example.")), 1)) : T("", !0),
          r("button", {
            class: "button secondary",
            onClick: _[2] || (_[2] = (m) => e.node.split = null)
          }, o(u(b)("library", "Use whole part")), 1),
          (d(!0), p(W, null, oe(e.node.split.children, (m, y) => (d(), Pe(v, {
            key: y,
            node: m,
            value: n.value[y] || "",
            fields: e.fields,
            depth: e.depth + 1
          }, null, 8, ["node", "value", "fields", "depth"]))), 128))
        ], 64)) : (d(), p(W, { key: 1 }, [
          r("label", null, [
            Q(o(u(b)("library", "Field")), 1),
            be(r("select", {
              "onUpdate:modelValue": _[3] || (_[3] = (m) => e.node.field = m),
              "aria-label": `${u(b)("library", "Field")}: ${e.value}`
            }, [
              r("option", iO, o(u(b)("library", "Ignore this part")), 1),
              (d(!0), p(W, null, oe(e.fields, (m) => (d(), p("option", {
                key: m[0],
                value: m[0]
              }, o(m[1]), 9, nO))), 128))
            ], 8, aO), [
              [tt, e.node.field]
            ])
          ]),
          e.depth < 6 ? (d(), p("button", {
            key: 0,
            class: "button secondary",
            onClick: c
          }, o(u(b)("library", "Split this part")), 1)) : T("", !0),
          e.node.field !== "ignore" ? (d(), p("details", rO, [
            r("summary", null, o(u(b)("library", "Transform this value")), 1),
            r("div", lO, [
              r("label", null, [
                Q(o(u(b)("library", "Remove prefix")), 1),
                be(r("input", {
                  "onUpdate:modelValue": _[4] || (_[4] = (m) => e.node.prefix = m),
                  maxlength: "100"
                }, null, 512), [
                  [Me, e.node.prefix]
                ])
              ]),
              r("label", null, [
                Q(o(u(b)("library", "Remove suffix")), 1),
                be(r("input", {
                  "onUpdate:modelValue": _[5] || (_[5] = (m) => e.node.suffix = m),
                  maxlength: "100"
                }, null, 512), [
                  [Me, e.node.suffix]
                ])
              ]),
              r("label", sO, [
                be(r("input", {
                  "onUpdate:modelValue": _[6] || (_[6] = (m) => e.node.underscores = m),
                  type: "checkbox"
                }, null, 512), [
                  [qa, e.node.underscores]
                ]),
                Q(o(u(b)("library", "Replace underscores with spaces")), 1)
              ]),
              r("label", null, [
                ce(Be, {
                  text: u(b)("library", "Affixes must match. Value mapping follows affix removal and underscore replacement.")
                }, {
                  default: ke(() => [
                    Q(o(u(b)("library", "Map exact value")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                be(r("input", {
                  "onUpdate:modelValue": _[7] || (_[7] = (m) => e.node.mapFrom = m),
                  maxlength: "200"
                }, null, 512), [
                  [Me, e.node.mapFrom]
                ])
              ]),
              r("label", null, [
                Q(o(u(b)("library", "Replacement value")), 1),
                be(r("input", {
                  "onUpdate:modelValue": _[8] || (_[8] = (m) => e.node.mapTo = m),
                  maxlength: "200"
                }, null, 512), [
                  [Me, e.node.mapTo]
                ])
              ])
            ])
          ])) : T("", !0),
          e.node.field === "author" ? (d(), p("div", oO, [
            r("label", null, [
              ce(Be, {
                text: u(b)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + (l.value === "and" ? " " + u(b)("library", "Spaces around the word are required.") : "")
              }, {
                default: ke(() => [
                  Q(o(u(b)("library", "Separate authors by")), 1)
                ]),
                _: 1
              }, 8, ["text"]),
              be(r("select", {
                "onUpdate:modelValue": _[9] || (_[9] = (m) => l.value = m)
              }, [
                r("option", uO, o(u(b)("library", "None (keep one name)")), 1),
                r("option", cO, o(u(b)("library", "Semicolon (;)")), 1),
                _[11] || (_[11] = r("option", { value: "ampersand" }, "&", -1)),
                r("option", dO, o(u(b)("library", "Word separator")) + ": " + o(Pp.trim()), 1),
                r("option", fO, o(u(b)("library", "Custom separator")), 1)
              ], 512), [
                [tt, l.value]
              ])
            ]),
            l.value === "custom" ? (d(), p("label", hO, [
              Q(o(u(b)("library", "Custom separator")), 1),
              r("input", {
                value: e.node.customAuthorSeparator || "",
                maxlength: "100",
                onInput: s
              }, null, 40, pO)
            ])) : T("", !0),
            r("label", vO, [
              be(r("input", {
                "onUpdate:modelValue": _[10] || (_[10] = (m) => e.node.reverseName = m),
                type: "checkbox"
              }, null, 512), [
                [qa, e.node.reverseName]
              ]),
              Q(o(u(b)("library", "Convert Surname, Given name to Given name Surname")), 1)
            ])
          ])) : T("", !0)
        ], 64))
      ]);
    };
  }
}, gO = ["aria-busy"], mO = ["disabled"], yO = {
  value: "",
  disabled: ""
}, _O = ["value"], wO = ["disabled"], kO = ["disabled"], SO = ["disabled"], CO = ["disabled"], TO = ["disabled"], AO = {
  key: 0,
  role: "alert"
}, EO = ["disabled"], $O = {
  key: 1,
  role: "status"
}, Dp = {
  __name: "InferencePatterns",
  props: { pattern: { type: String, default: "" }, mode: { type: String, default: "pattern" }, rule: { type: Object, default: null }, requestToken: { type: String, default: "" } },
  emits: ["choose", "choose-rule"],
  setup(e, { emit: t }) {
    const a = e, i = t, n = q(() => a.mode === "guided"), l = q(() => n.value ? JSON.stringify(a.rule) : a.pattern), s = (G) => (G.kind || "pattern") === "guided" ? JSON.stringify(G.rule) : G.pattern, c = /* @__PURE__ */ j([]), f = /* @__PURE__ */ j(""), _ = /* @__PURE__ */ j(""), v = /* @__PURE__ */ j(!1), m = /* @__PURE__ */ j(""), y = /* @__PURE__ */ j(""), k = /* @__PURE__ */ j(""), C = /* @__PURE__ */ j([]), S = q(() => [
      { id: "title", name: b("library", "Title from filename"), pattern: "%folders%/%title%.%extension%", example: "Author/Book title.epub" },
      { id: "by", name: b("library", "Title by Author"), pattern: "%folders%/%title% by %author%.%extension%", example: "books/english_fiction/A Magic Deep and Drowning by Hester Fox.epub" },
      { id: "title-author-year", name: b("library", "Title - Author (Year)"), pattern: "%folders%/%title% - %author% (%year%).%extension%", example: "Adrian Tchaikovsky/Children of Time - Adrian Tchaikovsky (2016).epub" },
      { id: "author-title", name: b("library", "Author - Title"), pattern: "%folders%/%author% - %title%.%extension%", example: "Ada Quill - A Quiet Orchard.epub" },
      { id: "author-folder", name: b("library", "Author folder / Title"), pattern: "%folders%/%author%/%title%.%extension%", example: "Ada Quill/A Quiet Orchard.epub" },
      { id: "series", name: b("library", "Series folder / Number. Title - Author (Year)"), pattern: "%folders%/%series%/%seriesNumber%. %title% - %author% (%year%).%extension%", example: "Arthur C. Clarke/Space Odyssey/01. 2001 A Space Odyssey - Arthur C. Clarke (1968).epub" },
      { id: "series-inline", name: b("library", "Series #Number - Title - Author (Year)"), pattern: "%folders%/%series% #%seriesNumber% - %title% - %author% (%year%).%extension%", example: "Brandon Sanderson/Mistborn #04 - The Alloy of Law - Brandon Sanderson (2011).epub" },
      { id: "language-subject", name: b("library", "books / Language_Subject / Title - Author (Year)"), pattern: "books/%language%_%subject%/%folders%/%title% - %author% (%year%).%extension%", example: "books/english_fiction/Adrian Tchaikovsky/Children of Time - Adrian Tchaikovsky (2016).epub" },
      { id: "language-subject-by", name: b("library", "books / Language_Subject / Title by Author"), pattern: "books/%language%_%subject%/%folders%/%title% by %author%.%extension%", example: "books/english_fiction/A String in Her Tale by Mark Ezra.epub" },
      { id: "series-underscore", name: b("library", "Series folder / Number_Title_Author"), pattern: "%folders%/%series%/%seriesNumber%_%title%_%author%.%extension%", example: "Orchard Notes/2.5_Autumn Appendix_Ada Quill.epub" }
    ]), x = q(() => [...n.value ? [] : S.value.map((G) => ({ ...G, id: `preset-${G.id}` })).filter((G) => !C.value.includes(G.id)), ...c.value.filter((G) => (G.kind || "pattern") === a.mode)].sort((G, Z) => G.name.localeCompare(Z.name))), F = q(() => x.value.find((G) => G.id === _.value));
    Ge([l, x], () => {
      k.value = "", (!F.value || s(F.value) !== l.value) && (_.value = x.value.find((G) => s(G) === l.value)?.id || "");
    }, { immediate: !0 });
    const M = q(() => [b("library", "Patterns match paths relative to the selected folder. Adjust literal prefixes such as books/ when needed. Ambiguous names still need review."), F.value?.example ? `${b("library", "Example path")}: ${F.value.example}` : ""].filter(Boolean).join(`

`));
    function P(G) {
      const Z = x.value.find((ee) => ee.id === G.target.value);
      Z && (_.value = Z.id, n.value ? i("choose-rule", JSON.parse(JSON.stringify(Z.rule))) : i("choose", Z.pattern), y.value = "", k.value = "");
    }
    async function L(G = "", Z = null) {
      const ee = await fetch(`${Et("/apps/library/api/inference/patterns")}${G}`, {
        method: Z === null ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...Z === null ? {} : { "Content-Type": "application/json", requesttoken: a.requestToken } },
        ...Z === null ? {} : { body: JSON.stringify(Z) }
      });
      if (!ee.ok) throw new Error(ee.status === 409 ? b("library", "That name already exists. Choose a different name.") : ee.status === 422 ? b("library", "Check the definition and name. You can save up to 100 rules and patterns.") : b("library", "Could not load or save rules and patterns. Check your connection and try again."));
      return ee.json();
    }
    async function le() {
      v.value = !0, m.value = "";
      try {
        const G = await L();
        c.value = G.patterns, C.value = G.hidden || [];
      } catch (G) {
        m.value = G.message;
      } finally {
        v.value = !1;
      }
    }
    async function te() {
      v.value = !0, m.value = "", y.value = "";
      try {
        const G = await L("", { name: f.value, ...n.value ? { kind: "guided", rule: a.rule } : { pattern: a.pattern } });
        c.value = [...c.value, G.saved].sort((Z, ee) => Z.name.localeCompare(ee.name)), _.value = G.saved.id, f.value = "", y.value = n.value ? b("library", "Rule saved to your account.") : b("library", "Pattern saved to your account.");
      } catch (G) {
        m.value = G.message;
      } finally {
        v.value = !1;
      }
    }
    async function $(G) {
      v.value = !0, m.value = "", y.value = "";
      try {
        await L(`/${G}/delete`, {}), c.value = c.value.filter((Z) => Z.id !== G), C.value = [...C.value, G], _.value = "", k.value = "", y.value = n.value ? b("library", "Saved rule deleted. The current preview is unchanged.") : b("library", "Saved pattern deleted. The current preview is unchanged.");
      } catch (Z) {
        m.value = Z.message;
      } finally {
        v.value = !1;
      }
    }
    return Tt(le), (G, Z) => (d(), p("div", {
      class: "library-inference-templates",
      "aria-busy": v.value ? "true" : "false"
    }, [
      r("label", null, [
        ce(Be, {
          text: n.value ? u(b)("library", "Select a rule to restore its assignments, splits, transformations and author options. Folder scope stays unchanged.") : M.value
        }, {
          default: ke(() => [
            Q(o(n.value ? u(b)("library", "Saved rule") : u(b)("library", "Pattern")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        be(r("select", {
          "onUpdate:modelValue": Z[0] || (Z[0] = (ee) => _.value = ee),
          disabled: v.value,
          onChange: P
        }, [
          r("option", yO, o(n.value ? u(b)("library", "Custom rule") : u(b)("library", "Custom pattern")), 1),
          (d(!0), p(W, null, oe(x.value, (ee) => (d(), p("option", {
            key: ee.id,
            value: ee.id
          }, o(ee.name), 9, _O))), 128))
        ], 40, mO), [
          [tt, _.value]
        ])
      ]),
      He(G.$slots, "default"),
      r("form", {
        onSubmit: Se(te, ["prevent"])
      }, [
        r("label", null, [
          ce(Be, {
            text: u(b)("library", "Saved privately to your account. Save changes under a new name; existing definitions are not overwritten. Folder scope and example paths are not saved.")
          }, {
            default: ke(() => [
              Q(o(n.value ? u(b)("library", "Rule name") : u(b)("library", "Pattern name")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          be(r("input", {
            "onUpdate:modelValue": Z[1] || (Z[1] = (ee) => f.value = ee),
            maxlength: "120",
            required: "",
            disabled: v.value
          }, null, 8, wO), [
            [Me, f.value]
          ])
        ]),
        r("button", {
          class: "button secondary",
          disabled: v.value || !f.value.trim() || (n.value ? !e.rule : !e.pattern.trim())
        }, o(n.value ? u(b)("library", "Save current rule as new") : u(b)("library", "Save current pattern as new")), 9, kO),
        F.value && !k.value ? (d(), p("button", {
          key: 0,
          type: "button",
          class: "button secondary",
          disabled: v.value,
          onClick: Z[2] || (Z[2] = (ee) => k.value = F.value.id)
        }, o(n.value ? u(b)("library", "Delete rule") : u(b)("library", "Delete pattern")), 9, SO)) : T("", !0),
        k.value ? (d(), p(W, { key: 1 }, [
          r("button", {
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: Z[3] || (Z[3] = (ee) => $(k.value))
          }, o(u(b)("library", "Confirm deletion")), 9, CO),
          r("button", {
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: Z[4] || (Z[4] = (ee) => k.value = "")
          }, o(u(b)("library", "Cancel")), 9, TO)
        ], 64)) : T("", !0)
      ], 32),
      m.value ? (d(), p("p", AO, [
        Q(o(m.value) + " ", 1),
        r("button", {
          class: "button secondary",
          disabled: v.value,
          onClick: le
        }, o(n.value ? u(b)("library", "Reload saved rules") : u(b)("library", "Reload saved patterns")), 9, EO)
      ])) : T("", !0),
      y.value ? (d(), p("p", $O, o(y.value), 1)) : T("", !0)
    ], 8, gO));
  }
}, xO = ["aria-busy"], NO = ["disabled"], OO = {
  value: "",
  disabled: ""
}, RO = ["value"], IO = { class: "library-inference-path" }, LO = { class: "library-inference-checkbox" }, PO = ["disabled"], DO = ["disabled"], FO = {
  key: 0,
  role: "status"
}, MO = {
  key: 1,
  role: "alert"
}, UO = ["disabled"], zO = { key: 2 }, jO = { class: "library-inference-folder-list" }, BO = {
  key: 0,
  role: "status"
}, HO = ["disabled", "onClick"], VO = ["disabled", "onClick"], qO = ["disabled"], GO = {
  __name: "InferenceFolderRules",
  props: { rootId: { type: String, default: "" }, folder: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, scopePending: Boolean },
  emits: ["loaded"],
  setup(e, { emit: t }) {
    const a = e, i = t, n = /* @__PURE__ */ j([]), l = /* @__PURE__ */ j([]), s = /* @__PURE__ */ j(""), c = /* @__PURE__ */ j(!0), f = /* @__PURE__ */ j(!1), _ = /* @__PURE__ */ j(!1), v = /* @__PURE__ */ j(""), m = /* @__PURE__ */ j(""), y = q(() => a.disabled || f.value || _.value);
    let k = 0;
    async function C(M, P) {
      const L = await fetch(Et(`/apps/library/api/inference/${M}`), {
        method: P === void 0 ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...P === void 0 ? {} : { "Content-Type": "application/json", requesttoken: a.requestToken } },
        ...P === void 0 ? {} : { body: JSON.stringify(P) }
      });
      if (!L.ok) throw new Error(L.status === 409 ? b("library", "This rule is already assigned to this folder.") : L.status === 422 ? b("library", "Check the folder and rule. You can save up to 100 folder assignments.") : L.status === 404 ? b("library", "The folder or saved rule is unavailable. Reload and check your access.") : b("library", "Could not load or save folder rules. Try again."));
      return L.json();
    }
    async function S() {
      const M = ++k, P = a.rootId;
      if (l.value = [], m.value = "", v.value = "", i("loaded", { rootId: P, assignments: [] }), !!P) {
        f.value = !0;
        try {
          const [L, le] = await Promise.all([C("patterns"), C(`folders?rootId=${encodeURIComponent(P)}`)]);
          if (M !== k) return;
          n.value = L.patterns, l.value = le.assignments, n.value.some((te) => te.id === s.value) || (s.value = ""), i("loaded", { rootId: P, assignments: le.assignments });
        } catch (L) {
          M === k && (v.value = L.message);
        } finally {
          M === k && (f.value = !1);
        }
      }
    }
    async function x() {
      if (!(y.value || a.scopePending || !s.value)) {
        _.value = !0, v.value = "";
        try {
          await C("folders", { rootId: a.rootId, folder: a.folder, recursive: c.value, definitionId: s.value }), await S();
        } catch (M) {
          v.value = M.message;
        } finally {
          _.value = !1;
        }
      }
    }
    async function F(M) {
      if (!y.value) {
        _.value = !0, v.value = "";
        try {
          await C(`folders/${M}/delete`, {}), await S();
        } catch (P) {
          v.value = P.message;
        } finally {
          _.value = !1;
        }
      }
    }
    return Ge(() => a.rootId, S, { immediate: !0 }), Ca(() => {
      k++;
    }), (M, P) => (d(), p("div", {
      class: "library-inference-folder-rules",
      "aria-busy": y.value ? "true" : "false"
    }, [
      r("form", {
        onSubmit: Se(x, ["prevent"])
      }, [
        r("label", null, [
          ce(Be, {
            text: u(b)("library", "Save a guided rule or advanced pattern first. Assignments keep a fixed copy, even if the saved definition is later deleted. Rules only generate previews; they do not run on scans or change books.")
          }, {
            default: ke(() => [
              Q(o(u(b)("library", "Saved rule or pattern")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          be(r("select", {
            "onUpdate:modelValue": P[0] || (P[0] = (L) => s.value = L),
            disabled: y.value
          }, [
            r("option", OO, o(u(b)("library", "Choose a saved definition")), 1),
            (d(!0), p(W, null, oe(n.value, (L) => (d(), p("option", {
              key: L.id,
              value: L.id
            }, o(L.name), 9, RO))), 128))
          ], 8, NO), [
            [tt, s.value]
          ])
        ]),
        r("p", IO, [
          Q(o(u(b)("library", "Assignment folder")) + ": ", 1),
          r("bdi", null, o(e.folder || "/"), 1)
        ]),
        r("label", LO, [
          be(r("input", {
            "onUpdate:modelValue": P[1] || (P[1] = (L) => c.value = L),
            type: "checkbox",
            disabled: y.value
          }, null, 8, PO), [
            [qa, c.value]
          ]),
          Q(o(u(b)("library", "Use in subfolders")), 1)
        ]),
        r("button", {
          class: "button primary",
          disabled: y.value || e.scopePending || !s.value || !e.rootId
        }, o(u(b)("library", "Assign to this folder")), 9, DO)
      ], 32),
      e.scopePending ? (d(), p("p", FO, o(u(b)("library", "Load the folder before assigning a rule.")), 1)) : T("", !0),
      v.value ? (d(), p("p", MO, o(v.value), 1)) : T("", !0),
      r("button", {
        class: "button secondary",
        disabled: y.value,
        onClick: S
      }, o(u(b)("library", "Reload folder rules")), 9, UO),
      r("h3", null, [
        ce(Be, {
          text: u(b)("library", "Rules match paths relative to their assigned folder. A deeper matching folder wins; if it does not match, an ancestor can be used. Equally specific conflicting rules require review. All assignments for this root are listed here.")
        }, {
          default: ke(() => [
            Q(o(u(b)("library", "Rules for this root")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      !l.value.length && !f.value ? (d(), p("p", zO, o(u(b)("library", "No folder rules assigned yet.")), 1)) : T("", !0),
      r("ul", jO, [
        (d(!0), p(W, null, oe(l.value, (L) => (d(), p("li", {
          key: L.id,
          class: "library-inference-folder-entry"
        }, [
          r("strong", null, o(L.definition.name), 1),
          r("bdi", null, o(L.folder || "/"), 1),
          r("small", null, o(L.recursive ? u(b)("library", "Includes subfolders") : u(b)("library", "Direct children only")), 1),
          L.available ? T("", !0) : (d(), p("p", BO, o(u(b)("library", "Folder unavailable or replaced. Remove this assignment and assign again after checking the folder.")), 1)),
          m.value !== L.id ? (d(), p("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: y.value,
            onClick: (le) => m.value = L.id
          }, o(u(b)("library", "Remove assignment")), 9, HO)) : (d(), p(W, { key: 2 }, [
            r("button", {
              class: "button secondary",
              disabled: y.value,
              onClick: (le) => F(L.id)
            }, o(u(b)("library", "Confirm removal")), 9, VO),
            r("button", {
              class: "button secondary",
              disabled: y.value,
              onClick: P[2] || (P[2] = (le) => m.value = "")
            }, o(u(b)("library", "Cancel")), 9, qO)
          ], 64))
        ]))), 128))
      ])
    ], 8, xO));
  }
};
function KO(e, t, a, i = {}) {
  const n = [t, e].filter(Boolean).join("/"), l = a.filter((c) => c.available && (!c.folder || n.startsWith(`${c.folder}/`))).map((c) => ({ ...c, relative: c.folder ? n.slice(c.folder.length + 1) : n, depth: c.folder ? c.folder.split("/").length : 0 })).filter((c) => c.recursive || !c.relative.includes("/")).sort((c, f) => f.depth - c.depth || c.id.localeCompare(f.id)), s = [];
  for (const c of [...new Set(l.map((f) => f.depth))]) {
    const f = [];
    for (const y of l.filter((k) => k.depth === c)) {
      const k = y.definition, C = k.kind === "guided" ? tu(y.relative, k.rule, i) : gg(y.relative, k.pattern, i), S = { id: y.id, name: k.name, folder: y.folder };
      s.push({ ...S, status: C.status }), ["ready", "conflict", "unchanged"].includes(C.status) && C.changes.length && f.push({ result: C, source: S });
    }
    if (s.some((y) => y.status === "ambiguous")) return { status: "ambiguous", changes: [], conflicts: [], attempts: s };
    if (!f.length) continue;
    const _ = /* @__PURE__ */ new Map();
    for (const { result: y, source: k } of f) for (const C of y.changes) {
      const S = _.get(C.field) || /* @__PURE__ */ new Map(), x = JSON.stringify(C.values || [C.value]), F = S.get(x);
      F ? F.sources.push(k) : S.set(x, { ...C, sources: [k] }), _.set(C.field, S);
    }
    const v = [], m = [];
    for (const [y, k] of _)
      k.size > 1 ? m.push({ field: y, proposals: [...k.values()] }) : v.push([...k.values()][0]);
    return { status: m.length ? "ambiguous" : v.some((y) => y.status === "conflict") ? "conflict" : v.some((y) => y.status === "ready") ? "ready" : "unchanged", changes: v, conflicts: m, attempts: s };
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
function WO(e, t = []) {
  if (typeof e != "string" || !e || e.length > 2e3 || is(e).length > 64) return [];
  const a = is(e), i = a.length - 1, n = a[i], l = a.slice(0, -1), s = eu(e), c = [], f = [];
  let _ = n, v = (ee) => ee, m = (ee) => ee, y = "", k = sa("title"), C = !1;
  const S = /^(.*\S) \(((?:18|19|20)\d{2})\)$/.exec(_), x = !S && /^(.*\S) ((?:18|19|20)\d{2})$/.exec(_);
  S ? (_ = S[1], v = (ee) => dn(" (", "last", ee, sa("year", { suffix: ")" })), c.push("year-parentheses")) : x && (_ = x[1], v = (ee) => dn(" ", "last", ee, sa("year")), c.push("year-trailing"), f.push("year-may-be-title"));
  const F = /^(.*\S) by (.+)$/.exec(_), M = /^(.*\S) - (.+)$/.exec(_), P = F || M, L = !F && M && (wl(M[1]) || Mp(M[1]) && l.some((ee) => Sr(ee) === Sr(M[1]))), le = /^.+ #\d{1,3}(?:\.\d+)? - .+$/.test(_) && _.split(" - ").length === 2;
  L ? (y = M[1], _ = M[2], m = (ee) => dn(" - ", "first", sa("author"), ee), c.push("author-first"), f.push("author-needs-review")) : P && !le && (Mp(P[2]) || wl(P[2])) && (y = P[2], _ = P[1], m = (ee) => dn(F ? " by " : " - ", "last", ee, sa("author")), c.push(F ? "author-by" : "author-dash"), l.some((ee) => Sr(ee) === Sr(y)) ? c.push("author-folder-agrees") : f.push("author-needs-review"));
  const te = /^(.*\S) #(\d{1,3}(?:\.\d+)?) - (.+)$/.exec(_), $ = /^(\d{1,3}(?:\.\d+)?)\. (.+)$/.exec(_);
  if (te)
    k = dn(" #", "first", sa("series"), dn(" - ", "first", sa("seriesNumber"), sa("title"))), C = !0, c.push("series-inline");
  else if ($ && l.length) {
    const ee = l.at(-1);
    !wl(ee) && !(y && Sr(ee) === Sr(y)) && !Fp.has(ee.toLowerCase()) && !ee.includes("_") && (k = dn(". ", "first", sa("seriesNumber"), sa("title")), s.parts[i - 1] = sa("series"), C = !0, c.push("series-folder"), f.push("series-needs-review"));
  }
  if (s.parts[i] = v(m(k)), !y) {
    const ee = C ? i - 2 : i - 1;
    ee >= 0 && wl(a[ee]) && (s.parts[ee] = sa("author"), c.push("author-comma"), f.push("author-needs-review"));
  }
  for (let ee = l.length - 1; ee >= 0; ee--) {
    if (s.parts[ee].field !== "ignore") continue;
    const re = l[ee], V = re.indexOf("_"), K = V < 0 ? re : re.slice(0, V);
    if (Fp.has(K.toLowerCase())) {
      s.parts[ee] = V < 0 ? sa("language") : dn("_", "first", sa("language"), sa("genre", { underscores: !0 })), c.push(V < 0 ? "language-folder" : "language-genre-folder");
      break;
    }
  }
  const G = [], Z = (ee, re, V, K) => {
    const D = tu(e, re);
    if (!["ready", "conflict", "unchanged"].includes(D.status)) return;
    const Y = t.slice(0, 40).map((J) => typeof J == "string" ? J : J.path).filter((J) => typeof J == "string"), ae = Y.filter((J) => ["ready", "conflict", "unchanged"].includes(tu(J, re).status)).length;
    G.push({ id: ee, rule: re, clues: V, warnings: [...new Set(K)], preview: D.changes, matched: ae, total: Y.length });
  };
  return c.length && Z("detected", s, c, f), Z("filename", eu(e), ["filename-title"], /(?:^|\D)(?:18|19|20)\d{2}(?:\D|$)/.test(n) ? ["year-may-be-title"] : []), G;
}
const YO = { class: "library-inference-suggestions" }, ZO = ["disabled"], XO = {
  value: "",
  disabled: ""
}, JO = ["value"], QO = {
  key: 0,
  "aria-live": "polite"
}, eR = {
  __name: "InferenceSuggestions",
  props: { path: { type: String, default: "" }, sample: { type: Array, default: () => [] }, rule: { type: Object, default: null } },
  emits: ["choose"],
  setup(e, { emit: t }) {
    const a = e, i = t, n = /* @__PURE__ */ j(""), l = q(() => WO(a.path, a.sample)), s = q(() => l.value.find((v) => v.id === n.value)), c = q(() => ({
      "year-parentheses": b("library", "Trailing year in parentheses"),
      "year-trailing": b("library", "Possible trailing year"),
      "author-by": b("library", "Title by Author"),
      "author-dash": b("library", "Title - Author"),
      "author-first": b("library", "Author - Title"),
      "author-folder-agrees": b("library", "Author matches a folder name"),
      "author-comma": b("library", "Possible Surname, Given name folder"),
      "series-inline": b("library", "Series #Number - Title"),
      "series-folder": b("library", "Series folder with a numbered title"),
      "language-folder": b("library", "Recognized language folder"),
      "language-genre-folder": b("library", "Language and genre in one folder"),
      "filename-title": b("library", "Title from filename")
    })), f = q(() => ({
      "year-may-be-title": b("library", "A year-like number may belong to the title. Check before applying."),
      "author-needs-review": b("library", "A name-shaped phrase may be a title or several people. Check the author; commas are preserved."),
      "series-needs-review": b("library", "Check that the parent folder names a series and the number is its position.")
    }));
    Ge(() => a.path, () => {
      n.value = "";
    }), Ge(() => JSON.stringify(a.rule), (v) => {
      s.value && JSON.stringify(s.value.rule) !== v && (n.value = "");
    });
    function _(v) {
      n.value = v.target.value, s.value && i("choose", JSON.parse(JSON.stringify(s.value.rule)));
    }
    return (v, m) => (d(), p("div", YO, [
      r("label", null, [
        ce(Be, {
          text: u(b)("library", "Suggest editable assignments from the selected example. Check the live preview and other books before applying. Matching counts describe this page and its structure, not verified metadata.") + (s.value ? `

` + s.value.clues.map((y) => c.value[y]).join(`
`) : "")
        }, {
          default: ke(() => [
            Q(o(u(b)("library", "Suggest fields")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        be(r("select", {
          "onUpdate:modelValue": m[0] || (m[0] = (y) => n.value = y),
          disabled: !l.value.length,
          onChange: _
        }, [
          r("option", XO, o(u(b)("library", "Choose a suggestion")), 1),
          (d(!0), p(W, null, oe(l.value, (y) => (d(), p("option", {
            key: y.id,
            value: y.id
          }, o(y.id === "filename" ? u(b)("library", "Title from filename") : u(b)("library", "Suggested assignments")), 9, JO))), 128))
        ], 40, ZO), [
          [tt, n.value]
        ])
      ]),
      s.value ? (d(), p("div", QO, [
        r("p", null, o(u(b)("library", "{matched} of {total} paths on this page match this structure.", { matched: s.value.matched, total: s.value.total })), 1),
        (d(!0), p(W, null, oe(s.value.warnings, (y) => (d(), p("p", {
          key: y,
          class: "library-inference-suggestion-warning"
        }, o(f.value[y]), 1))), 128))
      ])) : T("", !0)
    ]));
  }
}, tR = ["aria-label", "aria-busy"], aR = {
  key: 0,
  role: "alert"
}, iR = {
  key: 1,
  role: "status"
}, nR = { class: "library-inference-step" }, rR = ["disabled"], lR = ["value"], sR = ["disabled", "placeholder"], oR = { class: "library-inference-checkbox" }, uR = ["disabled"], cR = ["disabled"], dR = {
  key: 0,
  class: "library-inference-path"
}, fR = ["aria-label"], hR = ["disabled"], pR = ["disabled", "onClick"], vR = {
  key: 2,
  class: "library-inference-step"
}, bR = { class: "library-inference-editor" }, gR = { class: "library-inference-controls" }, mR = { class: "library-inference-scope" }, yR = ["value"], _R = ["open"], wR = { value: "guided" }, kR = { value: "pattern" }, SR = { value: "folders" }, CR = {
  key: 0,
  role: "status"
}, TR = { class: "library-inference-checkbox" }, AR = {
  key: 2,
  class: "library-inference-pattern",
  open: ""
}, ER = ["aria-label"], $R = ["title"], xR = {
  key: 0,
  "aria-live": "polite",
  "aria-atomic": "true"
}, NR = { class: "library-inference-live-status" }, OR = { key: 1 }, RR = {
  key: 0,
  class: "library-inference-author-chips"
}, IR = {
  key: 1,
  dir: "auto"
}, LR = { dir: "auto" }, PR = { key: 2 }, DR = { dir: "auto" }, FR = { key: 3 }, MR = { key: 2 }, UR = { key: 1 }, zR = {
  class: "library-inference-path",
  dir: "ltr"
}, jR = { class: "library-inference-step" }, BR = { value: "all" }, HR = ["value"], VR = { key: 0 }, qR = { class: "library-inference-path" }, GR = {
  key: 1,
  class: "library-inference-table-scroll"
}, KR = { key: 2 }, WR = ["aria-label"], YR = ["disabled"], ZR = ["disabled"], XR = {
  __name: "PathInference",
  props: { requestToken: { type: String, default: "" } },
  setup(e) {
    const t = /* @__PURE__ */ j([]), a = /* @__PURE__ */ j(""), i = /* @__PURE__ */ j(""), n = /* @__PURE__ */ j(!0), l = /* @__PURE__ */ j([]), s = /* @__PURE__ */ j(1), c = /* @__PURE__ */ j(!1), f = /* @__PURE__ */ j(!1), _ = /* @__PURE__ */ j(""), v = /* @__PURE__ */ j(""), m = /* @__PURE__ */ j(""), y = /* @__PURE__ */ j(""), k = /* @__PURE__ */ j(""), C = /* @__PURE__ */ j([]), S = /* @__PURE__ */ j(null), x = /* @__PURE__ */ j("guided"), F = /* @__PURE__ */ j(0), M = /* @__PURE__ */ j("%folders%/%title%.%extension%"), P = /* @__PURE__ */ j("all"), L = /* @__PURE__ */ j(!0);
    let le = 0;
    const te = q(() => [
      ["title", b("library", "Title")],
      ["subtitle", b("library", "Subtitle")],
      ["author", b("library", "Creators")],
      ["series", b("library", "Series")],
      ["seriesNumber", b("library", "Part in series")],
      ["language", b("library", "Language")],
      ["genre", b("library", "Genre")],
      ["publisher", b("library", "Publisher")],
      ["subject", b("library", "Subjects")],
      ["year", b("library", "Publication year")]
    ]), $ = q(() => Object.fromEntries(te.value)), G = q(() => ({
      ready: b("library", "Empty field suggestions"),
      conflict: b("library", "Existing values need review"),
      unmatched: b("library", "Unmatched paths"),
      ambiguous: b("library", "Ambiguous matches"),
      invalid: b("library", "Invalid pattern or value"),
      unchanged: b("library", "No changes")
    })), Z = q(() => l.value.map((_e) => ({ ..._e, ...x.value === "folders" ? KO(_e.path, k.value, C.value, _e.current) : x.value === "guided" ? tu(_e.path, S.value, _e.current) : gg(_e.path, M.value, _e.current) }))), ee = q(() => Z.value.find((_e) => _e.path === m.value)), re = q(() => Z.value.filter((_e) => P.value === "all" || _e.status === P.value)), V = q(() => [...new Set(l.value.filter((_e) => _e.path.includes("/")).map((_e) => _e.path.split("/")[0]))]);
    function K(_e) {
      i.value = [i.value.replace(/\/$/, ""), _e].filter(Boolean).join("/"), Ue();
    }
    function D() {
      i.value = i.value.replace(/\/$/, "").split("/").slice(0, -1).join("/"), Ue();
    }
    const Y = q(() => Z.value.reduce((_e, Oe) => (_e[Oe.status] = (_e[Oe.status] || 0) + 1, _e), {})), ae = q(() => a.value !== y.value || i.value.replace(/^\/+|\/+$/g, "") !== k.value), J = q(() => is(m.value));
    function U() {
      !S.value && m.value && (S.value = eu(m.value));
    }
    function H() {
      S.value = eu(m.value), F.value++, x.value = "guided";
    }
    function ye(_e) {
      S.value = _e, F.value++, x.value = "guided";
    }
    function Re(_e) {
      ye(_e), L.value = !1;
    }
    function $e(_e) {
      M.value = _e, x.value = "pattern";
    }
    async function Ue(_e = 1) {
      const Oe = ++le;
      f.value = !0, _.value = "", l.value = [];
      try {
        const ge = new URLSearchParams();
        a.value && (ge.set("rootId", a.value), ge.set("folder", i.value), ge.set("recursive", n.value ? "1" : "0"), ge.set("page", String(_e)));
        const De = await fetch(`${Et("/apps/library/api/inference/sample")}?${ge}`, { credentials: "same-origin", cache: "no-store" });
        if (!De.ok) throw new Error(b("library", "Could not load this folder. Check its path and your access."));
        const nt = await De.json();
        if (Oe !== le) return;
        if (t.value = nt.roots, !a.value && (a.value = String(nt.roots[0]?.id || ""), a.value))
          return Ue();
        y.value !== a.value && (C.value = []), y.value = a.value;
        const ie = nt.roots.find((A) => String(A.id) === a.value)?.path.replace(/\/$/, "") || "";
        k.value = nt.scope.slice(ie.length).replace(/^\//, ""), l.value = nt.items || [], s.value = nt.page || 1, c.value = !!nt.hasNext, v.value = nt.scope || "", m.value = l.value[0]?.path || "", U();
      } catch (ge) {
        Oe === le && (_.value = ge.message);
      } finally {
        Oe === le && (f.value = !1);
      }
    }
    function Ze(_e) {
      _e.rootId === y.value && (C.value = _e.assignments);
    }
    function ct() {
      i.value = "", Ue();
    }
    return Tt(() => Ue()), (_e, Oe) => (d(), p("section", {
      class: "library-inference",
      "aria-label": u(b)("library", "Extract metadata from paths"),
      "aria-busy": f.value ? "true" : "false"
    }, [
      r("h1", null, [
        ce(Be, {
          text: u(b)("library", "Preview a naming rule, select fields and review before applying. Source files are never changed.")
        }, {
          default: ke(() => [
            Q(o(u(b)("library", "Extract metadata from paths")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      _.value ? (d(), p("p", aR, o(_.value), 1)) : T("", !0),
      f.value ? (d(), p("p", iR, o(u(b)("library", "Loading or saving…")), 1)) : T("", !0),
      r("section", nR, [
        r("h2", null, o(u(b)("library", "1. Choose a folder")), 1),
        r("form", {
          class: "library-inference-scope",
          onSubmit: Oe[3] || (Oe[3] = Se((ge) => Ue(), ["prevent"]))
        }, [
          r("label", null, [
            ce(Be, {
              text: u(b)("library", "Up to 40 accessible indexed books per page. Counts below describe this sample, not the entire folder.")
            }, {
              default: ke(() => [
                Q(o(u(b)("library", "Library root")), 1)
              ]),
              _: 1
            }, 8, ["text"]),
            be(r("select", {
              "onUpdate:modelValue": Oe[0] || (Oe[0] = (ge) => a.value = ge),
              disabled: f.value || !t.value.length,
              onChange: ct
            }, [
              (d(!0), p(W, null, oe(t.value, (ge) => (d(), p("option", {
                key: ge.id,
                value: String(ge.id)
              }, o(ge.label), 9, lR))), 128))
            ], 40, rR), [
              [tt, a.value]
            ])
          ]),
          r("label", null, [
            Q(o(u(b)("library", "Subfolder relative to this root")), 1),
            be(r("input", {
              "onUpdate:modelValue": Oe[1] || (Oe[1] = (ge) => i.value = ge),
              type: "text",
              disabled: f.value,
              placeholder: u(b)("library", "Leave empty for the whole root")
            }, null, 8, sR), [
              [Me, i.value]
            ])
          ]),
          r("label", oR, [
            be(r("input", {
              "onUpdate:modelValue": Oe[2] || (Oe[2] = (ge) => n.value = ge),
              type: "checkbox",
              disabled: f.value
            }, null, 8, uR), [
              [qa, n.value]
            ]),
            Q(o(u(b)("library", "Include subfolders")), 1)
          ]),
          r("button", {
            class: "button primary",
            disabled: f.value || !a.value
          }, o(u(b)("library", "Load sample")), 9, cR)
        ], 32),
        v.value ? (d(), p("p", dR, o(v.value), 1)) : T("", !0),
        r("div", {
          class: "library-inference-presets",
          "aria-label": u(b)("library", "Folders in this sample")
        }, [
          i.value ? (d(), p("button", {
            key: 0,
            class: "button secondary",
            disabled: f.value,
            onClick: D
          }, o(u(b)("library", "Parent folder")), 9, hR)) : T("", !0),
          (d(!0), p(W, null, oe(V.value, (ge) => (d(), p("button", {
            key: ge,
            class: "button secondary",
            disabled: f.value,
            onClick: (De) => K(ge)
          }, o(ge) + "/", 9, pR))), 128))
        ], 8, fR)
      ]),
      l.value.length ? (d(), p("section", vR, [
        r("h2", null, o(u(b)("library", "2. Describe the structure")), 1),
        r("div", bR, [
          r("div", gR, [
            r("div", mR, [
              r("label", null, [
                ce(Be, {
                  text: u(b)("library", "Assignments stay the same when you select another example. Reset them to use a different folder structure.")
                }, {
                  default: ke(() => [
                    Q(o(u(b)("library", "Example path")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                be(r("select", {
                  "onUpdate:modelValue": Oe[4] || (Oe[4] = (ge) => m.value = ge),
                  onChange: Oe[5] || (Oe[5] = (ge) => U())
                }, [
                  (d(!0), p(W, null, oe(l.value, (ge) => (d(), p("option", {
                    key: ge.id,
                    value: ge.path
                  }, o(ge.path), 9, yR))), 128))
                ], 544), [
                  [tt, m.value]
                ])
              ])
            ]),
            ce(eR, {
              path: m.value,
              sample: l.value,
              rule: x.value === "guided" ? S.value : null,
              onChoose: Re
            }, null, 8, ["path", "sample", "rule"]),
            r("details", {
              class: "library-inference-customize",
              open: L.value,
              onToggle: Oe[9] || (Oe[9] = (ge) => L.value = ge.target.open)
            }, [
              r("summary", null, o(u(b)("library", "Edit pattern")), 1),
              r("label", null, [
                Q(o(u(b)("library", "Rule editor")), 1),
                be(r("select", {
                  "onUpdate:modelValue": Oe[6] || (Oe[6] = (ge) => x.value = ge)
                }, [
                  r("option", wR, o(u(b)("library", "Guided assignments")), 1),
                  r("option", kR, o(u(b)("library", "Advanced pattern")), 1),
                  r("option", SR, o(u(b)("library", "Folder rules")), 1)
                ], 512), [
                  [tt, x.value]
                ])
              ]),
              x.value === "folders" ? (d(), Pe(GO, {
                key: 0,
                "root-id": y.value,
                folder: k.value,
                "request-token": e.requestToken,
                disabled: f.value,
                "scope-pending": ae.value,
                onLoaded: Ze
              }, null, 8, ["root-id", "folder", "request-token", "disabled", "scope-pending"])) : T("", !0),
              x.value === "guided" && S.value ? (d(), p(W, { key: 1 }, [
                ce(Dp, {
                  mode: "guided",
                  rule: S.value,
                  "request-token": e.requestToken,
                  onChooseRule: ye
                }, null, 8, ["rule", "request-token"]),
                r("button", {
                  class: "button secondary",
                  onClick: H
                }, o(u(b)("library", "Reset assignments from this example")), 1),
                J.value.length !== S.value.parts.length ? (d(), p("p", CR, o(u(b)("library", "This example has a different folder depth and does not match the rule.")), 1)) : T("", !0),
                (d(!0), p(W, null, oe(S.value.parts, (ge, De) => (d(), p("div", {
                  key: `${F.value}-${De}`
                }, [
                  r("h3", null, o(De === S.value.parts.length - 1 ? u(b)("library", "Filename") : u(b)("library", "Folder")) + " " + o(De + 1), 1),
                  ce(bO, {
                    node: ge,
                    value: J.value[De] || "",
                    fields: te.value
                  }, null, 8, ["node", "value", "fields"])
                ]))), 128)),
                r("label", TR, [
                  be(r("input", {
                    "onUpdate:modelValue": Oe[7] || (Oe[7] = (ge) => S.value.combineAuthors = ge),
                    type: "checkbox"
                  }, null, 512), [
                    [qa, S.value.combineAuthors]
                  ]),
                  ce(Be, {
                    text: u(b)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + " " + u(b)("library", "Each author is stored separately and can be used to filter the catalogue.")
                  }, {
                    default: ke(() => [
                      Q(o(u(b)("library", "Combine authors from multiple parts")), 1)
                    ]),
                    _: 1
                  }, 8, ["text"])
                ])
              ], 64)) : T("", !0),
              x.value === "pattern" ? (d(), p("details", AR, [
                r("summary", null, o(u(b)("library", "Pattern and presets")), 1),
                ce(Dp, {
                  pattern: M.value,
                  "request-token": e.requestToken,
                  onChoose: $e
                }, {
                  default: ke(() => [
                    r("label", null, [
                      ce(Be, {
                        text: u(b)("library", "Placeholders capture text. Separators must match exactly. %folder% ignores one folder; %folders%/ ignores any folder depth; %ignore% ignores one filename part.") + `

` + te.value.map((ge) => `%${ge[0]}%`).join(" · ")
                      }, {
                        default: ke(() => [
                          Q(o(u(b)("library", "Advanced pattern")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      be(r("input", {
                        "onUpdate:modelValue": Oe[8] || (Oe[8] = (ge) => M.value = ge),
                        maxlength: "1000",
                        spellcheck: "false",
                        dir: "ltr"
                      }, null, 512), [
                        [Me, M.value]
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["pattern", "request-token"])
              ])) : T("", !0)
            ], 40, _R)
          ]),
          r("aside", {
            class: "library-inference-live",
            "aria-label": u(b)("library", "Live preview")
          }, [
            r("h3", null, o(u(b)("library", "Live preview")), 1),
            r("p", {
              class: "library-inference-live-path",
              title: m.value
            }, o(m.value), 9, $R),
            ee.value ? (d(), p("div", xR, [
              r("p", NR, o(G.value[ee.value.status]), 1),
              x.value === "folders" ? (d(), Pe(vd, {
                key: 0,
                result: ee.value,
                labels: $.value,
                statuses: G.value
              }, null, 8, ["result", "labels", "statuses"])) : T("", !0),
              ee.value.changes.length ? (d(), p("dl", OR, [
                (d(!0), p(W, null, oe(ee.value.changes, (ge) => (d(), p("div", {
                  key: ge.field,
                  class: Te(["library-inference-live-field", `library-inference-live-field--${ge.status}`])
                }, [
                  r("dt", null, o($.value[ge.field]), 1),
                  r("dd", null, [
                    ge.field === "author" && ge.values ? (d(), p("span", RR, [
                      (d(!0), p(W, null, oe(ge.values, (De) => (d(), p("strong", {
                        key: De,
                        dir: "auto"
                      }, o(De), 1))), 128))
                    ])) : (d(), p("strong", IR, o(ge.value || "—"), 1)),
                    r("small", null, [
                      Q(o(u(b)("library", "Current value")) + ": ", 1),
                      r("span", LR, o(ge.before || "—"), 1)
                    ]),
                    ge.raw !== ge.value ? (d(), p("small", PR, [
                      Q(o(u(b)("library", "Source text")) + ": ", 1),
                      r("span", DR, o(ge.raw), 1)
                    ])) : T("", !0),
                    r("small", null, o(G.value[ge.status]), 1),
                    ge.sources ? (d(), p("small", FR, o(u(b)("library", "Matched rule")) + ": " + o(ge.sources.map((De) => De.name).join(", ")), 1)) : T("", !0)
                  ])
                ], 2))), 128))
              ])) : ee.value.conflicts?.length ? T("", !0) : (d(), p("p", MR, o(u(b)("library", "No fields extracted from this example. Check the rule, separators and transformations.")), 1))
            ])) : T("", !0),
            x.value === "pattern" ? (d(), p("details", UR, [
              r("summary", null, o(u(b)("library", "Active pattern")), 1),
              r("code", zR, o(M.value), 1)
            ])) : T("", !0)
          ], 8, ER)
        ])
      ])) : T("", !0),
      r("section", jR, [
        r("h2", null, o(u(b)("library", "3. Review the sample")), 1),
        r("label", null, [
          ce(Be, {
            text: u(b)("library", "Fill empty fields first. Existing values are flagged for review. No changes are applied in this preview.")
          }, {
            default: ke(() => [
              Q(o(u(b)("library", "Show results")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          be(r("select", {
            "onUpdate:modelValue": Oe[10] || (Oe[10] = (ge) => P.value = ge)
          }, [
            r("option", BR, o(u(b)("library", "All")) + " (" + o(Z.value.length) + ")", 1),
            (d(!0), p(W, null, oe(G.value, (ge, De) => (d(), p("option", {
              key: De,
              value: De
            }, o(ge) + " (" + o(Y.value[De] || 0) + ")", 9, HR))), 128))
          ], 512), [
            [tt, P.value]
          ])
        ]),
        !re.value.length && !f.value ? (d(), p("p", VR, o(u(b)("library", "No sample results here. Try another folder, page or result filter.")), 1)) : T("", !0),
        (d(!0), p(W, null, oe(re.value, (ge) => (d(), p("details", {
          key: ge.id,
          class: "library-inference-result"
        }, [
          r("summary", null, [
            r("span", qR, o(ge.path), 1),
            r("strong", null, o(G.value[ge.status]), 1)
          ]),
          x.value === "folders" ? (d(), Pe(vd, {
            key: 0,
            result: ge,
            labels: $.value,
            statuses: G.value
          }, null, 8, ["result", "labels", "statuses"])) : T("", !0),
          ge.changes.length ? (d(), p("div", GR, [
            r("table", null, [
              r("thead", null, [
                r("tr", null, [
                  r("th", null, o(u(b)("library", "Field")), 1),
                  r("th", null, o(u(b)("library", "Current value")), 1),
                  r("th", null, o(u(b)("library", "Proposed value")), 1),
                  r("th", null, o(u(b)("library", "Source text")), 1)
                ])
              ]),
              r("tbody", null, [
                (d(!0), p(W, null, oe(ge.changes, (De) => (d(), p("tr", {
                  key: De.field
                }, [
                  r("th", null, o($.value[De.field]), 1),
                  r("td", null, o(De.before || "—"), 1),
                  r("td", null, [
                    Q(o(De.value), 1),
                    r("small", null, o(G.value[De.status]), 1)
                  ]),
                  r("td", null, o(De.raw), 1)
                ]))), 128))
              ])
            ])
          ])) : ge.conflicts?.length ? T("", !0) : (d(), p("p", KR, o(u(b)("library", "Check separators, folder depth and field assignments. A unique interpretation is required.")), 1))
        ]))), 128)),
        r("nav", {
          class: "library-inference-presets",
          "aria-label": u(b)("library", "Sample pages")
        }, [
          r("button", {
            class: "button secondary",
            disabled: f.value || s.value === 1,
            onClick: Oe[11] || (Oe[11] = (ge) => Ue(s.value - 1))
          }, o(u(b)("library", "Previous page")), 9, YR),
          r("span", null, o(s.value), 1),
          r("button", {
            class: "button secondary",
            disabled: f.value || !c.value,
            onClick: Oe[12] || (Oe[12] = (ge) => Ue(s.value + 1))
          }, o(u(b)("library", "Next page")), 9, ZR)
        ], 8, WR)
      ]),
      ce(_g, {
        class: "library-inference-step",
        results: Z.value,
        labels: $.value,
        "request-token": e.requestToken,
        disabled: f.value || ae.value,
        context: JSON.stringify({ mode: x.value, pattern: x.value === "pattern" ? M.value : void 0, rule: x.value === "guided" ? S.value : void 0, folderRules: x.value === "folders" ? C.value : void 0, rootId: y.value, folder: k.value }),
        onChanged: Oe[13] || (Oe[13] = (ge) => Ue(s.value))
      }, null, 8, ["results", "labels", "request-token", "disabled", "context"]),
      ce(WN, {
        definition: { mode: x.value, pattern: M.value, rule: S.value, rootId: y.value, folder: k.value, recursive: n.value },
        labels: $.value,
        statuses: G.value,
        "request-token": e.requestToken,
        disabled: f.value || ae.value || !y.value
      }, null, 8, ["definition", "labels", "statuses", "request-token", "disabled"])
    ], 8, tR));
  }
}, JR = ["aria-label", "title", "onClick"], QR = {
  key: 0,
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, eI = { id: "library-sidebar-filters-heading" }, tI = ["aria-label"], aI = ["value"], iI = ["name", "value"], nI = ["value"], rI = ["value"], lI = {
  class: "library-filter-group",
  "data-library-filter-group": "content"
}, sI = ["title"], oI = ["placeholder"], uI = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "q"
}, cI = { value: "" }, dI = ["value"], fI = { class: "library-publisher-filter" }, hI = { for: "library-publisher-search" }, pI = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], vI = ["value"], bI = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, gI = {
  key: 1,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, mI = ["id", "aria-selected"], yI = ["onClick"], _I = { class: "library-publication-filter" }, wI = { for: "library-publication-search" }, kI = ["placeholder", "aria-expanded"], SI = ["value"], CI = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, TI = {
  key: 1,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, AI = ["onClick"], EI = { class: "library-year-filter" }, $I = { for: "library-year-search" }, xI = ["placeholder", "aria-expanded"], NI = ["value"], OI = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, RI = {
  key: 1,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, II = ["onClick"], LI = { class: "library-creator-filter" }, PI = { for: "library-creator-search" }, DI = ["placeholder", "title", "aria-expanded"], FI = ["value"], MI = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, UI = {
  key: 1,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, zI = ["onClick"], jI = { class: "library-tag-filter" }, BI = { for: "library-tag-search" }, HI = ["placeholder", "aria-expanded"], VI = ["value"], qI = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, GI = ["onClick"], KI = { value: "" }, WI = ["value"], YI = {
  class: "library-filter-group",
  "data-library-filter-group": "location"
}, ZI = { value: "" }, XI = ["value"], JI = { class: "library-folder-filter" }, QI = { for: "library-folder-search" }, eL = ["placeholder", "title", "aria-expanded"], tL = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, aL = ["onClick"], iL = {
  class: "library-filter-group",
  "data-library-filter-group": "review"
}, nL = { value: "" }, rL = ["value"], lL = { value: "" }, sL = ["value"], oL = { class: "library-subject-filter" }, uL = { for: "library-subject-search" }, cL = ["placeholder", "title", "aria-expanded"], dL = ["value"], fL = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, hL = {
  key: 1,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, pL = ["onClick"], vL = { class: "library-classification-filter" }, bL = { for: "library-classification-search" }, gL = ["placeholder", "title", "aria-expanded"], mL = ["value"], yL = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, _L = ["onClick"], wL = { value: "" }, kL = { value: "1" }, SL = {
  class: "library-filter-group",
  "data-library-filter-group": "personal"
}, CL = {
  type: "submit",
  class: "button primary"
}, TL = ["href"], AL = ["lang", "dir"], EL = ["aria-label"], $L = ["href", "aria-label", "title", "onClick"], xL = ["title"], NL = ["href"], OL = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, RL = { class: "library-review-header" }, IL = { class: "library-muted library-catalogue-eyebrow" }, LL = { id: "library-review-heading" }, PL = ["aria-label"], DL = ["href", "aria-current", "onClick"], FL = ["aria-label"], ML = ["name", "value"], UL = {
  type: "submit",
  class: "button secondary"
}, zL = ["aria-busy"], jL = { key: 0 }, BL = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, HL = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, VL = { class: "library-metadata-review-workbench-copy" }, qL = { class: "library-muted library-catalogue-eyebrow" }, GL = ["title"], KL = {
  key: 0,
  class: "library-metadata-review-card"
}, WL = {
  class: "library-bidi-human",
  dir: "auto"
}, YL = { class: "library-muted" }, ZL = {
  class: "library-bidi-machine",
  dir: "ltr"
}, XL = { class: "library-metadata-review-fields" }, JL = {
  class: "library-bidi-human",
  dir: "auto"
}, QL = {
  class: "library-bidi-human",
  dir: "auto"
}, eP = {
  class: "library-bidi-human",
  dir: "auto"
}, tP = {
  class: "library-bidi-machine",
  dir: "ltr"
}, aP = {
  class: "library-bidi-human",
  dir: "auto"
}, iP = {
  class: "library-bidi-human",
  dir: "auto"
}, nP = ["action"], rP = ["value"], lP = ["value"], sP = ["disabled", "title"], oP = { class: "library-metadata-review-actions" }, uP = ["href"], cP = ["href"], dP = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, fP = ["href"], hP = ["aria-label"], pP = ["onClick"], vP = {
  class: "library-bidi-human",
  dir: "auto"
}, bP = {
  key: 0,
  class: "library-muted"
}, gP = {
  class: "library-bidi-human",
  dir: "auto"
}, mP = {
  key: 1,
  class: "library-scan-error"
}, yP = {
  class: "library-bidi-human",
  dir: "auto"
}, _P = ["onClick"], wP = ["href", "onClick"], kP = ["aria-label"], SP = ["href"], CP = {
  key: 1,
  class: "library-muted"
}, TP = { key: 0 }, AP = ["href"], EP = {
  key: 3,
  class: "library-muted"
}, $P = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, xP = { class: "library-home-header" }, NP = { class: "library-muted library-catalogue-eyebrow" }, OP = { id: "library-home-heading" }, RP = ["aria-label"], IP = ["aria-label"], LP = ["href", "aria-label", "onClick"], PP = ["title"], DP = { class: "library-empty-actions" }, FP = ["href"], MP = ["href"], UP = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, zP = { id: "library-continue-heading" }, jP = ["href"], BP = {
  key: 0,
  class: "library-home-card-row"
}, HP = ["aria-label", "onClick"], VP = { class: "library-cover-frame" }, qP = ["src"], GP = { class: "library-cover-summary" }, KP = ["onClick"], WP = { dir: "auto" }, YP = {
  key: 0,
  class: "library-cover-creator"
}, ZP = { dir: "auto" }, XP = ["href", "onClick"], JP = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, QP = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, e8 = { id: "library-recent-heading" }, t8 = ["href"], a8 = {
  key: 0,
  class: "library-home-card-row"
}, i8 = ["aria-label", "onClick"], n8 = { class: "library-cover-frame" }, r8 = ["src"], l8 = { class: "library-cover-summary" }, s8 = ["onClick"], o8 = { dir: "auto" }, u8 = {
  key: 0,
  class: "library-cover-creator"
}, c8 = { dir: "auto" }, d8 = ["href", "onClick"], f8 = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, h8 = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, p8 = { id: "library-home-shelves-heading" }, v8 = ["href"], b8 = ["aria-label"], g8 = ["href"], m8 = { dir: "auto" }, y8 = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, _8 = {
  key: 1,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, w8 = { id: "library-home-attention-heading" }, k8 = { class: "library-muted" }, S8 = ["href"], C8 = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, T8 = { class: "library-home-header" }, A8 = { class: "library-muted library-catalogue-eyebrow" }, E8 = { id: "library-shelves-landing-heading" }, $8 = ["aria-label"], x8 = ["aria-label"], N8 = ["href", "aria-label", "onClick"], O8 = ["title"], R8 = { class: "library-empty-actions" }, I8 = ["href"], L8 = ["href"], P8 = ["aria-label"], D8 = { class: "library-shelf-tree" }, F8 = {
  key: 2,
  class: "library-shelves-empty",
  role: "status"
}, M8 = { class: "library-muted" }, U8 = { class: "library-empty-actions" }, z8 = ["href"], j8 = ["href"], B8 = ["aria-busy"], H8 = { class: "library-catalogue-header" }, V8 = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, q8 = ["aria-label"], G8 = { class: "library-mobile-filter-count" }, K8 = ["aria-label"], W8 = ["value"], Y8 = ["name", "value"], Z8 = { class: "library-mobile-filter-group" }, X8 = { class: "library-quick-filter-search" }, J8 = ["placeholder"], Q8 = { value: "" }, e5 = ["value"], t5 = { class: "library-publisher-filter" }, a5 = { for: "library-mobile-publisher-search" }, i5 = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], n5 = ["value"], r5 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, l5 = {
  key: 1,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, s5 = ["id", "aria-selected"], o5 = ["onClick"], u5 = { class: "library-publication-filter" }, c5 = { for: "library-mobile-publication-search" }, d5 = ["placeholder", "aria-expanded"], f5 = ["value"], h5 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, p5 = {
  key: 1,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, v5 = ["onClick"], b5 = { class: "library-year-filter" }, g5 = { for: "library-mobile-year-search" }, m5 = ["placeholder", "aria-expanded"], y5 = ["value"], _5 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, w5 = {
  key: 1,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, k5 = ["onClick"], S5 = { class: "library-creator-filter" }, C5 = { for: "library-mobile-creator-search" }, T5 = ["placeholder", "title", "aria-expanded"], A5 = ["value"], E5 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, $5 = {
  key: 1,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, x5 = ["onClick"], N5 = { value: "" }, O5 = ["value"], R5 = { class: "library-subject-filter" }, I5 = { for: "library-mobile-subject-search" }, L5 = ["placeholder", "title", "aria-expanded"], P5 = ["value"], D5 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, F5 = {
  key: 1,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, M5 = ["onClick"], U5 = { class: "library-classification-filter" }, z5 = { for: "library-mobile-classification-search" }, j5 = ["placeholder", "title", "aria-expanded"], B5 = ["value"], H5 = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, V5 = ["onClick"], q5 = { class: "library-mobile-filter-group" }, G5 = { value: "" }, K5 = ["value"], W5 = { class: "library-folder-filter" }, Y5 = { for: "library-mobile-folder-search" }, Z5 = ["placeholder", "title", "aria-expanded"], X5 = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, J5 = ["onClick"], Q5 = { class: "library-mobile-filter-group" }, e9 = { value: "" }, t9 = ["value"], a9 = { value: "" }, i9 = ["value"], n9 = { value: "" }, r9 = { value: "1" }, l9 = { class: "library-mobile-filter-group" }, s9 = { class: "library-tag-filter" }, o9 = { for: "library-tag-search" }, u9 = ["placeholder", "aria-expanded"], c9 = ["value"], d9 = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, f9 = ["onClick"], h9 = { value: "title" }, p9 = { value: "recent" }, v9 = { value: "publicationDate" }, b9 = { value: "publication" }, g9 = { value: "lastOpened" }, m9 = { value: "format" }, y9 = { value: "compact" }, _9 = { value: "list" }, w9 = { class: "library-mobile-filter-actions" }, k9 = ["href"], S9 = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, C9 = ["aria-label"], T9 = { class: "library-catalogue-control-band" }, A9 = {
  id: "library-collections",
  class: "library-saved-collections"
}, E9 = ["title"], $9 = ["action", "title"], x9 = ["value"], N9 = ["value"], O9 = { class: "library-control-label" }, R9 = ["placeholder", "disabled"], I9 = ["disabled", "title"], L9 = ["aria-label"], P9 = ["name", "value"], D9 = {
  class: "library-sort-control",
  "data-library-control": "sort"
}, F9 = { value: "title" }, M9 = { value: "recent" }, U9 = { value: "publicationDate" }, z9 = { value: "publication" }, j9 = { value: "lastOpened" }, B9 = { value: "format" }, H9 = ["aria-label"], V9 = ["aria-pressed"], q9 = ["aria-pressed"], G9 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, K9 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, W9 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, Y9 = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, Z9 = { key: 0 }, X9 = { key: 1 }, J9 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Q9 = { class: "library-muted library-catalogue-eyebrow" }, eD = ["title"], tD = ["aria-label"], aD = { key: 0 }, iD = { key: 1 }, nD = { key: 2 }, rD = ["aria-label"], lD = { key: 0 }, sD = { key: 1 }, oD = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, uD = { class: "library-muted library-catalogue-eyebrow" }, cD = ["title"], dD = ["aria-label"], fD = ["href"], hD = {
  key: 0,
  class: "library-notice"
}, pD = { class: "library-publication-issue-label" }, vD = ["href"], bD = { class: "library-muted" }, gD = {
  key: 1,
  class: "library-publication-unknown-issues"
}, mD = ["title"], yD = ["href"], _D = { class: "library-catalogue-status-row" }, wD = { class: "library-muted library-filter-result-summary" }, kD = ["aria-label"], SD = { class: "library-pagination-range" }, CD = { key: 0 }, TD = ["href"], AD = {
  key: 1,
  class: "library-muted"
}, ED = ["href"], $D = {
  key: 3,
  class: "library-muted"
}, xD = ["title"], ND = { class: "library-empty-actions" }, OD = ["href"], RD = { class: "library-muted" }, ID = ["title"], LD = { class: "library-empty-actions" }, PD = ["href"], DD = ["title"], FD = ["aria-label"], MD = ["href", "aria-label", "onClick"], UD = ["title"], zD = {
  key: 1,
  class: "library-muted"
}, jD = { class: "library-empty-actions" }, BD = ["href"], HD = ["title"], VD = { class: "library-empty-actions" }, qD = ["href"], GD = ["aria-label"], KD = { class: "library-list-selection-actions" }, WD = { class: "library-select-visible" }, YD = ["checked"], ZD = ["title"], XD = {
  key: 0,
  "aria-live": "polite"
}, JD = ["aria-label"], QD = { value: "" }, eF = { value: "tag" }, tF = { value: "untag" }, aF = { value: "edit" }, iF = { value: "covers" }, nF = { value: "reset" }, rF = ["action"], lF = ["value"], sF = ["placeholder"], oF = ["title"], uF = ["action"], cF = ["value"], dF = ["placeholder"], fF = ["title"], hF = ["action"], pF = ["value"], vF = ["name", "value"], bF = ["title"], gF = ["action"], mF = ["value"], yF = ["name", "value"], _F = { name: "bulkEditField" }, wF = { value: "publicationType" }, kF = { value: "subtitle" }, SF = { value: "creators" }, CF = { value: "publication" }, TF = { value: "series" }, AF = { value: "seriesNumber" }, EF = { value: "genre" }, $F = { value: "publicationDate" }, xF = { value: "language" }, NF = { value: "publisher" }, OF = { value: "subjects" }, RF = { value: "classifications" }, IF = ["placeholder"], LF = ["title"], PF = ["action"], DF = ["value"], FF = ["name", "value"], MF = ["title"], UF = {
  key: 6,
  class: "library-duplicate-page-status",
  role: "status"
}, zF = {
  key: 7,
  class: "library-catalogue-list-scroll",
  "data-library-catalogue-list-scroll": ""
}, jF = {
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, BF = { class: "hidden-visually" }, HF = { class: "library-catalogue-list-selection" }, VF = { class: "hidden-visually" }, qF = { class: "library-catalogue-list-cover-heading" }, GF = { class: "hidden-visually" }, KF = { scope: "col" }, WF = { scope: "col" }, YF = { scope: "col" }, ZF = { scope: "col" }, XF = { scope: "col" }, JF = { scope: "col" }, QF = { scope: "col" }, e6 = { class: "library-catalogue-list-selection" }, t6 = { class: "library-item-selection" }, a6 = ["checked", "aria-label", "onChange"], i6 = { class: "library-catalogue-list-cover-cell" }, n6 = ["aria-label", "onClick"], r6 = ["src"], l6 = {
  scope: "row",
  class: "library-catalogue-list-title-cell"
}, s6 = ["onClick"], o6 = {
  class: "library-bidi-human",
  dir: "auto"
}, u6 = ["href"], c6 = { class: "library-catalogue-list-creators" }, d6 = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, f6 = ["aria-label"], h6 = ["datetime"], p6 = ["aria-label"], v6 = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, b6 = ["aria-label"], g6 = ["dir"], m6 = ["aria-label"], y6 = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, _6 = ["aria-label"], w6 = { class: "library-catalogue-list-actions" }, k6 = ["href", "onClick"], S6 = ["onClick"], C6 = { class: "library-item-selection" }, T6 = ["checked", "aria-label", "onChange"], A6 = ["aria-labelledby", "aria-expanded", "onClick"], E6 = ["id"], $6 = ["action", "onSubmit"], x6 = ["value"], N6 = ["value"], O6 = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], R6 = ["data-library-star-error"], I6 = { class: "library-cover-summary" }, L6 = { class: "library-cover-primary" }, P6 = ["href"], D6 = ["id"], F6 = ["onClick"], M6 = {
  class: "library-bidi-human",
  dir: "auto"
}, U6 = {
  key: 1,
  class: "library-cover-creator"
}, z6 = {
  class: "library-bidi-human",
  dir: "auto"
}, j6 = {
  key: 2,
  class: "library-cover-context"
}, B6 = {
  class: "library-bidi-human",
  dir: "auto"
}, H6 = ["aria-label"], V6 = { class: "library-pagination-range" }, q6 = { key: 0 }, G6 = ["href"], K6 = {
  key: 1,
  class: "library-muted"
}, W6 = ["href"], Y6 = {
  key: 3,
  class: "library-muted"
}, Z6 = { class: "library-sidebar-content" }, X6 = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, J6 = ["role"], Q6 = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, eM = { class: "library-sidebar-publication-header" }, tM = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, aM = ["src"], iM = { class: "library-sidebar-publication-summary" }, nM = { class: "library-muted library-catalogue-eyebrow" }, rM = {
  class: "library-bidi-human",
  dir: "auto"
}, lM = { key: 0 }, sM = {
  class: "library-bidi-machine",
  dir: "ltr"
}, oM = { class: "library-detail-drawer-actions" }, uM = ["href"], cM = ["aria-label"], dM = ["aria-current", "onClick"], fM = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, hM = { id: "library-sidebar-overview-heading" }, pM = {
  key: 0,
  class: "library-sidebar-description"
}, vM = {
  class: "library-bidi-human",
  dir: "auto"
}, bM = { class: "library-detail-drawer-facts" }, gM = { key: 0 }, mM = ["href", "title"], yM = {
  class: "library-bidi-human",
  dir: "auto"
}, _M = { key: 1 }, wM = ["href", "title"], kM = { key: 1 }, SM = { key: 2 }, CM = { key: 2 }, TM = ["href", "title"], AM = {
  class: "library-bidi-human",
  dir: "auto"
}, EM = { key: 3 }, $M = { class: "library-detail-facet-list" }, xM = ["href", "title", "onClick"], NM = {
  class: "library-bidi-machine",
  dir: "ltr"
}, OM = { key: 4 }, RM = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, IM = { id: "library-sidebar-metadata-heading" }, LM = ["placeholder"], PM = ["onUpdate:modelValue", "aria-label", "placeholder"], DM = ["onUpdate:modelValue", "aria-label"], FM = ["onClick"], MM = {
  key: 0,
  role: "alert"
}, UM = {
  key: 1,
  role: "status"
}, zM = ["disabled"], jM = {
  key: 1,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, BM = { id: "library-sidebar-suggestions-heading" }, HM = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, VM = { id: "library-sidebar-activity-heading" }, qM = { class: "library-detail-drawer-facts" }, GM = { key: 0 }, KM = { key: 1 }, WM = { key: 2 }, YM = { class: "library-detail-drawer-file" }, ZM = ["href"], XM = { dir: "ltr" }, JM = {
  key: 1,
  dir: "ltr"
}, QM = ["aria-label"], eU = ["href"], tU = { dir: "auto" }, aU = ["aria-label"], iU = ["href"], nU = { dir: "auto" }, rU = ["aria-label"], lU = ["href"], sU = { dir: "auto" }, oU = ["aria-label"], uU = ["disabled"], cU = ["disabled"], dU = 20, fU = "/apps/library", hU = 2147483647, pU = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = B_(b, () => `${os()}:${cb()}`), a = e, i = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = Object.freeze([
      { key: "scannerConflicts", value: "1", countKey: "scanner-conflicts", label: "Suggested updates" },
      { key: "needsMetadata", value: "1", countKey: "needs-metadata", label: "Needs details" },
      { key: "status", value: "metadata_error", countKey: "metadata-errors", label: "File problems" },
      { key: "coverReview", value: "placeholder", countKey: "placeholder-covers", label: "Cover problems" },
      { key: "unreviewedImports", value: "1", countKey: "unreviewed-imports", label: "Imported changes" }
    ]), l = Object.freeze({
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
    function s(w, g) {
      return Object.prototype.hasOwnProperty.call(l, w) && String(g ?? "").trim() === l[w];
    }
    function c(w) {
      const g = new URLSearchParams(w);
      for (const h of Object.keys(l)) {
        const z = [...new Set([...g.keys()].filter((Ee) => Ee === h || Ee.startsWith(`${h}[`)))], he = z.reduce((Ee, je) => Ee + g.getAll(je).length, 0);
        if (he > 1 || z.some((Ee) => Ee !== h)) {
          for (const Ee of z) g.delete(Ee);
          continue;
        }
        h !== "status" && he === 1 && !s(h, g.get(h)) && g.delete(h);
      }
      return g;
    }
    function f(w) {
      return Object.keys(l).some((g) => w.getAll(g).length === 1 && s(g, w.get(g)));
    }
    function _(w) {
      return Object.fromEntries(Object.entries(w || {}).filter(([g, h]) => g === "status" || !Object.prototype.hasOwnProperty.call(l, g) || s(g, h)));
    }
    const v = Object.freeze(["compact", "list"]);
    function m(w) {
      return v.includes(w) ? w : "compact";
    }
    const y = /* @__PURE__ */ Lt({
      ...a.state,
      items: a.state.items || [],
      activeFilters: a.state.activeFilters || {},
      cataloguePagination: a.state.cataloguePagination || {}
    }), k = /* @__PURE__ */ Lt((y.items || []).map((w) => ({ ...w }))), C = q(() => k), S = q(() => y.shelves || []), x = q(() => y.formats || []), F = q(() => y.publicationTypes?.length ? y.publicationTypes : i), M = q(() => y.publications || []), P = q(() => y.publicationIssueContext || null), L = q(() => y.scanStatuses || []), le = q(() => y.workflowStatuses || []), te = q(() => y.cataloguePagination || {
      page: 1,
      limit: 100,
      total: C.value.length,
      visible: C.value.length,
      from: C.value.length > 0 ? 1 : 0,
      to: C.value.length,
      previousUrl: "",
      nextUrl: ""
    }), $ = /* @__PURE__ */ Lt({
      q: y.activeFilters?.q || "",
      view: m(y.activeFilters?.view),
      type: y.activeFilters?.type || "",
      publisher: y.activeFilters?.publisher || "",
      publication: y.activeFilters?.publication || "",
      year: y.activeFilters?.year || "",
      language: y.activeFilters?.language || "",
      creator: y.activeFilters?.creator || "",
      authorId: y.activeFilters?.authorId || "",
      seriesId: y.activeFilters?.seriesId || "",
      format: y.activeFilters?.format || "",
      tag: y.activeFilters?.tag || "",
      shelf: y.activeFilters?.shelf || "",
      folder: y.activeFilters?.folder || "",
      status: y.activeFilters?.status || "",
      workflowStatus: y.activeFilters?.workflowStatus || "",
      subject: y.activeFilters?.subject || "",
      classification: y.activeFilters?.classification || "",
      scannerConflicts: y.activeFilters?.scannerConflicts || "",
      starred: y.activeFilters?.starred || "",
      recentlyOpened: y.activeFilters?.recentlyOpened || "",
      needsMetadata: y.activeFilters?.needsMetadata || "",
      coverReview: y.activeFilters?.coverReview || "",
      noCreator: y.activeFilters?.noCreator || "",
      noPublication: y.activeFilters?.noPublication || "",
      noDate: y.activeFilters?.noDate || "",
      titleFromFilename: y.activeFilters?.titleFromFilename || "",
      noDescription: y.activeFilters?.noDescription || "",
      unsupportedContainer: y.activeFilters?.unsupportedContainer || "",
      weakMetadata: y.activeFilters?.weakMetadata || "",
      unreviewedImports: y.activeFilters?.unreviewedImports || "",
      sort: y.activeFilters?.sort || "title"
    });
    for (const w of Object.keys(l))
      w !== "status" && (s(w, $[w]) || ($[w] = ""));
    const G = /* @__PURE__ */ j($.publication), Z = /* @__PURE__ */ j($.q), ee = /* @__PURE__ */ j(!1), re = /* @__PURE__ */ j(null), V = q(() => {
      const w = G.value.trim().toLocaleLowerCase();
      return (w !== "" && re.value !== null ? re.value : M.value).filter((h) => w === "" || h.toLocaleLowerCase().includes(w)).slice(0, dU);
    });
    Ge(() => $.publication, (w) => {
      G.value = w || "";
    }), Ge(() => $.q, (w) => {
      Z.value = w || "";
    });
    let K = null, D = null, Y = 0;
    Ge(G, (w) => {
      window.clearTimeout(K), D?.abort(), D = null, re.value = null;
      const g = String(w || "").trim();
      if (g.length < 3) return;
      const h = ++Y;
      K = window.setTimeout(() => {
        Jg(g, h);
      }, 200);
    });
    const ae = /* @__PURE__ */ j($.publisher), J = /* @__PURE__ */ j(!1), U = /* @__PURE__ */ j(null), H = q(() => U.value || []);
    Ge(() => $.publisher, (w) => {
      ae.value = w || "";
    });
    let ye = null, Re = null, $e = 0;
    Ge(ae, (w) => {
      window.clearTimeout(ye), Re?.abort(), Re = null, U.value = null;
      const g = String(w || "").trim();
      if (g.length < 3) return;
      const h = ++$e;
      ye = window.setTimeout(() => {
        Gg(g, h);
      }, 200);
    });
    const Ue = /* @__PURE__ */ j($.creator), Ze = /* @__PURE__ */ j(!1), ct = /* @__PURE__ */ j(null), _e = q(() => ct.value || []);
    Ge(() => $.creator, (w) => {
      Ue.value = w || "";
    });
    let Oe = null, ge = null, De = 0;
    Ge(Ue, (w) => {
      window.clearTimeout(Oe), ge?.abort(), ge = null, ct.value = null;
      const g = String(w || "").trim();
      if (g.length < 3) return;
      const h = ++De;
      Oe = window.setTimeout(() => {
        qg(g, h);
      }, 200);
    });
    const nt = /* @__PURE__ */ j($.folder), ie = /* @__PURE__ */ j(!1), A = /* @__PURE__ */ j(null), R = q(() => A.value || []);
    Ge(() => $.folder, (w) => {
      nt.value = w || "";
    });
    let I = null, O = null, N = 0;
    Ge(nt, (w) => {
      window.clearTimeout(I), O?.abort(), O = null, A.value = null;
      const g = String(w || "").trim();
      if (g.length < 3) return;
      const h = ++N;
      I = window.setTimeout(() => {
        Zg(g, h);
      }, 200);
    });
    const X = /* @__PURE__ */ j($.subject), ne = /* @__PURE__ */ j(!1), de = /* @__PURE__ */ j(null), ve = q(() => de.value || []);
    Ge(() => $.subject, (w) => {
      X.value = w || "";
    });
    let fe = null, xe = null, we = 0;
    Ge(X, (w) => {
      window.clearTimeout(fe), xe?.abort(), xe = null, de.value = null;
      const g = String(w || "").trim();
      if (g.length < 3) return;
      const h = ++we;
      fe = window.setTimeout(() => {
        Kg(g, h);
      }, 200);
    });
    const Ae = /* @__PURE__ */ j($.classification), Ne = /* @__PURE__ */ j(!1), Ve = /* @__PURE__ */ j(null), Ye = q(() => Ve.value || []);
    Ge(() => $.classification, (w) => {
      Ae.value = w || "";
    });
    let qe = null, it = null, dt = 0;
    Ge(Ae, (w) => {
      window.clearTimeout(qe), it?.abort(), it = null, Ve.value = null;
      const g = String(w || "").trim();
      if (g.length < 3) return;
      const h = ++dt;
      qe = window.setTimeout(() => {
        Wg(g, h);
      }, 200);
    });
    const _t = /* @__PURE__ */ j($.tag), gt = /* @__PURE__ */ j(!1), ia = /* @__PURE__ */ j(null), pa = q(() => ia.value || []);
    Ge(() => $.tag, (w) => {
      _t.value = w || "";
    });
    let St = null, Rt = null, Ma = 0;
    Ge(_t, (w) => {
      window.clearTimeout(St), Rt?.abort(), Rt = null, ia.value = null;
      const g = String(w || "").trim();
      if (g.length < 2) return;
      const h = ++Ma;
      St = window.setTimeout(() => {
        Yg(g, h);
      }, 200);
    });
    const Gt = /* @__PURE__ */ j($.year), va = /* @__PURE__ */ j(!1), $n = /* @__PURE__ */ j(null), Ya = q(() => $n.value || []);
    Ge(() => $.year, (w) => {
      Gt.value = w || "";
    });
    let xn = null, Ta = null, Za = 0;
    Ge(Gt, (w) => {
      window.clearTimeout(xn), Ta?.abort(), Ta = null, $n.value = null;
      const g = String(w || "").trim();
      if (g.length < 2) return;
      const h = ++Za;
      xn = window.setTimeout(() => {
        Xg(g, h);
      }, 200);
    });
    const Xa = Object.fromEntries(Object.keys($).map((w) => [w, w === "sort" ? "title" : w === "view" ? "compact" : ""])), Fr = window.location.pathname.indexOf(fU), hi = Fr >= 0 ? window.location.pathname.slice(0, Fr) : "", Ki = {
      catalogue: `${hi}/apps/library/`,
      review: `${hi}/apps/library/?scannerConflicts=1`,
      settings: `${hi}/settings/user/library`
    };
    function Wi(w, g) {
      if (typeof w != "string" || w === "") return g;
      try {
        const h = hi ? `${hi}/` : "/";
        let z = w;
        for (let he = 0; he < 5; he += 1) {
          if (!z.startsWith("/") || z.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(z)) return g;
          const Ee = new URL(z, window.location.origin);
          if (Ee.origin !== window.location.origin || !Ee.pathname.startsWith(h)) return g;
          const je = z.split(/[?#]/, 1)[0];
          for (const _a of je.split("/")) {
            let ei = _a;
            for (let mr = 0; mr < 5; mr += 1) {
              const ti = decodeURIComponent(ei);
              if (/[\\/\u0000-\u001f\u007f]/.test(ti) || ti === "." || ti === "..") return g;
              if (ti === ei) break;
              if (ei = ti, mr === 4) return g;
            }
          }
          const Qe = decodeURI(z);
          if (Qe === z) return w;
          z = Qe;
        }
        return g;
      } catch {
        return g;
      }
    }
    const Yi = q(() => Wi(y.settingsUrl, Ki.settings)), rt = q(() => Wi(y.catalogueRootUrl, Ki.catalogue)), ur = q(() => Wi(y.homeUrl, `${Ki.catalogue}?home=1`)), ba = q(() => Wi(y.shelvesUrl, `${Ki.catalogue}?shelves=1`)), pi = q(() => Wi(y.reviewUrl || y.scannerConflictReviewUrl, Ki.review)), Zi = q(() => Object.entries(l).some(([w, g]) => $[w] === g)), cr = q(() => n.reduce((w, g) => w + Number(Vu.value[g.countKey] || 0), 0)), Nn = q(() => y.surface === "home"), Xi = q(() => y.surface === "shelves"), vi = q(() => y.surface === "duplicates"), Ji = q(() => y.surface === "inference"), bi = q(() => y.surface === "authors"), On = q(() => y.surface === "series"), Ua = q(() => y.surface === "lists"), Qi = q(() => `${rt.value}?lists=1`), Tu = Number(new URLSearchParams(window.location.search).get("addToList")) || null, wt = /* @__PURE__ */ j([]), Kt = /* @__PURE__ */ j("");
    async function cs() {
      try {
        wt.value = (await mn()).lists;
      } catch {
      }
    }
    Tt(cs);
    const ds = q(() => !bi.value && !On.value && !vi.value && !Ji.value && !Ua.value && !Nn.value && !Xi.value && !Zi.value && !$.starred && $.recentlyOpened !== "1" && !$.shelf), Mr = q(() => [
      { key: "home", name: t("library", "Home"), href: ur.value, active: Nn.value },
      { key: "all", name: t("library", "All publications"), href: rt.value, active: ds.value },
      { key: "starred", name: t("library", "Starred"), href: `${rt.value}?starred=1`, active: $.starred === "1" },
      { key: "continue", name: t("library", "Continue reading"), href: `${rt.value}?recentlyOpened=1&sort=lastOpened`, active: $.recentlyOpened === "1" },
      { key: "shelves", name: t("library", "Shelves"), href: ba.value, active: Xi.value || !!$.shelf },
      { key: "collections", name: t("library", "Collections"), href: `${rt.value}#library-collections`, active: !1 }
    ]), fs = q(() => pe.value.map((w) => ({
      key: `collection-${w.id}`,
      rawName: w.name,
      id: w.id,
      name: w.countPending ? w.name : `${w.name} (${yt("library", "%n item", "%n items", Number(w.count || 0))})`,
      href: hm(w.filters),
      active: pm(w.filters)
    }))), ht = q(() => y.requestToken || ""), Ur = q(() => !!y.duplicateSuggestions), Au = q(() => JSON.stringify(C.value.map((w) => [w.id, w.title, w.creators, w.publicationDate]))), Eu = q(() => JSON.parse(Au.value).map((w) => Number(w[0]))), { results: gi, status: Ja } = vg(Eu, Ur, ht);
    function mi(w, g) {
      const h = String(w?.recordOpenUrl || "");
      if (!h || !ht.value) return;
      const z = new URLSearchParams({ requesttoken: ht.value });
      try {
        if (navigator.sendBeacon) {
          const he = new Blob([z.toString()], { type: "application/x-www-form-urlencoded" });
          navigator.sendBeacon(h, he);
          return;
        }
      } catch {
      }
      fetch(h, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", requesttoken: ht.value },
        body: z,
        credentials: "same-origin",
        keepalive: !0
      }).catch(() => {
      });
    }
    const Rn = q(() => y.catalogueEndpointUrl || "/apps/library/catalogue"), en = q(() => y.shelfChildrenUrl || "/apps/library/shelves/children"), hs = q(() => y.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), zr = q(() => y.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), jr = q(() => y.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), Br = q(() => y.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), $u = q(() => y.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), ps = q(() => y.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), xu = q(() => y.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), Nu = q(() => y.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Ou = q(() => y.itemSidebarUrlTemplate || `${hi}/apps/library/items/__ITEM_ID__/sidebar`), Ru = q(() => y.batchTagUrl || "/apps/library/bulk/tags"), vs = q(() => y.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Iu = q(() => y.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), bs = q(() => y.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Hr = q(() => y.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), In = q(() => y.scannerConflictReviewUrl || "?scannerConflicts=1");
    y.importHealthSummary, y.importHealthSummary && Object.keys(y.importHealthSummary).length > 0;
    const Ln = q(() => y.discoveryPage === "publication"), dr = q(() => y.discoveryPage === "year"), tn = q(() => y.discoveryPage === "creator"), Aa = q(() => Ln.value || dr.value || tn.value), an = q(() => y.discoveryTitle || $.publication || $.year || $.creator || ""), ga = q(() => Aa.value ? an.value : t("library", "Library")), gs = q(() => tn.value ? t("library", "Creator") : dr.value ? t("library", "Publication year") : t("library", "Publication / series")), Pn = q(() => Number(y.rootCount || 0)), Lu = q(() => Number(y.enabledRootCount || 0)), fr = q(() => Pn.value === 0), Qa = q(() => Pn.value > 0 && Lu.value === 0), hr = q(() => Wt.value.length > 0), Ea = /* @__PURE__ */ j(!1), ms = /* @__PURE__ */ j(null), Vr = /* @__PURE__ */ j(null), ys = {
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
    }, pr = q(() => {
      if (typeof window > "u") return "";
      const w = new URLSearchParams(window.location.search);
      if (w.get("batchMetadataApplyResult") !== "1") return "";
      const g = w.get("batchMetadataField") || "field", h = w.get("batchMetadataApplied") || "0", z = w.get("batchMetadataUnchanged") || "0", he = w.get("batchMetadataSkipped") || "0";
      return t("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: h, field: g, unchanged: z, skipped: he });
    }), nn = q(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? t("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), vr = q(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? t("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), pe = q(() => y.savedCollections || []), E = q(() => y.savedCollectionSaveUrl || "/apps/library/collections"), B = q(() => y.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), ue = v, se = q(() => ue.includes($.view) ? $.view : "compact"), Ie = q(() => ({
      "library-cover-gallery--compact": se.value === "compact"
    }));
    function Fe(w) {
      const g = String(w || "").trim();
      if (g.length <= 32) return g;
      const h = g.split("/").filter(Boolean);
      return h.length > 0 ? `…/${h.at(-1)}` : g;
    }
    function Ke(w, g) {
      const h = String(g || "").trim();
      if (h === "" || Pu[w] === h) return "";
      if (w === "format") return h.toUpperCase();
      if (w === "folder") return Fe(h);
      const z = _s[w]?.[h];
      return z ? t("library", z) : h;
    }
    function At(w, g) {
      const h = String($[w] || "").trim(), z = Ke(w, h), he = t("library", g);
      return {
        key: w,
        label: he,
        value: h,
        displayValue: z,
        title: z ? `${he}: ${h}` : he
      };
    }
    const Wt = q(() => Object.entries(ys).map(([w, g]) => At(w, g)).filter((w) => w.value !== "" && !(w.key === "sort" && w.value === "title") && !(w.key === "view" && w.value === "compact"))), pt = q(() => Wt.value.filter((w) => !["sort", "view"].includes(w.key))), It = q(() => Wt.value.length), yi = q(() => {
      const w = new URLSearchParams();
      for (const h of pt.value) w.set(h.key, h.value);
      const g = w.toString();
      return `${rt.value}${g ? `?${g}` : ""}`;
    }), $t = q(() => pt.value[0] || null), ws = q(() => Z.value.trim() !== String($.q || "").trim()), kg = q(() => String($.q || "").trim() !== "" || ws.value);
    function ma(w) {
      return ({
        q: Z,
        publisher: ae,
        publication: G,
        creator: Ue,
        subject: X,
        year: Gt,
        folder: nt,
        classification: Ae,
        tag: _t
      }[w]?.value ?? "").trim() !== String($[w] || "").trim();
    }
    function za(w) {
      return ma(w) ? w === "q" ? t("library", "Not applied yet — press Enter or Apply.") : t("library", "Press Enter or Apply to use this value.") : "";
    }
    function _i(w) {
      return { "library-filter-apply--pending": ma(w) };
    }
    const Sg = q(() => It.value > 0 ? t("library", "Filters ({count})", { count: It.value }) : t("library", "Filters")), Cg = q(() => It.value > 0 ? t("library", "Open filters panel; {count} active filters", { count: It.value }) : t("library", "Open filters panel")), Tg = q(() => yt("library", "Show %n item", "Show %n items", Number(te.value.total || 0)));
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
    ]), nf = q(() => Object.entries(_($)).filter(([w, g]) => !Eg.has(w) && String(g || "").trim() !== "").map(([w, g]) => ({ key: w, value: g }))), $g = q(() => Object.entries($).filter(([w, g]) => !["q", "sort", "starred"].includes(w) && String(g || "").trim() !== "").map(([w, g]) => ({ key: w, value: g }))), ks = q(() => Object.entries(_($)).filter(([w, g]) => String(g || "").trim() !== "").map(([w, g]) => ({ key: w, value: g }))), xg = q(() => ks.value.filter(({ key: w, value: g }) => w !== "q" && !(w === "sort" && g === "title"))), Ss = q(() => y.homeRows || { continueReading: [], recentlyAdded: [] }), rf = q(() => y.homeShelves || []), lf = q(() => y.shelfTree || []), Du = q(() => y.needsAttention || { count: 0, url: `${rt.value}?needsMetadata=1` }), na = /* @__PURE__ */ j([]), Cs = q(() => new Set(na.value));
    function sf(w, g) {
      const h = new Set(na.value);
      g ? h.add(Number(w)) : h.delete(Number(w)), na.value = [...h];
    }
    function Ng(w) {
      na.value = w.currentTarget.checked ? C.value.map((g) => Number(g.id)) : [];
    }
    function Og() {
      const w = new Set(C.value.map((g) => Number(g.id)));
      na.value = na.value.filter((g) => w.has(g));
    }
    function Rg(w) {
      const g = w.target;
      if (g instanceof HTMLFormElement) {
        g.querySelectorAll("input[data-library-selected-id]").forEach((h) => h.remove());
        for (const h of na.value) {
          const z = document.createElement("input");
          z.type = "hidden", z.name = "itemIds[]", z.value = String(h), z.dataset.librarySelectedId = "1", g.appendChild(z);
        }
      }
    }
    const Ce = /* @__PURE__ */ j(null), Dn = /* @__PURE__ */ j(null), ra = /* @__PURE__ */ Lt({ loading: !1, error: "", missing: !1 }), Fn = /* @__PURE__ */ j("overview"), ja = /* @__PURE__ */ Lt({ saving: !1, saved: !1, error: "" }), mt = /* @__PURE__ */ Lt({ title: "", publicationDate: "", series: "", seriesNumber: "", genre: "", identifiers: [] }), of = /* @__PURE__ */ j(null), Mn = /* @__PURE__ */ j(null), Un = /* @__PURE__ */ j(!1);
    let Fu = null, wi = null, Ts = null, Mu = !1, qr = null, Uu = 0;
    const rn = q(() => Dn.value !== null), Gr = q(() => Ce.value ? C.value.findIndex((w) => w.id === Ce.value.id) : -1), As = q(() => Gr.value > 0 ? C.value[Gr.value - 1] : null), Es = q(() => Gr.value >= 0 && Gr.value < C.value.length - 1 ? C.value[Gr.value + 1] : null), uf = q(() => Mg(Ce.value?.description || "")), zn = q(() => Pg(Ce.value?.publicationDate || "")), cf = q(() => Dg(Ce.value?.language || "")), Ig = ["publicationType", "title", "subtitle", "creators", "publication", "series", "seriesNumber", "genre", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Lg = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Kr(w) {
      const g = String(w ?? "").trim(), h = g.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return h ? h[1] : g;
    }
    function Pg(w) {
      const h = Kr(w).match(/^(\d{4})/u);
      return h ? h[1] : "";
    }
    function Dg(w) {
      return String(w ?? "").split(/[;,\n]+/u).map((g) => g.trim()).filter(Boolean);
    }
    function df(w, g) {
      const h = new URLSearchParams();
      for (const [z, he] of Object.entries($)) {
        const Ee = String(he || "").trim();
        Ee !== "" && !(z === "sort" && Ee === "title") && !(z === "view" && Ee === "compact") && h.set(z, Ee);
      }
      return h.set(w, String(g || "").trim()), h.delete("page"), c(h);
    }
    function $s(w, g) {
      const z = df(w, g).toString();
      return `${rt.value}${z ? `?${z}` : ""}`;
    }
    function xs(w, g, h) {
      const z = String(h || "").trim();
      if (z === "") return;
      w?.preventDefault?.();
      const he = df(g, z);
      Yr({ historyMode: "none" }), Yt(null, {
        params: he,
        generation: ++la,
        historyMode: "push"
      });
    }
    function Fg(w) {
      return String(w ?? "").replace(/&#x([0-9a-f]+);/giu, (g, h) => String.fromCodePoint(Number.parseInt(h, 16))).replace(/&#(\d+);/gu, (g, h) => String.fromCodePoint(Number.parseInt(h, 10))).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#039;", "'").replaceAll("&apos;", "'").replaceAll("&nbsp;", " ").replaceAll("&amp;", "&");
    }
    function Mg(w) {
      let g = String(w ?? "").trim();
      if (g === "") return "";
      for (let h = 0; h < 2; h += 1) {
        const z = Fg(g);
        if (z === g) break;
        g = z;
      }
      return g = g.replace(/<\s*(script|style)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/giu, "").replace(/<\s*(br|hr)\b[^>]*\/?>/giu, `
`).replace(/<\s*\/\s*(p|div|section|article|blockquote|li|tr|h[1-6])\s*>/giu, `

`).replace(/<\s*(p|div|section|article|blockquote|ul|ol|li|table|tbody|thead|tr|td|th|h[1-6])\b[^>]*>/giu, "").replace(/<[^>]+>/gu, "").replace(/\u00a0/gu, " ").replace(/[^\S\r\n]+/gu, " ").replace(/[ \t]*\n[ \t]*/gu, `
`).replace(/\n{3,}/gu, `

`).trim(), g;
    }
    function ff(w) {
      return { ...w, publicationDate: Kr(w?.publicationDate) };
    }
    function hf(w) {
      for (const g of ["series", "seriesNumber", "genre"]) mt[g] = String(w?.[g] || "");
      mt.title = String(w?.title || ""), mt.publicationDate = Kr(w?.publicationDate), mt.identifiers = Array.isArray(w?.identifiers) ? w.identifiers.map((g) => ({ scheme: String(g?.scheme || ""), displayValue: String(g?.displayValue || g?.value || "") })) : [], Object.assign(ja, { saving: !1, saved: !1, error: "" });
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
      const g = new FormData();
      g.set("requesttoken", ht.value), g.set("metadataAutosave", "1");
      for (const h of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const z = w[h];
        g.set(h, Array.isArray(z) ? z.join(", ") : String(z ?? ""));
      }
      for (const h of ["series", "seriesNumber", "genre"]) g.set(h, mt[h]);
      g.set("title", mt.title), g.set("publicationDate", Kr(mt.publicationDate)), mt.identifiers.forEach((h, z) => {
        g.set(`identifiers[${z}][scheme]`, h.scheme), g.set(`identifiers[${z}][displayValue]`, h.displayValue);
      });
      try {
        const h = await fetch(w.updateUrl, { method: "POST", body: g, credentials: "same-origin", headers: { Accept: "application/json" } }), z = await h.json().catch(() => ({}));
        if (!h.ok || z.saved !== !0) throw new Error(z.error || t("library", "Metadata could not be saved."));
        for (const Ee of ["series", "seriesNumber", "genre"]) w[Ee] = mt[Ee].trim();
        w.title = mt.title.trim(), w.publicationDate = Kr(mt.publicationDate), w.identifiers = mt.identifiers.filter((Ee) => Ee.scheme.trim() || Ee.displayValue.trim()).map((Ee) => ({ ...Ee }));
        const he = C.value.find((Ee) => Number(Ee.id) === Number(w.id));
        he && (he.title = w.title, he.publicationDate = w.publicationDate), ja.saved = !0;
      } catch (h) {
        ja.error = h?.message || t("library", "Metadata could not be saved.");
      } finally {
        ja.saving = !1;
      }
    }
    const ln = q(() => {
      const w = s("scannerConflicts", $.scannerConflicts) || s("weakMetadata", $.weakMetadata), g = w ? C.value.find((h) => Ns(h).length > 0) : null;
      return {
        enabled: w,
        item: g,
        fields: g ? Ns(g) : [],
        reviewNextUrl: In.value,
        skipUrl: te.value.nextUrl || In.value
      };
    }), Bg = q(() => n.map((w) => ({
      ...w,
      label: t("library", w.label),
      href: `${rt.value}?${encodeURIComponent(w.key)}=${encodeURIComponent(w.value)}`,
      active: String($[w.key] || "") === w.value
    })));
    function zu(w) {
      return Array.isArray(w) ? JSON.stringify(w) : w == null ? "" : String(w);
    }
    function Ns(w) {
      const g = w.fieldValues || {};
      let h = [];
      try {
        h = JSON.parse(g.rejectedFields || "[]");
      } catch {
      }
      Array.isArray(h) || (h = []);
      const z = w.fieldSources || {};
      return Ig.filter((he) => Object.prototype.hasOwnProperty.call(g, he)).map((he) => {
        const Ee = zu(w[he]), je = zu(g[he]), Qe = zu(z[he] || w.metadataSource || "scanner"), _a = Qe.includes("filename") || Qe.includes("path") ? je : "", ei = Qe.includes("sidecar") ? je : "";
        return { field: he, currentValue: Ee, scannerCandidate: je, pathTemplateCandidate: _a, sidecarValue: ei, sourceProvenance: Qe, rejected: h.includes(he), differs: Ee !== je };
      }).filter((he) => he.differs);
    }
    let jn = 0, Bn = null;
    function pf() {
      const w = new URLSearchParams(window.location.search).getAll("item");
      if (w.length !== 1 || !/^[1-9][0-9]*$/.test(w[0])) return null;
      const g = Number(w[0]);
      return Number.isSafeInteger(g) && g <= hU ? g : null;
    }
    function vf(w, g = "push") {
      const h = new URL(window.location.href);
      h.searchParams.delete("item"), w !== null && h.searchParams.set("item", String(w)), history[`${g}State`]({}, "", `${h.pathname}${h.search}${h.hash}`);
    }
    async function Wr(w, { historyMode: g = "push", seed: h = null } = {}) {
      Bn?.abort();
      const z = ++jn, he = new AbortController();
      Bn = he, Dn.value = w, Fn.value = "overview", Ce.value = h && Number(h.id) === w ? ff(h) : null, Ce.value && hf(Ce.value), Object.assign(ra, { loading: !0, error: "", missing: !1 }), g !== "none" && vf(w, g);
      try {
        const Ee = Ou.value.replace("__ITEM_ID__", encodeURIComponent(String(w))), je = await fetch(Ee, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: he.signal });
        if (z !== jn) return;
        if (!je.ok) {
          Ce.value = null, ra.missing = je.status === 404, ra.error = je.status === 404 ? t("library", "This publication is unavailable or you do not have access.") : t("library", "Could not load publication details. Try again.");
          return;
        }
        const Qe = await je.json();
        if (z !== jn) return;
        if (typeof Qe?.item?.id != "number" || !Number.isSafeInteger(Qe.item.id) || Qe.item.id !== w) {
          Ce.value = null, ra.missing = !1, ra.error = t("library", "Could not load publication details. Try again.");
          return;
        }
        Ce.value = ff(Qe.item), hf(Ce.value), await Pt();
      } catch (Ee) {
        z === jn && Ee?.name !== "AbortError" && (Ce.value = null, ra.missing = !1, ra.error = t("library", "Could not load publication details. Try again."));
      } finally {
        z === jn && (ra.loading = !1, Bn = null);
      }
    }
    function Ba(w, g) {
      ju(), Fu = g?.currentTarget instanceof HTMLElement ? g.currentTarget : null, Wr(Number(w.id), { seed: w });
    }
    function Yr({ historyMode: w = "push", restoreFocus: g = !0 } = {}) {
      Ts = g ? Fu : null, Fu = null, Bn?.abort(), Bn = null, jn += 1, Dn.value = null, Ce.value = null, Fn.value = "overview", Object.assign(ra, { loading: !1, error: "", missing: !1 }), w !== "none" && vf(null, w);
    }
    function bf() {
      Un.value ? (Mn.value?.$refs?.sidebar || Mn.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : of.value?.focus();
    }
    function Hg() {
      const w = Ts;
      if (Ts = null, ju(), Mu || !w?.isConnected) return;
      const g = Uu;
      qr = window.requestAnimationFrame(() => {
        qr = null, !(g !== Uu || Mu || rn.value || !w.isConnected) && w.focus();
      });
    }
    function ju() {
      Uu += 1, qr !== null && (window.cancelAnimationFrame(qr), qr = null);
    }
    function Zr(w = wi) {
      Un.value = !!w?.matches, rn.value && Pt(bf);
    }
    function Os(w) {
      w && Wr(Number(w.id), { seed: w });
    }
    const Xr = /* @__PURE__ */ j(null);
    let la = 0, br = null, gr = null, Jr = null, gf = !1, Qr = null;
    const Mt = /* @__PURE__ */ Lt({ loading: !1, error: "", completed: !1 });
    function Vg(w) {
      const g = c(new FormData(w));
      g.delete("publicationSearch"), g.delete("creatorSearch"), g.delete("subjectSearch"), g.delete("publisherSearch"), g.delete("classificationSearch"), g.delete("tagSearch"), g.delete("folderSearch"), g.delete("yearSearch");
      for (const h of Array.from(g.keys()))
        String(g.get(h) || "").trim() === "" && g.delete(h);
      return g.delete("page"), g.get("view") === "compact" && g.delete("view"), g.get("sort") === "title" && g.delete("sort"), g;
    }
    async function Hn(w, g, h) {
      const z = new URLSearchParams();
      for (const [je, Qe] of Object.entries($)) {
        const _a = String(Qe || "").trim();
        je !== w && _a !== "" && !(je === "sort" && _a === "title") && !(je === "view" && _a === "compact") && z.set(je, _a);
      }
      z.set(`${w}Search`, g);
      const he = new AbortController();
      w === "creator" ? ge = he : w === "publisher" ? Re = he : w === "subject" ? xe = he : w === "classification" ? it = he : w === "tag" ? Rt = he : w === "folder" ? O = he : Ta = he;
      const Ee = w === "creator" ? zr.value : w === "publisher" ? jr.value : w === "subject" ? Br.value : w === "classification" ? $u.value : w === "tag" ? ps.value : w === "folder" ? xu.value : Nu.value;
      try {
        const je = await fetch(`${Ee}?${z}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: he.signal });
        if (!je.ok) throw new Error(`${w} suggestions request failed: ${je.status}`);
        const Qe = await je.json(), _a = w === "creator" ? De : w === "publisher" ? $e : w === "subject" ? we : w === "classification" ? dt : w === "tag" ? Ma : w === "folder" ? N : Za, ei = w === "creator" ? Ue.value : w === "publisher" ? ae.value : w === "subject" ? X.value : w === "classification" ? Ae.value : w === "tag" ? _t.value : w === "folder" ? nt.value : Gt.value;
        h === _a && ei.trim() === g && (w === "creator" ? ct.value = Array.isArray(Qe.creators) ? Qe.creators : [] : w === "publisher" ? U.value = Array.isArray(Qe.publishers) ? Qe.publishers : [] : w === "subject" ? de.value = Array.isArray(Qe.subjects) ? Qe.subjects : [] : w === "classification" ? Ve.value = Array.isArray(Qe.classifications) ? Qe.classifications : [] : w === "tag" ? ia.value = Array.isArray(Qe.tags) ? Qe.tags : [] : w === "folder" ? A.value = Array.isArray(Qe.folders) ? Qe.folders : [] : $n.value = Array.isArray(Qe.years) ? Qe.years : []);
      } catch (je) {
        je?.name !== "AbortError" && (w === "creator" && h === De && (ct.value = null), w === "publisher" && h === $e && (U.value = null), w === "subject" && h === we && (de.value = null), w === "classification" && h === dt && (Ve.value = null), w === "tag" && h === Ma && (ia.value = null), w === "folder" && h === N && (A.value = null), w === "year" && h === Za && ($n.value = null));
      }
    }
    function qg(w, g) {
      return Hn("creator", w, g);
    }
    function Gg(w, g) {
      return Hn("publisher", w, g);
    }
    function Kg(w, g) {
      return Hn("subject", w, g);
    }
    function Wg(w, g) {
      return Hn("classification", w, g);
    }
    function Yg(w, g) {
      return Hn("tag", w, g);
    }
    function Zg(w, g) {
      return Hn("folder", w, g);
    }
    function Xg(w, g) {
      return Hn("year", w, g);
    }
    async function Jg(w, g) {
      const h = new URLSearchParams();
      for (const [he, Ee] of Object.entries($)) {
        const je = String(Ee || "").trim();
        he !== "publication" && je !== "" && !(he === "sort" && je === "title") && !(he === "view" && je === "compact") && h.set(he, je);
      }
      h.set("publicationSearch", w);
      const z = new AbortController();
      D = z;
      try {
        const he = await fetch(`${hs.value}?${h}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: z.signal
        });
        if (!he.ok) throw new Error(`Publication suggestions request failed: ${he.status}`);
        const Ee = await he.json();
        g === Y && G.value.trim() === w && (re.value = Array.isArray(Ee.publications) ? Ee.publications : []);
      } catch (he) {
        he?.name !== "AbortError" && g === Y && (re.value = null);
      } finally {
        g === Y && (D = null);
      }
    }
    function Qg(w) {
      k.splice(0, k.length, ...(w.items || []).map((h) => ({ ...h }))), Og();
      const g = new Set(w.facetsDeferred ? [
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
        !g.has(h) && Object.prototype.hasOwnProperty.call(w, h) && (y[h] = w[h]);
      Object.assign($, Xa, w.activeFilters || {}), $.view = m($.view);
    }
    async function em() {
      if (y.surface !== "index") return;
      const w = la, g = JSON.stringify({ ...$ }), h = new URLSearchParams();
      h.set("hydrate", "1");
      for (const [he, Ee] of Object.entries($)) {
        const je = String(Ee || "").trim();
        je !== "" && !(he === "sort" && je === "title") && !(he === "view" && je === "compact") && h.set(he, je);
      }
      const z = new AbortController();
      gr = z;
      try {
        const he = await fetch(`${Rn.value}${h.size ? `?${h}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: z.signal
        });
        if (!he.ok) return;
        const Ee = await he.json();
        if (w !== la || g !== JSON.stringify({ ...$ })) return;
        for (const je of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(Ee, je) && (y[je] = Ee[je]);
      } catch (he) {
        if (he?.name !== "AbortError") return;
      } finally {
        gr === z && (gr = null), z.signal.aborted || mf();
      }
    }
    async function mf() {
      if (!Zi.value || gf || Jr) return;
      const w = new AbortController();
      Jr = w;
      try {
        const g = await fetch(`${Rn.value}?hydrate=counts`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: w.signal });
        if (!g.ok || w.signal.aborted) return;
        const h = await g.json();
        h.smartViewCounts && (y.smartViewCounts = h.smartViewCounts), h.smartViewCountsPending && (y.smartViewCountsPending = h.smartViewCountsPending), gf = !0;
      } catch {
      } finally {
        Jr === w && (Jr = null);
      }
    }
    function tm() {
      gr?.abort(), gr = null;
    }
    async function Yt(w, g = null) {
      const h = w?.currentTarget?.tagName === "FORM" ? w.currentTarget : w?.currentTarget?.form;
      if (!h && !g?.params) return;
      const z = c(g?.params ?? Vg(h));
      if (Nn.value || Xi.value) {
        el(z, rt.value);
        return;
      }
      const he = z.toString(), Ee = he ? `?${he}` : "", je = g?.generation ?? ++la, Qe = f(z), _a = g?.historyMode ?? (Qe ? "push" : "replace"), ei = g?.historyTraversal === !0;
      if (je !== la) return;
      tm(), g === null && br?.abort();
      const mr = new AbortController();
      br = mr, Mt.loading = !0, Mt.error = "", Mt.completed = !1;
      try {
        const ti = await fetch(Rn.value + Ee, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: mr.signal
        });
        if (je !== la) return;
        if (!ti.ok) {
          ei ? el(z) : Qe ? Mt.error = t("library", "Could not load this review queue. Try again.") : el(z);
          return;
        }
        const wm = await ti.json();
        if (je !== la) return;
        Qg(wm), mf(), Mt.completed = !0, _a !== "none" && (history[_a === "push" ? "pushState" : "replaceState"]({}, "", he ? `?${he}` : window.location.pathname), rn.value && Yr({ historyMode: "none" }));
      } catch (ti) {
        je === la && ti?.name !== "AbortError" && (ei ? el(z) : Qe ? Mt.error = t("library", "Could not load this review queue. Try again.") : el(z));
      } finally {
        je === la && (br = null, Mt.loading = !1);
      }
    }
    function yf() {
      br?.abort();
      const w = new URLSearchParams(window.location.search), g = pf();
      w.has("item") && g === null && (w.delete("item"), history.replaceState({}, "", `${window.location.pathname}${w.toString() ? `?${w}` : ""}${window.location.hash}`)), g === null ? Yr({ historyMode: "none" }) : Wr(g, { historyMode: "none", seed: C.value.find((h) => Number(h.id) === g) || null }), w.delete("item"), Yt(null, {
        params: c(w),
        generation: ++la,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function el(w, g = window.location.pathname) {
      const h = document.createElement("form");
      h.method = "get", h.action = g, h.hidden = !0;
      for (const [z, he] of w.entries()) {
        const Ee = document.createElement("input");
        Ee.type = "hidden", Ee.name = z, Ee.value = he, h.appendChild(Ee);
      }
      document.body.appendChild(h), h.submit(), h.remove();
    }
    function ya(w, g = null, h = null) {
      if (g === null) {
        Yt(w);
        return;
      }
      Yt({ currentTarget: w }, { params: g, generation: h });
    }
    async function am(w, g = G.value) {
      $.publication = String(g || "").trim(), G.value = $.publication, ee.value = !1, await Pt(), Yt({ currentTarget: w });
    }
    function _f(w, g) {
      am(g.currentTarget.form, w);
    }
    async function im(w) {
      $.q = String(Z.value || "").trim(), $.publication = String(G.value || "").trim(), $.publisher = String(ae.value || "").trim(), $.creator = String(Ue.value || "").trim(), $.subject = String(X.value || "").trim(), $.folder = String(nt.value || "").trim(), $.year = String(Gt.value || "").trim(), ee.value = !1, J.value = !1, Ze.value = !1, ne.value = !1, ie.value = !1, va.value = !1, await Pt(), Yt({ currentTarget: w });
    }
    async function sn(w, g, h) {
      $[g] = String(h || "").trim(), g === "creator" ? (Ue.value = $.creator, Ze.value = !1) : g === "publisher" ? (ae.value = $.publisher, J.value = !1) : g === "subject" ? (X.value = $.subject, ne.value = !1) : g === "folder" ? (nt.value = $.folder, ie.value = !1) : g === "classification" ? (Ae.value = $.classification, Ne.value = !1) : g === "tag" ? (_t.value = $.tag, gt.value = !1) : (Gt.value = $.year, va.value = !1), ki[g] = -1, await Pt(), Yt({ currentTarget: w });
    }
    function wf(w) {
      im(w.currentTarget);
    }
    function kf(w, g) {
      sn(g.currentTarget.form, "creator", w);
    }
    function Sf(w, g) {
      sn(g.currentTarget.form, "publisher", w);
    }
    function Cf(w, g) {
      sn(g.currentTarget.form, "classification", w);
    }
    function Tf(w, g) {
      sn(g.currentTarget.form, "tag", w);
    }
    function Af(w, g) {
      sn(g.currentTarget.form, "folder", w);
    }
    function Ef(w, g = X.value) {
      window.clearTimeout(fe), xe?.abort(), xe = null, sn(w, "subject", g);
    }
    function nm(w) {
      Ef(w.currentTarget.form);
    }
    function $f(w, g) {
      Ef(g.currentTarget.form, w);
    }
    function xf(w, g) {
      sn(g.currentTarget.form, "year", w);
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
      return H.value;
    }
    function Bu(w, g, h) {
      return `library-${w}-${g}-suggestion-${h}`;
    }
    function Nf(w, g) {
      const h = ki[g];
      return h >= 0 ? Bu(w, g, h) : void 0;
    }
    function Hu(w, g) {
      J.value = g, g || (ki[w] = -1);
    }
    function Of(w) {
      ki[w] = -1, Hu(w, !0);
    }
    function lm(w, g, h) {
      sn(h, w, g);
    }
    function Rf(w, g) {
      const h = rm();
      if (w.key === "Escape") {
        Hu(g, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(w.key) || h.length === 0) return;
      if (w.key === "Enter") {
        const Ee = ki[g];
        if (Ee < 0) return;
        w.preventDefault(), lm(g, h[Ee], w.currentTarget.form);
        return;
      }
      w.preventDefault(), Hu(g, !0);
      const z = ki[g], he = w.key === "ArrowDown" ? 1 : -1;
      ki[g] = z < 0 ? he > 0 ? 0 : h.length - 1 : (z + he + h.length) % h.length;
    }
    function If(w) {
      const g = new URLSearchParams();
      for (const [h, z] of Object.entries($)) {
        const he = String(z || "").trim();
        he !== "" && h !== w && !(h === "sort" && he === "title") && !(h === "view" && he === "compact") && g.set(h, he);
      }
      return g;
    }
    function tl(w) {
      const g = If(w).toString();
      return `${rt.value}${g ? `?${g}` : ""}`;
    }
    function al(w) {
      const g = If(w);
      $[w] = w === "sort" ? "title" : w === "view" ? "compact" : "", Yt(null, {
        params: g,
        generation: ++la
      });
    }
    function Lf() {
      const w = new URLSearchParams();
      return $.sort && $.sort !== "title" && w.set("sort", $.sort), $.view && $.view !== "compact" && w.set("view", $.view), w;
    }
    function Rs() {
      const w = Lf().toString();
      return `${rt.value}${w ? `?${w}` : ""}`;
    }
    function Is() {
      const w = Lf();
      for (const g of Object.keys($))
        ["sort", "view"].includes(g) || ($[g] = Xa[g]);
      Yt(null, {
        params: w,
        generation: ++la
      }), !Nn.value && !Xi.value && Pt(() => {
        Vr.value?.focus?.();
      });
    }
    function sm(w) {
      const g = new URL(w.href, window.location.origin).searchParams;
      Yt(null, {
        params: g,
        generation: ++la
      });
    }
    function om() {
      return tl("q");
    }
    const Vu = q(() => y.smartViewCounts || {}), um = q(() => new Set(y.smartViewCountsPending || []));
    function cm(w) {
      return um.value.has(w) || !Object.prototype.hasOwnProperty.call(Vu.value, w) ? "—" : Number(Vu.value[w] || 0);
    }
    const Pf = q(() => {
      const w = {};
      for (const [g, h] of Object.entries($)) {
        const z = String(h || "").trim();
        z !== "" && !(g === "sort" && z === "title") && (w[g] = z);
      }
      return w;
    }), dm = q(() => JSON.stringify(Pf.value)), qu = q(() => Object.keys(Pf.value).length > 0);
    function Df(w) {
      if (!ue.includes(w)) return;
      $.view = w;
      const g = new URLSearchParams();
      for (const [h, z] of Object.entries(_($))) {
        const he = String(z || "").trim();
        he !== "" && !(h === "sort" && he === "title") && !(h === "view" && he === "compact") && g.set(h, he);
      }
      g.delete("page"), Yt(null, {
        params: g,
        generation: ++la
      });
    }
    function fm(w) {
      const g = c(window.location.search);
      for (const z of Object.keys(ys))
        g.delete(z);
      g.delete("page");
      for (const [z, he] of Object.entries(w)) {
        const Ee = z === "view" ? m(he) : String(he || "").trim();
        Ee !== "" && !(z === "view" && Ee === "compact") && g.set(z, Ee);
      }
      const h = g.toString();
      return h ? `?${h}` : "?";
    }
    function hm(w) {
      return fm(w || {});
    }
    function pm(w) {
      const h = Object.entries(w && typeof w == "object" ? w : {}).filter(([, z]) => String(z ?? "").trim() !== "");
      return h.length === 0 ? !1 : h.every(([z, he]) => String($[z] ?? "") === String(he ?? ""));
    }
    function vm(w) {
      return B.value.replace("__COLLECTION_ID__", encodeURIComponent(String(w || "0")));
    }
    function bm(w) {
      if (!ht.value) return;
      const g = document.createElement("form");
      g.method = "post", g.action = vm(w), g.className = "library-navigation-saved-collection-delete-form";
      const h = document.createElement("input");
      h.type = "hidden", h.name = "requesttoken", h.value = ht.value, g.appendChild(h), document.body.appendChild(g), g.submit();
    }
    function Ls(w) {
      return String(w || "").toUpperCase();
    }
    function gm(w) {
      return y.creatorLandingUrls?.[w] || `/apps/library/creators/${encodeURIComponent(w)}`;
    }
    function Ff(w) {
      const g = String(w?.publication || "").trim(), h = String(w?.publicationDate || "").trim();
      return g && h ? `${g} · ${h}` : g || h;
    }
    function Mf(w) {
      const g = String(w?.tagName || "").toLowerCase();
      return w?.isContentEditable || ["input", "select", "textarea", "button"].includes(g);
    }
    function mm(w) {
      w.key !== "/" || w.metaKey || w.ctrlKey || w.altKey || w.shiftKey || Mf(w.target) || (w.preventDefault(), Xr.value?.focus(), Xr.value?.select?.());
    }
    async function ym(w) {
      w.key !== "Escape" || document.activeElement !== Xr.value || $.q === "" || (w.preventDefault(), Z.value = "", $.q = "", await Pt(), ya({ currentTarget: Xr.value }));
    }
    function _m(w) {
      if (!rn.value || w.metaKey || w.ctrlKey || w.altKey)
        return !1;
      if (w.key === "Escape")
        return w.preventDefault(), Yr(), !0;
      if (w.key === "Tab" && Un.value) {
        if (Mn.value?.focusTrap) return !1;
        const g = Mn.value?.$refs?.sidebar || Mn.value?.$el || Mn.value, h = [...g?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Ee) => !Ee.hidden && Ee.getAttribute("aria-hidden") !== "true");
        if (h.length === 0) return !1;
        const z = h[0], he = h[h.length - 1];
        if (w.shiftKey && (document.activeElement === z || !g.contains(document.activeElement)))
          return w.preventDefault(), he.focus(), !0;
        if (!w.shiftKey && (document.activeElement === he || !g.contains(document.activeElement)))
          return w.preventDefault(), z.focus(), !0;
      }
      return Mf(w.target) ? !1 : w.key === "ArrowLeft" && As.value ? (w.preventDefault(), Os(As.value), !0) : w.key === "ArrowRight" && Es.value ? (w.preventDefault(), Os(Es.value), !0) : !1;
    }
    function Uf(w) {
      document.querySelector("dialog[open]") || _m(w) || (mm(w), ym(w));
    }
    Tt(() => {
      if (bi.value || On.value || Ua.value || Ji.value || vi.value) return;
      window.addEventListener("keydown", Uf), window.addEventListener("popstate", yf), wi = window.matchMedia?.("(max-width: 1023px)") || null, Zr(), wi?.addEventListener ? wi.addEventListener("change", Zr) : wi?.addListener?.(Zr);
      const w = new URLSearchParams(window.location.search), g = pf();
      w.has("item") && g === null ? (w.delete("item"), history.replaceState({}, "", `${window.location.pathname}${w.toString() ? `?${w}` : ""}${window.location.hash}`)) : g !== null && Wr(g, { historyMode: "none", seed: C.value.find((h) => Number(h.id) === g) || null }), Qr = window.requestAnimationFrame(() => {
        Qr = null, em();
      });
    }), Ca(() => {
      Mu = !0, ju(), window.removeEventListener("keydown", Uf), window.removeEventListener("popstate", yf), window.clearTimeout(K), window.clearTimeout(Oe), window.clearTimeout(fe), window.clearTimeout(xn), D?.abort(), ge?.abort(), xe?.abort(), Ta?.abort(), la += 1, Qr !== null && window.cancelAnimationFrame(Qr), Qr = null, gr?.abort(), Jr?.abort(), br?.abort(), br = null, jn += 1, Bn?.abort(), Bn = null, wi?.removeEventListener ? wi.removeEventListener("change", Zr) : wi?.removeListener?.(Zr), wi = null, Ts = null;
    });
    const il = /* @__PURE__ */ Lt({}), nl = /* @__PURE__ */ Lt({});
    async function zf(w, g) {
      const h = g?.currentTarget?.closest?.("form") || g?.currentTarget;
      if (!h || !w?.starUrl || il[w.id]) return;
      const z = !!w.starred;
      il[w.id] = !0, nl[w.id] = "", w.starred = !z;
      try {
        (await fetch(w.starUrl, {
          method: "POST",
          body: new FormData(h),
          credentials: "same-origin"
        })).ok || (w.starred = z, nl[w.id] = t("library", "Could not update star. Try again."));
      } catch {
        w.starred = z, nl[w.id] = t("library", "Could not update star. Try again.");
      } finally {
        il[w.id] = !1;
      }
    }
    return (w, g) => (d(), Pe(u(cT), { "app-name": "library" }, {
      default: ke(() => [
        ce(u(qw), {
          "aria-label": u(t)("library", "Library navigation")
        }, {
          list: ke(() => [
            ce(u(Lb), null, {
              default: ke(() => [
                (d(!0), p(W, null, oe(Mr.value, (h) => (d(), Pe(u(ii), {
                  key: h.key,
                  active: h.active,
                  href: h.href,
                  name: h.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                (d(!0), p(W, null, oe(fs.value, (h) => (d(), p("div", {
                  key: h.key,
                  class: "library-navigation-saved-collection-row"
                }, [
                  ce(u(ii), {
                    class: "library-navigation-saved-collection",
                    active: h.active,
                    href: h.href,
                    name: h.name
                  }, null, 8, ["active", "href", "name"]),
                  r("button", {
                    type: "button",
                    class: "library-navigation-saved-collection-delete-action",
                    style: { background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.42)", color: "#fff" },
                    "aria-label": `${u(t)("library", "Delete collection")}: ${h.rawName}`,
                    title: `${u(t)("library", "Delete collection")}: ${h.rawName}`,
                    onClick: Se((z) => bm(h.id), ["stop", "prevent"])
                  }, "✕", 8, JR)
                ]))), 128)),
                ce(u(ii), {
                  active: bi.value,
                  href: `${rt.value}?authors=1`,
                  name: u(t)("library", "Authors")
                }, null, 8, ["active", "href", "name"]),
                ce(u(ii), {
                  active: On.value,
                  href: `${rt.value}?series=1`,
                  name: u(t)("library", "Series")
                }, null, 8, ["active", "href", "name"]),
                ce(u(ii), {
                  active: Ua.value,
                  href: Qi.value,
                  name: u(t)("library", "Lists")
                }, null, 8, ["active", "href", "name"]),
                ce(u(ii), {
                  class: "library-navigation-create-list",
                  href: `${Qi.value}&new=1`,
                  name: u(t)("library", "Create a new list")
                }, null, 8, ["href", "name"]),
                (d(!0), p(W, null, oe(wt.value, (h) => (d(), Pe(u(ii), {
                  key: `personal-list-${h.id}`,
                  class: "library-navigation-personal-list",
                  href: `${Qi.value}&listId=${h.id}`,
                  name: h.name
                }, null, 8, ["href", "name"]))), 128)),
                ce(u(ii), {
                  active: Ji.value,
                  href: `${rt.value}?infer=1`,
                  name: u(t)("library", "Extract metadata")
                }, null, 8, ["active", "href", "name"]),
                ce(u(ii), {
                  active: Zi.value,
                  href: pi.value,
                  name: cr.value > 0 ? `${u(t)("library", "Review")} (${cr.value})` : u(t)("library", "Review")
                }, null, 8, ["active", "href", "name"]),
                ce(u(ii), {
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
            !bi.value && !On.value && !Ua.value && !Ji.value && !vi.value ? (d(), p("section", QR, [
              r("h2", eI, o(u(t)("library", "Filters")), 1),
              r("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": u(t)("library", "Catalogue search and filters"),
                onSubmit: Se(wf, ["prevent"])
              }, [
                r("input", {
                  type: "hidden",
                  name: "folder",
                  value: $.folder
                }, null, 8, aI),
                (d(!0), p(W, null, oe(nf.value, (h) => (d(), p("input", {
                  key: `sidebar-${h.key}`,
                  type: "hidden",
                  name: h.key,
                  value: h.value
                }, null, 8, iI))), 128)),
                $.sort && $.sort !== "title" ? (d(), p("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: $.sort
                }, null, 8, nI)) : T("", !0),
                $.view && $.view !== "compact" ? (d(), p("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: $.view
                }, null, 8, rI)) : T("", !0),
                r("fieldset", lI, [
                  r("legend", null, o(u(t)("library", "Content")), 1),
                  r("label", {
                    class: "library-quick-filter-search",
                    title: u(t)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                  }, [
                    r("span", null, [
                      Q(o(u(t)("library", "Search")) + " ", 1),
                      g[112] || (g[112] = r("kbd", { class: "library-keyboard-hint" }, "/", -1))
                    ]),
                    be(r("input", {
                      ref_key: "quickSearchInput",
                      ref: Xr,
                      "onUpdate:modelValue": g[0] || (g[0] = (h) => Z.value = h),
                      "data-library-quick-search": "",
                      type: "search",
                      name: "q",
                      placeholder: u(t)("library", "Title, creator, description, filename or folder")
                    }, null, 8, oI), [
                      [Me, Z.value]
                    ]),
                    ma("q") ? (d(), p("small", uI, o(za("q")), 1)) : T("", !0)
                  ], 8, sI),
                  r("label", null, [
                    Q(o(u(t)("library", "Type")), 1),
                    be(r("select", {
                      "onUpdate:modelValue": g[1] || (g[1] = (h) => $.type = h),
                      name: "type",
                      onChange: g[2] || (g[2] = (h) => ya(h))
                    }, [
                      r("option", cI, o(u(t)("library", "All types")), 1),
                      (d(!0), p(W, null, oe(F.value, (h) => (d(), p("option", {
                        key: h,
                        value: h
                      }, o(h), 9, dI))), 128))
                    ], 544), [
                      [tt, $.type]
                    ])
                  ]),
                  r("div", fI, [
                    r("label", hI, o(u(t)("library", "Publisher")), 1),
                    be(r("input", {
                      id: "library-publisher-search",
                      "onUpdate:modelValue": g[3] || (g[3] = (h) => ae.value = h),
                      type: "search",
                      name: "publisherSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search publishers"),
                      title: u(t)("library", "Exact publisher matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publisher-suggestions",
                      "aria-activedescendant": Nf("desktop", "publisher"),
                      "aria-expanded": J.value && H.value.length > 0 ? "true" : "false",
                      onFocus: g[4] || (g[4] = (h) => Of("publisher")),
                      onKeydown: g[5] || (g[5] = (h) => Rf(h, "publisher"))
                    }, null, 40, pI), [
                      [Me, ae.value]
                    ]),
                    r("input", {
                      type: "hidden",
                      name: "publisher",
                      value: $.publisher
                    }, null, 8, vI),
                    ma("publisher") ? (d(), p("small", bI, o(za("publisher")), 1)) : T("", !0),
                    J.value && H.value.length > 0 ? (d(), p("ul", gI, [
                      (d(!0), p(W, null, oe(H.value, (h, z) => (d(), p("li", {
                        id: Bu("desktop", "publisher", z),
                        key: h,
                        role: "option",
                        "aria-selected": ki.publisher === z ? "true" : "false"
                      }, [
                        r("button", {
                          type: "button",
                          class: "library-publisher-suggestion",
                          onMousedown: g[6] || (g[6] = Se(() => {
                          }, ["prevent"])),
                          onClick: (he) => Sf(h, he)
                        }, o(h), 41, yI)
                      ], 8, mI))), 128))
                    ])) : T("", !0),
                    r("button", {
                      type: "submit",
                      class: Te(["button secondary library-publisher-apply", _i("publisher")])
                    }, o(u(t)("library", "Apply publisher")), 3)
                  ]),
                  r("div", _I, [
                    r("label", wI, o(u(t)("library", "Series / periodical")), 1),
                    be(r("input", {
                      id: "library-publication-search",
                      "onUpdate:modelValue": g[7] || (g[7] = (h) => G.value = h),
                      type: "search",
                      name: "publicationSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search series and periodicals"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publication-suggestions",
                      "aria-expanded": ee.value && V.value.length > 0 ? "true" : "false",
                      onFocus: g[8] || (g[8] = (h) => ee.value = !0),
                      onKeydown: g[9] || (g[9] = ft((h) => ee.value = !1, ["escape"]))
                    }, null, 40, kI), [
                      [Me, G.value]
                    ]),
                    r("input", {
                      type: "hidden",
                      name: "publication",
                      value: $.publication
                    }, null, 8, SI),
                    ma("publication") ? (d(), p("small", CI, o(za("publication")), 1)) : T("", !0),
                    ee.value && V.value.length > 0 ? (d(), p("ul", TI, [
                      (d(!0), p(W, null, oe(V.value, (h) => (d(), p("li", {
                        key: h,
                        role: "option"
                      }, [
                        r("button", {
                          type: "button",
                          class: "library-publication-suggestion",
                          onMousedown: g[10] || (g[10] = Se(() => {
                          }, ["prevent"])),
                          onClick: (z) => _f(h, z)
                        }, o(h), 41, AI)
                      ]))), 128))
                    ])) : T("", !0),
                    r("button", {
                      type: "submit",
                      class: Te(["button secondary library-publication-apply", _i("publication")])
                    }, o(u(t)("library", "Apply series")), 3)
                  ]),
                  r("div", EI, [
                    r("label", $I, o(u(t)("library", "Publication year")), 1),
                    be(r("input", {
                      id: "library-year-search",
                      "onUpdate:modelValue": g[11] || (g[11] = (h) => Gt.value = h),
                      type: "search",
                      name: "yearSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search publication years"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-year-suggestions",
                      "aria-expanded": va.value && Ya.value.length > 0 ? "true" : "false",
                      onFocus: g[12] || (g[12] = (h) => va.value = !0),
                      onKeydown: g[13] || (g[13] = ft((h) => va.value = !1, ["escape"]))
                    }, null, 40, xI), [
                      [Me, Gt.value]
                    ]),
                    r("input", {
                      type: "hidden",
                      name: "year",
                      value: $.year
                    }, null, 8, NI),
                    ma("year") ? (d(), p("small", OI, o(za("year")), 1)) : T("", !0),
                    va.value && Ya.value.length > 0 ? (d(), p("ul", RI, [
                      (d(!0), p(W, null, oe(Ya.value, (h) => (d(), p("li", {
                        key: h,
                        role: "option"
                      }, [
                        r("button", {
                          type: "button",
                          class: "library-year-suggestion",
                          onMousedown: g[14] || (g[14] = Se(() => {
                          }, ["prevent"])),
                          onClick: (z) => xf(h, z)
                        }, o(h), 41, II)
                      ]))), 128))
                    ])) : T("", !0),
                    r("button", {
                      type: "submit",
                      class: Te(["button secondary library-year-apply", _i("year")])
                    }, o(u(t)("library", "Apply year")), 3)
                  ]),
                  r("div", LI, [
                    r("label", PI, o(u(t)("library", "Creator")), 1),
                    be(r("input", {
                      id: "library-creator-search",
                      "onUpdate:modelValue": g[15] || (g[15] = (h) => Ue.value = h),
                      type: "search",
                      name: "creatorSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search creators"),
                      title: u(t)("library", "Match an individual author; existing full-field filters remain usable"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-creator-suggestions",
                      "aria-expanded": Ze.value && _e.value.length > 0 ? "true" : "false",
                      onFocus: g[16] || (g[16] = (h) => Ze.value = !0),
                      onKeydown: g[17] || (g[17] = ft((h) => Ze.value = !1, ["escape"]))
                    }, null, 40, DI), [
                      [Me, Ue.value]
                    ]),
                    r("input", {
                      type: "hidden",
                      name: "creator",
                      value: $.creator
                    }, null, 8, FI),
                    ma("creator") ? (d(), p("small", MI, o(za("creator")), 1)) : T("", !0),
                    Ze.value && _e.value.length > 0 ? (d(), p("ul", UI, [
                      (d(!0), p(W, null, oe(_e.value, (h) => (d(), p("li", {
                        key: h,
                        role: "option"
                      }, [
                        r("button", {
                          type: "button",
                          class: "library-creator-suggestion",
                          onMousedown: g[18] || (g[18] = Se(() => {
                          }, ["prevent"])),
                          onClick: (z) => kf(h, z)
                        }, o(h), 41, zI)
                      ]))), 128))
                    ])) : T("", !0),
                    r("button", {
                      type: "submit",
                      class: Te(["button secondary library-creator-apply", _i("creator")])
                    }, o(u(t)("library", "Apply creator")), 3)
                  ]),
                  r("div", jI, [
                    r("label", BI, o(u(t)("library", "Nextcloud tag")), 1),
                    be(r("input", {
                      id: "library-tag-search",
                      "onUpdate:modelValue": g[19] || (g[19] = (h) => _t.value = h),
                      type: "search",
                      name: "tagSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search tags"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-tag-suggestions",
                      "aria-expanded": gt.value && pa.value.length > 0 ? "true" : "false",
                      onFocus: g[20] || (g[20] = (h) => gt.value = !0),
                      onKeydown: g[21] || (g[21] = ft((h) => gt.value = !1, ["escape"]))
                    }, null, 40, HI), [
                      [Me, _t.value]
                    ]),
                    r("input", {
                      type: "hidden",
                      name: "tag",
                      value: $.tag
                    }, null, 8, VI),
                    gt.value && pa.value.length > 0 ? (d(), p("ul", qI, [
                      (d(!0), p(W, null, oe(pa.value, (h) => (d(), p("li", {
                        key: h,
                        role: "option"
                      }, [
                        r("button", {
                          type: "button",
                          class: "library-tag-suggestion",
                          onMousedown: g[22] || (g[22] = Se(() => {
                          }, ["prevent"])),
                          onClick: (z) => Tf(h, z)
                        }, o(h), 41, GI)
                      ]))), 128))
                    ])) : T("", !0),
                    r("button", {
                      type: "submit",
                      class: Te(["button secondary library-tag-apply", _i("tag")])
                    }, o(u(t)("library", "Apply tag")), 3)
                  ]),
                  r("label", null, [
                    Q(o(u(t)("library", "Format")), 1),
                    be(r("select", {
                      "onUpdate:modelValue": g[23] || (g[23] = (h) => $.format = h),
                      name: "format",
                      onChange: g[24] || (g[24] = (h) => ya(h))
                    }, [
                      r("option", KI, o(u(t)("library", "All formats")), 1),
                      (d(!0), p(W, null, oe(x.value, (h) => (d(), p("option", {
                        key: h,
                        value: h
                      }, o(Ls(h)), 9, WI))), 128))
                    ], 544), [
                      [tt, $.format]
                    ])
                  ])
                ]),
                r("fieldset", YI, [
                  r("legend", null, o(u(t)("library", "Location")), 1),
                  r("label", null, [
                    Q(o(u(t)("library", "Shelf")), 1),
                    be(r("select", {
                      "onUpdate:modelValue": g[25] || (g[25] = (h) => $.shelf = h),
                      name: "shelf",
                      onChange: g[26] || (g[26] = (h) => ya(h))
                    }, [
                      r("option", ZI, o(u(t)("library", "All shelves")), 1),
                      (d(!0), p(W, null, oe(S.value, (h) => (d(), p("option", {
                        key: h,
                        value: h
                      }, o(h), 9, XI))), 128))
                    ], 544), [
                      [tt, $.shelf]
                    ])
                  ]),
                  r("div", JI, [
                    r("label", QI, o(u(t)("library", "Folder")), 1),
                    be(r("input", {
                      id: "library-folder-search",
                      "onUpdate:modelValue": g[27] || (g[27] = (h) => nt.value = h),
                      type: "search",
                      name: "folderSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Type at least 3 path characters"),
                      title: u(t)("library", "Select an exact folder path"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-folder-suggestions",
                      "aria-expanded": ie.value && R.value.length > 0 ? "true" : "false",
                      onFocus: g[28] || (g[28] = (h) => ie.value = !0),
                      onKeydown: g[29] || (g[29] = ft((h) => ie.value = !1, ["escape"]))
                    }, null, 40, eL), [
                      [Me, nt.value]
                    ]),
                    ie.value && R.value.length > 0 ? (d(), p("ul", tL, [
                      (d(!0), p(W, null, oe(R.value, (h) => (d(), p("li", {
                        key: h,
                        role: "option"
                      }, [
                        r("button", {
                          type: "button",
                          class: "library-folder-suggestion",
                          onMousedown: g[30] || (g[30] = Se(() => {
                          }, ["prevent"])),
                          onClick: (z) => Af(h, z)
                        }, o(h), 41, aL)
                      ]))), 128))
                    ])) : T("", !0),
                    r("button", {
                      type: "submit",
                      class: Te(["button secondary library-folder-apply", _i("folder")])
                    }, o(u(t)("library", "Apply folder")), 3)
                  ])
                ]),
                r("fieldset", iL, [
                  r("legend", null, o(u(t)("library", "Review")), 1),
                  r("label", null, [
                    Q(o(u(t)("library", "Scan status")), 1),
                    be(r("select", {
                      "onUpdate:modelValue": g[31] || (g[31] = (h) => $.status = h),
                      name: "status",
                      onChange: g[32] || (g[32] = (h) => ya(h))
                    }, [
                      r("option", nL, o(u(t)("library", "All scan statuses")), 1),
                      (d(!0), p(W, null, oe(L.value, (h) => (d(), p("option", {
                        key: h,
                        value: h
                      }, o(h), 9, rL))), 128))
                    ], 544), [
                      [tt, $.status]
                    ])
                  ]),
                  r("label", null, [
                    Q(o(u(t)("library", "Workflow status")), 1),
                    be(r("select", {
                      "onUpdate:modelValue": g[33] || (g[33] = (h) => $.workflowStatus = h),
                      name: "workflowStatus",
                      onChange: g[34] || (g[34] = (h) => ya(h))
                    }, [
                      r("option", lL, o(u(t)("library", "All workflow statuses")), 1),
                      (d(!0), p(W, null, oe(le.value, (h) => (d(), p("option", {
                        key: h,
                        value: h
                      }, o(h), 9, sL))), 128))
                    ], 544), [
                      [tt, $.workflowStatus]
                    ])
                  ]),
                  r("div", oL, [
                    r("label", uL, o(u(t)("library", "Subject")), 1),
                    be(r("input", {
                      id: "library-subject-search",
                      "onUpdate:modelValue": g[35] || (g[35] = (h) => X.value = h),
                      type: "search",
                      name: "subjectSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search subjects"),
                      title: u(t)("library", "Exact subject matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-subject-suggestions",
                      "aria-expanded": ne.value && ve.value.length > 0 ? "true" : "false",
                      onFocus: g[36] || (g[36] = (h) => ne.value = !0),
                      onKeydown: g[37] || (g[37] = ft((h) => ne.value = !1, ["escape"]))
                    }, null, 40, cL), [
                      [Me, X.value]
                    ]),
                    r("input", {
                      type: "hidden",
                      name: "subject",
                      value: $.subject
                    }, null, 8, dL),
                    ma("subject") ? (d(), p("small", fL, o(za("subject")), 1)) : T("", !0),
                    ne.value && ve.value.length > 0 ? (d(), p("ul", hL, [
                      (d(!0), p(W, null, oe(ve.value, (h) => (d(), p("li", {
                        key: h,
                        role: "option"
                      }, [
                        r("button", {
                          type: "button",
                          class: "library-subject-suggestion",
                          onMousedown: g[38] || (g[38] = Se(() => {
                          }, ["prevent"])),
                          onClick: (z) => $f(h, z)
                        }, o(h), 41, pL)
                      ]))), 128))
                    ])) : T("", !0),
                    r("button", {
                      type: "button",
                      class: Te(["button secondary library-subject-apply", _i("subject")]),
                      onClick: nm
                    }, o(u(t)("library", "Apply subject")), 3)
                  ]),
                  r("div", vL, [
                    r("label", bL, o(u(t)("library", "Classification")), 1),
                    be(r("input", {
                      id: "library-classification-search",
                      "onUpdate:modelValue": g[39] || (g[39] = (h) => Ae.value = h),
                      type: "search",
                      name: "classificationSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search classifications"),
                      title: u(t)("library", "Exact classification matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-classification-suggestions",
                      "aria-expanded": Ne.value && Ye.value.length > 0 ? "true" : "false",
                      onFocus: g[40] || (g[40] = (h) => Ne.value = !0),
                      onKeydown: g[41] || (g[41] = ft((h) => Ne.value = !1, ["escape"]))
                    }, null, 40, gL), [
                      [Me, Ae.value]
                    ]),
                    r("input", {
                      type: "hidden",
                      name: "classification",
                      value: $.classification
                    }, null, 8, mL),
                    Ne.value && Ye.value.length > 0 ? (d(), p("ul", yL, [
                      (d(!0), p(W, null, oe(Ye.value, (h) => (d(), p("li", {
                        key: h,
                        role: "option"
                      }, [
                        r("button", {
                          type: "button",
                          class: "library-classification-suggestion",
                          onMousedown: g[42] || (g[42] = Se(() => {
                          }, ["prevent"])),
                          onClick: (z) => Cf(h, z)
                        }, o(h), 41, _L)
                      ]))), 128))
                    ])) : T("", !0),
                    r("button", {
                      type: "submit",
                      class: Te(["button secondary library-classification-apply", _i("classification")])
                    }, o(u(t)("library", "Apply classification")), 3)
                  ]),
                  r("label", null, [
                    Q(o(u(t)("library", "Suggested updates")), 1),
                    be(r("select", {
                      "onUpdate:modelValue": g[43] || (g[43] = (h) => $.scannerConflicts = h),
                      name: "scannerConflicts",
                      onChange: g[44] || (g[44] = (h) => ya(h))
                    }, [
                      r("option", wL, o(u(t)("library", "All metadata")), 1),
                      r("option", kL, o(u(t)("library", "Suggested updates")), 1)
                    ], 544), [
                      [tt, $.scannerConflicts]
                    ])
                  ])
                ]),
                r("fieldset", SL, [
                  r("legend", null, o(u(t)("library", "Personal / display")), 1)
                ]),
                r("button", CL, o(u(t)("library", "Apply filters")), 1)
              ], 40, tI)
            ])) : T("", !0),
            r("a", {
              class: "library-navigation-settings-link",
              href: Yi.value
            }, [
              g[113] || (g[113] = r("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              r("span", null, o(u(t)("library", "Settings")), 1)
            ], 8, TL)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        ce(u(sw), null, {
          default: ke(() => [
            r("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: y.language || "en",
              dir: y.direction || "ltr",
              tabindex: "-1"
            }, [
              vi.value ? (d(), Pe(G4, {
                key: 0,
                "request-token": ht.value,
                "review-url": pi.value
              }, null, 8, ["request-token", "review-url"])) : Ji.value ? (d(), Pe(XR, {
                key: 1,
                "request-token": ht.value
              }, null, 8, ["request-token"])) : bi.value ? (d(), Pe(lx, {
                key: 2,
                "request-token": ht.value,
                "catalogue-url": rt.value
              }, null, 8, ["request-token", "catalogue-url"])) : On.value ? (d(), Pe(g3, {
                key: 3,
                "request-token": ht.value,
                "catalogue-url": rt.value
              }, null, 8, ["request-token", "catalogue-url"])) : Ua.value ? (d(), Pe(BA, {
                key: 4,
                onChanged: cs,
                "request-token": ht.value,
                "catalogue-url": rt.value,
                "lists-url": Qi.value
              }, null, 8, ["request-token", "catalogue-url", "lists-url"])) : (d(), p(W, { key: 5 }, [
                Wt.value.length > 0 ? (d(), p("nav", {
                  key: 0,
                  class: "library-active-filter-chips",
                  "aria-label": u(t)("library", "Active filters")
                }, [
                  r("span", null, o(u(t)("library", "Active filters")), 1),
                  (d(!0), p(W, null, oe(Wt.value, (h) => (d(), p("a", {
                    key: h.key,
                    href: tl(h.key),
                    class: "library-filter-chip",
                    "aria-label": `${u(t)("library", "Remove filter")}: ${h.label}`,
                    title: h.title,
                    onClick: Se((z) => al(h.key), ["prevent"])
                  }, [
                    r("strong", null, [
                      Q(o(h.label), 1),
                      h.displayValue ? (d(), p(W, { key: 0 }, [
                        Q(":")
                      ], 64)) : T("", !0)
                    ]),
                    h.displayValue ? (d(), p(W, { key: 0 }, [
                      g[114] || (g[114] = Q(o(" "), -1)),
                      r("span", {
                        class: "library-filter-chip-value",
                        title: h.value
                      }, o(h.displayValue), 9, xL)
                    ], 64)) : T("", !0),
                    g[115] || (g[115] = Q()),
                    g[116] || (g[116] = r("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, $L))), 128)),
                  pt.value.length > 0 ? (d(), p("a", {
                    key: 0,
                    href: Rs(),
                    class: "library-active-filter-clear-all",
                    onClick: Se(Is, ["prevent"])
                  }, o(u(t)("library", "Clear all")), 9, NL)) : T("", !0)
                ], 8, EL)) : T("", !0),
                Zi.value ? (d(), p("section", OL, [
                  r("header", RL, [
                    r("p", IL, o(u(t)("library", "Metadata cleanup")), 1),
                    r("h2", LL, o(u(t)("library", "Review")), 1),
                    ce(Be, {
                      text: u(t)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")
                    }, {
                      default: ke(() => [
                        Q(o(u(t)("library", "Metadata cleanup")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"])
                  ]),
                  r("nav", {
                    class: "library-review-queues",
                    "aria-label": u(t)("library", "Review queues")
                  }, [
                    (d(!0), p(W, null, oe(Bg.value, (h) => (d(), p("a", {
                      key: h.key,
                      class: Te(["library-review-queue-link", { active: h.active }]),
                      href: h.href,
                      "aria-current": h.active ? "page" : void 0,
                      onClick: Se((z) => sm(h), ["prevent"])
                    }, [
                      r("span", null, o(h.label), 1),
                      r("b", null, o(cm(h.countKey)), 1)
                    ], 10, DL))), 128))
                  ], 8, PL),
                  r("form", {
                    method: "get",
                    class: "library-review-filter-form",
                    "aria-label": u(t)("library", "Filter current review queue"),
                    onSubmit: Se(Yt, ["prevent"])
                  }, [
                    (d(!0), p(W, null, oe(xg.value, (h) => (d(), p("input", {
                      key: `review-${h.key}`,
                      type: "hidden",
                      name: h.key,
                      value: h.value
                    }, null, 8, ML))), 128)),
                    r("label", null, [
                      Q(o(u(t)("library", "Search within this queue")), 1),
                      be(r("input", {
                        "onUpdate:modelValue": g[45] || (g[45] = (h) => $.q = h),
                        type: "search",
                        name: "q"
                      }, null, 512), [
                        [Me, $.q]
                      ])
                    ]),
                    r("button", UL, o(u(t)("library", "Apply")), 1)
                  ], 40, FL),
                  r("div", {
                    class: "library-review-request-status",
                    role: "status",
                    "aria-live": "polite",
                    "aria-busy": Mt.loading ? "true" : "false"
                  }, [
                    Mt.loading ? (d(), p("span", jL, o(u(t)("library", "Loading review queue…")), 1)) : T("", !0)
                  ], 8, zL),
                  Mt.error ? (d(), p("p", BL, o(Mt.error), 1)) : T("", !0),
                  ln.value.enabled ? (d(), p("section", HL, [
                    r("div", VL, [
                      r("p", qL, o(u(t)("library", "Metadata review workbench")), 1),
                      r("h3", {
                        id: "library-metadata-review-workbench-heading",
                        title: u(t)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                      }, o(u(t)("library", "Review next suggestion")), 9, GL)
                    ]),
                    ln.value.item ? (d(), p("article", KL, [
                      r("header", null, [
                        r("strong", null, [
                          r("bdi", WL, o(ln.value.item.title), 1)
                        ]),
                        r("span", YL, [
                          r("bdi", ZL, o(ln.value.item.cachedPath), 1)
                        ])
                      ]),
                      r("div", XL, [
                        (d(!0), p(W, null, oe(ln.value.fields, (h) => (d(), p("article", {
                          key: h.field,
                          class: "library-metadata-review-field"
                        }, [
                          r("h4", null, [
                            r("bdi", JL, o(h.field), 1)
                          ]),
                          r("dl", null, [
                            r("div", null, [
                              r("dt", null, o(u(t)("library", "Current value")), 1),
                              r("dd", null, [
                                r("bdi", QL, o(h.currentValue || "—"), 1)
                              ])
                            ]),
                            r("div", null, [
                              r("dt", null, o(u(t)("library", "Suggested value")), 1),
                              r("dd", null, [
                                r("bdi", eP, o(h.scannerCandidate || "—"), 1)
                              ])
                            ]),
                            r("div", null, [
                              r("dt", null, o(u(t)("library", "Path-based suggestion")), 1),
                              r("dd", null, [
                                r("bdi", tP, o(h.pathTemplateCandidate || "—"), 1)
                              ])
                            ]),
                            r("div", null, [
                              r("dt", null, o(u(t)("library", "Sidecar value")), 1),
                              r("dd", null, [
                                r("bdi", aP, o(h.sidecarValue || "—"), 1)
                              ])
                            ]),
                            r("div", null, [
                              r("dt", null, o(u(t)("library", "Source")), 1),
                              r("dd", null, [
                                r("bdi", iP, o(h.sourceProvenance || "—"), 1)
                              ])
                            ])
                          ]),
                          r("form", {
                            method: "post",
                            action: ln.value.item.resetFieldUrl,
                            class: "library-metadata-review-accept-form"
                          }, [
                            r("input", {
                              type: "hidden",
                              name: "requesttoken",
                              value: ht.value
                            }, null, 8, rP),
                            r("input", {
                              type: "hidden",
                              name: "field",
                              value: h.field
                            }, null, 8, lP),
                            g[117] || (g[117] = r("input", {
                              type: "hidden",
                              name: "returnTo",
                              value: "catalogue"
                            }, null, -1)),
                            r("button", {
                              type: "submit",
                              class: "button secondary",
                              disabled: h.rejected,
                              title: h.rejected ? u(t)("library", "This source value exceeds field limits. Edit the field instead.") : void 0
                            }, o(u(t)("library", "Use suggested value")), 9, sP)
                          ], 8, nP)
                        ]))), 128))
                      ]),
                      r("footer", oP, [
                        r("a", {
                          class: "button secondary",
                          href: ln.value.item.detailsUrl
                        }, o(u(t)("library", "Maintenance")), 9, uP),
                        r("a", {
                          class: "button secondary",
                          href: ln.value.skipUrl
                        }, o(u(t)("library", "Skip to next suggestion")), 9, cP)
                      ])
                    ])) : T("", !0)
                  ])) : T("", !0),
                  C.value.length === 0 && !Mt.loading && !Mt.error ? (d(), p("div", dP, [
                    r("h3", null, o(u(t)("library", "This review queue is clear")), 1),
                    r("p", null, o(u(t)("library", "Choose another queue or return to the catalogue.")), 1),
                    r("a", {
                      class: "button primary",
                      href: rt.value
                    }, o(u(t)("library", "Back to Library")), 9, fP)
                  ])) : (d(), p("div", {
                    key: 3,
                    class: "library-review-results",
                    role: "region",
                    "aria-label": u(t)("library", "Review results")
                  }, [
                    (d(!0), p(W, null, oe(C.value, (h) => (d(), p("article", {
                      key: h.id,
                      class: "library-review-result-card"
                    }, [
                      r("div", null, [
                        r("h3", null, [
                          r("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (z) => Ba(h, z)
                          }, [
                            r("bdi", vP, o(h.title), 1)
                          ], 8, pP)
                        ]),
                        h.creators ? (d(), p("p", bP, [
                          r("bdi", gP, o(h.displayCreators ?? h.creators), 1)
                        ])) : T("", !0),
                        h.scanError ? (d(), p("p", mP, [
                          r("bdi", yP, o(h.scanError), 1)
                        ])) : T("", !0)
                      ]),
                      r("p", null, [
                        r("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (z) => Ba(h, z)
                        }, o(u(t)("library", "Details")), 9, _P),
                        r("a", {
                          class: "button primary",
                          href: h.openUrl,
                          onClick: (z) => mi(h, z)
                        }, o(u(t)("library", "Open")), 9, wP)
                      ])
                    ]))), 128))
                  ], 8, hP)),
                  C.value.length > 0 ? (d(), p("nav", {
                    key: 4,
                    class: "library-pagination",
                    "aria-label": u(t)("library", "Review pagination")
                  }, [
                    te.value.previousUrl ? (d(), p("a", {
                      key: 0,
                      href: te.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, SP)) : (d(), p("span", CP, o(u(t)("library", "Previous")), 1)),
                    r("span", null, [
                      Q(o(u(t)("library", "Page")) + " " + o(te.value.page), 1),
                      te.value.total > 0 ? (d(), p("span", TP, " · " + o(te.value.from) + "–" + o(te.value.to), 1)) : T("", !0)
                    ]),
                    te.value.nextUrl ? (d(), p("a", {
                      key: 2,
                      href: te.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, AP)) : (d(), p("span", EP, o(u(t)("library", "Next")), 1))
                  ], 8, kP)) : T("", !0)
                ])) : Nn.value ? (d(), p("main", $P, [
                  r("header", xP, [
                    r("p", NP, o(u(t)("library", "Your library")), 1),
                    r("h2", OP, o(u(t)("library", "Home")), 1)
                  ]),
                  pt.value.length > 0 ? (d(), p("aside", {
                    key: 0,
                    class: "library-active-filter-callout",
                    "aria-label": u(t)("library", "Active catalogue filters")
                  }, [
                    r("h3", null, o(u(t)("library", "Active catalogue filters")), 1),
                    r("nav", {
                      class: "library-active-filter-callout-chips",
                      "aria-label": u(t)("library", "Active catalogue filters")
                    }, [
                      (d(!0), p(W, null, oe(pt.value, (h) => (d(), p("a", {
                        key: `callout-${h.key}`,
                        href: tl(h.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${h.label}`,
                        onClick: Se((z) => al(h.key), ["prevent"])
                      }, [
                        r("strong", null, [
                          Q(o(h.label), 1),
                          h.displayValue ? (d(), p(W, { key: 0 }, [
                            Q(":")
                          ], 64)) : T("", !0)
                        ]),
                        h.displayValue ? (d(), p(W, { key: 0 }, [
                          g[118] || (g[118] = Q(o(" "), -1)),
                          r("span", {
                            class: "library-filter-chip-value",
                            title: h.value
                          }, o(h.displayValue), 9, PP)
                        ], 64)) : T("", !0),
                        g[119] || (g[119] = Q()),
                        g[120] || (g[120] = r("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, LP))), 128))
                    ], 8, IP),
                    r("p", DP, [
                      r("a", {
                        class: "button primary library-filter-callout-view",
                        href: yi.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, FP),
                      r("a", {
                        class: "button secondary",
                        href: Rs(),
                        onClick: Se(Is, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, MP)
                    ])
                  ], 8, RP)) : T("", !0),
                  r("section", UP, [
                    r("header", null, [
                      r("div", null, [
                        r("h3", zP, [
                          ce(Be, {
                            text: u(t)("library", "Pick up publications you opened recently.")
                          }, {
                            default: ke(() => [
                              Q(o(u(t)("library", "Continue reading")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      r("a", {
                        href: `${rt.value}?recentlyOpened=1&sort=lastOpened`
                      }, o(u(t)("library", "View all")), 9, jP)
                    ]),
                    Ss.value.continueReading.length ? (d(), p("div", BP, [
                      (d(!0), p(W, null, oe(Ss.value.continueReading, (h) => (d(), p("article", {
                        key: `continue-${h.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        r("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${h.title}`,
                          onClick: (z) => Ba(h, z)
                        }, [
                          r("span", VP, [
                            r("img", {
                              class: "library-cover-image",
                              src: h.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, qP)
                          ])
                        ], 8, HP),
                        r("div", GP, [
                          r("h4", null, [
                            r("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (z) => Ba(h, z)
                            }, [
                              r("bdi", WP, o(h.title), 1)
                            ], 8, KP)
                          ]),
                          h.creators ? (d(), p("p", YP, [
                            r("bdi", ZP, o(h.displayCreators ?? h.creators), 1)
                          ])) : T("", !0),
                          r("a", {
                            class: "library-cover-read",
                            href: h.openUrl,
                            onClick: (z) => mi(h, z)
                          }, o(u(t)("library", "Open")), 9, XP)
                        ])
                      ]))), 128))
                    ])) : (d(), p("p", JP, o(u(t)("library", "Publications you open will appear here.")), 1))
                  ]),
                  r("section", QP, [
                    r("header", null, [
                      r("div", null, [
                        r("h3", e8, [
                          ce(Be, {
                            text: u(t)("library", "The latest publications indexed from your Library roots.")
                          }, {
                            default: ke(() => [
                              Q(o(u(t)("library", "Recently added")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      r("a", {
                        href: `${rt.value}?sort=recent`
                      }, o(u(t)("library", "View all")), 9, t8)
                    ]),
                    Ss.value.recentlyAdded.length ? (d(), p("div", a8, [
                      (d(!0), p(W, null, oe(Ss.value.recentlyAdded, (h) => (d(), p("article", {
                        key: `recent-${h.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        r("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${h.title}`,
                          onClick: (z) => Ba(h, z)
                        }, [
                          r("span", n8, [
                            r("img", {
                              class: "library-cover-image",
                              src: h.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, r8)
                          ])
                        ], 8, i8),
                        r("div", l8, [
                          r("h4", null, [
                            r("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (z) => Ba(h, z)
                            }, [
                              r("bdi", o8, o(h.title), 1)
                            ], 8, s8)
                          ]),
                          h.creators ? (d(), p("p", u8, [
                            r("bdi", c8, o(h.displayCreators ?? h.creators), 1)
                          ])) : T("", !0),
                          r("a", {
                            class: "library-cover-read",
                            href: h.openUrl,
                            onClick: (z) => mi(h, z)
                          }, o(u(t)("library", "Open")), 9, d8)
                        ])
                      ]))), 128))
                    ])) : (d(), p("p", f8, o(u(t)("library", "Recently indexed publications will appear here.")), 1))
                  ]),
                  r("section", h8, [
                    r("header", null, [
                      r("div", null, [
                        r("h3", p8, [
                          ce(Be, {
                            text: u(t)("library", "Browse the folders that organize your publications.")
                          }, {
                            default: ke(() => [
                              Q(o(u(t)("library", "Shelves")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      r("a", { href: ba.value }, o(u(t)("library", "View all")), 9, v8)
                    ]),
                    rf.value.length ? (d(), p("nav", {
                      key: 0,
                      class: "library-home-shelves",
                      "aria-label": u(t)("library", "Shelves")
                    }, [
                      (d(!0), p(W, null, oe(rf.value, (h) => (d(), p("a", {
                        key: h.shelf,
                        href: h.url
                      }, [
                        r("strong", null, [
                          r("bdi", m8, o(h.shelf), 1)
                        ]),
                        r("span", null, o(u(yt)("library", "%n item", "%n items", Number(h.itemCount || 0))), 1)
                      ], 8, g8))), 128))
                    ], 8, b8)) : (d(), p("p", y8, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1))
                  ]),
                  Number(Du.value.count || 0) > 0 ? (d(), p("aside", _8, [
                    r("div", null, [
                      r("h3", w8, o(u(t)("library", "Needs attention")), 1),
                      r("p", k8, o(u(yt)("library", "%n publication needs better details.", "%n publications need better details.", Number(Du.value.count || 0))), 1)
                    ]),
                    r("a", {
                      class: "button tertiary",
                      href: Du.value.url
                    }, o(u(t)("library", "Review")), 9, S8)
                  ])) : T("", !0)
                ])) : Xi.value ? (d(), p("main", C8, [
                  r("header", T8, [
                    r("p", A8, o(u(t)("library", "Your library")), 1),
                    r("h2", E8, [
                      ce(Be, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: ke(() => [
                          Q(o(u(t)("library", "Shelves")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ])
                  ]),
                  pt.value.length > 0 ? (d(), p("aside", {
                    key: 0,
                    class: "library-active-filter-callout",
                    "aria-label": u(t)("library", "Active catalogue filters")
                  }, [
                    r("h3", null, o(u(t)("library", "Active catalogue filters")), 1),
                    r("nav", {
                      class: "library-active-filter-callout-chips",
                      "aria-label": u(t)("library", "Active catalogue filters")
                    }, [
                      (d(!0), p(W, null, oe(pt.value, (h) => (d(), p("a", {
                        key: `callout-${h.key}`,
                        href: tl(h.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${h.label}`,
                        onClick: Se((z) => al(h.key), ["prevent"])
                      }, [
                        r("strong", null, [
                          Q(o(h.label), 1),
                          h.displayValue ? (d(), p(W, { key: 0 }, [
                            Q(":")
                          ], 64)) : T("", !0)
                        ]),
                        h.displayValue ? (d(), p(W, { key: 0 }, [
                          g[121] || (g[121] = Q(o(" "), -1)),
                          r("span", {
                            class: "library-filter-chip-value",
                            title: h.value
                          }, o(h.displayValue), 9, O8)
                        ], 64)) : T("", !0),
                        g[122] || (g[122] = Q()),
                        g[123] || (g[123] = r("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, N8))), 128))
                    ], 8, x8),
                    r("p", R8, [
                      r("a", {
                        class: "button primary library-filter-callout-view",
                        href: yi.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, I8),
                      r("a", {
                        class: "button secondary",
                        href: Rs(),
                        onClick: Se(Is, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, L8)
                    ])
                  ], 8, $8)) : T("", !0),
                  lf.value.length ? (d(), p("nav", {
                    key: 1,
                    "aria-label": u(t)("library", "Shelves")
                  }, [
                    r("ul", D8, [
                      (d(!0), p(W, null, oe(lf.value, (h) => (d(), Pe(kT, {
                        key: h.id,
                        node: h,
                        "children-url": en.value
                      }, null, 8, ["node", "children-url"]))), 128))
                    ])
                  ], 8, P8)) : (d(), p("section", F8, [
                    r("h3", null, [
                      ce(Be, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: ke(() => [
                          Q(o(u(t)("library", "Shelves")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    r("p", M8, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1),
                    r("p", U8, [
                      r("a", {
                        class: "button primary",
                        href: Yi.value
                      }, o(u(t)("library", "Add a Library root")), 9, z8),
                      r("a", {
                        class: "button secondary",
                        href: rt.value
                      }, o(u(t)("library", "All publications")), 9, j8)
                    ])
                  ]))
                ])) : (d(), p("section", {
                  key: 4,
                  id: "library-catalogue",
                  class: Te(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": Mt.loading }]),
                  "aria-labelledby": "library-catalogue-heading",
                  "aria-busy": Mt.loading ? "true" : "false"
                }, [
                  r("header", H8, [
                    Aa.value ? (d(), p("p", V8, o(gs.value), 1)) : T("", !0),
                    r("h2", {
                      id: "library-catalogue-heading",
                      ref_key: "catalogueHeadingElement",
                      ref: Vr,
                      tabindex: "-1"
                    }, o(ga.value), 513)
                  ]),
                  r("details", {
                    class: "library-mobile-filter-panel",
                    "data-library-control": "filter",
                    onToggle: Ag
                  }, [
                    r("summary", {
                      class: "library-mobile-filter-trigger",
                      "aria-label": Cg.value
                    }, [
                      r("span", G8, o(u(yt)("library", "%n item", "%n items", Number(te.value.total || 0))), 1),
                      r("strong", null, o(Sg.value), 1)
                    ], 8, q8),
                    r("form", {
                      method: "get",
                      class: "library-mobile-filter-form",
                      "aria-label": u(t)("library", "Mobile catalogue filters"),
                      onSubmit: Se(wf, ["prevent"])
                    }, [
                      r("input", {
                        type: "hidden",
                        name: "folder",
                        value: $.folder
                      }, null, 8, W8),
                      (d(!0), p(W, null, oe(nf.value, (h) => (d(), p("input", {
                        key: `mobile-hidden-${h.key}`,
                        type: "hidden",
                        name: h.key,
                        value: h.value
                      }, null, 8, Y8))), 128)),
                      r("fieldset", Z8, [
                        r("legend", null, o(u(t)("library", "Content")), 1),
                        r("label", X8, [
                          r("span", null, o(u(t)("library", "Search")), 1),
                          be(r("input", {
                            ref_key: "mobileFilterSearchInput",
                            ref: ms,
                            "onUpdate:modelValue": g[46] || (g[46] = (h) => Z.value = h),
                            "data-library-mobile-filter-search": "",
                            type: "search",
                            name: "q",
                            placeholder: u(t)("library", "Title, creator, description, filename or folder")
                          }, null, 8, J8), [
                            [Me, Z.value]
                          ])
                        ]),
                        r("label", null, [
                          Q(o(u(t)("library", "Type")), 1),
                          be(r("select", {
                            "onUpdate:modelValue": g[47] || (g[47] = (h) => $.type = h),
                            name: "type",
                            onChange: g[48] || (g[48] = (h) => ya(h))
                          }, [
                            r("option", Q8, o(u(t)("library", "All types")), 1),
                            (d(!0), p(W, null, oe(F.value, (h) => (d(), p("option", {
                              key: `mobile-type-${h}`,
                              value: h
                            }, o(h), 9, e5))), 128))
                          ], 544), [
                            [tt, $.type]
                          ])
                        ]),
                        r("div", t5, [
                          r("label", a5, o(u(t)("library", "Publisher")), 1),
                          be(r("input", {
                            id: "library-mobile-publisher-search",
                            "onUpdate:modelValue": g[49] || (g[49] = (h) => ae.value = h),
                            type: "search",
                            name: "publisherSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search publishers"),
                            title: u(t)("library", "Exact publisher matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-publisher-suggestions",
                            "aria-activedescendant": Nf("mobile", "publisher"),
                            "aria-expanded": J.value && H.value.length > 0 ? "true" : "false",
                            onFocus: g[50] || (g[50] = (h) => Of("publisher")),
                            onKeydown: g[51] || (g[51] = (h) => Rf(h, "publisher"))
                          }, null, 40, i5), [
                            [Me, ae.value]
                          ]),
                          r("input", {
                            type: "hidden",
                            name: "publisher",
                            value: $.publisher
                          }, null, 8, n5),
                          ma("publisher") ? (d(), p("small", r5, o(za("publisher")), 1)) : T("", !0),
                          Ea.value && J.value && H.value.length > 0 ? (d(), p("ul", l5, [
                            (d(!0), p(W, null, oe(H.value, (h, z) => (d(), p("li", {
                              id: Bu("mobile", "publisher", z),
                              key: `mobile-publisher-${h}`,
                              role: "option",
                              "aria-selected": ki.publisher === z ? "true" : "false"
                            }, [
                              r("button", {
                                type: "button",
                                class: "library-publisher-suggestion",
                                onMousedown: g[52] || (g[52] = Se(() => {
                                }, ["prevent"])),
                                onClick: (he) => Sf(h, he)
                              }, o(h), 41, o5)
                            ], 8, s5))), 128))
                          ])) : T("", !0)
                        ]),
                        r("div", u5, [
                          r("label", c5, o(u(t)("library", "Series / periodical")), 1),
                          be(r("input", {
                            id: "library-mobile-publication-search",
                            "onUpdate:modelValue": g[53] || (g[53] = (h) => G.value = h),
                            type: "search",
                            name: "publicationSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search series and periodicals"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-publication-suggestions",
                            "aria-expanded": ee.value && V.value.length > 0 ? "true" : "false",
                            onFocus: g[54] || (g[54] = (h) => ee.value = !0),
                            onKeydown: g[55] || (g[55] = ft((h) => ee.value = !1, ["escape"]))
                          }, null, 40, d5), [
                            [Me, G.value]
                          ]),
                          r("input", {
                            type: "hidden",
                            name: "publication",
                            value: $.publication
                          }, null, 8, f5),
                          ma("publication") ? (d(), p("small", h5, o(za("publication")), 1)) : T("", !0),
                          Ea.value && ee.value && V.value.length > 0 ? (d(), p("ul", p5, [
                            (d(!0), p(W, null, oe(V.value, (h) => (d(), p("li", {
                              key: `mobile-publication-${h}`,
                              role: "option"
                            }, [
                              r("button", {
                                type: "button",
                                class: "library-publication-suggestion",
                                onMousedown: g[56] || (g[56] = Se(() => {
                                }, ["prevent"])),
                                onClick: (z) => _f(h, z)
                              }, o(h), 41, v5)
                            ]))), 128))
                          ])) : T("", !0)
                        ]),
                        r("div", b5, [
                          r("label", g5, o(u(t)("library", "Publication year")), 1),
                          be(r("input", {
                            id: "library-mobile-year-search",
                            "onUpdate:modelValue": g[57] || (g[57] = (h) => Gt.value = h),
                            type: "search",
                            name: "yearSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search publication years"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-year-suggestions",
                            "aria-expanded": va.value && Ya.value.length > 0 ? "true" : "false",
                            onFocus: g[58] || (g[58] = (h) => va.value = !0),
                            onKeydown: g[59] || (g[59] = ft((h) => va.value = !1, ["escape"]))
                          }, null, 40, m5), [
                            [Me, Gt.value]
                          ]),
                          r("input", {
                            type: "hidden",
                            name: "year",
                            value: $.year
                          }, null, 8, y5),
                          ma("year") ? (d(), p("small", _5, o(za("year")), 1)) : T("", !0),
                          Ea.value && va.value && Ya.value.length > 0 ? (d(), p("ul", w5, [
                            (d(!0), p(W, null, oe(Ya.value, (h) => (d(), p("li", {
                              key: `mobile-year-${h}`,
                              role: "option"
                            }, [
                              r("button", {
                                type: "button",
                                class: "library-year-suggestion",
                                onMousedown: g[60] || (g[60] = Se(() => {
                                }, ["prevent"])),
                                onClick: (z) => xf(h, z)
                              }, o(h), 41, k5)
                            ]))), 128))
                          ])) : T("", !0)
                        ]),
                        r("div", S5, [
                          r("label", C5, o(u(t)("library", "Creator")), 1),
                          be(r("input", {
                            id: "library-mobile-creator-search",
                            "onUpdate:modelValue": g[61] || (g[61] = (h) => Ue.value = h),
                            type: "search",
                            name: "creatorSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search creators"),
                            title: u(t)("library", "Match an individual author; existing full-field filters remain usable"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-creator-suggestions",
                            "aria-expanded": Ze.value && _e.value.length > 0 ? "true" : "false",
                            onFocus: g[62] || (g[62] = (h) => Ze.value = !0),
                            onKeydown: g[63] || (g[63] = ft((h) => Ze.value = !1, ["escape"]))
                          }, null, 40, T5), [
                            [Me, Ue.value]
                          ]),
                          r("input", {
                            type: "hidden",
                            name: "creator",
                            value: $.creator
                          }, null, 8, A5),
                          ma("creator") ? (d(), p("small", E5, o(za("creator")), 1)) : T("", !0),
                          Ea.value && Ze.value && _e.value.length > 0 ? (d(), p("ul", $5, [
                            (d(!0), p(W, null, oe(_e.value, (h) => (d(), p("li", {
                              key: `mobile-creator-${h}`,
                              role: "option"
                            }, [
                              r("button", {
                                type: "button",
                                class: "library-creator-suggestion",
                                onMousedown: g[64] || (g[64] = Se(() => {
                                }, ["prevent"])),
                                onClick: (z) => kf(h, z)
                              }, o(h), 41, x5)
                            ]))), 128))
                          ])) : T("", !0)
                        ]),
                        r("label", null, [
                          Q(o(u(t)("library", "Format")), 1),
                          be(r("select", {
                            "onUpdate:modelValue": g[65] || (g[65] = (h) => $.format = h),
                            name: "format",
                            onChange: g[66] || (g[66] = (h) => ya(h))
                          }, [
                            r("option", N5, o(u(t)("library", "All formats")), 1),
                            (d(!0), p(W, null, oe(x.value, (h) => (d(), p("option", {
                              key: `mobile-format-${h}`,
                              value: h
                            }, o(Ls(h)), 9, O5))), 128))
                          ], 544), [
                            [tt, $.format]
                          ])
                        ]),
                        r("div", R5, [
                          r("label", I5, o(u(t)("library", "Subject")), 1),
                          be(r("input", {
                            id: "library-mobile-subject-search",
                            "onUpdate:modelValue": g[67] || (g[67] = (h) => X.value = h),
                            type: "search",
                            name: "subjectSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search subjects"),
                            title: u(t)("library", "Exact subject matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-subject-suggestions",
                            "aria-expanded": ne.value && ve.value.length > 0 ? "true" : "false",
                            onFocus: g[68] || (g[68] = (h) => ne.value = !0),
                            onKeydown: g[69] || (g[69] = ft((h) => ne.value = !1, ["escape"]))
                          }, null, 40, L5), [
                            [Me, X.value]
                          ]),
                          r("input", {
                            type: "hidden",
                            name: "subject",
                            value: $.subject
                          }, null, 8, P5),
                          ma("subject") ? (d(), p("small", D5, o(za("subject")), 1)) : T("", !0),
                          Ea.value && ne.value && ve.value.length > 0 ? (d(), p("ul", F5, [
                            (d(!0), p(W, null, oe(ve.value, (h) => (d(), p("li", {
                              key: `mobile-subject-${h}`,
                              role: "option"
                            }, [
                              r("button", {
                                type: "button",
                                class: "library-subject-suggestion",
                                onMousedown: g[70] || (g[70] = Se(() => {
                                }, ["prevent"])),
                                onClick: (z) => $f(h, z)
                              }, o(h), 41, M5)
                            ]))), 128))
                          ])) : T("", !0)
                        ]),
                        r("div", U5, [
                          r("label", z5, o(u(t)("library", "Classification")), 1),
                          be(r("input", {
                            id: "library-mobile-classification-search",
                            "onUpdate:modelValue": g[71] || (g[71] = (h) => Ae.value = h),
                            type: "search",
                            name: "classificationSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search classifications"),
                            title: u(t)("library", "Exact classification matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-classification-suggestions",
                            "aria-expanded": Ne.value && Ye.value.length > 0 ? "true" : "false",
                            onFocus: g[72] || (g[72] = (h) => Ne.value = !0),
                            onKeydown: g[73] || (g[73] = ft((h) => Ne.value = !1, ["escape"]))
                          }, null, 40, j5), [
                            [Me, Ae.value]
                          ]),
                          r("input", {
                            type: "hidden",
                            name: "classification",
                            value: $.classification
                          }, null, 8, B5),
                          Ea.value && Ne.value && Ye.value.length > 0 ? (d(), p("ul", H5, [
                            (d(!0), p(W, null, oe(Ye.value, (h) => (d(), p("li", {
                              key: `mobile-classification-${h}`,
                              role: "option"
                            }, [
                              r("button", {
                                type: "button",
                                class: "library-classification-suggestion",
                                onMousedown: g[74] || (g[74] = Se(() => {
                                }, ["prevent"])),
                                onClick: (z) => Cf(h, z)
                              }, o(h), 41, V5)
                            ]))), 128))
                          ])) : T("", !0)
                        ])
                      ]),
                      r("fieldset", q5, [
                        r("legend", null, o(u(t)("library", "Location")), 1),
                        r("label", null, [
                          Q(o(u(t)("library", "Shelf")), 1),
                          be(r("select", {
                            "onUpdate:modelValue": g[75] || (g[75] = (h) => $.shelf = h),
                            name: "shelf",
                            onChange: g[76] || (g[76] = (h) => ya(h))
                          }, [
                            r("option", G5, o(u(t)("library", "All shelves")), 1),
                            (d(!0), p(W, null, oe(S.value, (h) => (d(), p("option", {
                              key: `mobile-shelf-${h}`,
                              value: h
                            }, o(h), 9, K5))), 128))
                          ], 544), [
                            [tt, $.shelf]
                          ])
                        ]),
                        r("div", W5, [
                          r("label", Y5, o(u(t)("library", "Folder")), 1),
                          be(r("input", {
                            id: "library-mobile-folder-search",
                            "onUpdate:modelValue": g[77] || (g[77] = (h) => nt.value = h),
                            type: "search",
                            name: "folderSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Type at least 3 path characters"),
                            title: u(t)("library", "Select an exact folder path"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-folder-suggestions",
                            "aria-expanded": ie.value && R.value.length > 0 ? "true" : "false",
                            onFocus: g[78] || (g[78] = (h) => ie.value = !0),
                            onKeydown: g[79] || (g[79] = ft((h) => ie.value = !1, ["escape"]))
                          }, null, 40, Z5), [
                            [Me, nt.value]
                          ]),
                          Ea.value && ie.value && R.value.length > 0 ? (d(), p("ul", X5, [
                            (d(!0), p(W, null, oe(R.value, (h) => (d(), p("li", {
                              key: `mobile-folder-${h}`,
                              role: "option"
                            }, [
                              r("button", {
                                type: "button",
                                class: "library-folder-suggestion",
                                onMousedown: g[80] || (g[80] = Se(() => {
                                }, ["prevent"])),
                                onClick: (z) => Af(h, z)
                              }, o(h), 41, J5)
                            ]))), 128))
                          ])) : T("", !0)
                        ])
                      ]),
                      r("fieldset", Q5, [
                        r("legend", null, o(u(t)("library", "Review")), 1),
                        r("label", null, [
                          Q(o(u(t)("library", "Scan status")), 1),
                          be(r("select", {
                            "onUpdate:modelValue": g[81] || (g[81] = (h) => $.status = h),
                            name: "status",
                            onChange: g[82] || (g[82] = (h) => ya(h))
                          }, [
                            r("option", e9, o(u(t)("library", "All scan statuses")), 1),
                            (d(!0), p(W, null, oe(L.value, (h) => (d(), p("option", {
                              key: `mobile-scan-${h}`,
                              value: h
                            }, o(h), 9, t9))), 128))
                          ], 544), [
                            [tt, $.status]
                          ])
                        ]),
                        r("label", null, [
                          Q(o(u(t)("library", "Workflow status")), 1),
                          be(r("select", {
                            "onUpdate:modelValue": g[83] || (g[83] = (h) => $.workflowStatus = h),
                            name: "workflowStatus",
                            onChange: g[84] || (g[84] = (h) => ya(h))
                          }, [
                            r("option", a9, o(u(t)("library", "All workflow statuses")), 1),
                            (d(!0), p(W, null, oe(le.value, (h) => (d(), p("option", {
                              key: `mobile-workflow-${h}`,
                              value: h
                            }, o(h), 9, i9))), 128))
                          ], 544), [
                            [tt, $.workflowStatus]
                          ])
                        ]),
                        r("label", null, [
                          Q(o(u(t)("library", "Suggested updates")), 1),
                          be(r("select", {
                            "onUpdate:modelValue": g[85] || (g[85] = (h) => $.scannerConflicts = h),
                            name: "scannerConflicts",
                            onChange: g[86] || (g[86] = (h) => ya(h))
                          }, [
                            r("option", n9, o(u(t)("library", "All metadata")), 1),
                            r("option", r9, o(u(t)("library", "Suggested updates")), 1)
                          ], 544), [
                            [tt, $.scannerConflicts]
                          ])
                        ])
                      ]),
                      r("fieldset", l9, [
                        r("legend", null, o(u(t)("library", "Personal / display")), 1),
                        r("div", s9, [
                          r("label", o9, o(u(t)("library", "Nextcloud tag")), 1),
                          be(r("input", {
                            id: "library-tag-search",
                            "onUpdate:modelValue": g[87] || (g[87] = (h) => _t.value = h),
                            type: "search",
                            name: "tagSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search tags"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-tag-suggestions",
                            "aria-expanded": gt.value && pa.value.length > 0 ? "true" : "false",
                            onFocus: g[88] || (g[88] = (h) => gt.value = !0),
                            onKeydown: g[89] || (g[89] = ft((h) => gt.value = !1, ["escape"]))
                          }, null, 40, u9), [
                            [Me, _t.value]
                          ]),
                          r("input", {
                            type: "hidden",
                            name: "tag",
                            value: $.tag
                          }, null, 8, c9),
                          gt.value && pa.value.length > 0 ? (d(), p("ul", d9, [
                            (d(!0), p(W, null, oe(pa.value, (h) => (d(), p("li", {
                              key: h,
                              role: "option"
                            }, [
                              r("button", {
                                type: "button",
                                class: "library-tag-suggestion",
                                onMousedown: g[90] || (g[90] = Se(() => {
                                }, ["prevent"])),
                                onClick: (z) => Tf(h, z)
                              }, o(h), 41, f9)
                            ]))), 128))
                          ])) : T("", !0),
                          r("button", {
                            type: "submit",
                            class: Te(["button secondary library-tag-apply", _i("tag")])
                          }, o(u(t)("library", "Apply tag")), 3)
                        ]),
                        r("label", null, [
                          Q(o(u(t)("library", "Sort")), 1),
                          be(r("select", {
                            "onUpdate:modelValue": g[91] || (g[91] = (h) => $.sort = h),
                            name: "sort",
                            onChange: Yt
                          }, [
                            r("option", h9, o(u(t)("library", "Title")), 1),
                            r("option", p9, o(u(t)("library", "Date added")), 1),
                            r("option", v9, o(u(t)("library", "Publication date")), 1),
                            r("option", b9, o(u(t)("library", "Series")), 1),
                            r("option", g9, o(u(t)("library", "Recently opened")), 1),
                            r("option", m9, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [tt, $.sort]
                          ])
                        ]),
                        r("label", null, [
                          Q(o(u(t)("library", "View")), 1),
                          be(r("select", {
                            "onUpdate:modelValue": g[92] || (g[92] = (h) => $.view = h),
                            name: "view",
                            onChange: Yt
                          }, [
                            r("option", y9, o(u(t)("library", "Compact")), 1),
                            r("option", _9, o(u(t)("library", "List")), 1)
                          ], 544), [
                            [tt, $.view]
                          ])
                        ])
                      ]),
                      r("div", w9, [
                        pt.value.length > 0 ? (d(), p("a", {
                          key: 0,
                          href: Rs(),
                          class: "button secondary library-mobile-filter-clear",
                          onClick: Se(Is, ["prevent"])
                        }, o(u(t)("library", "Clear all")), 9, k9)) : T("", !0),
                        r("button", S9, o(Tg.value), 1)
                      ])
                    ], 40, K8)
                  ], 32),
                  r("nav", {
                    class: "library-catalogue-workspace library-workspace-menubar",
                    "aria-label": u(t)("library", "One catalogue workspace")
                  }, [
                    r("div", T9, [
                      r("section", A9, [
                        r("h3", {
                          title: u(t)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                        }, o(u(t)("library", "Collections")), 9, E9),
                        r("form", {
                          method: "post",
                          action: E.value,
                          class: "library-saved-collection-save-form",
                          title: qu.value ? "" : u(t)("library", "Choose search terms or filters first, then save them as a custom collection.")
                        }, [
                          r("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: ht.value
                          }, null, 8, x9),
                          r("input", {
                            type: "hidden",
                            name: "savedCollectionFilters",
                            value: dm.value
                          }, null, 8, N9),
                          r("label", null, [
                            r("span", O9, o(u(t)("library", "Collection name")), 1),
                            r("input", {
                              type: "text",
                              name: "savedCollectionName",
                              placeholder: u(t)("library", "e.g. Bremen photo books"),
                              disabled: !qu.value,
                              autocomplete: "off"
                            }, null, 8, R9)
                          ]),
                          r("button", {
                            type: "submit",
                            class: "button secondary",
                            disabled: !qu.value,
                            title: u(t)("library", "Save current view")
                          }, o(u(t)("library", "Save")), 9, I9)
                        ], 8, $9)
                      ]),
                      r("form", {
                        method: "get",
                        class: "library-quick-filter-bar library-catalogue-toolbar",
                        "aria-label": u(t)("library", "Catalogue toolbar"),
                        onSubmit: Se(Yt, ["prevent"])
                      }, [
                        (d(!0), p(W, null, oe($g.value, (h) => (d(), p("input", {
                          key: h.key,
                          type: "hidden",
                          name: h.key,
                          value: h.value
                        }, null, 8, P9))), 128)),
                        r("label", D9, [
                          Q(o(u(t)("library", "Sort")), 1),
                          be(r("select", {
                            "onUpdate:modelValue": g[93] || (g[93] = (h) => $.sort = h),
                            name: "sort",
                            onChange: Yt
                          }, [
                            r("option", F9, o(u(t)("library", "Title")), 1),
                            r("option", M9, o(u(t)("library", "Date added")), 1),
                            r("option", U9, o(u(t)("library", "Publication date")), 1),
                            r("option", z9, o(u(t)("library", "Series")), 1),
                            r("option", j9, o(u(t)("library", "Recently opened")), 1),
                            r("option", B9, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [tt, $.sort]
                          ])
                        ]),
                        r("nav", {
                          class: "library-view-mode-toggle",
                          "data-library-control": "view",
                          "aria-label": u(t)("library", "View")
                        }, [
                          r("button", {
                            type: "button",
                            "data-library-view-mode": "compact",
                            class: Te({ active: se.value === "compact" }),
                            "aria-pressed": se.value === "compact" ? "true" : "false",
                            onClick: g[94] || (g[94] = (h) => Df("compact"))
                          }, o(u(t)("library", "Compact")), 11, V9),
                          r("button", {
                            type: "button",
                            "data-library-view-mode": "list",
                            class: Te({ active: se.value === "list" }),
                            "aria-pressed": se.value === "list" ? "true" : "false",
                            onClick: g[95] || (g[95] = (h) => Df("list"))
                          }, o(u(t)("library", "List")), 11, q9)
                        ], 8, H9)
                      ], 40, L9)
                    ])
                  ], 8, C9),
                  nn.value ? (d(), p("p", G9, o(nn.value), 1)) : T("", !0),
                  vr.value ? (d(), p("p", K9, o(vr.value), 1)) : T("", !0),
                  pr.value ? (d(), p("p", W9, o(pr.value), 1)) : T("", !0),
                  r("div", Y9, [
                    Mt.loading ? (d(), p("span", Z9, o(u(t)("library", "Updating catalogue…")), 1)) : Mt.completed ? (d(), p("span", X9, o(u(yt)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(te.value.total || 0))), 1)) : T("", !0)
                  ]),
                  Aa.value ? (d(), p("section", J9, [
                    r("p", Q9, o(gs.value), 1),
                    r("h3", {
                      id: "library-discovery-heading",
                      title: tn.value ? u(t)("library", "Items by this creator, sorted by publication context when available.") : dr.value ? u(t)("library", "Items from this publication year, sorted by publication date when available.") : u(t)("library", "Items in this publication, sorted by issue/date context when available.")
                    }, o(an.value), 9, eD),
                    r("div", {
                      class: "library-discovery-hero-metrics",
                      "aria-label": u(t)("library", "Discovery summary")
                    }, [
                      r("span", null, o(u(yt)("library", "%n item", "%n items", te.value.total)), 1),
                      P.value?.earliestYear && P.value?.latestYear ? (d(), p("span", aD, o(P.value.earliestYear) + "–" + o(P.value.latestYear), 1)) : T("", !0),
                      P.value?.datedCount ? (d(), p("span", iD, o(P.value.datedCount) + " " + o(u(t)("library", "dated")), 1)) : T("", !0),
                      P.value?.undatedCount > 0 ? (d(), p("span", nD, o(P.value.undatedCount) + " " + o(u(t)("library", "undated")), 1)) : T("", !0)
                    ], 8, tD),
                    Ln.value && P.value ? (d(), p("aside", {
                      key: 0,
                      class: "library-publication-issue-context",
                      "aria-label": u(t)("library", "Publication issue/date context")
                    }, [
                      r("strong", null, o(u(t)("library", "Publication contents")), 1),
                      r("span", null, o(u(yt)("library", "%n item", "%n items", P.value.itemCount)), 1),
                      P.value.earliestYear && P.value.latestYear ? (d(), p("span", lD, o(P.value.earliestYear) + "–" + o(P.value.latestYear), 1)) : T("", !0),
                      r("span", null, o(P.value.datedCount) + " " + o(u(t)("library", "with issue/date coverage")), 1),
                      P.value.undatedCount > 0 ? (d(), p("span", sD, o(P.value.undatedCount) + " " + o(u(t)("library", "without dates yet")), 1)) : T("", !0),
                      r("span", null, o(u(t)("library", "read-only grouping")), 1)
                    ], 8, rD)) : T("", !0),
                    Ln.value && P.value?.issueGroups?.length ? (d(), p("section", oD, [
                      r("div", null, [
                        r("p", uD, o(u(t)("library", "Issue order")), 1),
                        r("h4", {
                          id: "library-publication-issue-groups-heading",
                          title: u(t)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                        }, o(u(t)("library", "Read-only issue/date grouping")), 9, cD)
                      ]),
                      r("div", {
                        class: "library-publication-issue-strip",
                        "aria-label": u(t)("library", "Visual issue strip")
                      }, [
                        (d(!0), p(W, null, oe(P.value.issueGroups, (h) => (d(), p("a", {
                          key: `strip-${h.label}`,
                          class: "library-issue-strip-card",
                          href: h.items?.[0]?.detailsUrl || "#"
                        }, [
                          r("span", null, o(h.label), 1),
                          r("strong", null, o(h.items?.[0]?.issueLabel || u(t)("library", "Issue")), 1),
                          r("small", null, o(u(yt)("library", "%n item", "%n items", h.items?.length || 0)), 1)
                        ], 8, fD))), 128))
                      ], 8, dD),
                      P.value.gapRanges?.length ? (d(), p("p", hD, o(u(t)("library", "Gap")) + ": " + o(P.value.gapRanges.join(", ")), 1)) : T("", !0),
                      (d(!0), p(W, null, oe(P.value.issueGroups, (h) => (d(), p("div", {
                        key: h.label,
                        class: "library-publication-issue-group"
                      }, [
                        r("h5", null, o(h.label), 1),
                        r("ol", null, [
                          (d(!0), p(W, null, oe(h.items, (z, he) => (d(), p("li", {
                            key: z.itemId
                          }, [
                            r("span", pD, o(z.issueLabel), 1),
                            r("a", {
                              href: z.detailsUrl || "#"
                            }, o(z.title), 9, vD),
                            r("small", null, [
                              Q(o(z.publicationType), 1),
                              z.publicationDate ? (d(), p(W, { key: 0 }, [
                                Q(" · " + o(z.publicationDate), 1)
                              ], 64)) : T("", !0)
                            ]),
                            r("small", bD, [
                              he > 0 ? (d(), p(W, { key: 0 }, [
                                Q(o(u(t)("library", "Previous issue")), 1)
                              ], 64)) : T("", !0),
                              he > 0 && he < h.items.length - 1 ? (d(), p(W, { key: 1 }, [
                                Q(" · ")
                              ], 64)) : T("", !0),
                              he < h.items.length - 1 ? (d(), p(W, { key: 2 }, [
                                Q(o(u(t)("library", "Next issue")), 1)
                              ], 64)) : T("", !0)
                            ])
                          ]))), 128))
                        ])
                      ]))), 128)),
                      P.value.unknownIssueItems?.length ? (d(), p("details", gD, [
                        r("summary", {
                          title: u(t)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                        }, o(u(t)("library", "Unknown issue/date")) + " · " + o(P.value.unknownIssueItems.length), 9, mD)
                      ])) : T("", !0)
                    ])) : T("", !0),
                    r("p", null, [
                      r("a", {
                        href: rt.value,
                        class: "button secondary library-discovery-back-link"
                      }, o(u(t)("library", "Back to full catalogue")), 9, yD)
                    ])
                  ])) : T("", !0),
                  r("div", _D, [
                    r("p", wD, o(u(t)("library", "Showing")) + " " + o(te.value.from) + "–" + o(te.value.to) + " " + o(u(t)("library", "of")) + " " + o(te.value.total) + " " + o(u(t)("library", "catalogue items")), 1),
                    r("nav", {
                      class: "library-pagination library-pagination--top",
                      "aria-label": u(t)("library", "Catalogue pagination")
                    }, [
                      r("span", SD, [
                        Q(o(u(t)("library", "Page")) + " " + o(te.value.page), 1),
                        te.value.total > 0 ? (d(), p("span", CD, " · " + o(te.value.from) + "–" + o(te.value.to), 1)) : T("", !0)
                      ]),
                      te.value.previousUrl ? (d(), p("a", {
                        key: 0,
                        href: te.value.previousUrl
                      }, o(u(t)("library", "Previous")), 9, TD)) : (d(), p("span", AD, o(u(t)("library", "Previous")), 1)),
                      te.value.nextUrl ? (d(), p("a", {
                        key: 2,
                        href: te.value.nextUrl
                      }, o(u(t)("library", "Next")), 9, ED)) : (d(), p("span", $D, o(u(t)("library", "Next")), 1))
                    ], 8, kD)
                  ]),
                  C.value.length === 0 ? (d(), p("div", {
                    key: 4,
                    class: Te(["library-empty-content", { "library-first-run-guidance": fr.value || Qa.value, "library-filter-empty-state": hr.value && !fr.value && !Qa.value }]),
                    role: "status"
                  }, [
                    fr.value ? (d(), p(W, { key: 0 }, [
                      r("h3", {
                        title: u(t)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                      }, o(u(t)("library", "Start with one Library root")), 9, xD),
                      r("p", ND, [
                        r("a", {
                          href: Yi.value,
                          class: "button primary"
                        }, o(u(t)("library", "Add a Library root")), 9, OD),
                        r("span", RD, o(u(t)("library", "Run a scan after saving a root")), 1)
                      ])
                    ], 64)) : Qa.value ? (d(), p(W, { key: 1 }, [
                      r("h3", {
                        title: u(t)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                      }, o(u(t)("library", "No enabled Library roots")), 9, ID),
                      r("p", LD, [
                        r("a", {
                          href: Yi.value,
                          class: "button primary"
                        }, o(u(t)("library", "Open Library settings")), 9, PD)
                      ])
                    ], 64)) : hr.value ? (d(), p(W, { key: 2 }, [
                      r("h3", {
                        title: u(t)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                      }, o(u(t)("library", "No items match these filters")), 9, DD),
                      pt.value.length > 0 ? (d(), p("nav", {
                        key: 0,
                        class: "library-empty-filter-chips",
                        "aria-label": u(t)("library", "Remove active filters")
                      }, [
                        (d(!0), p(W, null, oe(pt.value, (h) => (d(), p("a", {
                          key: `empty-${h.key}`,
                          href: tl(h.key),
                          class: "library-filter-chip",
                          "aria-label": `${u(t)("library", "Remove filter")}: ${h.label}`,
                          onClick: Se((z) => al(h.key), ["prevent"])
                        }, [
                          r("strong", null, [
                            Q(o(h.label), 1),
                            h.displayValue ? (d(), p(W, { key: 0 }, [
                              Q(":")
                            ], 64)) : T("", !0)
                          ]),
                          h.displayValue ? (d(), p(W, { key: 0 }, [
                            g[124] || (g[124] = Q(o(" "), -1)),
                            r("span", {
                              class: "library-filter-chip-value",
                              title: h.value
                            }, o(h.displayValue), 9, UD)
                          ], 64)) : T("", !0),
                          g[125] || (g[125] = Q()),
                          g[126] || (g[126] = r("span", { "aria-hidden": "true" }, "×", -1))
                        ], 8, MD))), 128))
                      ], 8, FD)) : T("", !0),
                      $t.value ? (d(), p("p", zD, o(u(t)("library", "Try removing {filter}.", { filter: $t.value.displayValue ? `${$t.value.label}: ${$t.value.displayValue}` : $t.value.label })), 1)) : T("", !0),
                      r("p", jD, [
                        kg.value ? (d(), p("a", {
                          key: 0,
                          href: om(),
                          class: "button secondary library-empty-clear-search",
                          onClick: g[96] || (g[96] = Se((h) => al("q"), ["prevent"]))
                        }, o(u(t)("library", "Clear search")), 9, BD)) : T("", !0)
                      ])
                    ], 64)) : (d(), p(W, { key: 3 }, [
                      r("h3", {
                        title: u(t)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                      }, o(u(t)("library", "No catalogue items yet")), 9, HD),
                      r("p", VD, [
                        r("a", {
                          href: Yi.value,
                          class: "button primary"
                        }, o(u(t)("library", "Run a scan from settings")), 9, qD)
                      ])
                    ], 64))
                  ], 2)) : T("", !0),
                  C.value.length > 0 ? (d(), p("section", {
                    key: 5,
                    class: Te(["library-list-selection", { "library-list-selection--active": na.value.length }]),
                    "aria-label": u(t)("library", "Selection")
                  }, [
                    r("div", KD, [
                      r("label", WD, [
                        r("input", {
                          type: "checkbox",
                          checked: na.value.length === C.value.length,
                          onChange: Ng
                        }, null, 40, YD),
                        r("span", {
                          title: u(t)("library", "Select all publications on this page")
                        }, o(u(t)("library", "Select all")), 9, ZD)
                      ]),
                      na.value.length ? (d(), p("span", XD, o(u(yt)("library", "%n publication selected", "%n publications selected", na.value.length)), 1)) : T("", !0),
                      be(ce(hd, {
                        "item-ids": na.value,
                        "request-token": ht.value,
                        "lists-url": Qi.value,
                        "preferred-list-id": u(Tu)
                      }, null, 8, ["item-ids", "request-token", "lists-url", "preferred-list-id"]), [
                        [rr, na.value.length]
                      ]),
                      na.value.length ? be((d(), p("select", {
                        key: 1,
                        "onUpdate:modelValue": g[97] || (g[97] = (h) => Kt.value = h),
                        "aria-label": u(t)("library", "More actions")
                      }, [
                        r("option", QD, o(u(t)("library", "More actions")), 1),
                        r("option", eF, o(u(t)("library", "Add tag")), 1),
                        r("option", tF, o(u(t)("library", "Remove tag")), 1),
                        r("option", aF, o(u(t)("library", "Preview edit")), 1),
                        r("option", iF, o(u(t)("library", "Fresh covers")), 1),
                        r("option", nF, o(u(t)("library", "Reset metadata")), 1)
                      ], 8, JD)), [
                        [tt, Kt.value]
                      ]) : T("", !0)
                    ]),
                    na.value.length && Kt.value ? (d(), p("div", {
                      key: 0,
                      class: "library-selection-action",
                      onSubmitCapture: Rg
                    }, [
                      Kt.value === "tag" ? (d(), p("form", {
                        key: 0,
                        method: "post",
                        action: Ru.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        r("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, lF),
                        r("label", null, [
                          r("span", null, o(u(t)("library", "Add tag")), 1),
                          r("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, sF)
                        ]),
                        r("button", {
                          type: "submit",
                          class: "button primary",
                          title: u(t)("library", "Applies only to the selected publications.")
                        }, o(u(t)("library", "Apply")), 9, oF)
                      ], 8, rF)) : T("", !0),
                      Kt.value === "untag" ? (d(), p("form", {
                        key: 1,
                        method: "post",
                        action: vs.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        r("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, cF),
                        r("label", null, [
                          r("span", null, o(u(t)("library", "Remove tag")), 1),
                          r("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, dF)
                        ]),
                        r("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Removes the tag only from the selected publications.")
                        }, o(u(t)("library", "Remove")), 9, fF)
                      ], 8, uF)) : T("", !0),
                      Kt.value === "reset" ? (d(), p("form", {
                        key: 2,
                        method: "post",
                        action: Iu.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        r("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, pF),
                        (d(!0), p(W, null, oe(ks.value, (h) => (d(), p("input", {
                          key: `reset-${h.key}`,
                          type: "hidden",
                          name: h.key,
                          value: h.value
                        }, null, 8, vF))), 128)),
                        g[127] || (g[127] = r("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        r("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Reset metadata")), 9, bF)
                      ], 8, hF)) : T("", !0),
                      Kt.value === "edit" ? (d(), p("form", {
                        key: 3,
                        method: "post",
                        action: bs.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        r("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, mF),
                        (d(!0), p(W, null, oe(ks.value, (h) => (d(), p("input", {
                          key: `edit-preview-${h.key}`,
                          type: "hidden",
                          name: h.key,
                          value: h.value
                        }, null, 8, yF))), 128)),
                        r("label", null, [
                          r("span", null, o(u(t)("library", "Field")), 1),
                          r("select", _F, [
                            r("option", wF, o(u(t)("library", "Publication type")), 1),
                            r("option", kF, o(u(t)("library", "Subtitle")), 1),
                            r("option", SF, o(u(t)("library", "Creators")), 1),
                            r("option", CF, o(u(t)("library", "Series / periodical")), 1),
                            r("option", TF, o(u(t)("library", "Series")), 1),
                            r("option", AF, o(u(t)("library", "Part in series")), 1),
                            r("option", EF, o(u(t)("library", "Genre")), 1),
                            r("option", $F, o(u(t)("library", "Publication date")), 1),
                            r("option", xF, o(u(t)("library", "Language")), 1),
                            r("option", NF, o(u(t)("library", "Publisher")), 1),
                            r("option", OF, o(u(t)("library", "Subjects")), 1),
                            r("option", RF, o(u(t)("library", "Classifications")), 1)
                          ])
                        ]),
                        r("label", null, [
                          r("span", null, o(u(t)("library", "Value")), 1),
                          r("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: u(t)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, IF)
                        ]),
                        r("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Preview first, then apply from the review page.")
                        }, o(u(t)("library", "Preview edit")), 9, LF)
                      ], 8, gF)) : T("", !0),
                      Kt.value === "covers" ? (d(), p("form", {
                        key: 4,
                        method: "post",
                        action: Hr.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        r("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, DF),
                        (d(!0), p(W, null, oe(ks.value, (h) => (d(), p("input", {
                          key: `cover-${h.key}`,
                          type: "hidden",
                          name: h.key,
                          value: h.value
                        }, null, 8, FF))), 128)),
                        r("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Fresh covers")), 9, MF)
                      ], 8, PF)) : T("", !0),
                      r("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: g[98] || (g[98] = (h) => Kt.value = "")
                      }, o(u(t)("library", "Cancel")), 1)
                    ], 32)) : T("", !0)
                  ], 10, GD)) : T("", !0),
                  Ur.value && (u(Ja) === "building" || Object.values(u(gi)).some((h) => h.status === "partial")) ? (d(), p("p", UF, o(u(t)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : T("", !0),
                  C.value.length > 0 && se.value === "list" ? (d(), p("div", zF, [
                    r("table", jF, [
                      r("caption", BF, o(u(t)("library", "Catalogue list")), 1),
                      r("thead", null, [
                        r("tr", null, [
                          r("th", HF, [
                            r("span", VF, o(u(t)("library", "Selection")), 1)
                          ]),
                          r("th", qF, [
                            r("span", GF, o(u(t)("library", "Cover")), 1)
                          ]),
                          r("th", KF, o(u(t)("library", "Title")), 1),
                          r("th", WF, o(u(t)("library", "Creators")), 1),
                          r("th", YF, o(u(t)("library", "Publication date")), 1),
                          r("th", ZF, o(u(t)("library", "Series")), 1),
                          r("th", XF, o(u(t)("library", "Format")), 1),
                          r("th", JF, o(u(t)("library", "Shelf")), 1),
                          r("th", QF, o(u(t)("library", "Actions")), 1)
                        ])
                      ]),
                      r("tbody", null, [
                        (d(!0), p(W, null, oe(C.value, (h) => (d(), p("tr", {
                          key: h.id,
                          class: Te(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Cs.value.has(Number(h.id)), "library-catalogue-list-row--open": rn.value && Number(Dn.value) === Number(h.id) }])
                        }, [
                          r("td", e6, [
                            r("label", t6, [
                              r("input", {
                                type: "checkbox",
                                checked: Cs.value.has(Number(h.id)),
                                "aria-label": `${u(t)("library", "Select publication")}: ${h.title}`,
                                onChange: (z) => sf(h.id, z.currentTarget.checked)
                              }, null, 40, a6)
                            ])
                          ]),
                          r("td", i6, [
                            r("button", {
                              type: "button",
                              class: "library-catalogue-list-cover",
                              "aria-label": `${u(t)("library", "Details")}: ${h.title}`,
                              onClick: (z) => Ba(h, z)
                            }, [
                              r("img", {
                                src: h.coverUrl,
                                alt: "",
                                loading: "lazy",
                                decoding: "async"
                              }, null, 8, r6)
                            ], 8, n6)
                          ]),
                          r("th", l6, [
                            r("button", {
                              type: "button",
                              class: "library-cover-title-button library-catalogue-list-title",
                              onClick: (z) => Ba(h, z)
                            }, [
                              r("bdi", o6, o(h.title), 1)
                            ], 8, s6),
                            u(gi)[h.id]?.count ? (d(), p("a", {
                              key: 0,
                              class: "library-duplicate-badge",
                              href: `${rt.value}?duplicates=1&bookId=${h.id}`
                            }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(gi)[h.id].count) + o(u(gi)[h.id].status === "partial" ? "+" : ""), 9, u6)) : T("", !0)
                          ]),
                          r("td", c6, [
                            h.creators ? (d(), p("bdi", d6, o(h.displayCreators ?? h.creators), 1)) : (d(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, f6))
                          ]),
                          r("td", null, [
                            h.publicationDate ? (d(), p("time", {
                              key: 0,
                              datetime: h.publicationDate
                            }, o(h.publicationDate), 9, h6)) : (d(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, p6))
                          ]),
                          r("td", null, [
                            h.publication ? (d(), p("bdi", v6, o(h.publication), 1)) : (d(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, b6))
                          ]),
                          r("td", null, [
                            h.extension || h.publicationType ? (d(), p("bdi", {
                              key: 0,
                              class: Te(h.extension ? "library-bidi-machine" : "library-bidi-human"),
                              dir: h.extension ? "ltr" : "auto"
                            }, o(h.extension ? Ls(h.extension) : h.publicationType), 11, g6)) : (d(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, m6))
                          ]),
                          r("td", null, [
                            h.shelf ? (d(), p("bdi", y6, o(h.shelf), 1)) : (d(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, _6))
                          ]),
                          r("td", w6, [
                            r("a", {
                              class: "button primary",
                              href: h.openUrl,
                              onClick: (z) => mi(h, z)
                            }, o(u(t)("library", "Open")), 9, k6),
                            r("button", {
                              type: "button",
                              class: "button secondary",
                              onClick: (z) => Ba(h, z)
                            }, o(u(t)("library", "Details")), 9, S6)
                          ])
                        ], 2))), 128))
                      ])
                    ])
                  ])) : C.value.length > 0 ? (d(), p("div", {
                    key: 8,
                    class: Te(["library-cover-gallery", Ie.value])
                  }, [
                    (d(!0), p(W, null, oe(C.value, (h) => (d(), p("article", {
                      key: h.id,
                      class: Te(["library-cover-card", { "library-cover-card--selected": Cs.value.has(Number(h.id)), "library-cover-card--open": rn.value && Number(Dn.value) === Number(h.id) }])
                    }, [
                      r("label", C6, [
                        r("input", {
                          type: "checkbox",
                          checked: Cs.value.has(Number(h.id)),
                          "aria-label": `${u(t)("library", "Select publication")}: ${h.title}`,
                          onChange: (z) => sf(h.id, z.currentTarget.checked)
                        }, null, 40, T6)
                      ]),
                      r("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-labelledby": `library-details-action-${h.id} library-card-title-${h.id}`,
                        "aria-expanded": rn.value && Number(Dn.value) === Number(h.id) ? "true" : "false",
                        onClick: (z) => Ba(h, z)
                      }, [
                        r("span", {
                          id: `library-details-action-${h.id}`,
                          class: "hidden-visually"
                        }, o(u(t)("library", "Details")), 9, E6),
                        ce(ef, {
                          src: h.coverUrl
                        }, null, 8, ["src"])
                      ], 8, A6),
                      r("form", {
                        method: "post",
                        action: h.starUrl,
                        class: "library-cover-star-form",
                        onSubmit: Se((z) => zf(h, z), ["prevent"])
                      }, [
                        r("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ht.value
                        }, null, 8, x6),
                        g[128] || (g[128] = r("input", {
                          type: "hidden",
                          name: "returnTo",
                          value: "catalogue"
                        }, null, -1)),
                        r("input", {
                          type: "hidden",
                          name: "starred",
                          value: h.starred ? "0" : "1"
                        }, null, 8, N6),
                        r("button", {
                          type: "submit",
                          class: Te(["library-cover-star-button", { "library-cover-star-button--starred": h.starred }]),
                          "aria-pressed": h.starred ? "true" : "false",
                          title: h.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-label": h.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-busy": il[h.id] ? "true" : void 0,
                          disabled: il[h.id],
                          onClick: Se((z) => zf(h, z), ["prevent"])
                        }, o(h.starred ? "★" : "☆"), 11, O6),
                        nl[h.id] ? (d(), p("span", {
                          key: 0,
                          "data-library-star-error": h.id,
                          class: "library-star-feedback",
                          role: "alert"
                        }, o(nl[h.id]), 9, R6)) : T("", !0)
                      ], 40, $6),
                      r("div", I6, [
                        r("div", L6, [
                          u(gi)[h.id]?.count ? (d(), p("a", {
                            key: 0,
                            class: "library-duplicate-badge",
                            href: `${rt.value}?duplicates=1&bookId=${h.id}`
                          }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(gi)[h.id].count) + o(u(gi)[h.id].status === "partial" ? "+" : ""), 9, P6)) : T("", !0),
                          r("h3", {
                            id: `library-card-title-${h.id}`
                          }, [
                            r("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (z) => Ba(h, z)
                            }, [
                              r("bdi", M6, o(h.title), 1)
                            ], 8, F6)
                          ], 8, D6),
                          h.creators ? (d(), p("p", U6, [
                            r("bdi", z6, o(h.displayCreators ?? h.creators), 1)
                          ])) : T("", !0),
                          Ff(h) ? (d(), p("p", j6, [
                            r("bdi", B6, o(Ff(h)), 1)
                          ])) : T("", !0)
                        ])
                      ])
                    ], 2))), 128))
                  ], 2)) : T("", !0),
                  C.value.length > 0 ? (d(), p("nav", {
                    key: 9,
                    class: "library-pagination library-pagination--bottom",
                    "aria-label": u(t)("library", "Catalogue pagination")
                  }, [
                    r("span", V6, [
                      Q(o(u(t)("library", "Page")) + " " + o(te.value.page), 1),
                      te.value.total > 0 ? (d(), p("span", q6, " · " + o(te.value.from) + "–" + o(te.value.to), 1)) : T("", !0)
                    ]),
                    te.value.previousUrl ? (d(), p("a", {
                      key: 0,
                      href: te.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, G6)) : (d(), p("span", K6, o(u(t)("library", "Previous")), 1)),
                    te.value.nextUrl ? (d(), p("a", {
                      key: 2,
                      href: te.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, W6)) : (d(), p("span", Y6, o(u(t)("library", "Next")), 1))
                  ], 8, H6)) : T("", !0)
                ], 10, B8))
              ], 64))
            ], 8, AL)
          ]),
          _: 1
        }),
        ce(u(W2), {
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
            r("div", Z6, [
              r("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: of,
                class: "hidden-visually",
                tabindex: "-1"
              }, o(Ce.value?.title || u(t)("library", "Publication details")), 513),
              ra.loading && !Ce.value ? (d(), p("p", X6, o(u(t)("library", "Loading publication details…")), 1)) : ra.error ? (d(), p("div", {
                key: 1,
                class: "library-sidebar-state",
                role: ra.missing ? "status" : "alert"
              }, [
                r("p", null, o(ra.error), 1),
                ra.missing ? T("", !0) : (d(), p("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: g[99] || (g[99] = (h) => Wr(Dn.value, { historyMode: "none" }))
                }, o(u(t)("library", "Try again")), 1))
              ], 8, J6)) : Ce.value ? (d(), p(W, { key: 2 }, [
                r("p", Q6, o(u(t)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                r("div", eM, [
                  r("span", tM, o(u(t)("library", "Cover for")), 1),
                  r("img", {
                    class: "library-detail-drawer-cover",
                    src: Ce.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy",
                    decoding: "async"
                  }, null, 8, aM),
                  r("div", iM, [
                    r("p", nM, [
                      r("bdi", rM, o(Ce.value.publicationType || u(t)("library", "Publication")), 1),
                      Ce.value.extension ? (d(), p("span", lM, [
                        g[129] || (g[129] = Q(" · ", -1)),
                        r("bdi", sM, o(Ls(Ce.value.extension)), 1)
                      ])) : T("", !0)
                    ]),
                    r("div", oM, [
                      r("a", {
                        class: "button primary",
                        href: Ce.value.openUrl,
                        onClick: g[100] || (g[100] = (h) => mi(Ce.value, h))
                      }, o(u(t)("library", "Open")), 9, uM),
                      ce(u(Gd), {
                        "aria-label": u(t)("library", "File and maintenance actions")
                      }, {
                        default: ke(() => [
                          ce(u(Ic), {
                            href: Ce.value.filesUrl
                          }, {
                            default: ke(() => [
                              Q(o(u(t)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ce(u(Ic), {
                            href: Ce.value.downloadUrl
                          }, {
                            default: ke(() => [
                              Q(o(u(t)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ce(u(Ic), {
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
                (d(), Pe(hd, {
                  key: Ce.value.id,
                  "item-ids": [Number(Ce.value.id)],
                  "request-token": ht.value,
                  "lists-url": Qi.value
                }, null, 8, ["item-ids", "request-token", "lists-url"])),
                r("nav", {
                  class: "library-sidebar-sections",
                  "aria-label": u(t)("library", "Publication detail sections")
                }, [
                  (d(), p(W, null, oe(Lg, (h) => r("button", {
                    key: h.key,
                    type: "button",
                    class: Te({ active: Fn.value === h.key }),
                    "aria-current": Fn.value === h.key ? "page" : void 0,
                    onClick: (z) => Fn.value = h.key
                  }, o(u(t)("library", h.label)), 11, dM)), 64))
                ], 8, cM),
                Fn.value === "overview" ? (d(), p("section", fM, [
                  r("h3", hM, o(u(t)("library", "Overview")), 1),
                  uf.value ? (d(), p("p", pM, [
                    r("bdi", vM, o(uf.value), 1)
                  ])) : T("", !0),
                  r("dl", bM, [
                    Ce.value.publication ? (d(), p("div", gM, [
                      r("dt", null, o(u(t)("library", "Series")), 1),
                      r("dd", null, [
                        r("a", {
                          class: "library-detail-facet-link",
                          href: $s("publication", Ce.value.publication),
                          title: u(t)("library", "Filter catalogue by this series"),
                          onClick: g[101] || (g[101] = (h) => xs(h, "publication", Ce.value.publication))
                        }, [
                          r("bdi", yM, o(Ce.value.publication), 1)
                        ], 8, mM)
                      ])
                    ])) : T("", !0),
                    Ce.value.publicationDate ? (d(), p("div", _M, [
                      r("dt", null, o(u(t)("library", "Date")), 1),
                      r("dd", null, [
                        zn.value ? (d(), p("a", {
                          key: 0,
                          class: "library-detail-facet-link",
                          href: $s("year", zn.value),
                          title: u(t)("library", "Filter catalogue by this publication year"),
                          onClick: g[102] || (g[102] = (h) => xs(h, "year", zn.value))
                        }, o(zn.value), 9, wM)) : T("", !0),
                        zn.value && Ce.value.publicationDate !== zn.value ? (d(), p("span", kM, " · ")) : T("", !0),
                        Ce.value.publicationDate !== zn.value ? (d(), p("span", SM, o(Ce.value.publicationDate), 1)) : T("", !0)
                      ])
                    ])) : T("", !0),
                    Ce.value.publisher ? (d(), p("div", CM, [
                      r("dt", null, o(u(t)("library", "Publisher")), 1),
                      r("dd", null, [
                        r("a", {
                          class: "library-detail-facet-link",
                          href: $s("publisher", Ce.value.publisher),
                          title: u(t)("library", "Filter catalogue by this publisher"),
                          onClick: g[103] || (g[103] = (h) => xs(h, "publisher", Ce.value.publisher))
                        }, [
                          r("bdi", AM, o(Ce.value.publisher), 1)
                        ], 8, TM)
                      ])
                    ])) : T("", !0),
                    cf.value.length ? (d(), p("div", EM, [
                      r("dt", null, o(u(t)("library", "Language")), 1),
                      r("dd", $M, [
                        (d(!0), p(W, null, oe(cf.value, (h) => (d(), p("a", {
                          key: h,
                          class: "library-detail-facet-link",
                          href: $s("language", h),
                          title: u(t)("library", "Filter catalogue by this language"),
                          onClick: (z) => xs(z, "language", h)
                        }, [
                          r("bdi", NM, o(h), 1)
                        ], 8, xM))), 128))
                      ])
                    ])) : T("", !0),
                    Ce.value.shelf ? (d(), p("div", OM, [
                      r("dt", null, o(u(t)("library", "Shelf")), 1),
                      r("dd", null, o(Ce.value.shelf), 1)
                    ])) : T("", !0)
                  ])
                ])) : Fn.value === "metadata" ? (d(), p("section", RM, [
                  Ur.value ? (d(), Pe(bg, {
                    key: `${Ce.value.id}:${Ce.value.title}:${Ce.value.creators}`,
                    "item-id": Number(Ce.value.id),
                    "request-token": ht.value
                  }, null, 8, ["item-id", "request-token"])) : T("", !0),
                  r("h3", IM, o(u(t)("library", "Metadata")), 1),
                  r("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Se(jg, ["prevent"])
                  }, [
                    r("label", null, [
                      Q(o(u(t)("library", "Title")), 1),
                      be(r("input", {
                        "onUpdate:modelValue": g[104] || (g[104] = (h) => mt.title = h),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [Me, mt.title]
                      ])
                    ]),
                    r("label", null, [
                      ce(Be, {
                        text: u(t)("library", "Book series name, stored separately from the existing Publication field.")
                      }, {
                        default: ke(() => [
                          Q(o(u(t)("library", "Series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      be(r("input", {
                        "onUpdate:modelValue": g[105] || (g[105] = (h) => mt.series = h),
                        name: "series",
                        maxlength: "255"
                      }, null, 512), [
                        [Me, mt.series]
                      ])
                    ]),
                    r("label", null, [
                      ce(Be, {
                        text: u(t)("library", "Text such as 01, 2.5 or Volume II. Leading zeros and labels are preserved.")
                      }, {
                        default: ke(() => [
                          Q(o(u(t)("library", "Part in series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      be(r("input", {
                        "onUpdate:modelValue": g[106] || (g[106] = (h) => mt.seriesNumber = h),
                        name: "seriesNumber",
                        maxlength: "64"
                      }, null, 512), [
                        [Me, mt.seriesNumber]
                      ])
                    ]),
                    r("label", null, [
                      ce(Be, {
                        text: u(t)("library", "A genre label such as Science fiction. Separate from subjects, file format and publication type.")
                      }, {
                        default: ke(() => [
                          Q(o(u(t)("library", "Genre")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      be(r("input", {
                        "onUpdate:modelValue": g[107] || (g[107] = (h) => mt.genre = h),
                        name: "genre",
                        maxlength: "255"
                      }, null, 512), [
                        [Me, mt.genre]
                      ])
                    ]),
                    r("label", null, [
                      Q(o(u(t)("library", "Publication date")), 1),
                      be(r("input", {
                        "onUpdate:modelValue": g[108] || (g[108] = (h) => mt.publicationDate = h),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: u(t)("library", "e.g. 2026")
                      }, null, 8, LM), [
                        [Me, mt.publicationDate]
                      ])
                    ]),
                    r("fieldset", null, [
                      r("legend", null, o(u(t)("library", "Identifiers")), 1),
                      (d(!0), p(W, null, oe(mt.identifiers, (h, z) => (d(), p("div", {
                        key: z,
                        class: "library-sidebar-identifier"
                      }, [
                        be(r("input", {
                          "onUpdate:modelValue": (he) => h.scheme = he,
                          "aria-label": u(t)("library", "Identifier type"),
                          placeholder: u(t)("library", "Identifier type")
                        }, null, 8, PM), [
                          [Me, h.scheme]
                        ]),
                        be(r("input", {
                          "onUpdate:modelValue": (he) => h.displayValue = he,
                          "aria-label": u(t)("library", "Identifier value")
                        }, null, 8, DM), [
                          [Me, h.displayValue]
                        ]),
                        r("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (he) => zg(z)
                        }, o(u(t)("library", "Remove")), 9, FM)
                      ]))), 128)),
                      r("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Ug
                      }, o(u(t)("library", "Add identifier")), 1)
                    ]),
                    ce(Be, {
                      text: u(t)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")
                    }, {
                      default: ke(() => [
                        Q(o(u(t)("library", "Maintenance")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"]),
                    ja.error ? (d(), p("p", MM, o(ja.error), 1)) : ja.saved ? (d(), p("p", UM, o(u(t)("library", "Metadata saved.")), 1)) : T("", !0),
                    r("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: ja.saving
                    }, o(ja.saving ? u(t)("library", "Saving…") : u(t)("library", "Save metadata")), 9, zM)
                  ], 32),
                  Ns(Ce.value).length ? (d(), p("section", jM, [
                    r("h4", BM, [
                      ce(Be, {
                        text: u(t)("library", "Suggestions are optional and never replace your edits automatically.")
                      }, {
                        default: ke(() => [
                          Q(o(u(t)("library", "Scanner suggestions")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    r("dl", null, [
                      (d(!0), p(W, null, oe(Ns(Ce.value), (h) => (d(), p("div", {
                        key: h.field
                      }, [
                        r("dt", null, o(h.field) + " · " + o(h.sourceProvenance), 1),
                        r("dd", null, [
                          Q(o(u(t)("library", "Current")) + ": " + o(h.currentValue || "—"), 1),
                          g[130] || (g[130] = r("br", null, null, -1)),
                          Q(o(u(t)("library", "Suggestion")) + ": " + o(h.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : T("", !0)
                ])) : (d(), p("section", HM, [
                  r("h3", VM, o(u(t)("library", "Activity")), 1),
                  r("dl", qM, [
                    r("div", null, [
                      r("dt", null, o(u(t)("library", "Scan status")), 1),
                      r("dd", null, o(Ce.value.scanStatus || "—"), 1)
                    ]),
                    Ce.value.workflowStatus ? (d(), p("div", GM, [
                      r("dt", null, o(u(t)("library", "Workflow")), 1),
                      r("dd", null, o(Ce.value.workflowStatus), 1)
                    ])) : T("", !0),
                    Ce.value.metadataSource ? (d(), p("div", KM, [
                      r("dt", null, o(u(t)("library", "Metadata source")), 1),
                      r("dd", null, o(Ce.value.metadataSource), 1)
                    ])) : T("", !0),
                    Ce.value.cachedPath ? (d(), p("div", WM, [
                      r("dt", null, o(u(t)("library", "File")), 1),
                      r("dd", YM, [
                        Ce.value.openUrl ? (d(), p("a", {
                          key: 0,
                          href: Ce.value.openUrl,
                          onClick: g[109] || (g[109] = (h) => mi(Ce.value, h))
                        }, [
                          r("bdi", XM, o(Ce.value.cachedPath), 1)
                        ], 8, ZM)) : (d(), p("bdi", JM, o(Ce.value.cachedPath), 1))
                      ])
                    ])) : T("", !0)
                  ])
                ])),
                Ce.value.canonicalAuthors?.length ? (d(), p("nav", {
                  key: 3,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Authors")
                }, [
                  (d(!0), p(W, null, oe(Ce.value.canonicalAuthors, (h) => (d(), p("a", {
                    key: h.id,
                    class: "button secondary",
                    href: `${w.generateUrl("/apps/library/")}?authors=1&authorId=${h.id}`
                  }, [
                    r("bdi", tU, o(h.name), 1)
                  ], 8, eU))), 128))
                ], 8, QM)) : Ce.value.authors?.length ? (d(), p("nav", {
                  key: 4,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Creators")
                }, [
                  (d(!0), p(W, null, oe(Ce.value.authors, (h) => (d(), p("a", {
                    key: h,
                    class: "button secondary",
                    href: gm(h)
                  }, [
                    r("bdi", nU, o(h), 1)
                  ], 8, iU))), 128))
                ], 8, aU)) : T("", !0),
                Ce.value.canonicalSeries?.length ? (d(), p("nav", {
                  key: 5,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Series")
                }, [
                  (d(!0), p(W, null, oe(Ce.value.canonicalSeries, (h) => (d(), p("a", {
                    key: h.id,
                    class: "button secondary",
                    href: `${w.generateUrl("/apps/library/")}?series=1&seriesId=${h.id}`
                  }, [
                    r("bdi", sU, [
                      Q(o(h.name), 1),
                      h.part ? (d(), p(W, { key: 0 }, [
                        Q(" · " + o(h.part), 1)
                      ], 64)) : T("", !0)
                    ])
                  ], 8, lU))), 128))
                ], 8, rU)) : T("", !0),
                r("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": u(t)("library", "Browse neighbouring items")
                }, [
                  r("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !As.value,
                    onClick: g[110] || (g[110] = (h) => Os(As.value))
                  }, o(u(t)("library", "Previous item")), 9, uU),
                  r("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Es.value,
                    onClick: g[111] || (g[111] = (h) => Os(Es.value))
                  }, o(u(t)("library", "Next item")), 9, cU)
                ], 8, oU)
              ], 64)) : T("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function vU() {
  window.LibraryStartupWatchdog?.fail();
}
function bU(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = po("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !bU(e))
    throw new Error("Library startup prerequisites are unavailable");
  const a = {
    ...e,
    duplicateSuggestions: po("library", "duplicateSuggestions", !1),
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  a_(pU, { state: a }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  vU(), console.error("[library] Vue startup failed", e);
}
