// @__NO_SIDE_EFFECTS__
function Pu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const i of e.split(",")) t[i] = 1;
  return (i) => i in t;
}
const qe = {}, Qa = [], Ci = () => {
}, Hp = () => !1, Al = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ol = (e) => e.startsWith("onUpdate:"), _t = Object.assign, $u = (e, t) => {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}, gb = Object.prototype.hasOwnProperty, Ze = (e, t) => gb.call(e, t), Oe = Array.isArray, Kn = (e) => No(e) === "[object Map]", Ia = (e) => No(e) === "[object Set]", Zd = (e) => No(e) === "[object Date]", Fe = (e) => typeof e == "function", ct = (e) => typeof e == "string", Pi = (e) => typeof e == "symbol", Je = (e) => e !== null && typeof e == "object", Vp = (e) => (Je(e) || Fe(e)) && Fe(e.then) && Fe(e.catch), Kp = Object.prototype.toString, No = (e) => Kp.call(e), bb = (e) => No(e).slice(8, -1), Gp = (e) => No(e) === "[object Object]", Fu = (e) => ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Yr = /* @__PURE__ */ Pu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), xl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((i) => t[i] || (t[i] = e(i)));
}, mb = /-\w/g, qt = xl(
  (e) => e.replace(mb, (t) => t.slice(1).toUpperCase())
), yb = /\B([A-Z])/g, Cn = xl(
  (e) => e.replace(yb, "-$1").toLowerCase()
), Nl = xl((e) => e.charAt(0).toUpperCase() + e.slice(1)), vc = xl(
  (e) => e ? `on${Nl(e)}` : ""
), Nt = (e, t) => !Object.is(e, t), Ss = (e, ...t) => {
  for (let i = 0; i < e.length; i++)
    e[i](...t);
}, qp = (e, t, i, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: i
  });
}, Ll = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, _b = (e) => {
  const t = ct(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Jd;
const Rl = () => Jd || (Jd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function hi(e) {
  if (Oe(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const n = e[i], a = ct(n) ? Tb(n) : hi(n);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (ct(e) || Je(e))
    return e;
}
const wb = /;(?![^(]*\))/g, Sb = /:([^]+)/, Cb = /\/\*[^]*?\*\//g;
function Tb(e) {
  const t = {};
  return e.replace(Cb, "").split(wb).forEach((i) => {
    if (i) {
      const n = i.split(Sb);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ge(e) {
  let t = "";
  if (ct(e))
    t = e;
  else if (Oe(e))
    for (let i = 0; i < e.length; i++) {
      const n = ge(e[i]);
      n && (t += n + " ");
    }
  else if (Je(e))
    for (const i in e)
      e[i] && (t += i + " ");
  return t.trim();
}
function As(e) {
  if (!e) return null;
  let { class: t, style: i } = e;
  return t && !ct(t) && (e.class = ge(t)), i && (e.style = hi(i)), e;
}
const kb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Eb = /* @__PURE__ */ Pu(kb);
function Wp(e) {
  return !!e || e === "";
}
function Ab(e, t) {
  if (e.length !== t.length) return !1;
  let i = !0;
  for (let n = 0; i && n < e.length; n++)
    i = Yn(e[n], t[n]);
  return i;
}
function Qd(e, t) {
  if (e.size !== t.size) return !1;
  const i = Array.from(t), n = new Uint8Array(i.length);
  for (const a of e) {
    let r = -1;
    for (let o = 0; o < i.length; o++)
      if (!n[o] && Yn(a, i[o])) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    n[r] = 1;
  }
  return !0;
}
function Yn(e, t) {
  if (e === t) return !0;
  let i = Zd(e), n = Zd(t);
  if (i || n)
    return i && n ? e.getTime() === t.getTime() : !1;
  if (i = Pi(e), n = Pi(t), i || n)
    return e === t;
  if (i = Oe(e), n = Oe(t), i || n)
    return i && n ? Ab(e, t) : !1;
  if (i = Je(e), n = Je(t), i || n) {
    if (!i || !n)
      return !1;
    if (i = Kn(e), n = Kn(t), i || n || (i = Ia(e), n = Ia(t), i || n))
      return i && n ? Qd(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const o in e) {
      const c = e.hasOwnProperty(o), u = t.hasOwnProperty(o);
      if (c && !u || !c && u || !Yn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ob(e, t) {
  return e.findIndex((i) => Yn(i, t));
}
const Yp = (e) => !!(e && e.__v_isRef === !0), v = (e) => ct(e) ? e : e == null ? "" : Oe(e) || Je(e) && (e.toString === Kp || !Fe(e.toString)) ? Yp(e) ? v(e.value) : JSON.stringify(e, Xp, 2) : String(e), Xp = (e, t) => Yp(t) ? Xp(e, t.value) : Kn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (i, [n, a], r) => (i[gc(n, r) + " =>"] = a, i),
    {}
  )
} : Ia(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((i) => gc(i))
} : Pi(t) ? gc(t) : Je(t) && !Oe(t) && !Gp(t) ? String(t) : t, gc = (e, t = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pi(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e
  );
};
function xb(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Ot;
class Nb {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ot && (Ot.active ? (this.parent = Ot, this.index = (Ot.scopes || (Ot.scopes = [])).push(
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
      const i = Ot;
      try {
        return Ot = this, t();
      } finally {
        Ot = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ot, Ot = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ot === this)
        Ot = this.prevScope;
      else {
        let t = Ot;
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
function Lb() {
  return Ot;
}
let lt;
const bc = /* @__PURE__ */ new WeakSet();
class Zp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ot && (Ot.active ? Ot.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, bc.has(this) && (bc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Qp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ef(this), eh(this);
    const t = lt, i = Ri;
    lt = this, Ri = !0;
    try {
      return this.fn();
    } finally {
      th(this), lt = t, Ri = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        zu(t);
      this.deps = this.depsTail = void 0, ef(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? bc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    tu(this) && this.run();
  }
  get dirty() {
    return tu(this);
  }
}
let Jp = 0, Xr, Zr;
function Qp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Zr, Zr = e;
    return;
  }
  e.next = Xr, Xr = e;
}
function Du() {
  Jp++;
}
function Mu() {
  if (--Jp > 0)
    return;
  if (Zr) {
    let t = Zr;
    for (Zr = void 0; t; ) {
      const i = t.next;
      t.next = void 0, t.flags &= -9, t = i;
    }
  }
  let e;
  for (; Xr; ) {
    let t = Xr;
    for (Xr = void 0; t; ) {
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
function eh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function th(e) {
  let t, i = e.depsTail, n = i;
  for (; n; ) {
    const a = n.prevDep;
    n.version === -1 ? (n === i && (i = a), zu(n), Rb(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = a;
  }
  e.deps = t, e.depsTail = i;
}
function tu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ih(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ih(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === fo) || (e.globalVersion = fo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !tu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, i = lt, n = Ri;
  lt = e, Ri = !0;
  try {
    eh(e);
    const a = e.fn(e._value);
    (t.version === 0 || Nt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    lt = i, Ri = n, th(e), e.flags &= -3;
  }
}
function zu(e, t = !1) {
  const { dep: i, prevSub: n, nextSub: a } = e;
  if (n && (n.nextSub = a, e.prevSub = void 0), a && (a.prevSub = n, e.nextSub = void 0), i.subs === e && (i.subs = n, !n && i.computed)) {
    i.computed.flags &= -5;
    for (let r = i.computed.deps; r; r = r.nextDep)
      zu(r, !0);
  }
  !t && !--i.sc && i.map && i.map.delete(i.key);
}
function Rb(e) {
  const { prevDep: t, nextDep: i } = e;
  t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
}
let Ri = !0;
const nh = [];
function yn() {
  nh.push(Ri), Ri = !1;
}
function _n() {
  const e = nh.pop();
  Ri = e === void 0 ? !0 : e;
}
function ef(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const i = lt;
    lt = void 0;
    try {
      t();
    } finally {
      lt = i;
    }
  }
}
let fo = 0;
class Ib {
  constructor(t, i) {
    this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Il {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!lt || !Ri || lt === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== lt)
      i = this.activeLink = new Ib(lt, this), lt.deps ? (i.prevDep = lt.depsTail, lt.depsTail.nextDep = i, lt.depsTail = i) : lt.deps = lt.depsTail = i, ah(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const n = i.nextDep;
      n.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = n), i.prevDep = lt.depsTail, i.nextDep = void 0, lt.depsTail.nextDep = i, lt.depsTail = i, lt.deps === i && (lt.deps = n);
    }
    return i;
  }
  trigger(t) {
    this.version++, fo++, this.notify(t);
  }
  notify(t) {
    Du();
    try {
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      Mu();
    }
  }
}
function ah(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        ah(n);
    }
    const i = e.dep.subs;
    i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
  }
}
const iu = /* @__PURE__ */ new WeakMap(), Na = /* @__PURE__ */ Symbol(
  ""
), nu = /* @__PURE__ */ Symbol(
  ""
), po = /* @__PURE__ */ Symbol(
  ""
);
function Vt(e, t, i) {
  if (Ri && lt) {
    let n = iu.get(e);
    n || iu.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(i);
    a || (n.set(i, a = new Il()), a.map = n, a.key = i), a.track();
  }
}
function fn(e, t, i, n, a, r) {
  const o = iu.get(e);
  if (!o) {
    fo++;
    return;
  }
  const c = (u) => {
    u && u.trigger();
  };
  if (Du(), t === "clear")
    o.forEach(c);
  else {
    const u = Oe(e), h = u && Fu(i);
    if (u && i === "length") {
      const f = Number(n);
      o.forEach((y, C) => {
        (C === "length" || C === po || !Pi(C) && C >= f) && c(y);
      });
    } else
      switch ((i !== void 0 || o.has(void 0)) && c(o.get(i)), h && c(o.get(po)), t) {
        case "add":
          u ? h && c(o.get("length")) : (c(o.get(Na)), Kn(e) && c(o.get(nu)));
          break;
        case "delete":
          u || (c(o.get(Na)), Kn(e) && c(o.get(nu)));
          break;
        case "set":
          Kn(e) && c(o.get(Na));
          break;
      }
  }
  Mu();
}
function Ga(e) {
  const t = /* @__PURE__ */ Ye(e);
  return t === e ? t : (Vt(t, "iterate", po), /* @__PURE__ */ Ti(e) ? t : t.map($i));
}
function Pl(e) {
  return Vt(e = /* @__PURE__ */ Ye(e), "iterate", po), e;
}
function qi(e, t) {
  return /* @__PURE__ */ wn(e) ? sr(/* @__PURE__ */ La(e) ? $i(t) : t) : $i(t);
}
const Pb = {
  __proto__: null,
  [Symbol.iterator]() {
    return mc(this, Symbol.iterator, (e) => qi(this, e));
  },
  concat(...e) {
    return Ga(this).concat(
      ...e.map((t) => Oe(t) ? Ga(t) : t)
    );
  },
  entries() {
    return mc(this, "entries", (e) => (e[1] = qi(this, e[1]), e));
  },
  every(e, t) {
    return rn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return rn(
      this,
      "filter",
      e,
      t,
      (i) => i.map((n) => qi(this, n)),
      arguments
    );
  },
  find(e, t) {
    return rn(
      this,
      "find",
      e,
      t,
      (i) => qi(this, i),
      arguments
    );
  },
  findIndex(e, t) {
    return rn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return rn(
      this,
      "findLast",
      e,
      t,
      (i) => qi(this, i),
      arguments
    );
  },
  findLastIndex(e, t) {
    return rn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return rn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return yc(this, "includes", e);
  },
  indexOf(...e) {
    return yc(this, "indexOf", e);
  },
  join(e) {
    return Ga(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return yc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return rn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ir(this, "pop");
  },
  push(...e) {
    return Ir(this, "push", e);
  },
  reduce(e, ...t) {
    return tf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return tf(this, "reduceRight", e, t);
  },
  shift() {
    return Ir(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return rn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ir(this, "splice", e);
  },
  toReversed() {
    return Ga(this).toReversed();
  },
  toSorted(e) {
    return Ga(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ga(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ir(this, "unshift", e);
  },
  values() {
    return mc(this, "values", (e) => qi(this, e));
  }
};
function mc(e, t, i) {
  const n = Pl(e), a = n[t]();
  return n !== e && !/* @__PURE__ */ Ti(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = i(r.value)), r;
  }), a;
}
const $b = Array.prototype;
function rn(e, t, i, n, a, r) {
  const o = Pl(e), c = o !== e && !/* @__PURE__ */ Ti(e), u = o[t];
  if (u !== $b[t]) {
    const y = u.apply(e, r);
    return c ? $i(y) : y;
  }
  let h = i;
  o !== e && (c ? h = function(y, C) {
    return i.call(this, qi(e, y), C, e);
  } : i.length > 2 && (h = function(y, C) {
    return i.call(this, y, C, e);
  }));
  const f = u.call(o, h, n);
  return c && a ? a(f) : f;
}
function tf(e, t, i, n) {
  const a = Pl(e), r = a !== e && !/* @__PURE__ */ Ti(e);
  let o = i, c = !1;
  a !== e && (r ? (c = n.length === 0, o = function(h, f, y) {
    return c && (c = !1, h = qi(e, h)), i.call(this, h, qi(e, f), y, e);
  }) : i.length > 3 && (o = function(h, f, y) {
    return i.call(this, h, f, y, e);
  }));
  const u = a[t](o, ...n);
  return c ? qi(e, u) : u;
}
function yc(e, t, i) {
  const n = /* @__PURE__ */ Ye(e);
  Vt(n, "iterate", po);
  const a = n[t](...i);
  return (a === -1 || a === !1) && /* @__PURE__ */ Bu(i[0]) ? (i[0] = /* @__PURE__ */ Ye(i[0]), n[t](...i)) : a;
}
function Ir(e, t, i = []) {
  yn(), Du();
  const n = (/* @__PURE__ */ Ye(e))[t].apply(e, i);
  return Mu(), _n(), n;
}
const Fb = /* @__PURE__ */ Pu("__proto__,__v_isRef,__isVue"), rh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pi)
);
function Db(e) {
  Pi(e) || (e = String(e));
  const t = /* @__PURE__ */ Ye(this);
  return Vt(t, "has", e), t.hasOwnProperty(e);
}
class oh {
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
      return n === (a ? r ? qb : uh : r ? ch : lh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = Oe(t);
    if (!a) {
      let u;
      if (o && (u = Pb[i]))
        return u;
      if (i === "hasOwnProperty")
        return Db;
    }
    const c = Reflect.get(
      t,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Wt(t) ? t : n
    );
    if ((Pi(i) ? rh.has(i) : Fb(i)) || (a || Vt(t, "get", i), r))
      return c;
    if (/* @__PURE__ */ Wt(c)) {
      const u = o && Fu(i) ? c : c.value;
      return a && Je(u) ? /* @__PURE__ */ ho(u) : u;
    }
    return Je(c) ? a ? /* @__PURE__ */ ho(c) : /* @__PURE__ */ xt(c) : c;
  }
}
class sh extends oh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, i, n, a) {
    let r = t[i];
    const o = Oe(t) && Fu(i);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ wn(r);
      if (!/* @__PURE__ */ Ti(n) && !/* @__PURE__ */ wn(n) && (r = /* @__PURE__ */ Ye(r), n = /* @__PURE__ */ Ye(n)), !o && /* @__PURE__ */ Wt(r) && !/* @__PURE__ */ Wt(n))
        return h || (r.value = n), !0;
    }
    const c = o ? Number(i) < t.length : Ze(t, i), u = Reflect.set(
      t,
      i,
      n,
      /* @__PURE__ */ Wt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ye(a) && u && (c ? Nt(n, r) && fn(t, "set", i, n) : fn(t, "add", i, n)), u;
  }
  deleteProperty(t, i) {
    const n = Ze(t, i);
    t[i];
    const a = Reflect.deleteProperty(t, i);
    return a && n && fn(t, "delete", i, void 0), a;
  }
  has(t, i) {
    const n = Reflect.has(t, i);
    return (!Pi(i) || !rh.has(i)) && Vt(t, "has", i), n;
  }
  ownKeys(t) {
    return Vt(
      t,
      "iterate",
      Oe(t) ? "length" : Na
    ), Reflect.ownKeys(t);
  }
}
class Mb extends oh {
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
const zb = /* @__PURE__ */ new sh(), Ub = /* @__PURE__ */ new Mb(), jb = /* @__PURE__ */ new sh(!0);
const au = (e) => e, ls = (e) => Reflect.getPrototypeOf(e);
function Bb(e, t, i) {
  return function(...n) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ye(a), o = Kn(r), c = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, h = a[e](...n), f = i ? au : t ? sr : $i;
    return !t && Vt(
      r,
      "iterate",
      u ? nu : Na
    ), _t(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: y, done: C } = h.next();
          return C ? { value: y, done: C } : {
            value: c ? [f(y[0]), f(y[1])] : f(y),
            done: C
          };
        }
      }
    );
  };
}
function cs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Hb(e, t) {
  const i = {
    get(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), c = /* @__PURE__ */ Ye(a);
      e || (Nt(a, c) && Vt(o, "get", a), Vt(o, "get", c));
      const { has: u } = ls(o), h = t ? au : e ? sr : $i;
      if (u.call(o, a))
        return h(r.get(a));
      if (u.call(o, c))
        return h(r.get(c));
      r !== o && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Vt(/* @__PURE__ */ Ye(a), "iterate", Na), a.size;
    },
    has(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), c = /* @__PURE__ */ Ye(a);
      return e || (Nt(a, c) && Vt(o, "has", a), Vt(o, "has", c)), a === c ? r.has(a) : r.has(a) || r.has(c);
    },
    forEach(a, r) {
      const o = this, c = o.__v_raw, u = /* @__PURE__ */ Ye(c), h = t ? au : e ? sr : $i;
      return !e && Vt(u, "iterate", Na), c.forEach((f, y) => a.call(r, h(f), h(y), o));
    }
  };
  return _t(
    i,
    e ? {
      add: cs("add"),
      set: cs("set"),
      delete: cs("delete"),
      clear: cs("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ye(this), o = ls(r), c = /* @__PURE__ */ Ye(a), u = !t && !/* @__PURE__ */ Ti(a) && !/* @__PURE__ */ wn(a) ? c : a;
        return o.has.call(r, u) || Nt(a, u) && o.has.call(r, a) || Nt(c, u) && o.has.call(r, c) || (r.add(u), fn(r, "add", u, u)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ Ti(r) && !/* @__PURE__ */ wn(r) && (r = /* @__PURE__ */ Ye(r));
        const o = /* @__PURE__ */ Ye(this), { has: c, get: u } = ls(o);
        let h = c.call(o, a);
        h || (a = /* @__PURE__ */ Ye(a), h = c.call(o, a));
        const f = u.call(o, a);
        return o.set(a, r), h ? Nt(r, f) && fn(o, "set", a, r) : fn(o, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ye(this), { has: o, get: c } = ls(r);
        let u = o.call(r, a);
        u || (a = /* @__PURE__ */ Ye(a), u = o.call(r, a)), c && c.call(r, a);
        const h = r.delete(a);
        return u && fn(r, "delete", a, void 0), h;
      },
      clear() {
        const a = /* @__PURE__ */ Ye(this), r = a.size !== 0, o = a.clear();
        return r && fn(
          a,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    i[a] = Bb(a, e, t);
  }), i;
}
function Uu(e, t) {
  const i = Hb(e, t);
  return (n, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? n : Reflect.get(
    Ze(i, a) && a in n ? i : n,
    a,
    r
  );
}
const Vb = {
  get: /* @__PURE__ */ Uu(!1, !1)
}, Kb = {
  get: /* @__PURE__ */ Uu(!1, !0)
}, Gb = {
  get: /* @__PURE__ */ Uu(!0, !1)
};
const lh = /* @__PURE__ */ new WeakMap(), ch = /* @__PURE__ */ new WeakMap(), uh = /* @__PURE__ */ new WeakMap(), qb = /* @__PURE__ */ new WeakMap();
function Wb(e) {
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
function xt(e) {
  return /* @__PURE__ */ wn(e) ? e : ju(
    e,
    !1,
    zb,
    Vb,
    lh
  );
}
// @__NO_SIDE_EFFECTS__
function Yb(e) {
  return ju(
    e,
    !1,
    jb,
    Kb,
    ch
  );
}
// @__NO_SIDE_EFFECTS__
function ho(e) {
  return ju(
    e,
    !0,
    Ub,
    Gb,
    uh
  );
}
function ju(e, t, i, n, a) {
  if (!Je(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const o = Wb(bb(e));
  if (o === 0)
    return e;
  const c = new Proxy(
    e,
    o === 2 ? n : i
  );
  return a.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function La(e) {
  return /* @__PURE__ */ wn(e) ? /* @__PURE__ */ La(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function wn(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ti(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Bu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ye(t) : e;
}
function Xb(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && qp(e, "__v_skip", !0), e;
}
const $i = (e) => Je(e) ? /* @__PURE__ */ xt(e) : e, sr = (e) => Je(e) ? /* @__PURE__ */ ho(e) : e;
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  return fh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function dh(e) {
  return fh(e, !0);
}
function fh(e, t) {
  return /* @__PURE__ */ Wt(e) ? e : new Zb(e, t);
}
class Zb {
  constructor(t, i) {
    this.dep = new Il(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? t : /* @__PURE__ */ Ye(t), this._value = i ? t : $i(t), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const i = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ti(t) || /* @__PURE__ */ wn(t);
    t = n ? t : /* @__PURE__ */ Ye(t), Nt(t, i) && (this._rawValue = t, this._value = n ? t : $i(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Wt(e) ? e.value : e;
}
function gn(e) {
  return Fe(e) ? e() : g(e);
}
const Jb = {
  get: (e, t, i) => t === "__v_raw" ? e : g(Reflect.get(e, t, i)),
  set: (e, t, i, n) => {
    const a = e[t];
    return /* @__PURE__ */ Wt(a) && !/* @__PURE__ */ Wt(i) ? (a.value = i, !0) : Reflect.set(e, t, i, n);
  }
};
function ph(e) {
  return /* @__PURE__ */ La(e) ? e : new Proxy(e, Jb);
}
class Qb {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const i = this.dep = new Il(), { get: n, set: a } = t(i.track.bind(i), i.trigger.bind(i));
    this._get = n, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function em(e) {
  return new Qb(e);
}
class tm {
  constructor(t, i, n) {
    this.fn = t, this.setter = i, this._value = void 0, this.dep = new Il(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    lt !== this)
      return Qp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ih(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function im(e, t, i = !1) {
  let n, a;
  return Fe(e) ? n = e : (n = e.get, a = e.set), new tm(n, a, i);
}
const us = {}, Os = /* @__PURE__ */ new WeakMap();
let wa;
function nm(e, t = !1, i = wa) {
  if (i) {
    let n = Os.get(i);
    n || Os.set(i, n = []), n.push(e);
  }
}
function am(e, t, i = qe) {
  const { immediate: n, deep: a, once: r, scheduler: o, augmentJob: c, call: u } = i, h = (T) => a ? T : /* @__PURE__ */ Ti(T) || a === !1 || a === 0 ? pn(T, 1) : pn(T);
  let f, y, C, E, L = !1, A = !1;
  if (/* @__PURE__ */ Wt(e) ? (y = () => e.value, L = /* @__PURE__ */ Ti(e)) : /* @__PURE__ */ La(e) ? (y = () => h(e), L = !0) : Oe(e) ? (A = !0, L = e.some((T) => /* @__PURE__ */ La(T) || /* @__PURE__ */ Ti(T)), y = () => e.map((T) => {
    if (/* @__PURE__ */ Wt(T))
      return T.value;
    if (/* @__PURE__ */ La(T))
      return h(T);
    if (Fe(T))
      return u ? u(T, 2) : T();
  })) : Fe(e) ? t ? y = u ? () => u(e, 2) : e : y = () => {
    if (C) {
      yn();
      try {
        C();
      } finally {
        _n();
      }
    }
    const T = wa;
    wa = f;
    try {
      return u ? u(e, 3, [E]) : e(E);
    } finally {
      wa = T;
    }
  } : y = Ci, t && a) {
    const T = y, re = a === !0 ? 1 / 0 : a;
    y = () => pn(T(), re);
  }
  const N = Lb(), D = () => {
    f.stop(), N && N.active && $u(N.effects, f);
  };
  if (r && t) {
    const T = t;
    t = (...re) => {
      const ue = T(...re);
      return D(), ue;
    };
  }
  let M = A ? new Array(e.length).fill(us) : us;
  const z = (T) => {
    if (!(!(f.flags & 1) || !f.dirty && !T))
      if (t) {
        const re = f.run();
        if (T || a || L || (A ? re.some((ue, Z) => Nt(ue, M[Z])) : Nt(re, M))) {
          C && C();
          const ue = wa;
          wa = f;
          try {
            const Z = [
              re,
              // pass undefined as the old value when it's changed for the first time
              M === us ? void 0 : A && M[0] === us ? [] : M,
              E
            ];
            M = re, u ? u(t, 3, Z) : (
              // @ts-expect-error
              t(...Z)
            );
          } finally {
            wa = ue;
          }
        }
      } else
        f.run();
  };
  return c && c(z), f = new Zp(y), f.scheduler = o ? () => o(z, !1) : z, E = (T) => nm(T, !1, f), C = f.onStop = () => {
    const T = Os.get(f);
    if (T) {
      if (u)
        u(T, 4);
      else
        for (const re of T) re();
      Os.delete(f);
    }
  }, t ? n ? z(!0) : M = f.run() : o ? o(z.bind(null, !0), !0) : f.run(), D.pause = f.pause.bind(f), D.resume = f.resume.bind(f), D.stop = D, D;
}
function pn(e, t = 1 / 0, i) {
  if (t <= 0 || !Je(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t))
    return e;
  if (i.set(e, t), t--, /* @__PURE__ */ Wt(e))
    pn(e.value, t, i);
  else if (Oe(e))
    for (let n = 0; n < e.length; n++)
      pn(e[n], t, i);
  else if (Ia(e) || Kn(e))
    e.forEach((n) => {
      pn(n, t, i);
    });
  else if (Gp(e)) {
    for (const n in e)
      pn(e[n], t, i);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && pn(e[n], t, i);
  }
  return e;
}
function Lo(e, t, i, n) {
  try {
    return n ? e(...n) : e();
  } catch (a) {
    $l(a, t, i);
  }
}
function ki(e, t, i, n) {
  if (Fe(e)) {
    const a = Lo(e, t, i, n);
    return a && Vp(a) && a.catch((r) => {
      $l(r, t, i);
    }), a;
  }
  if (Oe(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(ki(e[r], t, i, n));
    return a;
  }
}
function $l(e, t, i, n = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || qe;
  if (t) {
    let c = t.parent;
    const u = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; c; ) {
      const f = c.ec;
      if (f) {
        for (let y = 0; y < f.length; y++)
          if (f[y](e, u, h) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      yn(), Lo(r, null, 10, [
        e,
        u,
        h
      ]), _n();
      return;
    }
  }
  rm(e, i, a, n, o);
}
function rm(e, t, i, n = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const ii = [];
let Vi = -1;
const er = [];
let Hn = null, Xa = 0;
const hh = /* @__PURE__ */ Promise.resolve();
let xs = null;
function ti(e) {
  const t = xs || hh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function om(e) {
  let t = Vi + 1, i = ii.length;
  for (; t < i; ) {
    const n = t + i >>> 1, a = ii[n], r = vo(a);
    r < e || r === e && a.flags & 2 ? t = n + 1 : i = n;
  }
  return t;
}
function Hu(e) {
  if (!(e.flags & 1)) {
    const t = vo(e), i = ii[ii.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= vo(i) ? ii.push(e) : ii.splice(om(t), 0, e), e.flags |= 1, vh();
  }
}
function vh() {
  xs || (xs = hh.then(mh));
}
function gh(e) {
  if (!Oe(e))
    Hn && e.id === -1 ? Hn.splice(Xa + 1, 0, e) : e.flags & 1 || (er.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      er.push(e[t]);
  vh();
}
function nf(e, t, i = Vi + 1) {
  for (; i < ii.length; i++) {
    const n = ii[i];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ii.splice(i, 1), i--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function bh(e) {
  if (er.length) {
    const t = [...new Set(er)].sort(
      (i, n) => vo(i) - vo(n)
    );
    if (er.length = 0, Hn) {
      for (let i = 0; i < t.length; i++)
        Hn.push(t[i]);
      return;
    }
    for (Hn = t, Xa = 0; Xa < Hn.length; Xa++) {
      const i = Hn[Xa];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    Hn = null, Xa = 0;
  }
}
const vo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function mh(e) {
  try {
    for (Vi = 0; Vi < ii.length; Vi++) {
      const t = ii[Vi];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Lo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Vi < ii.length; Vi++) {
      const t = ii[Vi];
      t && (t.flags &= -2);
    }
    Vi = -1, ii.length = 0, bh(), xs = null, (ii.length || er.length) && mh();
  }
}
let Rt = null, Fl = null;
function Ns(e) {
  const t = Rt;
  return Rt = e, Fl = e && e.type.__scopeId || null, t;
}
function sm(e) {
  Fl = e;
}
function lm() {
  Fl = null;
}
const cm = (e) => $e;
function $e(e, t = Rt, i) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && $s(-1);
    const r = Ns(t), o = bn.length;
    let c;
    try {
      c = e(...a);
    } finally {
      for (let u = bn.length; u > o; u--) Xu();
      Ns(r), n._d && $s(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Re(e, t) {
  if (Rt === null)
    return e;
  const i = Bl(Rt), n = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, o, c, u = qe] = t[a];
    r && (Fe(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && pn(o), n.push({
      dir: r,
      instance: i,
      value: o,
      oldValue: void 0,
      arg: c,
      modifiers: u
    }));
  }
  return e;
}
function va(e, t, i, n) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const c = a[o];
    r && (c.oldValue = r[o].value);
    let u = c.dir[n];
    u && (yn(), ki(u, i, 8, [
      e.el,
      c,
      e,
      t
    ]), _n());
  }
}
function _i(e, t) {
  if (Gt) {
    let i = Gt.provides;
    const n = Gt.parent && Gt.parent.provides;
    n === i && (i = Gt.provides = Object.create(n)), i[e] = t;
  }
}
function Kt(e, t, i = !1) {
  const n = $a();
  if (n || ir) {
    let a = ir ? ir._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return i && Fe(t) ? t.call(n && n.proxy) : t;
  }
}
const um = /* @__PURE__ */ Symbol.for("v-scx"), dm = () => Kt(um);
function fm(e, t) {
  return Dl(e, null, t);
}
function pm(e, t) {
  return Dl(
    e,
    null,
    { flush: "sync" }
  );
}
function We(e, t, i) {
  return Dl(e, t, i);
}
function Dl(e, t, i = qe) {
  const { immediate: n, deep: a, flush: r, once: o } = i, c = _t({}, i), u = t && n || !t && r !== "post";
  let h;
  if (wo) {
    if (r === "sync") {
      const E = dm();
      h = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!u) {
      const E = () => {
      };
      return E.stop = Ci, E.resume = Ci, E.pause = Ci, E;
    }
  }
  const f = Gt;
  c.call = (E, L, A) => ki(E, f, L, A);
  let y = !1;
  r === "post" ? c.scheduler = (E) => {
    ei(E, f && f.suspense);
  } : r !== "sync" && (y = !0, c.scheduler = (E, L) => {
    L ? E() : Hu(E);
  }), c.augmentJob = (E) => {
    t && (E.flags |= 4), y && (E.flags |= 2, f && (E.id = f.uid, E.i = f));
  };
  const C = am(e, t, c);
  return wo && (h ? h.push(C) : u && C()), C;
}
function hm(e, t, i) {
  const n = this.proxy, a = ct(e) ? e.includes(".") ? yh(n, e) : () => n[e] : e.bind(n, n);
  let r;
  Fe(t) ? r = t : (r = t.handler, i = t);
  const o = Po(this), c = Dl(a, r.bind(n), i);
  return o(), c;
}
function yh(e, t) {
  const i = t.split(".");
  return () => {
    let n = e;
    for (let a = 0; a < i.length && n; a++)
      n = n[i[a]];
    return n;
  };
}
const Un = /* @__PURE__ */ new WeakMap(), _h = /* @__PURE__ */ Symbol("_vte"), Ml = (e) => e.__isTeleport, Ca = (e) => e && (e.disabled || e.disabled === ""), vm = (e) => e && (e.defer || e.defer === ""), af = (e) => typeof SVGElement < "u" && e instanceof SVGElement, rf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ru = (e, t) => {
  const i = e && e.to;
  return ct(i) ? t ? t(i) : null : i;
}, gm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, i, n, a, r, o, c, u, h) {
    const {
      mc: f,
      pc: y,
      pbc: C,
      o: { insert: E, querySelector: L, createText: A, createComment: N, parentNode: D }
    } = h, M = Ca(t.props);
    let { dynamicChildren: z } = t;
    const T = (Z, pe, Y) => {
      Z.shapeFlag & 16 && f(
        Z.children,
        pe,
        Y,
        a,
        r,
        o,
        c,
        u
      );
    }, re = (Z = t) => {
      const pe = Ca(Z.props), Y = Z.target = ru(Z.props, L), se = ou(Y, Z, A, E);
      Y && (o !== "svg" && af(Y) ? o = "svg" : o !== "mathml" && rf(Y) && (o = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(Y), pe || (T(Z, Y, se), Hr(Z, !1)));
    }, ue = (Z) => {
      const pe = () => {
        if (Un.get(Z) === pe) {
          if (Un.delete(Z), Ca(Z.props)) {
            const Y = D(Z.el) || i;
            T(Z, Y, Z.anchor), Hr(Z, !0);
          }
          re(Z);
        }
      };
      Un.set(Z, pe), ei(pe, r);
    };
    if (e == null) {
      const Z = t.el = A(""), pe = t.anchor = A("");
      if (E(Z, i, n), E(pe, i, n), vm(t.props) || r && r.pendingBranch) {
        ue(t);
        return;
      }
      M && (T(t, i, pe), Hr(t, !0)), re();
    } else {
      t.el = e.el;
      const Z = t.anchor = e.anchor, pe = Un.get(e);
      if (pe) {
        pe.flags |= 8, Un.delete(e), ue(t);
        return;
      }
      t.targetStart = e.targetStart;
      const Y = t.target = e.target, se = t.targetAnchor = e.targetAnchor, me = Ca(e.props), ee = me ? i : Y, J = me ? Z : se;
      if (o === "svg" || af(Y) ? o = "svg" : (o === "mathml" || rf(Y)) && (o = "mathml"), z ? (C(
        e.dynamicChildren,
        z,
        ee,
        a,
        r,
        o,
        c
      ), Yu(e, t, !0)) : u || y(
        e,
        t,
        ee,
        J,
        a,
        r,
        o,
        c,
        !1
      ), M)
        me ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ds(
          t,
          i,
          Z,
          h,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const F = ru(t.props, L);
        F && (t.target = F, ds(
          t,
          F,
          null,
          h,
          0
        ));
      } else me && ds(
        t,
        Y,
        se,
        h,
        1
      );
      Hr(t, M);
    }
  },
  remove(e, t, i, { um: n, o: { remove: a } }, r) {
    const {
      shapeFlag: o,
      children: c,
      anchor: u,
      targetStart: h,
      targetAnchor: f,
      target: y,
      props: C
    } = e, E = Ca(C), L = r || !E, A = Un.get(e);
    if (A && (A.flags |= 8, Un.delete(e)), y && (a(h), a(f)), r && a(u), !A && (E || y) && o & 16)
      for (let N = 0; N < c.length; N++) {
        const D = c[N];
        n(
          D,
          t,
          i,
          L,
          !!D.dynamicChildren
        );
      }
  },
  move: ds,
  hydrate: bm
};
function ds(e, t, i, { o: { insert: n }, m: a }, r = 2) {
  r === 0 && n(e.targetAnchor, t, i);
  const { el: o, anchor: c, shapeFlag: u, children: h, props: f } = e, y = r === 2;
  if (y && n(o, t, i), !Un.has(e) && (!y || Ca(f)) && u & 16)
    for (let C = 0; C < h.length; C++)
      a(
        h[C],
        t,
        i,
        2
      );
  y && n(c, t, i);
}
function bm(e, t, i, n, a, r, {
  o: { nextSibling: o, parentNode: c, querySelector: u, insert: h, createText: f }
}, y) {
  function C(N, D) {
    let M = D;
    for (; M; ) {
      if (M && M.nodeType === 8) {
        if (M.data === "teleport start anchor")
          t.targetStart = M;
        else if (M.data === "teleport anchor") {
          t.targetAnchor = M, N._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      M = o(M);
    }
  }
  function E(N, D) {
    D.anchor = y(
      o(N),
      D,
      c(N),
      i,
      n,
      a,
      r
    );
  }
  const L = t.target = ru(
    t.props,
    u
  ), A = Ca(t.props);
  if (L) {
    const N = L._lpa || L.firstChild;
    t.shapeFlag & 16 && (A ? (E(e, t), C(L, N), t.targetAnchor || ou(
      L,
      t,
      f,
      h,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      c(e) === L ? e : null
    )) : (t.anchor = o(e), C(L, N), t.targetAnchor || ou(L, t, f, h), y(
      N && o(N),
      t,
      L,
      i,
      n,
      a,
      r
    ))), Hr(t, A);
  } else A && t.shapeFlag & 16 && (E(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const wh = gm;
function Hr(e, t) {
  const i = e.ctx;
  if (i && i.ut) {
    let n, a;
    for (t ? (n = e.el, a = e.anchor) : (n = e.targetStart, a = e.targetAnchor); n && n !== a; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", i.uid), n = n.nextSibling;
    i.ut();
  }
}
function ou(e, t, i, n, a = null) {
  const r = t.targetStart = i(""), o = t.targetAnchor = i("");
  return r[_h] = o, e && (n(r, e, a), n(o, e, a)), o;
}
const wi = /* @__PURE__ */ Symbol("_leaveCb"), Pr = /* @__PURE__ */ Symbol("_enterCb");
function mm() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Jn(() => {
    e.isMounted = !0;
  }), lr(() => {
    e.isUnmounting = !0;
  }), e;
}
const bi = [Function, Array], Sh = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: bi,
  onEnter: bi,
  onAfterEnter: bi,
  onEnterCancelled: bi,
  // leave
  onBeforeLeave: bi,
  onLeave: bi,
  onAfterLeave: bi,
  onLeaveCancelled: bi,
  // appear
  onBeforeAppear: bi,
  onAppear: bi,
  onAfterAppear: bi,
  onAppearCancelled: bi
}, Ch = (e) => {
  const t = e.subTree;
  return t.component ? Ch(t.component) : t;
}, ym = {
  name: "BaseTransition",
  props: Sh,
  setup(e, { slots: t }) {
    const i = $a(), n = mm();
    return () => {
      const a = t.default && Eh(t.default(), !0), r = a && a.length ? Th(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        i.subTree ? $() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ Ye(e), { mode: c } = o;
      if (n.isLeaving)
        return _c(r);
      const u = Ls(r);
      if (!u)
        return _c(r);
      let h = su(
        u,
        o,
        n,
        i,
        // #11061, ensure enterHooks is fresh after clone
        (y) => h = y
      );
      u.type !== Lt && go(u, h);
      let f = i.subTree && Ls(i.subTree);
      if (f && f.type !== Lt && !Ta(f, u) && Ch(i).type !== Lt) {
        let y = su(
          f,
          o,
          n,
          i
        );
        if (go(f, y), c === "out-in" && u.type !== Lt)
          return n.isLeaving = !0, y.afterLeave = () => {
            n.isLeaving = !1, i.job.flags & 8 || i.update(), delete y.afterLeave, f = void 0;
          }, _c(r);
        c === "in-out" && u.type !== Lt ? y.delayLeave = (C, E, L) => {
          const A = kh(
            n,
            f
          );
          A[String(f.key)] = f, C[wi] = () => {
            E(), C[wi] = void 0, delete h.delayedLeave, f = void 0;
          }, h.delayedLeave = () => {
            L(), delete h.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function Th(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const i of e)
      if (i.type !== Lt) {
        t = i;
        break;
      }
  }
  return t;
}
const _m = ym;
function kh(e, t) {
  const { leavingVNodes: i } = e;
  let n = i.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), i.set(t.type, n)), n;
}
function su(e, t, i, n, a) {
  const {
    appear: r,
    mode: o,
    persisted: c = !1,
    onBeforeEnter: u,
    onEnter: h,
    onAfterEnter: f,
    onEnterCancelled: y,
    onBeforeLeave: C,
    onLeave: E,
    onAfterLeave: L,
    onLeaveCancelled: A,
    onBeforeAppear: N,
    onAppear: D,
    onAfterAppear: M,
    onAppearCancelled: z
  } = t, T = String(e.key), re = kh(i, e), ue = (Y, se) => {
    Y && ki(
      Y,
      n,
      9,
      se
    );
  }, Z = (Y, se) => {
    const me = se[1];
    ue(Y, se), Oe(Y) ? Y.every((ee) => ee.length <= 1) && me() : Y.length <= 1 && me();
  }, pe = {
    mode: o,
    persisted: c,
    beforeEnter(Y) {
      let se = u;
      if (!i.isMounted)
        if (r)
          se = N || u;
        else
          return;
      Y[wi] && Y[wi](
        !0
        /* cancelled */
      );
      const me = re[T];
      me && Ta(e, me) && me.el[wi] && me.el[wi](), ue(se, [Y]);
    },
    enter(Y) {
      if (re[T] === e) return;
      let se = h, me = f, ee = y;
      if (!i.isMounted)
        if (r)
          se = D || h, me = M || f, ee = z || y;
        else
          return;
      let J = !1;
      Y[Pr] = (U) => {
        J || (J = !0, U ? ue(ee, [Y]) : ue(me, [Y]), pe.delayedLeave && pe.delayedLeave(), Y[Pr] = void 0);
      };
      const F = Y[Pr].bind(null, !1);
      se ? Z(se, [Y, F]) : F();
    },
    leave(Y, se) {
      const me = String(e.key);
      if (Y[Pr] && Y[Pr](
        !0
        /* cancelled */
      ), i.isUnmounting)
        return se();
      ue(C, [Y]);
      let ee = !1;
      Y[wi] = (F) => {
        ee || (ee = !0, se(), F ? ue(A, [Y]) : ue(L, [Y]), Y[wi] = void 0, re[me] === e && delete re[me]);
      };
      const J = Y[wi].bind(null, !1);
      re[me] = e, E ? Z(E, [Y, J]) : J();
    },
    clone(Y) {
      const se = su(
        Y,
        t,
        i,
        n,
        a
      );
      return a && a(se), se;
    }
  };
  return pe;
}
function _c(e) {
  if (zl(e))
    return e = Xn(e), e.children = null, e;
}
function Ls(e) {
  if (!zl(e))
    return Ml(e.type) && e.children ? Th(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: i } = e;
  if (i) {
    if (t & 16)
      return i[0];
    if (t & 32 && Fe(i.default))
      return i.default();
  }
}
function go(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const i = e.component.subTree;
    go(
      Ml(i.type) && Ls(i) || i,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Eh(e, t = !1, i) {
  let n = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const c = i == null ? o.key : String(i) + String(o.key != null ? o.key : r);
    o.type === ie ? (o.patchFlag & 128 && a++, n = n.concat(
      Eh(o.children, t, c)
    )) : (t || o.type !== Lt) && n.push(c != null ? Xn(o, { key: c }) : o);
  }
  if (a > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function It(e, t) {
  return Fe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    _t({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ah(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function wm(e) {
  const t = $a(), i = /* @__PURE__ */ dh(null);
  if (t) {
    const a = t.refs === qe ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    });
  }
  return i;
}
function of(e, t) {
  let i;
  return !!((i = Object.getOwnPropertyDescriptor(e, t)) && !i.configurable);
}
const Rs = /* @__PURE__ */ new WeakMap();
function Jr(e, t, i, n, a = !1) {
  if (Oe(e)) {
    e.forEach(
      (A, N) => Jr(
        A,
        t && (Oe(t) ? t[N] : t),
        i,
        n,
        a
      )
    );
    return;
  }
  if (tr(n) && !a) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Jr(e, t, i, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? Bl(n.component) : n.el, o = a ? null : r, { i: c, r: u } = e, h = t && t.r, f = c.refs === qe ? c.refs = {} : c.refs, y = c.setupState, C = /* @__PURE__ */ Ye(y), E = y === qe ? Hp : (A) => of(f, A) ? !1 : Ze(C, A), L = (A, N) => !(N && of(f, N));
  if (h != null && h !== u) {
    if (sf(t), ct(h))
      f[h] = null, E(h) && (y[h] = null);
    else if (/* @__PURE__ */ Wt(h)) {
      const A = t;
      L(h, A.k) && (h.value = null), A.k && (f[A.k] = null);
    }
  }
  if (Fe(u))
    Lo(u, c, 12, [o, f]);
  else {
    const A = ct(u), N = /* @__PURE__ */ Wt(u);
    if (A || N) {
      const D = () => {
        if (e.f) {
          const M = A ? E(u) ? y[u] : f[u] : L() || !e.k ? u.value : f[e.k];
          if (a)
            Oe(M) && $u(M, r);
          else if (Oe(M))
            M.includes(r) || M.push(r);
          else if (A)
            f[u] = [r], E(u) && (y[u] = f[u]);
          else {
            const z = [r];
            L(u, e.k) && (u.value = z), e.k && (f[e.k] = z);
          }
        } else A ? (f[u] = o, E(u) && (y[u] = o)) : N && (L(u, e.k) && (u.value = o), e.k && (f[e.k] = o));
      };
      if (o) {
        const M = () => {
          D(), Rs.delete(e);
        };
        M.id = -1, Rs.set(e, M), ei(M, i);
      } else
        sf(e), D();
    }
  }
}
function sf(e) {
  const t = Rs.get(e);
  t && (t.flags |= 8, Rs.delete(e));
}
Rl().requestIdleCallback;
Rl().cancelIdleCallback;
const tr = (e) => !!e.type.__asyncLoader, zl = (e) => e.type.__isKeepAlive;
function Sm(e, t) {
  Oh(e, "a", t);
}
function Cm(e, t) {
  Oh(e, "da", t);
}
function Oh(e, t, i = Gt) {
  const n = e.__wdc || (e.__wdc = () => {
    let a = i;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Ul(t, n, i), i) {
    let a = i.parent;
    for (; a && a.parent; )
      zl(a.parent.vnode) && Tm(n, t, i, a), a = a.parent;
  }
}
function Tm(e, t, i, n) {
  const a = Ul(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Ro(() => {
    $u(n[t], a);
  }, i);
}
function Ul(e, t, i = Gt, n = !1) {
  if (i) {
    const a = i[e] || (i[e] = []), r = t.__weh || (t.__weh = (...o) => {
      yn();
      const c = Po(i), u = ki(t, i, e, o);
      return c(), _n(), u;
    });
    return n ? a.unshift(r) : a.push(r), r;
  }
}
const Tn = (e) => (t, i = Gt) => {
  (!wo || e === "sp") && Ul(e, (...n) => t(...n), i);
}, xh = Tn("bm"), Jn = Tn("m"), Nh = Tn(
  "bu"
), km = Tn("u"), lr = Tn(
  "bum"
), Ro = Tn("um"), Em = Tn(
  "sp"
), Am = Tn("rtg"), Om = Tn("rtc");
function xm(e, t = Gt) {
  Ul("ec", e, t);
}
const Vu = "components", Nm = "directives";
function Be(e, t) {
  return Gu(Vu, e, !0, t) || e;
}
const Lh = /* @__PURE__ */ Symbol.for("v-ndc");
function Ku(e) {
  return ct(e) ? Gu(Vu, e, !1) || e : e || Lh;
}
function lf(e) {
  return Gu(Nm, e);
}
function Gu(e, t, i = !0, n = !1) {
  const a = Rt || Gt;
  if (a) {
    const r = a.type;
    if (e === Vu) {
      const c = fy(
        r,
        !1
      );
      if (c && (c === t || c === qt(t) || c === Nl(qt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      cf(a[e] || r[e], t) || // global registration
      cf(a.appContext[e], t)
    );
    return !o && n ? r : o;
  }
}
function cf(e, t) {
  return e && (e[t] || e[qt(t)] || e[Nl(qt(t))]);
}
function Ce(e, t, i, n) {
  let a;
  const r = i, o = Oe(e);
  if (o || ct(e)) {
    const c = o && /* @__PURE__ */ La(e);
    let u = !1, h = !1;
    c && (u = !/* @__PURE__ */ Ti(e), h = /* @__PURE__ */ wn(e), e = Pl(e)), a = new Array(e.length);
    for (let f = 0, y = e.length; f < y; f++)
      a[f] = t(
        u ? h ? sr($i(e[f])) : $i(e[f]) : e[f],
        f,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let c = 0; c < e; c++)
      a[c] = t(c + 1, c, void 0, r);
  } else if (Je(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (c, u) => t(c, u, void 0, r)
      );
    else {
      const c = Object.keys(e);
      a = new Array(c.length);
      for (let u = 0, h = c.length; u < h; u++) {
        const f = c[u];
        a[u] = t(e[f], f, u, r);
      }
    }
  else
    a = [];
  return a;
}
function Me(e, t, i, n, a, r) {
  if (i == null && (i = {}), Rt.ce || Rt.parent && tr(Rt.parent) && Rt.parent.ce) {
    const h = i, f = Object.keys(h).length > 0;
    return t !== "default" && (h.name = t), m(), je(
      ie,
      null,
      [Ae("slot", h, n && n())],
      f ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const c = bn.length;
  m();
  let u;
  try {
    const h = o && Rh(o(i)), f = i.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    h && h.key;
    u = je(
      ie,
      {
        key: (f && !Pi(f) ? f : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!h && n ? "_fb" : "")
      },
      h || (n ? n() : []),
      h && e._ === 1 ? 64 : -2
    );
  } catch (h) {
    for (let f = bn.length; f > c; f--) Xu();
    throw h;
  } finally {
    o && o._c && (o._d = !0);
  }
  return !a && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), u;
}
function Rh(e) {
  return e.some((t) => mo(t) ? !(t.type === Lt || t.type === ie && !Rh(t.children)) : !0) ? e : null;
}
const lu = (e) => e ? ev(e) ? Bl(e) : lu(e.parent) : null, Qr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ _t(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => lu(e.parent),
    $root: (e) => lu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => $h(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Hu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ti.bind(e.proxy)),
    $watch: (e) => hm.bind(e)
  })
), wc = (e, t) => e !== qe && !e.__isScriptSetup && Ze(e, t), Lm = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: i, setupState: n, data: a, props: r, accessCache: o, type: c, appContext: u } = e;
    if (t[0] !== "$") {
      const C = o[t];
      if (C !== void 0)
        switch (C) {
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
        if (wc(n, t))
          return o[t] = 1, n[t];
        if (a !== qe && Ze(a, t))
          return o[t] = 2, a[t];
        if (Ze(r, t))
          return o[t] = 3, r[t];
        if (i !== qe && Ze(i, t))
          return o[t] = 4, i[t];
        cu && (o[t] = 0);
      }
    }
    const h = Qr[t];
    let f, y;
    if (h)
      return t === "$attrs" && Vt(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (f = c.__cssModules) && (f = f[t])
    )
      return f;
    if (i !== qe && Ze(i, t))
      return o[t] = 4, i[t];
    if (
      // global properties
      y = u.config.globalProperties, Ze(y, t)
    )
      return y[t];
  },
  set({ _: e }, t, i) {
    const { data: n, setupState: a, ctx: r } = e;
    return wc(a, t) ? (a[t] = i, !0) : n !== qe && Ze(n, t) ? (n[t] = i, !0) : Ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = i, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: i, ctx: n, appContext: a, props: r, type: o }
  }, c) {
    let u;
    return !!(i[c] || e !== qe && c[0] !== "$" && Ze(e, c) || wc(t, c) || Ze(r, c) || Ze(n, c) || Ze(Qr, c) || Ze(a.config.globalProperties, c) || (u = o.__cssModules) && u[c]);
  },
  defineProperty(e, t, i) {
    return i.get != null ? e._.accessCache[t] = 0 : Ze(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
  }
};
function Rm() {
  return Ih().slots;
}
function Im() {
  return Ih().attrs;
}
function Ih(e) {
  const t = $a();
  return t.setupContext || (t.setupContext = iv(t));
}
function Is(e) {
  return Oe(e) ? e.reduce(
    (t, i) => (t[i] = null, t),
    {}
  ) : e;
}
function Pm(e, t) {
  return !e || !t ? e || t : Oe(e) && Oe(t) ? e.concat(t) : _t({}, Is(e), Is(t));
}
let cu = !0;
function $m(e) {
  const t = $h(e), i = e.proxy, n = e.ctx;
  cu = !1, t.beforeCreate && uf(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: o,
    watch: c,
    provide: u,
    inject: h,
    // lifecycle
    created: f,
    beforeMount: y,
    mounted: C,
    beforeUpdate: E,
    updated: L,
    activated: A,
    deactivated: N,
    beforeDestroy: D,
    beforeUnmount: M,
    destroyed: z,
    unmounted: T,
    render: re,
    renderTracked: ue,
    renderTriggered: Z,
    errorCaptured: pe,
    serverPrefetch: Y,
    // public API
    expose: se,
    inheritAttrs: me,
    // assets
    components: ee,
    directives: J,
    filters: F
  } = t;
  if (h && Fm(h, n, null), o)
    for (const le in o) {
      const ae = o[le];
      Fe(ae) && (n[le] = ae.bind(i));
    }
  if (a) {
    const le = a.call(i, i);
    Je(le) && (e.data = /* @__PURE__ */ xt(le));
  }
  if (cu = !0, r)
    for (const le in r) {
      const ae = r[le], be = Fe(ae) ? ae.bind(i, i) : Fe(ae.get) ? ae.get.bind(i, i) : Ci, fe = !Fe(ae) && Fe(ae.set) ? ae.set.bind(i) : Ci, _e = B({
        get: be,
        set: fe
      });
      Object.defineProperty(n, le, {
        enumerable: !0,
        configurable: !0,
        get: () => _e.value,
        set: (Te) => _e.value = Te
      });
    }
  if (c)
    for (const le in c)
      Ph(c[le], n, i, le);
  if (u) {
    const le = Fe(u) ? u.call(i) : u;
    Reflect.ownKeys(le).forEach((ae) => {
      _i(ae, le[ae]);
    });
  }
  f && uf(f, e, "c");
  function W(le, ae) {
    Oe(ae) ? ae.forEach((be) => le(be.bind(i))) : ae && le(ae.bind(i));
  }
  if (W(xh, y), W(Jn, C), W(Nh, E), W(km, L), W(Sm, A), W(Cm, N), W(xm, pe), W(Om, ue), W(Am, Z), W(lr, M), W(Ro, T), W(Em, Y), Oe(se))
    if (se.length) {
      const le = e.exposed || (e.exposed = {});
      se.forEach((ae) => {
        Object.defineProperty(le, ae, {
          get: () => i[ae],
          set: (be) => i[ae] = be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  re && e.render === Ci && (e.render = re), me != null && (e.inheritAttrs = me), ee && (e.components = ee), J && (e.directives = J), Y && Ah(e);
}
function Fm(e, t, i = Ci) {
  Oe(e) && (e = uu(e));
  for (const n in e) {
    const a = e[n];
    let r;
    Je(a) ? "default" in a ? r = Kt(
      a.from || n,
      a.default,
      !0
    ) : r = Kt(a.from || n) : r = Kt(a), /* @__PURE__ */ Wt(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function uf(e, t, i) {
  ki(
    Oe(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    i
  );
}
function Ph(e, t, i, n) {
  let a = n.includes(".") ? yh(i, n) : () => i[n];
  if (ct(e)) {
    const r = t[e];
    Fe(r) && We(a, r);
  } else if (Fe(e))
    We(a, e.bind(i));
  else if (Je(e))
    if (Oe(e))
      e.forEach((r) => Ph(r, t, i, n));
    else {
      const r = Fe(e.handler) ? e.handler.bind(i) : t[e.handler];
      Fe(r) && We(a, r, e);
    }
}
function $h(e) {
  const t = e.type, { mixins: i, extends: n } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !a.length && !i && !n ? u = t : (u = {}, a.length && a.forEach(
    (h) => Ps(u, h, o, !0)
  ), Ps(u, t, o)), Je(t) && r.set(t, u), u;
}
function Ps(e, t, i, n = !1) {
  const { mixins: a, extends: r } = t;
  r && Ps(e, r, i, !0), a && a.forEach(
    (o) => Ps(e, o, i, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const c = Dm[o] || i && i[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const Dm = {
  data: df,
  props: ff,
  emits: ff,
  // objects
  methods: Vr,
  computed: Vr,
  // lifecycle
  beforeCreate: Qt,
  created: Qt,
  beforeMount: Qt,
  mounted: Qt,
  beforeUpdate: Qt,
  updated: Qt,
  beforeDestroy: Qt,
  beforeUnmount: Qt,
  destroyed: Qt,
  unmounted: Qt,
  activated: Qt,
  deactivated: Qt,
  errorCaptured: Qt,
  serverPrefetch: Qt,
  // assets
  components: Vr,
  directives: Vr,
  // watch
  watch: zm,
  // provide / inject
  provide: df,
  inject: Mm
};
function df(e, t) {
  return t ? e ? function() {
    return _t(
      Fe(e) ? e.call(this, this) : e,
      Fe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Mm(e, t) {
  return Vr(uu(e), uu(t));
}
function uu(e) {
  if (Oe(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++)
      t[e[i]] = e[i];
    return t;
  }
  return e;
}
function Qt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Vr(e, t) {
  return e ? _t(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ff(e, t) {
  return e ? Oe(e) && Oe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : _t(
    /* @__PURE__ */ Object.create(null),
    Is(e),
    Is(t ?? {})
  ) : t;
}
function zm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const i = _t(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    i[n] = Qt(e[n], t[n]);
  return i;
}
function Fh() {
  return {
    app: null,
    config: {
      isNativeTag: Hp,
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
let Um = 0;
function jm(e, t) {
  return function(n, a = null) {
    Fe(n) || (n = _t({}, n)), a != null && !Je(a) && (a = null);
    const r = Fh(), o = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const h = r.app = {
      _uid: Um++,
      _component: n,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: hy,
      get config() {
        return r.config;
      },
      set config(f) {
      },
      use(f, ...y) {
        return o.has(f) || (f && Fe(f.install) ? (o.add(f), f.install(h, ...y)) : Fe(f) && (o.add(f), f(h, ...y))), h;
      },
      mixin(f) {
        return r.mixins.includes(f) || r.mixins.push(f), h;
      },
      component(f, y) {
        return y ? (r.components[f] = y, h) : r.components[f];
      },
      directive(f, y) {
        return y ? (r.directives[f] = y, h) : r.directives[f];
      },
      mount(f, y, C) {
        if (!u) {
          const E = h._ceVNode || Ae(n, a);
          return E.appContext = r, C === !0 ? C = "svg" : C === !1 && (C = void 0), e(E, f, C), u = !0, h._container = f, f.__vue_app__ = h, Bl(E.component);
        }
      },
      onUnmount(f) {
        c.push(f);
      },
      unmount() {
        u && (ki(
          c,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(f, y) {
        return r.provides[f] = y, h;
      },
      runWithContext(f) {
        const y = ir;
        ir = h;
        try {
          return f();
        } finally {
          ir = y;
        }
      }
    };
    return h;
  };
}
let ir = null;
function Dh(e, t, i = qe) {
  const n = $a(), a = qt(t), r = Cn(t), o = Mh(e, a), c = em((u, h) => {
    let f, y = qe, C;
    return pm(() => {
      const E = e[a];
      Nt(f, E) && (f = E, h());
    }), {
      get() {
        return u(), i.get ? i.get(f) : f;
      },
      set(E) {
        const L = i.set ? i.set(E) : E;
        if (!Nt(L, f) && !(y !== qe && Nt(E, y)))
          return;
        const A = n.vnode.props, N = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        N || (f = E, h()), n.emit(`update:${t}`, L), Nt(E, y) && (Nt(E, L) && !Nt(L, C) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        N && y !== qe && !Nt(L, f)) && h(), y = E, C = L;
      }
    };
  });
  return c[Symbol.iterator] = () => {
    let u = 0;
    return {
      next() {
        return u < 2 ? { value: u++ ? o || qe : c, done: !1 } : { done: !0 };
      }
    };
  }, c;
}
const Mh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${qt(t)}Modifiers`] || e[`${Cn(t)}Modifiers`];
function Bm(e, t, ...i) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || qe;
  let a = i;
  const r = t.startsWith("update:"), o = r && Mh(n, t.slice(7));
  o && (o.trim && (a = i.map((f) => ct(f) ? f.trim() : f)), o.number && (a = a.map(Ll)));
  let c, u = n[c = vc(t)] || // also try camelCase event handler (#2249)
  n[c = vc(qt(t))];
  !u && r && (u = n[c = vc(Cn(t))]), u && ki(
    u,
    e,
    6,
    a
  );
  const h = n[c + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ki(
      h,
      e,
      6,
      a
    );
  }
}
const Hm = /* @__PURE__ */ new WeakMap();
function zh(e, t, i = !1) {
  const n = i ? Hm : t.emitsCache, a = n.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let o = {}, c = !1;
  if (!Fe(e)) {
    const u = (h) => {
      const f = zh(h, t, !0);
      f && (c = !0, _t(o, f));
    };
    !i && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (Je(e) && n.set(e, null), null) : (Oe(r) ? r.forEach((u) => o[u] = null) : _t(o, r), Je(e) && n.set(e, o), o);
}
function jl(e, t) {
  return !e || !Al(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, Cn(t)) || Ze(e, t));
}
function pf(e) {
  const {
    type: t,
    vnode: i,
    proxy: n,
    withProxy: a,
    propsOptions: [r],
    slots: o,
    attrs: c,
    emit: u,
    render: h,
    renderCache: f,
    props: y,
    data: C,
    setupState: E,
    ctx: L,
    inheritAttrs: A
  } = e, N = Ns(e);
  let D, M;
  try {
    if (i.shapeFlag & 4) {
      const T = a || n, re = T;
      D = Wi(
        h.call(
          re,
          T,
          f,
          y,
          E,
          C,
          L
        )
      ), M = c;
    } else {
      const T = t;
      D = Wi(
        T.length > 1 ? T(
          y,
          { attrs: c, slots: o, emit: u }
        ) : T(
          y,
          null
        )
      ), M = t.props ? c : Vm(c);
    }
  } catch (T) {
    bn.length = 0, $l(T, e, 1), D = Ae(Lt);
  }
  let z = D;
  if (M && A !== !1) {
    const T = Object.keys(M), { shapeFlag: re } = z;
    T.length && re & 7 && (r && T.some(Ol) && (M = Km(
      M,
      r
    )), z = Xn(z, M, !1, !0));
  }
  if (i.dirs && (z = Xn(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(i.dirs) : i.dirs), i.transition) {
    const T = Ml(z.type) && Ls(z) || z;
    go(T, i.transition);
  }
  return D = z, Ns(N), D;
}
const Vm = (e) => {
  let t;
  for (const i in e)
    (i === "class" || i === "style" || Al(i)) && ((t || (t = {}))[i] = e[i]);
  return t;
}, Km = (e, t) => {
  const i = {};
  for (const n in e)
    (!Ol(n) || !(n.slice(9) in t)) && (i[n] = e[n]);
  return i;
};
function Gm(e, t, i) {
  const { props: n, children: a, component: r } = e, { props: o, children: c, patchFlag: u } = t, h = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (i && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? hf(n, o, h) : !!o;
    if (u & 8) {
      const f = t.dynamicProps;
      for (let y = 0; y < f.length; y++) {
        const C = f[y];
        if (Uh(o, n, C) && !jl(h, C))
          return !0;
      }
    }
  } else
    return (a || c) && (!c || !c.$stable) ? !0 : n === o ? !1 : n ? o ? hf(n, o, h) : !0 : !!o;
  return !1;
}
function hf(e, t, i) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < n.length; a++) {
    const r = n[a];
    if (Uh(t, e, r) && !jl(i, r))
      return !0;
  }
  return !1;
}
function Uh(e, t, i) {
  const n = e[i], a = t[i];
  return i === "style" && Je(n) && Je(a) ? !Yn(n, a) : n !== a;
}
function qm({ vnode: e, parent: t, suspense: i }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = n, e = a), a === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  i && i.activeBranch === e && (i.vnode.el = n);
}
const jh = {}, Bh = () => Object.create(jh), Hh = (e) => Object.getPrototypeOf(e) === jh;
function Wm(e, t, i, n = !1) {
  const a = {}, r = Bh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Vh(e, t, a, r);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  i ? e.props = n ? a : /* @__PURE__ */ Yb(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Ym(e, t, i, n) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, c = /* @__PURE__ */ Ye(a), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let y = 0; y < f.length; y++) {
        let C = f[y];
        if (jl(e.emitsOptions, C))
          continue;
        const E = t[C];
        if (u)
          if (Ze(r, C))
            E !== r[C] && (r[C] = E, h = !0);
          else {
            const L = qt(C);
            a[L] = du(
              u,
              c,
              L,
              E,
              e,
              !1
            );
          }
        else
          E !== r[C] && (r[C] = E, h = !0);
      }
    }
  } else {
    Vh(e, t, a, r) && (h = !0);
    let f;
    for (const y in c)
      (!t || // for camelCase
      !Ze(t, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Cn(y)) === y || !Ze(t, f))) && (u ? i && // for camelCase
      (i[y] !== void 0 || // for kebab-case
      i[f] !== void 0) && (a[y] = du(
        u,
        c,
        y,
        void 0,
        e,
        !0
      )) : delete a[y]);
    if (r !== c)
      for (const y in r)
        (!t || !Ze(t, y)) && (delete r[y], h = !0);
  }
  h && fn(e.attrs, "set", "");
}
function Vh(e, t, i, n) {
  const [a, r] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let u in t) {
      if (Yr(u))
        continue;
      const h = t[u];
      let f;
      a && Ze(a, f = qt(u)) ? !r || !r.includes(f) ? i[f] = h : (c || (c = {}))[f] = h : jl(e.emitsOptions, u) || (!(u in n) || h !== n[u]) && (n[u] = h, o = !0);
    }
  if (r) {
    const u = /* @__PURE__ */ Ye(i), h = c || qe;
    for (let f = 0; f < r.length; f++) {
      const y = r[f];
      i[y] = du(
        a,
        u,
        y,
        h[y],
        e,
        !Ze(h, y)
      );
    }
  }
  return o;
}
function du(e, t, i, n, a, r) {
  const o = e[i];
  if (o != null) {
    const c = Ze(o, "default");
    if (c && n === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && Fe(u)) {
        const { propsDefaults: h } = a;
        if (i in h)
          n = h[i];
        else {
          const f = Po(a);
          n = h[i] = u.call(
            null,
            t
          ), f();
        }
      } else
        n = u;
      a.ce && a.ce._setProp(i, n);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !c ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Cn(i)) && (n = !0));
  }
  return n;
}
const Xm = /* @__PURE__ */ new WeakMap();
function Kh(e, t, i = !1) {
  const n = i ? Xm : t.propsCache, a = n.get(e);
  if (a)
    return a;
  const r = e.props, o = {}, c = [];
  let u = !1;
  if (!Fe(e)) {
    const f = (y) => {
      u = !0;
      const [C, E] = Kh(y, t, !0);
      _t(o, C), E && c.push(...E);
    };
    !i && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !u)
    return Je(e) && n.set(e, Qa), Qa;
  if (Oe(r))
    for (let f = 0; f < r.length; f++) {
      const y = qt(r[f]);
      vf(y) && (o[y] = qe);
    }
  else if (r)
    for (const f in r) {
      const y = qt(f);
      if (vf(y)) {
        const C = r[f], E = o[y] = Oe(C) || Fe(C) ? { type: C } : _t({}, C), L = E.type;
        let A = !1, N = !0;
        if (Oe(L))
          for (let D = 0; D < L.length; ++D) {
            const M = L[D], z = Fe(M) && M.name;
            if (z === "Boolean") {
              A = !0;
              break;
            } else z === "String" && (N = !1);
          }
        else
          A = Fe(L) && L.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = A, E[
          1
          /* shouldCastTrue */
        ] = N, (A || Ze(E, "default")) && c.push(y);
      }
    }
  const h = [o, c];
  return Je(e) && n.set(e, h), h;
}
function vf(e) {
  return e[0] !== "$" && !Yr(e);
}
const qu = (e) => e === "_" || e === "_ctx" || e === "$stable", Wu = (e) => Oe(e) ? e.map(Wi) : [Wi(e)], Zm = (e, t, i) => {
  if (t._n)
    return t;
  const n = $e((...a) => Wu(t(...a)), i);
  return n._c = !1, n;
}, Gh = (e, t, i) => {
  const n = e._ctx;
  for (const a in e) {
    if (qu(a)) continue;
    const r = e[a];
    if (Fe(r))
      t[a] = Zm(a, r, n);
    else if (r != null) {
      const o = Wu(r);
      t[a] = () => o;
    }
  }
}, qh = (e, t) => {
  const i = Wu(t);
  e.slots.default = () => i;
}, Wh = (e, t, i) => {
  for (const n in t)
    (i || !qu(n)) && (e[n] = t[n]);
}, Jm = (e, t, i) => {
  const n = e.slots = Bh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Wh(n, t, i), i && qp(n, "_", a, !0)) : Gh(t, n);
  } else t && qh(e, t);
}, Qm = (e, t, i) => {
  const { vnode: n, slots: a } = e;
  let r = !0, o = qe;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? i && c === 1 ? r = !1 : Wh(a, t, i) : (r = !t.$stable, Gh(t, a)), o = t;
  } else t && (qh(e, t), o = { default: 1 });
  if (r)
    for (const c in a)
      !qu(c) && o[c] == null && delete a[c];
}, ei = ay;
function ey(e) {
  return ty(e);
}
function ty(e, t) {
  const i = Rl();
  i.__VUE__ = !0;
  const {
    insert: n,
    remove: a,
    patchProp: r,
    createElement: o,
    createText: c,
    createComment: u,
    setText: h,
    setElementText: f,
    parentNode: y,
    nextSibling: C,
    setScopeId: E = Ci,
    insertStaticContent: L
  } = e, A = (w, k, O, R = null, I = null, j = null, G = void 0, K = null, Q = !!k.dynamicChildren) => {
    if (w === k)
      return;
    w && !Ta(w, k) && (R = nt(w), Te(w, I, j, !0), w = null), k.patchFlag === -2 && (Q = !1, k.dynamicChildren = null);
    const { type: V, ref: he, shapeFlag: oe } = k;
    switch (V) {
      case Io:
        N(w, k, O, R);
        break;
      case Lt:
        D(w, k, O, R);
        break;
      case Cs:
        w == null && M(k, O, R, G);
        break;
      case ie:
        ee(
          w,
          k,
          O,
          R,
          I,
          j,
          G,
          K,
          Q
        );
        break;
      default:
        oe & 1 ? re(
          w,
          k,
          O,
          R,
          I,
          j,
          G,
          K,
          Q
        ) : oe & 6 ? J(
          w,
          k,
          O,
          R,
          I,
          j,
          G,
          K,
          Q
        ) : (oe & 64 || oe & 128) && V.process(
          w,
          k,
          O,
          R,
          I,
          j,
          G,
          K,
          Q,
          Pt
        );
    }
    he != null && I ? Jr(he, w && w.ref, j, k || w, !k) : he == null && w && w.ref != null && Jr(w.ref, null, j, w, !0);
  }, N = (w, k, O, R) => {
    if (w == null)
      n(
        k.el = c(k.children),
        O,
        R
      );
    else {
      const I = k.el = w.el;
      k.children !== w.children && h(I, k.children);
    }
  }, D = (w, k, O, R) => {
    w == null ? n(
      k.el = u(k.children || ""),
      O,
      R
    ) : k.el = w.el;
  }, M = (w, k, O, R) => {
    [w.el, w.anchor] = L(
      w.children,
      k,
      O,
      R,
      w.el,
      w.anchor
    );
  }, z = ({ el: w, anchor: k }, O, R) => {
    let I;
    for (; w && w !== k; )
      I = C(w), n(w, O, R), w = I;
    n(k, O, R);
  }, T = ({ el: w, anchor: k }) => {
    let O;
    for (; w && w !== k; )
      O = C(w), a(w), w = O;
    a(k);
  }, re = (w, k, O, R, I, j, G, K, Q) => {
    if (k.type === "svg" ? G = "svg" : k.type === "math" && (G = "mathml"), w == null)
      ue(
        k,
        O,
        R,
        I,
        j,
        G,
        K,
        Q
      );
    else {
      const V = w.el && w.el._isVueCE ? w.el : null;
      try {
        V && V._beginPatch(), Y(
          w,
          k,
          I,
          j,
          G,
          K,
          Q
        );
      } finally {
        V && V._endPatch();
      }
    }
  }, ue = (w, k, O, R, I, j, G, K) => {
    let Q, V;
    const { props: he, shapeFlag: oe, transition: ve, dirs: xe } = w;
    if (Q = w.el = o(
      w.type,
      j,
      he && he.is,
      he
    ), oe & 8 ? f(Q, w.children) : oe & 16 && pe(
      w.children,
      Q,
      null,
      R,
      I,
      Sc(w, j),
      G,
      K
    ), xe && va(w, null, R, "created"), Z(Q, w, w.scopeId, G, R), he) {
      for (const ze in he)
        ze !== "value" && !Yr(ze) && r(Q, ze, null, he[ze], j, R);
      "value" in he && r(Q, "value", null, he.value, j), (V = he.onVnodeBeforeMount) && Hi(V, R, w);
    }
    xe && va(w, null, R, "beforeMount");
    const Ie = iy(I, ve);
    Ie && ve.beforeEnter(Q), n(Q, k, O), ((V = he && he.onVnodeMounted) || Ie || xe) && ei(() => {
      V && Hi(V, R, w), Ie && ve.enter(Q), xe && va(w, null, R, "mounted");
    }, I);
  }, Z = (w, k, O, R, I) => {
    if (O && E(w, O), R)
      for (let j = 0; j < R.length; j++)
        E(w, R[j]);
    if (I) {
      let j = I.subTree;
      if (k === j || Zh(j.type) && (j.ssContent === k || j.ssFallback === k)) {
        const G = I.vnode;
        Z(
          w,
          G,
          G.scopeId,
          G.slotScopeIds,
          I.parent
        );
      }
    }
  }, pe = (w, k, O, R, I, j, G, K, Q = 0) => {
    for (let V = Q; V < w.length; V++) {
      const he = w[V] = K ? dn(w[V]) : Wi(w[V]);
      A(
        null,
        he,
        k,
        O,
        R,
        I,
        j,
        G,
        K
      );
    }
  }, Y = (w, k, O, R, I, j, G) => {
    const K = k.el = w.el;
    let { patchFlag: Q, dynamicChildren: V, dirs: he } = k;
    Q |= w.patchFlag & 16;
    const oe = w.props || qe, ve = k.props || qe;
    let xe;
    if (O && ga(O, !1), (xe = ve.onVnodeBeforeUpdate) && Hi(xe, O, k, w), he && va(k, w, O, "beforeUpdate"), O && ga(O, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    V && (!w.dynamicChildren || w.dynamicChildren.length !== V.length) && (Q = 0, G = !1, V = null), (oe.innerHTML && ve.innerHTML == null || oe.textContent && ve.textContent == null) && f(K, ""), V ? se(
      w.dynamicChildren,
      V,
      K,
      O,
      R,
      Sc(k, I),
      j
    ) : G || ae(
      w,
      k,
      K,
      null,
      O,
      R,
      Sc(k, I),
      j,
      !1
    ), Q > 0) {
      if (Q & 16)
        me(K, oe, ve, O, I);
      else if (Q & 2 && oe.class !== ve.class && r(K, "class", null, ve.class, I), Q & 4 && r(K, "style", oe.style, ve.style, I), Q & 8) {
        const Ie = k.dynamicProps;
        for (let ze = 0; ze < Ie.length; ze++) {
          const Pe = Ie[ze], He = oe[Pe], ot = ve[Pe];
          (ot !== He || Pe === "value") && r(K, Pe, He, ot, I, O);
        }
      }
      Q & 1 && w.children !== k.children && f(K, k.children);
    } else !G && V == null && me(K, oe, ve, O, I);
    ((xe = ve.onVnodeUpdated) || he) && ei(() => {
      xe && Hi(xe, O, k, w), he && va(k, w, O, "updated");
    }, R);
  }, se = (w, k, O, R, I, j, G) => {
    for (let K = 0; K < k.length; K++) {
      const Q = w[K], V = k[K], he = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Q.type === ie || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ta(Q, V) || // - In the case of a component, it could contain anything.
        Q.shapeFlag & 198) ? y(Q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          O
        )
      );
      A(
        Q,
        V,
        he,
        null,
        R,
        I,
        j,
        G,
        !0
      );
    }
  }, me = (w, k, O, R, I) => {
    if (k !== O) {
      if (k !== qe)
        for (const j in k)
          !Yr(j) && !(j in O) && r(
            w,
            j,
            k[j],
            null,
            I,
            R
          );
      for (const j in O) {
        if (Yr(j)) continue;
        const G = O[j], K = k[j];
        G !== K && j !== "value" && r(w, j, K, G, I, R);
      }
      "value" in O && r(w, "value", k.value, O.value, I);
    }
  }, ee = (w, k, O, R, I, j, G, K, Q) => {
    const V = k.el = w ? w.el : c(""), he = k.anchor = w ? w.anchor : c("");
    let { patchFlag: oe, dynamicChildren: ve, slotScopeIds: xe } = k;
    xe && (K = K ? K.concat(xe) : xe), w == null ? (n(V, O, R), n(he, O, R), pe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      k.children || [],
      O,
      he,
      I,
      j,
      G,
      K,
      Q
    )) : oe > 0 && oe & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    w.dynamicChildren && w.dynamicChildren.length === ve.length ? (se(
      w.dynamicChildren,
      ve,
      O,
      I,
      j,
      G,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (k.key != null || I && k === I.subTree) && Yu(
      w,
      k,
      !0
      /* shallow */
    )) : ae(
      w,
      k,
      O,
      he,
      I,
      j,
      G,
      K,
      Q
    );
  }, J = (w, k, O, R, I, j, G, K, Q) => {
    k.slotScopeIds = K, w == null ? k.shapeFlag & 512 ? I.ctx.activate(
      k,
      O,
      R,
      G,
      Q
    ) : F(
      k,
      O,
      R,
      I,
      j,
      G,
      Q
    ) : U(w, k, Q);
  }, F = (w, k, O, R, I, j, G) => {
    const K = w.component = ly(
      w,
      R,
      I
    );
    if (zl(w) && (K.ctx.renderer = Pt), cy(K, !1, G), K.asyncDep) {
      if (I && I.registerDep(K, W, G), !w.el) {
        const Q = K.subTree = Ae(Lt);
        D(null, Q, k, O), w.placeholder = Q.el;
      }
    } else
      W(
        K,
        w,
        k,
        O,
        I,
        j,
        G
      );
  }, U = (w, k, O) => {
    const R = k.component = w.component;
    if (Gm(w, k, O))
      if (R.asyncDep && !R.asyncResolved) {
        le(R, k, O);
        return;
      } else
        R.next = k, R.update();
    else
      k.el = w.el, R.vnode = k;
  }, W = (w, k, O, R, I, j, G) => {
    const K = () => {
      if (w.isMounted) {
        let { next: oe, bu: ve, u: xe, parent: Ie, vnode: ze } = w;
        {
          const kt = Yh(w);
          if (kt) {
            oe && (oe.el = ze.el, le(w, oe, G)), kt.asyncDep.then(() => {
              ei(() => {
                w.isUnmounted || V();
              }, I);
            });
            return;
          }
        }
        let Pe = oe, He;
        ga(w, !1), oe ? (oe.el = ze.el, le(w, oe, G)) : oe = ze, ve && Ss(ve), (He = oe.props && oe.props.onVnodeBeforeUpdate) && Hi(He, Ie, oe, ze), ga(w, !0);
        const ot = pf(w), gt = w.subTree;
        w.subTree = ot, A(
          gt,
          ot,
          // parent may have changed if it's in a teleport
          y(gt.el),
          // anchor may have changed if it's in a fragment
          nt(gt),
          w,
          I,
          j
        ), oe.el = ot.el, Pe === null && qm(w, ot.el), xe && ei(xe, I), (He = oe.props && oe.props.onVnodeUpdated) && ei(
          () => Hi(He, Ie, oe, ze),
          I
        );
      } else {
        let oe;
        const { el: ve, props: xe } = k, { bm: Ie, m: ze, parent: Pe, root: He, type: ot } = w, gt = tr(k);
        ga(w, !1), Ie && Ss(Ie), !gt && (oe = xe && xe.onVnodeBeforeMount) && Hi(oe, Pe, k), ga(w, !0);
        {
          He.ce && He.ce._hasShadowRoot() && He.ce._injectChildStyle(
            ot,
            w.parent ? w.parent.type : void 0
          );
          const kt = w.subTree = pf(w);
          A(
            null,
            kt,
            O,
            R,
            w,
            I,
            j
          ), k.el = kt.el;
        }
        if (ze && ei(ze, I), !gt && (oe = xe && xe.onVnodeMounted)) {
          const kt = k;
          ei(
            () => Hi(oe, Pe, kt),
            I
          );
        }
        (k.shapeFlag & 256 || Pe && tr(Pe.vnode) && Pe.vnode.shapeFlag & 256) && w.a && ei(w.a, I), w.isMounted = !0, k = O = R = null;
      }
    };
    w.scope.on();
    const Q = w.effect = new Zp(K);
    w.scope.off();
    const V = w.update = Q.run.bind(Q), he = w.job = Q.runIfDirty.bind(Q);
    he.i = w, he.id = w.uid, Q.scheduler = () => Hu(he), ga(w, !0), V();
  }, le = (w, k, O) => {
    k.component = w;
    const R = w.vnode.props;
    w.vnode = k, w.next = null, Ym(w, k.props, R, O), Qm(w, k.children, O), yn(), nf(w), _n();
  }, ae = (w, k, O, R, I, j, G, K, Q = !1) => {
    const V = w && w.children, he = w ? w.shapeFlag : 0, oe = k.children, { patchFlag: ve, shapeFlag: xe } = k;
    if (ve > 0) {
      if (ve & 128) {
        fe(
          V,
          oe,
          O,
          R,
          I,
          j,
          G,
          K,
          Q
        );
        return;
      } else if (ve & 256) {
        be(
          V,
          oe,
          O,
          R,
          I,
          j,
          G,
          K,
          Q
        );
        return;
      }
    }
    xe & 8 ? (he & 16 && vt(V, I, j), oe !== V && f(O, oe)) : he & 16 ? xe & 16 ? fe(
      V,
      oe,
      O,
      R,
      I,
      j,
      G,
      K,
      Q
    ) : vt(V, I, j, !0) : (he & 8 && f(O, ""), xe & 16 && pe(
      oe,
      O,
      R,
      I,
      j,
      G,
      K,
      Q
    ));
  }, be = (w, k, O, R, I, j, G, K, Q) => {
    w = w || Qa, k = k || Qa;
    const V = w.length, he = k.length, oe = Math.min(V, he);
    let ve;
    for (ve = 0; ve < oe; ve++) {
      const xe = k[ve] = Q ? dn(k[ve]) : Wi(k[ve]);
      A(
        w[ve],
        xe,
        O,
        null,
        I,
        j,
        G,
        K,
        Q
      );
    }
    V > he ? vt(
      w,
      I,
      j,
      !0,
      !1,
      oe
    ) : pe(
      k,
      O,
      R,
      I,
      j,
      G,
      K,
      Q,
      oe
    );
  }, fe = (w, k, O, R, I, j, G, K, Q) => {
    let V = 0;
    const he = k.length;
    let oe = w.length - 1, ve = he - 1;
    for (; V <= oe && V <= ve; ) {
      const xe = w[V], Ie = k[V] = Q ? dn(k[V]) : Wi(k[V]);
      if (Ta(xe, Ie))
        A(
          xe,
          Ie,
          O,
          null,
          I,
          j,
          G,
          K,
          Q
        );
      else
        break;
      V++;
    }
    for (; V <= oe && V <= ve; ) {
      const xe = w[oe], Ie = k[ve] = Q ? dn(k[ve]) : Wi(k[ve]);
      if (Ta(xe, Ie))
        A(
          xe,
          Ie,
          O,
          null,
          I,
          j,
          G,
          K,
          Q
        );
      else
        break;
      oe--, ve--;
    }
    if (V > oe) {
      if (V <= ve) {
        const xe = ve + 1, Ie = xe < he ? k[xe].el : R;
        for (; V <= ve; )
          A(
            null,
            k[V] = Q ? dn(k[V]) : Wi(k[V]),
            O,
            Ie,
            I,
            j,
            G,
            K,
            Q
          ), V++;
      }
    } else if (V > ve)
      for (; V <= oe; )
        Te(w[V], I, j, !0), V++;
    else {
      const xe = V, Ie = V, ze = /* @__PURE__ */ new Map();
      for (V = Ie; V <= ve; V++) {
        const et = k[V] = Q ? dn(k[V]) : Wi(k[V]);
        et.key != null && ze.set(et.key, V);
      }
      let Pe, He = 0;
      const ot = ve - Ie + 1;
      let gt = !1, kt = 0;
      const $t = new Array(ot);
      for (V = 0; V < ot; V++) $t[V] = 0;
      for (V = xe; V <= oe; V++) {
        const et = w[V];
        if (He >= ot) {
          Te(et, I, j, !0);
          continue;
        }
        let ft;
        if (et.key != null)
          ft = ze.get(et.key);
        else
          for (Pe = Ie; Pe <= ve; Pe++)
            if ($t[Pe - Ie] === 0 && Ta(et, k[Pe])) {
              ft = Pe;
              break;
            }
        ft === void 0 ? Te(et, I, j, !0) : ($t[ft - Ie] = V + 1, ft >= kt ? kt = ft : gt = !0, A(
          et,
          k[ft],
          O,
          null,
          I,
          j,
          G,
          K,
          Q
        ), He++);
      }
      const Ei = gt ? ny($t) : Qa;
      for (Pe = Ei.length - 1, V = ot - 1; V >= 0; V--) {
        const et = Ie + V, ft = k[et], Fi = k[et + 1], vi = et + 1 < he ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Fi.el || Xh(Fi)
        ) : R;
        $t[V] === 0 ? A(
          null,
          ft,
          O,
          vi,
          I,
          j,
          G,
          K,
          Q
        ) : gt && (Pe < 0 || V !== Ei[Pe] ? _e(ft, O, vi, 2) : Pe--);
      }
    }
  }, _e = (w, k, O, R, I = null) => {
    const { el: j, type: G, transition: K, children: Q, shapeFlag: V } = w;
    if (V & 6) {
      _e(w.component.subTree, k, O, R);
      return;
    }
    if (V & 128) {
      w.suspense.move(k, O, R);
      return;
    }
    if (V & 64) {
      G.move(w, k, O, Pt);
      return;
    }
    if (G === ie) {
      n(j, k, O);
      for (let oe = 0; oe < Q.length; oe++)
        _e(Q[oe], k, O, R);
      n(w.anchor, k, O);
      return;
    }
    if (G === Cs) {
      z(w, k, O);
      return;
    }
    if (R !== 2 && V & 1 && K)
      if (R === 0)
        K.persisted && !j[wi] ? n(j, k, O) : (K.beforeEnter(j), n(j, k, O), ei(() => K.enter(j), I));
      else {
        const { leave: oe, delayLeave: ve, afterLeave: xe } = K, Ie = () => {
          w.ctx.isUnmounted ? a(j) : n(j, k, O);
        }, ze = () => {
          const Pe = j._isLeaving || !!j[wi];
          j._isLeaving && j[wi](
            !0
            /* cancelled */
          ), K.persisted && !Pe ? Ie() : oe(j, () => {
            Ie(), xe && xe();
          });
        };
        ve ? ve(j, Ie, ze) : ze();
      }
    else
      n(j, k, O);
  }, Te = (w, k, O, R = !1, I = !1) => {
    const {
      type: j,
      props: G,
      ref: K,
      children: Q,
      dynamicChildren: V,
      shapeFlag: he,
      patchFlag: oe,
      dirs: ve,
      cacheIndex: xe,
      memo: Ie
    } = w;
    if (oe === -2 && (I = !1), K != null && (yn(), Jr(K, null, O, w, !0), _n()), xe != null && (k.renderCache[xe] = void 0), he & 256) {
      k.ctx.deactivate(w);
      return;
    }
    const ze = he & 1 && ve, Pe = !tr(w);
    let He;
    if (Pe && (He = G && G.onVnodeBeforeUnmount) && Hi(He, k, w), he & 6)
      ut(w.component, O, R);
    else {
      if (he & 128) {
        w.suspense.unmount(O, R);
        return;
      }
      ze && va(w, null, k, "beforeUnmount"), he & 64 ? w.type.remove(
        w,
        k,
        O,
        Pt,
        R
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (j !== ie || oe > 0 && oe & 64) ? vt(
        V,
        k,
        O,
        !1,
        !0
      ) : (j === ie && oe & 384 || !I && he & 16) && vt(Q, k, O), R && Ke(w);
    }
    const ot = Ie != null && xe == null;
    (Pe && (He = G && G.onVnodeUnmounted) || ze || ot) && ei(() => {
      He && Hi(He, k, w), ze && va(w, null, k, "unmounted"), ot && (w.el = null);
    }, O);
  }, Ke = (w) => {
    const { type: k, el: O, anchor: R, transition: I } = w;
    if (k === ie) {
      Le(O, R);
      return;
    }
    if (k === Cs) {
      T(w);
      return;
    }
    const j = () => {
      a(O), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (w.shapeFlag & 1 && I && !I.persisted) {
      const { leave: G, delayLeave: K } = I, Q = () => G(O, j);
      K ? K(w.el, j, Q) : Q();
    } else
      j();
  }, Le = (w, k) => {
    let O;
    for (; w !== k; )
      O = C(w), a(w), w = O;
    a(k);
  }, ut = (w, k, O) => {
    const { bum: R, scope: I, job: j, subTree: G, um: K, m: Q, a: V } = w;
    gf(Q), gf(V), R && Ss(R), I.stop(), j && (j.flags |= 8, Te(G, w, k, O)), K && ei(K, k), ei(() => {
      w.isUnmounted = !0;
    }, k);
  }, vt = (w, k, O, R = !1, I = !1, j = 0) => {
    for (let G = j; G < w.length; G++)
      Te(w[G], k, O, R, I);
  }, nt = (w) => {
    if (w.shapeFlag & 6)
      return nt(w.component.subTree);
    if (w.shapeFlag & 128)
      return w.suspense.next();
    const k = C(w.anchor || w.el), O = k && k[_h];
    return O ? C(O) : k;
  };
  let dt = !1;
  const rt = (w, k, O) => {
    let R;
    w == null ? k._vnode && (Te(k._vnode, null, null, !0), R = k._vnode.component) : A(
      k._vnode || null,
      w,
      k,
      null,
      null,
      null,
      O
    ), k._vnode = w, dt || (dt = !0, nf(R), bh(), dt = !1);
  }, Pt = {
    p: A,
    um: Te,
    m: _e,
    r: Ke,
    mt: F,
    mc: pe,
    pc: ae,
    pbc: se,
    n: nt,
    o: e
  };
  return {
    render: rt,
    hydrate: void 0,
    createApp: jm(rt)
  };
}
function Sc({ type: e, props: t }, i) {
  return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
}
function ga({ effect: e, job: t }, i) {
  i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function iy(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Yu(e, t, i = !1) {
  const n = e.children, a = t.children;
  if (Oe(n) && Oe(a))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let c = a[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = a[r] = dn(a[r]), c.el = o.el), !i && c.patchFlag !== -2 && Yu(o, c)), c.type === Io && (c.patchFlag === -1 && (c = a[r] = dn(c)), c.el = o.el), c.type === Lt && !c.el && (c.el = o.el);
    }
}
function ny(e) {
  const t = e.slice(), i = [0];
  let n, a, r, o, c;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const h = e[n];
    if (h !== 0) {
      if (a = i[i.length - 1], e[a] < h) {
        t[n] = a, i.push(n);
        continue;
      }
      for (r = 0, o = i.length - 1; r < o; )
        c = r + o >> 1, e[i[c]] < h ? r = c + 1 : o = c;
      h < e[i[r]] && (r > 0 && (t[n] = i[r - 1]), i[r] = n);
    }
  }
  for (r = i.length, o = i[r - 1]; r-- > 0; )
    i[r] = o, o = t[o];
  return i;
}
function Yh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Yh(t);
}
function gf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Xh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Xh(t.subTree) : null;
}
const Zh = (e) => e.__isSuspense;
function ay(e, t) {
  t && t.pendingBranch ? Oe(e) ? t.effects.push(...e) : t.effects.push(e) : gh(e);
}
const ie = /* @__PURE__ */ Symbol.for("v-fgt"), Io = /* @__PURE__ */ Symbol.for("v-txt"), Lt = /* @__PURE__ */ Symbol.for("v-cmt"), Cs = /* @__PURE__ */ Symbol.for("v-stc"), bn = [];
let pi = null;
function m(e = !1) {
  bn.push(pi = e ? null : []);
}
function Xu() {
  bn.pop(), pi = bn[bn.length - 1] || null;
}
let bo = 1;
function $s(e, t = !1) {
  bo += e, e < 0 && pi && t && (pi.hasOnce = !0);
}
function Jh(e) {
  return e.dynamicChildren = bo > 0 ? pi || Qa : null, Xu(), bo > 0 && pi && pi.push(e), e;
}
function _(e, t, i, n, a, r) {
  return Jh(
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
function je(e, t, i, n, a) {
  return Jh(
    Ae(
      e,
      t,
      i,
      n,
      a,
      !0
    )
  );
}
function mo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ta(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Qh = ({ key: e }) => e ?? null, Ts = ({
  ref: e,
  ref_key: t,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? ct(e) || /* @__PURE__ */ Wt(e) || Fe(e) ? { i: Rt, r: e, k: t, f: !!i } : e : null);
function l(e, t = null, i = null, n = 0, a = null, r = e === ie ? 0 : 1, o = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Qh(t),
    ref: t && Ts(t),
    scopeId: Fl,
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
    ctx: Rt
  };
  return c ? (Fs(u, i), r & 128 && e.normalize(u)) : i && (u.shapeFlag |= ct(i) ? 8 : 16), bo > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  pi && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && pi.push(u), u;
}
const Ae = ry;
function ry(e, t = null, i = null, n = 0, a = null, r = !1) {
  if ((!e || e === Lh) && (e = Lt), mo(e)) {
    const c = Xn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return i && Fs(c, i), bo > 0 && !r && pi && (c.shapeFlag & 6 ? pi[pi.indexOf(e)] = c : pi.push(c)), c.patchFlag = -2, c;
  }
  if (py(e) && (e = e.__vccOpts), t) {
    t = yo(t);
    let { class: c, style: u } = t;
    c && !ct(c) && (t.class = ge(c)), Je(u) && (/* @__PURE__ */ Bu(u) && !Oe(u) && (u = _t({}, u)), t.style = hi(u));
  }
  const o = ct(e) ? 1 : Zh(e) ? 128 : Ml(e) ? 64 : Je(e) ? 4 : Fe(e) ? 2 : 0;
  return l(
    e,
    t,
    i,
    n,
    a,
    o,
    r,
    !0
  );
}
function yo(e) {
  return e ? /* @__PURE__ */ Bu(e) || Hh(e) ? _t({}, e) : e : null;
}
function Xn(e, t, i = !1, n = !1) {
  const { props: a, ref: r, patchFlag: o, children: c, transition: u } = e, h = t ? Yt(a || {}, t) : a, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Qh(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && r ? Oe(r) ? r.concat(Ts(t)) : [r, Ts(t)] : Ts(t)
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
    patchFlag: t && e.type !== ie ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Xn(e.ssContent),
    ssFallback: e.ssFallback && Xn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && n && go(
    f,
    u.clone(f)
  ), f;
}
function ye(e = " ", t = 0) {
  return Ae(Io, null, e, t);
}
function $(e = "", t = !1) {
  return t ? (m(), je(Lt, null, e)) : Ae(Lt, null, e);
}
function Wi(e) {
  return e == null || typeof e == "boolean" ? Ae(Lt) : Oe(e) ? Ae(
    ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : mo(e) ? dn(e) : Ae(Io, null, String(e));
}
function dn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xn(e);
}
function Fs(e, t) {
  let i = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Oe(t))
    i = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Fs(e, a()), a._c && (a._d = !0));
      return;
    } else {
      i = 32;
      const a = t._;
      !a && !Hh(t) ? t._ctx = Rt : a === 3 && Rt && (Rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Fe(t)) {
    if (n & 65) {
      Fs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Rt }, i = 32;
  } else
    t = String(t), n & 64 ? (i = 16, t = [ye(t)]) : i = 8;
  e.children = t, e.shapeFlag |= i;
}
function Yt(...e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const n = e[i];
    for (const a in n)
      if (a === "class")
        t.class !== n.class && (t.class = ge([t.class, n.class]));
      else if (a === "style")
        t.style = hi([t.style, n.style]);
      else if (Al(a)) {
        const r = t[a], o = n[a];
        o && r !== o && !(Oe(r) && r.includes(o)) ? t[a] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ol(a) && (t[a] = o);
      } else a !== "" && (t[a] = n[a]);
  }
  return t;
}
function Hi(e, t, i, n = null) {
  ki(e, t, 7, [
    i,
    n
  ]);
}
const oy = Fh();
let sy = 0;
function ly(e, t, i) {
  const n = e.type, a = (t ? t.appContext : e.appContext) || oy, r = {
    uid: sy++,
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
    scope: new Nb(
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
    propsOptions: Kh(n, a),
    emitsOptions: zh(n, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: qe,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: qe,
    data: qe,
    props: qe,
    attrs: qe,
    slots: qe,
    refs: qe,
    setupState: qe,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Bm.bind(null, r), e.ce && e.ce(r), r;
}
let Gt = null;
const $a = () => Gt || Rt;
let Ds, _o;
{
  const e = Rl(), t = (i, n) => {
    let a;
    return (a = e[i]) || (a = e[i] = []), a.push(n), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  Ds = t(
    "__VUE_INSTANCE_SETTERS__",
    (i) => Gt = i
  ), _o = t(
    "__VUE_SSR_SETTERS__",
    (i) => wo = i
  );
}
const Po = (e) => {
  const t = Gt;
  return Ds(e), e.scope.on(), () => {
    e.scope.off(), Ds(t);
  };
}, bf = () => {
  Gt && Gt.scope.off(), Ds(null);
};
function ev(e) {
  return e.vnode.shapeFlag & 4;
}
let wo = !1;
function cy(e, t = !1, i = !1) {
  t && _o(t);
  const { props: n, children: a } = e.vnode, r = ev(e);
  Wm(e, n, r, t), Jm(e, a, i || t);
  const o = r ? uy(e, t) : void 0;
  return t && _o(!1), o;
}
function uy(e, t) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Lm);
  const { setup: n } = i;
  if (n) {
    yn();
    const a = e.setupContext = n.length > 1 ? iv(e) : null, r = Po(e), o = Lo(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    ), c = Vp(o);
    if (_n(), r(), (c || e.sp) && !tr(e) && Ah(e), c) {
      if (o.then(bf, bf), t)
        return o.then((u) => {
          _o(!0);
          try {
            mf(e, u, t);
          } finally {
            _o(!1);
          }
        }).catch((u) => {
          $l(u, e, 0);
        });
      e.asyncDep = o;
    } else
      mf(e, o);
  } else
    tv(e);
}
function mf(e, t, i) {
  Fe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Je(t) && (e.setupState = ph(t)), tv(e);
}
function tv(e, t, i) {
  const n = e.type;
  e.render || (e.render = n.render || Ci);
  {
    const a = Po(e);
    yn();
    try {
      $m(e);
    } finally {
      _n(), a();
    }
  }
}
const dy = {
  get(e, t) {
    return Vt(e, "get", ""), e[t];
  }
};
function iv(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  return {
    attrs: new Proxy(e.attrs, dy),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Bl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ph(Xb(e.exposed)), {
    get(t, i) {
      if (i in t)
        return t[i];
      if (i in Qr)
        return Qr[i](e);
    },
    has(t, i) {
      return i in t || i in Qr;
    }
  })) : e.proxy;
}
function fy(e, t = !0) {
  return Fe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function py(e) {
  return Fe(e) && "__vccOpts" in e;
}
const B = (e, t) => /* @__PURE__ */ im(e, t, wo);
function ni(e, t, i) {
  try {
    $s(-1);
    const n = arguments.length;
    return n === 2 ? Je(t) && !Oe(t) ? mo(t) ? Ae(e, null, [t]) : Ae(e, t) : Ae(e, null, t) : (n > 3 ? i = Array.prototype.slice.call(arguments, 2) : n === 3 && mo(i) && (i = [i]), Ae(e, t, i));
  } finally {
    $s(1);
  }
}
const hy = "3.5.42", vy = Ci;
let fu;
const yf = typeof window < "u" && window.trustedTypes;
if (yf)
  try {
    fu = /* @__PURE__ */ yf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const nv = fu ? (e) => fu.createHTML(e) : (e) => e, gy = "http://www.w3.org/2000/svg", by = "http://www.w3.org/1998/Math/MathML", un = typeof document < "u" ? document : null, _f = un && /* @__PURE__ */ un.createElement("template"), my = {
  insert: (e, t, i) => {
    t.insertBefore(e, i || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, i, n) => {
    const a = t === "svg" ? un.createElementNS(gy, e) : t === "mathml" ? un.createElementNS(by, e) : i ? un.createElement(e, { is: i }) : un.createElement(e);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => un.createTextNode(e),
  createComment: (e) => un.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => un.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, i, n, a, r) {
    const o = i ? i.previousSibling : t.lastChild;
    if (a && (a === r || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), i), !(a === r || !(a = a.nextSibling)); )
        ;
    else {
      _f.innerHTML = nv(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const c = _f.content;
      if (n === "svg" || n === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, i);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      i ? i.previousSibling : t.lastChild
    ];
  }
}, Dn = "transition", $r = "animation", So = /* @__PURE__ */ Symbol("_vtc"), av = {
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
}, yy = /* @__PURE__ */ _t(
  {},
  Sh,
  av
), _y = (e) => (e.displayName = "Transition", e.props = yy, e), wy = /* @__PURE__ */ _y(
  (e, { slots: t }) => ni(_m, Sy(e), t)
), ba = (e, t = []) => {
  Oe(e) ? e.forEach((i) => i(...t)) : e && e(...t);
}, wf = (e) => e ? Oe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Sy(e) {
  const t = {};
  for (const ee in e)
    ee in av || (t[ee] = e[ee]);
  if (e.css === !1)
    return t;
  const {
    name: i = "v",
    type: n,
    duration: a,
    enterFromClass: r = `${i}-enter-from`,
    enterActiveClass: o = `${i}-enter-active`,
    enterToClass: c = `${i}-enter-to`,
    appearFromClass: u = r,
    appearActiveClass: h = o,
    appearToClass: f = c,
    leaveFromClass: y = `${i}-leave-from`,
    leaveActiveClass: C = `${i}-leave-active`,
    leaveToClass: E = `${i}-leave-to`
  } = e, L = Cy(a), A = L && L[0], N = L && L[1], {
    onBeforeEnter: D,
    onEnter: M,
    onEnterCancelled: z,
    onLeave: T,
    onLeaveCancelled: re,
    onBeforeAppear: ue = D,
    onAppear: Z = M,
    onAppearCancelled: pe = z
  } = t, Y = (ee, J, F, U) => {
    ee._enterCancelled = U, ma(ee, J ? f : c), ma(ee, J ? h : o), F && F();
  }, se = (ee, J) => {
    ee._isLeaving = !1, ma(ee, y), ma(ee, E), ma(ee, C), J && J();
  }, me = (ee) => (J, F) => {
    const U = ee ? Z : M, W = () => Y(J, ee, F);
    ba(U, [J, W]), Sf(() => {
      ma(J, ee ? u : r), on(J, ee ? f : c), wf(U) || Cf(J, n, A, W);
    });
  };
  return _t(t, {
    onBeforeEnter(ee) {
      ba(D, [ee]), on(ee, r), on(ee, o);
    },
    onBeforeAppear(ee) {
      ba(ue, [ee]), on(ee, u), on(ee, h);
    },
    onEnter: me(!1),
    onAppear: me(!0),
    onLeave(ee, J) {
      ee._isLeaving = !0;
      const F = () => se(ee, J);
      on(ee, y), ee._enterCancelled ? (on(ee, C), Ef(ee)) : (Ef(ee), on(ee, C)), Sf(() => {
        ee._isLeaving && (ma(ee, y), on(ee, E), wf(T) || Cf(ee, n, N, F));
      }), ba(T, [ee, F]);
    },
    onEnterCancelled(ee) {
      Y(ee, !1, void 0, !0), ba(z, [ee]);
    },
    onAppearCancelled(ee) {
      Y(ee, !0, void 0, !0), ba(pe, [ee]);
    },
    onLeaveCancelled(ee) {
      se(ee), ba(re, [ee]);
    }
  });
}
function Cy(e) {
  if (e == null)
    return null;
  if (Je(e))
    return [Cc(e.enter), Cc(e.leave)];
  {
    const t = Cc(e);
    return [t, t];
  }
}
function Cc(e) {
  return _b(e);
}
function on(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[So] || (e[So] = /* @__PURE__ */ new Set())).add(t);
}
function ma(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const i = e[So];
  i && (i.delete(t), i.size || (e[So] = void 0));
}
function Sf(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ty = 0;
function Cf(e, t, i, n) {
  const a = e._endId = ++Ty, r = () => {
    a === e._endId && n();
  };
  if (i != null)
    return setTimeout(r, i);
  const { type: o, timeout: c, propCount: u } = ky(e, t);
  if (!o)
    return n();
  const h = o + "end";
  let f = 0;
  const y = () => {
    e.removeEventListener(h, C), r();
  }, C = (E) => {
    E.target === e && ++f >= u && y();
  };
  setTimeout(() => {
    f < u && y();
  }, c + 1), e.addEventListener(h, C);
}
function ky(e, t) {
  const i = window.getComputedStyle(e), n = (L) => (i[L] || "").split(", "), a = n(`${Dn}Delay`), r = n(`${Dn}Duration`), o = Tf(a, r), c = n(`${$r}Delay`), u = n(`${$r}Duration`), h = Tf(c, u);
  let f = null, y = 0, C = 0;
  t === Dn ? o > 0 && (f = Dn, y = o, C = r.length) : t === $r ? h > 0 && (f = $r, y = h, C = u.length) : (y = Math.max(o, h), f = y > 0 ? o > h ? Dn : $r : null, C = f ? f === Dn ? r.length : u.length : 0);
  const E = f === Dn && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Dn}Property`).toString()
  );
  return {
    type: f,
    timeout: y,
    propCount: C,
    hasTransform: E
  };
}
function Tf(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((i, n) => kf(i) + kf(e[n])));
}
function kf(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ef(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ey(e, t, i) {
  const n = e[So];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
}
const Ms = /* @__PURE__ */ Symbol("_vod"), rv = /* @__PURE__ */ Symbol("_vsh"), nr = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: i }) {
    e[Ms] = e.style.display === "none" ? "" : e.style.display, i && t ? i.beforeEnter(e) : Fr(e, t);
  },
  mounted(e, { value: t }, { transition: i }) {
    i && t && i.enter(e);
  },
  updated(e, { value: t, oldValue: i }, { transition: n }) {
    !t != !i && (n ? t ? (n.beforeEnter(e), Fr(e, !0), n.enter(e)) : n.leave(e, () => {
      Fr(e, !1);
    }) : Fr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Fr(e, t);
  }
};
function Fr(e, t) {
  e.style.display = t ? e[Ms] : "none", e[rv] = !t;
}
const ov = /* @__PURE__ */ Symbol("");
function Ay(e) {
  const t = $a();
  if (!t)
    return;
  const i = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => zs(r, a));
  }, n = () => {
    const a = e(t.proxy);
    t.ce ? zs(t.ce, a) : pu(t.subTree, a), i(a);
  };
  Nh(() => {
    gh(n);
  }), Jn(() => {
    We(n, Ci, { flush: "post" });
    const a = new MutationObserver(n);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), Ro(() => a.disconnect());
  });
}
function pu(e, t) {
  if (e.shapeFlag & 128) {
    const i = e.suspense;
    e = i.activeBranch, i.pendingBranch && !i.isHydrating && i.effects.push(() => {
      pu(i.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    zs(e.el, t);
  else if (e.type === ie)
    e.children.forEach((i) => pu(i, t));
  else if (e.type === Cs) {
    let { el: i, anchor: n } = e;
    for (; i && (zs(i, t), i !== n); )
      i = i.nextSibling;
  }
}
function zs(e, t) {
  if (e.nodeType === 1) {
    const i = e.style;
    let n = "";
    for (const a in t) {
      const r = xb(t[a]);
      i.setProperty(`--${a}`, r), n += `--${a}: ${r};`;
    }
    i[ov] = n;
  }
}
const Oy = /(?:^|;)\s*display\s*:/;
function xy(e, t, i) {
  const n = e.style, a = ct(i);
  let r = !1;
  if (i && !a) {
    if (t)
      if (ct(t))
        for (const o of t.split(";")) {
          const c = o.slice(0, o.indexOf(":")).trim();
          i[c] == null && Kr(n, c, "");
        }
      else
        for (const o in t)
          i[o] == null && Kr(n, o, "");
    for (const o in i) {
      o === "display" && (r = !0);
      const c = i[o];
      c != null ? Ly(
        e,
        o,
        !ct(t) && t ? t[o] : void 0,
        c
      ) || Kr(n, o, c) : Kr(n, o, "");
    }
  } else if (a) {
    if (t !== i) {
      const o = n[ov];
      o && (i += ";" + o), n.cssText = i, r = Oy.test(i);
    }
  } else t && e.removeAttribute("style");
  Ms in e && (e[Ms] = r ? n.display : "", e[rv] && (n.display = "none"));
}
const fs = /\s*!important$/;
function Kr(e, t, i) {
  if (Oe(i))
    i.forEach((n) => Kr(e, t, n));
  else if (i == null && (i = ""), t.startsWith("--"))
    fs.test(i) ? e.setProperty(t, i.replace(fs, ""), "important") : e.setProperty(t, i);
  else {
    const n = Ny(e, t);
    fs.test(i) ? e.setProperty(
      Cn(n),
      i.replace(fs, ""),
      "important"
    ) : e[n] = i;
  }
}
const Af = ["Webkit", "Moz", "ms"], Tc = {};
function Ny(e, t) {
  const i = Tc[t];
  if (i)
    return i;
  let n = qt(t);
  if (n !== "filter" && n in e)
    return Tc[t] = n;
  n = Nl(n);
  for (let a = 0; a < Af.length; a++) {
    const r = Af[a] + n;
    if (r in e)
      return Tc[t] = r;
  }
  return t;
}
function Ly(e, t, i, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ct(n) && i === n;
}
const Of = "http://www.w3.org/1999/xlink";
function xf(e, t, i, n, a, r = Eb(t)) {
  n && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(Of, t.slice(6, t.length)) : e.setAttributeNS(Of, t, i) : i == null || r && !Wp(i) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Pi(i) ? String(i) : i
  );
}
function Nf(e, t, i, n, a) {
  if (t === "innerHTML" || t === "textContent") {
    i != null && (e[t] = t === "innerHTML" ? nv(i) : i);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = i == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(i);
    (c !== u || !("_value" in e)) && (e.value = u), i == null && e.removeAttribute(t), e._value = i;
    return;
  }
  let o = !1;
  if (i === "" || i == null) {
    const c = typeof e[t];
    c === "boolean" ? i = Wp(i) : i == null && c === "string" ? (i = "", o = !0) : c === "number" && (i = 0, o = !0);
  }
  try {
    e[t] = i;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function ka(e, t, i, n) {
  e.addEventListener(t, i, n);
}
function Ry(e, t, i, n) {
  e.removeEventListener(t, i, n);
}
const Lf = /* @__PURE__ */ Symbol("_vei");
function Iy(e, t, i, n, a = null) {
  const r = e[Lf] || (e[Lf] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [c, u] = Fy(t);
    if (n) {
      const h = r[t] = zy(
        n,
        a
      );
      ka(e, c, h, u);
    } else o && (Ry(e, c, o, u), r[t] = void 0);
  }
}
const Py = /(Once|Passive|Capture)$/, $y = /^on:?(?:Once|Passive|Capture)$/;
function Fy(e) {
  let t, i;
  for (; (i = e.match(Py)) && !$y.test(e); )
    t || (t = {}), e = e.slice(0, e.length - i[1].length), t[i[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Cn(e.slice(2)), t];
}
let kc = 0;
const Dy = /* @__PURE__ */ Promise.resolve(), My = () => kc || (Dy.then(() => kc = 0), kc = Date.now());
function zy(e, t) {
  const i = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= i.attached)
      return;
    const a = i.value;
    if (Oe(a)) {
      const r = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        r.call(n), n._stopped = !0;
      };
      const o = a.slice(), c = [n];
      for (let u = 0; u < o.length && !n._stopped; u++) {
        const h = o[u];
        h && ki(
          h,
          t,
          5,
          c
        );
      }
    } else
      ki(
        a,
        t,
        5,
        [n]
      );
  };
  return i.value = e, i.attached = My(), i;
}
const Rf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Uy = (e, t, i, n, a, r) => {
  const o = a === "svg";
  t === "class" ? Ey(e, n, o) : t === "style" ? xy(e, i, n) : Al(t) ? Ol(t) || Iy(e, t, i, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : jy(e, t, n, o)) ? (Nf(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && xf(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (By(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ct(n))) ? Nf(e, qt(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), xf(e, t, n, o));
};
function jy(e, t, i, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Rf(t) && Fe(i));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Rf(t) && ct(i) ? !1 : t in e;
}
function By(e, t) {
  const i = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!i)
    return !1;
  const n = qt(t);
  return Array.isArray(i) ? i.some((a) => qt(a) === n) : Object.keys(i).some((a) => qt(a) === n);
}
const Us = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Oe(t) ? (i) => Ss(t, i) : t;
};
function Hy(e) {
  e.target.composing = !0;
}
function If(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Aa = /* @__PURE__ */ Symbol("_assign"), ps = /* @__PURE__ */ Symbol("_initialValue");
function Ec(e, t, i) {
  return t && (e = e.trim()), i && (e = Ll(e)), e;
}
const pt = {
  created(e, { modifiers: { lazy: t, trim: i, number: n } }, a) {
    e.parentNode && (e.type === "text" ? e[ps] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[ps] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Aa] = Us(a);
    const r = n || a.props && a.props.type === "number";
    ka(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Aa](Ec(e.value, i, r));
    }), (i || r) && ka(e, "change", () => {
      e.value = Ec(e.value, i, r);
    }), t || (ka(e, "compositionstart", Hy), ka(e, "compositionend", If), ka(e, "change", If));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: i, number: n } }) {
    const a = t ?? "", r = e[ps];
    delete e[ps], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[Aa](Ec(e.value, i, n)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: i, modifiers: { lazy: n, trim: a, number: r } }, o) {
    if (e[Aa] = Us(o), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? Ll(e.value) : e.value, u = t ?? "";
    if (c === u)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (n && t === i || a && e.value.trim() === u) || (e.value = u);
  }
}, Jt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: i } }, n) {
    e._modelValue = t, ka(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => i ? Ll(js(u)) : js(u)
      ), r = e.multiple, o = r ? Ia(e._modelValue) ? new Set(a) : a : a[0], c = e._pendingValue = [
        r,
        r ? Oe(o) ? a.slice() : a : o
      ];
      try {
        e[Aa](o);
      } finally {
        ti(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[Aa] = Us(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Pf(e, t);
  },
  beforeUpdate(e, { value: t }, i) {
    e._modelValue = t, e[Aa] = Us(i);
  },
  updated(e, { value: t }) {
    const i = e._pendingValue;
    e._pendingValue = void 0, (!i || i[0] !== e.multiple || !Vy(t, i[1], i[0])) && Pf(e, t);
  }
};
function Vy(e, t, i) {
  if (!i || Oe(e)) return Yn(e, t);
  if (Ia(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function Pf(e, t) {
  const i = e.multiple, n = Oe(t);
  if (!(i && !n && !Ia(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const o = e.options[a], c = js(o);
      if (i)
        if (n) {
          const u = typeof c;
          u === "string" || u === "number" ? o.selected = t.some((h) => String(h) === String(c)) : o.selected = Ob(t, c) > -1;
        } else
          o.selected = t.has(c);
      else if (Yn(js(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !i && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function js(e) {
  return "_value" in e ? e._value : e.value;
}
const Ky = ["ctrl", "shift", "alt", "meta"], Gy = {
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
  exact: (e, t) => Ky.some((i) => e[`${i}Key`] && !t.includes(i))
}, Ee = (e, t) => {
  if (!e) return e;
  const i = e._withMods || (e._withMods = {}), n = t.join(".");
  return i[n] || (i[n] = ((a, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const c = Gy[t[o]];
      if (c && c(a, t)) return;
    }
    return e(a, ...r);
  }));
}, qy = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, at = (e, t) => {
  const i = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return i[n] || (i[n] = ((a) => {
    if (!("key" in a))
      return;
    const r = Cn(a.key);
    if (t.some(
      (o) => o === r || qy[o] === r
    ))
      return e(a);
  }));
}, Wy = /* @__PURE__ */ _t({ patchProp: Uy }, my);
let $f;
function Yy() {
  return $f || ($f = ey(Wy));
}
const Xy = ((...e) => {
  const t = Yy().createApp(...e), { mount: i } = t;
  return t.mount = (n) => {
    const a = Jy(n);
    if (!a) return;
    const r = t._component;
    !Fe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = i(a, !1, Zy(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
});
function Zy(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Jy(e) {
  return ct(e) ? document.querySelector(e) : e;
}
function Zu(e, t, i) {
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
function Ff(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function Qy(e) {
  if (Array.isArray(e)) return e;
}
function e_(e, t) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var n, a, r, o, c = [], u = !0, h = !1;
    try {
      if (r = (i = i.call(e)).next, t !== 0) for (; !(u = (n = r.call(i)).done) && (c.push(n.value), c.length !== t); u = !0) ;
    } catch (f) {
      h = !0, a = f;
    } finally {
      try {
        if (!u && i.return != null && (o = i.return(), Object(o) !== o)) return;
      } finally {
        if (h) throw a;
      }
    }
    return c;
  }
}
function t_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i_(e, t) {
  return Qy(e) || e_(e, t) || n_(e, t) || t_();
}
function n_(e, t) {
  if (e) {
    if (typeof e == "string") return Ff(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Ff(e, t) : void 0;
  }
}
const sv = Object.entries, Df = Object.setPrototypeOf, a_ = Object.isFrozen, r_ = Object.getPrototypeOf, o_ = Object.getOwnPropertyDescriptor;
let St = Object.freeze, Tt = Object.seal, Za = Object.create, lv = typeof Reflect < "u" && Reflect, hu = lv.apply, vu = lv.construct;
St || (St = function(t) {
  return t;
});
Tt || (Tt = function(t) {
  return t;
});
hu || (hu = function(t, i) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  return t.apply(i, a);
});
vu || (vu = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const Sa = wt(Array.prototype.forEach), s_ = wt(Array.prototype.lastIndexOf), Mf = wt(Array.prototype.pop), Dr = wt(Array.prototype.push), l_ = wt(Array.prototype.splice), ar = Array.isArray, Gr = wt(String.prototype.toLowerCase), Ac = wt(String.prototype.toString), zf = wt(String.prototype.match), Mr = wt(String.prototype.replace), Uf = wt(String.prototype.indexOf), c_ = wt(String.prototype.trim), u_ = wt(Number.prototype.toString), d_ = wt(Boolean.prototype.toString), jf = typeof BigInt > "u" ? null : wt(BigInt.prototype.toString), Bf = typeof Symbol > "u" ? null : wt(Symbol.prototype.toString), ai = wt(Object.prototype.hasOwnProperty), zr = wt(Object.prototype.toString), Bt = wt(RegExp.prototype.test), ya = f_(TypeError);
function wt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
      n[a - 1] = arguments[a];
    return hu(e, t, n);
  };
}
function f_(e) {
  return function() {
    for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
      i[n] = arguments[n];
    return vu(e, i);
  };
}
function Ge(e, t) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gr;
  if (Df && Df(e, null), !ar(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const r = i(a);
      r !== a && (a_(t) || (t[n] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function p_(e) {
  for (let t = 0; t < e.length; t++)
    ai(e, t) || (e[t] = null);
  return e;
}
function di(e) {
  const t = Za(null);
  for (const n of sv(e)) {
    var i = i_(n, 2);
    const a = i[0], r = i[1];
    ai(e, a) && (ar(r) ? t[a] = p_(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = di(r) : t[a] = r);
  }
  return t;
}
function h_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return u_(e);
    case "boolean":
      return d_(e);
    case "bigint":
      return jf ? jf(e) : "0";
    case "symbol":
      return Bf ? Bf(e) : "Symbol()";
    case "undefined":
      return zr(e);
    case "function":
    case "object": {
      if (e === null)
        return zr(e);
      const t = e, i = Ni(t, "toString");
      if (typeof i == "function") {
        const n = i(t);
        return typeof n == "string" ? n : zr(n);
      }
      return zr(e);
    }
    default:
      return zr(e);
  }
}
function Ni(e, t) {
  for (; e !== null; ) {
    const n = o_(e, t);
    if (n) {
      if (n.get)
        return wt(n.get);
      if (typeof n.value == "function")
        return wt(n.value);
    }
    e = r_(e);
  }
  function i() {
    return null;
  }
  return i;
}
function v_(e) {
  try {
    return Bt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Hf = St(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Oc = St(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), xc = St(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), g_ = St(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Nc = St(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), b_ = St(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Vf = St(["#text"]), Kf = St(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Lc = St(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Gf = St(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), hs = St(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), m_ = Tt(/{{[\w\W]*|^[\w\W]*}}/g), y_ = Tt(/<%[\w\W]*|^[\w\W]*%>/g), __ = Tt(/\${[\w\W]*/g), w_ = Tt(/^data-[\-\w.\u00B7-\uFFFF]+$/), S_ = Tt(/^aria-[\-\w]+$/), qf = Tt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), C_ = Tt(/^(?:\w+script|data):/i), T_ = Tt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), k_ = Tt(/^html$/i), E_ = Tt(/^[a-z][.\w]*(-[.\w]+)+$/i), Wf = Tt(/<[/\w!]/g), Yf = Tt(/<[/\w]/g), A_ = Tt(/<\/no(script|embed|frames)/i), O_ = Tt(/\/>/i), ci = {
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
}, cv = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], x_ = St(Ge({}, cv)), N_ = (function() {
  const e = {};
  return Sa(cv, (t) => {
    e[t] = Tt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), St(e);
})(), L_ = function() {
  return typeof window > "u" ? null : window;
}, R_ = function(t, i) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  i && i.hasAttribute(a) && (n = i.getAttribute(a));
  const r = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(r, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
  }
}, Xf = function() {
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
}, Mn = function(t, i, n, a) {
  return ai(t, i) && ar(t[i]) ? Ge(a.base ? di(a.base) : {}, t[i], a.transform) : n;
}, Rc = function(t, i, n) {
  const a = ai(t, i) ? t[i] : void 0;
  return a && typeof a == "object" ? di(a) : n();
};
function uv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : L_();
  const t = (te) => uv(te);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== ci.document || !e.Element)
    return t.isSupported = !1, t;
  let i = e.document;
  const n = i, a = n.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, o = e.Node, c = e.Element, u = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, y = e.trustedTypes, C = c.prototype, E = Ni(C, "cloneNode"), L = Ni(C, "remove"), A = Ni(C, "nextSibling"), N = Ni(C, "childNodes"), D = Ni(C, "parentNode"), M = Ni(C, "shadowRoot"), z = Ni(C, "attributes"), T = o && o.prototype ? Ni(o.prototype, "nodeType") : null, re = o && o.prototype ? Ni(o.prototype, "nodeName") : null, ue = o && o.prototype ? Ni(o.prototype, "ownerDocument") : null, Z = function(S) {
    return T ? T(S) : S.nodeType;
  }, pe = function(S) {
    return re ? re(S) : S.nodeName;
  };
  if (typeof r == "function") {
    const te = i.createElement("template");
    te.content && te.content.ownerDocument && (i = te.content.ownerDocument);
  }
  let Y, se = "", me, ee = !1, J = 0;
  const F = function() {
    if (J > 0)
      throw ya('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, U = function(S) {
    F(), J++;
    try {
      return Y.createHTML(S);
    } finally {
      J--;
    }
  }, W = function(S) {
    F(), J++;
    try {
      return Y.createScriptURL(S);
    } finally {
      J--;
    }
  }, le = function() {
    return ee || (me = R_(y, a), ee = !0), me;
  }, ae = i, be = ae.implementation, fe = ae.createNodeIterator, _e = ae.createDocumentFragment, Te = ae.getElementsByTagName, Ke = n.importNode;
  let Le = Xf();
  t.isSupported = typeof sv == "function" && typeof D == "function" && be && be.createHTMLDocument !== void 0;
  const ut = m_, vt = y_, nt = __, dt = w_, rt = S_, Pt = C_, H = T_, w = E_;
  let k = qf, O = null;
  const R = Ge({}, [...Hf, ...Oc, ...xc, ...Nc, ...Vf]);
  let I = null;
  const j = Ge({}, [...Kf, ...Lc, ...Gf, ...hs]);
  let G = Object.seal(Za(null, {
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
  })), K = null, Q = null;
  const V = Object.seal(Za(null, {
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
  let he = !0, oe = !0, ve = !1, xe = !0, Ie = !1, ze = !0, Pe = !1, He = !1, ot = null, gt = null, kt = !1, $t = !1, Ei = !1, et = !1, ft = !0, Fi = !1;
  const vi = "user-content-";
  let ta = !0, kn = !1, Di = {}, Ji = null;
  const cr = Ge({}, [
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
  let Qi = null;
  const En = Ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let An = null;
  const On = Ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), mt = "http://www.w3.org/1998/Math/MathML", Da = "http://www.w3.org/2000/svg", ri = "http://www.w3.org/1999/xhtml";
  let xn = ri, ia = !1, Ma = null;
  const na = Ge({}, [mt, Da, ri], Ac), Nn = St(["mi", "mo", "mn", "ms", "mtext"]);
  let ur = Ge({}, Nn);
  const Fo = St(["annotation-xml"]);
  let dr = Ge({}, Fo);
  const Ft = Ge({}, ["title", "style", "font", "a", "script"]);
  let gi = null;
  const Do = ["application/xhtml+xml", "text/html"], Xl = "text/html";
  let ht = null, Ln = null;
  const Zl = i.createElement("form"), Mo = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, fr = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ln && Ln === S)
      return;
    (!S || typeof S != "object") && (S = {}), S = di(S), gi = // eslint-disable-next-line unicorn/prefer-includes
    Do.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? Xl : S.PARSER_MEDIA_TYPE, ht = gi === "application/xhtml+xml" ? Ac : Gr, O = Mn(S, "ALLOWED_TAGS", R, {
      transform: ht
    }), I = Mn(S, "ALLOWED_ATTR", j, {
      transform: ht
    }), Ma = Mn(S, "ALLOWED_NAMESPACES", na, {
      transform: Ac
    }), An = Mn(S, "ADD_URI_SAFE_ATTR", On, {
      transform: ht,
      base: On
    }), Qi = Mn(S, "ADD_DATA_URI_TAGS", En, {
      transform: ht,
      base: En
    }), Ji = Mn(S, "FORBID_CONTENTS", cr, {
      transform: ht
    }), K = Mn(S, "FORBID_TAGS", di({}), {
      transform: ht
    }), Q = Mn(S, "FORBID_ATTR", di({}), {
      transform: ht
    }), Di = ai(S, "USE_PROFILES") ? S.USE_PROFILES && typeof S.USE_PROFILES == "object" ? di(S.USE_PROFILES) : S.USE_PROFILES : !1, he = S.ALLOW_ARIA_ATTR !== !1, oe = S.ALLOW_DATA_ATTR !== !1, ve = S.ALLOW_UNKNOWN_PROTOCOLS || !1, xe = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ie = S.SAFE_FOR_TEMPLATES || !1, ze = S.SAFE_FOR_XML !== !1, Pe = S.WHOLE_DOCUMENT || !1, $t = S.RETURN_DOM || !1, Ei = S.RETURN_DOM_FRAGMENT || !1, et = S.RETURN_TRUSTED_TYPE || !1, kt = S.FORCE_BODY || !1, ft = S.SANITIZE_DOM !== !1, Fi = S.SANITIZE_NAMED_PROPS || !1, ta = S.KEEP_CONTENT !== !1, kn = S.IN_PLACE || !1, k = v_(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : qf, xn = typeof S.NAMESPACE == "string" ? S.NAMESPACE : ri, ur = Rc(
      S,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ge({}, Nn)
      // Default built-in map
    ), dr = Rc(
      S,
      "HTML_INTEGRATION_POINTS",
      () => Ge({}, Fo)
      // Default built-in map
    );
    const P = Rc(S, "CUSTOM_ELEMENT_HANDLING", () => Za(null));
    if (G = Za(null), ai(P, "tagNameCheck") && Mo(P.tagNameCheck) && (G.tagNameCheck = P.tagNameCheck), ai(P, "attributeNameCheck") && Mo(P.attributeNameCheck) && (G.attributeNameCheck = P.attributeNameCheck), ai(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), Tt(G), Ie && (oe = !1), Ei && ($t = !0), Di && (O = Ge({}, Vf), I = Za(null), Di.html === !0 && (Ge(O, Hf), Ge(I, Kf)), Di.svg === !0 && (Ge(O, Oc), Ge(I, Lc), Ge(I, hs)), Di.svgFilters === !0 && (Ge(O, xc), Ge(I, Lc), Ge(I, hs)), Di.mathMl === !0 && (Ge(O, Nc), Ge(I, Gf), Ge(I, hs))), V.tagCheck = null, V.attributeCheck = null, ai(S, "ADD_TAGS") && (typeof S.ADD_TAGS == "function" ? V.tagCheck = S.ADD_TAGS : ar(S.ADD_TAGS) && (O === R && (O = di(O)), Ge(O, S.ADD_TAGS, ht))), ai(S, "ADD_ATTR") && (typeof S.ADD_ATTR == "function" ? V.attributeCheck = S.ADD_ATTR : ar(S.ADD_ATTR) && (I === j && (I = di(I)), Ge(I, S.ADD_ATTR, ht))), ai(S, "ADD_FORBID_CONTENTS") && ar(S.ADD_FORBID_CONTENTS) && (Ji === cr && (Ji = di(Ji)), Ge(Ji, S.ADD_FORBID_CONTENTS, ht)), ta && (O["#text"] = !0), Pe && Ge(O, ["html", "head", "body"]), O.table && (Ge(O, ["tbody"]), delete K.tbody), S.TRUSTED_TYPES_POLICY) {
      if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ya('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ya('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = Y;
      Y = S.TRUSTED_TYPES_POLICY;
      try {
        se = U("");
      } catch (ce) {
        throw Y = q, ce;
      }
    } else S.TRUSTED_TYPES_POLICY === null ? (Y = void 0, se = "") : (Y === void 0 && (Y = le()), Y && typeof se == "string" && (se = U("")));
    St && St(S), Ln = S;
  }, zo = Ge({}, [...Oc, ...xc, ...g_]), Uo = Ge({}, [...Nc, ...b_]), Jl = function(S, P, q) {
    return P.namespaceURI === ri ? S === "svg" : P.namespaceURI === mt ? S === "svg" && (q === "annotation-xml" || ur[q]) : !!zo[S];
  }, Ql = function(S, P, q) {
    return P.namespaceURI === ri ? S === "math" : P.namespaceURI === Da ? S === "math" && dr[q] : !!Uo[S];
  }, ec = function(S, P, q) {
    return P.namespaceURI === Da && !dr[q] || P.namespaceURI === mt && !ur[q] ? !1 : !Uo[S] && (Ft[S] || !zo[S]);
  }, tc = function(S) {
    let P = D(S);
    (!P || !P.tagName) && (P = {
      namespaceURI: xn,
      tagName: "template"
    });
    const q = Gr(S.tagName), ce = Gr(P.tagName);
    return Ma[S.namespaceURI] ? S.namespaceURI === Da ? Jl(q, P, ce) : S.namespaceURI === mt ? Ql(q, P, ce) : S.namespaceURI === ri ? ec(q, P, ce) : !!(gi === "application/xhtml+xml" && Ma[S.namespaceURI]) : !1;
  }, Mi = function(S) {
    Dr(t.removed, {
      element: S
    });
    try {
      D(S).removeChild(S);
    } catch {
      if (L(S), !D(S))
        throw ya("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, jo = function(S, P, q) {
    try {
      S.removeAttributeNode(P);
    } catch {
      try {
        S.removeAttribute(q);
      } catch {
      }
    }
  }, za = function(S) {
    Rn(S);
    const P = N(S);
    if (P) {
      const ce = [];
      Sa(P, (de) => {
        Dr(ce, de);
      }), Sa(ce, (de) => {
        try {
          L(de);
        } catch {
        }
      });
    }
    const q = z(S);
    if (q)
      for (let ce = q.length - 1; ce >= 0; --ce) {
        const de = q[ce], Ne = de && de.name;
        typeof Ne == "string" && jo(S, de, Ne);
      }
  }, zi = function(S, P, q) {
    if (!q)
      try {
        q = P.getAttributeNode(S);
      } catch {
        q = null;
      }
    Dr(t.removed, {
      attribute: q || null,
      from: P
    });
    try {
      q ? P.removeAttributeNode(q) : P.removeAttribute(S);
    } catch {
      try {
        P.removeAttribute(S);
      } catch {
      }
    }
    if (S === "is")
      if ($t || Ei)
        try {
          Mi(P);
        } catch {
        }
      else
        try {
          P.setAttribute(S, "");
        } catch {
        }
  }, pr = function(S) {
    const P = z(S);
    if (P)
      for (let q = P.length - 1; q >= 0; --q) {
        const ce = P[q], de = ce && ce.name;
        typeof de != "string" || I[ht(de)] || jo(S, ce, de);
      }
  }, Rn = function(S) {
    const P = [S];
    for (; P.length > 0; ) {
      const q = P.pop();
      Z(q) === ci.element && pr(q);
      const de = N(q);
      if (de)
        for (let Ne = de.length - 1; Ne >= 0; --Ne)
          P.push(de[Ne]);
    }
  }, Ua = function(S, P) {
    return ze ? S === "patchsrc" ? !0 : S === "for" && P !== "label" && P !== "output" : !1;
  }, hr = function(S) {
    if (!ze)
      return;
    const P = [S];
    for (; P.length > 0; ) {
      const q = P.pop(), ce = Z(q);
      if (ce === ci.processingInstruction || ce === ci.comment && Bt(Yf, q.data)) {
        try {
          L(q);
        } catch {
        }
        continue;
      }
      if (ce === ci.element) {
        const Ne = q, tt = ht(pe(q));
        try {
          Ne.hasAttribute && Ne.hasAttribute("patchsrc") && Ne.removeAttribute("patchsrc"), Ne.hasAttribute && Ne.hasAttribute("for") && Ua("for", tt) && Ne.removeAttribute("for");
        } catch {
        }
      }
      const de = N(q);
      if (de)
        for (let Ne = de.length - 1; Ne >= 0; --Ne)
          P.push(de[Ne]);
    }
  }, vr = function(S) {
    let P = null, q = null;
    if (kt)
      S = "<remove></remove>" + S;
    else {
      const Ne = zf(S, /^[\r\n\t ]+/);
      q = Ne && Ne[0];
    }
    gi === "application/xhtml+xml" && xn === ri && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const ce = Y ? U(S) : S;
    if (xn === ri)
      try {
        P = new f().parseFromString(ce, gi);
      } catch {
      }
    if (!P || !P.documentElement) {
      P = be.createDocument(xn, "template", null);
      try {
        P.documentElement.innerHTML = ia ? se : ce;
      } catch {
      }
    }
    const de = P.body || P.documentElement;
    return S && q && de.insertBefore(i.createTextNode(q), de.childNodes[0] || null), xn === ri ? Te.call(P, Pe ? "html" : "body")[0] : Pe ? P.documentElement : de;
  }, Bo = function(S) {
    const P = ue ? ue(S) : S.ownerDocument;
    return fe.call(
      P || S,
      S,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, aa = function(S) {
    return S = Mr(S, ut, " "), S = Mr(S, vt, " "), S = Mr(S, nt, " "), S;
  }, ja = function(S) {
    var P;
    S.normalize();
    const q = ue ? ue(S) : S.ownerDocument, ce = fe.call(
      q || S,
      S,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let de = ce.nextNode();
    for (; de; )
      de.data = aa(de.data), de = ce.nextNode();
    const Ne = (P = S.querySelectorAll) === null || P === void 0 ? void 0 : P.call(S, "template");
    Ne && Sa(Ne, (tt) => {
      Ui(tt.content) && ja(tt.content);
    });
  }, Ba = function(S) {
    const P = re ? re(S) : null;
    return typeof P != "string" || ht(P) !== "form" ? !1 : typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    S.attributes !== z(S) || typeof S.removeAttribute != "function" || typeof S.setAttribute != "function" || typeof S.namespaceURI != "string" || typeof S.insertBefore != "function" || typeof S.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    S.nodeType !== T(S) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    S.childNodes !== N(S);
  }, Ui = function(S) {
    if (!T || typeof S != "object" || S === null)
      return !1;
    try {
      return T(S) === ci.documentFragment;
    } catch {
      return !1;
    }
  }, en = function(S) {
    if (!T || typeof S != "object" || S === null)
      return !1;
    try {
      return typeof T(S) == "number";
    } catch {
      return !1;
    }
  };
  function oi(te, S, P) {
    te.length !== 0 && Sa(te, (q) => {
      q.call(t, S, P, Ln);
    });
  }
  const Ai = function(S, P) {
    return !!(ze && S.hasChildNodes() && !en(S.firstElementChild) && Bt(Wf, S.textContent) && Bt(Wf, S.innerHTML) || ze && S.namespaceURI === ri && x_[P] && (en(S.firstElementChild) || typeof S.textContent == "string" && Bt(N_[P], S.textContent)) || S.nodeType === ci.processingInstruction || ze && S.nodeType === ci.comment && Bt(Yf, S.data));
  }, ra = function(S, P) {
    if (S instanceof RegExp)
      return Bt(S, P);
    if (S instanceof Function) {
      for (var q = arguments.length, ce = new Array(q > 2 ? q - 2 : 0), de = 2; de < q; de++)
        ce[de - 2] = arguments[de];
      return !!S(P, ...ce);
    }
    return !1;
  }, Ho = function(S, P, q) {
    if (!K[P] && mr(P) && ra(G.tagNameCheck, P))
      return !1;
    if (ta && !Ji[P]) {
      const ce = D(S), de = N(S);
      if (de && ce) {
        const Ne = de.length;
        for (let tt = Ne - 1; tt >= 0; --tt) {
          const it = S === q ? E(de[tt], !0) : de[tt];
          ce.insertBefore(it, A(S));
        }
      }
    }
    return Mi(S), !0;
  }, gr = function(S, P, q, ce) {
    return S.length === 0 ? P : P === q || P === ce ? di(P) : P;
  }, Vo = function(S, P) {
    return S === P || D(S) !== null ? !1 : (kn && Rn(S), !0);
  }, Ko = function(S, P) {
    if (oi(Le.beforeSanitizeElements, S, null), Vo(S, P))
      return !0;
    if (Ba(S))
      return Mi(S), !0;
    const q = ht(pe(S));
    if (O = gr(Le.uponSanitizeElement, O, R, ot), oi(Le.uponSanitizeElement, S, {
      tagName: q,
      allowedTags: O
    }), Vo(S, P))
      return !0;
    if (Ai(S, q))
      return Mi(S), !0;
    if (K[q] || !(V.tagCheck instanceof Function && V.tagCheck(q)) && !O[q]) {
      const de = Ho(S, q, P);
      return de === !1 && oi(Le.afterSanitizeElements, S, null), de;
    }
    if (Z(S) === ci.element && !tc(S) || (q === "noscript" || q === "noembed" || q === "noframes") && Bt(A_, S.innerHTML))
      return Mi(S), !0;
    if (Ie && S.nodeType === ci.text) {
      const de = aa(S.textContent);
      S.textContent !== de && (Dr(t.removed, {
        element: S.cloneNode()
      }), S.textContent = de);
    }
    return oi(Le.afterSanitizeElements, S, null), !1;
  }, br = function(S, P, q) {
    if (Q[P] || Ua(P, S) || ft && (P === "id" || P === "name") && (q in i || q in Zl))
      return !1;
    const ce = I[P] || V.attributeCheck instanceof Function && V.attributeCheck(P, S);
    return oe && Bt(dt, P) || he && Bt(rt, P) ? !0 : ce ? An[P] || Bt(k, Mr(q, H, "")) || (P === "src" || P === "xlink:href" || P === "href") && S !== "script" && Uf(q, "data:") === 0 && Qi[S] || ve && !Bt(Pt, Mr(q, H, "")) ? !0 : !q : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      mr(S) && ra(G.tagNameCheck, S) && ra(G.attributeNameCheck, P, S) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      P === "is" && G.allowCustomizedBuiltInElements && ra(G.tagNameCheck, q)
    );
  }, Go = Ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), mr = function(S) {
    return !Go[Gr(S)] && Bt(w, S);
  }, ic = function(S, P, q, ce) {
    if (Y && typeof y == "object" && typeof y.getAttributeType == "function" && !q)
      switch (y.getAttributeType(S, P)) {
        case "TrustedHTML":
          return U(ce);
        case "TrustedScriptURL":
          return W(ce);
      }
    return ce;
  }, nc = function(S, P, q, ce) {
    try {
      q ? S.setAttributeNS(q, P, ce) : S.setAttribute(P, ce), Ba(S) ? Mi(S) : Mf(t.removed);
    } catch {
      zi(P, S);
    }
  }, qo = function(S) {
    oi(Le.beforeSanitizeAttributes, S, null);
    const P = S.attributes;
    if (!P || Ba(S))
      return;
    I = gr(Le.uponSanitizeAttribute, I, j, gt);
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: I,
      forceKeepAttr: void 0
    };
    let ce = P.length;
    const de = ht(S.nodeName);
    for (; ce--; ) {
      const Ne = P[ce], tt = Ne.name, it = Ne.namespaceURI, Mt = Ne.value, zt = ht(tt), Et = Mt;
      let st = tt === "value" ? Et : c_(Et);
      if (q.attrName = zt, q.attrValue = st, q.keepAttr = !0, q.forceKeepAttr = void 0, oi(Le.uponSanitizeAttribute, S, q), st = q.attrValue, Fi && (zt === "id" || zt === "name") && Uf(st, vi) !== 0 && (zi(tt, S, Ne), st = vi + st), ze && Bt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, st)) {
        zi(tt, S, Ne);
        continue;
      }
      if (zt === "attributename" && zf(st, "href")) {
        zi(tt, S, Ne);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          zi(tt, S, Ne);
          continue;
        }
        if (!xe && Bt(O_, st)) {
          zi(tt, S, Ne);
          continue;
        }
        if (Ie && (st = aa(st)), !br(de, zt, st)) {
          zi(tt, S, Ne);
          continue;
        }
        st = ic(de, zt, it, st), st !== Et && nc(S, tt, it, st);
      }
    }
    oi(Le.afterSanitizeAttributes, S, null);
  }, oa = function(S) {
    let P = null;
    const q = Bo(S);
    for (oi(Le.beforeSanitizeShadowDOM, S, null); P = q.nextNode(); )
      if (oi(Le.uponSanitizeShadowNode, P, null), Ko(P, S), qo(P), Ui(P.content) && oa(P.content), Z(P) === ci.element) {
        const ce = M(P);
        Ui(ce) && (Dt(ce), oa(ce));
      }
    oi(Le.afterSanitizeShadowDOM, S, null);
  }, Dt = function(S) {
    const P = [{
      node: S,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const q = P.pop();
      if (q.shadow) {
        oa(q.shadow);
        continue;
      }
      const ce = q.node, Ne = Z(ce) === ci.element, tt = N(ce);
      if (tt)
        for (let it = tt.length - 1; it >= 0; --it)
          P.push({
            node: tt[it],
            shadow: null
          });
      if (Ne) {
        const it = re ? re(ce) : null;
        if (typeof it == "string" && ht(it) === "template") {
          const Mt = ce.content;
          Ui(Mt) && P.push({
            node: Mt,
            shadow: null
          });
        }
      }
      if (Ne) {
        const it = M(ce);
        Ui(it) && P.push({
          node: null,
          shadow: it
        }, {
          node: it,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(te) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, q = null, ce = null, de = null;
    if (ia = !te, ia && (te = "<!-->"), typeof te != "string" && !en(te) && (te = h_(te), typeof te != "string"))
      throw ya("dirty is not a string, aborting");
    if (!t.isSupported)
      return te;
    He ? (O = ot, I = gt) : fr(S), (Le.uponSanitizeElement.length > 0 || Le.uponSanitizeAttribute.length > 0) && (O = di(O)), Le.uponSanitizeAttribute.length > 0 && (I = di(I)), t.removed = [];
    const Ne = kn && typeof te != "string" && en(te);
    if (Ne) {
      hr(te);
      const Mt = pe(te);
      if (typeof Mt == "string") {
        const zt = ht(Mt);
        if (!O[zt] || K[zt])
          throw za(te), ya("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ba(te))
        throw za(te), ya("root node is clobbered and cannot be sanitized in-place");
      try {
        Dt(te);
      } catch (zt) {
        throw za(te), zt;
      }
    } else if (en(te))
      P = vr("<!---->"), q = P.ownerDocument.importNode(te, !0), q.nodeType === ci.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? P = q : P.appendChild(q), Dt(q);
    else {
      if (!$t && !Ie && !Pe && // eslint-disable-next-line unicorn/prefer-includes
      te.indexOf("<") === -1)
        return Y && et ? U(te) : te;
      if (P = vr(te), !P)
        return $t ? null : et ? se : "";
    }
    P && kt && Mi(P.firstChild);
    const tt = Ne ? te : P;
    try {
      const Mt = Bo(tt);
      for (; ce = Mt.nextNode(); )
        Ko(ce, tt), qo(ce), Ui(ce.content) && oa(ce.content);
    } catch (Mt) {
      throw Ne && (za(te), Sa(t.removed, (zt) => {
        zt.element && Rn(zt.element);
      })), Mt;
    }
    if (Ne)
      return Sa(t.removed, (Mt) => {
        Mt.element && Rn(Mt.element);
      }), Ie && ja(te), te;
    if ($t) {
      if (Ie && ja(P), Ei)
        for (de = _e.call(P.ownerDocument); P.firstChild; )
          de.appendChild(P.firstChild);
      else
        de = P;
      return (I.shadowroot || I.shadowrootmode) && (de = Ke.call(n, de, !0)), de;
    }
    let it = Pe ? P.outerHTML : P.innerHTML;
    return Pe && O["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && Bt(k_, P.ownerDocument.doctype.name) && (it = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + it), Ie && (it = aa(it)), Y && et ? U(it) : it;
  }, t.setConfig = function() {
    let te = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    fr(te), He = !0, ot = O, gt = I;
  }, t.clearConfig = function() {
    Ln = null, He = !1, ot = null, gt = null, Y = me, se = "";
  }, t.isValidAttribute = function(te, S, P) {
    Ln || fr({});
    const q = ht(te), ce = ht(S);
    return br(q, ce, P);
  }, t.addHook = function(te, S) {
    typeof S == "function" && ai(Le, te) && Dr(Le[te], S);
  }, t.removeHook = function(te, S) {
    if (ai(Le, te)) {
      if (S !== void 0) {
        const P = s_(Le[te], S);
        return P === -1 ? void 0 : l_(Le[te], P, 1)[0];
      }
      return Mf(Le[te]);
    }
  }, t.removeHooks = function(te) {
    ai(Le, te) && (Le[te] = []);
  }, t.removeAllHooks = function() {
    Le = Xf();
  }, t;
}
var dv = uv();
function Ju(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ic, Zf;
function I_() {
  if (Zf) return Ic;
  Zf = 1;
  var e = /["'&<>]/;
  Ic = t;
  function t(i) {
    var n = "" + i, a = e.exec(n);
    if (!a)
      return n;
    var r, o = "", c = 0, u = 0;
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
      u !== c && (o += n.substring(u, c)), u = c + 1, o += r;
    }
    return u !== c ? o + n.substring(u, c) : o;
  }
  return Ic;
}
var P_ = I_();
const Bs = /* @__PURE__ */ Ju(P_);
function $_() {
  return globalThis._nc_l10n_locale;
}
function F_() {
  return $_().replaceAll(/_/g, "-");
}
function Hl() {
  return globalThis._nc_l10n_language;
}
function D_(e) {
  const t = Hl();
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
function fv(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function b(e, t, i, n, a) {
  const r = typeof i == "object" ? i : void 0, o = typeof n == "number" ? n : typeof i == "number" ? i : void 0, c = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof n == "object" ? n : {}
  }, u = (A) => A, h = (c.sanitize ? dv.sanitize : u) || u, f = c.escape ? Bs : u, y = (A) => typeof A == "string" || typeof A == "number", C = (A, N, D) => A.replace(/%n/g, "" + D).replace(/{([^{}]*)}/g, (M, z) => {
    if (N === void 0 || !(z in N))
      return f(M);
    const T = N[z];
    return y(T) ? f(`${T}`) : typeof T == "object" && y(T.value) ? (T.escape !== !1 ? Bs : u)(`${T.value}`) : f(M);
  });
  let L = (a?.bundle ?? fv(e)).translations[t] || t;
  return L = Array.isArray(L) ? L[0] : L, h(typeof r == "object" || o !== void 0 ? C(
    L,
    r,
    o
  ) : L);
}
function ui(e, t, i, n, a, r) {
  const o = "_" + t + "_::_" + i + "_", c = r?.bundle ?? fv(e), u = c.translations[o];
  if (typeof u < "u") {
    const h = u;
    if (Array.isArray(h)) {
      const f = c.pluralFunction(n);
      return b(e, h[f], a, n, r);
    }
  }
  return n === 1 ? b(e, t, a, n, r) : b(e, i, a, n, r);
}
function M_(e, t = Hl()) {
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
class Hs {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, i, n) {
    this.scope = `${n ? Hs.GLOBAL_SCOPE_PERSISTENT : Hs.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = i;
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
    return new Hs(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function pv(e) {
  return new z_(e);
}
function U_() {
  try {
    return Zu("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var Pc, Jf;
function hv() {
  if (Jf) return Pc;
  Jf = 1;
  var e = {};
  return Pc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...i) => console.error("SEMVER", ...i) : () => {
  }, Pc;
}
var $c, Qf;
function vv() {
  if (Qf) return $c;
  Qf = 1;
  const e = "2.0.0", t = 256, i = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, n = 16, a = t - 6;
  return $c = {
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
  }, $c;
}
var vs = { exports: {} }, ep;
function j_() {
  return ep || (ep = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: i,
      MAX_SAFE_BUILD_LENGTH: n,
      MAX_LENGTH: a
    } = vv(), r = hv();
    t = e.exports = {};
    const o = t.re = [], c = t.safeRe = [], u = t.src = [], h = t.safeSrc = [], f = t.t = {};
    let y = 0;
    const C = "[a-zA-Z0-9-]", E = [
      ["\\s", 1],
      ["\\d", a],
      [C, n]
    ], L = (N) => {
      for (const [D, M] of E)
        N = N.split(`${D}*`).join(`${D}{0,${M}}`).split(`${D}+`).join(`${D}{1,${M}}`);
      return N;
    }, A = (N, D, M) => {
      const z = L(D), T = y++;
      r(N, T, D), f[N] = T, u[T] = D, h[T] = z, o[T] = new RegExp(D, M ? "g" : void 0), c[T] = new RegExp(z, M ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${C}*`), A("MAINVERSION", `(${u[f.NUMERICIDENTIFIER]})\\.(${u[f.NUMERICIDENTIFIER]})\\.(${u[f.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${u[f.NUMERICIDENTIFIERLOOSE]})\\.(${u[f.NUMERICIDENTIFIERLOOSE]})\\.(${u[f.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${u[f.NONNUMERICIDENTIFIER]}|${u[f.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${u[f.NONNUMERICIDENTIFIER]}|${u[f.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${u[f.PRERELEASEIDENTIFIER]}(?:\\.${u[f.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${u[f.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[f.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${C}+`), A("BUILD", `(?:\\+(${u[f.BUILDIDENTIFIER]}(?:\\.${u[f.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${u[f.MAINVERSION]}${u[f.PRERELEASE]}?${u[f.BUILD]}?`), A("FULL", `^${u[f.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${u[f.MAINVERSIONLOOSE]}${u[f.PRERELEASELOOSE]}?${u[f.BUILD]}?`), A("LOOSE", `^${u[f.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${u[f.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${u[f.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${u[f.XRANGEIDENTIFIER]})(?:\\.(${u[f.XRANGEIDENTIFIER]})(?:\\.(${u[f.XRANGEIDENTIFIER]})(?:${u[f.PRERELEASE]})?${u[f.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${u[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[f.XRANGEIDENTIFIERLOOSE]})(?:${u[f.PRERELEASELOOSE]})?${u[f.BUILD]}?)?)?`), A("XRANGE", `^${u[f.GTLT]}\\s*${u[f.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${u[f.GTLT]}\\s*${u[f.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`), A("COERCE", `${u[f.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", u[f.COERCEPLAIN] + `(?:${u[f.PRERELEASE]})?(?:${u[f.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", u[f.COERCE], !0), A("COERCERTLFULL", u[f.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${u[f.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${u[f.LONETILDE]}${u[f.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${u[f.LONETILDE]}${u[f.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${u[f.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${u[f.LONECARET]}${u[f.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${u[f.LONECARET]}${u[f.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${u[f.GTLT]}\\s*(${u[f.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${u[f.GTLT]}\\s*(${u[f.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${u[f.GTLT]}\\s*(${u[f.LOOSEPLAIN]}|${u[f.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${u[f.XRANGEPLAIN]})\\s+-\\s+(${u[f.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${u[f.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[f.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(vs, vs.exports)), vs.exports;
}
var Fc, tp;
function B_() {
  if (tp) return Fc;
  tp = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Fc = (n) => n ? typeof n != "object" ? e : n : t, Fc;
}
var Dc, ip;
function H_() {
  if (ip) return Dc;
  ip = 1;
  const e = /^[0-9]+$/, t = (n, a) => {
    if (typeof n == "number" && typeof a == "number")
      return n === a ? 0 : n < a ? -1 : 1;
    const r = e.test(n), o = e.test(a);
    return r && o && (n = +n, a = +a), n === a ? 0 : r && !o ? -1 : o && !r ? 1 : n < a ? -1 : 1;
  };
  return Dc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (n, a) => t(a, n)
  }, Dc;
}
var Mc, np;
function gv() {
  if (np) return Mc;
  np = 1;
  const e = hv(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: i } = vv(), { safeRe: n, t: a } = j_(), r = B_(), { compareIdentifiers: o } = H_(), c = (h, f) => {
    const y = f.split(".");
    if (y.length > h.length)
      return !1;
    for (let C = 0; C < y.length; C++)
      if (o(h[C], y[C]) !== 0)
        return !1;
    return !0;
  };
  class u {
    constructor(f, y) {
      if (y = r(y), f instanceof u) {
        if (f.loose === !!y.loose && f.includePrerelease === !!y.includePrerelease)
          return f;
        f = f.version;
      } else if (typeof f != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof f}".`);
      if (f.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", f, y), this.options = y, this.loose = !!y.loose, this.includePrerelease = !!y.includePrerelease;
      const C = f.trim().match(y.loose ? n[a.LOOSE] : n[a.FULL]);
      if (!C)
        throw new TypeError(`Invalid Version: ${f}`);
      if (this.raw = f, this.major = +C[1], this.minor = +C[2], this.patch = +C[3], this.major > i || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > i || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > i || this.patch < 0)
        throw new TypeError("Invalid patch version");
      C[4] ? this.prerelease = C[4].split(".").map((E) => {
        if (/^[0-9]+$/.test(E)) {
          const L = +E;
          if (L >= 0 && L < i)
            return L;
        }
        return E;
      }) : this.prerelease = [], this.build = C[5] ? C[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(f) {
      if (e("SemVer.compare", this.version, this.options, f), !(f instanceof u)) {
        if (typeof f == "string" && f === this.version)
          return 0;
        f = new u(f, this.options);
      }
      return f.version === this.version ? 0 : this.compareMain(f) || this.comparePre(f);
    }
    compareMain(f) {
      return f instanceof u || (f = new u(f, this.options)), this.major < f.major ? -1 : this.major > f.major ? 1 : this.minor < f.minor ? -1 : this.minor > f.minor ? 1 : this.patch < f.patch ? -1 : this.patch > f.patch ? 1 : 0;
    }
    comparePre(f) {
      if (f instanceof u || (f = new u(f, this.options)), this.prerelease.length && !f.prerelease.length)
        return -1;
      if (!this.prerelease.length && f.prerelease.length)
        return 1;
      if (!this.prerelease.length && !f.prerelease.length)
        return 0;
      let y = 0;
      do {
        const C = this.prerelease[y], E = f.prerelease[y];
        if (e("prerelease compare", y, C, E), C === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (C === void 0)
          return -1;
        if (C === E)
          continue;
        return o(C, E);
      } while (++y);
    }
    compareBuild(f) {
      f instanceof u || (f = new u(f, this.options));
      let y = 0;
      do {
        const C = this.build[y], E = f.build[y];
        if (e("build compare", y, C, E), C === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (C === void 0)
          return -1;
        if (C === E)
          continue;
        return o(C, E);
      } while (++y);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(f, y, C) {
      if (f.startsWith("pre")) {
        if (!y && C === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (y) {
          const E = `-${y}`.match(this.options.loose ? n[a.PRERELEASELOOSE] : n[a.PRERELEASE]);
          if (!E || E[1] !== y)
            throw new Error(`invalid identifier: ${y}`);
        }
      }
      switch (f) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", y, C);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", y, C);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", y, C), this.inc("pre", y, C);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", y, C), this.inc("pre", y, C);
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
          const E = Number(C) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [E];
          else {
            let L = this.prerelease.length;
            for (; --L >= 0; )
              typeof this.prerelease[L] == "number" && (this.prerelease[L]++, L = -2);
            if (L === -1) {
              if (y === this.prerelease.join(".") && C === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(E);
            }
          }
          if (y) {
            let L = [y, E];
            if (C === !1 && (L = [y]), c(this.prerelease, y)) {
              const A = this.prerelease[y.split(".").length];
              isNaN(A) && (this.prerelease = L);
            } else
              this.prerelease = L;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${f}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return Mc = u, Mc;
}
var zc, ap;
function V_() {
  if (ap) return zc;
  ap = 1;
  const e = gv();
  return zc = (i, n) => new e(i, n).major, zc;
}
var K_ = V_();
const rp = /* @__PURE__ */ Ju(K_);
var Uc, op;
function G_() {
  if (op) return Uc;
  op = 1;
  const e = gv();
  return Uc = (i, n, a = !1) => {
    if (i instanceof e)
      return i;
    try {
      return new e(i, n);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, Uc;
}
var jc, sp;
function q_() {
  if (sp) return jc;
  sp = 1;
  const e = G_();
  return jc = (i, n) => {
    const a = e(i, n);
    return a ? a.version : null;
  }, jc;
}
var W_ = q_();
const Y_ = /* @__PURE__ */ Ju(W_);
class X_ {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !Y_(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : rp(t.getVersion()) !== rp(this.getVersion()) && console.warn(
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
class Z_ {
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
let Ur = null;
function Qu() {
  return Ur !== null ? Ur : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Ur = new X_(window._nc_event_bus) : Ur = window._nc_event_bus = new Z_(), Ur);
}
function bv(e, t) {
  Qu().subscribe(e, t);
}
function J_(e, t) {
  Qu().unsubscribe(e, t);
}
function mn(e, ...t) {
  Qu().emit(e, ...t);
}
const mv = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Q_ = Object.prototype.toString, e1 = (e) => Q_.call(e) === "[object Object]", qa = () => {
}, t1 = /* @__PURE__ */ i1();
function i1() {
  var e, t, i;
  return mv && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((i = window) === null || i === void 0 ? void 0 : i.navigator.userAgent));
}
function Bc(e) {
  return Array.isArray(e) ? e : [e];
}
function n1(e, t, i) {
  return We(e, t, {
    ...i,
    immediate: !0
  });
}
const yv = mv ? window : void 0;
function qr(e) {
  var t;
  const i = gn(e);
  return (t = i?.$el) !== null && t !== void 0 ? t : i;
}
function rr(...e) {
  const t = (n, a, r, o) => (n.addEventListener(a, r, o), () => n.removeEventListener(a, r, o)), i = B(() => {
    const n = Bc(gn(e[0])).filter((a) => a != null);
    return n.every((a) => typeof a != "string") ? n : void 0;
  });
  return n1(() => {
    var n, a;
    return [
      (n = (a = i.value) === null || a === void 0 ? void 0 : a.map((r) => qr(r))) !== null && n !== void 0 ? n : [yv].filter((r) => r != null),
      Bc(gn(i.value ? e[1] : e[0])),
      Bc(g(i.value ? e[2] : e[1])),
      gn(i.value ? e[3] : e[2])
    ];
  }, ([n, a, r, o], c, u) => {
    if (!n?.length || !a?.length || !r?.length) return;
    const h = e1(o) ? { ...o } : o, f = n.flatMap((y) => a.flatMap((C) => r.map((E) => t(y, C, E, h))));
    u(() => {
      f.forEach((y) => y());
    });
  }, { flush: "post" });
}
let lp = !1;
function cp(e, t, i = {}) {
  const { window: n = yv, ignore: a = [], capture: r = !0, detectIframe: o = !1, controls: c = !1 } = i;
  if (!n) return c ? {
    stop: qa,
    cancel: qa,
    trigger: qa
  } : qa;
  if (t1 && !lp) {
    lp = !0;
    const N = { passive: !0 };
    Array.from(n.document.body.children).forEach((D) => D.addEventListener("click", qa, N)), n.document.documentElement.addEventListener("click", qa, N);
  }
  let u = !0;
  const h = (N) => gn(a).some((D) => {
    if (typeof D == "string") return Array.from(n.document.querySelectorAll(D)).some((M) => M === N.target || N.composedPath().includes(M));
    {
      const M = qr(D);
      return M && (N.target === M || N.composedPath().includes(M));
    }
  });
  function f(N) {
    const D = gn(N);
    return D && D.$.subTree.shapeFlag === 16;
  }
  function y(N, D) {
    const M = gn(N), z = M.$.subTree && M.$.subTree.children;
    return z == null || !Array.isArray(z) ? !1 : z.some((T) => T.el === D.target || D.composedPath().includes(T.el));
  }
  const C = (N) => {
    const D = qr(e);
    if (N.target != null && !(!(D instanceof Element) && f(e) && y(e, N)) && !(!D || D === N.target || N.composedPath().includes(D))) {
      if ("detail" in N && N.detail === 0 && (u = !h(N)), !u) {
        u = !0;
        return;
      }
      t(N);
    }
  };
  let E = !1;
  const L = [
    rr(n, "click", (N) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), C(N));
    }, {
      passive: !0,
      capture: r
    }),
    rr(n, "pointerdown", (N) => {
      const D = qr(e);
      u = !h(N) && !!(D && !N.composedPath().includes(D));
    }, { passive: !0 }),
    o && rr(n, "blur", (N) => {
      setTimeout(() => {
        const D = qr(e);
        let M = n.document.activeElement;
        for (; M?.shadowRoot; ) M = M.shadowRoot.activeElement;
        M?.tagName === "IFRAME" && !D?.contains(n.document.activeElement) && t(N);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), A = () => L.forEach((N) => N());
  return c ? {
    stop: A,
    cancel: () => {
      u = !1;
    },
    trigger: (N) => {
      u = !0, C(N), u = !1;
    }
  } : A;
}
function a1(e, t = {}) {
  const { threshold: i = 50, onSwipe: n, onSwipeEnd: a, onSwipeStart: r, passive: o = !0 } = t, c = /* @__PURE__ */ xt({
    x: 0,
    y: 0
  }), u = /* @__PURE__ */ xt({
    x: 0,
    y: 0
  }), h = B(() => c.x - u.x), f = B(() => c.y - u.y), { max: y, abs: C } = Math, E = B(() => y(C(h.value), C(f.value)) >= i), L = /* @__PURE__ */ dh(!1), A = B(() => E.value ? C(h.value) > C(f.value) ? h.value > 0 ? "left" : "right" : f.value > 0 ? "up" : "down" : "none"), N = (Z) => [Z.touches[0].clientX, Z.touches[0].clientY], D = (Z, pe) => {
    c.x = Z, c.y = pe;
  }, M = (Z, pe) => {
    u.x = Z, u.y = pe;
  }, z = {
    passive: o,
    capture: !o
  }, T = (Z) => {
    L.value && a?.(Z, A.value), L.value = !1;
  }, re = [
    rr(e, "touchstart", (Z) => {
      if (Z.touches.length !== 1) return;
      const [pe, Y] = N(Z);
      D(pe, Y), M(pe, Y), r?.(Z);
    }, z),
    rr(e, "touchmove", (Z) => {
      if (Z.touches.length !== 1) return;
      const [pe, Y] = N(Z);
      M(pe, Y), z.capture && !z.passive && Math.abs(h.value) > Math.abs(f.value) && Z.preventDefault(), !L.value && E.value && (L.value = !0), L.value && n?.(Z);
    }, z),
    rr(e, ["touchend", "touchcancel"], T, z)
  ];
  return {
    isSwiping: L,
    direction: A,
    coordsStart: c,
    coordsEnd: u,
    lengthX: h,
    lengthY: f,
    stop: () => re.forEach((Z) => Z())
  };
}
var r1 = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let i = t, n = e, a = Im(), r = Rm(), o = /* @__PURE__ */ ke([]), c = B(() => o.value.reduce((H, w) => (H[~~w.id] = w) && H, {})), u = B(() => o.value.length), h = /* @__PURE__ */ ke(null), f = /* @__PURE__ */ ke(!1), y = /* @__PURE__ */ ke({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), C = /* @__PURE__ */ ke({
      splitter: null,
      timeoutId: null
    }), E = B(() => ({
      [`splitpanes splitpanes--${n.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": y.value.dragging,
      "splitpanes--ready": f.value
    })), L = () => {
      document.addEventListener("mousemove", D, { passive: !1 }), document.addEventListener("mouseup", M), "ontouchstart" in window && (document.addEventListener("touchmove", D, { passive: !1 }), document.addEventListener("touchend", M));
    }, A = () => {
      document.removeEventListener("mousemove", D, { passive: !1 }), document.removeEventListener("mouseup", M), "ontouchstart" in window && (document.removeEventListener("touchmove", D, { passive: !1 }), document.removeEventListener("touchend", M));
    }, N = (H, w) => {
      let k = H.target.closest(".splitpanes__splitter");
      if (k) {
        let { left: O, top: R } = k.getBoundingClientRect(), { clientX: I, clientY: j } = "ontouchstart" in window && H.touches ? H.touches[0] : H;
        y.value.cursorOffset = n.horizontal ? j - R : I - O;
      }
      L(), y.value.mouseDown = !0, y.value.activeSplitter = w, document.documentElement.style.cursor = n.horizontal ? "row-resize" : "col-resize";
    }, D = (H) => {
      y.value.mouseDown && (H.preventDefault(), y.value.dragging || (window.getSelection()?.removeAllRanges(), y.value.dragging = !0), requestAnimationFrame(() => {
        Y(Z(H)), rt("resize", { event: H }, !0);
      }));
    }, M = (H) => {
      y.value.dragging && (window.getSelection()?.removeAllRanges(), rt("resized", { event: H }, !0)), y.value.mouseDown = !1, y.value.activeSplitter = null, setTimeout(() => {
        y.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, z = (H, w) => {
      "ontouchstart" in window && (H.preventDefault(), C.value.splitter === w ? (clearTimeout(C.value.timeoutId), C.value.timeoutId = null, T(H, w), C.value.splitter = null) : (C.value.splitter = w, C.value.timeoutId = setTimeout(() => C.value.splitter = null, 500))), y.value.dragging || rt("splitter-click", {
        event: H,
        index: w
      }, !0);
    }, T = (H, w) => {
      if (rt("splitter-dblclick", {
        event: H,
        index: w
      }, !0), n.maximizePanes) {
        let k = 0;
        o.value = o.value.map((O, R) => (O.size = R === w ? O.max : O.min, R !== w && (k += O.min), O)), o.value[w].size -= k, rt("pane-maximize", {
          event: H,
          index: w,
          pane: o.value[w]
        }), rt("resized", {
          event: H,
          index: w
        }, !0);
      }
    }, re = (H, w) => {
      if (!n.keyboardStep) return;
      let k = n.horizontal ? H.key === "ArrowDown" : H.key === "ArrowRight", O = n.horizontal ? H.key === "ArrowUp" : H.key === "ArrowLeft";
      if (!k && !O) return;
      H.preventDefault(), y.value.activeSplitter = w;
      let R = (k ? 1 : -1) * (n.rtl && !n.horizontal ? -1 : 1), I = ee(w) + o.value[w].size;
      se(Math.min(Math.max(I + R * n.keyboardStep, 0), 100)), rt("resize", { event: H }, !0), rt("resized", { event: H }, !0), y.value.activeSplitter = null;
    }, ue = (H, w) => {
      let k = c.value[w];
      k && rt("pane-click", {
        event: H,
        index: k.index,
        pane: k
      });
    }, Z = (H) => {
      let w = h.value.getBoundingClientRect(), { clientX: k, clientY: O } = "ontouchstart" in window && H.touches ? H.touches[0] : H;
      return {
        x: k - (n.horizontal ? 0 : y.value.cursorOffset) - w.left,
        y: O - (n.horizontal ? y.value.cursorOffset : 0) - w.top
      };
    }, pe = (H) => {
      H = H[n.horizontal ? "y" : "x"];
      let w = h.value[n.horizontal ? "clientHeight" : "clientWidth"];
      return n.rtl && !n.horizontal && (H = w - H), H * 100 / w;
    }, Y = (H) => {
      se(pe(H));
    }, se = (H) => {
      let w = y.value.activeSplitter;
      if (w === null || w >= o.value.length - 1) return;
      let k = {
        prevPanesSize: ee(w),
        nextPanesSize: J(w),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, O = 0 + (n.pushOtherPanes ? 0 : k.prevPanesSize), R = 100 - (n.pushOtherPanes ? 0 : k.nextPanesSize);
      H = Math.max(Math.min(H, R), O);
      let I = [w, w + 1], j = o.value[I[0]] || null, G = o.value[I[1]] || null, K = j !== null && j.max < 100 && H >= j.max + k.prevPanesSize, Q = G !== null && G.max < 100 && H <= 100 - (G.max + J(w + 1));
      if (K || Q) {
        K ? (j.size = j.max, G.size = Math.min(Math.max(100 - j.max - k.prevPanesSize - k.nextPanesSize, G.min), G.max)) : (j.size = Math.min(Math.max(100 - G.max - k.prevPanesSize - J(w + 1), j.min), j.max), G.size = G.max);
        return;
      }
      if (n.pushOtherPanes) {
        let V = me(k, H);
        if (!V) return;
        ({ sums: k, panesToResize: I } = V), j = o.value[I[0]] || null, G = o.value[I[1]] || null;
      }
      j !== null && (j.size = Math.min(Math.max(H - k.prevPanesSize - k.prevReachedMinPanes, j.min), j.max)), G !== null && (G.size = Math.min(Math.max(100 - H - k.nextPanesSize - k.nextReachedMinPanes, G.min), G.max));
    }, me = (H, w) => {
      let k = y.value.activeSplitter, O = [k, k + 1];
      if (w < H.prevPanesSize + o.value[O[0]].min) {
        if (O[0] = F(k).index, H.prevReachedMinPanes = 0, O[0] < k && o.value.forEach((R, I) => {
          I > O[0] && I <= k && (R.size = R.min, H.prevReachedMinPanes += R.min);
        }), O[0] === void 0) return H.prevReachedMinPanes = 0, o.value[0].size = o.value[0].min, o.value.forEach((R, I) => {
          I > 0 && I <= k && (R.size = R.min, H.prevReachedMinPanes += R.min);
        }), o.value[O[1]].size = 100 - H.prevReachedMinPanes - o.value[0].min - H.prevPanesSize - H.nextPanesSize, null;
        H.prevPanesSize = ee(O[0]);
      }
      return w > 100 - H.nextPanesSize - o.value[O[1]].min && (O[1] = U(k).index, H.nextReachedMinPanes = 0, O[1] > k + 1 && o.value.forEach((R, I) => {
        I > k && I < O[1] && (R.size = R.min, H.nextReachedMinPanes += R.min);
      }), H.nextPanesSize = O[1] === void 0 ? 0 : J(O[1] - 1), O[1] === void 0) ? (H.nextReachedMinPanes = 0, o.value.forEach((R, I) => {
        I >= k + 1 && (R.size = R.min, H.nextReachedMinPanes += R.min);
      }), O[0] !== void 0 && (o.value[O[0]].size = 100 - H.prevPanesSize - J(O[0] - 1)), null) : {
        sums: H,
        panesToResize: O
      };
    }, ee = (H) => o.value.reduce((w, k, O) => w + (O < H ? k.size : 0), 0), J = (H) => o.value.reduce((w, k, O) => w + (O > H + 1 ? k.size : 0), 0), F = (H) => [...o.value].reverse().find((w) => w.index < H && w.size > w.min) || {}, U = (H) => o.value.find((w) => w.index > H + 1 && w.size > w.min) || {}, W = () => {
      let H = Array.from(h.value?.children || []);
      for (let w of H) {
        let k = w.classList.contains("splitpanes__pane"), O = w.classList.contains("splitpanes__splitter");
        !k && !O && (w.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, le = (H, w, k = !1) => {
      let O = H - 1, R = document.createElement("div");
      R.classList.add("splitpanes__splitter"), k || (R.onmousedown = (I) => N(I, O), typeof window < "u" && "ontouchstart" in window && (R.ontouchstart = (I) => N(I, O)), R.onclick = (I) => z(I, O + 1), n.keyboardStep && (R.setAttribute("tabindex", "0"), R.setAttribute("role", "separator"), R.setAttribute("aria-orientation", n.horizontal ? "horizontal" : "vertical"), R.onkeydown = (I) => re(I, O))), R.ondblclick = (I) => T(I, O + 1), w.parentNode.insertBefore(R, w);
    }, ae = (H) => {
      H.onmousedown = null, H.onclick = null, H.ondblclick = null, H.onkeydown = null, H.remove();
    }, be = () => {
      let H = Array.from(h.value?.children || []);
      for (let k of H) k.className.includes("splitpanes__splitter") && ae(k);
      let w = 0;
      for (let k of H) k.className.includes("splitpanes__pane") && (!w && n.firstSplitter ? le(w, k, !0) : w && le(w, k), w++);
    }, fe = ({ uid: H, ...w }) => {
      let k = c.value[H];
      for (let [O, R] of Object.entries(w)) k[O] = R;
    }, _e = !1, Te = (H) => {
      let w = -1;
      Array.from(h.value?.children || []).some((k) => (k.className.includes("splitpanes__pane") && w++, k.isSameNode(H.el))), o.value.splice(w, 0, {
        ...H,
        index: w
      }), o.value.forEach((k, O) => k.index = O), f.value && !_e && (_e = !0, ti(() => {
        be(), Le({ addedPane: o.value[w] }), rt("pane-add", { pane: o.value[w] }), _e = !1;
      }));
    }, Ke = (H) => {
      let w = o.value.findIndex((O) => O.id === H);
      o.value[w].el = null;
      let k = o.value.splice(w, 1)[0];
      o.value.forEach((O, R) => O.index = R), ti(() => {
        be(), rt("pane-remove", { pane: k }), Le({ removedPane: {
          ...k
        } });
      });
    }, Le = (H = {}) => {
      !H.addedPane && !H.removedPane ? vt() : o.value.some((w) => w.givenSize !== null || w.min || w.max < 100) ? nt(H) : ut(), f.value && rt("resized");
    }, ut = () => {
      let H = 100 / u.value, w = 100, k = [], O = [];
      for (let R of o.value) R.size = Math.max(Math.min(H, R.max), R.min), w -= R.size, R.size >= R.max && k.push(R.id), R.size <= R.min && O.push(R.id);
      Math.abs(w) > 0.1 && dt(w, k, O);
    }, vt = () => {
      let H = 100, w = [], k = [], O = 0;
      for (let I of o.value) H -= I.size, I.givenSize !== null && O++, I.size >= I.max && w.push(I.id), I.size <= I.min && k.push(I.id);
      let R = 100;
      if (H > 0.1) {
        for (let I of o.value) I.givenSize === null && (I.size = Math.max(Math.min(H / (u.value - O), I.max), I.min)), R -= I.size;
        R > 0.1 && dt(R, w, k);
      }
    }, nt = ({ addedPane: H, removedPane: w } = {}) => {
      let k = o.value.reduce((K, Q) => K + (Q.givenSize === null ? 0 : Q.givenSize), 0), O = o.value.filter((K) => K.givenSize === null).length, R = O > 0 ? (100 - k) / O : 0, I = 0, j = [], G = [];
      for (let K of o.value) I -= K.size, K.size >= K.max && j.push(K.id), K.size <= K.min && G.push(K.id);
      if (!(Math.abs(I) < 0.1)) {
        I = 100;
        for (let K of o.value) K.givenSize === null && (K.size = Math.max(Math.min(R, K.max), K.min)), I -= K.size, K.size >= K.max && j.push(K.id), K.size <= K.min && G.push(K.id);
        Math.abs(I) > 0.1 && dt(I, j, G);
      }
    }, dt = (H, w, k) => {
      let O;
      O = H > 0 ? H / (u.value - w.length) : H / (u.value - k.length), o.value.forEach((R, I) => {
        if (H > 0 && !w.includes(R.id)) {
          let j = Math.max(Math.min(R.size + O, R.max), R.min), G = j - R.size;
          H -= G, R.size = j;
        } else if (!k.includes(R.id)) {
          let j = Math.max(Math.min(R.size + O, R.max), R.min), G = j - R.size;
          H -= G, R.size = j;
        }
      }), Math.abs(H) > 0.1 && f.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, rt = (H, w = void 0, k = !1) => {
      let O = w?.index ?? y.value.activeSplitter ?? null;
      i(H, {
        ...w,
        ...O !== null && { index: O },
        ...k && O !== null && {
          prevPane: o.value[O - +!!n.firstSplitter],
          nextPane: o.value[O + +!n.firstSplitter]
        },
        panes: o.value.map((R) => ({
          min: R.min,
          max: R.max,
          size: R.size
        }))
      });
    };
    We(() => n.firstSplitter, () => be()), We(() => n.horizontal, (H) => ti(() => {
      i("direction-changed", {
        horizontal: H,
        panes: o.value.map((w) => ({
          min: w.min,
          max: w.max,
          size: w.size
        }))
      });
    })), Jn(() => {
      W(), be(), Le(), rt("ready"), f.value = !0;
    }), lr(() => f.value = !1);
    let Pt = () => {
      let { class: H, ...w } = a;
      return ni("div", {
        ref: h,
        class: [E.value, H],
        ...w
      }, r.default?.());
    };
    return _i("panes", o), _i("indexedPanes", c), _i("horizontal", B(() => n.horizontal)), _i("requestUpdate", fe), _i("onPaneAdd", Te), _i("onPaneRemove", Ke), _i("onPaneClick", ue), (H, w) => (m(), je(Ku(Pt)));
  }
}), o1 = {
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
    let t = e, i = Kt("requestUpdate"), n = Kt("onPaneAdd"), a = Kt("horizontal"), r = Kt("onPaneRemove"), o = Kt("onPaneClick"), c = $a()?.uid, u = Kt("indexedPanes"), h = B(() => u.value[c]), f = /* @__PURE__ */ ke(null), y = B(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, E.value), C.value);
    }), C = B(() => {
      let A = parseFloat(t.minSize);
      return isNaN(A) ? 0 : A;
    }), E = B(() => {
      let A = parseFloat(t.maxSize);
      return isNaN(A) ? 100 : A;
    }), L = B(() => {
      let A = h.value?.size ?? (t.size === void 0 ? void 0 : y.value);
      return A === void 0 ? "" : `${a.value ? "height" : "width"}: ${A}%`;
    });
    return We(() => y.value, (A) => i({
      uid: c,
      size: A
    })), We(() => C.value, (A) => i({
      uid: c,
      min: A
    })), We(() => E.value, (A) => i({
      uid: c,
      max: A
    })), Jn(() => {
      n({
        id: c,
        el: f.value,
        min: C.value,
        max: E.value,
        givenSize: t.size === void 0 ? null : y.value,
        size: y.value
      });
    }), lr(() => r(c)), (A, N) => (m(), _("div", {
      ref_key: "paneEl",
      ref: f,
      class: "splitpanes__pane",
      onClick: N[0] ||= (D) => g(o)(D, A._.uid),
      style: hi(L.value)
    }, [Me(A.$slots, "default")], 4));
  }
}, s1 = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", l1 = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", c1 = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", u1 = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const ed = 1024, _v = ed / 2, Vs = (e) => document.documentElement.clientWidth < e, wv = /* @__PURE__ */ ke(Vs(ed)), Sv = /* @__PURE__ */ ke(Vs(_v));
window.addEventListener("resize", () => {
  wv.value = Vs(ed), Sv.value = Vs(_v);
}, { passive: !0 });
function $o() {
  return /* @__PURE__ */ ho(wv);
}
function d1() {
  return /* @__PURE__ */ ho(Sv);
}
class f1 {
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
    return b("", t, i, void 0, { bundle: this.bundle });
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
    return ui("", t, i, n, a, { bundle: this.bundle });
  }
}
class p1 {
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
    return this.setLanguage(Hl().replace("-", "_"));
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
    const t = new f1((i) => M_(i, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function h1() {
  return new p1();
}
const Cv = h1().detectLanguage().build(), Ct = (...e) => Cv.gettext(...e);
function Qn(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: i, t: n } of t) {
        if (i !== Hl() || !n)
          continue;
        const a = Object.fromEntries(Object.entries(n).map(([r, o]) => [
          r,
          {
            msgid: r,
            msgid_plural: o.p,
            msgstr: o.v
          }
        ]));
        Cv.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const v1 = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], g1 = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], b1 = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], m1 = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], y1 = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], _1 = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], w1 = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], S1 = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], C1 = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const T1 = /* @__PURE__ */ Symbol(""), [k1] = window.OC?.config?.version?.split(".") ?? [], Tv = Number.parseInt(k1 ?? "35"), E1 = Tv < 32, ea = Tv < 34, A1 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function O1() {
  return Kt(A1, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Qe = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
}, x1 = { class: "button-vue__wrapper" }, N1 = { class: "button-vue__icon" }, L1 = { class: "button-vue__text" }, R1 = /* @__PURE__ */ It({
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
    const i = e, n = t, { formBoxItemClass: a } = O1(), r = Kt(T1, null) !== null, o = B(() => r && i.to ? "RouterLink" : i.href ? "a" : "button"), c = B(() => o.value === "button" && typeof i.pressed == "boolean"), u = B(() => i.pressed ? "primary" : i.pressed === !1 && i.variant === "primary" ? "secondary" : i.variant), h = B(() => u.value.startsWith("tertiary")), f = B(() => i.alignment.split("-")[0]), y = B(() => i.alignment.includes("-")), C = Kt("NcPopover:trigger:attrs", () => ({}), !1), E = B(() => C()), L = B(() => {
      if (o.value === "RouterLink")
        return {
          to: i.to,
          activeClass: "active"
        };
      if (o.value === "a")
        return {
          href: i.href || "#",
          target: i.target,
          rel: "nofollow noreferrer noopener",
          download: i.download || void 0
        };
      if (o.value === "button")
        return {
          ...E.value,
          "aria-pressed": i.pressed,
          type: i.type,
          disabled: i.disabled
        };
    });
    function A(N) {
      c.value && n("update:pressed", !i.pressed), n("click", N);
    }
    return (N, D) => (m(), je(Ku(o.value), Yt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${u.value}`]: u.value,
          "button-vue--tertiary": h.value,
          "button-vue--wide": e.wide,
          [`button-vue--${f.value}`]: f.value !== "center",
          "button-vue--reverse": y.value,
          "button-vue--legacy": g(E1),
          "button-vue--legacy34": g(ea)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, L.value, { onClick: A }), {
      default: $e(() => [
        l("span", x1, [
          l("span", N1, [
            Me(N.$slots, "icon", {}, void 0, !0)
          ]),
          l("span", L1, [
            Me(N.$slots, "default", {}, () => [
              ye(v(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Yi = /* @__PURE__ */ Qe(R1, [["__scopeId", "data-v-47ce59a3"]]), I1 = ["aria-hidden", "aria-label"], P1 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, $1 = ["d"], F1 = ["innerHTML"], D1 = /* @__PURE__ */ It({
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
    Ay((a) => ({
      fb515064: i.value
    }));
    const t = e, i = B(() => typeof t.size == "number" ? `${t.size}px` : t.size), n = B(() => {
      if (!t.svg || t.path)
        return;
      const a = dv.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (m(), _("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: ge(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      n.value ? (m(), _("span", {
        key: 1,
        innerHTML: n.value
      }, null, 8, F1)) : (m(), _("svg", P1, [
        l("path", { d: e.path }, null, 8, $1)
      ]))
    ], 10, I1));
  }
}), Vl = /* @__PURE__ */ Qe(D1, [["__scopeId", "data-v-aaedb1c3"]]);
z1();
function M1(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), mn("csrf-token-update", { token: e, _internal: !0 }));
}
function z1() {
  bv("csrf-token-update", ({ token: e, _internal: t }) => {
    t || M1(e);
  });
}
pv("public").persist().build();
let Wa;
function up(e, t) {
  return e ? e.getAttribute(t) : null;
}
function U1() {
  if (Wa !== void 0)
    return Wa;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = up(e, "data-user");
  return t === null ? (Wa = null, Wa) : (Wa = {
    uid: t,
    displayName: up(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Wa);
}
var yt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(yt || {});
class j1 {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, i, n) {
    let a = "[" + yt[i].toUpperCase() + "] ";
    return n && n.app && (a += n.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), i === yt.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, i, n) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof i == "object" && n?.error === void 0 && (n.error = i), t) {
        case yt.Debug:
          console.debug(this.formatMessage(i, yt.Debug, n), n);
          break;
        case yt.Info:
          console.info(this.formatMessage(i, yt.Info, n), n);
          break;
        case yt.Warn:
          console.warn(this.formatMessage(i, yt.Warn, n), n);
          break;
        case yt.Error:
          console.error(this.formatMessage(i, yt.Error, n), n);
          break;
        case yt.Fatal:
        default:
          console.error(this.formatMessage(i, yt.Fatal, n), n);
          break;
      }
  }
  debug(t, i) {
    this.log(yt.Debug, t, Object.assign({}, this.context, i));
  }
  info(t, i) {
    this.log(yt.Info, t, Object.assign({}, this.context, i));
  }
  warn(t, i) {
    this.log(yt.Warn, t, Object.assign({}, this.context, i));
  }
  error(t, i) {
    this.log(yt.Error, t, Object.assign({}, this.context, i));
  }
  fatal(t, i) {
    this.log(yt.Fatal, t, Object.assign({}, this.context, i));
  }
}
function B1(e) {
  return new j1(e);
}
class H1 {
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
    const t = U1();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, i = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? yt.Warn, window._oc_debug && (t.context.level = yt.Debug), document.removeEventListener("readystatechange", i)) : document.addEventListener("readystatechange", i);
    };
    return i(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function V1() {
  return new H1(B1);
}
const Ra = V1().detectUser().setApp("@nextcloud/vue").build();
function K1(e) {
  let t = !1, i;
  return (...n) => (t || (t = !0, i = e(...n)), i);
}
let kv = "missing-app-name";
try {
  kv = "library";
} catch {
  Ra.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const G1 = kv;
let q1 = "";
try {
  q1 = "0.1.0-alpha.174";
} catch {
  Ra.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Ev() {
  return Kt("appName", G1);
}
const W1 = K1(() => {
  const e = Zu("core", "apps", []), t = Ev();
  return e.find(({ id: i }) => i === t)?.name ?? t;
}), gu = D_();
Qn(w1);
const Y1 = /* @__PURE__ */ It({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = $o();
    We(t, i), Jn(() => {
      i(t.value);
    }), lr(() => {
      t.value && i(!1);
    });
    function i(n = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = n ? "none" : "", n === !0 && mn("toggle-navigation", { open: !1 }));
    }
    return (n, a) => (m(), je(g(Yi), {
      "aria-label": g(Ct)("Go back to the list"),
      class: ge(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(Ct)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: $e(() => [
        Ae(g(Vl), {
          directional: "",
          path: g(s1)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), X1 = /* @__PURE__ */ Qe(Y1, [["__scopeId", "data-v-a28923a1"]]), dp = pv("nextcloud").persist().build(), Z1 = U_().theming?.name ?? "Nextcloud", J1 = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: X1,
    Pane: o1,
    Splitpanes: r1
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
      appName: Ev(),
      localizedAppName: W1(),
      isMobile: $o(),
      isRtl: gu
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
        return Ra.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(Z1), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = a1(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? mn("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && mn("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      dp.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), Ra.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(dp.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return Ra.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, Q1 = {
  key: 0,
  class: "hidden-visually"
}, e0 = { class: "app-content-wrapper__list" }, t0 = {
  key: 1,
  class: "app-content-wrapper"
};
function i0(e, t, i, n, a, r) {
  const o = Be("NcAppContentDetailsToggle"), c = Be("Pane"), u = Be("Splitpanes");
  return m(), _("main", {
    id: "app-content-vue",
    class: ge(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    i.pageHeading ? (m(), _("h1", Q1, v(i.pageHeading), 1)) : $("", !0),
    e.$slots.list ? (m(), _(ie, { key: 1 }, [
      n.isMobile || i.layout === "no-split" ? (m(), _("div", {
        key: 0,
        class: ge(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": i.showDetails,
          "app-content-wrapper--show-list": !i.showDetails,
          "app-content-wrapper--mobile": n.isMobile
        }])
      }, [
        i.showDetails ? (m(), je(o, {
          key: 0,
          onClick: Ee(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : $("", !0),
        Re(l("div", e0, [
          Me(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [nr, !i.showDetails]
        ]),
        i.showDetails ? Me(e.$slots, "default", { key: 1 }, void 0, !0) : $("", !0)
      ], 2)) : i.layout === "vertical-split" || i.layout === "horizontal-split" ? (m(), _("div", t0, [
        Ae(u, {
          horizontal: i.layout === "horizontal-split",
          class: ge(["default-theme", {
            "splitpanes--horizontal": i.layout === "horizontal-split",
            "splitpanes--vertical": i.layout === "vertical-split"
          }]),
          rtl: n.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: $e(() => [
            Ae(c, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: $e(() => [
                Me(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            Ae(c, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: $e(() => [
                Me(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : $("", !0)
    ], 64)) : $("", !0),
    e.$slots.list ? $("", !0) : Me(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const n0 = /* @__PURE__ */ Qe(J1, [["render", i0], ["__scopeId", "data-v-51427d61"]]);
var Av = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Ks = /* @__PURE__ */ Av.join(","), Ov = typeof Element > "u", Pa = Ov ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Gs = !Ov && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, qs = function(t, i) {
  var n;
  i === void 0 && (i = !0);
  var a = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), r = a === "" || a === "true", o = r || i && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : qs(t.parentNode));
  return o;
}, a0 = function(t) {
  var i, n = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "contenteditable");
  return n === "" || n === "true";
}, xv = function(t, i, n) {
  if (qs(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Ks));
  return i && Pa.call(t, Ks) && a.unshift(t), a = a.filter(n), a;
}, Ws = function(t, i, n) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var o = r.shift();
    if (!qs(o, !1))
      if (o.tagName === "SLOT") {
        var c = o.assignedElements(), u = c.length ? c : o.children, h = Ws(u, !0, n);
        n.flatten ? a.push.apply(a, h) : a.push({
          scopeParent: o,
          candidates: h
        });
      } else {
        var f = Pa.call(o, Ks);
        f && n.filter(o) && (i || !t.includes(o)) && a.push(o);
        var y = o.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(o), C = !qs(y, !1) && (!n.shadowRootFilter || n.shadowRootFilter(o));
        if (y && C) {
          var E = Ws(y === !0 ? o.children : y.children, !0, n);
          n.flatten ? a.push.apply(a, E) : a.push({
            scopeParent: o,
            candidates: E
          });
        } else
          r.unshift.apply(r, o.children);
      }
  }
  return a;
}, Nv = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Ea = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || a0(t)) && !Nv(t) ? 0 : t.tabIndex;
}, r0 = function(t, i) {
  var n = Ea(t);
  return n < 0 && i && !Nv(t) ? 0 : n;
}, o0 = function(t, i) {
  return t.tabIndex === i.tabIndex ? t.documentOrder - i.documentOrder : t.tabIndex - i.tabIndex;
}, Lv = function(t) {
  return t.tagName === "INPUT";
}, s0 = function(t) {
  return Lv(t) && t.type === "hidden";
}, l0 = function(t) {
  var i = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return i;
}, c0 = function(t, i) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === i)
      return t[n];
}, u0 = function(t) {
  if (!t.name)
    return !0;
  var i = t.form || Gs(t), n = function(c) {
    return i.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = n(window.CSS.escape(t.name));
  else
    try {
      a = n(t.name);
    } catch (o) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
  var r = c0(a, t.form);
  return !r || r === t;
}, d0 = function(t) {
  return Lv(t) && t.type === "radio";
}, f0 = function(t) {
  return d0(t) && !u0(t);
}, p0 = function(t) {
  var i, n = t && Gs(t), a = (i = n) === null || i === void 0 ? void 0 : i.host, r = !1;
  if (n && n !== t) {
    var o, c, u;
    for (r = !!((o = a) !== null && o !== void 0 && (c = o.ownerDocument) !== null && c !== void 0 && c.contains(a) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !r && a; ) {
      var h, f, y;
      n = Gs(a), a = (h = n) === null || h === void 0 ? void 0 : h.host, r = !!((f = a) !== null && f !== void 0 && (y = f.ownerDocument) !== null && y !== void 0 && y.contains(a));
    }
  }
  return r;
}, fp = function(t) {
  var i = t.getBoundingClientRect(), n = i.width, a = i.height;
  return n === 0 && a === 0;
}, h0 = function(t, i) {
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
  var o = getComputedStyle(t), c = o.visibility;
  if (c === "hidden" || c === "collapse")
    return !0;
  var u = Pa.call(t, "details>summary:first-of-type"), h = u ? t.parentElement : t;
  if (Pa.call(h, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof a == "function") {
      for (var f = t; t; ) {
        var y = t.parentElement, C = Gs(t);
        if (y && !y.shadowRoot && a(y) === !0)
          return fp(t);
        t.assignedSlot ? t = t.assignedSlot : !y && C !== t.ownerDocument ? t = C.host : t = y;
      }
      t = f;
    }
    if (p0(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return fp(t);
  return !1;
}, v0 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var i = t.parentElement; i; ) {
      if (i.tagName === "FIELDSET" && i.disabled) {
        for (var n = 0; n < i.children.length; n++) {
          var a = i.children.item(n);
          if (a.tagName === "LEGEND")
            return Pa.call(i, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      i = i.parentElement;
    }
  return !1;
}, Ys = function(t, i) {
  return !(i.disabled || s0(i) || h0(i, t) || // For a details element with a summary, the summary element gets the focus
  l0(i) || v0(i));
}, bu = function(t, i) {
  return !(f0(i) || Ea(i) < 0 || !Ys(t, i));
}, g0 = function(t) {
  var i = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(i) || i >= 0);
}, Rv = function(t) {
  var i = [], n = [];
  return t.forEach(function(a, r) {
    var o = !!a.scopeParent, c = o ? a.scopeParent : a, u = r0(c, o), h = o ? Rv(a.candidates) : c;
    u === 0 ? o ? i.push.apply(i, h) : i.push(c) : n.push({
      documentOrder: r,
      tabIndex: u,
      item: a,
      isScope: o,
      content: h
    });
  }), n.sort(o0).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(i);
}, b0 = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = Ws([t], i.includeContainer, {
    filter: bu.bind(null, i),
    flatten: !1,
    getShadowRoot: i.getShadowRoot,
    shadowRootFilter: g0
  }) : n = xv(t, i.includeContainer, bu.bind(null, i)), Rv(n);
}, m0 = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = Ws([t], i.includeContainer, {
    filter: Ys.bind(null, i),
    flatten: !0,
    getShadowRoot: i.getShadowRoot
  }) : n = xv(t, i.includeContainer, Ys.bind(null, i)), n;
}, Ya = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return Pa.call(t, Ks) === !1 ? !1 : bu(i, t);
}, y0 = /* @__PURE__ */ Av.concat("iframe:not([inert]):not([inert] *)").join(","), Hc = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return Pa.call(t, y0) === !1 ? !1 : Ys(i, t);
};
function mu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function _0(e) {
  if (Array.isArray(e)) return mu(e);
}
function pp(e, t) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!i) {
    if (Array.isArray(e) || (i = Iv(e)) || t) {
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
        e: function(u) {
          throw u;
        },
        f: a
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var r, o = !0, c = !1;
  return {
    s: function() {
      i = i.call(e);
    },
    n: function() {
      var u = i.next();
      return o = u.done, u;
    },
    e: function(u) {
      c = !0, r = u;
    },
    f: function() {
      try {
        o || i.return == null || i.return();
      } finally {
        if (c) throw r;
      }
    }
  };
}
function w0(e, t, i) {
  return (t = E0(t)) in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}
function S0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function C0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hp(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function vp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hp(Object(i), !0).forEach(function(n) {
      w0(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : hp(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function T0(e) {
  return _0(e) || S0(e) || Iv(e) || C0();
}
function k0(e, t) {
  if (typeof e != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function E0(e) {
  var t = k0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Iv(e, t) {
  if (e) {
    if (typeof e == "string") return mu(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? mu(e, t) : void 0;
  }
}
var hn = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, i) {
    var n = hn.getActiveTrap(t);
    i !== n && hn.pauseTrap(t);
    var a = t.indexOf(i);
    a === -1 || t.splice(a, 1), t.push(i);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, i) {
    var n = t.indexOf(i);
    n !== -1 && t.splice(n, 1), hn.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var i = hn.getActiveTrap(t);
    i?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var i = hn.getActiveTrap(t);
    i && !i._isManuallyPaused() && i._setPausedState(!1);
  }
}, A0 = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, O0 = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, eo = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, x0 = function(t) {
  return eo(t) && !t.shiftKey;
}, N0 = function(t) {
  return eo(t) && t.shiftKey;
}, gp = function(t) {
  return setTimeout(t, 0);
}, jr = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
    n[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, n) : t;
}, gs = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, L0 = [], td = function(t, i) {
  var n = i?.document || document, a = i?.trapStack || L0, r = vp({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: x0,
    isKeyBackward: N0
  }, i), o = {
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
  }, c, u = function(F, U, W) {
    return F && F[U] !== void 0 ? F[U] : r[W || U];
  }, h = function(F, U) {
    var W = typeof U?.composedPath == "function" ? U.composedPath() : void 0;
    return o.containerGroups.findIndex(function(le) {
      var ae = le.container, be = le.tabbableNodes;
      return ae.contains(F) || W?.includes(ae) || be.find(function(fe) {
        return fe === F;
      });
    });
  }, f = function(F) {
    var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, W = U.hasFallback, le = W === void 0 ? !1 : W, ae = U.params, be = ae === void 0 ? [] : ae, fe = r[F];
    if (typeof fe == "function" && (fe = fe.apply(void 0, T0(be))), fe === !0 && (fe = void 0), !fe) {
      if (fe === void 0 || fe === !1)
        return fe;
      throw new Error("`".concat(F, "` was specified but was not a node, or did not return a node"));
    }
    var _e = fe;
    if (typeof fe == "string") {
      try {
        _e = n.querySelector(fe);
      } catch (Te) {
        throw new Error("`".concat(F, '` appears to be an invalid selector; error="').concat(Te.message, '"'));
      }
      if (!_e && !le)
        throw new Error("`".concat(F, "` as selector refers to no known node"));
    }
    return _e;
  }, y = function(F) {
    var U = F.activeElement;
    return U ? U.shadowRoot && U.shadowRoot.activeElement !== null ? y(U.shadowRoot) : U : null;
  }, C = function() {
    var F = f("initialFocus", {
      hasFallback: !0
    });
    if (F === !1)
      return !1;
    if (F === void 0 || F && !Hc(F, r.tabbableOptions)) {
      var U = y(n);
      if (h(U) >= 0)
        F = U;
      else {
        var W = o.tabbableGroups[0], le = W && W.firstTabbableNode;
        F = le || f("fallbackFocus");
      }
    } else F === null && (F = f("fallbackFocus"));
    if (!F)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return F;
  }, E = function() {
    if (o.containerGroups = o.containers.map(function(F) {
      var U = b0(F, r.tabbableOptions), W = m0(F, r.tabbableOptions), le = U.length > 0 ? U[0] : void 0, ae = U.length > 0 ? U[U.length - 1] : void 0, be = W.find(function(Te) {
        return Ya(Te);
      }), fe = W.slice().reverse().find(function(Te) {
        return Ya(Te);
      }), _e = !!U.find(function(Te) {
        return Ea(Te) > 0;
      });
      return {
        container: F,
        tabbableNodes: U,
        focusableNodes: W,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: _e,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: le,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: ae,
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
        lastDomTabbableNode: fe,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Ke) {
          var Le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, ut = U.indexOf(Ke);
          return ut < 0 ? Le ? W.slice(W.indexOf(Ke) + 1).find(function(vt) {
            return Ya(vt);
          }) : W.slice(0, W.indexOf(Ke)).reverse().find(function(vt) {
            return Ya(vt);
          }) : U[ut + (Le ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(F) {
      return F.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !f("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(F) {
      return F.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, L = function(F) {
    if (F !== !1 && F !== y(document)) {
      if (!F || !F.focus) {
        L(C());
        return;
      }
      F.focus({
        preventScroll: !!r.preventScroll
      }), o.mostRecentlyFocusedNode = F, A0(F) && F.select();
    }
  }, A = function(F) {
    var U = f("setReturnFocus", {
      params: [F]
    });
    return U || (U === !1 ? !1 : F);
  }, N = function(F) {
    var U = F.target, W = F.event, le = F.isBackward, ae = le === void 0 ? !1 : le;
    U = U || gs(W), E();
    var be = null;
    if (o.tabbableGroups.length > 0) {
      var fe = h(U, W), _e = fe >= 0 ? o.containerGroups[fe] : void 0;
      if (fe < 0)
        ae ? be = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : be = o.tabbableGroups[0].firstTabbableNode;
      else if (ae) {
        var Te = o.tabbableGroups.findIndex(function(dt) {
          var rt = dt.firstTabbableNode;
          return U === rt;
        });
        if (Te < 0 && (_e.container === U || Hc(U, r.tabbableOptions) && !Ya(U, r.tabbableOptions) && !_e.nextTabbableNode(U, !1)) && (Te = fe), Te >= 0) {
          var Ke = Te === 0 ? o.tabbableGroups.length - 1 : Te - 1, Le = o.tabbableGroups[Ke];
          be = Ea(U) >= 0 ? Le.lastTabbableNode : Le.lastDomTabbableNode;
        } else eo(W) || (be = _e.nextTabbableNode(U, !1));
      } else {
        var ut = o.tabbableGroups.findIndex(function(dt) {
          var rt = dt.lastTabbableNode;
          return U === rt;
        });
        if (ut < 0 && (_e.container === U || Hc(U, r.tabbableOptions) && !Ya(U, r.tabbableOptions) && !_e.nextTabbableNode(U)) && (ut = fe), ut >= 0) {
          var vt = ut === o.tabbableGroups.length - 1 ? 0 : ut + 1, nt = o.tabbableGroups[vt];
          be = Ea(U) >= 0 ? nt.firstTabbableNode : nt.firstDomTabbableNode;
        } else eo(W) || (be = _e.nextTabbableNode(U));
      }
    } else
      be = f("fallbackFocus");
    return be;
  }, D = function(F) {
    var U = gs(F);
    if (!(h(U, F) >= 0)) {
      if (jr(r.clickOutsideDeactivates, F)) {
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
      jr(r.allowOutsideClick, F) || F.preventDefault();
    }
  }, M = function(F) {
    var U = gs(F), W = h(U, F) >= 0;
    if (W || U instanceof Document)
      W && (o.mostRecentlyFocusedNode = U);
    else {
      F.stopImmediatePropagation();
      var le, ae = !0;
      if (o.mostRecentlyFocusedNode)
        if (Ea(o.mostRecentlyFocusedNode) > 0) {
          var be = h(o.mostRecentlyFocusedNode), fe = o.containerGroups[be].tabbableNodes;
          if (fe.length > 0) {
            var _e = fe.findIndex(function(Te) {
              return Te === o.mostRecentlyFocusedNode;
            });
            _e >= 0 && (r.isKeyForward(o.recentNavEvent) ? _e + 1 < fe.length && (le = fe[_e + 1], ae = !1) : _e - 1 >= 0 && (le = fe[_e - 1], ae = !1));
          }
        } else
          o.containerGroups.some(function(Te) {
            return Te.tabbableNodes.some(function(Ke) {
              return Ea(Ke) > 0;
            });
          }) || (ae = !1);
      else
        ae = !1;
      ae && (le = N({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(o.recentNavEvent)
      })), L(le || o.mostRecentlyFocusedNode || C());
    }
    o.recentNavEvent = void 0;
  }, z = function(F) {
    var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = F;
    var W = N({
      event: F,
      isBackward: U
    });
    W && (eo(F) && F.preventDefault(), L(W));
  }, T = function(F) {
    (r.isKeyForward(F) || r.isKeyBackward(F)) && z(F, r.isKeyBackward(F));
  }, re = function(F) {
    O0(F) && jr(r.escapeDeactivates, F) !== !1 && (F.preventDefault(), c.deactivate());
  }, ue = function(F) {
    var U = gs(F);
    h(U, F) >= 0 || jr(r.clickOutsideDeactivates, F) || jr(r.allowOutsideClick, F) || (F.preventDefault(), F.stopImmediatePropagation());
  }, Z = function() {
    if (o.active) {
      hn.activateTrap(a, c);
      var F;
      return r.delayInitialFocus ? F = new Promise(function(U) {
        o.delayInitialFocusTimer = gp(function() {
          L(C()), U();
        });
      }) : L(C()), n.addEventListener("focusin", M, !0), n.addEventListener("mousedown", D, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", D, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", ue, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", T, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", re), F;
    }
  }, pe = function(F) {
    o.active && !o.paused && c._setSubtreeIsolation(!1), o.adjacentElements.clear(), o.alreadySilent.clear();
    var U = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Set(), le = pp(F), ae;
    try {
      for (le.s(); !(ae = le.n()).done; ) {
        var be = ae.value;
        U.add(be);
        for (var fe = typeof ShadowRoot < "u" && be.getRootNode() instanceof ShadowRoot, _e = be; _e; ) {
          U.add(_e);
          var Te = _e.parentElement, Ke = [];
          Te ? Ke = Te.children : !Te && fe && (Ke = _e.getRootNode().children, Te = _e.getRootNode().host, fe = typeof ShadowRoot < "u" && Te.getRootNode() instanceof ShadowRoot);
          var Le = pp(Ke), ut;
          try {
            for (Le.s(); !(ut = Le.n()).done; ) {
              var vt = ut.value;
              W.add(vt);
            }
          } catch (nt) {
            Le.e(nt);
          } finally {
            Le.f();
          }
          _e = Te;
        }
      }
    } catch (nt) {
      le.e(nt);
    } finally {
      le.f();
    }
    U.forEach(function(nt) {
      W.delete(nt);
    }), o.adjacentElements = W;
  }, Y = function() {
    if (o.active)
      return n.removeEventListener("focusin", M, !0), n.removeEventListener("mousedown", D, !0), n.removeEventListener("touchstart", D, !0), n.removeEventListener("click", ue, !0), n.removeEventListener("keydown", T, !0), n.removeEventListener("keydown", re), c;
  }, se = function(F) {
    var U = o.mostRecentlyFocusedNode;
    if (U) {
      var W = F.some(function(ae) {
        var be = Array.from(ae.removedNodes);
        return be.some(function(fe) {
          return fe === U || typeof fe.contains == "function" && fe.contains(U);
        });
      });
      if (W && o.containers.some(function(ae) {
        return ae?.isConnected;
      })) {
        E();
        var le = C();
        L(le);
      }
    }
  }, me = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(se) : void 0, ee = function() {
    me && (me.disconnect(), o.active && !o.paused && o.containers.map(function(F) {
      me.observe(F, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return c = {
    get active() {
      return o.active;
    },
    get paused() {
      return o.paused;
    },
    activate: function(F) {
      if (o.active)
        return this;
      var U = u(F, "onActivate"), W = u(F, "onPostActivate"), le = u(F, "checkCanFocusTrap"), ae = hn.getActiveTrap(a), be = !1;
      if (ae && !ae.paused) {
        var fe;
        (fe = ae._setSubtreeIsolation) === null || fe === void 0 || fe.call(ae, !1), be = !0;
      }
      try {
        le || E(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = y(n), U?.({
          trap: c
        });
        var _e = function() {
          le && E();
          var Le = function() {
            c._setSubtreeIsolation(!0), ee(), W?.({
              trap: c
            });
          }, ut = Z();
          ut ? ut.then(Le) : Le();
        };
        if (le)
          return le(o.containers.concat()).then(_e, _e), this;
        _e();
      } catch (Ke) {
        if (ae === hn.getActiveTrap(a) && be) {
          var Te;
          (Te = ae._setSubtreeIsolation) === null || Te === void 0 || Te.call(ae, !0);
        }
        throw Ke;
      }
      return this;
    },
    deactivate: function(F) {
      if (!o.active)
        return this;
      var U = vp({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, F);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || c._setSubtreeIsolation(!1), o.alreadySilent.clear(), Y(), o.active = !1, o.paused = !1, ee(), hn.deactivateTrap(a, c);
      var W = u(U, "onDeactivate"), le = u(U, "onPostDeactivate"), ae = u(U, "checkCanReturnFocus"), be = u(U, "delayReturnFocus"), fe = u(U, "returnFocus", "returnFocusOnDeactivate");
      W?.({
        trap: c
      });
      var _e = function() {
        fe && L(A(o.nodeFocusedBeforeActivation)), le?.({
          trap: c
        });
      }, Te = function() {
        be && fe ? gp(_e) : _e();
      };
      return fe && ae ? (ae(A(o.nodeFocusedBeforeActivation)).then(Te, Te), this) : (Te(), this);
    },
    pause: function(F) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, F)) : this;
    },
    unpause: function(F) {
      return o.active ? (o.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, F)) : this;
    },
    updateContainerElements: function(F) {
      var U = [].concat(F).filter(Boolean);
      return o.containers = U.map(function(W) {
        return typeof W == "string" ? n.querySelector(W) : W;
      }), r.isolateSubtrees && pe(o.containers), o.active && (E(), o.paused || c._setSubtreeIsolation(!0)), ee(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(F, U) {
        if (o.paused === F)
          return this;
        if (o.paused = F, F) {
          var W = u(U, "onPause"), le = u(U, "onPostPause");
          W?.({
            trap: c
          }), Y(), c._setSubtreeIsolation(!1), ee(), le?.({
            trap: c
          });
        } else {
          var ae = u(U, "onUnpause"), be = u(U, "onPostUnpause");
          ae?.({
            trap: c
          });
          var fe = function() {
            E();
            var Te = function() {
              c._setSubtreeIsolation(!0), ee(), be?.({
                trap: c
              });
            }, Ke = Z();
            Ke ? Ke.then(Te) : Te();
          };
          fe();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(F) {
        r.isolateSubtrees && o.adjacentElements.forEach(function(U) {
          var W;
          F ? r.isolateSubtrees === "aria-hidden" ? ((U.ariaHidden === "true" || ((W = U.getAttribute("aria-hidden")) === null || W === void 0 ? void 0 : W.toLowerCase()) === "true") && o.alreadySilent.add(U), U.setAttribute("aria-hidden", "true")) : ((U.inert || U.hasAttribute("inert")) && o.alreadySilent.add(U), U.setAttribute("inert", !0)) : o.alreadySilent.has(U) || (r.isolateSubtrees === "aria-hidden" ? U.removeAttribute("aria-hidden") : U.removeAttribute("inert"));
        });
      }
    }
  }), c.updateContainerElements(t), c;
};
const Pv = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), R0 = /* @__PURE__ */ It({
  name: "NcAppNavigationList",
  provide() {
    return {
      [Pv]: {
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
function I0(e, t, i, n, a, r) {
  return m(), _("ul", {
    ref: "list",
    class: ge(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...o) => e.hideNow && e.hideNow(...o)),
    onFocusout: t[1] || (t[1] = (...o) => e.onFocusOut && e.onFocusOut(...o)),
    onScrollPassive: t[2] || (t[2] = (...o) => e.onScroll && e.onScroll(...o))
  }, [
    l("div", {
      class: ge(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: hi(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Me(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const $v = /* @__PURE__ */ Qe(R0, [["render", I0], ["__scopeId", "data-v-3e73e246"]]);
function Co() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function P0() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...Co()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === Co().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const Fv = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Dv = /* @__PURE__ */ Symbol.for("NcContent:selector");
Qn(m1);
const $0 = { class: "app-navigation-toggle-wrapper" }, F0 = /* @__PURE__ */ It({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Dh(e, "open"), i = B(() => t.value ? Ct("Close navigation") : Ct("Open navigation"));
    return (n, a) => (m(), _("div", $0, [
      Ae(g(Yi), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": i.value,
        title: i.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: $e(() => [
          Ae(Vl, {
            path: g(u1),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), D0 = /* @__PURE__ */ Qe(F0, [["__scopeId", "data-v-e8177cc7"]]), M0 = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], z0 = { class: "app-navigation__search" }, U0 = /* @__PURE__ */ It({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let i;
    const n = Kt(
      Fv,
      () => vy(),
      !1
    ), a = wm("appNavigationContainer"), r = $o(), o = /* @__PURE__ */ ke(!r.value), c = B(() => r.value && o.value);
    fm(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), We(r, () => {
      o.value = !r.value;
    }), We(c, () => {
      f();
    }), Jn(() => {
      n(!0), bv("toggle-navigation", h), mn("navigation-toggled", {
        open: o.value
      }), i = td(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (i.deactivate({ returnFocus: !1 }), u(!1)), !1),
        fallbackFocus: a.value,
        trapStack: Co(),
        escapeDeactivates: !1
      }), f();
    }), Ro(() => {
      n(!1), J_("toggle-navigation", h), i.deactivate();
    });
    function u(C) {
      if (o.value === C) {
        mn("navigation-toggled", {
          open: o.value
        });
        return;
      }
      o.value = C === void 0 ? !o.value : C;
      const E = getComputedStyle(document.body), L = parseInt(E.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        mn("navigation-toggled", {
          open: o.value
        });
      }, 1.5 * L);
    }
    function h({ open: C }) {
      return u(C);
    }
    function f() {
      c.value ? i.activate() : i.deactivate();
    }
    function y() {
      r.value && u(!1);
    }
    return (C, E) => (m(), _("div", {
      ref: "appNavigationContainer",
      class: ge(["app-navigation", {
        "app-navigation--closed": !o.value,
        "app-navigation--legacy": g(ea)
      }])
    }, [
      l("nav", {
        id: "app-navigation-vue",
        "aria-hidden": o.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !o.value || void 0,
        onKeydown: at(y, ["esc"])
      }, [
        l("div", z0, [
          Me(C.$slots, "search", {}, void 0, !0)
        ]),
        l("div", {
          class: ge(["app-navigation__body", { "app-navigation__body--no-list": !C.$slots.list }])
        }, [
          Me(C.$slots, "default", {}, void 0, !0)
        ], 2),
        C.$slots.list ? (m(), je($v, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: $e(() => [
            Me(C.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : $("", !0),
        Me(C.$slots, "footer", {}, void 0, !0)
      ], 40, M0),
      Ae(D0, {
        open: o.value,
        "onUpdate:open": u
      }, null, 8, ["open"])
    ], 2));
  }
}), j0 = /* @__PURE__ */ Qe(U0, [["__scopeId", "data-v-37908cd4"]]), B0 = {
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
}, H0 = ["aria-hidden", "aria-label"], V0 = ["fill", "width", "height"], K0 = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, G0 = { key: 0 };
function q0(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", K0, [
        i.title ? (m(), _("title", G0, v(i.title), 1)) : $("", !0)
      ])
    ], 8, V0))
  ], 16, H0);
}
const W0 = /* @__PURE__ */ Qe(B0, [["render", q0]]), Y0 = {
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
}, X0 = ["aria-hidden", "aria-label"], Z0 = ["fill", "width", "height"], J0 = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, Q0 = { key: 0 };
function ew(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", J0, [
        i.title ? (m(), _("title", Q0, v(i.title), 1)) : $("", !0)
      ])
    ], 8, Z0))
  ], 16, X0);
}
const tw = /* @__PURE__ */ Qe(Y0, [["render", ew]]), iw = {
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
}, nw = ["aria-hidden", "aria-label"], aw = ["fill", "width", "height"], rw = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, ow = { key: 0 };
function sw(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", rw, [
        i.title ? (m(), _("title", ow, v(i.title), 1)) : $("", !0)
      ])
    ], 8, aw))
  ], 16, nw);
}
const Mv = /* @__PURE__ */ Qe(iw, [["render", sw]]), lw = {
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
}, cw = ["aria-hidden", "aria-label"], uw = ["fill", "width", "height"], dw = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, fw = { key: 0 };
function pw(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", dw, [
        i.title ? (m(), _("title", fw, v(i.title), 1)) : $("", !0)
      ])
    ], 8, uw))
  ], 16, cw);
}
const zv = /* @__PURE__ */ Qe(lw, [["render", pw]]);
Qn(g1);
const hw = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Mv,
    IconClose: zv,
    NcButton: Yi
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
    return { isLegacy34: ea };
  },
  data() {
    return {
      labelConfirm: Ct("Confirm changes"),
      labelCancel: Ct("Cancel changes")
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
}, vw = ["placeholder"];
function gw(e, t, i, n, a, r) {
  const o = Be("IconArrowRight"), c = Be("NcButton"), u = Be("IconClose");
  return m(), _("div", {
    class: ge(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": n.isLegacy34 }])
  }, [
    l("form", {
      onSubmit: t[1] || (t[1] = Ee((...h) => r.confirm && r.confirm(...h), ["prevent"])),
      onKeydown: t[2] || (t[2] = at(Ee((...h) => r.cancel && r.cancel(...h), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Ee(() => {
      }, ["stop", "prevent"]))
    }, [
      Re(l("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (h) => r.valueModel = h),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: i.placeholder
      }, null, 8, vw), [
        [pt, r.valueModel]
      ]),
      Ae(c, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Ee(r.confirm, ["stop", "prevent"])
      }, {
        icon: $e(() => [
          Ae(o, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      Ae(c, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: i.primary ? "primary" : "tertiary",
        onClick: Ee(r.cancel, ["stop", "prevent"])
      }, {
        icon: $e(() => [
          Ae(u, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const bw = /* @__PURE__ */ Qe(hw, [["render", gw], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function Kl() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const id = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Uv = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), mw = {
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
}, jv = {
  mixins: [mw],
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
      from: Uv
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
}, yw = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: Vl
  },
  mixins: [jv],
  inject: {
    isInSemanticMenu: {
      from: id,
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
      mdiCheck: l1,
      mdiChevronRight: c1
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
}, _w = ["role"], ww = ["aria-label", "disabled", "title", "type"], Sw = { class: "action-button__longtext-wrapper" }, Cw = {
  key: 0,
  class: "action-button__name"
}, Tw = ["textContent"], kw = {
  key: 2,
  class: "action-button__text"
}, Ew = ["textContent"], Aw = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function Ow(e, t, i, n, a, r) {
  const o = Be("NcIconSvgWrapper");
  return m(), _("li", {
    class: ge(["action", { "action--disabled": i.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("button", Yt({
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
      Me(e.$slots, "icon", {}, () => [
        l("span", {
          class: ge([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: hi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", Sw, [
        e.name ? (m(), _("strong", Cw, v(e.name), 1)) : $("", !0),
        e.isLongText ? (m(), _("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: v(e.text)
        }, null, 8, Tw)) : (m(), _("span", kw, v(e.text), 1)),
        i.description ? (m(), _("span", {
          key: 3,
          class: "action-button__description",
          textContent: v(i.description)
        }, null, 8, Ew)) : $("", !0)
      ]),
      i.isMenu ? (m(), je(o, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: n.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (m(), je(o, {
        key: 1,
        path: n.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (m(), _("span", Aw)) : $("", !0),
      $("", !0)
    ], 16, ww)
  ], 10, _w);
}
const xw = /* @__PURE__ */ Qe(yw, [["render", Ow], ["__scopeId", "data-v-6c2daf4e"]]);
function Nw(e, t = {}) {
  const i = P0();
  We(e, () => {
    gn(t.disabled) || (gn(e) ? i.pause() : i.unpause());
  }), Ro(() => {
    i.unpause();
  });
}
const Lw = ["top", "right", "bottom", "left"], bp = ["start", "end"], mp = /* @__PURE__ */ Lw.reduce((e, t) => e.concat(t, t + "-" + bp[0], t + "-" + bp[1]), []), To = Math.min, yu = Math.max, Rw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Bv(e, t, i) {
  return yu(e, To(t, i));
}
function Fa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sn(e) {
  return e.split("-")[0];
}
function Ii(e) {
  return e.split("-")[1];
}
function Hv(e) {
  return e === "x" ? "y" : "x";
}
function nd(e) {
  return e === "y" ? "height" : "width";
}
function vn(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function ad(e) {
  return Hv(vn(e));
}
function Vv(e, t, i) {
  i === void 0 && (i = !1);
  const n = Ii(e), a = ad(e), r = nd(a);
  let o = a === "x" ? n === (i ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Zs(o)), [o, Zs(o)];
}
function Iw(e) {
  const t = Zs(e);
  return [Xs(e), t, Xs(t)];
}
function Xs(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const yp = ["left", "right"], _p = ["right", "left"], Pw = ["top", "bottom"], $w = ["bottom", "top"];
function Fw(e, t, i) {
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? _p : yp : t ? yp : _p;
    case "left":
    case "right":
      return t ? Pw : $w;
    default:
      return [];
  }
}
function Dw(e, t, i, n) {
  const a = Ii(e);
  let r = Fw(Sn(e), i === "start", n);
  return a && (r = r.map((o) => o + "-" + a), t && (r = r.concat(r.map(Xs)))), r;
}
function Zs(e) {
  const t = Sn(e);
  return Rw[t] + e.slice(t.length);
}
function Mw(e) {
  var t, i, n, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (i = e.right) != null ? i : 0,
    bottom: (n = e.bottom) != null ? n : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Kv(e) {
  return typeof e != "number" ? Mw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function to(e) {
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
function wp(e, t, i) {
  let {
    reference: n,
    floating: a
  } = e;
  const r = vn(t), o = ad(t), c = nd(o), u = Sn(t), h = r === "y", f = n.x + n.width / 2 - a.width / 2, y = n.y + n.height / 2 - a.height / 2, C = n[c] / 2 - a[c] / 2;
  let E;
  switch (u) {
    case "top":
      E = {
        x: f,
        y: n.y - a.height
      };
      break;
    case "bottom":
      E = {
        x: f,
        y: n.y + n.height
      };
      break;
    case "right":
      E = {
        x: n.x + n.width,
        y
      };
      break;
    case "left":
      E = {
        x: n.x - a.width,
        y
      };
      break;
    default:
      E = {
        x: n.x,
        y: n.y
      };
  }
  const L = Ii(t);
  return L && (E[o] += C * (L === "end" ? 1 : -1) * (i && h ? -1 : 1)), E;
}
async function zw(e, t) {
  var i;
  t === void 0 && (t = {});
  const {
    x: n,
    y: a,
    platform: r,
    rects: o,
    elements: c,
    strategy: u
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: y = "floating",
    altBoundary: C = !1,
    padding: E = 0
  } = Fa(t, e), L = Kv(E), N = c[C ? y === "floating" ? "reference" : "floating" : y], D = to(await r.getClippingRect({
    element: (i = await (r.isElement == null ? void 0 : r.isElement(N))) == null || i ? N : N.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: f,
    strategy: u
  })), M = y === "floating" ? {
    x: n,
    y: a,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, z = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), T = await (r.isElement == null ? void 0 : r.isElement(z)) && await (r.getScale == null ? void 0 : r.getScale(z)) || {
    x: 1,
    y: 1
  }, re = to(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: M,
    offsetParent: z,
    strategy: u
  }) : M);
  return {
    top: (D.top - re.top + L.top) / T.y,
    bottom: (re.bottom - D.bottom + L.bottom) / T.y,
    left: (D.left - re.left + L.left) / T.x,
    right: (re.right - D.right + L.right) / T.x
  };
}
const Uw = 50, jw = async (e, t, i) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: o
  } = i, c = o.detectOverflow ? o : {
    ...o,
    detectOverflow: zw
  }, u = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: f,
    y
  } = wp(h, n, u), C = n, E = 0;
  const L = {};
  for (let A = 0; A < r.length; A++) {
    const N = r[A];
    if (!N)
      continue;
    const {
      name: D,
      fn: M
    } = N, {
      x: z,
      y: T,
      data: re,
      reset: ue
    } = await M({
      x: f,
      y,
      initialPlacement: n,
      placement: C,
      strategy: a,
      middlewareData: L,
      rects: h,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = z ?? f, y = T ?? y, L[D] = {
      ...L[D],
      ...re
    }, ue && E < Uw && (E++, typeof ue == "object" && (ue.placement && (C = ue.placement), ue.rects && (h = ue.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ue.rects), {
      x: f,
      y
    } = wp(h, C, u)), A = -1);
  }
  return {
    x: f,
    y,
    placement: C,
    strategy: a,
    middlewareData: L
  };
}, Bw = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: i,
      y: n,
      placement: a,
      rects: r,
      platform: o,
      elements: c,
      middlewareData: u
    } = t, {
      element: h,
      padding: f = 0
    } = Fa(e, t) || {};
    if (h == null)
      return {};
    const y = Kv(f), C = {
      x: i,
      y: n
    }, E = ad(a), L = nd(E), A = await o.getDimensions(h), N = E === "y", D = N ? "top" : "left", M = N ? "bottom" : "right", z = N ? "clientHeight" : "clientWidth", T = r.reference[L] + r.reference[E] - C[E] - r.floating[L], re = C[E] - r.reference[E], ue = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(h));
    let Z = ue ? ue[z] : 0;
    (!Z || !await (o.isElement == null ? void 0 : o.isElement(ue))) && (Z = c.floating[z] || r.floating[L]);
    const pe = T / 2 - re / 2, Y = Z / 2 - A[L] / 2 - 1, se = To(y[D], Y), me = To(y[M], Y), ee = Z - A[L] - me, J = Z / 2 - A[L] / 2 + pe, F = Bv(se, J, ee), U = !u.arrow && Ii(a) != null && J !== F && r.reference[L] / 2 - (J < se ? se : me) - A[L] / 2 < 0, W = U ? J < se ? J - se : J - ee : 0;
    return {
      [E]: C[E] + W,
      data: {
        [E]: F,
        centerOffset: J - F - W,
        ...U && {
          alignmentOffset: W
        }
      },
      reset: U
    };
  }
});
function Hw(e, t, i) {
  return (e ? [...i.filter((a) => Ii(a) === e), ...i.filter((a) => Ii(a) !== e)] : i.filter((a) => Sn(a) === a)).filter((a) => e ? Ii(a) === e || (t ? Xs(a) !== a : !1) : !0);
}
const Vw = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var i, n, a;
      const {
        rects: r,
        middlewareData: o,
        placement: c,
        platform: u,
        elements: h
      } = t, {
        crossAxis: f = !1,
        alignment: y,
        allowedPlacements: C = mp,
        autoAlignment: E = !0,
        ...L
      } = Fa(e, t), A = y !== void 0 || C === mp ? Hw(y || null, E, C) : C, N = ((i = o.autoPlacement) == null ? void 0 : i.index) || 0, D = A[N];
      if (D == null)
        return {};
      if (c !== D)
        return {
          reset: {
            placement: A[0]
          }
        };
      const M = await u.detectOverflow(t, L), z = Vv(D, r, await (u.isRTL == null ? void 0 : u.isRTL(h.floating))), T = [M[Sn(D)], M[z[0]], M[z[1]]], re = [...((n = o.autoPlacement) == null ? void 0 : n.overflows) || [], {
        placement: D,
        overflows: T
      }], ue = A[N + 1];
      if (ue)
        return {
          data: {
            index: N + 1,
            overflows: re
          },
          reset: {
            placement: ue
          }
        };
      const Z = re.map((se) => {
        const me = Ii(se.placement);
        return [se.placement, me && f ? (
          // Check along the mainAxis and main crossAxis side.
          se.overflows.slice(0, 2).reduce((ee, J) => ee + J, 0)
        ) : (
          // Check only the mainAxis.
          se.overflows[0]
        ), se.overflows];
      }).sort((se, me) => se[1] - me[1]), Y = ((a = Z.filter((se) => se[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Ii(se[0]) ? 2 : 3
      ).every((me) => me <= 0))[0]) == null ? void 0 : a[0]) || Z[0][0];
      return Y !== c ? {
        data: {
          index: N + 1,
          overflows: re
        },
        reset: {
          placement: Y
        }
      } : {};
    }
  };
}, Kw = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var i, n;
      const {
        placement: a,
        middlewareData: r,
        rects: o,
        initialPlacement: c,
        platform: u,
        elements: h
      } = t, {
        mainAxis: f = !0,
        crossAxis: y = !0,
        fallbackPlacements: C,
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: L = "none",
        flipAlignment: A = !0,
        ...N
      } = Fa(e, t);
      if ((i = r.arrow) != null && i.alignmentOffset)
        return {};
      const D = Sn(a), M = vn(c), z = Sn(c) === c, T = await (u.isRTL == null ? void 0 : u.isRTL(h.floating)), re = C || (z || !A ? [Zs(c)] : Iw(c)), ue = L !== "none";
      !C && ue && re.push(...Dw(c, A, L, T));
      const Z = [c, ...re], pe = await u.detectOverflow(t, N), Y = [];
      let se = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (f && Y.push(pe[D]), y) {
        const F = Vv(a, o, T);
        Y.push(pe[F[0]], pe[F[1]]);
      }
      if (se = [...se, {
        placement: a,
        overflows: Y
      }], !Y.every((F) => F <= 0)) {
        var me, ee;
        const F = (((me = r.flip) == null ? void 0 : me.index) || 0) + 1, U = Z[F];
        if (U && (!(y === "alignment" ? M !== vn(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        se.every((ae) => vn(ae.placement) === M ? ae.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: se
            },
            reset: {
              placement: U
            }
          };
        let W = (ee = se.filter((le) => le.overflows[0] <= 0).sort((le, ae) => le.overflows[1] - ae.overflows[1])[0]) == null ? void 0 : ee.placement;
        if (!W)
          switch (E) {
            case "bestFit": {
              var J;
              const le = (J = se.filter((ae) => {
                if (ue) {
                  const be = vn(ae.placement);
                  return be === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  be === "y";
                }
                return !0;
              }).map((ae) => [ae.placement, ae.overflows.filter((be) => be > 0).reduce((be, fe) => be + fe, 0)]).sort((ae, be) => ae[1] - be[1])[0]) == null ? void 0 : J[0];
              le && (W = le);
              break;
            }
            case "initialPlacement":
              W = c;
              break;
          }
        if (a !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
}, Gw = /* @__PURE__ */ new Set(["left", "top"]);
async function qw(e, t) {
  const {
    placement: i,
    platform: n,
    elements: a
  } = e, r = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), o = Sn(i), c = Ii(i), u = vn(i) === "y", h = Gw.has(o) ? -1 : 1, f = r && u ? -1 : 1, y = Fa(t, e);
  let {
    mainAxis: C,
    crossAxis: E,
    alignmentAxis: L
  } = typeof y == "number" ? {
    mainAxis: y,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: y.mainAxis || 0,
    crossAxis: y.crossAxis || 0,
    alignmentAxis: y.alignmentAxis
  };
  return c && typeof L == "number" && (E = c === "end" ? L * -1 : L), u ? {
    x: E * f,
    y: C * h
  } : {
    x: C * h,
    y: E * f
  };
}
const Ww = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var i, n;
      const {
        x: a,
        y: r,
        placement: o,
        middlewareData: c
      } = t, u = await qw(t, e);
      return o === ((i = c.offset) == null ? void 0 : i.placement) && (n = c.arrow) != null && n.alignmentOffset ? {} : {
        x: a + u.x,
        y: r + u.y,
        data: {
          ...u,
          placement: o
        }
      };
    }
  };
}, Yw = function(e) {
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
        mainAxis: o = !0,
        crossAxis: c = !1,
        limiter: u = {
          fn: (M) => {
            let {
              x: z,
              y: T
            } = M;
            return {
              x: z,
              y: T
            };
          }
        },
        ...h
      } = Fa(e, t), f = {
        x: i,
        y: n
      }, y = await r.detectOverflow(t, h), C = vn(a), E = Hv(C);
      let L = f[E], A = f[C];
      const N = (M, z) => Bv(z + y[M === "y" ? "top" : "left"], z, z - y[M === "y" ? "bottom" : "right"]);
      o && (L = N(E, L)), c && (A = N(C, A));
      const D = u.fn({
        ...t,
        [E]: L,
        [C]: A
      });
      return {
        ...D,
        data: {
          x: D.x - i,
          y: D.y - n,
          enabled: {
            [E]: o,
            [C]: c
          }
        }
      };
    }
  };
}, Xw = function(e) {
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
        apply: o = () => {
        },
        ...c
      } = Fa(e, t), u = await a.detectOverflow(t, c), h = Sn(i), f = Ii(i), y = vn(i) === "y", {
        width: C,
        height: E
      } = n.floating;
      let L, A;
      h === "top" || h === "bottom" ? (L = h, A = f === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = h, L = f === "end" ? "top" : "bottom");
      const N = E - u.top - u.bottom, D = C - u.left - u.right, M = To(E - u[L], N), z = To(C - u[A], D), T = t.middlewareData.shift, re = !T;
      let ue = M, Z = z;
      T != null && T.enabled.x && (Z = D), T != null && T.enabled.y && (ue = N), re && !f && (y ? Z = C - 2 * yu(u.left, u.right) : ue = E - 2 * yu(u.top, u.bottom)), await o({
        ...t,
        availableWidth: Z,
        availableHeight: ue
      });
      const pe = await a.getDimensions(r.floating);
      return C !== pe.width || E !== pe.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Si(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Xi(e) {
  return Si(e).getComputedStyle(e);
}
const Sp = Math.min, io = Math.max, Js = Math.round;
function Gv(e) {
  const t = Xi(e);
  let i = parseFloat(t.width), n = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, o = Js(i) !== a || Js(n) !== r;
  return o && (i = a, n = r), { width: i, height: n, fallback: o };
}
function Zn(e) {
  return Wv(e) ? (e.nodeName || "").toLowerCase() : "";
}
let bs;
function qv() {
  if (bs) return bs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (bs = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), bs) : navigator.userAgent;
}
function Zi(e) {
  return e instanceof Si(e).HTMLElement;
}
function Gn(e) {
  return e instanceof Si(e).Element;
}
function Wv(e) {
  return e instanceof Si(e).Node;
}
function Cp(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Si(e).ShadowRoot || e instanceof ShadowRoot;
}
function Gl(e) {
  const { overflow: t, overflowX: i, overflowY: n, display: a } = Xi(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + i) && !["inline", "contents"].includes(a);
}
function Zw(e) {
  return ["table", "td", "th"].includes(Zn(e));
}
function _u(e) {
  const t = /firefox/i.test(qv()), i = Xi(e), n = i.backdropFilter || i.WebkitBackdropFilter;
  return i.transform !== "none" || i.perspective !== "none" || !!n && n !== "none" || t && i.willChange === "filter" || t && !!i.filter && i.filter !== "none" || ["transform", "perspective"].some(((a) => i.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = i.contain;
    return r != null && r.includes(a);
  }));
}
function Yv() {
  return !/^((?!chrome|android).)*safari/i.test(qv());
}
function rd(e) {
  return ["html", "body", "#document"].includes(Zn(e));
}
function Xv(e) {
  return Gn(e) ? e : e.contextElement;
}
const Zv = { x: 1, y: 1 };
function or(e) {
  const t = Xv(e);
  if (!Zi(t)) return Zv;
  const i = t.getBoundingClientRect(), { width: n, height: a, fallback: r } = Gv(t);
  let o = (r ? Js(i.width) : i.width) / n, c = (r ? Js(i.height) : i.height) / a;
  return o && Number.isFinite(o) || (o = 1), c && Number.isFinite(c) || (c = 1), { x: o, y: c };
}
function ko(e, t, i, n) {
  var a, r;
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  const o = e.getBoundingClientRect(), c = Xv(e);
  let u = Zv;
  t && (n ? Gn(n) && (u = or(n)) : u = or(e));
  const h = c ? Si(c) : window, f = !Yv() && i;
  let y = (o.left + (f && ((a = h.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / u.x, C = (o.top + (f && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / u.y, E = o.width / u.x, L = o.height / u.y;
  if (c) {
    const A = Si(c), N = n && Gn(n) ? Si(n) : n;
    let D = A.frameElement;
    for (; D && n && N !== A; ) {
      const M = or(D), z = D.getBoundingClientRect(), T = getComputedStyle(D);
      z.x += (D.clientLeft + parseFloat(T.paddingLeft)) * M.x, z.y += (D.clientTop + parseFloat(T.paddingTop)) * M.y, y *= M.x, C *= M.y, E *= M.x, L *= M.y, y += z.x, C += z.y, D = Si(D).frameElement;
    }
  }
  return { width: E, height: L, top: C, right: y + E, bottom: C + L, left: y, x: y, y: C };
}
function qn(e) {
  return ((Wv(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ql(e) {
  return Gn(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Jv(e) {
  return ko(qn(e)).left + ql(e).scrollLeft;
}
function Eo(e) {
  if (Zn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Cp(e) && e.host || qn(e);
  return Cp(t) ? t.host : t;
}
function Qv(e) {
  const t = Eo(e);
  return rd(t) ? t.ownerDocument.body : Zi(t) && Gl(t) ? t : Qv(t);
}
function Qs(e, t) {
  var i;
  t === void 0 && (t = []);
  const n = Qv(e), a = n === ((i = e.ownerDocument) == null ? void 0 : i.body), r = Si(n);
  return a ? t.concat(r, r.visualViewport || [], Gl(n) ? n : []) : t.concat(n, Qs(n));
}
function Tp(e, t, i) {
  return t === "viewport" ? to((function(n, a) {
    const r = Si(n), o = qn(n), c = r.visualViewport;
    let u = o.clientWidth, h = o.clientHeight, f = 0, y = 0;
    if (c) {
      u = c.width, h = c.height;
      const C = Yv();
      (C || !C && a === "fixed") && (f = c.offsetLeft, y = c.offsetTop);
    }
    return { width: u, height: h, x: f, y };
  })(e, i)) : Gn(t) ? to((function(n, a) {
    const r = ko(n, !0, a === "fixed"), o = r.top + n.clientTop, c = r.left + n.clientLeft, u = Zi(n) ? or(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * u.x, height: n.clientHeight * u.y, x: c * u.x, y: o * u.y };
  })(t, i)) : to((function(n) {
    const a = qn(n), r = ql(n), o = n.ownerDocument.body, c = io(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth), u = io(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight);
    let h = -r.scrollLeft + Jv(n);
    const f = -r.scrollTop;
    return Xi(o).direction === "rtl" && (h += io(a.clientWidth, o.clientWidth) - c), { width: c, height: u, x: h, y: f };
  })(qn(e)));
}
function kp(e) {
  return Zi(e) && Xi(e).position !== "fixed" ? e.offsetParent : null;
}
function Ep(e) {
  const t = Si(e);
  let i = kp(e);
  for (; i && Zw(i) && Xi(i).position === "static"; ) i = kp(i);
  return i && (Zn(i) === "html" || Zn(i) === "body" && Xi(i).position === "static" && !_u(i)) ? t : i || (function(n) {
    let a = Eo(n);
    for (; Zi(a) && !rd(a); ) {
      if (_u(a)) return a;
      a = Eo(a);
    }
    return null;
  })(e) || t;
}
function Jw(e, t, i) {
  const n = Zi(t), a = qn(t), r = ko(e, !0, i === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (n || !n && i !== "fixed") if ((Zn(t) !== "body" || Gl(a)) && (o = ql(t)), Zi(t)) {
    const u = ko(t, !0);
    c.x = u.x + t.clientLeft, c.y = u.y + t.clientTop;
  } else a && (c.x = Jv(a));
  return { x: r.left + o.scrollLeft - c.x, y: r.top + o.scrollTop - c.y, width: r.width, height: r.height };
}
const Qw = { getClippingRect: function(e) {
  let { element: t, boundary: i, rootBoundary: n, strategy: a } = e;
  const r = i === "clippingAncestors" ? (function(h, f) {
    const y = f.get(h);
    if (y) return y;
    let C = Qs(h).filter(((N) => Gn(N) && Zn(N) !== "body")), E = null;
    const L = Xi(h).position === "fixed";
    let A = L ? Eo(h) : h;
    for (; Gn(A) && !rd(A); ) {
      const N = Xi(A), D = _u(A);
      (L ? D || E : D || N.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = N : C = C.filter(((M) => M !== A)), A = Eo(A);
    }
    return f.set(h, C), C;
  })(t, this._c) : [].concat(i), o = [...r, n], c = o[0], u = o.reduce(((h, f) => {
    const y = Tp(t, f, a);
    return h.top = io(y.top, h.top), h.right = Sp(y.right, h.right), h.bottom = Sp(y.bottom, h.bottom), h.left = io(y.left, h.left), h;
  }), Tp(t, c, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: i, strategy: n } = e;
  const a = Zi(i), r = qn(i);
  if (i === r) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((Zn(i) !== "body" || Gl(r)) && (o = ql(i)), Zi(i))) {
    const h = ko(i);
    c = or(i), u.x = h.x + i.clientLeft, u.y = h.y + i.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - o.scrollLeft * c.x + u.x, y: t.y * c.y - o.scrollTop * c.y + u.y };
}, isElement: Gn, getDimensions: function(e) {
  return Zi(e) ? Gv(e) : e.getBoundingClientRect();
}, getOffsetParent: Ep, getDocumentElement: qn, getScale: or, async getElementRects(e) {
  let { reference: t, floating: i, strategy: n } = e;
  const a = this.getOffsetParent || Ep, r = this.getDimensions;
  return { reference: Jw(t, await a(i), n), floating: { x: 0, y: 0, ...await r(i) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Xi(e).direction === "rtl" }, eS = (e, t, i) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: Qw, ...i }, r = { ...a.platform, _c: n };
  return jw(e, t, { ...a, platform: r });
}, Wn = {
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
function wu(e, t) {
  let i = Wn.themes[e] || {}, n;
  do
    n = i[t], typeof n > "u" ? i.$extend ? i = Wn.themes[i.$extend] || {} : (i = null, n = Wn[t]) : i = null;
  while (i);
  return n;
}
function tS(e) {
  const t = [e];
  let i = Wn.themes[e] || {};
  do
    i.$extend && !i.$resetCss ? (t.push(i.$extend), i = Wn.themes[i.$extend] || {}) : i = null;
  while (i);
  return t.map((n) => `v-popper--theme-${n}`);
}
function Ap(e) {
  const t = [e];
  let i = Wn.themes[e] || {};
  do
    i.$extend ? (t.push(i.$extend), i = Wn.themes[i.$extend] || {}) : i = null;
  while (i);
  return t;
}
let Ao = !1;
if (typeof window < "u") {
  Ao = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Ao = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let eg = !1;
typeof window < "u" && typeof navigator < "u" && (eg = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const iS = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Op = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, xp = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Np(e, t) {
  const i = e.indexOf(t);
  i !== -1 && e.splice(i, 1);
}
function Vc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Li = [];
let _a = null;
const Lp = {};
function Rp(e) {
  let t = Lp[e];
  return t || (t = Lp[e] = []), t;
}
let Su = function() {
};
typeof window < "u" && (Su = window.Element);
function Ve(e) {
  return function(t) {
    return wu(t.theme, e);
  };
}
const Kc = "__floating-vue__popper", tg = () => /* @__PURE__ */ It({
  name: "VPopper",
  provide() {
    return {
      [Kc]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Kc]: { default: null }
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
      default: Ve("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Ve("positioningDisabled")
    },
    placement: {
      type: String,
      default: Ve("placement"),
      validator: (e) => iS.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: Ve("delay")
    },
    distance: {
      type: [Number, String],
      default: Ve("distance")
    },
    skidding: {
      type: [Number, String],
      default: Ve("skidding")
    },
    triggers: {
      type: Array,
      default: Ve("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: Ve("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: Ve("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: Ve("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: Ve("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: Ve("popperHideTriggers")
    },
    container: {
      type: [String, Object, Su, Boolean],
      default: Ve("container")
    },
    boundary: {
      type: [String, Su],
      default: Ve("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: Ve("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: Ve("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: Ve("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: Ve("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: Ve("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: Ve("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: Ve("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: Ve("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: Ve("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: Ve("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: Ve("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: Ve("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: Ve("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: Ve("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: Ve("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: Ve("flip")
    },
    shift: {
      type: Boolean,
      default: Ve("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: Ve("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: Ve("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: Ve("disposeTimeout")
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
      return (e = this[Kc]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(Ww({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Vw({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Yw({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Kw({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Bw({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: n, rects: a, middlewareData: r }) => {
          let o;
          const { centerOffset: c } = r.arrow;
          return n.startsWith("top") || n.startsWith("bottom") ? o = Math.abs(c) > a.reference.width / 2 : o = Math.abs(c) > a.reference.height / 2, {
            data: {
              overflow: o
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const n = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: a, placement: r, middlewareData: o }) => {
            var c;
            if ((c = o.autoSize) != null && c.skip)
              return {};
            let u, h;
            return r.startsWith("top") || r.startsWith("bottom") ? u = a.reference.width : h = a.reference.height, this.$_innerNode.style[n === "min" ? "minWidth" : n === "max" ? "maxWidth" : "width"] = u != null ? `${u}px` : null, this.$_innerNode.style[n === "min" ? "minHeight" : n === "max" ? "maxHeight" : "height"] = h != null ? `${h}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Xw({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: n, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = n != null ? `${n}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const i = await eS(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), _a && this.instantMove && _a.instantMove && _a !== this.parentPopper) {
        _a.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (_a = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Vc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Qs(this.$_referenceNode),
        ...Qs(this.$_popperNode)
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
        for (let i = 0; i < Li.length; i++)
          t = Li[i], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Li.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Ap(this.theme))
        Rp(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Vc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Np(Li, this), Li.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const i of Ap(this.theme)) {
        const n = Rp(i);
        Np(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${i}`);
      }
      _a === this && (_a = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Vc(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Op, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Op, this.popperTriggers, this.popperShowTriggers, e);
      const t = (i) => {
        i.usedByTooltip || this.hide({ event: i });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, xp, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], xp, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, i) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: i }), e.forEach((n) => n.addEventListener(t, i, Ao ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, i, n, a) {
      let r = i;
      n != null && (r = typeof n == "function" ? n(r) : n), r.forEach((o) => {
        const c = t[o];
        c && this.$_registerEventListeners(e, c, a);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((i) => {
        const { targetNodes: n, eventType: a, handler: r } = i;
        !e || e === a ? n.forEach((o) => o.removeEventListener(a, r)) : t.push(i);
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
      if (no >= e.left && no <= e.right && ao >= e.top && ao <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), i = no - jn, n = ao - Bn, a = t.left + t.width / 2 - jn + (t.top + t.height / 2) - Bn + t.width + t.height, r = jn + i * a, o = Bn + n * a;
        return ms(jn, Bn, r, o, t.left, t.top, t.left, t.bottom) || // Left edge
        ms(jn, Bn, r, o, t.left, t.top, t.right, t.top) || // Top edge
        ms(jn, Bn, r, o, t.right, t.top, t.right, t.bottom) || // Right edge
        ms(jn, Bn, r, o, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (eg) {
    const e = Ao ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Ip(t), e), document.addEventListener("touchend", (t) => Pp(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Ip(e), !0), window.addEventListener("click", (e) => Pp(e, !1), !0);
  window.addEventListener("resize", rS);
}
function Ip(e, t) {
  for (let i = 0; i < Li.length; i++) {
    const n = Li[i];
    try {
      n.mouseDownContains = n.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Pp(e, t) {
  nS(e, t);
}
function nS(e, t) {
  const i = {};
  for (let n = Li.length - 1; n >= 0; n--) {
    const a = Li[n];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !i[a.randomId] && $p(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let c = a.parentPopper;
            for (; c; )
              i[c.randomId] = !0, c = c.parentPopper;
            return;
          }
          let o = a.parentPopper;
          for (; o && $p(o, o.containsGlobalTarget, e); )
            o.$_handleGlobalClose(e, t), o = o.parentPopper;
        }
      });
    } catch {
    }
  }
}
function $p(e, t, i) {
  return i.closeAllPopover || i.closePopover && t || aS(e, i) && !t;
}
function aS(e, t) {
  if (typeof e.autoHide == "function") {
    const i = e.autoHide(t);
    return e.lastAutoHide = i, i;
  }
  return e.autoHide;
}
function rS() {
  for (let e = 0; e < Li.length; e++)
    Li[e].$_computePosition();
}
let jn = 0, Bn = 0, no = 0, ao = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  jn = no, Bn = ao, no = e.clientX, ao = e.clientY;
}, Ao ? {
  passive: !0
} : void 0);
function ms(e, t, i, n, a, r, o, c) {
  const u = ((o - a) * (t - r) - (c - r) * (e - a)) / ((c - r) * (i - e) - (o - a) * (n - t)), h = ((i - e) * (t - r) - (n - t) * (e - a)) / ((c - r) * (i - e) - (o - a) * (n - t));
  return u >= 0 && u <= 1 && h >= 0 && h <= 1;
}
const oS = {
  extends: tg()
}, od = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
};
function sS(e, t, i, n, a, r) {
  return m(), _("div", {
    ref: "reference",
    class: ge(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Me(e.$slots, "default", As(yo(e.slotData)))
  ], 2);
}
const lS = /* @__PURE__ */ od(oS, [["render", sS]]);
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
let ks;
function Cu() {
  Cu.init || (Cu.init = !0, ks = cS() !== -1);
}
var Wl = {
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
    Cu(), ti(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", ks && this.$el.appendChild(e), e.data = "about:blank", ks || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!ks && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const uS = /* @__PURE__ */ cm();
sm("data-v-b329ee4c");
const dS = {
  class: "resize-observer",
  tabindex: "-1"
};
lm();
const fS = /* @__PURE__ */ uS((e, t, i, n, a, r) => (m(), je("div", dS)));
Wl.render = fS;
Wl.__scopeId = "data-v-b329ee4c";
Wl.__file = "src/components/ResizeObserver.vue";
const ig = (e = "theme") => ({
  computed: {
    themeClass() {
      return tS(this[e]);
    }
  }
}), pS = /* @__PURE__ */ It({
  name: "VPopperContent",
  components: {
    ResizeObserver: Wl
  },
  mixins: [
    ig()
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
}), hS = ["id", "aria-hidden", "tabindex", "data-popper-placement"], vS = {
  ref: "inner",
  class: "v-popper__inner"
}, gS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-outer" }, null, -1), bS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-inner" }, null, -1), mS = [
  gS,
  bS
];
function yS(e, t, i, n, a, r) {
  const o = Be("ResizeObserver");
  return m(), _("div", {
    id: e.popperId,
    ref: "popover",
    class: ge(["v-popper__popper", [
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
    onKeyup: t[2] || (t[2] = at((c) => e.autoHide && e.$emit("hide"), ["esc"]))
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
      l("div", vS, [
        e.mounted ? (m(), _(ie, { key: 0 }, [
          l("div", null, [
            Me(e.$slots, "default")
          ]),
          e.handleResize ? (m(), je(o, {
            key: 0,
            onNotify: t[1] || (t[1] = (c) => e.$emit("resize", c))
          })) : $("", !0)
        ], 64)) : $("", !0)
      ], 512),
      l("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: hi(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, mS, 4)
    ], 4)
  ], 46, hS);
}
const ng = /* @__PURE__ */ od(pS, [["render", yS]]), ag = {
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
let Tu = function() {
};
typeof window < "u" && (Tu = window.Element);
const _S = /* @__PURE__ */ It({
  name: "VPopperWrapper",
  components: {
    Popper: lS,
    PopperContent: ng
  },
  mixins: [
    ag,
    ig("finalTheme")
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
      type: [String, Object, Tu, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Tu],
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
function wS(e, t, i, n, a, r) {
  const o = Be("PopperContent"), c = Be("Popper");
  return m(), je(c, Yt({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (u) => e.$emit("update:shown", u)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: $e(({
      popperId: u,
      isShown: h,
      shouldMountContent: f,
      skipTransition: y,
      autoHide: C,
      show: E,
      hide: L,
      handleResize: A,
      onResize: N,
      classes: D,
      result: M
    }) => [
      Me(e.$slots, "default", {
        shown: h,
        show: E,
        hide: L
      }),
      Ae(o, {
        ref: "popperContent",
        "popper-id": u,
        theme: e.finalTheme,
        shown: h,
        mounted: f,
        "skip-transition": y,
        "auto-hide": C,
        "handle-resize": A,
        classes: D,
        result: M,
        onHide: L,
        onResize: N
      }, {
        default: $e(() => [
          Me(e.$slots, "popper", {
            shown: h,
            hide: L
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const sd = /* @__PURE__ */ od(_S, [["render", wS]]), SS = {
  ...sd,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...sd
});
({
  ...sd
});
tg();
const Fp = Wn, CS = SS, TS = /* @__PURE__ */ It({
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
}), kS = "_ncPopover_qgtYg", ES = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: kS
}, rg = "nc-popover-9";
Fp.themes[rg] = structuredClone(Fp.themes.dropdown);
const AS = {
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
      theme: rg
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
      return this.placement === "start" ? gu ? "right" : "left" : this.placement === "end" ? gu ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = td(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: Co(),
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
        Ra.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function OS(e, t, i, n, a, r) {
  const o = Be("NcPopoverTriggerProvider"), c = Be("Dropdown");
  return m(), je(c, {
    ref: "popover",
    shown: a.internalShown,
    "onUpdate:shown": [
      t[0] || (t[0] = (u) => a.internalShown = u),
      t[1] || (t[1] = (u) => a.internalShown = u)
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
    popper: $e((u) => [
      Me(e.$slots, "default", As(yo(u)))
    ]),
    default: $e(() => [
      Ae(o, {
        shown: a.internalShown,
        popupRole: i.popupRole
      }, {
        default: $e((u) => [
          Me(e.$slots, "trigger", As(yo(u)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const xS = {
  $style: ES
}, Dp = /* @__PURE__ */ Qe(AS, [["render", OS], ["__cssModules", xS]]), NS = {
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
}, LS = ["aria-hidden", "aria-label"], RS = ["fill", "width", "height"], IS = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, PS = { key: 0 };
function $S(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", IS, [
        i.title ? (m(), _("title", PS, v(i.title), 1)) : $("", !0)
      ])
    ], 8, RS))
  ], 16, LS);
}
const FS = /* @__PURE__ */ Qe(NS, [["render", $S]]);
Qn(v1);
function ld(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const i = t;
      if (i.type === Lt)
        return !1;
      if (i.type === ie && !ld(i.children))
        return !1;
      if (i.type === Io && !i.children.trim())
        return !1;
    }
    return !0;
  });
}
const DS = ".focusable", MS = {
  name: "NcActions",
  components: {
    NcButton: Yi,
    NcPopover: Dp
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
      [id]: B(() => this.actionsMenuSemanticType === "menu"),
      [Uv]: this.closeMenu
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
      default: Ct("Actions")
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
      randomId: Kl()
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
    Nw(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(DS);
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
    const e = [], t = (E, L) => {
      E.forEach((A) => {
        if (this.isAction(A)) {
          L.push(A);
          return;
        }
        A.type === ie && t(A.children, L);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let i = e.filter(this.isValidSingleAction);
    this.forceMenu && i.length > 0 && this.inline > 0 && (i = []);
    const n = i.slice(0, this.inline), a = e.filter((E) => !n.includes(E)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], o = ["NcActionInput", "NcActionTextEditable"], c = ["NcActionLink", "NcActionRouter"], u = a.some((E) => o.includes(this.getActionName(E))), h = a.some((E) => r.includes(this.getActionName(E))), f = a.some((E) => c.includes(this.getActionName(E)));
    u ? this.actionsMenuSemanticType = "dialog" : h ? this.actionsMenuSemanticType = "menu" : f ? this.actionsMenuSemanticType = "navigation" : e.filter((L) => this.getActionName(L).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const y = (E) => {
      const L = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(L) ? ni("img", { class: "action-item__menutoggle__icon", src: L, alt: "" }) : ni("span", { class: ["icon", L] })), N = E?.children?.default?.()?.[0]?.children?.trim(), D = this.forceName ? N : "";
      let M = E?.props?.title;
      this.forceName || M || (M = N);
      const z = { ...E?.props ?? {} }, T = ["submit", "reset"].includes(z.type) ? z.modelValue : "button";
      return delete z.modelValue, delete z.type, ni(
        Yi,
        Yt(
          z,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": E?.props?.["aria-label"] || N,
            title: M,
            disabled: this.disabled || E?.props?.disabled,
            pressed: E?.props?.modelValue,
            size: this.size,
            type: T,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (D ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": E?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => D,
          icon: () => A
        }
      );
    }, C = (E) => {
      const L = ld(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? ni("span", { class: ["icon", this.defaultIcon] }) : ni(FS, { size: 20 }), A = `${this.randomId}-trigger`;
      return ni(
        Dp,
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
          trigger: () => ni(Yi, {
            id: A,
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
            icon: () => L,
            default: () => this.menuName
          }),
          default: () => ni("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            ni("ul", {
              id: this.randomId,
              tabindex: "-1",
              ref: "menuList",
              role: this.config.popupRole,
              // For most roles a label is required (dialog, menu), but also in general nothing speaks against labelling a list.
              // It is even recommended to do so.
              "aria-labelledby": A,
              "aria-modal": this.actionsMenuSemanticType === "dialog" ? "true" : void 0
            }, [
              E
            ])
          ])
        }
      );
    };
    return e.length === 1 && i.length === 1 && !this.forceMenu ? y(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), n.length > 0 && this.inline > 0 ? ni(
      "div",
      {
        class: [
          "action-items",
          `action-item--${this.triggerButtonVariant}`
        ]
      },
      [
        // Render inline actions
        ...n.map(y),
        // render the rest within the popover menu
        a.length > 0 ? ni(
          "div",
          {
            class: [
              "action-item",
              {
                "action-item--open": this.opened
              }
            ]
          },
          [C(a)]
        ) : null
      ]
    ) : ni(
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
        C(e)
      ]
    ));
  }
}, cd = /* @__PURE__ */ Qe(MS, [["__scopeId", "data-v-7206c1f1"]]), zS = ["aria-label"], US = ["width", "height"], jS = ["fill"], BS = ["fill"], HS = { key: 0 }, VS = /* @__PURE__ */ It({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, i = B(() => {
      const n = ["#777", "#CCC"];
      return t.appearance === "light" ? n : t.appearance === "dark" ? n.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (n, a) => (m(), _("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (m(), _("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        l("path", {
          fill: i.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, jS),
        l("path", {
          fill: i.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (m(), _("title", HS, v(e.name), 1)) : $("", !0)
        ], 8, BS)
      ], 8, US))
    ], 8, zS));
  }
}), og = /* @__PURE__ */ Qe(VS, [["__scopeId", "data-v-cf399190"]]), ku = /* @__PURE__ */ It({
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
}, GS = ["aria-hidden", "aria-label"], qS = ["fill", "width", "height"], WS = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, YS = { key: 0 };
function XS(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", WS, [
        i.title ? (m(), _("title", YS, v(i.title), 1)) : $("", !0)
      ])
    ], 8, qS))
  ], 16, GS);
}
const ZS = /* @__PURE__ */ Qe(KS, [["render", XS]]), JS = {
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
}, QS = ["aria-hidden", "aria-label"], eC = ["fill", "width", "height"], tC = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, iC = { key: 0 };
function nC(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", tC, [
        i.title ? (m(), _("title", iC, v(i.title), 1)) : $("", !0)
      ])
    ], 8, eC))
  ], 16, QS);
}
const aC = /* @__PURE__ */ Qe(JS, [["render", nC]]);
Qn(y1);
const rC = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Yi,
    ChevronDown: W0,
    ChevronUp: tw
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
    return { isLegacy34: ea };
  },
  computed: {
    labelButton() {
      return this.open ? Ct("Collapse menu") : Ct("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function oC(e, t, i, n, a, r) {
  const o = Be("ChevronUp"), c = Be("ChevronDown"), u = Be("NcButton");
  return m(), je(u, {
    class: ge(["icon-collapse", {
      "icon-collapse--active": i.active,
      "icon-collapse--open": i.open
    }]),
    "aria-label": r.labelButton,
    variant: i.active && n.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: $e(() => [
      i.open ? (m(), je(o, {
        key: 0,
        size: 20
      })) : (m(), je(c, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const sC = /* @__PURE__ */ Qe(rC, [["render", oC], ["__scopeId", "data-v-cfbd3794"]]);
Qn(_1, C1);
const lC = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: cd,
    NcActionButton: xw,
    NcAppNavigationIconCollapsible: sC,
    NcInputConfirmCancel: bw,
    NcLoadingIcon: og,
    NcVNodes: ku,
    Pencil: ZS,
    Undo: aC
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: Pv, default: null }
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
      default: () => Kl(),
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
      isMobile: $o(),
      isLegacy34: ea
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
      return this.editLabel ? this.editLabel : Ct("Edit item");
    },
    undoButtonAriaLabel() {
      return Ct("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && i && (t?.(e), e.preventDefault(), this.isMobile && mn("toggle-navigation", { open: !1 }));
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
}, cC = ["id"], uC = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], dC = {
  key: 0,
  class: "editingContainer"
}, fC = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, pC = { class: "app-navigation-entry__deleted-description" }, hC = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, vC = {
  key: 0,
  class: "app-navigation-entry__children"
};
function gC(e, t, i, n, a, r) {
  const o = Be("NcLoadingIcon"), c = Be("NcInputConfirmCancel"), u = Be("Pencil"), h = Be("NcActionButton"), f = Be("Undo"), y = Be("NcActions"), C = Be("NcAppNavigationIconCollapsible");
  return m(), _("li", {
    id: i.id,
    class: ge([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": i.pinned,
      "app-navigation-entry--collapsible": i.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (m(), je(Ku(r.isRouterLink ? "router-link" : "NcVNodes"), As(yo({ ...r.isRouterLink && { custom: !0, to: i.to } })), {
      default: $e(({ href: E, navigate: L, isActive: A }) => [
        l("div", {
          ref: "entry",
          class: ge(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": i.undo,
            "app-navigation-entry--legacy": n.isLegacy34,
            active: i.to && A || i.active
          }]),
          onPointerenter: t[4] || (t[4] = (...N) => r.requestHighlight && r.requestHighlight(...N)),
          onFocusin: t[5] || (t[5] = (...N) => r.requestHighlight && r.requestHighlight(...N))
        }, [
          i.undo ? $("", !0) : (m(), _("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": i.active || i.to && A ? "page" : void 0,
            "aria-description": i.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: i.href || E || "#",
            target: r.isExternal(i.href) ? "_blank" : void 0,
            title: i.title || i.name,
            onBlur: t[1] || (t[1] = (...N) => r.handleBlur && r.handleBlur(...N)),
            onClick: (N) => r.onClick(N, L, E),
            onFocus: t[2] || (t[2] = (...N) => r.handleFocus && r.handleFocus(...N)),
            onKeydown: t[3] || (t[3] = at(Ee((...N) => r.handleTab && r.handleTab(...N), ["exact"]), ["tab"]))
          }, [
            l("div", {
              class: ge(["app-navigation-entry-icon", { [i.icon]: i.icon }])
            }, [
              i.loading ? (m(), je(o, { key: 0 })) : Me(e.$slots, "icon", {
                key: 1,
                active: i.active || i.to && A
              }, void 0, !0)
            ], 2),
            l("span", {
              class: ge(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, v(i.name), 3),
            a.editingActive ? (m(), _("div", dC, [
              Ae(c, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (N) => a.editingValue = N),
                placeholder: i.editPlaceholder !== "" ? i.editPlaceholder : i.name,
                primary: i.to && A || i.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : $("", !0)
          ], 40, uC)),
          i.undo ? (m(), _("div", fC, [
            l("div", pC, v(i.name), 1)
          ])) : $("", !0),
          (e.$slots.actions || e.$slots.counter || i.editable || i.undo) && !a.editingActive ? (m(), _("div", {
            key: 2,
            class: ge(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": i.forceDisplayActions || a.menuOpenLocalValue || i.menuOpen }])
          }, [
            e.$slots.counter ? (m(), _("div", hC, [
              Me(e.$slots, "counter", {}, void 0, !0)
            ])) : $("", !0),
            e.$slots.actions || i.editable && !a.editingActive || i.undo ? (m(), je(y, {
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
              icon: $e(() => [
                Me(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: $e(() => [
                i.editable && !a.editingActive ? (m(), je(h, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: $e(() => [
                    Ae(u, { size: 20 })
                  ]),
                  default: $e(() => [
                    ye(" " + v(i.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : $("", !0),
                i.undo ? (m(), je(h, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: $e(() => [
                    Ae(f, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : $("", !0),
                Me(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : $("", !0)
          ], 2)) : $("", !0),
          i.allowCollapse && e.$slots.default ? (m(), je(C, {
            key: 3,
            active: i.to && A || i.active,
            open: a.opened,
            onClick: Ee(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : $("", !0),
          Me(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (m(), _("ul", vC, [
      Me(e.$slots, "default", {}, void 0, !0)
    ])) : $("", !0)
  ], 10, cC);
}
const Gc = /* @__PURE__ */ Qe(lC, [["render", gC], ["__scopeId", "data-v-01bef41b"]]), qc = /* @__PURE__ */ new WeakMap(), bC = {
  mounted(e, t) {
    const i = !t.modifiers.bubble;
    let n;
    if (typeof t.value == "function") n = cp(e, t.value, { capture: i });
    else {
      const [a, r] = t.value;
      n = cp(e, a, Object.assign({ capture: i }, r));
    }
    qc.set(e, n);
  },
  unmounted(e) {
    const t = qc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), qc.delete(e);
  }
}, mC = {
  mounted(e) {
    e.focus();
  }
}, yC = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", _C = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Eu = "numeric", Au = "ascii", Ou = "alpha", ro = "asciinumeric", Wr = "alphanumeric", xu = "domain", sg = "emoji", wC = "scheme", SC = "slashscheme", Wc = "whitespace";
function CC(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Oa(e, t, i) {
  t[Eu] && (t[ro] = !0, t[Wr] = !0), t[Au] && (t[ro] = !0, t[Ou] = !0), t[ro] && (t[Wr] = !0), t[Ou] && (t[Wr] = !0), t[Wr] && (t[xu] = !0), t[sg] && (t[xu] = !0);
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
function fi(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
fi.groups = {};
fi.prototype = {
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
    n = n || fi.groups;
    let a;
    return t && t.j ? a = t : (a = new fi(t), i && n && Oa(t, i, n)), this.jr.push([e, a]), a;
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
    for (let o = 0; o < r - 1; o++)
      a = a.tt(e[o]);
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
    n = n || fi.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let o, c = a.go(e);
    if (c ? (o = new fi(), Object.assign(o.j, c.j), o.jr.push.apply(o.jr, c.jr), o.jd = c.jd, o.t = c.t) : o = new fi(), r) {
      if (n)
        if (o.t && typeof o.t == "string") {
          const u = Object.assign(TC(o.t, n), i);
          Oa(r, u, n);
        } else i && Oa(r, i, n);
      o.t = r;
    }
    return a.j[e] = o, o;
  }
};
const Ue = (e, t, i, n, a) => e.ta(t, i, n, a), bt = (e, t, i, n, a) => e.tr(t, i, n, a), Mp = (e, t, i, n, a) => e.ts(t, i, n, a), ne = (e, t, i, n, a) => e.tt(t, i, n, a), cn = "WORD", Nu = "UWORD", lg = "ASCIINUMERICAL", cg = "ALPHANUMERICAL", Oo = "LOCALHOST", Lu = "TLD", Ru = "UTLD", Es = "SCHEME", Ja = "SLASH_SCHEME", ud = "NUM", Iu = "WS", dd = "NL", oo = "OPENBRACE", so = "CLOSEBRACE", el = "OPENBRACKET", tl = "CLOSEBRACKET", il = "OPENPAREN", nl = "CLOSEPAREN", al = "OPENANGLEBRACKET", rl = "CLOSEANGLEBRACKET", ol = "FULLWIDTHLEFTPAREN", sl = "FULLWIDTHRIGHTPAREN", ll = "LEFTCORNERBRACKET", cl = "RIGHTCORNERBRACKET", ul = "LEFTWHITECORNERBRACKET", dl = "RIGHTWHITECORNERBRACKET", fl = "FULLWIDTHLESSTHAN", pl = "FULLWIDTHGREATERTHAN", hl = "AMPERSAND", vl = "APOSTROPHE", gl = "ASTERISK", Vn = "AT", bl = "BACKSLASH", ml = "BACKTICK", yl = "CARET", xa = "COLON", fd = "COMMA", _l = "DOLLAR", Ki = "DOT", wl = "EQUALS", pd = "EXCLAMATION", yi = "HYPHEN", lo = "PERCENT", Sl = "PIPE", Cl = "PLUS", Tl = "POUND", co = "QUERY", hd = "QUOTE", ug = "FULLWIDTHMIDDLEDOT", vd = "SEMI", Gi = "SLASH", uo = "TILDE", kl = "UNDERSCORE", dg = "EMOJI", El = "SYM";
var fg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: cg,
  AMPERSAND: hl,
  APOSTROPHE: vl,
  ASCIINUMERICAL: lg,
  ASTERISK: gl,
  AT: Vn,
  BACKSLASH: bl,
  BACKTICK: ml,
  CARET: yl,
  CLOSEANGLEBRACKET: rl,
  CLOSEBRACE: so,
  CLOSEBRACKET: tl,
  CLOSEPAREN: nl,
  COLON: xa,
  COMMA: fd,
  DOLLAR: _l,
  DOT: Ki,
  EMOJI: dg,
  EQUALS: wl,
  EXCLAMATION: pd,
  FULLWIDTHGREATERTHAN: pl,
  FULLWIDTHLEFTPAREN: ol,
  FULLWIDTHLESSTHAN: fl,
  FULLWIDTHMIDDLEDOT: ug,
  FULLWIDTHRIGHTPAREN: sl,
  HYPHEN: yi,
  LEFTCORNERBRACKET: ll,
  LEFTWHITECORNERBRACKET: ul,
  LOCALHOST: Oo,
  NL: dd,
  NUM: ud,
  OPENANGLEBRACKET: al,
  OPENBRACE: oo,
  OPENBRACKET: el,
  OPENPAREN: il,
  PERCENT: lo,
  PIPE: Sl,
  PLUS: Cl,
  POUND: Tl,
  QUERY: co,
  QUOTE: hd,
  RIGHTCORNERBRACKET: cl,
  RIGHTWHITECORNERBRACKET: dl,
  SCHEME: Es,
  SEMI: vd,
  SLASH: Gi,
  SLASH_SCHEME: Ja,
  SYM: El,
  TILDE: uo,
  TLD: Lu,
  UNDERSCORE: kl,
  UTLD: Ru,
  UWORD: Nu,
  WORD: cn,
  WS: Iu
});
const sn = /[a-z]/, Br = new RegExp("\\p{L}", "u"), Yc = new RegExp("\\p{Emoji}", "u"), ln = /\d/, Xc = /\s/, zp = "\r", Zc = `
`, kC = "️", EC = "‍", Jc = "￼";
let ys = null, _s = null;
function AC(e = []) {
  const t = {};
  fi.groups = t;
  const i = new fi();
  ys == null && (ys = Up(yC)), _s == null && (_s = Up(_C)), ne(i, "'", vl), ne(i, "{", oo), ne(i, "}", so), ne(i, "[", el), ne(i, "]", tl), ne(i, "(", il), ne(i, ")", nl), ne(i, "<", al), ne(i, ">", rl), ne(i, "（", ol), ne(i, "）", sl), ne(i, "「", ll), ne(i, "」", cl), ne(i, "『", ul), ne(i, "』", dl), ne(i, "＜", fl), ne(i, "＞", pl), ne(i, "&", hl), ne(i, "*", gl), ne(i, "@", Vn), ne(i, "`", ml), ne(i, "^", yl), ne(i, ":", xa), ne(i, ",", fd), ne(i, "$", _l), ne(i, ".", Ki), ne(i, "=", wl), ne(i, "!", pd), ne(i, "-", yi), ne(i, "%", lo), ne(i, "|", Sl), ne(i, "+", Cl), ne(i, "#", Tl), ne(i, "?", co), ne(i, '"', hd), ne(i, "/", Gi), ne(i, ";", vd), ne(i, "~", uo), ne(i, "_", kl), ne(i, "\\", bl), ne(i, "・", ug);
  const n = bt(i, ln, ud, {
    [Eu]: !0
  });
  bt(n, ln, n);
  const a = bt(n, sn, lg, {
    [ro]: !0
  }), r = bt(n, Br, cg, {
    [Wr]: !0
  }), o = bt(i, sn, cn, {
    [Au]: !0
  });
  bt(o, ln, a), bt(o, sn, o), bt(a, ln, a), bt(a, sn, a);
  const c = bt(i, Br, Nu, {
    [Ou]: !0
  });
  bt(c, sn), bt(c, ln, r), bt(c, Br, c), bt(r, ln, r), bt(r, sn), bt(r, Br, r);
  const u = ne(i, Zc, dd, {
    [Wc]: !0
  }), h = ne(i, zp, Iu, {
    [Wc]: !0
  }), f = bt(i, Xc, Iu, {
    [Wc]: !0
  });
  ne(i, Jc, f), ne(h, Zc, u), ne(h, Jc, f), bt(h, Xc, f), ne(f, zp), ne(f, Zc), bt(f, Xc, f), ne(f, Jc, f);
  const y = bt(i, Yc, dg, {
    [sg]: !0
  });
  ne(y, "#"), bt(y, Yc, y), ne(y, kC, y);
  const C = ne(y, EC);
  ne(C, "#"), bt(C, Yc, y);
  const E = [[sn, o], [ln, a]], L = [[sn, null], [Br, c], [ln, r]];
  for (let A = 0; A < ys.length; A++)
    zn(i, ys[A], Lu, cn, E);
  for (let A = 0; A < _s.length; A++)
    zn(i, _s[A], Ru, Nu, L);
  Oa(Lu, {
    tld: !0,
    ascii: !0
  }, t), Oa(Ru, {
    utld: !0,
    alpha: !0
  }, t), zn(i, "file", Es, cn, E), zn(i, "mailto", Es, cn, E), zn(i, "http", Ja, cn, E), zn(i, "https", Ja, cn, E), zn(i, "ftp", Ja, cn, E), zn(i, "ftps", Ja, cn, E), Oa(Es, {
    scheme: !0,
    ascii: !0
  }, t), Oa(Ja, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, N) => A[0] > N[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const N = e[A][0], M = e[A][1] ? {
      [wC]: !0
    } : {
      [SC]: !0
    };
    N.indexOf("-") >= 0 ? M[xu] = !0 : sn.test(N) ? ln.test(N) ? M[ro] = !0 : M[Au] = !0 : M[Eu] = !0, Mp(i, N, N, M);
  }
  return Mp(i, "localhost", Oo, {
    ascii: !0
  }), i.jd = new fi(El), {
    start: i,
    tokens: Object.assign({
      groups: t
    }, fg)
  };
}
function pg(e, t) {
  const i = OC(t.replace(/[A-Z]/g, (c) => c.toLowerCase())), n = i.length, a = [];
  let r = 0, o = 0;
  for (; o < n; ) {
    let c = e, u = null, h = 0, f = null, y = -1, C = -1;
    for (; o < n && (u = c.go(i[o])); )
      c = u, c.accepts() ? (y = 0, C = 0, f = c) : y >= 0 && (y += i[o].length, C++), h += i[o].length, r += i[o].length, o++;
    r -= y, o -= C, h -= y, a.push({
      t: f.t,
      // token type/name
      v: t.slice(r - h, r),
      // string value
      s: r - h,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return a;
}
function OC(e) {
  const t = [], i = e.length;
  let n = 0;
  for (; n < i; ) {
    let a = e.charCodeAt(n), r, o = a < 55296 || a > 56319 || n + 1 === i || (r = e.charCodeAt(n + 1)) < 56320 || r > 57343 ? e[n] : e.slice(n, n + 2);
    t.push(o), n += o.length;
  }
  return t;
}
function zn(e, t, i, n, a) {
  let r;
  const o = t.length;
  for (let c = 0; c < o - 1; c++) {
    const u = t[c];
    e.j[u] ? r = e.j[u] : (r = new fi(n), r.jr = a.slice(), e.j[u] = r), e = r;
  }
  return r = new fi(i), r.jr = a.slice(), e.j[t[o - 1]] = r, r;
}
function Up(e) {
  const t = [], i = [];
  let n = 0, a = "0123456789";
  for (; n < e.length; ) {
    let r = 0;
    for (; a.indexOf(e[n + r]) >= 0; )
      r++;
    if (r > 0) {
      t.push(i.join(""));
      for (let o = parseInt(e.substring(n, n + r), 10); o > 0; o--)
        i.pop();
      n += r;
    } else
      i.push(e[n]), n++;
  }
  return t;
}
const xo = {
  defaultProtocol: "http",
  events: null,
  format: jp,
  formatHref: jp,
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
function gd(e, t = null) {
  let i = Object.assign({}, xo);
  e && (i = Object.assign(i, e instanceof gd ? e.o : e));
  const n = i.ignoreTags, a = [];
  for (let r = 0; r < n.length; r++)
    a.push(n[r].toUpperCase());
  this.o = i, t && (this.defaultRender = t), this.ignoreTags = a;
}
gd.prototype = {
  o: xo,
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
    return a && (typeof a == "object" ? (a = i.t in a ? a[i.t] : xo[e], typeof a == "function" && n && (a = a(t, i))) : typeof a == "function" && n && (a = a(t, i.t, i)), a);
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
function jp(e) {
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
  toObject(e = xo.defaultProtocol) {
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
    const t = this, i = this.toHref(e.get("defaultProtocol")), n = e.get("formatHref", i, this), a = e.get("tagName", i, t), r = this.toFormattedString(e), o = {}, c = e.get("className", i, t), u = e.get("target", i, t), h = e.get("rel", i, t), f = e.getObj("attributes", i, t), y = e.getObj("events", i, t);
    return o.href = n, c && (o.class = c), u && (o.target = u), h && (o.rel = h), f && Object.assign(o, f), {
      tagName: a,
      attributes: o,
      content: r,
      eventListeners: y
    };
  }
};
function Yl(e, t) {
  class i extends hg {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const n in t)
    i.prototype[n] = t[n];
  return i.t = e, i;
}
const xC = Yl("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Bp = Yl("text"), NC = Yl("nl"), ws = Yl("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = xo.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== Oo && e[1].t === xa;
  }
}), mi = (e) => new fi(e);
function LC({
  groups: e
}) {
  const t = e.domain.concat([hl, gl, Vn, bl, ml, yl, _l, wl, yi, ud, lo, Sl, Cl, Tl, Gi, El, uo, kl]), i = [vl, xa, fd, Ki, pd, lo, co, hd, vd, al, rl, oo, so, tl, el, il, nl, ol, sl, ll, cl, ul, dl, fl, pl], n = [hl, vl, gl, bl, ml, yl, _l, wl, yi, oo, so, lo, Sl, Cl, Tl, co, Gi, El, uo, kl], a = mi(), r = ne(a, uo);
  Ue(r, n, r), Ue(r, e.domain, r);
  const o = mi(), c = mi(), u = mi();
  Ue(a, e.domain, o), Ue(a, e.scheme, c), Ue(a, e.slashscheme, u), Ue(o, n, r), Ue(o, e.domain, o);
  const h = ne(o, Vn);
  ne(r, Vn, h), ne(c, Vn, h), ne(u, Vn, h);
  const f = ne(r, Ki);
  Ue(f, n, r), Ue(f, e.domain, r);
  const y = mi();
  Ue(h, e.domain, y), Ue(y, e.domain, y);
  const C = ne(y, Ki);
  Ue(C, e.domain, y);
  const E = mi(xC);
  Ue(C, e.tld, E), Ue(C, e.utld, E), ne(h, Oo, E);
  const L = ne(y, yi);
  ne(L, yi, L), Ue(L, e.domain, y), Ue(E, e.domain, y), ne(E, Ki, C), ne(E, yi, L);
  const A = ne(o, yi), N = ne(o, Ki);
  ne(A, yi, A), Ue(A, e.domain, o), Ue(N, n, r), Ue(N, e.domain, o);
  const D = mi(ws);
  Ue(N, e.tld, D), Ue(N, e.utld, D), Ue(D, e.domain, o), Ue(D, n, r), ne(D, Ki, N), ne(D, yi, A), ne(D, Vn, h);
  const M = ne(D, xa), z = mi(ws);
  Ue(M, e.numeric, z);
  const T = mi(ws), re = mi();
  Ue(T, t, T), Ue(T, i, re), Ue(re, t, T), Ue(re, i, re), ne(D, Gi, T), ne(z, Gi, T);
  const ue = ne(c, xa), Z = ne(u, xa), pe = ne(Z, Gi), Y = ne(pe, Gi);
  Ue(c, e.domain, o), ne(c, Ki, N), ne(c, yi, A), Ue(u, e.domain, o), ne(u, Ki, N), ne(u, yi, A), Ue(ue, e.domain, T), ne(ue, Gi, T), ne(ue, co, T), Ue(Y, e.domain, T), Ue(Y, t, T), ne(Y, Gi, T);
  const se = [
    [oo, so],
    // {}
    [el, tl],
    // []
    [il, nl],
    // ()
    [al, rl],
    // <>
    [ol, sl],
    // （）
    [ll, cl],
    // 「」
    [ul, dl],
    // 『』
    [fl, pl]
    // ＜＞
  ];
  for (let me = 0; me < se.length; me++) {
    const [ee, J] = se[me], F = ne(T, ee);
    ne(re, ee, F);
    const U = mi(ws);
    Ue(F, t, U);
    const W = mi();
    Ue(F, i, W), ne(F, J, T), Ue(U, t, U), Ue(U, i, W), Ue(W, t, U), Ue(W, i, W), ne(U, J, T), ne(W, J, T);
  }
  return ne(a, Oo, D), ne(a, dd, NC), {
    start: a,
    tokens: fg
  };
}
function RC(e, t, i) {
  let n = i.length, a = 0, r = [], o = [];
  for (; a < n; ) {
    let c = e, u = null, h = null, f = 0, y = null, C = -1;
    for (; a < n && !(u = c.go(i[a].t)); )
      o.push(i[a++]);
    for (; a < n && (h = u || c.go(i[a].t)); )
      u = null, c = h, c.accepts() ? (C = 0, y = c) : C >= 0 && C++, a++, f++;
    if (C < 0)
      a -= f, a < n && (o.push(i[a]), a++);
    else {
      o.length > 0 && (r.push(Qc(Bp, t, o)), o = []), a -= C, f -= C;
      const E = y.t, L = i.slice(a - f, a);
      r.push(Qc(E, t, L));
    }
  }
  return o.length > 0 && r.push(Qc(Bp, t, o)), r;
}
function Qc(e, t, i) {
  const n = i[0].s, a = i[i.length - 1].e, r = t.slice(n, a);
  return new e(r, i);
}
const Ht = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function IC() {
  Ht.scanner = AC(Ht.customSchemes);
  for (let e = 0; e < Ht.tokenQueue.length; e++)
    Ht.tokenQueue[e][1]({
      scanner: Ht.scanner
    });
  Ht.parser = LC(Ht.scanner.tokens);
  for (let e = 0; e < Ht.pluginQueue.length; e++)
    Ht.pluginQueue[e][1]({
      scanner: Ht.scanner,
      parser: Ht.parser
    });
  return Ht.initialized = !0, Ht;
}
function vg(e) {
  return Ht.initialized || IC(), RC(Ht.parser.start, e, pg(Ht.scanner.start, e));
}
vg.scan = pg;
function PC(e) {
  const t = new gd({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, DC), i = vg(e), n = [];
  for (const a of i)
    a.t === "nl" && t.get("nl2br") ? n.push(`<br>
`) : !a.isLink || !t.check(a) ? n.push(Bs(a.toString())) : n.push(t.render(a));
  return n.join("");
}
function $C(e) {
  return e.replace(/"/g, "&quot;");
}
function FC(e) {
  const t = [];
  for (const i in e) {
    const n = e[i] + "";
    t.push(`${i}="${$C(n)}"`);
  }
  return t.join(" ");
}
function DC({ tagName: e, attributes: t, content: i }) {
  return `<${e} ${FC(t)}>${Bs(i)}</${e}>`;
}
const MC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = PC(t.text));
}, zC = ["title"], UC = /* @__PURE__ */ It({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Kt("NcAppSidebar:header:ref");
    return (i, n) => Re((m(), _("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      ye(v(e.name), 1)
    ], 8, zC)), [
      [g(MC), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), jC = ["aria-labelledby"], BC = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, HC = ["id"], VC = {
  key: 2,
  class: "empty-content__description"
}, KC = {
  key: 3,
  class: "empty-content__action"
}, GC = /* @__PURE__ */ It({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = Kl();
    return (i, n) => (m(), _("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      i.$slots.icon ? (m(), _("div", BC, [
        Me(i.$slots, "icon", {}, void 0, !0)
      ])) : $("", !0),
      e.name !== "" || i.$slots.name ? (m(), _("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Me(i.$slots, "name", {}, () => [
          ye(v(e.name), 1)
        ], !0)
      ], 8, HC)) : $("", !0),
      e.description !== "" || i.$slots.description ? (m(), _("p", VC, [
        Me(i.$slots, "description", {}, () => [
          ye(v(e.description), 1)
        ], !0)
      ])) : $("", !0),
      i.$slots.action ? (m(), _("div", KC, [
        Me(i.$slots, "action", {}, void 0, !0)
      ])) : $("", !0)
    ], 8, jC));
  }
}), qC = /* @__PURE__ */ Qe(GC, [["__scopeId", "data-v-8609a4c1"]]), WC = {
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
}, YC = ["aria-hidden", "aria-label"], XC = ["fill", "width", "height"], ZC = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, JC = { key: 0 };
function QC(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", ZC, [
        i.title ? (m(), _("title", JC, v(i.title), 1)) : $("", !0)
      ])
    ], 8, XC))
  ], 16, YC);
}
const eT = /* @__PURE__ */ Qe(WC, [["render", QC]]), tT = {
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
}, iT = ["aria-hidden", "aria-label"], nT = ["fill", "width", "height"], aT = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, rT = { key: 0 };
function oT(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", aT, [
        i.title ? (m(), _("title", rT, v(i.title), 1)) : $("", !0)
      ])
    ], 8, nT))
  ], 16, iT);
}
const sT = /* @__PURE__ */ Qe(tT, [["render", oT]]), lT = {
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
}, cT = ["aria-hidden", "aria-label"], uT = ["fill", "width", "height"], dT = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, fT = { key: 0 };
function pT(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", dT, [
        i.title ? (m(), _("title", fT, v(i.title), 1)) : $("", !0)
      ])
    ], 8, uT))
  ], 16, cT);
}
const hT = /* @__PURE__ */ Qe(lT, [["render", pT]]), vT = ["aria-selected", "tabindex"], gT = /* @__PURE__ */ It({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Pm({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Dh(e, "selected"), i = /* @__PURE__ */ ke(!1);
    function n() {
      t.value = !0, i.value = !1, requestAnimationFrame(() => {
        i.value = !0;
      });
    }
    return (a, r) => (m(), _("button", {
      class: ge(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(ea),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: n
    }, [
      l("span", {
        class: ge([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: i.value }]),
        onAnimationend: r[0] || (r[0] = (o) => i.value = !1)
      }, [
        l("span", {
          class: ge([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          Ae(ku, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: $e(() => [
              l("span", {
                class: ge([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        l("span", {
          class: ge([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          Ae(ku, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: $e(() => [
              l("span", {
                class: ge([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      l("span", {
        class: ge(a.$style.sidebarTabsButton__name)
      }, v(e.tab.name), 3)
    ], 10, vT));
  }
}), bT = "_sidebarTabsButton_q3kBA", mT = "_sidebarTabsButton_legacy_KQ4d1", yT = "_sidebarTabsButton_selected_Pjayf", _T = "_sidebarTabsButton_animatedHighlight_uvp-0", wT = "_sidebarTabsButton__name_rlQsL", ST = "_sidebarTabsButton__icon_QzZg4", CT = "_sidebarTabsButton__iconLayer_ZkZan", TT = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", kT = "_sidebarTabsButton__icon_pop_IA0By", ET = "_sidebarTabsButton__legacyIcon_QhcNW", AT = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: bT,
  sidebarTabsButton_legacy: mT,
  sidebarTabsButton_selected: yT,
  sidebarTabsButton_animatedHighlight: _T,
  sidebarTabsButton__name: wT,
  sidebarTabsButton__icon: ST,
  sidebarTabsButton__iconLayer: CT,
  sidebarTabsButton__iconLayer_hidden: TT,
  sidebarTabsButton__icon_pop: kT,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: ET
}, OT = {
  $style: AT
}, xT = /* @__PURE__ */ Qe(gT, [["__cssModules", OT]]), NT = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: xT
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
      isLegacy34: ea,
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
}, LT = { class: "app-sidebar-tabs" };
function RT(e, t, i, n, a, r) {
  const o = Be("NcAppSidebarTabsButton");
  return m(), _("div", LT, [
    r.hasMultipleTabs || r.showForSingleTab ? (m(), _("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: ge(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = at(Ee((...c) => r.focusPreviousTab && r.focusPreviousTab(...c), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = at(Ee((...c) => r.focusNextTab && r.focusNextTab(...c), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = at(Ee((...c) => r.focusActiveTabContent && r.focusActiveTabContent(...c), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = at(Ee((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = at(Ee((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = at(Ee((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = at(Ee((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onPointerleave: t[8] || (t[8] = (...c) => r.hideHighlight && r.hideHighlight(...c)),
      onFocusin: t[9] || (t[9] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onFocusout: t[10] || (t[10] = (...c) => r.onHighlightFocusOut && r.onHighlightFocusOut(...c))
    }, [
      a.highlightEnabled ? (m(), _("div", {
        key: 0,
        class: ge(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: hi(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : $("", !0),
      (m(!0), _(ie, null, Ce(a.tabs, (c) => (m(), je(o, {
        id: `tab-button-${c.id}`,
        key: c.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${c.id}`,
        selected: a.activeTab === c.id,
        animatedHighlight: a.highlightEnabled,
        tab: c,
        "onUpdate:selected": (u) => r.setActive(c.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : $("", !0),
    l("div", {
      class: ge(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Me(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const IT = /* @__PURE__ */ Qe(NT, [["render", RT], ["__scopeId", "data-v-74190d2a"]]);
Qn(b1);
const PT = {
  name: "NcAppSidebar",
  components: {
    NcActions: cd,
    NcAppSidebarHeader: UC,
    NcAppSidebarTabs: IT,
    NcButton: Yi,
    NcLoadingIcon: og,
    NcEmptyContent: qC,
    IconArrowRight: Mv,
    IconClose: zv,
    IconDockRight: eT,
    IconStar: sT,
    IconStarOutline: hT
  },
  directives: {
    Focus: mC,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: bC
  },
  inject: {
    ncContentSelector: {
      from: Dv,
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
    const e = /* @__PURE__ */ ke(null);
    return _i("NcAppSidebar:header:ref", e), {
      uid: Kl(),
      isMobile: d1(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: Ct("Change name"),
      closeTranslated: Ct("Close sidebar"),
      favoriteTranslated: Ct("Favorite"),
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
    isSlotPopulated: ld,
    t: Ct,
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
      this.focusTrap || (this.focusTrap = td([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: Co(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && Ra.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, $T = ["aria-labelledby"], FT = { class: "app-sidebar-header__info" }, DT = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, MT = { class: "app-sidebar-header__name-container" }, zT = { class: "app-sidebar-header__mainname-container" }, UT = ["placeholder", "value"], jT = ["title"], BT = {
  key: 2,
  class: "app-sidebar-header__description"
};
function HT(e, t, i, n, a, r) {
  const o = Be("IconDockRight"), c = Be("NcButton"), u = Be("NcLoadingIcon"), h = Be("IconStar"), f = Be("IconStarOutline"), y = Be("NcAppSidebarHeader"), C = Be("IconArrowRight"), E = Be("NcActions"), L = Be("IconClose"), A = Be("NcAppSidebarTabs"), N = Be("NcEmptyContent"), D = lf("focus"), M = lf("click-outside");
  return m(), je(wy, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: $e(() => [
      Re(l("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${n.uid}__header`,
        onKeydown: t[6] || (t[6] = at((...z) => r.onKeydownEsc && r.onKeydownEsc(...z), ["esc"]))
      }, [
        r.ncContentSelector && !i.open && !i.noToggle ? (m(), je(wh, {
          key: 0,
          to: r.ncContentSelector
        }, [
          Ae(c, Yt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", i.toggleClasses],
            variant: "tertiary"
          }, i.toggleAttrs, {
            onClick: t[0] || (t[0] = (z) => e.$emit("update:open", !0))
          }), {
            icon: $e(() => [
              Me(e.$slots, "toggle-icon", {}, () => [
                Ae(o, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : $("", !0),
        l("header", {
          class: ge(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || i.background,
            "app-sidebar-header--compact": i.compact
          }])
        }, [
          i.empty ? (m(), je(y, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: i.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Me(e.$slots, "info", { key: 0 }, () => [
            l("div", FT, [
              r.isSlotPopulated(e.$slots.header?.()) || i.background ? (m(), _("div", {
                key: 0,
                class: ge(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: hi({
                  backgroundImage: `url(${i.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...z) => r.onFigureClick && r.onFigureClick(...z)),
                onKeydown: t[2] || (t[2] = at((...z) => r.onFigureClick && r.onFigureClick(...z), ["enter"]))
              }, [
                Me(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : $("", !0),
              l("div", {
                class: ge(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": i.nameEditable && !i.subname,
                  "app-sidebar-header__desc--with-subname--editable": i.nameEditable && i.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (m(), _("div", DT, [
                  Me(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (m(), je(c, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Ee(r.toggleStarred, ["prevent"])
                    }, {
                      icon: $e(() => [
                        i.starLoading ? (m(), je(u, { key: 0 })) : a.isStarred ? (m(), je(h, {
                          key: 1,
                          size: 20
                        })) : (m(), je(f, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : $("", !0)
                  ], !0)
                ])) : $("", !0),
                l("div", MT, [
                  l("div", zT, [
                    Re(Ae(y, {
                      class: "app-sidebar-header__mainname",
                      name: i.name,
                      linkify: i.linkifyName,
                      title: i.title,
                      tabindex: i.nameEditable ? 0 : -1,
                      onClick: Ee(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [nr, !i.nameEditable]
                    ]),
                    i.nameEditable ? Re((m(), _("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Ee((...z) => r.onSubmitName && r.onSubmitName(...z), ["prevent"]))
                    }, [
                      Re(l("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: i.namePlaceholder,
                        value: i.name,
                        onKeydown: t[3] || (t[3] = at(Ee((...z) => r.onDismissEditing && r.onDismissEditing(...z), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...z) => r.onNameInput && r.onNameInput(...z))
                      }, null, 40, UT), [
                        [D]
                      ]),
                      Ae(c, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: $e(() => [
                          Ae(C, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [M, () => r.onSubmitName()]
                    ]) : $("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (m(), je(E, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: i.forceMenu
                    }, {
                      default: $e(() => [
                        Me(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : $("", !0)
                  ]),
                  i.subname.trim() !== "" || e.$slots.subname ? (m(), _("p", {
                    key: 0,
                    title: i.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Me(e.$slots, "subname", {}, () => [
                      ye(v(i.subname), 1)
                    ], !0)
                  ], 8, jT)) : $("", !0)
                ])
              ], 2)
            ])
          ], !0),
          Ae(c, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Ee(r.closeSidebar, ["prevent"])
          }, {
            icon: $e(() => [
              Ae(L, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !i.empty ? (m(), _("div", BT, [
            Me(e.$slots, "description", {}, void 0, !0)
          ])) : $("", !0)
        ], 2),
        Re(Ae(A, {
          ref: "tabs",
          active: i.active,
          forceTabs: i.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: $e(() => [
            Me(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [nr, !i.loading]
        ]),
        i.loading ? (m(), je(N, { key: 1 }, {
          icon: $e(() => [
            Ae(u, { size: 64 })
          ]),
          _: 1
        })) : $("", !0)
      ], 40, $T), [
        [nr, i.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const VT = /* @__PURE__ */ Qe(PT, [["render", HT], ["__scopeId", "data-v-c2c6820b"]]), KT = {
  name: "NcActionLink",
  mixins: [jv],
  inject: {
    isInSemanticMenu: {
      from: id,
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
}, GT = ["role"], qT = ["download", "href", "aria-label", "target", "title", "role"], WT = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, YT = { class: "action-link__name" }, XT = ["textContent"], ZT = ["textContent"], JT = {
  key: 2,
  class: "action-link__text"
};
function QT(e, t, i, n, a, r) {
  return m(), _("li", {
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
      onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
    }, [
      Me(e.$slots, "icon", {}, () => [
        l("span", {
          "aria-hidden": "true",
          class: ge(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: hi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (m(), _("span", WT, [
        l("strong", YT, v(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: v(e.text)
        }, null, 8, XT)
      ])) : e.isLongText ? (m(), _("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: v(e.text)
      }, null, 8, ZT)) : (m(), _("span", JT, v(e.text), 1)),
      $("", !0)
    ], 8, qT)
  ], 8, GT);
}
const eu = /* @__PURE__ */ Qe(KT, [["render", QT], ["__scopeId", "data-v-32f01b7a"]]);
Qn(S1);
const ek = `<!--
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
`, tk = `<!--
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
`, ik = { class: "vue-skip-actions__container" }, nk = { class: "vue-skip-actions__headline" }, ak = { class: "vue-skip-actions__buttons" }, rk = /* @__PURE__ */ It({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    _i(Fv, c), _i(Dv, "#content-vue"), _i("appName", B(() => t.appName));
    const i = $o(), n = /* @__PURE__ */ ke(!1), a = /* @__PURE__ */ ke(), r = B(() => a.value === "navigation" ? tk : ek);
    xh(() => {
      const u = document.getElementById("skip-actions");
      u && (u.innerHTML = "", u.classList.add("vue-skip-actions"));
    });
    function o() {
      mn("toggle-navigation", { open: !0 }), ti(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function c(u) {
      n.value = u, a.value || (a.value = "navigation");
    }
    return (u, h) => (m(), _("div", {
      id: "content-vue",
      class: ge(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(ea) }]])
    }, [
      (m(), je(wh, { to: "#skip-actions" }, [
        l("div", ik, [
          l("div", nk, v(g(Ct)("Keyboard navigation help")), 1),
          l("div", ak, [
            Re(Ae(Yi, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Ee(o, ["prevent"]),
              onFocusin: h[0] || (h[0] = (f) => a.value = "navigation"),
              onMouseover: h[1] || (h[1] = (f) => a.value = "navigation")
            }, {
              default: $e(() => [
                ye(v(g(Ct)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [nr, n.value]
            ]),
            Ae(Yi, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: h[2] || (h[2] = (f) => a.value = "content"),
              onMouseover: h[3] || (h[3] = (f) => a.value = "content")
            }, {
              default: $e(() => [
                ye(v(g(Ct)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Re(Ae(Vl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [nr, !g(i)]
          ])
        ])
      ])),
      Me(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ok = /* @__PURE__ */ Qe(rk, [["__scopeId", "data-v-d13dcb98"]]), sk = { class: "library-shelf-tree-node" }, lk = ["aria-expanded", "aria-label"], ck = ["href"], uk = { class: "library-shelf-summary-title" }, dk = { dir: "auto" }, fk = { class: "library-muted" }, pk = { dir: "auto" }, hk = {
  key: 1,
  role: "status",
  class: "library-muted"
}, vk = {
  key: 2,
  role: "status",
  class: "library-muted"
}, gk = {
  key: 3,
  class: "library-shelf-tree"
}, bk = ["disabled"], mk = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ ke(!1), n = /* @__PURE__ */ ke(!1), a = /* @__PURE__ */ ke(!1), r = /* @__PURE__ */ ke(!1), o = /* @__PURE__ */ ke([]), c = /* @__PURE__ */ ke(!1), u = /* @__PURE__ */ ke(0);
    async function h() {
      i.value = !i.value, !(!i.value || n.value || a.value) && await f();
    }
    async function f() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const y = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(u.value) }), C = await fetch(`${t.childrenUrl}?${y}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!C.ok) throw new Error("Shelf children request failed");
          const E = await C.json(), L = Array.isArray(E?.nodes) ? E.nodes : [];
          o.value.push(...L), c.value = E?.hasMore === !0, u.value = Number.isInteger(E?.nextOffset) ? E.nextOffset : o.value.length, n.value = !c.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (y, C) => {
      const E = Be("ShelfTreeNode", !0);
      return m(), _("li", sk, [
        e.node.hasChildren ? (m(), _("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(i.value),
          "aria-label": i.value ? g(b)("library", "Collapse {folder}", { folder: e.node.label }) : g(b)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: h
        }, v(i.value ? "−" : "+"), 9, lk)) : $("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", uk, [
            l("strong", null, [
              l("bdi", dk, v(e.node.label), 1)
            ]),
            l("span", null, v(g(ui)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", fk, [
            l("bdi", pk, v(e.node.path), 1)
          ])
        ], 8, ck),
        a.value ? (m(), _("small", hk, v(g(b)("library", "Loading folders…")), 1)) : r.value ? (m(), _("small", vk, v(g(b)("library", "Could not load folders.")), 1)) : $("", !0),
        i.value && o.value.length ? (m(), _("ul", gk, [
          (m(!0), _(ie, null, Ce(o.value, (L) => (m(), je(E, {
            key: L.id,
            node: L,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : $("", !0),
        i.value && c.value ? (m(), _("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: f
        }, v(g(b)("library", "Load more folders")), 9, bk)) : $("", !0)
      ]);
    };
  }
}, yk = ["aria-label", "title", "onClick"], _k = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, wk = { id: "library-sidebar-filters-heading" }, Sk = ["aria-label"], Ck = ["value"], Tk = ["name", "value"], kk = ["value"], Ek = ["value"], Ak = {
  class: "library-filter-group",
  "data-library-filter-group": "content"
}, Ok = ["title"], xk = ["placeholder"], Nk = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "q"
}, Lk = { value: "" }, Rk = ["value"], Ik = { class: "library-publisher-filter" }, Pk = { for: "library-publisher-search" }, $k = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], Fk = ["value"], Dk = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, Mk = {
  key: 1,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, zk = ["id", "aria-selected"], Uk = ["onClick"], jk = { class: "library-publication-filter" }, Bk = { for: "library-publication-search" }, Hk = ["placeholder", "aria-expanded"], Vk = ["value"], Kk = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, Gk = {
  key: 1,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, qk = ["onClick"], Wk = { class: "library-year-filter" }, Yk = { for: "library-year-search" }, Xk = ["placeholder", "aria-expanded"], Zk = ["value"], Jk = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, Qk = {
  key: 1,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, eE = ["onClick"], tE = { class: "library-creator-filter" }, iE = { for: "library-creator-search" }, nE = ["placeholder", "title", "aria-expanded"], aE = ["value"], rE = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, oE = {
  key: 1,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, sE = ["onClick"], lE = { class: "library-tag-filter" }, cE = { for: "library-tag-search" }, uE = ["placeholder", "aria-expanded"], dE = ["value"], fE = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, pE = ["onClick"], hE = { value: "" }, vE = ["value"], gE = {
  class: "library-filter-group",
  "data-library-filter-group": "location"
}, bE = { value: "" }, mE = ["value"], yE = { class: "library-folder-filter" }, _E = { for: "library-folder-search" }, wE = ["placeholder", "title", "aria-expanded"], SE = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, CE = ["onClick"], TE = {
  class: "library-filter-group",
  "data-library-filter-group": "review"
}, kE = { value: "" }, EE = ["value"], AE = { value: "" }, OE = ["value"], xE = { class: "library-subject-filter" }, NE = { for: "library-subject-search" }, LE = ["placeholder", "title", "aria-expanded"], RE = ["value"], IE = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, PE = {
  key: 1,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, $E = ["onClick"], FE = { class: "library-classification-filter" }, DE = { for: "library-classification-search" }, ME = ["placeholder", "title", "aria-expanded"], zE = ["value"], UE = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, jE = ["onClick"], BE = { value: "" }, HE = { value: "1" }, VE = {
  class: "library-filter-group",
  "data-library-filter-group": "personal"
}, KE = {
  type: "submit",
  class: "button primary"
}, GE = ["href"], qE = ["lang", "dir"], WE = ["aria-label"], YE = ["href", "aria-label", "title", "onClick"], XE = ["title"], ZE = ["href"], JE = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, QE = { class: "library-review-header" }, eA = { class: "library-muted library-catalogue-eyebrow" }, tA = { id: "library-review-heading" }, iA = ["aria-label"], nA = ["href", "aria-current", "onClick"], aA = ["aria-label"], rA = ["name", "value"], oA = {
  type: "submit",
  class: "button secondary"
}, sA = ["aria-busy"], lA = { key: 0 }, cA = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, uA = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, dA = { class: "library-metadata-review-workbench-copy" }, fA = { class: "library-muted library-catalogue-eyebrow" }, pA = ["title"], hA = {
  key: 0,
  class: "library-metadata-review-card"
}, vA = {
  class: "library-bidi-human",
  dir: "auto"
}, gA = { class: "library-muted" }, bA = {
  class: "library-bidi-machine",
  dir: "ltr"
}, mA = { class: "library-metadata-review-fields" }, yA = {
  class: "library-bidi-human",
  dir: "auto"
}, _A = {
  class: "library-bidi-human",
  dir: "auto"
}, wA = {
  class: "library-bidi-human",
  dir: "auto"
}, SA = {
  class: "library-bidi-machine",
  dir: "ltr"
}, CA = {
  class: "library-bidi-human",
  dir: "auto"
}, TA = {
  class: "library-bidi-human",
  dir: "auto"
}, kA = ["action"], EA = ["value"], AA = ["value"], OA = {
  type: "submit",
  class: "button secondary"
}, xA = { class: "library-metadata-review-actions" }, NA = ["href"], LA = ["href"], RA = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, IA = ["href"], PA = ["aria-label"], $A = ["onClick"], FA = {
  class: "library-bidi-human",
  dir: "auto"
}, DA = {
  key: 0,
  class: "library-muted"
}, MA = {
  class: "library-bidi-human",
  dir: "auto"
}, zA = {
  key: 1,
  class: "library-scan-error"
}, UA = {
  class: "library-bidi-human",
  dir: "auto"
}, jA = ["onClick"], BA = ["href", "onClick"], HA = ["aria-label"], VA = ["href"], KA = {
  key: 1,
  class: "library-muted"
}, GA = { key: 0 }, qA = ["href"], WA = {
  key: 3,
  class: "library-muted"
}, YA = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, XA = { class: "library-home-header" }, ZA = { class: "library-muted library-catalogue-eyebrow" }, JA = { id: "library-home-heading" }, QA = ["aria-label"], e2 = ["aria-label"], t2 = ["href", "aria-label", "onClick"], i2 = ["title"], n2 = { class: "library-empty-actions" }, a2 = ["href"], r2 = ["href"], o2 = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, s2 = { id: "library-continue-heading" }, l2 = { class: "library-muted" }, c2 = ["href"], u2 = {
  key: 0,
  class: "library-home-card-row"
}, d2 = ["aria-label", "onClick"], f2 = { class: "library-cover-frame" }, p2 = ["src"], h2 = { class: "library-cover-summary" }, v2 = ["onClick"], g2 = { dir: "auto" }, b2 = {
  key: 0,
  class: "library-cover-creator"
}, m2 = { dir: "auto" }, y2 = ["href", "onClick"], _2 = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, w2 = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, S2 = { id: "library-recent-heading" }, C2 = { class: "library-muted" }, T2 = ["href"], k2 = {
  key: 0,
  class: "library-home-card-row"
}, E2 = ["aria-label", "onClick"], A2 = { class: "library-cover-frame" }, O2 = ["src"], x2 = { class: "library-cover-summary" }, N2 = ["onClick"], L2 = { dir: "auto" }, R2 = {
  key: 0,
  class: "library-cover-creator"
}, I2 = { dir: "auto" }, P2 = ["href", "onClick"], $2 = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, F2 = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, D2 = { id: "library-home-shelves-heading" }, M2 = { class: "library-muted" }, z2 = ["href"], U2 = ["aria-label"], j2 = ["href"], B2 = { dir: "auto" }, H2 = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, V2 = {
  key: 1,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, K2 = { id: "library-home-attention-heading" }, G2 = { class: "library-muted" }, q2 = ["href"], W2 = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, Y2 = { class: "library-home-header" }, X2 = { class: "library-muted library-catalogue-eyebrow" }, Z2 = { id: "library-shelves-landing-heading" }, J2 = { class: "library-muted" }, Q2 = ["aria-label"], eO = ["aria-label"], tO = ["href", "aria-label", "onClick"], iO = ["title"], nO = { class: "library-empty-actions" }, aO = ["href"], rO = ["href"], oO = ["aria-label"], sO = { class: "library-shelf-tree" }, lO = {
  key: 2,
  class: "library-shelves-empty",
  role: "status"
}, cO = { class: "library-muted" }, uO = { class: "library-empty-actions" }, dO = ["href"], fO = ["href"], pO = ["aria-busy"], hO = { class: "library-catalogue-header" }, vO = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, gO = ["aria-label"], bO = { class: "library-mobile-filter-count" }, mO = ["aria-label"], yO = ["value"], _O = ["name", "value"], wO = { class: "library-mobile-filter-group" }, SO = { class: "library-quick-filter-search" }, CO = ["placeholder"], TO = { value: "" }, kO = ["value"], EO = { class: "library-publisher-filter" }, AO = { for: "library-mobile-publisher-search" }, OO = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], xO = ["value"], NO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, LO = {
  key: 1,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, RO = ["id", "aria-selected"], IO = ["onClick"], PO = { class: "library-publication-filter" }, $O = { for: "library-mobile-publication-search" }, FO = ["placeholder", "aria-expanded"], DO = ["value"], MO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, zO = {
  key: 1,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, UO = ["onClick"], jO = { class: "library-year-filter" }, BO = { for: "library-mobile-year-search" }, HO = ["placeholder", "aria-expanded"], VO = ["value"], KO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, GO = {
  key: 1,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, qO = ["onClick"], WO = { class: "library-creator-filter" }, YO = { for: "library-mobile-creator-search" }, XO = ["placeholder", "title", "aria-expanded"], ZO = ["value"], JO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, QO = {
  key: 1,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, ex = ["onClick"], tx = { value: "" }, ix = ["value"], nx = { class: "library-subject-filter" }, ax = { for: "library-mobile-subject-search" }, rx = ["placeholder", "title", "aria-expanded"], ox = ["value"], sx = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, lx = {
  key: 1,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, cx = ["onClick"], ux = { class: "library-classification-filter" }, dx = { for: "library-mobile-classification-search" }, fx = ["placeholder", "title", "aria-expanded"], px = ["value"], hx = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, vx = ["onClick"], gx = { class: "library-mobile-filter-group" }, bx = { value: "" }, mx = ["value"], yx = { class: "library-folder-filter" }, _x = { for: "library-mobile-folder-search" }, wx = ["placeholder", "title", "aria-expanded"], Sx = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, Cx = ["onClick"], Tx = { class: "library-mobile-filter-group" }, kx = { value: "" }, Ex = ["value"], Ax = { value: "" }, Ox = ["value"], xx = { value: "" }, Nx = { value: "1" }, Lx = { class: "library-mobile-filter-group" }, Rx = { class: "library-tag-filter" }, Ix = { for: "library-tag-search" }, Px = ["placeholder", "aria-expanded"], $x = ["value"], Fx = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, Dx = ["onClick"], Mx = { value: "title" }, zx = { value: "recent" }, Ux = { value: "publicationDate" }, jx = { value: "publication" }, Bx = { value: "lastOpened" }, Hx = { value: "format" }, Vx = { value: "compact" }, Kx = { value: "gallery" }, Gx = { value: "list" }, qx = { value: "shelf" }, Wx = { class: "library-mobile-filter-actions" }, Yx = ["href"], Xx = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, Zx = ["aria-label"], Jx = ["aria-label"], Qx = ["name", "value"], e3 = { "data-library-control": "sort" }, t3 = { value: "title" }, i3 = { value: "recent" }, n3 = { value: "publicationDate" }, a3 = { value: "publication" }, r3 = { value: "lastOpened" }, o3 = { value: "format" }, s3 = ["aria-label"], l3 = ["aria-pressed"], c3 = ["aria-pressed"], u3 = ["aria-pressed"], d3 = ["aria-pressed"], f3 = {
  id: "library-collections",
  class: "library-saved-collections"
}, p3 = ["title"], h3 = ["action", "title"], v3 = ["value"], g3 = ["value"], b3 = ["placeholder", "disabled"], m3 = ["disabled", "title"], y3 = ["aria-label"], _3 = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, w3 = ["title"], S3 = { class: "library-workspace-panel-purpose" }, C3 = { class: "library-workspace-scope-badge" }, T3 = { "aria-live": "polite" }, k3 = ["action"], E3 = ["value"], A3 = ["placeholder"], O3 = ["title"], x3 = ["action"], N3 = ["value"], L3 = ["placeholder"], R3 = ["title"], I3 = ["action"], P3 = ["value"], $3 = ["name", "value"], F3 = ["title"], D3 = ["action"], M3 = ["value"], z3 = ["name", "value"], U3 = { name: "bulkEditField" }, j3 = { value: "publicationType" }, B3 = { value: "subtitle" }, H3 = { value: "creators" }, V3 = { value: "publication" }, K3 = { value: "publicationDate" }, G3 = { value: "language" }, q3 = { value: "publisher" }, W3 = { value: "subjects" }, Y3 = { value: "classifications" }, X3 = ["placeholder"], Z3 = ["title"], J3 = ["action"], Q3 = ["value"], eN = ["name", "value"], tN = ["title"], iN = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, nN = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, aN = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, rN = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, oN = { key: 0 }, sN = { key: 1 }, lN = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, cN = { class: "library-muted library-catalogue-eyebrow" }, uN = ["title"], dN = ["aria-label"], fN = { key: 0 }, pN = { key: 1 }, hN = { key: 2 }, vN = ["aria-label"], gN = { key: 0 }, bN = { key: 1 }, mN = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, yN = { class: "library-muted library-catalogue-eyebrow" }, _N = ["title"], wN = ["aria-label"], SN = ["href"], CN = {
  key: 0,
  class: "library-notice"
}, TN = { class: "library-publication-issue-label" }, kN = ["href"], EN = { class: "library-muted" }, AN = {
  key: 1,
  class: "library-publication-unknown-issues"
}, ON = ["title"], xN = ["href"], NN = { class: "library-catalogue-status-row" }, LN = { class: "library-muted library-filter-result-summary" }, RN = ["aria-label"], IN = { class: "library-pagination-range" }, PN = { key: 0 }, $N = ["href"], FN = {
  key: 1,
  class: "library-muted"
}, DN = ["href"], MN = {
  key: 3,
  class: "library-muted"
}, zN = ["title"], UN = { class: "library-empty-actions" }, jN = ["href"], BN = { class: "library-muted" }, HN = ["title"], VN = { class: "library-empty-actions" }, KN = ["href"], GN = ["title"], qN = ["aria-label"], WN = ["href", "aria-label", "onClick"], YN = ["title"], XN = {
  key: 1,
  class: "library-muted"
}, ZN = { class: "library-empty-actions" }, JN = ["href"], QN = ["title"], eL = { class: "library-empty-actions" }, tL = ["href"], iL = {
  key: 5,
  class: "library-select-visible"
}, nL = ["checked"], aL = {
  key: 6,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, rL = { class: "library-item-selection" }, oL = ["checked", "aria-label", "onChange"], sL = { class: "library-catalogue-list-main" }, lL = ["onClick"], cL = {
  class: "library-bidi-human",
  dir: "auto"
}, uL = {
  key: 0,
  class: "library-muted"
}, dL = {
  class: "library-bidi-human",
  dir: "auto"
}, fL = { class: "library-catalogue-list-metadata" }, pL = { key: 0 }, hL = {
  class: "library-bidi-human",
  dir: "auto"
}, vL = { key: 1 }, gL = { key: 2 }, bL = ["dir"], mL = { key: 3 }, yL = {
  class: "library-bidi-human",
  dir: "auto"
}, _L = { class: "library-catalogue-list-actions" }, wL = ["href", "onClick"], SL = ["onClick"], CL = { class: "library-item-selection" }, TL = ["checked", "aria-label", "onChange"], kL = ["aria-labelledby", "aria-expanded", "onClick"], EL = ["id"], AL = { class: "library-cover-frame" }, OL = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, xL = ["src", "onLoad", "onError"], NL = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, LL = ["action", "onSubmit"], RL = ["value"], IL = ["value"], PL = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], $L = ["data-library-star-error"], FL = { class: "library-cover-summary" }, DL = { class: "library-cover-primary" }, ML = ["id"], zL = ["onClick"], UL = {
  class: "library-bidi-human",
  dir: "auto"
}, jL = {
  key: 0,
  class: "library-cover-creator"
}, BL = {
  class: "library-bidi-human",
  dir: "auto"
}, HL = {
  key: 1,
  class: "library-cover-context"
}, VL = {
  class: "library-bidi-human",
  dir: "auto"
}, KL = ["aria-label"], GL = { class: "library-pagination-range" }, qL = { key: 0 }, WL = ["href"], YL = {
  key: 1,
  class: "library-muted"
}, XL = ["href"], ZL = {
  key: 3,
  class: "library-muted"
}, JL = { class: "library-sidebar-content" }, QL = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, eR = ["role"], tR = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, iR = { class: "library-sidebar-publication-header" }, nR = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, aR = ["src"], rR = { class: "library-sidebar-publication-summary" }, oR = { class: "library-muted library-catalogue-eyebrow" }, sR = {
  class: "library-bidi-human",
  dir: "auto"
}, lR = { key: 0 }, cR = {
  class: "library-bidi-machine",
  dir: "ltr"
}, uR = { class: "library-detail-drawer-actions" }, dR = ["href"], fR = ["aria-label"], pR = ["aria-current", "onClick"], hR = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, vR = { id: "library-sidebar-overview-heading" }, gR = {
  key: 0,
  class: "library-sidebar-description"
}, bR = {
  class: "library-bidi-human",
  dir: "auto"
}, mR = { class: "library-detail-drawer-facts" }, yR = { key: 0 }, _R = ["href", "title"], wR = {
  class: "library-bidi-human",
  dir: "auto"
}, SR = { key: 1 }, CR = ["href", "title"], TR = { key: 1 }, kR = { key: 2 }, ER = { key: 2 }, AR = ["href", "title"], OR = {
  class: "library-bidi-human",
  dir: "auto"
}, xR = { key: 3 }, NR = { class: "library-detail-facet-list" }, LR = ["href", "title", "onClick"], RR = {
  class: "library-bidi-machine",
  dir: "ltr"
}, IR = { key: 4 }, PR = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, $R = { id: "library-sidebar-metadata-heading" }, FR = ["placeholder"], DR = ["onUpdate:modelValue", "aria-label", "placeholder"], MR = ["onUpdate:modelValue", "aria-label"], zR = ["onClick"], UR = { class: "library-muted" }, jR = {
  key: 0,
  role: "alert"
}, BR = {
  key: 1,
  role: "status"
}, HR = ["disabled"], VR = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, KR = { id: "library-sidebar-suggestions-heading" }, GR = { class: "library-muted" }, qR = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, WR = { id: "library-sidebar-activity-heading" }, YR = { class: "library-detail-drawer-facts" }, XR = { key: 0 }, ZR = { key: 1 }, JR = { key: 2 }, QR = { class: "library-detail-drawer-file" }, e4 = ["href"], t4 = { dir: "ltr" }, i4 = {
  key: 1,
  dir: "ltr"
}, n4 = ["aria-label"], a4 = ["disabled"], r4 = ["disabled"], o4 = 20, s4 = "/apps/library", l4 = 2147483647, c4 = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, i = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = Object.freeze([
      { key: "scannerConflicts", value: "1", countKey: "scanner-conflicts", label: "Suggested updates" },
      { key: "needsMetadata", value: "1", countKey: "needs-metadata", label: "Needs details" },
      { key: "status", value: "metadata_error", countKey: "metadata-errors", label: "File problems" },
      { key: "coverReview", value: "placeholder", countKey: "placeholder-covers", label: "Cover problems" },
      { key: "unreviewedImports", value: "1", countKey: "unreviewed-imports", label: "Imported changes" }
    ]), a = Object.freeze({
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
    function r(p, d) {
      return Object.prototype.hasOwnProperty.call(a, p) && String(d ?? "").trim() === a[p];
    }
    function o(p) {
      const d = new URLSearchParams(p);
      for (const s of Object.keys(a)) {
        const x = [...new Set([...d.keys()].filter((Se) => Se === s || Se.startsWith(`${s}[`)))], X = x.reduce((Se, De) => Se + d.getAll(De).length, 0);
        if (X > 1 || x.some((Se) => Se !== s)) {
          for (const Se of x) d.delete(Se);
          continue;
        }
        s !== "status" && X === 1 && !r(s, d.get(s)) && d.delete(s);
      }
      return d;
    }
    function c(p) {
      return Object.keys(a).some((d) => p.getAll(d).length === 1 && r(d, p.get(d)));
    }
    function u(p) {
      return Object.fromEntries(Object.entries(p || {}).filter(([d, s]) => d === "status" || !Object.prototype.hasOwnProperty.call(a, d) || r(d, s)));
    }
    const h = /* @__PURE__ */ xt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), f = /* @__PURE__ */ xt((h.items || []).map((p) => ({ ...p }))), y = B(() => f), C = B(() => h.shelves || []), E = B(() => h.formats || []), L = B(() => h.publicationTypes?.length ? h.publicationTypes : i), A = B(() => h.publications || []), N = B(() => h.publicationIssueContext || null), D = B(() => h.scanStatuses || []), M = B(() => h.workflowStatuses || []), z = B(() => h.cataloguePagination || {
      page: 1,
      limit: 100,
      total: y.value.length,
      visible: y.value.length,
      from: y.value.length > 0 ? 1 : 0,
      to: y.value.length,
      previousUrl: "",
      nextUrl: ""
    }), T = /* @__PURE__ */ xt({
      q: h.activeFilters?.q || "",
      view: h.activeFilters?.view || "compact",
      type: h.activeFilters?.type || "",
      publisher: h.activeFilters?.publisher || "",
      publication: h.activeFilters?.publication || "",
      year: h.activeFilters?.year || "",
      language: h.activeFilters?.language || "",
      creator: h.activeFilters?.creator || "",
      format: h.activeFilters?.format || "",
      tag: h.activeFilters?.tag || "",
      shelf: h.activeFilters?.shelf || "",
      folder: h.activeFilters?.folder || "",
      status: h.activeFilters?.status || "",
      workflowStatus: h.activeFilters?.workflowStatus || "",
      subject: h.activeFilters?.subject || "",
      classification: h.activeFilters?.classification || "",
      scannerConflicts: h.activeFilters?.scannerConflicts || "",
      starred: h.activeFilters?.starred || "",
      recentlyOpened: h.activeFilters?.recentlyOpened || "",
      needsMetadata: h.activeFilters?.needsMetadata || "",
      coverReview: h.activeFilters?.coverReview || "",
      noCreator: h.activeFilters?.noCreator || "",
      noPublication: h.activeFilters?.noPublication || "",
      noDate: h.activeFilters?.noDate || "",
      titleFromFilename: h.activeFilters?.titleFromFilename || "",
      noDescription: h.activeFilters?.noDescription || "",
      unsupportedContainer: h.activeFilters?.unsupportedContainer || "",
      weakMetadata: h.activeFilters?.weakMetadata || "",
      unreviewedImports: h.activeFilters?.unreviewedImports || "",
      sort: h.activeFilters?.sort || "title"
    });
    for (const p of Object.keys(a))
      p !== "status" && (r(p, T[p]) || (T[p] = ""));
    const re = /* @__PURE__ */ ke(T.publication), ue = /* @__PURE__ */ ke(T.q), Z = /* @__PURE__ */ ke(!1), pe = /* @__PURE__ */ ke(null), Y = B(() => {
      const p = re.value.trim().toLocaleLowerCase();
      return (p !== "" && pe.value !== null ? pe.value : A.value).filter((s) => p === "" || s.toLocaleLowerCase().includes(p)).slice(0, o4);
    });
    We(() => T.publication, (p) => {
      re.value = p || "";
    }), We(() => T.q, (p) => {
      ue.value = p || "";
    });
    let se = null, me = null, ee = 0;
    We(re, (p) => {
      window.clearTimeout(se), me?.abort(), me = null, pe.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++ee;
      se = window.setTimeout(() => {
        Kg(d, s);
      }, 200);
    });
    const J = /* @__PURE__ */ ke(T.publisher), F = /* @__PURE__ */ ke(!1), U = /* @__PURE__ */ ke(null), W = B(() => U.value || []);
    We(() => T.publisher, (p) => {
      J.value = p || "";
    });
    let le = null, ae = null, be = 0;
    We(J, (p) => {
      window.clearTimeout(le), ae?.abort(), ae = null, U.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++be;
      le = window.setTimeout(() => {
        zg(d, s);
      }, 200);
    });
    const fe = /* @__PURE__ */ ke(T.creator), _e = /* @__PURE__ */ ke(!1), Te = /* @__PURE__ */ ke(null), Ke = B(() => Te.value || []);
    We(() => T.creator, (p) => {
      fe.value = p || "";
    });
    let Le = null, ut = null, vt = 0;
    We(fe, (p) => {
      window.clearTimeout(Le), ut?.abort(), ut = null, Te.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++vt;
      Le = window.setTimeout(() => {
        Mg(d, s);
      }, 200);
    });
    const nt = /* @__PURE__ */ ke(T.folder), dt = /* @__PURE__ */ ke(!1), rt = /* @__PURE__ */ ke(null), Pt = B(() => rt.value || []);
    We(() => T.folder, (p) => {
      nt.value = p || "";
    });
    let H = null, w = null, k = 0;
    We(nt, (p) => {
      window.clearTimeout(H), w?.abort(), w = null, rt.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++k;
      H = window.setTimeout(() => {
        Hg(d, s);
      }, 200);
    });
    const O = /* @__PURE__ */ ke(T.subject), R = /* @__PURE__ */ ke(!1), I = /* @__PURE__ */ ke(null), j = B(() => I.value || []);
    We(() => T.subject, (p) => {
      O.value = p || "";
    });
    let G = null, K = null, Q = 0;
    We(O, (p) => {
      window.clearTimeout(G), K?.abort(), K = null, I.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++Q;
      G = window.setTimeout(() => {
        Ug(d, s);
      }, 200);
    });
    const V = /* @__PURE__ */ ke(T.classification), he = /* @__PURE__ */ ke(!1), oe = /* @__PURE__ */ ke(null), ve = B(() => oe.value || []);
    We(() => T.classification, (p) => {
      V.value = p || "";
    });
    let xe = null, Ie = null, ze = 0;
    We(V, (p) => {
      window.clearTimeout(xe), Ie?.abort(), Ie = null, oe.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++ze;
      xe = window.setTimeout(() => {
        jg(d, s);
      }, 200);
    });
    const Pe = /* @__PURE__ */ ke(T.tag), He = /* @__PURE__ */ ke(!1), ot = /* @__PURE__ */ ke(null), gt = B(() => ot.value || []);
    We(() => T.tag, (p) => {
      Pe.value = p || "";
    });
    let kt = null, $t = null, Ei = 0;
    We(Pe, (p) => {
      window.clearTimeout(kt), $t?.abort(), $t = null, ot.value = null;
      const d = String(p || "").trim();
      if (d.length < 2) return;
      const s = ++Ei;
      kt = window.setTimeout(() => {
        Bg(d, s);
      }, 200);
    });
    const et = /* @__PURE__ */ ke(T.year), ft = /* @__PURE__ */ ke(!1), Fi = /* @__PURE__ */ ke(null), vi = B(() => Fi.value || []);
    We(() => T.year, (p) => {
      et.value = p || "";
    });
    let ta = null, kn = null, Di = 0;
    We(et, (p) => {
      window.clearTimeout(ta), kn?.abort(), kn = null, Fi.value = null;
      const d = String(p || "").trim();
      if (d.length < 2) return;
      const s = ++Di;
      ta = window.setTimeout(() => {
        Vg(d, s);
      }, 200);
    });
    const Ji = Object.fromEntries(Object.keys(T).map((p) => [p, p === "sort" ? "title" : p === "view" ? "compact" : ""])), cr = window.location.pathname.indexOf(s4), Qi = cr >= 0 ? window.location.pathname.slice(0, cr) : "", En = {
      catalogue: `${Qi}/apps/library/`,
      review: `${Qi}/apps/library/?scannerConflicts=1`,
      settings: `${Qi}/settings/user/library`
    };
    function An(p, d) {
      if (typeof p != "string" || p === "") return d;
      try {
        const s = Qi ? `${Qi}/` : "/";
        let x = p;
        for (let X = 0; X < 5; X += 1) {
          if (!x.startsWith("/") || x.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(x)) return d;
          const Se = new URL(x, window.location.origin);
          if (Se.origin !== window.location.origin || !Se.pathname.startsWith(s)) return d;
          const De = x.split(/[?#]/, 1)[0];
          for (const li of De.split("/")) {
            let Fn = li;
            for (let Ka = 0; Ka < 5; Ka += 1) {
              const Bi = decodeURIComponent(Fn);
              if (/[\\/\u0000-\u001f\u007f]/.test(Bi) || Bi === "." || Bi === "..") return d;
              if (Bi === Fn) break;
              if (Fn = Bi, Ka === 4) return d;
            }
          }
          const Xe = decodeURI(x);
          if (Xe === x) return p;
          x = Xe;
        }
        return d;
      } catch {
        return d;
      }
    }
    const On = B(() => An(h.settingsUrl, En.settings)), mt = B(() => An(h.catalogueRootUrl, En.catalogue)), Da = B(() => An(h.homeUrl, `${En.catalogue}?home=1`)), ri = B(() => An(h.shelvesUrl, `${En.catalogue}?shelves=1`)), xn = B(() => An(h.reviewUrl || h.scannerConflictReviewUrl, En.review)), ia = B(() => Object.entries(a).some(([p, d]) => T[p] === d)), Ma = B(() => n.reduce((p, d) => p + Number(pc.value[d.countKey] || 0), 0)), na = B(() => h.surface === "home"), Nn = B(() => h.surface === "shelves"), ur = B(() => !na.value && !Nn.value && !ia.value && !T.starred && T.recentlyOpened !== "1" && !T.shelf), Fo = B(() => [
      { key: "home", name: b("library", "Home"), href: Da.value, active: na.value },
      { key: "all", name: b("library", "All publications"), href: mt.value, active: ur.value },
      { key: "starred", name: b("library", "Starred"), href: `${mt.value}?starred=1`, active: T.starred === "1" },
      { key: "continue", name: b("library", "Continue reading"), href: `${mt.value}?recentlyOpened=1&sort=lastOpened`, active: T.recentlyOpened === "1" },
      { key: "shelves", name: b("library", "Shelves"), href: ri.value, active: Nn.value || !!T.shelf },
      { key: "collections", name: b("library", "Collections"), href: `${mt.value}#library-collections`, active: !1 }
    ]), dr = B(() => ic.value.map((p) => ({
      key: `collection-${p.id}`,
      rawName: p.name,
      id: p.id,
      name: p.countPending ? p.name : `${p.name} (${ui("library", "%n item", "%n items", Number(p.count || 0))})`,
      href: ob(p.filters),
      active: sb(p.filters)
    }))), Ft = B(() => h.requestToken || "");
    function gi(p, d) {
      const s = String(p?.recordOpenUrl || "");
      if (!s || !Ft.value) return;
      const x = new URLSearchParams({ requesttoken: Ft.value });
      try {
        if (navigator.sendBeacon) {
          const X = new Blob([x.toString()], { type: "application/x-www-form-urlencoded" });
          navigator.sendBeacon(s, X);
          return;
        }
      } catch {
      }
      fetch(s, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", requesttoken: Ft.value },
        body: x,
        credentials: "same-origin",
        keepalive: !0
      }).catch(() => {
      });
    }
    const Do = B(() => h.catalogueEndpointUrl || "/apps/library/catalogue"), Xl = B(() => h.shelfChildrenUrl || "/apps/library/shelves/children"), ht = B(() => h.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), Ln = B(() => h.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), Zl = B(() => h.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), Mo = B(() => h.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), fr = B(() => h.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), zo = B(() => h.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), Uo = B(() => h.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), Jl = B(() => h.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Ql = B(() => h.itemSidebarUrlTemplate || `${Qi}/apps/library/items/__ITEM_ID__/sidebar`), ec = B(() => h.batchTagUrl || "/apps/library/bulk/tags"), tc = B(() => h.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Mi = B(() => h.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), jo = B(() => h.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), za = B(() => h.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), zi = B(() => h.scannerConflictReviewUrl || "?scannerConflicts=1");
    h.importHealthSummary, h.importHealthSummary && Object.keys(h.importHealthSummary).length > 0;
    const pr = B(() => h.discoveryPage === "publication"), Rn = B(() => h.discoveryPage === "year"), Ua = B(() => h.discoveryPage === "creator"), hr = B(() => pr.value || Rn.value || Ua.value), vr = B(() => h.discoveryTitle || T.publication || T.year || T.creator || ""), Bo = B(() => hr.value ? vr.value : b("library", "Library")), aa = B(() => Ua.value ? b("library", "Creator") : Rn.value ? b("library", "Publication year") : b("library", "Publication / series")), ja = B(() => Number(h.rootCount || 0)), Ba = B(() => Number(h.enabledRootCount || 0)), Ui = B(() => ja.value === 0), en = B(() => ja.value > 0 && Ba.value === 0), oi = B(() => ce.value.length > 0), Ai = /* @__PURE__ */ ke(!1), ra = /* @__PURE__ */ ke(null), Ho = /* @__PURE__ */ ke(null), gr = {
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
    }, Vo = {
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
    }, Ko = {
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
        gallery: "Gallery",
        list: "List",
        shelf: "Shelf"
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
    }, br = B(() => {
      if (typeof window > "u") return "";
      const p = new URLSearchParams(window.location.search);
      if (p.get("batchMetadataApplyResult") !== "1") return "";
      const d = p.get("batchMetadataField") || "field", s = p.get("batchMetadataApplied") || "0", x = p.get("batchMetadataUnchanged") || "0", X = p.get("batchMetadataSkipped") || "0";
      return b("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: s, field: d, unchanged: x, skipped: X });
    }), Go = B(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? b("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), mr = B(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? b("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), ic = B(() => h.savedCollections || []), nc = B(() => h.savedCollectionSaveUrl || "/apps/library/collections"), qo = B(() => h.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), oa = ["compact", "gallery", "list", "shelf"], Dt = B(() => oa.includes(T.view) ? T.view : "compact"), te = B(() => ({
      "library-cover-gallery--compact": Dt.value === "compact",
      "library-cover-gallery--gallery": Dt.value === "gallery",
      "library-cover-gallery--shelf": Dt.value === "shelf"
    }));
    function S(p) {
      const d = String(p || "").trim();
      if (d.length <= 32) return d;
      const s = d.split("/").filter(Boolean);
      return s.length > 0 ? `…/${s.at(-1)}` : d;
    }
    function P(p, d) {
      const s = String(d || "").trim();
      if (s === "" || Vo[p] === s) return "";
      if (p === "format") return s.toUpperCase();
      if (p === "folder") return S(s);
      const x = Ko[p]?.[s];
      return x ? b("library", x) : s;
    }
    function q(p, d) {
      const s = String(T[p] || "").trim(), x = P(p, s), X = b("library", d);
      return {
        key: p,
        label: X,
        value: s,
        displayValue: x,
        title: x ? `${X}: ${s}` : X
      };
    }
    const ce = B(() => Object.entries(gr).map(([p, d]) => q(p, d)).filter((p) => p.value !== "" && !(p.key === "sort" && p.value === "title") && !(p.key === "view" && p.value === "compact"))), de = B(() => ce.value.filter((p) => !["sort", "view"].includes(p.key))), Ne = B(() => ce.value.length), tt = B(() => {
      const p = new URLSearchParams();
      for (const s of de.value) p.set(s.key, s.value);
      const d = p.toString();
      return `${mt.value}${d ? `?${d}` : ""}`;
    }), it = B(() => de.value[0] || null), Mt = B(() => ue.value.trim() !== String(T.q || "").trim()), zt = B(() => String(T.q || "").trim() !== "" || Mt.value);
    function Et(p) {
      return ({
        q: ue,
        publisher: J,
        publication: re,
        creator: fe,
        subject: O,
        year: et,
        folder: nt,
        classification: V,
        tag: Pe
      }[p]?.value ?? "").trim() !== String(T[p] || "").trim();
    }
    function st(p) {
      return Et(p) ? p === "q" ? b("library", "Not applied yet — press Enter or Apply.") : b("library", "Press Enter or Apply to use this value.") : "";
    }
    function tn(p) {
      return { "library-filter-apply--pending": Et(p) };
    }
    const gg = B(() => Ne.value > 0 ? b("library", "Filters ({count})", { count: Ne.value }) : b("library", "Filters")), bg = B(() => Ne.value > 0 ? b("library", "Open filters panel; {count} active filters", { count: Ne.value }) : b("library", "Open filters panel")), mg = B(() => ui("library", "Show %n item", "Show %n items", Number(z.value.total || 0)));
    function yg(p) {
      Ai.value = p.currentTarget?.open === !0, Ai.value && ti(() => {
        ra.value?.focus?.();
      });
    }
    const _g = /* @__PURE__ */ new Set([
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
    ]), bd = B(() => Object.entries(u(T)).filter(([p, d]) => !_g.has(p) && String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), wg = B(() => Object.entries(T).filter(([p, d]) => !["q", "sort", "starred"].includes(p) && String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), Wo = B(() => Object.entries(u(T)).filter(([p, d]) => String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), Sg = B(() => Wo.value.filter(({ key: p, value: d }) => p !== "q" && !(p === "sort" && d === "title"))), ac = /* @__PURE__ */ xt({}), Yo = B(() => h.homeRows || { continueReading: [], recentlyAdded: [] }), md = B(() => h.homeShelves || []), yd = B(() => h.shelfTree || []), rc = B(() => h.needsAttention || { count: 0, url: `${mt.value}?needsMetadata=1` }), Oi = /* @__PURE__ */ ke([]), Xo = B(() => new Set(Oi.value));
    function _d(p, d) {
      const s = new Set(Oi.value);
      d ? s.add(Number(p)) : s.delete(Number(p)), Oi.value = [...s];
    }
    function Cg(p) {
      Oi.value = p.currentTarget.checked ? y.value.map((d) => Number(d.id)) : [];
    }
    function Tg() {
      const p = new Set(y.value.map((d) => Number(d.id)));
      Oi.value = Oi.value.filter((d) => p.has(d));
    }
    function kg(p) {
      const d = p.target;
      if (d instanceof HTMLFormElement) {
        d.querySelectorAll("input[data-library-selected-id]").forEach((s) => s.remove());
        for (const s of Oi.value) {
          const x = document.createElement("input");
          x.type = "hidden", x.name = "itemIds[]", x.value = String(s), x.dataset.librarySelectedId = "1", d.appendChild(x);
        }
      }
    }
    const we = /* @__PURE__ */ ke(null), sa = /* @__PURE__ */ ke(null), Xt = /* @__PURE__ */ xt({ loading: !1, error: "", missing: !1 }), la = /* @__PURE__ */ ke("overview"), xi = /* @__PURE__ */ xt({ saving: !1, saved: !1, error: "" }), Ut = /* @__PURE__ */ xt({ title: "", publicationDate: "", identifiers: [] }), wd = /* @__PURE__ */ ke(null), ca = /* @__PURE__ */ ke(null), ua = /* @__PURE__ */ ke(!1);
    let oc = null, nn = null, Zo = null, sc = !1, yr = null, lc = 0;
    const In = B(() => sa.value !== null), _r = B(() => we.value ? y.value.findIndex((p) => p.id === we.value.id) : -1), Jo = B(() => _r.value > 0 ? y.value[_r.value - 1] : null), Qo = B(() => _r.value >= 0 && _r.value < y.value.length - 1 ? y.value[_r.value + 1] : null), Sd = B(() => Lg(we.value?.description || "")), da = B(() => Og(we.value?.publicationDate || "")), Cd = B(() => xg(we.value?.language || "")), Eg = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Ag = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function wr(p) {
      const d = String(p ?? "").trim(), s = d.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return s ? s[1] : d;
    }
    function Og(p) {
      const s = wr(p).match(/^(\d{4})/u);
      return s ? s[1] : "";
    }
    function xg(p) {
      return String(p ?? "").split(/[;,\n]+/u).map((d) => d.trim()).filter(Boolean);
    }
    function Td(p, d) {
      const s = new URLSearchParams();
      for (const [x, X] of Object.entries(T)) {
        const Se = String(X || "").trim();
        Se !== "" && !(x === "sort" && Se === "title") && !(x === "view" && Se === "compact") && s.set(x, Se);
      }
      return s.set(p, String(d || "").trim()), s.delete("page"), o(s);
    }
    function es(p, d) {
      const x = Td(p, d).toString();
      return `${mt.value}${x ? `?${x}` : ""}`;
    }
    function ts(p, d, s) {
      const x = String(s || "").trim();
      if (x === "") return;
      p?.preventDefault?.();
      const X = Td(d, x);
      Cr({ historyMode: "none" }), jt(null, {
        params: X,
        generation: ++Zt,
        historyMode: "push"
      });
    }
    function Ng(p) {
      return String(p ?? "").replace(/&#x([0-9a-f]+);/giu, (d, s) => String.fromCodePoint(Number.parseInt(s, 16))).replace(/&#(\d+);/gu, (d, s) => String.fromCodePoint(Number.parseInt(s, 10))).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#039;", "'").replaceAll("&apos;", "'").replaceAll("&nbsp;", " ").replaceAll("&amp;", "&");
    }
    function Lg(p) {
      let d = String(p ?? "").trim();
      if (d === "") return "";
      for (let s = 0; s < 2; s += 1) {
        const x = Ng(d);
        if (x === d) break;
        d = x;
      }
      return d = d.replace(/<\s*(script|style)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/giu, "").replace(/<\s*(br|hr)\b[^>]*\/?>/giu, `
`).replace(/<\s*\/\s*(p|div|section|article|blockquote|li|tr|h[1-6])\s*>/giu, `

`).replace(/<\s*(p|div|section|article|blockquote|ul|ol|li|table|tbody|thead|tr|td|th|h[1-6])\b[^>]*>/giu, "").replace(/<[^>]+>/gu, "").replace(/\u00a0/gu, " ").replace(/[^\S\r\n]+/gu, " ").replace(/[ \t]*\n[ \t]*/gu, `
`).replace(/\n{3,}/gu, `

`).trim(), d;
    }
    function kd(p) {
      return { ...p, publicationDate: wr(p?.publicationDate) };
    }
    function Ed(p) {
      Ut.title = String(p?.title || ""), Ut.publicationDate = wr(p?.publicationDate), Ut.identifiers = Array.isArray(p?.identifiers) ? p.identifiers.map((d) => ({ scheme: String(d?.scheme || ""), displayValue: String(d?.displayValue || d?.value || "") })) : [], Object.assign(xi, { saving: !1, saved: !1, error: "" });
    }
    function Rg() {
      Ut.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Ig(p) {
      Ut.identifiers.splice(p, 1);
    }
    async function Pg() {
      const p = we.value;
      if (!p?.updateUrl || xi.saving) return;
      Object.assign(xi, { saving: !0, saved: !1, error: "" });
      const d = new FormData();
      d.set("requesttoken", Ft.value), d.set("metadataAutosave", "1");
      for (const s of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const x = p[s];
        d.set(s, Array.isArray(x) ? x.join(", ") : String(x ?? ""));
      }
      d.set("title", Ut.title), d.set("publicationDate", wr(Ut.publicationDate)), Ut.identifiers.forEach((s, x) => {
        d.set(`identifiers[${x}][scheme]`, s.scheme), d.set(`identifiers[${x}][displayValue]`, s.displayValue);
      });
      try {
        const s = await fetch(p.updateUrl, { method: "POST", body: d, credentials: "same-origin", headers: { Accept: "application/json" } }), x = await s.json().catch(() => ({}));
        if (!s.ok || x.saved !== !0) throw new Error(x.error || b("library", "Metadata could not be saved."));
        p.title = Ut.title.trim(), p.publicationDate = wr(Ut.publicationDate), p.identifiers = Ut.identifiers.filter((Se) => Se.scheme.trim() || Se.displayValue.trim()).map((Se) => ({ ...Se }));
        const X = y.value.find((Se) => Number(Se.id) === Number(p.id));
        X && (X.title = p.title, X.publicationDate = p.publicationDate), xi.saved = !0;
      } catch (s) {
        xi.error = s?.message || b("library", "Metadata could not be saved.");
      } finally {
        xi.saving = !1;
      }
    }
    const Pn = B(() => {
      const p = r("scannerConflicts", T.scannerConflicts) || r("weakMetadata", T.weakMetadata), d = p ? y.value.find((s) => is(s).length > 0) : null;
      return {
        enabled: p,
        item: d,
        fields: d ? is(d) : [],
        reviewNextUrl: zi.value,
        skipUrl: z.value.nextUrl || zi.value
      };
    }), $g = B(() => n.map((p) => ({
      ...p,
      label: b("library", p.label),
      href: `${mt.value}?${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`,
      active: String(T[p.key] || "") === p.value
    })));
    function cc(p) {
      return Array.isArray(p) ? JSON.stringify(p) : p == null ? "" : String(p);
    }
    function is(p) {
      const d = p.fieldValues || {}, s = p.fieldSources || {};
      return Eg.filter((x) => Object.prototype.hasOwnProperty.call(d, x)).map((x) => {
        const X = cc(p[x]), Se = cc(d[x]), De = cc(s[x] || p.metadataSource || "scanner"), Xe = De.includes("filename") || De.includes("path") ? Se : "", li = De.includes("sidecar") ? Se : "";
        return { field: x, currentValue: X, scannerCandidate: Se, pathTemplateCandidate: Xe, sidecarValue: li, sourceProvenance: De, differs: X !== Se };
      }).filter((x) => x.differs);
    }
    let fa = 0, pa = null;
    function Ad() {
      const p = new URLSearchParams(window.location.search).getAll("item");
      if (p.length !== 1 || !/^[1-9][0-9]*$/.test(p[0])) return null;
      const d = Number(p[0]);
      return Number.isSafeInteger(d) && d <= l4 ? d : null;
    }
    function Od(p, d = "push") {
      const s = new URL(window.location.href);
      s.searchParams.delete("item"), p !== null && s.searchParams.set("item", String(p)), history[`${d}State`]({}, "", `${s.pathname}${s.search}${s.hash}`);
    }
    async function Sr(p, { historyMode: d = "push", seed: s = null } = {}) {
      pa?.abort();
      const x = ++fa, X = new AbortController();
      pa = X, sa.value = p, la.value = "overview", we.value = s && Number(s.id) === p ? kd(s) : null, we.value && Ed(we.value), Object.assign(Xt, { loading: !0, error: "", missing: !1 }), d !== "none" && Od(p, d);
      try {
        const Se = Ql.value.replace("__ITEM_ID__", encodeURIComponent(String(p))), De = await fetch(Se, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: X.signal });
        if (x !== fa) return;
        if (!De.ok) {
          we.value = null, Xt.missing = De.status === 404, Xt.error = De.status === 404 ? b("library", "This publication is unavailable or you do not have access.") : b("library", "Could not load publication details. Try again.");
          return;
        }
        const Xe = await De.json();
        if (x !== fa) return;
        if (typeof Xe?.item?.id != "number" || !Number.isSafeInteger(Xe.item.id) || Xe.item.id !== p) {
          we.value = null, Xt.missing = !1, Xt.error = b("library", "Could not load publication details. Try again.");
          return;
        }
        we.value = kd(Xe.item), Ed(we.value), await ti();
      } catch (Se) {
        x === fa && Se?.name !== "AbortError" && (we.value = null, Xt.missing = !1, Xt.error = b("library", "Could not load publication details. Try again."));
      } finally {
        x === fa && (Xt.loading = !1, pa = null);
      }
    }
    function ji(p, d) {
      uc(), oc = d?.currentTarget instanceof HTMLElement ? d.currentTarget : null, Sr(Number(p.id), { seed: p });
    }
    function Cr({ historyMode: p = "push", restoreFocus: d = !0 } = {}) {
      Zo = d ? oc : null, oc = null, pa?.abort(), pa = null, fa += 1, sa.value = null, we.value = null, la.value = "overview", Object.assign(Xt, { loading: !1, error: "", missing: !1 }), p !== "none" && Od(null, p);
    }
    function xd() {
      ua.value ? (ca.value?.$refs?.sidebar || ca.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : wd.value?.focus();
    }
    function Fg() {
      const p = Zo;
      if (Zo = null, uc(), sc || !p?.isConnected) return;
      const d = lc;
      yr = window.requestAnimationFrame(() => {
        yr = null, !(d !== lc || sc || In.value || !p.isConnected) && p.focus();
      });
    }
    function uc() {
      lc += 1, yr !== null && (window.cancelAnimationFrame(yr), yr = null);
    }
    function Tr(p = nn) {
      ua.value = !!p?.matches, In.value && ti(xd);
    }
    function ns(p) {
      p && Sr(Number(p.id), { seed: p });
    }
    const kr = /* @__PURE__ */ ke(null);
    let Zt = 0, Ha = null, Va = null, Er = null;
    const At = /* @__PURE__ */ xt({ loading: !1, error: "", completed: !1 });
    function Dg(p) {
      const d = o(new FormData(p));
      d.delete("publicationSearch"), d.delete("creatorSearch"), d.delete("subjectSearch"), d.delete("publisherSearch"), d.delete("classificationSearch"), d.delete("tagSearch"), d.delete("folderSearch"), d.delete("yearSearch");
      for (const s of Array.from(d.keys()))
        String(d.get(s) || "").trim() === "" && d.delete(s);
      return d.delete("page"), d.get("view") === "compact" && d.delete("view"), d.get("sort") === "title" && d.delete("sort"), d;
    }
    async function ha(p, d, s) {
      const x = new URLSearchParams();
      for (const [De, Xe] of Object.entries(T)) {
        const li = String(Xe || "").trim();
        De !== p && li !== "" && !(De === "sort" && li === "title") && !(De === "view" && li === "compact") && x.set(De, li);
      }
      x.set(`${p}Search`, d);
      const X = new AbortController();
      p === "creator" ? ut = X : p === "publisher" ? ae = X : p === "subject" ? K = X : p === "classification" ? Ie = X : p === "tag" ? $t = X : p === "folder" ? w = X : kn = X;
      const Se = p === "creator" ? Ln.value : p === "publisher" ? Zl.value : p === "subject" ? Mo.value : p === "classification" ? fr.value : p === "tag" ? zo.value : p === "folder" ? Uo.value : Jl.value;
      try {
        const De = await fetch(`${Se}?${x}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: X.signal });
        if (!De.ok) throw new Error(`${p} suggestions request failed: ${De.status}`);
        const Xe = await De.json(), li = p === "creator" ? vt : p === "publisher" ? be : p === "subject" ? Q : p === "classification" ? ze : p === "tag" ? Ei : p === "folder" ? k : Di, Fn = p === "creator" ? fe.value : p === "publisher" ? J.value : p === "subject" ? O.value : p === "classification" ? V.value : p === "tag" ? Pe.value : p === "folder" ? nt.value : et.value;
        s === li && Fn.trim() === d && (p === "creator" ? Te.value = Array.isArray(Xe.creators) ? Xe.creators : [] : p === "publisher" ? U.value = Array.isArray(Xe.publishers) ? Xe.publishers : [] : p === "subject" ? I.value = Array.isArray(Xe.subjects) ? Xe.subjects : [] : p === "classification" ? oe.value = Array.isArray(Xe.classifications) ? Xe.classifications : [] : p === "tag" ? ot.value = Array.isArray(Xe.tags) ? Xe.tags : [] : p === "folder" ? rt.value = Array.isArray(Xe.folders) ? Xe.folders : [] : Fi.value = Array.isArray(Xe.years) ? Xe.years : []);
      } catch (De) {
        De?.name !== "AbortError" && (p === "creator" && s === vt && (Te.value = null), p === "publisher" && s === be && (U.value = null), p === "subject" && s === Q && (I.value = null), p === "classification" && s === ze && (oe.value = null), p === "tag" && s === Ei && (ot.value = null), p === "folder" && s === k && (rt.value = null), p === "year" && s === Di && (Fi.value = null));
      }
    }
    function Mg(p, d) {
      return ha("creator", p, d);
    }
    function zg(p, d) {
      return ha("publisher", p, d);
    }
    function Ug(p, d) {
      return ha("subject", p, d);
    }
    function jg(p, d) {
      return ha("classification", p, d);
    }
    function Bg(p, d) {
      return ha("tag", p, d);
    }
    function Hg(p, d) {
      return ha("folder", p, d);
    }
    function Vg(p, d) {
      return ha("year", p, d);
    }
    async function Kg(p, d) {
      const s = new URLSearchParams();
      for (const [X, Se] of Object.entries(T)) {
        const De = String(Se || "").trim();
        X !== "publication" && De !== "" && !(X === "sort" && De === "title") && !(X === "view" && De === "compact") && s.set(X, De);
      }
      s.set("publicationSearch", p);
      const x = new AbortController();
      me = x;
      try {
        const X = await fetch(`${ht.value}?${s}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: x.signal
        });
        if (!X.ok) throw new Error(`Publication suggestions request failed: ${X.status}`);
        const Se = await X.json();
        d === ee && re.value.trim() === p && (pe.value = Array.isArray(Se.publications) ? Se.publications : []);
      } catch (X) {
        X?.name !== "AbortError" && d === ee && (pe.value = null);
      } finally {
        d === ee && (me = null);
      }
    }
    function Gg(p) {
      f.splice(0, f.length, ...(p.items || []).map((s) => ({ ...s }))), Tg();
      const d = new Set(p.facetsDeferred ? [
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
      for (const s of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "subjects", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "creatorSuggestionsUrl", "publisherSuggestionsUrl", "subjectSuggestionsUrl", "classificationSuggestionsUrl", "tagSuggestionsUrl", "folderSuggestionsUrl", "yearSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "smartViewCountsPending", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        !d.has(s) && Object.prototype.hasOwnProperty.call(p, s) && (h[s] = p[s]);
      Object.assign(T, Ji, p.activeFilters || {});
    }
    async function qg() {
      if (h.surface !== "index") return;
      const p = Zt, d = JSON.stringify({ ...T }), s = new URLSearchParams();
      s.set("hydrate", "1");
      for (const [X, Se] of Object.entries(T)) {
        const De = String(Se || "").trim();
        De !== "" && !(X === "sort" && De === "title") && !(X === "view" && De === "compact") && s.set(X, De);
      }
      const x = new AbortController();
      Va = x;
      try {
        const X = await fetch(`${Do.value}${s.size ? `?${s}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: x.signal
        });
        if (!X.ok) return;
        const Se = await X.json();
        if (p !== Zt || d !== JSON.stringify({ ...T })) return;
        for (const De of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(Se, De) && (h[De] = Se[De]);
      } catch (X) {
        if (X?.name !== "AbortError") return;
      } finally {
        Va === x && (Va = null);
      }
    }
    function Wg() {
      Va?.abort(), Va = null;
    }
    async function jt(p, d = null) {
      const s = p?.currentTarget?.tagName === "FORM" ? p.currentTarget : p?.currentTarget?.form;
      if (!s && !d?.params) return;
      const x = o(d?.params ?? Dg(s));
      if (na.value || Nn.value) {
        Ar(x, mt.value);
        return;
      }
      const X = x.toString(), Se = X ? `?${X}` : "", De = d?.generation ?? ++Zt, Xe = c(x), li = d?.historyMode ?? (Xe ? "push" : "replace"), Fn = d?.historyTraversal === !0;
      if (De !== Zt) return;
      Wg(), d === null && Ha?.abort();
      const Ka = new AbortController();
      Ha = Ka, At.loading = !0, At.error = "", At.completed = !1;
      try {
        const Bi = await fetch(Do.value + Se, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ka.signal
        });
        if (De !== Zt) return;
        if (!Bi.ok) {
          Fn ? Ar(x) : Xe ? At.error = b("library", "Could not load this review queue. Try again.") : Ar(x);
          return;
        }
        const vb = await Bi.json();
        if (De !== Zt) return;
        Gg(vb), At.completed = !0, li !== "none" && (history[li === "push" ? "pushState" : "replaceState"]({}, "", X ? `?${X}` : window.location.pathname), In.value && Cr({ historyMode: "none" }));
      } catch (Bi) {
        De === Zt && Bi?.name !== "AbortError" && (Fn ? Ar(x) : Xe ? At.error = b("library", "Could not load this review queue. Try again.") : Ar(x));
      } finally {
        De === Zt && (Ha = null, At.loading = !1);
      }
    }
    function Nd() {
      Ha?.abort();
      const p = new URLSearchParams(window.location.search), d = Ad();
      p.has("item") && d === null && (p.delete("item"), history.replaceState({}, "", `${window.location.pathname}${p.toString() ? `?${p}` : ""}${window.location.hash}`)), d === null ? Cr({ historyMode: "none" }) : Sr(d, { historyMode: "none", seed: y.value.find((s) => Number(s.id) === d) || null }), p.delete("item"), jt(null, {
        params: o(p),
        generation: ++Zt,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function Ar(p, d = window.location.pathname) {
      const s = document.createElement("form");
      s.method = "get", s.action = d, s.hidden = !0;
      for (const [x, X] of p.entries()) {
        const Se = document.createElement("input");
        Se.type = "hidden", Se.name = x, Se.value = X, s.appendChild(Se);
      }
      document.body.appendChild(s), s.submit(), s.remove();
    }
    function si(p, d = null, s = null) {
      if (d === null) {
        jt(p);
        return;
      }
      jt({ currentTarget: p }, { params: d, generation: s });
    }
    async function Yg(p, d = re.value) {
      T.publication = String(d || "").trim(), re.value = T.publication, Z.value = !1, await ti(), jt({ currentTarget: p });
    }
    function Ld(p, d) {
      Yg(d.currentTarget.form, p);
    }
    async function Xg(p) {
      T.q = String(ue.value || "").trim(), T.publication = String(re.value || "").trim(), T.publisher = String(J.value || "").trim(), T.creator = String(fe.value || "").trim(), T.subject = String(O.value || "").trim(), T.folder = String(nt.value || "").trim(), T.year = String(et.value || "").trim(), Z.value = !1, F.value = !1, _e.value = !1, R.value = !1, dt.value = !1, ft.value = !1, await ti(), jt({ currentTarget: p });
    }
    async function $n(p, d, s) {
      T[d] = String(s || "").trim(), d === "creator" ? (fe.value = T.creator, _e.value = !1) : d === "publisher" ? (J.value = T.publisher, F.value = !1) : d === "subject" ? (O.value = T.subject, R.value = !1) : d === "folder" ? (nt.value = T.folder, dt.value = !1) : d === "classification" ? (V.value = T.classification, he.value = !1) : d === "tag" ? (Pe.value = T.tag, He.value = !1) : (et.value = T.year, ft.value = !1), an[d] = -1, await ti(), jt({ currentTarget: p });
    }
    function Rd(p) {
      Xg(p.currentTarget);
    }
    function Id(p, d) {
      $n(d.currentTarget.form, "creator", p);
    }
    function Pd(p, d) {
      $n(d.currentTarget.form, "publisher", p);
    }
    function $d(p, d) {
      $n(d.currentTarget.form, "classification", p);
    }
    function Fd(p, d) {
      $n(d.currentTarget.form, "tag", p);
    }
    function Dd(p, d) {
      $n(d.currentTarget.form, "folder", p);
    }
    function Md(p, d = O.value) {
      window.clearTimeout(G), K?.abort(), K = null, $n(p, "subject", d);
    }
    function Zg(p) {
      Md(p.currentTarget.form);
    }
    function zd(p, d) {
      Md(d.currentTarget.form, p);
    }
    function Ud(p, d) {
      $n(d.currentTarget.form, "year", p);
    }
    const an = /* @__PURE__ */ xt({
      publisher: -1,
      publication: -1,
      year: -1,
      creator: -1,
      tag: -1,
      folder: -1,
      subject: -1,
      classification: -1
    });
    function Jg(p) {
      return W.value;
    }
    function dc(p, d, s) {
      return `library-${p}-${d}-suggestion-${s}`;
    }
    function jd(p, d) {
      const s = an[d];
      return s >= 0 ? dc(p, d, s) : void 0;
    }
    function fc(p, d) {
      F.value = d, d || (an[p] = -1);
    }
    function Bd(p) {
      an[p] = -1, fc(p, !0);
    }
    function Qg(p, d, s) {
      $n(s, p, d);
    }
    function Hd(p, d) {
      const s = Jg();
      if (p.key === "Escape") {
        fc(d, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(p.key) || s.length === 0) return;
      if (p.key === "Enter") {
        const Se = an[d];
        if (Se < 0) return;
        p.preventDefault(), Qg(d, s[Se], p.currentTarget.form);
        return;
      }
      p.preventDefault(), fc(d, !0);
      const x = an[d], X = p.key === "ArrowDown" ? 1 : -1;
      an[d] = x < 0 ? X > 0 ? 0 : s.length - 1 : (x + X + s.length) % s.length;
    }
    function Vd(p) {
      const d = new URLSearchParams();
      for (const [s, x] of Object.entries(T)) {
        const X = String(x || "").trim();
        X !== "" && s !== p && !(s === "sort" && X === "title") && !(s === "view" && X === "compact") && d.set(s, X);
      }
      return d;
    }
    function Or(p) {
      const d = Vd(p).toString();
      return `${mt.value}${d ? `?${d}` : ""}`;
    }
    function xr(p) {
      const d = Vd(p);
      T[p] = p === "sort" ? "title" : p === "view" ? "compact" : "", jt(null, {
        params: d,
        generation: ++Zt
      });
    }
    function Kd() {
      const p = new URLSearchParams();
      return T.sort && T.sort !== "title" && p.set("sort", T.sort), T.view && T.view !== "compact" && p.set("view", T.view), p;
    }
    function as() {
      const p = Kd().toString();
      return `${mt.value}${p ? `?${p}` : ""}`;
    }
    function rs() {
      const p = Kd();
      for (const d of Object.keys(T))
        ["sort", "view"].includes(d) || (T[d] = Ji[d]);
      jt(null, {
        params: p,
        generation: ++Zt
      }), !na.value && !Nn.value && ti(() => {
        Ho.value?.focus?.();
      });
    }
    function eb(p) {
      const d = new URL(p.href, window.location.origin).searchParams;
      jt(null, {
        params: d,
        generation: ++Zt
      });
    }
    function tb() {
      return Or("q");
    }
    const pc = B(() => h.smartViewCounts || {}), ib = B(() => new Set(h.smartViewCountsPending || []));
    function nb(p) {
      return ib.value.has(p) || !Object.prototype.hasOwnProperty.call(pc.value, p) ? "—" : Number(pc.value[p] || 0);
    }
    const Gd = B(() => {
      const p = {};
      for (const [d, s] of Object.entries(T)) {
        const x = String(s || "").trim();
        x !== "" && !(d === "sort" && x === "title") && (p[d] = x);
      }
      return p;
    }), ab = B(() => JSON.stringify(Gd.value)), hc = B(() => Object.keys(Gd.value).length > 0);
    function os(p) {
      if (!oa.includes(p)) return;
      T.view = p;
      const d = new URLSearchParams();
      for (const [s, x] of Object.entries(u(T))) {
        const X = String(x || "").trim();
        X !== "" && !(s === "sort" && X === "title") && !(s === "view" && X === "compact") && d.set(s, X);
      }
      d.delete("page"), jt(null, {
        params: d,
        generation: ++Zt
      });
    }
    function rb(p) {
      const d = o(window.location.search);
      for (const x of Object.keys(gr))
        d.delete(x);
      d.delete("page");
      for (const [x, X] of Object.entries(p))
        String(X || "").trim() !== "" && d.set(x, String(X));
      const s = d.toString();
      return s ? `?${s}` : "?";
    }
    function ob(p) {
      return rb(p || {});
    }
    function sb(p) {
      const s = Object.entries(p && typeof p == "object" ? p : {}).filter(([, x]) => String(x ?? "").trim() !== "");
      return s.length === 0 ? !1 : s.every(([x, X]) => String(T[x] ?? "") === String(X ?? ""));
    }
    function lb(p) {
      return qo.value.replace("__COLLECTION_ID__", encodeURIComponent(String(p || "0")));
    }
    function cb(p) {
      if (!Ft.value) return;
      const d = document.createElement("form");
      d.method = "post", d.action = lb(p), d.className = "library-navigation-saved-collection-delete-form";
      const s = document.createElement("input");
      s.type = "hidden", s.name = "requesttoken", s.value = Ft.value, d.appendChild(s), document.body.appendChild(d), d.submit();
    }
    function ss(p) {
      return String(p || "").toUpperCase();
    }
    function Nr(p) {
      return ac[p.id] || "loading";
    }
    function ub(p) {
      ac[p.id] = "loaded";
    }
    function db(p) {
      ac[p.id] = "error";
    }
    function qd(p) {
      const d = String(p?.publication || "").trim(), s = String(p?.publicationDate || "").trim();
      return d && s ? `${d} · ${s}` : d || s;
    }
    function Wd(p) {
      const d = String(p?.tagName || "").toLowerCase();
      return p?.isContentEditable || ["input", "select", "textarea", "button"].includes(d);
    }
    function fb(p) {
      p.key !== "/" || p.metaKey || p.ctrlKey || p.altKey || p.shiftKey || Wd(p.target) || (p.preventDefault(), kr.value?.focus(), kr.value?.select?.());
    }
    async function pb(p) {
      p.key !== "Escape" || document.activeElement !== kr.value || T.q === "" || (p.preventDefault(), ue.value = "", T.q = "", await ti(), si({ currentTarget: kr.value }));
    }
    function hb(p) {
      if (!In.value || p.metaKey || p.ctrlKey || p.altKey)
        return !1;
      if (p.key === "Escape")
        return p.preventDefault(), Cr(), !0;
      if (p.key === "Tab" && ua.value) {
        if (ca.value?.focusTrap) return !1;
        const d = ca.value?.$refs?.sidebar || ca.value?.$el || ca.value, s = [...d?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Se) => !Se.hidden && Se.getAttribute("aria-hidden") !== "true");
        if (s.length === 0) return !1;
        const x = s[0], X = s[s.length - 1];
        if (p.shiftKey && (document.activeElement === x || !d.contains(document.activeElement)))
          return p.preventDefault(), X.focus(), !0;
        if (!p.shiftKey && (document.activeElement === X || !d.contains(document.activeElement)))
          return p.preventDefault(), x.focus(), !0;
      }
      return Wd(p.target) ? !1 : p.key === "ArrowLeft" && Jo.value ? (p.preventDefault(), ns(Jo.value), !0) : p.key === "ArrowRight" && Qo.value ? (p.preventDefault(), ns(Qo.value), !0) : !1;
    }
    function Yd(p) {
      hb(p) || (fb(p), pb(p));
    }
    Jn(() => {
      window.addEventListener("keydown", Yd), window.addEventListener("popstate", Nd), nn = window.matchMedia?.("(max-width: 1023px)") || null, Tr(), nn?.addEventListener ? nn.addEventListener("change", Tr) : nn?.addListener?.(Tr);
      const p = new URLSearchParams(window.location.search), d = Ad();
      p.has("item") && d === null ? (p.delete("item"), history.replaceState({}, "", `${window.location.pathname}${p.toString() ? `?${p}` : ""}${window.location.hash}`)) : d !== null && Sr(d, { historyMode: "none", seed: y.value.find((s) => Number(s.id) === d) || null }), Er = window.requestAnimationFrame(() => {
        Er = null, qg();
      });
    }), lr(() => {
      sc = !0, uc(), window.removeEventListener("keydown", Yd), window.removeEventListener("popstate", Nd), window.clearTimeout(se), window.clearTimeout(Le), window.clearTimeout(G), window.clearTimeout(ta), me?.abort(), ut?.abort(), K?.abort(), kn?.abort(), Zt += 1, Er !== null && window.cancelAnimationFrame(Er), Er = null, Va?.abort(), Ha?.abort(), Ha = null, fa += 1, pa?.abort(), pa = null, nn?.removeEventListener ? nn.removeEventListener("change", Tr) : nn?.removeListener?.(Tr), nn = null, Zo = null;
    });
    const Lr = /* @__PURE__ */ xt({}), Rr = /* @__PURE__ */ xt({});
    async function Xd(p, d) {
      const s = d?.currentTarget?.closest?.("form") || d?.currentTarget;
      if (!s || !p?.starUrl || Lr[p.id]) return;
      const x = !!p.starred;
      Lr[p.id] = !0, Rr[p.id] = "", p.starred = !x;
      try {
        (await fetch(p.starUrl, {
          method: "POST",
          body: new FormData(s),
          credentials: "same-origin"
        })).ok || (p.starred = x, Rr[p.id] = b("library", "Could not update star. Try again."));
      } catch {
        p.starred = x, Rr[p.id] = b("library", "Could not update star. Try again.");
      } finally {
        Lr[p.id] = !1;
      }
    }
    return (p, d) => (m(), je(g(ok), { "app-name": "library" }, {
      default: $e(() => [
        Ae(g(j0), {
          "aria-label": g(b)("library", "Library navigation")
        }, {
          list: $e(() => [
            Ae(g($v), null, {
              default: $e(() => [
                (m(!0), _(ie, null, Ce(Fo.value, (s) => (m(), je(g(Gc), {
                  key: s.key,
                  active: s.active,
                  href: s.href,
                  name: s.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                (m(!0), _(ie, null, Ce(dr.value, (s) => (m(), _("div", {
                  key: s.key,
                  class: "library-navigation-saved-collection-row"
                }, [
                  Ae(g(Gc), {
                    class: "library-navigation-saved-collection",
                    active: s.active,
                    href: s.href,
                    name: s.name
                  }, null, 8, ["active", "href", "name"]),
                  l("button", {
                    type: "button",
                    class: "library-navigation-saved-collection-delete-action",
                    "aria-label": `${g(b)("library", "Delete collection")}: ${s.rawName}`,
                    title: `${g(b)("library", "Delete collection")}: ${s.rawName}`,
                    onClick: Ee((x) => cb(s.id), ["stop", "prevent"])
                  }, "×", 8, yk)
                ]))), 128)),
                Ae(g(Gc), {
                  active: ia.value,
                  href: xn.value,
                  name: Ma.value > 0 ? `${g(b)("library", "Review")} (${Ma.value})` : g(b)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: $e(() => [
            l("section", _k, [
              l("h2", wk, v(g(b)("library", "Filters")), 1),
              l("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": g(b)("library", "Catalogue search and filters"),
                onSubmit: Ee(Rd, ["prevent"])
              }, [
                l("input", {
                  type: "hidden",
                  name: "folder",
                  value: T.folder
                }, null, 8, Ck),
                (m(!0), _(ie, null, Ce(bd.value, (s) => (m(), _("input", {
                  key: `sidebar-${s.key}`,
                  type: "hidden",
                  name: s.key,
                  value: s.value
                }, null, 8, Tk))), 128)),
                T.sort && T.sort !== "title" ? (m(), _("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: T.sort
                }, null, 8, kk)) : $("", !0),
                T.view && T.view !== "compact" ? (m(), _("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: T.view
                }, null, 8, Ek)) : $("", !0),
                l("fieldset", Ak, [
                  l("legend", null, v(g(b)("library", "Content")), 1),
                  l("label", {
                    class: "library-quick-filter-search",
                    title: g(b)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                  }, [
                    l("span", null, [
                      ye(v(g(b)("library", "Search")) + " ", 1),
                      d[109] || (d[109] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                    ]),
                    Re(l("input", {
                      ref_key: "quickSearchInput",
                      ref: kr,
                      "onUpdate:modelValue": d[0] || (d[0] = (s) => ue.value = s),
                      "data-library-quick-search": "",
                      type: "search",
                      name: "q",
                      placeholder: g(b)("library", "Title, creator, description, filename or folder")
                    }, null, 8, xk), [
                      [pt, ue.value]
                    ]),
                    Et("q") ? (m(), _("small", Nk, v(st("q")), 1)) : $("", !0)
                  ], 8, Ok),
                  l("label", null, [
                    ye(v(g(b)("library", "Type")), 1),
                    Re(l("select", {
                      "onUpdate:modelValue": d[1] || (d[1] = (s) => T.type = s),
                      name: "type",
                      onChange: d[2] || (d[2] = (s) => si(s))
                    }, [
                      l("option", Lk, v(g(b)("library", "All types")), 1),
                      (m(!0), _(ie, null, Ce(L.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, v(s), 9, Rk))), 128))
                    ], 544), [
                      [Jt, T.type]
                    ])
                  ]),
                  l("div", Ik, [
                    l("label", Pk, v(g(b)("library", "Publisher")), 1),
                    Re(l("input", {
                      id: "library-publisher-search",
                      "onUpdate:modelValue": d[3] || (d[3] = (s) => J.value = s),
                      type: "search",
                      name: "publisherSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search publishers"),
                      title: g(b)("library", "Exact publisher matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publisher-suggestions",
                      "aria-activedescendant": jd("desktop", "publisher"),
                      "aria-expanded": F.value && W.value.length > 0 ? "true" : "false",
                      onFocus: d[4] || (d[4] = (s) => Bd("publisher")),
                      onKeydown: d[5] || (d[5] = (s) => Hd(s, "publisher"))
                    }, null, 40, $k), [
                      [pt, J.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publisher",
                      value: T.publisher
                    }, null, 8, Fk),
                    Et("publisher") ? (m(), _("small", Dk, v(st("publisher")), 1)) : $("", !0),
                    F.value && W.value.length > 0 ? (m(), _("ul", Mk, [
                      (m(!0), _(ie, null, Ce(W.value, (s, x) => (m(), _("li", {
                        id: dc("desktop", "publisher", x),
                        key: s,
                        role: "option",
                        "aria-selected": an.publisher === x ? "true" : "false"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publisher-suggestion",
                          onMousedown: d[6] || (d[6] = Ee(() => {
                          }, ["prevent"])),
                          onClick: (X) => Pd(s, X)
                        }, v(s), 41, Uk)
                      ], 8, zk))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: ge(["button secondary library-publisher-apply", tn("publisher")])
                    }, v(g(b)("library", "Apply publisher")), 3)
                  ]),
                  l("div", jk, [
                    l("label", Bk, v(g(b)("library", "Series / periodical")), 1),
                    Re(l("input", {
                      id: "library-publication-search",
                      "onUpdate:modelValue": d[7] || (d[7] = (s) => re.value = s),
                      type: "search",
                      name: "publicationSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search series and periodicals"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publication-suggestions",
                      "aria-expanded": Z.value && Y.value.length > 0 ? "true" : "false",
                      onFocus: d[8] || (d[8] = (s) => Z.value = !0),
                      onKeydown: d[9] || (d[9] = at((s) => Z.value = !1, ["escape"]))
                    }, null, 40, Hk), [
                      [pt, re.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publication",
                      value: T.publication
                    }, null, 8, Vk),
                    Et("publication") ? (m(), _("small", Kk, v(st("publication")), 1)) : $("", !0),
                    Z.value && Y.value.length > 0 ? (m(), _("ul", Gk, [
                      (m(!0), _(ie, null, Ce(Y.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publication-suggestion",
                          onMousedown: d[10] || (d[10] = Ee(() => {
                          }, ["prevent"])),
                          onClick: (x) => Ld(s, x)
                        }, v(s), 41, qk)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: ge(["button secondary library-publication-apply", tn("publication")])
                    }, v(g(b)("library", "Apply series")), 3)
                  ]),
                  l("div", Wk, [
                    l("label", Yk, v(g(b)("library", "Publication year")), 1),
                    Re(l("input", {
                      id: "library-year-search",
                      "onUpdate:modelValue": d[11] || (d[11] = (s) => et.value = s),
                      type: "search",
                      name: "yearSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search publication years"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-year-suggestions",
                      "aria-expanded": ft.value && vi.value.length > 0 ? "true" : "false",
                      onFocus: d[12] || (d[12] = (s) => ft.value = !0),
                      onKeydown: d[13] || (d[13] = at((s) => ft.value = !1, ["escape"]))
                    }, null, 40, Xk), [
                      [pt, et.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "year",
                      value: T.year
                    }, null, 8, Zk),
                    Et("year") ? (m(), _("small", Jk, v(st("year")), 1)) : $("", !0),
                    ft.value && vi.value.length > 0 ? (m(), _("ul", Qk, [
                      (m(!0), _(ie, null, Ce(vi.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-year-suggestion",
                          onMousedown: d[14] || (d[14] = Ee(() => {
                          }, ["prevent"])),
                          onClick: (x) => Ud(s, x)
                        }, v(s), 41, eE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: ge(["button secondary library-year-apply", tn("year")])
                    }, v(g(b)("library", "Apply year")), 3)
                  ]),
                  l("div", tE, [
                    l("label", iE, v(g(b)("library", "Creator")), 1),
                    Re(l("input", {
                      id: "library-creator-search",
                      "onUpdate:modelValue": d[15] || (d[15] = (s) => fe.value = s),
                      type: "search",
                      name: "creatorSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search creators"),
                      title: g(b)("library", "Exact full-field creator matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-creator-suggestions",
                      "aria-expanded": _e.value && Ke.value.length > 0 ? "true" : "false",
                      onFocus: d[16] || (d[16] = (s) => _e.value = !0),
                      onKeydown: d[17] || (d[17] = at((s) => _e.value = !1, ["escape"]))
                    }, null, 40, nE), [
                      [pt, fe.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "creator",
                      value: T.creator
                    }, null, 8, aE),
                    Et("creator") ? (m(), _("small", rE, v(st("creator")), 1)) : $("", !0),
                    _e.value && Ke.value.length > 0 ? (m(), _("ul", oE, [
                      (m(!0), _(ie, null, Ce(Ke.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-creator-suggestion",
                          onMousedown: d[18] || (d[18] = Ee(() => {
                          }, ["prevent"])),
                          onClick: (x) => Id(s, x)
                        }, v(s), 41, sE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: ge(["button secondary library-creator-apply", tn("creator")])
                    }, v(g(b)("library", "Apply creator")), 3)
                  ]),
                  l("div", lE, [
                    l("label", cE, v(g(b)("library", "Nextcloud tag")), 1),
                    Re(l("input", {
                      id: "library-tag-search",
                      "onUpdate:modelValue": d[19] || (d[19] = (s) => Pe.value = s),
                      type: "search",
                      name: "tagSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search tags"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-tag-suggestions",
                      "aria-expanded": He.value && gt.value.length > 0 ? "true" : "false",
                      onFocus: d[20] || (d[20] = (s) => He.value = !0),
                      onKeydown: d[21] || (d[21] = at((s) => He.value = !1, ["escape"]))
                    }, null, 40, uE), [
                      [pt, Pe.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "tag",
                      value: T.tag
                    }, null, 8, dE),
                    He.value && gt.value.length > 0 ? (m(), _("ul", fE, [
                      (m(!0), _(ie, null, Ce(gt.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-tag-suggestion",
                          onMousedown: d[22] || (d[22] = Ee(() => {
                          }, ["prevent"])),
                          onClick: (x) => Fd(s, x)
                        }, v(s), 41, pE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: ge(["button secondary library-tag-apply", tn("tag")])
                    }, v(g(b)("library", "Apply tag")), 3)
                  ]),
                  l("label", null, [
                    ye(v(g(b)("library", "Format")), 1),
                    Re(l("select", {
                      "onUpdate:modelValue": d[23] || (d[23] = (s) => T.format = s),
                      name: "format",
                      onChange: d[24] || (d[24] = (s) => si(s))
                    }, [
                      l("option", hE, v(g(b)("library", "All formats")), 1),
                      (m(!0), _(ie, null, Ce(E.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, v(ss(s)), 9, vE))), 128))
                    ], 544), [
                      [Jt, T.format]
                    ])
                  ])
                ]),
                l("fieldset", gE, [
                  l("legend", null, v(g(b)("library", "Location")), 1),
                  l("label", null, [
                    ye(v(g(b)("library", "Shelf")), 1),
                    Re(l("select", {
                      "onUpdate:modelValue": d[25] || (d[25] = (s) => T.shelf = s),
                      name: "shelf",
                      onChange: d[26] || (d[26] = (s) => si(s))
                    }, [
                      l("option", bE, v(g(b)("library", "All shelves")), 1),
                      (m(!0), _(ie, null, Ce(C.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, v(s), 9, mE))), 128))
                    ], 544), [
                      [Jt, T.shelf]
                    ])
                  ]),
                  l("div", yE, [
                    l("label", _E, v(g(b)("library", "Folder")), 1),
                    Re(l("input", {
                      id: "library-folder-search",
                      "onUpdate:modelValue": d[27] || (d[27] = (s) => nt.value = s),
                      type: "search",
                      name: "folderSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Type at least 3 path characters"),
                      title: g(b)("library", "Select an exact folder path"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-folder-suggestions",
                      "aria-expanded": dt.value && Pt.value.length > 0 ? "true" : "false",
                      onFocus: d[28] || (d[28] = (s) => dt.value = !0),
                      onKeydown: d[29] || (d[29] = at((s) => dt.value = !1, ["escape"]))
                    }, null, 40, wE), [
                      [pt, nt.value]
                    ]),
                    dt.value && Pt.value.length > 0 ? (m(), _("ul", SE, [
                      (m(!0), _(ie, null, Ce(Pt.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-folder-suggestion",
                          onMousedown: d[30] || (d[30] = Ee(() => {
                          }, ["prevent"])),
                          onClick: (x) => Dd(s, x)
                        }, v(s), 41, CE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: ge(["button secondary library-folder-apply", tn("folder")])
                    }, v(g(b)("library", "Apply folder")), 3)
                  ])
                ]),
                l("fieldset", TE, [
                  l("legend", null, v(g(b)("library", "Review")), 1),
                  l("label", null, [
                    ye(v(g(b)("library", "Scan status")), 1),
                    Re(l("select", {
                      "onUpdate:modelValue": d[31] || (d[31] = (s) => T.status = s),
                      name: "status",
                      onChange: d[32] || (d[32] = (s) => si(s))
                    }, [
                      l("option", kE, v(g(b)("library", "All scan statuses")), 1),
                      (m(!0), _(ie, null, Ce(D.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, v(s), 9, EE))), 128))
                    ], 544), [
                      [Jt, T.status]
                    ])
                  ]),
                  l("label", null, [
                    ye(v(g(b)("library", "Workflow status")), 1),
                    Re(l("select", {
                      "onUpdate:modelValue": d[33] || (d[33] = (s) => T.workflowStatus = s),
                      name: "workflowStatus",
                      onChange: d[34] || (d[34] = (s) => si(s))
                    }, [
                      l("option", AE, v(g(b)("library", "All workflow statuses")), 1),
                      (m(!0), _(ie, null, Ce(M.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, v(s), 9, OE))), 128))
                    ], 544), [
                      [Jt, T.workflowStatus]
                    ])
                  ]),
                  l("div", xE, [
                    l("label", NE, v(g(b)("library", "Subject")), 1),
                    Re(l("input", {
                      id: "library-subject-search",
                      "onUpdate:modelValue": d[35] || (d[35] = (s) => O.value = s),
                      type: "search",
                      name: "subjectSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search subjects"),
                      title: g(b)("library", "Exact subject matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-subject-suggestions",
                      "aria-expanded": R.value && j.value.length > 0 ? "true" : "false",
                      onFocus: d[36] || (d[36] = (s) => R.value = !0),
                      onKeydown: d[37] || (d[37] = at((s) => R.value = !1, ["escape"]))
                    }, null, 40, LE), [
                      [pt, O.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "subject",
                      value: T.subject
                    }, null, 8, RE),
                    Et("subject") ? (m(), _("small", IE, v(st("subject")), 1)) : $("", !0),
                    R.value && j.value.length > 0 ? (m(), _("ul", PE, [
                      (m(!0), _(ie, null, Ce(j.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-subject-suggestion",
                          onMousedown: d[38] || (d[38] = Ee(() => {
                          }, ["prevent"])),
                          onClick: (x) => zd(s, x)
                        }, v(s), 41, $E)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "button",
                      class: ge(["button secondary library-subject-apply", tn("subject")]),
                      onClick: Zg
                    }, v(g(b)("library", "Apply subject")), 3)
                  ]),
                  l("div", FE, [
                    l("label", DE, v(g(b)("library", "Classification")), 1),
                    Re(l("input", {
                      id: "library-classification-search",
                      "onUpdate:modelValue": d[39] || (d[39] = (s) => V.value = s),
                      type: "search",
                      name: "classificationSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search classifications"),
                      title: g(b)("library", "Exact classification matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-classification-suggestions",
                      "aria-expanded": he.value && ve.value.length > 0 ? "true" : "false",
                      onFocus: d[40] || (d[40] = (s) => he.value = !0),
                      onKeydown: d[41] || (d[41] = at((s) => he.value = !1, ["escape"]))
                    }, null, 40, ME), [
                      [pt, V.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "classification",
                      value: T.classification
                    }, null, 8, zE),
                    he.value && ve.value.length > 0 ? (m(), _("ul", UE, [
                      (m(!0), _(ie, null, Ce(ve.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-classification-suggestion",
                          onMousedown: d[42] || (d[42] = Ee(() => {
                          }, ["prevent"])),
                          onClick: (x) => $d(s, x)
                        }, v(s), 41, jE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: ge(["button secondary library-classification-apply", tn("classification")])
                    }, v(g(b)("library", "Apply classification")), 3)
                  ]),
                  l("label", null, [
                    ye(v(g(b)("library", "Suggested updates")), 1),
                    Re(l("select", {
                      "onUpdate:modelValue": d[43] || (d[43] = (s) => T.scannerConflicts = s),
                      name: "scannerConflicts",
                      onChange: d[44] || (d[44] = (s) => si(s))
                    }, [
                      l("option", BE, v(g(b)("library", "All metadata")), 1),
                      l("option", HE, v(g(b)("library", "Suggested updates")), 1)
                    ], 544), [
                      [Jt, T.scannerConflicts]
                    ])
                  ])
                ]),
                l("fieldset", VE, [
                  l("legend", null, v(g(b)("library", "Personal / display")), 1)
                ]),
                l("button", KE, v(g(b)("library", "Apply filters")), 1)
              ], 40, Sk)
            ]),
            l("a", {
              class: "library-navigation-settings-link",
              href: On.value
            }, [
              d[110] || (d[110] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, v(g(b)("library", "Settings")), 1)
            ], 8, GE)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        Ae(g(n0), null, {
          default: $e(() => [
            l("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: h.language || "en",
              dir: h.direction || "ltr",
              tabindex: "-1"
            }, [
              ce.value.length > 0 ? (m(), _("nav", {
                key: 0,
                class: "library-active-filter-chips",
                "aria-label": g(b)("library", "Active filters")
              }, [
                l("span", null, v(g(b)("library", "Active filters")), 1),
                (m(!0), _(ie, null, Ce(ce.value, (s) => (m(), _("a", {
                  key: s.key,
                  href: Or(s.key),
                  class: "library-filter-chip",
                  "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                  title: s.title,
                  onClick: Ee((x) => xr(s.key), ["prevent"])
                }, [
                  l("strong", null, [
                    ye(v(s.label), 1),
                    s.displayValue ? (m(), _(ie, { key: 0 }, [
                      ye(":")
                    ], 64)) : $("", !0)
                  ]),
                  s.displayValue ? (m(), _(ie, { key: 0 }, [
                    d[111] || (d[111] = ye(v(" "), -1)),
                    l("span", {
                      class: "library-filter-chip-value",
                      title: s.value
                    }, v(s.displayValue), 9, XE)
                  ], 64)) : $("", !0),
                  d[112] || (d[112] = ye()),
                  d[113] || (d[113] = l("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, YE))), 128)),
                de.value.length > 0 ? (m(), _("a", {
                  key: 0,
                  href: as(),
                  class: "library-active-filter-clear-all",
                  onClick: Ee(rs, ["prevent"])
                }, v(g(b)("library", "Clear all")), 9, ZE)) : $("", !0)
              ], 8, WE)) : $("", !0),
              ia.value ? (m(), _("section", JE, [
                l("header", QE, [
                  l("p", eA, v(g(b)("library", "Metadata cleanup")), 1),
                  l("h2", tA, v(g(b)("library", "Review")), 1),
                  l("p", null, v(g(b)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                l("nav", {
                  class: "library-review-queues",
                  "aria-label": g(b)("library", "Review queues")
                }, [
                  (m(!0), _(ie, null, Ce($g.value, (s) => (m(), _("a", {
                    key: s.key,
                    class: ge(["library-review-queue-link", { active: s.active }]),
                    href: s.href,
                    "aria-current": s.active ? "page" : void 0,
                    onClick: Ee((x) => eb(s), ["prevent"])
                  }, [
                    l("span", null, v(s.label), 1),
                    l("b", null, v(nb(s.countKey)), 1)
                  ], 10, nA))), 128))
                ], 8, iA),
                l("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(b)("library", "Filter current review queue"),
                  onSubmit: Ee(jt, ["prevent"])
                }, [
                  (m(!0), _(ie, null, Ce(Sg.value, (s) => (m(), _("input", {
                    key: `review-${s.key}`,
                    type: "hidden",
                    name: s.key,
                    value: s.value
                  }, null, 8, rA))), 128)),
                  l("label", null, [
                    ye(v(g(b)("library", "Search within this queue")), 1),
                    Re(l("input", {
                      "onUpdate:modelValue": d[45] || (d[45] = (s) => T.q = s),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [pt, T.q]
                    ])
                  ]),
                  l("button", oA, v(g(b)("library", "Apply")), 1)
                ], 40, aA),
                l("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": At.loading ? "true" : "false"
                }, [
                  At.loading ? (m(), _("span", lA, v(g(b)("library", "Loading review queue…")), 1)) : $("", !0)
                ], 8, sA),
                At.error ? (m(), _("p", cA, v(At.error), 1)) : $("", !0),
                Pn.value.enabled ? (m(), _("section", uA, [
                  l("div", dA, [
                    l("p", fA, v(g(b)("library", "Metadata review workbench")), 1),
                    l("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(b)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, v(g(b)("library", "Review next suggestion")), 9, pA)
                  ]),
                  Pn.value.item ? (m(), _("article", hA, [
                    l("header", null, [
                      l("strong", null, [
                        l("bdi", vA, v(Pn.value.item.title), 1)
                      ]),
                      l("span", gA, [
                        l("bdi", bA, v(Pn.value.item.cachedPath), 1)
                      ])
                    ]),
                    l("div", mA, [
                      (m(!0), _(ie, null, Ce(Pn.value.fields, (s) => (m(), _("article", {
                        key: s.field,
                        class: "library-metadata-review-field"
                      }, [
                        l("h4", null, [
                          l("bdi", yA, v(s.field), 1)
                        ]),
                        l("dl", null, [
                          l("div", null, [
                            l("dt", null, v(g(b)("library", "Current value")), 1),
                            l("dd", null, [
                              l("bdi", _A, v(s.currentValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(b)("library", "Suggested value")), 1),
                            l("dd", null, [
                              l("bdi", wA, v(s.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(b)("library", "Path-based suggestion")), 1),
                            l("dd", null, [
                              l("bdi", SA, v(s.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(b)("library", "Sidecar value")), 1),
                            l("dd", null, [
                              l("bdi", CA, v(s.sidecarValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(b)("library", "Source")), 1),
                            l("dd", null, [
                              l("bdi", TA, v(s.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        l("form", {
                          method: "post",
                          action: Pn.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Ft.value
                          }, null, 8, EA),
                          l("input", {
                            type: "hidden",
                            name: "field",
                            value: s.field
                          }, null, 8, AA),
                          d[114] || (d[114] = l("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          l("button", OA, v(g(b)("library", "Use suggested value")), 1)
                        ], 8, kA)
                      ]))), 128))
                    ]),
                    l("footer", xA, [
                      l("a", {
                        class: "button secondary",
                        href: Pn.value.item.detailsUrl
                      }, v(g(b)("library", "Maintenance")), 9, NA),
                      l("a", {
                        class: "button secondary",
                        href: Pn.value.skipUrl
                      }, v(g(b)("library", "Skip to next suggestion")), 9, LA)
                    ])
                  ])) : $("", !0)
                ])) : $("", !0),
                y.value.length === 0 && !At.loading && !At.error ? (m(), _("div", RA, [
                  l("h3", null, v(g(b)("library", "This review queue is clear")), 1),
                  l("p", null, v(g(b)("library", "Choose another queue or return to the catalogue.")), 1),
                  l("a", {
                    class: "button primary",
                    href: mt.value
                  }, v(g(b)("library", "Back to Library")), 9, IA)
                ])) : (m(), _("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(b)("library", "Review results")
                }, [
                  (m(!0), _(ie, null, Ce(y.value, (s) => (m(), _("article", {
                    key: s.id,
                    class: "library-review-result-card"
                  }, [
                    l("div", null, [
                      l("h3", null, [
                        l("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (x) => ji(s, x)
                        }, [
                          l("bdi", FA, v(s.title), 1)
                        ], 8, $A)
                      ]),
                      s.creators ? (m(), _("p", DA, [
                        l("bdi", MA, v(s.creators), 1)
                      ])) : $("", !0),
                      s.scanError ? (m(), _("p", zA, [
                        l("bdi", UA, v(s.scanError), 1)
                      ])) : $("", !0)
                    ]),
                    l("p", null, [
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (x) => ji(s, x)
                      }, v(g(b)("library", "Details")), 9, jA),
                      l("a", {
                        class: "button primary",
                        href: s.openUrl,
                        onClick: (x) => gi(s, x)
                      }, v(g(b)("library", "Open")), 9, BA)
                    ])
                  ]))), 128))
                ], 8, PA)),
                y.value.length > 0 ? (m(), _("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(b)("library", "Review pagination")
                }, [
                  z.value.previousUrl ? (m(), _("a", {
                    key: 0,
                    href: z.value.previousUrl
                  }, v(g(b)("library", "Previous")), 9, VA)) : (m(), _("span", KA, v(g(b)("library", "Previous")), 1)),
                  l("span", null, [
                    ye(v(g(b)("library", "Page")) + " " + v(z.value.page), 1),
                    z.value.total > 0 ? (m(), _("span", GA, " · " + v(z.value.from) + "–" + v(z.value.to), 1)) : $("", !0)
                  ]),
                  z.value.nextUrl ? (m(), _("a", {
                    key: 2,
                    href: z.value.nextUrl
                  }, v(g(b)("library", "Next")), 9, qA)) : (m(), _("span", WA, v(g(b)("library", "Next")), 1))
                ], 8, HA)) : $("", !0)
              ])) : na.value ? (m(), _("main", YA, [
                l("header", XA, [
                  l("p", ZA, v(g(b)("library", "Your library")), 1),
                  l("h2", JA, v(g(b)("library", "Home")), 1)
                ]),
                de.value.length > 0 ? (m(), _("aside", {
                  key: 0,
                  class: "library-active-filter-callout",
                  "aria-label": g(b)("library", "Active catalogue filters")
                }, [
                  l("h3", null, v(g(b)("library", "Active catalogue filters")), 1),
                  l("nav", {
                    class: "library-active-filter-callout-chips",
                    "aria-label": g(b)("library", "Active catalogue filters")
                  }, [
                    (m(!0), _(ie, null, Ce(de.value, (s) => (m(), _("a", {
                      key: `callout-${s.key}`,
                      href: Or(s.key),
                      class: "library-filter-chip",
                      "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                      onClick: Ee((x) => xr(s.key), ["prevent"])
                    }, [
                      l("strong", null, [
                        ye(v(s.label), 1),
                        s.displayValue ? (m(), _(ie, { key: 0 }, [
                          ye(":")
                        ], 64)) : $("", !0)
                      ]),
                      s.displayValue ? (m(), _(ie, { key: 0 }, [
                        d[115] || (d[115] = ye(v(" "), -1)),
                        l("span", {
                          class: "library-filter-chip-value",
                          title: s.value
                        }, v(s.displayValue), 9, i2)
                      ], 64)) : $("", !0),
                      d[116] || (d[116] = ye()),
                      d[117] || (d[117] = l("span", { "aria-hidden": "true" }, "×", -1))
                    ], 8, t2))), 128))
                  ], 8, e2),
                  l("p", n2, [
                    l("a", {
                      class: "button primary library-filter-callout-view",
                      href: tt.value
                    }, v(g(b)("library", "View filtered catalogue")), 9, a2),
                    l("a", {
                      class: "button secondary",
                      href: as(),
                      onClick: Ee(rs, ["prevent"])
                    }, v(g(b)("library", "Clear all")), 9, r2)
                  ])
                ], 8, QA)) : $("", !0),
                l("section", o2, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", s2, v(g(b)("library", "Continue reading")), 1),
                      l("p", l2, v(g(b)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    l("a", {
                      href: `${mt.value}?recentlyOpened=1&sort=lastOpened`
                    }, v(g(b)("library", "View all")), 9, c2)
                  ]),
                  Yo.value.continueReading.length ? (m(), _("div", u2, [
                    (m(!0), _(ie, null, Ce(Yo.value.continueReading, (s) => (m(), _("article", {
                      key: `continue-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(b)("library", "Details")}: ${s.title}`,
                        onClick: (x) => ji(s, x)
                      }, [
                        l("span", f2, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, p2)
                        ])
                      ], 8, d2),
                      l("div", h2, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (x) => ji(s, x)
                          }, [
                            l("bdi", g2, v(s.title), 1)
                          ], 8, v2)
                        ]),
                        s.creators ? (m(), _("p", b2, [
                          l("bdi", m2, v(s.creators), 1)
                        ])) : $("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl,
                          onClick: (x) => gi(s, x)
                        }, v(g(b)("library", "Open")), 9, y2)
                      ])
                    ]))), 128))
                  ])) : (m(), _("p", _2, v(g(b)("library", "Publications you open will appear here.")), 1))
                ]),
                l("section", w2, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", S2, v(g(b)("library", "Recently added")), 1),
                      l("p", C2, v(g(b)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    l("a", {
                      href: `${mt.value}?sort=recent`
                    }, v(g(b)("library", "View all")), 9, T2)
                  ]),
                  Yo.value.recentlyAdded.length ? (m(), _("div", k2, [
                    (m(!0), _(ie, null, Ce(Yo.value.recentlyAdded, (s) => (m(), _("article", {
                      key: `recent-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(b)("library", "Details")}: ${s.title}`,
                        onClick: (x) => ji(s, x)
                      }, [
                        l("span", A2, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, O2)
                        ])
                      ], 8, E2),
                      l("div", x2, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (x) => ji(s, x)
                          }, [
                            l("bdi", L2, v(s.title), 1)
                          ], 8, N2)
                        ]),
                        s.creators ? (m(), _("p", R2, [
                          l("bdi", I2, v(s.creators), 1)
                        ])) : $("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl,
                          onClick: (x) => gi(s, x)
                        }, v(g(b)("library", "Open")), 9, P2)
                      ])
                    ]))), 128))
                  ])) : (m(), _("p", $2, v(g(b)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                l("section", F2, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", D2, v(g(b)("library", "Shelves")), 1),
                      l("p", M2, v(g(b)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    l("a", { href: ri.value }, v(g(b)("library", "View all")), 9, z2)
                  ]),
                  md.value.length ? (m(), _("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(b)("library", "Shelves")
                  }, [
                    (m(!0), _(ie, null, Ce(md.value, (s) => (m(), _("a", {
                      key: s.shelf,
                      href: s.url
                    }, [
                      l("strong", null, [
                        l("bdi", B2, v(s.shelf), 1)
                      ]),
                      l("span", null, v(g(ui)("library", "%n item", "%n items", Number(s.itemCount || 0))), 1)
                    ], 8, j2))), 128))
                  ], 8, U2)) : (m(), _("p", H2, v(g(b)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(rc.value.count || 0) > 0 ? (m(), _("aside", V2, [
                  l("div", null, [
                    l("h3", K2, v(g(b)("library", "Needs attention")), 1),
                    l("p", G2, v(g(ui)("library", "%n publication needs better details.", "%n publications need better details.", Number(rc.value.count || 0))), 1)
                  ]),
                  l("a", {
                    class: "button tertiary",
                    href: rc.value.url
                  }, v(g(b)("library", "Review")), 9, q2)
                ])) : $("", !0)
              ])) : Nn.value ? (m(), _("main", W2, [
                l("header", Y2, [
                  l("p", X2, v(g(b)("library", "Your library")), 1),
                  l("h2", Z2, v(g(b)("library", "Shelves")), 1),
                  l("p", J2, v(g(b)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                de.value.length > 0 ? (m(), _("aside", {
                  key: 0,
                  class: "library-active-filter-callout",
                  "aria-label": g(b)("library", "Active catalogue filters")
                }, [
                  l("h3", null, v(g(b)("library", "Active catalogue filters")), 1),
                  l("nav", {
                    class: "library-active-filter-callout-chips",
                    "aria-label": g(b)("library", "Active catalogue filters")
                  }, [
                    (m(!0), _(ie, null, Ce(de.value, (s) => (m(), _("a", {
                      key: `callout-${s.key}`,
                      href: Or(s.key),
                      class: "library-filter-chip",
                      "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                      onClick: Ee((x) => xr(s.key), ["prevent"])
                    }, [
                      l("strong", null, [
                        ye(v(s.label), 1),
                        s.displayValue ? (m(), _(ie, { key: 0 }, [
                          ye(":")
                        ], 64)) : $("", !0)
                      ]),
                      s.displayValue ? (m(), _(ie, { key: 0 }, [
                        d[118] || (d[118] = ye(v(" "), -1)),
                        l("span", {
                          class: "library-filter-chip-value",
                          title: s.value
                        }, v(s.displayValue), 9, iO)
                      ], 64)) : $("", !0),
                      d[119] || (d[119] = ye()),
                      d[120] || (d[120] = l("span", { "aria-hidden": "true" }, "×", -1))
                    ], 8, tO))), 128))
                  ], 8, eO),
                  l("p", nO, [
                    l("a", {
                      class: "button primary library-filter-callout-view",
                      href: tt.value
                    }, v(g(b)("library", "View filtered catalogue")), 9, aO),
                    l("a", {
                      class: "button secondary",
                      href: as(),
                      onClick: Ee(rs, ["prevent"])
                    }, v(g(b)("library", "Clear all")), 9, rO)
                  ])
                ], 8, Q2)) : $("", !0),
                yd.value.length ? (m(), _("nav", {
                  key: 1,
                  "aria-label": g(b)("library", "Shelves")
                }, [
                  l("ul", sO, [
                    (m(!0), _(ie, null, Ce(yd.value, (s) => (m(), je(mk, {
                      key: s.id,
                      node: s,
                      "children-url": Xl.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, oO)) : (m(), _("section", lO, [
                  l("h3", null, v(g(b)("library", "Shelves")), 1),
                  l("p", cO, v(g(b)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  l("p", uO, [
                    l("a", {
                      class: "button primary",
                      href: On.value
                    }, v(g(b)("library", "Add a Library root")), 9, dO),
                    l("a", {
                      class: "button secondary",
                      href: mt.value
                    }, v(g(b)("library", "All publications")), 9, fO)
                  ])
                ]))
              ])) : (m(), _("section", {
                key: 4,
                id: "library-catalogue",
                class: ge(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": At.loading }]),
                "aria-labelledby": "library-catalogue-heading",
                "aria-busy": At.loading ? "true" : "false"
              }, [
                l("header", hO, [
                  hr.value ? (m(), _("p", vO, v(aa.value), 1)) : $("", !0),
                  l("h2", {
                    id: "library-catalogue-heading",
                    ref_key: "catalogueHeadingElement",
                    ref: Ho,
                    tabindex: "-1"
                  }, v(Bo.value), 513)
                ]),
                l("details", {
                  class: "library-mobile-filter-panel",
                  "data-library-control": "filter",
                  onToggle: yg
                }, [
                  l("summary", {
                    class: "library-mobile-filter-trigger",
                    "aria-label": bg.value
                  }, [
                    l("span", bO, v(g(ui)("library", "%n item", "%n items", Number(z.value.total || 0))), 1),
                    l("strong", null, v(gg.value), 1)
                  ], 8, gO),
                  l("form", {
                    method: "get",
                    class: "library-mobile-filter-form",
                    "aria-label": g(b)("library", "Mobile catalogue filters"),
                    onSubmit: Ee(Rd, ["prevent"])
                  }, [
                    l("input", {
                      type: "hidden",
                      name: "folder",
                      value: T.folder
                    }, null, 8, yO),
                    (m(!0), _(ie, null, Ce(bd.value, (s) => (m(), _("input", {
                      key: `mobile-hidden-${s.key}`,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, _O))), 128)),
                    l("fieldset", wO, [
                      l("legend", null, v(g(b)("library", "Content")), 1),
                      l("label", SO, [
                        l("span", null, v(g(b)("library", "Search")), 1),
                        Re(l("input", {
                          ref_key: "mobileFilterSearchInput",
                          ref: ra,
                          "onUpdate:modelValue": d[46] || (d[46] = (s) => ue.value = s),
                          "data-library-mobile-filter-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(b)("library", "Title, creator, description, filename or folder")
                        }, null, 8, CO), [
                          [pt, ue.value]
                        ])
                      ]),
                      l("label", null, [
                        ye(v(g(b)("library", "Type")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[47] || (d[47] = (s) => T.type = s),
                          name: "type",
                          onChange: d[48] || (d[48] = (s) => si(s))
                        }, [
                          l("option", TO, v(g(b)("library", "All types")), 1),
                          (m(!0), _(ie, null, Ce(L.value, (s) => (m(), _("option", {
                            key: `mobile-type-${s}`,
                            value: s
                          }, v(s), 9, kO))), 128))
                        ], 544), [
                          [Jt, T.type]
                        ])
                      ]),
                      l("div", EO, [
                        l("label", AO, v(g(b)("library", "Publisher")), 1),
                        Re(l("input", {
                          id: "library-mobile-publisher-search",
                          "onUpdate:modelValue": d[49] || (d[49] = (s) => J.value = s),
                          type: "search",
                          name: "publisherSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search publishers"),
                          title: g(b)("library", "Exact publisher matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-publisher-suggestions",
                          "aria-activedescendant": jd("mobile", "publisher"),
                          "aria-expanded": F.value && W.value.length > 0 ? "true" : "false",
                          onFocus: d[50] || (d[50] = (s) => Bd("publisher")),
                          onKeydown: d[51] || (d[51] = (s) => Hd(s, "publisher"))
                        }, null, 40, OO), [
                          [pt, J.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publisher",
                          value: T.publisher
                        }, null, 8, xO),
                        Et("publisher") ? (m(), _("small", NO, v(st("publisher")), 1)) : $("", !0),
                        Ai.value && F.value && W.value.length > 0 ? (m(), _("ul", LO, [
                          (m(!0), _(ie, null, Ce(W.value, (s, x) => (m(), _("li", {
                            id: dc("mobile", "publisher", x),
                            key: `mobile-publisher-${s}`,
                            role: "option",
                            "aria-selected": an.publisher === x ? "true" : "false"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publisher-suggestion",
                              onMousedown: d[52] || (d[52] = Ee(() => {
                              }, ["prevent"])),
                              onClick: (X) => Pd(s, X)
                            }, v(s), 41, IO)
                          ], 8, RO))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", PO, [
                        l("label", $O, v(g(b)("library", "Series / periodical")), 1),
                        Re(l("input", {
                          id: "library-mobile-publication-search",
                          "onUpdate:modelValue": d[53] || (d[53] = (s) => re.value = s),
                          type: "search",
                          name: "publicationSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search series and periodicals"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-publication-suggestions",
                          "aria-expanded": Z.value && Y.value.length > 0 ? "true" : "false",
                          onFocus: d[54] || (d[54] = (s) => Z.value = !0),
                          onKeydown: d[55] || (d[55] = at((s) => Z.value = !1, ["escape"]))
                        }, null, 40, FO), [
                          [pt, re.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publication",
                          value: T.publication
                        }, null, 8, DO),
                        Et("publication") ? (m(), _("small", MO, v(st("publication")), 1)) : $("", !0),
                        Ai.value && Z.value && Y.value.length > 0 ? (m(), _("ul", zO, [
                          (m(!0), _(ie, null, Ce(Y.value, (s) => (m(), _("li", {
                            key: `mobile-publication-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: d[56] || (d[56] = Ee(() => {
                              }, ["prevent"])),
                              onClick: (x) => Ld(s, x)
                            }, v(s), 41, UO)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", jO, [
                        l("label", BO, v(g(b)("library", "Publication year")), 1),
                        Re(l("input", {
                          id: "library-mobile-year-search",
                          "onUpdate:modelValue": d[57] || (d[57] = (s) => et.value = s),
                          type: "search",
                          name: "yearSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search publication years"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-year-suggestions",
                          "aria-expanded": ft.value && vi.value.length > 0 ? "true" : "false",
                          onFocus: d[58] || (d[58] = (s) => ft.value = !0),
                          onKeydown: d[59] || (d[59] = at((s) => ft.value = !1, ["escape"]))
                        }, null, 40, HO), [
                          [pt, et.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "year",
                          value: T.year
                        }, null, 8, VO),
                        Et("year") ? (m(), _("small", KO, v(st("year")), 1)) : $("", !0),
                        Ai.value && ft.value && vi.value.length > 0 ? (m(), _("ul", GO, [
                          (m(!0), _(ie, null, Ce(vi.value, (s) => (m(), _("li", {
                            key: `mobile-year-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-year-suggestion",
                              onMousedown: d[60] || (d[60] = Ee(() => {
                              }, ["prevent"])),
                              onClick: (x) => Ud(s, x)
                            }, v(s), 41, qO)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", WO, [
                        l("label", YO, v(g(b)("library", "Creator")), 1),
                        Re(l("input", {
                          id: "library-mobile-creator-search",
                          "onUpdate:modelValue": d[61] || (d[61] = (s) => fe.value = s),
                          type: "search",
                          name: "creatorSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search creators"),
                          title: g(b)("library", "Exact full-field creator matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-creator-suggestions",
                          "aria-expanded": _e.value && Ke.value.length > 0 ? "true" : "false",
                          onFocus: d[62] || (d[62] = (s) => _e.value = !0),
                          onKeydown: d[63] || (d[63] = at((s) => _e.value = !1, ["escape"]))
                        }, null, 40, XO), [
                          [pt, fe.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "creator",
                          value: T.creator
                        }, null, 8, ZO),
                        Et("creator") ? (m(), _("small", JO, v(st("creator")), 1)) : $("", !0),
                        Ai.value && _e.value && Ke.value.length > 0 ? (m(), _("ul", QO, [
                          (m(!0), _(ie, null, Ce(Ke.value, (s) => (m(), _("li", {
                            key: `mobile-creator-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-creator-suggestion",
                              onMousedown: d[64] || (d[64] = Ee(() => {
                              }, ["prevent"])),
                              onClick: (x) => Id(s, x)
                            }, v(s), 41, ex)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("label", null, [
                        ye(v(g(b)("library", "Format")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[65] || (d[65] = (s) => T.format = s),
                          name: "format",
                          onChange: d[66] || (d[66] = (s) => si(s))
                        }, [
                          l("option", tx, v(g(b)("library", "All formats")), 1),
                          (m(!0), _(ie, null, Ce(E.value, (s) => (m(), _("option", {
                            key: `mobile-format-${s}`,
                            value: s
                          }, v(ss(s)), 9, ix))), 128))
                        ], 544), [
                          [Jt, T.format]
                        ])
                      ]),
                      l("div", nx, [
                        l("label", ax, v(g(b)("library", "Subject")), 1),
                        Re(l("input", {
                          id: "library-mobile-subject-search",
                          "onUpdate:modelValue": d[67] || (d[67] = (s) => O.value = s),
                          type: "search",
                          name: "subjectSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search subjects"),
                          title: g(b)("library", "Exact subject matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-subject-suggestions",
                          "aria-expanded": R.value && j.value.length > 0 ? "true" : "false",
                          onFocus: d[68] || (d[68] = (s) => R.value = !0),
                          onKeydown: d[69] || (d[69] = at((s) => R.value = !1, ["escape"]))
                        }, null, 40, rx), [
                          [pt, O.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "subject",
                          value: T.subject
                        }, null, 8, ox),
                        Et("subject") ? (m(), _("small", sx, v(st("subject")), 1)) : $("", !0),
                        Ai.value && R.value && j.value.length > 0 ? (m(), _("ul", lx, [
                          (m(!0), _(ie, null, Ce(j.value, (s) => (m(), _("li", {
                            key: `mobile-subject-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-subject-suggestion",
                              onMousedown: d[70] || (d[70] = Ee(() => {
                              }, ["prevent"])),
                              onClick: (x) => zd(s, x)
                            }, v(s), 41, cx)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", ux, [
                        l("label", dx, v(g(b)("library", "Classification")), 1),
                        Re(l("input", {
                          id: "library-mobile-classification-search",
                          "onUpdate:modelValue": d[71] || (d[71] = (s) => V.value = s),
                          type: "search",
                          name: "classificationSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search classifications"),
                          title: g(b)("library", "Exact classification matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-classification-suggestions",
                          "aria-expanded": he.value && ve.value.length > 0 ? "true" : "false",
                          onFocus: d[72] || (d[72] = (s) => he.value = !0),
                          onKeydown: d[73] || (d[73] = at((s) => he.value = !1, ["escape"]))
                        }, null, 40, fx), [
                          [pt, V.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "classification",
                          value: T.classification
                        }, null, 8, px),
                        Ai.value && he.value && ve.value.length > 0 ? (m(), _("ul", hx, [
                          (m(!0), _(ie, null, Ce(ve.value, (s) => (m(), _("li", {
                            key: `mobile-classification-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-classification-suggestion",
                              onMousedown: d[74] || (d[74] = Ee(() => {
                              }, ["prevent"])),
                              onClick: (x) => $d(s, x)
                            }, v(s), 41, vx)
                          ]))), 128))
                        ])) : $("", !0)
                      ])
                    ]),
                    l("fieldset", gx, [
                      l("legend", null, v(g(b)("library", "Location")), 1),
                      l("label", null, [
                        ye(v(g(b)("library", "Shelf")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[75] || (d[75] = (s) => T.shelf = s),
                          name: "shelf",
                          onChange: d[76] || (d[76] = (s) => si(s))
                        }, [
                          l("option", bx, v(g(b)("library", "All shelves")), 1),
                          (m(!0), _(ie, null, Ce(C.value, (s) => (m(), _("option", {
                            key: `mobile-shelf-${s}`,
                            value: s
                          }, v(s), 9, mx))), 128))
                        ], 544), [
                          [Jt, T.shelf]
                        ])
                      ]),
                      l("div", yx, [
                        l("label", _x, v(g(b)("library", "Folder")), 1),
                        Re(l("input", {
                          id: "library-mobile-folder-search",
                          "onUpdate:modelValue": d[77] || (d[77] = (s) => nt.value = s),
                          type: "search",
                          name: "folderSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Type at least 3 path characters"),
                          title: g(b)("library", "Select an exact folder path"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-folder-suggestions",
                          "aria-expanded": dt.value && Pt.value.length > 0 ? "true" : "false",
                          onFocus: d[78] || (d[78] = (s) => dt.value = !0),
                          onKeydown: d[79] || (d[79] = at((s) => dt.value = !1, ["escape"]))
                        }, null, 40, wx), [
                          [pt, nt.value]
                        ]),
                        Ai.value && dt.value && Pt.value.length > 0 ? (m(), _("ul", Sx, [
                          (m(!0), _(ie, null, Ce(Pt.value, (s) => (m(), _("li", {
                            key: `mobile-folder-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-folder-suggestion",
                              onMousedown: d[80] || (d[80] = Ee(() => {
                              }, ["prevent"])),
                              onClick: (x) => Dd(s, x)
                            }, v(s), 41, Cx)
                          ]))), 128))
                        ])) : $("", !0)
                      ])
                    ]),
                    l("fieldset", Tx, [
                      l("legend", null, v(g(b)("library", "Review")), 1),
                      l("label", null, [
                        ye(v(g(b)("library", "Scan status")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[81] || (d[81] = (s) => T.status = s),
                          name: "status",
                          onChange: d[82] || (d[82] = (s) => si(s))
                        }, [
                          l("option", kx, v(g(b)("library", "All scan statuses")), 1),
                          (m(!0), _(ie, null, Ce(D.value, (s) => (m(), _("option", {
                            key: `mobile-scan-${s}`,
                            value: s
                          }, v(s), 9, Ex))), 128))
                        ], 544), [
                          [Jt, T.status]
                        ])
                      ]),
                      l("label", null, [
                        ye(v(g(b)("library", "Workflow status")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[83] || (d[83] = (s) => T.workflowStatus = s),
                          name: "workflowStatus",
                          onChange: d[84] || (d[84] = (s) => si(s))
                        }, [
                          l("option", Ax, v(g(b)("library", "All workflow statuses")), 1),
                          (m(!0), _(ie, null, Ce(M.value, (s) => (m(), _("option", {
                            key: `mobile-workflow-${s}`,
                            value: s
                          }, v(s), 9, Ox))), 128))
                        ], 544), [
                          [Jt, T.workflowStatus]
                        ])
                      ]),
                      l("label", null, [
                        ye(v(g(b)("library", "Suggested updates")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[85] || (d[85] = (s) => T.scannerConflicts = s),
                          name: "scannerConflicts",
                          onChange: d[86] || (d[86] = (s) => si(s))
                        }, [
                          l("option", xx, v(g(b)("library", "All metadata")), 1),
                          l("option", Nx, v(g(b)("library", "Suggested updates")), 1)
                        ], 544), [
                          [Jt, T.scannerConflicts]
                        ])
                      ])
                    ]),
                    l("fieldset", Lx, [
                      l("legend", null, v(g(b)("library", "Personal / display")), 1),
                      l("div", Rx, [
                        l("label", Ix, v(g(b)("library", "Nextcloud tag")), 1),
                        Re(l("input", {
                          id: "library-tag-search",
                          "onUpdate:modelValue": d[87] || (d[87] = (s) => Pe.value = s),
                          type: "search",
                          name: "tagSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search tags"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-tag-suggestions",
                          "aria-expanded": He.value && gt.value.length > 0 ? "true" : "false",
                          onFocus: d[88] || (d[88] = (s) => He.value = !0),
                          onKeydown: d[89] || (d[89] = at((s) => He.value = !1, ["escape"]))
                        }, null, 40, Px), [
                          [pt, Pe.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "tag",
                          value: T.tag
                        }, null, 8, $x),
                        He.value && gt.value.length > 0 ? (m(), _("ul", Fx, [
                          (m(!0), _(ie, null, Ce(gt.value, (s) => (m(), _("li", {
                            key: s,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-tag-suggestion",
                              onMousedown: d[90] || (d[90] = Ee(() => {
                              }, ["prevent"])),
                              onClick: (x) => Fd(s, x)
                            }, v(s), 41, Dx)
                          ]))), 128))
                        ])) : $("", !0),
                        l("button", {
                          type: "submit",
                          class: ge(["button secondary library-tag-apply", tn("tag")])
                        }, v(g(b)("library", "Apply tag")), 3)
                      ]),
                      l("label", null, [
                        ye(v(g(b)("library", "Sort")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[91] || (d[91] = (s) => T.sort = s),
                          name: "sort",
                          onChange: jt
                        }, [
                          l("option", Mx, v(g(b)("library", "Title")), 1),
                          l("option", zx, v(g(b)("library", "Date added")), 1),
                          l("option", Ux, v(g(b)("library", "Publication date")), 1),
                          l("option", jx, v(g(b)("library", "Series")), 1),
                          l("option", Bx, v(g(b)("library", "Recently opened")), 1),
                          l("option", Hx, v(g(b)("library", "Format")), 1)
                        ], 544), [
                          [Jt, T.sort]
                        ])
                      ]),
                      l("label", null, [
                        ye(v(g(b)("library", "View")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[92] || (d[92] = (s) => T.view = s),
                          name: "view",
                          onChange: jt
                        }, [
                          l("option", Vx, v(g(b)("library", "Compact")), 1),
                          l("option", Kx, v(g(b)("library", "Gallery")), 1),
                          l("option", Gx, v(g(b)("library", "List")), 1),
                          l("option", qx, v(g(b)("library", "Shelf")), 1)
                        ], 544), [
                          [Jt, T.view]
                        ])
                      ])
                    ]),
                    l("div", Wx, [
                      de.value.length > 0 ? (m(), _("a", {
                        key: 0,
                        href: as(),
                        class: "button secondary library-mobile-filter-clear",
                        onClick: Ee(rs, ["prevent"])
                      }, v(g(b)("library", "Clear all")), 9, Yx)) : $("", !0),
                      l("button", Xx, v(mg.value), 1)
                    ])
                  ], 40, mO)
                ], 32),
                l("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(b)("library", "One catalogue workspace")
                }, [
                  l("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(b)("library", "Catalogue toolbar"),
                    onSubmit: Ee(jt, ["prevent"])
                  }, [
                    (m(!0), _(ie, null, Ce(wg.value, (s) => (m(), _("input", {
                      key: s.key,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, Qx))), 128)),
                    l("label", e3, [
                      ye(v(g(b)("library", "Sort")), 1),
                      Re(l("select", {
                        "onUpdate:modelValue": d[93] || (d[93] = (s) => T.sort = s),
                        name: "sort",
                        onChange: jt
                      }, [
                        l("option", t3, v(g(b)("library", "Title")), 1),
                        l("option", i3, v(g(b)("library", "Date added")), 1),
                        l("option", n3, v(g(b)("library", "Publication date")), 1),
                        l("option", a3, v(g(b)("library", "Series")), 1),
                        l("option", r3, v(g(b)("library", "Recently opened")), 1),
                        l("option", o3, v(g(b)("library", "Format")), 1)
                      ], 544), [
                        [Jt, T.sort]
                      ])
                    ]),
                    l("nav", {
                      class: "library-view-mode-toggle",
                      "data-library-control": "view",
                      "aria-label": g(b)("library", "View")
                    }, [
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "compact",
                        class: ge({ active: Dt.value === "compact" }),
                        "aria-pressed": Dt.value === "compact" ? "true" : "false",
                        onClick: d[94] || (d[94] = (s) => os("compact"))
                      }, v(g(b)("library", "Compact")), 11, l3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: ge({ active: Dt.value === "gallery" }),
                        "aria-pressed": Dt.value === "gallery" ? "true" : "false",
                        onClick: d[95] || (d[95] = (s) => os("gallery"))
                      }, v(g(b)("library", "Gallery")), 11, c3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: ge({ active: Dt.value === "list" }),
                        "aria-pressed": Dt.value === "list" ? "true" : "false",
                        onClick: d[96] || (d[96] = (s) => os("list"))
                      }, v(g(b)("library", "List")), 11, u3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: ge({ active: Dt.value === "shelf" }),
                        "aria-pressed": Dt.value === "shelf" ? "true" : "false",
                        onClick: d[97] || (d[97] = (s) => os("shelf"))
                      }, v(g(b)("library", "Shelf")), 11, d3)
                    ], 8, s3)
                  ], 40, Jx),
                  l("section", f3, [
                    l("h3", {
                      title: g(b)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, v(g(b)("library", "Collections")), 9, p3),
                    l("form", {
                      method: "post",
                      action: nc.value,
                      class: "library-saved-collection-save-form",
                      title: hc.value ? "" : g(b)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Ft.value
                      }, null, 8, v3),
                      l("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: ab.value
                      }, null, 8, g3),
                      l("label", null, [
                        ye(v(g(b)("library", "Collection name")), 1),
                        l("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(b)("library", "e.g. Bremen photo books"),
                          disabled: !hc.value,
                          autocomplete: "off"
                        }, null, 8, b3)
                      ]),
                      l("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !hc.value,
                        title: g(b)("library", "Save current view")
                      }, v(g(b)("library", "Save")), 9, m3)
                    ], 8, h3)
                  ]),
                  Oi.value.length > 0 ? (m(), _("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(b)("library", "Batch actions for selected publications")
                  }, [
                    l("summary", _3, [
                      d[121] || (d[121] = l("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      l("span", {
                        class: "library-workspace-panel-title",
                        title: g(b)("library", "Batch actions for selected publications")
                      }, v(g(b)("library", "Batch actions")), 9, w3),
                      l("small", S3, v(g(b)("library", "Batch actions for selected publications")), 1),
                      l("b", C3, v(g(ui)("library", "%n publication selected", "%n publications selected", Oi.value.length)), 1)
                    ]),
                    l("p", T3, v(g(ui)("library", "%n publication selected", "%n publications selected", Oi.value.length)), 1),
                    l("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: kg
                    }, [
                      l("form", {
                        method: "post",
                        action: ec.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Ft.value
                        }, null, 8, E3),
                        l("label", null, [
                          l("span", null, v(g(b)("library", "Add tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(b)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, A3)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(b)("library", "Applies only to the selected publications.")
                        }, v(g(b)("library", "Apply")), 9, O3)
                      ], 8, k3),
                      l("form", {
                        method: "post",
                        action: tc.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Ft.value
                        }, null, 8, N3),
                        l("label", null, [
                          l("span", null, v(g(b)("library", "Remove tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(b)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, L3)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Removes the tag only from the selected publications.")
                        }, v(g(b)("library", "Remove")), 9, R3)
                      ], 8, x3),
                      l("form", {
                        method: "post",
                        action: Mi.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Ft.value
                        }, null, 8, P3),
                        (m(!0), _(ie, null, Ce(Wo.value, (s) => (m(), _("input", {
                          key: `reset-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, $3))), 128)),
                        d[122] || (d[122] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Batch actions for selected publications")
                        }, v(g(b)("library", "Reset metadata")), 9, F3)
                      ], 8, I3),
                      l("form", {
                        method: "post",
                        action: jo.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Ft.value
                        }, null, 8, M3),
                        (m(!0), _(ie, null, Ce(Wo.value, (s) => (m(), _("input", {
                          key: `edit-preview-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, z3))), 128)),
                        l("label", null, [
                          l("span", null, v(g(b)("library", "Field")), 1),
                          l("select", U3, [
                            l("option", j3, v(g(b)("library", "Publication type")), 1),
                            l("option", B3, v(g(b)("library", "Subtitle")), 1),
                            l("option", H3, v(g(b)("library", "Creators")), 1),
                            l("option", V3, v(g(b)("library", "Series / periodical")), 1),
                            l("option", K3, v(g(b)("library", "Publication date")), 1),
                            l("option", G3, v(g(b)("library", "Language")), 1),
                            l("option", q3, v(g(b)("library", "Publisher")), 1),
                            l("option", W3, v(g(b)("library", "Subjects")), 1),
                            l("option", Y3, v(g(b)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, v(g(b)("library", "Value")), 1),
                          l("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(b)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, X3)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Preview first, then apply from the review page.")
                        }, v(g(b)("library", "Preview edit")), 9, Z3)
                      ], 8, D3),
                      l("form", {
                        method: "post",
                        action: za.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Ft.value
                        }, null, 8, Q3),
                        (m(!0), _(ie, null, Ce(Wo.value, (s) => (m(), _("input", {
                          key: `cover-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, eN))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Batch actions for selected publications")
                        }, v(g(b)("library", "Fresh covers")), 9, tN)
                      ], 8, J3)
                    ], 32)
                  ], 8, y3)) : $("", !0)
                ], 8, Zx),
                Go.value ? (m(), _("p", iN, v(Go.value), 1)) : $("", !0),
                mr.value ? (m(), _("p", nN, v(mr.value), 1)) : $("", !0),
                br.value ? (m(), _("p", aN, v(br.value), 1)) : $("", !0),
                l("div", rN, [
                  At.loading ? (m(), _("span", oN, v(g(b)("library", "Updating catalogue…")), 1)) : At.completed ? (m(), _("span", sN, v(g(ui)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(z.value.total || 0))), 1)) : $("", !0)
                ]),
                hr.value ? (m(), _("section", lN, [
                  l("p", cN, v(aa.value), 1),
                  l("h3", {
                    id: "library-discovery-heading",
                    title: Ua.value ? g(b)("library", "Items by this creator, sorted by publication context when available.") : Rn.value ? g(b)("library", "Items from this publication year, sorted by publication date when available.") : g(b)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, v(vr.value), 9, uN),
                  l("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(b)("library", "Discovery summary")
                  }, [
                    l("span", null, v(g(ui)("library", "%n item", "%n items", z.value.total)), 1),
                    N.value?.earliestYear && N.value?.latestYear ? (m(), _("span", fN, v(N.value.earliestYear) + "–" + v(N.value.latestYear), 1)) : $("", !0),
                    N.value?.datedCount ? (m(), _("span", pN, v(N.value.datedCount) + " " + v(g(b)("library", "dated")), 1)) : $("", !0),
                    N.value?.undatedCount > 0 ? (m(), _("span", hN, v(N.value.undatedCount) + " " + v(g(b)("library", "undated")), 1)) : $("", !0)
                  ], 8, dN),
                  pr.value && N.value ? (m(), _("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(b)("library", "Publication issue/date context")
                  }, [
                    l("strong", null, v(g(b)("library", "Publication contents")), 1),
                    l("span", null, v(g(ui)("library", "%n item", "%n items", N.value.itemCount)), 1),
                    N.value.earliestYear && N.value.latestYear ? (m(), _("span", gN, v(N.value.earliestYear) + "–" + v(N.value.latestYear), 1)) : $("", !0),
                    l("span", null, v(N.value.datedCount) + " " + v(g(b)("library", "with issue/date coverage")), 1),
                    N.value.undatedCount > 0 ? (m(), _("span", bN, v(N.value.undatedCount) + " " + v(g(b)("library", "without dates yet")), 1)) : $("", !0),
                    l("span", null, v(g(b)("library", "read-only grouping")), 1)
                  ], 8, vN)) : $("", !0),
                  pr.value && N.value?.issueGroups?.length ? (m(), _("section", mN, [
                    l("div", null, [
                      l("p", yN, v(g(b)("library", "Issue order")), 1),
                      l("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(b)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, v(g(b)("library", "Read-only issue/date grouping")), 9, _N)
                    ]),
                    l("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(b)("library", "Visual issue strip")
                    }, [
                      (m(!0), _(ie, null, Ce(N.value.issueGroups, (s) => (m(), _("a", {
                        key: `strip-${s.label}`,
                        class: "library-issue-strip-card",
                        href: s.items?.[0]?.detailsUrl || "#"
                      }, [
                        l("span", null, v(s.label), 1),
                        l("strong", null, v(s.items?.[0]?.issueLabel || g(b)("library", "Issue")), 1),
                        l("small", null, v(g(ui)("library", "%n item", "%n items", s.items?.length || 0)), 1)
                      ], 8, SN))), 128))
                    ], 8, wN),
                    N.value.gapRanges?.length ? (m(), _("p", CN, v(g(b)("library", "Gap")) + ": " + v(N.value.gapRanges.join(", ")), 1)) : $("", !0),
                    (m(!0), _(ie, null, Ce(N.value.issueGroups, (s) => (m(), _("div", {
                      key: s.label,
                      class: "library-publication-issue-group"
                    }, [
                      l("h5", null, v(s.label), 1),
                      l("ol", null, [
                        (m(!0), _(ie, null, Ce(s.items, (x, X) => (m(), _("li", {
                          key: x.itemId
                        }, [
                          l("span", TN, v(x.issueLabel), 1),
                          l("a", {
                            href: x.detailsUrl || "#"
                          }, v(x.title), 9, kN),
                          l("small", null, [
                            ye(v(x.publicationType), 1),
                            x.publicationDate ? (m(), _(ie, { key: 0 }, [
                              ye(" · " + v(x.publicationDate), 1)
                            ], 64)) : $("", !0)
                          ]),
                          l("small", EN, [
                            X > 0 ? (m(), _(ie, { key: 0 }, [
                              ye(v(g(b)("library", "Previous issue")), 1)
                            ], 64)) : $("", !0),
                            X > 0 && X < s.items.length - 1 ? (m(), _(ie, { key: 1 }, [
                              ye(" · ")
                            ], 64)) : $("", !0),
                            X < s.items.length - 1 ? (m(), _(ie, { key: 2 }, [
                              ye(v(g(b)("library", "Next issue")), 1)
                            ], 64)) : $("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    N.value.unknownIssueItems?.length ? (m(), _("details", AN, [
                      l("summary", {
                        title: g(b)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, v(g(b)("library", "Unknown issue/date")) + " · " + v(N.value.unknownIssueItems.length), 9, ON)
                    ])) : $("", !0)
                  ])) : $("", !0),
                  l("p", null, [
                    l("a", {
                      href: mt.value,
                      class: "button secondary library-discovery-back-link"
                    }, v(g(b)("library", "Back to full catalogue")), 9, xN)
                  ])
                ])) : $("", !0),
                l("div", NN, [
                  l("p", LN, v(g(b)("library", "Showing")) + " " + v(z.value.from) + "–" + v(z.value.to) + " " + v(g(b)("library", "of")) + " " + v(z.value.total) + " " + v(g(b)("library", "catalogue items")), 1),
                  l("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(b)("library", "Catalogue pagination")
                  }, [
                    l("span", IN, [
                      ye(v(g(b)("library", "Page")) + " " + v(z.value.page), 1),
                      z.value.total > 0 ? (m(), _("span", PN, " · " + v(z.value.from) + "–" + v(z.value.to), 1)) : $("", !0)
                    ]),
                    z.value.previousUrl ? (m(), _("a", {
                      key: 0,
                      href: z.value.previousUrl
                    }, v(g(b)("library", "Previous")), 9, $N)) : (m(), _("span", FN, v(g(b)("library", "Previous")), 1)),
                    z.value.nextUrl ? (m(), _("a", {
                      key: 2,
                      href: z.value.nextUrl
                    }, v(g(b)("library", "Next")), 9, DN)) : (m(), _("span", MN, v(g(b)("library", "Next")), 1))
                  ], 8, RN)
                ]),
                y.value.length === 0 ? (m(), _("div", {
                  key: 4,
                  class: ge(["library-empty-content", { "library-first-run-guidance": Ui.value || en.value, "library-filter-empty-state": oi.value && !Ui.value && !en.value }]),
                  role: "status"
                }, [
                  Ui.value ? (m(), _(ie, { key: 0 }, [
                    l("h3", {
                      title: g(b)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, v(g(b)("library", "Start with one Library root")), 9, zN),
                    l("p", UN, [
                      l("a", {
                        href: On.value,
                        class: "button primary"
                      }, v(g(b)("library", "Add a Library root")), 9, jN),
                      l("span", BN, v(g(b)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : en.value ? (m(), _(ie, { key: 1 }, [
                    l("h3", {
                      title: g(b)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, v(g(b)("library", "No enabled Library roots")), 9, HN),
                    l("p", VN, [
                      l("a", {
                        href: On.value,
                        class: "button primary"
                      }, v(g(b)("library", "Open Library settings")), 9, KN)
                    ])
                  ], 64)) : oi.value ? (m(), _(ie, { key: 2 }, [
                    l("h3", {
                      title: g(b)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, v(g(b)("library", "No items match these filters")), 9, GN),
                    de.value.length > 0 ? (m(), _("nav", {
                      key: 0,
                      class: "library-empty-filter-chips",
                      "aria-label": g(b)("library", "Remove active filters")
                    }, [
                      (m(!0), _(ie, null, Ce(de.value, (s) => (m(), _("a", {
                        key: `empty-${s.key}`,
                        href: Or(s.key),
                        class: "library-filter-chip",
                        "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                        onClick: Ee((x) => xr(s.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          ye(v(s.label), 1),
                          s.displayValue ? (m(), _(ie, { key: 0 }, [
                            ye(":")
                          ], 64)) : $("", !0)
                        ]),
                        s.displayValue ? (m(), _(ie, { key: 0 }, [
                          d[123] || (d[123] = ye(v(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: s.value
                          }, v(s.displayValue), 9, YN)
                        ], 64)) : $("", !0),
                        d[124] || (d[124] = ye()),
                        d[125] || (d[125] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, WN))), 128))
                    ], 8, qN)) : $("", !0),
                    it.value ? (m(), _("p", XN, v(g(b)("library", "Try removing {filter}.", { filter: it.value.displayValue ? `${it.value.label}: ${it.value.displayValue}` : it.value.label })), 1)) : $("", !0),
                    l("p", ZN, [
                      zt.value ? (m(), _("a", {
                        key: 0,
                        href: tb(),
                        class: "button secondary library-empty-clear-search",
                        onClick: d[98] || (d[98] = Ee((s) => xr("q"), ["prevent"]))
                      }, v(g(b)("library", "Clear search")), 9, JN)) : $("", !0)
                    ])
                  ], 64)) : (m(), _(ie, { key: 3 }, [
                    l("h3", {
                      title: g(b)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, v(g(b)("library", "No catalogue items yet")), 9, QN),
                    l("p", eL, [
                      l("a", {
                        href: On.value,
                        class: "button primary"
                      }, v(g(b)("library", "Run a scan from settings")), 9, tL)
                    ])
                  ], 64))
                ], 2)) : $("", !0),
                y.value.length > 0 ? (m(), _("label", iL, [
                  l("input", {
                    type: "checkbox",
                    checked: Oi.value.length === y.value.length,
                    onChange: Cg
                  }, null, 40, nL),
                  ye(" " + v(g(b)("library", "Select all publications on this page")), 1)
                ])) : $("", !0),
                y.value.length > 0 && Dt.value === "list" ? (m(), _("ul", aL, [
                  (m(!0), _(ie, null, Ce(y.value, (s) => (m(), _("li", {
                    key: s.id,
                    class: ge(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Xo.value.has(Number(s.id)), "library-catalogue-list-row--open": In.value && Number(sa.value) === Number(s.id) }])
                  }, [
                    l("label", rL, [
                      l("input", {
                        type: "checkbox",
                        checked: Xo.value.has(Number(s.id)),
                        "aria-label": `${g(b)("library", "Select publication")}: ${s.title}`,
                        onChange: (x) => _d(s.id, x.currentTarget.checked)
                      }, null, 40, oL)
                    ]),
                    l("div", sL, [
                      l("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (x) => ji(s, x)
                      }, [
                        l("bdi", cL, v(s.title), 1)
                      ], 8, lL),
                      s.creators ? (m(), _("span", uL, [
                        l("bdi", dL, v(s.creators), 1)
                      ])) : $("", !0)
                    ]),
                    l("dl", fL, [
                      s.publication ? (m(), _("div", pL, [
                        l("dt", null, v(g(b)("library", "Series")), 1),
                        l("dd", null, [
                          l("bdi", hL, v(s.publication), 1)
                        ])
                      ])) : $("", !0),
                      s.publicationDate ? (m(), _("div", vL, [
                        l("dt", null, v(g(b)("library", "Publication date")), 1),
                        l("dd", null, v(s.publicationDate), 1)
                      ])) : $("", !0),
                      s.extension || s.publicationType ? (m(), _("div", gL, [
                        l("dt", null, v(g(b)("library", "Format")), 1),
                        l("dd", null, [
                          l("bdi", {
                            class: ge(s.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: s.extension ? "ltr" : "auto"
                          }, v(s.extension ? ss(s.extension) : s.publicationType), 11, bL)
                        ])
                      ])) : $("", !0),
                      s.shelf ? (m(), _("div", mL, [
                        l("dt", null, v(g(b)("library", "Shelf")), 1),
                        l("dd", null, [
                          l("bdi", yL, v(s.shelf), 1)
                        ])
                      ])) : $("", !0)
                    ]),
                    l("div", _L, [
                      l("a", {
                        class: "button primary",
                        href: s.openUrl,
                        onClick: (x) => gi(s, x)
                      }, v(g(b)("library", "Open")), 9, wL),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (x) => ji(s, x)
                      }, v(g(b)("library", "Details")), 9, SL)
                    ])
                  ], 2))), 128))
                ])) : y.value.length > 0 ? (m(), _("div", {
                  key: 7,
                  class: ge(["library-cover-gallery", te.value])
                }, [
                  (m(!0), _(ie, null, Ce(y.value, (s) => (m(), _("article", {
                    key: s.id,
                    class: ge(["library-cover-card", { "library-cover-card--cover-loaded": Nr(s) === "loaded", "library-cover-card--cover-error": Nr(s) === "error", "library-cover-card--selected": Xo.value.has(Number(s.id)), "library-cover-card--open": In.value && Number(sa.value) === Number(s.id) }])
                  }, [
                    l("label", CL, [
                      l("input", {
                        type: "checkbox",
                        checked: Xo.value.has(Number(s.id)),
                        "aria-label": `${g(b)("library", "Select publication")}: ${s.title}`,
                        onChange: (x) => _d(s.id, x.currentTarget.checked)
                      }, null, 40, TL)
                    ]),
                    l("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${s.id} library-card-title-${s.id}`,
                      "aria-expanded": In.value && Number(sa.value) === Number(s.id) ? "true" : "false",
                      onClick: (x) => ji(s, x)
                    }, [
                      l("span", {
                        id: `library-details-action-${s.id}`,
                        class: "hidden-visually"
                      }, v(g(b)("library", "Details")), 9, EL),
                      l("span", AL, [
                        Nr(s) === "loading" ? (m(), _("span", OL)) : $("", !0),
                        l("img", {
                          class: ge(["library-cover-image", { "library-cover-image--loaded": Nr(s) === "loaded" }]),
                          src: s.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (x) => ub(s),
                          onError: (x) => db(s)
                        }, null, 42, xL),
                        Nr(s) === "error" ? (m(), _("span", NL, v(g(b)("library", "Cover unavailable")), 1)) : $("", !0)
                      ])
                    ], 8, kL),
                    l("form", {
                      method: "post",
                      action: s.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: Ee((x) => Xd(s, x), ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Ft.value
                      }, null, 8, RL),
                      d[126] || (d[126] = l("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      l("input", {
                        type: "hidden",
                        name: "starred",
                        value: s.starred ? "0" : "1"
                      }, null, 8, IL),
                      l("button", {
                        type: "submit",
                        class: ge(["library-cover-star-button", { "library-cover-star-button--starred": s.starred }]),
                        "aria-pressed": s.starred ? "true" : "false",
                        title: s.starred ? g(b)("library", "Unstar this publication") : g(b)("library", "Star this publication"),
                        "aria-label": s.starred ? g(b)("library", "Unstar this publication") : g(b)("library", "Star this publication"),
                        "aria-busy": Lr[s.id] ? "true" : void 0,
                        disabled: Lr[s.id],
                        onClick: Ee((x) => Xd(s, x), ["prevent"])
                      }, v(s.starred ? "★" : "☆"), 11, PL),
                      Rr[s.id] ? (m(), _("span", {
                        key: 0,
                        "data-library-star-error": s.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, v(Rr[s.id]), 9, $L)) : $("", !0)
                    ], 40, LL),
                    l("div", FL, [
                      l("div", DL, [
                        l("h3", {
                          id: `library-card-title-${s.id}`
                        }, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (x) => ji(s, x)
                          }, [
                            l("bdi", UL, v(s.title), 1)
                          ], 8, zL)
                        ], 8, ML),
                        s.creators ? (m(), _("p", jL, [
                          l("bdi", BL, v(s.creators), 1)
                        ])) : $("", !0),
                        qd(s) ? (m(), _("p", HL, [
                          l("bdi", VL, v(qd(s)), 1)
                        ])) : $("", !0)
                      ])
                    ])
                  ], 2))), 128))
                ], 2)) : $("", !0),
                y.value.length > 0 ? (m(), _("nav", {
                  key: 8,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(b)("library", "Catalogue pagination")
                }, [
                  l("span", GL, [
                    ye(v(g(b)("library", "Page")) + " " + v(z.value.page), 1),
                    z.value.total > 0 ? (m(), _("span", qL, " · " + v(z.value.from) + "–" + v(z.value.to), 1)) : $("", !0)
                  ]),
                  z.value.previousUrl ? (m(), _("a", {
                    key: 0,
                    href: z.value.previousUrl
                  }, v(g(b)("library", "Previous")), 9, WL)) : (m(), _("span", YL, v(g(b)("library", "Previous")), 1)),
                  z.value.nextUrl ? (m(), _("a", {
                    key: 2,
                    href: z.value.nextUrl
                  }, v(g(b)("library", "Next")), 9, XL)) : (m(), _("span", ZL, v(g(b)("library", "Next")), 1))
                ], 8, KL)) : $("", !0)
              ], 10, pO))
            ], 8, qE)
          ]),
          _: 1
        }),
        Ae(g(VT), {
          ref_key: "sidebarComponent",
          ref: ca,
          class: "library-native-item-sidebar",
          open: In.value,
          "no-toggle": "",
          loading: Xt.loading,
          name: we.value?.title || g(b)("library", "Publication details"),
          subname: we.value?.creators || "",
          role: ua.value ? "dialog" : void 0,
          "aria-modal": ua.value ? "true" : void 0,
          "aria-labelledby": ua.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": ua.value && we.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: xd,
          onClosed: Fg,
          onClose: Cr
        }, {
          default: $e(() => [
            l("div", JL, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: wd,
                class: "hidden-visually",
                tabindex: "-1"
              }, v(we.value?.title || g(b)("library", "Publication details")), 513),
              Xt.loading && !we.value ? (m(), _("p", QL, v(g(b)("library", "Loading publication details…")), 1)) : Xt.error ? (m(), _("div", {
                key: 1,
                class: "library-sidebar-state",
                role: Xt.missing ? "status" : "alert"
              }, [
                l("p", null, v(Xt.error), 1),
                Xt.missing ? $("", !0) : (m(), _("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: d[99] || (d[99] = (s) => Sr(sa.value, { historyMode: "none" }))
                }, v(g(b)("library", "Try again")), 1))
              ], 8, eR)) : we.value ? (m(), _(ie, { key: 2 }, [
                l("p", tR, v(g(b)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", iR, [
                  l("span", nR, v(g(b)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: we.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, aR),
                  l("div", rR, [
                    l("p", oR, [
                      l("bdi", sR, v(we.value.publicationType || g(b)("library", "Publication")), 1),
                      we.value.extension ? (m(), _("span", lR, [
                        d[127] || (d[127] = ye(" · ", -1)),
                        l("bdi", cR, v(ss(we.value.extension)), 1)
                      ])) : $("", !0)
                    ]),
                    l("div", uR, [
                      l("a", {
                        class: "button primary",
                        href: we.value.openUrl,
                        onClick: d[100] || (d[100] = (s) => gi(we.value, s))
                      }, v(g(b)("library", "Open")), 9, dR),
                      Ae(g(cd), {
                        "aria-label": g(b)("library", "File and maintenance actions")
                      }, {
                        default: $e(() => [
                          Ae(g(eu), {
                            href: we.value.filesUrl
                          }, {
                            default: $e(() => [
                              ye(v(g(b)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          Ae(g(eu), {
                            href: we.value.downloadUrl
                          }, {
                            default: $e(() => [
                              ye(v(g(b)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          Ae(g(eu), {
                            href: we.value.detailsUrl
                          }, {
                            default: $e(() => [
                              ye(v(g(b)("library", "Maintenance (legacy)")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ])
                  ])
                ]),
                l("nav", {
                  class: "library-sidebar-sections",
                  "aria-label": g(b)("library", "Publication detail sections")
                }, [
                  (m(), _(ie, null, Ce(Ag, (s) => l("button", {
                    key: s.key,
                    type: "button",
                    class: ge({ active: la.value === s.key }),
                    "aria-current": la.value === s.key ? "page" : void 0,
                    onClick: (x) => la.value = s.key
                  }, v(g(b)("library", s.label)), 11, pR)), 64))
                ], 8, fR),
                la.value === "overview" ? (m(), _("section", hR, [
                  l("h3", vR, v(g(b)("library", "Overview")), 1),
                  Sd.value ? (m(), _("p", gR, [
                    l("bdi", bR, v(Sd.value), 1)
                  ])) : $("", !0),
                  l("dl", mR, [
                    we.value.publication ? (m(), _("div", yR, [
                      l("dt", null, v(g(b)("library", "Series")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: es("publication", we.value.publication),
                          title: g(b)("library", "Filter catalogue by this series"),
                          onClick: d[101] || (d[101] = (s) => ts(s, "publication", we.value.publication))
                        }, [
                          l("bdi", wR, v(we.value.publication), 1)
                        ], 8, _R)
                      ])
                    ])) : $("", !0),
                    we.value.publicationDate ? (m(), _("div", SR, [
                      l("dt", null, v(g(b)("library", "Date")), 1),
                      l("dd", null, [
                        da.value ? (m(), _("a", {
                          key: 0,
                          class: "library-detail-facet-link",
                          href: es("year", da.value),
                          title: g(b)("library", "Filter catalogue by this publication year"),
                          onClick: d[102] || (d[102] = (s) => ts(s, "year", da.value))
                        }, v(da.value), 9, CR)) : $("", !0),
                        da.value && we.value.publicationDate !== da.value ? (m(), _("span", TR, " · ")) : $("", !0),
                        we.value.publicationDate !== da.value ? (m(), _("span", kR, v(we.value.publicationDate), 1)) : $("", !0)
                      ])
                    ])) : $("", !0),
                    we.value.publisher ? (m(), _("div", ER, [
                      l("dt", null, v(g(b)("library", "Publisher")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: es("publisher", we.value.publisher),
                          title: g(b)("library", "Filter catalogue by this publisher"),
                          onClick: d[103] || (d[103] = (s) => ts(s, "publisher", we.value.publisher))
                        }, [
                          l("bdi", OR, v(we.value.publisher), 1)
                        ], 8, AR)
                      ])
                    ])) : $("", !0),
                    Cd.value.length ? (m(), _("div", xR, [
                      l("dt", null, v(g(b)("library", "Language")), 1),
                      l("dd", NR, [
                        (m(!0), _(ie, null, Ce(Cd.value, (s) => (m(), _("a", {
                          key: s,
                          class: "library-detail-facet-link",
                          href: es("language", s),
                          title: g(b)("library", "Filter catalogue by this language"),
                          onClick: (x) => ts(x, "language", s)
                        }, [
                          l("bdi", RR, v(s), 1)
                        ], 8, LR))), 128))
                      ])
                    ])) : $("", !0),
                    we.value.shelf ? (m(), _("div", IR, [
                      l("dt", null, v(g(b)("library", "Shelf")), 1),
                      l("dd", null, v(we.value.shelf), 1)
                    ])) : $("", !0)
                  ])
                ])) : la.value === "metadata" ? (m(), _("section", PR, [
                  l("h3", $R, v(g(b)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Ee(Pg, ["prevent"])
                  }, [
                    l("label", null, [
                      ye(v(g(b)("library", "Title")), 1),
                      Re(l("input", {
                        "onUpdate:modelValue": d[104] || (d[104] = (s) => Ut.title = s),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [pt, Ut.title]
                      ])
                    ]),
                    l("label", null, [
                      ye(v(g(b)("library", "Publication date")), 1),
                      Re(l("input", {
                        "onUpdate:modelValue": d[105] || (d[105] = (s) => Ut.publicationDate = s),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(b)("library", "e.g. 2026")
                      }, null, 8, FR), [
                        [pt, Ut.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, v(g(b)("library", "Identifiers")), 1),
                      (m(!0), _(ie, null, Ce(Ut.identifiers, (s, x) => (m(), _("div", {
                        key: x,
                        class: "library-sidebar-identifier"
                      }, [
                        Re(l("input", {
                          "onUpdate:modelValue": (X) => s.scheme = X,
                          "aria-label": g(b)("library", "Identifier type"),
                          placeholder: g(b)("library", "Identifier type")
                        }, null, 8, DR), [
                          [pt, s.scheme]
                        ]),
                        Re(l("input", {
                          "onUpdate:modelValue": (X) => s.displayValue = X,
                          "aria-label": g(b)("library", "Identifier value")
                        }, null, 8, MR), [
                          [pt, s.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (X) => Ig(x)
                        }, v(g(b)("library", "Remove")), 9, zR)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Rg
                      }, v(g(b)("library", "Add identifier")), 1)
                    ]),
                    l("p", UR, v(g(b)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    xi.error ? (m(), _("p", jR, v(xi.error), 1)) : xi.saved ? (m(), _("p", BR, v(g(b)("library", "Metadata saved.")), 1)) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: xi.saving
                    }, v(xi.saving ? g(b)("library", "Saving…") : g(b)("library", "Save metadata")), 9, HR)
                  ], 32),
                  is(we.value).length ? (m(), _("section", VR, [
                    l("h4", KR, v(g(b)("library", "Scanner suggestions")), 1),
                    l("p", GR, v(g(b)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    l("dl", null, [
                      (m(!0), _(ie, null, Ce(is(we.value), (s) => (m(), _("div", {
                        key: s.field
                      }, [
                        l("dt", null, v(s.field) + " · " + v(s.sourceProvenance), 1),
                        l("dd", null, [
                          ye(v(g(b)("library", "Current")) + ": " + v(s.currentValue || "—"), 1),
                          d[128] || (d[128] = l("br", null, null, -1)),
                          ye(v(g(b)("library", "Suggestion")) + ": " + v(s.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : $("", !0)
                ])) : (m(), _("section", qR, [
                  l("h3", WR, v(g(b)("library", "Activity")), 1),
                  l("dl", YR, [
                    l("div", null, [
                      l("dt", null, v(g(b)("library", "Scan status")), 1),
                      l("dd", null, v(we.value.scanStatus || "—"), 1)
                    ]),
                    we.value.workflowStatus ? (m(), _("div", XR, [
                      l("dt", null, v(g(b)("library", "Workflow")), 1),
                      l("dd", null, v(we.value.workflowStatus), 1)
                    ])) : $("", !0),
                    we.value.metadataSource ? (m(), _("div", ZR, [
                      l("dt", null, v(g(b)("library", "Metadata source")), 1),
                      l("dd", null, v(we.value.metadataSource), 1)
                    ])) : $("", !0),
                    we.value.cachedPath ? (m(), _("div", JR, [
                      l("dt", null, v(g(b)("library", "File")), 1),
                      l("dd", QR, [
                        we.value.openUrl ? (m(), _("a", {
                          key: 0,
                          href: we.value.openUrl,
                          onClick: d[106] || (d[106] = (s) => gi(we.value, s))
                        }, [
                          l("bdi", t4, v(we.value.cachedPath), 1)
                        ], 8, e4)) : (m(), _("bdi", i4, v(we.value.cachedPath), 1))
                      ])
                    ])) : $("", !0)
                  ])
                ])),
                l("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": g(b)("library", "Browse neighbouring items")
                }, [
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Jo.value,
                    onClick: d[107] || (d[107] = (s) => ns(Jo.value))
                  }, v(g(b)("library", "Previous item")), 9, a4),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Qo.value,
                    onClick: d[108] || (d[108] = (s) => ns(Qo.value))
                  }, v(g(b)("library", "Next item")), 9, r4)
                ], 8, n4)
              ], 64)) : $("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function u4() {
  window.LibraryStartupWatchdog?.fail();
}
function d4(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = Zu("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !d4(e))
    throw new Error("Library startup prerequisites are unavailable");
  const i = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Xy(c4, { state: i }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  u4(), console.error("[library] Vue startup failed", e);
}
