// @__NO_SIDE_EFFECTS__
function Bc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ve = {}, za = [], gn = () => {
}, Ef = () => !1, Ko = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Wo = (e) => e.startsWith("onUpdate:"), vt = Object.assign, Hc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Sv = Object.prototype.hasOwnProperty, qe = (e, t) => Sv.call(e, t), Se = Array.isArray, $i = (e) => ss(e) === "[object Map]", ma = (e) => ss(e) === "[object Set]", Ru = (e) => ss(e) === "[object Date]", xe = (e) => typeof e == "function", tt = (e) => typeof e == "string", kn = (e) => typeof e == "symbol", Ye = (e) => e !== null && typeof e == "object", Af = (e) => (Ye(e) || xe(e)) && xe(e.then) && xe(e.catch), kf = Object.prototype.toString, ss = (e) => kf.call(e), Cv = (e) => ss(e).slice(8, -1), Of = (e) => ss(e) === "[object Object]", jc = (e) => tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ar = /* @__PURE__ */ Bc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Tv = /-\w/g, Ut = qo(
  (e) => e.replace(Tv, (t) => t.slice(1).toUpperCase())
), Ev = /\B([A-Z])/g, bi = qo(
  (e) => e.replace(Ev, "-$1").toLowerCase()
), Yo = qo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Tl = qo(
  (e) => e ? `on${Yo(e)}` : ""
), At = (e, t) => !Object.is(e, t), zs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Nf = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Xo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Av = (e) => {
  const t = tt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Iu;
const Zo = () => Iu || (Iu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function sn(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = tt(i) ? xv(i) : sn(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (tt(e) || Ye(e))
    return e;
}
const kv = /;(?![^(]*\))/g, Ov = /:([^]+)/, Nv = /\/\*[^]*?\*\//g;
function xv(e) {
  const t = {};
  return e.replace(Nv, "").split(kv).forEach((n) => {
    if (n) {
      const i = n.split(Ov);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ce(e) {
  let t = "";
  if (tt(e))
    t = e;
  else if (Se(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ce(e[n]);
      i && (t += i + " ");
    }
  else if (Ye(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Vs(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !tt(t) && (e.class = Ce(t)), n && (e.style = sn(n)), e;
}
const Lv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Rv = /* @__PURE__ */ Bc(Lv);
function xf(e) {
  return !!e || e === "";
}
function Iv(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Ui(e[i], t[i]);
  return n;
}
function Pu(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (!i[s] && Ui(a, n[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Ui(e, t) {
  if (e === t) return !0;
  let n = Ru(e), i = Ru(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = kn(e), i = kn(t), n || i)
    return e === t;
  if (n = Se(e), i = Se(t), n || i)
    return n && i ? Iv(e, t) : !1;
  if (n = Ye(e), i = Ye(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = $i(e), i = $i(t), n || i || (n = ma(e), i = ma(t), n || i))
      return n && i ? Pu(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const s in e) {
      const o = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (o && !l || !o && l || !Ui(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Pv(e, t) {
  return e.findIndex((n) => Ui(n, t));
}
const Lf = (e) => !!(e && e.__v_isRef === !0), p = (e) => tt(e) ? e : e == null ? "" : Se(e) || Ye(e) && (e.toString === kf || !xe(e.toString)) ? Lf(e) ? p(e.value) : JSON.stringify(e, Rf, 2) : String(e), Rf = (e, t) => Lf(t) ? Rf(e, t.value) : $i(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[El(i, r) + " =>"] = a, n),
    {}
  )
} : ma(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => El(n))
} : kn(t) ? El(t) : Ye(t) && !Se(t) && !Of(t) ? String(t) : t, El = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    kn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Dv(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Et;
class $v {
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
function Mv() {
  return Et;
}
let et;
const Al = /* @__PURE__ */ new WeakSet();
class If {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Et && (Et.active ? Et.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Al.has(this) && (Al.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Df(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Du(this), $f(this);
    const t = et, n = En;
    et = this, En = !0;
    try {
      return this.fn();
    } finally {
      Mf(this), et = t, En = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Kc(t);
      this.deps = this.depsTail = void 0, Du(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Al.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    lc(this) && this.run();
  }
  get dirty() {
    return lc(this);
  }
}
let Pf = 0, kr, Or;
function Df(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Or, Or = e;
    return;
  }
  e.next = kr, kr = e;
}
function Vc() {
  Pf++;
}
function Gc() {
  if (--Pf > 0)
    return;
  if (Or) {
    let t = Or;
    for (Or = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; kr; ) {
    let t = kr;
    for (kr = void 0; t; ) {
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
function $f(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Mf(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Kc(i), Fv(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function lc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ff(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ff(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Hr) || (e.globalVersion = Hr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !lc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = et, i = En;
  et = e, En = !0;
  try {
    $f(e);
    const a = e.fn(e._value);
    (t.version === 0 || At(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    et = n, En = i, Mf(e), e.flags &= -3;
  }
}
function Kc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Kc(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Fv(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let En = !0;
const zf = [];
function pi() {
  zf.push(En), En = !1;
}
function vi() {
  const e = zf.pop();
  En = e === void 0 ? !0 : e;
}
function Du(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = et;
    et = void 0;
    try {
      t();
    } finally {
      et = n;
    }
  }
}
let Hr = 0;
class zv {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Jo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!et || !En || et === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== et)
      n = this.activeLink = new zv(et, this), et.deps ? (n.prevDep = et.depsTail, et.depsTail.nextDep = n, et.depsTail = n) : et.deps = et.depsTail = n, Uf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = et.depsTail, n.nextDep = void 0, et.depsTail.nextDep = n, et.depsTail = n, et.deps === n && (et.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Hr++, this.notify(t);
  }
  notify(t) {
    Vc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Gc();
    }
  }
}
function Uf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Uf(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const cc = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ Symbol(
  ""
), uc = /* @__PURE__ */ Symbol(
  ""
), jr = /* @__PURE__ */ Symbol(
  ""
);
function Mt(e, t, n) {
  if (En && et) {
    let i = cc.get(e);
    i || cc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Jo()), a.map = i, a.key = n), a.track();
  }
}
function oi(e, t, n, i, a, r) {
  const s = cc.get(e);
  if (!s) {
    Hr++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Vc(), t === "clear")
    s.forEach(o);
  else {
    const l = Se(e), d = l && jc(n);
    if (l && n === "length") {
      const u = Number(i);
      s.forEach((h, S) => {
        (S === "length" || S === jr || !kn(S) && S >= u) && o(h);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && o(s.get(n)), d && o(s.get(jr)), t) {
        case "add":
          l ? d && o(s.get("length")) : (o(s.get(pa)), $i(e) && o(s.get(uc)));
          break;
        case "delete":
          l || (o(s.get(pa)), $i(e) && o(s.get(uc)));
          break;
        case "set":
          $i(e) && o(s.get(pa));
          break;
      }
  }
  Gc();
}
function La(e) {
  const t = /* @__PURE__ */ Ge(e);
  return t === e ? t : (Mt(t, "iterate", jr), /* @__PURE__ */ mn(e) ? t : t.map(On));
}
function Qo(e) {
  return Mt(e = /* @__PURE__ */ Ge(e), "iterate", jr), e;
}
function Vn(e, t) {
  return /* @__PURE__ */ gi(e) ? Wa(/* @__PURE__ */ va(e) ? On(t) : t) : On(t);
}
const Uv = {
  __proto__: null,
  [Symbol.iterator]() {
    return kl(this, Symbol.iterator, (e) => Vn(this, e));
  },
  concat(...e) {
    return La(this).concat(
      ...e.map((t) => Se(t) ? La(t) : t)
    );
  },
  entries() {
    return kl(this, "entries", (e) => (e[1] = Vn(this, e[1]), e));
  },
  every(e, t) {
    return ei(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ei(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Vn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return ei(
      this,
      "find",
      e,
      t,
      (n) => Vn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ei(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ei(
      this,
      "findLast",
      e,
      t,
      (n) => Vn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ei(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ei(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ol(this, "includes", e);
  },
  indexOf(...e) {
    return Ol(this, "indexOf", e);
  },
  join(e) {
    return La(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ol(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ei(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ur(this, "pop");
  },
  push(...e) {
    return ur(this, "push", e);
  },
  reduce(e, ...t) {
    return $u(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return $u(this, "reduceRight", e, t);
  },
  shift() {
    return ur(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ei(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ur(this, "splice", e);
  },
  toReversed() {
    return La(this).toReversed();
  },
  toSorted(e) {
    return La(this).toSorted(e);
  },
  toSpliced(...e) {
    return La(this).toSpliced(...e);
  },
  unshift(...e) {
    return ur(this, "unshift", e);
  },
  values() {
    return kl(this, "values", (e) => Vn(this, e));
  }
};
function kl(e, t, n) {
  const i = Qo(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ mn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const Bv = Array.prototype;
function ei(e, t, n, i, a, r) {
  const s = Qo(e), o = s !== e && !/* @__PURE__ */ mn(e), l = s[t];
  if (l !== Bv[t]) {
    const h = l.apply(e, r);
    return o ? On(h) : h;
  }
  let d = n;
  s !== e && (o ? d = function(h, S) {
    return n.call(this, Vn(e, h), S, e);
  } : n.length > 2 && (d = function(h, S) {
    return n.call(this, h, S, e);
  }));
  const u = l.call(s, d, i);
  return o && a ? a(u) : u;
}
function $u(e, t, n, i) {
  const a = Qo(e), r = a !== e && !/* @__PURE__ */ mn(e);
  let s = n, o = !1;
  a !== e && (r ? (o = i.length === 0, s = function(d, u, h) {
    return o && (o = !1, d = Vn(e, d)), n.call(this, d, Vn(e, u), h, e);
  }) : n.length > 3 && (s = function(d, u, h) {
    return n.call(this, d, u, h, e);
  }));
  const l = a[t](s, ...i);
  return o ? Vn(e, l) : l;
}
function Ol(e, t, n) {
  const i = /* @__PURE__ */ Ge(e);
  Mt(i, "iterate", jr);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Yc(n[0]) ? (n[0] = /* @__PURE__ */ Ge(n[0]), i[t](...n)) : a;
}
function ur(e, t, n = []) {
  pi(), Vc();
  const i = (/* @__PURE__ */ Ge(e))[t].apply(e, n);
  return Gc(), vi(), i;
}
const Hv = /* @__PURE__ */ Bc("__proto__,__v_isRef,__isVue"), Bf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(kn)
);
function jv(e) {
  kn(e) || (e = String(e));
  const t = /* @__PURE__ */ Ge(this);
  return Mt(t, "has", e), t.hasOwnProperty(e);
}
class Hf {
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
      return i === (a ? r ? Qv : Kf : r ? Gf : Vf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = Se(t);
    if (!a) {
      let l;
      if (s && (l = Uv[n]))
        return l;
      if (n === "hasOwnProperty")
        return jv;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Bt(t) ? t : i
    );
    if ((kn(n) ? Bf.has(n) : Hv(n)) || (a || Mt(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ Bt(o)) {
      const l = s && jc(n) ? o : o.value;
      return a && Ye(l) ? /* @__PURE__ */ Vr(l) : l;
    }
    return Ye(o) ? a ? /* @__PURE__ */ Vr(o) : /* @__PURE__ */ $t(o) : o;
  }
}
class jf extends Hf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const s = Se(t) && jc(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ gi(r);
      if (!/* @__PURE__ */ mn(i) && !/* @__PURE__ */ gi(i) && (r = /* @__PURE__ */ Ge(r), i = /* @__PURE__ */ Ge(i)), !s && /* @__PURE__ */ Bt(r) && !/* @__PURE__ */ Bt(i))
        return d || (r.value = i), !0;
    }
    const o = s ? Number(n) < t.length : qe(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Bt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ge(a) && l && (o ? At(i, r) && oi(t, "set", n, i) : oi(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = qe(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && oi(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!kn(n) || !Bf.has(n)) && Mt(t, "has", n), i;
  }
  ownKeys(t) {
    return Mt(
      t,
      "iterate",
      Se(t) ? "length" : pa
    ), Reflect.ownKeys(t);
  }
}
class Vv extends Hf {
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
const Gv = /* @__PURE__ */ new jf(), Kv = /* @__PURE__ */ new Vv(), Wv = /* @__PURE__ */ new jf(!0);
const dc = (e) => e, Es = (e) => Reflect.getPrototypeOf(e);
function qv(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ge(a), s = $i(r), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, d = a[e](...i), u = n ? dc : t ? Wa : On;
    return !t && Mt(
      r,
      "iterate",
      l ? uc : pa
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
function As(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Yv(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Ge(r), o = /* @__PURE__ */ Ge(a);
      e || (At(a, o) && Mt(s, "get", a), Mt(s, "get", o));
      const { has: l } = Es(s), d = t ? dc : e ? Wa : On;
      if (l.call(s, a))
        return d(r.get(a));
      if (l.call(s, o))
        return d(r.get(o));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Mt(/* @__PURE__ */ Ge(a), "iterate", pa), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Ge(r), o = /* @__PURE__ */ Ge(a);
      return e || (At(a, o) && Mt(s, "has", a), Mt(s, "has", o)), a === o ? r.has(a) : r.has(a) || r.has(o);
    },
    forEach(a, r) {
      const s = this, o = s.__v_raw, l = /* @__PURE__ */ Ge(o), d = t ? dc : e ? Wa : On;
      return !e && Mt(l, "iterate", pa), o.forEach((u, h) => a.call(r, d(u), d(h), s));
    }
  };
  return vt(
    n,
    e ? {
      add: As("add"),
      set: As("set"),
      delete: As("delete"),
      clear: As("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ge(this), s = Es(r), o = /* @__PURE__ */ Ge(a), l = !t && !/* @__PURE__ */ mn(a) && !/* @__PURE__ */ gi(a) ? o : a;
        return s.has.call(r, l) || At(a, l) && s.has.call(r, a) || At(o, l) && s.has.call(r, o) || (r.add(l), oi(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ mn(r) && !/* @__PURE__ */ gi(r) && (r = /* @__PURE__ */ Ge(r));
        const s = /* @__PURE__ */ Ge(this), { has: o, get: l } = Es(s);
        let d = o.call(s, a);
        d || (a = /* @__PURE__ */ Ge(a), d = o.call(s, a));
        const u = l.call(s, a);
        return s.set(a, r), d ? At(r, u) && oi(s, "set", a, r) : oi(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ge(this), { has: s, get: o } = Es(r);
        let l = s.call(r, a);
        l || (a = /* @__PURE__ */ Ge(a), l = s.call(r, a)), o && o.call(r, a);
        const d = r.delete(a);
        return l && oi(r, "delete", a, void 0), d;
      },
      clear() {
        const a = /* @__PURE__ */ Ge(this), r = a.size !== 0, s = a.clear();
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
    n[a] = qv(a, e, t);
  }), n;
}
function Wc(e, t) {
  const n = Yv(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    qe(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Xv = {
  get: /* @__PURE__ */ Wc(!1, !1)
}, Zv = {
  get: /* @__PURE__ */ Wc(!1, !0)
}, Jv = {
  get: /* @__PURE__ */ Wc(!0, !1)
};
const Vf = /* @__PURE__ */ new WeakMap(), Gf = /* @__PURE__ */ new WeakMap(), Kf = /* @__PURE__ */ new WeakMap(), Qv = /* @__PURE__ */ new WeakMap();
function eg(e) {
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
function $t(e) {
  return /* @__PURE__ */ gi(e) ? e : qc(
    e,
    !1,
    Gv,
    Xv,
    Vf
  );
}
// @__NO_SIDE_EFFECTS__
function tg(e) {
  return qc(
    e,
    !1,
    Wv,
    Zv,
    Gf
  );
}
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  return qc(
    e,
    !0,
    Kv,
    Jv,
    Kf
  );
}
function qc(e, t, n, i, a) {
  if (!Ye(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = eg(Cv(e));
  if (s === 0)
    return e;
  const o = new Proxy(
    e,
    s === 2 ? i : n
  );
  return a.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function va(e) {
  return /* @__PURE__ */ gi(e) ? /* @__PURE__ */ va(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function gi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function mn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Yc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ge(t) : e;
}
function ng(e) {
  return !qe(e, "__v_skip") && Object.isExtensible(e) && Nf(e, "__v_skip", !0), e;
}
const On = (e) => Ye(e) ? /* @__PURE__ */ $t(e) : e, Wa = (e) => Ye(e) ? /* @__PURE__ */ Vr(e) : e;
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return qf(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Wf(e) {
  return qf(e, !0);
}
function qf(e, t) {
  return /* @__PURE__ */ Bt(e) ? e : new ig(e, t);
}
class ig {
  constructor(t, n) {
    this.dep = new Jo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ge(t), this._value = n ? t : On(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ mn(t) || /* @__PURE__ */ gi(t);
    t = i ? t : /* @__PURE__ */ Ge(t), At(t, n) && (this._rawValue = t, this._value = i ? t : On(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Bt(e) ? e.value : e;
}
function di(e) {
  return xe(e) ? e() : g(e);
}
const ag = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Bt(a) && !/* @__PURE__ */ Bt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Yf(e) {
  return /* @__PURE__ */ va(e) ? e : new Proxy(e, ag);
}
class rg {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Jo(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function sg(e) {
  return new rg(e);
}
class og {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Jo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Hr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    et !== this)
      return Df(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ff(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function lg(e, t, n = !1) {
  let i, a;
  return xe(e) ? i = e : (i = e.get, a = e.set), new og(i, a, n);
}
const ks = {}, Gs = /* @__PURE__ */ new WeakMap();
let ra;
function cg(e, t = !1, n = ra) {
  if (n) {
    let i = Gs.get(n);
    i || Gs.set(n, i = []), i.push(e);
  }
}
function ug(e, t, n = Ve) {
  const { immediate: i, deep: a, once: r, scheduler: s, augmentJob: o, call: l } = n, d = (F) => a ? F : /* @__PURE__ */ mn(F) || a === !1 || a === 0 ? li(F, 1) : li(F);
  let u, h, S, E, O = !1, A = !1;
  if (/* @__PURE__ */ Bt(e) ? (h = () => e.value, O = /* @__PURE__ */ mn(e)) : /* @__PURE__ */ va(e) ? (h = () => d(e), O = !0) : Se(e) ? (A = !0, O = e.some((F) => /* @__PURE__ */ va(F) || /* @__PURE__ */ mn(F)), h = () => e.map((F) => {
    if (/* @__PURE__ */ Bt(F))
      return F.value;
    if (/* @__PURE__ */ va(F))
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
    const F = ra;
    ra = u;
    try {
      return l ? l(e, 3, [E]) : e(E);
    } finally {
      ra = F;
    }
  } : h = gn, t && a) {
    const F = h, le = a === !0 ? 1 / 0 : a;
    h = () => li(F(), le);
  }
  const L = Mv(), R = () => {
    u.stop(), L && L.active && Hc(L.effects, u);
  };
  if (r && t) {
    const F = t;
    t = (...le) => {
      const ne = F(...le);
      return R(), ne;
    };
  }
  let M = A ? new Array(e.length).fill(ks) : ks;
  const G = (F) => {
    if (!(!(u.flags & 1) || !u.dirty && !F))
      if (t) {
        const le = u.run();
        if (F || a || O || (A ? le.some((ne, P) => At(ne, M[P])) : At(le, M))) {
          S && S();
          const ne = ra;
          ra = u;
          try {
            const P = [
              le,
              // pass undefined as the old value when it's changed for the first time
              M === ks ? void 0 : A && M[0] === ks ? [] : M,
              E
            ];
            M = le, l ? l(t, 3, P) : (
              // @ts-expect-error
              t(...P)
            );
          } finally {
            ra = ne;
          }
        }
      } else
        u.run();
  };
  return o && o(G), u = new If(h), u.scheduler = s ? () => s(G, !1) : G, E = (F) => cg(F, !1, u), S = u.onStop = () => {
    const F = Gs.get(u);
    if (F) {
      if (l)
        l(F, 4);
      else
        for (const le of F) le();
      Gs.delete(u);
    }
  }, t ? i ? G(!0) : M = u.run() : s ? s(G.bind(null, !0), !0) : u.run(), R.pause = u.pause.bind(u), R.resume = u.resume.bind(u), R.stop = R, R;
}
function li(e, t = 1 / 0, n) {
  if (t <= 0 || !Ye(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Bt(e))
    li(e.value, t, n);
  else if (Se(e))
    for (let i = 0; i < e.length; i++)
      li(e[i], t, n);
  else if (ma(e) || $i(e))
    e.forEach((i) => {
      li(i, t, n);
    });
  else if (Of(e)) {
    for (const i in e)
      li(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && li(e[i], t, n);
  }
  return e;
}
function os(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    el(a, t, n);
  }
}
function bn(e, t, n, i) {
  if (xe(e)) {
    const a = os(e, t, n, i);
    return a && Af(a) && a.catch((r) => {
      el(r, t, n);
    }), a;
  }
  if (Se(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(bn(e[r], t, n, i));
    return a;
  }
}
function el(e, t, n, i = !0) {
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
      pi(), os(r, null, 10, [
        e,
        l,
        d
      ]), vi();
      return;
    }
  }
  dg(e, n, a, i, s);
}
function dg(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Kt = [];
let Un = -1;
const Ua = [];
let Pi = null, $a = 0;
const Xf = /* @__PURE__ */ Promise.resolve();
let Ks = null;
function pn(e) {
  const t = Ks || Xf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function fg(e) {
  let t = Un + 1, n = Kt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Kt[i], r = Gr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Xc(e) {
  if (!(e.flags & 1)) {
    const t = Gr(e), n = Kt[Kt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Gr(n) ? Kt.push(e) : Kt.splice(fg(t), 0, e), e.flags |= 1, Zf();
  }
}
function Zf() {
  Ks || (Ks = Xf.then(eh));
}
function Jf(e) {
  if (!Se(e))
    Pi && e.id === -1 ? Pi.splice($a + 1, 0, e) : e.flags & 1 || (Ua.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ua.push(e[t]);
  Zf();
}
function Mu(e, t, n = Un + 1) {
  for (; n < Kt.length; n++) {
    const i = Kt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Kt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Qf(e) {
  if (Ua.length) {
    const t = [...new Set(Ua)].sort(
      (n, i) => Gr(n) - Gr(i)
    );
    if (Ua.length = 0, Pi) {
      for (let n = 0; n < t.length; n++)
        Pi.push(t[n]);
      return;
    }
    for (Pi = t, $a = 0; $a < Pi.length; $a++) {
      const n = Pi[$a];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Pi = null, $a = 0;
  }
}
const Gr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function eh(e) {
  try {
    for (Un = 0; Un < Kt.length; Un++) {
      const t = Kt[Un];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), os(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Un < Kt.length; Un++) {
      const t = Kt[Un];
      t && (t.flags &= -2);
    }
    Un = -1, Kt.length = 0, Qf(), Ks = null, (Kt.length || Ua.length) && eh();
  }
}
let Nt = null, tl = null;
function Ws(e) {
  const t = Nt;
  return Nt = e, tl = e && e.type.__scopeId || null, t;
}
function hg(e) {
  tl = e;
}
function pg() {
  tl = null;
}
const vg = (e) => Oe;
function Oe(e, t = Nt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Js(-1);
    const r = Ws(t), s = fi.length;
    let o;
    try {
      o = e(...a);
    } finally {
      for (let l = fi.length; l > s; l--) iu();
      Ws(r), i._d && Js(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function We(e, t) {
  if (Nt === null)
    return e;
  const n = ol(Nt), i = e.dirs || (e.dirs = []);
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
function Qi(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const o = a[s];
    r && (o.oldValue = r[s].value);
    let l = o.dir[i];
    l && (pi(), bn(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), vi());
  }
}
function fn(e, t) {
  if (zt) {
    let n = zt.provides;
    const i = zt.parent && zt.parent.provides;
    i === n && (n = zt.provides = Object.create(i)), n[e] = t;
  }
}
function Ft(e, t, n = !1) {
  const i = ya();
  if (i || Ha) {
    let a = Ha ? Ha._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && xe(t) ? t.call(i && i.proxy) : t;
  }
}
const gg = /* @__PURE__ */ Symbol.for("v-scx"), mg = () => Ft(gg);
function bg(e, t) {
  return nl(e, null, t);
}
function yg(e, t) {
  return nl(
    e,
    null,
    { flush: "sync" }
  );
}
function pt(e, t, n) {
  return nl(e, t, n);
}
function nl(e, t, n = Ve) {
  const { immediate: i, deep: a, flush: r, once: s } = n, o = vt({}, n), l = t && i || !t && r !== "post";
  let d;
  if (Zr) {
    if (r === "sync") {
      const E = mg();
      d = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!l) {
      const E = () => {
      };
      return E.stop = gn, E.resume = gn, E.pause = gn, E;
    }
  }
  const u = zt;
  o.call = (E, O, A) => bn(E, u, O, A);
  let h = !1;
  r === "post" ? o.scheduler = (E) => {
    Gt(E, u && u.suspense);
  } : r !== "sync" && (h = !0, o.scheduler = (E, O) => {
    O ? E() : Xc(E);
  }), o.augmentJob = (E) => {
    t && (E.flags |= 4), h && (E.flags |= 2, u && (E.id = u.uid, E.i = u));
  };
  const S = ug(e, t, o);
  return Zr && (d ? d.push(S) : l && S()), S;
}
function _g(e, t, n) {
  const i = this.proxy, a = tt(e) ? e.includes(".") ? th(i, e) : () => i[e] : e.bind(i, i);
  let r;
  xe(t) ? r = t : (r = t.handler, n = t);
  const s = us(this), o = nl(a, r.bind(i), n);
  return s(), o;
}
function th(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Li = /* @__PURE__ */ new WeakMap(), nh = /* @__PURE__ */ Symbol("_vte"), il = (e) => e.__isTeleport, oa = (e) => e && (e.disabled || e.disabled === ""), wg = (e) => e && (e.defer || e.defer === ""), Fu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, zu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, fc = (e, t) => {
  const n = e && e.to;
  return tt(n) ? t ? t(n) : null : n;
}, Sg = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, s, o, l, d) {
    const {
      mc: u,
      pc: h,
      pbc: S,
      o: { insert: E, querySelector: O, createText: A, createComment: L, parentNode: R }
    } = d, M = oa(t.props);
    let { dynamicChildren: G } = t;
    const F = (P, ce, X) => {
      P.shapeFlag & 16 && u(
        P.children,
        ce,
        X,
        a,
        r,
        s,
        o,
        l
      );
    }, le = (P = t) => {
      const ce = oa(P.props), X = P.target = fc(P.props, O), ae = hc(X, P, A, E);
      X && (s !== "svg" && Fu(X) ? s = "svg" : s !== "mathml" && zu(X) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(X), ce || (F(P, X, ae), _r(P, !1)));
    }, ne = (P) => {
      const ce = () => {
        if (Li.get(P) === ce) {
          if (Li.delete(P), oa(P.props)) {
            const X = R(P.el) || n;
            F(P, X, P.anchor), _r(P, !0);
          }
          le(P);
        }
      };
      Li.set(P, ce), Gt(ce, r);
    };
    if (e == null) {
      const P = t.el = A(""), ce = t.anchor = A("");
      if (E(P, n, i), E(ce, n, i), wg(t.props) || r && r.pendingBranch) {
        ne(t);
        return;
      }
      M && (F(t, n, ce), _r(t, !0)), le();
    } else {
      t.el = e.el;
      const P = t.anchor = e.anchor, ce = Li.get(e);
      if (ce) {
        ce.flags |= 8, Li.delete(e), ne(t);
        return;
      }
      t.targetStart = e.targetStart;
      const X = t.target = e.target, ae = t.targetAnchor = e.targetAnchor, me = oa(e.props), J = me ? n : X, te = me ? P : ae;
      if (s === "svg" || Fu(X) ? s = "svg" : (s === "mathml" || zu(X)) && (s = "mathml"), G ? (S(
        e.dynamicChildren,
        G,
        J,
        a,
        r,
        s,
        o
      ), nu(e, t, !0)) : l || h(
        e,
        t,
        J,
        te,
        a,
        r,
        s,
        o,
        !1
      ), M)
        me ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Os(
          t,
          n,
          P,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const D = fc(t.props, O);
        D && (t.target = D, Os(
          t,
          D,
          null,
          d,
          0
        ));
      } else me && Os(
        t,
        X,
        ae,
        d,
        1
      );
      _r(t, M);
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
    } = e, E = oa(S), O = r || !E, A = Li.get(e);
    if (A && (A.flags |= 8, Li.delete(e)), h && (a(d), a(u)), r && a(l), !A && (E || h) && s & 16)
      for (let L = 0; L < o.length; L++) {
        const R = o[L];
        i(
          R,
          t,
          n,
          O,
          !!R.dynamicChildren
        );
      }
  },
  move: Os,
  hydrate: Cg
};
function Os(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: s, anchor: o, shapeFlag: l, children: d, props: u } = e, h = r === 2;
  if (h && i(s, t, n), !Li.has(e) && (!h || oa(u)) && l & 16)
    for (let S = 0; S < d.length; S++)
      a(
        d[S],
        t,
        n,
        2
      );
  h && i(o, t, n);
}
function Cg(e, t, n, i, a, r, {
  o: { nextSibling: s, parentNode: o, querySelector: l, insert: d, createText: u }
}, h) {
  function S(L, R) {
    let M = R;
    for (; M; ) {
      if (M && M.nodeType === 8) {
        if (M.data === "teleport start anchor")
          t.targetStart = M;
        else if (M.data === "teleport anchor") {
          t.targetAnchor = M, L._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      M = s(M);
    }
  }
  function E(L, R) {
    R.anchor = h(
      s(L),
      R,
      o(L),
      n,
      i,
      a,
      r
    );
  }
  const O = t.target = fc(
    t.props,
    l
  ), A = oa(t.props);
  if (O) {
    const L = O._lpa || O.firstChild;
    t.shapeFlag & 16 && (A ? (E(e, t), S(O, L), t.targetAnchor || hc(
      O,
      t,
      u,
      d,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(e) === O ? e : null
    )) : (t.anchor = s(e), S(O, L), t.targetAnchor || hc(O, t, u, d), h(
      L && s(L),
      t,
      O,
      n,
      i,
      a,
      r
    ))), _r(t, A);
  } else A && t.shapeFlag & 16 && (E(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const ih = Sg;
function _r(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function hc(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[nh] = s, e && (i(r, e, a), i(s, e, a)), s;
}
const hn = /* @__PURE__ */ Symbol("_leaveCb"), dr = /* @__PURE__ */ Symbol("_enterCb");
function Tg() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ji(() => {
    e.isMounted = !0;
  }), qa(() => {
    e.isUnmounting = !0;
  }), e;
}
const cn = [Function, Array], ah = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: cn,
  onEnter: cn,
  onAfterEnter: cn,
  onEnterCancelled: cn,
  // leave
  onBeforeLeave: cn,
  onLeave: cn,
  onAfterLeave: cn,
  onLeaveCancelled: cn,
  // appear
  onBeforeAppear: cn,
  onAppear: cn,
  onAfterAppear: cn,
  onAppearCancelled: cn
}, rh = (e) => {
  const t = e.subTree;
  return t.component ? rh(t.component) : t;
}, Eg = {
  name: "BaseTransition",
  props: ah,
  setup(e, { slots: t }) {
    const n = ya(), i = Tg();
    return () => {
      const a = t.default && lh(t.default(), !0), r = a && a.length ? sh(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? H() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ Ge(e), { mode: o } = s;
      if (i.isLeaving)
        return Nl(r);
      const l = qs(r);
      if (!l)
        return Nl(r);
      let d = pc(
        l,
        s,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      l.type !== Ot && Kr(l, d);
      let u = n.subTree && qs(n.subTree);
      if (u && u.type !== Ot && !la(u, l) && rh(n).type !== Ot) {
        let h = pc(
          u,
          s,
          i,
          n
        );
        if (Kr(u, h), o === "out-in" && l.type !== Ot)
          return i.isLeaving = !0, h.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, Nl(r);
        o === "in-out" && l.type !== Ot ? h.delayLeave = (S, E, O) => {
          const A = oh(
            i,
            u
          );
          A[String(u.key)] = u, S[hn] = () => {
            E(), S[hn] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            O(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function sh(e) {
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
const Ag = Eg;
function oh(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function pc(e, t, n, i, a) {
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
    onAfterLeave: O,
    onLeaveCancelled: A,
    onBeforeAppear: L,
    onAppear: R,
    onAfterAppear: M,
    onAppearCancelled: G
  } = t, F = String(e.key), le = oh(n, e), ne = (X, ae) => {
    X && bn(
      X,
      i,
      9,
      ae
    );
  }, P = (X, ae) => {
    const me = ae[1];
    ne(X, ae), Se(X) ? X.every((J) => J.length <= 1) && me() : X.length <= 1 && me();
  }, ce = {
    mode: s,
    persisted: o,
    beforeEnter(X) {
      let ae = l;
      if (!n.isMounted)
        if (r)
          ae = L || l;
        else
          return;
      X[hn] && X[hn](
        !0
        /* cancelled */
      );
      const me = le[F];
      me && la(e, me) && me.el[hn] && me.el[hn](), ne(ae, [X]);
    },
    enter(X) {
      if (le[F] === e) return;
      let ae = d, me = u, J = h;
      if (!n.isMounted)
        if (r)
          ae = R || d, me = M || u, J = G || h;
        else
          return;
      let te = !1;
      X[dr] = ($) => {
        te || (te = !0, $ ? ne(J, [X]) : ne(me, [X]), ce.delayedLeave && ce.delayedLeave(), X[dr] = void 0);
      };
      const D = X[dr].bind(null, !1);
      ae ? P(ae, [X, D]) : D();
    },
    leave(X, ae) {
      const me = String(e.key);
      if (X[dr] && X[dr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return ae();
      ne(S, [X]);
      let J = !1;
      X[hn] = (D) => {
        J || (J = !0, ae(), D ? ne(A, [X]) : ne(O, [X]), X[hn] = void 0, le[me] === e && delete le[me]);
      };
      const te = X[hn].bind(null, !1);
      le[me] = e, E ? P(E, [X, te]) : te();
    },
    clone(X) {
      const ae = pc(
        X,
        t,
        n,
        i,
        a
      );
      return a && a(ae), ae;
    }
  };
  return ce;
}
function Nl(e) {
  if (al(e))
    return e = Bi(e), e.children = null, e;
}
function qs(e) {
  if (!al(e))
    return il(e.type) && e.children ? sh(e.children) : e;
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
function Kr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Kr(
      il(n.type) && qs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function lh(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const o = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === de ? (s.patchFlag & 128 && a++, i = i.concat(
      lh(s.children, t, o)
    )) : (t || s.type !== Ot) && i.push(o != null ? Bi(s, { key: o }) : s);
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
function ch(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function kg(e) {
  const t = ya(), n = /* @__PURE__ */ Wf(null);
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
function Uu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ys = /* @__PURE__ */ new WeakMap();
function Nr(e, t, n, i, a = !1) {
  if (Se(e)) {
    e.forEach(
      (A, L) => Nr(
        A,
        t && (Se(t) ? t[L] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Ba(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Nr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? ol(i.component) : i.el, s = a ? null : r, { i: o, r: l } = e, d = t && t.r, u = o.refs === Ve ? o.refs = {} : o.refs, h = o.setupState, S = /* @__PURE__ */ Ge(h), E = h === Ve ? Ef : (A) => Uu(u, A) ? !1 : qe(S, A), O = (A, L) => !(L && Uu(u, L));
  if (d != null && d !== l) {
    if (Bu(t), tt(d))
      u[d] = null, E(d) && (h[d] = null);
    else if (/* @__PURE__ */ Bt(d)) {
      const A = t;
      O(d, A.k) && (d.value = null), A.k && (u[A.k] = null);
    }
  }
  if (xe(l))
    os(l, o, 12, [s, u]);
  else {
    const A = tt(l), L = /* @__PURE__ */ Bt(l);
    if (A || L) {
      const R = () => {
        if (e.f) {
          const M = A ? E(l) ? h[l] : u[l] : O() || !e.k ? l.value : u[e.k];
          if (a)
            Se(M) && Hc(M, r);
          else if (Se(M))
            M.includes(r) || M.push(r);
          else if (A)
            u[l] = [r], E(l) && (h[l] = u[l]);
          else {
            const G = [r];
            O(l, e.k) && (l.value = G), e.k && (u[e.k] = G);
          }
        } else A ? (u[l] = s, E(l) && (h[l] = s)) : L && (O(l, e.k) && (l.value = s), e.k && (u[e.k] = s));
      };
      if (s) {
        const M = () => {
          R(), Ys.delete(e);
        };
        M.id = -1, Ys.set(e, M), Gt(M, n);
      } else
        Bu(e), R();
    }
  }
}
function Bu(e) {
  const t = Ys.get(e);
  t && (t.flags |= 8, Ys.delete(e));
}
Zo().requestIdleCallback;
Zo().cancelIdleCallback;
const Ba = (e) => !!e.type.__asyncLoader, al = (e) => e.type.__isKeepAlive;
function Og(e, t) {
  uh(e, "a", t);
}
function Ng(e, t) {
  uh(e, "da", t);
}
function uh(e, t, n = zt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (rl(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      al(a.parent.vnode) && xg(i, t, n, a), a = a.parent;
  }
}
function xg(e, t, n, i) {
  const a = rl(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  ls(() => {
    Hc(i[t], a);
  }, n);
}
function rl(e, t, n = zt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      pi();
      const o = us(n), l = bn(t, n, e, s);
      return o(), vi(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const yi = (e) => (t, n = zt) => {
  (!Zr || e === "sp") && rl(e, (...i) => t(...i), n);
}, dh = yi("bm"), ji = yi("m"), fh = yi(
  "bu"
), Lg = yi("u"), qa = yi(
  "bum"
), ls = yi("um"), Rg = yi(
  "sp"
), Ig = yi("rtg"), Pg = yi("rtc");
function Dg(e, t = zt) {
  rl("ec", e, t);
}
const Zc = "components", $g = "directives";
function Ue(e, t) {
  return Qc(Zc, e, !0, t) || e;
}
const hh = /* @__PURE__ */ Symbol.for("v-ndc");
function Jc(e) {
  return tt(e) ? Qc(Zc, e, !1) || e : e || hh;
}
function Hu(e) {
  return Qc($g, e);
}
function Qc(e, t, n = !0, i = !1) {
  const a = Nt || zt;
  if (a) {
    const r = a.type;
    if (e === Zc) {
      const o = bm(
        r,
        !1
      );
      if (o && (o === t || o === Ut(t) || o === Yo(Ut(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      ju(a[e] || r[e], t) || // global registration
      ju(a.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function ju(e, t) {
  return e && (e[t] || e[Ut(t)] || e[Yo(Ut(t))]);
}
function Me(e, t, n, i) {
  let a;
  const r = n, s = Se(e);
  if (s || tt(e)) {
    const o = s && /* @__PURE__ */ va(e);
    let l = !1, d = !1;
    o && (l = !/* @__PURE__ */ mn(e), d = /* @__PURE__ */ gi(e), e = Qo(e)), a = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      a[u] = t(
        l ? d ? Wa(On(e[u])) : On(e[u]) : e[u],
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
  if (n == null && (n = {}), Nt.ce || Nt.parent && Ba(Nt.parent) && Nt.parent.ce) {
    const d = n, u = Object.keys(d).length > 0;
    return t !== "default" && (d.name = t), b(), De(
      de,
      null,
      [_e("slot", d, i && i())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const o = fi.length;
  b();
  let l;
  try {
    const d = s && ph(s(n)), u = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    d && d.key;
    l = De(
      de,
      {
        key: (u && !kn(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!d && i ? "_fb" : "")
      },
      d || (i ? i() : []),
      d && e._ === 1 ? 64 : -2
    );
  } catch (d) {
    for (let u = fi.length; u > o; u--) iu();
    throw d;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function ph(e) {
  return e.some((t) => qr(t) ? !(t.type === Ot || t.type === de && !ph(t.children)) : !0) ? e : null;
}
const vc = (e) => e ? $h(e) ? ol(e) : vc(e.parent) : null, xr = (
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
    $parent: (e) => vc(e.parent),
    $root: (e) => vc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => mh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Xc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = pn.bind(e.proxy)),
    $watch: (e) => _g.bind(e)
  })
), xl = (e, t) => e !== Ve && !e.__isScriptSetup && qe(e, t), Mg = {
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
        if (xl(i, t))
          return s[t] = 1, i[t];
        if (a !== Ve && qe(a, t))
          return s[t] = 2, a[t];
        if (qe(r, t))
          return s[t] = 3, r[t];
        if (n !== Ve && qe(n, t))
          return s[t] = 4, n[t];
        gc && (s[t] = 0);
      }
    }
    const d = xr[t];
    let u, h;
    if (d)
      return t === "$attrs" && Mt(e.attrs, "get", ""), d(e);
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
    return xl(a, t) ? (a[t] = n, !0) : i !== Ve && qe(i, t) ? (i[t] = n, !0) : qe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: s }
  }, o) {
    let l;
    return !!(n[o] || e !== Ve && o[0] !== "$" && qe(e, o) || xl(t, o) || qe(r, o) || qe(i, o) || qe(xr, o) || qe(a.config.globalProperties, o) || (l = s.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : qe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Fg() {
  return vh().slots;
}
function zg() {
  return vh().attrs;
}
function vh(e) {
  const t = ya();
  return t.setupContext || (t.setupContext = Fh(t));
}
function Xs(e) {
  return Se(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ug(e, t) {
  return !e || !t ? e || t : Se(e) && Se(t) ? e.concat(t) : vt({}, Xs(e), Xs(t));
}
let gc = !0;
function Bg(e) {
  const t = mh(e), n = e.proxy, i = e.ctx;
  gc = !1, t.beforeCreate && Vu(t.beforeCreate, e, "bc");
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
    updated: O,
    activated: A,
    deactivated: L,
    beforeDestroy: R,
    beforeUnmount: M,
    destroyed: G,
    unmounted: F,
    render: le,
    renderTracked: ne,
    renderTriggered: P,
    errorCaptured: ce,
    serverPrefetch: X,
    // public API
    expose: ae,
    inheritAttrs: me,
    // assets
    components: J,
    directives: te,
    filters: D
  } = t;
  if (d && Hg(d, i, null), s)
    for (const re in s) {
      const ie = s[re];
      xe(ie) && (i[re] = ie.bind(n));
    }
  if (a) {
    const re = a.call(n, n);
    Ye(re) && (e.data = /* @__PURE__ */ $t(re));
  }
  if (gc = !0, r)
    for (const re in r) {
      const ie = r[re], he = xe(ie) ? ie.bind(n, n) : xe(ie.get) ? ie.get.bind(n, n) : gn, fe = !xe(ie) && xe(ie.set) ? ie.set.bind(n) : gn, Te = q({
        get: he,
        set: fe
      });
      Object.defineProperty(i, re, {
        enumerable: !0,
        configurable: !0,
        get: () => Te.value,
        set: (ve) => Te.value = ve
      });
    }
  if (o)
    for (const re in o)
      gh(o[re], i, n, re);
  if (l) {
    const re = xe(l) ? l.call(n) : l;
    Reflect.ownKeys(re).forEach((ie) => {
      fn(ie, re[ie]);
    });
  }
  u && Vu(u, e, "c");
  function Y(re, ie) {
    Se(ie) ? ie.forEach((he) => re(he.bind(n))) : ie && re(ie.bind(n));
  }
  if (Y(dh, h), Y(ji, S), Y(fh, E), Y(Lg, O), Y(Og, A), Y(Ng, L), Y(Dg, ce), Y(Pg, ne), Y(Ig, P), Y(qa, M), Y(ls, F), Y(Rg, X), Se(ae))
    if (ae.length) {
      const re = e.exposed || (e.exposed = {});
      ae.forEach((ie) => {
        Object.defineProperty(re, ie, {
          get: () => n[ie],
          set: (he) => n[ie] = he,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  le && e.render === gn && (e.render = le), me != null && (e.inheritAttrs = me), J && (e.components = J), te && (e.directives = te), X && ch(e);
}
function Hg(e, t, n = gn) {
  Se(e) && (e = mc(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Ye(a) ? "default" in a ? r = Ft(
      a.from || i,
      a.default,
      !0
    ) : r = Ft(a.from || i) : r = Ft(a), /* @__PURE__ */ Bt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[i] = r;
  }
}
function Vu(e, t, n) {
  bn(
    Se(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function gh(e, t, n, i) {
  let a = i.includes(".") ? th(n, i) : () => n[i];
  if (tt(e)) {
    const r = t[e];
    xe(r) && pt(a, r);
  } else if (xe(e))
    pt(a, e.bind(n));
  else if (Ye(e))
    if (Se(e))
      e.forEach((r) => gh(r, t, n, i));
    else {
      const r = xe(e.handler) ? e.handler.bind(n) : t[e.handler];
      xe(r) && pt(a, r, e);
    }
}
function mh(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (d) => Zs(l, d, s, !0)
  ), Zs(l, t, s)), Ye(t) && r.set(t, l), l;
}
function Zs(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && Zs(e, r, n, !0), a && a.forEach(
    (s) => Zs(e, s, n, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const o = jg[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const jg = {
  data: Gu,
  props: Ku,
  emits: Ku,
  // objects
  methods: wr,
  computed: wr,
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
  components: wr,
  directives: wr,
  // watch
  watch: Gg,
  // provide / inject
  provide: Gu,
  inject: Vg
};
function Gu(e, t) {
  return t ? e ? function() {
    return vt(
      xe(e) ? e.call(this, this) : e,
      xe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Vg(e, t) {
  return wr(mc(e), mc(t));
}
function mc(e) {
  if (Se(e)) {
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
function wr(e, t) {
  return e ? vt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ku(e, t) {
  return e ? Se(e) && Se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : vt(
    /* @__PURE__ */ Object.create(null),
    Xs(e),
    Xs(t ?? {})
  ) : t;
}
function Gg(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = vt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Vt(e[i], t[i]);
  return n;
}
function bh() {
  return {
    app: null,
    config: {
      isNativeTag: Ef,
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
let Kg = 0;
function Wg(e, t) {
  return function(i, a = null) {
    xe(i) || (i = vt({}, i)), a != null && !Ye(a) && (a = null);
    const r = bh(), s = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const d = r.app = {
      _uid: Kg++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: _m,
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
          const E = d._ceVNode || _e(i, a);
          return E.appContext = r, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(E, u, S), l = !0, d._container = u, u.__vue_app__ = d, ol(E.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (bn(
          o,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, h) {
        return r.provides[u] = h, d;
      },
      runWithContext(u) {
        const h = Ha;
        Ha = d;
        try {
          return u();
        } finally {
          Ha = h;
        }
      }
    };
    return d;
  };
}
let Ha = null;
function yh(e, t, n = Ve) {
  const i = ya(), a = Ut(t), r = bi(t), s = _h(e, a), o = sg((l, d) => {
    let u, h = Ve, S;
    return yg(() => {
      const E = e[a];
      At(u, E) && (u = E, d());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(E) {
        const O = n.set ? n.set(E) : E;
        if (!At(O, u) && !(h !== Ve && At(E, h)))
          return;
        const A = i.vnode.props, L = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        L || (u = E, d()), i.emit(`update:${t}`, O), At(E, h) && (At(E, O) && !At(O, S) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        L && h !== Ve && !At(O, u)) && d(), h = E, S = O;
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
const _h = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ut(t)}Modifiers`] || e[`${bi(t)}Modifiers`];
function qg(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ve;
  let a = n;
  const r = t.startsWith("update:"), s = r && _h(i, t.slice(7));
  s && (s.trim && (a = n.map((u) => tt(u) ? u.trim() : u)), s.number && (a = a.map(Xo)));
  let o, l = i[o = Tl(t)] || // also try camelCase event handler (#2249)
  i[o = Tl(Ut(t))];
  !l && r && (l = i[o = Tl(bi(t))]), l && bn(
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
    e.emitted[o] = !0, bn(
      d,
      e,
      6,
      a
    );
  }
}
const Yg = /* @__PURE__ */ new WeakMap();
function wh(e, t, n = !1) {
  const i = n ? Yg : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, o = !1;
  if (!xe(e)) {
    const l = (d) => {
      const u = wh(d, t, !0);
      u && (o = !0, vt(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (Ye(e) && i.set(e, null), null) : (Se(r) ? r.forEach((l) => s[l] = null) : vt(s, r), Ye(e) && i.set(e, s), s);
}
function sl(e, t) {
  return !e || !Ko(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), qe(e, t[0].toLowerCase() + t.slice(1)) || qe(e, bi(t)) || qe(e, t));
}
function Wu(e) {
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
    ctx: O,
    inheritAttrs: A
  } = e, L = Ws(e);
  let R, M;
  try {
    if (n.shapeFlag & 4) {
      const F = a || i, le = F;
      R = Gn(
        d.call(
          le,
          F,
          u,
          h,
          E,
          S,
          O
        )
      ), M = o;
    } else {
      const F = t;
      R = Gn(
        F.length > 1 ? F(
          h,
          { attrs: o, slots: s, emit: l }
        ) : F(
          h,
          null
        )
      ), M = t.props ? o : Xg(o);
    }
  } catch (F) {
    fi.length = 0, el(F, e, 1), R = _e(Ot);
  }
  let G = R;
  if (M && A !== !1) {
    const F = Object.keys(M), { shapeFlag: le } = G;
    F.length && le & 7 && (r && F.some(Wo) && (M = Zg(
      M,
      r
    )), G = Bi(G, M, !1, !0));
  }
  if (n.dirs && (G = Bi(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const F = il(G.type) && qs(G) || G;
    Kr(F, n.transition);
  }
  return R = G, Ws(L), R;
}
const Xg = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ko(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Zg = (e, t) => {
  const n = {};
  for (const i in e)
    (!Wo(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Jg(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: s, children: o, patchFlag: l } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? qu(i, s, d) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const S = u[h];
        if (Sh(s, i, S) && !sl(d, S))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : i === s ? !1 : i ? s ? qu(i, s, d) : !0 : !!s;
  return !1;
}
function qu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (Sh(t, e, r) && !sl(n, r))
      return !0;
  }
  return !1;
}
function Sh(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Ye(i) && Ye(a) ? !Ui(i, a) : i !== a;
}
function Qg({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Ch = {}, Th = () => Object.create(Ch), Eh = (e) => Object.getPrototypeOf(e) === Ch;
function em(e, t, n, i = !1) {
  const a = {}, r = Th();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ah(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ tg(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function tm(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, o = /* @__PURE__ */ Ge(a), [l] = e.propsOptions;
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
        if (sl(e.emitsOptions, S))
          continue;
        const E = t[S];
        if (l)
          if (qe(r, S))
            E !== r[S] && (r[S] = E, d = !0);
          else {
            const O = Ut(S);
            a[O] = bc(
              l,
              o,
              O,
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
    Ah(e, t, a, r) && (d = !0);
    let u;
    for (const h in o)
      (!t || // for camelCase
      !qe(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = bi(h)) === h || !qe(t, u))) && (l ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[h] = bc(
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
function Ah(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (Ar(l))
        continue;
      const d = t[l];
      let u;
      a && qe(a, u = Ut(l)) ? !r || !r.includes(u) ? n[u] = d : (o || (o = {}))[u] = d : sl(e.emitsOptions, l) || (!(l in i) || d !== i[l]) && (i[l] = d, s = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ Ge(n), d = o || Ve;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      n[h] = bc(
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
function bc(e, t, n, i, a, r) {
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
          const u = us(a);
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
const nm = /* @__PURE__ */ new WeakMap();
function kh(e, t, n = !1) {
  const i = n ? nm : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, o = [];
  let l = !1;
  if (!xe(e)) {
    const u = (h) => {
      l = !0;
      const [S, E] = kh(h, t, !0);
      vt(s, S), E && o.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l)
    return Ye(e) && i.set(e, za), za;
  if (Se(r))
    for (let u = 0; u < r.length; u++) {
      const h = Ut(r[u]);
      Yu(h) && (s[h] = Ve);
    }
  else if (r)
    for (const u in r) {
      const h = Ut(u);
      if (Yu(h)) {
        const S = r[u], E = s[h] = Se(S) || xe(S) ? { type: S } : vt({}, S), O = E.type;
        let A = !1, L = !0;
        if (Se(O))
          for (let R = 0; R < O.length; ++R) {
            const M = O[R], G = xe(M) && M.name;
            if (G === "Boolean") {
              A = !0;
              break;
            } else G === "String" && (L = !1);
          }
        else
          A = xe(O) && O.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = A, E[
          1
          /* shouldCastTrue */
        ] = L, (A || qe(E, "default")) && o.push(h);
      }
    }
  const d = [s, o];
  return Ye(e) && i.set(e, d), d;
}
function Yu(e) {
  return e[0] !== "$" && !Ar(e);
}
const eu = (e) => e === "_" || e === "_ctx" || e === "$stable", tu = (e) => Se(e) ? e.map(Gn) : [Gn(e)], im = (e, t, n) => {
  if (t._n)
    return t;
  const i = Oe((...a) => tu(t(...a)), n);
  return i._c = !1, i;
}, Oh = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (eu(a)) continue;
    const r = e[a];
    if (xe(r))
      t[a] = im(a, r, i);
    else if (r != null) {
      const s = tu(r);
      t[a] = () => s;
    }
  }
}, Nh = (e, t) => {
  const n = tu(t);
  e.slots.default = () => n;
}, xh = (e, t, n) => {
  for (const i in t)
    (n || !eu(i)) && (e[i] = t[i]);
}, am = (e, t, n) => {
  const i = e.slots = Th();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (xh(i, t, n), n && Nf(i, "_", a, !0)) : Oh(t, i);
  } else t && Nh(e, t);
}, rm = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, s = Ve;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : xh(a, t, n) : (r = !t.$stable, Oh(t, a)), s = t;
  } else t && (Nh(e, t), s = { default: 1 });
  if (r)
    for (const o in a)
      !eu(o) && s[o] == null && delete a[o];
}, Gt = um;
function sm(e) {
  return om(e);
}
function om(e, t) {
  const n = Zo();
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
    setScopeId: E = gn,
    insertStaticContent: O
  } = e, A = (v, C, k, N = null, x = null, z = null, W = void 0, V = null, Q = !!C.dynamicChildren) => {
    if (v === C)
      return;
    v && !la(v, C) && (N = lt(v), ve(v, x, z, !0), v = null), C.patchFlag === -2 && (Q = !1, C.dynamicChildren = null);
    const { type: j, ref: be, shapeFlag: oe } = C;
    switch (j) {
      case cs:
        L(v, C, k, N);
        break;
      case Ot:
        R(v, C, k, N);
        break;
      case Us:
        v == null && M(C, k, N, W);
        break;
      case de:
        J(
          v,
          C,
          k,
          N,
          x,
          z,
          W,
          V,
          Q
        );
        break;
      default:
        oe & 1 ? le(
          v,
          C,
          k,
          N,
          x,
          z,
          W,
          V,
          Q
        ) : oe & 6 ? te(
          v,
          C,
          k,
          N,
          x,
          z,
          W,
          V,
          Q
        ) : (oe & 64 || oe & 128) && j.process(
          v,
          C,
          k,
          N,
          x,
          z,
          W,
          V,
          Q,
          on
        );
    }
    be != null && x ? Nr(be, v && v.ref, z, C || v, !C) : be == null && v && v.ref != null && Nr(v.ref, null, z, v, !0);
  }, L = (v, C, k, N) => {
    if (v == null)
      i(
        C.el = o(C.children),
        k,
        N
      );
    else {
      const x = C.el = v.el;
      C.children !== v.children && d(x, C.children);
    }
  }, R = (v, C, k, N) => {
    v == null ? i(
      C.el = l(C.children || ""),
      k,
      N
    ) : C.el = v.el;
  }, M = (v, C, k, N) => {
    [v.el, v.anchor] = O(
      v.children,
      C,
      k,
      N,
      v.el,
      v.anchor
    );
  }, G = ({ el: v, anchor: C }, k, N) => {
    let x;
    for (; v && v !== C; )
      x = S(v), i(v, k, N), v = x;
    i(C, k, N);
  }, F = ({ el: v, anchor: C }) => {
    let k;
    for (; v && v !== C; )
      k = S(v), a(v), v = k;
    a(C);
  }, le = (v, C, k, N, x, z, W, V, Q) => {
    if (C.type === "svg" ? W = "svg" : C.type === "math" && (W = "mathml"), v == null)
      ne(
        C,
        k,
        N,
        x,
        z,
        W,
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
          W,
          V,
          Q
        );
      } finally {
        j && j._endPatch();
      }
    }
  }, ne = (v, C, k, N, x, z, W, V) => {
    let Q, j;
    const { props: be, shapeFlag: oe, transition: ye, dirs: pe } = v;
    if (Q = v.el = s(
      v.type,
      z,
      be && be.is,
      be
    ), oe & 8 ? u(Q, v.children) : oe & 16 && ce(
      v.children,
      Q,
      null,
      N,
      x,
      Ll(v, z),
      W,
      V
    ), pe && Qi(v, null, N, "created"), P(Q, v, v.scopeId, W, N), be) {
      for (const $e in be)
        $e !== "value" && !Ar($e) && r(Q, $e, null, be[$e], z, N);
      "value" in be && r(Q, "value", null, be.value, z), (j = be.onVnodeBeforeMount) && Fn(j, N, v);
    }
    pe && Qi(v, null, N, "beforeMount");
    const Le = lm(x, ye);
    Le && ye.beforeEnter(Q), i(Q, C, k), ((j = be && be.onVnodeMounted) || Le || pe) && Gt(() => {
      j && Fn(j, N, v), Le && ye.enter(Q), pe && Qi(v, null, N, "mounted");
    }, x);
  }, P = (v, C, k, N, x) => {
    if (k && E(v, k), N)
      for (let z = 0; z < N.length; z++)
        E(v, N[z]);
    if (x) {
      let z = x.subTree;
      if (C === z || Ih(z.type) && (z.ssContent === C || z.ssFallback === C)) {
        const W = x.vnode;
        P(
          v,
          W,
          W.scopeId,
          W.slotScopeIds,
          x.parent
        );
      }
    }
  }, ce = (v, C, k, N, x, z, W, V, Q = 0) => {
    for (let j = Q; j < v.length; j++) {
      const be = v[j] = V ? si(v[j]) : Gn(v[j]);
      A(
        null,
        be,
        C,
        k,
        N,
        x,
        z,
        W,
        V
      );
    }
  }, X = (v, C, k, N, x, z, W) => {
    const V = C.el = v.el;
    let { patchFlag: Q, dynamicChildren: j, dirs: be } = C;
    Q |= v.patchFlag & 16;
    const oe = v.props || Ve, ye = C.props || Ve;
    let pe;
    if (k && ea(k, !1), (pe = ye.onVnodeBeforeUpdate) && Fn(pe, k, C, v), be && Qi(C, v, k, "beforeUpdate"), k && ea(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    j && (!v.dynamicChildren || v.dynamicChildren.length !== j.length) && (Q = 0, W = !1, j = null), (oe.innerHTML && ye.innerHTML == null || oe.textContent && ye.textContent == null) && u(V, ""), j ? ae(
      v.dynamicChildren,
      j,
      V,
      k,
      N,
      Ll(C, x),
      z
    ) : W || ie(
      v,
      C,
      V,
      null,
      k,
      N,
      Ll(C, x),
      z,
      !1
    ), Q > 0) {
      if (Q & 16)
        me(V, oe, ye, k, x);
      else if (Q & 2 && oe.class !== ye.class && r(V, "class", null, ye.class, x), Q & 4 && r(V, "style", oe.style, ye.style, x), Q & 8) {
        const Le = C.dynamicProps;
        for (let $e = 0; $e < Le.length; $e++) {
          const Pe = Le[$e], Qe = oe[Pe], rt = ye[Pe];
          (rt !== Qe || Pe === "value") && r(V, Pe, Qe, rt, x, k);
        }
      }
      Q & 1 && v.children !== C.children && u(V, C.children);
    } else !W && j == null && me(V, oe, ye, k, x);
    ((pe = ye.onVnodeUpdated) || be) && Gt(() => {
      pe && Fn(pe, k, C, v), be && Qi(C, v, k, "updated");
    }, N);
  }, ae = (v, C, k, N, x, z, W) => {
    for (let V = 0; V < C.length; V++) {
      const Q = v[V], j = C[V], be = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Q.type === de || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !la(Q, j) || // - In the case of a component, it could contain anything.
        Q.shapeFlag & 198) ? h(Q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      A(
        Q,
        j,
        be,
        null,
        N,
        x,
        z,
        W,
        !0
      );
    }
  }, me = (v, C, k, N, x) => {
    if (C !== k) {
      if (C !== Ve)
        for (const z in C)
          !Ar(z) && !(z in k) && r(
            v,
            z,
            C[z],
            null,
            x,
            N
          );
      for (const z in k) {
        if (Ar(z)) continue;
        const W = k[z], V = C[z];
        W !== V && z !== "value" && r(v, z, V, W, x, N);
      }
      "value" in k && r(v, "value", C.value, k.value, x);
    }
  }, J = (v, C, k, N, x, z, W, V, Q) => {
    const j = C.el = v ? v.el : o(""), be = C.anchor = v ? v.anchor : o("");
    let { patchFlag: oe, dynamicChildren: ye, slotScopeIds: pe } = C;
    pe && (V = V ? V.concat(pe) : pe), v == null ? (i(j, k, N), i(be, k, N), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      C.children || [],
      k,
      be,
      x,
      z,
      W,
      V,
      Q
    )) : oe > 0 && oe & 64 && ye && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren && v.dynamicChildren.length === ye.length ? (ae(
      v.dynamicChildren,
      ye,
      k,
      x,
      z,
      W,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (C.key != null || x && C === x.subTree) && nu(
      v,
      C,
      !0
      /* shallow */
    )) : ie(
      v,
      C,
      k,
      be,
      x,
      z,
      W,
      V,
      Q
    );
  }, te = (v, C, k, N, x, z, W, V, Q) => {
    C.slotScopeIds = V, v == null ? C.shapeFlag & 512 ? x.ctx.activate(
      C,
      k,
      N,
      W,
      Q
    ) : D(
      C,
      k,
      N,
      x,
      z,
      W,
      Q
    ) : $(v, C, Q);
  }, D = (v, C, k, N, x, z, W) => {
    const V = v.component = pm(
      v,
      N,
      x
    );
    if (al(v) && (V.ctx.renderer = on), vm(V, !1, W), V.asyncDep) {
      if (x && x.registerDep(V, Y, W), !v.el) {
        const Q = V.subTree = _e(Ot);
        R(null, Q, C, k), v.placeholder = Q.el;
      }
    } else
      Y(
        V,
        v,
        C,
        k,
        x,
        z,
        W
      );
  }, $ = (v, C, k) => {
    const N = C.component = v.component;
    if (Jg(v, C, k))
      if (N.asyncDep && !N.asyncResolved) {
        re(N, C, k);
        return;
      } else
        N.next = C, N.update();
    else
      C.el = v.el, N.vnode = C;
  }, Y = (v, C, k, N, x, z, W) => {
    const V = () => {
      if (v.isMounted) {
        let { next: oe, bu: ye, u: pe, parent: Le, vnode: $e } = v;
        {
          const Lt = Lh(v);
          if (Lt) {
            oe && (oe.el = $e.el, re(v, oe, W)), Lt.asyncDep.then(() => {
              Gt(() => {
                v.isUnmounted || j();
              }, x);
            });
            return;
          }
        }
        let Pe = oe, Qe;
        ea(v, !1), oe ? (oe.el = $e.el, re(v, oe, W)) : oe = $e, ye && zs(ye), (Qe = oe.props && oe.props.onVnodeBeforeUpdate) && Fn(Qe, Le, oe, $e), ea(v, !0);
        const rt = Wu(v), Ct = v.subTree;
        v.subTree = rt, A(
          Ct,
          rt,
          // parent may have changed if it's in a teleport
          h(Ct.el),
          // anchor may have changed if it's in a fragment
          lt(Ct),
          v,
          x,
          z
        ), oe.el = rt.el, Pe === null && Qg(v, rt.el), pe && Gt(pe, x), (Qe = oe.props && oe.props.onVnodeUpdated) && Gt(
          () => Fn(Qe, Le, oe, $e),
          x
        );
      } else {
        let oe;
        const { el: ye, props: pe } = C, { bm: Le, m: $e, parent: Pe, root: Qe, type: rt } = v, Ct = Ba(C);
        ea(v, !1), Le && zs(Le), !Ct && (oe = pe && pe.onVnodeBeforeMount) && Fn(oe, Pe, C), ea(v, !0);
        {
          Qe.ce && Qe.ce._hasShadowRoot() && Qe.ce._injectChildStyle(
            rt,
            v.parent ? v.parent.type : void 0
          );
          const Lt = v.subTree = Wu(v);
          A(
            null,
            Lt,
            k,
            N,
            v,
            x,
            z
          ), C.el = Lt.el;
        }
        if ($e && Gt($e, x), !Ct && (oe = pe && pe.onVnodeMounted)) {
          const Lt = C;
          Gt(
            () => Fn(oe, Pe, Lt),
            x
          );
        }
        (C.shapeFlag & 256 || Pe && Ba(Pe.vnode) && Pe.vnode.shapeFlag & 256) && v.a && Gt(v.a, x), v.isMounted = !0, C = k = N = null;
      }
    };
    v.scope.on();
    const Q = v.effect = new If(V);
    v.scope.off();
    const j = v.update = Q.run.bind(Q), be = v.job = Q.runIfDirty.bind(Q);
    be.i = v, be.id = v.uid, Q.scheduler = () => Xc(be), ea(v, !0), j();
  }, re = (v, C, k) => {
    C.component = v;
    const N = v.vnode.props;
    v.vnode = C, v.next = null, tm(v, C.props, N, k), rm(v, C.children, k), pi(), Mu(v), vi();
  }, ie = (v, C, k, N, x, z, W, V, Q = !1) => {
    const j = v && v.children, be = v ? v.shapeFlag : 0, oe = C.children, { patchFlag: ye, shapeFlag: pe } = C;
    if (ye > 0) {
      if (ye & 128) {
        fe(
          j,
          oe,
          k,
          N,
          x,
          z,
          W,
          V,
          Q
        );
        return;
      } else if (ye & 256) {
        he(
          j,
          oe,
          k,
          N,
          x,
          z,
          W,
          V,
          Q
        );
        return;
      }
    }
    pe & 8 ? (be & 16 && ot(j, x, z), oe !== j && u(k, oe)) : be & 16 ? pe & 16 ? fe(
      j,
      oe,
      k,
      N,
      x,
      z,
      W,
      V,
      Q
    ) : ot(j, x, z, !0) : (be & 8 && u(k, ""), pe & 16 && ce(
      oe,
      k,
      N,
      x,
      z,
      W,
      V,
      Q
    ));
  }, he = (v, C, k, N, x, z, W, V, Q) => {
    v = v || za, C = C || za;
    const j = v.length, be = C.length, oe = Math.min(j, be);
    let ye;
    for (ye = 0; ye < oe; ye++) {
      const pe = C[ye] = Q ? si(C[ye]) : Gn(C[ye]);
      A(
        v[ye],
        pe,
        k,
        null,
        x,
        z,
        W,
        V,
        Q
      );
    }
    j > be ? ot(
      v,
      x,
      z,
      !0,
      !1,
      oe
    ) : ce(
      C,
      k,
      N,
      x,
      z,
      W,
      V,
      Q,
      oe
    );
  }, fe = (v, C, k, N, x, z, W, V, Q) => {
    let j = 0;
    const be = C.length;
    let oe = v.length - 1, ye = be - 1;
    for (; j <= oe && j <= ye; ) {
      const pe = v[j], Le = C[j] = Q ? si(C[j]) : Gn(C[j]);
      if (la(pe, Le))
        A(
          pe,
          Le,
          k,
          null,
          x,
          z,
          W,
          V,
          Q
        );
      else
        break;
      j++;
    }
    for (; j <= oe && j <= ye; ) {
      const pe = v[oe], Le = C[ye] = Q ? si(C[ye]) : Gn(C[ye]);
      if (la(pe, Le))
        A(
          pe,
          Le,
          k,
          null,
          x,
          z,
          W,
          V,
          Q
        );
      else
        break;
      oe--, ye--;
    }
    if (j > oe) {
      if (j <= ye) {
        const pe = ye + 1, Le = pe < be ? C[pe].el : N;
        for (; j <= ye; )
          A(
            null,
            C[j] = Q ? si(C[j]) : Gn(C[j]),
            k,
            Le,
            x,
            z,
            W,
            V,
            Q
          ), j++;
      }
    } else if (j > ye)
      for (; j <= oe; )
        ve(v[j], x, z, !0), j++;
    else {
      const pe = j, Le = j, $e = /* @__PURE__ */ new Map();
      for (j = Le; j <= ye; j++) {
        const ut = C[j] = Q ? si(C[j]) : Gn(C[j]);
        ut.key != null && $e.set(ut.key, j);
      }
      let Pe, Qe = 0;
      const rt = ye - Le + 1;
      let Ct = !1, Lt = 0;
      const Wt = new Array(rt);
      for (j = 0; j < rt; j++) Wt[j] = 0;
      for (j = pe; j <= oe; j++) {
        const ut = v[j];
        if (Qe >= rt) {
          ve(ut, x, z, !0);
          continue;
        }
        let jt;
        if (ut.key != null)
          jt = $e.get(ut.key);
        else
          for (Pe = Le; Pe <= ye; Pe++)
            if (Wt[Pe - Le] === 0 && la(ut, C[Pe])) {
              jt = Pe;
              break;
            }
        jt === void 0 ? ve(ut, x, z, !0) : (Wt[jt - Le] = j + 1, jt >= Lt ? Lt = jt : Ct = !0, A(
          ut,
          C[jt],
          k,
          null,
          x,
          z,
          W,
          V,
          Q
        ), Qe++);
      }
      const Yn = Ct ? cm(Wt) : za;
      for (Pe = Yn.length - 1, j = rt - 1; j >= 0; j--) {
        const ut = Le + j, jt = C[ut], _i = C[ut + 1], Xn = ut + 1 < be ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          _i.el || Rh(_i)
        ) : N;
        Wt[j] === 0 ? A(
          null,
          jt,
          k,
          Xn,
          x,
          z,
          W,
          V,
          Q
        ) : Ct && (Pe < 0 || j !== Yn[Pe] ? Te(jt, k, Xn, 2) : Pe--);
      }
    }
  }, Te = (v, C, k, N, x = null) => {
    const { el: z, type: W, transition: V, children: Q, shapeFlag: j } = v;
    if (j & 6) {
      Te(v.component.subTree, C, k, N);
      return;
    }
    if (j & 128) {
      v.suspense.move(C, k, N);
      return;
    }
    if (j & 64) {
      W.move(v, C, k, on);
      return;
    }
    if (W === de) {
      i(z, C, k);
      for (let oe = 0; oe < Q.length; oe++)
        Te(Q[oe], C, k, N);
      i(v.anchor, C, k);
      return;
    }
    if (W === Us) {
      G(v, C, k);
      return;
    }
    if (N !== 2 && j & 1 && V)
      if (N === 0)
        V.persisted && !z[hn] ? i(z, C, k) : (V.beforeEnter(z), i(z, C, k), Gt(() => V.enter(z), x));
      else {
        const { leave: oe, delayLeave: ye, afterLeave: pe } = V, Le = () => {
          v.ctx.isUnmounted ? a(z) : i(z, C, k);
        }, $e = () => {
          const Pe = z._isLeaving || !!z[hn];
          z._isLeaving && z[hn](
            !0
            /* cancelled */
          ), V.persisted && !Pe ? Le() : oe(z, () => {
            Le(), pe && pe();
          });
        };
        ye ? ye(z, Le, $e) : $e();
      }
    else
      i(z, C, k);
  }, ve = (v, C, k, N = !1, x = !1) => {
    const {
      type: z,
      props: W,
      ref: V,
      children: Q,
      dynamicChildren: j,
      shapeFlag: be,
      patchFlag: oe,
      dirs: ye,
      cacheIndex: pe,
      memo: Le
    } = v;
    if (oe === -2 && (x = !1), V != null && (pi(), Nr(V, null, k, v, !0), vi()), pe != null && (C.renderCache[pe] = void 0), be & 256) {
      C.ctx.deactivate(v);
      return;
    }
    const $e = be & 1 && ye, Pe = !Ba(v);
    let Qe;
    if (Pe && (Qe = W && W.onVnodeBeforeUnmount) && Fn(Qe, C, v), be & 6)
      it(v.component, k, N);
    else {
      if (be & 128) {
        v.suspense.unmount(k, N);
        return;
      }
      $e && Qi(v, null, C, "beforeUnmount"), be & 64 ? v.type.remove(
        v,
        C,
        k,
        on,
        N
      ) : j && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !j.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== de || oe > 0 && oe & 64) ? ot(
        j,
        C,
        k,
        !1,
        !0
      ) : (z === de && oe & 384 || !x && be & 16) && ot(Q, C, k), N && He(v);
    }
    const rt = Le != null && pe == null;
    (Pe && (Qe = W && W.onVnodeUnmounted) || $e || rt) && Gt(() => {
      Qe && Fn(Qe, C, v), $e && Qi(v, null, C, "unmounted"), rt && (v.el = null);
    }, k);
  }, He = (v) => {
    const { type: C, el: k, anchor: N, transition: x } = v;
    if (C === de) {
      Ee(k, N);
      return;
    }
    if (C === Us) {
      F(v);
      return;
    }
    const z = () => {
      a(k), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (v.shapeFlag & 1 && x && !x.persisted) {
      const { leave: W, delayLeave: V } = x, Q = () => W(k, z);
      V ? V(v.el, z, Q) : Q();
    } else
      z();
  }, Ee = (v, C) => {
    let k;
    for (; v !== C; )
      k = S(v), a(v), v = k;
    a(C);
  }, it = (v, C, k) => {
    const { bum: N, scope: x, job: z, subTree: W, um: V, m: Q, a: j } = v;
    Xu(Q), Xu(j), N && zs(N), x.stop(), z && (z.flags |= 8, ve(W, v, C, k)), V && Gt(V, C), Gt(() => {
      v.isUnmounted = !0;
    }, C);
  }, ot = (v, C, k, N = !1, x = !1, z = 0) => {
    for (let W = z; W < v.length; W++)
      ve(v[W], C, k, N, x);
  }, lt = (v) => {
    if (v.shapeFlag & 6)
      return lt(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const C = S(v.anchor || v.el), k = C && C[nh];
    return k ? S(k) : C;
  };
  let St = !1;
  const at = (v, C, k) => {
    let N;
    v == null ? C._vnode && (ve(C._vnode, null, null, !0), N = C._vnode.component) : A(
      C._vnode || null,
      v,
      C,
      null,
      null,
      null,
      k
    ), C._vnode = v, St || (St = !0, Mu(N), Qf(), St = !1);
  }, on = {
    p: A,
    um: ve,
    m: Te,
    r: He,
    mt: D,
    mc: ce,
    pc: ie,
    pbc: ae,
    n: lt,
    o: e
  };
  return {
    render: at,
    hydrate: void 0,
    createApp: Wg(at)
  };
}
function Ll({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ea({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function lm(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function nu(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Se(i) && Se(a))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let o = a[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[r] = si(a[r]), o.el = s.el), !n && o.patchFlag !== -2 && nu(s, o)), o.type === cs && (o.patchFlag === -1 && (o = a[r] = si(o)), o.el = s.el), o.type === Ot && !o.el && (o.el = s.el);
    }
}
function cm(e) {
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
function Lh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Lh(t);
}
function Xu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Rh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Rh(t.subTree) : null;
}
const Ih = (e) => e.__isSuspense;
function um(e, t) {
  t && t.pendingBranch ? Se(e) ? t.effects.push(...e) : t.effects.push(e) : Jf(e);
}
const de = /* @__PURE__ */ Symbol.for("v-fgt"), cs = /* @__PURE__ */ Symbol.for("v-txt"), Ot = /* @__PURE__ */ Symbol.for("v-cmt"), Us = /* @__PURE__ */ Symbol.for("v-stc"), fi = [];
let rn = null;
function b(e = !1) {
  fi.push(rn = e ? null : []);
}
function iu() {
  fi.pop(), rn = fi[fi.length - 1] || null;
}
let Wr = 1;
function Js(e, t = !1) {
  Wr += e, e < 0 && rn && t && (rn.hasOnce = !0);
}
function Ph(e) {
  return e.dynamicChildren = Wr > 0 ? rn || za : null, iu(), Wr > 0 && rn && rn.push(e), e;
}
function T(e, t, n, i, a, r) {
  return Ph(
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
function De(e, t, n, i, a) {
  return Ph(
    _e(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function qr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function la(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Dh = ({ key: e }) => e ?? null, Bs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? tt(e) || /* @__PURE__ */ Bt(e) || xe(e) ? { i: Nt, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, i = 0, a = null, r = e === de ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Dh(t),
    ref: t && Bs(t),
    scopeId: tl,
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
  return o ? (Qs(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= tt(n) ? 8 : 16), Wr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  rn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && rn.push(l), l;
}
const _e = dm;
function dm(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === hh) && (e = Ot), qr(e)) {
    const o = Bi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Qs(o, n), Wr > 0 && !r && rn && (o.shapeFlag & 6 ? rn[rn.indexOf(e)] = o : rn.push(o)), o.patchFlag = -2, o;
  }
  if (ym(e) && (e = e.__vccOpts), t) {
    t = Yr(t);
    let { class: o, style: l } = t;
    o && !tt(o) && (t.class = Ce(o)), Ye(l) && (/* @__PURE__ */ Yc(l) && !Se(l) && (l = vt({}, l)), t.style = sn(l));
  }
  const s = tt(e) ? 1 : Ih(e) ? 128 : il(e) ? 64 : Ye(e) ? 4 : xe(e) ? 2 : 0;
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
function Yr(e) {
  return e ? /* @__PURE__ */ Yc(e) || Eh(e) ? vt({}, e) : e : null;
}
function Bi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: s, children: o, transition: l } = e, d = t ? Ht(a || {}, t) : a, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Dh(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Se(r) ? r.concat(Bs(t)) : [r, Bs(t)] : Bs(t)
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
    patchFlag: t && e.type !== de ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Bi(e.ssContent),
    ssFallback: e.ssFallback && Bi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && Kr(
    u,
    l.clone(u)
  ), u;
}
function Ne(e = " ", t = 0) {
  return _e(cs, null, e, t);
}
function H(e = "", t = !1) {
  return t ? (b(), De(Ot, null, e)) : _e(Ot, null, e);
}
function Gn(e) {
  return e == null || typeof e == "boolean" ? _e(Ot) : Se(e) ? _e(
    de,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : qr(e) ? si(e) : _e(cs, null, String(e));
}
function si(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bi(e);
}
function Qs(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Se(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Qs(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Eh(t) ? t._ctx = Nt : a === 3 && Nt && (Nt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (xe(t)) {
    if (i & 65) {
      Qs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Nt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Ne(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Ht(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Ce([t.class, i.class]));
      else if (a === "style")
        t.style = sn([t.style, i.style]);
      else if (Ko(a)) {
        const r = t[a], s = i[a];
        s && r !== s && !(Se(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Wo(a) && (t[a] = s);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Fn(e, t, n, i = null) {
  bn(e, t, 7, [
    n,
    i
  ]);
}
const fm = bh();
let hm = 0;
function pm(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || fm, r = {
    uid: hm++,
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
    scope: new $v(
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
    propsOptions: kh(i, a),
    emitsOptions: wh(i, a),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = qg.bind(null, r), e.ce && e.ce(r), r;
}
let zt = null;
const ya = () => zt || Nt;
let eo, Xr;
{
  const e = Zo(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  eo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => zt = n
  ), Xr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Zr = n
  );
}
const us = (e) => {
  const t = zt;
  return eo(e), e.scope.on(), () => {
    e.scope.off(), eo(t);
  };
}, Zu = () => {
  zt && zt.scope.off(), eo(null);
};
function $h(e) {
  return e.vnode.shapeFlag & 4;
}
let Zr = !1;
function vm(e, t = !1, n = !1) {
  t && Xr(t);
  const { props: i, children: a } = e.vnode, r = $h(e);
  em(e, i, r, t), am(e, a, n || t);
  const s = r ? gm(e, t) : void 0;
  return t && Xr(!1), s;
}
function gm(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Mg);
  const { setup: i } = n;
  if (i) {
    pi();
    const a = e.setupContext = i.length > 1 ? Fh(e) : null, r = us(e), s = os(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = Af(s);
    if (vi(), r(), (o || e.sp) && !Ba(e) && ch(e), o) {
      if (s.then(Zu, Zu), t)
        return s.then((l) => {
          Xr(!0);
          try {
            Ju(e, l, t);
          } finally {
            Xr(!1);
          }
        }).catch((l) => {
          el(l, e, 0);
        });
      e.asyncDep = s;
    } else
      Ju(e, s);
  } else
    Mh(e);
}
function Ju(e, t, n) {
  xe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ye(t) && (e.setupState = Yf(t)), Mh(e);
}
function Mh(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || gn);
  {
    const a = us(e);
    pi();
    try {
      Bg(e);
    } finally {
      vi(), a();
    }
  }
}
const mm = {
  get(e, t) {
    return Mt(e, "get", ""), e[t];
  }
};
function Fh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, mm),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ol(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Yf(ng(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in xr)
        return xr[n](e);
    },
    has(t, n) {
      return n in t || n in xr;
    }
  })) : e.proxy;
}
function bm(e, t = !0) {
  return xe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ym(e) {
  return xe(e) && "__vccOpts" in e;
}
const q = (e, t) => /* @__PURE__ */ lg(e, t, Zr);
function Yt(e, t, n) {
  try {
    Js(-1);
    const i = arguments.length;
    return i === 2 ? Ye(t) && !Se(t) ? qr(t) ? _e(e, null, [t]) : _e(e, t) : _e(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && qr(n) && (n = [n]), _e(e, t, n));
  } finally {
    Js(1);
  }
}
const _m = "3.5.42", wm = gn;
let yc;
const Qu = typeof window < "u" && window.trustedTypes;
if (Qu)
  try {
    yc = /* @__PURE__ */ Qu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const zh = yc ? (e) => yc.createHTML(e) : (e) => e, Sm = "http://www.w3.org/2000/svg", Cm = "http://www.w3.org/1998/Math/MathML", ri = typeof document < "u" ? document : null, ed = ri && /* @__PURE__ */ ri.createElement("template"), Tm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? ri.createElementNS(Sm, e) : t === "mathml" ? ri.createElementNS(Cm, e) : n ? ri.createElement(e, { is: n }) : ri.createElement(e);
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
      ed.innerHTML = zh(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = ed.content;
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
}, Oi = "transition", fr = "animation", Jr = /* @__PURE__ */ Symbol("_vtc"), Uh = {
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
}, Em = /* @__PURE__ */ vt(
  {},
  ah,
  Uh
), Am = (e) => (e.displayName = "Transition", e.props = Em, e), km = /* @__PURE__ */ Am(
  (e, { slots: t }) => Yt(Ag, Om(e), t)
), ta = (e, t = []) => {
  Se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, td = (e) => e ? Se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Om(e) {
  const t = {};
  for (const J in e)
    J in Uh || (t[J] = e[J]);
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
  } = e, O = Nm(a), A = O && O[0], L = O && O[1], {
    onBeforeEnter: R,
    onEnter: M,
    onEnterCancelled: G,
    onLeave: F,
    onLeaveCancelled: le,
    onBeforeAppear: ne = R,
    onAppear: P = M,
    onAppearCancelled: ce = G
  } = t, X = (J, te, D, $) => {
    J._enterCancelled = $, na(J, te ? u : o), na(J, te ? d : s), D && D();
  }, ae = (J, te) => {
    J._isLeaving = !1, na(J, h), na(J, E), na(J, S), te && te();
  }, me = (J) => (te, D) => {
    const $ = J ? P : M, Y = () => X(te, J, D);
    ta($, [te, Y]), nd(() => {
      na(te, J ? l : r), ti(te, J ? u : o), td($) || id(te, i, A, Y);
    });
  };
  return vt(t, {
    onBeforeEnter(J) {
      ta(R, [J]), ti(J, r), ti(J, s);
    },
    onBeforeAppear(J) {
      ta(ne, [J]), ti(J, l), ti(J, d);
    },
    onEnter: me(!1),
    onAppear: me(!0),
    onLeave(J, te) {
      J._isLeaving = !0;
      const D = () => ae(J, te);
      ti(J, h), J._enterCancelled ? (ti(J, S), sd(J)) : (sd(J), ti(J, S)), nd(() => {
        J._isLeaving && (na(J, h), ti(J, E), td(F) || id(J, i, L, D));
      }), ta(F, [J, D]);
    },
    onEnterCancelled(J) {
      X(J, !1, void 0, !0), ta(G, [J]);
    },
    onAppearCancelled(J) {
      X(J, !0, void 0, !0), ta(ce, [J]);
    },
    onLeaveCancelled(J) {
      ae(J), ta(le, [J]);
    }
  });
}
function Nm(e) {
  if (e == null)
    return null;
  if (Ye(e))
    return [Rl(e.enter), Rl(e.leave)];
  {
    const t = Rl(e);
    return [t, t];
  }
}
function Rl(e) {
  return Av(e);
}
function ti(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Jr] || (e[Jr] = /* @__PURE__ */ new Set())).add(t);
}
function na(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Jr];
  n && (n.delete(t), n.size || (e[Jr] = void 0));
}
function nd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let xm = 0;
function id(e, t, n, i) {
  const a = e._endId = ++xm, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: o, propCount: l } = Lm(e, t);
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
function Lm(e, t) {
  const n = window.getComputedStyle(e), i = (O) => (n[O] || "").split(", "), a = i(`${Oi}Delay`), r = i(`${Oi}Duration`), s = ad(a, r), o = i(`${fr}Delay`), l = i(`${fr}Duration`), d = ad(o, l);
  let u = null, h = 0, S = 0;
  t === Oi ? s > 0 && (u = Oi, h = s, S = r.length) : t === fr ? d > 0 && (u = fr, h = d, S = l.length) : (h = Math.max(s, d), u = h > 0 ? s > d ? Oi : fr : null, S = u ? u === Oi ? r.length : l.length : 0);
  const E = u === Oi && /\b(?:transform|all)(?:,|$)/.test(
    i(`${Oi}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: S,
    hasTransform: E
  };
}
function ad(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => rd(n) + rd(e[i])));
}
function rd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function sd(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Rm(e, t, n) {
  const i = e[Jr];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const to = /* @__PURE__ */ Symbol("_vod"), Bh = /* @__PURE__ */ Symbol("_vsh"), ja = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[to] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : hr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), hr(e, !0), i.enter(e)) : i.leave(e, () => {
      hr(e, !1);
    }) : hr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    hr(e, t);
  }
};
function hr(e, t) {
  e.style.display = t ? e[to] : "none", e[Bh] = !t;
}
const Hh = /* @__PURE__ */ Symbol("");
function Im(e) {
  const t = ya();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => no(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? no(t.ce, a) : _c(t.subTree, a), n(a);
  };
  fh(() => {
    Jf(i);
  }), ji(() => {
    pt(i, gn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), ls(() => a.disconnect());
  });
}
function _c(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      _c(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    no(e.el, t);
  else if (e.type === de)
    e.children.forEach((n) => _c(n, t));
  else if (e.type === Us) {
    let { el: n, anchor: i } = e;
    for (; n && (no(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function no(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = Dv(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[Hh] = i;
  }
}
const Pm = /(?:^|;)\s*display\s*:/;
function Dm(e, t, n) {
  const i = e.style, a = tt(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (tt(t))
        for (const s of t.split(";")) {
          const o = s.slice(0, s.indexOf(":")).trim();
          n[o] == null && Sr(i, o, "");
        }
      else
        for (const s in t)
          n[s] == null && Sr(i, s, "");
    for (const s in n) {
      s === "display" && (r = !0);
      const o = n[s];
      o != null ? Mm(
        e,
        s,
        !tt(t) && t ? t[s] : void 0,
        o
      ) || Sr(i, s, o) : Sr(i, s, "");
    }
  } else if (a) {
    if (t !== n) {
      const s = i[Hh];
      s && (n += ";" + s), i.cssText = n, r = Pm.test(n);
    }
  } else t && e.removeAttribute("style");
  to in e && (e[to] = r ? i.display : "", e[Bh] && (i.display = "none"));
}
const Ns = /\s*!important$/;
function Sr(e, t, n) {
  if (Se(n))
    n.forEach((i) => Sr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    Ns.test(n) ? e.setProperty(t, n.replace(Ns, ""), "important") : e.setProperty(t, n);
  else {
    const i = $m(e, t);
    Ns.test(n) ? e.setProperty(
      bi(i),
      n.replace(Ns, ""),
      "important"
    ) : e[i] = n;
  }
}
const od = ["Webkit", "Moz", "ms"], Il = {};
function $m(e, t) {
  const n = Il[t];
  if (n)
    return n;
  let i = Ut(t);
  if (i !== "filter" && i in e)
    return Il[t] = i;
  i = Yo(i);
  for (let a = 0; a < od.length; a++) {
    const r = od[a] + i;
    if (r in e)
      return Il[t] = r;
  }
  return t;
}
function Mm(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && tt(i) && n === i;
}
const ld = "http://www.w3.org/1999/xlink";
function cd(e, t, n, i, a, r = Rv(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ld, t.slice(6, t.length)) : e.setAttributeNS(ld, t, n) : n == null || r && !xf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : kn(n) ? String(n) : n
  );
}
function ud(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? zh(n) : n);
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
    o === "boolean" ? n = xf(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(a || t);
}
function ca(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Fm(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const dd = /* @__PURE__ */ Symbol("_vei");
function zm(e, t, n, i, a = null) {
  const r = e[dd] || (e[dd] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [o, l] = Hm(t);
    if (i) {
      const d = r[t] = Gm(
        i,
        a
      );
      ca(e, o, d, l);
    } else s && (Fm(e, o, s, l), r[t] = void 0);
  }
}
const Um = /(Once|Passive|Capture)$/, Bm = /^on:?(?:Once|Passive|Capture)$/;
function Hm(e) {
  let t, n;
  for (; (n = e.match(Um)) && !Bm.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : bi(e.slice(2)), t];
}
let Pl = 0;
const jm = /* @__PURE__ */ Promise.resolve(), Vm = () => Pl || (jm.then(() => Pl = 0), Pl = Date.now());
function Gm(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const a = n.value;
    if (Se(a)) {
      const r = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        r.call(i), i._stopped = !0;
      };
      const s = a.slice(), o = [i];
      for (let l = 0; l < s.length && !i._stopped; l++) {
        const d = s[l];
        d && bn(
          d,
          t,
          5,
          o
        );
      }
    } else
      bn(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = Vm(), n;
}
const fd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Km = (e, t, n, i, a, r) => {
  const s = a === "svg";
  t === "class" ? Rm(e, i, s) : t === "style" ? Dm(e, n, i) : Ko(t) ? Wo(t) || zm(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wm(e, t, i, s)) ? (ud(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && cd(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (qm(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !tt(i))) ? ud(e, Ut(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), cd(e, t, i, s));
};
function Wm(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && fd(t) && xe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return fd(t) && tt(n) ? !1 : t in e;
}
function qm(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Ut(t);
  return Array.isArray(n) ? n.some((a) => Ut(a) === i) : Object.keys(n).some((a) => Ut(a) === i);
}
const io = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Se(t) ? (n) => zs(t, n) : t;
};
function Ym(e) {
  e.target.composing = !0;
}
function hd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const da = /* @__PURE__ */ Symbol("_assign"), xs = /* @__PURE__ */ Symbol("_initialValue");
function Dl(e, t, n) {
  return t && (e = e.trim()), n && (e = Xo(e)), e;
}
const Sn = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[xs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[xs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[da] = io(a);
    const r = i || a.props && a.props.type === "number";
    ca(e, t ? "change" : "input", (s) => {
      s.target.composing || e[da](Dl(e.value, n, r));
    }), (n || r) && ca(e, "change", () => {
      e.value = Dl(e.value, n, r);
    }), t || (ca(e, "compositionstart", Ym), ca(e, "compositionend", hd), ca(e, "change", hd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[xs];
    delete e[xs], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[da](Dl(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, s) {
    if (e[da] = io(s), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? Xo(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, zn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, ca(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Xo(ao(l)) : ao(l)
      ), r = e.multiple, s = r ? ma(e._modelValue) ? new Set(a) : a : a[0], o = e._pendingValue = [
        r,
        r ? Se(s) ? a.slice() : a : s
      ];
      try {
        e[da](s);
      } finally {
        pn(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[da] = io(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    pd(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[da] = io(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Xm(t, n[1], n[0])) && pd(e, t);
  }
};
function Xm(e, t, n) {
  if (!n || Se(e)) return Ui(e, t);
  if (ma(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function pd(e, t) {
  const n = e.multiple, i = Se(t);
  if (!(n && !i && !ma(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], o = ao(s);
      if (n)
        if (i) {
          const l = typeof o;
          l === "string" || l === "number" ? s.selected = t.some((d) => String(d) === String(o)) : s.selected = Pv(t, o) > -1;
        } else
          s.selected = t.has(o);
      else if (Ui(ao(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function ao(e) {
  return "_value" in e ? e._value : e.value;
}
const Zm = ["ctrl", "shift", "alt", "meta"], Jm = {
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
  exact: (e, t) => Zm.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ke = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const o = Jm[t[s]];
      if (o && o(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Qm = {
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
      (s) => s === r || Qm[s] === r
    ))
      return e(a);
  }));
}, eb = /* @__PURE__ */ vt({ patchProp: Km }, Tm);
let vd;
function tb() {
  return vd || (vd = sm(eb));
}
const nb = ((...e) => {
  const t = tb().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = ab(i);
    if (!a) return;
    const r = t._component;
    !xe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = n(a, !1, ib(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function ib(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ab(e) {
  return tt(e) ? document.querySelector(e) : e;
}
function au(e, t, n) {
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
function gd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function rb(e) {
  if (Array.isArray(e)) return e;
}
function sb(e, t) {
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
function ob() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lb(e, t) {
  return rb(e) || sb(e, t) || cb(e, t) || ob();
}
function cb(e, t) {
  if (e) {
    if (typeof e == "string") return gd(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? gd(e, t) : void 0;
  }
}
const jh = Object.entries, md = Object.setPrototypeOf, ub = Object.isFrozen, db = Object.getPrototypeOf, fb = Object.getOwnPropertyDescriptor;
let yt = Object.freeze, wt = Object.seal, Ma = Object.create, Vh = typeof Reflect < "u" && Reflect, wc = Vh.apply, Sc = Vh.construct;
yt || (yt = function(t) {
  return t;
});
wt || (wt = function(t) {
  return t;
});
wc || (wc = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
Sc || (Sc = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const sa = gt(Array.prototype.forEach), hb = gt(Array.prototype.lastIndexOf), bd = gt(Array.prototype.pop), pr = gt(Array.prototype.push), pb = gt(Array.prototype.splice), Va = Array.isArray, Cr = gt(String.prototype.toLowerCase), $l = gt(String.prototype.toString), yd = gt(String.prototype.match), vr = gt(String.prototype.replace), _d = gt(String.prototype.indexOf), vb = gt(String.prototype.trim), gb = gt(Number.prototype.toString), mb = gt(Boolean.prototype.toString), wd = typeof BigInt > "u" ? null : gt(BigInt.prototype.toString), Sd = typeof Symbol > "u" ? null : gt(Symbol.prototype.toString), Xt = gt(Object.prototype.hasOwnProperty), gr = gt(Object.prototype.toString), Pt = gt(RegExp.prototype.test), ia = bb(TypeError);
function gt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return wc(e, t, i);
  };
}
function bb(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return Sc(e, n);
  };
}
function je(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Cr;
  if (md && md(e, null), !Va(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (ub(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function yb(e) {
  for (let t = 0; t < e.length; t++)
    Xt(e, t) || (e[t] = null);
  return e;
}
function nn(e) {
  const t = Ma(null);
  for (const i of jh(e)) {
    var n = lb(i, 2);
    const a = n[0], r = n[1];
    Xt(e, a) && (Va(r) ? t[a] = yb(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = nn(r) : t[a] = r);
  }
  return t;
}
function _b(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return gb(e);
    case "boolean":
      return mb(e);
    case "bigint":
      return wd ? wd(e) : "0";
    case "symbol":
      return Sd ? Sd(e) : "Symbol()";
    case "undefined":
      return gr(e);
    case "function":
    case "object": {
      if (e === null)
        return gr(e);
      const t = e, n = Cn(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : gr(i);
      }
      return gr(e);
    }
    default:
      return gr(e);
  }
}
function Cn(e, t) {
  for (; e !== null; ) {
    const i = fb(e, t);
    if (i) {
      if (i.get)
        return gt(i.get);
      if (typeof i.value == "function")
        return gt(i.value);
    }
    e = db(e);
  }
  function n() {
    return null;
  }
  return n;
}
function wb(e) {
  try {
    return Pt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Cd = yt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ml = yt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Fl = yt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Sb = yt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), zl = yt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Cb = yt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Td = yt(["#text"]), Ed = yt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ul = yt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ad = yt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ls = yt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Tb = wt(/{{[\w\W]*|^[\w\W]*}}/g), Eb = wt(/<%[\w\W]*|^[\w\W]*%>/g), Ab = wt(/\${[\w\W]*/g), kb = wt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ob = wt(/^aria-[\-\w]+$/), kd = wt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Nb = wt(/^(?:\w+script|data):/i), xb = wt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Lb = wt(/^html$/i), Rb = wt(/^[a-z][.\w]*(-[.\w]+)+$/i), Od = wt(/<[/\w!]/g), Nd = wt(/<[/\w]/g), Ib = wt(/<\/no(script|embed|frames)/i), Pb = wt(/\/>/i), tn = {
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
}, Gh = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Db = yt(je({}, Gh)), $b = (function() {
  const e = {};
  return sa(Gh, (t) => {
    e[t] = wt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), yt(e);
})(), Mb = function() {
  return typeof window > "u" ? null : window;
}, Fb = function(t, n) {
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
}, xd = function() {
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
}, Ni = function(t, n, i, a) {
  return Xt(t, n) && Va(t[n]) ? je(a.base ? nn(a.base) : {}, t[n], a.transform) : i;
}, Bl = function(t, n, i) {
  const a = Xt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? nn(a) : i();
};
function Kh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Mb();
  const t = (Z) => Kh(Z);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, o = e.Element, l = e.NodeFilter, d = e.NamedNodeMap;
  d === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, h = e.trustedTypes, S = o.prototype, E = Cn(S, "cloneNode"), O = Cn(S, "remove"), A = Cn(S, "nextSibling"), L = Cn(S, "childNodes"), R = Cn(S, "parentNode"), M = Cn(S, "shadowRoot"), G = Cn(S, "attributes"), F = s && s.prototype ? Cn(s.prototype, "nodeType") : null, le = s && s.prototype ? Cn(s.prototype, "nodeName") : null, ne = s && s.prototype ? Cn(s.prototype, "ownerDocument") : null, P = function(w) {
    return F ? F(w) : w.nodeType;
  }, ce = function(w) {
    return le ? le(w) : w.nodeName;
  };
  if (typeof r == "function") {
    const Z = n.createElement("template");
    Z.content && Z.content.ownerDocument && (n = Z.content.ownerDocument);
  }
  let X, ae = "", me, J = !1, te = 0;
  const D = function() {
    if (te > 0)
      throw ia('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, $ = function(w) {
    D(), te++;
    try {
      return X.createHTML(w);
    } finally {
      te--;
    }
  }, Y = function(w) {
    D(), te++;
    try {
      return X.createScriptURL(w);
    } finally {
      te--;
    }
  }, re = function() {
    return J || (me = Fb(h, a), J = !0), me;
  }, ie = n, he = ie.implementation, fe = ie.createNodeIterator, Te = ie.createDocumentFragment, ve = ie.getElementsByTagName, He = i.importNode;
  let Ee = xd();
  t.isSupported = typeof jh == "function" && typeof R == "function" && he && he.createHTMLDocument !== void 0;
  const it = Tb, ot = Eb, lt = Ab, St = kb, at = Ob, on = Nb, U = xb, v = Rb;
  let C = kd, k = null;
  const N = je({}, [...Cd, ...Ml, ...Fl, ...zl, ...Td]);
  let x = null;
  const z = je({}, [...Ed, ...Ul, ...Ad, ...Ls]);
  let W = Object.seal(Ma(null, {
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
  const j = Object.seal(Ma(null, {
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
  let be = !0, oe = !0, ye = !1, pe = !0, Le = !1, $e = !0, Pe = !1, Qe = !1, rt = null, Ct = null, Lt = !1, Wt = !1, Yn = !1, ut = !1, jt = !0, _i = !1;
  const Xn = "user-content-";
  let Ki = !0, Wi = !1, Nn = {}, Zn = null;
  const fs = je({}, [
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
  let Ya = null;
  const Xa = je({}, ["audio", "video", "img", "source", "image", "track"]);
  let hs = null;
  const wa = je({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wi = "http://www.w3.org/1998/Math/MathML", qi = "http://www.w3.org/2000/svg", Zt = "http://www.w3.org/1999/xhtml";
  let Jn = Zt, Sa = !1, Ca = null;
  const ps = je({}, [wi, qi, Zt], $l), vs = yt(["mi", "mo", "mn", "ms", "mtext"]);
  let Za = je({}, vs);
  const Ja = yt(["annotation-xml"]);
  let Rt = je({}, Ja);
  const vl = je({}, ["title", "style", "font", "a", "script"]);
  let xn = null;
  const gl = ["application/xhtml+xml", "text/html"], ml = "text/html";
  let st = null, yn = null;
  const bl = n.createElement("form"), Ta = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, Si = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (yn && yn === w)
      return;
    (!w || typeof w != "object") && (w = {}), w = nn(w), xn = // eslint-disable-next-line unicorn/prefer-includes
    gl.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? ml : w.PARSER_MEDIA_TYPE, st = xn === "application/xhtml+xml" ? $l : Cr, k = Ni(w, "ALLOWED_TAGS", N, {
      transform: st
    }), x = Ni(w, "ALLOWED_ATTR", z, {
      transform: st
    }), Ca = Ni(w, "ALLOWED_NAMESPACES", ps, {
      transform: $l
    }), hs = Ni(w, "ADD_URI_SAFE_ATTR", wa, {
      transform: st,
      base: wa
    }), Ya = Ni(w, "ADD_DATA_URI_TAGS", Xa, {
      transform: st,
      base: Xa
    }), Zn = Ni(w, "FORBID_CONTENTS", fs, {
      transform: st
    }), V = Ni(w, "FORBID_TAGS", nn({}), {
      transform: st
    }), Q = Ni(w, "FORBID_ATTR", nn({}), {
      transform: st
    }), Nn = Xt(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? nn(w.USE_PROFILES) : w.USE_PROFILES : !1, be = w.ALLOW_ARIA_ATTR !== !1, oe = w.ALLOW_DATA_ATTR !== !1, ye = w.ALLOW_UNKNOWN_PROTOCOLS || !1, pe = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Le = w.SAFE_FOR_TEMPLATES || !1, $e = w.SAFE_FOR_XML !== !1, Pe = w.WHOLE_DOCUMENT || !1, Wt = w.RETURN_DOM || !1, Yn = w.RETURN_DOM_FRAGMENT || !1, ut = w.RETURN_TRUSTED_TYPE || !1, Lt = w.FORCE_BODY || !1, jt = w.SANITIZE_DOM !== !1, _i = w.SANITIZE_NAMED_PROPS || !1, Ki = w.KEEP_CONTENT !== !1, Wi = w.IN_PLACE || !1, C = wb(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : kd, Jn = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Zt, Za = Bl(
      w,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => je({}, vs)
      // Default built-in map
    ), Rt = Bl(
      w,
      "HTML_INTEGRATION_POINTS",
      () => je({}, Ja)
      // Default built-in map
    );
    const I = Bl(w, "CUSTOM_ELEMENT_HANDLING", () => Ma(null));
    if (W = Ma(null), Xt(I, "tagNameCheck") && Ta(I.tagNameCheck) && (W.tagNameCheck = I.tagNameCheck), Xt(I, "attributeNameCheck") && Ta(I.attributeNameCheck) && (W.attributeNameCheck = I.attributeNameCheck), Xt(I, "allowCustomizedBuiltInElements") && typeof I.allowCustomizedBuiltInElements == "boolean" && (W.allowCustomizedBuiltInElements = I.allowCustomizedBuiltInElements), wt(W), Le && (oe = !1), Yn && (Wt = !0), Nn && (k = je({}, Td), x = Ma(null), Nn.html === !0 && (je(k, Cd), je(x, Ed)), Nn.svg === !0 && (je(k, Ml), je(x, Ul), je(x, Ls)), Nn.svgFilters === !0 && (je(k, Fl), je(x, Ul), je(x, Ls)), Nn.mathMl === !0 && (je(k, zl), je(x, Ad), je(x, Ls))), j.tagCheck = null, j.attributeCheck = null, Xt(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? j.tagCheck = w.ADD_TAGS : Va(w.ADD_TAGS) && (k === N && (k = nn(k)), je(k, w.ADD_TAGS, st))), Xt(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? j.attributeCheck = w.ADD_ATTR : Va(w.ADD_ATTR) && (x === z && (x = nn(x)), je(x, w.ADD_ATTR, st))), Xt(w, "ADD_FORBID_CONTENTS") && Va(w.ADD_FORBID_CONTENTS) && (Zn === fs && (Zn = nn(Zn)), je(Zn, w.ADD_FORBID_CONTENTS, st)), Ki && (k["#text"] = !0), Pe && je(k, ["html", "head", "body"]), k.table && (je(k, ["tbody"]), delete V.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ia('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ia('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const K = X;
      X = w.TRUSTED_TYPES_POLICY;
      try {
        ae = $("");
      } catch (se) {
        throw X = K, se;
      }
    } else w.TRUSTED_TYPES_POLICY === null ? (X = void 0, ae = "") : (X === void 0 && (X = re()), X && typeof ae == "string" && (ae = $("")));
    yt && yt(w), yn = w;
  }, Qa = je({}, [...Ml, ...Fl, ...Sb]), er = je({}, [...zl, ...Cb]), tr = function(w, I, K) {
    return I.namespaceURI === Zt ? w === "svg" : I.namespaceURI === wi ? w === "svg" && (K === "annotation-xml" || Za[K]) : !!Qa[w];
  }, Jt = function(w, I, K) {
    return I.namespaceURI === Zt ? w === "math" : I.namespaceURI === qi ? w === "math" && Rt[K] : !!er[w];
  }, Ea = function(w, I, K) {
    return I.namespaceURI === qi && !Rt[K] || I.namespaceURI === wi && !Za[K] ? !1 : !er[w] && (vl[w] || !Qa[w]);
  }, gs = function(w) {
    let I = R(w);
    (!I || !I.tagName) && (I = {
      namespaceURI: Jn,
      tagName: "template"
    });
    const K = Cr(w.tagName), se = Cr(I.tagName);
    return Ca[w.namespaceURI] ? w.namespaceURI === qi ? tr(K, I, se) : w.namespaceURI === wi ? Jt(K, I, se) : w.namespaceURI === Zt ? Ea(K, I, se) : !!(xn === "application/xhtml+xml" && Ca[w.namespaceURI]) : !1;
  }, Ln = function(w) {
    pr(t.removed, {
      element: w
    });
    try {
      R(w).removeChild(w);
    } catch {
      if (O(w), !R(w))
        throw ia("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ms = function(w, I, K) {
    try {
      w.removeAttributeNode(I);
    } catch {
      try {
        w.removeAttribute(K);
      } catch {
      }
    }
  }, Aa = function(w) {
    dt(w);
    const I = L(w);
    if (I) {
      const se = [];
      sa(I, (ue) => {
        pr(se, ue);
      }), sa(se, (ue) => {
        try {
          O(ue);
        } catch {
        }
      });
    }
    const K = G(w);
    if (K)
      for (let se = K.length - 1; se >= 0; --se) {
        const ue = K[se], Ae = ue && ue.name;
        typeof Ae == "string" && ms(w, ue, Ae);
      }
  }, we = function(w, I, K) {
    if (!K)
      try {
        K = I.getAttributeNode(w);
      } catch {
        K = null;
      }
    pr(t.removed, {
      attribute: K || null,
      from: I
    });
    try {
      K ? I.removeAttributeNode(K) : I.removeAttribute(w);
    } catch {
      try {
        I.removeAttribute(w);
      } catch {
      }
    }
    if (w === "is")
      if (Wt || Yn)
        try {
          Ln(I);
        } catch {
        }
      else
        try {
          I.setAttribute(w, "");
        } catch {
        }
  }, Qn = function(w) {
    const I = G(w);
    if (I)
      for (let K = I.length - 1; K >= 0; --K) {
        const se = I[K], ue = se && se.name;
        typeof ue != "string" || x[st(ue)] || ms(w, se, ue);
      }
  }, dt = function(w) {
    const I = [w];
    for (; I.length > 0; ) {
      const K = I.pop();
      P(K) === tn.element && Qn(K);
      const ue = L(K);
      if (ue)
        for (let Ae = ue.length - 1; Ae >= 0; --Ae)
          I.push(ue[Ae]);
    }
  }, Rn = function(w, I) {
    return $e ? w === "patchsrc" ? !0 : w === "for" && I !== "label" && I !== "output" : !1;
  }, Qt = function(w) {
    if (!$e)
      return;
    const I = [w];
    for (; I.length > 0; ) {
      const K = I.pop(), se = P(K);
      if (se === tn.processingInstruction || se === tn.comment && Pt(Nd, K.data)) {
        try {
          O(K);
        } catch {
        }
        continue;
      }
      if (se === tn.element) {
        const Ae = K, Ze = st(ce(K));
        try {
          Ae.hasAttribute && Ae.hasAttribute("patchsrc") && Ae.removeAttribute("patchsrc"), Ae.hasAttribute && Ae.hasAttribute("for") && Rn("for", Ze) && Ae.removeAttribute("for");
        } catch {
        }
      }
      const ue = L(K);
      if (ue)
        for (let Ae = ue.length - 1; Ae >= 0; --Ae)
          I.push(ue[Ae]);
    }
  }, mt = function(w) {
    let I = null, K = null;
    if (Lt)
      w = "<remove></remove>" + w;
    else {
      const Ae = yd(w, /^[\r\n\t ]+/);
      K = Ae && Ae[0];
    }
    xn === "application/xhtml+xml" && Jn === Zt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const se = X ? $(w) : w;
    if (Jn === Zt)
      try {
        I = new u().parseFromString(se, xn);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = he.createDocument(Jn, "template", null);
      try {
        I.documentElement.innerHTML = Sa ? ae : se;
      } catch {
      }
    }
    const ue = I.body || I.documentElement;
    return w && K && ue.insertBefore(n.createTextNode(K), ue.childNodes[0] || null), Jn === Zt ? ve.call(I, Pe ? "html" : "body")[0] : Pe ? I.documentElement : ue;
  }, nr = function(w) {
    const I = ne ? ne(w) : w.ownerDocument;
    return fe.call(
      I || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, ln = function(w) {
    return w = vr(w, it, " "), w = vr(w, ot, " "), w = vr(w, lt, " "), w;
  }, _n = function(w) {
    var I;
    w.normalize();
    const K = ne ? ne(w) : w.ownerDocument, se = fe.call(
      K || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ue = se.nextNode();
    for (; ue; )
      ue.data = ln(ue.data), ue = se.nextNode();
    const Ae = (I = w.querySelectorAll) === null || I === void 0 ? void 0 : I.call(w, "template");
    Ae && sa(Ae, (Ze) => {
      It(Ze.content) && _n(Ze.content);
    });
  }, Ci = function(w) {
    const I = le ? le(w) : null;
    return typeof I != "string" || st(I) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    w.childNodes !== L(w);
  }, It = function(w) {
    if (!F || typeof w != "object" || w === null)
      return !1;
    try {
      return F(w) === tn.documentFragment;
    } catch {
      return !1;
    }
  }, In = function(w) {
    if (!F || typeof w != "object" || w === null)
      return !1;
    try {
      return typeof F(w) == "number";
    } catch {
      return !1;
    }
  };
  function qt(Z, w, I) {
    Z.length !== 0 && sa(Z, (K) => {
      K.call(t, w, I, yn);
    });
  }
  const Yi = function(w, I) {
    return !!($e && w.hasChildNodes() && !In(w.firstElementChild) && Pt(Od, w.textContent) && Pt(Od, w.innerHTML) || $e && w.namespaceURI === Zt && Db[I] && (In(w.firstElementChild) || typeof w.textContent == "string" && Pt($b[I], w.textContent)) || w.nodeType === tn.processingInstruction || $e && w.nodeType === tn.comment && Pt(Nd, w.data));
  }, Ti = function(w, I) {
    if (w instanceof RegExp)
      return Pt(w, I);
    if (w instanceof Function) {
      for (var K = arguments.length, se = new Array(K > 2 ? K - 2 : 0), ue = 2; ue < K; ue++)
        se[ue - 2] = arguments[ue];
      return !!w(I, ...se);
    }
    return !1;
  }, Pn = function(w, I, K) {
    if (!V[I] && Ji(I) && Ti(W.tagNameCheck, I))
      return !1;
    if (Ki && !Zn[I]) {
      const se = R(w), ue = L(w);
      if (ue && se) {
        const Ae = ue.length;
        for (let Ze = Ae - 1; Ze >= 0; --Ze) {
          const Je = w === K ? E(ue[Ze], !0) : ue[Ze];
          se.insertBefore(Je, A(w));
        }
      }
    }
    return Ln(w), !0;
  }, Ei = function(w, I, K, se) {
    return w.length === 0 ? I : I === K || I === se ? nn(I) : I;
  }, Xi = function(w, I) {
    return w === I || R(w) !== null ? !1 : (Wi && dt(w), !0);
  }, Zi = function(w, I) {
    if (qt(Ee.beforeSanitizeElements, w, null), Xi(w, I))
      return !0;
    if (Ci(w))
      return Ln(w), !0;
    const K = st(ce(w));
    if (k = Ei(Ee.uponSanitizeElement, k, N, rt), qt(Ee.uponSanitizeElement, w, {
      tagName: K,
      allowedTags: k
    }), Xi(w, I))
      return !0;
    if (Yi(w, K))
      return Ln(w), !0;
    if (V[K] || !(j.tagCheck instanceof Function && j.tagCheck(K)) && !k[K]) {
      const ue = Pn(w, K, I);
      return ue === !1 && qt(Ee.afterSanitizeElements, w, null), ue;
    }
    if (P(w) === tn.element && !gs(w) || (K === "noscript" || K === "noembed" || K === "noframes") && Pt(Ib, w.innerHTML))
      return Ln(w), !0;
    if (Le && w.nodeType === tn.text) {
      const ue = ln(w.textContent);
      w.textContent !== ue && (pr(t.removed, {
        element: w.cloneNode()
      }), w.textContent = ue);
    }
    return qt(Ee.afterSanitizeElements, w, null), !1;
  }, bs = function(w, I, K) {
    if (Q[I] || Rn(I, w) || jt && (I === "id" || I === "name") && (K in n || K in bl))
      return !1;
    const se = x[I] || j.attributeCheck instanceof Function && j.attributeCheck(I, w);
    return oe && Pt(St, I) || be && Pt(at, I) ? !0 : se ? hs[I] || Pt(C, vr(K, U, "")) || (I === "src" || I === "xlink:href" || I === "href") && w !== "script" && _d(K, "data:") === 0 && Ya[w] || ye && !Pt(on, vr(K, U, "")) ? !0 : !K : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Ji(w) && Ti(W.tagNameCheck, w) && Ti(W.attributeNameCheck, I, w) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      I === "is" && W.allowCustomizedBuiltInElements && Ti(W.tagNameCheck, K)
    );
  }, yl = je({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ji = function(w) {
    return !yl[Cr(w)] && Pt(v, w);
  }, ys = function(w, I, K, se) {
    if (X && typeof h == "object" && typeof h.getAttributeType == "function" && !K)
      switch (h.getAttributeType(w, I)) {
        case "TrustedHTML":
          return $(se);
        case "TrustedScriptURL":
          return Y(se);
      }
    return se;
  }, _s = function(w, I, K, se) {
    try {
      K ? w.setAttributeNS(K, I, se) : w.setAttribute(I, se), Ci(w) ? Ln(w) : bd(t.removed);
    } catch {
      we(I, w);
    }
  }, ws = function(w) {
    qt(Ee.beforeSanitizeAttributes, w, null);
    const I = w.attributes;
    if (!I || Ci(w))
      return;
    x = Ei(Ee.uponSanitizeAttribute, x, z, Ct);
    const K = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: x,
      forceKeepAttr: void 0
    };
    let se = I.length;
    const ue = st(w.nodeName);
    for (; se--; ) {
      const Ae = I[se], Ze = Ae.name, Je = Ae.namespaceURI, nt = Ae.value, bt = st(Ze), Oa = nt;
      let Tt = Ze === "value" ? Oa : vb(Oa);
      if (K.attrName = bt, K.attrValue = Tt, K.keepAttr = !0, K.forceKeepAttr = void 0, qt(Ee.uponSanitizeAttribute, w, K), Tt = K.attrValue, _i && (bt === "id" || bt === "name") && _d(Tt, Xn) !== 0 && (we(Ze, w, Ae), Tt = Xn + Tt), $e && Pt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Tt)) {
        we(Ze, w, Ae);
        continue;
      }
      if (bt === "attributename" && yd(Tt, "href")) {
        we(Ze, w, Ae);
        continue;
      }
      if (!K.forceKeepAttr) {
        if (!K.keepAttr) {
          we(Ze, w, Ae);
          continue;
        }
        if (!pe && Pt(Pb, Tt)) {
          we(Ze, w, Ae);
          continue;
        }
        if (Le && (Tt = ln(Tt)), !bs(ue, bt, Tt)) {
          we(Ze, w, Ae);
          continue;
        }
        Tt = ys(ue, bt, Je, Tt), Tt !== Oa && _s(w, Ze, Je, Tt);
      }
    }
    qt(Ee.afterSanitizeAttributes, w, null);
  }, ka = function(w) {
    let I = null;
    const K = nr(w);
    for (qt(Ee.beforeSanitizeShadowDOM, w, null); I = K.nextNode(); )
      if (qt(Ee.uponSanitizeShadowNode, I, null), Zi(I, w), ws(I), It(I.content) && ka(I.content), P(I) === tn.element) {
        const se = M(I);
        It(se) && (ir(se), ka(se));
      }
    qt(Ee.afterSanitizeShadowDOM, w, null);
  }, ir = function(w) {
    const I = [{
      node: w,
      shadow: null
    }];
    for (; I.length > 0; ) {
      const K = I.pop();
      if (K.shadow) {
        ka(K.shadow);
        continue;
      }
      const se = K.node, Ae = P(se) === tn.element, Ze = L(se);
      if (Ze)
        for (let Je = Ze.length - 1; Je >= 0; --Je)
          I.push({
            node: Ze[Je],
            shadow: null
          });
      if (Ae) {
        const Je = le ? le(se) : null;
        if (typeof Je == "string" && st(Je) === "template") {
          const nt = se.content;
          It(nt) && I.push({
            node: nt,
            shadow: null
          });
        }
      }
      if (Ae) {
        const Je = M(se);
        It(Je) && I.push({
          node: null,
          shadow: Je
        }, {
          node: Je,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(Z) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, K = null, se = null, ue = null;
    if (Sa = !Z, Sa && (Z = "<!-->"), typeof Z != "string" && !In(Z) && (Z = _b(Z), typeof Z != "string"))
      throw ia("dirty is not a string, aborting");
    if (!t.isSupported)
      return Z;
    Qe ? (k = rt, x = Ct) : Si(w), (Ee.uponSanitizeElement.length > 0 || Ee.uponSanitizeAttribute.length > 0) && (k = nn(k)), Ee.uponSanitizeAttribute.length > 0 && (x = nn(x)), t.removed = [];
    const Ae = Wi && typeof Z != "string" && In(Z);
    if (Ae) {
      Qt(Z);
      const nt = ce(Z);
      if (typeof nt == "string") {
        const bt = st(nt);
        if (!k[bt] || V[bt])
          throw Aa(Z), ia("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ci(Z))
        throw Aa(Z), ia("root node is clobbered and cannot be sanitized in-place");
      try {
        ir(Z);
      } catch (bt) {
        throw Aa(Z), bt;
      }
    } else if (In(Z))
      I = mt("<!---->"), K = I.ownerDocument.importNode(Z, !0), K.nodeType === tn.element && K.nodeName === "BODY" || K.nodeName === "HTML" ? I = K : I.appendChild(K), ir(K);
    else {
      if (!Wt && !Le && !Pe && // eslint-disable-next-line unicorn/prefer-includes
      Z.indexOf("<") === -1)
        return X && ut ? $(Z) : Z;
      if (I = mt(Z), !I)
        return Wt ? null : ut ? ae : "";
    }
    I && Lt && Ln(I.firstChild);
    const Ze = Ae ? Z : I;
    try {
      const nt = nr(Ze);
      for (; se = nt.nextNode(); )
        Zi(se, Ze), ws(se), It(se.content) && ka(se.content);
    } catch (nt) {
      throw Ae && (Aa(Z), sa(t.removed, (bt) => {
        bt.element && dt(bt.element);
      })), nt;
    }
    if (Ae)
      return sa(t.removed, (nt) => {
        nt.element && dt(nt.element);
      }), Le && _n(Z), Z;
    if (Wt) {
      if (Le && _n(I), Yn)
        for (ue = Te.call(I.ownerDocument); I.firstChild; )
          ue.appendChild(I.firstChild);
      else
        ue = I;
      return (x.shadowroot || x.shadowrootmode) && (ue = He.call(i, ue, !0)), ue;
    }
    let Je = Pe ? I.outerHTML : I.innerHTML;
    return Pe && k["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && Pt(Lb, I.ownerDocument.doctype.name) && (Je = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + Je), Le && (Je = ln(Je)), X && ut ? $(Je) : Je;
  }, t.setConfig = function() {
    let Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Si(Z), Qe = !0, rt = k, Ct = x;
  }, t.clearConfig = function() {
    yn = null, Qe = !1, rt = null, Ct = null, X = me, ae = "";
  }, t.isValidAttribute = function(Z, w, I) {
    yn || Si({});
    const K = st(Z), se = st(w);
    return bs(K, se, I);
  }, t.addHook = function(Z, w) {
    typeof w == "function" && Xt(Ee, Z) && pr(Ee[Z], w);
  }, t.removeHook = function(Z, w) {
    if (Xt(Ee, Z)) {
      if (w !== void 0) {
        const I = hb(Ee[Z], w);
        return I === -1 ? void 0 : pb(Ee[Z], I, 1)[0];
      }
      return bd(Ee[Z]);
    }
  }, t.removeHooks = function(Z) {
    Xt(Ee, Z) && (Ee[Z] = []);
  }, t.removeAllHooks = function() {
    Ee = xd();
  }, t;
}
var Wh = Kh();
function ru(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hl, Ld;
function zb() {
  if (Ld) return Hl;
  Ld = 1;
  var e = /["'&<>]/;
  Hl = t;
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
  return Hl;
}
var Ub = zb();
const ro = /* @__PURE__ */ ru(Ub);
function Bb() {
  return globalThis._nc_l10n_locale;
}
function Hb() {
  return Bb().replaceAll(/_/g, "-");
}
function ll() {
  return globalThis._nc_l10n_language;
}
function jb(e) {
  const t = ll();
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
function qh(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function m(e, t, n, i, a) {
  const r = typeof n == "object" ? n : void 0, s = typeof i == "number" ? i : typeof n == "number" ? n : void 0, o = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof i == "object" ? i : {}
  }, l = (A) => A, d = (o.sanitize ? Wh.sanitize : l) || l, u = o.escape ? ro : l, h = (A) => typeof A == "string" || typeof A == "number", S = (A, L, R) => A.replace(/%n/g, "" + R).replace(/{([^{}]*)}/g, (M, G) => {
    if (L === void 0 || !(G in L))
      return u(M);
    const F = L[G];
    return h(F) ? u(`${F}`) : typeof F == "object" && h(F.value) ? (F.escape !== !1 ? ro : l)(`${F.value}`) : u(M);
  });
  let O = (a?.bundle ?? qh(e)).translations[t] || t;
  return O = Array.isArray(O) ? O[0] : O, d(typeof r == "object" || s !== void 0 ? S(
    O,
    r,
    s
  ) : O);
}
function Bn(e, t, n, i, a, r) {
  const s = "_" + t + "_::_" + n + "_", o = r?.bundle ?? qh(e), l = o.translations[s];
  if (typeof l < "u") {
    const d = l;
    if (Array.isArray(d)) {
      const u = o.pluralFunction(i);
      return m(e, d[u], a, i, r);
    }
  }
  return i === 1 ? m(e, t, a, i, r) : m(e, n, a, i, r);
}
function Vb(e, t = ll()) {
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
class so {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? so.GLOBAL_SCOPE_PERSISTENT : so.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class Gb {
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
    return new so(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function Yh(e) {
  return new Gb(e);
}
function Kb() {
  try {
    return au("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var jl, Rd;
function Xh() {
  if (Rd) return jl;
  Rd = 1;
  var e = {};
  return jl = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, jl;
}
var Vl, Id;
function Zh() {
  if (Id) return Vl;
  Id = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return Vl = {
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
  }, Vl;
}
var Rs = { exports: {} }, Pd;
function Wb() {
  return Pd || (Pd = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = Zh(), r = Xh();
    t = e.exports = {};
    const s = t.re = [], o = t.safeRe = [], l = t.src = [], d = t.safeSrc = [], u = t.t = {};
    let h = 0;
    const S = "[a-zA-Z0-9-]", E = [
      ["\\s", 1],
      ["\\d", a],
      [S, i]
    ], O = (L) => {
      for (const [R, M] of E)
        L = L.split(`${R}*`).join(`${R}{0,${M}}`).split(`${R}+`).join(`${R}{1,${M}}`);
      return L;
    }, A = (L, R, M) => {
      const G = O(R), F = h++;
      r(L, F, R), u[L] = F, l[F] = R, d[F] = G, s[F] = new RegExp(R, M ? "g" : void 0), o[F] = new RegExp(G, M ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${S}*`), A("MAINVERSION", `(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${l[u.PRERELEASEIDENTIFIER]}(?:\\.${l[u.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${l[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[u.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${S}+`), A("BUILD", `(?:\\+(${l[u.BUILDIDENTIFIER]}(?:\\.${l[u.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${l[u.MAINVERSION]}${l[u.PRERELEASE]}?${l[u.BUILD]}?`), A("FULL", `^${l[u.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${l[u.MAINVERSIONLOOSE]}${l[u.PRERELEASELOOSE]}?${l[u.BUILD]}?`), A("LOOSE", `^${l[u.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${l[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${l[u.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:${l[u.PRERELEASE]})?${l[u.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:${l[u.PRERELEASELOOSE]})?${l[u.BUILD]}?)?)?`), A("XRANGE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${l[u.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", l[u.COERCEPLAIN] + `(?:${l[u.PRERELEASE]})?(?:${l[u.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", l[u.COERCE], !0), A("COERCERTLFULL", l[u.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${l[u.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${l[u.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${l[u.LONECARET]}${l[u.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${l[u.LONECARET]}${l[u.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${l[u.GTLT]}\\s*(${l[u.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]}|${l[u.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${l[u.XRANGEPLAIN]})\\s+-\\s+(${l[u.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${l[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[u.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(Rs, Rs.exports)), Rs.exports;
}
var Gl, Dd;
function qb() {
  if (Dd) return Gl;
  Dd = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Gl = (i) => i ? typeof i != "object" ? e : i : t, Gl;
}
var Kl, $d;
function Yb() {
  if ($d) return Kl;
  $d = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), s = e.test(a);
    return r && s && (i = +i, a = +a), i === a ? 0 : r && !s ? -1 : s && !r ? 1 : i < a ? -1 : 1;
  };
  return Kl = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, Kl;
}
var Wl, Md;
function Jh() {
  if (Md) return Wl;
  Md = 1;
  const e = Xh(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = Zh(), { safeRe: i, t: a } = Wb(), r = qb(), { compareIdentifiers: s } = Yb(), o = (d, u) => {
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
          const O = +E;
          if (O >= 0 && O < n)
            return O;
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
            let O = this.prerelease.length;
            for (; --O >= 0; )
              typeof this.prerelease[O] == "number" && (this.prerelease[O]++, O = -2);
            if (O === -1) {
              if (h === this.prerelease.join(".") && S === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(E);
            }
          }
          if (h) {
            let O = [h, E];
            if (S === !1 && (O = [h]), o(this.prerelease, h)) {
              const A = this.prerelease[h.split(".").length];
              isNaN(A) && (this.prerelease = O);
            } else
              this.prerelease = O;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${u}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return Wl = l, Wl;
}
var ql, Fd;
function Xb() {
  if (Fd) return ql;
  Fd = 1;
  const e = Jh();
  return ql = (n, i) => new e(n, i).major, ql;
}
var Zb = Xb();
const zd = /* @__PURE__ */ ru(Zb);
var Yl, Ud;
function Jb() {
  if (Ud) return Yl;
  Ud = 1;
  const e = Jh();
  return Yl = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, Yl;
}
var Xl, Bd;
function Qb() {
  if (Bd) return Xl;
  Bd = 1;
  const e = Jb();
  return Xl = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Xl;
}
var ey = Qb();
const ty = /* @__PURE__ */ ru(ey);
class ny {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !ty(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : zd(t.getVersion()) !== zd(this.getVersion()) && console.warn(
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
class iy {
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
let mr = null;
function su() {
  return mr !== null ? mr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? mr = new ny(window._nc_event_bus) : mr = window._nc_event_bus = new iy(), mr);
}
function Qh(e, t) {
  su().subscribe(e, t);
}
function ay(e, t) {
  su().unsubscribe(e, t);
}
function hi(e, ...t) {
  su().emit(e, ...t);
}
const ep = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ry = Object.prototype.toString, sy = (e) => ry.call(e) === "[object Object]", Ra = () => {
}, oy = /* @__PURE__ */ ly();
function ly() {
  var e, t, n;
  return ep && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function Zl(e) {
  return Array.isArray(e) ? e : [e];
}
function cy(e, t, n) {
  return pt(e, t, {
    ...n,
    immediate: !0
  });
}
const tp = ep ? window : void 0;
function Tr(e) {
  var t;
  const n = di(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Ga(...e) {
  const t = (i, a, r, s) => (i.addEventListener(a, r, s), () => i.removeEventListener(a, r, s)), n = q(() => {
    const i = Zl(di(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return cy(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Tr(r))) !== null && i !== void 0 ? i : [tp].filter((r) => r != null),
      Zl(di(n.value ? e[1] : e[0])),
      Zl(g(n.value ? e[2] : e[1])),
      di(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, s], o, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const d = sy(s) ? { ...s } : s, u = i.flatMap((h) => a.flatMap((S) => r.map((E) => t(h, S, E, d))));
    l(() => {
      u.forEach((h) => h());
    });
  }, { flush: "post" });
}
let Hd = !1;
function jd(e, t, n = {}) {
  const { window: i = tp, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: o = !1 } = n;
  if (!i) return o ? {
    stop: Ra,
    cancel: Ra,
    trigger: Ra
  } : Ra;
  if (oy && !Hd) {
    Hd = !0;
    const L = { passive: !0 };
    Array.from(i.document.body.children).forEach((R) => R.addEventListener("click", Ra, L)), i.document.documentElement.addEventListener("click", Ra, L);
  }
  let l = !0;
  const d = (L) => di(a).some((R) => {
    if (typeof R == "string") return Array.from(i.document.querySelectorAll(R)).some((M) => M === L.target || L.composedPath().includes(M));
    {
      const M = Tr(R);
      return M && (L.target === M || L.composedPath().includes(M));
    }
  });
  function u(L) {
    const R = di(L);
    return R && R.$.subTree.shapeFlag === 16;
  }
  function h(L, R) {
    const M = di(L), G = M.$.subTree && M.$.subTree.children;
    return G == null || !Array.isArray(G) ? !1 : G.some((F) => F.el === R.target || R.composedPath().includes(F.el));
  }
  const S = (L) => {
    const R = Tr(e);
    if (L.target != null && !(!(R instanceof Element) && u(e) && h(e, L)) && !(!R || R === L.target || L.composedPath().includes(R))) {
      if ("detail" in L && L.detail === 0 && (l = !d(L)), !l) {
        l = !0;
        return;
      }
      t(L);
    }
  };
  let E = !1;
  const O = [
    Ga(i, "click", (L) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), S(L));
    }, {
      passive: !0,
      capture: r
    }),
    Ga(i, "pointerdown", (L) => {
      const R = Tr(e);
      l = !d(L) && !!(R && !L.composedPath().includes(R));
    }, { passive: !0 }),
    s && Ga(i, "blur", (L) => {
      setTimeout(() => {
        const R = Tr(e);
        let M = i.document.activeElement;
        for (; M?.shadowRoot; ) M = M.shadowRoot.activeElement;
        M?.tagName === "IFRAME" && !R?.contains(i.document.activeElement) && t(L);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), A = () => O.forEach((L) => L());
  return o ? {
    stop: A,
    cancel: () => {
      l = !1;
    },
    trigger: (L) => {
      l = !0, S(L), l = !1;
    }
  } : A;
}
function uy(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, o = /* @__PURE__ */ $t({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ $t({
    x: 0,
    y: 0
  }), d = q(() => o.x - l.x), u = q(() => o.y - l.y), { max: h, abs: S } = Math, E = q(() => h(S(d.value), S(u.value)) >= n), O = /* @__PURE__ */ Wf(!1), A = q(() => E.value ? S(d.value) > S(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), L = (P) => [P.touches[0].clientX, P.touches[0].clientY], R = (P, ce) => {
    o.x = P, o.y = ce;
  }, M = (P, ce) => {
    l.x = P, l.y = ce;
  }, G = {
    passive: s,
    capture: !s
  }, F = (P) => {
    O.value && a?.(P, A.value), O.value = !1;
  }, le = [
    Ga(e, "touchstart", (P) => {
      if (P.touches.length !== 1) return;
      const [ce, X] = L(P);
      R(ce, X), M(ce, X), r?.(P);
    }, G),
    Ga(e, "touchmove", (P) => {
      if (P.touches.length !== 1) return;
      const [ce, X] = L(P);
      M(ce, X), G.capture && !G.passive && Math.abs(d.value) > Math.abs(u.value) && P.preventDefault(), !O.value && E.value && (O.value = !0), O.value && i?.(P);
    }, G),
    Ga(e, ["touchend", "touchcancel"], F, G)
  ];
  return {
    isSwiping: O,
    direction: A,
    coordsStart: o,
    coordsEnd: l,
    lengthX: d,
    lengthY: u,
    stop: () => le.forEach((P) => P())
  };
}
var dy = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = zg(), r = Fg(), s = /* @__PURE__ */ Fe([]), o = q(() => s.value.reduce((U, v) => (U[~~v.id] = v) && U, {})), l = q(() => s.value.length), d = /* @__PURE__ */ Fe(null), u = /* @__PURE__ */ Fe(!1), h = /* @__PURE__ */ Fe({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), S = /* @__PURE__ */ Fe({
      splitter: null,
      timeoutId: null
    }), E = q(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": h.value.dragging,
      "splitpanes--ready": u.value
    })), O = () => {
      document.addEventListener("mousemove", R, { passive: !1 }), document.addEventListener("mouseup", M), "ontouchstart" in window && (document.addEventListener("touchmove", R, { passive: !1 }), document.addEventListener("touchend", M));
    }, A = () => {
      document.removeEventListener("mousemove", R, { passive: !1 }), document.removeEventListener("mouseup", M), "ontouchstart" in window && (document.removeEventListener("touchmove", R, { passive: !1 }), document.removeEventListener("touchend", M));
    }, L = (U, v) => {
      let C = U.target.closest(".splitpanes__splitter");
      if (C) {
        let { left: k, top: N } = C.getBoundingClientRect(), { clientX: x, clientY: z } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
        h.value.cursorOffset = i.horizontal ? z - N : x - k;
      }
      O(), h.value.mouseDown = !0, h.value.activeSplitter = v, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, R = (U) => {
      h.value.mouseDown && (U.preventDefault(), h.value.dragging || (window.getSelection()?.removeAllRanges(), h.value.dragging = !0), requestAnimationFrame(() => {
        X(P(U)), at("resize", { event: U }, !0);
      }));
    }, M = (U) => {
      h.value.dragging && (window.getSelection()?.removeAllRanges(), at("resized", { event: U }, !0)), h.value.mouseDown = !1, h.value.activeSplitter = null, setTimeout(() => {
        h.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, G = (U, v) => {
      "ontouchstart" in window && (U.preventDefault(), S.value.splitter === v ? (clearTimeout(S.value.timeoutId), S.value.timeoutId = null, F(U, v), S.value.splitter = null) : (S.value.splitter = v, S.value.timeoutId = setTimeout(() => S.value.splitter = null, 500))), h.value.dragging || at("splitter-click", {
        event: U,
        index: v
      }, !0);
    }, F = (U, v) => {
      if (at("splitter-dblclick", {
        event: U,
        index: v
      }, !0), i.maximizePanes) {
        let C = 0;
        s.value = s.value.map((k, N) => (k.size = N === v ? k.max : k.min, N !== v && (C += k.min), k)), s.value[v].size -= C, at("pane-maximize", {
          event: U,
          index: v,
          pane: s.value[v]
        }), at("resized", {
          event: U,
          index: v
        }, !0);
      }
    }, le = (U, v) => {
      if (!i.keyboardStep) return;
      let C = i.horizontal ? U.key === "ArrowDown" : U.key === "ArrowRight", k = i.horizontal ? U.key === "ArrowUp" : U.key === "ArrowLeft";
      if (!C && !k) return;
      U.preventDefault(), h.value.activeSplitter = v;
      let N = (C ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), x = J(v) + s.value[v].size;
      ae(Math.min(Math.max(x + N * i.keyboardStep, 0), 100)), at("resize", { event: U }, !0), at("resized", { event: U }, !0), h.value.activeSplitter = null;
    }, ne = (U, v) => {
      let C = o.value[v];
      C && at("pane-click", {
        event: U,
        index: C.index,
        pane: C
      });
    }, P = (U) => {
      let v = d.value.getBoundingClientRect(), { clientX: C, clientY: k } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
      return {
        x: C - (i.horizontal ? 0 : h.value.cursorOffset) - v.left,
        y: k - (i.horizontal ? h.value.cursorOffset : 0) - v.top
      };
    }, ce = (U) => {
      U = U[i.horizontal ? "y" : "x"];
      let v = d.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (U = v - U), U * 100 / v;
    }, X = (U) => {
      ae(ce(U));
    }, ae = (U) => {
      let v = h.value.activeSplitter;
      if (v === null || v >= s.value.length - 1) return;
      let C = {
        prevPanesSize: J(v),
        nextPanesSize: te(v),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, k = 0 + (i.pushOtherPanes ? 0 : C.prevPanesSize), N = 100 - (i.pushOtherPanes ? 0 : C.nextPanesSize);
      U = Math.max(Math.min(U, N), k);
      let x = [v, v + 1], z = s.value[x[0]] || null, W = s.value[x[1]] || null, V = z !== null && z.max < 100 && U >= z.max + C.prevPanesSize, Q = W !== null && W.max < 100 && U <= 100 - (W.max + te(v + 1));
      if (V || Q) {
        V ? (z.size = z.max, W.size = Math.min(Math.max(100 - z.max - C.prevPanesSize - C.nextPanesSize, W.min), W.max)) : (z.size = Math.min(Math.max(100 - W.max - C.prevPanesSize - te(v + 1), z.min), z.max), W.size = W.max);
        return;
      }
      if (i.pushOtherPanes) {
        let j = me(C, U);
        if (!j) return;
        ({ sums: C, panesToResize: x } = j), z = s.value[x[0]] || null, W = s.value[x[1]] || null;
      }
      z !== null && (z.size = Math.min(Math.max(U - C.prevPanesSize - C.prevReachedMinPanes, z.min), z.max)), W !== null && (W.size = Math.min(Math.max(100 - U - C.nextPanesSize - C.nextReachedMinPanes, W.min), W.max));
    }, me = (U, v) => {
      let C = h.value.activeSplitter, k = [C, C + 1];
      if (v < U.prevPanesSize + s.value[k[0]].min) {
        if (k[0] = D(C).index, U.prevReachedMinPanes = 0, k[0] < C && s.value.forEach((N, x) => {
          x > k[0] && x <= C && (N.size = N.min, U.prevReachedMinPanes += N.min);
        }), k[0] === void 0) return U.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((N, x) => {
          x > 0 && x <= C && (N.size = N.min, U.prevReachedMinPanes += N.min);
        }), s.value[k[1]].size = 100 - U.prevReachedMinPanes - s.value[0].min - U.prevPanesSize - U.nextPanesSize, null;
        U.prevPanesSize = J(k[0]);
      }
      return v > 100 - U.nextPanesSize - s.value[k[1]].min && (k[1] = $(C).index, U.nextReachedMinPanes = 0, k[1] > C + 1 && s.value.forEach((N, x) => {
        x > C && x < k[1] && (N.size = N.min, U.nextReachedMinPanes += N.min);
      }), U.nextPanesSize = k[1] === void 0 ? 0 : te(k[1] - 1), k[1] === void 0) ? (U.nextReachedMinPanes = 0, s.value.forEach((N, x) => {
        x >= C + 1 && (N.size = N.min, U.nextReachedMinPanes += N.min);
      }), k[0] !== void 0 && (s.value[k[0]].size = 100 - U.prevPanesSize - te(k[0] - 1)), null) : {
        sums: U,
        panesToResize: k
      };
    }, J = (U) => s.value.reduce((v, C, k) => v + (k < U ? C.size : 0), 0), te = (U) => s.value.reduce((v, C, k) => v + (k > U + 1 ? C.size : 0), 0), D = (U) => [...s.value].reverse().find((v) => v.index < U && v.size > v.min) || {}, $ = (U) => s.value.find((v) => v.index > U + 1 && v.size > v.min) || {}, Y = () => {
      let U = Array.from(d.value?.children || []);
      for (let v of U) {
        let C = v.classList.contains("splitpanes__pane"), k = v.classList.contains("splitpanes__splitter");
        !C && !k && (v.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, re = (U, v, C = !1) => {
      let k = U - 1, N = document.createElement("div");
      N.classList.add("splitpanes__splitter"), C || (N.onmousedown = (x) => L(x, k), typeof window < "u" && "ontouchstart" in window && (N.ontouchstart = (x) => L(x, k)), N.onclick = (x) => G(x, k + 1), i.keyboardStep && (N.setAttribute("tabindex", "0"), N.setAttribute("role", "separator"), N.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), N.onkeydown = (x) => le(x, k))), N.ondblclick = (x) => F(x, k + 1), v.parentNode.insertBefore(N, v);
    }, ie = (U) => {
      U.onmousedown = null, U.onclick = null, U.ondblclick = null, U.onkeydown = null, U.remove();
    }, he = () => {
      let U = Array.from(d.value?.children || []);
      for (let C of U) C.className.includes("splitpanes__splitter") && ie(C);
      let v = 0;
      for (let C of U) C.className.includes("splitpanes__pane") && (!v && i.firstSplitter ? re(v, C, !0) : v && re(v, C), v++);
    }, fe = ({ uid: U, ...v }) => {
      let C = o.value[U];
      for (let [k, N] of Object.entries(v)) C[k] = N;
    }, Te = !1, ve = (U) => {
      let v = -1;
      Array.from(d.value?.children || []).some((C) => (C.className.includes("splitpanes__pane") && v++, C.isSameNode(U.el))), s.value.splice(v, 0, {
        ...U,
        index: v
      }), s.value.forEach((C, k) => C.index = k), u.value && !Te && (Te = !0, pn(() => {
        he(), Ee({ addedPane: s.value[v] }), at("pane-add", { pane: s.value[v] }), Te = !1;
      }));
    }, He = (U) => {
      let v = s.value.findIndex((k) => k.id === U);
      s.value[v].el = null;
      let C = s.value.splice(v, 1)[0];
      s.value.forEach((k, N) => k.index = N), pn(() => {
        he(), at("pane-remove", { pane: C }), Ee({ removedPane: {
          ...C
        } });
      });
    }, Ee = (U = {}) => {
      !U.addedPane && !U.removedPane ? ot() : s.value.some((v) => v.givenSize !== null || v.min || v.max < 100) ? lt(U) : it(), u.value && at("resized");
    }, it = () => {
      let U = 100 / l.value, v = 100, C = [], k = [];
      for (let N of s.value) N.size = Math.max(Math.min(U, N.max), N.min), v -= N.size, N.size >= N.max && C.push(N.id), N.size <= N.min && k.push(N.id);
      Math.abs(v) > 0.1 && St(v, C, k);
    }, ot = () => {
      let U = 100, v = [], C = [], k = 0;
      for (let x of s.value) U -= x.size, x.givenSize !== null && k++, x.size >= x.max && v.push(x.id), x.size <= x.min && C.push(x.id);
      let N = 100;
      if (U > 0.1) {
        for (let x of s.value) x.givenSize === null && (x.size = Math.max(Math.min(U / (l.value - k), x.max), x.min)), N -= x.size;
        N > 0.1 && St(N, v, C);
      }
    }, lt = ({ addedPane: U, removedPane: v } = {}) => {
      let C = s.value.reduce((V, Q) => V + (Q.givenSize === null ? 0 : Q.givenSize), 0), k = s.value.filter((V) => V.givenSize === null).length, N = k > 0 ? (100 - C) / k : 0, x = 0, z = [], W = [];
      for (let V of s.value) x -= V.size, V.size >= V.max && z.push(V.id), V.size <= V.min && W.push(V.id);
      if (!(Math.abs(x) < 0.1)) {
        x = 100;
        for (let V of s.value) V.givenSize === null && (V.size = Math.max(Math.min(N, V.max), V.min)), x -= V.size, V.size >= V.max && z.push(V.id), V.size <= V.min && W.push(V.id);
        Math.abs(x) > 0.1 && St(x, z, W);
      }
    }, St = (U, v, C) => {
      let k;
      k = U > 0 ? U / (l.value - v.length) : U / (l.value - C.length), s.value.forEach((N, x) => {
        if (U > 0 && !v.includes(N.id)) {
          let z = Math.max(Math.min(N.size + k, N.max), N.min), W = z - N.size;
          U -= W, N.size = z;
        } else if (!C.includes(N.id)) {
          let z = Math.max(Math.min(N.size + k, N.max), N.min), W = z - N.size;
          U -= W, N.size = z;
        }
      }), Math.abs(U) > 0.1 && u.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, at = (U, v = void 0, C = !1) => {
      let k = v?.index ?? h.value.activeSplitter ?? null;
      n(U, {
        ...v,
        ...k !== null && { index: k },
        ...C && k !== null && {
          prevPane: s.value[k - +!!i.firstSplitter],
          nextPane: s.value[k + +!i.firstSplitter]
        },
        panes: s.value.map((N) => ({
          min: N.min,
          max: N.max,
          size: N.size
        }))
      });
    };
    pt(() => i.firstSplitter, () => he()), pt(() => i.horizontal, (U) => pn(() => {
      n("direction-changed", {
        horizontal: U,
        panes: s.value.map((v) => ({
          min: v.min,
          max: v.max,
          size: v.size
        }))
      });
    })), ji(() => {
      Y(), he(), Ee(), at("ready"), u.value = !0;
    }), qa(() => u.value = !1);
    let on = () => {
      let { class: U, ...v } = a;
      return Yt("div", {
        ref: d,
        class: [E.value, U],
        ...v
      }, r.default?.());
    };
    return fn("panes", s), fn("indexedPanes", o), fn("horizontal", q(() => i.horizontal)), fn("requestUpdate", fe), fn("onPaneAdd", ve), fn("onPaneRemove", He), fn("onPaneClick", ne), (U, v) => (b(), De(Jc(on)));
  }
}), fy = {
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
    let t = e, n = Ft("requestUpdate"), i = Ft("onPaneAdd"), a = Ft("horizontal"), r = Ft("onPaneRemove"), s = Ft("onPaneClick"), o = ya()?.uid, l = Ft("indexedPanes"), d = q(() => l.value[o]), u = /* @__PURE__ */ Fe(null), h = q(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, E.value), S.value);
    }), S = q(() => {
      let A = parseFloat(t.minSize);
      return isNaN(A) ? 0 : A;
    }), E = q(() => {
      let A = parseFloat(t.maxSize);
      return isNaN(A) ? 100 : A;
    }), O = q(() => {
      let A = d.value?.size ?? (t.size === void 0 ? void 0 : h.value);
      return A === void 0 ? "" : `${a.value ? "height" : "width"}: ${A}%`;
    });
    return pt(() => h.value, (A) => n({
      uid: o,
      size: A
    })), pt(() => S.value, (A) => n({
      uid: o,
      min: A
    })), pt(() => E.value, (A) => n({
      uid: o,
      max: A
    })), ji(() => {
      i({
        id: o,
        el: u.value,
        min: S.value,
        max: E.value,
        givenSize: t.size === void 0 ? null : h.value,
        size: h.value
      });
    }), qa(() => r(o)), (A, L) => (b(), T("div", {
      ref_key: "paneEl",
      ref: u,
      class: "splitpanes__pane",
      onClick: L[0] ||= (R) => g(s)(R, A._.uid),
      style: sn(O.value)
    }, [Re(A.$slots, "default")], 4));
  }
}, hy = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", py = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", vy = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", gy = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const ou = 1024, np = ou / 2, oo = (e) => document.documentElement.clientWidth < e, ip = /* @__PURE__ */ Fe(oo(ou)), ap = /* @__PURE__ */ Fe(oo(np));
window.addEventListener("resize", () => {
  ip.value = oo(ou), ap.value = oo(np);
}, { passive: !0 });
function ds() {
  return /* @__PURE__ */ Vr(ip);
}
function my() {
  return /* @__PURE__ */ Vr(ap);
}
class by {
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
    return m("", t, n, void 0, { bundle: this.bundle });
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
    return Bn("", t, n, i, a, { bundle: this.bundle });
  }
}
class yy {
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
    return this.setLanguage(ll().replace("-", "_"));
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
    const t = new by((n) => Vb(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function _y() {
  return new yy();
}
const rp = _y().detectLanguage().build(), _t = (...e) => rp.gettext(...e);
function Vi(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== ll() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        rp.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const wy = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], Sy = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], Cy = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], Ty = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], Ey = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], Ay = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], ky = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], Oy = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], Ny = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const xy = /* @__PURE__ */ Symbol(""), [Ly] = window.OC?.config?.version?.split(".") ?? [], sp = Number.parseInt(Ly ?? "35"), Ry = sp < 32, Gi = sp < 34, Iy = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function Py() {
  return Ft(Iy, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Xe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, Dy = { class: "button-vue__wrapper" }, $y = { class: "button-vue__icon" }, My = { class: "button-vue__text" }, Fy = /* @__PURE__ */ xt({
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
    const n = e, i = t, { formBoxItemClass: a } = Py(), r = Ft(xy, null) !== null, s = q(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), o = q(() => s.value === "button" && typeof n.pressed == "boolean"), l = q(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), d = q(() => l.value.startsWith("tertiary")), u = q(() => n.alignment.split("-")[0]), h = q(() => n.alignment.includes("-")), S = Ft("NcPopover:trigger:attrs", () => ({}), !1), E = q(() => S()), O = q(() => {
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
    function A(L) {
      o.value && i("update:pressed", !n.pressed), i("click", L);
    }
    return (L, R) => (b(), De(Jc(s.value), Ht({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": d.value,
          "button-vue--wide": e.wide,
          [`button-vue--${u.value}`]: u.value !== "center",
          "button-vue--reverse": h.value,
          "button-vue--legacy": g(Ry),
          "button-vue--legacy34": g(Gi)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, O.value, { onClick: A }), {
      default: Oe(() => [
        c("span", Dy, [
          c("span", $y, [
            Re(L.$slots, "icon", {}, void 0, !0)
          ]),
          c("span", My, [
            Re(L.$slots, "default", {}, () => [
              Ne(p(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Kn = /* @__PURE__ */ Xe(Fy, [["__scopeId", "data-v-47ce59a3"]]), zy = ["aria-hidden", "aria-label"], Uy = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, By = ["d"], Hy = ["innerHTML"], jy = /* @__PURE__ */ xt({
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
    Im((a) => ({
      fb515064: n.value
    }));
    const t = e, n = q(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = q(() => {
      if (!t.svg || t.path)
        return;
      const a = Wh.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (b(), T("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Ce(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (b(), T("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, Hy)) : (b(), T("svg", Uy, [
        c("path", { d: e.path }, null, 8, By)
      ]))
    ], 10, zy));
  }
}), cl = /* @__PURE__ */ Xe(jy, [["__scopeId", "data-v-aaedb1c3"]]);
Gy();
function Vy(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), hi("csrf-token-update", { token: e, _internal: !0 }));
}
function Gy() {
  Qh("csrf-token-update", ({ token: e, _internal: t }) => {
    t || Vy(e);
  });
}
Yh("public").persist().build();
let Ia;
function Vd(e, t) {
  return e ? e.getAttribute(t) : null;
}
function Ky() {
  if (Ia !== void 0)
    return Ia;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = Vd(e, "data-user");
  return t === null ? (Ia = null, Ia) : (Ia = {
    uid: t,
    displayName: Vd(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Ia);
}
var ht = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(ht || {});
class Wy {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + ht[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === ht.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case ht.Debug:
          console.debug(this.formatMessage(n, ht.Debug, i), i);
          break;
        case ht.Info:
          console.info(this.formatMessage(n, ht.Info, i), i);
          break;
        case ht.Warn:
          console.warn(this.formatMessage(n, ht.Warn, i), i);
          break;
        case ht.Error:
          console.error(this.formatMessage(n, ht.Error, i), i);
          break;
        case ht.Fatal:
        default:
          console.error(this.formatMessage(n, ht.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(ht.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(ht.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(ht.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(ht.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(ht.Fatal, t, Object.assign({}, this.context, n));
  }
}
function qy(e) {
  return new Wy(e);
}
class Yy {
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
    const t = Ky();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? ht.Warn, window._oc_debug && (t.context.level = ht.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function Xy() {
  return new Yy(qy);
}
const ga = Xy().detectUser().setApp("@nextcloud/vue").build();
function Zy(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let op = "missing-app-name";
try {
  op = "library";
} catch {
  ga.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const Jy = op;
let Qy = "";
try {
  Qy = "0.1.0-alpha.167";
} catch {
  ga.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function lp() {
  return Ft("appName", Jy);
}
const e_ = Zy(() => {
  const e = au("core", "apps", []), t = lp();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), Cc = jb();
Vi(ky);
const t_ = /* @__PURE__ */ xt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = ds();
    pt(t, n), ji(() => {
      n(t.value);
    }), qa(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && hi("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (b(), De(g(Kn), {
      "aria-label": g(_t)("Go back to the list"),
      class: Ce(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(_t)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Oe(() => [
        _e(g(cl), {
          directional: "",
          path: g(hy)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), n_ = /* @__PURE__ */ Xe(t_, [["__scopeId", "data-v-a28923a1"]]), Gd = Yh("nextcloud").persist().build(), i_ = Kb().theming?.name ?? "Nextcloud", a_ = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: n_,
    Pane: fy,
    Splitpanes: dy
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
      appName: lp(),
      localizedAppName: e_(),
      isMobile: ds(),
      isRtl: Cc
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
        return ga.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(i_), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = uy(this.$el, {
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
      Gd.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ga.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(Gd.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return ga.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, r_ = {
  key: 0,
  class: "hidden-visually"
}, s_ = { class: "app-content-wrapper__list" }, o_ = {
  key: 1,
  class: "app-content-wrapper"
};
function l_(e, t, n, i, a, r) {
  const s = Ue("NcAppContentDetailsToggle"), o = Ue("Pane"), l = Ue("Splitpanes");
  return b(), T("main", {
    id: "app-content-vue",
    class: Ce(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (b(), T("h1", r_, p(n.pageHeading), 1)) : H("", !0),
    e.$slots.list ? (b(), T(de, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (b(), T("div", {
        key: 0,
        class: Ce(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (b(), De(s, {
          key: 0,
          onClick: Ke(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : H("", !0),
        We(c("div", s_, [
          Re(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [ja, !n.showDetails]
        ]),
        n.showDetails ? Re(e.$slots, "default", { key: 1 }, void 0, !0) : H("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (b(), T("div", o_, [
        _e(l, {
          horizontal: n.layout === "horizontal-split",
          class: Ce(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Oe(() => [
            _e(o, {
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
            _e(o, {
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
const c_ = /* @__PURE__ */ Xe(a_, [["render", l_], ["__scopeId", "data-v-51427d61"]]);
var cp = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], lo = /* @__PURE__ */ cp.join(","), up = typeof Element > "u", ba = up ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, co = !up && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, uo = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", s = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : uo(t.parentNode));
  return s;
}, u_ = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, dp = function(t, n, i) {
  if (uo(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(lo));
  return n && ba.call(t, lo) && a.unshift(t), a = a.filter(i), a;
}, fo = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!uo(s, !1))
      if (s.tagName === "SLOT") {
        var o = s.assignedElements(), l = o.length ? o : s.children, d = fo(l, !0, i);
        i.flatten ? a.push.apply(a, d) : a.push({
          scopeParent: s,
          candidates: d
        });
      } else {
        var u = ba.call(s, lo);
        u && i.filter(s) && (n || !t.includes(s)) && a.push(s);
        var h = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), S = !uo(h, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (h && S) {
          var E = fo(h === !0 ? s.children : h.children, !0, i);
          i.flatten ? a.push.apply(a, E) : a.push({
            scopeParent: s,
            candidates: E
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, fp = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ua = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || u_(t)) && !fp(t) ? 0 : t.tabIndex;
}, d_ = function(t, n) {
  var i = ua(t);
  return i < 0 && n && !fp(t) ? 0 : i;
}, f_ = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, hp = function(t) {
  return t.tagName === "INPUT";
}, h_ = function(t) {
  return hp(t) && t.type === "hidden";
}, p_ = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, v_ = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, g_ = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || co(t), i = function(o) {
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
  var r = v_(a, t.form);
  return !r || r === t;
}, m_ = function(t) {
  return hp(t) && t.type === "radio";
}, b_ = function(t) {
  return m_(t) && !g_(t);
}, y_ = function(t) {
  var n, i = t && co(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var s, o, l;
    for (r = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var d, u, h;
      i = co(a), a = (d = i) === null || d === void 0 ? void 0 : d.host, r = !!((u = a) !== null && u !== void 0 && (h = u.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return r;
}, Kd = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, __ = function(t, n) {
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
  var l = ba.call(t, "details>summary:first-of-type"), d = l ? t.parentElement : t;
  if (ba.call(d, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var u = t; t; ) {
        var h = t.parentElement, S = co(t);
        if (h && !h.shadowRoot && a(h) === !0)
          return Kd(t);
        t.assignedSlot ? t = t.assignedSlot : !h && S !== t.ownerDocument ? t = S.host : t = h;
      }
      t = u;
    }
    if (y_(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return Kd(t);
  return !1;
}, w_ = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return ba.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, ho = function(t, n) {
  return !(n.disabled || h_(n) || __(n, t) || // For a details element with a summary, the summary element gets the focus
  p_(n) || w_(n));
}, Tc = function(t, n) {
  return !(b_(n) || ua(n) < 0 || !ho(t, n));
}, S_ = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, pp = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = d_(o, s), d = s ? pp(a.candidates) : o;
    l === 0 ? s ? n.push.apply(n, d) : n.push(o) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: s,
      content: d
    });
  }), i.sort(f_).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, C_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = fo([t], n.includeContainer, {
    filter: Tc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: S_
  }) : i = dp(t, n.includeContainer, Tc.bind(null, n)), pp(i);
}, T_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = fo([t], n.includeContainer, {
    filter: ho.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = dp(t, n.includeContainer, ho.bind(null, n)), i;
}, Pa = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ba.call(t, lo) === !1 ? !1 : Tc(n, t);
}, E_ = /* @__PURE__ */ cp.concat("iframe:not([inert]):not([inert] *)").join(","), Jl = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ba.call(t, E_) === !1 ? !1 : ho(n, t);
};
function Ec(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function A_(e) {
  if (Array.isArray(e)) return Ec(e);
}
function Wd(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = vp(e)) || t) {
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
function k_(e, t, n) {
  return (t = R_(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function O_(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function N_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Yd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qd(Object(n), !0).forEach(function(i) {
      k_(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qd(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function x_(e) {
  return A_(e) || O_(e) || vp(e) || N_();
}
function L_(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function R_(e) {
  var t = L_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function vp(e, t) {
  if (e) {
    if (typeof e == "string") return Ec(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ec(e, t) : void 0;
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
}, I_ = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, P_ = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Lr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, D_ = function(t) {
  return Lr(t) && !t.shiftKey;
}, $_ = function(t) {
  return Lr(t) && t.shiftKey;
}, Xd = function(t) {
  return setTimeout(t, 0);
}, br = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, Is = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, M_ = [], lu = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || M_, r = Yd({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: D_,
    isKeyBackward: $_
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
  }, o, l = function(D, $, Y) {
    return D && D[$] !== void 0 ? D[$] : r[Y || $];
  }, d = function(D, $) {
    var Y = typeof $?.composedPath == "function" ? $.composedPath() : void 0;
    return s.containerGroups.findIndex(function(re) {
      var ie = re.container, he = re.tabbableNodes;
      return ie.contains(D) || Y?.includes(ie) || he.find(function(fe) {
        return fe === D;
      });
    });
  }, u = function(D) {
    var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = $.hasFallback, re = Y === void 0 ? !1 : Y, ie = $.params, he = ie === void 0 ? [] : ie, fe = r[D];
    if (typeof fe == "function" && (fe = fe.apply(void 0, x_(he))), fe === !0 && (fe = void 0), !fe) {
      if (fe === void 0 || fe === !1)
        return fe;
      throw new Error("`".concat(D, "` was specified but was not a node, or did not return a node"));
    }
    var Te = fe;
    if (typeof fe == "string") {
      try {
        Te = i.querySelector(fe);
      } catch (ve) {
        throw new Error("`".concat(D, '` appears to be an invalid selector; error="').concat(ve.message, '"'));
      }
      if (!Te && !re)
        throw new Error("`".concat(D, "` as selector refers to no known node"));
    }
    return Te;
  }, h = function(D) {
    var $ = D.activeElement;
    return $ ? $.shadowRoot && $.shadowRoot.activeElement !== null ? h($.shadowRoot) : $ : null;
  }, S = function() {
    var D = u("initialFocus", {
      hasFallback: !0
    });
    if (D === !1)
      return !1;
    if (D === void 0 || D && !Jl(D, r.tabbableOptions)) {
      var $ = h(i);
      if (d($) >= 0)
        D = $;
      else {
        var Y = s.tabbableGroups[0], re = Y && Y.firstTabbableNode;
        D = re || u("fallbackFocus");
      }
    } else D === null && (D = u("fallbackFocus"));
    if (!D)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return D;
  }, E = function() {
    if (s.containerGroups = s.containers.map(function(D) {
      var $ = C_(D, r.tabbableOptions), Y = T_(D, r.tabbableOptions), re = $.length > 0 ? $[0] : void 0, ie = $.length > 0 ? $[$.length - 1] : void 0, he = Y.find(function(ve) {
        return Pa(ve);
      }), fe = Y.slice().reverse().find(function(ve) {
        return Pa(ve);
      }), Te = !!$.find(function(ve) {
        return ua(ve) > 0;
      });
      return {
        container: D,
        tabbableNodes: $,
        focusableNodes: Y,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Te,
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
        lastDomTabbableNode: fe,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(He) {
          var Ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, it = $.indexOf(He);
          return it < 0 ? Ee ? Y.slice(Y.indexOf(He) + 1).find(function(ot) {
            return Pa(ot);
          }) : Y.slice(0, Y.indexOf(He)).reverse().find(function(ot) {
            return Pa(ot);
          }) : $[it + (Ee ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(D) {
      return D.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !u("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(D) {
      return D.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, O = function(D) {
    if (D !== !1 && D !== h(document)) {
      if (!D || !D.focus) {
        O(S());
        return;
      }
      D.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = D, I_(D) && D.select();
    }
  }, A = function(D) {
    var $ = u("setReturnFocus", {
      params: [D]
    });
    return $ || ($ === !1 ? !1 : D);
  }, L = function(D) {
    var $ = D.target, Y = D.event, re = D.isBackward, ie = re === void 0 ? !1 : re;
    $ = $ || Is(Y), E();
    var he = null;
    if (s.tabbableGroups.length > 0) {
      var fe = d($, Y), Te = fe >= 0 ? s.containerGroups[fe] : void 0;
      if (fe < 0)
        ie ? he = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : he = s.tabbableGroups[0].firstTabbableNode;
      else if (ie) {
        var ve = s.tabbableGroups.findIndex(function(St) {
          var at = St.firstTabbableNode;
          return $ === at;
        });
        if (ve < 0 && (Te.container === $ || Jl($, r.tabbableOptions) && !Pa($, r.tabbableOptions) && !Te.nextTabbableNode($, !1)) && (ve = fe), ve >= 0) {
          var He = ve === 0 ? s.tabbableGroups.length - 1 : ve - 1, Ee = s.tabbableGroups[He];
          he = ua($) >= 0 ? Ee.lastTabbableNode : Ee.lastDomTabbableNode;
        } else Lr(Y) || (he = Te.nextTabbableNode($, !1));
      } else {
        var it = s.tabbableGroups.findIndex(function(St) {
          var at = St.lastTabbableNode;
          return $ === at;
        });
        if (it < 0 && (Te.container === $ || Jl($, r.tabbableOptions) && !Pa($, r.tabbableOptions) && !Te.nextTabbableNode($)) && (it = fe), it >= 0) {
          var ot = it === s.tabbableGroups.length - 1 ? 0 : it + 1, lt = s.tabbableGroups[ot];
          he = ua($) >= 0 ? lt.firstTabbableNode : lt.firstDomTabbableNode;
        } else Lr(Y) || (he = Te.nextTabbableNode($));
      }
    } else
      he = u("fallbackFocus");
    return he;
  }, R = function(D) {
    var $ = Is(D);
    if (!(d($, D) >= 0)) {
      if (br(r.clickOutsideDeactivates, D)) {
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
      br(r.allowOutsideClick, D) || D.preventDefault();
    }
  }, M = function(D) {
    var $ = Is(D), Y = d($, D) >= 0;
    if (Y || $ instanceof Document)
      Y && (s.mostRecentlyFocusedNode = $);
    else {
      D.stopImmediatePropagation();
      var re, ie = !0;
      if (s.mostRecentlyFocusedNode)
        if (ua(s.mostRecentlyFocusedNode) > 0) {
          var he = d(s.mostRecentlyFocusedNode), fe = s.containerGroups[he].tabbableNodes;
          if (fe.length > 0) {
            var Te = fe.findIndex(function(ve) {
              return ve === s.mostRecentlyFocusedNode;
            });
            Te >= 0 && (r.isKeyForward(s.recentNavEvent) ? Te + 1 < fe.length && (re = fe[Te + 1], ie = !1) : Te - 1 >= 0 && (re = fe[Te - 1], ie = !1));
          }
        } else
          s.containerGroups.some(function(ve) {
            return ve.tabbableNodes.some(function(He) {
              return ua(He) > 0;
            });
          }) || (ie = !1);
      else
        ie = !1;
      ie && (re = L({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), O(re || s.mostRecentlyFocusedNode || S());
    }
    s.recentNavEvent = void 0;
  }, G = function(D) {
    var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = D;
    var Y = L({
      event: D,
      isBackward: $
    });
    Y && (Lr(D) && D.preventDefault(), O(Y));
  }, F = function(D) {
    (r.isKeyForward(D) || r.isKeyBackward(D)) && G(D, r.isKeyBackward(D));
  }, le = function(D) {
    P_(D) && br(r.escapeDeactivates, D) !== !1 && (D.preventDefault(), o.deactivate());
  }, ne = function(D) {
    var $ = Is(D);
    d($, D) >= 0 || br(r.clickOutsideDeactivates, D) || br(r.allowOutsideClick, D) || (D.preventDefault(), D.stopImmediatePropagation());
  }, P = function() {
    if (s.active) {
      ci.activateTrap(a, o);
      var D;
      return r.delayInitialFocus ? D = new Promise(function($) {
        s.delayInitialFocusTimer = Xd(function() {
          O(S()), $();
        });
      }) : O(S()), i.addEventListener("focusin", M, !0), i.addEventListener("mousedown", R, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", R, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", ne, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", F, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", le), D;
    }
  }, ce = function(D) {
    s.active && !s.paused && o._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var $ = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), re = Wd(D), ie;
    try {
      for (re.s(); !(ie = re.n()).done; ) {
        var he = ie.value;
        $.add(he);
        for (var fe = typeof ShadowRoot < "u" && he.getRootNode() instanceof ShadowRoot, Te = he; Te; ) {
          $.add(Te);
          var ve = Te.parentElement, He = [];
          ve ? He = ve.children : !ve && fe && (He = Te.getRootNode().children, ve = Te.getRootNode().host, fe = typeof ShadowRoot < "u" && ve.getRootNode() instanceof ShadowRoot);
          var Ee = Wd(He), it;
          try {
            for (Ee.s(); !(it = Ee.n()).done; ) {
              var ot = it.value;
              Y.add(ot);
            }
          } catch (lt) {
            Ee.e(lt);
          } finally {
            Ee.f();
          }
          Te = ve;
        }
      }
    } catch (lt) {
      re.e(lt);
    } finally {
      re.f();
    }
    $.forEach(function(lt) {
      Y.delete(lt);
    }), s.adjacentElements = Y;
  }, X = function() {
    if (s.active)
      return i.removeEventListener("focusin", M, !0), i.removeEventListener("mousedown", R, !0), i.removeEventListener("touchstart", R, !0), i.removeEventListener("click", ne, !0), i.removeEventListener("keydown", F, !0), i.removeEventListener("keydown", le), o;
  }, ae = function(D) {
    var $ = s.mostRecentlyFocusedNode;
    if ($) {
      var Y = D.some(function(ie) {
        var he = Array.from(ie.removedNodes);
        return he.some(function(fe) {
          return fe === $ || typeof fe.contains == "function" && fe.contains($);
        });
      });
      if (Y && s.containers.some(function(ie) {
        return ie?.isConnected;
      })) {
        E();
        var re = S();
        O(re);
      }
    }
  }, me = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(ae) : void 0, J = function() {
    me && (me.disconnect(), s.active && !s.paused && s.containers.map(function(D) {
      me.observe(D, {
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
    activate: function(D) {
      if (s.active)
        return this;
      var $ = l(D, "onActivate"), Y = l(D, "onPostActivate"), re = l(D, "checkCanFocusTrap"), ie = ci.getActiveTrap(a), he = !1;
      if (ie && !ie.paused) {
        var fe;
        (fe = ie._setSubtreeIsolation) === null || fe === void 0 || fe.call(ie, !1), he = !0;
      }
      try {
        re || E(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = h(i), $?.({
          trap: o
        });
        var Te = function() {
          re && E();
          var Ee = function() {
            o._setSubtreeIsolation(!0), J(), Y?.({
              trap: o
            });
          }, it = P();
          it ? it.then(Ee) : Ee();
        };
        if (re)
          return re(s.containers.concat()).then(Te, Te), this;
        Te();
      } catch (He) {
        if (ie === ci.getActiveTrap(a) && he) {
          var ve;
          (ve = ie._setSubtreeIsolation) === null || ve === void 0 || ve.call(ie, !0);
        }
        throw He;
      }
      return this;
    },
    deactivate: function(D) {
      if (!s.active)
        return this;
      var $ = Yd({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, D);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || o._setSubtreeIsolation(!1), s.alreadySilent.clear(), X(), s.active = !1, s.paused = !1, J(), ci.deactivateTrap(a, o);
      var Y = l($, "onDeactivate"), re = l($, "onPostDeactivate"), ie = l($, "checkCanReturnFocus"), he = l($, "delayReturnFocus"), fe = l($, "returnFocus", "returnFocusOnDeactivate");
      Y?.({
        trap: o
      });
      var Te = function() {
        fe && O(A(s.nodeFocusedBeforeActivation)), re?.({
          trap: o
        });
      }, ve = function() {
        he && fe ? Xd(Te) : Te();
      };
      return fe && ie ? (ie(A(s.nodeFocusedBeforeActivation)).then(ve, ve), this) : (ve(), this);
    },
    pause: function(D) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, D)) : this;
    },
    unpause: function(D) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, D)) : this;
    },
    updateContainerElements: function(D) {
      var $ = [].concat(D).filter(Boolean);
      return s.containers = $.map(function(Y) {
        return typeof Y == "string" ? i.querySelector(Y) : Y;
      }), r.isolateSubtrees && ce(s.containers), s.active && (E(), s.paused || o._setSubtreeIsolation(!0)), J(), this;
    }
  }, Object.defineProperties(o, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(D, $) {
        if (s.paused === D)
          return this;
        if (s.paused = D, D) {
          var Y = l($, "onPause"), re = l($, "onPostPause");
          Y?.({
            trap: o
          }), X(), o._setSubtreeIsolation(!1), J(), re?.({
            trap: o
          });
        } else {
          var ie = l($, "onUnpause"), he = l($, "onPostUnpause");
          ie?.({
            trap: o
          });
          var fe = function() {
            E();
            var ve = function() {
              o._setSubtreeIsolation(!0), J(), he?.({
                trap: o
              });
            }, He = P();
            He ? He.then(ve) : ve();
          };
          fe();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(D) {
        r.isolateSubtrees && s.adjacentElements.forEach(function($) {
          var Y;
          D ? r.isolateSubtrees === "aria-hidden" ? (($.ariaHidden === "true" || ((Y = $.getAttribute("aria-hidden")) === null || Y === void 0 ? void 0 : Y.toLowerCase()) === "true") && s.alreadySilent.add($), $.setAttribute("aria-hidden", "true")) : (($.inert || $.hasAttribute("inert")) && s.alreadySilent.add($), $.setAttribute("inert", !0)) : s.alreadySilent.has($) || (r.isolateSubtrees === "aria-hidden" ? $.removeAttribute("aria-hidden") : $.removeAttribute("inert"));
        });
      }
    }
  }), o.updateContainerElements(t), o;
};
const gp = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), F_ = /* @__PURE__ */ xt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [gp]: {
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
function z_(e, t, n, i, a, r) {
  return b(), T("ul", {
    ref: "list",
    class: Ce(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    c("div", {
      class: Ce(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: sn(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Re(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const mp = /* @__PURE__ */ Xe(F_, [["render", z_], ["__scopeId", "data-v-3e73e246"]]);
function Qr() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function U_() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...Qr()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === Qr().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const bp = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), yp = /* @__PURE__ */ Symbol.for("NcContent:selector");
Vi(Ty);
const B_ = { class: "app-navigation-toggle-wrapper" }, H_ = /* @__PURE__ */ xt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = yh(e, "open"), n = q(() => t.value ? _t("Close navigation") : _t("Open navigation"));
    return (i, a) => (b(), T("div", B_, [
      _e(g(Kn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Oe(() => [
          _e(cl, {
            path: g(gy),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), j_ = /* @__PURE__ */ Xe(H_, [["__scopeId", "data-v-e8177cc7"]]), V_ = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], G_ = { class: "app-navigation__search" }, K_ = /* @__PURE__ */ xt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Ft(
      bp,
      () => wm(),
      !1
    ), a = kg("appNavigationContainer"), r = ds(), s = /* @__PURE__ */ Fe(!r.value), o = q(() => r.value && s.value);
    bg(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), pt(r, () => {
      s.value = !r.value;
    }), pt(o, () => {
      u();
    }), ji(() => {
      i(!0), Qh("toggle-navigation", d), hi("navigation-toggled", {
        open: s.value
      }), n = lu(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: Qr(),
        escapeDeactivates: !1
      }), u();
    }), ls(() => {
      i(!1), ay("toggle-navigation", d), n.deactivate();
    });
    function l(S) {
      if (s.value === S) {
        hi("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = S === void 0 ? !s.value : S;
      const E = getComputedStyle(document.body), O = parseInt(E.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        hi("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * O);
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
    return (S, E) => (b(), T("div", {
      ref: "appNavigationContainer",
      class: Ce(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": g(Gi)
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
        c("div", G_, [
          Re(S.$slots, "search", {}, void 0, !0)
        ]),
        c("div", {
          class: Ce(["app-navigation__body", { "app-navigation__body--no-list": !S.$slots.list }])
        }, [
          Re(S.$slots, "default", {}, void 0, !0)
        ], 2),
        S.$slots.list ? (b(), De(mp, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Oe(() => [
            Re(S.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : H("", !0),
        Re(S.$slots, "footer", {}, void 0, !0)
      ], 40, V_),
      _e(j_, {
        open: s.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), W_ = /* @__PURE__ */ Xe(K_, [["__scopeId", "data-v-37908cd4"]]), q_ = {
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
}, Y_ = ["aria-hidden", "aria-label"], X_ = ["fill", "width", "height"], Z_ = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, J_ = { key: 0 };
function Q_(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Z_, [
        n.title ? (b(), T("title", J_, p(n.title), 1)) : H("", !0)
      ])
    ], 8, X_))
  ], 16, Y_);
}
const e1 = /* @__PURE__ */ Xe(q_, [["render", Q_]]), t1 = {
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
}, n1 = ["aria-hidden", "aria-label"], i1 = ["fill", "width", "height"], a1 = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, r1 = { key: 0 };
function s1(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", a1, [
        n.title ? (b(), T("title", r1, p(n.title), 1)) : H("", !0)
      ])
    ], 8, i1))
  ], 16, n1);
}
const o1 = /* @__PURE__ */ Xe(t1, [["render", s1]]), l1 = {
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
}, c1 = ["aria-hidden", "aria-label"], u1 = ["fill", "width", "height"], d1 = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, f1 = { key: 0 };
function h1(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", d1, [
        n.title ? (b(), T("title", f1, p(n.title), 1)) : H("", !0)
      ])
    ], 8, u1))
  ], 16, c1);
}
const _p = /* @__PURE__ */ Xe(l1, [["render", h1]]), p1 = {
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
}, v1 = ["aria-hidden", "aria-label"], g1 = ["fill", "width", "height"], m1 = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, b1 = { key: 0 };
function y1(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", m1, [
        n.title ? (b(), T("title", b1, p(n.title), 1)) : H("", !0)
      ])
    ], 8, g1))
  ], 16, v1);
}
const wp = /* @__PURE__ */ Xe(p1, [["render", y1]]);
Vi(Sy);
const _1 = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: _p,
    IconClose: wp,
    NcButton: Kn
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
    return { isLegacy34: Gi };
  },
  data() {
    return {
      labelConfirm: _t("Confirm changes"),
      labelCancel: _t("Cancel changes")
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
}, w1 = ["placeholder"];
function S1(e, t, n, i, a, r) {
  const s = Ue("IconArrowRight"), o = Ue("NcButton"), l = Ue("IconClose");
  return b(), T("div", {
    class: Ce(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    c("form", {
      onSubmit: t[1] || (t[1] = Ke((...d) => r.confirm && r.confirm(...d), ["prevent"])),
      onKeydown: t[2] || (t[2] = kt(Ke((...d) => r.cancel && r.cancel(...d), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Ke(() => {
      }, ["stop", "prevent"]))
    }, [
      We(c("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (d) => r.valueModel = d),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, w1), [
        [Sn, r.valueModel]
      ]),
      _e(o, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Ke(r.confirm, ["stop", "prevent"])
      }, {
        icon: Oe(() => [
          _e(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      _e(o, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: Ke(r.cancel, ["stop", "prevent"])
      }, {
        icon: Oe(() => [
          _e(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const C1 = /* @__PURE__ */ Xe(_1, [["render", S1], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function ul() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const cu = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Sp = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), T1 = {
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
}, Cp = {
  mixins: [T1],
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
      from: Sp
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
}, E1 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: cl
  },
  mixins: [Cp],
  inject: {
    isInSemanticMenu: {
      from: cu,
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
      mdiCheck: py,
      mdiChevronRight: vy
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
}, A1 = ["role"], k1 = ["aria-label", "disabled", "title", "type"], O1 = { class: "action-button__longtext-wrapper" }, N1 = {
  key: 0,
  class: "action-button__name"
}, x1 = ["textContent"], L1 = {
  key: 2,
  class: "action-button__text"
}, R1 = ["textContent"], I1 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function P1(e, t, n, i, a, r) {
  const s = Ue("NcIconSvgWrapper");
  return b(), T("li", {
    class: Ce(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    c("button", Ht({
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
          class: Ce([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: sn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      c("span", O1, [
        e.name ? (b(), T("strong", N1, p(e.name), 1)) : H("", !0),
        e.isLongText ? (b(), T("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: p(e.text)
        }, null, 8, x1)) : (b(), T("span", L1, p(e.text), 1)),
        n.description ? (b(), T("span", {
          key: 3,
          class: "action-button__description",
          textContent: p(n.description)
        }, null, 8, R1)) : H("", !0)
      ]),
      n.isMenu ? (b(), De(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (b(), De(s, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (b(), T("span", I1)) : H("", !0),
      H("", !0)
    ], 16, k1)
  ], 10, A1);
}
const D1 = /* @__PURE__ */ Xe(E1, [["render", P1], ["__scopeId", "data-v-6c2daf4e"]]);
function $1(e, t = {}) {
  const n = U_();
  pt(e, () => {
    di(t.disabled) || (di(e) ? n.pause() : n.unpause());
  }), ls(() => {
    n.unpause();
  });
}
const M1 = ["top", "right", "bottom", "left"], Zd = ["start", "end"], Jd = /* @__PURE__ */ M1.reduce((e, t) => e.concat(t, t + "-" + Zd[0], t + "-" + Zd[1]), []), es = Math.min, Ac = Math.max, F1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Tp(e, t, n) {
  return Ac(e, es(t, n));
}
function _a(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mi(e) {
  return e.split("-")[0];
}
function An(e) {
  return e.split("-")[1];
}
function Ep(e) {
  return e === "x" ? "y" : "x";
}
function uu(e) {
  return e === "y" ? "height" : "width";
}
function ui(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function du(e) {
  return Ep(ui(e));
}
function Ap(e, t, n) {
  n === void 0 && (n = !1);
  const i = An(e), a = du(e), r = uu(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = vo(s)), [s, vo(s)];
}
function z1(e) {
  const t = vo(e);
  return [po(e), t, po(t)];
}
function po(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Qd = ["left", "right"], ef = ["right", "left"], U1 = ["top", "bottom"], B1 = ["bottom", "top"];
function H1(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ef : Qd : t ? Qd : ef;
    case "left":
    case "right":
      return t ? U1 : B1;
    default:
      return [];
  }
}
function j1(e, t, n, i) {
  const a = An(e);
  let r = H1(mi(e), n === "start", i);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(po)))), r;
}
function vo(e) {
  const t = mi(e);
  return F1[t] + e.slice(t.length);
}
function V1(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function kp(e) {
  return typeof e != "number" ? V1(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Rr(e) {
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
function tf(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = ui(t), s = du(t), o = uu(s), l = mi(t), d = r === "y", u = i.x + i.width / 2 - a.width / 2, h = i.y + i.height / 2 - a.height / 2, S = i[o] / 2 - a[o] / 2;
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
  const O = An(t);
  return O && (E[s] += S * (O === "end" ? 1 : -1) * (n && d ? -1 : 1)), E;
}
async function G1(e, t) {
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
  } = _a(t, e), O = kp(E), L = o[S ? h === "floating" ? "reference" : "floating" : h], R = Rr(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(L))) == null || n ? L : L.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: l
  })), M = h === "floating" ? {
    x: i,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, G = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), F = await (r.isElement == null ? void 0 : r.isElement(G)) && await (r.getScale == null ? void 0 : r.getScale(G)) || {
    x: 1,
    y: 1
  }, le = Rr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: M,
    offsetParent: G,
    strategy: l
  }) : M);
  return {
    top: (R.top - le.top + O.top) / F.y,
    bottom: (le.bottom - R.bottom + O.bottom) / F.y,
    left: (R.left - le.left + O.left) / F.x,
    right: (le.right - R.right + O.right) / F.x
  };
}
const K1 = 50, W1 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, o = s.detectOverflow ? s : {
    ...s,
    detectOverflow: G1
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: h
  } = tf(d, i, l), S = i, E = 0;
  const O = {};
  for (let A = 0; A < r.length; A++) {
    const L = r[A];
    if (!L)
      continue;
    const {
      name: R,
      fn: M
    } = L, {
      x: G,
      y: F,
      data: le,
      reset: ne
    } = await M({
      x: u,
      y: h,
      initialPlacement: i,
      placement: S,
      strategy: a,
      middlewareData: O,
      rects: d,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = G ?? u, h = F ?? h, O[R] = {
      ...O[R],
      ...le
    }, ne && E < K1 && (E++, typeof ne == "object" && (ne.placement && (S = ne.placement), ne.rects && (d = ne.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ne.rects), {
      x: u,
      y: h
    } = tf(d, S, l)), A = -1);
  }
  return {
    x: u,
    y: h,
    placement: S,
    strategy: a,
    middlewareData: O
  };
}, q1 = (e) => ({
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
    } = _a(e, t) || {};
    if (d == null)
      return {};
    const h = kp(u), S = {
      x: n,
      y: i
    }, E = du(a), O = uu(E), A = await s.getDimensions(d), L = E === "y", R = L ? "top" : "left", M = L ? "bottom" : "right", G = L ? "clientHeight" : "clientWidth", F = r.reference[O] + r.reference[E] - S[E] - r.floating[O], le = S[E] - r.reference[E], ne = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let P = ne ? ne[G] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(ne))) && (P = o.floating[G] || r.floating[O]);
    const ce = F / 2 - le / 2, X = P / 2 - A[O] / 2 - 1, ae = es(h[R], X), me = es(h[M], X), J = P - A[O] - me, te = P / 2 - A[O] / 2 + ce, D = Tp(ae, te, J), $ = !l.arrow && An(a) != null && te !== D && r.reference[O] / 2 - (te < ae ? ae : me) - A[O] / 2 < 0, Y = $ ? te < ae ? te - ae : te - J : 0;
    return {
      [E]: S[E] + Y,
      data: {
        [E]: D,
        centerOffset: te - D - Y,
        ...$ && {
          alignmentOffset: Y
        }
      },
      reset: $
    };
  }
});
function Y1(e, t, n) {
  return (e ? [...n.filter((a) => An(a) === e), ...n.filter((a) => An(a) !== e)] : n.filter((a) => mi(a) === a)).filter((a) => e ? An(a) === e || (t ? po(a) !== a : !1) : !0);
}
const X1 = function(e) {
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
        allowedPlacements: S = Jd,
        autoAlignment: E = !0,
        ...O
      } = _a(e, t), A = h !== void 0 || S === Jd ? Y1(h || null, E, S) : S, L = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, R = A[L];
      if (R == null)
        return {};
      if (o !== R)
        return {
          reset: {
            placement: A[0]
          }
        };
      const M = await l.detectOverflow(t, O), G = Ap(R, r, await (l.isRTL == null ? void 0 : l.isRTL(d.floating))), F = [M[mi(R)], M[G[0]], M[G[1]]], le = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: R,
        overflows: F
      }], ne = A[L + 1];
      if (ne)
        return {
          data: {
            index: L + 1,
            overflows: le
          },
          reset: {
            placement: ne
          }
        };
      const P = le.map((ae) => {
        const me = An(ae.placement);
        return [ae.placement, me && u ? (
          // Check along the mainAxis and main crossAxis side.
          ae.overflows.slice(0, 2).reduce((J, te) => J + te, 0)
        ) : (
          // Check only the mainAxis.
          ae.overflows[0]
        ), ae.overflows];
      }).sort((ae, me) => ae[1] - me[1]), X = ((a = P.filter((ae) => ae[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        An(ae[0]) ? 2 : 3
      ).every((me) => me <= 0))[0]) == null ? void 0 : a[0]) || P[0][0];
      return X !== o ? {
        data: {
          index: L + 1,
          overflows: le
        },
        reset: {
          placement: X
        }
      } : {};
    }
  };
}, Z1 = function(e) {
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
        fallbackAxisSideDirection: O = "none",
        flipAlignment: A = !0,
        ...L
      } = _a(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const R = mi(a), M = ui(o), G = mi(o) === o, F = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), le = S || (G || !A ? [vo(o)] : z1(o)), ne = O !== "none";
      !S && ne && le.push(...j1(o, A, O, F));
      const P = [o, ...le], ce = await l.detectOverflow(t, L), X = [];
      let ae = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (u && X.push(ce[R]), h) {
        const D = Ap(a, s, F);
        X.push(ce[D[0]], ce[D[1]]);
      }
      if (ae = [...ae, {
        placement: a,
        overflows: X
      }], !X.every((D) => D <= 0)) {
        var me, J;
        const D = (((me = r.flip) == null ? void 0 : me.index) || 0) + 1, $ = P[D];
        if ($ && (!(h === "alignment" ? M !== ui($) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        ae.every((ie) => ui(ie.placement) === M ? ie.overflows[0] > 0 : !0)))
          return {
            data: {
              index: D,
              overflows: ae
            },
            reset: {
              placement: $
            }
          };
        let Y = (J = ae.filter((re) => re.overflows[0] <= 0).sort((re, ie) => re.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : J.placement;
        if (!Y)
          switch (E) {
            case "bestFit": {
              var te;
              const re = (te = ae.filter((ie) => {
                if (ne) {
                  const he = ui(ie.placement);
                  return he === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  he === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((he) => he > 0).reduce((he, fe) => he + fe, 0)]).sort((ie, he) => ie[1] - he[1])[0]) == null ? void 0 : te[0];
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
}, J1 = /* @__PURE__ */ new Set(["left", "top"]);
async function Q1(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = mi(n), o = An(n), l = ui(n) === "y", d = J1.has(s) ? -1 : 1, u = r && l ? -1 : 1, h = _a(t, e);
  let {
    mainAxis: S,
    crossAxis: E,
    alignmentAxis: O
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return o && typeof O == "number" && (E = o === "end" ? O * -1 : O), l ? {
    x: E * u,
    y: S * d
  } : {
    x: S * d,
    y: E * u
  };
}
const e0 = function(e) {
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
      } = t, l = await Q1(t, e);
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
}, t0 = function(e) {
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
          fn: (M) => {
            let {
              x: G,
              y: F
            } = M;
            return {
              x: G,
              y: F
            };
          }
        },
        ...d
      } = _a(e, t), u = {
        x: n,
        y: i
      }, h = await r.detectOverflow(t, d), S = ui(a), E = Ep(S);
      let O = u[E], A = u[S];
      const L = (M, G) => Tp(G + h[M === "y" ? "top" : "left"], G, G - h[M === "y" ? "bottom" : "right"]);
      s && (O = L(E, O)), o && (A = L(S, A));
      const R = l.fn({
        ...t,
        [E]: O,
        [S]: A
      });
      return {
        ...R,
        data: {
          x: R.x - n,
          y: R.y - i,
          enabled: {
            [E]: s,
            [S]: o
          }
        }
      };
    }
  };
}, n0 = function(e) {
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
      } = _a(e, t), l = await a.detectOverflow(t, o), d = mi(n), u = An(n), h = ui(n) === "y", {
        width: S,
        height: E
      } = i.floating;
      let O, A;
      d === "top" || d === "bottom" ? (O = d, A = u === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = d, O = u === "end" ? "top" : "bottom");
      const L = E - l.top - l.bottom, R = S - l.left - l.right, M = es(E - l[O], L), G = es(S - l[A], R), F = t.middlewareData.shift, le = !F;
      let ne = M, P = G;
      F != null && F.enabled.x && (P = R), F != null && F.enabled.y && (ne = L), le && !u && (h ? P = S - 2 * Ac(l.left, l.right) : ne = E - 2 * Ac(l.top, l.bottom)), await s({
        ...t,
        availableWidth: P,
        availableHeight: ne
      });
      const ce = await a.getDimensions(r.floating);
      return S !== ce.width || E !== ce.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function vn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Wn(e) {
  return vn(e).getComputedStyle(e);
}
const nf = Math.min, Ir = Math.max, go = Math.round;
function Op(e) {
  const t = Wn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = go(n) !== a || go(i) !== r;
  return s && (n = a, i = r), { width: n, height: i, fallback: s };
}
function Hi(e) {
  return xp(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Ps;
function Np() {
  if (Ps) return Ps;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Ps = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Ps) : navigator.userAgent;
}
function qn(e) {
  return e instanceof vn(e).HTMLElement;
}
function Mi(e) {
  return e instanceof vn(e).Element;
}
function xp(e) {
  return e instanceof vn(e).Node;
}
function af(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof vn(e).ShadowRoot || e instanceof ShadowRoot;
}
function dl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Wn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function i0(e) {
  return ["table", "td", "th"].includes(Hi(e));
}
function kc(e) {
  const t = /firefox/i.test(Np()), n = Wn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function Lp() {
  return !/^((?!chrome|android).)*safari/i.test(Np());
}
function fu(e) {
  return ["html", "body", "#document"].includes(Hi(e));
}
function Rp(e) {
  return Mi(e) ? e : e.contextElement;
}
const Ip = { x: 1, y: 1 };
function Ka(e) {
  const t = Rp(e);
  if (!qn(t)) return Ip;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Op(t);
  let s = (r ? go(n.width) : n.width) / i, o = (r ? go(n.height) : n.height) / a;
  return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), { x: s, y: o };
}
function ts(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = Rp(e);
  let l = Ip;
  t && (i ? Mi(i) && (l = Ka(i)) : l = Ka(e));
  const d = o ? vn(o) : window, u = !Lp() && n;
  let h = (s.left + (u && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, S = (s.top + (u && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, E = s.width / l.x, O = s.height / l.y;
  if (o) {
    const A = vn(o), L = i && Mi(i) ? vn(i) : i;
    let R = A.frameElement;
    for (; R && i && L !== A; ) {
      const M = Ka(R), G = R.getBoundingClientRect(), F = getComputedStyle(R);
      G.x += (R.clientLeft + parseFloat(F.paddingLeft)) * M.x, G.y += (R.clientTop + parseFloat(F.paddingTop)) * M.y, h *= M.x, S *= M.y, E *= M.x, O *= M.y, h += G.x, S += G.y, R = vn(R).frameElement;
    }
  }
  return { width: E, height: O, top: S, right: h + E, bottom: S + O, left: h, x: h, y: S };
}
function Fi(e) {
  return ((xp(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function fl(e) {
  return Mi(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Pp(e) {
  return ts(Fi(e)).left + fl(e).scrollLeft;
}
function ns(e) {
  if (Hi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || af(e) && e.host || Fi(e);
  return af(t) ? t.host : t;
}
function Dp(e) {
  const t = ns(e);
  return fu(t) ? t.ownerDocument.body : qn(t) && dl(t) ? t : Dp(t);
}
function mo(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = Dp(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = vn(i);
  return a ? t.concat(r, r.visualViewport || [], dl(i) ? i : []) : t.concat(i, mo(i));
}
function rf(e, t, n) {
  return t === "viewport" ? Rr((function(i, a) {
    const r = vn(i), s = Fi(i), o = r.visualViewport;
    let l = s.clientWidth, d = s.clientHeight, u = 0, h = 0;
    if (o) {
      l = o.width, d = o.height;
      const S = Lp();
      (S || !S && a === "fixed") && (u = o.offsetLeft, h = o.offsetTop);
    }
    return { width: l, height: d, x: u, y: h };
  })(e, n)) : Mi(t) ? Rr((function(i, a) {
    const r = ts(i, !0, a === "fixed"), s = r.top + i.clientTop, o = r.left + i.clientLeft, l = qn(i) ? Ka(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: o * l.x, y: s * l.y };
  })(t, n)) : Rr((function(i) {
    const a = Fi(i), r = fl(i), s = i.ownerDocument.body, o = Ir(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = Ir(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let d = -r.scrollLeft + Pp(i);
    const u = -r.scrollTop;
    return Wn(s).direction === "rtl" && (d += Ir(a.clientWidth, s.clientWidth) - o), { width: o, height: l, x: d, y: u };
  })(Fi(e)));
}
function sf(e) {
  return qn(e) && Wn(e).position !== "fixed" ? e.offsetParent : null;
}
function of(e) {
  const t = vn(e);
  let n = sf(e);
  for (; n && i0(n) && Wn(n).position === "static"; ) n = sf(n);
  return n && (Hi(n) === "html" || Hi(n) === "body" && Wn(n).position === "static" && !kc(n)) ? t : n || (function(i) {
    let a = ns(i);
    for (; qn(a) && !fu(a); ) {
      if (kc(a)) return a;
      a = ns(a);
    }
    return null;
  })(e) || t;
}
function a0(e, t, n) {
  const i = qn(t), a = Fi(t), r = ts(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Hi(t) !== "body" || dl(a)) && (s = fl(t)), qn(t)) {
    const l = ts(t, !0);
    o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
  } else a && (o.x = Pp(a));
  return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
}
const r0 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(d, u) {
    const h = u.get(d);
    if (h) return h;
    let S = mo(d).filter(((L) => Mi(L) && Hi(L) !== "body")), E = null;
    const O = Wn(d).position === "fixed";
    let A = O ? ns(d) : d;
    for (; Mi(A) && !fu(A); ) {
      const L = Wn(A), R = kc(A);
      (O ? R || E : R || L.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = L : S = S.filter(((M) => M !== A)), A = ns(A);
    }
    return u.set(d, S), S;
  })(t, this._c) : [].concat(n), s = [...r, i], o = s[0], l = s.reduce(((d, u) => {
    const h = rf(t, u, a);
    return d.top = Ir(h.top, d.top), d.right = nf(h.right, d.right), d.bottom = nf(h.bottom, d.bottom), d.left = Ir(h.left, d.left), d;
  }), rf(t, o, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = qn(n), r = Fi(n);
  if (n === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Hi(n) !== "body" || dl(r)) && (s = fl(n)), qn(n))) {
    const d = ts(n);
    o = Ka(n), l.x = d.x + n.clientLeft, l.y = d.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
}, isElement: Mi, getDimensions: function(e) {
  return qn(e) ? Op(e) : e.getBoundingClientRect();
}, getOffsetParent: of, getDocumentElement: Fi, getScale: Ka, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || of, r = this.getDimensions;
  return { reference: a0(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Wn(e).direction === "rtl" }, s0 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: r0, ...n }, r = { ...a.platform, _c: i };
  return W1(e, t, { ...a, platform: r });
}, zi = {
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
function Oc(e, t) {
  let n = zi.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = zi.themes[n.$extend] || {} : (n = null, i = zi[t]) : n = null;
  while (n);
  return i;
}
function o0(e) {
  const t = [e];
  let n = zi.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = zi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function lf(e) {
  const t = [e];
  let n = zi.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = zi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let is = !1;
if (typeof window < "u") {
  is = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        is = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let $p = !1;
typeof window < "u" && typeof navigator < "u" && ($p = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const l0 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), cf = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, uf = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function df(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Ql() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Tn = [];
let aa = null;
const ff = {};
function hf(e) {
  let t = ff[e];
  return t || (t = ff[e] = []), t;
}
let Nc = function() {
};
typeof window < "u" && (Nc = window.Element);
function Be(e) {
  return function(t) {
    return Oc(t.theme, e);
  };
}
const ec = "__floating-vue__popper", Mp = () => /* @__PURE__ */ xt({
  name: "VPopper",
  provide() {
    return {
      [ec]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [ec]: { default: null }
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
      default: Be("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Be("positioningDisabled")
    },
    placement: {
      type: String,
      default: Be("placement"),
      validator: (e) => l0.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: Be("delay")
    },
    distance: {
      type: [Number, String],
      default: Be("distance")
    },
    skidding: {
      type: [Number, String],
      default: Be("skidding")
    },
    triggers: {
      type: Array,
      default: Be("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: Be("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: Be("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: Be("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: Be("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: Be("popperHideTriggers")
    },
    container: {
      type: [String, Object, Nc, Boolean],
      default: Be("container")
    },
    boundary: {
      type: [String, Nc],
      default: Be("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: Be("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: Be("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: Be("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: Be("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: Be("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: Be("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: Be("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: Be("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: Be("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: Be("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: Be("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: Be("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: Be("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: Be("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: Be("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: Be("flip")
    },
    shift: {
      type: Boolean,
      default: Be("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: Be("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: Be("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: Be("disposeTimeout")
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
      return (e = this[ec]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(e0({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(X1({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(t0({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Z1({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(q1({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(n0({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await s0(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), aa && this.instantMove && aa.instantMove && aa !== this.parentPopper) {
        aa.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (aa = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Ql(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...mo(this.$_referenceNode),
        ...mo(this.$_popperNode)
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
        for (let n = 0; n < Tn.length; n++)
          t = Tn[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Tn.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of lf(this.theme))
        hf(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Ql(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, df(Tn, this), Tn.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of lf(this.theme)) {
        const i = hf(n);
        df(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      aa === this && (aa = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Ql(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, cf, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], cf, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, uf, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], uf, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, is ? {
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
      if (Pr >= e.left && Pr <= e.right && Dr >= e.top && Dr <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Pr - Ri, i = Dr - Ii, a = t.left + t.width / 2 - Ri + (t.top + t.height / 2) - Ii + t.width + t.height, r = Ri + n * a, s = Ii + i * a;
        return Ds(Ri, Ii, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Ds(Ri, Ii, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Ds(Ri, Ii, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Ds(Ri, Ii, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if ($p) {
    const e = is ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => pf(t), e), document.addEventListener("touchend", (t) => vf(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => pf(e), !0), window.addEventListener("click", (e) => vf(e, !1), !0);
  window.addEventListener("resize", d0);
}
function pf(e, t) {
  for (let n = 0; n < Tn.length; n++) {
    const i = Tn[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function vf(e, t) {
  c0(e, t);
}
function c0(e, t) {
  const n = {};
  for (let i = Tn.length - 1; i >= 0; i--) {
    const a = Tn[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && gf(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let o = a.parentPopper;
            for (; o; )
              n[o.randomId] = !0, o = o.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && gf(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function gf(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || u0(e, n) && !t;
}
function u0(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function d0() {
  for (let e = 0; e < Tn.length; e++)
    Tn[e].$_computePosition();
}
let Ri = 0, Ii = 0, Pr = 0, Dr = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Ri = Pr, Ii = Dr, Pr = e.clientX, Dr = e.clientY;
}, is ? {
  passive: !0
} : void 0);
function Ds(e, t, n, i, a, r, s, o) {
  const l = ((s - a) * (t - r) - (o - r) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t)), d = ((n - e) * (t - r) - (i - t) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t));
  return l >= 0 && l <= 1 && d >= 0 && d <= 1;
}
const f0 = {
  extends: Mp()
}, hu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function h0(e, t, n, i, a, r) {
  return b(), T("div", {
    ref: "reference",
    class: Ce(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Re(e.$slots, "default", Vs(Yr(e.slotData)))
  ], 2);
}
const p0 = /* @__PURE__ */ hu(f0, [["render", h0]]);
function v0() {
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
let Hs;
function xc() {
  xc.init || (xc.init = !0, Hs = v0() !== -1);
}
var hl = {
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
    xc(), pn(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Hs && this.$el.appendChild(e), e.data = "about:blank", Hs || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Hs && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const g0 = /* @__PURE__ */ vg();
hg("data-v-b329ee4c");
const m0 = {
  class: "resize-observer",
  tabindex: "-1"
};
pg();
const b0 = /* @__PURE__ */ g0((e, t, n, i, a, r) => (b(), De("div", m0)));
hl.render = b0;
hl.__scopeId = "data-v-b329ee4c";
hl.__file = "src/components/ResizeObserver.vue";
const Fp = (e = "theme") => ({
  computed: {
    themeClass() {
      return o0(this[e]);
    }
  }
}), y0 = /* @__PURE__ */ xt({
  name: "VPopperContent",
  components: {
    ResizeObserver: hl
  },
  mixins: [
    Fp()
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
}), _0 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], w0 = {
  ref: "inner",
  class: "v-popper__inner"
}, S0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-outer" }, null, -1), C0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-inner" }, null, -1), T0 = [
  S0,
  C0
];
function E0(e, t, n, i, a, r) {
  const s = Ue("ResizeObserver");
  return b(), T("div", {
    id: e.popperId,
    ref: "popover",
    class: Ce(["v-popper__popper", [
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
    style: sn(e.result ? {
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
      style: sn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      c("div", w0, [
        e.mounted ? (b(), T(de, { key: 0 }, [
          c("div", null, [
            Re(e.$slots, "default")
          ]),
          e.handleResize ? (b(), De(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (o) => e.$emit("resize", o))
          })) : H("", !0)
        ], 64)) : H("", !0)
      ], 512),
      c("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: sn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, T0, 4)
    ], 4)
  ], 46, _0);
}
const zp = /* @__PURE__ */ hu(y0, [["render", E0]]), Up = {
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
let Lc = function() {
};
typeof window < "u" && (Lc = window.Element);
const A0 = /* @__PURE__ */ xt({
  name: "VPopperWrapper",
  components: {
    Popper: p0,
    PopperContent: zp
  },
  mixins: [
    Up,
    Fp("finalTheme")
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
      type: [String, Object, Lc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Lc],
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
function k0(e, t, n, i, a, r) {
  const s = Ue("PopperContent"), o = Ue("Popper");
  return b(), De(o, Ht({ ref: "popper" }, e.$props, {
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
      hide: O,
      handleResize: A,
      onResize: L,
      classes: R,
      result: M
    }) => [
      Re(e.$slots, "default", {
        shown: d,
        show: E,
        hide: O
      }),
      _e(s, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: d,
        mounted: u,
        "skip-transition": h,
        "auto-hide": S,
        "handle-resize": A,
        classes: R,
        result: M,
        onHide: O,
        onResize: L
      }, {
        default: Oe(() => [
          Re(e.$slots, "popper", {
            shown: d,
            hide: O
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const pu = /* @__PURE__ */ hu(A0, [["render", k0]]), O0 = {
  ...pu,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...pu
});
({
  ...pu
});
Mp();
const mf = zi, N0 = O0, x0 = /* @__PURE__ */ xt({
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
}), L0 = "_ncPopover_qgtYg", R0 = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: L0
}, Bp = "nc-popover-9";
mf.themes[Bp] = structuredClone(mf.themes.dropdown);
const I0 = {
  name: "NcPopover",
  components: {
    Dropdown: N0,
    NcPopoverTriggerProvider: x0
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
      theme: Bp
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
      return this.placement === "start" ? Cc ? "right" : "left" : this.placement === "end" ? Cc ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = lu(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: Qr(),
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
        ga.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function P0(e, t, n, i, a, r) {
  const s = Ue("NcPopoverTriggerProvider"), o = Ue("Dropdown");
  return b(), De(o, {
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
      Re(e.$slots, "default", Vs(Yr(l)))
    ]),
    default: Oe(() => [
      _e(s, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Oe((l) => [
          Re(e.$slots, "trigger", Vs(Yr(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const D0 = {
  $style: R0
}, bf = /* @__PURE__ */ Xe(I0, [["render", P0], ["__cssModules", D0]]), $0 = {
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
}, M0 = ["aria-hidden", "aria-label"], F0 = ["fill", "width", "height"], z0 = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, U0 = { key: 0 };
function B0(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", z0, [
        n.title ? (b(), T("title", U0, p(n.title), 1)) : H("", !0)
      ])
    ], 8, F0))
  ], 16, M0);
}
const H0 = /* @__PURE__ */ Xe($0, [["render", B0]]);
Vi(wy);
function vu(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === Ot)
        return !1;
      if (n.type === de && !vu(n.children))
        return !1;
      if (n.type === cs && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const j0 = ".focusable", V0 = {
  name: "NcActions",
  components: {
    NcButton: Kn,
    NcPopover: bf
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
      [cu]: q(() => this.actionsMenuSemanticType === "menu"),
      [Sp]: this.closeMenu
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
      default: _t("Actions")
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
      randomId: ul()
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
    $1(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(j0);
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
    const e = [], t = (E, O) => {
      E.forEach((A) => {
        if (this.isAction(A)) {
          O.push(A);
          return;
        }
        A.type === de && t(A.children, O);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((E) => !i.includes(E)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], o = ["NcActionLink", "NcActionRouter"], l = a.some((E) => s.includes(this.getActionName(E))), d = a.some((E) => r.includes(this.getActionName(E))), u = a.some((E) => o.includes(this.getActionName(E)));
    l ? this.actionsMenuSemanticType = "dialog" : d ? this.actionsMenuSemanticType = "menu" : u ? this.actionsMenuSemanticType = "navigation" : e.filter((O) => this.getActionName(O).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const h = (E) => {
      const O = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(O) ? Yt("img", { class: "action-item__menutoggle__icon", src: O, alt: "" }) : Yt("span", { class: ["icon", O] })), L = E?.children?.default?.()?.[0]?.children?.trim(), R = this.forceName ? L : "";
      let M = E?.props?.title;
      this.forceName || M || (M = L);
      const G = { ...E?.props ?? {} }, F = ["submit", "reset"].includes(G.type) ? G.modelValue : "button";
      return delete G.modelValue, delete G.type, Yt(
        Kn,
        Ht(
          G,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": E?.props?.["aria-label"] || L,
            title: M,
            disabled: this.disabled || E?.props?.disabled,
            pressed: E?.props?.modelValue,
            size: this.size,
            type: F,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (R ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": E?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => R,
          icon: () => A
        }
      );
    }, S = (E) => {
      const O = vu(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Yt("span", { class: ["icon", this.defaultIcon] }) : Yt(H0, { size: 20 }), A = `${this.randomId}-trigger`;
      return Yt(
        bf,
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
          trigger: () => Yt(Kn, {
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
            icon: () => O,
            default: () => this.menuName
          }),
          default: () => Yt("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            Yt("ul", {
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
    }), i.length > 0 && this.inline > 0 ? Yt(
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
        a.length > 0 ? Yt(
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
    ) : Yt(
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
}, bo = /* @__PURE__ */ Xe(V0, [["__scopeId", "data-v-7206c1f1"]]), G0 = ["aria-label"], K0 = ["width", "height"], W0 = ["fill"], q0 = ["fill"], Y0 = { key: 0 }, X0 = /* @__PURE__ */ xt({
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
    return (i, a) => (b(), T("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (b(), T("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        c("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, W0),
        c("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (b(), T("title", Y0, p(e.name), 1)) : H("", !0)
        ], 8, q0)
      ], 8, K0))
    ], 8, G0));
  }
}), Hp = /* @__PURE__ */ Xe(X0, [["__scopeId", "data-v-cf399190"]]), Rc = /* @__PURE__ */ xt({
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
}), Z0 = {
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
}, J0 = ["aria-hidden", "aria-label"], Q0 = ["fill", "width", "height"], ew = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, tw = { key: 0 };
function nw(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", ew, [
        n.title ? (b(), T("title", tw, p(n.title), 1)) : H("", !0)
      ])
    ], 8, Q0))
  ], 16, J0);
}
const iw = /* @__PURE__ */ Xe(Z0, [["render", nw]]), aw = {
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
}, rw = ["aria-hidden", "aria-label"], sw = ["fill", "width", "height"], ow = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, lw = { key: 0 };
function cw(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", ow, [
        n.title ? (b(), T("title", lw, p(n.title), 1)) : H("", !0)
      ])
    ], 8, sw))
  ], 16, rw);
}
const uw = /* @__PURE__ */ Xe(aw, [["render", cw]]);
Vi(Ey);
const dw = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Kn,
    ChevronDown: e1,
    ChevronUp: o1
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
    return { isLegacy34: Gi };
  },
  computed: {
    labelButton() {
      return this.open ? _t("Collapse menu") : _t("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function fw(e, t, n, i, a, r) {
  const s = Ue("ChevronUp"), o = Ue("ChevronDown"), l = Ue("NcButton");
  return b(), De(l, {
    class: Ce(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Oe(() => [
      n.open ? (b(), De(s, {
        key: 0,
        size: 20
      })) : (b(), De(o, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const hw = /* @__PURE__ */ Xe(dw, [["render", fw], ["__scopeId", "data-v-cfbd3794"]]);
Vi(Ay, Ny);
const pw = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: bo,
    NcActionButton: D1,
    NcAppNavigationIconCollapsible: hw,
    NcInputConfirmCancel: C1,
    NcLoadingIcon: Hp,
    NcVNodes: Rc,
    Pencil: iw,
    Undo: uw
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: gp, default: null }
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
      default: () => ul(),
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
      isMobile: ds(),
      isLegacy34: Gi
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
      return this.editLabel ? this.editLabel : _t("Edit item");
    },
    undoButtonAriaLabel() {
      return _t("Undo changes");
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
}, vw = ["id"], gw = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], mw = {
  key: 0,
  class: "editingContainer"
}, bw = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, yw = { class: "app-navigation-entry__deleted-description" }, _w = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, ww = {
  key: 0,
  class: "app-navigation-entry__children"
};
function Sw(e, t, n, i, a, r) {
  const s = Ue("NcLoadingIcon"), o = Ue("NcInputConfirmCancel"), l = Ue("Pencil"), d = Ue("NcActionButton"), u = Ue("Undo"), h = Ue("NcActions"), S = Ue("NcAppNavigationIconCollapsible");
  return b(), T("li", {
    id: n.id,
    class: Ce([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (b(), De(Jc(r.isRouterLink ? "router-link" : "NcVNodes"), Vs(Yr({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Oe(({ href: E, navigate: O, isActive: A }) => [
        c("div", {
          ref: "entry",
          class: Ce(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && A || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...L) => r.requestHighlight && r.requestHighlight(...L)),
          onFocusin: t[5] || (t[5] = (...L) => r.requestHighlight && r.requestHighlight(...L))
        }, [
          n.undo ? H("", !0) : (b(), T("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": n.active || n.to && A ? "page" : void 0,
            "aria-description": n.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: n.href || E || "#",
            target: r.isExternal(n.href) ? "_blank" : void 0,
            title: n.title || n.name,
            onBlur: t[1] || (t[1] = (...L) => r.handleBlur && r.handleBlur(...L)),
            onClick: (L) => r.onClick(L, O, E),
            onFocus: t[2] || (t[2] = (...L) => r.handleFocus && r.handleFocus(...L)),
            onKeydown: t[3] || (t[3] = kt(Ke((...L) => r.handleTab && r.handleTab(...L), ["exact"]), ["tab"]))
          }, [
            c("div", {
              class: Ce(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (b(), De(s, { key: 0 })) : Re(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            c("span", {
              class: Ce(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, p(n.name), 3),
            a.editingActive ? (b(), T("div", mw, [
              _e(o, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (L) => a.editingValue = L),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : H("", !0)
          ], 40, gw)),
          n.undo ? (b(), T("div", bw, [
            c("div", yw, p(n.name), 1)
          ])) : H("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (b(), T("div", {
            key: 2,
            class: Ce(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (b(), T("div", _w, [
              Re(e.$slots, "counter", {}, void 0, !0)
            ])) : H("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (b(), De(h, {
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
                n.editable && !a.editingActive ? (b(), De(d, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Oe(() => [
                    _e(l, { size: 20 })
                  ]),
                  default: Oe(() => [
                    Ne(" " + p(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : H("", !0),
                n.undo ? (b(), De(d, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Oe(() => [
                    _e(u, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : H("", !0),
                Re(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : H("", !0)
          ], 2)) : H("", !0),
          n.allowCollapse && e.$slots.default ? (b(), De(S, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: Ke(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : H("", !0),
          Re(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (b(), T("ul", ww, [
      Re(e.$slots, "default", {}, void 0, !0)
    ])) : H("", !0)
  ], 10, vw);
}
const yf = /* @__PURE__ */ Xe(pw, [["render", Sw], ["__scopeId", "data-v-01bef41b"]]), tc = /* @__PURE__ */ new WeakMap(), Cw = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = jd(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = jd(e, a, Object.assign({ capture: n }, r));
    }
    tc.set(e, i);
  },
  unmounted(e) {
    const t = tc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), tc.delete(e);
  }
}, Tw = {
  mounted(e) {
    e.focus();
  }
}, Ew = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Aw = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Ic = "numeric", Pc = "ascii", Dc = "alpha", $r = "asciinumeric", Er = "alphanumeric", $c = "domain", jp = "emoji", kw = "scheme", Ow = "slashscheme", nc = "whitespace";
function Nw(e, t) {
  return e in t || (t[e] = []), t[e];
}
function fa(e, t, n) {
  t[Ic] && (t[$r] = !0, t[Er] = !0), t[Pc] && (t[$r] = !0, t[Dc] = !0), t[$r] && (t[Er] = !0), t[Dc] && (t[Er] = !0), t[Er] && (t[$c] = !0), t[jp] && (t[$c] = !0);
  for (const i in t) {
    const a = Nw(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function xw(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function an(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
an.groups = {};
an.prototype = {
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
    i = i || an.groups;
    let a;
    return t && t.j ? a = t : (a = new an(t), n && i && fa(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || an.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let s, o = a.go(e);
    if (o ? (s = new an(), Object.assign(s.j, o.j), s.jr.push.apply(s.jr, o.jr), s.jd = o.jd, s.t = o.t) : s = new an(), r) {
      if (i)
        if (s.t && typeof s.t == "string") {
          const l = Object.assign(xw(s.t, i), n);
          fa(r, l, i);
        } else n && fa(r, n, i);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const Ie = (e, t, n, i, a) => e.ta(t, n, i, a), ct = (e, t, n, i, a) => e.tr(t, n, i, a), _f = (e, t, n, i, a) => e.ts(t, n, i, a), ee = (e, t, n, i, a) => e.tt(t, n, i, a), ai = "WORD", Mc = "UWORD", Vp = "ASCIINUMERICAL", Gp = "ALPHANUMERICAL", as = "LOCALHOST", Fc = "TLD", zc = "UTLD", js = "SCHEME", Fa = "SLASH_SCHEME", gu = "NUM", Uc = "WS", mu = "NL", Mr = "OPENBRACE", Fr = "CLOSEBRACE", yo = "OPENBRACKET", _o = "CLOSEBRACKET", wo = "OPENPAREN", So = "CLOSEPAREN", Co = "OPENANGLEBRACKET", To = "CLOSEANGLEBRACKET", Eo = "FULLWIDTHLEFTPAREN", Ao = "FULLWIDTHRIGHTPAREN", ko = "LEFTCORNERBRACKET", Oo = "RIGHTCORNERBRACKET", No = "LEFTWHITECORNERBRACKET", xo = "RIGHTWHITECORNERBRACKET", Lo = "FULLWIDTHLESSTHAN", Ro = "FULLWIDTHGREATERTHAN", Io = "AMPERSAND", Po = "APOSTROPHE", Do = "ASTERISK", Di = "AT", $o = "BACKSLASH", Mo = "BACKTICK", Fo = "CARET", ha = "COLON", bu = "COMMA", zo = "DOLLAR", Hn = "DOT", Uo = "EQUALS", yu = "EXCLAMATION", dn = "HYPHEN", zr = "PERCENT", Bo = "PIPE", Ho = "PLUS", jo = "POUND", Ur = "QUERY", _u = "QUOTE", Kp = "FULLWIDTHMIDDLEDOT", wu = "SEMI", jn = "SLASH", Br = "TILDE", Vo = "UNDERSCORE", Wp = "EMOJI", Go = "SYM";
var qp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Gp,
  AMPERSAND: Io,
  APOSTROPHE: Po,
  ASCIINUMERICAL: Vp,
  ASTERISK: Do,
  AT: Di,
  BACKSLASH: $o,
  BACKTICK: Mo,
  CARET: Fo,
  CLOSEANGLEBRACKET: To,
  CLOSEBRACE: Fr,
  CLOSEBRACKET: _o,
  CLOSEPAREN: So,
  COLON: ha,
  COMMA: bu,
  DOLLAR: zo,
  DOT: Hn,
  EMOJI: Wp,
  EQUALS: Uo,
  EXCLAMATION: yu,
  FULLWIDTHGREATERTHAN: Ro,
  FULLWIDTHLEFTPAREN: Eo,
  FULLWIDTHLESSTHAN: Lo,
  FULLWIDTHMIDDLEDOT: Kp,
  FULLWIDTHRIGHTPAREN: Ao,
  HYPHEN: dn,
  LEFTCORNERBRACKET: ko,
  LEFTWHITECORNERBRACKET: No,
  LOCALHOST: as,
  NL: mu,
  NUM: gu,
  OPENANGLEBRACKET: Co,
  OPENBRACE: Mr,
  OPENBRACKET: yo,
  OPENPAREN: wo,
  PERCENT: zr,
  PIPE: Bo,
  PLUS: Ho,
  POUND: jo,
  QUERY: Ur,
  QUOTE: _u,
  RIGHTCORNERBRACKET: Oo,
  RIGHTWHITECORNERBRACKET: xo,
  SCHEME: js,
  SEMI: wu,
  SLASH: jn,
  SLASH_SCHEME: Fa,
  SYM: Go,
  TILDE: Br,
  TLD: Fc,
  UNDERSCORE: Vo,
  UTLD: zc,
  UWORD: Mc,
  WORD: ai,
  WS: Uc
});
const ni = /[a-z]/, yr = new RegExp("\\p{L}", "u"), ic = new RegExp("\\p{Emoji}", "u"), ii = /\d/, ac = /\s/, wf = "\r", rc = `
`, Lw = "️", Rw = "‍", sc = "￼";
let $s = null, Ms = null;
function Iw(e = []) {
  const t = {};
  an.groups = t;
  const n = new an();
  $s == null && ($s = Sf(Ew)), Ms == null && (Ms = Sf(Aw)), ee(n, "'", Po), ee(n, "{", Mr), ee(n, "}", Fr), ee(n, "[", yo), ee(n, "]", _o), ee(n, "(", wo), ee(n, ")", So), ee(n, "<", Co), ee(n, ">", To), ee(n, "（", Eo), ee(n, "）", Ao), ee(n, "「", ko), ee(n, "」", Oo), ee(n, "『", No), ee(n, "』", xo), ee(n, "＜", Lo), ee(n, "＞", Ro), ee(n, "&", Io), ee(n, "*", Do), ee(n, "@", Di), ee(n, "`", Mo), ee(n, "^", Fo), ee(n, ":", ha), ee(n, ",", bu), ee(n, "$", zo), ee(n, ".", Hn), ee(n, "=", Uo), ee(n, "!", yu), ee(n, "-", dn), ee(n, "%", zr), ee(n, "|", Bo), ee(n, "+", Ho), ee(n, "#", jo), ee(n, "?", Ur), ee(n, '"', _u), ee(n, "/", jn), ee(n, ";", wu), ee(n, "~", Br), ee(n, "_", Vo), ee(n, "\\", $o), ee(n, "・", Kp);
  const i = ct(n, ii, gu, {
    [Ic]: !0
  });
  ct(i, ii, i);
  const a = ct(i, ni, Vp, {
    [$r]: !0
  }), r = ct(i, yr, Gp, {
    [Er]: !0
  }), s = ct(n, ni, ai, {
    [Pc]: !0
  });
  ct(s, ii, a), ct(s, ni, s), ct(a, ii, a), ct(a, ni, a);
  const o = ct(n, yr, Mc, {
    [Dc]: !0
  });
  ct(o, ni), ct(o, ii, r), ct(o, yr, o), ct(r, ii, r), ct(r, ni), ct(r, yr, r);
  const l = ee(n, rc, mu, {
    [nc]: !0
  }), d = ee(n, wf, Uc, {
    [nc]: !0
  }), u = ct(n, ac, Uc, {
    [nc]: !0
  });
  ee(n, sc, u), ee(d, rc, l), ee(d, sc, u), ct(d, ac, u), ee(u, wf), ee(u, rc), ct(u, ac, u), ee(u, sc, u);
  const h = ct(n, ic, Wp, {
    [jp]: !0
  });
  ee(h, "#"), ct(h, ic, h), ee(h, Lw, h);
  const S = ee(h, Rw);
  ee(S, "#"), ct(S, ic, h);
  const E = [[ni, s], [ii, a]], O = [[ni, null], [yr, o], [ii, r]];
  for (let A = 0; A < $s.length; A++)
    xi(n, $s[A], Fc, ai, E);
  for (let A = 0; A < Ms.length; A++)
    xi(n, Ms[A], zc, Mc, O);
  fa(Fc, {
    tld: !0,
    ascii: !0
  }, t), fa(zc, {
    utld: !0,
    alpha: !0
  }, t), xi(n, "file", js, ai, E), xi(n, "mailto", js, ai, E), xi(n, "http", Fa, ai, E), xi(n, "https", Fa, ai, E), xi(n, "ftp", Fa, ai, E), xi(n, "ftps", Fa, ai, E), fa(js, {
    scheme: !0,
    ascii: !0
  }, t), fa(Fa, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, L) => A[0] > L[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const L = e[A][0], M = e[A][1] ? {
      [kw]: !0
    } : {
      [Ow]: !0
    };
    L.indexOf("-") >= 0 ? M[$c] = !0 : ni.test(L) ? ii.test(L) ? M[$r] = !0 : M[Pc] = !0 : M[Ic] = !0, _f(n, L, L, M);
  }
  return _f(n, "localhost", as, {
    ascii: !0
  }), n.jd = new an(Go), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, qp)
  };
}
function Yp(e, t) {
  const n = Pw(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = n.length, a = [];
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
function Pw(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, s = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(s), i += s.length;
  }
  return t;
}
function xi(e, t, n, i, a) {
  let r;
  const s = t.length;
  for (let o = 0; o < s - 1; o++) {
    const l = t[o];
    e.j[l] ? r = e.j[l] : (r = new an(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new an(n), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function Sf(e) {
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
const rs = {
  defaultProtocol: "http",
  events: null,
  format: Cf,
  formatHref: Cf,
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
function Su(e, t = null) {
  let n = Object.assign({}, rs);
  e && (n = Object.assign(n, e instanceof Su ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
Su.prototype = {
  o: rs,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : rs[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function Cf(e) {
  return e;
}
function Xp(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
Xp.prototype = {
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
  toObject(e = rs.defaultProtocol) {
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
function pl(e, t) {
  class n extends Xp {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const Dw = pl("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Tf = pl("text"), $w = pl("nl"), Fs = pl("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = rs.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== as && e[1].t === ha;
  }
}), un = (e) => new an(e);
function Mw({
  groups: e
}) {
  const t = e.domain.concat([Io, Do, Di, $o, Mo, Fo, zo, Uo, dn, gu, zr, Bo, Ho, jo, jn, Go, Br, Vo]), n = [Po, ha, bu, Hn, yu, zr, Ur, _u, wu, Co, To, Mr, Fr, _o, yo, wo, So, Eo, Ao, ko, Oo, No, xo, Lo, Ro], i = [Io, Po, Do, $o, Mo, Fo, zo, Uo, dn, Mr, Fr, zr, Bo, Ho, jo, Ur, jn, Go, Br, Vo], a = un(), r = ee(a, Br);
  Ie(r, i, r), Ie(r, e.domain, r);
  const s = un(), o = un(), l = un();
  Ie(a, e.domain, s), Ie(a, e.scheme, o), Ie(a, e.slashscheme, l), Ie(s, i, r), Ie(s, e.domain, s);
  const d = ee(s, Di);
  ee(r, Di, d), ee(o, Di, d), ee(l, Di, d);
  const u = ee(r, Hn);
  Ie(u, i, r), Ie(u, e.domain, r);
  const h = un();
  Ie(d, e.domain, h), Ie(h, e.domain, h);
  const S = ee(h, Hn);
  Ie(S, e.domain, h);
  const E = un(Dw);
  Ie(S, e.tld, E), Ie(S, e.utld, E), ee(d, as, E);
  const O = ee(h, dn);
  ee(O, dn, O), Ie(O, e.domain, h), Ie(E, e.domain, h), ee(E, Hn, S), ee(E, dn, O);
  const A = ee(s, dn), L = ee(s, Hn);
  ee(A, dn, A), Ie(A, e.domain, s), Ie(L, i, r), Ie(L, e.domain, s);
  const R = un(Fs);
  Ie(L, e.tld, R), Ie(L, e.utld, R), Ie(R, e.domain, s), Ie(R, i, r), ee(R, Hn, L), ee(R, dn, A), ee(R, Di, d);
  const M = ee(R, ha), G = un(Fs);
  Ie(M, e.numeric, G);
  const F = un(Fs), le = un();
  Ie(F, t, F), Ie(F, n, le), Ie(le, t, F), Ie(le, n, le), ee(R, jn, F), ee(G, jn, F);
  const ne = ee(o, ha), P = ee(l, ha), ce = ee(P, jn), X = ee(ce, jn);
  Ie(o, e.domain, s), ee(o, Hn, L), ee(o, dn, A), Ie(l, e.domain, s), ee(l, Hn, L), ee(l, dn, A), Ie(ne, e.domain, F), ee(ne, jn, F), ee(ne, Ur, F), Ie(X, e.domain, F), Ie(X, t, F), ee(X, jn, F);
  const ae = [
    [Mr, Fr],
    // {}
    [yo, _o],
    // []
    [wo, So],
    // ()
    [Co, To],
    // <>
    [Eo, Ao],
    // （）
    [ko, Oo],
    // 「」
    [No, xo],
    // 『』
    [Lo, Ro]
    // ＜＞
  ];
  for (let me = 0; me < ae.length; me++) {
    const [J, te] = ae[me], D = ee(F, J);
    ee(le, J, D);
    const $ = un(Fs);
    Ie(D, t, $);
    const Y = un();
    Ie(D, n, Y), ee(D, te, F), Ie($, t, $), Ie($, n, Y), Ie(Y, t, $), Ie(Y, n, Y), ee($, te, F), ee(Y, te, F);
  }
  return ee(a, as, R), ee(a, mu, $w), {
    start: a,
    tokens: qp
  };
}
function Fw(e, t, n) {
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
      s.length > 0 && (r.push(oc(Tf, t, s)), s = []), a -= S, u -= S;
      const E = h.t, O = n.slice(a - u, a);
      r.push(oc(E, t, O));
    }
  }
  return s.length > 0 && r.push(oc(Tf, t, s)), r;
}
function oc(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const Dt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function zw() {
  Dt.scanner = Iw(Dt.customSchemes);
  for (let e = 0; e < Dt.tokenQueue.length; e++)
    Dt.tokenQueue[e][1]({
      scanner: Dt.scanner
    });
  Dt.parser = Mw(Dt.scanner.tokens);
  for (let e = 0; e < Dt.pluginQueue.length; e++)
    Dt.pluginQueue[e][1]({
      scanner: Dt.scanner,
      parser: Dt.parser
    });
  return Dt.initialized = !0, Dt;
}
function Zp(e) {
  return Dt.initialized || zw(), Fw(Dt.parser.start, e, Yp(Dt.scanner.start, e));
}
Zp.scan = Yp;
function Uw(e) {
  const t = new Su({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, jw), n = Zp(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(ro(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function Bw(e) {
  return e.replace(/"/g, "&quot;");
}
function Hw(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${Bw(i)}"`);
  }
  return t.join(" ");
}
function jw({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${Hw(t)}>${ro(n)}</${e}>`;
}
const Vw = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = Uw(t.text));
}, Gw = ["title"], Kw = /* @__PURE__ */ xt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Ft("NcAppSidebar:header:ref");
    return (n, i) => We((b(), T("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Ne(p(e.name), 1)
    ], 8, Gw)), [
      [g(Vw), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), Ww = ["aria-labelledby"], qw = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, Yw = ["id"], Xw = {
  key: 2,
  class: "empty-content__description"
}, Zw = {
  key: 3,
  class: "empty-content__action"
}, Jw = /* @__PURE__ */ xt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = ul();
    return (n, i) => (b(), T("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (b(), T("div", qw, [
        Re(n.$slots, "icon", {}, void 0, !0)
      ])) : H("", !0),
      e.name !== "" || n.$slots.name ? (b(), T("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Re(n.$slots, "name", {}, () => [
          Ne(p(e.name), 1)
        ], !0)
      ], 8, Yw)) : H("", !0),
      e.description !== "" || n.$slots.description ? (b(), T("p", Xw, [
        Re(n.$slots, "description", {}, () => [
          Ne(p(e.description), 1)
        ], !0)
      ])) : H("", !0),
      n.$slots.action ? (b(), T("div", Zw, [
        Re(n.$slots, "action", {}, void 0, !0)
      ])) : H("", !0)
    ], 8, Ww));
  }
}), Qw = /* @__PURE__ */ Xe(Jw, [["__scopeId", "data-v-8609a4c1"]]), eS = {
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
}, tS = ["aria-hidden", "aria-label"], nS = ["fill", "width", "height"], iS = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, aS = { key: 0 };
function rS(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", iS, [
        n.title ? (b(), T("title", aS, p(n.title), 1)) : H("", !0)
      ])
    ], 8, nS))
  ], 16, tS);
}
const sS = /* @__PURE__ */ Xe(eS, [["render", rS]]), oS = {
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
}, lS = ["aria-hidden", "aria-label"], cS = ["fill", "width", "height"], uS = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, dS = { key: 0 };
function fS(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", uS, [
        n.title ? (b(), T("title", dS, p(n.title), 1)) : H("", !0)
      ])
    ], 8, cS))
  ], 16, lS);
}
const hS = /* @__PURE__ */ Xe(oS, [["render", fS]]), pS = {
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
}, vS = ["aria-hidden", "aria-label"], gS = ["fill", "width", "height"], mS = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, bS = { key: 0 };
function yS(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", mS, [
        n.title ? (b(), T("title", bS, p(n.title), 1)) : H("", !0)
      ])
    ], 8, gS))
  ], 16, vS);
}
const _S = /* @__PURE__ */ Xe(pS, [["render", yS]]), wS = ["aria-selected", "tabindex"], SS = /* @__PURE__ */ xt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Ug({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = yh(e, "selected"), n = /* @__PURE__ */ Fe(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (b(), T("button", {
      class: Ce(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(Gi),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      c("span", {
        class: Ce([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (s) => n.value = !1)
      }, [
        c("span", {
          class: Ce([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          _e(Rc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Oe(() => [
              c("span", {
                class: Ce([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        c("span", {
          class: Ce([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          _e(Rc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Oe(() => [
              c("span", {
                class: Ce([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      c("span", {
        class: Ce(a.$style.sidebarTabsButton__name)
      }, p(e.tab.name), 3)
    ], 10, wS));
  }
}), CS = "_sidebarTabsButton_q3kBA", TS = "_sidebarTabsButton_legacy_KQ4d1", ES = "_sidebarTabsButton_selected_Pjayf", AS = "_sidebarTabsButton_animatedHighlight_uvp-0", kS = "_sidebarTabsButton__name_rlQsL", OS = "_sidebarTabsButton__icon_QzZg4", NS = "_sidebarTabsButton__iconLayer_ZkZan", xS = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", LS = "_sidebarTabsButton__icon_pop_IA0By", RS = "_sidebarTabsButton__legacyIcon_QhcNW", IS = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: CS,
  sidebarTabsButton_legacy: TS,
  sidebarTabsButton_selected: ES,
  sidebarTabsButton_animatedHighlight: AS,
  sidebarTabsButton__name: kS,
  sidebarTabsButton__icon: OS,
  sidebarTabsButton__iconLayer: NS,
  sidebarTabsButton__iconLayer_hidden: xS,
  sidebarTabsButton__icon_pop: LS,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: RS
}, PS = {
  $style: IS
}, DS = /* @__PURE__ */ Xe(SS, [["__cssModules", PS]]), $S = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: DS
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
      isLegacy34: Gi,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [Hb()]) : t.order - n.order), this.updateActive();
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
}, MS = { class: "app-sidebar-tabs" };
function FS(e, t, n, i, a, r) {
  const s = Ue("NcAppSidebarTabsButton");
  return b(), T("div", MS, [
    r.hasMultipleTabs || r.showForSingleTab ? (b(), T("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ce(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = kt(Ke((...o) => r.focusPreviousTab && r.focusPreviousTab(...o), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = kt(Ke((...o) => r.focusNextTab && r.focusNextTab(...o), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = kt(Ke((...o) => r.focusActiveTabContent && r.focusActiveTabContent(...o), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = kt(Ke((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = kt(Ke((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = kt(Ke((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = kt(Ke((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onPointerleave: t[8] || (t[8] = (...o) => r.hideHighlight && r.hideHighlight(...o)),
      onFocusin: t[9] || (t[9] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onFocusout: t[10] || (t[10] = (...o) => r.onHighlightFocusOut && r.onHighlightFocusOut(...o))
    }, [
      a.highlightEnabled ? (b(), T("div", {
        key: 0,
        class: Ce(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: sn(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : H("", !0),
      (b(!0), T(de, null, Me(a.tabs, (o) => (b(), De(s, {
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
      class: Ce(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Re(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const zS = /* @__PURE__ */ Xe($S, [["render", FS], ["__scopeId", "data-v-74190d2a"]]);
Vi(Cy);
const US = {
  name: "NcAppSidebar",
  components: {
    NcActions: bo,
    NcAppSidebarHeader: Kw,
    NcAppSidebarTabs: zS,
    NcButton: Kn,
    NcLoadingIcon: Hp,
    NcEmptyContent: Qw,
    IconArrowRight: _p,
    IconClose: wp,
    IconDockRight: sS,
    IconStar: hS,
    IconStarOutline: _S
  },
  directives: {
    Focus: Tw,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: Cw
  },
  inject: {
    ncContentSelector: {
      from: yp,
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
    const e = /* @__PURE__ */ Fe(null);
    return fn("NcAppSidebar:header:ref", e), {
      uid: ul(),
      isMobile: my(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: _t("Change name"),
      closeTranslated: _t("Close sidebar"),
      favoriteTranslated: _t("Favorite"),
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
    isSlotPopulated: vu,
    t: _t,
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
      this.focusTrap || (this.focusTrap = lu([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: Qr(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && ga.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, BS = ["aria-labelledby"], HS = { class: "app-sidebar-header__info" }, jS = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, VS = { class: "app-sidebar-header__name-container" }, GS = { class: "app-sidebar-header__mainname-container" }, KS = ["placeholder", "value"], WS = ["title"], qS = {
  key: 2,
  class: "app-sidebar-header__description"
};
function YS(e, t, n, i, a, r) {
  const s = Ue("IconDockRight"), o = Ue("NcButton"), l = Ue("NcLoadingIcon"), d = Ue("IconStar"), u = Ue("IconStarOutline"), h = Ue("NcAppSidebarHeader"), S = Ue("IconArrowRight"), E = Ue("NcActions"), O = Ue("IconClose"), A = Ue("NcAppSidebarTabs"), L = Ue("NcEmptyContent"), R = Hu("focus"), M = Hu("click-outside");
  return b(), De(km, {
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
        r.ncContentSelector && !n.open && !n.noToggle ? (b(), De(ih, {
          key: 0,
          to: r.ncContentSelector
        }, [
          _e(o, Ht({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (G) => e.$emit("update:open", !0))
          }), {
            icon: Oe(() => [
              Re(e.$slots, "toggle-icon", {}, () => [
                _e(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : H("", !0),
        c("header", {
          class: Ce(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (b(), De(h, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Re(e.$slots, "info", { key: 0 }, () => [
            c("div", HS, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (b(), T("div", {
                key: 0,
                class: Ce(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: sn({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...G) => r.onFigureClick && r.onFigureClick(...G)),
                onKeydown: t[2] || (t[2] = kt((...G) => r.onFigureClick && r.onFigureClick(...G), ["enter"]))
              }, [
                Re(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : H("", !0),
              c("div", {
                class: Ce(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (b(), T("div", jS, [
                  Re(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (b(), De(o, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Ke(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Oe(() => [
                        n.starLoading ? (b(), De(l, { key: 0 })) : a.isStarred ? (b(), De(d, {
                          key: 1,
                          size: 20
                        })) : (b(), De(u, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : H("", !0)
                  ], !0)
                ])) : H("", !0),
                c("div", VS, [
                  c("div", GS, [
                    We(_e(h, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: Ke(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [ja, !n.nameEditable]
                    ]),
                    n.nameEditable ? We((b(), T("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Ke((...G) => r.onSubmitName && r.onSubmitName(...G), ["prevent"]))
                    }, [
                      We(c("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = kt(Ke((...G) => r.onDismissEditing && r.onDismissEditing(...G), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...G) => r.onNameInput && r.onNameInput(...G))
                      }, null, 40, KS), [
                        [R]
                      ]),
                      _e(o, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Oe(() => [
                          _e(S, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [M, () => r.onSubmitName()]
                    ]) : H("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (b(), De(E, {
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
                  n.subname.trim() !== "" || e.$slots.subname ? (b(), T("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Re(e.$slots, "subname", {}, () => [
                      Ne(p(n.subname), 1)
                    ], !0)
                  ], 8, WS)) : H("", !0)
                ])
              ], 2)
            ])
          ], !0),
          _e(o, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Ke(r.closeSidebar, ["prevent"])
          }, {
            icon: Oe(() => [
              _e(O, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (b(), T("div", qS, [
            Re(e.$slots, "description", {}, void 0, !0)
          ])) : H("", !0)
        ], 2),
        We(_e(A, {
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
          [ja, !n.loading]
        ]),
        n.loading ? (b(), De(L, { key: 1 }, {
          icon: Oe(() => [
            _e(l, { size: 64 })
          ]),
          _: 1
        })) : H("", !0)
      ], 40, BS), [
        [ja, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const XS = /* @__PURE__ */ Xe(US, [["render", YS], ["__scopeId", "data-v-c2c6820b"]]), ZS = {
  name: "NcActionLink",
  mixins: [Cp],
  inject: {
    isInSemanticMenu: {
      from: cu,
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
}, JS = ["role"], QS = ["download", "href", "aria-label", "target", "title", "role"], eC = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, tC = { class: "action-link__name" }, nC = ["textContent"], iC = ["textContent"], aC = {
  key: 2,
  class: "action-link__text"
};
function rC(e, t, n, i, a, r) {
  return b(), T("li", {
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
          class: Ce(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: sn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (b(), T("span", eC, [
        c("strong", tC, p(e.name), 1),
        t[1] || (t[1] = c("br", null, null, -1)),
        c("span", {
          class: "action-link__longtext",
          textContent: p(e.text)
        }, null, 8, nC)
      ])) : e.isLongText ? (b(), T("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: p(e.text)
      }, null, 8, iC)) : (b(), T("span", aC, p(e.text), 1)),
      H("", !0)
    ], 8, QS)
  ], 8, JS);
}
const Da = /* @__PURE__ */ Xe(ZS, [["render", rC], ["__scopeId", "data-v-32f01b7a"]]);
Vi(Oy);
const sC = `<!--
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
`, oC = `<!--
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
`, lC = { class: "vue-skip-actions__container" }, cC = { class: "vue-skip-actions__headline" }, uC = { class: "vue-skip-actions__buttons" }, dC = /* @__PURE__ */ xt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    fn(bp, o), fn(yp, "#content-vue"), fn("appName", q(() => t.appName));
    const n = ds(), i = /* @__PURE__ */ Fe(!1), a = /* @__PURE__ */ Fe(), r = q(() => a.value === "navigation" ? oC : sC);
    dh(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function s() {
      hi("toggle-navigation", { open: !0 }), pn(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function o(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, d) => (b(), T("div", {
      id: "content-vue",
      class: Ce(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(Gi) }]])
    }, [
      (b(), De(ih, { to: "#skip-actions" }, [
        c("div", lC, [
          c("div", cC, p(g(_t)("Keyboard navigation help")), 1),
          c("div", uC, [
            We(_e(Kn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Ke(s, ["prevent"]),
              onFocusin: d[0] || (d[0] = (u) => a.value = "navigation"),
              onMouseover: d[1] || (d[1] = (u) => a.value = "navigation")
            }, {
              default: Oe(() => [
                Ne(p(g(_t)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [ja, i.value]
            ]),
            _e(Kn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: d[2] || (d[2] = (u) => a.value = "content"),
              onMouseover: d[3] || (d[3] = (u) => a.value = "content")
            }, {
              default: Oe(() => [
                Ne(p(g(_t)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          We(_e(cl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [ja, !g(n)]
          ])
        ])
      ])),
      Re(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), fC = /* @__PURE__ */ Xe(dC, [["__scopeId", "data-v-d13dcb98"]]), hC = { class: "library-shelf-tree-node" }, pC = ["aria-expanded", "aria-label"], vC = ["href"], gC = { class: "library-shelf-summary-title" }, mC = { dir: "auto" }, bC = { class: "library-muted" }, yC = { dir: "auto" }, _C = {
  key: 1,
  role: "status",
  class: "library-muted"
}, wC = {
  key: 2,
  role: "status",
  class: "library-muted"
}, SC = {
  key: 3,
  class: "library-shelf-tree"
}, CC = ["disabled"], TC = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Fe(!1), i = /* @__PURE__ */ Fe(!1), a = /* @__PURE__ */ Fe(!1), r = /* @__PURE__ */ Fe(!1), s = /* @__PURE__ */ Fe([]), o = /* @__PURE__ */ Fe(!1), l = /* @__PURE__ */ Fe(0);
    async function d() {
      n.value = !n.value, !(!n.value || i.value || a.value) && await u();
    }
    async function u() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const h = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(l.value) }), S = await fetch(`${t.childrenUrl}?${h}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!S.ok) throw new Error("Shelf children request failed");
          const E = await S.json(), O = Array.isArray(E?.nodes) ? E.nodes : [];
          s.value.push(...O), o.value = E?.hasMore === !0, l.value = Number.isInteger(E?.nextOffset) ? E.nextOffset : s.value.length, i.value = !o.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (h, S) => {
      const E = Ue("ShelfTreeNode", !0);
      return b(), T("li", hC, [
        e.node.hasChildren ? (b(), T("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(n.value),
          "aria-label": n.value ? g(m)("library", "Collapse {folder}", { folder: e.node.label }) : g(m)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: d
        }, p(n.value ? "−" : "+"), 9, pC)) : H("", !0),
        c("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          c("span", gC, [
            c("strong", null, [
              c("bdi", mC, p(e.node.label), 1)
            ]),
            c("span", null, p(g(Bn)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          c("small", bC, [
            c("bdi", yC, p(e.node.path), 1)
          ])
        ], 8, vC),
        a.value ? (b(), T("small", _C, p(g(m)("library", "Loading folders…")), 1)) : r.value ? (b(), T("small", wC, p(g(m)("library", "Could not load folders.")), 1)) : H("", !0),
        n.value && s.value.length ? (b(), T("ul", SC, [
          (b(!0), T(de, null, Me(s.value, (O) => (b(), De(E, {
            key: O.id,
            node: O,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : H("", !0),
        n.value && o.value ? (b(), T("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: u
        }, p(g(m)("library", "Load more folders")), 9, CC)) : H("", !0)
      ]);
    };
  }
}, EC = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, AC = { id: "library-sidebar-filters-heading" }, kC = ["aria-label"], OC = ["name", "value"], NC = ["value"], xC = ["value"], LC = ["title"], RC = ["placeholder"], IC = { value: "" }, PC = ["value"], DC = { value: "" }, $C = ["value"], MC = { class: "library-publication-filter" }, FC = { for: "library-publication-search" }, zC = ["placeholder", "aria-expanded"], UC = ["value"], BC = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, HC = ["onClick"], jC = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, VC = { class: "library-year-filter" }, GC = { for: "library-year-search" }, KC = ["placeholder", "aria-expanded"], WC = ["value"], qC = {
  key: 0,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, YC = ["onClick"], XC = {
  type: "submit",
  class: "button secondary library-year-apply"
}, ZC = { class: "library-creator-filter" }, JC = { for: "library-creator-search" }, QC = ["placeholder", "title", "aria-expanded"], eT = ["value"], tT = {
  key: 0,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, nT = ["onClick"], iT = {
  type: "submit",
  class: "button secondary library-creator-apply"
}, aT = ["placeholder"], rT = { value: "" }, sT = ["value"], oT = { value: "" }, lT = ["value"], cT = { value: "" }, uT = ["value"], dT = { value: "" }, fT = ["value"], hT = { value: "" }, pT = ["value"], vT = { value: "" }, gT = ["value"], mT = { value: "" }, bT = { value: "1" }, yT = {
  type: "submit",
  class: "button primary"
}, _T = {
  href: "?",
  class: "button secondary"
}, wT = ["href"], ST = ["lang", "dir"], CT = {
  key: 0,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, TT = { class: "library-review-header" }, ET = { class: "library-muted library-catalogue-eyebrow" }, AT = { id: "library-review-heading" }, kT = ["aria-label"], OT = ["href", "aria-current"], NT = ["aria-label"], xT = ["name", "value"], LT = {
  type: "submit",
  class: "button secondary"
}, RT = ["aria-busy"], IT = { key: 0 }, PT = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, DT = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, $T = { class: "library-metadata-review-workbench-copy" }, MT = { class: "library-muted library-catalogue-eyebrow" }, FT = ["title"], zT = {
  key: 0,
  class: "library-metadata-review-card"
}, UT = {
  class: "library-bidi-human",
  dir: "auto"
}, BT = { class: "library-muted" }, HT = {
  class: "library-bidi-machine",
  dir: "ltr"
}, jT = { class: "library-metadata-review-fields" }, VT = {
  class: "library-bidi-human",
  dir: "auto"
}, GT = {
  class: "library-bidi-human",
  dir: "auto"
}, KT = {
  class: "library-bidi-human",
  dir: "auto"
}, WT = {
  class: "library-bidi-machine",
  dir: "ltr"
}, qT = {
  class: "library-bidi-human",
  dir: "auto"
}, YT = {
  class: "library-bidi-human",
  dir: "auto"
}, XT = ["action"], ZT = ["value"], JT = ["value"], QT = {
  type: "submit",
  class: "button secondary"
}, eE = { class: "library-metadata-review-actions" }, tE = ["href"], nE = ["href"], iE = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, aE = ["href"], rE = ["aria-label"], sE = ["onClick"], oE = {
  class: "library-bidi-human",
  dir: "auto"
}, lE = {
  key: 0,
  class: "library-muted"
}, cE = {
  class: "library-bidi-human",
  dir: "auto"
}, uE = {
  key: 1,
  class: "library-scan-error"
}, dE = {
  class: "library-bidi-human",
  dir: "auto"
}, fE = ["onClick"], hE = ["href"], pE = ["aria-label"], vE = ["href"], gE = {
  key: 1,
  class: "library-muted"
}, mE = { key: 0 }, bE = ["href"], yE = {
  key: 3,
  class: "library-muted"
}, _E = {
  key: 1,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, wE = { class: "library-home-header" }, SE = { class: "library-muted library-catalogue-eyebrow" }, CE = { id: "library-home-heading" }, TE = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, EE = { id: "library-continue-heading" }, AE = { class: "library-muted" }, kE = ["href"], OE = {
  key: 0,
  class: "library-home-card-row"
}, NE = ["onClick"], xE = { class: "library-cover-frame" }, LE = ["src"], RE = { class: "library-cover-summary" }, IE = ["onClick"], PE = { dir: "auto" }, DE = {
  key: 0,
  class: "library-cover-creator"
}, $E = { dir: "auto" }, ME = ["href"], FE = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, zE = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, UE = { id: "library-recent-heading" }, BE = { class: "library-muted" }, HE = ["href"], jE = {
  key: 0,
  class: "library-home-card-row"
}, VE = ["onClick"], GE = { class: "library-cover-frame" }, KE = ["src"], WE = { class: "library-cover-summary" }, qE = ["onClick"], YE = { dir: "auto" }, XE = {
  key: 0,
  class: "library-cover-creator"
}, ZE = { dir: "auto" }, JE = ["href"], QE = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, eA = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, tA = { id: "library-home-shelves-heading" }, nA = { class: "library-muted" }, iA = ["href"], aA = ["aria-label"], rA = ["href"], sA = { dir: "auto" }, oA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, lA = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, cA = { id: "library-home-attention-heading" }, uA = { class: "library-muted" }, dA = ["href"], fA = {
  key: 2,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, hA = { class: "library-home-header" }, pA = { class: "library-muted library-catalogue-eyebrow" }, vA = { id: "library-shelves-landing-heading" }, gA = { class: "library-muted" }, mA = ["aria-label"], bA = { class: "library-shelf-tree" }, yA = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, _A = { class: "library-muted" }, wA = { class: "library-empty-actions" }, SA = ["href"], CA = ["href"], TA = {
  key: 3,
  id: "library-catalogue",
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, EA = { class: "library-catalogue-header" }, AA = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, kA = { id: "library-catalogue-heading" }, OA = ["aria-label"], NA = ["aria-label"], xA = ["name", "value"], LA = { "data-library-control": "sort" }, RA = { value: "title" }, IA = { value: "recent" }, PA = { value: "publicationDate" }, DA = { value: "publication" }, $A = { value: "lastOpened" }, MA = { value: "format" }, FA = ["aria-label"], zA = ["aria-pressed"], UA = ["aria-pressed"], BA = ["aria-pressed"], HA = ["aria-pressed"], jA = {
  id: "library-collections",
  class: "library-saved-collections"
}, VA = ["title"], GA = ["action", "title"], KA = ["value"], WA = ["value"], qA = ["placeholder", "disabled"], YA = ["disabled", "title"], XA = ["aria-label"], ZA = ["href"], JA = ["action"], QA = ["value"], e2 = {
  type: "submit",
  class: "button tertiary"
}, t2 = ["aria-label"], n2 = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, i2 = ["title"], a2 = { class: "library-workspace-panel-purpose" }, r2 = { class: "library-workspace-scope-badge" }, s2 = { "aria-live": "polite" }, o2 = ["action"], l2 = ["value"], c2 = ["placeholder"], u2 = ["title"], d2 = ["action"], f2 = ["value"], h2 = ["placeholder"], p2 = ["title"], v2 = ["action"], g2 = ["value"], m2 = ["name", "value"], b2 = ["title"], y2 = ["action"], _2 = ["value"], w2 = ["name", "value"], S2 = { name: "bulkEditField" }, C2 = { value: "publicationType" }, T2 = { value: "subtitle" }, E2 = { value: "creators" }, A2 = { value: "publication" }, k2 = { value: "publicationDate" }, O2 = { value: "language" }, N2 = { value: "publisher" }, x2 = { value: "subjects" }, L2 = { value: "classifications" }, R2 = ["placeholder"], I2 = ["title"], P2 = ["action"], D2 = ["value"], $2 = ["name", "value"], M2 = ["title"], F2 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, z2 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, U2 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, B2 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, H2 = { class: "library-muted library-catalogue-eyebrow" }, j2 = ["title"], V2 = ["aria-label"], G2 = { key: 0 }, K2 = { key: 1 }, W2 = { key: 2 }, q2 = ["aria-label"], Y2 = { key: 0 }, X2 = { key: 1 }, Z2 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, J2 = { class: "library-muted library-catalogue-eyebrow" }, Q2 = ["title"], ek = ["aria-label"], tk = ["href"], nk = {
  key: 0,
  class: "library-notice"
}, ik = { class: "library-publication-issue-label" }, ak = ["href"], rk = { class: "library-muted" }, sk = {
  key: 1,
  class: "library-publication-unknown-issues"
}, ok = ["title"], lk = ["href"], ck = { class: "library-catalogue-status-row" }, uk = { class: "library-muted library-filter-result-summary" }, dk = { key: 0 }, fk = { href: "?" }, hk = ["aria-label"], pk = { class: "library-pagination-range" }, vk = { key: 0 }, gk = ["href"], mk = {
  key: 1,
  class: "library-muted"
}, bk = ["href"], yk = {
  key: 3,
  class: "library-muted"
}, _k = ["aria-label"], wk = ["href", "aria-label", "onClick"], Sk = ["title"], Ck = { class: "library-empty-actions" }, Tk = ["href"], Ek = { class: "library-muted" }, Ak = ["title"], kk = { class: "library-empty-actions" }, Ok = ["href"], Nk = ["title"], xk = { class: "library-empty-actions" }, Lk = ["href"], Rk = {
  href: "?",
  class: "button primary"
}, Ik = ["title"], Pk = { class: "library-empty-actions" }, Dk = ["href"], $k = {
  key: 6,
  class: "library-select-visible"
}, Mk = ["checked"], Fk = {
  key: 7,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, zk = { class: "library-item-selection" }, Uk = ["checked", "aria-label", "onChange"], Bk = { class: "library-catalogue-list-main" }, Hk = ["onClick"], jk = {
  class: "library-bidi-human",
  dir: "auto"
}, Vk = {
  key: 0,
  class: "library-muted"
}, Gk = {
  class: "library-bidi-human",
  dir: "auto"
}, Kk = { class: "library-catalogue-list-metadata" }, Wk = { key: 0 }, qk = {
  class: "library-bidi-human",
  dir: "auto"
}, Yk = { key: 1 }, Xk = { key: 2 }, Zk = ["dir"], Jk = { key: 3 }, Qk = {
  class: "library-bidi-human",
  dir: "auto"
}, eO = { class: "library-catalogue-list-actions" }, tO = ["href"], nO = ["onClick"], iO = { class: "library-item-selection" }, aO = ["checked", "aria-label", "onChange"], rO = ["aria-labelledby", "aria-expanded", "onClick"], sO = ["id"], oO = { class: "library-cover-frame" }, lO = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, cO = ["src", "onLoad", "onError"], uO = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, dO = ["action", "onSubmit"], fO = ["value"], hO = ["value"], pO = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], vO = ["data-library-star-error"], gO = { class: "library-cover-summary" }, mO = { class: "library-cover-primary" }, bO = ["id"], yO = ["onClick"], _O = {
  class: "library-bidi-human",
  dir: "auto"
}, wO = {
  key: 0,
  class: "library-cover-creator"
}, SO = {
  class: "library-bidi-human",
  dir: "auto"
}, CO = {
  key: 1,
  class: "library-cover-badges"
}, TO = {
  key: 0,
  class: "library-cover-badge"
}, EO = {
  class: "library-bidi-machine",
  dir: "ltr"
}, AO = {
  key: 1,
  class: "library-cover-context"
}, kO = {
  class: "library-bidi-human",
  dir: "auto"
}, OO = { class: "library-cover-primary-actions" }, NO = ["href"], xO = ["aria-label"], LO = { class: "library-pagination-range" }, RO = { key: 0 }, IO = ["href"], PO = {
  key: 1,
  class: "library-muted"
}, DO = ["href"], $O = {
  key: 3,
  class: "library-muted"
}, MO = { class: "library-sidebar-content" }, FO = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, zO = ["role"], UO = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, BO = { class: "library-sidebar-publication-header" }, HO = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, jO = ["src"], VO = { class: "library-sidebar-publication-summary" }, GO = { class: "library-muted library-catalogue-eyebrow" }, KO = {
  class: "library-bidi-human",
  dir: "auto"
}, WO = { key: 0 }, qO = {
  class: "library-bidi-machine",
  dir: "ltr"
}, YO = { class: "library-detail-drawer-actions" }, XO = ["href"], ZO = ["aria-label"], JO = ["aria-current", "onClick"], QO = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, eN = { id: "library-sidebar-overview-heading" }, tN = {
  key: 0,
  class: "library-sidebar-description"
}, nN = {
  class: "library-bidi-human",
  dir: "auto"
}, iN = { class: "library-detail-drawer-facts" }, aN = { key: 0 }, rN = { key: 1 }, sN = { key: 2 }, oN = { key: 3 }, lN = { key: 4 }, cN = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, uN = { id: "library-sidebar-metadata-heading" }, dN = ["placeholder"], fN = ["onUpdate:modelValue", "aria-label", "placeholder"], hN = ["onUpdate:modelValue", "aria-label"], pN = ["onClick"], vN = { class: "library-muted" }, gN = {
  key: 0,
  role: "alert"
}, mN = {
  key: 1,
  role: "status"
}, bN = ["disabled"], yN = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, _N = { id: "library-sidebar-suggestions-heading" }, wN = { class: "library-muted" }, SN = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, CN = { id: "library-sidebar-activity-heading" }, TN = { class: "library-detail-drawer-facts" }, EN = { key: 0 }, AN = { key: 1 }, kN = { key: 2 }, ON = { dir: "ltr" }, NN = ["aria-label"], xN = ["disabled"], LN = ["disabled"], RN = 20, IN = "/apps/library", PN = 2147483647, DN = {
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
    function r(y, _) {
      return Object.prototype.hasOwnProperty.call(a, y) && String(_ ?? "").trim() === a[y];
    }
    function s(y) {
      const _ = new URLSearchParams(y);
      for (const f of Object.keys(a)) {
        const B = [...new Set([..._.keys()].filter((ke) => ke === f || ke.startsWith(`${f}[`)))], ge = B.reduce((ke, ze) => ke + _.getAll(ze).length, 0);
        if (ge > 1 || B.some((ke) => ke !== f)) {
          for (const ke of B) _.delete(ke);
          continue;
        }
        f !== "status" && ge === 1 && !r(f, _.get(f)) && _.delete(f);
      }
      return _;
    }
    function o(y) {
      return Object.keys(a).some((_) => y.getAll(_).length === 1 && r(_, y.get(_)));
    }
    function l(y) {
      return Object.fromEntries(Object.entries(y || {}).filter(([_, f]) => _ === "status" || !Object.prototype.hasOwnProperty.call(a, _) || r(_, f)));
    }
    const d = /* @__PURE__ */ $t({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), u = /* @__PURE__ */ $t((d.items || []).map((y) => ({ ...y }))), h = q(() => u), S = q(() => d.shelves || []), E = q(() => d.formats || []), O = q(() => d.publicationTypes?.length ? d.publicationTypes : n), A = q(() => d.publishers || []), L = q(() => d.publications || []), R = q(() => d.publicationIssueContext || null), M = q(() => d.scanStatuses || []), G = q(() => d.workflowStatuses || []), F = q(() => d.subjects || []), le = q(() => d.classifications || []), ne = q(() => d.cataloguePagination || {
      page: 1,
      limit: 100,
      total: h.value.length,
      visible: h.value.length,
      from: h.value.length > 0 ? 1 : 0,
      to: h.value.length,
      previousUrl: "",
      nextUrl: ""
    }), P = /* @__PURE__ */ $t({
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
      y !== "status" && (r(y, P[y]) || (P[y] = ""));
    const ce = /* @__PURE__ */ Fe(P.publication), X = /* @__PURE__ */ Fe(!1), ae = /* @__PURE__ */ Fe(null), me = q(() => {
      const y = ce.value.trim().toLocaleLowerCase();
      return (y !== "" && ae.value !== null ? ae.value : L.value).filter((f) => y === "" || f.toLocaleLowerCase().includes(y)).slice(0, RN);
    });
    pt(() => P.publication, (y) => {
      ce.value = y || "";
    });
    let J = null, te = null, D = 0;
    pt(ce, (y) => {
      window.clearTimeout(J), te?.abort(), te = null, ae.value = null;
      const _ = String(y || "").trim();
      if (_ === "") return;
      const f = ++D;
      J = window.setTimeout(() => {
        ev(_, f);
      }, 200);
    });
    const $ = /* @__PURE__ */ Fe(P.creator), Y = /* @__PURE__ */ Fe(!1), re = /* @__PURE__ */ Fe(null), ie = q(() => re.value || []);
    pt(() => P.creator, (y) => {
      $.value = y || "";
    });
    let he = null, fe = null, Te = 0;
    pt($, (y) => {
      window.clearTimeout(he), fe?.abort(), fe = null, re.value = null;
      const _ = String(y || "").trim();
      if (_ === "") return;
      const f = ++Te;
      he = window.setTimeout(() => {
        Jp(_, f);
      }, 200);
    });
    const ve = /* @__PURE__ */ Fe(P.year), He = /* @__PURE__ */ Fe(!1), Ee = /* @__PURE__ */ Fe(null), it = q(() => Ee.value || []);
    pt(() => P.year, (y) => {
      ve.value = y || "";
    });
    let ot = null, lt = null, St = 0;
    pt(ve, (y) => {
      window.clearTimeout(ot), lt?.abort(), lt = null, Ee.value = null;
      const _ = String(y || "").trim();
      if (_ === "") return;
      const f = ++St;
      ot = window.setTimeout(() => {
        Qp(_, f);
      }, 200);
    });
    const at = Object.fromEntries(Object.keys(P).map((y) => [y, y === "sort" ? "title" : y === "view" ? "compact" : ""])), on = window.location.pathname.indexOf(IN), U = on >= 0 ? window.location.pathname.slice(0, on) : "", v = {
      catalogue: `${U}/apps/library/`,
      review: `${U}/apps/library/?scannerConflicts=1`,
      settings: `${U}/settings/user/library`
    };
    function C(y, _) {
      if (typeof y != "string" || y === "") return _;
      try {
        const f = U ? `${U}/` : "/";
        let B = y;
        for (let ge = 0; ge < 5; ge += 1) {
          if (!B.startsWith("/") || B.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(B)) return _;
          const ke = new URL(B, window.location.origin);
          if (ke.origin !== window.location.origin || !ke.pathname.startsWith(f)) return _;
          const ze = B.split(/[?#]/, 1)[0];
          for (const en of ze.split("/")) {
            let ki = en;
            for (let xa = 0; xa < 5; xa += 1) {
              const Mn = decodeURIComponent(ki);
              if (/[\\/\u0000-\u001f\u007f]/.test(Mn) || Mn === "." || Mn === "..") return _;
              if (Mn === ki) break;
              if (ki = Mn, xa === 4) return _;
            }
          }
          const ft = decodeURI(B);
          if (ft === B) return y;
          B = ft;
        }
        return _;
      } catch {
        return _;
      }
    }
    const k = q(() => C(d.settingsUrl, v.settings)), N = q(() => C(d.catalogueRootUrl, v.catalogue)), x = q(() => C(d.homeUrl, `${v.catalogue}?home=1`)), z = q(() => C(d.shelvesUrl, `${v.catalogue}?shelves=1`)), W = q(() => C(d.reviewUrl || d.scannerConflictReviewUrl, v.review)), V = q(() => Object.entries(a).some(([y, _]) => P[y] === _)), Q = q(() => i.reduce((y, _) => y + Number(Ou.value[_.countKey] || 0), 0)), j = q(() => d.surface === "home"), be = q(() => d.surface === "shelves"), oe = q(() => !j.value && !be.value && !V.value && !P.starred && P.sort !== "lastOpened" && !P.shelf), ye = q(() => [
      { key: "home", name: m("library", "Home"), href: x.value, active: j.value },
      { key: "all", name: m("library", "All publications"), href: N.value, active: oe.value },
      { key: "starred", name: m("library", "Starred"), href: `${N.value}?starred=1`, active: P.starred === "1" },
      { key: "continue", name: m("library", "Continue reading"), href: `${N.value}?sort=lastOpened`, active: P.sort === "lastOpened" },
      { key: "shelves", name: m("library", "Shelves"), href: z.value, active: be.value || !!P.shelf },
      { key: "collections", name: m("library", "Collections"), href: `${N.value}#library-collections`, active: !1 }
    ]), pe = q(() => d.requestToken || ""), Le = q(() => d.catalogueEndpointUrl || "/apps/library/catalogue"), $e = q(() => d.shelfChildrenUrl || "/apps/library/shelves/children"), Pe = q(() => d.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), Qe = q(() => d.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), rt = q(() => d.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Ct = q(() => d.itemSidebarUrlTemplate || `${U}/apps/library/items/__ITEM_ID__/sidebar`), Lt = q(() => d.batchTagUrl || "/apps/library/bulk/tags"), Wt = q(() => d.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Yn = q(() => d.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), ut = q(() => d.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), jt = q(() => d.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), _i = q(() => d.scannerConflictReviewUrl || "?scannerConflicts=1");
    d.importHealthSummary, d.importHealthSummary && Object.keys(d.importHealthSummary).length > 0;
    const Xn = q(() => d.discoveryPage === "publication"), Ki = q(() => d.discoveryPage === "year"), Wi = q(() => d.discoveryPage === "creator"), Nn = q(() => Xn.value || Ki.value || Wi.value), Zn = q(() => d.discoveryTitle || P.publication || P.year || P.creator || ""), fs = q(() => Nn.value ? Zn.value : m("library", "Library")), Ya = q(() => Wi.value ? m("library", "Creator") : Ki.value ? m("library", "Publication year") : m("library", "Publication / series")), Xa = q(() => Number(d.rootCount || 0)), hs = q(() => Number(d.enabledRootCount || 0)), wa = q(() => Xa.value === 0), wi = q(() => Xa.value > 0 && hs.value === 0), qi = q(() => xn.value.length > 0), Zt = {
      q: "Search",
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
    }, Jn = q(() => {
      if (typeof window > "u") return "";
      const y = new URLSearchParams(window.location.search);
      if (y.get("batchMetadataApplyResult") !== "1") return "";
      const _ = y.get("batchMetadataField") || "field", f = y.get("batchMetadataApplied") || "0", B = y.get("batchMetadataUnchanged") || "0", ge = y.get("batchMetadataSkipped") || "0";
      return m("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: _, unchanged: B, skipped: ge });
    }), Sa = q(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? m("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), Ca = q(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? m("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), ps = q(() => d.savedCollections || []), vs = q(() => d.savedCollectionSaveUrl || "/apps/library/collections"), Za = q(() => d.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Ja = ["compact", "gallery", "list", "shelf"], Rt = q(() => Ja.includes(P.view) ? P.view : "compact"), vl = q(() => ({
      "library-cover-gallery--compact": Rt.value === "compact",
      "library-cover-gallery--gallery": Rt.value === "gallery",
      "library-cover-gallery--shelf": Rt.value === "shelf"
    })), xn = q(() => Object.entries(Zt).map(([y, _]) => ({ key: y, label: m("library", _), value: P[y] || "" })).filter((y) => String(y.value).trim() !== "")), gl = /* @__PURE__ */ new Set([
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
    ]), ml = q(() => Object.entries(l(P)).filter(([y, _]) => !gl.has(y) && String(_ || "").trim() !== "").map(([y, _]) => ({ key: y, value: _ }))), st = q(() => Object.entries(P).filter(([y, _]) => !["q", "sort", "starred"].includes(y) && String(_ || "").trim() !== "").map(([y, _]) => ({ key: y, value: _ }))), yn = q(() => Object.entries(l(P)).filter(([y, _]) => String(_ || "").trim() !== "").map(([y, _]) => ({ key: y, value: _ }))), bl = q(() => yn.value.filter(({ key: y, value: _ }) => y !== "q" && !(y === "sort" && _ === "title"))), Ta = /* @__PURE__ */ $t({}), Si = q(() => d.homeRows || { continueReading: [], recentlyAdded: [] }), Qa = q(() => d.homeShelves || []), er = q(() => d.shelfTree || []), tr = q(() => d.needsAttention || { count: 0, url: `${N.value}?needsMetadata=1` }), Jt = /* @__PURE__ */ Fe([]), Ea = q(() => new Set(Jt.value));
    function gs(y, _) {
      const f = new Set(Jt.value);
      _ ? f.add(Number(y)) : f.delete(Number(y)), Jt.value = [...f];
    }
    function Ln(y) {
      Jt.value = y.currentTarget.checked ? h.value.map((_) => Number(_.id)) : [];
    }
    function ms() {
      const y = new Set(h.value.map((_) => Number(_.id)));
      Jt.value = Jt.value.filter((_) => y.has(_));
    }
    function Aa(y) {
      const _ = y.target;
      if (_ instanceof HTMLFormElement) {
        _.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of Jt.value) {
          const B = document.createElement("input");
          B.type = "hidden", B.name = "itemIds[]", B.value = String(f), B.dataset.librarySelectedId = "1", _.appendChild(B);
        }
      }
    }
    const we = /* @__PURE__ */ Fe(null), Qn = /* @__PURE__ */ Fe(null), dt = /* @__PURE__ */ $t({ loading: !1, error: "", missing: !1 }), Rn = /* @__PURE__ */ Fe("overview"), Qt = /* @__PURE__ */ $t({ saving: !1, saved: !1, error: "" }), mt = /* @__PURE__ */ $t({ title: "", publicationDate: "", identifiers: [] }), nr = /* @__PURE__ */ Fe(null), ln = /* @__PURE__ */ Fe(null), _n = /* @__PURE__ */ Fe(!1);
    let Ci = null, It = null, In = null, qt = !1, Yi = null, Ti = 0;
    const Pn = q(() => Qn.value !== null), Ei = q(() => we.value ? h.value.findIndex((y) => y.id === we.value.id) : -1), Xi = q(() => Ei.value > 0 ? h.value[Ei.value - 1] : null), Zi = q(() => Ei.value >= 0 && Ei.value < h.value.length - 1 ? h.value[Ei.value + 1] : null), bs = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], yl = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Ji(y) {
      const _ = String(y ?? "").trim(), f = _.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : _;
    }
    function ys(y) {
      return { ...y, publicationDate: Ji(y?.publicationDate) };
    }
    function _s(y) {
      mt.title = String(y?.title || ""), mt.publicationDate = Ji(y?.publicationDate), mt.identifiers = Array.isArray(y?.identifiers) ? y.identifiers.map((_) => ({ scheme: String(_?.scheme || ""), displayValue: String(_?.displayValue || _?.value || "") })) : [], Object.assign(Qt, { saving: !1, saved: !1, error: "" });
    }
    function ws() {
      mt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function ka(y) {
      mt.identifiers.splice(y, 1);
    }
    async function ir() {
      const y = we.value;
      if (!y?.updateUrl || Qt.saving) return;
      Object.assign(Qt, { saving: !0, saved: !1, error: "" });
      const _ = new FormData();
      _.set("requesttoken", pe.value), _.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const B = y[f];
        _.set(f, Array.isArray(B) ? B.join(", ") : String(B ?? ""));
      }
      _.set("title", mt.title), _.set("publicationDate", Ji(mt.publicationDate)), mt.identifiers.forEach((f, B) => {
        _.set(`identifiers[${B}][scheme]`, f.scheme), _.set(`identifiers[${B}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(y.updateUrl, { method: "POST", body: _, credentials: "same-origin", headers: { Accept: "application/json" } }), B = await f.json().catch(() => ({}));
        if (!f.ok || B.saved !== !0) throw new Error(B.error || m("library", "Metadata could not be saved."));
        y.title = mt.title.trim(), y.publicationDate = Ji(mt.publicationDate), y.identifiers = mt.identifiers.filter((ke) => ke.scheme.trim() || ke.displayValue.trim()).map((ke) => ({ ...ke }));
        const ge = h.value.find((ke) => Number(ke.id) === Number(y.id));
        ge && (ge.title = y.title, ge.publicationDate = y.publicationDate), Qt.saved = !0;
      } catch (f) {
        Qt.error = f?.message || m("library", "Metadata could not be saved.");
      } finally {
        Qt.saving = !1;
      }
    }
    const Z = q(() => {
      const y = r("scannerConflicts", P.scannerConflicts) || r("weakMetadata", P.weakMetadata), _ = y ? h.value.find((f) => K(f).length > 0) : null;
      return {
        enabled: y,
        item: _,
        fields: _ ? K(_) : [],
        reviewNextUrl: _i.value,
        skipUrl: ne.value.nextUrl || _i.value
      };
    }), w = q(() => i.map((y) => ({
      ...y,
      label: m("library", y.label),
      href: `${N.value}?${encodeURIComponent(y.key)}=${encodeURIComponent(y.value)}`,
      active: String(P[y.key] || "") === y.value
    })));
    function I(y) {
      return Array.isArray(y) ? JSON.stringify(y) : y == null ? "" : String(y);
    }
    function K(y) {
      const _ = y.fieldValues || {}, f = y.fieldSources || {};
      return bs.filter((B) => Object.prototype.hasOwnProperty.call(_, B)).map((B) => {
        const ge = I(y[B]), ke = I(_[B]), ze = I(f[B] || y.metadataSource || "scanner"), ft = ze.includes("filename") || ze.includes("path") ? ke : "", en = ze.includes("sidecar") ? ke : "";
        return { field: B, currentValue: ge, scannerCandidate: ke, pathTemplateCandidate: ft, sidecarValue: en, sourceProvenance: ze, differs: ge !== ke };
      }).filter((B) => B.differs);
    }
    let se = 0, ue = null;
    function Ae() {
      const y = new URLSearchParams(window.location.search).getAll("item");
      if (y.length !== 1 || !/^[1-9][0-9]*$/.test(y[0])) return null;
      const _ = Number(y[0]);
      return Number.isSafeInteger(_) && _ <= PN ? _ : null;
    }
    function Ze(y, _ = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), y !== null && f.searchParams.set("item", String(y)), history[`${_}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function Je(y, { historyMode: _ = "push", seed: f = null } = {}) {
      ue?.abort();
      const B = ++se, ge = new AbortController();
      ue = ge, Qn.value = y, Rn.value = "overview", we.value = f && Number(f.id) === y ? ys(f) : null, we.value && _s(we.value), Object.assign(dt, { loading: !0, error: "", missing: !1 }), _ !== "none" && Ze(y, _);
      try {
        const ke = Ct.value.replace("__ITEM_ID__", encodeURIComponent(String(y))), ze = await fetch(ke, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ge.signal });
        if (B !== se) return;
        if (!ze.ok) {
          we.value = null, dt.missing = ze.status === 404, dt.error = ze.status === 404 ? m("library", "This publication is unavailable or you do not have access.") : m("library", "Could not load publication details. Try again.");
          return;
        }
        const ft = await ze.json();
        if (B !== se) return;
        if (typeof ft?.item?.id != "number" || !Number.isSafeInteger(ft.item.id) || ft.item.id !== y) {
          we.value = null, dt.missing = !1, dt.error = m("library", "Could not load publication details. Try again.");
          return;
        }
        we.value = ys(ft.item), _s(we.value), await pn();
      } catch (ke) {
        B === se && ke?.name !== "AbortError" && (we.value = null, dt.missing = !1, dt.error = m("library", "Could not load publication details. Try again."));
      } finally {
        B === se && (dt.loading = !1, ue = null);
      }
    }
    function nt(y, _) {
      _l(), Ci = _?.currentTarget instanceof HTMLElement ? _.currentTarget : null, Je(Number(y.id), { seed: y });
    }
    function bt({ historyMode: y = "push", restoreFocus: _ = !0 } = {}) {
      In = _ ? Ci : null, Ci = null, ue?.abort(), ue = null, se += 1, Qn.value = null, we.value = null, Rn.value = "overview", Object.assign(dt, { loading: !1, error: "", missing: !1 }), y !== "none" && Ze(null, y);
    }
    function Oa() {
      _n.value ? (ln.value?.$refs?.sidebar || ln.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : nr.value?.focus();
    }
    function Tt() {
      const y = In;
      if (In = null, _l(), qt || !y?.isConnected) return;
      const _ = Ti;
      Yi = window.requestAnimationFrame(() => {
        Yi = null, !(_ !== Ti || qt || Pn.value || !y.isConnected) && y.focus();
      });
    }
    function _l() {
      Ti += 1, Yi !== null && (window.cancelAnimationFrame(Yi), Yi = null);
    }
    function ar(y = It) {
      _n.value = !!y?.matches, Pn.value && pn(Oa);
    }
    function Ss(y) {
      y && Je(Number(y.id), { seed: y });
    }
    const Na = /* @__PURE__ */ Fe(null);
    let Cs = null, Dn = 0, Ai = null;
    const wn = /* @__PURE__ */ $t({ loading: !1, error: "" });
    function Cu(y) {
      const _ = s(new FormData(y));
      _.delete("publicationSearch"), _.delete("creatorSearch"), _.delete("yearSearch");
      for (const f of Array.from(_.keys()))
        String(_.get(f) || "").trim() === "" && _.delete(f);
      return _.delete("page"), _.get("view") === "compact" && _.delete("view"), _;
    }
    async function Tu(y, _, f) {
      const B = new URLSearchParams();
      for (const [ze, ft] of Object.entries(P)) {
        const en = String(ft || "").trim();
        ze !== y && en !== "" && !(ze === "sort" && en === "title") && !(ze === "view" && en === "compact") && B.set(ze, en);
      }
      B.set(`${y}Search`, _);
      const ge = new AbortController();
      y === "creator" ? fe = ge : lt = ge;
      const ke = y === "creator" ? Qe.value : rt.value;
      try {
        const ze = await fetch(`${ke}?${B}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ge.signal });
        if (!ze.ok) throw new Error(`${y} suggestions request failed: ${ze.status}`);
        const ft = await ze.json(), en = y === "creator" ? Te : St, ki = y === "creator" ? $.value : ve.value;
        f === en && ki.trim() === _ && (y === "creator" ? re.value = Array.isArray(ft.creators) ? ft.creators : [] : Ee.value = Array.isArray(ft.years) ? ft.years : []);
      } catch (ze) {
        ze?.name !== "AbortError" && (y === "creator" && f === Te && (re.value = null), y === "year" && f === St && (Ee.value = null));
      }
    }
    function Jp(y, _) {
      return Tu("creator", y, _);
    }
    function Qp(y, _) {
      return Tu("year", y, _);
    }
    async function ev(y, _) {
      const f = new URLSearchParams();
      for (const [ge, ke] of Object.entries(P)) {
        const ze = String(ke || "").trim();
        ge !== "publication" && ze !== "" && !(ge === "sort" && ze === "title") && !(ge === "view" && ze === "compact") && f.set(ge, ze);
      }
      f.set("publicationSearch", y);
      const B = new AbortController();
      te = B;
      try {
        const ge = await fetch(`${Pe.value}?${f}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: B.signal
        });
        if (!ge.ok) throw new Error(`Publication suggestions request failed: ${ge.status}`);
        const ke = await ge.json();
        _ === D && ce.value.trim() === y && (ae.value = Array.isArray(ke.publications) ? ke.publications : []);
      } catch (ge) {
        ge?.name !== "AbortError" && _ === D && (ae.value = null);
      } finally {
        _ === D && (te = null);
      }
    }
    function tv(y) {
      u.splice(0, u.length, ...(y.items || []).map((_) => ({ ..._ }))), ms();
      for (const _ of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "subjects", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "creatorSuggestionsUrl", "yearSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(y, _) && (d[_] = y[_]);
      Object.assign(P, at, y.activeFilters || {});
    }
    async function $n(y, _ = null) {
      const f = y?.currentTarget?.tagName === "FORM" ? y.currentTarget : y?.currentTarget?.form;
      if (!f && !_?.params) return;
      const B = s(_?.params ?? Cu(f));
      if (j.value || be.value) {
        rr(B, N.value);
        return;
      }
      const ge = B.toString(), ke = ge ? `?${ge}` : "", ze = _?.generation ?? ++Dn, ft = o(B), en = _?.historyMode ?? (ft ? "push" : "replace"), ki = _?.historyTraversal === !0;
      if (ze !== Dn) return;
      _ === null && Ai?.abort();
      const xa = new AbortController();
      Ai = xa, wn.loading = !0, wn.error = "";
      try {
        const Mn = await fetch(Le.value + ke, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: xa.signal
        });
        if (ze !== Dn) return;
        if (!Mn.ok) {
          ki ? rr(B) : ft ? wn.error = m("library", "Could not load this review queue. Try again.") : rr(B);
          return;
        }
        const wv = await Mn.json();
        if (ze !== Dn) return;
        tv(wv), en !== "none" && (history[en === "push" ? "pushState" : "replaceState"]({}, "", ge ? `?${ge}` : window.location.pathname), Pn.value && bt({ historyMode: "none" }));
      } catch (Mn) {
        ze === Dn && Mn?.name !== "AbortError" && (ki ? rr(B) : ft ? wn.error = m("library", "Could not load this review queue. Try again.") : rr(B));
      } finally {
        ze === Dn && (Ai = null, wn.loading = !1);
      }
    }
    function Eu() {
      Ai?.abort();
      const y = new URLSearchParams(window.location.search), _ = Ae();
      y.has("item") && _ === null && (y.delete("item"), history.replaceState({}, "", `${window.location.pathname}${y.toString() ? `?${y}` : ""}${window.location.hash}`)), _ === null ? bt({ historyMode: "none" }) : Je(_, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === _) || null }), y.delete("item"), $n(null, {
        params: s(y),
        generation: ++Dn,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function rr(y, _ = window.location.pathname) {
      const f = document.createElement("form");
      f.method = "get", f.action = _, f.hidden = !0;
      for (const [B, ge] of y.entries()) {
        const ke = document.createElement("input");
        ke.type = "hidden", ke.name = B, ke.value = ge, f.appendChild(ke);
      }
      document.body.appendChild(f), f.submit(), f.remove();
    }
    function Au(y, _ = null, f = null) {
      if (_ === null) {
        $n(y);
        return;
      }
      $n({ currentTarget: y }, { params: _, generation: f });
    }
    function nv(y) {
      const _ = y?.currentTarget?.form;
      if (!_) return;
      window.clearTimeout(Cs), window.clearTimeout(J), D += 1, te?.abort(), te = null;
      const f = ++Dn, B = Cu(_);
      Ai?.abort(), Ai = null, Cs = window.setTimeout(() => Au(_, B, f), 350);
    }
    async function iv(y, _ = ce.value) {
      P.publication = String(_ || "").trim(), ce.value = P.publication, X.value = !1, await pn(), $n({ currentTarget: y });
    }
    function av(y, _) {
      iv(_.currentTarget.form, y);
    }
    async function rv(y) {
      P.publication = String(ce.value || "").trim(), P.creator = String($.value || "").trim(), P.year = String(ve.value || "").trim(), X.value = !1, Y.value = !1, He.value = !1, await pn(), $n({ currentTarget: y });
    }
    async function ku(y, _, f) {
      P[_] = String(f || "").trim(), _ === "creator" ? ($.value = P.creator, Y.value = !1) : (ve.value = P.year, He.value = !1), await pn(), $n({ currentTarget: y });
    }
    function sv(y) {
      rv(y.currentTarget);
    }
    function ov(y, _) {
      ku(_.currentTarget.form, "creator", y);
    }
    function lv(y, _) {
      ku(_.currentTarget.form, "year", y);
    }
    function wl(y) {
      const _ = new URLSearchParams();
      for (const [B, ge] of Object.entries(P)) {
        const ke = String(ge || "").trim();
        ke !== "" && B !== y && !(B === "sort" && ke === "title") && !(B === "view" && ke === "compact") && _.set(B, ke);
      }
      const f = _.toString();
      return f ? `?${f}` : "?";
    }
    function cv(y) {
      const _ = new URLSearchParams(wl(y));
      P[y] = "", $n(null, {
        params: _,
        generation: ++Dn
      });
    }
    function uv() {
      return wl("q");
    }
    const Ou = q(() => d.smartViewCounts || {}), Nu = q(() => {
      const y = {};
      for (const [_, f] of Object.entries(P)) {
        const B = String(f || "").trim();
        B !== "" && !(_ === "sort" && B === "title") && (y[_] = B);
      }
      return y;
    }), dv = q(() => JSON.stringify(Nu.value)), Sl = q(() => Object.keys(Nu.value).length > 0);
    function Ts(y) {
      if (!Ja.includes(y)) return;
      P.view = y;
      const _ = s(window.location.search);
      y === "compact" ? _.delete("view") : _.set("view", y), _.delete("page"), history.replaceState({}, "", _.toString() ? `?${_.toString()}` : window.location.pathname);
    }
    function fv(y) {
      const _ = s(window.location.search);
      for (const B of Object.keys(Zt))
        _.delete(B);
      _.delete("page");
      for (const [B, ge] of Object.entries(y))
        String(ge || "").trim() !== "" && _.set(B, String(ge));
      const f = _.toString();
      return f ? `?${f}` : "?";
    }
    function hv(y) {
      return fv(y || {});
    }
    function pv(y) {
      return Za.value.replace("__COLLECTION_ID__", encodeURIComponent(String(y || "0")));
    }
    function sr(y) {
      return String(y || "").toUpperCase();
    }
    function or(y) {
      return Ta[y.id] || "loading";
    }
    function vv(y) {
      Ta[y.id] = "loaded";
    }
    function gv(y) {
      Ta[y.id] = "error";
    }
    function Cl(y) {
      const _ = String(y?.publication || "").trim(), f = String(y?.publicationDate || "").trim();
      return _ && f ? `${_} · ${f}` : _ || f ? _ || f : [y?.publicationType, sr(y?.extension)].filter(Boolean).join(" · ");
    }
    function mv(y) {
      const _ = String(y?.tagName || "").toLowerCase();
      return y?.isContentEditable || ["input", "select", "textarea", "button"].includes(_);
    }
    function bv(y) {
      y.key !== "/" || y.metaKey || y.ctrlKey || y.altKey || y.shiftKey || mv(y.target) || (y.preventDefault(), Na.value?.focus(), Na.value?.select?.());
    }
    function yv(y) {
      y.key !== "Escape" || document.activeElement !== Na.value || P.q === "" || (y.preventDefault(), P.q = "", Na.value.value = "", window.clearTimeout(Cs), Au({ currentTarget: Na.value }));
    }
    function _v(y) {
      if (!Pn.value || y.metaKey || y.ctrlKey || y.altKey)
        return !1;
      if (y.key === "Escape")
        return y.preventDefault(), bt(), !0;
      if (y.key === "Tab" && _n.value) {
        if (ln.value?.focusTrap) return !1;
        const _ = ln.value?.$refs?.sidebar || ln.value?.$el || ln.value, f = [..._?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((ke) => !ke.hidden && ke.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const B = f[0], ge = f[f.length - 1];
        if (y.shiftKey && (document.activeElement === B || !_.contains(document.activeElement)))
          return y.preventDefault(), ge.focus(), !0;
        if (!y.shiftKey && (document.activeElement === ge || !_.contains(document.activeElement)))
          return y.preventDefault(), B.focus(), !0;
      }
      return y.key === "ArrowLeft" && Xi.value ? (y.preventDefault(), Ss(Xi.value), !0) : y.key === "ArrowRight" && Zi.value ? (y.preventDefault(), Ss(Zi.value), !0) : !1;
    }
    function xu(y) {
      _v(y) || (bv(y), yv(y));
    }
    ji(() => {
      window.addEventListener("keydown", xu), window.addEventListener("popstate", Eu), It = window.matchMedia?.("(max-width: 1023px)") || null, ar(), It?.addEventListener ? It.addEventListener("change", ar) : It?.addListener?.(ar);
      const y = new URLSearchParams(window.location.search), _ = Ae();
      y.has("item") && _ === null ? (y.delete("item"), history.replaceState({}, "", `${window.location.pathname}${y.toString() ? `?${y}` : ""}${window.location.hash}`)) : _ !== null && Je(_, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === _) || null });
    }), qa(() => {
      qt = !0, _l(), window.removeEventListener("keydown", xu), window.removeEventListener("popstate", Eu), window.clearTimeout(Cs), window.clearTimeout(J), window.clearTimeout(he), window.clearTimeout(ot), te?.abort(), fe?.abort(), lt?.abort(), Dn += 1, Ai?.abort(), Ai = null, se += 1, ue?.abort(), ue = null, It?.removeEventListener ? It.removeEventListener("change", ar) : It?.removeListener?.(ar), It = null, In = null;
    });
    const lr = /* @__PURE__ */ $t({}), cr = /* @__PURE__ */ $t({});
    async function Lu(y, _) {
      const f = _?.currentTarget?.closest?.("form") || _?.currentTarget;
      if (!f || !y?.starUrl || lr[y.id]) return;
      const B = !!y.starred;
      lr[y.id] = !0, cr[y.id] = "", y.starred = !B;
      try {
        (await fetch(y.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (y.starred = B, cr[y.id] = m("library", "Could not update star. Try again."));
      } catch {
        y.starred = B, cr[y.id] = m("library", "Could not update star. Try again.");
      } finally {
        lr[y.id] = !1;
      }
    }
    return (y, _) => (b(), De(g(fC), { "app-name": "library" }, {
      default: Oe(() => [
        _e(g(W_), {
          "aria-label": g(m)("library", "Library navigation")
        }, {
          list: Oe(() => [
            _e(g(mp), null, {
              default: Oe(() => [
                (b(!0), T(de, null, Me(ye.value, (f) => (b(), De(g(yf), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                _e(g(yf), {
                  active: V.value,
                  href: W.value,
                  name: Q.value > 0 ? `${g(m)("library", "Review")} (${Q.value})` : g(m)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Oe(() => [
            c("section", EC, [
              c("h2", AC, p(g(m)("library", "Filters")), 1),
              c("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": g(m)("library", "Catalogue search and filters"),
                onSubmit: Ke(sv, ["prevent"])
              }, [
                (b(!0), T(de, null, Me(ml.value, (f) => (b(), T("input", {
                  key: `sidebar-${f.key}`,
                  type: "hidden",
                  name: f.key,
                  value: f.value
                }, null, 8, OC))), 128)),
                P.sort && P.sort !== "title" ? (b(), T("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: P.sort
                }, null, 8, NC)) : H("", !0),
                P.view && P.view !== "compact" ? (b(), T("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: P.view
                }, null, 8, xC)) : H("", !0),
                c("label", {
                  class: "library-quick-filter-search",
                  title: g(m)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                }, [
                  c("span", null, [
                    Ne(p(g(m)("library", "Search")) + " ", 1),
                    _[34] || (_[34] = c("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  We(c("input", {
                    ref_key: "quickSearchInput",
                    ref: Na,
                    "onUpdate:modelValue": _[0] || (_[0] = (f) => P.q = f),
                    "data-library-quick-search": "",
                    type: "search",
                    name: "q",
                    placeholder: g(m)("library", "Title, creator, description, filename or folder"),
                    onInput: nv
                  }, null, 40, RC), [
                    [Sn, P.q]
                  ])
                ], 8, LC),
                c("label", null, [
                  Ne(p(g(m)("library", "Type")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": _[1] || (_[1] = (f) => P.type = f),
                    name: "type"
                  }, [
                    c("option", IC, p(g(m)("library", "All types")), 1),
                    (b(!0), T(de, null, Me(O.value, (f) => (b(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, PC))), 128))
                  ], 512), [
                    [zn, P.type]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(m)("library", "Publisher")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": _[2] || (_[2] = (f) => P.publisher = f),
                    name: "publisher"
                  }, [
                    c("option", DC, p(g(m)("library", "All publishers")), 1),
                    (b(!0), T(de, null, Me(A.value, (f) => (b(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, $C))), 128))
                  ], 512), [
                    [zn, P.publisher]
                  ])
                ]),
                c("div", MC, [
                  c("label", FC, p(g(m)("library", "Series / periodical")), 1),
                  We(c("input", {
                    id: "library-publication-search",
                    "onUpdate:modelValue": _[3] || (_[3] = (f) => ce.value = f),
                    type: "search",
                    name: "publicationSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search series and periodicals"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publication-suggestions",
                    "aria-expanded": X.value && me.value.length > 0 ? "true" : "false",
                    onFocus: _[4] || (_[4] = (f) => X.value = !0),
                    onKeydown: _[5] || (_[5] = kt((f) => X.value = !1, ["escape"]))
                  }, null, 40, zC), [
                    [Sn, ce.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "publication",
                    value: P.publication
                  }, null, 8, UC),
                  X.value && me.value.length > 0 ? (b(), T("ul", BC, [
                    (b(!0), T(de, null, Me(me.value, (f) => (b(), T("li", {
                      key: f,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-publication-suggestion",
                        onMousedown: _[6] || (_[6] = Ke(() => {
                        }, ["prevent"])),
                        onClick: (B) => av(f, B)
                      }, p(f), 41, HC)
                    ]))), 128))
                  ])) : H("", !0),
                  c("button", jC, p(g(m)("library", "Apply series")), 1)
                ]),
                c("div", VC, [
                  c("label", GC, p(g(m)("library", "Publication year")), 1),
                  We(c("input", {
                    id: "library-year-search",
                    "onUpdate:modelValue": _[7] || (_[7] = (f) => ve.value = f),
                    type: "search",
                    name: "yearSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search publication years"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-year-suggestions",
                    "aria-expanded": He.value && it.value.length > 0 ? "true" : "false",
                    onFocus: _[8] || (_[8] = (f) => He.value = !0),
                    onKeydown: _[9] || (_[9] = kt((f) => He.value = !1, ["escape"]))
                  }, null, 40, KC), [
                    [Sn, ve.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "year",
                    value: P.year
                  }, null, 8, WC),
                  He.value && it.value.length > 0 ? (b(), T("ul", qC, [
                    (b(!0), T(de, null, Me(it.value, (f) => (b(), T("li", {
                      key: f,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-year-suggestion",
                        onMousedown: _[10] || (_[10] = Ke(() => {
                        }, ["prevent"])),
                        onClick: (B) => lv(f, B)
                      }, p(f), 41, YC)
                    ]))), 128))
                  ])) : H("", !0),
                  c("button", XC, p(g(m)("library", "Apply year")), 1)
                ]),
                c("div", ZC, [
                  c("label", JC, p(g(m)("library", "Creator")), 1),
                  We(c("input", {
                    id: "library-creator-search",
                    "onUpdate:modelValue": _[11] || (_[11] = (f) => $.value = f),
                    type: "search",
                    name: "creatorSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search creators"),
                    title: g(m)("library", "Exact full-field creator matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-creator-suggestions",
                    "aria-expanded": Y.value && ie.value.length > 0 ? "true" : "false",
                    onFocus: _[12] || (_[12] = (f) => Y.value = !0),
                    onKeydown: _[13] || (_[13] = kt((f) => Y.value = !1, ["escape"]))
                  }, null, 40, QC), [
                    [Sn, $.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "creator",
                    value: P.creator
                  }, null, 8, eT),
                  Y.value && ie.value.length > 0 ? (b(), T("ul", tT, [
                    (b(!0), T(de, null, Me(ie.value, (f) => (b(), T("li", {
                      key: f,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-creator-suggestion",
                        onMousedown: _[14] || (_[14] = Ke(() => {
                        }, ["prevent"])),
                        onClick: (B) => ov(f, B)
                      }, p(f), 41, nT)
                    ]))), 128))
                  ])) : H("", !0),
                  c("button", iT, p(g(m)("library", "Apply creator")), 1)
                ]),
                c("label", null, [
                  Ne(p(g(m)("library", "Nextcloud tag")), 1),
                  We(c("input", {
                    "onUpdate:modelValue": _[15] || (_[15] = (f) => P.tag = f),
                    type: "text",
                    name: "tag",
                    placeholder: g(m)("library", "photography")
                  }, null, 8, aT), [
                    [Sn, P.tag]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(m)("library", "Format")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": _[16] || (_[16] = (f) => P.format = f),
                    name: "format"
                  }, [
                    c("option", rT, p(g(m)("library", "All formats")), 1),
                    (b(!0), T(de, null, Me(E.value, (f) => (b(), T("option", {
                      key: f,
                      value: f
                    }, p(sr(f)), 9, sT))), 128))
                  ], 512), [
                    [zn, P.format]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(m)("library", "Shelf")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": _[17] || (_[17] = (f) => P.shelf = f),
                    name: "shelf"
                  }, [
                    c("option", oT, p(g(m)("library", "All shelves")), 1),
                    (b(!0), T(de, null, Me(S.value, (f) => (b(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, lT))), 128))
                  ], 512), [
                    [zn, P.shelf]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(m)("library", "Scan status")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": _[18] || (_[18] = (f) => P.status = f),
                    name: "status"
                  }, [
                    c("option", cT, p(g(m)("library", "All scan statuses")), 1),
                    (b(!0), T(de, null, Me(M.value, (f) => (b(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, uT))), 128))
                  ], 512), [
                    [zn, P.status]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(m)("library", "Workflow status")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": _[19] || (_[19] = (f) => P.workflowStatus = f),
                    name: "workflowStatus"
                  }, [
                    c("option", dT, p(g(m)("library", "All workflow statuses")), 1),
                    (b(!0), T(de, null, Me(G.value, (f) => (b(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, fT))), 128))
                  ], 512), [
                    [zn, P.workflowStatus]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(m)("library", "Subject")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": _[20] || (_[20] = (f) => P.subject = f),
                    name: "subject"
                  }, [
                    c("option", hT, p(g(m)("library", "All subjects")), 1),
                    (b(!0), T(de, null, Me(F.value, (f) => (b(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, pT))), 128))
                  ], 512), [
                    [zn, P.subject]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(m)("library", "Classification")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": _[21] || (_[21] = (f) => P.classification = f),
                    name: "classification"
                  }, [
                    c("option", vT, p(g(m)("library", "All classifications")), 1),
                    (b(!0), T(de, null, Me(le.value, (f) => (b(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, gT))), 128))
                  ], 512), [
                    [zn, P.classification]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(m)("library", "Suggested updates")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": _[22] || (_[22] = (f) => P.scannerConflicts = f),
                    name: "scannerConflicts"
                  }, [
                    c("option", mT, p(g(m)("library", "All metadata")), 1),
                    c("option", bT, p(g(m)("library", "Suggested updates")), 1)
                  ], 512), [
                    [zn, P.scannerConflicts]
                  ])
                ]),
                c("button", yT, p(g(m)("library", "Apply filters")), 1),
                c("a", _T, p(g(m)("library", "Clear")), 1)
              ], 40, kC)
            ]),
            c("a", {
              class: "library-navigation-settings-link",
              href: k.value
            }, [
              _[35] || (_[35] = c("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              c("span", null, p(g(m)("library", "Settings")), 1)
            ], 8, wT)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        _e(g(c_), null, {
          default: Oe(() => [
            c("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: d.language || "en",
              dir: d.direction || "ltr",
              tabindex: "-1"
            }, [
              V.value ? (b(), T("section", CT, [
                c("header", TT, [
                  c("p", ET, p(g(m)("library", "Metadata cleanup")), 1),
                  c("h2", AT, p(g(m)("library", "Review")), 1),
                  c("p", null, p(g(m)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                c("nav", {
                  class: "library-review-queues",
                  "aria-label": g(m)("library", "Review queues")
                }, [
                  (b(!0), T(de, null, Me(w.value, (f) => (b(), T("a", {
                    key: f.key,
                    class: Ce(["library-review-queue-link", { active: f.active }]),
                    href: f.href,
                    "aria-current": f.active ? "page" : void 0
                  }, [
                    c("span", null, p(f.label), 1),
                    c("b", null, p(Number(Ou.value[f.countKey] || 0)), 1)
                  ], 10, OT))), 128))
                ], 8, kT),
                c("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(m)("library", "Filter current review queue"),
                  onSubmit: Ke($n, ["prevent"])
                }, [
                  (b(!0), T(de, null, Me(bl.value, (f) => (b(), T("input", {
                    key: `review-${f.key}`,
                    type: "hidden",
                    name: f.key,
                    value: f.value
                  }, null, 8, xT))), 128)),
                  c("label", null, [
                    Ne(p(g(m)("library", "Search within this queue")), 1),
                    We(c("input", {
                      "onUpdate:modelValue": _[23] || (_[23] = (f) => P.q = f),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [Sn, P.q]
                    ])
                  ]),
                  c("button", LT, p(g(m)("library", "Apply")), 1)
                ], 40, NT),
                c("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": wn.loading ? "true" : "false"
                }, [
                  wn.loading ? (b(), T("span", IT, p(g(m)("library", "Loading review queue…")), 1)) : H("", !0)
                ], 8, RT),
                wn.error ? (b(), T("p", PT, p(wn.error), 1)) : H("", !0),
                Z.value.enabled ? (b(), T("section", DT, [
                  c("div", $T, [
                    c("p", MT, p(g(m)("library", "Metadata review workbench")), 1),
                    c("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(m)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, p(g(m)("library", "Review next suggestion")), 9, FT)
                  ]),
                  Z.value.item ? (b(), T("article", zT, [
                    c("header", null, [
                      c("strong", null, [
                        c("bdi", UT, p(Z.value.item.title), 1)
                      ]),
                      c("span", BT, [
                        c("bdi", HT, p(Z.value.item.cachedPath), 1)
                      ])
                    ]),
                    c("div", jT, [
                      (b(!0), T(de, null, Me(Z.value.fields, (f) => (b(), T("article", {
                        key: f.field,
                        class: "library-metadata-review-field"
                      }, [
                        c("h4", null, [
                          c("bdi", VT, p(f.field), 1)
                        ]),
                        c("dl", null, [
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Current value")), 1),
                            c("dd", null, [
                              c("bdi", GT, p(f.currentValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Suggested value")), 1),
                            c("dd", null, [
                              c("bdi", KT, p(f.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Path-based suggestion")), 1),
                            c("dd", null, [
                              c("bdi", WT, p(f.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Sidecar value")), 1),
                            c("dd", null, [
                              c("bdi", qT, p(f.sidecarValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Source")), 1),
                            c("dd", null, [
                              c("bdi", YT, p(f.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        c("form", {
                          method: "post",
                          action: Z.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: pe.value
                          }, null, 8, ZT),
                          c("input", {
                            type: "hidden",
                            name: "field",
                            value: f.field
                          }, null, 8, JT),
                          _[36] || (_[36] = c("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          c("button", QT, p(g(m)("library", "Use suggested value")), 1)
                        ], 8, XT)
                      ]))), 128))
                    ]),
                    c("footer", eE, [
                      c("a", {
                        class: "button secondary",
                        href: Z.value.item.detailsUrl
                      }, p(g(m)("library", "Maintenance")), 9, tE),
                      c("a", {
                        class: "button secondary",
                        href: Z.value.skipUrl
                      }, p(g(m)("library", "Skip to next suggestion")), 9, nE)
                    ])
                  ])) : H("", !0)
                ])) : H("", !0),
                h.value.length === 0 && !wn.loading && !wn.error ? (b(), T("div", iE, [
                  c("h3", null, p(g(m)("library", "This review queue is clear")), 1),
                  c("p", null, p(g(m)("library", "Choose another queue or return to the catalogue.")), 1),
                  c("a", {
                    class: "button primary",
                    href: N.value
                  }, p(g(m)("library", "Back to Library")), 9, aE)
                ])) : (b(), T("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(m)("library", "Review results")
                }, [
                  (b(!0), T(de, null, Me(h.value, (f) => (b(), T("article", {
                    key: f.id,
                    class: "library-review-result-card"
                  }, [
                    c("div", null, [
                      c("h3", null, [
                        c("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (B) => nt(f, B)
                        }, [
                          c("bdi", oE, p(f.title), 1)
                        ], 8, sE)
                      ]),
                      f.creators ? (b(), T("p", lE, [
                        c("bdi", cE, p(f.creators), 1)
                      ])) : H("", !0),
                      f.scanError ? (b(), T("p", uE, [
                        c("bdi", dE, p(f.scanError), 1)
                      ])) : H("", !0)
                    ]),
                    c("p", null, [
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (B) => nt(f, B)
                      }, p(g(m)("library", "Details")), 9, fE),
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(m)("library", "Open")), 9, hE)
                    ])
                  ]))), 128))
                ], 8, rE)),
                h.value.length > 0 ? (b(), T("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(m)("library", "Review pagination")
                }, [
                  ne.value.previousUrl ? (b(), T("a", {
                    key: 0,
                    href: ne.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, vE)) : (b(), T("span", gE, p(g(m)("library", "Previous")), 1)),
                  c("span", null, [
                    Ne(p(g(m)("library", "Page")) + " " + p(ne.value.page), 1),
                    ne.value.total > 0 ? (b(), T("span", mE, " · " + p(ne.value.from) + "–" + p(ne.value.to), 1)) : H("", !0)
                  ]),
                  ne.value.nextUrl ? (b(), T("a", {
                    key: 2,
                    href: ne.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, bE)) : (b(), T("span", yE, p(g(m)("library", "Next")), 1))
                ], 8, pE)) : H("", !0)
              ])) : j.value ? (b(), T("main", _E, [
                c("header", wE, [
                  c("p", SE, p(g(m)("library", "Your library")), 1),
                  c("h2", CE, p(g(m)("library", "Home")), 1)
                ]),
                c("section", TE, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", EE, p(g(m)("library", "Continue reading")), 1),
                      c("p", AE, p(g(m)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    c("a", {
                      href: `${N.value}?sort=lastOpened`
                    }, p(g(m)("library", "View all")), 9, kE)
                  ]),
                  Si.value.continueReading.length ? (b(), T("div", OE, [
                    (b(!0), T(de, null, Me(Si.value.continueReading, (f) => (b(), T("article", {
                      key: `continue-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (B) => nt(f, B)
                      }, [
                        c("span", xE, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, LE)
                        ])
                      ], 8, NE),
                      c("div", RE, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => nt(f, B)
                          }, [
                            c("bdi", PE, p(f.title), 1)
                          ], 8, IE)
                        ]),
                        f.creators ? (b(), T("p", DE, [
                          c("bdi", $E, p(f.creators), 1)
                        ])) : H("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(m)("library", "Open")), 9, ME)
                      ])
                    ]))), 128))
                  ])) : (b(), T("p", FE, p(g(m)("library", "Publications you open will appear here.")), 1))
                ]),
                c("section", zE, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", UE, p(g(m)("library", "Recently added")), 1),
                      c("p", BE, p(g(m)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    c("a", {
                      href: `${N.value}?sort=recent`
                    }, p(g(m)("library", "View all")), 9, HE)
                  ]),
                  Si.value.recentlyAdded.length ? (b(), T("div", jE, [
                    (b(!0), T(de, null, Me(Si.value.recentlyAdded, (f) => (b(), T("article", {
                      key: `recent-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (B) => nt(f, B)
                      }, [
                        c("span", GE, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, KE)
                        ])
                      ], 8, VE),
                      c("div", WE, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => nt(f, B)
                          }, [
                            c("bdi", YE, p(f.title), 1)
                          ], 8, qE)
                        ]),
                        f.creators ? (b(), T("p", XE, [
                          c("bdi", ZE, p(f.creators), 1)
                        ])) : H("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(m)("library", "Open")), 9, JE)
                      ])
                    ]))), 128))
                  ])) : (b(), T("p", QE, p(g(m)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                c("section", eA, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", tA, p(g(m)("library", "Shelves")), 1),
                      c("p", nA, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    c("a", { href: z.value }, p(g(m)("library", "View all")), 9, iA)
                  ]),
                  Qa.value.length ? (b(), T("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(m)("library", "Shelves")
                  }, [
                    (b(!0), T(de, null, Me(Qa.value, (f) => (b(), T("a", {
                      key: f.shelf,
                      href: f.url
                    }, [
                      c("strong", null, [
                        c("bdi", sA, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g(Bn)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ], 8, rA))), 128))
                  ], 8, aA)) : (b(), T("p", oA, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(tr.value.count || 0) > 0 ? (b(), T("aside", lA, [
                  c("div", null, [
                    c("h3", cA, p(g(m)("library", "Needs attention")), 1),
                    c("p", uA, p(g(Bn)("library", "%n publication needs better details.", "%n publications need better details.", Number(tr.value.count || 0))), 1)
                  ]),
                  c("a", {
                    class: "button tertiary",
                    href: tr.value.url
                  }, p(g(m)("library", "Review")), 9, dA)
                ])) : H("", !0)
              ])) : be.value ? (b(), T("main", fA, [
                c("header", hA, [
                  c("p", pA, p(g(m)("library", "Your library")), 1),
                  c("h2", vA, p(g(m)("library", "Shelves")), 1),
                  c("p", gA, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                er.value.length ? (b(), T("nav", {
                  key: 0,
                  "aria-label": g(m)("library", "Shelves")
                }, [
                  c("ul", bA, [
                    (b(!0), T(de, null, Me(er.value, (f) => (b(), De(TC, {
                      key: f.id,
                      node: f,
                      "children-url": $e.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, mA)) : (b(), T("section", yA, [
                  c("h3", null, p(g(m)("library", "Shelves")), 1),
                  c("p", _A, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  c("p", wA, [
                    c("a", {
                      class: "button primary",
                      href: k.value
                    }, p(g(m)("library", "Add a Library root")), 9, SA),
                    c("a", {
                      class: "button secondary",
                      href: N.value
                    }, p(g(m)("library", "All publications")), 9, CA)
                  ])
                ]))
              ])) : (b(), T("section", TA, [
                c("header", EA, [
                  Nn.value ? (b(), T("p", AA, p(Ya.value), 1)) : H("", !0),
                  c("h2", kA, p(fs.value), 1)
                ]),
                c("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(m)("library", "One catalogue workspace")
                }, [
                  c("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(m)("library", "Catalogue toolbar"),
                    onSubmit: Ke($n, ["prevent"])
                  }, [
                    (b(!0), T(de, null, Me(st.value, (f) => (b(), T("input", {
                      key: f.key,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, xA))), 128)),
                    c("label", LA, [
                      Ne(p(g(m)("library", "Sort")), 1),
                      We(c("select", {
                        "onUpdate:modelValue": _[24] || (_[24] = (f) => P.sort = f),
                        name: "sort",
                        onChange: $n
                      }, [
                        c("option", RA, p(g(m)("library", "Title")), 1),
                        c("option", IA, p(g(m)("library", "Date added")), 1),
                        c("option", PA, p(g(m)("library", "Publication date")), 1),
                        c("option", DA, p(g(m)("library", "Series")), 1),
                        c("option", $A, p(g(m)("library", "Recently opened")), 1),
                        c("option", MA, p(g(m)("library", "Format")), 1)
                      ], 544), [
                        [zn, P.sort]
                      ])
                    ]),
                    c("nav", {
                      class: "library-view-mode-toggle",
                      "data-library-control": "view",
                      "aria-label": g(m)("library", "View")
                    }, [
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "compact",
                        class: Ce({ active: Rt.value === "compact" }),
                        "aria-pressed": Rt.value === "compact" ? "true" : "false",
                        onClick: _[25] || (_[25] = (f) => Ts("compact"))
                      }, p(g(m)("library", "Compact")), 11, zA),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: Ce({ active: Rt.value === "gallery" }),
                        "aria-pressed": Rt.value === "gallery" ? "true" : "false",
                        onClick: _[26] || (_[26] = (f) => Ts("gallery"))
                      }, p(g(m)("library", "Gallery")), 11, UA),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: Ce({ active: Rt.value === "list" }),
                        "aria-pressed": Rt.value === "list" ? "true" : "false",
                        onClick: _[27] || (_[27] = (f) => Ts("list"))
                      }, p(g(m)("library", "List")), 11, BA),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: Ce({ active: Rt.value === "shelf" }),
                        "aria-pressed": Rt.value === "shelf" ? "true" : "false",
                        onClick: _[28] || (_[28] = (f) => Ts("shelf"))
                      }, p(g(m)("library", "Shelf")), 11, HA)
                    ], 8, FA)
                  ], 40, NA),
                  c("section", jA, [
                    c("h3", {
                      title: g(m)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, p(g(m)("library", "Collections")), 9, VA),
                    c("form", {
                      method: "post",
                      action: vs.value,
                      class: "library-saved-collection-save-form",
                      title: Sl.value ? "" : g(m)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: pe.value
                      }, null, 8, KA),
                      c("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: dv.value
                      }, null, 8, WA),
                      c("label", null, [
                        Ne(p(g(m)("library", "Collection name")), 1),
                        c("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(m)("library", "e.g. Bremen photo books"),
                          disabled: !Sl.value,
                          autocomplete: "off"
                        }, null, 8, qA)
                      ]),
                      c("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !Sl.value,
                        title: g(m)("library", "Save current view")
                      }, p(g(m)("library", "Save")), 9, YA)
                    ], 8, GA),
                    ps.value.length > 0 ? (b(), T("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(m)("library", "Saved custom collections")
                    }, [
                      (b(!0), T(de, null, Me(ps.value, (f) => (b(), T("article", {
                        key: f.id,
                        class: "library-saved-collection-card"
                      }, [
                        c("a", {
                          class: "library-saved-collection-link",
                          href: hv(f.filters)
                        }, [
                          c("strong", null, p(f.name), 1),
                          c("span", null, p(g(Bn)("library", "%n item", "%n items", Number(f.count || 0))), 1)
                        ], 8, ZA),
                        c("form", {
                          method: "post",
                          action: pv(f.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: pe.value
                          }, null, 8, QA),
                          c("button", e2, p(g(m)("library", "Delete")), 1)
                        ], 8, JA)
                      ]))), 128))
                    ], 8, XA)) : H("", !0)
                  ]),
                  Jt.value.length > 0 ? (b(), T("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(m)("library", "Batch actions for selected publications")
                  }, [
                    c("summary", n2, [
                      _[37] || (_[37] = c("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Batch actions for selected publications")
                      }, p(g(m)("library", "Batch actions")), 9, i2),
                      c("small", a2, p(g(m)("library", "Batch actions for selected publications")), 1),
                      c("b", r2, p(g(Bn)("library", "%n publication selected", "%n publications selected", Jt.value.length)), 1)
                    ]),
                    c("p", s2, p(g(Bn)("library", "%n publication selected", "%n publications selected", Jt.value.length)), 1),
                    c("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: Aa
                    }, [
                      c("form", {
                        method: "post",
                        action: Lt.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: pe.value
                        }, null, 8, l2),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Add tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, c2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(m)("library", "Applies only to the selected publications.")
                        }, p(g(m)("library", "Apply")), 9, u2)
                      ], 8, o2),
                      c("form", {
                        method: "post",
                        action: Wt.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: pe.value
                        }, null, 8, f2),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Remove tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, h2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Removes the tag only from the selected publications.")
                        }, p(g(m)("library", "Remove")), 9, p2)
                      ], 8, d2),
                      c("form", {
                        method: "post",
                        action: Yn.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: pe.value
                        }, null, 8, g2),
                        (b(!0), T(de, null, Me(yn.value, (f) => (b(), T("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, m2))), 128)),
                        _[38] || (_[38] = c("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Reset metadata")), 9, b2)
                      ], 8, v2),
                      c("form", {
                        method: "post",
                        action: ut.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: pe.value
                        }, null, 8, _2),
                        (b(!0), T(de, null, Me(yn.value, (f) => (b(), T("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, w2))), 128)),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Field")), 1),
                          c("select", S2, [
                            c("option", C2, p(g(m)("library", "Publication type")), 1),
                            c("option", T2, p(g(m)("library", "Subtitle")), 1),
                            c("option", E2, p(g(m)("library", "Creators")), 1),
                            c("option", A2, p(g(m)("library", "Series / periodical")), 1),
                            c("option", k2, p(g(m)("library", "Publication date")), 1),
                            c("option", O2, p(g(m)("library", "Language")), 1),
                            c("option", N2, p(g(m)("library", "Publisher")), 1),
                            c("option", x2, p(g(m)("library", "Subjects")), 1),
                            c("option", L2, p(g(m)("library", "Classifications")), 1)
                          ])
                        ]),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Value")), 1),
                          c("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(m)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, R2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Preview first, then apply from the review page.")
                        }, p(g(m)("library", "Preview edit")), 9, I2)
                      ], 8, y2),
                      c("form", {
                        method: "post",
                        action: jt.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: pe.value
                        }, null, 8, D2),
                        (b(!0), T(de, null, Me(yn.value, (f) => (b(), T("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, $2))), 128)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Fresh covers")), 9, M2)
                      ], 8, P2)
                    ], 32)
                  ], 8, t2)) : H("", !0)
                ], 8, OA),
                Sa.value ? (b(), T("p", F2, p(Sa.value), 1)) : H("", !0),
                Ca.value ? (b(), T("p", z2, p(Ca.value), 1)) : H("", !0),
                Jn.value ? (b(), T("p", U2, p(Jn.value), 1)) : H("", !0),
                Nn.value ? (b(), T("section", B2, [
                  c("p", H2, p(Ya.value), 1),
                  c("h3", {
                    id: "library-discovery-heading",
                    title: Wi.value ? g(m)("library", "Items by this creator, sorted by publication context when available.") : Ki.value ? g(m)("library", "Items from this publication year, sorted by publication date when available.") : g(m)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, p(Zn.value), 9, j2),
                  c("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(m)("library", "Discovery summary")
                  }, [
                    c("span", null, p(g(Bn)("library", "%n item", "%n items", ne.value.total)), 1),
                    R.value?.earliestYear && R.value?.latestYear ? (b(), T("span", G2, p(R.value.earliestYear) + "–" + p(R.value.latestYear), 1)) : H("", !0),
                    R.value?.datedCount ? (b(), T("span", K2, p(R.value.datedCount) + " " + p(g(m)("library", "dated")), 1)) : H("", !0),
                    R.value?.undatedCount > 0 ? (b(), T("span", W2, p(R.value.undatedCount) + " " + p(g(m)("library", "undated")), 1)) : H("", !0)
                  ], 8, V2),
                  Xn.value && R.value ? (b(), T("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(m)("library", "Publication issue/date context")
                  }, [
                    c("strong", null, p(g(m)("library", "Publication contents")), 1),
                    c("span", null, p(g(Bn)("library", "%n item", "%n items", R.value.itemCount)), 1),
                    R.value.earliestYear && R.value.latestYear ? (b(), T("span", Y2, p(R.value.earliestYear) + "–" + p(R.value.latestYear), 1)) : H("", !0),
                    c("span", null, p(R.value.datedCount) + " " + p(g(m)("library", "with issue/date coverage")), 1),
                    R.value.undatedCount > 0 ? (b(), T("span", X2, p(R.value.undatedCount) + " " + p(g(m)("library", "without dates yet")), 1)) : H("", !0),
                    c("span", null, p(g(m)("library", "read-only grouping")), 1)
                  ], 8, q2)) : H("", !0),
                  Xn.value && R.value?.issueGroups?.length ? (b(), T("section", Z2, [
                    c("div", null, [
                      c("p", J2, p(g(m)("library", "Issue order")), 1),
                      c("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(m)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, p(g(m)("library", "Read-only issue/date grouping")), 9, Q2)
                    ]),
                    c("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(m)("library", "Visual issue strip")
                    }, [
                      (b(!0), T(de, null, Me(R.value.issueGroups, (f) => (b(), T("a", {
                        key: `strip-${f.label}`,
                        class: "library-issue-strip-card",
                        href: f.items?.[0]?.detailsUrl || "#"
                      }, [
                        c("span", null, p(f.label), 1),
                        c("strong", null, p(f.items?.[0]?.issueLabel || g(m)("library", "Issue")), 1),
                        c("small", null, p(g(Bn)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                      ], 8, tk))), 128))
                    ], 8, ek),
                    R.value.gapRanges?.length ? (b(), T("p", nk, p(g(m)("library", "Gap")) + ": " + p(R.value.gapRanges.join(", ")), 1)) : H("", !0),
                    (b(!0), T(de, null, Me(R.value.issueGroups, (f) => (b(), T("div", {
                      key: f.label,
                      class: "library-publication-issue-group"
                    }, [
                      c("h5", null, p(f.label), 1),
                      c("ol", null, [
                        (b(!0), T(de, null, Me(f.items, (B, ge) => (b(), T("li", {
                          key: B.itemId
                        }, [
                          c("span", ik, p(B.issueLabel), 1),
                          c("a", {
                            href: B.detailsUrl || "#"
                          }, p(B.title), 9, ak),
                          c("small", null, [
                            Ne(p(B.publicationType), 1),
                            B.publicationDate ? (b(), T(de, { key: 0 }, [
                              Ne(" · " + p(B.publicationDate), 1)
                            ], 64)) : H("", !0)
                          ]),
                          c("small", rk, [
                            ge > 0 ? (b(), T(de, { key: 0 }, [
                              Ne(p(g(m)("library", "Previous issue")), 1)
                            ], 64)) : H("", !0),
                            ge > 0 && ge < f.items.length - 1 ? (b(), T(de, { key: 1 }, [
                              Ne(" · ")
                            ], 64)) : H("", !0),
                            ge < f.items.length - 1 ? (b(), T(de, { key: 2 }, [
                              Ne(p(g(m)("library", "Next issue")), 1)
                            ], 64)) : H("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    R.value.unknownIssueItems?.length ? (b(), T("details", sk, [
                      c("summary", {
                        title: g(m)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, p(g(m)("library", "Unknown issue/date")) + " · " + p(R.value.unknownIssueItems.length), 9, ok)
                    ])) : H("", !0)
                  ])) : H("", !0),
                  c("p", null, [
                    c("a", {
                      href: N.value,
                      class: "button secondary library-discovery-back-link"
                    }, p(g(m)("library", "Back to full catalogue")), 9, lk)
                  ])
                ])) : H("", !0),
                c("div", ck, [
                  c("p", uk, [
                    Ne(p(g(m)("library", "Showing")) + " " + p(ne.value.from) + "–" + p(ne.value.to) + " " + p(g(m)("library", "of")) + " " + p(ne.value.total) + " " + p(g(m)("library", "catalogue items")), 1),
                    xn.value.length > 0 ? (b(), T("span", dk, [
                      _[39] || (_[39] = Ne(" · ", -1)),
                      c("a", fk, p(g(m)("library", "Clear all filters")), 1)
                    ])) : H("", !0)
                  ]),
                  c("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(m)("library", "Catalogue pagination")
                  }, [
                    c("span", pk, [
                      Ne(p(g(m)("library", "Page")) + " " + p(ne.value.page), 1),
                      ne.value.total > 0 ? (b(), T("span", vk, " · " + p(ne.value.from) + "–" + p(ne.value.to), 1)) : H("", !0)
                    ]),
                    ne.value.previousUrl ? (b(), T("a", {
                      key: 0,
                      href: ne.value.previousUrl
                    }, p(g(m)("library", "Previous")), 9, gk)) : (b(), T("span", mk, p(g(m)("library", "Previous")), 1)),
                    ne.value.nextUrl ? (b(), T("a", {
                      key: 2,
                      href: ne.value.nextUrl
                    }, p(g(m)("library", "Next")), 9, bk)) : (b(), T("span", yk, p(g(m)("library", "Next")), 1))
                  ], 8, hk)
                ]),
                xn.value.length > 0 ? (b(), T("nav", {
                  key: 4,
                  class: "library-active-filter-chips",
                  "aria-label": g(m)("library", "Active filters")
                }, [
                  c("span", null, p(g(m)("library", "Active filters")), 1),
                  (b(!0), T(de, null, Me(xn.value, (f) => (b(), T("a", {
                    key: f.key,
                    href: wl(f.key),
                    class: "library-filter-chip",
                    "aria-label": `${g(m)("library", "Remove filter")}: ${f.label}`,
                    onClick: Ke((B) => cv(f.key), ["prevent"])
                  }, [
                    c("strong", null, p(f.label) + ":", 1),
                    Ne(" " + p(f.value) + " ", 1),
                    _[40] || (_[40] = c("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, wk))), 128))
                ], 8, _k)) : H("", !0),
                h.value.length === 0 ? (b(), T("div", {
                  key: 5,
                  class: Ce(["library-empty-content", { "library-first-run-guidance": wa.value || wi.value, "library-filter-empty-state": qi.value && !wa.value && !wi.value }]),
                  role: "status"
                }, [
                  wa.value ? (b(), T(de, { key: 0 }, [
                    c("h3", {
                      title: g(m)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, p(g(m)("library", "Start with one Library root")), 9, Sk),
                    c("p", Ck, [
                      c("a", {
                        href: k.value,
                        class: "button primary"
                      }, p(g(m)("library", "Add a Library root")), 9, Tk),
                      c("span", Ek, p(g(m)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : wi.value ? (b(), T(de, { key: 1 }, [
                    c("h3", {
                      title: g(m)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, p(g(m)("library", "No enabled Library roots")), 9, Ak),
                    c("p", kk, [
                      c("a", {
                        href: k.value,
                        class: "button primary"
                      }, p(g(m)("library", "Open Library settings")), 9, Ok)
                    ])
                  ], 64)) : qi.value ? (b(), T(de, { key: 2 }, [
                    c("h3", {
                      title: g(m)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, p(g(m)("library", "No matches for the current filters")), 9, Nk),
                    c("p", xk, [
                      c("a", {
                        href: uv(),
                        class: "button secondary"
                      }, p(g(m)("library", "Clear search")), 9, Lk),
                      c("a", Rk, p(g(m)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (b(), T(de, { key: 3 }, [
                    c("h3", {
                      title: g(m)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, p(g(m)("library", "No catalogue items yet")), 9, Ik),
                    c("p", Pk, [
                      c("a", {
                        href: k.value,
                        class: "button primary"
                      }, p(g(m)("library", "Run a scan from settings")), 9, Dk)
                    ])
                  ], 64))
                ], 2)) : H("", !0),
                h.value.length > 0 ? (b(), T("label", $k, [
                  c("input", {
                    type: "checkbox",
                    checked: Jt.value.length === h.value.length,
                    onChange: Ln
                  }, null, 40, Mk),
                  Ne(" " + p(g(m)("library", "Select all publications on this page")), 1)
                ])) : H("", !0),
                h.value.length > 0 && Rt.value === "list" ? (b(), T("ul", Fk, [
                  (b(!0), T(de, null, Me(h.value, (f) => (b(), T("li", {
                    key: f.id,
                    class: Ce(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Ea.value.has(Number(f.id)), "library-catalogue-list-row--open": Pn.value && Number(Qn.value) === Number(f.id) }])
                  }, [
                    c("label", zk, [
                      c("input", {
                        type: "checkbox",
                        checked: Ea.value.has(Number(f.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${f.title}`,
                        onChange: (B) => gs(f.id, B.currentTarget.checked)
                      }, null, 40, Uk)
                    ]),
                    c("div", Bk, [
                      c("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (B) => nt(f, B)
                      }, [
                        c("bdi", jk, p(f.title), 1)
                      ], 8, Hk),
                      f.creators ? (b(), T("span", Vk, [
                        c("bdi", Gk, p(f.creators), 1)
                      ])) : H("", !0)
                    ]),
                    c("dl", Kk, [
                      f.publication ? (b(), T("div", Wk, [
                        c("dt", null, p(g(m)("library", "Series")), 1),
                        c("dd", null, [
                          c("bdi", qk, p(f.publication), 1)
                        ])
                      ])) : H("", !0),
                      f.publicationDate ? (b(), T("div", Yk, [
                        c("dt", null, p(g(m)("library", "Publication date")), 1),
                        c("dd", null, p(f.publicationDate), 1)
                      ])) : H("", !0),
                      f.extension || f.publicationType ? (b(), T("div", Xk, [
                        c("dt", null, p(g(m)("library", "Format")), 1),
                        c("dd", null, [
                          c("bdi", {
                            class: Ce(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: f.extension ? "ltr" : "auto"
                          }, p(f.extension ? sr(f.extension) : f.publicationType), 11, Zk)
                        ])
                      ])) : H("", !0),
                      f.shelf ? (b(), T("div", Jk, [
                        c("dt", null, p(g(m)("library", "Shelf")), 1),
                        c("dd", null, [
                          c("bdi", Qk, p(f.shelf), 1)
                        ])
                      ])) : H("", !0)
                    ]),
                    c("div", eO, [
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(m)("library", "Open")), 9, tO),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (B) => nt(f, B)
                      }, p(g(m)("library", "Details")), 9, nO)
                    ])
                  ], 2))), 128))
                ])) : h.value.length > 0 ? (b(), T("div", {
                  key: 8,
                  class: Ce(["library-cover-gallery", vl.value])
                }, [
                  (b(!0), T(de, null, Me(h.value, (f) => (b(), T("article", {
                    key: f.id,
                    class: Ce(["library-cover-card", { "library-cover-card--cover-loaded": or(f) === "loaded", "library-cover-card--cover-error": or(f) === "error", "library-cover-card--selected": Ea.value.has(Number(f.id)), "library-cover-card--open": Pn.value && Number(Qn.value) === Number(f.id) }])
                  }, [
                    c("label", iO, [
                      c("input", {
                        type: "checkbox",
                        checked: Ea.value.has(Number(f.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${f.title}`,
                        onChange: (B) => gs(f.id, B.currentTarget.checked)
                      }, null, 40, aO)
                    ]),
                    c("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                      "aria-expanded": Pn.value && Number(Qn.value) === Number(f.id) ? "true" : "false",
                      onClick: (B) => nt(f, B)
                    }, [
                      c("span", {
                        id: `library-details-action-${f.id}`,
                        class: "hidden-visually"
                      }, p(g(m)("library", "Details")), 9, sO),
                      c("span", oO, [
                        or(f) === "loading" ? (b(), T("span", lO)) : H("", !0),
                        c("img", {
                          class: Ce(["library-cover-image", { "library-cover-image--loaded": or(f) === "loaded" }]),
                          src: f.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (B) => vv(f),
                          onError: (B) => gv(f)
                        }, null, 42, cO),
                        or(f) === "error" ? (b(), T("span", uO, p(g(m)("library", "Cover unavailable")), 1)) : H("", !0)
                      ])
                    ], 8, rO),
                    c("form", {
                      method: "post",
                      action: f.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: Ke((B) => Lu(f, B), ["prevent"])
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: pe.value
                      }, null, 8, fO),
                      _[41] || (_[41] = c("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      c("input", {
                        type: "hidden",
                        name: "starred",
                        value: f.starred ? "0" : "1"
                      }, null, 8, hO),
                      c("button", {
                        type: "submit",
                        class: Ce(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                        "aria-pressed": f.starred ? "true" : "false",
                        title: f.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-label": f.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-busy": lr[f.id] ? "true" : void 0,
                        disabled: lr[f.id],
                        onClick: Ke((B) => Lu(f, B), ["prevent"])
                      }, p(f.starred ? "★" : "☆"), 11, pO),
                      cr[f.id] ? (b(), T("span", {
                        key: 0,
                        "data-library-star-error": f.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, p(cr[f.id]), 9, vO)) : H("", !0)
                    ], 40, dO),
                    c("div", gO, [
                      c("div", mO, [
                        c("h3", {
                          id: `library-card-title-${f.id}`
                        }, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => nt(f, B)
                          }, [
                            c("bdi", _O, p(f.title), 1)
                          ], 8, yO)
                        ], 8, bO),
                        f.creators ? (b(), T("p", wO, [
                          c("bdi", SO, p(f.creators), 1)
                        ])) : H("", !0),
                        Cl(f) || f.extension ? (b(), T("div", CO, [
                          f.extension ? (b(), T("span", TO, [
                            c("bdi", EO, p(sr(f.extension)), 1)
                          ])) : H("", !0),
                          Cl(f) ? (b(), T("p", AO, [
                            c("bdi", kO, p(Cl(f)), 1)
                          ])) : H("", !0)
                        ])) : H("", !0),
                        c("div", OO, [
                          c("a", {
                            class: "library-cover-read",
                            href: f.openUrl
                          }, p(g(m)("library", "Open")), 9, NO),
                          _e(g(bo), {
                            "aria-label": g(m)("library", "More actions")
                          }, {
                            default: Oe(() => [
                              _e(g(Da), {
                                href: f.filesUrl
                              }, {
                                default: Oe(() => [
                                  Ne(p(g(m)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              _e(g(Da), {
                                href: f.downloadUrl
                              }, {
                                default: Oe(() => [
                                  Ne(p(g(m)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              _e(g(Da), {
                                href: f.detailsUrl
                              }, {
                                default: Oe(() => [
                                  Ne(p(g(m)("library", "Maintenance")), 1)
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
                h.value.length > 0 ? (b(), T("nav", {
                  key: 9,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(m)("library", "Catalogue pagination")
                }, [
                  c("span", LO, [
                    Ne(p(g(m)("library", "Page")) + " " + p(ne.value.page), 1),
                    ne.value.total > 0 ? (b(), T("span", RO, " · " + p(ne.value.from) + "–" + p(ne.value.to), 1)) : H("", !0)
                  ]),
                  ne.value.previousUrl ? (b(), T("a", {
                    key: 0,
                    href: ne.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, IO)) : (b(), T("span", PO, p(g(m)("library", "Previous")), 1)),
                  ne.value.nextUrl ? (b(), T("a", {
                    key: 2,
                    href: ne.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, DO)) : (b(), T("span", $O, p(g(m)("library", "Next")), 1))
                ], 8, xO)) : H("", !0)
              ]))
            ], 8, ST)
          ]),
          _: 1
        }),
        _e(g(XS), {
          ref_key: "sidebarComponent",
          ref: ln,
          class: "library-native-item-sidebar",
          open: Pn.value,
          "no-toggle": "",
          loading: dt.loading,
          name: we.value?.title || g(m)("library", "Publication details"),
          subname: we.value?.creators || "",
          role: _n.value ? "dialog" : void 0,
          "aria-modal": _n.value ? "true" : void 0,
          "aria-labelledby": _n.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": _n.value && we.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: Oa,
          onClosed: Tt,
          onClose: bt
        }, {
          default: Oe(() => [
            c("div", MO, [
              c("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: nr,
                class: "hidden-visually",
                tabindex: "-1"
              }, p(we.value?.title || g(m)("library", "Publication details")), 513),
              dt.loading && !we.value ? (b(), T("p", FO, p(g(m)("library", "Loading publication details…")), 1)) : dt.error ? (b(), T("div", {
                key: 1,
                class: "library-sidebar-state",
                role: dt.missing ? "status" : "alert"
              }, [
                c("p", null, p(dt.error), 1),
                dt.missing ? H("", !0) : (b(), T("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: _[29] || (_[29] = (f) => Je(Qn.value, { historyMode: "none" }))
                }, p(g(m)("library", "Try again")), 1))
              ], 8, zO)) : we.value ? (b(), T(de, { key: 2 }, [
                c("p", UO, p(g(m)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                c("div", BO, [
                  c("span", HO, p(g(m)("library", "Cover for")), 1),
                  c("img", {
                    class: "library-detail-drawer-cover",
                    src: we.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, jO),
                  c("div", VO, [
                    c("p", GO, [
                      c("bdi", KO, p(we.value.publicationType || g(m)("library", "Publication")), 1),
                      we.value.extension ? (b(), T("span", WO, [
                        _[42] || (_[42] = Ne(" · ", -1)),
                        c("bdi", qO, p(sr(we.value.extension)), 1)
                      ])) : H("", !0)
                    ]),
                    c("div", YO, [
                      c("a", {
                        class: "button primary",
                        href: we.value.openUrl
                      }, p(g(m)("library", "Open")), 9, XO),
                      _e(g(bo), {
                        "aria-label": g(m)("library", "File and maintenance actions")
                      }, {
                        default: Oe(() => [
                          _e(g(Da), {
                            href: we.value.filesUrl
                          }, {
                            default: Oe(() => [
                              Ne(p(g(m)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          _e(g(Da), {
                            href: we.value.downloadUrl
                          }, {
                            default: Oe(() => [
                              Ne(p(g(m)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          _e(g(Da), {
                            href: we.value.detailsUrl
                          }, {
                            default: Oe(() => [
                              Ne(p(g(m)("library", "Maintenance (legacy)")), 1)
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
                  "aria-label": g(m)("library", "Publication detail sections")
                }, [
                  (b(), T(de, null, Me(yl, (f) => c("button", {
                    key: f.key,
                    type: "button",
                    class: Ce({ active: Rn.value === f.key }),
                    "aria-current": Rn.value === f.key ? "page" : void 0,
                    onClick: (B) => Rn.value = f.key
                  }, p(g(m)("library", f.label)), 11, JO)), 64))
                ], 8, ZO),
                Rn.value === "overview" ? (b(), T("section", QO, [
                  c("h3", eN, p(g(m)("library", "Overview")), 1),
                  we.value.description ? (b(), T("p", tN, [
                    c("bdi", nN, p(we.value.description), 1)
                  ])) : H("", !0),
                  c("dl", iN, [
                    we.value.publication ? (b(), T("div", aN, [
                      c("dt", null, p(g(m)("library", "Series")), 1),
                      c("dd", null, p(we.value.publication), 1)
                    ])) : H("", !0),
                    we.value.publicationDate ? (b(), T("div", rN, [
                      c("dt", null, p(g(m)("library", "Date")), 1),
                      c("dd", null, p(we.value.publicationDate), 1)
                    ])) : H("", !0),
                    we.value.publisher ? (b(), T("div", sN, [
                      c("dt", null, p(g(m)("library", "Publisher")), 1),
                      c("dd", null, p(we.value.publisher), 1)
                    ])) : H("", !0),
                    we.value.language ? (b(), T("div", oN, [
                      c("dt", null, p(g(m)("library", "Language")), 1),
                      c("dd", null, p(we.value.language), 1)
                    ])) : H("", !0),
                    we.value.shelf ? (b(), T("div", lN, [
                      c("dt", null, p(g(m)("library", "Shelf")), 1),
                      c("dd", null, p(we.value.shelf), 1)
                    ])) : H("", !0)
                  ])
                ])) : Rn.value === "metadata" ? (b(), T("section", cN, [
                  c("h3", uN, p(g(m)("library", "Metadata")), 1),
                  c("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Ke(ir, ["prevent"])
                  }, [
                    c("label", null, [
                      Ne(p(g(m)("library", "Title")), 1),
                      We(c("input", {
                        "onUpdate:modelValue": _[30] || (_[30] = (f) => mt.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [Sn, mt.title]
                      ])
                    ]),
                    c("label", null, [
                      Ne(p(g(m)("library", "Publication date")), 1),
                      We(c("input", {
                        "onUpdate:modelValue": _[31] || (_[31] = (f) => mt.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(m)("library", "e.g. 2026")
                      }, null, 8, dN), [
                        [Sn, mt.publicationDate]
                      ])
                    ]),
                    c("fieldset", null, [
                      c("legend", null, p(g(m)("library", "Identifiers")), 1),
                      (b(!0), T(de, null, Me(mt.identifiers, (f, B) => (b(), T("div", {
                        key: B,
                        class: "library-sidebar-identifier"
                      }, [
                        We(c("input", {
                          "onUpdate:modelValue": (ge) => f.scheme = ge,
                          "aria-label": g(m)("library", "Identifier type"),
                          placeholder: g(m)("library", "Identifier type")
                        }, null, 8, fN), [
                          [Sn, f.scheme]
                        ]),
                        We(c("input", {
                          "onUpdate:modelValue": (ge) => f.displayValue = ge,
                          "aria-label": g(m)("library", "Identifier value")
                        }, null, 8, hN), [
                          [Sn, f.displayValue]
                        ]),
                        c("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (ge) => ka(B)
                        }, p(g(m)("library", "Remove")), 9, pN)
                      ]))), 128)),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: ws
                      }, p(g(m)("library", "Add identifier")), 1)
                    ]),
                    c("p", vN, p(g(m)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    Qt.error ? (b(), T("p", gN, p(Qt.error), 1)) : Qt.saved ? (b(), T("p", mN, p(g(m)("library", "Metadata saved.")), 1)) : H("", !0),
                    c("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Qt.saving
                    }, p(Qt.saving ? g(m)("library", "Saving…") : g(m)("library", "Save metadata")), 9, bN)
                  ], 32),
                  K(we.value).length ? (b(), T("section", yN, [
                    c("h4", _N, p(g(m)("library", "Scanner suggestions")), 1),
                    c("p", wN, p(g(m)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    c("dl", null, [
                      (b(!0), T(de, null, Me(K(we.value), (f) => (b(), T("div", {
                        key: f.field
                      }, [
                        c("dt", null, p(f.field) + " · " + p(f.sourceProvenance), 1),
                        c("dd", null, [
                          Ne(p(g(m)("library", "Current")) + ": " + p(f.currentValue || "—"), 1),
                          _[43] || (_[43] = c("br", null, null, -1)),
                          Ne(p(g(m)("library", "Suggestion")) + ": " + p(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : H("", !0)
                ])) : (b(), T("section", SN, [
                  c("h3", CN, p(g(m)("library", "Activity")), 1),
                  c("dl", TN, [
                    c("div", null, [
                      c("dt", null, p(g(m)("library", "Scan status")), 1),
                      c("dd", null, p(we.value.scanStatus || "—"), 1)
                    ]),
                    we.value.workflowStatus ? (b(), T("div", EN, [
                      c("dt", null, p(g(m)("library", "Workflow")), 1),
                      c("dd", null, p(we.value.workflowStatus), 1)
                    ])) : H("", !0),
                    we.value.metadataSource ? (b(), T("div", AN, [
                      c("dt", null, p(g(m)("library", "Metadata source")), 1),
                      c("dd", null, p(we.value.metadataSource), 1)
                    ])) : H("", !0),
                    we.value.cachedPath ? (b(), T("div", kN, [
                      c("dt", null, p(g(m)("library", "File")), 1),
                      c("dd", null, [
                        c("bdi", ON, p(we.value.cachedPath), 1)
                      ])
                    ])) : H("", !0)
                  ])
                ])),
                c("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": g(m)("library", "Browse neighbouring items")
                }, [
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Xi.value,
                    onClick: _[32] || (_[32] = (f) => Ss(Xi.value))
                  }, p(g(m)("library", "Previous item")), 9, xN),
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Zi.value,
                    onClick: _[33] || (_[33] = (f) => Ss(Zi.value))
                  }, p(g(m)("library", "Next item")), 9, LN)
                ], 8, NN)
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
function $N() {
  window.LibraryStartupWatchdog?.fail();
}
function MN(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = au("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !MN(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  nb(DN, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  $N(), console.error("[library] Vue startup failed", e);
}
