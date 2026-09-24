// @__NO_SIDE_EFFECTS__
function $u(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const i of e.split(",")) t[i] = 1;
  return (i) => i in t;
}
const We = {}, Qa = [], wi = () => {
}, Kp = () => !1, Ol = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), xl = (e) => e.startsWith("onUpdate:"), yt = Object.assign, Fu = (e, t) => {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}, mb = Object.prototype.hasOwnProperty, Qe = (e, t) => mb.call(e, t), Oe = Array.isArray, Vn = (e) => Fo(e) === "[object Map]", Ra = (e) => Fo(e) === "[object Set]", Qd = (e) => Fo(e) === "[object Date]", $e = (e) => typeof e == "function", lt = (e) => typeof e == "string", Pi = (e) => typeof e == "symbol", et = (e) => e !== null && typeof e == "object", Gp = (e) => (et(e) || $e(e)) && $e(e.then) && $e(e.catch), qp = Object.prototype.toString, Fo = (e) => qp.call(e), yb = (e) => Fo(e).slice(8, -1), Wp = (e) => Fo(e) === "[object Object]", Du = (e) => lt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, to = /* @__PURE__ */ $u(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Nl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((i) => t[i] || (t[i] = e(i)));
}, _b = /-\w/g, qt = Nl(
  (e) => e.replace(_b, (t) => t.slice(1).toUpperCase())
), wb = /\B([A-Z])/g, Tn = Nl(
  (e) => e.replace(wb, "-$1").toLowerCase()
), Ll = Nl((e) => e.charAt(0).toUpperCase() + e.slice(1)), gc = Nl(
  (e) => e ? `on${Ll(e)}` : ""
), It = (e, t) => !Object.is(e, t), Cs = (e, ...t) => {
  for (let i = 0; i < e.length; i++)
    e[i](...t);
}, Yp = (e, t, i, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: i
  });
}, Rl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Sb = (e) => {
  const t = lt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ef;
const Il = () => ef || (ef = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function hi(e) {
  if (Oe(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const n = e[i], a = lt(n) ? Eb(n) : hi(n);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (lt(e) || et(e))
    return e;
}
const Cb = /;(?![^(]*\))/g, Tb = /:([^]+)/, kb = /\/\*[^]*?\*\//g;
function Eb(e) {
  const t = {};
  return e.replace(kb, "").split(Cb).forEach((i) => {
    if (i) {
      const n = i.split(Tb);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ye(e) {
  let t = "";
  if (lt(e))
    t = e;
  else if (Oe(e))
    for (let i = 0; i < e.length; i++) {
      const n = ye(e[i]);
      n && (t += n + " ");
    }
  else if (et(e))
    for (const i in e)
      e[i] && (t += i + " ");
  return t.trim();
}
function Os(e) {
  if (!e) return null;
  let { class: t, style: i } = e;
  return t && !lt(t) && (e.class = ye(t)), i && (e.style = hi(i)), e;
}
const Ab = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ob = /* @__PURE__ */ $u(Ab);
function Xp(e) {
  return !!e || e === "";
}
function xb(e, t) {
  if (e.length !== t.length) return !1;
  let i = !0;
  for (let n = 0; i && n < e.length; n++)
    i = Wn(e[n], t[n]);
  return i;
}
function tf(e, t) {
  if (e.size !== t.size) return !1;
  const i = Array.from(t), n = new Uint8Array(i.length);
  for (const a of e) {
    let r = -1;
    for (let o = 0; o < i.length; o++)
      if (!n[o] && Wn(a, i[o])) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    n[r] = 1;
  }
  return !0;
}
function Wn(e, t) {
  if (e === t) return !0;
  let i = Qd(e), n = Qd(t);
  if (i || n)
    return i && n ? e.getTime() === t.getTime() : !1;
  if (i = Pi(e), n = Pi(t), i || n)
    return e === t;
  if (i = Oe(e), n = Oe(t), i || n)
    return i && n ? xb(e, t) : !1;
  if (i = et(e), n = et(t), i || n) {
    if (!i || !n)
      return !1;
    if (i = Vn(e), n = Vn(t), i || n || (i = Ra(e), n = Ra(t), i || n))
      return i && n ? tf(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const o in e) {
      const c = e.hasOwnProperty(o), u = t.hasOwnProperty(o);
      if (c && !u || !c && u || !Wn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Nb(e, t) {
  return e.findIndex((i) => Wn(i, t));
}
const Zp = (e) => !!(e && e.__v_isRef === !0), v = (e) => lt(e) ? e : e == null ? "" : Oe(e) || et(e) && (e.toString === qp || !$e(e.toString)) ? Zp(e) ? v(e.value) : JSON.stringify(e, Jp, 2) : String(e), Jp = (e, t) => Zp(t) ? Jp(e, t.value) : Vn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (i, [n, a], r) => (i[bc(n, r) + " =>"] = a, i),
    {}
  )
} : Ra(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((i) => bc(i))
} : Pi(t) ? bc(t) : et(t) && !Oe(t) && !Wp(t) ? String(t) : t, bc = (e, t = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pi(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e
  );
};
function Lb(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Lt;
class Rb {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Lt && (Lt.active ? (this.parent = Lt, this.index = (Lt.scopes || (Lt.scopes = [])).push(
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
      const i = Lt;
      try {
        return Lt = this, t();
      } finally {
        Lt = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Lt, Lt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Lt === this)
        Lt = this.prevScope;
      else {
        let t = Lt;
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
function Ib() {
  return Lt;
}
let st;
const mc = /* @__PURE__ */ new WeakSet();
class Qp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Lt && (Lt.active ? Lt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, mc.has(this) && (mc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || th(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, nf(this), ih(this);
    const t = st, i = Ri;
    st = this, Ri = !0;
    try {
      return this.fn();
    } finally {
      nh(this), st = t, Ri = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Uu(t);
      this.deps = this.depsTail = void 0, nf(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? mc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    iu(this) && this.run();
  }
  get dirty() {
    return iu(this);
  }
}
let eh = 0, io, no;
function th(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = no, no = e;
    return;
  }
  e.next = io, io = e;
}
function Mu() {
  eh++;
}
function zu() {
  if (--eh > 0)
    return;
  if (no) {
    let t = no;
    for (no = void 0; t; ) {
      const i = t.next;
      t.next = void 0, t.flags &= -9, t = i;
    }
  }
  let e;
  for (; io; ) {
    let t = io;
    for (io = void 0; t; ) {
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
function ih(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function nh(e) {
  let t, i = e.depsTail, n = i;
  for (; n; ) {
    const a = n.prevDep;
    n.version === -1 ? (n === i && (i = a), Uu(n), Pb(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = a;
  }
  e.deps = t, e.depsTail = i;
}
function iu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ah(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ah(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === mo) || (e.globalVersion = mo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !iu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, i = st, n = Ri;
  st = e, Ri = !0;
  try {
    ih(e);
    const a = e.fn(e._value);
    (t.version === 0 || It(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    st = i, Ri = n, nh(e), e.flags &= -3;
  }
}
function Uu(e, t = !1) {
  const { dep: i, prevSub: n, nextSub: a } = e;
  if (n && (n.nextSub = a, e.prevSub = void 0), a && (a.prevSub = n, e.nextSub = void 0), i.subs === e && (i.subs = n, !n && i.computed)) {
    i.computed.flags &= -5;
    for (let r = i.computed.deps; r; r = r.nextDep)
      Uu(r, !0);
  }
  !t && !--i.sc && i.map && i.map.delete(i.key);
}
function Pb(e) {
  const { prevDep: t, nextDep: i } = e;
  t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
}
let Ri = !0;
const rh = [];
function _n() {
  rh.push(Ri), Ri = !1;
}
function wn() {
  const e = rh.pop();
  Ri = e === void 0 ? !0 : e;
}
function nf(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const i = st;
    st = void 0;
    try {
      t();
    } finally {
      st = i;
    }
  }
}
let mo = 0;
class $b {
  constructor(t, i) {
    this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Pl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!st || !Ri || st === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== st)
      i = this.activeLink = new $b(st, this), st.deps ? (i.prevDep = st.depsTail, st.depsTail.nextDep = i, st.depsTail = i) : st.deps = st.depsTail = i, oh(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const n = i.nextDep;
      n.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = n), i.prevDep = st.depsTail, i.nextDep = void 0, st.depsTail.nextDep = i, st.depsTail = i, st.deps === i && (st.deps = n);
    }
    return i;
  }
  trigger(t) {
    this.version++, mo++, this.notify(t);
  }
  notify(t) {
    Mu();
    try {
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      zu();
    }
  }
}
function oh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        oh(n);
    }
    const i = e.dep.subs;
    i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
  }
}
const nu = /* @__PURE__ */ new WeakMap(), xa = /* @__PURE__ */ Symbol(
  ""
), au = /* @__PURE__ */ Symbol(
  ""
), yo = /* @__PURE__ */ Symbol(
  ""
);
function Vt(e, t, i) {
  if (Ri && st) {
    let n = nu.get(e);
    n || nu.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(i);
    a || (n.set(i, a = new Pl()), a.map = n, a.key = i), a.track();
  }
}
function pn(e, t, i, n, a, r) {
  const o = nu.get(e);
  if (!o) {
    mo++;
    return;
  }
  const c = (u) => {
    u && u.trigger();
  };
  if (Mu(), t === "clear")
    o.forEach(c);
  else {
    const u = Oe(e), y = u && Du(i);
    if (u && i === "length") {
      const f = Number(n);
      o.forEach((h, T) => {
        (T === "length" || T === yo || !Pi(T) && T >= f) && c(h);
      });
    } else
      switch ((i !== void 0 || o.has(void 0)) && c(o.get(i)), y && c(o.get(yo)), t) {
        case "add":
          u ? y && c(o.get("length")) : (c(o.get(xa)), Vn(e) && c(o.get(au)));
          break;
        case "delete":
          u || (c(o.get(xa)), Vn(e) && c(o.get(au)));
          break;
        case "set":
          Vn(e) && c(o.get(xa));
          break;
      }
  }
  zu();
}
function Ga(e) {
  const t = /* @__PURE__ */ Ze(e);
  return t === e ? t : (Vt(t, "iterate", yo), /* @__PURE__ */ Si(e) ? t : t.map($i));
}
function $l(e) {
  return Vt(e = /* @__PURE__ */ Ze(e), "iterate", yo), e;
}
function qi(e, t) {
  return /* @__PURE__ */ Sn(e) ? sr(/* @__PURE__ */ Na(e) ? $i(t) : t) : $i(t);
}
const Fb = {
  __proto__: null,
  [Symbol.iterator]() {
    return yc(this, Symbol.iterator, (e) => qi(this, e));
  },
  concat(...e) {
    return Ga(this).concat(
      ...e.map((t) => Oe(t) ? Ga(t) : t)
    );
  },
  entries() {
    return yc(this, "entries", (e) => (e[1] = qi(this, e[1]), e));
  },
  every(e, t) {
    return on(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return on(
      this,
      "filter",
      e,
      t,
      (i) => i.map((n) => qi(this, n)),
      arguments
    );
  },
  find(e, t) {
    return on(
      this,
      "find",
      e,
      t,
      (i) => qi(this, i),
      arguments
    );
  },
  findIndex(e, t) {
    return on(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return on(
      this,
      "findLast",
      e,
      t,
      (i) => qi(this, i),
      arguments
    );
  },
  findLastIndex(e, t) {
    return on(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return on(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return _c(this, "includes", e);
  },
  indexOf(...e) {
    return _c(this, "indexOf", e);
  },
  join(e) {
    return Ga(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return _c(this, "lastIndexOf", e);
  },
  map(e, t) {
    return on(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return zr(this, "pop");
  },
  push(...e) {
    return zr(this, "push", e);
  },
  reduce(e, ...t) {
    return af(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return af(this, "reduceRight", e, t);
  },
  shift() {
    return zr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return on(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return zr(this, "splice", e);
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
    return zr(this, "unshift", e);
  },
  values() {
    return yc(this, "values", (e) => qi(this, e));
  }
};
function yc(e, t, i) {
  const n = $l(e), a = n[t]();
  return n !== e && !/* @__PURE__ */ Si(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = i(r.value)), r;
  }), a;
}
const Db = Array.prototype;
function on(e, t, i, n, a, r) {
  const o = $l(e), c = o !== e && !/* @__PURE__ */ Si(e), u = o[t];
  if (u !== Db[t]) {
    const h = u.apply(e, r);
    return c ? $i(h) : h;
  }
  let y = i;
  o !== e && (c ? y = function(h, T) {
    return i.call(this, qi(e, h), T, e);
  } : i.length > 2 && (y = function(h, T) {
    return i.call(this, h, T, e);
  }));
  const f = u.call(o, y, n);
  return c && a ? a(f) : f;
}
function af(e, t, i, n) {
  const a = $l(e), r = a !== e && !/* @__PURE__ */ Si(e);
  let o = i, c = !1;
  a !== e && (r ? (c = n.length === 0, o = function(y, f, h) {
    return c && (c = !1, y = qi(e, y)), i.call(this, y, qi(e, f), h, e);
  }) : i.length > 3 && (o = function(y, f, h) {
    return i.call(this, y, f, h, e);
  }));
  const u = a[t](o, ...n);
  return c ? qi(e, u) : u;
}
function _c(e, t, i) {
  const n = /* @__PURE__ */ Ze(e);
  Vt(n, "iterate", yo);
  const a = n[t](...i);
  return (a === -1 || a === !1) && /* @__PURE__ */ Hu(i[0]) ? (i[0] = /* @__PURE__ */ Ze(i[0]), n[t](...i)) : a;
}
function zr(e, t, i = []) {
  _n(), Mu();
  const n = (/* @__PURE__ */ Ze(e))[t].apply(e, i);
  return zu(), wn(), n;
}
const Mb = /* @__PURE__ */ $u("__proto__,__v_isRef,__isVue"), sh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pi)
);
function zb(e) {
  Pi(e) || (e = String(e));
  const t = /* @__PURE__ */ Ze(this);
  return Vt(t, "has", e), t.hasOwnProperty(e);
}
class lh {
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
      return n === (a ? r ? Yb : fh : r ? dh : uh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = Oe(t);
    if (!a) {
      let u;
      if (o && (u = Fb[i]))
        return u;
      if (i === "hasOwnProperty")
        return zb;
    }
    const c = Reflect.get(
      t,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Wt(t) ? t : n
    );
    if ((Pi(i) ? sh.has(i) : Mb(i)) || (a || Vt(t, "get", i), r))
      return c;
    if (/* @__PURE__ */ Wt(c)) {
      const u = o && Du(i) ? c : c.value;
      return a && et(u) ? /* @__PURE__ */ _o(u) : u;
    }
    return et(c) ? a ? /* @__PURE__ */ _o(c) : /* @__PURE__ */ Rt(c) : c;
  }
}
class ch extends lh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, i, n, a) {
    let r = t[i];
    const o = Oe(t) && Du(i);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ Sn(r);
      if (!/* @__PURE__ */ Si(n) && !/* @__PURE__ */ Sn(n) && (r = /* @__PURE__ */ Ze(r), n = /* @__PURE__ */ Ze(n)), !o && /* @__PURE__ */ Wt(r) && !/* @__PURE__ */ Wt(n))
        return y || (r.value = n), !0;
    }
    const c = o ? Number(i) < t.length : Qe(t, i), u = Reflect.set(
      t,
      i,
      n,
      /* @__PURE__ */ Wt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ze(a) && u && (c ? It(n, r) && pn(t, "set", i, n) : pn(t, "add", i, n)), u;
  }
  deleteProperty(t, i) {
    const n = Qe(t, i);
    t[i];
    const a = Reflect.deleteProperty(t, i);
    return a && n && pn(t, "delete", i, void 0), a;
  }
  has(t, i) {
    const n = Reflect.has(t, i);
    return (!Pi(i) || !sh.has(i)) && Vt(t, "has", i), n;
  }
  ownKeys(t) {
    return Vt(
      t,
      "iterate",
      Oe(t) ? "length" : xa
    ), Reflect.ownKeys(t);
  }
}
class Ub extends lh {
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
const jb = /* @__PURE__ */ new ch(), Bb = /* @__PURE__ */ new Ub(), Hb = /* @__PURE__ */ new ch(!0);
const ru = (e) => e, cs = (e) => Reflect.getPrototypeOf(e);
function Vb(e, t, i) {
  return function(...n) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ze(a), o = Vn(r), c = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, y = a[e](...n), f = i ? ru : t ? sr : $i;
    return !t && Vt(
      r,
      "iterate",
      u ? au : xa
    ), yt(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: h, done: T } = y.next();
          return T ? { value: h, done: T } : {
            value: c ? [f(h[0]), f(h[1])] : f(h),
            done: T
          };
        }
      }
    );
  };
}
function us(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Kb(e, t) {
  const i = {
    get(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ze(r), c = /* @__PURE__ */ Ze(a);
      e || (It(a, c) && Vt(o, "get", a), Vt(o, "get", c));
      const { has: u } = cs(o), y = t ? ru : e ? sr : $i;
      if (u.call(o, a))
        return y(r.get(a));
      if (u.call(o, c))
        return y(r.get(c));
      r !== o && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Vt(/* @__PURE__ */ Ze(a), "iterate", xa), a.size;
    },
    has(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ze(r), c = /* @__PURE__ */ Ze(a);
      return e || (It(a, c) && Vt(o, "has", a), Vt(o, "has", c)), a === c ? r.has(a) : r.has(a) || r.has(c);
    },
    forEach(a, r) {
      const o = this, c = o.__v_raw, u = /* @__PURE__ */ Ze(c), y = t ? ru : e ? sr : $i;
      return !e && Vt(u, "iterate", xa), c.forEach((f, h) => a.call(r, y(f), y(h), o));
    }
  };
  return yt(
    i,
    e ? {
      add: us("add"),
      set: us("set"),
      delete: us("delete"),
      clear: us("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ze(this), o = cs(r), c = /* @__PURE__ */ Ze(a), u = !t && !/* @__PURE__ */ Si(a) && !/* @__PURE__ */ Sn(a) ? c : a;
        return o.has.call(r, u) || It(a, u) && o.has.call(r, a) || It(c, u) && o.has.call(r, c) || (r.add(u), pn(r, "add", u, u)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ Si(r) && !/* @__PURE__ */ Sn(r) && (r = /* @__PURE__ */ Ze(r));
        const o = /* @__PURE__ */ Ze(this), { has: c, get: u } = cs(o);
        let y = c.call(o, a);
        y || (a = /* @__PURE__ */ Ze(a), y = c.call(o, a));
        const f = u.call(o, a);
        return o.set(a, r), y ? It(r, f) && pn(o, "set", a, r) : pn(o, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ze(this), { has: o, get: c } = cs(r);
        let u = o.call(r, a);
        u || (a = /* @__PURE__ */ Ze(a), u = o.call(r, a)), c && c.call(r, a);
        const y = r.delete(a);
        return u && pn(r, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ Ze(this), r = a.size !== 0, o = a.clear();
        return r && pn(
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
    i[a] = Vb(a, e, t);
  }), i;
}
function ju(e, t) {
  const i = Kb(e, t);
  return (n, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? n : Reflect.get(
    Qe(i, a) && a in n ? i : n,
    a,
    r
  );
}
const Gb = {
  get: /* @__PURE__ */ ju(!1, !1)
}, qb = {
  get: /* @__PURE__ */ ju(!1, !0)
}, Wb = {
  get: /* @__PURE__ */ ju(!0, !1)
};
const uh = /* @__PURE__ */ new WeakMap(), dh = /* @__PURE__ */ new WeakMap(), fh = /* @__PURE__ */ new WeakMap(), Yb = /* @__PURE__ */ new WeakMap();
function Xb(e) {
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
  return /* @__PURE__ */ Sn(e) ? e : Bu(
    e,
    !1,
    jb,
    Gb,
    uh
  );
}
// @__NO_SIDE_EFFECTS__
function Zb(e) {
  return Bu(
    e,
    !1,
    Hb,
    qb,
    dh
  );
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  return Bu(
    e,
    !0,
    Bb,
    Wb,
    fh
  );
}
function Bu(e, t, i, n, a) {
  if (!et(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const o = Xb(yb(e));
  if (o === 0)
    return e;
  const c = new Proxy(
    e,
    o === 2 ? n : i
  );
  return a.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function Na(e) {
  return /* @__PURE__ */ Sn(e) ? /* @__PURE__ */ Na(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Si(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Hu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ze(t) : e;
}
function Jb(e) {
  return !Qe(e, "__v_skip") && Object.isExtensible(e) && Yp(e, "__v_skip", !0), e;
}
const $i = (e) => et(e) ? /* @__PURE__ */ Rt(e) : e, sr = (e) => et(e) ? /* @__PURE__ */ _o(e) : e;
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return hh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function ph(e) {
  return hh(e, !0);
}
function hh(e, t) {
  return /* @__PURE__ */ Wt(e) ? e : new Qb(e, t);
}
class Qb {
  constructor(t, i) {
    this.dep = new Pl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? t : /* @__PURE__ */ Ze(t), this._value = i ? t : $i(t), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const i = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Si(t) || /* @__PURE__ */ Sn(t);
    t = n ? t : /* @__PURE__ */ Ze(t), It(t, i) && (this._rawValue = t, this._value = n ? t : $i(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Wt(e) ? e.value : e;
}
function bn(e) {
  return $e(e) ? e() : g(e);
}
const em = {
  get: (e, t, i) => t === "__v_raw" ? e : g(Reflect.get(e, t, i)),
  set: (e, t, i, n) => {
    const a = e[t];
    return /* @__PURE__ */ Wt(a) && !/* @__PURE__ */ Wt(i) ? (a.value = i, !0) : Reflect.set(e, t, i, n);
  }
};
function vh(e) {
  return /* @__PURE__ */ Na(e) ? e : new Proxy(e, em);
}
class tm {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const i = this.dep = new Pl(), { get: n, set: a } = t(i.track.bind(i), i.trigger.bind(i));
    this._get = n, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function im(e) {
  return new tm(e);
}
class nm {
  constructor(t, i, n) {
    this.fn = t, this.setter = i, this._value = void 0, this.dep = new Pl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = mo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    st !== this)
      return th(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ah(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function am(e, t, i = !1) {
  let n, a;
  return $e(e) ? n = e : (n = e.get, a = e.set), new nm(n, a, i);
}
const ds = {}, xs = /* @__PURE__ */ new WeakMap();
let _a;
function rm(e, t = !1, i = _a) {
  if (i) {
    let n = xs.get(i);
    n || xs.set(i, n = []), n.push(e);
  }
}
function om(e, t, i = We) {
  const { immediate: n, deep: a, once: r, scheduler: o, augmentJob: c, call: u } = i, y = (j) => a ? j : /* @__PURE__ */ Si(j) || a === !1 || a === 0 ? hn(j, 1) : hn(j);
  let f, h, T, C, N = !1, E = !1;
  if (/* @__PURE__ */ Wt(e) ? (h = () => e.value, N = /* @__PURE__ */ Si(e)) : /* @__PURE__ */ Na(e) ? (h = () => y(e), N = !0) : Oe(e) ? (E = !0, N = e.some((j) => /* @__PURE__ */ Na(j) || /* @__PURE__ */ Si(j)), h = () => e.map((j) => {
    if (/* @__PURE__ */ Wt(j))
      return j.value;
    if (/* @__PURE__ */ Na(j))
      return y(j);
    if ($e(j))
      return u ? u(j, 2) : j();
  })) : $e(e) ? t ? h = u ? () => u(e, 2) : e : h = () => {
    if (T) {
      _n();
      try {
        T();
      } finally {
        wn();
      }
    }
    const j = _a;
    _a = f;
    try {
      return u ? u(e, 3, [C]) : e(C);
    } finally {
      _a = j;
    }
  } : h = wi, t && a) {
    const j = h, Z = a === !0 ? 1 / 0 : a;
    h = () => hn(j(), Z);
  }
  const R = Ib(), D = () => {
    f.stop(), R && R.active && Fu(R.effects, f);
  };
  if (r && t) {
    const j = t;
    t = (...Z) => {
      const x = j(...Z);
      return D(), x;
    };
  }
  let $ = E ? new Array(e.length).fill(ds) : ds;
  const G = (j) => {
    if (!(!(f.flags & 1) || !f.dirty && !j))
      if (t) {
        const Z = f.run();
        if (j || a || N || (E ? Z.some((x, J) => It(x, $[J])) : It(Z, $))) {
          T && T();
          const x = _a;
          _a = f;
          try {
            const J = [
              Z,
              // pass undefined as the old value when it's changed for the first time
              $ === ds ? void 0 : E && $[0] === ds ? [] : $,
              C
            ];
            $ = Z, u ? u(t, 3, J) : (
              // @ts-expect-error
              t(...J)
            );
          } finally {
            _a = x;
          }
        }
      } else
        f.run();
  };
  return c && c(G), f = new Qp(h), f.scheduler = o ? () => o(G, !1) : G, C = (j) => rm(j, !1, f), T = f.onStop = () => {
    const j = xs.get(f);
    if (j) {
      if (u)
        u(j, 4);
      else
        for (const Z of j) Z();
      xs.delete(f);
    }
  }, t ? n ? G(!0) : $ = f.run() : o ? o(G.bind(null, !0), !0) : f.run(), D.pause = f.pause.bind(f), D.resume = f.resume.bind(f), D.stop = D, D;
}
function hn(e, t = 1 / 0, i) {
  if (t <= 0 || !et(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t))
    return e;
  if (i.set(e, t), t--, /* @__PURE__ */ Wt(e))
    hn(e.value, t, i);
  else if (Oe(e))
    for (let n = 0; n < e.length; n++)
      hn(e[n], t, i);
  else if (Ra(e) || Vn(e))
    e.forEach((n) => {
      hn(n, t, i);
    });
  else if (Wp(e)) {
    for (const n in e)
      hn(e[n], t, i);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && hn(e[n], t, i);
  }
  return e;
}
function Do(e, t, i, n) {
  try {
    return n ? e(...n) : e();
  } catch (a) {
    Fl(a, t, i);
  }
}
function Ci(e, t, i, n) {
  if ($e(e)) {
    const a = Do(e, t, i, n);
    return a && Gp(a) && a.catch((r) => {
      Fl(r, t, i);
    }), a;
  }
  if (Oe(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(Ci(e[r], t, i, n));
    return a;
  }
}
function Fl(e, t, i, n = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || We;
  if (t) {
    let c = t.parent;
    const u = t.proxy, y = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; c; ) {
      const f = c.ec;
      if (f) {
        for (let h = 0; h < f.length; h++)
          if (f[h](e, u, y) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      _n(), Do(r, null, 10, [
        e,
        u,
        y
      ]), wn();
      return;
    }
  }
  sm(e, i, a, n, o);
}
function sm(e, t, i, n = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const ii = [];
let Vi = -1;
const er = [];
let Bn = null, Xa = 0;
const gh = /* @__PURE__ */ Promise.resolve();
let Ns = null;
function ti(e) {
  const t = Ns || gh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function lm(e) {
  let t = Vi + 1, i = ii.length;
  for (; t < i; ) {
    const n = t + i >>> 1, a = ii[n], r = wo(a);
    r < e || r === e && a.flags & 2 ? t = n + 1 : i = n;
  }
  return t;
}
function Vu(e) {
  if (!(e.flags & 1)) {
    const t = wo(e), i = ii[ii.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= wo(i) ? ii.push(e) : ii.splice(lm(t), 0, e), e.flags |= 1, bh();
  }
}
function bh() {
  Ns || (Ns = gh.then(_h));
}
function mh(e) {
  if (!Oe(e))
    Bn && e.id === -1 ? Bn.splice(Xa + 1, 0, e) : e.flags & 1 || (er.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      er.push(e[t]);
  bh();
}
function rf(e, t, i = Vi + 1) {
  for (; i < ii.length; i++) {
    const n = ii[i];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ii.splice(i, 1), i--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function yh(e) {
  if (er.length) {
    const t = [...new Set(er)].sort(
      (i, n) => wo(i) - wo(n)
    );
    if (er.length = 0, Bn) {
      for (let i = 0; i < t.length; i++)
        Bn.push(t[i]);
      return;
    }
    for (Bn = t, Xa = 0; Xa < Bn.length; Xa++) {
      const i = Bn[Xa];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    Bn = null, Xa = 0;
  }
}
const wo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function _h(e) {
  try {
    for (Vi = 0; Vi < ii.length; Vi++) {
      const t = ii[Vi];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Do(
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
    Vi = -1, ii.length = 0, yh(), Ns = null, (ii.length || er.length) && _h();
  }
}
let $t = null, Dl = null;
function Ls(e) {
  const t = $t;
  return $t = e, Dl = e && e.type.__scopeId || null, t;
}
function cm(e) {
  Dl = e;
}
function um() {
  Dl = null;
}
const dm = (e) => Pe;
function Pe(e, t = $t, i) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && Fs(-1);
    const r = Ls(t), o = mn.length;
    let c;
    try {
      c = e(...a);
    } finally {
      for (let u = mn.length; u > o; u--) Zu();
      Ls(r), n._d && Fs(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ie(e, t) {
  if ($t === null)
    return e;
  const i = Hl($t), n = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, o, c, u = We] = t[a];
    r && ($e(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && hn(o), n.push({
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
function ha(e, t, i, n) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const c = a[o];
    r && (c.oldValue = r[o].value);
    let u = c.dir[n];
    u && (_n(), Ci(u, i, 8, [
      e.el,
      c,
      e,
      t
    ]), wn());
  }
}
function mi(e, t) {
  if (Gt) {
    let i = Gt.provides;
    const n = Gt.parent && Gt.parent.provides;
    n === i && (i = Gt.provides = Object.create(n)), i[e] = t;
  }
}
function Kt(e, t, i = !1) {
  const n = Pa();
  if (n || ir) {
    let a = ir ? ir._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return i && $e(t) ? t.call(n && n.proxy) : t;
  }
}
const fm = /* @__PURE__ */ Symbol.for("v-scx"), pm = () => Kt(fm);
function hm(e, t) {
  return Ml(e, null, t);
}
function vm(e, t) {
  return Ml(
    e,
    null,
    { flush: "sync" }
  );
}
function Xe(e, t, i) {
  return Ml(e, t, i);
}
function Ml(e, t, i = We) {
  const { immediate: n, deep: a, flush: r, once: o } = i, c = yt({}, i), u = t && n || !t && r !== "post";
  let y;
  if (Ao) {
    if (r === "sync") {
      const C = pm();
      y = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!u) {
      const C = () => {
      };
      return C.stop = wi, C.resume = wi, C.pause = wi, C;
    }
  }
  const f = Gt;
  c.call = (C, N, E) => Ci(C, f, N, E);
  let h = !1;
  r === "post" ? c.scheduler = (C) => {
    ei(C, f && f.suspense);
  } : r !== "sync" && (h = !0, c.scheduler = (C, N) => {
    N ? C() : Vu(C);
  }), c.augmentJob = (C) => {
    t && (C.flags |= 4), h && (C.flags |= 2, f && (C.id = f.uid, C.i = f));
  };
  const T = om(e, t, c);
  return Ao && (y ? y.push(T) : u && T()), T;
}
function gm(e, t, i) {
  const n = this.proxy, a = lt(e) ? e.includes(".") ? wh(n, e) : () => n[e] : e.bind(n, n);
  let r;
  $e(t) ? r = t : (r = t.handler, i = t);
  const o = Uo(this), c = Ml(a, r.bind(n), i);
  return o(), c;
}
function wh(e, t) {
  const i = t.split(".");
  return () => {
    let n = e;
    for (let a = 0; a < i.length && n; a++)
      n = n[i[a]];
    return n;
  };
}
const zn = /* @__PURE__ */ new WeakMap(), Sh = /* @__PURE__ */ Symbol("_vte"), zl = (e) => e.__isTeleport, Sa = (e) => e && (e.disabled || e.disabled === ""), bm = (e) => e && (e.defer || e.defer === ""), of = (e) => typeof SVGElement < "u" && e instanceof SVGElement, sf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ou = (e, t) => {
  const i = e && e.to;
  return lt(i) ? t ? t(i) : null : i;
}, mm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, i, n, a, r, o, c, u, y) {
    const {
      mc: f,
      pc: h,
      pbc: T,
      o: { insert: C, querySelector: N, createText: E, createComment: R, parentNode: D }
    } = y, $ = Sa(t.props);
    let { dynamicChildren: G } = t;
    const j = (J, de, Y) => {
      J.shapeFlag & 16 && f(
        J.children,
        de,
        Y,
        a,
        r,
        o,
        c,
        u
      );
    }, Z = (J = t) => {
      const de = Sa(J.props), Y = J.target = ou(J.props, N), le = su(Y, J, E, C);
      Y && (o !== "svg" && of(Y) ? o = "svg" : o !== "mathml" && sf(Y) && (o = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(Y), de || (j(J, Y, le), Yr(J, !1)));
    }, x = (J) => {
      const de = () => {
        if (zn.get(J) === de) {
          if (zn.delete(J), Sa(J.props)) {
            const Y = D(J.el) || i;
            j(J, Y, J.anchor), Yr(J, !0);
          }
          Z(J);
        }
      };
      zn.set(J, de), ei(de, r);
    };
    if (e == null) {
      const J = t.el = E(""), de = t.anchor = E("");
      if (C(J, i, n), C(de, i, n), bm(t.props) || r && r.pendingBranch) {
        x(t);
        return;
      }
      $ && (j(t, i, de), Yr(t, !0)), Z();
    } else {
      t.el = e.el;
      const J = t.anchor = e.anchor, de = zn.get(e);
      if (de) {
        de.flags |= 8, zn.delete(e), x(t);
        return;
      }
      t.targetStart = e.targetStart;
      const Y = t.target = e.target, le = t.targetAnchor = e.targetAnchor, he = Sa(e.props), ne = he ? i : Y, oe = he ? J : le;
      if (o === "svg" || of(Y) ? o = "svg" : (o === "mathml" || sf(Y)) && (o = "mathml"), G ? (T(
        e.dynamicChildren,
        G,
        ne,
        a,
        r,
        o,
        c
      ), Xu(e, t, !0)) : u || h(
        e,
        t,
        ne,
        oe,
        a,
        r,
        o,
        c,
        !1
      ), $)
        he ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : fs(
          t,
          i,
          J,
          y,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const M = ou(t.props, N);
        M && (t.target = M, fs(
          t,
          M,
          null,
          y,
          0
        ));
      } else he && fs(
        t,
        Y,
        le,
        y,
        1
      );
      Yr(t, $);
    }
  },
  remove(e, t, i, { um: n, o: { remove: a } }, r) {
    const {
      shapeFlag: o,
      children: c,
      anchor: u,
      targetStart: y,
      targetAnchor: f,
      target: h,
      props: T
    } = e, C = Sa(T), N = r || !C, E = zn.get(e);
    if (E && (E.flags |= 8, zn.delete(e)), h && (a(y), a(f)), r && a(u), !E && (C || h) && o & 16)
      for (let R = 0; R < c.length; R++) {
        const D = c[R];
        n(
          D,
          t,
          i,
          N,
          !!D.dynamicChildren
        );
      }
  },
  move: fs,
  hydrate: ym
};
function fs(e, t, i, { o: { insert: n }, m: a }, r = 2) {
  r === 0 && n(e.targetAnchor, t, i);
  const { el: o, anchor: c, shapeFlag: u, children: y, props: f } = e, h = r === 2;
  if (h && n(o, t, i), !zn.has(e) && (!h || Sa(f)) && u & 16)
    for (let T = 0; T < y.length; T++)
      a(
        y[T],
        t,
        i,
        2
      );
  h && n(c, t, i);
}
function ym(e, t, i, n, a, r, {
  o: { nextSibling: o, parentNode: c, querySelector: u, insert: y, createText: f }
}, h) {
  function T(R, D) {
    let $ = D;
    for (; $; ) {
      if ($ && $.nodeType === 8) {
        if ($.data === "teleport start anchor")
          t.targetStart = $;
        else if ($.data === "teleport anchor") {
          t.targetAnchor = $, R._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      $ = o($);
    }
  }
  function C(R, D) {
    D.anchor = h(
      o(R),
      D,
      c(R),
      i,
      n,
      a,
      r
    );
  }
  const N = t.target = ou(
    t.props,
    u
  ), E = Sa(t.props);
  if (N) {
    const R = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (E ? (C(e, t), T(N, R), t.targetAnchor || su(
      N,
      t,
      f,
      y,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      c(e) === N ? e : null
    )) : (t.anchor = o(e), T(N, R), t.targetAnchor || su(N, t, f, y), h(
      R && o(R),
      t,
      N,
      i,
      n,
      a,
      r
    ))), Yr(t, E);
  } else E && t.shapeFlag & 16 && (C(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const Ch = mm;
function Yr(e, t) {
  const i = e.ctx;
  if (i && i.ut) {
    let n, a;
    for (t ? (n = e.el, a = e.anchor) : (n = e.targetStart, a = e.targetAnchor); n && n !== a; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", i.uid), n = n.nextSibling;
    i.ut();
  }
}
function su(e, t, i, n, a = null) {
  const r = t.targetStart = i(""), o = t.targetAnchor = i("");
  return r[Sh] = o, e && (n(r, e, a), n(o, e, a)), o;
}
const yi = /* @__PURE__ */ Symbol("_leaveCb"), Ur = /* @__PURE__ */ Symbol("_enterCb");
function _m() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Zn(() => {
    e.isMounted = !0;
  }), lr(() => {
    e.isUnmounting = !0;
  }), e;
}
const vi = [Function, Array], Th = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: vi,
  onEnter: vi,
  onAfterEnter: vi,
  onEnterCancelled: vi,
  // leave
  onBeforeLeave: vi,
  onLeave: vi,
  onAfterLeave: vi,
  onLeaveCancelled: vi,
  // appear
  onBeforeAppear: vi,
  onAppear: vi,
  onAfterAppear: vi,
  onAppearCancelled: vi
}, kh = (e) => {
  const t = e.subTree;
  return t.component ? kh(t.component) : t;
}, wm = {
  name: "BaseTransition",
  props: Th,
  setup(e, { slots: t }) {
    const i = Pa(), n = _m();
    return () => {
      const a = t.default && Oh(t.default(), !0), r = a && a.length ? Eh(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        i.subTree ? F() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ Ze(e), { mode: c } = o;
      if (n.isLeaving)
        return wc(r);
      const u = Rs(r);
      if (!u)
        return wc(r);
      let y = lu(
        u,
        o,
        n,
        i,
        // #11061, ensure enterHooks is fresh after clone
        (h) => y = h
      );
      u.type !== Pt && So(u, y);
      let f = i.subTree && Rs(i.subTree);
      if (f && f.type !== Pt && !Ca(f, u) && kh(i).type !== Pt) {
        let h = lu(
          f,
          o,
          n,
          i
        );
        if (So(f, h), c === "out-in" && u.type !== Pt)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, i.job.flags & 8 || i.update(), delete h.afterLeave, f = void 0;
          }, wc(r);
        c === "in-out" && u.type !== Pt ? h.delayLeave = (T, C, N) => {
          const E = Ah(
            n,
            f
          );
          E[String(f.key)] = f, T[yi] = () => {
            C(), T[yi] = void 0, delete y.delayedLeave, f = void 0;
          }, y.delayedLeave = () => {
            N(), delete y.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function Eh(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const i of e)
      if (i.type !== Pt) {
        t = i;
        break;
      }
  }
  return t;
}
const Sm = wm;
function Ah(e, t) {
  const { leavingVNodes: i } = e;
  let n = i.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), i.set(t.type, n)), n;
}
function lu(e, t, i, n, a) {
  const {
    appear: r,
    mode: o,
    persisted: c = !1,
    onBeforeEnter: u,
    onEnter: y,
    onAfterEnter: f,
    onEnterCancelled: h,
    onBeforeLeave: T,
    onLeave: C,
    onAfterLeave: N,
    onLeaveCancelled: E,
    onBeforeAppear: R,
    onAppear: D,
    onAfterAppear: $,
    onAppearCancelled: G
  } = t, j = String(e.key), Z = Ah(i, e), x = (Y, le) => {
    Y && Ci(
      Y,
      n,
      9,
      le
    );
  }, J = (Y, le) => {
    const he = le[1];
    x(Y, le), Oe(Y) ? Y.every((ne) => ne.length <= 1) && he() : Y.length <= 1 && he();
  }, de = {
    mode: o,
    persisted: c,
    beforeEnter(Y) {
      let le = u;
      if (!i.isMounted)
        if (r)
          le = R || u;
        else
          return;
      Y[yi] && Y[yi](
        !0
        /* cancelled */
      );
      const he = Z[j];
      he && Ca(e, he) && he.el[yi] && he.el[yi](), x(le, [Y]);
    },
    enter(Y) {
      if (Z[j] === e) return;
      let le = y, he = f, ne = h;
      if (!i.isMounted)
        if (r)
          le = D || y, he = $ || f, ne = G || h;
        else
          return;
      let oe = !1;
      Y[Ur] = (z) => {
        oe || (oe = !0, z ? x(ne, [Y]) : x(he, [Y]), de.delayedLeave && de.delayedLeave(), Y[Ur] = void 0);
      };
      const M = Y[Ur].bind(null, !1);
      le ? J(le, [Y, M]) : M();
    },
    leave(Y, le) {
      const he = String(e.key);
      if (Y[Ur] && Y[Ur](
        !0
        /* cancelled */
      ), i.isUnmounting)
        return le();
      x(T, [Y]);
      let ne = !1;
      Y[yi] = (M) => {
        ne || (ne = !0, le(), M ? x(E, [Y]) : x(N, [Y]), Y[yi] = void 0, Z[he] === e && delete Z[he]);
      };
      const oe = Y[yi].bind(null, !1);
      Z[he] = e, C ? J(C, [Y, oe]) : oe();
    },
    clone(Y) {
      const le = lu(
        Y,
        t,
        i,
        n,
        a
      );
      return a && a(le), le;
    }
  };
  return de;
}
function wc(e) {
  if (Ul(e))
    return e = Yn(e), e.children = null, e;
}
function Rs(e) {
  if (!Ul(e))
    return zl(e.type) && e.children ? Eh(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: i } = e;
  if (i) {
    if (t & 16)
      return i[0];
    if (t & 32 && $e(i.default))
      return i.default();
  }
}
function So(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const i = e.component.subTree;
    So(
      zl(i.type) && Rs(i) || i,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Oh(e, t = !1, i) {
  let n = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const c = i == null ? o.key : String(i) + String(o.key != null ? o.key : r);
    o.type === ae ? (o.patchFlag & 128 && a++, n = n.concat(
      Oh(o.children, t, c)
    )) : (t || o.type !== Pt) && n.push(c != null ? Yn(o, { key: c }) : o);
  }
  if (a > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ft(e, t) {
  return $e(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    yt({ name: e.name }, t, { setup: e })
  ) : e;
}
function xh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Cm(e) {
  const t = Pa(), i = /* @__PURE__ */ ph(null);
  if (t) {
    const a = t.refs === We ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    });
  }
  return i;
}
function lf(e, t) {
  let i;
  return !!((i = Object.getOwnPropertyDescriptor(e, t)) && !i.configurable);
}
const Is = /* @__PURE__ */ new WeakMap();
function ao(e, t, i, n, a = !1) {
  if (Oe(e)) {
    e.forEach(
      (E, R) => ao(
        E,
        t && (Oe(t) ? t[R] : t),
        i,
        n,
        a
      )
    );
    return;
  }
  if (tr(n) && !a) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && ao(e, t, i, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? Hl(n.component) : n.el, o = a ? null : r, { i: c, r: u } = e, y = t && t.r, f = c.refs === We ? c.refs = {} : c.refs, h = c.setupState, T = /* @__PURE__ */ Ze(h), C = h === We ? Kp : (E) => lf(f, E) ? !1 : Qe(T, E), N = (E, R) => !(R && lf(f, R));
  if (y != null && y !== u) {
    if (cf(t), lt(y))
      f[y] = null, C(y) && (h[y] = null);
    else if (/* @__PURE__ */ Wt(y)) {
      const E = t;
      N(y, E.k) && (y.value = null), E.k && (f[E.k] = null);
    }
  }
  if ($e(u))
    Do(u, c, 12, [o, f]);
  else {
    const E = lt(u), R = /* @__PURE__ */ Wt(u);
    if (E || R) {
      const D = () => {
        if (e.f) {
          const $ = E ? C(u) ? h[u] : f[u] : N() || !e.k ? u.value : f[e.k];
          if (a)
            Oe($) && Fu($, r);
          else if (Oe($))
            $.includes(r) || $.push(r);
          else if (E)
            f[u] = [r], C(u) && (h[u] = f[u]);
          else {
            const G = [r];
            N(u, e.k) && (u.value = G), e.k && (f[e.k] = G);
          }
        } else E ? (f[u] = o, C(u) && (h[u] = o)) : R && (N(u, e.k) && (u.value = o), e.k && (f[e.k] = o));
      };
      if (o) {
        const $ = () => {
          D(), Is.delete(e);
        };
        $.id = -1, Is.set(e, $), ei($, i);
      } else
        cf(e), D();
    }
  }
}
function cf(e) {
  const t = Is.get(e);
  t && (t.flags |= 8, Is.delete(e));
}
Il().requestIdleCallback;
Il().cancelIdleCallback;
const tr = (e) => !!e.type.__asyncLoader, Ul = (e) => e.type.__isKeepAlive;
function Tm(e, t) {
  Nh(e, "a", t);
}
function km(e, t) {
  Nh(e, "da", t);
}
function Nh(e, t, i = Gt) {
  const n = e.__wdc || (e.__wdc = () => {
    let a = i;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (jl(t, n, i), i) {
    let a = i.parent;
    for (; a && a.parent; )
      Ul(a.parent.vnode) && Em(n, t, i, a), a = a.parent;
  }
}
function Em(e, t, i, n) {
  const a = jl(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Mo(() => {
    Fu(n[t], a);
  }, i);
}
function jl(e, t, i = Gt, n = !1) {
  if (i) {
    const a = i[e] || (i[e] = []), r = t.__weh || (t.__weh = (...o) => {
      _n();
      const c = Uo(i), u = Ci(t, i, e, o);
      return c(), wn(), u;
    });
    return n ? a.unshift(r) : a.push(r), r;
  }
}
const kn = (e) => (t, i = Gt) => {
  (!Ao || e === "sp") && jl(e, (...n) => t(...n), i);
}, Lh = kn("bm"), Zn = kn("m"), Rh = kn(
  "bu"
), Am = kn("u"), lr = kn(
  "bum"
), Mo = kn("um"), Om = kn(
  "sp"
), xm = kn("rtg"), Nm = kn("rtc");
function Lm(e, t = Gt) {
  jl("ec", e, t);
}
const Ku = "components", Rm = "directives";
function Ve(e, t) {
  return qu(Ku, e, !0, t) || e;
}
const Ih = /* @__PURE__ */ Symbol.for("v-ndc");
function Gu(e) {
  return lt(e) ? qu(Ku, e, !1) || e : e || Ih;
}
function uf(e) {
  return qu(Rm, e);
}
function qu(e, t, i = !0, n = !1) {
  const a = $t || Gt;
  if (a) {
    const r = a.type;
    if (e === Ku) {
      const c = hy(
        r,
        !1
      );
      if (c && (c === t || c === qt(t) || c === Ll(qt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      df(a[e] || r[e], t) || // global registration
      df(a.appContext[e], t)
    );
    return !o && n ? r : o;
  }
}
function df(e, t) {
  return e && (e[t] || e[qt(t)] || e[Ll(qt(t))]);
}
function Ce(e, t, i, n) {
  let a;
  const r = i, o = Oe(e);
  if (o || lt(e)) {
    const c = o && /* @__PURE__ */ Na(e);
    let u = !1, y = !1;
    c && (u = !/* @__PURE__ */ Si(e), y = /* @__PURE__ */ Sn(e), e = $l(e)), a = new Array(e.length);
    for (let f = 0, h = e.length; f < h; f++)
      a[f] = t(
        u ? y ? sr($i(e[f])) : $i(e[f]) : e[f],
        f,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let c = 0; c < e; c++)
      a[c] = t(c + 1, c, void 0, r);
  } else if (et(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (c, u) => t(c, u, void 0, r)
      );
    else {
      const c = Object.keys(e);
      a = new Array(c.length);
      for (let u = 0, y = c.length; u < y; u++) {
        const f = c[u];
        a[u] = t(e[f], f, u, r);
      }
    }
  else
    a = [];
  return a;
}
function De(e, t, i, n, a, r) {
  if (i == null && (i = {}), $t.ce || $t.parent && tr($t.parent) && $t.parent.ce) {
    const y = i, f = Object.keys(y).length > 0;
    return t !== "default" && (y.name = t), m(), je(
      ae,
      null,
      [Ae("slot", y, n && n())],
      f ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const c = mn.length;
  m();
  let u;
  try {
    const y = o && Ph(o(i)), f = i.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    y && y.key;
    u = je(
      ae,
      {
        key: (f && !Pi(f) ? f : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!y && n ? "_fb" : "")
      },
      y || (n ? n() : []),
      y && e._ === 1 ? 64 : -2
    );
  } catch (y) {
    for (let f = mn.length; f > c; f--) Zu();
    throw y;
  } finally {
    o && o._c && (o._d = !0);
  }
  return !a && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), u;
}
function Ph(e) {
  return e.some((t) => To(t) ? !(t.type === Pt || t.type === ae && !Ph(t.children)) : !0) ? e : null;
}
const cu = (e) => e ? iv(e) ? Hl(e) : cu(e.parent) : null, ro = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ yt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => cu(e.parent),
    $root: (e) => cu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Dh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Vu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ti.bind(e.proxy)),
    $watch: (e) => gm.bind(e)
  })
), Sc = (e, t) => e !== We && !e.__isScriptSetup && Qe(e, t), Im = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: i, setupState: n, data: a, props: r, accessCache: o, type: c, appContext: u } = e;
    if (t[0] !== "$") {
      const T = o[t];
      if (T !== void 0)
        switch (T) {
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
        if (Sc(n, t))
          return o[t] = 1, n[t];
        if (a !== We && Qe(a, t))
          return o[t] = 2, a[t];
        if (Qe(r, t))
          return o[t] = 3, r[t];
        if (i !== We && Qe(i, t))
          return o[t] = 4, i[t];
        uu && (o[t] = 0);
      }
    }
    const y = ro[t];
    let f, h;
    if (y)
      return t === "$attrs" && Vt(e.attrs, "get", ""), y(e);
    if (
      // css module (injected by vue-loader)
      (f = c.__cssModules) && (f = f[t])
    )
      return f;
    if (i !== We && Qe(i, t))
      return o[t] = 4, i[t];
    if (
      // global properties
      h = u.config.globalProperties, Qe(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, i) {
    const { data: n, setupState: a, ctx: r } = e;
    return Sc(a, t) ? (a[t] = i, !0) : n !== We && Qe(n, t) ? (n[t] = i, !0) : Qe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = i, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: i, ctx: n, appContext: a, props: r, type: o }
  }, c) {
    let u;
    return !!(i[c] || e !== We && c[0] !== "$" && Qe(e, c) || Sc(t, c) || Qe(r, c) || Qe(n, c) || Qe(ro, c) || Qe(a.config.globalProperties, c) || (u = o.__cssModules) && u[c]);
  },
  defineProperty(e, t, i) {
    return i.get != null ? e._.accessCache[t] = 0 : Qe(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
  }
};
function Pm() {
  return $h().slots;
}
function $m() {
  return $h().attrs;
}
function $h(e) {
  const t = Pa();
  return t.setupContext || (t.setupContext = av(t));
}
function Ps(e) {
  return Oe(e) ? e.reduce(
    (t, i) => (t[i] = null, t),
    {}
  ) : e;
}
function Fm(e, t) {
  return !e || !t ? e || t : Oe(e) && Oe(t) ? e.concat(t) : yt({}, Ps(e), Ps(t));
}
let uu = !0;
function Dm(e) {
  const t = Dh(e), i = e.proxy, n = e.ctx;
  uu = !1, t.beforeCreate && ff(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: o,
    watch: c,
    provide: u,
    inject: y,
    // lifecycle
    created: f,
    beforeMount: h,
    mounted: T,
    beforeUpdate: C,
    updated: N,
    activated: E,
    deactivated: R,
    beforeDestroy: D,
    beforeUnmount: $,
    destroyed: G,
    unmounted: j,
    render: Z,
    renderTracked: x,
    renderTriggered: J,
    errorCaptured: de,
    serverPrefetch: Y,
    // public API
    expose: le,
    inheritAttrs: he,
    // assets
    components: ne,
    directives: oe,
    filters: M
  } = t;
  if (y && Mm(y, n, null), o)
    for (const ce in o) {
      const te = o[ce];
      $e(te) && (n[ce] = te.bind(i));
    }
  if (a) {
    const ce = a.call(i, i);
    et(ce) && (e.data = /* @__PURE__ */ Rt(ce));
  }
  if (uu = !0, r)
    for (const ce in r) {
      const te = r[ce], be = $e(te) ? te.bind(i, i) : $e(te.get) ? te.get.bind(i, i) : wi, ve = !$e(te) && $e(te.set) ? te.set.bind(i) : wi, Ne = H({
        get: be,
        set: ve
      });
      Object.defineProperty(n, ce, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: (pe) => Ne.value = pe
      });
    }
  if (c)
    for (const ce in c)
      Fh(c[ce], n, i, ce);
  if (u) {
    const ce = $e(u) ? u.call(i) : u;
    Reflect.ownKeys(ce).forEach((te) => {
      mi(te, ce[te]);
    });
  }
  f && ff(f, e, "c");
  function X(ce, te) {
    Oe(te) ? te.forEach((be) => ce(be.bind(i))) : te && ce(te.bind(i));
  }
  if (X(Lh, h), X(Zn, T), X(Rh, C), X(Am, N), X(Tm, E), X(km, R), X(Lm, de), X(Nm, x), X(xm, J), X(lr, $), X(Mo, j), X(Om, Y), Oe(le))
    if (le.length) {
      const ce = e.exposed || (e.exposed = {});
      le.forEach((te) => {
        Object.defineProperty(ce, te, {
          get: () => i[te],
          set: (be) => i[te] = be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Z && e.render === wi && (e.render = Z), he != null && (e.inheritAttrs = he), ne && (e.components = ne), oe && (e.directives = oe), Y && xh(e);
}
function Mm(e, t, i = wi) {
  Oe(e) && (e = du(e));
  for (const n in e) {
    const a = e[n];
    let r;
    et(a) ? "default" in a ? r = Kt(
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
function ff(e, t, i) {
  Ci(
    Oe(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    i
  );
}
function Fh(e, t, i, n) {
  let a = n.includes(".") ? wh(i, n) : () => i[n];
  if (lt(e)) {
    const r = t[e];
    $e(r) && Xe(a, r);
  } else if ($e(e))
    Xe(a, e.bind(i));
  else if (et(e))
    if (Oe(e))
      e.forEach((r) => Fh(r, t, i, n));
    else {
      const r = $e(e.handler) ? e.handler.bind(i) : t[e.handler];
      $e(r) && Xe(a, r, e);
    }
}
function Dh(e) {
  const t = e.type, { mixins: i, extends: n } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !a.length && !i && !n ? u = t : (u = {}, a.length && a.forEach(
    (y) => $s(u, y, o, !0)
  ), $s(u, t, o)), et(t) && r.set(t, u), u;
}
function $s(e, t, i, n = !1) {
  const { mixins: a, extends: r } = t;
  r && $s(e, r, i, !0), a && a.forEach(
    (o) => $s(e, o, i, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const c = zm[o] || i && i[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const zm = {
  data: pf,
  props: hf,
  emits: hf,
  // objects
  methods: Xr,
  computed: Xr,
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
  components: Xr,
  directives: Xr,
  // watch
  watch: jm,
  // provide / inject
  provide: pf,
  inject: Um
};
function pf(e, t) {
  return t ? e ? function() {
    return yt(
      $e(e) ? e.call(this, this) : e,
      $e(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Um(e, t) {
  return Xr(du(e), du(t));
}
function du(e) {
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
function Xr(e, t) {
  return e ? yt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function hf(e, t) {
  return e ? Oe(e) && Oe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yt(
    /* @__PURE__ */ Object.create(null),
    Ps(e),
    Ps(t ?? {})
  ) : t;
}
function jm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const i = yt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    i[n] = Qt(e[n], t[n]);
  return i;
}
function Mh() {
  return {
    app: null,
    config: {
      isNativeTag: Kp,
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
let Bm = 0;
function Hm(e, t) {
  return function(n, a = null) {
    $e(n) || (n = yt({}, n)), a != null && !et(a) && (a = null);
    const r = Mh(), o = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const y = r.app = {
      _uid: Bm++,
      _component: n,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: gy,
      get config() {
        return r.config;
      },
      set config(f) {
      },
      use(f, ...h) {
        return o.has(f) || (f && $e(f.install) ? (o.add(f), f.install(y, ...h)) : $e(f) && (o.add(f), f(y, ...h))), y;
      },
      mixin(f) {
        return r.mixins.includes(f) || r.mixins.push(f), y;
      },
      component(f, h) {
        return h ? (r.components[f] = h, y) : r.components[f];
      },
      directive(f, h) {
        return h ? (r.directives[f] = h, y) : r.directives[f];
      },
      mount(f, h, T) {
        if (!u) {
          const C = y._ceVNode || Ae(n, a);
          return C.appContext = r, T === !0 ? T = "svg" : T === !1 && (T = void 0), e(C, f, T), u = !0, y._container = f, f.__vue_app__ = y, Hl(C.component);
        }
      },
      onUnmount(f) {
        c.push(f);
      },
      unmount() {
        u && (Ci(
          c,
          y._instance,
          16
        ), e(null, y._container), delete y._container.__vue_app__);
      },
      provide(f, h) {
        return r.provides[f] = h, y;
      },
      runWithContext(f) {
        const h = ir;
        ir = y;
        try {
          return f();
        } finally {
          ir = h;
        }
      }
    };
    return y;
  };
}
let ir = null;
function zh(e, t, i = We) {
  const n = Pa(), a = qt(t), r = Tn(t), o = Uh(e, a), c = im((u, y) => {
    let f, h = We, T;
    return vm(() => {
      const C = e[a];
      It(f, C) && (f = C, y());
    }), {
      get() {
        return u(), i.get ? i.get(f) : f;
      },
      set(C) {
        const N = i.set ? i.set(C) : C;
        if (!It(N, f) && !(h !== We && It(C, h)))
          return;
        const E = n.vnode.props, R = !!(E && // check if parent has passed v-model
        (t in E || a in E || r in E) && (`onUpdate:${t}` in E || `onUpdate:${a}` in E || `onUpdate:${r}` in E));
        R || (f = C, y()), n.emit(`update:${t}`, N), It(C, h) && (It(C, N) && !It(N, T) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        R && h !== We && !It(N, f)) && y(), h = C, T = N;
      }
    };
  });
  return c[Symbol.iterator] = () => {
    let u = 0;
    return {
      next() {
        return u < 2 ? { value: u++ ? o || We : c, done: !1 } : { done: !0 };
      }
    };
  }, c;
}
const Uh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${qt(t)}Modifiers`] || e[`${Tn(t)}Modifiers`];
function Vm(e, t, ...i) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || We;
  let a = i;
  const r = t.startsWith("update:"), o = r && Uh(n, t.slice(7));
  o && (o.trim && (a = i.map((f) => lt(f) ? f.trim() : f)), o.number && (a = a.map(Rl)));
  let c, u = n[c = gc(t)] || // also try camelCase event handler (#2249)
  n[c = gc(qt(t))];
  !u && r && (u = n[c = gc(Tn(t))]), u && Ci(
    u,
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
    e.emitted[c] = !0, Ci(
      y,
      e,
      6,
      a
    );
  }
}
const Km = /* @__PURE__ */ new WeakMap();
function jh(e, t, i = !1) {
  const n = i ? Km : t.emitsCache, a = n.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let o = {}, c = !1;
  if (!$e(e)) {
    const u = (y) => {
      const f = jh(y, t, !0);
      f && (c = !0, yt(o, f));
    };
    !i && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (et(e) && n.set(e, null), null) : (Oe(r) ? r.forEach((u) => o[u] = null) : yt(o, r), et(e) && n.set(e, o), o);
}
function Bl(e, t) {
  return !e || !Ol(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Qe(e, t[0].toLowerCase() + t.slice(1)) || Qe(e, Tn(t)) || Qe(e, t));
}
function vf(e) {
  const {
    type: t,
    vnode: i,
    proxy: n,
    withProxy: a,
    propsOptions: [r],
    slots: o,
    attrs: c,
    emit: u,
    render: y,
    renderCache: f,
    props: h,
    data: T,
    setupState: C,
    ctx: N,
    inheritAttrs: E
  } = e, R = Ls(e);
  let D, $;
  try {
    if (i.shapeFlag & 4) {
      const j = a || n, Z = j;
      D = Wi(
        y.call(
          Z,
          j,
          f,
          h,
          C,
          T,
          N
        )
      ), $ = c;
    } else {
      const j = t;
      D = Wi(
        j.length > 1 ? j(
          h,
          { attrs: c, slots: o, emit: u }
        ) : j(
          h,
          null
        )
      ), $ = t.props ? c : Gm(c);
    }
  } catch (j) {
    mn.length = 0, Fl(j, e, 1), D = Ae(Pt);
  }
  let G = D;
  if ($ && E !== !1) {
    const j = Object.keys($), { shapeFlag: Z } = G;
    j.length && Z & 7 && (r && j.some(xl) && ($ = qm(
      $,
      r
    )), G = Yn(G, $, !1, !0));
  }
  if (i.dirs && (G = Yn(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(i.dirs) : i.dirs), i.transition) {
    const j = zl(G.type) && Rs(G) || G;
    So(j, i.transition);
  }
  return D = G, Ls(R), D;
}
const Gm = (e) => {
  let t;
  for (const i in e)
    (i === "class" || i === "style" || Ol(i)) && ((t || (t = {}))[i] = e[i]);
  return t;
}, qm = (e, t) => {
  const i = {};
  for (const n in e)
    (!xl(n) || !(n.slice(9) in t)) && (i[n] = e[n]);
  return i;
};
function Wm(e, t, i) {
  const { props: n, children: a, component: r } = e, { props: o, children: c, patchFlag: u } = t, y = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (i && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? gf(n, o, y) : !!o;
    if (u & 8) {
      const f = t.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const T = f[h];
        if (Bh(o, n, T) && !Bl(y, T))
          return !0;
      }
    }
  } else
    return (a || c) && (!c || !c.$stable) ? !0 : n === o ? !1 : n ? o ? gf(n, o, y) : !0 : !!o;
  return !1;
}
function gf(e, t, i) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < n.length; a++) {
    const r = n[a];
    if (Bh(t, e, r) && !Bl(i, r))
      return !0;
  }
  return !1;
}
function Bh(e, t, i) {
  const n = e[i], a = t[i];
  return i === "style" && et(n) && et(a) ? !Wn(n, a) : n !== a;
}
function Ym({ vnode: e, parent: t, suspense: i }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = n, e = a), a === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  i && i.activeBranch === e && (i.vnode.el = n);
}
const Hh = {}, Vh = () => Object.create(Hh), Kh = (e) => Object.getPrototypeOf(e) === Hh;
function Xm(e, t, i, n = !1) {
  const a = {}, r = Vh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Gh(e, t, a, r);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  i ? e.props = n ? a : /* @__PURE__ */ Zb(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Zm(e, t, i, n) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, c = /* @__PURE__ */ Ze(a), [u] = e.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        let T = f[h];
        if (Bl(e.emitsOptions, T))
          continue;
        const C = t[T];
        if (u)
          if (Qe(r, T))
            C !== r[T] && (r[T] = C, y = !0);
          else {
            const N = qt(T);
            a[N] = fu(
              u,
              c,
              N,
              C,
              e,
              !1
            );
          }
        else
          C !== r[T] && (r[T] = C, y = !0);
      }
    }
  } else {
    Gh(e, t, a, r) && (y = !0);
    let f;
    for (const h in c)
      (!t || // for camelCase
      !Qe(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Tn(h)) === h || !Qe(t, f))) && (u ? i && // for camelCase
      (i[h] !== void 0 || // for kebab-case
      i[f] !== void 0) && (a[h] = fu(
        u,
        c,
        h,
        void 0,
        e,
        !0
      )) : delete a[h]);
    if (r !== c)
      for (const h in r)
        (!t || !Qe(t, h)) && (delete r[h], y = !0);
  }
  y && pn(e.attrs, "set", "");
}
function Gh(e, t, i, n) {
  const [a, r] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let u in t) {
      if (to(u))
        continue;
      const y = t[u];
      let f;
      a && Qe(a, f = qt(u)) ? !r || !r.includes(f) ? i[f] = y : (c || (c = {}))[f] = y : Bl(e.emitsOptions, u) || (!(u in n) || y !== n[u]) && (n[u] = y, o = !0);
    }
  if (r) {
    const u = /* @__PURE__ */ Ze(i), y = c || We;
    for (let f = 0; f < r.length; f++) {
      const h = r[f];
      i[h] = fu(
        a,
        u,
        h,
        y[h],
        e,
        !Qe(y, h)
      );
    }
  }
  return o;
}
function fu(e, t, i, n, a, r) {
  const o = e[i];
  if (o != null) {
    const c = Qe(o, "default");
    if (c && n === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && $e(u)) {
        const { propsDefaults: y } = a;
        if (i in y)
          n = y[i];
        else {
          const f = Uo(a);
          n = y[i] = u.call(
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
    ] && (n === "" || n === Tn(i)) && (n = !0));
  }
  return n;
}
const Jm = /* @__PURE__ */ new WeakMap();
function qh(e, t, i = !1) {
  const n = i ? Jm : t.propsCache, a = n.get(e);
  if (a)
    return a;
  const r = e.props, o = {}, c = [];
  let u = !1;
  if (!$e(e)) {
    const f = (h) => {
      u = !0;
      const [T, C] = qh(h, t, !0);
      yt(o, T), C && c.push(...C);
    };
    !i && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !u)
    return et(e) && n.set(e, Qa), Qa;
  if (Oe(r))
    for (let f = 0; f < r.length; f++) {
      const h = qt(r[f]);
      bf(h) && (o[h] = We);
    }
  else if (r)
    for (const f in r) {
      const h = qt(f);
      if (bf(h)) {
        const T = r[f], C = o[h] = Oe(T) || $e(T) ? { type: T } : yt({}, T), N = C.type;
        let E = !1, R = !0;
        if (Oe(N))
          for (let D = 0; D < N.length; ++D) {
            const $ = N[D], G = $e($) && $.name;
            if (G === "Boolean") {
              E = !0;
              break;
            } else G === "String" && (R = !1);
          }
        else
          E = $e(N) && N.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = E, C[
          1
          /* shouldCastTrue */
        ] = R, (E || Qe(C, "default")) && c.push(h);
      }
    }
  const y = [o, c];
  return et(e) && n.set(e, y), y;
}
function bf(e) {
  return e[0] !== "$" && !to(e);
}
const Wu = (e) => e === "_" || e === "_ctx" || e === "$stable", Yu = (e) => Oe(e) ? e.map(Wi) : [Wi(e)], Qm = (e, t, i) => {
  if (t._n)
    return t;
  const n = Pe((...a) => Yu(t(...a)), i);
  return n._c = !1, n;
}, Wh = (e, t, i) => {
  const n = e._ctx;
  for (const a in e) {
    if (Wu(a)) continue;
    const r = e[a];
    if ($e(r))
      t[a] = Qm(a, r, n);
    else if (r != null) {
      const o = Yu(r);
      t[a] = () => o;
    }
  }
}, Yh = (e, t) => {
  const i = Yu(t);
  e.slots.default = () => i;
}, Xh = (e, t, i) => {
  for (const n in t)
    (i || !Wu(n)) && (e[n] = t[n]);
}, ey = (e, t, i) => {
  const n = e.slots = Vh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Xh(n, t, i), i && Yp(n, "_", a, !0)) : Wh(t, n);
  } else t && Yh(e, t);
}, ty = (e, t, i) => {
  const { vnode: n, slots: a } = e;
  let r = !0, o = We;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? i && c === 1 ? r = !1 : Xh(a, t, i) : (r = !t.$stable, Wh(t, a)), o = t;
  } else t && (Yh(e, t), o = { default: 1 });
  if (r)
    for (const c in a)
      !Wu(c) && o[c] == null && delete a[c];
}, ei = oy;
function iy(e) {
  return ny(e);
}
function ny(e, t) {
  const i = Il();
  i.__VUE__ = !0;
  const {
    insert: n,
    remove: a,
    patchProp: r,
    createElement: o,
    createText: c,
    createComment: u,
    setText: y,
    setElementText: f,
    parentNode: h,
    nextSibling: T,
    setScopeId: C = wi,
    insertStaticContent: N
  } = e, E = (w, k, A, I = null, L = null, U = null, q = void 0, K = null, ee = !!k.dynamicChildren) => {
    if (w === k)
      return;
    w && !Ca(w, k) && (I = pt(w), pe(w, L, U, !0), w = null), k.patchFlag === -2 && (ee = !1, k.dynamicChildren = null);
    const { type: V, ref: we, shapeFlag: se } = k;
    switch (V) {
      case zo:
        R(w, k, A, I);
        break;
      case Pt:
        D(w, k, A, I);
        break;
      case Ts:
        w == null && $(k, A, I, q);
        break;
      case ae:
        ne(
          w,
          k,
          A,
          I,
          L,
          U,
          q,
          K,
          ee
        );
        break;
      default:
        se & 1 ? Z(
          w,
          k,
          A,
          I,
          L,
          U,
          q,
          K,
          ee
        ) : se & 6 ? oe(
          w,
          k,
          A,
          I,
          L,
          U,
          q,
          K,
          ee
        ) : (se & 64 || se & 128) && V.process(
          w,
          k,
          A,
          I,
          L,
          U,
          q,
          K,
          ee,
          gt
        );
    }
    we != null && L ? ao(we, w && w.ref, U, k || w, !k) : we == null && w && w.ref != null && ao(w.ref, null, U, w, !0);
  }, R = (w, k, A, I) => {
    if (w == null)
      n(
        k.el = c(k.children),
        A,
        I
      );
    else {
      const L = k.el = w.el;
      k.children !== w.children && y(L, k.children);
    }
  }, D = (w, k, A, I) => {
    w == null ? n(
      k.el = u(k.children || ""),
      A,
      I
    ) : k.el = w.el;
  }, $ = (w, k, A, I) => {
    [w.el, w.anchor] = N(
      w.children,
      k,
      A,
      I,
      w.el,
      w.anchor
    );
  }, G = ({ el: w, anchor: k }, A, I) => {
    let L;
    for (; w && w !== k; )
      L = T(w), n(w, A, I), w = L;
    n(k, A, I);
  }, j = ({ el: w, anchor: k }) => {
    let A;
    for (; w && w !== k; )
      A = T(w), a(w), w = A;
    a(k);
  }, Z = (w, k, A, I, L, U, q, K, ee) => {
    if (k.type === "svg" ? q = "svg" : k.type === "math" && (q = "mathml"), w == null)
      x(
        k,
        A,
        I,
        L,
        U,
        q,
        K,
        ee
      );
    else {
      const V = w.el && w.el._isVueCE ? w.el : null;
      try {
        V && V._beginPatch(), Y(
          w,
          k,
          L,
          U,
          q,
          K,
          ee
        );
      } finally {
        V && V._endPatch();
      }
    }
  }, x = (w, k, A, I, L, U, q, K) => {
    let ee, V;
    const { props: we, shapeFlag: se, transition: fe, dirs: Ee } = w;
    if (ee = w.el = o(
      w.type,
      U,
      we && we.is,
      we
    ), se & 8 ? f(ee, w.children) : se & 16 && de(
      w.children,
      ee,
      null,
      I,
      L,
      Cc(w, U),
      q,
      K
    ), Ee && ha(w, null, I, "created"), J(ee, w, w.scopeId, q, I), we) {
      for (const Ue in we)
        Ue !== "value" && !to(Ue) && r(ee, Ue, null, we[Ue], U, I);
      "value" in we && r(ee, "value", null, we.value, U), (V = we.onVnodeBeforeMount) && Hi(V, I, w);
    }
    Ee && ha(w, null, I, "beforeMount");
    const Re = ay(L, fe);
    Re && fe.beforeEnter(ee), n(ee, k, A), ((V = we && we.onVnodeMounted) || Re || Ee) && ei(() => {
      V && Hi(V, I, w), Re && fe.enter(ee), Ee && ha(w, null, I, "mounted");
    }, L);
  }, J = (w, k, A, I, L) => {
    if (A && C(w, A), I)
      for (let U = 0; U < I.length; U++)
        C(w, I[U]);
    if (L) {
      let U = L.subTree;
      if (k === U || Qh(U.type) && (U.ssContent === k || U.ssFallback === k)) {
        const q = L.vnode;
        J(
          w,
          q,
          q.scopeId,
          q.slotScopeIds,
          L.parent
        );
      }
    }
  }, de = (w, k, A, I, L, U, q, K, ee = 0) => {
    for (let V = ee; V < w.length; V++) {
      const we = w[V] = K ? fn(w[V]) : Wi(w[V]);
      E(
        null,
        we,
        k,
        A,
        I,
        L,
        U,
        q,
        K
      );
    }
  }, Y = (w, k, A, I, L, U, q) => {
    const K = k.el = w.el;
    let { patchFlag: ee, dynamicChildren: V, dirs: we } = k;
    ee |= w.patchFlag & 16;
    const se = w.props || We, fe = k.props || We;
    let Ee;
    if (A && va(A, !1), (Ee = fe.onVnodeBeforeUpdate) && Hi(Ee, A, k, w), we && ha(k, w, A, "beforeUpdate"), A && va(A, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    V && (!w.dynamicChildren || w.dynamicChildren.length !== V.length) && (ee = 0, q = !1, V = null), (se.innerHTML && fe.innerHTML == null || se.textContent && fe.textContent == null) && f(K, ""), V ? le(
      w.dynamicChildren,
      V,
      K,
      A,
      I,
      Cc(k, L),
      U
    ) : q || te(
      w,
      k,
      K,
      null,
      A,
      I,
      Cc(k, L),
      U,
      !1
    ), ee > 0) {
      if (ee & 16)
        he(K, se, fe, A, L);
      else if (ee & 2 && se.class !== fe.class && r(K, "class", null, fe.class, L), ee & 4 && r(K, "style", se.style, fe.style, L), ee & 8) {
        const Re = k.dynamicProps;
        for (let Ue = 0; Ue < Re.length; Ue++) {
          const Me = Re[Ue], it = se[Me], Ye = fe[Me];
          (Ye !== it || Me === "value") && r(K, Me, it, Ye, L, A);
        }
      }
      ee & 1 && w.children !== k.children && f(K, k.children);
    } else !q && V == null && he(K, se, fe, A, L);
    ((Ee = fe.onVnodeUpdated) || we) && ei(() => {
      Ee && Hi(Ee, A, k, w), we && ha(k, w, A, "updated");
    }, I);
  }, le = (w, k, A, I, L, U, q) => {
    for (let K = 0; K < k.length; K++) {
      const ee = w[K], V = k[K], we = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ee.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ee.type === ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ca(ee, V) || // - In the case of a component, it could contain anything.
        ee.shapeFlag & 198) ? h(ee.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      E(
        ee,
        V,
        we,
        null,
        I,
        L,
        U,
        q,
        !0
      );
    }
  }, he = (w, k, A, I, L) => {
    if (k !== A) {
      if (k !== We)
        for (const U in k)
          !to(U) && !(U in A) && r(
            w,
            U,
            k[U],
            null,
            L,
            I
          );
      for (const U in A) {
        if (to(U)) continue;
        const q = A[U], K = k[U];
        q !== K && U !== "value" && r(w, U, K, q, L, I);
      }
      "value" in A && r(w, "value", k.value, A.value, L);
    }
  }, ne = (w, k, A, I, L, U, q, K, ee) => {
    const V = k.el = w ? w.el : c(""), we = k.anchor = w ? w.anchor : c("");
    let { patchFlag: se, dynamicChildren: fe, slotScopeIds: Ee } = k;
    Ee && (K = K ? K.concat(Ee) : Ee), w == null ? (n(V, A, I), n(we, A, I), de(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      k.children || [],
      A,
      we,
      L,
      U,
      q,
      K,
      ee
    )) : se > 0 && se & 64 && fe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    w.dynamicChildren && w.dynamicChildren.length === fe.length ? (le(
      w.dynamicChildren,
      fe,
      A,
      L,
      U,
      q,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (k.key != null || L && k === L.subTree) && Xu(
      w,
      k,
      !0
      /* shallow */
    )) : te(
      w,
      k,
      A,
      we,
      L,
      U,
      q,
      K,
      ee
    );
  }, oe = (w, k, A, I, L, U, q, K, ee) => {
    k.slotScopeIds = K, w == null ? k.shapeFlag & 512 ? L.ctx.activate(
      k,
      A,
      I,
      q,
      ee
    ) : M(
      k,
      A,
      I,
      L,
      U,
      q,
      ee
    ) : z(w, k, ee);
  }, M = (w, k, A, I, L, U, q) => {
    const K = w.component = uy(
      w,
      I,
      L
    );
    if (Ul(w) && (K.ctx.renderer = gt), dy(K, !1, q), K.asyncDep) {
      if (L && L.registerDep(K, X, q), !w.el) {
        const ee = K.subTree = Ae(Pt);
        D(null, ee, k, A), w.placeholder = ee.el;
      }
    } else
      X(
        K,
        w,
        k,
        A,
        L,
        U,
        q
      );
  }, z = (w, k, A) => {
    const I = k.component = w.component;
    if (Wm(w, k, A))
      if (I.asyncDep && !I.asyncResolved) {
        ce(I, k, A);
        return;
      } else
        I.next = k, I.update();
    else
      k.el = w.el, I.vnode = k;
  }, X = (w, k, A, I, L, U, q) => {
    const K = () => {
      if (w.isMounted) {
        let { next: se, bu: fe, u: Ee, parent: Re, vnode: Ue } = w;
        {
          const wt = Zh(w);
          if (wt) {
            se && (se.el = Ue.el, ce(w, se, q)), wt.asyncDep.then(() => {
              ei(() => {
                w.isUnmounted || V();
              }, L);
            });
            return;
          }
        }
        let Me = se, it;
        va(w, !1), se ? (se.el = Ue.el, ce(w, se, q)) : se = Ue, fe && Cs(fe), (it = se.props && se.props.onVnodeBeforeUpdate) && Hi(it, Re, se, Ue), va(w, !0);
        const Ye = vf(w), ct = w.subTree;
        w.subTree = Ye, E(
          ct,
          Ye,
          // parent may have changed if it's in a teleport
          h(ct.el),
          // anchor may have changed if it's in a fragment
          pt(ct),
          w,
          L,
          U
        ), se.el = Ye.el, Me === null && Ym(w, Ye.el), Ee && ei(Ee, L), (it = se.props && se.props.onVnodeUpdated) && ei(
          () => Hi(it, Re, se, Ue),
          L
        );
      } else {
        let se;
        const { el: fe, props: Ee } = k, { bm: Re, m: Ue, parent: Me, root: it, type: Ye } = w, ct = tr(k);
        va(w, !1), Re && Cs(Re), !ct && (se = Ee && Ee.onVnodeBeforeMount) && Hi(se, Me, k), va(w, !0);
        {
          it.ce && it.ce._hasShadowRoot() && it.ce._injectChildStyle(
            Ye,
            w.parent ? w.parent.type : void 0
          );
          const wt = w.subTree = vf(w);
          E(
            null,
            wt,
            A,
            I,
            w,
            L,
            U
          ), k.el = wt.el;
        }
        if (Ue && ei(Ue, L), !ct && (se = Ee && Ee.onVnodeMounted)) {
          const wt = k;
          ei(
            () => Hi(se, Me, wt),
            L
          );
        }
        (k.shapeFlag & 256 || Me && tr(Me.vnode) && Me.vnode.shapeFlag & 256) && w.a && ei(w.a, L), w.isMounted = !0, k = A = I = null;
      }
    };
    w.scope.on();
    const ee = w.effect = new Qp(K);
    w.scope.off();
    const V = w.update = ee.run.bind(ee), we = w.job = ee.runIfDirty.bind(ee);
    we.i = w, we.id = w.uid, ee.scheduler = () => Vu(we), va(w, !0), V();
  }, ce = (w, k, A) => {
    k.component = w;
    const I = w.vnode.props;
    w.vnode = k, w.next = null, Zm(w, k.props, I, A), ty(w, k.children, A), _n(), rf(w), wn();
  }, te = (w, k, A, I, L, U, q, K, ee = !1) => {
    const V = w && w.children, we = w ? w.shapeFlag : 0, se = k.children, { patchFlag: fe, shapeFlag: Ee } = k;
    if (fe > 0) {
      if (fe & 128) {
        ve(
          V,
          se,
          A,
          I,
          L,
          U,
          q,
          K,
          ee
        );
        return;
      } else if (fe & 256) {
        be(
          V,
          se,
          A,
          I,
          L,
          U,
          q,
          K,
          ee
        );
        return;
      }
    }
    Ee & 8 ? (we & 16 && ft(V, L, U), se !== V && f(A, se)) : we & 16 ? Ee & 16 ? ve(
      V,
      se,
      A,
      I,
      L,
      U,
      q,
      K,
      ee
    ) : ft(V, L, U, !0) : (we & 8 && f(A, ""), Ee & 16 && de(
      se,
      A,
      I,
      L,
      U,
      q,
      K,
      ee
    ));
  }, be = (w, k, A, I, L, U, q, K, ee) => {
    w = w || Qa, k = k || Qa;
    const V = w.length, we = k.length, se = Math.min(V, we);
    let fe;
    for (fe = 0; fe < se; fe++) {
      const Ee = k[fe] = ee ? fn(k[fe]) : Wi(k[fe]);
      E(
        w[fe],
        Ee,
        A,
        null,
        L,
        U,
        q,
        K,
        ee
      );
    }
    V > we ? ft(
      w,
      L,
      U,
      !0,
      !1,
      se
    ) : de(
      k,
      A,
      I,
      L,
      U,
      q,
      K,
      ee,
      se
    );
  }, ve = (w, k, A, I, L, U, q, K, ee) => {
    let V = 0;
    const we = k.length;
    let se = w.length - 1, fe = we - 1;
    for (; V <= se && V <= fe; ) {
      const Ee = w[V], Re = k[V] = ee ? fn(k[V]) : Wi(k[V]);
      if (Ca(Ee, Re))
        E(
          Ee,
          Re,
          A,
          null,
          L,
          U,
          q,
          K,
          ee
        );
      else
        break;
      V++;
    }
    for (; V <= se && V <= fe; ) {
      const Ee = w[se], Re = k[fe] = ee ? fn(k[fe]) : Wi(k[fe]);
      if (Ca(Ee, Re))
        E(
          Ee,
          Re,
          A,
          null,
          L,
          U,
          q,
          K,
          ee
        );
      else
        break;
      se--, fe--;
    }
    if (V > se) {
      if (V <= fe) {
        const Ee = fe + 1, Re = Ee < we ? k[Ee].el : I;
        for (; V <= fe; )
          E(
            null,
            k[V] = ee ? fn(k[V]) : Wi(k[V]),
            A,
            Re,
            L,
            U,
            q,
            K,
            ee
          ), V++;
      }
    } else if (V > fe)
      for (; V <= se; )
        pe(w[V], L, U, !0), V++;
    else {
      const Ee = V, Re = V, Ue = /* @__PURE__ */ new Map();
      for (V = Re; V <= fe; V++) {
        const ht = k[V] = ee ? fn(k[V]) : Wi(k[V]);
        ht.key != null && Ue.set(ht.key, V);
      }
      let Me, it = 0;
      const Ye = fe - Re + 1;
      let ct = !1, wt = 0;
      const St = new Array(Ye);
      for (V = 0; V < Ye; V++) St[V] = 0;
      for (V = Ee; V <= se; V++) {
        const ht = w[V];
        if (it >= Ye) {
          pe(ht, L, U, !0);
          continue;
        }
        let At;
        if (ht.key != null)
          At = Ue.get(ht.key);
        else
          for (Me = Re; Me <= fe; Me++)
            if (St[Me - Re] === 0 && Ca(ht, k[Me])) {
              At = Me;
              break;
            }
        At === void 0 ? pe(ht, L, U, !0) : (St[At - Re] = V + 1, At >= wt ? wt = At : ct = !0, E(
          ht,
          k[At],
          A,
          null,
          L,
          U,
          q,
          K,
          ee
        ), it++);
      }
      const Fi = ct ? ry(St) : Qa;
      for (Me = Fi.length - 1, V = Ye - 1; V >= 0; V--) {
        const ht = Re + V, At = k[ht], Dt = k[ht + 1], Mt = ht + 1 < we ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Dt.el || Jh(Dt)
        ) : I;
        St[V] === 0 ? E(
          null,
          At,
          A,
          Mt,
          L,
          U,
          q,
          K,
          ee
        ) : ct && (Me < 0 || V !== Fi[Me] ? Ne(At, A, Mt, 2) : Me--);
      }
    }
  }, Ne = (w, k, A, I, L = null) => {
    const { el: U, type: q, transition: K, children: ee, shapeFlag: V } = w;
    if (V & 6) {
      Ne(w.component.subTree, k, A, I);
      return;
    }
    if (V & 128) {
      w.suspense.move(k, A, I);
      return;
    }
    if (V & 64) {
      q.move(w, k, A, gt);
      return;
    }
    if (q === ae) {
      n(U, k, A);
      for (let se = 0; se < ee.length; se++)
        Ne(ee[se], k, A, I);
      n(w.anchor, k, A);
      return;
    }
    if (q === Ts) {
      G(w, k, A);
      return;
    }
    if (I !== 2 && V & 1 && K)
      if (I === 0)
        K.persisted && !U[yi] ? n(U, k, A) : (K.beforeEnter(U), n(U, k, A), ei(() => K.enter(U), L));
      else {
        const { leave: se, delayLeave: fe, afterLeave: Ee } = K, Re = () => {
          w.ctx.isUnmounted ? a(U) : n(U, k, A);
        }, Ue = () => {
          const Me = U._isLeaving || !!U[yi];
          U._isLeaving && U[yi](
            !0
            /* cancelled */
          ), K.persisted && !Me ? Re() : se(U, () => {
            Re(), Ee && Ee();
          });
        };
        fe ? fe(U, Re, Ue) : Ue();
      }
    else
      n(U, k, A);
  }, pe = (w, k, A, I = !1, L = !1) => {
    const {
      type: U,
      props: q,
      ref: K,
      children: ee,
      dynamicChildren: V,
      shapeFlag: we,
      patchFlag: se,
      dirs: fe,
      cacheIndex: Ee,
      memo: Re
    } = w;
    if (se === -2 && (L = !1), K != null && (_n(), ao(K, null, A, w, !0), wn()), Ee != null && (k.renderCache[Ee] = void 0), we & 256) {
      k.ctx.deactivate(w);
      return;
    }
    const Ue = we & 1 && fe, Me = !tr(w);
    let it;
    if (Me && (it = q && q.onVnodeBeforeUnmount) && Hi(it, k, w), we & 6)
      rt(w.component, A, I);
    else {
      if (we & 128) {
        w.suspense.unmount(A, I);
        return;
      }
      Ue && ha(w, null, k, "beforeUnmount"), we & 64 ? w.type.remove(
        w,
        k,
        A,
        gt,
        I
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== ae || se > 0 && se & 64) ? ft(
        V,
        k,
        A,
        !1,
        !0
      ) : (U === ae && se & 384 || !L && we & 16) && ft(ee, k, A), I && Be(w);
    }
    const Ye = Re != null && Ee == null;
    (Me && (it = q && q.onVnodeUnmounted) || Ue || Ye) && ei(() => {
      it && Hi(it, k, w), Ue && ha(w, null, k, "unmounted"), Ye && (w.el = null);
    }, A);
  }, Be = (w) => {
    const { type: k, el: A, anchor: I, transition: L } = w;
    if (k === ae) {
      Le(A, I);
      return;
    }
    if (k === Ts) {
      j(w);
      return;
    }
    const U = () => {
      a(A), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (w.shapeFlag & 1 && L && !L.persisted) {
      const { leave: q, delayLeave: K } = L, ee = () => q(A, U);
      K ? K(w.el, U, ee) : ee();
    } else
      U();
  }, Le = (w, k) => {
    let A;
    for (; w !== k; )
      A = T(w), a(w), w = A;
    a(k);
  }, rt = (w, k, A) => {
    const { bum: I, scope: L, job: U, subTree: q, um: K, m: ee, a: V } = w;
    mf(ee), mf(V), I && Cs(I), L.stop(), U && (U.flags |= 8, pe(q, w, k, A)), K && ei(K, k), ei(() => {
      w.isUnmounted = !0;
    }, k);
  }, ft = (w, k, A, I = !1, L = !1, U = 0) => {
    for (let q = U; q < w.length; q++)
      pe(w[q], k, A, I, L);
  }, pt = (w) => {
    if (w.shapeFlag & 6)
      return pt(w.component.subTree);
    if (w.shapeFlag & 128)
      return w.suspense.next();
    const k = T(w.anchor || w.el), A = k && k[Sh];
    return A ? T(A) : k;
  };
  let Et = !1;
  const Ge = (w, k, A) => {
    let I;
    w == null ? k._vnode && (pe(k._vnode, null, null, !0), I = k._vnode.component) : E(
      k._vnode || null,
      w,
      k,
      null,
      null,
      null,
      A
    ), k._vnode = w, Et || (Et = !0, rf(I), yh(), Et = !1);
  }, gt = {
    p: E,
    um: pe,
    m: Ne,
    r: Be,
    mt: M,
    mc: de,
    pc: te,
    pbc: le,
    n: pt,
    o: e
  };
  return {
    render: Ge,
    hydrate: void 0,
    createApp: Hm(Ge)
  };
}
function Cc({ type: e, props: t }, i) {
  return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
}
function va({ effect: e, job: t }, i) {
  i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ay(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Xu(e, t, i = !1) {
  const n = e.children, a = t.children;
  if (Oe(n) && Oe(a))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let c = a[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = a[r] = fn(a[r]), c.el = o.el), !i && c.patchFlag !== -2 && Xu(o, c)), c.type === zo && (c.patchFlag === -1 && (c = a[r] = fn(c)), c.el = o.el), c.type === Pt && !c.el && (c.el = o.el);
    }
}
function ry(e) {
  const t = e.slice(), i = [0];
  let n, a, r, o, c;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const y = e[n];
    if (y !== 0) {
      if (a = i[i.length - 1], e[a] < y) {
        t[n] = a, i.push(n);
        continue;
      }
      for (r = 0, o = i.length - 1; r < o; )
        c = r + o >> 1, e[i[c]] < y ? r = c + 1 : o = c;
      y < e[i[r]] && (r > 0 && (t[n] = i[r - 1]), i[r] = n);
    }
  }
  for (r = i.length, o = i[r - 1]; r-- > 0; )
    i[r] = o, o = t[o];
  return i;
}
function Zh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Zh(t);
}
function mf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Jh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Jh(t.subTree) : null;
}
const Qh = (e) => e.__isSuspense;
function oy(e, t) {
  t && t.pendingBranch ? Oe(e) ? t.effects.push(...e) : t.effects.push(e) : mh(e);
}
const ae = /* @__PURE__ */ Symbol.for("v-fgt"), zo = /* @__PURE__ */ Symbol.for("v-txt"), Pt = /* @__PURE__ */ Symbol.for("v-cmt"), Ts = /* @__PURE__ */ Symbol.for("v-stc"), mn = [];
let pi = null;
function m(e = !1) {
  mn.push(pi = e ? null : []);
}
function Zu() {
  mn.pop(), pi = mn[mn.length - 1] || null;
}
let Co = 1;
function Fs(e, t = !1) {
  Co += e, e < 0 && pi && t && (pi.hasOnce = !0);
}
function ev(e) {
  return e.dynamicChildren = Co > 0 ? pi || Qa : null, Zu(), Co > 0 && pi && pi.push(e), e;
}
function _(e, t, i, n, a, r) {
  return ev(
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
  return ev(
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
function To(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ca(e, t) {
  return e.type === t.type && e.key === t.key;
}
const tv = ({ key: e }) => e ?? null, ks = ({
  ref: e,
  ref_key: t,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? lt(e) || /* @__PURE__ */ Wt(e) || $e(e) ? { i: $t, r: e, k: t, f: !!i } : e : null);
function l(e, t = null, i = null, n = 0, a = null, r = e === ae ? 0 : 1, o = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && tv(t),
    ref: t && ks(t),
    scopeId: Dl,
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
    ctx: $t
  };
  return c ? (Ds(u, i), r & 128 && e.normalize(u)) : i && (u.shapeFlag |= lt(i) ? 8 : 16), Co > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  pi && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && pi.push(u), u;
}
const Ae = sy;
function sy(e, t = null, i = null, n = 0, a = null, r = !1) {
  if ((!e || e === Ih) && (e = Pt), To(e)) {
    const c = Yn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return i && Ds(c, i), Co > 0 && !r && pi && (c.shapeFlag & 6 ? pi[pi.indexOf(e)] = c : pi.push(c)), c.patchFlag = -2, c;
  }
  if (vy(e) && (e = e.__vccOpts), t) {
    t = ko(t);
    let { class: c, style: u } = t;
    c && !lt(c) && (t.class = ye(c)), et(u) && (/* @__PURE__ */ Hu(u) && !Oe(u) && (u = yt({}, u)), t.style = hi(u));
  }
  const o = lt(e) ? 1 : Qh(e) ? 128 : zl(e) ? 64 : et(e) ? 4 : $e(e) ? 2 : 0;
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
function ko(e) {
  return e ? /* @__PURE__ */ Hu(e) || Kh(e) ? yt({}, e) : e : null;
}
function Yn(e, t, i = !1, n = !1) {
  const { props: a, ref: r, patchFlag: o, children: c, transition: u } = e, y = t ? Yt(a || {}, t) : a, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: y,
    key: y && tv(y),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && r ? Oe(r) ? r.concat(ks(t)) : [r, ks(t)] : ks(t)
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
    patchFlag: t && e.type !== ae ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Yn(e.ssContent),
    ssFallback: e.ssFallback && Yn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && n && So(
    f,
    u.clone(f)
  ), f;
}
function _e(e = " ", t = 0) {
  return Ae(zo, null, e, t);
}
function F(e = "", t = !1) {
  return t ? (m(), je(Pt, null, e)) : Ae(Pt, null, e);
}
function Wi(e) {
  return e == null || typeof e == "boolean" ? Ae(Pt) : Oe(e) ? Ae(
    ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : To(e) ? fn(e) : Ae(zo, null, String(e));
}
function fn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Yn(e);
}
function Ds(e, t) {
  let i = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Oe(t))
    i = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Ds(e, a()), a._c && (a._d = !0));
      return;
    } else {
      i = 32;
      const a = t._;
      !a && !Kh(t) ? t._ctx = $t : a === 3 && $t && ($t.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if ($e(t)) {
    if (n & 65) {
      Ds(e, { default: t });
      return;
    }
    t = { default: t, _ctx: $t }, i = 32;
  } else
    t = String(t), n & 64 ? (i = 16, t = [_e(t)]) : i = 8;
  e.children = t, e.shapeFlag |= i;
}
function Yt(...e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const n = e[i];
    for (const a in n)
      if (a === "class")
        t.class !== n.class && (t.class = ye([t.class, n.class]));
      else if (a === "style")
        t.style = hi([t.style, n.style]);
      else if (Ol(a)) {
        const r = t[a], o = n[a];
        o && r !== o && !(Oe(r) && r.includes(o)) ? t[a] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !xl(a) && (t[a] = o);
      } else a !== "" && (t[a] = n[a]);
  }
  return t;
}
function Hi(e, t, i, n = null) {
  Ci(e, t, 7, [
    i,
    n
  ]);
}
const ly = Mh();
let cy = 0;
function uy(e, t, i) {
  const n = e.type, a = (t ? t.appContext : e.appContext) || ly, r = {
    uid: cy++,
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
    scope: new Rb(
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
    propsOptions: qh(n, a),
    emitsOptions: jh(n, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: We,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: We,
    data: We,
    props: We,
    attrs: We,
    slots: We,
    refs: We,
    setupState: We,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Vm.bind(null, r), e.ce && e.ce(r), r;
}
let Gt = null;
const Pa = () => Gt || $t;
let Ms, Eo;
{
  const e = Il(), t = (i, n) => {
    let a;
    return (a = e[i]) || (a = e[i] = []), a.push(n), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  Ms = t(
    "__VUE_INSTANCE_SETTERS__",
    (i) => Gt = i
  ), Eo = t(
    "__VUE_SSR_SETTERS__",
    (i) => Ao = i
  );
}
const Uo = (e) => {
  const t = Gt;
  return Ms(e), e.scope.on(), () => {
    e.scope.off(), Ms(t);
  };
}, yf = () => {
  Gt && Gt.scope.off(), Ms(null);
};
function iv(e) {
  return e.vnode.shapeFlag & 4;
}
let Ao = !1;
function dy(e, t = !1, i = !1) {
  t && Eo(t);
  const { props: n, children: a } = e.vnode, r = iv(e);
  Xm(e, n, r, t), ey(e, a, i || t);
  const o = r ? fy(e, t) : void 0;
  return t && Eo(!1), o;
}
function fy(e, t) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Im);
  const { setup: n } = i;
  if (n) {
    _n();
    const a = e.setupContext = n.length > 1 ? av(e) : null, r = Uo(e), o = Do(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    ), c = Gp(o);
    if (wn(), r(), (c || e.sp) && !tr(e) && xh(e), c) {
      if (o.then(yf, yf), t)
        return o.then((u) => {
          Eo(!0);
          try {
            _f(e, u, t);
          } finally {
            Eo(!1);
          }
        }).catch((u) => {
          Fl(u, e, 0);
        });
      e.asyncDep = o;
    } else
      _f(e, o);
  } else
    nv(e);
}
function _f(e, t, i) {
  $e(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : et(t) && (e.setupState = vh(t)), nv(e);
}
function nv(e, t, i) {
  const n = e.type;
  e.render || (e.render = n.render || wi);
  {
    const a = Uo(e);
    _n();
    try {
      Dm(e);
    } finally {
      wn(), a();
    }
  }
}
const py = {
  get(e, t) {
    return Vt(e, "get", ""), e[t];
  }
};
function av(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  return {
    attrs: new Proxy(e.attrs, py),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Hl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vh(Jb(e.exposed)), {
    get(t, i) {
      if (i in t)
        return t[i];
      if (i in ro)
        return ro[i](e);
    },
    has(t, i) {
      return i in t || i in ro;
    }
  })) : e.proxy;
}
function hy(e, t = !0) {
  return $e(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function vy(e) {
  return $e(e) && "__vccOpts" in e;
}
const H = (e, t) => /* @__PURE__ */ am(e, t, Ao);
function ai(e, t, i) {
  try {
    Fs(-1);
    const n = arguments.length;
    return n === 2 ? et(t) && !Oe(t) ? To(t) ? Ae(e, null, [t]) : Ae(e, t) : Ae(e, null, t) : (n > 3 ? i = Array.prototype.slice.call(arguments, 2) : n === 3 && To(i) && (i = [i]), Ae(e, t, i));
  } finally {
    Fs(1);
  }
}
const gy = "3.5.42", by = wi;
let pu;
const wf = typeof window < "u" && window.trustedTypes;
if (wf)
  try {
    pu = /* @__PURE__ */ wf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const rv = pu ? (e) => pu.createHTML(e) : (e) => e, my = "http://www.w3.org/2000/svg", yy = "http://www.w3.org/1998/Math/MathML", dn = typeof document < "u" ? document : null, Sf = dn && /* @__PURE__ */ dn.createElement("template"), _y = {
  insert: (e, t, i) => {
    t.insertBefore(e, i || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, i, n) => {
    const a = t === "svg" ? dn.createElementNS(my, e) : t === "mathml" ? dn.createElementNS(yy, e) : i ? dn.createElement(e, { is: i }) : dn.createElement(e);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => dn.createTextNode(e),
  createComment: (e) => dn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => dn.querySelector(e),
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
      Sf.innerHTML = rv(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const c = Sf.content;
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
}, Fn = "transition", jr = "animation", Oo = /* @__PURE__ */ Symbol("_vtc"), ov = {
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
}, wy = /* @__PURE__ */ yt(
  {},
  Th,
  ov
), Sy = (e) => (e.displayName = "Transition", e.props = wy, e), Cy = /* @__PURE__ */ Sy(
  (e, { slots: t }) => ai(Sm, Ty(e), t)
), ga = (e, t = []) => {
  Oe(e) ? e.forEach((i) => i(...t)) : e && e(...t);
}, Cf = (e) => e ? Oe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ty(e) {
  const t = {};
  for (const ne in e)
    ne in ov || (t[ne] = e[ne]);
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
    appearActiveClass: y = o,
    appearToClass: f = c,
    leaveFromClass: h = `${i}-leave-from`,
    leaveActiveClass: T = `${i}-leave-active`,
    leaveToClass: C = `${i}-leave-to`
  } = e, N = ky(a), E = N && N[0], R = N && N[1], {
    onBeforeEnter: D,
    onEnter: $,
    onEnterCancelled: G,
    onLeave: j,
    onLeaveCancelled: Z,
    onBeforeAppear: x = D,
    onAppear: J = $,
    onAppearCancelled: de = G
  } = t, Y = (ne, oe, M, z) => {
    ne._enterCancelled = z, ba(ne, oe ? f : c), ba(ne, oe ? y : o), M && M();
  }, le = (ne, oe) => {
    ne._isLeaving = !1, ba(ne, h), ba(ne, C), ba(ne, T), oe && oe();
  }, he = (ne) => (oe, M) => {
    const z = ne ? J : $, X = () => Y(oe, ne, M);
    ga(z, [oe, X]), Tf(() => {
      ba(oe, ne ? u : r), sn(oe, ne ? f : c), Cf(z) || kf(oe, n, E, X);
    });
  };
  return yt(t, {
    onBeforeEnter(ne) {
      ga(D, [ne]), sn(ne, r), sn(ne, o);
    },
    onBeforeAppear(ne) {
      ga(x, [ne]), sn(ne, u), sn(ne, y);
    },
    onEnter: he(!1),
    onAppear: he(!0),
    onLeave(ne, oe) {
      ne._isLeaving = !0;
      const M = () => le(ne, oe);
      sn(ne, h), ne._enterCancelled ? (sn(ne, T), Of(ne)) : (Of(ne), sn(ne, T)), Tf(() => {
        ne._isLeaving && (ba(ne, h), sn(ne, C), Cf(j) || kf(ne, n, R, M));
      }), ga(j, [ne, M]);
    },
    onEnterCancelled(ne) {
      Y(ne, !1, void 0, !0), ga(G, [ne]);
    },
    onAppearCancelled(ne) {
      Y(ne, !0, void 0, !0), ga(de, [ne]);
    },
    onLeaveCancelled(ne) {
      le(ne), ga(Z, [ne]);
    }
  });
}
function ky(e) {
  if (e == null)
    return null;
  if (et(e))
    return [Tc(e.enter), Tc(e.leave)];
  {
    const t = Tc(e);
    return [t, t];
  }
}
function Tc(e) {
  return Sb(e);
}
function sn(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[Oo] || (e[Oo] = /* @__PURE__ */ new Set())).add(t);
}
function ba(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const i = e[Oo];
  i && (i.delete(t), i.size || (e[Oo] = void 0));
}
function Tf(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ey = 0;
function kf(e, t, i, n) {
  const a = e._endId = ++Ey, r = () => {
    a === e._endId && n();
  };
  if (i != null)
    return setTimeout(r, i);
  const { type: o, timeout: c, propCount: u } = Ay(e, t);
  if (!o)
    return n();
  const y = o + "end";
  let f = 0;
  const h = () => {
    e.removeEventListener(y, T), r();
  }, T = (C) => {
    C.target === e && ++f >= u && h();
  };
  setTimeout(() => {
    f < u && h();
  }, c + 1), e.addEventListener(y, T);
}
function Ay(e, t) {
  const i = window.getComputedStyle(e), n = (N) => (i[N] || "").split(", "), a = n(`${Fn}Delay`), r = n(`${Fn}Duration`), o = Ef(a, r), c = n(`${jr}Delay`), u = n(`${jr}Duration`), y = Ef(c, u);
  let f = null, h = 0, T = 0;
  t === Fn ? o > 0 && (f = Fn, h = o, T = r.length) : t === jr ? y > 0 && (f = jr, h = y, T = u.length) : (h = Math.max(o, y), f = h > 0 ? o > y ? Fn : jr : null, T = f ? f === Fn ? r.length : u.length : 0);
  const C = f === Fn && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Fn}Property`).toString()
  );
  return {
    type: f,
    timeout: h,
    propCount: T,
    hasTransform: C
  };
}
function Ef(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((i, n) => Af(i) + Af(e[n])));
}
function Af(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Of(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Oy(e, t, i) {
  const n = e[Oo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
}
const zs = /* @__PURE__ */ Symbol("_vod"), sv = /* @__PURE__ */ Symbol("_vsh"), nr = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: i }) {
    e[zs] = e.style.display === "none" ? "" : e.style.display, i && t ? i.beforeEnter(e) : Br(e, t);
  },
  mounted(e, { value: t }, { transition: i }) {
    i && t && i.enter(e);
  },
  updated(e, { value: t, oldValue: i }, { transition: n }) {
    !t != !i && (n ? t ? (n.beforeEnter(e), Br(e, !0), n.enter(e)) : n.leave(e, () => {
      Br(e, !1);
    }) : Br(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Br(e, t);
  }
};
function Br(e, t) {
  e.style.display = t ? e[zs] : "none", e[sv] = !t;
}
const lv = /* @__PURE__ */ Symbol("");
function xy(e) {
  const t = Pa();
  if (!t)
    return;
  const i = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Us(r, a));
  }, n = () => {
    const a = e(t.proxy);
    t.ce ? Us(t.ce, a) : hu(t.subTree, a), i(a);
  };
  Rh(() => {
    mh(n);
  }), Zn(() => {
    Xe(n, wi, { flush: "post" });
    const a = new MutationObserver(n);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), Mo(() => a.disconnect());
  });
}
function hu(e, t) {
  if (e.shapeFlag & 128) {
    const i = e.suspense;
    e = i.activeBranch, i.pendingBranch && !i.isHydrating && i.effects.push(() => {
      hu(i.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Us(e.el, t);
  else if (e.type === ae)
    e.children.forEach((i) => hu(i, t));
  else if (e.type === Ts) {
    let { el: i, anchor: n } = e;
    for (; i && (Us(i, t), i !== n); )
      i = i.nextSibling;
  }
}
function Us(e, t) {
  if (e.nodeType === 1) {
    const i = e.style;
    let n = "";
    for (const a in t) {
      const r = Lb(t[a]);
      i.setProperty(`--${a}`, r), n += `--${a}: ${r};`;
    }
    i[lv] = n;
  }
}
const Ny = /(?:^|;)\s*display\s*:/;
function Ly(e, t, i) {
  const n = e.style, a = lt(i);
  let r = !1;
  if (i && !a) {
    if (t)
      if (lt(t))
        for (const o of t.split(";")) {
          const c = o.slice(0, o.indexOf(":")).trim();
          i[c] == null && Zr(n, c, "");
        }
      else
        for (const o in t)
          i[o] == null && Zr(n, o, "");
    for (const o in i) {
      o === "display" && (r = !0);
      const c = i[o];
      c != null ? Iy(
        e,
        o,
        !lt(t) && t ? t[o] : void 0,
        c
      ) || Zr(n, o, c) : Zr(n, o, "");
    }
  } else if (a) {
    if (t !== i) {
      const o = n[lv];
      o && (i += ";" + o), n.cssText = i, r = Ny.test(i);
    }
  } else t && e.removeAttribute("style");
  zs in e && (e[zs] = r ? n.display : "", e[sv] && (n.display = "none"));
}
const ps = /\s*!important$/;
function Zr(e, t, i) {
  if (Oe(i))
    i.forEach((n) => Zr(e, t, n));
  else if (i == null && (i = ""), t.startsWith("--"))
    ps.test(i) ? e.setProperty(t, i.replace(ps, ""), "important") : e.setProperty(t, i);
  else {
    const n = Ry(e, t);
    ps.test(i) ? e.setProperty(
      Tn(n),
      i.replace(ps, ""),
      "important"
    ) : e[n] = i;
  }
}
const xf = ["Webkit", "Moz", "ms"], kc = {};
function Ry(e, t) {
  const i = kc[t];
  if (i)
    return i;
  let n = qt(t);
  if (n !== "filter" && n in e)
    return kc[t] = n;
  n = Ll(n);
  for (let a = 0; a < xf.length; a++) {
    const r = xf[a] + n;
    if (r in e)
      return kc[t] = r;
  }
  return t;
}
function Iy(e, t, i, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && lt(n) && i === n;
}
const Nf = "http://www.w3.org/1999/xlink";
function Lf(e, t, i, n, a, r = Ob(t)) {
  n && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(Nf, t.slice(6, t.length)) : e.setAttributeNS(Nf, t, i) : i == null || r && !Xp(i) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Pi(i) ? String(i) : i
  );
}
function Rf(e, t, i, n, a) {
  if (t === "innerHTML" || t === "textContent") {
    i != null && (e[t] = t === "innerHTML" ? rv(i) : i);
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
    c === "boolean" ? i = Xp(i) : i == null && c === "string" ? (i = "", o = !0) : c === "number" && (i = 0, o = !0);
  }
  try {
    e[t] = i;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function Ta(e, t, i, n) {
  e.addEventListener(t, i, n);
}
function Py(e, t, i, n) {
  e.removeEventListener(t, i, n);
}
const If = /* @__PURE__ */ Symbol("_vei");
function $y(e, t, i, n, a = null) {
  const r = e[If] || (e[If] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [c, u] = My(t);
    if (n) {
      const y = r[t] = jy(
        n,
        a
      );
      Ta(e, c, y, u);
    } else o && (Py(e, c, o, u), r[t] = void 0);
  }
}
const Fy = /(Once|Passive|Capture)$/, Dy = /^on:?(?:Once|Passive|Capture)$/;
function My(e) {
  let t, i;
  for (; (i = e.match(Fy)) && !Dy.test(e); )
    t || (t = {}), e = e.slice(0, e.length - i[1].length), t[i[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Tn(e.slice(2)), t];
}
let Ec = 0;
const zy = /* @__PURE__ */ Promise.resolve(), Uy = () => Ec || (zy.then(() => Ec = 0), Ec = Date.now());
function jy(e, t) {
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
        const y = o[u];
        y && Ci(
          y,
          t,
          5,
          c
        );
      }
    } else
      Ci(
        a,
        t,
        5,
        [n]
      );
  };
  return i.value = e, i.attached = Uy(), i;
}
const Pf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, By = (e, t, i, n, a, r) => {
  const o = a === "svg";
  t === "class" ? Oy(e, n, o) : t === "style" ? Ly(e, i, n) : Ol(t) ? xl(t) || $y(e, t, i, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Hy(e, t, n, o)) ? (Rf(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Lf(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Vy(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !lt(n))) ? Rf(e, qt(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Lf(e, t, n, o));
};
function Hy(e, t, i, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Pf(t) && $e(i));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Pf(t) && lt(i) ? !1 : t in e;
}
function Vy(e, t) {
  const i = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!i)
    return !1;
  const n = qt(t);
  return Array.isArray(i) ? i.some((a) => qt(a) === n) : Object.keys(i).some((a) => qt(a) === n);
}
const js = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Oe(t) ? (i) => Cs(t, i) : t;
};
function Ky(e) {
  e.target.composing = !0;
}
function $f(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ea = /* @__PURE__ */ Symbol("_assign"), hs = /* @__PURE__ */ Symbol("_initialValue");
function Ac(e, t, i) {
  return t && (e = e.trim()), i && (e = Rl(e)), e;
}
const dt = {
  created(e, { modifiers: { lazy: t, trim: i, number: n } }, a) {
    e.parentNode && (e.type === "text" ? e[hs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[hs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Ea] = js(a);
    const r = n || a.props && a.props.type === "number";
    Ta(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Ea](Ac(e.value, i, r));
    }), (i || r) && Ta(e, "change", () => {
      e.value = Ac(e.value, i, r);
    }), t || (Ta(e, "compositionstart", Ky), Ta(e, "compositionend", $f), Ta(e, "change", $f));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: i, number: n } }) {
    const a = t ?? "", r = e[hs];
    delete e[hs], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[Ea](Ac(e.value, i, n)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: i, modifiers: { lazy: n, trim: a, number: r } }, o) {
    if (e[Ea] = js(o), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? Rl(e.value) : e.value, u = t ?? "";
    if (c === u)
      return;
    const y = e.getRootNode();
    (y instanceof Document || y instanceof ShadowRoot) && y.activeElement === e && e.type !== "range" && (n && t === i || a && e.value.trim() === u) || (e.value = u);
  }
}, Jt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: i } }, n) {
    e._modelValue = t, Ta(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => i ? Rl(Bs(u)) : Bs(u)
      ), r = e.multiple, o = r ? Ra(e._modelValue) ? new Set(a) : a : a[0], c = e._pendingValue = [
        r,
        r ? Oe(o) ? a.slice() : a : o
      ];
      try {
        e[Ea](o);
      } finally {
        ti(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[Ea] = js(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ff(e, t);
  },
  beforeUpdate(e, { value: t }, i) {
    e._modelValue = t, e[Ea] = js(i);
  },
  updated(e, { value: t }) {
    const i = e._pendingValue;
    e._pendingValue = void 0, (!i || i[0] !== e.multiple || !Gy(t, i[1], i[0])) && Ff(e, t);
  }
};
function Gy(e, t, i) {
  if (!i || Oe(e)) return Wn(e, t);
  if (Ra(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function Ff(e, t) {
  const i = e.multiple, n = Oe(t);
  if (!(i && !n && !Ra(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const o = e.options[a], c = Bs(o);
      if (i)
        if (n) {
          const u = typeof c;
          u === "string" || u === "number" ? o.selected = t.some((y) => String(y) === String(c)) : o.selected = Nb(t, c) > -1;
        } else
          o.selected = t.has(c);
      else if (Wn(Bs(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !i && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Bs(e) {
  return "_value" in e ? e._value : e.value;
}
const qy = ["ctrl", "shift", "alt", "meta"], Wy = {
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
  exact: (e, t) => qy.some((i) => e[`${i}Key`] && !t.includes(i))
}, ke = (e, t) => {
  if (!e) return e;
  const i = e._withMods || (e._withMods = {}), n = t.join(".");
  return i[n] || (i[n] = ((a, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const c = Wy[t[o]];
      if (c && c(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Yy = {
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
    const r = Tn(a.key);
    if (t.some(
      (o) => o === r || Yy[o] === r
    ))
      return e(a);
  }));
}, Xy = /* @__PURE__ */ yt({ patchProp: By }, _y);
let Df;
function Zy() {
  return Df || (Df = iy(Xy));
}
const Jy = ((...e) => {
  const t = Zy().createApp(...e), { mount: i } = t;
  return t.mount = (n) => {
    const a = e_(n);
    if (!a) return;
    const r = t._component;
    !$e(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = i(a, !1, Qy(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
});
function Qy(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function e_(e) {
  return lt(e) ? document.querySelector(e) : e;
}
function Ju(e, t, i) {
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
function Mf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function t_(e) {
  if (Array.isArray(e)) return e;
}
function i_(e, t) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var n, a, r, o, c = [], u = !0, y = !1;
    try {
      if (r = (i = i.call(e)).next, t !== 0) for (; !(u = (n = r.call(i)).done) && (c.push(n.value), c.length !== t); u = !0) ;
    } catch (f) {
      y = !0, a = f;
    } finally {
      try {
        if (!u && i.return != null && (o = i.return(), Object(o) !== o)) return;
      } finally {
        if (y) throw a;
      }
    }
    return c;
  }
}
function n_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a_(e, t) {
  return t_(e) || i_(e, t) || r_(e, t) || n_();
}
function r_(e, t) {
  if (e) {
    if (typeof e == "string") return Mf(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Mf(e, t) : void 0;
  }
}
const cv = Object.entries, zf = Object.setPrototypeOf, o_ = Object.isFrozen, s_ = Object.getPrototypeOf, l_ = Object.getOwnPropertyDescriptor;
let Ct = Object.freeze, kt = Object.seal, Za = Object.create, uv = typeof Reflect < "u" && Reflect, vu = uv.apply, gu = uv.construct;
Ct || (Ct = function(t) {
  return t;
});
kt || (kt = function(t) {
  return t;
});
vu || (vu = function(t, i) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  return t.apply(i, a);
});
gu || (gu = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const wa = _t(Array.prototype.forEach), c_ = _t(Array.prototype.lastIndexOf), Uf = _t(Array.prototype.pop), Hr = _t(Array.prototype.push), u_ = _t(Array.prototype.splice), ar = Array.isArray, Jr = _t(String.prototype.toLowerCase), Oc = _t(String.prototype.toString), jf = _t(String.prototype.match), Vr = _t(String.prototype.replace), Bf = _t(String.prototype.indexOf), d_ = _t(String.prototype.trim), f_ = _t(Number.prototype.toString), p_ = _t(Boolean.prototype.toString), Hf = typeof BigInt > "u" ? null : _t(BigInt.prototype.toString), Vf = typeof Symbol > "u" ? null : _t(Symbol.prototype.toString), ri = _t(Object.prototype.hasOwnProperty), Kr = _t(Object.prototype.toString), Bt = _t(RegExp.prototype.test), ma = h_(TypeError);
function _t(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
      n[a - 1] = arguments[a];
    return vu(e, t, n);
  };
}
function h_(e) {
  return function() {
    for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
      i[n] = arguments[n];
    return gu(e, i);
  };
}
function qe(e, t) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Jr;
  if (zf && zf(e, null), !ar(t))
    return e;
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
  for (let t = 0; t < e.length; t++)
    ri(e, t) || (e[t] = null);
  return e;
}
function di(e) {
  const t = Za(null);
  for (const n of cv(e)) {
    var i = a_(n, 2);
    const a = i[0], r = i[1];
    ri(e, a) && (ar(r) ? t[a] = v_(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = di(r) : t[a] = r);
  }
  return t;
}
function g_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return f_(e);
    case "boolean":
      return p_(e);
    case "bigint":
      return Hf ? Hf(e) : "0";
    case "symbol":
      return Vf ? Vf(e) : "Symbol()";
    case "undefined":
      return Kr(e);
    case "function":
    case "object": {
      if (e === null)
        return Kr(e);
      const t = e, i = Ni(t, "toString");
      if (typeof i == "function") {
        const n = i(t);
        return typeof n == "string" ? n : Kr(n);
      }
      return Kr(e);
    }
    default:
      return Kr(e);
  }
}
function Ni(e, t) {
  for (; e !== null; ) {
    const n = l_(e, t);
    if (n) {
      if (n.get)
        return _t(n.get);
      if (typeof n.value == "function")
        return _t(n.value);
    }
    e = s_(e);
  }
  function i() {
    return null;
  }
  return i;
}
function b_(e) {
  try {
    return Bt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Kf = Ct(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), xc = Ct(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Nc = Ct(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), m_ = Ct(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Lc = Ct(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), y_ = Ct(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Gf = Ct(["#text"]), qf = Ct(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Rc = Ct(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Wf = Ct(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), vs = Ct(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), __ = kt(/{{[\w\W]*|^[\w\W]*}}/g), w_ = kt(/<%[\w\W]*|^[\w\W]*%>/g), S_ = kt(/\${[\w\W]*/g), C_ = kt(/^data-[\-\w.\u00B7-\uFFFF]+$/), T_ = kt(/^aria-[\-\w]+$/), Yf = kt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), k_ = kt(/^(?:\w+script|data):/i), E_ = kt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), A_ = kt(/^html$/i), O_ = kt(/^[a-z][.\w]*(-[.\w]+)+$/i), Xf = kt(/<[/\w!]/g), Zf = kt(/<[/\w]/g), x_ = kt(/<\/no(script|embed|frames)/i), N_ = kt(/\/>/i), ci = {
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
}, dv = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], L_ = Ct(qe({}, dv)), R_ = (function() {
  const e = {};
  return wa(dv, (t) => {
    e[t] = kt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Ct(e);
})(), I_ = function() {
  return typeof window > "u" ? null : window;
}, P_ = function(t, i) {
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
}, Jf = function() {
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
}, Dn = function(t, i, n, a) {
  return ri(t, i) && ar(t[i]) ? qe(a.base ? di(a.base) : {}, t[i], a.transform) : n;
}, Ic = function(t, i, n) {
  const a = ri(t, i) ? t[i] : void 0;
  return a && typeof a == "object" ? di(a) : n();
};
function fv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : I_();
  const t = (ie) => fv(ie);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== ci.document || !e.Element)
    return t.isSupported = !1, t;
  let i = e.document;
  const n = i, a = n.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, o = e.Node, c = e.Element, u = e.NodeFilter, y = e.NamedNodeMap;
  y === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, h = e.trustedTypes, T = c.prototype, C = Ni(T, "cloneNode"), N = Ni(T, "remove"), E = Ni(T, "nextSibling"), R = Ni(T, "childNodes"), D = Ni(T, "parentNode"), $ = Ni(T, "shadowRoot"), G = Ni(T, "attributes"), j = o && o.prototype ? Ni(o.prototype, "nodeType") : null, Z = o && o.prototype ? Ni(o.prototype, "nodeName") : null, x = o && o.prototype ? Ni(o.prototype, "ownerDocument") : null, J = function(S) {
    return j ? j(S) : S.nodeType;
  }, de = function(S) {
    return Z ? Z(S) : S.nodeName;
  };
  if (typeof r == "function") {
    const ie = i.createElement("template");
    ie.content && ie.content.ownerDocument && (i = ie.content.ownerDocument);
  }
  let Y, le = "", he, ne = !1, oe = 0;
  const M = function() {
    if (oe > 0)
      throw ma('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, z = function(S) {
    M(), oe++;
    try {
      return Y.createHTML(S);
    } finally {
      oe--;
    }
  }, X = function(S) {
    M(), oe++;
    try {
      return Y.createScriptURL(S);
    } finally {
      oe--;
    }
  }, ce = function() {
    return ne || (he = P_(h, a), ne = !0), he;
  }, te = i, be = te.implementation, ve = te.createNodeIterator, Ne = te.createDocumentFragment, pe = te.getElementsByTagName, Be = n.importNode;
  let Le = Jf();
  t.isSupported = typeof cv == "function" && typeof D == "function" && be && be.createHTMLDocument !== void 0;
  const rt = __, ft = w_, pt = S_, Et = C_, Ge = T_, gt = k_, B = E_, w = O_;
  let k = Yf, A = null;
  const I = qe({}, [...Kf, ...xc, ...Nc, ...Lc, ...Gf]);
  let L = null;
  const U = qe({}, [...qf, ...Rc, ...Wf, ...vs]);
  let q = Object.seal(Za(null, {
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
  })), K = null, ee = null;
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
  let we = !0, se = !0, fe = !1, Ee = !0, Re = !1, Ue = !0, Me = !1, it = !1, Ye = null, ct = null, wt = !1, St = !1, Fi = !1, ht = !1, At = !0, Dt = !1;
  const Mt = "user-content-";
  let En = !0, Di = !1, Mi = {}, Ti = null;
  const Fa = qe({}, [
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
  let cr = null;
  const ur = qe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ji = null;
  const An = qe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), zi = "http://www.w3.org/1998/Math/MathML", Ui = "http://www.w3.org/2000/svg", ot = "http://www.w3.org/1999/xhtml";
  let On = ot, Da = !1, dr = null;
  const fr = qe({}, [zi, Ui, ot], Oc), pr = Ct(["mi", "mo", "mn", "ms", "mtext"]);
  let Qi = qe({}, pr);
  const xn = Ct(["annotation-xml"]);
  let hr = qe({}, xn);
  const Zl = qe({}, ["title", "style", "font", "a", "script"]);
  let ea = null;
  const zt = ["application/xhtml+xml", "text/html"], Nn = "text/html";
  let ut = null, Ln = null;
  const Jl = i.createElement("form"), Bo = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, vr = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ln && Ln === S)
      return;
    (!S || typeof S != "object") && (S = {}), S = di(S), ea = // eslint-disable-next-line unicorn/prefer-includes
    zt.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? Nn : S.PARSER_MEDIA_TYPE, ut = ea === "application/xhtml+xml" ? Oc : Jr, A = Dn(S, "ALLOWED_TAGS", I, {
      transform: ut
    }), L = Dn(S, "ALLOWED_ATTR", U, {
      transform: ut
    }), dr = Dn(S, "ALLOWED_NAMESPACES", fr, {
      transform: Oc
    }), Ji = Dn(S, "ADD_URI_SAFE_ATTR", An, {
      transform: ut,
      base: An
    }), cr = Dn(S, "ADD_DATA_URI_TAGS", ur, {
      transform: ut,
      base: ur
    }), Ti = Dn(S, "FORBID_CONTENTS", Fa, {
      transform: ut
    }), K = Dn(S, "FORBID_TAGS", di({}), {
      transform: ut
    }), ee = Dn(S, "FORBID_ATTR", di({}), {
      transform: ut
    }), Mi = ri(S, "USE_PROFILES") ? S.USE_PROFILES && typeof S.USE_PROFILES == "object" ? di(S.USE_PROFILES) : S.USE_PROFILES : !1, we = S.ALLOW_ARIA_ATTR !== !1, se = S.ALLOW_DATA_ATTR !== !1, fe = S.ALLOW_UNKNOWN_PROTOCOLS || !1, Ee = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Re = S.SAFE_FOR_TEMPLATES || !1, Ue = S.SAFE_FOR_XML !== !1, Me = S.WHOLE_DOCUMENT || !1, St = S.RETURN_DOM || !1, Fi = S.RETURN_DOM_FRAGMENT || !1, ht = S.RETURN_TRUSTED_TYPE || !1, wt = S.FORCE_BODY || !1, At = S.SANITIZE_DOM !== !1, Dt = S.SANITIZE_NAMED_PROPS || !1, En = S.KEEP_CONTENT !== !1, Di = S.IN_PLACE || !1, k = b_(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : Yf, On = typeof S.NAMESPACE == "string" ? S.NAMESPACE : ot, Qi = Ic(
      S,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => qe({}, pr)
      // Default built-in map
    ), hr = Ic(
      S,
      "HTML_INTEGRATION_POINTS",
      () => qe({}, xn)
      // Default built-in map
    );
    const P = Ic(S, "CUSTOM_ELEMENT_HANDLING", () => Za(null));
    if (q = Za(null), ri(P, "tagNameCheck") && Bo(P.tagNameCheck) && (q.tagNameCheck = P.tagNameCheck), ri(P, "attributeNameCheck") && Bo(P.attributeNameCheck) && (q.attributeNameCheck = P.attributeNameCheck), ri(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), kt(q), Re && (se = !1), Fi && (St = !0), Mi && (A = qe({}, Gf), L = Za(null), Mi.html === !0 && (qe(A, Kf), qe(L, qf)), Mi.svg === !0 && (qe(A, xc), qe(L, Rc), qe(L, vs)), Mi.svgFilters === !0 && (qe(A, Nc), qe(L, Rc), qe(L, vs)), Mi.mathMl === !0 && (qe(A, Lc), qe(L, Wf), qe(L, vs))), V.tagCheck = null, V.attributeCheck = null, ri(S, "ADD_TAGS") && (typeof S.ADD_TAGS == "function" ? V.tagCheck = S.ADD_TAGS : ar(S.ADD_TAGS) && (A === I && (A = di(A)), qe(A, S.ADD_TAGS, ut))), ri(S, "ADD_ATTR") && (typeof S.ADD_ATTR == "function" ? V.attributeCheck = S.ADD_ATTR : ar(S.ADD_ATTR) && (L === U && (L = di(L)), qe(L, S.ADD_ATTR, ut))), ri(S, "ADD_FORBID_CONTENTS") && ar(S.ADD_FORBID_CONTENTS) && (Ti === Fa && (Ti = di(Ti)), qe(Ti, S.ADD_FORBID_CONTENTS, ut)), En && (A["#text"] = !0), Me && qe(A, ["html", "head", "body"]), A.table && (qe(A, ["tbody"]), delete K.tbody), S.TRUSTED_TYPES_POLICY) {
      if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ma('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ma('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const W = Y;
      Y = S.TRUSTED_TYPES_POLICY;
      try {
        le = z("");
      } catch (ue) {
        throw Y = W, ue;
      }
    } else S.TRUSTED_TYPES_POLICY === null ? (Y = void 0, le = "") : (Y === void 0 && (Y = ce()), Y && typeof le == "string" && (le = z("")));
    Ct && Ct(S), Ln = S;
  }, Ho = qe({}, [...xc, ...Nc, ...m_]), Vo = qe({}, [...Lc, ...y_]), Ql = function(S, P, W) {
    return P.namespaceURI === ot ? S === "svg" : P.namespaceURI === zi ? S === "svg" && (W === "annotation-xml" || Qi[W]) : !!Ho[S];
  }, ec = function(S, P, W) {
    return P.namespaceURI === ot ? S === "math" : P.namespaceURI === Ui ? S === "math" && hr[W] : !!Vo[S];
  }, tc = function(S, P, W) {
    return P.namespaceURI === Ui && !hr[W] || P.namespaceURI === zi && !Qi[W] ? !1 : !Vo[S] && (Zl[S] || !Ho[S]);
  }, ic = function(S) {
    let P = D(S);
    (!P || !P.tagName) && (P = {
      namespaceURI: On,
      tagName: "template"
    });
    const W = Jr(S.tagName), ue = Jr(P.tagName);
    return dr[S.namespaceURI] ? S.namespaceURI === Ui ? Ql(W, P, ue) : S.namespaceURI === zi ? ec(W, P, ue) : S.namespaceURI === ot ? tc(W, P, ue) : !!(ea === "application/xhtml+xml" && dr[S.namespaceURI]) : !1;
  }, ji = function(S) {
    Hr(t.removed, {
      element: S
    });
    try {
      D(S).removeChild(S);
    } catch {
      if (N(S), !D(S))
        throw ma("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ko = function(S, P, W) {
    try {
      S.removeAttributeNode(P);
    } catch {
      try {
        S.removeAttribute(W);
      } catch {
      }
    }
  }, Ma = function(S) {
    ta(S);
    const P = R(S);
    if (P) {
      const ue = [];
      wa(P, (me) => {
        Hr(ue, me);
      }), wa(ue, (me) => {
        try {
          N(me);
        } catch {
        }
      });
    }
    const W = G(S);
    if (W)
      for (let ue = W.length - 1; ue >= 0; --ue) {
        const me = W[ue], xe = me && me.name;
        typeof xe == "string" && Ko(S, me, xe);
      }
  }, en = function(S, P, W) {
    if (!W)
      try {
        W = P.getAttributeNode(S);
      } catch {
        W = null;
      }
    Hr(t.removed, {
      attribute: W || null,
      from: P
    });
    try {
      W ? P.removeAttributeNode(W) : P.removeAttribute(S);
    } catch {
      try {
        P.removeAttribute(S);
      } catch {
      }
    }
    if (S === "is")
      if (St || Fi)
        try {
          ji(P);
        } catch {
        }
      else
        try {
          P.setAttribute(S, "");
        } catch {
        }
  }, nc = function(S) {
    const P = G(S);
    if (P)
      for (let W = P.length - 1; W >= 0; --W) {
        const ue = P[W], me = ue && ue.name;
        typeof me != "string" || L[ut(me)] || Ko(S, ue, me);
      }
  }, ta = function(S) {
    const P = [S];
    for (; P.length > 0; ) {
      const W = P.pop();
      J(W) === ci.element && nc(W);
      const me = R(W);
      if (me)
        for (let xe = me.length - 1; xe >= 0; --xe)
          P.push(me[xe]);
    }
  }, za = function(S, P) {
    return Ue ? S === "patchsrc" ? !0 : S === "for" && P !== "label" && P !== "output" : !1;
  }, gr = function(S) {
    if (!Ue)
      return;
    const P = [S];
    for (; P.length > 0; ) {
      const W = P.pop(), ue = J(W);
      if (ue === ci.processingInstruction || ue === ci.comment && Bt(Zf, W.data)) {
        try {
          N(W);
        } catch {
        }
        continue;
      }
      if (ue === ci.element) {
        const xe = W, He = ut(de(W));
        try {
          xe.hasAttribute && xe.hasAttribute("patchsrc") && xe.removeAttribute("patchsrc"), xe.hasAttribute && xe.hasAttribute("for") && za("for", He) && xe.removeAttribute("for");
        } catch {
        }
      }
      const me = R(W);
      if (me)
        for (let xe = me.length - 1; xe >= 0; --xe)
          P.push(me[xe]);
    }
  }, Ua = function(S) {
    let P = null, W = null;
    if (wt)
      S = "<remove></remove>" + S;
    else {
      const xe = jf(S, /^[\r\n\t ]+/);
      W = xe && xe[0];
    }
    ea === "application/xhtml+xml" && On === ot && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const ue = Y ? z(S) : S;
    if (On === ot)
      try {
        P = new f().parseFromString(ue, ea);
      } catch {
      }
    if (!P || !P.documentElement) {
      P = be.createDocument(On, "template", null);
      try {
        P.documentElement.innerHTML = Da ? le : ue;
      } catch {
      }
    }
    const me = P.body || P.documentElement;
    return S && W && me.insertBefore(i.createTextNode(W), me.childNodes[0] || null), On === ot ? pe.call(P, Me ? "html" : "body")[0] : Me ? P.documentElement : me;
  }, ja = function(S) {
    const P = x ? x(S) : S.ownerDocument;
    return ve.call(
      P || S,
      S,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, ia = function(S) {
    return S = Vr(S, rt, " "), S = Vr(S, ft, " "), S = Vr(S, pt, " "), S;
  }, br = function(S) {
    var P;
    S.normalize();
    const W = x ? x(S) : S.ownerDocument, ue = ve.call(
      W || S,
      S,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let me = ue.nextNode();
    for (; me; )
      me.data = ia(me.data), me = ue.nextNode();
    const xe = (P = S.querySelectorAll) === null || P === void 0 ? void 0 : P.call(S, "template");
    xe && wa(xe, (He) => {
      tn(He.content) && br(He.content);
    });
  }, na = function(S) {
    const P = Z ? Z(S) : null;
    return typeof P != "string" || ut(P) !== "form" ? !1 : typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    S.attributes !== G(S) || typeof S.removeAttribute != "function" || typeof S.setAttribute != "function" || typeof S.namespaceURI != "string" || typeof S.insertBefore != "function" || typeof S.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    S.nodeType !== j(S) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    S.childNodes !== R(S);
  }, tn = function(S) {
    if (!j || typeof S != "object" || S === null)
      return !1;
    try {
      return j(S) === ci.documentFragment;
    } catch {
      return !1;
    }
  }, aa = function(S) {
    if (!j || typeof S != "object" || S === null)
      return !1;
    try {
      return typeof j(S) == "number";
    } catch {
      return !1;
    }
  };
  function ni(ie, S, P) {
    ie.length !== 0 && wa(ie, (W) => {
      W.call(t, S, P, Ln);
    });
  }
  const mr = function(S, P) {
    return !!(Ue && S.hasChildNodes() && !aa(S.firstElementChild) && Bt(Xf, S.textContent) && Bt(Xf, S.innerHTML) || Ue && S.namespaceURI === ot && L_[P] && (aa(S.firstElementChild) || typeof S.textContent == "string" && Bt(R_[P], S.textContent)) || S.nodeType === ci.processingInstruction || Ue && S.nodeType === ci.comment && Bt(Zf, S.data));
  }, ra = function(S, P) {
    if (S instanceof RegExp)
      return Bt(S, P);
    if (S instanceof Function) {
      for (var W = arguments.length, ue = new Array(W > 2 ? W - 2 : 0), me = 2; me < W; me++)
        ue[me - 2] = arguments[me];
      return !!S(P, ...ue);
    }
    return !1;
  }, ki = function(S, P, W) {
    if (!K[P] && Sr(P) && ra(q.tagNameCheck, P))
      return !1;
    if (En && !Ti[P]) {
      const ue = D(S), me = R(S);
      if (me && ue) {
        const xe = me.length;
        for (let He = xe - 1; He >= 0; --He) {
          const nt = S === W ? C(me[He], !0) : me[He];
          ue.insertBefore(nt, E(S));
        }
      }
    }
    return ji(S), !0;
  }, yr = function(S, P, W, ue) {
    return S.length === 0 ? P : P === W || P === ue ? di(P) : P;
  }, _r = function(S, P) {
    return S === P || D(S) !== null ? !1 : (Di && ta(S), !0);
  }, wr = function(S, P) {
    if (ni(Le.beforeSanitizeElements, S, null), _r(S, P))
      return !0;
    if (na(S))
      return ji(S), !0;
    const W = ut(de(S));
    if (A = yr(Le.uponSanitizeElement, A, I, Ye), ni(Le.uponSanitizeElement, S, {
      tagName: W,
      allowedTags: A
    }), _r(S, P))
      return !0;
    if (mr(S, W))
      return ji(S), !0;
    if (K[W] || !(V.tagCheck instanceof Function && V.tagCheck(W)) && !A[W]) {
      const me = ki(S, W, P);
      return me === !1 && ni(Le.afterSanitizeElements, S, null), me;
    }
    if (J(S) === ci.element && !ic(S) || (W === "noscript" || W === "noembed" || W === "noframes") && Bt(x_, S.innerHTML))
      return ji(S), !0;
    if (Re && S.nodeType === ci.text) {
      const me = ia(S.textContent);
      S.textContent !== me && (Hr(t.removed, {
        element: S.cloneNode()
      }), S.textContent = me);
    }
    return ni(Le.afterSanitizeElements, S, null), !1;
  }, Go = function(S, P, W) {
    if (ee[P] || za(P, S) || At && (P === "id" || P === "name") && (W in i || W in Jl))
      return !1;
    const ue = L[P] || V.attributeCheck instanceof Function && V.attributeCheck(P, S);
    return se && Bt(Et, P) || we && Bt(Ge, P) ? !0 : ue ? Ji[P] || Bt(k, Vr(W, B, "")) || (P === "src" || P === "xlink:href" || P === "href") && S !== "script" && Bf(W, "data:") === 0 && cr[S] || fe && !Bt(gt, Vr(W, B, "")) ? !0 : !W : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Sr(S) && ra(q.tagNameCheck, S) && ra(q.attributeNameCheck, P, S) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      P === "is" && q.allowCustomizedBuiltInElements && ra(q.tagNameCheck, W)
    );
  }, ac = qe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Sr = function(S) {
    return !ac[Jr(S)] && Bt(w, S);
  }, qo = function(S, P, W, ue) {
    if (Y && typeof h == "object" && typeof h.getAttributeType == "function" && !W)
      switch (h.getAttributeType(S, P)) {
        case "TrustedHTML":
          return z(ue);
        case "TrustedScriptURL":
          return X(ue);
      }
    return ue;
  }, Wo = function(S, P, W, ue) {
    try {
      W ? S.setAttributeNS(W, P, ue) : S.setAttribute(P, ue), na(S) ? ji(S) : Uf(t.removed);
    } catch {
      en(P, S);
    }
  }, Yo = function(S) {
    ni(Le.beforeSanitizeAttributes, S, null);
    const P = S.attributes;
    if (!P || na(S))
      return;
    L = yr(Le.uponSanitizeAttribute, L, U, ct);
    const W = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: L,
      forceKeepAttr: void 0
    };
    let ue = P.length;
    const me = ut(S.nodeName);
    for (; ue--; ) {
      const xe = P[ue], He = xe.name, nt = xe.namespaceURI, Ot = xe.value, bt = ut(He), Tr = Ot;
      let xt = He === "value" ? Tr : d_(Tr);
      if (W.attrName = bt, W.attrValue = xt, W.keepAttr = !0, W.forceKeepAttr = void 0, ni(Le.uponSanitizeAttribute, S, W), xt = W.attrValue, Dt && (bt === "id" || bt === "name") && Bf(xt, Mt) !== 0 && (en(He, S, xe), xt = Mt + xt), Ue && Bt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, xt)) {
        en(He, S, xe);
        continue;
      }
      if (bt === "attributename" && jf(xt, "href")) {
        en(He, S, xe);
        continue;
      }
      if (!W.forceKeepAttr) {
        if (!W.keepAttr) {
          en(He, S, xe);
          continue;
        }
        if (!Ee && Bt(N_, xt)) {
          en(He, S, xe);
          continue;
        }
        if (Re && (xt = ia(xt)), !Go(me, bt, xt)) {
          en(He, S, xe);
          continue;
        }
        xt = qo(me, bt, nt, xt), xt !== Tr && Wo(S, He, nt, xt);
      }
    }
    ni(Le.afterSanitizeAttributes, S, null);
  }, Ba = function(S) {
    let P = null;
    const W = ja(S);
    for (ni(Le.beforeSanitizeShadowDOM, S, null); P = W.nextNode(); )
      if (ni(Le.uponSanitizeShadowNode, P, null), wr(P, S), Yo(P), tn(P.content) && Ba(P.content), J(P) === ci.element) {
        const ue = $(P);
        tn(ue) && (Cr(ue), Ba(ue));
      }
    ni(Le.afterSanitizeShadowDOM, S, null);
  }, Cr = function(S) {
    const P = [{
      node: S,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const W = P.pop();
      if (W.shadow) {
        Ba(W.shadow);
        continue;
      }
      const ue = W.node, xe = J(ue) === ci.element, He = R(ue);
      if (He)
        for (let nt = He.length - 1; nt >= 0; --nt)
          P.push({
            node: He[nt],
            shadow: null
          });
      if (xe) {
        const nt = Z ? Z(ue) : null;
        if (typeof nt == "string" && ut(nt) === "template") {
          const Ot = ue.content;
          tn(Ot) && P.push({
            node: Ot,
            shadow: null
          });
        }
      }
      if (xe) {
        const nt = $(ue);
        tn(nt) && P.push({
          node: null,
          shadow: nt
        }, {
          node: nt,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(ie) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, W = null, ue = null, me = null;
    if (Da = !ie, Da && (ie = "<!-->"), typeof ie != "string" && !aa(ie) && (ie = g_(ie), typeof ie != "string"))
      throw ma("dirty is not a string, aborting");
    if (!t.isSupported)
      return ie;
    it ? (A = Ye, L = ct) : vr(S), (Le.uponSanitizeElement.length > 0 || Le.uponSanitizeAttribute.length > 0) && (A = di(A)), Le.uponSanitizeAttribute.length > 0 && (L = di(L)), t.removed = [];
    const xe = Di && typeof ie != "string" && aa(ie);
    if (xe) {
      gr(ie);
      const Ot = de(ie);
      if (typeof Ot == "string") {
        const bt = ut(Ot);
        if (!A[bt] || K[bt])
          throw Ma(ie), ma("root node is forbidden and cannot be sanitized in-place");
      }
      if (na(ie))
        throw Ma(ie), ma("root node is clobbered and cannot be sanitized in-place");
      try {
        Cr(ie);
      } catch (bt) {
        throw Ma(ie), bt;
      }
    } else if (aa(ie))
      P = Ua("<!---->"), W = P.ownerDocument.importNode(ie, !0), W.nodeType === ci.element && W.nodeName === "BODY" || W.nodeName === "HTML" ? P = W : P.appendChild(W), Cr(W);
    else {
      if (!St && !Re && !Me && // eslint-disable-next-line unicorn/prefer-includes
      ie.indexOf("<") === -1)
        return Y && ht ? z(ie) : ie;
      if (P = Ua(ie), !P)
        return St ? null : ht ? le : "";
    }
    P && wt && ji(P.firstChild);
    const He = xe ? ie : P;
    try {
      const Ot = ja(He);
      for (; ue = Ot.nextNode(); )
        wr(ue, He), Yo(ue), tn(ue.content) && Ba(ue.content);
    } catch (Ot) {
      throw xe && (Ma(ie), wa(t.removed, (bt) => {
        bt.element && ta(bt.element);
      })), Ot;
    }
    if (xe)
      return wa(t.removed, (Ot) => {
        Ot.element && ta(Ot.element);
      }), Re && br(ie), ie;
    if (St) {
      if (Re && br(P), Fi)
        for (me = Ne.call(P.ownerDocument); P.firstChild; )
          me.appendChild(P.firstChild);
      else
        me = P;
      return (L.shadowroot || L.shadowrootmode) && (me = Be.call(n, me, !0)), me;
    }
    let nt = Me ? P.outerHTML : P.innerHTML;
    return Me && A["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && Bt(A_, P.ownerDocument.doctype.name) && (nt = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + nt), Re && (nt = ia(nt)), Y && ht ? z(nt) : nt;
  }, t.setConfig = function() {
    let ie = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    vr(ie), it = !0, Ye = A, ct = L;
  }, t.clearConfig = function() {
    Ln = null, it = !1, Ye = null, ct = null, Y = he, le = "";
  }, t.isValidAttribute = function(ie, S, P) {
    Ln || vr({});
    const W = ut(ie), ue = ut(S);
    return Go(W, ue, P);
  }, t.addHook = function(ie, S) {
    typeof S == "function" && ri(Le, ie) && Hr(Le[ie], S);
  }, t.removeHook = function(ie, S) {
    if (ri(Le, ie)) {
      if (S !== void 0) {
        const P = c_(Le[ie], S);
        return P === -1 ? void 0 : u_(Le[ie], P, 1)[0];
      }
      return Uf(Le[ie]);
    }
  }, t.removeHooks = function(ie) {
    ri(Le, ie) && (Le[ie] = []);
  }, t.removeAllHooks = function() {
    Le = Jf();
  }, t;
}
var pv = fv();
function Qu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pc, Qf;
function $_() {
  if (Qf) return Pc;
  Qf = 1;
  var e = /["'&<>]/;
  Pc = t;
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
  return Pc;
}
var F_ = $_();
const Hs = /* @__PURE__ */ Qu(F_);
function D_() {
  return globalThis._nc_l10n_locale;
}
function M_() {
  return D_().replaceAll(/_/g, "-");
}
function Vl() {
  return globalThis._nc_l10n_language;
}
function z_(e) {
  const t = Vl();
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
function hv(e) {
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
  }, u = (E) => E, y = (c.sanitize ? pv.sanitize : u) || u, f = c.escape ? Hs : u, h = (E) => typeof E == "string" || typeof E == "number", T = (E, R, D) => E.replace(/%n/g, "" + D).replace(/{([^{}]*)}/g, ($, G) => {
    if (R === void 0 || !(G in R))
      return f($);
    const j = R[G];
    return h(j) ? f(`${j}`) : typeof j == "object" && h(j.value) ? (j.escape !== !1 ? Hs : u)(`${j.value}`) : f($);
  });
  let N = (a?.bundle ?? hv(e)).translations[t] || t;
  return N = Array.isArray(N) ? N[0] : N, y(typeof r == "object" || o !== void 0 ? T(
    N,
    r,
    o
  ) : N);
}
function ui(e, t, i, n, a, r) {
  const o = "_" + t + "_::_" + i + "_", c = r?.bundle ?? hv(e), u = c.translations[o];
  if (typeof u < "u") {
    const y = u;
    if (Array.isArray(y)) {
      const f = c.pluralFunction(n);
      return b(e, y[f], a, n, r);
    }
  }
  return n === 1 ? b(e, t, a, n, r) : b(e, i, a, n, r);
}
function U_(e, t = Vl()) {
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
class Vs {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, i, n) {
    this.scope = `${n ? Vs.GLOBAL_SCOPE_PERSISTENT : Vs.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = i;
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
    return new Vs(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function vv(e) {
  return new j_(e);
}
function B_() {
  try {
    return Ju("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var $c, ep;
function gv() {
  if (ep) return $c;
  ep = 1;
  var e = {};
  return $c = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...i) => console.error("SEMVER", ...i) : () => {
  }, $c;
}
var Fc, tp;
function bv() {
  if (tp) return Fc;
  tp = 1;
  const e = "2.0.0", t = 256, i = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, n = 16, a = t - 6;
  return Fc = {
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
  }, Fc;
}
var gs = { exports: {} }, ip;
function H_() {
  return ip || (ip = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: i,
      MAX_SAFE_BUILD_LENGTH: n,
      MAX_LENGTH: a
    } = bv(), r = gv();
    t = e.exports = {};
    const o = t.re = [], c = t.safeRe = [], u = t.src = [], y = t.safeSrc = [], f = t.t = {};
    let h = 0;
    const T = "[a-zA-Z0-9-]", C = [
      ["\\s", 1],
      ["\\d", a],
      [T, n]
    ], N = (R) => {
      for (const [D, $] of C)
        R = R.split(`${D}*`).join(`${D}{0,${$}}`).split(`${D}+`).join(`${D}{1,${$}}`);
      return R;
    }, E = (R, D, $) => {
      const G = N(D), j = h++;
      r(R, j, D), f[R] = j, u[j] = D, y[j] = G, o[j] = new RegExp(D, $ ? "g" : void 0), c[j] = new RegExp(G, $ ? "g" : void 0);
    };
    E("NUMERICIDENTIFIER", "0|[1-9]\\d*"), E("NUMERICIDENTIFIERLOOSE", "\\d+"), E("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${T}*`), E("MAINVERSION", `(${u[f.NUMERICIDENTIFIER]})\\.(${u[f.NUMERICIDENTIFIER]})\\.(${u[f.NUMERICIDENTIFIER]})`), E("MAINVERSIONLOOSE", `(${u[f.NUMERICIDENTIFIERLOOSE]})\\.(${u[f.NUMERICIDENTIFIERLOOSE]})\\.(${u[f.NUMERICIDENTIFIERLOOSE]})`), E("PRERELEASEIDENTIFIER", `(?:${u[f.NONNUMERICIDENTIFIER]}|${u[f.NUMERICIDENTIFIER]})`), E("PRERELEASEIDENTIFIERLOOSE", `(?:${u[f.NONNUMERICIDENTIFIER]}|${u[f.NUMERICIDENTIFIERLOOSE]})`), E("PRERELEASE", `(?:-(${u[f.PRERELEASEIDENTIFIER]}(?:\\.${u[f.PRERELEASEIDENTIFIER]})*))`), E("PRERELEASELOOSE", `(?:-?(${u[f.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[f.PRERELEASEIDENTIFIERLOOSE]})*))`), E("BUILDIDENTIFIER", `${T}+`), E("BUILD", `(?:\\+(${u[f.BUILDIDENTIFIER]}(?:\\.${u[f.BUILDIDENTIFIER]})*))`), E("FULLPLAIN", `v?${u[f.MAINVERSION]}${u[f.PRERELEASE]}?${u[f.BUILD]}?`), E("FULL", `^${u[f.FULLPLAIN]}$`), E("LOOSEPLAIN", `[v=\\s]*${u[f.MAINVERSIONLOOSE]}${u[f.PRERELEASELOOSE]}?${u[f.BUILD]}?`), E("LOOSE", `^${u[f.LOOSEPLAIN]}$`), E("GTLT", "((?:<|>)?=?)"), E("XRANGEIDENTIFIERLOOSE", `${u[f.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), E("XRANGEIDENTIFIER", `${u[f.NUMERICIDENTIFIER]}|x|X|\\*`), E("XRANGEPLAIN", `[v=\\s]*(${u[f.XRANGEIDENTIFIER]})(?:\\.(${u[f.XRANGEIDENTIFIER]})(?:\\.(${u[f.XRANGEIDENTIFIER]})(?:${u[f.PRERELEASE]})?${u[f.BUILD]}?)?)?`), E("XRANGEPLAINLOOSE", `[v=\\s]*(${u[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[f.XRANGEIDENTIFIERLOOSE]})(?:${u[f.PRERELEASELOOSE]})?${u[f.BUILD]}?)?)?`), E("XRANGE", `^${u[f.GTLT]}\\s*${u[f.XRANGEPLAIN]}$`), E("XRANGELOOSE", `^${u[f.GTLT]}\\s*${u[f.XRANGEPLAINLOOSE]}$`), E("COERCEPLAIN", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`), E("COERCE", `${u[f.COERCEPLAIN]}(?:$|[^\\d])`), E("COERCEFULL", u[f.COERCEPLAIN] + `(?:${u[f.PRERELEASE]})?(?:${u[f.BUILD]})?(?:$|[^\\d])`), E("COERCERTL", u[f.COERCE], !0), E("COERCERTLFULL", u[f.COERCEFULL], !0), E("LONETILDE", "(?:~>?)"), E("TILDETRIM", `(\\s*)${u[f.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", E("TILDE", `^${u[f.LONETILDE]}${u[f.XRANGEPLAIN]}$`), E("TILDELOOSE", `^${u[f.LONETILDE]}${u[f.XRANGEPLAINLOOSE]}$`), E("LONECARET", "(?:\\^)"), E("CARETTRIM", `(\\s*)${u[f.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", E("CARET", `^${u[f.LONECARET]}${u[f.XRANGEPLAIN]}$`), E("CARETLOOSE", `^${u[f.LONECARET]}${u[f.XRANGEPLAINLOOSE]}$`), E("COMPARATORLOOSE", `^${u[f.GTLT]}\\s*(${u[f.LOOSEPLAIN]})$|^$`), E("COMPARATOR", `^${u[f.GTLT]}\\s*(${u[f.FULLPLAIN]})$|^$`), E("COMPARATORTRIM", `(\\s*)${u[f.GTLT]}\\s*(${u[f.LOOSEPLAIN]}|${u[f.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", E("HYPHENRANGE", `^\\s*(${u[f.XRANGEPLAIN]})\\s+-\\s+(${u[f.XRANGEPLAIN]})\\s*$`), E("HYPHENRANGELOOSE", `^\\s*(${u[f.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[f.XRANGEPLAINLOOSE]})\\s*$`), E("STAR", "(<|>)?=?\\s*\\*"), E("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), E("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(gs, gs.exports)), gs.exports;
}
var Dc, np;
function V_() {
  if (np) return Dc;
  np = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Dc = (n) => n ? typeof n != "object" ? e : n : t, Dc;
}
var Mc, ap;
function K_() {
  if (ap) return Mc;
  ap = 1;
  const e = /^[0-9]+$/, t = (n, a) => {
    if (typeof n == "number" && typeof a == "number")
      return n === a ? 0 : n < a ? -1 : 1;
    const r = e.test(n), o = e.test(a);
    return r && o && (n = +n, a = +a), n === a ? 0 : r && !o ? -1 : o && !r ? 1 : n < a ? -1 : 1;
  };
  return Mc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (n, a) => t(a, n)
  }, Mc;
}
var zc, rp;
function mv() {
  if (rp) return zc;
  rp = 1;
  const e = gv(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: i } = bv(), { safeRe: n, t: a } = H_(), r = V_(), { compareIdentifiers: o } = K_(), c = (y, f) => {
    const h = f.split(".");
    if (h.length > y.length)
      return !1;
    for (let T = 0; T < h.length; T++)
      if (o(y[T], h[T]) !== 0)
        return !1;
    return !0;
  };
  class u {
    constructor(f, h) {
      if (h = r(h), f instanceof u) {
        if (f.loose === !!h.loose && f.includePrerelease === !!h.includePrerelease)
          return f;
        f = f.version;
      } else if (typeof f != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof f}".`);
      if (f.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", f, h), this.options = h, this.loose = !!h.loose, this.includePrerelease = !!h.includePrerelease;
      const T = f.trim().match(h.loose ? n[a.LOOSE] : n[a.FULL]);
      if (!T)
        throw new TypeError(`Invalid Version: ${f}`);
      if (this.raw = f, this.major = +T[1], this.minor = +T[2], this.patch = +T[3], this.major > i || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > i || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > i || this.patch < 0)
        throw new TypeError("Invalid patch version");
      T[4] ? this.prerelease = T[4].split(".").map((C) => {
        if (/^[0-9]+$/.test(C)) {
          const N = +C;
          if (N >= 0 && N < i)
            return N;
        }
        return C;
      }) : this.prerelease = [], this.build = T[5] ? T[5].split(".") : [], this.format();
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
      let h = 0;
      do {
        const T = this.prerelease[h], C = f.prerelease[h];
        if (e("prerelease compare", h, T, C), T === void 0 && C === void 0)
          return 0;
        if (C === void 0)
          return 1;
        if (T === void 0)
          return -1;
        if (T === C)
          continue;
        return o(T, C);
      } while (++h);
    }
    compareBuild(f) {
      f instanceof u || (f = new u(f, this.options));
      let h = 0;
      do {
        const T = this.build[h], C = f.build[h];
        if (e("build compare", h, T, C), T === void 0 && C === void 0)
          return 0;
        if (C === void 0)
          return 1;
        if (T === void 0)
          return -1;
        if (T === C)
          continue;
        return o(T, C);
      } while (++h);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(f, h, T) {
      if (f.startsWith("pre")) {
        if (!h && T === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (h) {
          const C = `-${h}`.match(this.options.loose ? n[a.PRERELEASELOOSE] : n[a.PRERELEASE]);
          if (!C || C[1] !== h)
            throw new Error(`invalid identifier: ${h}`);
        }
      }
      switch (f) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", h, T);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", h, T);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", h, T), this.inc("pre", h, T);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", h, T), this.inc("pre", h, T);
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
          const C = Number(T) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [C];
          else {
            let N = this.prerelease.length;
            for (; --N >= 0; )
              typeof this.prerelease[N] == "number" && (this.prerelease[N]++, N = -2);
            if (N === -1) {
              if (h === this.prerelease.join(".") && T === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(C);
            }
          }
          if (h) {
            let N = [h, C];
            if (T === !1 && (N = [h]), c(this.prerelease, h)) {
              const E = this.prerelease[h.split(".").length];
              isNaN(E) && (this.prerelease = N);
            } else
              this.prerelease = N;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${f}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return zc = u, zc;
}
var Uc, op;
function G_() {
  if (op) return Uc;
  op = 1;
  const e = mv();
  return Uc = (i, n) => new e(i, n).major, Uc;
}
var q_ = G_();
const sp = /* @__PURE__ */ Qu(q_);
var jc, lp;
function W_() {
  if (lp) return jc;
  lp = 1;
  const e = mv();
  return jc = (i, n, a = !1) => {
    if (i instanceof e)
      return i;
    try {
      return new e(i, n);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, jc;
}
var Bc, cp;
function Y_() {
  if (cp) return Bc;
  cp = 1;
  const e = W_();
  return Bc = (i, n) => {
    const a = e(i, n);
    return a ? a.version : null;
  }, Bc;
}
var X_ = Y_();
const Z_ = /* @__PURE__ */ Qu(X_);
class J_ {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !Z_(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : sp(t.getVersion()) !== sp(this.getVersion()) && console.warn(
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
let Gr = null;
function ed() {
  return Gr !== null ? Gr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Gr = new J_(window._nc_event_bus) : Gr = window._nc_event_bus = new Q_(), Gr);
}
function yv(e, t) {
  ed().subscribe(e, t);
}
function e1(e, t) {
  ed().unsubscribe(e, t);
}
function yn(e, ...t) {
  ed().emit(e, ...t);
}
const _v = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const t1 = Object.prototype.toString, i1 = (e) => t1.call(e) === "[object Object]", qa = () => {
}, n1 = /* @__PURE__ */ a1();
function a1() {
  var e, t, i;
  return _v && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((i = window) === null || i === void 0 ? void 0 : i.navigator.userAgent));
}
function Hc(e) {
  return Array.isArray(e) ? e : [e];
}
function r1(e, t, i) {
  return Xe(e, t, {
    ...i,
    immediate: !0
  });
}
const wv = _v ? window : void 0;
function Qr(e) {
  var t;
  const i = bn(e);
  return (t = i?.$el) !== null && t !== void 0 ? t : i;
}
function rr(...e) {
  const t = (n, a, r, o) => (n.addEventListener(a, r, o), () => n.removeEventListener(a, r, o)), i = H(() => {
    const n = Hc(bn(e[0])).filter((a) => a != null);
    return n.every((a) => typeof a != "string") ? n : void 0;
  });
  return r1(() => {
    var n, a;
    return [
      (n = (a = i.value) === null || a === void 0 ? void 0 : a.map((r) => Qr(r))) !== null && n !== void 0 ? n : [wv].filter((r) => r != null),
      Hc(bn(i.value ? e[1] : e[0])),
      Hc(g(i.value ? e[2] : e[1])),
      bn(i.value ? e[3] : e[2])
    ];
  }, ([n, a, r, o], c, u) => {
    if (!n?.length || !a?.length || !r?.length) return;
    const y = i1(o) ? { ...o } : o, f = n.flatMap((h) => a.flatMap((T) => r.map((C) => t(h, T, C, y))));
    u(() => {
      f.forEach((h) => h());
    });
  }, { flush: "post" });
}
let up = !1;
function dp(e, t, i = {}) {
  const { window: n = wv, ignore: a = [], capture: r = !0, detectIframe: o = !1, controls: c = !1 } = i;
  if (!n) return c ? {
    stop: qa,
    cancel: qa,
    trigger: qa
  } : qa;
  if (n1 && !up) {
    up = !0;
    const R = { passive: !0 };
    Array.from(n.document.body.children).forEach((D) => D.addEventListener("click", qa, R)), n.document.documentElement.addEventListener("click", qa, R);
  }
  let u = !0;
  const y = (R) => bn(a).some((D) => {
    if (typeof D == "string") return Array.from(n.document.querySelectorAll(D)).some(($) => $ === R.target || R.composedPath().includes($));
    {
      const $ = Qr(D);
      return $ && (R.target === $ || R.composedPath().includes($));
    }
  });
  function f(R) {
    const D = bn(R);
    return D && D.$.subTree.shapeFlag === 16;
  }
  function h(R, D) {
    const $ = bn(R), G = $.$.subTree && $.$.subTree.children;
    return G == null || !Array.isArray(G) ? !1 : G.some((j) => j.el === D.target || D.composedPath().includes(j.el));
  }
  const T = (R) => {
    const D = Qr(e);
    if (R.target != null && !(!(D instanceof Element) && f(e) && h(e, R)) && !(!D || D === R.target || R.composedPath().includes(D))) {
      if ("detail" in R && R.detail === 0 && (u = !y(R)), !u) {
        u = !0;
        return;
      }
      t(R);
    }
  };
  let C = !1;
  const N = [
    rr(n, "click", (R) => {
      C || (C = !0, setTimeout(() => {
        C = !1;
      }, 0), T(R));
    }, {
      passive: !0,
      capture: r
    }),
    rr(n, "pointerdown", (R) => {
      const D = Qr(e);
      u = !y(R) && !!(D && !R.composedPath().includes(D));
    }, { passive: !0 }),
    o && rr(n, "blur", (R) => {
      setTimeout(() => {
        const D = Qr(e);
        let $ = n.document.activeElement;
        for (; $?.shadowRoot; ) $ = $.shadowRoot.activeElement;
        $?.tagName === "IFRAME" && !D?.contains(n.document.activeElement) && t(R);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), E = () => N.forEach((R) => R());
  return c ? {
    stop: E,
    cancel: () => {
      u = !1;
    },
    trigger: (R) => {
      u = !0, T(R), u = !1;
    }
  } : E;
}
function o1(e, t = {}) {
  const { threshold: i = 50, onSwipe: n, onSwipeEnd: a, onSwipeStart: r, passive: o = !0 } = t, c = /* @__PURE__ */ Rt({
    x: 0,
    y: 0
  }), u = /* @__PURE__ */ Rt({
    x: 0,
    y: 0
  }), y = H(() => c.x - u.x), f = H(() => c.y - u.y), { max: h, abs: T } = Math, C = H(() => h(T(y.value), T(f.value)) >= i), N = /* @__PURE__ */ ph(!1), E = H(() => C.value ? T(y.value) > T(f.value) ? y.value > 0 ? "left" : "right" : f.value > 0 ? "up" : "down" : "none"), R = (J) => [J.touches[0].clientX, J.touches[0].clientY], D = (J, de) => {
    c.x = J, c.y = de;
  }, $ = (J, de) => {
    u.x = J, u.y = de;
  }, G = {
    passive: o,
    capture: !o
  }, j = (J) => {
    N.value && a?.(J, E.value), N.value = !1;
  }, Z = [
    rr(e, "touchstart", (J) => {
      if (J.touches.length !== 1) return;
      const [de, Y] = R(J);
      D(de, Y), $(de, Y), r?.(J);
    }, G),
    rr(e, "touchmove", (J) => {
      if (J.touches.length !== 1) return;
      const [de, Y] = R(J);
      $(de, Y), G.capture && !G.passive && Math.abs(y.value) > Math.abs(f.value) && J.preventDefault(), !N.value && C.value && (N.value = !0), N.value && n?.(J);
    }, G),
    rr(e, ["touchend", "touchcancel"], j, G)
  ];
  return {
    isSwiping: N,
    direction: E,
    coordsStart: c,
    coordsEnd: u,
    lengthX: y,
    lengthY: f,
    stop: () => Z.forEach((J) => J())
  };
}
var s1 = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let i = t, n = e, a = $m(), r = Pm(), o = /* @__PURE__ */ Te([]), c = H(() => o.value.reduce((B, w) => (B[~~w.id] = w) && B, {})), u = H(() => o.value.length), y = /* @__PURE__ */ Te(null), f = /* @__PURE__ */ Te(!1), h = /* @__PURE__ */ Te({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), T = /* @__PURE__ */ Te({
      splitter: null,
      timeoutId: null
    }), C = H(() => ({
      [`splitpanes splitpanes--${n.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": h.value.dragging,
      "splitpanes--ready": f.value
    })), N = () => {
      document.addEventListener("mousemove", D, { passive: !1 }), document.addEventListener("mouseup", $), "ontouchstart" in window && (document.addEventListener("touchmove", D, { passive: !1 }), document.addEventListener("touchend", $));
    }, E = () => {
      document.removeEventListener("mousemove", D, { passive: !1 }), document.removeEventListener("mouseup", $), "ontouchstart" in window && (document.removeEventListener("touchmove", D, { passive: !1 }), document.removeEventListener("touchend", $));
    }, R = (B, w) => {
      let k = B.target.closest(".splitpanes__splitter");
      if (k) {
        let { left: A, top: I } = k.getBoundingClientRect(), { clientX: L, clientY: U } = "ontouchstart" in window && B.touches ? B.touches[0] : B;
        h.value.cursorOffset = n.horizontal ? U - I : L - A;
      }
      N(), h.value.mouseDown = !0, h.value.activeSplitter = w, document.documentElement.style.cursor = n.horizontal ? "row-resize" : "col-resize";
    }, D = (B) => {
      h.value.mouseDown && (B.preventDefault(), h.value.dragging || (window.getSelection()?.removeAllRanges(), h.value.dragging = !0), requestAnimationFrame(() => {
        Y(J(B)), Ge("resize", { event: B }, !0);
      }));
    }, $ = (B) => {
      h.value.dragging && (window.getSelection()?.removeAllRanges(), Ge("resized", { event: B }, !0)), h.value.mouseDown = !1, h.value.activeSplitter = null, setTimeout(() => {
        h.value.dragging = !1, E(), document.documentElement.style.cursor = "";
      }, 100);
    }, G = (B, w) => {
      "ontouchstart" in window && (B.preventDefault(), T.value.splitter === w ? (clearTimeout(T.value.timeoutId), T.value.timeoutId = null, j(B, w), T.value.splitter = null) : (T.value.splitter = w, T.value.timeoutId = setTimeout(() => T.value.splitter = null, 500))), h.value.dragging || Ge("splitter-click", {
        event: B,
        index: w
      }, !0);
    }, j = (B, w) => {
      if (Ge("splitter-dblclick", {
        event: B,
        index: w
      }, !0), n.maximizePanes) {
        let k = 0;
        o.value = o.value.map((A, I) => (A.size = I === w ? A.max : A.min, I !== w && (k += A.min), A)), o.value[w].size -= k, Ge("pane-maximize", {
          event: B,
          index: w,
          pane: o.value[w]
        }), Ge("resized", {
          event: B,
          index: w
        }, !0);
      }
    }, Z = (B, w) => {
      if (!n.keyboardStep) return;
      let k = n.horizontal ? B.key === "ArrowDown" : B.key === "ArrowRight", A = n.horizontal ? B.key === "ArrowUp" : B.key === "ArrowLeft";
      if (!k && !A) return;
      B.preventDefault(), h.value.activeSplitter = w;
      let I = (k ? 1 : -1) * (n.rtl && !n.horizontal ? -1 : 1), L = ne(w) + o.value[w].size;
      le(Math.min(Math.max(L + I * n.keyboardStep, 0), 100)), Ge("resize", { event: B }, !0), Ge("resized", { event: B }, !0), h.value.activeSplitter = null;
    }, x = (B, w) => {
      let k = c.value[w];
      k && Ge("pane-click", {
        event: B,
        index: k.index,
        pane: k
      });
    }, J = (B) => {
      let w = y.value.getBoundingClientRect(), { clientX: k, clientY: A } = "ontouchstart" in window && B.touches ? B.touches[0] : B;
      return {
        x: k - (n.horizontal ? 0 : h.value.cursorOffset) - w.left,
        y: A - (n.horizontal ? h.value.cursorOffset : 0) - w.top
      };
    }, de = (B) => {
      B = B[n.horizontal ? "y" : "x"];
      let w = y.value[n.horizontal ? "clientHeight" : "clientWidth"];
      return n.rtl && !n.horizontal && (B = w - B), B * 100 / w;
    }, Y = (B) => {
      le(de(B));
    }, le = (B) => {
      let w = h.value.activeSplitter;
      if (w === null || w >= o.value.length - 1) return;
      let k = {
        prevPanesSize: ne(w),
        nextPanesSize: oe(w),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, A = 0 + (n.pushOtherPanes ? 0 : k.prevPanesSize), I = 100 - (n.pushOtherPanes ? 0 : k.nextPanesSize);
      B = Math.max(Math.min(B, I), A);
      let L = [w, w + 1], U = o.value[L[0]] || null, q = o.value[L[1]] || null, K = U !== null && U.max < 100 && B >= U.max + k.prevPanesSize, ee = q !== null && q.max < 100 && B <= 100 - (q.max + oe(w + 1));
      if (K || ee) {
        K ? (U.size = U.max, q.size = Math.min(Math.max(100 - U.max - k.prevPanesSize - k.nextPanesSize, q.min), q.max)) : (U.size = Math.min(Math.max(100 - q.max - k.prevPanesSize - oe(w + 1), U.min), U.max), q.size = q.max);
        return;
      }
      if (n.pushOtherPanes) {
        let V = he(k, B);
        if (!V) return;
        ({ sums: k, panesToResize: L } = V), U = o.value[L[0]] || null, q = o.value[L[1]] || null;
      }
      U !== null && (U.size = Math.min(Math.max(B - k.prevPanesSize - k.prevReachedMinPanes, U.min), U.max)), q !== null && (q.size = Math.min(Math.max(100 - B - k.nextPanesSize - k.nextReachedMinPanes, q.min), q.max));
    }, he = (B, w) => {
      let k = h.value.activeSplitter, A = [k, k + 1];
      if (w < B.prevPanesSize + o.value[A[0]].min) {
        if (A[0] = M(k).index, B.prevReachedMinPanes = 0, A[0] < k && o.value.forEach((I, L) => {
          L > A[0] && L <= k && (I.size = I.min, B.prevReachedMinPanes += I.min);
        }), A[0] === void 0) return B.prevReachedMinPanes = 0, o.value[0].size = o.value[0].min, o.value.forEach((I, L) => {
          L > 0 && L <= k && (I.size = I.min, B.prevReachedMinPanes += I.min);
        }), o.value[A[1]].size = 100 - B.prevReachedMinPanes - o.value[0].min - B.prevPanesSize - B.nextPanesSize, null;
        B.prevPanesSize = ne(A[0]);
      }
      return w > 100 - B.nextPanesSize - o.value[A[1]].min && (A[1] = z(k).index, B.nextReachedMinPanes = 0, A[1] > k + 1 && o.value.forEach((I, L) => {
        L > k && L < A[1] && (I.size = I.min, B.nextReachedMinPanes += I.min);
      }), B.nextPanesSize = A[1] === void 0 ? 0 : oe(A[1] - 1), A[1] === void 0) ? (B.nextReachedMinPanes = 0, o.value.forEach((I, L) => {
        L >= k + 1 && (I.size = I.min, B.nextReachedMinPanes += I.min);
      }), A[0] !== void 0 && (o.value[A[0]].size = 100 - B.prevPanesSize - oe(A[0] - 1)), null) : {
        sums: B,
        panesToResize: A
      };
    }, ne = (B) => o.value.reduce((w, k, A) => w + (A < B ? k.size : 0), 0), oe = (B) => o.value.reduce((w, k, A) => w + (A > B + 1 ? k.size : 0), 0), M = (B) => [...o.value].reverse().find((w) => w.index < B && w.size > w.min) || {}, z = (B) => o.value.find((w) => w.index > B + 1 && w.size > w.min) || {}, X = () => {
      let B = Array.from(y.value?.children || []);
      for (let w of B) {
        let k = w.classList.contains("splitpanes__pane"), A = w.classList.contains("splitpanes__splitter");
        !k && !A && (w.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, ce = (B, w, k = !1) => {
      let A = B - 1, I = document.createElement("div");
      I.classList.add("splitpanes__splitter"), k || (I.onmousedown = (L) => R(L, A), typeof window < "u" && "ontouchstart" in window && (I.ontouchstart = (L) => R(L, A)), I.onclick = (L) => G(L, A + 1), n.keyboardStep && (I.setAttribute("tabindex", "0"), I.setAttribute("role", "separator"), I.setAttribute("aria-orientation", n.horizontal ? "horizontal" : "vertical"), I.onkeydown = (L) => Z(L, A))), I.ondblclick = (L) => j(L, A + 1), w.parentNode.insertBefore(I, w);
    }, te = (B) => {
      B.onmousedown = null, B.onclick = null, B.ondblclick = null, B.onkeydown = null, B.remove();
    }, be = () => {
      let B = Array.from(y.value?.children || []);
      for (let k of B) k.className.includes("splitpanes__splitter") && te(k);
      let w = 0;
      for (let k of B) k.className.includes("splitpanes__pane") && (!w && n.firstSplitter ? ce(w, k, !0) : w && ce(w, k), w++);
    }, ve = ({ uid: B, ...w }) => {
      let k = c.value[B];
      for (let [A, I] of Object.entries(w)) k[A] = I;
    }, Ne = !1, pe = (B) => {
      let w = -1;
      Array.from(y.value?.children || []).some((k) => (k.className.includes("splitpanes__pane") && w++, k.isSameNode(B.el))), o.value.splice(w, 0, {
        ...B,
        index: w
      }), o.value.forEach((k, A) => k.index = A), f.value && !Ne && (Ne = !0, ti(() => {
        be(), Le({ addedPane: o.value[w] }), Ge("pane-add", { pane: o.value[w] }), Ne = !1;
      }));
    }, Be = (B) => {
      let w = o.value.findIndex((A) => A.id === B);
      o.value[w].el = null;
      let k = o.value.splice(w, 1)[0];
      o.value.forEach((A, I) => A.index = I), ti(() => {
        be(), Ge("pane-remove", { pane: k }), Le({ removedPane: {
          ...k
        } });
      });
    }, Le = (B = {}) => {
      !B.addedPane && !B.removedPane ? ft() : o.value.some((w) => w.givenSize !== null || w.min || w.max < 100) ? pt(B) : rt(), f.value && Ge("resized");
    }, rt = () => {
      let B = 100 / u.value, w = 100, k = [], A = [];
      for (let I of o.value) I.size = Math.max(Math.min(B, I.max), I.min), w -= I.size, I.size >= I.max && k.push(I.id), I.size <= I.min && A.push(I.id);
      Math.abs(w) > 0.1 && Et(w, k, A);
    }, ft = () => {
      let B = 100, w = [], k = [], A = 0;
      for (let L of o.value) B -= L.size, L.givenSize !== null && A++, L.size >= L.max && w.push(L.id), L.size <= L.min && k.push(L.id);
      let I = 100;
      if (B > 0.1) {
        for (let L of o.value) L.givenSize === null && (L.size = Math.max(Math.min(B / (u.value - A), L.max), L.min)), I -= L.size;
        I > 0.1 && Et(I, w, k);
      }
    }, pt = ({ addedPane: B, removedPane: w } = {}) => {
      let k = o.value.reduce((K, ee) => K + (ee.givenSize === null ? 0 : ee.givenSize), 0), A = o.value.filter((K) => K.givenSize === null).length, I = A > 0 ? (100 - k) / A : 0, L = 0, U = [], q = [];
      for (let K of o.value) L -= K.size, K.size >= K.max && U.push(K.id), K.size <= K.min && q.push(K.id);
      if (!(Math.abs(L) < 0.1)) {
        L = 100;
        for (let K of o.value) K.givenSize === null && (K.size = Math.max(Math.min(I, K.max), K.min)), L -= K.size, K.size >= K.max && U.push(K.id), K.size <= K.min && q.push(K.id);
        Math.abs(L) > 0.1 && Et(L, U, q);
      }
    }, Et = (B, w, k) => {
      let A;
      A = B > 0 ? B / (u.value - w.length) : B / (u.value - k.length), o.value.forEach((I, L) => {
        if (B > 0 && !w.includes(I.id)) {
          let U = Math.max(Math.min(I.size + A, I.max), I.min), q = U - I.size;
          B -= q, I.size = U;
        } else if (!k.includes(I.id)) {
          let U = Math.max(Math.min(I.size + A, I.max), I.min), q = U - I.size;
          B -= q, I.size = U;
        }
      }), Math.abs(B) > 0.1 && f.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, Ge = (B, w = void 0, k = !1) => {
      let A = w?.index ?? h.value.activeSplitter ?? null;
      i(B, {
        ...w,
        ...A !== null && { index: A },
        ...k && A !== null && {
          prevPane: o.value[A - +!!n.firstSplitter],
          nextPane: o.value[A + +!n.firstSplitter]
        },
        panes: o.value.map((I) => ({
          min: I.min,
          max: I.max,
          size: I.size
        }))
      });
    };
    Xe(() => n.firstSplitter, () => be()), Xe(() => n.horizontal, (B) => ti(() => {
      i("direction-changed", {
        horizontal: B,
        panes: o.value.map((w) => ({
          min: w.min,
          max: w.max,
          size: w.size
        }))
      });
    })), Zn(() => {
      X(), be(), Le(), Ge("ready"), f.value = !0;
    }), lr(() => f.value = !1);
    let gt = () => {
      let { class: B, ...w } = a;
      return ai("div", {
        ref: y,
        class: [C.value, B],
        ...w
      }, r.default?.());
    };
    return mi("panes", o), mi("indexedPanes", c), mi("horizontal", H(() => n.horizontal)), mi("requestUpdate", ve), mi("onPaneAdd", pe), mi("onPaneRemove", Be), mi("onPaneClick", x), (B, w) => (m(), je(Gu(gt)));
  }
}), l1 = {
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
    let t = e, i = Kt("requestUpdate"), n = Kt("onPaneAdd"), a = Kt("horizontal"), r = Kt("onPaneRemove"), o = Kt("onPaneClick"), c = Pa()?.uid, u = Kt("indexedPanes"), y = H(() => u.value[c]), f = /* @__PURE__ */ Te(null), h = H(() => {
      let E = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(E, C.value), T.value);
    }), T = H(() => {
      let E = parseFloat(t.minSize);
      return isNaN(E) ? 0 : E;
    }), C = H(() => {
      let E = parseFloat(t.maxSize);
      return isNaN(E) ? 100 : E;
    }), N = H(() => {
      let E = y.value?.size ?? (t.size === void 0 ? void 0 : h.value);
      return E === void 0 ? "" : `${a.value ? "height" : "width"}: ${E}%`;
    });
    return Xe(() => h.value, (E) => i({
      uid: c,
      size: E
    })), Xe(() => T.value, (E) => i({
      uid: c,
      min: E
    })), Xe(() => C.value, (E) => i({
      uid: c,
      max: E
    })), Zn(() => {
      n({
        id: c,
        el: f.value,
        min: T.value,
        max: C.value,
        givenSize: t.size === void 0 ? null : h.value,
        size: h.value
      });
    }), lr(() => r(c)), (E, R) => (m(), _("div", {
      ref_key: "paneEl",
      ref: f,
      class: "splitpanes__pane",
      onClick: R[0] ||= (D) => g(o)(D, E._.uid),
      style: hi(N.value)
    }, [De(E.$slots, "default")], 4));
  }
}, c1 = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", u1 = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", d1 = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", f1 = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const td = 1024, Sv = td / 2, Ks = (e) => document.documentElement.clientWidth < e, Cv = /* @__PURE__ */ Te(Ks(td)), Tv = /* @__PURE__ */ Te(Ks(Sv));
window.addEventListener("resize", () => {
  Cv.value = Ks(td), Tv.value = Ks(Sv);
}, { passive: !0 });
function jo() {
  return /* @__PURE__ */ _o(Cv);
}
function p1() {
  return /* @__PURE__ */ _o(Tv);
}
class h1 {
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
class v1 {
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
    return this.setLanguage(Vl().replace("-", "_"));
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
    const t = new h1((i) => U_(i, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function g1() {
  return new v1();
}
const kv = g1().detectLanguage().build(), Tt = (...e) => kv.gettext(...e);
function Jn(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: i, t: n } of t) {
        if (i !== Vl() || !n)
          continue;
        const a = Object.fromEntries(Object.entries(n).map(([r, o]) => [
          r,
          {
            msgid: r,
            msgid_plural: o.p,
            msgstr: o.v
          }
        ]));
        kv.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const b1 = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], m1 = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], y1 = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], _1 = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], w1 = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], S1 = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], C1 = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], T1 = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], k1 = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const E1 = /* @__PURE__ */ Symbol(""), [A1] = window.OC?.config?.version?.split(".") ?? [], Ev = Number.parseInt(A1 ?? "35"), O1 = Ev < 32, Qn = Ev < 34, x1 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function N1() {
  return Kt(x1, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const tt = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
}, L1 = { class: "button-vue__wrapper" }, R1 = { class: "button-vue__icon" }, I1 = { class: "button-vue__text" }, P1 = /* @__PURE__ */ Ft({
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
    const i = e, n = t, { formBoxItemClass: a } = N1(), r = Kt(E1, null) !== null, o = H(() => r && i.to ? "RouterLink" : i.href ? "a" : "button"), c = H(() => o.value === "button" && typeof i.pressed == "boolean"), u = H(() => i.pressed ? "primary" : i.pressed === !1 && i.variant === "primary" ? "secondary" : i.variant), y = H(() => u.value.startsWith("tertiary")), f = H(() => i.alignment.split("-")[0]), h = H(() => i.alignment.includes("-")), T = Kt("NcPopover:trigger:attrs", () => ({}), !1), C = H(() => T()), N = H(() => {
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
          ...C.value,
          "aria-pressed": i.pressed,
          type: i.type,
          disabled: i.disabled
        };
    });
    function E(R) {
      c.value && n("update:pressed", !i.pressed), n("click", R);
    }
    return (R, D) => (m(), je(Gu(o.value), Yt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${u.value}`]: u.value,
          "button-vue--tertiary": y.value,
          "button-vue--wide": e.wide,
          [`button-vue--${f.value}`]: f.value !== "center",
          "button-vue--reverse": h.value,
          "button-vue--legacy": g(O1),
          "button-vue--legacy34": g(Qn)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, N.value, { onClick: E }), {
      default: Pe(() => [
        l("span", L1, [
          l("span", R1, [
            De(R.$slots, "icon", {}, void 0, !0)
          ]),
          l("span", I1, [
            De(R.$slots, "default", {}, () => [
              _e(v(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Yi = /* @__PURE__ */ tt(P1, [["__scopeId", "data-v-47ce59a3"]]), $1 = ["aria-hidden", "aria-label"], F1 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, D1 = ["d"], M1 = ["innerHTML"], z1 = /* @__PURE__ */ Ft({
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
    xy((a) => ({
      fb515064: i.value
    }));
    const t = e, i = H(() => typeof t.size == "number" ? `${t.size}px` : t.size), n = H(() => {
      if (!t.svg || t.path)
        return;
      const a = pv.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (m(), _("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: ye(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      n.value ? (m(), _("span", {
        key: 1,
        innerHTML: n.value
      }, null, 8, M1)) : (m(), _("svg", F1, [
        l("path", { d: e.path }, null, 8, D1)
      ]))
    ], 10, $1));
  }
}), Kl = /* @__PURE__ */ tt(z1, [["__scopeId", "data-v-aaedb1c3"]]);
j1();
function U1(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), yn("csrf-token-update", { token: e, _internal: !0 }));
}
function j1() {
  yv("csrf-token-update", ({ token: e, _internal: t }) => {
    t || U1(e);
  });
}
vv("public").persist().build();
let Wa;
function fp(e, t) {
  return e ? e.getAttribute(t) : null;
}
function B1() {
  if (Wa !== void 0)
    return Wa;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = fp(e, "data-user");
  return t === null ? (Wa = null, Wa) : (Wa = {
    uid: t,
    displayName: fp(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Wa);
}
var mt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(mt || {});
class H1 {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, i, n) {
    let a = "[" + mt[i].toUpperCase() + "] ";
    return n && n.app && (a += n.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), i === mt.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, i, n) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof i == "object" && n?.error === void 0 && (n.error = i), t) {
        case mt.Debug:
          console.debug(this.formatMessage(i, mt.Debug, n), n);
          break;
        case mt.Info:
          console.info(this.formatMessage(i, mt.Info, n), n);
          break;
        case mt.Warn:
          console.warn(this.formatMessage(i, mt.Warn, n), n);
          break;
        case mt.Error:
          console.error(this.formatMessage(i, mt.Error, n), n);
          break;
        case mt.Fatal:
        default:
          console.error(this.formatMessage(i, mt.Fatal, n), n);
          break;
      }
  }
  debug(t, i) {
    this.log(mt.Debug, t, Object.assign({}, this.context, i));
  }
  info(t, i) {
    this.log(mt.Info, t, Object.assign({}, this.context, i));
  }
  warn(t, i) {
    this.log(mt.Warn, t, Object.assign({}, this.context, i));
  }
  error(t, i) {
    this.log(mt.Error, t, Object.assign({}, this.context, i));
  }
  fatal(t, i) {
    this.log(mt.Fatal, t, Object.assign({}, this.context, i));
  }
}
function V1(e) {
  return new H1(e);
}
class K1 {
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
    const t = B1();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, i = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? mt.Warn, window._oc_debug && (t.context.level = mt.Debug), document.removeEventListener("readystatechange", i)) : document.addEventListener("readystatechange", i);
    };
    return i(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function G1() {
  return new K1(V1);
}
const La = G1().detectUser().setApp("@nextcloud/vue").build();
function q1(e) {
  let t = !1, i;
  return (...n) => (t || (t = !0, i = e(...n)), i);
}
let Av = "missing-app-name";
try {
  Av = "library";
} catch {
  La.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const W1 = Av;
let Y1 = "";
try {
  Y1 = "0.1.0-alpha.174";
} catch {
  La.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Ov() {
  return Kt("appName", W1);
}
const X1 = q1(() => {
  const e = Ju("core", "apps", []), t = Ov();
  return e.find(({ id: i }) => i === t)?.name ?? t;
}), bu = z_();
Jn(C1);
const Z1 = /* @__PURE__ */ Ft({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = jo();
    Xe(t, i), Zn(() => {
      i(t.value);
    }), lr(() => {
      t.value && i(!1);
    });
    function i(n = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = n ? "none" : "", n === !0 && yn("toggle-navigation", { open: !1 }));
    }
    return (n, a) => (m(), je(g(Yi), {
      "aria-label": g(Tt)("Go back to the list"),
      class: ye(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(Tt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Pe(() => [
        Ae(g(Kl), {
          directional: "",
          path: g(c1)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), J1 = /* @__PURE__ */ tt(Z1, [["__scopeId", "data-v-a28923a1"]]), pp = vv("nextcloud").persist().build(), Q1 = B_().theming?.name ?? "Nextcloud", e0 = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: J1,
    Pane: l1,
    Splitpanes: s1
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
      appName: Ov(),
      localizedAppName: X1(),
      isMobile: jo(),
      isRtl: bu
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
        return La.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(Q1), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = o1(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? yn("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && yn("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      pp.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), La.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(pp.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return La.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, t0 = {
  key: 0,
  class: "hidden-visually"
}, i0 = { class: "app-content-wrapper__list" }, n0 = {
  key: 1,
  class: "app-content-wrapper"
};
function a0(e, t, i, n, a, r) {
  const o = Ve("NcAppContentDetailsToggle"), c = Ve("Pane"), u = Ve("Splitpanes");
  return m(), _("main", {
    id: "app-content-vue",
    class: ye(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    i.pageHeading ? (m(), _("h1", t0, v(i.pageHeading), 1)) : F("", !0),
    e.$slots.list ? (m(), _(ae, { key: 1 }, [
      n.isMobile || i.layout === "no-split" ? (m(), _("div", {
        key: 0,
        class: ye(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": i.showDetails,
          "app-content-wrapper--show-list": !i.showDetails,
          "app-content-wrapper--mobile": n.isMobile
        }])
      }, [
        i.showDetails ? (m(), je(o, {
          key: 0,
          onClick: ke(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : F("", !0),
        Ie(l("div", i0, [
          De(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [nr, !i.showDetails]
        ]),
        i.showDetails ? De(e.$slots, "default", { key: 1 }, void 0, !0) : F("", !0)
      ], 2)) : i.layout === "vertical-split" || i.layout === "horizontal-split" ? (m(), _("div", n0, [
        Ae(u, {
          horizontal: i.layout === "horizontal-split",
          class: ye(["default-theme", {
            "splitpanes--horizontal": i.layout === "horizontal-split",
            "splitpanes--vertical": i.layout === "vertical-split"
          }]),
          rtl: n.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Pe(() => [
            Ae(c, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Pe(() => [
                De(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            Ae(c, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Pe(() => [
                De(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : F("", !0)
    ], 64)) : F("", !0),
    e.$slots.list ? F("", !0) : De(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const r0 = /* @__PURE__ */ tt(e0, [["render", a0], ["__scopeId", "data-v-51427d61"]]);
var xv = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Gs = /* @__PURE__ */ xv.join(","), Nv = typeof Element > "u", Ia = Nv ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, qs = !Nv && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Ws = function(t, i) {
  var n;
  i === void 0 && (i = !0);
  var a = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), r = a === "" || a === "true", o = r || i && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Ws(t.parentNode));
  return o;
}, o0 = function(t) {
  var i, n = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "contenteditable");
  return n === "" || n === "true";
}, Lv = function(t, i, n) {
  if (Ws(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Gs));
  return i && Ia.call(t, Gs) && a.unshift(t), a = a.filter(n), a;
}, Ys = function(t, i, n) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var o = r.shift();
    if (!Ws(o, !1))
      if (o.tagName === "SLOT") {
        var c = o.assignedElements(), u = c.length ? c : o.children, y = Ys(u, !0, n);
        n.flatten ? a.push.apply(a, y) : a.push({
          scopeParent: o,
          candidates: y
        });
      } else {
        var f = Ia.call(o, Gs);
        f && n.filter(o) && (i || !t.includes(o)) && a.push(o);
        var h = o.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(o), T = !Ws(h, !1) && (!n.shadowRootFilter || n.shadowRootFilter(o));
        if (h && T) {
          var C = Ys(h === !0 ? o.children : h.children, !0, n);
          n.flatten ? a.push.apply(a, C) : a.push({
            scopeParent: o,
            candidates: C
          });
        } else
          r.unshift.apply(r, o.children);
      }
  }
  return a;
}, Rv = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ka = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || o0(t)) && !Rv(t) ? 0 : t.tabIndex;
}, s0 = function(t, i) {
  var n = ka(t);
  return n < 0 && i && !Rv(t) ? 0 : n;
}, l0 = function(t, i) {
  return t.tabIndex === i.tabIndex ? t.documentOrder - i.documentOrder : t.tabIndex - i.tabIndex;
}, Iv = function(t) {
  return t.tagName === "INPUT";
}, c0 = function(t) {
  return Iv(t) && t.type === "hidden";
}, u0 = function(t) {
  var i = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return i;
}, d0 = function(t, i) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === i)
      return t[n];
}, f0 = function(t) {
  if (!t.name)
    return !0;
  var i = t.form || qs(t), n = function(c) {
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
  var r = d0(a, t.form);
  return !r || r === t;
}, p0 = function(t) {
  return Iv(t) && t.type === "radio";
}, h0 = function(t) {
  return p0(t) && !f0(t);
}, v0 = function(t) {
  var i, n = t && qs(t), a = (i = n) === null || i === void 0 ? void 0 : i.host, r = !1;
  if (n && n !== t) {
    var o, c, u;
    for (r = !!((o = a) !== null && o !== void 0 && (c = o.ownerDocument) !== null && c !== void 0 && c.contains(a) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !r && a; ) {
      var y, f, h;
      n = qs(a), a = (y = n) === null || y === void 0 ? void 0 : y.host, r = !!((f = a) !== null && f !== void 0 && (h = f.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return r;
}, hp = function(t) {
  var i = t.getBoundingClientRect(), n = i.width, a = i.height;
  return n === 0 && a === 0;
}, g0 = function(t, i) {
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
  var u = Ia.call(t, "details>summary:first-of-type"), y = u ? t.parentElement : t;
  if (Ia.call(y, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof a == "function") {
      for (var f = t; t; ) {
        var h = t.parentElement, T = qs(t);
        if (h && !h.shadowRoot && a(h) === !0)
          return hp(t);
        t.assignedSlot ? t = t.assignedSlot : !h && T !== t.ownerDocument ? t = T.host : t = h;
      }
      t = f;
    }
    if (v0(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return hp(t);
  return !1;
}, b0 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var i = t.parentElement; i; ) {
      if (i.tagName === "FIELDSET" && i.disabled) {
        for (var n = 0; n < i.children.length; n++) {
          var a = i.children.item(n);
          if (a.tagName === "LEGEND")
            return Ia.call(i, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      i = i.parentElement;
    }
  return !1;
}, Xs = function(t, i) {
  return !(i.disabled || c0(i) || g0(i, t) || // For a details element with a summary, the summary element gets the focus
  u0(i) || b0(i));
}, mu = function(t, i) {
  return !(h0(i) || ka(i) < 0 || !Xs(t, i));
}, m0 = function(t) {
  var i = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(i) || i >= 0);
}, Pv = function(t) {
  var i = [], n = [];
  return t.forEach(function(a, r) {
    var o = !!a.scopeParent, c = o ? a.scopeParent : a, u = s0(c, o), y = o ? Pv(a.candidates) : c;
    u === 0 ? o ? i.push.apply(i, y) : i.push(c) : n.push({
      documentOrder: r,
      tabIndex: u,
      item: a,
      isScope: o,
      content: y
    });
  }), n.sort(l0).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(i);
}, y0 = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = Ys([t], i.includeContainer, {
    filter: mu.bind(null, i),
    flatten: !1,
    getShadowRoot: i.getShadowRoot,
    shadowRootFilter: m0
  }) : n = Lv(t, i.includeContainer, mu.bind(null, i)), Pv(n);
}, _0 = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = Ys([t], i.includeContainer, {
    filter: Xs.bind(null, i),
    flatten: !0,
    getShadowRoot: i.getShadowRoot
  }) : n = Lv(t, i.includeContainer, Xs.bind(null, i)), n;
}, Ya = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return Ia.call(t, Gs) === !1 ? !1 : mu(i, t);
}, w0 = /* @__PURE__ */ xv.concat("iframe:not([inert]):not([inert] *)").join(","), Vc = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return Ia.call(t, w0) === !1 ? !1 : Xs(i, t);
};
function yu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function S0(e) {
  if (Array.isArray(e)) return yu(e);
}
function vp(e, t) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!i) {
    if (Array.isArray(e) || (i = $v(e)) || t) {
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
function C0(e, t, i) {
  return (t = O0(t)) in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}
function T0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function k0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gp(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function bp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gp(Object(i), !0).forEach(function(n) {
      C0(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : gp(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function E0(e) {
  return S0(e) || T0(e) || $v(e) || k0();
}
function A0(e, t) {
  if (typeof e != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function O0(e) {
  var t = A0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $v(e, t) {
  if (e) {
    if (typeof e == "string") return yu(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? yu(e, t) : void 0;
  }
}
var vn = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, i) {
    var n = vn.getActiveTrap(t);
    i !== n && vn.pauseTrap(t);
    var a = t.indexOf(i);
    a === -1 || t.splice(a, 1), t.push(i);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, i) {
    var n = t.indexOf(i);
    n !== -1 && t.splice(n, 1), vn.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var i = vn.getActiveTrap(t);
    i?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var i = vn.getActiveTrap(t);
    i && !i._isManuallyPaused() && i._setPausedState(!1);
  }
}, x0 = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, N0 = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, oo = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, L0 = function(t) {
  return oo(t) && !t.shiftKey;
}, R0 = function(t) {
  return oo(t) && t.shiftKey;
}, mp = function(t) {
  return setTimeout(t, 0);
}, qr = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
    n[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, n) : t;
}, bs = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, I0 = [], id = function(t, i) {
  var n = i?.document || document, a = i?.trapStack || I0, r = bp({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: L0,
    isKeyBackward: R0
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
  }, c, u = function(M, z, X) {
    return M && M[z] !== void 0 ? M[z] : r[X || z];
  }, y = function(M, z) {
    var X = typeof z?.composedPath == "function" ? z.composedPath() : void 0;
    return o.containerGroups.findIndex(function(ce) {
      var te = ce.container, be = ce.tabbableNodes;
      return te.contains(M) || X?.includes(te) || be.find(function(ve) {
        return ve === M;
      });
    });
  }, f = function(M) {
    var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = z.hasFallback, ce = X === void 0 ? !1 : X, te = z.params, be = te === void 0 ? [] : te, ve = r[M];
    if (typeof ve == "function" && (ve = ve.apply(void 0, E0(be))), ve === !0 && (ve = void 0), !ve) {
      if (ve === void 0 || ve === !1)
        return ve;
      throw new Error("`".concat(M, "` was specified but was not a node, or did not return a node"));
    }
    var Ne = ve;
    if (typeof ve == "string") {
      try {
        Ne = n.querySelector(ve);
      } catch (pe) {
        throw new Error("`".concat(M, '` appears to be an invalid selector; error="').concat(pe.message, '"'));
      }
      if (!Ne && !ce)
        throw new Error("`".concat(M, "` as selector refers to no known node"));
    }
    return Ne;
  }, h = function(M) {
    var z = M.activeElement;
    return z ? z.shadowRoot && z.shadowRoot.activeElement !== null ? h(z.shadowRoot) : z : null;
  }, T = function() {
    var M = f("initialFocus", {
      hasFallback: !0
    });
    if (M === !1)
      return !1;
    if (M === void 0 || M && !Vc(M, r.tabbableOptions)) {
      var z = h(n);
      if (y(z) >= 0)
        M = z;
      else {
        var X = o.tabbableGroups[0], ce = X && X.firstTabbableNode;
        M = ce || f("fallbackFocus");
      }
    } else M === null && (M = f("fallbackFocus"));
    if (!M)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return M;
  }, C = function() {
    if (o.containerGroups = o.containers.map(function(M) {
      var z = y0(M, r.tabbableOptions), X = _0(M, r.tabbableOptions), ce = z.length > 0 ? z[0] : void 0, te = z.length > 0 ? z[z.length - 1] : void 0, be = X.find(function(pe) {
        return Ya(pe);
      }), ve = X.slice().reverse().find(function(pe) {
        return Ya(pe);
      }), Ne = !!z.find(function(pe) {
        return ka(pe) > 0;
      });
      return {
        container: M,
        tabbableNodes: z,
        focusableNodes: X,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Ne,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ce,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: te,
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
        lastDomTabbableNode: ve,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Be) {
          var Le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, rt = z.indexOf(Be);
          return rt < 0 ? Le ? X.slice(X.indexOf(Be) + 1).find(function(ft) {
            return Ya(ft);
          }) : X.slice(0, X.indexOf(Be)).reverse().find(function(ft) {
            return Ya(ft);
          }) : z[rt + (Le ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(M) {
      return M.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !f("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(M) {
      return M.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, N = function(M) {
    if (M !== !1 && M !== h(document)) {
      if (!M || !M.focus) {
        N(T());
        return;
      }
      M.focus({
        preventScroll: !!r.preventScroll
      }), o.mostRecentlyFocusedNode = M, x0(M) && M.select();
    }
  }, E = function(M) {
    var z = f("setReturnFocus", {
      params: [M]
    });
    return z || (z === !1 ? !1 : M);
  }, R = function(M) {
    var z = M.target, X = M.event, ce = M.isBackward, te = ce === void 0 ? !1 : ce;
    z = z || bs(X), C();
    var be = null;
    if (o.tabbableGroups.length > 0) {
      var ve = y(z, X), Ne = ve >= 0 ? o.containerGroups[ve] : void 0;
      if (ve < 0)
        te ? be = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : be = o.tabbableGroups[0].firstTabbableNode;
      else if (te) {
        var pe = o.tabbableGroups.findIndex(function(Et) {
          var Ge = Et.firstTabbableNode;
          return z === Ge;
        });
        if (pe < 0 && (Ne.container === z || Vc(z, r.tabbableOptions) && !Ya(z, r.tabbableOptions) && !Ne.nextTabbableNode(z, !1)) && (pe = ve), pe >= 0) {
          var Be = pe === 0 ? o.tabbableGroups.length - 1 : pe - 1, Le = o.tabbableGroups[Be];
          be = ka(z) >= 0 ? Le.lastTabbableNode : Le.lastDomTabbableNode;
        } else oo(X) || (be = Ne.nextTabbableNode(z, !1));
      } else {
        var rt = o.tabbableGroups.findIndex(function(Et) {
          var Ge = Et.lastTabbableNode;
          return z === Ge;
        });
        if (rt < 0 && (Ne.container === z || Vc(z, r.tabbableOptions) && !Ya(z, r.tabbableOptions) && !Ne.nextTabbableNode(z)) && (rt = ve), rt >= 0) {
          var ft = rt === o.tabbableGroups.length - 1 ? 0 : rt + 1, pt = o.tabbableGroups[ft];
          be = ka(z) >= 0 ? pt.firstTabbableNode : pt.firstDomTabbableNode;
        } else oo(X) || (be = Ne.nextTabbableNode(z));
      }
    } else
      be = f("fallbackFocus");
    return be;
  }, D = function(M) {
    var z = bs(M);
    if (!(y(z, M) >= 0)) {
      if (qr(r.clickOutsideDeactivates, M)) {
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
      qr(r.allowOutsideClick, M) || M.preventDefault();
    }
  }, $ = function(M) {
    var z = bs(M), X = y(z, M) >= 0;
    if (X || z instanceof Document)
      X && (o.mostRecentlyFocusedNode = z);
    else {
      M.stopImmediatePropagation();
      var ce, te = !0;
      if (o.mostRecentlyFocusedNode)
        if (ka(o.mostRecentlyFocusedNode) > 0) {
          var be = y(o.mostRecentlyFocusedNode), ve = o.containerGroups[be].tabbableNodes;
          if (ve.length > 0) {
            var Ne = ve.findIndex(function(pe) {
              return pe === o.mostRecentlyFocusedNode;
            });
            Ne >= 0 && (r.isKeyForward(o.recentNavEvent) ? Ne + 1 < ve.length && (ce = ve[Ne + 1], te = !1) : Ne - 1 >= 0 && (ce = ve[Ne - 1], te = !1));
          }
        } else
          o.containerGroups.some(function(pe) {
            return pe.tabbableNodes.some(function(Be) {
              return ka(Be) > 0;
            });
          }) || (te = !1);
      else
        te = !1;
      te && (ce = R({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(o.recentNavEvent)
      })), N(ce || o.mostRecentlyFocusedNode || T());
    }
    o.recentNavEvent = void 0;
  }, G = function(M) {
    var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = M;
    var X = R({
      event: M,
      isBackward: z
    });
    X && (oo(M) && M.preventDefault(), N(X));
  }, j = function(M) {
    (r.isKeyForward(M) || r.isKeyBackward(M)) && G(M, r.isKeyBackward(M));
  }, Z = function(M) {
    N0(M) && qr(r.escapeDeactivates, M) !== !1 && (M.preventDefault(), c.deactivate());
  }, x = function(M) {
    var z = bs(M);
    y(z, M) >= 0 || qr(r.clickOutsideDeactivates, M) || qr(r.allowOutsideClick, M) || (M.preventDefault(), M.stopImmediatePropagation());
  }, J = function() {
    if (o.active) {
      vn.activateTrap(a, c);
      var M;
      return r.delayInitialFocus ? M = new Promise(function(z) {
        o.delayInitialFocusTimer = mp(function() {
          N(T()), z();
        });
      }) : N(T()), n.addEventListener("focusin", $, !0), n.addEventListener("mousedown", D, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", D, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", x, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", j, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", Z), M;
    }
  }, de = function(M) {
    o.active && !o.paused && c._setSubtreeIsolation(!1), o.adjacentElements.clear(), o.alreadySilent.clear();
    var z = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set(), ce = vp(M), te;
    try {
      for (ce.s(); !(te = ce.n()).done; ) {
        var be = te.value;
        z.add(be);
        for (var ve = typeof ShadowRoot < "u" && be.getRootNode() instanceof ShadowRoot, Ne = be; Ne; ) {
          z.add(Ne);
          var pe = Ne.parentElement, Be = [];
          pe ? Be = pe.children : !pe && ve && (Be = Ne.getRootNode().children, pe = Ne.getRootNode().host, ve = typeof ShadowRoot < "u" && pe.getRootNode() instanceof ShadowRoot);
          var Le = vp(Be), rt;
          try {
            for (Le.s(); !(rt = Le.n()).done; ) {
              var ft = rt.value;
              X.add(ft);
            }
          } catch (pt) {
            Le.e(pt);
          } finally {
            Le.f();
          }
          Ne = pe;
        }
      }
    } catch (pt) {
      ce.e(pt);
    } finally {
      ce.f();
    }
    z.forEach(function(pt) {
      X.delete(pt);
    }), o.adjacentElements = X;
  }, Y = function() {
    if (o.active)
      return n.removeEventListener("focusin", $, !0), n.removeEventListener("mousedown", D, !0), n.removeEventListener("touchstart", D, !0), n.removeEventListener("click", x, !0), n.removeEventListener("keydown", j, !0), n.removeEventListener("keydown", Z), c;
  }, le = function(M) {
    var z = o.mostRecentlyFocusedNode;
    if (z) {
      var X = M.some(function(te) {
        var be = Array.from(te.removedNodes);
        return be.some(function(ve) {
          return ve === z || typeof ve.contains == "function" && ve.contains(z);
        });
      });
      if (X && o.containers.some(function(te) {
        return te?.isConnected;
      })) {
        C();
        var ce = T();
        N(ce);
      }
    }
  }, he = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(le) : void 0, ne = function() {
    he && (he.disconnect(), o.active && !o.paused && o.containers.map(function(M) {
      he.observe(M, {
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
    activate: function(M) {
      if (o.active)
        return this;
      var z = u(M, "onActivate"), X = u(M, "onPostActivate"), ce = u(M, "checkCanFocusTrap"), te = vn.getActiveTrap(a), be = !1;
      if (te && !te.paused) {
        var ve;
        (ve = te._setSubtreeIsolation) === null || ve === void 0 || ve.call(te, !1), be = !0;
      }
      try {
        ce || C(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = h(n), z?.({
          trap: c
        });
        var Ne = function() {
          ce && C();
          var Le = function() {
            c._setSubtreeIsolation(!0), ne(), X?.({
              trap: c
            });
          }, rt = J();
          rt ? rt.then(Le) : Le();
        };
        if (ce)
          return ce(o.containers.concat()).then(Ne, Ne), this;
        Ne();
      } catch (Be) {
        if (te === vn.getActiveTrap(a) && be) {
          var pe;
          (pe = te._setSubtreeIsolation) === null || pe === void 0 || pe.call(te, !0);
        }
        throw Be;
      }
      return this;
    },
    deactivate: function(M) {
      if (!o.active)
        return this;
      var z = bp({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, M);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || c._setSubtreeIsolation(!1), o.alreadySilent.clear(), Y(), o.active = !1, o.paused = !1, ne(), vn.deactivateTrap(a, c);
      var X = u(z, "onDeactivate"), ce = u(z, "onPostDeactivate"), te = u(z, "checkCanReturnFocus"), be = u(z, "delayReturnFocus"), ve = u(z, "returnFocus", "returnFocusOnDeactivate");
      X?.({
        trap: c
      });
      var Ne = function() {
        ve && N(E(o.nodeFocusedBeforeActivation)), ce?.({
          trap: c
        });
      }, pe = function() {
        be && ve ? mp(Ne) : Ne();
      };
      return ve && te ? (te(E(o.nodeFocusedBeforeActivation)).then(pe, pe), this) : (pe(), this);
    },
    pause: function(M) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, M)) : this;
    },
    unpause: function(M) {
      return o.active ? (o.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, M)) : this;
    },
    updateContainerElements: function(M) {
      var z = [].concat(M).filter(Boolean);
      return o.containers = z.map(function(X) {
        return typeof X == "string" ? n.querySelector(X) : X;
      }), r.isolateSubtrees && de(o.containers), o.active && (C(), o.paused || c._setSubtreeIsolation(!0)), ne(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(M, z) {
        if (o.paused === M)
          return this;
        if (o.paused = M, M) {
          var X = u(z, "onPause"), ce = u(z, "onPostPause");
          X?.({
            trap: c
          }), Y(), c._setSubtreeIsolation(!1), ne(), ce?.({
            trap: c
          });
        } else {
          var te = u(z, "onUnpause"), be = u(z, "onPostUnpause");
          te?.({
            trap: c
          });
          var ve = function() {
            C();
            var pe = function() {
              c._setSubtreeIsolation(!0), ne(), be?.({
                trap: c
              });
            }, Be = J();
            Be ? Be.then(pe) : pe();
          };
          ve();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(M) {
        r.isolateSubtrees && o.adjacentElements.forEach(function(z) {
          var X;
          M ? r.isolateSubtrees === "aria-hidden" ? ((z.ariaHidden === "true" || ((X = z.getAttribute("aria-hidden")) === null || X === void 0 ? void 0 : X.toLowerCase()) === "true") && o.alreadySilent.add(z), z.setAttribute("aria-hidden", "true")) : ((z.inert || z.hasAttribute("inert")) && o.alreadySilent.add(z), z.setAttribute("inert", !0)) : o.alreadySilent.has(z) || (r.isolateSubtrees === "aria-hidden" ? z.removeAttribute("aria-hidden") : z.removeAttribute("inert"));
        });
      }
    }
  }), c.updateContainerElements(t), c;
};
const Fv = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), P0 = /* @__PURE__ */ Ft({
  name: "NcAppNavigationList",
  provide() {
    return {
      [Fv]: {
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
function $0(e, t, i, n, a, r) {
  return m(), _("ul", {
    ref: "list",
    class: ye(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...o) => e.hideNow && e.hideNow(...o)),
    onFocusout: t[1] || (t[1] = (...o) => e.onFocusOut && e.onFocusOut(...o)),
    onScrollPassive: t[2] || (t[2] = (...o) => e.onScroll && e.onScroll(...o))
  }, [
    l("div", {
      class: ye(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: hi(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    De(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Dv = /* @__PURE__ */ tt(P0, [["render", $0], ["__scopeId", "data-v-3e73e246"]]);
function xo() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function F0() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...xo()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === xo().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const Mv = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), zv = /* @__PURE__ */ Symbol.for("NcContent:selector");
Jn(_1);
const D0 = { class: "app-navigation-toggle-wrapper" }, M0 = /* @__PURE__ */ Ft({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = zh(e, "open"), i = H(() => t.value ? Tt("Close navigation") : Tt("Open navigation"));
    return (n, a) => (m(), _("div", D0, [
      Ae(g(Yi), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": i.value,
        title: i.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Pe(() => [
          Ae(Kl, {
            path: g(f1),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), z0 = /* @__PURE__ */ tt(M0, [["__scopeId", "data-v-e8177cc7"]]), U0 = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], j0 = { class: "app-navigation__search" }, B0 = /* @__PURE__ */ Ft({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let i;
    const n = Kt(
      Mv,
      () => by(),
      !1
    ), a = Cm("appNavigationContainer"), r = jo(), o = /* @__PURE__ */ Te(!r.value), c = H(() => r.value && o.value);
    hm(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), Xe(r, () => {
      o.value = !r.value;
    }), Xe(c, () => {
      f();
    }), Zn(() => {
      n(!0), yv("toggle-navigation", y), yn("navigation-toggled", {
        open: o.value
      }), i = id(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (i.deactivate({ returnFocus: !1 }), u(!1)), !1),
        fallbackFocus: a.value,
        trapStack: xo(),
        escapeDeactivates: !1
      }), f();
    }), Mo(() => {
      n(!1), e1("toggle-navigation", y), i.deactivate();
    });
    function u(T) {
      if (o.value === T) {
        yn("navigation-toggled", {
          open: o.value
        });
        return;
      }
      o.value = T === void 0 ? !o.value : T;
      const C = getComputedStyle(document.body), N = parseInt(C.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        yn("navigation-toggled", {
          open: o.value
        });
      }, 1.5 * N);
    }
    function y({ open: T }) {
      return u(T);
    }
    function f() {
      c.value ? i.activate() : i.deactivate();
    }
    function h() {
      r.value && u(!1);
    }
    return (T, C) => (m(), _("div", {
      ref: "appNavigationContainer",
      class: ye(["app-navigation", {
        "app-navigation--closed": !o.value,
        "app-navigation--legacy": g(Qn)
      }])
    }, [
      l("nav", {
        id: "app-navigation-vue",
        "aria-hidden": o.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !o.value || void 0,
        onKeydown: at(h, ["esc"])
      }, [
        l("div", j0, [
          De(T.$slots, "search", {}, void 0, !0)
        ]),
        l("div", {
          class: ye(["app-navigation__body", { "app-navigation__body--no-list": !T.$slots.list }])
        }, [
          De(T.$slots, "default", {}, void 0, !0)
        ], 2),
        T.$slots.list ? (m(), je(Dv, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Pe(() => [
            De(T.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : F("", !0),
        De(T.$slots, "footer", {}, void 0, !0)
      ], 40, U0),
      Ae(z0, {
        open: o.value,
        "onUpdate:open": u
      }, null, 8, ["open"])
    ], 2));
  }
}), H0 = /* @__PURE__ */ tt(B0, [["__scopeId", "data-v-37908cd4"]]), V0 = {
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
}, K0 = ["aria-hidden", "aria-label"], G0 = ["fill", "width", "height"], q0 = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, W0 = { key: 0 };
function Y0(e, t, i, n, a, r) {
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
      l("path", q0, [
        i.title ? (m(), _("title", W0, v(i.title), 1)) : F("", !0)
      ])
    ], 8, G0))
  ], 16, K0);
}
const X0 = /* @__PURE__ */ tt(V0, [["render", Y0]]), Z0 = {
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
}, J0 = ["aria-hidden", "aria-label"], Q0 = ["fill", "width", "height"], ew = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, tw = { key: 0 };
function iw(e, t, i, n, a, r) {
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
      l("path", ew, [
        i.title ? (m(), _("title", tw, v(i.title), 1)) : F("", !0)
      ])
    ], 8, Q0))
  ], 16, J0);
}
const nw = /* @__PURE__ */ tt(Z0, [["render", iw]]), aw = {
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
}, rw = ["aria-hidden", "aria-label"], ow = ["fill", "width", "height"], sw = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, lw = { key: 0 };
function cw(e, t, i, n, a, r) {
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
      l("path", sw, [
        i.title ? (m(), _("title", lw, v(i.title), 1)) : F("", !0)
      ])
    ], 8, ow))
  ], 16, rw);
}
const Uv = /* @__PURE__ */ tt(aw, [["render", cw]]), uw = {
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
}, dw = ["aria-hidden", "aria-label"], fw = ["fill", "width", "height"], pw = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, hw = { key: 0 };
function vw(e, t, i, n, a, r) {
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
      l("path", pw, [
        i.title ? (m(), _("title", hw, v(i.title), 1)) : F("", !0)
      ])
    ], 8, fw))
  ], 16, dw);
}
const jv = /* @__PURE__ */ tt(uw, [["render", vw]]);
Jn(m1);
const gw = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Uv,
    IconClose: jv,
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
    return { isLegacy34: Qn };
  },
  data() {
    return {
      labelConfirm: Tt("Confirm changes"),
      labelCancel: Tt("Cancel changes")
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
}, bw = ["placeholder"];
function mw(e, t, i, n, a, r) {
  const o = Ve("IconArrowRight"), c = Ve("NcButton"), u = Ve("IconClose");
  return m(), _("div", {
    class: ye(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": n.isLegacy34 }])
  }, [
    l("form", {
      onSubmit: t[1] || (t[1] = ke((...y) => r.confirm && r.confirm(...y), ["prevent"])),
      onKeydown: t[2] || (t[2] = at(ke((...y) => r.cancel && r.cancel(...y), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = ke(() => {
      }, ["stop", "prevent"]))
    }, [
      Ie(l("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (y) => r.valueModel = y),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: i.placeholder
      }, null, 8, bw), [
        [dt, r.valueModel]
      ]),
      Ae(c, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: ke(r.confirm, ["stop", "prevent"])
      }, {
        icon: Pe(() => [
          Ae(o, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      Ae(c, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: i.primary ? "primary" : "tertiary",
        onClick: ke(r.cancel, ["stop", "prevent"])
      }, {
        icon: Pe(() => [
          Ae(u, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const yw = /* @__PURE__ */ tt(gw, [["render", mw], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function Gl() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const nd = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Bv = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), _w = {
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
}, Hv = {
  mixins: [_w],
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
      from: Bv
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
}, ww = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: Kl
  },
  mixins: [Hv],
  inject: {
    isInSemanticMenu: {
      from: nd,
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
      mdiCheck: u1,
      mdiChevronRight: d1
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
}, Sw = ["role"], Cw = ["aria-label", "disabled", "title", "type"], Tw = { class: "action-button__longtext-wrapper" }, kw = {
  key: 0,
  class: "action-button__name"
}, Ew = ["textContent"], Aw = {
  key: 2,
  class: "action-button__text"
}, Ow = ["textContent"], xw = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function Nw(e, t, i, n, a, r) {
  const o = Ve("NcIconSvgWrapper");
  return m(), _("li", {
    class: ye(["action", { "action--disabled": i.disabled }]),
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
      De(e.$slots, "icon", {}, () => [
        l("span", {
          class: ye([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: hi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", Tw, [
        e.name ? (m(), _("strong", kw, v(e.name), 1)) : F("", !0),
        e.isLongText ? (m(), _("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: v(e.text)
        }, null, 8, Ew)) : (m(), _("span", Aw, v(e.text), 1)),
        i.description ? (m(), _("span", {
          key: 3,
          class: "action-button__description",
          textContent: v(i.description)
        }, null, 8, Ow)) : F("", !0)
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
      }, null, 8, ["path"])) : r.isChecked === !1 ? (m(), _("span", xw)) : F("", !0),
      F("", !0)
    ], 16, Cw)
  ], 10, Sw);
}
const Lw = /* @__PURE__ */ tt(ww, [["render", Nw], ["__scopeId", "data-v-6c2daf4e"]]);
function Rw(e, t = {}) {
  const i = F0();
  Xe(e, () => {
    bn(t.disabled) || (bn(e) ? i.pause() : i.unpause());
  }), Mo(() => {
    i.unpause();
  });
}
const Iw = ["top", "right", "bottom", "left"], yp = ["start", "end"], _p = /* @__PURE__ */ Iw.reduce((e, t) => e.concat(t, t + "-" + yp[0], t + "-" + yp[1]), []), No = Math.min, _u = Math.max, Pw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Vv(e, t, i) {
  return _u(e, No(t, i));
}
function $a(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Cn(e) {
  return e.split("-")[0];
}
function Ii(e) {
  return e.split("-")[1];
}
function Kv(e) {
  return e === "x" ? "y" : "x";
}
function ad(e) {
  return e === "y" ? "height" : "width";
}
function gn(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function rd(e) {
  return Kv(gn(e));
}
function Gv(e, t, i) {
  i === void 0 && (i = !1);
  const n = Ii(e), a = rd(e), r = ad(a);
  let o = a === "x" ? n === (i ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Js(o)), [o, Js(o)];
}
function $w(e) {
  const t = Js(e);
  return [Zs(e), t, Zs(t)];
}
function Zs(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const wp = ["left", "right"], Sp = ["right", "left"], Fw = ["top", "bottom"], Dw = ["bottom", "top"];
function Mw(e, t, i) {
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? Sp : wp : t ? wp : Sp;
    case "left":
    case "right":
      return t ? Fw : Dw;
    default:
      return [];
  }
}
function zw(e, t, i, n) {
  const a = Ii(e);
  let r = Mw(Cn(e), i === "start", n);
  return a && (r = r.map((o) => o + "-" + a), t && (r = r.concat(r.map(Zs)))), r;
}
function Js(e) {
  const t = Cn(e);
  return Pw[t] + e.slice(t.length);
}
function Uw(e) {
  var t, i, n, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (i = e.right) != null ? i : 0,
    bottom: (n = e.bottom) != null ? n : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function qv(e) {
  return typeof e != "number" ? Uw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function so(e) {
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
function Cp(e, t, i) {
  let {
    reference: n,
    floating: a
  } = e;
  const r = gn(t), o = rd(t), c = ad(o), u = Cn(t), y = r === "y", f = n.x + n.width / 2 - a.width / 2, h = n.y + n.height / 2 - a.height / 2, T = n[c] / 2 - a[c] / 2;
  let C;
  switch (u) {
    case "top":
      C = {
        x: f,
        y: n.y - a.height
      };
      break;
    case "bottom":
      C = {
        x: f,
        y: n.y + n.height
      };
      break;
    case "right":
      C = {
        x: n.x + n.width,
        y: h
      };
      break;
    case "left":
      C = {
        x: n.x - a.width,
        y: h
      };
      break;
    default:
      C = {
        x: n.x,
        y: n.y
      };
  }
  const N = Ii(t);
  return N && (C[o] += T * (N === "end" ? 1 : -1) * (i && y ? -1 : 1)), C;
}
async function jw(e, t) {
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
    boundary: y = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: h = "floating",
    altBoundary: T = !1,
    padding: C = 0
  } = $a(t, e), N = qv(C), R = c[T ? h === "floating" ? "reference" : "floating" : h], D = so(await r.getClippingRect({
    element: (i = await (r.isElement == null ? void 0 : r.isElement(R))) == null || i ? R : R.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: y,
    rootBoundary: f,
    strategy: u
  })), $ = h === "floating" ? {
    x: n,
    y: a,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, G = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), j = await (r.isElement == null ? void 0 : r.isElement(G)) && await (r.getScale == null ? void 0 : r.getScale(G)) || {
    x: 1,
    y: 1
  }, Z = so(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: $,
    offsetParent: G,
    strategy: u
  }) : $);
  return {
    top: (D.top - Z.top + N.top) / j.y,
    bottom: (Z.bottom - D.bottom + N.bottom) / j.y,
    left: (D.left - Z.left + N.left) / j.x,
    right: (Z.right - D.right + N.right) / j.x
  };
}
const Bw = 50, Hw = async (e, t, i) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: o
  } = i, c = o.detectOverflow ? o : {
    ...o,
    detectOverflow: jw
  }, u = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let y = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: f,
    y: h
  } = Cp(y, n, u), T = n, C = 0;
  const N = {};
  for (let E = 0; E < r.length; E++) {
    const R = r[E];
    if (!R)
      continue;
    const {
      name: D,
      fn: $
    } = R, {
      x: G,
      y: j,
      data: Z,
      reset: x
    } = await $({
      x: f,
      y: h,
      initialPlacement: n,
      placement: T,
      strategy: a,
      middlewareData: N,
      rects: y,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = G ?? f, h = j ?? h, N[D] = {
      ...N[D],
      ...Z
    }, x && C < Bw && (C++, typeof x == "object" && (x.placement && (T = x.placement), x.rects && (y = x.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : x.rects), {
      x: f,
      y: h
    } = Cp(y, T, u)), E = -1);
  }
  return {
    x: f,
    y: h,
    placement: T,
    strategy: a,
    middlewareData: N
  };
}, Vw = (e) => ({
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
      element: y,
      padding: f = 0
    } = $a(e, t) || {};
    if (y == null)
      return {};
    const h = qv(f), T = {
      x: i,
      y: n
    }, C = rd(a), N = ad(C), E = await o.getDimensions(y), R = C === "y", D = R ? "top" : "left", $ = R ? "bottom" : "right", G = R ? "clientHeight" : "clientWidth", j = r.reference[N] + r.reference[C] - T[C] - r.floating[N], Z = T[C] - r.reference[C], x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(y));
    let J = x ? x[G] : 0;
    (!J || !await (o.isElement == null ? void 0 : o.isElement(x))) && (J = c.floating[G] || r.floating[N]);
    const de = j / 2 - Z / 2, Y = J / 2 - E[N] / 2 - 1, le = No(h[D], Y), he = No(h[$], Y), ne = J - E[N] - he, oe = J / 2 - E[N] / 2 + de, M = Vv(le, oe, ne), z = !u.arrow && Ii(a) != null && oe !== M && r.reference[N] / 2 - (oe < le ? le : he) - E[N] / 2 < 0, X = z ? oe < le ? oe - le : oe - ne : 0;
    return {
      [C]: T[C] + X,
      data: {
        [C]: M,
        centerOffset: oe - M - X,
        ...z && {
          alignmentOffset: X
        }
      },
      reset: z
    };
  }
});
function Kw(e, t, i) {
  return (e ? [...i.filter((a) => Ii(a) === e), ...i.filter((a) => Ii(a) !== e)] : i.filter((a) => Cn(a) === a)).filter((a) => e ? Ii(a) === e || (t ? Zs(a) !== a : !1) : !0);
}
const Gw = function(e) {
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
        elements: y
      } = t, {
        crossAxis: f = !1,
        alignment: h,
        allowedPlacements: T = _p,
        autoAlignment: C = !0,
        ...N
      } = $a(e, t), E = h !== void 0 || T === _p ? Kw(h || null, C, T) : T, R = ((i = o.autoPlacement) == null ? void 0 : i.index) || 0, D = E[R];
      if (D == null)
        return {};
      if (c !== D)
        return {
          reset: {
            placement: E[0]
          }
        };
      const $ = await u.detectOverflow(t, N), G = Gv(D, r, await (u.isRTL == null ? void 0 : u.isRTL(y.floating))), j = [$[Cn(D)], $[G[0]], $[G[1]]], Z = [...((n = o.autoPlacement) == null ? void 0 : n.overflows) || [], {
        placement: D,
        overflows: j
      }], x = E[R + 1];
      if (x)
        return {
          data: {
            index: R + 1,
            overflows: Z
          },
          reset: {
            placement: x
          }
        };
      const J = Z.map((le) => {
        const he = Ii(le.placement);
        return [le.placement, he && f ? (
          // Check along the mainAxis and main crossAxis side.
          le.overflows.slice(0, 2).reduce((ne, oe) => ne + oe, 0)
        ) : (
          // Check only the mainAxis.
          le.overflows[0]
        ), le.overflows];
      }).sort((le, he) => le[1] - he[1]), Y = ((a = J.filter((le) => le[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Ii(le[0]) ? 2 : 3
      ).every((he) => he <= 0))[0]) == null ? void 0 : a[0]) || J[0][0];
      return Y !== c ? {
        data: {
          index: R + 1,
          overflows: Z
        },
        reset: {
          placement: Y
        }
      } : {};
    }
  };
}, qw = function(e) {
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
        elements: y
      } = t, {
        mainAxis: f = !0,
        crossAxis: h = !0,
        fallbackPlacements: T,
        fallbackStrategy: C = "bestFit",
        fallbackAxisSideDirection: N = "none",
        flipAlignment: E = !0,
        ...R
      } = $a(e, t);
      if ((i = r.arrow) != null && i.alignmentOffset)
        return {};
      const D = Cn(a), $ = gn(c), G = Cn(c) === c, j = await (u.isRTL == null ? void 0 : u.isRTL(y.floating)), Z = T || (G || !E ? [Js(c)] : $w(c)), x = N !== "none";
      !T && x && Z.push(...zw(c, E, N, j));
      const J = [c, ...Z], de = await u.detectOverflow(t, R), Y = [];
      let le = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (f && Y.push(de[D]), h) {
        const M = Gv(a, o, j);
        Y.push(de[M[0]], de[M[1]]);
      }
      if (le = [...le, {
        placement: a,
        overflows: Y
      }], !Y.every((M) => M <= 0)) {
        var he, ne;
        const M = (((he = r.flip) == null ? void 0 : he.index) || 0) + 1, z = J[M];
        if (z && (!(h === "alignment" ? $ !== gn(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        le.every((te) => gn(te.placement) === $ ? te.overflows[0] > 0 : !0)))
          return {
            data: {
              index: M,
              overflows: le
            },
            reset: {
              placement: z
            }
          };
        let X = (ne = le.filter((ce) => ce.overflows[0] <= 0).sort((ce, te) => ce.overflows[1] - te.overflows[1])[0]) == null ? void 0 : ne.placement;
        if (!X)
          switch (C) {
            case "bestFit": {
              var oe;
              const ce = (oe = le.filter((te) => {
                if (x) {
                  const be = gn(te.placement);
                  return be === $ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  be === "y";
                }
                return !0;
              }).map((te) => [te.placement, te.overflows.filter((be) => be > 0).reduce((be, ve) => be + ve, 0)]).sort((te, be) => te[1] - be[1])[0]) == null ? void 0 : oe[0];
              ce && (X = ce);
              break;
            }
            case "initialPlacement":
              X = c;
              break;
          }
        if (a !== X)
          return {
            reset: {
              placement: X
            }
          };
      }
      return {};
    }
  };
}, Ww = /* @__PURE__ */ new Set(["left", "top"]);
async function Yw(e, t) {
  const {
    placement: i,
    platform: n,
    elements: a
  } = e, r = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), o = Cn(i), c = Ii(i), u = gn(i) === "y", y = Ww.has(o) ? -1 : 1, f = r && u ? -1 : 1, h = $a(t, e);
  let {
    mainAxis: T,
    crossAxis: C,
    alignmentAxis: N
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return c && typeof N == "number" && (C = c === "end" ? N * -1 : N), u ? {
    x: C * f,
    y: T * y
  } : {
    x: T * y,
    y: C * f
  };
}
const Xw = function(e) {
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
      } = t, u = await Yw(t, e);
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
}, Zw = function(e) {
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
          fn: ($) => {
            let {
              x: G,
              y: j
            } = $;
            return {
              x: G,
              y: j
            };
          }
        },
        ...y
      } = $a(e, t), f = {
        x: i,
        y: n
      }, h = await r.detectOverflow(t, y), T = gn(a), C = Kv(T);
      let N = f[C], E = f[T];
      const R = ($, G) => Vv(G + h[$ === "y" ? "top" : "left"], G, G - h[$ === "y" ? "bottom" : "right"]);
      o && (N = R(C, N)), c && (E = R(T, E));
      const D = u.fn({
        ...t,
        [C]: N,
        [T]: E
      });
      return {
        ...D,
        data: {
          x: D.x - i,
          y: D.y - n,
          enabled: {
            [C]: o,
            [T]: c
          }
        }
      };
    }
  };
}, Jw = function(e) {
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
      } = $a(e, t), u = await a.detectOverflow(t, c), y = Cn(i), f = Ii(i), h = gn(i) === "y", {
        width: T,
        height: C
      } = n.floating;
      let N, E;
      y === "top" || y === "bottom" ? (N = y, E = f === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (E = y, N = f === "end" ? "top" : "bottom");
      const R = C - u.top - u.bottom, D = T - u.left - u.right, $ = No(C - u[N], R), G = No(T - u[E], D), j = t.middlewareData.shift, Z = !j;
      let x = $, J = G;
      j != null && j.enabled.x && (J = D), j != null && j.enabled.y && (x = R), Z && !f && (h ? J = T - 2 * _u(u.left, u.right) : x = C - 2 * _u(u.top, u.bottom)), await o({
        ...t,
        availableWidth: J,
        availableHeight: x
      });
      const de = await a.getDimensions(r.floating);
      return T !== de.width || C !== de.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function _i(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Xi(e) {
  return _i(e).getComputedStyle(e);
}
const Tp = Math.min, lo = Math.max, Qs = Math.round;
function Wv(e) {
  const t = Xi(e);
  let i = parseFloat(t.width), n = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, o = Qs(i) !== a || Qs(n) !== r;
  return o && (i = a, n = r), { width: i, height: n, fallback: o };
}
function Xn(e) {
  return Xv(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ms;
function Yv() {
  if (ms) return ms;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ms = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), ms) : navigator.userAgent;
}
function Zi(e) {
  return e instanceof _i(e).HTMLElement;
}
function Kn(e) {
  return e instanceof _i(e).Element;
}
function Xv(e) {
  return e instanceof _i(e).Node;
}
function kp(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof _i(e).ShadowRoot || e instanceof ShadowRoot;
}
function ql(e) {
  const { overflow: t, overflowX: i, overflowY: n, display: a } = Xi(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + i) && !["inline", "contents"].includes(a);
}
function Qw(e) {
  return ["table", "td", "th"].includes(Xn(e));
}
function wu(e) {
  const t = /firefox/i.test(Yv()), i = Xi(e), n = i.backdropFilter || i.WebkitBackdropFilter;
  return i.transform !== "none" || i.perspective !== "none" || !!n && n !== "none" || t && i.willChange === "filter" || t && !!i.filter && i.filter !== "none" || ["transform", "perspective"].some(((a) => i.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = i.contain;
    return r != null && r.includes(a);
  }));
}
function Zv() {
  return !/^((?!chrome|android).)*safari/i.test(Yv());
}
function od(e) {
  return ["html", "body", "#document"].includes(Xn(e));
}
function Jv(e) {
  return Kn(e) ? e : e.contextElement;
}
const Qv = { x: 1, y: 1 };
function or(e) {
  const t = Jv(e);
  if (!Zi(t)) return Qv;
  const i = t.getBoundingClientRect(), { width: n, height: a, fallback: r } = Wv(t);
  let o = (r ? Qs(i.width) : i.width) / n, c = (r ? Qs(i.height) : i.height) / a;
  return o && Number.isFinite(o) || (o = 1), c && Number.isFinite(c) || (c = 1), { x: o, y: c };
}
function Lo(e, t, i, n) {
  var a, r;
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  const o = e.getBoundingClientRect(), c = Jv(e);
  let u = Qv;
  t && (n ? Kn(n) && (u = or(n)) : u = or(e));
  const y = c ? _i(c) : window, f = !Zv() && i;
  let h = (o.left + (f && ((a = y.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / u.x, T = (o.top + (f && ((r = y.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / u.y, C = o.width / u.x, N = o.height / u.y;
  if (c) {
    const E = _i(c), R = n && Kn(n) ? _i(n) : n;
    let D = E.frameElement;
    for (; D && n && R !== E; ) {
      const $ = or(D), G = D.getBoundingClientRect(), j = getComputedStyle(D);
      G.x += (D.clientLeft + parseFloat(j.paddingLeft)) * $.x, G.y += (D.clientTop + parseFloat(j.paddingTop)) * $.y, h *= $.x, T *= $.y, C *= $.x, N *= $.y, h += G.x, T += G.y, D = _i(D).frameElement;
    }
  }
  return { width: C, height: N, top: T, right: h + C, bottom: T + N, left: h, x: h, y: T };
}
function Gn(e) {
  return ((Xv(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Wl(e) {
  return Kn(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function eg(e) {
  return Lo(Gn(e)).left + Wl(e).scrollLeft;
}
function Ro(e) {
  if (Xn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || kp(e) && e.host || Gn(e);
  return kp(t) ? t.host : t;
}
function tg(e) {
  const t = Ro(e);
  return od(t) ? t.ownerDocument.body : Zi(t) && ql(t) ? t : tg(t);
}
function el(e, t) {
  var i;
  t === void 0 && (t = []);
  const n = tg(e), a = n === ((i = e.ownerDocument) == null ? void 0 : i.body), r = _i(n);
  return a ? t.concat(r, r.visualViewport || [], ql(n) ? n : []) : t.concat(n, el(n));
}
function Ep(e, t, i) {
  return t === "viewport" ? so((function(n, a) {
    const r = _i(n), o = Gn(n), c = r.visualViewport;
    let u = o.clientWidth, y = o.clientHeight, f = 0, h = 0;
    if (c) {
      u = c.width, y = c.height;
      const T = Zv();
      (T || !T && a === "fixed") && (f = c.offsetLeft, h = c.offsetTop);
    }
    return { width: u, height: y, x: f, y: h };
  })(e, i)) : Kn(t) ? so((function(n, a) {
    const r = Lo(n, !0, a === "fixed"), o = r.top + n.clientTop, c = r.left + n.clientLeft, u = Zi(n) ? or(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * u.x, height: n.clientHeight * u.y, x: c * u.x, y: o * u.y };
  })(t, i)) : so((function(n) {
    const a = Gn(n), r = Wl(n), o = n.ownerDocument.body, c = lo(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth), u = lo(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight);
    let y = -r.scrollLeft + eg(n);
    const f = -r.scrollTop;
    return Xi(o).direction === "rtl" && (y += lo(a.clientWidth, o.clientWidth) - c), { width: c, height: u, x: y, y: f };
  })(Gn(e)));
}
function Ap(e) {
  return Zi(e) && Xi(e).position !== "fixed" ? e.offsetParent : null;
}
function Op(e) {
  const t = _i(e);
  let i = Ap(e);
  for (; i && Qw(i) && Xi(i).position === "static"; ) i = Ap(i);
  return i && (Xn(i) === "html" || Xn(i) === "body" && Xi(i).position === "static" && !wu(i)) ? t : i || (function(n) {
    let a = Ro(n);
    for (; Zi(a) && !od(a); ) {
      if (wu(a)) return a;
      a = Ro(a);
    }
    return null;
  })(e) || t;
}
function eS(e, t, i) {
  const n = Zi(t), a = Gn(t), r = Lo(e, !0, i === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (n || !n && i !== "fixed") if ((Xn(t) !== "body" || ql(a)) && (o = Wl(t)), Zi(t)) {
    const u = Lo(t, !0);
    c.x = u.x + t.clientLeft, c.y = u.y + t.clientTop;
  } else a && (c.x = eg(a));
  return { x: r.left + o.scrollLeft - c.x, y: r.top + o.scrollTop - c.y, width: r.width, height: r.height };
}
const tS = { getClippingRect: function(e) {
  let { element: t, boundary: i, rootBoundary: n, strategy: a } = e;
  const r = i === "clippingAncestors" ? (function(y, f) {
    const h = f.get(y);
    if (h) return h;
    let T = el(y).filter(((R) => Kn(R) && Xn(R) !== "body")), C = null;
    const N = Xi(y).position === "fixed";
    let E = N ? Ro(y) : y;
    for (; Kn(E) && !od(E); ) {
      const R = Xi(E), D = wu(E);
      (N ? D || C : D || R.position !== "static" || !C || !["absolute", "fixed"].includes(C.position)) ? C = R : T = T.filter((($) => $ !== E)), E = Ro(E);
    }
    return f.set(y, T), T;
  })(t, this._c) : [].concat(i), o = [...r, n], c = o[0], u = o.reduce(((y, f) => {
    const h = Ep(t, f, a);
    return y.top = lo(h.top, y.top), y.right = Tp(h.right, y.right), y.bottom = Tp(h.bottom, y.bottom), y.left = lo(h.left, y.left), y;
  }), Ep(t, c, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: i, strategy: n } = e;
  const a = Zi(i), r = Gn(i);
  if (i === r) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((Xn(i) !== "body" || ql(r)) && (o = Wl(i)), Zi(i))) {
    const y = Lo(i);
    c = or(i), u.x = y.x + i.clientLeft, u.y = y.y + i.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - o.scrollLeft * c.x + u.x, y: t.y * c.y - o.scrollTop * c.y + u.y };
}, isElement: Kn, getDimensions: function(e) {
  return Zi(e) ? Wv(e) : e.getBoundingClientRect();
}, getOffsetParent: Op, getDocumentElement: Gn, getScale: or, async getElementRects(e) {
  let { reference: t, floating: i, strategy: n } = e;
  const a = this.getOffsetParent || Op, r = this.getDimensions;
  return { reference: eS(t, await a(i), n), floating: { x: 0, y: 0, ...await r(i) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Xi(e).direction === "rtl" }, iS = (e, t, i) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: tS, ...i }, r = { ...a.platform, _c: n };
  return Hw(e, t, { ...a, platform: r });
}, qn = {
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
function Su(e, t) {
  let i = qn.themes[e] || {}, n;
  do
    n = i[t], typeof n > "u" ? i.$extend ? i = qn.themes[i.$extend] || {} : (i = null, n = qn[t]) : i = null;
  while (i);
  return n;
}
function nS(e) {
  const t = [e];
  let i = qn.themes[e] || {};
  do
    i.$extend && !i.$resetCss ? (t.push(i.$extend), i = qn.themes[i.$extend] || {}) : i = null;
  while (i);
  return t.map((n) => `v-popper--theme-${n}`);
}
function xp(e) {
  const t = [e];
  let i = qn.themes[e] || {};
  do
    i.$extend ? (t.push(i.$extend), i = qn.themes[i.$extend] || {}) : i = null;
  while (i);
  return t;
}
let Io = !1;
if (typeof window < "u") {
  Io = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Io = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let ig = !1;
typeof window < "u" && typeof navigator < "u" && (ig = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const aS = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Np = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Lp = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Rp(e, t) {
  const i = e.indexOf(t);
  i !== -1 && e.splice(i, 1);
}
function Kc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Li = [];
let ya = null;
const Ip = {};
function Pp(e) {
  let t = Ip[e];
  return t || (t = Ip[e] = []), t;
}
let Cu = function() {
};
typeof window < "u" && (Cu = window.Element);
function Ke(e) {
  return function(t) {
    return Su(t.theme, e);
  };
}
const Gc = "__floating-vue__popper", ng = () => /* @__PURE__ */ Ft({
  name: "VPopper",
  provide() {
    return {
      [Gc]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Gc]: { default: null }
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
      default: Ke("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Ke("positioningDisabled")
    },
    placement: {
      type: String,
      default: Ke("placement"),
      validator: (e) => aS.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: Ke("delay")
    },
    distance: {
      type: [Number, String],
      default: Ke("distance")
    },
    skidding: {
      type: [Number, String],
      default: Ke("skidding")
    },
    triggers: {
      type: Array,
      default: Ke("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: Ke("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: Ke("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: Ke("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: Ke("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: Ke("popperHideTriggers")
    },
    container: {
      type: [String, Object, Cu, Boolean],
      default: Ke("container")
    },
    boundary: {
      type: [String, Cu],
      default: Ke("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: Ke("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: Ke("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: Ke("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: Ke("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: Ke("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: Ke("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: Ke("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: Ke("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: Ke("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: Ke("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: Ke("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: Ke("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: Ke("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: Ke("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: Ke("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: Ke("flip")
    },
    shift: {
      type: Boolean,
      default: Ke("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: Ke("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: Ke("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: Ke("disposeTimeout")
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
      return (e = this[Gc]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(Xw({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Gw({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Zw({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(qw({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Vw({
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
            let u, y;
            return r.startsWith("top") || r.startsWith("bottom") ? u = a.reference.width : y = a.reference.height, this.$_innerNode.style[n === "min" ? "minWidth" : n === "max" ? "maxWidth" : "width"] = u != null ? `${u}px` : null, this.$_innerNode.style[n === "min" ? "minHeight" : n === "max" ? "maxHeight" : "height"] = y != null ? `${y}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Jw({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: n, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = n != null ? `${n}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), ya && this.instantMove && ya.instantMove && ya !== this.parentPopper) {
        ya.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (ya = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Kc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...el(this.$_referenceNode),
        ...el(this.$_popperNode)
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
      for (const t of xp(this.theme))
        Pp(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Kc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Rp(Li, this), Li.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const i of xp(this.theme)) {
        const n = Pp(i);
        Rp(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${i}`);
      }
      ya === this && (ya = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Kc(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Np, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Np, this.popperTriggers, this.popperShowTriggers, e);
      const t = (i) => {
        i.usedByTooltip || this.hide({ event: i });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Lp, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Lp, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, i) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: i }), e.forEach((n) => n.addEventListener(t, i, Io ? {
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
      if (co >= e.left && co <= e.right && uo >= e.top && uo <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), i = co - Un, n = uo - jn, a = t.left + t.width / 2 - Un + (t.top + t.height / 2) - jn + t.width + t.height, r = Un + i * a, o = jn + n * a;
        return ys(Un, jn, r, o, t.left, t.top, t.left, t.bottom) || // Left edge
        ys(Un, jn, r, o, t.left, t.top, t.right, t.top) || // Top edge
        ys(Un, jn, r, o, t.right, t.top, t.right, t.bottom) || // Right edge
        ys(Un, jn, r, o, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (ig) {
    const e = Io ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => $p(t), e), document.addEventListener("touchend", (t) => Fp(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => $p(e), !0), window.addEventListener("click", (e) => Fp(e, !1), !0);
  window.addEventListener("resize", sS);
}
function $p(e, t) {
  for (let i = 0; i < Li.length; i++) {
    const n = Li[i];
    try {
      n.mouseDownContains = n.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Fp(e, t) {
  rS(e, t);
}
function rS(e, t) {
  const i = {};
  for (let n = Li.length - 1; n >= 0; n--) {
    const a = Li[n];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !i[a.randomId] && Dp(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let c = a.parentPopper;
            for (; c; )
              i[c.randomId] = !0, c = c.parentPopper;
            return;
          }
          let o = a.parentPopper;
          for (; o && Dp(o, o.containsGlobalTarget, e); )
            o.$_handleGlobalClose(e, t), o = o.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Dp(e, t, i) {
  return i.closeAllPopover || i.closePopover && t || oS(e, i) && !t;
}
function oS(e, t) {
  if (typeof e.autoHide == "function") {
    const i = e.autoHide(t);
    return e.lastAutoHide = i, i;
  }
  return e.autoHide;
}
function sS() {
  for (let e = 0; e < Li.length; e++)
    Li[e].$_computePosition();
}
let Un = 0, jn = 0, co = 0, uo = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Un = co, jn = uo, co = e.clientX, uo = e.clientY;
}, Io ? {
  passive: !0
} : void 0);
function ys(e, t, i, n, a, r, o, c) {
  const u = ((o - a) * (t - r) - (c - r) * (e - a)) / ((c - r) * (i - e) - (o - a) * (n - t)), y = ((i - e) * (t - r) - (n - t) * (e - a)) / ((c - r) * (i - e) - (o - a) * (n - t));
  return u >= 0 && u <= 1 && y >= 0 && y <= 1;
}
const lS = {
  extends: ng()
}, sd = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
};
function cS(e, t, i, n, a, r) {
  return m(), _("div", {
    ref: "reference",
    class: ye(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    De(e.$slots, "default", Os(ko(e.slotData)))
  ], 2);
}
const uS = /* @__PURE__ */ sd(lS, [["render", cS]]);
function dS() {
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
let Es;
function Tu() {
  Tu.init || (Tu.init = !0, Es = dS() !== -1);
}
var Yl = {
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
    Tu(), ti(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Es && this.$el.appendChild(e), e.data = "about:blank", Es || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Es && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const fS = /* @__PURE__ */ dm();
cm("data-v-b329ee4c");
const pS = {
  class: "resize-observer",
  tabindex: "-1"
};
um();
const hS = /* @__PURE__ */ fS((e, t, i, n, a, r) => (m(), je("div", pS)));
Yl.render = hS;
Yl.__scopeId = "data-v-b329ee4c";
Yl.__file = "src/components/ResizeObserver.vue";
const ag = (e = "theme") => ({
  computed: {
    themeClass() {
      return nS(this[e]);
    }
  }
}), vS = /* @__PURE__ */ Ft({
  name: "VPopperContent",
  components: {
    ResizeObserver: Yl
  },
  mixins: [
    ag()
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
}), gS = ["id", "aria-hidden", "tabindex", "data-popper-placement"], bS = {
  ref: "inner",
  class: "v-popper__inner"
}, mS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-outer" }, null, -1), yS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-inner" }, null, -1), _S = [
  mS,
  yS
];
function wS(e, t, i, n, a, r) {
  const o = Ve("ResizeObserver");
  return m(), _("div", {
    id: e.popperId,
    ref: "popover",
    class: ye(["v-popper__popper", [
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
      l("div", bS, [
        e.mounted ? (m(), _(ae, { key: 0 }, [
          l("div", null, [
            De(e.$slots, "default")
          ]),
          e.handleResize ? (m(), je(o, {
            key: 0,
            onNotify: t[1] || (t[1] = (c) => e.$emit("resize", c))
          })) : F("", !0)
        ], 64)) : F("", !0)
      ], 512),
      l("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: hi(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, _S, 4)
    ], 4)
  ], 46, gS);
}
const rg = /* @__PURE__ */ sd(vS, [["render", wS]]), og = {
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
let ku = function() {
};
typeof window < "u" && (ku = window.Element);
const SS = /* @__PURE__ */ Ft({
  name: "VPopperWrapper",
  components: {
    Popper: uS,
    PopperContent: rg
  },
  mixins: [
    og,
    ag("finalTheme")
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
      type: [String, Object, ku, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, ku],
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
function CS(e, t, i, n, a, r) {
  const o = Ve("PopperContent"), c = Ve("Popper");
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
    default: Pe(({
      popperId: u,
      isShown: y,
      shouldMountContent: f,
      skipTransition: h,
      autoHide: T,
      show: C,
      hide: N,
      handleResize: E,
      onResize: R,
      classes: D,
      result: $
    }) => [
      De(e.$slots, "default", {
        shown: y,
        show: C,
        hide: N
      }),
      Ae(o, {
        ref: "popperContent",
        "popper-id": u,
        theme: e.finalTheme,
        shown: y,
        mounted: f,
        "skip-transition": h,
        "auto-hide": T,
        "handle-resize": E,
        classes: D,
        result: $,
        onHide: N,
        onResize: R
      }, {
        default: Pe(() => [
          De(e.$slots, "popper", {
            shown: y,
            hide: N
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const ld = /* @__PURE__ */ sd(SS, [["render", CS]]), TS = {
  ...ld,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...ld
});
({
  ...ld
});
ng();
const Mp = qn, kS = TS, ES = /* @__PURE__ */ Ft({
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
}), AS = "_ncPopover_qgtYg", OS = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: AS
}, sg = "nc-popover-9";
Mp.themes[sg] = structuredClone(Mp.themes.dropdown);
const xS = {
  name: "NcPopover",
  components: {
    Dropdown: kS,
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
      theme: sg
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
      return this.placement === "start" ? bu ? "right" : "left" : this.placement === "end" ? bu ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = id(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: xo(),
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
        La.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function NS(e, t, i, n, a, r) {
  const o = Ve("NcPopoverTriggerProvider"), c = Ve("Dropdown");
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
    popper: Pe((u) => [
      De(e.$slots, "default", Os(ko(u)))
    ]),
    default: Pe(() => [
      Ae(o, {
        shown: a.internalShown,
        popupRole: i.popupRole
      }, {
        default: Pe((u) => [
          De(e.$slots, "trigger", Os(ko(u)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const LS = {
  $style: OS
}, zp = /* @__PURE__ */ tt(xS, [["render", NS], ["__cssModules", LS]]), RS = {
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
}, IS = ["aria-hidden", "aria-label"], PS = ["fill", "width", "height"], $S = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, FS = { key: 0 };
function DS(e, t, i, n, a, r) {
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
      l("path", $S, [
        i.title ? (m(), _("title", FS, v(i.title), 1)) : F("", !0)
      ])
    ], 8, PS))
  ], 16, IS);
}
const MS = /* @__PURE__ */ tt(RS, [["render", DS]]);
Jn(b1);
function cd(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const i = t;
      if (i.type === Pt)
        return !1;
      if (i.type === ae && !cd(i.children))
        return !1;
      if (i.type === zo && !i.children.trim())
        return !1;
    }
    return !0;
  });
}
const zS = ".focusable", US = {
  name: "NcActions",
  components: {
    NcButton: Yi,
    NcPopover: zp
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
      [nd]: H(() => this.actionsMenuSemanticType === "menu"),
      [Bv]: this.closeMenu
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
      default: Tt("Actions")
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
      randomId: Gl()
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
    Rw(() => this.opened, {
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
    const e = [], t = (C, N) => {
      C.forEach((E) => {
        if (this.isAction(E)) {
          N.push(E);
          return;
        }
        E.type === ae && t(E.children, N);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let i = e.filter(this.isValidSingleAction);
    this.forceMenu && i.length > 0 && this.inline > 0 && (i = []);
    const n = i.slice(0, this.inline), a = e.filter((C) => !n.includes(C)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], o = ["NcActionInput", "NcActionTextEditable"], c = ["NcActionLink", "NcActionRouter"], u = a.some((C) => o.includes(this.getActionName(C))), y = a.some((C) => r.includes(this.getActionName(C))), f = a.some((C) => c.includes(this.getActionName(C)));
    u ? this.actionsMenuSemanticType = "dialog" : y ? this.actionsMenuSemanticType = "menu" : f ? this.actionsMenuSemanticType = "navigation" : e.filter((N) => this.getActionName(N).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const h = (C) => {
      const N = C?.props?.icon, E = C?.children?.icon?.()?.[0] ?? (this.isIconUrl(N) ? ai("img", { class: "action-item__menutoggle__icon", src: N, alt: "" }) : ai("span", { class: ["icon", N] })), R = C?.children?.default?.()?.[0]?.children?.trim(), D = this.forceName ? R : "";
      let $ = C?.props?.title;
      this.forceName || $ || ($ = R);
      const G = { ...C?.props ?? {} }, j = ["submit", "reset"].includes(G.type) ? G.modelValue : "button";
      return delete G.modelValue, delete G.type, ai(
        Yi,
        Yt(
          G,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": C?.props?.["aria-label"] || R,
            title: $,
            disabled: this.disabled || C?.props?.disabled,
            pressed: C?.props?.modelValue,
            size: this.size,
            type: j,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (D ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": C?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => D,
          icon: () => E
        }
      );
    }, T = (C) => {
      const N = cd(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? ai("span", { class: ["icon", this.defaultIcon] }) : ai(MS, { size: 20 }), E = `${this.randomId}-trigger`;
      return ai(
        zp,
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
          trigger: () => ai(Yi, {
            id: E,
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
            icon: () => N,
            default: () => this.menuName
          }),
          default: () => ai("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            ai("ul", {
              id: this.randomId,
              tabindex: "-1",
              ref: "menuList",
              role: this.config.popupRole,
              // For most roles a label is required (dialog, menu), but also in general nothing speaks against labelling a list.
              // It is even recommended to do so.
              "aria-labelledby": E,
              "aria-modal": this.actionsMenuSemanticType === "dialog" ? "true" : void 0
            }, [
              C
            ])
          ])
        }
      );
    };
    return e.length === 1 && i.length === 1 && !this.forceMenu ? h(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), n.length > 0 && this.inline > 0 ? ai(
      "div",
      {
        class: [
          "action-items",
          `action-item--${this.triggerButtonVariant}`
        ]
      },
      [
        // Render inline actions
        ...n.map(h),
        // render the rest within the popover menu
        a.length > 0 ? ai(
          "div",
          {
            class: [
              "action-item",
              {
                "action-item--open": this.opened
              }
            ]
          },
          [T(a)]
        ) : null
      ]
    ) : ai(
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
        T(e)
      ]
    ));
  }
}, ud = /* @__PURE__ */ tt(US, [["__scopeId", "data-v-7206c1f1"]]), jS = ["aria-label"], BS = ["width", "height"], HS = ["fill"], VS = ["fill"], KS = { key: 0 }, GS = /* @__PURE__ */ Ft({
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
        }, null, 8, HS),
        l("path", {
          fill: i.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (m(), _("title", KS, v(e.name), 1)) : F("", !0)
        ], 8, VS)
      ], 8, BS))
    ], 8, jS));
  }
}), lg = /* @__PURE__ */ tt(GS, [["__scopeId", "data-v-cf399190"]]), Eu = /* @__PURE__ */ Ft({
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
}), qS = {
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
}, WS = ["aria-hidden", "aria-label"], YS = ["fill", "width", "height"], XS = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, ZS = { key: 0 };
function JS(e, t, i, n, a, r) {
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
      l("path", XS, [
        i.title ? (m(), _("title", ZS, v(i.title), 1)) : F("", !0)
      ])
    ], 8, YS))
  ], 16, WS);
}
const QS = /* @__PURE__ */ tt(qS, [["render", JS]]), eC = {
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
}, tC = ["aria-hidden", "aria-label"], iC = ["fill", "width", "height"], nC = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, aC = { key: 0 };
function rC(e, t, i, n, a, r) {
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
      l("path", nC, [
        i.title ? (m(), _("title", aC, v(i.title), 1)) : F("", !0)
      ])
    ], 8, iC))
  ], 16, tC);
}
const oC = /* @__PURE__ */ tt(eC, [["render", rC]]);
Jn(w1);
const sC = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Yi,
    ChevronDown: X0,
    ChevronUp: nw
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
    return { isLegacy34: Qn };
  },
  computed: {
    labelButton() {
      return this.open ? Tt("Collapse menu") : Tt("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function lC(e, t, i, n, a, r) {
  const o = Ve("ChevronUp"), c = Ve("ChevronDown"), u = Ve("NcButton");
  return m(), je(u, {
    class: ye(["icon-collapse", {
      "icon-collapse--active": i.active,
      "icon-collapse--open": i.open
    }]),
    "aria-label": r.labelButton,
    variant: i.active && n.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Pe(() => [
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
const cC = /* @__PURE__ */ tt(sC, [["render", lC], ["__scopeId", "data-v-cfbd3794"]]);
Jn(S1, k1);
const uC = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: ud,
    NcActionButton: Lw,
    NcAppNavigationIconCollapsible: cC,
    NcInputConfirmCancel: yw,
    NcLoadingIcon: lg,
    NcVNodes: Eu,
    Pencil: QS,
    Undo: oC
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: Fv, default: null }
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
      default: () => Gl(),
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
      isMobile: jo(),
      isLegacy34: Qn
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
      return this.editLabel ? this.editLabel : Tt("Edit item");
    },
    undoButtonAriaLabel() {
      return Tt("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && i && (t?.(e), e.preventDefault(), this.isMobile && yn("toggle-navigation", { open: !1 }));
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
}, dC = ["id"], fC = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], pC = {
  key: 0,
  class: "editingContainer"
}, hC = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, vC = { class: "app-navigation-entry__deleted-description" }, gC = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, bC = {
  key: 0,
  class: "app-navigation-entry__children"
};
function mC(e, t, i, n, a, r) {
  const o = Ve("NcLoadingIcon"), c = Ve("NcInputConfirmCancel"), u = Ve("Pencil"), y = Ve("NcActionButton"), f = Ve("Undo"), h = Ve("NcActions"), T = Ve("NcAppNavigationIconCollapsible");
  return m(), _("li", {
    id: i.id,
    class: ye([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": i.pinned,
      "app-navigation-entry--collapsible": i.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (m(), je(Gu(r.isRouterLink ? "router-link" : "NcVNodes"), Os(ko({ ...r.isRouterLink && { custom: !0, to: i.to } })), {
      default: Pe(({ href: C, navigate: N, isActive: E }) => [
        l("div", {
          ref: "entry",
          class: ye(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": i.undo,
            "app-navigation-entry--legacy": n.isLegacy34,
            active: i.to && E || i.active
          }]),
          onPointerenter: t[4] || (t[4] = (...R) => r.requestHighlight && r.requestHighlight(...R)),
          onFocusin: t[5] || (t[5] = (...R) => r.requestHighlight && r.requestHighlight(...R))
        }, [
          i.undo ? F("", !0) : (m(), _("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": i.active || i.to && E ? "page" : void 0,
            "aria-description": i.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: i.href || C || "#",
            target: r.isExternal(i.href) ? "_blank" : void 0,
            title: i.title || i.name,
            onBlur: t[1] || (t[1] = (...R) => r.handleBlur && r.handleBlur(...R)),
            onClick: (R) => r.onClick(R, N, C),
            onFocus: t[2] || (t[2] = (...R) => r.handleFocus && r.handleFocus(...R)),
            onKeydown: t[3] || (t[3] = at(ke((...R) => r.handleTab && r.handleTab(...R), ["exact"]), ["tab"]))
          }, [
            l("div", {
              class: ye(["app-navigation-entry-icon", { [i.icon]: i.icon }])
            }, [
              i.loading ? (m(), je(o, { key: 0 })) : De(e.$slots, "icon", {
                key: 1,
                active: i.active || i.to && E
              }, void 0, !0)
            ], 2),
            l("span", {
              class: ye(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, v(i.name), 3),
            a.editingActive ? (m(), _("div", pC, [
              Ae(c, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (R) => a.editingValue = R),
                placeholder: i.editPlaceholder !== "" ? i.editPlaceholder : i.name,
                primary: i.to && E || i.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : F("", !0)
          ], 40, fC)),
          i.undo ? (m(), _("div", hC, [
            l("div", vC, v(i.name), 1)
          ])) : F("", !0),
          (e.$slots.actions || e.$slots.counter || i.editable || i.undo) && !a.editingActive ? (m(), _("div", {
            key: 2,
            class: ye(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": i.forceDisplayActions || a.menuOpenLocalValue || i.menuOpen }])
          }, [
            e.$slots.counter ? (m(), _("div", gC, [
              De(e.$slots, "counter", {}, void 0, !0)
            ])) : F("", !0),
            e.$slots.actions || i.editable && !a.editingActive || i.undo ? (m(), je(h, {
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
              icon: Pe(() => [
                De(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Pe(() => [
                i.editable && !a.editingActive ? (m(), je(y, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Pe(() => [
                    Ae(u, { size: 20 })
                  ]),
                  default: Pe(() => [
                    _e(" " + v(i.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : F("", !0),
                i.undo ? (m(), je(y, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Pe(() => [
                    Ae(f, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : F("", !0),
                De(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : F("", !0)
          ], 2)) : F("", !0),
          i.allowCollapse && e.$slots.default ? (m(), je(T, {
            key: 3,
            active: i.to && E || i.active,
            open: a.opened,
            onClick: ke(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : F("", !0),
          De(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (m(), _("ul", bC, [
      De(e.$slots, "default", {}, void 0, !0)
    ])) : F("", !0)
  ], 10, dC);
}
const qc = /* @__PURE__ */ tt(uC, [["render", mC], ["__scopeId", "data-v-01bef41b"]]), Wc = /* @__PURE__ */ new WeakMap(), yC = {
  mounted(e, t) {
    const i = !t.modifiers.bubble;
    let n;
    if (typeof t.value == "function") n = dp(e, t.value, { capture: i });
    else {
      const [a, r] = t.value;
      n = dp(e, a, Object.assign({ capture: i }, r));
    }
    Wc.set(e, n);
  },
  unmounted(e) {
    const t = Wc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Wc.delete(e);
  }
}, _C = {
  mounted(e) {
    e.focus();
  }
}, wC = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", SC = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Au = "numeric", Ou = "ascii", xu = "alpha", fo = "asciinumeric", eo = "alphanumeric", Nu = "domain", cg = "emoji", CC = "scheme", TC = "slashscheme", Yc = "whitespace";
function kC(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Aa(e, t, i) {
  t[Au] && (t[fo] = !0, t[eo] = !0), t[Ou] && (t[fo] = !0, t[xu] = !0), t[fo] && (t[eo] = !0), t[xu] && (t[eo] = !0), t[eo] && (t[Nu] = !0), t[cg] && (t[Nu] = !0);
  for (const n in t) {
    const a = kC(n, i);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function EC(e, t) {
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
    return t && t.j ? a = t : (a = new fi(t), i && n && Aa(t, i, n)), this.jr.push([e, a]), a;
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
          const u = Object.assign(EC(o.t, n), i);
          Aa(r, u, n);
        } else i && Aa(r, i, n);
      o.t = r;
    }
    return a.j[e] = o, o;
  }
};
const ze = (e, t, i, n, a) => e.ta(t, i, n, a), vt = (e, t, i, n, a) => e.tr(t, i, n, a), Up = (e, t, i, n, a) => e.ts(t, i, n, a), re = (e, t, i, n, a) => e.tt(t, i, n, a), un = "WORD", Lu = "UWORD", ug = "ASCIINUMERICAL", dg = "ALPHANUMERICAL", Po = "LOCALHOST", Ru = "TLD", Iu = "UTLD", As = "SCHEME", Ja = "SLASH_SCHEME", dd = "NUM", Pu = "WS", fd = "NL", po = "OPENBRACE", ho = "CLOSEBRACE", tl = "OPENBRACKET", il = "CLOSEBRACKET", nl = "OPENPAREN", al = "CLOSEPAREN", rl = "OPENANGLEBRACKET", ol = "CLOSEANGLEBRACKET", sl = "FULLWIDTHLEFTPAREN", ll = "FULLWIDTHRIGHTPAREN", cl = "LEFTCORNERBRACKET", ul = "RIGHTCORNERBRACKET", dl = "LEFTWHITECORNERBRACKET", fl = "RIGHTWHITECORNERBRACKET", pl = "FULLWIDTHLESSTHAN", hl = "FULLWIDTHGREATERTHAN", vl = "AMPERSAND", gl = "APOSTROPHE", bl = "ASTERISK", Hn = "AT", ml = "BACKSLASH", yl = "BACKTICK", _l = "CARET", Oa = "COLON", pd = "COMMA", wl = "DOLLAR", Ki = "DOT", Sl = "EQUALS", hd = "EXCLAMATION", bi = "HYPHEN", vo = "PERCENT", Cl = "PIPE", Tl = "PLUS", kl = "POUND", go = "QUERY", vd = "QUOTE", fg = "FULLWIDTHMIDDLEDOT", gd = "SEMI", Gi = "SLASH", bo = "TILDE", El = "UNDERSCORE", pg = "EMOJI", Al = "SYM";
var hg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: dg,
  AMPERSAND: vl,
  APOSTROPHE: gl,
  ASCIINUMERICAL: ug,
  ASTERISK: bl,
  AT: Hn,
  BACKSLASH: ml,
  BACKTICK: yl,
  CARET: _l,
  CLOSEANGLEBRACKET: ol,
  CLOSEBRACE: ho,
  CLOSEBRACKET: il,
  CLOSEPAREN: al,
  COLON: Oa,
  COMMA: pd,
  DOLLAR: wl,
  DOT: Ki,
  EMOJI: pg,
  EQUALS: Sl,
  EXCLAMATION: hd,
  FULLWIDTHGREATERTHAN: hl,
  FULLWIDTHLEFTPAREN: sl,
  FULLWIDTHLESSTHAN: pl,
  FULLWIDTHMIDDLEDOT: fg,
  FULLWIDTHRIGHTPAREN: ll,
  HYPHEN: bi,
  LEFTCORNERBRACKET: cl,
  LEFTWHITECORNERBRACKET: dl,
  LOCALHOST: Po,
  NL: fd,
  NUM: dd,
  OPENANGLEBRACKET: rl,
  OPENBRACE: po,
  OPENBRACKET: tl,
  OPENPAREN: nl,
  PERCENT: vo,
  PIPE: Cl,
  PLUS: Tl,
  POUND: kl,
  QUERY: go,
  QUOTE: vd,
  RIGHTCORNERBRACKET: ul,
  RIGHTWHITECORNERBRACKET: fl,
  SCHEME: As,
  SEMI: gd,
  SLASH: Gi,
  SLASH_SCHEME: Ja,
  SYM: Al,
  TILDE: bo,
  TLD: Ru,
  UNDERSCORE: El,
  UTLD: Iu,
  UWORD: Lu,
  WORD: un,
  WS: Pu
});
const ln = /[a-z]/, Wr = new RegExp("\\p{L}", "u"), Xc = new RegExp("\\p{Emoji}", "u"), cn = /\d/, Zc = /\s/, jp = "\r", Jc = `
`, AC = "️", OC = "‍", Qc = "￼";
let _s = null, ws = null;
function xC(e = []) {
  const t = {};
  fi.groups = t;
  const i = new fi();
  _s == null && (_s = Bp(wC)), ws == null && (ws = Bp(SC)), re(i, "'", gl), re(i, "{", po), re(i, "}", ho), re(i, "[", tl), re(i, "]", il), re(i, "(", nl), re(i, ")", al), re(i, "<", rl), re(i, ">", ol), re(i, "（", sl), re(i, "）", ll), re(i, "「", cl), re(i, "」", ul), re(i, "『", dl), re(i, "』", fl), re(i, "＜", pl), re(i, "＞", hl), re(i, "&", vl), re(i, "*", bl), re(i, "@", Hn), re(i, "`", yl), re(i, "^", _l), re(i, ":", Oa), re(i, ",", pd), re(i, "$", wl), re(i, ".", Ki), re(i, "=", Sl), re(i, "!", hd), re(i, "-", bi), re(i, "%", vo), re(i, "|", Cl), re(i, "+", Tl), re(i, "#", kl), re(i, "?", go), re(i, '"', vd), re(i, "/", Gi), re(i, ";", gd), re(i, "~", bo), re(i, "_", El), re(i, "\\", ml), re(i, "・", fg);
  const n = vt(i, cn, dd, {
    [Au]: !0
  });
  vt(n, cn, n);
  const a = vt(n, ln, ug, {
    [fo]: !0
  }), r = vt(n, Wr, dg, {
    [eo]: !0
  }), o = vt(i, ln, un, {
    [Ou]: !0
  });
  vt(o, cn, a), vt(o, ln, o), vt(a, cn, a), vt(a, ln, a);
  const c = vt(i, Wr, Lu, {
    [xu]: !0
  });
  vt(c, ln), vt(c, cn, r), vt(c, Wr, c), vt(r, cn, r), vt(r, ln), vt(r, Wr, r);
  const u = re(i, Jc, fd, {
    [Yc]: !0
  }), y = re(i, jp, Pu, {
    [Yc]: !0
  }), f = vt(i, Zc, Pu, {
    [Yc]: !0
  });
  re(i, Qc, f), re(y, Jc, u), re(y, Qc, f), vt(y, Zc, f), re(f, jp), re(f, Jc), vt(f, Zc, f), re(f, Qc, f);
  const h = vt(i, Xc, pg, {
    [cg]: !0
  });
  re(h, "#"), vt(h, Xc, h), re(h, AC, h);
  const T = re(h, OC);
  re(T, "#"), vt(T, Xc, h);
  const C = [[ln, o], [cn, a]], N = [[ln, null], [Wr, c], [cn, r]];
  for (let E = 0; E < _s.length; E++)
    Mn(i, _s[E], Ru, un, C);
  for (let E = 0; E < ws.length; E++)
    Mn(i, ws[E], Iu, Lu, N);
  Aa(Ru, {
    tld: !0,
    ascii: !0
  }, t), Aa(Iu, {
    utld: !0,
    alpha: !0
  }, t), Mn(i, "file", As, un, C), Mn(i, "mailto", As, un, C), Mn(i, "http", Ja, un, C), Mn(i, "https", Ja, un, C), Mn(i, "ftp", Ja, un, C), Mn(i, "ftps", Ja, un, C), Aa(As, {
    scheme: !0,
    ascii: !0
  }, t), Aa(Ja, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((E, R) => E[0] > R[0] ? 1 : -1);
  for (let E = 0; E < e.length; E++) {
    const R = e[E][0], $ = e[E][1] ? {
      [CC]: !0
    } : {
      [TC]: !0
    };
    R.indexOf("-") >= 0 ? $[Nu] = !0 : ln.test(R) ? cn.test(R) ? $[fo] = !0 : $[Ou] = !0 : $[Au] = !0, Up(i, R, R, $);
  }
  return Up(i, "localhost", Po, {
    ascii: !0
  }), i.jd = new fi(Al), {
    start: i,
    tokens: Object.assign({
      groups: t
    }, hg)
  };
}
function vg(e, t) {
  const i = NC(t.replace(/[A-Z]/g, (c) => c.toLowerCase())), n = i.length, a = [];
  let r = 0, o = 0;
  for (; o < n; ) {
    let c = e, u = null, y = 0, f = null, h = -1, T = -1;
    for (; o < n && (u = c.go(i[o])); )
      c = u, c.accepts() ? (h = 0, T = 0, f = c) : h >= 0 && (h += i[o].length, T++), y += i[o].length, r += i[o].length, o++;
    r -= h, o -= T, y -= h, a.push({
      t: f.t,
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
function NC(e) {
  const t = [], i = e.length;
  let n = 0;
  for (; n < i; ) {
    let a = e.charCodeAt(n), r, o = a < 55296 || a > 56319 || n + 1 === i || (r = e.charCodeAt(n + 1)) < 56320 || r > 57343 ? e[n] : e.slice(n, n + 2);
    t.push(o), n += o.length;
  }
  return t;
}
function Mn(e, t, i, n, a) {
  let r;
  const o = t.length;
  for (let c = 0; c < o - 1; c++) {
    const u = t[c];
    e.j[u] ? r = e.j[u] : (r = new fi(n), r.jr = a.slice(), e.j[u] = r), e = r;
  }
  return r = new fi(i), r.jr = a.slice(), e.j[t[o - 1]] = r, r;
}
function Bp(e) {
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
const $o = {
  defaultProtocol: "http",
  events: null,
  format: Hp,
  formatHref: Hp,
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
function bd(e, t = null) {
  let i = Object.assign({}, $o);
  e && (i = Object.assign(i, e instanceof bd ? e.o : e));
  const n = i.ignoreTags, a = [];
  for (let r = 0; r < n.length; r++)
    a.push(n[r].toUpperCase());
  this.o = i, t && (this.defaultRender = t), this.ignoreTags = a;
}
bd.prototype = {
  o: $o,
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
    return a && (typeof a == "object" ? (a = i.t in a ? a[i.t] : $o[e], typeof a == "function" && n && (a = a(t, i))) : typeof a == "function" && n && (a = a(t, i.t, i)), a);
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
function Hp(e) {
  return e;
}
function gg(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
gg.prototype = {
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
  toObject(e = $o.defaultProtocol) {
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
    const t = this, i = this.toHref(e.get("defaultProtocol")), n = e.get("formatHref", i, this), a = e.get("tagName", i, t), r = this.toFormattedString(e), o = {}, c = e.get("className", i, t), u = e.get("target", i, t), y = e.get("rel", i, t), f = e.getObj("attributes", i, t), h = e.getObj("events", i, t);
    return o.href = n, c && (o.class = c), u && (o.target = u), y && (o.rel = y), f && Object.assign(o, f), {
      tagName: a,
      attributes: o,
      content: r,
      eventListeners: h
    };
  }
};
function Xl(e, t) {
  class i extends gg {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const n in t)
    i.prototype[n] = t[n];
  return i.t = e, i;
}
const LC = Xl("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Vp = Xl("text"), RC = Xl("nl"), Ss = Xl("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = $o.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== Po && e[1].t === Oa;
  }
}), gi = (e) => new fi(e);
function IC({
  groups: e
}) {
  const t = e.domain.concat([vl, bl, Hn, ml, yl, _l, wl, Sl, bi, dd, vo, Cl, Tl, kl, Gi, Al, bo, El]), i = [gl, Oa, pd, Ki, hd, vo, go, vd, gd, rl, ol, po, ho, il, tl, nl, al, sl, ll, cl, ul, dl, fl, pl, hl], n = [vl, gl, bl, ml, yl, _l, wl, Sl, bi, po, ho, vo, Cl, Tl, kl, go, Gi, Al, bo, El], a = gi(), r = re(a, bo);
  ze(r, n, r), ze(r, e.domain, r);
  const o = gi(), c = gi(), u = gi();
  ze(a, e.domain, o), ze(a, e.scheme, c), ze(a, e.slashscheme, u), ze(o, n, r), ze(o, e.domain, o);
  const y = re(o, Hn);
  re(r, Hn, y), re(c, Hn, y), re(u, Hn, y);
  const f = re(r, Ki);
  ze(f, n, r), ze(f, e.domain, r);
  const h = gi();
  ze(y, e.domain, h), ze(h, e.domain, h);
  const T = re(h, Ki);
  ze(T, e.domain, h);
  const C = gi(LC);
  ze(T, e.tld, C), ze(T, e.utld, C), re(y, Po, C);
  const N = re(h, bi);
  re(N, bi, N), ze(N, e.domain, h), ze(C, e.domain, h), re(C, Ki, T), re(C, bi, N);
  const E = re(o, bi), R = re(o, Ki);
  re(E, bi, E), ze(E, e.domain, o), ze(R, n, r), ze(R, e.domain, o);
  const D = gi(Ss);
  ze(R, e.tld, D), ze(R, e.utld, D), ze(D, e.domain, o), ze(D, n, r), re(D, Ki, R), re(D, bi, E), re(D, Hn, y);
  const $ = re(D, Oa), G = gi(Ss);
  ze($, e.numeric, G);
  const j = gi(Ss), Z = gi();
  ze(j, t, j), ze(j, i, Z), ze(Z, t, j), ze(Z, i, Z), re(D, Gi, j), re(G, Gi, j);
  const x = re(c, Oa), J = re(u, Oa), de = re(J, Gi), Y = re(de, Gi);
  ze(c, e.domain, o), re(c, Ki, R), re(c, bi, E), ze(u, e.domain, o), re(u, Ki, R), re(u, bi, E), ze(x, e.domain, j), re(x, Gi, j), re(x, go, j), ze(Y, e.domain, j), ze(Y, t, j), re(Y, Gi, j);
  const le = [
    [po, ho],
    // {}
    [tl, il],
    // []
    [nl, al],
    // ()
    [rl, ol],
    // <>
    [sl, ll],
    // （）
    [cl, ul],
    // 「」
    [dl, fl],
    // 『』
    [pl, hl]
    // ＜＞
  ];
  for (let he = 0; he < le.length; he++) {
    const [ne, oe] = le[he], M = re(j, ne);
    re(Z, ne, M);
    const z = gi(Ss);
    ze(M, t, z);
    const X = gi();
    ze(M, i, X), re(M, oe, j), ze(z, t, z), ze(z, i, X), ze(X, t, z), ze(X, i, X), re(z, oe, j), re(X, oe, j);
  }
  return re(a, Po, D), re(a, fd, RC), {
    start: a,
    tokens: hg
  };
}
function PC(e, t, i) {
  let n = i.length, a = 0, r = [], o = [];
  for (; a < n; ) {
    let c = e, u = null, y = null, f = 0, h = null, T = -1;
    for (; a < n && !(u = c.go(i[a].t)); )
      o.push(i[a++]);
    for (; a < n && (y = u || c.go(i[a].t)); )
      u = null, c = y, c.accepts() ? (T = 0, h = c) : T >= 0 && T++, a++, f++;
    if (T < 0)
      a -= f, a < n && (o.push(i[a]), a++);
    else {
      o.length > 0 && (r.push(eu(Vp, t, o)), o = []), a -= T, f -= T;
      const C = h.t, N = i.slice(a - f, a);
      r.push(eu(C, t, N));
    }
  }
  return o.length > 0 && r.push(eu(Vp, t, o)), r;
}
function eu(e, t, i) {
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
function $C() {
  Ht.scanner = xC(Ht.customSchemes);
  for (let e = 0; e < Ht.tokenQueue.length; e++)
    Ht.tokenQueue[e][1]({
      scanner: Ht.scanner
    });
  Ht.parser = IC(Ht.scanner.tokens);
  for (let e = 0; e < Ht.pluginQueue.length; e++)
    Ht.pluginQueue[e][1]({
      scanner: Ht.scanner,
      parser: Ht.parser
    });
  return Ht.initialized = !0, Ht;
}
function bg(e) {
  return Ht.initialized || $C(), PC(Ht.parser.start, e, vg(Ht.scanner.start, e));
}
bg.scan = vg;
function FC(e) {
  const t = new bd({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, zC), i = bg(e), n = [];
  for (const a of i)
    a.t === "nl" && t.get("nl2br") ? n.push(`<br>
`) : !a.isLink || !t.check(a) ? n.push(Hs(a.toString())) : n.push(t.render(a));
  return n.join("");
}
function DC(e) {
  return e.replace(/"/g, "&quot;");
}
function MC(e) {
  const t = [];
  for (const i in e) {
    const n = e[i] + "";
    t.push(`${i}="${DC(n)}"`);
  }
  return t.join(" ");
}
function zC({ tagName: e, attributes: t, content: i }) {
  return `<${e} ${MC(t)}>${Hs(i)}</${e}>`;
}
const UC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = FC(t.text));
}, jC = ["title"], BC = /* @__PURE__ */ Ft({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Kt("NcAppSidebar:header:ref");
    return (i, n) => Ie((m(), _("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      _e(v(e.name), 1)
    ], 8, jC)), [
      [g(UC), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), HC = ["aria-labelledby"], VC = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, KC = ["id"], GC = {
  key: 2,
  class: "empty-content__description"
}, qC = {
  key: 3,
  class: "empty-content__action"
}, WC = /* @__PURE__ */ Ft({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = Gl();
    return (i, n) => (m(), _("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      i.$slots.icon ? (m(), _("div", VC, [
        De(i.$slots, "icon", {}, void 0, !0)
      ])) : F("", !0),
      e.name !== "" || i.$slots.name ? (m(), _("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        De(i.$slots, "name", {}, () => [
          _e(v(e.name), 1)
        ], !0)
      ], 8, KC)) : F("", !0),
      e.description !== "" || i.$slots.description ? (m(), _("p", GC, [
        De(i.$slots, "description", {}, () => [
          _e(v(e.description), 1)
        ], !0)
      ])) : F("", !0),
      i.$slots.action ? (m(), _("div", qC, [
        De(i.$slots, "action", {}, void 0, !0)
      ])) : F("", !0)
    ], 8, HC));
  }
}), YC = /* @__PURE__ */ tt(WC, [["__scopeId", "data-v-8609a4c1"]]), XC = {
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
}, ZC = ["aria-hidden", "aria-label"], JC = ["fill", "width", "height"], QC = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, eT = { key: 0 };
function tT(e, t, i, n, a, r) {
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
      l("path", QC, [
        i.title ? (m(), _("title", eT, v(i.title), 1)) : F("", !0)
      ])
    ], 8, JC))
  ], 16, ZC);
}
const iT = /* @__PURE__ */ tt(XC, [["render", tT]]), nT = {
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
}, aT = ["aria-hidden", "aria-label"], rT = ["fill", "width", "height"], oT = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, sT = { key: 0 };
function lT(e, t, i, n, a, r) {
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
      l("path", oT, [
        i.title ? (m(), _("title", sT, v(i.title), 1)) : F("", !0)
      ])
    ], 8, rT))
  ], 16, aT);
}
const cT = /* @__PURE__ */ tt(nT, [["render", lT]]), uT = {
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
}, dT = ["aria-hidden", "aria-label"], fT = ["fill", "width", "height"], pT = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, hT = { key: 0 };
function vT(e, t, i, n, a, r) {
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
      l("path", pT, [
        i.title ? (m(), _("title", hT, v(i.title), 1)) : F("", !0)
      ])
    ], 8, fT))
  ], 16, dT);
}
const gT = /* @__PURE__ */ tt(uT, [["render", vT]]), bT = ["aria-selected", "tabindex"], mT = /* @__PURE__ */ Ft({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Fm({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = zh(e, "selected"), i = /* @__PURE__ */ Te(!1);
    function n() {
      t.value = !0, i.value = !1, requestAnimationFrame(() => {
        i.value = !0;
      });
    }
    return (a, r) => (m(), _("button", {
      class: ye(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(Qn),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: n
    }, [
      l("span", {
        class: ye([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: i.value }]),
        onAnimationend: r[0] || (r[0] = (o) => i.value = !1)
      }, [
        l("span", {
          class: ye([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          Ae(Eu, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Pe(() => [
              l("span", {
                class: ye([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        l("span", {
          class: ye([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          Ae(Eu, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Pe(() => [
              l("span", {
                class: ye([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      l("span", {
        class: ye(a.$style.sidebarTabsButton__name)
      }, v(e.tab.name), 3)
    ], 10, bT));
  }
}), yT = "_sidebarTabsButton_q3kBA", _T = "_sidebarTabsButton_legacy_KQ4d1", wT = "_sidebarTabsButton_selected_Pjayf", ST = "_sidebarTabsButton_animatedHighlight_uvp-0", CT = "_sidebarTabsButton__name_rlQsL", TT = "_sidebarTabsButton__icon_QzZg4", kT = "_sidebarTabsButton__iconLayer_ZkZan", ET = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", AT = "_sidebarTabsButton__icon_pop_IA0By", OT = "_sidebarTabsButton__legacyIcon_QhcNW", xT = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: yT,
  sidebarTabsButton_legacy: _T,
  sidebarTabsButton_selected: wT,
  sidebarTabsButton_animatedHighlight: ST,
  sidebarTabsButton__name: CT,
  sidebarTabsButton__icon: TT,
  sidebarTabsButton__iconLayer: kT,
  sidebarTabsButton__iconLayer_hidden: ET,
  sidebarTabsButton__icon_pop: AT,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: OT
}, NT = {
  $style: xT
}, LT = /* @__PURE__ */ tt(mT, [["__cssModules", NT]]), RT = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: LT
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
      isLegacy34: Qn,
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
}, IT = { class: "app-sidebar-tabs" };
function PT(e, t, i, n, a, r) {
  const o = Ve("NcAppSidebarTabsButton");
  return m(), _("div", IT, [
    r.hasMultipleTabs || r.showForSingleTab ? (m(), _("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: ye(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = at(ke((...c) => r.focusPreviousTab && r.focusPreviousTab(...c), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = at(ke((...c) => r.focusNextTab && r.focusNextTab(...c), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = at(ke((...c) => r.focusActiveTabContent && r.focusActiveTabContent(...c), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = at(ke((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = at(ke((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = at(ke((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = at(ke((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onPointerleave: t[8] || (t[8] = (...c) => r.hideHighlight && r.hideHighlight(...c)),
      onFocusin: t[9] || (t[9] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onFocusout: t[10] || (t[10] = (...c) => r.onHighlightFocusOut && r.onHighlightFocusOut(...c))
    }, [
      a.highlightEnabled ? (m(), _("div", {
        key: 0,
        class: ye(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: hi(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : F("", !0),
      (m(!0), _(ae, null, Ce(a.tabs, (c) => (m(), je(o, {
        id: `tab-button-${c.id}`,
        key: c.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${c.id}`,
        selected: a.activeTab === c.id,
        animatedHighlight: a.highlightEnabled,
        tab: c,
        "onUpdate:selected": (u) => r.setActive(c.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : F("", !0),
    l("div", {
      class: ye(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      De(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const $T = /* @__PURE__ */ tt(RT, [["render", PT], ["__scopeId", "data-v-74190d2a"]]);
Jn(y1);
const FT = {
  name: "NcAppSidebar",
  components: {
    NcActions: ud,
    NcAppSidebarHeader: BC,
    NcAppSidebarTabs: $T,
    NcButton: Yi,
    NcLoadingIcon: lg,
    NcEmptyContent: YC,
    IconArrowRight: Uv,
    IconClose: jv,
    IconDockRight: iT,
    IconStar: cT,
    IconStarOutline: gT
  },
  directives: {
    Focus: _C,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: yC
  },
  inject: {
    ncContentSelector: {
      from: zv,
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
    const e = /* @__PURE__ */ Te(null);
    return mi("NcAppSidebar:header:ref", e), {
      uid: Gl(),
      isMobile: p1(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: Tt("Change name"),
      closeTranslated: Tt("Close sidebar"),
      favoriteTranslated: Tt("Favorite"),
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
    isSlotPopulated: cd,
    t: Tt,
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
      this.focusTrap || (this.focusTrap = id([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: xo(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && La.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, DT = ["aria-labelledby"], MT = { class: "app-sidebar-header__info" }, zT = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, UT = { class: "app-sidebar-header__name-container" }, jT = { class: "app-sidebar-header__mainname-container" }, BT = ["placeholder", "value"], HT = ["title"], VT = {
  key: 2,
  class: "app-sidebar-header__description"
};
function KT(e, t, i, n, a, r) {
  const o = Ve("IconDockRight"), c = Ve("NcButton"), u = Ve("NcLoadingIcon"), y = Ve("IconStar"), f = Ve("IconStarOutline"), h = Ve("NcAppSidebarHeader"), T = Ve("IconArrowRight"), C = Ve("NcActions"), N = Ve("IconClose"), E = Ve("NcAppSidebarTabs"), R = Ve("NcEmptyContent"), D = uf("focus"), $ = uf("click-outside");
  return m(), je(Cy, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Pe(() => [
      Ie(l("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${n.uid}__header`,
        onKeydown: t[6] || (t[6] = at((...G) => r.onKeydownEsc && r.onKeydownEsc(...G), ["esc"]))
      }, [
        r.ncContentSelector && !i.open && !i.noToggle ? (m(), je(Ch, {
          key: 0,
          to: r.ncContentSelector
        }, [
          Ae(c, Yt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", i.toggleClasses],
            variant: "tertiary"
          }, i.toggleAttrs, {
            onClick: t[0] || (t[0] = (G) => e.$emit("update:open", !0))
          }), {
            icon: Pe(() => [
              De(e.$slots, "toggle-icon", {}, () => [
                Ae(o, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : F("", !0),
        l("header", {
          class: ye(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || i.background,
            "app-sidebar-header--compact": i.compact
          }])
        }, [
          i.empty ? (m(), je(h, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: i.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : De(e.$slots, "info", { key: 0 }, () => [
            l("div", MT, [
              r.isSlotPopulated(e.$slots.header?.()) || i.background ? (m(), _("div", {
                key: 0,
                class: ye(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: hi({
                  backgroundImage: `url(${i.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...G) => r.onFigureClick && r.onFigureClick(...G)),
                onKeydown: t[2] || (t[2] = at((...G) => r.onFigureClick && r.onFigureClick(...G), ["enter"]))
              }, [
                De(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : F("", !0),
              l("div", {
                class: ye(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": i.nameEditable && !i.subname,
                  "app-sidebar-header__desc--with-subname--editable": i.nameEditable && i.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (m(), _("div", zT, [
                  De(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (m(), je(c, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: ke(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Pe(() => [
                        i.starLoading ? (m(), je(u, { key: 0 })) : a.isStarred ? (m(), je(y, {
                          key: 1,
                          size: 20
                        })) : (m(), je(f, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : F("", !0)
                  ], !0)
                ])) : F("", !0),
                l("div", UT, [
                  l("div", jT, [
                    Ie(Ae(h, {
                      class: "app-sidebar-header__mainname",
                      name: i.name,
                      linkify: i.linkifyName,
                      title: i.title,
                      tabindex: i.nameEditable ? 0 : -1,
                      onClick: ke(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [nr, !i.nameEditable]
                    ]),
                    i.nameEditable ? Ie((m(), _("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = ke((...G) => r.onSubmitName && r.onSubmitName(...G), ["prevent"]))
                    }, [
                      Ie(l("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: i.namePlaceholder,
                        value: i.name,
                        onKeydown: t[3] || (t[3] = at(ke((...G) => r.onDismissEditing && r.onDismissEditing(...G), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...G) => r.onNameInput && r.onNameInput(...G))
                      }, null, 40, BT), [
                        [D]
                      ]),
                      Ae(c, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Pe(() => [
                          Ae(T, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [$, () => r.onSubmitName()]
                    ]) : F("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (m(), je(C, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: i.forceMenu
                    }, {
                      default: Pe(() => [
                        De(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : F("", !0)
                  ]),
                  i.subname.trim() !== "" || e.$slots.subname ? (m(), _("p", {
                    key: 0,
                    title: i.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    De(e.$slots, "subname", {}, () => [
                      _e(v(i.subname), 1)
                    ], !0)
                  ], 8, HT)) : F("", !0)
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
            onClick: ke(r.closeSidebar, ["prevent"])
          }, {
            icon: Pe(() => [
              Ae(N, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !i.empty ? (m(), _("div", VT, [
            De(e.$slots, "description", {}, void 0, !0)
          ])) : F("", !0)
        ], 2),
        Ie(Ae(E, {
          ref: "tabs",
          active: i.active,
          forceTabs: i.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Pe(() => [
            De(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [nr, !i.loading]
        ]),
        i.loading ? (m(), je(R, { key: 1 }, {
          icon: Pe(() => [
            Ae(u, { size: 64 })
          ]),
          _: 1
        })) : F("", !0)
      ], 40, DT), [
        [nr, i.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const GT = /* @__PURE__ */ tt(FT, [["render", KT], ["__scopeId", "data-v-c2c6820b"]]), qT = {
  name: "NcActionLink",
  mixins: [Hv],
  inject: {
    isInSemanticMenu: {
      from: nd,
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
}, WT = ["role"], YT = ["download", "href", "aria-label", "target", "title", "role"], XT = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, ZT = { class: "action-link__name" }, JT = ["textContent"], QT = ["textContent"], ek = {
  key: 2,
  class: "action-link__text"
};
function tk(e, t, i, n, a, r) {
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
      De(e.$slots, "icon", {}, () => [
        l("span", {
          "aria-hidden": "true",
          class: ye(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: hi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (m(), _("span", XT, [
        l("strong", ZT, v(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: v(e.text)
        }, null, 8, JT)
      ])) : e.isLongText ? (m(), _("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: v(e.text)
      }, null, 8, QT)) : (m(), _("span", ek, v(e.text), 1)),
      F("", !0)
    ], 8, YT)
  ], 8, WT);
}
const tu = /* @__PURE__ */ tt(qT, [["render", tk], ["__scopeId", "data-v-32f01b7a"]]);
Jn(T1);
const ik = `<!--
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
`, nk = `<!--
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
`, ak = { class: "vue-skip-actions__container" }, rk = { class: "vue-skip-actions__headline" }, ok = { class: "vue-skip-actions__buttons" }, sk = /* @__PURE__ */ Ft({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    mi(Mv, c), mi(zv, "#content-vue"), mi("appName", H(() => t.appName));
    const i = jo(), n = /* @__PURE__ */ Te(!1), a = /* @__PURE__ */ Te(), r = H(() => a.value === "navigation" ? nk : ik);
    Lh(() => {
      const u = document.getElementById("skip-actions");
      u && (u.innerHTML = "", u.classList.add("vue-skip-actions"));
    });
    function o() {
      yn("toggle-navigation", { open: !0 }), ti(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function c(u) {
      n.value = u, a.value || (a.value = "navigation");
    }
    return (u, y) => (m(), _("div", {
      id: "content-vue",
      class: ye(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(Qn) }]])
    }, [
      (m(), je(Ch, { to: "#skip-actions" }, [
        l("div", ak, [
          l("div", rk, v(g(Tt)("Keyboard navigation help")), 1),
          l("div", ok, [
            Ie(Ae(Yi, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: ke(o, ["prevent"]),
              onFocusin: y[0] || (y[0] = (f) => a.value = "navigation"),
              onMouseover: y[1] || (y[1] = (f) => a.value = "navigation")
            }, {
              default: Pe(() => [
                _e(v(g(Tt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [nr, n.value]
            ]),
            Ae(Yi, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: y[2] || (y[2] = (f) => a.value = "content"),
              onMouseover: y[3] || (y[3] = (f) => a.value = "content")
            }, {
              default: Pe(() => [
                _e(v(g(Tt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Ie(Ae(Kl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [nr, !g(i)]
          ])
        ])
      ])),
      De(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), lk = /* @__PURE__ */ tt(sk, [["__scopeId", "data-v-d13dcb98"]]), ck = { class: "library-shelf-tree-node" }, uk = ["aria-expanded", "aria-label"], dk = ["href"], fk = { class: "library-shelf-summary-title" }, pk = { dir: "auto" }, hk = { class: "library-muted" }, vk = { dir: "auto" }, gk = {
  key: 1,
  role: "status",
  class: "library-muted"
}, bk = {
  key: 2,
  role: "status",
  class: "library-muted"
}, mk = {
  key: 3,
  class: "library-shelf-tree"
}, yk = ["disabled"], _k = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ Te(!1), n = /* @__PURE__ */ Te(!1), a = /* @__PURE__ */ Te(!1), r = /* @__PURE__ */ Te(!1), o = /* @__PURE__ */ Te([]), c = /* @__PURE__ */ Te(!1), u = /* @__PURE__ */ Te(0);
    async function y() {
      i.value = !i.value, !(!i.value || n.value || a.value) && await f();
    }
    async function f() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const h = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(u.value) }), T = await fetch(`${t.childrenUrl}?${h}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!T.ok) throw new Error("Shelf children request failed");
          const C = await T.json(), N = Array.isArray(C?.nodes) ? C.nodes : [];
          o.value.push(...N), c.value = C?.hasMore === !0, u.value = Number.isInteger(C?.nextOffset) ? C.nextOffset : o.value.length, n.value = !c.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (h, T) => {
      const C = Ve("ShelfTreeNode", !0);
      return m(), _("li", ck, [
        e.node.hasChildren ? (m(), _("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(i.value),
          "aria-label": i.value ? g(b)("library", "Collapse {folder}", { folder: e.node.label }) : g(b)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: y
        }, v(i.value ? "−" : "+"), 9, uk)) : F("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", fk, [
            l("strong", null, [
              l("bdi", pk, v(e.node.label), 1)
            ]),
            l("span", null, v(g(ui)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", hk, [
            l("bdi", vk, v(e.node.path), 1)
          ])
        ], 8, dk),
        a.value ? (m(), _("small", gk, v(g(b)("library", "Loading folders…")), 1)) : r.value ? (m(), _("small", bk, v(g(b)("library", "Could not load folders.")), 1)) : F("", !0),
        i.value && o.value.length ? (m(), _("ul", mk, [
          (m(!0), _(ae, null, Ce(o.value, (N) => (m(), je(C, {
            key: N.id,
            node: N,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : F("", !0),
        i.value && c.value ? (m(), _("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: f
        }, v(g(b)("library", "Load more folders")), 9, yk)) : F("", !0)
      ]);
    };
  }
}, wk = ["aria-label", "title", "onClick"], Sk = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, Ck = { id: "library-sidebar-filters-heading" }, Tk = ["aria-label"], kk = ["value"], Ek = ["name", "value"], Ak = ["value"], Ok = ["value"], xk = {
  class: "library-filter-group",
  "data-library-filter-group": "content"
}, Nk = ["title"], Lk = ["placeholder"], Rk = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "q"
}, Ik = { value: "" }, Pk = ["value"], $k = { class: "library-publisher-filter" }, Fk = { for: "library-publisher-search" }, Dk = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], Mk = ["value"], zk = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, Uk = {
  key: 1,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, jk = ["id", "aria-selected"], Bk = ["onClick"], Hk = { class: "library-publication-filter" }, Vk = { for: "library-publication-search" }, Kk = ["placeholder", "aria-expanded"], Gk = ["value"], qk = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, Wk = {
  key: 1,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, Yk = ["onClick"], Xk = { class: "library-year-filter" }, Zk = { for: "library-year-search" }, Jk = ["placeholder", "aria-expanded"], Qk = ["value"], eE = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, tE = {
  key: 1,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, iE = ["onClick"], nE = { class: "library-creator-filter" }, aE = { for: "library-creator-search" }, rE = ["placeholder", "title", "aria-expanded"], oE = ["value"], sE = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, lE = {
  key: 1,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, cE = ["onClick"], uE = { class: "library-tag-filter" }, dE = { for: "library-tag-search" }, fE = ["placeholder", "aria-expanded"], pE = ["value"], hE = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, vE = ["onClick"], gE = { value: "" }, bE = ["value"], mE = {
  class: "library-filter-group",
  "data-library-filter-group": "location"
}, yE = { value: "" }, _E = ["value"], wE = { class: "library-folder-filter" }, SE = { for: "library-folder-search" }, CE = ["placeholder", "title", "aria-expanded"], TE = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, kE = ["onClick"], EE = {
  class: "library-filter-group",
  "data-library-filter-group": "review"
}, AE = { value: "" }, OE = ["value"], xE = { value: "" }, NE = ["value"], LE = { class: "library-subject-filter" }, RE = { for: "library-subject-search" }, IE = ["placeholder", "title", "aria-expanded"], PE = ["value"], $E = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, FE = {
  key: 1,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, DE = ["onClick"], ME = { class: "library-classification-filter" }, zE = { for: "library-classification-search" }, UE = ["placeholder", "title", "aria-expanded"], jE = ["value"], BE = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, HE = ["onClick"], VE = { value: "" }, KE = { value: "1" }, GE = {
  class: "library-filter-group",
  "data-library-filter-group": "personal"
}, qE = {
  type: "submit",
  class: "button primary"
}, WE = ["href"], YE = ["lang", "dir"], XE = ["aria-label"], ZE = ["href", "aria-label", "title", "onClick"], JE = ["title"], QE = ["href"], eA = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, tA = { class: "library-review-header" }, iA = { class: "library-muted library-catalogue-eyebrow" }, nA = { id: "library-review-heading" }, aA = ["aria-label"], rA = ["href", "aria-current", "onClick"], oA = ["aria-label"], sA = ["name", "value"], lA = {
  type: "submit",
  class: "button secondary"
}, cA = ["aria-busy"], uA = { key: 0 }, dA = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, fA = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, pA = { class: "library-metadata-review-workbench-copy" }, hA = { class: "library-muted library-catalogue-eyebrow" }, vA = ["title"], gA = {
  key: 0,
  class: "library-metadata-review-card"
}, bA = {
  class: "library-bidi-human",
  dir: "auto"
}, mA = { class: "library-muted" }, yA = {
  class: "library-bidi-machine",
  dir: "ltr"
}, _A = { class: "library-metadata-review-fields" }, wA = {
  class: "library-bidi-human",
  dir: "auto"
}, SA = {
  class: "library-bidi-human",
  dir: "auto"
}, CA = {
  class: "library-bidi-human",
  dir: "auto"
}, TA = {
  class: "library-bidi-machine",
  dir: "ltr"
}, kA = {
  class: "library-bidi-human",
  dir: "auto"
}, EA = {
  class: "library-bidi-human",
  dir: "auto"
}, AA = ["action"], OA = ["value"], xA = ["value"], NA = {
  type: "submit",
  class: "button secondary"
}, LA = { class: "library-metadata-review-actions" }, RA = ["href"], IA = ["href"], PA = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, $A = ["href"], FA = ["aria-label"], DA = ["onClick"], MA = {
  class: "library-bidi-human",
  dir: "auto"
}, zA = {
  key: 0,
  class: "library-muted"
}, UA = {
  class: "library-bidi-human",
  dir: "auto"
}, jA = {
  key: 1,
  class: "library-scan-error"
}, BA = {
  class: "library-bidi-human",
  dir: "auto"
}, HA = ["onClick"], VA = ["href", "onClick"], KA = ["aria-label"], GA = ["href"], qA = {
  key: 1,
  class: "library-muted"
}, WA = { key: 0 }, YA = ["href"], XA = {
  key: 3,
  class: "library-muted"
}, ZA = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, JA = { class: "library-home-header" }, QA = { class: "library-muted library-catalogue-eyebrow" }, e2 = { id: "library-home-heading" }, t2 = ["aria-label"], i2 = ["aria-label"], n2 = ["href", "aria-label", "onClick"], a2 = ["title"], r2 = { class: "library-empty-actions" }, o2 = ["href"], s2 = ["href"], l2 = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, c2 = { id: "library-continue-heading" }, u2 = { class: "library-muted" }, d2 = ["href"], f2 = {
  key: 0,
  class: "library-home-card-row"
}, p2 = ["aria-label", "onClick"], h2 = { class: "library-cover-frame" }, v2 = ["src"], g2 = { class: "library-cover-summary" }, b2 = ["onClick"], m2 = { dir: "auto" }, y2 = {
  key: 0,
  class: "library-cover-creator"
}, _2 = { dir: "auto" }, w2 = ["href", "onClick"], S2 = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, C2 = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, T2 = { id: "library-recent-heading" }, k2 = { class: "library-muted" }, E2 = ["href"], A2 = {
  key: 0,
  class: "library-home-card-row"
}, O2 = ["aria-label", "onClick"], x2 = { class: "library-cover-frame" }, N2 = ["src"], L2 = { class: "library-cover-summary" }, R2 = ["onClick"], I2 = { dir: "auto" }, P2 = {
  key: 0,
  class: "library-cover-creator"
}, $2 = { dir: "auto" }, F2 = ["href", "onClick"], D2 = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, M2 = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, z2 = { id: "library-home-shelves-heading" }, U2 = { class: "library-muted" }, j2 = ["href"], B2 = ["aria-label"], H2 = ["href"], V2 = { dir: "auto" }, K2 = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, G2 = {
  key: 1,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, q2 = { id: "library-home-attention-heading" }, W2 = { class: "library-muted" }, Y2 = ["href"], X2 = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, Z2 = { class: "library-home-header" }, J2 = { class: "library-muted library-catalogue-eyebrow" }, Q2 = { id: "library-shelves-landing-heading" }, eO = { class: "library-muted" }, tO = ["aria-label"], iO = ["aria-label"], nO = ["href", "aria-label", "onClick"], aO = ["title"], rO = { class: "library-empty-actions" }, oO = ["href"], sO = ["href"], lO = ["aria-label"], cO = { class: "library-shelf-tree" }, uO = {
  key: 2,
  class: "library-shelves-empty",
  role: "status"
}, dO = { class: "library-muted" }, fO = { class: "library-empty-actions" }, pO = ["href"], hO = ["href"], vO = ["aria-busy"], gO = { class: "library-catalogue-header" }, bO = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, mO = ["aria-label"], yO = { class: "library-mobile-filter-count" }, _O = ["aria-label"], wO = ["value"], SO = ["name", "value"], CO = { class: "library-mobile-filter-group" }, TO = { class: "library-quick-filter-search" }, kO = ["placeholder"], EO = { value: "" }, AO = ["value"], OO = { class: "library-publisher-filter" }, xO = { for: "library-mobile-publisher-search" }, NO = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], LO = ["value"], RO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, IO = {
  key: 1,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, PO = ["id", "aria-selected"], $O = ["onClick"], FO = { class: "library-publication-filter" }, DO = { for: "library-mobile-publication-search" }, MO = ["placeholder", "aria-expanded"], zO = ["value"], UO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, jO = {
  key: 1,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, BO = ["onClick"], HO = { class: "library-year-filter" }, VO = { for: "library-mobile-year-search" }, KO = ["placeholder", "aria-expanded"], GO = ["value"], qO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, WO = {
  key: 1,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, YO = ["onClick"], XO = { class: "library-creator-filter" }, ZO = { for: "library-mobile-creator-search" }, JO = ["placeholder", "title", "aria-expanded"], QO = ["value"], ex = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, tx = {
  key: 1,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, ix = ["onClick"], nx = { value: "" }, ax = ["value"], rx = { class: "library-subject-filter" }, ox = { for: "library-mobile-subject-search" }, sx = ["placeholder", "title", "aria-expanded"], lx = ["value"], cx = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, ux = {
  key: 1,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, dx = ["onClick"], fx = { class: "library-classification-filter" }, px = { for: "library-mobile-classification-search" }, hx = ["placeholder", "title", "aria-expanded"], vx = ["value"], gx = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, bx = ["onClick"], mx = { class: "library-mobile-filter-group" }, yx = { value: "" }, _x = ["value"], wx = { class: "library-folder-filter" }, Sx = { for: "library-mobile-folder-search" }, Cx = ["placeholder", "title", "aria-expanded"], Tx = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, kx = ["onClick"], Ex = { class: "library-mobile-filter-group" }, Ax = { value: "" }, Ox = ["value"], xx = { value: "" }, Nx = ["value"], Lx = { value: "" }, Rx = { value: "1" }, Ix = { class: "library-mobile-filter-group" }, Px = { class: "library-tag-filter" }, $x = { for: "library-tag-search" }, Fx = ["placeholder", "aria-expanded"], Dx = ["value"], Mx = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, zx = ["onClick"], Ux = { value: "title" }, jx = { value: "recent" }, Bx = { value: "publicationDate" }, Hx = { value: "publication" }, Vx = { value: "lastOpened" }, Kx = { value: "format" }, Gx = { value: "compact" }, qx = { value: "list" }, Wx = { class: "library-mobile-filter-actions" }, Yx = ["href"], Xx = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, Zx = ["aria-label"], Jx = { class: "library-catalogue-control-band" }, Qx = {
  id: "library-collections",
  class: "library-saved-collections"
}, e3 = ["title"], t3 = ["action", "title"], i3 = ["value"], n3 = ["value"], a3 = { class: "library-control-label" }, r3 = ["placeholder", "disabled"], o3 = ["disabled", "title"], s3 = ["aria-label"], l3 = ["name", "value"], c3 = {
  class: "library-sort-control",
  "data-library-control": "sort"
}, u3 = { value: "title" }, d3 = { value: "recent" }, f3 = { value: "publicationDate" }, p3 = { value: "publication" }, h3 = { value: "lastOpened" }, v3 = { value: "format" }, g3 = ["aria-label"], b3 = ["aria-pressed"], m3 = ["aria-pressed"], y3 = ["aria-label"], _3 = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, w3 = ["title"], S3 = { class: "library-workspace-panel-purpose" }, C3 = { class: "library-workspace-scope-badge" }, T3 = { "aria-live": "polite" }, k3 = ["action"], E3 = ["value"], A3 = ["placeholder"], O3 = ["title"], x3 = ["action"], N3 = ["value"], L3 = ["placeholder"], R3 = ["title"], I3 = ["action"], P3 = ["value"], $3 = ["name", "value"], F3 = ["title"], D3 = ["action"], M3 = ["value"], z3 = ["name", "value"], U3 = { name: "bulkEditField" }, j3 = { value: "publicationType" }, B3 = { value: "subtitle" }, H3 = { value: "creators" }, V3 = { value: "publication" }, K3 = { value: "publicationDate" }, G3 = { value: "language" }, q3 = { value: "publisher" }, W3 = { value: "subjects" }, Y3 = { value: "classifications" }, X3 = ["placeholder"], Z3 = ["title"], J3 = ["action"], Q3 = ["value"], eN = ["name", "value"], tN = ["title"], iN = {
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
}, rL = { class: "library-item-selection" }, oL = ["checked", "aria-label", "onChange"], sL = ["aria-label", "onClick"], lL = ["src"], cL = { class: "library-catalogue-list-main" }, uL = ["onClick"], dL = {
  class: "library-bidi-human",
  dir: "auto"
}, fL = {
  key: 0,
  class: "library-muted"
}, pL = {
  class: "library-bidi-human",
  dir: "auto"
}, hL = { class: "library-catalogue-list-metadata" }, vL = { key: 0 }, gL = {
  class: "library-bidi-human",
  dir: "auto"
}, bL = { key: 1 }, mL = { key: 2 }, yL = ["dir"], _L = { key: 3 }, wL = {
  class: "library-bidi-human",
  dir: "auto"
}, SL = { class: "library-catalogue-list-actions" }, CL = ["href", "onClick"], TL = ["onClick"], kL = { class: "library-item-selection" }, EL = ["checked", "aria-label", "onChange"], AL = ["aria-labelledby", "aria-expanded", "onClick"], OL = ["id"], xL = { class: "library-cover-frame" }, NL = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, LL = ["src", "onLoad", "onError"], RL = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, IL = ["action", "onSubmit"], PL = ["value"], $L = ["value"], FL = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], DL = ["data-library-star-error"], ML = { class: "library-cover-summary" }, zL = { class: "library-cover-primary" }, UL = ["id"], jL = ["onClick"], BL = {
  class: "library-bidi-human",
  dir: "auto"
}, HL = {
  key: 0,
  class: "library-cover-creator"
}, VL = {
  class: "library-bidi-human",
  dir: "auto"
}, KL = {
  key: 1,
  class: "library-cover-context"
}, GL = {
  class: "library-bidi-human",
  dir: "auto"
}, qL = ["aria-label"], WL = { class: "library-pagination-range" }, YL = { key: 0 }, XL = ["href"], ZL = {
  key: 1,
  class: "library-muted"
}, JL = ["href"], QL = {
  key: 3,
  class: "library-muted"
}, eR = { class: "library-sidebar-content" }, tR = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, iR = ["role"], nR = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, aR = { class: "library-sidebar-publication-header" }, rR = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, oR = ["src"], sR = { class: "library-sidebar-publication-summary" }, lR = { class: "library-muted library-catalogue-eyebrow" }, cR = {
  class: "library-bidi-human",
  dir: "auto"
}, uR = { key: 0 }, dR = {
  class: "library-bidi-machine",
  dir: "ltr"
}, fR = { class: "library-detail-drawer-actions" }, pR = ["href"], hR = ["aria-label"], vR = ["aria-current", "onClick"], gR = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, bR = { id: "library-sidebar-overview-heading" }, mR = {
  key: 0,
  class: "library-sidebar-description"
}, yR = {
  class: "library-bidi-human",
  dir: "auto"
}, _R = { class: "library-detail-drawer-facts" }, wR = { key: 0 }, SR = ["href", "title"], CR = {
  class: "library-bidi-human",
  dir: "auto"
}, TR = { key: 1 }, kR = ["href", "title"], ER = { key: 1 }, AR = { key: 2 }, OR = { key: 2 }, xR = ["href", "title"], NR = {
  class: "library-bidi-human",
  dir: "auto"
}, LR = { key: 3 }, RR = { class: "library-detail-facet-list" }, IR = ["href", "title", "onClick"], PR = {
  class: "library-bidi-machine",
  dir: "ltr"
}, $R = { key: 4 }, FR = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, DR = { id: "library-sidebar-metadata-heading" }, MR = ["placeholder"], zR = ["onUpdate:modelValue", "aria-label", "placeholder"], UR = ["onUpdate:modelValue", "aria-label"], jR = ["onClick"], BR = { class: "library-muted" }, HR = {
  key: 0,
  role: "alert"
}, VR = {
  key: 1,
  role: "status"
}, KR = ["disabled"], GR = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, qR = { id: "library-sidebar-suggestions-heading" }, WR = { class: "library-muted" }, YR = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, XR = { id: "library-sidebar-activity-heading" }, ZR = { class: "library-detail-drawer-facts" }, JR = { key: 0 }, QR = { key: 1 }, e4 = { key: 2 }, t4 = { class: "library-detail-drawer-file" }, i4 = ["href"], n4 = { dir: "ltr" }, a4 = {
  key: 1,
  dir: "ltr"
}, r4 = ["aria-label"], o4 = ["disabled"], s4 = ["disabled"], l4 = 20, c4 = "/apps/library", u4 = 2147483647, d4 = {
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
        const O = [...new Set([...d.keys()].filter((ge) => ge === s || ge.startsWith(`${s}[`)))], Q = O.reduce((ge, Fe) => ge + d.getAll(Fe).length, 0);
        if (Q > 1 || O.some((ge) => ge !== s)) {
          for (const ge of O) d.delete(ge);
          continue;
        }
        s !== "status" && Q === 1 && !r(s, d.get(s)) && d.delete(s);
      }
      return d;
    }
    function c(p) {
      return Object.keys(a).some((d) => p.getAll(d).length === 1 && r(d, p.get(d)));
    }
    function u(p) {
      return Object.fromEntries(Object.entries(p || {}).filter(([d, s]) => d === "status" || !Object.prototype.hasOwnProperty.call(a, d) || r(d, s)));
    }
    const y = Object.freeze(["compact", "list"]);
    function f(p) {
      return y.includes(p) ? p : "compact";
    }
    const h = /* @__PURE__ */ Rt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), T = /* @__PURE__ */ Rt((h.items || []).map((p) => ({ ...p }))), C = H(() => T), N = H(() => h.shelves || []), E = H(() => h.formats || []), R = H(() => h.publicationTypes?.length ? h.publicationTypes : i), D = H(() => h.publications || []), $ = H(() => h.publicationIssueContext || null), G = H(() => h.scanStatuses || []), j = H(() => h.workflowStatuses || []), Z = H(() => h.cataloguePagination || {
      page: 1,
      limit: 100,
      total: C.value.length,
      visible: C.value.length,
      from: C.value.length > 0 ? 1 : 0,
      to: C.value.length,
      previousUrl: "",
      nextUrl: ""
    }), x = /* @__PURE__ */ Rt({
      q: h.activeFilters?.q || "",
      view: f(h.activeFilters?.view),
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
      p !== "status" && (r(p, x[p]) || (x[p] = ""));
    const J = /* @__PURE__ */ Te(x.publication), de = /* @__PURE__ */ Te(x.q), Y = /* @__PURE__ */ Te(!1), le = /* @__PURE__ */ Te(null), he = H(() => {
      const p = J.value.trim().toLocaleLowerCase();
      return (p !== "" && le.value !== null ? le.value : D.value).filter((s) => p === "" || s.toLocaleLowerCase().includes(p)).slice(0, l4);
    });
    Xe(() => x.publication, (p) => {
      J.value = p || "";
    }), Xe(() => x.q, (p) => {
      de.value = p || "";
    });
    let ne = null, oe = null, M = 0;
    Xe(J, (p) => {
      window.clearTimeout(ne), oe?.abort(), oe = null, le.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++M;
      ne = window.setTimeout(() => {
        qg(d, s);
      }, 200);
    });
    const z = /* @__PURE__ */ Te(x.publisher), X = /* @__PURE__ */ Te(!1), ce = /* @__PURE__ */ Te(null), te = H(() => ce.value || []);
    Xe(() => x.publisher, (p) => {
      z.value = p || "";
    });
    let be = null, ve = null, Ne = 0;
    Xe(z, (p) => {
      window.clearTimeout(be), ve?.abort(), ve = null, ce.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++Ne;
      be = window.setTimeout(() => {
        jg(d, s);
      }, 200);
    });
    const pe = /* @__PURE__ */ Te(x.creator), Be = /* @__PURE__ */ Te(!1), Le = /* @__PURE__ */ Te(null), rt = H(() => Le.value || []);
    Xe(() => x.creator, (p) => {
      pe.value = p || "";
    });
    let ft = null, pt = null, Et = 0;
    Xe(pe, (p) => {
      window.clearTimeout(ft), pt?.abort(), pt = null, Le.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++Et;
      ft = window.setTimeout(() => {
        Ug(d, s);
      }, 200);
    });
    const Ge = /* @__PURE__ */ Te(x.folder), gt = /* @__PURE__ */ Te(!1), B = /* @__PURE__ */ Te(null), w = H(() => B.value || []);
    Xe(() => x.folder, (p) => {
      Ge.value = p || "";
    });
    let k = null, A = null, I = 0;
    Xe(Ge, (p) => {
      window.clearTimeout(k), A?.abort(), A = null, B.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++I;
      k = window.setTimeout(() => {
        Kg(d, s);
      }, 200);
    });
    const L = /* @__PURE__ */ Te(x.subject), U = /* @__PURE__ */ Te(!1), q = /* @__PURE__ */ Te(null), K = H(() => q.value || []);
    Xe(() => x.subject, (p) => {
      L.value = p || "";
    });
    let ee = null, V = null, we = 0;
    Xe(L, (p) => {
      window.clearTimeout(ee), V?.abort(), V = null, q.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++we;
      ee = window.setTimeout(() => {
        Bg(d, s);
      }, 200);
    });
    const se = /* @__PURE__ */ Te(x.classification), fe = /* @__PURE__ */ Te(!1), Ee = /* @__PURE__ */ Te(null), Re = H(() => Ee.value || []);
    Xe(() => x.classification, (p) => {
      se.value = p || "";
    });
    let Ue = null, Me = null, it = 0;
    Xe(se, (p) => {
      window.clearTimeout(Ue), Me?.abort(), Me = null, Ee.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++it;
      Ue = window.setTimeout(() => {
        Hg(d, s);
      }, 200);
    });
    const Ye = /* @__PURE__ */ Te(x.tag), ct = /* @__PURE__ */ Te(!1), wt = /* @__PURE__ */ Te(null), St = H(() => wt.value || []);
    Xe(() => x.tag, (p) => {
      Ye.value = p || "";
    });
    let Fi = null, ht = null, At = 0;
    Xe(Ye, (p) => {
      window.clearTimeout(Fi), ht?.abort(), ht = null, wt.value = null;
      const d = String(p || "").trim();
      if (d.length < 2) return;
      const s = ++At;
      Fi = window.setTimeout(() => {
        Vg(d, s);
      }, 200);
    });
    const Dt = /* @__PURE__ */ Te(x.year), Mt = /* @__PURE__ */ Te(!1), En = /* @__PURE__ */ Te(null), Di = H(() => En.value || []);
    Xe(() => x.year, (p) => {
      Dt.value = p || "";
    });
    let Mi = null, Ti = null, Fa = 0;
    Xe(Dt, (p) => {
      window.clearTimeout(Mi), Ti?.abort(), Ti = null, En.value = null;
      const d = String(p || "").trim();
      if (d.length < 2) return;
      const s = ++Fa;
      Mi = window.setTimeout(() => {
        Gg(d, s);
      }, 200);
    });
    const cr = Object.fromEntries(Object.keys(x).map((p) => [p, p === "sort" ? "title" : p === "view" ? "compact" : ""])), ur = window.location.pathname.indexOf(c4), Ji = ur >= 0 ? window.location.pathname.slice(0, ur) : "", An = {
      catalogue: `${Ji}/apps/library/`,
      review: `${Ji}/apps/library/?scannerConflicts=1`,
      settings: `${Ji}/settings/user/library`
    };
    function zi(p, d) {
      if (typeof p != "string" || p === "") return d;
      try {
        const s = Ji ? `${Ji}/` : "/";
        let O = p;
        for (let Q = 0; Q < 5; Q += 1) {
          if (!O.startsWith("/") || O.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(O)) return d;
          const ge = new URL(O, window.location.origin);
          if (ge.origin !== window.location.origin || !ge.pathname.startsWith(s)) return d;
          const Fe = O.split(/[?#]/, 1)[0];
          for (const li of Fe.split("/")) {
            let $n = li;
            for (let Ka = 0; Ka < 5; Ka += 1) {
              const Bi = decodeURIComponent($n);
              if (/[\\/\u0000-\u001f\u007f]/.test(Bi) || Bi === "." || Bi === "..") return d;
              if (Bi === $n) break;
              if ($n = Bi, Ka === 4) return d;
            }
          }
          const Je = decodeURI(O);
          if (Je === O) return p;
          O = Je;
        }
        return d;
      } catch {
        return d;
      }
    }
    const Ui = H(() => zi(h.settingsUrl, An.settings)), ot = H(() => zi(h.catalogueRootUrl, An.catalogue)), On = H(() => zi(h.homeUrl, `${An.catalogue}?home=1`)), Da = H(() => zi(h.shelvesUrl, `${An.catalogue}?shelves=1`)), dr = H(() => zi(h.reviewUrl || h.scannerConflictReviewUrl, An.review)), fr = H(() => Object.entries(a).some(([p, d]) => x[p] === d)), pr = H(() => n.reduce((p, d) => p + Number(hc.value[d.countKey] || 0), 0)), Qi = H(() => h.surface === "home"), xn = H(() => h.surface === "shelves"), hr = H(() => !Qi.value && !xn.value && !fr.value && !x.starred && x.recentlyOpened !== "1" && !x.shelf), Zl = H(() => [
      { key: "home", name: b("library", "Home"), href: On.value, active: Qi.value },
      { key: "all", name: b("library", "All publications"), href: ot.value, active: hr.value },
      { key: "starred", name: b("library", "Starred"), href: `${ot.value}?starred=1`, active: x.starred === "1" },
      { key: "continue", name: b("library", "Continue reading"), href: `${ot.value}?recentlyOpened=1&sort=lastOpened`, active: x.recentlyOpened === "1" },
      { key: "shelves", name: b("library", "Shelves"), href: Da.value, active: xn.value || !!x.shelf },
      { key: "collections", name: b("library", "Collections"), href: `${ot.value}#library-collections`, active: !1 }
    ]), ea = H(() => Yo.value.map((p) => ({
      key: `collection-${p.id}`,
      rawName: p.name,
      id: p.id,
      name: p.countPending ? p.name : `${p.name} (${ui("library", "%n item", "%n items", Number(p.count || 0))})`,
      href: lb(p.filters),
      active: cb(p.filters)
    }))), zt = H(() => h.requestToken || "");
    function Nn(p, d) {
      const s = String(p?.recordOpenUrl || "");
      if (!s || !zt.value) return;
      const O = new URLSearchParams({ requesttoken: zt.value });
      try {
        if (navigator.sendBeacon) {
          const Q = new Blob([O.toString()], { type: "application/x-www-form-urlencoded" });
          navigator.sendBeacon(s, Q);
          return;
        }
      } catch {
      }
      fetch(s, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", requesttoken: zt.value },
        body: O,
        credentials: "same-origin",
        keepalive: !0
      }).catch(() => {
      });
    }
    const ut = H(() => h.catalogueEndpointUrl || "/apps/library/catalogue"), Ln = H(() => h.shelfChildrenUrl || "/apps/library/shelves/children"), Jl = H(() => h.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), Bo = H(() => h.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), vr = H(() => h.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), Ho = H(() => h.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), Vo = H(() => h.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), Ql = H(() => h.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), ec = H(() => h.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), tc = H(() => h.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), ic = H(() => h.itemSidebarUrlTemplate || `${Ji}/apps/library/items/__ITEM_ID__/sidebar`), ji = H(() => h.batchTagUrl || "/apps/library/bulk/tags"), Ko = H(() => h.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Ma = H(() => h.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), en = H(() => h.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), nc = H(() => h.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), ta = H(() => h.scannerConflictReviewUrl || "?scannerConflicts=1");
    h.importHealthSummary, h.importHealthSummary && Object.keys(h.importHealthSummary).length > 0;
    const za = H(() => h.discoveryPage === "publication"), gr = H(() => h.discoveryPage === "year"), Ua = H(() => h.discoveryPage === "creator"), ja = H(() => za.value || gr.value || Ua.value), ia = H(() => h.discoveryTitle || x.publication || x.year || x.creator || ""), br = H(() => ja.value ? ia.value : b("library", "Library")), na = H(() => Ua.value ? b("library", "Creator") : gr.value ? b("library", "Publication year") : b("library", "Publication / series")), tn = H(() => Number(h.rootCount || 0)), aa = H(() => Number(h.enabledRootCount || 0)), ni = H(() => tn.value === 0), mr = H(() => tn.value > 0 && aa.value === 0), ra = H(() => xe.value.length > 0), ki = /* @__PURE__ */ Te(!1), yr = /* @__PURE__ */ Te(null), _r = /* @__PURE__ */ Te(null), wr = {
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
    }, Go = {
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
    }, ac = {
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
    }, Sr = H(() => {
      if (typeof window > "u") return "";
      const p = new URLSearchParams(window.location.search);
      if (p.get("batchMetadataApplyResult") !== "1") return "";
      const d = p.get("batchMetadataField") || "field", s = p.get("batchMetadataApplied") || "0", O = p.get("batchMetadataUnchanged") || "0", Q = p.get("batchMetadataSkipped") || "0";
      return b("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: s, field: d, unchanged: O, skipped: Q });
    }), qo = H(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? b("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), Wo = H(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? b("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), Yo = H(() => h.savedCollections || []), Ba = H(() => h.savedCollectionSaveUrl || "/apps/library/collections"), Cr = H(() => h.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), ie = y, S = H(() => ie.includes(x.view) ? x.view : "compact"), P = H(() => ({
      "library-cover-gallery--compact": S.value === "compact"
    }));
    function W(p) {
      const d = String(p || "").trim();
      if (d.length <= 32) return d;
      const s = d.split("/").filter(Boolean);
      return s.length > 0 ? `…/${s.at(-1)}` : d;
    }
    function ue(p, d) {
      const s = String(d || "").trim();
      if (s === "" || Go[p] === s) return "";
      if (p === "format") return s.toUpperCase();
      if (p === "folder") return W(s);
      const O = ac[p]?.[s];
      return O ? b("library", O) : s;
    }
    function me(p, d) {
      const s = String(x[p] || "").trim(), O = ue(p, s), Q = b("library", d);
      return {
        key: p,
        label: Q,
        value: s,
        displayValue: O,
        title: O ? `${Q}: ${s}` : Q
      };
    }
    const xe = H(() => Object.entries(wr).map(([p, d]) => me(p, d)).filter((p) => p.value !== "" && !(p.key === "sort" && p.value === "title") && !(p.key === "view" && p.value === "compact"))), He = H(() => xe.value.filter((p) => !["sort", "view"].includes(p.key))), nt = H(() => xe.value.length), Ot = H(() => {
      const p = new URLSearchParams();
      for (const s of He.value) p.set(s.key, s.value);
      const d = p.toString();
      return `${ot.value}${d ? `?${d}` : ""}`;
    }), bt = H(() => He.value[0] || null), Tr = H(() => de.value.trim() !== String(x.q || "").trim()), xt = H(() => String(x.q || "").trim() !== "" || Tr.value);
    function oi(p) {
      return ({
        q: de,
        publisher: z,
        publication: J,
        creator: pe,
        subject: L,
        year: Dt,
        folder: Ge,
        classification: se,
        tag: Ye
      }[p]?.value ?? "").trim() !== String(x[p] || "").trim();
    }
    function Ei(p) {
      return oi(p) ? p === "q" ? b("library", "Not applied yet — press Enter or Apply.") : b("library", "Press Enter or Apply to use this value.") : "";
    }
    function nn(p) {
      return { "library-filter-apply--pending": oi(p) };
    }
    const mg = H(() => nt.value > 0 ? b("library", "Filters ({count})", { count: nt.value }) : b("library", "Filters")), yg = H(() => nt.value > 0 ? b("library", "Open filters panel; {count} active filters", { count: nt.value }) : b("library", "Open filters panel")), _g = H(() => ui("library", "Show %n item", "Show %n items", Number(Z.value.total || 0)));
    function wg(p) {
      ki.value = p.currentTarget?.open === !0, ki.value && ti(() => {
        yr.value?.focus?.();
      });
    }
    const Sg = /* @__PURE__ */ new Set([
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
    ]), md = H(() => Object.entries(u(x)).filter(([p, d]) => !Sg.has(p) && String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), Cg = H(() => Object.entries(x).filter(([p, d]) => !["q", "sort", "starred"].includes(p) && String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), Xo = H(() => Object.entries(u(x)).filter(([p, d]) => String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), Tg = H(() => Xo.value.filter(({ key: p, value: d }) => p !== "q" && !(p === "sort" && d === "title"))), rc = /* @__PURE__ */ Rt({}), Zo = H(() => h.homeRows || { continueReading: [], recentlyAdded: [] }), yd = H(() => h.homeShelves || []), _d = H(() => h.shelfTree || []), oc = H(() => h.needsAttention || { count: 0, url: `${ot.value}?needsMetadata=1` }), Ai = /* @__PURE__ */ Te([]), Jo = H(() => new Set(Ai.value));
    function wd(p, d) {
      const s = new Set(Ai.value);
      d ? s.add(Number(p)) : s.delete(Number(p)), Ai.value = [...s];
    }
    function kg(p) {
      Ai.value = p.currentTarget.checked ? C.value.map((d) => Number(d.id)) : [];
    }
    function Eg() {
      const p = new Set(C.value.map((d) => Number(d.id)));
      Ai.value = Ai.value.filter((d) => p.has(d));
    }
    function Ag(p) {
      const d = p.target;
      if (d instanceof HTMLFormElement) {
        d.querySelectorAll("input[data-library-selected-id]").forEach((s) => s.remove());
        for (const s of Ai.value) {
          const O = document.createElement("input");
          O.type = "hidden", O.name = "itemIds[]", O.value = String(s), O.dataset.librarySelectedId = "1", d.appendChild(O);
        }
      }
    }
    const Se = /* @__PURE__ */ Te(null), oa = /* @__PURE__ */ Te(null), Xt = /* @__PURE__ */ Rt({ loading: !1, error: "", missing: !1 }), sa = /* @__PURE__ */ Te("overview"), Oi = /* @__PURE__ */ Rt({ saving: !1, saved: !1, error: "" }), Ut = /* @__PURE__ */ Rt({ title: "", publicationDate: "", identifiers: [] }), Sd = /* @__PURE__ */ Te(null), la = /* @__PURE__ */ Te(null), ca = /* @__PURE__ */ Te(!1);
    let sc = null, an = null, Qo = null, lc = !1, kr = null, cc = 0;
    const Rn = H(() => oa.value !== null), Er = H(() => Se.value ? C.value.findIndex((p) => p.id === Se.value.id) : -1), es = H(() => Er.value > 0 ? C.value[Er.value - 1] : null), ts = H(() => Er.value >= 0 && Er.value < C.value.length - 1 ? C.value[Er.value + 1] : null), Cd = H(() => Ig(Se.value?.description || "")), ua = H(() => Ng(Se.value?.publicationDate || "")), Td = H(() => Lg(Se.value?.language || "")), Og = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], xg = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Ar(p) {
      const d = String(p ?? "").trim(), s = d.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return s ? s[1] : d;
    }
    function Ng(p) {
      const s = Ar(p).match(/^(\d{4})/u);
      return s ? s[1] : "";
    }
    function Lg(p) {
      return String(p ?? "").split(/[;,\n]+/u).map((d) => d.trim()).filter(Boolean);
    }
    function kd(p, d) {
      const s = new URLSearchParams();
      for (const [O, Q] of Object.entries(x)) {
        const ge = String(Q || "").trim();
        ge !== "" && !(O === "sort" && ge === "title") && !(O === "view" && ge === "compact") && s.set(O, ge);
      }
      return s.set(p, String(d || "").trim()), s.delete("page"), o(s);
    }
    function is(p, d) {
      const O = kd(p, d).toString();
      return `${ot.value}${O ? `?${O}` : ""}`;
    }
    function ns(p, d, s) {
      const O = String(s || "").trim();
      if (O === "") return;
      p?.preventDefault?.();
      const Q = kd(d, O);
      xr({ historyMode: "none" }), jt(null, {
        params: Q,
        generation: ++Zt,
        historyMode: "push"
      });
    }
    function Rg(p) {
      return String(p ?? "").replace(/&#x([0-9a-f]+);/giu, (d, s) => String.fromCodePoint(Number.parseInt(s, 16))).replace(/&#(\d+);/gu, (d, s) => String.fromCodePoint(Number.parseInt(s, 10))).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#039;", "'").replaceAll("&apos;", "'").replaceAll("&nbsp;", " ").replaceAll("&amp;", "&");
    }
    function Ig(p) {
      let d = String(p ?? "").trim();
      if (d === "") return "";
      for (let s = 0; s < 2; s += 1) {
        const O = Rg(d);
        if (O === d) break;
        d = O;
      }
      return d = d.replace(/<\s*(script|style)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/giu, "").replace(/<\s*(br|hr)\b[^>]*\/?>/giu, `
`).replace(/<\s*\/\s*(p|div|section|article|blockquote|li|tr|h[1-6])\s*>/giu, `

`).replace(/<\s*(p|div|section|article|blockquote|ul|ol|li|table|tbody|thead|tr|td|th|h[1-6])\b[^>]*>/giu, "").replace(/<[^>]+>/gu, "").replace(/\u00a0/gu, " ").replace(/[^\S\r\n]+/gu, " ").replace(/[ \t]*\n[ \t]*/gu, `
`).replace(/\n{3,}/gu, `

`).trim(), d;
    }
    function Ed(p) {
      return { ...p, publicationDate: Ar(p?.publicationDate) };
    }
    function Ad(p) {
      Ut.title = String(p?.title || ""), Ut.publicationDate = Ar(p?.publicationDate), Ut.identifiers = Array.isArray(p?.identifiers) ? p.identifiers.map((d) => ({ scheme: String(d?.scheme || ""), displayValue: String(d?.displayValue || d?.value || "") })) : [], Object.assign(Oi, { saving: !1, saved: !1, error: "" });
    }
    function Pg() {
      Ut.identifiers.push({ scheme: "", displayValue: "" });
    }
    function $g(p) {
      Ut.identifiers.splice(p, 1);
    }
    async function Fg() {
      const p = Se.value;
      if (!p?.updateUrl || Oi.saving) return;
      Object.assign(Oi, { saving: !0, saved: !1, error: "" });
      const d = new FormData();
      d.set("requesttoken", zt.value), d.set("metadataAutosave", "1");
      for (const s of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const O = p[s];
        d.set(s, Array.isArray(O) ? O.join(", ") : String(O ?? ""));
      }
      d.set("title", Ut.title), d.set("publicationDate", Ar(Ut.publicationDate)), Ut.identifiers.forEach((s, O) => {
        d.set(`identifiers[${O}][scheme]`, s.scheme), d.set(`identifiers[${O}][displayValue]`, s.displayValue);
      });
      try {
        const s = await fetch(p.updateUrl, { method: "POST", body: d, credentials: "same-origin", headers: { Accept: "application/json" } }), O = await s.json().catch(() => ({}));
        if (!s.ok || O.saved !== !0) throw new Error(O.error || b("library", "Metadata could not be saved."));
        p.title = Ut.title.trim(), p.publicationDate = Ar(Ut.publicationDate), p.identifiers = Ut.identifiers.filter((ge) => ge.scheme.trim() || ge.displayValue.trim()).map((ge) => ({ ...ge }));
        const Q = C.value.find((ge) => Number(ge.id) === Number(p.id));
        Q && (Q.title = p.title, Q.publicationDate = p.publicationDate), Oi.saved = !0;
      } catch (s) {
        Oi.error = s?.message || b("library", "Metadata could not be saved.");
      } finally {
        Oi.saving = !1;
      }
    }
    const In = H(() => {
      const p = r("scannerConflicts", x.scannerConflicts) || r("weakMetadata", x.weakMetadata), d = p ? C.value.find((s) => as(s).length > 0) : null;
      return {
        enabled: p,
        item: d,
        fields: d ? as(d) : [],
        reviewNextUrl: ta.value,
        skipUrl: Z.value.nextUrl || ta.value
      };
    }), Dg = H(() => n.map((p) => ({
      ...p,
      label: b("library", p.label),
      href: `${ot.value}?${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`,
      active: String(x[p.key] || "") === p.value
    })));
    function uc(p) {
      return Array.isArray(p) ? JSON.stringify(p) : p == null ? "" : String(p);
    }
    function as(p) {
      const d = p.fieldValues || {}, s = p.fieldSources || {};
      return Og.filter((O) => Object.prototype.hasOwnProperty.call(d, O)).map((O) => {
        const Q = uc(p[O]), ge = uc(d[O]), Fe = uc(s[O] || p.metadataSource || "scanner"), Je = Fe.includes("filename") || Fe.includes("path") ? ge : "", li = Fe.includes("sidecar") ? ge : "";
        return { field: O, currentValue: Q, scannerCandidate: ge, pathTemplateCandidate: Je, sidecarValue: li, sourceProvenance: Fe, differs: Q !== ge };
      }).filter((O) => O.differs);
    }
    let da = 0, fa = null;
    function Od() {
      const p = new URLSearchParams(window.location.search).getAll("item");
      if (p.length !== 1 || !/^[1-9][0-9]*$/.test(p[0])) return null;
      const d = Number(p[0]);
      return Number.isSafeInteger(d) && d <= u4 ? d : null;
    }
    function xd(p, d = "push") {
      const s = new URL(window.location.href);
      s.searchParams.delete("item"), p !== null && s.searchParams.set("item", String(p)), history[`${d}State`]({}, "", `${s.pathname}${s.search}${s.hash}`);
    }
    async function Or(p, { historyMode: d = "push", seed: s = null } = {}) {
      fa?.abort();
      const O = ++da, Q = new AbortController();
      fa = Q, oa.value = p, sa.value = "overview", Se.value = s && Number(s.id) === p ? Ed(s) : null, Se.value && Ad(Se.value), Object.assign(Xt, { loading: !0, error: "", missing: !1 }), d !== "none" && xd(p, d);
      try {
        const ge = ic.value.replace("__ITEM_ID__", encodeURIComponent(String(p))), Fe = await fetch(ge, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: Q.signal });
        if (O !== da) return;
        if (!Fe.ok) {
          Se.value = null, Xt.missing = Fe.status === 404, Xt.error = Fe.status === 404 ? b("library", "This publication is unavailable or you do not have access.") : b("library", "Could not load publication details. Try again.");
          return;
        }
        const Je = await Fe.json();
        if (O !== da) return;
        if (typeof Je?.item?.id != "number" || !Number.isSafeInteger(Je.item.id) || Je.item.id !== p) {
          Se.value = null, Xt.missing = !1, Xt.error = b("library", "Could not load publication details. Try again.");
          return;
        }
        Se.value = Ed(Je.item), Ad(Se.value), await ti();
      } catch (ge) {
        O === da && ge?.name !== "AbortError" && (Se.value = null, Xt.missing = !1, Xt.error = b("library", "Could not load publication details. Try again."));
      } finally {
        O === da && (Xt.loading = !1, fa = null);
      }
    }
    function xi(p, d) {
      dc(), sc = d?.currentTarget instanceof HTMLElement ? d.currentTarget : null, Or(Number(p.id), { seed: p });
    }
    function xr({ historyMode: p = "push", restoreFocus: d = !0 } = {}) {
      Qo = d ? sc : null, sc = null, fa?.abort(), fa = null, da += 1, oa.value = null, Se.value = null, sa.value = "overview", Object.assign(Xt, { loading: !1, error: "", missing: !1 }), p !== "none" && xd(null, p);
    }
    function Nd() {
      ca.value ? (la.value?.$refs?.sidebar || la.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : Sd.value?.focus();
    }
    function Mg() {
      const p = Qo;
      if (Qo = null, dc(), lc || !p?.isConnected) return;
      const d = cc;
      kr = window.requestAnimationFrame(() => {
        kr = null, !(d !== cc || lc || Rn.value || !p.isConnected) && p.focus();
      });
    }
    function dc() {
      cc += 1, kr !== null && (window.cancelAnimationFrame(kr), kr = null);
    }
    function Nr(p = an) {
      ca.value = !!p?.matches, Rn.value && ti(Nd);
    }
    function rs(p) {
      p && Or(Number(p.id), { seed: p });
    }
    const Lr = /* @__PURE__ */ Te(null);
    let Zt = 0, Ha = null, Va = null, Rr = null;
    const Nt = /* @__PURE__ */ Rt({ loading: !1, error: "", completed: !1 });
    function zg(p) {
      const d = o(new FormData(p));
      d.delete("publicationSearch"), d.delete("creatorSearch"), d.delete("subjectSearch"), d.delete("publisherSearch"), d.delete("classificationSearch"), d.delete("tagSearch"), d.delete("folderSearch"), d.delete("yearSearch");
      for (const s of Array.from(d.keys()))
        String(d.get(s) || "").trim() === "" && d.delete(s);
      return d.delete("page"), d.get("view") === "compact" && d.delete("view"), d.get("sort") === "title" && d.delete("sort"), d;
    }
    async function pa(p, d, s) {
      const O = new URLSearchParams();
      for (const [Fe, Je] of Object.entries(x)) {
        const li = String(Je || "").trim();
        Fe !== p && li !== "" && !(Fe === "sort" && li === "title") && !(Fe === "view" && li === "compact") && O.set(Fe, li);
      }
      O.set(`${p}Search`, d);
      const Q = new AbortController();
      p === "creator" ? pt = Q : p === "publisher" ? ve = Q : p === "subject" ? V = Q : p === "classification" ? Me = Q : p === "tag" ? ht = Q : p === "folder" ? A = Q : Ti = Q;
      const ge = p === "creator" ? Bo.value : p === "publisher" ? vr.value : p === "subject" ? Ho.value : p === "classification" ? Vo.value : p === "tag" ? Ql.value : p === "folder" ? ec.value : tc.value;
      try {
        const Fe = await fetch(`${ge}?${O}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: Q.signal });
        if (!Fe.ok) throw new Error(`${p} suggestions request failed: ${Fe.status}`);
        const Je = await Fe.json(), li = p === "creator" ? Et : p === "publisher" ? Ne : p === "subject" ? we : p === "classification" ? it : p === "tag" ? At : p === "folder" ? I : Fa, $n = p === "creator" ? pe.value : p === "publisher" ? z.value : p === "subject" ? L.value : p === "classification" ? se.value : p === "tag" ? Ye.value : p === "folder" ? Ge.value : Dt.value;
        s === li && $n.trim() === d && (p === "creator" ? Le.value = Array.isArray(Je.creators) ? Je.creators : [] : p === "publisher" ? ce.value = Array.isArray(Je.publishers) ? Je.publishers : [] : p === "subject" ? q.value = Array.isArray(Je.subjects) ? Je.subjects : [] : p === "classification" ? Ee.value = Array.isArray(Je.classifications) ? Je.classifications : [] : p === "tag" ? wt.value = Array.isArray(Je.tags) ? Je.tags : [] : p === "folder" ? B.value = Array.isArray(Je.folders) ? Je.folders : [] : En.value = Array.isArray(Je.years) ? Je.years : []);
      } catch (Fe) {
        Fe?.name !== "AbortError" && (p === "creator" && s === Et && (Le.value = null), p === "publisher" && s === Ne && (ce.value = null), p === "subject" && s === we && (q.value = null), p === "classification" && s === it && (Ee.value = null), p === "tag" && s === At && (wt.value = null), p === "folder" && s === I && (B.value = null), p === "year" && s === Fa && (En.value = null));
      }
    }
    function Ug(p, d) {
      return pa("creator", p, d);
    }
    function jg(p, d) {
      return pa("publisher", p, d);
    }
    function Bg(p, d) {
      return pa("subject", p, d);
    }
    function Hg(p, d) {
      return pa("classification", p, d);
    }
    function Vg(p, d) {
      return pa("tag", p, d);
    }
    function Kg(p, d) {
      return pa("folder", p, d);
    }
    function Gg(p, d) {
      return pa("year", p, d);
    }
    async function qg(p, d) {
      const s = new URLSearchParams();
      for (const [Q, ge] of Object.entries(x)) {
        const Fe = String(ge || "").trim();
        Q !== "publication" && Fe !== "" && !(Q === "sort" && Fe === "title") && !(Q === "view" && Fe === "compact") && s.set(Q, Fe);
      }
      s.set("publicationSearch", p);
      const O = new AbortController();
      oe = O;
      try {
        const Q = await fetch(`${Jl.value}?${s}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: O.signal
        });
        if (!Q.ok) throw new Error(`Publication suggestions request failed: ${Q.status}`);
        const ge = await Q.json();
        d === M && J.value.trim() === p && (le.value = Array.isArray(ge.publications) ? ge.publications : []);
      } catch (Q) {
        Q?.name !== "AbortError" && d === M && (le.value = null);
      } finally {
        d === M && (oe = null);
      }
    }
    function Wg(p) {
      T.splice(0, T.length, ...(p.items || []).map((s) => ({ ...s }))), Eg();
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
      Object.assign(x, cr, p.activeFilters || {}), x.view = f(x.view);
    }
    async function Yg() {
      if (h.surface !== "index") return;
      const p = Zt, d = JSON.stringify({ ...x }), s = new URLSearchParams();
      s.set("hydrate", "1");
      for (const [Q, ge] of Object.entries(x)) {
        const Fe = String(ge || "").trim();
        Fe !== "" && !(Q === "sort" && Fe === "title") && !(Q === "view" && Fe === "compact") && s.set(Q, Fe);
      }
      const O = new AbortController();
      Va = O;
      try {
        const Q = await fetch(`${ut.value}${s.size ? `?${s}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: O.signal
        });
        if (!Q.ok) return;
        const ge = await Q.json();
        if (p !== Zt || d !== JSON.stringify({ ...x })) return;
        for (const Fe of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(ge, Fe) && (h[Fe] = ge[Fe]);
      } catch (Q) {
        if (Q?.name !== "AbortError") return;
      } finally {
        Va === O && (Va = null);
      }
    }
    function Xg() {
      Va?.abort(), Va = null;
    }
    async function jt(p, d = null) {
      const s = p?.currentTarget?.tagName === "FORM" ? p.currentTarget : p?.currentTarget?.form;
      if (!s && !d?.params) return;
      const O = o(d?.params ?? zg(s));
      if (Qi.value || xn.value) {
        Ir(O, ot.value);
        return;
      }
      const Q = O.toString(), ge = Q ? `?${Q}` : "", Fe = d?.generation ?? ++Zt, Je = c(O), li = d?.historyMode ?? (Je ? "push" : "replace"), $n = d?.historyTraversal === !0;
      if (Fe !== Zt) return;
      Xg(), d === null && Ha?.abort();
      const Ka = new AbortController();
      Ha = Ka, Nt.loading = !0, Nt.error = "", Nt.completed = !1;
      try {
        const Bi = await fetch(ut.value + ge, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ka.signal
        });
        if (Fe !== Zt) return;
        if (!Bi.ok) {
          $n ? Ir(O) : Je ? Nt.error = b("library", "Could not load this review queue. Try again.") : Ir(O);
          return;
        }
        const bb = await Bi.json();
        if (Fe !== Zt) return;
        Wg(bb), Nt.completed = !0, li !== "none" && (history[li === "push" ? "pushState" : "replaceState"]({}, "", Q ? `?${Q}` : window.location.pathname), Rn.value && xr({ historyMode: "none" }));
      } catch (Bi) {
        Fe === Zt && Bi?.name !== "AbortError" && ($n ? Ir(O) : Je ? Nt.error = b("library", "Could not load this review queue. Try again.") : Ir(O));
      } finally {
        Fe === Zt && (Ha = null, Nt.loading = !1);
      }
    }
    function Ld() {
      Ha?.abort();
      const p = new URLSearchParams(window.location.search), d = Od();
      p.has("item") && d === null && (p.delete("item"), history.replaceState({}, "", `${window.location.pathname}${p.toString() ? `?${p}` : ""}${window.location.hash}`)), d === null ? xr({ historyMode: "none" }) : Or(d, { historyMode: "none", seed: C.value.find((s) => Number(s.id) === d) || null }), p.delete("item"), jt(null, {
        params: o(p),
        generation: ++Zt,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function Ir(p, d = window.location.pathname) {
      const s = document.createElement("form");
      s.method = "get", s.action = d, s.hidden = !0;
      for (const [O, Q] of p.entries()) {
        const ge = document.createElement("input");
        ge.type = "hidden", ge.name = O, ge.value = Q, s.appendChild(ge);
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
    async function Zg(p, d = J.value) {
      x.publication = String(d || "").trim(), J.value = x.publication, Y.value = !1, await ti(), jt({ currentTarget: p });
    }
    function Rd(p, d) {
      Zg(d.currentTarget.form, p);
    }
    async function Jg(p) {
      x.q = String(de.value || "").trim(), x.publication = String(J.value || "").trim(), x.publisher = String(z.value || "").trim(), x.creator = String(pe.value || "").trim(), x.subject = String(L.value || "").trim(), x.folder = String(Ge.value || "").trim(), x.year = String(Dt.value || "").trim(), Y.value = !1, X.value = !1, Be.value = !1, U.value = !1, gt.value = !1, Mt.value = !1, await ti(), jt({ currentTarget: p });
    }
    async function Pn(p, d, s) {
      x[d] = String(s || "").trim(), d === "creator" ? (pe.value = x.creator, Be.value = !1) : d === "publisher" ? (z.value = x.publisher, X.value = !1) : d === "subject" ? (L.value = x.subject, U.value = !1) : d === "folder" ? (Ge.value = x.folder, gt.value = !1) : d === "classification" ? (se.value = x.classification, fe.value = !1) : d === "tag" ? (Ye.value = x.tag, ct.value = !1) : (Dt.value = x.year, Mt.value = !1), rn[d] = -1, await ti(), jt({ currentTarget: p });
    }
    function Id(p) {
      Jg(p.currentTarget);
    }
    function Pd(p, d) {
      Pn(d.currentTarget.form, "creator", p);
    }
    function $d(p, d) {
      Pn(d.currentTarget.form, "publisher", p);
    }
    function Fd(p, d) {
      Pn(d.currentTarget.form, "classification", p);
    }
    function Dd(p, d) {
      Pn(d.currentTarget.form, "tag", p);
    }
    function Md(p, d) {
      Pn(d.currentTarget.form, "folder", p);
    }
    function zd(p, d = L.value) {
      window.clearTimeout(ee), V?.abort(), V = null, Pn(p, "subject", d);
    }
    function Qg(p) {
      zd(p.currentTarget.form);
    }
    function Ud(p, d) {
      zd(d.currentTarget.form, p);
    }
    function jd(p, d) {
      Pn(d.currentTarget.form, "year", p);
    }
    const rn = /* @__PURE__ */ Rt({
      publisher: -1,
      publication: -1,
      year: -1,
      creator: -1,
      tag: -1,
      folder: -1,
      subject: -1,
      classification: -1
    });
    function eb(p) {
      return te.value;
    }
    function fc(p, d, s) {
      return `library-${p}-${d}-suggestion-${s}`;
    }
    function Bd(p, d) {
      const s = rn[d];
      return s >= 0 ? fc(p, d, s) : void 0;
    }
    function pc(p, d) {
      X.value = d, d || (rn[p] = -1);
    }
    function Hd(p) {
      rn[p] = -1, pc(p, !0);
    }
    function tb(p, d, s) {
      Pn(s, p, d);
    }
    function Vd(p, d) {
      const s = eb();
      if (p.key === "Escape") {
        pc(d, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(p.key) || s.length === 0) return;
      if (p.key === "Enter") {
        const ge = rn[d];
        if (ge < 0) return;
        p.preventDefault(), tb(d, s[ge], p.currentTarget.form);
        return;
      }
      p.preventDefault(), pc(d, !0);
      const O = rn[d], Q = p.key === "ArrowDown" ? 1 : -1;
      rn[d] = O < 0 ? Q > 0 ? 0 : s.length - 1 : (O + Q + s.length) % s.length;
    }
    function Kd(p) {
      const d = new URLSearchParams();
      for (const [s, O] of Object.entries(x)) {
        const Q = String(O || "").trim();
        Q !== "" && s !== p && !(s === "sort" && Q === "title") && !(s === "view" && Q === "compact") && d.set(s, Q);
      }
      return d;
    }
    function Pr(p) {
      const d = Kd(p).toString();
      return `${ot.value}${d ? `?${d}` : ""}`;
    }
    function $r(p) {
      const d = Kd(p);
      x[p] = p === "sort" ? "title" : p === "view" ? "compact" : "", jt(null, {
        params: d,
        generation: ++Zt
      });
    }
    function Gd() {
      const p = new URLSearchParams();
      return x.sort && x.sort !== "title" && p.set("sort", x.sort), x.view && x.view !== "compact" && p.set("view", x.view), p;
    }
    function os() {
      const p = Gd().toString();
      return `${ot.value}${p ? `?${p}` : ""}`;
    }
    function ss() {
      const p = Gd();
      for (const d of Object.keys(x))
        ["sort", "view"].includes(d) || (x[d] = cr[d]);
      jt(null, {
        params: p,
        generation: ++Zt
      }), !Qi.value && !xn.value && ti(() => {
        _r.value?.focus?.();
      });
    }
    function ib(p) {
      const d = new URL(p.href, window.location.origin).searchParams;
      jt(null, {
        params: d,
        generation: ++Zt
      });
    }
    function nb() {
      return Pr("q");
    }
    const hc = H(() => h.smartViewCounts || {}), ab = H(() => new Set(h.smartViewCountsPending || []));
    function rb(p) {
      return ab.value.has(p) || !Object.prototype.hasOwnProperty.call(hc.value, p) ? "—" : Number(hc.value[p] || 0);
    }
    const qd = H(() => {
      const p = {};
      for (const [d, s] of Object.entries(x)) {
        const O = String(s || "").trim();
        O !== "" && !(d === "sort" && O === "title") && (p[d] = O);
      }
      return p;
    }), ob = H(() => JSON.stringify(qd.value)), vc = H(() => Object.keys(qd.value).length > 0);
    function Wd(p) {
      if (!ie.includes(p)) return;
      x.view = p;
      const d = new URLSearchParams();
      for (const [s, O] of Object.entries(u(x))) {
        const Q = String(O || "").trim();
        Q !== "" && !(s === "sort" && Q === "title") && !(s === "view" && Q === "compact") && d.set(s, Q);
      }
      d.delete("page"), jt(null, {
        params: d,
        generation: ++Zt
      });
    }
    function sb(p) {
      const d = o(window.location.search);
      for (const O of Object.keys(wr))
        d.delete(O);
      d.delete("page");
      for (const [O, Q] of Object.entries(p)) {
        const ge = O === "view" ? f(Q) : String(Q || "").trim();
        ge !== "" && !(O === "view" && ge === "compact") && d.set(O, ge);
      }
      const s = d.toString();
      return s ? `?${s}` : "?";
    }
    function lb(p) {
      return sb(p || {});
    }
    function cb(p) {
      const s = Object.entries(p && typeof p == "object" ? p : {}).filter(([, O]) => String(O ?? "").trim() !== "");
      return s.length === 0 ? !1 : s.every(([O, Q]) => String(x[O] ?? "") === String(Q ?? ""));
    }
    function ub(p) {
      return Cr.value.replace("__COLLECTION_ID__", encodeURIComponent(String(p || "0")));
    }
    function db(p) {
      if (!zt.value) return;
      const d = document.createElement("form");
      d.method = "post", d.action = ub(p), d.className = "library-navigation-saved-collection-delete-form";
      const s = document.createElement("input");
      s.type = "hidden", s.name = "requesttoken", s.value = zt.value, d.appendChild(s), document.body.appendChild(d), d.submit();
    }
    function ls(p) {
      return String(p || "").toUpperCase();
    }
    function Fr(p) {
      return rc[p.id] || "loading";
    }
    function fb(p) {
      rc[p.id] = "loaded";
    }
    function pb(p) {
      rc[p.id] = "error";
    }
    function Yd(p) {
      const d = String(p?.publication || "").trim(), s = String(p?.publicationDate || "").trim();
      return d && s ? `${d} · ${s}` : d || s;
    }
    function Xd(p) {
      const d = String(p?.tagName || "").toLowerCase();
      return p?.isContentEditable || ["input", "select", "textarea", "button"].includes(d);
    }
    function hb(p) {
      p.key !== "/" || p.metaKey || p.ctrlKey || p.altKey || p.shiftKey || Xd(p.target) || (p.preventDefault(), Lr.value?.focus(), Lr.value?.select?.());
    }
    async function vb(p) {
      p.key !== "Escape" || document.activeElement !== Lr.value || x.q === "" || (p.preventDefault(), de.value = "", x.q = "", await ti(), si({ currentTarget: Lr.value }));
    }
    function gb(p) {
      if (!Rn.value || p.metaKey || p.ctrlKey || p.altKey)
        return !1;
      if (p.key === "Escape")
        return p.preventDefault(), xr(), !0;
      if (p.key === "Tab" && ca.value) {
        if (la.value?.focusTrap) return !1;
        const d = la.value?.$refs?.sidebar || la.value?.$el || la.value, s = [...d?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((ge) => !ge.hidden && ge.getAttribute("aria-hidden") !== "true");
        if (s.length === 0) return !1;
        const O = s[0], Q = s[s.length - 1];
        if (p.shiftKey && (document.activeElement === O || !d.contains(document.activeElement)))
          return p.preventDefault(), Q.focus(), !0;
        if (!p.shiftKey && (document.activeElement === Q || !d.contains(document.activeElement)))
          return p.preventDefault(), O.focus(), !0;
      }
      return Xd(p.target) ? !1 : p.key === "ArrowLeft" && es.value ? (p.preventDefault(), rs(es.value), !0) : p.key === "ArrowRight" && ts.value ? (p.preventDefault(), rs(ts.value), !0) : !1;
    }
    function Zd(p) {
      gb(p) || (hb(p), vb(p));
    }
    Zn(() => {
      window.addEventListener("keydown", Zd), window.addEventListener("popstate", Ld), an = window.matchMedia?.("(max-width: 1023px)") || null, Nr(), an?.addEventListener ? an.addEventListener("change", Nr) : an?.addListener?.(Nr);
      const p = new URLSearchParams(window.location.search), d = Od();
      p.has("item") && d === null ? (p.delete("item"), history.replaceState({}, "", `${window.location.pathname}${p.toString() ? `?${p}` : ""}${window.location.hash}`)) : d !== null && Or(d, { historyMode: "none", seed: C.value.find((s) => Number(s.id) === d) || null }), Rr = window.requestAnimationFrame(() => {
        Rr = null, Yg();
      });
    }), lr(() => {
      lc = !0, dc(), window.removeEventListener("keydown", Zd), window.removeEventListener("popstate", Ld), window.clearTimeout(ne), window.clearTimeout(ft), window.clearTimeout(ee), window.clearTimeout(Mi), oe?.abort(), pt?.abort(), V?.abort(), Ti?.abort(), Zt += 1, Rr !== null && window.cancelAnimationFrame(Rr), Rr = null, Va?.abort(), Ha?.abort(), Ha = null, da += 1, fa?.abort(), fa = null, an?.removeEventListener ? an.removeEventListener("change", Nr) : an?.removeListener?.(Nr), an = null, Qo = null;
    });
    const Dr = /* @__PURE__ */ Rt({}), Mr = /* @__PURE__ */ Rt({});
    async function Jd(p, d) {
      const s = d?.currentTarget?.closest?.("form") || d?.currentTarget;
      if (!s || !p?.starUrl || Dr[p.id]) return;
      const O = !!p.starred;
      Dr[p.id] = !0, Mr[p.id] = "", p.starred = !O;
      try {
        (await fetch(p.starUrl, {
          method: "POST",
          body: new FormData(s),
          credentials: "same-origin"
        })).ok || (p.starred = O, Mr[p.id] = b("library", "Could not update star. Try again."));
      } catch {
        p.starred = O, Mr[p.id] = b("library", "Could not update star. Try again.");
      } finally {
        Dr[p.id] = !1;
      }
    }
    return (p, d) => (m(), je(g(lk), { "app-name": "library" }, {
      default: Pe(() => [
        Ae(g(H0), {
          "aria-label": g(b)("library", "Library navigation")
        }, {
          list: Pe(() => [
            Ae(g(Dv), null, {
              default: Pe(() => [
                (m(!0), _(ae, null, Ce(Zl.value, (s) => (m(), je(g(qc), {
                  key: s.key,
                  active: s.active,
                  href: s.href,
                  name: s.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                (m(!0), _(ae, null, Ce(ea.value, (s) => (m(), _("div", {
                  key: s.key,
                  class: "library-navigation-saved-collection-row"
                }, [
                  Ae(g(qc), {
                    class: "library-navigation-saved-collection",
                    active: s.active,
                    href: s.href,
                    name: s.name
                  }, null, 8, ["active", "href", "name"]),
                  l("button", {
                    type: "button",
                    class: "library-navigation-saved-collection-delete-action",
                    style: { background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.42)", color: "#fff" },
                    "aria-label": `${g(b)("library", "Delete collection")}: ${s.rawName}`,
                    title: `${g(b)("library", "Delete collection")}: ${s.rawName}`,
                    onClick: ke((O) => db(s.id), ["stop", "prevent"])
                  }, "✕", 8, wk)
                ]))), 128)),
                Ae(g(qc), {
                  active: fr.value,
                  href: dr.value,
                  name: pr.value > 0 ? `${g(b)("library", "Review")} (${pr.value})` : g(b)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Pe(() => [
            l("section", Sk, [
              l("h2", Ck, v(g(b)("library", "Filters")), 1),
              l("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": g(b)("library", "Catalogue search and filters"),
                onSubmit: ke(Id, ["prevent"])
              }, [
                l("input", {
                  type: "hidden",
                  name: "folder",
                  value: x.folder
                }, null, 8, kk),
                (m(!0), _(ae, null, Ce(md.value, (s) => (m(), _("input", {
                  key: `sidebar-${s.key}`,
                  type: "hidden",
                  name: s.key,
                  value: s.value
                }, null, 8, Ek))), 128)),
                x.sort && x.sort !== "title" ? (m(), _("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: x.sort
                }, null, 8, Ak)) : F("", !0),
                x.view && x.view !== "compact" ? (m(), _("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: x.view
                }, null, 8, Ok)) : F("", !0),
                l("fieldset", xk, [
                  l("legend", null, v(g(b)("library", "Content")), 1),
                  l("label", {
                    class: "library-quick-filter-search",
                    title: g(b)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                  }, [
                    l("span", null, [
                      _e(v(g(b)("library", "Search")) + " ", 1),
                      d[107] || (d[107] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                    ]),
                    Ie(l("input", {
                      ref_key: "quickSearchInput",
                      ref: Lr,
                      "onUpdate:modelValue": d[0] || (d[0] = (s) => de.value = s),
                      "data-library-quick-search": "",
                      type: "search",
                      name: "q",
                      placeholder: g(b)("library", "Title, creator, description, filename or folder")
                    }, null, 8, Lk), [
                      [dt, de.value]
                    ]),
                    oi("q") ? (m(), _("small", Rk, v(Ei("q")), 1)) : F("", !0)
                  ], 8, Nk),
                  l("label", null, [
                    _e(v(g(b)("library", "Type")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": d[1] || (d[1] = (s) => x.type = s),
                      name: "type",
                      onChange: d[2] || (d[2] = (s) => si(s))
                    }, [
                      l("option", Ik, v(g(b)("library", "All types")), 1),
                      (m(!0), _(ae, null, Ce(R.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, v(s), 9, Pk))), 128))
                    ], 544), [
                      [Jt, x.type]
                    ])
                  ]),
                  l("div", $k, [
                    l("label", Fk, v(g(b)("library", "Publisher")), 1),
                    Ie(l("input", {
                      id: "library-publisher-search",
                      "onUpdate:modelValue": d[3] || (d[3] = (s) => z.value = s),
                      type: "search",
                      name: "publisherSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search publishers"),
                      title: g(b)("library", "Exact publisher matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publisher-suggestions",
                      "aria-activedescendant": Bd("desktop", "publisher"),
                      "aria-expanded": X.value && te.value.length > 0 ? "true" : "false",
                      onFocus: d[4] || (d[4] = (s) => Hd("publisher")),
                      onKeydown: d[5] || (d[5] = (s) => Vd(s, "publisher"))
                    }, null, 40, Dk), [
                      [dt, z.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publisher",
                      value: x.publisher
                    }, null, 8, Mk),
                    oi("publisher") ? (m(), _("small", zk, v(Ei("publisher")), 1)) : F("", !0),
                    X.value && te.value.length > 0 ? (m(), _("ul", Uk, [
                      (m(!0), _(ae, null, Ce(te.value, (s, O) => (m(), _("li", {
                        id: fc("desktop", "publisher", O),
                        key: s,
                        role: "option",
                        "aria-selected": rn.publisher === O ? "true" : "false"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publisher-suggestion",
                          onMousedown: d[6] || (d[6] = ke(() => {
                          }, ["prevent"])),
                          onClick: (Q) => $d(s, Q)
                        }, v(s), 41, Bk)
                      ], 8, jk))), 128))
                    ])) : F("", !0),
                    l("button", {
                      type: "submit",
                      class: ye(["button secondary library-publisher-apply", nn("publisher")])
                    }, v(g(b)("library", "Apply publisher")), 3)
                  ]),
                  l("div", Hk, [
                    l("label", Vk, v(g(b)("library", "Series / periodical")), 1),
                    Ie(l("input", {
                      id: "library-publication-search",
                      "onUpdate:modelValue": d[7] || (d[7] = (s) => J.value = s),
                      type: "search",
                      name: "publicationSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search series and periodicals"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publication-suggestions",
                      "aria-expanded": Y.value && he.value.length > 0 ? "true" : "false",
                      onFocus: d[8] || (d[8] = (s) => Y.value = !0),
                      onKeydown: d[9] || (d[9] = at((s) => Y.value = !1, ["escape"]))
                    }, null, 40, Kk), [
                      [dt, J.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publication",
                      value: x.publication
                    }, null, 8, Gk),
                    oi("publication") ? (m(), _("small", qk, v(Ei("publication")), 1)) : F("", !0),
                    Y.value && he.value.length > 0 ? (m(), _("ul", Wk, [
                      (m(!0), _(ae, null, Ce(he.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publication-suggestion",
                          onMousedown: d[10] || (d[10] = ke(() => {
                          }, ["prevent"])),
                          onClick: (O) => Rd(s, O)
                        }, v(s), 41, Yk)
                      ]))), 128))
                    ])) : F("", !0),
                    l("button", {
                      type: "submit",
                      class: ye(["button secondary library-publication-apply", nn("publication")])
                    }, v(g(b)("library", "Apply series")), 3)
                  ]),
                  l("div", Xk, [
                    l("label", Zk, v(g(b)("library", "Publication year")), 1),
                    Ie(l("input", {
                      id: "library-year-search",
                      "onUpdate:modelValue": d[11] || (d[11] = (s) => Dt.value = s),
                      type: "search",
                      name: "yearSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search publication years"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-year-suggestions",
                      "aria-expanded": Mt.value && Di.value.length > 0 ? "true" : "false",
                      onFocus: d[12] || (d[12] = (s) => Mt.value = !0),
                      onKeydown: d[13] || (d[13] = at((s) => Mt.value = !1, ["escape"]))
                    }, null, 40, Jk), [
                      [dt, Dt.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "year",
                      value: x.year
                    }, null, 8, Qk),
                    oi("year") ? (m(), _("small", eE, v(Ei("year")), 1)) : F("", !0),
                    Mt.value && Di.value.length > 0 ? (m(), _("ul", tE, [
                      (m(!0), _(ae, null, Ce(Di.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-year-suggestion",
                          onMousedown: d[14] || (d[14] = ke(() => {
                          }, ["prevent"])),
                          onClick: (O) => jd(s, O)
                        }, v(s), 41, iE)
                      ]))), 128))
                    ])) : F("", !0),
                    l("button", {
                      type: "submit",
                      class: ye(["button secondary library-year-apply", nn("year")])
                    }, v(g(b)("library", "Apply year")), 3)
                  ]),
                  l("div", nE, [
                    l("label", aE, v(g(b)("library", "Creator")), 1),
                    Ie(l("input", {
                      id: "library-creator-search",
                      "onUpdate:modelValue": d[15] || (d[15] = (s) => pe.value = s),
                      type: "search",
                      name: "creatorSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search creators"),
                      title: g(b)("library", "Exact full-field creator matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-creator-suggestions",
                      "aria-expanded": Be.value && rt.value.length > 0 ? "true" : "false",
                      onFocus: d[16] || (d[16] = (s) => Be.value = !0),
                      onKeydown: d[17] || (d[17] = at((s) => Be.value = !1, ["escape"]))
                    }, null, 40, rE), [
                      [dt, pe.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "creator",
                      value: x.creator
                    }, null, 8, oE),
                    oi("creator") ? (m(), _("small", sE, v(Ei("creator")), 1)) : F("", !0),
                    Be.value && rt.value.length > 0 ? (m(), _("ul", lE, [
                      (m(!0), _(ae, null, Ce(rt.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-creator-suggestion",
                          onMousedown: d[18] || (d[18] = ke(() => {
                          }, ["prevent"])),
                          onClick: (O) => Pd(s, O)
                        }, v(s), 41, cE)
                      ]))), 128))
                    ])) : F("", !0),
                    l("button", {
                      type: "submit",
                      class: ye(["button secondary library-creator-apply", nn("creator")])
                    }, v(g(b)("library", "Apply creator")), 3)
                  ]),
                  l("div", uE, [
                    l("label", dE, v(g(b)("library", "Nextcloud tag")), 1),
                    Ie(l("input", {
                      id: "library-tag-search",
                      "onUpdate:modelValue": d[19] || (d[19] = (s) => Ye.value = s),
                      type: "search",
                      name: "tagSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search tags"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-tag-suggestions",
                      "aria-expanded": ct.value && St.value.length > 0 ? "true" : "false",
                      onFocus: d[20] || (d[20] = (s) => ct.value = !0),
                      onKeydown: d[21] || (d[21] = at((s) => ct.value = !1, ["escape"]))
                    }, null, 40, fE), [
                      [dt, Ye.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "tag",
                      value: x.tag
                    }, null, 8, pE),
                    ct.value && St.value.length > 0 ? (m(), _("ul", hE, [
                      (m(!0), _(ae, null, Ce(St.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-tag-suggestion",
                          onMousedown: d[22] || (d[22] = ke(() => {
                          }, ["prevent"])),
                          onClick: (O) => Dd(s, O)
                        }, v(s), 41, vE)
                      ]))), 128))
                    ])) : F("", !0),
                    l("button", {
                      type: "submit",
                      class: ye(["button secondary library-tag-apply", nn("tag")])
                    }, v(g(b)("library", "Apply tag")), 3)
                  ]),
                  l("label", null, [
                    _e(v(g(b)("library", "Format")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": d[23] || (d[23] = (s) => x.format = s),
                      name: "format",
                      onChange: d[24] || (d[24] = (s) => si(s))
                    }, [
                      l("option", gE, v(g(b)("library", "All formats")), 1),
                      (m(!0), _(ae, null, Ce(E.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, v(ls(s)), 9, bE))), 128))
                    ], 544), [
                      [Jt, x.format]
                    ])
                  ])
                ]),
                l("fieldset", mE, [
                  l("legend", null, v(g(b)("library", "Location")), 1),
                  l("label", null, [
                    _e(v(g(b)("library", "Shelf")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": d[25] || (d[25] = (s) => x.shelf = s),
                      name: "shelf",
                      onChange: d[26] || (d[26] = (s) => si(s))
                    }, [
                      l("option", yE, v(g(b)("library", "All shelves")), 1),
                      (m(!0), _(ae, null, Ce(N.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, v(s), 9, _E))), 128))
                    ], 544), [
                      [Jt, x.shelf]
                    ])
                  ]),
                  l("div", wE, [
                    l("label", SE, v(g(b)("library", "Folder")), 1),
                    Ie(l("input", {
                      id: "library-folder-search",
                      "onUpdate:modelValue": d[27] || (d[27] = (s) => Ge.value = s),
                      type: "search",
                      name: "folderSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Type at least 3 path characters"),
                      title: g(b)("library", "Select an exact folder path"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-folder-suggestions",
                      "aria-expanded": gt.value && w.value.length > 0 ? "true" : "false",
                      onFocus: d[28] || (d[28] = (s) => gt.value = !0),
                      onKeydown: d[29] || (d[29] = at((s) => gt.value = !1, ["escape"]))
                    }, null, 40, CE), [
                      [dt, Ge.value]
                    ]),
                    gt.value && w.value.length > 0 ? (m(), _("ul", TE, [
                      (m(!0), _(ae, null, Ce(w.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-folder-suggestion",
                          onMousedown: d[30] || (d[30] = ke(() => {
                          }, ["prevent"])),
                          onClick: (O) => Md(s, O)
                        }, v(s), 41, kE)
                      ]))), 128))
                    ])) : F("", !0),
                    l("button", {
                      type: "submit",
                      class: ye(["button secondary library-folder-apply", nn("folder")])
                    }, v(g(b)("library", "Apply folder")), 3)
                  ])
                ]),
                l("fieldset", EE, [
                  l("legend", null, v(g(b)("library", "Review")), 1),
                  l("label", null, [
                    _e(v(g(b)("library", "Scan status")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": d[31] || (d[31] = (s) => x.status = s),
                      name: "status",
                      onChange: d[32] || (d[32] = (s) => si(s))
                    }, [
                      l("option", AE, v(g(b)("library", "All scan statuses")), 1),
                      (m(!0), _(ae, null, Ce(G.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, v(s), 9, OE))), 128))
                    ], 544), [
                      [Jt, x.status]
                    ])
                  ]),
                  l("label", null, [
                    _e(v(g(b)("library", "Workflow status")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": d[33] || (d[33] = (s) => x.workflowStatus = s),
                      name: "workflowStatus",
                      onChange: d[34] || (d[34] = (s) => si(s))
                    }, [
                      l("option", xE, v(g(b)("library", "All workflow statuses")), 1),
                      (m(!0), _(ae, null, Ce(j.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, v(s), 9, NE))), 128))
                    ], 544), [
                      [Jt, x.workflowStatus]
                    ])
                  ]),
                  l("div", LE, [
                    l("label", RE, v(g(b)("library", "Subject")), 1),
                    Ie(l("input", {
                      id: "library-subject-search",
                      "onUpdate:modelValue": d[35] || (d[35] = (s) => L.value = s),
                      type: "search",
                      name: "subjectSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search subjects"),
                      title: g(b)("library", "Exact subject matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-subject-suggestions",
                      "aria-expanded": U.value && K.value.length > 0 ? "true" : "false",
                      onFocus: d[36] || (d[36] = (s) => U.value = !0),
                      onKeydown: d[37] || (d[37] = at((s) => U.value = !1, ["escape"]))
                    }, null, 40, IE), [
                      [dt, L.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "subject",
                      value: x.subject
                    }, null, 8, PE),
                    oi("subject") ? (m(), _("small", $E, v(Ei("subject")), 1)) : F("", !0),
                    U.value && K.value.length > 0 ? (m(), _("ul", FE, [
                      (m(!0), _(ae, null, Ce(K.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-subject-suggestion",
                          onMousedown: d[38] || (d[38] = ke(() => {
                          }, ["prevent"])),
                          onClick: (O) => Ud(s, O)
                        }, v(s), 41, DE)
                      ]))), 128))
                    ])) : F("", !0),
                    l("button", {
                      type: "button",
                      class: ye(["button secondary library-subject-apply", nn("subject")]),
                      onClick: Qg
                    }, v(g(b)("library", "Apply subject")), 3)
                  ]),
                  l("div", ME, [
                    l("label", zE, v(g(b)("library", "Classification")), 1),
                    Ie(l("input", {
                      id: "library-classification-search",
                      "onUpdate:modelValue": d[39] || (d[39] = (s) => se.value = s),
                      type: "search",
                      name: "classificationSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search classifications"),
                      title: g(b)("library", "Exact classification matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-classification-suggestions",
                      "aria-expanded": fe.value && Re.value.length > 0 ? "true" : "false",
                      onFocus: d[40] || (d[40] = (s) => fe.value = !0),
                      onKeydown: d[41] || (d[41] = at((s) => fe.value = !1, ["escape"]))
                    }, null, 40, UE), [
                      [dt, se.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "classification",
                      value: x.classification
                    }, null, 8, jE),
                    fe.value && Re.value.length > 0 ? (m(), _("ul", BE, [
                      (m(!0), _(ae, null, Ce(Re.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-classification-suggestion",
                          onMousedown: d[42] || (d[42] = ke(() => {
                          }, ["prevent"])),
                          onClick: (O) => Fd(s, O)
                        }, v(s), 41, HE)
                      ]))), 128))
                    ])) : F("", !0),
                    l("button", {
                      type: "submit",
                      class: ye(["button secondary library-classification-apply", nn("classification")])
                    }, v(g(b)("library", "Apply classification")), 3)
                  ]),
                  l("label", null, [
                    _e(v(g(b)("library", "Suggested updates")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": d[43] || (d[43] = (s) => x.scannerConflicts = s),
                      name: "scannerConflicts",
                      onChange: d[44] || (d[44] = (s) => si(s))
                    }, [
                      l("option", VE, v(g(b)("library", "All metadata")), 1),
                      l("option", KE, v(g(b)("library", "Suggested updates")), 1)
                    ], 544), [
                      [Jt, x.scannerConflicts]
                    ])
                  ])
                ]),
                l("fieldset", GE, [
                  l("legend", null, v(g(b)("library", "Personal / display")), 1)
                ]),
                l("button", qE, v(g(b)("library", "Apply filters")), 1)
              ], 40, Tk)
            ]),
            l("a", {
              class: "library-navigation-settings-link",
              href: Ui.value
            }, [
              d[108] || (d[108] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, v(g(b)("library", "Settings")), 1)
            ], 8, WE)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        Ae(g(r0), null, {
          default: Pe(() => [
            l("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: h.language || "en",
              dir: h.direction || "ltr",
              tabindex: "-1"
            }, [
              xe.value.length > 0 ? (m(), _("nav", {
                key: 0,
                class: "library-active-filter-chips",
                "aria-label": g(b)("library", "Active filters")
              }, [
                l("span", null, v(g(b)("library", "Active filters")), 1),
                (m(!0), _(ae, null, Ce(xe.value, (s) => (m(), _("a", {
                  key: s.key,
                  href: Pr(s.key),
                  class: "library-filter-chip",
                  "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                  title: s.title,
                  onClick: ke((O) => $r(s.key), ["prevent"])
                }, [
                  l("strong", null, [
                    _e(v(s.label), 1),
                    s.displayValue ? (m(), _(ae, { key: 0 }, [
                      _e(":")
                    ], 64)) : F("", !0)
                  ]),
                  s.displayValue ? (m(), _(ae, { key: 0 }, [
                    d[109] || (d[109] = _e(v(" "), -1)),
                    l("span", {
                      class: "library-filter-chip-value",
                      title: s.value
                    }, v(s.displayValue), 9, JE)
                  ], 64)) : F("", !0),
                  d[110] || (d[110] = _e()),
                  d[111] || (d[111] = l("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, ZE))), 128)),
                He.value.length > 0 ? (m(), _("a", {
                  key: 0,
                  href: os(),
                  class: "library-active-filter-clear-all",
                  onClick: ke(ss, ["prevent"])
                }, v(g(b)("library", "Clear all")), 9, QE)) : F("", !0)
              ], 8, XE)) : F("", !0),
              fr.value ? (m(), _("section", eA, [
                l("header", tA, [
                  l("p", iA, v(g(b)("library", "Metadata cleanup")), 1),
                  l("h2", nA, v(g(b)("library", "Review")), 1),
                  l("p", null, v(g(b)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                l("nav", {
                  class: "library-review-queues",
                  "aria-label": g(b)("library", "Review queues")
                }, [
                  (m(!0), _(ae, null, Ce(Dg.value, (s) => (m(), _("a", {
                    key: s.key,
                    class: ye(["library-review-queue-link", { active: s.active }]),
                    href: s.href,
                    "aria-current": s.active ? "page" : void 0,
                    onClick: ke((O) => ib(s), ["prevent"])
                  }, [
                    l("span", null, v(s.label), 1),
                    l("b", null, v(rb(s.countKey)), 1)
                  ], 10, rA))), 128))
                ], 8, aA),
                l("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(b)("library", "Filter current review queue"),
                  onSubmit: ke(jt, ["prevent"])
                }, [
                  (m(!0), _(ae, null, Ce(Tg.value, (s) => (m(), _("input", {
                    key: `review-${s.key}`,
                    type: "hidden",
                    name: s.key,
                    value: s.value
                  }, null, 8, sA))), 128)),
                  l("label", null, [
                    _e(v(g(b)("library", "Search within this queue")), 1),
                    Ie(l("input", {
                      "onUpdate:modelValue": d[45] || (d[45] = (s) => x.q = s),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [dt, x.q]
                    ])
                  ]),
                  l("button", lA, v(g(b)("library", "Apply")), 1)
                ], 40, oA),
                l("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": Nt.loading ? "true" : "false"
                }, [
                  Nt.loading ? (m(), _("span", uA, v(g(b)("library", "Loading review queue…")), 1)) : F("", !0)
                ], 8, cA),
                Nt.error ? (m(), _("p", dA, v(Nt.error), 1)) : F("", !0),
                In.value.enabled ? (m(), _("section", fA, [
                  l("div", pA, [
                    l("p", hA, v(g(b)("library", "Metadata review workbench")), 1),
                    l("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(b)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, v(g(b)("library", "Review next suggestion")), 9, vA)
                  ]),
                  In.value.item ? (m(), _("article", gA, [
                    l("header", null, [
                      l("strong", null, [
                        l("bdi", bA, v(In.value.item.title), 1)
                      ]),
                      l("span", mA, [
                        l("bdi", yA, v(In.value.item.cachedPath), 1)
                      ])
                    ]),
                    l("div", _A, [
                      (m(!0), _(ae, null, Ce(In.value.fields, (s) => (m(), _("article", {
                        key: s.field,
                        class: "library-metadata-review-field"
                      }, [
                        l("h4", null, [
                          l("bdi", wA, v(s.field), 1)
                        ]),
                        l("dl", null, [
                          l("div", null, [
                            l("dt", null, v(g(b)("library", "Current value")), 1),
                            l("dd", null, [
                              l("bdi", SA, v(s.currentValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(b)("library", "Suggested value")), 1),
                            l("dd", null, [
                              l("bdi", CA, v(s.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(b)("library", "Path-based suggestion")), 1),
                            l("dd", null, [
                              l("bdi", TA, v(s.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(b)("library", "Sidecar value")), 1),
                            l("dd", null, [
                              l("bdi", kA, v(s.sidecarValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(b)("library", "Source")), 1),
                            l("dd", null, [
                              l("bdi", EA, v(s.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        l("form", {
                          method: "post",
                          action: In.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: zt.value
                          }, null, 8, OA),
                          l("input", {
                            type: "hidden",
                            name: "field",
                            value: s.field
                          }, null, 8, xA),
                          d[112] || (d[112] = l("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          l("button", NA, v(g(b)("library", "Use suggested value")), 1)
                        ], 8, AA)
                      ]))), 128))
                    ]),
                    l("footer", LA, [
                      l("a", {
                        class: "button secondary",
                        href: In.value.item.detailsUrl
                      }, v(g(b)("library", "Maintenance")), 9, RA),
                      l("a", {
                        class: "button secondary",
                        href: In.value.skipUrl
                      }, v(g(b)("library", "Skip to next suggestion")), 9, IA)
                    ])
                  ])) : F("", !0)
                ])) : F("", !0),
                C.value.length === 0 && !Nt.loading && !Nt.error ? (m(), _("div", PA, [
                  l("h3", null, v(g(b)("library", "This review queue is clear")), 1),
                  l("p", null, v(g(b)("library", "Choose another queue or return to the catalogue.")), 1),
                  l("a", {
                    class: "button primary",
                    href: ot.value
                  }, v(g(b)("library", "Back to Library")), 9, $A)
                ])) : (m(), _("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(b)("library", "Review results")
                }, [
                  (m(!0), _(ae, null, Ce(C.value, (s) => (m(), _("article", {
                    key: s.id,
                    class: "library-review-result-card"
                  }, [
                    l("div", null, [
                      l("h3", null, [
                        l("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (O) => xi(s, O)
                        }, [
                          l("bdi", MA, v(s.title), 1)
                        ], 8, DA)
                      ]),
                      s.creators ? (m(), _("p", zA, [
                        l("bdi", UA, v(s.creators), 1)
                      ])) : F("", !0),
                      s.scanError ? (m(), _("p", jA, [
                        l("bdi", BA, v(s.scanError), 1)
                      ])) : F("", !0)
                    ]),
                    l("p", null, [
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (O) => xi(s, O)
                      }, v(g(b)("library", "Details")), 9, HA),
                      l("a", {
                        class: "button primary",
                        href: s.openUrl,
                        onClick: (O) => Nn(s, O)
                      }, v(g(b)("library", "Open")), 9, VA)
                    ])
                  ]))), 128))
                ], 8, FA)),
                C.value.length > 0 ? (m(), _("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(b)("library", "Review pagination")
                }, [
                  Z.value.previousUrl ? (m(), _("a", {
                    key: 0,
                    href: Z.value.previousUrl
                  }, v(g(b)("library", "Previous")), 9, GA)) : (m(), _("span", qA, v(g(b)("library", "Previous")), 1)),
                  l("span", null, [
                    _e(v(g(b)("library", "Page")) + " " + v(Z.value.page), 1),
                    Z.value.total > 0 ? (m(), _("span", WA, " · " + v(Z.value.from) + "–" + v(Z.value.to), 1)) : F("", !0)
                  ]),
                  Z.value.nextUrl ? (m(), _("a", {
                    key: 2,
                    href: Z.value.nextUrl
                  }, v(g(b)("library", "Next")), 9, YA)) : (m(), _("span", XA, v(g(b)("library", "Next")), 1))
                ], 8, KA)) : F("", !0)
              ])) : Qi.value ? (m(), _("main", ZA, [
                l("header", JA, [
                  l("p", QA, v(g(b)("library", "Your library")), 1),
                  l("h2", e2, v(g(b)("library", "Home")), 1)
                ]),
                He.value.length > 0 ? (m(), _("aside", {
                  key: 0,
                  class: "library-active-filter-callout",
                  "aria-label": g(b)("library", "Active catalogue filters")
                }, [
                  l("h3", null, v(g(b)("library", "Active catalogue filters")), 1),
                  l("nav", {
                    class: "library-active-filter-callout-chips",
                    "aria-label": g(b)("library", "Active catalogue filters")
                  }, [
                    (m(!0), _(ae, null, Ce(He.value, (s) => (m(), _("a", {
                      key: `callout-${s.key}`,
                      href: Pr(s.key),
                      class: "library-filter-chip",
                      "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                      onClick: ke((O) => $r(s.key), ["prevent"])
                    }, [
                      l("strong", null, [
                        _e(v(s.label), 1),
                        s.displayValue ? (m(), _(ae, { key: 0 }, [
                          _e(":")
                        ], 64)) : F("", !0)
                      ]),
                      s.displayValue ? (m(), _(ae, { key: 0 }, [
                        d[113] || (d[113] = _e(v(" "), -1)),
                        l("span", {
                          class: "library-filter-chip-value",
                          title: s.value
                        }, v(s.displayValue), 9, a2)
                      ], 64)) : F("", !0),
                      d[114] || (d[114] = _e()),
                      d[115] || (d[115] = l("span", { "aria-hidden": "true" }, "×", -1))
                    ], 8, n2))), 128))
                  ], 8, i2),
                  l("p", r2, [
                    l("a", {
                      class: "button primary library-filter-callout-view",
                      href: Ot.value
                    }, v(g(b)("library", "View filtered catalogue")), 9, o2),
                    l("a", {
                      class: "button secondary",
                      href: os(),
                      onClick: ke(ss, ["prevent"])
                    }, v(g(b)("library", "Clear all")), 9, s2)
                  ])
                ], 8, t2)) : F("", !0),
                l("section", l2, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", c2, v(g(b)("library", "Continue reading")), 1),
                      l("p", u2, v(g(b)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    l("a", {
                      href: `${ot.value}?recentlyOpened=1&sort=lastOpened`
                    }, v(g(b)("library", "View all")), 9, d2)
                  ]),
                  Zo.value.continueReading.length ? (m(), _("div", f2, [
                    (m(!0), _(ae, null, Ce(Zo.value.continueReading, (s) => (m(), _("article", {
                      key: `continue-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(b)("library", "Details")}: ${s.title}`,
                        onClick: (O) => xi(s, O)
                      }, [
                        l("span", h2, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, v2)
                        ])
                      ], 8, p2),
                      l("div", g2, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (O) => xi(s, O)
                          }, [
                            l("bdi", m2, v(s.title), 1)
                          ], 8, b2)
                        ]),
                        s.creators ? (m(), _("p", y2, [
                          l("bdi", _2, v(s.creators), 1)
                        ])) : F("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl,
                          onClick: (O) => Nn(s, O)
                        }, v(g(b)("library", "Open")), 9, w2)
                      ])
                    ]))), 128))
                  ])) : (m(), _("p", S2, v(g(b)("library", "Publications you open will appear here.")), 1))
                ]),
                l("section", C2, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", T2, v(g(b)("library", "Recently added")), 1),
                      l("p", k2, v(g(b)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    l("a", {
                      href: `${ot.value}?sort=recent`
                    }, v(g(b)("library", "View all")), 9, E2)
                  ]),
                  Zo.value.recentlyAdded.length ? (m(), _("div", A2, [
                    (m(!0), _(ae, null, Ce(Zo.value.recentlyAdded, (s) => (m(), _("article", {
                      key: `recent-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(b)("library", "Details")}: ${s.title}`,
                        onClick: (O) => xi(s, O)
                      }, [
                        l("span", x2, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, N2)
                        ])
                      ], 8, O2),
                      l("div", L2, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (O) => xi(s, O)
                          }, [
                            l("bdi", I2, v(s.title), 1)
                          ], 8, R2)
                        ]),
                        s.creators ? (m(), _("p", P2, [
                          l("bdi", $2, v(s.creators), 1)
                        ])) : F("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl,
                          onClick: (O) => Nn(s, O)
                        }, v(g(b)("library", "Open")), 9, F2)
                      ])
                    ]))), 128))
                  ])) : (m(), _("p", D2, v(g(b)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                l("section", M2, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", z2, v(g(b)("library", "Shelves")), 1),
                      l("p", U2, v(g(b)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    l("a", { href: Da.value }, v(g(b)("library", "View all")), 9, j2)
                  ]),
                  yd.value.length ? (m(), _("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(b)("library", "Shelves")
                  }, [
                    (m(!0), _(ae, null, Ce(yd.value, (s) => (m(), _("a", {
                      key: s.shelf,
                      href: s.url
                    }, [
                      l("strong", null, [
                        l("bdi", V2, v(s.shelf), 1)
                      ]),
                      l("span", null, v(g(ui)("library", "%n item", "%n items", Number(s.itemCount || 0))), 1)
                    ], 8, H2))), 128))
                  ], 8, B2)) : (m(), _("p", K2, v(g(b)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(oc.value.count || 0) > 0 ? (m(), _("aside", G2, [
                  l("div", null, [
                    l("h3", q2, v(g(b)("library", "Needs attention")), 1),
                    l("p", W2, v(g(ui)("library", "%n publication needs better details.", "%n publications need better details.", Number(oc.value.count || 0))), 1)
                  ]),
                  l("a", {
                    class: "button tertiary",
                    href: oc.value.url
                  }, v(g(b)("library", "Review")), 9, Y2)
                ])) : F("", !0)
              ])) : xn.value ? (m(), _("main", X2, [
                l("header", Z2, [
                  l("p", J2, v(g(b)("library", "Your library")), 1),
                  l("h2", Q2, v(g(b)("library", "Shelves")), 1),
                  l("p", eO, v(g(b)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                He.value.length > 0 ? (m(), _("aside", {
                  key: 0,
                  class: "library-active-filter-callout",
                  "aria-label": g(b)("library", "Active catalogue filters")
                }, [
                  l("h3", null, v(g(b)("library", "Active catalogue filters")), 1),
                  l("nav", {
                    class: "library-active-filter-callout-chips",
                    "aria-label": g(b)("library", "Active catalogue filters")
                  }, [
                    (m(!0), _(ae, null, Ce(He.value, (s) => (m(), _("a", {
                      key: `callout-${s.key}`,
                      href: Pr(s.key),
                      class: "library-filter-chip",
                      "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                      onClick: ke((O) => $r(s.key), ["prevent"])
                    }, [
                      l("strong", null, [
                        _e(v(s.label), 1),
                        s.displayValue ? (m(), _(ae, { key: 0 }, [
                          _e(":")
                        ], 64)) : F("", !0)
                      ]),
                      s.displayValue ? (m(), _(ae, { key: 0 }, [
                        d[116] || (d[116] = _e(v(" "), -1)),
                        l("span", {
                          class: "library-filter-chip-value",
                          title: s.value
                        }, v(s.displayValue), 9, aO)
                      ], 64)) : F("", !0),
                      d[117] || (d[117] = _e()),
                      d[118] || (d[118] = l("span", { "aria-hidden": "true" }, "×", -1))
                    ], 8, nO))), 128))
                  ], 8, iO),
                  l("p", rO, [
                    l("a", {
                      class: "button primary library-filter-callout-view",
                      href: Ot.value
                    }, v(g(b)("library", "View filtered catalogue")), 9, oO),
                    l("a", {
                      class: "button secondary",
                      href: os(),
                      onClick: ke(ss, ["prevent"])
                    }, v(g(b)("library", "Clear all")), 9, sO)
                  ])
                ], 8, tO)) : F("", !0),
                _d.value.length ? (m(), _("nav", {
                  key: 1,
                  "aria-label": g(b)("library", "Shelves")
                }, [
                  l("ul", cO, [
                    (m(!0), _(ae, null, Ce(_d.value, (s) => (m(), je(_k, {
                      key: s.id,
                      node: s,
                      "children-url": Ln.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, lO)) : (m(), _("section", uO, [
                  l("h3", null, v(g(b)("library", "Shelves")), 1),
                  l("p", dO, v(g(b)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  l("p", fO, [
                    l("a", {
                      class: "button primary",
                      href: Ui.value
                    }, v(g(b)("library", "Add a Library root")), 9, pO),
                    l("a", {
                      class: "button secondary",
                      href: ot.value
                    }, v(g(b)("library", "All publications")), 9, hO)
                  ])
                ]))
              ])) : (m(), _("section", {
                key: 4,
                id: "library-catalogue",
                class: ye(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": Nt.loading }]),
                "aria-labelledby": "library-catalogue-heading",
                "aria-busy": Nt.loading ? "true" : "false"
              }, [
                l("header", gO, [
                  ja.value ? (m(), _("p", bO, v(na.value), 1)) : F("", !0),
                  l("h2", {
                    id: "library-catalogue-heading",
                    ref_key: "catalogueHeadingElement",
                    ref: _r,
                    tabindex: "-1"
                  }, v(br.value), 513)
                ]),
                l("details", {
                  class: "library-mobile-filter-panel",
                  "data-library-control": "filter",
                  onToggle: wg
                }, [
                  l("summary", {
                    class: "library-mobile-filter-trigger",
                    "aria-label": yg.value
                  }, [
                    l("span", yO, v(g(ui)("library", "%n item", "%n items", Number(Z.value.total || 0))), 1),
                    l("strong", null, v(mg.value), 1)
                  ], 8, mO),
                  l("form", {
                    method: "get",
                    class: "library-mobile-filter-form",
                    "aria-label": g(b)("library", "Mobile catalogue filters"),
                    onSubmit: ke(Id, ["prevent"])
                  }, [
                    l("input", {
                      type: "hidden",
                      name: "folder",
                      value: x.folder
                    }, null, 8, wO),
                    (m(!0), _(ae, null, Ce(md.value, (s) => (m(), _("input", {
                      key: `mobile-hidden-${s.key}`,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, SO))), 128)),
                    l("fieldset", CO, [
                      l("legend", null, v(g(b)("library", "Content")), 1),
                      l("label", TO, [
                        l("span", null, v(g(b)("library", "Search")), 1),
                        Ie(l("input", {
                          ref_key: "mobileFilterSearchInput",
                          ref: yr,
                          "onUpdate:modelValue": d[46] || (d[46] = (s) => de.value = s),
                          "data-library-mobile-filter-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(b)("library", "Title, creator, description, filename or folder")
                        }, null, 8, kO), [
                          [dt, de.value]
                        ])
                      ]),
                      l("label", null, [
                        _e(v(g(b)("library", "Type")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[47] || (d[47] = (s) => x.type = s),
                          name: "type",
                          onChange: d[48] || (d[48] = (s) => si(s))
                        }, [
                          l("option", EO, v(g(b)("library", "All types")), 1),
                          (m(!0), _(ae, null, Ce(R.value, (s) => (m(), _("option", {
                            key: `mobile-type-${s}`,
                            value: s
                          }, v(s), 9, AO))), 128))
                        ], 544), [
                          [Jt, x.type]
                        ])
                      ]),
                      l("div", OO, [
                        l("label", xO, v(g(b)("library", "Publisher")), 1),
                        Ie(l("input", {
                          id: "library-mobile-publisher-search",
                          "onUpdate:modelValue": d[49] || (d[49] = (s) => z.value = s),
                          type: "search",
                          name: "publisherSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search publishers"),
                          title: g(b)("library", "Exact publisher matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-publisher-suggestions",
                          "aria-activedescendant": Bd("mobile", "publisher"),
                          "aria-expanded": X.value && te.value.length > 0 ? "true" : "false",
                          onFocus: d[50] || (d[50] = (s) => Hd("publisher")),
                          onKeydown: d[51] || (d[51] = (s) => Vd(s, "publisher"))
                        }, null, 40, NO), [
                          [dt, z.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publisher",
                          value: x.publisher
                        }, null, 8, LO),
                        oi("publisher") ? (m(), _("small", RO, v(Ei("publisher")), 1)) : F("", !0),
                        ki.value && X.value && te.value.length > 0 ? (m(), _("ul", IO, [
                          (m(!0), _(ae, null, Ce(te.value, (s, O) => (m(), _("li", {
                            id: fc("mobile", "publisher", O),
                            key: `mobile-publisher-${s}`,
                            role: "option",
                            "aria-selected": rn.publisher === O ? "true" : "false"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publisher-suggestion",
                              onMousedown: d[52] || (d[52] = ke(() => {
                              }, ["prevent"])),
                              onClick: (Q) => $d(s, Q)
                            }, v(s), 41, $O)
                          ], 8, PO))), 128))
                        ])) : F("", !0)
                      ]),
                      l("div", FO, [
                        l("label", DO, v(g(b)("library", "Series / periodical")), 1),
                        Ie(l("input", {
                          id: "library-mobile-publication-search",
                          "onUpdate:modelValue": d[53] || (d[53] = (s) => J.value = s),
                          type: "search",
                          name: "publicationSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search series and periodicals"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-publication-suggestions",
                          "aria-expanded": Y.value && he.value.length > 0 ? "true" : "false",
                          onFocus: d[54] || (d[54] = (s) => Y.value = !0),
                          onKeydown: d[55] || (d[55] = at((s) => Y.value = !1, ["escape"]))
                        }, null, 40, MO), [
                          [dt, J.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publication",
                          value: x.publication
                        }, null, 8, zO),
                        oi("publication") ? (m(), _("small", UO, v(Ei("publication")), 1)) : F("", !0),
                        ki.value && Y.value && he.value.length > 0 ? (m(), _("ul", jO, [
                          (m(!0), _(ae, null, Ce(he.value, (s) => (m(), _("li", {
                            key: `mobile-publication-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: d[56] || (d[56] = ke(() => {
                              }, ["prevent"])),
                              onClick: (O) => Rd(s, O)
                            }, v(s), 41, BO)
                          ]))), 128))
                        ])) : F("", !0)
                      ]),
                      l("div", HO, [
                        l("label", VO, v(g(b)("library", "Publication year")), 1),
                        Ie(l("input", {
                          id: "library-mobile-year-search",
                          "onUpdate:modelValue": d[57] || (d[57] = (s) => Dt.value = s),
                          type: "search",
                          name: "yearSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search publication years"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-year-suggestions",
                          "aria-expanded": Mt.value && Di.value.length > 0 ? "true" : "false",
                          onFocus: d[58] || (d[58] = (s) => Mt.value = !0),
                          onKeydown: d[59] || (d[59] = at((s) => Mt.value = !1, ["escape"]))
                        }, null, 40, KO), [
                          [dt, Dt.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "year",
                          value: x.year
                        }, null, 8, GO),
                        oi("year") ? (m(), _("small", qO, v(Ei("year")), 1)) : F("", !0),
                        ki.value && Mt.value && Di.value.length > 0 ? (m(), _("ul", WO, [
                          (m(!0), _(ae, null, Ce(Di.value, (s) => (m(), _("li", {
                            key: `mobile-year-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-year-suggestion",
                              onMousedown: d[60] || (d[60] = ke(() => {
                              }, ["prevent"])),
                              onClick: (O) => jd(s, O)
                            }, v(s), 41, YO)
                          ]))), 128))
                        ])) : F("", !0)
                      ]),
                      l("div", XO, [
                        l("label", ZO, v(g(b)("library", "Creator")), 1),
                        Ie(l("input", {
                          id: "library-mobile-creator-search",
                          "onUpdate:modelValue": d[61] || (d[61] = (s) => pe.value = s),
                          type: "search",
                          name: "creatorSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search creators"),
                          title: g(b)("library", "Exact full-field creator matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-creator-suggestions",
                          "aria-expanded": Be.value && rt.value.length > 0 ? "true" : "false",
                          onFocus: d[62] || (d[62] = (s) => Be.value = !0),
                          onKeydown: d[63] || (d[63] = at((s) => Be.value = !1, ["escape"]))
                        }, null, 40, JO), [
                          [dt, pe.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "creator",
                          value: x.creator
                        }, null, 8, QO),
                        oi("creator") ? (m(), _("small", ex, v(Ei("creator")), 1)) : F("", !0),
                        ki.value && Be.value && rt.value.length > 0 ? (m(), _("ul", tx, [
                          (m(!0), _(ae, null, Ce(rt.value, (s) => (m(), _("li", {
                            key: `mobile-creator-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-creator-suggestion",
                              onMousedown: d[64] || (d[64] = ke(() => {
                              }, ["prevent"])),
                              onClick: (O) => Pd(s, O)
                            }, v(s), 41, ix)
                          ]))), 128))
                        ])) : F("", !0)
                      ]),
                      l("label", null, [
                        _e(v(g(b)("library", "Format")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[65] || (d[65] = (s) => x.format = s),
                          name: "format",
                          onChange: d[66] || (d[66] = (s) => si(s))
                        }, [
                          l("option", nx, v(g(b)("library", "All formats")), 1),
                          (m(!0), _(ae, null, Ce(E.value, (s) => (m(), _("option", {
                            key: `mobile-format-${s}`,
                            value: s
                          }, v(ls(s)), 9, ax))), 128))
                        ], 544), [
                          [Jt, x.format]
                        ])
                      ]),
                      l("div", rx, [
                        l("label", ox, v(g(b)("library", "Subject")), 1),
                        Ie(l("input", {
                          id: "library-mobile-subject-search",
                          "onUpdate:modelValue": d[67] || (d[67] = (s) => L.value = s),
                          type: "search",
                          name: "subjectSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search subjects"),
                          title: g(b)("library", "Exact subject matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-subject-suggestions",
                          "aria-expanded": U.value && K.value.length > 0 ? "true" : "false",
                          onFocus: d[68] || (d[68] = (s) => U.value = !0),
                          onKeydown: d[69] || (d[69] = at((s) => U.value = !1, ["escape"]))
                        }, null, 40, sx), [
                          [dt, L.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "subject",
                          value: x.subject
                        }, null, 8, lx),
                        oi("subject") ? (m(), _("small", cx, v(Ei("subject")), 1)) : F("", !0),
                        ki.value && U.value && K.value.length > 0 ? (m(), _("ul", ux, [
                          (m(!0), _(ae, null, Ce(K.value, (s) => (m(), _("li", {
                            key: `mobile-subject-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-subject-suggestion",
                              onMousedown: d[70] || (d[70] = ke(() => {
                              }, ["prevent"])),
                              onClick: (O) => Ud(s, O)
                            }, v(s), 41, dx)
                          ]))), 128))
                        ])) : F("", !0)
                      ]),
                      l("div", fx, [
                        l("label", px, v(g(b)("library", "Classification")), 1),
                        Ie(l("input", {
                          id: "library-mobile-classification-search",
                          "onUpdate:modelValue": d[71] || (d[71] = (s) => se.value = s),
                          type: "search",
                          name: "classificationSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search classifications"),
                          title: g(b)("library", "Exact classification matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-classification-suggestions",
                          "aria-expanded": fe.value && Re.value.length > 0 ? "true" : "false",
                          onFocus: d[72] || (d[72] = (s) => fe.value = !0),
                          onKeydown: d[73] || (d[73] = at((s) => fe.value = !1, ["escape"]))
                        }, null, 40, hx), [
                          [dt, se.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "classification",
                          value: x.classification
                        }, null, 8, vx),
                        ki.value && fe.value && Re.value.length > 0 ? (m(), _("ul", gx, [
                          (m(!0), _(ae, null, Ce(Re.value, (s) => (m(), _("li", {
                            key: `mobile-classification-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-classification-suggestion",
                              onMousedown: d[74] || (d[74] = ke(() => {
                              }, ["prevent"])),
                              onClick: (O) => Fd(s, O)
                            }, v(s), 41, bx)
                          ]))), 128))
                        ])) : F("", !0)
                      ])
                    ]),
                    l("fieldset", mx, [
                      l("legend", null, v(g(b)("library", "Location")), 1),
                      l("label", null, [
                        _e(v(g(b)("library", "Shelf")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[75] || (d[75] = (s) => x.shelf = s),
                          name: "shelf",
                          onChange: d[76] || (d[76] = (s) => si(s))
                        }, [
                          l("option", yx, v(g(b)("library", "All shelves")), 1),
                          (m(!0), _(ae, null, Ce(N.value, (s) => (m(), _("option", {
                            key: `mobile-shelf-${s}`,
                            value: s
                          }, v(s), 9, _x))), 128))
                        ], 544), [
                          [Jt, x.shelf]
                        ])
                      ]),
                      l("div", wx, [
                        l("label", Sx, v(g(b)("library", "Folder")), 1),
                        Ie(l("input", {
                          id: "library-mobile-folder-search",
                          "onUpdate:modelValue": d[77] || (d[77] = (s) => Ge.value = s),
                          type: "search",
                          name: "folderSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Type at least 3 path characters"),
                          title: g(b)("library", "Select an exact folder path"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-folder-suggestions",
                          "aria-expanded": gt.value && w.value.length > 0 ? "true" : "false",
                          onFocus: d[78] || (d[78] = (s) => gt.value = !0),
                          onKeydown: d[79] || (d[79] = at((s) => gt.value = !1, ["escape"]))
                        }, null, 40, Cx), [
                          [dt, Ge.value]
                        ]),
                        ki.value && gt.value && w.value.length > 0 ? (m(), _("ul", Tx, [
                          (m(!0), _(ae, null, Ce(w.value, (s) => (m(), _("li", {
                            key: `mobile-folder-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-folder-suggestion",
                              onMousedown: d[80] || (d[80] = ke(() => {
                              }, ["prevent"])),
                              onClick: (O) => Md(s, O)
                            }, v(s), 41, kx)
                          ]))), 128))
                        ])) : F("", !0)
                      ])
                    ]),
                    l("fieldset", Ex, [
                      l("legend", null, v(g(b)("library", "Review")), 1),
                      l("label", null, [
                        _e(v(g(b)("library", "Scan status")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[81] || (d[81] = (s) => x.status = s),
                          name: "status",
                          onChange: d[82] || (d[82] = (s) => si(s))
                        }, [
                          l("option", Ax, v(g(b)("library", "All scan statuses")), 1),
                          (m(!0), _(ae, null, Ce(G.value, (s) => (m(), _("option", {
                            key: `mobile-scan-${s}`,
                            value: s
                          }, v(s), 9, Ox))), 128))
                        ], 544), [
                          [Jt, x.status]
                        ])
                      ]),
                      l("label", null, [
                        _e(v(g(b)("library", "Workflow status")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[83] || (d[83] = (s) => x.workflowStatus = s),
                          name: "workflowStatus",
                          onChange: d[84] || (d[84] = (s) => si(s))
                        }, [
                          l("option", xx, v(g(b)("library", "All workflow statuses")), 1),
                          (m(!0), _(ae, null, Ce(j.value, (s) => (m(), _("option", {
                            key: `mobile-workflow-${s}`,
                            value: s
                          }, v(s), 9, Nx))), 128))
                        ], 544), [
                          [Jt, x.workflowStatus]
                        ])
                      ]),
                      l("label", null, [
                        _e(v(g(b)("library", "Suggested updates")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[85] || (d[85] = (s) => x.scannerConflicts = s),
                          name: "scannerConflicts",
                          onChange: d[86] || (d[86] = (s) => si(s))
                        }, [
                          l("option", Lx, v(g(b)("library", "All metadata")), 1),
                          l("option", Rx, v(g(b)("library", "Suggested updates")), 1)
                        ], 544), [
                          [Jt, x.scannerConflicts]
                        ])
                      ])
                    ]),
                    l("fieldset", Ix, [
                      l("legend", null, v(g(b)("library", "Personal / display")), 1),
                      l("div", Px, [
                        l("label", $x, v(g(b)("library", "Nextcloud tag")), 1),
                        Ie(l("input", {
                          id: "library-tag-search",
                          "onUpdate:modelValue": d[87] || (d[87] = (s) => Ye.value = s),
                          type: "search",
                          name: "tagSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search tags"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-tag-suggestions",
                          "aria-expanded": ct.value && St.value.length > 0 ? "true" : "false",
                          onFocus: d[88] || (d[88] = (s) => ct.value = !0),
                          onKeydown: d[89] || (d[89] = at((s) => ct.value = !1, ["escape"]))
                        }, null, 40, Fx), [
                          [dt, Ye.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "tag",
                          value: x.tag
                        }, null, 8, Dx),
                        ct.value && St.value.length > 0 ? (m(), _("ul", Mx, [
                          (m(!0), _(ae, null, Ce(St.value, (s) => (m(), _("li", {
                            key: s,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-tag-suggestion",
                              onMousedown: d[90] || (d[90] = ke(() => {
                              }, ["prevent"])),
                              onClick: (O) => Dd(s, O)
                            }, v(s), 41, zx)
                          ]))), 128))
                        ])) : F("", !0),
                        l("button", {
                          type: "submit",
                          class: ye(["button secondary library-tag-apply", nn("tag")])
                        }, v(g(b)("library", "Apply tag")), 3)
                      ]),
                      l("label", null, [
                        _e(v(g(b)("library", "Sort")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[91] || (d[91] = (s) => x.sort = s),
                          name: "sort",
                          onChange: jt
                        }, [
                          l("option", Ux, v(g(b)("library", "Title")), 1),
                          l("option", jx, v(g(b)("library", "Date added")), 1),
                          l("option", Bx, v(g(b)("library", "Publication date")), 1),
                          l("option", Hx, v(g(b)("library", "Series")), 1),
                          l("option", Vx, v(g(b)("library", "Recently opened")), 1),
                          l("option", Kx, v(g(b)("library", "Format")), 1)
                        ], 544), [
                          [Jt, x.sort]
                        ])
                      ]),
                      l("label", null, [
                        _e(v(g(b)("library", "View")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[92] || (d[92] = (s) => x.view = s),
                          name: "view",
                          onChange: jt
                        }, [
                          l("option", Gx, v(g(b)("library", "Compact")), 1),
                          l("option", qx, v(g(b)("library", "List")), 1)
                        ], 544), [
                          [Jt, x.view]
                        ])
                      ])
                    ]),
                    l("div", Wx, [
                      He.value.length > 0 ? (m(), _("a", {
                        key: 0,
                        href: os(),
                        class: "button secondary library-mobile-filter-clear",
                        onClick: ke(ss, ["prevent"])
                      }, v(g(b)("library", "Clear all")), 9, Yx)) : F("", !0),
                      l("button", Xx, v(_g.value), 1)
                    ])
                  ], 40, _O)
                ], 32),
                l("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(b)("library", "One catalogue workspace")
                }, [
                  l("div", Jx, [
                    l("section", Qx, [
                      l("h3", {
                        title: g(b)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                      }, v(g(b)("library", "Collections")), 9, e3),
                      l("form", {
                        method: "post",
                        action: Ba.value,
                        class: "library-saved-collection-save-form",
                        title: vc.value ? "" : g(b)("library", "Choose search terms or filters first, then save them as a custom collection.")
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: zt.value
                        }, null, 8, i3),
                        l("input", {
                          type: "hidden",
                          name: "savedCollectionFilters",
                          value: ob.value
                        }, null, 8, n3),
                        l("label", null, [
                          l("span", a3, v(g(b)("library", "Collection name")), 1),
                          l("input", {
                            type: "text",
                            name: "savedCollectionName",
                            placeholder: g(b)("library", "e.g. Bremen photo books"),
                            disabled: !vc.value,
                            autocomplete: "off"
                          }, null, 8, r3)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          disabled: !vc.value,
                          title: g(b)("library", "Save current view")
                        }, v(g(b)("library", "Save")), 9, o3)
                      ], 8, t3)
                    ]),
                    l("form", {
                      method: "get",
                      class: "library-quick-filter-bar library-catalogue-toolbar",
                      "aria-label": g(b)("library", "Catalogue toolbar"),
                      onSubmit: ke(jt, ["prevent"])
                    }, [
                      (m(!0), _(ae, null, Ce(Cg.value, (s) => (m(), _("input", {
                        key: s.key,
                        type: "hidden",
                        name: s.key,
                        value: s.value
                      }, null, 8, l3))), 128)),
                      l("label", c3, [
                        _e(v(g(b)("library", "Sort")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[93] || (d[93] = (s) => x.sort = s),
                          name: "sort",
                          onChange: jt
                        }, [
                          l("option", u3, v(g(b)("library", "Title")), 1),
                          l("option", d3, v(g(b)("library", "Date added")), 1),
                          l("option", f3, v(g(b)("library", "Publication date")), 1),
                          l("option", p3, v(g(b)("library", "Series")), 1),
                          l("option", h3, v(g(b)("library", "Recently opened")), 1),
                          l("option", v3, v(g(b)("library", "Format")), 1)
                        ], 544), [
                          [Jt, x.sort]
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
                          class: ye({ active: S.value === "compact" }),
                          "aria-pressed": S.value === "compact" ? "true" : "false",
                          onClick: d[94] || (d[94] = (s) => Wd("compact"))
                        }, v(g(b)("library", "Compact")), 11, b3),
                        l("button", {
                          type: "button",
                          "data-library-view-mode": "list",
                          class: ye({ active: S.value === "list" }),
                          "aria-pressed": S.value === "list" ? "true" : "false",
                          onClick: d[95] || (d[95] = (s) => Wd("list"))
                        }, v(g(b)("library", "List")), 11, m3)
                      ], 8, g3)
                    ], 40, s3)
                  ]),
                  Ai.value.length > 0 ? (m(), _("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(b)("library", "Batch actions for selected publications")
                  }, [
                    l("summary", _3, [
                      d[119] || (d[119] = l("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      l("span", {
                        class: "library-workspace-panel-title",
                        title: g(b)("library", "Batch actions for selected publications")
                      }, v(g(b)("library", "Batch actions")), 9, w3),
                      l("small", S3, v(g(b)("library", "Batch actions for selected publications")), 1),
                      l("b", C3, v(g(ui)("library", "%n publication selected", "%n publications selected", Ai.value.length)), 1)
                    ]),
                    l("p", T3, v(g(ui)("library", "%n publication selected", "%n publications selected", Ai.value.length)), 1),
                    l("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: Ag
                    }, [
                      l("form", {
                        method: "post",
                        action: ji.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: zt.value
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
                        action: Ko.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: zt.value
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
                        action: Ma.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: zt.value
                        }, null, 8, P3),
                        (m(!0), _(ae, null, Ce(Xo.value, (s) => (m(), _("input", {
                          key: `reset-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, $3))), 128)),
                        d[120] || (d[120] = l("input", {
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
                        action: en.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: zt.value
                        }, null, 8, M3),
                        (m(!0), _(ae, null, Ce(Xo.value, (s) => (m(), _("input", {
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
                        action: nc.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: zt.value
                        }, null, 8, Q3),
                        (m(!0), _(ae, null, Ce(Xo.value, (s) => (m(), _("input", {
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
                  ], 8, y3)) : F("", !0)
                ], 8, Zx),
                qo.value ? (m(), _("p", iN, v(qo.value), 1)) : F("", !0),
                Wo.value ? (m(), _("p", nN, v(Wo.value), 1)) : F("", !0),
                Sr.value ? (m(), _("p", aN, v(Sr.value), 1)) : F("", !0),
                l("div", rN, [
                  Nt.loading ? (m(), _("span", oN, v(g(b)("library", "Updating catalogue…")), 1)) : Nt.completed ? (m(), _("span", sN, v(g(ui)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(Z.value.total || 0))), 1)) : F("", !0)
                ]),
                ja.value ? (m(), _("section", lN, [
                  l("p", cN, v(na.value), 1),
                  l("h3", {
                    id: "library-discovery-heading",
                    title: Ua.value ? g(b)("library", "Items by this creator, sorted by publication context when available.") : gr.value ? g(b)("library", "Items from this publication year, sorted by publication date when available.") : g(b)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, v(ia.value), 9, uN),
                  l("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(b)("library", "Discovery summary")
                  }, [
                    l("span", null, v(g(ui)("library", "%n item", "%n items", Z.value.total)), 1),
                    $.value?.earliestYear && $.value?.latestYear ? (m(), _("span", fN, v($.value.earliestYear) + "–" + v($.value.latestYear), 1)) : F("", !0),
                    $.value?.datedCount ? (m(), _("span", pN, v($.value.datedCount) + " " + v(g(b)("library", "dated")), 1)) : F("", !0),
                    $.value?.undatedCount > 0 ? (m(), _("span", hN, v($.value.undatedCount) + " " + v(g(b)("library", "undated")), 1)) : F("", !0)
                  ], 8, dN),
                  za.value && $.value ? (m(), _("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(b)("library", "Publication issue/date context")
                  }, [
                    l("strong", null, v(g(b)("library", "Publication contents")), 1),
                    l("span", null, v(g(ui)("library", "%n item", "%n items", $.value.itemCount)), 1),
                    $.value.earliestYear && $.value.latestYear ? (m(), _("span", gN, v($.value.earliestYear) + "–" + v($.value.latestYear), 1)) : F("", !0),
                    l("span", null, v($.value.datedCount) + " " + v(g(b)("library", "with issue/date coverage")), 1),
                    $.value.undatedCount > 0 ? (m(), _("span", bN, v($.value.undatedCount) + " " + v(g(b)("library", "without dates yet")), 1)) : F("", !0),
                    l("span", null, v(g(b)("library", "read-only grouping")), 1)
                  ], 8, vN)) : F("", !0),
                  za.value && $.value?.issueGroups?.length ? (m(), _("section", mN, [
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
                      (m(!0), _(ae, null, Ce($.value.issueGroups, (s) => (m(), _("a", {
                        key: `strip-${s.label}`,
                        class: "library-issue-strip-card",
                        href: s.items?.[0]?.detailsUrl || "#"
                      }, [
                        l("span", null, v(s.label), 1),
                        l("strong", null, v(s.items?.[0]?.issueLabel || g(b)("library", "Issue")), 1),
                        l("small", null, v(g(ui)("library", "%n item", "%n items", s.items?.length || 0)), 1)
                      ], 8, SN))), 128))
                    ], 8, wN),
                    $.value.gapRanges?.length ? (m(), _("p", CN, v(g(b)("library", "Gap")) + ": " + v($.value.gapRanges.join(", ")), 1)) : F("", !0),
                    (m(!0), _(ae, null, Ce($.value.issueGroups, (s) => (m(), _("div", {
                      key: s.label,
                      class: "library-publication-issue-group"
                    }, [
                      l("h5", null, v(s.label), 1),
                      l("ol", null, [
                        (m(!0), _(ae, null, Ce(s.items, (O, Q) => (m(), _("li", {
                          key: O.itemId
                        }, [
                          l("span", TN, v(O.issueLabel), 1),
                          l("a", {
                            href: O.detailsUrl || "#"
                          }, v(O.title), 9, kN),
                          l("small", null, [
                            _e(v(O.publicationType), 1),
                            O.publicationDate ? (m(), _(ae, { key: 0 }, [
                              _e(" · " + v(O.publicationDate), 1)
                            ], 64)) : F("", !0)
                          ]),
                          l("small", EN, [
                            Q > 0 ? (m(), _(ae, { key: 0 }, [
                              _e(v(g(b)("library", "Previous issue")), 1)
                            ], 64)) : F("", !0),
                            Q > 0 && Q < s.items.length - 1 ? (m(), _(ae, { key: 1 }, [
                              _e(" · ")
                            ], 64)) : F("", !0),
                            Q < s.items.length - 1 ? (m(), _(ae, { key: 2 }, [
                              _e(v(g(b)("library", "Next issue")), 1)
                            ], 64)) : F("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    $.value.unknownIssueItems?.length ? (m(), _("details", AN, [
                      l("summary", {
                        title: g(b)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, v(g(b)("library", "Unknown issue/date")) + " · " + v($.value.unknownIssueItems.length), 9, ON)
                    ])) : F("", !0)
                  ])) : F("", !0),
                  l("p", null, [
                    l("a", {
                      href: ot.value,
                      class: "button secondary library-discovery-back-link"
                    }, v(g(b)("library", "Back to full catalogue")), 9, xN)
                  ])
                ])) : F("", !0),
                l("div", NN, [
                  l("p", LN, v(g(b)("library", "Showing")) + " " + v(Z.value.from) + "–" + v(Z.value.to) + " " + v(g(b)("library", "of")) + " " + v(Z.value.total) + " " + v(g(b)("library", "catalogue items")), 1),
                  l("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(b)("library", "Catalogue pagination")
                  }, [
                    l("span", IN, [
                      _e(v(g(b)("library", "Page")) + " " + v(Z.value.page), 1),
                      Z.value.total > 0 ? (m(), _("span", PN, " · " + v(Z.value.from) + "–" + v(Z.value.to), 1)) : F("", !0)
                    ]),
                    Z.value.previousUrl ? (m(), _("a", {
                      key: 0,
                      href: Z.value.previousUrl
                    }, v(g(b)("library", "Previous")), 9, $N)) : (m(), _("span", FN, v(g(b)("library", "Previous")), 1)),
                    Z.value.nextUrl ? (m(), _("a", {
                      key: 2,
                      href: Z.value.nextUrl
                    }, v(g(b)("library", "Next")), 9, DN)) : (m(), _("span", MN, v(g(b)("library", "Next")), 1))
                  ], 8, RN)
                ]),
                C.value.length === 0 ? (m(), _("div", {
                  key: 4,
                  class: ye(["library-empty-content", { "library-first-run-guidance": ni.value || mr.value, "library-filter-empty-state": ra.value && !ni.value && !mr.value }]),
                  role: "status"
                }, [
                  ni.value ? (m(), _(ae, { key: 0 }, [
                    l("h3", {
                      title: g(b)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, v(g(b)("library", "Start with one Library root")), 9, zN),
                    l("p", UN, [
                      l("a", {
                        href: Ui.value,
                        class: "button primary"
                      }, v(g(b)("library", "Add a Library root")), 9, jN),
                      l("span", BN, v(g(b)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : mr.value ? (m(), _(ae, { key: 1 }, [
                    l("h3", {
                      title: g(b)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, v(g(b)("library", "No enabled Library roots")), 9, HN),
                    l("p", VN, [
                      l("a", {
                        href: Ui.value,
                        class: "button primary"
                      }, v(g(b)("library", "Open Library settings")), 9, KN)
                    ])
                  ], 64)) : ra.value ? (m(), _(ae, { key: 2 }, [
                    l("h3", {
                      title: g(b)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, v(g(b)("library", "No items match these filters")), 9, GN),
                    He.value.length > 0 ? (m(), _("nav", {
                      key: 0,
                      class: "library-empty-filter-chips",
                      "aria-label": g(b)("library", "Remove active filters")
                    }, [
                      (m(!0), _(ae, null, Ce(He.value, (s) => (m(), _("a", {
                        key: `empty-${s.key}`,
                        href: Pr(s.key),
                        class: "library-filter-chip",
                        "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                        onClick: ke((O) => $r(s.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          _e(v(s.label), 1),
                          s.displayValue ? (m(), _(ae, { key: 0 }, [
                            _e(":")
                          ], 64)) : F("", !0)
                        ]),
                        s.displayValue ? (m(), _(ae, { key: 0 }, [
                          d[121] || (d[121] = _e(v(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: s.value
                          }, v(s.displayValue), 9, YN)
                        ], 64)) : F("", !0),
                        d[122] || (d[122] = _e()),
                        d[123] || (d[123] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, WN))), 128))
                    ], 8, qN)) : F("", !0),
                    bt.value ? (m(), _("p", XN, v(g(b)("library", "Try removing {filter}.", { filter: bt.value.displayValue ? `${bt.value.label}: ${bt.value.displayValue}` : bt.value.label })), 1)) : F("", !0),
                    l("p", ZN, [
                      xt.value ? (m(), _("a", {
                        key: 0,
                        href: nb(),
                        class: "button secondary library-empty-clear-search",
                        onClick: d[96] || (d[96] = ke((s) => $r("q"), ["prevent"]))
                      }, v(g(b)("library", "Clear search")), 9, JN)) : F("", !0)
                    ])
                  ], 64)) : (m(), _(ae, { key: 3 }, [
                    l("h3", {
                      title: g(b)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, v(g(b)("library", "No catalogue items yet")), 9, QN),
                    l("p", eL, [
                      l("a", {
                        href: Ui.value,
                        class: "button primary"
                      }, v(g(b)("library", "Run a scan from settings")), 9, tL)
                    ])
                  ], 64))
                ], 2)) : F("", !0),
                C.value.length > 0 ? (m(), _("label", iL, [
                  l("input", {
                    type: "checkbox",
                    checked: Ai.value.length === C.value.length,
                    onChange: kg
                  }, null, 40, nL),
                  l("span", null, v(g(b)("library", "Select all publications on this page")), 1)
                ])) : F("", !0),
                C.value.length > 0 && S.value === "list" ? (m(), _("ul", aL, [
                  (m(!0), _(ae, null, Ce(C.value, (s) => (m(), _("li", {
                    key: s.id,
                    class: ye(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Jo.value.has(Number(s.id)), "library-catalogue-list-row--open": Rn.value && Number(oa.value) === Number(s.id) }])
                  }, [
                    l("label", rL, [
                      l("input", {
                        type: "checkbox",
                        checked: Jo.value.has(Number(s.id)),
                        "aria-label": `${g(b)("library", "Select publication")}: ${s.title}`,
                        onChange: (O) => wd(s.id, O.currentTarget.checked)
                      }, null, 40, oL)
                    ]),
                    l("button", {
                      type: "button",
                      class: "library-catalogue-list-cover",
                      "aria-label": `${g(b)("library", "Details")}: ${s.title}`,
                      onClick: (O) => xi(s, O)
                    }, [
                      l("img", {
                        src: s.coverUrl,
                        alt: "",
                        loading: "lazy"
                      }, null, 8, lL)
                    ], 8, sL),
                    l("div", cL, [
                      l("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (O) => xi(s, O)
                      }, [
                        l("bdi", dL, v(s.title), 1)
                      ], 8, uL),
                      s.creators ? (m(), _("span", fL, [
                        l("bdi", pL, v(s.creators), 1)
                      ])) : F("", !0)
                    ]),
                    l("dl", hL, [
                      s.publication ? (m(), _("div", vL, [
                        l("dt", null, v(g(b)("library", "Series")), 1),
                        l("dd", null, [
                          l("bdi", gL, v(s.publication), 1)
                        ])
                      ])) : F("", !0),
                      s.publicationDate ? (m(), _("div", bL, [
                        l("dt", null, v(g(b)("library", "Publication date")), 1),
                        l("dd", null, v(s.publicationDate), 1)
                      ])) : F("", !0),
                      s.extension || s.publicationType ? (m(), _("div", mL, [
                        l("dt", null, v(g(b)("library", "Format")), 1),
                        l("dd", null, [
                          l("bdi", {
                            class: ye(s.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: s.extension ? "ltr" : "auto"
                          }, v(s.extension ? ls(s.extension) : s.publicationType), 11, yL)
                        ])
                      ])) : F("", !0),
                      s.shelf ? (m(), _("div", _L, [
                        l("dt", null, v(g(b)("library", "Shelf")), 1),
                        l("dd", null, [
                          l("bdi", wL, v(s.shelf), 1)
                        ])
                      ])) : F("", !0)
                    ]),
                    l("div", SL, [
                      l("a", {
                        class: "button primary",
                        href: s.openUrl,
                        onClick: (O) => Nn(s, O)
                      }, v(g(b)("library", "Open")), 9, CL),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (O) => xi(s, O)
                      }, v(g(b)("library", "Details")), 9, TL)
                    ])
                  ], 2))), 128))
                ])) : C.value.length > 0 ? (m(), _("div", {
                  key: 7,
                  class: ye(["library-cover-gallery", P.value])
                }, [
                  (m(!0), _(ae, null, Ce(C.value, (s) => (m(), _("article", {
                    key: s.id,
                    class: ye(["library-cover-card", { "library-cover-card--cover-loaded": Fr(s) === "loaded", "library-cover-card--cover-error": Fr(s) === "error", "library-cover-card--selected": Jo.value.has(Number(s.id)), "library-cover-card--open": Rn.value && Number(oa.value) === Number(s.id) }])
                  }, [
                    l("label", kL, [
                      l("input", {
                        type: "checkbox",
                        checked: Jo.value.has(Number(s.id)),
                        "aria-label": `${g(b)("library", "Select publication")}: ${s.title}`,
                        onChange: (O) => wd(s.id, O.currentTarget.checked)
                      }, null, 40, EL)
                    ]),
                    l("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${s.id} library-card-title-${s.id}`,
                      "aria-expanded": Rn.value && Number(oa.value) === Number(s.id) ? "true" : "false",
                      onClick: (O) => xi(s, O)
                    }, [
                      l("span", {
                        id: `library-details-action-${s.id}`,
                        class: "hidden-visually"
                      }, v(g(b)("library", "Details")), 9, OL),
                      l("span", xL, [
                        Fr(s) === "loading" ? (m(), _("span", NL)) : F("", !0),
                        l("img", {
                          class: ye(["library-cover-image", { "library-cover-image--loaded": Fr(s) === "loaded" }]),
                          src: s.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (O) => fb(s),
                          onError: (O) => pb(s)
                        }, null, 42, LL),
                        Fr(s) === "error" ? (m(), _("span", RL, v(g(b)("library", "Cover unavailable")), 1)) : F("", !0)
                      ])
                    ], 8, AL),
                    l("form", {
                      method: "post",
                      action: s.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: ke((O) => Jd(s, O), ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: zt.value
                      }, null, 8, PL),
                      d[124] || (d[124] = l("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      l("input", {
                        type: "hidden",
                        name: "starred",
                        value: s.starred ? "0" : "1"
                      }, null, 8, $L),
                      l("button", {
                        type: "submit",
                        class: ye(["library-cover-star-button", { "library-cover-star-button--starred": s.starred }]),
                        "aria-pressed": s.starred ? "true" : "false",
                        title: s.starred ? g(b)("library", "Unstar this publication") : g(b)("library", "Star this publication"),
                        "aria-label": s.starred ? g(b)("library", "Unstar this publication") : g(b)("library", "Star this publication"),
                        "aria-busy": Dr[s.id] ? "true" : void 0,
                        disabled: Dr[s.id],
                        onClick: ke((O) => Jd(s, O), ["prevent"])
                      }, v(s.starred ? "★" : "☆"), 11, FL),
                      Mr[s.id] ? (m(), _("span", {
                        key: 0,
                        "data-library-star-error": s.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, v(Mr[s.id]), 9, DL)) : F("", !0)
                    ], 40, IL),
                    l("div", ML, [
                      l("div", zL, [
                        l("h3", {
                          id: `library-card-title-${s.id}`
                        }, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (O) => xi(s, O)
                          }, [
                            l("bdi", BL, v(s.title), 1)
                          ], 8, jL)
                        ], 8, UL),
                        s.creators ? (m(), _("p", HL, [
                          l("bdi", VL, v(s.creators), 1)
                        ])) : F("", !0),
                        Yd(s) ? (m(), _("p", KL, [
                          l("bdi", GL, v(Yd(s)), 1)
                        ])) : F("", !0)
                      ])
                    ])
                  ], 2))), 128))
                ], 2)) : F("", !0),
                C.value.length > 0 ? (m(), _("nav", {
                  key: 8,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(b)("library", "Catalogue pagination")
                }, [
                  l("span", WL, [
                    _e(v(g(b)("library", "Page")) + " " + v(Z.value.page), 1),
                    Z.value.total > 0 ? (m(), _("span", YL, " · " + v(Z.value.from) + "–" + v(Z.value.to), 1)) : F("", !0)
                  ]),
                  Z.value.previousUrl ? (m(), _("a", {
                    key: 0,
                    href: Z.value.previousUrl
                  }, v(g(b)("library", "Previous")), 9, XL)) : (m(), _("span", ZL, v(g(b)("library", "Previous")), 1)),
                  Z.value.nextUrl ? (m(), _("a", {
                    key: 2,
                    href: Z.value.nextUrl
                  }, v(g(b)("library", "Next")), 9, JL)) : (m(), _("span", QL, v(g(b)("library", "Next")), 1))
                ], 8, qL)) : F("", !0)
              ], 10, vO))
            ], 8, YE)
          ]),
          _: 1
        }),
        Ae(g(GT), {
          ref_key: "sidebarComponent",
          ref: la,
          class: "library-native-item-sidebar",
          open: Rn.value,
          "no-toggle": "",
          loading: Xt.loading,
          name: Se.value?.title || g(b)("library", "Publication details"),
          subname: Se.value?.creators || "",
          role: ca.value ? "dialog" : void 0,
          "aria-modal": ca.value ? "true" : void 0,
          "aria-labelledby": ca.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": ca.value && Se.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: Nd,
          onClosed: Mg,
          onClose: xr
        }, {
          default: Pe(() => [
            l("div", eR, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: Sd,
                class: "hidden-visually",
                tabindex: "-1"
              }, v(Se.value?.title || g(b)("library", "Publication details")), 513),
              Xt.loading && !Se.value ? (m(), _("p", tR, v(g(b)("library", "Loading publication details…")), 1)) : Xt.error ? (m(), _("div", {
                key: 1,
                class: "library-sidebar-state",
                role: Xt.missing ? "status" : "alert"
              }, [
                l("p", null, v(Xt.error), 1),
                Xt.missing ? F("", !0) : (m(), _("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: d[97] || (d[97] = (s) => Or(oa.value, { historyMode: "none" }))
                }, v(g(b)("library", "Try again")), 1))
              ], 8, iR)) : Se.value ? (m(), _(ae, { key: 2 }, [
                l("p", nR, v(g(b)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", aR, [
                  l("span", rR, v(g(b)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: Se.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, oR),
                  l("div", sR, [
                    l("p", lR, [
                      l("bdi", cR, v(Se.value.publicationType || g(b)("library", "Publication")), 1),
                      Se.value.extension ? (m(), _("span", uR, [
                        d[125] || (d[125] = _e(" · ", -1)),
                        l("bdi", dR, v(ls(Se.value.extension)), 1)
                      ])) : F("", !0)
                    ]),
                    l("div", fR, [
                      l("a", {
                        class: "button primary",
                        href: Se.value.openUrl,
                        onClick: d[98] || (d[98] = (s) => Nn(Se.value, s))
                      }, v(g(b)("library", "Open")), 9, pR),
                      Ae(g(ud), {
                        "aria-label": g(b)("library", "File and maintenance actions")
                      }, {
                        default: Pe(() => [
                          Ae(g(tu), {
                            href: Se.value.filesUrl
                          }, {
                            default: Pe(() => [
                              _e(v(g(b)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          Ae(g(tu), {
                            href: Se.value.downloadUrl
                          }, {
                            default: Pe(() => [
                              _e(v(g(b)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          Ae(g(tu), {
                            href: Se.value.detailsUrl
                          }, {
                            default: Pe(() => [
                              _e(v(g(b)("library", "Maintenance (legacy)")), 1)
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
                  (m(), _(ae, null, Ce(xg, (s) => l("button", {
                    key: s.key,
                    type: "button",
                    class: ye({ active: sa.value === s.key }),
                    "aria-current": sa.value === s.key ? "page" : void 0,
                    onClick: (O) => sa.value = s.key
                  }, v(g(b)("library", s.label)), 11, vR)), 64))
                ], 8, hR),
                sa.value === "overview" ? (m(), _("section", gR, [
                  l("h3", bR, v(g(b)("library", "Overview")), 1),
                  Cd.value ? (m(), _("p", mR, [
                    l("bdi", yR, v(Cd.value), 1)
                  ])) : F("", !0),
                  l("dl", _R, [
                    Se.value.publication ? (m(), _("div", wR, [
                      l("dt", null, v(g(b)("library", "Series")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: is("publication", Se.value.publication),
                          title: g(b)("library", "Filter catalogue by this series"),
                          onClick: d[99] || (d[99] = (s) => ns(s, "publication", Se.value.publication))
                        }, [
                          l("bdi", CR, v(Se.value.publication), 1)
                        ], 8, SR)
                      ])
                    ])) : F("", !0),
                    Se.value.publicationDate ? (m(), _("div", TR, [
                      l("dt", null, v(g(b)("library", "Date")), 1),
                      l("dd", null, [
                        ua.value ? (m(), _("a", {
                          key: 0,
                          class: "library-detail-facet-link",
                          href: is("year", ua.value),
                          title: g(b)("library", "Filter catalogue by this publication year"),
                          onClick: d[100] || (d[100] = (s) => ns(s, "year", ua.value))
                        }, v(ua.value), 9, kR)) : F("", !0),
                        ua.value && Se.value.publicationDate !== ua.value ? (m(), _("span", ER, " · ")) : F("", !0),
                        Se.value.publicationDate !== ua.value ? (m(), _("span", AR, v(Se.value.publicationDate), 1)) : F("", !0)
                      ])
                    ])) : F("", !0),
                    Se.value.publisher ? (m(), _("div", OR, [
                      l("dt", null, v(g(b)("library", "Publisher")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: is("publisher", Se.value.publisher),
                          title: g(b)("library", "Filter catalogue by this publisher"),
                          onClick: d[101] || (d[101] = (s) => ns(s, "publisher", Se.value.publisher))
                        }, [
                          l("bdi", NR, v(Se.value.publisher), 1)
                        ], 8, xR)
                      ])
                    ])) : F("", !0),
                    Td.value.length ? (m(), _("div", LR, [
                      l("dt", null, v(g(b)("library", "Language")), 1),
                      l("dd", RR, [
                        (m(!0), _(ae, null, Ce(Td.value, (s) => (m(), _("a", {
                          key: s,
                          class: "library-detail-facet-link",
                          href: is("language", s),
                          title: g(b)("library", "Filter catalogue by this language"),
                          onClick: (O) => ns(O, "language", s)
                        }, [
                          l("bdi", PR, v(s), 1)
                        ], 8, IR))), 128))
                      ])
                    ])) : F("", !0),
                    Se.value.shelf ? (m(), _("div", $R, [
                      l("dt", null, v(g(b)("library", "Shelf")), 1),
                      l("dd", null, v(Se.value.shelf), 1)
                    ])) : F("", !0)
                  ])
                ])) : sa.value === "metadata" ? (m(), _("section", FR, [
                  l("h3", DR, v(g(b)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: ke(Fg, ["prevent"])
                  }, [
                    l("label", null, [
                      _e(v(g(b)("library", "Title")), 1),
                      Ie(l("input", {
                        "onUpdate:modelValue": d[102] || (d[102] = (s) => Ut.title = s),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [dt, Ut.title]
                      ])
                    ]),
                    l("label", null, [
                      _e(v(g(b)("library", "Publication date")), 1),
                      Ie(l("input", {
                        "onUpdate:modelValue": d[103] || (d[103] = (s) => Ut.publicationDate = s),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(b)("library", "e.g. 2026")
                      }, null, 8, MR), [
                        [dt, Ut.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, v(g(b)("library", "Identifiers")), 1),
                      (m(!0), _(ae, null, Ce(Ut.identifiers, (s, O) => (m(), _("div", {
                        key: O,
                        class: "library-sidebar-identifier"
                      }, [
                        Ie(l("input", {
                          "onUpdate:modelValue": (Q) => s.scheme = Q,
                          "aria-label": g(b)("library", "Identifier type"),
                          placeholder: g(b)("library", "Identifier type")
                        }, null, 8, zR), [
                          [dt, s.scheme]
                        ]),
                        Ie(l("input", {
                          "onUpdate:modelValue": (Q) => s.displayValue = Q,
                          "aria-label": g(b)("library", "Identifier value")
                        }, null, 8, UR), [
                          [dt, s.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (Q) => $g(O)
                        }, v(g(b)("library", "Remove")), 9, jR)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Pg
                      }, v(g(b)("library", "Add identifier")), 1)
                    ]),
                    l("p", BR, v(g(b)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    Oi.error ? (m(), _("p", HR, v(Oi.error), 1)) : Oi.saved ? (m(), _("p", VR, v(g(b)("library", "Metadata saved.")), 1)) : F("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Oi.saving
                    }, v(Oi.saving ? g(b)("library", "Saving…") : g(b)("library", "Save metadata")), 9, KR)
                  ], 32),
                  as(Se.value).length ? (m(), _("section", GR, [
                    l("h4", qR, v(g(b)("library", "Scanner suggestions")), 1),
                    l("p", WR, v(g(b)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    l("dl", null, [
                      (m(!0), _(ae, null, Ce(as(Se.value), (s) => (m(), _("div", {
                        key: s.field
                      }, [
                        l("dt", null, v(s.field) + " · " + v(s.sourceProvenance), 1),
                        l("dd", null, [
                          _e(v(g(b)("library", "Current")) + ": " + v(s.currentValue || "—"), 1),
                          d[126] || (d[126] = l("br", null, null, -1)),
                          _e(v(g(b)("library", "Suggestion")) + ": " + v(s.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : F("", !0)
                ])) : (m(), _("section", YR, [
                  l("h3", XR, v(g(b)("library", "Activity")), 1),
                  l("dl", ZR, [
                    l("div", null, [
                      l("dt", null, v(g(b)("library", "Scan status")), 1),
                      l("dd", null, v(Se.value.scanStatus || "—"), 1)
                    ]),
                    Se.value.workflowStatus ? (m(), _("div", JR, [
                      l("dt", null, v(g(b)("library", "Workflow")), 1),
                      l("dd", null, v(Se.value.workflowStatus), 1)
                    ])) : F("", !0),
                    Se.value.metadataSource ? (m(), _("div", QR, [
                      l("dt", null, v(g(b)("library", "Metadata source")), 1),
                      l("dd", null, v(Se.value.metadataSource), 1)
                    ])) : F("", !0),
                    Se.value.cachedPath ? (m(), _("div", e4, [
                      l("dt", null, v(g(b)("library", "File")), 1),
                      l("dd", t4, [
                        Se.value.openUrl ? (m(), _("a", {
                          key: 0,
                          href: Se.value.openUrl,
                          onClick: d[104] || (d[104] = (s) => Nn(Se.value, s))
                        }, [
                          l("bdi", n4, v(Se.value.cachedPath), 1)
                        ], 8, i4)) : (m(), _("bdi", a4, v(Se.value.cachedPath), 1))
                      ])
                    ])) : F("", !0)
                  ])
                ])),
                l("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": g(b)("library", "Browse neighbouring items")
                }, [
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !es.value,
                    onClick: d[105] || (d[105] = (s) => rs(es.value))
                  }, v(g(b)("library", "Previous item")), 9, o4),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !ts.value,
                    onClick: d[106] || (d[106] = (s) => rs(ts.value))
                  }, v(g(b)("library", "Next item")), 9, s4)
                ], 8, r4)
              ], 64)) : F("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function f4() {
  window.LibraryStartupWatchdog?.fail();
}
function p4(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = Ju("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !p4(e))
    throw new Error("Library startup prerequisites are unavailable");
  const i = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Jy(d4, { state: i }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  f4(), console.error("[library] Vue startup failed", e);
}
