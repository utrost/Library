// @__NO_SIDE_EFFECTS__
function Di(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Se = {}, Nr = [], $t = () => {
}, ds = () => !1, Un = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Dn = (e) => e.startsWith("onUpdate:"), Qe = Object.assign, Fi = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, jl = Object.prototype.hasOwnProperty, ge = (e, t) => jl.call(e, t), Q = Array.isArray, or = (e) => ln(e) === "[object Map]", vr = (e) => ln(e) === "[object Set]", mo = (e) => ln(e) === "[object Date]", le = (e) => typeof e == "function", Le = (e) => typeof e == "string", jt = (e) => typeof e == "symbol", Te = (e) => e !== null && typeof e == "object", ps = (e) => (Te(e) || le(e)) && le(e.then) && le(e.catch), hs = Object.prototype.toString, ln = (e) => hs.call(e), Vl = (e) => ln(e).slice(8, -1), ms = (e) => ln(e) === "[object Object]", Hi = (e) => Le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Gr = /* @__PURE__ */ Di(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Bl = /-\w/g, Ot = Fn(
  (e) => e.replace(Bl, (t) => t.slice(1).toUpperCase())
), zl = /\B([A-Z])/g, Er = Fn(
  (e) => e.replace(zl, "-$1").toLowerCase()
), bs = Fn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ri = Fn(
  (e) => e ? `on${bs(e)}` : ""
), Ht = (e, t) => !Object.is(e, t), Sn = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, ys = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Hn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let bo;
const $n = () => bo || (bo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $i(e) {
  if (Q(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Le(n) ? Gl(n) : $i(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Le(e) || Te(e))
    return e;
}
const Wl = /;(?![^(]*\))/g, ql = /:([^]+)/, Kl = /\/\*[^]*?\*\//g;
function Gl(e) {
  const t = {};
  return e.replace(Kl, "").split(Wl).forEach((r) => {
    if (r) {
      const n = r.split(ql);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Pr(e) {
  let t = "";
  if (Le(e))
    t = e;
  else if (Q(e))
    for (let r = 0; r < e.length; r++) {
      const n = Pr(e[r]);
      n && (t += n + " ");
    }
  else if (Te(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Yl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xl = /* @__PURE__ */ Di(Yl);
function gs(e) {
  return !!e || e === "";
}
function Jl(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = sr(e[n], t[n]);
  return r;
}
function yo(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const i of e) {
    let o = -1;
    for (let s = 0; s < r.length; s++)
      if (!n[s] && sr(i, r[s])) {
        o = s;
        break;
      }
    if (o < 0) return !1;
    n[o] = 1;
  }
  return !0;
}
function sr(e, t) {
  if (e === t) return !0;
  let r = mo(e), n = mo(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = jt(e), n = jt(t), r || n)
    return e === t;
  if (r = Q(e), n = Q(t), r || n)
    return r && n ? Jl(e, t) : !1;
  if (r = Te(e), n = Te(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = or(e), n = or(t), r || n || (r = vr(e), n = vr(t), r || n))
      return r && n ? yo(e, t) : !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), f = t.hasOwnProperty(s);
      if (a && !f || !a && f || !sr(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((r) => sr(r, t));
}
const _s = (e) => !!(e && e.__v_isRef === !0), d = (e) => Le(e) ? e : e == null ? "" : Q(e) || Te(e) && (e.toString === hs || !le(e.toString)) ? _s(e) ? d(e.value) : JSON.stringify(e, vs, 2) : String(e), vs = (e, t) => _s(t) ? vs(e, t.value) : or(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[ni(n, o) + " =>"] = i, r),
    {}
  )
} : vr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => ni(r))
} : jt(t) ? ni(t) : Te(t) && !Q(t) && !ms(t) ? String(t) : t, ni = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    jt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
let Ge;
class Ql {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ge && (Ge.active ? (this.parent = Ge, this.index = (Ge.scopes || (Ge.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes) {
        const n = this.scopes.slice();
        for (t = 0, r = n.length; t < r; t++)
          n[t].pause();
      }
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes) {
        const i = this.scopes.slice();
        for (t = 0, r = i.length; t < r; t++)
          i[t].resume();
      }
      const n = this.effects.slice();
      for (t = 0, r = n.length; t < r; t++)
        n[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = Ge;
      try {
        return Ge = this, t();
      } finally {
        Ge = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ge, Ge = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ge === this)
        Ge = this.prevScope;
      else {
        let t = Ge;
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
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (this.effects.length = 0, r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        const i = this.scopes.slice();
        for (r = 0, n = i.length; r < n; r++)
          i[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ea() {
  return Ge;
}
let Ce;
const ii = /* @__PURE__ */ new WeakSet();
class Es {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ge && (Ge.active ? Ge.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ii.has(this) && (ii.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ss(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, go(this), xs(this);
    const t = Ce, r = Nt;
    Ce = this, Nt = !0;
    try {
      return this.fn();
    } finally {
      Cs(this), Ce = t, Nt = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Bi(t);
      this.deps = this.depsTail = void 0, go(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ii.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ci(this) && this.run();
  }
  get dirty() {
    return Ci(this);
  }
}
let Ts = 0, Yr, Xr;
function Ss(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Xr, Xr = e;
    return;
  }
  e.next = Yr, Yr = e;
}
function ji() {
  Ts++;
}
function Vi() {
  if (--Ts > 0)
    return;
  if (Xr) {
    let t = Xr;
    for (Xr = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Yr; ) {
    let t = Yr;
    for (Yr = void 0; t; ) {
      const r = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function xs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Cs(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Bi(n), ta(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Ci(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (As(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function As(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === en) || (e.globalVersion = en, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ci(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Ce, n = Nt;
  Ce = e, Nt = !0;
  try {
    xs(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ht(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Ce = r, Nt = n, Cs(e), e.flags &= -3;
  }
}
function Bi(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      Bi(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function ta(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Nt = !0;
const ws = [];
function Jt() {
  ws.push(Nt), Nt = !1;
}
function Zt() {
  const e = ws.pop();
  Nt = e === void 0 ? !0 : e;
}
function go(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = Ce;
    Ce = void 0;
    try {
      t();
    } finally {
      Ce = r;
    }
  }
}
let en = 0;
class ra {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class zi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ce || !Nt || Ce === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Ce)
      r = this.activeLink = new ra(Ce, this), Ce.deps ? (r.prevDep = Ce.depsTail, Ce.depsTail.nextDep = r, Ce.depsTail = r) : Ce.deps = Ce.depsTail = r, Rs(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Ce.depsTail, r.nextDep = void 0, Ce.depsTail.nextDep = r, Ce.depsTail = r, Ce.deps === r && (Ce.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, en++, this.notify(t);
  }
  notify(t) {
    ji();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Vi();
    }
  }
}
function Rs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Rs(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Ai = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ Symbol(
  ""
), wi = /* @__PURE__ */ Symbol(
  ""
), tn = /* @__PURE__ */ Symbol(
  ""
);
function Je(e, t, r) {
  if (Nt && Ce) {
    let n = Ai.get(e);
    n || Ai.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new zi()), i.map = n, i.key = r), i.track();
  }
}
function Gt(e, t, r, n, i, o) {
  const s = Ai.get(e);
  if (!s) {
    en++;
    return;
  }
  const a = (f) => {
    f && f.trigger();
  };
  if (ji(), t === "clear")
    s.forEach(a);
  else {
    const f = Q(e), v = f && Hi(r);
    if (f && r === "length") {
      const y = Number(n);
      s.forEach((E, P) => {
        (P === "length" || P === tn || !jt(P) && P >= y) && a(E);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && a(s.get(r)), v && a(s.get(tn)), t) {
        case "add":
          f ? v && a(s.get("length")) : (a(s.get(yr)), or(e) && a(s.get(wi)));
          break;
        case "delete":
          f || (a(s.get(yr)), or(e) && a(s.get(wi)));
          break;
        case "set":
          or(e) && a(s.get(yr));
          break;
      }
  }
  Vi();
}
function Cr(e) {
  const t = /* @__PURE__ */ ye(e);
  return t === e ? t : (Je(t, "iterate", tn), /* @__PURE__ */ xt(e) ? t : t.map(Pt));
}
function jn(e) {
  return Je(e = /* @__PURE__ */ ye(e), "iterate", tn), e;
}
function Dt(e, t) {
  return /* @__PURE__ */ Qt(e) ? Ir(/* @__PURE__ */ gr(e) ? Pt(t) : t) : Pt(t);
}
const na = {
  __proto__: null,
  [Symbol.iterator]() {
    return oi(this, Symbol.iterator, (e) => Dt(this, e));
  },
  concat(...e) {
    return Cr(this).concat(
      ...e.map((t) => Q(t) ? Cr(t) : t)
    );
  },
  entries() {
    return oi(this, "entries", (e) => (e[1] = Dt(this, e[1]), e));
  },
  every(e, t) {
    return Wt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Wt(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => Dt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Wt(
      this,
      "find",
      e,
      t,
      (r) => Dt(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Wt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Wt(
      this,
      "findLast",
      e,
      t,
      (r) => Dt(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Wt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Wt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return si(this, "includes", e);
  },
  indexOf(...e) {
    return si(this, "indexOf", e);
  },
  join(e) {
    return Cr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return si(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Wt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Hr(this, "pop");
  },
  push(...e) {
    return Hr(this, "push", e);
  },
  reduce(e, ...t) {
    return _o(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return _o(this, "reduceRight", e, t);
  },
  shift() {
    return Hr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Wt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Hr(this, "splice", e);
  },
  toReversed() {
    return Cr(this).toReversed();
  },
  toSorted(e) {
    return Cr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Cr(this).toSpliced(...e);
  },
  unshift(...e) {
    return Hr(this, "unshift", e);
  },
  values() {
    return oi(this, "values", (e) => Dt(this, e));
  }
};
function oi(e, t, r) {
  const n = jn(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ xt(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const ia = Array.prototype;
function Wt(e, t, r, n, i, o) {
  const s = jn(e), a = s !== e && !/* @__PURE__ */ xt(e), f = s[t];
  if (f !== ia[t]) {
    const E = f.apply(e, o);
    return a ? Pt(E) : E;
  }
  let v = r;
  s !== e && (a ? v = function(E, P) {
    return r.call(this, Dt(e, E), P, e);
  } : r.length > 2 && (v = function(E, P) {
    return r.call(this, E, P, e);
  }));
  const y = f.call(s, v, n);
  return a && i ? i(y) : y;
}
function _o(e, t, r, n) {
  const i = jn(e), o = i !== e && !/* @__PURE__ */ xt(e);
  let s = r, a = !1;
  i !== e && (o ? (a = n.length === 0, s = function(v, y, E) {
    return a && (a = !1, v = Dt(e, v)), r.call(this, v, Dt(e, y), E, e);
  }) : r.length > 3 && (s = function(v, y, E) {
    return r.call(this, v, y, E, e);
  }));
  const f = i[t](s, ...n);
  return a ? Dt(e, f) : f;
}
function si(e, t, r) {
  const n = /* @__PURE__ */ ye(e);
  Je(n, "iterate", tn);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Ki(r[0]) ? (r[0] = /* @__PURE__ */ ye(r[0]), n[t](...r)) : i;
}
function Hr(e, t, r = []) {
  Jt(), ji();
  const n = (/* @__PURE__ */ ye(e))[t].apply(e, r);
  return Vi(), Zt(), n;
}
const oa = /* @__PURE__ */ Di("__proto__,__v_isRef,__isVue"), Os = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(jt)
);
function sa(e) {
  jt(e) || (e = String(e));
  const t = /* @__PURE__ */ ye(this);
  return Je(t, "has", e), t.hasOwnProperty(e);
}
class Ns {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (r === "__v_isReactive")
      return !i;
    if (r === "__v_isReadonly")
      return i;
    if (r === "__v_isShallow")
      return o;
    if (r === "__v_raw")
      return n === (i ? o ? ba : Ls : o ? Ms : ks).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = Q(t);
    if (!i) {
      let f;
      if (s && (f = na[r]))
        return f;
      if (r === "hasOwnProperty")
        return sa;
    }
    const a = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ze(t) ? t : n
    );
    if ((jt(r) ? Os.has(r) : oa(r)) || (i || Je(t, "get", r), o))
      return a;
    if (/* @__PURE__ */ Ze(a)) {
      const f = s && Hi(r) ? a : a.value;
      return i && Te(f) ? /* @__PURE__ */ Oi(f) : f;
    }
    return Te(a) ? i ? /* @__PURE__ */ Oi(a) : /* @__PURE__ */ mr(a) : a;
  }
}
class Ps extends Ns {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = Q(t) && Hi(r);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ Qt(o);
      if (!/* @__PURE__ */ xt(n) && !/* @__PURE__ */ Qt(n) && (o = /* @__PURE__ */ ye(o), n = /* @__PURE__ */ ye(n)), !s && /* @__PURE__ */ Ze(o) && !/* @__PURE__ */ Ze(n))
        return v || (o.value = n), !0;
    }
    const a = s ? Number(r) < t.length : ge(t, r), f = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ Ze(t) ? t : i
    );
    return t === /* @__PURE__ */ ye(i) && f && (a ? Ht(n, o) && Gt(t, "set", r, n) : Gt(t, "add", r, n)), f;
  }
  deleteProperty(t, r) {
    const n = ge(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Gt(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!jt(r) || !Os.has(r)) && Je(t, "has", r), n;
  }
  ownKeys(t) {
    return Je(
      t,
      "iterate",
      Q(t) ? "length" : yr
    ), Reflect.ownKeys(t);
  }
}
class la extends Ns {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const aa = /* @__PURE__ */ new Ps(), ca = /* @__PURE__ */ new la(), ua = /* @__PURE__ */ new Ps(!0);
const Ri = (e) => e, bn = (e) => Reflect.getPrototypeOf(e);
function fa(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ ye(i), s = or(o), a = e === "entries" || e === Symbol.iterator && s, f = e === "keys" && s, v = i[e](...n), y = r ? Ri : t ? Ir : Pt;
    return !t && Je(
      o,
      "iterate",
      f ? wi : yr
    ), Qe(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: E, done: P } = v.next();
          return P ? { value: E, done: P } : {
            value: a ? [y(E[0]), y(E[1])] : y(E),
            done: P
          };
        }
      }
    );
  };
}
function yn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function da(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ ye(o), a = /* @__PURE__ */ ye(i);
      e || (Ht(i, a) && Je(s, "get", i), Je(s, "get", a));
      const { has: f } = bn(s), v = t ? Ri : e ? Ir : Pt;
      if (f.call(s, i))
        return v(o.get(i));
      if (f.call(s, a))
        return v(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Je(/* @__PURE__ */ ye(i), "iterate", yr), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ ye(o), a = /* @__PURE__ */ ye(i);
      return e || (Ht(i, a) && Je(s, "has", i), Je(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, f = /* @__PURE__ */ ye(a), v = t ? Ri : e ? Ir : Pt;
      return !e && Je(f, "iterate", yr), a.forEach((y, E) => i.call(o, v(y), v(E), s));
    }
  };
  return Qe(
    r,
    e ? {
      add: yn("add"),
      set: yn("set"),
      delete: yn("delete"),
      clear: yn("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ ye(this), s = bn(o), a = /* @__PURE__ */ ye(i), f = !t && !/* @__PURE__ */ xt(i) && !/* @__PURE__ */ Qt(i) ? a : i;
        return s.has.call(o, f) || Ht(i, f) && s.has.call(o, i) || Ht(a, f) && s.has.call(o, a) || (o.add(f), Gt(o, "add", f, f)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ xt(o) && !/* @__PURE__ */ Qt(o) && (o = /* @__PURE__ */ ye(o));
        const s = /* @__PURE__ */ ye(this), { has: a, get: f } = bn(s);
        let v = a.call(s, i);
        v || (i = /* @__PURE__ */ ye(i), v = a.call(s, i));
        const y = f.call(s, i);
        return s.set(i, o), v ? Ht(o, y) && Gt(s, "set", i, o) : Gt(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ ye(this), { has: s, get: a } = bn(o);
        let f = s.call(o, i);
        f || (i = /* @__PURE__ */ ye(i), f = s.call(o, i)), a && a.call(o, i);
        const v = o.delete(i);
        return f && Gt(o, "delete", i, void 0), v;
      },
      clear() {
        const i = /* @__PURE__ */ ye(this), o = i.size !== 0, s = i.clear();
        return o && Gt(
          i,
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
  ].forEach((i) => {
    r[i] = fa(i, e, t);
  }), r;
}
function Wi(e, t) {
  const r = da(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    ge(r, i) && i in n ? r : n,
    i,
    o
  );
}
const pa = {
  get: /* @__PURE__ */ Wi(!1, !1)
}, ha = {
  get: /* @__PURE__ */ Wi(!1, !0)
}, ma = {
  get: /* @__PURE__ */ Wi(!0, !1)
};
const ks = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakMap();
function ya(e) {
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
function mr(e) {
  return /* @__PURE__ */ Qt(e) ? e : qi(
    e,
    !1,
    aa,
    pa,
    ks
  );
}
// @__NO_SIDE_EFFECTS__
function ga(e) {
  return qi(
    e,
    !1,
    ua,
    ha,
    Ms
  );
}
// @__NO_SIDE_EFFECTS__
function Oi(e) {
  return qi(
    e,
    !0,
    ca,
    ma,
    Ls
  );
}
function qi(e, t, r, n, i) {
  if (!Te(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const s = ya(Vl(e));
  if (s === 0)
    return e;
  const a = new Proxy(
    e,
    s === 2 ? n : r
  );
  return i.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function gr(e) {
  return /* @__PURE__ */ Qt(e) ? /* @__PURE__ */ gr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ki(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ye(t) : e;
}
function _a(e) {
  return !ge(e, "__v_skip") && Object.isExtensible(e) && ys(e, "__v_skip", !0), e;
}
const Pt = (e) => Te(e) ? /* @__PURE__ */ mr(e) : e, Ir = (e) => Te(e) ? /* @__PURE__ */ Oi(e) : e;
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function va(e) {
  return Ea(e, !1);
}
function Ea(e, t) {
  return /* @__PURE__ */ Ze(e) ? e : new Ta(e, t);
}
class Ta {
  constructor(t, r) {
    this.dep = new zi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ ye(t), this._value = r ? t : Pt(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ xt(t) || /* @__PURE__ */ Qt(t);
    t = n ? t : /* @__PURE__ */ ye(t), Ht(t, r) && (this._rawValue = t, this._value = n ? t : Pt(t), this.dep.trigger());
  }
}
function b(e) {
  return /* @__PURE__ */ Ze(e) ? e.value : e;
}
const Sa = {
  get: (e, t, r) => t === "__v_raw" ? e : b(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ Ze(i) && !/* @__PURE__ */ Ze(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Is(e) {
  return /* @__PURE__ */ gr(e) ? e : new Proxy(e, Sa);
}
class xa {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new zi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = en - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ce !== this)
      return Ss(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return As(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ca(e, t, r = !1) {
  let n, i;
  return le(e) ? n = e : (n = e.get, i = e.set), new xa(n, i, r);
}
const gn = {}, wn = /* @__PURE__ */ new WeakMap();
let dr;
function Aa(e, t = !1, r = dr) {
  if (r) {
    let n = wn.get(r);
    n || wn.set(r, n = []), n.push(e);
  }
}
function wa(e, t, r = Se) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: a, call: f } = r, v = (V) => i ? V : /* @__PURE__ */ xt(V) || i === !1 || i === 0 ? Yt(V, 1) : Yt(V);
  let y, E, P, j, re = !1, K = !1;
  if (/* @__PURE__ */ Ze(e) ? (E = () => e.value, re = /* @__PURE__ */ xt(e)) : /* @__PURE__ */ gr(e) ? (E = () => v(e), re = !0) : Q(e) ? (K = !0, re = e.some((V) => /* @__PURE__ */ gr(V) || /* @__PURE__ */ xt(V)), E = () => e.map((V) => {
    if (/* @__PURE__ */ Ze(V))
      return V.value;
    if (/* @__PURE__ */ gr(V))
      return v(V);
    if (le(V))
      return f ? f(V, 2) : V();
  })) : le(e) ? t ? E = f ? () => f(e, 2) : e : E = () => {
    if (P) {
      Jt();
      try {
        P();
      } finally {
        Zt();
      }
    }
    const V = dr;
    dr = y;
    try {
      return f ? f(e, 3, [j]) : e(j);
    } finally {
      dr = V;
    }
  } : E = $t, t && i) {
    const V = E, ue = i === !0 ? 1 / 0 : i;
    E = () => Yt(V(), ue);
  }
  const oe = ea(), ne = () => {
    y.stop(), oe && oe.active && Fi(oe.effects, y);
  };
  if (o && t) {
    const V = t;
    t = (...ue) => {
      const Pe = V(...ue);
      return ne(), Pe;
    };
  }
  let z = K ? new Array(e.length).fill(gn) : gn;
  const U = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const ue = y.run();
        if (V || i || re || (K ? ue.some((Pe, we) => Ht(Pe, z[we])) : Ht(ue, z))) {
          P && P();
          const Pe = dr;
          dr = y;
          try {
            const we = [
              ue,
              // pass undefined as the old value when it's changed for the first time
              z === gn ? void 0 : K && z[0] === gn ? [] : z,
              j
            ];
            z = ue, f ? f(t, 3, we) : (
              // @ts-expect-error
              t(...we)
            );
          } finally {
            dr = Pe;
          }
        }
      } else
        y.run();
  };
  return a && a(U), y = new Es(E), y.scheduler = s ? () => s(U, !1) : U, j = (V) => Aa(V, !1, y), P = y.onStop = () => {
    const V = wn.get(y);
    if (V) {
      if (f)
        f(V, 4);
      else
        for (const ue of V) ue();
      wn.delete(y);
    }
  }, t ? n ? U(!0) : z = y.run() : s ? s(U.bind(null, !0), !0) : y.run(), ne.pause = y.pause.bind(y), ne.resume = y.resume.bind(y), ne.stop = ne, ne;
}
function Yt(e, t = 1 / 0, r) {
  if (t <= 0 || !Te(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ Ze(e))
    Yt(e.value, t, r);
  else if (Q(e))
    for (let n = 0; n < e.length; n++)
      Yt(e[n], t, r);
  else if (vr(e) || or(e))
    e.forEach((n) => {
      Yt(n, t, r);
    });
  else if (ms(e)) {
    for (const n in e)
      Yt(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Yt(e[n], t, r);
  }
  return e;
}
function an(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Vn(i, t, r);
  }
}
function kt(e, t, r, n) {
  if (le(e)) {
    const i = an(e, t, r, n);
    return i && ps(i) && i.catch((o) => {
      Vn(o, t, r);
    }), i;
  }
  if (Q(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(kt(e[o], t, r, n));
    return i;
  }
}
function Vn(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Se;
  if (t) {
    let a = t.parent;
    const f = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; a; ) {
      const y = a.ec;
      if (y) {
        for (let E = 0; E < y.length; E++)
          if (y[E](e, f, v) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      Jt(), an(o, null, 10, [
        e,
        f,
        v
      ]), Zt();
      return;
    }
  }
  Ra(e, r, i, n, s);
}
function Ra(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const it = [];
let Ut = -1;
const kr = [];
let ir = null, Rr = 0;
const Us = /* @__PURE__ */ Promise.resolve();
let Rn = null;
function Ds(e) {
  const t = Rn || Us;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Oa(e) {
  let t = Ut + 1, r = it.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = it[n], o = rn(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Gi(e) {
  if (!(e.flags & 1)) {
    const t = rn(e), r = it[it.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= rn(r) ? it.push(e) : it.splice(Oa(t), 0, e), e.flags |= 1, Fs();
  }
}
function Fs() {
  Rn || (Rn = Us.then($s));
}
function Na(e) {
  if (!Q(e))
    ir && e.id === -1 ? ir.splice(Rr + 1, 0, e) : e.flags & 1 || (kr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      kr.push(e[t]);
  Fs();
}
function vo(e, t, r = Ut + 1) {
  for (; r < it.length; r++) {
    const n = it[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      it.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Hs(e) {
  if (kr.length) {
    const t = [...new Set(kr)].sort(
      (r, n) => rn(r) - rn(n)
    );
    if (kr.length = 0, ir) {
      for (let r = 0; r < t.length; r++)
        ir.push(t[r]);
      return;
    }
    for (ir = t, Rr = 0; Rr < ir.length; Rr++) {
      const r = ir[Rr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    ir = null, Rr = 0;
  }
}
const rn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $s(e) {
  try {
    for (Ut = 0; Ut < it.length; Ut++) {
      const t = it[Ut];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), an(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ut < it.length; Ut++) {
      const t = it[Ut];
      t && (t.flags &= -2);
    }
    Ut = -1, it.length = 0, Hs(), Rn = null, (it.length || kr.length) && $s();
  }
}
let St = null, js = null;
function On(e) {
  const t = St;
  return St = e, js = e && e.type.__scopeId || null, t;
}
function Pa(e, t = St, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Po(-1);
    const o = On(t), s = _r.length;
    let a;
    try {
      a = e(...i);
    } finally {
      for (let f = _r.length; f > s; f--) pl();
      On(o), n._d && Po(1);
    }
    return a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function We(e, t) {
  if (St === null)
    return e;
  const r = Kn(St), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, f = Se] = t[i];
    o && (le(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Yt(s), n.push({
      dir: o,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: a,
      modifiers: f
    }));
  }
  return e;
}
function cr(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let f = a.dir[n];
    f && (Jt(), kt(f, r, 8, [
      e.el,
      a,
      e,
      t
    ]), Zt());
  }
}
function ka(e, t) {
  if (ot) {
    let r = ot.provides;
    const n = ot.parent && ot.parent.provides;
    n === r && (r = ot.provides = Object.create(n)), r[e] = t;
  }
}
function xn(e, t, r = !1) {
  const n = Rc();
  if (n || Mr) {
    let i = Mr ? Mr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && le(t) ? t.call(n && n.proxy) : t;
  }
}
const Ma = /* @__PURE__ */ Symbol.for("v-scx"), La = () => xn(Ma);
function li(e, t, r) {
  return Vs(e, t, r);
}
function Vs(e, t, r = Se) {
  const { immediate: n, deep: i, flush: o, once: s } = r, a = Qe({}, r), f = t && n || !t && o !== "post";
  let v;
  if (sn) {
    if (o === "sync") {
      const j = La();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!f) {
      const j = () => {
      };
      return j.stop = $t, j.resume = $t, j.pause = $t, j;
    }
  }
  const y = ot;
  a.call = (j, re, K) => kt(j, y, re, K);
  let E = !1;
  o === "post" ? a.scheduler = (j) => {
    dt(j, y && y.suspense);
  } : o !== "sync" && (E = !0, a.scheduler = (j, re) => {
    re ? j() : Gi(j);
  }), a.augmentJob = (j) => {
    t && (j.flags |= 4), E && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const P = wa(e, t, a);
  return sn && (v ? v.push(P) : f && P()), P;
}
function Ia(e, t, r) {
  const n = this.proxy, i = Le(e) ? e.includes(".") ? Bs(n, e) : () => n[e] : e.bind(n, n);
  let o;
  le(t) ? o = t : (o = t.handler, r = t);
  const s = cn(this), a = Vs(i, o.bind(n), r);
  return s(), a;
}
function Bs(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const Ua = /* @__PURE__ */ Symbol("_vte"), Bn = (e) => e.__isTeleport, ai = /* @__PURE__ */ Symbol("_leaveCb");
function Da(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== er) {
        t = r;
        break;
      }
  }
  return t;
}
function zs(e) {
  if (!Xi(e))
    return Bn(e.type) && e.children ? Da(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: r } = e;
  if (r) {
    if (t & 16)
      return r[0];
    if (t & 32 && le(r.default))
      return r.default();
  }
}
function Yi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    Yi(
      Bn(r.type) && zs(r) || r,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ws(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Eo(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Nn = /* @__PURE__ */ new WeakMap();
function Jr(e, t, r, n, i = !1) {
  if (Q(e)) {
    e.forEach(
      (K, oe) => Jr(
        K,
        t && (Q(t) ? t[oe] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (Zr(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Jr(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? Kn(n.component) : n.el, s = i ? null : o, { i: a, r: f } = e, v = t && t.r, y = a.refs === Se ? a.refs = {} : a.refs, E = a.setupState, P = /* @__PURE__ */ ye(E), j = E === Se ? ds : (K) => Eo(y, K) ? !1 : ge(P, K), re = (K, oe) => !(oe && Eo(y, oe));
  if (v != null && v !== f) {
    if (To(t), Le(v))
      y[v] = null, j(v) && (E[v] = null);
    else if (/* @__PURE__ */ Ze(v)) {
      const K = t;
      re(v, K.k) && (v.value = null), K.k && (y[K.k] = null);
    }
  }
  if (le(f))
    an(f, a, 12, [s, y]);
  else {
    const K = Le(f), oe = /* @__PURE__ */ Ze(f);
    if (K || oe) {
      const ne = () => {
        if (e.f) {
          const z = K ? j(f) ? E[f] : y[f] : re() || !e.k ? f.value : y[e.k];
          if (i)
            Q(z) && Fi(z, o);
          else if (Q(z))
            z.includes(o) || z.push(o);
          else if (K)
            y[f] = [o], j(f) && (E[f] = y[f]);
          else {
            const U = [o];
            re(f, e.k) && (f.value = U), e.k && (y[e.k] = U);
          }
        } else K ? (y[f] = s, j(f) && (E[f] = s)) : oe && (re(f, e.k) && (f.value = s), e.k && (y[e.k] = s));
      };
      if (s) {
        const z = () => {
          ne(), Nn.delete(e);
        };
        z.id = -1, Nn.set(e, z), dt(z, r);
      } else
        To(e), ne();
    }
  }
}
function To(e) {
  const t = Nn.get(e);
  t && (t.flags |= 8, Nn.delete(e));
}
$n().requestIdleCallback;
$n().cancelIdleCallback;
const Zr = (e) => !!e.type.__asyncLoader, Xi = (e) => e.type.__isKeepAlive;
function Fa(e, t) {
  qs(e, "a", t);
}
function Ha(e, t) {
  qs(e, "da", t);
}
function qs(e, t, r = ot) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (zn(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Xi(i.parent.vnode) && $a(n, t, r, i), i = i.parent;
  }
}
function $a(e, t, r, n) {
  const i = zn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Ys(() => {
    Fi(n[t], i);
  }, r);
}
function zn(e, t, r = ot, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Jt();
      const a = cn(r), f = kt(t, r, e, s);
      return a(), Zt(), f;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const tr = (e) => (t, r = ot) => {
  (!sn || e === "sp") && zn(e, (...n) => t(...n), r);
}, ja = tr("bm"), Ks = tr("m"), Va = tr(
  "bu"
), Ba = tr("u"), Gs = tr(
  "bum"
), Ys = tr("um"), za = tr(
  "sp"
), Wa = tr("rtg"), qa = tr("rtc");
function Ka(e, t = ot) {
  zn("ec", e, t);
}
const Ga = /* @__PURE__ */ Symbol.for("v-ndc");
function ve(e, t, r, n) {
  let i;
  const o = r, s = Q(e);
  if (s || Le(e)) {
    const a = s && /* @__PURE__ */ gr(e);
    let f = !1, v = !1;
    a && (f = !/* @__PURE__ */ xt(e), v = /* @__PURE__ */ Qt(e), e = jn(e)), i = new Array(e.length);
    for (let y = 0, E = e.length; y < E; y++)
      i[y] = t(
        f ? v ? Ir(Pt(e[y])) : Pt(e[y]) : e[y],
        y,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (Te(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (a, f) => t(a, f, void 0, o)
      );
    else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let f = 0, v = a.length; f < v; f++) {
        const y = a[f];
        i[f] = t(e[y], y, f, o);
      }
    }
  else
    i = [];
  return i;
}
const Ni = (e) => e ? yl(e) ? Kn(e) : Ni(e.parent) : null, Qr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Qe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ni(e.parent),
    $root: (e) => Ni(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Js(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Gi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ds.bind(e.proxy)),
    $watch: (e) => Ia.bind(e)
  })
), ci = (e, t) => e !== Se && !e.__isScriptSetup && ge(e, t), Ya = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: o, accessCache: s, type: a, appContext: f } = e;
    if (t[0] !== "$") {
      const P = s[t];
      if (P !== void 0)
        switch (P) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return r[t];
          case 3:
            return o[t];
        }
      else {
        if (ci(n, t))
          return s[t] = 1, n[t];
        if (i !== Se && ge(i, t))
          return s[t] = 2, i[t];
        if (ge(o, t))
          return s[t] = 3, o[t];
        if (r !== Se && ge(r, t))
          return s[t] = 4, r[t];
        Pi && (s[t] = 0);
      }
    }
    const v = Qr[t];
    let y, E;
    if (v)
      return t === "$attrs" && Je(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = a.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== Se && ge(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      E = f.config.globalProperties, ge(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return ci(i, t) ? (i[t] = r, !0) : n !== Se && ge(n, t) ? (n[t] = r, !0) : ge(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, a) {
    let f;
    return !!(r[a] || e !== Se && a[0] !== "$" && ge(e, a) || ci(t, a) || ge(o, a) || ge(n, a) || ge(Qr, a) || ge(i.config.globalProperties, a) || (f = s.__cssModules) && f[a]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : ge(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function So(e) {
  return Q(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Pi = !0;
function Xa(e) {
  const t = Js(e), r = e.proxy, n = e.ctx;
  Pi = !1, t.beforeCreate && xo(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: s,
    watch: a,
    provide: f,
    inject: v,
    // lifecycle
    created: y,
    beforeMount: E,
    mounted: P,
    beforeUpdate: j,
    updated: re,
    activated: K,
    deactivated: oe,
    beforeDestroy: ne,
    beforeUnmount: z,
    destroyed: U,
    unmounted: V,
    render: ue,
    renderTracked: Pe,
    renderTriggered: we,
    errorCaptured: Be,
    serverPrefetch: _e,
    // public API
    expose: De,
    inheritAttrs: et,
    // assets
    components: st,
    directives: Ke,
    filters: Tt
  } = t;
  if (v && Ja(v, n, null), s)
    for (const me in s) {
      const ce = s[me];
      le(ce) && (n[me] = ce.bind(r));
    }
  if (i) {
    const me = i.call(r, r);
    Te(me) && (e.data = /* @__PURE__ */ mr(me));
  }
  if (Pi = !0, o)
    for (const me in o) {
      const ce = o[me], Me = le(ce) ? ce.bind(r, r) : le(ce.get) ? ce.get.bind(r, r) : $t, ze = !le(ce) && le(ce.set) ? ce.set.bind(r) : $t, Ie = J({
        get: Me,
        set: ze
      });
      Object.defineProperty(n, me, {
        enumerable: !0,
        configurable: !0,
        get: () => Ie.value,
        set: (Fe) => Ie.value = Fe
      });
    }
  if (a)
    for (const me in a)
      Xs(a[me], n, r, me);
  if (f) {
    const me = le(f) ? f.call(r) : f;
    Reflect.ownKeys(me).forEach((ce) => {
      ka(ce, me[ce]);
    });
  }
  y && xo(y, e, "c");
  function ke(me, ce) {
    Q(ce) ? ce.forEach((Me) => me(Me.bind(r))) : ce && me(ce.bind(r));
  }
  if (ke(ja, E), ke(Ks, P), ke(Va, j), ke(Ba, re), ke(Fa, K), ke(Ha, oe), ke(Ka, Be), ke(qa, Pe), ke(Wa, we), ke(Gs, z), ke(Ys, V), ke(za, _e), Q(De))
    if (De.length) {
      const me = e.exposed || (e.exposed = {});
      De.forEach((ce) => {
        Object.defineProperty(me, ce, {
          get: () => r[ce],
          set: (Me) => r[ce] = Me,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ue && e.render === $t && (e.render = ue), et != null && (e.inheritAttrs = et), st && (e.components = st), Ke && (e.directives = Ke), _e && Ws(e);
}
function Ja(e, t, r = $t) {
  Q(e) && (e = ki(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Te(i) ? "default" in i ? o = xn(
      i.from || n,
      i.default,
      !0
    ) : o = xn(i.from || n) : o = xn(i), /* @__PURE__ */ Ze(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function xo(e, t, r) {
  kt(
    Q(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Xs(e, t, r, n) {
  let i = n.includes(".") ? Bs(r, n) : () => r[n];
  if (Le(e)) {
    const o = t[e];
    le(o) && li(i, o);
  } else if (le(e))
    li(i, e.bind(r));
  else if (Te(e))
    if (Q(e))
      e.forEach((o) => Xs(o, t, r, n));
    else {
      const o = le(e.handler) ? e.handler.bind(r) : t[e.handler];
      le(o) && li(i, o, e);
    }
}
function Js(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let f;
  return a ? f = a : !i.length && !r && !n ? f = t : (f = {}, i.length && i.forEach(
    (v) => Pn(f, v, s, !0)
  ), Pn(f, t, s)), Te(t) && o.set(t, f), f;
}
function Pn(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Pn(e, o, r, !0), i && i.forEach(
    (s) => Pn(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const a = Za[s] || r && r[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const Za = {
  data: Co,
  props: Ao,
  emits: Ao,
  // objects
  methods: Wr,
  computed: Wr,
  // lifecycle
  beforeCreate: nt,
  created: nt,
  beforeMount: nt,
  mounted: nt,
  beforeUpdate: nt,
  updated: nt,
  beforeDestroy: nt,
  beforeUnmount: nt,
  destroyed: nt,
  unmounted: nt,
  activated: nt,
  deactivated: nt,
  errorCaptured: nt,
  serverPrefetch: nt,
  // assets
  components: Wr,
  directives: Wr,
  // watch
  watch: ec,
  // provide / inject
  provide: Co,
  inject: Qa
};
function Co(e, t) {
  return t ? e ? function() {
    return Qe(
      le(e) ? e.call(this, this) : e,
      le(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qa(e, t) {
  return Wr(ki(e), ki(t));
}
function ki(e) {
  if (Q(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function nt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wr(e, t) {
  return e ? Qe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ao(e, t) {
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Qe(
    /* @__PURE__ */ Object.create(null),
    So(e),
    So(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = Qe(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = nt(e[n], t[n]);
  return r;
}
function Zs() {
  return {
    app: null,
    config: {
      isNativeTag: ds,
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
let tc = 0;
function rc(e, t) {
  return function(n, i = null) {
    le(n) || (n = Qe({}, n)), i != null && !Te(i) && (i = null);
    const o = Zs(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let f = !1;
    const v = o.app = {
      _uid: tc++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Lc,
      get config() {
        return o.config;
      },
      set config(y) {
      },
      use(y, ...E) {
        return s.has(y) || (y && le(y.install) ? (s.add(y), y.install(v, ...E)) : le(y) && (s.add(y), y(v, ...E))), v;
      },
      mixin(y) {
        return o.mixins.includes(y) || o.mixins.push(y), v;
      },
      component(y, E) {
        return E ? (o.components[y] = E, v) : o.components[y];
      },
      directive(y, E) {
        return E ? (o.directives[y] = E, v) : o.directives[y];
      },
      mount(y, E, P) {
        if (!f) {
          const j = v._ceVNode || Xt(n, i);
          return j.appContext = o, P === !0 ? P = "svg" : P === !1 && (P = void 0), e(j, y, P), f = !0, v._container = y, y.__vue_app__ = v, Kn(j.component);
        }
      },
      onUnmount(y) {
        a.push(y);
      },
      unmount() {
        f && (kt(
          a,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, E) {
        return o.provides[y] = E, v;
      },
      runWithContext(y) {
        const E = Mr;
        Mr = v;
        try {
          return y();
        } finally {
          Mr = E;
        }
      }
    };
    return v;
  };
}
let Mr = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ot(t)}Modifiers`] || e[`${Er(t)}Modifiers`];
function ic(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Se;
  let i = r;
  const o = t.startsWith("update:"), s = o && nc(n, t.slice(7));
  s && (s.trim && (i = r.map((y) => Le(y) ? y.trim() : y)), s.number && (i = i.map(Hn)));
  let a, f = n[a = ri(t)] || // also try camelCase event handler (#2249)
  n[a = ri(Ot(t))];
  !f && o && (f = n[a = ri(Er(t))]), f && kt(
    f,
    e,
    6,
    i
  );
  const v = n[a + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, kt(
      v,
      e,
      6,
      i
    );
  }
}
const oc = /* @__PURE__ */ new WeakMap();
function Qs(e, t, r = !1) {
  const n = r ? oc : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!le(e)) {
    const f = (v) => {
      const y = Qs(v, t, !0);
      y && (a = !0, Qe(s, y));
    };
    !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !o && !a ? (Te(e) && n.set(e, null), null) : (Q(o) ? o.forEach((f) => s[f] = null) : Qe(s, o), Te(e) && n.set(e, s), s);
}
function Wn(e, t) {
  return !e || !Un(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, Er(t)) || ge(e, t));
}
function wo(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: s,
    attrs: a,
    emit: f,
    render: v,
    renderCache: y,
    props: E,
    data: P,
    setupState: j,
    ctx: re,
    inheritAttrs: K
  } = e, oe = On(e);
  let ne, z;
  try {
    if (r.shapeFlag & 4) {
      const V = i || n, ue = V;
      ne = Ft(
        v.call(
          ue,
          V,
          y,
          E,
          j,
          P,
          re
        )
      ), z = a;
    } else {
      const V = t;
      ne = Ft(
        V.length > 1 ? V(
          E,
          { attrs: a, slots: s, emit: f }
        ) : V(
          E,
          null
        )
      ), z = t.props ? a : sc(a);
    }
  } catch (V) {
    _r.length = 0, Vn(V, e, 1), ne = Xt(er);
  }
  let U = ne;
  if (z && K !== !1) {
    const V = Object.keys(z), { shapeFlag: ue } = U;
    V.length && ue & 7 && (o && V.some(Dn) && (z = lc(
      z,
      o
    )), U = Ur(U, z, !1, !0));
  }
  if (r.dirs && (U = Ur(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = Bn(U.type) && zs(U) || U;
    Yi(V, r.transition);
  }
  return ne = U, On(oe), ne;
}
const sc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Un(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, lc = (e, t) => {
  const r = {};
  for (const n in e)
    (!Dn(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function ac(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: s, children: a, patchFlag: f } = t, v = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? Ro(n, s, v) : !!s;
    if (f & 8) {
      const y = t.dynamicProps;
      for (let E = 0; E < y.length; E++) {
        const P = y[E];
        if (el(s, n, P) && !Wn(v, P))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === s ? !1 : n ? s ? Ro(n, s, v) : !0 : !!s;
  return !1;
}
function Ro(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (el(t, e, o) && !Wn(r, o))
      return !0;
  }
  return !1;
}
function el(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Te(n) && Te(i) ? !sr(n, i) : n !== i;
}
function cc({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const tl = {}, rl = () => Object.create(tl), nl = (e) => Object.getPrototypeOf(e) === tl;
function uc(e, t, r, n = !1) {
  const i = {}, o = rl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), il(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ ga(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function fc(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, a = /* @__PURE__ */ ye(i), [f] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const y = e.vnode.dynamicProps;
      for (let E = 0; E < y.length; E++) {
        let P = y[E];
        if (Wn(e.emitsOptions, P))
          continue;
        const j = t[P];
        if (f)
          if (ge(o, P))
            j !== o[P] && (o[P] = j, v = !0);
          else {
            const re = Ot(P);
            i[re] = Mi(
              f,
              a,
              re,
              j,
              e,
              !1
            );
          }
        else
          j !== o[P] && (o[P] = j, v = !0);
      }
    }
  } else {
    il(e, t, i, o) && (v = !0);
    let y;
    for (const E in a)
      (!t || // for camelCase
      !ge(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Er(E)) === E || !ge(t, y))) && (f ? r && // for camelCase
      (r[E] !== void 0 || // for kebab-case
      r[y] !== void 0) && (i[E] = Mi(
        f,
        a,
        E,
        void 0,
        e,
        !0
      )) : delete i[E]);
    if (o !== a)
      for (const E in o)
        (!t || !ge(t, E)) && (delete o[E], v = !0);
  }
  v && Gt(e.attrs, "set", "");
}
function il(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let f in t) {
      if (Gr(f))
        continue;
      const v = t[f];
      let y;
      i && ge(i, y = Ot(f)) ? !o || !o.includes(y) ? r[y] = v : (a || (a = {}))[y] = v : Wn(e.emitsOptions, f) || (!(f in n) || v !== n[f]) && (n[f] = v, s = !0);
    }
  if (o) {
    const f = /* @__PURE__ */ ye(r), v = a || Se;
    for (let y = 0; y < o.length; y++) {
      const E = o[y];
      r[E] = Mi(
        i,
        f,
        E,
        v[E],
        e,
        !ge(v, E)
      );
    }
  }
  return s;
}
function Mi(e, t, r, n, i, o) {
  const s = e[r];
  if (s != null) {
    const a = ge(s, "default");
    if (a && n === void 0) {
      const f = s.default;
      if (s.type !== Function && !s.skipFactory && le(f)) {
        const { propsDefaults: v } = i;
        if (r in v)
          n = v[r];
        else {
          const y = cn(i);
          n = v[r] = f.call(
            null,
            t
          ), y();
        }
      } else
        n = f;
      i.ce && i.ce._setProp(r, n);
    }
    s[
      0
      /* shouldCast */
    ] && (o && !a ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Er(r)) && (n = !0));
  }
  return n;
}
const dc = /* @__PURE__ */ new WeakMap();
function ol(e, t, r = !1) {
  const n = r ? dc : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let f = !1;
  if (!le(e)) {
    const y = (E) => {
      f = !0;
      const [P, j] = ol(E, t, !0);
      Qe(s, P), j && a.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!o && !f)
    return Te(e) && n.set(e, Nr), Nr;
  if (Q(o))
    for (let y = 0; y < o.length; y++) {
      const E = Ot(o[y]);
      Oo(E) && (s[E] = Se);
    }
  else if (o)
    for (const y in o) {
      const E = Ot(y);
      if (Oo(E)) {
        const P = o[y], j = s[E] = Q(P) || le(P) ? { type: P } : Qe({}, P), re = j.type;
        let K = !1, oe = !0;
        if (Q(re))
          for (let ne = 0; ne < re.length; ++ne) {
            const z = re[ne], U = le(z) && z.name;
            if (U === "Boolean") {
              K = !0;
              break;
            } else U === "String" && (oe = !1);
          }
        else
          K = le(re) && re.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = K, j[
          1
          /* shouldCastTrue */
        ] = oe, (K || ge(j, "default")) && a.push(E);
      }
    }
  const v = [s, a];
  return Te(e) && n.set(e, v), v;
}
function Oo(e) {
  return e[0] !== "$" && !Gr(e);
}
const Ji = (e) => e === "_" || e === "_ctx" || e === "$stable", Zi = (e) => Q(e) ? e.map(Ft) : [Ft(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = Pa((...i) => Zi(t(...i)), r);
  return n._c = !1, n;
}, sl = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Ji(i)) continue;
    const o = e[i];
    if (le(o))
      t[i] = pc(i, o, n);
    else if (o != null) {
      const s = Zi(o);
      t[i] = () => s;
    }
  }
}, ll = (e, t) => {
  const r = Zi(t);
  e.slots.default = () => r;
}, al = (e, t, r) => {
  for (const n in t)
    (r || !Ji(n)) && (e[n] = t[n]);
}, hc = (e, t, r) => {
  const n = e.slots = rl();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (al(n, t, r), r && ys(n, "_", i, !0)) : sl(t, n);
  } else t && ll(e, t);
}, mc = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, s = Se;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? r && a === 1 ? o = !1 : al(i, t, r) : (o = !t.$stable, sl(t, i)), s = t;
  } else t && (ll(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !Ji(a) && s[a] == null && delete i[a];
}, dt = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = $n();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: s,
    createText: a,
    createComment: f,
    setText: v,
    setElementText: y,
    parentNode: E,
    nextSibling: P,
    setScopeId: j = $t,
    insertStaticContent: re
  } = e, K = (p, m, _, A = null, T = null, x = null, L = void 0, I = null, M = !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !$r(p, m) && (A = ht(p), Fe(p, T, x, !0), p = null), m.patchFlag === -2 && (M = !1, m.dynamicChildren = null);
    const { type: S, ref: q, shapeFlag: H } = m;
    switch (S) {
      case qn:
        oe(p, m, _, A);
        break;
      case er:
        ne(p, m, _, A);
        break;
      case fi:
        p == null && z(m, _, A, L);
        break;
      case se:
        st(
          p,
          m,
          _,
          A,
          T,
          x,
          L,
          I,
          M
        );
        break;
      default:
        H & 1 ? ue(
          p,
          m,
          _,
          A,
          T,
          x,
          L,
          I,
          M
        ) : H & 6 ? Ke(
          p,
          m,
          _,
          A,
          T,
          x,
          L,
          I,
          M
        ) : (H & 64 || H & 128) && S.process(
          p,
          m,
          _,
          A,
          T,
          x,
          L,
          I,
          M,
          lt
        );
    }
    q != null && T ? Jr(q, p && p.ref, x, m || p, !m) : q == null && p && p.ref != null && Jr(p.ref, null, x, p, !0);
  }, oe = (p, m, _, A) => {
    if (p == null)
      n(
        m.el = a(m.children),
        _,
        A
      );
    else {
      const T = m.el = p.el;
      m.children !== p.children && v(T, m.children);
    }
  }, ne = (p, m, _, A) => {
    p == null ? n(
      m.el = f(m.children || ""),
      _,
      A
    ) : m.el = p.el;
  }, z = (p, m, _, A) => {
    [p.el, p.anchor] = re(
      p.children,
      m,
      _,
      A,
      p.el,
      p.anchor
    );
  }, U = ({ el: p, anchor: m }, _, A) => {
    let T;
    for (; p && p !== m; )
      T = P(p), n(p, _, A), p = T;
    n(m, _, A);
  }, V = ({ el: p, anchor: m }) => {
    let _;
    for (; p && p !== m; )
      _ = P(p), i(p), p = _;
    i(m);
  }, ue = (p, m, _, A, T, x, L, I, M) => {
    if (m.type === "svg" ? L = "svg" : m.type === "math" && (L = "mathml"), p == null)
      Pe(
        m,
        _,
        A,
        T,
        x,
        L,
        I,
        M
      );
    else {
      const S = p.el && p.el._isVueCE ? p.el : null;
      try {
        S && S._beginPatch(), _e(
          p,
          m,
          T,
          x,
          L,
          I,
          M
        );
      } finally {
        S && S._endPatch();
      }
    }
  }, Pe = (p, m, _, A, T, x, L, I) => {
    let M, S;
    const { props: q, shapeFlag: H, transition: W, dirs: X } = p;
    if (M = p.el = s(
      p.type,
      x,
      q && q.is,
      q
    ), H & 8 ? y(M, p.children) : H & 16 && Be(
      p.children,
      M,
      null,
      A,
      T,
      ui(p, x),
      L,
      I
    ), X && cr(p, null, A, "created"), we(M, p, p.scopeId, L, A), q) {
      for (const N in q)
        N !== "value" && !Gr(N) && o(M, N, null, q[N], x, A);
      "value" in q && o(M, "value", null, q.value, x), (S = q.onVnodeBeforeMount) && It(S, A, p);
    }
    X && cr(p, null, A, "beforeMount");
    const ee = gc(T, W);
    ee && W.beforeEnter(M), n(M, m, _), ((S = q && q.onVnodeMounted) || ee || X) && dt(() => {
      S && It(S, A, p), ee && W.enter(M), X && cr(p, null, A, "mounted");
    }, T);
  }, we = (p, m, _, A, T) => {
    if (_ && j(p, _), A)
      for (let x = 0; x < A.length; x++)
        j(p, A[x]);
    if (T) {
      let x = T.subTree;
      if (m === x || dl(x.type) && (x.ssContent === m || x.ssFallback === m)) {
        const L = T.vnode;
        we(
          p,
          L,
          L.scopeId,
          L.slotScopeIds,
          T.parent
        );
      }
    }
  }, Be = (p, m, _, A, T, x, L, I, M = 0) => {
    for (let S = M; S < p.length; S++) {
      const q = p[S] = I ? Kt(p[S]) : Ft(p[S]);
      K(
        null,
        q,
        m,
        _,
        A,
        T,
        x,
        L,
        I
      );
    }
  }, _e = (p, m, _, A, T, x, L) => {
    const I = m.el = p.el;
    let { patchFlag: M, dynamicChildren: S, dirs: q } = m;
    M |= p.patchFlag & 16;
    const H = p.props || Se, W = m.props || Se;
    let X;
    if (_ && ur(_, !1), (X = W.onVnodeBeforeUpdate) && It(X, _, m, p), q && cr(m, p, _, "beforeUpdate"), _ && ur(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    S && (!p.dynamicChildren || p.dynamicChildren.length !== S.length) && (M = 0, L = !1, S = null), (H.innerHTML && W.innerHTML == null || H.textContent && W.textContent == null) && y(I, ""), S ? De(
      p.dynamicChildren,
      S,
      I,
      _,
      A,
      ui(m, T),
      x
    ) : L || ce(
      p,
      m,
      I,
      null,
      _,
      A,
      ui(m, T),
      x,
      !1
    ), M > 0) {
      if (M & 16)
        et(I, H, W, _, T);
      else if (M & 2 && H.class !== W.class && o(I, "class", null, W.class, T), M & 4 && o(I, "style", H.style, W.style, T), M & 8) {
        const ee = m.dynamicProps;
        for (let N = 0; N < ee.length; N++) {
          const O = ee[N], $ = H[O], Z = W[O];
          (Z !== $ || O === "value") && o(I, O, $, Z, T, _);
        }
      }
      M & 1 && p.children !== m.children && y(I, m.children);
    } else !L && S == null && et(I, H, W, _, T);
    ((X = W.onVnodeUpdated) || q) && dt(() => {
      X && It(X, _, m, p), q && cr(m, p, _, "updated");
    }, A);
  }, De = (p, m, _, A, T, x, L) => {
    for (let I = 0; I < m.length; I++) {
      const M = p[I], S = m[I], q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        M.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (M.type === se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$r(M, S) || // - In the case of a component, it could contain anything.
        M.shapeFlag & 198) ? E(M.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      K(
        M,
        S,
        q,
        null,
        A,
        T,
        x,
        L,
        !0
      );
    }
  }, et = (p, m, _, A, T) => {
    if (m !== _) {
      if (m !== Se)
        for (const x in m)
          !Gr(x) && !(x in _) && o(
            p,
            x,
            m[x],
            null,
            T,
            A
          );
      for (const x in _) {
        if (Gr(x)) continue;
        const L = _[x], I = m[x];
        L !== I && x !== "value" && o(p, x, I, L, T, A);
      }
      "value" in _ && o(p, "value", m.value, _.value, T);
    }
  }, st = (p, m, _, A, T, x, L, I, M) => {
    const S = m.el = p ? p.el : a(""), q = m.anchor = p ? p.anchor : a("");
    let { patchFlag: H, dynamicChildren: W, slotScopeIds: X } = m;
    X && (I = I ? I.concat(X) : X), p == null ? (n(S, _, A), n(q, _, A), Be(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      _,
      q,
      T,
      x,
      L,
      I,
      M
    )) : H > 0 && H & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === W.length ? (De(
      p.dynamicChildren,
      W,
      _,
      T,
      x,
      L,
      I
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || T && m === T.subTree) && cl(
      p,
      m,
      !0
      /* shallow */
    )) : ce(
      p,
      m,
      _,
      q,
      T,
      x,
      L,
      I,
      M
    );
  }, Ke = (p, m, _, A, T, x, L, I, M) => {
    m.slotScopeIds = I, p == null ? m.shapeFlag & 512 ? T.ctx.activate(
      m,
      _,
      A,
      L,
      M
    ) : Tt(
      m,
      _,
      A,
      T,
      x,
      L,
      M
    ) : $e(p, m, M);
  }, Tt = (p, m, _, A, T, x, L) => {
    const I = p.component = wc(
      p,
      A,
      T
    );
    if (Xi(p) && (I.ctx.renderer = lt), Oc(I, !1, L), I.asyncDep) {
      if (T && T.registerDep(I, ke, L), !p.el) {
        const M = I.subTree = Xt(er);
        ne(null, M, m, _), p.placeholder = M.el;
      }
    } else
      ke(
        I,
        p,
        m,
        _,
        T,
        x,
        L
      );
  }, $e = (p, m, _) => {
    const A = m.component = p.component;
    if (ac(p, m, _))
      if (A.asyncDep && !A.asyncResolved) {
        me(A, m, _);
        return;
      } else
        A.next = m, A.update();
    else
      m.el = p.el, A.vnode = m;
  }, ke = (p, m, _, A, T, x, L) => {
    const I = () => {
      if (p.isMounted) {
        let { next: H, bu: W, u: X, parent: ee, vnode: N } = p;
        {
          const he = ul(p);
          if (he) {
            H && (H.el = N.el, me(p, H, L)), he.asyncDep.then(() => {
              dt(() => {
                p.isUnmounted || S();
              }, T);
            });
            return;
          }
        }
        let O = H, $;
        ur(p, !1), H ? (H.el = N.el, me(p, H, L)) : H = N, W && Sn(W), ($ = H.props && H.props.onVnodeBeforeUpdate) && It($, ee, H, N), ur(p, !0);
        const Z = wo(p), ie = p.subTree;
        p.subTree = Z, K(
          ie,
          Z,
          // parent may have changed if it's in a teleport
          E(ie.el),
          // anchor may have changed if it's in a fragment
          ht(ie),
          p,
          T,
          x
        ), H.el = Z.el, O === null && cc(p, Z.el), X && dt(X, T), ($ = H.props && H.props.onVnodeUpdated) && dt(
          () => It($, ee, H, N),
          T
        );
      } else {
        let H;
        const { el: W, props: X } = m, { bm: ee, m: N, parent: O, root: $, type: Z } = p, ie = Zr(m);
        ur(p, !1), ee && Sn(ee), !ie && (H = X && X.onVnodeBeforeMount) && It(H, O, m), ur(p, !0);
        {
          $.ce && $.ce._hasShadowRoot() && $.ce._injectChildStyle(
            Z,
            p.parent ? p.parent.type : void 0
          );
          const he = p.subTree = wo(p);
          K(
            null,
            he,
            _,
            A,
            p,
            T,
            x
          ), m.el = he.el;
        }
        if (N && dt(N, T), !ie && (H = X && X.onVnodeMounted)) {
          const he = m;
          dt(
            () => It(H, O, he),
            T
          );
        }
        (m.shapeFlag & 256 || O && Zr(O.vnode) && O.vnode.shapeFlag & 256) && p.a && dt(p.a, T), p.isMounted = !0, m = _ = A = null;
      }
    };
    p.scope.on();
    const M = p.effect = new Es(I);
    p.scope.off();
    const S = p.update = M.run.bind(M), q = p.job = M.runIfDirty.bind(M);
    q.i = p, q.id = p.uid, M.scheduler = () => Gi(q), ur(p, !0), S();
  }, me = (p, m, _) => {
    m.component = p;
    const A = p.vnode.props;
    p.vnode = m, p.next = null, fc(p, m.props, A, _), mc(p, m.children, _), Jt(), vo(p), Zt();
  }, ce = (p, m, _, A, T, x, L, I, M = !1) => {
    const S = p && p.children, q = p ? p.shapeFlag : 0, H = m.children, { patchFlag: W, shapeFlag: X } = m;
    if (W > 0) {
      if (W & 128) {
        ze(
          S,
          H,
          _,
          A,
          T,
          x,
          L,
          I,
          M
        );
        return;
      } else if (W & 256) {
        Me(
          S,
          H,
          _,
          A,
          T,
          x,
          L,
          I,
          M
        );
        return;
      }
    }
    X & 8 ? (q & 16 && je(S, T, x), H !== S && y(_, H)) : q & 16 ? X & 16 ? ze(
      S,
      H,
      _,
      A,
      T,
      x,
      L,
      I,
      M
    ) : je(S, T, x, !0) : (q & 8 && y(_, ""), X & 16 && Be(
      H,
      _,
      A,
      T,
      x,
      L,
      I,
      M
    ));
  }, Me = (p, m, _, A, T, x, L, I, M) => {
    p = p || Nr, m = m || Nr;
    const S = p.length, q = m.length, H = Math.min(S, q);
    let W;
    for (W = 0; W < H; W++) {
      const X = m[W] = M ? Kt(m[W]) : Ft(m[W]);
      K(
        p[W],
        X,
        _,
        null,
        T,
        x,
        L,
        I,
        M
      );
    }
    S > q ? je(
      p,
      T,
      x,
      !0,
      !1,
      H
    ) : Be(
      m,
      _,
      A,
      T,
      x,
      L,
      I,
      M,
      H
    );
  }, ze = (p, m, _, A, T, x, L, I, M) => {
    let S = 0;
    const q = m.length;
    let H = p.length - 1, W = q - 1;
    for (; S <= H && S <= W; ) {
      const X = p[S], ee = m[S] = M ? Kt(m[S]) : Ft(m[S]);
      if ($r(X, ee))
        K(
          X,
          ee,
          _,
          null,
          T,
          x,
          L,
          I,
          M
        );
      else
        break;
      S++;
    }
    for (; S <= H && S <= W; ) {
      const X = p[H], ee = m[W] = M ? Kt(m[W]) : Ft(m[W]);
      if ($r(X, ee))
        K(
          X,
          ee,
          _,
          null,
          T,
          x,
          L,
          I,
          M
        );
      else
        break;
      H--, W--;
    }
    if (S > H) {
      if (S <= W) {
        const X = W + 1, ee = X < q ? m[X].el : A;
        for (; S <= W; )
          K(
            null,
            m[S] = M ? Kt(m[S]) : Ft(m[S]),
            _,
            ee,
            T,
            x,
            L,
            I,
            M
          ), S++;
      }
    } else if (S > W)
      for (; S <= H; )
        Fe(p[S], T, x, !0), S++;
    else {
      const X = S, ee = S, N = /* @__PURE__ */ new Map();
      for (S = ee; S <= W; S++) {
        const Ae = m[S] = M ? Kt(m[S]) : Ft(m[S]);
        Ae.key != null && N.set(Ae.key, S);
      }
      let O, $ = 0;
      const Z = W - ee + 1;
      let ie = !1, he = 0;
      const ae = new Array(Z);
      for (S = 0; S < Z; S++) ae[S] = 0;
      for (S = X; S <= H; S++) {
        const Ae = p[S];
        if ($ >= Z) {
          Fe(Ae, T, x, !0);
          continue;
        }
        let Oe;
        if (Ae.key != null)
          Oe = N.get(Ae.key);
        else
          for (O = ee; O <= W; O++)
            if (ae[O - ee] === 0 && $r(Ae, m[O])) {
              Oe = O;
              break;
            }
        Oe === void 0 ? Fe(Ae, T, x, !0) : (ae[Oe - ee] = S + 1, Oe >= he ? he = Oe : ie = !0, K(
          Ae,
          m[Oe],
          _,
          null,
          T,
          x,
          L,
          I,
          M
        ), $++);
      }
      const Re = ie ? _c(ae) : Nr;
      for (O = Re.length - 1, S = Z - 1; S >= 0; S--) {
        const Ae = ee + S, Oe = m[Ae], at = m[Ae + 1], Mt = Ae + 1 < q ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          at.el || fl(at)
        ) : A;
        ae[S] === 0 ? K(
          null,
          Oe,
          _,
          Mt,
          T,
          x,
          L,
          I,
          M
        ) : ie && (O < 0 || S !== Re[O] ? Ie(Oe, _, Mt, 2) : O--);
      }
    }
  }, Ie = (p, m, _, A, T = null) => {
    const { el: x, type: L, transition: I, children: M, shapeFlag: S } = p;
    if (S & 6) {
      Ie(p.component.subTree, m, _, A);
      return;
    }
    if (S & 128) {
      p.suspense.move(m, _, A);
      return;
    }
    if (S & 64) {
      L.move(p, m, _, lt);
      return;
    }
    if (L === se) {
      n(x, m, _);
      for (let H = 0; H < M.length; H++)
        Ie(M[H], m, _, A);
      n(p.anchor, m, _);
      return;
    }
    if (L === fi) {
      U(p, m, _);
      return;
    }
    if (A !== 2 && S & 1 && I)
      if (A === 0)
        I.persisted && !x[ai] ? n(x, m, _) : (I.beforeEnter(x), n(x, m, _), dt(() => I.enter(x), T));
      else {
        const { leave: H, delayLeave: W, afterLeave: X } = I, ee = () => {
          p.ctx.isUnmounted ? i(x) : n(x, m, _);
        }, N = () => {
          const O = x._isLeaving || !!x[ai];
          x._isLeaving && x[ai](
            !0
            /* cancelled */
          ), I.persisted && !O ? ee() : H(x, () => {
            ee(), X && X();
          });
        };
        W ? W(x, ee, N) : N();
      }
    else
      n(x, m, _);
  }, Fe = (p, m, _, A = !1, T = !1) => {
    const {
      type: x,
      props: L,
      ref: I,
      children: M,
      dynamicChildren: S,
      shapeFlag: q,
      patchFlag: H,
      dirs: W,
      cacheIndex: X,
      memo: ee
    } = p;
    if (H === -2 && (T = !1), I != null && (Jt(), Jr(I, null, _, p, !0), Zt()), X != null && (m.renderCache[X] = void 0), q & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const N = q & 1 && W, O = !Zr(p);
    let $;
    if (O && ($ = L && L.onVnodeBeforeUnmount) && It($, m, p), q & 6)
      Vt(p.component, _, A);
    else {
      if (q & 128) {
        p.suspense.unmount(_, A);
        return;
      }
      N && cr(p, null, m, "beforeUnmount"), q & 64 ? p.type.remove(
        p,
        m,
        _,
        lt,
        A
      ) : S && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !S.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== se || H > 0 && H & 64) ? je(
        S,
        m,
        _,
        !1,
        !0
      ) : (x === se && H & 384 || !T && q & 16) && je(M, m, _), A && Ct(p);
    }
    const Z = ee != null && X == null;
    (O && ($ = L && L.onVnodeUnmounted) || N || Z) && dt(() => {
      $ && It($, m, p), N && cr(p, null, m, "unmounted"), Z && (p.el = null);
    }, _);
  }, Ct = (p) => {
    const { type: m, el: _, anchor: A, transition: T } = p;
    if (m === se) {
      fe(_, A);
      return;
    }
    if (m === fi) {
      V(p);
      return;
    }
    const x = () => {
      i(_), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (p.shapeFlag & 1 && T && !T.persisted) {
      const { leave: L, delayLeave: I } = T, M = () => L(_, x);
      I ? I(p.el, x, M) : M();
    } else
      x();
  }, fe = (p, m) => {
    let _;
    for (; p !== m; )
      _ = P(p), i(p), p = _;
    i(m);
  }, Vt = (p, m, _) => {
    const { bum: A, scope: T, job: x, subTree: L, um: I, m: M, a: S } = p;
    No(M), No(S), A && Sn(A), T.stop(), x && (x.flags |= 8, Fe(L, p, m, _)), I && dt(I, m), dt(() => {
      p.isUnmounted = !0;
    }, m);
  }, je = (p, m, _, A = !1, T = !1, x = 0) => {
    for (let L = x; L < p.length; L++)
      Fe(p[L], m, _, A, T);
  }, ht = (p) => {
    if (p.shapeFlag & 6)
      return ht(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const m = P(p.anchor || p.el), _ = m && m[Ua];
    return _ ? P(_) : m;
  };
  let mt = !1;
  const bt = (p, m, _) => {
    let A;
    p == null ? m._vnode && (Fe(m._vnode, null, null, !0), A = m._vnode.component) : K(
      m._vnode || null,
      p,
      m,
      null,
      null,
      null,
      _
    ), m._vnode = p, mt || (mt = !0, vo(A), Hs(), mt = !1);
  }, lt = {
    p: K,
    um: Fe,
    m: Ie,
    r: Ct,
    mt: Tt,
    mc: Be,
    pc: ce,
    pbc: De,
    n: ht,
    o: e
  };
  return {
    render: bt,
    hydrate: void 0,
    createApp: rc(bt)
  };
}
function ui({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function ur({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function cl(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (Q(n) && Q(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Kt(i[o]), a.el = s.el), !r && a.patchFlag !== -2 && cl(s, a)), a.type === qn && (a.patchFlag === -1 && (a = i[o] = Kt(a)), a.el = s.el), a.type === er && !a.el && (a.el = s.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, i, o, s, a;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const v = e[n];
    if (v !== 0) {
      if (i = r[r.length - 1], e[i] < v) {
        t[n] = i, r.push(n);
        continue;
      }
      for (o = 0, s = r.length - 1; o < s; )
        a = o + s >> 1, e[r[a]] < v ? o = a + 1 : s = a;
      v < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n);
    }
  }
  for (o = r.length, s = r[o - 1]; o-- > 0; )
    r[o] = s, s = t[s];
  return r;
}
function ul(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ul(t);
}
function No(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function fl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? fl(t.subTree) : null;
}
const dl = (e) => e.__isSuspense;
function vc(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Na(e);
}
const se = /* @__PURE__ */ Symbol.for("v-fgt"), qn = /* @__PURE__ */ Symbol.for("v-txt"), er = /* @__PURE__ */ Symbol.for("v-cmt"), fi = /* @__PURE__ */ Symbol.for("v-stc"), _r = [];
let Et = null;
function C(e = !1) {
  _r.push(Et = e ? null : []);
}
function pl() {
  _r.pop(), Et = _r[_r.length - 1] || null;
}
let nn = 1;
function Po(e, t = !1) {
  nn += e, e < 0 && Et && t && (Et.hasOnce = !0);
}
function hl(e) {
  return e.dynamicChildren = nn > 0 ? Et || Nr : null, pl(), nn > 0 && Et && Et.push(e), e;
}
function R(e, t, r, n, i, o) {
  return hl(
    u(
      e,
      t,
      r,
      n,
      i,
      o,
      !0
    )
  );
}
function Ec(e, t, r, n, i) {
  return hl(
    Xt(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function ml(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function $r(e, t) {
  return e.type === t.type && e.key === t.key;
}
const bl = ({ key: e }) => e ?? null, Cn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Le(e) || /* @__PURE__ */ Ze(e) || le(e) ? { i: St, r: e, k: t, f: !!r } : e : null);
function u(e, t = null, r = null, n = 0, i = null, o = e === se ? 0 : 1, s = !1, a = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bl(t),
    ref: t && Cn(t),
    scopeId: js,
    slotScopeIds: null,
    children: r,
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
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: St
  };
  return a ? (kn(f, r), o & 128 && e.normalize(f)) : r && (f.shapeFlag |= Le(r) ? 8 : 16), nn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Et && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Et.push(f), f;
}
const Xt = Tc;
function Tc(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Ga) && (e = er), ml(e)) {
    const a = Ur(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && kn(a, r), nn > 0 && !o && Et && (a.shapeFlag & 6 ? Et[Et.indexOf(e)] = a : Et.push(a)), a.patchFlag = -2, a;
  }
  if (Mc(e) && (e = e.__vccOpts), t) {
    t = Sc(t);
    let { class: a, style: f } = t;
    a && !Le(a) && (t.class = Pr(a)), Te(f) && (/* @__PURE__ */ Ki(f) && !Q(f) && (f = Qe({}, f)), t.style = $i(f));
  }
  const s = Le(e) ? 1 : dl(e) ? 128 : Bn(e) ? 64 : Te(e) ? 4 : le(e) ? 2 : 0;
  return u(
    e,
    t,
    r,
    n,
    i,
    s,
    o,
    !0
  );
}
function Sc(e) {
  return e ? /* @__PURE__ */ Ki(e) || nl(e) ? Qe({}, e) : e : null;
}
function Ur(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: f } = e, v = t ? xc(i || {}, t) : i, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && bl(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? Q(o) ? o.concat(Cn(t)) : [o, Cn(t)] : Cn(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== se ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Ur(e.ssContent),
    ssFallback: e.ssFallback && Ur(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && Yi(
    y,
    f.clone(y)
  ), y;
}
function be(e = " ", t = 0) {
  return Xt(qn, null, e, t);
}
function de(e = "", t = !1) {
  return t ? (C(), Ec(er, null, e)) : Xt(er, null, e);
}
function Ft(e) {
  return e == null || typeof e == "boolean" ? Xt(er) : Q(e) ? Xt(
    se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ml(e) ? Kt(e) : Xt(qn, null, String(e));
}
function Kt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ur(e);
}
function kn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), kn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !nl(t) ? t._ctx = St : i === 3 && St && (St.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (le(t)) {
    if (n & 65) {
      kn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: St }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [be(t)]) : r = 8;
  e.children = t, e.shapeFlag |= r;
}
function xc(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = Pr([t.class, n.class]));
      else if (i === "style")
        t.style = $i([t.style, n.style]);
      else if (Un(i)) {
        const o = t[i], s = n[i];
        s && o !== s && !(Q(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Dn(i) && (t[i] = s);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function It(e, t, r, n = null) {
  kt(e, t, 7, [
    r,
    n
  ]);
}
const Cc = Zs();
let Ac = 0;
function wc(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Cc, o = {
    uid: Ac++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Ql(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ol(n, i),
    emitsOptions: Qs(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Se,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Se,
    data: Se,
    props: Se,
    attrs: Se,
    slots: Se,
    refs: Se,
    setupState: Se,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ic.bind(null, o), e.ce && e.ce(o), o;
}
let ot = null;
const Rc = () => ot || St;
let Mn, on;
{
  const e = $n(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Mn = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ot = r
  ), on = t(
    "__VUE_SSR_SETTERS__",
    (r) => sn = r
  );
}
const cn = (e) => {
  const t = ot;
  return Mn(e), e.scope.on(), () => {
    e.scope.off(), Mn(t);
  };
}, ko = () => {
  ot && ot.scope.off(), Mn(null);
};
function yl(e) {
  return e.vnode.shapeFlag & 4;
}
let sn = !1;
function Oc(e, t = !1, r = !1) {
  t && on(t);
  const { props: n, children: i } = e.vnode, o = yl(e);
  uc(e, n, o, t), hc(e, i, r || t);
  const s = o ? Nc(e, t) : void 0;
  return t && on(!1), s;
}
function Nc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ya);
  const { setup: n } = r;
  if (n) {
    Jt();
    const i = e.setupContext = n.length > 1 ? kc(e) : null, o = cn(e), s = an(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = ps(s);
    if (Zt(), o(), (a || e.sp) && !Zr(e) && Ws(e), a) {
      if (s.then(ko, ko), t)
        return s.then((f) => {
          on(!0);
          try {
            Mo(e, f, t);
          } finally {
            on(!1);
          }
        }).catch((f) => {
          Vn(f, e, 0);
        });
      e.asyncDep = s;
    } else
      Mo(e, s);
  } else
    gl(e);
}
function Mo(e, t, r) {
  le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Te(t) && (e.setupState = Is(t)), gl(e);
}
function gl(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || $t);
  {
    const i = cn(e);
    Jt();
    try {
      Xa(e);
    } finally {
      Zt(), i();
    }
  }
}
const Pc = {
  get(e, t) {
    return Je(e, "get", ""), e[t];
  }
};
function kc(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Pc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Kn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Is(_a(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in Qr)
        return Qr[r](e);
    },
    has(t, r) {
      return r in t || r in Qr;
    }
  })) : e.proxy;
}
function Mc(e) {
  return le(e) && "__vccOpts" in e;
}
const J = (e, t) => /* @__PURE__ */ Ca(e, t, sn), Lc = "3.5.42";
let Li;
const Lo = typeof window < "u" && window.trustedTypes;
if (Lo)
  try {
    Li = /* @__PURE__ */ Lo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const _l = Li ? (e) => Li.createHTML(e) : (e) => e, Ic = "http://www.w3.org/2000/svg", Uc = "http://www.w3.org/1998/Math/MathML", qt = typeof document < "u" ? document : null, Io = qt && /* @__PURE__ */ qt.createElement("template"), Dc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? qt.createElementNS(Ic, e) : t === "mathml" ? qt.createElementNS(Uc, e) : r ? qt.createElement(e, { is: r }) : qt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => qt.createTextNode(e),
  createComment: (e) => qt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => qt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, o) {
    const s = r ? r.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Io.innerHTML = _l(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Io.content;
      if (n === "svg" || n === "mathml") {
        const f = a.firstChild;
        for (; f.firstChild; )
          a.appendChild(f.firstChild);
        a.removeChild(f);
      }
      t.insertBefore(a, r);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, Fc = /* @__PURE__ */ Symbol("_vtc");
function Hc(e, t, r) {
  const n = e[Fc];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Uo = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function Bc(e, t, r) {
  const n = e.style, i = Le(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Le(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          r[a] == null && qr(n, a, "");
        }
      else
        for (const s in t)
          r[s] == null && qr(n, s, "");
    for (const s in r) {
      s === "display" && (o = !0);
      const a = r[s];
      a != null ? Wc(
        e,
        s,
        !Le(t) && t ? t[s] : void 0,
        a
      ) || qr(n, s, a) : qr(n, s, "");
    }
  } else if (i) {
    if (t !== r) {
      const s = n[jc];
      s && (r += ";" + s), n.cssText = r, o = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  Uo in e && (e[Uo] = o ? n.display : "", e[$c] && (n.display = "none"));
}
const _n = /\s*!important$/;
function qr(e, t, r) {
  if (Q(r))
    r.forEach((n) => qr(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    _n.test(r) ? e.setProperty(t, r.replace(_n, ""), "important") : e.setProperty(t, r);
  else {
    const n = zc(e, t);
    _n.test(r) ? e.setProperty(
      Er(n),
      r.replace(_n, ""),
      "important"
    ) : e[n] = r;
  }
}
const Do = ["Webkit", "Moz", "ms"], di = {};
function zc(e, t) {
  const r = di[t];
  if (r)
    return r;
  let n = Ot(t);
  if (n !== "filter" && n in e)
    return di[t] = n;
  n = bs(n);
  for (let i = 0; i < Do.length; i++) {
    const o = Do[i] + n;
    if (o in e)
      return di[t] = o;
  }
  return t;
}
function Wc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Le(n) && r === n;
}
const Fo = "http://www.w3.org/1999/xlink";
function Ho(e, t, r, n, i, o = Xl(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Fo, t.slice(6, t.length)) : e.setAttributeNS(Fo, t, r) : r == null || o && !gs(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : jt(r) ? String(r) : r
  );
}
function $o(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? _l(r) : r);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, f = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (a !== f || !("_value" in e)) && (e.value = f), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let s = !1;
  if (r === "" || r == null) {
    const a = typeof e[t];
    a === "boolean" ? r = gs(r) : r == null && a === "string" ? (r = "", s = !0) : a === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function hr(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function qc(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const jo = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, r, n, i = null) {
  const o = e[jo] || (e[jo] = {}), s = o[t];
  if (n && s)
    s.value = n;
  else {
    const [a, f] = Xc(t);
    if (n) {
      const v = o[t] = Qc(
        n,
        i
      );
      hr(e, a, v, f);
    } else s && (qc(e, a, s, f), o[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Er(e.slice(2)), t];
}
let pi = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => pi || (Jc.then(() => pi = 0), pi = Date.now());
function Qc(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    const i = r.value;
    if (Q(i)) {
      const o = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        o.call(n), n._stopped = !0;
      };
      const s = i.slice(), a = [n];
      for (let f = 0; f < s.length && !n._stopped; f++) {
        const v = s[f];
        v && kt(
          v,
          t,
          5,
          a
        );
      }
    } else
      kt(
        i,
        t,
        5,
        [n]
      );
  };
  return r.value = e, r.attached = Zc(), r;
}
const Vo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eu = (e, t, r, n, i, o) => {
  const s = i === "svg";
  t === "class" ? Hc(e, n, s) : t === "style" ? Bc(e, r, n) : Un(t) ? Dn(t) || Kc(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, s)) ? ($o(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ho(e, t, n, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Le(n))) ? $o(e, Ot(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ho(e, t, n, s));
};
function tu(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Vo(t) && le(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Vo(t) && Le(r) ? !1 : t in e;
}
function ru(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Ot(t);
  return Array.isArray(r) ? r.some((i) => Ot(i) === n) : Object.keys(r).some((i) => Ot(i) === n);
}
const Ln = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (r) => Sn(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function Bo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const br = /* @__PURE__ */ Symbol("_assign"), vn = /* @__PURE__ */ Symbol("_initialValue");
function hi(e, t, r) {
  return t && (e = e.trim()), r && (e = Hn(e)), e;
}
const mi = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e.parentNode && (e.type === "text" ? e[vn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[vn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[br] = Ln(i);
    const o = n || i.props && i.props.type === "number";
    hr(e, t ? "change" : "input", (s) => {
      s.target.composing || e[br](hi(e.value, r, o));
    }), (r || o) && hr(e, "change", () => {
      e.value = hi(e.value, r, o);
    }), t || (hr(e, "compositionstart", nu), hr(e, "compositionend", Bo), hr(e, "change", Bo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const i = t ?? "", o = e[vn];
    delete e[vn], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[br](hi(e.value, r, n)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, s) {
    if (e[br] = Ln(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Hn(e.value) : e.value, f = t ?? "";
    if (a === f)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === f) || (e.value = f);
  }
}, rt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, hr(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (f) => f.selected).map(
        (f) => r ? Hn(In(f)) : In(f)
      ), o = e.multiple, s = o ? vr(e._modelValue) ? new Set(i) : i : i[0], a = e._pendingValue = [
        o,
        o ? Q(s) ? i.slice() : i : s
      ];
      try {
        e[br](s);
      } finally {
        Ds(() => {
          e._pendingValue === a && (e._pendingValue = void 0);
        });
      }
    }), e[br] = Ln(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    zo(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[br] = Ln(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !iu(t, r[1], r[0])) && zo(e, t);
  }
};
function iu(e, t, r) {
  if (!r || Q(e)) return sr(e, t);
  if (vr(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function zo(e, t) {
  const r = e.multiple, n = Q(t);
  if (!(r && !n && !vr(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const s = e.options[i], a = In(s);
      if (r)
        if (n) {
          const f = typeof a;
          f === "string" || f === "number" ? s.selected = t.some((v) => String(v) === String(a)) : s.selected = Zl(t, a) > -1;
        } else
          s.selected = t.has(a);
      else if (sr(In(s), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function In(e) {
  return "_value" in e ? e._value : e.value;
}
const ou = ["ctrl", "shift", "alt", "meta"], su = {
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
  exact: (e, t) => ou.some((r) => e[`${r}Key`] && !t.includes(r))
}, En = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = su[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, lu = /* @__PURE__ */ Qe({ patchProp: eu }, Dc);
let Wo;
function au() {
  return Wo || (Wo = bc(lu));
}
const cu = ((...e) => {
  const t = au().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = fu(n);
    if (!i) return;
    const o = t._component;
    !le(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = r(i, !1, uu(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function uu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function fu(e) {
  return Le(e) ? document.querySelector(e) : e;
}
function du(e, t, r) {
  const n = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(n))
    return window._nc_initial_state.get(n);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const i = document.querySelector(n);
  if (i === null) {
    if (r !== void 0)
      return r;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const o = JSON.parse(atob(i.value));
    return window._nc_initial_state.set(n, o), o;
  } catch (o) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: o }), r !== void 0)
      return r;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: o });
  }
}
function qo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pu(e) {
  if (Array.isArray(e)) return e;
}
function hu(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, o, s, a = [], f = !0, v = !1;
    try {
      if (o = (r = r.call(e)).next, t !== 0) for (; !(f = (n = o.call(r)).done) && (a.push(n.value), a.length !== t); f = !0) ;
    } catch (y) {
      v = !0, i = y;
    } finally {
      try {
        if (!f && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (v) throw i;
      }
    }
    return a;
  }
}
function mu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bu(e, t) {
  return pu(e) || hu(e, t) || yu(e, t) || mu();
}
function yu(e, t) {
  if (e) {
    if (typeof e == "string") return qo(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? qo(e, t) : void 0;
  }
}
const vl = Object.entries, Ko = Object.setPrototypeOf, gu = Object.isFrozen, _u = Object.getPrototypeOf, vu = Object.getOwnPropertyDescriptor;
let Ve = Object.freeze, qe = Object.seal, Or = Object.create, El = typeof Reflect < "u" && Reflect, Ii = El.apply, Ui = El.construct;
Ve || (Ve = function(t) {
  return t;
});
qe || (qe = function(t) {
  return t;
});
Ii || (Ii = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    i[o - 2] = arguments[o];
  return t.apply(r, i);
});
Ui || (Ui = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const pr = He(Array.prototype.forEach), Eu = He(Array.prototype.lastIndexOf), Go = He(Array.prototype.pop), jr = He(Array.prototype.push), Tu = He(Array.prototype.splice), Lr = Array.isArray, Kr = He(String.prototype.toLowerCase), bi = He(String.prototype.toString), Yo = He(String.prototype.match), Vr = He(String.prototype.replace), Xo = He(String.prototype.indexOf), Su = He(String.prototype.trim), xu = He(Number.prototype.toString), Cu = He(Boolean.prototype.toString), Jo = typeof BigInt > "u" ? null : He(BigInt.prototype.toString), Zo = typeof Symbol > "u" ? null : He(Symbol.prototype.toString), pt = He(Object.prototype.hasOwnProperty), Br = He(Object.prototype.toString), Xe = He(RegExp.prototype.test), fr = Au(TypeError);
function He(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Ii(e, t, n);
  };
}
function Au(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Ui(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Kr;
  if (Ko && Ko(e, null), !Lr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const o = r(i);
      o !== i && (gu(t) || (t[n] = o), i = o);
    }
    e[i] = !0;
  }
  return e;
}
function wu(e) {
  for (let t = 0; t < e.length; t++)
    pt(e, t) || (e[t] = null);
  return e;
}
function vt(e) {
  const t = Or(null);
  for (const n of vl(e)) {
    var r = bu(n, 2);
    const i = r[0], o = r[1];
    pt(e, i) && (Lr(o) ? t[i] = wu(o) : o && typeof o == "object" && o.constructor === Object ? t[i] = vt(o) : t[i] = o);
  }
  return t;
}
function Ru(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return xu(e);
    case "boolean":
      return Cu(e);
    case "bigint":
      return Jo ? Jo(e) : "0";
    case "symbol":
      return Zo ? Zo(e) : "Symbol()";
    case "undefined":
      return Br(e);
    case "function":
    case "object": {
      if (e === null)
        return Br(e);
      const t = e, r = Rt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Br(n);
      }
      return Br(e);
    }
    default:
      return Br(e);
  }
}
function Rt(e, t) {
  for (; e !== null; ) {
    const n = vu(e, t);
    if (n) {
      if (n.get)
        return He(n.get);
      if (typeof n.value == "function")
        return He(n.value);
    }
    e = _u(e);
  }
  function r() {
    return null;
  }
  return r;
}
function Ou(e) {
  try {
    return Xe(e, ""), !0;
  } catch {
    return !1;
  }
}
const Qo = Ve(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), yi = Ve(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), gi = Ve(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Nu = Ve(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), _i = Ve(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Pu = Ve(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), es = Ve(["#text"]), ts = Ve(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), vi = Ve(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), rs = Ve(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Tn = Ve(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ku = qe(/{{[\w\W]*|^[\w\W]*}}/g), Mu = qe(/<%[\w\W]*|^[\w\W]*%>/g), Lu = qe(/\${[\w\W]*/g), Iu = qe(/^data-[\-\w.\u00B7-\uFFFF]+$/), Uu = qe(/^aria-[\-\w]+$/), ns = qe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = qe(/^(?:\w+script|data):/i), Fu = qe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = qe(/^html$/i), $u = qe(/^[a-z][.\w]*(-[.\w]+)+$/i), is = qe(/<[/\w!]/g), os = qe(/<[/\w]/g), ju = qe(/<\/no(script|embed|frames)/i), Vu = qe(/\/>/i), _t = {
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
}, Tl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Bu = Ve(pe({}, Tl)), zu = (function() {
  const e = {};
  return pr(Tl, (t) => {
    e[t] = qe(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Ve(e);
})(), Wu = function() {
  return typeof window > "u" ? null : window;
}, qu = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (n = r.getAttribute(i));
  const o = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(o, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, ss = function() {
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
}, nr = function(t, r, n, i) {
  return pt(t, r) && Lr(t[r]) ? pe(i.base ? vt(i.base) : {}, t[r], i.transform) : n;
}, Ei = function(t, r, n) {
  const i = pt(t, r) ? t[r] : void 0;
  return i && typeof i == "object" ? vt(i) : n();
};
function Sl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wu();
  const t = (D) => Sl(D);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== _t.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const o = e.HTMLTemplateElement, s = e.Node, a = e.Element, f = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, E = e.trustedTypes, P = a.prototype, j = Rt(P, "cloneNode"), re = Rt(P, "remove"), K = Rt(P, "nextSibling"), oe = Rt(P, "childNodes"), ne = Rt(P, "parentNode"), z = Rt(P, "shadowRoot"), U = Rt(P, "attributes"), V = s && s.prototype ? Rt(s.prototype, "nodeType") : null, ue = s && s.prototype ? Rt(s.prototype, "nodeName") : null, Pe = s && s.prototype ? Rt(s.prototype, "ownerDocument") : null, we = function(c) {
    return V ? V(c) : c.nodeType;
  }, Be = function(c) {
    return ue ? ue(c) : c.nodeName;
  };
  if (typeof o == "function") {
    const D = r.createElement("template");
    D.content && D.content.ownerDocument && (r = D.content.ownerDocument);
  }
  let _e, De = "", et, st = !1, Ke = 0;
  const Tt = function() {
    if (Ke > 0)
      throw fr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, $e = function(c) {
    Tt(), Ke++;
    try {
      return _e.createHTML(c);
    } finally {
      Ke--;
    }
  }, ke = function(c) {
    Tt(), Ke++;
    try {
      return _e.createScriptURL(c);
    } finally {
      Ke--;
    }
  }, me = function() {
    return st || (et = qu(E, i), st = !0), et;
  }, ce = r, Me = ce.implementation, ze = ce.createNodeIterator, Ie = ce.createDocumentFragment, Fe = ce.getElementsByTagName, Ct = n.importNode;
  let fe = ss();
  t.isSupported = typeof vl == "function" && typeof ne == "function" && Me && Me.createHTMLDocument !== void 0;
  const Vt = ku, je = Mu, ht = Lu, mt = Iu, bt = Uu, lt = Du, At = Fu, p = $u;
  let m = ns, _ = null;
  const A = pe({}, [...Qo, ...yi, ...gi, ..._i, ...es]);
  let T = null;
  const x = pe({}, [...ts, ...vi, ...rs, ...Tn]);
  let L = Object.seal(Or(null, {
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
  })), I = null, M = null;
  const S = Object.seal(Or(null, {
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
  let q = !0, H = !0, W = !1, X = !0, ee = !1, N = !0, O = !1, $ = !1, Z = null, ie = null, he = !1, ae = !1, Re = !1, Ae = !1, Oe = !0, at = !1;
  const Mt = "user-content-";
  let Bt = !0, lr = !1, wt = {}, yt = null;
  const zt = pe({}, [
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
  let F = null;
  const k = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let h = null;
  const Ee = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ye = "http://www.w3.org/1998/Math/MathML", ct = "http://www.w3.org/2000/svg", gt = "http://www.w3.org/1999/xhtml";
  let Tr = gt, Gn = !1, Yn = null;
  const Cl = pe({}, [Ye, ct, gt], bi), Qi = Ve(["mi", "mo", "mn", "ms", "mtext"]);
  let Xn = pe({}, Qi);
  const eo = Ve(["annotation-xml"]);
  let Jn = pe({}, eo);
  const Al = pe({}, ["title", "style", "font", "a", "script"]);
  let Dr = null;
  const wl = ["application/xhtml+xml", "text/html"], Rl = "text/html";
  let Ue = null, Sr = null;
  const Ol = r.createElement("form"), to = function(c) {
    return c instanceof RegExp || c instanceof Function;
  }, Zn = function() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Sr && Sr === c)
      return;
    (!c || typeof c != "object") && (c = {}), c = vt(c), Dr = // eslint-disable-next-line unicorn/prefer-includes
    wl.indexOf(c.PARSER_MEDIA_TYPE) === -1 ? Rl : c.PARSER_MEDIA_TYPE, Ue = Dr === "application/xhtml+xml" ? bi : Kr, _ = nr(c, "ALLOWED_TAGS", A, {
      transform: Ue
    }), T = nr(c, "ALLOWED_ATTR", x, {
      transform: Ue
    }), Yn = nr(c, "ALLOWED_NAMESPACES", Cl, {
      transform: bi
    }), h = nr(c, "ADD_URI_SAFE_ATTR", Ee, {
      transform: Ue,
      base: Ee
    }), F = nr(c, "ADD_DATA_URI_TAGS", k, {
      transform: Ue,
      base: k
    }), yt = nr(c, "FORBID_CONTENTS", zt, {
      transform: Ue
    }), I = nr(c, "FORBID_TAGS", vt({}), {
      transform: Ue
    }), M = nr(c, "FORBID_ATTR", vt({}), {
      transform: Ue
    }), wt = pt(c, "USE_PROFILES") ? c.USE_PROFILES && typeof c.USE_PROFILES == "object" ? vt(c.USE_PROFILES) : c.USE_PROFILES : !1, q = c.ALLOW_ARIA_ATTR !== !1, H = c.ALLOW_DATA_ATTR !== !1, W = c.ALLOW_UNKNOWN_PROTOCOLS || !1, X = c.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ee = c.SAFE_FOR_TEMPLATES || !1, N = c.SAFE_FOR_XML !== !1, O = c.WHOLE_DOCUMENT || !1, ae = c.RETURN_DOM || !1, Re = c.RETURN_DOM_FRAGMENT || !1, Ae = c.RETURN_TRUSTED_TYPE || !1, he = c.FORCE_BODY || !1, Oe = c.SANITIZE_DOM !== !1, at = c.SANITIZE_NAMED_PROPS || !1, Bt = c.KEEP_CONTENT !== !1, lr = c.IN_PLACE || !1, m = Ou(c.ALLOWED_URI_REGEXP) ? c.ALLOWED_URI_REGEXP : ns, Tr = typeof c.NAMESPACE == "string" ? c.NAMESPACE : gt, Xn = Ei(
      c,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => pe({}, Qi)
      // Default built-in map
    ), Jn = Ei(
      c,
      "HTML_INTEGRATION_POINTS",
      () => pe({}, eo)
      // Default built-in map
    );
    const g = Ei(c, "CUSTOM_ELEMENT_HANDLING", () => Or(null));
    if (L = Or(null), pt(g, "tagNameCheck") && to(g.tagNameCheck) && (L.tagNameCheck = g.tagNameCheck), pt(g, "attributeNameCheck") && to(g.attributeNameCheck) && (L.attributeNameCheck = g.attributeNameCheck), pt(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), qe(L), ee && (H = !1), Re && (ae = !0), wt && (_ = pe({}, es), T = Or(null), wt.html === !0 && (pe(_, Qo), pe(T, ts)), wt.svg === !0 && (pe(_, yi), pe(T, vi), pe(T, Tn)), wt.svgFilters === !0 && (pe(_, gi), pe(T, vi), pe(T, Tn)), wt.mathMl === !0 && (pe(_, _i), pe(T, rs), pe(T, Tn))), S.tagCheck = null, S.attributeCheck = null, pt(c, "ADD_TAGS") && (typeof c.ADD_TAGS == "function" ? S.tagCheck = c.ADD_TAGS : Lr(c.ADD_TAGS) && (_ === A && (_ = vt(_)), pe(_, c.ADD_TAGS, Ue))), pt(c, "ADD_ATTR") && (typeof c.ADD_ATTR == "function" ? S.attributeCheck = c.ADD_ATTR : Lr(c.ADD_ATTR) && (T === x && (T = vt(T)), pe(T, c.ADD_ATTR, Ue))), pt(c, "ADD_FORBID_CONTENTS") && Lr(c.ADD_FORBID_CONTENTS) && (yt === zt && (yt = vt(yt)), pe(yt, c.ADD_FORBID_CONTENTS, Ue)), Bt && (_["#text"] = !0), O && pe(_, ["html", "head", "body"]), _.table && (pe(_, ["tbody"]), delete I.tbody), c.TRUSTED_TYPES_POLICY) {
      if (typeof c.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw fr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof c.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw fr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const w = _e;
      _e = c.TRUSTED_TYPES_POLICY;
      try {
        De = $e("");
      } catch (B) {
        throw _e = w, B;
      }
    } else c.TRUSTED_TYPES_POLICY === null ? (_e = void 0, De = "") : (_e === void 0 && (_e = me()), _e && typeof De == "string" && (De = $e("")));
    Ve && Ve(c), Sr = c;
  }, ro = pe({}, [...yi, ...gi, ...Nu]), no = pe({}, [..._i, ...Pu]), Nl = function(c, g, w) {
    return g.namespaceURI === gt ? c === "svg" : g.namespaceURI === Ye ? c === "svg" && (w === "annotation-xml" || Xn[w]) : !!ro[c];
  }, Pl = function(c, g, w) {
    return g.namespaceURI === gt ? c === "math" : g.namespaceURI === ct ? c === "math" && Jn[w] : !!no[c];
  }, kl = function(c, g, w) {
    return g.namespaceURI === ct && !Jn[w] || g.namespaceURI === Ye && !Xn[w] ? !1 : !no[c] && (Al[c] || !ro[c]);
  }, Ml = function(c) {
    let g = ne(c);
    (!g || !g.tagName) && (g = {
      namespaceURI: Tr,
      tagName: "template"
    });
    const w = Kr(c.tagName), B = Kr(g.tagName);
    return Yn[c.namespaceURI] ? c.namespaceURI === ct ? Nl(w, g, B) : c.namespaceURI === Ye ? Pl(w, g, B) : c.namespaceURI === gt ? kl(w, g, B) : !!(Dr === "application/xhtml+xml" && Yn[c.namespaceURI]) : !1;
  }, rr = function(c) {
    jr(t.removed, {
      element: c
    });
    try {
      ne(c).removeChild(c);
    } catch {
      if (re(c), !ne(c))
        throw fr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, io = function(c, g, w) {
    try {
      c.removeAttributeNode(g);
    } catch {
      try {
        c.removeAttribute(w);
      } catch {
      }
    }
  }, un = function(c) {
    fn(c);
    const g = oe(c);
    if (g) {
      const B = [];
      pr(g, (Y) => {
        jr(B, Y);
      }), pr(B, (Y) => {
        try {
          re(Y);
        } catch {
        }
      });
    }
    const w = U(c);
    if (w)
      for (let B = w.length - 1; B >= 0; --B) {
        const Y = w[B], te = Y && Y.name;
        typeof te == "string" && io(c, Y, te);
      }
  }, ar = function(c, g, w) {
    if (!w)
      try {
        w = g.getAttributeNode(c);
      } catch {
        w = null;
      }
    jr(t.removed, {
      attribute: w || null,
      from: g
    });
    try {
      w ? g.removeAttributeNode(w) : g.removeAttribute(c);
    } catch {
      try {
        g.removeAttribute(c);
      } catch {
      }
    }
    if (c === "is")
      if (ae || Re)
        try {
          rr(g);
        } catch {
        }
      else
        try {
          g.setAttribute(c, "");
        } catch {
        }
  }, Ll = function(c) {
    const g = U(c);
    if (g)
      for (let w = g.length - 1; w >= 0; --w) {
        const B = g[w], Y = B && B.name;
        typeof Y != "string" || T[Ue(Y)] || io(c, B, Y);
      }
  }, fn = function(c) {
    const g = [c];
    for (; g.length > 0; ) {
      const w = g.pop();
      we(w) === _t.element && Ll(w);
      const Y = oe(w);
      if (Y)
        for (let te = Y.length - 1; te >= 0; --te)
          g.push(Y[te]);
    }
  }, oo = function(c, g) {
    return N ? c === "patchsrc" ? !0 : c === "for" && g !== "label" && g !== "output" : !1;
  }, Il = function(c) {
    if (!N)
      return;
    const g = [c];
    for (; g.length > 0; ) {
      const w = g.pop(), B = we(w);
      if (B === _t.processingInstruction || B === _t.comment && Xe(os, w.data)) {
        try {
          re(w);
        } catch {
        }
        continue;
      }
      if (B === _t.element) {
        const te = w, xe = Ue(Be(w));
        try {
          te.hasAttribute && te.hasAttribute("patchsrc") && te.removeAttribute("patchsrc"), te.hasAttribute && te.hasAttribute("for") && oo("for", xe) && te.removeAttribute("for");
        } catch {
        }
      }
      const Y = oe(w);
      if (Y)
        for (let te = Y.length - 1; te >= 0; --te)
          g.push(Y[te]);
    }
  }, so = function(c) {
    let g = null, w = null;
    if (he)
      c = "<remove></remove>" + c;
    else {
      const te = Yo(c, /^[\r\n\t ]+/);
      w = te && te[0];
    }
    Dr === "application/xhtml+xml" && Tr === gt && (c = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + c + "</body></html>");
    const B = _e ? $e(c) : c;
    if (Tr === gt)
      try {
        g = new y().parseFromString(B, Dr);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = Me.createDocument(Tr, "template", null);
      try {
        g.documentElement.innerHTML = Gn ? De : B;
      } catch {
      }
    }
    const Y = g.body || g.documentElement;
    return c && w && Y.insertBefore(r.createTextNode(w), Y.childNodes[0] || null), Tr === gt ? Fe.call(g, O ? "html" : "body")[0] : O ? g.documentElement : Y;
  }, lo = function(c) {
    const g = Pe ? Pe(c) : c.ownerDocument;
    return ze.call(
      g || c,
      c,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, dn = function(c) {
    return c = Vr(c, Vt, " "), c = Vr(c, je, " "), c = Vr(c, ht, " "), c;
  }, Qn = function(c) {
    var g;
    c.normalize();
    const w = Pe ? Pe(c) : c.ownerDocument, B = ze.call(
      w || c,
      c,
      // eslint-disable-next-line no-bitwise
      f.SHOW_TEXT | f.SHOW_COMMENT | f.SHOW_CDATA_SECTION | f.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Y = B.nextNode();
    for (; Y; )
      Y.data = dn(Y.data), Y = B.nextNode();
    const te = (g = c.querySelectorAll) === null || g === void 0 ? void 0 : g.call(c, "template");
    te && pr(te, (xe) => {
      xr(xe.content) && Qn(xe.content);
    });
  }, pn = function(c) {
    const g = ue ? ue(c) : null;
    return typeof g != "string" || Ue(g) !== "form" ? !1 : typeof c.nodeName != "string" || typeof c.textContent != "string" || typeof c.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    c.attributes !== U(c) || typeof c.removeAttribute != "function" || typeof c.setAttribute != "function" || typeof c.namespaceURI != "string" || typeof c.insertBefore != "function" || typeof c.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    c.nodeType !== V(c) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    c.childNodes !== oe(c);
  }, xr = function(c) {
    if (!V || typeof c != "object" || c === null)
      return !1;
    try {
      return V(c) === _t.documentFragment;
    } catch {
      return !1;
    }
  }, Fr = function(c) {
    if (!V || typeof c != "object" || c === null)
      return !1;
    try {
      return typeof V(c) == "number";
    } catch {
      return !1;
    }
  };
  function Lt(D, c, g) {
    D.length !== 0 && pr(D, (w) => {
      w.call(t, c, g, Sr);
    });
  }
  const Ul = function(c, g) {
    return !!(N && c.hasChildNodes() && !Fr(c.firstElementChild) && Xe(is, c.textContent) && Xe(is, c.innerHTML) || N && c.namespaceURI === gt && Bu[g] && (Fr(c.firstElementChild) || typeof c.textContent == "string" && Xe(zu[g], c.textContent)) || c.nodeType === _t.processingInstruction || N && c.nodeType === _t.comment && Xe(os, c.data));
  }, hn = function(c, g) {
    if (c instanceof RegExp)
      return Xe(c, g);
    if (c instanceof Function) {
      for (var w = arguments.length, B = new Array(w > 2 ? w - 2 : 0), Y = 2; Y < w; Y++)
        B[Y - 2] = arguments[Y];
      return !!c(g, ...B);
    }
    return !1;
  }, Dl = function(c, g, w) {
    if (!I[g] && po(g) && hn(L.tagNameCheck, g))
      return !1;
    if (Bt && !yt[g]) {
      const B = ne(c), Y = oe(c);
      if (Y && B) {
        const te = Y.length;
        for (let xe = te - 1; xe >= 0; --xe) {
          const Ne = c === w ? j(Y[xe], !0) : Y[xe];
          B.insertBefore(Ne, K(c));
        }
      }
    }
    return rr(c), !0;
  }, ao = function(c, g, w, B) {
    return c.length === 0 ? g : g === w || g === B ? vt(g) : g;
  }, co = function(c, g) {
    return c === g || ne(c) !== null ? !1 : (lr && fn(c), !0);
  }, uo = function(c, g) {
    if (Lt(fe.beforeSanitizeElements, c, null), co(c, g))
      return !0;
    if (pn(c))
      return rr(c), !0;
    const w = Ue(Be(c));
    if (_ = ao(fe.uponSanitizeElement, _, A, Z), Lt(fe.uponSanitizeElement, c, {
      tagName: w,
      allowedTags: _
    }), co(c, g))
      return !0;
    if (Ul(c, w))
      return rr(c), !0;
    if (I[w] || !(S.tagCheck instanceof Function && S.tagCheck(w)) && !_[w]) {
      const Y = Dl(c, w, g);
      return Y === !1 && Lt(fe.afterSanitizeElements, c, null), Y;
    }
    if (we(c) === _t.element && !Ml(c) || (w === "noscript" || w === "noembed" || w === "noframes") && Xe(ju, c.innerHTML))
      return rr(c), !0;
    if (ee && c.nodeType === _t.text) {
      const Y = dn(c.textContent);
      c.textContent !== Y && (jr(t.removed, {
        element: c.cloneNode()
      }), c.textContent = Y);
    }
    return Lt(fe.afterSanitizeElements, c, null), !1;
  }, fo = function(c, g, w) {
    if (M[g] || oo(g, c) || Oe && (g === "id" || g === "name") && (w in r || w in Ol))
      return !1;
    const B = T[g] || S.attributeCheck instanceof Function && S.attributeCheck(g, c);
    return H && Xe(mt, g) || q && Xe(bt, g) ? !0 : B ? h[g] || Xe(m, Vr(w, At, "")) || (g === "src" || g === "xlink:href" || g === "href") && c !== "script" && Xo(w, "data:") === 0 && F[c] || W && !Xe(lt, Vr(w, At, "")) ? !0 : !w : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      po(c) && hn(L.tagNameCheck, c) && hn(L.attributeNameCheck, g, c) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && L.allowCustomizedBuiltInElements && hn(L.tagNameCheck, w)
    );
  }, Fl = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), po = function(c) {
    return !Fl[Kr(c)] && Xe(p, c);
  }, Hl = function(c, g, w, B) {
    if (_e && typeof E == "object" && typeof E.getAttributeType == "function" && !w)
      switch (E.getAttributeType(c, g)) {
        case "TrustedHTML":
          return $e(B);
        case "TrustedScriptURL":
          return ke(B);
      }
    return B;
  }, $l = function(c, g, w, B) {
    try {
      w ? c.setAttributeNS(w, g, B) : c.setAttribute(g, B), pn(c) ? rr(c) : Go(t.removed);
    } catch {
      ar(g, c);
    }
  }, ho = function(c) {
    Lt(fe.beforeSanitizeAttributes, c, null);
    const g = c.attributes;
    if (!g || pn(c))
      return;
    T = ao(fe.uponSanitizeAttribute, T, x, ie);
    const w = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let B = g.length;
    const Y = Ue(c.nodeName);
    for (; B--; ) {
      const te = g[B], xe = te.name, Ne = te.namespaceURI, ut = te.value, ft = Ue(xe), ti = ut;
      let tt = xe === "value" ? ti : Su(ti);
      if (w.attrName = ft, w.attrValue = tt, w.keepAttr = !0, w.forceKeepAttr = void 0, Lt(fe.uponSanitizeAttribute, c, w), tt = w.attrValue, at && (ft === "id" || ft === "name") && Xo(tt, Mt) !== 0 && (ar(xe, c, te), tt = Mt + tt), N && Xe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, tt)) {
        ar(xe, c, te);
        continue;
      }
      if (ft === "attributename" && Yo(tt, "href")) {
        ar(xe, c, te);
        continue;
      }
      if (!w.forceKeepAttr) {
        if (!w.keepAttr) {
          ar(xe, c, te);
          continue;
        }
        if (!X && Xe(Vu, tt)) {
          ar(xe, c, te);
          continue;
        }
        if (ee && (tt = dn(tt)), !fo(Y, ft, tt)) {
          ar(xe, c, te);
          continue;
        }
        tt = Hl(Y, ft, Ne, tt), tt !== ti && $l(c, xe, Ne, tt);
      }
    }
    Lt(fe.afterSanitizeAttributes, c, null);
  }, mn = function(c) {
    let g = null;
    const w = lo(c);
    for (Lt(fe.beforeSanitizeShadowDOM, c, null); g = w.nextNode(); )
      if (Lt(fe.uponSanitizeShadowNode, g, null), uo(g, c), ho(g), xr(g.content) && mn(g.content), we(g) === _t.element) {
        const B = z(g);
        xr(B) && (ei(B), mn(B));
      }
    Lt(fe.afterSanitizeShadowDOM, c, null);
  }, ei = function(c) {
    const g = [{
      node: c,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const w = g.pop();
      if (w.shadow) {
        mn(w.shadow);
        continue;
      }
      const B = w.node, te = we(B) === _t.element, xe = oe(B);
      if (xe)
        for (let Ne = xe.length - 1; Ne >= 0; --Ne)
          g.push({
            node: xe[Ne],
            shadow: null
          });
      if (te) {
        const Ne = ue ? ue(B) : null;
        if (typeof Ne == "string" && Ue(Ne) === "template") {
          const ut = B.content;
          xr(ut) && g.push({
            node: ut,
            shadow: null
          });
        }
      }
      if (te) {
        const Ne = z(B);
        xr(Ne) && g.push({
          node: null,
          shadow: Ne
        }, {
          node: Ne,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(D) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, w = null, B = null, Y = null;
    if (Gn = !D, Gn && (D = "<!-->"), typeof D != "string" && !Fr(D) && (D = Ru(D), typeof D != "string"))
      throw fr("dirty is not a string, aborting");
    if (!t.isSupported)
      return D;
    $ ? (_ = Z, T = ie) : Zn(c), (fe.uponSanitizeElement.length > 0 || fe.uponSanitizeAttribute.length > 0) && (_ = vt(_)), fe.uponSanitizeAttribute.length > 0 && (T = vt(T)), t.removed = [];
    const te = lr && typeof D != "string" && Fr(D);
    if (te) {
      Il(D);
      const ut = Be(D);
      if (typeof ut == "string") {
        const ft = Ue(ut);
        if (!_[ft] || I[ft])
          throw un(D), fr("root node is forbidden and cannot be sanitized in-place");
      }
      if (pn(D))
        throw un(D), fr("root node is clobbered and cannot be sanitized in-place");
      try {
        ei(D);
      } catch (ft) {
        throw un(D), ft;
      }
    } else if (Fr(D))
      g = so("<!---->"), w = g.ownerDocument.importNode(D, !0), w.nodeType === _t.element && w.nodeName === "BODY" || w.nodeName === "HTML" ? g = w : g.appendChild(w), ei(w);
    else {
      if (!ae && !ee && !O && // eslint-disable-next-line unicorn/prefer-includes
      D.indexOf("<") === -1)
        return _e && Ae ? $e(D) : D;
      if (g = so(D), !g)
        return ae ? null : Ae ? De : "";
    }
    g && he && rr(g.firstChild);
    const xe = te ? D : g;
    try {
      const ut = lo(xe);
      for (; B = ut.nextNode(); )
        uo(B, xe), ho(B), xr(B.content) && mn(B.content);
    } catch (ut) {
      throw te && (un(D), pr(t.removed, (ft) => {
        ft.element && fn(ft.element);
      })), ut;
    }
    if (te)
      return pr(t.removed, (ut) => {
        ut.element && fn(ut.element);
      }), ee && Qn(D), D;
    if (ae) {
      if (ee && Qn(g), Re)
        for (Y = Ie.call(g.ownerDocument); g.firstChild; )
          Y.appendChild(g.firstChild);
      else
        Y = g;
      return (T.shadowroot || T.shadowrootmode) && (Y = Ct.call(n, Y, !0)), Y;
    }
    let Ne = O ? g.outerHTML : g.innerHTML;
    return O && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Xe(Hu, g.ownerDocument.doctype.name) && (Ne = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Ne), ee && (Ne = dn(Ne)), _e && Ae ? $e(Ne) : Ne;
  }, t.setConfig = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zn(D), $ = !0, Z = _, ie = T;
  }, t.clearConfig = function() {
    Sr = null, $ = !1, Z = null, ie = null, _e = et, De = "";
  }, t.isValidAttribute = function(D, c, g) {
    Sr || Zn({});
    const w = Ue(D), B = Ue(c);
    return fo(w, B, g);
  }, t.addHook = function(D, c) {
    typeof c == "function" && pt(fe, D) && jr(fe[D], c);
  }, t.removeHook = function(D, c) {
    if (pt(fe, D)) {
      if (c !== void 0) {
        const g = Eu(fe[D], c);
        return g === -1 ? void 0 : Tu(fe[D], g, 1)[0];
      }
      return Go(fe[D]);
    }
  }, t.removeHooks = function(D) {
    pt(fe, D) && (fe[D] = []);
  }, t.removeAllHooks = function() {
    fe = ss();
  }, t;
}
var Ku = Sl();
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ti, ls;
function Yu() {
  if (ls) return Ti;
  ls = 1;
  var e = /["'&<>]/;
  Ti = t;
  function t(r) {
    var n = "" + r, i = e.exec(n);
    if (!i)
      return n;
    var o, s = "", a = 0, f = 0;
    for (a = i.index; a < n.length; a++) {
      switch (n.charCodeAt(a)) {
        case 34:
          o = "&quot;";
          break;
        case 38:
          o = "&amp;";
          break;
        case 39:
          o = "&#39;";
          break;
        case 60:
          o = "&lt;";
          break;
        case 62:
          o = "&gt;";
          break;
        default:
          continue;
      }
      f !== a && (s += n.substring(f, a)), f = a + 1, s += o;
    }
    return f !== a ? s + n.substring(f, a) : s;
  }
  return Ti;
}
var Xu = Yu();
const as = /* @__PURE__ */ Gu(Xu);
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_");
globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function Ju(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function l(e, t, r, n, i) {
  const o = typeof r == "object" ? r : void 0, s = typeof n == "number" ? n : typeof r == "number" ? r : void 0, a = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof n == "object" ? n : {}
  }, f = (K) => K, v = (a.sanitize ? Ku.sanitize : f) || f, y = a.escape ? as : f, E = (K) => typeof K == "string" || typeof K == "number", P = (K, oe, ne) => K.replace(/%n/g, "" + ne).replace(/{([^{}]*)}/g, (z, U) => {
    if (oe === void 0 || !(U in oe))
      return y(z);
    const V = oe[U];
    return E(V) ? y(`${V}`) : typeof V == "object" && E(V.value) ? (V.escape !== !1 ? as : f)(`${V.value}`) : y(z);
  });
  let re = (i?.bundle ?? Ju(e)).translations[t] || t;
  return re = Array.isArray(re) ? re[0] : re, v(typeof o == "object" || s !== void 0 ? P(
    re,
    o,
    s
  ) : re);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ef = { class: "library-catalogue-header" }, tf = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, rf = { id: "library-catalogue-heading" }, nf = { class: "library-muted" }, of = ["aria-label"], sf = { class: "library-catalogue-actions-menu" }, lf = { class: "library-catalogue-actions-list" }, af = ["href"], cf = ["href"], uf = ["href"], ff = ["href"], df = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, pf = ["aria-label"], hf = ["name", "value"], mf = { class: "library-quick-search-row" }, bf = { class: "library-quick-filter-search" }, yf = ["aria-label"], gf = { class: "library-quick-filter-options" }, _f = { class: "library-quick-filter-option-grid" }, vf = { value: "title" }, Ef = { value: "recent" }, Tf = { value: "publicationDate" }, Sf = { value: "publication" }, xf = { value: "lastOpened" }, Cf = { value: "format" }, Af = { value: "" }, wf = { value: "1" }, Rf = ["value"], Of = ["value"], Nf = ["aria-label"], Pf = ["aria-label"], kf = { class: "library-filter-panel" }, Mf = { class: "library-filter-panel-summary" }, Lf = ["aria-label"], If = { value: "" }, Uf = ["value"], Df = { value: "" }, Ff = ["value"], Hf = { value: "" }, $f = ["value"], jf = { value: "" }, Vf = ["value"], Bf = { value: "" }, zf = ["value"], Wf = { value: "" }, qf = ["value"], Kf = { value: "" }, Gf = ["value"], Yf = { value: "" }, Xf = ["value"], Jf = { value: "" }, Zf = ["value"], Qf = { value: "" }, ed = ["value"], td = { value: "" }, rd = { value: "1" }, nd = { value: "" }, id = { value: "1" }, od = { value: "title" }, sd = { value: "recent" }, ld = { value: "publicationDate" }, ad = { value: "publication" }, cd = { value: "lastOpened" }, ud = { value: "format" }, fd = ["value"], dd = ["value"], pd = ["aria-label"], hd = ["aria-label"], md = ["href"], bd = {
  key: 1,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, yd = { class: "library-muted library-catalogue-eyebrow" }, gd = { id: "library-discovery-heading" }, _d = { class: "library-muted" }, vd = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, Ed = { key: 0 }, Td = { key: 1 }, Sd = { key: 2 }, xd = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, Cd = { key: 0 }, Ad = { key: 1 }, wd = {
  href: "/apps/library/",
  class: "button secondary"
}, Rd = {
  key: 2,
  class: "library-import-health-panel",
  "aria-labelledby": "library-import-health-heading"
}, Od = { class: "library-import-health-header" }, Nd = { class: "library-muted library-catalogue-eyebrow" }, Pd = { id: "library-import-health-heading" }, kd = { class: "library-muted" }, Md = ["href"], Ld = ["href"], Id = ["href"], Ud = ["href"], Dd = { class: "library-import-health-grid" }, Fd = { class: "library-import-health-card" }, Hd = { class: "library-import-health-number" }, $d = { class: "library-import-health-card" }, jd = { class: "library-import-health-number" }, Vd = { class: "library-import-health-card" }, Bd = { class: "library-muted" }, zd = { class: "library-import-health-card" }, Wd = { class: "library-muted" }, qd = { class: "library-muted" }, Kd = {
  key: 0,
  class: "library-import-health-examples"
}, Gd = { class: "library-catalogue-status-row" }, Yd = { class: "library-muted library-filter-result-summary" }, Xd = { key: 0 }, Jd = { href: "?" }, Zd = ["aria-label"], Qd = { class: "library-pagination-range" }, ep = { key: 0 }, tp = ["href"], rp = {
  key: 1,
  class: "library-muted"
}, np = ["href"], ip = {
  key: 3,
  class: "library-muted"
}, op = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, sp = ["aria-label"], lp = { class: "library-settings-count-badge" }, ap = ["action"], cp = ["value"], up = ["name", "value"], fp = ["placeholder"], dp = {
  type: "submit",
  class: "button primary"
}, pp = { class: "library-muted" }, hp = ["action"], mp = ["value"], bp = ["name", "value"], yp = ["placeholder"], gp = {
  type: "submit",
  class: "button secondary"
}, _p = { class: "library-muted" }, vp = ["action"], Ep = ["value"], Tp = ["name", "value"], Sp = {
  type: "submit",
  class: "button secondary"
}, xp = { class: "library-muted" }, Cp = ["action"], Ap = ["value"], wp = ["name", "value"], Rp = { name: "bulkEditField" }, Op = { value: "publicationType" }, Np = { value: "subtitle" }, Pp = { value: "creators" }, kp = { value: "publication" }, Mp = { value: "publicationDate" }, Lp = { value: "language" }, Ip = { value: "publisher" }, Up = { value: "genres" }, Dp = { value: "classifications" }, Fp = {
  type: "submit",
  class: "button secondary"
}, Hp = { class: "library-muted" }, $p = ["action"], jp = ["value"], Vp = ["name", "value"], Bp = {
  type: "submit",
  class: "button secondary"
}, zp = { class: "library-muted" }, Wp = { class: "library-discovery-shortcuts" }, qp = { class: "library-discovery-shortcut-grid" }, Kp = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, Gp = { id: "library-periodical-groups-heading" }, Yp = { class: "library-muted" }, Xp = ["href"], Jp = { class: "library-muted" }, Zp = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, Qp = { id: "library-periodical-groups-empty-heading" }, eh = { class: "library-muted" }, th = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, rh = { id: "library-year-groups-heading" }, nh = ["href"], ih = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, oh = { id: "library-creator-groups-heading" }, sh = ["href"], lh = ["aria-label"], ah = ["href", "aria-label"], ch = { class: "library-muted" }, uh = { class: "library-empty-actions" }, fh = ["href"], dh = { class: "library-muted" }, ph = { class: "library-muted" }, hh = { class: "library-empty-actions" }, mh = ["href"], bh = { class: "library-muted" }, yh = { class: "library-empty-actions" }, gh = ["href"], _h = {
  href: "?",
  class: "button primary"
}, vh = { class: "library-muted" }, Eh = { class: "library-empty-actions" }, Th = ["href"], Sh = {
  key: 5,
  class: "library-cover-gallery"
}, xh = ["href", "aria-label"], Ch = ["src", "alt"], Ah = ["action", "onSubmit"], wh = ["value"], Rh = ["value"], Oh = ["aria-pressed", "title", "aria-label", "onClick"], Nh = { class: "library-cover-summary" }, Ph = { class: "library-cover-primary" }, kh = ["aria-label"], Mh = ["href"], Lh = ["onToggle"], Ih = ["aria-label"], Uh = { class: "library-cover-meta" }, Dh = {
  key: 0,
  class: "library-creator"
}, Fh = { class: "library-cover-detail-list" }, Hh = { class: "library-cover-detail-chip" }, $h = {
  key: 0,
  class: "library-cover-detail-chip"
}, jh = {
  key: 1,
  class: "library-cover-detail-chip"
}, Vh = {
  key: 2,
  class: "library-cover-detail-chip"
}, Bh = {
  key: 3,
  class: "library-cover-detail-chip"
}, zh = {
  key: 4,
  class: "library-cover-detail-chip"
}, Wh = {
  key: 5,
  class: "library-cover-detail-chip"
}, qh = {
  key: 6,
  class: "library-cover-detail-chip"
}, Kh = {
  key: 1,
  class: "library-muted library-cover-description"
}, Gh = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Yh = { key: 0 }, Xh = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Jh = {
  key: 0,
  class: "library-muted"
}, Zh = { class: "library-cover-actions" }, Qh = ["href"], em = ["href"], tm = ["href"], rm = ["aria-label"], nm = { class: "library-pagination-range" }, im = { key: 0 }, om = ["href"], sm = {
  key: 1,
  class: "library-muted"
}, lm = ["href"], am = {
  key: 3,
  class: "library-muted"
}, cm = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], i = /* @__PURE__ */ mr({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), o = /* @__PURE__ */ mr((i.items || []).map((F) => ({ ...F }))), s = J(() => o), a = J(() => i.shelves || []), f = J(() => i.formats || []), v = J(() => i.publications || []), y = J(() => i.publicationSummaries || []), E = J(() => i.publicationIssueContext || null), P = J(() => i.publicationYears || []), j = J(() => i.creators || []), re = J(() => i.scanStatuses || []), K = J(() => i.workflowStatuses || []), oe = J(() => i.genres || []), ne = J(() => i.classifications || []), z = J(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), U = /* @__PURE__ */ mr({
      q: i.activeFilters?.q || "",
      type: i.activeFilters?.type || "",
      publication: i.activeFilters?.publication || "",
      year: i.activeFilters?.year || "",
      creator: i.activeFilters?.creator || "",
      format: i.activeFilters?.format || "",
      tag: i.activeFilters?.tag || "",
      shelf: i.activeFilters?.shelf || "",
      status: i.activeFilters?.status || "",
      workflowStatus: i.activeFilters?.workflowStatus || "",
      genre: i.activeFilters?.genre || "",
      classification: i.activeFilters?.classification || "",
      scannerConflicts: i.activeFilters?.scannerConflicts || "",
      starred: i.activeFilters?.starred || "",
      sort: i.activeFilters?.sort || "title"
    }), V = J(() => i.settingsUrl || ""), ue = J(() => i.requestToken || ""), Pe = J(() => i.metadataExportUrl || ""), we = J(() => i.metadataSidecarManifestUrl || ""), Be = J(() => i.metadataSidecarBundleUrl || ""), _e = J(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), De = J(() => i.batchTagUrl || "/apps/library/bulk/tags"), et = J(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), st = J(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ke = J(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Tt = J(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), $e = J(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), ke = J(() => i.metadataErrorsUrl || "/apps/library/health/metadata-errors"), me = J(() => i.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), ce = J(() => i.coverProbeUrl || "/apps/library/health/covers/probe"), Me = J(() => i.importHealthSummary || {}), ze = J(() => i.metadataErrorReview || Me.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), Ie = J(() => i.archiveMagicSummary || Me.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), Fe = J(() => i.coverHealthSummary || Me.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), Ct = J(() => i.coverSupportMatrix || Me.value.coverSupportMatrix || Fe.value.byFormat || []), fe = J(() => i.environmentCapabilities || Me.value.environmentCapabilities || {}), Vt = J(() => Number(ze.value.total || 0) > 0 || Number(Ie.value.mismatches || 0) > 0 || (Fe.value.byFormat || []).some((F) => F.nextcloudPreview !== "expected-ok" || F.libraryCoverRoute !== "expected-ok")), je = J(() => i.discoveryPage === "publication"), ht = J(() => i.discoveryPage === "year"), mt = J(() => i.discoveryPage === "creator"), bt = J(() => je.value || ht.value || mt.value), lt = J(() => i.discoveryTitle || U.publication || U.year || U.creator || ""), At = J(() => bt.value ? lt.value : l("library", "Publication catalogue")), p = J(() => mt.value ? l("library", "Creator") : ht.value ? l("library", "Publication year") : l("library", "Publication / series")), m = J(() => Number(i.rootCount || 0)), _ = J(() => Number(i.enabledRootCount || 0)), A = J(() => m.value === 0), T = J(() => m.value > 0 && _.value === 0), x = J(() => M.value.length > 0), L = {
      q: "Search",
      type: "Type",
      publication: "Series / periodical",
      year: "Publication year",
      creator: "Creator",
      format: "Format",
      tag: "Nextcloud tag",
      shelf: "Shelf",
      status: "Scan status",
      workflowStatus: "Workflow status",
      genre: "Genre",
      classification: "Classification",
      scannerConflicts: "Scanner conflicts",
      starred: "Starred"
    }, I = J(() => {
      if (typeof window > "u") return "";
      const F = new URLSearchParams(window.location.search);
      if (F.get("batchMetadataApplyResult") !== "1") return "";
      const k = F.get("batchMetadataField") || "field", h = F.get("batchMetadataApplied") || "0", Ee = F.get("batchMetadataUnchanged") || "0", Ye = F.get("batchMetadataSkipped") || "0";
      return l("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: h, field: k, unchanged: Ee, skipped: Ye });
    }), M = J(() => Object.entries(L).map(([F, k]) => ({ key: F, label: k, value: U[F] || "" })).filter((F) => String(F.value).trim() !== "")), S = J(() => Object.entries(U).filter(([F, k]) => !["q", "sort", "starred"].includes(F) && String(k || "").trim() !== "").map(([F, k]) => ({ key: F, value: k }))), q = J(() => Object.entries(U).filter(([F, k]) => String(k || "").trim() !== "").map(([F, k]) => ({ key: F, value: k }))), H = /* @__PURE__ */ mr({}), W = /* @__PURE__ */ va(null);
    let X = null;
    function ee(F) {
      const k = new URLSearchParams(new FormData(F));
      for (const h of Array.from(k.keys()))
        String(k.get(h) || "").trim() === "" && k.delete(h);
      return k.delete("page"), k;
    }
    function N(F) {
      o.splice(0, o.length, ...(F.items || []).map((k) => ({ ...k })));
      for (const k of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummary", "metadataErrorReview", "archiveMagicSummary", "coverHealthSummary", "coverSupportMatrix", "environmentCapabilities"])
        Object.prototype.hasOwnProperty.call(F, k) && (i[k] = F[k]);
      Object.assign(U, F.activeFilters || {});
    }
    async function O(F) {
      const k = F?.currentTarget?.tagName === "FORM" ? F.currentTarget : F?.currentTarget?.form;
      if (!k) return;
      const Ee = ee(k).toString(), Ye = Ee ? `?${Ee}` : "", ct = await fetch(_e.value + Ye, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!ct.ok) {
        k.submit();
        return;
      }
      N(await ct.json()), history.replaceState({}, "", Ee ? `?${Ee}` : window.location.pathname);
    }
    function $(F) {
      O(F);
    }
    function Z(F) {
      window.clearTimeout(X), X = window.setTimeout(() => $(F), 350);
    }
    function ie(F) {
      const k = new URLSearchParams();
      for (const [Ee, Ye] of Object.entries(U)) {
        const ct = String(Ye || "").trim();
        ct !== "" && Ee !== F && !(Ee === "sort" && ct === "title") && k.set(Ee, ct);
      }
      const h = k.toString();
      return h ? `?${h}` : "?";
    }
    function he() {
      return ie("q");
    }
    function ae(F) {
      return String(F || "").toUpperCase();
    }
    function Re(F) {
      return F.nextcloudTags || [];
    }
    function Ae(F) {
      return y.value.find((h) => h.publication === F)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(F)}`;
    }
    function Oe(F) {
      return i.publicationYearLandingUrls?.[F] || `/apps/library/years/${encodeURIComponent(F)}`;
    }
    function at(F) {
      return i.creatorLandingUrls?.[F] || `/apps/library/creators/${encodeURIComponent(F)}`;
    }
    function Mt(F, k) {
      H[F] = !!k?.currentTarget?.open;
    }
    function Bt(F) {
      const k = String(F?.tagName || "").toLowerCase();
      return F?.isContentEditable || ["input", "select", "textarea", "button"].includes(k);
    }
    function lr(F) {
      F.key !== "/" || F.metaKey || F.ctrlKey || F.altKey || F.shiftKey || Bt(F.target) || (F.preventDefault(), W.value?.focus(), W.value?.select?.());
    }
    function wt(F) {
      F.key !== "Escape" || document.activeElement !== W.value || U.q === "" || (F.preventDefault(), U.q = "", W.value.value = "", window.clearTimeout(X), $({ currentTarget: W.value }));
    }
    function yt(F) {
      lr(F), wt(F);
    }
    Ks(() => {
      window.addEventListener("keydown", yt);
    }), Gs(() => {
      window.removeEventListener("keydown", yt);
    });
    async function zt(F, k) {
      const h = k?.currentTarget?.closest?.("form") || k?.currentTarget;
      if (!h || !F?.starUrl) return;
      const Ee = !!F.starred;
      F.starred = !Ee;
      try {
        (await fetch(F.starUrl, {
          method: "POST",
          body: new FormData(h),
          credentials: "same-origin"
        })).ok || (F.starred = Ee);
      } catch {
        F.starred = Ee;
      }
    }
    return (F, k) => (C(), R("div", Zu, [
      u("section", Qu, [
        u("div", ef, [
          u("div", null, [
            bt.value ? (C(), R("p", tf, d(p.value), 1)) : de("", !0),
            u("h2", rf, d(At.value), 1),
            u("p", nf, d(bt.value ? b(l)("library", "Browse this focused view; use filters only when you need to narrow it further.") : b(l)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          u("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": b(l)("library", "Library actions")
          }, [
            u("details", sf, [
              u("summary", null, d(b(l)("library", "Actions")), 1),
              u("div", lf, [
                u("a", {
                  href: V.value,
                  class: "button secondary",
                  "aria-label": "Open Library settings"
                }, d(b(l)("library", "Settings")), 9, af),
                Pe.value ? (C(), R("a", {
                  key: 0,
                  href: Pe.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, d(b(l)("library", "Export corrected metadata")), 9, cf)) : de("", !0),
                we.value ? (C(), R("a", {
                  key: 1,
                  href: we.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar manifest"
                }, d(b(l)("library", "Sidecar manifest")), 9, uf)) : de("", !0),
                Be.value ? (C(), R("a", {
                  key: 2,
                  href: Be.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar ZIP"
                }, d(b(l)("library", "Sidecar ZIP")), 9, ff)) : de("", !0)
              ])
            ])
          ], 8, of)
        ]),
        I.value ? (C(), R("p", df, d(I.value), 1)) : de("", !0),
        u("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": b(l)("library", "Quick catalogue filters"),
          onSubmit: En(O, ["prevent"])
        }, [
          (C(!0), R(se, null, ve(S.value, (h) => (C(), R("input", {
            key: h.key,
            type: "hidden",
            name: h.key,
            value: h.value
          }, null, 8, hf))), 128)),
          u("div", mf, [
            u("label", bf, [
              u("span", null, [
                be(d(b(l)("library", "Search")) + " ", 1),
                k[18] || (k[18] = u("kbd", { class: "library-keyboard-hint" }, "/", -1))
              ]),
              We(u("input", {
                ref_key: "quickSearchInput",
                ref: W,
                "onUpdate:modelValue": k[0] || (k[0] = (h) => U.q = h),
                "data-library-quick-search": "",
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex...",
                onInput: Z
              }, null, 544), [
                [mi, U.q]
              ])
            ]),
            u("button", {
              type: "submit",
              class: "button primary",
              "aria-label": b(l)("library", "Search catalogue")
            }, d(b(l)("library", "Search")), 9, yf)
          ]),
          u("details", gf, [
            u("summary", null, d(b(l)("library", "Filter & sort")), 1),
            u("div", _f, [
              u("label", null, [
                be(d(b(l)("library", "Sort")) + " ", 1),
                We(u("select", {
                  "onUpdate:modelValue": k[1] || (k[1] = (h) => U.sort = h),
                  name: "sort",
                  onChange: O
                }, [
                  u("option", vf, d(b(l)("library", "Title")), 1),
                  u("option", Ef, d(b(l)("library", "Recently added")), 1),
                  u("option", Tf, d(b(l)("library", "Publication date")), 1),
                  u("option", Sf, d(b(l)("library", "Series")), 1),
                  u("option", xf, d(b(l)("library", "Recently opened")), 1),
                  u("option", Cf, d(b(l)("library", "Format")), 1)
                ], 544), [
                  [rt, U.sort]
                ])
              ]),
              u("label", null, [
                be(d(b(l)("library", "Starred")) + " ", 1),
                We(u("select", {
                  "onUpdate:modelValue": k[2] || (k[2] = (h) => U.starred = h),
                  name: "starred",
                  onChange: O
                }, [
                  u("option", Af, d(b(l)("library", "All")), 1),
                  u("option", wf, d(b(l)("library", "Starred")), 1)
                ], 544), [
                  [rt, U.starred]
                ])
              ]),
              u("label", null, [
                be(d(b(l)("library", "Size")) + " ", 1),
                u("select", {
                  value: z.value.limit,
                  name: "limit",
                  onChange: O
                }, [
                  (C(), R(se, null, ve(n, (h) => u("option", {
                    key: h,
                    value: h
                  }, d(h), 9, Of)), 64))
                ], 40, Rf)
              ]),
              u("button", {
                type: "submit",
                class: "button secondary",
                "aria-label": b(l)("library", "Apply catalogue filters")
              }, d(b(l)("library", "Apply filters")), 9, Nf),
              u("a", {
                href: "?",
                class: "button secondary",
                "aria-label": b(l)("library", "Clear catalogue filters")
              }, d(b(l)("library", "Clear all")), 9, Pf)
            ])
          ])
        ], 40, pf),
        u("details", kf, [
          u("summary", Mf, d(b(l)("library", "Show catalogue filters")), 1),
          u("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": b(l)("library", "Catalogue search and filters"),
            onSubmit: En(O, ["prevent"])
          }, [
            u("label", null, [
              be(d(b(l)("library", "Search title / author")) + " ", 1),
              We(u("input", {
                "onUpdate:modelValue": k[3] || (k[3] = (h) => U.q = h),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [mi, U.q]
              ])
            ]),
            u("label", null, [
              be(d(b(l)("library", "Type")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": k[4] || (k[4] = (h) => U.type = h),
                name: "type"
              }, [
                u("option", If, d(b(l)("library", "All types")), 1),
                (C(), R(se, null, ve(r, (h) => u("option", {
                  key: h,
                  value: h
                }, d(h), 9, Uf)), 64))
              ], 512), [
                [rt, U.type]
              ])
            ]),
            u("label", null, [
              be(d(b(l)("library", "Series / periodical")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": k[5] || (k[5] = (h) => U.publication = h),
                name: "publication"
              }, [
                u("option", Df, d(b(l)("library", "All series and periodicals")), 1),
                (C(!0), R(se, null, ve(v.value, (h) => (C(), R("option", {
                  key: h,
                  value: h
                }, d(h), 9, Ff))), 128))
              ], 512), [
                [rt, U.publication]
              ])
            ]),
            u("label", null, [
              be(d(b(l)("library", "Publication year")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": k[6] || (k[6] = (h) => U.year = h),
                name: "year"
              }, [
                u("option", Hf, d(b(l)("library", "All years")), 1),
                (C(!0), R(se, null, ve(P.value, (h) => (C(), R("option", {
                  key: h,
                  value: h
                }, d(h), 9, $f))), 128))
              ], 512), [
                [rt, U.year]
              ])
            ]),
            u("label", null, [
              be(d(b(l)("library", "Creator")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": k[7] || (k[7] = (h) => U.creator = h),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                u("option", jf, d(b(l)("library", "All creators")), 1),
                (C(!0), R(se, null, ve(j.value, (h) => (C(), R("option", {
                  key: h,
                  value: h
                }, d(h), 9, Vf))), 128))
              ], 512), [
                [rt, U.creator]
              ])
            ]),
            u("label", null, [
              be(d(b(l)("library", "Nextcloud tag")) + " ", 1),
              We(u("input", {
                "onUpdate:modelValue": k[8] || (k[8] = (h) => U.tag = h),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [mi, U.tag]
              ])
            ]),
            u("label", null, [
              be(d(b(l)("library", "Format")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": k[9] || (k[9] = (h) => U.format = h),
                name: "format"
              }, [
                u("option", Bf, d(b(l)("library", "All formats")), 1),
                (C(!0), R(se, null, ve(f.value, (h) => (C(), R("option", {
                  key: h,
                  value: h
                }, d(ae(h)), 9, zf))), 128))
              ], 512), [
                [rt, U.format]
              ])
            ]),
            u("label", null, [
              be(d(b(l)("library", "Shelf")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": k[10] || (k[10] = (h) => U.shelf = h),
                name: "shelf"
              }, [
                u("option", Wf, d(b(l)("library", "All shelves")), 1),
                (C(!0), R(se, null, ve(a.value, (h) => (C(), R("option", {
                  key: h,
                  value: h
                }, d(h), 9, qf))), 128))
              ], 512), [
                [rt, U.shelf]
              ])
            ]),
            u("label", null, [
              be(d(b(l)("library", "Scan status")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": k[11] || (k[11] = (h) => U.status = h),
                name: "status"
              }, [
                u("option", Kf, d(b(l)("library", "All scan statuses")), 1),
                (C(!0), R(se, null, ve(re.value, (h) => (C(), R("option", {
                  key: h,
                  value: h
                }, d(h), 9, Gf))), 128))
              ], 512), [
                [rt, U.status]
              ])
            ]),
            u("label", null, [
              be(d(b(l)("library", "Workflow status")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": k[12] || (k[12] = (h) => U.workflowStatus = h),
                name: "workflowStatus"
              }, [
                u("option", Yf, d(b(l)("library", "All workflow statuses")), 1),
                (C(!0), R(se, null, ve(K.value, (h) => (C(), R("option", {
                  key: h,
                  value: h
                }, d(h), 9, Xf))), 128))
              ], 512), [
                [rt, U.workflowStatus]
              ])
            ]),
            u("label", null, [
              be(d(b(l)("library", "Genre")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": k[13] || (k[13] = (h) => U.genre = h),
                name: "genre"
              }, [
                u("option", Jf, d(b(l)("library", "All genres")), 1),
                (C(!0), R(se, null, ve(oe.value, (h) => (C(), R("option", {
                  key: h,
                  value: h
                }, d(h), 9, Zf))), 128))
              ], 512), [
                [rt, U.genre]
              ])
            ]),
            u("label", null, [
              be(d(b(l)("library", "Classification")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": k[14] || (k[14] = (h) => U.classification = h),
                name: "classification"
              }, [
                u("option", Qf, d(b(l)("library", "All classifications")), 1),
                (C(!0), R(se, null, ve(ne.value, (h) => (C(), R("option", {
                  key: h,
                  value: h
                }, d(h), 9, ed))), 128))
              ], 512), [
                [rt, U.classification]
              ])
            ]),
            u("label", null, [
              be(d(b(l)("library", "Scanner conflicts")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": k[15] || (k[15] = (h) => U.scannerConflicts = h),
                name: "scannerConflicts"
              }, [
                u("option", td, d(b(l)("library", "All metadata")), 1),
                u("option", rd, d(b(l)("library", "Needs review")), 1)
              ], 512), [
                [rt, U.scannerConflicts]
              ])
            ]),
            u("label", null, [
              be(d(b(l)("library", "Starred")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": k[16] || (k[16] = (h) => U.starred = h),
                name: "starred"
              }, [
                u("option", nd, d(b(l)("library", "All publications")), 1),
                u("option", id, d(b(l)("library", "Starred only")), 1)
              ], 512), [
                [rt, U.starred]
              ])
            ]),
            u("label", null, [
              be(d(b(l)("library", "Sort")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": k[17] || (k[17] = (h) => U.sort = h),
                name: "sort"
              }, [
                u("option", od, d(b(l)("library", "Title")), 1),
                u("option", sd, d(b(l)("library", "Recently added")), 1),
                u("option", ld, d(b(l)("library", "Publication date")), 1),
                u("option", ad, d(b(l)("library", "Series / periodical")), 1),
                u("option", cd, d(b(l)("library", "Recently opened")), 1),
                u("option", ud, d(b(l)("library", "Format")), 1)
              ], 512), [
                [rt, U.sort]
              ])
            ]),
            u("label", null, [
              be(d(b(l)("library", "Page size")) + " ", 1),
              u("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (C(), R(se, null, ve(n, (h) => u("option", {
                  key: h,
                  value: h
                }, d(h), 9, dd)), 64))
              ], 8, fd)
            ]),
            u("button", {
              type: "submit",
              class: "button primary",
              "aria-label": b(l)("library", "Apply catalogue filters")
            }, d(b(l)("library", "Apply filters")), 9, pd),
            u("a", {
              href: "?",
              class: "button secondary",
              "aria-label": b(l)("library", "Clear catalogue filters")
            }, d(b(l)("library", "Clear")), 9, hd),
            u("a", {
              href: $e.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, d(b(l)("library", "Review scanner conflicts")), 9, md)
          ], 40, Lf)
        ]),
        bt.value ? (C(), R("section", bd, [
          u("p", yd, d(p.value), 1),
          u("h3", gd, d(lt.value), 1),
          u("p", _d, d(mt.value ? b(l)("library", "Items by this creator, sorted by publication context when available.") : ht.value ? b(l)("library", "Items from this publication year, sorted by publication date when available.") : b(l)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          u("div", vd, [
            u("span", null, d(z.value.total) + " " + d(b(l)("library", "items")), 1),
            E.value?.earliestYear && E.value?.latestYear ? (C(), R("span", Ed, d(E.value.earliestYear) + "–" + d(E.value.latestYear), 1)) : de("", !0),
            E.value?.datedCount ? (C(), R("span", Td, d(E.value.datedCount) + " " + d(b(l)("library", "dated")), 1)) : de("", !0),
            E.value?.undatedCount > 0 ? (C(), R("span", Sd, d(E.value.undatedCount) + " " + d(b(l)("library", "undated")), 1)) : de("", !0)
          ]),
          je.value && E.value ? (C(), R("aside", xd, [
            u("strong", null, d(b(l)("library", "Publication contents")), 1),
            u("span", null, d(E.value.itemCount) + " " + d(b(l)("library", "items")), 1),
            E.value.earliestYear && E.value.latestYear ? (C(), R("span", Cd, d(E.value.earliestYear) + "–" + d(E.value.latestYear), 1)) : de("", !0),
            u("span", null, d(E.value.datedCount) + " " + d(b(l)("library", "with issue/date coverage")), 1),
            E.value.undatedCount > 0 ? (C(), R("span", Ad, d(E.value.undatedCount) + " " + d(b(l)("library", "without dates yet")), 1)) : de("", !0)
          ])) : de("", !0),
          u("p", null, [
            u("a", wd, d(b(l)("library", "Back to full catalogue")), 1)
          ])
        ])) : de("", !0),
        Vt.value ? (C(), R("section", Rd, [
          u("div", Od, [
            u("div", null, [
              u("p", Nd, d(b(l)("library", "Import health")), 1),
              u("h3", Pd, d(b(l)("library", "Real-file findings")), 1),
              u("p", kd, d(b(l)("library", "Metadata errors, archive/container mismatches, and cover risks from the current Library roots. Files are left as-is; diagnostics clarify what Library cover extraction can do versus Nextcloud/other preview plugins.")), 1)
            ]),
            u("a", {
              class: "button secondary",
              href: ze.value.reviewUrl || "?status=metadata_error"
            }, d(b(l)("library", "Review metadata errors")), 9, Md),
            u("a", {
              class: "button secondary",
              href: ke.value
            }, d(b(l)("library", "Full review")), 9, Ld),
            u("a", {
              class: "button secondary",
              href: me.value
            }, d(b(l)("library", "Export TSV")), 9, Id),
            u("a", {
              class: "button secondary",
              href: ce.value
            }, d(b(l)("library", "Probe covers")), 9, Ud)
          ]),
          u("div", Dd, [
            u("article", Fd, [
              u("h4", null, d(b(l)("library", "Metadata errors")), 1),
              u("p", Hd, d(ze.value.total || 0), 1),
              u("ul", null, [
                (C(!0), R(se, null, ve(ze.value.byExtension, (h) => (C(), R("li", {
                  key: h.extension
                }, d(ae(h.extension)) + " · " + d(h.count), 1))), 128))
              ])
            ]),
            u("article", $d, [
              u("h4", null, d(b(l)("library", "Archive/container check")), 1),
              u("p", jd, d(Ie.value.mismatches || 0), 1),
              u("ul", null, [
                (C(!0), R(se, null, ve(Ie.value.byExtensionAndContainer, (h) => (C(), R("li", {
                  key: `${h.extension}-${h.actualContainerType}`
                }, d(ae(h.extension)) + " · " + d(h.actualContainerType) + " · " + d(h.count), 1))), 128))
              ])
            ]),
            u("article", Vd, [
              u("h4", null, d(b(l)("library", "Cover health")), 1),
              u("p", Bd, d(Fe.value.note), 1),
              u("ul", null, [
                (C(!0), R(se, null, ve(Fe.value.byFormat, (h) => (C(), R("li", {
                  key: `${h.extension}-${h.nextcloudPreview}-${h.libraryCoverRoute}`
                }, d(ae(h.extension)) + " · nextcloudPreview: " + d(h.nextcloudPreview) + " · libraryCoverRoute: " + d(h.libraryCoverRoute) + " · " + d(h.count), 1))), 128))
              ])
            ]),
            u("article", zd, [
              u("h4", null, d(b(l)("library", "Cover support matrix")), 1),
              u("p", Wd, d(b(l)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1),
              u("ul", null, [
                (C(!0), R(se, null, ve(Ct.value, (h) => (C(), R("li", {
                  key: `${h.extension}-${h.nextcloudPreview}-${h.libraryCoverRoute}-${h.count}`
                }, d(ae(h.extension)) + " · Nextcloud/plugin preview: " + d(h.nextcloudPreview) + " · Library extraction: " + d(h.libraryCoverRoute) + " · " + d(h.count), 1))), 128))
              ]),
              u("p", qd, d(b(l)("library", "Extractor tools")) + ": ZIP=" + d(fe.value.phpZipArchive ? "ZipArchive" : "missing") + " · 7z=" + d(fe.value.sevenZipCommand || "missing") + " · RAR=" + d(fe.value.rarCommand || "missing") + " · bsdtar=" + d(fe.value.bsdtarCommand || "missing"), 1)
            ])
          ]),
          ze.value.examples?.length ? (C(), R("details", Kd, [
            u("summary", null, d(b(l)("library", "Example files and suggested actions")), 1),
            u("ul", null, [
              (C(!0), R(se, null, ve(ze.value.examples, (h) => (C(), R("li", {
                key: `${h.fileId}-${h.path}`
              }, [
                u("code", null, d(h.path), 1),
                u("span", null, d(h.scanStatus) + " · " + d(h.scanError) + " · " + d(h.actualContainerType), 1),
                u("strong", null, d(h.suggestedRepairAction), 1)
              ]))), 128))
            ])
          ])) : de("", !0)
        ])) : de("", !0),
        u("div", Gd, [
          u("p", Yd, [
            be(d(b(l)("library", "Showing")) + " " + d(z.value.from) + "–" + d(z.value.to) + " " + d(b(l)("library", "of")) + " " + d(z.value.total) + " " + d(b(l)("library", "catalogue items")), 1),
            M.value.length > 0 ? (C(), R("span", Xd, [
              k[19] || (k[19] = be(" · ", -1)),
              u("a", Jd, d(b(l)("library", "Clear all filters")), 1)
            ])) : de("", !0)
          ]),
          u("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": b(l)("library", "Catalogue pagination")
          }, [
            u("span", Qd, [
              be(d(b(l)("library", "Page")) + " " + d(z.value.page), 1),
              z.value.total > 0 ? (C(), R("span", ep, " · " + d(z.value.from) + "–" + d(z.value.to), 1)) : de("", !0)
            ]),
            z.value.previousUrl ? (C(), R("a", {
              key: 0,
              href: z.value.previousUrl
            }, d(b(l)("library", "Previous")), 9, tp)) : (C(), R("span", rp, d(b(l)("library", "Previous")), 1)),
            z.value.nextUrl ? (C(), R("a", {
              key: 2,
              href: z.value.nextUrl
            }, d(b(l)("library", "Next")), 9, np)) : (C(), R("span", ip, d(b(l)("library", "Next")), 1))
          ], 8, Zd)
        ]),
        u("div", op, [
          u("details", {
            class: "library-batch-actions",
            "aria-label": b(l)("library", "Batch actions for current results")
          }, [
            u("summary", null, [
              be(d(b(l)("library", "Batch")) + " ", 1),
              u("span", lp, d(z.value.total) + " " + d(b(l)("library", "Current filter result")), 1)
            ]),
            u("form", {
              method: "post",
              action: De.value,
              class: "library-batch-tag-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ue.value
              }, null, 8, cp),
              (C(!0), R(se, null, ve(q.value, (h) => (C(), R("input", {
                key: h.key,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, up))), 128)),
              u("label", null, [
                u("span", null, d(b(l)("library", "Nextcloud tag")), 1),
                u("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: b(l)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, fp)
              ]),
              u("button", dp, d(b(l)("library", "Apply Nextcloud tag to current results")), 1),
              u("p", pp, d(b(l)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, ap),
            u("form", {
              method: "post",
              action: et.value,
              class: "library-batch-tag-remove-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ue.value
              }, null, 8, mp),
              (C(!0), R(se, null, ve(q.value, (h) => (C(), R("input", {
                key: `remove-tag-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, bp))), 128)),
              u("label", null, [
                u("span", null, d(b(l)("library", "Nextcloud tag")), 1),
                u("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: b(l)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, yp)
              ]),
              u("button", gp, d(b(l)("library", "Remove tag from current results")), 1),
              u("p", _p, d(b(l)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, hp),
            u("form", {
              method: "post",
              action: st.value,
              class: "library-batch-metadata-reset-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ue.value
              }, null, 8, Ep),
              (C(!0), R(se, null, ve(q.value, (h) => (C(), R("input", {
                key: `reset-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, Tp))), 128)),
              k[20] || (k[20] = u("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              u("button", Sp, d(b(l)("library", "Reset filtered metadata")), 1),
              u("p", xp, d(b(l)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, vp),
            u("form", {
              method: "post",
              action: Ke.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ue.value
              }, null, 8, Ap),
              (C(!0), R(se, null, ve(q.value, (h) => (C(), R("input", {
                key: `edit-preview-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, wp))), 128)),
              u("label", null, [
                u("span", null, d(b(l)("library", "Metadata field")), 1),
                u("select", Rp, [
                  u("option", Op, d(b(l)("library", "Publication type")), 1),
                  u("option", Np, d(b(l)("library", "Subtitle")), 1),
                  u("option", Pp, d(b(l)("library", "Creators")), 1),
                  u("option", kp, d(b(l)("library", "Series / periodical")), 1),
                  u("option", Mp, d(b(l)("library", "Publication date")), 1),
                  u("option", Lp, d(b(l)("library", "Language")), 1),
                  u("option", Ip, d(b(l)("library", "Publisher")), 1),
                  u("option", Up, d(b(l)("library", "Genres")), 1),
                  u("option", Dp, d(b(l)("library", "Classifications")), 1)
                ])
              ]),
              u("label", null, [
                u("span", null, d(b(l)("library", "Preview value")), 1),
                k[21] || (k[21] = u("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              u("button", Fp, d(b(l)("library", "Preview & apply metadata edit")), 1),
              u("p", Hp, d(b(l)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, Cp),
            u("form", {
              method: "post",
              action: Tt.value,
              class: "library-batch-cover-refresh-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ue.value
              }, null, 8, jp),
              (C(!0), R(se, null, ve(q.value, (h) => (C(), R("input", {
                key: `cover-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, Vp))), 128)),
              u("button", Bp, d(b(l)("library", "Request fresh cover previews")), 1),
              u("p", zp, d(b(l)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, $p)
          ], 8, sp),
          u("details", Wp, [
            u("summary", null, d(b(l)("library", "Browse")), 1),
            u("div", qp, [
              y.value.length > 0 ? (C(), R("section", Kp, [
                u("h3", Gp, d(b(l)("library", "Top series and periodicals")), 1),
                u("p", Yp, d(b(l)("library", "Jump into recurring publications with one click.")), 1),
                u("ul", null, [
                  (C(!0), R(se, null, ve(y.value, (h) => (C(), R("li", {
                    key: h.publication
                  }, [
                    u("a", {
                      href: Ae(h.publication)
                    }, d(h.publication), 9, Xp),
                    u("span", Jp, d(h.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : y.value.length === 0 ? (C(), R("section", Zp, [
                u("h3", Qp, d(b(l)("library", "No series or periodicals found yet")), 1),
                u("p", eh, d(b(l)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : de("", !0),
              P.value.length > 0 ? (C(), R("section", th, [
                u("h3", rh, d(b(l)("library", "Top publication years")), 1),
                u("ul", null, [
                  (C(!0), R(se, null, ve(P.value, (h) => (C(), R("li", { key: h }, [
                    u("a", {
                      href: Oe(h)
                    }, d(h), 9, nh)
                  ]))), 128))
                ])
              ])) : de("", !0),
              j.value.length > 0 ? (C(), R("section", ih, [
                u("h3", oh, d(b(l)("library", "Top creators")), 1),
                u("ul", null, [
                  (C(!0), R(se, null, ve(j.value, (h) => (C(), R("li", { key: h }, [
                    u("a", {
                      href: at(h)
                    }, d(h), 9, sh)
                  ]))), 128))
                ])
              ])) : de("", !0)
            ])
          ])
        ]),
        M.value.length > 0 ? (C(), R("nav", {
          key: 3,
          class: "library-active-filter-chips",
          "aria-label": b(l)("library", "Active filters")
        }, [
          u("span", null, d(b(l)("library", "Active filters")), 1),
          (C(!0), R(se, null, ve(M.value, (h) => (C(), R("a", {
            key: h.key,
            href: ie(h.key),
            class: "library-filter-chip",
            "aria-label": `${b(l)("library", "Remove filter")}: ${h.label}`
          }, [
            u("strong", null, d(h.label) + ":", 1),
            be(" " + d(h.value) + " ", 1),
            k[22] || (k[22] = u("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, ah))), 128))
        ], 8, lh)) : de("", !0),
        s.value.length === 0 ? (C(), R("div", {
          key: 4,
          class: Pr(["library-empty-content", { "library-first-run-guidance": A.value || T.value, "library-filter-empty-state": x.value && !A.value && !T.value }]),
          role: "status"
        }, [
          A.value ? (C(), R(se, { key: 0 }, [
            u("h3", null, d(b(l)("library", "Start with one Library root")), 1),
            u("p", ch, d(b(l)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            u("p", uh, [
              u("a", {
                href: V.value,
                class: "button primary"
              }, d(b(l)("library", "Add a Library root")), 9, fh),
              u("span", dh, d(b(l)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : T.value ? (C(), R(se, { key: 1 }, [
            u("h3", null, d(b(l)("library", "No enabled Library roots")), 1),
            u("p", ph, d(b(l)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            u("p", hh, [
              u("a", {
                href: V.value,
                class: "button primary"
              }, d(b(l)("library", "Open Library settings")), 9, mh)
            ])
          ], 64)) : x.value ? (C(), R(se, { key: 2 }, [
            u("h3", null, d(b(l)("library", "No matches for the current filters")), 1),
            u("p", bh, d(b(l)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            u("p", yh, [
              u("a", {
                href: he(),
                class: "button secondary"
              }, d(b(l)("library", "Clear search")), 9, gh),
              u("a", _h, d(b(l)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (C(), R(se, { key: 3 }, [
            u("h3", null, d(b(l)("library", "No catalogue items yet")), 1),
            u("p", vh, d(b(l)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            u("p", Eh, [
              u("a", {
                href: V.value,
                class: "button primary"
              }, d(b(l)("library", "Run a scan from settings")), 9, Th)
            ])
          ], 64))
        ], 2)) : (C(), R("div", Sh, [
          (C(!0), R(se, null, ve(s.value, (h) => (C(), R("article", {
            key: h.id,
            class: Pr(["library-cover-card", { "library-cover-card--open": H[h.id] }])
          }, [
            u("a", {
              class: "library-cover-link",
              href: h.openUrl,
              "aria-label": `Read ${h.title}`
            }, [
              u("img", {
                class: "library-cover-image",
                src: h.coverUrl,
                alt: `Cover for ${h.title}`,
                loading: "lazy"
              }, null, 8, Ch)
            ], 8, xh),
            u("form", {
              method: "post",
              action: h.starUrl,
              class: "library-cover-star-form",
              onSubmit: En((Ee) => zt(h, Ee), ["prevent"])
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ue.value
              }, null, 8, wh),
              k[23] || (k[23] = u("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              u("input", {
                type: "hidden",
                name: "starred",
                value: h.starred ? "0" : "1"
              }, null, 8, Rh),
              u("button", {
                type: "submit",
                class: Pr(["library-cover-star-button", { "library-cover-star-button--starred": h.starred }]),
                "aria-pressed": h.starred ? "true" : "false",
                title: h.starred ? b(l)("library", "Unstar this publication") : b(l)("library", "Star this publication"),
                "aria-label": h.starred ? b(l)("library", "Unstar this publication") : b(l)("library", "Star this publication"),
                onClick: En((Ee) => zt(h, Ee), ["prevent"])
              }, d(h.starred ? "★" : "☆"), 11, Oh)
            ], 40, Ah),
            u("div", Nh, [
              u("div", Ph, [
                u("h3", null, [
                  h.starred ? (C(), R("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": b(l)("library", "Starred")
                  }, "★", 8, kh)) : de("", !0),
                  be(d(h.title), 1)
                ]),
                u("a", {
                  class: "library-cover-read",
                  href: h.openUrl
                }, d(b(l)("library", "Read")), 9, Mh)
              ]),
              u("details", {
                class: "library-cover-details",
                onToggle: (Ee) => Mt(h.id, Ee)
              }, [
                u("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${b(l)("library", "Show details and actions")}: ${h.title}`
                }, d(b(l)("library", "Details")), 9, Ih),
                u("div", Uh, [
                  h.creators ? (C(), R("p", Dh, d(h.creators), 1)) : de("", !0),
                  u("dl", Fh, [
                    u("div", Hh, [
                      u("dt", null, d(b(l)("library", "Type")), 1),
                      u("dd", null, d(h.publicationType), 1)
                    ]),
                    h.publication ? (C(), R("div", $h, [
                      u("dt", null, d(b(l)("library", "Series")), 1),
                      u("dd", null, d(h.publication), 1)
                    ])) : de("", !0),
                    h.publicationDate ? (C(), R("div", jh, [
                      u("dt", null, d(b(l)("library", "Date")), 1),
                      u("dd", null, d(h.publicationDate), 1)
                    ])) : de("", !0),
                    h.workflowStatus ? (C(), R("div", Vh, [
                      u("dt", null, d(b(l)("library", "Status")), 1),
                      u("dd", null, d(h.workflowStatus), 1)
                    ])) : de("", !0),
                    h.hasScannerConflict ? (C(), R("div", Bh, [
                      u("dt", null, d(b(l)("library", "Review")), 1),
                      u("dd", null, d(h.scannerConflictCount) + " fields", 1)
                    ])) : de("", !0),
                    h.lastOpenedAt ? (C(), R("div", zh, [
                      u("dt", null, d(b(l)("library", "Last opened")), 1),
                      u("dd", null, d(h.lastOpenedAt), 1)
                    ])) : de("", !0),
                    h.extension ? (C(), R("div", Wh, [
                      u("dt", null, d(b(l)("library", "Format")) + ":", 1),
                      u("dd", null, d(ae(h.extension)), 1)
                    ])) : de("", !0),
                    h.shelf ? (C(), R("div", qh, [
                      u("dt", null, d(b(l)("library", "Shelf")), 1),
                      u("dd", null, d(h.shelf), 1)
                    ])) : de("", !0)
                  ]),
                  h.description ? (C(), R("p", Kh, d(h.description), 1)) : de("", !0),
                  h.scanStatus !== "indexed" || h.scanError ? (C(), R("p", Gh, [
                    be(" scanStatus: " + d(h.scanStatus || "unknown"), 1),
                    h.scanError ? (C(), R("span", Yh, " · scanError: " + d(h.scanError), 1)) : de("", !0)
                  ])) : de("", !0),
                  u("div", Xh, [
                    Re(h).length === 0 ? (C(), R("span", Jh, "No Nextcloud tags")) : (C(!0), R(se, { key: 1 }, ve(Re(h), (Ee) => (C(), R("span", {
                      key: Ee.id,
                      class: "library-tag"
                    }, d(Ee.name), 1))), 128))
                  ]),
                  u("p", Zh, [
                    u("a", {
                      href: h.filesUrl
                    }, d(b(l)("library", "Show in Files")), 9, Qh),
                    k[24] || (k[24] = be(" · ", -1)),
                    u("a", {
                      href: h.downloadUrl
                    }, d(b(l)("library", "Download source")), 9, em),
                    k[25] || (k[25] = be(" · ", -1)),
                    u("a", {
                      href: h.detailsUrl
                    }, d(b(l)("library", "Details")), 9, tm)
                  ])
                ])
              ], 40, Lh)
            ])
          ], 2))), 128))
        ])),
        s.value.length > 0 ? (C(), R("nav", {
          key: 6,
          class: "library-pagination library-pagination--bottom",
          "aria-label": b(l)("library", "Catalogue pagination")
        }, [
          u("span", nm, [
            be(d(b(l)("library", "Page")) + " " + d(z.value.page), 1),
            z.value.total > 0 ? (C(), R("span", im, " · " + d(z.value.from) + "–" + d(z.value.to), 1)) : de("", !0)
          ]),
          z.value.previousUrl ? (C(), R("a", {
            key: 0,
            href: z.value.previousUrl
          }, d(b(l)("library", "Previous")), 9, om)) : (C(), R("span", sm, d(b(l)("library", "Previous")), 1)),
          z.value.nextUrl ? (C(), R("a", {
            key: 2,
            href: z.value.nextUrl
          }, d(b(l)("library", "Next")), 9, lm)) : (C(), R("span", am, d(b(l)("library", "Next")), 1))
        ], 8, rm)) : de("", !0)
      ])
    ]));
  }
}, cs = du("library", "catalogue", {}), An = document.querySelector("#library-vue-root"), us = {
  ...cs,
  requestToken: An?.dataset.requestToken || cs.requestToken || ""
};
function G(e) {
  return String(e ?? "");
}
function xl(e) {
  return G(e).toUpperCase();
}
function um(e, t, r, n = G) {
  for (const i of t) {
    const o = document.createElement("option");
    o.value = G(i), o.textContent = n(i), G(i) === G(r) && (o.selected = !0), e.appendChild(o);
  }
}
function fs(e, t, r, n, i = "") {
  const o = document.createElement("label");
  o.textContent = t;
  const s = document.createElement("input");
  s.type = r === "q" ? "search" : "text", s.name = r, s.value = G(n), s.placeholder = i, o.appendChild(s), e.appendChild(o);
}
function Ar(e, t, r, n, i, o, s = G) {
  const a = document.createElement("label");
  a.textContent = t;
  const f = document.createElement("select");
  f.name = r;
  const v = document.createElement("option");
  v.value = "", v.textContent = i, f.appendChild(v), um(f, o, n, s), a.appendChild(f), e.appendChild(a);
}
function wr(e) {
  const t = G(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function fm(e, t = {}) {
  return G(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(G(e || t?.publication || ""))}`);
}
function dm(e) {
  return G(e.discoveryPage) === "publication";
}
function pm(e, t = {}) {
  return G(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(G(e))}`);
}
function Si(e) {
  return G(e.discoveryPage) === "year";
}
function hm(e, t = {}) {
  return G(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(G(e))}`);
}
function xi(e) {
  return G(e.discoveryPage) === "creator";
}
function mm(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && G(n).trim() !== "");
}
function bm() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function zr(e, t, r, n) {
  const i = document.createElement("a");
  return i.href = t, i.className = r, i.textContent = n, e.appendChild(i), i;
}
function ym(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function gm(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", l("library", "Catalogue search and filters")), fs(n, l("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), Ar(n, l("library", "Type"), "type", r.type, l("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), fs(n, l("library", "Nextcloud tag"), "tag", r.tag, "photography"), Ar(n, l("library", "Format"), "format", r.format, l("library", "All formats"), e.formats || [], xl), Ar(n, l("library", "Shelf"), "shelf", r.shelf, l("library", "All shelves"), e.shelves || []), Ar(n, l("library", "Scan status"), "status", r.status, l("library", "All scan statuses"), e.scanStatuses || []), Ar(n, l("library", "Sort"), "sort", r.sort || "title", l("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Ar(n, l("library", "Page size"), "limit", t.limit || 100, l("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", l("library", "Apply catalogue filters")), i.textContent = l("library", "Apply filters");
  const o = document.createElement("a");
  return o.href = "?", o.className = "button secondary", o.setAttribute("aria-label", l("library", "Clear catalogue filters")), o.textContent = l("library", "Clear"), n.append(i, o), n;
}
function _m() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", i = e.get("batchMetadataSkipped") || "0", o = document.createElement("p");
  return o.className = "library-notice library-batch-metadata-apply-result", o.textContent = l("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${i} skipped.`), o;
}
function vm(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", l("library", "Quick catalogue filters"));
  let i = null;
  const o = () => {
    window.clearTimeout(i), i = window.setTimeout(() => n.requestSubmit(), 350);
  };
  for (const [E, P] of Object.entries(r)) {
    if (["q", "sort", "starred"].includes(E) || G(P).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = E, j.value = G(P), n.appendChild(j);
  }
  const s = document.createElement("label");
  s.className = "library-quick-filter-search", s.textContent = l("library", "Search");
  const a = document.createElement("input");
  a.type = "search", a.name = "q", a.value = G(r.q), a.placeholder = "Camera, Eco, Rolleiflex...", a.addEventListener("input", o), s.appendChild(a), n.appendChild(s);
  const f = [
    [l("library", "Sort"), "sort", r.sort || "title", [["title", l("library", "Title")], ["recent", l("library", "Recently added")], ["publicationDate", l("library", "Publication date")], ["publication", l("library", "Series")], ["lastOpened", l("library", "Recently opened")], ["format", l("library", "Format")]]],
    [l("library", "Starred"), "starred", r.starred || "", [["", l("library", "All")], ["1", l("library", "Starred")]]],
    [l("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [E, P, j, re] of f) {
    const K = document.createElement("label");
    K.textContent = E;
    const oe = document.createElement("select");
    oe.name = P;
    for (const [ne, z] of re) {
      const U = document.createElement("option");
      U.value = G(ne), U.textContent = G(z), G(ne) === G(j) && (U.selected = !0), oe.appendChild(U);
    }
    oe.addEventListener("change", () => n.requestSubmit()), K.appendChild(oe), n.appendChild(K);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", l("library", "Apply catalogue filters")), v.textContent = l("library", "Apply filters");
  const y = document.createElement("a");
  return y.href = "?", y.className = "button secondary", y.setAttribute("aria-label", l("library", "Clear catalogue filters")), y.textContent = l("library", "Clear all"), n.append(v, y), n;
}
function Em(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, i = G(e.settingsUrl || ""), o = G(e.metadataExportUrl || ""), s = G(e.batchTagUrl || "/apps/library/bulk/tags"), a = G(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), f = G(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = G(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), y = G(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), E = document.createElement("div");
  E.className = "library-vue-catalogue library-vue-fallback", E.dataset.vueFallback = "true";
  const P = document.createElement("section");
  P.className = "library-panel", P.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const re = document.createElement("div"), K = document.createElement("h2");
  K.id = "library-catalogue-heading", K.textContent = l("library", "Publication catalogue");
  const oe = document.createElement("p");
  oe.className = "library-muted", oe.textContent = l("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), re.append(K, oe);
  const ne = document.createElement("nav");
  if (ne.className = "library-catalogue-toolbar", ne.setAttribute("aria-label", l("library", "Library actions")), i) {
    const N = document.createElement("a");
    N.href = i, N.className = "button secondary", N.setAttribute("aria-label", "Open Library settings"), N.textContent = l("library", "Settings"), ne.appendChild(N);
  }
  if (o) {
    const N = document.createElement("a");
    N.href = o, N.className = "button secondary", N.setAttribute("aria-label", "Export corrected metadata"), N.textContent = l("library", "Export corrected metadata"), ne.appendChild(N);
  }
  if (e.metadataSidecarManifestUrl) {
    const N = document.createElement("a");
    N.href = e.metadataSidecarManifestUrl, N.className = "button secondary", N.setAttribute("aria-label", "Export sidecar manifest"), N.textContent = l("library", "Sidecar manifest"), ne.appendChild(N);
  }
  if (e.metadataSidecarBundleUrl) {
    const N = document.createElement("a");
    N.href = e.metadataSidecarBundleUrl, N.className = "button secondary", N.setAttribute("aria-label", "Export sidecar ZIP"), N.textContent = l("library", "Sidecar ZIP"), ne.appendChild(N);
  }
  j.append(re, ne), P.appendChild(j);
  const z = _m();
  z && P.appendChild(z), P.appendChild(vm(e, n));
  const U = document.createElement("details");
  U.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = l("library", "Show catalogue filters"), U.append(V, gm(e, n)), P.appendChild(U), dm(e) || Si(e) || xi(e)) {
    const N = document.createElement("section");
    N.className = "library-discovery-header", N.setAttribute("aria-labelledby", "library-discovery-heading");
    const O = document.createElement("p");
    O.className = "library-muted", O.textContent = xi(e) ? l("library", "Creator") : Si(e) ? l("library", "Publication year") : l("library", "Publication / series");
    const $ = document.createElement("h3");
    $.id = "library-discovery-heading", $.textContent = G(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const Z = document.createElement("p");
    Z.className = "library-muted", Z.textContent = `${n.total ?? r.length} ${xi(e) ? l("library", "items by this creator. Sorted by publication context when available.") : Si(e) ? l("library", "items from this publication year. Sorted by publication date when available.") : l("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const ie = document.createElement("a");
    ie.href = "/apps/library/", ie.className = "button secondary", ie.textContent = l("library", "Back to full catalogue"), N.append(O, $, Z, ie), P.appendChild(N);
  }
  const ue = document.createElement("p");
  ue.className = "library-muted library-filter-result-summary", ue.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Pe = document.createElement("a");
  Pe.href = "?", Pe.textContent = ` ${l("library", "Clear all filters")}`, ue.appendChild(Pe), P.appendChild(ue);
  const we = document.createElement("details");
  we.className = "library-batch-actions";
  const Be = document.createElement("summary");
  Be.textContent = `${l("library", "Batch actions for current results")} (${n.total ?? r.length} ${l("library", "Current filter result")})`;
  const _e = document.createElement("form");
  _e.method = "post", _e.action = s, _e.className = "library-batch-tag-form";
  const De = wr(e);
  De && _e.appendChild(De);
  for (const [N, O] of Object.entries(e.activeFilters || {})) {
    if (G(O).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(O), _e.appendChild($);
  }
  const et = document.createElement("label");
  et.textContent = l("library", "Apply Nextcloud tag to current results");
  const st = document.createElement("input");
  st.type = "text", st.name = "nextcloudTagName", st.placeholder = "batch-review", et.appendChild(st);
  const Ke = document.createElement("button");
  Ke.type = "submit", Ke.className = "button secondary", Ke.textContent = l("library", "Apply Nextcloud tag to current results");
  const Tt = document.createElement("p");
  Tt.className = "library-muted", Tt.textContent = l("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), _e.append(et, Ke, Tt);
  const $e = document.createElement("form");
  $e.method = "post", $e.action = a, $e.className = "library-batch-tag-remove-form";
  const ke = wr(e);
  ke && $e.appendChild(ke);
  for (const [N, O] of Object.entries(e.activeFilters || {})) {
    if (G(O).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(O), $e.appendChild($);
  }
  const me = document.createElement("label");
  me.textContent = l("library", "Nextcloud tag");
  const ce = document.createElement("input");
  ce.type = "text", ce.name = "nextcloudTagName", ce.setAttribute("list", "library-nextcloud-tag-suggestions"), ce.placeholder = l("library", "e.g. Review"), ce.autocomplete = "off", me.appendChild(ce);
  const Me = document.createElement("button");
  Me.type = "submit", Me.className = "button secondary", Me.textContent = l("library", "Remove tag from current results");
  const ze = document.createElement("p");
  ze.className = "library-muted", ze.textContent = l("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), $e.append(me, Me, ze);
  const Ie = document.createElement("form");
  Ie.method = "post", Ie.action = f, Ie.className = "library-batch-metadata-reset-form";
  const Fe = wr(e);
  Fe && Ie.appendChild(Fe);
  for (const [N, O] of Object.entries(e.activeFilters || {})) {
    if (G(O).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(O), Ie.appendChild($);
  }
  const Ct = document.createElement("input");
  Ct.type = "hidden", Ct.name = "scannerConflicts", Ct.value = "1";
  const fe = document.createElement("button");
  fe.type = "submit", fe.className = "button secondary", fe.textContent = l("library", "Reset filtered metadata");
  const Vt = document.createElement("p");
  Vt.className = "library-muted", Vt.textContent = l("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Ie.append(Ct, fe, Vt);
  const je = document.createElement("form");
  je.method = "post", je.action = v, je.className = "library-batch-metadata-edit-preview-form", je.target = "_blank";
  const ht = wr(e);
  ht && je.appendChild(ht);
  for (const [N, O] of Object.entries(e.activeFilters || {})) {
    if (G(O).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(O), je.appendChild($);
  }
  const mt = document.createElement("label");
  mt.textContent = l("library", "Metadata field");
  const bt = document.createElement("select");
  bt.name = "bulkEditField";
  for (const [N, O] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const $ = document.createElement("option");
    $.value = N, $.textContent = l("library", O), bt.appendChild($);
  }
  mt.appendChild(bt);
  const lt = document.createElement("label");
  lt.textContent = l("library", "Preview value");
  const At = document.createElement("input");
  At.type = "text", At.name = "bulkEditValue", At.placeholder = "magazine, de, photography...", At.autocomplete = "off", lt.appendChild(At);
  const p = document.createElement("button");
  p.type = "submit", p.className = "button secondary", p.textContent = l("library", "Preview & apply metadata edit");
  const m = document.createElement("p");
  m.className = "library-muted", m.textContent = l("library", "Preview first, then apply from the review page."), je.append(mt, lt, p, m);
  const _ = document.createElement("form");
  _.method = "post", _.action = y, _.className = "library-batch-cover-refresh-form";
  const A = wr(e);
  A && _.appendChild(A);
  for (const [N, O] of Object.entries(e.activeFilters || {})) {
    if (G(O).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(O), _.appendChild($);
  }
  const T = document.createElement("button");
  T.type = "submit", T.className = "button secondary", T.textContent = l("library", "Request fresh cover previews");
  const x = document.createElement("p");
  x.className = "library-muted", x.textContent = l("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(T, x), we.append(Be, _e, $e, Ie, je, _), P.appendChild(we);
  const L = document.createElement("nav");
  L.className = "library-pagination", L.setAttribute("aria-label", l("library", "Catalogue pagination"));
  const I = document.createElement("span");
  I.className = "library-pagination-range", I.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, L.appendChild(I), P.appendChild(L);
  const M = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], S = document.createElement("details");
  S.className = M.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const q = document.createElement("summary");
  q.className = "library-periodical-groups-summary", q.textContent = l("library", "Show top series and periodicals"), S.appendChild(q);
  const H = document.createElement("h3");
  H.textContent = M.length > 0 ? l("library", "Top series and periodicals") : l("library", "No series or periodicals found yet");
  const W = document.createElement("p");
  if (W.className = "library-muted", W.textContent = M.length > 0 ? l("library", "Jump into recurring publications with one click.") : l("library", "Add publication or series names in item details to build this shortcut panel."), S.append(H, W), M.length > 0) {
    const N = document.createElement("ul");
    for (const O of M) {
      const $ = document.createElement("li"), Z = document.createElement("a");
      Z.href = fm(O.publication, O), Z.textContent = G(O.publication);
      const ie = document.createElement("span");
      ie.className = "library-muted", ie.textContent = `${O.itemCount} items`, $.append(Z, ie), N.appendChild($);
    }
    S.appendChild(N);
  }
  P.appendChild(S);
  const X = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (X.length > 0) {
    const N = document.createElement("details");
    N.className = "library-year-groups";
    const O = document.createElement("summary");
    O.className = "library-periodical-groups-summary", O.textContent = l("library", "Show publication years");
    const $ = document.createElement("h3");
    $.textContent = l("library", "Top publication years");
    const Z = document.createElement("p");
    Z.className = "library-muted", Z.textContent = l("library", "Jump into dated books, magazines, journals and comics by year.");
    const ie = document.createElement("ul");
    for (const he of X) {
      const ae = document.createElement("li"), Re = document.createElement("a");
      Re.href = pm(he, e), Re.textContent = G(he), ae.appendChild(Re), ie.appendChild(ae);
    }
    N.append(O, $, Z, ie), P.appendChild(N);
  }
  const ee = Array.isArray(e.creators) ? e.creators : [];
  if (ee.length > 0) {
    const N = document.createElement("details");
    N.className = "library-creator-groups";
    const O = document.createElement("summary");
    O.className = "library-periodical-groups-summary", O.textContent = l("library", "Show creators");
    const $ = document.createElement("h3");
    $.textContent = l("library", "Top creators");
    const Z = document.createElement("p");
    Z.className = "library-muted", Z.textContent = l("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const ie = document.createElement("ul");
    for (const he of ee) {
      const ae = document.createElement("li"), Re = document.createElement("a");
      Re.href = hm(he, e), Re.textContent = G(he), ae.appendChild(Re), ie.appendChild(ae);
    }
    N.append(O, $, Z, ie), P.appendChild(N);
  }
  if (r.length === 0) {
    const N = document.createElement("div"), O = Number(e.rootCount || 0), $ = Number(e.enabledRootCount || 0), Z = mm(e);
    N.className = "library-empty-content", (O === 0 || $ === 0) && N.classList.add("library-first-run-guidance"), Z && O > 0 && $ > 0 && N.classList.add("library-filter-empty-state"), N.setAttribute("role", "status");
    const ie = document.createElement("h3"), he = document.createElement("p");
    he.className = "library-muted";
    const ae = document.createElement("p");
    ae.className = "library-empty-actions", O === 0 ? (ie.textContent = l("library", "Start with one Library root"), he.textContent = l("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), zr(ae, i, "button primary", l("library", "Add a Library root")), ym(ae, l("library", "Run a scan after saving a root"))) : $ === 0 ? (ie.textContent = l("library", "No enabled Library roots"), he.textContent = l("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), zr(ae, i, "button primary", l("library", "Open Library settings"))) : Z ? (ie.textContent = l("library", "No matches for the current filters"), he.textContent = l("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), zr(ae, bm(), "button secondary", l("library", "Clear search")), zr(ae, "?", "button primary", l("library", "Clear all filters"))) : (ie.textContent = l("library", "No catalogue items yet"), he.textContent = l("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), zr(ae, i, "button primary", l("library", "Run a scan from settings"))), N.append(ie, he, ae), P.appendChild(N);
  } else {
    const N = document.createElement("div");
    N.className = "library-cover-gallery";
    for (const O of r) {
      const $ = document.createElement("article");
      $.className = "library-cover-card";
      const Z = document.createElement("a");
      Z.className = "library-cover-link", Z.href = G(O.openUrl || "#"), Z.setAttribute("aria-label", `Read ${G(O.title || "publication")}`);
      const ie = document.createElement("img");
      ie.className = "library-cover-image", ie.src = G(O.coverUrl || ""), ie.alt = `Cover for ${G(O.title || "publication")}`, ie.loading = "lazy", Z.appendChild(ie);
      const he = wr(e), ae = document.createElement("form");
      ae.method = "post", ae.action = G(O.starUrl || ""), ae.className = "library-cover-star-form", he && ae.appendChild(he);
      const Re = document.createElement("input");
      Re.type = "hidden", Re.name = "returnTo", Re.value = "catalogue";
      const Ae = document.createElement("input");
      Ae.type = "hidden", Ae.name = "starred", Ae.value = O.starred ? "0" : "1";
      const Oe = document.createElement("button");
      Oe.type = "submit", Oe.className = O.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Oe.setAttribute("aria-pressed", O.starred ? "true" : "false"), Oe.setAttribute("aria-label", O.starred ? l("library", "Unstar this publication") : l("library", "Star this publication")), Oe.title = O.starred ? l("library", "Unstar this publication") : l("library", "Star this publication"), Oe.textContent = O.starred ? "★" : "☆", ae.append(Re, Ae, Oe);
      const at = document.createElement("div");
      at.className = "library-cover-summary";
      const Mt = document.createElement("h3");
      if (Mt.textContent = G(O.title || "Untitled publication"), at.appendChild(Mt), O.creators) {
        const h = document.createElement("p");
        h.className = "library-creator", h.textContent = G(O.creators), at.appendChild(h);
      }
      const Bt = document.createElement("dl");
      Bt.className = "library-cover-detail-list";
      const lr = [
        ["Type", G(O.publicationType || "other")],
        ["Format", O.extension ? xl(O.extension) : ""],
        ["Shelf", O.shelf ? G(O.shelf) : ""]
      ].filter(([, h]) => h !== "");
      for (const [h, Ee] of lr) {
        const Ye = document.createElement("div");
        Ye.className = "library-cover-detail-chip";
        const ct = document.createElement("dt");
        ct.textContent = h;
        const gt = document.createElement("dd");
        gt.textContent = Ee, Ye.append(ct, gt), Bt.appendChild(Ye);
      }
      at.appendChild(Bt);
      const wt = document.createElement("p"), yt = document.createElement("a");
      yt.href = G(O.openUrl || "#"), yt.textContent = l("library", "Read");
      const zt = document.createElement("a");
      zt.href = G(O.filesUrl || "#"), zt.textContent = l("library", "Show in Files");
      const F = document.createElement("a");
      F.href = G(O.downloadUrl || "#"), F.textContent = l("library", "Download source");
      const k = document.createElement("a");
      k.href = G(O.detailsUrl || "#"), k.textContent = l("library", "Details"), wt.append(yt, document.createTextNode(" · "), zt, document.createTextNode(" · "), F, document.createTextNode(" · "), k), at.appendChild(wt), $.append(Z, ae, at), N.appendChild($);
    }
    P.appendChild(N);
  }
  return E.appendChild(P), E;
}
if (An)
  try {
    cu(cm, { state: us }).mount(An);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), An.replaceChildren(Em(us));
  }
//# sourceMappingURL=library-main.mjs.map
