// @__NO_SIDE_EFFECTS__
function ts(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const z = {}, mt = [], $e = () => {
}, rr = () => !1, gn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), mn = (e) => e.startsWith("onUpdate:"), ie = Object.assign, ns = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, mi = Object.prototype.hasOwnProperty, H = (e, t) => mi.call(e, t), F = Array.isArray, Ye = (e) => Wt(e) === "[object Map]", at = (e) => Wt(e) === "[object Set]", Ts = (e) => Wt(e) === "[object Date]", $ = (e) => typeof e == "function", Q = (e) => typeof e == "string", ve = (e) => typeof e == "symbol", k = (e) => e !== null && typeof e == "object", ir = (e) => (k(e) || $(e)) && $(e.then) && $(e.catch), lr = Object.prototype.toString, Wt = (e) => lr.call(e), bi = (e) => Wt(e).slice(8, -1), or = (e) => Wt(e) === "[object Object]", ss = (e) => Q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mt = /* @__PURE__ */ ts(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, _i = /-\w/g, de = bn(
  (e) => e.replace(_i, (t) => t.slice(1).toUpperCase())
), yi = /\B([A-Z])/g, dt = bn(
  (e) => e.replace(yi, "-$1").toLowerCase()
), _n = bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Mn = bn(
  (e) => e ? `on${_n(e)}` : ""
), Le = (e, t) => !Object.is(e, t), sn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ur = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, yn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Es;
const vn = () => Es || (Es = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function rs(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = Q(s) ? wi(s) : rs(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (Q(e) || k(e))
    return e;
}
const vi = /;(?![^(]*\))/g, xi = /:([^]+)/, Si = /\/\*[^]*?\*\//g;
function wi(e) {
  const t = {};
  return e.replace(Si, "").split(vi).forEach((n) => {
    if (n) {
      const s = n.split(xi);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function is(e) {
  let t = "";
  if (Q(e))
    t = e;
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const s = is(e[n]);
      s && (t += s + " ");
    }
  else if (k(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ci = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ti = /* @__PURE__ */ ts(Ci);
function fr(e) {
  return !!e || e === "";
}
function Ei(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Xe(e[s], t[s]);
  return n;
}
function As(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), s = new Uint8Array(n.length);
  for (const r of e) {
    let i = -1;
    for (let l = 0; l < n.length; l++)
      if (!s[l] && Xe(r, n[l])) {
        i = l;
        break;
      }
    if (i < 0) return !1;
    s[i] = 1;
  }
  return !0;
}
function Xe(e, t) {
  if (e === t) return !0;
  let n = Ts(e), s = Ts(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = ve(e), s = ve(t), n || s)
    return e === t;
  if (n = F(e), s = F(t), n || s)
    return n && s ? Ei(e, t) : !1;
  if (n = k(e), s = k(t), n || s) {
    if (!n || !s)
      return !1;
    if (n = Ye(e), s = Ye(t), n || s || (n = at(e), s = at(t), n || s))
      return n && s ? As(e, t) : !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const l in e) {
      const o = e.hasOwnProperty(l), u = t.hasOwnProperty(l);
      if (o && !u || !o && u || !Xe(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ai(e, t) {
  return e.findIndex((n) => Xe(n, t));
}
const cr = (e) => !!(e && e.__v_isRef === !0), j = (e) => Q(e) ? e : e == null ? "" : F(e) || k(e) && (e.toString === lr || !$(e.toString)) ? cr(e) ? j(e.value) : JSON.stringify(e, ar, 2) : String(e), ar = (e, t) => cr(t) ? ar(e, t.value) : Ye(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Rn(s, i) + " =>"] = r, n),
    {}
  )
} : at(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Rn(n))
} : ve(t) ? Rn(t) : k(t) && !F(t) && !or(t) ? String(t) : t, Rn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ve(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let se;
class Oi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && se && (se.active ? (this.parent = se, this.index = (se.scopes || (se.scopes = [])).push(
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
        const s = this.scopes.slice();
        for (t = 0, n = s.length; t < n; t++)
          s[t].pause();
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
        const r = this.scopes.slice();
        for (t = 0, n = r.length; t < n; t++)
          r[t].resume();
      }
      const s = this.effects.slice();
      for (t = 0, n = s.length; t < n; t++)
        s[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = se;
      try {
        return se = this, t();
      } finally {
        se = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = se, se = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (se === this)
        se = this.prevScope;
      else {
        let t = se;
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
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const r = this.scopes.slice();
        for (n = 0, s = r.length; n < s; n++)
          r[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Pi() {
  return se;
}
let Y;
const Fn = /* @__PURE__ */ new WeakSet();
class dr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, se && (se.active ? se.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Fn.has(this) && (Fn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || hr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Os(this), gr(this);
    const t = Y, n = _e;
    Y = this, _e = !0;
    try {
      return this.fn();
    } finally {
      mr(this), Y = t, _e = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        us(t);
      this.deps = this.depsTail = void 0, Os(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Fn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    kn(this) && this.run();
  }
  get dirty() {
    return kn(this);
  }
}
let pr = 0, Rt, Ft;
function hr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ft, Ft = e;
    return;
  }
  e.next = Rt, Rt = e;
}
function ls() {
  pr++;
}
function os() {
  if (--pr > 0)
    return;
  if (Ft) {
    let t = Ft;
    for (Ft = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Rt; ) {
    let t = Rt;
    for (Rt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function gr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function mr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), us(s), Ii(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function kn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (br(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function br(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Dt) || (e.globalVersion = Dt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !kn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Y, s = _e;
  Y = e, _e = !0;
  try {
    gr(e);
    const r = e.fn(e._value);
    (t.version === 0 || Le(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Y = n, _e = s, mr(e), e.flags &= -3;
  }
}
function us(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      us(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ii(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let _e = !0;
const _r = [];
function We() {
  _r.push(_e), _e = !1;
}
function ke() {
  const e = _r.pop();
  _e = e === void 0 ? !0 : e;
}
function Os(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Y;
    Y = void 0;
    try {
      t();
    } finally {
      Y = n;
    }
  }
}
let Dt = 0;
class Mi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class yr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Y || !_e || Y === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Y)
      n = this.activeLink = new Mi(Y, this), Y.deps ? (n.prevDep = Y.depsTail, Y.depsTail.nextDep = n, Y.depsTail = n) : Y.deps = Y.depsTail = n, vr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Y.depsTail, n.nextDep = void 0, Y.depsTail.nextDep = n, Y.depsTail = n, Y.deps === n && (Y.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Dt++, this.notify(t);
  }
  notify(t) {
    ls();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      os();
    }
  }
}
function vr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        vr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const qn = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ Symbol(
  ""
), zn = /* @__PURE__ */ Symbol(
  ""
), jt = /* @__PURE__ */ Symbol(
  ""
);
function le(e, t, n) {
  if (_e && Y) {
    let s = qn.get(e);
    s || qn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new yr()), r.map = s, r.key = n), r.track();
  }
}
function He(e, t, n, s, r, i) {
  const l = qn.get(e);
  if (!l) {
    Dt++;
    return;
  }
  const o = (u) => {
    u && u.trigger();
  };
  if (ls(), t === "clear")
    l.forEach(o);
  else {
    const u = F(e), d = u && ss(n);
    if (u && n === "length") {
      const a = Number(s);
      l.forEach((g, T) => {
        (T === "length" || T === jt || !ve(T) && T >= a) && o(g);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && o(l.get(n)), d && o(l.get(jt)), t) {
        case "add":
          u ? d && o(l.get("length")) : (o(l.get(ut)), Ye(e) && o(l.get(zn)));
          break;
        case "delete":
          u || (o(l.get(ut)), Ye(e) && o(l.get(zn)));
          break;
        case "set":
          Ye(e) && o(l.get(ut));
          break;
      }
  }
  os();
}
function pt(e) {
  const t = /* @__PURE__ */ W(e);
  return t === e ? t : (le(t, "iterate", jt), /* @__PURE__ */ ye(e) ? t : t.map(qe));
}
function xn(e) {
  return le(e = /* @__PURE__ */ W(e), "iterate", jt), e;
}
function Me(e, t) {
  return /* @__PURE__ */ Ze(e) ? vt(/* @__PURE__ */ ft(e) ? qe(t) : t) : qe(t);
}
const Ri = {
  __proto__: null,
  [Symbol.iterator]() {
    return Nn(this, Symbol.iterator, (e) => Me(this, e));
  },
  concat(...e) {
    return pt(this).concat(
      ...e.map((t) => F(t) ? pt(t) : t)
    );
  },
  entries() {
    return Nn(this, "entries", (e) => (e[1] = Me(this, e[1]), e));
  },
  every(e, t) {
    return De(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return De(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Me(this, s)),
      arguments
    );
  },
  find(e, t) {
    return De(
      this,
      "find",
      e,
      t,
      (n) => Me(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return De(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return De(
      this,
      "findLast",
      e,
      t,
      (n) => Me(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return De(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return De(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return $n(this, "includes", e);
  },
  indexOf(...e) {
    return $n(this, "indexOf", e);
  },
  join(e) {
    return pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return $n(this, "lastIndexOf", e);
  },
  map(e, t) {
    return De(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Et(this, "pop");
  },
  push(...e) {
    return Et(this, "push", e);
  },
  reduce(e, ...t) {
    return Ps(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ps(this, "reduceRight", e, t);
  },
  shift() {
    return Et(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return De(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Et(this, "splice", e);
  },
  toReversed() {
    return pt(this).toReversed();
  },
  toSorted(e) {
    return pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Et(this, "unshift", e);
  },
  values() {
    return Nn(this, "values", (e) => Me(this, e));
  }
};
function Nn(e, t, n) {
  const s = xn(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ ye(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const Fi = Array.prototype;
function De(e, t, n, s, r, i) {
  const l = xn(e), o = l !== e && !/* @__PURE__ */ ye(e), u = l[t];
  if (u !== Fi[t]) {
    const g = u.apply(e, i);
    return o ? qe(g) : g;
  }
  let d = n;
  l !== e && (o ? d = function(g, T) {
    return n.call(this, Me(e, g), T, e);
  } : n.length > 2 && (d = function(g, T) {
    return n.call(this, g, T, e);
  }));
  const a = u.call(l, d, s);
  return o && r ? r(a) : a;
}
function Ps(e, t, n, s) {
  const r = xn(e), i = r !== e && !/* @__PURE__ */ ye(e);
  let l = n, o = !1;
  r !== e && (i ? (o = s.length === 0, l = function(d, a, g) {
    return o && (o = !1, d = Me(e, d)), n.call(this, d, Me(e, a), g, e);
  }) : n.length > 3 && (l = function(d, a, g) {
    return n.call(this, d, a, g, e);
  }));
  const u = r[t](l, ...s);
  return o ? Me(e, u) : u;
}
function $n(e, t, n) {
  const s = /* @__PURE__ */ W(e);
  le(s, "iterate", jt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ as(n[0]) ? (n[0] = /* @__PURE__ */ W(n[0]), s[t](...n)) : r;
}
function Et(e, t, n = []) {
  We(), ls();
  const s = (/* @__PURE__ */ W(e))[t].apply(e, n);
  return os(), ke(), s;
}
const Ni = /* @__PURE__ */ ts("__proto__,__v_isRef,__isVue"), xr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ve)
);
function $i(e) {
  ve(e) || (e = String(e));
  const t = /* @__PURE__ */ W(this);
  return le(t, "has", e), t.hasOwnProperty(e);
}
class Sr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? ki : Er : i ? Tr : Cr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = F(t);
    if (!r) {
      let u;
      if (l && (u = Ri[n]))
        return u;
      if (n === "hasOwnProperty")
        return $i;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ pe(t) ? t : s
    );
    if ((ve(n) ? xr.has(n) : Ni(n)) || (r || le(t, "get", n), i))
      return o;
    if (/* @__PURE__ */ pe(o)) {
      const u = l && ss(n) ? o : o.value;
      return r && k(u) ? /* @__PURE__ */ Jn(u) : u;
    }
    return k(o) ? r ? /* @__PURE__ */ Jn(o) : /* @__PURE__ */ Sn(o) : o;
  }
}
class wr extends Sr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const l = F(t) && ss(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Ze(i);
      if (!/* @__PURE__ */ ye(s) && !/* @__PURE__ */ Ze(s) && (i = /* @__PURE__ */ W(i), s = /* @__PURE__ */ W(s)), !l && /* @__PURE__ */ pe(i) && !/* @__PURE__ */ pe(s))
        return d || (i.value = s), !0;
    }
    const o = l ? Number(n) < t.length : H(t, n), u = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ pe(t) ? t : r
    );
    return t === /* @__PURE__ */ W(r) && u && (o ? Le(s, i) && He(t, "set", n, s) : He(t, "add", n, s)), u;
  }
  deleteProperty(t, n) {
    const s = H(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && He(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ve(n) || !xr.has(n)) && le(t, "has", n), s;
  }
  ownKeys(t) {
    return le(
      t,
      "iterate",
      F(t) ? "length" : ut
    ), Reflect.ownKeys(t);
  }
}
class Vi extends Sr {
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
const Di = /* @__PURE__ */ new wr(), ji = /* @__PURE__ */ new Vi(), Ui = /* @__PURE__ */ new wr(!0);
const Gn = (e) => e, Zt = (e) => Reflect.getPrototypeOf(e);
function Li(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ W(r), l = Ye(i), o = e === "entries" || e === Symbol.iterator && l, u = e === "keys" && l, d = r[e](...s), a = n ? Gn : t ? vt : qe;
    return !t && le(
      i,
      "iterate",
      u ? zn : ut
    ), ie(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: g, done: T } = d.next();
          return T ? { value: g, done: T } : {
            value: o ? [a(g[0]), a(g[1])] : a(g),
            done: T
          };
        }
      }
    );
  };
}
function Qt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Hi(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, l = /* @__PURE__ */ W(i), o = /* @__PURE__ */ W(r);
      e || (Le(r, o) && le(l, "get", r), le(l, "get", o));
      const { has: u } = Zt(l), d = t ? Gn : e ? vt : qe;
      if (u.call(l, r))
        return d(i.get(r));
      if (u.call(l, o))
        return d(i.get(o));
      i !== l && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && le(/* @__PURE__ */ W(r), "iterate", ut), r.size;
    },
    has(r) {
      const i = this.__v_raw, l = /* @__PURE__ */ W(i), o = /* @__PURE__ */ W(r);
      return e || (Le(r, o) && le(l, "has", r), le(l, "has", o)), r === o ? i.has(r) : i.has(r) || i.has(o);
    },
    forEach(r, i) {
      const l = this, o = l.__v_raw, u = /* @__PURE__ */ W(o), d = t ? Gn : e ? vt : qe;
      return !e && le(u, "iterate", ut), o.forEach((a, g) => r.call(i, d(a), d(g), l));
    }
  };
  return ie(
    n,
    e ? {
      add: Qt("add"),
      set: Qt("set"),
      delete: Qt("delete"),
      clear: Qt("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ W(this), l = Zt(i), o = /* @__PURE__ */ W(r), u = !t && !/* @__PURE__ */ ye(r) && !/* @__PURE__ */ Ze(r) ? o : r;
        return l.has.call(i, u) || Le(r, u) && l.has.call(i, r) || Le(o, u) && l.has.call(i, o) || (i.add(u), He(i, "add", u, u)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ ye(i) && !/* @__PURE__ */ Ze(i) && (i = /* @__PURE__ */ W(i));
        const l = /* @__PURE__ */ W(this), { has: o, get: u } = Zt(l);
        let d = o.call(l, r);
        d || (r = /* @__PURE__ */ W(r), d = o.call(l, r));
        const a = u.call(l, r);
        return l.set(r, i), d ? Le(i, a) && He(l, "set", r, i) : He(l, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ W(this), { has: l, get: o } = Zt(i);
        let u = l.call(i, r);
        u || (r = /* @__PURE__ */ W(r), u = l.call(i, r)), o && o.call(i, r);
        const d = i.delete(r);
        return u && He(i, "delete", r, void 0), d;
      },
      clear() {
        const r = /* @__PURE__ */ W(this), i = r.size !== 0, l = r.clear();
        return i && He(
          r,
          "clear",
          void 0,
          void 0
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Li(r, e, t);
  }), n;
}
function fs(e, t) {
  const n = Hi(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    H(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Bi = {
  get: /* @__PURE__ */ fs(!1, !1)
}, Ki = {
  get: /* @__PURE__ */ fs(!1, !0)
}, Wi = {
  get: /* @__PURE__ */ fs(!0, !1)
};
const Cr = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap(), ki = /* @__PURE__ */ new WeakMap();
function qi(e) {
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
function Sn(e) {
  return /* @__PURE__ */ Ze(e) ? e : cs(
    e,
    !1,
    Di,
    Bi,
    Cr
  );
}
// @__NO_SIDE_EFFECTS__
function zi(e) {
  return cs(
    e,
    !1,
    Ui,
    Ki,
    Tr
  );
}
// @__NO_SIDE_EFFECTS__
function Jn(e) {
  return cs(
    e,
    !0,
    ji,
    Wi,
    Er
  );
}
function cs(e, t, n, s, r) {
  if (!k(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const l = qi(bi(e));
  if (l === 0)
    return e;
  const o = new Proxy(
    e,
    l === 2 ? s : n
  );
  return r.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function ft(e) {
  return /* @__PURE__ */ Ze(e) ? /* @__PURE__ */ ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function as(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function W(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ W(t) : e;
}
function Gi(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && ur(e, "__v_skip", !0), e;
}
const qe = (e) => k(e) ? /* @__PURE__ */ Sn(e) : e, vt = (e) => k(e) ? /* @__PURE__ */ Jn(e) : e;
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ne(e) {
  return /* @__PURE__ */ pe(e) ? e.value : e;
}
const Ji = {
  get: (e, t, n) => t === "__v_raw" ? e : Ne(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ pe(r) && !/* @__PURE__ */ pe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Ar(e) {
  return /* @__PURE__ */ ft(e) ? e : new Proxy(e, Ji);
}
class Yi {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new yr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Dt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Y !== this)
      return hr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return br(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Xi(e, t, n = !1) {
  let s, r;
  return $(e) ? s = e : (s = e.get, r = e.set), new Yi(s, r, n);
}
const en = {}, ln = /* @__PURE__ */ new WeakMap();
let it;
function Zi(e, t = !1, n = it) {
  if (n) {
    let s = ln.get(n);
    s || ln.set(n, s = []), s.push(e);
  }
}
function Qi(e, t, n = z) {
  const { immediate: s, deep: r, once: i, scheduler: l, augmentJob: o, call: u } = n, d = (R) => r ? R : /* @__PURE__ */ ye(R) || r === !1 || r === 0 ? Be(R, 1) : Be(R);
  let a, g, T, A, L = !1, O = !1;
  if (/* @__PURE__ */ pe(e) ? (g = () => e.value, L = /* @__PURE__ */ ye(e)) : /* @__PURE__ */ ft(e) ? (g = () => d(e), L = !0) : F(e) ? (O = !0, L = e.some((R) => /* @__PURE__ */ ft(R) || /* @__PURE__ */ ye(R)), g = () => e.map((R) => {
    if (/* @__PURE__ */ pe(R))
      return R.value;
    if (/* @__PURE__ */ ft(R))
      return d(R);
    if ($(R))
      return u ? u(R, 2) : R();
  })) : $(e) ? t ? g = u ? () => u(e, 2) : e : g = () => {
    if (T) {
      We();
      try {
        T();
      } finally {
        ke();
      }
    }
    const R = it;
    it = a;
    try {
      return u ? u(e, 3, [A]) : e(A);
    } finally {
      it = R;
    }
  } : g = $e, t && r) {
    const R = g, te = r === !0 ? 1 / 0 : r;
    g = () => Be(R(), te);
  }
  const p = Pi(), m = () => {
    a.stop(), p && p.active && ns(p.effects, a);
  };
  if (i && t) {
    const R = t;
    t = (...te) => {
      const Se = R(...te);
      return m(), Se;
    };
  }
  let I = O ? new Array(e.length).fill(en) : en;
  const B = (R) => {
    if (!(!(a.flags & 1) || !a.dirty && !R))
      if (t) {
        const te = a.run();
        if (R || r || L || (O ? te.some((Se, we) => Le(Se, I[we])) : Le(te, I))) {
          T && T();
          const Se = it;
          it = a;
          try {
            const we = [
              te,
              // pass undefined as the old value when it's changed for the first time
              I === en ? void 0 : O && I[0] === en ? [] : I,
              A
            ];
            I = te, u ? u(t, 3, we) : (
              // @ts-expect-error
              t(...we)
            );
          } finally {
            it = Se;
          }
        }
      } else
        a.run();
  };
  return o && o(B), a = new dr(g), a.scheduler = l ? () => l(B, !1) : B, A = (R) => Zi(R, !1, a), T = a.onStop = () => {
    const R = ln.get(a);
    if (R) {
      if (u)
        u(R, 4);
      else
        for (const te of R) te();
      ln.delete(a);
    }
  }, t ? s ? B(!0) : I = a.run() : l ? l(B.bind(null, !0), !0) : a.run(), m.pause = a.pause.bind(a), m.resume = a.resume.bind(a), m.stop = m, m;
}
function Be(e, t = 1 / 0, n) {
  if (t <= 0 || !k(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ pe(e))
    Be(e.value, t, n);
  else if (F(e))
    for (let s = 0; s < e.length; s++)
      Be(e[s], t, n);
  else if (at(e) || Ye(e))
    e.forEach((s) => {
      Be(s, t, n);
    });
  else if (or(e)) {
    for (const s in e)
      Be(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Be(e[s], t, n);
  }
  return e;
}
function kt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    wn(r, t, n);
  }
}
function xe(e, t, n, s) {
  if ($(e)) {
    const r = kt(e, t, n, s);
    return r && ir(r) && r.catch((i) => {
      wn(i, t, n);
    }), r;
  }
  if (F(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(xe(e[i], t, n, s));
    return r;
  }
}
function wn(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || z;
  if (t) {
    let o = t.parent;
    const u = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let g = 0; g < a.length; g++)
          if (a[g](e, u, d) === !1)
            return;
      }
      o = o.parent;
    }
    if (i) {
      We(), kt(i, null, 10, [
        e,
        u,
        d
      ]), ke();
      return;
    }
  }
  el(e, n, r, s, l);
}
function el(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ae = [];
let Ie = -1;
const bt = [];
let Je = null, ht = 0;
const Or = /* @__PURE__ */ Promise.resolve();
let on = null;
function Pr(e) {
  const t = on || Or;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function tl(e) {
  let t = Ie + 1, n = ae.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = ae[s], i = Ut(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ds(e) {
  if (!(e.flags & 1)) {
    const t = Ut(e), n = ae[ae.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ut(n) ? ae.push(e) : ae.splice(tl(t), 0, e), e.flags |= 1, Ir();
  }
}
function Ir() {
  on || (on = Or.then(Rr));
}
function nl(e) {
  if (!F(e))
    Je && e.id === -1 ? Je.splice(ht + 1, 0, e) : e.flags & 1 || (bt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      bt.push(e[t]);
  Ir();
}
function Is(e, t, n = Ie + 1) {
  for (; n < ae.length; n++) {
    const s = ae[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ae.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Mr(e) {
  if (bt.length) {
    const t = [...new Set(bt)].sort(
      (n, s) => Ut(n) - Ut(s)
    );
    if (bt.length = 0, Je) {
      for (let n = 0; n < t.length; n++)
        Je.push(t[n]);
      return;
    }
    for (Je = t, ht = 0; ht < Je.length; ht++) {
      const n = Je[ht];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Je = null, ht = 0;
  }
}
const Ut = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Rr(e) {
  try {
    for (Ie = 0; Ie < ae.length; Ie++) {
      const t = ae[Ie];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), kt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ie < ae.length; Ie++) {
      const t = ae[Ie];
      t && (t.flags &= -2);
    }
    Ie = -1, ae.length = 0, Mr(), on = null, (ae.length || bt.length) && Rr();
  }
}
let re = null, Fr = null;
function un(e) {
  const t = re;
  return re = e, Fr = e && e.type.__scopeId || null, t;
}
function Nt(e, t = re, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Bs(-1);
    const i = un(t), l = Ke.length;
    let o;
    try {
      o = e(...r);
    } finally {
      for (let u = Ke.length; u > l; u--) bs();
      un(i), s._d && Bs(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function nt(e, t) {
  if (re === null)
    return e;
  const n = On(re), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, l, o, u = z] = t[r];
    i && ($(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Be(l), s.push({
      dir: i,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: o,
      modifiers: u
    }));
  }
  return e;
}
function st(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const o = r[l];
    i && (o.oldValue = i[l].value);
    let u = o.dir[s];
    u && (We(), xe(u, n, 8, [
      e.el,
      o,
      e,
      t
    ]), ke());
  }
}
function sl(e, t) {
  if (oe) {
    let n = oe.provides;
    const s = oe.parent && oe.parent.provides;
    s === n && (n = oe.provides = Object.create(s)), n[e] = t;
  }
}
function ct(e, t, n = !1) {
  const s = to();
  if (s || yt) {
    let r = yt ? yt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(s && s.proxy) : t;
  }
}
const rl = /* @__PURE__ */ Symbol.for("v-scx"), il = () => ct(rl);
function Vn(e, t, n) {
  return Nr(e, t, n);
}
function Nr(e, t, n = z) {
  const { immediate: s, deep: r, flush: i, once: l } = n, o = ie({}, n), u = t && s || !t && i !== "post";
  let d;
  if (Kt) {
    if (i === "sync") {
      const A = il();
      d = A.__watcherHandles || (A.__watcherHandles = []);
    } else if (!u) {
      const A = () => {
      };
      return A.stop = $e, A.resume = $e, A.pause = $e, A;
    }
  }
  const a = oe;
  o.call = (A, L, O) => xe(A, a, L, O);
  let g = !1;
  i === "post" ? o.scheduler = (A) => {
    he(A, a && a.suspense);
  } : i !== "sync" && (g = !0, o.scheduler = (A, L) => {
    L ? A() : ds(A);
  }), o.augmentJob = (A) => {
    t && (A.flags |= 4), g && (A.flags |= 2, a && (A.id = a.uid, A.i = a));
  };
  const T = Qi(e, t, o);
  return Kt && (d ? d.push(T) : u && T()), T;
}
function ll(e, t, n) {
  const s = this.proxy, r = Q(e) ? e.includes(".") ? $r(s, e) : () => s[e] : e.bind(s, s);
  let i;
  $(t) ? i = t : (i = t.handler, n = t);
  const l = qt(this), o = Nr(r, i.bind(s), n);
  return l(), o;
}
function $r(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const ol = /* @__PURE__ */ Symbol("_vte"), Cn = (e) => e.__isTeleport, Dn = /* @__PURE__ */ Symbol("_leaveCb");
function ul(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ve) {
        t = n;
        break;
      }
  }
  return t;
}
function Vr(e) {
  if (!hs(e))
    return Cn(e.type) && e.children ? ul(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && $(n.default))
      return n.default();
  }
}
function ps(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    ps(
      Cn(n.type) && Vr(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Dr(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function jr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ms(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const fn = /* @__PURE__ */ new WeakMap();
function $t(e, t, n, s, r = !1) {
  if (F(e)) {
    e.forEach(
      (O, p) => $t(
        O,
        t && (F(t) ? t[p] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (_t(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && $t(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? On(s.component) : s.el, l = r ? null : i, { i: o, r: u } = e, d = t && t.r, a = o.refs === z ? o.refs = {} : o.refs, g = o.setupState, T = /* @__PURE__ */ W(g), A = g === z ? rr : (O) => Ms(a, O) ? !1 : H(T, O), L = (O, p) => !(p && Ms(a, p));
  if (d != null && d !== u) {
    if (Rs(t), Q(d))
      a[d] = null, A(d) && (g[d] = null);
    else if (/* @__PURE__ */ pe(d)) {
      const O = t;
      L(d, O.k) && (d.value = null), O.k && (a[O.k] = null);
    }
  }
  if ($(u))
    kt(u, o, 12, [l, a]);
  else {
    const O = Q(u), p = /* @__PURE__ */ pe(u);
    if (O || p) {
      const m = () => {
        if (e.f) {
          const I = O ? A(u) ? g[u] : a[u] : L() || !e.k ? u.value : a[e.k];
          if (r)
            F(I) && ns(I, i);
          else if (F(I))
            I.includes(i) || I.push(i);
          else if (O)
            a[u] = [i], A(u) && (g[u] = a[u]);
          else {
            const B = [i];
            L(u, e.k) && (u.value = B), e.k && (a[e.k] = B);
          }
        } else O ? (a[u] = l, A(u) && (g[u] = l)) : p && (L(u, e.k) && (u.value = l), e.k && (a[e.k] = l));
      };
      if (l) {
        const I = () => {
          m(), fn.delete(e);
        };
        I.id = -1, fn.set(e, I), he(I, n);
      } else
        Rs(e), m();
    }
  }
}
function Rs(e) {
  const t = fn.get(e);
  t && (t.flags |= 8, fn.delete(e));
}
vn().requestIdleCallback;
vn().cancelIdleCallback;
const _t = (e) => !!e.type.__asyncLoader, hs = (e) => e.type.__isKeepAlive;
function fl(e, t) {
  Ur(e, "a", t);
}
function cl(e, t) {
  Ur(e, "da", t);
}
function Ur(e, t, n = oe) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Tn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      hs(r.parent.vnode) && al(s, t, n, r), r = r.parent;
  }
}
function al(e, t, n, s) {
  const r = Tn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Lr(() => {
    ns(s[t], r);
  }, n);
}
function Tn(e, t, n = oe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      We();
      const o = qt(n), u = xe(t, n, e, l);
      return o(), ke(), u;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const ze = (e) => (t, n = oe) => {
  (!Kt || e === "sp") && Tn(e, (...s) => t(...s), n);
}, dl = ze("bm"), pl = ze("m"), hl = ze(
  "bu"
), gl = ze("u"), ml = ze(
  "bum"
), Lr = ze("um"), bl = ze(
  "sp"
), _l = ze("rtg"), yl = ze("rtc");
function vl(e, t = oe) {
  Tn("ec", e, t);
}
const xl = "components", Hr = /* @__PURE__ */ Symbol.for("v-ndc");
function Sl(e) {
  return Q(e) ? wl(xl, e, !1) || e : e || Hr;
}
function wl(e, t, n = !0, s = !1) {
  const r = re || oe;
  if (r) {
    const i = r.type;
    {
      const o = lo(
        i,
        !1
      );
      if (o && (o === t || o === de(t) || o === _n(de(t))))
        return i;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      Fs(r[e] || i[e], t) || // global registration
      Fs(r.appContext[e], t)
    );
    return !l && s ? i : l;
  }
}
function Fs(e, t) {
  return e && (e[t] || e[de(t)] || e[_n(de(t))]);
}
function Oe(e, t, n, s) {
  let r;
  const i = n, l = F(e);
  if (l || Q(e)) {
    const o = l && /* @__PURE__ */ ft(e);
    let u = !1, d = !1;
    o && (u = !/* @__PURE__ */ ye(e), d = /* @__PURE__ */ Ze(e), e = xn(e)), r = new Array(e.length);
    for (let a = 0, g = e.length; a < g; a++)
      r[a] = t(
        u ? d ? vt(qe(e[a])) : qe(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, i);
  } else if (k(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (o, u) => t(o, u, void 0, i)
      );
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let u = 0, d = o.length; u < d; u++) {
        const a = o[u];
        r[u] = t(e[a], a, u, i);
      }
    }
  else
    r = [];
  return r;
}
function gt(e, t, n, s, r, i) {
  if (n == null && (n = {}), re.ce || re.parent && _t(re.parent) && re.parent.ce) {
    const d = n, a = Object.keys(d).length > 0;
    return t !== "default" && (d.name = t), V(), Ht(
      X,
      null,
      [be("slot", d, s && s())],
      a ? -2 : 64
    );
  }
  let l = e[t];
  l && l._c && (l._d = !1);
  const o = Ke.length;
  V();
  let u;
  try {
    const d = l && Br(l(n)), a = n.key || i || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    d && d.key;
    u = Ht(
      X,
      {
        key: (a && !ve(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!d && s ? "_fb" : "")
      },
      d || (s ? s() : []),
      d && e._ === 1 ? 64 : -2
    );
  } catch (d) {
    for (let a = Ke.length; a > o; a--) bs();
    throw d;
  } finally {
    l && l._c && (l._d = !0);
  }
  return u;
}
function Br(e) {
  return e.some((t) => _s(t) ? !(t.type === Ve || t.type === X && !Br(t.children)) : !0) ? e : null;
}
const Yn = (e) => e ? fi(e) ? On(e) : Yn(e.parent) : null, Vt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Yn(e.parent),
    $root: (e) => Yn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Wr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ds(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pr.bind(e.proxy)),
    $watch: (e) => ll.bind(e)
  })
), jn = (e, t) => e !== z && !e.__isScriptSetup && H(e, t), Cl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: l, type: o, appContext: u } = e;
    if (t[0] !== "$") {
      const T = l[t];
      if (T !== void 0)
        switch (T) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (jn(s, t))
          return l[t] = 1, s[t];
        if (r !== z && H(r, t))
          return l[t] = 2, r[t];
        if (H(i, t))
          return l[t] = 3, i[t];
        if (n !== z && H(n, t))
          return l[t] = 4, n[t];
        Xn && (l[t] = 0);
      }
    }
    const d = Vt[t];
    let a, g;
    if (d)
      return t === "$attrs" && le(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (a = o.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== z && H(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      g = u.config.globalProperties, H(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return jn(r, t) ? (r[t] = n, !0) : s !== z && H(s, t) ? (s[t] = n, !0) : H(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: l }
  }, o) {
    let u;
    return !!(n[o] || e !== z && o[0] !== "$" && H(e, o) || jn(t, o) || H(i, o) || H(s, o) || H(Vt, o) || H(r.config.globalProperties, o) || (u = l.__cssModules) && u[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ns(e) {
  return F(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Xn = !0;
function Tl(e) {
  const t = Wr(e), n = e.proxy, s = e.ctx;
  Xn = !1, t.beforeCreate && $s(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: l,
    watch: o,
    provide: u,
    inject: d,
    // lifecycle
    created: a,
    beforeMount: g,
    mounted: T,
    beforeUpdate: A,
    updated: L,
    activated: O,
    deactivated: p,
    beforeDestroy: m,
    beforeUnmount: I,
    destroyed: B,
    unmounted: R,
    render: te,
    renderTracked: Se,
    renderTriggered: we,
    errorCaptured: Ge,
    serverPrefetch: zt,
    // public API
    expose: Qe,
    inheritAttrs: St,
    // assets
    components: Gt,
    directives: Jt,
    filters: Pn
  } = t;
  if (d && El(d, s, null), l)
    for (const Z in l) {
      const G = l[Z];
      $(G) && (s[Z] = G.bind(n));
    }
  if (r) {
    const Z = r.call(n, n);
    k(Z) && (e.data = /* @__PURE__ */ Sn(Z));
  }
  if (Xn = !0, i)
    for (const Z in i) {
      const G = i[Z], et = $(G) ? G.bind(n, n) : $(G.get) ? G.get.bind(n, n) : $e, Yt = !$(G) && $(G.set) ? G.set.bind(n) : $e, tt = ce({
        get: et,
        set: Yt
      });
      Object.defineProperty(s, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => tt.value,
        set: (Ce) => tt.value = Ce
      });
    }
  if (o)
    for (const Z in o)
      Kr(o[Z], s, n, Z);
  if (u) {
    const Z = $(u) ? u.call(n) : u;
    Reflect.ownKeys(Z).forEach((G) => {
      sl(G, Z[G]);
    });
  }
  a && $s(a, e, "c");
  function ue(Z, G) {
    F(G) ? G.forEach((et) => Z(et.bind(n))) : G && Z(G.bind(n));
  }
  if (ue(dl, g), ue(pl, T), ue(hl, A), ue(gl, L), ue(fl, O), ue(cl, p), ue(vl, Ge), ue(yl, Se), ue(_l, we), ue(ml, I), ue(Lr, R), ue(bl, zt), F(Qe))
    if (Qe.length) {
      const Z = e.exposed || (e.exposed = {});
      Qe.forEach((G) => {
        Object.defineProperty(Z, G, {
          get: () => n[G],
          set: (et) => n[G] = et,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  te && e.render === $e && (e.render = te), St != null && (e.inheritAttrs = St), Gt && (e.components = Gt), Jt && (e.directives = Jt), zt && jr(e);
}
function El(e, t, n = $e) {
  F(e) && (e = Zn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    k(r) ? "default" in r ? i = ct(
      r.from || s,
      r.default,
      !0
    ) : i = ct(r.from || s) : i = ct(r), /* @__PURE__ */ pe(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[s] = i;
  }
}
function $s(e, t, n) {
  xe(
    F(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Kr(e, t, n, s) {
  let r = s.includes(".") ? $r(n, s) : () => n[s];
  if (Q(e)) {
    const i = t[e];
    $(i) && Vn(r, i);
  } else if ($(e))
    Vn(r, e.bind(n));
  else if (k(e))
    if (F(e))
      e.forEach((i) => Kr(i, t, n, s));
    else {
      const i = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(i) && Vn(r, i, e);
    }
}
function Wr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, o = i.get(t);
  let u;
  return o ? u = o : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach(
    (d) => cn(u, d, l, !0)
  ), cn(u, t, l)), k(t) && i.set(t, u), u;
}
function cn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && cn(e, i, n, !0), r && r.forEach(
    (l) => cn(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const o = Al[l] || n && n[l];
      e[l] = o ? o(e[l], t[l]) : t[l];
    }
  return e;
}
const Al = {
  data: Vs,
  props: Ds,
  emits: Ds,
  // objects
  methods: Pt,
  computed: Pt,
  // lifecycle
  beforeCreate: fe,
  created: fe,
  beforeMount: fe,
  mounted: fe,
  beforeUpdate: fe,
  updated: fe,
  beforeDestroy: fe,
  beforeUnmount: fe,
  destroyed: fe,
  unmounted: fe,
  activated: fe,
  deactivated: fe,
  errorCaptured: fe,
  serverPrefetch: fe,
  // assets
  components: Pt,
  directives: Pt,
  // watch
  watch: Pl,
  // provide / inject
  provide: Vs,
  inject: Ol
};
function Vs(e, t) {
  return t ? e ? function() {
    return ie(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ol(e, t) {
  return Pt(Zn(e), Zn(t));
}
function Zn(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Pt(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ds(e, t) {
  return e ? F(e) && F(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    Ns(e),
    Ns(t ?? {})
  ) : t;
}
function Pl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ie(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = fe(e[s], t[s]);
  return n;
}
function kr() {
  return {
    app: null,
    config: {
      isNativeTag: rr,
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
let Il = 0;
function Ml(e, t) {
  return function(s, r = null) {
    $(s) || (s = ie({}, s)), r != null && !k(r) && (r = null);
    const i = kr(), l = /* @__PURE__ */ new WeakSet(), o = [];
    let u = !1;
    const d = i.app = {
      _uid: Il++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: uo,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...g) {
        return l.has(a) || (a && $(a.install) ? (l.add(a), a.install(d, ...g)) : $(a) && (l.add(a), a(d, ...g))), d;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), d;
      },
      component(a, g) {
        return g ? (i.components[a] = g, d) : i.components[a];
      },
      directive(a, g) {
        return g ? (i.directives[a] = g, d) : i.directives[a];
      },
      mount(a, g, T) {
        if (!u) {
          const A = d._ceVNode || be(s, r);
          return A.appContext = i, T === !0 ? T = "svg" : T === !1 && (T = void 0), e(A, a, T), u = !0, d._container = a, a.__vue_app__ = d, On(A.component);
        }
      },
      onUnmount(a) {
        o.push(a);
      },
      unmount() {
        u && (xe(
          o,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(a, g) {
        return i.provides[a] = g, d;
      },
      runWithContext(a) {
        const g = yt;
        yt = d;
        try {
          return a();
        } finally {
          yt = g;
        }
      }
    };
    return d;
  };
}
let yt = null;
const Rl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${de(t)}Modifiers`] || e[`${dt(t)}Modifiers`];
function Fl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || z;
  let r = n;
  const i = t.startsWith("update:"), l = i && Rl(s, t.slice(7));
  l && (l.trim && (r = n.map((a) => Q(a) ? a.trim() : a)), l.number && (r = r.map(yn)));
  let o, u = s[o = Mn(t)] || // also try camelCase event handler (#2249)
  s[o = Mn(de(t))];
  !u && i && (u = s[o = Mn(dt(t))]), u && xe(
    u,
    e,
    6,
    r
  );
  const d = s[o + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, xe(
      d,
      e,
      6,
      r
    );
  }
}
const Nl = /* @__PURE__ */ new WeakMap();
function qr(e, t, n = !1) {
  const s = n ? Nl : t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let l = {}, o = !1;
  if (!$(e)) {
    const u = (d) => {
      const a = qr(d, t, !0);
      a && (o = !0, ie(l, a));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !o ? (k(e) && s.set(e, null), null) : (F(i) ? i.forEach((u) => l[u] = null) : ie(l, i), k(e) && s.set(e, l), l);
}
function En(e, t) {
  return !e || !gn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, dt(t)) || H(e, t));
}
function js(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: l,
    attrs: o,
    emit: u,
    render: d,
    renderCache: a,
    props: g,
    data: T,
    setupState: A,
    ctx: L,
    inheritAttrs: O
  } = e, p = un(e);
  let m, I;
  try {
    if (n.shapeFlag & 4) {
      const R = r || s, te = R;
      m = Fe(
        d.call(
          te,
          R,
          a,
          g,
          A,
          T,
          L
        )
      ), I = o;
    } else {
      const R = t;
      m = Fe(
        R.length > 1 ? R(
          g,
          { attrs: o, slots: l, emit: u }
        ) : R(
          g,
          null
        )
      ), I = t.props ? o : $l(o);
    }
  } catch (R) {
    Ke.length = 0, wn(R, e, 1), m = be(Ve);
  }
  let B = m;
  if (I && O !== !1) {
    const R = Object.keys(I), { shapeFlag: te } = B;
    R.length && te & 7 && (i && R.some(mn) && (I = Vl(
      I,
      i
    )), B = xt(B, I, !1, !0));
  }
  if (n.dirs && (B = xt(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const R = Cn(B.type) && Vr(B) || B;
    ps(R, n.transition);
  }
  return m = B, un(p), m;
}
const $l = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || gn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Vl = (e, t) => {
  const n = {};
  for (const s in e)
    (!mn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Dl(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: l, children: o, patchFlag: u } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? Us(s, l, d) : !!l;
    if (u & 8) {
      const a = t.dynamicProps;
      for (let g = 0; g < a.length; g++) {
        const T = a[g];
        if (zr(l, s, T) && !En(d, T))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : s === l ? !1 : s ? l ? Us(s, l, d) : !0 : !!l;
  return !1;
}
function Us(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (zr(t, e, i) && !En(n, i))
      return !0;
  }
  return !1;
}
function zr(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && k(s) && k(r) ? !Xe(s, r) : s !== r;
}
function jl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Gr = {}, Jr = () => Object.create(Gr), Yr = (e) => Object.getPrototypeOf(e) === Gr;
function Ul(e, t, n, s = !1) {
  const r = {}, i = Jr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Xr(e, t, r, i);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ zi(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Ll(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, o = /* @__PURE__ */ W(r), [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const a = e.vnode.dynamicProps;
      for (let g = 0; g < a.length; g++) {
        let T = a[g];
        if (En(e.emitsOptions, T))
          continue;
        const A = t[T];
        if (u)
          if (H(i, T))
            A !== i[T] && (i[T] = A, d = !0);
          else {
            const L = de(T);
            r[L] = Qn(
              u,
              o,
              L,
              A,
              e,
              !1
            );
          }
        else
          A !== i[T] && (i[T] = A, d = !0);
      }
    }
  } else {
    Xr(e, t, r, i) && (d = !0);
    let a;
    for (const g in o)
      (!t || // for camelCase
      !H(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = dt(g)) === g || !H(t, a))) && (u ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[a] !== void 0) && (r[g] = Qn(
        u,
        o,
        g,
        void 0,
        e,
        !0
      )) : delete r[g]);
    if (i !== o)
      for (const g in i)
        (!t || !H(t, g)) && (delete i[g], d = !0);
  }
  d && He(e.attrs, "set", "");
}
function Xr(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let l = !1, o;
  if (t)
    for (let u in t) {
      if (Mt(u))
        continue;
      const d = t[u];
      let a;
      r && H(r, a = de(u)) ? !i || !i.includes(a) ? n[a] = d : (o || (o = {}))[a] = d : En(e.emitsOptions, u) || (!(u in s) || d !== s[u]) && (s[u] = d, l = !0);
    }
  if (i) {
    const u = /* @__PURE__ */ W(n), d = o || z;
    for (let a = 0; a < i.length; a++) {
      const g = i[a];
      n[g] = Qn(
        r,
        u,
        g,
        d[g],
        e,
        !H(d, g)
      );
    }
  }
  return l;
}
function Qn(e, t, n, s, r, i) {
  const l = e[n];
  if (l != null) {
    const o = H(l, "default");
    if (o && s === void 0) {
      const u = l.default;
      if (l.type !== Function && !l.skipFactory && $(u)) {
        const { propsDefaults: d } = r;
        if (n in d)
          s = d[n];
        else {
          const a = qt(r);
          s = d[n] = u.call(
            null,
            t
          ), a();
        }
      } else
        s = u;
      r.ce && r.ce._setProp(n, s);
    }
    l[
      0
      /* shouldCast */
    ] && (i && !o ? s = !1 : l[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === dt(n)) && (s = !0));
  }
  return s;
}
const Hl = /* @__PURE__ */ new WeakMap();
function Zr(e, t, n = !1) {
  const s = n ? Hl : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, l = {}, o = [];
  let u = !1;
  if (!$(e)) {
    const a = (g) => {
      u = !0;
      const [T, A] = Zr(g, t, !0);
      ie(l, T), A && o.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !u)
    return k(e) && s.set(e, mt), mt;
  if (F(i))
    for (let a = 0; a < i.length; a++) {
      const g = de(i[a]);
      Ls(g) && (l[g] = z);
    }
  else if (i)
    for (const a in i) {
      const g = de(a);
      if (Ls(g)) {
        const T = i[a], A = l[g] = F(T) || $(T) ? { type: T } : ie({}, T), L = A.type;
        let O = !1, p = !0;
        if (F(L))
          for (let m = 0; m < L.length; ++m) {
            const I = L[m], B = $(I) && I.name;
            if (B === "Boolean") {
              O = !0;
              break;
            } else B === "String" && (p = !1);
          }
        else
          O = $(L) && L.name === "Boolean";
        A[
          0
          /* shouldCast */
        ] = O, A[
          1
          /* shouldCastTrue */
        ] = p, (O || H(A, "default")) && o.push(g);
      }
    }
  const d = [l, o];
  return k(e) && s.set(e, d), d;
}
function Ls(e) {
  return e[0] !== "$" && !Mt(e);
}
const gs = (e) => e === "_" || e === "_ctx" || e === "$stable", ms = (e) => F(e) ? e.map(Fe) : [Fe(e)], Bl = (e, t, n) => {
  if (t._n)
    return t;
  const s = Nt((...r) => ms(t(...r)), n);
  return s._c = !1, s;
}, Qr = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (gs(r)) continue;
    const i = e[r];
    if ($(i))
      t[r] = Bl(r, i, s);
    else if (i != null) {
      const l = ms(i);
      t[r] = () => l;
    }
  }
}, ei = (e, t) => {
  const n = ms(t);
  e.slots.default = () => n;
}, ti = (e, t, n) => {
  for (const s in t)
    (n || !gs(s)) && (e[s] = t[s]);
}, Kl = (e, t, n) => {
  const s = e.slots = Jr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (ti(s, t, n), n && ur(s, "_", r, !0)) : Qr(t, s);
  } else t && ei(e, t);
}, Wl = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, l = z;
  if (s.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? i = !1 : ti(r, t, n) : (i = !t.$stable, Qr(t, r)), l = t;
  } else t && (ei(e, t), l = { default: 1 });
  if (i)
    for (const o in r)
      !gs(o) && l[o] == null && delete r[o];
}, he = Jl;
function kl(e) {
  return ql(e);
}
function ql(e, t) {
  const n = vn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: l,
    createText: o,
    createComment: u,
    setText: d,
    setElementText: a,
    parentNode: g,
    nextSibling: T,
    setScopeId: A = $e,
    insertStaticContent: L
  } = e, O = (f, c, h, x = null, v = null, _ = null, C = void 0, w = null, S = !!c.dynamicChildren) => {
    if (f === c)
      return;
    f && !At(f, c) && (x = Xt(f), Ce(f, v, _, !0), f = null), c.patchFlag === -2 && (S = !1, c.dynamicChildren = null);
    const { type: y, ref: M, shapeFlag: E } = c;
    switch (y) {
      case An:
        p(f, c, h, x);
        break;
      case Ve:
        m(f, c, h, x);
        break;
      case Ln:
        f == null && I(c, h, x, C);
        break;
      case X:
        Gt(
          f,
          c,
          h,
          x,
          v,
          _,
          C,
          w,
          S
        );
        break;
      default:
        E & 1 ? te(
          f,
          c,
          h,
          x,
          v,
          _,
          C,
          w,
          S
        ) : E & 6 ? Jt(
          f,
          c,
          h,
          x,
          v,
          _,
          C,
          w,
          S
        ) : (E & 64 || E & 128) && y.process(
          f,
          c,
          h,
          x,
          v,
          _,
          C,
          w,
          S,
          Ct
        );
    }
    M != null && v ? $t(M, f && f.ref, _, c || f, !c) : M == null && f && f.ref != null && $t(f.ref, null, _, f, !0);
  }, p = (f, c, h, x) => {
    if (f == null)
      s(
        c.el = o(c.children),
        h,
        x
      );
    else {
      const v = c.el = f.el;
      c.children !== f.children && d(v, c.children);
    }
  }, m = (f, c, h, x) => {
    f == null ? s(
      c.el = u(c.children || ""),
      h,
      x
    ) : c.el = f.el;
  }, I = (f, c, h, x) => {
    [f.el, f.anchor] = L(
      f.children,
      c,
      h,
      x,
      f.el,
      f.anchor
    );
  }, B = ({ el: f, anchor: c }, h, x) => {
    let v;
    for (; f && f !== c; )
      v = T(f), s(f, h, x), f = v;
    s(c, h, x);
  }, R = ({ el: f, anchor: c }) => {
    let h;
    for (; f && f !== c; )
      h = T(f), r(f), f = h;
    r(c);
  }, te = (f, c, h, x, v, _, C, w, S) => {
    if (c.type === "svg" ? C = "svg" : c.type === "math" && (C = "mathml"), f == null)
      Se(
        c,
        h,
        x,
        v,
        _,
        C,
        w,
        S
      );
    else {
      const y = f.el && f.el._isVueCE ? f.el : null;
      try {
        y && y._beginPatch(), zt(
          f,
          c,
          v,
          _,
          C,
          w,
          S
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, Se = (f, c, h, x, v, _, C, w) => {
    let S, y;
    const { props: M, shapeFlag: E, transition: P, dirs: N } = f;
    if (S = f.el = l(
      f.type,
      _,
      M && M.is,
      M
    ), E & 8 ? a(S, f.children) : E & 16 && Ge(
      f.children,
      S,
      null,
      x,
      v,
      Un(f, _),
      C,
      w
    ), N && st(f, null, x, "created"), we(S, f, f.scopeId, C, x), M) {
      for (const q in M)
        q !== "value" && !Mt(q) && i(S, q, null, M[q], _, x);
      "value" in M && i(S, "value", null, M.value, _), (y = M.onVnodeBeforeMount) && Pe(y, x, f);
    }
    N && st(f, null, x, "beforeMount");
    const U = zl(v, P);
    U && P.beforeEnter(S), s(S, c, h), ((y = M && M.onVnodeMounted) || U || N) && he(() => {
      y && Pe(y, x, f), U && P.enter(S), N && st(f, null, x, "mounted");
    }, v);
  }, we = (f, c, h, x, v) => {
    if (h && A(f, h), x)
      for (let _ = 0; _ < x.length; _++)
        A(f, x[_]);
    if (v) {
      let _ = v.subTree;
      if (c === _ || ii(_.type) && (_.ssContent === c || _.ssFallback === c)) {
        const C = v.vnode;
        we(
          f,
          C,
          C.scopeId,
          C.slotScopeIds,
          v.parent
        );
      }
    }
  }, Ge = (f, c, h, x, v, _, C, w, S = 0) => {
    for (let y = S; y < f.length; y++) {
      const M = f[y] = w ? Ue(f[y]) : Fe(f[y]);
      O(
        null,
        M,
        c,
        h,
        x,
        v,
        _,
        C,
        w
      );
    }
  }, zt = (f, c, h, x, v, _, C) => {
    const w = c.el = f.el;
    let { patchFlag: S, dynamicChildren: y, dirs: M } = c;
    S |= f.patchFlag & 16;
    const E = f.props || z, P = c.props || z;
    let N;
    if (h && rt(h, !1), (N = P.onVnodeBeforeUpdate) && Pe(N, h, c, f), M && st(c, f, h, "beforeUpdate"), h && rt(h, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!f.dynamicChildren || f.dynamicChildren.length !== y.length) && (S = 0, C = !1, y = null), (E.innerHTML && P.innerHTML == null || E.textContent && P.textContent == null) && a(w, ""), y ? Qe(
      f.dynamicChildren,
      y,
      w,
      h,
      x,
      Un(c, v),
      _
    ) : C || G(
      f,
      c,
      w,
      null,
      h,
      x,
      Un(c, v),
      _,
      !1
    ), S > 0) {
      if (S & 16)
        St(w, E, P, h, v);
      else if (S & 2 && E.class !== P.class && i(w, "class", null, P.class, v), S & 4 && i(w, "style", E.style, P.style, v), S & 8) {
        const U = c.dynamicProps;
        for (let q = 0; q < U.length; q++) {
          const K = U[q], ee = E[K], ne = P[K];
          (ne !== ee || K === "value") && i(w, K, ee, ne, v, h);
        }
      }
      S & 1 && f.children !== c.children && a(w, c.children);
    } else !C && y == null && St(w, E, P, h, v);
    ((N = P.onVnodeUpdated) || M) && he(() => {
      N && Pe(N, h, c, f), M && st(c, f, h, "updated");
    }, x);
  }, Qe = (f, c, h, x, v, _, C) => {
    for (let w = 0; w < c.length; w++) {
      const S = f[w], y = c[w], M = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === X || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !At(S, y) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? g(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      O(
        S,
        y,
        M,
        null,
        x,
        v,
        _,
        C,
        !0
      );
    }
  }, St = (f, c, h, x, v) => {
    if (c !== h) {
      if (c !== z)
        for (const _ in c)
          !Mt(_) && !(_ in h) && i(
            f,
            _,
            c[_],
            null,
            v,
            x
          );
      for (const _ in h) {
        if (Mt(_)) continue;
        const C = h[_], w = c[_];
        C !== w && _ !== "value" && i(f, _, w, C, v, x);
      }
      "value" in h && i(f, "value", c.value, h.value, v);
    }
  }, Gt = (f, c, h, x, v, _, C, w, S) => {
    const y = c.el = f ? f.el : o(""), M = c.anchor = f ? f.anchor : o("");
    let { patchFlag: E, dynamicChildren: P, slotScopeIds: N } = c;
    N && (w = w ? w.concat(N) : N), f == null ? (s(y, h, x), s(M, h, x), Ge(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      c.children || [],
      h,
      M,
      v,
      _,
      C,
      w,
      S
    )) : E > 0 && E & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === P.length ? (Qe(
      f.dynamicChildren,
      P,
      h,
      v,
      _,
      C,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (c.key != null || v && c === v.subTree) && ni(
      f,
      c,
      !0
      /* shallow */
    )) : G(
      f,
      c,
      h,
      M,
      v,
      _,
      C,
      w,
      S
    );
  }, Jt = (f, c, h, x, v, _, C, w, S) => {
    c.slotScopeIds = w, f == null ? c.shapeFlag & 512 ? v.ctx.activate(
      c,
      h,
      x,
      C,
      S
    ) : Pn(
      c,
      h,
      x,
      v,
      _,
      C,
      S
    ) : ys(f, c, S);
  }, Pn = (f, c, h, x, v, _, C) => {
    const w = f.component = eo(
      f,
      x,
      v
    );
    if (hs(f) && (w.ctx.renderer = Ct), no(w, !1, C), w.asyncDep) {
      if (v && v.registerDep(w, ue, C), !f.el) {
        const S = w.subTree = be(Ve);
        m(null, S, c, h), f.placeholder = S.el;
      }
    } else
      ue(
        w,
        f,
        c,
        h,
        v,
        _,
        C
      );
  }, ys = (f, c, h) => {
    const x = c.component = f.component;
    if (Dl(f, c, h))
      if (x.asyncDep && !x.asyncResolved) {
        Z(x, c, h);
        return;
      } else
        x.next = c, x.update();
    else
      c.el = f.el, x.vnode = c;
  }, ue = (f, c, h, x, v, _, C) => {
    const w = () => {
      if (f.isMounted) {
        let { next: E, bu: P, u: N, parent: U, vnode: q } = f;
        {
          const Ee = si(f);
          if (Ee) {
            E && (E.el = q.el, Z(f, E, C)), Ee.asyncDep.then(() => {
              he(() => {
                f.isUnmounted || y();
              }, v);
            });
            return;
          }
        }
        let K = E, ee;
        rt(f, !1), E ? (E.el = q.el, Z(f, E, C)) : E = q, P && sn(P), (ee = E.props && E.props.onVnodeBeforeUpdate) && Pe(ee, U, E, q), rt(f, !0);
        const ne = js(f), Te = f.subTree;
        f.subTree = ne, O(
          Te,
          ne,
          // parent may have changed if it's in a teleport
          g(Te.el),
          // anchor may have changed if it's in a fragment
          Xt(Te),
          f,
          v,
          _
        ), E.el = ne.el, K === null && jl(f, ne.el), N && he(N, v), (ee = E.props && E.props.onVnodeUpdated) && he(
          () => Pe(ee, U, E, q),
          v
        );
      } else {
        let E;
        const { el: P, props: N } = c, { bm: U, m: q, parent: K, root: ee, type: ne } = f, Te = _t(c);
        rt(f, !1), U && sn(U), !Te && (E = N && N.onVnodeBeforeMount) && Pe(E, K, c), rt(f, !0);
        {
          ee.ce && ee.ce._hasShadowRoot() && ee.ce._injectChildStyle(
            ne,
            f.parent ? f.parent.type : void 0
          );
          const Ee = f.subTree = js(f);
          O(
            null,
            Ee,
            h,
            x,
            f,
            v,
            _
          ), c.el = Ee.el;
        }
        if (q && he(q, v), !Te && (E = N && N.onVnodeMounted)) {
          const Ee = c;
          he(
            () => Pe(E, K, Ee),
            v
          );
        }
        (c.shapeFlag & 256 || K && _t(K.vnode) && K.vnode.shapeFlag & 256) && f.a && he(f.a, v), f.isMounted = !0, c = h = x = null;
      }
    };
    f.scope.on();
    const S = f.effect = new dr(w);
    f.scope.off();
    const y = f.update = S.run.bind(S), M = f.job = S.runIfDirty.bind(S);
    M.i = f, M.id = f.uid, S.scheduler = () => ds(M), rt(f, !0), y();
  }, Z = (f, c, h) => {
    c.component = f;
    const x = f.vnode.props;
    f.vnode = c, f.next = null, Ll(f, c.props, x, h), Wl(f, c.children, h), We(), Is(f), ke();
  }, G = (f, c, h, x, v, _, C, w, S = !1) => {
    const y = f && f.children, M = f ? f.shapeFlag : 0, E = c.children, { patchFlag: P, shapeFlag: N } = c;
    if (P > 0) {
      if (P & 128) {
        Yt(
          y,
          E,
          h,
          x,
          v,
          _,
          C,
          w,
          S
        );
        return;
      } else if (P & 256) {
        et(
          y,
          E,
          h,
          x,
          v,
          _,
          C,
          w,
          S
        );
        return;
      }
    }
    N & 8 ? (M & 16 && wt(y, v, _), E !== y && a(h, E)) : M & 16 ? N & 16 ? Yt(
      y,
      E,
      h,
      x,
      v,
      _,
      C,
      w,
      S
    ) : wt(y, v, _, !0) : (M & 8 && a(h, ""), N & 16 && Ge(
      E,
      h,
      x,
      v,
      _,
      C,
      w,
      S
    ));
  }, et = (f, c, h, x, v, _, C, w, S) => {
    f = f || mt, c = c || mt;
    const y = f.length, M = c.length, E = Math.min(y, M);
    let P;
    for (P = 0; P < E; P++) {
      const N = c[P] = S ? Ue(c[P]) : Fe(c[P]);
      O(
        f[P],
        N,
        h,
        null,
        v,
        _,
        C,
        w,
        S
      );
    }
    y > M ? wt(
      f,
      v,
      _,
      !0,
      !1,
      E
    ) : Ge(
      c,
      h,
      x,
      v,
      _,
      C,
      w,
      S,
      E
    );
  }, Yt = (f, c, h, x, v, _, C, w, S) => {
    let y = 0;
    const M = c.length;
    let E = f.length - 1, P = M - 1;
    for (; y <= E && y <= P; ) {
      const N = f[y], U = c[y] = S ? Ue(c[y]) : Fe(c[y]);
      if (At(N, U))
        O(
          N,
          U,
          h,
          null,
          v,
          _,
          C,
          w,
          S
        );
      else
        break;
      y++;
    }
    for (; y <= E && y <= P; ) {
      const N = f[E], U = c[P] = S ? Ue(c[P]) : Fe(c[P]);
      if (At(N, U))
        O(
          N,
          U,
          h,
          null,
          v,
          _,
          C,
          w,
          S
        );
      else
        break;
      E--, P--;
    }
    if (y > E) {
      if (y <= P) {
        const N = P + 1, U = N < M ? c[N].el : x;
        for (; y <= P; )
          O(
            null,
            c[y] = S ? Ue(c[y]) : Fe(c[y]),
            h,
            U,
            v,
            _,
            C,
            w,
            S
          ), y++;
      }
    } else if (y > P)
      for (; y <= E; )
        Ce(f[y], v, _, !0), y++;
    else {
      const N = y, U = y, q = /* @__PURE__ */ new Map();
      for (y = U; y <= P; y++) {
        const ge = c[y] = S ? Ue(c[y]) : Fe(c[y]);
        ge.key != null && q.set(ge.key, y);
      }
      let K, ee = 0;
      const ne = P - U + 1;
      let Te = !1, Ee = 0;
      const Tt = new Array(ne);
      for (y = 0; y < ne; y++) Tt[y] = 0;
      for (y = N; y <= E; y++) {
        const ge = f[y];
        if (ee >= ne) {
          Ce(ge, v, _, !0);
          continue;
        }
        let Ae;
        if (ge.key != null)
          Ae = q.get(ge.key);
        else
          for (K = U; K <= P; K++)
            if (Tt[K - U] === 0 && At(ge, c[K])) {
              Ae = K;
              break;
            }
        Ae === void 0 ? Ce(ge, v, _, !0) : (Tt[Ae - U] = y + 1, Ae >= Ee ? Ee = Ae : Te = !0, O(
          ge,
          c[Ae],
          h,
          null,
          v,
          _,
          C,
          w,
          S
        ), ee++);
      }
      const Ss = Te ? Gl(Tt) : mt;
      for (K = Ss.length - 1, y = ne - 1; y >= 0; y--) {
        const ge = U + y, Ae = c[ge], ws = c[ge + 1], Cs = ge + 1 < M ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ws.el || ri(ws)
        ) : x;
        Tt[y] === 0 ? O(
          null,
          Ae,
          h,
          Cs,
          v,
          _,
          C,
          w,
          S
        ) : Te && (K < 0 || y !== Ss[K] ? tt(Ae, h, Cs, 2) : K--);
      }
    }
  }, tt = (f, c, h, x, v = null) => {
    const { el: _, type: C, transition: w, children: S, shapeFlag: y } = f;
    if (y & 6) {
      tt(f.component.subTree, c, h, x);
      return;
    }
    if (y & 128) {
      f.suspense.move(c, h, x);
      return;
    }
    if (y & 64) {
      C.move(f, c, h, Ct);
      return;
    }
    if (C === X) {
      s(_, c, h);
      for (let E = 0; E < S.length; E++)
        tt(S[E], c, h, x);
      s(f.anchor, c, h);
      return;
    }
    if (C === Ln) {
      B(f, c, h);
      return;
    }
    if (x !== 2 && y & 1 && w)
      if (x === 0)
        w.persisted && !_[Dn] ? s(_, c, h) : (w.beforeEnter(_), s(_, c, h), he(() => w.enter(_), v));
      else {
        const { leave: E, delayLeave: P, afterLeave: N } = w, U = () => {
          f.ctx.isUnmounted ? r(_) : s(_, c, h);
        }, q = () => {
          const K = _._isLeaving || !!_[Dn];
          _._isLeaving && _[Dn](
            !0
            /* cancelled */
          ), w.persisted && !K ? U() : E(_, () => {
            U(), N && N();
          });
        };
        P ? P(_, U, q) : q();
      }
    else
      s(_, c, h);
  }, Ce = (f, c, h, x = !1, v = !1) => {
    const {
      type: _,
      props: C,
      ref: w,
      children: S,
      dynamicChildren: y,
      shapeFlag: M,
      patchFlag: E,
      dirs: P,
      cacheIndex: N,
      memo: U
    } = f;
    if (E === -2 && (v = !1), w != null && (We(), $t(w, null, h, f, !0), ke()), N != null && (c.renderCache[N] = void 0), M & 256) {
      c.ctx.deactivate(f);
      return;
    }
    const q = M & 1 && P, K = !_t(f);
    let ee;
    if (K && (ee = C && C.onVnodeBeforeUnmount) && Pe(ee, c, f), M & 6)
      gi(f.component, h, x);
    else {
      if (M & 128) {
        f.suspense.unmount(h, x);
        return;
      }
      q && st(f, null, c, "beforeUnmount"), M & 64 ? f.type.remove(
        f,
        c,
        h,
        Ct,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== X || E > 0 && E & 64) ? wt(
        y,
        c,
        h,
        !1,
        !0
      ) : (_ === X && E & 384 || !v && M & 16) && wt(S, c, h), x && vs(f);
    }
    const ne = U != null && N == null;
    (K && (ee = C && C.onVnodeUnmounted) || q || ne) && he(() => {
      ee && Pe(ee, c, f), q && st(f, null, c, "unmounted"), ne && (f.el = null);
    }, h);
  }, vs = (f) => {
    const { type: c, el: h, anchor: x, transition: v } = f;
    if (c === X) {
      hi(h, x);
      return;
    }
    if (c === Ln) {
      R(f);
      return;
    }
    const _ = () => {
      r(h), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (f.shapeFlag & 1 && v && !v.persisted) {
      const { leave: C, delayLeave: w } = v, S = () => C(h, _);
      w ? w(f.el, _, S) : S();
    } else
      _();
  }, hi = (f, c) => {
    let h;
    for (; f !== c; )
      h = T(f), r(f), f = h;
    r(c);
  }, gi = (f, c, h) => {
    const { bum: x, scope: v, job: _, subTree: C, um: w, m: S, a: y } = f;
    Hs(S), Hs(y), x && sn(x), v.stop(), _ && (_.flags |= 8, Ce(C, f, c, h)), w && he(w, c), he(() => {
      f.isUnmounted = !0;
    }, c);
  }, wt = (f, c, h, x = !1, v = !1, _ = 0) => {
    for (let C = _; C < f.length; C++)
      Ce(f[C], c, h, x, v);
  }, Xt = (f) => {
    if (f.shapeFlag & 6)
      return Xt(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const c = T(f.anchor || f.el), h = c && c[ol];
    return h ? T(h) : c;
  };
  let In = !1;
  const xs = (f, c, h) => {
    let x;
    f == null ? c._vnode && (Ce(c._vnode, null, null, !0), x = c._vnode.component) : O(
      c._vnode || null,
      f,
      c,
      null,
      null,
      null,
      h
    ), c._vnode = f, In || (In = !0, Is(x), Mr(), In = !1);
  }, Ct = {
    p: O,
    um: Ce,
    m: tt,
    r: vs,
    mt: Pn,
    mc: Ge,
    pc: G,
    pbc: Qe,
    n: Xt,
    o: e
  };
  return {
    render: xs,
    hydrate: void 0,
    createApp: Ml(xs)
  };
}
function Un({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function rt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function zl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ni(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (F(s) && F(r))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let o = r[i];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[i] = Ue(r[i]), o.el = l.el), !n && o.patchFlag !== -2 && ni(l, o)), o.type === An && (o.patchFlag === -1 && (o = r[i] = Ue(o)), o.el = l.el), o.type === Ve && !o.el && (o.el = l.el);
    }
}
function Gl(e) {
  const t = e.slice(), n = [0];
  let s, r, i, l, o;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const d = e[s];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, l = n.length - 1; i < l; )
        o = i + l >> 1, e[n[o]] < d ? i = o + 1 : l = o;
      d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, l = n[i - 1]; i-- > 0; )
    n[i] = l, l = t[l];
  return n;
}
function si(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : si(t);
}
function Hs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ri(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ri(t.subTree) : null;
}
const ii = (e) => e.__isSuspense;
function Jl(e, t) {
  t && t.pendingBranch ? F(e) ? t.effects.push(...e) : t.effects.push(e) : nl(e);
}
const X = /* @__PURE__ */ Symbol.for("v-fgt"), An = /* @__PURE__ */ Symbol.for("v-txt"), Ve = /* @__PURE__ */ Symbol.for("v-cmt"), Ln = /* @__PURE__ */ Symbol.for("v-stc"), Ke = [];
let me = null;
function V(e = !1) {
  Ke.push(me = e ? null : []);
}
function bs() {
  Ke.pop(), me = Ke[Ke.length - 1] || null;
}
let Lt = 1;
function Bs(e, t = !1) {
  Lt += e, e < 0 && me && t && (me.hasOnce = !0);
}
function li(e) {
  return e.dynamicChildren = Lt > 0 ? me || mt : null, bs(), Lt > 0 && me && me.push(e), e;
}
function D(e, t, n, s, r, i) {
  return li(
    b(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function Ht(e, t, n, s, r) {
  return li(
    be(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function _s(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function At(e, t) {
  return e.type === t.type && e.key === t.key;
}
const oi = ({ key: e }) => e ?? null, rn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Q(e) || /* @__PURE__ */ pe(e) || $(e) ? { i: re, r: e, k: t, f: !!n } : e : null);
function b(e, t = null, n = null, s = 0, r = null, i = e === X ? 0 : 1, l = !1, o = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && oi(t),
    ref: t && rn(t),
    scopeId: Fr,
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
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: re
  };
  return o ? (an(u, n), i & 128 && e.normalize(u)) : n && (u.shapeFlag |= Q(n) ? 8 : 16), Lt > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && me.push(u), u;
}
const be = Yl;
function Yl(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === Hr) && (e = Ve), _s(e)) {
    const o = xt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && an(o, n), Lt > 0 && !i && me && (o.shapeFlag & 6 ? me[me.indexOf(e)] = o : me.push(o)), o.patchFlag = -2, o;
  }
  if (oo(e) && (e = e.__vccOpts), t) {
    t = Xl(t);
    let { class: o, style: u } = t;
    o && !Q(o) && (t.class = is(o)), k(u) && (/* @__PURE__ */ as(u) && !F(u) && (u = ie({}, u)), t.style = rs(u));
  }
  const l = Q(e) ? 1 : ii(e) ? 128 : Cn(e) ? 64 : k(e) ? 4 : $(e) ? 2 : 0;
  return b(
    e,
    t,
    n,
    s,
    r,
    l,
    i,
    !0
  );
}
function Xl(e) {
  return e ? /* @__PURE__ */ as(e) || Yr(e) ? ie({}, e) : e : null;
}
function xt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: l, children: o, transition: u } = e, d = t ? ui(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && oi(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? F(i) ? i.concat(rn(t)) : [i, rn(t)] : rn(t)
    ) : i,
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
    patchFlag: t && e.type !== X ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && xt(e.ssContent),
    ssFallback: e.ssFallback && xt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && s && ps(
    a,
    u.clone(a)
  ), a;
}
function J(e = " ", t = 0) {
  return be(An, null, e, t);
}
function Re(e = "", t = !1) {
  return t ? (V(), Ht(Ve, null, e)) : be(Ve, null, e);
}
function Fe(e) {
  return e == null || typeof e == "boolean" ? be(Ve) : F(e) ? be(
    X,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : _s(e) ? Ue(e) : be(An, null, String(e));
}
function Ue(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xt(e);
}
function an(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (F(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), an(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Yr(t) ? t._ctx = re : r === 3 && re && (re.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if ($(t)) {
    if (s & 65) {
      an(e, { default: t });
      return;
    }
    t = { default: t, _ctx: re }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [J(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function ui(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = is([t.class, s.class]));
      else if (r === "style")
        t.style = rs([t.style, s.style]);
      else if (gn(r)) {
        const i = t[r], l = s[r];
        l && i !== l && !(F(i) && i.includes(l)) ? t[r] = i ? [].concat(i, l) : l : l == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !mn(r) && (t[r] = l);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Pe(e, t, n, s = null) {
  xe(e, t, 7, [
    n,
    s
  ]);
}
const Zl = kr();
let Ql = 0;
function eo(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Zl, i = {
    uid: Ql++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Oi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Zr(s, r),
    emitsOptions: qr(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: z,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: z,
    data: z,
    props: z,
    attrs: z,
    slots: z,
    refs: z,
    setupState: z,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Fl.bind(null, i), e.ce && e.ce(i), i;
}
let oe = null;
const to = () => oe || re;
let dn, Bt;
{
  const e = vn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((l) => l(i)) : r[0](i);
    };
  };
  dn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => oe = n
  ), Bt = t(
    "__VUE_SSR_SETTERS__",
    (n) => Kt = n
  );
}
const qt = (e) => {
  const t = oe;
  return dn(e), e.scope.on(), () => {
    e.scope.off(), dn(t);
  };
}, Ks = () => {
  oe && oe.scope.off(), dn(null);
};
function fi(e) {
  return e.vnode.shapeFlag & 4;
}
let Kt = !1;
function no(e, t = !1, n = !1) {
  t && Bt(t);
  const { props: s, children: r } = e.vnode, i = fi(e);
  Ul(e, s, i, t), Kl(e, r, n || t);
  const l = i ? so(e, t) : void 0;
  return t && Bt(!1), l;
}
function so(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Cl);
  const { setup: s } = n;
  if (s) {
    We();
    const r = e.setupContext = s.length > 1 ? io(e) : null, i = qt(e), l = kt(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = ir(l);
    if (ke(), i(), (o || e.sp) && !_t(e) && jr(e), o) {
      if (l.then(Ks, Ks), t)
        return l.then((u) => {
          Bt(!0);
          try {
            Ws(e, u, t);
          } finally {
            Bt(!1);
          }
        }).catch((u) => {
          wn(u, e, 0);
        });
      e.asyncDep = l;
    } else
      Ws(e, l);
  } else
    ci(e);
}
function Ws(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : k(t) && (e.setupState = Ar(t)), ci(e);
}
function ci(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || $e);
  {
    const r = qt(e);
    We();
    try {
      Tl(e);
    } finally {
      ke(), r();
    }
  }
}
const ro = {
  get(e, t) {
    return le(e, "get", ""), e[t];
  }
};
function io(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ro),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function On(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ar(Gi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Vt)
        return Vt[n](e);
    },
    has(t, n) {
      return n in t || n in Vt;
    }
  })) : e.proxy;
}
function lo(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function oo(e) {
  return $(e) && "__vccOpts" in e;
}
const ce = (e, t) => /* @__PURE__ */ Xi(e, t, Kt), uo = "3.5.42";
let es;
const ks = typeof window < "u" && window.trustedTypes;
if (ks)
  try {
    es = /* @__PURE__ */ ks.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ai = es ? (e) => es.createHTML(e) : (e) => e, fo = "http://www.w3.org/2000/svg", co = "http://www.w3.org/1998/Math/MathML", je = typeof document < "u" ? document : null, qs = je && /* @__PURE__ */ je.createElement("template"), ao = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? je.createElementNS(fo, e) : t === "mathml" ? je.createElementNS(co, e) : n ? je.createElement(e, { is: n }) : je.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => je.createTextNode(e),
  createComment: (e) => je.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => je.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const l = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      qs.innerHTML = ai(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const o = qs.content;
      if (s === "svg" || s === "mathml") {
        const u = o.firstChild;
        for (; u.firstChild; )
          o.appendChild(u.firstChild);
        o.removeChild(u);
      }
      t.insertBefore(o, n);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, po = /* @__PURE__ */ Symbol("_vtc");
function ho(e, t, n) {
  const s = e[po];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const zs = /* @__PURE__ */ Symbol("_vod"), go = /* @__PURE__ */ Symbol("_vsh"), mo = /* @__PURE__ */ Symbol(""), bo = /(?:^|;)\s*display\s*:/;
function _o(e, t, n) {
  const s = e.style, r = Q(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (Q(t))
        for (const l of t.split(";")) {
          const o = l.slice(0, l.indexOf(":")).trim();
          n[o] == null && It(s, o, "");
        }
      else
        for (const l in t)
          n[l] == null && It(s, l, "");
    for (const l in n) {
      l === "display" && (i = !0);
      const o = n[l];
      o != null ? vo(
        e,
        l,
        !Q(t) && t ? t[l] : void 0,
        o
      ) || It(s, l, o) : It(s, l, "");
    }
  } else if (r) {
    if (t !== n) {
      const l = s[mo];
      l && (n += ";" + l), s.cssText = n, i = bo.test(n);
    }
  } else t && e.removeAttribute("style");
  zs in e && (e[zs] = i ? s.display : "", e[go] && (s.display = "none"));
}
const tn = /\s*!important$/;
function It(e, t, n) {
  if (F(n))
    n.forEach((s) => It(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    tn.test(n) ? e.setProperty(t, n.replace(tn, ""), "important") : e.setProperty(t, n);
  else {
    const s = yo(e, t);
    tn.test(n) ? e.setProperty(
      dt(s),
      n.replace(tn, ""),
      "important"
    ) : e[s] = n;
  }
}
const Gs = ["Webkit", "Moz", "ms"], Hn = {};
function yo(e, t) {
  const n = Hn[t];
  if (n)
    return n;
  let s = de(t);
  if (s !== "filter" && s in e)
    return Hn[t] = s;
  s = _n(s);
  for (let r = 0; r < Gs.length; r++) {
    const i = Gs[r] + s;
    if (i in e)
      return Hn[t] = i;
  }
  return t;
}
function vo(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Q(s) && n === s;
}
const Js = "http://www.w3.org/1999/xlink";
function Ys(e, t, n, s, r, i = Ti(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Js, t.slice(6, t.length)) : e.setAttributeNS(Js, t, n) : n == null || i && !fr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ve(n) ? String(n) : n
  );
}
function Xs(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ai(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const o = i === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = fr(n) : n == null && o === "string" ? (n = "", l = !0) : o === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(r || t);
}
function lt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function xo(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Zs = /* @__PURE__ */ Symbol("_vei");
function So(e, t, n, s, r = null) {
  const i = e[Zs] || (e[Zs] = {}), l = i[t];
  if (s && l)
    l.value = s;
  else {
    const [o, u] = To(t);
    if (s) {
      const d = i[t] = Oo(
        s,
        r
      );
      lt(e, o, d, u);
    } else l && (xo(e, o, l, u), i[t] = void 0);
  }
}
const wo = /(Once|Passive|Capture)$/, Co = /^on:?(?:Once|Passive|Capture)$/;
function To(e) {
  let t, n;
  for (; (n = e.match(wo)) && !Co.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : dt(e.slice(2)), t];
}
let Bn = 0;
const Eo = /* @__PURE__ */ Promise.resolve(), Ao = () => Bn || (Eo.then(() => Bn = 0), Bn = Date.now());
function Oo(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const r = n.value;
    if (F(r)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        i.call(s), s._stopped = !0;
      };
      const l = r.slice(), o = [s];
      for (let u = 0; u < l.length && !s._stopped; u++) {
        const d = l[u];
        d && xe(
          d,
          t,
          5,
          o
        );
      }
    } else
      xe(
        r,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = Ao(), n;
}
const Qs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Po = (e, t, n, s, r, i) => {
  const l = r === "svg";
  t === "class" ? ho(e, s, l) : t === "style" ? _o(e, n, s) : gn(t) ? mn(t) || So(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Io(e, t, s, l)) ? (Xs(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ys(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Mo(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Q(s))) ? Xs(e, de(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ys(e, t, s, l));
};
function Io(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qs(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Qs(t) && Q(n) ? !1 : t in e;
}
function Mo(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = de(t);
  return Array.isArray(n) ? n.some((r) => de(r) === s) : Object.keys(n).some((r) => de(r) === s);
}
const pn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return F(t) ? (n) => sn(t, n) : t;
};
function Ro(e) {
  e.target.composing = !0;
}
function er(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ot = /* @__PURE__ */ Symbol("_assign"), nn = /* @__PURE__ */ Symbol("_initialValue");
function Kn(e, t, n) {
  return t && (e = e.trim()), n && (e = yn(e)), e;
}
const tr = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e.parentNode && (e.type === "text" ? e[nn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[nn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[ot] = pn(r);
    const i = s || r.props && r.props.type === "number";
    lt(e, t ? "change" : "input", (l) => {
      l.target.composing || e[ot](Kn(e.value, n, i));
    }), (n || i) && lt(e, "change", () => {
      e.value = Kn(e.value, n, i);
    }), t || (lt(e, "compositionstart", Ro), lt(e, "compositionend", er), lt(e, "change", er));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const r = t ?? "", i = e[nn];
    delete e[nn], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[ot](Kn(e.value, n, s)) : e.value = r;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, l) {
    if (e[ot] = pn(l), e.composing) return;
    const o = (i || e.type === "number") && !/^0\d/.test(e.value) ? yn(e.value) : e.value, u = t ?? "";
    if (o === u)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === u) || (e.value = u);
  }
}, Ot = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, lt(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => n ? yn(hn(u)) : hn(u)
      ), i = e.multiple, l = i ? at(e._modelValue) ? new Set(r) : r : r[0], o = e._pendingValue = [
        i,
        i ? F(l) ? r.slice() : r : l
      ];
      try {
        e[ot](l);
      } finally {
        Pr(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[ot] = pn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    nr(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[ot] = pn(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Fo(t, n[1], n[0])) && nr(e, t);
  }
};
function Fo(e, t, n) {
  if (!n || F(e)) return Xe(e, t);
  if (at(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function nr(e, t) {
  const n = e.multiple, s = F(t);
  if (!(n && !s && !at(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const l = e.options[r], o = hn(l);
      if (n)
        if (s) {
          const u = typeof o;
          u === "string" || u === "number" ? l.selected = t.some((d) => String(d) === String(o)) : l.selected = Ai(t, o) > -1;
        } else
          l.selected = t.has(o);
      else if (Xe(hn(l), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function hn(e) {
  return "_value" in e ? e._value : e.value;
}
const No = /* @__PURE__ */ ie({ patchProp: Po }, ao);
let sr;
function $o() {
  return sr || (sr = kl(No));
}
const Vo = ((...e) => {
  const t = $o().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = jo(s);
    if (!r) return;
    const i = t._component;
    !$(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const l = n(r, !1, Do(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
});
function Do(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function jo(e) {
  return Q(e) ? document.querySelector(e) : e;
}
function Uo(e, t, n) {
  const s = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(s))
    return window._nc_initial_state.get(s);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const r = document.querySelector(s);
  if (r === null) {
    if (n !== void 0)
      return n;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const i = JSON.parse(atob(r.value));
    return window._nc_initial_state.set(s, i), i;
  } catch (i) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: i }), n !== void 0)
      return n;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: i });
  }
}
const Lo = /* @__PURE__ */ Symbol(""), [Ho] = window.OC?.config?.version?.split(".") ?? [], di = Number.parseInt(Ho ?? "35"), Bo = di < 32, Ko = di < 34, Wo = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function ko() {
  return ct(Wo, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const pi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, qo = { class: "button-vue__wrapper" }, zo = { class: "button-vue__icon" }, Go = { class: "button-vue__text" }, Jo = /* @__PURE__ */ Dr({
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
    const n = e, s = t, { formBoxItemClass: r } = ko(), i = ct(Lo, null) !== null, l = ce(() => i && n.to ? "RouterLink" : n.href ? "a" : "button"), o = ce(() => l.value === "button" && typeof n.pressed == "boolean"), u = ce(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), d = ce(() => u.value.startsWith("tertiary")), a = ce(() => n.alignment.split("-")[0]), g = ce(() => n.alignment.includes("-")), T = ct("NcPopover:trigger:attrs", () => ({}), !1), A = ce(() => T()), L = ce(() => {
      if (l.value === "RouterLink")
        return {
          to: n.to,
          activeClass: "active"
        };
      if (l.value === "a")
        return {
          href: n.href || "#",
          target: n.target,
          rel: "nofollow noreferrer noopener",
          download: n.download || void 0
        };
      if (l.value === "button")
        return {
          ...A.value,
          "aria-pressed": n.pressed,
          type: n.type,
          disabled: n.disabled
        };
    });
    function O(p) {
      o.value && s("update:pressed", !n.pressed), s("click", p);
    }
    return (p, m) => (V(), Ht(Sl(l.value), ui({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${u.value}`]: u.value,
          "button-vue--tertiary": d.value,
          "button-vue--wide": e.wide,
          [`button-vue--${a.value}`]: a.value !== "center",
          "button-vue--reverse": g.value,
          "button-vue--legacy": Ne(Bo),
          "button-vue--legacy34": Ne(Ko)
        },
        Ne(r)
      ]],
      "aria-label": e.ariaLabel
    }, L.value, { onClick: O }), {
      default: Nt(() => [
        b("span", qo, [
          b("span", zo, [
            gt(p.$slots, "icon", {}, void 0, !0)
          ]),
          b("span", Go, [
            gt(p.$slots, "default", {}, () => [
              J(j(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Wn = /* @__PURE__ */ pi(Jo, [["__scopeId", "data-v-47ce59a3"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function Yo() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Xo = ["aria-labelledby"], Zo = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, Qo = ["id"], eu = {
  key: 2,
  class: "empty-content__description"
}, tu = {
  key: 3,
  class: "empty-content__action"
}, nu = /* @__PURE__ */ Dr({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = Yo();
    return (n, s) => (V(), D("div", {
      "aria-labelledby": Ne(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (V(), D("div", Zo, [
        gt(n.$slots, "icon", {}, void 0)
      ])) : Re("", !0),
      e.name !== "" || n.$slots.name ? (V(), D("div", {
        key: 1,
        id: Ne(t),
        class: "empty-content__name"
      }, [
        gt(n.$slots, "name", {}, () => [
          J(j(e.name), 1)
        ])
      ], 8, Qo)) : Re("", !0),
      e.description !== "" || n.$slots.description ? (V(), D("p", eu, [
        gt(n.$slots, "description", {}, () => [
          J(j(e.description), 1)
        ])
      ])) : Re("", !0),
      n.$slots.action ? (V(), D("div", tu, [
        gt(n.$slots, "action", {}, void 0)
      ])) : Re("", !0)
    ], 8, Xo));
  }
}), su = /* @__PURE__ */ pi(nu, [["__scopeId", "data-v-8609a4c1"]]), ru = { class: "library-hero" }, iu = { class: "library-hero-actions" }, lu = {
  class: "library-panel",
  "aria-label": "Publication catalogue"
}, ou = {
  method: "get",
  class: "library-filter-bar",
  "aria-label": "Catalogue search and filters"
}, uu = ["value"], fu = ["value"], cu = ["value"], au = ["value"], du = ["value"], pu = ["value"], hu = {
  class: "library-pagination",
  "aria-label": "Catalogue pagination"
}, gu = ["href"], mu = {
  key: 1,
  class: "library-muted"
}, bu = ["href"], _u = {
  key: 3,
  class: "library-muted"
}, yu = {
  key: 1,
  class: "library-cover-gallery"
}, vu = ["href", "aria-label"], xu = ["src", "alt"], Su = { class: "library-cover-summary" }, wu = {
  key: 0,
  class: "library-creator"
}, Cu = { class: "library-muted" }, Tu = { key: 0 }, Eu = { key: 1 }, Au = {
  key: 1,
  class: "library-item-scan-status library-scan-error"
}, Ou = { key: 0 }, Pu = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTags"
}, Iu = {
  key: 0,
  class: "library-muted"
}, Mu = ["href"], Ru = ["href"], Fu = { class: "library-item-metadata" }, Nu = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTagEditor"
}, $u = {
  key: 0,
  class: "library-tag-remove-list",
  "aria-label": "Remove Nextcloud tag"
}, Vu = { class: "library-tag" }, Du = ["action"], ju = ["action"], Uu = {
  class: "library-nextcloud-comments",
  "aria-label": "nextcloudComments"
}, Lu = {
  key: 0,
  class: "library-muted"
}, Hu = { class: "library-comment-list" }, Bu = { class: "library-muted" }, Ku = ["action"], Wu = ["action"], ku = ["value"], qu = ["value"], zu = ["value"], Gu = ["value"], Ju = ["value"], Yu = ["value"], Xu = ["value"], Zu = ["value"], Qu = ["value"], ef = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], s = [25, 50, 100, 250, 500], r = ce(() => t.state.items || []), i = ce(() => t.state.shelves || []), l = ce(() => t.state.formats || []), o = ce(() => t.state.scanStatuses || []), u = ce(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: r.value.length,
      visible: r.value.length,
      from: r.value.length > 0 ? 1 : 0,
      to: r.value.length,
      previousUrl: "",
      nextUrl: ""
    }), d = /* @__PURE__ */ Sn({
      q: t.state.activeFilters?.q || "",
      type: t.state.activeFilters?.type || "",
      format: t.state.activeFilters?.format || "",
      tag: t.state.activeFilters?.tag || "",
      shelf: t.state.activeFilters?.shelf || "",
      status: t.state.activeFilters?.status || "",
      sort: t.state.activeFilters?.sort || "title"
    }), a = ce(() => t.state.settingsUrl || "");
    function g(O) {
      return String(O || "").toUpperCase();
    }
    function T(O) {
      return O.nextcloudTags || [];
    }
    function A(O) {
      return O.nextcloudComments || { count: 0, recent: [] };
    }
    function L(O, p) {
      return String(O.tagRemoveBaseUrl || "").replace("__TAG_ID__", String(p.id));
    }
    return (O, p) => (V(), D(X, null, [
      b("section", ru, [
        p[8] || (p[8] = b("div", null, [
          b("h1", null, "Library"),
          b("p", { class: "library-lede" }, " Browse publications already stored in Nextcloud. ")
        ], -1)),
        b("div", iu, [
          be(Ne(Wn), {
            href: a.value,
            variant: "secondary",
            "aria-label": "Open Library settings"
          }, {
            default: Nt(() => [...p[7] || (p[7] = [
              J(" Library settings ", -1)
            ])]),
            _: 1
          }, 8, ["href"])
        ])
      ]),
      b("section", lu, [
        p[48] || (p[48] = b("h2", null, "Publication catalogue", -1)),
        p[49] || (p[49] = b("p", { class: "library-muted" }, "Browse as a shelf/gallery first; open the details panel when metadata matters.", -1)),
        b("form", ou, [
          b("label", null, [
            p[9] || (p[9] = J(" Search title / author ", -1)),
            nt(b("input", {
              "onUpdate:modelValue": p[0] || (p[0] = (m) => d.q = m),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex..."
            }, null, 512), [
              [tr, d.q]
            ])
          ]),
          b("label", null, [
            p[11] || (p[11] = J(" Type ", -1)),
            nt(b("select", {
              "onUpdate:modelValue": p[1] || (p[1] = (m) => d.type = m),
              name: "type"
            }, [
              p[10] || (p[10] = b("option", { value: "" }, "All types", -1)),
              (V(), D(X, null, Oe(n, (m) => b("option", {
                key: m,
                value: m
              }, j(m), 9, uu)), 64))
            ], 512), [
              [Ot, d.type]
            ])
          ]),
          b("label", null, [
            p[12] || (p[12] = J(" Nextcloud tag ", -1)),
            nt(b("input", {
              "onUpdate:modelValue": p[2] || (p[2] = (m) => d.tag = m),
              type: "text",
              name: "tag",
              placeholder: "photography"
            }, null, 512), [
              [tr, d.tag]
            ])
          ]),
          b("label", null, [
            p[14] || (p[14] = J(" Format ", -1)),
            nt(b("select", {
              "onUpdate:modelValue": p[3] || (p[3] = (m) => d.format = m),
              name: "format"
            }, [
              p[13] || (p[13] = b("option", { value: "" }, "All formats", -1)),
              (V(!0), D(X, null, Oe(l.value, (m) => (V(), D("option", {
                key: m,
                value: m
              }, j(g(m)), 9, fu))), 128))
            ], 512), [
              [Ot, d.format]
            ])
          ]),
          b("label", null, [
            p[16] || (p[16] = J(" Shelf ", -1)),
            nt(b("select", {
              "onUpdate:modelValue": p[4] || (p[4] = (m) => d.shelf = m),
              name: "shelf"
            }, [
              p[15] || (p[15] = b("option", { value: "" }, "All shelves", -1)),
              (V(!0), D(X, null, Oe(i.value, (m) => (V(), D("option", {
                key: m,
                value: m
              }, j(m), 9, cu))), 128))
            ], 512), [
              [Ot, d.shelf]
            ])
          ]),
          b("label", null, [
            p[18] || (p[18] = J(" Scan status ", -1)),
            nt(b("select", {
              "onUpdate:modelValue": p[5] || (p[5] = (m) => d.status = m),
              name: "status"
            }, [
              p[17] || (p[17] = b("option", { value: "" }, "All scan statuses", -1)),
              (V(!0), D(X, null, Oe(o.value, (m) => (V(), D("option", {
                key: m,
                value: m
              }, j(m), 9, au))), 128))
            ], 512), [
              [Ot, d.status]
            ])
          ]),
          b("label", null, [
            p[20] || (p[20] = J(" Sort ", -1)),
            nt(b("select", {
              "onUpdate:modelValue": p[6] || (p[6] = (m) => d.sort = m),
              name: "sort"
            }, [...p[19] || (p[19] = [
              b("option", { value: "title" }, "Title", -1),
              b("option", { value: "recent" }, "Recently added", -1),
              b("option", { value: "publicationDate" }, "Publication date", -1),
              b("option", { value: "format" }, "Format", -1)
            ])], 512), [
              [Ot, d.sort]
            ])
          ]),
          b("label", null, [
            p[21] || (p[21] = J(" Page size ", -1)),
            b("select", {
              value: u.value.limit,
              name: "limit"
            }, [
              (V(), D(X, null, Oe(s, (m) => b("option", {
                key: m,
                value: m
              }, j(m), 9, pu)), 64))
            ], 8, du)
          ]),
          be(Ne(Wn), {
            type: "submit",
            variant: "primary",
            "aria-label": "Apply catalogue filters"
          }, {
            default: Nt(() => [...p[22] || (p[22] = [
              J(" Apply filters ", -1)
            ])]),
            _: 1
          }),
          be(Ne(Wn), {
            href: "?",
            variant: "tertiary",
            "aria-label": "Clear catalogue filters"
          }, {
            default: Nt(() => [...p[23] || (p[23] = [
              J(" Clear ", -1)
            ])]),
            _: 1
          })
        ]),
        b("nav", hu, [
          b("span", null, "Showing " + j(u.value.from) + "–" + j(u.value.to) + " of " + j(u.value.total) + " catalogue items", 1),
          u.value.previousUrl ? (V(), D("a", {
            key: 0,
            href: u.value.previousUrl
          }, "Previous", 8, gu)) : (V(), D("span", mu, "Previous")),
          u.value.nextUrl ? (V(), D("a", {
            key: 2,
            href: u.value.nextUrl
          }, "Next", 8, bu)) : (V(), D("span", _u, "Next"))
        ]),
        r.value.length === 0 ? (V(), Ht(Ne(su), {
          key: 0,
          name: "No catalogue items match",
          description: "Scan enabled roots or clear the active filters."
        })) : (V(), D("div", yu, [
          (V(!0), D(X, null, Oe(r.value, (m) => (V(), D("article", {
            key: m.id,
            class: "library-cover-card"
          }, [
            b("a", {
              class: "library-cover-link",
              href: m.openUrl,
              "aria-label": `Read ${m.title}`
            }, [
              b("img", {
                class: "library-cover-image",
                src: m.coverUrl,
                alt: `Cover for ${m.title}`,
                loading: "lazy"
              }, null, 8, xu)
            ], 8, vu),
            b("div", Su, [
              b("h3", null, j(m.title), 1),
              m.creators ? (V(), D("p", wu, j(m.creators), 1)) : Re("", !0),
              b("p", Cu, [
                b("span", null, j(m.publicationType), 1),
                m.extension ? (V(), D("span", Tu, " · Format: " + j(g(m.extension)), 1)) : Re("", !0),
                m.shelf ? (V(), D("span", Eu, " · Shelf: " + j(m.shelf), 1)) : Re("", !0)
              ]),
              m.scanStatus !== "indexed" || m.scanError ? (V(), D("p", Au, [
                J(" scanStatus: " + j(m.scanStatus || "unknown"), 1),
                m.scanError ? (V(), D("span", Ou, " · scanError: " + j(m.scanError), 1)) : Re("", !0)
              ])) : Re("", !0),
              b("div", Pu, [
                T(m).length === 0 ? (V(), D("span", Iu, "No Nextcloud tags")) : (V(!0), D(X, { key: 1 }, Oe(T(m), (I) => (V(), D("span", {
                  key: I.id,
                  class: "library-tag"
                }, j(I.name), 1))), 128))
              ]),
              b("p", null, [
                b("a", {
                  href: m.openUrl
                }, "Read", 8, Mu),
                p[24] || (p[24] = J(" · ", -1)),
                b("a", {
                  href: m.filesUrl
                }, "Show in Files", 8, Ru)
              ])
            ]),
            b("details", null, [
              p[47] || (p[47] = b("summary", null, "Details / edit metadata", -1)),
              b("dl", Fu, [
                p[25] || (p[25] = b("dt", null, "publicationType", -1)),
                b("dd", null, j(m.publicationType), 1),
                p[26] || (p[26] = b("dt", null, "metadataSource", -1)),
                b("dd", null, j(m.metadataSource), 1),
                p[27] || (p[27] = b("dt", null, "userEdited", -1)),
                b("dd", null, j(m.userEdited ? "yes" : "no"), 1),
                p[28] || (p[28] = b("dt", null, "path", -1)),
                b("dd", null, j(m.cachedPath), 1),
                p[29] || (p[29] = b("dt", null, "publication", -1)),
                b("dd", null, j(m.publication || "—"), 1),
                p[30] || (p[30] = b("dt", null, "date", -1)),
                b("dd", null, j(m.publicationDate || "—"), 1),
                p[31] || (p[31] = b("dt", null, "language", -1)),
                b("dd", null, j(m.language || "—"), 1),
                p[32] || (p[32] = b("dt", null, "publisher", -1)),
                b("dd", null, j(m.publisher || "—"), 1)
              ]),
              b("div", Nu, [
                p[35] || (p[35] = b("strong", null, "Nextcloud tags", -1)),
                T(m).length > 0 ? (V(), D("ul", $u, [
                  (V(!0), D(X, null, Oe(T(m), (I) => (V(), D("li", {
                    key: I.id
                  }, [
                    b("span", Vu, j(I.name), 1),
                    b("form", {
                      method: "post",
                      action: L(m, I),
                      class: "library-inline-form"
                    }, [...p[33] || (p[33] = [
                      b("button", { type: "submit" }, "Remove tag", -1)
                    ])], 8, Du)
                  ]))), 128))
                ])) : Re("", !0),
                b("form", {
                  method: "post",
                  action: m.tagUrl,
                  class: "library-tag-form"
                }, [...p[34] || (p[34] = [
                  b("label", null, [
                    J(" Add Nextcloud tag "),
                    b("input", {
                      type: "text",
                      name: "tagName",
                      placeholder: "photography, project-library..."
                    })
                  ], -1),
                  b("button", { type: "submit" }, "Add tag", -1)
                ])], 8, ju)
              ]),
              b("div", Uu, [
                p[37] || (p[37] = b("strong", null, "Nextcloud comments", -1)),
                p[38] || (p[38] = J()),
                p[39] || (p[39] = b("span", { class: "library-muted" }, "(file-level notes)", -1)),
                p[40] || (p[40] = J(": ", -1)),
                A(m).count === 0 ? (V(), D("span", Lu, "No Nextcloud comments")) : (V(), D(X, { key: 1 }, [
                  b("span", null, j(A(m).count) + " total", 1),
                  b("ul", Hu, [
                    (V(!0), D(X, null, Oe(A(m).recent, (I) => (V(), D("li", {
                      key: `${I.actorId}-${I.createdAt}-${I.message}`
                    }, [
                      b("span", Bu, j(I.actorId) + " · " + j(I.createdAt), 1),
                      b("span", null, j(I.message), 1)
                    ]))), 128))
                  ])
                ], 64)),
                b("form", {
                  method: "post",
                  action: m.commentUrl,
                  class: "library-comment-form"
                }, [...p[36] || (p[36] = [
                  b("label", null, [
                    J(" Add Nextcloud comment "),
                    b("textarea", {
                      name: "commentMessage",
                      rows: "2",
                      placeholder: "file-level note..."
                    })
                  ], -1),
                  b("button", { type: "submit" }, "Add comment", -1)
                ])], 8, Ku)
              ]),
              b("form", {
                method: "post",
                action: m.updateUrl,
                class: "library-item-form"
              }, [
                b("label", null, [
                  p[41] || (p[41] = J(" Title ", -1)),
                  b("input", {
                    type: "text",
                    name: "title",
                    value: m.title
                  }, null, 8, ku)
                ]),
                b("label", null, [
                  p[42] || (p[42] = J(" Type ", -1)),
                  b("select", {
                    name: "publicationType",
                    value: m.publicationType
                  }, [
                    (V(), D(X, null, Oe(n, (I) => b("option", {
                      key: I,
                      value: I
                    }, j(I), 9, zu)), 64))
                  ], 8, qu)
                ]),
                b("label", null, [
                  p[43] || (p[43] = J(" Creators ", -1)),
                  b("input", {
                    type: "text",
                    name: "creators",
                    value: m.creators
                  }, null, 8, Gu)
                ]),
                b("label", null, [
                  p[44] || (p[44] = J(" Publication ", -1)),
                  b("input", {
                    type: "text",
                    name: "publication",
                    value: m.publication
                  }, null, 8, Ju)
                ]),
                b("label", null, [
                  p[45] || (p[45] = J(" Date ", -1)),
                  b("input", {
                    type: "text",
                    name: "publicationDate",
                    value: m.publicationDate
                  }, null, 8, Yu)
                ]),
                b("input", {
                  type: "hidden",
                  name: "subtitle",
                  value: m.subtitle
                }, null, 8, Xu),
                b("input", {
                  type: "hidden",
                  name: "language",
                  value: m.language
                }, null, 8, Zu),
                b("input", {
                  type: "hidden",
                  name: "publisher",
                  value: m.publisher
                }, null, 8, Qu),
                p[46] || (p[46] = b("button", { type: "submit" }, "Save metadata", -1))
              ], 8, Wu)
            ])
          ]))), 128))
        ]))
      ])
    ], 64));
  }
}, tf = Uo("library", "catalogue", {});
Vo(ef, { state: tf }).mount("#library-vue-root");
//# sourceMappingURL=library-main.mjs.map
