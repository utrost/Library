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
}, jl = Object.prototype.hasOwnProperty, _e = (e, t) => jl.call(e, t), te = Array.isArray, or = (e) => ln(e) === "[object Map]", vr = (e) => ln(e) === "[object Set]", mo = (e) => ln(e) === "[object Date]", se = (e) => typeof e == "function", Le = (e) => typeof e == "string", jt = (e) => typeof e == "symbol", Te = (e) => e !== null && typeof e == "object", ps = (e) => (Te(e) || se(e)) && se(e.then) && se(e.catch), hs = Object.prototype.toString, ln = (e) => hs.call(e), Vl = (e) => ln(e).slice(8, -1), ms = (e) => ln(e) === "[object Object]", Hi = (e) => Le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Gr = /* @__PURE__ */ Di(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Bl = /-\w/g, Rt = Fn(
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
  if (te(e)) {
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
  else if (te(e))
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
  if (r = te(e), n = te(t), r || n)
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
      const l = e.hasOwnProperty(s), f = t.hasOwnProperty(s);
      if (l && !f || !l && f || !sr(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((r) => sr(r, t));
}
const _s = (e) => !!(e && e.__v_isRef === !0), p = (e) => Le(e) ? e : e == null ? "" : te(e) || Te(e) && (e.toString === hs || !se(e.toString)) ? _s(e) ? p(e.value) : JSON.stringify(e, vs, 2) : String(e), vs = (e, t) => _s(t) ? vs(e, t.value) : or(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[ni(n, o) + " =>"] = i, r),
    {}
  )
} : vr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => ni(r))
} : jt(t) ? ni(t) : Te(t) && !te(t) && !ms(t) ? String(t) : t, ni = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    jt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
let Ye;
class Ql {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ye && (Ye.active ? (this.parent = Ye, this.index = (Ye.scopes || (Ye.scopes = [])).push(
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
      const r = Ye;
      try {
        return Ye = this, t();
      } finally {
        Ye = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ye, Ye = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ye === this)
        Ye = this.prevScope;
      else {
        let t = Ye;
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
  return Ye;
}
let xe;
const ii = /* @__PURE__ */ new WeakSet();
class Es {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ye && (Ye.active ? Ye.effects.push(this) : this.flags &= -2);
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
    this.flags |= 2, go(this), Cs(this);
    const t = xe, r = Ot;
    xe = this, Ot = !0;
    try {
      return this.fn();
    } finally {
      xs(this), xe = t, Ot = r, this.flags &= -3;
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
    xi(this) && this.run();
  }
  get dirty() {
    return xi(this);
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
function Cs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function xs(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Bi(n), ta(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function xi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (As(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function As(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === en) || (e.globalVersion = en, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !xi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = xe, n = Ot;
  xe = e, Ot = !0;
  try {
    Cs(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ht(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    xe = r, Ot = n, xs(e), e.flags &= -3;
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
let Ot = !0;
const ws = [];
function Yt() {
  ws.push(Ot), Ot = !1;
}
function Xt() {
  const e = ws.pop();
  Ot = e === void 0 ? !0 : e;
}
function go(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = xe;
    xe = void 0;
    try {
      t();
    } finally {
      xe = r;
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
    if (!xe || !Ot || xe === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== xe)
      r = this.activeLink = new ra(xe, this), xe.deps ? (r.prevDep = xe.depsTail, xe.depsTail.nextDep = r, xe.depsTail = r) : xe.deps = xe.depsTail = r, Rs(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = xe.depsTail, r.nextDep = void 0, xe.depsTail.nextDep = r, xe.depsTail = r, xe.deps === r && (xe.deps = n);
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
  if (Ot && xe) {
    let n = Ai.get(e);
    n || Ai.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new zi()), i.map = n, i.key = r), i.track();
  }
}
function qt(e, t, r, n, i, o) {
  const s = Ai.get(e);
  if (!s) {
    en++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (ji(), t === "clear")
    s.forEach(l);
  else {
    const f = te(e), v = f && Hi(r);
    if (f && r === "length") {
      const b = Number(n);
      s.forEach((E, P) => {
        (P === "length" || P === tn || !jt(P) && P >= b) && l(E);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && l(s.get(r)), v && l(s.get(tn)), t) {
        case "add":
          f ? v && l(s.get("length")) : (l(s.get(yr)), or(e) && l(s.get(wi)));
          break;
        case "delete":
          f || (l(s.get(yr)), or(e) && l(s.get(wi)));
          break;
        case "set":
          or(e) && l(s.get(yr));
          break;
      }
  }
  Vi();
}
function xr(e) {
  const t = /* @__PURE__ */ ge(e);
  return t === e ? t : (Je(t, "iterate", tn), /* @__PURE__ */ St(e) ? t : t.map(Nt));
}
function jn(e) {
  return Je(e = /* @__PURE__ */ ge(e), "iterate", tn), e;
}
function Dt(e, t) {
  return /* @__PURE__ */ Jt(e) ? Ir(/* @__PURE__ */ gr(e) ? Nt(t) : t) : Nt(t);
}
const na = {
  __proto__: null,
  [Symbol.iterator]() {
    return oi(this, Symbol.iterator, (e) => Dt(this, e));
  },
  concat(...e) {
    return xr(this).concat(
      ...e.map((t) => te(t) ? xr(t) : t)
    );
  },
  entries() {
    return oi(this, "entries", (e) => (e[1] = Dt(this, e[1]), e));
  },
  every(e, t) {
    return Bt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Bt(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => Dt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Bt(
      this,
      "find",
      e,
      t,
      (r) => Dt(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Bt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Bt(
      this,
      "findLast",
      e,
      t,
      (r) => Dt(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Bt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Bt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return si(this, "includes", e);
  },
  indexOf(...e) {
    return si(this, "indexOf", e);
  },
  join(e) {
    return xr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return si(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Bt(this, "map", e, t, void 0, arguments);
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
    return Bt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Hr(this, "splice", e);
  },
  toReversed() {
    return xr(this).toReversed();
  },
  toSorted(e) {
    return xr(this).toSorted(e);
  },
  toSpliced(...e) {
    return xr(this).toSpliced(...e);
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
  return n !== e && !/* @__PURE__ */ St(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const ia = Array.prototype;
function Bt(e, t, r, n, i, o) {
  const s = jn(e), l = s !== e && !/* @__PURE__ */ St(e), f = s[t];
  if (f !== ia[t]) {
    const E = f.apply(e, o);
    return l ? Nt(E) : E;
  }
  let v = r;
  s !== e && (l ? v = function(E, P) {
    return r.call(this, Dt(e, E), P, e);
  } : r.length > 2 && (v = function(E, P) {
    return r.call(this, E, P, e);
  }));
  const b = f.call(s, v, n);
  return l && i ? i(b) : b;
}
function _o(e, t, r, n) {
  const i = jn(e), o = i !== e && !/* @__PURE__ */ St(e);
  let s = r, l = !1;
  i !== e && (o ? (l = n.length === 0, s = function(v, b, E) {
    return l && (l = !1, v = Dt(e, v)), r.call(this, v, Dt(e, b), E, e);
  }) : r.length > 3 && (s = function(v, b, E) {
    return r.call(this, v, b, E, e);
  }));
  const f = i[t](s, ...n);
  return l ? Dt(e, f) : f;
}
function si(e, t, r) {
  const n = /* @__PURE__ */ ge(e);
  Je(n, "iterate", tn);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Ki(r[0]) ? (r[0] = /* @__PURE__ */ ge(r[0]), n[t](...r)) : i;
}
function Hr(e, t, r = []) {
  Yt(), ji();
  const n = (/* @__PURE__ */ ge(e))[t].apply(e, r);
  return Vi(), Xt(), n;
}
const oa = /* @__PURE__ */ Di("__proto__,__v_isRef,__isVue"), Os = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(jt)
);
function sa(e) {
  jt(e) || (e = String(e));
  const t = /* @__PURE__ */ ge(this);
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
      return n === (i ? o ? ba : Ms : o ? Ls : ks).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = te(t);
    if (!i) {
      let f;
      if (s && (f = na[r]))
        return f;
      if (r === "hasOwnProperty")
        return sa;
    }
    const l = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ze(t) ? t : n
    );
    if ((jt(r) ? Os.has(r) : oa(r)) || (i || Je(t, "get", r), o))
      return l;
    if (/* @__PURE__ */ Ze(l)) {
      const f = s && Hi(r) ? l : l.value;
      return i && Te(f) ? /* @__PURE__ */ Oi(f) : f;
    }
    return Te(l) ? i ? /* @__PURE__ */ Oi(l) : /* @__PURE__ */ mr(l) : l;
  }
}
class Ps extends Ns {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = te(t) && Hi(r);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ Jt(o);
      if (!/* @__PURE__ */ St(n) && !/* @__PURE__ */ Jt(n) && (o = /* @__PURE__ */ ge(o), n = /* @__PURE__ */ ge(n)), !s && /* @__PURE__ */ Ze(o) && !/* @__PURE__ */ Ze(n))
        return v || (o.value = n), !0;
    }
    const l = s ? Number(r) < t.length : _e(t, r), f = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ Ze(t) ? t : i
    );
    return t === /* @__PURE__ */ ge(i) && f && (l ? Ht(n, o) && qt(t, "set", r, n) : qt(t, "add", r, n)), f;
  }
  deleteProperty(t, r) {
    const n = _e(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && qt(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!jt(r) || !Os.has(r)) && Je(t, "has", r), n;
  }
  ownKeys(t) {
    return Je(
      t,
      "iterate",
      te(t) ? "length" : yr
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
    const i = this.__v_raw, o = /* @__PURE__ */ ge(i), s = or(o), l = e === "entries" || e === Symbol.iterator && s, f = e === "keys" && s, v = i[e](...n), b = r ? Ri : t ? Ir : Nt;
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
            value: l ? [b(E[0]), b(E[1])] : b(E),
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
      const o = this.__v_raw, s = /* @__PURE__ */ ge(o), l = /* @__PURE__ */ ge(i);
      e || (Ht(i, l) && Je(s, "get", i), Je(s, "get", l));
      const { has: f } = bn(s), v = t ? Ri : e ? Ir : Nt;
      if (f.call(s, i))
        return v(o.get(i));
      if (f.call(s, l))
        return v(o.get(l));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Je(/* @__PURE__ */ ge(i), "iterate", yr), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ ge(o), l = /* @__PURE__ */ ge(i);
      return e || (Ht(i, l) && Je(s, "has", i), Je(s, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const s = this, l = s.__v_raw, f = /* @__PURE__ */ ge(l), v = t ? Ri : e ? Ir : Nt;
      return !e && Je(f, "iterate", yr), l.forEach((b, E) => i.call(o, v(b), v(E), s));
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
        const o = /* @__PURE__ */ ge(this), s = bn(o), l = /* @__PURE__ */ ge(i), f = !t && !/* @__PURE__ */ St(i) && !/* @__PURE__ */ Jt(i) ? l : i;
        return s.has.call(o, f) || Ht(i, f) && s.has.call(o, i) || Ht(l, f) && s.has.call(o, l) || (o.add(f), qt(o, "add", f, f)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ St(o) && !/* @__PURE__ */ Jt(o) && (o = /* @__PURE__ */ ge(o));
        const s = /* @__PURE__ */ ge(this), { has: l, get: f } = bn(s);
        let v = l.call(s, i);
        v || (i = /* @__PURE__ */ ge(i), v = l.call(s, i));
        const b = f.call(s, i);
        return s.set(i, o), v ? Ht(o, b) && qt(s, "set", i, o) : qt(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ ge(this), { has: s, get: l } = bn(o);
        let f = s.call(o, i);
        f || (i = /* @__PURE__ */ ge(i), f = s.call(o, i)), l && l.call(o, i);
        const v = o.delete(i);
        return f && qt(o, "delete", i, void 0), v;
      },
      clear() {
        const i = /* @__PURE__ */ ge(this), o = i.size !== 0, s = i.clear();
        return o && qt(
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
    _e(r, i) && i in n ? r : n,
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
const ks = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakMap();
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
  return /* @__PURE__ */ Jt(e) ? e : qi(
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
    Ls
  );
}
// @__NO_SIDE_EFFECTS__
function Oi(e) {
  return qi(
    e,
    !0,
    ca,
    ma,
    Ms
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
  const l = new Proxy(
    e,
    s === 2 ? n : r
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function gr(e) {
  return /* @__PURE__ */ Jt(e) ? /* @__PURE__ */ gr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function St(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ki(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ge(t) : e;
}
function _a(e) {
  return !_e(e, "__v_skip") && Object.isExtensible(e) && ys(e, "__v_skip", !0), e;
}
const Nt = (e) => Te(e) ? /* @__PURE__ */ mr(e) : e, Ir = (e) => Te(e) ? /* @__PURE__ */ Oi(e) : e;
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
    this.dep = new zi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ ge(t), this._value = r ? t : Nt(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ St(t) || /* @__PURE__ */ Jt(t);
    t = n ? t : /* @__PURE__ */ ge(t), Ht(t, r) && (this._rawValue = t, this._value = n ? t : Nt(t), this.dep.trigger());
  }
}
function y(e) {
  return /* @__PURE__ */ Ze(e) ? e.value : e;
}
const Sa = {
  get: (e, t, r) => t === "__v_raw" ? e : y(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ Ze(i) && !/* @__PURE__ */ Ze(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Is(e) {
  return /* @__PURE__ */ gr(e) ? e : new Proxy(e, Sa);
}
class Ca {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new zi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = en - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    xe !== this)
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
function xa(e, t, r = !1) {
  let n, i;
  return se(e) ? n = e : (n = e.get, i = e.set), new Ca(n, i, r);
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
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: l, call: f } = r, v = (V) => i ? V : /* @__PURE__ */ St(V) || i === !1 || i === 0 ? Kt(V, 1) : Kt(V);
  let b, E, P, j, ne = !1, q = !1;
  if (/* @__PURE__ */ Ze(e) ? (E = () => e.value, ne = /* @__PURE__ */ St(e)) : /* @__PURE__ */ gr(e) ? (E = () => v(e), ne = !0) : te(e) ? (q = !0, ne = e.some((V) => /* @__PURE__ */ gr(V) || /* @__PURE__ */ St(V)), E = () => e.map((V) => {
    if (/* @__PURE__ */ Ze(V))
      return V.value;
    if (/* @__PURE__ */ gr(V))
      return v(V);
    if (se(V))
      return f ? f(V, 2) : V();
  })) : se(e) ? t ? E = f ? () => f(e, 2) : e : E = () => {
    if (P) {
      Yt();
      try {
        P();
      } finally {
        Xt();
      }
    }
    const V = dr;
    dr = b;
    try {
      return f ? f(e, 3, [j]) : e(j);
    } finally {
      dr = V;
    }
  } : E = $t, t && i) {
    const V = E, ce = i === !0 ? 1 / 0 : i;
    E = () => Kt(V(), ce);
  }
  const oe = ea(), ie = () => {
    b.stop(), oe && oe.active && Fi(oe.effects, b);
  };
  if (o && t) {
    const V = t;
    t = (...ce) => {
      const Ne = V(...ce);
      return ie(), Ne;
    };
  }
  let z = q ? new Array(e.length).fill(gn) : gn;
  const I = (V) => {
    if (!(!(b.flags & 1) || !b.dirty && !V))
      if (t) {
        const ce = b.run();
        if (V || i || ne || (q ? ce.some((Ne, we) => Ht(Ne, z[we])) : Ht(ce, z))) {
          P && P();
          const Ne = dr;
          dr = b;
          try {
            const we = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              z === gn ? void 0 : q && z[0] === gn ? [] : z,
              j
            ];
            z = ce, f ? f(t, 3, we) : (
              // @ts-expect-error
              t(...we)
            );
          } finally {
            dr = Ne;
          }
        }
      } else
        b.run();
  };
  return l && l(I), b = new Es(E), b.scheduler = s ? () => s(I, !1) : I, j = (V) => Aa(V, !1, b), P = b.onStop = () => {
    const V = wn.get(b);
    if (V) {
      if (f)
        f(V, 4);
      else
        for (const ce of V) ce();
      wn.delete(b);
    }
  }, t ? n ? I(!0) : z = b.run() : s ? s(I.bind(null, !0), !0) : b.run(), ie.pause = b.pause.bind(b), ie.resume = b.resume.bind(b), ie.stop = ie, ie;
}
function Kt(e, t = 1 / 0, r) {
  if (t <= 0 || !Te(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ Ze(e))
    Kt(e.value, t, r);
  else if (te(e))
    for (let n = 0; n < e.length; n++)
      Kt(e[n], t, r);
  else if (vr(e) || or(e))
    e.forEach((n) => {
      Kt(n, t, r);
    });
  else if (ms(e)) {
    for (const n in e)
      Kt(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Kt(e[n], t, r);
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
function Pt(e, t, r, n) {
  if (se(e)) {
    const i = an(e, t, r, n);
    return i && ps(i) && i.catch((o) => {
      Vn(o, t, r);
    }), i;
  }
  if (te(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Pt(e[o], t, r, n));
    return i;
  }
}
function Vn(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Se;
  if (t) {
    let l = t.parent;
    const f = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; l; ) {
      const b = l.ec;
      if (b) {
        for (let E = 0; E < b.length; E++)
          if (b[E](e, f, v) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      Yt(), an(o, null, 10, [
        e,
        f,
        v
      ]), Xt();
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
  if (!te(e))
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
let Tt = null, js = null;
function On(e) {
  const t = Tt;
  return Tt = e, js = e && e.type.__scopeId || null, t;
}
function Pa(e, t = Tt, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Po(-1);
    const o = On(t), s = _r.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let f = _r.length; f > s; f--) pl();
      On(o), n._d && Po(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qe(e, t) {
  if (Tt === null)
    return e;
  const r = Kn(Tt), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, l, f = Se] = t[i];
    o && (se(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Kt(s), n.push({
      dir: o,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: f
    }));
  }
  return e;
}
function cr(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    o && (l.oldValue = o[s].value);
    let f = l.dir[n];
    f && (Yt(), Pt(f, r, 8, [
      e.el,
      l,
      e,
      t
    ]), Xt());
  }
}
function ka(e, t) {
  if (ot) {
    let r = ot.provides;
    const n = ot.parent && ot.parent.provides;
    n === r && (r = ot.provides = Object.create(n)), r[e] = t;
  }
}
function Cn(e, t, r = !1) {
  const n = Rc();
  if (n || Lr) {
    let i = Lr ? Lr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && se(t) ? t.call(n && n.proxy) : t;
  }
}
const La = /* @__PURE__ */ Symbol.for("v-scx"), Ma = () => Cn(La);
function li(e, t, r) {
  return Vs(e, t, r);
}
function Vs(e, t, r = Se) {
  const { immediate: n, deep: i, flush: o, once: s } = r, l = Qe({}, r), f = t && n || !t && o !== "post";
  let v;
  if (sn) {
    if (o === "sync") {
      const j = Ma();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!f) {
      const j = () => {
      };
      return j.stop = $t, j.resume = $t, j.pause = $t, j;
    }
  }
  const b = ot;
  l.call = (j, ne, q) => Pt(j, b, ne, q);
  let E = !1;
  o === "post" ? l.scheduler = (j) => {
    dt(j, b && b.suspense);
  } : o !== "sync" && (E = !0, l.scheduler = (j, ne) => {
    ne ? j() : Gi(j);
  }), l.augmentJob = (j) => {
    t && (j.flags |= 4), E && (j.flags |= 2, b && (j.id = b.uid, j.i = b));
  };
  const P = wa(e, t, l);
  return sn && (v ? v.push(P) : f && P()), P;
}
function Ia(e, t, r) {
  const n = this.proxy, i = Le(e) ? e.includes(".") ? Bs(n, e) : () => n[e] : e.bind(n, n);
  let o;
  se(t) ? o = t : (o = t.handler, r = t);
  const s = cn(this), l = Vs(i, o.bind(n), r);
  return s(), l;
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
      if (r.type !== Zt) {
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
    if (t & 32 && se(r.default))
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
  if (te(e)) {
    e.forEach(
      (q, oe) => Jr(
        q,
        t && (te(t) ? t[oe] : t),
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
  const o = n.shapeFlag & 4 ? Kn(n.component) : n.el, s = i ? null : o, { i: l, r: f } = e, v = t && t.r, b = l.refs === Se ? l.refs = {} : l.refs, E = l.setupState, P = /* @__PURE__ */ ge(E), j = E === Se ? ds : (q) => Eo(b, q) ? !1 : _e(P, q), ne = (q, oe) => !(oe && Eo(b, oe));
  if (v != null && v !== f) {
    if (To(t), Le(v))
      b[v] = null, j(v) && (E[v] = null);
    else if (/* @__PURE__ */ Ze(v)) {
      const q = t;
      ne(v, q.k) && (v.value = null), q.k && (b[q.k] = null);
    }
  }
  if (se(f))
    an(f, l, 12, [s, b]);
  else {
    const q = Le(f), oe = /* @__PURE__ */ Ze(f);
    if (q || oe) {
      const ie = () => {
        if (e.f) {
          const z = q ? j(f) ? E[f] : b[f] : ne() || !e.k ? f.value : b[e.k];
          if (i)
            te(z) && Fi(z, o);
          else if (te(z))
            z.includes(o) || z.push(o);
          else if (q)
            b[f] = [o], j(f) && (E[f] = b[f]);
          else {
            const I = [o];
            ne(f, e.k) && (f.value = I), e.k && (b[e.k] = I);
          }
        } else q ? (b[f] = s, j(f) && (E[f] = s)) : oe && (ne(f, e.k) && (f.value = s), e.k && (b[e.k] = s));
      };
      if (s) {
        const z = () => {
          ie(), Nn.delete(e);
        };
        z.id = -1, Nn.set(e, z), dt(z, r);
      } else
        To(e), ie();
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
      Yt();
      const l = cn(r), f = Pt(t, r, e, s);
      return l(), Xt(), f;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Qt = (e) => (t, r = ot) => {
  (!sn || e === "sp") && zn(e, (...n) => t(...n), r);
}, ja = Qt("bm"), Ks = Qt("m"), Va = Qt(
  "bu"
), Ba = Qt("u"), Gs = Qt(
  "bum"
), Ys = Qt("um"), za = Qt(
  "sp"
), Wa = Qt("rtg"), qa = Qt("rtc");
function Ka(e, t = ot) {
  zn("ec", e, t);
}
const Ga = /* @__PURE__ */ Symbol.for("v-ndc");
function Ee(e, t, r, n) {
  let i;
  const o = r, s = te(e);
  if (s || Le(e)) {
    const l = s && /* @__PURE__ */ gr(e);
    let f = !1, v = !1;
    l && (f = !/* @__PURE__ */ St(e), v = /* @__PURE__ */ Jt(e), e = jn(e)), i = new Array(e.length);
    for (let b = 0, E = e.length; b < E; b++)
      i[b] = t(
        f ? v ? Ir(Nt(e[b])) : Nt(e[b]) : e[b],
        b,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o);
  } else if (Te(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, f) => t(l, f, void 0, o)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let f = 0, v = l.length; f < v; f++) {
        const b = l[f];
        i[f] = t(e[b], b, f, o);
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
), ci = (e, t) => e !== Se && !e.__isScriptSetup && _e(e, t), Ya = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: o, accessCache: s, type: l, appContext: f } = e;
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
        if (i !== Se && _e(i, t))
          return s[t] = 2, i[t];
        if (_e(o, t))
          return s[t] = 3, o[t];
        if (r !== Se && _e(r, t))
          return s[t] = 4, r[t];
        Pi && (s[t] = 0);
      }
    }
    const v = Qr[t];
    let b, E;
    if (v)
      return t === "$attrs" && Je(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (b = l.__cssModules) && (b = b[t])
    )
      return b;
    if (r !== Se && _e(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      E = f.config.globalProperties, _e(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return ci(i, t) ? (i[t] = r, !0) : n !== Se && _e(n, t) ? (n[t] = r, !0) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, l) {
    let f;
    return !!(r[l] || e !== Se && l[0] !== "$" && _e(e, l) || ci(t, l) || _e(o, l) || _e(n, l) || _e(Qr, l) || _e(i.config.globalProperties, l) || (f = s.__cssModules) && f[l]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : _e(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function So(e) {
  return te(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Pi = !0;
function Xa(e) {
  const t = Js(e), r = e.proxy, n = e.ctx;
  Pi = !1, t.beforeCreate && Co(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: s,
    watch: l,
    provide: f,
    inject: v,
    // lifecycle
    created: b,
    beforeMount: E,
    mounted: P,
    beforeUpdate: j,
    updated: ne,
    activated: q,
    deactivated: oe,
    beforeDestroy: ie,
    beforeUnmount: z,
    destroyed: I,
    unmounted: V,
    render: ce,
    renderTracked: Ne,
    renderTriggered: we,
    errorCaptured: Be,
    serverPrefetch: ve,
    // public API
    expose: Ue,
    inheritAttrs: et,
    // assets
    components: st,
    directives: Ge,
    filters: gt
  } = t;
  if (v && Ja(v, n, null), s)
    for (const me in s) {
      const ae = s[me];
      se(ae) && (n[me] = ae.bind(r));
    }
  if (i) {
    const me = i.call(r, r);
    Te(me) && (e.data = /* @__PURE__ */ mr(me));
  }
  if (Pi = !0, o)
    for (const me in o) {
      const ae = o[me], De = se(ae) ? ae.bind(r, r) : se(ae.get) ? ae.get.bind(r, r) : $t, ze = !se(ae) && se(ae.set) ? ae.set.bind(r) : $t, Me = Z({
        get: De,
        set: ze
      });
      Object.defineProperty(n, me, {
        enumerable: !0,
        configurable: !0,
        get: () => Me.value,
        set: (je) => Me.value = je
      });
    }
  if (l)
    for (const me in l)
      Xs(l[me], n, r, me);
  if (f) {
    const me = se(f) ? f.call(r) : f;
    Reflect.ownKeys(me).forEach((ae) => {
      ka(ae, me[ae]);
    });
  }
  b && Co(b, e, "c");
  function Pe(me, ae) {
    te(ae) ? ae.forEach((De) => me(De.bind(r))) : ae && me(ae.bind(r));
  }
  if (Pe(ja, E), Pe(Ks, P), Pe(Va, j), Pe(Ba, ne), Pe(Fa, q), Pe(Ha, oe), Pe(Ka, Be), Pe(qa, Ne), Pe(Wa, we), Pe(Gs, z), Pe(Ys, V), Pe(za, ve), te(Ue))
    if (Ue.length) {
      const me = e.exposed || (e.exposed = {});
      Ue.forEach((ae) => {
        Object.defineProperty(me, ae, {
          get: () => r[ae],
          set: (De) => r[ae] = De,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === $t && (e.render = ce), et != null && (e.inheritAttrs = et), st && (e.components = st), Ge && (e.directives = Ge), ve && Ws(e);
}
function Ja(e, t, r = $t) {
  te(e) && (e = ki(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Te(i) ? "default" in i ? o = Cn(
      i.from || n,
      i.default,
      !0
    ) : o = Cn(i.from || n) : o = Cn(i), /* @__PURE__ */ Ze(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function Co(e, t, r) {
  Pt(
    te(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Xs(e, t, r, n) {
  let i = n.includes(".") ? Bs(r, n) : () => r[n];
  if (Le(e)) {
    const o = t[e];
    se(o) && li(i, o);
  } else if (se(e))
    li(i, e.bind(r));
  else if (Te(e))
    if (te(e))
      e.forEach((o) => Xs(o, t, r, n));
    else {
      const o = se(e.handler) ? e.handler.bind(r) : t[e.handler];
      se(o) && li(i, o, e);
    }
}
function Js(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = o.get(t);
  let f;
  return l ? f = l : !i.length && !r && !n ? f = t : (f = {}, i.length && i.forEach(
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
      const l = Za[s] || r && r[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Za = {
  data: xo,
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
  provide: xo,
  inject: Qa
};
function xo(e, t) {
  return t ? e ? function() {
    return Qe(
      se(e) ? e.call(this, this) : e,
      se(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qa(e, t) {
  return Wr(ki(e), ki(t));
}
function ki(e) {
  if (te(e)) {
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
  return e ? te(e) && te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Qe(
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
    se(n) || (n = Qe({}, n)), i != null && !Te(i) && (i = null);
    const o = Zs(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const v = o.app = {
      _uid: tc++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Mc,
      get config() {
        return o.config;
      },
      set config(b) {
      },
      use(b, ...E) {
        return s.has(b) || (b && se(b.install) ? (s.add(b), b.install(v, ...E)) : se(b) && (s.add(b), b(v, ...E))), v;
      },
      mixin(b) {
        return o.mixins.includes(b) || o.mixins.push(b), v;
      },
      component(b, E) {
        return E ? (o.components[b] = E, v) : o.components[b];
      },
      directive(b, E) {
        return E ? (o.directives[b] = E, v) : o.directives[b];
      },
      mount(b, E, P) {
        if (!f) {
          const j = v._ceVNode || Gt(n, i);
          return j.appContext = o, P === !0 ? P = "svg" : P === !1 && (P = void 0), e(j, b, P), f = !0, v._container = b, b.__vue_app__ = v, Kn(j.component);
        }
      },
      onUnmount(b) {
        l.push(b);
      },
      unmount() {
        f && (Pt(
          l,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(b, E) {
        return o.provides[b] = E, v;
      },
      runWithContext(b) {
        const E = Lr;
        Lr = v;
        try {
          return b();
        } finally {
          Lr = E;
        }
      }
    };
    return v;
  };
}
let Lr = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Rt(t)}Modifiers`] || e[`${Er(t)}Modifiers`];
function ic(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Se;
  let i = r;
  const o = t.startsWith("update:"), s = o && nc(n, t.slice(7));
  s && (s.trim && (i = r.map((b) => Le(b) ? b.trim() : b)), s.number && (i = i.map(Hn)));
  let l, f = n[l = ri(t)] || // also try camelCase event handler (#2249)
  n[l = ri(Rt(t))];
  !f && o && (f = n[l = ri(Er(t))]), f && Pt(
    f,
    e,
    6,
    i
  );
  const v = n[l + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Pt(
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
  let s = {}, l = !1;
  if (!se(e)) {
    const f = (v) => {
      const b = Qs(v, t, !0);
      b && (l = !0, Qe(s, b));
    };
    !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !o && !l ? (Te(e) && n.set(e, null), null) : (te(o) ? o.forEach((f) => s[f] = null) : Qe(s, o), Te(e) && n.set(e, s), s);
}
function Wn(e, t) {
  return !e || !Un(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, Er(t)) || _e(e, t));
}
function wo(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: s,
    attrs: l,
    emit: f,
    render: v,
    renderCache: b,
    props: E,
    data: P,
    setupState: j,
    ctx: ne,
    inheritAttrs: q
  } = e, oe = On(e);
  let ie, z;
  try {
    if (r.shapeFlag & 4) {
      const V = i || n, ce = V;
      ie = Ft(
        v.call(
          ce,
          V,
          b,
          E,
          j,
          P,
          ne
        )
      ), z = l;
    } else {
      const V = t;
      ie = Ft(
        V.length > 1 ? V(
          E,
          { attrs: l, slots: s, emit: f }
        ) : V(
          E,
          null
        )
      ), z = t.props ? l : sc(l);
    }
  } catch (V) {
    _r.length = 0, Vn(V, e, 1), ie = Gt(Zt);
  }
  let I = ie;
  if (z && q !== !1) {
    const V = Object.keys(z), { shapeFlag: ce } = I;
    V.length && ce & 7 && (o && V.some(Dn) && (z = lc(
      z,
      o
    )), I = Ur(I, z, !1, !0));
  }
  if (r.dirs && (I = Ur(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = Bn(I.type) && zs(I) || I;
    Yi(V, r.transition);
  }
  return ie = I, On(oe), ie;
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
  const { props: n, children: i, component: o } = e, { props: s, children: l, patchFlag: f } = t, v = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? Ro(n, s, v) : !!s;
    if (f & 8) {
      const b = t.dynamicProps;
      for (let E = 0; E < b.length; E++) {
        const P = b[E];
        if (el(s, n, P) && !Wn(v, P))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === s ? !1 : n ? s ? Ro(n, s, v) : !0 : !!s;
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
  } = e, l = /* @__PURE__ */ ge(i), [f] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const b = e.vnode.dynamicProps;
      for (let E = 0; E < b.length; E++) {
        let P = b[E];
        if (Wn(e.emitsOptions, P))
          continue;
        const j = t[P];
        if (f)
          if (_e(o, P))
            j !== o[P] && (o[P] = j, v = !0);
          else {
            const ne = Rt(P);
            i[ne] = Li(
              f,
              l,
              ne,
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
    let b;
    for (const E in l)
      (!t || // for camelCase
      !_e(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((b = Er(E)) === E || !_e(t, b))) && (f ? r && // for camelCase
      (r[E] !== void 0 || // for kebab-case
      r[b] !== void 0) && (i[E] = Li(
        f,
        l,
        E,
        void 0,
        e,
        !0
      )) : delete i[E]);
    if (o !== l)
      for (const E in o)
        (!t || !_e(t, E)) && (delete o[E], v = !0);
  }
  v && qt(e.attrs, "set", "");
}
function il(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let f in t) {
      if (Gr(f))
        continue;
      const v = t[f];
      let b;
      i && _e(i, b = Rt(f)) ? !o || !o.includes(b) ? r[b] = v : (l || (l = {}))[b] = v : Wn(e.emitsOptions, f) || (!(f in n) || v !== n[f]) && (n[f] = v, s = !0);
    }
  if (o) {
    const f = /* @__PURE__ */ ge(r), v = l || Se;
    for (let b = 0; b < o.length; b++) {
      const E = o[b];
      r[E] = Li(
        i,
        f,
        E,
        v[E],
        e,
        !_e(v, E)
      );
    }
  }
  return s;
}
function Li(e, t, r, n, i, o) {
  const s = e[r];
  if (s != null) {
    const l = _e(s, "default");
    if (l && n === void 0) {
      const f = s.default;
      if (s.type !== Function && !s.skipFactory && se(f)) {
        const { propsDefaults: v } = i;
        if (r in v)
          n = v[r];
        else {
          const b = cn(i);
          n = v[r] = f.call(
            null,
            t
          ), b();
        }
      } else
        n = f;
      i.ce && i.ce._setProp(r, n);
    }
    s[
      0
      /* shouldCast */
    ] && (o && !l ? n = !1 : s[
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
  const o = e.props, s = {}, l = [];
  let f = !1;
  if (!se(e)) {
    const b = (E) => {
      f = !0;
      const [P, j] = ol(E, t, !0);
      Qe(s, P), j && l.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(b), e.extends && b(e.extends), e.mixins && e.mixins.forEach(b);
  }
  if (!o && !f)
    return Te(e) && n.set(e, Nr), Nr;
  if (te(o))
    for (let b = 0; b < o.length; b++) {
      const E = Rt(o[b]);
      Oo(E) && (s[E] = Se);
    }
  else if (o)
    for (const b in o) {
      const E = Rt(b);
      if (Oo(E)) {
        const P = o[b], j = s[E] = te(P) || se(P) ? { type: P } : Qe({}, P), ne = j.type;
        let q = !1, oe = !0;
        if (te(ne))
          for (let ie = 0; ie < ne.length; ++ie) {
            const z = ne[ie], I = se(z) && z.name;
            if (I === "Boolean") {
              q = !0;
              break;
            } else I === "String" && (oe = !1);
          }
        else
          q = se(ne) && ne.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = q, j[
          1
          /* shouldCastTrue */
        ] = oe, (q || _e(j, "default")) && l.push(E);
      }
    }
  const v = [s, l];
  return Te(e) && n.set(e, v), v;
}
function Oo(e) {
  return e[0] !== "$" && !Gr(e);
}
const Ji = (e) => e === "_" || e === "_ctx" || e === "$stable", Zi = (e) => te(e) ? e.map(Ft) : [Ft(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = Pa((...i) => Zi(t(...i)), r);
  return n._c = !1, n;
}, sl = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Ji(i)) continue;
    const o = e[i];
    if (se(o))
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
    const l = t._;
    l ? r && l === 1 ? o = !1 : al(i, t, r) : (o = !t.$stable, sl(t, i)), s = t;
  } else t && (ll(e, t), s = { default: 1 });
  if (o)
    for (const l in i)
      !Ji(l) && s[l] == null && delete i[l];
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
    createText: l,
    createComment: f,
    setText: v,
    setElementText: b,
    parentNode: E,
    nextSibling: P,
    setScopeId: j = $t,
    insertStaticContent: ne
  } = e, q = (d, m, _, A = null, T = null, C = null, M = void 0, U = null, L = !!m.dynamicChildren) => {
    if (d === m)
      return;
    d && !$r(d, m) && (A = lt(d), je(d, T, C, !0), d = null), m.patchFlag === -2 && (L = !1, m.dynamicChildren = null);
    const { type: S, ref: W, shapeFlag: H } = m;
    switch (S) {
      case qn:
        oe(d, m, _, A);
        break;
      case Zt:
        ie(d, m, _, A);
        break;
      case fi:
        d == null && z(m, _, A, M);
        break;
      case le:
        st(
          d,
          m,
          _,
          A,
          T,
          C,
          M,
          U,
          L
        );
        break;
      default:
        H & 1 ? ce(
          d,
          m,
          _,
          A,
          T,
          C,
          M,
          U,
          L
        ) : H & 6 ? Ge(
          d,
          m,
          _,
          A,
          T,
          C,
          M,
          U,
          L
        ) : (H & 64 || H & 128) && S.process(
          d,
          m,
          _,
          A,
          T,
          C,
          M,
          U,
          L,
          at
        );
    }
    W != null && T ? Jr(W, d && d.ref, C, m || d, !m) : W == null && d && d.ref != null && Jr(d.ref, null, C, d, !0);
  }, oe = (d, m, _, A) => {
    if (d == null)
      n(
        m.el = l(m.children),
        _,
        A
      );
    else {
      const T = m.el = d.el;
      m.children !== d.children && v(T, m.children);
    }
  }, ie = (d, m, _, A) => {
    d == null ? n(
      m.el = f(m.children || ""),
      _,
      A
    ) : m.el = d.el;
  }, z = (d, m, _, A) => {
    [d.el, d.anchor] = ne(
      d.children,
      m,
      _,
      A,
      d.el,
      d.anchor
    );
  }, I = ({ el: d, anchor: m }, _, A) => {
    let T;
    for (; d && d !== m; )
      T = P(d), n(d, _, A), d = T;
    n(m, _, A);
  }, V = ({ el: d, anchor: m }) => {
    let _;
    for (; d && d !== m; )
      _ = P(d), i(d), d = _;
    i(m);
  }, ce = (d, m, _, A, T, C, M, U, L) => {
    if (m.type === "svg" ? M = "svg" : m.type === "math" && (M = "mathml"), d == null)
      Ne(
        m,
        _,
        A,
        T,
        C,
        M,
        U,
        L
      );
    else {
      const S = d.el && d.el._isVueCE ? d.el : null;
      try {
        S && S._beginPatch(), ve(
          d,
          m,
          T,
          C,
          M,
          U,
          L
        );
      } finally {
        S && S._endPatch();
      }
    }
  }, Ne = (d, m, _, A, T, C, M, U) => {
    let L, S;
    const { props: W, shapeFlag: H, transition: K, dirs: X } = d;
    if (L = d.el = s(
      d.type,
      C,
      W && W.is,
      W
    ), H & 8 ? b(L, d.children) : H & 16 && Be(
      d.children,
      L,
      null,
      A,
      T,
      ui(d, C),
      M,
      U
    ), X && cr(d, null, A, "created"), we(L, d, d.scopeId, M, A), W) {
      for (const O in W)
        O !== "value" && !Gr(O) && o(L, O, null, W[O], C, A);
      "value" in W && o(L, "value", null, W.value, C), (S = W.onVnodeBeforeMount) && It(S, A, d);
    }
    X && cr(d, null, A, "beforeMount");
    const J = gc(T, K);
    J && K.beforeEnter(L), n(L, m, _), ((S = W && W.onVnodeMounted) || J || X) && dt(() => {
      S && It(S, A, d), J && K.enter(L), X && cr(d, null, A, "mounted");
    }, T);
  }, we = (d, m, _, A, T) => {
    if (_ && j(d, _), A)
      for (let C = 0; C < A.length; C++)
        j(d, A[C]);
    if (T) {
      let C = T.subTree;
      if (m === C || dl(C.type) && (C.ssContent === m || C.ssFallback === m)) {
        const M = T.vnode;
        we(
          d,
          M,
          M.scopeId,
          M.slotScopeIds,
          T.parent
        );
      }
    }
  }, Be = (d, m, _, A, T, C, M, U, L = 0) => {
    for (let S = L; S < d.length; S++) {
      const W = d[S] = U ? Wt(d[S]) : Ft(d[S]);
      q(
        null,
        W,
        m,
        _,
        A,
        T,
        C,
        M,
        U
      );
    }
  }, ve = (d, m, _, A, T, C, M) => {
    const U = m.el = d.el;
    let { patchFlag: L, dynamicChildren: S, dirs: W } = m;
    L |= d.patchFlag & 16;
    const H = d.props || Se, K = m.props || Se;
    let X;
    if (_ && ur(_, !1), (X = K.onVnodeBeforeUpdate) && It(X, _, m, d), W && cr(m, d, _, "beforeUpdate"), _ && ur(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    S && (!d.dynamicChildren || d.dynamicChildren.length !== S.length) && (L = 0, M = !1, S = null), (H.innerHTML && K.innerHTML == null || H.textContent && K.textContent == null) && b(U, ""), S ? Ue(
      d.dynamicChildren,
      S,
      U,
      _,
      A,
      ui(m, T),
      C
    ) : M || ae(
      d,
      m,
      U,
      null,
      _,
      A,
      ui(m, T),
      C,
      !1
    ), L > 0) {
      if (L & 16)
        et(U, H, K, _, T);
      else if (L & 2 && H.class !== K.class && o(U, "class", null, K.class, T), L & 4 && o(U, "style", H.style, K.style, T), L & 8) {
        const J = m.dynamicProps;
        for (let O = 0; O < J.length; O++) {
          const N = J[O], $ = H[N], Q = K[N];
          (Q !== $ || N === "value") && o(U, N, $, Q, T, _);
        }
      }
      L & 1 && d.children !== m.children && b(U, m.children);
    } else !M && S == null && et(U, H, K, _, T);
    ((X = K.onVnodeUpdated) || W) && dt(() => {
      X && It(X, _, m, d), W && cr(m, d, _, "updated");
    }, A);
  }, Ue = (d, m, _, A, T, C, M) => {
    for (let U = 0; U < m.length; U++) {
      const L = d[U], S = m[U], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$r(L, S) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? E(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      q(
        L,
        S,
        W,
        null,
        A,
        T,
        C,
        M,
        !0
      );
    }
  }, et = (d, m, _, A, T) => {
    if (m !== _) {
      if (m !== Se)
        for (const C in m)
          !Gr(C) && !(C in _) && o(
            d,
            C,
            m[C],
            null,
            T,
            A
          );
      for (const C in _) {
        if (Gr(C)) continue;
        const M = _[C], U = m[C];
        M !== U && C !== "value" && o(d, C, U, M, T, A);
      }
      "value" in _ && o(d, "value", m.value, _.value, T);
    }
  }, st = (d, m, _, A, T, C, M, U, L) => {
    const S = m.el = d ? d.el : l(""), W = m.anchor = d ? d.anchor : l("");
    let { patchFlag: H, dynamicChildren: K, slotScopeIds: X } = m;
    X && (U = U ? U.concat(X) : X), d == null ? (n(S, _, A), n(W, _, A), Be(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      _,
      W,
      T,
      C,
      M,
      U,
      L
    )) : H > 0 && H & 64 && K && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === K.length ? (Ue(
      d.dynamicChildren,
      K,
      _,
      T,
      C,
      M,
      U
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || T && m === T.subTree) && cl(
      d,
      m,
      !0
      /* shallow */
    )) : ae(
      d,
      m,
      _,
      W,
      T,
      C,
      M,
      U,
      L
    );
  }, Ge = (d, m, _, A, T, C, M, U, L) => {
    m.slotScopeIds = U, d == null ? m.shapeFlag & 512 ? T.ctx.activate(
      m,
      _,
      A,
      M,
      L
    ) : gt(
      m,
      _,
      A,
      T,
      C,
      M,
      L
    ) : $e(d, m, L);
  }, gt = (d, m, _, A, T, C, M) => {
    const U = d.component = wc(
      d,
      A,
      T
    );
    if (Xi(d) && (U.ctx.renderer = at), Oc(U, !1, M), U.asyncDep) {
      if (T && T.registerDep(U, Pe, M), !d.el) {
        const L = U.subTree = Gt(Zt);
        ie(null, L, m, _), d.placeholder = L.el;
      }
    } else
      Pe(
        U,
        d,
        m,
        _,
        T,
        C,
        M
      );
  }, $e = (d, m, _) => {
    const A = m.component = d.component;
    if (ac(d, m, _))
      if (A.asyncDep && !A.asyncResolved) {
        me(A, m, _);
        return;
      } else
        A.next = m, A.update();
    else
      m.el = d.el, A.vnode = m;
  }, Pe = (d, m, _, A, T, C, M) => {
    const U = () => {
      if (d.isMounted) {
        let { next: H, bu: K, u: X, parent: J, vnode: O } = d;
        {
          const pe = ul(d);
          if (pe) {
            H && (H.el = O.el, me(d, H, M)), pe.asyncDep.then(() => {
              dt(() => {
                d.isUnmounted || S();
              }, T);
            });
            return;
          }
        }
        let N = H, $;
        ur(d, !1), H ? (H.el = O.el, me(d, H, M)) : H = O, K && Sn(K), ($ = H.props && H.props.onVnodeBeforeUpdate) && It($, J, H, O), ur(d, !0);
        const Q = wo(d), ee = d.subTree;
        d.subTree = Q, q(
          ee,
          Q,
          // parent may have changed if it's in a teleport
          E(ee.el),
          // anchor may have changed if it's in a fragment
          lt(ee),
          d,
          T,
          C
        ), H.el = Q.el, N === null && cc(d, Q.el), X && dt(X, T), ($ = H.props && H.props.onVnodeUpdated) && dt(
          () => It($, J, H, O),
          T
        );
      } else {
        let H;
        const { el: K, props: X } = m, { bm: J, m: O, parent: N, root: $, type: Q } = d, ee = Zr(m);
        ur(d, !1), J && Sn(J), !ee && (H = X && X.onVnodeBeforeMount) && It(H, N, m), ur(d, !0);
        {
          $.ce && $.ce._hasShadowRoot() && $.ce._injectChildStyle(
            Q,
            d.parent ? d.parent.type : void 0
          );
          const pe = d.subTree = wo(d);
          q(
            null,
            pe,
            _,
            A,
            d,
            T,
            C
          ), m.el = pe.el;
        }
        if (O && dt(O, T), !ee && (H = X && X.onVnodeMounted)) {
          const pe = m;
          dt(
            () => It(H, N, pe),
            T
          );
        }
        (m.shapeFlag & 256 || N && Zr(N.vnode) && N.vnode.shapeFlag & 256) && d.a && dt(d.a, T), d.isMounted = !0, m = _ = A = null;
      }
    };
    d.scope.on();
    const L = d.effect = new Es(U);
    d.scope.off();
    const S = d.update = L.run.bind(L), W = d.job = L.runIfDirty.bind(L);
    W.i = d, W.id = d.uid, L.scheduler = () => Gi(W), ur(d, !0), S();
  }, me = (d, m, _) => {
    m.component = d;
    const A = d.vnode.props;
    d.vnode = m, d.next = null, fc(d, m.props, A, _), mc(d, m.children, _), Yt(), vo(d), Xt();
  }, ae = (d, m, _, A, T, C, M, U, L = !1) => {
    const S = d && d.children, W = d ? d.shapeFlag : 0, H = m.children, { patchFlag: K, shapeFlag: X } = m;
    if (K > 0) {
      if (K & 128) {
        ze(
          S,
          H,
          _,
          A,
          T,
          C,
          M,
          U,
          L
        );
        return;
      } else if (K & 256) {
        De(
          S,
          H,
          _,
          A,
          T,
          C,
          M,
          U,
          L
        );
        return;
      }
    }
    X & 8 ? (W & 16 && Fe(S, T, C), H !== S && b(_, H)) : W & 16 ? X & 16 ? ze(
      S,
      H,
      _,
      A,
      T,
      C,
      M,
      U,
      L
    ) : Fe(S, T, C, !0) : (W & 8 && b(_, ""), X & 16 && Be(
      H,
      _,
      A,
      T,
      C,
      M,
      U,
      L
    ));
  }, De = (d, m, _, A, T, C, M, U, L) => {
    d = d || Nr, m = m || Nr;
    const S = d.length, W = m.length, H = Math.min(S, W);
    let K;
    for (K = 0; K < H; K++) {
      const X = m[K] = L ? Wt(m[K]) : Ft(m[K]);
      q(
        d[K],
        X,
        _,
        null,
        T,
        C,
        M,
        U,
        L
      );
    }
    S > W ? Fe(
      d,
      T,
      C,
      !0,
      !1,
      H
    ) : Be(
      m,
      _,
      A,
      T,
      C,
      M,
      U,
      L,
      H
    );
  }, ze = (d, m, _, A, T, C, M, U, L) => {
    let S = 0;
    const W = m.length;
    let H = d.length - 1, K = W - 1;
    for (; S <= H && S <= K; ) {
      const X = d[S], J = m[S] = L ? Wt(m[S]) : Ft(m[S]);
      if ($r(X, J))
        q(
          X,
          J,
          _,
          null,
          T,
          C,
          M,
          U,
          L
        );
      else
        break;
      S++;
    }
    for (; S <= H && S <= K; ) {
      const X = d[H], J = m[K] = L ? Wt(m[K]) : Ft(m[K]);
      if ($r(X, J))
        q(
          X,
          J,
          _,
          null,
          T,
          C,
          M,
          U,
          L
        );
      else
        break;
      H--, K--;
    }
    if (S > H) {
      if (S <= K) {
        const X = K + 1, J = X < W ? m[X].el : A;
        for (; S <= K; )
          q(
            null,
            m[S] = L ? Wt(m[S]) : Ft(m[S]),
            _,
            J,
            T,
            C,
            M,
            U,
            L
          ), S++;
      }
    } else if (S > K)
      for (; S <= H; )
        je(d[S], T, C, !0), S++;
    else {
      const X = S, J = S, O = /* @__PURE__ */ new Map();
      for (S = J; S <= K; S++) {
        const Ae = m[S] = L ? Wt(m[S]) : Ft(m[S]);
        Ae.key != null && O.set(Ae.key, S);
      }
      let N, $ = 0;
      const Q = K - J + 1;
      let ee = !1, pe = 0;
      const ue = new Array(Q);
      for (S = 0; S < Q; S++) ue[S] = 0;
      for (S = X; S <= H; S++) {
        const Ae = d[S];
        if ($ >= Q) {
          je(Ae, T, C, !0);
          continue;
        }
        let Re;
        if (Ae.key != null)
          Re = O.get(Ae.key);
        else
          for (N = J; N <= K; N++)
            if (ue[N - J] === 0 && $r(Ae, m[N])) {
              Re = N;
              break;
            }
        Re === void 0 ? je(Ae, T, C, !0) : (ue[Re - J] = S + 1, Re >= pe ? pe = Re : ee = !0, q(
          Ae,
          m[Re],
          _,
          null,
          T,
          C,
          M,
          U,
          L
        ), $++);
      }
      const ke = ee ? _c(ue) : Nr;
      for (N = ke.length - 1, S = Q - 1; S >= 0; S--) {
        const Ae = J + S, Re = m[Ae], ct = m[Ae + 1], Lt = Ae + 1 < W ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ct.el || fl(ct)
        ) : A;
        ue[S] === 0 ? q(
          null,
          Re,
          _,
          Lt,
          T,
          C,
          M,
          U,
          L
        ) : ee && (N < 0 || S !== ke[N] ? Me(Re, _, Lt, 2) : N--);
      }
    }
  }, Me = (d, m, _, A, T = null) => {
    const { el: C, type: M, transition: U, children: L, shapeFlag: S } = d;
    if (S & 6) {
      Me(d.component.subTree, m, _, A);
      return;
    }
    if (S & 128) {
      d.suspense.move(m, _, A);
      return;
    }
    if (S & 64) {
      M.move(d, m, _, at);
      return;
    }
    if (M === le) {
      n(C, m, _);
      for (let H = 0; H < L.length; H++)
        Me(L[H], m, _, A);
      n(d.anchor, m, _);
      return;
    }
    if (M === fi) {
      I(d, m, _);
      return;
    }
    if (A !== 2 && S & 1 && U)
      if (A === 0)
        U.persisted && !C[ai] ? n(C, m, _) : (U.beforeEnter(C), n(C, m, _), dt(() => U.enter(C), T));
      else {
        const { leave: H, delayLeave: K, afterLeave: X } = U, J = () => {
          d.ctx.isUnmounted ? i(C) : n(C, m, _);
        }, O = () => {
          const N = C._isLeaving || !!C[ai];
          C._isLeaving && C[ai](
            !0
            /* cancelled */
          ), U.persisted && !N ? J() : H(C, () => {
            J(), X && X();
          });
        };
        K ? K(C, J, O) : O();
      }
    else
      n(C, m, _);
  }, je = (d, m, _, A = !1, T = !1) => {
    const {
      type: C,
      props: M,
      ref: U,
      children: L,
      dynamicChildren: S,
      shapeFlag: W,
      patchFlag: H,
      dirs: K,
      cacheIndex: X,
      memo: J
    } = d;
    if (H === -2 && (T = !1), U != null && (Yt(), Jr(U, null, _, d, !0), Xt()), X != null && (m.renderCache[X] = void 0), W & 256) {
      m.ctx.deactivate(d);
      return;
    }
    const O = W & 1 && K, N = !Zr(d);
    let $;
    if (N && ($ = M && M.onVnodeBeforeUnmount) && It($, m, d), W & 6)
      xt(d.component, _, A);
    else {
      if (W & 128) {
        d.suspense.unmount(_, A);
        return;
      }
      O && cr(d, null, m, "beforeUnmount"), W & 64 ? d.type.remove(
        d,
        m,
        _,
        at,
        A
      ) : S && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !S.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== le || H > 0 && H & 64) ? Fe(
        S,
        m,
        _,
        !1,
        !0
      ) : (C === le && H & 384 || !T && W & 16) && Fe(L, m, _), A && Ct(d);
    }
    const Q = J != null && X == null;
    (N && ($ = M && M.onVnodeUnmounted) || O || Q) && dt(() => {
      $ && It($, m, d), O && cr(d, null, m, "unmounted"), Q && (d.el = null);
    }, _);
  }, Ct = (d) => {
    const { type: m, el: _, anchor: A, transition: T } = d;
    if (m === le) {
      fe(_, A);
      return;
    }
    if (m === fi) {
      V(d);
      return;
    }
    const C = () => {
      i(_), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (d.shapeFlag & 1 && T && !T.persisted) {
      const { leave: M, delayLeave: U } = T, L = () => M(_, C);
      U ? U(d.el, C, L) : L();
    } else
      C();
  }, fe = (d, m) => {
    let _;
    for (; d !== m; )
      _ = P(d), i(d), d = _;
    i(m);
  }, xt = (d, m, _) => {
    const { bum: A, scope: T, job: C, subTree: M, um: U, m: L, a: S } = d;
    No(L), No(S), A && Sn(A), T.stop(), C && (C.flags |= 8, je(M, d, m, _)), U && dt(U, m), dt(() => {
      d.isUnmounted = !0;
    }, m);
  }, Fe = (d, m, _, A = !1, T = !1, C = 0) => {
    for (let M = C; M < d.length; M++)
      je(d[M], m, _, A, T);
  }, lt = (d) => {
    if (d.shapeFlag & 6)
      return lt(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const m = P(d.anchor || d.el), _ = m && m[Ua];
    return _ ? P(_) : m;
  };
  let _t = !1;
  const kt = (d, m, _) => {
    let A;
    d == null ? m._vnode && (je(m._vnode, null, null, !0), A = m._vnode.component) : q(
      m._vnode || null,
      d,
      m,
      null,
      null,
      null,
      _
    ), m._vnode = d, _t || (_t = !0, vo(A), Hs(), _t = !1);
  }, at = {
    p: q,
    um: je,
    m: Me,
    r: Ct,
    mt: gt,
    mc: Be,
    pc: ae,
    pbc: Ue,
    n: lt,
    o: e
  };
  return {
    render: kt,
    hydrate: void 0,
    createApp: rc(kt)
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
  if (te(n) && te(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = Wt(i[o]), l.el = s.el), !r && l.patchFlag !== -2 && cl(s, l)), l.type === qn && (l.patchFlag === -1 && (l = i[o] = Wt(l)), l.el = s.el), l.type === Zt && !l.el && (l.el = s.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, i, o, s, l;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const v = e[n];
    if (v !== 0) {
      if (i = r[r.length - 1], e[i] < v) {
        t[n] = i, r.push(n);
        continue;
      }
      for (o = 0, s = r.length - 1; o < s; )
        l = o + s >> 1, e[r[l]] < v ? o = l + 1 : s = l;
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
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : Na(e);
}
const le = /* @__PURE__ */ Symbol.for("v-fgt"), qn = /* @__PURE__ */ Symbol.for("v-txt"), Zt = /* @__PURE__ */ Symbol.for("v-cmt"), fi = /* @__PURE__ */ Symbol.for("v-stc"), _r = [];
let yt = null;
function w(e = !1) {
  _r.push(yt = e ? null : []);
}
function pl() {
  _r.pop(), yt = _r[_r.length - 1] || null;
}
let nn = 1;
function Po(e, t = !1) {
  nn += e, e < 0 && yt && t && (yt.hasOnce = !0);
}
function hl(e) {
  return e.dynamicChildren = nn > 0 ? yt || Nr : null, pl(), nn > 0 && yt && yt.push(e), e;
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
    Gt(
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
const bl = ({ key: e }) => e ?? null, xn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Le(e) || /* @__PURE__ */ Ze(e) || se(e) ? { i: Tt, r: e, k: t, f: !!r } : e : null);
function u(e, t = null, r = null, n = 0, i = null, o = e === le ? 0 : 1, s = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bl(t),
    ref: t && xn(t),
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
    ctx: Tt
  };
  return l ? (kn(f, r), o & 128 && e.normalize(f)) : r && (f.shapeFlag |= Le(r) ? 8 : 16), nn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  yt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && yt.push(f), f;
}
const Gt = Tc;
function Tc(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Ga) && (e = Zt), ml(e)) {
    const l = Ur(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && kn(l, r), nn > 0 && !o && yt && (l.shapeFlag & 6 ? yt[yt.indexOf(e)] = l : yt.push(l)), l.patchFlag = -2, l;
  }
  if (Lc(e) && (e = e.__vccOpts), t) {
    t = Sc(t);
    let { class: l, style: f } = t;
    l && !Le(l) && (t.class = Pr(l)), Te(f) && (/* @__PURE__ */ Ki(f) && !te(f) && (f = Qe({}, f)), t.style = $i(f));
  }
  const s = Le(e) ? 1 : dl(e) ? 128 : Bn(e) ? 64 : Te(e) ? 4 : se(e) ? 2 : 0;
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
  const { props: i, ref: o, patchFlag: s, children: l, transition: f } = e, v = t ? Cc(i || {}, t) : i, b = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && bl(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? te(o) ? o.concat(xn(t)) : [o, xn(t)] : xn(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== le ? s === -1 ? 16 : s | 16 : s,
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
    b,
    f.clone(b)
  ), b;
}
function be(e = " ", t = 0) {
  return Gt(qn, null, e, t);
}
function de(e = "", t = !1) {
  return t ? (w(), Ec(Zt, null, e)) : Gt(Zt, null, e);
}
function Ft(e) {
  return e == null || typeof e == "boolean" ? Gt(Zt) : te(e) ? Gt(
    le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ml(e) ? Wt(e) : Gt(qn, null, String(e));
}
function Wt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ur(e);
}
function kn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (te(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), kn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !nl(t) ? t._ctx = Tt : i === 3 && Tt && (Tt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (se(t)) {
    if (n & 65) {
      kn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Tt }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [be(t)]) : r = 8;
  e.children = t, e.shapeFlag |= r;
}
function Cc(...e) {
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
        s && o !== s && !(te(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Dn(i) && (t[i] = s);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function It(e, t, r, n = null) {
  Pt(e, t, 7, [
    r,
    n
  ]);
}
const xc = Zs();
let Ac = 0;
function wc(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || xc, o = {
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
const Rc = () => ot || Tt;
let Ln, on;
{
  const e = $n(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Ln = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ot = r
  ), on = t(
    "__VUE_SSR_SETTERS__",
    (r) => sn = r
  );
}
const cn = (e) => {
  const t = ot;
  return Ln(e), e.scope.on(), () => {
    e.scope.off(), Ln(t);
  };
}, ko = () => {
  ot && ot.scope.off(), Ln(null);
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
    Yt();
    const i = e.setupContext = n.length > 1 ? kc(e) : null, o = cn(e), s = an(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = ps(s);
    if (Xt(), o(), (l || e.sp) && !Zr(e) && Ws(e), l) {
      if (s.then(ko, ko), t)
        return s.then((f) => {
          on(!0);
          try {
            Lo(e, f, t);
          } finally {
            on(!1);
          }
        }).catch((f) => {
          Vn(f, e, 0);
        });
      e.asyncDep = s;
    } else
      Lo(e, s);
  } else
    gl(e);
}
function Lo(e, t, r) {
  se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Te(t) && (e.setupState = Is(t)), gl(e);
}
function gl(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || $t);
  {
    const i = cn(e);
    Yt();
    try {
      Xa(e);
    } finally {
      Xt(), i();
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
function Lc(e) {
  return se(e) && "__vccOpts" in e;
}
const Z = (e, t) => /* @__PURE__ */ xa(e, t, sn), Mc = "3.5.42";
let Mi;
const Mo = typeof window < "u" && window.trustedTypes;
if (Mo)
  try {
    Mi = /* @__PURE__ */ Mo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const _l = Mi ? (e) => Mi.createHTML(e) : (e) => e, Ic = "http://www.w3.org/2000/svg", Uc = "http://www.w3.org/1998/Math/MathML", zt = typeof document < "u" ? document : null, Io = zt && /* @__PURE__ */ zt.createElement("template"), Dc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? zt.createElementNS(Ic, e) : t === "mathml" ? zt.createElementNS(Uc, e) : r ? zt.createElement(e, { is: r }) : zt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => zt.createTextNode(e),
  createComment: (e) => zt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => zt.querySelector(e),
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
      const l = Io.content;
      if (n === "svg" || n === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, r);
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
          const l = s.slice(0, s.indexOf(":")).trim();
          r[l] == null && qr(n, l, "");
        }
      else
        for (const s in t)
          r[s] == null && qr(n, s, "");
    for (const s in r) {
      s === "display" && (o = !0);
      const l = r[s];
      l != null ? Wc(
        e,
        s,
        !Le(t) && t ? t[s] : void 0,
        l
      ) || qr(n, s, l) : qr(n, s, "");
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
  if (te(r))
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
  let n = Rt(t);
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
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, f = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (l !== f || !("_value" in e)) && (e.value = f), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let s = !1;
  if (r === "" || r == null) {
    const l = typeof e[t];
    l === "boolean" ? r = gs(r) : r == null && l === "string" ? (r = "", s = !0) : l === "number" && (r = 0, s = !0);
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
    const [l, f] = Xc(t);
    if (n) {
      const v = o[t] = Qc(
        n,
        i
      );
      hr(e, l, v, f);
    } else s && (qc(e, l, s, f), o[t] = void 0);
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
    if (te(i)) {
      const o = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        o.call(n), n._stopped = !0;
      };
      const s = i.slice(), l = [n];
      for (let f = 0; f < s.length && !n._stopped; f++) {
        const v = s[f];
        v && Pt(
          v,
          t,
          5,
          l
        );
      }
    } else
      Pt(
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
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Le(n))) ? $o(e, Rt(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ho(e, t, n, s));
};
function tu(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Vo(t) && se(r));
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
  const n = Rt(t);
  return Array.isArray(r) ? r.some((i) => Rt(i) === n) : Object.keys(r).some((i) => Rt(i) === n);
}
const Mn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return te(t) ? (r) => Sn(t, r) : t;
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
`))), e[br] = Mn(i);
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
    if (e[br] = Mn(s), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Hn(e.value) : e.value, f = t ?? "";
    if (l === f)
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
      ), o = e.multiple, s = o ? vr(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
        o,
        o ? te(s) ? i.slice() : i : s
      ];
      try {
        e[br](s);
      } finally {
        Ds(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[br] = Mn(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    zo(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[br] = Mn(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !iu(t, r[1], r[0])) && zo(e, t);
  }
};
function iu(e, t, r) {
  if (!r || te(e)) return sr(e, t);
  if (vr(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function zo(e, t) {
  const r = e.multiple, n = te(t);
  if (!(r && !n && !vr(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const s = e.options[i], l = In(s);
      if (r)
        if (n) {
          const f = typeof l;
          f === "string" || f === "number" ? s.selected = t.some((v) => String(v) === String(l)) : s.selected = Zl(t, l) > -1;
        } else
          s.selected = t.has(l);
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
      const l = su[t[s]];
      if (l && l(i, t)) return;
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
    !se(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
    var n, i, o, s, l = [], f = !0, v = !1;
    try {
      if (o = (r = r.call(e)).next, t !== 0) for (; !(f = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); f = !0) ;
    } catch (b) {
      v = !0, i = b;
    } finally {
      try {
        if (!f && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (v) throw i;
      }
    }
    return l;
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
let Ve = Object.freeze, Ke = Object.seal, Or = Object.create, El = typeof Reflect < "u" && Reflect, Ii = El.apply, Ui = El.construct;
Ve || (Ve = function(t) {
  return t;
});
Ke || (Ke = function(t) {
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
const pr = He(Array.prototype.forEach), Eu = He(Array.prototype.lastIndexOf), Go = He(Array.prototype.pop), jr = He(Array.prototype.push), Tu = He(Array.prototype.splice), Mr = Array.isArray, Kr = He(String.prototype.toLowerCase), bi = He(String.prototype.toString), Yo = He(String.prototype.match), Vr = He(String.prototype.replace), Xo = He(String.prototype.indexOf), Su = He(String.prototype.trim), Cu = He(Number.prototype.toString), xu = He(Boolean.prototype.toString), Jo = typeof BigInt > "u" ? null : He(BigInt.prototype.toString), Zo = typeof Symbol > "u" ? null : He(Symbol.prototype.toString), pt = He(Object.prototype.hasOwnProperty), Br = He(Object.prototype.toString), Xe = He(RegExp.prototype.test), fr = Au(TypeError);
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
function he(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Kr;
  if (Ko && Ko(e, null), !Mr(t))
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
function bt(e) {
  const t = Or(null);
  for (const n of vl(e)) {
    var r = bu(n, 2);
    const i = r[0], o = r[1];
    pt(e, i) && (Mr(o) ? t[i] = wu(o) : o && typeof o == "object" && o.constructor === Object ? t[i] = bt(o) : t[i] = o);
  }
  return t;
}
function Ru(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Cu(e);
    case "boolean":
      return xu(e);
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
      const t = e, r = wt(t, "toString");
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
function wt(e, t) {
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
const Qo = Ve(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), yi = Ve(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), gi = Ve(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Nu = Ve(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), _i = Ve(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Pu = Ve(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), es = Ve(["#text"]), ts = Ve(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), vi = Ve(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), rs = Ve(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Tn = Ve(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ku = Ke(/{{[\w\W]*|^[\w\W]*}}/g), Lu = Ke(/<%[\w\W]*|^[\w\W]*%>/g), Mu = Ke(/\${[\w\W]*/g), Iu = Ke(/^data-[\-\w.\u00B7-\uFFFF]+$/), Uu = Ke(/^aria-[\-\w]+$/), ns = Ke(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = Ke(/^(?:\w+script|data):/i), Fu = Ke(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = Ke(/^html$/i), $u = Ke(/^[a-z][.\w]*(-[.\w]+)+$/i), is = Ke(/<[/\w!]/g), os = Ke(/<[/\w]/g), ju = Ke(/<\/no(script|embed|frames)/i), Vu = Ke(/\/>/i), mt = {
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
}, Tl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Bu = Ve(he({}, Tl)), zu = (function() {
  const e = {};
  return pr(Tl, (t) => {
    e[t] = Ke(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
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
  return pt(t, r) && Mr(t[r]) ? he(i.base ? bt(i.base) : {}, t[r], i.transform) : n;
}, Ei = function(t, r, n) {
  const i = pt(t, r) ? t[r] : void 0;
  return i && typeof i == "object" ? bt(i) : n();
};
function Sl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wu();
  const t = (D) => Sl(D);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== mt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const o = e.HTMLTemplateElement, s = e.Node, l = e.Element, f = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const b = e.DOMParser, E = e.trustedTypes, P = l.prototype, j = wt(P, "cloneNode"), ne = wt(P, "remove"), q = wt(P, "nextSibling"), oe = wt(P, "childNodes"), ie = wt(P, "parentNode"), z = wt(P, "shadowRoot"), I = wt(P, "attributes"), V = s && s.prototype ? wt(s.prototype, "nodeType") : null, ce = s && s.prototype ? wt(s.prototype, "nodeName") : null, Ne = s && s.prototype ? wt(s.prototype, "ownerDocument") : null, we = function(c) {
    return V ? V(c) : c.nodeType;
  }, Be = function(c) {
    return ce ? ce(c) : c.nodeName;
  };
  if (typeof o == "function") {
    const D = r.createElement("template");
    D.content && D.content.ownerDocument && (r = D.content.ownerDocument);
  }
  let ve, Ue = "", et, st = !1, Ge = 0;
  const gt = function() {
    if (Ge > 0)
      throw fr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, $e = function(c) {
    gt(), Ge++;
    try {
      return ve.createHTML(c);
    } finally {
      Ge--;
    }
  }, Pe = function(c) {
    gt(), Ge++;
    try {
      return ve.createScriptURL(c);
    } finally {
      Ge--;
    }
  }, me = function() {
    return st || (et = qu(E, i), st = !0), et;
  }, ae = r, De = ae.implementation, ze = ae.createNodeIterator, Me = ae.createDocumentFragment, je = ae.getElementsByTagName, Ct = n.importNode;
  let fe = ss();
  t.isSupported = typeof vl == "function" && typeof ie == "function" && De && De.createHTMLDocument !== void 0;
  const xt = ku, Fe = Lu, lt = Mu, _t = Iu, kt = Uu, at = Du, vt = Fu, d = $u;
  let m = ns, _ = null;
  const A = he({}, [...Qo, ...yi, ...gi, ..._i, ...es]);
  let T = null;
  const C = he({}, [...ts, ...vi, ...rs, ...Tn]);
  let M = Object.seal(Or(null, {
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
  })), U = null, L = null;
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
  let W = !0, H = !0, K = !1, X = !0, J = !1, O = !0, N = !1, $ = !1, Q = null, ee = null, pe = !1, ue = !1, ke = !1, Ae = !1, Re = !0, ct = !1;
  const Lt = "user-content-";
  let Vt = !0, er = !1, Et = {}, F = null;
  const k = he({}, [
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
  let h = null;
  const ye = he({}, ["audio", "video", "img", "source", "image", "track"]);
  let We = null;
  const At = he({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), tr = "http://www.w3.org/1998/Math/MathML", lr = "http://www.w3.org/2000/svg", ht = "http://www.w3.org/1999/xhtml";
  let Tr = ht, Gn = !1, Yn = null;
  const xl = he({}, [tr, lr, ht], bi), Qi = Ve(["mi", "mo", "mn", "ms", "mtext"]);
  let Xn = he({}, Qi);
  const eo = Ve(["annotation-xml"]);
  let Jn = he({}, eo);
  const Al = he({}, ["title", "style", "font", "a", "script"]);
  let Dr = null;
  const wl = ["application/xhtml+xml", "text/html"], Rl = "text/html";
  let Ie = null, Sr = null;
  const Ol = r.createElement("form"), to = function(c) {
    return c instanceof RegExp || c instanceof Function;
  }, Zn = function() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Sr && Sr === c)
      return;
    (!c || typeof c != "object") && (c = {}), c = bt(c), Dr = // eslint-disable-next-line unicorn/prefer-includes
    wl.indexOf(c.PARSER_MEDIA_TYPE) === -1 ? Rl : c.PARSER_MEDIA_TYPE, Ie = Dr === "application/xhtml+xml" ? bi : Kr, _ = nr(c, "ALLOWED_TAGS", A, {
      transform: Ie
    }), T = nr(c, "ALLOWED_ATTR", C, {
      transform: Ie
    }), Yn = nr(c, "ALLOWED_NAMESPACES", xl, {
      transform: bi
    }), We = nr(c, "ADD_URI_SAFE_ATTR", At, {
      transform: Ie,
      base: At
    }), h = nr(c, "ADD_DATA_URI_TAGS", ye, {
      transform: Ie,
      base: ye
    }), F = nr(c, "FORBID_CONTENTS", k, {
      transform: Ie
    }), U = nr(c, "FORBID_TAGS", bt({}), {
      transform: Ie
    }), L = nr(c, "FORBID_ATTR", bt({}), {
      transform: Ie
    }), Et = pt(c, "USE_PROFILES") ? c.USE_PROFILES && typeof c.USE_PROFILES == "object" ? bt(c.USE_PROFILES) : c.USE_PROFILES : !1, W = c.ALLOW_ARIA_ATTR !== !1, H = c.ALLOW_DATA_ATTR !== !1, K = c.ALLOW_UNKNOWN_PROTOCOLS || !1, X = c.ALLOW_SELF_CLOSE_IN_ATTR !== !1, J = c.SAFE_FOR_TEMPLATES || !1, O = c.SAFE_FOR_XML !== !1, N = c.WHOLE_DOCUMENT || !1, ue = c.RETURN_DOM || !1, ke = c.RETURN_DOM_FRAGMENT || !1, Ae = c.RETURN_TRUSTED_TYPE || !1, pe = c.FORCE_BODY || !1, Re = c.SANITIZE_DOM !== !1, ct = c.SANITIZE_NAMED_PROPS || !1, Vt = c.KEEP_CONTENT !== !1, er = c.IN_PLACE || !1, m = Ou(c.ALLOWED_URI_REGEXP) ? c.ALLOWED_URI_REGEXP : ns, Tr = typeof c.NAMESPACE == "string" ? c.NAMESPACE : ht, Xn = Ei(
      c,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => he({}, Qi)
      // Default built-in map
    ), Jn = Ei(
      c,
      "HTML_INTEGRATION_POINTS",
      () => he({}, eo)
      // Default built-in map
    );
    const g = Ei(c, "CUSTOM_ELEMENT_HANDLING", () => Or(null));
    if (M = Or(null), pt(g, "tagNameCheck") && to(g.tagNameCheck) && (M.tagNameCheck = g.tagNameCheck), pt(g, "attributeNameCheck") && to(g.attributeNameCheck) && (M.attributeNameCheck = g.attributeNameCheck), pt(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), Ke(M), J && (H = !1), ke && (ue = !0), Et && (_ = he({}, es), T = Or(null), Et.html === !0 && (he(_, Qo), he(T, ts)), Et.svg === !0 && (he(_, yi), he(T, vi), he(T, Tn)), Et.svgFilters === !0 && (he(_, gi), he(T, vi), he(T, Tn)), Et.mathMl === !0 && (he(_, _i), he(T, rs), he(T, Tn))), S.tagCheck = null, S.attributeCheck = null, pt(c, "ADD_TAGS") && (typeof c.ADD_TAGS == "function" ? S.tagCheck = c.ADD_TAGS : Mr(c.ADD_TAGS) && (_ === A && (_ = bt(_)), he(_, c.ADD_TAGS, Ie))), pt(c, "ADD_ATTR") && (typeof c.ADD_ATTR == "function" ? S.attributeCheck = c.ADD_ATTR : Mr(c.ADD_ATTR) && (T === C && (T = bt(T)), he(T, c.ADD_ATTR, Ie))), pt(c, "ADD_FORBID_CONTENTS") && Mr(c.ADD_FORBID_CONTENTS) && (F === k && (F = bt(F)), he(F, c.ADD_FORBID_CONTENTS, Ie)), Vt && (_["#text"] = !0), N && he(_, ["html", "head", "body"]), _.table && (he(_, ["tbody"]), delete U.tbody), c.TRUSTED_TYPES_POLICY) {
      if (typeof c.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw fr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof c.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw fr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const x = ve;
      ve = c.TRUSTED_TYPES_POLICY;
      try {
        Ue = $e("");
      } catch (B) {
        throw ve = x, B;
      }
    } else c.TRUSTED_TYPES_POLICY === null ? (ve = void 0, Ue = "") : (ve === void 0 && (ve = me()), ve && typeof Ue == "string" && (Ue = $e("")));
    Ve && Ve(c), Sr = c;
  }, ro = he({}, [...yi, ...gi, ...Nu]), no = he({}, [..._i, ...Pu]), Nl = function(c, g, x) {
    return g.namespaceURI === ht ? c === "svg" : g.namespaceURI === tr ? c === "svg" && (x === "annotation-xml" || Xn[x]) : !!ro[c];
  }, Pl = function(c, g, x) {
    return g.namespaceURI === ht ? c === "math" : g.namespaceURI === lr ? c === "math" && Jn[x] : !!no[c];
  }, kl = function(c, g, x) {
    return g.namespaceURI === lr && !Jn[x] || g.namespaceURI === tr && !Xn[x] ? !1 : !no[c] && (Al[c] || !ro[c]);
  }, Ll = function(c) {
    let g = ie(c);
    (!g || !g.tagName) && (g = {
      namespaceURI: Tr,
      tagName: "template"
    });
    const x = Kr(c.tagName), B = Kr(g.tagName);
    return Yn[c.namespaceURI] ? c.namespaceURI === lr ? Nl(x, g, B) : c.namespaceURI === tr ? Pl(x, g, B) : c.namespaceURI === ht ? kl(x, g, B) : !!(Dr === "application/xhtml+xml" && Yn[c.namespaceURI]) : !1;
  }, rr = function(c) {
    jr(t.removed, {
      element: c
    });
    try {
      ie(c).removeChild(c);
    } catch {
      if (ne(c), !ie(c))
        throw fr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, io = function(c, g, x) {
    try {
      c.removeAttributeNode(g);
    } catch {
      try {
        c.removeAttribute(x);
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
          ne(Y);
        } catch {
        }
      });
    }
    const x = I(c);
    if (x)
      for (let B = x.length - 1; B >= 0; --B) {
        const Y = x[B], re = Y && Y.name;
        typeof re == "string" && io(c, Y, re);
      }
  }, ar = function(c, g, x) {
    if (!x)
      try {
        x = g.getAttributeNode(c);
      } catch {
        x = null;
      }
    jr(t.removed, {
      attribute: x || null,
      from: g
    });
    try {
      x ? g.removeAttributeNode(x) : g.removeAttribute(c);
    } catch {
      try {
        g.removeAttribute(c);
      } catch {
      }
    }
    if (c === "is")
      if (ue || ke)
        try {
          rr(g);
        } catch {
        }
      else
        try {
          g.setAttribute(c, "");
        } catch {
        }
  }, Ml = function(c) {
    const g = I(c);
    if (g)
      for (let x = g.length - 1; x >= 0; --x) {
        const B = g[x], Y = B && B.name;
        typeof Y != "string" || T[Ie(Y)] || io(c, B, Y);
      }
  }, fn = function(c) {
    const g = [c];
    for (; g.length > 0; ) {
      const x = g.pop();
      we(x) === mt.element && Ml(x);
      const Y = oe(x);
      if (Y)
        for (let re = Y.length - 1; re >= 0; --re)
          g.push(Y[re]);
    }
  }, oo = function(c, g) {
    return O ? c === "patchsrc" ? !0 : c === "for" && g !== "label" && g !== "output" : !1;
  }, Il = function(c) {
    if (!O)
      return;
    const g = [c];
    for (; g.length > 0; ) {
      const x = g.pop(), B = we(x);
      if (B === mt.processingInstruction || B === mt.comment && Xe(os, x.data)) {
        try {
          ne(x);
        } catch {
        }
        continue;
      }
      if (B === mt.element) {
        const re = x, Ce = Ie(Be(x));
        try {
          re.hasAttribute && re.hasAttribute("patchsrc") && re.removeAttribute("patchsrc"), re.hasAttribute && re.hasAttribute("for") && oo("for", Ce) && re.removeAttribute("for");
        } catch {
        }
      }
      const Y = oe(x);
      if (Y)
        for (let re = Y.length - 1; re >= 0; --re)
          g.push(Y[re]);
    }
  }, so = function(c) {
    let g = null, x = null;
    if (pe)
      c = "<remove></remove>" + c;
    else {
      const re = Yo(c, /^[\r\n\t ]+/);
      x = re && re[0];
    }
    Dr === "application/xhtml+xml" && Tr === ht && (c = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + c + "</body></html>");
    const B = ve ? $e(c) : c;
    if (Tr === ht)
      try {
        g = new b().parseFromString(B, Dr);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = De.createDocument(Tr, "template", null);
      try {
        g.documentElement.innerHTML = Gn ? Ue : B;
      } catch {
      }
    }
    const Y = g.body || g.documentElement;
    return c && x && Y.insertBefore(r.createTextNode(x), Y.childNodes[0] || null), Tr === ht ? je.call(g, N ? "html" : "body")[0] : N ? g.documentElement : Y;
  }, lo = function(c) {
    const g = Ne ? Ne(c) : c.ownerDocument;
    return ze.call(
      g || c,
      c,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, dn = function(c) {
    return c = Vr(c, xt, " "), c = Vr(c, Fe, " "), c = Vr(c, lt, " "), c;
  }, Qn = function(c) {
    var g;
    c.normalize();
    const x = Ne ? Ne(c) : c.ownerDocument, B = ze.call(
      x || c,
      c,
      // eslint-disable-next-line no-bitwise
      f.SHOW_TEXT | f.SHOW_COMMENT | f.SHOW_CDATA_SECTION | f.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Y = B.nextNode();
    for (; Y; )
      Y.data = dn(Y.data), Y = B.nextNode();
    const re = (g = c.querySelectorAll) === null || g === void 0 ? void 0 : g.call(c, "template");
    re && pr(re, (Ce) => {
      Cr(Ce.content) && Qn(Ce.content);
    });
  }, pn = function(c) {
    const g = ce ? ce(c) : null;
    return typeof g != "string" || Ie(g) !== "form" ? !1 : typeof c.nodeName != "string" || typeof c.textContent != "string" || typeof c.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    c.attributes !== I(c) || typeof c.removeAttribute != "function" || typeof c.setAttribute != "function" || typeof c.namespaceURI != "string" || typeof c.insertBefore != "function" || typeof c.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
  }, Cr = function(c) {
    if (!V || typeof c != "object" || c === null)
      return !1;
    try {
      return V(c) === mt.documentFragment;
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
  function Mt(D, c, g) {
    D.length !== 0 && pr(D, (x) => {
      x.call(t, c, g, Sr);
    });
  }
  const Ul = function(c, g) {
    return !!(O && c.hasChildNodes() && !Fr(c.firstElementChild) && Xe(is, c.textContent) && Xe(is, c.innerHTML) || O && c.namespaceURI === ht && Bu[g] && (Fr(c.firstElementChild) || typeof c.textContent == "string" && Xe(zu[g], c.textContent)) || c.nodeType === mt.processingInstruction || O && c.nodeType === mt.comment && Xe(os, c.data));
  }, hn = function(c, g) {
    if (c instanceof RegExp)
      return Xe(c, g);
    if (c instanceof Function) {
      for (var x = arguments.length, B = new Array(x > 2 ? x - 2 : 0), Y = 2; Y < x; Y++)
        B[Y - 2] = arguments[Y];
      return !!c(g, ...B);
    }
    return !1;
  }, Dl = function(c, g, x) {
    if (!U[g] && po(g) && hn(M.tagNameCheck, g))
      return !1;
    if (Vt && !F[g]) {
      const B = ie(c), Y = oe(c);
      if (Y && B) {
        const re = Y.length;
        for (let Ce = re - 1; Ce >= 0; --Ce) {
          const Oe = c === x ? j(Y[Ce], !0) : Y[Ce];
          B.insertBefore(Oe, q(c));
        }
      }
    }
    return rr(c), !0;
  }, ao = function(c, g, x, B) {
    return c.length === 0 ? g : g === x || g === B ? bt(g) : g;
  }, co = function(c, g) {
    return c === g || ie(c) !== null ? !1 : (er && fn(c), !0);
  }, uo = function(c, g) {
    if (Mt(fe.beforeSanitizeElements, c, null), co(c, g))
      return !0;
    if (pn(c))
      return rr(c), !0;
    const x = Ie(Be(c));
    if (_ = ao(fe.uponSanitizeElement, _, A, Q), Mt(fe.uponSanitizeElement, c, {
      tagName: x,
      allowedTags: _
    }), co(c, g))
      return !0;
    if (Ul(c, x))
      return rr(c), !0;
    if (U[x] || !(S.tagCheck instanceof Function && S.tagCheck(x)) && !_[x]) {
      const Y = Dl(c, x, g);
      return Y === !1 && Mt(fe.afterSanitizeElements, c, null), Y;
    }
    if (we(c) === mt.element && !Ll(c) || (x === "noscript" || x === "noembed" || x === "noframes") && Xe(ju, c.innerHTML))
      return rr(c), !0;
    if (J && c.nodeType === mt.text) {
      const Y = dn(c.textContent);
      c.textContent !== Y && (jr(t.removed, {
        element: c.cloneNode()
      }), c.textContent = Y);
    }
    return Mt(fe.afterSanitizeElements, c, null), !1;
  }, fo = function(c, g, x) {
    if (L[g] || oo(g, c) || Re && (g === "id" || g === "name") && (x in r || x in Ol))
      return !1;
    const B = T[g] || S.attributeCheck instanceof Function && S.attributeCheck(g, c);
    return H && Xe(_t, g) || W && Xe(kt, g) ? !0 : B ? We[g] || Xe(m, Vr(x, vt, "")) || (g === "src" || g === "xlink:href" || g === "href") && c !== "script" && Xo(x, "data:") === 0 && h[c] || K && !Xe(at, Vr(x, vt, "")) ? !0 : !x : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      po(c) && hn(M.tagNameCheck, c) && hn(M.attributeNameCheck, g, c) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && M.allowCustomizedBuiltInElements && hn(M.tagNameCheck, x)
    );
  }, Fl = he({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), po = function(c) {
    return !Fl[Kr(c)] && Xe(d, c);
  }, Hl = function(c, g, x, B) {
    if (ve && typeof E == "object" && typeof E.getAttributeType == "function" && !x)
      switch (E.getAttributeType(c, g)) {
        case "TrustedHTML":
          return $e(B);
        case "TrustedScriptURL":
          return Pe(B);
      }
    return B;
  }, $l = function(c, g, x, B) {
    try {
      x ? c.setAttributeNS(x, g, B) : c.setAttribute(g, B), pn(c) ? rr(c) : Go(t.removed);
    } catch {
      ar(g, c);
    }
  }, ho = function(c) {
    Mt(fe.beforeSanitizeAttributes, c, null);
    const g = c.attributes;
    if (!g || pn(c))
      return;
    T = ao(fe.uponSanitizeAttribute, T, C, ee);
    const x = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let B = g.length;
    const Y = Ie(c.nodeName);
    for (; B--; ) {
      const re = g[B], Ce = re.name, Oe = re.namespaceURI, ut = re.value, ft = Ie(Ce), ti = ut;
      let tt = Ce === "value" ? ti : Su(ti);
      if (x.attrName = ft, x.attrValue = tt, x.keepAttr = !0, x.forceKeepAttr = void 0, Mt(fe.uponSanitizeAttribute, c, x), tt = x.attrValue, ct && (ft === "id" || ft === "name") && Xo(tt, Lt) !== 0 && (ar(Ce, c, re), tt = Lt + tt), O && Xe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, tt)) {
        ar(Ce, c, re);
        continue;
      }
      if (ft === "attributename" && Yo(tt, "href")) {
        ar(Ce, c, re);
        continue;
      }
      if (!x.forceKeepAttr) {
        if (!x.keepAttr) {
          ar(Ce, c, re);
          continue;
        }
        if (!X && Xe(Vu, tt)) {
          ar(Ce, c, re);
          continue;
        }
        if (J && (tt = dn(tt)), !fo(Y, ft, tt)) {
          ar(Ce, c, re);
          continue;
        }
        tt = Hl(Y, ft, Oe, tt), tt !== ti && $l(c, Ce, Oe, tt);
      }
    }
    Mt(fe.afterSanitizeAttributes, c, null);
  }, mn = function(c) {
    let g = null;
    const x = lo(c);
    for (Mt(fe.beforeSanitizeShadowDOM, c, null); g = x.nextNode(); )
      if (Mt(fe.uponSanitizeShadowNode, g, null), uo(g, c), ho(g), Cr(g.content) && mn(g.content), we(g) === mt.element) {
        const B = z(g);
        Cr(B) && (ei(B), mn(B));
      }
    Mt(fe.afterSanitizeShadowDOM, c, null);
  }, ei = function(c) {
    const g = [{
      node: c,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const x = g.pop();
      if (x.shadow) {
        mn(x.shadow);
        continue;
      }
      const B = x.node, re = we(B) === mt.element, Ce = oe(B);
      if (Ce)
        for (let Oe = Ce.length - 1; Oe >= 0; --Oe)
          g.push({
            node: Ce[Oe],
            shadow: null
          });
      if (re) {
        const Oe = ce ? ce(B) : null;
        if (typeof Oe == "string" && Ie(Oe) === "template") {
          const ut = B.content;
          Cr(ut) && g.push({
            node: ut,
            shadow: null
          });
        }
      }
      if (re) {
        const Oe = z(B);
        Cr(Oe) && g.push({
          node: null,
          shadow: Oe
        }, {
          node: Oe,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(D) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, x = null, B = null, Y = null;
    if (Gn = !D, Gn && (D = "<!-->"), typeof D != "string" && !Fr(D) && (D = Ru(D), typeof D != "string"))
      throw fr("dirty is not a string, aborting");
    if (!t.isSupported)
      return D;
    $ ? (_ = Q, T = ee) : Zn(c), (fe.uponSanitizeElement.length > 0 || fe.uponSanitizeAttribute.length > 0) && (_ = bt(_)), fe.uponSanitizeAttribute.length > 0 && (T = bt(T)), t.removed = [];
    const re = er && typeof D != "string" && Fr(D);
    if (re) {
      Il(D);
      const ut = Be(D);
      if (typeof ut == "string") {
        const ft = Ie(ut);
        if (!_[ft] || U[ft])
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
      g = so("<!---->"), x = g.ownerDocument.importNode(D, !0), x.nodeType === mt.element && x.nodeName === "BODY" || x.nodeName === "HTML" ? g = x : g.appendChild(x), ei(x);
    else {
      if (!ue && !J && !N && // eslint-disable-next-line unicorn/prefer-includes
      D.indexOf("<") === -1)
        return ve && Ae ? $e(D) : D;
      if (g = so(D), !g)
        return ue ? null : Ae ? Ue : "";
    }
    g && pe && rr(g.firstChild);
    const Ce = re ? D : g;
    try {
      const ut = lo(Ce);
      for (; B = ut.nextNode(); )
        uo(B, Ce), ho(B), Cr(B.content) && mn(B.content);
    } catch (ut) {
      throw re && (un(D), pr(t.removed, (ft) => {
        ft.element && fn(ft.element);
      })), ut;
    }
    if (re)
      return pr(t.removed, (ut) => {
        ut.element && fn(ut.element);
      }), J && Qn(D), D;
    if (ue) {
      if (J && Qn(g), ke)
        for (Y = Me.call(g.ownerDocument); g.firstChild; )
          Y.appendChild(g.firstChild);
      else
        Y = g;
      return (T.shadowroot || T.shadowrootmode) && (Y = Ct.call(n, Y, !0)), Y;
    }
    let Oe = N ? g.outerHTML : g.innerHTML;
    return N && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Xe(Hu, g.ownerDocument.doctype.name) && (Oe = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Oe), J && (Oe = dn(Oe)), ve && Ae ? $e(Oe) : Oe;
  }, t.setConfig = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zn(D), $ = !0, Q = _, ee = T;
  }, t.clearConfig = function() {
    Sr = null, $ = !1, Q = null, ee = null, ve = et, Ue = "";
  }, t.isValidAttribute = function(D, c, g) {
    Sr || Zn({});
    const x = Ie(D), B = Ie(c);
    return fo(x, B, g);
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
    var o, s = "", l = 0, f = 0;
    for (l = i.index; l < n.length; l++) {
      switch (n.charCodeAt(l)) {
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
      f !== l && (s += n.substring(f, l)), f = l + 1, s += o;
    }
    return f !== l ? s + n.substring(f, l) : s;
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
function a(e, t, r, n, i) {
  const o = typeof r == "object" ? r : void 0, s = typeof n == "number" ? n : typeof r == "number" ? r : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof n == "object" ? n : {}
  }, f = (q) => q, v = (l.sanitize ? Ku.sanitize : f) || f, b = l.escape ? as : f, E = (q) => typeof q == "string" || typeof q == "number", P = (q, oe, ie) => q.replace(/%n/g, "" + ie).replace(/{([^{}]*)}/g, (z, I) => {
    if (oe === void 0 || !(I in oe))
      return b(z);
    const V = oe[I];
    return E(V) ? b(`${V}`) : typeof V == "object" && E(V.value) ? (V.escape !== !1 ? as : f)(`${V.value}`) : b(z);
  });
  let ne = (i?.bundle ?? Ju(e)).translations[t] || t;
  return ne = Array.isArray(ne) ? ne[0] : ne, v(typeof o == "object" || s !== void 0 ? P(
    ne,
    o,
    s
  ) : ne);
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
}, pf = ["aria-label"], hf = ["name", "value"], mf = { class: "library-quick-search-row" }, bf = { class: "library-quick-filter-search" }, yf = ["aria-label"], gf = { class: "library-quick-filter-options" }, _f = { class: "library-quick-filter-option-grid" }, vf = { value: "title" }, Ef = { value: "recent" }, Tf = { value: "publicationDate" }, Sf = { value: "publication" }, Cf = { value: "lastOpened" }, xf = { value: "format" }, Af = { value: "" }, wf = { value: "1" }, Rf = ["value"], Of = ["value"], Nf = ["aria-label"], Pf = ["aria-label"], kf = { class: "library-filter-panel" }, Lf = { class: "library-filter-panel-summary" }, Mf = ["aria-label"], If = { value: "" }, Uf = ["value"], Df = { value: "" }, Ff = ["value"], Hf = { value: "" }, $f = ["value"], jf = { value: "" }, Vf = ["value"], Bf = { value: "" }, zf = ["value"], Wf = { value: "" }, qf = ["value"], Kf = { value: "" }, Gf = ["value"], Yf = { value: "" }, Xf = ["value"], Jf = { value: "" }, Zf = ["value"], Qf = { value: "" }, ed = ["value"], td = { value: "" }, rd = { value: "1" }, nd = { value: "" }, id = { value: "1" }, od = { value: "title" }, sd = { value: "recent" }, ld = { value: "publicationDate" }, ad = { value: "publication" }, cd = { value: "lastOpened" }, ud = { value: "format" }, fd = ["value"], dd = ["value"], pd = ["aria-label"], hd = ["aria-label"], md = ["href"], bd = {
  key: 1,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, yd = { class: "library-muted library-catalogue-eyebrow" }, gd = { id: "library-discovery-heading" }, _d = { class: "library-muted" }, vd = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, Ed = { key: 0 }, Td = { key: 1 }, Sd = { key: 2 }, Cd = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, xd = { key: 0 }, Ad = { key: 1 }, wd = {
  href: "/apps/library/",
  class: "button secondary"
}, Rd = {
  key: 2,
  class: "library-import-health-panel",
  "aria-labelledby": "library-import-health-heading"
}, Od = { class: "library-import-health-header" }, Nd = { class: "library-muted library-catalogue-eyebrow" }, Pd = { id: "library-import-health-heading" }, kd = { class: "library-muted" }, Ld = ["href"], Md = ["href"], Id = ["href"], Ud = ["href"], Dd = { class: "library-import-health-grid" }, Fd = { class: "library-import-health-card" }, Hd = { class: "library-import-health-number" }, $d = { class: "library-import-health-card" }, jd = { class: "library-import-health-number" }, Vd = { class: "library-import-health-card" }, Bd = { class: "library-muted" }, zd = {
  key: 0,
  class: "library-import-health-examples"
}, Wd = { class: "library-catalogue-status-row" }, qd = { class: "library-muted library-filter-result-summary" }, Kd = { key: 0 }, Gd = { href: "?" }, Yd = ["aria-label"], Xd = { class: "library-pagination-range" }, Jd = { key: 0 }, Zd = ["href"], Qd = {
  key: 1,
  class: "library-muted"
}, ep = ["href"], tp = {
  key: 3,
  class: "library-muted"
}, rp = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, np = ["aria-label"], ip = { class: "library-settings-count-badge" }, op = ["action"], sp = ["value"], lp = ["name", "value"], ap = ["placeholder"], cp = {
  type: "submit",
  class: "button primary"
}, up = { class: "library-muted" }, fp = ["action"], dp = ["value"], pp = ["name", "value"], hp = ["placeholder"], mp = {
  type: "submit",
  class: "button secondary"
}, bp = { class: "library-muted" }, yp = ["action"], gp = ["value"], _p = ["name", "value"], vp = {
  type: "submit",
  class: "button secondary"
}, Ep = { class: "library-muted" }, Tp = ["action"], Sp = ["value"], Cp = ["name", "value"], xp = { name: "bulkEditField" }, Ap = { value: "publicationType" }, wp = { value: "subtitle" }, Rp = { value: "creators" }, Op = { value: "publication" }, Np = { value: "publicationDate" }, Pp = { value: "language" }, kp = { value: "publisher" }, Lp = { value: "genres" }, Mp = { value: "classifications" }, Ip = {
  type: "submit",
  class: "button secondary"
}, Up = { class: "library-muted" }, Dp = ["action"], Fp = ["value"], Hp = ["name", "value"], $p = {
  type: "submit",
  class: "button secondary"
}, jp = { class: "library-muted" }, Vp = { class: "library-discovery-shortcuts" }, Bp = { class: "library-discovery-shortcut-grid" }, zp = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, Wp = { id: "library-periodical-groups-heading" }, qp = { class: "library-muted" }, Kp = ["href"], Gp = { class: "library-muted" }, Yp = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, Xp = { id: "library-periodical-groups-empty-heading" }, Jp = { class: "library-muted" }, Zp = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, Qp = { id: "library-year-groups-heading" }, eh = ["href"], th = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, rh = { id: "library-creator-groups-heading" }, nh = ["href"], ih = ["aria-label"], oh = ["href", "aria-label"], sh = { class: "library-muted" }, lh = { class: "library-empty-actions" }, ah = ["href"], ch = { class: "library-muted" }, uh = { class: "library-muted" }, fh = { class: "library-empty-actions" }, dh = ["href"], ph = { class: "library-muted" }, hh = { class: "library-empty-actions" }, mh = ["href"], bh = {
  href: "?",
  class: "button primary"
}, yh = { class: "library-muted" }, gh = { class: "library-empty-actions" }, _h = ["href"], vh = {
  key: 5,
  class: "library-cover-gallery"
}, Eh = ["href", "aria-label"], Th = ["src", "alt"], Sh = ["action", "onSubmit"], Ch = ["value"], xh = ["value"], Ah = ["aria-pressed", "title", "aria-label", "onClick"], wh = { class: "library-cover-summary" }, Rh = { class: "library-cover-primary" }, Oh = ["aria-label"], Nh = ["href"], Ph = ["onToggle"], kh = ["aria-label"], Lh = { class: "library-cover-meta" }, Mh = {
  key: 0,
  class: "library-creator"
}, Ih = { class: "library-cover-detail-list" }, Uh = { class: "library-cover-detail-chip" }, Dh = {
  key: 0,
  class: "library-cover-detail-chip"
}, Fh = {
  key: 1,
  class: "library-cover-detail-chip"
}, Hh = {
  key: 2,
  class: "library-cover-detail-chip"
}, $h = {
  key: 3,
  class: "library-cover-detail-chip"
}, jh = {
  key: 4,
  class: "library-cover-detail-chip"
}, Vh = {
  key: 5,
  class: "library-cover-detail-chip"
}, Bh = {
  key: 6,
  class: "library-cover-detail-chip"
}, zh = {
  key: 1,
  class: "library-muted library-cover-description"
}, Wh = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, qh = { key: 0 }, Kh = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Gh = {
  key: 0,
  class: "library-muted"
}, Yh = { class: "library-cover-actions" }, Xh = ["href"], Jh = ["href"], Zh = ["href"], Qh = ["aria-label"], em = { class: "library-pagination-range" }, tm = { key: 0 }, rm = ["href"], nm = {
  key: 1,
  class: "library-muted"
}, im = ["href"], om = {
  key: 3,
  class: "library-muted"
}, sm = {
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
    }), o = /* @__PURE__ */ mr((i.items || []).map((F) => ({ ...F }))), s = Z(() => o), l = Z(() => i.shelves || []), f = Z(() => i.formats || []), v = Z(() => i.publications || []), b = Z(() => i.publicationSummaries || []), E = Z(() => i.publicationIssueContext || null), P = Z(() => i.publicationYears || []), j = Z(() => i.creators || []), ne = Z(() => i.scanStatuses || []), q = Z(() => i.workflowStatuses || []), oe = Z(() => i.genres || []), ie = Z(() => i.classifications || []), z = Z(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), I = /* @__PURE__ */ mr({
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
    }), V = Z(() => i.settingsUrl || ""), ce = Z(() => i.requestToken || ""), Ne = Z(() => i.metadataExportUrl || ""), we = Z(() => i.metadataSidecarManifestUrl || ""), Be = Z(() => i.metadataSidecarBundleUrl || ""), ve = Z(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), Ue = Z(() => i.batchTagUrl || "/apps/library/bulk/tags"), et = Z(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), st = Z(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ge = Z(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), gt = Z(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), $e = Z(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), Pe = Z(() => i.metadataErrorsUrl || "/apps/library/health/metadata-errors"), me = Z(() => i.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), ae = Z(() => i.coverProbeUrl || "/apps/library/health/covers/probe"), De = Z(() => i.importHealthSummary || {}), ze = Z(() => i.metadataErrorReview || De.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), Me = Z(() => i.archiveMagicSummary || De.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), je = Z(() => i.coverHealthSummary || De.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), Ct = Z(() => Number(ze.value.total || 0) > 0 || Number(Me.value.mismatches || 0) > 0 || (je.value.byFormat || []).some((F) => F.nextcloudPreview !== "expected-ok" || F.libraryCoverRoute !== "expected-ok")), fe = Z(() => i.discoveryPage === "publication"), xt = Z(() => i.discoveryPage === "year"), Fe = Z(() => i.discoveryPage === "creator"), lt = Z(() => fe.value || xt.value || Fe.value), _t = Z(() => i.discoveryTitle || I.publication || I.year || I.creator || ""), kt = Z(() => lt.value ? _t.value : a("library", "Publication catalogue")), at = Z(() => Fe.value ? a("library", "Creator") : xt.value ? a("library", "Publication year") : a("library", "Publication / series")), vt = Z(() => Number(i.rootCount || 0)), d = Z(() => Number(i.enabledRootCount || 0)), m = Z(() => vt.value === 0), _ = Z(() => vt.value > 0 && d.value === 0), A = Z(() => M.value.length > 0), T = {
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
    }, C = Z(() => {
      if (typeof window > "u") return "";
      const F = new URLSearchParams(window.location.search);
      if (F.get("batchMetadataApplyResult") !== "1") return "";
      const k = F.get("batchMetadataField") || "field", h = F.get("batchMetadataApplied") || "0", ye = F.get("batchMetadataUnchanged") || "0", We = F.get("batchMetadataSkipped") || "0";
      return a("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: h, field: k, unchanged: ye, skipped: We });
    }), M = Z(() => Object.entries(T).map(([F, k]) => ({ key: F, label: k, value: I[F] || "" })).filter((F) => String(F.value).trim() !== "")), U = Z(() => Object.entries(I).filter(([F, k]) => !["q", "sort", "starred"].includes(F) && String(k || "").trim() !== "").map(([F, k]) => ({ key: F, value: k }))), L = Z(() => Object.entries(I).filter(([F, k]) => String(k || "").trim() !== "").map(([F, k]) => ({ key: F, value: k }))), S = /* @__PURE__ */ mr({}), W = /* @__PURE__ */ va(null);
    let H = null;
    function K(F) {
      const k = new URLSearchParams(new FormData(F));
      for (const h of Array.from(k.keys()))
        String(k.get(h) || "").trim() === "" && k.delete(h);
      return k.delete("page"), k;
    }
    function X(F) {
      o.splice(0, o.length, ...(F.items || []).map((k) => ({ ...k })));
      for (const k of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummary", "metadataErrorReview", "archiveMagicSummary", "coverHealthSummary"])
        Object.prototype.hasOwnProperty.call(F, k) && (i[k] = F[k]);
      Object.assign(I, F.activeFilters || {});
    }
    async function J(F) {
      const k = F?.currentTarget?.tagName === "FORM" ? F.currentTarget : F?.currentTarget?.form;
      if (!k) return;
      const ye = K(k).toString(), We = ye ? `?${ye}` : "", At = await fetch(ve.value + We, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!At.ok) {
        k.submit();
        return;
      }
      X(await At.json()), history.replaceState({}, "", ye ? `?${ye}` : window.location.pathname);
    }
    function O(F) {
      J(F);
    }
    function N(F) {
      window.clearTimeout(H), H = window.setTimeout(() => O(F), 350);
    }
    function $(F) {
      const k = new URLSearchParams();
      for (const [ye, We] of Object.entries(I)) {
        const At = String(We || "").trim();
        At !== "" && ye !== F && !(ye === "sort" && At === "title") && k.set(ye, At);
      }
      const h = k.toString();
      return h ? `?${h}` : "?";
    }
    function Q() {
      return $("q");
    }
    function ee(F) {
      return String(F || "").toUpperCase();
    }
    function pe(F) {
      return F.nextcloudTags || [];
    }
    function ue(F) {
      return b.value.find((h) => h.publication === F)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(F)}`;
    }
    function ke(F) {
      return i.publicationYearLandingUrls?.[F] || `/apps/library/years/${encodeURIComponent(F)}`;
    }
    function Ae(F) {
      return i.creatorLandingUrls?.[F] || `/apps/library/creators/${encodeURIComponent(F)}`;
    }
    function Re(F, k) {
      S[F] = !!k?.currentTarget?.open;
    }
    function ct(F) {
      const k = String(F?.tagName || "").toLowerCase();
      return F?.isContentEditable || ["input", "select", "textarea", "button"].includes(k);
    }
    function Lt(F) {
      F.key !== "/" || F.metaKey || F.ctrlKey || F.altKey || F.shiftKey || ct(F.target) || (F.preventDefault(), W.value?.focus(), W.value?.select?.());
    }
    function Vt(F) {
      F.key !== "Escape" || document.activeElement !== W.value || I.q === "" || (F.preventDefault(), I.q = "", W.value.value = "", window.clearTimeout(H), O({ currentTarget: W.value }));
    }
    function er(F) {
      Lt(F), Vt(F);
    }
    Ks(() => {
      window.addEventListener("keydown", er);
    }), Gs(() => {
      window.removeEventListener("keydown", er);
    });
    async function Et(F, k) {
      const h = k?.currentTarget?.closest?.("form") || k?.currentTarget;
      if (!h || !F?.starUrl) return;
      const ye = !!F.starred;
      F.starred = !ye;
      try {
        (await fetch(F.starUrl, {
          method: "POST",
          body: new FormData(h),
          credentials: "same-origin"
        })).ok || (F.starred = ye);
      } catch {
        F.starred = ye;
      }
    }
    return (F, k) => (w(), R("div", Zu, [
      u("section", Qu, [
        u("div", ef, [
          u("div", null, [
            lt.value ? (w(), R("p", tf, p(at.value), 1)) : de("", !0),
            u("h2", rf, p(kt.value), 1),
            u("p", nf, p(lt.value ? y(a)("library", "Browse this focused view; use filters only when you need to narrow it further.") : y(a)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          u("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": y(a)("library", "Library actions")
          }, [
            u("details", sf, [
              u("summary", null, p(y(a)("library", "Actions")), 1),
              u("div", lf, [
                u("a", {
                  href: V.value,
                  class: "button secondary",
                  "aria-label": "Open Library settings"
                }, p(y(a)("library", "Settings")), 9, af),
                Ne.value ? (w(), R("a", {
                  key: 0,
                  href: Ne.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, p(y(a)("library", "Export corrected metadata")), 9, cf)) : de("", !0),
                we.value ? (w(), R("a", {
                  key: 1,
                  href: we.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar manifest"
                }, p(y(a)("library", "Sidecar manifest")), 9, uf)) : de("", !0),
                Be.value ? (w(), R("a", {
                  key: 2,
                  href: Be.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar ZIP"
                }, p(y(a)("library", "Sidecar ZIP")), 9, ff)) : de("", !0)
              ])
            ])
          ], 8, of)
        ]),
        C.value ? (w(), R("p", df, p(C.value), 1)) : de("", !0),
        u("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": y(a)("library", "Quick catalogue filters"),
          onSubmit: En(J, ["prevent"])
        }, [
          (w(!0), R(le, null, Ee(U.value, (h) => (w(), R("input", {
            key: h.key,
            type: "hidden",
            name: h.key,
            value: h.value
          }, null, 8, hf))), 128)),
          u("div", mf, [
            u("label", bf, [
              u("span", null, [
                be(p(y(a)("library", "Search")) + " ", 1),
                k[18] || (k[18] = u("kbd", { class: "library-keyboard-hint" }, "/", -1))
              ]),
              qe(u("input", {
                ref_key: "quickSearchInput",
                ref: W,
                "onUpdate:modelValue": k[0] || (k[0] = (h) => I.q = h),
                "data-library-quick-search": "",
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex...",
                onInput: N
              }, null, 544), [
                [mi, I.q]
              ])
            ]),
            u("button", {
              type: "submit",
              class: "button primary",
              "aria-label": y(a)("library", "Search catalogue")
            }, p(y(a)("library", "Search")), 9, yf)
          ]),
          u("details", gf, [
            u("summary", null, p(y(a)("library", "Filter & sort")), 1),
            u("div", _f, [
              u("label", null, [
                be(p(y(a)("library", "Sort")) + " ", 1),
                qe(u("select", {
                  "onUpdate:modelValue": k[1] || (k[1] = (h) => I.sort = h),
                  name: "sort",
                  onChange: J
                }, [
                  u("option", vf, p(y(a)("library", "Title")), 1),
                  u("option", Ef, p(y(a)("library", "Recently added")), 1),
                  u("option", Tf, p(y(a)("library", "Publication date")), 1),
                  u("option", Sf, p(y(a)("library", "Series")), 1),
                  u("option", Cf, p(y(a)("library", "Recently opened")), 1),
                  u("option", xf, p(y(a)("library", "Format")), 1)
                ], 544), [
                  [rt, I.sort]
                ])
              ]),
              u("label", null, [
                be(p(y(a)("library", "Starred")) + " ", 1),
                qe(u("select", {
                  "onUpdate:modelValue": k[2] || (k[2] = (h) => I.starred = h),
                  name: "starred",
                  onChange: J
                }, [
                  u("option", Af, p(y(a)("library", "All")), 1),
                  u("option", wf, p(y(a)("library", "Starred")), 1)
                ], 544), [
                  [rt, I.starred]
                ])
              ]),
              u("label", null, [
                be(p(y(a)("library", "Size")) + " ", 1),
                u("select", {
                  value: z.value.limit,
                  name: "limit",
                  onChange: J
                }, [
                  (w(), R(le, null, Ee(n, (h) => u("option", {
                    key: h,
                    value: h
                  }, p(h), 9, Of)), 64))
                ], 40, Rf)
              ]),
              u("button", {
                type: "submit",
                class: "button secondary",
                "aria-label": y(a)("library", "Apply catalogue filters")
              }, p(y(a)("library", "Apply filters")), 9, Nf),
              u("a", {
                href: "?",
                class: "button secondary",
                "aria-label": y(a)("library", "Clear catalogue filters")
              }, p(y(a)("library", "Clear all")), 9, Pf)
            ])
          ])
        ], 40, pf),
        u("details", kf, [
          u("summary", Lf, p(y(a)("library", "Show catalogue filters")), 1),
          u("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": y(a)("library", "Catalogue search and filters"),
            onSubmit: En(J, ["prevent"])
          }, [
            u("label", null, [
              be(p(y(a)("library", "Search title / author")) + " ", 1),
              qe(u("input", {
                "onUpdate:modelValue": k[3] || (k[3] = (h) => I.q = h),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [mi, I.q]
              ])
            ]),
            u("label", null, [
              be(p(y(a)("library", "Type")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": k[4] || (k[4] = (h) => I.type = h),
                name: "type"
              }, [
                u("option", If, p(y(a)("library", "All types")), 1),
                (w(), R(le, null, Ee(r, (h) => u("option", {
                  key: h,
                  value: h
                }, p(h), 9, Uf)), 64))
              ], 512), [
                [rt, I.type]
              ])
            ]),
            u("label", null, [
              be(p(y(a)("library", "Series / periodical")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": k[5] || (k[5] = (h) => I.publication = h),
                name: "publication"
              }, [
                u("option", Df, p(y(a)("library", "All series and periodicals")), 1),
                (w(!0), R(le, null, Ee(v.value, (h) => (w(), R("option", {
                  key: h,
                  value: h
                }, p(h), 9, Ff))), 128))
              ], 512), [
                [rt, I.publication]
              ])
            ]),
            u("label", null, [
              be(p(y(a)("library", "Publication year")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": k[6] || (k[6] = (h) => I.year = h),
                name: "year"
              }, [
                u("option", Hf, p(y(a)("library", "All years")), 1),
                (w(!0), R(le, null, Ee(P.value, (h) => (w(), R("option", {
                  key: h,
                  value: h
                }, p(h), 9, $f))), 128))
              ], 512), [
                [rt, I.year]
              ])
            ]),
            u("label", null, [
              be(p(y(a)("library", "Creator")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": k[7] || (k[7] = (h) => I.creator = h),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                u("option", jf, p(y(a)("library", "All creators")), 1),
                (w(!0), R(le, null, Ee(j.value, (h) => (w(), R("option", {
                  key: h,
                  value: h
                }, p(h), 9, Vf))), 128))
              ], 512), [
                [rt, I.creator]
              ])
            ]),
            u("label", null, [
              be(p(y(a)("library", "Nextcloud tag")) + " ", 1),
              qe(u("input", {
                "onUpdate:modelValue": k[8] || (k[8] = (h) => I.tag = h),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [mi, I.tag]
              ])
            ]),
            u("label", null, [
              be(p(y(a)("library", "Format")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": k[9] || (k[9] = (h) => I.format = h),
                name: "format"
              }, [
                u("option", Bf, p(y(a)("library", "All formats")), 1),
                (w(!0), R(le, null, Ee(f.value, (h) => (w(), R("option", {
                  key: h,
                  value: h
                }, p(ee(h)), 9, zf))), 128))
              ], 512), [
                [rt, I.format]
              ])
            ]),
            u("label", null, [
              be(p(y(a)("library", "Shelf")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": k[10] || (k[10] = (h) => I.shelf = h),
                name: "shelf"
              }, [
                u("option", Wf, p(y(a)("library", "All shelves")), 1),
                (w(!0), R(le, null, Ee(l.value, (h) => (w(), R("option", {
                  key: h,
                  value: h
                }, p(h), 9, qf))), 128))
              ], 512), [
                [rt, I.shelf]
              ])
            ]),
            u("label", null, [
              be(p(y(a)("library", "Scan status")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": k[11] || (k[11] = (h) => I.status = h),
                name: "status"
              }, [
                u("option", Kf, p(y(a)("library", "All scan statuses")), 1),
                (w(!0), R(le, null, Ee(ne.value, (h) => (w(), R("option", {
                  key: h,
                  value: h
                }, p(h), 9, Gf))), 128))
              ], 512), [
                [rt, I.status]
              ])
            ]),
            u("label", null, [
              be(p(y(a)("library", "Workflow status")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": k[12] || (k[12] = (h) => I.workflowStatus = h),
                name: "workflowStatus"
              }, [
                u("option", Yf, p(y(a)("library", "All workflow statuses")), 1),
                (w(!0), R(le, null, Ee(q.value, (h) => (w(), R("option", {
                  key: h,
                  value: h
                }, p(h), 9, Xf))), 128))
              ], 512), [
                [rt, I.workflowStatus]
              ])
            ]),
            u("label", null, [
              be(p(y(a)("library", "Genre")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": k[13] || (k[13] = (h) => I.genre = h),
                name: "genre"
              }, [
                u("option", Jf, p(y(a)("library", "All genres")), 1),
                (w(!0), R(le, null, Ee(oe.value, (h) => (w(), R("option", {
                  key: h,
                  value: h
                }, p(h), 9, Zf))), 128))
              ], 512), [
                [rt, I.genre]
              ])
            ]),
            u("label", null, [
              be(p(y(a)("library", "Classification")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": k[14] || (k[14] = (h) => I.classification = h),
                name: "classification"
              }, [
                u("option", Qf, p(y(a)("library", "All classifications")), 1),
                (w(!0), R(le, null, Ee(ie.value, (h) => (w(), R("option", {
                  key: h,
                  value: h
                }, p(h), 9, ed))), 128))
              ], 512), [
                [rt, I.classification]
              ])
            ]),
            u("label", null, [
              be(p(y(a)("library", "Scanner conflicts")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": k[15] || (k[15] = (h) => I.scannerConflicts = h),
                name: "scannerConflicts"
              }, [
                u("option", td, p(y(a)("library", "All metadata")), 1),
                u("option", rd, p(y(a)("library", "Needs review")), 1)
              ], 512), [
                [rt, I.scannerConflicts]
              ])
            ]),
            u("label", null, [
              be(p(y(a)("library", "Starred")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": k[16] || (k[16] = (h) => I.starred = h),
                name: "starred"
              }, [
                u("option", nd, p(y(a)("library", "All publications")), 1),
                u("option", id, p(y(a)("library", "Starred only")), 1)
              ], 512), [
                [rt, I.starred]
              ])
            ]),
            u("label", null, [
              be(p(y(a)("library", "Sort")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": k[17] || (k[17] = (h) => I.sort = h),
                name: "sort"
              }, [
                u("option", od, p(y(a)("library", "Title")), 1),
                u("option", sd, p(y(a)("library", "Recently added")), 1),
                u("option", ld, p(y(a)("library", "Publication date")), 1),
                u("option", ad, p(y(a)("library", "Series / periodical")), 1),
                u("option", cd, p(y(a)("library", "Recently opened")), 1),
                u("option", ud, p(y(a)("library", "Format")), 1)
              ], 512), [
                [rt, I.sort]
              ])
            ]),
            u("label", null, [
              be(p(y(a)("library", "Page size")) + " ", 1),
              u("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (w(), R(le, null, Ee(n, (h) => u("option", {
                  key: h,
                  value: h
                }, p(h), 9, dd)), 64))
              ], 8, fd)
            ]),
            u("button", {
              type: "submit",
              class: "button primary",
              "aria-label": y(a)("library", "Apply catalogue filters")
            }, p(y(a)("library", "Apply filters")), 9, pd),
            u("a", {
              href: "?",
              class: "button secondary",
              "aria-label": y(a)("library", "Clear catalogue filters")
            }, p(y(a)("library", "Clear")), 9, hd),
            u("a", {
              href: $e.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, p(y(a)("library", "Review scanner conflicts")), 9, md)
          ], 40, Mf)
        ]),
        lt.value ? (w(), R("section", bd, [
          u("p", yd, p(at.value), 1),
          u("h3", gd, p(_t.value), 1),
          u("p", _d, p(Fe.value ? y(a)("library", "Items by this creator, sorted by publication context when available.") : xt.value ? y(a)("library", "Items from this publication year, sorted by publication date when available.") : y(a)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          u("div", vd, [
            u("span", null, p(z.value.total) + " " + p(y(a)("library", "items")), 1),
            E.value?.earliestYear && E.value?.latestYear ? (w(), R("span", Ed, p(E.value.earliestYear) + "–" + p(E.value.latestYear), 1)) : de("", !0),
            E.value?.datedCount ? (w(), R("span", Td, p(E.value.datedCount) + " " + p(y(a)("library", "dated")), 1)) : de("", !0),
            E.value?.undatedCount > 0 ? (w(), R("span", Sd, p(E.value.undatedCount) + " " + p(y(a)("library", "undated")), 1)) : de("", !0)
          ]),
          fe.value && E.value ? (w(), R("aside", Cd, [
            u("strong", null, p(y(a)("library", "Publication contents")), 1),
            u("span", null, p(E.value.itemCount) + " " + p(y(a)("library", "items")), 1),
            E.value.earliestYear && E.value.latestYear ? (w(), R("span", xd, p(E.value.earliestYear) + "–" + p(E.value.latestYear), 1)) : de("", !0),
            u("span", null, p(E.value.datedCount) + " " + p(y(a)("library", "with issue/date coverage")), 1),
            E.value.undatedCount > 0 ? (w(), R("span", Ad, p(E.value.undatedCount) + " " + p(y(a)("library", "without dates yet")), 1)) : de("", !0)
          ])) : de("", !0),
          u("p", null, [
            u("a", wd, p(y(a)("library", "Back to full catalogue")), 1)
          ])
        ])) : de("", !0),
        Ct.value ? (w(), R("section", Rd, [
          u("div", Od, [
            u("div", null, [
              u("p", Nd, p(y(a)("library", "Import health")), 1),
              u("h3", Pd, p(y(a)("library", "Real-file findings")), 1),
              u("p", kd, p(y(a)("library", "Metadata errors, archive/container mismatches, and cover risks from the current Library roots. Files are left as-is; diagnostics clarify what Library cover extraction can do versus Nextcloud/other preview plugins.")), 1)
            ]),
            u("a", {
              class: "button secondary",
              href: ze.value.reviewUrl || "?status=metadata_error"
            }, p(y(a)("library", "Review metadata errors")), 9, Ld),
            u("a", {
              class: "button secondary",
              href: Pe.value
            }, p(y(a)("library", "Full review")), 9, Md),
            u("a", {
              class: "button secondary",
              href: me.value
            }, p(y(a)("library", "Export TSV")), 9, Id),
            u("a", {
              class: "button secondary",
              href: ae.value
            }, p(y(a)("library", "Probe covers")), 9, Ud)
          ]),
          u("div", Dd, [
            u("article", Fd, [
              u("h4", null, p(y(a)("library", "Metadata errors")), 1),
              u("p", Hd, p(ze.value.total || 0), 1),
              u("ul", null, [
                (w(!0), R(le, null, Ee(ze.value.byExtension, (h) => (w(), R("li", {
                  key: h.extension
                }, p(ee(h.extension)) + " · " + p(h.count), 1))), 128))
              ])
            ]),
            u("article", $d, [
              u("h4", null, p(y(a)("library", "Archive/container check")), 1),
              u("p", jd, p(Me.value.mismatches || 0), 1),
              u("ul", null, [
                (w(!0), R(le, null, Ee(Me.value.byExtensionAndContainer, (h) => (w(), R("li", {
                  key: `${h.extension}-${h.actualContainerType}`
                }, p(ee(h.extension)) + " · " + p(h.actualContainerType) + " · " + p(h.count), 1))), 128))
              ])
            ]),
            u("article", Vd, [
              u("h4", null, p(y(a)("library", "Cover health")), 1),
              u("p", Bd, p(je.value.note), 1),
              u("ul", null, [
                (w(!0), R(le, null, Ee(je.value.byFormat, (h) => (w(), R("li", {
                  key: `${h.extension}-${h.nextcloudPreview}-${h.libraryCoverRoute}`
                }, p(ee(h.extension)) + " · nextcloudPreview: " + p(h.nextcloudPreview) + " · libraryCoverRoute: " + p(h.libraryCoverRoute) + " · " + p(h.count), 1))), 128))
              ])
            ])
          ]),
          ze.value.examples?.length ? (w(), R("details", zd, [
            u("summary", null, p(y(a)("library", "Example files and suggested actions")), 1),
            u("ul", null, [
              (w(!0), R(le, null, Ee(ze.value.examples, (h) => (w(), R("li", {
                key: `${h.fileId}-${h.path}`
              }, [
                u("code", null, p(h.path), 1),
                u("span", null, p(h.scanStatus) + " · " + p(h.scanError) + " · " + p(h.actualContainerType), 1),
                u("strong", null, p(h.suggestedRepairAction), 1)
              ]))), 128))
            ])
          ])) : de("", !0)
        ])) : de("", !0),
        u("div", Wd, [
          u("p", qd, [
            be(p(y(a)("library", "Showing")) + " " + p(z.value.from) + "–" + p(z.value.to) + " " + p(y(a)("library", "of")) + " " + p(z.value.total) + " " + p(y(a)("library", "catalogue items")), 1),
            M.value.length > 0 ? (w(), R("span", Kd, [
              k[19] || (k[19] = be(" · ", -1)),
              u("a", Gd, p(y(a)("library", "Clear all filters")), 1)
            ])) : de("", !0)
          ]),
          u("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": y(a)("library", "Catalogue pagination")
          }, [
            u("span", Xd, [
              be(p(y(a)("library", "Page")) + " " + p(z.value.page), 1),
              z.value.total > 0 ? (w(), R("span", Jd, " · " + p(z.value.from) + "–" + p(z.value.to), 1)) : de("", !0)
            ]),
            z.value.previousUrl ? (w(), R("a", {
              key: 0,
              href: z.value.previousUrl
            }, p(y(a)("library", "Previous")), 9, Zd)) : (w(), R("span", Qd, p(y(a)("library", "Previous")), 1)),
            z.value.nextUrl ? (w(), R("a", {
              key: 2,
              href: z.value.nextUrl
            }, p(y(a)("library", "Next")), 9, ep)) : (w(), R("span", tp, p(y(a)("library", "Next")), 1))
          ], 8, Yd)
        ]),
        u("div", rp, [
          u("details", {
            class: "library-batch-actions",
            "aria-label": y(a)("library", "Batch actions for current results")
          }, [
            u("summary", null, [
              be(p(y(a)("library", "Batch")) + " ", 1),
              u("span", ip, p(z.value.total) + " " + p(y(a)("library", "Current filter result")), 1)
            ]),
            u("form", {
              method: "post",
              action: Ue.value,
              class: "library-batch-tag-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, sp),
              (w(!0), R(le, null, Ee(L.value, (h) => (w(), R("input", {
                key: h.key,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, lp))), 128)),
              u("label", null, [
                u("span", null, p(y(a)("library", "Nextcloud tag")), 1),
                u("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: y(a)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, ap)
              ]),
              u("button", cp, p(y(a)("library", "Apply Nextcloud tag to current results")), 1),
              u("p", up, p(y(a)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, op),
            u("form", {
              method: "post",
              action: et.value,
              class: "library-batch-tag-remove-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, dp),
              (w(!0), R(le, null, Ee(L.value, (h) => (w(), R("input", {
                key: `remove-tag-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, pp))), 128)),
              u("label", null, [
                u("span", null, p(y(a)("library", "Nextcloud tag")), 1),
                u("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: y(a)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, hp)
              ]),
              u("button", mp, p(y(a)("library", "Remove tag from current results")), 1),
              u("p", bp, p(y(a)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, fp),
            u("form", {
              method: "post",
              action: st.value,
              class: "library-batch-metadata-reset-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, gp),
              (w(!0), R(le, null, Ee(L.value, (h) => (w(), R("input", {
                key: `reset-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, _p))), 128)),
              k[20] || (k[20] = u("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              u("button", vp, p(y(a)("library", "Reset filtered metadata")), 1),
              u("p", Ep, p(y(a)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, yp),
            u("form", {
              method: "post",
              action: Ge.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Sp),
              (w(!0), R(le, null, Ee(L.value, (h) => (w(), R("input", {
                key: `edit-preview-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, Cp))), 128)),
              u("label", null, [
                u("span", null, p(y(a)("library", "Metadata field")), 1),
                u("select", xp, [
                  u("option", Ap, p(y(a)("library", "Publication type")), 1),
                  u("option", wp, p(y(a)("library", "Subtitle")), 1),
                  u("option", Rp, p(y(a)("library", "Creators")), 1),
                  u("option", Op, p(y(a)("library", "Series / periodical")), 1),
                  u("option", Np, p(y(a)("library", "Publication date")), 1),
                  u("option", Pp, p(y(a)("library", "Language")), 1),
                  u("option", kp, p(y(a)("library", "Publisher")), 1),
                  u("option", Lp, p(y(a)("library", "Genres")), 1),
                  u("option", Mp, p(y(a)("library", "Classifications")), 1)
                ])
              ]),
              u("label", null, [
                u("span", null, p(y(a)("library", "Preview value")), 1),
                k[21] || (k[21] = u("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              u("button", Ip, p(y(a)("library", "Preview & apply metadata edit")), 1),
              u("p", Up, p(y(a)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, Tp),
            u("form", {
              method: "post",
              action: gt.value,
              class: "library-batch-cover-refresh-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Fp),
              (w(!0), R(le, null, Ee(L.value, (h) => (w(), R("input", {
                key: `cover-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, Hp))), 128)),
              u("button", $p, p(y(a)("library", "Request fresh cover previews")), 1),
              u("p", jp, p(y(a)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, Dp)
          ], 8, np),
          u("details", Vp, [
            u("summary", null, p(y(a)("library", "Browse")), 1),
            u("div", Bp, [
              b.value.length > 0 ? (w(), R("section", zp, [
                u("h3", Wp, p(y(a)("library", "Top series and periodicals")), 1),
                u("p", qp, p(y(a)("library", "Jump into recurring publications with one click.")), 1),
                u("ul", null, [
                  (w(!0), R(le, null, Ee(b.value, (h) => (w(), R("li", {
                    key: h.publication
                  }, [
                    u("a", {
                      href: ue(h.publication)
                    }, p(h.publication), 9, Kp),
                    u("span", Gp, p(h.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : b.value.length === 0 ? (w(), R("section", Yp, [
                u("h3", Xp, p(y(a)("library", "No series or periodicals found yet")), 1),
                u("p", Jp, p(y(a)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : de("", !0),
              P.value.length > 0 ? (w(), R("section", Zp, [
                u("h3", Qp, p(y(a)("library", "Top publication years")), 1),
                u("ul", null, [
                  (w(!0), R(le, null, Ee(P.value, (h) => (w(), R("li", { key: h }, [
                    u("a", {
                      href: ke(h)
                    }, p(h), 9, eh)
                  ]))), 128))
                ])
              ])) : de("", !0),
              j.value.length > 0 ? (w(), R("section", th, [
                u("h3", rh, p(y(a)("library", "Top creators")), 1),
                u("ul", null, [
                  (w(!0), R(le, null, Ee(j.value, (h) => (w(), R("li", { key: h }, [
                    u("a", {
                      href: Ae(h)
                    }, p(h), 9, nh)
                  ]))), 128))
                ])
              ])) : de("", !0)
            ])
          ])
        ]),
        M.value.length > 0 ? (w(), R("nav", {
          key: 3,
          class: "library-active-filter-chips",
          "aria-label": y(a)("library", "Active filters")
        }, [
          u("span", null, p(y(a)("library", "Active filters")), 1),
          (w(!0), R(le, null, Ee(M.value, (h) => (w(), R("a", {
            key: h.key,
            href: $(h.key),
            class: "library-filter-chip",
            "aria-label": `${y(a)("library", "Remove filter")}: ${h.label}`
          }, [
            u("strong", null, p(h.label) + ":", 1),
            be(" " + p(h.value) + " ", 1),
            k[22] || (k[22] = u("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, oh))), 128))
        ], 8, ih)) : de("", !0),
        s.value.length === 0 ? (w(), R("div", {
          key: 4,
          class: Pr(["library-empty-content", { "library-first-run-guidance": m.value || _.value, "library-filter-empty-state": A.value && !m.value && !_.value }]),
          role: "status"
        }, [
          m.value ? (w(), R(le, { key: 0 }, [
            u("h3", null, p(y(a)("library", "Start with one Library root")), 1),
            u("p", sh, p(y(a)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            u("p", lh, [
              u("a", {
                href: V.value,
                class: "button primary"
              }, p(y(a)("library", "Add a Library root")), 9, ah),
              u("span", ch, p(y(a)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : _.value ? (w(), R(le, { key: 1 }, [
            u("h3", null, p(y(a)("library", "No enabled Library roots")), 1),
            u("p", uh, p(y(a)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            u("p", fh, [
              u("a", {
                href: V.value,
                class: "button primary"
              }, p(y(a)("library", "Open Library settings")), 9, dh)
            ])
          ], 64)) : A.value ? (w(), R(le, { key: 2 }, [
            u("h3", null, p(y(a)("library", "No matches for the current filters")), 1),
            u("p", ph, p(y(a)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            u("p", hh, [
              u("a", {
                href: Q(),
                class: "button secondary"
              }, p(y(a)("library", "Clear search")), 9, mh),
              u("a", bh, p(y(a)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (w(), R(le, { key: 3 }, [
            u("h3", null, p(y(a)("library", "No catalogue items yet")), 1),
            u("p", yh, p(y(a)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            u("p", gh, [
              u("a", {
                href: V.value,
                class: "button primary"
              }, p(y(a)("library", "Run a scan from settings")), 9, _h)
            ])
          ], 64))
        ], 2)) : (w(), R("div", vh, [
          (w(!0), R(le, null, Ee(s.value, (h) => (w(), R("article", {
            key: h.id,
            class: Pr(["library-cover-card", { "library-cover-card--open": S[h.id] }])
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
              }, null, 8, Th)
            ], 8, Eh),
            u("form", {
              method: "post",
              action: h.starUrl,
              class: "library-cover-star-form",
              onSubmit: En((ye) => Et(h, ye), ["prevent"])
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Ch),
              k[23] || (k[23] = u("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              u("input", {
                type: "hidden",
                name: "starred",
                value: h.starred ? "0" : "1"
              }, null, 8, xh),
              u("button", {
                type: "submit",
                class: Pr(["library-cover-star-button", { "library-cover-star-button--starred": h.starred }]),
                "aria-pressed": h.starred ? "true" : "false",
                title: h.starred ? y(a)("library", "Unstar this publication") : y(a)("library", "Star this publication"),
                "aria-label": h.starred ? y(a)("library", "Unstar this publication") : y(a)("library", "Star this publication"),
                onClick: En((ye) => Et(h, ye), ["prevent"])
              }, p(h.starred ? "★" : "☆"), 11, Ah)
            ], 40, Sh),
            u("div", wh, [
              u("div", Rh, [
                u("h3", null, [
                  h.starred ? (w(), R("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": y(a)("library", "Starred")
                  }, "★", 8, Oh)) : de("", !0),
                  be(p(h.title), 1)
                ]),
                u("a", {
                  class: "library-cover-read",
                  href: h.openUrl
                }, p(y(a)("library", "Read")), 9, Nh)
              ]),
              u("details", {
                class: "library-cover-details",
                onToggle: (ye) => Re(h.id, ye)
              }, [
                u("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${y(a)("library", "Show details and actions")}: ${h.title}`
                }, p(y(a)("library", "Details")), 9, kh),
                u("div", Lh, [
                  h.creators ? (w(), R("p", Mh, p(h.creators), 1)) : de("", !0),
                  u("dl", Ih, [
                    u("div", Uh, [
                      u("dt", null, p(y(a)("library", "Type")), 1),
                      u("dd", null, p(h.publicationType), 1)
                    ]),
                    h.publication ? (w(), R("div", Dh, [
                      u("dt", null, p(y(a)("library", "Series")), 1),
                      u("dd", null, p(h.publication), 1)
                    ])) : de("", !0),
                    h.publicationDate ? (w(), R("div", Fh, [
                      u("dt", null, p(y(a)("library", "Date")), 1),
                      u("dd", null, p(h.publicationDate), 1)
                    ])) : de("", !0),
                    h.workflowStatus ? (w(), R("div", Hh, [
                      u("dt", null, p(y(a)("library", "Status")), 1),
                      u("dd", null, p(h.workflowStatus), 1)
                    ])) : de("", !0),
                    h.hasScannerConflict ? (w(), R("div", $h, [
                      u("dt", null, p(y(a)("library", "Review")), 1),
                      u("dd", null, p(h.scannerConflictCount) + " fields", 1)
                    ])) : de("", !0),
                    h.lastOpenedAt ? (w(), R("div", jh, [
                      u("dt", null, p(y(a)("library", "Last opened")), 1),
                      u("dd", null, p(h.lastOpenedAt), 1)
                    ])) : de("", !0),
                    h.extension ? (w(), R("div", Vh, [
                      u("dt", null, p(y(a)("library", "Format")) + ":", 1),
                      u("dd", null, p(ee(h.extension)), 1)
                    ])) : de("", !0),
                    h.shelf ? (w(), R("div", Bh, [
                      u("dt", null, p(y(a)("library", "Shelf")), 1),
                      u("dd", null, p(h.shelf), 1)
                    ])) : de("", !0)
                  ]),
                  h.description ? (w(), R("p", zh, p(h.description), 1)) : de("", !0),
                  h.scanStatus !== "indexed" || h.scanError ? (w(), R("p", Wh, [
                    be(" scanStatus: " + p(h.scanStatus || "unknown"), 1),
                    h.scanError ? (w(), R("span", qh, " · scanError: " + p(h.scanError), 1)) : de("", !0)
                  ])) : de("", !0),
                  u("div", Kh, [
                    pe(h).length === 0 ? (w(), R("span", Gh, "No Nextcloud tags")) : (w(!0), R(le, { key: 1 }, Ee(pe(h), (ye) => (w(), R("span", {
                      key: ye.id,
                      class: "library-tag"
                    }, p(ye.name), 1))), 128))
                  ]),
                  u("p", Yh, [
                    u("a", {
                      href: h.filesUrl
                    }, p(y(a)("library", "Show in Files")), 9, Xh),
                    k[24] || (k[24] = be(" · ", -1)),
                    u("a", {
                      href: h.downloadUrl
                    }, p(y(a)("library", "Download source")), 9, Jh),
                    k[25] || (k[25] = be(" · ", -1)),
                    u("a", {
                      href: h.detailsUrl
                    }, p(y(a)("library", "Details")), 9, Zh)
                  ])
                ])
              ], 40, Ph)
            ])
          ], 2))), 128))
        ])),
        s.value.length > 0 ? (w(), R("nav", {
          key: 6,
          class: "library-pagination library-pagination--bottom",
          "aria-label": y(a)("library", "Catalogue pagination")
        }, [
          u("span", em, [
            be(p(y(a)("library", "Page")) + " " + p(z.value.page), 1),
            z.value.total > 0 ? (w(), R("span", tm, " · " + p(z.value.from) + "–" + p(z.value.to), 1)) : de("", !0)
          ]),
          z.value.previousUrl ? (w(), R("a", {
            key: 0,
            href: z.value.previousUrl
          }, p(y(a)("library", "Previous")), 9, rm)) : (w(), R("span", nm, p(y(a)("library", "Previous")), 1)),
          z.value.nextUrl ? (w(), R("a", {
            key: 2,
            href: z.value.nextUrl
          }, p(y(a)("library", "Next")), 9, im)) : (w(), R("span", om, p(y(a)("library", "Next")), 1))
        ], 8, Qh)) : de("", !0)
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
function Cl(e) {
  return G(e).toUpperCase();
}
function lm(e, t, r, n = G) {
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
  const l = document.createElement("label");
  l.textContent = t;
  const f = document.createElement("select");
  f.name = r;
  const v = document.createElement("option");
  v.value = "", v.textContent = i, f.appendChild(v), lm(f, o, n, s), l.appendChild(f), e.appendChild(l);
}
function wr(e) {
  const t = G(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function am(e, t = {}) {
  return G(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(G(e || t?.publication || ""))}`);
}
function cm(e) {
  return G(e.discoveryPage) === "publication";
}
function um(e, t = {}) {
  return G(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(G(e))}`);
}
function Si(e) {
  return G(e.discoveryPage) === "year";
}
function fm(e, t = {}) {
  return G(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(G(e))}`);
}
function Ci(e) {
  return G(e.discoveryPage) === "creator";
}
function dm(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && G(n).trim() !== "");
}
function pm() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function zr(e, t, r, n) {
  const i = document.createElement("a");
  return i.href = t, i.className = r, i.textContent = n, e.appendChild(i), i;
}
function hm(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function mm(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", a("library", "Catalogue search and filters")), fs(n, a("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), Ar(n, a("library", "Type"), "type", r.type, a("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), fs(n, a("library", "Nextcloud tag"), "tag", r.tag, "photography"), Ar(n, a("library", "Format"), "format", r.format, a("library", "All formats"), e.formats || [], Cl), Ar(n, a("library", "Shelf"), "shelf", r.shelf, a("library", "All shelves"), e.shelves || []), Ar(n, a("library", "Scan status"), "status", r.status, a("library", "All scan statuses"), e.scanStatuses || []), Ar(n, a("library", "Sort"), "sort", r.sort || "title", a("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Ar(n, a("library", "Page size"), "limit", t.limit || 100, a("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", a("library", "Apply catalogue filters")), i.textContent = a("library", "Apply filters");
  const o = document.createElement("a");
  return o.href = "?", o.className = "button secondary", o.setAttribute("aria-label", a("library", "Clear catalogue filters")), o.textContent = a("library", "Clear"), n.append(i, o), n;
}
function bm() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", i = e.get("batchMetadataSkipped") || "0", o = document.createElement("p");
  return o.className = "library-notice library-batch-metadata-apply-result", o.textContent = a("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${i} skipped.`), o;
}
function ym(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", a("library", "Quick catalogue filters"));
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
  s.className = "library-quick-filter-search", s.textContent = a("library", "Search");
  const l = document.createElement("input");
  l.type = "search", l.name = "q", l.value = G(r.q), l.placeholder = "Camera, Eco, Rolleiflex...", l.addEventListener("input", o), s.appendChild(l), n.appendChild(s);
  const f = [
    [a("library", "Sort"), "sort", r.sort || "title", [["title", a("library", "Title")], ["recent", a("library", "Recently added")], ["publicationDate", a("library", "Publication date")], ["publication", a("library", "Series")], ["lastOpened", a("library", "Recently opened")], ["format", a("library", "Format")]]],
    [a("library", "Starred"), "starred", r.starred || "", [["", a("library", "All")], ["1", a("library", "Starred")]]],
    [a("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [E, P, j, ne] of f) {
    const q = document.createElement("label");
    q.textContent = E;
    const oe = document.createElement("select");
    oe.name = P;
    for (const [ie, z] of ne) {
      const I = document.createElement("option");
      I.value = G(ie), I.textContent = G(z), G(ie) === G(j) && (I.selected = !0), oe.appendChild(I);
    }
    oe.addEventListener("change", () => n.requestSubmit()), q.appendChild(oe), n.appendChild(q);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", a("library", "Apply catalogue filters")), v.textContent = a("library", "Apply filters");
  const b = document.createElement("a");
  return b.href = "?", b.className = "button secondary", b.setAttribute("aria-label", a("library", "Clear catalogue filters")), b.textContent = a("library", "Clear all"), n.append(v, b), n;
}
function gm(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, i = G(e.settingsUrl || ""), o = G(e.metadataExportUrl || ""), s = G(e.batchTagUrl || "/apps/library/bulk/tags"), l = G(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), f = G(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = G(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), b = G(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), E = document.createElement("div");
  E.className = "library-vue-catalogue library-vue-fallback", E.dataset.vueFallback = "true";
  const P = document.createElement("section");
  P.className = "library-panel", P.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const ne = document.createElement("div"), q = document.createElement("h2");
  q.id = "library-catalogue-heading", q.textContent = a("library", "Publication catalogue");
  const oe = document.createElement("p");
  oe.className = "library-muted", oe.textContent = a("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), ne.append(q, oe);
  const ie = document.createElement("nav");
  if (ie.className = "library-catalogue-toolbar", ie.setAttribute("aria-label", a("library", "Library actions")), i) {
    const O = document.createElement("a");
    O.href = i, O.className = "button secondary", O.setAttribute("aria-label", "Open Library settings"), O.textContent = a("library", "Settings"), ie.appendChild(O);
  }
  if (o) {
    const O = document.createElement("a");
    O.href = o, O.className = "button secondary", O.setAttribute("aria-label", "Export corrected metadata"), O.textContent = a("library", "Export corrected metadata"), ie.appendChild(O);
  }
  if (e.metadataSidecarManifestUrl) {
    const O = document.createElement("a");
    O.href = e.metadataSidecarManifestUrl, O.className = "button secondary", O.setAttribute("aria-label", "Export sidecar manifest"), O.textContent = a("library", "Sidecar manifest"), ie.appendChild(O);
  }
  if (e.metadataSidecarBundleUrl) {
    const O = document.createElement("a");
    O.href = e.metadataSidecarBundleUrl, O.className = "button secondary", O.setAttribute("aria-label", "Export sidecar ZIP"), O.textContent = a("library", "Sidecar ZIP"), ie.appendChild(O);
  }
  j.append(ne, ie), P.appendChild(j);
  const z = bm();
  z && P.appendChild(z), P.appendChild(ym(e, n));
  const I = document.createElement("details");
  I.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = a("library", "Show catalogue filters"), I.append(V, mm(e, n)), P.appendChild(I), cm(e) || Si(e) || Ci(e)) {
    const O = document.createElement("section");
    O.className = "library-discovery-header", O.setAttribute("aria-labelledby", "library-discovery-heading");
    const N = document.createElement("p");
    N.className = "library-muted", N.textContent = Ci(e) ? a("library", "Creator") : Si(e) ? a("library", "Publication year") : a("library", "Publication / series");
    const $ = document.createElement("h3");
    $.id = "library-discovery-heading", $.textContent = G(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = `${n.total ?? r.length} ${Ci(e) ? a("library", "items by this creator. Sorted by publication context when available.") : Si(e) ? a("library", "items from this publication year. Sorted by publication date when available.") : a("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const ee = document.createElement("a");
    ee.href = "/apps/library/", ee.className = "button secondary", ee.textContent = a("library", "Back to full catalogue"), O.append(N, $, Q, ee), P.appendChild(O);
  }
  const ce = document.createElement("p");
  ce.className = "library-muted library-filter-result-summary", ce.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Ne = document.createElement("a");
  Ne.href = "?", Ne.textContent = ` ${a("library", "Clear all filters")}`, ce.appendChild(Ne), P.appendChild(ce);
  const we = document.createElement("details");
  we.className = "library-batch-actions";
  const Be = document.createElement("summary");
  Be.textContent = `${a("library", "Batch actions for current results")} (${n.total ?? r.length} ${a("library", "Current filter result")})`;
  const ve = document.createElement("form");
  ve.method = "post", ve.action = s, ve.className = "library-batch-tag-form";
  const Ue = wr(e);
  Ue && ve.appendChild(Ue);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = O, $.value = G(N), ve.appendChild($);
  }
  const et = document.createElement("label");
  et.textContent = a("library", "Apply Nextcloud tag to current results");
  const st = document.createElement("input");
  st.type = "text", st.name = "nextcloudTagName", st.placeholder = "batch-review", et.appendChild(st);
  const Ge = document.createElement("button");
  Ge.type = "submit", Ge.className = "button secondary", Ge.textContent = a("library", "Apply Nextcloud tag to current results");
  const gt = document.createElement("p");
  gt.className = "library-muted", gt.textContent = a("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), ve.append(et, Ge, gt);
  const $e = document.createElement("form");
  $e.method = "post", $e.action = l, $e.className = "library-batch-tag-remove-form";
  const Pe = wr(e);
  Pe && $e.appendChild(Pe);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = O, $.value = G(N), $e.appendChild($);
  }
  const me = document.createElement("label");
  me.textContent = a("library", "Nextcloud tag");
  const ae = document.createElement("input");
  ae.type = "text", ae.name = "nextcloudTagName", ae.setAttribute("list", "library-nextcloud-tag-suggestions"), ae.placeholder = a("library", "e.g. Review"), ae.autocomplete = "off", me.appendChild(ae);
  const De = document.createElement("button");
  De.type = "submit", De.className = "button secondary", De.textContent = a("library", "Remove tag from current results");
  const ze = document.createElement("p");
  ze.className = "library-muted", ze.textContent = a("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), $e.append(me, De, ze);
  const Me = document.createElement("form");
  Me.method = "post", Me.action = f, Me.className = "library-batch-metadata-reset-form";
  const je = wr(e);
  je && Me.appendChild(je);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = O, $.value = G(N), Me.appendChild($);
  }
  const Ct = document.createElement("input");
  Ct.type = "hidden", Ct.name = "scannerConflicts", Ct.value = "1";
  const fe = document.createElement("button");
  fe.type = "submit", fe.className = "button secondary", fe.textContent = a("library", "Reset filtered metadata");
  const xt = document.createElement("p");
  xt.className = "library-muted", xt.textContent = a("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Me.append(Ct, fe, xt);
  const Fe = document.createElement("form");
  Fe.method = "post", Fe.action = v, Fe.className = "library-batch-metadata-edit-preview-form", Fe.target = "_blank";
  const lt = wr(e);
  lt && Fe.appendChild(lt);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = O, $.value = G(N), Fe.appendChild($);
  }
  const _t = document.createElement("label");
  _t.textContent = a("library", "Metadata field");
  const kt = document.createElement("select");
  kt.name = "bulkEditField";
  for (const [O, N] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const $ = document.createElement("option");
    $.value = O, $.textContent = a("library", N), kt.appendChild($);
  }
  _t.appendChild(kt);
  const at = document.createElement("label");
  at.textContent = a("library", "Preview value");
  const vt = document.createElement("input");
  vt.type = "text", vt.name = "bulkEditValue", vt.placeholder = "magazine, de, photography...", vt.autocomplete = "off", at.appendChild(vt);
  const d = document.createElement("button");
  d.type = "submit", d.className = "button secondary", d.textContent = a("library", "Preview & apply metadata edit");
  const m = document.createElement("p");
  m.className = "library-muted", m.textContent = a("library", "Preview first, then apply from the review page."), Fe.append(_t, at, d, m);
  const _ = document.createElement("form");
  _.method = "post", _.action = b, _.className = "library-batch-cover-refresh-form";
  const A = wr(e);
  A && _.appendChild(A);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = O, $.value = G(N), _.appendChild($);
  }
  const T = document.createElement("button");
  T.type = "submit", T.className = "button secondary", T.textContent = a("library", "Request fresh cover previews");
  const C = document.createElement("p");
  C.className = "library-muted", C.textContent = a("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(T, C), we.append(Be, ve, $e, Me, Fe, _), P.appendChild(we);
  const M = document.createElement("nav");
  M.className = "library-pagination", M.setAttribute("aria-label", a("library", "Catalogue pagination"));
  const U = document.createElement("span");
  U.className = "library-pagination-range", U.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, M.appendChild(U), P.appendChild(M);
  const L = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], S = document.createElement("details");
  S.className = L.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const W = document.createElement("summary");
  W.className = "library-periodical-groups-summary", W.textContent = a("library", "Show top series and periodicals"), S.appendChild(W);
  const H = document.createElement("h3");
  H.textContent = L.length > 0 ? a("library", "Top series and periodicals") : a("library", "No series or periodicals found yet");
  const K = document.createElement("p");
  if (K.className = "library-muted", K.textContent = L.length > 0 ? a("library", "Jump into recurring publications with one click.") : a("library", "Add publication or series names in item details to build this shortcut panel."), S.append(H, K), L.length > 0) {
    const O = document.createElement("ul");
    for (const N of L) {
      const $ = document.createElement("li"), Q = document.createElement("a");
      Q.href = am(N.publication, N), Q.textContent = G(N.publication);
      const ee = document.createElement("span");
      ee.className = "library-muted", ee.textContent = `${N.itemCount} items`, $.append(Q, ee), O.appendChild($);
    }
    S.appendChild(O);
  }
  P.appendChild(S);
  const X = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (X.length > 0) {
    const O = document.createElement("details");
    O.className = "library-year-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = a("library", "Show publication years");
    const $ = document.createElement("h3");
    $.textContent = a("library", "Top publication years");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = a("library", "Jump into dated books, magazines, journals and comics by year.");
    const ee = document.createElement("ul");
    for (const pe of X) {
      const ue = document.createElement("li"), ke = document.createElement("a");
      ke.href = um(pe, e), ke.textContent = G(pe), ue.appendChild(ke), ee.appendChild(ue);
    }
    O.append(N, $, Q, ee), P.appendChild(O);
  }
  const J = Array.isArray(e.creators) ? e.creators : [];
  if (J.length > 0) {
    const O = document.createElement("details");
    O.className = "library-creator-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = a("library", "Show creators");
    const $ = document.createElement("h3");
    $.textContent = a("library", "Top creators");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = a("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const ee = document.createElement("ul");
    for (const pe of J) {
      const ue = document.createElement("li"), ke = document.createElement("a");
      ke.href = fm(pe, e), ke.textContent = G(pe), ue.appendChild(ke), ee.appendChild(ue);
    }
    O.append(N, $, Q, ee), P.appendChild(O);
  }
  if (r.length === 0) {
    const O = document.createElement("div"), N = Number(e.rootCount || 0), $ = Number(e.enabledRootCount || 0), Q = dm(e);
    O.className = "library-empty-content", (N === 0 || $ === 0) && O.classList.add("library-first-run-guidance"), Q && N > 0 && $ > 0 && O.classList.add("library-filter-empty-state"), O.setAttribute("role", "status");
    const ee = document.createElement("h3"), pe = document.createElement("p");
    pe.className = "library-muted";
    const ue = document.createElement("p");
    ue.className = "library-empty-actions", N === 0 ? (ee.textContent = a("library", "Start with one Library root"), pe.textContent = a("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), zr(ue, i, "button primary", a("library", "Add a Library root")), hm(ue, a("library", "Run a scan after saving a root"))) : $ === 0 ? (ee.textContent = a("library", "No enabled Library roots"), pe.textContent = a("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), zr(ue, i, "button primary", a("library", "Open Library settings"))) : Q ? (ee.textContent = a("library", "No matches for the current filters"), pe.textContent = a("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), zr(ue, pm(), "button secondary", a("library", "Clear search")), zr(ue, "?", "button primary", a("library", "Clear all filters"))) : (ee.textContent = a("library", "No catalogue items yet"), pe.textContent = a("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), zr(ue, i, "button primary", a("library", "Run a scan from settings"))), O.append(ee, pe, ue), P.appendChild(O);
  } else {
    const O = document.createElement("div");
    O.className = "library-cover-gallery";
    for (const N of r) {
      const $ = document.createElement("article");
      $.className = "library-cover-card";
      const Q = document.createElement("a");
      Q.className = "library-cover-link", Q.href = G(N.openUrl || "#"), Q.setAttribute("aria-label", `Read ${G(N.title || "publication")}`);
      const ee = document.createElement("img");
      ee.className = "library-cover-image", ee.src = G(N.coverUrl || ""), ee.alt = `Cover for ${G(N.title || "publication")}`, ee.loading = "lazy", Q.appendChild(ee);
      const pe = wr(e), ue = document.createElement("form");
      ue.method = "post", ue.action = G(N.starUrl || ""), ue.className = "library-cover-star-form", pe && ue.appendChild(pe);
      const ke = document.createElement("input");
      ke.type = "hidden", ke.name = "returnTo", ke.value = "catalogue";
      const Ae = document.createElement("input");
      Ae.type = "hidden", Ae.name = "starred", Ae.value = N.starred ? "0" : "1";
      const Re = document.createElement("button");
      Re.type = "submit", Re.className = N.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Re.setAttribute("aria-pressed", N.starred ? "true" : "false"), Re.setAttribute("aria-label", N.starred ? a("library", "Unstar this publication") : a("library", "Star this publication")), Re.title = N.starred ? a("library", "Unstar this publication") : a("library", "Star this publication"), Re.textContent = N.starred ? "★" : "☆", ue.append(ke, Ae, Re);
      const ct = document.createElement("div");
      ct.className = "library-cover-summary";
      const Lt = document.createElement("h3");
      if (Lt.textContent = G(N.title || "Untitled publication"), ct.appendChild(Lt), N.creators) {
        const We = document.createElement("p");
        We.className = "library-creator", We.textContent = G(N.creators), ct.appendChild(We);
      }
      const Vt = document.createElement("dl");
      Vt.className = "library-cover-detail-list";
      const er = [
        ["Type", G(N.publicationType || "other")],
        ["Format", N.extension ? Cl(N.extension) : ""],
        ["Shelf", N.shelf ? G(N.shelf) : ""]
      ].filter(([, We]) => We !== "");
      for (const [We, At] of er) {
        const tr = document.createElement("div");
        tr.className = "library-cover-detail-chip";
        const lr = document.createElement("dt");
        lr.textContent = We;
        const ht = document.createElement("dd");
        ht.textContent = At, tr.append(lr, ht), Vt.appendChild(tr);
      }
      ct.appendChild(Vt);
      const Et = document.createElement("p"), F = document.createElement("a");
      F.href = G(N.openUrl || "#"), F.textContent = a("library", "Read");
      const k = document.createElement("a");
      k.href = G(N.filesUrl || "#"), k.textContent = a("library", "Show in Files");
      const h = document.createElement("a");
      h.href = G(N.downloadUrl || "#"), h.textContent = a("library", "Download source");
      const ye = document.createElement("a");
      ye.href = G(N.detailsUrl || "#"), ye.textContent = a("library", "Details"), Et.append(F, document.createTextNode(" · "), k, document.createTextNode(" · "), h, document.createTextNode(" · "), ye), ct.appendChild(Et), $.append(Q, ue, ct), O.appendChild($);
    }
    P.appendChild(O);
  }
  return E.appendChild(P), E;
}
if (An)
  try {
    cu(sm, { state: us }).mount(An);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), An.replaceChildren(gm(us));
  }
//# sourceMappingURL=library-main.mjs.map
