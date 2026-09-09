// @__NO_SIDE_EFFECTS__
function Zi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Ce = {}, $r = [], Wt = () => {
}, Ss = () => !1, Qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ei = (e) => e.startsWith("onUpdate:"), rt = Object.assign, Qi = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, jl = Object.prototype.hasOwnProperty, Se = (e, t) => jl.call(e, t), ne = Array.isArray, mr = (e) => gn(e) === "[object Map]", Rr = (e) => gn(e) === "[object Set]", Ea = (e) => gn(e) === "[object Date]", de = (e) => typeof e == "function", De = (e) => typeof e == "string", Kt = (e) => typeof e == "symbol", Ee = (e) => e !== null && typeof e == "object", ws = (e) => (Ee(e) || de(e)) && de(e.then) && de(e.catch), Es = Object.prototype.toString, gn = (e) => Es.call(e), Vl = (e) => gn(e).slice(8, -1), Ts = (e) => gn(e) === "[object Object]", ea = (e) => De(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, sn = /* @__PURE__ */ Zi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ti = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Bl = /-\w/g, Lt = ti(
  (e) => e.replace(Bl, (t) => t.slice(1).toUpperCase())
), ql = /\B([A-Z])/g, Or = ti(
  (e) => e.replace(ql, "-$1").toLowerCase()
), Cs = ti((e) => e.charAt(0).toUpperCase() + e.slice(1)), yi = ti(
  (e) => e ? `on${Cs(e)}` : ""
), zt = (e, t) => !Object.is(e, t), $n = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, xs = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, ri = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ta;
const ni = () => Ta || (Ta = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ta(e) {
  if (ne(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = De(n) ? Gl(n) : ta(n);
      if (i)
        for (const a in i)
          t[a] = i[a];
    }
    return t;
  } else if (De(e) || Ee(e))
    return e;
}
const zl = /;(?![^(]*\))/g, Wl = /:([^]+)/, Kl = /\/\*[^]*?\*\//g;
function Gl(e) {
  const t = {};
  return e.replace(Kl, "").split(zl).forEach((r) => {
    if (r) {
      const n = r.split(Wl);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function jr(e) {
  let t = "";
  if (De(e))
    t = e;
  else if (ne(e))
    for (let r = 0; r < e.length; r++) {
      const n = jr(e[r]);
      n && (t += n + " ");
    }
  else if (Ee(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Yl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xl = /* @__PURE__ */ Zi(Yl);
function As(e) {
  return !!e || e === "";
}
function Jl(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = br(e[n], t[n]);
  return r;
}
function Ca(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const i of e) {
    let a = -1;
    for (let o = 0; o < r.length; o++)
      if (!n[o] && br(i, r[o])) {
        a = o;
        break;
      }
    if (a < 0) return !1;
    n[a] = 1;
  }
  return !0;
}
function br(e, t) {
  if (e === t) return !0;
  let r = Ea(e), n = Ea(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Kt(e), n = Kt(t), r || n)
    return e === t;
  if (r = ne(e), n = ne(t), r || n)
    return r && n ? Jl(e, t) : !1;
  if (r = Ee(e), n = Ee(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = mr(e), n = mr(t), r || n || (r = Rr(e), n = Rr(t), r || n))
      return r && n ? Ca(e, t) : !1;
    const i = Object.keys(e).length, a = Object.keys(t).length;
    if (i !== a)
      return !1;
    for (const o in e) {
      const u = e.hasOwnProperty(o), p = t.hasOwnProperty(o);
      if (u && !p || !u && p || !br(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((r) => br(r, t));
}
const ks = (e) => !!(e && e.__v_isRef === !0), c = (e) => De(e) ? e : e == null ? "" : ne(e) || Ee(e) && (e.toString === Es || !de(e.toString)) ? ks(e) ? c(e.value) : JSON.stringify(e, Rs, 2) : String(e), Rs = (e, t) => ks(t) ? Rs(e, t.value) : mr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], a) => (r[gi(n, a) + " =>"] = i, r),
    {}
  )
} : Rr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => gi(r))
} : Kt(t) ? gi(t) : Ee(t) && !ne(t) && !Ts(t) ? String(t) : t, gi = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Kt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
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
function eo() {
  return Xe;
}
let Re;
const _i = /* @__PURE__ */ new WeakSet();
class Os {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Xe && (Xe.active ? Xe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, _i.has(this) && (_i.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ps(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, xa(this), Is(this);
    const t = Re, r = Ut;
    Re = this, Ut = !0;
    try {
      return this.fn();
    } finally {
      Ms(this), Re = t, Ut = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ia(t);
      this.deps = this.depsTail = void 0, xa(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? _i.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    $i(this) && this.run();
  }
  get dirty() {
    return $i(this);
  }
}
let Ns = 0, ln, on;
function Ps(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = on, on = e;
    return;
  }
  e.next = ln, ln = e;
}
function ra() {
  Ns++;
}
function na() {
  if (--Ns > 0)
    return;
  if (on) {
    let t = on;
    for (on = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; ln; ) {
    let t = ln;
    for (ln = void 0; t; ) {
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
function Is(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ms(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), ia(n), to(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function $i(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ls(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ls(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === fn) || (e.globalVersion = fn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !$i(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Re, n = Ut;
  Re = e, Ut = !0;
  try {
    Is(e);
    const i = e.fn(e._value);
    (t.version === 0 || zt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Re = r, Ut = n, Ms(e), e.flags &= -3;
  }
}
function ia(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let a = r.computed.deps; a; a = a.nextDep)
      ia(a, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function to(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Ut = !0;
const Us = [];
function rr() {
  Us.push(Ut), Ut = !1;
}
function nr() {
  const e = Us.pop();
  Ut = e === void 0 ? !0 : e;
}
function xa(e) {
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
let fn = 0;
class ro {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class aa {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Re || !Ut || Re === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Re)
      r = this.activeLink = new ro(Re, this), Re.deps ? (r.prevDep = Re.depsTail, Re.depsTail.nextDep = r, Re.depsTail = r) : Re.deps = Re.depsTail = r, Ds(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Re.depsTail, r.nextDep = void 0, Re.depsTail.nextDep = r, Re.depsTail = r, Re.deps === r && (Re.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, fn++, this.notify(t);
  }
  notify(t) {
    ra();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      na();
    }
  }
}
function Ds(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Ds(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const ji = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ Symbol(
  ""
), Vi = /* @__PURE__ */ Symbol(
  ""
), pn = /* @__PURE__ */ Symbol(
  ""
);
function et(e, t, r) {
  if (Ut && Re) {
    let n = ji.get(e);
    n || ji.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new aa()), i.map = n, i.key = r), i.track();
  }
}
function Qt(e, t, r, n, i, a) {
  const o = ji.get(e);
  if (!o) {
    fn++;
    return;
  }
  const u = (p) => {
    p && p.trigger();
  };
  if (ra(), t === "clear")
    o.forEach(u);
  else {
    const p = ne(e), v = p && ea(r);
    if (p && r === "length") {
      const y = Number(n);
      o.forEach((S, I) => {
        (I === "length" || I === pn || !Kt(I) && I >= y) && u(S);
      });
    } else
      switch ((r !== void 0 || o.has(void 0)) && u(o.get(r)), v && u(o.get(pn)), t) {
        case "add":
          p ? v && u(o.get("length")) : (u(o.get(xr)), mr(e) && u(o.get(Vi)));
          break;
        case "delete":
          p || (u(o.get(xr)), mr(e) && u(o.get(Vi)));
          break;
        case "set":
          mr(e) && u(o.get(xr));
          break;
      }
  }
  na();
}
function Lr(e) {
  const t = /* @__PURE__ */ ve(e);
  return t === e ? t : (et(t, "iterate", pn), /* @__PURE__ */ Rt(e) ? t : t.map(Dt));
}
function ii(e) {
  return et(e = /* @__PURE__ */ ve(e), "iterate", pn), e;
}
function Bt(e, t) {
  return /* @__PURE__ */ ir(e) ? zr(/* @__PURE__ */ Ar(e) ? Dt(t) : t) : Dt(t);
}
const no = {
  __proto__: null,
  [Symbol.iterator]() {
    return vi(this, Symbol.iterator, (e) => Bt(this, e));
  },
  concat(...e) {
    return Lr(this).concat(
      ...e.map((t) => ne(t) ? Lr(t) : t)
    );
  },
  entries() {
    return vi(this, "entries", (e) => (e[1] = Bt(this, e[1]), e));
  },
  every(e, t) {
    return Xt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Xt(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => Bt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Xt(
      this,
      "find",
      e,
      t,
      (r) => Bt(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Xt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Xt(
      this,
      "findLast",
      e,
      t,
      (r) => Bt(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Xt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Xt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Si(this, "includes", e);
  },
  indexOf(...e) {
    return Si(this, "indexOf", e);
  },
  join(e) {
    return Lr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Si(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Xt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Xr(this, "pop");
  },
  push(...e) {
    return Xr(this, "push", e);
  },
  reduce(e, ...t) {
    return Aa(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Aa(this, "reduceRight", e, t);
  },
  shift() {
    return Xr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Xt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Xr(this, "splice", e);
  },
  toReversed() {
    return Lr(this).toReversed();
  },
  toSorted(e) {
    return Lr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Lr(this).toSpliced(...e);
  },
  unshift(...e) {
    return Xr(this, "unshift", e);
  },
  values() {
    return vi(this, "values", (e) => Bt(this, e));
  }
};
function vi(e, t, r) {
  const n = ii(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Rt(e) && (i._next = i.next, i.next = () => {
    const a = i._next();
    return a.done || (a.value = r(a.value)), a;
  }), i;
}
const io = Array.prototype;
function Xt(e, t, r, n, i, a) {
  const o = ii(e), u = o !== e && !/* @__PURE__ */ Rt(e), p = o[t];
  if (p !== io[t]) {
    const S = p.apply(e, a);
    return u ? Dt(S) : S;
  }
  let v = r;
  o !== e && (u ? v = function(S, I) {
    return r.call(this, Bt(e, S), I, e);
  } : r.length > 2 && (v = function(S, I) {
    return r.call(this, S, I, e);
  }));
  const y = p.call(o, v, n);
  return u && i ? i(y) : y;
}
function Aa(e, t, r, n) {
  const i = ii(e), a = i !== e && !/* @__PURE__ */ Rt(e);
  let o = r, u = !1;
  i !== e && (a ? (u = n.length === 0, o = function(v, y, S) {
    return u && (u = !1, v = Bt(e, v)), r.call(this, v, Bt(e, y), S, e);
  }) : r.length > 3 && (o = function(v, y, S) {
    return r.call(this, v, y, S, e);
  }));
  const p = i[t](o, ...n);
  return u ? Bt(e, p) : p;
}
function Si(e, t, r) {
  const n = /* @__PURE__ */ ve(e);
  et(n, "iterate", pn);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ oa(r[0]) ? (r[0] = /* @__PURE__ */ ve(r[0]), n[t](...r)) : i;
}
function Xr(e, t, r = []) {
  rr(), ra();
  const n = (/* @__PURE__ */ ve(e))[t].apply(e, r);
  return na(), nr(), n;
}
const ao = /* @__PURE__ */ Zi("__proto__,__v_isRef,__isVue"), Fs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Kt)
);
function so(e) {
  Kt(e) || (e = String(e));
  const t = /* @__PURE__ */ ve(this);
  return et(t, "has", e), t.hasOwnProperty(e);
}
class Hs {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, a = this._isShallow;
    if (r === "__v_isReactive")
      return !i;
    if (r === "__v_isReadonly")
      return i;
    if (r === "__v_isShallow")
      return a;
    if (r === "__v_raw")
      return n === (i ? a ? yo : Bs : a ? Vs : js).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = ne(t);
    if (!i) {
      let p;
      if (o && (p = no[r]))
        return p;
      if (r === "hasOwnProperty")
        return so;
    }
    const u = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ tt(t) ? t : n
    );
    if ((Kt(r) ? Fs.has(r) : ao(r)) || (i || et(t, "get", r), a))
      return u;
    if (/* @__PURE__ */ tt(u)) {
      const p = o && ea(r) ? u : u.value;
      return i && Ee(p) ? /* @__PURE__ */ qi(p) : p;
    }
    return Ee(u) ? i ? /* @__PURE__ */ qi(u) : /* @__PURE__ */ hr(u) : u;
  }
}
class $s extends Hs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let a = t[r];
    const o = ne(t) && ea(r);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ ir(a);
      if (!/* @__PURE__ */ Rt(n) && !/* @__PURE__ */ ir(n) && (a = /* @__PURE__ */ ve(a), n = /* @__PURE__ */ ve(n)), !o && /* @__PURE__ */ tt(a) && !/* @__PURE__ */ tt(n))
        return v || (a.value = n), !0;
    }
    const u = o ? Number(r) < t.length : Se(t, r), p = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ tt(t) ? t : i
    );
    return t === /* @__PURE__ */ ve(i) && p && (u ? zt(n, a) && Qt(t, "set", r, n) : Qt(t, "add", r, n)), p;
  }
  deleteProperty(t, r) {
    const n = Se(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Qt(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Kt(r) || !Fs.has(r)) && et(t, "has", r), n;
  }
  ownKeys(t) {
    return et(
      t,
      "iterate",
      ne(t) ? "length" : xr
    ), Reflect.ownKeys(t);
  }
}
class lo extends Hs {
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
const oo = /* @__PURE__ */ new $s(), co = /* @__PURE__ */ new lo(), uo = /* @__PURE__ */ new $s(!0);
const Bi = (e) => e, In = (e) => Reflect.getPrototypeOf(e);
function fo(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, a = /* @__PURE__ */ ve(i), o = mr(a), u = e === "entries" || e === Symbol.iterator && o, p = e === "keys" && o, v = i[e](...n), y = r ? Bi : t ? zr : Dt;
    return !t && et(
      a,
      "iterate",
      p ? Vi : xr
    ), rt(
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
function Mn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function po(e, t) {
  const r = {
    get(i) {
      const a = this.__v_raw, o = /* @__PURE__ */ ve(a), u = /* @__PURE__ */ ve(i);
      e || (zt(i, u) && et(o, "get", i), et(o, "get", u));
      const { has: p } = In(o), v = t ? Bi : e ? zr : Dt;
      if (p.call(o, i))
        return v(a.get(i));
      if (p.call(o, u))
        return v(a.get(u));
      a !== o && a.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && et(/* @__PURE__ */ ve(i), "iterate", xr), i.size;
    },
    has(i) {
      const a = this.__v_raw, o = /* @__PURE__ */ ve(a), u = /* @__PURE__ */ ve(i);
      return e || (zt(i, u) && et(o, "has", i), et(o, "has", u)), i === u ? a.has(i) : a.has(i) || a.has(u);
    },
    forEach(i, a) {
      const o = this, u = o.__v_raw, p = /* @__PURE__ */ ve(u), v = t ? Bi : e ? zr : Dt;
      return !e && et(p, "iterate", xr), u.forEach((y, S) => i.call(a, v(y), v(S), o));
    }
  };
  return rt(
    r,
    e ? {
      add: Mn("add"),
      set: Mn("set"),
      delete: Mn("delete"),
      clear: Mn("clear")
    } : {
      add(i) {
        const a = /* @__PURE__ */ ve(this), o = In(a), u = /* @__PURE__ */ ve(i), p = !t && !/* @__PURE__ */ Rt(i) && !/* @__PURE__ */ ir(i) ? u : i;
        return o.has.call(a, p) || zt(i, p) && o.has.call(a, i) || zt(u, p) && o.has.call(a, u) || (a.add(p), Qt(a, "add", p, p)), this;
      },
      set(i, a) {
        !t && !/* @__PURE__ */ Rt(a) && !/* @__PURE__ */ ir(a) && (a = /* @__PURE__ */ ve(a));
        const o = /* @__PURE__ */ ve(this), { has: u, get: p } = In(o);
        let v = u.call(o, i);
        v || (i = /* @__PURE__ */ ve(i), v = u.call(o, i));
        const y = p.call(o, i);
        return o.set(i, a), v ? zt(a, y) && Qt(o, "set", i, a) : Qt(o, "add", i, a), this;
      },
      delete(i) {
        const a = /* @__PURE__ */ ve(this), { has: o, get: u } = In(a);
        let p = o.call(a, i);
        p || (i = /* @__PURE__ */ ve(i), p = o.call(a, i)), u && u.call(a, i);
        const v = a.delete(i);
        return p && Qt(a, "delete", i, void 0), v;
      },
      clear() {
        const i = /* @__PURE__ */ ve(this), a = i.size !== 0, o = i.clear();
        return a && Qt(
          i,
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
  ].forEach((i) => {
    r[i] = fo(i, e, t);
  }), r;
}
function sa(e, t) {
  const r = po(e, t);
  return (n, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    Se(r, i) && i in n ? r : n,
    i,
    a
  );
}
const ho = {
  get: /* @__PURE__ */ sa(!1, !1)
}, mo = {
  get: /* @__PURE__ */ sa(!1, !0)
}, bo = {
  get: /* @__PURE__ */ sa(!0, !1)
};
const js = /* @__PURE__ */ new WeakMap(), Vs = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap();
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
function hr(e) {
  return /* @__PURE__ */ ir(e) ? e : la(
    e,
    !1,
    oo,
    ho,
    js
  );
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  return la(
    e,
    !1,
    uo,
    mo,
    Vs
  );
}
// @__NO_SIDE_EFFECTS__
function qi(e) {
  return la(
    e,
    !0,
    co,
    bo,
    Bs
  );
}
function la(e, t, r, n, i) {
  if (!Ee(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const a = i.get(e);
  if (a)
    return a;
  const o = go(Vl(e));
  if (o === 0)
    return e;
  const u = new Proxy(
    e,
    o === 2 ? n : r
  );
  return i.set(e, u), u;
}
// @__NO_SIDE_EFFECTS__
function Ar(e) {
  return /* @__PURE__ */ ir(e) ? /* @__PURE__ */ Ar(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ir(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function oa(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ve(t) : e;
}
function vo(e) {
  return !Se(e, "__v_skip") && Object.isExtensible(e) && xs(e, "__v_skip", !0), e;
}
const Dt = (e) => Ee(e) ? /* @__PURE__ */ hr(e) : e, zr = (e) => Ee(e) ? /* @__PURE__ */ qi(e) : e;
// @__NO_SIDE_EFFECTS__
function tt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ka(e) {
  return So(e, !1);
}
function So(e, t) {
  return /* @__PURE__ */ tt(e) ? e : new wo(e, t);
}
class wo {
  constructor(t, r) {
    this.dep = new aa(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ ve(t), this._value = r ? t : Dt(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Rt(t) || /* @__PURE__ */ ir(t);
    t = n ? t : /* @__PURE__ */ ve(t), zt(t, r) && (this._rawValue = t, this._value = n ? t : Dt(t), this.dep.trigger());
  }
}
function h(e) {
  return /* @__PURE__ */ tt(e) ? e.value : e;
}
const Eo = {
  get: (e, t, r) => t === "__v_raw" ? e : h(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ tt(i) && !/* @__PURE__ */ tt(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function qs(e) {
  return /* @__PURE__ */ Ar(e) ? e : new Proxy(e, Eo);
}
class To {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new aa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Re !== this)
      return Ps(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ls(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Co(e, t, r = !1) {
  let n, i;
  return de(e) ? n = e : (n = e.get, i = e.set), new To(n, i, r);
}
const Ln = {}, qn = /* @__PURE__ */ new WeakMap();
let wr;
function xo(e, t = !1, r = wr) {
  if (r) {
    let n = qn.get(r);
    n || qn.set(r, n = []), n.push(e);
  }
}
function Ao(e, t, r = Ce) {
  const { immediate: n, deep: i, once: a, scheduler: o, augmentJob: u, call: p } = r, v = (V) => i ? V : /* @__PURE__ */ Rt(V) || i === !1 || i === 0 ? er(V, 1) : er(V);
  let y, S, I, j, se = !1, W = !1;
  if (/* @__PURE__ */ tt(e) ? (S = () => e.value, se = /* @__PURE__ */ Rt(e)) : /* @__PURE__ */ Ar(e) ? (S = () => v(e), se = !0) : ne(e) ? (W = !0, se = e.some((V) => /* @__PURE__ */ Ar(V) || /* @__PURE__ */ Rt(V)), S = () => e.map((V) => {
    if (/* @__PURE__ */ tt(V))
      return V.value;
    if (/* @__PURE__ */ Ar(V))
      return v(V);
    if (de(V))
      return p ? p(V, 2) : V();
  })) : de(e) ? t ? S = p ? () => p(e, 2) : e : S = () => {
    if (I) {
      rr();
      try {
        I();
      } finally {
        nr();
      }
    }
    const V = wr;
    wr = y;
    try {
      return p ? p(e, 3, [j]) : e(j);
    } finally {
      wr = V;
    }
  } : S = Wt, t && i) {
    const V = S, ce = i === !0 ? 1 / 0 : i;
    S = () => er(V(), ce);
  }
  const ue = eo(), le = () => {
    y.stop(), ue && ue.active && Qi(ue.effects, y);
  };
  if (a && t) {
    const V = t;
    t = (...ce) => {
      const Me = V(...ce);
      return le(), Me;
    };
  }
  let z = W ? new Array(e.length).fill(Ln) : Ln;
  const U = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const ce = y.run();
        if (V || i || se || (W ? ce.some((Me, Ne) => zt(Me, z[Ne])) : zt(ce, z))) {
          I && I();
          const Me = wr;
          wr = y;
          try {
            const Ne = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              z === Ln ? void 0 : W && z[0] === Ln ? [] : z,
              j
            ];
            z = ce, p ? p(t, 3, Ne) : (
              // @ts-expect-error
              t(...Ne)
            );
          } finally {
            wr = Me;
          }
        }
      } else
        y.run();
  };
  return u && u(U), y = new Os(S), y.scheduler = o ? () => o(U, !1) : U, j = (V) => xo(V, !1, y), I = y.onStop = () => {
    const V = qn.get(y);
    if (V) {
      if (p)
        p(V, 4);
      else
        for (const ce of V) ce();
      qn.delete(y);
    }
  }, t ? n ? U(!0) : z = y.run() : o ? o(U.bind(null, !0), !0) : y.run(), le.pause = y.pause.bind(y), le.resume = y.resume.bind(y), le.stop = le, le;
}
function er(e, t = 1 / 0, r) {
  if (t <= 0 || !Ee(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ tt(e))
    er(e.value, t, r);
  else if (ne(e))
    for (let n = 0; n < e.length; n++)
      er(e[n], t, r);
  else if (Rr(e) || mr(e))
    e.forEach((n) => {
      er(n, t, r);
    });
  else if (Ts(e)) {
    for (const n in e)
      er(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && er(e[n], t, r);
  }
  return e;
}
function _n(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    ai(i, t, r);
  }
}
function Ft(e, t, r, n) {
  if (de(e)) {
    const i = _n(e, t, r, n);
    return i && ws(i) && i.catch((a) => {
      ai(a, t, r);
    }), i;
  }
  if (ne(e)) {
    const i = [];
    for (let a = 0; a < e.length; a++)
      i.push(Ft(e[a], t, r, n));
    return i;
  }
}
function ai(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Ce;
  if (t) {
    let u = t.parent;
    const p = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; u; ) {
      const y = u.ec;
      if (y) {
        for (let S = 0; S < y.length; S++)
          if (y[S](e, p, v) === !1)
            return;
      }
      u = u.parent;
    }
    if (a) {
      rr(), _n(a, null, 10, [
        e,
        p,
        v
      ]), nr();
      return;
    }
  }
  ko(e, r, i, n, o);
}
function ko(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const ct = [];
let Vt = -1;
const Vr = [];
let pr = null, Fr = 0;
const zs = /* @__PURE__ */ Promise.resolve();
let zn = null;
function Ws(e) {
  const t = zn || zs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ro(e) {
  let t = Vt + 1, r = ct.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = ct[n], a = hn(i);
    a < e || a === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function ca(e) {
  if (!(e.flags & 1)) {
    const t = hn(e), r = ct[ct.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= hn(r) ? ct.push(e) : ct.splice(Ro(t), 0, e), e.flags |= 1, Ks();
  }
}
function Ks() {
  zn || (zn = zs.then(Ys));
}
function Oo(e) {
  if (!ne(e))
    pr && e.id === -1 ? pr.splice(Fr + 1, 0, e) : e.flags & 1 || (Vr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Vr.push(e[t]);
  Ks();
}
function Ra(e, t, r = Vt + 1) {
  for (; r < ct.length; r++) {
    const n = ct[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ct.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Gs(e) {
  if (Vr.length) {
    const t = [...new Set(Vr)].sort(
      (r, n) => hn(r) - hn(n)
    );
    if (Vr.length = 0, pr) {
      for (let r = 0; r < t.length; r++)
        pr.push(t[r]);
      return;
    }
    for (pr = t, Fr = 0; Fr < pr.length; Fr++) {
      const r = pr[Fr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    pr = null, Fr = 0;
  }
}
const hn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ys(e) {
  try {
    for (Vt = 0; Vt < ct.length; Vt++) {
      const t = ct[Vt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), _n(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Vt < ct.length; Vt++) {
      const t = ct[Vt];
      t && (t.flags &= -2);
    }
    Vt = -1, ct.length = 0, Gs(), zn = null, (ct.length || Vr.length) && Ys();
  }
}
let kt = null, Xs = null;
function Wn(e) {
  const t = kt;
  return kt = e, Xs = e && e.type.__scopeId || null, t;
}
function No(e, t = kt, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && $a(-1);
    const a = Wn(t), o = kr.length;
    let u;
    try {
      u = e(...i);
    } finally {
      for (let p = kr.length; p > o; p--) wl();
      Wn(a), n._d && $a(1);
    }
    return u;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function We(e, t) {
  if (kt === null)
    return e;
  const r = ui(kt), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [a, o, u, p = Ce] = t[i];
    a && (de(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && er(o), n.push({
      dir: a,
      instance: r,
      value: o,
      oldValue: void 0,
      arg: u,
      modifiers: p
    }));
  }
  return e;
}
function _r(e, t, r, n) {
  const i = e.dirs, a = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const u = i[o];
    a && (u.oldValue = a[o].value);
    let p = u.dir[n];
    p && (rr(), Ft(p, r, 8, [
      e.el,
      u,
      e,
      t
    ]), nr());
  }
}
function Po(e, t) {
  if (ut) {
    let r = ut.provides;
    const n = ut.parent && ut.parent.provides;
    n === r && (r = ut.provides = Object.create(n)), r[e] = t;
  }
}
function jn(e, t, r = !1) {
  const n = kc();
  if (n || Br) {
    let i = Br ? Br._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && de(t) ? t.call(n && n.proxy) : t;
  }
}
const Io = /* @__PURE__ */ Symbol.for("v-scx"), Mo = () => jn(Io);
function wi(e, t, r) {
  return Js(e, t, r);
}
function Js(e, t, r = Ce) {
  const { immediate: n, deep: i, flush: a, once: o } = r, u = rt({}, r), p = t && n || !t && a !== "post";
  let v;
  if (yn) {
    if (a === "sync") {
      const j = Mo();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!p) {
      const j = () => {
      };
      return j.stop = Wt, j.resume = Wt, j.pause = Wt, j;
    }
  }
  const y = ut;
  u.call = (j, se, W) => Ft(j, y, se, W);
  let S = !1;
  a === "post" ? u.scheduler = (j) => {
    bt(j, y && y.suspense);
  } : a !== "sync" && (S = !0, u.scheduler = (j, se) => {
    se ? j() : ca(j);
  }), u.augmentJob = (j) => {
    t && (j.flags |= 4), S && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const I = Ao(e, t, u);
  return yn && (v ? v.push(I) : p && I()), I;
}
function Lo(e, t, r) {
  const n = this.proxy, i = De(e) ? e.includes(".") ? Zs(n, e) : () => n[e] : e.bind(n, n);
  let a;
  de(t) ? a = t : (a = t.handler, r = t);
  const o = vn(this), u = Js(i, a.bind(n), r);
  return o(), u;
}
function Zs(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const Uo = /* @__PURE__ */ Symbol("_vte"), si = (e) => e.__isTeleport, Ei = /* @__PURE__ */ Symbol("_leaveCb");
function Do(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== ar) {
        t = r;
        break;
      }
  }
  return t;
}
function Qs(e) {
  if (!da(e))
    return si(e.type) && e.children ? Do(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: r } = e;
  if (r) {
    if (t & 16)
      return r[0];
    if (t & 32 && de(r.default))
      return r.default();
  }
}
function ua(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    ua(
      si(r.type) && Qs(r) || r,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function el(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Oa(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Kn = /* @__PURE__ */ new WeakMap();
function cn(e, t, r, n, i = !1) {
  if (ne(e)) {
    e.forEach(
      (W, ue) => cn(
        W,
        t && (ne(t) ? t[ue] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (un(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && cn(e, t, r, n.component.subTree);
    return;
  }
  const a = n.shapeFlag & 4 ? ui(n.component) : n.el, o = i ? null : a, { i: u, r: p } = e, v = t && t.r, y = u.refs === Ce ? u.refs = {} : u.refs, S = u.setupState, I = /* @__PURE__ */ ve(S), j = S === Ce ? Ss : (W) => Oa(y, W) ? !1 : Se(I, W), se = (W, ue) => !(ue && Oa(y, ue));
  if (v != null && v !== p) {
    if (Na(t), De(v))
      y[v] = null, j(v) && (S[v] = null);
    else if (/* @__PURE__ */ tt(v)) {
      const W = t;
      se(v, W.k) && (v.value = null), W.k && (y[W.k] = null);
    }
  }
  if (de(p))
    _n(p, u, 12, [o, y]);
  else {
    const W = De(p), ue = /* @__PURE__ */ tt(p);
    if (W || ue) {
      const le = () => {
        if (e.f) {
          const z = W ? j(p) ? S[p] : y[p] : se() || !e.k ? p.value : y[e.k];
          if (i)
            ne(z) && Qi(z, a);
          else if (ne(z))
            z.includes(a) || z.push(a);
          else if (W)
            y[p] = [a], j(p) && (S[p] = y[p]);
          else {
            const U = [a];
            se(p, e.k) && (p.value = U), e.k && (y[e.k] = U);
          }
        } else W ? (y[p] = o, j(p) && (S[p] = o)) : ue && (se(p, e.k) && (p.value = o), e.k && (y[e.k] = o));
      };
      if (o) {
        const z = () => {
          le(), Kn.delete(e);
        };
        z.id = -1, Kn.set(e, z), bt(z, r);
      } else
        Na(e), le();
    }
  }
}
function Na(e) {
  const t = Kn.get(e);
  t && (t.flags |= 8, Kn.delete(e));
}
ni().requestIdleCallback;
ni().cancelIdleCallback;
const un = (e) => !!e.type.__asyncLoader, da = (e) => e.type.__isKeepAlive;
function Fo(e, t) {
  tl(e, "a", t);
}
function Ho(e, t) {
  tl(e, "da", t);
}
function tl(e, t, r = ut) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (li(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      da(i.parent.vnode) && $o(n, t, r, i), i = i.parent;
  }
}
function $o(e, t, r, n) {
  const i = li(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  il(() => {
    Qi(n[t], i);
  }, r);
}
function li(e, t, r = ut, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), a = t.__weh || (t.__weh = (...o) => {
      rr();
      const u = vn(r), p = Ft(t, r, e, o);
      return u(), nr(), p;
    });
    return n ? i.unshift(a) : i.push(a), a;
  }
}
const sr = (e) => (t, r = ut) => {
  (!yn || e === "sp") && li(e, (...n) => t(...n), r);
}, jo = sr("bm"), rl = sr("m"), Vo = sr(
  "bu"
), Bo = sr("u"), nl = sr(
  "bum"
), il = sr("um"), qo = sr(
  "sp"
), zo = sr("rtg"), Wo = sr("rtc");
function Ko(e, t = ut) {
  li("ec", e, t);
}
const Go = /* @__PURE__ */ Symbol.for("v-ndc");
function he(e, t, r, n) {
  let i;
  const a = r, o = ne(e);
  if (o || De(e)) {
    const u = o && /* @__PURE__ */ Ar(e);
    let p = !1, v = !1;
    u && (p = !/* @__PURE__ */ Rt(e), v = /* @__PURE__ */ ir(e), e = ii(e)), i = new Array(e.length);
    for (let y = 0, S = e.length; y < S; y++)
      i[y] = t(
        p ? v ? zr(Dt(e[y])) : Dt(e[y]) : e[y],
        y,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let u = 0; u < e; u++)
      i[u] = t(u + 1, u, void 0, a);
  } else if (Ee(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (u, p) => t(u, p, void 0, a)
      );
    else {
      const u = Object.keys(e);
      i = new Array(u.length);
      for (let p = 0, v = u.length; p < v; p++) {
        const y = u[p];
        i[p] = t(e[y], y, p, a);
      }
    }
  else
    i = [];
  return i;
}
const zi = (e) => e ? xl(e) ? ui(e) : zi(e.parent) : null, dn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ rt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => zi(e.parent),
    $root: (e) => zi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => sl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ca(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ws.bind(e.proxy)),
    $watch: (e) => Lo.bind(e)
  })
), Ti = (e, t) => e !== Ce && !e.__isScriptSetup && Se(e, t), Yo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: a, accessCache: o, type: u, appContext: p } = e;
    if (t[0] !== "$") {
      const I = o[t];
      if (I !== void 0)
        switch (I) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return r[t];
          case 3:
            return a[t];
        }
      else {
        if (Ti(n, t))
          return o[t] = 1, n[t];
        if (i !== Ce && Se(i, t))
          return o[t] = 2, i[t];
        if (Se(a, t))
          return o[t] = 3, a[t];
        if (r !== Ce && Se(r, t))
          return o[t] = 4, r[t];
        Wi && (o[t] = 0);
      }
    }
    const v = dn[t];
    let y, S;
    if (v)
      return t === "$attrs" && et(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = u.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== Ce && Se(r, t))
      return o[t] = 4, r[t];
    if (
      // global properties
      S = p.config.globalProperties, Se(S, t)
    )
      return S[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: a } = e;
    return Ti(i, t) ? (i[t] = r, !0) : n !== Ce && Se(n, t) ? (n[t] = r, !0) : Se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: a, type: o }
  }, u) {
    let p;
    return !!(r[u] || e !== Ce && u[0] !== "$" && Se(e, u) || Ti(t, u) || Se(a, u) || Se(n, u) || Se(dn, u) || Se(i.config.globalProperties, u) || (p = o.__cssModules) && p[u]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Se(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Pa(e) {
  return ne(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Wi = !0;
function Xo(e) {
  const t = sl(e), r = e.proxy, n = e.ctx;
  Wi = !1, t.beforeCreate && Ia(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: a,
    methods: o,
    watch: u,
    provide: p,
    inject: v,
    // lifecycle
    created: y,
    beforeMount: S,
    mounted: I,
    beforeUpdate: j,
    updated: se,
    activated: W,
    deactivated: ue,
    beforeDestroy: le,
    beforeUnmount: z,
    destroyed: U,
    unmounted: V,
    render: ce,
    renderTracked: Me,
    renderTriggered: Ne,
    errorCaptured: Ve,
    serverPrefetch: we,
    // public API
    expose: Le,
    inheritAttrs: nt,
    // assets
    components: dt,
    directives: Ge,
    filters: Et
  } = t;
  if (v && Jo(v, n, null), o)
    for (const ye in o) {
      const fe = o[ye];
      de(fe) && (n[ye] = fe.bind(r));
    }
  if (i) {
    const ye = i.call(r, r);
    Ee(ye) && (e.data = /* @__PURE__ */ hr(ye));
  }
  if (Wi = !0, a)
    for (const ye in a) {
      const fe = a[ye], Be = de(fe) ? fe.bind(r, r) : de(fe.get) ? fe.get.bind(r, r) : Wt, ge = !de(fe) && de(fe.set) ? fe.set.bind(r) : Wt, Te = q({
        get: Be,
        set: ge
      });
      Object.defineProperty(n, ye, {
        enumerable: !0,
        configurable: !0,
        get: () => Te.value,
        set: (qe) => Te.value = qe
      });
    }
  if (u)
    for (const ye in u)
      al(u[ye], n, r, ye);
  if (p) {
    const ye = de(p) ? p.call(r) : p;
    Reflect.ownKeys(ye).forEach((fe) => {
      Po(fe, ye[fe]);
    });
  }
  y && Ia(y, e, "c");
  function Ue(ye, fe) {
    ne(fe) ? fe.forEach((Be) => ye(Be.bind(r))) : fe && ye(fe.bind(r));
  }
  if (Ue(jo, S), Ue(rl, I), Ue(Vo, j), Ue(Bo, se), Ue(Fo, W), Ue(Ho, ue), Ue(Ko, Ve), Ue(Wo, Me), Ue(zo, Ne), Ue(nl, z), Ue(il, V), Ue(qo, we), ne(Le))
    if (Le.length) {
      const ye = e.exposed || (e.exposed = {});
      Le.forEach((fe) => {
        Object.defineProperty(ye, fe, {
          get: () => r[fe],
          set: (Be) => r[fe] = Be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === Wt && (e.render = ce), nt != null && (e.inheritAttrs = nt), dt && (e.components = dt), Ge && (e.directives = Ge), we && el(e);
}
function Jo(e, t, r = Wt) {
  ne(e) && (e = Ki(e));
  for (const n in e) {
    const i = e[n];
    let a;
    Ee(i) ? "default" in i ? a = jn(
      i.from || n,
      i.default,
      !0
    ) : a = jn(i.from || n) : a = jn(i), /* @__PURE__ */ tt(a) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (o) => a.value = o
    }) : t[n] = a;
  }
}
function Ia(e, t, r) {
  Ft(
    ne(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function al(e, t, r, n) {
  let i = n.includes(".") ? Zs(r, n) : () => r[n];
  if (De(e)) {
    const a = t[e];
    de(a) && wi(i, a);
  } else if (de(e))
    wi(i, e.bind(r));
  else if (Ee(e))
    if (ne(e))
      e.forEach((a) => al(a, t, r, n));
    else {
      const a = de(e.handler) ? e.handler.bind(r) : t[e.handler];
      de(a) && wi(i, a, e);
    }
}
function sl(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: a,
    config: { optionMergeStrategies: o }
  } = e.appContext, u = a.get(t);
  let p;
  return u ? p = u : !i.length && !r && !n ? p = t : (p = {}, i.length && i.forEach(
    (v) => Gn(p, v, o, !0)
  ), Gn(p, t, o)), Ee(t) && a.set(t, p), p;
}
function Gn(e, t, r, n = !1) {
  const { mixins: i, extends: a } = t;
  a && Gn(e, a, r, !0), i && i.forEach(
    (o) => Gn(e, o, r, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const u = Zo[o] || r && r[o];
      e[o] = u ? u(e[o], t[o]) : t[o];
    }
  return e;
}
const Zo = {
  data: Ma,
  props: La,
  emits: La,
  // objects
  methods: rn,
  computed: rn,
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
  components: rn,
  directives: rn,
  // watch
  watch: ec,
  // provide / inject
  provide: Ma,
  inject: Qo
};
function Ma(e, t) {
  return t ? e ? function() {
    return rt(
      de(e) ? e.call(this, this) : e,
      de(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qo(e, t) {
  return rn(Ki(e), Ki(t));
}
function Ki(e) {
  if (ne(e)) {
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
function rn(e, t) {
  return e ? rt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function La(e, t) {
  return e ? ne(e) && ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : rt(
    /* @__PURE__ */ Object.create(null),
    Pa(e),
    Pa(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = rt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = ot(e[n], t[n]);
  return r;
}
function ll() {
  return {
    app: null,
    config: {
      isNativeTag: Ss,
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
    de(n) || (n = rt({}, n)), i != null && !Ee(i) && (i = null);
    const a = ll(), o = /* @__PURE__ */ new WeakSet(), u = [];
    let p = !1;
    const v = a.app = {
      _uid: tc++,
      _component: n,
      _props: i,
      _container: null,
      _context: a,
      _instance: null,
      version: Mc,
      get config() {
        return a.config;
      },
      set config(y) {
      },
      use(y, ...S) {
        return o.has(y) || (y && de(y.install) ? (o.add(y), y.install(v, ...S)) : de(y) && (o.add(y), y(v, ...S))), v;
      },
      mixin(y) {
        return a.mixins.includes(y) || a.mixins.push(y), v;
      },
      component(y, S) {
        return S ? (a.components[y] = S, v) : a.components[y];
      },
      directive(y, S) {
        return S ? (a.directives[y] = S, v) : a.directives[y];
      },
      mount(y, S, I) {
        if (!p) {
          const j = v._ceVNode || tr(n, i);
          return j.appContext = a, I === !0 ? I = "svg" : I === !1 && (I = void 0), e(j, y, I), p = !0, v._container = y, y.__vue_app__ = v, ui(j.component);
        }
      },
      onUnmount(y) {
        u.push(y);
      },
      unmount() {
        p && (Ft(
          u,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, S) {
        return a.provides[y] = S, v;
      },
      runWithContext(y) {
        const S = Br;
        Br = v;
        try {
          return y();
        } finally {
          Br = S;
        }
      }
    };
    return v;
  };
}
let Br = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Lt(t)}Modifiers`] || e[`${Or(t)}Modifiers`];
function ic(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ce;
  let i = r;
  const a = t.startsWith("update:"), o = a && nc(n, t.slice(7));
  o && (o.trim && (i = r.map((y) => De(y) ? y.trim() : y)), o.number && (i = i.map(ri)));
  let u, p = n[u = yi(t)] || // also try camelCase event handler (#2249)
  n[u = yi(Lt(t))];
  !p && a && (p = n[u = yi(Or(t))]), p && Ft(
    p,
    e,
    6,
    i
  );
  const v = n[u + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, Ft(
      v,
      e,
      6,
      i
    );
  }
}
const ac = /* @__PURE__ */ new WeakMap();
function ol(e, t, r = !1) {
  const n = r ? ac : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const a = e.emits;
  let o = {}, u = !1;
  if (!de(e)) {
    const p = (v) => {
      const y = ol(v, t, !0);
      y && (u = !0, rt(o, y));
    };
    !r && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  return !a && !u ? (Ee(e) && n.set(e, null), null) : (ne(a) ? a.forEach((p) => o[p] = null) : rt(o, a), Ee(e) && n.set(e, o), o);
}
function oi(e, t) {
  return !e || !Qn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, Or(t)) || Se(e, t));
}
function Ua(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [a],
    slots: o,
    attrs: u,
    emit: p,
    render: v,
    renderCache: y,
    props: S,
    data: I,
    setupState: j,
    ctx: se,
    inheritAttrs: W
  } = e, ue = Wn(e);
  let le, z;
  try {
    if (r.shapeFlag & 4) {
      const V = i || n, ce = V;
      le = qt(
        v.call(
          ce,
          V,
          y,
          S,
          j,
          I,
          se
        )
      ), z = u;
    } else {
      const V = t;
      le = qt(
        V.length > 1 ? V(
          S,
          { attrs: u, slots: o, emit: p }
        ) : V(
          S,
          null
        )
      ), z = t.props ? u : sc(u);
    }
  } catch (V) {
    kr.length = 0, ai(V, e, 1), le = tr(ar);
  }
  let U = le;
  if (z && W !== !1) {
    const V = Object.keys(z), { shapeFlag: ce } = U;
    V.length && ce & 7 && (a && V.some(ei) && (z = lc(
      z,
      a
    )), U = Wr(U, z, !1, !0));
  }
  if (r.dirs && (U = Wr(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = si(U.type) && Qs(U) || U;
    ua(V, r.transition);
  }
  return le = U, Wn(ue), le;
}
const sc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Qn(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, lc = (e, t) => {
  const r = {};
  for (const n in e)
    (!ei(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function oc(e, t, r) {
  const { props: n, children: i, component: a } = e, { props: o, children: u, patchFlag: p } = t, v = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return n ? Da(n, o, v) : !!o;
    if (p & 8) {
      const y = t.dynamicProps;
      for (let S = 0; S < y.length; S++) {
        const I = y[S];
        if (cl(o, n, I) && !oi(v, I))
          return !0;
      }
    }
  } else
    return (i || u) && (!u || !u.$stable) ? !0 : n === o ? !1 : n ? o ? Da(n, o, v) : !0 : !!o;
  return !1;
}
function Da(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    if (cl(t, e, a) && !oi(r, a))
      return !0;
  }
  return !1;
}
function cl(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Ee(n) && Ee(i) ? !br(n, i) : n !== i;
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
const ul = {}, dl = () => Object.create(ul), fl = (e) => Object.getPrototypeOf(e) === ul;
function uc(e, t, r, n = !1) {
  const i = {}, a = dl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), pl(e, t, i, a);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ _o(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function dc(e, t, r, n) {
  const {
    props: i,
    attrs: a,
    vnode: { patchFlag: o }
  } = e, u = /* @__PURE__ */ ve(i), [p] = e.propsOptions;
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
        if (oi(e.emitsOptions, I))
          continue;
        const j = t[I];
        if (p)
          if (Se(a, I))
            j !== a[I] && (a[I] = j, v = !0);
          else {
            const se = Lt(I);
            i[se] = Gi(
              p,
              u,
              se,
              j,
              e,
              !1
            );
          }
        else
          j !== a[I] && (a[I] = j, v = !0);
      }
    }
  } else {
    pl(e, t, i, a) && (v = !0);
    let y;
    for (const S in u)
      (!t || // for camelCase
      !Se(t, S) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Or(S)) === S || !Se(t, y))) && (p ? r && // for camelCase
      (r[S] !== void 0 || // for kebab-case
      r[y] !== void 0) && (i[S] = Gi(
        p,
        u,
        S,
        void 0,
        e,
        !0
      )) : delete i[S]);
    if (a !== u)
      for (const S in a)
        (!t || !Se(t, S)) && (delete a[S], v = !0);
  }
  v && Qt(e.attrs, "set", "");
}
function pl(e, t, r, n) {
  const [i, a] = e.propsOptions;
  let o = !1, u;
  if (t)
    for (let p in t) {
      if (sn(p))
        continue;
      const v = t[p];
      let y;
      i && Se(i, y = Lt(p)) ? !a || !a.includes(y) ? r[y] = v : (u || (u = {}))[y] = v : oi(e.emitsOptions, p) || (!(p in n) || v !== n[p]) && (n[p] = v, o = !0);
    }
  if (a) {
    const p = /* @__PURE__ */ ve(r), v = u || Ce;
    for (let y = 0; y < a.length; y++) {
      const S = a[y];
      r[S] = Gi(
        i,
        p,
        S,
        v[S],
        e,
        !Se(v, S)
      );
    }
  }
  return o;
}
function Gi(e, t, r, n, i, a) {
  const o = e[r];
  if (o != null) {
    const u = Se(o, "default");
    if (u && n === void 0) {
      const p = o.default;
      if (o.type !== Function && !o.skipFactory && de(p)) {
        const { propsDefaults: v } = i;
        if (r in v)
          n = v[r];
        else {
          const y = vn(i);
          n = v[r] = p.call(
            null,
            t
          ), y();
        }
      } else
        n = p;
      i.ce && i.ce._setProp(r, n);
    }
    o[
      0
      /* shouldCast */
    ] && (a && !u ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Or(r)) && (n = !0));
  }
  return n;
}
const fc = /* @__PURE__ */ new WeakMap();
function hl(e, t, r = !1) {
  const n = r ? fc : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const a = e.props, o = {}, u = [];
  let p = !1;
  if (!de(e)) {
    const y = (S) => {
      p = !0;
      const [I, j] = hl(S, t, !0);
      rt(o, I), j && u.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!a && !p)
    return Ee(e) && n.set(e, $r), $r;
  if (ne(a))
    for (let y = 0; y < a.length; y++) {
      const S = Lt(a[y]);
      Fa(S) && (o[S] = Ce);
    }
  else if (a)
    for (const y in a) {
      const S = Lt(y);
      if (Fa(S)) {
        const I = a[y], j = o[S] = ne(I) || de(I) ? { type: I } : rt({}, I), se = j.type;
        let W = !1, ue = !0;
        if (ne(se))
          for (let le = 0; le < se.length; ++le) {
            const z = se[le], U = de(z) && z.name;
            if (U === "Boolean") {
              W = !0;
              break;
            } else U === "String" && (ue = !1);
          }
        else
          W = de(se) && se.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = W, j[
          1
          /* shouldCastTrue */
        ] = ue, (W || Se(j, "default")) && u.push(S);
      }
    }
  const v = [o, u];
  return Ee(e) && n.set(e, v), v;
}
function Fa(e) {
  return e[0] !== "$" && !sn(e);
}
const fa = (e) => e === "_" || e === "_ctx" || e === "$stable", pa = (e) => ne(e) ? e.map(qt) : [qt(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = No((...i) => pa(t(...i)), r);
  return n._c = !1, n;
}, ml = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (fa(i)) continue;
    const a = e[i];
    if (de(a))
      t[i] = pc(i, a, n);
    else if (a != null) {
      const o = pa(a);
      t[i] = () => o;
    }
  }
}, bl = (e, t) => {
  const r = pa(t);
  e.slots.default = () => r;
}, yl = (e, t, r) => {
  for (const n in t)
    (r || !fa(n)) && (e[n] = t[n]);
}, hc = (e, t, r) => {
  const n = e.slots = dl();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (yl(n, t, r), r && xs(n, "_", i, !0)) : ml(t, n);
  } else t && bl(e, t);
}, mc = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let a = !0, o = Ce;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? r && u === 1 ? a = !1 : yl(i, t, r) : (a = !t.$stable, ml(t, i)), o = t;
  } else t && (bl(e, t), o = { default: 1 });
  if (a)
    for (const u in i)
      !fa(u) && o[u] == null && delete i[u];
}, bt = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = ni();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: a,
    createElement: o,
    createText: u,
    createComment: p,
    setText: v,
    setElementText: y,
    parentNode: S,
    nextSibling: I,
    setScopeId: j = Wt,
    insertStaticContent: se
  } = e, W = (m, b, _, O = null, T = null, A = null, M = void 0, D = null, L = !!b.dynamicChildren) => {
    if (m === b)
      return;
    m && !Jr(m, b) && (O = ft(m), qe(m, T, A, !0), m = null), b.patchFlag === -2 && (L = !1, b.dynamicChildren = null);
    const { type: x, ref: G, shapeFlag: $ } = b;
    switch (x) {
      case ci:
        ue(m, b, _, O);
        break;
      case ar:
        le(m, b, _, O);
        break;
      case xi:
        m == null && z(b, _, O, M);
        break;
      case ee:
        dt(
          m,
          b,
          _,
          O,
          T,
          A,
          M,
          D,
          L
        );
        break;
      default:
        $ & 1 ? ce(
          m,
          b,
          _,
          O,
          T,
          A,
          M,
          D,
          L
        ) : $ & 6 ? Ge(
          m,
          b,
          _,
          O,
          T,
          A,
          M,
          D,
          L
        ) : ($ & 64 || $ & 128) && x.process(
          m,
          b,
          _,
          O,
          T,
          A,
          M,
          D,
          L,
          it
        );
    }
    G != null && T ? cn(G, m && m.ref, A, b || m, !b) : G == null && m && m.ref != null && cn(m.ref, null, A, m, !0);
  }, ue = (m, b, _, O) => {
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
  }, le = (m, b, _, O) => {
    m == null ? n(
      b.el = p(b.children || ""),
      _,
      O
    ) : b.el = m.el;
  }, z = (m, b, _, O) => {
    [m.el, m.anchor] = se(
      m.children,
      b,
      _,
      O,
      m.el,
      m.anchor
    );
  }, U = ({ el: m, anchor: b }, _, O) => {
    let T;
    for (; m && m !== b; )
      T = I(m), n(m, _, O), m = T;
    n(b, _, O);
  }, V = ({ el: m, anchor: b }) => {
    let _;
    for (; m && m !== b; )
      _ = I(m), i(m), m = _;
    i(b);
  }, ce = (m, b, _, O, T, A, M, D, L) => {
    if (b.type === "svg" ? M = "svg" : b.type === "math" && (M = "mathml"), m == null)
      Me(
        b,
        _,
        O,
        T,
        A,
        M,
        D,
        L
      );
    else {
      const x = m.el && m.el._isVueCE ? m.el : null;
      try {
        x && x._beginPatch(), we(
          m,
          b,
          T,
          A,
          M,
          D,
          L
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, Me = (m, b, _, O, T, A, M, D) => {
    let L, x;
    const { props: G, shapeFlag: $, transition: K, dirs: Z } = m;
    if (L = m.el = o(
      m.type,
      A,
      G && G.is,
      G
    ), $ & 8 ? y(L, m.children) : $ & 16 && Ve(
      m.children,
      L,
      null,
      O,
      T,
      Ci(m, A),
      M,
      D
    ), Z && _r(m, null, O, "created"), Ne(L, m, m.scopeId, M, O), G) {
      for (const N in G)
        N !== "value" && !sn(N) && a(L, N, null, G[N], A, O);
      "value" in G && a(L, "value", null, G.value, A), (x = G.onVnodeBeforeMount) && jt(x, O, m);
    }
    Z && _r(m, null, O, "beforeMount");
    const ie = gc(T, K);
    ie && K.beforeEnter(L), n(L, b, _), ((x = G && G.onVnodeMounted) || ie || Z) && bt(() => {
      x && jt(x, O, m), ie && K.enter(L), Z && _r(m, null, O, "mounted");
    }, T);
  }, Ne = (m, b, _, O, T) => {
    if (_ && j(m, _), O)
      for (let A = 0; A < O.length; A++)
        j(m, O[A]);
    if (T) {
      let A = T.subTree;
      if (b === A || Sl(A.type) && (A.ssContent === b || A.ssFallback === b)) {
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
  }, Ve = (m, b, _, O, T, A, M, D, L = 0) => {
    for (let x = L; x < m.length; x++) {
      const G = m[x] = D ? Zt(m[x]) : qt(m[x]);
      W(
        null,
        G,
        b,
        _,
        O,
        T,
        A,
        M,
        D
      );
    }
  }, we = (m, b, _, O, T, A, M) => {
    const D = b.el = m.el;
    let { patchFlag: L, dynamicChildren: x, dirs: G } = b;
    L |= m.patchFlag & 16;
    const $ = m.props || Ce, K = b.props || Ce;
    let Z;
    if (_ && vr(_, !1), (Z = K.onVnodeBeforeUpdate) && jt(Z, _, b, m), G && _r(b, m, _, "beforeUpdate"), _ && vr(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    x && (!m.dynamicChildren || m.dynamicChildren.length !== x.length) && (L = 0, M = !1, x = null), ($.innerHTML && K.innerHTML == null || $.textContent && K.textContent == null) && y(D, ""), x ? Le(
      m.dynamicChildren,
      x,
      D,
      _,
      O,
      Ci(b, T),
      A
    ) : M || fe(
      m,
      b,
      D,
      null,
      _,
      O,
      Ci(b, T),
      A,
      !1
    ), L > 0) {
      if (L & 16)
        nt(D, $, K, _, T);
      else if (L & 2 && $.class !== K.class && a(D, "class", null, K.class, T), L & 4 && a(D, "style", $.style, K.style, T), L & 8) {
        const ie = b.dynamicProps;
        for (let N = 0; N < ie.length; N++) {
          const P = ie[N], H = $[P], te = K[P];
          (te !== H || P === "value") && a(D, P, H, te, T, _);
        }
      }
      L & 1 && m.children !== b.children && y(D, b.children);
    } else !M && x == null && nt(D, $, K, _, T);
    ((Z = K.onVnodeUpdated) || G) && bt(() => {
      Z && jt(Z, _, b, m), G && _r(b, m, _, "updated");
    }, O);
  }, Le = (m, b, _, O, T, A, M) => {
    for (let D = 0; D < b.length; D++) {
      const L = m[D], x = b[D], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === ee || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Jr(L, x) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? S(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      W(
        L,
        x,
        G,
        null,
        O,
        T,
        A,
        M,
        !0
      );
    }
  }, nt = (m, b, _, O, T) => {
    if (b !== _) {
      if (b !== Ce)
        for (const A in b)
          !sn(A) && !(A in _) && a(
            m,
            A,
            b[A],
            null,
            T,
            O
          );
      for (const A in _) {
        if (sn(A)) continue;
        const M = _[A], D = b[A];
        M !== D && A !== "value" && a(m, A, D, M, T, O);
      }
      "value" in _ && a(m, "value", b.value, _.value, T);
    }
  }, dt = (m, b, _, O, T, A, M, D, L) => {
    const x = b.el = m ? m.el : u(""), G = b.anchor = m ? m.anchor : u("");
    let { patchFlag: $, dynamicChildren: K, slotScopeIds: Z } = b;
    Z && (D = D ? D.concat(Z) : Z), m == null ? (n(x, _, O), n(G, _, O), Ve(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      _,
      G,
      T,
      A,
      M,
      D,
      L
    )) : $ > 0 && $ & 64 && K && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === K.length ? (Le(
      m.dynamicChildren,
      K,
      _,
      T,
      A,
      M,
      D
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || T && b === T.subTree) && gl(
      m,
      b,
      !0
      /* shallow */
    )) : fe(
      m,
      b,
      _,
      G,
      T,
      A,
      M,
      D,
      L
    );
  }, Ge = (m, b, _, O, T, A, M, D, L) => {
    b.slotScopeIds = D, m == null ? b.shapeFlag & 512 ? T.ctx.activate(
      b,
      _,
      O,
      M,
      L
    ) : Et(
      b,
      _,
      O,
      T,
      A,
      M,
      L
    ) : Fe(m, b, L);
  }, Et = (m, b, _, O, T, A, M) => {
    const D = m.component = Ac(
      m,
      O,
      T
    );
    if (da(m) && (D.ctx.renderer = it), Rc(D, !1, M), D.asyncDep) {
      if (T && T.registerDep(D, Ue, M), !m.el) {
        const L = D.subTree = tr(ar);
        le(null, L, b, _), m.placeholder = L.el;
      }
    } else
      Ue(
        D,
        m,
        b,
        _,
        T,
        A,
        M
      );
  }, Fe = (m, b, _) => {
    const O = b.component = m.component;
    if (oc(m, b, _))
      if (O.asyncDep && !O.asyncResolved) {
        ye(O, b, _);
        return;
      } else
        O.next = b, O.update();
    else
      b.el = m.el, O.vnode = b;
  }, Ue = (m, b, _, O, T, A, M) => {
    const D = () => {
      if (m.isMounted) {
        let { next: $, bu: K, u: Z, parent: ie, vnode: N } = m;
        {
          const _e = _l(m);
          if (_e) {
            $ && ($.el = N.el, ye(m, $, M)), _e.asyncDep.then(() => {
              bt(() => {
                m.isUnmounted || x();
              }, T);
            });
            return;
          }
        }
        let P = $, H;
        vr(m, !1), $ ? ($.el = N.el, ye(m, $, M)) : $ = N, K && $n(K), (H = $.props && $.props.onVnodeBeforeUpdate) && jt(H, ie, $, N), vr(m, !0);
        const te = Ua(m), re = m.subTree;
        m.subTree = te, W(
          re,
          te,
          // parent may have changed if it's in a teleport
          S(re.el),
          // anchor may have changed if it's in a fragment
          ft(re),
          m,
          T,
          A
        ), $.el = te.el, P === null && cc(m, te.el), Z && bt(Z, T), (H = $.props && $.props.onVnodeUpdated) && bt(
          () => jt(H, ie, $, N),
          T
        );
      } else {
        let $;
        const { el: K, props: Z } = b, { bm: ie, m: N, parent: P, root: H, type: te } = m, re = un(b);
        vr(m, !1), ie && $n(ie), !re && ($ = Z && Z.onVnodeBeforeMount) && jt($, P, b), vr(m, !0);
        {
          H.ce && H.ce._hasShadowRoot() && H.ce._injectChildStyle(
            te,
            m.parent ? m.parent.type : void 0
          );
          const _e = m.subTree = Ua(m);
          W(
            null,
            _e,
            _,
            O,
            m,
            T,
            A
          ), b.el = _e.el;
        }
        if (N && bt(N, T), !re && ($ = Z && Z.onVnodeMounted)) {
          const _e = b;
          bt(
            () => jt($, P, _e),
            T
          );
        }
        (b.shapeFlag & 256 || P && un(P.vnode) && P.vnode.shapeFlag & 256) && m.a && bt(m.a, T), m.isMounted = !0, b = _ = O = null;
      }
    };
    m.scope.on();
    const L = m.effect = new Os(D);
    m.scope.off();
    const x = m.update = L.run.bind(L), G = m.job = L.runIfDirty.bind(L);
    G.i = m, G.id = m.uid, L.scheduler = () => ca(G), vr(m, !0), x();
  }, ye = (m, b, _) => {
    b.component = m;
    const O = m.vnode.props;
    m.vnode = b, m.next = null, dc(m, b.props, O, _), mc(m, b.children, _), rr(), Ra(m), nr();
  }, fe = (m, b, _, O, T, A, M, D, L = !1) => {
    const x = m && m.children, G = m ? m.shapeFlag : 0, $ = b.children, { patchFlag: K, shapeFlag: Z } = b;
    if (K > 0) {
      if (K & 128) {
        ge(
          x,
          $,
          _,
          O,
          T,
          A,
          M,
          D,
          L
        );
        return;
      } else if (K & 256) {
        Be(
          x,
          $,
          _,
          O,
          T,
          A,
          M,
          D,
          L
        );
        return;
      }
    }
    Z & 8 ? (G & 16 && ze(x, T, A), $ !== x && y(_, $)) : G & 16 ? Z & 16 ? ge(
      x,
      $,
      _,
      O,
      T,
      A,
      M,
      D,
      L
    ) : ze(x, T, A, !0) : (G & 8 && y(_, ""), Z & 16 && Ve(
      $,
      _,
      O,
      T,
      A,
      M,
      D,
      L
    ));
  }, Be = (m, b, _, O, T, A, M, D, L) => {
    m = m || $r, b = b || $r;
    const x = m.length, G = b.length, $ = Math.min(x, G);
    let K;
    for (K = 0; K < $; K++) {
      const Z = b[K] = L ? Zt(b[K]) : qt(b[K]);
      W(
        m[K],
        Z,
        _,
        null,
        T,
        A,
        M,
        D,
        L
      );
    }
    x > G ? ze(
      m,
      T,
      A,
      !0,
      !1,
      $
    ) : Ve(
      b,
      _,
      O,
      T,
      A,
      M,
      D,
      L,
      $
    );
  }, ge = (m, b, _, O, T, A, M, D, L) => {
    let x = 0;
    const G = b.length;
    let $ = m.length - 1, K = G - 1;
    for (; x <= $ && x <= K; ) {
      const Z = m[x], ie = b[x] = L ? Zt(b[x]) : qt(b[x]);
      if (Jr(Z, ie))
        W(
          Z,
          ie,
          _,
          null,
          T,
          A,
          M,
          D,
          L
        );
      else
        break;
      x++;
    }
    for (; x <= $ && x <= K; ) {
      const Z = m[$], ie = b[K] = L ? Zt(b[K]) : qt(b[K]);
      if (Jr(Z, ie))
        W(
          Z,
          ie,
          _,
          null,
          T,
          A,
          M,
          D,
          L
        );
      else
        break;
      $--, K--;
    }
    if (x > $) {
      if (x <= K) {
        const Z = K + 1, ie = Z < G ? b[Z].el : O;
        for (; x <= K; )
          W(
            null,
            b[x] = L ? Zt(b[x]) : qt(b[x]),
            _,
            ie,
            T,
            A,
            M,
            D,
            L
          ), x++;
      }
    } else if (x > K)
      for (; x <= $; )
        qe(m[x], T, A, !0), x++;
    else {
      const Z = x, ie = x, N = /* @__PURE__ */ new Map();
      for (x = ie; x <= K; x++) {
        const Ae = b[x] = L ? Zt(b[x]) : qt(b[x]);
        Ae.key != null && N.set(Ae.key, x);
      }
      let P, H = 0;
      const te = K - ie + 1;
      let re = !1, _e = 0;
      const X = new Array(te);
      for (x = 0; x < te; x++) X[x] = 0;
      for (x = Z; x <= $; x++) {
        const Ae = m[x];
        if (H >= te) {
          qe(Ae, T, A, !0);
          continue;
        }
        let Oe;
        if (Ae.key != null)
          Oe = N.get(Ae.key);
        else
          for (P = ie; P <= K; P++)
            if (X[P - ie] === 0 && Jr(Ae, b[P])) {
              Oe = P;
              break;
            }
        Oe === void 0 ? qe(Ae, T, A, !0) : (X[Oe - ie] = x + 1, Oe >= _e ? _e = Oe : re = !0, W(
          Ae,
          b[Oe],
          _,
          null,
          T,
          A,
          M,
          D,
          L
        ), H++);
      }
      const xe = re ? _c(X) : $r;
      for (P = xe.length - 1, x = te - 1; x >= 0; x--) {
        const Ae = ie + x, Oe = b[Ae], Ye = b[Ae + 1], Nt = Ae + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ye.el || vl(Ye)
        ) : O;
        X[x] === 0 ? W(
          null,
          Oe,
          _,
          Nt,
          T,
          A,
          M,
          D,
          L
        ) : re && (P < 0 || x !== xe[P] ? Te(Oe, _, Nt, 2) : P--);
      }
    }
  }, Te = (m, b, _, O, T = null) => {
    const { el: A, type: M, transition: D, children: L, shapeFlag: x } = m;
    if (x & 6) {
      Te(m.component.subTree, b, _, O);
      return;
    }
    if (x & 128) {
      m.suspense.move(b, _, O);
      return;
    }
    if (x & 64) {
      M.move(m, b, _, it);
      return;
    }
    if (M === ee) {
      n(A, b, _);
      for (let $ = 0; $ < L.length; $++)
        Te(L[$], b, _, O);
      n(m.anchor, b, _);
      return;
    }
    if (M === xi) {
      U(m, b, _);
      return;
    }
    if (O !== 2 && x & 1 && D)
      if (O === 0)
        D.persisted && !A[Ei] ? n(A, b, _) : (D.beforeEnter(A), n(A, b, _), bt(() => D.enter(A), T));
      else {
        const { leave: $, delayLeave: K, afterLeave: Z } = D, ie = () => {
          m.ctx.isUnmounted ? i(A) : n(A, b, _);
        }, N = () => {
          const P = A._isLeaving || !!A[Ei];
          A._isLeaving && A[Ei](
            !0
            /* cancelled */
          ), D.persisted && !P ? ie() : $(A, () => {
            ie(), Z && Z();
          });
        };
        K ? K(A, ie, N) : N();
      }
    else
      n(A, b, _);
  }, qe = (m, b, _, O = !1, T = !1) => {
    const {
      type: A,
      props: M,
      ref: D,
      children: L,
      dynamicChildren: x,
      shapeFlag: G,
      patchFlag: $,
      dirs: K,
      cacheIndex: Z,
      memo: ie
    } = m;
    if ($ === -2 && (T = !1), D != null && (rr(), cn(D, null, _, m, !0), nr()), Z != null && (b.renderCache[Z] = void 0), G & 256) {
      b.ctx.deactivate(m);
      return;
    }
    const N = G & 1 && K, P = !un(m);
    let H;
    if (P && (H = M && M.onVnodeBeforeUnmount) && jt(H, b, m), G & 6)
      Ot(m.component, _, O);
    else {
      if (G & 128) {
        m.suspense.unmount(_, O);
        return;
      }
      N && _r(m, null, b, "beforeUnmount"), G & 64 ? m.type.remove(
        m,
        b,
        _,
        it,
        O
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== ee || $ > 0 && $ & 64) ? ze(
        x,
        b,
        _,
        !1,
        !0
      ) : (A === ee && $ & 384 || !T && G & 16) && ze(L, b, _), O && Je(m);
    }
    const te = ie != null && Z == null;
    (P && (H = M && M.onVnodeUnmounted) || N || te) && bt(() => {
      H && jt(H, b, m), N && _r(m, null, b, "unmounted"), te && (m.el = null);
    }, _);
  }, Je = (m) => {
    const { type: b, el: _, anchor: O, transition: T } = m;
    if (b === ee) {
      me(_, O);
      return;
    }
    if (b === xi) {
      V(m);
      return;
    }
    const A = () => {
      i(_), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (m.shapeFlag & 1 && T && !T.persisted) {
      const { leave: M, delayLeave: D } = T, L = () => M(_, A);
      D ? D(m.el, A, L) : L();
    } else
      A();
  }, me = (m, b) => {
    let _;
    for (; m !== b; )
      _ = I(m), i(m), m = _;
    i(b);
  }, Ot = (m, b, _) => {
    const { bum: O, scope: T, job: A, subTree: M, um: D, m: L, a: x } = m;
    Ha(L), Ha(x), O && $n(O), T.stop(), A && (A.flags |= 8, qe(M, m, b, _)), D && bt(D, b), bt(() => {
      m.isUnmounted = !0;
    }, b);
  }, ze = (m, b, _, O = !1, T = !1, A = 0) => {
    for (let M = A; M < m.length; M++)
      qe(m[M], b, _, O, T);
  }, ft = (m) => {
    if (m.shapeFlag & 6)
      return ft(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const b = I(m.anchor || m.el), _ = b && b[Uo];
    return _ ? I(_) : b;
  };
  let gt = !1;
  const Tt = (m, b, _) => {
    let O;
    m == null ? b._vnode && (qe(b._vnode, null, null, !0), O = b._vnode.component) : W(
      b._vnode || null,
      m,
      b,
      null,
      null,
      null,
      _
    ), b._vnode = m, gt || (gt = !0, Ra(O), Gs(), gt = !1);
  }, it = {
    p: W,
    um: qe,
    m: Te,
    r: Je,
    mt: Et,
    mc: Ve,
    pc: fe,
    pbc: Le,
    n: ft,
    o: e
  };
  return {
    render: Tt,
    hydrate: void 0,
    createApp: rc(Tt)
  };
}
function Ci({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function vr({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function gl(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (ne(n) && ne(i))
    for (let a = 0; a < n.length; a++) {
      const o = n[a];
      let u = i[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = i[a] = Zt(i[a]), u.el = o.el), !r && u.patchFlag !== -2 && gl(o, u)), u.type === ci && (u.patchFlag === -1 && (u = i[a] = Zt(u)), u.el = o.el), u.type === ar && !u.el && (u.el = o.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, i, a, o, u;
  const p = e.length;
  for (n = 0; n < p; n++) {
    const v = e[n];
    if (v !== 0) {
      if (i = r[r.length - 1], e[i] < v) {
        t[n] = i, r.push(n);
        continue;
      }
      for (a = 0, o = r.length - 1; a < o; )
        u = a + o >> 1, e[r[u]] < v ? a = u + 1 : o = u;
      v < e[r[a]] && (a > 0 && (t[n] = r[a - 1]), r[a] = n);
    }
  }
  for (a = r.length, o = r[a - 1]; a-- > 0; )
    r[a] = o, o = t[o];
  return r;
}
function _l(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : _l(t);
}
function Ha(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function vl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? vl(t.subTree) : null;
}
const Sl = (e) => e.__isSuspense;
function vc(e, t) {
  t && t.pendingBranch ? ne(e) ? t.effects.push(...e) : t.effects.push(e) : Oo(e);
}
const ee = /* @__PURE__ */ Symbol.for("v-fgt"), ci = /* @__PURE__ */ Symbol.for("v-txt"), ar = /* @__PURE__ */ Symbol.for("v-cmt"), xi = /* @__PURE__ */ Symbol.for("v-stc"), kr = [];
let wt = null;
function w(e = !1) {
  kr.push(wt = e ? null : []);
}
function wl() {
  kr.pop(), wt = kr[kr.length - 1] || null;
}
let mn = 1;
function $a(e, t = !1) {
  mn += e, e < 0 && wt && t && (wt.hasOnce = !0);
}
function El(e) {
  return e.dynamicChildren = mn > 0 ? wt || $r : null, wl(), mn > 0 && wt && wt.push(e), e;
}
function E(e, t, r, n, i, a) {
  return El(
    s(
      e,
      t,
      r,
      n,
      i,
      a,
      !0
    )
  );
}
function Sc(e, t, r, n, i) {
  return El(
    tr(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function Tl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Jr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Cl = ({ key: e }) => e ?? null, Vn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? De(e) || /* @__PURE__ */ tt(e) || de(e) ? { i: kt, r: e, k: t, f: !!r } : e : null);
function s(e, t = null, r = null, n = 0, i = null, a = e === ee ? 0 : 1, o = !1, u = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Cl(t),
    ref: t && Vn(t),
    scopeId: Xs,
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
    shapeFlag: a,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: kt
  };
  return u ? (Yn(p, r), a & 128 && e.normalize(p)) : r && (p.shapeFlag |= De(r) ? 8 : 16), mn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  wt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && wt.push(p), p;
}
const tr = wc;
function wc(e, t = null, r = null, n = 0, i = null, a = !1) {
  if ((!e || e === Go) && (e = ar), Tl(e)) {
    const u = Wr(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Yn(u, r), mn > 0 && !a && wt && (u.shapeFlag & 6 ? wt[wt.indexOf(e)] = u : wt.push(u)), u.patchFlag = -2, u;
  }
  if (Ic(e) && (e = e.__vccOpts), t) {
    t = Ec(t);
    let { class: u, style: p } = t;
    u && !De(u) && (t.class = jr(u)), Ee(p) && (/* @__PURE__ */ oa(p) && !ne(p) && (p = rt({}, p)), t.style = ta(p));
  }
  const o = De(e) ? 1 : Sl(e) ? 128 : si(e) ? 64 : Ee(e) ? 4 : de(e) ? 2 : 0;
  return s(
    e,
    t,
    r,
    n,
    i,
    o,
    a,
    !0
  );
}
function Ec(e) {
  return e ? /* @__PURE__ */ oa(e) || fl(e) ? rt({}, e) : e : null;
}
function Wr(e, t, r = !1, n = !1) {
  const { props: i, ref: a, patchFlag: o, children: u, transition: p } = e, v = t ? Tc(i || {}, t) : i, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Cl(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && a ? ne(a) ? a.concat(Vn(t)) : [a, Vn(t)] : Vn(t)
    ) : a,
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
    transition: p,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Wr(e.ssContent),
    ssFallback: e.ssFallback && Wr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return p && n && ua(
    y,
    p.clone(y)
  ), y;
}
function pe(e = " ", t = 0) {
  return tr(ci, null, e, t);
}
function Q(e = "", t = !1) {
  return t ? (w(), Sc(ar, null, e)) : tr(ar, null, e);
}
function qt(e) {
  return e == null || typeof e == "boolean" ? tr(ar) : ne(e) ? tr(
    ee,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Tl(e) ? Zt(e) : tr(ci, null, String(e));
}
function Zt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Wr(e);
}
function Yn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ne(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Yn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !fl(t) ? t._ctx = kt : i === 3 && kt && (kt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (de(t)) {
    if (n & 65) {
      Yn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: kt }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [pe(t)]) : r = 8;
  e.children = t, e.shapeFlag |= r;
}
function Tc(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = jr([t.class, n.class]));
      else if (i === "style")
        t.style = ta([t.style, n.style]);
      else if (Qn(i)) {
        const a = t[i], o = n[i];
        o && a !== o && !(ne(a) && a.includes(o)) ? t[i] = a ? [].concat(a, o) : o : o == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ei(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function jt(e, t, r, n = null) {
  Ft(e, t, 7, [
    r,
    n
  ]);
}
const Cc = ll();
let xc = 0;
function Ac(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Cc, a = {
    uid: xc++,
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
    propsOptions: hl(n, i),
    emitsOptions: ol(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ce,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Ce,
    data: Ce,
    props: Ce,
    attrs: Ce,
    slots: Ce,
    refs: Ce,
    setupState: Ce,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = ic.bind(null, a), e.ce && e.ce(a), a;
}
let ut = null;
const kc = () => ut || kt;
let Xn, bn;
{
  const e = ni(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (a) => {
      i.length > 1 ? i.forEach((o) => o(a)) : i[0](a);
    };
  };
  Xn = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ut = r
  ), bn = t(
    "__VUE_SSR_SETTERS__",
    (r) => yn = r
  );
}
const vn = (e) => {
  const t = ut;
  return Xn(e), e.scope.on(), () => {
    e.scope.off(), Xn(t);
  };
}, ja = () => {
  ut && ut.scope.off(), Xn(null);
};
function xl(e) {
  return e.vnode.shapeFlag & 4;
}
let yn = !1;
function Rc(e, t = !1, r = !1) {
  t && bn(t);
  const { props: n, children: i } = e.vnode, a = xl(e);
  uc(e, n, a, t), hc(e, i, r || t);
  const o = a ? Oc(e, t) : void 0;
  return t && bn(!1), o;
}
function Oc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yo);
  const { setup: n } = r;
  if (n) {
    rr();
    const i = e.setupContext = n.length > 1 ? Pc(e) : null, a = vn(e), o = _n(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), u = ws(o);
    if (nr(), a(), (u || e.sp) && !un(e) && el(e), u) {
      if (o.then(ja, ja), t)
        return o.then((p) => {
          bn(!0);
          try {
            Va(e, p, t);
          } finally {
            bn(!1);
          }
        }).catch((p) => {
          ai(p, e, 0);
        });
      e.asyncDep = o;
    } else
      Va(e, o);
  } else
    Al(e);
}
function Va(e, t, r) {
  de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ee(t) && (e.setupState = qs(t)), Al(e);
}
function Al(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Wt);
  {
    const i = vn(e);
    rr();
    try {
      Xo(e);
    } finally {
      nr(), i();
    }
  }
}
const Nc = {
  get(e, t) {
    return et(e, "get", ""), e[t];
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
function ui(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(qs(vo(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in dn)
        return dn[r](e);
    },
    has(t, r) {
      return r in t || r in dn;
    }
  })) : e.proxy;
}
function Ic(e) {
  return de(e) && "__vccOpts" in e;
}
const q = (e, t) => /* @__PURE__ */ Co(e, t, yn), Mc = "3.5.42";
let Yi;
const Ba = typeof window < "u" && window.trustedTypes;
if (Ba)
  try {
    Yi = /* @__PURE__ */ Ba.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const kl = Yi ? (e) => Yi.createHTML(e) : (e) => e, Lc = "http://www.w3.org/2000/svg", Uc = "http://www.w3.org/1998/Math/MathML", Jt = typeof document < "u" ? document : null, qa = Jt && /* @__PURE__ */ Jt.createElement("template"), Dc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Jt.createElementNS(Lc, e) : t === "mathml" ? Jt.createElementNS(Uc, e) : r ? Jt.createElement(e, { is: r }) : Jt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Jt.createTextNode(e),
  createComment: (e) => Jt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Jt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, a) {
    const o = r ? r.previousSibling : t.lastChild;
    if (i && (i === a || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === a || !(i = i.nextSibling)); )
        ;
    else {
      qa.innerHTML = kl(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = qa.content;
      if (n === "svg" || n === "mathml") {
        const p = u.firstChild;
        for (; p.firstChild; )
          u.appendChild(p.firstChild);
        u.removeChild(p);
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
function Hc(e, t, r) {
  const n = e[Fc];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const za = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function Bc(e, t, r) {
  const n = e.style, i = De(r);
  let a = !1;
  if (r && !i) {
    if (t)
      if (De(t))
        for (const o of t.split(";")) {
          const u = o.slice(0, o.indexOf(":")).trim();
          r[u] == null && nn(n, u, "");
        }
      else
        for (const o in t)
          r[o] == null && nn(n, o, "");
    for (const o in r) {
      o === "display" && (a = !0);
      const u = r[o];
      u != null ? zc(
        e,
        o,
        !De(t) && t ? t[o] : void 0,
        u
      ) || nn(n, o, u) : nn(n, o, "");
    }
  } else if (i) {
    if (t !== r) {
      const o = n[jc];
      o && (r += ";" + o), n.cssText = r, a = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  za in e && (e[za] = a ? n.display : "", e[$c] && (n.display = "none"));
}
const Un = /\s*!important$/;
function nn(e, t, r) {
  if (ne(r))
    r.forEach((n) => nn(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    Un.test(r) ? e.setProperty(t, r.replace(Un, ""), "important") : e.setProperty(t, r);
  else {
    const n = qc(e, t);
    Un.test(r) ? e.setProperty(
      Or(n),
      r.replace(Un, ""),
      "important"
    ) : e[n] = r;
  }
}
const Wa = ["Webkit", "Moz", "ms"], Ai = {};
function qc(e, t) {
  const r = Ai[t];
  if (r)
    return r;
  let n = Lt(t);
  if (n !== "filter" && n in e)
    return Ai[t] = n;
  n = Cs(n);
  for (let i = 0; i < Wa.length; i++) {
    const a = Wa[i] + n;
    if (a in e)
      return Ai[t] = a;
  }
  return t;
}
function zc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && De(n) && r === n;
}
const Ka = "http://www.w3.org/1999/xlink";
function Ga(e, t, r, n, i, a = Xl(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Ka, t.slice(6, t.length)) : e.setAttributeNS(Ka, t, r) : r == null || a && !As(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Kt(r) ? String(r) : r
  );
}
function Ya(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? kl(r) : r);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const u = a === "OPTION" ? e.getAttribute("value") || "" : e.value, p = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (u !== p || !("_value" in e)) && (e.value = p), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let o = !1;
  if (r === "" || r == null) {
    const u = typeof e[t];
    u === "boolean" ? r = As(r) : r == null && u === "string" ? (r = "", o = !0) : u === "number" && (r = 0, o = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Tr(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Wc(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Xa = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, r, n, i = null) {
  const a = e[Xa] || (e[Xa] = {}), o = a[t];
  if (n && o)
    o.value = n;
  else {
    const [u, p] = Xc(t);
    if (n) {
      const v = a[t] = Qc(
        n,
        i
      );
      Tr(e, u, v, p);
    } else o && (Wc(e, u, o, p), a[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Or(e.slice(2)), t];
}
let ki = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => ki || (Jc.then(() => ki = 0), ki = Date.now());
function Qc(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    const i = r.value;
    if (ne(i)) {
      const a = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        a.call(n), n._stopped = !0;
      };
      const o = i.slice(), u = [n];
      for (let p = 0; p < o.length && !n._stopped; p++) {
        const v = o[p];
        v && Ft(
          v,
          t,
          5,
          u
        );
      }
    } else
      Ft(
        i,
        t,
        5,
        [n]
      );
  };
  return r.value = e, r.attached = Zc(), r;
}
const Ja = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eu = (e, t, r, n, i, a) => {
  const o = i === "svg";
  t === "class" ? Hc(e, n, o) : t === "style" ? Bc(e, r, n) : Qn(t) ? ei(t) || Kc(e, t, r, n, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, o)) ? (Ya(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ga(e, t, n, o, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !De(n))) ? Ya(e, Lt(t), n, a, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ga(e, t, n, o));
};
function tu(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ja(t) && de(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ja(t) && De(r) ? !1 : t in e;
}
function ru(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Lt(t);
  return Array.isArray(r) ? r.some((i) => Lt(i) === n) : Object.keys(r).some((i) => Lt(i) === n);
}
const Jn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ne(t) ? (r) => $n(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function Za(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Cr = /* @__PURE__ */ Symbol("_assign"), Dn = /* @__PURE__ */ Symbol("_initialValue");
function Ri(e, t, r) {
  return t && (e = e.trim()), r && (e = ri(e)), e;
}
const Oi = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e.parentNode && (e.type === "text" ? e[Dn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Dn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Cr] = Jn(i);
    const a = n || i.props && i.props.type === "number";
    Tr(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Cr](Ri(e.value, r, a));
    }), (r || a) && Tr(e, "change", () => {
      e.value = Ri(e.value, r, a);
    }), t || (Tr(e, "compositionstart", nu), Tr(e, "compositionend", Za), Tr(e, "change", Za));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const i = t ?? "", a = e[Dn];
    delete e[Dn], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Cr](Ri(e.value, r, n)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: a } }, o) {
    if (e[Cr] = Jn(o), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? ri(e.value) : e.value, p = t ?? "";
    if (u === p)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === p) || (e.value = p);
  }
}, lt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, Tr(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (p) => p.selected).map(
        (p) => r ? ri(Zn(p)) : Zn(p)
      ), a = e.multiple, o = a ? Rr(e._modelValue) ? new Set(i) : i : i[0], u = e._pendingValue = [
        a,
        a ? ne(o) ? i.slice() : i : o
      ];
      try {
        e[Cr](o);
      } finally {
        Ws(() => {
          e._pendingValue === u && (e._pendingValue = void 0);
        });
      }
    }), e[Cr] = Jn(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Qa(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[Cr] = Jn(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !iu(t, r[1], r[0])) && Qa(e, t);
  }
};
function iu(e, t, r) {
  if (!r || ne(e)) return br(e, t);
  if (Rr(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function Qa(e, t) {
  const r = e.multiple, n = ne(t);
  if (!(r && !n && !Rr(t))) {
    for (let i = 0, a = e.options.length; i < a; i++) {
      const o = e.options[i], u = Zn(o);
      if (r)
        if (n) {
          const p = typeof u;
          p === "string" || p === "number" ? o.selected = t.some((v) => String(v) === String(u)) : o.selected = Zl(t, u) > -1;
        } else
          o.selected = t.has(u);
      else if (br(Zn(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Zn(e) {
  return "_value" in e ? e._value : e.value;
}
const au = ["ctrl", "shift", "alt", "meta"], su = {
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
  exact: (e, t) => au.some((r) => e[`${r}Key`] && !t.includes(r))
}, Fn = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...a) => {
    for (let o = 0; o < t.length; o++) {
      const u = su[t[o]];
      if (u && u(i, t)) return;
    }
    return e(i, ...a);
  }));
}, lu = /* @__PURE__ */ rt({ patchProp: eu }, Dc);
let es;
function ou() {
  return es || (es = bc(lu));
}
const cu = ((...e) => {
  const t = ou().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = du(n);
    if (!i) return;
    const a = t._component;
    !de(a) && !a.render && !a.template && (a.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = r(i, !1, uu(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function uu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function du(e) {
  return De(e) ? document.querySelector(e) : e;
}
function fu(e, t, r) {
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
    const a = JSON.parse(atob(i.value));
    return window._nc_initial_state.set(n, a), a;
  } catch (a) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: a }), r !== void 0)
      return r;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: a });
  }
}
function ts(e, t) {
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
    var n, i, a, o, u = [], p = !0, v = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(p = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); p = !0) ;
    } catch (y) {
      v = !0, i = y;
    } finally {
      try {
        if (!p && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (v) throw i;
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
    if (typeof e == "string") return ts(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ts(e, t) : void 0;
  }
}
const Rl = Object.entries, rs = Object.setPrototypeOf, gu = Object.isFrozen, _u = Object.getPrototypeOf, vu = Object.getOwnPropertyDescriptor;
let je = Object.freeze, Ke = Object.seal, Hr = Object.create, Ol = typeof Reflect < "u" && Reflect, Xi = Ol.apply, Ji = Ol.construct;
je || (je = function(t) {
  return t;
});
Ke || (Ke = function(t) {
  return t;
});
Xi || (Xi = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  return t.apply(r, i);
});
Ji || (Ji = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Er = $e(Array.prototype.forEach), Su = $e(Array.prototype.lastIndexOf), ns = $e(Array.prototype.pop), Zr = $e(Array.prototype.push), wu = $e(Array.prototype.splice), qr = Array.isArray, an = $e(String.prototype.toLowerCase), Ni = $e(String.prototype.toString), is = $e(String.prototype.match), Qr = $e(String.prototype.replace), as = $e(String.prototype.indexOf), Eu = $e(String.prototype.trim), Tu = $e(Number.prototype.toString), Cu = $e(Boolean.prototype.toString), ss = typeof BigInt > "u" ? null : $e(BigInt.prototype.toString), ls = typeof Symbol > "u" ? null : $e(Symbol.prototype.toString), yt = $e(Object.prototype.hasOwnProperty), en = $e(Object.prototype.toString), Qe = $e(RegExp.prototype.test), Sr = xu(TypeError);
function $e(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Xi(e, t, n);
  };
}
function xu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Ji(e, r);
  };
}
function be(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : an;
  if (rs && rs(e, null), !qr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const a = r(i);
      a !== i && (gu(t) || (t[n] = a), i = a);
    }
    e[i] = !0;
  }
  return e;
}
function Au(e) {
  for (let t = 0; t < e.length; t++)
    yt(e, t) || (e[t] = null);
  return e;
}
function St(e) {
  const t = Hr(null);
  for (const n of Rl(e)) {
    var r = bu(n, 2);
    const i = r[0], a = r[1];
    yt(e, i) && (qr(a) ? t[i] = Au(a) : a && typeof a == "object" && a.constructor === Object ? t[i] = St(a) : t[i] = a);
  }
  return t;
}
function ku(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Tu(e);
    case "boolean":
      return Cu(e);
    case "bigint":
      return ss ? ss(e) : "0";
    case "symbol":
      return ls ? ls(e) : "Symbol()";
    case "undefined":
      return en(e);
    case "function":
    case "object": {
      if (e === null)
        return en(e);
      const t = e, r = Mt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : en(n);
      }
      return en(e);
    }
    default:
      return en(e);
  }
}
function Mt(e, t) {
  for (; e !== null; ) {
    const n = vu(e, t);
    if (n) {
      if (n.get)
        return $e(n.get);
      if (typeof n.value == "function")
        return $e(n.value);
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
    return Qe(e, ""), !0;
  } catch {
    return !1;
  }
}
const os = je(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Pi = je(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ii = je(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ou = je(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Mi = je(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Nu = je(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), cs = je(["#text"]), us = je(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Li = je(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ds = je(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Hn = je(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pu = Ke(/{{[\w\W]*|^[\w\W]*}}/g), Iu = Ke(/<%[\w\W]*|^[\w\W]*%>/g), Mu = Ke(/\${[\w\W]*/g), Lu = Ke(/^data-[\-\w.\u00B7-\uFFFF]+$/), Uu = Ke(/^aria-[\-\w]+$/), fs = Ke(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = Ke(/^(?:\w+script|data):/i), Fu = Ke(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = Ke(/^html$/i), $u = Ke(/^[a-z][.\w]*(-[.\w]+)+$/i), ps = Ke(/<[/\w!]/g), hs = Ke(/<[/\w]/g), ju = Ke(/<\/no(script|embed|frames)/i), Vu = Ke(/\/>/i), vt = {
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
}, Nl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Bu = je(be({}, Nl)), qu = (function() {
  const e = {};
  return Er(Nl, (t) => {
    e[t] = Ke(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), je(e);
})(), zu = function() {
  return typeof window > "u" ? null : window;
}, Wu = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (n = r.getAttribute(i));
  const a = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(a, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, ms = function() {
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
}, fr = function(t, r, n, i) {
  return yt(t, r) && qr(t[r]) ? be(i.base ? St(i.base) : {}, t[r], i.transform) : n;
}, Ui = function(t, r, n) {
  const i = yt(t, r) ? t[r] : void 0;
  return i && typeof i == "object" ? St(i) : n();
};
function Pl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (F) => Pl(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== vt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, o = e.Node, u = e.Element, p = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, S = e.trustedTypes, I = u.prototype, j = Mt(I, "cloneNode"), se = Mt(I, "remove"), W = Mt(I, "nextSibling"), ue = Mt(I, "childNodes"), le = Mt(I, "parentNode"), z = Mt(I, "shadowRoot"), U = Mt(I, "attributes"), V = o && o.prototype ? Mt(o.prototype, "nodeType") : null, ce = o && o.prototype ? Mt(o.prototype, "nodeName") : null, Me = o && o.prototype ? Mt(o.prototype, "ownerDocument") : null, Ne = function(d) {
    return V ? V(d) : d.nodeType;
  }, Ve = function(d) {
    return ce ? ce(d) : d.nodeName;
  };
  if (typeof a == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let we, Le = "", nt, dt = !1, Ge = 0;
  const Et = function() {
    if (Ge > 0)
      throw Sr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Fe = function(d) {
    Et(), Ge++;
    try {
      return we.createHTML(d);
    } finally {
      Ge--;
    }
  }, Ue = function(d) {
    Et(), Ge++;
    try {
      return we.createScriptURL(d);
    } finally {
      Ge--;
    }
  }, ye = function() {
    return dt || (nt = Wu(S, i), dt = !0), nt;
  }, fe = r, Be = fe.implementation, ge = fe.createNodeIterator, Te = fe.createDocumentFragment, qe = fe.getElementsByTagName, Je = n.importNode;
  let me = ms();
  t.isSupported = typeof Rl == "function" && typeof le == "function" && Be && Be.createHTMLDocument !== void 0;
  const Ot = Pu, ze = Iu, ft = Mu, gt = Lu, Tt = Uu, it = Du, at = Fu, m = $u;
  let b = fs, _ = null;
  const O = be({}, [...os, ...Pi, ...Ii, ...Mi, ...cs]);
  let T = null;
  const A = be({}, [...us, ...Li, ...ds, ...Hn]);
  let M = Object.seal(Hr(null, {
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
  })), D = null, L = null;
  const x = Object.seal(Hr(null, {
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
  let G = !0, $ = !0, K = !1, Z = !0, ie = !1, N = !0, P = !1, H = !1, te = null, re = null, _e = !1, X = !1, xe = !1, Ae = !1, Oe = !0, Ye = !1;
  const Nt = "user-content-";
  let Ht = !0, Ct = !1, _t = {}, xt = null;
  const lr = be({}, [
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
  let Gt = null;
  const or = be({}, ["audio", "video", "img", "source", "image", "track"]);
  let At = null;
  const Pt = be({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), It = "http://www.w3.org/1998/Math/MathML", Yt = "http://www.w3.org/2000/svg", Ze = "http://www.w3.org/1999/xhtml";
  let cr = Ze, Nr = !1, Pr = null;
  const di = be({}, [It, Yt, Ze], Ni), Ir = je(["mi", "mo", "mn", "ms", "mtext"]);
  let Kr = be({}, Ir);
  const Sn = je(["annotation-xml"]);
  let yr = be({}, Sn);
  const fi = be({}, ["title", "style", "font", "a", "script"]);
  let gr = null;
  const ur = ["application/xhtml+xml", "text/html"], wn = "text/html";
  let Pe = null, dr = null;
  const pi = r.createElement("form"), En = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, Gr = function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (dr && dr === d)
      return;
    (!d || typeof d != "object") && (d = {}), d = St(d), gr = // eslint-disable-next-line unicorn/prefer-includes
    ur.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? wn : d.PARSER_MEDIA_TYPE, Pe = gr === "application/xhtml+xml" ? Ni : an, _ = fr(d, "ALLOWED_TAGS", O, {
      transform: Pe
    }), T = fr(d, "ALLOWED_ATTR", A, {
      transform: Pe
    }), Pr = fr(d, "ALLOWED_NAMESPACES", di, {
      transform: Ni
    }), At = fr(d, "ADD_URI_SAFE_ATTR", Pt, {
      transform: Pe,
      base: Pt
    }), Gt = fr(d, "ADD_DATA_URI_TAGS", or, {
      transform: Pe,
      base: or
    }), xt = fr(d, "FORBID_CONTENTS", lr, {
      transform: Pe
    }), D = fr(d, "FORBID_TAGS", St({}), {
      transform: Pe
    }), L = fr(d, "FORBID_ATTR", St({}), {
      transform: Pe
    }), _t = yt(d, "USE_PROFILES") ? d.USE_PROFILES && typeof d.USE_PROFILES == "object" ? St(d.USE_PROFILES) : d.USE_PROFILES : !1, G = d.ALLOW_ARIA_ATTR !== !1, $ = d.ALLOW_DATA_ATTR !== !1, K = d.ALLOW_UNKNOWN_PROTOCOLS || !1, Z = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ie = d.SAFE_FOR_TEMPLATES || !1, N = d.SAFE_FOR_XML !== !1, P = d.WHOLE_DOCUMENT || !1, X = d.RETURN_DOM || !1, xe = d.RETURN_DOM_FRAGMENT || !1, Ae = d.RETURN_TRUSTED_TYPE || !1, _e = d.FORCE_BODY || !1, Oe = d.SANITIZE_DOM !== !1, Ye = d.SANITIZE_NAMED_PROPS || !1, Ht = d.KEEP_CONTENT !== !1, Ct = d.IN_PLACE || !1, b = Ru(d.ALLOWED_URI_REGEXP) ? d.ALLOWED_URI_REGEXP : fs, cr = typeof d.NAMESPACE == "string" ? d.NAMESPACE : Ze, Kr = Ui(
      d,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => be({}, Ir)
      // Default built-in map
    ), yr = Ui(
      d,
      "HTML_INTEGRATION_POINTS",
      () => be({}, Sn)
      // Default built-in map
    );
    const g = Ui(d, "CUSTOM_ELEMENT_HANDLING", () => Hr(null));
    if (M = Hr(null), yt(g, "tagNameCheck") && En(g.tagNameCheck) && (M.tagNameCheck = g.tagNameCheck), yt(g, "attributeNameCheck") && En(g.attributeNameCheck) && (M.attributeNameCheck = g.attributeNameCheck), yt(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), Ke(M), ie && ($ = !1), xe && (X = !0), _t && (_ = be({}, cs), T = Hr(null), _t.html === !0 && (be(_, os), be(T, us)), _t.svg === !0 && (be(_, Pi), be(T, Li), be(T, Hn)), _t.svgFilters === !0 && (be(_, Ii), be(T, Li), be(T, Hn)), _t.mathMl === !0 && (be(_, Mi), be(T, ds), be(T, Hn))), x.tagCheck = null, x.attributeCheck = null, yt(d, "ADD_TAGS") && (typeof d.ADD_TAGS == "function" ? x.tagCheck = d.ADD_TAGS : qr(d.ADD_TAGS) && (_ === O && (_ = St(_)), be(_, d.ADD_TAGS, Pe))), yt(d, "ADD_ATTR") && (typeof d.ADD_ATTR == "function" ? x.attributeCheck = d.ADD_ATTR : qr(d.ADD_ATTR) && (T === A && (T = St(T)), be(T, d.ADD_ATTR, Pe))), yt(d, "ADD_FORBID_CONTENTS") && qr(d.ADD_FORBID_CONTENTS) && (xt === lr && (xt = St(xt)), be(xt, d.ADD_FORBID_CONTENTS, Pe)), Ht && (_["#text"] = !0), P && be(_, ["html", "head", "body"]), _.table && (be(_, ["tbody"]), delete D.tbody), d.TRUSTED_TYPES_POLICY) {
      if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Sr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Sr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const R = we;
      we = d.TRUSTED_TYPES_POLICY;
      try {
        Le = Fe("");
      } catch (B) {
        throw we = R, B;
      }
    } else d.TRUSTED_TYPES_POLICY === null ? (we = void 0, Le = "") : (we === void 0 && (we = ye()), we && typeof Le == "string" && (Le = Fe("")));
    je && je(d), dr = d;
  }, Tn = be({}, [...Pi, ...Ii, ...Ou]), Cn = be({}, [...Mi, ...Nu]), xn = function(d, g, R) {
    return g.namespaceURI === Ze ? d === "svg" : g.namespaceURI === It ? d === "svg" && (R === "annotation-xml" || Kr[R]) : !!Tn[d];
  }, An = function(d, g, R) {
    return g.namespaceURI === Ze ? d === "math" : g.namespaceURI === Yt ? d === "math" && yr[R] : !!Cn[d];
  }, k = function(d, g, R) {
    return g.namespaceURI === Yt && !yr[R] || g.namespaceURI === It && !Kr[R] ? !1 : !Cn[d] && (fi[d] || !Tn[d]);
  }, C = function(d) {
    let g = le(d);
    (!g || !g.tagName) && (g = {
      namespaceURI: cr,
      tagName: "template"
    });
    const R = an(d.tagName), B = an(g.tagName);
    return Pr[d.namespaceURI] ? d.namespaceURI === Yt ? xn(R, g, B) : d.namespaceURI === It ? An(R, g, B) : d.namespaceURI === Ze ? k(R, g, B) : !!(gr === "application/xhtml+xml" && Pr[d.namespaceURI]) : !1;
  }, f = function(d) {
    Zr(t.removed, {
      element: d
    });
    try {
      le(d).removeChild(d);
    } catch {
      if (se(d), !le(d))
        throw Sr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, oe = function(d, g, R) {
    try {
      d.removeAttributeNode(g);
    } catch {
      try {
        d.removeAttribute(R);
      } catch {
      }
    }
  }, He = function(d) {
    kn(d);
    const g = ue(d);
    if (g) {
      const B = [];
      Er(g, (J) => {
        Zr(B, J);
      }), Er(B, (J) => {
        try {
          se(J);
        } catch {
        }
      });
    }
    const R = U(d);
    if (R)
      for (let B = R.length - 1; B >= 0; --B) {
        const J = R[B], ae = J && J.name;
        typeof ae == "string" && oe(d, J, ae);
      }
  }, pt = function(d, g, R) {
    if (!R)
      try {
        R = g.getAttributeNode(d);
      } catch {
        R = null;
      }
    Zr(t.removed, {
      attribute: R || null,
      from: g
    });
    try {
      R ? g.removeAttributeNode(R) : g.removeAttribute(d);
    } catch {
      try {
        g.removeAttribute(d);
      } catch {
      }
    }
    if (d === "is")
      if (X || xe)
        try {
          f(g);
        } catch {
        }
      else
        try {
          g.setAttribute(d, "");
        } catch {
        }
  }, Ml = function(d) {
    const g = U(d);
    if (g)
      for (let R = g.length - 1; R >= 0; --R) {
        const B = g[R], J = B && B.name;
        typeof J != "string" || T[Pe(J)] || oe(d, B, J);
      }
  }, kn = function(d) {
    const g = [d];
    for (; g.length > 0; ) {
      const R = g.pop();
      Ne(R) === vt.element && Ml(R);
      const J = ue(R);
      if (J)
        for (let ae = J.length - 1; ae >= 0; --ae)
          g.push(J[ae]);
    }
  }, ha = function(d, g) {
    return N ? d === "patchsrc" ? !0 : d === "for" && g !== "label" && g !== "output" : !1;
  }, Ll = function(d) {
    if (!N)
      return;
    const g = [d];
    for (; g.length > 0; ) {
      const R = g.pop(), B = Ne(R);
      if (B === vt.processingInstruction || B === vt.comment && Qe(hs, R.data)) {
        try {
          se(R);
        } catch {
        }
        continue;
      }
      if (B === vt.element) {
        const ae = R, ke = Pe(Ve(R));
        try {
          ae.hasAttribute && ae.hasAttribute("patchsrc") && ae.removeAttribute("patchsrc"), ae.hasAttribute && ae.hasAttribute("for") && ha("for", ke) && ae.removeAttribute("for");
        } catch {
        }
      }
      const J = ue(R);
      if (J)
        for (let ae = J.length - 1; ae >= 0; --ae)
          g.push(J[ae]);
    }
  }, ma = function(d) {
    let g = null, R = null;
    if (_e)
      d = "<remove></remove>" + d;
    else {
      const ae = is(d, /^[\r\n\t ]+/);
      R = ae && ae[0];
    }
    gr === "application/xhtml+xml" && cr === Ze && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    const B = we ? Fe(d) : d;
    if (cr === Ze)
      try {
        g = new y().parseFromString(B, gr);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = Be.createDocument(cr, "template", null);
      try {
        g.documentElement.innerHTML = Nr ? Le : B;
      } catch {
      }
    }
    const J = g.body || g.documentElement;
    return d && R && J.insertBefore(r.createTextNode(R), J.childNodes[0] || null), cr === Ze ? qe.call(g, P ? "html" : "body")[0] : P ? g.documentElement : J;
  }, ba = function(d) {
    const g = Me ? Me(d) : d.ownerDocument;
    return ge.call(
      g || d,
      d,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null
    );
  }, Rn = function(d) {
    return d = Qr(d, Ot, " "), d = Qr(d, ze, " "), d = Qr(d, ft, " "), d;
  }, hi = function(d) {
    var g;
    d.normalize();
    const R = Me ? Me(d) : d.ownerDocument, B = ge.call(
      R || d,
      d,
      // eslint-disable-next-line no-bitwise
      p.SHOW_TEXT | p.SHOW_COMMENT | p.SHOW_CDATA_SECTION | p.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let J = B.nextNode();
    for (; J; )
      J.data = Rn(J.data), J = B.nextNode();
    const ae = (g = d.querySelectorAll) === null || g === void 0 ? void 0 : g.call(d, "template");
    ae && Er(ae, (ke) => {
      Mr(ke.content) && hi(ke.content);
    });
  }, On = function(d) {
    const g = ce ? ce(d) : null;
    return typeof g != "string" || Pe(g) !== "form" ? !1 : typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    d.attributes !== U(d) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    d.nodeType !== V(d) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    d.childNodes !== ue(d);
  }, Mr = function(d) {
    if (!V || typeof d != "object" || d === null)
      return !1;
    try {
      return V(d) === vt.documentFragment;
    } catch {
      return !1;
    }
  }, Yr = function(d) {
    if (!V || typeof d != "object" || d === null)
      return !1;
    try {
      return typeof V(d) == "number";
    } catch {
      return !1;
    }
  };
  function $t(F, d, g) {
    F.length !== 0 && Er(F, (R) => {
      R.call(t, d, g, dr);
    });
  }
  const Ul = function(d, g) {
    return !!(N && d.hasChildNodes() && !Yr(d.firstElementChild) && Qe(ps, d.textContent) && Qe(ps, d.innerHTML) || N && d.namespaceURI === Ze && Bu[g] && (Yr(d.firstElementChild) || typeof d.textContent == "string" && Qe(qu[g], d.textContent)) || d.nodeType === vt.processingInstruction || N && d.nodeType === vt.comment && Qe(hs, d.data));
  }, Nn = function(d, g) {
    if (d instanceof RegExp)
      return Qe(d, g);
    if (d instanceof Function) {
      for (var R = arguments.length, B = new Array(R > 2 ? R - 2 : 0), J = 2; J < R; J++)
        B[J - 2] = arguments[J];
      return !!d(g, ...B);
    }
    return !1;
  }, Dl = function(d, g, R) {
    if (!D[g] && Sa(g) && Nn(M.tagNameCheck, g))
      return !1;
    if (Ht && !xt[g]) {
      const B = le(d), J = ue(d);
      if (J && B) {
        const ae = J.length;
        for (let ke = ae - 1; ke >= 0; --ke) {
          const Ie = d === R ? j(J[ke], !0) : J[ke];
          B.insertBefore(Ie, W(d));
        }
      }
    }
    return f(d), !0;
  }, ya = function(d, g, R, B) {
    return d.length === 0 ? g : g === R || g === B ? St(g) : g;
  }, ga = function(d, g) {
    return d === g || le(d) !== null ? !1 : (Ct && kn(d), !0);
  }, _a = function(d, g) {
    if ($t(me.beforeSanitizeElements, d, null), ga(d, g))
      return !0;
    if (On(d))
      return f(d), !0;
    const R = Pe(Ve(d));
    if (_ = ya(me.uponSanitizeElement, _, O, te), $t(me.uponSanitizeElement, d, {
      tagName: R,
      allowedTags: _
    }), ga(d, g))
      return !0;
    if (Ul(d, R))
      return f(d), !0;
    if (D[R] || !(x.tagCheck instanceof Function && x.tagCheck(R)) && !_[R]) {
      const J = Dl(d, R, g);
      return J === !1 && $t(me.afterSanitizeElements, d, null), J;
    }
    if (Ne(d) === vt.element && !C(d) || (R === "noscript" || R === "noembed" || R === "noframes") && Qe(ju, d.innerHTML))
      return f(d), !0;
    if (ie && d.nodeType === vt.text) {
      const J = Rn(d.textContent);
      d.textContent !== J && (Zr(t.removed, {
        element: d.cloneNode()
      }), d.textContent = J);
    }
    return $t(me.afterSanitizeElements, d, null), !1;
  }, va = function(d, g, R) {
    if (L[g] || ha(g, d) || Oe && (g === "id" || g === "name") && (R in r || R in pi))
      return !1;
    const B = T[g] || x.attributeCheck instanceof Function && x.attributeCheck(g, d);
    return $ && Qe(gt, g) || G && Qe(Tt, g) ? !0 : B ? At[g] || Qe(b, Qr(R, at, "")) || (g === "src" || g === "xlink:href" || g === "href") && d !== "script" && as(R, "data:") === 0 && Gt[d] || K && !Qe(it, Qr(R, at, "")) ? !0 : !R : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Sa(d) && Nn(M.tagNameCheck, d) && Nn(M.attributeNameCheck, g, d) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && M.allowCustomizedBuiltInElements && Nn(M.tagNameCheck, R)
    );
  }, Fl = be({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Sa = function(d) {
    return !Fl[an(d)] && Qe(m, d);
  }, Hl = function(d, g, R, B) {
    if (we && typeof S == "object" && typeof S.getAttributeType == "function" && !R)
      switch (S.getAttributeType(d, g)) {
        case "TrustedHTML":
          return Fe(B);
        case "TrustedScriptURL":
          return Ue(B);
      }
    return B;
  }, $l = function(d, g, R, B) {
    try {
      R ? d.setAttributeNS(R, g, B) : d.setAttribute(g, B), On(d) ? f(d) : ns(t.removed);
    } catch {
      pt(g, d);
    }
  }, wa = function(d) {
    $t(me.beforeSanitizeAttributes, d, null);
    const g = d.attributes;
    if (!g || On(d))
      return;
    T = ya(me.uponSanitizeAttribute, T, A, re);
    const R = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let B = g.length;
    const J = Pe(d.nodeName);
    for (; B--; ) {
      const ae = g[B], ke = ae.name, Ie = ae.namespaceURI, ht = ae.value, mt = Pe(ke), bi = ht;
      let st = ke === "value" ? bi : Eu(bi);
      if (R.attrName = mt, R.attrValue = st, R.keepAttr = !0, R.forceKeepAttr = void 0, $t(me.uponSanitizeAttribute, d, R), st = R.attrValue, Ye && (mt === "id" || mt === "name") && as(st, Nt) !== 0 && (pt(ke, d, ae), st = Nt + st), N && Qe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, st)) {
        pt(ke, d, ae);
        continue;
      }
      if (mt === "attributename" && is(st, "href")) {
        pt(ke, d, ae);
        continue;
      }
      if (!R.forceKeepAttr) {
        if (!R.keepAttr) {
          pt(ke, d, ae);
          continue;
        }
        if (!Z && Qe(Vu, st)) {
          pt(ke, d, ae);
          continue;
        }
        if (ie && (st = Rn(st)), !va(J, mt, st)) {
          pt(ke, d, ae);
          continue;
        }
        st = Hl(J, mt, Ie, st), st !== bi && $l(d, ke, Ie, st);
      }
    }
    $t(me.afterSanitizeAttributes, d, null);
  }, Pn = function(d) {
    let g = null;
    const R = ba(d);
    for ($t(me.beforeSanitizeShadowDOM, d, null); g = R.nextNode(); )
      if ($t(me.uponSanitizeShadowNode, g, null), _a(g, d), wa(g), Mr(g.content) && Pn(g.content), Ne(g) === vt.element) {
        const B = z(g);
        Mr(B) && (mi(B), Pn(B));
      }
    $t(me.afterSanitizeShadowDOM, d, null);
  }, mi = function(d) {
    const g = [{
      node: d,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const R = g.pop();
      if (R.shadow) {
        Pn(R.shadow);
        continue;
      }
      const B = R.node, ae = Ne(B) === vt.element, ke = ue(B);
      if (ke)
        for (let Ie = ke.length - 1; Ie >= 0; --Ie)
          g.push({
            node: ke[Ie],
            shadow: null
          });
      if (ae) {
        const Ie = ce ? ce(B) : null;
        if (typeof Ie == "string" && Pe(Ie) === "template") {
          const ht = B.content;
          Mr(ht) && g.push({
            node: ht,
            shadow: null
          });
        }
      }
      if (ae) {
        const Ie = z(B);
        Mr(Ie) && g.push({
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
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, R = null, B = null, J = null;
    if (Nr = !F, Nr && (F = "<!-->"), typeof F != "string" && !Yr(F) && (F = ku(F), typeof F != "string"))
      throw Sr("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    H ? (_ = te, T = re) : Gr(d), (me.uponSanitizeElement.length > 0 || me.uponSanitizeAttribute.length > 0) && (_ = St(_)), me.uponSanitizeAttribute.length > 0 && (T = St(T)), t.removed = [];
    const ae = Ct && typeof F != "string" && Yr(F);
    if (ae) {
      Ll(F);
      const ht = Ve(F);
      if (typeof ht == "string") {
        const mt = Pe(ht);
        if (!_[mt] || D[mt])
          throw He(F), Sr("root node is forbidden and cannot be sanitized in-place");
      }
      if (On(F))
        throw He(F), Sr("root node is clobbered and cannot be sanitized in-place");
      try {
        mi(F);
      } catch (mt) {
        throw He(F), mt;
      }
    } else if (Yr(F))
      g = ma("<!---->"), R = g.ownerDocument.importNode(F, !0), R.nodeType === vt.element && R.nodeName === "BODY" || R.nodeName === "HTML" ? g = R : g.appendChild(R), mi(R);
    else {
      if (!X && !ie && !P && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return we && Ae ? Fe(F) : F;
      if (g = ma(F), !g)
        return X ? null : Ae ? Le : "";
    }
    g && _e && f(g.firstChild);
    const ke = ae ? F : g;
    try {
      const ht = ba(ke);
      for (; B = ht.nextNode(); )
        _a(B, ke), wa(B), Mr(B.content) && Pn(B.content);
    } catch (ht) {
      throw ae && (He(F), Er(t.removed, (mt) => {
        mt.element && kn(mt.element);
      })), ht;
    }
    if (ae)
      return Er(t.removed, (ht) => {
        ht.element && kn(ht.element);
      }), ie && hi(F), F;
    if (X) {
      if (ie && hi(g), xe)
        for (J = Te.call(g.ownerDocument); g.firstChild; )
          J.appendChild(g.firstChild);
      else
        J = g;
      return (T.shadowroot || T.shadowrootmode) && (J = Je.call(n, J, !0)), J;
    }
    let Ie = P ? g.outerHTML : g.innerHTML;
    return P && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Qe(Hu, g.ownerDocument.doctype.name) && (Ie = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Ie), ie && (Ie = Rn(Ie)), we && Ae ? Fe(Ie) : Ie;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Gr(F), H = !0, te = _, re = T;
  }, t.clearConfig = function() {
    dr = null, H = !1, te = null, re = null, we = nt, Le = "";
  }, t.isValidAttribute = function(F, d, g) {
    dr || Gr({});
    const R = Pe(F), B = Pe(d);
    return va(R, B, g);
  }, t.addHook = function(F, d) {
    typeof d == "function" && yt(me, F) && Zr(me[F], d);
  }, t.removeHook = function(F, d) {
    if (yt(me, F)) {
      if (d !== void 0) {
        const g = Su(me[F], d);
        return g === -1 ? void 0 : wu(me[F], g, 1)[0];
      }
      return ns(me[F]);
    }
  }, t.removeHooks = function(F) {
    yt(me, F) && (me[F] = []);
  }, t.removeAllHooks = function() {
    me = ms();
  }, t;
}
var Ku = Pl();
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Di, bs;
function Yu() {
  if (bs) return Di;
  bs = 1;
  var e = /["'&<>]/;
  Di = t;
  function t(r) {
    var n = "" + r, i = e.exec(n);
    if (!i)
      return n;
    var a, o = "", u = 0, p = 0;
    for (u = i.index; u < n.length; u++) {
      switch (n.charCodeAt(u)) {
        case 34:
          a = "&quot;";
          break;
        case 38:
          a = "&amp;";
          break;
        case 39:
          a = "&#39;";
          break;
        case 60:
          a = "&lt;";
          break;
        case 62:
          a = "&gt;";
          break;
        default:
          continue;
      }
      p !== u && (o += n.substring(p, u)), p = u + 1, o += a;
    }
    return p !== u ? o + n.substring(p, u) : o;
  }
  return Di;
}
var Xu = Yu();
const ys = /* @__PURE__ */ Gu(Xu);
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
  const a = typeof r == "object" ? r : void 0, o = typeof n == "number" ? n : typeof r == "number" ? r : void 0, u = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof n == "object" ? n : {}
  }, p = (W) => W, v = (u.sanitize ? Ku.sanitize : p) || p, y = u.escape ? ys : p, S = (W) => typeof W == "string" || typeof W == "number", I = (W, ue, le) => W.replace(/%n/g, "" + le).replace(/{([^{}]*)}/g, (z, U) => {
    if (ue === void 0 || !(U in ue))
      return y(z);
    const V = ue[U];
    return S(V) ? y(`${V}`) : typeof V == "object" && S(V.value) ? (V.escape !== !1 ? ys : p)(`${V.value}`) : y(z);
  });
  let se = (i?.bundle ?? Ju(e)).translations[t] || t;
  return se = Array.isArray(se) ? se[0] : se, v(typeof a == "object" || o !== void 0 ? I(
    se,
    a,
    o
  ) : se);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ed = { class: "library-catalogue-header" }, td = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, rd = { id: "library-catalogue-heading" }, nd = { class: "library-muted" }, id = ["aria-label"], ad = { class: "library-catalogue-actions-list" }, sd = ["href"], ld = ["href"], od = ["href"], cd = ["href"], ud = {
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
}, vd = ["disabled"], Sd = { class: "library-actions-health-links" }, wd = ["href"], Ed = ["href"], Td = ["href"], Cd = ["href"], xd = { class: "library-actions-health-grid" }, Ad = { class: "library-import-health-number" }, kd = { class: "library-import-health-number" }, Rd = { class: "library-muted" }, Od = { class: "library-muted" }, Nd = { class: "library-muted" }, Pd = {
  key: 3,
  class: "library-import-health-examples"
}, Id = {
  class: "library-review-queue-actions",
  "aria-label": "Review queue shortcuts"
}, Md = { class: "library-muted" }, Ld = ["href"], Ud = ["href"], Dd = ["action"], Fd = ["value"], Hd = {
  type: "submit",
  class: "button secondary"
}, $d = { class: "library-muted" }, jd = ["href"], Vd = ["action"], Bd = ["value"], qd = {
  type: "submit",
  class: "button secondary"
}, zd = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, Wd = {
  key: 1,
  class: "library-home-dashboard",
  "aria-labelledby": "library-home-dashboard-heading"
}, Kd = { class: "library-home-hero-card" }, Gd = { class: "library-muted library-catalogue-eyebrow" }, Yd = { id: "library-home-dashboard-heading" }, Xd = { class: "library-muted" }, Jd = { class: "library-home-hero-actions" }, Zd = ["href"], Qd = ["aria-label"], ef = ["onClick"], tf = ["src", "alt"], rf = {
  key: 0,
  class: "library-home-rediscover"
}, nf = { class: "library-muted library-catalogue-eyebrow" }, af = { class: "library-muted" }, sf = {
  class: "library-useful-views",
  "aria-labelledby": "library-useful-views-heading"
}, lf = { class: "library-useful-views-copy" }, of = { class: "library-muted library-catalogue-eyebrow" }, cf = { id: "library-useful-views-heading" }, uf = { class: "library-muted" }, df = { class: "library-muted" }, ff = ["aria-label"], pf = ["href", "title"], hf = { class: "library-useful-view-count" }, mf = {
  class: "library-weak-metadata-dashboard",
  "aria-labelledby": "library-weak-metadata-heading"
}, bf = { class: "library-weak-metadata-dashboard-copy" }, yf = { class: "library-muted library-catalogue-eyebrow" }, gf = { id: "library-weak-metadata-heading" }, _f = { class: "library-muted" }, vf = ["aria-label"], Sf = ["href", "title"], wf = {
  class: "library-saved-collections",
  "aria-labelledby": "library-saved-collections-heading"
}, Ef = { class: "library-saved-collections-copy" }, Tf = { class: "library-muted library-catalogue-eyebrow" }, Cf = { id: "library-saved-collections-heading" }, xf = { class: "library-muted" }, Af = ["action"], kf = ["value"], Rf = ["value"], Of = ["placeholder", "disabled"], Nf = ["disabled"], Pf = {
  key: 0,
  class: "library-muted"
}, If = ["aria-label"], Mf = ["href"], Lf = ["action"], Uf = ["value"], Df = {
  type: "submit",
  class: "button tertiary"
}, Ff = ["aria-label"], Hf = ["name", "value"], $f = { class: "library-quick-search-row" }, jf = { class: "library-quick-filter-search" }, Vf = ["aria-label"], Bf = { class: "library-quick-filter-options" }, qf = { class: "library-quick-filter-option-grid" }, zf = { value: "title" }, Wf = { value: "recent" }, Kf = { value: "publicationDate" }, Gf = { value: "publication" }, Yf = { value: "lastOpened" }, Xf = { value: "format" }, Jf = { value: "" }, Zf = { value: "1" }, Qf = ["value"], ep = ["value"], tp = ["aria-label"], rp = ["aria-label"], np = { class: "library-filter-panel" }, ip = { class: "library-filter-panel-summary" }, ap = ["aria-label"], sp = {
  id: "library-search-scope",
  class: "library-muted library-search-scope"
}, lp = { value: "" }, op = ["value"], cp = { value: "" }, up = ["value"], dp = { value: "" }, fp = ["value"], pp = { value: "" }, hp = ["value"], mp = { value: "" }, bp = ["value"], yp = { value: "" }, gp = ["value"], _p = { value: "" }, vp = ["value"], Sp = { value: "" }, wp = ["value"], Ep = { value: "" }, Tp = ["value"], Cp = { value: "" }, xp = ["value"], Ap = { value: "" }, kp = { value: "1" }, Rp = { value: "" }, Op = { value: "1" }, Np = { value: "title" }, Pp = { value: "recent" }, Ip = { value: "publicationDate" }, Mp = { value: "publication" }, Lp = { value: "lastOpened" }, Up = { value: "format" }, Dp = ["value"], Fp = ["value"], Hp = ["aria-label"], $p = ["aria-label"], jp = ["href"], Vp = {
  key: 2,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Bp = { class: "library-muted library-catalogue-eyebrow" }, qp = { id: "library-discovery-heading" }, zp = { class: "library-muted" }, Wp = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, Kp = { key: 0 }, Gp = { key: 1 }, Yp = { key: 2 }, Xp = {
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
}, ih = ["href"], ah = {
  key: 0,
  class: "library-notice"
}, sh = { class: "library-publication-issue-label" }, lh = ["href"], oh = { class: "library-muted" }, ch = {
  key: 1,
  class: "library-publication-unknown-issues"
}, uh = { class: "library-muted" }, dh = {
  href: "/apps/library/",
  class: "button secondary"
}, fh = { class: "library-catalogue-status-row" }, ph = { class: "library-muted library-filter-result-summary" }, hh = { key: 0 }, mh = { href: "?" }, bh = ["aria-label"], yh = { class: "library-pagination-range" }, gh = { key: 0 }, _h = ["href"], vh = {
  key: 1,
  class: "library-muted"
}, Sh = ["href"], wh = {
  key: 3,
  class: "library-muted"
}, Eh = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, Th = ["aria-label"], Ch = { class: "library-settings-count-badge" }, xh = ["action"], Ah = ["value"], kh = ["name", "value"], Rh = ["placeholder"], Oh = {
  type: "submit",
  class: "button primary"
}, Nh = { class: "library-muted" }, Ph = ["action"], Ih = ["value"], Mh = ["name", "value"], Lh = ["placeholder"], Uh = {
  type: "submit",
  class: "button secondary"
}, Dh = { class: "library-muted" }, Fh = ["action"], Hh = ["value"], $h = ["name", "value"], jh = {
  type: "submit",
  class: "button secondary"
}, Vh = { class: "library-muted" }, Bh = ["action"], qh = ["value"], zh = ["name", "value"], Wh = { name: "bulkEditField" }, Kh = { value: "publicationType" }, Gh = { value: "subtitle" }, Yh = { value: "creators" }, Xh = { value: "publication" }, Jh = { value: "publicationDate" }, Zh = { value: "language" }, Qh = { value: "publisher" }, em = { value: "genres" }, tm = { value: "classifications" }, rm = {
  type: "submit",
  class: "button secondary"
}, nm = { class: "library-muted" }, im = ["action"], am = ["value"], sm = ["name", "value"], lm = {
  type: "submit",
  class: "button secondary"
}, om = { class: "library-muted" }, cm = { class: "library-discovery-shortcuts" }, um = { class: "library-discovery-shortcut-grid" }, dm = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, fm = { id: "library-periodical-groups-heading" }, pm = { class: "library-muted" }, hm = ["href"], mm = { class: "library-muted" }, bm = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, ym = { id: "library-periodical-groups-empty-heading" }, gm = { class: "library-muted" }, _m = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, vm = { id: "library-year-groups-heading" }, Sm = ["href"], wm = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, Em = { id: "library-creator-groups-heading" }, Tm = ["href"], Cm = ["aria-label"], xm = ["href", "aria-label"], Am = { class: "library-muted" }, km = { class: "library-empty-actions" }, Rm = ["href"], Om = { class: "library-muted" }, Nm = { class: "library-muted" }, Pm = { class: "library-empty-actions" }, Im = ["href"], Mm = { class: "library-muted" }, Lm = { class: "library-empty-actions" }, Um = ["href"], Dm = {
  href: "?",
  class: "button primary"
}, Fm = { class: "library-muted" }, Hm = { class: "library-empty-actions" }, $m = ["href"], jm = {
  key: 5,
  class: "library-cover-gallery"
}, Vm = ["href", "aria-label"], Bm = ["src", "alt"], qm = ["action", "onSubmit"], zm = ["value"], Wm = ["value"], Km = ["aria-pressed", "title", "aria-label", "onClick"], Gm = { class: "library-cover-summary" }, Ym = { class: "library-cover-primary" }, Xm = ["aria-label"], Jm = ["href"], Zm = ["onToggle"], Qm = ["aria-label"], eb = { class: "library-cover-meta" }, tb = {
  key: 0,
  class: "library-creator"
}, rb = { class: "library-cover-detail-list" }, nb = { class: "library-cover-detail-chip" }, ib = {
  key: 0,
  class: "library-cover-detail-chip"
}, ab = {
  key: 1,
  class: "library-cover-detail-chip"
}, sb = {
  key: 2,
  class: "library-cover-detail-chip"
}, lb = {
  key: 3,
  class: "library-cover-detail-chip"
}, ob = {
  key: 4,
  class: "library-cover-detail-chip"
}, cb = {
  key: 5,
  class: "library-cover-detail-chip"
}, ub = {
  key: 6,
  class: "library-cover-detail-chip"
}, db = {
  key: 1,
  class: "library-muted library-cover-description"
}, fb = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, pb = { key: 0 }, hb = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, mb = {
  key: 0,
  class: "library-muted"
}, bb = { class: "library-cover-actions" }, yb = ["href"], gb = ["href"], _b = ["onClick"], vb = ["href"], Sb = ["aria-label"], wb = { class: "library-pagination-range" }, Eb = { key: 0 }, Tb = ["href"], Cb = {
  key: 1,
  class: "library-muted"
}, xb = ["href"], Ab = {
  key: 3,
  class: "library-muted"
}, kb = {
  key: 8,
  class: "library-detail-drawer",
  "aria-labelledby": "library-detail-drawer-heading",
  role: "dialog",
  "aria-modal": "true"
}, Rb = ["src", "alt"], Ob = { class: "library-muted library-catalogue-eyebrow" }, Nb = { id: "library-detail-drawer-heading" }, Pb = {
  key: 0,
  class: "library-creator"
}, Ib = {
  key: 1,
  class: "library-muted"
}, Mb = { class: "library-detail-drawer-facts" }, Lb = { key: 0 }, Ub = { key: 1 }, Db = { key: 2 }, Fb = { class: "library-detail-drawer-actions" }, Hb = ["href"], $b = ["href"], jb = ["aria-label"], Vb = ["disabled"], Bb = ["disabled"], qb = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], i = /* @__PURE__ */ hr({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), a = /* @__PURE__ */ hr((i.items || []).map((k) => ({ ...k }))), o = q(() => a), u = q(() => i.shelves || []), p = q(() => i.formats || []), v = q(() => i.publications || []), y = q(() => i.publicationSummaries || []), S = q(() => i.publicationIssueContext || null), I = q(() => i.publicationYears || []), j = q(() => i.creators || []), se = q(() => i.scanStatuses || []), W = q(() => i.workflowStatuses || []), ue = q(() => i.genres || []), le = q(() => i.classifications || []), z = q(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), U = /* @__PURE__ */ hr({
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
      needsMetadata: i.activeFilters?.needsMetadata || "",
      coverReview: i.activeFilters?.coverReview || "",
      noCreator: i.activeFilters?.noCreator || "",
      noPublication: i.activeFilters?.noPublication || "",
      noDate: i.activeFilters?.noDate || "",
      titleFromFilename: i.activeFilters?.titleFromFilename || "",
      noDescription: i.activeFilters?.noDescription || "",
      unsupportedContainer: i.activeFilters?.unsupportedContainer || "",
      weakMetadata: i.activeFilters?.weakMetadata || "",
      unreviewedImports: i.activeFilters?.unreviewedImports || "",
      sort: i.activeFilters?.sort || "title"
    }), V = q(() => i.settingsUrl || ""), ce = q(() => i.requestToken || ""), Me = q(() => i.metadataExportUrl || ""), Ne = q(() => i.metadataSidecarManifestUrl || ""), Ve = q(() => i.metadataSidecarBundleUrl || ""), we = q(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), Le = q(() => i.batchTagUrl || "/apps/library/bulk/tags"), nt = q(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), dt = q(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ge = q(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Et = q(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Fe = q(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), Ue = q(() => i.metadataErrorsUrl || "/apps/library/health/metadata-errors"), ye = q(() => i.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), fe = q(() => i.coverProbeUrl || "/apps/library/health/covers/probe"), Be = q(() => i.importHealthSummaryUrl || "/apps/library/health/import-summary"), ge = /* @__PURE__ */ hr({
      summary: i.importHealthSummary || {},
      loaded: !!(i.importHealthSummary && Object.keys(i.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), Te = q(() => ge.summary || {}), qe = q(() => {
      const k = Number(Te.value.generatedAt || 0);
      return k > 0 ? new Date(k * 1e3).toLocaleString() : "";
    }), Je = q(() => Te.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), me = q(() => Te.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), Ot = q(() => Te.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), ze = q(() => Te.value.coverSupportMatrix || Ot.value.byFormat || []), ft = q(() => Te.value.environmentCapabilities || {}), gt = q(() => i.discoveryPage === "publication"), Tt = q(() => i.discoveryPage === "year"), it = q(() => i.discoveryPage === "creator"), at = q(() => gt.value || Tt.value || it.value), m = q(() => i.discoveryTitle || U.publication || U.year || U.creator || ""), b = q(() => at.value ? m.value : l("library", "Publication catalogue")), _ = q(() => it.value ? l("library", "Creator") : Tt.value ? l("library", "Publication year") : l("library", "Publication / series")), O = q(() => Number(i.rootCount || 0)), T = q(() => Number(i.enabledRootCount || 0)), A = q(() => O.value === 0), M = q(() => O.value > 0 && T.value === 0), D = q(() => Z.value.length > 0), L = {
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
    }, x = q(() => {
      if (typeof window > "u") return "";
      const k = new URLSearchParams(window.location.search);
      if (k.get("batchMetadataApplyResult") !== "1") return "";
      const C = k.get("batchMetadataField") || "field", f = k.get("batchMetadataApplied") || "0", oe = k.get("batchMetadataUnchanged") || "0", He = k.get("batchMetadataSkipped") || "0";
      return l("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: C, unchanged: oe, skipped: He });
    }), G = q(() => i.savedCollections || []), $ = q(() => i.savedCollectionSaveUrl || "/apps/library/collections"), K = q(() => i.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Z = q(() => Object.entries(L).map(([k, C]) => ({ key: k, label: C, value: U[k] || "" })).filter((k) => String(k.value).trim() !== "")), ie = q(() => Object.entries(U).filter(([k, C]) => !["q", "sort", "starred"].includes(k) && String(C || "").trim() !== "").map(([k, C]) => ({ key: k, value: C }))), N = q(() => Object.entries(U).filter(([k, C]) => String(C || "").trim() !== "").map(([k, C]) => ({ key: k, value: C }))), P = /* @__PURE__ */ hr({}), H = q(() => o.value.filter((k) => k.starred || k.workflowStatus === "reading" || k.lastOpenedAt).slice(0, 5)), te = q(() => [...o.value].slice(0, 6)), re = q(() => o.value.find((k) => k.description || k.publication || k.creators) || o.value[0] || null), _e = q(() => !at.value && o.value.length > 0), X = /* @__PURE__ */ ka(null), xe = q(() => X.value ? o.value.findIndex((k) => k.id === X.value.id) : -1), Ae = q(() => xe.value > 0 ? o.value[xe.value - 1] : null), Oe = q(() => xe.value >= 0 && xe.value < o.value.length - 1 ? o.value[xe.value + 1] : null);
    function Ye(k) {
      X.value = k;
    }
    function Nt() {
      X.value = null;
    }
    function Ht(k) {
      k && (X.value = k);
    }
    const Ct = /* @__PURE__ */ ka(null);
    let _t = null;
    function xt(k) {
      const C = new URLSearchParams(new FormData(k));
      for (const f of Array.from(C.keys()))
        String(C.get(f) || "").trim() === "" && C.delete(f);
      return C.delete("page"), C;
    }
    function lr(k) {
      a.splice(0, a.length, ...(k.items || []).map((C) => ({ ...C })));
      for (const C of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(k, C) && (i[C] = k[C]);
      Object.assign(U, k.activeFilters || {});
    }
    async function Gt(k = !1) {
      if (!(ge.loading || ge.refreshing)) {
        k ? ge.refreshing = !0 : ge.loading = !0, ge.error = "";
        try {
          const C = await fetch(`${Be.value}${k ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!C.ok)
            throw new Error(`Import health request failed: ${C.status}`);
          ge.summary = await C.json(), ge.loaded = !0;
        } catch (C) {
          ge.error = C?.message || String(C);
        } finally {
          ge.loading = !1, ge.refreshing = !1;
        }
      }
    }
    async function or(k) {
      k && k.currentTarget && k.currentTarget.open !== !0 || ge.loaded || ge.loading || await Gt(!1);
    }
    async function At() {
      await Gt(!0);
    }
    async function Pt(k) {
      const C = k?.currentTarget?.tagName === "FORM" ? k.currentTarget : k?.currentTarget?.form;
      if (!C) return;
      const oe = xt(C).toString(), He = oe ? `?${oe}` : "", pt = await fetch(we.value + He, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!pt.ok) {
        C.submit();
        return;
      }
      lr(await pt.json()), history.replaceState({}, "", oe ? `?${oe}` : window.location.pathname);
    }
    function It(k) {
      Pt(k);
    }
    function Yt(k) {
      window.clearTimeout(_t), _t = window.setTimeout(() => It(k), 350);
    }
    function Ze(k) {
      const C = new URLSearchParams();
      for (const [oe, He] of Object.entries(U)) {
        const pt = String(He || "").trim();
        pt !== "" && oe !== k && !(oe === "sort" && pt === "title") && C.set(oe, pt);
      }
      const f = C.toString();
      return f ? `?${f}` : "?";
    }
    function cr() {
      return Ze("q");
    }
    const Nr = q(() => i.smartViewCounts || {}), Pr = q(() => {
      const k = {};
      for (const [C, f] of Object.entries(U)) {
        const oe = String(f || "").trim();
        oe !== "" && !(C === "sort" && oe === "title") && (k[C] = oe);
      }
      return k;
    }), di = q(() => JSON.stringify(Pr.value)), Ir = q(() => Object.keys(Pr.value).length > 0), Kr = q(() => [
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
    ]), Sn = q(() => [
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
    function yr(k) {
      const C = new URLSearchParams(window.location.search);
      for (const oe of Object.keys(L))
        C.delete(oe);
      C.delete("page");
      for (const [oe, He] of Object.entries(k))
        String(He || "").trim() !== "" && C.set(oe, String(He));
      const f = C.toString();
      return f ? `?${f}` : "?";
    }
    function fi(k) {
      return yr(k || {});
    }
    function gr(k) {
      return K.value.replace("__COLLECTION_ID__", encodeURIComponent(String(k || "0")));
    }
    function ur(k) {
      return String(k || "").toUpperCase();
    }
    function wn(k) {
      return k.nextcloudTags || [];
    }
    function Pe(k) {
      return y.value.find((f) => f.publication === k)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(k)}`;
    }
    function dr(k) {
      return i.publicationYearLandingUrls?.[k] || `/apps/library/years/${encodeURIComponent(k)}`;
    }
    function pi(k) {
      return i.creatorLandingUrls?.[k] || `/apps/library/creators/${encodeURIComponent(k)}`;
    }
    function En(k, C) {
      P[k] = !!C?.currentTarget?.open;
    }
    function Gr(k) {
      const C = String(k?.tagName || "").toLowerCase();
      return k?.isContentEditable || ["input", "select", "textarea", "button"].includes(C);
    }
    function Tn(k) {
      k.key !== "/" || k.metaKey || k.ctrlKey || k.altKey || k.shiftKey || Gr(k.target) || (k.preventDefault(), Ct.value?.focus(), Ct.value?.select?.());
    }
    function Cn(k) {
      k.key !== "Escape" || document.activeElement !== Ct.value || U.q === "" || (k.preventDefault(), U.q = "", Ct.value.value = "", window.clearTimeout(_t), It({ currentTarget: Ct.value }));
    }
    function xn(k) {
      Tn(k), Cn(k);
    }
    rl(() => {
      window.addEventListener("keydown", xn);
    }), nl(() => {
      window.removeEventListener("keydown", xn);
    });
    async function An(k, C) {
      const f = C?.currentTarget?.closest?.("form") || C?.currentTarget;
      if (!f || !k?.starUrl) return;
      const oe = !!k.starred;
      k.starred = !oe;
      try {
        (await fetch(k.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (k.starred = oe);
      } catch {
        k.starred = oe;
      }
    }
    return (k, C) => (w(), E("div", Zu, [
      s("section", Qu, [
        s("div", ed, [
          s("div", null, [
            at.value ? (w(), E("p", td, c(_.value), 1)) : Q("", !0),
            s("h2", rd, c(b.value), 1),
            s("p", nd, c(at.value ? h(l)("library", "Browse this focused view; use filters only when you need to narrow it further.") : h(l)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          s("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": h(l)("library", "Library actions")
          }, [
            s("details", {
              class: "library-catalogue-actions-menu",
              onToggle: or
            }, [
              s("summary", null, c(h(l)("library", "Actions")), 1),
              s("div", ad, [
                s("a", {
                  href: V.value,
                  class: "button secondary",
                  "aria-label": "Open Library settings"
                }, c(h(l)("library", "Settings")), 9, sd),
                Me.value ? (w(), E("a", {
                  key: 0,
                  href: Me.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, c(h(l)("library", "Export corrected metadata")), 9, ld)) : Q("", !0),
                Ne.value ? (w(), E("a", {
                  key: 1,
                  href: Ne.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar manifest"
                }, c(h(l)("library", "Sidecar manifest")), 9, od)) : Q("", !0),
                Ve.value ? (w(), E("a", {
                  key: 2,
                  href: Ve.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar ZIP"
                }, c(h(l)("library", "Sidecar ZIP")), 9, cd)) : Q("", !0),
                s("div", ud, [
                  s("p", dd, c(h(l)("library", "Import health")), 1),
                  s("h3", fd, c(h(l)("library", "Metadata overview")), 1),
                  s("p", pd, c(h(l)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")), 1),
                  ge.loading ? (w(), E("p", hd, c(h(l)("library", "Loading cached metadata overview…")), 1)) : ge.error ? (w(), E("p", md, c(ge.error), 1)) : ge.loaded ? Q("", !0) : (w(), E("p", bd, c(h(l)("library", "Open Actions to load the cached metadata and cover overview.")), 1)),
                  ge.loaded ? (w(), E(ee, { key: 3 }, [
                    Te.value.message ? (w(), E("p", yd, c(Te.value.message), 1)) : Te.value.cacheStatus === "missing" ? (w(), E("p", gd, c(h(l)("library", "No cached metadata overview exists yet")), 1)) : Q("", !0),
                    qe.value ? (w(), E("p", _d, c(h(l)("library", "Last generated")) + ": " + c(qe.value), 1)) : Q("", !0),
                    s("button", {
                      type: "button",
                      class: "button secondary library-import-health-refresh",
                      disabled: ge.refreshing,
                      onClick: At
                    }, c(ge.refreshing ? h(l)("library", "Refreshing metadata overview…") : h(l)("library", "Refresh metadata overview")), 9, vd),
                    s("div", Sd, [
                      s("a", {
                        class: "button secondary",
                        href: Je.value.reviewUrl || "?status=metadata_error"
                      }, c(h(l)("library", "Review metadata errors")), 9, wd),
                      s("a", {
                        class: "button secondary",
                        href: Ue.value
                      }, c(h(l)("library", "Full review")), 9, Ed),
                      s("a", {
                        class: "button secondary",
                        href: ye.value
                      }, c(h(l)("library", "Export TSV")), 9, Td),
                      s("a", {
                        class: "button secondary",
                        href: fe.value
                      }, c(h(l)("library", "Probe covers")), 9, Cd)
                    ]),
                    s("div", xd, [
                      s("article", null, [
                        s("h4", null, c(h(l)("library", "Metadata errors")), 1),
                        s("p", Ad, c(Je.value.total || 0), 1),
                        s("ul", null, [
                          (w(!0), E(ee, null, he(Je.value.byExtension, (f) => (w(), E("li", {
                            key: f.extension
                          }, c(ur(f.extension)) + " · " + c(f.count), 1))), 128))
                        ])
                      ]),
                      s("article", null, [
                        s("h4", null, c(h(l)("library", "Archive/container check")), 1),
                        s("p", kd, c(me.value.mismatches || 0), 1),
                        s("ul", null, [
                          (w(!0), E(ee, null, he(me.value.byExtensionAndContainer, (f) => (w(), E("li", {
                            key: `${f.extension}-${f.actualContainerType}`
                          }, c(ur(f.extension)) + " · " + c(f.actualContainerType) + " · " + c(f.count), 1))), 128))
                        ])
                      ]),
                      s("article", null, [
                        s("h4", null, c(h(l)("library", "Cover health")), 1),
                        s("p", Rd, c(Ot.value.note), 1),
                        s("ul", null, [
                          (w(!0), E(ee, null, he(Ot.value.byFormat, (f) => (w(), E("li", {
                            key: `${f.extension}-${f.nextcloudPreview}-${f.libraryCoverRoute}`
                          }, c(ur(f.extension)) + " · nextcloudPreview: " + c(f.nextcloudPreview) + " · libraryCoverRoute: " + c(f.libraryCoverRoute) + " · " + c(f.count), 1))), 128))
                        ])
                      ]),
                      s("article", null, [
                        s("h4", null, c(h(l)("library", "Cover support matrix")), 1),
                        s("p", Od, c(h(l)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1),
                        s("ul", null, [
                          (w(!0), E(ee, null, he(ze.value, (f) => (w(), E("li", {
                            key: `${f.extension}-${f.nextcloudPreview}-${f.libraryCoverRoute}-${f.count}`
                          }, c(ur(f.extension)) + " · Nextcloud/plugin preview: " + c(f.nextcloudPreview) + " · Library extraction: " + c(f.libraryCoverRoute) + " · " + c(f.count), 1))), 128))
                        ]),
                        s("p", Nd, c(h(l)("library", "Extractor tools")) + ": ZIP=" + c(ft.value.phpZipArchive ? "ZipArchive" : "missing") + " · 7z=" + c(ft.value.sevenZipCommand || "missing") + " · RAR=" + c(ft.value.rarCommand || "missing") + " · bsdtar=" + c(ft.value.bsdtarCommand || "missing"), 1)
                      ])
                    ]),
                    Je.value.examples?.length ? (w(), E("details", Pd, [
                      s("summary", null, c(h(l)("library", "Example files and suggested actions")), 1),
                      s("ul", null, [
                        (w(!0), E(ee, null, he(Je.value.examples, (f) => (w(), E("li", {
                          key: `${f.fileId}-${f.path}`
                        }, [
                          s("code", null, c(f.path), 1),
                          s("span", null, c(f.scanStatus) + " · " + c(f.scanError) + " · " + c(f.actualContainerType), 1),
                          s("strong", null, c(f.suggestedRepairAction), 1)
                        ]))), 128))
                      ])
                    ])) : Q("", !0)
                  ], 64)) : Q("", !0),
                  s("div", Id, [
                    s("article", null, [
                      s("h4", null, c(h(l)("library", "Metadata-error queue")), 1),
                      s("p", Md, c(h(l)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")), 1),
                      s("a", {
                        class: "button secondary",
                        href: Je.value.reviewUrl || "?status=metadata_error"
                      }, c(h(l)("library", "Open metadata-error rows")), 9, Ld),
                      s("a", {
                        class: "button secondary",
                        href: ye.value
                      }, c(h(l)("library", "Export metadata-error rows")), 9, Ud),
                      s("form", {
                        method: "post",
                        action: Le.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        s("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ce.value
                        }, null, 8, Fd),
                        C[22] || (C[22] = s("input", {
                          type: "hidden",
                          name: "status",
                          value: "metadata_error"
                        }, null, -1)),
                        C[23] || (C[23] = s("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-metadata-error"
                        }, null, -1)),
                        s("button", Hd, c(h(l)("library", "Tag metadata-error rows")), 1)
                      ], 8, Dd)
                    ]),
                    s("article", null, [
                      s("h4", null, c(h(l)("library", "Scanner-conflict queue")), 1),
                      s("p", $d, c(h(l)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")), 1),
                      s("a", {
                        class: "button secondary",
                        href: Fe.value
                      }, c(h(l)("library", "Open scanner-conflict rows")), 9, jd),
                      s("form", {
                        method: "post",
                        action: Le.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        s("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ce.value
                        }, null, 8, Bd),
                        C[24] || (C[24] = s("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        C[25] || (C[25] = s("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-scanner-conflict"
                        }, null, -1)),
                        s("button", qd, c(h(l)("library", "Tag scanner-conflict rows")), 1)
                      ], 8, Vd)
                    ])
                  ])
                ])
              ])
            ], 32)
          ], 8, id)
        ]),
        x.value ? (w(), E("p", zd, c(x.value), 1)) : Q("", !0),
        _e.value ? (w(), E("section", Wd, [
          s("article", Kd, [
            s("p", Gd, c(h(l)("library", "Home dashboard")), 1),
            s("h3", Yd, c(h(l)("library", "Continue reading")), 1),
            s("p", Xd, c(h(l)("library", "Fast entry points keep browsing visual: continue, revisit recent additions, or rediscover one shelf item without opening admin tools.")), 1),
            s("div", Jd, [
              H.value[0] ? (w(), E("a", {
                key: 0,
                class: "button primary",
                href: H.value[0].openUrl
              }, c(h(l)("library", "Read now")), 9, Zd)) : Q("", !0),
              H.value[0] ? (w(), E("button", {
                key: 1,
                type: "button",
                class: "button secondary",
                onClick: C[0] || (C[0] = (f) => Ye(H.value[0]))
              }, c(h(l)("library", "Open details drawer")), 1)) : Q("", !0)
            ])
          ]),
          s("nav", {
            class: "library-home-rail",
            "aria-label": h(l)("library", "Recently added")
          }, [
            s("h4", null, c(h(l)("library", "Recently added")), 1),
            (w(!0), E(ee, null, he(te.value, (f) => (w(), E("button", {
              key: `recent-${f.id}`,
              type: "button",
              class: "library-home-mini-card",
              onClick: (oe) => Ye(f)
            }, [
              s("img", {
                src: f.coverUrl,
                alt: `Cover for ${f.title}`,
                loading: "lazy"
              }, null, 8, tf),
              s("span", null, c(f.title), 1)
            ], 8, ef))), 128))
          ], 8, Qd),
          re.value ? (w(), E("article", rf, [
            s("p", nf, c(h(l)("library", "Rediscover")), 1),
            s("strong", null, c(re.value.title), 1),
            s("span", af, c(re.value.creators || re.value.publication || re.value.cachedPath), 1),
            s("button", {
              type: "button",
              class: "button secondary",
              onClick: C[1] || (C[1] = (f) => Ye(re.value))
            }, c(h(l)("library", "Peek")), 1)
          ])) : Q("", !0)
        ])) : Q("", !0),
        s("section", sf, [
          s("div", lf, [
            s("p", of, c(h(l)("library", "Useful views")), 1),
            s("h3", cf, c(h(l)("library", "Useful views")), 1),
            s("p", uf, c(h(l)("library", "One-click smart views reuse normal catalogue filters, so active chips still explain what you are seeing.")), 1),
            s("p", df, c(h(l)("library", "Empty useful views mean no current catalogue items match that saved direction yet; add metadata, star items, update workflow status, or run a scan to create matches.")), 1)
          ]),
          s("nav", {
            class: "library-useful-view-links",
            "aria-label": h(l)("library", "Built-in useful catalogue views")
          }, [
            (w(!0), E(ee, null, he(Kr.value, (f) => (w(), E("a", {
              key: f.key,
              class: "library-useful-view-chip",
              href: yr(f.filters),
              title: f.description
            }, [
              s("strong", null, c(h(l)("library", f.label)), 1),
              s("span", null, c(h(l)("library", f.description)), 1),
              s("small", hf, c(Number(Nr.value[f.key] || 0)), 1)
            ], 8, pf))), 128))
          ], 8, ff)
        ]),
        s("section", mf, [
          s("div", bf, [
            s("p", yf, c(h(l)("library", "Metadata cleanup")), 1),
            s("h3", gf, c(h(l)("library", "Weak metadata cockpit")), 1),
            s("p", _f, c(h(l)("library", "Counts are derived from indexed metadata and scanner provenance, not manual lists; compact cards stay browse-first while Details carries repair actions.")), 1)
          ]),
          s("nav", {
            class: "library-weak-metadata-links",
            "aria-label": h(l)("library", "Weak metadata catalogue views")
          }, [
            (w(!0), E(ee, null, he(Sn.value, (f) => (w(), E("a", {
              key: f.key,
              class: "library-weak-metadata-card",
              href: yr(f.filters),
              title: f.description
            }, [
              s("span", null, [
                s("strong", null, c(h(l)("library", f.label)), 1),
                s("small", null, c(h(l)("library", f.description)), 1)
              ]),
              s("b", null, c(Number(Nr.value[f.key] || 0)), 1)
            ], 8, Sf))), 128))
          ], 8, vf)
        ]),
        s("section", wf, [
          s("div", Ef, [
            s("p", Tf, c(h(l)("library", "Custom collections")), 1),
            s("h3", Cf, c(h(l)("library", "Custom collections")), 1),
            s("p", xf, c(h(l)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")), 1)
          ]),
          s("form", {
            method: "post",
            action: $.value,
            class: "library-saved-collection-save-form"
          }, [
            s("input", {
              type: "hidden",
              name: "requesttoken",
              value: ce.value
            }, null, 8, kf),
            s("input", {
              type: "hidden",
              name: "savedCollectionFilters",
              value: di.value
            }, null, 8, Rf),
            s("label", null, [
              pe(c(h(l)("library", "Collection name")) + " ", 1),
              s("input", {
                type: "text",
                name: "savedCollectionName",
                placeholder: h(l)("library", "e.g. Bremen photo books"),
                disabled: !Ir.value,
                autocomplete: "off"
              }, null, 8, Of)
            ]),
            s("button", {
              type: "submit",
              class: "button secondary",
              disabled: !Ir.value
            }, c(h(l)("library", "Save current view")), 9, Nf)
          ], 8, Af),
          Ir.value ? Q("", !0) : (w(), E("p", Pf, c(h(l)("library", "Choose search terms or filters first, then save them as a custom collection.")), 1)),
          G.value.length > 0 ? (w(), E("nav", {
            key: 1,
            class: "library-saved-collection-links",
            "aria-label": h(l)("library", "Saved custom collections")
          }, [
            (w(!0), E(ee, null, he(G.value, (f) => (w(), E("article", {
              key: f.id,
              class: "library-saved-collection-card"
            }, [
              s("a", {
                class: "library-saved-collection-link",
                href: fi(f.filters)
              }, [
                s("strong", null, c(f.name), 1),
                s("span", null, c(Number(f.count || 0)) + " " + c(h(l)("library", "items")), 1)
              ], 8, Mf),
              s("form", {
                method: "post",
                action: gr(f.id),
                class: "library-saved-collection-delete-form"
              }, [
                s("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, Uf),
                s("button", Df, c(h(l)("library", "Delete")), 1)
              ], 8, Lf)
            ]))), 128))
          ], 8, If)) : Q("", !0)
        ]),
        s("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": h(l)("library", "Quick catalogue filters"),
          onSubmit: Fn(Pt, ["prevent"])
        }, [
          (w(!0), E(ee, null, he(ie.value, (f) => (w(), E("input", {
            key: f.key,
            type: "hidden",
            name: f.key,
            value: f.value
          }, null, 8, Hf))), 128)),
          s("div", $f, [
            s("label", jf, [
              s("span", null, [
                pe(c(h(l)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                C[26] || (C[26] = s("kbd", { class: "library-keyboard-hint" }, "/", -1))
              ]),
              We(s("input", {
                ref_key: "quickSearchInput",
                ref: Ct,
                "onUpdate:modelValue": C[2] || (C[2] = (f) => U.q = f),
                "data-library-quick-search": "",
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope",
                onInput: Yt
              }, null, 544), [
                [Oi, U.q]
              ])
            ]),
            s("button", {
              type: "submit",
              class: "button primary",
              "aria-label": h(l)("library", "Search catalogue")
            }, c(h(l)("library", "Search")), 9, Vf)
          ]),
          s("details", Bf, [
            s("summary", null, c(h(l)("library", "Filter & sort")), 1),
            s("div", qf, [
              s("label", null, [
                pe(c(h(l)("library", "Sort")) + " ", 1),
                We(s("select", {
                  "onUpdate:modelValue": C[3] || (C[3] = (f) => U.sort = f),
                  name: "sort",
                  onChange: Pt
                }, [
                  s("option", zf, c(h(l)("library", "Title")), 1),
                  s("option", Wf, c(h(l)("library", "Recently added")), 1),
                  s("option", Kf, c(h(l)("library", "Publication date")), 1),
                  s("option", Gf, c(h(l)("library", "Series")), 1),
                  s("option", Yf, c(h(l)("library", "Recently opened")), 1),
                  s("option", Xf, c(h(l)("library", "Format")), 1)
                ], 544), [
                  [lt, U.sort]
                ])
              ]),
              s("label", null, [
                pe(c(h(l)("library", "Starred")) + " ", 1),
                We(s("select", {
                  "onUpdate:modelValue": C[4] || (C[4] = (f) => U.starred = f),
                  name: "starred",
                  onChange: Pt
                }, [
                  s("option", Jf, c(h(l)("library", "All")), 1),
                  s("option", Zf, c(h(l)("library", "Starred")), 1)
                ], 544), [
                  [lt, U.starred]
                ])
              ]),
              s("label", null, [
                pe(c(h(l)("library", "Size")) + " ", 1),
                s("select", {
                  value: z.value.limit,
                  name: "limit",
                  onChange: Pt
                }, [
                  (w(), E(ee, null, he(n, (f) => s("option", {
                    key: f,
                    value: f
                  }, c(f), 9, ep)), 64))
                ], 40, Qf)
              ]),
              s("button", {
                type: "submit",
                class: "button secondary",
                "aria-label": h(l)("library", "Apply catalogue filters")
              }, c(h(l)("library", "Apply filters")), 9, tp),
              s("a", {
                href: "?",
                class: "button secondary",
                "aria-label": h(l)("library", "Clear catalogue filters")
              }, c(h(l)("library", "Clear all")), 9, rp)
            ])
          ])
        ], 40, Ff),
        s("details", np, [
          s("summary", ip, c(h(l)("library", "Show catalogue filters")), 1),
          s("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": h(l)("library", "Catalogue search and filters"),
            onSubmit: Fn(Pt, ["prevent"])
          }, [
            s("label", null, [
              pe(c(h(l)("library", "Search title, creator, description, filename or folder")) + " ", 1),
              We(s("input", {
                "onUpdate:modelValue": C[5] || (C[5] = (f) => U.q = f),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope"
              }, null, 512), [
                [Oi, U.q]
              ])
            ]),
            s("p", sp, c(h(l)("library", "Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")), 1),
            s("label", null, [
              pe(c(h(l)("library", "Type")) + " ", 1),
              We(s("select", {
                "onUpdate:modelValue": C[6] || (C[6] = (f) => U.type = f),
                name: "type"
              }, [
                s("option", lp, c(h(l)("library", "All types")), 1),
                (w(), E(ee, null, he(r, (f) => s("option", {
                  key: f,
                  value: f
                }, c(f), 9, op)), 64))
              ], 512), [
                [lt, U.type]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Series / periodical")) + " ", 1),
              We(s("select", {
                "onUpdate:modelValue": C[7] || (C[7] = (f) => U.publication = f),
                name: "publication"
              }, [
                s("option", cp, c(h(l)("library", "All series and periodicals")), 1),
                (w(!0), E(ee, null, he(v.value, (f) => (w(), E("option", {
                  key: f,
                  value: f
                }, c(f), 9, up))), 128))
              ], 512), [
                [lt, U.publication]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Publication year")) + " ", 1),
              We(s("select", {
                "onUpdate:modelValue": C[8] || (C[8] = (f) => U.year = f),
                name: "year"
              }, [
                s("option", dp, c(h(l)("library", "All years")), 1),
                (w(!0), E(ee, null, he(I.value, (f) => (w(), E("option", {
                  key: f,
                  value: f
                }, c(f), 9, fp))), 128))
              ], 512), [
                [lt, U.year]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Creator")) + " ", 1),
              We(s("select", {
                "onUpdate:modelValue": C[9] || (C[9] = (f) => U.creator = f),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                s("option", pp, c(h(l)("library", "All creators")), 1),
                (w(!0), E(ee, null, he(j.value, (f) => (w(), E("option", {
                  key: f,
                  value: f
                }, c(f), 9, hp))), 128))
              ], 512), [
                [lt, U.creator]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Nextcloud tag")) + " ", 1),
              We(s("input", {
                "onUpdate:modelValue": C[10] || (C[10] = (f) => U.tag = f),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [Oi, U.tag]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Format")) + " ", 1),
              We(s("select", {
                "onUpdate:modelValue": C[11] || (C[11] = (f) => U.format = f),
                name: "format"
              }, [
                s("option", mp, c(h(l)("library", "All formats")), 1),
                (w(!0), E(ee, null, he(p.value, (f) => (w(), E("option", {
                  key: f,
                  value: f
                }, c(ur(f)), 9, bp))), 128))
              ], 512), [
                [lt, U.format]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Shelf")) + " ", 1),
              We(s("select", {
                "onUpdate:modelValue": C[12] || (C[12] = (f) => U.shelf = f),
                name: "shelf"
              }, [
                s("option", yp, c(h(l)("library", "All shelves")), 1),
                (w(!0), E(ee, null, he(u.value, (f) => (w(), E("option", {
                  key: f,
                  value: f
                }, c(f), 9, gp))), 128))
              ], 512), [
                [lt, U.shelf]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Scan status")) + " ", 1),
              We(s("select", {
                "onUpdate:modelValue": C[13] || (C[13] = (f) => U.status = f),
                name: "status"
              }, [
                s("option", _p, c(h(l)("library", "All scan statuses")), 1),
                (w(!0), E(ee, null, he(se.value, (f) => (w(), E("option", {
                  key: f,
                  value: f
                }, c(f), 9, vp))), 128))
              ], 512), [
                [lt, U.status]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Workflow status")) + " ", 1),
              We(s("select", {
                "onUpdate:modelValue": C[14] || (C[14] = (f) => U.workflowStatus = f),
                name: "workflowStatus"
              }, [
                s("option", Sp, c(h(l)("library", "All workflow statuses")), 1),
                (w(!0), E(ee, null, he(W.value, (f) => (w(), E("option", {
                  key: f,
                  value: f
                }, c(f), 9, wp))), 128))
              ], 512), [
                [lt, U.workflowStatus]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Genre")) + " ", 1),
              We(s("select", {
                "onUpdate:modelValue": C[15] || (C[15] = (f) => U.genre = f),
                name: "genre"
              }, [
                s("option", Ep, c(h(l)("library", "All genres")), 1),
                (w(!0), E(ee, null, he(ue.value, (f) => (w(), E("option", {
                  key: f,
                  value: f
                }, c(f), 9, Tp))), 128))
              ], 512), [
                [lt, U.genre]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Classification")) + " ", 1),
              We(s("select", {
                "onUpdate:modelValue": C[16] || (C[16] = (f) => U.classification = f),
                name: "classification"
              }, [
                s("option", Cp, c(h(l)("library", "All classifications")), 1),
                (w(!0), E(ee, null, he(le.value, (f) => (w(), E("option", {
                  key: f,
                  value: f
                }, c(f), 9, xp))), 128))
              ], 512), [
                [lt, U.classification]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Scanner conflicts")) + " ", 1),
              We(s("select", {
                "onUpdate:modelValue": C[17] || (C[17] = (f) => U.scannerConflicts = f),
                name: "scannerConflicts"
              }, [
                s("option", Ap, c(h(l)("library", "All metadata")), 1),
                s("option", kp, c(h(l)("library", "Needs review")), 1)
              ], 512), [
                [lt, U.scannerConflicts]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Starred")) + " ", 1),
              We(s("select", {
                "onUpdate:modelValue": C[18] || (C[18] = (f) => U.starred = f),
                name: "starred"
              }, [
                s("option", Rp, c(h(l)("library", "All publications")), 1),
                s("option", Op, c(h(l)("library", "Starred only")), 1)
              ], 512), [
                [lt, U.starred]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Sort")) + " ", 1),
              We(s("select", {
                "onUpdate:modelValue": C[19] || (C[19] = (f) => U.sort = f),
                name: "sort"
              }, [
                s("option", Np, c(h(l)("library", "Title")), 1),
                s("option", Pp, c(h(l)("library", "Recently added")), 1),
                s("option", Ip, c(h(l)("library", "Publication date")), 1),
                s("option", Mp, c(h(l)("library", "Series / periodical")), 1),
                s("option", Lp, c(h(l)("library", "Recently opened")), 1),
                s("option", Up, c(h(l)("library", "Format")), 1)
              ], 512), [
                [lt, U.sort]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Page size")) + " ", 1),
              s("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (w(), E(ee, null, he(n, (f) => s("option", {
                  key: f,
                  value: f
                }, c(f), 9, Fp)), 64))
              ], 8, Dp)
            ]),
            s("button", {
              type: "submit",
              class: "button primary",
              "aria-label": h(l)("library", "Apply catalogue filters")
            }, c(h(l)("library", "Apply filters")), 9, Hp),
            s("a", {
              href: "?",
              class: "button secondary",
              "aria-label": h(l)("library", "Clear catalogue filters")
            }, c(h(l)("library", "Clear")), 9, $p),
            s("a", {
              href: Fe.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, c(h(l)("library", "Review scanner conflicts")), 9, jp)
          ], 40, ap)
        ]),
        at.value ? (w(), E("section", Vp, [
          s("p", Bp, c(_.value), 1),
          s("h3", qp, c(m.value), 1),
          s("p", zp, c(it.value ? h(l)("library", "Items by this creator, sorted by publication context when available.") : Tt.value ? h(l)("library", "Items from this publication year, sorted by publication date when available.") : h(l)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          s("div", Wp, [
            s("span", null, c(z.value.total) + " " + c(h(l)("library", "items")), 1),
            S.value?.earliestYear && S.value?.latestYear ? (w(), E("span", Kp, c(S.value.earliestYear) + "–" + c(S.value.latestYear), 1)) : Q("", !0),
            S.value?.datedCount ? (w(), E("span", Gp, c(S.value.datedCount) + " " + c(h(l)("library", "dated")), 1)) : Q("", !0),
            S.value?.undatedCount > 0 ? (w(), E("span", Yp, c(S.value.undatedCount) + " " + c(h(l)("library", "undated")), 1)) : Q("", !0)
          ]),
          gt.value && S.value ? (w(), E("aside", Xp, [
            s("strong", null, c(h(l)("library", "Publication contents")), 1),
            s("span", null, c(S.value.itemCount) + " " + c(h(l)("library", "items")), 1),
            S.value.earliestYear && S.value.latestYear ? (w(), E("span", Jp, c(S.value.earliestYear) + "–" + c(S.value.latestYear), 1)) : Q("", !0),
            s("span", null, c(S.value.datedCount) + " " + c(h(l)("library", "with issue/date coverage")), 1),
            S.value.undatedCount > 0 ? (w(), E("span", Zp, c(S.value.undatedCount) + " " + c(h(l)("library", "without dates yet")), 1)) : Q("", !0),
            s("span", null, c(h(l)("library", "read-only grouping")), 1)
          ])) : Q("", !0),
          gt.value && S.value?.issueGroups?.length ? (w(), E("section", Qp, [
            s("div", null, [
              s("p", eh, c(h(l)("library", "Issue order")), 1),
              s("h4", th, c(h(l)("library", "Read-only issue/date grouping")), 1),
              s("p", rh, c(h(l)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")), 1)
            ]),
            s("div", nh, [
              (w(!0), E(ee, null, he(S.value.issueGroups, (f) => (w(), E("a", {
                key: `strip-${f.label}`,
                class: "library-issue-strip-card",
                href: f.items?.[0]?.detailsUrl || "#"
              }, [
                s("span", null, c(f.label), 1),
                s("strong", null, c(f.items?.[0]?.issueLabel || h(l)("library", "Issue")), 1),
                s("small", null, c(f.items?.length || 0) + " " + c(h(l)("library", "items")), 1)
              ], 8, ih))), 128))
            ]),
            S.value.gapRanges?.length ? (w(), E("p", ah, c(h(l)("library", "Gap")) + ": " + c(S.value.gapRanges.join(", ")), 1)) : Q("", !0),
            (w(!0), E(ee, null, he(S.value.issueGroups, (f) => (w(), E("div", {
              key: f.label,
              class: "library-publication-issue-group"
            }, [
              s("h5", null, c(f.label), 1),
              s("ol", null, [
                (w(!0), E(ee, null, he(f.items, (oe, He) => (w(), E("li", {
                  key: oe.itemId
                }, [
                  s("span", sh, c(oe.issueLabel), 1),
                  s("a", {
                    href: oe.detailsUrl || "#"
                  }, c(oe.title), 9, lh),
                  s("small", null, [
                    pe(c(oe.publicationType), 1),
                    oe.publicationDate ? (w(), E(ee, { key: 0 }, [
                      pe(" · " + c(oe.publicationDate), 1)
                    ], 64)) : Q("", !0)
                  ]),
                  s("small", oh, [
                    He > 0 ? (w(), E(ee, { key: 0 }, [
                      pe(c(h(l)("library", "Previous issue")), 1)
                    ], 64)) : Q("", !0),
                    He > 0 && He < f.items.length - 1 ? (w(), E(ee, { key: 1 }, [
                      pe(" · ")
                    ], 64)) : Q("", !0),
                    He < f.items.length - 1 ? (w(), E(ee, { key: 2 }, [
                      pe(c(h(l)("library", "Next issue")), 1)
                    ], 64)) : Q("", !0)
                  ])
                ]))), 128))
              ])
            ]))), 128)),
            S.value.unknownIssueItems?.length ? (w(), E("details", ch, [
              s("summary", null, c(h(l)("library", "Unknown issue/date")) + " · " + c(S.value.unknownIssueItems.length), 1),
              s("p", uh, c(h(l)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")), 1)
            ])) : Q("", !0)
          ])) : Q("", !0),
          s("p", null, [
            s("a", dh, c(h(l)("library", "Back to full catalogue")), 1)
          ])
        ])) : Q("", !0),
        s("div", fh, [
          s("p", ph, [
            pe(c(h(l)("library", "Showing")) + " " + c(z.value.from) + "–" + c(z.value.to) + " " + c(h(l)("library", "of")) + " " + c(z.value.total) + " " + c(h(l)("library", "catalogue items")), 1),
            Z.value.length > 0 ? (w(), E("span", hh, [
              C[27] || (C[27] = pe(" · ", -1)),
              s("a", mh, c(h(l)("library", "Clear all filters")), 1)
            ])) : Q("", !0)
          ]),
          s("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": h(l)("library", "Catalogue pagination")
          }, [
            s("span", yh, [
              pe(c(h(l)("library", "Page")) + " " + c(z.value.page), 1),
              z.value.total > 0 ? (w(), E("span", gh, " · " + c(z.value.from) + "–" + c(z.value.to), 1)) : Q("", !0)
            ]),
            z.value.previousUrl ? (w(), E("a", {
              key: 0,
              href: z.value.previousUrl
            }, c(h(l)("library", "Previous")), 9, _h)) : (w(), E("span", vh, c(h(l)("library", "Previous")), 1)),
            z.value.nextUrl ? (w(), E("a", {
              key: 2,
              href: z.value.nextUrl
            }, c(h(l)("library", "Next")), 9, Sh)) : (w(), E("span", wh, c(h(l)("library", "Next")), 1))
          ], 8, bh)
        ]),
        s("div", Eh, [
          s("details", {
            class: "library-batch-actions",
            "aria-label": h(l)("library", "Batch actions for current results")
          }, [
            s("summary", null, [
              pe(c(h(l)("library", "Batch")) + " ", 1),
              s("span", Ch, c(z.value.total) + " " + c(h(l)("library", "Current filter result")), 1)
            ]),
            s("form", {
              method: "post",
              action: Le.value,
              class: "library-batch-tag-form"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Ah),
              (w(!0), E(ee, null, he(N.value, (f) => (w(), E("input", {
                key: f.key,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, kh))), 128)),
              s("label", null, [
                s("span", null, c(h(l)("library", "Nextcloud tag")), 1),
                s("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: h(l)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, Rh)
              ]),
              s("button", Oh, c(h(l)("library", "Apply Nextcloud tag to current results")), 1),
              s("p", Nh, c(h(l)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, xh),
            s("form", {
              method: "post",
              action: nt.value,
              class: "library-batch-tag-remove-form"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Ih),
              (w(!0), E(ee, null, he(N.value, (f) => (w(), E("input", {
                key: `remove-tag-${f.key}`,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, Mh))), 128)),
              s("label", null, [
                s("span", null, c(h(l)("library", "Nextcloud tag")), 1),
                s("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: h(l)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, Lh)
              ]),
              s("button", Uh, c(h(l)("library", "Remove tag from current results")), 1),
              s("p", Dh, c(h(l)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, Ph),
            s("form", {
              method: "post",
              action: dt.value,
              class: "library-batch-metadata-reset-form"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Hh),
              (w(!0), E(ee, null, he(N.value, (f) => (w(), E("input", {
                key: `reset-${f.key}`,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, $h))), 128)),
              C[28] || (C[28] = s("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              s("button", jh, c(h(l)("library", "Reset filtered metadata")), 1),
              s("p", Vh, c(h(l)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, Fh),
            s("form", {
              method: "post",
              action: Ge.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, qh),
              (w(!0), E(ee, null, he(N.value, (f) => (w(), E("input", {
                key: `edit-preview-${f.key}`,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, zh))), 128)),
              s("label", null, [
                s("span", null, c(h(l)("library", "Metadata field")), 1),
                s("select", Wh, [
                  s("option", Kh, c(h(l)("library", "Publication type")), 1),
                  s("option", Gh, c(h(l)("library", "Subtitle")), 1),
                  s("option", Yh, c(h(l)("library", "Creators")), 1),
                  s("option", Xh, c(h(l)("library", "Series / periodical")), 1),
                  s("option", Jh, c(h(l)("library", "Publication date")), 1),
                  s("option", Zh, c(h(l)("library", "Language")), 1),
                  s("option", Qh, c(h(l)("library", "Publisher")), 1),
                  s("option", em, c(h(l)("library", "Genres")), 1),
                  s("option", tm, c(h(l)("library", "Classifications")), 1)
                ])
              ]),
              s("label", null, [
                s("span", null, c(h(l)("library", "Preview value")), 1),
                C[29] || (C[29] = s("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              s("button", rm, c(h(l)("library", "Preview & apply metadata edit")), 1),
              s("p", nm, c(h(l)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, Bh),
            s("form", {
              method: "post",
              action: Et.value,
              class: "library-batch-cover-refresh-form"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, am),
              (w(!0), E(ee, null, he(N.value, (f) => (w(), E("input", {
                key: `cover-${f.key}`,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, sm))), 128)),
              s("button", lm, c(h(l)("library", "Request fresh cover previews")), 1),
              s("p", om, c(h(l)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, im)
          ], 8, Th),
          s("details", cm, [
            s("summary", null, c(h(l)("library", "Browse")), 1),
            s("div", um, [
              y.value.length > 0 ? (w(), E("section", dm, [
                s("h3", fm, c(h(l)("library", "Top series and periodicals")), 1),
                s("p", pm, c(h(l)("library", "Jump into recurring publications with one click.")), 1),
                s("ul", null, [
                  (w(!0), E(ee, null, he(y.value, (f) => (w(), E("li", {
                    key: f.publication
                  }, [
                    s("a", {
                      href: Pe(f.publication)
                    }, c(f.publication), 9, hm),
                    s("span", mm, c(f.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : y.value.length === 0 ? (w(), E("section", bm, [
                s("h3", ym, c(h(l)("library", "No series or periodicals found yet")), 1),
                s("p", gm, c(h(l)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : Q("", !0),
              I.value.length > 0 ? (w(), E("section", _m, [
                s("h3", vm, c(h(l)("library", "Top publication years")), 1),
                s("ul", null, [
                  (w(!0), E(ee, null, he(I.value, (f) => (w(), E("li", { key: f }, [
                    s("a", {
                      href: dr(f)
                    }, c(f), 9, Sm)
                  ]))), 128))
                ])
              ])) : Q("", !0),
              j.value.length > 0 ? (w(), E("section", wm, [
                s("h3", Em, c(h(l)("library", "Top creators")), 1),
                s("ul", null, [
                  (w(!0), E(ee, null, he(j.value, (f) => (w(), E("li", { key: f }, [
                    s("a", {
                      href: pi(f)
                    }, c(f), 9, Tm)
                  ]))), 128))
                ])
              ])) : Q("", !0)
            ])
          ])
        ]),
        Z.value.length > 0 ? (w(), E("nav", {
          key: 3,
          class: "library-active-filter-chips",
          "aria-label": h(l)("library", "Active filters")
        }, [
          s("span", null, c(h(l)("library", "Active filters")), 1),
          (w(!0), E(ee, null, he(Z.value, (f) => (w(), E("a", {
            key: f.key,
            href: Ze(f.key),
            class: "library-filter-chip",
            "aria-label": `${h(l)("library", "Remove filter")}: ${f.label}`
          }, [
            s("strong", null, c(f.label) + ":", 1),
            pe(" " + c(f.value) + " ", 1),
            C[30] || (C[30] = s("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, xm))), 128))
        ], 8, Cm)) : Q("", !0),
        o.value.length === 0 ? (w(), E("div", {
          key: 4,
          class: jr(["library-empty-content", { "library-first-run-guidance": A.value || M.value, "library-filter-empty-state": D.value && !A.value && !M.value }]),
          role: "status"
        }, [
          A.value ? (w(), E(ee, { key: 0 }, [
            s("h3", null, c(h(l)("library", "Start with one Library root")), 1),
            s("p", Am, c(h(l)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            s("p", km, [
              s("a", {
                href: V.value,
                class: "button primary"
              }, c(h(l)("library", "Add a Library root")), 9, Rm),
              s("span", Om, c(h(l)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : M.value ? (w(), E(ee, { key: 1 }, [
            s("h3", null, c(h(l)("library", "No enabled Library roots")), 1),
            s("p", Nm, c(h(l)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            s("p", Pm, [
              s("a", {
                href: V.value,
                class: "button primary"
              }, c(h(l)("library", "Open Library settings")), 9, Im)
            ])
          ], 64)) : D.value ? (w(), E(ee, { key: 2 }, [
            s("h3", null, c(h(l)("library", "No matches for the current filters")), 1),
            s("p", Mm, c(h(l)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            s("p", Lm, [
              s("a", {
                href: cr(),
                class: "button secondary"
              }, c(h(l)("library", "Clear search")), 9, Um),
              s("a", Dm, c(h(l)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (w(), E(ee, { key: 3 }, [
            s("h3", null, c(h(l)("library", "No catalogue items yet")), 1),
            s("p", Fm, c(h(l)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            s("p", Hm, [
              s("a", {
                href: V.value,
                class: "button primary"
              }, c(h(l)("library", "Run a scan from settings")), 9, $m)
            ])
          ], 64))
        ], 2)) : (w(), E("div", jm, [
          (w(!0), E(ee, null, he(o.value, (f) => (w(), E("article", {
            key: f.id,
            class: jr(["library-cover-card", { "library-cover-card--open": P[f.id] }])
          }, [
            s("a", {
              class: "library-cover-link",
              href: f.openUrl,
              "aria-label": `Read ${f.title}`
            }, [
              s("img", {
                class: "library-cover-image",
                src: f.coverUrl,
                alt: `Cover for ${f.title}`,
                loading: "lazy"
              }, null, 8, Bm)
            ], 8, Vm),
            s("form", {
              method: "post",
              action: f.starUrl,
              class: "library-cover-star-form",
              onSubmit: Fn((oe) => An(f, oe), ["prevent"])
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, zm),
              C[31] || (C[31] = s("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              s("input", {
                type: "hidden",
                name: "starred",
                value: f.starred ? "0" : "1"
              }, null, 8, Wm),
              s("button", {
                type: "submit",
                class: jr(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                "aria-pressed": f.starred ? "true" : "false",
                title: f.starred ? h(l)("library", "Unstar this publication") : h(l)("library", "Star this publication"),
                "aria-label": f.starred ? h(l)("library", "Unstar this publication") : h(l)("library", "Star this publication"),
                onClick: Fn((oe) => An(f, oe), ["prevent"])
              }, c(f.starred ? "★" : "☆"), 11, Km)
            ], 40, qm),
            s("div", Gm, [
              s("div", Ym, [
                s("h3", null, [
                  f.starred ? (w(), E("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": h(l)("library", "Starred")
                  }, "★", 8, Xm)) : Q("", !0),
                  pe(c(f.title), 1)
                ]),
                s("a", {
                  class: "library-cover-read",
                  href: f.openUrl
                }, c(h(l)("library", "Read")), 9, Jm)
              ]),
              s("details", {
                class: "library-cover-details",
                onToggle: (oe) => En(f.id, oe)
              }, [
                s("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${h(l)("library", "Show details and actions")}: ${f.title}`
                }, c(h(l)("library", "Details")), 9, Qm),
                s("div", eb, [
                  f.creators ? (w(), E("p", tb, c(f.creators), 1)) : Q("", !0),
                  s("dl", rb, [
                    s("div", nb, [
                      s("dt", null, c(h(l)("library", "Type")), 1),
                      s("dd", null, c(f.publicationType), 1)
                    ]),
                    f.publication ? (w(), E("div", ib, [
                      s("dt", null, c(h(l)("library", "Series")), 1),
                      s("dd", null, c(f.publication), 1)
                    ])) : Q("", !0),
                    f.publicationDate ? (w(), E("div", ab, [
                      s("dt", null, c(h(l)("library", "Date")), 1),
                      s("dd", null, c(f.publicationDate), 1)
                    ])) : Q("", !0),
                    f.workflowStatus ? (w(), E("div", sb, [
                      s("dt", null, c(h(l)("library", "Status")), 1),
                      s("dd", null, c(f.workflowStatus), 1)
                    ])) : Q("", !0),
                    f.hasScannerConflict ? (w(), E("div", lb, [
                      s("dt", null, c(h(l)("library", "Review")), 1),
                      s("dd", null, c(f.scannerConflictCount) + " fields", 1)
                    ])) : Q("", !0),
                    f.lastOpenedAt ? (w(), E("div", ob, [
                      s("dt", null, c(h(l)("library", "Last opened")), 1),
                      s("dd", null, c(f.lastOpenedAt), 1)
                    ])) : Q("", !0),
                    f.extension ? (w(), E("div", cb, [
                      s("dt", null, c(h(l)("library", "Format")) + ":", 1),
                      s("dd", null, c(ur(f.extension)), 1)
                    ])) : Q("", !0),
                    f.shelf ? (w(), E("div", ub, [
                      s("dt", null, c(h(l)("library", "Shelf")), 1),
                      s("dd", null, c(f.shelf), 1)
                    ])) : Q("", !0)
                  ]),
                  f.description ? (w(), E("p", db, c(f.description), 1)) : Q("", !0),
                  f.scanStatus !== "indexed" || f.scanError ? (w(), E("p", fb, [
                    pe(" scanStatus: " + c(f.scanStatus || "unknown"), 1),
                    f.scanError ? (w(), E("span", pb, " · scanError: " + c(f.scanError), 1)) : Q("", !0)
                  ])) : Q("", !0),
                  s("div", hb, [
                    wn(f).length === 0 ? (w(), E("span", mb, "No Nextcloud tags")) : (w(!0), E(ee, { key: 1 }, he(wn(f), (oe) => (w(), E("span", {
                      key: oe.id,
                      class: "library-tag"
                    }, c(oe.name), 1))), 128))
                  ]),
                  s("p", bb, [
                    s("a", {
                      href: f.filesUrl
                    }, c(h(l)("library", "Show in Files")), 9, yb),
                    C[32] || (C[32] = pe(" · ", -1)),
                    s("a", {
                      href: f.downloadUrl
                    }, c(h(l)("library", "Download source")), 9, gb),
                    C[33] || (C[33] = pe(" · ", -1)),
                    s("button", {
                      type: "button",
                      class: "library-link-button library-cover-details-drawer-button",
                      onClick: (oe) => Ye(f)
                    }, c(h(l)("library", "Details drawer")), 9, _b),
                    C[34] || (C[34] = pe(" · ", -1)),
                    s("a", {
                      href: f.detailsUrl
                    }, c(h(l)("library", "Details")), 9, vb)
                  ])
                ])
              ], 40, Zm)
            ])
          ], 2))), 128))
        ])),
        o.value.length > 0 ? (w(), E("nav", {
          key: 6,
          class: "library-pagination library-pagination--bottom",
          "aria-label": h(l)("library", "Catalogue pagination")
        }, [
          s("span", wb, [
            pe(c(h(l)("library", "Page")) + " " + c(z.value.page), 1),
            z.value.total > 0 ? (w(), E("span", Eb, " · " + c(z.value.from) + "–" + c(z.value.to), 1)) : Q("", !0)
          ]),
          z.value.previousUrl ? (w(), E("a", {
            key: 0,
            href: z.value.previousUrl
          }, c(h(l)("library", "Previous")), 9, Tb)) : (w(), E("span", Cb, c(h(l)("library", "Previous")), 1)),
          z.value.nextUrl ? (w(), E("a", {
            key: 2,
            href: z.value.nextUrl
          }, c(h(l)("library", "Next")), 9, xb)) : (w(), E("span", Ab, c(h(l)("library", "Next")), 1))
        ], 8, Sb)) : Q("", !0),
        X.value ? (w(), E("div", {
          key: 7,
          class: "library-detail-drawer-backdrop",
          onClick: Nt,
          "aria-hidden": "true"
        })) : Q("", !0),
        X.value ? (w(), E("aside", kb, [
          s("button", {
            type: "button",
            class: "library-detail-drawer-close",
            "aria-label": "Close details panel",
            onClick: Nt
          }, "×"),
          s("img", {
            class: "library-detail-drawer-cover",
            src: X.value.coverUrl,
            alt: `Cover for ${X.value.title}`,
            loading: "lazy"
          }, null, 8, Rb),
          s("p", Ob, c(X.value.publicationType || h(l)("library", "Publication")), 1),
          s("h3", Nb, c(X.value.title), 1),
          X.value.creators ? (w(), E("p", Pb, c(X.value.creators), 1)) : Q("", !0),
          X.value.description ? (w(), E("p", Ib, c(X.value.description), 1)) : Q("", !0),
          s("dl", Mb, [
            X.value.publication ? (w(), E("div", Lb, [
              s("dt", null, c(h(l)("library", "Series")), 1),
              s("dd", null, c(X.value.publication), 1)
            ])) : Q("", !0),
            X.value.publicationDate ? (w(), E("div", Ub, [
              s("dt", null, c(h(l)("library", "Date")), 1),
              s("dd", null, c(X.value.publicationDate), 1)
            ])) : Q("", !0),
            X.value.shelf ? (w(), E("div", Db, [
              s("dt", null, c(h(l)("library", "Shelf")), 1),
              s("dd", null, c(X.value.shelf), 1)
            ])) : Q("", !0)
          ]),
          s("p", Fb, [
            s("a", {
              class: "button primary",
              href: X.value.openUrl
            }, c(h(l)("library", "Read")), 9, Hb),
            s("a", {
              class: "button secondary",
              href: X.value.detailsUrl
            }, c(h(l)("library", "View full details")), 9, $b)
          ]),
          s("nav", {
            class: "library-detail-drawer-stepper",
            "aria-label": h(l)("library", "Browse neighbouring items")
          }, [
            s("button", {
              type: "button",
              class: "button secondary",
              disabled: !Ae.value,
              onClick: C[20] || (C[20] = (f) => Ht(Ae.value))
            }, c(h(l)("library", "Previous issue")), 9, Vb),
            s("button", {
              type: "button",
              class: "button secondary",
              disabled: !Oe.value,
              onClick: C[21] || (C[21] = (f) => Ht(Oe.value))
            }, c(h(l)("library", "Next issue")), 9, Bb)
          ], 8, jb)
        ])) : Q("", !0)
      ])
    ]));
  }
}, gs = fu("library", "catalogue", {}), Bn = document.querySelector("#library-vue-root"), _s = {
  ...gs,
  requestToken: Bn?.dataset.requestToken || gs.requestToken || ""
};
function Y(e) {
  return String(e ?? "");
}
function Il(e) {
  return Y(e).toUpperCase();
}
function zb(e, t, r, n = Y) {
  for (const i of t) {
    const a = document.createElement("option");
    a.value = Y(i), a.textContent = n(i), Y(i) === Y(r) && (a.selected = !0), e.appendChild(a);
  }
}
function vs(e, t, r, n, i = "") {
  const a = document.createElement("label");
  a.textContent = t;
  const o = document.createElement("input");
  o.type = r === "q" ? "search" : "text", o.name = r, o.value = Y(n), o.placeholder = i, a.appendChild(o), e.appendChild(a);
}
function Ur(e, t, r, n, i, a, o = Y) {
  const u = document.createElement("label");
  u.textContent = t;
  const p = document.createElement("select");
  p.name = r;
  const v = document.createElement("option");
  v.value = "", v.textContent = i, p.appendChild(v), zb(p, a, n, o), u.appendChild(p), e.appendChild(u);
}
function Dr(e) {
  const t = Y(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function Wb(e, t = {}) {
  return Y(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(Y(e || t?.publication || ""))}`);
}
function Kb(e) {
  return Y(e.discoveryPage) === "publication";
}
function Gb(e, t = {}) {
  return Y(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(Y(e))}`);
}
function Fi(e) {
  return Y(e.discoveryPage) === "year";
}
function Yb(e, t = {}) {
  return Y(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(Y(e))}`);
}
function Hi(e) {
  return Y(e.discoveryPage) === "creator";
}
function Xb(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && Y(n).trim() !== "");
}
function Jb() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function tn(e, t, r, n) {
  const i = document.createElement("a");
  return i.href = t, i.className = r, i.textContent = n, e.appendChild(i), i;
}
function Zb(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function Qb(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", l("library", "Catalogue search and filters")), vs(n, l("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), Ur(n, l("library", "Type"), "type", r.type, l("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), vs(n, l("library", "Nextcloud tag"), "tag", r.tag, "photography"), Ur(n, l("library", "Format"), "format", r.format, l("library", "All formats"), e.formats || [], Il), Ur(n, l("library", "Shelf"), "shelf", r.shelf, l("library", "All shelves"), e.shelves || []), Ur(n, l("library", "Scan status"), "status", r.status, l("library", "All scan statuses"), e.scanStatuses || []), Ur(n, l("library", "Sort"), "sort", r.sort || "title", l("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Ur(n, l("library", "Page size"), "limit", t.limit || 100, l("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", l("library", "Apply catalogue filters")), i.textContent = l("library", "Apply filters");
  const a = document.createElement("a");
  return a.href = "?", a.className = "button secondary", a.setAttribute("aria-label", l("library", "Clear catalogue filters")), a.textContent = l("library", "Clear"), n.append(i, a), n;
}
function ey() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", i = e.get("batchMetadataSkipped") || "0", a = document.createElement("p");
  return a.className = "library-notice library-batch-metadata-apply-result", a.textContent = l("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${i} skipped.`), a;
}
function ty(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", l("library", "Quick catalogue filters"));
  let i = null;
  const a = () => {
    window.clearTimeout(i), i = window.setTimeout(() => n.requestSubmit(), 350);
  };
  for (const [S, I] of Object.entries(r)) {
    if (["q", "sort", "starred"].includes(S) || Y(I).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = S, j.value = Y(I), n.appendChild(j);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = l("library", "Search");
  const u = document.createElement("input");
  u.type = "search", u.name = "q", u.value = Y(r.q), u.placeholder = "Camera, Eco, Rolleiflex...", u.addEventListener("input", a), o.appendChild(u), n.appendChild(o);
  const p = [
    [l("library", "Sort"), "sort", r.sort || "title", [["title", l("library", "Title")], ["recent", l("library", "Recently added")], ["publicationDate", l("library", "Publication date")], ["publication", l("library", "Series")], ["lastOpened", l("library", "Recently opened")], ["format", l("library", "Format")]]],
    [l("library", "Starred"), "starred", r.starred || "", [["", l("library", "All")], ["1", l("library", "Starred")]]],
    [l("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [S, I, j, se] of p) {
    const W = document.createElement("label");
    W.textContent = S;
    const ue = document.createElement("select");
    ue.name = I;
    for (const [le, z] of se) {
      const U = document.createElement("option");
      U.value = Y(le), U.textContent = Y(z), Y(le) === Y(j) && (U.selected = !0), ue.appendChild(U);
    }
    ue.addEventListener("change", () => n.requestSubmit()), W.appendChild(ue), n.appendChild(W);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", l("library", "Apply catalogue filters")), v.textContent = l("library", "Apply filters");
  const y = document.createElement("a");
  return y.href = "?", y.className = "button secondary", y.setAttribute("aria-label", l("library", "Clear catalogue filters")), y.textContent = l("library", "Clear all"), n.append(v, y), n;
}
function ry(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, i = Y(e.settingsUrl || ""), a = Y(e.metadataExportUrl || ""), o = Y(e.batchTagUrl || "/apps/library/bulk/tags"), u = Y(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), p = Y(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = Y(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), y = Y(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), S = document.createElement("div");
  S.className = "library-vue-catalogue library-vue-fallback", S.dataset.vueFallback = "true";
  const I = document.createElement("section");
  I.className = "library-panel", I.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const se = document.createElement("div"), W = document.createElement("h2");
  W.id = "library-catalogue-heading", W.textContent = l("library", "Publication catalogue");
  const ue = document.createElement("p");
  ue.className = "library-muted", ue.textContent = l("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), se.append(W, ue);
  const le = document.createElement("nav");
  if (le.className = "library-catalogue-toolbar", le.setAttribute("aria-label", l("library", "Library actions")), i) {
    const N = document.createElement("a");
    N.href = i, N.className = "button secondary", N.setAttribute("aria-label", "Open Library settings"), N.textContent = l("library", "Settings"), le.appendChild(N);
  }
  if (a) {
    const N = document.createElement("a");
    N.href = a, N.className = "button secondary", N.setAttribute("aria-label", "Export corrected metadata"), N.textContent = l("library", "Export corrected metadata"), le.appendChild(N);
  }
  if (e.metadataSidecarManifestUrl) {
    const N = document.createElement("a");
    N.href = e.metadataSidecarManifestUrl, N.className = "button secondary", N.setAttribute("aria-label", "Export sidecar manifest"), N.textContent = l("library", "Sidecar manifest"), le.appendChild(N);
  }
  if (e.metadataSidecarBundleUrl) {
    const N = document.createElement("a");
    N.href = e.metadataSidecarBundleUrl, N.className = "button secondary", N.setAttribute("aria-label", "Export sidecar ZIP"), N.textContent = l("library", "Sidecar ZIP"), le.appendChild(N);
  }
  j.append(se, le), I.appendChild(j);
  const z = ey();
  z && I.appendChild(z), I.appendChild(ty(e, n));
  const U = document.createElement("details");
  U.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = l("library", "Show catalogue filters"), U.append(V, Qb(e, n)), I.appendChild(U), Kb(e) || Fi(e) || Hi(e)) {
    const N = document.createElement("section");
    N.className = "library-discovery-header", N.setAttribute("aria-labelledby", "library-discovery-heading");
    const P = document.createElement("p");
    P.className = "library-muted", P.textContent = Hi(e) ? l("library", "Creator") : Fi(e) ? l("library", "Publication year") : l("library", "Publication / series");
    const H = document.createElement("h3");
    H.id = "library-discovery-heading", H.textContent = Y(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const te = document.createElement("p");
    te.className = "library-muted", te.textContent = `${n.total ?? r.length} ${Hi(e) ? l("library", "items by this creator. Sorted by publication context when available.") : Fi(e) ? l("library", "items from this publication year. Sorted by publication date when available.") : l("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const re = document.createElement("a");
    re.href = "/apps/library/", re.className = "button secondary", re.textContent = l("library", "Back to full catalogue"), N.append(P, H, te, re), I.appendChild(N);
  }
  const ce = document.createElement("p");
  ce.className = "library-muted library-filter-result-summary", ce.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Me = document.createElement("a");
  Me.href = "?", Me.textContent = ` ${l("library", "Clear all filters")}`, ce.appendChild(Me), I.appendChild(ce);
  const Ne = document.createElement("details");
  Ne.className = "library-batch-actions";
  const Ve = document.createElement("summary");
  Ve.textContent = `${l("library", "Batch actions for current results")} (${n.total ?? r.length} ${l("library", "Current filter result")})`;
  const we = document.createElement("form");
  we.method = "post", we.action = o, we.className = "library-batch-tag-form";
  const Le = Dr(e);
  Le && we.appendChild(Le);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (Y(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = Y(P), we.appendChild(H);
  }
  const nt = document.createElement("label");
  nt.textContent = l("library", "Apply Nextcloud tag to current results");
  const dt = document.createElement("input");
  dt.type = "text", dt.name = "nextcloudTagName", dt.placeholder = "batch-review", nt.appendChild(dt);
  const Ge = document.createElement("button");
  Ge.type = "submit", Ge.className = "button secondary", Ge.textContent = l("library", "Apply Nextcloud tag to current results");
  const Et = document.createElement("p");
  Et.className = "library-muted", Et.textContent = l("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), we.append(nt, Ge, Et);
  const Fe = document.createElement("form");
  Fe.method = "post", Fe.action = u, Fe.className = "library-batch-tag-remove-form";
  const Ue = Dr(e);
  Ue && Fe.appendChild(Ue);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (Y(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = Y(P), Fe.appendChild(H);
  }
  const ye = document.createElement("label");
  ye.textContent = l("library", "Nextcloud tag");
  const fe = document.createElement("input");
  fe.type = "text", fe.name = "nextcloudTagName", fe.setAttribute("list", "library-nextcloud-tag-suggestions"), fe.placeholder = l("library", "e.g. Review"), fe.autocomplete = "off", ye.appendChild(fe);
  const Be = document.createElement("button");
  Be.type = "submit", Be.className = "button secondary", Be.textContent = l("library", "Remove tag from current results");
  const ge = document.createElement("p");
  ge.className = "library-muted", ge.textContent = l("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), Fe.append(ye, Be, ge);
  const Te = document.createElement("form");
  Te.method = "post", Te.action = p, Te.className = "library-batch-metadata-reset-form";
  const qe = Dr(e);
  qe && Te.appendChild(qe);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (Y(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = Y(P), Te.appendChild(H);
  }
  const Je = document.createElement("input");
  Je.type = "hidden", Je.name = "scannerConflicts", Je.value = "1";
  const me = document.createElement("button");
  me.type = "submit", me.className = "button secondary", me.textContent = l("library", "Reset filtered metadata");
  const Ot = document.createElement("p");
  Ot.className = "library-muted", Ot.textContent = l("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Te.append(Je, me, Ot);
  const ze = document.createElement("form");
  ze.method = "post", ze.action = v, ze.className = "library-batch-metadata-edit-preview-form", ze.target = "_blank";
  const ft = Dr(e);
  ft && ze.appendChild(ft);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (Y(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = Y(P), ze.appendChild(H);
  }
  const gt = document.createElement("label");
  gt.textContent = l("library", "Metadata field");
  const Tt = document.createElement("select");
  Tt.name = "bulkEditField";
  for (const [N, P] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const H = document.createElement("option");
    H.value = N, H.textContent = l("library", P), Tt.appendChild(H);
  }
  gt.appendChild(Tt);
  const it = document.createElement("label");
  it.textContent = l("library", "Preview value");
  const at = document.createElement("input");
  at.type = "text", at.name = "bulkEditValue", at.placeholder = "magazine, de, photography...", at.autocomplete = "off", it.appendChild(at);
  const m = document.createElement("button");
  m.type = "submit", m.className = "button secondary", m.textContent = l("library", "Preview & apply metadata edit");
  const b = document.createElement("p");
  b.className = "library-muted", b.textContent = l("library", "Preview first, then apply from the review page."), ze.append(gt, it, m, b);
  const _ = document.createElement("form");
  _.method = "post", _.action = y, _.className = "library-batch-cover-refresh-form";
  const O = Dr(e);
  O && _.appendChild(O);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (Y(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = Y(P), _.appendChild(H);
  }
  const T = document.createElement("button");
  T.type = "submit", T.className = "button secondary", T.textContent = l("library", "Request fresh cover previews");
  const A = document.createElement("p");
  A.className = "library-muted", A.textContent = l("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(T, A), Ne.append(Ve, we, Fe, Te, ze, _), I.appendChild(Ne);
  const M = document.createElement("nav");
  M.className = "library-pagination", M.setAttribute("aria-label", l("library", "Catalogue pagination"));
  const D = document.createElement("span");
  D.className = "library-pagination-range", D.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, M.appendChild(D), I.appendChild(M);
  const L = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], x = document.createElement("details");
  x.className = L.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const G = document.createElement("summary");
  G.className = "library-periodical-groups-summary", G.textContent = l("library", "Show top series and periodicals"), x.appendChild(G);
  const $ = document.createElement("h3");
  $.textContent = L.length > 0 ? l("library", "Top series and periodicals") : l("library", "No series or periodicals found yet");
  const K = document.createElement("p");
  if (K.className = "library-muted", K.textContent = L.length > 0 ? l("library", "Jump into recurring publications with one click.") : l("library", "Add publication or series names in item details to build this shortcut panel."), x.append($, K), L.length > 0) {
    const N = document.createElement("ul");
    for (const P of L) {
      const H = document.createElement("li"), te = document.createElement("a");
      te.href = Wb(P.publication, P), te.textContent = Y(P.publication);
      const re = document.createElement("span");
      re.className = "library-muted", re.textContent = `${P.itemCount} items`, H.append(te, re), N.appendChild(H);
    }
    x.appendChild(N);
  }
  I.appendChild(x);
  const Z = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (Z.length > 0) {
    const N = document.createElement("details");
    N.className = "library-year-groups";
    const P = document.createElement("summary");
    P.className = "library-periodical-groups-summary", P.textContent = l("library", "Show publication years");
    const H = document.createElement("h3");
    H.textContent = l("library", "Top publication years");
    const te = document.createElement("p");
    te.className = "library-muted", te.textContent = l("library", "Jump into dated books, magazines, journals and comics by year.");
    const re = document.createElement("ul");
    for (const _e of Z) {
      const X = document.createElement("li"), xe = document.createElement("a");
      xe.href = Gb(_e, e), xe.textContent = Y(_e), X.appendChild(xe), re.appendChild(X);
    }
    N.append(P, H, te, re), I.appendChild(N);
  }
  const ie = Array.isArray(e.creators) ? e.creators : [];
  if (ie.length > 0) {
    const N = document.createElement("details");
    N.className = "library-creator-groups";
    const P = document.createElement("summary");
    P.className = "library-periodical-groups-summary", P.textContent = l("library", "Show creators");
    const H = document.createElement("h3");
    H.textContent = l("library", "Top creators");
    const te = document.createElement("p");
    te.className = "library-muted", te.textContent = l("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const re = document.createElement("ul");
    for (const _e of ie) {
      const X = document.createElement("li"), xe = document.createElement("a");
      xe.href = Yb(_e, e), xe.textContent = Y(_e), X.appendChild(xe), re.appendChild(X);
    }
    N.append(P, H, te, re), I.appendChild(N);
  }
  if (r.length === 0) {
    const N = document.createElement("div"), P = Number(e.rootCount || 0), H = Number(e.enabledRootCount || 0), te = Xb(e);
    N.className = "library-empty-content", (P === 0 || H === 0) && N.classList.add("library-first-run-guidance"), te && P > 0 && H > 0 && N.classList.add("library-filter-empty-state"), N.setAttribute("role", "status");
    const re = document.createElement("h3"), _e = document.createElement("p");
    _e.className = "library-muted";
    const X = document.createElement("p");
    X.className = "library-empty-actions", P === 0 ? (re.textContent = l("library", "Start with one Library root"), _e.textContent = l("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), tn(X, i, "button primary", l("library", "Add a Library root")), Zb(X, l("library", "Run a scan after saving a root"))) : H === 0 ? (re.textContent = l("library", "No enabled Library roots"), _e.textContent = l("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), tn(X, i, "button primary", l("library", "Open Library settings"))) : te ? (re.textContent = l("library", "No matches for the current filters"), _e.textContent = l("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), tn(X, Jb(), "button secondary", l("library", "Clear search")), tn(X, "?", "button primary", l("library", "Clear all filters"))) : (re.textContent = l("library", "No catalogue items yet"), _e.textContent = l("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), tn(X, i, "button primary", l("library", "Run a scan from settings"))), N.append(re, _e, X), I.appendChild(N);
  } else {
    const N = document.createElement("div");
    N.className = "library-cover-gallery";
    for (const P of r) {
      const H = document.createElement("article");
      H.className = "library-cover-card";
      const te = document.createElement("a");
      te.className = "library-cover-link", te.href = Y(P.openUrl || "#"), te.setAttribute("aria-label", `Read ${Y(P.title || "publication")}`);
      const re = document.createElement("img");
      re.className = "library-cover-image", re.src = Y(P.coverUrl || ""), re.alt = `Cover for ${Y(P.title || "publication")}`, re.loading = "lazy", te.appendChild(re);
      const _e = Dr(e), X = document.createElement("form");
      X.method = "post", X.action = Y(P.starUrl || ""), X.className = "library-cover-star-form", _e && X.appendChild(_e);
      const xe = document.createElement("input");
      xe.type = "hidden", xe.name = "returnTo", xe.value = "catalogue";
      const Ae = document.createElement("input");
      Ae.type = "hidden", Ae.name = "starred", Ae.value = P.starred ? "0" : "1";
      const Oe = document.createElement("button");
      Oe.type = "submit", Oe.className = P.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Oe.setAttribute("aria-pressed", P.starred ? "true" : "false"), Oe.setAttribute("aria-label", P.starred ? l("library", "Unstar this publication") : l("library", "Star this publication")), Oe.title = P.starred ? l("library", "Unstar this publication") : l("library", "Star this publication"), Oe.textContent = P.starred ? "★" : "☆", X.append(xe, Ae, Oe);
      const Ye = document.createElement("div");
      Ye.className = "library-cover-summary";
      const Nt = document.createElement("h3");
      if (Nt.textContent = Y(P.title || "Untitled publication"), Ye.appendChild(Nt), P.creators) {
        const At = document.createElement("p");
        At.className = "library-creator", At.textContent = Y(P.creators), Ye.appendChild(At);
      }
      const Ht = document.createElement("dl");
      Ht.className = "library-cover-detail-list";
      const Ct = [
        ["Type", Y(P.publicationType || "other")],
        ["Format", P.extension ? Il(P.extension) : ""],
        ["Shelf", P.shelf ? Y(P.shelf) : ""]
      ].filter(([, At]) => At !== "");
      for (const [At, Pt] of Ct) {
        const It = document.createElement("div");
        It.className = "library-cover-detail-chip";
        const Yt = document.createElement("dt");
        Yt.textContent = At;
        const Ze = document.createElement("dd");
        Ze.textContent = Pt, It.append(Yt, Ze), Ht.appendChild(It);
      }
      Ye.appendChild(Ht);
      const _t = document.createElement("p"), xt = document.createElement("a");
      xt.href = Y(P.openUrl || "#"), xt.textContent = l("library", "Read");
      const lr = document.createElement("a");
      lr.href = Y(P.filesUrl || "#"), lr.textContent = l("library", "Show in Files");
      const Gt = document.createElement("a");
      Gt.href = Y(P.downloadUrl || "#"), Gt.textContent = l("library", "Download source");
      const or = document.createElement("a");
      or.href = Y(P.detailsUrl || "#"), or.textContent = l("library", "Details"), _t.append(xt, document.createTextNode(" · "), lr, document.createTextNode(" · "), Gt, document.createTextNode(" · "), or), Ye.appendChild(_t), H.append(te, X, Ye), N.appendChild(H);
    }
    I.appendChild(N);
  }
  return S.appendChild(I), S;
}
if (Bn)
  try {
    cu(qb, { state: _s }).mount(Bn);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Bn.replaceChildren(ry(_s));
  }
//# sourceMappingURL=library-main.mjs.map
