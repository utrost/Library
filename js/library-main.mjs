// @__NO_SIDE_EFFECTS__
function ni(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Ae = {}, zr = [], Yt = () => {
}, Es = () => !1, na = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), aa = (e) => e.startsWith("onUpdate:"), tt = Object.assign, ai = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, jl = Object.prototype.hasOwnProperty, Ee = (e, t) => jl.call(e, t), re = Array.isArray, yr = (e) => Tn(e) === "[object Map]", Pr = (e) => Tn(e) === "[object Set]", Ti = (e) => Tn(e) === "[object Date]", ue = (e) => typeof e == "function", Fe = (e) => typeof e == "string", Xt = (e) => typeof e == "symbol", Te = (e) => e !== null && typeof e == "object", Cs = (e) => (Te(e) || ue(e)) && ue(e.then) && ue(e.catch), Ts = Object.prototype.toString, Tn = (e) => Ts.call(e), Vl = (e) => Tn(e).slice(8, -1), xs = (e) => Tn(e) === "[object Object]", ii = (e) => Fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, pn = /* @__PURE__ */ ni(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ia = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Bl = /-\w/g, Ut = ia(
  (e) => e.replace(Bl, (t) => t.slice(1).toUpperCase())
), ql = /\B([A-Z])/g, Ir = ia(
  (e) => e.replace(ql, "-$1").toLowerCase()
), As = ia((e) => e.charAt(0).toUpperCase() + e.slice(1)), Sa = ia(
  (e) => e ? `on${As(e)}` : ""
), Kt = (e, t) => !Object.is(e, t), qn = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, ks = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, sa = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let xi;
const la = () => xi || (xi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function si(e) {
  if (re(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], a = Fe(n) ? Kl(n) : si(n);
      if (a)
        for (const i in a)
          t[i] = a[i];
    }
    return t;
  } else if (Fe(e) || Te(e))
    return e;
}
const zl = /;(?![^(]*\))/g, Wl = /:([^]+)/, Gl = /\/\*[^]*?\*\//g;
function Kl(e) {
  const t = {};
  return e.replace(Gl, "").split(zl).forEach((r) => {
    if (r) {
      const n = r.split(Wl);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Mt(e) {
  let t = "";
  if (Fe(e))
    t = e;
  else if (re(e))
    for (let r = 0; r < e.length; r++) {
      const n = Mt(e[r]);
      n && (t += n + " ");
    }
  else if (Te(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Yl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xl = /* @__PURE__ */ ni(Yl);
function Rs(e) {
  return !!e || e === "";
}
function Jl(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = gr(e[n], t[n]);
  return r;
}
function Ai(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const a of e) {
    let i = -1;
    for (let o = 0; o < r.length; o++)
      if (!n[o] && gr(a, r[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    n[i] = 1;
  }
  return !0;
}
function gr(e, t) {
  if (e === t) return !0;
  let r = Ti(e), n = Ti(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Xt(e), n = Xt(t), r || n)
    return e === t;
  if (r = re(e), n = re(t), r || n)
    return r && n ? Jl(e, t) : !1;
  if (r = Te(e), n = Te(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = yr(e), n = yr(t), r || n || (r = Pr(e), n = Pr(t), r || n))
      return r && n ? Ai(e, t) : !1;
    const a = Object.keys(e).length, i = Object.keys(t).length;
    if (a !== i)
      return !1;
    for (const o in e) {
      const u = e.hasOwnProperty(o), h = t.hasOwnProperty(o);
      if (u && !h || !u && h || !gr(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((r) => gr(r, t));
}
const Os = (e) => !!(e && e.__v_isRef === !0), c = (e) => Fe(e) ? e : e == null ? "" : re(e) || Te(e) && (e.toString === Ts || !ue(e.toString)) ? Os(e) ? c(e.value) : JSON.stringify(e, Ns, 2) : String(e), Ns = (e, t) => Os(t) ? Ns(e, t.value) : yr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, a], i) => (r[Ea(n, i) + " =>"] = a, r),
    {}
  )
} : Pr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Ea(r))
} : Xt(t) ? Ea(t) : Te(t) && !re(t) && !xs(t) ? String(t) : t, Ea = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Xt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
let Xe;
class Ql {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Xe && (Xe.active ? (this.parent = Xe, this.index = (Xe.scopes || (Xe.scopes = [])).push(
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
        const a = this.scopes.slice();
        for (t = 0, r = a.length; t < r; t++)
          a[t].resume();
      }
      const n = this.effects.slice();
      for (t = 0, r = n.length; t < r; t++)
        n[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = Xe;
      try {
        return Xe = this, t();
      } finally {
        Xe = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Xe, Xe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Xe === this)
        Xe = this.prevScope;
      else {
        let t = Xe;
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
        const a = this.scopes.slice();
        for (r = 0, n = a.length; r < n; r++)
          a[r].stop(!0);
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
function eo() {
  return Xe;
}
let Re;
const Ca = /* @__PURE__ */ new WeakSet();
class Ps {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Xe && (Xe.active ? Xe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ca.has(this) && (Ca.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ls(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ki(this), Ms(this);
    const t = Re, r = Dt;
    Re = this, Dt = !0;
    try {
      return this.fn();
    } finally {
      Us(this), Re = t, Dt = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ci(t);
      this.deps = this.depsTail = void 0, ki(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ca.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    za(this) && this.run();
  }
  get dirty() {
    return za(this);
  }
}
let Is = 0, hn, mn;
function Ls(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = mn, mn = e;
    return;
  }
  e.next = hn, hn = e;
}
function li() {
  Is++;
}
function oi() {
  if (--Is > 0)
    return;
  if (mn) {
    let t = mn;
    for (mn = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; hn; ) {
    let t = hn;
    for (hn = void 0; t; ) {
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
function Ms(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Us(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const a = n.prevDep;
    n.version === -1 ? (n === r && (r = a), ci(n), to(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = a;
  }
  e.deps = t, e.depsTail = r;
}
function za(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ds(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ds(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === _n) || (e.globalVersion = _n, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !za(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Re, n = Dt;
  Re = e, Dt = !0;
  try {
    Ms(e);
    const a = e.fn(e._value);
    (t.version === 0 || Kt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    Re = r, Dt = n, Us(e), e.flags &= -3;
  }
}
function ci(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: a } = e;
  if (n && (n.nextSub = a, e.prevSub = void 0), a && (a.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let i = r.computed.deps; i; i = i.nextDep)
      ci(i, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function to(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Dt = !0;
const Fs = [];
function or() {
  Fs.push(Dt), Dt = !1;
}
function cr() {
  const e = Fs.pop();
  Dt = e === void 0 ? !0 : e;
}
function ki(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = Re;
    Re = void 0;
    try {
      t();
    } finally {
      Re = r;
    }
  }
}
let _n = 0;
class ro {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ui {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Re || !Dt || Re === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Re)
      r = this.activeLink = new ro(Re, this), Re.deps ? (r.prevDep = Re.depsTail, Re.depsTail.nextDep = r, Re.depsTail = r) : Re.deps = Re.depsTail = r, $s(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Re.depsTail, r.nextDep = void 0, Re.depsTail.nextDep = r, Re.depsTail = r, Re.deps === r && (Re.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, _n++, this.notify(t);
  }
  notify(t) {
    li();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      oi();
    }
  }
}
function $s(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        $s(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Wa = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ Symbol(
  ""
), Ga = /* @__PURE__ */ Symbol(
  ""
), vn = /* @__PURE__ */ Symbol(
  ""
);
function Qe(e, t, r) {
  if (Dt && Re) {
    let n = Wa.get(e);
    n || Wa.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(r);
    a || (n.set(r, a = new ui()), a.map = n, a.key = r), a.track();
  }
}
function ir(e, t, r, n, a, i) {
  const o = Wa.get(e);
  if (!o) {
    _n++;
    return;
  }
  const u = (h) => {
    h && h.trigger();
  };
  if (li(), t === "clear")
    o.forEach(u);
  else {
    const h = re(e), v = h && ii(r);
    if (h && r === "length") {
      const y = Number(n);
      o.forEach((S, I) => {
        (I === "length" || I === vn || !Xt(I) && I >= y) && u(S);
      });
    } else
      switch ((r !== void 0 || o.has(void 0)) && u(o.get(r)), v && u(o.get(vn)), t) {
        case "add":
          h ? v && u(o.get("length")) : (u(o.get(Rr)), yr(e) && u(o.get(Ga)));
          break;
        case "delete":
          h || (u(o.get(Rr)), yr(e) && u(o.get(Ga)));
          break;
        case "set":
          yr(e) && u(o.get(Rr));
          break;
      }
  }
  oi();
}
function Hr(e) {
  const t = /* @__PURE__ */ Se(e);
  return t === e ? t : (Qe(t, "iterate", vn), /* @__PURE__ */ Ot(e) ? t : t.map(Ft));
}
function oa(e) {
  return Qe(e = /* @__PURE__ */ Se(e), "iterate", vn), e;
}
function Wt(e, t) {
  return /* @__PURE__ */ ur(e) ? Yr(/* @__PURE__ */ Or(e) ? Ft(t) : t) : Ft(t);
}
const no = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ta(this, Symbol.iterator, (e) => Wt(this, e));
  },
  concat(...e) {
    return Hr(this).concat(
      ...e.map((t) => re(t) ? Hr(t) : t)
    );
  },
  entries() {
    return Ta(this, "entries", (e) => (e[1] = Wt(this, e[1]), e));
  },
  every(e, t) {
    return tr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return tr(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => Wt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return tr(
      this,
      "find",
      e,
      t,
      (r) => Wt(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return tr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return tr(
      this,
      "findLast",
      e,
      t,
      (r) => Wt(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return tr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return tr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return xa(this, "includes", e);
  },
  indexOf(...e) {
    return xa(this, "indexOf", e);
  },
  join(e) {
    return Hr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return xa(this, "lastIndexOf", e);
  },
  map(e, t) {
    return tr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return nn(this, "pop");
  },
  push(...e) {
    return nn(this, "push", e);
  },
  reduce(e, ...t) {
    return Ri(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ri(this, "reduceRight", e, t);
  },
  shift() {
    return nn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return tr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return nn(this, "splice", e);
  },
  toReversed() {
    return Hr(this).toReversed();
  },
  toSorted(e) {
    return Hr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Hr(this).toSpliced(...e);
  },
  unshift(...e) {
    return nn(this, "unshift", e);
  },
  values() {
    return Ta(this, "values", (e) => Wt(this, e));
  }
};
function Ta(e, t, r) {
  const n = oa(e), a = n[t]();
  return n !== e && !/* @__PURE__ */ Ot(e) && (a._next = a.next, a.next = () => {
    const i = a._next();
    return i.done || (i.value = r(i.value)), i;
  }), a;
}
const ao = Array.prototype;
function tr(e, t, r, n, a, i) {
  const o = oa(e), u = o !== e && !/* @__PURE__ */ Ot(e), h = o[t];
  if (h !== ao[t]) {
    const S = h.apply(e, i);
    return u ? Ft(S) : S;
  }
  let v = r;
  o !== e && (u ? v = function(S, I) {
    return r.call(this, Wt(e, S), I, e);
  } : r.length > 2 && (v = function(S, I) {
    return r.call(this, S, I, e);
  }));
  const y = h.call(o, v, n);
  return u && a ? a(y) : y;
}
function Ri(e, t, r, n) {
  const a = oa(e), i = a !== e && !/* @__PURE__ */ Ot(e);
  let o = r, u = !1;
  a !== e && (i ? (u = n.length === 0, o = function(v, y, S) {
    return u && (u = !1, v = Wt(e, v)), r.call(this, v, Wt(e, y), S, e);
  }) : r.length > 3 && (o = function(v, y, S) {
    return r.call(this, v, y, S, e);
  }));
  const h = a[t](o, ...n);
  return u ? Wt(e, h) : h;
}
function xa(e, t, r) {
  const n = /* @__PURE__ */ Se(e);
  Qe(n, "iterate", vn);
  const a = n[t](...r);
  return (a === -1 || a === !1) && /* @__PURE__ */ pi(r[0]) ? (r[0] = /* @__PURE__ */ Se(r[0]), n[t](...r)) : a;
}
function nn(e, t, r = []) {
  or(), li();
  const n = (/* @__PURE__ */ Se(e))[t].apply(e, r);
  return oi(), cr(), n;
}
const io = /* @__PURE__ */ ni("__proto__,__v_isRef,__isVue"), Hs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xt)
);
function so(e) {
  Xt(e) || (e = String(e));
  const t = /* @__PURE__ */ Se(this);
  return Qe(t, "has", e), t.hasOwnProperty(e);
}
class js {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, i = this._isShallow;
    if (r === "__v_isReactive")
      return !a;
    if (r === "__v_isReadonly")
      return a;
    if (r === "__v_isShallow")
      return i;
    if (r === "__v_raw")
      return n === (a ? i ? yo : zs : i ? qs : Bs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = re(t);
    if (!a) {
      let h;
      if (o && (h = no[r]))
        return h;
      if (r === "hasOwnProperty")
        return so;
    }
    const u = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ et(t) ? t : n
    );
    if ((Xt(r) ? Hs.has(r) : io(r)) || (a || Qe(t, "get", r), i))
      return u;
    if (/* @__PURE__ */ et(u)) {
      const h = o && ii(r) ? u : u.value;
      return a && Te(h) ? /* @__PURE__ */ Ya(h) : h;
    }
    return Te(u) ? a ? /* @__PURE__ */ Ya(u) : /* @__PURE__ */ nr(u) : u;
  }
}
class Vs extends js {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, a) {
    let i = t[r];
    const o = re(t) && ii(r);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ ur(i);
      if (!/* @__PURE__ */ Ot(n) && !/* @__PURE__ */ ur(n) && (i = /* @__PURE__ */ Se(i), n = /* @__PURE__ */ Se(n)), !o && /* @__PURE__ */ et(i) && !/* @__PURE__ */ et(n))
        return v || (i.value = n), !0;
    }
    const u = o ? Number(r) < t.length : Ee(t, r), h = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ et(t) ? t : a
    );
    return t === /* @__PURE__ */ Se(a) && h && (u ? Kt(n, i) && ir(t, "set", r, n) : ir(t, "add", r, n)), h;
  }
  deleteProperty(t, r) {
    const n = Ee(t, r);
    t[r];
    const a = Reflect.deleteProperty(t, r);
    return a && n && ir(t, "delete", r, void 0), a;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Xt(r) || !Hs.has(r)) && Qe(t, "has", r), n;
  }
  ownKeys(t) {
    return Qe(
      t,
      "iterate",
      re(t) ? "length" : Rr
    ), Reflect.ownKeys(t);
  }
}
class lo extends js {
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
const oo = /* @__PURE__ */ new Vs(), co = /* @__PURE__ */ new lo(), uo = /* @__PURE__ */ new Vs(!0);
const Ka = (e) => e, Dn = (e) => Reflect.getPrototypeOf(e);
function fo(e, t, r) {
  return function(...n) {
    const a = this.__v_raw, i = /* @__PURE__ */ Se(a), o = yr(i), u = e === "entries" || e === Symbol.iterator && o, h = e === "keys" && o, v = a[e](...n), y = r ? Ka : t ? Yr : Ft;
    return !t && Qe(
      i,
      "iterate",
      h ? Ga : Rr
    ), tt(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: S, done: I } = v.next();
          return I ? { value: S, done: I } : {
            value: u ? [y(S[0]), y(S[1])] : y(S),
            done: I
          };
        }
      }
    );
  };
}
function Fn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function po(e, t) {
  const r = {
    get(a) {
      const i = this.__v_raw, o = /* @__PURE__ */ Se(i), u = /* @__PURE__ */ Se(a);
      e || (Kt(a, u) && Qe(o, "get", a), Qe(o, "get", u));
      const { has: h } = Dn(o), v = t ? Ka : e ? Yr : Ft;
      if (h.call(o, a))
        return v(i.get(a));
      if (h.call(o, u))
        return v(i.get(u));
      i !== o && i.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Qe(/* @__PURE__ */ Se(a), "iterate", Rr), a.size;
    },
    has(a) {
      const i = this.__v_raw, o = /* @__PURE__ */ Se(i), u = /* @__PURE__ */ Se(a);
      return e || (Kt(a, u) && Qe(o, "has", a), Qe(o, "has", u)), a === u ? i.has(a) : i.has(a) || i.has(u);
    },
    forEach(a, i) {
      const o = this, u = o.__v_raw, h = /* @__PURE__ */ Se(u), v = t ? Ka : e ? Yr : Ft;
      return !e && Qe(h, "iterate", Rr), u.forEach((y, S) => a.call(i, v(y), v(S), o));
    }
  };
  return tt(
    r,
    e ? {
      add: Fn("add"),
      set: Fn("set"),
      delete: Fn("delete"),
      clear: Fn("clear")
    } : {
      add(a) {
        const i = /* @__PURE__ */ Se(this), o = Dn(i), u = /* @__PURE__ */ Se(a), h = !t && !/* @__PURE__ */ Ot(a) && !/* @__PURE__ */ ur(a) ? u : a;
        return o.has.call(i, h) || Kt(a, h) && o.has.call(i, a) || Kt(u, h) && o.has.call(i, u) || (i.add(h), ir(i, "add", h, h)), this;
      },
      set(a, i) {
        !t && !/* @__PURE__ */ Ot(i) && !/* @__PURE__ */ ur(i) && (i = /* @__PURE__ */ Se(i));
        const o = /* @__PURE__ */ Se(this), { has: u, get: h } = Dn(o);
        let v = u.call(o, a);
        v || (a = /* @__PURE__ */ Se(a), v = u.call(o, a));
        const y = h.call(o, a);
        return o.set(a, i), v ? Kt(i, y) && ir(o, "set", a, i) : ir(o, "add", a, i), this;
      },
      delete(a) {
        const i = /* @__PURE__ */ Se(this), { has: o, get: u } = Dn(i);
        let h = o.call(i, a);
        h || (a = /* @__PURE__ */ Se(a), h = o.call(i, a)), u && u.call(i, a);
        const v = i.delete(a);
        return h && ir(i, "delete", a, void 0), v;
      },
      clear() {
        const a = /* @__PURE__ */ Se(this), i = a.size !== 0, o = a.clear();
        return i && ir(
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
    r[a] = fo(a, e, t);
  }), r;
}
function di(e, t) {
  const r = po(e, t);
  return (n, a, i) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? n : Reflect.get(
    Ee(r, a) && a in n ? r : n,
    a,
    i
  );
}
const ho = {
  get: /* @__PURE__ */ di(!1, !1)
}, mo = {
  get: /* @__PURE__ */ di(!1, !0)
}, bo = {
  get: /* @__PURE__ */ di(!0, !1)
};
const Bs = /* @__PURE__ */ new WeakMap(), qs = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap();
function go(e) {
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
function nr(e) {
  return /* @__PURE__ */ ur(e) ? e : fi(
    e,
    !1,
    oo,
    ho,
    Bs
  );
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  return fi(
    e,
    !1,
    uo,
    mo,
    qs
  );
}
// @__NO_SIDE_EFFECTS__
function Ya(e) {
  return fi(
    e,
    !0,
    co,
    bo,
    zs
  );
}
function fi(e, t, r, n, a) {
  if (!Te(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = a.get(e);
  if (i)
    return i;
  const o = go(Vl(e));
  if (o === 0)
    return e;
  const u = new Proxy(
    e,
    o === 2 ? n : r
  );
  return a.set(e, u), u;
}
// @__NO_SIDE_EFFECTS__
function Or(e) {
  return /* @__PURE__ */ ur(e) ? /* @__PURE__ */ Or(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ur(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ot(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function pi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Se(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Se(t) : e;
}
function vo(e) {
  return !Ee(e, "__v_skip") && Object.isExtensible(e) && ks(e, "__v_skip", !0), e;
}
const Ft = (e) => Te(e) ? /* @__PURE__ */ nr(e) : e, Yr = (e) => Te(e) ? /* @__PURE__ */ Ya(e) : e;
// @__NO_SIDE_EFFECTS__
function et(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Oi(e) {
  return wo(e, !1);
}
function wo(e, t) {
  return /* @__PURE__ */ et(e) ? e : new So(e, t);
}
class So {
  constructor(t, r) {
    this.dep = new ui(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ Se(t), this._value = r ? t : Ft(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ot(t) || /* @__PURE__ */ ur(t);
    t = n ? t : /* @__PURE__ */ Se(t), Kt(t, r) && (this._rawValue = t, this._value = n ? t : Ft(t), this.dep.trigger());
  }
}
function p(e) {
  return /* @__PURE__ */ et(e) ? e.value : e;
}
const Eo = {
  get: (e, t, r) => t === "__v_raw" ? e : p(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const a = e[t];
    return /* @__PURE__ */ et(a) && !/* @__PURE__ */ et(r) ? (a.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Ws(e) {
  return /* @__PURE__ */ Or(e) ? e : new Proxy(e, Eo);
}
class Co {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new ui(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = _n - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Re !== this)
      return Ls(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ds(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function To(e, t, r = !1) {
  let n, a;
  return ue(e) ? n = e : (n = e.get, a = e.set), new Co(n, a, r);
}
const $n = {}, Kn = /* @__PURE__ */ new WeakMap();
let Tr;
function xo(e, t = !1, r = Tr) {
  if (r) {
    let n = Kn.get(r);
    n || Kn.set(r, n = []), n.push(e);
  }
}
function Ao(e, t, r = Ae) {
  const { immediate: n, deep: a, once: i, scheduler: o, augmentJob: u, call: h } = r, v = (V) => a ? V : /* @__PURE__ */ Ot(V) || a === !1 || a === 0 ? sr(V, 1) : sr(V);
  let y, S, I, j, ie = !1, W = !1;
  if (/* @__PURE__ */ et(e) ? (S = () => e.value, ie = /* @__PURE__ */ Ot(e)) : /* @__PURE__ */ Or(e) ? (S = () => v(e), ie = !0) : re(e) ? (W = !0, ie = e.some((V) => /* @__PURE__ */ Or(V) || /* @__PURE__ */ Ot(V)), S = () => e.map((V) => {
    if (/* @__PURE__ */ et(V))
      return V.value;
    if (/* @__PURE__ */ Or(V))
      return v(V);
    if (ue(V))
      return h ? h(V, 2) : V();
  })) : ue(e) ? t ? S = h ? () => h(e, 2) : e : S = () => {
    if (I) {
      or();
      try {
        I();
      } finally {
        cr();
      }
    }
    const V = Tr;
    Tr = y;
    try {
      return h ? h(e, 3, [j]) : e(j);
    } finally {
      Tr = V;
    }
  } : S = Yt, t && a) {
    const V = S, oe = a === !0 ? 1 / 0 : a;
    S = () => sr(V(), oe);
  }
  const ce = eo(), se = () => {
    y.stop(), ce && ce.active && ai(ce.effects, y);
  };
  if (i && t) {
    const V = t;
    t = (...oe) => {
      const Le = V(...oe);
      return se(), Le;
    };
  }
  let z = W ? new Array(e.length).fill($n) : $n;
  const L = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const oe = y.run();
        if (V || a || ie || (W ? oe.some((Le, Ne) => Kt(Le, z[Ne])) : Kt(oe, z))) {
          I && I();
          const Le = Tr;
          Tr = y;
          try {
            const Ne = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              z === $n ? void 0 : W && z[0] === $n ? [] : z,
              j
            ];
            z = oe, h ? h(t, 3, Ne) : (
              // @ts-expect-error
              t(...Ne)
            );
          } finally {
            Tr = Le;
          }
        }
      } else
        y.run();
  };
  return u && u(L), y = new Ps(S), y.scheduler = o ? () => o(L, !1) : L, j = (V) => xo(V, !1, y), I = y.onStop = () => {
    const V = Kn.get(y);
    if (V) {
      if (h)
        h(V, 4);
      else
        for (const oe of V) oe();
      Kn.delete(y);
    }
  }, t ? n ? L(!0) : z = y.run() : o ? o(L.bind(null, !0), !0) : y.run(), se.pause = y.pause.bind(y), se.resume = y.resume.bind(y), se.stop = se, se;
}
function sr(e, t = 1 / 0, r) {
  if (t <= 0 || !Te(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ et(e))
    sr(e.value, t, r);
  else if (re(e))
    for (let n = 0; n < e.length; n++)
      sr(e[n], t, r);
  else if (Pr(e) || yr(e))
    e.forEach((n) => {
      sr(n, t, r);
    });
  else if (xs(e)) {
    for (const n in e)
      sr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && sr(e[n], t, r);
  }
  return e;
}
function xn(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (a) {
    ca(a, t, r);
  }
}
function $t(e, t, r, n) {
  if (ue(e)) {
    const a = xn(e, t, r, n);
    return a && Cs(a) && a.catch((i) => {
      ca(i, t, r);
    }), a;
  }
  if (re(e)) {
    const a = [];
    for (let i = 0; i < e.length; i++)
      a.push($t(e[i], t, r, n));
    return a;
  }
}
function ca(e, t, r, n = !0) {
  const a = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Ae;
  if (t) {
    let u = t.parent;
    const h = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; u; ) {
      const y = u.ec;
      if (y) {
        for (let S = 0; S < y.length; S++)
          if (y[S](e, h, v) === !1)
            return;
      }
      u = u.parent;
    }
    if (i) {
      or(), xn(i, null, 10, [
        e,
        h,
        v
      ]), cr();
      return;
    }
  }
  ko(e, r, a, n, o);
}
function ko(e, t, r, n = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const ct = [];
let zt = -1;
const Wr = [];
let br = null, Br = 0;
const Gs = /* @__PURE__ */ Promise.resolve();
let Yn = null;
function Ks(e) {
  const t = Yn || Gs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ro(e) {
  let t = zt + 1, r = ct.length;
  for (; t < r; ) {
    const n = t + r >>> 1, a = ct[n], i = wn(a);
    i < e || i === e && a.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function hi(e) {
  if (!(e.flags & 1)) {
    const t = wn(e), r = ct[ct.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= wn(r) ? ct.push(e) : ct.splice(Ro(t), 0, e), e.flags |= 1, Ys();
  }
}
function Ys() {
  Yn || (Yn = Gs.then(Js));
}
function Oo(e) {
  if (!re(e))
    br && e.id === -1 ? br.splice(Br + 1, 0, e) : e.flags & 1 || (Wr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Wr.push(e[t]);
  Ys();
}
function Ni(e, t, r = zt + 1) {
  for (; r < ct.length; r++) {
    const n = ct[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ct.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Xs(e) {
  if (Wr.length) {
    const t = [...new Set(Wr)].sort(
      (r, n) => wn(r) - wn(n)
    );
    if (Wr.length = 0, br) {
      for (let r = 0; r < t.length; r++)
        br.push(t[r]);
      return;
    }
    for (br = t, Br = 0; Br < br.length; Br++) {
      const r = br[Br];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    br = null, Br = 0;
  }
}
const wn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Js(e) {
  try {
    for (zt = 0; zt < ct.length; zt++) {
      const t = ct[zt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), xn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; zt < ct.length; zt++) {
      const t = ct[zt];
      t && (t.flags &= -2);
    }
    zt = -1, ct.length = 0, Xs(), Yn = null, (ct.length || Wr.length) && Js();
  }
}
let Rt = null, Zs = null;
function Xn(e) {
  const t = Rt;
  return Rt = e, Zs = e && e.type.__scopeId || null, t;
}
function No(e, t = Rt, r) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && Vi(-1);
    const i = Xn(t), o = Nr.length;
    let u;
    try {
      u = e(...a);
    } finally {
      for (let h = Nr.length; h > o; h--) Cl();
      Xn(i), n._d && Vi(1);
    }
    return u;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ge(e, t) {
  if (Rt === null)
    return e;
  const r = ha(Rt), n = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [i, o, u, h = Ae] = t[a];
    i && (ue(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && sr(o), n.push({
      dir: i,
      instance: r,
      value: o,
      oldValue: void 0,
      arg: u,
      modifiers: h
    }));
  }
  return e;
}
function Sr(e, t, r, n) {
  const a = e.dirs, i = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const u = a[o];
    i && (u.oldValue = i[o].value);
    let h = u.dir[n];
    h && (or(), $t(h, r, 8, [
      e.el,
      u,
      e,
      t
    ]), cr());
  }
}
function Po(e, t) {
  if (ut) {
    let r = ut.provides;
    const n = ut.parent && ut.parent.provides;
    n === r && (r = ut.provides = Object.create(n)), r[e] = t;
  }
}
function zn(e, t, r = !1) {
  const n = kc();
  if (n || Gr) {
    let a = Gr ? Gr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return r && ue(t) ? t.call(n && n.proxy) : t;
  }
}
const Io = /* @__PURE__ */ Symbol.for("v-scx"), Lo = () => zn(Io);
function Aa(e, t, r) {
  return Qs(e, t, r);
}
function Qs(e, t, r = Ae) {
  const { immediate: n, deep: a, flush: i, once: o } = r, u = tt({}, r), h = t && n || !t && i !== "post";
  let v;
  if (Cn) {
    if (i === "sync") {
      const j = Lo();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!h) {
      const j = () => {
      };
      return j.stop = Yt, j.resume = Yt, j.pause = Yt, j;
    }
  }
  const y = ut;
  u.call = (j, ie, W) => $t(j, y, ie, W);
  let S = !1;
  i === "post" ? u.scheduler = (j) => {
    yt(j, y && y.suspense);
  } : i !== "sync" && (S = !0, u.scheduler = (j, ie) => {
    ie ? j() : hi(j);
  }), u.augmentJob = (j) => {
    t && (j.flags |= 4), S && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const I = Ao(e, t, u);
  return Cn && (v ? v.push(I) : h && I()), I;
}
function Mo(e, t, r) {
  const n = this.proxy, a = Fe(e) ? e.includes(".") ? el(n, e) : () => n[e] : e.bind(n, n);
  let i;
  ue(t) ? i = t : (i = t.handler, r = t);
  const o = An(this), u = Qs(a, i.bind(n), r);
  return o(), u;
}
function el(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let a = 0; a < r.length && n; a++)
      n = n[r[a]];
    return n;
  };
}
const Uo = /* @__PURE__ */ Symbol("_vte"), ua = (e) => e.__isTeleport, ka = /* @__PURE__ */ Symbol("_leaveCb");
function Do(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== dr) {
        t = r;
        break;
      }
  }
  return t;
}
function tl(e) {
  if (!bi(e))
    return ua(e.type) && e.children ? Do(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: r } = e;
  if (r) {
    if (t & 16)
      return r[0];
    if (t & 32 && ue(r.default))
      return r.default();
  }
}
function mi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    mi(
      ua(r.type) && tl(r) || r,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function rl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Pi(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Jn = /* @__PURE__ */ new WeakMap();
function bn(e, t, r, n, a = !1) {
  if (re(e)) {
    e.forEach(
      (W, ce) => bn(
        W,
        t && (re(t) ? t[ce] : t),
        r,
        n,
        a
      )
    );
    return;
  }
  if (yn(n) && !a) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && bn(e, t, r, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? ha(n.component) : n.el, o = a ? null : i, { i: u, r: h } = e, v = t && t.r, y = u.refs === Ae ? u.refs = {} : u.refs, S = u.setupState, I = /* @__PURE__ */ Se(S), j = S === Ae ? Es : (W) => Pi(y, W) ? !1 : Ee(I, W), ie = (W, ce) => !(ce && Pi(y, ce));
  if (v != null && v !== h) {
    if (Ii(t), Fe(v))
      y[v] = null, j(v) && (S[v] = null);
    else if (/* @__PURE__ */ et(v)) {
      const W = t;
      ie(v, W.k) && (v.value = null), W.k && (y[W.k] = null);
    }
  }
  if (ue(h))
    xn(h, u, 12, [o, y]);
  else {
    const W = Fe(h), ce = /* @__PURE__ */ et(h);
    if (W || ce) {
      const se = () => {
        if (e.f) {
          const z = W ? j(h) ? S[h] : y[h] : ie() || !e.k ? h.value : y[e.k];
          if (a)
            re(z) && ai(z, i);
          else if (re(z))
            z.includes(i) || z.push(i);
          else if (W)
            y[h] = [i], j(h) && (S[h] = y[h]);
          else {
            const L = [i];
            ie(h, e.k) && (h.value = L), e.k && (y[e.k] = L);
          }
        } else W ? (y[h] = o, j(h) && (S[h] = o)) : ce && (ie(h, e.k) && (h.value = o), e.k && (y[e.k] = o));
      };
      if (o) {
        const z = () => {
          se(), Jn.delete(e);
        };
        z.id = -1, Jn.set(e, z), yt(z, r);
      } else
        Ii(e), se();
    }
  }
}
function Ii(e) {
  const t = Jn.get(e);
  t && (t.flags |= 8, Jn.delete(e));
}
la().requestIdleCallback;
la().cancelIdleCallback;
const yn = (e) => !!e.type.__asyncLoader, bi = (e) => e.type.__isKeepAlive;
function Fo(e, t) {
  nl(e, "a", t);
}
function $o(e, t) {
  nl(e, "da", t);
}
function nl(e, t, r = ut) {
  const n = e.__wdc || (e.__wdc = () => {
    let a = r;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (da(t, n, r), r) {
    let a = r.parent;
    for (; a && a.parent; )
      bi(a.parent.vnode) && Ho(n, t, r, a), a = a.parent;
  }
}
function Ho(e, t, r, n) {
  const a = da(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  sl(() => {
    ai(n[t], a);
  }, r);
}
function da(e, t, r = ut, n = !1) {
  if (r) {
    const a = r[e] || (r[e] = []), i = t.__weh || (t.__weh = (...o) => {
      or();
      const u = An(r), h = $t(t, r, e, o);
      return u(), cr(), h;
    });
    return n ? a.unshift(i) : a.push(i), i;
  }
}
const fr = (e) => (t, r = ut) => {
  (!Cn || e === "sp") && da(e, (...n) => t(...n), r);
}, jo = fr("bm"), al = fr("m"), Vo = fr(
  "bu"
), Bo = fr("u"), il = fr(
  "bum"
), sl = fr("um"), qo = fr(
  "sp"
), zo = fr("rtg"), Wo = fr("rtc");
function Go(e, t = ut) {
  da("ec", e, t);
}
const Ko = /* @__PURE__ */ Symbol.for("v-ndc");
function me(e, t, r, n) {
  let a;
  const i = r, o = re(e);
  if (o || Fe(e)) {
    const u = o && /* @__PURE__ */ Or(e);
    let h = !1, v = !1;
    u && (h = !/* @__PURE__ */ Ot(e), v = /* @__PURE__ */ ur(e), e = oa(e)), a = new Array(e.length);
    for (let y = 0, S = e.length; y < S; y++)
      a[y] = t(
        h ? v ? Yr(Ft(e[y])) : Ft(e[y]) : e[y],
        y,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let u = 0; u < e; u++)
      a[u] = t(u + 1, u, void 0, i);
  } else if (Te(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (u, h) => t(u, h, void 0, i)
      );
    else {
      const u = Object.keys(e);
      a = new Array(u.length);
      for (let h = 0, v = u.length; h < v; h++) {
        const y = u[h];
        a[h] = t(e[y], y, h, i);
      }
    }
  else
    a = [];
  return a;
}
const Xa = (e) => e ? kl(e) ? ha(e) : Xa(e.parent) : null, gn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ tt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Xa(e.parent),
    $root: (e) => Xa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ol(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      hi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ks.bind(e.proxy)),
    $watch: (e) => Mo.bind(e)
  })
), Ra = (e, t) => e !== Ae && !e.__isScriptSetup && Ee(e, t), Yo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: a, props: i, accessCache: o, type: u, appContext: h } = e;
    if (t[0] !== "$") {
      const I = o[t];
      if (I !== void 0)
        switch (I) {
          case 1:
            return n[t];
          case 2:
            return a[t];
          case 4:
            return r[t];
          case 3:
            return i[t];
        }
      else {
        if (Ra(n, t))
          return o[t] = 1, n[t];
        if (a !== Ae && Ee(a, t))
          return o[t] = 2, a[t];
        if (Ee(i, t))
          return o[t] = 3, i[t];
        if (r !== Ae && Ee(r, t))
          return o[t] = 4, r[t];
        Ja && (o[t] = 0);
      }
    }
    const v = gn[t];
    let y, S;
    if (v)
      return t === "$attrs" && Qe(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = u.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== Ae && Ee(r, t))
      return o[t] = 4, r[t];
    if (
      // global properties
      S = h.config.globalProperties, Ee(S, t)
    )
      return S[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: a, ctx: i } = e;
    return Ra(a, t) ? (a[t] = r, !0) : n !== Ae && Ee(n, t) ? (n[t] = r, !0) : Ee(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: a, props: i, type: o }
  }, u) {
    let h;
    return !!(r[u] || e !== Ae && u[0] !== "$" && Ee(e, u) || Ra(t, u) || Ee(i, u) || Ee(n, u) || Ee(gn, u) || Ee(a.config.globalProperties, u) || (h = o.__cssModules) && h[u]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Ee(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Li(e) {
  return re(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Ja = !0;
function Xo(e) {
  const t = ol(e), r = e.proxy, n = e.ctx;
  Ja = !1, t.beforeCreate && Mi(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: i,
    methods: o,
    watch: u,
    provide: h,
    inject: v,
    // lifecycle
    created: y,
    beforeMount: S,
    mounted: I,
    beforeUpdate: j,
    updated: ie,
    activated: W,
    deactivated: ce,
    beforeDestroy: se,
    beforeUnmount: z,
    destroyed: L,
    unmounted: V,
    render: oe,
    renderTracked: Le,
    renderTriggered: Ne,
    errorCaptured: Be,
    serverPrefetch: Ce,
    // public API
    expose: Me,
    inheritAttrs: rt,
    // assets
    components: dt,
    directives: Ye,
    filters: xt
  } = t;
  if (v && Jo(v, n, null), o)
    for (const _e in o) {
      const de = o[_e];
      ue(de) && (n[_e] = de.bind(r));
    }
  if (a) {
    const _e = a.call(r, r);
    Te(_e) && (e.data = /* @__PURE__ */ nr(_e));
  }
  if (Ja = !0, i)
    for (const _e in i) {
      const de = i[_e], qe = ue(de) ? de.bind(r, r) : ue(de.get) ? de.get.bind(r, r) : Yt, ve = !ue(de) && ue(de.set) ? de.set.bind(r) : Yt, xe = q({
        get: qe,
        set: ve
      });
      Object.defineProperty(n, _e, {
        enumerable: !0,
        configurable: !0,
        get: () => xe.value,
        set: (ze) => xe.value = ze
      });
    }
  if (u)
    for (const _e in u)
      ll(u[_e], n, r, _e);
  if (h) {
    const _e = ue(h) ? h.call(r) : h;
    Reflect.ownKeys(_e).forEach((de) => {
      Po(de, _e[de]);
    });
  }
  y && Mi(y, e, "c");
  function Ue(_e, de) {
    re(de) ? de.forEach((qe) => _e(qe.bind(r))) : de && _e(de.bind(r));
  }
  if (Ue(jo, S), Ue(al, I), Ue(Vo, j), Ue(Bo, ie), Ue(Fo, W), Ue($o, ce), Ue(Go, Be), Ue(Wo, Le), Ue(zo, Ne), Ue(il, z), Ue(sl, V), Ue(qo, Ce), re(Me))
    if (Me.length) {
      const _e = e.exposed || (e.exposed = {});
      Me.forEach((de) => {
        Object.defineProperty(_e, de, {
          get: () => r[de],
          set: (qe) => r[de] = qe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  oe && e.render === Yt && (e.render = oe), rt != null && (e.inheritAttrs = rt), dt && (e.components = dt), Ye && (e.directives = Ye), Ce && rl(e);
}
function Jo(e, t, r = Yt) {
  re(e) && (e = Za(e));
  for (const n in e) {
    const a = e[n];
    let i;
    Te(a) ? "default" in a ? i = zn(
      a.from || n,
      a.default,
      !0
    ) : i = zn(a.from || n) : i = zn(a), /* @__PURE__ */ et(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function Mi(e, t, r) {
  $t(
    re(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function ll(e, t, r, n) {
  let a = n.includes(".") ? el(r, n) : () => r[n];
  if (Fe(e)) {
    const i = t[e];
    ue(i) && Aa(a, i);
  } else if (ue(e))
    Aa(a, e.bind(r));
  else if (Te(e))
    if (re(e))
      e.forEach((i) => ll(i, t, r, n));
    else {
      const i = ue(e.handler) ? e.handler.bind(r) : t[e.handler];
      ue(i) && Aa(a, i, e);
    }
}
function ol(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: a,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, u = i.get(t);
  let h;
  return u ? h = u : !a.length && !r && !n ? h = t : (h = {}, a.length && a.forEach(
    (v) => Zn(h, v, o, !0)
  ), Zn(h, t, o)), Te(t) && i.set(t, h), h;
}
function Zn(e, t, r, n = !1) {
  const { mixins: a, extends: i } = t;
  i && Zn(e, i, r, !0), a && a.forEach(
    (o) => Zn(e, o, r, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const u = Zo[o] || r && r[o];
      e[o] = u ? u(e[o], t[o]) : t[o];
    }
  return e;
}
const Zo = {
  data: Ui,
  props: Di,
  emits: Di,
  // objects
  methods: un,
  computed: un,
  // lifecycle
  beforeCreate: ot,
  created: ot,
  beforeMount: ot,
  mounted: ot,
  beforeUpdate: ot,
  updated: ot,
  beforeDestroy: ot,
  beforeUnmount: ot,
  destroyed: ot,
  unmounted: ot,
  activated: ot,
  deactivated: ot,
  errorCaptured: ot,
  serverPrefetch: ot,
  // assets
  components: un,
  directives: un,
  // watch
  watch: ec,
  // provide / inject
  provide: Ui,
  inject: Qo
};
function Ui(e, t) {
  return t ? e ? function() {
    return tt(
      ue(e) ? e.call(this, this) : e,
      ue(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qo(e, t) {
  return un(Za(e), Za(t));
}
function Za(e) {
  if (re(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function ot(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function un(e, t) {
  return e ? tt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Di(e, t) {
  return e ? re(e) && re(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : tt(
    /* @__PURE__ */ Object.create(null),
    Li(e),
    Li(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = tt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = ot(e[n], t[n]);
  return r;
}
function cl() {
  return {
    app: null,
    config: {
      isNativeTag: Es,
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
  return function(n, a = null) {
    ue(n) || (n = tt({}, n)), a != null && !Te(a) && (a = null);
    const i = cl(), o = /* @__PURE__ */ new WeakSet(), u = [];
    let h = !1;
    const v = i.app = {
      _uid: tc++,
      _component: n,
      _props: a,
      _container: null,
      _context: i,
      _instance: null,
      version: Lc,
      get config() {
        return i.config;
      },
      set config(y) {
      },
      use(y, ...S) {
        return o.has(y) || (y && ue(y.install) ? (o.add(y), y.install(v, ...S)) : ue(y) && (o.add(y), y(v, ...S))), v;
      },
      mixin(y) {
        return i.mixins.includes(y) || i.mixins.push(y), v;
      },
      component(y, S) {
        return S ? (i.components[y] = S, v) : i.components[y];
      },
      directive(y, S) {
        return S ? (i.directives[y] = S, v) : i.directives[y];
      },
      mount(y, S, I) {
        if (!h) {
          const j = v._ceVNode || lr(n, a);
          return j.appContext = i, I === !0 ? I = "svg" : I === !1 && (I = void 0), e(j, y, I), h = !0, v._container = y, y.__vue_app__ = v, ha(j.component);
        }
      },
      onUnmount(y) {
        u.push(y);
      },
      unmount() {
        h && ($t(
          u,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, S) {
        return i.provides[y] = S, v;
      },
      runWithContext(y) {
        const S = Gr;
        Gr = v;
        try {
          return y();
        } finally {
          Gr = S;
        }
      }
    };
    return v;
  };
}
let Gr = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ut(t)}Modifiers`] || e[`${Ir(t)}Modifiers`];
function ac(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ae;
  let a = r;
  const i = t.startsWith("update:"), o = i && nc(n, t.slice(7));
  o && (o.trim && (a = r.map((y) => Fe(y) ? y.trim() : y)), o.number && (a = a.map(sa)));
  let u, h = n[u = Sa(t)] || // also try camelCase event handler (#2249)
  n[u = Sa(Ut(t))];
  !h && i && (h = n[u = Sa(Ir(t))]), h && $t(
    h,
    e,
    6,
    a
  );
  const v = n[u + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, $t(
      v,
      e,
      6,
      a
    );
  }
}
const ic = /* @__PURE__ */ new WeakMap();
function ul(e, t, r = !1) {
  const n = r ? ic : t.emitsCache, a = n.get(e);
  if (a !== void 0)
    return a;
  const i = e.emits;
  let o = {}, u = !1;
  if (!ue(e)) {
    const h = (v) => {
      const y = ul(v, t, !0);
      y && (u = !0, tt(o, y));
    };
    !r && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  return !i && !u ? (Te(e) && n.set(e, null), null) : (re(i) ? i.forEach((h) => o[h] = null) : tt(o, i), Te(e) && n.set(e, o), o);
}
function fa(e, t) {
  return !e || !na(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ee(e, t[0].toLowerCase() + t.slice(1)) || Ee(e, Ir(t)) || Ee(e, t));
}
function Fi(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: a,
    propsOptions: [i],
    slots: o,
    attrs: u,
    emit: h,
    render: v,
    renderCache: y,
    props: S,
    data: I,
    setupState: j,
    ctx: ie,
    inheritAttrs: W
  } = e, ce = Xn(e);
  let se, z;
  try {
    if (r.shapeFlag & 4) {
      const V = a || n, oe = V;
      se = Gt(
        v.call(
          oe,
          V,
          y,
          S,
          j,
          I,
          ie
        )
      ), z = u;
    } else {
      const V = t;
      se = Gt(
        V.length > 1 ? V(
          S,
          { attrs: u, slots: o, emit: h }
        ) : V(
          S,
          null
        )
      ), z = t.props ? u : sc(u);
    }
  } catch (V) {
    Nr.length = 0, ca(V, e, 1), se = lr(dr);
  }
  let L = se;
  if (z && W !== !1) {
    const V = Object.keys(z), { shapeFlag: oe } = L;
    V.length && oe & 7 && (i && V.some(aa) && (z = lc(
      z,
      i
    )), L = Xr(L, z, !1, !0));
  }
  if (r.dirs && (L = Xr(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = ua(L.type) && tl(L) || L;
    mi(V, r.transition);
  }
  return se = L, Xn(ce), se;
}
const sc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || na(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, lc = (e, t) => {
  const r = {};
  for (const n in e)
    (!aa(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function oc(e, t, r) {
  const { props: n, children: a, component: i } = e, { props: o, children: u, patchFlag: h } = t, v = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && h >= 0) {
    if (h & 1024)
      return !0;
    if (h & 16)
      return n ? $i(n, o, v) : !!o;
    if (h & 8) {
      const y = t.dynamicProps;
      for (let S = 0; S < y.length; S++) {
        const I = y[S];
        if (dl(o, n, I) && !fa(v, I))
          return !0;
      }
    }
  } else
    return (a || u) && (!u || !u.$stable) ? !0 : n === o ? !1 : n ? o ? $i(n, o, v) : !0 : !!o;
  return !1;
}
function $i(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < n.length; a++) {
    const i = n[a];
    if (dl(t, e, i) && !fa(r, i))
      return !0;
  }
  return !1;
}
function dl(e, t, r) {
  const n = e[r], a = t[r];
  return r === "style" && Te(n) && Te(a) ? !gr(n, a) : n !== a;
}
function cc({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = n, e = a), a === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const fl = {}, pl = () => Object.create(fl), hl = (e) => Object.getPrototypeOf(e) === fl;
function uc(e, t, r, n = !1) {
  const a = {}, i = pl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ml(e, t, a, i);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  r ? e.props = n ? a : /* @__PURE__ */ _o(a) : e.type.props ? e.props = a : e.props = i, e.attrs = i;
}
function dc(e, t, r, n) {
  const {
    props: a,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, u = /* @__PURE__ */ Se(a), [h] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const y = e.vnode.dynamicProps;
      for (let S = 0; S < y.length; S++) {
        let I = y[S];
        if (fa(e.emitsOptions, I))
          continue;
        const j = t[I];
        if (h)
          if (Ee(i, I))
            j !== i[I] && (i[I] = j, v = !0);
          else {
            const ie = Ut(I);
            a[ie] = Qa(
              h,
              u,
              ie,
              j,
              e,
              !1
            );
          }
        else
          j !== i[I] && (i[I] = j, v = !0);
      }
    }
  } else {
    ml(e, t, a, i) && (v = !0);
    let y;
    for (const S in u)
      (!t || // for camelCase
      !Ee(t, S) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Ir(S)) === S || !Ee(t, y))) && (h ? r && // for camelCase
      (r[S] !== void 0 || // for kebab-case
      r[y] !== void 0) && (a[S] = Qa(
        h,
        u,
        S,
        void 0,
        e,
        !0
      )) : delete a[S]);
    if (i !== u)
      for (const S in i)
        (!t || !Ee(t, S)) && (delete i[S], v = !0);
  }
  v && ir(e.attrs, "set", "");
}
function ml(e, t, r, n) {
  const [a, i] = e.propsOptions;
  let o = !1, u;
  if (t)
    for (let h in t) {
      if (pn(h))
        continue;
      const v = t[h];
      let y;
      a && Ee(a, y = Ut(h)) ? !i || !i.includes(y) ? r[y] = v : (u || (u = {}))[y] = v : fa(e.emitsOptions, h) || (!(h in n) || v !== n[h]) && (n[h] = v, o = !0);
    }
  if (i) {
    const h = /* @__PURE__ */ Se(r), v = u || Ae;
    for (let y = 0; y < i.length; y++) {
      const S = i[y];
      r[S] = Qa(
        a,
        h,
        S,
        v[S],
        e,
        !Ee(v, S)
      );
    }
  }
  return o;
}
function Qa(e, t, r, n, a, i) {
  const o = e[r];
  if (o != null) {
    const u = Ee(o, "default");
    if (u && n === void 0) {
      const h = o.default;
      if (o.type !== Function && !o.skipFactory && ue(h)) {
        const { propsDefaults: v } = a;
        if (r in v)
          n = v[r];
        else {
          const y = An(a);
          n = v[r] = h.call(
            null,
            t
          ), y();
        }
      } else
        n = h;
      a.ce && a.ce._setProp(r, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !u ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Ir(r)) && (n = !0));
  }
  return n;
}
const fc = /* @__PURE__ */ new WeakMap();
function bl(e, t, r = !1) {
  const n = r ? fc : t.propsCache, a = n.get(e);
  if (a)
    return a;
  const i = e.props, o = {}, u = [];
  let h = !1;
  if (!ue(e)) {
    const y = (S) => {
      h = !0;
      const [I, j] = bl(S, t, !0);
      tt(o, I), j && u.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!i && !h)
    return Te(e) && n.set(e, zr), zr;
  if (re(i))
    for (let y = 0; y < i.length; y++) {
      const S = Ut(i[y]);
      Hi(S) && (o[S] = Ae);
    }
  else if (i)
    for (const y in i) {
      const S = Ut(y);
      if (Hi(S)) {
        const I = i[y], j = o[S] = re(I) || ue(I) ? { type: I } : tt({}, I), ie = j.type;
        let W = !1, ce = !0;
        if (re(ie))
          for (let se = 0; se < ie.length; ++se) {
            const z = ie[se], L = ue(z) && z.name;
            if (L === "Boolean") {
              W = !0;
              break;
            } else L === "String" && (ce = !1);
          }
        else
          W = ue(ie) && ie.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = W, j[
          1
          /* shouldCastTrue */
        ] = ce, (W || Ee(j, "default")) && u.push(S);
      }
    }
  const v = [o, u];
  return Te(e) && n.set(e, v), v;
}
function Hi(e) {
  return e[0] !== "$" && !pn(e);
}
const yi = (e) => e === "_" || e === "_ctx" || e === "$stable", gi = (e) => re(e) ? e.map(Gt) : [Gt(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = No((...a) => gi(t(...a)), r);
  return n._c = !1, n;
}, yl = (e, t, r) => {
  const n = e._ctx;
  for (const a in e) {
    if (yi(a)) continue;
    const i = e[a];
    if (ue(i))
      t[a] = pc(a, i, n);
    else if (i != null) {
      const o = gi(i);
      t[a] = () => o;
    }
  }
}, gl = (e, t) => {
  const r = gi(t);
  e.slots.default = () => r;
}, _l = (e, t, r) => {
  for (const n in t)
    (r || !yi(n)) && (e[n] = t[n]);
}, hc = (e, t, r) => {
  const n = e.slots = pl();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (_l(n, t, r), r && ks(n, "_", a, !0)) : yl(t, n);
  } else t && gl(e, t);
}, mc = (e, t, r) => {
  const { vnode: n, slots: a } = e;
  let i = !0, o = Ae;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? r && u === 1 ? i = !1 : _l(a, t, r) : (i = !t.$stable, yl(t, a)), o = t;
  } else t && (gl(e, t), o = { default: 1 });
  if (i)
    for (const u in a)
      !yi(u) && o[u] == null && delete a[u];
}, yt = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = la();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: a,
    patchProp: i,
    createElement: o,
    createText: u,
    createComment: h,
    setText: v,
    setElementText: y,
    parentNode: S,
    nextSibling: I,
    setScopeId: j = Yt,
    insertStaticContent: ie
  } = e, W = (m, b, _, O = null, T = null, k = null, M = void 0, D = null, U = !!b.dynamicChildren) => {
    if (m === b)
      return;
    m && !an(m, b) && (O = ft(m), ze(m, T, k, !0), m = null), b.patchFlag === -2 && (U = !1, b.dynamicChildren = null);
    const { type: A, ref: K, shapeFlag: $ } = b;
    switch (A) {
      case pa:
        ce(m, b, _, O);
        break;
      case dr:
        se(m, b, _, O);
        break;
      case Na:
        m == null && z(b, _, O, M);
        break;
      case ee:
        dt(
          m,
          b,
          _,
          O,
          T,
          k,
          M,
          D,
          U
        );
        break;
      default:
        $ & 1 ? oe(
          m,
          b,
          _,
          O,
          T,
          k,
          M,
          D,
          U
        ) : $ & 6 ? Ye(
          m,
          b,
          _,
          O,
          T,
          k,
          M,
          D,
          U
        ) : ($ & 64 || $ & 128) && A.process(
          m,
          b,
          _,
          O,
          T,
          k,
          M,
          D,
          U,
          nt
        );
    }
    K != null && T ? bn(K, m && m.ref, k, b || m, !b) : K == null && m && m.ref != null && bn(m.ref, null, k, m, !0);
  }, ce = (m, b, _, O) => {
    if (m == null)
      n(
        b.el = u(b.children),
        _,
        O
      );
    else {
      const T = b.el = m.el;
      b.children !== m.children && v(T, b.children);
    }
  }, se = (m, b, _, O) => {
    m == null ? n(
      b.el = h(b.children || ""),
      _,
      O
    ) : b.el = m.el;
  }, z = (m, b, _, O) => {
    [m.el, m.anchor] = ie(
      m.children,
      b,
      _,
      O,
      m.el,
      m.anchor
    );
  }, L = ({ el: m, anchor: b }, _, O) => {
    let T;
    for (; m && m !== b; )
      T = I(m), n(m, _, O), m = T;
    n(b, _, O);
  }, V = ({ el: m, anchor: b }) => {
    let _;
    for (; m && m !== b; )
      _ = I(m), a(m), m = _;
    a(b);
  }, oe = (m, b, _, O, T, k, M, D, U) => {
    if (b.type === "svg" ? M = "svg" : b.type === "math" && (M = "mathml"), m == null)
      Le(
        b,
        _,
        O,
        T,
        k,
        M,
        D,
        U
      );
    else {
      const A = m.el && m.el._isVueCE ? m.el : null;
      try {
        A && A._beginPatch(), Ce(
          m,
          b,
          T,
          k,
          M,
          D,
          U
        );
      } finally {
        A && A._endPatch();
      }
    }
  }, Le = (m, b, _, O, T, k, M, D) => {
    let U, A;
    const { props: K, shapeFlag: $, transition: G, dirs: Z } = m;
    if (U = m.el = o(
      m.type,
      k,
      K && K.is,
      K
    ), $ & 8 ? y(U, m.children) : $ & 16 && Be(
      m.children,
      U,
      null,
      O,
      T,
      Oa(m, k),
      M,
      D
    ), Z && Sr(m, null, O, "created"), Ne(U, m, m.scopeId, M, O), K) {
      for (const P in K)
        P !== "value" && !pn(P) && i(U, P, null, K[P], k, O);
      "value" in K && i(U, "value", null, K.value, k), (A = K.onVnodeBeforeMount) && qt(A, O, m);
    }
    Z && Sr(m, null, O, "beforeMount");
    const Q = gc(T, G);
    Q && G.beforeEnter(U), n(U, b, _), ((A = K && K.onVnodeMounted) || Q || Z) && yt(() => {
      A && qt(A, O, m), Q && G.enter(U), Z && Sr(m, null, O, "mounted");
    }, T);
  }, Ne = (m, b, _, O, T) => {
    if (_ && j(m, _), O)
      for (let k = 0; k < O.length; k++)
        j(m, O[k]);
    if (T) {
      let k = T.subTree;
      if (b === k || El(k.type) && (k.ssContent === b || k.ssFallback === b)) {
        const M = T.vnode;
        Ne(
          m,
          M,
          M.scopeId,
          M.slotScopeIds,
          T.parent
        );
      }
    }
  }, Be = (m, b, _, O, T, k, M, D, U = 0) => {
    for (let A = U; A < m.length; A++) {
      const K = m[A] = D ? ar(m[A]) : Gt(m[A]);
      W(
        null,
        K,
        b,
        _,
        O,
        T,
        k,
        M,
        D
      );
    }
  }, Ce = (m, b, _, O, T, k, M) => {
    const D = b.el = m.el;
    let { patchFlag: U, dynamicChildren: A, dirs: K } = b;
    U |= m.patchFlag & 16;
    const $ = m.props || Ae, G = b.props || Ae;
    let Z;
    if (_ && Er(_, !1), (Z = G.onVnodeBeforeUpdate) && qt(Z, _, b, m), K && Sr(b, m, _, "beforeUpdate"), _ && Er(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    A && (!m.dynamicChildren || m.dynamicChildren.length !== A.length) && (U = 0, M = !1, A = null), ($.innerHTML && G.innerHTML == null || $.textContent && G.textContent == null) && y(D, ""), A ? Me(
      m.dynamicChildren,
      A,
      D,
      _,
      O,
      Oa(b, T),
      k
    ) : M || de(
      m,
      b,
      D,
      null,
      _,
      O,
      Oa(b, T),
      k,
      !1
    ), U > 0) {
      if (U & 16)
        rt(D, $, G, _, T);
      else if (U & 2 && $.class !== G.class && i(D, "class", null, G.class, T), U & 4 && i(D, "style", $.style, G.style, T), U & 8) {
        const Q = b.dynamicProps;
        for (let P = 0; P < Q.length; P++) {
          const N = Q[P], H = $[N], te = G[N];
          (te !== H || N === "value") && i(D, N, H, te, T, _);
        }
      }
      U & 1 && m.children !== b.children && y(D, b.children);
    } else !M && A == null && rt(D, $, G, _, T);
    ((Z = G.onVnodeUpdated) || K) && yt(() => {
      Z && qt(Z, _, b, m), K && Sr(b, m, _, "updated");
    }, O);
  }, Me = (m, b, _, O, T, k, M) => {
    for (let D = 0; D < b.length; D++) {
      const U = m[D], A = b[D], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        U.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (U.type === ee || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !an(U, A) || // - In the case of a component, it could contain anything.
        U.shapeFlag & 198) ? S(U.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      W(
        U,
        A,
        K,
        null,
        O,
        T,
        k,
        M,
        !0
      );
    }
  }, rt = (m, b, _, O, T) => {
    if (b !== _) {
      if (b !== Ae)
        for (const k in b)
          !pn(k) && !(k in _) && i(
            m,
            k,
            b[k],
            null,
            T,
            O
          );
      for (const k in _) {
        if (pn(k)) continue;
        const M = _[k], D = b[k];
        M !== D && k !== "value" && i(m, k, D, M, T, O);
      }
      "value" in _ && i(m, "value", b.value, _.value, T);
    }
  }, dt = (m, b, _, O, T, k, M, D, U) => {
    const A = b.el = m ? m.el : u(""), K = b.anchor = m ? m.anchor : u("");
    let { patchFlag: $, dynamicChildren: G, slotScopeIds: Z } = b;
    Z && (D = D ? D.concat(Z) : Z), m == null ? (n(A, _, O), n(K, _, O), Be(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      _,
      K,
      T,
      k,
      M,
      D,
      U
    )) : $ > 0 && $ & 64 && G && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === G.length ? (Me(
      m.dynamicChildren,
      G,
      _,
      T,
      k,
      M,
      D
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || T && b === T.subTree) && vl(
      m,
      b,
      !0
      /* shallow */
    )) : de(
      m,
      b,
      _,
      K,
      T,
      k,
      M,
      D,
      U
    );
  }, Ye = (m, b, _, O, T, k, M, D, U) => {
    b.slotScopeIds = D, m == null ? b.shapeFlag & 512 ? T.ctx.activate(
      b,
      _,
      O,
      M,
      U
    ) : xt(
      b,
      _,
      O,
      T,
      k,
      M,
      U
    ) : $e(m, b, U);
  }, xt = (m, b, _, O, T, k, M) => {
    const D = m.component = Ac(
      m,
      O,
      T
    );
    if (bi(m) && (D.ctx.renderer = nt), Rc(D, !1, M), D.asyncDep) {
      if (T && T.registerDep(D, Ue, M), !m.el) {
        const U = D.subTree = lr(dr);
        se(null, U, b, _), m.placeholder = U.el;
      }
    } else
      Ue(
        D,
        m,
        b,
        _,
        T,
        k,
        M
      );
  }, $e = (m, b, _) => {
    const O = b.component = m.component;
    if (oc(m, b, _))
      if (O.asyncDep && !O.asyncResolved) {
        _e(O, b, _);
        return;
      } else
        O.next = b, O.update();
    else
      b.el = m.el, O.vnode = b;
  }, Ue = (m, b, _, O, T, k, M) => {
    const D = () => {
      if (m.isMounted) {
        let { next: $, bu: G, u: Z, parent: Q, vnode: P } = m;
        {
          const ye = wl(m);
          if (ye) {
            $ && ($.el = P.el, _e(m, $, M)), ye.asyncDep.then(() => {
              yt(() => {
                m.isUnmounted || A();
              }, T);
            });
            return;
          }
        }
        let N = $, H;
        Er(m, !1), $ ? ($.el = P.el, _e(m, $, M)) : $ = P, G && qn(G), (H = $.props && $.props.onVnodeBeforeUpdate) && qt(H, Q, $, P), Er(m, !0);
        const te = Fi(m), le = m.subTree;
        m.subTree = te, W(
          le,
          te,
          // parent may have changed if it's in a teleport
          S(le.el),
          // anchor may have changed if it's in a fragment
          ft(le),
          m,
          T,
          k
        ), $.el = te.el, N === null && cc(m, te.el), Z && yt(Z, T), (H = $.props && $.props.onVnodeUpdated) && yt(
          () => qt(H, Q, $, P),
          T
        );
      } else {
        let $;
        const { el: G, props: Z } = b, { bm: Q, m: P, parent: N, root: H, type: te } = m, le = yn(b);
        Er(m, !1), Q && qn(Q), !le && ($ = Z && Z.onVnodeBeforeMount) && qt($, N, b), Er(m, !0);
        {
          H.ce && H.ce._hasShadowRoot() && H.ce._injectChildStyle(
            te,
            m.parent ? m.parent.type : void 0
          );
          const ye = m.subTree = Fi(m);
          W(
            null,
            ye,
            _,
            O,
            m,
            T,
            k
          ), b.el = ye.el;
        }
        if (P && yt(P, T), !le && ($ = Z && Z.onVnodeMounted)) {
          const ye = b;
          yt(
            () => qt($, N, ye),
            T
          );
        }
        (b.shapeFlag & 256 || N && yn(N.vnode) && N.vnode.shapeFlag & 256) && m.a && yt(m.a, T), m.isMounted = !0, b = _ = O = null;
      }
    };
    m.scope.on();
    const U = m.effect = new Ps(D);
    m.scope.off();
    const A = m.update = U.run.bind(U), K = m.job = U.runIfDirty.bind(U);
    K.i = m, K.id = m.uid, U.scheduler = () => hi(K), Er(m, !0), A();
  }, _e = (m, b, _) => {
    b.component = m;
    const O = m.vnode.props;
    m.vnode = b, m.next = null, dc(m, b.props, O, _), mc(m, b.children, _), or(), Ni(m), cr();
  }, de = (m, b, _, O, T, k, M, D, U = !1) => {
    const A = m && m.children, K = m ? m.shapeFlag : 0, $ = b.children, { patchFlag: G, shapeFlag: Z } = b;
    if (G > 0) {
      if (G & 128) {
        ve(
          A,
          $,
          _,
          O,
          T,
          k,
          M,
          D,
          U
        );
        return;
      } else if (G & 256) {
        qe(
          A,
          $,
          _,
          O,
          T,
          k,
          M,
          D,
          U
        );
        return;
      }
    }
    Z & 8 ? (K & 16 && We(A, T, k), $ !== A && y(_, $)) : K & 16 ? Z & 16 ? ve(
      A,
      $,
      _,
      O,
      T,
      k,
      M,
      D,
      U
    ) : We(A, T, k, !0) : (K & 8 && y(_, ""), Z & 16 && Be(
      $,
      _,
      O,
      T,
      k,
      M,
      D,
      U
    ));
  }, qe = (m, b, _, O, T, k, M, D, U) => {
    m = m || zr, b = b || zr;
    const A = m.length, K = b.length, $ = Math.min(A, K);
    let G;
    for (G = 0; G < $; G++) {
      const Z = b[G] = U ? ar(b[G]) : Gt(b[G]);
      W(
        m[G],
        Z,
        _,
        null,
        T,
        k,
        M,
        D,
        U
      );
    }
    A > K ? We(
      m,
      T,
      k,
      !0,
      !1,
      $
    ) : Be(
      b,
      _,
      O,
      T,
      k,
      M,
      D,
      U,
      $
    );
  }, ve = (m, b, _, O, T, k, M, D, U) => {
    let A = 0;
    const K = b.length;
    let $ = m.length - 1, G = K - 1;
    for (; A <= $ && A <= G; ) {
      const Z = m[A], Q = b[A] = U ? ar(b[A]) : Gt(b[A]);
      if (an(Z, Q))
        W(
          Z,
          Q,
          _,
          null,
          T,
          k,
          M,
          D,
          U
        );
      else
        break;
      A++;
    }
    for (; A <= $ && A <= G; ) {
      const Z = m[$], Q = b[G] = U ? ar(b[G]) : Gt(b[G]);
      if (an(Z, Q))
        W(
          Z,
          Q,
          _,
          null,
          T,
          k,
          M,
          D,
          U
        );
      else
        break;
      $--, G--;
    }
    if (A > $) {
      if (A <= G) {
        const Z = G + 1, Q = Z < K ? b[Z].el : O;
        for (; A <= G; )
          W(
            null,
            b[A] = U ? ar(b[A]) : Gt(b[A]),
            _,
            Q,
            T,
            k,
            M,
            D,
            U
          ), A++;
      }
    } else if (A > G)
      for (; A <= $; )
        ze(m[A], T, k, !0), A++;
    else {
      const Z = A, Q = A, P = /* @__PURE__ */ new Map();
      for (A = Q; A <= G; A++) {
        const we = b[A] = U ? ar(b[A]) : Gt(b[A]);
        we.key != null && P.set(we.key, A);
      }
      let N, H = 0;
      const te = G - Q + 1;
      let le = !1, ye = 0;
      const fe = new Array(te);
      for (A = 0; A < te; A++) fe[A] = 0;
      for (A = Z; A <= $; A++) {
        const we = m[A];
        if (H >= te) {
          ze(we, T, k, !0);
          continue;
        }
        let Pe;
        if (we.key != null)
          Pe = P.get(we.key);
        else
          for (N = Q; N <= G; N++)
            if (fe[N - Q] === 0 && an(we, b[N])) {
              Pe = N;
              break;
            }
        Pe === void 0 ? ze(we, T, k, !0) : (fe[Pe - Q] = A + 1, Pe >= ye ? ye = Pe : le = !0, W(
          we,
          b[Pe],
          _,
          null,
          T,
          k,
          M,
          D,
          U
        ), H++);
      }
      const De = le ? _c(fe) : zr;
      for (N = De.length - 1, A = te - 1; A >= 0; A--) {
        const we = Q + A, Pe = b[we], he = b[we + 1], pt = we + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          he.el || Sl(he)
        ) : O;
        fe[A] === 0 ? W(
          null,
          Pe,
          _,
          pt,
          T,
          k,
          M,
          D,
          U
        ) : le && (N < 0 || A !== De[N] ? xe(Pe, _, pt, 2) : N--);
      }
    }
  }, xe = (m, b, _, O, T = null) => {
    const { el: k, type: M, transition: D, children: U, shapeFlag: A } = m;
    if (A & 6) {
      xe(m.component.subTree, b, _, O);
      return;
    }
    if (A & 128) {
      m.suspense.move(b, _, O);
      return;
    }
    if (A & 64) {
      M.move(m, b, _, nt);
      return;
    }
    if (M === ee) {
      n(k, b, _);
      for (let $ = 0; $ < U.length; $++)
        xe(U[$], b, _, O);
      n(m.anchor, b, _);
      return;
    }
    if (M === Na) {
      L(m, b, _);
      return;
    }
    if (O !== 2 && A & 1 && D)
      if (O === 0)
        D.persisted && !k[ka] ? n(k, b, _) : (D.beforeEnter(k), n(k, b, _), yt(() => D.enter(k), T));
      else {
        const { leave: $, delayLeave: G, afterLeave: Z } = D, Q = () => {
          m.ctx.isUnmounted ? a(k) : n(k, b, _);
        }, P = () => {
          const N = k._isLeaving || !!k[ka];
          k._isLeaving && k[ka](
            !0
            /* cancelled */
          ), D.persisted && !N ? Q() : $(k, () => {
            Q(), Z && Z();
          });
        };
        G ? G(k, Q, P) : P();
      }
    else
      n(k, b, _);
  }, ze = (m, b, _, O = !1, T = !1) => {
    const {
      type: k,
      props: M,
      ref: D,
      children: U,
      dynamicChildren: A,
      shapeFlag: K,
      patchFlag: $,
      dirs: G,
      cacheIndex: Z,
      memo: Q
    } = m;
    if ($ === -2 && (T = !1), D != null && (or(), bn(D, null, _, m, !0), cr()), Z != null && (b.renderCache[Z] = void 0), K & 256) {
      b.ctx.deactivate(m);
      return;
    }
    const P = K & 1 && G, N = !yn(m);
    let H;
    if (N && (H = M && M.onVnodeBeforeUnmount) && qt(H, b, m), K & 6)
      Nt(m.component, _, O);
    else {
      if (K & 128) {
        m.suspense.unmount(_, O);
        return;
      }
      P && Sr(m, null, b, "beforeUnmount"), K & 64 ? m.type.remove(
        m,
        b,
        _,
        nt,
        O
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== ee || $ > 0 && $ & 64) ? We(
        A,
        b,
        _,
        !1,
        !0
      ) : (k === ee && $ & 384 || !T && K & 16) && We(U, b, _), O && Je(m);
    }
    const te = Q != null && Z == null;
    (N && (H = M && M.onVnodeUnmounted) || P || te) && yt(() => {
      H && qt(H, b, m), P && Sr(m, null, b, "unmounted"), te && (m.el = null);
    }, _);
  }, Je = (m) => {
    const { type: b, el: _, anchor: O, transition: T } = m;
    if (b === ee) {
      be(_, O);
      return;
    }
    if (b === Na) {
      V(m);
      return;
    }
    const k = () => {
      a(_), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (m.shapeFlag & 1 && T && !T.persisted) {
      const { leave: M, delayLeave: D } = T, U = () => M(_, k);
      D ? D(m.el, k, U) : U();
    } else
      k();
  }, be = (m, b) => {
    let _;
    for (; m !== b; )
      _ = I(m), a(m), m = _;
    a(b);
  }, Nt = (m, b, _) => {
    const { bum: O, scope: T, job: k, subTree: M, um: D, m: U, a: A } = m;
    ji(U), ji(A), O && qn(O), T.stop(), k && (k.flags |= 8, ze(M, m, b, _)), D && yt(D, b), yt(() => {
      m.isUnmounted = !0;
    }, b);
  }, We = (m, b, _, O = !1, T = !1, k = 0) => {
    for (let M = k; M < m.length; M++)
      ze(m[M], b, _, O, T);
  }, ft = (m) => {
    if (m.shapeFlag & 6)
      return ft(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const b = I(m.anchor || m.el), _ = b && b[Uo];
    return _ ? I(_) : b;
  };
  let _t = !1;
  const At = (m, b, _) => {
    let O;
    m == null ? b._vnode && (ze(b._vnode, null, null, !0), O = b._vnode.component) : W(
      b._vnode || null,
      m,
      b,
      null,
      null,
      null,
      _
    ), b._vnode = m, _t || (_t = !0, Ni(O), Xs(), _t = !1);
  }, nt = {
    p: W,
    um: ze,
    m: xe,
    r: Je,
    mt: xt,
    mc: Be,
    pc: de,
    pbc: Me,
    n: ft,
    o: e
  };
  return {
    render: At,
    hydrate: void 0,
    createApp: rc(At)
  };
}
function Oa({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Er({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function vl(e, t, r = !1) {
  const n = e.children, a = t.children;
  if (re(n) && re(a))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let u = a[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = a[i] = ar(a[i]), u.el = o.el), !r && u.patchFlag !== -2 && vl(o, u)), u.type === pa && (u.patchFlag === -1 && (u = a[i] = ar(u)), u.el = o.el), u.type === dr && !u.el && (u.el = o.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, a, i, o, u;
  const h = e.length;
  for (n = 0; n < h; n++) {
    const v = e[n];
    if (v !== 0) {
      if (a = r[r.length - 1], e[a] < v) {
        t[n] = a, r.push(n);
        continue;
      }
      for (i = 0, o = r.length - 1; i < o; )
        u = i + o >> 1, e[r[u]] < v ? i = u + 1 : o = u;
      v < e[r[i]] && (i > 0 && (t[n] = r[i - 1]), r[i] = n);
    }
  }
  for (i = r.length, o = r[i - 1]; i-- > 0; )
    r[i] = o, o = t[o];
  return r;
}
function wl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : wl(t);
}
function ji(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Sl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Sl(t.subTree) : null;
}
const El = (e) => e.__isSuspense;
function vc(e, t) {
  t && t.pendingBranch ? re(e) ? t.effects.push(...e) : t.effects.push(e) : Oo(e);
}
const ee = /* @__PURE__ */ Symbol.for("v-fgt"), pa = /* @__PURE__ */ Symbol.for("v-txt"), dr = /* @__PURE__ */ Symbol.for("v-cmt"), Na = /* @__PURE__ */ Symbol.for("v-stc"), Nr = [];
let Tt = null;
function w(e = !1) {
  Nr.push(Tt = e ? null : []);
}
function Cl() {
  Nr.pop(), Tt = Nr[Nr.length - 1] || null;
}
let Sn = 1;
function Vi(e, t = !1) {
  Sn += e, e < 0 && Tt && t && (Tt.hasOnce = !0);
}
function Tl(e) {
  return e.dynamicChildren = Sn > 0 ? Tt || zr : null, Cl(), Sn > 0 && Tt && Tt.push(e), e;
}
function E(e, t, r, n, a, i) {
  return Tl(
    s(
      e,
      t,
      r,
      n,
      a,
      i,
      !0
    )
  );
}
function wc(e, t, r, n, a) {
  return Tl(
    lr(
      e,
      t,
      r,
      n,
      a,
      !0
    )
  );
}
function xl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function an(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Al = ({ key: e }) => e ?? null, Wn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Fe(e) || /* @__PURE__ */ et(e) || ue(e) ? { i: Rt, r: e, k: t, f: !!r } : e : null);
function s(e, t = null, r = null, n = 0, a = null, i = e === ee ? 0 : 1, o = !1, u = !1) {
  const h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Al(t),
    ref: t && Wn(t),
    scopeId: Zs,
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
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: Rt
  };
  return u ? (Qn(h, r), i & 128 && e.normalize(h)) : r && (h.shapeFlag |= Fe(r) ? 8 : 16), Sn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Tt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (h.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  h.patchFlag !== 32 && Tt.push(h), h;
}
const lr = Sc;
function Sc(e, t = null, r = null, n = 0, a = null, i = !1) {
  if ((!e || e === Ko) && (e = dr), xl(e)) {
    const u = Xr(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Qn(u, r), Sn > 0 && !i && Tt && (u.shapeFlag & 6 ? Tt[Tt.indexOf(e)] = u : Tt.push(u)), u.patchFlag = -2, u;
  }
  if (Ic(e) && (e = e.__vccOpts), t) {
    t = Ec(t);
    let { class: u, style: h } = t;
    u && !Fe(u) && (t.class = Mt(u)), Te(h) && (/* @__PURE__ */ pi(h) && !re(h) && (h = tt({}, h)), t.style = si(h));
  }
  const o = Fe(e) ? 1 : El(e) ? 128 : ua(e) ? 64 : Te(e) ? 4 : ue(e) ? 2 : 0;
  return s(
    e,
    t,
    r,
    n,
    a,
    o,
    i,
    !0
  );
}
function Ec(e) {
  return e ? /* @__PURE__ */ pi(e) || hl(e) ? tt({}, e) : e : null;
}
function Xr(e, t, r = !1, n = !1) {
  const { props: a, ref: i, patchFlag: o, children: u, transition: h } = e, v = t ? Cc(a || {}, t) : a, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Al(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && i ? re(i) ? i.concat(Wn(t)) : [i, Wn(t)] : Wn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: u,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ee ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: h,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Xr(e.ssContent),
    ssFallback: e.ssFallback && Xr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return h && n && mi(
    y,
    h.clone(y)
  ), y;
}
function pe(e = " ", t = 0) {
  return lr(pa, null, e, t);
}
function Y(e = "", t = !1) {
  return t ? (w(), wc(dr, null, e)) : lr(dr, null, e);
}
function Gt(e) {
  return e == null || typeof e == "boolean" ? lr(dr) : re(e) ? lr(
    ee,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : xl(e) ? ar(e) : lr(pa, null, String(e));
}
function ar(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xr(e);
}
function Qn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (re(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Qn(e, a()), a._c && (a._d = !0));
      return;
    } else {
      r = 32;
      const a = t._;
      !a && !hl(t) ? t._ctx = Rt : a === 3 && Rt && (Rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ue(t)) {
    if (n & 65) {
      Qn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Rt }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [pe(t)]) : r = 8;
  e.children = t, e.shapeFlag |= r;
}
function Cc(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const a in n)
      if (a === "class")
        t.class !== n.class && (t.class = Mt([t.class, n.class]));
      else if (a === "style")
        t.style = si([t.style, n.style]);
      else if (na(a)) {
        const i = t[a], o = n[a];
        o && i !== o && !(re(i) && i.includes(o)) ? t[a] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !aa(a) && (t[a] = o);
      } else a !== "" && (t[a] = n[a]);
  }
  return t;
}
function qt(e, t, r, n = null) {
  $t(e, t, 7, [
    r,
    n
  ]);
}
const Tc = cl();
let xc = 0;
function Ac(e, t, r) {
  const n = e.type, a = (t ? t.appContext : e.appContext) || Tc, i = {
    uid: xc++,
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
    scope: new Ql(
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
    propsOptions: bl(n, a),
    emitsOptions: ul(n, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ae,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Ae,
    data: Ae,
    props: Ae,
    attrs: Ae,
    slots: Ae,
    refs: Ae,
    setupState: Ae,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ac.bind(null, i), e.ce && e.ce(i), i;
}
let ut = null;
const kc = () => ut || Rt;
let ea, En;
{
  const e = la(), t = (r, n) => {
    let a;
    return (a = e[r]) || (a = e[r] = []), a.push(n), (i) => {
      a.length > 1 ? a.forEach((o) => o(i)) : a[0](i);
    };
  };
  ea = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ut = r
  ), En = t(
    "__VUE_SSR_SETTERS__",
    (r) => Cn = r
  );
}
const An = (e) => {
  const t = ut;
  return ea(e), e.scope.on(), () => {
    e.scope.off(), ea(t);
  };
}, Bi = () => {
  ut && ut.scope.off(), ea(null);
};
function kl(e) {
  return e.vnode.shapeFlag & 4;
}
let Cn = !1;
function Rc(e, t = !1, r = !1) {
  t && En(t);
  const { props: n, children: a } = e.vnode, i = kl(e);
  uc(e, n, i, t), hc(e, a, r || t);
  const o = i ? Oc(e, t) : void 0;
  return t && En(!1), o;
}
function Oc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yo);
  const { setup: n } = r;
  if (n) {
    or();
    const a = e.setupContext = n.length > 1 ? Pc(e) : null, i = An(e), o = xn(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    ), u = Cs(o);
    if (cr(), i(), (u || e.sp) && !yn(e) && rl(e), u) {
      if (o.then(Bi, Bi), t)
        return o.then((h) => {
          En(!0);
          try {
            qi(e, h, t);
          } finally {
            En(!1);
          }
        }).catch((h) => {
          ca(h, e, 0);
        });
      e.asyncDep = o;
    } else
      qi(e, o);
  } else
    Rl(e);
}
function qi(e, t, r) {
  ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Te(t) && (e.setupState = Ws(t)), Rl(e);
}
function Rl(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Yt);
  {
    const a = An(e);
    or();
    try {
      Xo(e);
    } finally {
      cr(), a();
    }
  }
}
const Nc = {
  get(e, t) {
    return Qe(e, "get", ""), e[t];
  }
};
function Pc(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Nc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ha(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ws(vo(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in gn)
        return gn[r](e);
    },
    has(t, r) {
      return r in t || r in gn;
    }
  })) : e.proxy;
}
function Ic(e) {
  return ue(e) && "__vccOpts" in e;
}
const q = (e, t) => /* @__PURE__ */ To(e, t, Cn), Lc = "3.5.42";
let ei;
const zi = typeof window < "u" && window.trustedTypes;
if (zi)
  try {
    ei = /* @__PURE__ */ zi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ol = ei ? (e) => ei.createHTML(e) : (e) => e, Mc = "http://www.w3.org/2000/svg", Uc = "http://www.w3.org/1998/Math/MathML", rr = typeof document < "u" ? document : null, Wi = rr && /* @__PURE__ */ rr.createElement("template"), Dc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const a = t === "svg" ? rr.createElementNS(Mc, e) : t === "mathml" ? rr.createElementNS(Uc, e) : r ? rr.createElement(e, { is: r }) : rr.createElement(e);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => rr.createTextNode(e),
  createComment: (e) => rr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => rr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, a, i) {
    const o = r ? r.previousSibling : t.lastChild;
    if (a && (a === i || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), r), !(a === i || !(a = a.nextSibling)); )
        ;
    else {
      Wi.innerHTML = Ol(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Wi.content;
      if (n === "svg" || n === "mathml") {
        const h = u.firstChild;
        for (; h.firstChild; )
          u.appendChild(h.firstChild);
        u.removeChild(h);
      }
      t.insertBefore(u, r);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, Fc = /* @__PURE__ */ Symbol("_vtc");
function $c(e, t, r) {
  const n = e[Fc];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Gi = /* @__PURE__ */ Symbol("_vod"), Hc = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function Bc(e, t, r) {
  const n = e.style, a = Fe(r);
  let i = !1;
  if (r && !a) {
    if (t)
      if (Fe(t))
        for (const o of t.split(";")) {
          const u = o.slice(0, o.indexOf(":")).trim();
          r[u] == null && dn(n, u, "");
        }
      else
        for (const o in t)
          r[o] == null && dn(n, o, "");
    for (const o in r) {
      o === "display" && (i = !0);
      const u = r[o];
      u != null ? zc(
        e,
        o,
        !Fe(t) && t ? t[o] : void 0,
        u
      ) || dn(n, o, u) : dn(n, o, "");
    }
  } else if (a) {
    if (t !== r) {
      const o = n[jc];
      o && (r += ";" + o), n.cssText = r, i = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  Gi in e && (e[Gi] = i ? n.display : "", e[Hc] && (n.display = "none"));
}
const Hn = /\s*!important$/;
function dn(e, t, r) {
  if (re(r))
    r.forEach((n) => dn(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    Hn.test(r) ? e.setProperty(t, r.replace(Hn, ""), "important") : e.setProperty(t, r);
  else {
    const n = qc(e, t);
    Hn.test(r) ? e.setProperty(
      Ir(n),
      r.replace(Hn, ""),
      "important"
    ) : e[n] = r;
  }
}
const Ki = ["Webkit", "Moz", "ms"], Pa = {};
function qc(e, t) {
  const r = Pa[t];
  if (r)
    return r;
  let n = Ut(t);
  if (n !== "filter" && n in e)
    return Pa[t] = n;
  n = As(n);
  for (let a = 0; a < Ki.length; a++) {
    const i = Ki[a] + n;
    if (i in e)
      return Pa[t] = i;
  }
  return t;
}
function zc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Fe(n) && r === n;
}
const Yi = "http://www.w3.org/1999/xlink";
function Xi(e, t, r, n, a, i = Xl(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Yi, t.slice(6, t.length)) : e.setAttributeNS(Yi, t, r) : r == null || i && !Rs(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Xt(r) ? String(r) : r
  );
}
function Ji(e, t, r, n, a) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Ol(r) : r);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const u = i === "OPTION" ? e.getAttribute("value") || "" : e.value, h = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (u !== h || !("_value" in e)) && (e.value = h), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let o = !1;
  if (r === "" || r == null) {
    const u = typeof e[t];
    u === "boolean" ? r = Rs(r) : r == null && u === "string" ? (r = "", o = !0) : u === "number" && (r = 0, o = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function Ar(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Wc(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Zi = /* @__PURE__ */ Symbol("_vei");
function Gc(e, t, r, n, a = null) {
  const i = e[Zi] || (e[Zi] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [u, h] = Xc(t);
    if (n) {
      const v = i[t] = Qc(
        n,
        a
      );
      Ar(e, u, v, h);
    } else o && (Wc(e, u, o, h), i[t] = void 0);
  }
}
const Kc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Kc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ir(e.slice(2)), t];
}
let Ia = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => Ia || (Jc.then(() => Ia = 0), Ia = Date.now());
function Qc(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    const a = r.value;
    if (re(a)) {
      const i = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        i.call(n), n._stopped = !0;
      };
      const o = a.slice(), u = [n];
      for (let h = 0; h < o.length && !n._stopped; h++) {
        const v = o[h];
        v && $t(
          v,
          t,
          5,
          u
        );
      }
    } else
      $t(
        a,
        t,
        5,
        [n]
      );
  };
  return r.value = e, r.attached = Zc(), r;
}
const Qi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eu = (e, t, r, n, a, i) => {
  const o = a === "svg";
  t === "class" ? $c(e, n, o) : t === "style" ? Bc(e, r, n) : na(t) ? aa(t) || Gc(e, t, r, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, o)) ? (Ji(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Xi(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Fe(n))) ? Ji(e, Ut(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Xi(e, t, n, o));
};
function tu(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qi(t) && ue(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Qi(t) && Fe(r) ? !1 : t in e;
}
function ru(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Ut(t);
  return Array.isArray(r) ? r.some((a) => Ut(a) === n) : Object.keys(r).some((a) => Ut(a) === n);
}
const ta = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return re(t) ? (r) => qn(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function es(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const kr = /* @__PURE__ */ Symbol("_assign"), jn = /* @__PURE__ */ Symbol("_initialValue");
function La(e, t, r) {
  return t && (e = e.trim()), r && (e = sa(e)), e;
}
const Ma = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, a) {
    e.parentNode && (e.type === "text" ? e[jn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[jn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[kr] = ta(a);
    const i = n || a.props && a.props.type === "number";
    Ar(e, t ? "change" : "input", (o) => {
      o.target.composing || e[kr](La(e.value, r, i));
    }), (r || i) && Ar(e, "change", () => {
      e.value = La(e.value, r, i);
    }), t || (Ar(e, "compositionstart", nu), Ar(e, "compositionend", es), Ar(e, "change", es));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const a = t ?? "", i = e[jn];
    delete e[jn], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[kr](La(e.value, r, n)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: a, number: i } }, o) {
    if (e[kr] = ta(o), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? sa(e.value) : e.value, h = t ?? "";
    if (u === h)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === r || a && e.value.trim() === h) || (e.value = h);
  }
}, lt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, Ar(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (h) => h.selected).map(
        (h) => r ? sa(ra(h)) : ra(h)
      ), i = e.multiple, o = i ? Pr(e._modelValue) ? new Set(a) : a : a[0], u = e._pendingValue = [
        i,
        i ? re(o) ? a.slice() : a : o
      ];
      try {
        e[kr](o);
      } finally {
        Ks(() => {
          e._pendingValue === u && (e._pendingValue = void 0);
        });
      }
    }), e[kr] = ta(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ts(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[kr] = ta(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !au(t, r[1], r[0])) && ts(e, t);
  }
};
function au(e, t, r) {
  if (!r || re(e)) return gr(e, t);
  if (Pr(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function ts(e, t) {
  const r = e.multiple, n = re(t);
  if (!(r && !n && !Pr(t))) {
    for (let a = 0, i = e.options.length; a < i; a++) {
      const o = e.options[a], u = ra(o);
      if (r)
        if (n) {
          const h = typeof u;
          h === "string" || h === "number" ? o.selected = t.some((v) => String(v) === String(u)) : o.selected = Zl(t, u) > -1;
        } else
          o.selected = t.has(u);
      else if (gr(ra(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function ra(e) {
  return "_value" in e ? e._value : e.value;
}
const iu = ["ctrl", "shift", "alt", "meta"], su = {
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
  exact: (e, t) => iu.some((r) => e[`${r}Key`] && !t.includes(r))
}, Vn = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((a, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const u = su[t[o]];
      if (u && u(a, t)) return;
    }
    return e(a, ...i);
  }));
}, lu = /* @__PURE__ */ tt({ patchProp: eu }, Dc);
let rs;
function ou() {
  return rs || (rs = bc(lu));
}
const cu = ((...e) => {
  const t = ou().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const a = du(n);
    if (!a) return;
    const i = t._component;
    !ue(i) && !i.render && !i.template && (i.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = r(a, !1, uu(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
});
function uu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function du(e) {
  return Fe(e) ? document.querySelector(e) : e;
}
function fu(e, t, r) {
  const n = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(n))
    return window._nc_initial_state.get(n);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const a = document.querySelector(n);
  if (a === null) {
    if (r !== void 0)
      return r;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const i = JSON.parse(atob(a.value));
    return window._nc_initial_state.set(n, i), i;
  } catch (i) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: i }), r !== void 0)
      return r;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: i });
  }
}
function ns(e, t) {
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
    var n, a, i, o, u = [], h = !0, v = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(h = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); h = !0) ;
    } catch (y) {
      v = !0, a = y;
    } finally {
      try {
        if (!h && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (v) throw a;
      }
    }
    return u;
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
    if (typeof e == "string") return ns(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ns(e, t) : void 0;
  }
}
const Nl = Object.entries, as = Object.setPrototypeOf, gu = Object.isFrozen, _u = Object.getPrototypeOf, vu = Object.getOwnPropertyDescriptor;
let Ve = Object.freeze, Ke = Object.seal, qr = Object.create, Pl = typeof Reflect < "u" && Reflect, ti = Pl.apply, ri = Pl.construct;
Ve || (Ve = function(t) {
  return t;
});
Ke || (Ke = function(t) {
  return t;
});
ti || (ti = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  return t.apply(r, a);
});
ri || (ri = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const xr = je(Array.prototype.forEach), wu = je(Array.prototype.lastIndexOf), is = je(Array.prototype.pop), sn = je(Array.prototype.push), Su = je(Array.prototype.splice), Kr = Array.isArray, fn = je(String.prototype.toLowerCase), Ua = je(String.prototype.toString), ss = je(String.prototype.match), ln = je(String.prototype.replace), ls = je(String.prototype.indexOf), Eu = je(String.prototype.trim), Cu = je(Number.prototype.toString), Tu = je(Boolean.prototype.toString), os = typeof BigInt > "u" ? null : je(BigInt.prototype.toString), cs = typeof Symbol > "u" ? null : je(Symbol.prototype.toString), gt = je(Object.prototype.hasOwnProperty), on = je(Object.prototype.toString), Ze = je(RegExp.prototype.test), Cr = xu(TypeError);
function je(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return ti(e, t, n);
  };
}
function xu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return ri(e, r);
  };
}
function ge(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : fn;
  if (as && as(e, null), !Kr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const i = r(a);
      i !== a && (gu(t) || (t[n] = i), a = i);
    }
    e[a] = !0;
  }
  return e;
}
function Au(e) {
  for (let t = 0; t < e.length; t++)
    gt(e, t) || (e[t] = null);
  return e;
}
function Ct(e) {
  const t = qr(null);
  for (const n of Nl(e)) {
    var r = bu(n, 2);
    const a = r[0], i = r[1];
    gt(e, a) && (Kr(i) ? t[a] = Au(i) : i && typeof i == "object" && i.constructor === Object ? t[a] = Ct(i) : t[a] = i);
  }
  return t;
}
function ku(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Cu(e);
    case "boolean":
      return Tu(e);
    case "bigint":
      return os ? os(e) : "0";
    case "symbol":
      return cs ? cs(e) : "Symbol()";
    case "undefined":
      return on(e);
    case "function":
    case "object": {
      if (e === null)
        return on(e);
      const t = e, r = Lt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : on(n);
      }
      return on(e);
    }
    default:
      return on(e);
  }
}
function Lt(e, t) {
  for (; e !== null; ) {
    const n = vu(e, t);
    if (n) {
      if (n.get)
        return je(n.get);
      if (typeof n.value == "function")
        return je(n.value);
    }
    e = _u(e);
  }
  function r() {
    return null;
  }
  return r;
}
function Ru(e) {
  try {
    return Ze(e, ""), !0;
  } catch {
    return !1;
  }
}
const us = Ve(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Da = Ve(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Fa = Ve(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ou = Ve(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), $a = Ve(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Nu = Ve(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ds = Ve(["#text"]), fs = Ve(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ha = Ve(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ps = Ve(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Bn = Ve(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pu = Ke(/{{[\w\W]*|^[\w\W]*}}/g), Iu = Ke(/<%[\w\W]*|^[\w\W]*%>/g), Lu = Ke(/\${[\w\W]*/g), Mu = Ke(/^data-[\-\w.\u00B7-\uFFFF]+$/), Uu = Ke(/^aria-[\-\w]+$/), hs = Ke(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = Ke(/^(?:\w+script|data):/i), Fu = Ke(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), $u = Ke(/^html$/i), Hu = Ke(/^[a-z][.\w]*(-[.\w]+)+$/i), ms = Ke(/<[/\w!]/g), bs = Ke(/<[/\w]/g), ju = Ke(/<\/no(script|embed|frames)/i), Vu = Ke(/\/>/i), Et = {
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
}, Il = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Bu = Ve(ge({}, Il)), qu = (function() {
  const e = {};
  return xr(Il, (t) => {
    e[t] = Ke(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Ve(e);
})(), zu = function() {
  return typeof window > "u" ? null : window;
}, Wu = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  r && r.hasAttribute(a) && (n = r.getAttribute(a));
  const i = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(i, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, ys = function() {
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
}, mr = function(t, r, n, a) {
  return gt(t, r) && Kr(t[r]) ? ge(a.base ? Ct(a.base) : {}, t[r], a.transform) : n;
}, ja = function(t, r, n) {
  const a = gt(t, r) ? t[r] : void 0;
  return a && typeof a == "object" ? Ct(a) : n();
};
function Ll() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (F) => Ll(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== Et.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, a = n.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, u = e.Element, h = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, S = e.trustedTypes, I = u.prototype, j = Lt(I, "cloneNode"), ie = Lt(I, "remove"), W = Lt(I, "nextSibling"), ce = Lt(I, "childNodes"), se = Lt(I, "parentNode"), z = Lt(I, "shadowRoot"), L = Lt(I, "attributes"), V = o && o.prototype ? Lt(o.prototype, "nodeType") : null, oe = o && o.prototype ? Lt(o.prototype, "nodeName") : null, Le = o && o.prototype ? Lt(o.prototype, "ownerDocument") : null, Ne = function(f) {
    return V ? V(f) : f.nodeType;
  }, Be = function(f) {
    return oe ? oe(f) : f.nodeName;
  };
  if (typeof i == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let Ce, Me = "", rt, dt = !1, Ye = 0;
  const xt = function() {
    if (Ye > 0)
      throw Cr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, $e = function(f) {
    xt(), Ye++;
    try {
      return Ce.createHTML(f);
    } finally {
      Ye--;
    }
  }, Ue = function(f) {
    xt(), Ye++;
    try {
      return Ce.createScriptURL(f);
    } finally {
      Ye--;
    }
  }, _e = function() {
    return dt || (rt = Wu(S, a), dt = !0), rt;
  }, de = r, qe = de.implementation, ve = de.createNodeIterator, xe = de.createDocumentFragment, ze = de.getElementsByTagName, Je = n.importNode;
  let be = ys();
  t.isSupported = typeof Nl == "function" && typeof se == "function" && qe && qe.createHTMLDocument !== void 0;
  const Nt = Pu, We = Iu, ft = Lu, _t = Mu, At = Uu, nt = Du, at = Fu, m = Hu;
  let b = hs, _ = null;
  const O = ge({}, [...us, ...Da, ...Fa, ...$a, ...ds]);
  let T = null;
  const k = ge({}, [...fs, ...Ha, ...ps, ...Bn]);
  let M = Object.seal(qr(null, {
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
  })), D = null, U = null;
  const A = Object.seal(qr(null, {
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
  let K = !0, $ = !0, G = !1, Z = !0, Q = !1, P = !0, N = !1, H = !1, te = null, le = null, ye = !1, fe = !1, De = !1, we = !1, Pe = !0, he = !1;
  const pt = "user-content-";
  let Ht = !0, pr = !1, ht = {}, vt = null;
  const Jt = ge({}, [
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
  let wt = null;
  const jt = ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let kt = null;
  const Lr = ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Pt = "http://www.w3.org/1998/Math/MathML", Zt = "http://www.w3.org/2000/svg", it = "http://www.w3.org/1999/xhtml";
  let St = it, Mr = !1, Jr = null;
  const kn = ge({}, [Pt, Zt, it], Ua), Rn = Ve(["mi", "mo", "mn", "ms", "mtext"]);
  let Ur = ge({}, Rn);
  const Zr = Ve(["annotation-xml"]);
  let Qr = ge({}, Zr);
  const en = ge({}, ["title", "style", "font", "a", "script"]);
  let _r = null;
  const ma = ["application/xhtml+xml", "text/html"], tn = "text/html";
  let Oe = null, hr = null;
  const ba = r.createElement("form"), Qt = function(f) {
    return f instanceof RegExp || f instanceof Function;
  }, Dr = function() {
    let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (hr && hr === f)
      return;
    (!f || typeof f != "object") && (f = {}), f = Ct(f), _r = // eslint-disable-next-line unicorn/prefer-includes
    ma.indexOf(f.PARSER_MEDIA_TYPE) === -1 ? tn : f.PARSER_MEDIA_TYPE, Oe = _r === "application/xhtml+xml" ? Ua : fn, _ = mr(f, "ALLOWED_TAGS", O, {
      transform: Oe
    }), T = mr(f, "ALLOWED_ATTR", k, {
      transform: Oe
    }), Jr = mr(f, "ALLOWED_NAMESPACES", kn, {
      transform: Ua
    }), kt = mr(f, "ADD_URI_SAFE_ATTR", Lr, {
      transform: Oe,
      base: Lr
    }), wt = mr(f, "ADD_DATA_URI_TAGS", jt, {
      transform: Oe,
      base: jt
    }), vt = mr(f, "FORBID_CONTENTS", Jt, {
      transform: Oe
    }), D = mr(f, "FORBID_TAGS", Ct({}), {
      transform: Oe
    }), U = mr(f, "FORBID_ATTR", Ct({}), {
      transform: Oe
    }), ht = gt(f, "USE_PROFILES") ? f.USE_PROFILES && typeof f.USE_PROFILES == "object" ? Ct(f.USE_PROFILES) : f.USE_PROFILES : !1, K = f.ALLOW_ARIA_ATTR !== !1, $ = f.ALLOW_DATA_ATTR !== !1, G = f.ALLOW_UNKNOWN_PROTOCOLS || !1, Z = f.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = f.SAFE_FOR_TEMPLATES || !1, P = f.SAFE_FOR_XML !== !1, N = f.WHOLE_DOCUMENT || !1, fe = f.RETURN_DOM || !1, De = f.RETURN_DOM_FRAGMENT || !1, we = f.RETURN_TRUSTED_TYPE || !1, ye = f.FORCE_BODY || !1, Pe = f.SANITIZE_DOM !== !1, he = f.SANITIZE_NAMED_PROPS || !1, Ht = f.KEEP_CONTENT !== !1, pr = f.IN_PLACE || !1, b = Ru(f.ALLOWED_URI_REGEXP) ? f.ALLOWED_URI_REGEXP : hs, St = typeof f.NAMESPACE == "string" ? f.NAMESPACE : it, Ur = ja(
      f,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ge({}, Rn)
      // Default built-in map
    ), Qr = ja(
      f,
      "HTML_INTEGRATION_POINTS",
      () => ge({}, Zr)
      // Default built-in map
    );
    const g = ja(f, "CUSTOM_ELEMENT_HANDLING", () => qr(null));
    if (M = qr(null), gt(g, "tagNameCheck") && Qt(g.tagNameCheck) && (M.tagNameCheck = g.tagNameCheck), gt(g, "attributeNameCheck") && Qt(g.attributeNameCheck) && (M.attributeNameCheck = g.attributeNameCheck), gt(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), Ke(M), Q && ($ = !1), De && (fe = !0), ht && (_ = ge({}, ds), T = qr(null), ht.html === !0 && (ge(_, us), ge(T, fs)), ht.svg === !0 && (ge(_, Da), ge(T, Ha), ge(T, Bn)), ht.svgFilters === !0 && (ge(_, Fa), ge(T, Ha), ge(T, Bn)), ht.mathMl === !0 && (ge(_, $a), ge(T, ps), ge(T, Bn))), A.tagCheck = null, A.attributeCheck = null, gt(f, "ADD_TAGS") && (typeof f.ADD_TAGS == "function" ? A.tagCheck = f.ADD_TAGS : Kr(f.ADD_TAGS) && (_ === O && (_ = Ct(_)), ge(_, f.ADD_TAGS, Oe))), gt(f, "ADD_ATTR") && (typeof f.ADD_ATTR == "function" ? A.attributeCheck = f.ADD_ATTR : Kr(f.ADD_ATTR) && (T === k && (T = Ct(T)), ge(T, f.ADD_ATTR, Oe))), gt(f, "ADD_FORBID_CONTENTS") && Kr(f.ADD_FORBID_CONTENTS) && (vt === Jt && (vt = Ct(vt)), ge(vt, f.ADD_FORBID_CONTENTS, Oe)), Ht && (_["#text"] = !0), N && ge(_, ["html", "head", "body"]), _.table && (ge(_, ["tbody"]), delete D.tbody), f.TRUSTED_TYPES_POLICY) {
      if (typeof f.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Cr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof f.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Cr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const R = Ce;
      Ce = f.TRUSTED_TYPES_POLICY;
      try {
        Me = $e("");
      } catch (B) {
        throw Ce = R, B;
      }
    } else f.TRUSTED_TYPES_POLICY === null ? (Ce = void 0, Me = "") : (Ce === void 0 && (Ce = _e()), Ce && typeof Me == "string" && (Me = $e("")));
    Ve && Ve(f), hr = f;
  }, On = ge({}, [...Da, ...Fa, ...Ou]), Nn = ge({}, [...$a, ...Nu]), ya = function(f, g, R) {
    return g.namespaceURI === it ? f === "svg" : g.namespaceURI === Pt ? f === "svg" && (R === "annotation-xml" || Ur[R]) : !!On[f];
  }, vr = function(f, g, R) {
    return g.namespaceURI === it ? f === "math" : g.namespaceURI === Zt ? f === "math" && Qr[R] : !!Nn[f];
  }, ga = function(f, g, R) {
    return g.namespaceURI === Zt && !Qr[R] || g.namespaceURI === Pt && !Ur[R] ? !1 : !Nn[f] && (en[f] || !On[f]);
  }, _a = function(f) {
    let g = se(f);
    (!g || !g.tagName) && (g = {
      namespaceURI: St,
      tagName: "template"
    });
    const R = fn(f.tagName), B = fn(g.tagName);
    return Jr[f.namespaceURI] ? f.namespaceURI === Zt ? ya(R, g, B) : f.namespaceURI === Pt ? vr(R, g, B) : f.namespaceURI === it ? ga(R, g, B) : !!(_r === "application/xhtml+xml" && Jr[f.namespaceURI]) : !1;
  }, Vt = function(f) {
    sn(t.removed, {
      element: f
    });
    try {
      se(f).removeChild(f);
    } catch {
      if (ie(f), !se(f))
        throw Cr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Pn = function(f, g, R) {
    try {
      f.removeAttributeNode(g);
    } catch {
      try {
        f.removeAttribute(R);
      } catch {
      }
    }
  }, Fr = function(f) {
    wr(f);
    const g = ce(f);
    if (g) {
      const B = [];
      xr(g, (J) => {
        sn(B, J);
      }), xr(B, (J) => {
        try {
          ie(J);
        } catch {
        }
      });
    }
    const R = L(f);
    if (R)
      for (let B = R.length - 1; B >= 0; --B) {
        const J = R[B], ae = J && J.name;
        typeof ae == "string" && Pn(f, J, ae);
      }
  }, er = function(f, g, R) {
    if (!R)
      try {
        R = g.getAttributeNode(f);
      } catch {
        R = null;
      }
    sn(t.removed, {
      attribute: R || null,
      from: g
    });
    try {
      R ? g.removeAttributeNode(R) : g.removeAttribute(f);
    } catch {
      try {
        g.removeAttribute(f);
      } catch {
      }
    }
    if (f === "is")
      if (fe || De)
        try {
          Vt(g);
        } catch {
        }
      else
        try {
          g.setAttribute(f, "");
        } catch {
        }
  }, In = function(f) {
    const g = L(f);
    if (g)
      for (let R = g.length - 1; R >= 0; --R) {
        const B = g[R], J = B && B.name;
        typeof J != "string" || T[Oe(J)] || Pn(f, B, J);
      }
  }, wr = function(f) {
    const g = [f];
    for (; g.length > 0; ) {
      const R = g.pop();
      Ne(R) === Et.element && In(R);
      const J = ce(R);
      if (J)
        for (let ae = J.length - 1; ae >= 0; --ae)
          g.push(J[ae]);
    }
  }, x = function(f, g) {
    return P ? f === "patchsrc" ? !0 : f === "for" && g !== "label" && g !== "output" : !1;
  }, C = function(f) {
    if (!P)
      return;
    const g = [f];
    for (; g.length > 0; ) {
      const R = g.pop(), B = Ne(R);
      if (B === Et.processingInstruction || B === Et.comment && Ze(bs, R.data)) {
        try {
          ie(R);
        } catch {
        }
        continue;
      }
      if (B === Et.element) {
        const ae = R, ke = Oe(Be(R));
        try {
          ae.hasAttribute && ae.hasAttribute("patchsrc") && ae.removeAttribute("patchsrc"), ae.hasAttribute && ae.hasAttribute("for") && x("for", ke) && ae.removeAttribute("for");
        } catch {
        }
      }
      const J = ce(R);
      if (J)
        for (let ae = J.length - 1; ae >= 0; --ae)
          g.push(J[ae]);
    }
  }, d = function(f) {
    let g = null, R = null;
    if (ye)
      f = "<remove></remove>" + f;
    else {
      const ae = ss(f, /^[\r\n\t ]+/);
      R = ae && ae[0];
    }
    _r === "application/xhtml+xml" && St === it && (f = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + f + "</body></html>");
    const B = Ce ? $e(f) : f;
    if (St === it)
      try {
        g = new y().parseFromString(B, _r);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = qe.createDocument(St, "template", null);
      try {
        g.documentElement.innerHTML = Mr ? Me : B;
      } catch {
      }
    }
    const J = g.body || g.documentElement;
    return f && R && J.insertBefore(r.createTextNode(R), J.childNodes[0] || null), St === it ? ze.call(g, N ? "html" : "body")[0] : N ? g.documentElement : J;
  }, ne = function(f) {
    const g = Le ? Le(f) : f.ownerDocument;
    return ve.call(
      g || f,
      f,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null
    );
  }, He = function(f) {
    return f = ln(f, Nt, " "), f = ln(f, We, " "), f = ln(f, ft, " "), f;
  }, It = function(f) {
    var g;
    f.normalize();
    const R = Le ? Le(f) : f.ownerDocument, B = ve.call(
      R || f,
      f,
      // eslint-disable-next-line no-bitwise
      h.SHOW_TEXT | h.SHOW_COMMENT | h.SHOW_CDATA_SECTION | h.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let J = B.nextNode();
    for (; J; )
      J.data = He(J.data), J = B.nextNode();
    const ae = (g = f.querySelectorAll) === null || g === void 0 ? void 0 : g.call(f, "template");
    ae && xr(ae, (ke) => {
      $r(ke.content) && It(ke.content);
    });
  }, Ln = function(f) {
    const g = oe ? oe(f) : null;
    return typeof g != "string" || Oe(g) !== "form" ? !1 : typeof f.nodeName != "string" || typeof f.textContent != "string" || typeof f.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    f.attributes !== L(f) || typeof f.removeAttribute != "function" || typeof f.setAttribute != "function" || typeof f.namespaceURI != "string" || typeof f.insertBefore != "function" || typeof f.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    f.nodeType !== V(f) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    f.childNodes !== ce(f);
  }, $r = function(f) {
    if (!V || typeof f != "object" || f === null)
      return !1;
    try {
      return V(f) === Et.documentFragment;
    } catch {
      return !1;
    }
  }, rn = function(f) {
    if (!V || typeof f != "object" || f === null)
      return !1;
    try {
      return typeof V(f) == "number";
    } catch {
      return !1;
    }
  };
  function Bt(F, f, g) {
    F.length !== 0 && xr(F, (R) => {
      R.call(t, f, g, hr);
    });
  }
  const Ul = function(f, g) {
    return !!(P && f.hasChildNodes() && !rn(f.firstElementChild) && Ze(ms, f.textContent) && Ze(ms, f.innerHTML) || P && f.namespaceURI === it && Bu[g] && (rn(f.firstElementChild) || typeof f.textContent == "string" && Ze(qu[g], f.textContent)) || f.nodeType === Et.processingInstruction || P && f.nodeType === Et.comment && Ze(bs, f.data));
  }, Mn = function(f, g) {
    if (f instanceof RegExp)
      return Ze(f, g);
    if (f instanceof Function) {
      for (var R = arguments.length, B = new Array(R > 2 ? R - 2 : 0), J = 2; J < R; J++)
        B[J - 2] = arguments[J];
      return !!f(g, ...B);
    }
    return !1;
  }, Dl = function(f, g, R) {
    if (!D[g] && Ei(g) && Mn(M.tagNameCheck, g))
      return !1;
    if (Ht && !vt[g]) {
      const B = se(f), J = ce(f);
      if (J && B) {
        const ae = J.length;
        for (let ke = ae - 1; ke >= 0; --ke) {
          const Ie = f === R ? j(J[ke], !0) : J[ke];
          B.insertBefore(Ie, W(f));
        }
      }
    }
    return Vt(f), !0;
  }, _i = function(f, g, R, B) {
    return f.length === 0 ? g : g === R || g === B ? Ct(g) : g;
  }, vi = function(f, g) {
    return f === g || se(f) !== null ? !1 : (pr && wr(f), !0);
  }, wi = function(f, g) {
    if (Bt(be.beforeSanitizeElements, f, null), vi(f, g))
      return !0;
    if (Ln(f))
      return Vt(f), !0;
    const R = Oe(Be(f));
    if (_ = _i(be.uponSanitizeElement, _, O, te), Bt(be.uponSanitizeElement, f, {
      tagName: R,
      allowedTags: _
    }), vi(f, g))
      return !0;
    if (Ul(f, R))
      return Vt(f), !0;
    if (D[R] || !(A.tagCheck instanceof Function && A.tagCheck(R)) && !_[R]) {
      const J = Dl(f, R, g);
      return J === !1 && Bt(be.afterSanitizeElements, f, null), J;
    }
    if (Ne(f) === Et.element && !_a(f) || (R === "noscript" || R === "noembed" || R === "noframes") && Ze(ju, f.innerHTML))
      return Vt(f), !0;
    if (Q && f.nodeType === Et.text) {
      const J = He(f.textContent);
      f.textContent !== J && (sn(t.removed, {
        element: f.cloneNode()
      }), f.textContent = J);
    }
    return Bt(be.afterSanitizeElements, f, null), !1;
  }, Si = function(f, g, R) {
    if (U[g] || x(g, f) || Pe && (g === "id" || g === "name") && (R in r || R in ba))
      return !1;
    const B = T[g] || A.attributeCheck instanceof Function && A.attributeCheck(g, f);
    return $ && Ze(_t, g) || K && Ze(At, g) ? !0 : B ? kt[g] || Ze(b, ln(R, at, "")) || (g === "src" || g === "xlink:href" || g === "href") && f !== "script" && ls(R, "data:") === 0 && wt[f] || G && !Ze(nt, ln(R, at, "")) ? !0 : !R : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Ei(f) && Mn(M.tagNameCheck, f) && Mn(M.attributeNameCheck, g, f) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && M.allowCustomizedBuiltInElements && Mn(M.tagNameCheck, R)
    );
  }, Fl = ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ei = function(f) {
    return !Fl[fn(f)] && Ze(m, f);
  }, $l = function(f, g, R, B) {
    if (Ce && typeof S == "object" && typeof S.getAttributeType == "function" && !R)
      switch (S.getAttributeType(f, g)) {
        case "TrustedHTML":
          return $e(B);
        case "TrustedScriptURL":
          return Ue(B);
      }
    return B;
  }, Hl = function(f, g, R, B) {
    try {
      R ? f.setAttributeNS(R, g, B) : f.setAttribute(g, B), Ln(f) ? Vt(f) : is(t.removed);
    } catch {
      er(g, f);
    }
  }, Ci = function(f) {
    Bt(be.beforeSanitizeAttributes, f, null);
    const g = f.attributes;
    if (!g || Ln(f))
      return;
    T = _i(be.uponSanitizeAttribute, T, k, le);
    const R = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let B = g.length;
    const J = Oe(f.nodeName);
    for (; B--; ) {
      const ae = g[B], ke = ae.name, Ie = ae.namespaceURI, mt = ae.value, bt = Oe(ke), wa = mt;
      let st = ke === "value" ? wa : Eu(wa);
      if (R.attrName = bt, R.attrValue = st, R.keepAttr = !0, R.forceKeepAttr = void 0, Bt(be.uponSanitizeAttribute, f, R), st = R.attrValue, he && (bt === "id" || bt === "name") && ls(st, pt) !== 0 && (er(ke, f, ae), st = pt + st), P && Ze(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, st)) {
        er(ke, f, ae);
        continue;
      }
      if (bt === "attributename" && ss(st, "href")) {
        er(ke, f, ae);
        continue;
      }
      if (!R.forceKeepAttr) {
        if (!R.keepAttr) {
          er(ke, f, ae);
          continue;
        }
        if (!Z && Ze(Vu, st)) {
          er(ke, f, ae);
          continue;
        }
        if (Q && (st = He(st)), !Si(J, bt, st)) {
          er(ke, f, ae);
          continue;
        }
        st = $l(J, bt, Ie, st), st !== wa && Hl(f, ke, Ie, st);
      }
    }
    Bt(be.afterSanitizeAttributes, f, null);
  }, Un = function(f) {
    let g = null;
    const R = ne(f);
    for (Bt(be.beforeSanitizeShadowDOM, f, null); g = R.nextNode(); )
      if (Bt(be.uponSanitizeShadowNode, g, null), wi(g, f), Ci(g), $r(g.content) && Un(g.content), Ne(g) === Et.element) {
        const B = z(g);
        $r(B) && (va(B), Un(B));
      }
    Bt(be.afterSanitizeShadowDOM, f, null);
  }, va = function(f) {
    const g = [{
      node: f,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const R = g.pop();
      if (R.shadow) {
        Un(R.shadow);
        continue;
      }
      const B = R.node, ae = Ne(B) === Et.element, ke = ce(B);
      if (ke)
        for (let Ie = ke.length - 1; Ie >= 0; --Ie)
          g.push({
            node: ke[Ie],
            shadow: null
          });
      if (ae) {
        const Ie = oe ? oe(B) : null;
        if (typeof Ie == "string" && Oe(Ie) === "template") {
          const mt = B.content;
          $r(mt) && g.push({
            node: mt,
            shadow: null
          });
        }
      }
      if (ae) {
        const Ie = z(B);
        $r(Ie) && g.push({
          node: null,
          shadow: Ie
        }, {
          node: Ie,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, R = null, B = null, J = null;
    if (Mr = !F, Mr && (F = "<!-->"), typeof F != "string" && !rn(F) && (F = ku(F), typeof F != "string"))
      throw Cr("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    H ? (_ = te, T = le) : Dr(f), (be.uponSanitizeElement.length > 0 || be.uponSanitizeAttribute.length > 0) && (_ = Ct(_)), be.uponSanitizeAttribute.length > 0 && (T = Ct(T)), t.removed = [];
    const ae = pr && typeof F != "string" && rn(F);
    if (ae) {
      C(F);
      const mt = Be(F);
      if (typeof mt == "string") {
        const bt = Oe(mt);
        if (!_[bt] || D[bt])
          throw Fr(F), Cr("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ln(F))
        throw Fr(F), Cr("root node is clobbered and cannot be sanitized in-place");
      try {
        va(F);
      } catch (bt) {
        throw Fr(F), bt;
      }
    } else if (rn(F))
      g = d("<!---->"), R = g.ownerDocument.importNode(F, !0), R.nodeType === Et.element && R.nodeName === "BODY" || R.nodeName === "HTML" ? g = R : g.appendChild(R), va(R);
    else {
      if (!fe && !Q && !N && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return Ce && we ? $e(F) : F;
      if (g = d(F), !g)
        return fe ? null : we ? Me : "";
    }
    g && ye && Vt(g.firstChild);
    const ke = ae ? F : g;
    try {
      const mt = ne(ke);
      for (; B = mt.nextNode(); )
        wi(B, ke), Ci(B), $r(B.content) && Un(B.content);
    } catch (mt) {
      throw ae && (Fr(F), xr(t.removed, (bt) => {
        bt.element && wr(bt.element);
      })), mt;
    }
    if (ae)
      return xr(t.removed, (mt) => {
        mt.element && wr(mt.element);
      }), Q && It(F), F;
    if (fe) {
      if (Q && It(g), De)
        for (J = xe.call(g.ownerDocument); g.firstChild; )
          J.appendChild(g.firstChild);
      else
        J = g;
      return (T.shadowroot || T.shadowrootmode) && (J = Je.call(n, J, !0)), J;
    }
    let Ie = N ? g.outerHTML : g.innerHTML;
    return N && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Ze($u, g.ownerDocument.doctype.name) && (Ie = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Ie), Q && (Ie = He(Ie)), Ce && we ? $e(Ie) : Ie;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Dr(F), H = !0, te = _, le = T;
  }, t.clearConfig = function() {
    hr = null, H = !1, te = null, le = null, Ce = rt, Me = "";
  }, t.isValidAttribute = function(F, f, g) {
    hr || Dr({});
    const R = Oe(F), B = Oe(f);
    return Si(R, B, g);
  }, t.addHook = function(F, f) {
    typeof f == "function" && gt(be, F) && sn(be[F], f);
  }, t.removeHook = function(F, f) {
    if (gt(be, F)) {
      if (f !== void 0) {
        const g = wu(be[F], f);
        return g === -1 ? void 0 : Su(be[F], g, 1)[0];
      }
      return is(be[F]);
    }
  }, t.removeHooks = function(F) {
    gt(be, F) && (be[F] = []);
  }, t.removeAllHooks = function() {
    be = ys();
  }, t;
}
var Gu = Ll();
function Ku(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Va, gs;
function Yu() {
  if (gs) return Va;
  gs = 1;
  var e = /["'&<>]/;
  Va = t;
  function t(r) {
    var n = "" + r, a = e.exec(n);
    if (!a)
      return n;
    var i, o = "", u = 0, h = 0;
    for (u = a.index; u < n.length; u++) {
      switch (n.charCodeAt(u)) {
        case 34:
          i = "&quot;";
          break;
        case 38:
          i = "&amp;";
          break;
        case 39:
          i = "&#39;";
          break;
        case 60:
          i = "&lt;";
          break;
        case 62:
          i = "&gt;";
          break;
        default:
          continue;
      }
      h !== u && (o += n.substring(h, u)), h = u + 1, o += i;
    }
    return h !== u ? o + n.substring(h, u) : o;
  }
  return Va;
}
var Xu = Yu();
const _s = /* @__PURE__ */ Ku(Xu);
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
function l(e, t, r, n, a) {
  const i = typeof r == "object" ? r : void 0, o = typeof n == "number" ? n : typeof r == "number" ? r : void 0, u = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof n == "object" ? n : {}
  }, h = (W) => W, v = (u.sanitize ? Gu.sanitize : h) || h, y = u.escape ? _s : h, S = (W) => typeof W == "string" || typeof W == "number", I = (W, ce, se) => W.replace(/%n/g, "" + se).replace(/{([^{}]*)}/g, (z, L) => {
    if (ce === void 0 || !(L in ce))
      return y(z);
    const V = ce[L];
    return S(V) ? y(`${V}`) : typeof V == "object" && S(V.value) ? (V.escape !== !1 ? _s : h)(`${V.value}`) : y(z);
  });
  let ie = (a?.bundle ?? Ju(e)).translations[t] || t;
  return ie = Array.isArray(ie) ? ie[0] : ie, v(typeof i == "object" || o !== void 0 ? I(
    ie,
    i,
    o
  ) : ie);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ed = { class: "library-catalogue-header" }, td = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, rd = { id: "library-catalogue-heading" }, nd = { class: "library-muted" }, ad = ["aria-label"], id = { class: "library-catalogue-actions-list" }, sd = ["href"], ld = ["href"], od = ["href"], cd = ["href"], ud = {
  class: "library-actions-health-overview",
  "aria-labelledby": "library-actions-health-heading"
}, dd = { class: "library-muted library-catalogue-eyebrow" }, fd = { id: "library-actions-health-heading" }, pd = { class: "library-muted" }, hd = {
  key: 0,
  class: "library-muted"
}, md = {
  key: 1,
  class: "library-notice"
}, bd = {
  key: 2,
  class: "library-muted"
}, yd = {
  key: 0,
  class: "library-muted"
}, gd = {
  key: 1,
  class: "library-muted"
}, _d = {
  key: 2,
  class: "library-muted"
}, vd = ["disabled"], wd = { class: "library-actions-health-links" }, Sd = ["href"], Ed = ["href"], Cd = ["href"], Td = ["href"], xd = { class: "library-actions-health-grid" }, Ad = { class: "library-import-health-number" }, kd = { class: "library-import-health-number" }, Rd = { class: "library-muted" }, Od = { class: "library-muted" }, Nd = { class: "library-muted" }, Pd = {
  key: 3,
  class: "library-import-health-examples"
}, Id = {
  class: "library-review-queue-actions",
  "aria-label": "Review queue shortcuts"
}, Ld = { class: "library-muted" }, Md = ["href"], Ud = ["href"], Dd = ["action"], Fd = ["value"], $d = {
  type: "submit",
  class: "button secondary"
}, Hd = { class: "library-muted" }, jd = ["href"], Vd = ["action"], Bd = ["value"], qd = {
  type: "submit",
  class: "button secondary"
}, zd = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, Wd = {
  key: 1,
  class: "library-home-dashboard",
  "aria-labelledby": "library-home-dashboard-heading"
}, Gd = { class: "library-home-hero-card" }, Kd = { class: "library-muted library-catalogue-eyebrow" }, Yd = { id: "library-home-dashboard-heading" }, Xd = { class: "library-muted" }, Jd = { class: "library-home-hero-actions" }, Zd = ["href"], Qd = ["aria-label"], ef = ["onClick"], tf = ["src", "alt"], rf = {
  key: 0,
  class: "library-home-rediscover"
}, nf = { class: "library-muted library-catalogue-eyebrow" }, af = { class: "library-muted" }, sf = {
  class: "library-useful-views",
  "aria-labelledby": "library-useful-views-heading"
}, lf = { class: "library-useful-views-copy" }, of = { class: "library-muted library-catalogue-eyebrow" }, cf = { id: "library-useful-views-heading" }, uf = { class: "library-muted" }, df = { class: "library-muted" }, ff = ["aria-label"], pf = ["href", "title"], hf = { class: "library-useful-view-count" }, mf = {
  class: "library-weak-metadata-dashboard",
  "aria-labelledby": "library-weak-metadata-heading"
}, bf = { class: "library-weak-metadata-dashboard-copy" }, yf = { class: "library-muted library-catalogue-eyebrow" }, gf = { id: "library-weak-metadata-heading" }, _f = { class: "library-muted" }, vf = ["aria-label"], wf = ["href", "title"], Sf = {
  class: "library-saved-collections",
  "aria-labelledby": "library-saved-collections-heading"
}, Ef = { class: "library-saved-collections-copy" }, Cf = { class: "library-muted library-catalogue-eyebrow" }, Tf = { id: "library-saved-collections-heading" }, xf = { class: "library-muted" }, Af = ["action"], kf = ["value"], Rf = ["value"], Of = ["placeholder", "disabled"], Nf = ["disabled"], Pf = {
  key: 0,
  class: "library-muted"
}, If = ["aria-label"], Lf = ["href"], Mf = ["action"], Uf = ["value"], Df = {
  type: "submit",
  class: "button tertiary"
}, Ff = ["aria-label"], $f = ["name", "value"], Hf = { class: "library-quick-search-row" }, jf = { class: "library-quick-filter-search" }, Vf = ["aria-label"], Bf = { class: "library-quick-filter-options" }, qf = { class: "library-quick-filter-option-grid" }, zf = { value: "title" }, Wf = { value: "recent" }, Gf = { value: "publicationDate" }, Kf = { value: "publication" }, Yf = { value: "lastOpened" }, Xf = { value: "format" }, Jf = { value: "" }, Zf = { value: "1" }, Qf = ["value"], ep = ["value"], tp = ["aria-label"], rp = ["aria-label"], np = { class: "library-filter-panel" }, ap = { class: "library-filter-panel-summary" }, ip = ["aria-label"], sp = {
  id: "library-search-scope",
  class: "library-muted library-search-scope"
}, lp = { value: "" }, op = ["value"], cp = { value: "" }, up = ["value"], dp = { value: "" }, fp = ["value"], pp = { value: "" }, hp = ["value"], mp = { value: "" }, bp = ["value"], yp = { value: "" }, gp = ["value"], _p = { value: "" }, vp = ["value"], wp = { value: "" }, Sp = ["value"], Ep = { value: "" }, Cp = ["value"], Tp = { value: "" }, xp = ["value"], Ap = { value: "" }, kp = { value: "1" }, Rp = { value: "" }, Op = { value: "1" }, Np = { value: "title" }, Pp = { value: "recent" }, Ip = { value: "publicationDate" }, Lp = { value: "publication" }, Mp = { value: "lastOpened" }, Up = { value: "format" }, Dp = ["value"], Fp = ["value"], $p = ["aria-label"], Hp = ["aria-label"], jp = ["href"], Vp = {
  key: 2,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Bp = { class: "library-muted library-catalogue-eyebrow" }, qp = { id: "library-discovery-heading" }, zp = { class: "library-muted" }, Wp = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, Gp = { key: 0 }, Kp = { key: 1 }, Yp = { key: 2 }, Xp = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, Jp = { key: 0 }, Zp = { key: 1 }, Qp = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, eh = { class: "library-muted library-catalogue-eyebrow" }, th = { id: "library-publication-issue-groups-heading" }, rh = { class: "library-muted" }, nh = {
  class: "library-publication-issue-strip",
  "aria-label": "Visual issue strip"
}, ah = ["href"], ih = {
  key: 0,
  class: "library-notice"
}, sh = { class: "library-publication-issue-label" }, lh = ["href"], oh = { class: "library-muted" }, ch = {
  key: 1,
  class: "library-publication-unknown-issues"
}, uh = { class: "library-muted" }, dh = {
  href: "/apps/library/",
  class: "button secondary"
}, fh = {
  class: "library-view-mode-toggle",
  "aria-label": "Cover view mode"
}, ph = { class: "library-muted" }, hh = ["aria-pressed"], mh = ["aria-pressed"], bh = ["aria-pressed"], yh = { class: "library-catalogue-status-row" }, gh = { class: "library-muted library-filter-result-summary" }, _h = { key: 0 }, vh = { href: "?" }, wh = ["aria-label"], Sh = { class: "library-pagination-range" }, Eh = { key: 0 }, Ch = ["href"], Th = {
  key: 1,
  class: "library-muted"
}, xh = ["href"], Ah = {
  key: 3,
  class: "library-muted"
}, kh = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, Rh = ["aria-label"], Oh = { class: "library-settings-count-badge" }, Nh = ["action"], Ph = ["value"], Ih = ["name", "value"], Lh = ["placeholder"], Mh = {
  type: "submit",
  class: "button primary"
}, Uh = { class: "library-muted" }, Dh = ["action"], Fh = ["value"], $h = ["name", "value"], Hh = ["placeholder"], jh = {
  type: "submit",
  class: "button secondary"
}, Vh = { class: "library-muted" }, Bh = ["action"], qh = ["value"], zh = ["name", "value"], Wh = {
  type: "submit",
  class: "button secondary"
}, Gh = { class: "library-muted" }, Kh = ["action"], Yh = ["value"], Xh = ["name", "value"], Jh = { name: "bulkEditField" }, Zh = { value: "publicationType" }, Qh = { value: "subtitle" }, em = { value: "creators" }, tm = { value: "publication" }, rm = { value: "publicationDate" }, nm = { value: "language" }, am = { value: "publisher" }, im = { value: "genres" }, sm = { value: "classifications" }, lm = {
  type: "submit",
  class: "button secondary"
}, om = { class: "library-muted" }, cm = ["action"], um = ["value"], dm = ["name", "value"], fm = {
  type: "submit",
  class: "button secondary"
}, pm = { class: "library-muted" }, hm = { class: "library-discovery-shortcuts" }, mm = { class: "library-discovery-shortcut-grid" }, bm = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, ym = { id: "library-periodical-groups-heading" }, gm = { class: "library-muted" }, _m = ["href"], vm = { class: "library-muted" }, wm = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, Sm = { id: "library-periodical-groups-empty-heading" }, Em = { class: "library-muted" }, Cm = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, Tm = { id: "library-year-groups-heading" }, xm = ["href"], Am = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, km = { id: "library-creator-groups-heading" }, Rm = ["href"], Om = ["aria-label"], Nm = ["href", "aria-label"], Pm = { class: "library-muted" }, Im = { class: "library-empty-actions" }, Lm = ["href"], Mm = { class: "library-muted" }, Um = { class: "library-muted" }, Dm = { class: "library-empty-actions" }, Fm = ["href"], $m = { class: "library-muted" }, Hm = { class: "library-empty-actions" }, jm = ["href"], Vm = {
  href: "?",
  class: "button primary"
}, Bm = { class: "library-muted" }, qm = { class: "library-empty-actions" }, zm = ["href"], Wm = ["href", "aria-label"], Gm = { class: "library-cover-frame" }, Km = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, Ym = ["src", "alt", "onLoad", "onError"], Xm = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, Jm = ["action", "onSubmit"], Zm = ["value"], Qm = ["value"], eb = ["aria-pressed", "title", "aria-label", "onClick"], tb = { class: "library-cover-summary" }, rb = { class: "library-cover-primary" }, nb = ["aria-label"], ab = ["href"], ib = ["onToggle"], sb = ["aria-label"], lb = { class: "library-cover-meta" }, ob = {
  key: 0,
  class: "library-creator"
}, cb = { class: "library-cover-detail-list" }, ub = { class: "library-cover-detail-chip" }, db = {
  key: 0,
  class: "library-cover-detail-chip"
}, fb = {
  key: 1,
  class: "library-cover-detail-chip"
}, pb = {
  key: 2,
  class: "library-cover-detail-chip"
}, hb = {
  key: 3,
  class: "library-cover-detail-chip"
}, mb = {
  key: 4,
  class: "library-cover-detail-chip"
}, bb = {
  key: 5,
  class: "library-cover-detail-chip"
}, yb = {
  key: 6,
  class: "library-cover-detail-chip"
}, gb = {
  key: 1,
  class: "library-muted library-cover-description"
}, _b = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, vb = { key: 0 }, wb = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Sb = {
  key: 0,
  class: "library-muted"
}, Eb = { class: "library-cover-actions" }, Cb = ["href"], Tb = ["href"], xb = ["onClick"], Ab = ["href"], kb = ["aria-label"], Rb = { class: "library-pagination-range" }, Ob = { key: 0 }, Nb = ["href"], Pb = {
  key: 1,
  class: "library-muted"
}, Ib = ["href"], Lb = {
  key: 3,
  class: "library-muted"
}, Mb = {
  key: 8,
  class: "library-detail-drawer",
  "aria-labelledby": "library-detail-drawer-heading",
  role: "dialog",
  "aria-modal": "true"
}, Ub = ["src", "alt"], Db = { class: "library-muted library-catalogue-eyebrow" }, Fb = { id: "library-detail-drawer-heading" }, $b = {
  key: 0,
  class: "library-creator"
}, Hb = {
  key: 1,
  class: "library-muted"
}, jb = { class: "library-detail-drawer-facts" }, Vb = { key: 0 }, Bb = { key: 1 }, qb = { key: 2 }, zb = { class: "library-detail-drawer-actions" }, Wb = ["href"], Gb = ["href"], Kb = ["aria-label"], Yb = ["disabled"], Xb = ["disabled"], Jb = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], a = /* @__PURE__ */ nr({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), i = /* @__PURE__ */ nr((a.items || []).map((x) => ({ ...x }))), o = q(() => i), u = q(() => a.shelves || []), h = q(() => a.formats || []), v = q(() => a.publications || []), y = q(() => a.publicationSummaries || []), S = q(() => a.publicationIssueContext || null), I = q(() => a.publicationYears || []), j = q(() => a.creators || []), ie = q(() => a.scanStatuses || []), W = q(() => a.workflowStatuses || []), ce = q(() => a.genres || []), se = q(() => a.classifications || []), z = q(() => a.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), L = /* @__PURE__ */ nr({
      q: a.activeFilters?.q || "",
      view: a.activeFilters?.view || "compact",
      type: a.activeFilters?.type || "",
      publication: a.activeFilters?.publication || "",
      year: a.activeFilters?.year || "",
      creator: a.activeFilters?.creator || "",
      format: a.activeFilters?.format || "",
      tag: a.activeFilters?.tag || "",
      shelf: a.activeFilters?.shelf || "",
      status: a.activeFilters?.status || "",
      workflowStatus: a.activeFilters?.workflowStatus || "",
      genre: a.activeFilters?.genre || "",
      classification: a.activeFilters?.classification || "",
      scannerConflicts: a.activeFilters?.scannerConflicts || "",
      starred: a.activeFilters?.starred || "",
      needsMetadata: a.activeFilters?.needsMetadata || "",
      coverReview: a.activeFilters?.coverReview || "",
      noCreator: a.activeFilters?.noCreator || "",
      noPublication: a.activeFilters?.noPublication || "",
      noDate: a.activeFilters?.noDate || "",
      titleFromFilename: a.activeFilters?.titleFromFilename || "",
      noDescription: a.activeFilters?.noDescription || "",
      unsupportedContainer: a.activeFilters?.unsupportedContainer || "",
      weakMetadata: a.activeFilters?.weakMetadata || "",
      unreviewedImports: a.activeFilters?.unreviewedImports || "",
      sort: a.activeFilters?.sort || "title"
    }), V = q(() => a.settingsUrl || ""), oe = q(() => a.requestToken || ""), Le = q(() => a.metadataExportUrl || ""), Ne = q(() => a.metadataSidecarManifestUrl || ""), Be = q(() => a.metadataSidecarBundleUrl || ""), Ce = q(() => a.catalogueEndpointUrl || "/apps/library/catalogue"), Me = q(() => a.batchTagUrl || "/apps/library/bulk/tags"), rt = q(() => a.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), dt = q(() => a.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ye = q(() => a.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), xt = q(() => a.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), $e = q(() => a.scannerConflictReviewUrl || "?scannerConflicts=1"), Ue = q(() => a.metadataErrorsUrl || "/apps/library/health/metadata-errors"), _e = q(() => a.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), de = q(() => a.coverProbeUrl || "/apps/library/health/covers/probe"), qe = q(() => a.importHealthSummaryUrl || "/apps/library/health/import-summary"), ve = /* @__PURE__ */ nr({
      summary: a.importHealthSummary || {},
      loaded: !!(a.importHealthSummary && Object.keys(a.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), xe = q(() => ve.summary || {}), ze = q(() => {
      const x = Number(xe.value.generatedAt || 0);
      return x > 0 ? new Date(x * 1e3).toLocaleString() : "";
    }), Je = q(() => xe.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), be = q(() => xe.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), Nt = q(() => xe.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), We = q(() => xe.value.coverSupportMatrix || Nt.value.byFormat || []), ft = q(() => xe.value.environmentCapabilities || {}), _t = q(() => a.discoveryPage === "publication"), At = q(() => a.discoveryPage === "year"), nt = q(() => a.discoveryPage === "creator"), at = q(() => _t.value || At.value || nt.value), m = q(() => a.discoveryTitle || L.publication || L.year || L.creator || ""), b = q(() => at.value ? m.value : l("library", "Publication catalogue")), _ = q(() => nt.value ? l("library", "Creator") : At.value ? l("library", "Publication year") : l("library", "Publication / series")), O = q(() => Number(a.rootCount || 0)), T = q(() => Number(a.enabledRootCount || 0)), k = q(() => O.value === 0), M = q(() => O.value > 0 && T.value === 0), D = q(() => N.value.length > 0), U = {
      q: "Search",
      view: "View mode",
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
      starred: "Starred",
      needsMetadata: "Needs metadata",
      coverReview: "Cover review",
      noCreator: "No creator",
      noPublication: "No publication/series",
      noDate: "Missing date",
      titleFromFilename: "Filename-derived title",
      noDescription: "No description",
      unsupportedContainer: "Unsupported archive/container",
      weakMetadata: "Weak metadata",
      unreviewedImports: "Unreviewed imports"
    }, A = q(() => {
      if (typeof window > "u") return "";
      const x = new URLSearchParams(window.location.search);
      if (x.get("batchMetadataApplyResult") !== "1") return "";
      const C = x.get("batchMetadataField") || "field", d = x.get("batchMetadataApplied") || "0", ne = x.get("batchMetadataUnchanged") || "0", He = x.get("batchMetadataSkipped") || "0";
      return l("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: d, field: C, unchanged: ne, skipped: He });
    }), K = q(() => a.savedCollections || []), $ = q(() => a.savedCollectionSaveUrl || "/apps/library/collections"), G = q(() => a.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Z = ["compact", "gallery", "shelf"], Q = q(() => Z.includes(L.view) ? L.view : "compact"), P = q(() => ({
      "library-cover-gallery--compact": Q.value === "compact",
      "library-cover-gallery--gallery": Q.value === "gallery",
      "library-cover-gallery--shelf": Q.value === "shelf"
    })), N = q(() => Object.entries(U).map(([x, C]) => ({ key: x, label: C, value: L[x] || "" })).filter((x) => String(x.value).trim() !== "")), H = q(() => Object.entries(L).filter(([x, C]) => !["q", "sort", "starred"].includes(x) && String(C || "").trim() !== "").map(([x, C]) => ({ key: x, value: C }))), te = q(() => Object.entries(L).filter(([x, C]) => String(C || "").trim() !== "").map(([x, C]) => ({ key: x, value: C }))), le = /* @__PURE__ */ nr({}), ye = /* @__PURE__ */ nr({}), fe = q(() => o.value.filter((x) => x.starred || x.workflowStatus === "reading" || x.lastOpenedAt).slice(0, 5)), De = q(() => [...o.value].slice(0, 6)), we = q(() => o.value.find((x) => x.description || x.publication || x.creators) || o.value[0] || null), Pe = q(() => !at.value && o.value.length > 0), he = /* @__PURE__ */ Oi(null), pt = q(() => he.value ? o.value.findIndex((x) => x.id === he.value.id) : -1), Ht = q(() => pt.value > 0 ? o.value[pt.value - 1] : null), pr = q(() => pt.value >= 0 && pt.value < o.value.length - 1 ? o.value[pt.value + 1] : null);
    function ht(x) {
      he.value = x;
    }
    function vt() {
      he.value = null;
    }
    function Jt(x) {
      x && (he.value = x);
    }
    const wt = /* @__PURE__ */ Oi(null);
    let jt = null;
    function kt(x) {
      const C = new URLSearchParams(new FormData(x));
      for (const d of Array.from(C.keys()))
        String(C.get(d) || "").trim() === "" && C.delete(d);
      return C.delete("page"), C.get("view") === "compact" && C.delete("view"), C;
    }
    function Lr(x) {
      i.splice(0, i.length, ...(x.items || []).map((C) => ({ ...C })));
      for (const C of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(x, C) && (a[C] = x[C]);
      Object.assign(L, x.activeFilters || {});
    }
    async function Pt(x = !1) {
      if (!(ve.loading || ve.refreshing)) {
        x ? ve.refreshing = !0 : ve.loading = !0, ve.error = "";
        try {
          const C = await fetch(`${qe.value}${x ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!C.ok)
            throw new Error(`Import health request failed: ${C.status}`);
          ve.summary = await C.json(), ve.loaded = !0;
        } catch (C) {
          ve.error = C?.message || String(C);
        } finally {
          ve.loading = !1, ve.refreshing = !1;
        }
      }
    }
    async function Zt(x) {
      x && x.currentTarget && x.currentTarget.open !== !0 || ve.loaded || ve.loading || await Pt(!1);
    }
    async function it() {
      await Pt(!0);
    }
    async function St(x) {
      const C = x?.currentTarget?.tagName === "FORM" ? x.currentTarget : x?.currentTarget?.form;
      if (!C) return;
      const ne = kt(C).toString(), He = ne ? `?${ne}` : "", It = await fetch(Ce.value + He, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!It.ok) {
        C.submit();
        return;
      }
      Lr(await It.json()), history.replaceState({}, "", ne ? `?${ne}` : window.location.pathname);
    }
    function Mr(x) {
      St(x);
    }
    function Jr(x) {
      window.clearTimeout(jt), jt = window.setTimeout(() => Mr(x), 350);
    }
    function kn(x) {
      const C = new URLSearchParams();
      for (const [ne, He] of Object.entries(L)) {
        const It = String(He || "").trim();
        It !== "" && ne !== x && !(ne === "sort" && It === "title") && !(ne === "view" && It === "compact") && C.set(ne, It);
      }
      const d = C.toString();
      return d ? `?${d}` : "?";
    }
    function Rn() {
      return kn("q");
    }
    const Ur = q(() => a.smartViewCounts || {}), Zr = q(() => {
      const x = {};
      for (const [C, d] of Object.entries(L)) {
        const ne = String(d || "").trim();
        ne !== "" && !(C === "sort" && ne === "title") && (x[C] = ne);
      }
      return x;
    }), Qr = q(() => JSON.stringify(Zr.value)), en = q(() => Object.keys(Zr.value).length > 0), _r = q(() => [
      { key: "recently-opened", label: "Recently opened", description: "Continue from the publications you opened through Library.", query: "sort=lastOpened", filters: { sort: "lastOpened" } },
      { key: "starred", label: "Starred", description: "Your marked publications and reference items.", query: "starred=1", filters: { starred: "1" } },
      { key: "to-read", label: "To read", description: "Publications queued for later.", query: "workflowStatus=to-read", filters: { workflowStatus: "to-read" } },
      { key: "reading", label: "Reading", description: "Publications currently in progress.", query: "workflowStatus=reading", filters: { workflowStatus: "reading" } },
      { key: "finished", label: "Finished", description: "Completed publications.", query: "workflowStatus=finished", filters: { workflowStatus: "finished" } },
      { key: "needs-action", label: "Needs action", description: "Items that need a cleanup or follow-up decision.", query: "workflowStatus=needs-action", filters: { workflowStatus: "needs-action" } },
      { key: "needs-metadata", label: "Needs metadata", description: "Items with missing core fields, extraction errors, or filename-only metadata.", query: "needsMetadata=1", filters: { needsMetadata: "1" } },
      { key: "scanner-conflicts", label: "Scanner conflicts", description: "Rows where current metadata differs from scanner candidates.", query: "scannerConflicts=1", filters: { scannerConflicts: "1" } },
      { key: "metadata-errors", label: "Metadata errors", description: "Files whose metadata extraction needs review.", query: "status=metadata_error", filters: { status: "metadata_error" } },
      { key: "placeholder-covers", label: "Placeholder covers", description: "Likely placeholder-cover candidates without a manual cover override.", query: "coverReview=placeholder", filters: { coverReview: "placeholder" } },
      { key: "no-creator", label: "No creator", description: "Publications without creator metadata.", query: "noCreator=1", filters: { noCreator: "1" } },
      { key: "no-publication", label: "No publication/series", description: "Items without publication, series, periodical or collection metadata.", query: "noPublication=1", filters: { noPublication: "1" } },
      { key: "missing-date", label: "Missing date", description: "Items without a publication date or year.", query: "noDate=1", filters: { noDate: "1" } },
      { key: "title-from-filename", label: "Filename-derived title", description: "Rows whose title still comes from filename/path parsing.", query: "titleFromFilename=1", filters: { titleFromFilename: "1" } },
      { key: "weak-filename-metadata", label: "Weak filename metadata", description: "Items whose metadata still depends on filename/folder parsing.", query: "weakMetadata=filename", filters: { weakMetadata: "filename" } },
      { key: "no-description", label: "No description", description: "Rows without summary or description text.", query: "noDescription=1", filters: { noDescription: "1" } },
      { key: "unsupported-containers", label: "Unsupported archive/container", description: "Archive/container formats that Library cannot inspect deeply yet.", query: "unsupportedContainer=1", filters: { unsupportedContainer: "1" } },
      { key: "unreviewed-imports", label: "Unreviewed imports", description: "Scanner-created catalogue rows not yet touched by user review.", query: "unreviewedImports=1", filters: { unreviewedImports: "1" } }
    ]), ma = q(() => [
      { key: "no-creator", label: "Missing creator", description: "Creator field is empty.", filters: { noCreator: "1" } },
      { key: "no-publication", label: "Missing publication/series", description: "No publication, series, periodical or collection.", filters: { noPublication: "1" } },
      { key: "missing-date", label: "Missing date", description: "No publication year/date is indexed.", filters: { noDate: "1" } },
      { key: "title-from-filename", label: "Filename-derived title", description: "Title was inferred from the source path.", filters: { titleFromFilename: "1" } },
      { key: "weak-filename-metadata", label: "Filename/path-derived metadata", description: "At least one indexed field still depends on filename parsing.", filters: { weakMetadata: "filename" } },
      { key: "placeholder-covers", label: "Placeholder cover", description: "Likely placeholder-cover candidates.", filters: { coverReview: "placeholder" } },
      { key: "scanner-conflicts", label: "Scanner conflict", description: "Current metadata differs from scanner candidates.", filters: { scannerConflicts: "1" } },
      { key: "metadata-errors", label: "Metadata extraction error", description: "Scanner recorded a metadata extraction error.", filters: { status: "metadata_error" } },
      { key: "no-description", label: "No description", description: "No summary/description text is indexed.", filters: { noDescription: "1" } },
      { key: "unsupported-containers", label: "Unsupported archive/container", description: "Container type needs manual inspection or future extractor support.", filters: { unsupportedContainer: "1" } }
    ]);
    function tn(x) {
      if (!Z.includes(x)) return;
      L.view = x;
      const C = new URLSearchParams(window.location.search);
      x === "compact" ? C.delete("view") : C.set("view", x), C.delete("page"), history.replaceState({}, "", C.toString() ? `?${C.toString()}` : window.location.pathname);
    }
    function Oe(x) {
      const C = new URLSearchParams(window.location.search);
      for (const ne of Object.keys(U))
        C.delete(ne);
      C.delete("page");
      for (const [ne, He] of Object.entries(x))
        String(He || "").trim() !== "" && C.set(ne, String(He));
      const d = C.toString();
      return d ? `?${d}` : "?";
    }
    function hr(x) {
      return Oe(x || {});
    }
    function ba(x) {
      return G.value.replace("__COLLECTION_ID__", encodeURIComponent(String(x || "0")));
    }
    function Qt(x) {
      return String(x || "").toUpperCase();
    }
    function Dr(x) {
      return x.nextcloudTags || [];
    }
    function On(x) {
      return y.value.find((d) => d.publication === x)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(x)}`;
    }
    function Nn(x) {
      return a.publicationYearLandingUrls?.[x] || `/apps/library/years/${encodeURIComponent(x)}`;
    }
    function ya(x) {
      return a.creatorLandingUrls?.[x] || `/apps/library/creators/${encodeURIComponent(x)}`;
    }
    function vr(x) {
      return ye[x.id] || "loading";
    }
    function ga(x) {
      ye[x.id] = "loaded";
    }
    function _a(x) {
      ye[x.id] = "error";
    }
    function Vt(x, C) {
      le[x] = !!C?.currentTarget?.open;
    }
    function Pn(x) {
      const C = String(x?.tagName || "").toLowerCase();
      return x?.isContentEditable || ["input", "select", "textarea", "button"].includes(C);
    }
    function Fr(x) {
      x.key !== "/" || x.metaKey || x.ctrlKey || x.altKey || x.shiftKey || Pn(x.target) || (x.preventDefault(), wt.value?.focus(), wt.value?.select?.());
    }
    function er(x) {
      x.key !== "Escape" || document.activeElement !== wt.value || L.q === "" || (x.preventDefault(), L.q = "", wt.value.value = "", window.clearTimeout(jt), Mr({ currentTarget: wt.value }));
    }
    function In(x) {
      Fr(x), er(x);
    }
    al(() => {
      window.addEventListener("keydown", In);
    }), il(() => {
      window.removeEventListener("keydown", In);
    });
    async function wr(x, C) {
      const d = C?.currentTarget?.closest?.("form") || C?.currentTarget;
      if (!d || !x?.starUrl) return;
      const ne = !!x.starred;
      x.starred = !ne;
      try {
        (await fetch(x.starUrl, {
          method: "POST",
          body: new FormData(d),
          credentials: "same-origin"
        })).ok || (x.starred = ne);
      } catch {
        x.starred = ne;
      }
    }
    return (x, C) => (w(), E("div", Zu, [
      s("section", Qu, [
        s("div", ed, [
          s("div", null, [
            at.value ? (w(), E("p", td, c(_.value), 1)) : Y("", !0),
            s("h2", rd, c(b.value), 1),
            s("p", nd, c(at.value ? p(l)("library", "Browse this focused view; use filters only when you need to narrow it further.") : p(l)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          s("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": p(l)("library", "Library actions")
          }, [
            s("details", {
              class: "library-catalogue-actions-menu",
              onToggle: Zt
            }, [
              s("summary", null, c(p(l)("library", "Actions")), 1),
              s("div", id, [
                s("a", {
                  href: V.value,
                  class: "button secondary",
                  "aria-label": "Open Library settings"
                }, c(p(l)("library", "Settings")), 9, sd),
                Le.value ? (w(), E("a", {
                  key: 0,
                  href: Le.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, c(p(l)("library", "Export corrected metadata")), 9, ld)) : Y("", !0),
                Ne.value ? (w(), E("a", {
                  key: 1,
                  href: Ne.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar manifest"
                }, c(p(l)("library", "Sidecar manifest")), 9, od)) : Y("", !0),
                Be.value ? (w(), E("a", {
                  key: 2,
                  href: Be.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar ZIP"
                }, c(p(l)("library", "Sidecar ZIP")), 9, cd)) : Y("", !0),
                s("div", ud, [
                  s("p", dd, c(p(l)("library", "Import health")), 1),
                  s("h3", fd, c(p(l)("library", "Metadata overview")), 1),
                  s("p", pd, c(p(l)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")), 1),
                  ve.loading ? (w(), E("p", hd, c(p(l)("library", "Loading cached metadata overview…")), 1)) : ve.error ? (w(), E("p", md, c(ve.error), 1)) : ve.loaded ? Y("", !0) : (w(), E("p", bd, c(p(l)("library", "Open Actions to load the cached metadata and cover overview.")), 1)),
                  ve.loaded ? (w(), E(ee, { key: 3 }, [
                    xe.value.message ? (w(), E("p", yd, c(xe.value.message), 1)) : xe.value.cacheStatus === "missing" ? (w(), E("p", gd, c(p(l)("library", "No cached metadata overview exists yet")), 1)) : Y("", !0),
                    ze.value ? (w(), E("p", _d, c(p(l)("library", "Last generated")) + ": " + c(ze.value), 1)) : Y("", !0),
                    s("button", {
                      type: "button",
                      class: "button secondary library-import-health-refresh",
                      disabled: ve.refreshing,
                      onClick: it
                    }, c(ve.refreshing ? p(l)("library", "Refreshing metadata overview…") : p(l)("library", "Refresh metadata overview")), 9, vd),
                    s("div", wd, [
                      s("a", {
                        class: "button secondary",
                        href: Je.value.reviewUrl || "?status=metadata_error"
                      }, c(p(l)("library", "Review metadata errors")), 9, Sd),
                      s("a", {
                        class: "button secondary",
                        href: Ue.value
                      }, c(p(l)("library", "Full review")), 9, Ed),
                      s("a", {
                        class: "button secondary",
                        href: _e.value
                      }, c(p(l)("library", "Export TSV")), 9, Cd),
                      s("a", {
                        class: "button secondary",
                        href: de.value
                      }, c(p(l)("library", "Probe covers")), 9, Td)
                    ]),
                    s("div", xd, [
                      s("article", null, [
                        s("h4", null, c(p(l)("library", "Metadata errors")), 1),
                        s("p", Ad, c(Je.value.total || 0), 1),
                        s("ul", null, [
                          (w(!0), E(ee, null, me(Je.value.byExtension, (d) => (w(), E("li", {
                            key: d.extension
                          }, c(Qt(d.extension)) + " · " + c(d.count), 1))), 128))
                        ])
                      ]),
                      s("article", null, [
                        s("h4", null, c(p(l)("library", "Archive/container check")), 1),
                        s("p", kd, c(be.value.mismatches || 0), 1),
                        s("ul", null, [
                          (w(!0), E(ee, null, me(be.value.byExtensionAndContainer, (d) => (w(), E("li", {
                            key: `${d.extension}-${d.actualContainerType}`
                          }, c(Qt(d.extension)) + " · " + c(d.actualContainerType) + " · " + c(d.count), 1))), 128))
                        ])
                      ]),
                      s("article", null, [
                        s("h4", null, c(p(l)("library", "Cover health")), 1),
                        s("p", Rd, c(Nt.value.note), 1),
                        s("ul", null, [
                          (w(!0), E(ee, null, me(Nt.value.byFormat, (d) => (w(), E("li", {
                            key: `${d.extension}-${d.nextcloudPreview}-${d.libraryCoverRoute}`
                          }, c(Qt(d.extension)) + " · nextcloudPreview: " + c(d.nextcloudPreview) + " · libraryCoverRoute: " + c(d.libraryCoverRoute) + " · " + c(d.count), 1))), 128))
                        ])
                      ]),
                      s("article", null, [
                        s("h4", null, c(p(l)("library", "Cover support matrix")), 1),
                        s("p", Od, c(p(l)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1),
                        s("ul", null, [
                          (w(!0), E(ee, null, me(We.value, (d) => (w(), E("li", {
                            key: `${d.extension}-${d.nextcloudPreview}-${d.libraryCoverRoute}-${d.count}`
                          }, c(Qt(d.extension)) + " · Nextcloud/plugin preview: " + c(d.nextcloudPreview) + " · Library extraction: " + c(d.libraryCoverRoute) + " · " + c(d.count), 1))), 128))
                        ]),
                        s("p", Nd, c(p(l)("library", "Extractor tools")) + ": ZIP=" + c(ft.value.phpZipArchive ? "ZipArchive" : "missing") + " · 7z=" + c(ft.value.sevenZipCommand || "missing") + " · RAR=" + c(ft.value.rarCommand || "missing") + " · bsdtar=" + c(ft.value.bsdtarCommand || "missing"), 1)
                      ])
                    ]),
                    Je.value.examples?.length ? (w(), E("details", Pd, [
                      s("summary", null, c(p(l)("library", "Example files and suggested actions")), 1),
                      s("ul", null, [
                        (w(!0), E(ee, null, me(Je.value.examples, (d) => (w(), E("li", {
                          key: `${d.fileId}-${d.path}`
                        }, [
                          s("code", null, c(d.path), 1),
                          s("span", null, c(d.scanStatus) + " · " + c(d.scanError) + " · " + c(d.actualContainerType), 1),
                          s("strong", null, c(d.suggestedRepairAction), 1)
                        ]))), 128))
                      ])
                    ])) : Y("", !0)
                  ], 64)) : Y("", !0),
                  s("div", Id, [
                    s("article", null, [
                      s("h4", null, c(p(l)("library", "Metadata-error queue")), 1),
                      s("p", Ld, c(p(l)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")), 1),
                      s("a", {
                        class: "button secondary",
                        href: Je.value.reviewUrl || "?status=metadata_error"
                      }, c(p(l)("library", "Open metadata-error rows")), 9, Md),
                      s("a", {
                        class: "button secondary",
                        href: _e.value
                      }, c(p(l)("library", "Export metadata-error rows")), 9, Ud),
                      s("form", {
                        method: "post",
                        action: Me.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        s("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: oe.value
                        }, null, 8, Fd),
                        C[25] || (C[25] = s("input", {
                          type: "hidden",
                          name: "status",
                          value: "metadata_error"
                        }, null, -1)),
                        C[26] || (C[26] = s("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-metadata-error"
                        }, null, -1)),
                        s("button", $d, c(p(l)("library", "Tag metadata-error rows")), 1)
                      ], 8, Dd)
                    ]),
                    s("article", null, [
                      s("h4", null, c(p(l)("library", "Scanner-conflict queue")), 1),
                      s("p", Hd, c(p(l)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")), 1),
                      s("a", {
                        class: "button secondary",
                        href: $e.value
                      }, c(p(l)("library", "Open scanner-conflict rows")), 9, jd),
                      s("form", {
                        method: "post",
                        action: Me.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        s("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: oe.value
                        }, null, 8, Bd),
                        C[27] || (C[27] = s("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        C[28] || (C[28] = s("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-scanner-conflict"
                        }, null, -1)),
                        s("button", qd, c(p(l)("library", "Tag scanner-conflict rows")), 1)
                      ], 8, Vd)
                    ])
                  ])
                ])
              ])
            ], 32)
          ], 8, ad)
        ]),
        A.value ? (w(), E("p", zd, c(A.value), 1)) : Y("", !0),
        Pe.value ? (w(), E("section", Wd, [
          s("article", Gd, [
            s("p", Kd, c(p(l)("library", "Home dashboard")), 1),
            s("h3", Yd, c(p(l)("library", "Continue reading")), 1),
            s("p", Xd, c(p(l)("library", "Fast entry points keep browsing visual: continue, revisit recent additions, or rediscover one shelf item without opening admin tools.")), 1),
            s("div", Jd, [
              fe.value[0] ? (w(), E("a", {
                key: 0,
                class: "button primary",
                href: fe.value[0].openUrl
              }, c(p(l)("library", "Read now")), 9, Zd)) : Y("", !0),
              fe.value[0] ? (w(), E("button", {
                key: 1,
                type: "button",
                class: "button secondary",
                onClick: C[0] || (C[0] = (d) => ht(fe.value[0]))
              }, c(p(l)("library", "Open details drawer")), 1)) : Y("", !0)
            ])
          ]),
          s("nav", {
            class: "library-home-rail",
            "aria-label": p(l)("library", "Recently added")
          }, [
            s("h4", null, c(p(l)("library", "Recently added")), 1),
            (w(!0), E(ee, null, me(De.value, (d) => (w(), E("button", {
              key: `recent-${d.id}`,
              type: "button",
              class: "library-home-mini-card",
              onClick: (ne) => ht(d)
            }, [
              s("img", {
                src: d.coverUrl,
                alt: `Cover for ${d.title}`,
                loading: "lazy"
              }, null, 8, tf),
              s("span", null, c(d.title), 1)
            ], 8, ef))), 128))
          ], 8, Qd),
          we.value ? (w(), E("article", rf, [
            s("p", nf, c(p(l)("library", "Rediscover")), 1),
            s("strong", null, c(we.value.title), 1),
            s("span", af, c(we.value.creators || we.value.publication || we.value.cachedPath), 1),
            s("button", {
              type: "button",
              class: "button secondary",
              onClick: C[1] || (C[1] = (d) => ht(we.value))
            }, c(p(l)("library", "Peek")), 1)
          ])) : Y("", !0)
        ])) : Y("", !0),
        s("section", sf, [
          s("div", lf, [
            s("p", of, c(p(l)("library", "Useful views")), 1),
            s("h3", cf, c(p(l)("library", "Useful views")), 1),
            s("p", uf, c(p(l)("library", "One-click smart views reuse normal catalogue filters, so active chips still explain what you are seeing.")), 1),
            s("p", df, c(p(l)("library", "Empty useful views mean no current catalogue items match that saved direction yet; add metadata, star items, update workflow status, or run a scan to create matches.")), 1)
          ]),
          s("nav", {
            class: "library-useful-view-links",
            "aria-label": p(l)("library", "Built-in useful catalogue views")
          }, [
            (w(!0), E(ee, null, me(_r.value, (d) => (w(), E("a", {
              key: d.key,
              class: "library-useful-view-chip",
              href: Oe(d.filters),
              title: d.description
            }, [
              s("strong", null, c(p(l)("library", d.label)), 1),
              s("span", null, c(p(l)("library", d.description)), 1),
              s("small", hf, c(Number(Ur.value[d.key] || 0)), 1)
            ], 8, pf))), 128))
          ], 8, ff)
        ]),
        s("section", mf, [
          s("div", bf, [
            s("p", yf, c(p(l)("library", "Metadata cleanup")), 1),
            s("h3", gf, c(p(l)("library", "Weak metadata cockpit")), 1),
            s("p", _f, c(p(l)("library", "Counts are derived from indexed metadata and scanner provenance, not manual lists; compact cards stay browse-first while Details carries repair actions.")), 1)
          ]),
          s("nav", {
            class: "library-weak-metadata-links",
            "aria-label": p(l)("library", "Weak metadata catalogue views")
          }, [
            (w(!0), E(ee, null, me(ma.value, (d) => (w(), E("a", {
              key: d.key,
              class: "library-weak-metadata-card",
              href: Oe(d.filters),
              title: d.description
            }, [
              s("span", null, [
                s("strong", null, c(p(l)("library", d.label)), 1),
                s("small", null, c(p(l)("library", d.description)), 1)
              ]),
              s("b", null, c(Number(Ur.value[d.key] || 0)), 1)
            ], 8, wf))), 128))
          ], 8, vf)
        ]),
        s("section", Sf, [
          s("div", Ef, [
            s("p", Cf, c(p(l)("library", "Custom collections")), 1),
            s("h3", Tf, c(p(l)("library", "Custom collections")), 1),
            s("p", xf, c(p(l)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")), 1)
          ]),
          s("form", {
            method: "post",
            action: $.value,
            class: "library-saved-collection-save-form"
          }, [
            s("input", {
              type: "hidden",
              name: "requesttoken",
              value: oe.value
            }, null, 8, kf),
            s("input", {
              type: "hidden",
              name: "savedCollectionFilters",
              value: Qr.value
            }, null, 8, Rf),
            s("label", null, [
              pe(c(p(l)("library", "Collection name")) + " ", 1),
              s("input", {
                type: "text",
                name: "savedCollectionName",
                placeholder: p(l)("library", "e.g. Bremen photo books"),
                disabled: !en.value,
                autocomplete: "off"
              }, null, 8, Of)
            ]),
            s("button", {
              type: "submit",
              class: "button secondary",
              disabled: !en.value
            }, c(p(l)("library", "Save current view")), 9, Nf)
          ], 8, Af),
          en.value ? Y("", !0) : (w(), E("p", Pf, c(p(l)("library", "Choose search terms or filters first, then save them as a custom collection.")), 1)),
          K.value.length > 0 ? (w(), E("nav", {
            key: 1,
            class: "library-saved-collection-links",
            "aria-label": p(l)("library", "Saved custom collections")
          }, [
            (w(!0), E(ee, null, me(K.value, (d) => (w(), E("article", {
              key: d.id,
              class: "library-saved-collection-card"
            }, [
              s("a", {
                class: "library-saved-collection-link",
                href: hr(d.filters)
              }, [
                s("strong", null, c(d.name), 1),
                s("span", null, c(Number(d.count || 0)) + " " + c(p(l)("library", "items")), 1)
              ], 8, Lf),
              s("form", {
                method: "post",
                action: ba(d.id),
                class: "library-saved-collection-delete-form"
              }, [
                s("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: oe.value
                }, null, 8, Uf),
                s("button", Df, c(p(l)("library", "Delete")), 1)
              ], 8, Mf)
            ]))), 128))
          ], 8, If)) : Y("", !0)
        ]),
        s("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": p(l)("library", "Quick catalogue filters"),
          onSubmit: Vn(St, ["prevent"])
        }, [
          (w(!0), E(ee, null, me(H.value, (d) => (w(), E("input", {
            key: d.key,
            type: "hidden",
            name: d.key,
            value: d.value
          }, null, 8, $f))), 128)),
          s("div", Hf, [
            s("label", jf, [
              s("span", null, [
                pe(c(p(l)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                C[29] || (C[29] = s("kbd", { class: "library-keyboard-hint" }, "/", -1))
              ]),
              Ge(s("input", {
                ref_key: "quickSearchInput",
                ref: wt,
                "onUpdate:modelValue": C[2] || (C[2] = (d) => L.q = d),
                "data-library-quick-search": "",
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope",
                onInput: Jr
              }, null, 544), [
                [Ma, L.q]
              ])
            ]),
            s("button", {
              type: "submit",
              class: "button primary",
              "aria-label": p(l)("library", "Search catalogue")
            }, c(p(l)("library", "Search")), 9, Vf)
          ]),
          s("details", Bf, [
            s("summary", null, c(p(l)("library", "Filter & sort")), 1),
            s("div", qf, [
              s("label", null, [
                pe(c(p(l)("library", "Sort")) + " ", 1),
                Ge(s("select", {
                  "onUpdate:modelValue": C[3] || (C[3] = (d) => L.sort = d),
                  name: "sort",
                  onChange: St
                }, [
                  s("option", zf, c(p(l)("library", "Title")), 1),
                  s("option", Wf, c(p(l)("library", "Recently added")), 1),
                  s("option", Gf, c(p(l)("library", "Publication date")), 1),
                  s("option", Kf, c(p(l)("library", "Series")), 1),
                  s("option", Yf, c(p(l)("library", "Recently opened")), 1),
                  s("option", Xf, c(p(l)("library", "Format")), 1)
                ], 544), [
                  [lt, L.sort]
                ])
              ]),
              s("label", null, [
                pe(c(p(l)("library", "Starred")) + " ", 1),
                Ge(s("select", {
                  "onUpdate:modelValue": C[4] || (C[4] = (d) => L.starred = d),
                  name: "starred",
                  onChange: St
                }, [
                  s("option", Jf, c(p(l)("library", "All")), 1),
                  s("option", Zf, c(p(l)("library", "Starred")), 1)
                ], 544), [
                  [lt, L.starred]
                ])
              ]),
              s("label", null, [
                pe(c(p(l)("library", "Size")) + " ", 1),
                s("select", {
                  value: z.value.limit,
                  name: "limit",
                  onChange: St
                }, [
                  (w(), E(ee, null, me(n, (d) => s("option", {
                    key: d,
                    value: d
                  }, c(d), 9, ep)), 64))
                ], 40, Qf)
              ]),
              s("button", {
                type: "submit",
                class: "button secondary",
                "aria-label": p(l)("library", "Apply catalogue filters")
              }, c(p(l)("library", "Apply filters")), 9, tp),
              s("a", {
                href: "?",
                class: "button secondary",
                "aria-label": p(l)("library", "Clear catalogue filters")
              }, c(p(l)("library", "Clear all")), 9, rp)
            ])
          ])
        ], 40, Ff),
        s("details", np, [
          s("summary", ap, c(p(l)("library", "Show catalogue filters")), 1),
          s("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": p(l)("library", "Catalogue search and filters"),
            onSubmit: Vn(St, ["prevent"])
          }, [
            s("label", null, [
              pe(c(p(l)("library", "Search title, creator, description, filename or folder")) + " ", 1),
              Ge(s("input", {
                "onUpdate:modelValue": C[5] || (C[5] = (d) => L.q = d),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope"
              }, null, 512), [
                [Ma, L.q]
              ])
            ]),
            s("p", sp, c(p(l)("library", "Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")), 1),
            s("label", null, [
              pe(c(p(l)("library", "Type")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[6] || (C[6] = (d) => L.type = d),
                name: "type"
              }, [
                s("option", lp, c(p(l)("library", "All types")), 1),
                (w(), E(ee, null, me(r, (d) => s("option", {
                  key: d,
                  value: d
                }, c(d), 9, op)), 64))
              ], 512), [
                [lt, L.type]
              ])
            ]),
            s("label", null, [
              pe(c(p(l)("library", "Series / periodical")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[7] || (C[7] = (d) => L.publication = d),
                name: "publication"
              }, [
                s("option", cp, c(p(l)("library", "All series and periodicals")), 1),
                (w(!0), E(ee, null, me(v.value, (d) => (w(), E("option", {
                  key: d,
                  value: d
                }, c(d), 9, up))), 128))
              ], 512), [
                [lt, L.publication]
              ])
            ]),
            s("label", null, [
              pe(c(p(l)("library", "Publication year")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[8] || (C[8] = (d) => L.year = d),
                name: "year"
              }, [
                s("option", dp, c(p(l)("library", "All years")), 1),
                (w(!0), E(ee, null, me(I.value, (d) => (w(), E("option", {
                  key: d,
                  value: d
                }, c(d), 9, fp))), 128))
              ], 512), [
                [lt, L.year]
              ])
            ]),
            s("label", null, [
              pe(c(p(l)("library", "Creator")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[9] || (C[9] = (d) => L.creator = d),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                s("option", pp, c(p(l)("library", "All creators")), 1),
                (w(!0), E(ee, null, me(j.value, (d) => (w(), E("option", {
                  key: d,
                  value: d
                }, c(d), 9, hp))), 128))
              ], 512), [
                [lt, L.creator]
              ])
            ]),
            s("label", null, [
              pe(c(p(l)("library", "Nextcloud tag")) + " ", 1),
              Ge(s("input", {
                "onUpdate:modelValue": C[10] || (C[10] = (d) => L.tag = d),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [Ma, L.tag]
              ])
            ]),
            s("label", null, [
              pe(c(p(l)("library", "Format")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[11] || (C[11] = (d) => L.format = d),
                name: "format"
              }, [
                s("option", mp, c(p(l)("library", "All formats")), 1),
                (w(!0), E(ee, null, me(h.value, (d) => (w(), E("option", {
                  key: d,
                  value: d
                }, c(Qt(d)), 9, bp))), 128))
              ], 512), [
                [lt, L.format]
              ])
            ]),
            s("label", null, [
              pe(c(p(l)("library", "Shelf")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[12] || (C[12] = (d) => L.shelf = d),
                name: "shelf"
              }, [
                s("option", yp, c(p(l)("library", "All shelves")), 1),
                (w(!0), E(ee, null, me(u.value, (d) => (w(), E("option", {
                  key: d,
                  value: d
                }, c(d), 9, gp))), 128))
              ], 512), [
                [lt, L.shelf]
              ])
            ]),
            s("label", null, [
              pe(c(p(l)("library", "Scan status")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[13] || (C[13] = (d) => L.status = d),
                name: "status"
              }, [
                s("option", _p, c(p(l)("library", "All scan statuses")), 1),
                (w(!0), E(ee, null, me(ie.value, (d) => (w(), E("option", {
                  key: d,
                  value: d
                }, c(d), 9, vp))), 128))
              ], 512), [
                [lt, L.status]
              ])
            ]),
            s("label", null, [
              pe(c(p(l)("library", "Workflow status")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[14] || (C[14] = (d) => L.workflowStatus = d),
                name: "workflowStatus"
              }, [
                s("option", wp, c(p(l)("library", "All workflow statuses")), 1),
                (w(!0), E(ee, null, me(W.value, (d) => (w(), E("option", {
                  key: d,
                  value: d
                }, c(d), 9, Sp))), 128))
              ], 512), [
                [lt, L.workflowStatus]
              ])
            ]),
            s("label", null, [
              pe(c(p(l)("library", "Genre")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[15] || (C[15] = (d) => L.genre = d),
                name: "genre"
              }, [
                s("option", Ep, c(p(l)("library", "All genres")), 1),
                (w(!0), E(ee, null, me(ce.value, (d) => (w(), E("option", {
                  key: d,
                  value: d
                }, c(d), 9, Cp))), 128))
              ], 512), [
                [lt, L.genre]
              ])
            ]),
            s("label", null, [
              pe(c(p(l)("library", "Classification")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[16] || (C[16] = (d) => L.classification = d),
                name: "classification"
              }, [
                s("option", Tp, c(p(l)("library", "All classifications")), 1),
                (w(!0), E(ee, null, me(se.value, (d) => (w(), E("option", {
                  key: d,
                  value: d
                }, c(d), 9, xp))), 128))
              ], 512), [
                [lt, L.classification]
              ])
            ]),
            s("label", null, [
              pe(c(p(l)("library", "Scanner conflicts")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[17] || (C[17] = (d) => L.scannerConflicts = d),
                name: "scannerConflicts"
              }, [
                s("option", Ap, c(p(l)("library", "All metadata")), 1),
                s("option", kp, c(p(l)("library", "Needs review")), 1)
              ], 512), [
                [lt, L.scannerConflicts]
              ])
            ]),
            s("label", null, [
              pe(c(p(l)("library", "Starred")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[18] || (C[18] = (d) => L.starred = d),
                name: "starred"
              }, [
                s("option", Rp, c(p(l)("library", "All publications")), 1),
                s("option", Op, c(p(l)("library", "Starred only")), 1)
              ], 512), [
                [lt, L.starred]
              ])
            ]),
            s("label", null, [
              pe(c(p(l)("library", "Sort")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[19] || (C[19] = (d) => L.sort = d),
                name: "sort"
              }, [
                s("option", Np, c(p(l)("library", "Title")), 1),
                s("option", Pp, c(p(l)("library", "Recently added")), 1),
                s("option", Ip, c(p(l)("library", "Publication date")), 1),
                s("option", Lp, c(p(l)("library", "Series / periodical")), 1),
                s("option", Mp, c(p(l)("library", "Recently opened")), 1),
                s("option", Up, c(p(l)("library", "Format")), 1)
              ], 512), [
                [lt, L.sort]
              ])
            ]),
            s("label", null, [
              pe(c(p(l)("library", "Page size")) + " ", 1),
              s("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (w(), E(ee, null, me(n, (d) => s("option", {
                  key: d,
                  value: d
                }, c(d), 9, Fp)), 64))
              ], 8, Dp)
            ]),
            s("button", {
              type: "submit",
              class: "button primary",
              "aria-label": p(l)("library", "Apply catalogue filters")
            }, c(p(l)("library", "Apply filters")), 9, $p),
            s("a", {
              href: "?",
              class: "button secondary",
              "aria-label": p(l)("library", "Clear catalogue filters")
            }, c(p(l)("library", "Clear")), 9, Hp),
            s("a", {
              href: $e.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, c(p(l)("library", "Review scanner conflicts")), 9, jp)
          ], 40, ip)
        ]),
        at.value ? (w(), E("section", Vp, [
          s("p", Bp, c(_.value), 1),
          s("h3", qp, c(m.value), 1),
          s("p", zp, c(nt.value ? p(l)("library", "Items by this creator, sorted by publication context when available.") : At.value ? p(l)("library", "Items from this publication year, sorted by publication date when available.") : p(l)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          s("div", Wp, [
            s("span", null, c(z.value.total) + " " + c(p(l)("library", "items")), 1),
            S.value?.earliestYear && S.value?.latestYear ? (w(), E("span", Gp, c(S.value.earliestYear) + "–" + c(S.value.latestYear), 1)) : Y("", !0),
            S.value?.datedCount ? (w(), E("span", Kp, c(S.value.datedCount) + " " + c(p(l)("library", "dated")), 1)) : Y("", !0),
            S.value?.undatedCount > 0 ? (w(), E("span", Yp, c(S.value.undatedCount) + " " + c(p(l)("library", "undated")), 1)) : Y("", !0)
          ]),
          _t.value && S.value ? (w(), E("aside", Xp, [
            s("strong", null, c(p(l)("library", "Publication contents")), 1),
            s("span", null, c(S.value.itemCount) + " " + c(p(l)("library", "items")), 1),
            S.value.earliestYear && S.value.latestYear ? (w(), E("span", Jp, c(S.value.earliestYear) + "–" + c(S.value.latestYear), 1)) : Y("", !0),
            s("span", null, c(S.value.datedCount) + " " + c(p(l)("library", "with issue/date coverage")), 1),
            S.value.undatedCount > 0 ? (w(), E("span", Zp, c(S.value.undatedCount) + " " + c(p(l)("library", "without dates yet")), 1)) : Y("", !0),
            s("span", null, c(p(l)("library", "read-only grouping")), 1)
          ])) : Y("", !0),
          _t.value && S.value?.issueGroups?.length ? (w(), E("section", Qp, [
            s("div", null, [
              s("p", eh, c(p(l)("library", "Issue order")), 1),
              s("h4", th, c(p(l)("library", "Read-only issue/date grouping")), 1),
              s("p", rh, c(p(l)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")), 1)
            ]),
            s("div", nh, [
              (w(!0), E(ee, null, me(S.value.issueGroups, (d) => (w(), E("a", {
                key: `strip-${d.label}`,
                class: "library-issue-strip-card",
                href: d.items?.[0]?.detailsUrl || "#"
              }, [
                s("span", null, c(d.label), 1),
                s("strong", null, c(d.items?.[0]?.issueLabel || p(l)("library", "Issue")), 1),
                s("small", null, c(d.items?.length || 0) + " " + c(p(l)("library", "items")), 1)
              ], 8, ah))), 128))
            ]),
            S.value.gapRanges?.length ? (w(), E("p", ih, c(p(l)("library", "Gap")) + ": " + c(S.value.gapRanges.join(", ")), 1)) : Y("", !0),
            (w(!0), E(ee, null, me(S.value.issueGroups, (d) => (w(), E("div", {
              key: d.label,
              class: "library-publication-issue-group"
            }, [
              s("h5", null, c(d.label), 1),
              s("ol", null, [
                (w(!0), E(ee, null, me(d.items, (ne, He) => (w(), E("li", {
                  key: ne.itemId
                }, [
                  s("span", sh, c(ne.issueLabel), 1),
                  s("a", {
                    href: ne.detailsUrl || "#"
                  }, c(ne.title), 9, lh),
                  s("small", null, [
                    pe(c(ne.publicationType), 1),
                    ne.publicationDate ? (w(), E(ee, { key: 0 }, [
                      pe(" · " + c(ne.publicationDate), 1)
                    ], 64)) : Y("", !0)
                  ]),
                  s("small", oh, [
                    He > 0 ? (w(), E(ee, { key: 0 }, [
                      pe(c(p(l)("library", "Previous issue")), 1)
                    ], 64)) : Y("", !0),
                    He > 0 && He < d.items.length - 1 ? (w(), E(ee, { key: 1 }, [
                      pe(" · ")
                    ], 64)) : Y("", !0),
                    He < d.items.length - 1 ? (w(), E(ee, { key: 2 }, [
                      pe(c(p(l)("library", "Next issue")), 1)
                    ], 64)) : Y("", !0)
                  ])
                ]))), 128))
              ])
            ]))), 128)),
            S.value.unknownIssueItems?.length ? (w(), E("details", ch, [
              s("summary", null, c(p(l)("library", "Unknown issue/date")) + " · " + c(S.value.unknownIssueItems.length), 1),
              s("p", uh, c(p(l)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")), 1)
            ])) : Y("", !0)
          ])) : Y("", !0),
          s("p", null, [
            s("a", dh, c(p(l)("library", "Back to full catalogue")), 1)
          ])
        ])) : Y("", !0),
        s("nav", fh, [
          s("span", ph, c(p(l)("library", "Compact / Gallery / Shelf")), 1),
          s("button", {
            type: "button",
            "data-library-view-mode": "compact",
            class: Mt({ active: Q.value === "compact" }),
            "aria-pressed": Q.value === "compact" ? "true" : "false",
            onClick: C[20] || (C[20] = (d) => tn("compact"))
          }, c(p(l)("library", "Compact")), 11, hh),
          s("button", {
            type: "button",
            "data-library-view-mode": "gallery",
            class: Mt({ active: Q.value === "gallery" }),
            "aria-pressed": Q.value === "gallery" ? "true" : "false",
            onClick: C[21] || (C[21] = (d) => tn("gallery"))
          }, c(p(l)("library", "Gallery")), 11, mh),
          s("button", {
            type: "button",
            "data-library-view-mode": "shelf",
            class: Mt({ active: Q.value === "shelf" }),
            "aria-pressed": Q.value === "shelf" ? "true" : "false",
            onClick: C[22] || (C[22] = (d) => tn("shelf"))
          }, c(p(l)("library", "Shelf")), 11, bh)
        ]),
        s("div", yh, [
          s("p", gh, [
            pe(c(p(l)("library", "Showing")) + " " + c(z.value.from) + "–" + c(z.value.to) + " " + c(p(l)("library", "of")) + " " + c(z.value.total) + " " + c(p(l)("library", "catalogue items")), 1),
            N.value.length > 0 ? (w(), E("span", _h, [
              C[30] || (C[30] = pe(" · ", -1)),
              s("a", vh, c(p(l)("library", "Clear all filters")), 1)
            ])) : Y("", !0)
          ]),
          s("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": p(l)("library", "Catalogue pagination")
          }, [
            s("span", Sh, [
              pe(c(p(l)("library", "Page")) + " " + c(z.value.page), 1),
              z.value.total > 0 ? (w(), E("span", Eh, " · " + c(z.value.from) + "–" + c(z.value.to), 1)) : Y("", !0)
            ]),
            z.value.previousUrl ? (w(), E("a", {
              key: 0,
              href: z.value.previousUrl
            }, c(p(l)("library", "Previous")), 9, Ch)) : (w(), E("span", Th, c(p(l)("library", "Previous")), 1)),
            z.value.nextUrl ? (w(), E("a", {
              key: 2,
              href: z.value.nextUrl
            }, c(p(l)("library", "Next")), 9, xh)) : (w(), E("span", Ah, c(p(l)("library", "Next")), 1))
          ], 8, wh)
        ]),
        s("div", kh, [
          s("details", {
            class: "library-batch-actions",
            "aria-label": p(l)("library", "Batch actions for current results")
          }, [
            s("summary", null, [
              pe(c(p(l)("library", "Batch")) + " ", 1),
              s("span", Oh, c(z.value.total) + " " + c(p(l)("library", "Current filter result")), 1)
            ]),
            s("form", {
              method: "post",
              action: Me.value,
              class: "library-batch-tag-form"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: oe.value
              }, null, 8, Ph),
              (w(!0), E(ee, null, me(te.value, (d) => (w(), E("input", {
                key: d.key,
                type: "hidden",
                name: d.key,
                value: d.value
              }, null, 8, Ih))), 128)),
              s("label", null, [
                s("span", null, c(p(l)("library", "Nextcloud tag")), 1),
                s("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: p(l)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, Lh)
              ]),
              s("button", Mh, c(p(l)("library", "Apply Nextcloud tag to current results")), 1),
              s("p", Uh, c(p(l)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, Nh),
            s("form", {
              method: "post",
              action: rt.value,
              class: "library-batch-tag-remove-form"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: oe.value
              }, null, 8, Fh),
              (w(!0), E(ee, null, me(te.value, (d) => (w(), E("input", {
                key: `remove-tag-${d.key}`,
                type: "hidden",
                name: d.key,
                value: d.value
              }, null, 8, $h))), 128)),
              s("label", null, [
                s("span", null, c(p(l)("library", "Nextcloud tag")), 1),
                s("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: p(l)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, Hh)
              ]),
              s("button", jh, c(p(l)("library", "Remove tag from current results")), 1),
              s("p", Vh, c(p(l)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, Dh),
            s("form", {
              method: "post",
              action: dt.value,
              class: "library-batch-metadata-reset-form"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: oe.value
              }, null, 8, qh),
              (w(!0), E(ee, null, me(te.value, (d) => (w(), E("input", {
                key: `reset-${d.key}`,
                type: "hidden",
                name: d.key,
                value: d.value
              }, null, 8, zh))), 128)),
              C[31] || (C[31] = s("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              s("button", Wh, c(p(l)("library", "Reset filtered metadata")), 1),
              s("p", Gh, c(p(l)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, Bh),
            s("form", {
              method: "post",
              action: Ye.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: oe.value
              }, null, 8, Yh),
              (w(!0), E(ee, null, me(te.value, (d) => (w(), E("input", {
                key: `edit-preview-${d.key}`,
                type: "hidden",
                name: d.key,
                value: d.value
              }, null, 8, Xh))), 128)),
              s("label", null, [
                s("span", null, c(p(l)("library", "Metadata field")), 1),
                s("select", Jh, [
                  s("option", Zh, c(p(l)("library", "Publication type")), 1),
                  s("option", Qh, c(p(l)("library", "Subtitle")), 1),
                  s("option", em, c(p(l)("library", "Creators")), 1),
                  s("option", tm, c(p(l)("library", "Series / periodical")), 1),
                  s("option", rm, c(p(l)("library", "Publication date")), 1),
                  s("option", nm, c(p(l)("library", "Language")), 1),
                  s("option", am, c(p(l)("library", "Publisher")), 1),
                  s("option", im, c(p(l)("library", "Genres")), 1),
                  s("option", sm, c(p(l)("library", "Classifications")), 1)
                ])
              ]),
              s("label", null, [
                s("span", null, c(p(l)("library", "Preview value")), 1),
                C[32] || (C[32] = s("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              s("button", lm, c(p(l)("library", "Preview & apply metadata edit")), 1),
              s("p", om, c(p(l)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, Kh),
            s("form", {
              method: "post",
              action: xt.value,
              class: "library-batch-cover-refresh-form"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: oe.value
              }, null, 8, um),
              (w(!0), E(ee, null, me(te.value, (d) => (w(), E("input", {
                key: `cover-${d.key}`,
                type: "hidden",
                name: d.key,
                value: d.value
              }, null, 8, dm))), 128)),
              s("button", fm, c(p(l)("library", "Request fresh cover previews")), 1),
              s("p", pm, c(p(l)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, cm)
          ], 8, Rh),
          s("details", hm, [
            s("summary", null, c(p(l)("library", "Browse")), 1),
            s("div", mm, [
              y.value.length > 0 ? (w(), E("section", bm, [
                s("h3", ym, c(p(l)("library", "Top series and periodicals")), 1),
                s("p", gm, c(p(l)("library", "Jump into recurring publications with one click.")), 1),
                s("ul", null, [
                  (w(!0), E(ee, null, me(y.value, (d) => (w(), E("li", {
                    key: d.publication
                  }, [
                    s("a", {
                      href: On(d.publication)
                    }, c(d.publication), 9, _m),
                    s("span", vm, c(d.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : y.value.length === 0 ? (w(), E("section", wm, [
                s("h3", Sm, c(p(l)("library", "No series or periodicals found yet")), 1),
                s("p", Em, c(p(l)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : Y("", !0),
              I.value.length > 0 ? (w(), E("section", Cm, [
                s("h3", Tm, c(p(l)("library", "Top publication years")), 1),
                s("ul", null, [
                  (w(!0), E(ee, null, me(I.value, (d) => (w(), E("li", { key: d }, [
                    s("a", {
                      href: Nn(d)
                    }, c(d), 9, xm)
                  ]))), 128))
                ])
              ])) : Y("", !0),
              j.value.length > 0 ? (w(), E("section", Am, [
                s("h3", km, c(p(l)("library", "Top creators")), 1),
                s("ul", null, [
                  (w(!0), E(ee, null, me(j.value, (d) => (w(), E("li", { key: d }, [
                    s("a", {
                      href: ya(d)
                    }, c(d), 9, Rm)
                  ]))), 128))
                ])
              ])) : Y("", !0)
            ])
          ])
        ]),
        N.value.length > 0 ? (w(), E("nav", {
          key: 3,
          class: "library-active-filter-chips",
          "aria-label": p(l)("library", "Active filters")
        }, [
          s("span", null, c(p(l)("library", "Active filters")), 1),
          (w(!0), E(ee, null, me(N.value, (d) => (w(), E("a", {
            key: d.key,
            href: kn(d.key),
            class: "library-filter-chip",
            "aria-label": `${p(l)("library", "Remove filter")}: ${d.label}`
          }, [
            s("strong", null, c(d.label) + ":", 1),
            pe(" " + c(d.value) + " ", 1),
            C[33] || (C[33] = s("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Nm))), 128))
        ], 8, Om)) : Y("", !0),
        o.value.length === 0 ? (w(), E("div", {
          key: 4,
          class: Mt(["library-empty-content", { "library-first-run-guidance": k.value || M.value, "library-filter-empty-state": D.value && !k.value && !M.value }]),
          role: "status"
        }, [
          k.value ? (w(), E(ee, { key: 0 }, [
            s("h3", null, c(p(l)("library", "Start with one Library root")), 1),
            s("p", Pm, c(p(l)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            s("p", Im, [
              s("a", {
                href: V.value,
                class: "button primary"
              }, c(p(l)("library", "Add a Library root")), 9, Lm),
              s("span", Mm, c(p(l)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : M.value ? (w(), E(ee, { key: 1 }, [
            s("h3", null, c(p(l)("library", "No enabled Library roots")), 1),
            s("p", Um, c(p(l)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            s("p", Dm, [
              s("a", {
                href: V.value,
                class: "button primary"
              }, c(p(l)("library", "Open Library settings")), 9, Fm)
            ])
          ], 64)) : D.value ? (w(), E(ee, { key: 2 }, [
            s("h3", null, c(p(l)("library", "No matches for the current filters")), 1),
            s("p", $m, c(p(l)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            s("p", Hm, [
              s("a", {
                href: Rn(),
                class: "button secondary"
              }, c(p(l)("library", "Clear search")), 9, jm),
              s("a", Vm, c(p(l)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (w(), E(ee, { key: 3 }, [
            s("h3", null, c(p(l)("library", "No catalogue items yet")), 1),
            s("p", Bm, c(p(l)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            s("p", qm, [
              s("a", {
                href: V.value,
                class: "button primary"
              }, c(p(l)("library", "Run a scan from settings")), 9, zm)
            ])
          ], 64))
        ], 2)) : (w(), E("div", {
          key: 5,
          class: Mt(["library-cover-gallery", P.value])
        }, [
          (w(!0), E(ee, null, me(o.value, (d) => (w(), E("article", {
            key: d.id,
            class: Mt(["library-cover-card", { "library-cover-card--open": le[d.id], "library-cover-card--cover-loaded": vr(d) === "loaded", "library-cover-card--cover-error": vr(d) === "error" }])
          }, [
            s("a", {
              class: "library-cover-link",
              href: d.openUrl,
              "aria-label": `Read ${d.title}`
            }, [
              s("span", Gm, [
                vr(d) === "loading" ? (w(), E("span", Km)) : Y("", !0),
                s("img", {
                  class: Mt(["library-cover-image", { "library-cover-image--loaded": vr(d) === "loaded" }]),
                  src: d.coverUrl,
                  alt: `Cover for ${d.title}`,
                  loading: "lazy",
                  onLoad: (ne) => ga(d),
                  onError: (ne) => _a(d)
                }, null, 42, Ym),
                vr(d) === "error" ? (w(), E("span", Xm, c(p(l)("library", "Cover unavailable")), 1)) : Y("", !0)
              ])
            ], 8, Wm),
            s("form", {
              method: "post",
              action: d.starUrl,
              class: "library-cover-star-form",
              onSubmit: Vn((ne) => wr(d, ne), ["prevent"])
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: oe.value
              }, null, 8, Zm),
              C[34] || (C[34] = s("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              s("input", {
                type: "hidden",
                name: "starred",
                value: d.starred ? "0" : "1"
              }, null, 8, Qm),
              s("button", {
                type: "submit",
                class: Mt(["library-cover-star-button", { "library-cover-star-button--starred": d.starred }]),
                "aria-pressed": d.starred ? "true" : "false",
                title: d.starred ? p(l)("library", "Unstar this publication") : p(l)("library", "Star this publication"),
                "aria-label": d.starred ? p(l)("library", "Unstar this publication") : p(l)("library", "Star this publication"),
                onClick: Vn((ne) => wr(d, ne), ["prevent"])
              }, c(d.starred ? "★" : "☆"), 11, eb)
            ], 40, Jm),
            s("div", tb, [
              s("div", rb, [
                s("h3", null, [
                  d.starred ? (w(), E("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": p(l)("library", "Starred")
                  }, "★", 8, nb)) : Y("", !0),
                  pe(c(d.title), 1)
                ]),
                s("a", {
                  class: "library-cover-read",
                  href: d.openUrl
                }, c(p(l)("library", "Read")), 9, ab)
              ]),
              s("details", {
                class: "library-cover-details",
                onToggle: (ne) => Vt(d.id, ne)
              }, [
                s("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${p(l)("library", "Show details and actions")}: ${d.title}`
                }, c(p(l)("library", "Details")), 9, sb),
                s("div", lb, [
                  d.creators ? (w(), E("p", ob, c(d.creators), 1)) : Y("", !0),
                  s("dl", cb, [
                    s("div", ub, [
                      s("dt", null, c(p(l)("library", "Type")), 1),
                      s("dd", null, c(d.publicationType), 1)
                    ]),
                    d.publication ? (w(), E("div", db, [
                      s("dt", null, c(p(l)("library", "Series")), 1),
                      s("dd", null, c(d.publication), 1)
                    ])) : Y("", !0),
                    d.publicationDate ? (w(), E("div", fb, [
                      s("dt", null, c(p(l)("library", "Date")), 1),
                      s("dd", null, c(d.publicationDate), 1)
                    ])) : Y("", !0),
                    d.workflowStatus ? (w(), E("div", pb, [
                      s("dt", null, c(p(l)("library", "Status")), 1),
                      s("dd", null, c(d.workflowStatus), 1)
                    ])) : Y("", !0),
                    d.hasScannerConflict ? (w(), E("div", hb, [
                      s("dt", null, c(p(l)("library", "Review")), 1),
                      s("dd", null, c(d.scannerConflictCount) + " fields", 1)
                    ])) : Y("", !0),
                    d.lastOpenedAt ? (w(), E("div", mb, [
                      s("dt", null, c(p(l)("library", "Last opened")), 1),
                      s("dd", null, c(d.lastOpenedAt), 1)
                    ])) : Y("", !0),
                    d.extension ? (w(), E("div", bb, [
                      s("dt", null, c(p(l)("library", "Format")) + ":", 1),
                      s("dd", null, c(Qt(d.extension)), 1)
                    ])) : Y("", !0),
                    d.shelf ? (w(), E("div", yb, [
                      s("dt", null, c(p(l)("library", "Shelf")), 1),
                      s("dd", null, c(d.shelf), 1)
                    ])) : Y("", !0)
                  ]),
                  d.description ? (w(), E("p", gb, c(d.description), 1)) : Y("", !0),
                  d.scanStatus !== "indexed" || d.scanError ? (w(), E("p", _b, [
                    pe(" scanStatus: " + c(d.scanStatus || "unknown"), 1),
                    d.scanError ? (w(), E("span", vb, " · scanError: " + c(d.scanError), 1)) : Y("", !0)
                  ])) : Y("", !0),
                  s("div", wb, [
                    Dr(d).length === 0 ? (w(), E("span", Sb, "No Nextcloud tags")) : (w(!0), E(ee, { key: 1 }, me(Dr(d), (ne) => (w(), E("span", {
                      key: ne.id,
                      class: "library-tag"
                    }, c(ne.name), 1))), 128))
                  ]),
                  s("p", Eb, [
                    s("a", {
                      href: d.filesUrl
                    }, c(p(l)("library", "Show in Files")), 9, Cb),
                    C[35] || (C[35] = pe(" · ", -1)),
                    s("a", {
                      href: d.downloadUrl
                    }, c(p(l)("library", "Download source")), 9, Tb),
                    C[36] || (C[36] = pe(" · ", -1)),
                    s("button", {
                      type: "button",
                      class: "library-link-button library-cover-details-drawer-button",
                      onClick: (ne) => ht(d)
                    }, c(p(l)("library", "Details drawer")), 9, xb),
                    C[37] || (C[37] = pe(" · ", -1)),
                    s("a", {
                      href: d.detailsUrl
                    }, c(p(l)("library", "Details")), 9, Ab)
                  ])
                ])
              ], 40, ib)
            ])
          ], 2))), 128))
        ], 2)),
        o.value.length > 0 ? (w(), E("nav", {
          key: 6,
          class: "library-pagination library-pagination--bottom",
          "aria-label": p(l)("library", "Catalogue pagination")
        }, [
          s("span", Rb, [
            pe(c(p(l)("library", "Page")) + " " + c(z.value.page), 1),
            z.value.total > 0 ? (w(), E("span", Ob, " · " + c(z.value.from) + "–" + c(z.value.to), 1)) : Y("", !0)
          ]),
          z.value.previousUrl ? (w(), E("a", {
            key: 0,
            href: z.value.previousUrl
          }, c(p(l)("library", "Previous")), 9, Nb)) : (w(), E("span", Pb, c(p(l)("library", "Previous")), 1)),
          z.value.nextUrl ? (w(), E("a", {
            key: 2,
            href: z.value.nextUrl
          }, c(p(l)("library", "Next")), 9, Ib)) : (w(), E("span", Lb, c(p(l)("library", "Next")), 1))
        ], 8, kb)) : Y("", !0),
        he.value ? (w(), E("div", {
          key: 7,
          class: "library-detail-drawer-backdrop",
          onClick: vt,
          "aria-hidden": "true"
        })) : Y("", !0),
        he.value ? (w(), E("aside", Mb, [
          s("button", {
            type: "button",
            class: "library-detail-drawer-close",
            "aria-label": "Close details panel",
            onClick: vt
          }, "×"),
          s("img", {
            class: "library-detail-drawer-cover",
            src: he.value.coverUrl,
            alt: `Cover for ${he.value.title}`,
            loading: "lazy"
          }, null, 8, Ub),
          s("p", Db, c(he.value.publicationType || p(l)("library", "Publication")), 1),
          s("h3", Fb, c(he.value.title), 1),
          he.value.creators ? (w(), E("p", $b, c(he.value.creators), 1)) : Y("", !0),
          he.value.description ? (w(), E("p", Hb, c(he.value.description), 1)) : Y("", !0),
          s("dl", jb, [
            he.value.publication ? (w(), E("div", Vb, [
              s("dt", null, c(p(l)("library", "Series")), 1),
              s("dd", null, c(he.value.publication), 1)
            ])) : Y("", !0),
            he.value.publicationDate ? (w(), E("div", Bb, [
              s("dt", null, c(p(l)("library", "Date")), 1),
              s("dd", null, c(he.value.publicationDate), 1)
            ])) : Y("", !0),
            he.value.shelf ? (w(), E("div", qb, [
              s("dt", null, c(p(l)("library", "Shelf")), 1),
              s("dd", null, c(he.value.shelf), 1)
            ])) : Y("", !0)
          ]),
          s("p", zb, [
            s("a", {
              class: "button primary",
              href: he.value.openUrl
            }, c(p(l)("library", "Read")), 9, Wb),
            s("a", {
              class: "button secondary",
              href: he.value.detailsUrl
            }, c(p(l)("library", "View full details")), 9, Gb)
          ]),
          s("nav", {
            class: "library-detail-drawer-stepper",
            "aria-label": p(l)("library", "Browse neighbouring items")
          }, [
            s("button", {
              type: "button",
              class: "button secondary",
              disabled: !Ht.value,
              onClick: C[23] || (C[23] = (d) => Jt(Ht.value))
            }, c(p(l)("library", "Previous issue")), 9, Yb),
            s("button", {
              type: "button",
              class: "button secondary",
              disabled: !pr.value,
              onClick: C[24] || (C[24] = (d) => Jt(pr.value))
            }, c(p(l)("library", "Next issue")), 9, Xb)
          ], 8, Kb)
        ])) : Y("", !0)
      ])
    ]));
  }
}, vs = fu("library", "catalogue", {}), Gn = document.querySelector("#library-vue-root"), ws = {
  ...vs,
  requestToken: Gn?.dataset.requestToken || vs.requestToken || ""
};
function X(e) {
  return String(e ?? "");
}
function Ml(e) {
  return X(e).toUpperCase();
}
function Zb(e, t, r, n = X) {
  for (const a of t) {
    const i = document.createElement("option");
    i.value = X(a), i.textContent = n(a), X(a) === X(r) && (i.selected = !0), e.appendChild(i);
  }
}
function Ss(e, t, r, n, a = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = r === "q" ? "search" : "text", o.name = r, o.value = X(n), o.placeholder = a, i.appendChild(o), e.appendChild(i);
}
function jr(e, t, r, n, a, i, o = X) {
  const u = document.createElement("label");
  u.textContent = t;
  const h = document.createElement("select");
  h.name = r;
  const v = document.createElement("option");
  v.value = "", v.textContent = a, h.appendChild(v), Zb(h, i, n, o), u.appendChild(h), e.appendChild(u);
}
function Vr(e) {
  const t = X(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function Qb(e, t = {}) {
  return X(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(X(e || t?.publication || ""))}`);
}
function ey(e) {
  return X(e.discoveryPage) === "publication";
}
function ty(e, t = {}) {
  return X(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(X(e))}`);
}
function Ba(e) {
  return X(e.discoveryPage) === "year";
}
function ry(e, t = {}) {
  return X(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(X(e))}`);
}
function qa(e) {
  return X(e.discoveryPage) === "creator";
}
function ny(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && X(n).trim() !== "");
}
function ay() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function cn(e, t, r, n) {
  const a = document.createElement("a");
  return a.href = t, a.className = r, a.textContent = n, e.appendChild(a), a;
}
function iy(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function sy(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", l("library", "Catalogue search and filters")), Ss(n, l("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), jr(n, l("library", "Type"), "type", r.type, l("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), Ss(n, l("library", "Nextcloud tag"), "tag", r.tag, "photography"), jr(n, l("library", "Format"), "format", r.format, l("library", "All formats"), e.formats || [], Ml), jr(n, l("library", "Shelf"), "shelf", r.shelf, l("library", "All shelves"), e.shelves || []), jr(n, l("library", "Scan status"), "status", r.status, l("library", "All scan statuses"), e.scanStatuses || []), jr(n, l("library", "Sort"), "sort", r.sort || "title", l("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), jr(n, l("library", "Page size"), "limit", t.limit || 100, l("library", "Page size"), [25, 50, 100, 250, 500]);
  const a = document.createElement("button");
  a.type = "submit", a.className = "button primary", a.setAttribute("aria-label", l("library", "Apply catalogue filters")), a.textContent = l("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", l("library", "Clear catalogue filters")), i.textContent = l("library", "Clear"), n.append(a, i), n;
}
function ly() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", a = e.get("batchMetadataSkipped") || "0", i = document.createElement("p");
  return i.className = "library-notice library-batch-metadata-apply-result", i.textContent = l("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${a} skipped.`), i;
}
function oy(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", l("library", "Quick catalogue filters"));
  let a = null;
  const i = () => {
    window.clearTimeout(a), a = window.setTimeout(() => n.requestSubmit(), 350);
  };
  for (const [S, I] of Object.entries(r)) {
    if (["q", "sort", "starred"].includes(S) || X(I).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = S, j.value = X(I), n.appendChild(j);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = l("library", "Search");
  const u = document.createElement("input");
  u.type = "search", u.name = "q", u.value = X(r.q), u.placeholder = "Camera, Eco, Rolleiflex...", u.addEventListener("input", i), o.appendChild(u), n.appendChild(o);
  const h = [
    [l("library", "Sort"), "sort", r.sort || "title", [["title", l("library", "Title")], ["recent", l("library", "Recently added")], ["publicationDate", l("library", "Publication date")], ["publication", l("library", "Series")], ["lastOpened", l("library", "Recently opened")], ["format", l("library", "Format")]]],
    [l("library", "Starred"), "starred", r.starred || "", [["", l("library", "All")], ["1", l("library", "Starred")]]],
    [l("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [S, I, j, ie] of h) {
    const W = document.createElement("label");
    W.textContent = S;
    const ce = document.createElement("select");
    ce.name = I;
    for (const [se, z] of ie) {
      const L = document.createElement("option");
      L.value = X(se), L.textContent = X(z), X(se) === X(j) && (L.selected = !0), ce.appendChild(L);
    }
    ce.addEventListener("change", () => n.requestSubmit()), W.appendChild(ce), n.appendChild(W);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", l("library", "Apply catalogue filters")), v.textContent = l("library", "Apply filters");
  const y = document.createElement("a");
  return y.href = "?", y.className = "button secondary", y.setAttribute("aria-label", l("library", "Clear catalogue filters")), y.textContent = l("library", "Clear all"), n.append(v, y), n;
}
function cy(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, a = X(e.settingsUrl || ""), i = X(e.metadataExportUrl || ""), o = X(e.batchTagUrl || "/apps/library/bulk/tags"), u = X(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), h = X(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = X(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), y = X(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), S = document.createElement("div");
  S.className = "library-vue-catalogue library-vue-fallback", S.dataset.vueFallback = "true";
  const I = document.createElement("section");
  I.className = "library-panel", I.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const ie = document.createElement("div"), W = document.createElement("h2");
  W.id = "library-catalogue-heading", W.textContent = l("library", "Publication catalogue");
  const ce = document.createElement("p");
  ce.className = "library-muted", ce.textContent = l("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), ie.append(W, ce);
  const se = document.createElement("nav");
  if (se.className = "library-catalogue-toolbar", se.setAttribute("aria-label", l("library", "Library actions")), a) {
    const P = document.createElement("a");
    P.href = a, P.className = "button secondary", P.setAttribute("aria-label", "Open Library settings"), P.textContent = l("library", "Settings"), se.appendChild(P);
  }
  if (i) {
    const P = document.createElement("a");
    P.href = i, P.className = "button secondary", P.setAttribute("aria-label", "Export corrected metadata"), P.textContent = l("library", "Export corrected metadata"), se.appendChild(P);
  }
  if (e.metadataSidecarManifestUrl) {
    const P = document.createElement("a");
    P.href = e.metadataSidecarManifestUrl, P.className = "button secondary", P.setAttribute("aria-label", "Export sidecar manifest"), P.textContent = l("library", "Sidecar manifest"), se.appendChild(P);
  }
  if (e.metadataSidecarBundleUrl) {
    const P = document.createElement("a");
    P.href = e.metadataSidecarBundleUrl, P.className = "button secondary", P.setAttribute("aria-label", "Export sidecar ZIP"), P.textContent = l("library", "Sidecar ZIP"), se.appendChild(P);
  }
  j.append(ie, se), I.appendChild(j);
  const z = ly();
  z && I.appendChild(z), I.appendChild(oy(e, n));
  const L = document.createElement("details");
  L.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = l("library", "Show catalogue filters"), L.append(V, sy(e, n)), I.appendChild(L), ey(e) || Ba(e) || qa(e)) {
    const P = document.createElement("section");
    P.className = "library-discovery-header", P.setAttribute("aria-labelledby", "library-discovery-heading");
    const N = document.createElement("p");
    N.className = "library-muted", N.textContent = qa(e) ? l("library", "Creator") : Ba(e) ? l("library", "Publication year") : l("library", "Publication / series");
    const H = document.createElement("h3");
    H.id = "library-discovery-heading", H.textContent = X(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const te = document.createElement("p");
    te.className = "library-muted", te.textContent = `${n.total ?? r.length} ${qa(e) ? l("library", "items by this creator. Sorted by publication context when available.") : Ba(e) ? l("library", "items from this publication year. Sorted by publication date when available.") : l("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const le = document.createElement("a");
    le.href = "/apps/library/", le.className = "button secondary", le.textContent = l("library", "Back to full catalogue"), P.append(N, H, te, le), I.appendChild(P);
  }
  const oe = document.createElement("p");
  oe.className = "library-muted library-filter-result-summary", oe.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Le = document.createElement("a");
  Le.href = "?", Le.textContent = ` ${l("library", "Clear all filters")}`, oe.appendChild(Le), I.appendChild(oe);
  const Ne = document.createElement("details");
  Ne.className = "library-batch-actions";
  const Be = document.createElement("summary");
  Be.textContent = `${l("library", "Batch actions for current results")} (${n.total ?? r.length} ${l("library", "Current filter result")})`;
  const Ce = document.createElement("form");
  Ce.method = "post", Ce.action = o, Ce.className = "library-batch-tag-form";
  const Me = Vr(e);
  Me && Ce.appendChild(Me);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (X(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = P, H.value = X(N), Ce.appendChild(H);
  }
  const rt = document.createElement("label");
  rt.textContent = l("library", "Apply Nextcloud tag to current results");
  const dt = document.createElement("input");
  dt.type = "text", dt.name = "nextcloudTagName", dt.placeholder = "batch-review", rt.appendChild(dt);
  const Ye = document.createElement("button");
  Ye.type = "submit", Ye.className = "button secondary", Ye.textContent = l("library", "Apply Nextcloud tag to current results");
  const xt = document.createElement("p");
  xt.className = "library-muted", xt.textContent = l("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ce.append(rt, Ye, xt);
  const $e = document.createElement("form");
  $e.method = "post", $e.action = u, $e.className = "library-batch-tag-remove-form";
  const Ue = Vr(e);
  Ue && $e.appendChild(Ue);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (X(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = P, H.value = X(N), $e.appendChild(H);
  }
  const _e = document.createElement("label");
  _e.textContent = l("library", "Nextcloud tag");
  const de = document.createElement("input");
  de.type = "text", de.name = "nextcloudTagName", de.setAttribute("list", "library-nextcloud-tag-suggestions"), de.placeholder = l("library", "e.g. Review"), de.autocomplete = "off", _e.appendChild(de);
  const qe = document.createElement("button");
  qe.type = "submit", qe.className = "button secondary", qe.textContent = l("library", "Remove tag from current results");
  const ve = document.createElement("p");
  ve.className = "library-muted", ve.textContent = l("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), $e.append(_e, qe, ve);
  const xe = document.createElement("form");
  xe.method = "post", xe.action = h, xe.className = "library-batch-metadata-reset-form";
  const ze = Vr(e);
  ze && xe.appendChild(ze);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (X(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = P, H.value = X(N), xe.appendChild(H);
  }
  const Je = document.createElement("input");
  Je.type = "hidden", Je.name = "scannerConflicts", Je.value = "1";
  const be = document.createElement("button");
  be.type = "submit", be.className = "button secondary", be.textContent = l("library", "Reset filtered metadata");
  const Nt = document.createElement("p");
  Nt.className = "library-muted", Nt.textContent = l("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), xe.append(Je, be, Nt);
  const We = document.createElement("form");
  We.method = "post", We.action = v, We.className = "library-batch-metadata-edit-preview-form", We.target = "_blank";
  const ft = Vr(e);
  ft && We.appendChild(ft);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (X(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = P, H.value = X(N), We.appendChild(H);
  }
  const _t = document.createElement("label");
  _t.textContent = l("library", "Metadata field");
  const At = document.createElement("select");
  At.name = "bulkEditField";
  for (const [P, N] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const H = document.createElement("option");
    H.value = P, H.textContent = l("library", N), At.appendChild(H);
  }
  _t.appendChild(At);
  const nt = document.createElement("label");
  nt.textContent = l("library", "Preview value");
  const at = document.createElement("input");
  at.type = "text", at.name = "bulkEditValue", at.placeholder = "magazine, de, photography...", at.autocomplete = "off", nt.appendChild(at);
  const m = document.createElement("button");
  m.type = "submit", m.className = "button secondary", m.textContent = l("library", "Preview & apply metadata edit");
  const b = document.createElement("p");
  b.className = "library-muted", b.textContent = l("library", "Preview first, then apply from the review page."), We.append(_t, nt, m, b);
  const _ = document.createElement("form");
  _.method = "post", _.action = y, _.className = "library-batch-cover-refresh-form";
  const O = Vr(e);
  O && _.appendChild(O);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (X(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = P, H.value = X(N), _.appendChild(H);
  }
  const T = document.createElement("button");
  T.type = "submit", T.className = "button secondary", T.textContent = l("library", "Request fresh cover previews");
  const k = document.createElement("p");
  k.className = "library-muted", k.textContent = l("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(T, k), Ne.append(Be, Ce, $e, xe, We, _), I.appendChild(Ne);
  const M = document.createElement("nav");
  M.className = "library-pagination", M.setAttribute("aria-label", l("library", "Catalogue pagination"));
  const D = document.createElement("span");
  D.className = "library-pagination-range", D.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, M.appendChild(D), I.appendChild(M);
  const U = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], A = document.createElement("details");
  A.className = U.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const K = document.createElement("summary");
  K.className = "library-periodical-groups-summary", K.textContent = l("library", "Show top series and periodicals"), A.appendChild(K);
  const $ = document.createElement("h3");
  $.textContent = U.length > 0 ? l("library", "Top series and periodicals") : l("library", "No series or periodicals found yet");
  const G = document.createElement("p");
  if (G.className = "library-muted", G.textContent = U.length > 0 ? l("library", "Jump into recurring publications with one click.") : l("library", "Add publication or series names in item details to build this shortcut panel."), A.append($, G), U.length > 0) {
    const P = document.createElement("ul");
    for (const N of U) {
      const H = document.createElement("li"), te = document.createElement("a");
      te.href = Qb(N.publication, N), te.textContent = X(N.publication);
      const le = document.createElement("span");
      le.className = "library-muted", le.textContent = `${N.itemCount} items`, H.append(te, le), P.appendChild(H);
    }
    A.appendChild(P);
  }
  I.appendChild(A);
  const Z = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (Z.length > 0) {
    const P = document.createElement("details");
    P.className = "library-year-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = l("library", "Show publication years");
    const H = document.createElement("h3");
    H.textContent = l("library", "Top publication years");
    const te = document.createElement("p");
    te.className = "library-muted", te.textContent = l("library", "Jump into dated books, magazines, journals and comics by year.");
    const le = document.createElement("ul");
    for (const ye of Z) {
      const fe = document.createElement("li"), De = document.createElement("a");
      De.href = ty(ye, e), De.textContent = X(ye), fe.appendChild(De), le.appendChild(fe);
    }
    P.append(N, H, te, le), I.appendChild(P);
  }
  const Q = Array.isArray(e.creators) ? e.creators : [];
  if (Q.length > 0) {
    const P = document.createElement("details");
    P.className = "library-creator-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = l("library", "Show creators");
    const H = document.createElement("h3");
    H.textContent = l("library", "Top creators");
    const te = document.createElement("p");
    te.className = "library-muted", te.textContent = l("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const le = document.createElement("ul");
    for (const ye of Q) {
      const fe = document.createElement("li"), De = document.createElement("a");
      De.href = ry(ye, e), De.textContent = X(ye), fe.appendChild(De), le.appendChild(fe);
    }
    P.append(N, H, te, le), I.appendChild(P);
  }
  if (r.length === 0) {
    const P = document.createElement("div"), N = Number(e.rootCount || 0), H = Number(e.enabledRootCount || 0), te = ny(e);
    P.className = "library-empty-content", (N === 0 || H === 0) && P.classList.add("library-first-run-guidance"), te && N > 0 && H > 0 && P.classList.add("library-filter-empty-state"), P.setAttribute("role", "status");
    const le = document.createElement("h3"), ye = document.createElement("p");
    ye.className = "library-muted";
    const fe = document.createElement("p");
    fe.className = "library-empty-actions", N === 0 ? (le.textContent = l("library", "Start with one Library root"), ye.textContent = l("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), cn(fe, a, "button primary", l("library", "Add a Library root")), iy(fe, l("library", "Run a scan after saving a root"))) : H === 0 ? (le.textContent = l("library", "No enabled Library roots"), ye.textContent = l("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), cn(fe, a, "button primary", l("library", "Open Library settings"))) : te ? (le.textContent = l("library", "No matches for the current filters"), ye.textContent = l("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), cn(fe, ay(), "button secondary", l("library", "Clear search")), cn(fe, "?", "button primary", l("library", "Clear all filters"))) : (le.textContent = l("library", "No catalogue items yet"), ye.textContent = l("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), cn(fe, a, "button primary", l("library", "Run a scan from settings"))), P.append(le, ye, fe), I.appendChild(P);
  } else {
    const P = document.createElement("div");
    P.className = "library-cover-gallery";
    for (const N of r) {
      const H = document.createElement("article");
      H.className = "library-cover-card";
      const te = document.createElement("a");
      te.className = "library-cover-link", te.href = X(N.openUrl || "#"), te.setAttribute("aria-label", `Read ${X(N.title || "publication")}`);
      const le = document.createElement("img");
      le.className = "library-cover-image", le.src = X(N.coverUrl || ""), le.alt = `Cover for ${X(N.title || "publication")}`, le.loading = "lazy", te.appendChild(le);
      const ye = Vr(e), fe = document.createElement("form");
      fe.method = "post", fe.action = X(N.starUrl || ""), fe.className = "library-cover-star-form", ye && fe.appendChild(ye);
      const De = document.createElement("input");
      De.type = "hidden", De.name = "returnTo", De.value = "catalogue";
      const we = document.createElement("input");
      we.type = "hidden", we.name = "starred", we.value = N.starred ? "0" : "1";
      const Pe = document.createElement("button");
      Pe.type = "submit", Pe.className = N.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Pe.setAttribute("aria-pressed", N.starred ? "true" : "false"), Pe.setAttribute("aria-label", N.starred ? l("library", "Unstar this publication") : l("library", "Star this publication")), Pe.title = N.starred ? l("library", "Unstar this publication") : l("library", "Star this publication"), Pe.textContent = N.starred ? "★" : "☆", fe.append(De, we, Pe);
      const he = document.createElement("div");
      he.className = "library-cover-summary";
      const pt = document.createElement("h3");
      if (pt.textContent = X(N.title || "Untitled publication"), he.appendChild(pt), N.creators) {
        const kt = document.createElement("p");
        kt.className = "library-creator", kt.textContent = X(N.creators), he.appendChild(kt);
      }
      const Ht = document.createElement("dl");
      Ht.className = "library-cover-detail-list";
      const pr = [
        ["Type", X(N.publicationType || "other")],
        ["Format", N.extension ? Ml(N.extension) : ""],
        ["Shelf", N.shelf ? X(N.shelf) : ""]
      ].filter(([, kt]) => kt !== "");
      for (const [kt, Lr] of pr) {
        const Pt = document.createElement("div");
        Pt.className = "library-cover-detail-chip";
        const Zt = document.createElement("dt");
        Zt.textContent = kt;
        const it = document.createElement("dd");
        it.textContent = Lr, Pt.append(Zt, it), Ht.appendChild(Pt);
      }
      he.appendChild(Ht);
      const ht = document.createElement("p"), vt = document.createElement("a");
      vt.href = X(N.openUrl || "#"), vt.textContent = l("library", "Read");
      const Jt = document.createElement("a");
      Jt.href = X(N.filesUrl || "#"), Jt.textContent = l("library", "Show in Files");
      const wt = document.createElement("a");
      wt.href = X(N.downloadUrl || "#"), wt.textContent = l("library", "Download source");
      const jt = document.createElement("a");
      jt.href = X(N.detailsUrl || "#"), jt.textContent = l("library", "Details"), ht.append(vt, document.createTextNode(" · "), Jt, document.createTextNode(" · "), wt, document.createTextNode(" · "), jt), he.appendChild(ht), H.append(te, fe, he), P.appendChild(H);
    }
    I.appendChild(P);
  }
  return S.appendChild(I), S;
}
if (Gn)
  try {
    cu(Jb, { state: ws }).mount(Gn);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Gn.replaceChildren(cy(ws));
  }
//# sourceMappingURL=library-main.mjs.map
