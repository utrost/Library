// @__NO_SIDE_EFFECTS__
function Uc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ve = {}, Ba = [], bn = () => {
}, Tf = () => !1, Yo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Xo = (e) => e.startsWith("onUpdate:"), vt = Object.assign, Bc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Cv = Object.prototype.hasOwnProperty, qe = (e, t) => Cv.call(e, t), we = Array.isArray, Di = (e) => ds(e) === "[object Map]", ba = (e) => ds(e) === "[object Set]", Lu = (e) => ds(e) === "[object Date]", xe = (e) => typeof e == "function", nt = (e) => typeof e == "string", Ln = (e) => typeof e == "symbol", Ye = (e) => e !== null && typeof e == "object", Ef = (e) => (Ye(e) || xe(e)) && xe(e.then) && xe(e.catch), Af = Object.prototype.toString, ds = (e) => Af.call(e), Tv = (e) => ds(e).slice(8, -1), kf = (e) => ds(e) === "[object Object]", Hc = (e) => nt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lr = /* @__PURE__ */ Uc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Ev = /-\w/g, Ft = Zo(
  (e) => e.replace(Ev, (t) => t.slice(1).toUpperCase())
), Av = /\B([A-Z])/g, bi = Zo(
  (e) => e.replace(Av, "-$1").toLowerCase()
), Jo = Zo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Cl = Zo(
  (e) => e ? `on${Jo(e)}` : ""
), At = (e, t) => !Object.is(e, t), Hs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Of = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Qo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, kv = (e) => {
  const t = nt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ru;
const el = () => Ru || (Ru = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function on(e) {
  if (we(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = nt(i) ? Lv(i) : on(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (nt(e) || Ye(e))
    return e;
}
const Ov = /;(?![^(]*\))/g, Nv = /:([^]+)/, xv = /\/\*[^]*?\*\//g;
function Lv(e) {
  const t = {};
  return e.replace(xv, "").split(Ov).forEach((n) => {
    if (n) {
      const i = n.split(Nv);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ee(e) {
  let t = "";
  if (nt(e))
    t = e;
  else if (we(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ee(e[n]);
      i && (t += i + " ");
    }
  else if (Ye(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Ws(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !nt(t) && (e.class = Ee(t)), n && (e.style = on(n)), e;
}
const Rv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Iv = /* @__PURE__ */ Uc(Rv);
function Nf(e) {
  return !!e || e === "";
}
function Pv(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = zi(e[i], t[i]);
  return n;
}
function Iu(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (!i[s] && zi(a, n[s])) {
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
  let n = Lu(e), i = Lu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Ln(e), i = Ln(t), n || i)
    return e === t;
  if (n = we(e), i = we(t), n || i)
    return n && i ? Pv(e, t) : !1;
  if (n = Ye(e), i = Ye(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = Di(e), i = Di(t), n || i || (n = ba(e), i = ba(t), n || i))
      return n && i ? Iu(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const s in e) {
      const o = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (o && !l || !o && l || !zi(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Dv(e, t) {
  return e.findIndex((n) => zi(n, t));
}
const xf = (e) => !!(e && e.__v_isRef === !0), p = (e) => nt(e) ? e : e == null ? "" : we(e) || Ye(e) && (e.toString === Af || !xe(e.toString)) ? xf(e) ? p(e.value) : JSON.stringify(e, Lf, 2) : String(e), Lf = (e, t) => xf(t) ? Lf(e, t.value) : Di(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[Tl(i, r) + " =>"] = a, n),
    {}
  )
} : ba(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Tl(n))
} : Ln(t) ? Tl(t) : Ye(t) && !we(t) && !kf(t) ? String(t) : t, Tl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ln(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function $v(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Et;
class Mv {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Et && (Et.active ? (this.parent = Et, this.index = (Et.scopes || (Et.scopes = [])).push(
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
        const i = this.scopes.slice();
        for (t = 0, n = i.length; t < n; t++)
          i[t].pause();
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
        const a = this.scopes.slice();
        for (t = 0, n = a.length; t < n; t++)
          a[t].resume();
      }
      const i = this.effects.slice();
      for (t = 0, n = i.length; t < n; t++)
        i[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Et;
      try {
        return Et = this, t();
      } finally {
        Et = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Et, Et = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Et === this)
        Et = this.prevScope;
      else {
        let t = Et;
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
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const a = this.scopes.slice();
        for (n = 0, i = a.length; n < i; n++)
          a[n].stop(!0);
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
function Fv() {
  return Et;
}
let tt;
const El = /* @__PURE__ */ new WeakSet();
class Rf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Et && (Et.active ? Et.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, El.has(this) && (El.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Pf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Pu(this), Df(this);
    const t = tt, n = Nn;
    tt = this, Nn = !0;
    try {
      return this.fn();
    } finally {
      $f(this), tt = t, Nn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Gc(t);
      this.deps = this.depsTail = void 0, Pu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? El.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    oc(this) && this.run();
  }
  get dirty() {
    return oc(this);
  }
}
let If = 0, Rr, Ir;
function Pf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ir, Ir = e;
    return;
  }
  e.next = Rr, Rr = e;
}
function jc() {
  If++;
}
function Vc() {
  if (--If > 0)
    return;
  if (Ir) {
    let t = Ir;
    for (Ir = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Rr; ) {
    let t = Rr;
    for (Rr = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Df(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function $f(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Gc(i), zv(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function oc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Mf(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Mf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wr) || (e.globalVersion = Wr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !oc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = tt, i = Nn;
  tt = e, Nn = !0;
  try {
    Df(e);
    const a = e.fn(e._value);
    (t.version === 0 || At(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    tt = n, Nn = i, $f(e), e.flags &= -3;
  }
}
function Gc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Gc(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function zv(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Nn = !0;
const Ff = [];
function pi() {
  Ff.push(Nn), Nn = !1;
}
function vi() {
  const e = Ff.pop();
  Nn = e === void 0 ? !0 : e;
}
function Pu(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = tt;
    tt = void 0;
    try {
      t();
    } finally {
      tt = n;
    }
  }
}
let Wr = 0;
class Uv {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class tl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!tt || !Nn || tt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== tt)
      n = this.activeLink = new Uv(tt, this), tt.deps ? (n.prevDep = tt.depsTail, tt.depsTail.nextDep = n, tt.depsTail = n) : tt.deps = tt.depsTail = n, zf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = tt.depsTail, n.nextDep = void 0, tt.depsTail.nextDep = n, tt.depsTail = n, tt.deps === n && (tt.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Wr++, this.notify(t);
  }
  notify(t) {
    jc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Vc();
    }
  }
}
function zf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        zf(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const lc = /* @__PURE__ */ new WeakMap(), va = /* @__PURE__ */ Symbol(
  ""
), cc = /* @__PURE__ */ Symbol(
  ""
), qr = /* @__PURE__ */ Symbol(
  ""
);
function Dt(e, t, n) {
  if (Nn && tt) {
    let i = lc.get(e);
    i || lc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new tl()), a.map = i, a.key = n), a.track();
  }
}
function oi(e, t, n, i, a, r) {
  const s = lc.get(e);
  if (!s) {
    Wr++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (jc(), t === "clear")
    s.forEach(o);
  else {
    const l = we(e), d = l && Hc(n);
    if (l && n === "length") {
      const u = Number(i);
      s.forEach((h, S) => {
        (S === "length" || S === qr || !Ln(S) && S >= u) && o(h);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && o(s.get(n)), d && o(s.get(qr)), t) {
        case "add":
          l ? d && o(s.get("length")) : (o(s.get(va)), Di(e) && o(s.get(cc)));
          break;
        case "delete":
          l || (o(s.get(va)), Di(e) && o(s.get(cc)));
          break;
        case "set":
          Di(e) && o(s.get(va));
          break;
      }
  }
  Vc();
}
function Ia(e) {
  const t = /* @__PURE__ */ Ke(e);
  return t === e ? t : (Dt(t, "iterate", qr), /* @__PURE__ */ yn(e) ? t : t.map(Rn));
}
function nl(e) {
  return Dt(e = /* @__PURE__ */ Ke(e), "iterate", qr), e;
}
function jn(e, t) {
  return /* @__PURE__ */ gi(e) ? Ya(/* @__PURE__ */ ga(e) ? Rn(t) : t) : Rn(t);
}
const Bv = {
  __proto__: null,
  [Symbol.iterator]() {
    return Al(this, Symbol.iterator, (e) => jn(this, e));
  },
  concat(...e) {
    return Ia(this).concat(
      ...e.map((t) => we(t) ? Ia(t) : t)
    );
  },
  entries() {
    return Al(this, "entries", (e) => (e[1] = jn(this, e[1]), e));
  },
  every(e, t) {
    return Qn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Qn(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => jn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Qn(
      this,
      "find",
      e,
      t,
      (n) => jn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Qn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Qn(
      this,
      "findLast",
      e,
      t,
      (n) => jn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Qn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Qn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return kl(this, "includes", e);
  },
  indexOf(...e) {
    return kl(this, "indexOf", e);
  },
  join(e) {
    return Ia(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return kl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Qn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return vr(this, "pop");
  },
  push(...e) {
    return vr(this, "push", e);
  },
  reduce(e, ...t) {
    return Du(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Du(this, "reduceRight", e, t);
  },
  shift() {
    return vr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Qn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return vr(this, "splice", e);
  },
  toReversed() {
    return Ia(this).toReversed();
  },
  toSorted(e) {
    return Ia(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ia(this).toSpliced(...e);
  },
  unshift(...e) {
    return vr(this, "unshift", e);
  },
  values() {
    return Al(this, "values", (e) => jn(this, e));
  }
};
function Al(e, t, n) {
  const i = nl(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ yn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const Hv = Array.prototype;
function Qn(e, t, n, i, a, r) {
  const s = nl(e), o = s !== e && !/* @__PURE__ */ yn(e), l = s[t];
  if (l !== Hv[t]) {
    const h = l.apply(e, r);
    return o ? Rn(h) : h;
  }
  let d = n;
  s !== e && (o ? d = function(h, S) {
    return n.call(this, jn(e, h), S, e);
  } : n.length > 2 && (d = function(h, S) {
    return n.call(this, h, S, e);
  }));
  const u = l.call(s, d, i);
  return o && a ? a(u) : u;
}
function Du(e, t, n, i) {
  const a = nl(e), r = a !== e && !/* @__PURE__ */ yn(e);
  let s = n, o = !1;
  a !== e && (r ? (o = i.length === 0, s = function(d, u, h) {
    return o && (o = !1, d = jn(e, d)), n.call(this, d, jn(e, u), h, e);
  }) : n.length > 3 && (s = function(d, u, h) {
    return n.call(this, d, u, h, e);
  }));
  const l = a[t](s, ...i);
  return o ? jn(e, l) : l;
}
function kl(e, t, n) {
  const i = /* @__PURE__ */ Ke(e);
  Dt(i, "iterate", qr);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ qc(n[0]) ? (n[0] = /* @__PURE__ */ Ke(n[0]), i[t](...n)) : a;
}
function vr(e, t, n = []) {
  pi(), jc();
  const i = (/* @__PURE__ */ Ke(e))[t].apply(e, n);
  return Vc(), vi(), i;
}
const jv = /* @__PURE__ */ Uc("__proto__,__v_isRef,__isVue"), Uf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ln)
);
function Vv(e) {
  Ln(e) || (e = String(e));
  const t = /* @__PURE__ */ Ke(this);
  return Dt(t, "has", e), t.hasOwnProperty(e);
}
class Bf {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return i === (a ? r ? eg : Gf : r ? Vf : jf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = we(t);
    if (!a) {
      let l;
      if (s && (l = Bv[n]))
        return l;
      if (n === "hasOwnProperty")
        return Vv;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ zt(t) ? t : i
    );
    if ((Ln(n) ? Uf.has(n) : jv(n)) || (a || Dt(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ zt(o)) {
      const l = s && Hc(n) ? o : o.value;
      return a && Ye(l) ? /* @__PURE__ */ Yr(l) : l;
    }
    return Ye(o) ? a ? /* @__PURE__ */ Yr(o) : /* @__PURE__ */ Pt(o) : o;
  }
}
class Hf extends Bf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const s = we(t) && Hc(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ gi(r);
      if (!/* @__PURE__ */ yn(i) && !/* @__PURE__ */ gi(i) && (r = /* @__PURE__ */ Ke(r), i = /* @__PURE__ */ Ke(i)), !s && /* @__PURE__ */ zt(r) && !/* @__PURE__ */ zt(i))
        return d || (r.value = i), !0;
    }
    const o = s ? Number(n) < t.length : qe(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ zt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ke(a) && l && (o ? At(i, r) && oi(t, "set", n, i) : oi(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = qe(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && oi(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Ln(n) || !Uf.has(n)) && Dt(t, "has", n), i;
  }
  ownKeys(t) {
    return Dt(
      t,
      "iterate",
      we(t) ? "length" : va
    ), Reflect.ownKeys(t);
  }
}
class Gv extends Bf {
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
const Kv = /* @__PURE__ */ new Hf(), Wv = /* @__PURE__ */ new Gv(), qv = /* @__PURE__ */ new Hf(!0);
const uc = (e) => e, Os = (e) => Reflect.getPrototypeOf(e);
function Yv(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ke(a), s = Di(r), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, d = a[e](...i), u = n ? uc : t ? Ya : Rn;
    return !t && Dt(
      r,
      "iterate",
      l ? cc : va
    ), vt(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: S } = d.next();
          return S ? { value: h, done: S } : {
            value: o ? [u(h[0]), u(h[1])] : u(h),
            done: S
          };
        }
      }
    );
  };
}
function Ns(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xv(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Ke(r), o = /* @__PURE__ */ Ke(a);
      e || (At(a, o) && Dt(s, "get", a), Dt(s, "get", o));
      const { has: l } = Os(s), d = t ? uc : e ? Ya : Rn;
      if (l.call(s, a))
        return d(r.get(a));
      if (l.call(s, o))
        return d(r.get(o));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Dt(/* @__PURE__ */ Ke(a), "iterate", va), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Ke(r), o = /* @__PURE__ */ Ke(a);
      return e || (At(a, o) && Dt(s, "has", a), Dt(s, "has", o)), a === o ? r.has(a) : r.has(a) || r.has(o);
    },
    forEach(a, r) {
      const s = this, o = s.__v_raw, l = /* @__PURE__ */ Ke(o), d = t ? uc : e ? Ya : Rn;
      return !e && Dt(l, "iterate", va), o.forEach((u, h) => a.call(r, d(u), d(h), s));
    }
  };
  return vt(
    n,
    e ? {
      add: Ns("add"),
      set: Ns("set"),
      delete: Ns("delete"),
      clear: Ns("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ke(this), s = Os(r), o = /* @__PURE__ */ Ke(a), l = !t && !/* @__PURE__ */ yn(a) && !/* @__PURE__ */ gi(a) ? o : a;
        return s.has.call(r, l) || At(a, l) && s.has.call(r, a) || At(o, l) && s.has.call(r, o) || (r.add(l), oi(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ yn(r) && !/* @__PURE__ */ gi(r) && (r = /* @__PURE__ */ Ke(r));
        const s = /* @__PURE__ */ Ke(this), { has: o, get: l } = Os(s);
        let d = o.call(s, a);
        d || (a = /* @__PURE__ */ Ke(a), d = o.call(s, a));
        const u = l.call(s, a);
        return s.set(a, r), d ? At(r, u) && oi(s, "set", a, r) : oi(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ke(this), { has: s, get: o } = Os(r);
        let l = s.call(r, a);
        l || (a = /* @__PURE__ */ Ke(a), l = s.call(r, a)), o && o.call(r, a);
        const d = r.delete(a);
        return l && oi(r, "delete", a, void 0), d;
      },
      clear() {
        const a = /* @__PURE__ */ Ke(this), r = a.size !== 0, s = a.clear();
        return r && oi(
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
    n[a] = Yv(a, e, t);
  }), n;
}
function Kc(e, t) {
  const n = Xv(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    qe(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Zv = {
  get: /* @__PURE__ */ Kc(!1, !1)
}, Jv = {
  get: /* @__PURE__ */ Kc(!1, !0)
}, Qv = {
  get: /* @__PURE__ */ Kc(!0, !1)
};
const jf = /* @__PURE__ */ new WeakMap(), Vf = /* @__PURE__ */ new WeakMap(), Gf = /* @__PURE__ */ new WeakMap(), eg = /* @__PURE__ */ new WeakMap();
function tg(e) {
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
function Pt(e) {
  return /* @__PURE__ */ gi(e) ? e : Wc(
    e,
    !1,
    Kv,
    Zv,
    jf
  );
}
// @__NO_SIDE_EFFECTS__
function ng(e) {
  return Wc(
    e,
    !1,
    qv,
    Jv,
    Vf
  );
}
// @__NO_SIDE_EFFECTS__
function Yr(e) {
  return Wc(
    e,
    !0,
    Wv,
    Qv,
    Gf
  );
}
function Wc(e, t, n, i, a) {
  if (!Ye(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = tg(Tv(e));
  if (s === 0)
    return e;
  const o = new Proxy(
    e,
    s === 2 ? i : n
  );
  return a.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function ga(e) {
  return /* @__PURE__ */ gi(e) ? /* @__PURE__ */ ga(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function gi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function qc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ke(t) : e;
}
function ig(e) {
  return !qe(e, "__v_skip") && Object.isExtensible(e) && Of(e, "__v_skip", !0), e;
}
const Rn = (e) => Ye(e) ? /* @__PURE__ */ Pt(e) : e, Ya = (e) => Ye(e) ? /* @__PURE__ */ Yr(e) : e;
// @__NO_SIDE_EFFECTS__
function zt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return Wf(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Kf(e) {
  return Wf(e, !0);
}
function Wf(e, t) {
  return /* @__PURE__ */ zt(e) ? e : new ag(e, t);
}
class ag {
  constructor(t, n) {
    this.dep = new tl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ke(t), this._value = n ? t : Rn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ yn(t) || /* @__PURE__ */ gi(t);
    t = i ? t : /* @__PURE__ */ Ke(t), At(t, n) && (this._rawValue = t, this._value = i ? t : Rn(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ zt(e) ? e.value : e;
}
function di(e) {
  return xe(e) ? e() : g(e);
}
const rg = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ zt(a) && !/* @__PURE__ */ zt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function qf(e) {
  return /* @__PURE__ */ ga(e) ? e : new Proxy(e, rg);
}
class sg {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new tl(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function og(e) {
  return new sg(e);
}
class lg {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new tl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    tt !== this)
      return Pf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Mf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function cg(e, t, n = !1) {
  let i, a;
  return xe(e) ? i = e : (i = e.get, a = e.set), new lg(i, a, n);
}
const xs = {}, qs = /* @__PURE__ */ new WeakMap();
let sa;
function ug(e, t = !1, n = sa) {
  if (n) {
    let i = qs.get(n);
    i || qs.set(n, i = []), i.push(e);
  }
}
function dg(e, t, n = Ve) {
  const { immediate: i, deep: a, once: r, scheduler: s, augmentJob: o, call: l } = n, d = (F) => a ? F : /* @__PURE__ */ yn(F) || a === !1 || a === 0 ? li(F, 1) : li(F);
  let u, h, S, E, N = !1, A = !1;
  if (/* @__PURE__ */ zt(e) ? (h = () => e.value, N = /* @__PURE__ */ yn(e)) : /* @__PURE__ */ ga(e) ? (h = () => d(e), N = !0) : we(e) ? (A = !0, N = e.some((F) => /* @__PURE__ */ ga(F) || /* @__PURE__ */ yn(F)), h = () => e.map((F) => {
    if (/* @__PURE__ */ zt(F))
      return F.value;
    if (/* @__PURE__ */ ga(F))
      return d(F);
    if (xe(F))
      return l ? l(F, 2) : F();
  })) : xe(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (S) {
      pi();
      try {
        S();
      } finally {
        vi();
      }
    }
    const F = sa;
    sa = u;
    try {
      return l ? l(e, 3, [E]) : e(E);
    } finally {
      sa = F;
    }
  } : h = bn, t && a) {
    const F = h, Z = a === !0 ? 1 / 0 : a;
    h = () => li(F(), Z);
  }
  const O = Fv(), I = () => {
    u.stop(), O && O.active && Bc(O.effects, u);
  };
  if (r && t) {
    const F = t;
    t = (...Z) => {
      const D = F(...Z);
      return I(), D;
    };
  }
  let $ = A ? new Array(e.length).fill(xs) : xs;
  const G = (F) => {
    if (!(!(u.flags & 1) || !u.dirty && !F))
      if (t) {
        const Z = u.run();
        if (F || a || N || (A ? Z.some((D, J) => At(D, $[J])) : At(Z, $))) {
          S && S();
          const D = sa;
          sa = u;
          try {
            const J = [
              Z,
              // pass undefined as the old value when it's changed for the first time
              $ === xs ? void 0 : A && $[0] === xs ? [] : $,
              E
            ];
            $ = Z, l ? l(t, 3, J) : (
              // @ts-expect-error
              t(...J)
            );
          } finally {
            sa = D;
          }
        }
      } else
        u.run();
  };
  return o && o(G), u = new Rf(h), u.scheduler = s ? () => s(G, !1) : G, E = (F) => ug(F, !1, u), S = u.onStop = () => {
    const F = qs.get(u);
    if (F) {
      if (l)
        l(F, 4);
      else
        for (const Z of F) Z();
      qs.delete(u);
    }
  }, t ? i ? G(!0) : $ = u.run() : s ? s(G.bind(null, !0), !0) : u.run(), I.pause = u.pause.bind(u), I.resume = u.resume.bind(u), I.stop = I, I;
}
function li(e, t = 1 / 0, n) {
  if (t <= 0 || !Ye(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ zt(e))
    li(e.value, t, n);
  else if (we(e))
    for (let i = 0; i < e.length; i++)
      li(e[i], t, n);
  else if (ba(e) || Di(e))
    e.forEach((i) => {
      li(i, t, n);
    });
  else if (kf(e)) {
    for (const i in e)
      li(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && li(e[i], t, n);
  }
  return e;
}
function fs(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    il(a, t, n);
  }
}
function _n(e, t, n, i) {
  if (xe(e)) {
    const a = fs(e, t, n, i);
    return a && Ef(a) && a.catch((r) => {
      il(r, t, n);
    }), a;
  }
  if (we(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(_n(e[r], t, n, i));
    return a;
  }
}
function il(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Ve;
  if (t) {
    let o = t.parent;
    const l = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, l, d) === !1)
            return;
      }
      o = o.parent;
    }
    if (r) {
      pi(), fs(r, null, 10, [
        e,
        l,
        d
      ]), vi();
      return;
    }
  }
  fg(e, n, a, i, s);
}
function fg(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Kt = [];
let zn = -1;
const Ha = [];
let Ii = null, Fa = 0;
const Yf = /* @__PURE__ */ Promise.resolve();
let Ys = null;
function an(e) {
  const t = Ys || Yf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hg(e) {
  let t = zn + 1, n = Kt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Kt[i], r = Xr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Yc(e) {
  if (!(e.flags & 1)) {
    const t = Xr(e), n = Kt[Kt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Xr(n) ? Kt.push(e) : Kt.splice(hg(t), 0, e), e.flags |= 1, Xf();
  }
}
function Xf() {
  Ys || (Ys = Yf.then(Qf));
}
function Zf(e) {
  if (!we(e))
    Ii && e.id === -1 ? Ii.splice(Fa + 1, 0, e) : e.flags & 1 || (Ha.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ha.push(e[t]);
  Xf();
}
function $u(e, t, n = zn + 1) {
  for (; n < Kt.length; n++) {
    const i = Kt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Kt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Jf(e) {
  if (Ha.length) {
    const t = [...new Set(Ha)].sort(
      (n, i) => Xr(n) - Xr(i)
    );
    if (Ha.length = 0, Ii) {
      for (let n = 0; n < t.length; n++)
        Ii.push(t[n]);
      return;
    }
    for (Ii = t, Fa = 0; Fa < Ii.length; Fa++) {
      const n = Ii[Fa];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ii = null, Fa = 0;
  }
}
const Xr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qf(e) {
  try {
    for (zn = 0; zn < Kt.length; zn++) {
      const t = Kt[zn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), fs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; zn < Kt.length; zn++) {
      const t = Kt[zn];
      t && (t.flags &= -2);
    }
    zn = -1, Kt.length = 0, Jf(), Ys = null, (Kt.length || Ha.length) && Qf();
  }
}
let Nt = null, al = null;
function Xs(e) {
  const t = Nt;
  return Nt = e, al = e && e.type.__scopeId || null, t;
}
function pg(e) {
  al = e;
}
function vg() {
  al = null;
}
const gg = (e) => Oe;
function Oe(e, t = Nt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && to(-1);
    const r = Xs(t), s = fi.length;
    let o;
    try {
      o = e(...a);
    } finally {
      for (let l = fi.length; l > s; l--) nu();
      Xs(r), i._d && to(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function We(e, t) {
  if (Nt === null)
    return e;
  const n = ul(Nt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, o, l = Ve] = t[a];
    r && (xe(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && li(s), i.push({
      dir: r,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: o,
      modifiers: l
    }));
  }
  return e;
}
function ea(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const o = a[s];
    r && (o.oldValue = r[s].value);
    let l = o.dir[i];
    l && (pi(), _n(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), vi());
  }
}
function vn(e, t) {
  if (Mt) {
    let n = Mt.provides;
    const i = Mt.parent && Mt.parent.provides;
    i === n && (n = Mt.provides = Object.create(i)), n[e] = t;
  }
}
function $t(e, t, n = !1) {
  const i = _a();
  if (i || Va) {
    let a = Va ? Va._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && xe(t) ? t.call(i && i.proxy) : t;
  }
}
const mg = /* @__PURE__ */ Symbol.for("v-scx"), bg = () => $t(mg);
function yg(e, t) {
  return rl(e, null, t);
}
function _g(e, t) {
  return rl(
    e,
    null,
    { flush: "sync" }
  );
}
function ct(e, t, n) {
  return rl(e, t, n);
}
function rl(e, t, n = Ve) {
  const { immediate: i, deep: a, flush: r, once: s } = n, o = vt({}, n), l = t && i || !t && r !== "post";
  let d;
  if (ns) {
    if (r === "sync") {
      const E = bg();
      d = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!l) {
      const E = () => {
      };
      return E.stop = bn, E.resume = bn, E.pause = bn, E;
    }
  }
  const u = Mt;
  o.call = (E, N, A) => _n(E, u, N, A);
  let h = !1;
  r === "post" ? o.scheduler = (E) => {
    Gt(E, u && u.suspense);
  } : r !== "sync" && (h = !0, o.scheduler = (E, N) => {
    N ? E() : Yc(E);
  }), o.augmentJob = (E) => {
    t && (E.flags |= 4), h && (E.flags |= 2, u && (E.id = u.uid, E.i = u));
  };
  const S = dg(e, t, o);
  return ns && (d ? d.push(S) : l && S()), S;
}
function wg(e, t, n) {
  const i = this.proxy, a = nt(e) ? e.includes(".") ? eh(i, e) : () => i[e] : e.bind(i, i);
  let r;
  xe(t) ? r = t : (r = t.handler, n = t);
  const s = vs(this), o = rl(a, r.bind(i), n);
  return s(), o;
}
function eh(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const xi = /* @__PURE__ */ new WeakMap(), th = /* @__PURE__ */ Symbol("_vte"), sl = (e) => e.__isTeleport, la = (e) => e && (e.disabled || e.disabled === ""), Sg = (e) => e && (e.defer || e.defer === ""), Mu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Fu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, dc = (e, t) => {
  const n = e && e.to;
  return nt(n) ? t ? t(n) : null : n;
}, Cg = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, s, o, l, d) {
    const {
      mc: u,
      pc: h,
      pbc: S,
      o: { insert: E, querySelector: N, createText: A, createComment: O, parentNode: I }
    } = d, $ = la(t.props);
    let { dynamicChildren: G } = t;
    const F = (J, de, X) => {
      J.shapeFlag & 16 && u(
        J.children,
        de,
        X,
        a,
        r,
        s,
        o,
        l
      );
    }, Z = (J = t) => {
      const de = la(J.props), X = J.target = dc(J.props, N), se = fc(X, J, A, E);
      X && (s !== "svg" && Mu(X) ? s = "svg" : s !== "mathml" && Fu(X) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(X), de || (F(J, X, se), Er(J, !1)));
    }, D = (J) => {
      const de = () => {
        if (xi.get(J) === de) {
          if (xi.delete(J), la(J.props)) {
            const X = I(J.el) || n;
            F(J, X, J.anchor), Er(J, !0);
          }
          Z(J);
        }
      };
      xi.set(J, de), Gt(de, r);
    };
    if (e == null) {
      const J = t.el = A(""), de = t.anchor = A("");
      if (E(J, n, i), E(de, n, i), Sg(t.props) || r && r.pendingBranch) {
        D(t);
        return;
      }
      $ && (F(t, n, de), Er(t, !0)), Z();
    } else {
      t.el = e.el;
      const J = t.anchor = e.anchor, de = xi.get(e);
      if (de) {
        de.flags |= 8, xi.delete(e), D(t);
        return;
      }
      t.targetStart = e.targetStart;
      const X = t.target = e.target, se = t.targetAnchor = e.targetAnchor, ge = la(e.props), te = ge ? n : X, ae = ge ? J : se;
      if (s === "svg" || Mu(X) ? s = "svg" : (s === "mathml" || Fu(X)) && (s = "mathml"), G ? (S(
        e.dynamicChildren,
        G,
        te,
        a,
        r,
        s,
        o
      ), tu(e, t, !0)) : l || h(
        e,
        t,
        te,
        ae,
        a,
        r,
        s,
        o,
        !1
      ), $)
        ge ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ls(
          t,
          n,
          J,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const P = dc(t.props, N);
        P && (t.target = P, Ls(
          t,
          P,
          null,
          d,
          0
        ));
      } else ge && Ls(
        t,
        X,
        se,
        d,
        1
      );
      Er(t, $);
    }
  },
  remove(e, t, n, { um: i, o: { remove: a } }, r) {
    const {
      shapeFlag: s,
      children: o,
      anchor: l,
      targetStart: d,
      targetAnchor: u,
      target: h,
      props: S
    } = e, E = la(S), N = r || !E, A = xi.get(e);
    if (A && (A.flags |= 8, xi.delete(e)), h && (a(d), a(u)), r && a(l), !A && (E || h) && s & 16)
      for (let O = 0; O < o.length; O++) {
        const I = o[O];
        i(
          I,
          t,
          n,
          N,
          !!I.dynamicChildren
        );
      }
  },
  move: Ls,
  hydrate: Tg
};
function Ls(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: s, anchor: o, shapeFlag: l, children: d, props: u } = e, h = r === 2;
  if (h && i(s, t, n), !xi.has(e) && (!h || la(u)) && l & 16)
    for (let S = 0; S < d.length; S++)
      a(
        d[S],
        t,
        n,
        2
      );
  h && i(o, t, n);
}
function Tg(e, t, n, i, a, r, {
  o: { nextSibling: s, parentNode: o, querySelector: l, insert: d, createText: u }
}, h) {
  function S(O, I) {
    let $ = I;
    for (; $; ) {
      if ($ && $.nodeType === 8) {
        if ($.data === "teleport start anchor")
          t.targetStart = $;
        else if ($.data === "teleport anchor") {
          t.targetAnchor = $, O._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      $ = s($);
    }
  }
  function E(O, I) {
    I.anchor = h(
      s(O),
      I,
      o(O),
      n,
      i,
      a,
      r
    );
  }
  const N = t.target = dc(
    t.props,
    l
  ), A = la(t.props);
  if (N) {
    const O = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (A ? (E(e, t), S(N, O), t.targetAnchor || fc(
      N,
      t,
      u,
      d,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(e) === N ? e : null
    )) : (t.anchor = s(e), S(N, O), t.targetAnchor || fc(N, t, u, d), h(
      O && s(O),
      t,
      N,
      n,
      i,
      a,
      r
    ))), Er(t, A);
  } else A && t.shapeFlag & 16 && (E(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const nh = Cg;
function Er(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function fc(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[th] = s, e && (i(r, e, a), i(s, e, a)), s;
}
const gn = /* @__PURE__ */ Symbol("_leaveCb"), gr = /* @__PURE__ */ Symbol("_enterCb");
function Eg() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Hi(() => {
    e.isMounted = !0;
  }), Xa(() => {
    e.isUnmounting = !0;
  }), e;
}
const dn = [Function, Array], ih = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: dn,
  onEnter: dn,
  onAfterEnter: dn,
  onEnterCancelled: dn,
  // leave
  onBeforeLeave: dn,
  onLeave: dn,
  onAfterLeave: dn,
  onLeaveCancelled: dn,
  // appear
  onBeforeAppear: dn,
  onAppear: dn,
  onAfterAppear: dn,
  onAppearCancelled: dn
}, ah = (e) => {
  const t = e.subTree;
  return t.component ? ah(t.component) : t;
}, Ag = {
  name: "BaseTransition",
  props: ih,
  setup(e, { slots: t }) {
    const n = _a(), i = Eg();
    return () => {
      const a = t.default && oh(t.default(), !0), r = a && a.length ? rh(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? H() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ Ke(e), { mode: o } = s;
      if (i.isLeaving)
        return Ol(r);
      const l = Zs(r);
      if (!l)
        return Ol(r);
      let d = hc(
        l,
        s,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      l.type !== Ot && Zr(l, d);
      let u = n.subTree && Zs(n.subTree);
      if (u && u.type !== Ot && !ca(u, l) && ah(n).type !== Ot) {
        let h = hc(
          u,
          s,
          i,
          n
        );
        if (Zr(u, h), o === "out-in" && l.type !== Ot)
          return i.isLeaving = !0, h.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, Ol(r);
        o === "in-out" && l.type !== Ot ? h.delayLeave = (S, E, N) => {
          const A = sh(
            i,
            u
          );
          A[String(u.key)] = u, S[gn] = () => {
            E(), S[gn] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            N(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function rh(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ot) {
        t = n;
        break;
      }
  }
  return t;
}
const kg = Ag;
function sh(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function hc(e, t, n, i, a) {
  const {
    appear: r,
    mode: s,
    persisted: o = !1,
    onBeforeEnter: l,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: S,
    onLeave: E,
    onAfterLeave: N,
    onLeaveCancelled: A,
    onBeforeAppear: O,
    onAppear: I,
    onAfterAppear: $,
    onAppearCancelled: G
  } = t, F = String(e.key), Z = sh(n, e), D = (X, se) => {
    X && _n(
      X,
      i,
      9,
      se
    );
  }, J = (X, se) => {
    const ge = se[1];
    D(X, se), we(X) ? X.every((te) => te.length <= 1) && ge() : X.length <= 1 && ge();
  }, de = {
    mode: s,
    persisted: o,
    beforeEnter(X) {
      let se = l;
      if (!n.isMounted)
        if (r)
          se = O || l;
        else
          return;
      X[gn] && X[gn](
        !0
        /* cancelled */
      );
      const ge = Z[F];
      ge && ca(e, ge) && ge.el[gn] && ge.el[gn](), D(se, [X]);
    },
    enter(X) {
      if (Z[F] === e) return;
      let se = d, ge = u, te = h;
      if (!n.isMounted)
        if (r)
          se = I || d, ge = $ || u, te = G || h;
        else
          return;
      let ae = !1;
      X[gr] = (M) => {
        ae || (ae = !0, M ? D(te, [X]) : D(ge, [X]), de.delayedLeave && de.delayedLeave(), X[gr] = void 0);
      };
      const P = X[gr].bind(null, !1);
      se ? J(se, [X, P]) : P();
    },
    leave(X, se) {
      const ge = String(e.key);
      if (X[gr] && X[gr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return se();
      D(S, [X]);
      let te = !1;
      X[gn] = (P) => {
        te || (te = !0, se(), P ? D(A, [X]) : D(N, [X]), X[gn] = void 0, Z[ge] === e && delete Z[ge]);
      };
      const ae = X[gn].bind(null, !1);
      Z[ge] = e, E ? J(E, [X, ae]) : ae();
    },
    clone(X) {
      const se = hc(
        X,
        t,
        n,
        i,
        a
      );
      return a && a(se), se;
    }
  };
  return de;
}
function Ol(e) {
  if (ol(e))
    return e = Ui(e), e.children = null, e;
}
function Zs(e) {
  if (!ol(e))
    return sl(e.type) && e.children ? rh(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && xe(n.default))
      return n.default();
  }
}
function Zr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Zr(
      sl(n.type) && Zs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function oh(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const o = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === fe ? (s.patchFlag & 128 && a++, i = i.concat(
      oh(s.children, t, o)
    )) : (t || s.type !== Ot) && i.push(o != null ? Ui(s, { key: o }) : s);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function xt(e, t) {
  return xe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    vt({ name: e.name }, t, { setup: e })
  ) : e;
}
function lh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Og(e) {
  const t = _a(), n = /* @__PURE__ */ Kf(null);
  if (t) {
    const a = t.refs === Ve ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function zu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Js = /* @__PURE__ */ new WeakMap();
function Pr(e, t, n, i, a = !1) {
  if (we(e)) {
    e.forEach(
      (A, O) => Pr(
        A,
        t && (we(t) ? t[O] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (ja(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Pr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? ul(i.component) : i.el, s = a ? null : r, { i: o, r: l } = e, d = t && t.r, u = o.refs === Ve ? o.refs = {} : o.refs, h = o.setupState, S = /* @__PURE__ */ Ke(h), E = h === Ve ? Tf : (A) => zu(u, A) ? !1 : qe(S, A), N = (A, O) => !(O && zu(u, O));
  if (d != null && d !== l) {
    if (Uu(t), nt(d))
      u[d] = null, E(d) && (h[d] = null);
    else if (/* @__PURE__ */ zt(d)) {
      const A = t;
      N(d, A.k) && (d.value = null), A.k && (u[A.k] = null);
    }
  }
  if (xe(l))
    fs(l, o, 12, [s, u]);
  else {
    const A = nt(l), O = /* @__PURE__ */ zt(l);
    if (A || O) {
      const I = () => {
        if (e.f) {
          const $ = A ? E(l) ? h[l] : u[l] : N() || !e.k ? l.value : u[e.k];
          if (a)
            we($) && Bc($, r);
          else if (we($))
            $.includes(r) || $.push(r);
          else if (A)
            u[l] = [r], E(l) && (h[l] = u[l]);
          else {
            const G = [r];
            N(l, e.k) && (l.value = G), e.k && (u[e.k] = G);
          }
        } else A ? (u[l] = s, E(l) && (h[l] = s)) : O && (N(l, e.k) && (l.value = s), e.k && (u[e.k] = s));
      };
      if (s) {
        const $ = () => {
          I(), Js.delete(e);
        };
        $.id = -1, Js.set(e, $), Gt($, n);
      } else
        Uu(e), I();
    }
  }
}
function Uu(e) {
  const t = Js.get(e);
  t && (t.flags |= 8, Js.delete(e));
}
el().requestIdleCallback;
el().cancelIdleCallback;
const ja = (e) => !!e.type.__asyncLoader, ol = (e) => e.type.__isKeepAlive;
function Ng(e, t) {
  ch(e, "a", t);
}
function xg(e, t) {
  ch(e, "da", t);
}
function ch(e, t, n = Mt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (ll(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      ol(a.parent.vnode) && Lg(i, t, n, a), a = a.parent;
  }
}
function Lg(e, t, n, i) {
  const a = ll(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  hs(() => {
    Bc(i[t], a);
  }, n);
}
function ll(e, t, n = Mt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      pi();
      const o = vs(n), l = _n(t, n, e, s);
      return o(), vi(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const yi = (e) => (t, n = Mt) => {
  (!ns || e === "sp") && ll(e, (...i) => t(...i), n);
}, uh = yi("bm"), Hi = yi("m"), dh = yi(
  "bu"
), Rg = yi("u"), Xa = yi(
  "bum"
), hs = yi("um"), Ig = yi(
  "sp"
), Pg = yi("rtg"), Dg = yi("rtc");
function $g(e, t = Mt) {
  ll("ec", e, t);
}
const Xc = "components", Mg = "directives";
function Ue(e, t) {
  return Jc(Xc, e, !0, t) || e;
}
const fh = /* @__PURE__ */ Symbol.for("v-ndc");
function Zc(e) {
  return nt(e) ? Jc(Xc, e, !1) || e : e || fh;
}
function Bu(e) {
  return Jc(Mg, e);
}
function Jc(e, t, n = !0, i = !1) {
  const a = Nt || Mt;
  if (a) {
    const r = a.type;
    if (e === Xc) {
      const o = ym(
        r,
        !1
      );
      if (o && (o === t || o === Ft(t) || o === Jo(Ft(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Hu(a[e] || r[e], t) || // global registration
      Hu(a.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function Hu(e, t) {
  return e && (e[t] || e[Ft(t)] || e[Jo(Ft(t))]);
}
function Fe(e, t, n, i) {
  let a;
  const r = n, s = we(e);
  if (s || nt(e)) {
    const o = s && /* @__PURE__ */ ga(e);
    let l = !1, d = !1;
    o && (l = !/* @__PURE__ */ yn(e), d = /* @__PURE__ */ gi(e), e = nl(e)), a = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      a[u] = t(
        l ? d ? Ya(Rn(e[u])) : Rn(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let o = 0; o < e; o++)
      a[o] = t(o + 1, o, void 0, r);
  } else if (Ye(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (o, l) => t(o, l, void 0, r)
      );
    else {
      const o = Object.keys(e);
      a = new Array(o.length);
      for (let l = 0, d = o.length; l < d; l++) {
        const u = o[l];
        a[l] = t(e[u], u, l, r);
      }
    }
  else
    a = [];
  return a;
}
function Re(e, t, n, i, a, r) {
  if (n == null && (n = {}), Nt.ce || Nt.parent && ja(Nt.parent) && Nt.parent.ce) {
    const d = n, u = Object.keys(d).length > 0;
    return t !== "default" && (d.name = t), _(), $e(
      fe,
      null,
      [be("slot", d, i && i())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const o = fi.length;
  _();
  let l;
  try {
    const d = s && hh(s(n)), u = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    d && d.key;
    l = $e(
      fe,
      {
        key: (u && !Ln(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!d && i ? "_fb" : "")
      },
      d || (i ? i() : []),
      d && e._ === 1 ? 64 : -2
    );
  } catch (d) {
    for (let u = fi.length; u > o; u--) nu();
    throw d;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function hh(e) {
  return e.some((t) => Qr(t) ? !(t.type === Ot || t.type === fe && !hh(t.children)) : !0) ? e : null;
}
const pc = (e) => e ? Dh(e) ? ul(e) : pc(e.parent) : null, Dr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ vt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => pc(e.parent),
    $root: (e) => pc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => gh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Yc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = an.bind(e.proxy)),
    $watch: (e) => wg.bind(e)
  })
), Nl = (e, t) => e !== Ve && !e.__isScriptSetup && qe(e, t), Fg = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: r, accessCache: s, type: o, appContext: l } = e;
    if (t[0] !== "$") {
      const S = s[t];
      if (S !== void 0)
        switch (S) {
          case 1:
            return i[t];
          case 2:
            return a[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Nl(i, t))
          return s[t] = 1, i[t];
        if (a !== Ve && qe(a, t))
          return s[t] = 2, a[t];
        if (qe(r, t))
          return s[t] = 3, r[t];
        if (n !== Ve && qe(n, t))
          return s[t] = 4, n[t];
        vc && (s[t] = 0);
      }
    }
    const d = Dr[t];
    let u, h;
    if (d)
      return t === "$attrs" && Dt(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Ve && qe(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, qe(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return Nl(a, t) ? (a[t] = n, !0) : i !== Ve && qe(i, t) ? (i[t] = n, !0) : qe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: s }
  }, o) {
    let l;
    return !!(n[o] || e !== Ve && o[0] !== "$" && qe(e, o) || Nl(t, o) || qe(r, o) || qe(i, o) || qe(Dr, o) || qe(a.config.globalProperties, o) || (l = s.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : qe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function zg() {
  return ph().slots;
}
function Ug() {
  return ph().attrs;
}
function ph(e) {
  const t = _a();
  return t.setupContext || (t.setupContext = Mh(t));
}
function Qs(e) {
  return we(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Bg(e, t) {
  return !e || !t ? e || t : we(e) && we(t) ? e.concat(t) : vt({}, Qs(e), Qs(t));
}
let vc = !0;
function Hg(e) {
  const t = gh(e), n = e.proxy, i = e.ctx;
  vc = !1, t.beforeCreate && ju(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: s,
    watch: o,
    provide: l,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: h,
    mounted: S,
    beforeUpdate: E,
    updated: N,
    activated: A,
    deactivated: O,
    beforeDestroy: I,
    beforeUnmount: $,
    destroyed: G,
    unmounted: F,
    render: Z,
    renderTracked: D,
    renderTriggered: J,
    errorCaptured: de,
    serverPrefetch: X,
    // public API
    expose: se,
    inheritAttrs: ge,
    // assets
    components: te,
    directives: ae,
    filters: P
  } = t;
  if (d && jg(d, i, null), s)
    for (const re in s) {
      const ie = s[re];
      xe(ie) && (i[re] = ie.bind(n));
    }
  if (a) {
    const re = a.call(n, n);
    Ye(re) && (e.data = /* @__PURE__ */ Pt(re));
  }
  if (vc = !0, r)
    for (const re in r) {
      const ie = r[re], he = xe(ie) ? ie.bind(n, n) : xe(ie.get) ? ie.get.bind(n, n) : bn, pe = !xe(ie) && xe(ie.set) ? ie.set.bind(n) : bn, Ce = q({
        get: he,
        set: pe
      });
      Object.defineProperty(i, re, {
        enumerable: !0,
        configurable: !0,
        get: () => Ce.value,
        set: (ye) => Ce.value = ye
      });
    }
  if (o)
    for (const re in o)
      vh(o[re], i, n, re);
  if (l) {
    const re = xe(l) ? l.call(n) : l;
    Reflect.ownKeys(re).forEach((ie) => {
      vn(ie, re[ie]);
    });
  }
  u && ju(u, e, "c");
  function Y(re, ie) {
    we(ie) ? ie.forEach((he) => re(he.bind(n))) : ie && re(ie.bind(n));
  }
  if (Y(uh, h), Y(Hi, S), Y(dh, E), Y(Rg, N), Y(Ng, A), Y(xg, O), Y($g, de), Y(Dg, D), Y(Pg, J), Y(Xa, $), Y(hs, F), Y(Ig, X), we(se))
    if (se.length) {
      const re = e.exposed || (e.exposed = {});
      se.forEach((ie) => {
        Object.defineProperty(re, ie, {
          get: () => n[ie],
          set: (he) => n[ie] = he,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Z && e.render === bn && (e.render = Z), ge != null && (e.inheritAttrs = ge), te && (e.components = te), ae && (e.directives = ae), X && lh(e);
}
function jg(e, t, n = bn) {
  we(e) && (e = gc(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Ye(a) ? "default" in a ? r = $t(
      a.from || i,
      a.default,
      !0
    ) : r = $t(a.from || i) : r = $t(a), /* @__PURE__ */ zt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[i] = r;
  }
}
function ju(e, t, n) {
  _n(
    we(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function vh(e, t, n, i) {
  let a = i.includes(".") ? eh(n, i) : () => n[i];
  if (nt(e)) {
    const r = t[e];
    xe(r) && ct(a, r);
  } else if (xe(e))
    ct(a, e.bind(n));
  else if (Ye(e))
    if (we(e))
      e.forEach((r) => vh(r, t, n, i));
    else {
      const r = xe(e.handler) ? e.handler.bind(n) : t[e.handler];
      xe(r) && ct(a, r, e);
    }
}
function gh(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (d) => eo(l, d, s, !0)
  ), eo(l, t, s)), Ye(t) && r.set(t, l), l;
}
function eo(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && eo(e, r, n, !0), a && a.forEach(
    (s) => eo(e, s, n, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const o = Vg[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const Vg = {
  data: Vu,
  props: Gu,
  emits: Gu,
  // objects
  methods: Ar,
  computed: Ar,
  // lifecycle
  beforeCreate: Vt,
  created: Vt,
  beforeMount: Vt,
  mounted: Vt,
  beforeUpdate: Vt,
  updated: Vt,
  beforeDestroy: Vt,
  beforeUnmount: Vt,
  destroyed: Vt,
  unmounted: Vt,
  activated: Vt,
  deactivated: Vt,
  errorCaptured: Vt,
  serverPrefetch: Vt,
  // assets
  components: Ar,
  directives: Ar,
  // watch
  watch: Kg,
  // provide / inject
  provide: Vu,
  inject: Gg
};
function Vu(e, t) {
  return t ? e ? function() {
    return vt(
      xe(e) ? e.call(this, this) : e,
      xe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Gg(e, t) {
  return Ar(gc(e), gc(t));
}
function gc(e) {
  if (we(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Vt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ar(e, t) {
  return e ? vt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Gu(e, t) {
  return e ? we(e) && we(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : vt(
    /* @__PURE__ */ Object.create(null),
    Qs(e),
    Qs(t ?? {})
  ) : t;
}
function Kg(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = vt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Vt(e[i], t[i]);
  return n;
}
function mh() {
  return {
    app: null,
    config: {
      isNativeTag: Tf,
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
let Wg = 0;
function qg(e, t) {
  return function(i, a = null) {
    xe(i) || (i = vt({}, i)), a != null && !Ye(a) && (a = null);
    const r = mh(), s = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const d = r.app = {
      _uid: Wg++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: wm,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return s.has(u) || (u && xe(u.install) ? (s.add(u), u.install(d, ...h)) : xe(u) && (s.add(u), u(d, ...h))), d;
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), d;
      },
      component(u, h) {
        return h ? (r.components[u] = h, d) : r.components[u];
      },
      directive(u, h) {
        return h ? (r.directives[u] = h, d) : r.directives[u];
      },
      mount(u, h, S) {
        if (!l) {
          const E = d._ceVNode || be(i, a);
          return E.appContext = r, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(E, u, S), l = !0, d._container = u, u.__vue_app__ = d, ul(E.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (_n(
          o,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, h) {
        return r.provides[u] = h, d;
      },
      runWithContext(u) {
        const h = Va;
        Va = d;
        try {
          return u();
        } finally {
          Va = h;
        }
      }
    };
    return d;
  };
}
let Va = null;
function bh(e, t, n = Ve) {
  const i = _a(), a = Ft(t), r = bi(t), s = yh(e, a), o = og((l, d) => {
    let u, h = Ve, S;
    return _g(() => {
      const E = e[a];
      At(u, E) && (u = E, d());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(E) {
        const N = n.set ? n.set(E) : E;
        if (!At(N, u) && !(h !== Ve && At(E, h)))
          return;
        const A = i.vnode.props, O = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        O || (u = E, d()), i.emit(`update:${t}`, N), At(E, h) && (At(E, N) && !At(N, S) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        O && h !== Ve && !At(N, u)) && d(), h = E, S = N;
      }
    };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? s || Ve : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
const yh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ft(t)}Modifiers`] || e[`${bi(t)}Modifiers`];
function Yg(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ve;
  let a = n;
  const r = t.startsWith("update:"), s = r && yh(i, t.slice(7));
  s && (s.trim && (a = n.map((u) => nt(u) ? u.trim() : u)), s.number && (a = a.map(Qo)));
  let o, l = i[o = Cl(t)] || // also try camelCase event handler (#2249)
  i[o = Cl(Ft(t))];
  !l && r && (l = i[o = Cl(bi(t))]), l && _n(
    l,
    e,
    6,
    a
  );
  const d = i[o + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, _n(
      d,
      e,
      6,
      a
    );
  }
}
const Xg = /* @__PURE__ */ new WeakMap();
function _h(e, t, n = !1) {
  const i = n ? Xg : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, o = !1;
  if (!xe(e)) {
    const l = (d) => {
      const u = _h(d, t, !0);
      u && (o = !0, vt(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (Ye(e) && i.set(e, null), null) : (we(r) ? r.forEach((l) => s[l] = null) : vt(s, r), Ye(e) && i.set(e, s), s);
}
function cl(e, t) {
  return !e || !Yo(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), qe(e, t[0].toLowerCase() + t.slice(1)) || qe(e, bi(t)) || qe(e, t));
}
function Ku(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [r],
    slots: s,
    attrs: o,
    emit: l,
    render: d,
    renderCache: u,
    props: h,
    data: S,
    setupState: E,
    ctx: N,
    inheritAttrs: A
  } = e, O = Xs(e);
  let I, $;
  try {
    if (n.shapeFlag & 4) {
      const F = a || i, Z = F;
      I = Vn(
        d.call(
          Z,
          F,
          u,
          h,
          E,
          S,
          N
        )
      ), $ = o;
    } else {
      const F = t;
      I = Vn(
        F.length > 1 ? F(
          h,
          { attrs: o, slots: s, emit: l }
        ) : F(
          h,
          null
        )
      ), $ = t.props ? o : Zg(o);
    }
  } catch (F) {
    fi.length = 0, il(F, e, 1), I = be(Ot);
  }
  let G = I;
  if ($ && A !== !1) {
    const F = Object.keys($), { shapeFlag: Z } = G;
    F.length && Z & 7 && (r && F.some(Xo) && ($ = Jg(
      $,
      r
    )), G = Ui(G, $, !1, !0));
  }
  if (n.dirs && (G = Ui(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const F = sl(G.type) && Zs(G) || G;
    Zr(F, n.transition);
  }
  return I = G, Xs(O), I;
}
const Zg = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Yo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Jg = (e, t) => {
  const n = {};
  for (const i in e)
    (!Xo(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Qg(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: s, children: o, patchFlag: l } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Wu(i, s, d) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const S = u[h];
        if (wh(s, i, S) && !cl(d, S))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : i === s ? !1 : i ? s ? Wu(i, s, d) : !0 : !!s;
  return !1;
}
function Wu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (wh(t, e, r) && !cl(n, r))
      return !0;
  }
  return !1;
}
function wh(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Ye(i) && Ye(a) ? !zi(i, a) : i !== a;
}
function em({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Sh = {}, Ch = () => Object.create(Sh), Th = (e) => Object.getPrototypeOf(e) === Sh;
function tm(e, t, n, i = !1) {
  const a = {}, r = Ch();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Eh(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ ng(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function nm(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, o = /* @__PURE__ */ Ke(a), [l] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let S = u[h];
        if (cl(e.emitsOptions, S))
          continue;
        const E = t[S];
        if (l)
          if (qe(r, S))
            E !== r[S] && (r[S] = E, d = !0);
          else {
            const N = Ft(S);
            a[N] = mc(
              l,
              o,
              N,
              E,
              e,
              !1
            );
          }
        else
          E !== r[S] && (r[S] = E, d = !0);
      }
    }
  } else {
    Eh(e, t, a, r) && (d = !0);
    let u;
    for (const h in o)
      (!t || // for camelCase
      !qe(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = bi(h)) === h || !qe(t, u))) && (l ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[h] = mc(
        l,
        o,
        h,
        void 0,
        e,
        !0
      )) : delete a[h]);
    if (r !== o)
      for (const h in r)
        (!t || !qe(t, h)) && (delete r[h], d = !0);
  }
  d && oi(e.attrs, "set", "");
}
function Eh(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (Lr(l))
        continue;
      const d = t[l];
      let u;
      a && qe(a, u = Ft(l)) ? !r || !r.includes(u) ? n[u] = d : (o || (o = {}))[u] = d : cl(e.emitsOptions, l) || (!(l in i) || d !== i[l]) && (i[l] = d, s = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ Ke(n), d = o || Ve;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      n[h] = mc(
        a,
        l,
        h,
        d[h],
        e,
        !qe(d, h)
      );
    }
  }
  return s;
}
function mc(e, t, n, i, a, r) {
  const s = e[n];
  if (s != null) {
    const o = qe(s, "default");
    if (o && i === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && xe(l)) {
        const { propsDefaults: d } = a;
        if (n in d)
          i = d[n];
        else {
          const u = vs(a);
          i = d[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        i = l;
      a.ce && a.ce._setProp(n, i);
    }
    s[
      0
      /* shouldCast */
    ] && (r && !o ? i = !1 : s[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === bi(n)) && (i = !0));
  }
  return i;
}
const im = /* @__PURE__ */ new WeakMap();
function Ah(e, t, n = !1) {
  const i = n ? im : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, o = [];
  let l = !1;
  if (!xe(e)) {
    const u = (h) => {
      l = !0;
      const [S, E] = Ah(h, t, !0);
      vt(s, S), E && o.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l)
    return Ye(e) && i.set(e, Ba), Ba;
  if (we(r))
    for (let u = 0; u < r.length; u++) {
      const h = Ft(r[u]);
      qu(h) && (s[h] = Ve);
    }
  else if (r)
    for (const u in r) {
      const h = Ft(u);
      if (qu(h)) {
        const S = r[u], E = s[h] = we(S) || xe(S) ? { type: S } : vt({}, S), N = E.type;
        let A = !1, O = !0;
        if (we(N))
          for (let I = 0; I < N.length; ++I) {
            const $ = N[I], G = xe($) && $.name;
            if (G === "Boolean") {
              A = !0;
              break;
            } else G === "String" && (O = !1);
          }
        else
          A = xe(N) && N.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = A, E[
          1
          /* shouldCastTrue */
        ] = O, (A || qe(E, "default")) && o.push(h);
      }
    }
  const d = [s, o];
  return Ye(e) && i.set(e, d), d;
}
function qu(e) {
  return e[0] !== "$" && !Lr(e);
}
const Qc = (e) => e === "_" || e === "_ctx" || e === "$stable", eu = (e) => we(e) ? e.map(Vn) : [Vn(e)], am = (e, t, n) => {
  if (t._n)
    return t;
  const i = Oe((...a) => eu(t(...a)), n);
  return i._c = !1, i;
}, kh = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Qc(a)) continue;
    const r = e[a];
    if (xe(r))
      t[a] = am(a, r, i);
    else if (r != null) {
      const s = eu(r);
      t[a] = () => s;
    }
  }
}, Oh = (e, t) => {
  const n = eu(t);
  e.slots.default = () => n;
}, Nh = (e, t, n) => {
  for (const i in t)
    (n || !Qc(i)) && (e[i] = t[i]);
}, rm = (e, t, n) => {
  const i = e.slots = Ch();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Nh(i, t, n), n && Of(i, "_", a, !0)) : kh(t, i);
  } else t && Oh(e, t);
}, sm = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, s = Ve;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : Nh(a, t, n) : (r = !t.$stable, kh(t, a)), s = t;
  } else t && (Oh(e, t), s = { default: 1 });
  if (r)
    for (const o in a)
      !Qc(o) && s[o] == null && delete a[o];
}, Gt = dm;
function om(e) {
  return lm(e);
}
function lm(e, t) {
  const n = el();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: r,
    createElement: s,
    createText: o,
    createComment: l,
    setText: d,
    setElementText: u,
    parentNode: h,
    nextSibling: S,
    setScopeId: E = bn,
    insertStaticContent: N
  } = e, A = (v, C, k, L = null, x = null, z = null, K = void 0, V = null, Q = !!C.dynamicChildren) => {
    if (v === C)
      return;
    v && !ca(v, C) && (L = ut(v), ye(v, x, z, !0), v = null), C.patchFlag === -2 && (Q = !1, C.dynamicChildren = null);
    const { type: j, ref: ve, shapeFlag: oe } = C;
    switch (j) {
      case ps:
        O(v, C, k, L);
        break;
      case Ot:
        I(v, C, k, L);
        break;
      case js:
        v == null && $(C, k, L, K);
        break;
      case fe:
        te(
          v,
          C,
          k,
          L,
          x,
          z,
          K,
          V,
          Q
        );
        break;
      default:
        oe & 1 ? Z(
          v,
          C,
          k,
          L,
          x,
          z,
          K,
          V,
          Q
        ) : oe & 6 ? ae(
          v,
          C,
          k,
          L,
          x,
          z,
          K,
          V,
          Q
        ) : (oe & 64 || oe & 128) && j.process(
          v,
          C,
          k,
          L,
          x,
          z,
          K,
          V,
          Q,
          wn
        );
    }
    ve != null && x ? Pr(ve, v && v.ref, z, C || v, !C) : ve == null && v && v.ref != null && Pr(v.ref, null, z, v, !0);
  }, O = (v, C, k, L) => {
    if (v == null)
      i(
        C.el = o(C.children),
        k,
        L
      );
    else {
      const x = C.el = v.el;
      C.children !== v.children && d(x, C.children);
    }
  }, I = (v, C, k, L) => {
    v == null ? i(
      C.el = l(C.children || ""),
      k,
      L
    ) : C.el = v.el;
  }, $ = (v, C, k, L) => {
    [v.el, v.anchor] = N(
      v.children,
      C,
      k,
      L,
      v.el,
      v.anchor
    );
  }, G = ({ el: v, anchor: C }, k, L) => {
    let x;
    for (; v && v !== C; )
      x = S(v), i(v, k, L), v = x;
    i(C, k, L);
  }, F = ({ el: v, anchor: C }) => {
    let k;
    for (; v && v !== C; )
      k = S(v), a(v), v = k;
    a(C);
  }, Z = (v, C, k, L, x, z, K, V, Q) => {
    if (C.type === "svg" ? K = "svg" : C.type === "math" && (K = "mathml"), v == null)
      D(
        C,
        k,
        L,
        x,
        z,
        K,
        V,
        Q
      );
    else {
      const j = v.el && v.el._isVueCE ? v.el : null;
      try {
        j && j._beginPatch(), X(
          v,
          C,
          x,
          z,
          K,
          V,
          Q
        );
      } finally {
        j && j._endPatch();
      }
    }
  }, D = (v, C, k, L, x, z, K, V) => {
    let Q, j;
    const { props: ve, shapeFlag: oe, transition: me, dirs: Ae } = v;
    if (Q = v.el = s(
      v.type,
      z,
      ve && ve.is,
      ve
    ), oe & 8 ? u(Q, v.children) : oe & 16 && de(
      v.children,
      Q,
      null,
      L,
      x,
      xl(v, z),
      K,
      V
    ), Ae && ea(v, null, L, "created"), J(Q, v, v.scopeId, K, L), ve) {
      for (const Me in ve)
        Me !== "value" && !Lr(Me) && r(Q, Me, null, ve[Me], z, L);
      "value" in ve && r(Q, "value", null, ve.value, z), (j = ve.onVnodeBeforeMount) && Fn(j, L, v);
    }
    Ae && ea(v, null, L, "beforeMount");
    const Se = cm(x, me);
    Se && me.beforeEnter(Q), i(Q, C, k), ((j = ve && ve.onVnodeMounted) || Se || Ae) && Gt(() => {
      j && Fn(j, L, v), Se && me.enter(Q), Ae && ea(v, null, L, "mounted");
    }, x);
  }, J = (v, C, k, L, x) => {
    if (k && E(v, k), L)
      for (let z = 0; z < L.length; z++)
        E(v, L[z]);
    if (x) {
      let z = x.subTree;
      if (C === z || Rh(z.type) && (z.ssContent === C || z.ssFallback === C)) {
        const K = x.vnode;
        J(
          v,
          K,
          K.scopeId,
          K.slotScopeIds,
          x.parent
        );
      }
    }
  }, de = (v, C, k, L, x, z, K, V, Q = 0) => {
    for (let j = Q; j < v.length; j++) {
      const ve = v[j] = V ? si(v[j]) : Vn(v[j]);
      A(
        null,
        ve,
        C,
        k,
        L,
        x,
        z,
        K,
        V
      );
    }
  }, X = (v, C, k, L, x, z, K) => {
    const V = C.el = v.el;
    let { patchFlag: Q, dynamicChildren: j, dirs: ve } = C;
    Q |= v.patchFlag & 16;
    const oe = v.props || Ve, me = C.props || Ve;
    let Ae;
    if (k && ta(k, !1), (Ae = me.onVnodeBeforeUpdate) && Fn(Ae, k, C, v), ve && ea(C, v, k, "beforeUpdate"), k && ta(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    j && (!v.dynamicChildren || v.dynamicChildren.length !== j.length) && (Q = 0, K = !1, j = null), (oe.innerHTML && me.innerHTML == null || oe.textContent && me.textContent == null) && u(V, ""), j ? se(
      v.dynamicChildren,
      j,
      V,
      k,
      L,
      xl(C, x),
      z
    ) : K || ie(
      v,
      C,
      V,
      null,
      k,
      L,
      xl(C, x),
      z,
      !1
    ), Q > 0) {
      if (Q & 16)
        ge(V, oe, me, k, x);
      else if (Q & 2 && oe.class !== me.class && r(V, "class", null, me.class, x), Q & 4 && r(V, "style", oe.style, me.style, x), Q & 8) {
        const Se = C.dynamicProps;
        for (let Me = 0; Me < Se.length; Me++) {
          const De = Se[Me], Qe = oe[De], rt = me[De];
          (rt !== Qe || De === "value") && r(V, De, Qe, rt, x, k);
        }
      }
      Q & 1 && v.children !== C.children && u(V, C.children);
    } else !K && j == null && ge(V, oe, me, k, x);
    ((Ae = me.onVnodeUpdated) || ve) && Gt(() => {
      Ae && Fn(Ae, k, C, v), ve && ea(C, v, k, "updated");
    }, L);
  }, se = (v, C, k, L, x, z, K) => {
    for (let V = 0; V < C.length; V++) {
      const Q = v[V], j = C[V], ve = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Q.type === fe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ca(Q, j) || // - In the case of a component, it could contain anything.
        Q.shapeFlag & 198) ? h(Q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      A(
        Q,
        j,
        ve,
        null,
        L,
        x,
        z,
        K,
        !0
      );
    }
  }, ge = (v, C, k, L, x) => {
    if (C !== k) {
      if (C !== Ve)
        for (const z in C)
          !Lr(z) && !(z in k) && r(
            v,
            z,
            C[z],
            null,
            x,
            L
          );
      for (const z in k) {
        if (Lr(z)) continue;
        const K = k[z], V = C[z];
        K !== V && z !== "value" && r(v, z, V, K, x, L);
      }
      "value" in k && r(v, "value", C.value, k.value, x);
    }
  }, te = (v, C, k, L, x, z, K, V, Q) => {
    const j = C.el = v ? v.el : o(""), ve = C.anchor = v ? v.anchor : o("");
    let { patchFlag: oe, dynamicChildren: me, slotScopeIds: Ae } = C;
    Ae && (V = V ? V.concat(Ae) : Ae), v == null ? (i(j, k, L), i(ve, k, L), de(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      C.children || [],
      k,
      ve,
      x,
      z,
      K,
      V,
      Q
    )) : oe > 0 && oe & 64 && me && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren && v.dynamicChildren.length === me.length ? (se(
      v.dynamicChildren,
      me,
      k,
      x,
      z,
      K,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (C.key != null || x && C === x.subTree) && tu(
      v,
      C,
      !0
      /* shallow */
    )) : ie(
      v,
      C,
      k,
      ve,
      x,
      z,
      K,
      V,
      Q
    );
  }, ae = (v, C, k, L, x, z, K, V, Q) => {
    C.slotScopeIds = V, v == null ? C.shapeFlag & 512 ? x.ctx.activate(
      C,
      k,
      L,
      K,
      Q
    ) : P(
      C,
      k,
      L,
      x,
      z,
      K,
      Q
    ) : M(v, C, Q);
  }, P = (v, C, k, L, x, z, K) => {
    const V = v.component = vm(
      v,
      L,
      x
    );
    if (ol(v) && (V.ctx.renderer = wn), gm(V, !1, K), V.asyncDep) {
      if (x && x.registerDep(V, Y, K), !v.el) {
        const Q = V.subTree = be(Ot);
        I(null, Q, C, k), v.placeholder = Q.el;
      }
    } else
      Y(
        V,
        v,
        C,
        k,
        x,
        z,
        K
      );
  }, M = (v, C, k) => {
    const L = C.component = v.component;
    if (Qg(v, C, k))
      if (L.asyncDep && !L.asyncResolved) {
        re(L, C, k);
        return;
      } else
        L.next = C, L.update();
    else
      C.el = v.el, L.vnode = C;
  }, Y = (v, C, k, L, x, z, K) => {
    const V = () => {
      if (v.isMounted) {
        let { next: oe, bu: me, u: Ae, parent: Se, vnode: Me } = v;
        {
          const Lt = xh(v);
          if (Lt) {
            oe && (oe.el = Me.el, re(v, oe, K)), Lt.asyncDep.then(() => {
              Gt(() => {
                v.isUnmounted || j();
              }, x);
            });
            return;
          }
        }
        let De = oe, Qe;
        ta(v, !1), oe ? (oe.el = Me.el, re(v, oe, K)) : oe = Me, me && Hs(me), (Qe = oe.props && oe.props.onVnodeBeforeUpdate) && Fn(Qe, Se, oe, Me), ta(v, !0);
        const rt = Ku(v), Tt = v.subTree;
        v.subTree = rt, A(
          Tt,
          rt,
          // parent may have changed if it's in a teleport
          h(Tt.el),
          // anchor may have changed if it's in a fragment
          ut(Tt),
          v,
          x,
          z
        ), oe.el = rt.el, De === null && em(v, rt.el), Ae && Gt(Ae, x), (Qe = oe.props && oe.props.onVnodeUpdated) && Gt(
          () => Fn(Qe, Se, oe, Me),
          x
        );
      } else {
        let oe;
        const { el: me, props: Ae } = C, { bm: Se, m: Me, parent: De, root: Qe, type: rt } = v, Tt = ja(C);
        ta(v, !1), Se && Hs(Se), !Tt && (oe = Ae && Ae.onVnodeBeforeMount) && Fn(oe, De, C), ta(v, !0);
        {
          Qe.ce && Qe.ce._hasShadowRoot() && Qe.ce._injectChildStyle(
            rt,
            v.parent ? v.parent.type : void 0
          );
          const Lt = v.subTree = Ku(v);
          A(
            null,
            Lt,
            k,
            L,
            v,
            x,
            z
          ), C.el = Lt.el;
        }
        if (Me && Gt(Me, x), !Tt && (oe = Ae && Ae.onVnodeMounted)) {
          const Lt = C;
          Gt(
            () => Fn(oe, De, Lt),
            x
          );
        }
        (C.shapeFlag & 256 || De && ja(De.vnode) && De.vnode.shapeFlag & 256) && v.a && Gt(v.a, x), v.isMounted = !0, C = k = L = null;
      }
    };
    v.scope.on();
    const Q = v.effect = new Rf(V);
    v.scope.off();
    const j = v.update = Q.run.bind(Q), ve = v.job = Q.runIfDirty.bind(Q);
    ve.i = v, ve.id = v.uid, Q.scheduler = () => Yc(ve), ta(v, !0), j();
  }, re = (v, C, k) => {
    C.component = v;
    const L = v.vnode.props;
    v.vnode = C, v.next = null, nm(v, C.props, L, k), sm(v, C.children, k), pi(), $u(v), vi();
  }, ie = (v, C, k, L, x, z, K, V, Q = !1) => {
    const j = v && v.children, ve = v ? v.shapeFlag : 0, oe = C.children, { patchFlag: me, shapeFlag: Ae } = C;
    if (me > 0) {
      if (me & 128) {
        pe(
          j,
          oe,
          k,
          L,
          x,
          z,
          K,
          V,
          Q
        );
        return;
      } else if (me & 256) {
        he(
          j,
          oe,
          k,
          L,
          x,
          z,
          K,
          V,
          Q
        );
        return;
      }
    }
    Ae & 8 ? (ve & 16 && ot(j, x, z), oe !== j && u(k, oe)) : ve & 16 ? Ae & 16 ? pe(
      j,
      oe,
      k,
      L,
      x,
      z,
      K,
      V,
      Q
    ) : ot(j, x, z, !0) : (ve & 8 && u(k, ""), Ae & 16 && de(
      oe,
      k,
      L,
      x,
      z,
      K,
      V,
      Q
    ));
  }, he = (v, C, k, L, x, z, K, V, Q) => {
    v = v || Ba, C = C || Ba;
    const j = v.length, ve = C.length, oe = Math.min(j, ve);
    let me;
    for (me = 0; me < oe; me++) {
      const Ae = C[me] = Q ? si(C[me]) : Vn(C[me]);
      A(
        v[me],
        Ae,
        k,
        null,
        x,
        z,
        K,
        V,
        Q
      );
    }
    j > ve ? ot(
      v,
      x,
      z,
      !0,
      !1,
      oe
    ) : de(
      C,
      k,
      L,
      x,
      z,
      K,
      V,
      Q,
      oe
    );
  }, pe = (v, C, k, L, x, z, K, V, Q) => {
    let j = 0;
    const ve = C.length;
    let oe = v.length - 1, me = ve - 1;
    for (; j <= oe && j <= me; ) {
      const Ae = v[j], Se = C[j] = Q ? si(C[j]) : Vn(C[j]);
      if (ca(Ae, Se))
        A(
          Ae,
          Se,
          k,
          null,
          x,
          z,
          K,
          V,
          Q
        );
      else
        break;
      j++;
    }
    for (; j <= oe && j <= me; ) {
      const Ae = v[oe], Se = C[me] = Q ? si(C[me]) : Vn(C[me]);
      if (ca(Ae, Se))
        A(
          Ae,
          Se,
          k,
          null,
          x,
          z,
          K,
          V,
          Q
        );
      else
        break;
      oe--, me--;
    }
    if (j > oe) {
      if (j <= me) {
        const Ae = me + 1, Se = Ae < ve ? C[Ae].el : L;
        for (; j <= me; )
          A(
            null,
            C[j] = Q ? si(C[j]) : Vn(C[j]),
            k,
            Se,
            x,
            z,
            K,
            V,
            Q
          ), j++;
      }
    } else if (j > me)
      for (; j <= oe; )
        ye(v[j], x, z, !0), j++;
    else {
      const Ae = j, Se = j, Me = /* @__PURE__ */ new Map();
      for (j = Se; j <= me; j++) {
        const dt = C[j] = Q ? si(C[j]) : Vn(C[j]);
        dt.key != null && Me.set(dt.key, j);
      }
      let De, Qe = 0;
      const rt = me - Se + 1;
      let Tt = !1, Lt = 0;
      const Wt = new Array(rt);
      for (j = 0; j < rt; j++) Wt[j] = 0;
      for (j = Ae; j <= oe; j++) {
        const dt = v[j];
        if (Qe >= rt) {
          ye(dt, x, z, !0);
          continue;
        }
        let Bt;
        if (dt.key != null)
          Bt = Me.get(dt.key);
        else
          for (De = Se; De <= me; De++)
            if (Wt[De - Se] === 0 && ca(dt, C[De])) {
              Bt = De;
              break;
            }
        Bt === void 0 ? ye(dt, x, z, !0) : (Wt[Bt - Se] = j + 1, Bt >= Lt ? Lt = Bt : Tt = !0, A(
          dt,
          C[Bt],
          k,
          null,
          x,
          z,
          K,
          V,
          Q
        ), Qe++);
      }
      const qn = Tt ? um(Wt) : Ba;
      for (De = qn.length - 1, j = rt - 1; j >= 0; j--) {
        const dt = Se + j, Bt = C[dt], Gi = C[dt + 1], _i = dt + 1 < ve ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Gi.el || Lh(Gi)
        ) : L;
        Wt[j] === 0 ? A(
          null,
          Bt,
          k,
          _i,
          x,
          z,
          K,
          V,
          Q
        ) : Tt && (De < 0 || j !== qn[De] ? Ce(Bt, k, _i, 2) : De--);
      }
    }
  }, Ce = (v, C, k, L, x = null) => {
    const { el: z, type: K, transition: V, children: Q, shapeFlag: j } = v;
    if (j & 6) {
      Ce(v.component.subTree, C, k, L);
      return;
    }
    if (j & 128) {
      v.suspense.move(C, k, L);
      return;
    }
    if (j & 64) {
      K.move(v, C, k, wn);
      return;
    }
    if (K === fe) {
      i(z, C, k);
      for (let oe = 0; oe < Q.length; oe++)
        Ce(Q[oe], C, k, L);
      i(v.anchor, C, k);
      return;
    }
    if (K === js) {
      G(v, C, k);
      return;
    }
    if (L !== 2 && j & 1 && V)
      if (L === 0)
        V.persisted && !z[gn] ? i(z, C, k) : (V.beforeEnter(z), i(z, C, k), Gt(() => V.enter(z), x));
      else {
        const { leave: oe, delayLeave: me, afterLeave: Ae } = V, Se = () => {
          v.ctx.isUnmounted ? a(z) : i(z, C, k);
        }, Me = () => {
          const De = z._isLeaving || !!z[gn];
          z._isLeaving && z[gn](
            !0
            /* cancelled */
          ), V.persisted && !De ? Se() : oe(z, () => {
            Se(), Ae && Ae();
          });
        };
        me ? me(z, Se, Me) : Me();
      }
    else
      i(z, C, k);
  }, ye = (v, C, k, L = !1, x = !1) => {
    const {
      type: z,
      props: K,
      ref: V,
      children: Q,
      dynamicChildren: j,
      shapeFlag: ve,
      patchFlag: oe,
      dirs: me,
      cacheIndex: Ae,
      memo: Se
    } = v;
    if (oe === -2 && (x = !1), V != null && (pi(), Pr(V, null, k, v, !0), vi()), Ae != null && (C.renderCache[Ae] = void 0), ve & 256) {
      C.ctx.deactivate(v);
      return;
    }
    const Me = ve & 1 && me, De = !ja(v);
    let Qe;
    if (De && (Qe = K && K.onVnodeBeforeUnmount) && Fn(Qe, C, v), ve & 6)
      it(v.component, k, L);
    else {
      if (ve & 128) {
        v.suspense.unmount(k, L);
        return;
      }
      Me && ea(v, null, C, "beforeUnmount"), ve & 64 ? v.type.remove(
        v,
        C,
        k,
        wn,
        L
      ) : j && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !j.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== fe || oe > 0 && oe & 64) ? ot(
        j,
        C,
        k,
        !1,
        !0
      ) : (z === fe && oe & 384 || !x && ve & 16) && ot(Q, C, k), L && Be(v);
    }
    const rt = Se != null && Ae == null;
    (De && (Qe = K && K.onVnodeUnmounted) || Me || rt) && Gt(() => {
      Qe && Fn(Qe, C, v), Me && ea(v, null, C, "unmounted"), rt && (v.el = null);
    }, k);
  }, Be = (v) => {
    const { type: C, el: k, anchor: L, transition: x } = v;
    if (C === fe) {
      Te(k, L);
      return;
    }
    if (C === js) {
      F(v);
      return;
    }
    const z = () => {
      a(k), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (v.shapeFlag & 1 && x && !x.persisted) {
      const { leave: K, delayLeave: V } = x, Q = () => K(k, z);
      V ? V(v.el, z, Q) : Q();
    } else
      z();
  }, Te = (v, C) => {
    let k;
    for (; v !== C; )
      k = S(v), a(v), v = k;
    a(C);
  }, it = (v, C, k) => {
    const { bum: L, scope: x, job: z, subTree: K, um: V, m: Q, a: j } = v;
    Yu(Q), Yu(j), L && Hs(L), x.stop(), z && (z.flags |= 8, ye(K, v, C, k)), V && Gt(V, C), Gt(() => {
      v.isUnmounted = !0;
    }, C);
  }, ot = (v, C, k, L = !1, x = !1, z = 0) => {
    for (let K = z; K < v.length; K++)
      ye(v[K], C, k, L, x);
  }, ut = (v) => {
    if (v.shapeFlag & 6)
      return ut(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const C = S(v.anchor || v.el), k = C && C[th];
    return k ? S(k) : C;
  };
  let yt = !1;
  const Je = (v, C, k) => {
    let L;
    v == null ? C._vnode && (ye(C._vnode, null, null, !0), L = C._vnode.component) : A(
      C._vnode || null,
      v,
      C,
      null,
      null,
      null,
      k
    ), C._vnode = v, yt || (yt = !0, $u(L), Jf(), yt = !1);
  }, wn = {
    p: A,
    um: ye,
    m: Ce,
    r: Be,
    mt: P,
    mc: de,
    pc: ie,
    pbc: se,
    n: ut,
    o: e
  };
  return {
    render: Je,
    hydrate: void 0,
    createApp: qg(Je)
  };
}
function xl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ta({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function cm(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function tu(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (we(i) && we(a))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let o = a[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[r] = si(a[r]), o.el = s.el), !n && o.patchFlag !== -2 && tu(s, o)), o.type === ps && (o.patchFlag === -1 && (o = a[r] = si(o)), o.el = s.el), o.type === Ot && !o.el && (o.el = s.el);
    }
}
function um(e) {
  const t = e.slice(), n = [0];
  let i, a, r, s, o;
  const l = e.length;
  for (i = 0; i < l; i++) {
    const d = e[i];
    if (d !== 0) {
      if (a = n[n.length - 1], e[a] < d) {
        t[i] = a, n.push(i);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        o = r + s >> 1, e[n[o]] < d ? r = o + 1 : s = o;
      d < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function xh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : xh(t);
}
function Yu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Lh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Lh(t.subTree) : null;
}
const Rh = (e) => e.__isSuspense;
function dm(e, t) {
  t && t.pendingBranch ? we(e) ? t.effects.push(...e) : t.effects.push(e) : Zf(e);
}
const fe = /* @__PURE__ */ Symbol.for("v-fgt"), ps = /* @__PURE__ */ Symbol.for("v-txt"), Ot = /* @__PURE__ */ Symbol.for("v-cmt"), js = /* @__PURE__ */ Symbol.for("v-stc"), fi = [];
let sn = null;
function _(e = !1) {
  fi.push(sn = e ? null : []);
}
function nu() {
  fi.pop(), sn = fi[fi.length - 1] || null;
}
let Jr = 1;
function to(e, t = !1) {
  Jr += e, e < 0 && sn && t && (sn.hasOnce = !0);
}
function Ih(e) {
  return e.dynamicChildren = Jr > 0 ? sn || Ba : null, nu(), Jr > 0 && sn && sn.push(e), e;
}
function T(e, t, n, i, a, r) {
  return Ih(
    c(
      e,
      t,
      n,
      i,
      a,
      r,
      !0
    )
  );
}
function $e(e, t, n, i, a) {
  return Ih(
    be(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function Qr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ca(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ph = ({ key: e }) => e ?? null, Vs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? nt(e) || /* @__PURE__ */ zt(e) || xe(e) ? { i: Nt, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, i = 0, a = null, r = e === fe ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ph(t),
    ref: t && Vs(t),
    scopeId: al,
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
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: Nt
  };
  return o ? (no(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= nt(n) ? 8 : 16), Jr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  sn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && sn.push(l), l;
}
const be = fm;
function fm(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === fh) && (e = Ot), Qr(e)) {
    const o = Ui(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && no(o, n), Jr > 0 && !r && sn && (o.shapeFlag & 6 ? sn[sn.indexOf(e)] = o : sn.push(o)), o.patchFlag = -2, o;
  }
  if (_m(e) && (e = e.__vccOpts), t) {
    t = es(t);
    let { class: o, style: l } = t;
    o && !nt(o) && (t.class = Ee(o)), Ye(l) && (/* @__PURE__ */ qc(l) && !we(l) && (l = vt({}, l)), t.style = on(l));
  }
  const s = nt(e) ? 1 : Rh(e) ? 128 : sl(e) ? 64 : Ye(e) ? 4 : xe(e) ? 2 : 0;
  return c(
    e,
    t,
    n,
    i,
    a,
    s,
    r,
    !0
  );
}
function es(e) {
  return e ? /* @__PURE__ */ qc(e) || Th(e) ? vt({}, e) : e : null;
}
function Ui(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: s, children: o, transition: l } = e, d = t ? Ut(a || {}, t) : a, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Ph(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? we(r) ? r.concat(Vs(t)) : [r, Vs(t)] : Vs(t)
    ) : r,
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
    patchFlag: t && e.type !== fe ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ui(e.ssContent),
    ssFallback: e.ssFallback && Ui(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && Zr(
    u,
    l.clone(u)
  ), u;
}
function Ne(e = " ", t = 0) {
  return be(ps, null, e, t);
}
function H(e = "", t = !1) {
  return t ? (_(), $e(Ot, null, e)) : be(Ot, null, e);
}
function Vn(e) {
  return e == null || typeof e == "boolean" ? be(Ot) : we(e) ? be(
    fe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Qr(e) ? si(e) : be(ps, null, String(e));
}
function si(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ui(e);
}
function no(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (we(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), no(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Th(t) ? t._ctx = Nt : a === 3 && Nt && (Nt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (xe(t)) {
    if (i & 65) {
      no(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Nt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Ne(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Ut(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Ee([t.class, i.class]));
      else if (a === "style")
        t.style = on([t.style, i.style]);
      else if (Yo(a)) {
        const r = t[a], s = i[a];
        s && r !== s && !(we(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Xo(a) && (t[a] = s);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Fn(e, t, n, i = null) {
  _n(e, t, 7, [
    n,
    i
  ]);
}
const hm = mh();
let pm = 0;
function vm(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || hm, r = {
    uid: pm++,
    vnode: e,
    type: i,
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
    scope: new Mv(
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
    propsOptions: Ah(i, a),
    emitsOptions: _h(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ve,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Ve,
    data: Ve,
    props: Ve,
    attrs: Ve,
    slots: Ve,
    refs: Ve,
    setupState: Ve,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Yg.bind(null, r), e.ce && e.ce(r), r;
}
let Mt = null;
const _a = () => Mt || Nt;
let io, ts;
{
  const e = el(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  io = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Mt = n
  ), ts = t(
    "__VUE_SSR_SETTERS__",
    (n) => ns = n
  );
}
const vs = (e) => {
  const t = Mt;
  return io(e), e.scope.on(), () => {
    e.scope.off(), io(t);
  };
}, Xu = () => {
  Mt && Mt.scope.off(), io(null);
};
function Dh(e) {
  return e.vnode.shapeFlag & 4;
}
let ns = !1;
function gm(e, t = !1, n = !1) {
  t && ts(t);
  const { props: i, children: a } = e.vnode, r = Dh(e);
  tm(e, i, r, t), rm(e, a, n || t);
  const s = r ? mm(e, t) : void 0;
  return t && ts(!1), s;
}
function mm(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fg);
  const { setup: i } = n;
  if (i) {
    pi();
    const a = e.setupContext = i.length > 1 ? Mh(e) : null, r = vs(e), s = fs(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = Ef(s);
    if (vi(), r(), (o || e.sp) && !ja(e) && lh(e), o) {
      if (s.then(Xu, Xu), t)
        return s.then((l) => {
          ts(!0);
          try {
            Zu(e, l, t);
          } finally {
            ts(!1);
          }
        }).catch((l) => {
          il(l, e, 0);
        });
      e.asyncDep = s;
    } else
      Zu(e, s);
  } else
    $h(e);
}
function Zu(e, t, n) {
  xe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ye(t) && (e.setupState = qf(t)), $h(e);
}
function $h(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || bn);
  {
    const a = vs(e);
    pi();
    try {
      Hg(e);
    } finally {
      vi(), a();
    }
  }
}
const bm = {
  get(e, t) {
    return Dt(e, "get", ""), e[t];
  }
};
function Mh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, bm),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ul(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(qf(ig(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Dr)
        return Dr[n](e);
    },
    has(t, n) {
      return n in t || n in Dr;
    }
  })) : e.proxy;
}
function ym(e, t = !0) {
  return xe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function _m(e) {
  return xe(e) && "__vccOpts" in e;
}
const q = (e, t) => /* @__PURE__ */ cg(e, t, ns);
function Xt(e, t, n) {
  try {
    to(-1);
    const i = arguments.length;
    return i === 2 ? Ye(t) && !we(t) ? Qr(t) ? be(e, null, [t]) : be(e, t) : be(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Qr(n) && (n = [n]), be(e, t, n));
  } finally {
    to(1);
  }
}
const wm = "3.5.42", Sm = bn;
let bc;
const Ju = typeof window < "u" && window.trustedTypes;
if (Ju)
  try {
    bc = /* @__PURE__ */ Ju.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Fh = bc ? (e) => bc.createHTML(e) : (e) => e, Cm = "http://www.w3.org/2000/svg", Tm = "http://www.w3.org/1998/Math/MathML", ri = typeof document < "u" ? document : null, Qu = ri && /* @__PURE__ */ ri.createElement("template"), Em = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? ri.createElementNS(Cm, e) : t === "mathml" ? ri.createElementNS(Tm, e) : n ? ri.createElement(e, { is: n }) : ri.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => ri.createTextNode(e),
  createComment: (e) => ri.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ri.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, a, r) {
    const s = n ? n.previousSibling : t.lastChild;
    if (a && (a === r || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === r || !(a = a.nextSibling)); )
        ;
    else {
      Qu.innerHTML = Fh(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Qu.content;
      if (i === "svg" || i === "mathml") {
        const l = o.firstChild;
        for (; l.firstChild; )
          o.appendChild(l.firstChild);
        o.removeChild(l);
      }
      t.insertBefore(o, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, ki = "transition", mr = "animation", is = /* @__PURE__ */ Symbol("_vtc"), zh = {
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
}, Am = /* @__PURE__ */ vt(
  {},
  ih,
  zh
), km = (e) => (e.displayName = "Transition", e.props = Am, e), Om = /* @__PURE__ */ km(
  (e, { slots: t }) => Xt(kg, Nm(e), t)
), na = (e, t = []) => {
  we(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ed = (e) => e ? we(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Nm(e) {
  const t = {};
  for (const te in e)
    te in zh || (t[te] = e[te]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: i,
    duration: a,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: s = `${n}-enter-active`,
    enterToClass: o = `${n}-enter-to`,
    appearFromClass: l = r,
    appearActiveClass: d = s,
    appearToClass: u = o,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: S = `${n}-leave-active`,
    leaveToClass: E = `${n}-leave-to`
  } = e, N = xm(a), A = N && N[0], O = N && N[1], {
    onBeforeEnter: I,
    onEnter: $,
    onEnterCancelled: G,
    onLeave: F,
    onLeaveCancelled: Z,
    onBeforeAppear: D = I,
    onAppear: J = $,
    onAppearCancelled: de = G
  } = t, X = (te, ae, P, M) => {
    te._enterCancelled = M, ia(te, ae ? u : o), ia(te, ae ? d : s), P && P();
  }, se = (te, ae) => {
    te._isLeaving = !1, ia(te, h), ia(te, E), ia(te, S), ae && ae();
  }, ge = (te) => (ae, P) => {
    const M = te ? J : $, Y = () => X(ae, te, P);
    na(M, [ae, Y]), td(() => {
      ia(ae, te ? l : r), ei(ae, te ? u : o), ed(M) || nd(ae, i, A, Y);
    });
  };
  return vt(t, {
    onBeforeEnter(te) {
      na(I, [te]), ei(te, r), ei(te, s);
    },
    onBeforeAppear(te) {
      na(D, [te]), ei(te, l), ei(te, d);
    },
    onEnter: ge(!1),
    onAppear: ge(!0),
    onLeave(te, ae) {
      te._isLeaving = !0;
      const P = () => se(te, ae);
      ei(te, h), te._enterCancelled ? (ei(te, S), rd(te)) : (rd(te), ei(te, S)), td(() => {
        te._isLeaving && (ia(te, h), ei(te, E), ed(F) || nd(te, i, O, P));
      }), na(F, [te, P]);
    },
    onEnterCancelled(te) {
      X(te, !1, void 0, !0), na(G, [te]);
    },
    onAppearCancelled(te) {
      X(te, !0, void 0, !0), na(de, [te]);
    },
    onLeaveCancelled(te) {
      se(te), na(Z, [te]);
    }
  });
}
function xm(e) {
  if (e == null)
    return null;
  if (Ye(e))
    return [Ll(e.enter), Ll(e.leave)];
  {
    const t = Ll(e);
    return [t, t];
  }
}
function Ll(e) {
  return kv(e);
}
function ei(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[is] || (e[is] = /* @__PURE__ */ new Set())).add(t);
}
function ia(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[is];
  n && (n.delete(t), n.size || (e[is] = void 0));
}
function td(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Lm = 0;
function nd(e, t, n, i) {
  const a = e._endId = ++Lm, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: o, propCount: l } = Rm(e, t);
  if (!s)
    return i();
  const d = s + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(d, S), r();
  }, S = (E) => {
    E.target === e && ++u >= l && h();
  };
  setTimeout(() => {
    u < l && h();
  }, o + 1), e.addEventListener(d, S);
}
function Rm(e, t) {
  const n = window.getComputedStyle(e), i = (N) => (n[N] || "").split(", "), a = i(`${ki}Delay`), r = i(`${ki}Duration`), s = id(a, r), o = i(`${mr}Delay`), l = i(`${mr}Duration`), d = id(o, l);
  let u = null, h = 0, S = 0;
  t === ki ? s > 0 && (u = ki, h = s, S = r.length) : t === mr ? d > 0 && (u = mr, h = d, S = l.length) : (h = Math.max(s, d), u = h > 0 ? s > d ? ki : mr : null, S = u ? u === ki ? r.length : l.length : 0);
  const E = u === ki && /\b(?:transform|all)(?:,|$)/.test(
    i(`${ki}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: S,
    hasTransform: E
  };
}
function id(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => ad(n) + ad(e[i])));
}
function ad(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function rd(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Im(e, t, n) {
  const i = e[is];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ao = /* @__PURE__ */ Symbol("_vod"), Uh = /* @__PURE__ */ Symbol("_vsh"), Ga = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[ao] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : br(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), br(e, !0), i.enter(e)) : i.leave(e, () => {
      br(e, !1);
    }) : br(e, t));
  },
  beforeUnmount(e, { value: t }) {
    br(e, t);
  }
};
function br(e, t) {
  e.style.display = t ? e[ao] : "none", e[Uh] = !t;
}
const Bh = /* @__PURE__ */ Symbol("");
function Pm(e) {
  const t = _a();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => ro(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? ro(t.ce, a) : yc(t.subTree, a), n(a);
  };
  dh(() => {
    Zf(i);
  }), Hi(() => {
    ct(i, bn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), hs(() => a.disconnect());
  });
}
function yc(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      yc(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    ro(e.el, t);
  else if (e.type === fe)
    e.children.forEach((n) => yc(n, t));
  else if (e.type === js) {
    let { el: n, anchor: i } = e;
    for (; n && (ro(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function ro(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = $v(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[Bh] = i;
  }
}
const Dm = /(?:^|;)\s*display\s*:/;
function $m(e, t, n) {
  const i = e.style, a = nt(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (nt(t))
        for (const s of t.split(";")) {
          const o = s.slice(0, s.indexOf(":")).trim();
          n[o] == null && kr(i, o, "");
        }
      else
        for (const s in t)
          n[s] == null && kr(i, s, "");
    for (const s in n) {
      s === "display" && (r = !0);
      const o = n[s];
      o != null ? Fm(
        e,
        s,
        !nt(t) && t ? t[s] : void 0,
        o
      ) || kr(i, s, o) : kr(i, s, "");
    }
  } else if (a) {
    if (t !== n) {
      const s = i[Bh];
      s && (n += ";" + s), i.cssText = n, r = Dm.test(n);
    }
  } else t && e.removeAttribute("style");
  ao in e && (e[ao] = r ? i.display : "", e[Uh] && (i.display = "none"));
}
const Rs = /\s*!important$/;
function kr(e, t, n) {
  if (we(n))
    n.forEach((i) => kr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    Rs.test(n) ? e.setProperty(t, n.replace(Rs, ""), "important") : e.setProperty(t, n);
  else {
    const i = Mm(e, t);
    Rs.test(n) ? e.setProperty(
      bi(i),
      n.replace(Rs, ""),
      "important"
    ) : e[i] = n;
  }
}
const sd = ["Webkit", "Moz", "ms"], Rl = {};
function Mm(e, t) {
  const n = Rl[t];
  if (n)
    return n;
  let i = Ft(t);
  if (i !== "filter" && i in e)
    return Rl[t] = i;
  i = Jo(i);
  for (let a = 0; a < sd.length; a++) {
    const r = sd[a] + i;
    if (r in e)
      return Rl[t] = r;
  }
  return t;
}
function Fm(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && nt(i) && n === i;
}
const od = "http://www.w3.org/1999/xlink";
function ld(e, t, n, i, a, r = Iv(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(od, t.slice(6, t.length)) : e.setAttributeNS(od, t, n) : n == null || r && !Nf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ln(n) ? String(n) : n
  );
}
function cd(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Fh(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const o = r === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = Nf(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(a || t);
}
function ua(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function zm(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const ud = /* @__PURE__ */ Symbol("_vei");
function Um(e, t, n, i, a = null) {
  const r = e[ud] || (e[ud] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [o, l] = jm(t);
    if (i) {
      const d = r[t] = Km(
        i,
        a
      );
      ua(e, o, d, l);
    } else s && (zm(e, o, s, l), r[t] = void 0);
  }
}
const Bm = /(Once|Passive|Capture)$/, Hm = /^on:?(?:Once|Passive|Capture)$/;
function jm(e) {
  let t, n;
  for (; (n = e.match(Bm)) && !Hm.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : bi(e.slice(2)), t];
}
let Il = 0;
const Vm = /* @__PURE__ */ Promise.resolve(), Gm = () => Il || (Vm.then(() => Il = 0), Il = Date.now());
function Km(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const a = n.value;
    if (we(a)) {
      const r = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        r.call(i), i._stopped = !0;
      };
      const s = a.slice(), o = [i];
      for (let l = 0; l < s.length && !i._stopped; l++) {
        const d = s[l];
        d && _n(
          d,
          t,
          5,
          o
        );
      }
    } else
      _n(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = Gm(), n;
}
const dd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wm = (e, t, n, i, a, r) => {
  const s = a === "svg";
  t === "class" ? Im(e, i, s) : t === "style" ? $m(e, n, i) : Yo(t) ? Xo(t) || Um(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qm(e, t, i, s)) ? (cd(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ld(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ym(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !nt(i))) ? cd(e, Ft(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), ld(e, t, i, s));
};
function qm(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && dd(t) && xe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return dd(t) && nt(n) ? !1 : t in e;
}
function Ym(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Ft(t);
  return Array.isArray(n) ? n.some((a) => Ft(a) === i) : Object.keys(n).some((a) => Ft(a) === i);
}
const so = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return we(t) ? (n) => Hs(t, n) : t;
};
function Xm(e) {
  e.target.composing = !0;
}
function fd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const fa = /* @__PURE__ */ Symbol("_assign"), Is = /* @__PURE__ */ Symbol("_initialValue");
function Pl(e, t, n) {
  return t && (e = e.trim()), n && (e = Qo(e)), e;
}
const hn = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[Is] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Is] = e.defaultValue.replace(/\r\n?/g, `
`))), e[fa] = so(a);
    const r = i || a.props && a.props.type === "number";
    ua(e, t ? "change" : "input", (s) => {
      s.target.composing || e[fa](Pl(e.value, n, r));
    }), (n || r) && ua(e, "change", () => {
      e.value = Pl(e.value, n, r);
    }), t || (ua(e, "compositionstart", Xm), ua(e, "compositionend", fd), ua(e, "change", fd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[Is];
    delete e[Is], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[fa](Pl(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, s) {
    if (e[fa] = so(s), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? Qo(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, ti = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, ua(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Qo(oo(l)) : oo(l)
      ), r = e.multiple, s = r ? ba(e._modelValue) ? new Set(a) : a : a[0], o = e._pendingValue = [
        r,
        r ? we(s) ? a.slice() : a : s
      ];
      try {
        e[fa](s);
      } finally {
        an(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[fa] = so(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    hd(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[fa] = so(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Zm(t, n[1], n[0])) && hd(e, t);
  }
};
function Zm(e, t, n) {
  if (!n || we(e)) return zi(e, t);
  if (ba(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function hd(e, t) {
  const n = e.multiple, i = we(t);
  if (!(n && !i && !ba(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], o = oo(s);
      if (n)
        if (i) {
          const l = typeof o;
          l === "string" || l === "number" ? s.selected = t.some((d) => String(d) === String(o)) : s.selected = Dv(t, o) > -1;
        } else
          s.selected = t.has(o);
      else if (zi(oo(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function oo(e) {
  return "_value" in e ? e._value : e.value;
}
const Jm = ["ctrl", "shift", "alt", "meta"], Qm = {
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
  exact: (e, t) => Jm.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ge = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const o = Qm[t[s]];
      if (o && o(a, t)) return;
    }
    return e(a, ...r);
  }));
}, eb = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, kt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = bi(a.key);
    if (t.some(
      (s) => s === r || eb[s] === r
    ))
      return e(a);
  }));
}, tb = /* @__PURE__ */ vt({ patchProp: Wm }, Em);
let pd;
function nb() {
  return pd || (pd = om(tb));
}
const ib = ((...e) => {
  const t = nb().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = rb(i);
    if (!a) return;
    const r = t._component;
    !xe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = n(a, !1, ab(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function ab(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function rb(e) {
  return nt(e) ? document.querySelector(e) : e;
}
function iu(e, t, n) {
  const i = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(i))
    return window._nc_initial_state.get(i);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const a = document.querySelector(i);
  if (a === null) {
    if (n !== void 0)
      return n;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const r = JSON.parse(atob(a.value));
    return window._nc_initial_state.set(i, r), r;
  } catch (r) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: r }), n !== void 0)
      return n;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: r });
  }
}
function vd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function sb(e) {
  if (Array.isArray(e)) return e;
}
function ob(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var i, a, r, s, o = [], l = !0, d = !1;
    try {
      if (r = (n = n.call(e)).next, t !== 0) for (; !(l = (i = r.call(n)).done) && (o.push(i.value), o.length !== t); l = !0) ;
    } catch (u) {
      d = !0, a = u;
    } finally {
      try {
        if (!l && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (d) throw a;
      }
    }
    return o;
  }
}
function lb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cb(e, t) {
  return sb(e) || ob(e, t) || ub(e, t) || lb();
}
function ub(e, t) {
  if (e) {
    if (typeof e == "string") return vd(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vd(e, t) : void 0;
  }
}
const Hh = Object.entries, gd = Object.setPrototypeOf, db = Object.isFrozen, fb = Object.getPrototypeOf, hb = Object.getOwnPropertyDescriptor;
let bt = Object.freeze, Ct = Object.seal, za = Object.create, jh = typeof Reflect < "u" && Reflect, _c = jh.apply, wc = jh.construct;
bt || (bt = function(t) {
  return t;
});
Ct || (Ct = function(t) {
  return t;
});
_c || (_c = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
wc || (wc = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const oa = gt(Array.prototype.forEach), pb = gt(Array.prototype.lastIndexOf), md = gt(Array.prototype.pop), yr = gt(Array.prototype.push), vb = gt(Array.prototype.splice), Ka = Array.isArray, Or = gt(String.prototype.toLowerCase), Dl = gt(String.prototype.toString), bd = gt(String.prototype.match), _r = gt(String.prototype.replace), yd = gt(String.prototype.indexOf), gb = gt(String.prototype.trim), mb = gt(Number.prototype.toString), bb = gt(Boolean.prototype.toString), _d = typeof BigInt > "u" ? null : gt(BigInt.prototype.toString), wd = typeof Symbol > "u" ? null : gt(Symbol.prototype.toString), Zt = gt(Object.prototype.hasOwnProperty), wr = gt(Object.prototype.toString), Rt = gt(RegExp.prototype.test), aa = yb(TypeError);
function gt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return _c(e, t, i);
  };
}
function yb(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return wc(e, n);
  };
}
function je(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Or;
  if (gd && gd(e, null), !Ka(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (db(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function _b(e) {
  for (let t = 0; t < e.length; t++)
    Zt(e, t) || (e[t] = null);
  return e;
}
function nn(e) {
  const t = za(null);
  for (const i of Hh(e)) {
    var n = cb(i, 2);
    const a = n[0], r = n[1];
    Zt(e, a) && (Ka(r) ? t[a] = _b(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = nn(r) : t[a] = r);
  }
  return t;
}
function wb(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return mb(e);
    case "boolean":
      return bb(e);
    case "bigint":
      return _d ? _d(e) : "0";
    case "symbol":
      return wd ? wd(e) : "Symbol()";
    case "undefined":
      return wr(e);
    case "function":
    case "object": {
      if (e === null)
        return wr(e);
      const t = e, n = kn(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : wr(i);
      }
      return wr(e);
    }
    default:
      return wr(e);
  }
}
function kn(e, t) {
  for (; e !== null; ) {
    const i = hb(e, t);
    if (i) {
      if (i.get)
        return gt(i.get);
      if (typeof i.value == "function")
        return gt(i.value);
    }
    e = fb(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Sb(e) {
  try {
    return Rt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Sd = bt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), $l = bt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ml = bt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Cb = bt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Fl = bt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Tb = bt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Cd = bt(["#text"]), Td = bt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), zl = bt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ed = bt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ps = bt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Eb = Ct(/{{[\w\W]*|^[\w\W]*}}/g), Ab = Ct(/<%[\w\W]*|^[\w\W]*%>/g), kb = Ct(/\${[\w\W]*/g), Ob = Ct(/^data-[\-\w.\u00B7-\uFFFF]+$/), Nb = Ct(/^aria-[\-\w]+$/), Ad = Ct(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), xb = Ct(/^(?:\w+script|data):/i), Lb = Ct(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Rb = Ct(/^html$/i), Ib = Ct(/^[a-z][.\w]*(-[.\w]+)+$/i), kd = Ct(/<[/\w!]/g), Od = Ct(/<[/\w]/g), Pb = Ct(/<\/no(script|embed|frames)/i), Db = Ct(/\/>/i), tn = {
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
}, Vh = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], $b = bt(je({}, Vh)), Mb = (function() {
  const e = {};
  return oa(Vh, (t) => {
    e[t] = Ct(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), bt(e);
})(), Fb = function() {
  return typeof window > "u" ? null : window;
}, zb = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let i = null;
  const a = "data-tt-policy-suffix";
  n && n.hasAttribute(a) && (i = n.getAttribute(a));
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
}, Nd = function() {
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
}, Oi = function(t, n, i, a) {
  return Zt(t, n) && Ka(t[n]) ? je(a.base ? nn(a.base) : {}, t[n], a.transform) : i;
}, Ul = function(t, n, i) {
  const a = Zt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? nn(a) : i();
};
function Gh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fb();
  const t = (ee) => Gh(ee);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, o = e.Element, l = e.NodeFilter, d = e.NamedNodeMap;
  d === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, h = e.trustedTypes, S = o.prototype, E = kn(S, "cloneNode"), N = kn(S, "remove"), A = kn(S, "nextSibling"), O = kn(S, "childNodes"), I = kn(S, "parentNode"), $ = kn(S, "shadowRoot"), G = kn(S, "attributes"), F = s && s.prototype ? kn(s.prototype, "nodeType") : null, Z = s && s.prototype ? kn(s.prototype, "nodeName") : null, D = s && s.prototype ? kn(s.prototype, "ownerDocument") : null, J = function(w) {
    return F ? F(w) : w.nodeType;
  }, de = function(w) {
    return Z ? Z(w) : w.nodeName;
  };
  if (typeof r == "function") {
    const ee = n.createElement("template");
    ee.content && ee.content.ownerDocument && (n = ee.content.ownerDocument);
  }
  let X, se = "", ge, te = !1, ae = 0;
  const P = function() {
    if (ae > 0)
      throw aa('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, M = function(w) {
    P(), ae++;
    try {
      return X.createHTML(w);
    } finally {
      ae--;
    }
  }, Y = function(w) {
    P(), ae++;
    try {
      return X.createScriptURL(w);
    } finally {
      ae--;
    }
  }, re = function() {
    return te || (ge = zb(h, a), te = !0), ge;
  }, ie = n, he = ie.implementation, pe = ie.createNodeIterator, Ce = ie.createDocumentFragment, ye = ie.getElementsByTagName, Be = i.importNode;
  let Te = Nd();
  t.isSupported = typeof Hh == "function" && typeof I == "function" && he && he.createHTMLDocument !== void 0;
  const it = Eb, ot = Ab, ut = kb, yt = Ob, Je = Nb, wn = xb, U = Lb, v = Ib;
  let C = Ad, k = null;
  const L = je({}, [...Sd, ...$l, ...Ml, ...Fl, ...Cd]);
  let x = null;
  const z = je({}, [...Td, ...zl, ...Ed, ...Ps]);
  let K = Object.seal(za(null, {
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
  })), V = null, Q = null;
  const j = Object.seal(za(null, {
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
  let ve = !0, oe = !0, me = !1, Ae = !0, Se = !1, Me = !0, De = !1, Qe = !1, rt = null, Tt = null, Lt = !1, Wt = !1, qn = !1, dt = !1, Bt = !0, Gi = !1;
  const _i = "user-content-";
  let Ki = !0, Wi = !1, In = {}, Pn = null;
  const Za = je({}, [
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
  let ms = null;
  const Ja = je({}, ["audio", "video", "img", "source", "image", "track"]);
  let Qa = null;
  const bs = je({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wi = "http://www.w3.org/1998/Math/MathML", Si = "http://www.w3.org/2000/svg", Jt = "http://www.w3.org/1999/xhtml";
  let Yn = Jt, Sa = !1, Ca = null;
  const ys = je({}, [wi, Si, Jt], Dl), er = bt(["mi", "mo", "mn", "ms", "mtext"]);
  let tr = je({}, er);
  const _s = bt(["annotation-xml"]);
  let Ta = je({}, _s);
  const qt = je({}, ["title", "style", "font", "a", "script"]);
  let qi = null;
  const Ea = ["application/xhtml+xml", "text/html"], bl = "text/html";
  let st = null, Ci = null;
  const Aa = n.createElement("form"), ws = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, Yi = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ci && Ci === w)
      return;
    (!w || typeof w != "object") && (w = {}), w = nn(w), qi = // eslint-disable-next-line unicorn/prefer-includes
    Ea.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? bl : w.PARSER_MEDIA_TYPE, st = qi === "application/xhtml+xml" ? Dl : Or, k = Oi(w, "ALLOWED_TAGS", L, {
      transform: st
    }), x = Oi(w, "ALLOWED_ATTR", z, {
      transform: st
    }), Ca = Oi(w, "ALLOWED_NAMESPACES", ys, {
      transform: Dl
    }), Qa = Oi(w, "ADD_URI_SAFE_ATTR", bs, {
      transform: st,
      base: bs
    }), ms = Oi(w, "ADD_DATA_URI_TAGS", Ja, {
      transform: st,
      base: Ja
    }), Pn = Oi(w, "FORBID_CONTENTS", Za, {
      transform: st
    }), V = Oi(w, "FORBID_TAGS", nn({}), {
      transform: st
    }), Q = Oi(w, "FORBID_ATTR", nn({}), {
      transform: st
    }), In = Zt(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? nn(w.USE_PROFILES) : w.USE_PROFILES : !1, ve = w.ALLOW_ARIA_ATTR !== !1, oe = w.ALLOW_DATA_ATTR !== !1, me = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Ae = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Se = w.SAFE_FOR_TEMPLATES || !1, Me = w.SAFE_FOR_XML !== !1, De = w.WHOLE_DOCUMENT || !1, Wt = w.RETURN_DOM || !1, qn = w.RETURN_DOM_FRAGMENT || !1, dt = w.RETURN_TRUSTED_TYPE || !1, Lt = w.FORCE_BODY || !1, Bt = w.SANITIZE_DOM !== !1, Gi = w.SANITIZE_NAMED_PROPS || !1, Ki = w.KEEP_CONTENT !== !1, Wi = w.IN_PLACE || !1, C = Sb(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : Ad, Yn = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Jt, tr = Ul(
      w,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => je({}, er)
      // Default built-in map
    ), Ta = Ul(
      w,
      "HTML_INTEGRATION_POINTS",
      () => je({}, _s)
      // Default built-in map
    );
    const R = Ul(w, "CUSTOM_ELEMENT_HANDLING", () => za(null));
    if (K = za(null), Zt(R, "tagNameCheck") && ws(R.tagNameCheck) && (K.tagNameCheck = R.tagNameCheck), Zt(R, "attributeNameCheck") && ws(R.attributeNameCheck) && (K.attributeNameCheck = R.attributeNameCheck), Zt(R, "allowCustomizedBuiltInElements") && typeof R.allowCustomizedBuiltInElements == "boolean" && (K.allowCustomizedBuiltInElements = R.allowCustomizedBuiltInElements), Ct(K), Se && (oe = !1), qn && (Wt = !0), In && (k = je({}, Cd), x = za(null), In.html === !0 && (je(k, Sd), je(x, Td)), In.svg === !0 && (je(k, $l), je(x, zl), je(x, Ps)), In.svgFilters === !0 && (je(k, Ml), je(x, zl), je(x, Ps)), In.mathMl === !0 && (je(k, Fl), je(x, Ed), je(x, Ps))), j.tagCheck = null, j.attributeCheck = null, Zt(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? j.tagCheck = w.ADD_TAGS : Ka(w.ADD_TAGS) && (k === L && (k = nn(k)), je(k, w.ADD_TAGS, st))), Zt(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? j.attributeCheck = w.ADD_ATTR : Ka(w.ADD_ATTR) && (x === z && (x = nn(x)), je(x, w.ADD_ATTR, st))), Zt(w, "ADD_FORBID_CONTENTS") && Ka(w.ADD_FORBID_CONTENTS) && (Pn === Za && (Pn = nn(Pn)), je(Pn, w.ADD_FORBID_CONTENTS, st)), Ki && (k["#text"] = !0), De && je(k, ["html", "head", "body"]), k.table && (je(k, ["tbody"]), delete V.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw aa('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw aa('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const W = X;
      X = w.TRUSTED_TYPES_POLICY;
      try {
        se = M("");
      } catch (le) {
        throw X = W, le;
      }
    } else w.TRUSTED_TYPES_POLICY === null ? (X = void 0, se = "") : (X === void 0 && (X = re()), X && typeof se == "string" && (se = M("")));
    bt && bt(w), Ci = w;
  }, Xi = je({}, [...$l, ...Ml, ...Cb]), nr = je({}, [...Fl, ...Tb]), Ss = function(w, R, W) {
    return R.namespaceURI === Jt ? w === "svg" : R.namespaceURI === wi ? w === "svg" && (W === "annotation-xml" || tr[W]) : !!Xi[w];
  }, ir = function(w, R, W) {
    return R.namespaceURI === Jt ? w === "math" : R.namespaceURI === Si ? w === "math" && Ta[W] : !!nr[w];
  }, Qt = function(w, R, W) {
    return R.namespaceURI === Si && !Ta[W] || R.namespaceURI === wi && !tr[W] ? !1 : !nr[w] && (qt[w] || !Xi[w]);
  }, ka = function(w) {
    let R = I(w);
    (!R || !R.tagName) && (R = {
      namespaceURI: Yn,
      tagName: "template"
    });
    const W = Or(w.tagName), le = Or(R.tagName);
    return Ca[w.namespaceURI] ? w.namespaceURI === Si ? Ss(W, R, le) : w.namespaceURI === wi ? ir(W, R, le) : w.namespaceURI === Jt ? Qt(W, R, le) : !!(qi === "application/xhtml+xml" && Ca[w.namespaceURI]) : !1;
  }, Sn = function(w) {
    yr(t.removed, {
      element: w
    });
    try {
      I(w).removeChild(w);
    } catch {
      if (N(w), !I(w))
        throw aa("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Cs = function(w, R, W) {
    try {
      w.removeAttributeNode(R);
    } catch {
      try {
        w.removeAttribute(W);
      } catch {
      }
    }
  }, Oa = function(w) {
    ln(w);
    const R = O(w);
    if (R) {
      const le = [];
      oa(R, (ue) => {
        yr(le, ue);
      }), oa(le, (ue) => {
        try {
          N(ue);
        } catch {
        }
      });
    }
    const W = G(w);
    if (W)
      for (let le = W.length - 1; le >= 0; --le) {
        const ue = W[le], _e = ue && ue.name;
        typeof _e == "string" && Cs(w, ue, _e);
      }
  }, Xn = function(w, R, W) {
    if (!W)
      try {
        W = R.getAttributeNode(w);
      } catch {
        W = null;
      }
    yr(t.removed, {
      attribute: W || null,
      from: R
    });
    try {
      W ? R.removeAttributeNode(W) : R.removeAttribute(w);
    } catch {
      try {
        R.removeAttribute(w);
      } catch {
      }
    }
    if (w === "is")
      if (Wt || qn)
        try {
          Sn(R);
        } catch {
        }
      else
        try {
          R.setAttribute(w, "");
        } catch {
        }
  }, ke = function(w) {
    const R = G(w);
    if (R)
      for (let W = R.length - 1; W >= 0; --W) {
        const le = R[W], ue = le && le.name;
        typeof ue != "string" || x[st(ue)] || Cs(w, le, ue);
      }
  }, ln = function(w) {
    const R = [w];
    for (; R.length > 0; ) {
      const W = R.pop();
      J(W) === tn.element && ke(W);
      const ue = O(W);
      if (ue)
        for (let _e = ue.length - 1; _e >= 0; --_e)
          R.push(ue[_e]);
    }
  }, _t = function(w, R) {
    return Me ? w === "patchsrc" ? !0 : w === "for" && R !== "label" && R !== "output" : !1;
  }, Zn = function(w) {
    if (!Me)
      return;
    const R = [w];
    for (; R.length > 0; ) {
      const W = R.pop(), le = J(W);
      if (le === tn.processingInstruction || le === tn.comment && Rt(Od, W.data)) {
        try {
          N(W);
        } catch {
        }
        continue;
      }
      if (le === tn.element) {
        const _e = W, Ze = st(de(W));
        try {
          _e.hasAttribute && _e.hasAttribute("patchsrc") && _e.removeAttribute("patchsrc"), _e.hasAttribute && _e.hasAttribute("for") && _t("for", Ze) && _e.removeAttribute("for");
        } catch {
        }
      }
      const ue = O(W);
      if (ue)
        for (let _e = ue.length - 1; _e >= 0; --_e)
          R.push(ue[_e]);
    }
  }, Yt = function(w) {
    let R = null, W = null;
    if (Lt)
      w = "<remove></remove>" + w;
    else {
      const _e = bd(w, /^[\r\n\t ]+/);
      W = _e && _e[0];
    }
    qi === "application/xhtml+xml" && Yn === Jt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const le = X ? M(w) : w;
    if (Yn === Jt)
      try {
        R = new u().parseFromString(le, qi);
      } catch {
      }
    if (!R || !R.documentElement) {
      R = he.createDocument(Yn, "template", null);
      try {
        R.documentElement.innerHTML = Sa ? se : le;
      } catch {
      }
    }
    const ue = R.body || R.documentElement;
    return w && W && ue.insertBefore(n.createTextNode(W), ue.childNodes[0] || null), Yn === Jt ? ye.call(R, De ? "html" : "body")[0] : De ? R.documentElement : ue;
  }, mt = function(w) {
    const R = D ? D(w) : w.ownerDocument;
    return pe.call(
      R || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Zi = function(w) {
    return w = _r(w, it, " "), w = _r(w, ot, " "), w = _r(w, ut, " "), w;
  }, Cn = function(w) {
    var R;
    w.normalize();
    const W = D ? D(w) : w.ownerDocument, le = pe.call(
      W || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ue = le.nextNode();
    for (; ue; )
      ue.data = Zi(ue.data), ue = le.nextNode();
    const _e = (R = w.querySelectorAll) === null || R === void 0 ? void 0 : R.call(w, "template");
    _e && oa(_e, (Ze) => {
      Dn(Ze.content) && Cn(Ze.content);
    });
  }, cn = function(w) {
    const R = Z ? Z(w) : null;
    return typeof R != "string" || st(R) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    w.attributes !== G(w) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    w.nodeType !== F(w) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    w.childNodes !== O(w);
  }, Dn = function(w) {
    if (!F || typeof w != "object" || w === null)
      return !1;
    try {
      return F(w) === tn.documentFragment;
    } catch {
      return !1;
    }
  }, Ht = function(w) {
    if (!F || typeof w != "object" || w === null)
      return !1;
    try {
      return typeof F(w) == "number";
    } catch {
      return !1;
    }
  };
  function jt(ee, w, R) {
    ee.length !== 0 && oa(ee, (W) => {
      W.call(t, w, R, Ci);
    });
  }
  const ar = function(w, R) {
    return !!(Me && w.hasChildNodes() && !Ht(w.firstElementChild) && Rt(kd, w.textContent) && Rt(kd, w.innerHTML) || Me && w.namespaceURI === Jt && $b[R] && (Ht(w.firstElementChild) || typeof w.textContent == "string" && Rt(Mb[R], w.textContent)) || w.nodeType === tn.processingInstruction || Me && w.nodeType === tn.comment && Rt(Od, w.data));
  }, $n = function(w, R) {
    if (w instanceof RegExp)
      return Rt(w, R);
    if (w instanceof Function) {
      for (var W = arguments.length, le = new Array(W > 2 ? W - 2 : 0), ue = 2; ue < W; ue++)
        le[ue - 2] = arguments[ue];
      return !!w(R, ...le);
    }
    return !1;
  }, rr = function(w, R, W) {
    if (!V[R] && Ts(R) && $n(K.tagNameCheck, R))
      return !1;
    if (Ki && !Pn[R]) {
      const le = I(w), ue = O(w);
      if (ue && le) {
        const _e = ue.length;
        for (let Ze = _e - 1; Ze >= 0; --Ze) {
          const et = w === W ? E(ue[Ze], !0) : ue[Ze];
          le.insertBefore(et, A(w));
        }
      }
    }
    return Sn(w), !0;
  }, Tn = function(w, R, W, le) {
    return w.length === 0 ? R : R === W || R === le ? nn(R) : R;
  }, Ti = function(w, R) {
    return w === R || I(w) !== null ? !1 : (Wi && ln(w), !0);
  }, Ji = function(w, R) {
    if (jt(Te.beforeSanitizeElements, w, null), Ti(w, R))
      return !0;
    if (cn(w))
      return Sn(w), !0;
    const W = st(de(w));
    if (k = Tn(Te.uponSanitizeElement, k, L, rt), jt(Te.uponSanitizeElement, w, {
      tagName: W,
      allowedTags: k
    }), Ti(w, R))
      return !0;
    if (ar(w, W))
      return Sn(w), !0;
    if (V[W] || !(j.tagCheck instanceof Function && j.tagCheck(W)) && !k[W]) {
      const ue = rr(w, W, R);
      return ue === !1 && jt(Te.afterSanitizeElements, w, null), ue;
    }
    if (J(w) === tn.element && !ka(w) || (W === "noscript" || W === "noembed" || W === "noframes") && Rt(Pb, w.innerHTML))
      return Sn(w), !0;
    if (Se && w.nodeType === tn.text) {
      const ue = Zi(w.textContent);
      w.textContent !== ue && (yr(t.removed, {
        element: w.cloneNode()
      }), w.textContent = ue);
    }
    return jt(Te.afterSanitizeElements, w, null), !1;
  }, Qi = function(w, R, W) {
    if (Q[R] || _t(R, w) || Bt && (R === "id" || R === "name") && (W in n || W in Aa))
      return !1;
    const le = x[R] || j.attributeCheck instanceof Function && j.attributeCheck(R, w);
    return oe && Rt(yt, R) || ve && Rt(Je, R) ? !0 : le ? Qa[R] || Rt(C, _r(W, U, "")) || (R === "src" || R === "xlink:href" || R === "href") && w !== "script" && yd(W, "data:") === 0 && ms[w] || me && !Rt(wn, _r(W, U, "")) ? !0 : !W : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Ts(w) && $n(K.tagNameCheck, w) && $n(K.attributeNameCheck, R, w) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      R === "is" && K.allowCustomizedBuiltInElements && $n(K.tagNameCheck, W)
    );
  }, yl = je({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ts = function(w) {
    return !yl[Or(w)] && Rt(v, w);
  }, Na = function(w, R, W, le) {
    if (X && typeof h == "object" && typeof h.getAttributeType == "function" && !W)
      switch (h.getAttributeType(w, R)) {
        case "TrustedHTML":
          return M(le);
        case "TrustedScriptURL":
          return Y(le);
      }
    return le;
  }, Es = function(w, R, W, le) {
    try {
      W ? w.setAttributeNS(W, R, le) : w.setAttribute(R, le), cn(w) ? Sn(w) : md(t.removed);
    } catch {
      Xn(R, w);
    }
  }, sr = function(w) {
    jt(Te.beforeSanitizeAttributes, w, null);
    const R = w.attributes;
    if (!R || cn(w))
      return;
    x = Tn(Te.uponSanitizeAttribute, x, z, Tt);
    const W = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: x,
      forceKeepAttr: void 0
    };
    let le = R.length;
    const ue = st(w.nodeName);
    for (; le--; ) {
      const _e = R[le], Ze = _e.name, et = _e.namespaceURI, ft = _e.value, at = st(Ze), Ei = ft;
      let wt = Ze === "value" ? Ei : gb(Ei);
      if (W.attrName = at, W.attrValue = wt, W.keepAttr = !0, W.forceKeepAttr = void 0, jt(Te.uponSanitizeAttribute, w, W), wt = W.attrValue, Gi && (at === "id" || at === "name") && yd(wt, _i) !== 0 && (Xn(Ze, w, _e), wt = _i + wt), Me && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, wt)) {
        Xn(Ze, w, _e);
        continue;
      }
      if (at === "attributename" && bd(wt, "href")) {
        Xn(Ze, w, _e);
        continue;
      }
      if (!W.forceKeepAttr) {
        if (!W.keepAttr) {
          Xn(Ze, w, _e);
          continue;
        }
        if (!Ae && Rt(Db, wt)) {
          Xn(Ze, w, _e);
          continue;
        }
        if (Se && (wt = Zi(wt)), !Qi(ue, at, wt)) {
          Xn(Ze, w, _e);
          continue;
        }
        wt = Na(ue, at, et, wt), wt !== Ei && Es(w, Ze, et, wt);
      }
    }
    jt(Te.afterSanitizeAttributes, w, null);
  }, xa = function(w) {
    let R = null;
    const W = mt(w);
    for (jt(Te.beforeSanitizeShadowDOM, w, null); R = W.nextNode(); )
      if (jt(Te.uponSanitizeShadowNode, R, null), Ji(R, w), sr(R), Dn(R.content) && xa(R.content), J(R) === tn.element) {
        const le = $(R);
        Dn(le) && (or(le), xa(le));
      }
    jt(Te.afterSanitizeShadowDOM, w, null);
  }, or = function(w) {
    const R = [{
      node: w,
      shadow: null
    }];
    for (; R.length > 0; ) {
      const W = R.pop();
      if (W.shadow) {
        xa(W.shadow);
        continue;
      }
      const le = W.node, _e = J(le) === tn.element, Ze = O(le);
      if (Ze)
        for (let et = Ze.length - 1; et >= 0; --et)
          R.push({
            node: Ze[et],
            shadow: null
          });
      if (_e) {
        const et = Z ? Z(le) : null;
        if (typeof et == "string" && st(et) === "template") {
          const ft = le.content;
          Dn(ft) && R.push({
            node: ft,
            shadow: null
          });
        }
      }
      if (_e) {
        const et = $(le);
        Dn(et) && R.push({
          node: null,
          shadow: et
        }, {
          node: et,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(ee) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, W = null, le = null, ue = null;
    if (Sa = !ee, Sa && (ee = "<!-->"), typeof ee != "string" && !Ht(ee) && (ee = wb(ee), typeof ee != "string"))
      throw aa("dirty is not a string, aborting");
    if (!t.isSupported)
      return ee;
    Qe ? (k = rt, x = Tt) : Yi(w), (Te.uponSanitizeElement.length > 0 || Te.uponSanitizeAttribute.length > 0) && (k = nn(k)), Te.uponSanitizeAttribute.length > 0 && (x = nn(x)), t.removed = [];
    const _e = Wi && typeof ee != "string" && Ht(ee);
    if (_e) {
      Zn(ee);
      const ft = de(ee);
      if (typeof ft == "string") {
        const at = st(ft);
        if (!k[at] || V[at])
          throw Oa(ee), aa("root node is forbidden and cannot be sanitized in-place");
      }
      if (cn(ee))
        throw Oa(ee), aa("root node is clobbered and cannot be sanitized in-place");
      try {
        or(ee);
      } catch (at) {
        throw Oa(ee), at;
      }
    } else if (Ht(ee))
      R = Yt("<!---->"), W = R.ownerDocument.importNode(ee, !0), W.nodeType === tn.element && W.nodeName === "BODY" || W.nodeName === "HTML" ? R = W : R.appendChild(W), or(W);
    else {
      if (!Wt && !Se && !De && // eslint-disable-next-line unicorn/prefer-includes
      ee.indexOf("<") === -1)
        return X && dt ? M(ee) : ee;
      if (R = Yt(ee), !R)
        return Wt ? null : dt ? se : "";
    }
    R && Lt && Sn(R.firstChild);
    const Ze = _e ? ee : R;
    try {
      const ft = mt(Ze);
      for (; le = ft.nextNode(); )
        Ji(le, Ze), sr(le), Dn(le.content) && xa(le.content);
    } catch (ft) {
      throw _e && (Oa(ee), oa(t.removed, (at) => {
        at.element && ln(at.element);
      })), ft;
    }
    if (_e)
      return oa(t.removed, (ft) => {
        ft.element && ln(ft.element);
      }), Se && Cn(ee), ee;
    if (Wt) {
      if (Se && Cn(R), qn)
        for (ue = Ce.call(R.ownerDocument); R.firstChild; )
          ue.appendChild(R.firstChild);
      else
        ue = R;
      return (x.shadowroot || x.shadowrootmode) && (ue = Be.call(i, ue, !0)), ue;
    }
    let et = De ? R.outerHTML : R.innerHTML;
    return De && k["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && Rt(Rb, R.ownerDocument.doctype.name) && (et = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + et), Se && (et = Zi(et)), X && dt ? M(et) : et;
  }, t.setConfig = function() {
    let ee = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Yi(ee), Qe = !0, rt = k, Tt = x;
  }, t.clearConfig = function() {
    Ci = null, Qe = !1, rt = null, Tt = null, X = ge, se = "";
  }, t.isValidAttribute = function(ee, w, R) {
    Ci || Yi({});
    const W = st(ee), le = st(w);
    return Qi(W, le, R);
  }, t.addHook = function(ee, w) {
    typeof w == "function" && Zt(Te, ee) && yr(Te[ee], w);
  }, t.removeHook = function(ee, w) {
    if (Zt(Te, ee)) {
      if (w !== void 0) {
        const R = pb(Te[ee], w);
        return R === -1 ? void 0 : vb(Te[ee], R, 1)[0];
      }
      return md(Te[ee]);
    }
  }, t.removeHooks = function(ee) {
    Zt(Te, ee) && (Te[ee] = []);
  }, t.removeAllHooks = function() {
    Te = Nd();
  }, t;
}
var Kh = Gh();
function au(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bl, xd;
function Ub() {
  if (xd) return Bl;
  xd = 1;
  var e = /["'&<>]/;
  Bl = t;
  function t(n) {
    var i = "" + n, a = e.exec(i);
    if (!a)
      return i;
    var r, s = "", o = 0, l = 0;
    for (o = a.index; o < i.length; o++) {
      switch (i.charCodeAt(o)) {
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
      l !== o && (s += i.substring(l, o)), l = o + 1, s += r;
    }
    return l !== o ? s + i.substring(l, o) : s;
  }
  return Bl;
}
var Bb = Ub();
const lo = /* @__PURE__ */ au(Bb);
function Hb() {
  return globalThis._nc_l10n_locale;
}
function jb() {
  return Hb().replaceAll(/_/g, "-");
}
function dl() {
  return globalThis._nc_l10n_language;
}
function Vb(e) {
  const t = dl();
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
function Wh(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function b(e, t, n, i, a) {
  const r = typeof n == "object" ? n : void 0, s = typeof i == "number" ? i : typeof n == "number" ? n : void 0, o = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof i == "object" ? i : {}
  }, l = (A) => A, d = (o.sanitize ? Kh.sanitize : l) || l, u = o.escape ? lo : l, h = (A) => typeof A == "string" || typeof A == "number", S = (A, O, I) => A.replace(/%n/g, "" + I).replace(/{([^{}]*)}/g, ($, G) => {
    if (O === void 0 || !(G in O))
      return u($);
    const F = O[G];
    return h(F) ? u(`${F}`) : typeof F == "object" && h(F.value) ? (F.escape !== !1 ? lo : l)(`${F.value}`) : u($);
  });
  let N = (a?.bundle ?? Wh(e)).translations[t] || t;
  return N = Array.isArray(N) ? N[0] : N, d(typeof r == "object" || s !== void 0 ? S(
    N,
    r,
    s
  ) : N);
}
function Un(e, t, n, i, a, r) {
  const s = "_" + t + "_::_" + n + "_", o = r?.bundle ?? Wh(e), l = o.translations[s];
  if (typeof l < "u") {
    const d = l;
    if (Array.isArray(d)) {
      const u = o.pluralFunction(i);
      return b(e, d[u], a, i, r);
    }
  }
  return i === 1 ? b(e, t, a, i, r) : b(e, n, a, i, r);
}
function Gb(e, t = dl()) {
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
class co {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? co.GLOBAL_SCOPE_PERSISTENT : co.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
  }
  scopeKey(t) {
    return `${this.scope}${t}`;
  }
  setItem(t, n) {
    this.wrapped.setItem(this.scopeKey(t), n);
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
class Kb {
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
    return new co(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function qh(e) {
  return new Kb(e);
}
function Wb() {
  try {
    return iu("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var Hl, Ld;
function Yh() {
  if (Ld) return Hl;
  Ld = 1;
  var e = {};
  return Hl = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, Hl;
}
var jl, Rd;
function Xh() {
  if (Rd) return jl;
  Rd = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return jl = {
    MAX_LENGTH: t,
    MAX_SAFE_COMPONENT_LENGTH: i,
    MAX_SAFE_BUILD_LENGTH: a,
    MAX_SAFE_INTEGER: n,
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
  }, jl;
}
var Ds = { exports: {} }, Id;
function qb() {
  return Id || (Id = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = Xh(), r = Yh();
    t = e.exports = {};
    const s = t.re = [], o = t.safeRe = [], l = t.src = [], d = t.safeSrc = [], u = t.t = {};
    let h = 0;
    const S = "[a-zA-Z0-9-]", E = [
      ["\\s", 1],
      ["\\d", a],
      [S, i]
    ], N = (O) => {
      for (const [I, $] of E)
        O = O.split(`${I}*`).join(`${I}{0,${$}}`).split(`${I}+`).join(`${I}{1,${$}}`);
      return O;
    }, A = (O, I, $) => {
      const G = N(I), F = h++;
      r(O, F, I), u[O] = F, l[F] = I, d[F] = G, s[F] = new RegExp(I, $ ? "g" : void 0), o[F] = new RegExp(G, $ ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${S}*`), A("MAINVERSION", `(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${l[u.PRERELEASEIDENTIFIER]}(?:\\.${l[u.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${l[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[u.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${S}+`), A("BUILD", `(?:\\+(${l[u.BUILDIDENTIFIER]}(?:\\.${l[u.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${l[u.MAINVERSION]}${l[u.PRERELEASE]}?${l[u.BUILD]}?`), A("FULL", `^${l[u.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${l[u.MAINVERSIONLOOSE]}${l[u.PRERELEASELOOSE]}?${l[u.BUILD]}?`), A("LOOSE", `^${l[u.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${l[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${l[u.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:${l[u.PRERELEASE]})?${l[u.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:${l[u.PRERELEASELOOSE]})?${l[u.BUILD]}?)?)?`), A("XRANGE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${l[u.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", l[u.COERCEPLAIN] + `(?:${l[u.PRERELEASE]})?(?:${l[u.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", l[u.COERCE], !0), A("COERCERTLFULL", l[u.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${l[u.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${l[u.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${l[u.LONECARET]}${l[u.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${l[u.LONECARET]}${l[u.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${l[u.GTLT]}\\s*(${l[u.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]}|${l[u.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${l[u.XRANGEPLAIN]})\\s+-\\s+(${l[u.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${l[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[u.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(Ds, Ds.exports)), Ds.exports;
}
var Vl, Pd;
function Yb() {
  if (Pd) return Vl;
  Pd = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Vl = (i) => i ? typeof i != "object" ? e : i : t, Vl;
}
var Gl, Dd;
function Xb() {
  if (Dd) return Gl;
  Dd = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), s = e.test(a);
    return r && s && (i = +i, a = +a), i === a ? 0 : r && !s ? -1 : s && !r ? 1 : i < a ? -1 : 1;
  };
  return Gl = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, Gl;
}
var Kl, $d;
function Zh() {
  if ($d) return Kl;
  $d = 1;
  const e = Yh(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = Xh(), { safeRe: i, t: a } = qb(), r = Yb(), { compareIdentifiers: s } = Xb(), o = (d, u) => {
    const h = u.split(".");
    if (h.length > d.length)
      return !1;
    for (let S = 0; S < h.length; S++)
      if (s(d[S], h[S]) !== 0)
        return !1;
    return !0;
  };
  class l {
    constructor(u, h) {
      if (h = r(h), u instanceof l) {
        if (u.loose === !!h.loose && u.includePrerelease === !!h.includePrerelease)
          return u;
        u = u.version;
      } else if (typeof u != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof u}".`);
      if (u.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", u, h), this.options = h, this.loose = !!h.loose, this.includePrerelease = !!h.includePrerelease;
      const S = u.trim().match(h.loose ? i[a.LOOSE] : i[a.FULL]);
      if (!S)
        throw new TypeError(`Invalid Version: ${u}`);
      if (this.raw = u, this.major = +S[1], this.minor = +S[2], this.patch = +S[3], this.major > n || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > n || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > n || this.patch < 0)
        throw new TypeError("Invalid patch version");
      S[4] ? this.prerelease = S[4].split(".").map((E) => {
        if (/^[0-9]+$/.test(E)) {
          const N = +E;
          if (N >= 0 && N < n)
            return N;
        }
        return E;
      }) : this.prerelease = [], this.build = S[5] ? S[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(u) {
      if (e("SemVer.compare", this.version, this.options, u), !(u instanceof l)) {
        if (typeof u == "string" && u === this.version)
          return 0;
        u = new l(u, this.options);
      }
      return u.version === this.version ? 0 : this.compareMain(u) || this.comparePre(u);
    }
    compareMain(u) {
      return u instanceof l || (u = new l(u, this.options)), this.major < u.major ? -1 : this.major > u.major ? 1 : this.minor < u.minor ? -1 : this.minor > u.minor ? 1 : this.patch < u.patch ? -1 : this.patch > u.patch ? 1 : 0;
    }
    comparePre(u) {
      if (u instanceof l || (u = new l(u, this.options)), this.prerelease.length && !u.prerelease.length)
        return -1;
      if (!this.prerelease.length && u.prerelease.length)
        return 1;
      if (!this.prerelease.length && !u.prerelease.length)
        return 0;
      let h = 0;
      do {
        const S = this.prerelease[h], E = u.prerelease[h];
        if (e("prerelease compare", h, S, E), S === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (S === void 0)
          return -1;
        if (S === E)
          continue;
        return s(S, E);
      } while (++h);
    }
    compareBuild(u) {
      u instanceof l || (u = new l(u, this.options));
      let h = 0;
      do {
        const S = this.build[h], E = u.build[h];
        if (e("build compare", h, S, E), S === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (S === void 0)
          return -1;
        if (S === E)
          continue;
        return s(S, E);
      } while (++h);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(u, h, S) {
      if (u.startsWith("pre")) {
        if (!h && S === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (h) {
          const E = `-${h}`.match(this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]);
          if (!E || E[1] !== h)
            throw new Error(`invalid identifier: ${h}`);
        }
      }
      switch (u) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", h, S);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", h, S);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", h, S), this.inc("pre", h, S);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", h, S), this.inc("pre", h, S);
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
          const E = Number(S) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [E];
          else {
            let N = this.prerelease.length;
            for (; --N >= 0; )
              typeof this.prerelease[N] == "number" && (this.prerelease[N]++, N = -2);
            if (N === -1) {
              if (h === this.prerelease.join(".") && S === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(E);
            }
          }
          if (h) {
            let N = [h, E];
            if (S === !1 && (N = [h]), o(this.prerelease, h)) {
              const A = this.prerelease[h.split(".").length];
              isNaN(A) && (this.prerelease = N);
            } else
              this.prerelease = N;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${u}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return Kl = l, Kl;
}
var Wl, Md;
function Zb() {
  if (Md) return Wl;
  Md = 1;
  const e = Zh();
  return Wl = (n, i) => new e(n, i).major, Wl;
}
var Jb = Zb();
const Fd = /* @__PURE__ */ au(Jb);
var ql, zd;
function Qb() {
  if (zd) return ql;
  zd = 1;
  const e = Zh();
  return ql = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, ql;
}
var Yl, Ud;
function ey() {
  if (Ud) return Yl;
  Ud = 1;
  const e = Qb();
  return Yl = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Yl;
}
var ty = ey();
const ny = /* @__PURE__ */ au(ty);
class iy {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !ny(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Fd(t.getVersion()) !== Fd(this.getVersion()) && console.warn(
      "Proxying an event bus of version " + t.getVersion() + " with " + this.getVersion()
    ), this.bus = t;
  }
  getVersion() {
    return "3.3.3";
  }
  subscribe(t, n) {
    this.bus.subscribe(t, n);
  }
  unsubscribe(t, n) {
    this.bus.unsubscribe(t, n);
  }
  emit(t, ...n) {
    this.bus.emit(t, ...n);
  }
}
class ay {
  handlers = /* @__PURE__ */ new Map();
  getVersion() {
    return "3.3.3";
  }
  subscribe(t, n) {
    this.handlers.set(
      t,
      (this.handlers.get(t) || []).concat(
        n
      )
    );
  }
  unsubscribe(t, n) {
    this.handlers.set(
      t,
      (this.handlers.get(t) || []).filter((i) => i !== n)
    );
  }
  emit(t, ...n) {
    (this.handlers.get(t) || []).forEach((a) => {
      try {
        a(n[0]);
      } catch (r) {
        console.error("could not invoke event listener", r);
      }
    });
  }
}
let Sr = null;
function ru() {
  return Sr !== null ? Sr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Sr = new iy(window._nc_event_bus) : Sr = window._nc_event_bus = new ay(), Sr);
}
function Jh(e, t) {
  ru().subscribe(e, t);
}
function ry(e, t) {
  ru().unsubscribe(e, t);
}
function hi(e, ...t) {
  ru().emit(e, ...t);
}
const Qh = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const sy = Object.prototype.toString, oy = (e) => sy.call(e) === "[object Object]", Pa = () => {
}, ly = /* @__PURE__ */ cy();
function cy() {
  var e, t, n;
  return Qh && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function Xl(e) {
  return Array.isArray(e) ? e : [e];
}
function uy(e, t, n) {
  return ct(e, t, {
    ...n,
    immediate: !0
  });
}
const ep = Qh ? window : void 0;
function Nr(e) {
  var t;
  const n = di(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Wa(...e) {
  const t = (i, a, r, s) => (i.addEventListener(a, r, s), () => i.removeEventListener(a, r, s)), n = q(() => {
    const i = Xl(di(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return uy(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Nr(r))) !== null && i !== void 0 ? i : [ep].filter((r) => r != null),
      Xl(di(n.value ? e[1] : e[0])),
      Xl(g(n.value ? e[2] : e[1])),
      di(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, s], o, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const d = oy(s) ? { ...s } : s, u = i.flatMap((h) => a.flatMap((S) => r.map((E) => t(h, S, E, d))));
    l(() => {
      u.forEach((h) => h());
    });
  }, { flush: "post" });
}
let Bd = !1;
function Hd(e, t, n = {}) {
  const { window: i = ep, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: o = !1 } = n;
  if (!i) return o ? {
    stop: Pa,
    cancel: Pa,
    trigger: Pa
  } : Pa;
  if (ly && !Bd) {
    Bd = !0;
    const O = { passive: !0 };
    Array.from(i.document.body.children).forEach((I) => I.addEventListener("click", Pa, O)), i.document.documentElement.addEventListener("click", Pa, O);
  }
  let l = !0;
  const d = (O) => di(a).some((I) => {
    if (typeof I == "string") return Array.from(i.document.querySelectorAll(I)).some(($) => $ === O.target || O.composedPath().includes($));
    {
      const $ = Nr(I);
      return $ && (O.target === $ || O.composedPath().includes($));
    }
  });
  function u(O) {
    const I = di(O);
    return I && I.$.subTree.shapeFlag === 16;
  }
  function h(O, I) {
    const $ = di(O), G = $.$.subTree && $.$.subTree.children;
    return G == null || !Array.isArray(G) ? !1 : G.some((F) => F.el === I.target || I.composedPath().includes(F.el));
  }
  const S = (O) => {
    const I = Nr(e);
    if (O.target != null && !(!(I instanceof Element) && u(e) && h(e, O)) && !(!I || I === O.target || O.composedPath().includes(I))) {
      if ("detail" in O && O.detail === 0 && (l = !d(O)), !l) {
        l = !0;
        return;
      }
      t(O);
    }
  };
  let E = !1;
  const N = [
    Wa(i, "click", (O) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), S(O));
    }, {
      passive: !0,
      capture: r
    }),
    Wa(i, "pointerdown", (O) => {
      const I = Nr(e);
      l = !d(O) && !!(I && !O.composedPath().includes(I));
    }, { passive: !0 }),
    s && Wa(i, "blur", (O) => {
      setTimeout(() => {
        const I = Nr(e);
        let $ = i.document.activeElement;
        for (; $?.shadowRoot; ) $ = $.shadowRoot.activeElement;
        $?.tagName === "IFRAME" && !I?.contains(i.document.activeElement) && t(O);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), A = () => N.forEach((O) => O());
  return o ? {
    stop: A,
    cancel: () => {
      l = !1;
    },
    trigger: (O) => {
      l = !0, S(O), l = !1;
    }
  } : A;
}
function dy(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, o = /* @__PURE__ */ Pt({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ Pt({
    x: 0,
    y: 0
  }), d = q(() => o.x - l.x), u = q(() => o.y - l.y), { max: h, abs: S } = Math, E = q(() => h(S(d.value), S(u.value)) >= n), N = /* @__PURE__ */ Kf(!1), A = q(() => E.value ? S(d.value) > S(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), O = (J) => [J.touches[0].clientX, J.touches[0].clientY], I = (J, de) => {
    o.x = J, o.y = de;
  }, $ = (J, de) => {
    l.x = J, l.y = de;
  }, G = {
    passive: s,
    capture: !s
  }, F = (J) => {
    N.value && a?.(J, A.value), N.value = !1;
  }, Z = [
    Wa(e, "touchstart", (J) => {
      if (J.touches.length !== 1) return;
      const [de, X] = O(J);
      I(de, X), $(de, X), r?.(J);
    }, G),
    Wa(e, "touchmove", (J) => {
      if (J.touches.length !== 1) return;
      const [de, X] = O(J);
      $(de, X), G.capture && !G.passive && Math.abs(d.value) > Math.abs(u.value) && J.preventDefault(), !N.value && E.value && (N.value = !0), N.value && i?.(J);
    }, G),
    Wa(e, ["touchend", "touchcancel"], F, G)
  ];
  return {
    isSwiping: N,
    direction: A,
    coordsStart: o,
    coordsEnd: l,
    lengthX: d,
    lengthY: u,
    stop: () => Z.forEach((J) => J())
  };
}
var fy = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = Ug(), r = zg(), s = /* @__PURE__ */ Pe([]), o = q(() => s.value.reduce((U, v) => (U[~~v.id] = v) && U, {})), l = q(() => s.value.length), d = /* @__PURE__ */ Pe(null), u = /* @__PURE__ */ Pe(!1), h = /* @__PURE__ */ Pe({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), S = /* @__PURE__ */ Pe({
      splitter: null,
      timeoutId: null
    }), E = q(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": h.value.dragging,
      "splitpanes--ready": u.value
    })), N = () => {
      document.addEventListener("mousemove", I, { passive: !1 }), document.addEventListener("mouseup", $), "ontouchstart" in window && (document.addEventListener("touchmove", I, { passive: !1 }), document.addEventListener("touchend", $));
    }, A = () => {
      document.removeEventListener("mousemove", I, { passive: !1 }), document.removeEventListener("mouseup", $), "ontouchstart" in window && (document.removeEventListener("touchmove", I, { passive: !1 }), document.removeEventListener("touchend", $));
    }, O = (U, v) => {
      let C = U.target.closest(".splitpanes__splitter");
      if (C) {
        let { left: k, top: L } = C.getBoundingClientRect(), { clientX: x, clientY: z } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
        h.value.cursorOffset = i.horizontal ? z - L : x - k;
      }
      N(), h.value.mouseDown = !0, h.value.activeSplitter = v, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, I = (U) => {
      h.value.mouseDown && (U.preventDefault(), h.value.dragging || (window.getSelection()?.removeAllRanges(), h.value.dragging = !0), requestAnimationFrame(() => {
        X(J(U)), Je("resize", { event: U }, !0);
      }));
    }, $ = (U) => {
      h.value.dragging && (window.getSelection()?.removeAllRanges(), Je("resized", { event: U }, !0)), h.value.mouseDown = !1, h.value.activeSplitter = null, setTimeout(() => {
        h.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, G = (U, v) => {
      "ontouchstart" in window && (U.preventDefault(), S.value.splitter === v ? (clearTimeout(S.value.timeoutId), S.value.timeoutId = null, F(U, v), S.value.splitter = null) : (S.value.splitter = v, S.value.timeoutId = setTimeout(() => S.value.splitter = null, 500))), h.value.dragging || Je("splitter-click", {
        event: U,
        index: v
      }, !0);
    }, F = (U, v) => {
      if (Je("splitter-dblclick", {
        event: U,
        index: v
      }, !0), i.maximizePanes) {
        let C = 0;
        s.value = s.value.map((k, L) => (k.size = L === v ? k.max : k.min, L !== v && (C += k.min), k)), s.value[v].size -= C, Je("pane-maximize", {
          event: U,
          index: v,
          pane: s.value[v]
        }), Je("resized", {
          event: U,
          index: v
        }, !0);
      }
    }, Z = (U, v) => {
      if (!i.keyboardStep) return;
      let C = i.horizontal ? U.key === "ArrowDown" : U.key === "ArrowRight", k = i.horizontal ? U.key === "ArrowUp" : U.key === "ArrowLeft";
      if (!C && !k) return;
      U.preventDefault(), h.value.activeSplitter = v;
      let L = (C ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), x = te(v) + s.value[v].size;
      se(Math.min(Math.max(x + L * i.keyboardStep, 0), 100)), Je("resize", { event: U }, !0), Je("resized", { event: U }, !0), h.value.activeSplitter = null;
    }, D = (U, v) => {
      let C = o.value[v];
      C && Je("pane-click", {
        event: U,
        index: C.index,
        pane: C
      });
    }, J = (U) => {
      let v = d.value.getBoundingClientRect(), { clientX: C, clientY: k } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
      return {
        x: C - (i.horizontal ? 0 : h.value.cursorOffset) - v.left,
        y: k - (i.horizontal ? h.value.cursorOffset : 0) - v.top
      };
    }, de = (U) => {
      U = U[i.horizontal ? "y" : "x"];
      let v = d.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (U = v - U), U * 100 / v;
    }, X = (U) => {
      se(de(U));
    }, se = (U) => {
      let v = h.value.activeSplitter;
      if (v === null || v >= s.value.length - 1) return;
      let C = {
        prevPanesSize: te(v),
        nextPanesSize: ae(v),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, k = 0 + (i.pushOtherPanes ? 0 : C.prevPanesSize), L = 100 - (i.pushOtherPanes ? 0 : C.nextPanesSize);
      U = Math.max(Math.min(U, L), k);
      let x = [v, v + 1], z = s.value[x[0]] || null, K = s.value[x[1]] || null, V = z !== null && z.max < 100 && U >= z.max + C.prevPanesSize, Q = K !== null && K.max < 100 && U <= 100 - (K.max + ae(v + 1));
      if (V || Q) {
        V ? (z.size = z.max, K.size = Math.min(Math.max(100 - z.max - C.prevPanesSize - C.nextPanesSize, K.min), K.max)) : (z.size = Math.min(Math.max(100 - K.max - C.prevPanesSize - ae(v + 1), z.min), z.max), K.size = K.max);
        return;
      }
      if (i.pushOtherPanes) {
        let j = ge(C, U);
        if (!j) return;
        ({ sums: C, panesToResize: x } = j), z = s.value[x[0]] || null, K = s.value[x[1]] || null;
      }
      z !== null && (z.size = Math.min(Math.max(U - C.prevPanesSize - C.prevReachedMinPanes, z.min), z.max)), K !== null && (K.size = Math.min(Math.max(100 - U - C.nextPanesSize - C.nextReachedMinPanes, K.min), K.max));
    }, ge = (U, v) => {
      let C = h.value.activeSplitter, k = [C, C + 1];
      if (v < U.prevPanesSize + s.value[k[0]].min) {
        if (k[0] = P(C).index, U.prevReachedMinPanes = 0, k[0] < C && s.value.forEach((L, x) => {
          x > k[0] && x <= C && (L.size = L.min, U.prevReachedMinPanes += L.min);
        }), k[0] === void 0) return U.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((L, x) => {
          x > 0 && x <= C && (L.size = L.min, U.prevReachedMinPanes += L.min);
        }), s.value[k[1]].size = 100 - U.prevReachedMinPanes - s.value[0].min - U.prevPanesSize - U.nextPanesSize, null;
        U.prevPanesSize = te(k[0]);
      }
      return v > 100 - U.nextPanesSize - s.value[k[1]].min && (k[1] = M(C).index, U.nextReachedMinPanes = 0, k[1] > C + 1 && s.value.forEach((L, x) => {
        x > C && x < k[1] && (L.size = L.min, U.nextReachedMinPanes += L.min);
      }), U.nextPanesSize = k[1] === void 0 ? 0 : ae(k[1] - 1), k[1] === void 0) ? (U.nextReachedMinPanes = 0, s.value.forEach((L, x) => {
        x >= C + 1 && (L.size = L.min, U.nextReachedMinPanes += L.min);
      }), k[0] !== void 0 && (s.value[k[0]].size = 100 - U.prevPanesSize - ae(k[0] - 1)), null) : {
        sums: U,
        panesToResize: k
      };
    }, te = (U) => s.value.reduce((v, C, k) => v + (k < U ? C.size : 0), 0), ae = (U) => s.value.reduce((v, C, k) => v + (k > U + 1 ? C.size : 0), 0), P = (U) => [...s.value].reverse().find((v) => v.index < U && v.size > v.min) || {}, M = (U) => s.value.find((v) => v.index > U + 1 && v.size > v.min) || {}, Y = () => {
      let U = Array.from(d.value?.children || []);
      for (let v of U) {
        let C = v.classList.contains("splitpanes__pane"), k = v.classList.contains("splitpanes__splitter");
        !C && !k && (v.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, re = (U, v, C = !1) => {
      let k = U - 1, L = document.createElement("div");
      L.classList.add("splitpanes__splitter"), C || (L.onmousedown = (x) => O(x, k), typeof window < "u" && "ontouchstart" in window && (L.ontouchstart = (x) => O(x, k)), L.onclick = (x) => G(x, k + 1), i.keyboardStep && (L.setAttribute("tabindex", "0"), L.setAttribute("role", "separator"), L.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), L.onkeydown = (x) => Z(x, k))), L.ondblclick = (x) => F(x, k + 1), v.parentNode.insertBefore(L, v);
    }, ie = (U) => {
      U.onmousedown = null, U.onclick = null, U.ondblclick = null, U.onkeydown = null, U.remove();
    }, he = () => {
      let U = Array.from(d.value?.children || []);
      for (let C of U) C.className.includes("splitpanes__splitter") && ie(C);
      let v = 0;
      for (let C of U) C.className.includes("splitpanes__pane") && (!v && i.firstSplitter ? re(v, C, !0) : v && re(v, C), v++);
    }, pe = ({ uid: U, ...v }) => {
      let C = o.value[U];
      for (let [k, L] of Object.entries(v)) C[k] = L;
    }, Ce = !1, ye = (U) => {
      let v = -1;
      Array.from(d.value?.children || []).some((C) => (C.className.includes("splitpanes__pane") && v++, C.isSameNode(U.el))), s.value.splice(v, 0, {
        ...U,
        index: v
      }), s.value.forEach((C, k) => C.index = k), u.value && !Ce && (Ce = !0, an(() => {
        he(), Te({ addedPane: s.value[v] }), Je("pane-add", { pane: s.value[v] }), Ce = !1;
      }));
    }, Be = (U) => {
      let v = s.value.findIndex((k) => k.id === U);
      s.value[v].el = null;
      let C = s.value.splice(v, 1)[0];
      s.value.forEach((k, L) => k.index = L), an(() => {
        he(), Je("pane-remove", { pane: C }), Te({ removedPane: {
          ...C
        } });
      });
    }, Te = (U = {}) => {
      !U.addedPane && !U.removedPane ? ot() : s.value.some((v) => v.givenSize !== null || v.min || v.max < 100) ? ut(U) : it(), u.value && Je("resized");
    }, it = () => {
      let U = 100 / l.value, v = 100, C = [], k = [];
      for (let L of s.value) L.size = Math.max(Math.min(U, L.max), L.min), v -= L.size, L.size >= L.max && C.push(L.id), L.size <= L.min && k.push(L.id);
      Math.abs(v) > 0.1 && yt(v, C, k);
    }, ot = () => {
      let U = 100, v = [], C = [], k = 0;
      for (let x of s.value) U -= x.size, x.givenSize !== null && k++, x.size >= x.max && v.push(x.id), x.size <= x.min && C.push(x.id);
      let L = 100;
      if (U > 0.1) {
        for (let x of s.value) x.givenSize === null && (x.size = Math.max(Math.min(U / (l.value - k), x.max), x.min)), L -= x.size;
        L > 0.1 && yt(L, v, C);
      }
    }, ut = ({ addedPane: U, removedPane: v } = {}) => {
      let C = s.value.reduce((V, Q) => V + (Q.givenSize === null ? 0 : Q.givenSize), 0), k = s.value.filter((V) => V.givenSize === null).length, L = k > 0 ? (100 - C) / k : 0, x = 0, z = [], K = [];
      for (let V of s.value) x -= V.size, V.size >= V.max && z.push(V.id), V.size <= V.min && K.push(V.id);
      if (!(Math.abs(x) < 0.1)) {
        x = 100;
        for (let V of s.value) V.givenSize === null && (V.size = Math.max(Math.min(L, V.max), V.min)), x -= V.size, V.size >= V.max && z.push(V.id), V.size <= V.min && K.push(V.id);
        Math.abs(x) > 0.1 && yt(x, z, K);
      }
    }, yt = (U, v, C) => {
      let k;
      k = U > 0 ? U / (l.value - v.length) : U / (l.value - C.length), s.value.forEach((L, x) => {
        if (U > 0 && !v.includes(L.id)) {
          let z = Math.max(Math.min(L.size + k, L.max), L.min), K = z - L.size;
          U -= K, L.size = z;
        } else if (!C.includes(L.id)) {
          let z = Math.max(Math.min(L.size + k, L.max), L.min), K = z - L.size;
          U -= K, L.size = z;
        }
      }), Math.abs(U) > 0.1 && u.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, Je = (U, v = void 0, C = !1) => {
      let k = v?.index ?? h.value.activeSplitter ?? null;
      n(U, {
        ...v,
        ...k !== null && { index: k },
        ...C && k !== null && {
          prevPane: s.value[k - +!!i.firstSplitter],
          nextPane: s.value[k + +!i.firstSplitter]
        },
        panes: s.value.map((L) => ({
          min: L.min,
          max: L.max,
          size: L.size
        }))
      });
    };
    ct(() => i.firstSplitter, () => he()), ct(() => i.horizontal, (U) => an(() => {
      n("direction-changed", {
        horizontal: U,
        panes: s.value.map((v) => ({
          min: v.min,
          max: v.max,
          size: v.size
        }))
      });
    })), Hi(() => {
      Y(), he(), Te(), Je("ready"), u.value = !0;
    }), Xa(() => u.value = !1);
    let wn = () => {
      let { class: U, ...v } = a;
      return Xt("div", {
        ref: d,
        class: [E.value, U],
        ...v
      }, r.default?.());
    };
    return vn("panes", s), vn("indexedPanes", o), vn("horizontal", q(() => i.horizontal)), vn("requestUpdate", pe), vn("onPaneAdd", ye), vn("onPaneRemove", Be), vn("onPaneClick", D), (U, v) => (_(), $e(Zc(wn)));
  }
}), hy = {
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
    let t = e, n = $t("requestUpdate"), i = $t("onPaneAdd"), a = $t("horizontal"), r = $t("onPaneRemove"), s = $t("onPaneClick"), o = _a()?.uid, l = $t("indexedPanes"), d = q(() => l.value[o]), u = /* @__PURE__ */ Pe(null), h = q(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, E.value), S.value);
    }), S = q(() => {
      let A = parseFloat(t.minSize);
      return isNaN(A) ? 0 : A;
    }), E = q(() => {
      let A = parseFloat(t.maxSize);
      return isNaN(A) ? 100 : A;
    }), N = q(() => {
      let A = d.value?.size ?? (t.size === void 0 ? void 0 : h.value);
      return A === void 0 ? "" : `${a.value ? "height" : "width"}: ${A}%`;
    });
    return ct(() => h.value, (A) => n({
      uid: o,
      size: A
    })), ct(() => S.value, (A) => n({
      uid: o,
      min: A
    })), ct(() => E.value, (A) => n({
      uid: o,
      max: A
    })), Hi(() => {
      i({
        id: o,
        el: u.value,
        min: S.value,
        max: E.value,
        givenSize: t.size === void 0 ? null : h.value,
        size: h.value
      });
    }), Xa(() => r(o)), (A, O) => (_(), T("div", {
      ref_key: "paneEl",
      ref: u,
      class: "splitpanes__pane",
      onClick: O[0] ||= (I) => g(s)(I, A._.uid),
      style: on(N.value)
    }, [Re(A.$slots, "default")], 4));
  }
}, py = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", vy = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", gy = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", my = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const su = 1024, tp = su / 2, uo = (e) => document.documentElement.clientWidth < e, np = /* @__PURE__ */ Pe(uo(su)), ip = /* @__PURE__ */ Pe(uo(tp));
window.addEventListener("resize", () => {
  np.value = uo(su), ip.value = uo(tp);
}, { passive: !0 });
function gs() {
  return /* @__PURE__ */ Yr(np);
}
function by() {
  return /* @__PURE__ */ Yr(ip);
}
class yy {
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
    const n = Object.values(t.translations[""] ?? {}).map(({ msgid: i, msgid_plural: a, msgstr: r }) => a !== void 0 ? [`_${i}_::_${a}_`, r] : [i, r[0]]);
    this.bundle.translations = {
      ...this.bundle.translations,
      ...Object.fromEntries(n)
    };
  }
  /**
   * Get translated string (singular form), optionally with placeholders
   *
   * @param original original string to translate
   * @param placeholders map of placeholder key to value
   */
  gettext(t, n = {}) {
    return b("", t, n, void 0, { bundle: this.bundle });
  }
  /**
   * Get translated string with plural forms
   *
   * @param singular Singular text form
   * @param plural Plural text form to be used if `count` requires it
   * @param count The number to insert into the text
   * @param placeholders optional map of placeholder key to value
   */
  ngettext(t, n, i, a = {}) {
    return Un("", t, n, i, a, { bundle: this.bundle });
  }
}
class _y {
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
    return this.setLanguage(dl().replace("-", "_"));
  }
  /**
   * Register a new translation bundle for a specified language.
   *
   * Please note that existing translations for that language will be overwritten.
   *
   * @param language - Language this is the translation for
   * @param data - The translation bundle
   */
  addTranslation(t, n) {
    return this.translations[t] = n, this;
  }
  enableDebugMode() {
    return this.debug = !0, this;
  }
  build() {
    this.debug && console.debug(`Creating gettext instance for language ${this.language}`);
    const t = new yy((n) => Gb(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function wy() {
  return new _y();
}
const ap = wy().detectLanguage().build(), St = (...e) => ap.gettext(...e);
function ji(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== dl() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        ap.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const Sy = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], Cy = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], Ty = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], Ey = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], Ay = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], ky = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], Oy = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], Ny = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], xy = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const Ly = /* @__PURE__ */ Symbol(""), [Ry] = window.OC?.config?.version?.split(".") ?? [], rp = Number.parseInt(Ry ?? "35"), Iy = rp < 32, Vi = rp < 34, Py = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function Dy() {
  return $t(Py, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Xe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, $y = { class: "button-vue__wrapper" }, My = { class: "button-vue__icon" }, Fy = { class: "button-vue__text" }, zy = /* @__PURE__ */ xt({
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
    const n = e, i = t, { formBoxItemClass: a } = Dy(), r = $t(Ly, null) !== null, s = q(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), o = q(() => s.value === "button" && typeof n.pressed == "boolean"), l = q(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), d = q(() => l.value.startsWith("tertiary")), u = q(() => n.alignment.split("-")[0]), h = q(() => n.alignment.includes("-")), S = $t("NcPopover:trigger:attrs", () => ({}), !1), E = q(() => S()), N = q(() => {
      if (s.value === "RouterLink")
        return {
          to: n.to,
          activeClass: "active"
        };
      if (s.value === "a")
        return {
          href: n.href || "#",
          target: n.target,
          rel: "nofollow noreferrer noopener",
          download: n.download || void 0
        };
      if (s.value === "button")
        return {
          ...E.value,
          "aria-pressed": n.pressed,
          type: n.type,
          disabled: n.disabled
        };
    });
    function A(O) {
      o.value && i("update:pressed", !n.pressed), i("click", O);
    }
    return (O, I) => (_(), $e(Zc(s.value), Ut({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": d.value,
          "button-vue--wide": e.wide,
          [`button-vue--${u.value}`]: u.value !== "center",
          "button-vue--reverse": h.value,
          "button-vue--legacy": g(Iy),
          "button-vue--legacy34": g(Vi)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, N.value, { onClick: A }), {
      default: Oe(() => [
        c("span", $y, [
          c("span", My, [
            Re(O.$slots, "icon", {}, void 0, !0)
          ]),
          c("span", Fy, [
            Re(O.$slots, "default", {}, () => [
              Ne(p(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Gn = /* @__PURE__ */ Xe(zy, [["__scopeId", "data-v-47ce59a3"]]), Uy = ["aria-hidden", "aria-label"], By = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Hy = ["d"], jy = ["innerHTML"], Vy = /* @__PURE__ */ xt({
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
    Pm((a) => ({
      fb515064: n.value
    }));
    const t = e, n = q(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = q(() => {
      if (!t.svg || t.path)
        return;
      const a = Kh.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (_(), T("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Ee(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (_(), T("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, jy)) : (_(), T("svg", By, [
        c("path", { d: e.path }, null, 8, Hy)
      ]))
    ], 10, Uy));
  }
}), fl = /* @__PURE__ */ Xe(Vy, [["__scopeId", "data-v-aaedb1c3"]]);
Ky();
function Gy(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), hi("csrf-token-update", { token: e, _internal: !0 }));
}
function Ky() {
  Jh("csrf-token-update", ({ token: e, _internal: t }) => {
    t || Gy(e);
  });
}
qh("public").persist().build();
let Da;
function jd(e, t) {
  return e ? e.getAttribute(t) : null;
}
function Wy() {
  if (Da !== void 0)
    return Da;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = jd(e, "data-user");
  return t === null ? (Da = null, Da) : (Da = {
    uid: t,
    displayName: jd(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Da);
}
var pt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(pt || {});
class qy {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + pt[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === pt.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case pt.Debug:
          console.debug(this.formatMessage(n, pt.Debug, i), i);
          break;
        case pt.Info:
          console.info(this.formatMessage(n, pt.Info, i), i);
          break;
        case pt.Warn:
          console.warn(this.formatMessage(n, pt.Warn, i), i);
          break;
        case pt.Error:
          console.error(this.formatMessage(n, pt.Error, i), i);
          break;
        case pt.Fatal:
        default:
          console.error(this.formatMessage(n, pt.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(pt.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(pt.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(pt.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(pt.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(pt.Fatal, t, Object.assign({}, this.context, n));
  }
}
function Yy(e) {
  return new qy(e);
}
class Xy {
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
    const t = Wy();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? pt.Warn, window._oc_debug && (t.context.level = pt.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function Zy() {
  return new Xy(Yy);
}
const ma = Zy().detectUser().setApp("@nextcloud/vue").build();
function Jy(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let sp = "missing-app-name";
try {
  sp = "library";
} catch {
  ma.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const Qy = sp;
let e_ = "";
try {
  e_ = "0.1.0-alpha.168";
} catch {
  ma.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function op() {
  return $t("appName", Qy);
}
const t_ = Jy(() => {
  const e = iu("core", "apps", []), t = op();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), Sc = Vb();
ji(Oy);
const n_ = /* @__PURE__ */ xt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = gs();
    ct(t, n), Hi(() => {
      n(t.value);
    }), Xa(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && hi("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (_(), $e(g(Gn), {
      "aria-label": g(St)("Go back to the list"),
      class: Ee(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(St)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Oe(() => [
        be(g(fl), {
          directional: "",
          path: g(py)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), i_ = /* @__PURE__ */ Xe(n_, [["__scopeId", "data-v-a28923a1"]]), Vd = qh("nextcloud").persist().build(), a_ = Wb().theming?.name ?? "Nextcloud", r_ = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: i_,
    Pane: hy,
    Splitpanes: fy
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
      appName: op(),
      localizedAppName: t_(),
      isMobile: gs(),
      isRtl: Sc
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
        return ma.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(a_), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = dy(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? hi("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && hi("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      Vd.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ma.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(Vd.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return ma.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, s_ = {
  key: 0,
  class: "hidden-visually"
}, o_ = { class: "app-content-wrapper__list" }, l_ = {
  key: 1,
  class: "app-content-wrapper"
};
function c_(e, t, n, i, a, r) {
  const s = Ue("NcAppContentDetailsToggle"), o = Ue("Pane"), l = Ue("Splitpanes");
  return _(), T("main", {
    id: "app-content-vue",
    class: Ee(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (_(), T("h1", s_, p(n.pageHeading), 1)) : H("", !0),
    e.$slots.list ? (_(), T(fe, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (_(), T("div", {
        key: 0,
        class: Ee(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (_(), $e(s, {
          key: 0,
          onClick: Ge(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : H("", !0),
        We(c("div", o_, [
          Re(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Ga, !n.showDetails]
        ]),
        n.showDetails ? Re(e.$slots, "default", { key: 1 }, void 0, !0) : H("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (_(), T("div", l_, [
        be(l, {
          horizontal: n.layout === "horizontal-split",
          class: Ee(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Oe(() => [
            be(o, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Oe(() => [
                Re(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            be(o, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Oe(() => [
                Re(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : H("", !0)
    ], 64)) : H("", !0),
    e.$slots.list ? H("", !0) : Re(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const u_ = /* @__PURE__ */ Xe(r_, [["render", c_], ["__scopeId", "data-v-51427d61"]]);
var lp = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], fo = /* @__PURE__ */ lp.join(","), cp = typeof Element > "u", ya = cp ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ho = !cp && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, po = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", s = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : po(t.parentNode));
  return s;
}, d_ = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, up = function(t, n, i) {
  if (po(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(fo));
  return n && ya.call(t, fo) && a.unshift(t), a = a.filter(i), a;
}, vo = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!po(s, !1))
      if (s.tagName === "SLOT") {
        var o = s.assignedElements(), l = o.length ? o : s.children, d = vo(l, !0, i);
        i.flatten ? a.push.apply(a, d) : a.push({
          scopeParent: s,
          candidates: d
        });
      } else {
        var u = ya.call(s, fo);
        u && i.filter(s) && (n || !t.includes(s)) && a.push(s);
        var h = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), S = !po(h, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (h && S) {
          var E = vo(h === !0 ? s.children : h.children, !0, i);
          i.flatten ? a.push.apply(a, E) : a.push({
            scopeParent: s,
            candidates: E
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, dp = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, da = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || d_(t)) && !dp(t) ? 0 : t.tabIndex;
}, f_ = function(t, n) {
  var i = da(t);
  return i < 0 && n && !dp(t) ? 0 : i;
}, h_ = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, fp = function(t) {
  return t.tagName === "INPUT";
}, p_ = function(t) {
  return fp(t) && t.type === "hidden";
}, v_ = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, g_ = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, m_ = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || ho(t), i = function(o) {
    return n.querySelectorAll('input[type="radio"][name="' + o + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = i(window.CSS.escape(t.name));
  else
    try {
      a = i(t.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
  var r = g_(a, t.form);
  return !r || r === t;
}, b_ = function(t) {
  return fp(t) && t.type === "radio";
}, y_ = function(t) {
  return b_(t) && !m_(t);
}, __ = function(t) {
  var n, i = t && ho(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var s, o, l;
    for (r = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var d, u, h;
      i = ho(a), a = (d = i) === null || d === void 0 ? void 0 : d.host, r = !!((u = a) !== null && u !== void 0 && (h = u.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return r;
}, Gd = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, w_ = function(t, n) {
  var i = n.displayCheck, a = n.getShadowRoot;
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
  var s = getComputedStyle(t), o = s.visibility;
  if (o === "hidden" || o === "collapse")
    return !0;
  var l = ya.call(t, "details>summary:first-of-type"), d = l ? t.parentElement : t;
  if (ya.call(d, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var u = t; t; ) {
        var h = t.parentElement, S = ho(t);
        if (h && !h.shadowRoot && a(h) === !0)
          return Gd(t);
        t.assignedSlot ? t = t.assignedSlot : !h && S !== t.ownerDocument ? t = S.host : t = h;
      }
      t = u;
    }
    if (__(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return Gd(t);
  return !1;
}, S_ = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return ya.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, go = function(t, n) {
  return !(n.disabled || p_(n) || w_(n, t) || // For a details element with a summary, the summary element gets the focus
  v_(n) || S_(n));
}, Cc = function(t, n) {
  return !(y_(n) || da(n) < 0 || !go(t, n));
}, C_ = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, hp = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = f_(o, s), d = s ? hp(a.candidates) : o;
    l === 0 ? s ? n.push.apply(n, d) : n.push(o) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: s,
      content: d
    });
  }), i.sort(h_).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, T_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = vo([t], n.includeContainer, {
    filter: Cc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: C_
  }) : i = up(t, n.includeContainer, Cc.bind(null, n)), hp(i);
}, E_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = vo([t], n.includeContainer, {
    filter: go.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = up(t, n.includeContainer, go.bind(null, n)), i;
}, $a = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ya.call(t, fo) === !1 ? !1 : Cc(n, t);
}, A_ = /* @__PURE__ */ lp.concat("iframe:not([inert]):not([inert] *)").join(","), Zl = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ya.call(t, A_) === !1 ? !1 : go(n, t);
};
function Tc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function k_(e) {
  if (Array.isArray(e)) return Tc(e);
}
function Kd(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = pp(e)) || t) {
      n && (e = n);
      var i = 0, a = function() {
      };
      return {
        s: a,
        n: function() {
          return i >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[i++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: a
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var r, s = !0, o = !1;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var l = n.next();
      return s = l.done, l;
    },
    e: function(l) {
      o = !0, r = l;
    },
    f: function() {
      try {
        s || n.return == null || n.return();
      } finally {
        if (o) throw r;
      }
    }
  };
}
function O_(e, t, n) {
  return (t = I_(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function N_(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function x_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function qd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wd(Object(n), !0).forEach(function(i) {
      O_(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wd(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function L_(e) {
  return k_(e) || N_(e) || pp(e) || x_();
}
function R_(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function I_(e) {
  var t = R_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function pp(e, t) {
  if (e) {
    if (typeof e == "string") return Tc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Tc(e, t) : void 0;
  }
}
var ci = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = ci.getActiveTrap(t);
    n !== i && ci.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), ci.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = ci.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = ci.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, P_ = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, D_ = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, $r = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, $_ = function(t) {
  return $r(t) && !t.shiftKey;
}, M_ = function(t) {
  return $r(t) && t.shiftKey;
}, Yd = function(t) {
  return setTimeout(t, 0);
}, Cr = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, $s = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, F_ = [], ou = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || F_, r = qd({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: $_,
    isKeyBackward: M_
  }, n), s = {
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
  }, o, l = function(P, M, Y) {
    return P && P[M] !== void 0 ? P[M] : r[Y || M];
  }, d = function(P, M) {
    var Y = typeof M?.composedPath == "function" ? M.composedPath() : void 0;
    return s.containerGroups.findIndex(function(re) {
      var ie = re.container, he = re.tabbableNodes;
      return ie.contains(P) || Y?.includes(ie) || he.find(function(pe) {
        return pe === P;
      });
    });
  }, u = function(P) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = M.hasFallback, re = Y === void 0 ? !1 : Y, ie = M.params, he = ie === void 0 ? [] : ie, pe = r[P];
    if (typeof pe == "function" && (pe = pe.apply(void 0, L_(he))), pe === !0 && (pe = void 0), !pe) {
      if (pe === void 0 || pe === !1)
        return pe;
      throw new Error("`".concat(P, "` was specified but was not a node, or did not return a node"));
    }
    var Ce = pe;
    if (typeof pe == "string") {
      try {
        Ce = i.querySelector(pe);
      } catch (ye) {
        throw new Error("`".concat(P, '` appears to be an invalid selector; error="').concat(ye.message, '"'));
      }
      if (!Ce && !re)
        throw new Error("`".concat(P, "` as selector refers to no known node"));
    }
    return Ce;
  }, h = function(P) {
    var M = P.activeElement;
    return M ? M.shadowRoot && M.shadowRoot.activeElement !== null ? h(M.shadowRoot) : M : null;
  }, S = function() {
    var P = u("initialFocus", {
      hasFallback: !0
    });
    if (P === !1)
      return !1;
    if (P === void 0 || P && !Zl(P, r.tabbableOptions)) {
      var M = h(i);
      if (d(M) >= 0)
        P = M;
      else {
        var Y = s.tabbableGroups[0], re = Y && Y.firstTabbableNode;
        P = re || u("fallbackFocus");
      }
    } else P === null && (P = u("fallbackFocus"));
    if (!P)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return P;
  }, E = function() {
    if (s.containerGroups = s.containers.map(function(P) {
      var M = T_(P, r.tabbableOptions), Y = E_(P, r.tabbableOptions), re = M.length > 0 ? M[0] : void 0, ie = M.length > 0 ? M[M.length - 1] : void 0, he = Y.find(function(ye) {
        return $a(ye);
      }), pe = Y.slice().reverse().find(function(ye) {
        return $a(ye);
      }), Ce = !!M.find(function(ye) {
        return da(ye) > 0;
      });
      return {
        container: P,
        tabbableNodes: M,
        focusableNodes: Y,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Ce,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: re,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: ie,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: he,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: pe,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Be) {
          var Te = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, it = M.indexOf(Be);
          return it < 0 ? Te ? Y.slice(Y.indexOf(Be) + 1).find(function(ot) {
            return $a(ot);
          }) : Y.slice(0, Y.indexOf(Be)).reverse().find(function(ot) {
            return $a(ot);
          }) : M[it + (Te ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(P) {
      return P.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !u("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(P) {
      return P.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, N = function(P) {
    if (P !== !1 && P !== h(document)) {
      if (!P || !P.focus) {
        N(S());
        return;
      }
      P.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = P, P_(P) && P.select();
    }
  }, A = function(P) {
    var M = u("setReturnFocus", {
      params: [P]
    });
    return M || (M === !1 ? !1 : P);
  }, O = function(P) {
    var M = P.target, Y = P.event, re = P.isBackward, ie = re === void 0 ? !1 : re;
    M = M || $s(Y), E();
    var he = null;
    if (s.tabbableGroups.length > 0) {
      var pe = d(M, Y), Ce = pe >= 0 ? s.containerGroups[pe] : void 0;
      if (pe < 0)
        ie ? he = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : he = s.tabbableGroups[0].firstTabbableNode;
      else if (ie) {
        var ye = s.tabbableGroups.findIndex(function(yt) {
          var Je = yt.firstTabbableNode;
          return M === Je;
        });
        if (ye < 0 && (Ce.container === M || Zl(M, r.tabbableOptions) && !$a(M, r.tabbableOptions) && !Ce.nextTabbableNode(M, !1)) && (ye = pe), ye >= 0) {
          var Be = ye === 0 ? s.tabbableGroups.length - 1 : ye - 1, Te = s.tabbableGroups[Be];
          he = da(M) >= 0 ? Te.lastTabbableNode : Te.lastDomTabbableNode;
        } else $r(Y) || (he = Ce.nextTabbableNode(M, !1));
      } else {
        var it = s.tabbableGroups.findIndex(function(yt) {
          var Je = yt.lastTabbableNode;
          return M === Je;
        });
        if (it < 0 && (Ce.container === M || Zl(M, r.tabbableOptions) && !$a(M, r.tabbableOptions) && !Ce.nextTabbableNode(M)) && (it = pe), it >= 0) {
          var ot = it === s.tabbableGroups.length - 1 ? 0 : it + 1, ut = s.tabbableGroups[ot];
          he = da(M) >= 0 ? ut.firstTabbableNode : ut.firstDomTabbableNode;
        } else $r(Y) || (he = Ce.nextTabbableNode(M));
      }
    } else
      he = u("fallbackFocus");
    return he;
  }, I = function(P) {
    var M = $s(P);
    if (!(d(M, P) >= 0)) {
      if (Cr(r.clickOutsideDeactivates, P)) {
        o.deactivate({
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
      Cr(r.allowOutsideClick, P) || P.preventDefault();
    }
  }, $ = function(P) {
    var M = $s(P), Y = d(M, P) >= 0;
    if (Y || M instanceof Document)
      Y && (s.mostRecentlyFocusedNode = M);
    else {
      P.stopImmediatePropagation();
      var re, ie = !0;
      if (s.mostRecentlyFocusedNode)
        if (da(s.mostRecentlyFocusedNode) > 0) {
          var he = d(s.mostRecentlyFocusedNode), pe = s.containerGroups[he].tabbableNodes;
          if (pe.length > 0) {
            var Ce = pe.findIndex(function(ye) {
              return ye === s.mostRecentlyFocusedNode;
            });
            Ce >= 0 && (r.isKeyForward(s.recentNavEvent) ? Ce + 1 < pe.length && (re = pe[Ce + 1], ie = !1) : Ce - 1 >= 0 && (re = pe[Ce - 1], ie = !1));
          }
        } else
          s.containerGroups.some(function(ye) {
            return ye.tabbableNodes.some(function(Be) {
              return da(Be) > 0;
            });
          }) || (ie = !1);
      else
        ie = !1;
      ie && (re = O({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), N(re || s.mostRecentlyFocusedNode || S());
    }
    s.recentNavEvent = void 0;
  }, G = function(P) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = P;
    var Y = O({
      event: P,
      isBackward: M
    });
    Y && ($r(P) && P.preventDefault(), N(Y));
  }, F = function(P) {
    (r.isKeyForward(P) || r.isKeyBackward(P)) && G(P, r.isKeyBackward(P));
  }, Z = function(P) {
    D_(P) && Cr(r.escapeDeactivates, P) !== !1 && (P.preventDefault(), o.deactivate());
  }, D = function(P) {
    var M = $s(P);
    d(M, P) >= 0 || Cr(r.clickOutsideDeactivates, P) || Cr(r.allowOutsideClick, P) || (P.preventDefault(), P.stopImmediatePropagation());
  }, J = function() {
    if (s.active) {
      ci.activateTrap(a, o);
      var P;
      return r.delayInitialFocus ? P = new Promise(function(M) {
        s.delayInitialFocusTimer = Yd(function() {
          N(S()), M();
        });
      }) : N(S()), i.addEventListener("focusin", $, !0), i.addEventListener("mousedown", I, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", I, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", D, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", F, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", Z), P;
    }
  }, de = function(P) {
    s.active && !s.paused && o._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var M = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), re = Kd(P), ie;
    try {
      for (re.s(); !(ie = re.n()).done; ) {
        var he = ie.value;
        M.add(he);
        for (var pe = typeof ShadowRoot < "u" && he.getRootNode() instanceof ShadowRoot, Ce = he; Ce; ) {
          M.add(Ce);
          var ye = Ce.parentElement, Be = [];
          ye ? Be = ye.children : !ye && pe && (Be = Ce.getRootNode().children, ye = Ce.getRootNode().host, pe = typeof ShadowRoot < "u" && ye.getRootNode() instanceof ShadowRoot);
          var Te = Kd(Be), it;
          try {
            for (Te.s(); !(it = Te.n()).done; ) {
              var ot = it.value;
              Y.add(ot);
            }
          } catch (ut) {
            Te.e(ut);
          } finally {
            Te.f();
          }
          Ce = ye;
        }
      }
    } catch (ut) {
      re.e(ut);
    } finally {
      re.f();
    }
    M.forEach(function(ut) {
      Y.delete(ut);
    }), s.adjacentElements = Y;
  }, X = function() {
    if (s.active)
      return i.removeEventListener("focusin", $, !0), i.removeEventListener("mousedown", I, !0), i.removeEventListener("touchstart", I, !0), i.removeEventListener("click", D, !0), i.removeEventListener("keydown", F, !0), i.removeEventListener("keydown", Z), o;
  }, se = function(P) {
    var M = s.mostRecentlyFocusedNode;
    if (M) {
      var Y = P.some(function(ie) {
        var he = Array.from(ie.removedNodes);
        return he.some(function(pe) {
          return pe === M || typeof pe.contains == "function" && pe.contains(M);
        });
      });
      if (Y && s.containers.some(function(ie) {
        return ie?.isConnected;
      })) {
        E();
        var re = S();
        N(re);
      }
    }
  }, ge = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(se) : void 0, te = function() {
    ge && (ge.disconnect(), s.active && !s.paused && s.containers.map(function(P) {
      ge.observe(P, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return o = {
    get active() {
      return s.active;
    },
    get paused() {
      return s.paused;
    },
    activate: function(P) {
      if (s.active)
        return this;
      var M = l(P, "onActivate"), Y = l(P, "onPostActivate"), re = l(P, "checkCanFocusTrap"), ie = ci.getActiveTrap(a), he = !1;
      if (ie && !ie.paused) {
        var pe;
        (pe = ie._setSubtreeIsolation) === null || pe === void 0 || pe.call(ie, !1), he = !0;
      }
      try {
        re || E(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = h(i), M?.({
          trap: o
        });
        var Ce = function() {
          re && E();
          var Te = function() {
            o._setSubtreeIsolation(!0), te(), Y?.({
              trap: o
            });
          }, it = J();
          it ? it.then(Te) : Te();
        };
        if (re)
          return re(s.containers.concat()).then(Ce, Ce), this;
        Ce();
      } catch (Be) {
        if (ie === ci.getActiveTrap(a) && he) {
          var ye;
          (ye = ie._setSubtreeIsolation) === null || ye === void 0 || ye.call(ie, !0);
        }
        throw Be;
      }
      return this;
    },
    deactivate: function(P) {
      if (!s.active)
        return this;
      var M = qd({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, P);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || o._setSubtreeIsolation(!1), s.alreadySilent.clear(), X(), s.active = !1, s.paused = !1, te(), ci.deactivateTrap(a, o);
      var Y = l(M, "onDeactivate"), re = l(M, "onPostDeactivate"), ie = l(M, "checkCanReturnFocus"), he = l(M, "delayReturnFocus"), pe = l(M, "returnFocus", "returnFocusOnDeactivate");
      Y?.({
        trap: o
      });
      var Ce = function() {
        pe && N(A(s.nodeFocusedBeforeActivation)), re?.({
          trap: o
        });
      }, ye = function() {
        he && pe ? Yd(Ce) : Ce();
      };
      return pe && ie ? (ie(A(s.nodeFocusedBeforeActivation)).then(ye, ye), this) : (ye(), this);
    },
    pause: function(P) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, P)) : this;
    },
    unpause: function(P) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, P)) : this;
    },
    updateContainerElements: function(P) {
      var M = [].concat(P).filter(Boolean);
      return s.containers = M.map(function(Y) {
        return typeof Y == "string" ? i.querySelector(Y) : Y;
      }), r.isolateSubtrees && de(s.containers), s.active && (E(), s.paused || o._setSubtreeIsolation(!0)), te(), this;
    }
  }, Object.defineProperties(o, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(P, M) {
        if (s.paused === P)
          return this;
        if (s.paused = P, P) {
          var Y = l(M, "onPause"), re = l(M, "onPostPause");
          Y?.({
            trap: o
          }), X(), o._setSubtreeIsolation(!1), te(), re?.({
            trap: o
          });
        } else {
          var ie = l(M, "onUnpause"), he = l(M, "onPostUnpause");
          ie?.({
            trap: o
          });
          var pe = function() {
            E();
            var ye = function() {
              o._setSubtreeIsolation(!0), te(), he?.({
                trap: o
              });
            }, Be = J();
            Be ? Be.then(ye) : ye();
          };
          pe();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(P) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(M) {
          var Y;
          P ? r.isolateSubtrees === "aria-hidden" ? ((M.ariaHidden === "true" || ((Y = M.getAttribute("aria-hidden")) === null || Y === void 0 ? void 0 : Y.toLowerCase()) === "true") && s.alreadySilent.add(M), M.setAttribute("aria-hidden", "true")) : ((M.inert || M.hasAttribute("inert")) && s.alreadySilent.add(M), M.setAttribute("inert", !0)) : s.alreadySilent.has(M) || (r.isolateSubtrees === "aria-hidden" ? M.removeAttribute("aria-hidden") : M.removeAttribute("inert"));
        });
      }
    }
  }), o.updateContainerElements(t), o;
};
const vp = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), z_ = /* @__PURE__ */ xt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [vp]: {
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
      const t = this.entry.getBoundingClientRect(), n = e.getBoundingClientRect();
      this.top = t.top - n.top + e.scrollTop, this.height = t.height;
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
function U_(e, t, n, i, a, r) {
  return _(), T("ul", {
    ref: "list",
    class: Ee(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    c("div", {
      class: Ee(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: on(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Re(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const gp = /* @__PURE__ */ Xe(z_, [["render", U_], ["__scopeId", "data-v-3e73e246"]]);
function as() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function B_() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...as()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === as().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const mp = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), bp = /* @__PURE__ */ Symbol.for("NcContent:selector");
ji(Ey);
const H_ = { class: "app-navigation-toggle-wrapper" }, j_ = /* @__PURE__ */ xt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = bh(e, "open"), n = q(() => t.value ? St("Close navigation") : St("Open navigation"));
    return (i, a) => (_(), T("div", H_, [
      be(g(Gn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Oe(() => [
          be(fl, {
            path: g(my),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), V_ = /* @__PURE__ */ Xe(j_, [["__scopeId", "data-v-e8177cc7"]]), G_ = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], K_ = { class: "app-navigation__search" }, W_ = /* @__PURE__ */ xt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = $t(
      mp,
      () => Sm(),
      !1
    ), a = Og("appNavigationContainer"), r = gs(), s = /* @__PURE__ */ Pe(!r.value), o = q(() => r.value && s.value);
    yg(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), ct(r, () => {
      s.value = !r.value;
    }), ct(o, () => {
      u();
    }), Hi(() => {
      i(!0), Jh("toggle-navigation", d), hi("navigation-toggled", {
        open: s.value
      }), n = ou(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: as(),
        escapeDeactivates: !1
      }), u();
    }), hs(() => {
      i(!1), ry("toggle-navigation", d), n.deactivate();
    });
    function l(S) {
      if (s.value === S) {
        hi("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = S === void 0 ? !s.value : S;
      const E = getComputedStyle(document.body), N = parseInt(E.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        hi("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * N);
    }
    function d({ open: S }) {
      return l(S);
    }
    function u() {
      o.value ? n.activate() : n.deactivate();
    }
    function h() {
      r.value && l(!1);
    }
    return (S, E) => (_(), T("div", {
      ref: "appNavigationContainer",
      class: Ee(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": g(Vi)
      }])
    }, [
      c("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: kt(h, ["esc"])
      }, [
        c("div", K_, [
          Re(S.$slots, "search", {}, void 0, !0)
        ]),
        c("div", {
          class: Ee(["app-navigation__body", { "app-navigation__body--no-list": !S.$slots.list }])
        }, [
          Re(S.$slots, "default", {}, void 0, !0)
        ], 2),
        S.$slots.list ? (_(), $e(gp, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Oe(() => [
            Re(S.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : H("", !0),
        Re(S.$slots, "footer", {}, void 0, !0)
      ], 40, G_),
      be(V_, {
        open: s.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), q_ = /* @__PURE__ */ Xe(W_, [["__scopeId", "data-v-37908cd4"]]), Y_ = {
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
}, X_ = ["aria-hidden", "aria-label"], Z_ = ["fill", "width", "height"], J_ = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, Q_ = { key: 0 };
function e1(e, t, n, i, a, r) {
  return _(), T("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", J_, [
        n.title ? (_(), T("title", Q_, p(n.title), 1)) : H("", !0)
      ])
    ], 8, Z_))
  ], 16, X_);
}
const t1 = /* @__PURE__ */ Xe(Y_, [["render", e1]]), n1 = {
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
}, i1 = ["aria-hidden", "aria-label"], a1 = ["fill", "width", "height"], r1 = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, s1 = { key: 0 };
function o1(e, t, n, i, a, r) {
  return _(), T("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", r1, [
        n.title ? (_(), T("title", s1, p(n.title), 1)) : H("", !0)
      ])
    ], 8, a1))
  ], 16, i1);
}
const l1 = /* @__PURE__ */ Xe(n1, [["render", o1]]), c1 = {
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
}, u1 = ["aria-hidden", "aria-label"], d1 = ["fill", "width", "height"], f1 = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, h1 = { key: 0 };
function p1(e, t, n, i, a, r) {
  return _(), T("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", f1, [
        n.title ? (_(), T("title", h1, p(n.title), 1)) : H("", !0)
      ])
    ], 8, d1))
  ], 16, u1);
}
const yp = /* @__PURE__ */ Xe(c1, [["render", p1]]), v1 = {
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
}, g1 = ["aria-hidden", "aria-label"], m1 = ["fill", "width", "height"], b1 = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, y1 = { key: 0 };
function _1(e, t, n, i, a, r) {
  return _(), T("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", b1, [
        n.title ? (_(), T("title", y1, p(n.title), 1)) : H("", !0)
      ])
    ], 8, m1))
  ], 16, g1);
}
const _p = /* @__PURE__ */ Xe(v1, [["render", _1]]);
ji(Cy);
const w1 = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: yp,
    IconClose: _p,
    NcButton: Gn
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
    return { isLegacy34: Vi };
  },
  data() {
    return {
      labelConfirm: St("Confirm changes"),
      labelCancel: St("Cancel changes")
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
}, S1 = ["placeholder"];
function C1(e, t, n, i, a, r) {
  const s = Ue("IconArrowRight"), o = Ue("NcButton"), l = Ue("IconClose");
  return _(), T("div", {
    class: Ee(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    c("form", {
      onSubmit: t[1] || (t[1] = Ge((...d) => r.confirm && r.confirm(...d), ["prevent"])),
      onKeydown: t[2] || (t[2] = kt(Ge((...d) => r.cancel && r.cancel(...d), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Ge(() => {
      }, ["stop", "prevent"]))
    }, [
      We(c("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (d) => r.valueModel = d),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, S1), [
        [hn, r.valueModel]
      ]),
      be(o, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Ge(r.confirm, ["stop", "prevent"])
      }, {
        icon: Oe(() => [
          be(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      be(o, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: Ge(r.cancel, ["stop", "prevent"])
      }, {
        icon: Oe(() => [
          be(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const T1 = /* @__PURE__ */ Xe(w1, [["render", C1], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function hl() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const lu = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), wp = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), E1 = {
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
}, Sp = {
  mixins: [E1],
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
      from: wp
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
}, A1 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: fl
  },
  mixins: [Sp],
  inject: {
    isInSemanticMenu: {
      from: lu,
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
      mdiCheck: vy,
      mdiChevronRight: gy
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
}, k1 = ["role"], O1 = ["aria-label", "disabled", "title", "type"], N1 = { class: "action-button__longtext-wrapper" }, x1 = {
  key: 0,
  class: "action-button__name"
}, L1 = ["textContent"], R1 = {
  key: 2,
  class: "action-button__text"
}, I1 = ["textContent"], P1 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function D1(e, t, n, i, a, r) {
  const s = Ue("NcIconSvgWrapper");
  return _(), T("li", {
    class: Ee(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    c("button", Ut({
      "aria-label": e.ariaLabel,
      class: ["action-button button-vue", {
        "action-button--active": r.isChecked,
        focusable: r.isFocusable
      }],
      disabled: n.disabled,
      title: e.title,
      type: r.nativeType
    }, r.buttonAttributes, {
      onClick: t[0] || (t[0] = (...o) => r.handleClick && r.handleClick(...o))
    }), [
      Re(e.$slots, "icon", {}, () => [
        c("span", {
          class: Ee([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: on({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      c("span", N1, [
        e.name ? (_(), T("strong", x1, p(e.name), 1)) : H("", !0),
        e.isLongText ? (_(), T("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: p(e.text)
        }, null, 8, L1)) : (_(), T("span", R1, p(e.text), 1)),
        n.description ? (_(), T("span", {
          key: 3,
          class: "action-button__description",
          textContent: p(n.description)
        }, null, 8, I1)) : H("", !0)
      ]),
      n.isMenu ? (_(), $e(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (_(), $e(s, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (_(), T("span", P1)) : H("", !0),
      H("", !0)
    ], 16, O1)
  ], 10, k1);
}
const $1 = /* @__PURE__ */ Xe(A1, [["render", D1], ["__scopeId", "data-v-6c2daf4e"]]);
function M1(e, t = {}) {
  const n = B_();
  ct(e, () => {
    di(t.disabled) || (di(e) ? n.pause() : n.unpause());
  }), hs(() => {
    n.unpause();
  });
}
const F1 = ["top", "right", "bottom", "left"], Xd = ["start", "end"], Zd = /* @__PURE__ */ F1.reduce((e, t) => e.concat(t, t + "-" + Xd[0], t + "-" + Xd[1]), []), rs = Math.min, Ec = Math.max, z1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Cp(e, t, n) {
  return Ec(e, rs(t, n));
}
function wa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mi(e) {
  return e.split("-")[0];
}
function xn(e) {
  return e.split("-")[1];
}
function Tp(e) {
  return e === "x" ? "y" : "x";
}
function cu(e) {
  return e === "y" ? "height" : "width";
}
function ui(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function uu(e) {
  return Tp(ui(e));
}
function Ep(e, t, n) {
  n === void 0 && (n = !1);
  const i = xn(e), a = uu(e), r = cu(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = bo(s)), [s, bo(s)];
}
function U1(e) {
  const t = bo(e);
  return [mo(e), t, mo(t)];
}
function mo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Jd = ["left", "right"], Qd = ["right", "left"], B1 = ["top", "bottom"], H1 = ["bottom", "top"];
function j1(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Qd : Jd : t ? Jd : Qd;
    case "left":
    case "right":
      return t ? B1 : H1;
    default:
      return [];
  }
}
function V1(e, t, n, i) {
  const a = xn(e);
  let r = j1(mi(e), n === "start", i);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(mo)))), r;
}
function bo(e) {
  const t = mi(e);
  return z1[t] + e.slice(t.length);
}
function G1(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Ap(e) {
  return typeof e != "number" ? G1(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Mr(e) {
  const {
    x: t,
    y: n,
    width: i,
    height: a
  } = e;
  return {
    width: i,
    height: a,
    top: n,
    left: t,
    right: t + i,
    bottom: n + a,
    x: t,
    y: n
  };
}
function ef(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = ui(t), s = uu(t), o = cu(s), l = mi(t), d = r === "y", u = i.x + i.width / 2 - a.width / 2, h = i.y + i.height / 2 - a.height / 2, S = i[o] / 2 - a[o] / 2;
  let E;
  switch (l) {
    case "top":
      E = {
        x: u,
        y: i.y - a.height
      };
      break;
    case "bottom":
      E = {
        x: u,
        y: i.y + i.height
      };
      break;
    case "right":
      E = {
        x: i.x + i.width,
        y: h
      };
      break;
    case "left":
      E = {
        x: i.x - a.width,
        y: h
      };
      break;
    default:
      E = {
        x: i.x,
        y: i.y
      };
  }
  const N = xn(t);
  return N && (E[s] += S * (N === "end" ? 1 : -1) * (n && d ? -1 : 1)), E;
}
async function K1(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: i,
    y: a,
    platform: r,
    rects: s,
    elements: o,
    strategy: l
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: h = "floating",
    altBoundary: S = !1,
    padding: E = 0
  } = wa(t, e), N = Ap(E), O = o[S ? h === "floating" ? "reference" : "floating" : h], I = Mr(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(O))) == null || n ? O : O.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: l
  })), $ = h === "floating" ? {
    x: i,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, G = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), F = await (r.isElement == null ? void 0 : r.isElement(G)) && await (r.getScale == null ? void 0 : r.getScale(G)) || {
    x: 1,
    y: 1
  }, Z = Mr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: $,
    offsetParent: G,
    strategy: l
  }) : $);
  return {
    top: (I.top - Z.top + N.top) / F.y,
    bottom: (Z.bottom - I.bottom + N.bottom) / F.y,
    left: (I.left - Z.left + N.left) / F.x,
    right: (Z.right - I.right + N.right) / F.x
  };
}
const W1 = 50, q1 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, o = s.detectOverflow ? s : {
    ...s,
    detectOverflow: K1
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: h
  } = ef(d, i, l), S = i, E = 0;
  const N = {};
  for (let A = 0; A < r.length; A++) {
    const O = r[A];
    if (!O)
      continue;
    const {
      name: I,
      fn: $
    } = O, {
      x: G,
      y: F,
      data: Z,
      reset: D
    } = await $({
      x: u,
      y: h,
      initialPlacement: i,
      placement: S,
      strategy: a,
      middlewareData: N,
      rects: d,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = G ?? u, h = F ?? h, N[I] = {
      ...N[I],
      ...Z
    }, D && E < W1 && (E++, typeof D == "object" && (D.placement && (S = D.placement), D.rects && (d = D.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : D.rects), {
      x: u,
      y: h
    } = ef(d, S, l)), A = -1);
  }
  return {
    x: u,
    y: h,
    placement: S,
    strategy: a,
    middlewareData: N
  };
}, Y1 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: i,
      placement: a,
      rects: r,
      platform: s,
      elements: o,
      middlewareData: l
    } = t, {
      element: d,
      padding: u = 0
    } = wa(e, t) || {};
    if (d == null)
      return {};
    const h = Ap(u), S = {
      x: n,
      y: i
    }, E = uu(a), N = cu(E), A = await s.getDimensions(d), O = E === "y", I = O ? "top" : "left", $ = O ? "bottom" : "right", G = O ? "clientHeight" : "clientWidth", F = r.reference[N] + r.reference[E] - S[E] - r.floating[N], Z = S[E] - r.reference[E], D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let J = D ? D[G] : 0;
    (!J || !await (s.isElement == null ? void 0 : s.isElement(D))) && (J = o.floating[G] || r.floating[N]);
    const de = F / 2 - Z / 2, X = J / 2 - A[N] / 2 - 1, se = rs(h[I], X), ge = rs(h[$], X), te = J - A[N] - ge, ae = J / 2 - A[N] / 2 + de, P = Cp(se, ae, te), M = !l.arrow && xn(a) != null && ae !== P && r.reference[N] / 2 - (ae < se ? se : ge) - A[N] / 2 < 0, Y = M ? ae < se ? ae - se : ae - te : 0;
    return {
      [E]: S[E] + Y,
      data: {
        [E]: P,
        centerOffset: ae - P - Y,
        ...M && {
          alignmentOffset: Y
        }
      },
      reset: M
    };
  }
});
function X1(e, t, n) {
  return (e ? [...n.filter((a) => xn(a) === e), ...n.filter((a) => xn(a) !== e)] : n.filter((a) => mi(a) === a)).filter((a) => e ? xn(a) === e || (t ? mo(a) !== a : !1) : !0);
}
const Z1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, i, a;
      const {
        rects: r,
        middlewareData: s,
        placement: o,
        platform: l,
        elements: d
      } = t, {
        crossAxis: u = !1,
        alignment: h,
        allowedPlacements: S = Zd,
        autoAlignment: E = !0,
        ...N
      } = wa(e, t), A = h !== void 0 || S === Zd ? X1(h || null, E, S) : S, O = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, I = A[O];
      if (I == null)
        return {};
      if (o !== I)
        return {
          reset: {
            placement: A[0]
          }
        };
      const $ = await l.detectOverflow(t, N), G = Ep(I, r, await (l.isRTL == null ? void 0 : l.isRTL(d.floating))), F = [$[mi(I)], $[G[0]], $[G[1]]], Z = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: I,
        overflows: F
      }], D = A[O + 1];
      if (D)
        return {
          data: {
            index: O + 1,
            overflows: Z
          },
          reset: {
            placement: D
          }
        };
      const J = Z.map((se) => {
        const ge = xn(se.placement);
        return [se.placement, ge && u ? (
          // Check along the mainAxis and main crossAxis side.
          se.overflows.slice(0, 2).reduce((te, ae) => te + ae, 0)
        ) : (
          // Check only the mainAxis.
          se.overflows[0]
        ), se.overflows];
      }).sort((se, ge) => se[1] - ge[1]), X = ((a = J.filter((se) => se[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        xn(se[0]) ? 2 : 3
      ).every((ge) => ge <= 0))[0]) == null ? void 0 : a[0]) || J[0][0];
      return X !== o ? {
        data: {
          index: O + 1,
          overflows: Z
        },
        reset: {
          placement: X
        }
      } : {};
    }
  };
}, J1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, i;
      const {
        placement: a,
        middlewareData: r,
        rects: s,
        initialPlacement: o,
        platform: l,
        elements: d
      } = t, {
        mainAxis: u = !0,
        crossAxis: h = !0,
        fallbackPlacements: S,
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: N = "none",
        flipAlignment: A = !0,
        ...O
      } = wa(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const I = mi(a), $ = ui(o), G = mi(o) === o, F = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), Z = S || (G || !A ? [bo(o)] : U1(o)), D = N !== "none";
      !S && D && Z.push(...V1(o, A, N, F));
      const J = [o, ...Z], de = await l.detectOverflow(t, O), X = [];
      let se = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (u && X.push(de[I]), h) {
        const P = Ep(a, s, F);
        X.push(de[P[0]], de[P[1]]);
      }
      if (se = [...se, {
        placement: a,
        overflows: X
      }], !X.every((P) => P <= 0)) {
        var ge, te;
        const P = (((ge = r.flip) == null ? void 0 : ge.index) || 0) + 1, M = J[P];
        if (M && (!(h === "alignment" ? $ !== ui(M) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        se.every((ie) => ui(ie.placement) === $ ? ie.overflows[0] > 0 : !0)))
          return {
            data: {
              index: P,
              overflows: se
            },
            reset: {
              placement: M
            }
          };
        let Y = (te = se.filter((re) => re.overflows[0] <= 0).sort((re, ie) => re.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : te.placement;
        if (!Y)
          switch (E) {
            case "bestFit": {
              var ae;
              const re = (ae = se.filter((ie) => {
                if (D) {
                  const he = ui(ie.placement);
                  return he === $ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  he === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((he) => he > 0).reduce((he, pe) => he + pe, 0)]).sort((ie, he) => ie[1] - he[1])[0]) == null ? void 0 : ae[0];
              re && (Y = re);
              break;
            }
            case "initialPlacement":
              Y = o;
              break;
          }
        if (a !== Y)
          return {
            reset: {
              placement: Y
            }
          };
      }
      return {};
    }
  };
}, Q1 = /* @__PURE__ */ new Set(["left", "top"]);
async function e0(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = mi(n), o = xn(n), l = ui(n) === "y", d = Q1.has(s) ? -1 : 1, u = r && l ? -1 : 1, h = wa(t, e);
  let {
    mainAxis: S,
    crossAxis: E,
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
  return o && typeof N == "number" && (E = o === "end" ? N * -1 : N), l ? {
    x: E * u,
    y: S * d
  } : {
    x: S * d,
    y: E * u
  };
}
const t0 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, i;
      const {
        x: a,
        y: r,
        placement: s,
        middlewareData: o
      } = t, l = await e0(t, e);
      return s === ((n = o.offset) == null ? void 0 : n.placement) && (i = o.arrow) != null && i.alignmentOffset ? {} : {
        x: a + l.x,
        y: r + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, n0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: i,
        placement: a,
        platform: r
      } = t, {
        mainAxis: s = !0,
        crossAxis: o = !1,
        limiter: l = {
          fn: ($) => {
            let {
              x: G,
              y: F
            } = $;
            return {
              x: G,
              y: F
            };
          }
        },
        ...d
      } = wa(e, t), u = {
        x: n,
        y: i
      }, h = await r.detectOverflow(t, d), S = ui(a), E = Tp(S);
      let N = u[E], A = u[S];
      const O = ($, G) => Cp(G + h[$ === "y" ? "top" : "left"], G, G - h[$ === "y" ? "bottom" : "right"]);
      s && (N = O(E, N)), o && (A = O(S, A));
      const I = l.fn({
        ...t,
        [E]: N,
        [S]: A
      });
      return {
        ...I,
        data: {
          x: I.x - n,
          y: I.y - i,
          enabled: {
            [E]: s,
            [S]: o
          }
        }
      };
    }
  };
}, i0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: i,
        platform: a,
        elements: r
      } = t, {
        apply: s = () => {
        },
        ...o
      } = wa(e, t), l = await a.detectOverflow(t, o), d = mi(n), u = xn(n), h = ui(n) === "y", {
        width: S,
        height: E
      } = i.floating;
      let N, A;
      d === "top" || d === "bottom" ? (N = d, A = u === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = d, N = u === "end" ? "top" : "bottom");
      const O = E - l.top - l.bottom, I = S - l.left - l.right, $ = rs(E - l[N], O), G = rs(S - l[A], I), F = t.middlewareData.shift, Z = !F;
      let D = $, J = G;
      F != null && F.enabled.x && (J = I), F != null && F.enabled.y && (D = O), Z && !u && (h ? J = S - 2 * Ec(l.left, l.right) : D = E - 2 * Ec(l.top, l.bottom)), await s({
        ...t,
        availableWidth: J,
        availableHeight: D
      });
      const de = await a.getDimensions(r.floating);
      return S !== de.width || E !== de.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function mn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Kn(e) {
  return mn(e).getComputedStyle(e);
}
const tf = Math.min, Fr = Math.max, yo = Math.round;
function kp(e) {
  const t = Kn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = yo(n) !== a || yo(i) !== r;
  return s && (n = a, i = r), { width: n, height: i, fallback: s };
}
function Bi(e) {
  return Np(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Ms;
function Op() {
  if (Ms) return Ms;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Ms = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Ms) : navigator.userAgent;
}
function Wn(e) {
  return e instanceof mn(e).HTMLElement;
}
function $i(e) {
  return e instanceof mn(e).Element;
}
function Np(e) {
  return e instanceof mn(e).Node;
}
function nf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof mn(e).ShadowRoot || e instanceof ShadowRoot;
}
function pl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Kn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function a0(e) {
  return ["table", "td", "th"].includes(Bi(e));
}
function Ac(e) {
  const t = /firefox/i.test(Op()), n = Kn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function xp() {
  return !/^((?!chrome|android).)*safari/i.test(Op());
}
function du(e) {
  return ["html", "body", "#document"].includes(Bi(e));
}
function Lp(e) {
  return $i(e) ? e : e.contextElement;
}
const Rp = { x: 1, y: 1 };
function qa(e) {
  const t = Lp(e);
  if (!Wn(t)) return Rp;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = kp(t);
  let s = (r ? yo(n.width) : n.width) / i, o = (r ? yo(n.height) : n.height) / a;
  return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), { x: s, y: o };
}
function ss(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = Lp(e);
  let l = Rp;
  t && (i ? $i(i) && (l = qa(i)) : l = qa(e));
  const d = o ? mn(o) : window, u = !xp() && n;
  let h = (s.left + (u && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, S = (s.top + (u && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, E = s.width / l.x, N = s.height / l.y;
  if (o) {
    const A = mn(o), O = i && $i(i) ? mn(i) : i;
    let I = A.frameElement;
    for (; I && i && O !== A; ) {
      const $ = qa(I), G = I.getBoundingClientRect(), F = getComputedStyle(I);
      G.x += (I.clientLeft + parseFloat(F.paddingLeft)) * $.x, G.y += (I.clientTop + parseFloat(F.paddingTop)) * $.y, h *= $.x, S *= $.y, E *= $.x, N *= $.y, h += G.x, S += G.y, I = mn(I).frameElement;
    }
  }
  return { width: E, height: N, top: S, right: h + E, bottom: S + N, left: h, x: h, y: S };
}
function Mi(e) {
  return ((Np(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function vl(e) {
  return $i(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ip(e) {
  return ss(Mi(e)).left + vl(e).scrollLeft;
}
function os(e) {
  if (Bi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || nf(e) && e.host || Mi(e);
  return nf(t) ? t.host : t;
}
function Pp(e) {
  const t = os(e);
  return du(t) ? t.ownerDocument.body : Wn(t) && pl(t) ? t : Pp(t);
}
function _o(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = Pp(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = mn(i);
  return a ? t.concat(r, r.visualViewport || [], pl(i) ? i : []) : t.concat(i, _o(i));
}
function af(e, t, n) {
  return t === "viewport" ? Mr((function(i, a) {
    const r = mn(i), s = Mi(i), o = r.visualViewport;
    let l = s.clientWidth, d = s.clientHeight, u = 0, h = 0;
    if (o) {
      l = o.width, d = o.height;
      const S = xp();
      (S || !S && a === "fixed") && (u = o.offsetLeft, h = o.offsetTop);
    }
    return { width: l, height: d, x: u, y: h };
  })(e, n)) : $i(t) ? Mr((function(i, a) {
    const r = ss(i, !0, a === "fixed"), s = r.top + i.clientTop, o = r.left + i.clientLeft, l = Wn(i) ? qa(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: o * l.x, y: s * l.y };
  })(t, n)) : Mr((function(i) {
    const a = Mi(i), r = vl(i), s = i.ownerDocument.body, o = Fr(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = Fr(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let d = -r.scrollLeft + Ip(i);
    const u = -r.scrollTop;
    return Kn(s).direction === "rtl" && (d += Fr(a.clientWidth, s.clientWidth) - o), { width: o, height: l, x: d, y: u };
  })(Mi(e)));
}
function rf(e) {
  return Wn(e) && Kn(e).position !== "fixed" ? e.offsetParent : null;
}
function sf(e) {
  const t = mn(e);
  let n = rf(e);
  for (; n && a0(n) && Kn(n).position === "static"; ) n = rf(n);
  return n && (Bi(n) === "html" || Bi(n) === "body" && Kn(n).position === "static" && !Ac(n)) ? t : n || (function(i) {
    let a = os(i);
    for (; Wn(a) && !du(a); ) {
      if (Ac(a)) return a;
      a = os(a);
    }
    return null;
  })(e) || t;
}
function r0(e, t, n) {
  const i = Wn(t), a = Mi(t), r = ss(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Bi(t) !== "body" || pl(a)) && (s = vl(t)), Wn(t)) {
    const l = ss(t, !0);
    o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
  } else a && (o.x = Ip(a));
  return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
}
const s0 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(d, u) {
    const h = u.get(d);
    if (h) return h;
    let S = _o(d).filter(((O) => $i(O) && Bi(O) !== "body")), E = null;
    const N = Kn(d).position === "fixed";
    let A = N ? os(d) : d;
    for (; $i(A) && !du(A); ) {
      const O = Kn(A), I = Ac(A);
      (N ? I || E : I || O.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = O : S = S.filter((($) => $ !== A)), A = os(A);
    }
    return u.set(d, S), S;
  })(t, this._c) : [].concat(n), s = [...r, i], o = s[0], l = s.reduce(((d, u) => {
    const h = af(t, u, a);
    return d.top = Fr(h.top, d.top), d.right = tf(h.right, d.right), d.bottom = tf(h.bottom, d.bottom), d.left = Fr(h.left, d.left), d;
  }), af(t, o, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Wn(n), r = Mi(n);
  if (n === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Bi(n) !== "body" || pl(r)) && (s = vl(n)), Wn(n))) {
    const d = ss(n);
    o = qa(n), l.x = d.x + n.clientLeft, l.y = d.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
}, isElement: $i, getDimensions: function(e) {
  return Wn(e) ? kp(e) : e.getBoundingClientRect();
}, getOffsetParent: sf, getDocumentElement: Mi, getScale: qa, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || sf, r = this.getDimensions;
  return { reference: r0(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Kn(e).direction === "rtl" }, o0 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: s0, ...n }, r = { ...a.platform, _c: i };
  return q1(e, t, { ...a, platform: r });
}, Fi = {
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
function kc(e, t) {
  let n = Fi.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Fi.themes[n.$extend] || {} : (n = null, i = Fi[t]) : n = null;
  while (n);
  return i;
}
function l0(e) {
  const t = [e];
  let n = Fi.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Fi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function of(e) {
  const t = [e];
  let n = Fi.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Fi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let ls = !1;
if (typeof window < "u") {
  ls = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        ls = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Dp = !1;
typeof window < "u" && typeof navigator < "u" && (Dp = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const c0 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), lf = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, cf = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function uf(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Jl() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const On = [];
let ra = null;
const df = {};
function ff(e) {
  let t = df[e];
  return t || (t = df[e] = []), t;
}
let Oc = function() {
};
typeof window < "u" && (Oc = window.Element);
function He(e) {
  return function(t) {
    return kc(t.theme, e);
  };
}
const Ql = "__floating-vue__popper", $p = () => /* @__PURE__ */ xt({
  name: "VPopper",
  provide() {
    return {
      [Ql]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Ql]: { default: null }
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
      default: He("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: He("positioningDisabled")
    },
    placement: {
      type: String,
      default: He("placement"),
      validator: (e) => c0.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: He("delay")
    },
    distance: {
      type: [Number, String],
      default: He("distance")
    },
    skidding: {
      type: [Number, String],
      default: He("skidding")
    },
    triggers: {
      type: Array,
      default: He("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: He("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: He("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: He("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: He("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: He("popperHideTriggers")
    },
    container: {
      type: [String, Object, Oc, Boolean],
      default: He("container")
    },
    boundary: {
      type: [String, Oc],
      default: He("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: He("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: He("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: He("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: He("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: He("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: He("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: He("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: He("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: He("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: He("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: He("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: He("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: He("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: He("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: He("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: He("flip")
    },
    shift: {
      type: Boolean,
      default: He("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: He("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: He("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: He("disposeTimeout")
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
      return (e = this[Ql]) == null ? void 0 : e.parentPopper;
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
    show({ event: e = null, skipDelay: t = !1, force: n = !1 } = {}) {
      var i, a;
      (i = this.parentPopper) != null && i.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (n || !this.disabled) && (((a = this.parentPopper) == null ? void 0 : a.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: e = null, skipDelay: t = !1 } = {}) {
      var n;
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
        ((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
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
      (this.distance || this.skidding) && e.middleware.push(t0({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Z1({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(n0({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(J1({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Y1({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: i, rects: a, middlewareData: r }) => {
          let s;
          const { centerOffset: o } = r.arrow;
          return i.startsWith("top") || i.startsWith("bottom") ? s = Math.abs(o) > a.reference.width / 2 : s = Math.abs(o) > a.reference.height / 2, {
            data: {
              overflow: s
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const i = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: a, placement: r, middlewareData: s }) => {
            var o;
            if ((o = s.autoSize) != null && o.skip)
              return {};
            let l, d;
            return r.startsWith("top") || r.startsWith("bottom") ? l = a.reference.width : d = a.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = l != null ? `${l}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = d != null ? `${d}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(i0({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await o0(this.$_referenceNode, this.$_popperNode, e);
      Object.assign(this.result, {
        x: n.x,
        y: n.y,
        placement: n.placement,
        strategy: n.strategy,
        arrow: {
          ...n.middlewareData.arrow,
          ...n.middlewareData.arrowOverflow
        }
      });
    },
    $_scheduleShow(e, t = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), ra && this.instantMove && ra.instantMove && ra !== this.parentPopper) {
        ra.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (ra = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Jl(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ..._o(this.$_referenceNode),
        ..._o(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), n = this.$_popperNode.querySelector(".v-popper__wrapper"), i = n.parentNode.getBoundingClientRect(), a = t.x + t.width / 2 - (i.left + n.offsetLeft), r = t.y + t.height / 2 - (i.top + n.offsetTop);
        this.result.transformOrigin = `${a}px ${r}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let n = 0; n < On.length; n++)
          t = On[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      On.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of of(this.theme))
        ff(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Jl(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, uf(On, this), On.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of of(this.theme)) {
        const i = ff(n);
        uf(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      ra === this && (ra = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Jl(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      const e = (n) => {
        this.isShown && !this.$_hideInProgress || (n.usedByTooltip = !0, !this.$_preventShow && this.show({ event: n }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, lf, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], lf, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, cf, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], cf, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, ls ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, n, i, a) {
      let r = n;
      i != null && (r = typeof i == "function" ? i(r) : i), r.forEach((s) => {
        const o = t[s];
        o && this.$_registerEventListeners(e, o, a);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((n) => {
        const { targetNodes: i, eventType: a, handler: r } = n;
        !e || e === a ? i.forEach((s) => s.removeEventListener(a, r)) : t.push(n);
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
      for (const n of this.$_targetNodes) {
        const i = n.getAttribute(e);
        i && (n.removeAttribute(e), n.setAttribute(t, i));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const n in e) {
          const i = e[n];
          i == null ? t.removeAttribute(n) : t.setAttribute(n, i);
        }
    },
    $_updateParentShownChildren(e) {
      let t = this.parentPopper;
      for (; t; )
        e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (zr >= e.left && zr <= e.right && Ur >= e.top && Ur <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = zr - Li, i = Ur - Ri, a = t.left + t.width / 2 - Li + (t.top + t.height / 2) - Ri + t.width + t.height, r = Li + n * a, s = Ri + i * a;
        return Fs(Li, Ri, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Fs(Li, Ri, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Fs(Li, Ri, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Fs(Li, Ri, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Dp) {
    const e = ls ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => hf(t), e), document.addEventListener("touchend", (t) => pf(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => hf(e), !0), window.addEventListener("click", (e) => pf(e, !1), !0);
  window.addEventListener("resize", f0);
}
function hf(e, t) {
  for (let n = 0; n < On.length; n++) {
    const i = On[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function pf(e, t) {
  u0(e, t);
}
function u0(e, t) {
  const n = {};
  for (let i = On.length - 1; i >= 0; i--) {
    const a = On[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && vf(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let o = a.parentPopper;
            for (; o; )
              n[o.randomId] = !0, o = o.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && vf(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function vf(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || d0(e, n) && !t;
}
function d0(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function f0() {
  for (let e = 0; e < On.length; e++)
    On[e].$_computePosition();
}
let Li = 0, Ri = 0, zr = 0, Ur = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Li = zr, Ri = Ur, zr = e.clientX, Ur = e.clientY;
}, ls ? {
  passive: !0
} : void 0);
function Fs(e, t, n, i, a, r, s, o) {
  const l = ((s - a) * (t - r) - (o - r) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t)), d = ((n - e) * (t - r) - (i - t) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t));
  return l >= 0 && l <= 1 && d >= 0 && d <= 1;
}
const h0 = {
  extends: $p()
}, fu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function p0(e, t, n, i, a, r) {
  return _(), T("div", {
    ref: "reference",
    class: Ee(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Re(e.$slots, "default", Ws(es(e.slotData)))
  ], 2);
}
const v0 = /* @__PURE__ */ fu(h0, [["render", p0]]);
function g0() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var n = e.indexOf("Trident/");
  if (n > 0) {
    var i = e.indexOf("rv:");
    return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10);
  }
  var a = e.indexOf("Edge/");
  return a > 0 ? parseInt(e.substring(a + 5, e.indexOf(".", a)), 10) : -1;
}
let Gs;
function Nc() {
  Nc.init || (Nc.init = !0, Gs = g0() !== -1);
}
var gl = {
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
    Nc(), an(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Gs && this.$el.appendChild(e), e.data = "about:blank", Gs || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Gs && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const m0 = /* @__PURE__ */ gg();
pg("data-v-b329ee4c");
const b0 = {
  class: "resize-observer",
  tabindex: "-1"
};
vg();
const y0 = /* @__PURE__ */ m0((e, t, n, i, a, r) => (_(), $e("div", b0)));
gl.render = y0;
gl.__scopeId = "data-v-b329ee4c";
gl.__file = "src/components/ResizeObserver.vue";
const Mp = (e = "theme") => ({
  computed: {
    themeClass() {
      return l0(this[e]);
    }
  }
}), _0 = /* @__PURE__ */ xt({
  name: "VPopperContent",
  components: {
    ResizeObserver: gl
  },
  mixins: [
    Mp()
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
}), w0 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], S0 = {
  ref: "inner",
  class: "v-popper__inner"
}, C0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-outer" }, null, -1), T0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-inner" }, null, -1), E0 = [
  C0,
  T0
];
function A0(e, t, n, i, a, r) {
  const s = Ue("ResizeObserver");
  return _(), T("div", {
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
    style: on(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = kt((o) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    c("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (o) => e.autoHide && e.$emit("hide"))
    }),
    c("div", {
      class: "v-popper__wrapper",
      style: on(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      c("div", S0, [
        e.mounted ? (_(), T(fe, { key: 0 }, [
          c("div", null, [
            Re(e.$slots, "default")
          ]),
          e.handleResize ? (_(), $e(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (o) => e.$emit("resize", o))
          })) : H("", !0)
        ], 64)) : H("", !0)
      ], 512),
      c("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: on(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, E0, 4)
    ], 4)
  ], 46, w0);
}
const Fp = /* @__PURE__ */ fu(_0, [["render", A0]]), zp = {
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
let xc = function() {
};
typeof window < "u" && (xc = window.Element);
const k0 = /* @__PURE__ */ xt({
  name: "VPopperWrapper",
  components: {
    Popper: v0,
    PopperContent: Fp
  },
  mixins: [
    zp,
    Mp("finalTheme")
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
      type: [String, Object, xc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, xc],
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
function O0(e, t, n, i, a, r) {
  const s = Ue("PopperContent"), o = Ue("Popper");
  return _(), $e(o, Ut({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (l) => e.$emit("update:shown", l)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: Oe(({
      popperId: l,
      isShown: d,
      shouldMountContent: u,
      skipTransition: h,
      autoHide: S,
      show: E,
      hide: N,
      handleResize: A,
      onResize: O,
      classes: I,
      result: $
    }) => [
      Re(e.$slots, "default", {
        shown: d,
        show: E,
        hide: N
      }),
      be(s, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: d,
        mounted: u,
        "skip-transition": h,
        "auto-hide": S,
        "handle-resize": A,
        classes: I,
        result: $,
        onHide: N,
        onResize: O
      }, {
        default: Oe(() => [
          Re(e.$slots, "popper", {
            shown: d,
            hide: N
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const hu = /* @__PURE__ */ fu(k0, [["render", O0]]), N0 = {
  ...hu,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...hu
});
({
  ...hu
});
$p();
const gf = Fi, x0 = N0, L0 = /* @__PURE__ */ xt({
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
}), R0 = "_ncPopover_qgtYg", I0 = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: R0
}, Up = "nc-popover-9";
gf.themes[Up] = structuredClone(gf.themes.dropdown);
const P0 = {
  name: "NcPopover",
  components: {
    Dropdown: x0,
    NcPopoverTriggerProvider: L0
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
      theme: Up
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
      return this.placement === "start" ? Sc ? "right" : "left" : this.placement === "end" ? Sc ? "left" : "right" : this.placement;
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
      for (const n of t)
        n.removeAttribute("aria-describedby");
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
      e.tabIndex = -1, e && (this.$focusTrap = ou(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: as(),
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
        ma.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function D0(e, t, n, i, a, r) {
  const s = Ue("NcPopoverTriggerProvider"), o = Ue("Dropdown");
  return _(), $e(o, {
    ref: "popover",
    shown: a.internalShown,
    "onUpdate:shown": [
      t[0] || (t[0] = (l) => a.internalShown = l),
      t[1] || (t[1] = (l) => a.internalShown = l)
    ],
    autoHide: !n.noCloseOnClickOutside && n.closeOnClickOutside,
    boundary: n.boundary || void 0,
    container: n.container,
    delay: n.delay,
    distance: 4,
    handleResize: "",
    noAutoFocus: !0,
    placement: r.internalPlacement,
    popperClass: [e.$style.ncPopover, n.popoverBaseClass],
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
    popper: Oe((l) => [
      Re(e.$slots, "default", Ws(es(l)))
    ]),
    default: Oe(() => [
      be(s, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Oe((l) => [
          Re(e.$slots, "trigger", Ws(es(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const $0 = {
  $style: I0
}, mf = /* @__PURE__ */ Xe(P0, [["render", D0], ["__cssModules", $0]]), M0 = {
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
}, F0 = ["aria-hidden", "aria-label"], z0 = ["fill", "width", "height"], U0 = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, B0 = { key: 0 };
function H0(e, t, n, i, a, r) {
  return _(), T("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", U0, [
        n.title ? (_(), T("title", B0, p(n.title), 1)) : H("", !0)
      ])
    ], 8, z0))
  ], 16, F0);
}
const j0 = /* @__PURE__ */ Xe(M0, [["render", H0]]);
ji(Sy);
function pu(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === Ot)
        return !1;
      if (n.type === fe && !pu(n.children))
        return !1;
      if (n.type === ps && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const V0 = ".focusable", G0 = {
  name: "NcActions",
  components: {
    NcButton: Gn,
    NcPopover: mf
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
      [lu]: q(() => this.actionsMenuSemanticType === "menu"),
      [wp]: this.closeMenu
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
      default: St("Actions")
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
      randomId: hl()
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
    M1(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(V0);
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
        const t = this.getFocusableMenuItemElements(), n = [...t].indexOf(document.activeElement);
        if (n === -1)
          return;
        const i = e.shiftKey ? n - 1 : n + 1;
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
        const t = [...this.getFocusableMenuItemElements()].findIndex((n) => n.getAttribute("aria-checked") === "true" && n.getAttribute("role") === "menuitemradio");
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
    const e = [], t = (E, N) => {
      E.forEach((A) => {
        if (this.isAction(A)) {
          N.push(A);
          return;
        }
        A.type === fe && t(A.children, N);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((E) => !i.includes(E)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], o = ["NcActionLink", "NcActionRouter"], l = a.some((E) => s.includes(this.getActionName(E))), d = a.some((E) => r.includes(this.getActionName(E))), u = a.some((E) => o.includes(this.getActionName(E)));
    l ? this.actionsMenuSemanticType = "dialog" : d ? this.actionsMenuSemanticType = "menu" : u ? this.actionsMenuSemanticType = "navigation" : e.filter((N) => this.getActionName(N).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const h = (E) => {
      const N = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(N) ? Xt("img", { class: "action-item__menutoggle__icon", src: N, alt: "" }) : Xt("span", { class: ["icon", N] })), O = E?.children?.default?.()?.[0]?.children?.trim(), I = this.forceName ? O : "";
      let $ = E?.props?.title;
      this.forceName || $ || ($ = O);
      const G = { ...E?.props ?? {} }, F = ["submit", "reset"].includes(G.type) ? G.modelValue : "button";
      return delete G.modelValue, delete G.type, Xt(
        Gn,
        Ut(
          G,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": E?.props?.["aria-label"] || O,
            title: $,
            disabled: this.disabled || E?.props?.disabled,
            pressed: E?.props?.modelValue,
            size: this.size,
            type: F,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (I ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": E?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => I,
          icon: () => A
        }
      );
    }, S = (E) => {
      const N = pu(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Xt("span", { class: ["icon", this.defaultIcon] }) : Xt(j0, { size: 20 }), A = `${this.randomId}-trigger`;
      return Xt(
        mf,
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
          trigger: () => Xt(Gn, {
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
            icon: () => N,
            default: () => this.menuName
          }),
          default: () => Xt("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            Xt("ul", {
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
    return e.length === 1 && n.length === 1 && !this.forceMenu ? h(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), i.length > 0 && this.inline > 0 ? Xt(
      "div",
      {
        class: [
          "action-items",
          `action-item--${this.triggerButtonVariant}`
        ]
      },
      [
        // Render inline actions
        ...i.map(h),
        // render the rest within the popover menu
        a.length > 0 ? Xt(
          "div",
          {
            class: [
              "action-item",
              {
                "action-item--open": this.opened
              }
            ]
          },
          [S(a)]
        ) : null
      ]
    ) : Xt(
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
        S(e)
      ]
    ));
  }
}, wo = /* @__PURE__ */ Xe(G0, [["__scopeId", "data-v-7206c1f1"]]), K0 = ["aria-label"], W0 = ["width", "height"], q0 = ["fill"], Y0 = ["fill"], X0 = { key: 0 }, Z0 = /* @__PURE__ */ xt({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, n = q(() => {
      const i = ["#777", "#CCC"];
      return t.appearance === "light" ? i : t.appearance === "dark" ? i.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (i, a) => (_(), T("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (_(), T("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        c("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, q0),
        c("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (_(), T("title", X0, p(e.name), 1)) : H("", !0)
        ], 8, Y0)
      ], 8, W0))
    ], 8, K0));
  }
}), Bp = /* @__PURE__ */ Xe(Z0, [["__scopeId", "data-v-cf399190"]]), Lc = /* @__PURE__ */ xt({
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
}), J0 = {
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
}, Q0 = ["aria-hidden", "aria-label"], ew = ["fill", "width", "height"], tw = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, nw = { key: 0 };
function iw(e, t, n, i, a, r) {
  return _(), T("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", tw, [
        n.title ? (_(), T("title", nw, p(n.title), 1)) : H("", !0)
      ])
    ], 8, ew))
  ], 16, Q0);
}
const aw = /* @__PURE__ */ Xe(J0, [["render", iw]]), rw = {
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
}, sw = ["aria-hidden", "aria-label"], ow = ["fill", "width", "height"], lw = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, cw = { key: 0 };
function uw(e, t, n, i, a, r) {
  return _(), T("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", lw, [
        n.title ? (_(), T("title", cw, p(n.title), 1)) : H("", !0)
      ])
    ], 8, ow))
  ], 16, sw);
}
const dw = /* @__PURE__ */ Xe(rw, [["render", uw]]);
ji(Ay);
const fw = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Gn,
    ChevronDown: t1,
    ChevronUp: l1
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
    return { isLegacy34: Vi };
  },
  computed: {
    labelButton() {
      return this.open ? St("Collapse menu") : St("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function hw(e, t, n, i, a, r) {
  const s = Ue("ChevronUp"), o = Ue("ChevronDown"), l = Ue("NcButton");
  return _(), $e(l, {
    class: Ee(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Oe(() => [
      n.open ? (_(), $e(s, {
        key: 0,
        size: 20
      })) : (_(), $e(o, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const pw = /* @__PURE__ */ Xe(fw, [["render", hw], ["__scopeId", "data-v-cfbd3794"]]);
ji(ky, xy);
const vw = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: wo,
    NcActionButton: $1,
    NcAppNavigationIconCollapsible: pw,
    NcInputConfirmCancel: T1,
    NcLoadingIcon: Bp,
    NcVNodes: Lc,
    Pencil: aw,
    Undo: dw
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: vp, default: null }
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
      default: () => hl(),
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
      isMobile: gs(),
      isLegacy34: Vi
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
      return this.editLabel ? this.editLabel : St("Edit item");
    },
    undoButtonAriaLabel() {
      return St("Undo changes");
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
    onClick(e, t, n) {
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && hi("toggle-navigation", { open: !1 }));
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
      const n = t.querySelector("button");
      this.focused && n && (e.preventDefault(), n.focus(), this.focused = !1);
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
}, gw = ["id"], mw = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], bw = {
  key: 0,
  class: "editingContainer"
}, yw = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, _w = { class: "app-navigation-entry__deleted-description" }, ww = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, Sw = {
  key: 0,
  class: "app-navigation-entry__children"
};
function Cw(e, t, n, i, a, r) {
  const s = Ue("NcLoadingIcon"), o = Ue("NcInputConfirmCancel"), l = Ue("Pencil"), d = Ue("NcActionButton"), u = Ue("Undo"), h = Ue("NcActions"), S = Ue("NcAppNavigationIconCollapsible");
  return _(), T("li", {
    id: n.id,
    class: Ee([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (_(), $e(Zc(r.isRouterLink ? "router-link" : "NcVNodes"), Ws(es({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Oe(({ href: E, navigate: N, isActive: A }) => [
        c("div", {
          ref: "entry",
          class: Ee(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && A || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...O) => r.requestHighlight && r.requestHighlight(...O)),
          onFocusin: t[5] || (t[5] = (...O) => r.requestHighlight && r.requestHighlight(...O))
        }, [
          n.undo ? H("", !0) : (_(), T("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": n.active || n.to && A ? "page" : void 0,
            "aria-description": n.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: n.href || E || "#",
            target: r.isExternal(n.href) ? "_blank" : void 0,
            title: n.title || n.name,
            onBlur: t[1] || (t[1] = (...O) => r.handleBlur && r.handleBlur(...O)),
            onClick: (O) => r.onClick(O, N, E),
            onFocus: t[2] || (t[2] = (...O) => r.handleFocus && r.handleFocus(...O)),
            onKeydown: t[3] || (t[3] = kt(Ge((...O) => r.handleTab && r.handleTab(...O), ["exact"]), ["tab"]))
          }, [
            c("div", {
              class: Ee(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (_(), $e(s, { key: 0 })) : Re(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            c("span", {
              class: Ee(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, p(n.name), 3),
            a.editingActive ? (_(), T("div", bw, [
              be(o, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (O) => a.editingValue = O),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : H("", !0)
          ], 40, mw)),
          n.undo ? (_(), T("div", yw, [
            c("div", _w, p(n.name), 1)
          ])) : H("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (_(), T("div", {
            key: 2,
            class: Ee(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (_(), T("div", ww, [
              Re(e.$slots, "counter", {}, void 0, !0)
            ])) : H("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (_(), $e(h, {
              key: 1,
              ref: "actions",
              class: "app-navigation-entry__actions",
              container: "#app-navigation-vue",
              boundariesElement: a.actionsBoundariesElement,
              inline: n.inlineActions,
              placement: n.menuPlacement,
              open: n.menuOpen,
              forceMenu: n.forceMenu,
              defaultIcon: n.menuIcon,
              variant: "tertiary",
              "onUpdate:open": r.onMenuToggle
            }, {
              icon: Oe(() => [
                Re(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Oe(() => [
                n.editable && !a.editingActive ? (_(), $e(d, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Oe(() => [
                    be(l, { size: 20 })
                  ]),
                  default: Oe(() => [
                    Ne(" " + p(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : H("", !0),
                n.undo ? (_(), $e(d, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Oe(() => [
                    be(u, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : H("", !0),
                Re(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : H("", !0)
          ], 2)) : H("", !0),
          n.allowCollapse && e.$slots.default ? (_(), $e(S, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: Ge(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : H("", !0),
          Re(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (_(), T("ul", Sw, [
      Re(e.$slots, "default", {}, void 0, !0)
    ])) : H("", !0)
  ], 10, gw);
}
const bf = /* @__PURE__ */ Xe(vw, [["render", Cw], ["__scopeId", "data-v-01bef41b"]]), ec = /* @__PURE__ */ new WeakMap(), Tw = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = Hd(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = Hd(e, a, Object.assign({ capture: n }, r));
    }
    ec.set(e, i);
  },
  unmounted(e) {
    const t = ec.get(e);
    t && typeof t == "function" ? t() : t?.stop(), ec.delete(e);
  }
}, Ew = {
  mounted(e) {
    e.focus();
  }
}, Aw = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", kw = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Rc = "numeric", Ic = "ascii", Pc = "alpha", Br = "asciinumeric", xr = "alphanumeric", Dc = "domain", Hp = "emoji", Ow = "scheme", Nw = "slashscheme", tc = "whitespace";
function xw(e, t) {
  return e in t || (t[e] = []), t[e];
}
function ha(e, t, n) {
  t[Rc] && (t[Br] = !0, t[xr] = !0), t[Ic] && (t[Br] = !0, t[Pc] = !0), t[Br] && (t[xr] = !0), t[Pc] && (t[xr] = !0), t[xr] && (t[Dc] = !0), t[Hp] && (t[Dc] = !0);
  for (const i in t) {
    const a = xw(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function Lw(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function rn(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
rn.groups = {};
rn.prototype = {
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
    const t = this, n = t.j[e];
    if (n)
      return n;
    for (let i = 0; i < t.jr.length; i++) {
      const a = t.jr[i][0], r = t.jr[i][1];
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
  ta(e, t, n, i) {
    for (let a = 0; a < e.length; a++)
      this.tt(e[a], t, n, i);
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
  tr(e, t, n, i) {
    i = i || rn.groups;
    let a;
    return t && t.j ? a = t : (a = new rn(t), n && i && ha(t, n, i)), this.jr.push([e, a]), a;
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
  ts(e, t, n, i) {
    let a = this;
    const r = e.length;
    if (!r)
      return a;
    for (let s = 0; s < r - 1; s++)
      a = a.tt(e[s]);
    return a.tt(e[r - 1], t, n, i);
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
  tt(e, t, n, i) {
    i = i || rn.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let s, o = a.go(e);
    if (o ? (s = new rn(), Object.assign(s.j, o.j), s.jr.push.apply(s.jr, o.jr), s.jd = o.jd, s.t = o.t) : s = new rn(), r) {
      if (i)
        if (s.t && typeof s.t == "string") {
          const l = Object.assign(Lw(s.t, i), n);
          ha(r, l, i);
        } else n && ha(r, n, i);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const Ie = (e, t, n, i, a) => e.ta(t, n, i, a), lt = (e, t, n, i, a) => e.tr(t, n, i, a), yf = (e, t, n, i, a) => e.ts(t, n, i, a), ne = (e, t, n, i, a) => e.tt(t, n, i, a), ai = "WORD", $c = "UWORD", jp = "ASCIINUMERICAL", Vp = "ALPHANUMERICAL", cs = "LOCALHOST", Mc = "TLD", Fc = "UTLD", Ks = "SCHEME", Ua = "SLASH_SCHEME", vu = "NUM", zc = "WS", gu = "NL", Hr = "OPENBRACE", jr = "CLOSEBRACE", So = "OPENBRACKET", Co = "CLOSEBRACKET", To = "OPENPAREN", Eo = "CLOSEPAREN", Ao = "OPENANGLEBRACKET", ko = "CLOSEANGLEBRACKET", Oo = "FULLWIDTHLEFTPAREN", No = "FULLWIDTHRIGHTPAREN", xo = "LEFTCORNERBRACKET", Lo = "RIGHTCORNERBRACKET", Ro = "LEFTWHITECORNERBRACKET", Io = "RIGHTWHITECORNERBRACKET", Po = "FULLWIDTHLESSTHAN", Do = "FULLWIDTHGREATERTHAN", $o = "AMPERSAND", Mo = "APOSTROPHE", Fo = "ASTERISK", Pi = "AT", zo = "BACKSLASH", Uo = "BACKTICK", Bo = "CARET", pa = "COLON", mu = "COMMA", Ho = "DOLLAR", Bn = "DOT", jo = "EQUALS", bu = "EXCLAMATION", pn = "HYPHEN", Vr = "PERCENT", Vo = "PIPE", Go = "PLUS", Ko = "POUND", Gr = "QUERY", yu = "QUOTE", Gp = "FULLWIDTHMIDDLEDOT", _u = "SEMI", Hn = "SLASH", Kr = "TILDE", Wo = "UNDERSCORE", Kp = "EMOJI", qo = "SYM";
var Wp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Vp,
  AMPERSAND: $o,
  APOSTROPHE: Mo,
  ASCIINUMERICAL: jp,
  ASTERISK: Fo,
  AT: Pi,
  BACKSLASH: zo,
  BACKTICK: Uo,
  CARET: Bo,
  CLOSEANGLEBRACKET: ko,
  CLOSEBRACE: jr,
  CLOSEBRACKET: Co,
  CLOSEPAREN: Eo,
  COLON: pa,
  COMMA: mu,
  DOLLAR: Ho,
  DOT: Bn,
  EMOJI: Kp,
  EQUALS: jo,
  EXCLAMATION: bu,
  FULLWIDTHGREATERTHAN: Do,
  FULLWIDTHLEFTPAREN: Oo,
  FULLWIDTHLESSTHAN: Po,
  FULLWIDTHMIDDLEDOT: Gp,
  FULLWIDTHRIGHTPAREN: No,
  HYPHEN: pn,
  LEFTCORNERBRACKET: xo,
  LEFTWHITECORNERBRACKET: Ro,
  LOCALHOST: cs,
  NL: gu,
  NUM: vu,
  OPENANGLEBRACKET: Ao,
  OPENBRACE: Hr,
  OPENBRACKET: So,
  OPENPAREN: To,
  PERCENT: Vr,
  PIPE: Vo,
  PLUS: Go,
  POUND: Ko,
  QUERY: Gr,
  QUOTE: yu,
  RIGHTCORNERBRACKET: Lo,
  RIGHTWHITECORNERBRACKET: Io,
  SCHEME: Ks,
  SEMI: _u,
  SLASH: Hn,
  SLASH_SCHEME: Ua,
  SYM: qo,
  TILDE: Kr,
  TLD: Mc,
  UNDERSCORE: Wo,
  UTLD: Fc,
  UWORD: $c,
  WORD: ai,
  WS: zc
});
const ni = /[a-z]/, Tr = new RegExp("\\p{L}", "u"), nc = new RegExp("\\p{Emoji}", "u"), ii = /\d/, ic = /\s/, _f = "\r", ac = `
`, Rw = "️", Iw = "‍", rc = "￼";
let zs = null, Us = null;
function Pw(e = []) {
  const t = {};
  rn.groups = t;
  const n = new rn();
  zs == null && (zs = wf(Aw)), Us == null && (Us = wf(kw)), ne(n, "'", Mo), ne(n, "{", Hr), ne(n, "}", jr), ne(n, "[", So), ne(n, "]", Co), ne(n, "(", To), ne(n, ")", Eo), ne(n, "<", Ao), ne(n, ">", ko), ne(n, "（", Oo), ne(n, "）", No), ne(n, "「", xo), ne(n, "」", Lo), ne(n, "『", Ro), ne(n, "』", Io), ne(n, "＜", Po), ne(n, "＞", Do), ne(n, "&", $o), ne(n, "*", Fo), ne(n, "@", Pi), ne(n, "`", Uo), ne(n, "^", Bo), ne(n, ":", pa), ne(n, ",", mu), ne(n, "$", Ho), ne(n, ".", Bn), ne(n, "=", jo), ne(n, "!", bu), ne(n, "-", pn), ne(n, "%", Vr), ne(n, "|", Vo), ne(n, "+", Go), ne(n, "#", Ko), ne(n, "?", Gr), ne(n, '"', yu), ne(n, "/", Hn), ne(n, ";", _u), ne(n, "~", Kr), ne(n, "_", Wo), ne(n, "\\", zo), ne(n, "・", Gp);
  const i = lt(n, ii, vu, {
    [Rc]: !0
  });
  lt(i, ii, i);
  const a = lt(i, ni, jp, {
    [Br]: !0
  }), r = lt(i, Tr, Vp, {
    [xr]: !0
  }), s = lt(n, ni, ai, {
    [Ic]: !0
  });
  lt(s, ii, a), lt(s, ni, s), lt(a, ii, a), lt(a, ni, a);
  const o = lt(n, Tr, $c, {
    [Pc]: !0
  });
  lt(o, ni), lt(o, ii, r), lt(o, Tr, o), lt(r, ii, r), lt(r, ni), lt(r, Tr, r);
  const l = ne(n, ac, gu, {
    [tc]: !0
  }), d = ne(n, _f, zc, {
    [tc]: !0
  }), u = lt(n, ic, zc, {
    [tc]: !0
  });
  ne(n, rc, u), ne(d, ac, l), ne(d, rc, u), lt(d, ic, u), ne(u, _f), ne(u, ac), lt(u, ic, u), ne(u, rc, u);
  const h = lt(n, nc, Kp, {
    [Hp]: !0
  });
  ne(h, "#"), lt(h, nc, h), ne(h, Rw, h);
  const S = ne(h, Iw);
  ne(S, "#"), lt(S, nc, h);
  const E = [[ni, s], [ii, a]], N = [[ni, null], [Tr, o], [ii, r]];
  for (let A = 0; A < zs.length; A++)
    Ni(n, zs[A], Mc, ai, E);
  for (let A = 0; A < Us.length; A++)
    Ni(n, Us[A], Fc, $c, N);
  ha(Mc, {
    tld: !0,
    ascii: !0
  }, t), ha(Fc, {
    utld: !0,
    alpha: !0
  }, t), Ni(n, "file", Ks, ai, E), Ni(n, "mailto", Ks, ai, E), Ni(n, "http", Ua, ai, E), Ni(n, "https", Ua, ai, E), Ni(n, "ftp", Ua, ai, E), Ni(n, "ftps", Ua, ai, E), ha(Ks, {
    scheme: !0,
    ascii: !0
  }, t), ha(Ua, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, O) => A[0] > O[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const O = e[A][0], $ = e[A][1] ? {
      [Ow]: !0
    } : {
      [Nw]: !0
    };
    O.indexOf("-") >= 0 ? $[Dc] = !0 : ni.test(O) ? ii.test(O) ? $[Br] = !0 : $[Ic] = !0 : $[Rc] = !0, yf(n, O, O, $);
  }
  return yf(n, "localhost", cs, {
    ascii: !0
  }), n.jd = new rn(qo), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, Wp)
  };
}
function qp(e, t) {
  const n = Dw(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = n.length, a = [];
  let r = 0, s = 0;
  for (; s < i; ) {
    let o = e, l = null, d = 0, u = null, h = -1, S = -1;
    for (; s < i && (l = o.go(n[s])); )
      o = l, o.accepts() ? (h = 0, S = 0, u = o) : h >= 0 && (h += n[s].length, S++), d += n[s].length, r += n[s].length, s++;
    r -= h, s -= S, d -= h, a.push({
      t: u.t,
      // token type/name
      v: t.slice(r - d, r),
      // string value
      s: r - d,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return a;
}
function Dw(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, s = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(s), i += s.length;
  }
  return t;
}
function Ni(e, t, n, i, a) {
  let r;
  const s = t.length;
  for (let o = 0; o < s - 1; o++) {
    const l = t[o];
    e.j[l] ? r = e.j[l] : (r = new rn(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new rn(n), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function wf(e) {
  const t = [], n = [];
  let i = 0, a = "0123456789";
  for (; i < e.length; ) {
    let r = 0;
    for (; a.indexOf(e[i + r]) >= 0; )
      r++;
    if (r > 0) {
      t.push(n.join(""));
      for (let s = parseInt(e.substring(i, i + r), 10); s > 0; s--)
        n.pop();
      i += r;
    } else
      n.push(e[i]), i++;
  }
  return t;
}
const us = {
  defaultProtocol: "http",
  events: null,
  format: Sf,
  formatHref: Sf,
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
function wu(e, t = null) {
  let n = Object.assign({}, us);
  e && (n = Object.assign(n, e instanceof wu ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
wu.prototype = {
  o: us,
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
  get(e, t, n) {
    const i = t != null;
    let a = this.o[e];
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : us[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(e, t, n) {
    let i = this.o[e];
    return typeof i == "function" && t != null && (i = i(t, n.t, n)), i;
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
function Sf(e) {
  return e;
}
function Yp(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
Yp.prototype = {
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
    const t = this.toString(), n = e.get("truncate", t, this), i = e.get("format", t, this);
    return n && i.length > n ? i.substring(0, n) + "…" : i;
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
  toObject(e = us.defaultProtocol) {
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
    const t = this, n = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", n, this), a = e.get("tagName", n, t), r = this.toFormattedString(e), s = {}, o = e.get("className", n, t), l = e.get("target", n, t), d = e.get("rel", n, t), u = e.getObj("attributes", n, t), h = e.getObj("events", n, t);
    return s.href = i, o && (s.class = o), l && (s.target = l), d && (s.rel = d), u && Object.assign(s, u), {
      tagName: a,
      attributes: s,
      content: r,
      eventListeners: h
    };
  }
};
function ml(e, t) {
  class n extends Yp {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const $w = ml("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Cf = ml("text"), Mw = ml("nl"), Bs = ml("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = us.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== cs && e[1].t === pa;
  }
}), fn = (e) => new rn(e);
function Fw({
  groups: e
}) {
  const t = e.domain.concat([$o, Fo, Pi, zo, Uo, Bo, Ho, jo, pn, vu, Vr, Vo, Go, Ko, Hn, qo, Kr, Wo]), n = [Mo, pa, mu, Bn, bu, Vr, Gr, yu, _u, Ao, ko, Hr, jr, Co, So, To, Eo, Oo, No, xo, Lo, Ro, Io, Po, Do], i = [$o, Mo, Fo, zo, Uo, Bo, Ho, jo, pn, Hr, jr, Vr, Vo, Go, Ko, Gr, Hn, qo, Kr, Wo], a = fn(), r = ne(a, Kr);
  Ie(r, i, r), Ie(r, e.domain, r);
  const s = fn(), o = fn(), l = fn();
  Ie(a, e.domain, s), Ie(a, e.scheme, o), Ie(a, e.slashscheme, l), Ie(s, i, r), Ie(s, e.domain, s);
  const d = ne(s, Pi);
  ne(r, Pi, d), ne(o, Pi, d), ne(l, Pi, d);
  const u = ne(r, Bn);
  Ie(u, i, r), Ie(u, e.domain, r);
  const h = fn();
  Ie(d, e.domain, h), Ie(h, e.domain, h);
  const S = ne(h, Bn);
  Ie(S, e.domain, h);
  const E = fn($w);
  Ie(S, e.tld, E), Ie(S, e.utld, E), ne(d, cs, E);
  const N = ne(h, pn);
  ne(N, pn, N), Ie(N, e.domain, h), Ie(E, e.domain, h), ne(E, Bn, S), ne(E, pn, N);
  const A = ne(s, pn), O = ne(s, Bn);
  ne(A, pn, A), Ie(A, e.domain, s), Ie(O, i, r), Ie(O, e.domain, s);
  const I = fn(Bs);
  Ie(O, e.tld, I), Ie(O, e.utld, I), Ie(I, e.domain, s), Ie(I, i, r), ne(I, Bn, O), ne(I, pn, A), ne(I, Pi, d);
  const $ = ne(I, pa), G = fn(Bs);
  Ie($, e.numeric, G);
  const F = fn(Bs), Z = fn();
  Ie(F, t, F), Ie(F, n, Z), Ie(Z, t, F), Ie(Z, n, Z), ne(I, Hn, F), ne(G, Hn, F);
  const D = ne(o, pa), J = ne(l, pa), de = ne(J, Hn), X = ne(de, Hn);
  Ie(o, e.domain, s), ne(o, Bn, O), ne(o, pn, A), Ie(l, e.domain, s), ne(l, Bn, O), ne(l, pn, A), Ie(D, e.domain, F), ne(D, Hn, F), ne(D, Gr, F), Ie(X, e.domain, F), Ie(X, t, F), ne(X, Hn, F);
  const se = [
    [Hr, jr],
    // {}
    [So, Co],
    // []
    [To, Eo],
    // ()
    [Ao, ko],
    // <>
    [Oo, No],
    // （）
    [xo, Lo],
    // 「」
    [Ro, Io],
    // 『』
    [Po, Do]
    // ＜＞
  ];
  for (let ge = 0; ge < se.length; ge++) {
    const [te, ae] = se[ge], P = ne(F, te);
    ne(Z, te, P);
    const M = fn(Bs);
    Ie(P, t, M);
    const Y = fn();
    Ie(P, n, Y), ne(P, ae, F), Ie(M, t, M), Ie(M, n, Y), Ie(Y, t, M), Ie(Y, n, Y), ne(M, ae, F), ne(Y, ae, F);
  }
  return ne(a, cs, I), ne(a, gu, Mw), {
    start: a,
    tokens: Wp
  };
}
function zw(e, t, n) {
  let i = n.length, a = 0, r = [], s = [];
  for (; a < i; ) {
    let o = e, l = null, d = null, u = 0, h = null, S = -1;
    for (; a < i && !(l = o.go(n[a].t)); )
      s.push(n[a++]);
    for (; a < i && (d = l || o.go(n[a].t)); )
      l = null, o = d, o.accepts() ? (S = 0, h = o) : S >= 0 && S++, a++, u++;
    if (S < 0)
      a -= u, a < i && (s.push(n[a]), a++);
    else {
      s.length > 0 && (r.push(sc(Cf, t, s)), s = []), a -= S, u -= S;
      const E = h.t, N = n.slice(a - u, a);
      r.push(sc(E, t, N));
    }
  }
  return s.length > 0 && r.push(sc(Cf, t, s)), r;
}
function sc(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const It = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function Uw() {
  It.scanner = Pw(It.customSchemes);
  for (let e = 0; e < It.tokenQueue.length; e++)
    It.tokenQueue[e][1]({
      scanner: It.scanner
    });
  It.parser = Fw(It.scanner.tokens);
  for (let e = 0; e < It.pluginQueue.length; e++)
    It.pluginQueue[e][1]({
      scanner: It.scanner,
      parser: It.parser
    });
  return It.initialized = !0, It;
}
function Xp(e) {
  return It.initialized || Uw(), zw(It.parser.start, e, qp(It.scanner.start, e));
}
Xp.scan = qp;
function Bw(e) {
  const t = new wu({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, Vw), n = Xp(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(lo(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function Hw(e) {
  return e.replace(/"/g, "&quot;");
}
function jw(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${Hw(i)}"`);
  }
  return t.join(" ");
}
function Vw({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${jw(t)}>${lo(n)}</${e}>`;
}
const Gw = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = Bw(t.text));
}, Kw = ["title"], Ww = /* @__PURE__ */ xt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = $t("NcAppSidebar:header:ref");
    return (n, i) => We((_(), T("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Ne(p(e.name), 1)
    ], 8, Kw)), [
      [g(Gw), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), qw = ["aria-labelledby"], Yw = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, Xw = ["id"], Zw = {
  key: 2,
  class: "empty-content__description"
}, Jw = {
  key: 3,
  class: "empty-content__action"
}, Qw = /* @__PURE__ */ xt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = hl();
    return (n, i) => (_(), T("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (_(), T("div", Yw, [
        Re(n.$slots, "icon", {}, void 0, !0)
      ])) : H("", !0),
      e.name !== "" || n.$slots.name ? (_(), T("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Re(n.$slots, "name", {}, () => [
          Ne(p(e.name), 1)
        ], !0)
      ], 8, Xw)) : H("", !0),
      e.description !== "" || n.$slots.description ? (_(), T("p", Zw, [
        Re(n.$slots, "description", {}, () => [
          Ne(p(e.description), 1)
        ], !0)
      ])) : H("", !0),
      n.$slots.action ? (_(), T("div", Jw, [
        Re(n.$slots, "action", {}, void 0, !0)
      ])) : H("", !0)
    ], 8, qw));
  }
}), eS = /* @__PURE__ */ Xe(Qw, [["__scopeId", "data-v-8609a4c1"]]), tS = {
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
}, nS = ["aria-hidden", "aria-label"], iS = ["fill", "width", "height"], aS = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, rS = { key: 0 };
function sS(e, t, n, i, a, r) {
  return _(), T("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", aS, [
        n.title ? (_(), T("title", rS, p(n.title), 1)) : H("", !0)
      ])
    ], 8, iS))
  ], 16, nS);
}
const oS = /* @__PURE__ */ Xe(tS, [["render", sS]]), lS = {
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
}, cS = ["aria-hidden", "aria-label"], uS = ["fill", "width", "height"], dS = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, fS = { key: 0 };
function hS(e, t, n, i, a, r) {
  return _(), T("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", dS, [
        n.title ? (_(), T("title", fS, p(n.title), 1)) : H("", !0)
      ])
    ], 8, uS))
  ], 16, cS);
}
const pS = /* @__PURE__ */ Xe(lS, [["render", hS]]), vS = {
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
}, gS = ["aria-hidden", "aria-label"], mS = ["fill", "width", "height"], bS = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, yS = { key: 0 };
function _S(e, t, n, i, a, r) {
  return _(), T("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", bS, [
        n.title ? (_(), T("title", yS, p(n.title), 1)) : H("", !0)
      ])
    ], 8, mS))
  ], 16, gS);
}
const wS = /* @__PURE__ */ Xe(vS, [["render", _S]]), SS = ["aria-selected", "tabindex"], CS = /* @__PURE__ */ xt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Bg({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = bh(e, "selected"), n = /* @__PURE__ */ Pe(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (_(), T("button", {
      class: Ee(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(Vi),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      c("span", {
        class: Ee([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (s) => n.value = !1)
      }, [
        c("span", {
          class: Ee([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          be(Lc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Oe(() => [
              c("span", {
                class: Ee([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        c("span", {
          class: Ee([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          be(Lc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Oe(() => [
              c("span", {
                class: Ee([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      c("span", {
        class: Ee(a.$style.sidebarTabsButton__name)
      }, p(e.tab.name), 3)
    ], 10, SS));
  }
}), TS = "_sidebarTabsButton_q3kBA", ES = "_sidebarTabsButton_legacy_KQ4d1", AS = "_sidebarTabsButton_selected_Pjayf", kS = "_sidebarTabsButton_animatedHighlight_uvp-0", OS = "_sidebarTabsButton__name_rlQsL", NS = "_sidebarTabsButton__icon_QzZg4", xS = "_sidebarTabsButton__iconLayer_ZkZan", LS = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", RS = "_sidebarTabsButton__icon_pop_IA0By", IS = "_sidebarTabsButton__legacyIcon_QhcNW", PS = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: TS,
  sidebarTabsButton_legacy: ES,
  sidebarTabsButton_selected: AS,
  sidebarTabsButton_animatedHighlight: kS,
  sidebarTabsButton__name: OS,
  sidebarTabsButton__icon: NS,
  sidebarTabsButton__iconLayer: xS,
  sidebarTabsButton__iconLayer_hidden: LS,
  sidebarTabsButton__icon_pop: RS,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: IS
}, DS = {
  $style: PS
}, $S = /* @__PURE__ */ Xe(CS, [["__cssModules", DS]]), MS = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: $S
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
      isLegacy34: Vi,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [jb()]) : t.order - n.order), this.updateActive();
    },
    /**
     * Unregister child tab from the tabs
     *
     * @param {string} id tab's id
     */
    unregisterTab(e) {
      const t = this.tabs.findIndex((n) => n.id === e);
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
      const t = e.getBoundingClientRect(), n = this.$refs.nav.getBoundingClientRect(), i = this.highlightVisible;
      this.highlightAnimated = i, this.highlightOverActive = e.getAttribute("aria-selected") === "true", this.highlightLeft = t.left - n.left, this.highlightTop = t.top - n.top, this.highlightWidth = t.width, this.highlightHeight = t.height, i || (this.highlightVisible = !0, this.$nextTick(() => requestAnimationFrame(() => {
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
}, FS = { class: "app-sidebar-tabs" };
function zS(e, t, n, i, a, r) {
  const s = Ue("NcAppSidebarTabsButton");
  return _(), T("div", FS, [
    r.hasMultipleTabs || r.showForSingleTab ? (_(), T("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ee(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = kt(Ge((...o) => r.focusPreviousTab && r.focusPreviousTab(...o), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = kt(Ge((...o) => r.focusNextTab && r.focusNextTab(...o), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = kt(Ge((...o) => r.focusActiveTabContent && r.focusActiveTabContent(...o), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = kt(Ge((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = kt(Ge((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = kt(Ge((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = kt(Ge((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onPointerleave: t[8] || (t[8] = (...o) => r.hideHighlight && r.hideHighlight(...o)),
      onFocusin: t[9] || (t[9] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onFocusout: t[10] || (t[10] = (...o) => r.onHighlightFocusOut && r.onHighlightFocusOut(...o))
    }, [
      a.highlightEnabled ? (_(), T("div", {
        key: 0,
        class: Ee(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: on(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : H("", !0),
      (_(!0), T(fe, null, Fe(a.tabs, (o) => (_(), $e(s, {
        id: `tab-button-${o.id}`,
        key: o.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${o.id}`,
        selected: a.activeTab === o.id,
        animatedHighlight: a.highlightEnabled,
        tab: o,
        "onUpdate:selected": (l) => r.setActive(o.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : H("", !0),
    c("div", {
      class: Ee(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Re(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const US = /* @__PURE__ */ Xe(MS, [["render", zS], ["__scopeId", "data-v-74190d2a"]]);
ji(Ty);
const BS = {
  name: "NcAppSidebar",
  components: {
    NcActions: wo,
    NcAppSidebarHeader: Ww,
    NcAppSidebarTabs: US,
    NcButton: Gn,
    NcLoadingIcon: Bp,
    NcEmptyContent: eS,
    IconArrowRight: yp,
    IconClose: _p,
    IconDockRight: oS,
    IconStar: pS,
    IconStarOutline: wS
  },
  directives: {
    Focus: Ew,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: Tw
  },
  inject: {
    ncContentSelector: {
      from: bp,
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
    const e = /* @__PURE__ */ Pe(null);
    return vn("NcAppSidebar:header:ref", e), {
      uid: hl(),
      isMobile: by(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: St("Change name"),
      closeTranslated: St("Close sidebar"),
      favoriteTranslated: St("Favorite"),
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
    isSlotPopulated: pu,
    t: St,
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
      this.focusTrap || (this.focusTrap = ou([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: as(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && ma.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, HS = ["aria-labelledby"], jS = { class: "app-sidebar-header__info" }, VS = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, GS = { class: "app-sidebar-header__name-container" }, KS = { class: "app-sidebar-header__mainname-container" }, WS = ["placeholder", "value"], qS = ["title"], YS = {
  key: 2,
  class: "app-sidebar-header__description"
};
function XS(e, t, n, i, a, r) {
  const s = Ue("IconDockRight"), o = Ue("NcButton"), l = Ue("NcLoadingIcon"), d = Ue("IconStar"), u = Ue("IconStarOutline"), h = Ue("NcAppSidebarHeader"), S = Ue("IconArrowRight"), E = Ue("NcActions"), N = Ue("IconClose"), A = Ue("NcAppSidebarTabs"), O = Ue("NcEmptyContent"), I = Bu("focus"), $ = Bu("click-outside");
  return _(), $e(Om, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Oe(() => [
      We(c("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = kt((...G) => r.onKeydownEsc && r.onKeydownEsc(...G), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (_(), $e(nh, {
          key: 0,
          to: r.ncContentSelector
        }, [
          be(o, Ut({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (G) => e.$emit("update:open", !0))
          }), {
            icon: Oe(() => [
              Re(e.$slots, "toggle-icon", {}, () => [
                be(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : H("", !0),
        c("header", {
          class: Ee(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (_(), $e(h, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Re(e.$slots, "info", { key: 0 }, () => [
            c("div", jS, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (_(), T("div", {
                key: 0,
                class: Ee(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: on({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...G) => r.onFigureClick && r.onFigureClick(...G)),
                onKeydown: t[2] || (t[2] = kt((...G) => r.onFigureClick && r.onFigureClick(...G), ["enter"]))
              }, [
                Re(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : H("", !0),
              c("div", {
                class: Ee(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (_(), T("div", VS, [
                  Re(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (_(), $e(o, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Ge(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Oe(() => [
                        n.starLoading ? (_(), $e(l, { key: 0 })) : a.isStarred ? (_(), $e(d, {
                          key: 1,
                          size: 20
                        })) : (_(), $e(u, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : H("", !0)
                  ], !0)
                ])) : H("", !0),
                c("div", GS, [
                  c("div", KS, [
                    We(be(h, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: Ge(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Ga, !n.nameEditable]
                    ]),
                    n.nameEditable ? We((_(), T("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Ge((...G) => r.onSubmitName && r.onSubmitName(...G), ["prevent"]))
                    }, [
                      We(c("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = kt(Ge((...G) => r.onDismissEditing && r.onDismissEditing(...G), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...G) => r.onNameInput && r.onNameInput(...G))
                      }, null, 40, WS), [
                        [I]
                      ]),
                      be(o, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Oe(() => [
                          be(S, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [$, () => r.onSubmitName()]
                    ]) : H("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (_(), $e(E, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: Oe(() => [
                        Re(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : H("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (_(), T("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Re(e.$slots, "subname", {}, () => [
                      Ne(p(n.subname), 1)
                    ], !0)
                  ], 8, qS)) : H("", !0)
                ])
              ], 2)
            ])
          ], !0),
          be(o, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Ge(r.closeSidebar, ["prevent"])
          }, {
            icon: Oe(() => [
              be(N, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (_(), T("div", YS, [
            Re(e.$slots, "description", {}, void 0, !0)
          ])) : H("", !0)
        ], 2),
        We(be(A, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Oe(() => [
            Re(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [Ga, !n.loading]
        ]),
        n.loading ? (_(), $e(O, { key: 1 }, {
          icon: Oe(() => [
            be(l, { size: 64 })
          ]),
          _: 1
        })) : H("", !0)
      ], 40, HS), [
        [Ga, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const ZS = /* @__PURE__ */ Xe(BS, [["render", XS], ["__scopeId", "data-v-c2c6820b"]]), JS = {
  name: "NcActionLink",
  mixins: [Sp],
  inject: {
    isInSemanticMenu: {
      from: lu,
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
}, QS = ["role"], eC = ["download", "href", "aria-label", "target", "title", "role"], tC = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, nC = { class: "action-link__name" }, iC = ["textContent"], aC = ["textContent"], rC = {
  key: 2,
  class: "action-link__text"
};
function sC(e, t, n, i, a, r) {
  return _(), T("li", {
    class: "action",
    role: r.isInSemanticMenu && "presentation"
  }, [
    c("a", {
      download: n.download,
      href: n.href,
      "aria-label": e.ariaLabel,
      target: n.target,
      title: n.title,
      class: "action-link focusable",
      rel: "nofollow noreferrer noopener",
      role: r.isInSemanticMenu && "menuitem",
      onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s))
    }, [
      Re(e.$slots, "icon", {}, () => [
        c("span", {
          "aria-hidden": "true",
          class: Ee(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: on({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (_(), T("span", tC, [
        c("strong", nC, p(e.name), 1),
        t[1] || (t[1] = c("br", null, null, -1)),
        c("span", {
          class: "action-link__longtext",
          textContent: p(e.text)
        }, null, 8, iC)
      ])) : e.isLongText ? (_(), T("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: p(e.text)
      }, null, 8, aC)) : (_(), T("span", rC, p(e.text), 1)),
      H("", !0)
    ], 8, eC)
  ], 8, QS);
}
const Ma = /* @__PURE__ */ Xe(JS, [["render", sC], ["__scopeId", "data-v-32f01b7a"]]);
ji(Ny);
const oC = `<!--
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
`, lC = `<!--
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
`, cC = { class: "vue-skip-actions__container" }, uC = { class: "vue-skip-actions__headline" }, dC = { class: "vue-skip-actions__buttons" }, fC = /* @__PURE__ */ xt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    vn(mp, o), vn(bp, "#content-vue"), vn("appName", q(() => t.appName));
    const n = gs(), i = /* @__PURE__ */ Pe(!1), a = /* @__PURE__ */ Pe(), r = q(() => a.value === "navigation" ? lC : oC);
    uh(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function s() {
      hi("toggle-navigation", { open: !0 }), an(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function o(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, d) => (_(), T("div", {
      id: "content-vue",
      class: Ee(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(Vi) }]])
    }, [
      (_(), $e(nh, { to: "#skip-actions" }, [
        c("div", cC, [
          c("div", uC, p(g(St)("Keyboard navigation help")), 1),
          c("div", dC, [
            We(be(Gn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Ge(s, ["prevent"]),
              onFocusin: d[0] || (d[0] = (u) => a.value = "navigation"),
              onMouseover: d[1] || (d[1] = (u) => a.value = "navigation")
            }, {
              default: Oe(() => [
                Ne(p(g(St)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Ga, i.value]
            ]),
            be(Gn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: d[2] || (d[2] = (u) => a.value = "content"),
              onMouseover: d[3] || (d[3] = (u) => a.value = "content")
            }, {
              default: Oe(() => [
                Ne(p(g(St)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          We(be(fl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Ga, !g(n)]
          ])
        ])
      ])),
      Re(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), hC = /* @__PURE__ */ Xe(fC, [["__scopeId", "data-v-d13dcb98"]]), pC = { class: "library-shelf-tree-node" }, vC = ["aria-expanded", "aria-label"], gC = ["href"], mC = { class: "library-shelf-summary-title" }, bC = { dir: "auto" }, yC = { class: "library-muted" }, _C = { dir: "auto" }, wC = {
  key: 1,
  role: "status",
  class: "library-muted"
}, SC = {
  key: 2,
  role: "status",
  class: "library-muted"
}, CC = {
  key: 3,
  class: "library-shelf-tree"
}, TC = ["disabled"], EC = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Pe(!1), i = /* @__PURE__ */ Pe(!1), a = /* @__PURE__ */ Pe(!1), r = /* @__PURE__ */ Pe(!1), s = /* @__PURE__ */ Pe([]), o = /* @__PURE__ */ Pe(!1), l = /* @__PURE__ */ Pe(0);
    async function d() {
      n.value = !n.value, !(!n.value || i.value || a.value) && await u();
    }
    async function u() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const h = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(l.value) }), S = await fetch(`${t.childrenUrl}?${h}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!S.ok) throw new Error("Shelf children request failed");
          const E = await S.json(), N = Array.isArray(E?.nodes) ? E.nodes : [];
          s.value.push(...N), o.value = E?.hasMore === !0, l.value = Number.isInteger(E?.nextOffset) ? E.nextOffset : s.value.length, i.value = !o.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (h, S) => {
      const E = Ue("ShelfTreeNode", !0);
      return _(), T("li", pC, [
        e.node.hasChildren ? (_(), T("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(n.value),
          "aria-label": n.value ? g(b)("library", "Collapse {folder}", { folder: e.node.label }) : g(b)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: d
        }, p(n.value ? "−" : "+"), 9, vC)) : H("", !0),
        c("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          c("span", mC, [
            c("strong", null, [
              c("bdi", bC, p(e.node.label), 1)
            ]),
            c("span", null, p(g(Un)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          c("small", yC, [
            c("bdi", _C, p(e.node.path), 1)
          ])
        ], 8, gC),
        a.value ? (_(), T("small", wC, p(g(b)("library", "Loading folders…")), 1)) : r.value ? (_(), T("small", SC, p(g(b)("library", "Could not load folders.")), 1)) : H("", !0),
        n.value && s.value.length ? (_(), T("ul", CC, [
          (_(!0), T(fe, null, Fe(s.value, (N) => (_(), $e(E, {
            key: N.id,
            node: N,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : H("", !0),
        n.value && o.value ? (_(), T("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: u
        }, p(g(b)("library", "Load more folders")), 9, TC)) : H("", !0)
      ]);
    };
  }
}, AC = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, kC = { id: "library-sidebar-filters-heading" }, OC = ["aria-label"], NC = ["name", "value"], xC = ["value"], LC = ["value"], RC = ["title"], IC = ["placeholder"], PC = { value: "" }, DC = ["value"], $C = { class: "library-publisher-filter" }, MC = { for: "library-publisher-search" }, FC = ["placeholder", "title"], zC = ["value"], UC = {
  type: "submit",
  class: "button secondary library-publisher-apply"
}, BC = { class: "library-publication-filter" }, HC = { for: "library-publication-search" }, jC = ["placeholder", "aria-expanded"], VC = ["value"], GC = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, KC = ["onClick"], WC = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, qC = { class: "library-year-filter" }, YC = { for: "library-year-search" }, XC = ["placeholder", "aria-expanded"], ZC = ["value"], JC = {
  key: 0,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, QC = ["onClick"], eT = {
  type: "submit",
  class: "button secondary library-year-apply"
}, tT = { class: "library-creator-filter" }, nT = { for: "library-creator-search" }, iT = ["placeholder", "title", "aria-expanded"], aT = ["value"], rT = {
  key: 0,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, sT = ["onClick"], oT = {
  type: "submit",
  class: "button secondary library-creator-apply"
}, lT = ["placeholder"], cT = { value: "" }, uT = ["value"], dT = { value: "" }, fT = ["value"], hT = { value: "" }, pT = ["value"], vT = { value: "" }, gT = ["value"], mT = { value: "" }, bT = ["value"], yT = { value: "" }, _T = ["value"], wT = { value: "" }, ST = { value: "1" }, CT = {
  type: "submit",
  class: "button primary"
}, TT = {
  href: "?",
  class: "button secondary"
}, ET = ["href"], AT = ["lang", "dir"], kT = ["aria-label"], OT = ["href", "aria-label", "onClick"], NT = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, xT = { class: "library-review-header" }, LT = { class: "library-muted library-catalogue-eyebrow" }, RT = { id: "library-review-heading" }, IT = ["aria-label"], PT = ["href", "aria-current", "onClick"], DT = ["aria-label"], $T = ["name", "value"], MT = {
  type: "submit",
  class: "button secondary"
}, FT = ["aria-busy"], zT = { key: 0 }, UT = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, BT = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, HT = { class: "library-metadata-review-workbench-copy" }, jT = { class: "library-muted library-catalogue-eyebrow" }, VT = ["title"], GT = {
  key: 0,
  class: "library-metadata-review-card"
}, KT = {
  class: "library-bidi-human",
  dir: "auto"
}, WT = { class: "library-muted" }, qT = {
  class: "library-bidi-machine",
  dir: "ltr"
}, YT = { class: "library-metadata-review-fields" }, XT = {
  class: "library-bidi-human",
  dir: "auto"
}, ZT = {
  class: "library-bidi-human",
  dir: "auto"
}, JT = {
  class: "library-bidi-human",
  dir: "auto"
}, QT = {
  class: "library-bidi-machine",
  dir: "ltr"
}, eE = {
  class: "library-bidi-human",
  dir: "auto"
}, tE = {
  class: "library-bidi-human",
  dir: "auto"
}, nE = ["action"], iE = ["value"], aE = ["value"], rE = {
  type: "submit",
  class: "button secondary"
}, sE = { class: "library-metadata-review-actions" }, oE = ["href"], lE = ["href"], cE = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, uE = ["href"], dE = ["aria-label"], fE = ["onClick"], hE = {
  class: "library-bidi-human",
  dir: "auto"
}, pE = {
  key: 0,
  class: "library-muted"
}, vE = {
  class: "library-bidi-human",
  dir: "auto"
}, gE = {
  key: 1,
  class: "library-scan-error"
}, mE = {
  class: "library-bidi-human",
  dir: "auto"
}, bE = ["onClick"], yE = ["href"], _E = ["aria-label"], wE = ["href"], SE = {
  key: 1,
  class: "library-muted"
}, CE = { key: 0 }, TE = ["href"], EE = {
  key: 3,
  class: "library-muted"
}, AE = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, kE = { class: "library-home-header" }, OE = { class: "library-muted library-catalogue-eyebrow" }, NE = { id: "library-home-heading" }, xE = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, LE = { id: "library-continue-heading" }, RE = { class: "library-muted" }, IE = ["href"], PE = {
  key: 0,
  class: "library-home-card-row"
}, DE = ["onClick"], $E = { class: "library-cover-frame" }, ME = ["src"], FE = { class: "library-cover-summary" }, zE = ["onClick"], UE = { dir: "auto" }, BE = {
  key: 0,
  class: "library-cover-creator"
}, HE = { dir: "auto" }, jE = ["href"], VE = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, GE = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, KE = { id: "library-recent-heading" }, WE = { class: "library-muted" }, qE = ["href"], YE = {
  key: 0,
  class: "library-home-card-row"
}, XE = ["onClick"], ZE = { class: "library-cover-frame" }, JE = ["src"], QE = { class: "library-cover-summary" }, eA = ["onClick"], tA = { dir: "auto" }, nA = {
  key: 0,
  class: "library-cover-creator"
}, iA = { dir: "auto" }, aA = ["href"], rA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, sA = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, oA = { id: "library-home-shelves-heading" }, lA = { class: "library-muted" }, cA = ["href"], uA = ["aria-label"], dA = ["href"], fA = { dir: "auto" }, hA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, pA = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, vA = { id: "library-home-attention-heading" }, gA = { class: "library-muted" }, mA = ["href"], bA = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, yA = { class: "library-home-header" }, _A = { class: "library-muted library-catalogue-eyebrow" }, wA = { id: "library-shelves-landing-heading" }, SA = { class: "library-muted" }, CA = ["aria-label"], TA = { class: "library-shelf-tree" }, EA = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, AA = { class: "library-muted" }, kA = { class: "library-empty-actions" }, OA = ["href"], NA = ["href"], xA = {
  key: 4,
  id: "library-catalogue",
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, LA = { class: "library-catalogue-header" }, RA = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, IA = { id: "library-catalogue-heading" }, PA = ["aria-label"], DA = ["aria-label"], $A = ["name", "value"], MA = { "data-library-control": "sort" }, FA = { value: "title" }, zA = { value: "recent" }, UA = { value: "publicationDate" }, BA = { value: "publication" }, HA = { value: "lastOpened" }, jA = { value: "format" }, VA = ["aria-label"], GA = ["aria-pressed"], KA = ["aria-pressed"], WA = ["aria-pressed"], qA = ["aria-pressed"], YA = {
  id: "library-collections",
  class: "library-saved-collections"
}, XA = ["title"], ZA = ["action", "title"], JA = ["value"], QA = ["value"], e2 = ["placeholder", "disabled"], t2 = ["disabled", "title"], n2 = ["aria-label"], i2 = ["href"], a2 = ["action"], r2 = ["value"], s2 = {
  type: "submit",
  class: "button tertiary"
}, o2 = ["aria-label"], l2 = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, c2 = ["title"], u2 = { class: "library-workspace-panel-purpose" }, d2 = { class: "library-workspace-scope-badge" }, f2 = { "aria-live": "polite" }, h2 = ["action"], p2 = ["value"], v2 = ["placeholder"], g2 = ["title"], m2 = ["action"], b2 = ["value"], y2 = ["placeholder"], _2 = ["title"], w2 = ["action"], S2 = ["value"], C2 = ["name", "value"], T2 = ["title"], E2 = ["action"], A2 = ["value"], k2 = ["name", "value"], O2 = { name: "bulkEditField" }, N2 = { value: "publicationType" }, x2 = { value: "subtitle" }, L2 = { value: "creators" }, R2 = { value: "publication" }, I2 = { value: "publicationDate" }, P2 = { value: "language" }, D2 = { value: "publisher" }, $2 = { value: "subjects" }, M2 = { value: "classifications" }, F2 = ["placeholder"], z2 = ["title"], U2 = ["action"], B2 = ["value"], H2 = ["name", "value"], j2 = ["title"], V2 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, G2 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, K2 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, W2 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, q2 = { class: "library-muted library-catalogue-eyebrow" }, Y2 = ["title"], X2 = ["aria-label"], Z2 = { key: 0 }, J2 = { key: 1 }, Q2 = { key: 2 }, ek = ["aria-label"], tk = { key: 0 }, nk = { key: 1 }, ik = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, ak = { class: "library-muted library-catalogue-eyebrow" }, rk = ["title"], sk = ["aria-label"], ok = ["href"], lk = {
  key: 0,
  class: "library-notice"
}, ck = { class: "library-publication-issue-label" }, uk = ["href"], dk = { class: "library-muted" }, fk = {
  key: 1,
  class: "library-publication-unknown-issues"
}, hk = ["title"], pk = ["href"], vk = { class: "library-catalogue-status-row" }, gk = { class: "library-muted library-filter-result-summary" }, mk = { key: 0 }, bk = { href: "?" }, yk = ["aria-label"], _k = { class: "library-pagination-range" }, wk = { key: 0 }, Sk = ["href"], Ck = {
  key: 1,
  class: "library-muted"
}, Tk = ["href"], Ek = {
  key: 3,
  class: "library-muted"
}, Ak = ["title"], kk = { class: "library-empty-actions" }, Ok = ["href"], Nk = { class: "library-muted" }, xk = ["title"], Lk = { class: "library-empty-actions" }, Rk = ["href"], Ik = ["title"], Pk = { class: "library-empty-actions" }, Dk = ["href"], $k = {
  href: "?",
  class: "button primary"
}, Mk = ["title"], Fk = { class: "library-empty-actions" }, zk = ["href"], Uk = {
  key: 5,
  class: "library-select-visible"
}, Bk = ["checked"], Hk = {
  key: 6,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, jk = { class: "library-item-selection" }, Vk = ["checked", "aria-label", "onChange"], Gk = { class: "library-catalogue-list-main" }, Kk = ["onClick"], Wk = {
  class: "library-bidi-human",
  dir: "auto"
}, qk = {
  key: 0,
  class: "library-muted"
}, Yk = {
  class: "library-bidi-human",
  dir: "auto"
}, Xk = { class: "library-catalogue-list-metadata" }, Zk = { key: 0 }, Jk = {
  class: "library-bidi-human",
  dir: "auto"
}, Qk = { key: 1 }, eO = { key: 2 }, tO = ["dir"], nO = { key: 3 }, iO = {
  class: "library-bidi-human",
  dir: "auto"
}, aO = { class: "library-catalogue-list-actions" }, rO = ["href"], sO = ["onClick"], oO = { class: "library-item-selection" }, lO = ["checked", "aria-label", "onChange"], cO = ["aria-labelledby", "aria-expanded", "onClick"], uO = ["id"], dO = { class: "library-cover-frame" }, fO = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, hO = ["src", "onLoad", "onError"], pO = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, vO = ["action", "onSubmit"], gO = ["value"], mO = ["value"], bO = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], yO = ["data-library-star-error"], _O = { class: "library-cover-summary" }, wO = { class: "library-cover-primary" }, SO = ["id"], CO = ["onClick"], TO = {
  class: "library-bidi-human",
  dir: "auto"
}, EO = {
  key: 0,
  class: "library-cover-creator"
}, AO = {
  class: "library-bidi-human",
  dir: "auto"
}, kO = {
  key: 1,
  class: "library-cover-badges"
}, OO = {
  key: 0,
  class: "library-cover-badge"
}, NO = {
  class: "library-bidi-machine",
  dir: "ltr"
}, xO = {
  key: 1,
  class: "library-cover-context"
}, LO = {
  class: "library-bidi-human",
  dir: "auto"
}, RO = { class: "library-cover-primary-actions" }, IO = ["href"], PO = ["aria-label"], DO = { class: "library-pagination-range" }, $O = { key: 0 }, MO = ["href"], FO = {
  key: 1,
  class: "library-muted"
}, zO = ["href"], UO = {
  key: 3,
  class: "library-muted"
}, BO = { class: "library-sidebar-content" }, HO = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, jO = ["role"], VO = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, GO = { class: "library-sidebar-publication-header" }, KO = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, WO = ["src"], qO = { class: "library-sidebar-publication-summary" }, YO = { class: "library-muted library-catalogue-eyebrow" }, XO = {
  class: "library-bidi-human",
  dir: "auto"
}, ZO = { key: 0 }, JO = {
  class: "library-bidi-machine",
  dir: "ltr"
}, QO = { class: "library-detail-drawer-actions" }, eN = ["href"], tN = ["aria-label"], nN = ["aria-current", "onClick"], iN = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, aN = { id: "library-sidebar-overview-heading" }, rN = {
  key: 0,
  class: "library-sidebar-description"
}, sN = {
  class: "library-bidi-human",
  dir: "auto"
}, oN = { class: "library-detail-drawer-facts" }, lN = { key: 0 }, cN = { key: 1 }, uN = { key: 2 }, dN = { key: 3 }, fN = { key: 4 }, hN = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, pN = { id: "library-sidebar-metadata-heading" }, vN = ["placeholder"], gN = ["onUpdate:modelValue", "aria-label", "placeholder"], mN = ["onUpdate:modelValue", "aria-label"], bN = ["onClick"], yN = { class: "library-muted" }, _N = {
  key: 0,
  role: "alert"
}, wN = {
  key: 1,
  role: "status"
}, SN = ["disabled"], CN = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, TN = { id: "library-sidebar-suggestions-heading" }, EN = { class: "library-muted" }, AN = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, kN = { id: "library-sidebar-activity-heading" }, ON = { class: "library-detail-drawer-facts" }, NN = { key: 0 }, xN = { key: 1 }, LN = { key: 2 }, RN = { dir: "ltr" }, IN = ["aria-label"], PN = ["disabled"], DN = ["disabled"], $N = 20, MN = "/apps/library", FN = 2147483647, zN = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], i = Object.freeze([
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
    function r(y, m) {
      return Object.prototype.hasOwnProperty.call(a, y) && String(m ?? "").trim() === a[y];
    }
    function s(y) {
      const m = new URLSearchParams(y);
      for (const f of Object.keys(a)) {
        const B = [...new Set([...m.keys()].filter((Le) => Le === f || Le.startsWith(`${f}[`)))], ce = B.reduce((Le, ze) => Le + m.getAll(ze).length, 0);
        if (ce > 1 || B.some((Le) => Le !== f)) {
          for (const Le of B) m.delete(Le);
          continue;
        }
        f !== "status" && ce === 1 && !r(f, m.get(f)) && m.delete(f);
      }
      return m;
    }
    function o(y) {
      return Object.keys(a).some((m) => y.getAll(m).length === 1 && r(m, y.get(m)));
    }
    function l(y) {
      return Object.fromEntries(Object.entries(y || {}).filter(([m, f]) => m === "status" || !Object.prototype.hasOwnProperty.call(a, m) || r(m, f)));
    }
    const d = /* @__PURE__ */ Pt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), u = /* @__PURE__ */ Pt((d.items || []).map((y) => ({ ...y }))), h = q(() => u), S = q(() => d.shelves || []), E = q(() => d.formats || []), N = q(() => d.publicationTypes?.length ? d.publicationTypes : n), A = q(() => d.publications || []), O = q(() => d.publicationIssueContext || null), I = q(() => d.scanStatuses || []), $ = q(() => d.workflowStatuses || []), G = q(() => d.subjects || []), F = q(() => d.classifications || []), Z = q(() => d.cataloguePagination || {
      page: 1,
      limit: 100,
      total: h.value.length,
      visible: h.value.length,
      from: h.value.length > 0 ? 1 : 0,
      to: h.value.length,
      previousUrl: "",
      nextUrl: ""
    }), D = /* @__PURE__ */ Pt({
      q: d.activeFilters?.q || "",
      view: d.activeFilters?.view || "compact",
      type: d.activeFilters?.type || "",
      publisher: d.activeFilters?.publisher || "",
      publication: d.activeFilters?.publication || "",
      year: d.activeFilters?.year || "",
      creator: d.activeFilters?.creator || "",
      format: d.activeFilters?.format || "",
      tag: d.activeFilters?.tag || "",
      shelf: d.activeFilters?.shelf || "",
      folder: d.activeFilters?.folder || "",
      status: d.activeFilters?.status || "",
      workflowStatus: d.activeFilters?.workflowStatus || "",
      subject: d.activeFilters?.subject || "",
      classification: d.activeFilters?.classification || "",
      scannerConflicts: d.activeFilters?.scannerConflicts || "",
      starred: d.activeFilters?.starred || "",
      needsMetadata: d.activeFilters?.needsMetadata || "",
      coverReview: d.activeFilters?.coverReview || "",
      noCreator: d.activeFilters?.noCreator || "",
      noPublication: d.activeFilters?.noPublication || "",
      noDate: d.activeFilters?.noDate || "",
      titleFromFilename: d.activeFilters?.titleFromFilename || "",
      noDescription: d.activeFilters?.noDescription || "",
      unsupportedContainer: d.activeFilters?.unsupportedContainer || "",
      weakMetadata: d.activeFilters?.weakMetadata || "",
      unreviewedImports: d.activeFilters?.unreviewedImports || "",
      sort: d.activeFilters?.sort || "title"
    });
    for (const y of Object.keys(a))
      y !== "status" && (r(y, D[y]) || (D[y] = ""));
    const J = /* @__PURE__ */ Pe(D.publication), de = /* @__PURE__ */ Pe(D.q), X = /* @__PURE__ */ Pe(!1), se = /* @__PURE__ */ Pe(null), ge = q(() => {
      const y = J.value.trim().toLocaleLowerCase();
      return (y !== "" && se.value !== null ? se.value : A.value).filter((f) => y === "" || f.toLocaleLowerCase().includes(y)).slice(0, $N);
    });
    ct(() => D.publication, (y) => {
      J.value = y || "";
    }), ct(() => D.q, (y) => {
      de.value = y || "";
    });
    let te = null, ae = null, P = 0;
    ct(J, (y) => {
      window.clearTimeout(te), ae?.abort(), ae = null, se.value = null;
      const m = String(y || "").trim();
      if (m === "") return;
      const f = ++P;
      te = window.setTimeout(() => {
        tv(m, f);
      }, 200);
    });
    const M = /* @__PURE__ */ Pe(D.publisher);
    ct(() => D.publisher, (y) => {
      M.value = y || "";
    });
    const Y = /* @__PURE__ */ Pe(D.creator), re = /* @__PURE__ */ Pe(!1), ie = /* @__PURE__ */ Pe(null), he = q(() => ie.value || []);
    ct(() => D.creator, (y) => {
      Y.value = y || "";
    });
    let pe = null, Ce = null, ye = 0;
    ct(Y, (y) => {
      window.clearTimeout(pe), Ce?.abort(), Ce = null, ie.value = null;
      const m = String(y || "").trim();
      if (m === "") return;
      const f = ++ye;
      pe = window.setTimeout(() => {
        Qp(m, f);
      }, 200);
    });
    const Be = /* @__PURE__ */ Pe(D.year), Te = /* @__PURE__ */ Pe(!1), it = /* @__PURE__ */ Pe(null), ot = q(() => it.value || []);
    ct(() => D.year, (y) => {
      Be.value = y || "";
    });
    let ut = null, yt = null, Je = 0;
    ct(Be, (y) => {
      window.clearTimeout(ut), yt?.abort(), yt = null, it.value = null;
      const m = String(y || "").trim();
      if (m === "") return;
      const f = ++Je;
      ut = window.setTimeout(() => {
        ev(m, f);
      }, 200);
    });
    const wn = Object.fromEntries(Object.keys(D).map((y) => [y, y === "sort" ? "title" : y === "view" ? "compact" : ""])), U = window.location.pathname.indexOf(MN), v = U >= 0 ? window.location.pathname.slice(0, U) : "", C = {
      catalogue: `${v}/apps/library/`,
      review: `${v}/apps/library/?scannerConflicts=1`,
      settings: `${v}/settings/user/library`
    };
    function k(y, m) {
      if (typeof y != "string" || y === "") return m;
      try {
        const f = v ? `${v}/` : "/";
        let B = y;
        for (let ce = 0; ce < 5; ce += 1) {
          if (!B.startsWith("/") || B.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(B)) return m;
          const Le = new URL(B, window.location.origin);
          if (Le.origin !== window.location.origin || !Le.pathname.startsWith(f)) return m;
          const ze = B.split(/[?#]/, 1)[0];
          for (const en of ze.split("/")) {
            let Ai = en;
            for (let Ra = 0; Ra < 5; Ra += 1) {
              const Mn = decodeURIComponent(Ai);
              if (/[\\/\u0000-\u001f\u007f]/.test(Mn) || Mn === "." || Mn === "..") return m;
              if (Mn === Ai) break;
              if (Ai = Mn, Ra === 4) return m;
            }
          }
          const ht = decodeURI(B);
          if (ht === B) return y;
          B = ht;
        }
        return m;
      } catch {
        return m;
      }
    }
    const L = q(() => k(d.settingsUrl, C.settings)), x = q(() => k(d.catalogueRootUrl, C.catalogue)), z = q(() => k(d.homeUrl, `${C.catalogue}?home=1`)), K = q(() => k(d.shelvesUrl, `${C.catalogue}?shelves=1`)), V = q(() => k(d.reviewUrl || d.scannerConflictReviewUrl, C.review)), Q = q(() => Object.entries(a).some(([y, m]) => D[y] === m)), j = q(() => i.reduce((y, m) => y + Number(ku.value[m.countKey] || 0), 0)), ve = q(() => d.surface === "home"), oe = q(() => d.surface === "shelves"), me = q(() => !ve.value && !oe.value && !Q.value && !D.starred && D.sort !== "lastOpened" && !D.shelf), Ae = q(() => [
      { key: "home", name: b("library", "Home"), href: z.value, active: ve.value },
      { key: "all", name: b("library", "All publications"), href: x.value, active: me.value },
      { key: "starred", name: b("library", "Starred"), href: `${x.value}?starred=1`, active: D.starred === "1" },
      { key: "continue", name: b("library", "Continue reading"), href: `${x.value}?sort=lastOpened`, active: D.sort === "lastOpened" },
      { key: "shelves", name: b("library", "Shelves"), href: K.value, active: oe.value || !!D.shelf },
      { key: "collections", name: b("library", "Collections"), href: `${x.value}#library-collections`, active: !1 }
    ]), Se = q(() => d.requestToken || ""), Me = q(() => d.catalogueEndpointUrl || "/apps/library/catalogue"), De = q(() => d.shelfChildrenUrl || "/apps/library/shelves/children"), Qe = q(() => d.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), rt = q(() => d.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), Tt = q(() => d.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Lt = q(() => d.itemSidebarUrlTemplate || `${v}/apps/library/items/__ITEM_ID__/sidebar`), Wt = q(() => d.batchTagUrl || "/apps/library/bulk/tags"), qn = q(() => d.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), dt = q(() => d.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Bt = q(() => d.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Gi = q(() => d.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), _i = q(() => d.scannerConflictReviewUrl || "?scannerConflicts=1");
    d.importHealthSummary, d.importHealthSummary && Object.keys(d.importHealthSummary).length > 0;
    const Ki = q(() => d.discoveryPage === "publication"), Wi = q(() => d.discoveryPage === "year"), In = q(() => d.discoveryPage === "creator"), Pn = q(() => Ki.value || Wi.value || In.value), Za = q(() => d.discoveryTitle || D.publication || D.year || D.creator || ""), ms = q(() => Pn.value ? Za.value : b("library", "Library")), Ja = q(() => In.value ? b("library", "Creator") : Wi.value ? b("library", "Publication year") : b("library", "Publication / series")), Qa = q(() => Number(d.rootCount || 0)), bs = q(() => Number(d.enabledRootCount || 0)), wi = q(() => Qa.value === 0), Si = q(() => Qa.value > 0 && bs.value === 0), Jt = q(() => Ea.value.length > 0), Yn = {
      q: "Search",
      sort: "Sort",
      view: "View mode",
      type: "Type",
      publisher: "Publisher",
      publication: "Series / periodical",
      year: "Publication year",
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
      needsMetadata: "Needs details",
      coverReview: "Cover review",
      noCreator: "No creator",
      noPublication: "No publication/series",
      noDate: "Missing date",
      titleFromFilename: "Filename-derived title",
      noDescription: "No description",
      unsupportedContainer: "Unsupported archive/container",
      weakMetadata: "Needs details",
      unreviewedImports: "Unreviewed imports"
    }, Sa = q(() => {
      if (typeof window > "u") return "";
      const y = new URLSearchParams(window.location.search);
      if (y.get("batchMetadataApplyResult") !== "1") return "";
      const m = y.get("batchMetadataField") || "field", f = y.get("batchMetadataApplied") || "0", B = y.get("batchMetadataUnchanged") || "0", ce = y.get("batchMetadataSkipped") || "0";
      return b("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: m, unchanged: B, skipped: ce });
    }), Ca = q(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? b("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), ys = q(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? b("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), er = q(() => d.savedCollections || []), tr = q(() => d.savedCollectionSaveUrl || "/apps/library/collections"), _s = q(() => d.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Ta = ["compact", "gallery", "list", "shelf"], qt = q(() => Ta.includes(D.view) ? D.view : "compact"), qi = q(() => ({
      "library-cover-gallery--compact": qt.value === "compact",
      "library-cover-gallery--gallery": qt.value === "gallery",
      "library-cover-gallery--shelf": qt.value === "shelf"
    })), Ea = q(() => Object.entries(Yn).map(([y, m]) => ({ key: y, label: b("library", m), value: D[y] || "" })).filter((y) => String(y.value).trim() !== "" && !(y.key === "sort" && y.value === "title") && !(y.key === "view" && y.value === "compact"))), bl = /* @__PURE__ */ new Set([
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
      "status",
      "workflowStatus",
      "subject",
      "classification",
      "scannerConflicts"
    ]), st = q(() => Object.entries(l(D)).filter(([y, m]) => !bl.has(y) && String(m || "").trim() !== "").map(([y, m]) => ({ key: y, value: m }))), Ci = q(() => Object.entries(D).filter(([y, m]) => !["q", "sort", "starred"].includes(y) && String(m || "").trim() !== "").map(([y, m]) => ({ key: y, value: m }))), Aa = q(() => Object.entries(l(D)).filter(([y, m]) => String(m || "").trim() !== "").map(([y, m]) => ({ key: y, value: m }))), ws = q(() => Aa.value.filter(({ key: y, value: m }) => y !== "q" && !(y === "sort" && m === "title"))), Yi = /* @__PURE__ */ Pt({}), Xi = q(() => d.homeRows || { continueReading: [], recentlyAdded: [] }), nr = q(() => d.homeShelves || []), Ss = q(() => d.shelfTree || []), ir = q(() => d.needsAttention || { count: 0, url: `${x.value}?needsMetadata=1` }), Qt = /* @__PURE__ */ Pe([]), ka = q(() => new Set(Qt.value));
    function Sn(y, m) {
      const f = new Set(Qt.value);
      m ? f.add(Number(y)) : f.delete(Number(y)), Qt.value = [...f];
    }
    function Cs(y) {
      Qt.value = y.currentTarget.checked ? h.value.map((m) => Number(m.id)) : [];
    }
    function Oa() {
      const y = new Set(h.value.map((m) => Number(m.id)));
      Qt.value = Qt.value.filter((m) => y.has(m));
    }
    function Xn(y) {
      const m = y.target;
      if (m instanceof HTMLFormElement) {
        m.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of Qt.value) {
          const B = document.createElement("input");
          B.type = "hidden", B.name = "itemIds[]", B.value = String(f), B.dataset.librarySelectedId = "1", m.appendChild(B);
        }
      }
    }
    const ke = /* @__PURE__ */ Pe(null), ln = /* @__PURE__ */ Pe(null), _t = /* @__PURE__ */ Pt({ loading: !1, error: "", missing: !1 }), Zn = /* @__PURE__ */ Pe("overview"), Yt = /* @__PURE__ */ Pt({ saving: !1, saved: !1, error: "" }), mt = /* @__PURE__ */ Pt({ title: "", publicationDate: "", identifiers: [] }), Zi = /* @__PURE__ */ Pe(null), Cn = /* @__PURE__ */ Pe(null), cn = /* @__PURE__ */ Pe(!1);
    let Dn = null, Ht = null, jt = null, ar = !1, $n = null, rr = 0;
    const Tn = q(() => ln.value !== null), Ti = q(() => ke.value ? h.value.findIndex((y) => y.id === ke.value.id) : -1), Ji = q(() => Ti.value > 0 ? h.value[Ti.value - 1] : null), Qi = q(() => Ti.value >= 0 && Ti.value < h.value.length - 1 ? h.value[Ti.value + 1] : null), yl = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Ts = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Na(y) {
      const m = String(y ?? "").trim(), f = m.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : m;
    }
    function Es(y) {
      return { ...y, publicationDate: Na(y?.publicationDate) };
    }
    function sr(y) {
      mt.title = String(y?.title || ""), mt.publicationDate = Na(y?.publicationDate), mt.identifiers = Array.isArray(y?.identifiers) ? y.identifiers.map((m) => ({ scheme: String(m?.scheme || ""), displayValue: String(m?.displayValue || m?.value || "") })) : [], Object.assign(Yt, { saving: !1, saved: !1, error: "" });
    }
    function xa() {
      mt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function or(y) {
      mt.identifiers.splice(y, 1);
    }
    async function ee() {
      const y = ke.value;
      if (!y?.updateUrl || Yt.saving) return;
      Object.assign(Yt, { saving: !0, saved: !1, error: "" });
      const m = new FormData();
      m.set("requesttoken", Se.value), m.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const B = y[f];
        m.set(f, Array.isArray(B) ? B.join(", ") : String(B ?? ""));
      }
      m.set("title", mt.title), m.set("publicationDate", Na(mt.publicationDate)), mt.identifiers.forEach((f, B) => {
        m.set(`identifiers[${B}][scheme]`, f.scheme), m.set(`identifiers[${B}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(y.updateUrl, { method: "POST", body: m, credentials: "same-origin", headers: { Accept: "application/json" } }), B = await f.json().catch(() => ({}));
        if (!f.ok || B.saved !== !0) throw new Error(B.error || b("library", "Metadata could not be saved."));
        y.title = mt.title.trim(), y.publicationDate = Na(mt.publicationDate), y.identifiers = mt.identifiers.filter((Le) => Le.scheme.trim() || Le.displayValue.trim()).map((Le) => ({ ...Le }));
        const ce = h.value.find((Le) => Number(Le.id) === Number(y.id));
        ce && (ce.title = y.title, ce.publicationDate = y.publicationDate), Yt.saved = !0;
      } catch (f) {
        Yt.error = f?.message || b("library", "Metadata could not be saved.");
      } finally {
        Yt.saving = !1;
      }
    }
    const w = q(() => {
      const y = r("scannerConflicts", D.scannerConflicts) || r("weakMetadata", D.weakMetadata), m = y ? h.value.find((f) => le(f).length > 0) : null;
      return {
        enabled: y,
        item: m,
        fields: m ? le(m) : [],
        reviewNextUrl: _i.value,
        skipUrl: Z.value.nextUrl || _i.value
      };
    }), R = q(() => i.map((y) => ({
      ...y,
      label: b("library", y.label),
      href: `${x.value}?${encodeURIComponent(y.key)}=${encodeURIComponent(y.value)}`,
      active: String(D[y.key] || "") === y.value
    })));
    function W(y) {
      return Array.isArray(y) ? JSON.stringify(y) : y == null ? "" : String(y);
    }
    function le(y) {
      const m = y.fieldValues || {}, f = y.fieldSources || {};
      return yl.filter((B) => Object.prototype.hasOwnProperty.call(m, B)).map((B) => {
        const ce = W(y[B]), Le = W(m[B]), ze = W(f[B] || y.metadataSource || "scanner"), ht = ze.includes("filename") || ze.includes("path") ? Le : "", en = ze.includes("sidecar") ? Le : "";
        return { field: B, currentValue: ce, scannerCandidate: Le, pathTemplateCandidate: ht, sidecarValue: en, sourceProvenance: ze, differs: ce !== Le };
      }).filter((B) => B.differs);
    }
    let ue = 0, _e = null;
    function Ze() {
      const y = new URLSearchParams(window.location.search).getAll("item");
      if (y.length !== 1 || !/^[1-9][0-9]*$/.test(y[0])) return null;
      const m = Number(y[0]);
      return Number.isSafeInteger(m) && m <= FN ? m : null;
    }
    function et(y, m = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), y !== null && f.searchParams.set("item", String(y)), history[`${m}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function ft(y, { historyMode: m = "push", seed: f = null } = {}) {
      _e?.abort();
      const B = ++ue, ce = new AbortController();
      _e = ce, ln.value = y, Zn.value = "overview", ke.value = f && Number(f.id) === y ? Es(f) : null, ke.value && sr(ke.value), Object.assign(_t, { loading: !0, error: "", missing: !1 }), m !== "none" && et(y, m);
      try {
        const Le = Lt.value.replace("__ITEM_ID__", encodeURIComponent(String(y))), ze = await fetch(Le, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ce.signal });
        if (B !== ue) return;
        if (!ze.ok) {
          ke.value = null, _t.missing = ze.status === 404, _t.error = ze.status === 404 ? b("library", "This publication is unavailable or you do not have access.") : b("library", "Could not load publication details. Try again.");
          return;
        }
        const ht = await ze.json();
        if (B !== ue) return;
        if (typeof ht?.item?.id != "number" || !Number.isSafeInteger(ht.item.id) || ht.item.id !== y) {
          ke.value = null, _t.missing = !1, _t.error = b("library", "Could not load publication details. Try again.");
          return;
        }
        ke.value = Es(ht.item), sr(ke.value), await an();
      } catch (Le) {
        B === ue && Le?.name !== "AbortError" && (ke.value = null, _t.missing = !1, _t.error = b("library", "Could not load publication details. Try again."));
      } finally {
        B === ue && (_t.loading = !1, _e = null);
      }
    }
    function at(y, m) {
      _l(), Dn = m?.currentTarget instanceof HTMLElement ? m.currentTarget : null, ft(Number(y.id), { seed: y });
    }
    function Ei({ historyMode: y = "push", restoreFocus: m = !0 } = {}) {
      jt = m ? Dn : null, Dn = null, _e?.abort(), _e = null, ue += 1, ln.value = null, ke.value = null, Zn.value = "overview", Object.assign(_t, { loading: !1, error: "", missing: !1 }), y !== "none" && et(null, y);
    }
    function wt() {
      cn.value ? (Cn.value?.$refs?.sidebar || Cn.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : Zi.value?.focus();
    }
    function Zp() {
      const y = jt;
      if (jt = null, _l(), ar || !y?.isConnected) return;
      const m = rr;
      $n = window.requestAnimationFrame(() => {
        $n = null, !(m !== rr || ar || Tn.value || !y.isConnected) && y.focus();
      });
    }
    function _l() {
      rr += 1, $n !== null && (window.cancelAnimationFrame($n), $n = null);
    }
    function lr(y = Ht) {
      cn.value = !!y?.matches, Tn.value && an(wt);
    }
    function As(y) {
      y && ft(Number(y.id), { seed: y });
    }
    const cr = /* @__PURE__ */ Pe(null);
    let En = 0, La = null;
    const An = /* @__PURE__ */ Pt({ loading: !1, error: "" });
    function Jp(y) {
      const m = s(new FormData(y));
      m.delete("publicationSearch"), m.delete("creatorSearch"), m.delete("publisherSearch"), m.delete("yearSearch");
      for (const f of Array.from(m.keys()))
        String(m.get(f) || "").trim() === "" && m.delete(f);
      return m.delete("page"), m.get("view") === "compact" && m.delete("view"), m;
    }
    async function Su(y, m, f) {
      const B = new URLSearchParams();
      for (const [ze, ht] of Object.entries(D)) {
        const en = String(ht || "").trim();
        ze !== y && en !== "" && !(ze === "sort" && en === "title") && !(ze === "view" && en === "compact") && B.set(ze, en);
      }
      B.set(`${y}Search`, m);
      const ce = new AbortController();
      y === "creator" ? Ce = ce : yt = ce;
      const Le = y === "creator" ? rt.value : Tt.value;
      try {
        const ze = await fetch(`${Le}?${B}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ce.signal });
        if (!ze.ok) throw new Error(`${y} suggestions request failed: ${ze.status}`);
        const ht = await ze.json(), en = y === "creator" ? ye : Je, Ai = y === "creator" ? Y.value : Be.value;
        f === en && Ai.trim() === m && (y === "creator" ? ie.value = Array.isArray(ht.creators) ? ht.creators : [] : it.value = Array.isArray(ht.years) ? ht.years : []);
      } catch (ze) {
        ze?.name !== "AbortError" && (y === "creator" && f === ye && (ie.value = null), y === "year" && f === Je && (it.value = null));
      }
    }
    function Qp(y, m) {
      return Su("creator", y, m);
    }
    function ev(y, m) {
      return Su("year", y, m);
    }
    async function tv(y, m) {
      const f = new URLSearchParams();
      for (const [ce, Le] of Object.entries(D)) {
        const ze = String(Le || "").trim();
        ce !== "publication" && ze !== "" && !(ce === "sort" && ze === "title") && !(ce === "view" && ze === "compact") && f.set(ce, ze);
      }
      f.set("publicationSearch", y);
      const B = new AbortController();
      ae = B;
      try {
        const ce = await fetch(`${Qe.value}?${f}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: B.signal
        });
        if (!ce.ok) throw new Error(`Publication suggestions request failed: ${ce.status}`);
        const Le = await ce.json();
        m === P && J.value.trim() === y && (se.value = Array.isArray(Le.publications) ? Le.publications : []);
      } catch (ce) {
        ce?.name !== "AbortError" && m === P && (se.value = null);
      } finally {
        m === P && (ae = null);
      }
    }
    function nv(y) {
      u.splice(0, u.length, ...(y.items || []).map((m) => ({ ...m }))), Oa();
      for (const m of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "subjects", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "creatorSuggestionsUrl", "yearSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(y, m) && (d[m] = y[m]);
      Object.assign(D, wn, y.activeFilters || {});
    }
    async function un(y, m = null) {
      const f = y?.currentTarget?.tagName === "FORM" ? y.currentTarget : y?.currentTarget?.form;
      if (!f && !m?.params) return;
      const B = s(m?.params ?? Jp(f));
      if (ve.value || oe.value) {
        ur(B, x.value);
        return;
      }
      const ce = B.toString(), Le = ce ? `?${ce}` : "", ze = m?.generation ?? ++En, ht = o(B), en = m?.historyMode ?? (ht ? "push" : "replace"), Ai = m?.historyTraversal === !0;
      if (ze !== En) return;
      m === null && La?.abort();
      const Ra = new AbortController();
      La = Ra, An.loading = !0, An.error = "";
      try {
        const Mn = await fetch(Me.value + Le, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ra.signal
        });
        if (ze !== En) return;
        if (!Mn.ok) {
          Ai ? ur(B) : ht ? An.error = b("library", "Could not load this review queue. Try again.") : ur(B);
          return;
        }
        const Sv = await Mn.json();
        if (ze !== En) return;
        nv(Sv), en !== "none" && (history[en === "push" ? "pushState" : "replaceState"]({}, "", ce ? `?${ce}` : window.location.pathname), Tn.value && Ei({ historyMode: "none" }));
      } catch (Mn) {
        ze === En && Mn?.name !== "AbortError" && (Ai ? ur(B) : ht ? An.error = b("library", "Could not load this review queue. Try again.") : ur(B));
      } finally {
        ze === En && (La = null, An.loading = !1);
      }
    }
    function Cu() {
      La?.abort();
      const y = new URLSearchParams(window.location.search), m = Ze();
      y.has("item") && m === null && (y.delete("item"), history.replaceState({}, "", `${window.location.pathname}${y.toString() ? `?${y}` : ""}${window.location.hash}`)), m === null ? Ei({ historyMode: "none" }) : ft(m, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === m) || null }), y.delete("item"), un(null, {
        params: s(y),
        generation: ++En,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function ur(y, m = window.location.pathname) {
      const f = document.createElement("form");
      f.method = "get", f.action = m, f.hidden = !0;
      for (const [B, ce] of y.entries()) {
        const Le = document.createElement("input");
        Le.type = "hidden", Le.name = B, Le.value = ce, f.appendChild(Le);
      }
      document.body.appendChild(f), f.submit(), f.remove();
    }
    function Jn(y, m = null, f = null) {
      if (m === null) {
        un(y);
        return;
      }
      un({ currentTarget: y }, { params: m, generation: f });
    }
    async function iv(y, m = J.value) {
      D.publication = String(m || "").trim(), J.value = D.publication, X.value = !1, await an(), un({ currentTarget: y });
    }
    function av(y, m) {
      iv(m.currentTarget.form, y);
    }
    async function rv(y) {
      D.q = String(de.value || "").trim(), D.publication = String(J.value || "").trim(), D.publisher = String(M.value || "").trim(), D.creator = String(Y.value || "").trim(), D.year = String(Be.value || "").trim(), X.value = !1, re.value = !1, Te.value = !1, await an(), un({ currentTarget: y });
    }
    async function Tu(y, m, f) {
      D[m] = String(f || "").trim(), m === "creator" ? (Y.value = D.creator, re.value = !1) : (Be.value = D.year, Te.value = !1), await an(), un({ currentTarget: y });
    }
    function sv(y) {
      rv(y.currentTarget);
    }
    function ov(y, m) {
      Tu(m.currentTarget.form, "creator", y);
    }
    function lv(y, m) {
      Tu(m.currentTarget.form, "year", y);
    }
    function Eu(y) {
      const m = new URLSearchParams();
      for (const [f, B] of Object.entries(D)) {
        const ce = String(B || "").trim();
        ce !== "" && f !== y && !(f === "sort" && ce === "title") && !(f === "view" && ce === "compact") && m.set(f, ce);
      }
      return m;
    }
    function Au(y) {
      const m = Eu(y).toString();
      return ve.value || oe.value ? `${x.value}${m ? `?${m}` : ""}` : m ? `?${m}` : "?";
    }
    function cv(y) {
      const m = Eu(y);
      D[y] = y === "sort" ? "title" : y === "view" ? "compact" : "", un(null, {
        params: m,
        generation: ++En
      });
    }
    function uv(y) {
      const m = new URL(y.href, window.location.origin).searchParams;
      un(null, {
        params: m,
        generation: ++En
      });
    }
    function dv() {
      return Au("q");
    }
    const ku = q(() => d.smartViewCounts || {}), Ou = q(() => {
      const y = {};
      for (const [m, f] of Object.entries(D)) {
        const B = String(f || "").trim();
        B !== "" && !(m === "sort" && B === "title") && (y[m] = B);
      }
      return y;
    }), fv = q(() => JSON.stringify(Ou.value)), wl = q(() => Object.keys(Ou.value).length > 0);
    function ks(y) {
      if (!Ta.includes(y)) return;
      D.view = y;
      const m = new URLSearchParams();
      for (const [f, B] of Object.entries(l(D))) {
        const ce = String(B || "").trim();
        ce !== "" && !(f === "sort" && ce === "title") && !(f === "view" && ce === "compact") && m.set(f, ce);
      }
      m.delete("page"), un(null, {
        params: m,
        generation: ++En
      });
    }
    function hv(y) {
      const m = s(window.location.search);
      for (const B of Object.keys(Yn))
        m.delete(B);
      m.delete("page");
      for (const [B, ce] of Object.entries(y))
        String(ce || "").trim() !== "" && m.set(B, String(ce));
      const f = m.toString();
      return f ? `?${f}` : "?";
    }
    function pv(y) {
      return hv(y || {});
    }
    function vv(y) {
      return _s.value.replace("__COLLECTION_ID__", encodeURIComponent(String(y || "0")));
    }
    function dr(y) {
      return String(y || "").toUpperCase();
    }
    function fr(y) {
      return Yi[y.id] || "loading";
    }
    function gv(y) {
      Yi[y.id] = "loaded";
    }
    function mv(y) {
      Yi[y.id] = "error";
    }
    function Sl(y) {
      const m = String(y?.publication || "").trim(), f = String(y?.publicationDate || "").trim();
      return m && f ? `${m} · ${f}` : m || f ? m || f : [y?.publicationType, dr(y?.extension)].filter(Boolean).join(" · ");
    }
    function bv(y) {
      const m = String(y?.tagName || "").toLowerCase();
      return y?.isContentEditable || ["input", "select", "textarea", "button"].includes(m);
    }
    function yv(y) {
      y.key !== "/" || y.metaKey || y.ctrlKey || y.altKey || y.shiftKey || bv(y.target) || (y.preventDefault(), cr.value?.focus(), cr.value?.select?.());
    }
    async function _v(y) {
      y.key !== "Escape" || document.activeElement !== cr.value || D.q === "" || (y.preventDefault(), de.value = "", D.q = "", await an(), Jn({ currentTarget: cr.value }));
    }
    function wv(y) {
      if (!Tn.value || y.metaKey || y.ctrlKey || y.altKey)
        return !1;
      if (y.key === "Escape")
        return y.preventDefault(), Ei(), !0;
      if (y.key === "Tab" && cn.value) {
        if (Cn.value?.focusTrap) return !1;
        const m = Cn.value?.$refs?.sidebar || Cn.value?.$el || Cn.value, f = [...m?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Le) => !Le.hidden && Le.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const B = f[0], ce = f[f.length - 1];
        if (y.shiftKey && (document.activeElement === B || !m.contains(document.activeElement)))
          return y.preventDefault(), ce.focus(), !0;
        if (!y.shiftKey && (document.activeElement === ce || !m.contains(document.activeElement)))
          return y.preventDefault(), B.focus(), !0;
      }
      return y.key === "ArrowLeft" && Ji.value ? (y.preventDefault(), As(Ji.value), !0) : y.key === "ArrowRight" && Qi.value ? (y.preventDefault(), As(Qi.value), !0) : !1;
    }
    function Nu(y) {
      wv(y) || (yv(y), _v(y));
    }
    Hi(() => {
      window.addEventListener("keydown", Nu), window.addEventListener("popstate", Cu), Ht = window.matchMedia?.("(max-width: 1023px)") || null, lr(), Ht?.addEventListener ? Ht.addEventListener("change", lr) : Ht?.addListener?.(lr);
      const y = new URLSearchParams(window.location.search), m = Ze();
      y.has("item") && m === null ? (y.delete("item"), history.replaceState({}, "", `${window.location.pathname}${y.toString() ? `?${y}` : ""}${window.location.hash}`)) : m !== null && ft(m, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === m) || null });
    }), Xa(() => {
      ar = !0, _l(), window.removeEventListener("keydown", Nu), window.removeEventListener("popstate", Cu), window.clearTimeout(te), window.clearTimeout(pe), window.clearTimeout(ut), ae?.abort(), Ce?.abort(), yt?.abort(), En += 1, La?.abort(), La = null, ue += 1, _e?.abort(), _e = null, Ht?.removeEventListener ? Ht.removeEventListener("change", lr) : Ht?.removeListener?.(lr), Ht = null, jt = null;
    });
    const hr = /* @__PURE__ */ Pt({}), pr = /* @__PURE__ */ Pt({});
    async function xu(y, m) {
      const f = m?.currentTarget?.closest?.("form") || m?.currentTarget;
      if (!f || !y?.starUrl || hr[y.id]) return;
      const B = !!y.starred;
      hr[y.id] = !0, pr[y.id] = "", y.starred = !B;
      try {
        (await fetch(y.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (y.starred = B, pr[y.id] = b("library", "Could not update star. Try again."));
      } catch {
        y.starred = B, pr[y.id] = b("library", "Could not update star. Try again.");
      } finally {
        hr[y.id] = !1;
      }
    }
    return (y, m) => (_(), $e(g(hC), { "app-name": "library" }, {
      default: Oe(() => [
        be(g(q_), {
          "aria-label": g(b)("library", "Library navigation")
        }, {
          list: Oe(() => [
            be(g(gp), null, {
              default: Oe(() => [
                (_(!0), T(fe, null, Fe(Ae.value, (f) => (_(), $e(g(bf), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                be(g(bf), {
                  active: Q.value,
                  href: V.value,
                  name: j.value > 0 ? `${g(b)("library", "Review")} (${j.value})` : g(b)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Oe(() => [
            c("section", AC, [
              c("h2", kC, p(g(b)("library", "Filters")), 1),
              c("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": g(b)("library", "Catalogue search and filters"),
                onSubmit: Ge(sv, ["prevent"])
              }, [
                (_(!0), T(fe, null, Fe(st.value, (f) => (_(), T("input", {
                  key: `sidebar-${f.key}`,
                  type: "hidden",
                  name: f.key,
                  value: f.value
                }, null, 8, NC))), 128)),
                D.sort && D.sort !== "title" ? (_(), T("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: D.sort
                }, null, 8, xC)) : H("", !0),
                D.view && D.view !== "compact" ? (_(), T("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: D.view
                }, null, 8, LC)) : H("", !0),
                c("label", {
                  class: "library-quick-filter-search",
                  title: g(b)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                }, [
                  c("span", null, [
                    Ne(p(g(b)("library", "Search")) + " ", 1),
                    m[42] || (m[42] = c("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  We(c("input", {
                    ref_key: "quickSearchInput",
                    ref: cr,
                    "onUpdate:modelValue": m[0] || (m[0] = (f) => de.value = f),
                    "data-library-quick-search": "",
                    type: "search",
                    name: "q",
                    placeholder: g(b)("library", "Title, creator, description, filename or folder")
                  }, null, 8, IC), [
                    [hn, de.value]
                  ])
                ], 8, RC),
                c("label", null, [
                  Ne(p(g(b)("library", "Type")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": m[1] || (m[1] = (f) => D.type = f),
                    name: "type",
                    onChange: m[2] || (m[2] = (f) => Jn(f))
                  }, [
                    c("option", PC, p(g(b)("library", "All types")), 1),
                    (_(!0), T(fe, null, Fe(N.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, DC))), 128))
                  ], 544), [
                    [ti, D.type]
                  ])
                ]),
                c("div", $C, [
                  c("label", MC, p(g(b)("library", "Publisher")), 1),
                  We(c("input", {
                    id: "library-publisher-search",
                    "onUpdate:modelValue": m[3] || (m[3] = (f) => M.value = f),
                    type: "search",
                    name: "publisherSearch",
                    autocomplete: "off",
                    placeholder: g(b)("library", "Search publishers"),
                    title: g(b)("library", "Exact publisher matches only")
                  }, null, 8, FC), [
                    [hn, M.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "publisher",
                    value: D.publisher
                  }, null, 8, zC),
                  c("button", UC, p(g(b)("library", "Apply publisher")), 1)
                ]),
                c("div", BC, [
                  c("label", HC, p(g(b)("library", "Series / periodical")), 1),
                  We(c("input", {
                    id: "library-publication-search",
                    "onUpdate:modelValue": m[4] || (m[4] = (f) => J.value = f),
                    type: "search",
                    name: "publicationSearch",
                    autocomplete: "off",
                    placeholder: g(b)("library", "Search series and periodicals"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publication-suggestions",
                    "aria-expanded": X.value && ge.value.length > 0 ? "true" : "false",
                    onFocus: m[5] || (m[5] = (f) => X.value = !0),
                    onKeydown: m[6] || (m[6] = kt((f) => X.value = !1, ["escape"]))
                  }, null, 40, jC), [
                    [hn, J.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "publication",
                    value: D.publication
                  }, null, 8, VC),
                  X.value && ge.value.length > 0 ? (_(), T("ul", GC, [
                    (_(!0), T(fe, null, Fe(ge.value, (f) => (_(), T("li", {
                      key: f,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-publication-suggestion",
                        onMousedown: m[7] || (m[7] = Ge(() => {
                        }, ["prevent"])),
                        onClick: (B) => av(f, B)
                      }, p(f), 41, KC)
                    ]))), 128))
                  ])) : H("", !0),
                  c("button", WC, p(g(b)("library", "Apply series")), 1)
                ]),
                c("div", qC, [
                  c("label", YC, p(g(b)("library", "Publication year")), 1),
                  We(c("input", {
                    id: "library-year-search",
                    "onUpdate:modelValue": m[8] || (m[8] = (f) => Be.value = f),
                    type: "search",
                    name: "yearSearch",
                    autocomplete: "off",
                    placeholder: g(b)("library", "Search publication years"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-year-suggestions",
                    "aria-expanded": Te.value && ot.value.length > 0 ? "true" : "false",
                    onFocus: m[9] || (m[9] = (f) => Te.value = !0),
                    onKeydown: m[10] || (m[10] = kt((f) => Te.value = !1, ["escape"]))
                  }, null, 40, XC), [
                    [hn, Be.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "year",
                    value: D.year
                  }, null, 8, ZC),
                  Te.value && ot.value.length > 0 ? (_(), T("ul", JC, [
                    (_(!0), T(fe, null, Fe(ot.value, (f) => (_(), T("li", {
                      key: f,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-year-suggestion",
                        onMousedown: m[11] || (m[11] = Ge(() => {
                        }, ["prevent"])),
                        onClick: (B) => lv(f, B)
                      }, p(f), 41, QC)
                    ]))), 128))
                  ])) : H("", !0),
                  c("button", eT, p(g(b)("library", "Apply year")), 1)
                ]),
                c("div", tT, [
                  c("label", nT, p(g(b)("library", "Creator")), 1),
                  We(c("input", {
                    id: "library-creator-search",
                    "onUpdate:modelValue": m[12] || (m[12] = (f) => Y.value = f),
                    type: "search",
                    name: "creatorSearch",
                    autocomplete: "off",
                    placeholder: g(b)("library", "Search creators"),
                    title: g(b)("library", "Exact full-field creator matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-creator-suggestions",
                    "aria-expanded": re.value && he.value.length > 0 ? "true" : "false",
                    onFocus: m[13] || (m[13] = (f) => re.value = !0),
                    onKeydown: m[14] || (m[14] = kt((f) => re.value = !1, ["escape"]))
                  }, null, 40, iT), [
                    [hn, Y.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "creator",
                    value: D.creator
                  }, null, 8, aT),
                  re.value && he.value.length > 0 ? (_(), T("ul", rT, [
                    (_(!0), T(fe, null, Fe(he.value, (f) => (_(), T("li", {
                      key: f,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-creator-suggestion",
                        onMousedown: m[15] || (m[15] = Ge(() => {
                        }, ["prevent"])),
                        onClick: (B) => ov(f, B)
                      }, p(f), 41, sT)
                    ]))), 128))
                  ])) : H("", !0),
                  c("button", oT, p(g(b)("library", "Apply creator")), 1)
                ]),
                c("label", null, [
                  Ne(p(g(b)("library", "Nextcloud tag")), 1),
                  We(c("input", {
                    "onUpdate:modelValue": m[16] || (m[16] = (f) => D.tag = f),
                    type: "text",
                    name: "tag",
                    placeholder: g(b)("library", "photography")
                  }, null, 8, lT), [
                    [hn, D.tag]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(b)("library", "Format")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": m[17] || (m[17] = (f) => D.format = f),
                    name: "format",
                    onChange: m[18] || (m[18] = (f) => Jn(f))
                  }, [
                    c("option", cT, p(g(b)("library", "All formats")), 1),
                    (_(!0), T(fe, null, Fe(E.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(dr(f)), 9, uT))), 128))
                  ], 544), [
                    [ti, D.format]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(b)("library", "Shelf")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": m[19] || (m[19] = (f) => D.shelf = f),
                    name: "shelf",
                    onChange: m[20] || (m[20] = (f) => Jn(f))
                  }, [
                    c("option", dT, p(g(b)("library", "All shelves")), 1),
                    (_(!0), T(fe, null, Fe(S.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, fT))), 128))
                  ], 544), [
                    [ti, D.shelf]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(b)("library", "Scan status")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": m[21] || (m[21] = (f) => D.status = f),
                    name: "status",
                    onChange: m[22] || (m[22] = (f) => Jn(f))
                  }, [
                    c("option", hT, p(g(b)("library", "All scan statuses")), 1),
                    (_(!0), T(fe, null, Fe(I.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, pT))), 128))
                  ], 544), [
                    [ti, D.status]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(b)("library", "Workflow status")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": m[23] || (m[23] = (f) => D.workflowStatus = f),
                    name: "workflowStatus",
                    onChange: m[24] || (m[24] = (f) => Jn(f))
                  }, [
                    c("option", vT, p(g(b)("library", "All workflow statuses")), 1),
                    (_(!0), T(fe, null, Fe($.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, gT))), 128))
                  ], 544), [
                    [ti, D.workflowStatus]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(b)("library", "Subject")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": m[25] || (m[25] = (f) => D.subject = f),
                    name: "subject",
                    onChange: m[26] || (m[26] = (f) => Jn(f))
                  }, [
                    c("option", mT, p(g(b)("library", "All subjects")), 1),
                    (_(!0), T(fe, null, Fe(G.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, bT))), 128))
                  ], 544), [
                    [ti, D.subject]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(b)("library", "Classification")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": m[27] || (m[27] = (f) => D.classification = f),
                    name: "classification",
                    onChange: m[28] || (m[28] = (f) => Jn(f))
                  }, [
                    c("option", yT, p(g(b)("library", "All classifications")), 1),
                    (_(!0), T(fe, null, Fe(F.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, _T))), 128))
                  ], 544), [
                    [ti, D.classification]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(b)("library", "Suggested updates")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": m[29] || (m[29] = (f) => D.scannerConflicts = f),
                    name: "scannerConflicts",
                    onChange: m[30] || (m[30] = (f) => Jn(f))
                  }, [
                    c("option", wT, p(g(b)("library", "All metadata")), 1),
                    c("option", ST, p(g(b)("library", "Suggested updates")), 1)
                  ], 544), [
                    [ti, D.scannerConflicts]
                  ])
                ]),
                c("button", CT, p(g(b)("library", "Apply filters")), 1),
                c("a", TT, p(g(b)("library", "Clear")), 1)
              ], 40, OC)
            ]),
            c("a", {
              class: "library-navigation-settings-link",
              href: L.value
            }, [
              m[43] || (m[43] = c("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              c("span", null, p(g(b)("library", "Settings")), 1)
            ], 8, ET)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        be(g(u_), null, {
          default: Oe(() => [
            c("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: d.language || "en",
              dir: d.direction || "ltr",
              tabindex: "-1"
            }, [
              Ea.value.length > 0 ? (_(), T("nav", {
                key: 0,
                class: "library-active-filter-chips",
                "aria-label": g(b)("library", "Active filters")
              }, [
                c("span", null, p(g(b)("library", "Active filters")), 1),
                (_(!0), T(fe, null, Fe(Ea.value, (f) => (_(), T("a", {
                  key: f.key,
                  href: Au(f.key),
                  class: "library-filter-chip",
                  "aria-label": `${g(b)("library", "Remove filter")}: ${f.label}`,
                  onClick: Ge((B) => cv(f.key), ["prevent"])
                }, [
                  c("strong", null, p(f.label) + ":", 1),
                  Ne(" " + p(f.value) + " ", 1),
                  m[44] || (m[44] = c("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, OT))), 128))
              ], 8, kT)) : H("", !0),
              Q.value ? (_(), T("section", NT, [
                c("header", xT, [
                  c("p", LT, p(g(b)("library", "Metadata cleanup")), 1),
                  c("h2", RT, p(g(b)("library", "Review")), 1),
                  c("p", null, p(g(b)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                c("nav", {
                  class: "library-review-queues",
                  "aria-label": g(b)("library", "Review queues")
                }, [
                  (_(!0), T(fe, null, Fe(R.value, (f) => (_(), T("a", {
                    key: f.key,
                    class: Ee(["library-review-queue-link", { active: f.active }]),
                    href: f.href,
                    "aria-current": f.active ? "page" : void 0,
                    onClick: Ge((B) => uv(f), ["prevent"])
                  }, [
                    c("span", null, p(f.label), 1),
                    c("b", null, p(Number(ku.value[f.countKey] || 0)), 1)
                  ], 10, PT))), 128))
                ], 8, IT),
                c("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(b)("library", "Filter current review queue"),
                  onSubmit: Ge(un, ["prevent"])
                }, [
                  (_(!0), T(fe, null, Fe(ws.value, (f) => (_(), T("input", {
                    key: `review-${f.key}`,
                    type: "hidden",
                    name: f.key,
                    value: f.value
                  }, null, 8, $T))), 128)),
                  c("label", null, [
                    Ne(p(g(b)("library", "Search within this queue")), 1),
                    We(c("input", {
                      "onUpdate:modelValue": m[31] || (m[31] = (f) => D.q = f),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [hn, D.q]
                    ])
                  ]),
                  c("button", MT, p(g(b)("library", "Apply")), 1)
                ], 40, DT),
                c("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": An.loading ? "true" : "false"
                }, [
                  An.loading ? (_(), T("span", zT, p(g(b)("library", "Loading review queue…")), 1)) : H("", !0)
                ], 8, FT),
                An.error ? (_(), T("p", UT, p(An.error), 1)) : H("", !0),
                w.value.enabled ? (_(), T("section", BT, [
                  c("div", HT, [
                    c("p", jT, p(g(b)("library", "Metadata review workbench")), 1),
                    c("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(b)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, p(g(b)("library", "Review next suggestion")), 9, VT)
                  ]),
                  w.value.item ? (_(), T("article", GT, [
                    c("header", null, [
                      c("strong", null, [
                        c("bdi", KT, p(w.value.item.title), 1)
                      ]),
                      c("span", WT, [
                        c("bdi", qT, p(w.value.item.cachedPath), 1)
                      ])
                    ]),
                    c("div", YT, [
                      (_(!0), T(fe, null, Fe(w.value.fields, (f) => (_(), T("article", {
                        key: f.field,
                        class: "library-metadata-review-field"
                      }, [
                        c("h4", null, [
                          c("bdi", XT, p(f.field), 1)
                        ]),
                        c("dl", null, [
                          c("div", null, [
                            c("dt", null, p(g(b)("library", "Current value")), 1),
                            c("dd", null, [
                              c("bdi", ZT, p(f.currentValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(b)("library", "Suggested value")), 1),
                            c("dd", null, [
                              c("bdi", JT, p(f.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(b)("library", "Path-based suggestion")), 1),
                            c("dd", null, [
                              c("bdi", QT, p(f.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(b)("library", "Sidecar value")), 1),
                            c("dd", null, [
                              c("bdi", eE, p(f.sidecarValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(b)("library", "Source")), 1),
                            c("dd", null, [
                              c("bdi", tE, p(f.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        c("form", {
                          method: "post",
                          action: w.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Se.value
                          }, null, 8, iE),
                          c("input", {
                            type: "hidden",
                            name: "field",
                            value: f.field
                          }, null, 8, aE),
                          m[45] || (m[45] = c("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          c("button", rE, p(g(b)("library", "Use suggested value")), 1)
                        ], 8, nE)
                      ]))), 128))
                    ]),
                    c("footer", sE, [
                      c("a", {
                        class: "button secondary",
                        href: w.value.item.detailsUrl
                      }, p(g(b)("library", "Maintenance")), 9, oE),
                      c("a", {
                        class: "button secondary",
                        href: w.value.skipUrl
                      }, p(g(b)("library", "Skip to next suggestion")), 9, lE)
                    ])
                  ])) : H("", !0)
                ])) : H("", !0),
                h.value.length === 0 && !An.loading && !An.error ? (_(), T("div", cE, [
                  c("h3", null, p(g(b)("library", "This review queue is clear")), 1),
                  c("p", null, p(g(b)("library", "Choose another queue or return to the catalogue.")), 1),
                  c("a", {
                    class: "button primary",
                    href: x.value
                  }, p(g(b)("library", "Back to Library")), 9, uE)
                ])) : (_(), T("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(b)("library", "Review results")
                }, [
                  (_(!0), T(fe, null, Fe(h.value, (f) => (_(), T("article", {
                    key: f.id,
                    class: "library-review-result-card"
                  }, [
                    c("div", null, [
                      c("h3", null, [
                        c("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (B) => at(f, B)
                        }, [
                          c("bdi", hE, p(f.title), 1)
                        ], 8, fE)
                      ]),
                      f.creators ? (_(), T("p", pE, [
                        c("bdi", vE, p(f.creators), 1)
                      ])) : H("", !0),
                      f.scanError ? (_(), T("p", gE, [
                        c("bdi", mE, p(f.scanError), 1)
                      ])) : H("", !0)
                    ]),
                    c("p", null, [
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (B) => at(f, B)
                      }, p(g(b)("library", "Details")), 9, bE),
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(b)("library", "Open")), 9, yE)
                    ])
                  ]))), 128))
                ], 8, dE)),
                h.value.length > 0 ? (_(), T("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(b)("library", "Review pagination")
                }, [
                  Z.value.previousUrl ? (_(), T("a", {
                    key: 0,
                    href: Z.value.previousUrl
                  }, p(g(b)("library", "Previous")), 9, wE)) : (_(), T("span", SE, p(g(b)("library", "Previous")), 1)),
                  c("span", null, [
                    Ne(p(g(b)("library", "Page")) + " " + p(Z.value.page), 1),
                    Z.value.total > 0 ? (_(), T("span", CE, " · " + p(Z.value.from) + "–" + p(Z.value.to), 1)) : H("", !0)
                  ]),
                  Z.value.nextUrl ? (_(), T("a", {
                    key: 2,
                    href: Z.value.nextUrl
                  }, p(g(b)("library", "Next")), 9, TE)) : (_(), T("span", EE, p(g(b)("library", "Next")), 1))
                ], 8, _E)) : H("", !0)
              ])) : ve.value ? (_(), T("main", AE, [
                c("header", kE, [
                  c("p", OE, p(g(b)("library", "Your library")), 1),
                  c("h2", NE, p(g(b)("library", "Home")), 1)
                ]),
                c("section", xE, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", LE, p(g(b)("library", "Continue reading")), 1),
                      c("p", RE, p(g(b)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    c("a", {
                      href: `${x.value}?sort=lastOpened`
                    }, p(g(b)("library", "View all")), 9, IE)
                  ]),
                  Xi.value.continueReading.length ? (_(), T("div", PE, [
                    (_(!0), T(fe, null, Fe(Xi.value.continueReading, (f) => (_(), T("article", {
                      key: `continue-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (B) => at(f, B)
                      }, [
                        c("span", $E, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, ME)
                        ])
                      ], 8, DE),
                      c("div", FE, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => at(f, B)
                          }, [
                            c("bdi", UE, p(f.title), 1)
                          ], 8, zE)
                        ]),
                        f.creators ? (_(), T("p", BE, [
                          c("bdi", HE, p(f.creators), 1)
                        ])) : H("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(b)("library", "Open")), 9, jE)
                      ])
                    ]))), 128))
                  ])) : (_(), T("p", VE, p(g(b)("library", "Publications you open will appear here.")), 1))
                ]),
                c("section", GE, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", KE, p(g(b)("library", "Recently added")), 1),
                      c("p", WE, p(g(b)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    c("a", {
                      href: `${x.value}?sort=recent`
                    }, p(g(b)("library", "View all")), 9, qE)
                  ]),
                  Xi.value.recentlyAdded.length ? (_(), T("div", YE, [
                    (_(!0), T(fe, null, Fe(Xi.value.recentlyAdded, (f) => (_(), T("article", {
                      key: `recent-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (B) => at(f, B)
                      }, [
                        c("span", ZE, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, JE)
                        ])
                      ], 8, XE),
                      c("div", QE, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => at(f, B)
                          }, [
                            c("bdi", tA, p(f.title), 1)
                          ], 8, eA)
                        ]),
                        f.creators ? (_(), T("p", nA, [
                          c("bdi", iA, p(f.creators), 1)
                        ])) : H("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(b)("library", "Open")), 9, aA)
                      ])
                    ]))), 128))
                  ])) : (_(), T("p", rA, p(g(b)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                c("section", sA, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", oA, p(g(b)("library", "Shelves")), 1),
                      c("p", lA, p(g(b)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    c("a", { href: K.value }, p(g(b)("library", "View all")), 9, cA)
                  ]),
                  nr.value.length ? (_(), T("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(b)("library", "Shelves")
                  }, [
                    (_(!0), T(fe, null, Fe(nr.value, (f) => (_(), T("a", {
                      key: f.shelf,
                      href: f.url
                    }, [
                      c("strong", null, [
                        c("bdi", fA, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g(Un)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ], 8, dA))), 128))
                  ], 8, uA)) : (_(), T("p", hA, p(g(b)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(ir.value.count || 0) > 0 ? (_(), T("aside", pA, [
                  c("div", null, [
                    c("h3", vA, p(g(b)("library", "Needs attention")), 1),
                    c("p", gA, p(g(Un)("library", "%n publication needs better details.", "%n publications need better details.", Number(ir.value.count || 0))), 1)
                  ]),
                  c("a", {
                    class: "button tertiary",
                    href: ir.value.url
                  }, p(g(b)("library", "Review")), 9, mA)
                ])) : H("", !0)
              ])) : oe.value ? (_(), T("main", bA, [
                c("header", yA, [
                  c("p", _A, p(g(b)("library", "Your library")), 1),
                  c("h2", wA, p(g(b)("library", "Shelves")), 1),
                  c("p", SA, p(g(b)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                Ss.value.length ? (_(), T("nav", {
                  key: 0,
                  "aria-label": g(b)("library", "Shelves")
                }, [
                  c("ul", TA, [
                    (_(!0), T(fe, null, Fe(Ss.value, (f) => (_(), $e(EC, {
                      key: f.id,
                      node: f,
                      "children-url": De.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, CA)) : (_(), T("section", EA, [
                  c("h3", null, p(g(b)("library", "Shelves")), 1),
                  c("p", AA, p(g(b)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  c("p", kA, [
                    c("a", {
                      class: "button primary",
                      href: L.value
                    }, p(g(b)("library", "Add a Library root")), 9, OA),
                    c("a", {
                      class: "button secondary",
                      href: x.value
                    }, p(g(b)("library", "All publications")), 9, NA)
                  ])
                ]))
              ])) : (_(), T("section", xA, [
                c("header", LA, [
                  Pn.value ? (_(), T("p", RA, p(Ja.value), 1)) : H("", !0),
                  c("h2", IA, p(ms.value), 1)
                ]),
                c("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(b)("library", "One catalogue workspace")
                }, [
                  c("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(b)("library", "Catalogue toolbar"),
                    onSubmit: Ge(un, ["prevent"])
                  }, [
                    (_(!0), T(fe, null, Fe(Ci.value, (f) => (_(), T("input", {
                      key: f.key,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, $A))), 128)),
                    c("label", MA, [
                      Ne(p(g(b)("library", "Sort")), 1),
                      We(c("select", {
                        "onUpdate:modelValue": m[32] || (m[32] = (f) => D.sort = f),
                        name: "sort",
                        onChange: un
                      }, [
                        c("option", FA, p(g(b)("library", "Title")), 1),
                        c("option", zA, p(g(b)("library", "Date added")), 1),
                        c("option", UA, p(g(b)("library", "Publication date")), 1),
                        c("option", BA, p(g(b)("library", "Series")), 1),
                        c("option", HA, p(g(b)("library", "Recently opened")), 1),
                        c("option", jA, p(g(b)("library", "Format")), 1)
                      ], 544), [
                        [ti, D.sort]
                      ])
                    ]),
                    c("nav", {
                      class: "library-view-mode-toggle",
                      "data-library-control": "view",
                      "aria-label": g(b)("library", "View")
                    }, [
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "compact",
                        class: Ee({ active: qt.value === "compact" }),
                        "aria-pressed": qt.value === "compact" ? "true" : "false",
                        onClick: m[33] || (m[33] = (f) => ks("compact"))
                      }, p(g(b)("library", "Compact")), 11, GA),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: Ee({ active: qt.value === "gallery" }),
                        "aria-pressed": qt.value === "gallery" ? "true" : "false",
                        onClick: m[34] || (m[34] = (f) => ks("gallery"))
                      }, p(g(b)("library", "Gallery")), 11, KA),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: Ee({ active: qt.value === "list" }),
                        "aria-pressed": qt.value === "list" ? "true" : "false",
                        onClick: m[35] || (m[35] = (f) => ks("list"))
                      }, p(g(b)("library", "List")), 11, WA),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: Ee({ active: qt.value === "shelf" }),
                        "aria-pressed": qt.value === "shelf" ? "true" : "false",
                        onClick: m[36] || (m[36] = (f) => ks("shelf"))
                      }, p(g(b)("library", "Shelf")), 11, qA)
                    ], 8, VA)
                  ], 40, DA),
                  c("section", YA, [
                    c("h3", {
                      title: g(b)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, p(g(b)("library", "Collections")), 9, XA),
                    c("form", {
                      method: "post",
                      action: tr.value,
                      class: "library-saved-collection-save-form",
                      title: wl.value ? "" : g(b)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Se.value
                      }, null, 8, JA),
                      c("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: fv.value
                      }, null, 8, QA),
                      c("label", null, [
                        Ne(p(g(b)("library", "Collection name")), 1),
                        c("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(b)("library", "e.g. Bremen photo books"),
                          disabled: !wl.value,
                          autocomplete: "off"
                        }, null, 8, e2)
                      ]),
                      c("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !wl.value,
                        title: g(b)("library", "Save current view")
                      }, p(g(b)("library", "Save")), 9, t2)
                    ], 8, ZA),
                    er.value.length > 0 ? (_(), T("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(b)("library", "Saved custom collections")
                    }, [
                      (_(!0), T(fe, null, Fe(er.value, (f) => (_(), T("article", {
                        key: f.id,
                        class: "library-saved-collection-card"
                      }, [
                        c("a", {
                          class: "library-saved-collection-link",
                          href: pv(f.filters)
                        }, [
                          c("strong", null, p(f.name), 1),
                          c("span", null, p(g(Un)("library", "%n item", "%n items", Number(f.count || 0))), 1)
                        ], 8, i2),
                        c("form", {
                          method: "post",
                          action: vv(f.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Se.value
                          }, null, 8, r2),
                          c("button", s2, p(g(b)("library", "Delete")), 1)
                        ], 8, a2)
                      ]))), 128))
                    ], 8, n2)) : H("", !0)
                  ]),
                  Qt.value.length > 0 ? (_(), T("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(b)("library", "Batch actions for selected publications")
                  }, [
                    c("summary", l2, [
                      m[46] || (m[46] = c("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(b)("library", "Batch actions for selected publications")
                      }, p(g(b)("library", "Batch actions")), 9, c2),
                      c("small", u2, p(g(b)("library", "Batch actions for selected publications")), 1),
                      c("b", d2, p(g(Un)("library", "%n publication selected", "%n publications selected", Qt.value.length)), 1)
                    ]),
                    c("p", f2, p(g(Un)("library", "%n publication selected", "%n publications selected", Qt.value.length)), 1),
                    c("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: Xn
                    }, [
                      c("form", {
                        method: "post",
                        action: Wt.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Se.value
                        }, null, 8, p2),
                        c("label", null, [
                          c("span", null, p(g(b)("library", "Add tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(b)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, v2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(b)("library", "Applies only to the selected publications.")
                        }, p(g(b)("library", "Apply")), 9, g2)
                      ], 8, h2),
                      c("form", {
                        method: "post",
                        action: qn.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Se.value
                        }, null, 8, b2),
                        c("label", null, [
                          c("span", null, p(g(b)("library", "Remove tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(b)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, y2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Removes the tag only from the selected publications.")
                        }, p(g(b)("library", "Remove")), 9, _2)
                      ], 8, m2),
                      c("form", {
                        method: "post",
                        action: dt.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Se.value
                        }, null, 8, S2),
                        (_(!0), T(fe, null, Fe(Aa.value, (f) => (_(), T("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, C2))), 128)),
                        m[47] || (m[47] = c("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Batch actions for selected publications")
                        }, p(g(b)("library", "Reset metadata")), 9, T2)
                      ], 8, w2),
                      c("form", {
                        method: "post",
                        action: Bt.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Se.value
                        }, null, 8, A2),
                        (_(!0), T(fe, null, Fe(Aa.value, (f) => (_(), T("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, k2))), 128)),
                        c("label", null, [
                          c("span", null, p(g(b)("library", "Field")), 1),
                          c("select", O2, [
                            c("option", N2, p(g(b)("library", "Publication type")), 1),
                            c("option", x2, p(g(b)("library", "Subtitle")), 1),
                            c("option", L2, p(g(b)("library", "Creators")), 1),
                            c("option", R2, p(g(b)("library", "Series / periodical")), 1),
                            c("option", I2, p(g(b)("library", "Publication date")), 1),
                            c("option", P2, p(g(b)("library", "Language")), 1),
                            c("option", D2, p(g(b)("library", "Publisher")), 1),
                            c("option", $2, p(g(b)("library", "Subjects")), 1),
                            c("option", M2, p(g(b)("library", "Classifications")), 1)
                          ])
                        ]),
                        c("label", null, [
                          c("span", null, p(g(b)("library", "Value")), 1),
                          c("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(b)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, F2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Preview first, then apply from the review page.")
                        }, p(g(b)("library", "Preview edit")), 9, z2)
                      ], 8, E2),
                      c("form", {
                        method: "post",
                        action: Gi.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Se.value
                        }, null, 8, B2),
                        (_(!0), T(fe, null, Fe(Aa.value, (f) => (_(), T("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, H2))), 128)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Batch actions for selected publications")
                        }, p(g(b)("library", "Fresh covers")), 9, j2)
                      ], 8, U2)
                    ], 32)
                  ], 8, o2)) : H("", !0)
                ], 8, PA),
                Ca.value ? (_(), T("p", V2, p(Ca.value), 1)) : H("", !0),
                ys.value ? (_(), T("p", G2, p(ys.value), 1)) : H("", !0),
                Sa.value ? (_(), T("p", K2, p(Sa.value), 1)) : H("", !0),
                Pn.value ? (_(), T("section", W2, [
                  c("p", q2, p(Ja.value), 1),
                  c("h3", {
                    id: "library-discovery-heading",
                    title: In.value ? g(b)("library", "Items by this creator, sorted by publication context when available.") : Wi.value ? g(b)("library", "Items from this publication year, sorted by publication date when available.") : g(b)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, p(Za.value), 9, Y2),
                  c("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(b)("library", "Discovery summary")
                  }, [
                    c("span", null, p(g(Un)("library", "%n item", "%n items", Z.value.total)), 1),
                    O.value?.earliestYear && O.value?.latestYear ? (_(), T("span", Z2, p(O.value.earliestYear) + "–" + p(O.value.latestYear), 1)) : H("", !0),
                    O.value?.datedCount ? (_(), T("span", J2, p(O.value.datedCount) + " " + p(g(b)("library", "dated")), 1)) : H("", !0),
                    O.value?.undatedCount > 0 ? (_(), T("span", Q2, p(O.value.undatedCount) + " " + p(g(b)("library", "undated")), 1)) : H("", !0)
                  ], 8, X2),
                  Ki.value && O.value ? (_(), T("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(b)("library", "Publication issue/date context")
                  }, [
                    c("strong", null, p(g(b)("library", "Publication contents")), 1),
                    c("span", null, p(g(Un)("library", "%n item", "%n items", O.value.itemCount)), 1),
                    O.value.earliestYear && O.value.latestYear ? (_(), T("span", tk, p(O.value.earliestYear) + "–" + p(O.value.latestYear), 1)) : H("", !0),
                    c("span", null, p(O.value.datedCount) + " " + p(g(b)("library", "with issue/date coverage")), 1),
                    O.value.undatedCount > 0 ? (_(), T("span", nk, p(O.value.undatedCount) + " " + p(g(b)("library", "without dates yet")), 1)) : H("", !0),
                    c("span", null, p(g(b)("library", "read-only grouping")), 1)
                  ], 8, ek)) : H("", !0),
                  Ki.value && O.value?.issueGroups?.length ? (_(), T("section", ik, [
                    c("div", null, [
                      c("p", ak, p(g(b)("library", "Issue order")), 1),
                      c("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(b)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, p(g(b)("library", "Read-only issue/date grouping")), 9, rk)
                    ]),
                    c("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(b)("library", "Visual issue strip")
                    }, [
                      (_(!0), T(fe, null, Fe(O.value.issueGroups, (f) => (_(), T("a", {
                        key: `strip-${f.label}`,
                        class: "library-issue-strip-card",
                        href: f.items?.[0]?.detailsUrl || "#"
                      }, [
                        c("span", null, p(f.label), 1),
                        c("strong", null, p(f.items?.[0]?.issueLabel || g(b)("library", "Issue")), 1),
                        c("small", null, p(g(Un)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                      ], 8, ok))), 128))
                    ], 8, sk),
                    O.value.gapRanges?.length ? (_(), T("p", lk, p(g(b)("library", "Gap")) + ": " + p(O.value.gapRanges.join(", ")), 1)) : H("", !0),
                    (_(!0), T(fe, null, Fe(O.value.issueGroups, (f) => (_(), T("div", {
                      key: f.label,
                      class: "library-publication-issue-group"
                    }, [
                      c("h5", null, p(f.label), 1),
                      c("ol", null, [
                        (_(!0), T(fe, null, Fe(f.items, (B, ce) => (_(), T("li", {
                          key: B.itemId
                        }, [
                          c("span", ck, p(B.issueLabel), 1),
                          c("a", {
                            href: B.detailsUrl || "#"
                          }, p(B.title), 9, uk),
                          c("small", null, [
                            Ne(p(B.publicationType), 1),
                            B.publicationDate ? (_(), T(fe, { key: 0 }, [
                              Ne(" · " + p(B.publicationDate), 1)
                            ], 64)) : H("", !0)
                          ]),
                          c("small", dk, [
                            ce > 0 ? (_(), T(fe, { key: 0 }, [
                              Ne(p(g(b)("library", "Previous issue")), 1)
                            ], 64)) : H("", !0),
                            ce > 0 && ce < f.items.length - 1 ? (_(), T(fe, { key: 1 }, [
                              Ne(" · ")
                            ], 64)) : H("", !0),
                            ce < f.items.length - 1 ? (_(), T(fe, { key: 2 }, [
                              Ne(p(g(b)("library", "Next issue")), 1)
                            ], 64)) : H("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    O.value.unknownIssueItems?.length ? (_(), T("details", fk, [
                      c("summary", {
                        title: g(b)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, p(g(b)("library", "Unknown issue/date")) + " · " + p(O.value.unknownIssueItems.length), 9, hk)
                    ])) : H("", !0)
                  ])) : H("", !0),
                  c("p", null, [
                    c("a", {
                      href: x.value,
                      class: "button secondary library-discovery-back-link"
                    }, p(g(b)("library", "Back to full catalogue")), 9, pk)
                  ])
                ])) : H("", !0),
                c("div", vk, [
                  c("p", gk, [
                    Ne(p(g(b)("library", "Showing")) + " " + p(Z.value.from) + "–" + p(Z.value.to) + " " + p(g(b)("library", "of")) + " " + p(Z.value.total) + " " + p(g(b)("library", "catalogue items")), 1),
                    Ea.value.length > 0 ? (_(), T("span", mk, [
                      m[48] || (m[48] = Ne(" · ", -1)),
                      c("a", bk, p(g(b)("library", "Clear all filters")), 1)
                    ])) : H("", !0)
                  ]),
                  c("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(b)("library", "Catalogue pagination")
                  }, [
                    c("span", _k, [
                      Ne(p(g(b)("library", "Page")) + " " + p(Z.value.page), 1),
                      Z.value.total > 0 ? (_(), T("span", wk, " · " + p(Z.value.from) + "–" + p(Z.value.to), 1)) : H("", !0)
                    ]),
                    Z.value.previousUrl ? (_(), T("a", {
                      key: 0,
                      href: Z.value.previousUrl
                    }, p(g(b)("library", "Previous")), 9, Sk)) : (_(), T("span", Ck, p(g(b)("library", "Previous")), 1)),
                    Z.value.nextUrl ? (_(), T("a", {
                      key: 2,
                      href: Z.value.nextUrl
                    }, p(g(b)("library", "Next")), 9, Tk)) : (_(), T("span", Ek, p(g(b)("library", "Next")), 1))
                  ], 8, yk)
                ]),
                h.value.length === 0 ? (_(), T("div", {
                  key: 4,
                  class: Ee(["library-empty-content", { "library-first-run-guidance": wi.value || Si.value, "library-filter-empty-state": Jt.value && !wi.value && !Si.value }]),
                  role: "status"
                }, [
                  wi.value ? (_(), T(fe, { key: 0 }, [
                    c("h3", {
                      title: g(b)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, p(g(b)("library", "Start with one Library root")), 9, Ak),
                    c("p", kk, [
                      c("a", {
                        href: L.value,
                        class: "button primary"
                      }, p(g(b)("library", "Add a Library root")), 9, Ok),
                      c("span", Nk, p(g(b)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : Si.value ? (_(), T(fe, { key: 1 }, [
                    c("h3", {
                      title: g(b)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, p(g(b)("library", "No enabled Library roots")), 9, xk),
                    c("p", Lk, [
                      c("a", {
                        href: L.value,
                        class: "button primary"
                      }, p(g(b)("library", "Open Library settings")), 9, Rk)
                    ])
                  ], 64)) : Jt.value ? (_(), T(fe, { key: 2 }, [
                    c("h3", {
                      title: g(b)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, p(g(b)("library", "No matches for the current filters")), 9, Ik),
                    c("p", Pk, [
                      c("a", {
                        href: dv(),
                        class: "button secondary"
                      }, p(g(b)("library", "Clear search")), 9, Dk),
                      c("a", $k, p(g(b)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (_(), T(fe, { key: 3 }, [
                    c("h3", {
                      title: g(b)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, p(g(b)("library", "No catalogue items yet")), 9, Mk),
                    c("p", Fk, [
                      c("a", {
                        href: L.value,
                        class: "button primary"
                      }, p(g(b)("library", "Run a scan from settings")), 9, zk)
                    ])
                  ], 64))
                ], 2)) : H("", !0),
                h.value.length > 0 ? (_(), T("label", Uk, [
                  c("input", {
                    type: "checkbox",
                    checked: Qt.value.length === h.value.length,
                    onChange: Cs
                  }, null, 40, Bk),
                  Ne(" " + p(g(b)("library", "Select all publications on this page")), 1)
                ])) : H("", !0),
                h.value.length > 0 && qt.value === "list" ? (_(), T("ul", Hk, [
                  (_(!0), T(fe, null, Fe(h.value, (f) => (_(), T("li", {
                    key: f.id,
                    class: Ee(["library-catalogue-list-row", { "library-catalogue-list-row--selected": ka.value.has(Number(f.id)), "library-catalogue-list-row--open": Tn.value && Number(ln.value) === Number(f.id) }])
                  }, [
                    c("label", jk, [
                      c("input", {
                        type: "checkbox",
                        checked: ka.value.has(Number(f.id)),
                        "aria-label": `${g(b)("library", "Select publication")}: ${f.title}`,
                        onChange: (B) => Sn(f.id, B.currentTarget.checked)
                      }, null, 40, Vk)
                    ]),
                    c("div", Gk, [
                      c("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (B) => at(f, B)
                      }, [
                        c("bdi", Wk, p(f.title), 1)
                      ], 8, Kk),
                      f.creators ? (_(), T("span", qk, [
                        c("bdi", Yk, p(f.creators), 1)
                      ])) : H("", !0)
                    ]),
                    c("dl", Xk, [
                      f.publication ? (_(), T("div", Zk, [
                        c("dt", null, p(g(b)("library", "Series")), 1),
                        c("dd", null, [
                          c("bdi", Jk, p(f.publication), 1)
                        ])
                      ])) : H("", !0),
                      f.publicationDate ? (_(), T("div", Qk, [
                        c("dt", null, p(g(b)("library", "Publication date")), 1),
                        c("dd", null, p(f.publicationDate), 1)
                      ])) : H("", !0),
                      f.extension || f.publicationType ? (_(), T("div", eO, [
                        c("dt", null, p(g(b)("library", "Format")), 1),
                        c("dd", null, [
                          c("bdi", {
                            class: Ee(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: f.extension ? "ltr" : "auto"
                          }, p(f.extension ? dr(f.extension) : f.publicationType), 11, tO)
                        ])
                      ])) : H("", !0),
                      f.shelf ? (_(), T("div", nO, [
                        c("dt", null, p(g(b)("library", "Shelf")), 1),
                        c("dd", null, [
                          c("bdi", iO, p(f.shelf), 1)
                        ])
                      ])) : H("", !0)
                    ]),
                    c("div", aO, [
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(b)("library", "Open")), 9, rO),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (B) => at(f, B)
                      }, p(g(b)("library", "Details")), 9, sO)
                    ])
                  ], 2))), 128))
                ])) : h.value.length > 0 ? (_(), T("div", {
                  key: 7,
                  class: Ee(["library-cover-gallery", qi.value])
                }, [
                  (_(!0), T(fe, null, Fe(h.value, (f) => (_(), T("article", {
                    key: f.id,
                    class: Ee(["library-cover-card", { "library-cover-card--cover-loaded": fr(f) === "loaded", "library-cover-card--cover-error": fr(f) === "error", "library-cover-card--selected": ka.value.has(Number(f.id)), "library-cover-card--open": Tn.value && Number(ln.value) === Number(f.id) }])
                  }, [
                    c("label", oO, [
                      c("input", {
                        type: "checkbox",
                        checked: ka.value.has(Number(f.id)),
                        "aria-label": `${g(b)("library", "Select publication")}: ${f.title}`,
                        onChange: (B) => Sn(f.id, B.currentTarget.checked)
                      }, null, 40, lO)
                    ]),
                    c("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                      "aria-expanded": Tn.value && Number(ln.value) === Number(f.id) ? "true" : "false",
                      onClick: (B) => at(f, B)
                    }, [
                      c("span", {
                        id: `library-details-action-${f.id}`,
                        class: "hidden-visually"
                      }, p(g(b)("library", "Details")), 9, uO),
                      c("span", dO, [
                        fr(f) === "loading" ? (_(), T("span", fO)) : H("", !0),
                        c("img", {
                          class: Ee(["library-cover-image", { "library-cover-image--loaded": fr(f) === "loaded" }]),
                          src: f.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (B) => gv(f),
                          onError: (B) => mv(f)
                        }, null, 42, hO),
                        fr(f) === "error" ? (_(), T("span", pO, p(g(b)("library", "Cover unavailable")), 1)) : H("", !0)
                      ])
                    ], 8, cO),
                    c("form", {
                      method: "post",
                      action: f.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: Ge((B) => xu(f, B), ["prevent"])
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Se.value
                      }, null, 8, gO),
                      m[49] || (m[49] = c("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      c("input", {
                        type: "hidden",
                        name: "starred",
                        value: f.starred ? "0" : "1"
                      }, null, 8, mO),
                      c("button", {
                        type: "submit",
                        class: Ee(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                        "aria-pressed": f.starred ? "true" : "false",
                        title: f.starred ? g(b)("library", "Unstar this publication") : g(b)("library", "Star this publication"),
                        "aria-label": f.starred ? g(b)("library", "Unstar this publication") : g(b)("library", "Star this publication"),
                        "aria-busy": hr[f.id] ? "true" : void 0,
                        disabled: hr[f.id],
                        onClick: Ge((B) => xu(f, B), ["prevent"])
                      }, p(f.starred ? "★" : "☆"), 11, bO),
                      pr[f.id] ? (_(), T("span", {
                        key: 0,
                        "data-library-star-error": f.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, p(pr[f.id]), 9, yO)) : H("", !0)
                    ], 40, vO),
                    c("div", _O, [
                      c("div", wO, [
                        c("h3", {
                          id: `library-card-title-${f.id}`
                        }, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => at(f, B)
                          }, [
                            c("bdi", TO, p(f.title), 1)
                          ], 8, CO)
                        ], 8, SO),
                        f.creators ? (_(), T("p", EO, [
                          c("bdi", AO, p(f.creators), 1)
                        ])) : H("", !0),
                        Sl(f) || f.extension ? (_(), T("div", kO, [
                          f.extension ? (_(), T("span", OO, [
                            c("bdi", NO, p(dr(f.extension)), 1)
                          ])) : H("", !0),
                          Sl(f) ? (_(), T("p", xO, [
                            c("bdi", LO, p(Sl(f)), 1)
                          ])) : H("", !0)
                        ])) : H("", !0),
                        c("div", RO, [
                          c("a", {
                            class: "library-cover-read",
                            href: f.openUrl
                          }, p(g(b)("library", "Open")), 9, IO),
                          be(g(wo), {
                            "aria-label": g(b)("library", "More actions")
                          }, {
                            default: Oe(() => [
                              be(g(Ma), {
                                href: f.filesUrl
                              }, {
                                default: Oe(() => [
                                  Ne(p(g(b)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              be(g(Ma), {
                                href: f.downloadUrl
                              }, {
                                default: Oe(() => [
                                  Ne(p(g(b)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              be(g(Ma), {
                                href: f.detailsUrl
                              }, {
                                default: Oe(() => [
                                  Ne(p(g(b)("library", "Maintenance")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ]),
                            _: 2
                          }, 1032, ["aria-label"])
                        ])
                      ])
                    ])
                  ], 2))), 128))
                ], 2)) : H("", !0),
                h.value.length > 0 ? (_(), T("nav", {
                  key: 8,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(b)("library", "Catalogue pagination")
                }, [
                  c("span", DO, [
                    Ne(p(g(b)("library", "Page")) + " " + p(Z.value.page), 1),
                    Z.value.total > 0 ? (_(), T("span", $O, " · " + p(Z.value.from) + "–" + p(Z.value.to), 1)) : H("", !0)
                  ]),
                  Z.value.previousUrl ? (_(), T("a", {
                    key: 0,
                    href: Z.value.previousUrl
                  }, p(g(b)("library", "Previous")), 9, MO)) : (_(), T("span", FO, p(g(b)("library", "Previous")), 1)),
                  Z.value.nextUrl ? (_(), T("a", {
                    key: 2,
                    href: Z.value.nextUrl
                  }, p(g(b)("library", "Next")), 9, zO)) : (_(), T("span", UO, p(g(b)("library", "Next")), 1))
                ], 8, PO)) : H("", !0)
              ]))
            ], 8, AT)
          ]),
          _: 1
        }),
        be(g(ZS), {
          ref_key: "sidebarComponent",
          ref: Cn,
          class: "library-native-item-sidebar",
          open: Tn.value,
          "no-toggle": "",
          loading: _t.loading,
          name: ke.value?.title || g(b)("library", "Publication details"),
          subname: ke.value?.creators || "",
          role: cn.value ? "dialog" : void 0,
          "aria-modal": cn.value ? "true" : void 0,
          "aria-labelledby": cn.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": cn.value && ke.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: wt,
          onClosed: Zp,
          onClose: Ei
        }, {
          default: Oe(() => [
            c("div", BO, [
              c("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: Zi,
                class: "hidden-visually",
                tabindex: "-1"
              }, p(ke.value?.title || g(b)("library", "Publication details")), 513),
              _t.loading && !ke.value ? (_(), T("p", HO, p(g(b)("library", "Loading publication details…")), 1)) : _t.error ? (_(), T("div", {
                key: 1,
                class: "library-sidebar-state",
                role: _t.missing ? "status" : "alert"
              }, [
                c("p", null, p(_t.error), 1),
                _t.missing ? H("", !0) : (_(), T("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: m[37] || (m[37] = (f) => ft(ln.value, { historyMode: "none" }))
                }, p(g(b)("library", "Try again")), 1))
              ], 8, jO)) : ke.value ? (_(), T(fe, { key: 2 }, [
                c("p", VO, p(g(b)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                c("div", GO, [
                  c("span", KO, p(g(b)("library", "Cover for")), 1),
                  c("img", {
                    class: "library-detail-drawer-cover",
                    src: ke.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, WO),
                  c("div", qO, [
                    c("p", YO, [
                      c("bdi", XO, p(ke.value.publicationType || g(b)("library", "Publication")), 1),
                      ke.value.extension ? (_(), T("span", ZO, [
                        m[50] || (m[50] = Ne(" · ", -1)),
                        c("bdi", JO, p(dr(ke.value.extension)), 1)
                      ])) : H("", !0)
                    ]),
                    c("div", QO, [
                      c("a", {
                        class: "button primary",
                        href: ke.value.openUrl
                      }, p(g(b)("library", "Open")), 9, eN),
                      be(g(wo), {
                        "aria-label": g(b)("library", "File and maintenance actions")
                      }, {
                        default: Oe(() => [
                          be(g(Ma), {
                            href: ke.value.filesUrl
                          }, {
                            default: Oe(() => [
                              Ne(p(g(b)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          be(g(Ma), {
                            href: ke.value.downloadUrl
                          }, {
                            default: Oe(() => [
                              Ne(p(g(b)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          be(g(Ma), {
                            href: ke.value.detailsUrl
                          }, {
                            default: Oe(() => [
                              Ne(p(g(b)("library", "Maintenance (legacy)")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ])
                  ])
                ]),
                c("nav", {
                  class: "library-sidebar-sections",
                  "aria-label": g(b)("library", "Publication detail sections")
                }, [
                  (_(), T(fe, null, Fe(Ts, (f) => c("button", {
                    key: f.key,
                    type: "button",
                    class: Ee({ active: Zn.value === f.key }),
                    "aria-current": Zn.value === f.key ? "page" : void 0,
                    onClick: (B) => Zn.value = f.key
                  }, p(g(b)("library", f.label)), 11, nN)), 64))
                ], 8, tN),
                Zn.value === "overview" ? (_(), T("section", iN, [
                  c("h3", aN, p(g(b)("library", "Overview")), 1),
                  ke.value.description ? (_(), T("p", rN, [
                    c("bdi", sN, p(ke.value.description), 1)
                  ])) : H("", !0),
                  c("dl", oN, [
                    ke.value.publication ? (_(), T("div", lN, [
                      c("dt", null, p(g(b)("library", "Series")), 1),
                      c("dd", null, p(ke.value.publication), 1)
                    ])) : H("", !0),
                    ke.value.publicationDate ? (_(), T("div", cN, [
                      c("dt", null, p(g(b)("library", "Date")), 1),
                      c("dd", null, p(ke.value.publicationDate), 1)
                    ])) : H("", !0),
                    ke.value.publisher ? (_(), T("div", uN, [
                      c("dt", null, p(g(b)("library", "Publisher")), 1),
                      c("dd", null, p(ke.value.publisher), 1)
                    ])) : H("", !0),
                    ke.value.language ? (_(), T("div", dN, [
                      c("dt", null, p(g(b)("library", "Language")), 1),
                      c("dd", null, p(ke.value.language), 1)
                    ])) : H("", !0),
                    ke.value.shelf ? (_(), T("div", fN, [
                      c("dt", null, p(g(b)("library", "Shelf")), 1),
                      c("dd", null, p(ke.value.shelf), 1)
                    ])) : H("", !0)
                  ])
                ])) : Zn.value === "metadata" ? (_(), T("section", hN, [
                  c("h3", pN, p(g(b)("library", "Metadata")), 1),
                  c("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Ge(ee, ["prevent"])
                  }, [
                    c("label", null, [
                      Ne(p(g(b)("library", "Title")), 1),
                      We(c("input", {
                        "onUpdate:modelValue": m[38] || (m[38] = (f) => mt.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [hn, mt.title]
                      ])
                    ]),
                    c("label", null, [
                      Ne(p(g(b)("library", "Publication date")), 1),
                      We(c("input", {
                        "onUpdate:modelValue": m[39] || (m[39] = (f) => mt.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(b)("library", "e.g. 2026")
                      }, null, 8, vN), [
                        [hn, mt.publicationDate]
                      ])
                    ]),
                    c("fieldset", null, [
                      c("legend", null, p(g(b)("library", "Identifiers")), 1),
                      (_(!0), T(fe, null, Fe(mt.identifiers, (f, B) => (_(), T("div", {
                        key: B,
                        class: "library-sidebar-identifier"
                      }, [
                        We(c("input", {
                          "onUpdate:modelValue": (ce) => f.scheme = ce,
                          "aria-label": g(b)("library", "Identifier type"),
                          placeholder: g(b)("library", "Identifier type")
                        }, null, 8, gN), [
                          [hn, f.scheme]
                        ]),
                        We(c("input", {
                          "onUpdate:modelValue": (ce) => f.displayValue = ce,
                          "aria-label": g(b)("library", "Identifier value")
                        }, null, 8, mN), [
                          [hn, f.displayValue]
                        ]),
                        c("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (ce) => or(B)
                        }, p(g(b)("library", "Remove")), 9, bN)
                      ]))), 128)),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: xa
                      }, p(g(b)("library", "Add identifier")), 1)
                    ]),
                    c("p", yN, p(g(b)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    Yt.error ? (_(), T("p", _N, p(Yt.error), 1)) : Yt.saved ? (_(), T("p", wN, p(g(b)("library", "Metadata saved.")), 1)) : H("", !0),
                    c("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Yt.saving
                    }, p(Yt.saving ? g(b)("library", "Saving…") : g(b)("library", "Save metadata")), 9, SN)
                  ], 32),
                  le(ke.value).length ? (_(), T("section", CN, [
                    c("h4", TN, p(g(b)("library", "Scanner suggestions")), 1),
                    c("p", EN, p(g(b)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    c("dl", null, [
                      (_(!0), T(fe, null, Fe(le(ke.value), (f) => (_(), T("div", {
                        key: f.field
                      }, [
                        c("dt", null, p(f.field) + " · " + p(f.sourceProvenance), 1),
                        c("dd", null, [
                          Ne(p(g(b)("library", "Current")) + ": " + p(f.currentValue || "—"), 1),
                          m[51] || (m[51] = c("br", null, null, -1)),
                          Ne(p(g(b)("library", "Suggestion")) + ": " + p(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : H("", !0)
                ])) : (_(), T("section", AN, [
                  c("h3", kN, p(g(b)("library", "Activity")), 1),
                  c("dl", ON, [
                    c("div", null, [
                      c("dt", null, p(g(b)("library", "Scan status")), 1),
                      c("dd", null, p(ke.value.scanStatus || "—"), 1)
                    ]),
                    ke.value.workflowStatus ? (_(), T("div", NN, [
                      c("dt", null, p(g(b)("library", "Workflow")), 1),
                      c("dd", null, p(ke.value.workflowStatus), 1)
                    ])) : H("", !0),
                    ke.value.metadataSource ? (_(), T("div", xN, [
                      c("dt", null, p(g(b)("library", "Metadata source")), 1),
                      c("dd", null, p(ke.value.metadataSource), 1)
                    ])) : H("", !0),
                    ke.value.cachedPath ? (_(), T("div", LN, [
                      c("dt", null, p(g(b)("library", "File")), 1),
                      c("dd", null, [
                        c("bdi", RN, p(ke.value.cachedPath), 1)
                      ])
                    ])) : H("", !0)
                  ])
                ])),
                c("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": g(b)("library", "Browse neighbouring items")
                }, [
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Ji.value,
                    onClick: m[40] || (m[40] = (f) => As(Ji.value))
                  }, p(g(b)("library", "Previous item")), 9, PN),
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Qi.value,
                    onClick: m[41] || (m[41] = (f) => As(Qi.value))
                  }, p(g(b)("library", "Next item")), 9, DN)
                ], 8, IN)
              ], 64)) : H("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function UN() {
  window.LibraryStartupWatchdog?.fail();
}
function BN(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = iu("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !BN(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  ib(zN, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  UN(), console.error("[library] Vue startup failed", e);
}
