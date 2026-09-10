// @__NO_SIDE_EFFECTS__
function ni(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const xe = {}, zr = [], Jt = () => {
}, Cs = () => !1, ea = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ta = (e) => e.startsWith("onUpdate:"), tt = Object.assign, ai = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, jl = Object.prototype.hasOwnProperty, Se = (e, t) => jl.call(e, t), ne = Array.isArray, gr = (e) => Tn(e) === "[object Map]", Nr = (e) => Tn(e) === "[object Set]", Ti = (e) => Tn(e) === "[object Date]", de = (e) => typeof e == "function", Fe = (e) => typeof e == "string", Zt = (e) => typeof e == "symbol", Te = (e) => e !== null && typeof e == "object", Ts = (e) => (Te(e) || de(e)) && de(e.then) && de(e.catch), xs = Object.prototype.toString, Tn = (e) => xs.call(e), Vl = (e) => Tn(e).slice(8, -1), As = (e) => Tn(e) === "[object Object]", ii = (e) => Fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, pn = /* @__PURE__ */ ni(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ra = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, ql = /-\w/g, Dt = ra(
  (e) => e.replace(ql, (t) => t.slice(1).toUpperCase())
), Bl = /\B([A-Z])/g, Pr = ra(
  (e) => e.replace(Bl, "-$1").toLowerCase()
), ks = ra((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ea = ra(
  (e) => e ? `on${ks(e)}` : ""
), Xt = (e, t) => !Object.is(e, t), jn = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Rs = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, na = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let xi;
const aa = () => xi || (xi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function si(e) {
  if (ne(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], a = Fe(n) ? Gl(n) : si(n);
      if (a)
        for (const i in a)
          t[i] = a[i];
    }
    return t;
  } else if (Fe(e) || Te(e))
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
function Lt(e) {
  let t = "";
  if (Fe(e))
    t = e;
  else if (ne(e))
    for (let r = 0; r < e.length; r++) {
      const n = Lt(e[r]);
      n && (t += n + " ");
    }
  else if (Te(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Yl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xl = /* @__PURE__ */ ni(Yl);
function Os(e) {
  return !!e || e === "";
}
function Jl(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = _r(e[n], t[n]);
  return r;
}
function Ai(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const a of e) {
    let i = -1;
    for (let o = 0; o < r.length; o++)
      if (!n[o] && _r(a, r[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    n[i] = 1;
  }
  return !0;
}
function _r(e, t) {
  if (e === t) return !0;
  let r = Ti(e), n = Ti(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Zt(e), n = Zt(t), r || n)
    return e === t;
  if (r = ne(e), n = ne(t), r || n)
    return r && n ? Jl(e, t) : !1;
  if (r = Te(e), n = Te(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = gr(e), n = gr(t), r || n || (r = Nr(e), n = Nr(t), r || n))
      return r && n ? Ai(e, t) : !1;
    const a = Object.keys(e).length, i = Object.keys(t).length;
    if (a !== i)
      return !1;
    for (const o in e) {
      const u = e.hasOwnProperty(o), p = t.hasOwnProperty(o);
      if (u && !p || !u && p || !_r(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((r) => _r(r, t));
}
const Ns = (e) => !!(e && e.__v_isRef === !0), c = (e) => Fe(e) ? e : e == null ? "" : ne(e) || Te(e) && (e.toString === xs || !de(e.toString)) ? Ns(e) ? c(e.value) : JSON.stringify(e, Ps, 2) : String(e), Ps = (e, t) => Ns(t) ? Ps(e, t.value) : gr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, a], i) => (r[Ca(n, i) + " =>"] = a, r),
    {}
  )
} : Nr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Ca(r))
} : Zt(t) ? Ca(t) : Te(t) && !ne(t) && !As(t) ? String(t) : t, Ca = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Zt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
let Je;
class Ql {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Je && (Je.active ? (this.parent = Je, this.index = (Je.scopes || (Je.scopes = [])).push(
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
      const r = Je;
      try {
        return Je = this, t();
      } finally {
        Je = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Je, Je = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Je === this)
        Je = this.prevScope;
      else {
        let t = Je;
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
  return Je;
}
let Re;
const Ta = /* @__PURE__ */ new WeakSet();
class Is {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Je && (Je.active ? Je.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ta.has(this) && (Ta.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ds(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ki(this), Ms(this);
    const t = Re, r = Mt;
    Re = this, Mt = !0;
    try {
      return this.fn();
    } finally {
      Us(this), Re = t, Mt = r, this.flags &= -3;
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
    this.flags & 64 ? Ta.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let Ls = 0, hn, mn;
function Ds(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = mn, mn = e;
    return;
  }
  e.next = hn, hn = e;
}
function li() {
  Ls++;
}
function oi() {
  if (--Ls > 0)
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
    if (t.dep.version !== t.version || t.dep.computed && (Fs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Fs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === _n) || (e.globalVersion = _n, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !za(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Re, n = Mt;
  Re = e, Mt = !0;
  try {
    Ms(e);
    const a = e.fn(e._value);
    (t.version === 0 || Xt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    Re = r, Mt = n, Us(e), e.flags &= -3;
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
let Mt = !0;
const Hs = [];
function ur() {
  Hs.push(Mt), Mt = !1;
}
function dr() {
  const e = Hs.pop();
  Mt = e === void 0 ? !0 : e;
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
    if (!Re || !Mt || Re === this.computed)
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
const Wa = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ Symbol(
  ""
), Ka = /* @__PURE__ */ Symbol(
  ""
), vn = /* @__PURE__ */ Symbol(
  ""
);
function Qe(e, t, r) {
  if (Mt && Re) {
    let n = Wa.get(e);
    n || Wa.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(r);
    a || (n.set(r, a = new ui()), a.map = n, a.key = r), a.track();
  }
}
function lr(e, t, r, n, a, i) {
  const o = Wa.get(e);
  if (!o) {
    _n++;
    return;
  }
  const u = (p) => {
    p && p.trigger();
  };
  if (li(), t === "clear")
    o.forEach(u);
  else {
    const p = ne(e), w = p && ii(r);
    if (p && r === "length") {
      const y = Number(n);
      o.forEach((E, I) => {
        (I === "length" || I === vn || !Zt(I) && I >= y) && u(E);
      });
    } else
      switch ((r !== void 0 || o.has(void 0)) && u(o.get(r)), w && u(o.get(vn)), t) {
        case "add":
          p ? w && u(o.get("length")) : (u(o.get(kr)), gr(e) && u(o.get(Ka)));
          break;
        case "delete":
          p || (u(o.get(kr)), gr(e) && u(o.get(Ka)));
          break;
        case "set":
          gr(e) && u(o.get(kr));
          break;
      }
  }
  oi();
}
function $r(e) {
  const t = /* @__PURE__ */ we(e);
  return t === e ? t : (Qe(t, "iterate", vn), /* @__PURE__ */ Ot(e) ? t : t.map(Ut));
}
function ia(e) {
  return Qe(e = /* @__PURE__ */ we(e), "iterate", vn), e;
}
function Gt(e, t) {
  return /* @__PURE__ */ fr(e) ? Yr(/* @__PURE__ */ Rr(e) ? Ut(t) : t) : Ut(t);
}
const no = {
  __proto__: null,
  [Symbol.iterator]() {
    return xa(this, Symbol.iterator, (e) => Gt(this, e));
  },
  concat(...e) {
    return $r(this).concat(
      ...e.map((t) => ne(t) ? $r(t) : t)
    );
  },
  entries() {
    return xa(this, "entries", (e) => (e[1] = Gt(this, e[1]), e));
  },
  every(e, t) {
    return nr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return nr(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => Gt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return nr(
      this,
      "find",
      e,
      t,
      (r) => Gt(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return nr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return nr(
      this,
      "findLast",
      e,
      t,
      (r) => Gt(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return nr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return nr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Aa(this, "includes", e);
  },
  indexOf(...e) {
    return Aa(this, "indexOf", e);
  },
  join(e) {
    return $r(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Aa(this, "lastIndexOf", e);
  },
  map(e, t) {
    return nr(this, "map", e, t, void 0, arguments);
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
    return nr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return nn(this, "splice", e);
  },
  toReversed() {
    return $r(this).toReversed();
  },
  toSorted(e) {
    return $r(this).toSorted(e);
  },
  toSpliced(...e) {
    return $r(this).toSpliced(...e);
  },
  unshift(...e) {
    return nn(this, "unshift", e);
  },
  values() {
    return xa(this, "values", (e) => Gt(this, e));
  }
};
function xa(e, t, r) {
  const n = ia(e), a = n[t]();
  return n !== e && !/* @__PURE__ */ Ot(e) && (a._next = a.next, a.next = () => {
    const i = a._next();
    return i.done || (i.value = r(i.value)), i;
  }), a;
}
const ao = Array.prototype;
function nr(e, t, r, n, a, i) {
  const o = ia(e), u = o !== e && !/* @__PURE__ */ Ot(e), p = o[t];
  if (p !== ao[t]) {
    const E = p.apply(e, i);
    return u ? Ut(E) : E;
  }
  let w = r;
  o !== e && (u ? w = function(E, I) {
    return r.call(this, Gt(e, E), I, e);
  } : r.length > 2 && (w = function(E, I) {
    return r.call(this, E, I, e);
  }));
  const y = p.call(o, w, n);
  return u && a ? a(y) : y;
}
function Ri(e, t, r, n) {
  const a = ia(e), i = a !== e && !/* @__PURE__ */ Ot(e);
  let o = r, u = !1;
  a !== e && (i ? (u = n.length === 0, o = function(w, y, E) {
    return u && (u = !1, w = Gt(e, w)), r.call(this, w, Gt(e, y), E, e);
  }) : r.length > 3 && (o = function(w, y, E) {
    return r.call(this, w, y, E, e);
  }));
  const p = a[t](o, ...n);
  return u ? Gt(e, p) : p;
}
function Aa(e, t, r) {
  const n = /* @__PURE__ */ we(e);
  Qe(n, "iterate", vn);
  const a = n[t](...r);
  return (a === -1 || a === !1) && /* @__PURE__ */ pi(r[0]) ? (r[0] = /* @__PURE__ */ we(r[0]), n[t](...r)) : a;
}
function nn(e, t, r = []) {
  ur(), li();
  const n = (/* @__PURE__ */ we(e))[t].apply(e, r);
  return oi(), dr(), n;
}
const io = /* @__PURE__ */ ni("__proto__,__v_isRef,__isVue"), js = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Zt)
);
function so(e) {
  Zt(e) || (e = String(e));
  const t = /* @__PURE__ */ we(this);
  return Qe(t, "has", e), t.hasOwnProperty(e);
}
class Vs {
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
      return n === (a ? i ? yo : Ws : i ? zs : Bs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = ne(t);
    if (!a) {
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
      /* @__PURE__ */ et(t) ? t : n
    );
    if ((Zt(r) ? js.has(r) : io(r)) || (a || Qe(t, "get", r), i))
      return u;
    if (/* @__PURE__ */ et(u)) {
      const p = o && ii(r) ? u : u.value;
      return a && Te(p) ? /* @__PURE__ */ Ya(p) : p;
    }
    return Te(u) ? a ? /* @__PURE__ */ Ya(u) : /* @__PURE__ */ ir(u) : u;
  }
}
class qs extends Vs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, a) {
    let i = t[r];
    const o = ne(t) && ii(r);
    if (!this._isShallow) {
      const w = /* @__PURE__ */ fr(i);
      if (!/* @__PURE__ */ Ot(n) && !/* @__PURE__ */ fr(n) && (i = /* @__PURE__ */ we(i), n = /* @__PURE__ */ we(n)), !o && /* @__PURE__ */ et(i) && !/* @__PURE__ */ et(n))
        return w || (i.value = n), !0;
    }
    const u = o ? Number(r) < t.length : Se(t, r), p = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ et(t) ? t : a
    );
    return t === /* @__PURE__ */ we(a) && p && (u ? Xt(n, i) && lr(t, "set", r, n) : lr(t, "add", r, n)), p;
  }
  deleteProperty(t, r) {
    const n = Se(t, r);
    t[r];
    const a = Reflect.deleteProperty(t, r);
    return a && n && lr(t, "delete", r, void 0), a;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Zt(r) || !js.has(r)) && Qe(t, "has", r), n;
  }
  ownKeys(t) {
    return Qe(
      t,
      "iterate",
      ne(t) ? "length" : kr
    ), Reflect.ownKeys(t);
  }
}
class lo extends Vs {
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
const oo = /* @__PURE__ */ new qs(), co = /* @__PURE__ */ new lo(), uo = /* @__PURE__ */ new qs(!0);
const Ga = (e) => e, Ln = (e) => Reflect.getPrototypeOf(e);
function fo(e, t, r) {
  return function(...n) {
    const a = this.__v_raw, i = /* @__PURE__ */ we(a), o = gr(i), u = e === "entries" || e === Symbol.iterator && o, p = e === "keys" && o, w = a[e](...n), y = r ? Ga : t ? Yr : Ut;
    return !t && Qe(
      i,
      "iterate",
      p ? Ka : kr
    ), tt(
      // inheriting all iterator properties
      Object.create(w),
      {
        // iterator protocol
        next() {
          const { value: E, done: I } = w.next();
          return I ? { value: E, done: I } : {
            value: u ? [y(E[0]), y(E[1])] : y(E),
            done: I
          };
        }
      }
    );
  };
}
function Dn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function po(e, t) {
  const r = {
    get(a) {
      const i = this.__v_raw, o = /* @__PURE__ */ we(i), u = /* @__PURE__ */ we(a);
      e || (Xt(a, u) && Qe(o, "get", a), Qe(o, "get", u));
      const { has: p } = Ln(o), w = t ? Ga : e ? Yr : Ut;
      if (p.call(o, a))
        return w(i.get(a));
      if (p.call(o, u))
        return w(i.get(u));
      i !== o && i.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Qe(/* @__PURE__ */ we(a), "iterate", kr), a.size;
    },
    has(a) {
      const i = this.__v_raw, o = /* @__PURE__ */ we(i), u = /* @__PURE__ */ we(a);
      return e || (Xt(a, u) && Qe(o, "has", a), Qe(o, "has", u)), a === u ? i.has(a) : i.has(a) || i.has(u);
    },
    forEach(a, i) {
      const o = this, u = o.__v_raw, p = /* @__PURE__ */ we(u), w = t ? Ga : e ? Yr : Ut;
      return !e && Qe(p, "iterate", kr), u.forEach((y, E) => a.call(i, w(y), w(E), o));
    }
  };
  return tt(
    r,
    e ? {
      add: Dn("add"),
      set: Dn("set"),
      delete: Dn("delete"),
      clear: Dn("clear")
    } : {
      add(a) {
        const i = /* @__PURE__ */ we(this), o = Ln(i), u = /* @__PURE__ */ we(a), p = !t && !/* @__PURE__ */ Ot(a) && !/* @__PURE__ */ fr(a) ? u : a;
        return o.has.call(i, p) || Xt(a, p) && o.has.call(i, a) || Xt(u, p) && o.has.call(i, u) || (i.add(p), lr(i, "add", p, p)), this;
      },
      set(a, i) {
        !t && !/* @__PURE__ */ Ot(i) && !/* @__PURE__ */ fr(i) && (i = /* @__PURE__ */ we(i));
        const o = /* @__PURE__ */ we(this), { has: u, get: p } = Ln(o);
        let w = u.call(o, a);
        w || (a = /* @__PURE__ */ we(a), w = u.call(o, a));
        const y = p.call(o, a);
        return o.set(a, i), w ? Xt(i, y) && lr(o, "set", a, i) : lr(o, "add", a, i), this;
      },
      delete(a) {
        const i = /* @__PURE__ */ we(this), { has: o, get: u } = Ln(i);
        let p = o.call(i, a);
        p || (a = /* @__PURE__ */ we(a), p = o.call(i, a)), u && u.call(i, a);
        const w = i.delete(a);
        return p && lr(i, "delete", a, void 0), w;
      },
      clear() {
        const a = /* @__PURE__ */ we(this), i = a.size !== 0, o = a.clear();
        return i && lr(
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
    Se(r, a) && a in n ? r : n,
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
const Bs = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap();
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
function ir(e) {
  return /* @__PURE__ */ fr(e) ? e : fi(
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
    zs
  );
}
// @__NO_SIDE_EFFECTS__
function Ya(e) {
  return fi(
    e,
    !0,
    co,
    bo,
    Ws
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
function Rr(e) {
  return /* @__PURE__ */ fr(e) ? /* @__PURE__ */ Rr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function fr(e) {
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
function we(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ we(t) : e;
}
function vo(e) {
  return !Se(e, "__v_skip") && Object.isExtensible(e) && Rs(e, "__v_skip", !0), e;
}
const Ut = (e) => Te(e) ? /* @__PURE__ */ ir(e) : e, Yr = (e) => Te(e) ? /* @__PURE__ */ Ya(e) : e;
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
    this.dep = new ui(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ we(t), this._value = r ? t : Ut(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ot(t) || /* @__PURE__ */ fr(t);
    t = n ? t : /* @__PURE__ */ we(t), Xt(t, r) && (this._rawValue = t, this._value = n ? t : Ut(t), this.dep.trigger());
  }
}
function f(e) {
  return /* @__PURE__ */ et(e) ? e.value : e;
}
const Eo = {
  get: (e, t, r) => t === "__v_raw" ? e : f(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const a = e[t];
    return /* @__PURE__ */ et(a) && !/* @__PURE__ */ et(r) ? (a.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Ks(e) {
  return /* @__PURE__ */ Rr(e) ? e : new Proxy(e, Eo);
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
      return Ds(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Fs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function To(e, t, r = !1) {
  let n, a;
  return de(e) ? n = e : (n = e.get, a = e.set), new Co(n, a, r);
}
const Mn = {}, zn = /* @__PURE__ */ new WeakMap();
let Cr;
function xo(e, t = !1, r = Cr) {
  if (r) {
    let n = zn.get(r);
    n || zn.set(r, n = []), n.push(e);
  }
}
function Ao(e, t, r = xe) {
  const { immediate: n, deep: a, once: i, scheduler: o, augmentJob: u, call: p } = r, w = (V) => a ? V : /* @__PURE__ */ Ot(V) || a === !1 || a === 0 ? or(V, 1) : or(V);
  let y, E, I, j, se = !1, K = !1;
  if (/* @__PURE__ */ et(e) ? (E = () => e.value, se = /* @__PURE__ */ Ot(e)) : /* @__PURE__ */ Rr(e) ? (E = () => w(e), se = !0) : ne(e) ? (K = !0, se = e.some((V) => /* @__PURE__ */ Rr(V) || /* @__PURE__ */ Ot(V)), E = () => e.map((V) => {
    if (/* @__PURE__ */ et(V))
      return V.value;
    if (/* @__PURE__ */ Rr(V))
      return w(V);
    if (de(V))
      return p ? p(V, 2) : V();
  })) : de(e) ? t ? E = p ? () => p(e, 2) : e : E = () => {
    if (I) {
      ur();
      try {
        I();
      } finally {
        dr();
      }
    }
    const V = Cr;
    Cr = y;
    try {
      return p ? p(e, 3, [j]) : e(j);
    } finally {
      Cr = V;
    }
  } : E = Jt, t && a) {
    const V = E, ce = a === !0 ? 1 / 0 : a;
    E = () => or(V(), ce);
  }
  const ue = eo(), le = () => {
    y.stop(), ue && ue.active && ai(ue.effects, y);
  };
  if (i && t) {
    const V = t;
    t = (...ce) => {
      const De = V(...ce);
      return le(), De;
    };
  }
  let W = K ? new Array(e.length).fill(Mn) : Mn;
  const M = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const ce = y.run();
        if (V || a || se || (K ? ce.some((De, Ie) => Xt(De, W[Ie])) : Xt(ce, W))) {
          I && I();
          const De = Cr;
          Cr = y;
          try {
            const Ie = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              W === Mn ? void 0 : K && W[0] === Mn ? [] : W,
              j
            ];
            W = ce, p ? p(t, 3, Ie) : (
              // @ts-expect-error
              t(...Ie)
            );
          } finally {
            Cr = De;
          }
        }
      } else
        y.run();
  };
  return u && u(M), y = new Is(E), y.scheduler = o ? () => o(M, !1) : M, j = (V) => xo(V, !1, y), I = y.onStop = () => {
    const V = zn.get(y);
    if (V) {
      if (p)
        p(V, 4);
      else
        for (const ce of V) ce();
      zn.delete(y);
    }
  }, t ? n ? M(!0) : W = y.run() : o ? o(M.bind(null, !0), !0) : y.run(), le.pause = y.pause.bind(y), le.resume = y.resume.bind(y), le.stop = le, le;
}
function or(e, t = 1 / 0, r) {
  if (t <= 0 || !Te(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ et(e))
    or(e.value, t, r);
  else if (ne(e))
    for (let n = 0; n < e.length; n++)
      or(e[n], t, r);
  else if (Nr(e) || gr(e))
    e.forEach((n) => {
      or(n, t, r);
    });
  else if (As(e)) {
    for (const n in e)
      or(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && or(e[n], t, r);
  }
  return e;
}
function xn(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (a) {
    sa(a, t, r);
  }
}
function Ft(e, t, r, n) {
  if (de(e)) {
    const a = xn(e, t, r, n);
    return a && Ts(a) && a.catch((i) => {
      sa(i, t, r);
    }), a;
  }
  if (ne(e)) {
    const a = [];
    for (let i = 0; i < e.length; i++)
      a.push(Ft(e[i], t, r, n));
    return a;
  }
}
function sa(e, t, r, n = !0) {
  const a = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || xe;
  if (t) {
    let u = t.parent;
    const p = t.proxy, w = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; u; ) {
      const y = u.ec;
      if (y) {
        for (let E = 0; E < y.length; E++)
          if (y[E](e, p, w) === !1)
            return;
      }
      u = u.parent;
    }
    if (i) {
      ur(), xn(i, null, 10, [
        e,
        p,
        w
      ]), dr();
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
let Kt = -1;
const Wr = [];
let yr = null, qr = 0;
const Gs = /* @__PURE__ */ Promise.resolve();
let Wn = null;
function Ys(e) {
  const t = Wn || Gs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ro(e) {
  let t = Kt + 1, r = ct.length;
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
    !(e.flags & 2) && t >= wn(r) ? ct.push(e) : ct.splice(Ro(t), 0, e), e.flags |= 1, Xs();
  }
}
function Xs() {
  Wn || (Wn = Gs.then(Zs));
}
function Oo(e) {
  if (!ne(e))
    yr && e.id === -1 ? yr.splice(qr + 1, 0, e) : e.flags & 1 || (Wr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Wr.push(e[t]);
  Xs();
}
function Ni(e, t, r = Kt + 1) {
  for (; r < ct.length; r++) {
    const n = ct[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ct.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Js(e) {
  if (Wr.length) {
    const t = [...new Set(Wr)].sort(
      (r, n) => wn(r) - wn(n)
    );
    if (Wr.length = 0, yr) {
      for (let r = 0; r < t.length; r++)
        yr.push(t[r]);
      return;
    }
    for (yr = t, qr = 0; qr < yr.length; qr++) {
      const r = yr[qr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    yr = null, qr = 0;
  }
}
const wn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Zs(e) {
  try {
    for (Kt = 0; Kt < ct.length; Kt++) {
      const t = ct[Kt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), xn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Kt < ct.length; Kt++) {
      const t = ct[Kt];
      t && (t.flags &= -2);
    }
    Kt = -1, ct.length = 0, Js(), Wn = null, (ct.length || Wr.length) && Zs();
  }
}
let Rt = null, Qs = null;
function Kn(e) {
  const t = Rt;
  return Rt = e, Qs = e && e.type.__scopeId || null, t;
}
function No(e, t = Rt, r) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && Vi(-1);
    const i = Kn(t), o = Or.length;
    let u;
    try {
      u = e(...a);
    } finally {
      for (let p = Or.length; p > o; p--) Tl();
      Kn(i), n._d && Vi(1);
    }
    return u;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function lt(e, t) {
  if (Rt === null)
    return e;
  const r = da(Rt), n = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [i, o, u, p = xe] = t[a];
    i && (de(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && or(o), n.push({
      dir: i,
      instance: r,
      value: o,
      oldValue: void 0,
      arg: u,
      modifiers: p
    }));
  }
  return e;
}
function wr(e, t, r, n) {
  const a = e.dirs, i = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const u = a[o];
    i && (u.oldValue = i[o].value);
    let p = u.dir[n];
    p && (ur(), Ft(p, r, 8, [
      e.el,
      u,
      e,
      t
    ]), dr());
  }
}
function Po(e, t) {
  if (ut) {
    let r = ut.provides;
    const n = ut.parent && ut.parent.provides;
    n === r && (r = ut.provides = Object.create(n)), r[e] = t;
  }
}
function Vn(e, t, r = !1) {
  const n = kc();
  if (n || Kr) {
    let a = Kr ? Kr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return r && de(t) ? t.call(n && n.proxy) : t;
  }
}
const Io = /* @__PURE__ */ Symbol.for("v-scx"), Lo = () => Vn(Io);
function ka(e, t, r) {
  return el(e, t, r);
}
function el(e, t, r = xe) {
  const { immediate: n, deep: a, flush: i, once: o } = r, u = tt({}, r), p = t && n || !t && i !== "post";
  let w;
  if (Cn) {
    if (i === "sync") {
      const j = Lo();
      w = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!p) {
      const j = () => {
      };
      return j.stop = Jt, j.resume = Jt, j.pause = Jt, j;
    }
  }
  const y = ut;
  u.call = (j, se, K) => Ft(j, y, se, K);
  let E = !1;
  i === "post" ? u.scheduler = (j) => {
    gt(j, y && y.suspense);
  } : i !== "sync" && (E = !0, u.scheduler = (j, se) => {
    se ? j() : hi(j);
  }), u.augmentJob = (j) => {
    t && (j.flags |= 4), E && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const I = Ao(e, t, u);
  return Cn && (w ? w.push(I) : p && I()), I;
}
function Do(e, t, r) {
  const n = this.proxy, a = Fe(e) ? e.includes(".") ? tl(n, e) : () => n[e] : e.bind(n, n);
  let i;
  de(t) ? i = t : (i = t.handler, r = t);
  const o = An(this), u = el(a, i.bind(n), r);
  return o(), u;
}
function tl(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let a = 0; a < r.length && n; a++)
      n = n[r[a]];
    return n;
  };
}
const Mo = /* @__PURE__ */ Symbol("_vte"), la = (e) => e.__isTeleport, Ra = /* @__PURE__ */ Symbol("_leaveCb");
function Uo(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== pr) {
        t = r;
        break;
      }
  }
  return t;
}
function rl(e) {
  if (!bi(e))
    return la(e.type) && e.children ? Uo(e.children) : e;
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
function mi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    mi(
      la(r.type) && rl(r) || r,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function nl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Pi(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Gn = /* @__PURE__ */ new WeakMap();
function bn(e, t, r, n, a = !1) {
  if (ne(e)) {
    e.forEach(
      (K, ue) => bn(
        K,
        t && (ne(t) ? t[ue] : t),
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
  const i = n.shapeFlag & 4 ? da(n.component) : n.el, o = a ? null : i, { i: u, r: p } = e, w = t && t.r, y = u.refs === xe ? u.refs = {} : u.refs, E = u.setupState, I = /* @__PURE__ */ we(E), j = E === xe ? Cs : (K) => Pi(y, K) ? !1 : Se(I, K), se = (K, ue) => !(ue && Pi(y, ue));
  if (w != null && w !== p) {
    if (Ii(t), Fe(w))
      y[w] = null, j(w) && (E[w] = null);
    else if (/* @__PURE__ */ et(w)) {
      const K = t;
      se(w, K.k) && (w.value = null), K.k && (y[K.k] = null);
    }
  }
  if (de(p))
    xn(p, u, 12, [o, y]);
  else {
    const K = Fe(p), ue = /* @__PURE__ */ et(p);
    if (K || ue) {
      const le = () => {
        if (e.f) {
          const W = K ? j(p) ? E[p] : y[p] : se() || !e.k ? p.value : y[e.k];
          if (a)
            ne(W) && ai(W, i);
          else if (ne(W))
            W.includes(i) || W.push(i);
          else if (K)
            y[p] = [i], j(p) && (E[p] = y[p]);
          else {
            const M = [i];
            se(p, e.k) && (p.value = M), e.k && (y[e.k] = M);
          }
        } else K ? (y[p] = o, j(p) && (E[p] = o)) : ue && (se(p, e.k) && (p.value = o), e.k && (y[e.k] = o));
      };
      if (o) {
        const W = () => {
          le(), Gn.delete(e);
        };
        W.id = -1, Gn.set(e, W), gt(W, r);
      } else
        Ii(e), le();
    }
  }
}
function Ii(e) {
  const t = Gn.get(e);
  t && (t.flags |= 8, Gn.delete(e));
}
aa().requestIdleCallback;
aa().cancelIdleCallback;
const yn = (e) => !!e.type.__asyncLoader, bi = (e) => e.type.__isKeepAlive;
function Fo(e, t) {
  al(e, "a", t);
}
function Ho(e, t) {
  al(e, "da", t);
}
function al(e, t, r = ut) {
  const n = e.__wdc || (e.__wdc = () => {
    let a = r;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (oa(t, n, r), r) {
    let a = r.parent;
    for (; a && a.parent; )
      bi(a.parent.vnode) && $o(n, t, r, a), a = a.parent;
  }
}
function $o(e, t, r, n) {
  const a = oa(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ll(() => {
    ai(n[t], a);
  }, r);
}
function oa(e, t, r = ut, n = !1) {
  if (r) {
    const a = r[e] || (r[e] = []), i = t.__weh || (t.__weh = (...o) => {
      ur();
      const u = An(r), p = Ft(t, r, e, o);
      return u(), dr(), p;
    });
    return n ? a.unshift(i) : a.push(i), i;
  }
}
const hr = (e) => (t, r = ut) => {
  (!Cn || e === "sp") && oa(e, (...n) => t(...n), r);
}, jo = hr("bm"), il = hr("m"), Vo = hr(
  "bu"
), qo = hr("u"), sl = hr(
  "bum"
), ll = hr("um"), Bo = hr(
  "sp"
), zo = hr("rtg"), Wo = hr("rtc");
function Ko(e, t = ut) {
  oa("ec", e, t);
}
const Go = /* @__PURE__ */ Symbol.for("v-ndc");
function ve(e, t, r, n) {
  let a;
  const i = r, o = ne(e);
  if (o || Fe(e)) {
    const u = o && /* @__PURE__ */ Rr(e);
    let p = !1, w = !1;
    u && (p = !/* @__PURE__ */ Ot(e), w = /* @__PURE__ */ fr(e), e = ia(e)), a = new Array(e.length);
    for (let y = 0, E = e.length; y < E; y++)
      a[y] = t(
        p ? w ? Yr(Ut(e[y])) : Ut(e[y]) : e[y],
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
        (u, p) => t(u, p, void 0, i)
      );
    else {
      const u = Object.keys(e);
      a = new Array(u.length);
      for (let p = 0, w = u.length; p < w; p++) {
        const y = u[p];
        a[p] = t(e[y], y, p, i);
      }
    }
  else
    a = [];
  return a;
}
const Xa = (e) => e ? Rl(e) ? da(e) : Xa(e.parent) : null, gn = (
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
    $options: (e) => cl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      hi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ys.bind(e.proxy)),
    $watch: (e) => Do.bind(e)
  })
), Oa = (e, t) => e !== xe && !e.__isScriptSetup && Se(e, t), Yo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: a, props: i, accessCache: o, type: u, appContext: p } = e;
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
        if (Oa(n, t))
          return o[t] = 1, n[t];
        if (a !== xe && Se(a, t))
          return o[t] = 2, a[t];
        if (Se(i, t))
          return o[t] = 3, i[t];
        if (r !== xe && Se(r, t))
          return o[t] = 4, r[t];
        Ja && (o[t] = 0);
      }
    }
    const w = gn[t];
    let y, E;
    if (w)
      return t === "$attrs" && Qe(e.attrs, "get", ""), w(e);
    if (
      // css module (injected by vue-loader)
      (y = u.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== xe && Se(r, t))
      return o[t] = 4, r[t];
    if (
      // global properties
      E = p.config.globalProperties, Se(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: a, ctx: i } = e;
    return Oa(a, t) ? (a[t] = r, !0) : n !== xe && Se(n, t) ? (n[t] = r, !0) : Se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: a, props: i, type: o }
  }, u) {
    let p;
    return !!(r[u] || e !== xe && u[0] !== "$" && Se(e, u) || Oa(t, u) || Se(i, u) || Se(n, u) || Se(gn, u) || Se(a.config.globalProperties, u) || (p = o.__cssModules) && p[u]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Se(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Li(e) {
  return ne(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Ja = !0;
function Xo(e) {
  const t = cl(e), r = e.proxy, n = e.ctx;
  Ja = !1, t.beforeCreate && Di(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: i,
    methods: o,
    watch: u,
    provide: p,
    inject: w,
    // lifecycle
    created: y,
    beforeMount: E,
    mounted: I,
    beforeUpdate: j,
    updated: se,
    activated: K,
    deactivated: ue,
    beforeDestroy: le,
    beforeUnmount: W,
    destroyed: M,
    unmounted: V,
    render: ce,
    renderTracked: De,
    renderTriggered: Ie,
    errorCaptured: qe,
    serverPrefetch: Ee,
    // public API
    expose: Me,
    inheritAttrs: rt,
    // assets
    components: dt,
    directives: Ge,
    filters: At
  } = t;
  if (w && Jo(w, n, null), o)
    for (const ge in o) {
      const fe = o[ge];
      de(fe) && (n[ge] = fe.bind(r));
    }
  if (a) {
    const ge = a.call(r, r);
    Te(ge) && (e.data = /* @__PURE__ */ ir(ge));
  }
  if (Ja = !0, i)
    for (const ge in i) {
      const fe = i[ge], Be = de(fe) ? fe.bind(r, r) : de(fe.get) ? fe.get.bind(r, r) : Jt, _e = !de(fe) && de(fe.set) ? fe.set.bind(r) : Jt, Oe = z({
        get: Be,
        set: _e
      });
      Object.defineProperty(n, ge, {
        enumerable: !0,
        configurable: !0,
        get: () => Oe.value,
        set: (ze) => Oe.value = ze
      });
    }
  if (u)
    for (const ge in u)
      ol(u[ge], n, r, ge);
  if (p) {
    const ge = de(p) ? p.call(r) : p;
    Reflect.ownKeys(ge).forEach((fe) => {
      Po(fe, ge[fe]);
    });
  }
  y && Di(y, e, "c");
  function Ue(ge, fe) {
    ne(fe) ? fe.forEach((Be) => ge(Be.bind(r))) : fe && ge(fe.bind(r));
  }
  if (Ue(jo, E), Ue(il, I), Ue(Vo, j), Ue(qo, se), Ue(Fo, K), Ue(Ho, ue), Ue(Ko, qe), Ue(Wo, De), Ue(zo, Ie), Ue(sl, W), Ue(ll, V), Ue(Bo, Ee), ne(Me))
    if (Me.length) {
      const ge = e.exposed || (e.exposed = {});
      Me.forEach((fe) => {
        Object.defineProperty(ge, fe, {
          get: () => r[fe],
          set: (Be) => r[fe] = Be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === Jt && (e.render = ce), rt != null && (e.inheritAttrs = rt), dt && (e.components = dt), Ge && (e.directives = Ge), Ee && nl(e);
}
function Jo(e, t, r = Jt) {
  ne(e) && (e = Za(e));
  for (const n in e) {
    const a = e[n];
    let i;
    Te(a) ? "default" in a ? i = Vn(
      a.from || n,
      a.default,
      !0
    ) : i = Vn(a.from || n) : i = Vn(a), /* @__PURE__ */ et(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function Di(e, t, r) {
  Ft(
    ne(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function ol(e, t, r, n) {
  let a = n.includes(".") ? tl(r, n) : () => r[n];
  if (Fe(e)) {
    const i = t[e];
    de(i) && ka(a, i);
  } else if (de(e))
    ka(a, e.bind(r));
  else if (Te(e))
    if (ne(e))
      e.forEach((i) => ol(i, t, r, n));
    else {
      const i = de(e.handler) ? e.handler.bind(r) : t[e.handler];
      de(i) && ka(a, i, e);
    }
}
function cl(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: a,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, u = i.get(t);
  let p;
  return u ? p = u : !a.length && !r && !n ? p = t : (p = {}, a.length && a.forEach(
    (w) => Yn(p, w, o, !0)
  ), Yn(p, t, o)), Te(t) && i.set(t, p), p;
}
function Yn(e, t, r, n = !1) {
  const { mixins: a, extends: i } = t;
  i && Yn(e, i, r, !0), a && a.forEach(
    (o) => Yn(e, o, r, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const u = Zo[o] || r && r[o];
      e[o] = u ? u(e[o], t[o]) : t[o];
    }
  return e;
}
const Zo = {
  data: Mi,
  props: Ui,
  emits: Ui,
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
  provide: Mi,
  inject: Qo
};
function Mi(e, t) {
  return t ? e ? function() {
    return tt(
      de(e) ? e.call(this, this) : e,
      de(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qo(e, t) {
  return un(Za(e), Za(t));
}
function Za(e) {
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
function un(e, t) {
  return e ? tt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ui(e, t) {
  return e ? ne(e) && ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : tt(
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
function ul() {
  return {
    app: null,
    config: {
      isNativeTag: Cs,
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
    de(n) || (n = tt({}, n)), a != null && !Te(a) && (a = null);
    const i = ul(), o = /* @__PURE__ */ new WeakSet(), u = [];
    let p = !1;
    const w = i.app = {
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
      use(y, ...E) {
        return o.has(y) || (y && de(y.install) ? (o.add(y), y.install(w, ...E)) : de(y) && (o.add(y), y(w, ...E))), w;
      },
      mixin(y) {
        return i.mixins.includes(y) || i.mixins.push(y), w;
      },
      component(y, E) {
        return E ? (i.components[y] = E, w) : i.components[y];
      },
      directive(y, E) {
        return E ? (i.directives[y] = E, w) : i.directives[y];
      },
      mount(y, E, I) {
        if (!p) {
          const j = w._ceVNode || cr(n, a);
          return j.appContext = i, I === !0 ? I = "svg" : I === !1 && (I = void 0), e(j, y, I), p = !0, w._container = y, y.__vue_app__ = w, da(j.component);
        }
      },
      onUnmount(y) {
        u.push(y);
      },
      unmount() {
        p && (Ft(
          u,
          w._instance,
          16
        ), e(null, w._container), delete w._container.__vue_app__);
      },
      provide(y, E) {
        return i.provides[y] = E, w;
      },
      runWithContext(y) {
        const E = Kr;
        Kr = w;
        try {
          return y();
        } finally {
          Kr = E;
        }
      }
    };
    return w;
  };
}
let Kr = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Dt(t)}Modifiers`] || e[`${Pr(t)}Modifiers`];
function ac(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || xe;
  let a = r;
  const i = t.startsWith("update:"), o = i && nc(n, t.slice(7));
  o && (o.trim && (a = r.map((y) => Fe(y) ? y.trim() : y)), o.number && (a = a.map(na)));
  let u, p = n[u = Ea(t)] || // also try camelCase event handler (#2249)
  n[u = Ea(Dt(t))];
  !p && i && (p = n[u = Ea(Pr(t))]), p && Ft(
    p,
    e,
    6,
    a
  );
  const w = n[u + "Once"];
  if (w) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, Ft(
      w,
      e,
      6,
      a
    );
  }
}
const ic = /* @__PURE__ */ new WeakMap();
function dl(e, t, r = !1) {
  const n = r ? ic : t.emitsCache, a = n.get(e);
  if (a !== void 0)
    return a;
  const i = e.emits;
  let o = {}, u = !1;
  if (!de(e)) {
    const p = (w) => {
      const y = dl(w, t, !0);
      y && (u = !0, tt(o, y));
    };
    !r && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  return !i && !u ? (Te(e) && n.set(e, null), null) : (ne(i) ? i.forEach((p) => o[p] = null) : tt(o, i), Te(e) && n.set(e, o), o);
}
function ca(e, t) {
  return !e || !ea(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, Pr(t)) || Se(e, t));
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
    emit: p,
    render: w,
    renderCache: y,
    props: E,
    data: I,
    setupState: j,
    ctx: se,
    inheritAttrs: K
  } = e, ue = Kn(e);
  let le, W;
  try {
    if (r.shapeFlag & 4) {
      const V = a || n, ce = V;
      le = Yt(
        w.call(
          ce,
          V,
          y,
          E,
          j,
          I,
          se
        )
      ), W = u;
    } else {
      const V = t;
      le = Yt(
        V.length > 1 ? V(
          E,
          { attrs: u, slots: o, emit: p }
        ) : V(
          E,
          null
        )
      ), W = t.props ? u : sc(u);
    }
  } catch (V) {
    Or.length = 0, sa(V, e, 1), le = cr(pr);
  }
  let M = le;
  if (W && K !== !1) {
    const V = Object.keys(W), { shapeFlag: ce } = M;
    V.length && ce & 7 && (i && V.some(ta) && (W = lc(
      W,
      i
    )), M = Xr(M, W, !1, !0));
  }
  if (r.dirs && (M = Xr(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = la(M.type) && rl(M) || M;
    mi(V, r.transition);
  }
  return le = M, Kn(ue), le;
}
const sc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || ea(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, lc = (e, t) => {
  const r = {};
  for (const n in e)
    (!ta(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function oc(e, t, r) {
  const { props: n, children: a, component: i } = e, { props: o, children: u, patchFlag: p } = t, w = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return n ? Hi(n, o, w) : !!o;
    if (p & 8) {
      const y = t.dynamicProps;
      for (let E = 0; E < y.length; E++) {
        const I = y[E];
        if (fl(o, n, I) && !ca(w, I))
          return !0;
      }
    }
  } else
    return (a || u) && (!u || !u.$stable) ? !0 : n === o ? !1 : n ? o ? Hi(n, o, w) : !0 : !!o;
  return !1;
}
function Hi(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < n.length; a++) {
    const i = n[a];
    if (fl(t, e, i) && !ca(r, i))
      return !0;
  }
  return !1;
}
function fl(e, t, r) {
  const n = e[r], a = t[r];
  return r === "style" && Te(n) && Te(a) ? !_r(n, a) : n !== a;
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
const pl = {}, hl = () => Object.create(pl), ml = (e) => Object.getPrototypeOf(e) === pl;
function uc(e, t, r, n = !1) {
  const a = {}, i = hl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), bl(e, t, a, i);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  r ? e.props = n ? a : /* @__PURE__ */ _o(a) : e.type.props ? e.props = a : e.props = i, e.attrs = i;
}
function dc(e, t, r, n) {
  const {
    props: a,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, u = /* @__PURE__ */ we(a), [p] = e.propsOptions;
  let w = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const y = e.vnode.dynamicProps;
      for (let E = 0; E < y.length; E++) {
        let I = y[E];
        if (ca(e.emitsOptions, I))
          continue;
        const j = t[I];
        if (p)
          if (Se(i, I))
            j !== i[I] && (i[I] = j, w = !0);
          else {
            const se = Dt(I);
            a[se] = Qa(
              p,
              u,
              se,
              j,
              e,
              !1
            );
          }
        else
          j !== i[I] && (i[I] = j, w = !0);
      }
    }
  } else {
    bl(e, t, a, i) && (w = !0);
    let y;
    for (const E in u)
      (!t || // for camelCase
      !Se(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Pr(E)) === E || !Se(t, y))) && (p ? r && // for camelCase
      (r[E] !== void 0 || // for kebab-case
      r[y] !== void 0) && (a[E] = Qa(
        p,
        u,
        E,
        void 0,
        e,
        !0
      )) : delete a[E]);
    if (i !== u)
      for (const E in i)
        (!t || !Se(t, E)) && (delete i[E], w = !0);
  }
  w && lr(e.attrs, "set", "");
}
function bl(e, t, r, n) {
  const [a, i] = e.propsOptions;
  let o = !1, u;
  if (t)
    for (let p in t) {
      if (pn(p))
        continue;
      const w = t[p];
      let y;
      a && Se(a, y = Dt(p)) ? !i || !i.includes(y) ? r[y] = w : (u || (u = {}))[y] = w : ca(e.emitsOptions, p) || (!(p in n) || w !== n[p]) && (n[p] = w, o = !0);
    }
  if (i) {
    const p = /* @__PURE__ */ we(r), w = u || xe;
    for (let y = 0; y < i.length; y++) {
      const E = i[y];
      r[E] = Qa(
        a,
        p,
        E,
        w[E],
        e,
        !Se(w, E)
      );
    }
  }
  return o;
}
function Qa(e, t, r, n, a, i) {
  const o = e[r];
  if (o != null) {
    const u = Se(o, "default");
    if (u && n === void 0) {
      const p = o.default;
      if (o.type !== Function && !o.skipFactory && de(p)) {
        const { propsDefaults: w } = a;
        if (r in w)
          n = w[r];
        else {
          const y = An(a);
          n = w[r] = p.call(
            null,
            t
          ), y();
        }
      } else
        n = p;
      a.ce && a.ce._setProp(r, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !u ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Pr(r)) && (n = !0));
  }
  return n;
}
const fc = /* @__PURE__ */ new WeakMap();
function yl(e, t, r = !1) {
  const n = r ? fc : t.propsCache, a = n.get(e);
  if (a)
    return a;
  const i = e.props, o = {}, u = [];
  let p = !1;
  if (!de(e)) {
    const y = (E) => {
      p = !0;
      const [I, j] = yl(E, t, !0);
      tt(o, I), j && u.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!i && !p)
    return Te(e) && n.set(e, zr), zr;
  if (ne(i))
    for (let y = 0; y < i.length; y++) {
      const E = Dt(i[y]);
      $i(E) && (o[E] = xe);
    }
  else if (i)
    for (const y in i) {
      const E = Dt(y);
      if ($i(E)) {
        const I = i[y], j = o[E] = ne(I) || de(I) ? { type: I } : tt({}, I), se = j.type;
        let K = !1, ue = !0;
        if (ne(se))
          for (let le = 0; le < se.length; ++le) {
            const W = se[le], M = de(W) && W.name;
            if (M === "Boolean") {
              K = !0;
              break;
            } else M === "String" && (ue = !1);
          }
        else
          K = de(se) && se.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = K, j[
          1
          /* shouldCastTrue */
        ] = ue, (K || Se(j, "default")) && u.push(E);
      }
    }
  const w = [o, u];
  return Te(e) && n.set(e, w), w;
}
function $i(e) {
  return e[0] !== "$" && !pn(e);
}
const yi = (e) => e === "_" || e === "_ctx" || e === "$stable", gi = (e) => ne(e) ? e.map(Yt) : [Yt(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = No((...a) => gi(t(...a)), r);
  return n._c = !1, n;
}, gl = (e, t, r) => {
  const n = e._ctx;
  for (const a in e) {
    if (yi(a)) continue;
    const i = e[a];
    if (de(i))
      t[a] = pc(a, i, n);
    else if (i != null) {
      const o = gi(i);
      t[a] = () => o;
    }
  }
}, _l = (e, t) => {
  const r = gi(t);
  e.slots.default = () => r;
}, vl = (e, t, r) => {
  for (const n in t)
    (r || !yi(n)) && (e[n] = t[n]);
}, hc = (e, t, r) => {
  const n = e.slots = hl();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (vl(n, t, r), r && Rs(n, "_", a, !0)) : gl(t, n);
  } else t && _l(e, t);
}, mc = (e, t, r) => {
  const { vnode: n, slots: a } = e;
  let i = !0, o = xe;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? r && u === 1 ? i = !1 : vl(a, t, r) : (i = !t.$stable, gl(t, a)), o = t;
  } else t && (_l(e, t), o = { default: 1 });
  if (i)
    for (const u in a)
      !yi(u) && o[u] == null && delete a[u];
}, gt = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = aa();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: a,
    patchProp: i,
    createElement: o,
    createText: u,
    createComment: p,
    setText: w,
    setElementText: y,
    parentNode: E,
    nextSibling: I,
    setScopeId: j = Jt,
    insertStaticContent: se
  } = e, K = (m, b, v, R = null, x = null, k = null, D = void 0, U = null, L = !!b.dynamicChildren) => {
    if (m === b)
      return;
    m && !an(m, b) && (R = vt(m), ze(m, x, k, !0), m = null), b.patchFlag === -2 && (L = !1, b.dynamicChildren = null);
    const { type: A, ref: G, shapeFlag: H } = b;
    switch (A) {
      case ua:
        ue(m, b, v, R);
        break;
      case pr:
        le(m, b, v, R);
        break;
      case Pa:
        m == null && W(b, v, R, D);
        break;
      case re:
        dt(
          m,
          b,
          v,
          R,
          x,
          k,
          D,
          U,
          L
        );
        break;
      default:
        H & 1 ? ce(
          m,
          b,
          v,
          R,
          x,
          k,
          D,
          U,
          L
        ) : H & 6 ? Ge(
          m,
          b,
          v,
          R,
          x,
          k,
          D,
          U,
          L
        ) : (H & 64 || H & 128) && A.process(
          m,
          b,
          v,
          R,
          x,
          k,
          D,
          U,
          L,
          ft
        );
    }
    G != null && x ? bn(G, m && m.ref, k, b || m, !b) : G == null && m && m.ref != null && bn(m.ref, null, k, m, !0);
  }, ue = (m, b, v, R) => {
    if (m == null)
      n(
        b.el = u(b.children),
        v,
        R
      );
    else {
      const x = b.el = m.el;
      b.children !== m.children && w(x, b.children);
    }
  }, le = (m, b, v, R) => {
    m == null ? n(
      b.el = p(b.children || ""),
      v,
      R
    ) : b.el = m.el;
  }, W = (m, b, v, R) => {
    [m.el, m.anchor] = se(
      m.children,
      b,
      v,
      R,
      m.el,
      m.anchor
    );
  }, M = ({ el: m, anchor: b }, v, R) => {
    let x;
    for (; m && m !== b; )
      x = I(m), n(m, v, R), m = x;
    n(b, v, R);
  }, V = ({ el: m, anchor: b }) => {
    let v;
    for (; m && m !== b; )
      v = I(m), a(m), m = v;
    a(b);
  }, ce = (m, b, v, R, x, k, D, U, L) => {
    if (b.type === "svg" ? D = "svg" : b.type === "math" && (D = "mathml"), m == null)
      De(
        b,
        v,
        R,
        x,
        k,
        D,
        U,
        L
      );
    else {
      const A = m.el && m.el._isVueCE ? m.el : null;
      try {
        A && A._beginPatch(), Ee(
          m,
          b,
          x,
          k,
          D,
          U,
          L
        );
      } finally {
        A && A._endPatch();
      }
    }
  }, De = (m, b, v, R, x, k, D, U) => {
    let L, A;
    const { props: G, shapeFlag: H, transition: B, dirs: Q } = m;
    if (L = m.el = o(
      m.type,
      k,
      G && G.is,
      G
    ), H & 8 ? y(L, m.children) : H & 16 && qe(
      m.children,
      L,
      null,
      R,
      x,
      Na(m, k),
      D,
      U
    ), Q && wr(m, null, R, "created"), Ie(L, m, m.scopeId, D, R), G) {
      for (const P in G)
        P !== "value" && !pn(P) && i(L, P, null, G[P], k, R);
      "value" in G && i(L, "value", null, G.value, k), (A = G.onVnodeBeforeMount) && Wt(A, R, m);
    }
    Q && wr(m, null, R, "beforeMount");
    const ee = gc(x, B);
    ee && B.beforeEnter(L), n(L, b, v), ((A = G && G.onVnodeMounted) || ee || Q) && gt(() => {
      A && Wt(A, R, m), ee && B.enter(L), Q && wr(m, null, R, "mounted");
    }, x);
  }, Ie = (m, b, v, R, x) => {
    if (v && j(m, v), R)
      for (let k = 0; k < R.length; k++)
        j(m, R[k]);
    if (x) {
      let k = x.subTree;
      if (b === k || Cl(k.type) && (k.ssContent === b || k.ssFallback === b)) {
        const D = x.vnode;
        Ie(
          m,
          D,
          D.scopeId,
          D.slotScopeIds,
          x.parent
        );
      }
    }
  }, qe = (m, b, v, R, x, k, D, U, L = 0) => {
    for (let A = L; A < m.length; A++) {
      const G = m[A] = U ? sr(m[A]) : Yt(m[A]);
      K(
        null,
        G,
        b,
        v,
        R,
        x,
        k,
        D,
        U
      );
    }
  }, Ee = (m, b, v, R, x, k, D) => {
    const U = b.el = m.el;
    let { patchFlag: L, dynamicChildren: A, dirs: G } = b;
    L |= m.patchFlag & 16;
    const H = m.props || xe, B = b.props || xe;
    let Q;
    if (v && Sr(v, !1), (Q = B.onVnodeBeforeUpdate) && Wt(Q, v, b, m), G && wr(b, m, v, "beforeUpdate"), v && Sr(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    A && (!m.dynamicChildren || m.dynamicChildren.length !== A.length) && (L = 0, D = !1, A = null), (H.innerHTML && B.innerHTML == null || H.textContent && B.textContent == null) && y(U, ""), A ? Me(
      m.dynamicChildren,
      A,
      U,
      v,
      R,
      Na(b, x),
      k
    ) : D || fe(
      m,
      b,
      U,
      null,
      v,
      R,
      Na(b, x),
      k,
      !1
    ), L > 0) {
      if (L & 16)
        rt(U, H, B, v, x);
      else if (L & 2 && H.class !== B.class && i(U, "class", null, B.class, x), L & 4 && i(U, "style", H.style, B.style, x), L & 8) {
        const ee = b.dynamicProps;
        for (let P = 0; P < ee.length; P++) {
          const N = ee[P], $ = H[N], te = B[N];
          (te !== $ || N === "value") && i(U, N, $, te, x, v);
        }
      }
      L & 1 && m.children !== b.children && y(U, b.children);
    } else !D && A == null && rt(U, H, B, v, x);
    ((Q = B.onVnodeUpdated) || G) && gt(() => {
      Q && Wt(Q, v, b, m), G && wr(b, m, v, "updated");
    }, R);
  }, Me = (m, b, v, R, x, k, D) => {
    for (let U = 0; U < b.length; U++) {
      const L = m[U], A = b[U], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !an(L, A) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? E(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      K(
        L,
        A,
        G,
        null,
        R,
        x,
        k,
        D,
        !0
      );
    }
  }, rt = (m, b, v, R, x) => {
    if (b !== v) {
      if (b !== xe)
        for (const k in b)
          !pn(k) && !(k in v) && i(
            m,
            k,
            b[k],
            null,
            x,
            R
          );
      for (const k in v) {
        if (pn(k)) continue;
        const D = v[k], U = b[k];
        D !== U && k !== "value" && i(m, k, U, D, x, R);
      }
      "value" in v && i(m, "value", b.value, v.value, x);
    }
  }, dt = (m, b, v, R, x, k, D, U, L) => {
    const A = b.el = m ? m.el : u(""), G = b.anchor = m ? m.anchor : u("");
    let { patchFlag: H, dynamicChildren: B, slotScopeIds: Q } = b;
    Q && (U = U ? U.concat(Q) : Q), m == null ? (n(A, v, R), n(G, v, R), qe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      v,
      G,
      x,
      k,
      D,
      U,
      L
    )) : H > 0 && H & 64 && B && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === B.length ? (Me(
      m.dynamicChildren,
      B,
      v,
      x,
      k,
      D,
      U
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || x && b === x.subTree) && wl(
      m,
      b,
      !0
      /* shallow */
    )) : fe(
      m,
      b,
      v,
      G,
      x,
      k,
      D,
      U,
      L
    );
  }, Ge = (m, b, v, R, x, k, D, U, L) => {
    b.slotScopeIds = U, m == null ? b.shapeFlag & 512 ? x.ctx.activate(
      b,
      v,
      R,
      D,
      L
    ) : At(
      b,
      v,
      R,
      x,
      k,
      D,
      L
    ) : He(m, b, L);
  }, At = (m, b, v, R, x, k, D) => {
    const U = m.component = Ac(
      m,
      R,
      x
    );
    if (bi(m) && (U.ctx.renderer = ft), Rc(U, !1, D), U.asyncDep) {
      if (x && x.registerDep(U, Ue, D), !m.el) {
        const L = U.subTree = cr(pr);
        le(null, L, b, v), m.placeholder = L.el;
      }
    } else
      Ue(
        U,
        m,
        b,
        v,
        x,
        k,
        D
      );
  }, He = (m, b, v) => {
    const R = b.component = m.component;
    if (oc(m, b, v))
      if (R.asyncDep && !R.asyncResolved) {
        ge(R, b, v);
        return;
      } else
        R.next = b, R.update();
    else
      b.el = m.el, R.vnode = b;
  }, Ue = (m, b, v, R, x, k, D) => {
    const U = () => {
      if (m.isMounted) {
        let { next: H, bu: B, u: Q, parent: ee, vnode: P } = m;
        {
          const pe = Sl(m);
          if (pe) {
            H && (H.el = P.el, ge(m, H, D)), pe.asyncDep.then(() => {
              gt(() => {
                m.isUnmounted || A();
              }, x);
            });
            return;
          }
        }
        let N = H, $;
        Sr(m, !1), H ? (H.el = P.el, ge(m, H, D)) : H = P, B && jn(B), ($ = H.props && H.props.onVnodeBeforeUpdate) && Wt($, ee, H, P), Sr(m, !0);
        const te = Fi(m), ae = m.subTree;
        m.subTree = te, K(
          ae,
          te,
          // parent may have changed if it's in a teleport
          E(ae.el),
          // anchor may have changed if it's in a fragment
          vt(ae),
          m,
          x,
          k
        ), H.el = te.el, N === null && cc(m, te.el), Q && gt(Q, x), ($ = H.props && H.props.onVnodeUpdated) && gt(
          () => Wt($, ee, H, P),
          x
        );
      } else {
        let H;
        const { el: B, props: Q } = b, { bm: ee, m: P, parent: N, root: $, type: te } = m, ae = yn(b);
        Sr(m, !1), ee && jn(ee), !ae && (H = Q && Q.onVnodeBeforeMount) && Wt(H, N, b), Sr(m, !0);
        {
          $.ce && $.ce._hasShadowRoot() && $.ce._injectChildStyle(
            te,
            m.parent ? m.parent.type : void 0
          );
          const pe = m.subTree = Fi(m);
          K(
            null,
            pe,
            v,
            R,
            m,
            x,
            k
          ), b.el = pe.el;
        }
        if (P && gt(P, x), !ae && (H = Q && Q.onVnodeMounted)) {
          const pe = b;
          gt(
            () => Wt(H, N, pe),
            x
          );
        }
        (b.shapeFlag & 256 || N && yn(N.vnode) && N.vnode.shapeFlag & 256) && m.a && gt(m.a, x), m.isMounted = !0, b = v = R = null;
      }
    };
    m.scope.on();
    const L = m.effect = new Is(U);
    m.scope.off();
    const A = m.update = L.run.bind(L), G = m.job = L.runIfDirty.bind(L);
    G.i = m, G.id = m.uid, L.scheduler = () => hi(G), Sr(m, !0), A();
  }, ge = (m, b, v) => {
    b.component = m;
    const R = m.vnode.props;
    m.vnode = b, m.next = null, dc(m, b.props, R, v), mc(m, b.children, v), ur(), Ni(m), dr();
  }, fe = (m, b, v, R, x, k, D, U, L = !1) => {
    const A = m && m.children, G = m ? m.shapeFlag : 0, H = b.children, { patchFlag: B, shapeFlag: Q } = b;
    if (B > 0) {
      if (B & 128) {
        _e(
          A,
          H,
          v,
          R,
          x,
          k,
          D,
          U,
          L
        );
        return;
      } else if (B & 256) {
        Be(
          A,
          H,
          v,
          R,
          x,
          k,
          D,
          U,
          L
        );
        return;
      }
    }
    Q & 8 ? (G & 16 && $e(A, x, k), H !== A && y(v, H)) : G & 16 ? Q & 16 ? _e(
      A,
      H,
      v,
      R,
      x,
      k,
      D,
      U,
      L
    ) : $e(A, x, k, !0) : (G & 8 && y(v, ""), Q & 16 && qe(
      H,
      v,
      R,
      x,
      k,
      D,
      U,
      L
    ));
  }, Be = (m, b, v, R, x, k, D, U, L) => {
    m = m || zr, b = b || zr;
    const A = m.length, G = b.length, H = Math.min(A, G);
    let B;
    for (B = 0; B < H; B++) {
      const Q = b[B] = L ? sr(b[B]) : Yt(b[B]);
      K(
        m[B],
        Q,
        v,
        null,
        x,
        k,
        D,
        U,
        L
      );
    }
    A > G ? $e(
      m,
      x,
      k,
      !0,
      !1,
      H
    ) : qe(
      b,
      v,
      R,
      x,
      k,
      D,
      U,
      L,
      H
    );
  }, _e = (m, b, v, R, x, k, D, U, L) => {
    let A = 0;
    const G = b.length;
    let H = m.length - 1, B = G - 1;
    for (; A <= H && A <= B; ) {
      const Q = m[A], ee = b[A] = L ? sr(b[A]) : Yt(b[A]);
      if (an(Q, ee))
        K(
          Q,
          ee,
          v,
          null,
          x,
          k,
          D,
          U,
          L
        );
      else
        break;
      A++;
    }
    for (; A <= H && A <= B; ) {
      const Q = m[H], ee = b[B] = L ? sr(b[B]) : Yt(b[B]);
      if (an(Q, ee))
        K(
          Q,
          ee,
          v,
          null,
          x,
          k,
          D,
          U,
          L
        );
      else
        break;
      H--, B--;
    }
    if (A > H) {
      if (A <= B) {
        const Q = B + 1, ee = Q < G ? b[Q].el : R;
        for (; A <= B; )
          K(
            null,
            b[A] = L ? sr(b[A]) : Yt(b[A]),
            v,
            ee,
            x,
            k,
            D,
            U,
            L
          ), A++;
      }
    } else if (A > B)
      for (; A <= H; )
        ze(m[A], x, k, !0), A++;
    else {
      const Q = A, ee = A, P = /* @__PURE__ */ new Map();
      for (A = ee; A <= B; A++) {
        const Ce = b[A] = L ? sr(b[A]) : Yt(b[A]);
        Ce.key != null && P.set(Ce.key, A);
      }
      let N, $ = 0;
      const te = B - ee + 1;
      let ae = !1, pe = 0;
      const he = new Array(te);
      for (A = 0; A < te; A++) he[A] = 0;
      for (A = Q; A <= H; A++) {
        const Ce = m[A];
        if ($ >= te) {
          ze(Ce, x, k, !0);
          continue;
        }
        let Ae;
        if (Ce.key != null)
          Ae = P.get(Ce.key);
        else
          for (N = ee; N <= B; N++)
            if (he[N - ee] === 0 && an(Ce, b[N])) {
              Ae = N;
              break;
            }
        Ae === void 0 ? ze(Ce, x, k, !0) : (he[Ae - ee] = A + 1, Ae >= pe ? pe = Ae : ae = !0, K(
          Ce,
          b[Ae],
          v,
          null,
          x,
          k,
          D,
          U,
          L
        ), $++);
      }
      const oe = ae ? _c(he) : zr;
      for (N = oe.length - 1, A = te - 1; A >= 0; A--) {
        const Ce = ee + A, Ae = b[Ce], Ye = b[Ce + 1], Ht = Ce + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ye.el || El(Ye)
        ) : R;
        he[A] === 0 ? K(
          null,
          Ae,
          v,
          Ht,
          x,
          k,
          D,
          U,
          L
        ) : ae && (N < 0 || A !== oe[N] ? Oe(Ae, v, Ht, 2) : N--);
      }
    }
  }, Oe = (m, b, v, R, x = null) => {
    const { el: k, type: D, transition: U, children: L, shapeFlag: A } = m;
    if (A & 6) {
      Oe(m.component.subTree, b, v, R);
      return;
    }
    if (A & 128) {
      m.suspense.move(b, v, R);
      return;
    }
    if (A & 64) {
      D.move(m, b, v, ft);
      return;
    }
    if (D === re) {
      n(k, b, v);
      for (let H = 0; H < L.length; H++)
        Oe(L[H], b, v, R);
      n(m.anchor, b, v);
      return;
    }
    if (D === Pa) {
      M(m, b, v);
      return;
    }
    if (R !== 2 && A & 1 && U)
      if (R === 0)
        U.persisted && !k[Ra] ? n(k, b, v) : (U.beforeEnter(k), n(k, b, v), gt(() => U.enter(k), x));
      else {
        const { leave: H, delayLeave: B, afterLeave: Q } = U, ee = () => {
          m.ctx.isUnmounted ? a(k) : n(k, b, v);
        }, P = () => {
          const N = k._isLeaving || !!k[Ra];
          k._isLeaving && k[Ra](
            !0
            /* cancelled */
          ), U.persisted && !N ? ee() : H(k, () => {
            ee(), Q && Q();
          });
        };
        B ? B(k, ee, P) : P();
      }
    else
      n(k, b, v);
  }, ze = (m, b, v, R = !1, x = !1) => {
    const {
      type: k,
      props: D,
      ref: U,
      children: L,
      dynamicChildren: A,
      shapeFlag: G,
      patchFlag: H,
      dirs: B,
      cacheIndex: Q,
      memo: ee
    } = m;
    if (H === -2 && (x = !1), U != null && (ur(), bn(U, null, v, m, !0), dr()), Q != null && (b.renderCache[Q] = void 0), G & 256) {
      b.ctx.deactivate(m);
      return;
    }
    const P = G & 1 && B, N = !yn(m);
    let $;
    if (N && ($ = D && D.onVnodeBeforeUnmount) && Wt($, b, m), G & 6)
      Qt(m.component, v, R);
    else {
      if (G & 128) {
        m.suspense.unmount(v, R);
        return;
      }
      P && wr(m, null, b, "beforeUnmount"), G & 64 ? m.type.remove(
        m,
        b,
        v,
        ft,
        R
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== re || H > 0 && H & 64) ? $e(
        A,
        b,
        v,
        !1,
        !0
      ) : (k === re && H & 384 || !x && G & 16) && $e(L, b, v), R && nt(m);
    }
    const te = ee != null && Q == null;
    (N && ($ = D && D.onVnodeUnmounted) || P || te) && gt(() => {
      $ && Wt($, b, m), P && wr(m, null, b, "unmounted"), te && (m.el = null);
    }, v);
  }, nt = (m) => {
    const { type: b, el: v, anchor: R, transition: x } = m;
    if (b === re) {
      me(v, R);
      return;
    }
    if (b === Pa) {
      V(m);
      return;
    }
    const k = () => {
      a(v), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (m.shapeFlag & 1 && x && !x.persisted) {
      const { leave: D, delayLeave: U } = x, L = () => D(v, k);
      U ? U(m.el, k, L) : L();
    } else
      k();
  }, me = (m, b) => {
    let v;
    for (; m !== b; )
      v = I(m), a(m), m = v;
    a(b);
  }, Qt = (m, b, v) => {
    const { bum: R, scope: x, job: k, subTree: D, um: U, m: L, a: A } = m;
    ji(L), ji(A), R && jn(R), x.stop(), k && (k.flags |= 8, ze(D, m, b, v)), U && gt(U, b), gt(() => {
      m.isUnmounted = !0;
    }, b);
  }, $e = (m, b, v, R = !1, x = !1, k = 0) => {
    for (let D = k; D < m.length; D++)
      ze(m[D], b, v, R, x);
  }, vt = (m) => {
    if (m.shapeFlag & 6)
      return vt(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const b = I(m.anchor || m.el), v = b && b[Mo];
    return v ? I(v) : b;
  };
  let wt = !1;
  const St = (m, b, v) => {
    let R;
    m == null ? b._vnode && (ze(b._vnode, null, null, !0), R = b._vnode.component) : K(
      b._vnode || null,
      m,
      b,
      null,
      null,
      null,
      v
    ), b._vnode = m, wt || (wt = !0, Ni(R), Js(), wt = !1);
  }, ft = {
    p: K,
    um: ze,
    m: Oe,
    r: nt,
    mt: At,
    mc: qe,
    pc: fe,
    pbc: Me,
    n: vt,
    o: e
  };
  return {
    render: St,
    hydrate: void 0,
    createApp: rc(St)
  };
}
function Na({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Sr({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function wl(e, t, r = !1) {
  const n = e.children, a = t.children;
  if (ne(n) && ne(a))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let u = a[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = a[i] = sr(a[i]), u.el = o.el), !r && u.patchFlag !== -2 && wl(o, u)), u.type === ua && (u.patchFlag === -1 && (u = a[i] = sr(u)), u.el = o.el), u.type === pr && !u.el && (u.el = o.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, a, i, o, u;
  const p = e.length;
  for (n = 0; n < p; n++) {
    const w = e[n];
    if (w !== 0) {
      if (a = r[r.length - 1], e[a] < w) {
        t[n] = a, r.push(n);
        continue;
      }
      for (i = 0, o = r.length - 1; i < o; )
        u = i + o >> 1, e[r[u]] < w ? i = u + 1 : o = u;
      w < e[r[i]] && (i > 0 && (t[n] = r[i - 1]), r[i] = n);
    }
  }
  for (i = r.length, o = r[i - 1]; i-- > 0; )
    r[i] = o, o = t[o];
  return r;
}
function Sl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Sl(t);
}
function ji(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function El(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? El(t.subTree) : null;
}
const Cl = (e) => e.__isSuspense;
function vc(e, t) {
  t && t.pendingBranch ? ne(e) ? t.effects.push(...e) : t.effects.push(e) : Oo(e);
}
const re = /* @__PURE__ */ Symbol.for("v-fgt"), ua = /* @__PURE__ */ Symbol.for("v-txt"), pr = /* @__PURE__ */ Symbol.for("v-cmt"), Pa = /* @__PURE__ */ Symbol.for("v-stc"), Or = [];
let xt = null;
function C(e = !1) {
  Or.push(xt = e ? null : []);
}
function Tl() {
  Or.pop(), xt = Or[Or.length - 1] || null;
}
let Sn = 1;
function Vi(e, t = !1) {
  Sn += e, e < 0 && xt && t && (xt.hasOnce = !0);
}
function xl(e) {
  return e.dynamicChildren = Sn > 0 ? xt || zr : null, Tl(), Sn > 0 && xt && xt.push(e), e;
}
function T(e, t, r, n, a, i) {
  return xl(
    l(
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
  return xl(
    cr(
      e,
      t,
      r,
      n,
      a,
      !0
    )
  );
}
function Al(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function an(e, t) {
  return e.type === t.type && e.key === t.key;
}
const kl = ({ key: e }) => e ?? null, qn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Fe(e) || /* @__PURE__ */ et(e) || de(e) ? { i: Rt, r: e, k: t, f: !!r } : e : null);
function l(e, t = null, r = null, n = 0, a = null, i = e === re ? 0 : 1, o = !1, u = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && kl(t),
    ref: t && qn(t),
    scopeId: Qs,
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
  return u ? (Xn(p, r), i & 128 && e.normalize(p)) : r && (p.shapeFlag |= Fe(r) ? 8 : 16), Sn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  xt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && xt.push(p), p;
}
const cr = Sc;
function Sc(e, t = null, r = null, n = 0, a = null, i = !1) {
  if ((!e || e === Go) && (e = pr), Al(e)) {
    const u = Xr(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Xn(u, r), Sn > 0 && !i && xt && (u.shapeFlag & 6 ? xt[xt.indexOf(e)] = u : xt.push(u)), u.patchFlag = -2, u;
  }
  if (Ic(e) && (e = e.__vccOpts), t) {
    t = Ec(t);
    let { class: u, style: p } = t;
    u && !Fe(u) && (t.class = Lt(u)), Te(p) && (/* @__PURE__ */ pi(p) && !ne(p) && (p = tt({}, p)), t.style = si(p));
  }
  const o = Fe(e) ? 1 : Cl(e) ? 128 : la(e) ? 64 : Te(e) ? 4 : de(e) ? 2 : 0;
  return l(
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
  return e ? /* @__PURE__ */ pi(e) || ml(e) ? tt({}, e) : e : null;
}
function Xr(e, t, r = !1, n = !1) {
  const { props: a, ref: i, patchFlag: o, children: u, transition: p } = e, w = t ? Cc(a || {}, t) : a, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: w,
    key: w && kl(w),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && i ? ne(i) ? i.concat(qn(t)) : [i, qn(t)] : qn(t)
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
    patchFlag: t && e.type !== re ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Xr(e.ssContent),
    ssFallback: e.ssFallback && Xr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return p && n && mi(
    y,
    p.clone(y)
  ), y;
}
function be(e = " ", t = 0) {
  return cr(ua, null, e, t);
}
function Y(e = "", t = !1) {
  return t ? (C(), wc(pr, null, e)) : cr(pr, null, e);
}
function Yt(e) {
  return e == null || typeof e == "boolean" ? cr(pr) : ne(e) ? cr(
    re,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Al(e) ? sr(e) : cr(ua, null, String(e));
}
function sr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xr(e);
}
function Xn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ne(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Xn(e, a()), a._c && (a._d = !0));
      return;
    } else {
      r = 32;
      const a = t._;
      !a && !ml(t) ? t._ctx = Rt : a === 3 && Rt && (Rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (de(t)) {
    if (n & 65) {
      Xn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Rt }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [be(t)]) : r = 8;
  e.children = t, e.shapeFlag |= r;
}
function Cc(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const a in n)
      if (a === "class")
        t.class !== n.class && (t.class = Lt([t.class, n.class]));
      else if (a === "style")
        t.style = si([t.style, n.style]);
      else if (ea(a)) {
        const i = t[a], o = n[a];
        o && i !== o && !(ne(i) && i.includes(o)) ? t[a] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ta(a) && (t[a] = o);
      } else a !== "" && (t[a] = n[a]);
  }
  return t;
}
function Wt(e, t, r, n = null) {
  Ft(e, t, 7, [
    r,
    n
  ]);
}
const Tc = ul();
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
    propsOptions: yl(n, a),
    emitsOptions: dl(n, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: xe,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: xe,
    data: xe,
    props: xe,
    attrs: xe,
    slots: xe,
    refs: xe,
    setupState: xe,
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
let Jn, En;
{
  const e = aa(), t = (r, n) => {
    let a;
    return (a = e[r]) || (a = e[r] = []), a.push(n), (i) => {
      a.length > 1 ? a.forEach((o) => o(i)) : a[0](i);
    };
  };
  Jn = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ut = r
  ), En = t(
    "__VUE_SSR_SETTERS__",
    (r) => Cn = r
  );
}
const An = (e) => {
  const t = ut;
  return Jn(e), e.scope.on(), () => {
    e.scope.off(), Jn(t);
  };
}, qi = () => {
  ut && ut.scope.off(), Jn(null);
};
function Rl(e) {
  return e.vnode.shapeFlag & 4;
}
let Cn = !1;
function Rc(e, t = !1, r = !1) {
  t && En(t);
  const { props: n, children: a } = e.vnode, i = Rl(e);
  uc(e, n, i, t), hc(e, a, r || t);
  const o = i ? Oc(e, t) : void 0;
  return t && En(!1), o;
}
function Oc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yo);
  const { setup: n } = r;
  if (n) {
    ur();
    const a = e.setupContext = n.length > 1 ? Pc(e) : null, i = An(e), o = xn(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    ), u = Ts(o);
    if (dr(), i(), (u || e.sp) && !yn(e) && nl(e), u) {
      if (o.then(qi, qi), t)
        return o.then((p) => {
          En(!0);
          try {
            Bi(e, p, t);
          } finally {
            En(!1);
          }
        }).catch((p) => {
          sa(p, e, 0);
        });
      e.asyncDep = o;
    } else
      Bi(e, o);
  } else
    Ol(e);
}
function Bi(e, t, r) {
  de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Te(t) && (e.setupState = Ks(t)), Ol(e);
}
function Ol(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Jt);
  {
    const a = An(e);
    ur();
    try {
      Xo(e);
    } finally {
      dr(), a();
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
function da(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ks(vo(e.exposed)), {
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
  return de(e) && "__vccOpts" in e;
}
const z = (e, t) => /* @__PURE__ */ To(e, t, Cn), Lc = "3.5.42";
let ei;
const zi = typeof window < "u" && window.trustedTypes;
if (zi)
  try {
    ei = /* @__PURE__ */ zi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Nl = ei ? (e) => ei.createHTML(e) : (e) => e, Dc = "http://www.w3.org/2000/svg", Mc = "http://www.w3.org/1998/Math/MathML", ar = typeof document < "u" ? document : null, Wi = ar && /* @__PURE__ */ ar.createElement("template"), Uc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const a = t === "svg" ? ar.createElementNS(Dc, e) : t === "mathml" ? ar.createElementNS(Mc, e) : r ? ar.createElement(e, { is: r }) : ar.createElement(e);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => ar.createTextNode(e),
  createComment: (e) => ar.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ar.querySelector(e),
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
      Wi.innerHTML = Nl(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Wi.content;
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
const Ki = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function qc(e, t, r) {
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
  Ki in e && (e[Ki] = i ? n.display : "", e[$c] && (n.display = "none"));
}
const Un = /\s*!important$/;
function dn(e, t, r) {
  if (ne(r))
    r.forEach((n) => dn(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    Un.test(r) ? e.setProperty(t, r.replace(Un, ""), "important") : e.setProperty(t, r);
  else {
    const n = Bc(e, t);
    Un.test(r) ? e.setProperty(
      Pr(n),
      r.replace(Un, ""),
      "important"
    ) : e[n] = r;
  }
}
const Gi = ["Webkit", "Moz", "ms"], Ia = {};
function Bc(e, t) {
  const r = Ia[t];
  if (r)
    return r;
  let n = Dt(t);
  if (n !== "filter" && n in e)
    return Ia[t] = n;
  n = ks(n);
  for (let a = 0; a < Gi.length; a++) {
    const i = Gi[a] + n;
    if (i in e)
      return Ia[t] = i;
  }
  return t;
}
function zc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Fe(n) && r === n;
}
const Yi = "http://www.w3.org/1999/xlink";
function Xi(e, t, r, n, a, i = Xl(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Yi, t.slice(6, t.length)) : e.setAttributeNS(Yi, t, r) : r == null || i && !Os(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Zt(r) ? String(r) : r
  );
}
function Ji(e, t, r, n, a) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Nl(r) : r);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const u = i === "OPTION" ? e.getAttribute("value") || "" : e.value, p = r == null ? (
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
    u === "boolean" ? r = Os(r) : r == null && u === "string" ? (r = "", o = !0) : u === "number" && (r = 0, o = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function xr(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Wc(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Zi = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, r, n, a = null) {
  const i = e[Zi] || (e[Zi] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [u, p] = Xc(t);
    if (n) {
      const w = i[t] = Qc(
        n,
        a
      );
      xr(e, u, w, p);
    } else o && (Wc(e, u, o, p), i[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Pr(e.slice(2)), t];
}
let La = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => La || (Jc.then(() => La = 0), La = Date.now());
function Qc(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    const a = r.value;
    if (ne(a)) {
      const i = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        i.call(n), n._stopped = !0;
      };
      const o = a.slice(), u = [n];
      for (let p = 0; p < o.length && !n._stopped; p++) {
        const w = o[p];
        w && Ft(
          w,
          t,
          5,
          u
        );
      }
    } else
      Ft(
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
  t === "class" ? Hc(e, n, o) : t === "style" ? qc(e, r, n) : ea(t) ? ta(t) || Kc(e, t, r, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, o)) ? (Ji(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Xi(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Fe(n))) ? Ji(e, Dt(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Xi(e, t, n, o));
};
function tu(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qi(t) && de(r));
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
  const n = Dt(t);
  return Array.isArray(r) ? r.some((a) => Dt(a) === n) : Object.keys(r).some((a) => Dt(a) === n);
}
const Zn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ne(t) ? (r) => jn(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function es(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ar = /* @__PURE__ */ Symbol("_assign"), Fn = /* @__PURE__ */ Symbol("_initialValue");
function Da(e, t, r) {
  return t && (e = e.trim()), r && (e = na(e)), e;
}
const ts = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, a) {
    e.parentNode && (e.type === "text" ? e[Fn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Fn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Ar] = Zn(a);
    const i = n || a.props && a.props.type === "number";
    xr(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Ar](Da(e.value, r, i));
    }), (r || i) && xr(e, "change", () => {
      e.value = Da(e.value, r, i);
    }), t || (xr(e, "compositionstart", nu), xr(e, "compositionend", es), xr(e, "change", es));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const a = t ?? "", i = e[Fn];
    delete e[Fn], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[Ar](Da(e.value, r, n)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: a, number: i } }, o) {
    if (e[Ar] = Zn(o), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? na(e.value) : e.value, p = t ?? "";
    if (u === p)
      return;
    const w = e.getRootNode();
    (w instanceof Document || w instanceof ShadowRoot) && w.activeElement === e && e.type !== "range" && (n && t === r || a && e.value.trim() === p) || (e.value = p);
  }
}, Et = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, xr(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (p) => p.selected).map(
        (p) => r ? na(Qn(p)) : Qn(p)
      ), i = e.multiple, o = i ? Nr(e._modelValue) ? new Set(a) : a : a[0], u = e._pendingValue = [
        i,
        i ? ne(o) ? a.slice() : a : o
      ];
      try {
        e[Ar](o);
      } finally {
        Ys(() => {
          e._pendingValue === u && (e._pendingValue = void 0);
        });
      }
    }), e[Ar] = Zn(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    rs(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[Ar] = Zn(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !au(t, r[1], r[0])) && rs(e, t);
  }
};
function au(e, t, r) {
  if (!r || ne(e)) return _r(e, t);
  if (Nr(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function rs(e, t) {
  const r = e.multiple, n = ne(t);
  if (!(r && !n && !Nr(t))) {
    for (let a = 0, i = e.options.length; a < i; a++) {
      const o = e.options[a], u = Qn(o);
      if (r)
        if (n) {
          const p = typeof u;
          p === "string" || p === "number" ? o.selected = t.some((w) => String(w) === String(u)) : o.selected = Zl(t, u) > -1;
        } else
          o.selected = t.has(u);
      else if (_r(Qn(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Qn(e) {
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
}, Hn = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((a, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const u = su[t[o]];
      if (u && u(a, t)) return;
    }
    return e(a, ...i);
  }));
}, lu = /* @__PURE__ */ tt({ patchProp: eu }, Uc);
let ns;
function ou() {
  return ns || (ns = bc(lu));
}
const cu = ((...e) => {
  const t = ou().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const a = du(n);
    if (!a) return;
    const i = t._component;
    !de(i) && !i.render && !i.template && (i.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
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
function as(e, t) {
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
    var n, a, i, o, u = [], p = !0, w = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(p = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); p = !0) ;
    } catch (y) {
      w = !0, a = y;
    } finally {
      try {
        if (!p && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (w) throw a;
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
    if (typeof e == "string") return as(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? as(e, t) : void 0;
  }
}
const Pl = Object.entries, is = Object.setPrototypeOf, gu = Object.isFrozen, _u = Object.getPrototypeOf, vu = Object.getOwnPropertyDescriptor;
let Ve = Object.freeze, Ke = Object.seal, Br = Object.create, Il = typeof Reflect < "u" && Reflect, ti = Il.apply, ri = Il.construct;
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
const Tr = je(Array.prototype.forEach), wu = je(Array.prototype.lastIndexOf), ss = je(Array.prototype.pop), sn = je(Array.prototype.push), Su = je(Array.prototype.splice), Gr = Array.isArray, fn = je(String.prototype.toLowerCase), Ma = je(String.prototype.toString), ls = je(String.prototype.match), ln = je(String.prototype.replace), os = je(String.prototype.indexOf), Eu = je(String.prototype.trim), Cu = je(Number.prototype.toString), Tu = je(Boolean.prototype.toString), cs = typeof BigInt > "u" ? null : je(BigInt.prototype.toString), us = typeof Symbol > "u" ? null : je(Symbol.prototype.toString), _t = je(Object.prototype.hasOwnProperty), on = je(Object.prototype.toString), Ze = je(RegExp.prototype.test), Er = xu(TypeError);
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
function ye(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : fn;
  if (is && is(e, null), !Gr(t))
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
    _t(e, t) || (e[t] = null);
  return e;
}
function Tt(e) {
  const t = Br(null);
  for (const n of Pl(e)) {
    var r = bu(n, 2);
    const a = r[0], i = r[1];
    _t(e, a) && (Gr(i) ? t[a] = Au(i) : i && typeof i == "object" && i.constructor === Object ? t[a] = Tt(i) : t[a] = i);
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
      return cs ? cs(e) : "0";
    case "symbol":
      return us ? us(e) : "Symbol()";
    case "undefined":
      return on(e);
    case "function":
    case "object": {
      if (e === null)
        return on(e);
      const t = e, r = It(t, "toString");
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
function It(e, t) {
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
const ds = Ve(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ua = Ve(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Fa = Ve(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ou = Ve(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ha = Ve(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Nu = Ve(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), fs = Ve(["#text"]), ps = Ve(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), $a = Ve(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), hs = Ve(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), $n = Ve(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pu = Ke(/{{[\w\W]*|^[\w\W]*}}/g), Iu = Ke(/<%[\w\W]*|^[\w\W]*%>/g), Lu = Ke(/\${[\w\W]*/g), Du = Ke(/^data-[\-\w.\u00B7-\uFFFF]+$/), Mu = Ke(/^aria-[\-\w]+$/), ms = Ke(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Uu = Ke(/^(?:\w+script|data):/i), Fu = Ke(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = Ke(/^html$/i), $u = Ke(/^[a-z][.\w]*(-[.\w]+)+$/i), bs = Ke(/<[/\w!]/g), ys = Ke(/<[/\w]/g), ju = Ke(/<\/no(script|embed|frames)/i), Vu = Ke(/\/>/i), Ct = {
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
}, Ll = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], qu = Ve(ye({}, Ll)), Bu = (function() {
  const e = {};
  return Tr(Ll, (t) => {
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
}, gs = function() {
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
}, br = function(t, r, n, a) {
  return _t(t, r) && Gr(t[r]) ? ye(a.base ? Tt(a.base) : {}, t[r], a.transform) : n;
}, ja = function(t, r, n) {
  const a = _t(t, r) ? t[r] : void 0;
  return a && typeof a == "object" ? Tt(a) : n();
};
function Dl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (F) => Dl(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== Ct.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, a = n.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, u = e.Element, p = e.NodeFilter, w = e.NamedNodeMap;
  w === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, E = e.trustedTypes, I = u.prototype, j = It(I, "cloneNode"), se = It(I, "remove"), K = It(I, "nextSibling"), ue = It(I, "childNodes"), le = It(I, "parentNode"), W = It(I, "shadowRoot"), M = It(I, "attributes"), V = o && o.prototype ? It(o.prototype, "nodeType") : null, ce = o && o.prototype ? It(o.prototype, "nodeName") : null, De = o && o.prototype ? It(o.prototype, "ownerDocument") : null, Ie = function(d) {
    return V ? V(d) : d.nodeType;
  }, qe = function(d) {
    return ce ? ce(d) : d.nodeName;
  };
  if (typeof i == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let Ee, Me = "", rt, dt = !1, Ge = 0;
  const At = function() {
    if (Ge > 0)
      throw Er('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, He = function(d) {
    At(), Ge++;
    try {
      return Ee.createHTML(d);
    } finally {
      Ge--;
    }
  }, Ue = function(d) {
    At(), Ge++;
    try {
      return Ee.createScriptURL(d);
    } finally {
      Ge--;
    }
  }, ge = function() {
    return dt || (rt = Wu(E, a), dt = !0), rt;
  }, fe = r, Be = fe.implementation, _e = fe.createNodeIterator, Oe = fe.createDocumentFragment, ze = fe.getElementsByTagName, nt = n.importNode;
  let me = gs();
  t.isSupported = typeof Pl == "function" && typeof le == "function" && Be && Be.createHTMLDocument !== void 0;
  const Qt = Pu, $e = Iu, vt = Lu, wt = Du, St = Mu, ft = Uu, Nt = Fu, m = $u;
  let b = ms, v = null;
  const R = ye({}, [...ds, ...Ua, ...Fa, ...Ha, ...fs]);
  let x = null;
  const k = ye({}, [...ps, ...$a, ...hs, ...$n]);
  let D = Object.seal(Br(null, {
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
  const A = Object.seal(Br(null, {
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
  let G = !0, H = !0, B = !1, Q = !0, ee = !1, P = !0, N = !1, $ = !1, te = null, ae = null, pe = !1, he = !1, oe = !1, Ce = !1, Ae = !0, Ye = !1;
  const Ht = "user-content-";
  let Xe = !0, er = !1, kt = {}, pt = null;
  const $t = ye({}, [
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
  let Pt = null;
  const ht = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let mt = null;
  const Ir = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), jt = "http://www.w3.org/1998/Math/MathML", Vt = "http://www.w3.org/2000/svg", at = "http://www.w3.org/1999/xhtml";
  let mr = at, qt = !1, Lr = null;
  const fa = ye({}, [jt, Vt, at], Ma), Jr = Ve(["mi", "mo", "mn", "ms", "mtext"]);
  let Zr = ye({}, Jr);
  const Qr = Ve(["annotation-xml"]);
  let Dr = ye({}, Qr);
  const pa = ye({}, ["title", "style", "font", "a", "script"]);
  let tr = null;
  const ha = ["application/xhtml+xml", "text/html"], ma = "text/html";
  let Ne = null, Bt = null;
  const ba = r.createElement("form"), kn = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, Mr = function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Bt && Bt === d)
      return;
    (!d || typeof d != "object") && (d = {}), d = Tt(d), tr = // eslint-disable-next-line unicorn/prefer-includes
    ha.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? ma : d.PARSER_MEDIA_TYPE, Ne = tr === "application/xhtml+xml" ? Ma : fn, v = br(d, "ALLOWED_TAGS", R, {
      transform: Ne
    }), x = br(d, "ALLOWED_ATTR", k, {
      transform: Ne
    }), Lr = br(d, "ALLOWED_NAMESPACES", fa, {
      transform: Ma
    }), mt = br(d, "ADD_URI_SAFE_ATTR", Ir, {
      transform: Ne,
      base: Ir
    }), Pt = br(d, "ADD_DATA_URI_TAGS", ht, {
      transform: Ne,
      base: ht
    }), pt = br(d, "FORBID_CONTENTS", $t, {
      transform: Ne
    }), U = br(d, "FORBID_TAGS", Tt({}), {
      transform: Ne
    }), L = br(d, "FORBID_ATTR", Tt({}), {
      transform: Ne
    }), kt = _t(d, "USE_PROFILES") ? d.USE_PROFILES && typeof d.USE_PROFILES == "object" ? Tt(d.USE_PROFILES) : d.USE_PROFILES : !1, G = d.ALLOW_ARIA_ATTR !== !1, H = d.ALLOW_DATA_ATTR !== !1, B = d.ALLOW_UNKNOWN_PROTOCOLS || !1, Q = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ee = d.SAFE_FOR_TEMPLATES || !1, P = d.SAFE_FOR_XML !== !1, N = d.WHOLE_DOCUMENT || !1, he = d.RETURN_DOM || !1, oe = d.RETURN_DOM_FRAGMENT || !1, Ce = d.RETURN_TRUSTED_TYPE || !1, pe = d.FORCE_BODY || !1, Ae = d.SANITIZE_DOM !== !1, Ye = d.SANITIZE_NAMED_PROPS || !1, Xe = d.KEEP_CONTENT !== !1, er = d.IN_PLACE || !1, b = Ru(d.ALLOWED_URI_REGEXP) ? d.ALLOWED_URI_REGEXP : ms, mr = typeof d.NAMESPACE == "string" ? d.NAMESPACE : at, Zr = ja(
      d,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ye({}, Jr)
      // Default built-in map
    ), Dr = ja(
      d,
      "HTML_INTEGRATION_POINTS",
      () => ye({}, Qr)
      // Default built-in map
    );
    const g = ja(d, "CUSTOM_ELEMENT_HANDLING", () => Br(null));
    if (D = Br(null), _t(g, "tagNameCheck") && kn(g.tagNameCheck) && (D.tagNameCheck = g.tagNameCheck), _t(g, "attributeNameCheck") && kn(g.attributeNameCheck) && (D.attributeNameCheck = g.attributeNameCheck), _t(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (D.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), Ke(D), ee && (H = !1), oe && (he = !0), kt && (v = ye({}, fs), x = Br(null), kt.html === !0 && (ye(v, ds), ye(x, ps)), kt.svg === !0 && (ye(v, Ua), ye(x, $a), ye(x, $n)), kt.svgFilters === !0 && (ye(v, Fa), ye(x, $a), ye(x, $n)), kt.mathMl === !0 && (ye(v, Ha), ye(x, hs), ye(x, $n))), A.tagCheck = null, A.attributeCheck = null, _t(d, "ADD_TAGS") && (typeof d.ADD_TAGS == "function" ? A.tagCheck = d.ADD_TAGS : Gr(d.ADD_TAGS) && (v === R && (v = Tt(v)), ye(v, d.ADD_TAGS, Ne))), _t(d, "ADD_ATTR") && (typeof d.ADD_ATTR == "function" ? A.attributeCheck = d.ADD_ATTR : Gr(d.ADD_ATTR) && (x === k && (x = Tt(x)), ye(x, d.ADD_ATTR, Ne))), _t(d, "ADD_FORBID_CONTENTS") && Gr(d.ADD_FORBID_CONTENTS) && (pt === $t && (pt = Tt(pt)), ye(pt, d.ADD_FORBID_CONTENTS, Ne)), Xe && (v["#text"] = !0), N && ye(v, ["html", "head", "body"]), v.table && (ye(v, ["tbody"]), delete U.tbody), d.TRUSTED_TYPES_POLICY) {
      if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Er('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Er('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const O = Ee;
      Ee = d.TRUSTED_TYPES_POLICY;
      try {
        Me = He("");
      } catch (q) {
        throw Ee = O, q;
      }
    } else d.TRUSTED_TYPES_POLICY === null ? (Ee = void 0, Me = "") : (Ee === void 0 && (Ee = ge()), Ee && typeof Me == "string" && (Me = He("")));
    Ve && Ve(d), Bt = d;
  }, en = ye({}, [...Ua, ...Fa, ...Ou]), Rn = ye({}, [...Ha, ...Nu]), ya = function(d, g, O) {
    return g.namespaceURI === at ? d === "svg" : g.namespaceURI === jt ? d === "svg" && (O === "annotation-xml" || Zr[O]) : !!en[d];
  }, ga = function(d, g, O) {
    return g.namespaceURI === at ? d === "math" : g.namespaceURI === Vt ? d === "math" && Dr[O] : !!Rn[d];
  }, tn = function(d, g, O) {
    return g.namespaceURI === Vt && !Dr[O] || g.namespaceURI === jt && !Zr[O] ? !1 : !Rn[d] && (pa[d] || !en[d]);
  }, vr = function(d) {
    let g = le(d);
    (!g || !g.tagName) && (g = {
      namespaceURI: mr,
      tagName: "template"
    });
    const O = fn(d.tagName), q = fn(g.tagName);
    return Lr[d.namespaceURI] ? d.namespaceURI === Vt ? ya(O, g, q) : d.namespaceURI === jt ? ga(O, g, q) : d.namespaceURI === at ? tn(O, g, q) : !!(tr === "application/xhtml+xml" && Lr[d.namespaceURI]) : !1;
  }, zt = function(d) {
    sn(t.removed, {
      element: d
    });
    try {
      le(d).removeChild(d);
    } catch {
      if (se(d), !le(d))
        throw Er("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, On = function(d, g, O) {
    try {
      d.removeAttributeNode(g);
    } catch {
      try {
        d.removeAttribute(O);
      } catch {
      }
    }
  }, Ur = function(d) {
    Fr(d);
    const g = ue(d);
    if (g) {
      const q = [];
      Tr(g, (J) => {
        sn(q, J);
      }), Tr(q, (J) => {
        try {
          se(J);
        } catch {
        }
      });
    }
    const O = M(d);
    if (O)
      for (let q = O.length - 1; q >= 0; --q) {
        const J = O[q], ie = J && J.name;
        typeof ie == "string" && On(d, J, ie);
      }
  }, rr = function(d, g, O) {
    if (!O)
      try {
        O = g.getAttributeNode(d);
      } catch {
        O = null;
      }
    sn(t.removed, {
      attribute: O || null,
      from: g
    });
    try {
      O ? g.removeAttributeNode(O) : g.removeAttribute(d);
    } catch {
      try {
        g.removeAttribute(d);
      } catch {
      }
    }
    if (d === "is")
      if (he || oe)
        try {
          zt(g);
        } catch {
        }
      else
        try {
          g.setAttribute(d, "");
        } catch {
        }
  }, _a = function(d) {
    const g = M(d);
    if (g)
      for (let O = g.length - 1; O >= 0; --O) {
        const q = g[O], J = q && q.name;
        typeof J != "string" || x[Ne(J)] || On(d, q, J);
      }
  }, Fr = function(d) {
    const g = [d];
    for (; g.length > 0; ) {
      const O = g.pop();
      Ie(O) === Ct.element && _a(O);
      const J = ue(O);
      if (J)
        for (let ie = J.length - 1; ie >= 0; --ie)
          g.push(J[ie]);
    }
  }, Nn = function(d, g) {
    return P ? d === "patchsrc" ? !0 : d === "for" && g !== "label" && g !== "output" : !1;
  }, Pn = function(d) {
    if (!P)
      return;
    const g = [d];
    for (; g.length > 0; ) {
      const O = g.pop(), q = Ie(O);
      if (q === Ct.processingInstruction || q === Ct.comment && Ze(ys, O.data)) {
        try {
          se(O);
        } catch {
        }
        continue;
      }
      if (q === Ct.element) {
        const ie = O, ke = Ne(qe(O));
        try {
          ie.hasAttribute && ie.hasAttribute("patchsrc") && ie.removeAttribute("patchsrc"), ie.hasAttribute && ie.hasAttribute("for") && Nn("for", ke) && ie.removeAttribute("for");
        } catch {
        }
      }
      const J = ue(O);
      if (J)
        for (let ie = J.length - 1; ie >= 0; --ie)
          g.push(J[ie]);
    }
  }, rn = function(d) {
    let g = null, O = null;
    if (pe)
      d = "<remove></remove>" + d;
    else {
      const ie = ls(d, /^[\r\n\t ]+/);
      O = ie && ie[0];
    }
    tr === "application/xhtml+xml" && mr === at && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    const q = Ee ? He(d) : d;
    if (mr === at)
      try {
        g = new y().parseFromString(q, tr);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = Be.createDocument(mr, "template", null);
      try {
        g.documentElement.innerHTML = qt ? Me : q;
      } catch {
      }
    }
    const J = g.body || g.documentElement;
    return d && O && J.insertBefore(r.createTextNode(O), J.childNodes[0] || null), mr === at ? ze.call(g, N ? "html" : "body")[0] : N ? g.documentElement : J;
  }, S = function(d) {
    const g = De ? De(d) : d.ownerDocument;
    return _e.call(
      g || d,
      d,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null
    );
  }, _ = function(d) {
    return d = ln(d, Qt, " "), d = ln(d, $e, " "), d = ln(d, vt, " "), d;
  }, h = function(d) {
    var g;
    d.normalize();
    const O = De ? De(d) : d.ownerDocument, q = _e.call(
      O || d,
      d,
      // eslint-disable-next-line no-bitwise
      p.SHOW_TEXT | p.SHOW_COMMENT | p.SHOW_CDATA_SECTION | p.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let J = q.nextNode();
    for (; J; )
      J.data = _(J.data), J = q.nextNode();
    const ie = (g = d.querySelectorAll) === null || g === void 0 ? void 0 : g.call(d, "template");
    ie && Tr(ie, (ke) => {
      Pe(ke.content) && h(ke.content);
    });
  }, Z = function(d) {
    const g = ce ? ce(d) : null;
    return typeof g != "string" || Ne(g) !== "form" ? !1 : typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    d.attributes !== M(d) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
  }, Pe = function(d) {
    if (!V || typeof d != "object" || d === null)
      return !1;
    try {
      return V(d) === Ct.documentFragment;
    } catch {
      return !1;
    }
  }, We = function(d) {
    if (!V || typeof d != "object" || d === null)
      return !1;
    try {
      return typeof V(d) == "number";
    } catch {
      return !1;
    }
  };
  function it(F, d, g) {
    F.length !== 0 && Tr(F, (O) => {
      O.call(t, d, g, Bt);
    });
  }
  const va = function(d, g) {
    return !!(P && d.hasChildNodes() && !We(d.firstElementChild) && Ze(bs, d.textContent) && Ze(bs, d.innerHTML) || P && d.namespaceURI === at && qu[g] && (We(d.firstElementChild) || typeof d.textContent == "string" && Ze(Bu[g], d.textContent)) || d.nodeType === Ct.processingInstruction || P && d.nodeType === Ct.comment && Ze(ys, d.data));
  }, Hr = function(d, g) {
    if (d instanceof RegExp)
      return Ze(d, g);
    if (d instanceof Function) {
      for (var O = arguments.length, q = new Array(O > 2 ? O - 2 : 0), J = 2; J < O; J++)
        q[J - 2] = arguments[J];
      return !!d(g, ...q);
    }
    return !1;
  }, Ul = function(d, g, O) {
    if (!U[g] && Ei(g) && Hr(D.tagNameCheck, g))
      return !1;
    if (Xe && !pt[g]) {
      const q = le(d), J = ue(d);
      if (J && q) {
        const ie = J.length;
        for (let ke = ie - 1; ke >= 0; --ke) {
          const Le = d === O ? j(J[ke], !0) : J[ke];
          q.insertBefore(Le, K(d));
        }
      }
    }
    return zt(d), !0;
  }, _i = function(d, g, O, q) {
    return d.length === 0 ? g : g === O || g === q ? Tt(g) : g;
  }, vi = function(d, g) {
    return d === g || le(d) !== null ? !1 : (er && Fr(d), !0);
  }, wi = function(d, g) {
    if (it(me.beforeSanitizeElements, d, null), vi(d, g))
      return !0;
    if (Z(d))
      return zt(d), !0;
    const O = Ne(qe(d));
    if (v = _i(me.uponSanitizeElement, v, R, te), it(me.uponSanitizeElement, d, {
      tagName: O,
      allowedTags: v
    }), vi(d, g))
      return !0;
    if (va(d, O))
      return zt(d), !0;
    if (U[O] || !(A.tagCheck instanceof Function && A.tagCheck(O)) && !v[O]) {
      const J = Ul(d, O, g);
      return J === !1 && it(me.afterSanitizeElements, d, null), J;
    }
    if (Ie(d) === Ct.element && !vr(d) || (O === "noscript" || O === "noembed" || O === "noframes") && Ze(ju, d.innerHTML))
      return zt(d), !0;
    if (ee && d.nodeType === Ct.text) {
      const J = _(d.textContent);
      d.textContent !== J && (sn(t.removed, {
        element: d.cloneNode()
      }), d.textContent = J);
    }
    return it(me.afterSanitizeElements, d, null), !1;
  }, Si = function(d, g, O) {
    if (L[g] || Nn(g, d) || Ae && (g === "id" || g === "name") && (O in r || O in ba))
      return !1;
    const q = x[g] || A.attributeCheck instanceof Function && A.attributeCheck(g, d);
    return H && Ze(wt, g) || G && Ze(St, g) ? !0 : q ? mt[g] || Ze(b, ln(O, Nt, "")) || (g === "src" || g === "xlink:href" || g === "href") && d !== "script" && os(O, "data:") === 0 && Pt[d] || B && !Ze(ft, ln(O, Nt, "")) ? !0 : !O : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Ei(d) && Hr(D.tagNameCheck, d) && Hr(D.attributeNameCheck, g, d) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && D.allowCustomizedBuiltInElements && Hr(D.tagNameCheck, O)
    );
  }, Fl = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ei = function(d) {
    return !Fl[fn(d)] && Ze(m, d);
  }, Hl = function(d, g, O, q) {
    if (Ee && typeof E == "object" && typeof E.getAttributeType == "function" && !O)
      switch (E.getAttributeType(d, g)) {
        case "TrustedHTML":
          return He(q);
        case "TrustedScriptURL":
          return Ue(q);
      }
    return q;
  }, $l = function(d, g, O, q) {
    try {
      O ? d.setAttributeNS(O, g, q) : d.setAttribute(g, q), Z(d) ? zt(d) : ss(t.removed);
    } catch {
      rr(g, d);
    }
  }, Ci = function(d) {
    it(me.beforeSanitizeAttributes, d, null);
    const g = d.attributes;
    if (!g || Z(d))
      return;
    x = _i(me.uponSanitizeAttribute, x, k, ae);
    const O = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: x,
      forceKeepAttr: void 0
    };
    let q = g.length;
    const J = Ne(d.nodeName);
    for (; q--; ) {
      const ie = g[q], ke = ie.name, Le = ie.namespaceURI, bt = ie.value, yt = Ne(ke), Sa = bt;
      let st = ke === "value" ? Sa : Eu(Sa);
      if (O.attrName = yt, O.attrValue = st, O.keepAttr = !0, O.forceKeepAttr = void 0, it(me.uponSanitizeAttribute, d, O), st = O.attrValue, Ye && (yt === "id" || yt === "name") && os(st, Ht) !== 0 && (rr(ke, d, ie), st = Ht + st), P && Ze(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, st)) {
        rr(ke, d, ie);
        continue;
      }
      if (yt === "attributename" && ls(st, "href")) {
        rr(ke, d, ie);
        continue;
      }
      if (!O.forceKeepAttr) {
        if (!O.keepAttr) {
          rr(ke, d, ie);
          continue;
        }
        if (!Q && Ze(Vu, st)) {
          rr(ke, d, ie);
          continue;
        }
        if (ee && (st = _(st)), !Si(J, yt, st)) {
          rr(ke, d, ie);
          continue;
        }
        st = Hl(J, yt, Le, st), st !== Sa && $l(d, ke, Le, st);
      }
    }
    it(me.afterSanitizeAttributes, d, null);
  }, In = function(d) {
    let g = null;
    const O = S(d);
    for (it(me.beforeSanitizeShadowDOM, d, null); g = O.nextNode(); )
      if (it(me.uponSanitizeShadowNode, g, null), wi(g, d), Ci(g), Pe(g.content) && In(g.content), Ie(g) === Ct.element) {
        const q = W(g);
        Pe(q) && (wa(q), In(q));
      }
    it(me.afterSanitizeShadowDOM, d, null);
  }, wa = function(d) {
    const g = [{
      node: d,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const O = g.pop();
      if (O.shadow) {
        In(O.shadow);
        continue;
      }
      const q = O.node, ie = Ie(q) === Ct.element, ke = ue(q);
      if (ke)
        for (let Le = ke.length - 1; Le >= 0; --Le)
          g.push({
            node: ke[Le],
            shadow: null
          });
      if (ie) {
        const Le = ce ? ce(q) : null;
        if (typeof Le == "string" && Ne(Le) === "template") {
          const bt = q.content;
          Pe(bt) && g.push({
            node: bt,
            shadow: null
          });
        }
      }
      if (ie) {
        const Le = W(q);
        Pe(Le) && g.push({
          node: null,
          shadow: Le
        }, {
          node: Le,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, O = null, q = null, J = null;
    if (qt = !F, qt && (F = "<!-->"), typeof F != "string" && !We(F) && (F = ku(F), typeof F != "string"))
      throw Er("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    $ ? (v = te, x = ae) : Mr(d), (me.uponSanitizeElement.length > 0 || me.uponSanitizeAttribute.length > 0) && (v = Tt(v)), me.uponSanitizeAttribute.length > 0 && (x = Tt(x)), t.removed = [];
    const ie = er && typeof F != "string" && We(F);
    if (ie) {
      Pn(F);
      const bt = qe(F);
      if (typeof bt == "string") {
        const yt = Ne(bt);
        if (!v[yt] || U[yt])
          throw Ur(F), Er("root node is forbidden and cannot be sanitized in-place");
      }
      if (Z(F))
        throw Ur(F), Er("root node is clobbered and cannot be sanitized in-place");
      try {
        wa(F);
      } catch (yt) {
        throw Ur(F), yt;
      }
    } else if (We(F))
      g = rn("<!---->"), O = g.ownerDocument.importNode(F, !0), O.nodeType === Ct.element && O.nodeName === "BODY" || O.nodeName === "HTML" ? g = O : g.appendChild(O), wa(O);
    else {
      if (!he && !ee && !N && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return Ee && Ce ? He(F) : F;
      if (g = rn(F), !g)
        return he ? null : Ce ? Me : "";
    }
    g && pe && zt(g.firstChild);
    const ke = ie ? F : g;
    try {
      const bt = S(ke);
      for (; q = bt.nextNode(); )
        wi(q, ke), Ci(q), Pe(q.content) && In(q.content);
    } catch (bt) {
      throw ie && (Ur(F), Tr(t.removed, (yt) => {
        yt.element && Fr(yt.element);
      })), bt;
    }
    if (ie)
      return Tr(t.removed, (bt) => {
        bt.element && Fr(bt.element);
      }), ee && h(F), F;
    if (he) {
      if (ee && h(g), oe)
        for (J = Oe.call(g.ownerDocument); g.firstChild; )
          J.appendChild(g.firstChild);
      else
        J = g;
      return (x.shadowroot || x.shadowrootmode) && (J = nt.call(n, J, !0)), J;
    }
    let Le = N ? g.outerHTML : g.innerHTML;
    return N && v["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Ze(Hu, g.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Le), ee && (Le = _(Le)), Ee && Ce ? He(Le) : Le;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Mr(F), $ = !0, te = v, ae = x;
  }, t.clearConfig = function() {
    Bt = null, $ = !1, te = null, ae = null, Ee = rt, Me = "";
  }, t.isValidAttribute = function(F, d, g) {
    Bt || Mr({});
    const O = Ne(F), q = Ne(d);
    return Si(O, q, g);
  }, t.addHook = function(F, d) {
    typeof d == "function" && _t(me, F) && sn(me[F], d);
  }, t.removeHook = function(F, d) {
    if (_t(me, F)) {
      if (d !== void 0) {
        const g = wu(me[F], d);
        return g === -1 ? void 0 : Su(me[F], g, 1)[0];
      }
      return ss(me[F]);
    }
  }, t.removeHooks = function(F) {
    _t(me, F) && (me[F] = []);
  }, t.removeAllHooks = function() {
    me = gs();
  }, t;
}
var Ku = Dl();
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Va, _s;
function Yu() {
  if (_s) return Va;
  _s = 1;
  var e = /["'&<>]/;
  Va = t;
  function t(r) {
    var n = "" + r, a = e.exec(n);
    if (!a)
      return n;
    var i, o = "", u = 0, p = 0;
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
      p !== u && (o += n.substring(p, u)), p = u + 1, o += i;
    }
    return p !== u ? o + n.substring(p, u) : o;
  }
  return Va;
}
var Xu = Yu();
const vs = /* @__PURE__ */ Gu(Xu);
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
function s(e, t, r, n, a) {
  const i = typeof r == "object" ? r : void 0, o = typeof n == "number" ? n : typeof r == "number" ? r : void 0, u = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof n == "object" ? n : {}
  }, p = (K) => K, w = (u.sanitize ? Ku.sanitize : p) || p, y = u.escape ? vs : p, E = (K) => typeof K == "string" || typeof K == "number", I = (K, ue, le) => K.replace(/%n/g, "" + le).replace(/{([^{}]*)}/g, (W, M) => {
    if (ue === void 0 || !(M in ue))
      return y(W);
    const V = ue[M];
    return E(V) ? y(`${V}`) : typeof V == "object" && E(V.value) ? (V.escape !== !1 ? vs : p)(`${V.value}`) : y(W);
  });
  let se = (a?.bundle ?? Ju(e)).translations[t] || t;
  return se = Array.isArray(se) ? se[0] : se, w(typeof i == "object" || o !== void 0 ? I(
    se,
    i,
    o
  ) : se);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ed = ["aria-label"], td = {
  class: "library-workspace-panel library-workspace-panel--refine library-filter-panel",
  "data-workspace-panel": "refine"
}, rd = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished library-filter-panel-summary" }, nd = ["title"], ad = { class: "library-workspace-panel-purpose" }, id = { class: "library-workspace-scope-badge" }, sd = ["aria-label"], ld = ["name", "value"], od = { class: "library-quick-search-row" }, cd = ["title"], ud = ["aria-label"], dd = { class: "library-quick-filter-options" }, fd = { class: "library-quick-filter-option-grid" }, pd = { value: "title" }, hd = { value: "recent" }, md = { value: "publicationDate" }, bd = { value: "publication" }, yd = { value: "lastOpened" }, gd = { value: "format" }, _d = { value: "" }, vd = { value: "1" }, wd = ["value"], Sd = ["value"], Ed = ["aria-label"], Cd = ["aria-label"], Td = ["aria-label"], xd = { value: "" }, Ad = ["value"], kd = { value: "" }, Rd = ["value"], Od = { value: "" }, Nd = ["value"], Pd = { value: "" }, Id = ["value"], Ld = { value: "" }, Dd = ["value"], Md = { value: "" }, Ud = ["value"], Fd = { value: "" }, Hd = ["value"], $d = { value: "" }, jd = ["value"], Vd = { value: "" }, qd = ["value"], Bd = { value: "" }, zd = ["value"], Wd = { value: "" }, Kd = { value: "1" }, Gd = {
  type: "submit",
  class: "button primary"
}, Yd = {
  href: "?",
  class: "button secondary"
}, Xd = {
  class: "library-workspace-panel library-workspace-panel--browse library-discovery-shortcuts library-home-dashboard",
  "data-workspace-panel": "browse"
}, Jd = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, Zd = ["title"], Qd = { class: "library-workspace-panel-purpose" }, ef = { class: "library-workspace-scope-badge" }, tf = {
  key: 0,
  class: "library-home-hero-card"
}, rf = ["title"], nf = { class: "library-home-hero-actions" }, af = ["href"], sf = {
  key: 1,
  class: "library-home-rediscover"
}, lf = { class: "library-muted library-catalogue-eyebrow" }, of = { class: "library-muted" }, cf = ["aria-label"], uf = ["href", "title"], df = { class: "library-useful-view-count" }, ff = { class: "library-shortcut-selectors" }, pf = ["title"], hf = { value: "" }, mf = ["value"], bf = {
  key: 1,
  class: "library-shortcut-select-card library-year-groups"
}, yf = { value: "" }, gf = ["value"], _f = {
  key: 2,
  class: "library-shortcut-select-card library-creator-groups"
}, vf = { value: "" }, wf = ["value"], Sf = { class: "library-saved-collections" }, Ef = ["title"], Cf = ["action", "title"], Tf = ["value"], xf = ["value"], Af = ["placeholder", "disabled"], kf = ["disabled", "title"], Rf = ["aria-label"], Of = ["href"], Nf = ["action"], Pf = ["value"], If = {
  type: "submit",
  class: "button tertiary"
}, Lf = ["aria-label"], Df = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, Mf = ["title"], Uf = { class: "library-workspace-panel-purpose" }, Ff = { class: "library-workspace-scope-badge" }, Hf = { class: "library-batch-action-grid" }, $f = ["action"], jf = ["value"], Vf = ["name", "value"], qf = ["placeholder"], Bf = ["title"], zf = ["action"], Wf = ["value"], Kf = ["name", "value"], Gf = ["placeholder"], Yf = ["title"], Xf = ["action"], Jf = ["value"], Zf = ["name", "value"], Qf = ["title"], ep = ["action"], tp = ["value"], rp = ["name", "value"], np = { name: "bulkEditField" }, ap = { value: "publicationType" }, ip = { value: "subtitle" }, sp = { value: "creators" }, lp = { value: "publication" }, op = { value: "publicationDate" }, cp = { value: "language" }, up = { value: "publisher" }, dp = { value: "genres" }, fp = { value: "classifications" }, pp = ["title"], hp = ["action"], mp = ["value"], bp = ["name", "value"], yp = ["title"], gp = {
  class: "library-workspace-panel library-workspace-panel--review library-weak-metadata-dashboard",
  "data-workspace-panel": "review"
}, _p = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, vp = ["title"], wp = { class: "library-workspace-panel-purpose" }, Sp = { class: "library-workspace-scope-badge" }, Ep = ["aria-label"], Cp = ["href", "title"], Tp = {
  class: "library-review-queue-actions",
  "aria-label": "Review queue shortcuts"
}, xp = ["title"], Ap = ["href"], kp = ["href"], Rp = ["action"], Op = ["value"], Np = {
  type: "submit",
  class: "button secondary"
}, Pp = ["title"], Ip = ["href"], Lp = ["action"], Dp = ["value"], Mp = {
  type: "submit",
  class: "button secondary"
}, Up = {
  key: 0,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, Fp = { class: "library-metadata-review-workbench-copy" }, Hp = { class: "library-muted library-catalogue-eyebrow" }, $p = ["title"], jp = {
  key: 0,
  class: "library-metadata-review-card"
}, Vp = { class: "library-muted" }, qp = { class: "library-metadata-review-fields" }, Bp = ["action"], zp = ["value"], Wp = ["value"], Kp = {
  type: "submit",
  class: "button secondary"
}, Gp = { class: "library-metadata-review-actions" }, Yp = ["href"], Xp = ["href"], Jp = {
  key: 1,
  class: "library-muted"
}, Zp = ["href"], Qp = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, eh = ["title"], th = { class: "library-workspace-panel-purpose" }, rh = { class: "library-workspace-scope-badge" }, nh = { class: "library-catalogue-actions-list" }, ah = ["href"], ih = ["href"], sh = ["href"], lh = ["href"], oh = { class: "library-actions-health-overview" }, ch = { class: "library-muted library-catalogue-eyebrow" }, uh = ["title"], dh = {
  key: 0,
  class: "library-muted"
}, fh = {
  key: 1,
  class: "library-notice"
}, ph = {
  key: 2,
  class: "library-muted"
}, hh = {
  key: 0,
  class: "library-muted"
}, mh = {
  key: 1,
  class: "library-muted"
}, bh = {
  key: 2,
  class: "library-muted"
}, yh = ["disabled"], gh = { class: "library-actions-health-links" }, _h = ["href"], vh = ["href"], wh = ["href"], Sh = ["href"], Eh = { class: "library-actions-health-grid" }, Ch = { class: "library-import-health-number" }, Th = { class: "library-import-health-number" }, xh = { class: "library-muted" }, Ah = { class: "library-muted" }, kh = {
  key: 0,
  class: "library-import-health-examples"
}, Rh = { class: "library-catalogue-header" }, Oh = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, Nh = { id: "library-catalogue-heading" }, Ph = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, Ih = {
  key: 1,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Lh = { class: "library-muted library-catalogue-eyebrow" }, Dh = ["title"], Mh = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, Uh = { key: 0 }, Fh = { key: 1 }, Hh = { key: 2 }, $h = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, jh = { key: 0 }, Vh = { key: 1 }, qh = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, Bh = { class: "library-muted library-catalogue-eyebrow" }, zh = ["title"], Wh = {
  class: "library-publication-issue-strip",
  "aria-label": "Visual issue strip"
}, Kh = ["href"], Gh = {
  key: 0,
  class: "library-notice"
}, Yh = { class: "library-publication-issue-label" }, Xh = ["href"], Jh = { class: "library-muted" }, Zh = {
  key: 1,
  class: "library-publication-unknown-issues"
}, Qh = ["title"], em = {
  href: "/apps/library/",
  class: "button secondary"
}, tm = {
  class: "library-view-mode-toggle",
  "aria-label": "Cover view mode"
}, rm = ["aria-pressed"], nm = ["aria-pressed"], am = ["aria-pressed"], im = { class: "library-catalogue-status-row" }, sm = { class: "library-muted library-filter-result-summary" }, lm = { key: 0 }, om = { href: "?" }, cm = ["aria-label"], um = { class: "library-pagination-range" }, dm = { key: 0 }, fm = ["href"], pm = {
  key: 1,
  class: "library-muted"
}, hm = ["href"], mm = {
  key: 3,
  class: "library-muted"
}, bm = ["aria-label"], ym = ["href", "aria-label"], gm = ["title"], _m = { class: "library-empty-actions" }, vm = ["href"], wm = { class: "library-muted" }, Sm = ["title"], Em = { class: "library-empty-actions" }, Cm = ["href"], Tm = ["title"], xm = { class: "library-empty-actions" }, Am = ["href"], km = {
  href: "?",
  class: "button primary"
}, Rm = ["title"], Om = { class: "library-empty-actions" }, Nm = ["href"], Pm = ["href", "aria-label"], Im = { class: "library-cover-frame" }, Lm = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, Dm = ["src", "alt", "onLoad", "onError"], Mm = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, Um = ["action", "onSubmit"], Fm = ["value"], Hm = ["value"], $m = ["aria-pressed", "title", "aria-label", "onClick"], jm = { class: "library-cover-summary" }, Vm = { class: "library-cover-primary" }, qm = ["aria-label"], Bm = ["href"], zm = ["onToggle"], Wm = ["aria-label"], Km = { class: "library-cover-meta" }, Gm = {
  key: 0,
  class: "library-creator"
}, Ym = { class: "library-cover-detail-list" }, Xm = { class: "library-cover-detail-chip" }, Jm = {
  key: 0,
  class: "library-cover-detail-chip"
}, Zm = {
  key: 1,
  class: "library-cover-detail-chip"
}, Qm = {
  key: 2,
  class: "library-cover-detail-chip"
}, eb = {
  key: 3,
  class: "library-cover-detail-chip"
}, tb = {
  key: 4,
  class: "library-cover-detail-chip"
}, rb = {
  key: 5,
  class: "library-cover-detail-chip"
}, nb = {
  key: 6,
  class: "library-cover-detail-chip"
}, ab = {
  key: 1,
  class: "library-muted library-cover-description"
}, ib = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, sb = { key: 0 }, lb = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, ob = {
  key: 0,
  class: "library-muted"
}, cb = { class: "library-cover-actions" }, ub = ["href"], db = ["href"], fb = ["onClick"], pb = ["href"], hb = ["aria-label"], mb = { class: "library-pagination-range" }, bb = { key: 0 }, yb = ["href"], gb = {
  key: 1,
  class: "library-muted"
}, _b = ["href"], vb = {
  key: 3,
  class: "library-muted"
}, wb = {
  key: 7,
  class: "library-detail-drawer",
  "aria-labelledby": "library-detail-drawer-heading",
  "aria-describedby": "library-detail-drawer-keyboard-hint",
  role: "dialog",
  "aria-modal": "true"
}, Sb = {
  id: "library-detail-drawer-keyboard-hint",
  class: "library-muted library-detail-drawer-keyboard-hint"
}, Eb = ["src", "alt"], Cb = { class: "library-muted library-catalogue-eyebrow" }, Tb = { id: "library-detail-drawer-heading" }, xb = {
  key: 0,
  class: "library-creator"
}, Ab = {
  key: 1,
  class: "library-muted"
}, kb = { class: "library-detail-drawer-facts" }, Rb = { key: 0 }, Ob = { key: 1 }, Nb = { key: 2 }, Pb = { class: "library-detail-drawer-actions" }, Ib = ["href"], Lb = ["href"], Db = ["aria-label"], Mb = ["disabled"], Ub = ["disabled"], Fb = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], a = /* @__PURE__ */ ir({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), i = /* @__PURE__ */ ir((a.items || []).map((S) => ({ ...S }))), o = z(() => i), u = z(() => a.shelves || []), p = z(() => a.formats || []), w = z(() => a.publications || []), y = z(() => a.publicationSummaries || []), E = z(() => a.publicationIssueContext || null), I = z(() => a.publicationYears || []), j = z(() => a.creators || []), se = z(() => a.scanStatuses || []), K = z(() => a.workflowStatuses || []), ue = z(() => a.genres || []), le = z(() => a.classifications || []), W = z(() => a.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), M = /* @__PURE__ */ ir({
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
    }), V = z(() => a.settingsUrl || ""), ce = z(() => a.requestToken || ""), De = z(() => a.metadataExportUrl || ""), Ie = z(() => a.metadataSidecarManifestUrl || ""), qe = z(() => a.metadataSidecarBundleUrl || ""), Ee = z(() => a.catalogueEndpointUrl || "/apps/library/catalogue"), Me = z(() => a.batchTagUrl || "/apps/library/bulk/tags"), rt = z(() => a.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), dt = z(() => a.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ge = z(() => a.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), At = z(() => a.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), He = z(() => a.scannerConflictReviewUrl || "?scannerConflicts=1"), Ue = z(() => a.metadataErrorsUrl || "/apps/library/health/metadata-errors"), ge = z(() => a.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), fe = z(() => a.coverProbeUrl || "/apps/library/health/covers/probe"), Be = z(() => a.importHealthSummaryUrl || "/apps/library/health/import-summary"), _e = /* @__PURE__ */ ir({
      summary: a.importHealthSummary || {},
      loaded: !!(a.importHealthSummary && Object.keys(a.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), Oe = z(() => _e.summary || {}), ze = z(() => {
      const S = Number(Oe.value.generatedAt || 0);
      return S > 0 ? new Date(S * 1e3).toLocaleString() : "";
    }), nt = z(() => Oe.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), me = z(() => Oe.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), Qt = z(() => Oe.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), $e = z(() => a.discoveryPage === "publication"), vt = z(() => a.discoveryPage === "year"), wt = z(() => a.discoveryPage === "creator"), St = z(() => $e.value || vt.value || wt.value), ft = z(() => a.discoveryTitle || M.publication || M.year || M.creator || ""), Nt = z(() => St.value ? ft.value : s("library", "Library")), m = z(() => wt.value ? s("library", "Creator") : vt.value ? s("library", "Publication year") : s("library", "Publication / series")), b = z(() => Number(a.rootCount || 0)), v = z(() => Number(a.enabledRootCount || 0)), R = z(() => b.value === 0), x = z(() => b.value > 0 && v.value === 0), k = z(() => ee.value.length > 0), D = {
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
    }, U = z(() => {
      if (typeof window > "u") return "";
      const S = new URLSearchParams(window.location.search);
      if (S.get("batchMetadataApplyResult") !== "1") return "";
      const _ = S.get("batchMetadataField") || "field", h = S.get("batchMetadataApplied") || "0", Z = S.get("batchMetadataUnchanged") || "0", Pe = S.get("batchMetadataSkipped") || "0";
      return s("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: h, field: _, unchanged: Z, skipped: Pe });
    }), L = z(() => a.savedCollections || []), A = z(() => a.savedCollectionSaveUrl || "/apps/library/collections"), G = z(() => a.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), H = ["compact", "gallery", "shelf"], B = z(() => H.includes(M.view) ? M.view : "compact"), Q = z(() => ({
      "library-cover-gallery--compact": B.value === "compact",
      "library-cover-gallery--gallery": B.value === "gallery",
      "library-cover-gallery--shelf": B.value === "shelf"
    })), ee = z(() => Object.entries(D).map(([S, _]) => ({ key: S, label: _, value: M[S] || "" })).filter((S) => String(S.value).trim() !== "")), P = z(() => Object.entries(M).filter(([S, _]) => !["q", "sort", "starred"].includes(S) && String(_ || "").trim() !== "").map(([S, _]) => ({ key: S, value: _ }))), N = z(() => Object.entries(M).filter(([S, _]) => String(_ || "").trim() !== "").map(([S, _]) => ({ key: S, value: _ }))), $ = /* @__PURE__ */ ir({}), te = /* @__PURE__ */ ir({}), ae = z(() => o.value.filter((S) => S.starred || S.workflowStatus === "reading" || S.lastOpenedAt).slice(0, 5)), pe = z(() => o.value.find((S) => S.description || S.publication || S.creators) || o.value[0] || null), he = z(() => !St.value && o.value.length > 0), oe = /* @__PURE__ */ Oi(null), Ce = z(() => oe.value ? o.value.findIndex((S) => S.id === oe.value.id) : -1), Ae = z(() => Ce.value > 0 ? o.value[Ce.value - 1] : null), Ye = z(() => Ce.value >= 0 && Ce.value < o.value.length - 1 ? o.value[Ce.value + 1] : null), Ht = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], Xe = z(() => {
      const S = M.scannerConflicts === "1" || String(M.weakMetadata || "").trim() !== "", _ = S ? o.value.find((h) => kt(h).length > 0) : null;
      return {
        enabled: S,
        item: _,
        fields: _ ? kt(_) : [],
        reviewNextUrl: He.value,
        skipUrl: W.value.nextUrl || He.value
      };
    });
    function er(S) {
      return Array.isArray(S) ? JSON.stringify(S) : S == null ? "" : String(S);
    }
    function kt(S) {
      const _ = S.fieldValues || {}, h = S.fieldSources || {};
      return Ht.filter((Z) => Object.prototype.hasOwnProperty.call(_, Z)).map((Z) => {
        const Pe = er(S[Z]), We = er(_[Z]), it = er(h[Z] || S.metadataSource || "scanner"), va = it.includes("filename") || it.includes("path") ? We : "", Hr = it.includes("sidecar") ? We : "";
        return { field: Z, currentValue: Pe, scannerCandidate: We, pathTemplateCandidate: va, sidecarValue: Hr, sourceProvenance: it, differs: Pe !== We };
      }).filter((Z) => Z.differs);
    }
    function pt(S) {
      oe.value = S;
    }
    function $t() {
      oe.value = null;
    }
    function Pt(S) {
      S && (oe.value = S);
    }
    const ht = /* @__PURE__ */ Oi(null);
    let mt = null;
    function Ir(S) {
      const _ = new URLSearchParams(new FormData(S));
      for (const h of Array.from(_.keys()))
        String(_.get(h) || "").trim() === "" && _.delete(h);
      return _.delete("page"), _.get("view") === "compact" && _.delete("view"), _;
    }
    function jt(S) {
      i.splice(0, i.length, ...(S.items || []).map((_) => ({ ..._ })));
      for (const _ of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(S, _) && (a[_] = S[_]);
      Object.assign(M, S.activeFilters || {});
    }
    async function Vt(S = !1) {
      if (!(_e.loading || _e.refreshing)) {
        S ? _e.refreshing = !0 : _e.loading = !0, _e.error = "";
        try {
          const _ = await fetch(`${Be.value}${S ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!_.ok)
            throw new Error(`Import health request failed: ${_.status}`);
          _e.summary = await _.json(), _e.loaded = !0;
        } catch (_) {
          _e.error = _?.message || String(_);
        } finally {
          _e.loading = !1, _e.refreshing = !1;
        }
      }
    }
    async function at(S) {
      S && S.currentTarget && S.currentTarget.open !== !0 || _e.loaded || _e.loading || await Vt(!1);
    }
    async function mr() {
      await Vt(!0);
    }
    async function qt(S) {
      const _ = S?.currentTarget?.tagName === "FORM" ? S.currentTarget : S?.currentTarget?.form;
      if (!_) return;
      const Z = Ir(_).toString(), Pe = Z ? `?${Z}` : "", We = await fetch(Ee.value + Pe, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!We.ok) {
        _.submit();
        return;
      }
      jt(await We.json()), history.replaceState({}, "", Z ? `?${Z}` : window.location.pathname);
    }
    function Lr(S) {
      qt(S);
    }
    function fa(S) {
      window.clearTimeout(mt), mt = window.setTimeout(() => Lr(S), 350);
    }
    function Jr(S) {
      const _ = new URLSearchParams();
      for (const [Z, Pe] of Object.entries(M)) {
        const We = String(Pe || "").trim();
        We !== "" && Z !== S && !(Z === "sort" && We === "title") && !(Z === "view" && We === "compact") && _.set(Z, We);
      }
      const h = _.toString();
      return h ? `?${h}` : "?";
    }
    function Zr() {
      return Jr("q");
    }
    const Qr = z(() => a.smartViewCounts || {}), Dr = z(() => {
      const S = {};
      for (const [_, h] of Object.entries(M)) {
        const Z = String(h || "").trim();
        Z !== "" && !(_ === "sort" && Z === "title") && (S[_] = Z);
      }
      return S;
    }), pa = z(() => JSON.stringify(Dr.value)), tr = z(() => Object.keys(Dr.value).length > 0), ha = z(() => [
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
    ]), ma = z(() => [
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
    function Ne(S) {
      if (!H.includes(S)) return;
      M.view = S;
      const _ = new URLSearchParams(window.location.search);
      S === "compact" ? _.delete("view") : _.set("view", S), _.delete("page"), history.replaceState({}, "", _.toString() ? `?${_.toString()}` : window.location.pathname);
    }
    function Bt(S) {
      const _ = new URLSearchParams(window.location.search);
      for (const Z of Object.keys(D))
        _.delete(Z);
      _.delete("page");
      for (const [Z, Pe] of Object.entries(S))
        String(Pe || "").trim() !== "" && _.set(Z, String(Pe));
      const h = _.toString();
      return h ? `?${h}` : "?";
    }
    function ba(S) {
      return Bt(S || {});
    }
    function kn(S) {
      return G.value.replace("__COLLECTION_ID__", encodeURIComponent(String(S || "0")));
    }
    function Mr(S) {
      return String(S || "").toUpperCase();
    }
    function en(S) {
      return S.nextcloudTags || [];
    }
    function Rn(S) {
      return y.value.find((h) => h.publication === S)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(S)}`;
    }
    function ya(S) {
      return a.publicationYearLandingUrls?.[S] || `/apps/library/years/${encodeURIComponent(S)}`;
    }
    function ga(S) {
      return a.creatorLandingUrls?.[S] || `/apps/library/creators/${encodeURIComponent(S)}`;
    }
    function tn(S) {
      const _ = S?.target?.value || "";
      _ && (window.location.href = _);
    }
    function vr(S) {
      return te[S.id] || "loading";
    }
    function zt(S) {
      te[S.id] = "loaded";
    }
    function On(S) {
      te[S.id] = "error";
    }
    function Ur(S, _) {
      $[S] = !!_?.currentTarget?.open;
    }
    function rr(S) {
      const _ = String(S?.tagName || "").toLowerCase();
      return S?.isContentEditable || ["input", "select", "textarea", "button"].includes(_);
    }
    function _a(S) {
      if (S.key !== "/" || S.metaKey || S.ctrlKey || S.altKey || S.shiftKey || rr(S.target))
        return;
      S.preventDefault();
      const _ = ht.value?.closest?.(".library-workspace-panel--refine");
      _ && (_.open = !0), ht.value?.focus(), ht.value?.select?.();
    }
    function Fr(S) {
      S.key !== "Escape" || document.activeElement !== ht.value || M.q === "" || (S.preventDefault(), M.q = "", ht.value.value = "", window.clearTimeout(mt), Lr({ currentTarget: ht.value }));
    }
    function Nn(S) {
      return !oe.value || S.metaKey || S.ctrlKey || S.altKey ? !1 : S.key === "Escape" ? (S.preventDefault(), $t(), !0) : S.key === "ArrowLeft" && Ae.value ? (S.preventDefault(), Pt(Ae.value), !0) : S.key === "ArrowRight" && Ye.value ? (S.preventDefault(), Pt(Ye.value), !0) : !1;
    }
    function Pn(S) {
      Nn(S) || (_a(S), Fr(S));
    }
    il(() => {
      window.addEventListener("keydown", Pn);
    }), sl(() => {
      window.removeEventListener("keydown", Pn);
    });
    async function rn(S, _) {
      const h = _?.currentTarget?.closest?.("form") || _?.currentTarget;
      if (!h || !S?.starUrl) return;
      const Z = !!S.starred;
      S.starred = !Z;
      try {
        (await fetch(S.starUrl, {
          method: "POST",
          body: new FormData(h),
          credentials: "same-origin"
        })).ok || (S.starred = Z);
      } catch {
        S.starred = Z;
      }
    }
    return (S, _) => (C(), T("div", Zu, [
      l("section", Qu, [
        l("nav", {
          class: "library-catalogue-workspace library-workspace-menubar",
          "aria-label": f(s)("library", "One catalogue workspace")
        }, [
          l("details", td, [
            l("summary", rd, [
              _[22] || (_[22] = l("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "⌕", -1)),
              l("span", {
                class: "library-workspace-panel-title",
                title: f(s)("library", "Search, sort and filters narrow the current result set. Active chips explain every constraint and can be removed one at a time.")
              }, c(f(s)("library", "Refine results")), 9, nd),
              l("small", ad, c(f(s)("library", "Filters, facets and saved filter shortcuts")), 1),
              l("b", id, c(M.shelf ? f(s)("library", "this shelf") : ee.value.length > 0 ? f(s)("library", "current results") : f(s)("library", "whole catalogue")), 1)
            ]),
            l("form", {
              method: "get",
              class: "library-quick-filter-bar",
              "aria-label": f(s)("library", "Quick catalogue filters"),
              onSubmit: Hn(qt, ["prevent"])
            }, [
              (C(!0), T(re, null, ve(P.value, (h) => (C(), T("input", {
                key: h.key,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, ld))), 128)),
              l("div", od, [
                l("label", {
                  class: "library-quick-filter-search",
                  title: f(s)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                }, [
                  l("span", null, [
                    be(c(f(s)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                    _[23] || (_[23] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  lt(l("input", {
                    ref_key: "quickSearchInput",
                    ref: ht,
                    "onUpdate:modelValue": _[0] || (_[0] = (h) => M.q = h),
                    "data-library-quick-search": "",
                    type: "search",
                    name: "q",
                    placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                    onInput: fa
                  }, null, 544), [
                    [ts, M.q]
                  ])
                ], 8, cd),
                l("button", {
                  type: "submit",
                  class: "button primary",
                  "aria-label": f(s)("library", "Search catalogue")
                }, c(f(s)("library", "Search")), 9, ud)
              ]),
              l("details", dd, [
                l("summary", null, c(f(s)("library", "Filter & sort")), 1),
                l("div", fd, [
                  l("label", null, [
                    be(c(f(s)("library", "Sort")), 1),
                    lt(l("select", {
                      "onUpdate:modelValue": _[1] || (_[1] = (h) => M.sort = h),
                      name: "sort",
                      onChange: qt
                    }, [
                      l("option", pd, c(f(s)("library", "Title")), 1),
                      l("option", hd, c(f(s)("library", "Recently added")), 1),
                      l("option", md, c(f(s)("library", "Publication date")), 1),
                      l("option", bd, c(f(s)("library", "Series")), 1),
                      l("option", yd, c(f(s)("library", "Recently opened")), 1),
                      l("option", gd, c(f(s)("library", "Format")), 1)
                    ], 544), [
                      [Et, M.sort]
                    ])
                  ]),
                  l("label", null, [
                    be(c(f(s)("library", "Starred")), 1),
                    lt(l("select", {
                      "onUpdate:modelValue": _[2] || (_[2] = (h) => M.starred = h),
                      name: "starred",
                      onChange: qt
                    }, [
                      l("option", _d, c(f(s)("library", "All")), 1),
                      l("option", vd, c(f(s)("library", "Starred")), 1)
                    ], 544), [
                      [Et, M.starred]
                    ])
                  ]),
                  l("label", null, [
                    be(c(f(s)("library", "Size")), 1),
                    l("select", {
                      value: W.value.limit,
                      name: "limit",
                      onChange: qt
                    }, [
                      (C(), T(re, null, ve(n, (h) => l("option", {
                        key: h,
                        value: h
                      }, c(h), 9, Sd)), 64))
                    ], 40, wd)
                  ]),
                  l("button", {
                    type: "submit",
                    class: "button secondary",
                    "aria-label": f(s)("library", "Apply catalogue filters")
                  }, c(f(s)("library", "Apply filters")), 9, Ed),
                  l("a", {
                    href: "?",
                    class: "button secondary",
                    "aria-label": f(s)("library", "Clear catalogue filters")
                  }, c(f(s)("library", "Clear all")), 9, Cd)
                ])
              ])
            ], 40, sd),
            l("form", {
              method: "get",
              class: "library-filter-bar",
              "aria-label": f(s)("library", "Catalogue search and filters"),
              onSubmit: Hn(qt, ["prevent"])
            }, [
              l("label", null, [
                be(c(f(s)("library", "Type")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": _[3] || (_[3] = (h) => M.type = h),
                  name: "type"
                }, [
                  l("option", xd, c(f(s)("library", "All types")), 1),
                  (C(), T(re, null, ve(r, (h) => l("option", {
                    key: h,
                    value: h
                  }, c(h), 9, Ad)), 64))
                ], 512), [
                  [Et, M.type]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Series / periodical")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": _[4] || (_[4] = (h) => M.publication = h),
                  name: "publication"
                }, [
                  l("option", kd, c(f(s)("library", "All series and periodicals")), 1),
                  (C(!0), T(re, null, ve(w.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(h), 9, Rd))), 128))
                ], 512), [
                  [Et, M.publication]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Publication year")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": _[5] || (_[5] = (h) => M.year = h),
                  name: "year"
                }, [
                  l("option", Od, c(f(s)("library", "All years")), 1),
                  (C(!0), T(re, null, ve(I.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(h), 9, Nd))), 128))
                ], 512), [
                  [Et, M.year]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Creator")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": _[6] || (_[6] = (h) => M.creator = h),
                  name: "creator",
                  title: "Exact full-field creator matches only"
                }, [
                  l("option", Pd, c(f(s)("library", "All creators")), 1),
                  (C(!0), T(re, null, ve(j.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(h), 9, Id))), 128))
                ], 512), [
                  [Et, M.creator]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Nextcloud tag")), 1),
                lt(l("input", {
                  "onUpdate:modelValue": _[7] || (_[7] = (h) => M.tag = h),
                  type: "text",
                  name: "tag",
                  placeholder: "photography"
                }, null, 512), [
                  [ts, M.tag]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Format")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": _[8] || (_[8] = (h) => M.format = h),
                  name: "format"
                }, [
                  l("option", Ld, c(f(s)("library", "All formats")), 1),
                  (C(!0), T(re, null, ve(p.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(Mr(h)), 9, Dd))), 128))
                ], 512), [
                  [Et, M.format]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Shelf")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": _[9] || (_[9] = (h) => M.shelf = h),
                  name: "shelf"
                }, [
                  l("option", Md, c(f(s)("library", "All shelves")), 1),
                  (C(!0), T(re, null, ve(u.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(h), 9, Ud))), 128))
                ], 512), [
                  [Et, M.shelf]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Scan status")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": _[10] || (_[10] = (h) => M.status = h),
                  name: "status"
                }, [
                  l("option", Fd, c(f(s)("library", "All scan statuses")), 1),
                  (C(!0), T(re, null, ve(se.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(h), 9, Hd))), 128))
                ], 512), [
                  [Et, M.status]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Workflow status")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": _[11] || (_[11] = (h) => M.workflowStatus = h),
                  name: "workflowStatus"
                }, [
                  l("option", $d, c(f(s)("library", "All workflow statuses")), 1),
                  (C(!0), T(re, null, ve(K.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(h), 9, jd))), 128))
                ], 512), [
                  [Et, M.workflowStatus]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Genre")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": _[12] || (_[12] = (h) => M.genre = h),
                  name: "genre"
                }, [
                  l("option", Vd, c(f(s)("library", "All genres")), 1),
                  (C(!0), T(re, null, ve(ue.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(h), 9, qd))), 128))
                ], 512), [
                  [Et, M.genre]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Classification")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": _[13] || (_[13] = (h) => M.classification = h),
                  name: "classification"
                }, [
                  l("option", Bd, c(f(s)("library", "All classifications")), 1),
                  (C(!0), T(re, null, ve(le.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(h), 9, zd))), 128))
                ], 512), [
                  [Et, M.classification]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Scanner conflicts")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": _[14] || (_[14] = (h) => M.scannerConflicts = h),
                  name: "scannerConflicts"
                }, [
                  l("option", Wd, c(f(s)("library", "All metadata")), 1),
                  l("option", Kd, c(f(s)("library", "Needs review")), 1)
                ], 512), [
                  [Et, M.scannerConflicts]
                ])
              ]),
              l("button", Gd, c(f(s)("library", "Apply filters")), 1),
              l("a", Yd, c(f(s)("library", "Clear")), 1)
            ], 40, Td)
          ]),
          l("details", Xd, [
            l("summary", Jd, [
              _[24] || (_[24] = l("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "↗", -1)),
              l("span", {
                class: "library-workspace-panel-title",
                title: f(s)("library", "Shortcuts reopen ordinary catalogue views, so filters, chips and pagination stay consistent.")
              }, c(f(s)("library", "Browse shortcuts")), 9, Zd),
              l("small", Qd, c(f(s)("library", "Continue reading, recently added, rediscover and useful views")), 1),
              l("b", ef, c(f(s)("library", "whole catalogue")), 1)
            ]),
            he.value ? (C(), T("article", tf, [
              l("h3", {
                title: f(s)("library", "Fast entry points keep browsing visual: continue, revisit recent additions, or rediscover one shelf item.")
              }, c(f(s)("library", "Continue reading")), 9, rf),
              l("div", nf, [
                ae.value[0] ? (C(), T("a", {
                  key: 0,
                  class: "button primary",
                  href: ae.value[0].openUrl
                }, c(f(s)("library", "Read now")), 9, af)) : Y("", !0),
                ae.value[0] ? (C(), T("button", {
                  key: 1,
                  type: "button",
                  class: "button secondary",
                  onClick: _[15] || (_[15] = (h) => pt(ae.value[0]))
                }, c(f(s)("library", "Details")), 1)) : Y("", !0)
              ])
            ])) : Y("", !0),
            pe.value ? (C(), T("article", sf, [
              l("p", lf, c(f(s)("library", "Rediscover")), 1),
              l("strong", null, c(pe.value.title), 1),
              l("span", of, c(pe.value.creators || pe.value.publication || pe.value.cachedPath), 1),
              l("button", {
                type: "button",
                class: "button secondary",
                onClick: _[16] || (_[16] = (h) => pt(pe.value))
              }, c(f(s)("library", "Peek")), 1)
            ])) : Y("", !0),
            l("nav", {
              class: "library-useful-view-links",
              "aria-label": f(s)("library", "Useful views")
            }, [
              (C(!0), T(re, null, ve(ha.value, (h) => (C(), T("a", {
                key: h.key,
                class: "library-useful-view-chip",
                href: Bt(h.filters),
                title: f(s)("library", h.description)
              }, [
                l("strong", null, c(f(s)("library", h.label)), 1),
                l("small", df, c(Number(Qr.value[h.key] || 0)), 1)
              ], 8, uf))), 128))
            ], 8, cf),
            l("div", ff, [
              y.value.length > 0 ? (C(), T("label", {
                key: 0,
                class: "library-shortcut-select-card library-periodical-groups",
                title: f(s)("library", "Jump into recurring publications with one click.")
              }, [
                l("span", null, c(f(s)("library", "Series / periodicals")), 1),
                l("select", { onChange: tn }, [
                  l("option", hf, c(f(s)("library", "Choose series")), 1),
                  (C(!0), T(re, null, ve(y.value, (h) => (C(), T("option", {
                    key: h.publication,
                    value: Rn(h.publication)
                  }, c(h.publication) + " · " + c(h.itemCount), 9, mf))), 128))
                ], 32)
              ], 8, pf)) : Y("", !0),
              I.value.length > 0 ? (C(), T("label", bf, [
                l("span", null, c(f(s)("library", "Publication year")), 1),
                l("select", { onChange: tn }, [
                  l("option", yf, c(f(s)("library", "Choose year")), 1),
                  (C(!0), T(re, null, ve(I.value, (h) => (C(), T("option", {
                    key: h,
                    value: ya(h)
                  }, c(h), 9, gf))), 128))
                ], 32)
              ])) : Y("", !0),
              j.value.length > 0 ? (C(), T("label", _f, [
                l("span", null, c(f(s)("library", "Creator")), 1),
                l("select", { onChange: tn }, [
                  l("option", vf, c(f(s)("library", "Choose creator")), 1),
                  (C(!0), T(re, null, ve(j.value, (h) => (C(), T("option", {
                    key: h,
                    value: ga(h)
                  }, c(h), 9, wf))), 128))
                ], 32)
              ])) : Y("", !0)
            ]),
            l("section", Sf, [
              l("h3", {
                title: f(s)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
              }, c(f(s)("library", "Custom collections")), 9, Ef),
              l("form", {
                method: "post",
                action: A.value,
                class: "library-saved-collection-save-form",
                title: tr.value ? "" : f(s)("library", "Choose search terms or filters first, then save them as a custom collection.")
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, Tf),
                l("input", {
                  type: "hidden",
                  name: "savedCollectionFilters",
                  value: pa.value
                }, null, 8, xf),
                l("label", null, [
                  be(c(f(s)("library", "Collection name")), 1),
                  l("input", {
                    type: "text",
                    name: "savedCollectionName",
                    placeholder: f(s)("library", "e.g. Bremen photo books"),
                    disabled: !tr.value,
                    autocomplete: "off"
                  }, null, 8, Af)
                ]),
                l("button", {
                  type: "submit",
                  class: "button secondary",
                  disabled: !tr.value,
                  title: f(s)("library", "Save current view")
                }, c(f(s)("library", "Save")), 9, kf)
              ], 8, Cf),
              L.value.length > 0 ? (C(), T("nav", {
                key: 0,
                class: "library-saved-collection-links",
                "aria-label": f(s)("library", "Saved custom collections")
              }, [
                (C(!0), T(re, null, ve(L.value, (h) => (C(), T("article", {
                  key: h.id,
                  class: "library-saved-collection-card"
                }, [
                  l("a", {
                    class: "library-saved-collection-link",
                    href: ba(h.filters)
                  }, [
                    l("strong", null, c(h.name), 1),
                    l("span", null, c(Number(h.count || 0)) + " " + c(f(s)("library", "items")), 1)
                  ], 8, Of),
                  l("form", {
                    method: "post",
                    action: kn(h.id),
                    class: "library-saved-collection-delete-form"
                  }, [
                    l("input", {
                      type: "hidden",
                      name: "requesttoken",
                      value: ce.value
                    }, null, 8, Pf),
                    l("button", If, c(f(s)("library", "Delete")), 1)
                  ], 8, Nf)
                ]))), 128))
              ], 8, Rf)) : Y("", !0)
            ])
          ]),
          l("details", {
            class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
            "data-workspace-panel": "batch",
            "aria-label": f(s)("library", "Batch actions for current results")
          }, [
            l("summary", Df, [
              _[25] || (_[25] = l("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "✓", -1)),
              l("span", {
                class: "library-workspace-panel-title",
                title: f(s)("library", "Every batch action uses the current filters, names its scope, and returns changed / unchanged / skipped / error feedback.")
              }, c(f(s)("library", "Batch actions")), 9, Mf),
              l("small", Uf, c(f(s)("library", "Preview and apply changes to current results")), 1),
              l("b", Ff, c(W.value.total) + " " + c(f(s)("library", "Current filter result")), 1)
            ]),
            l("div", Hf, [
              l("form", {
                method: "post",
                action: Me.value,
                class: "library-batch-action-card library-batch-tag-form"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, jf),
                (C(!0), T(re, null, ve(N.value, (h) => (C(), T("input", {
                  key: h.key,
                  type: "hidden",
                  name: h.key,
                  value: h.value
                }, null, 8, Vf))), 128)),
                l("label", null, [
                  l("span", null, c(f(s)("library", "Add tag")), 1),
                  l("input", {
                    type: "text",
                    name: "nextcloudTagName",
                    list: "library-nextcloud-tag-suggestions",
                    placeholder: f(s)("library", "e.g. Review"),
                    autocomplete: "off"
                  }, null, 8, qf)
                ]),
                l("button", {
                  type: "submit",
                  class: "button primary",
                  title: f(s)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")
                }, c(f(s)("library", "Apply")), 9, Bf)
              ], 8, $f),
              l("form", {
                method: "post",
                action: rt.value,
                class: "library-batch-action-card library-batch-tag-remove-form"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, Wf),
                (C(!0), T(re, null, ve(N.value, (h) => (C(), T("input", {
                  key: `remove-tag-${h.key}`,
                  type: "hidden",
                  name: h.key,
                  value: h.value
                }, null, 8, Kf))), 128)),
                l("label", null, [
                  l("span", null, c(f(s)("library", "Remove tag")), 1),
                  l("input", {
                    type: "text",
                    name: "nextcloudTagName",
                    list: "library-nextcloud-tag-suggestions",
                    placeholder: f(s)("library", "e.g. Review"),
                    autocomplete: "off"
                  }, null, 8, Gf)
                ]),
                l("button", {
                  type: "submit",
                  class: "button secondary",
                  title: f(s)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")
                }, c(f(s)("library", "Remove")), 9, Yf)
              ], 8, zf),
              l("form", {
                method: "post",
                action: dt.value,
                class: "library-batch-action-card library-batch-metadata-reset-form"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, Jf),
                (C(!0), T(re, null, ve(N.value, (h) => (C(), T("input", {
                  key: `reset-${h.key}`,
                  type: "hidden",
                  name: h.key,
                  value: h.value
                }, null, 8, Zf))), 128)),
                _[26] || (_[26] = l("input", {
                  type: "hidden",
                  name: "scannerConflicts",
                  value: "1"
                }, null, -1)),
                l("button", {
                  type: "submit",
                  class: "button secondary",
                  title: f(s)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")
                }, c(f(s)("library", "Reset metadata")), 9, Qf)
              ], 8, Xf),
              l("form", {
                method: "post",
                action: Ge.value,
                class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                target: "_blank"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, tp),
                (C(!0), T(re, null, ve(N.value, (h) => (C(), T("input", {
                  key: `edit-preview-${h.key}`,
                  type: "hidden",
                  name: h.key,
                  value: h.value
                }, null, 8, rp))), 128)),
                l("label", null, [
                  l("span", null, c(f(s)("library", "Field")), 1),
                  l("select", np, [
                    l("option", ap, c(f(s)("library", "Publication type")), 1),
                    l("option", ip, c(f(s)("library", "Subtitle")), 1),
                    l("option", sp, c(f(s)("library", "Creators")), 1),
                    l("option", lp, c(f(s)("library", "Series / periodical")), 1),
                    l("option", op, c(f(s)("library", "Publication date")), 1),
                    l("option", cp, c(f(s)("library", "Language")), 1),
                    l("option", up, c(f(s)("library", "Publisher")), 1),
                    l("option", dp, c(f(s)("library", "Genres")), 1),
                    l("option", fp, c(f(s)("library", "Classifications")), 1)
                  ])
                ]),
                l("label", null, [
                  l("span", null, c(f(s)("library", "Value")), 1),
                  _[27] || (_[27] = l("input", {
                    type: "text",
                    name: "bulkEditValue",
                    placeholder: "magazine, de, photography...",
                    autocomplete: "off"
                  }, null, -1))
                ]),
                l("button", {
                  type: "submit",
                  class: "button secondary",
                  title: f(s)("library", "Preview first, then apply from the review page.")
                }, c(f(s)("library", "Preview edit")), 9, pp)
              ], 8, ep),
              l("form", {
                method: "post",
                action: At.value,
                class: "library-batch-action-card library-batch-cover-refresh-form"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, mp),
                (C(!0), T(re, null, ve(N.value, (h) => (C(), T("input", {
                  key: `cover-${h.key}`,
                  type: "hidden",
                  name: h.key,
                  value: h.value
                }, null, 8, bp))), 128)),
                l("button", {
                  type: "submit",
                  class: "button secondary",
                  title: f(s)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")
                }, c(f(s)("library", "Fresh covers")), 9, yp)
              ], 8, hp)
            ])
          ], 8, Lf),
          l("details", gp, [
            l("summary", _p, [
              _[28] || (_[28] = l("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "!", -1)),
              l("span", {
                class: "library-workspace-panel-title",
                title: f(s)("library", "Review cards compare current values, proposed values, source and consequence before anything changes. Source files stay in Nextcloud Files; compact cards stay browse-first while Details carries repair actions.")
              }, c(f(s)("library", "Review queue")), 9, vp),
              l("small", wp, c(f(s)("library", "Weak metadata, conflicts, missing files and extraction errors")), 1),
              l("b", Sp, c(f(s)("library", "current results")), 1)
            ]),
            l("nav", {
              class: "library-weak-metadata-links",
              "aria-label": f(s)("library", "Weak metadata catalogue views")
            }, [
              (C(!0), T(re, null, ve(ma.value, (h) => (C(), T("a", {
                key: h.key,
                class: "library-weak-metadata-card",
                href: Bt(h.filters),
                title: f(s)("library", h.description)
              }, [
                l("span", null, [
                  l("strong", null, c(f(s)("library", h.label)), 1)
                ]),
                l("b", null, c(Number(Qr.value[h.key] || 0)), 1)
              ], 8, Cp))), 128))
            ], 8, Ep),
            l("div", Tp, [
              l("article", {
                title: f(s)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")
              }, [
                l("h4", null, c(f(s)("library", "Metadata-error queue")), 1),
                l("a", {
                  class: "button secondary",
                  href: nt.value.reviewUrl || "?status=metadata_error"
                }, c(f(s)("library", "Open metadata-error rows")), 9, Ap),
                l("a", {
                  class: "button secondary",
                  href: ge.value
                }, c(f(s)("library", "Export metadata-error rows")), 9, kp),
                l("form", {
                  method: "post",
                  action: Me.value,
                  class: "library-review-queue-tag-form"
                }, [
                  l("input", {
                    type: "hidden",
                    name: "requesttoken",
                    value: ce.value
                  }, null, 8, Op),
                  _[29] || (_[29] = l("input", {
                    type: "hidden",
                    name: "status",
                    value: "metadata_error"
                  }, null, -1)),
                  _[30] || (_[30] = l("input", {
                    type: "hidden",
                    name: "nextcloudTagName",
                    value: "library-metadata-error"
                  }, null, -1)),
                  l("button", Np, c(f(s)("library", "Tag metadata-error rows")), 1)
                ], 8, Rp)
              ], 8, xp),
              l("article", {
                title: f(s)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")
              }, [
                l("h4", null, c(f(s)("library", "Scanner-conflict queue")), 1),
                l("a", {
                  class: "button secondary",
                  href: He.value
                }, c(f(s)("library", "Review scanner conflicts")), 9, Ip),
                l("form", {
                  method: "post",
                  action: Me.value,
                  class: "library-review-queue-tag-form"
                }, [
                  l("input", {
                    type: "hidden",
                    name: "requesttoken",
                    value: ce.value
                  }, null, 8, Dp),
                  _[31] || (_[31] = l("input", {
                    type: "hidden",
                    name: "scannerConflicts",
                    value: "1"
                  }, null, -1)),
                  _[32] || (_[32] = l("input", {
                    type: "hidden",
                    name: "nextcloudTagName",
                    value: "library-scanner-conflict"
                  }, null, -1)),
                  l("button", Mp, c(f(s)("library", "Tag scanner-conflict rows")), 1)
                ], 8, Lp)
              ], 8, Pp)
            ]),
            Xe.value.enabled ? (C(), T("section", Up, [
              l("div", Fp, [
                l("p", Hp, c(f(s)("library", "Metadata review workbench")), 1),
                l("h3", {
                  id: "library-metadata-review-workbench-heading",
                  title: f(s)("library", "Shows current value, scanner candidate, path-template candidate, sidecar value and source provenance together. No source files are changed; user-edited values are never silently overwritten.")
                }, c(f(s)("library", "Review next conflict")), 9, $p)
              ]),
              Xe.value.item ? (C(), T("article", jp, [
                l("header", null, [
                  l("strong", null, c(Xe.value.item.title), 1),
                  l("span", Vp, c(Xe.value.item.cachedPath), 1)
                ]),
                l("div", qp, [
                  (C(!0), T(re, null, ve(Xe.value.fields, (h) => (C(), T("article", {
                    key: h.field,
                    class: "library-metadata-review-field"
                  }, [
                    l("h4", null, c(h.field), 1),
                    l("dl", null, [
                      l("div", null, [
                        l("dt", null, c(f(s)("library", "Current value")), 1),
                        l("dd", null, c(h.currentValue || "—"), 1)
                      ]),
                      l("div", null, [
                        l("dt", null, c(f(s)("library", "scanner candidate")), 1),
                        l("dd", null, c(h.scannerCandidate || "—"), 1)
                      ]),
                      l("div", null, [
                        l("dt", null, c(f(s)("library", "path-template candidate")), 1),
                        l("dd", null, c(h.pathTemplateCandidate || "—"), 1)
                      ]),
                      l("div", null, [
                        l("dt", null, c(f(s)("library", "sidecar value")), 1),
                        l("dd", null, c(h.sidecarValue || "—"), 1)
                      ]),
                      l("div", null, [
                        l("dt", null, c(f(s)("library", "source provenance")), 1),
                        l("dd", null, c(h.sourceProvenance || "—"), 1)
                      ])
                    ]),
                    l("form", {
                      method: "post",
                      action: Xe.value.item.resetFieldUrl,
                      class: "library-metadata-review-accept-form"
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: ce.value
                      }, null, 8, zp),
                      l("input", {
                        type: "hidden",
                        name: "field",
                        value: h.field
                      }, null, 8, Wp),
                      _[33] || (_[33] = l("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      l("button", Kp, c(f(s)("library", "accept scanner candidate")), 1)
                    ], 8, Bp)
                  ]))), 128))
                ]),
                l("footer", Gp, [
                  l("a", {
                    class: "button secondary",
                    href: Xe.value.item.detailsUrl
                  }, c(f(s)("library", "Open full details")), 9, Yp),
                  l("a", {
                    class: "button secondary",
                    href: Xe.value.skipUrl
                  }, c(f(s)("library", "Skip to next conflict")), 9, Xp)
                ])
              ])) : (C(), T("p", Jp, c(f(s)("library", "No reviewable conflict is visible on this page. Open scanner conflicts to review the next matching item.")), 1)),
              l("a", {
                class: "button secondary",
                href: Xe.value.reviewNextUrl
              }, c(f(s)("library", "Review next conflict")), 9, Zp)
            ])) : Y("", !0)
          ]),
          l("details", {
            class: "library-workspace-panel library-workspace-panel--admin",
            "data-workspace-panel": "admin",
            onToggle: at
          }, [
            l("summary", Qp, [
              _[34] || (_[34] = l("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", {
                class: "library-workspace-panel-title",
                title: f(s)("library", "Maintain roots, scans, exports and repair operations away from the browse cards.")
              }, c(f(s)("library", "Admin tools")), 9, eh),
              l("small", th, c(f(s)("library", "Roots, scans, exports and repair operations")), 1),
              l("b", rh, c(f(s)("library", "all enabled roots")), 1)
            ]),
            l("div", nh, [
              l("a", {
                href: V.value,
                class: "button secondary",
                "aria-label": "Open Library settings"
              }, c(f(s)("library", "Settings")), 9, ah),
              De.value ? (C(), T("a", {
                key: 0,
                href: De.value,
                class: "button secondary",
                "aria-label": "Export corrected metadata"
              }, c(f(s)("library", "Export corrected metadata")), 9, ih)) : Y("", !0),
              Ie.value ? (C(), T("a", {
                key: 1,
                href: Ie.value,
                class: "button secondary",
                "aria-label": "Export sidecar manifest"
              }, c(f(s)("library", "Sidecar manifest")), 9, sh)) : Y("", !0),
              qe.value ? (C(), T("a", {
                key: 2,
                href: qe.value,
                class: "button secondary",
                "aria-label": "Export sidecar ZIP"
              }, c(f(s)("library", "Sidecar ZIP")), 9, lh)) : Y("", !0)
            ]),
            l("div", oh, [
              l("p", ch, c(f(s)("library", "Import health")), 1),
              l("h3", {
                title: f(s)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")
              }, c(f(s)("library", "Metadata overview")), 9, uh),
              _e.loading ? (C(), T("p", dh, c(f(s)("library", "Loading cached metadata overview…")), 1)) : _e.error ? (C(), T("p", fh, c(_e.error), 1)) : _e.loaded ? Y("", !0) : (C(), T("p", ph, c(f(s)("library", "Open Admin tools to load the cached metadata and cover overview.")), 1)),
              _e.loaded ? (C(), T(re, { key: 3 }, [
                Oe.value.message ? (C(), T("p", hh, c(Oe.value.message), 1)) : Oe.value.cacheStatus === "missing" ? (C(), T("p", mh, c(f(s)("library", "No cached metadata overview exists yet")), 1)) : Y("", !0),
                ze.value ? (C(), T("p", bh, c(f(s)("library", "Last generated")) + ": " + c(ze.value), 1)) : Y("", !0),
                l("button", {
                  type: "button",
                  class: "button secondary library-import-health-refresh",
                  disabled: _e.refreshing,
                  onClick: mr
                }, c(_e.refreshing ? f(s)("library", "Refreshing metadata overview…") : f(s)("library", "Refresh metadata overview")), 9, yh),
                l("div", gh, [
                  l("a", {
                    class: "button secondary",
                    href: nt.value.reviewUrl || "?status=metadata_error"
                  }, c(f(s)("library", "Review metadata errors")), 9, _h),
                  l("a", {
                    class: "button secondary",
                    href: Ue.value
                  }, c(f(s)("library", "Full review")), 9, vh),
                  l("a", {
                    class: "button secondary",
                    href: ge.value
                  }, c(f(s)("library", "Export TSV")), 9, wh),
                  l("a", {
                    class: "button secondary",
                    href: fe.value
                  }, c(f(s)("library", "Probe covers")), 9, Sh)
                ]),
                l("div", Eh, [
                  l("article", null, [
                    l("h4", null, c(f(s)("library", "Metadata errors")), 1),
                    l("p", Ch, c(nt.value.total || 0), 1)
                  ]),
                  l("article", null, [
                    l("h4", null, c(f(s)("library", "Archive/container check")), 1),
                    l("p", Th, c(me.value.mismatches || 0), 1)
                  ]),
                  l("article", null, [
                    l("h4", null, c(f(s)("library", "Cover health")), 1),
                    l("p", xh, c(Qt.value.note), 1)
                  ]),
                  l("article", null, [
                    l("h4", null, c(f(s)("library", "Cover support matrix")), 1),
                    l("p", Ah, c(f(s)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1)
                  ]),
                  nt.value.examples?.length ? (C(), T("details", kh, [
                    l("summary", null, c(f(s)("library", "Example files and suggested actions")), 1),
                    l("ul", null, [
                      (C(!0), T(re, null, ve(nt.value.examples, (h) => (C(), T("li", {
                        key: `${h.fileId}-${h.path}`
                      }, [
                        l("code", null, c(h.path), 1),
                        l("span", null, c(h.scanStatus) + " · " + c(h.scanError) + " · " + c(h.actualContainerType), 1),
                        l("strong", null, c(h.suggestedRepairAction), 1)
                      ]))), 128))
                    ])
                  ])) : Y("", !0)
                ])
              ], 64)) : Y("", !0)
            ])
          ], 32)
        ], 8, ed),
        l("div", Rh, [
          l("div", null, [
            St.value ? (C(), T("p", Oh, c(m.value), 1)) : Y("", !0),
            l("h2", Nh, c(Nt.value), 1)
          ])
        ]),
        U.value ? (C(), T("p", Ph, c(U.value), 1)) : Y("", !0),
        St.value ? (C(), T("section", Ih, [
          l("p", Lh, c(m.value), 1),
          l("h3", {
            id: "library-discovery-heading",
            title: wt.value ? f(s)("library", "Items by this creator, sorted by publication context when available.") : vt.value ? f(s)("library", "Items from this publication year, sorted by publication date when available.") : f(s)("library", "Items in this publication, sorted by issue/date context when available.")
          }, c(ft.value), 9, Dh),
          l("div", Mh, [
            l("span", null, c(W.value.total) + " " + c(f(s)("library", "items")), 1),
            E.value?.earliestYear && E.value?.latestYear ? (C(), T("span", Uh, c(E.value.earliestYear) + "–" + c(E.value.latestYear), 1)) : Y("", !0),
            E.value?.datedCount ? (C(), T("span", Fh, c(E.value.datedCount) + " " + c(f(s)("library", "dated")), 1)) : Y("", !0),
            E.value?.undatedCount > 0 ? (C(), T("span", Hh, c(E.value.undatedCount) + " " + c(f(s)("library", "undated")), 1)) : Y("", !0)
          ]),
          $e.value && E.value ? (C(), T("aside", $h, [
            l("strong", null, c(f(s)("library", "Publication contents")), 1),
            l("span", null, c(E.value.itemCount) + " " + c(f(s)("library", "items")), 1),
            E.value.earliestYear && E.value.latestYear ? (C(), T("span", jh, c(E.value.earliestYear) + "–" + c(E.value.latestYear), 1)) : Y("", !0),
            l("span", null, c(E.value.datedCount) + " " + c(f(s)("library", "with issue/date coverage")), 1),
            E.value.undatedCount > 0 ? (C(), T("span", Vh, c(E.value.undatedCount) + " " + c(f(s)("library", "without dates yet")), 1)) : Y("", !0),
            l("span", null, c(f(s)("library", "read-only grouping")), 1)
          ])) : Y("", !0),
          $e.value && E.value?.issueGroups?.length ? (C(), T("section", qh, [
            l("div", null, [
              l("p", Bh, c(f(s)("library", "Issue order")), 1),
              l("h4", {
                id: "library-publication-issue-groups-heading",
                title: f(s)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
              }, c(f(s)("library", "Read-only issue/date grouping")), 9, zh)
            ]),
            l("div", Wh, [
              (C(!0), T(re, null, ve(E.value.issueGroups, (h) => (C(), T("a", {
                key: `strip-${h.label}`,
                class: "library-issue-strip-card",
                href: h.items?.[0]?.detailsUrl || "#"
              }, [
                l("span", null, c(h.label), 1),
                l("strong", null, c(h.items?.[0]?.issueLabel || f(s)("library", "Issue")), 1),
                l("small", null, c(h.items?.length || 0) + " " + c(f(s)("library", "items")), 1)
              ], 8, Kh))), 128))
            ]),
            E.value.gapRanges?.length ? (C(), T("p", Gh, c(f(s)("library", "Gap")) + ": " + c(E.value.gapRanges.join(", ")), 1)) : Y("", !0),
            (C(!0), T(re, null, ve(E.value.issueGroups, (h) => (C(), T("div", {
              key: h.label,
              class: "library-publication-issue-group"
            }, [
              l("h5", null, c(h.label), 1),
              l("ol", null, [
                (C(!0), T(re, null, ve(h.items, (Z, Pe) => (C(), T("li", {
                  key: Z.itemId
                }, [
                  l("span", Yh, c(Z.issueLabel), 1),
                  l("a", {
                    href: Z.detailsUrl || "#"
                  }, c(Z.title), 9, Xh),
                  l("small", null, [
                    be(c(Z.publicationType), 1),
                    Z.publicationDate ? (C(), T(re, { key: 0 }, [
                      be(" · " + c(Z.publicationDate), 1)
                    ], 64)) : Y("", !0)
                  ]),
                  l("small", Jh, [
                    Pe > 0 ? (C(), T(re, { key: 0 }, [
                      be(c(f(s)("library", "Previous issue")), 1)
                    ], 64)) : Y("", !0),
                    Pe > 0 && Pe < h.items.length - 1 ? (C(), T(re, { key: 1 }, [
                      be(" · ")
                    ], 64)) : Y("", !0),
                    Pe < h.items.length - 1 ? (C(), T(re, { key: 2 }, [
                      be(c(f(s)("library", "Next issue")), 1)
                    ], 64)) : Y("", !0)
                  ])
                ]))), 128))
              ])
            ]))), 128)),
            E.value.unknownIssueItems?.length ? (C(), T("details", Zh, [
              l("summary", {
                title: f(s)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
              }, c(f(s)("library", "Unknown issue/date")) + " · " + c(E.value.unknownIssueItems.length), 9, Qh)
            ])) : Y("", !0)
          ])) : Y("", !0),
          l("p", null, [
            l("a", em, c(f(s)("library", "Back to full catalogue")), 1)
          ])
        ])) : Y("", !0),
        l("nav", tm, [
          l("button", {
            type: "button",
            "data-library-view-mode": "compact",
            class: Lt({ active: B.value === "compact" }),
            "aria-pressed": B.value === "compact" ? "true" : "false",
            onClick: _[17] || (_[17] = (h) => Ne("compact"))
          }, c(f(s)("library", "Compact")), 11, rm),
          l("button", {
            type: "button",
            "data-library-view-mode": "gallery",
            class: Lt({ active: B.value === "gallery" }),
            "aria-pressed": B.value === "gallery" ? "true" : "false",
            onClick: _[18] || (_[18] = (h) => Ne("gallery"))
          }, c(f(s)("library", "Gallery")), 11, nm),
          l("button", {
            type: "button",
            "data-library-view-mode": "shelf",
            class: Lt({ active: B.value === "shelf" }),
            "aria-pressed": B.value === "shelf" ? "true" : "false",
            onClick: _[19] || (_[19] = (h) => Ne("shelf"))
          }, c(f(s)("library", "Shelf")), 11, am)
        ]),
        l("div", im, [
          l("p", sm, [
            be(c(f(s)("library", "Showing")) + " " + c(W.value.from) + "–" + c(W.value.to) + " " + c(f(s)("library", "of")) + " " + c(W.value.total) + " " + c(f(s)("library", "catalogue items")), 1),
            ee.value.length > 0 ? (C(), T("span", lm, [
              _[35] || (_[35] = be(" · ", -1)),
              l("a", om, c(f(s)("library", "Clear all filters")), 1)
            ])) : Y("", !0)
          ]),
          l("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": f(s)("library", "Catalogue pagination")
          }, [
            l("span", um, [
              be(c(f(s)("library", "Page")) + " " + c(W.value.page), 1),
              W.value.total > 0 ? (C(), T("span", dm, " · " + c(W.value.from) + "–" + c(W.value.to), 1)) : Y("", !0)
            ]),
            W.value.previousUrl ? (C(), T("a", {
              key: 0,
              href: W.value.previousUrl
            }, c(f(s)("library", "Previous")), 9, fm)) : (C(), T("span", pm, c(f(s)("library", "Previous")), 1)),
            W.value.nextUrl ? (C(), T("a", {
              key: 2,
              href: W.value.nextUrl
            }, c(f(s)("library", "Next")), 9, hm)) : (C(), T("span", mm, c(f(s)("library", "Next")), 1))
          ], 8, cm)
        ]),
        ee.value.length > 0 ? (C(), T("nav", {
          key: 2,
          class: "library-active-filter-chips",
          "aria-label": f(s)("library", "Active filters")
        }, [
          l("span", null, c(f(s)("library", "Active filters")), 1),
          (C(!0), T(re, null, ve(ee.value, (h) => (C(), T("a", {
            key: h.key,
            href: Jr(h.key),
            class: "library-filter-chip",
            "aria-label": `${f(s)("library", "Remove filter")}: ${h.label}`
          }, [
            l("strong", null, c(h.label) + ":", 1),
            be(" " + c(h.value) + " ", 1),
            _[36] || (_[36] = l("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, ym))), 128))
        ], 8, bm)) : Y("", !0),
        o.value.length === 0 ? (C(), T("div", {
          key: 3,
          class: Lt(["library-empty-content", { "library-first-run-guidance": R.value || x.value, "library-filter-empty-state": k.value && !R.value && !x.value }]),
          role: "status"
        }, [
          R.value ? (C(), T(re, { key: 0 }, [
            l("h3", {
              title: f(s)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
            }, c(f(s)("library", "Start with one Library root")), 9, gm),
            l("p", _m, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, c(f(s)("library", "Add a Library root")), 9, vm),
              l("span", wm, c(f(s)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : x.value ? (C(), T(re, { key: 1 }, [
            l("h3", {
              title: f(s)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
            }, c(f(s)("library", "No enabled Library roots")), 9, Sm),
            l("p", Em, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, c(f(s)("library", "Open Library settings")), 9, Cm)
            ])
          ], 64)) : k.value ? (C(), T(re, { key: 2 }, [
            l("h3", {
              title: f(s)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
            }, c(f(s)("library", "No matches for the current filters")), 9, Tm),
            l("p", xm, [
              l("a", {
                href: Zr(),
                class: "button secondary"
              }, c(f(s)("library", "Clear search")), 9, Am),
              l("a", km, c(f(s)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (C(), T(re, { key: 3 }, [
            l("h3", {
              title: f(s)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
            }, c(f(s)("library", "No catalogue items yet")), 9, Rm),
            l("p", Om, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, c(f(s)("library", "Run a scan from settings")), 9, Nm)
            ])
          ], 64))
        ], 2)) : (C(), T("div", {
          key: 4,
          class: Lt(["library-cover-gallery", Q.value])
        }, [
          (C(!0), T(re, null, ve(o.value, (h) => (C(), T("article", {
            key: h.id,
            class: Lt(["library-cover-card", { "library-cover-card--open": $[h.id], "library-cover-card--cover-loaded": vr(h) === "loaded", "library-cover-card--cover-error": vr(h) === "error" }])
          }, [
            l("a", {
              class: "library-cover-link",
              href: h.openUrl,
              "aria-label": `Read ${h.title}`
            }, [
              l("span", Im, [
                vr(h) === "loading" ? (C(), T("span", Lm)) : Y("", !0),
                l("img", {
                  class: Lt(["library-cover-image", { "library-cover-image--loaded": vr(h) === "loaded" }]),
                  src: h.coverUrl,
                  alt: `Cover for ${h.title}`,
                  loading: "lazy",
                  onLoad: (Z) => zt(h),
                  onError: (Z) => On(h)
                }, null, 42, Dm),
                vr(h) === "error" ? (C(), T("span", Mm, c(f(s)("library", "Cover unavailable")), 1)) : Y("", !0)
              ])
            ], 8, Pm),
            l("form", {
              method: "post",
              action: h.starUrl,
              class: "library-cover-star-form",
              onSubmit: Hn((Z) => rn(h, Z), ["prevent"])
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Fm),
              _[37] || (_[37] = l("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              l("input", {
                type: "hidden",
                name: "starred",
                value: h.starred ? "0" : "1"
              }, null, 8, Hm),
              l("button", {
                type: "submit",
                class: Lt(["library-cover-star-button", { "library-cover-star-button--starred": h.starred }]),
                "aria-pressed": h.starred ? "true" : "false",
                title: h.starred ? f(s)("library", "Unstar this publication") : f(s)("library", "Star this publication"),
                "aria-label": h.starred ? f(s)("library", "Unstar this publication") : f(s)("library", "Star this publication"),
                onClick: Hn((Z) => rn(h, Z), ["prevent"])
              }, c(h.starred ? "★" : "☆"), 11, $m)
            ], 40, Um),
            l("div", jm, [
              l("div", Vm, [
                l("h3", null, [
                  h.starred ? (C(), T("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": f(s)("library", "Starred")
                  }, "★", 8, qm)) : Y("", !0),
                  be(c(h.title), 1)
                ]),
                l("a", {
                  class: "library-cover-read",
                  href: h.openUrl
                }, c(f(s)("library", "Read")), 9, Bm)
              ]),
              l("details", {
                class: "library-cover-details",
                onToggle: (Z) => Ur(h.id, Z)
              }, [
                l("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${f(s)("library", "Show details and actions")}: ${h.title}`
                }, c(f(s)("library", "Details")), 9, Wm),
                l("div", Km, [
                  h.creators ? (C(), T("p", Gm, c(h.creators), 1)) : Y("", !0),
                  l("dl", Ym, [
                    l("div", Xm, [
                      l("dt", null, c(f(s)("library", "Type")), 1),
                      l("dd", null, c(h.publicationType), 1)
                    ]),
                    h.publication ? (C(), T("div", Jm, [
                      l("dt", null, c(f(s)("library", "Series")), 1),
                      l("dd", null, c(h.publication), 1)
                    ])) : Y("", !0),
                    h.publicationDate ? (C(), T("div", Zm, [
                      l("dt", null, c(f(s)("library", "Date")), 1),
                      l("dd", null, c(h.publicationDate), 1)
                    ])) : Y("", !0),
                    h.workflowStatus ? (C(), T("div", Qm, [
                      l("dt", null, c(f(s)("library", "Status")), 1),
                      l("dd", null, c(h.workflowStatus), 1)
                    ])) : Y("", !0),
                    h.hasScannerConflict ? (C(), T("div", eb, [
                      l("dt", null, c(f(s)("library", "Review")), 1),
                      l("dd", null, c(h.scannerConflictCount) + " fields", 1)
                    ])) : Y("", !0),
                    h.lastOpenedAt ? (C(), T("div", tb, [
                      l("dt", null, c(f(s)("library", "Last opened")), 1),
                      l("dd", null, c(h.lastOpenedAt), 1)
                    ])) : Y("", !0),
                    h.extension ? (C(), T("div", rb, [
                      l("dt", null, c(f(s)("library", "Format")) + ":", 1),
                      l("dd", null, c(Mr(h.extension)), 1)
                    ])) : Y("", !0),
                    h.shelf ? (C(), T("div", nb, [
                      l("dt", null, c(f(s)("library", "Shelf")), 1),
                      l("dd", null, c(h.shelf), 1)
                    ])) : Y("", !0)
                  ]),
                  h.description ? (C(), T("p", ab, c(h.description), 1)) : Y("", !0),
                  h.scanStatus !== "indexed" || h.scanError ? (C(), T("p", ib, [
                    be(" scanStatus: " + c(h.scanStatus || "unknown"), 1),
                    h.scanError ? (C(), T("span", sb, " · scanError: " + c(h.scanError), 1)) : Y("", !0)
                  ])) : Y("", !0),
                  l("div", lb, [
                    en(h).length === 0 ? (C(), T("span", ob, "No Nextcloud tags")) : (C(!0), T(re, { key: 1 }, ve(en(h), (Z) => (C(), T("span", {
                      key: Z.id,
                      class: "library-tag"
                    }, c(Z.name), 1))), 128))
                  ]),
                  l("p", cb, [
                    l("a", {
                      href: h.filesUrl
                    }, c(f(s)("library", "Show in Files")), 9, ub),
                    _[38] || (_[38] = be(" · ", -1)),
                    l("a", {
                      href: h.downloadUrl
                    }, c(f(s)("library", "Download source")), 9, db),
                    _[39] || (_[39] = be(" · ", -1)),
                    l("button", {
                      type: "button",
                      class: "library-link-button library-cover-details-drawer-button",
                      onClick: (Z) => pt(h)
                    }, c(f(s)("library", "Details drawer")), 9, fb),
                    _[40] || (_[40] = be(" · ", -1)),
                    l("a", {
                      href: h.detailsUrl
                    }, c(f(s)("library", "Details")), 9, pb)
                  ])
                ])
              ], 40, zm)
            ])
          ], 2))), 128))
        ], 2)),
        o.value.length > 0 ? (C(), T("nav", {
          key: 5,
          class: "library-pagination library-pagination--bottom",
          "aria-label": f(s)("library", "Catalogue pagination")
        }, [
          l("span", mb, [
            be(c(f(s)("library", "Page")) + " " + c(W.value.page), 1),
            W.value.total > 0 ? (C(), T("span", bb, " · " + c(W.value.from) + "–" + c(W.value.to), 1)) : Y("", !0)
          ]),
          W.value.previousUrl ? (C(), T("a", {
            key: 0,
            href: W.value.previousUrl
          }, c(f(s)("library", "Previous")), 9, yb)) : (C(), T("span", gb, c(f(s)("library", "Previous")), 1)),
          W.value.nextUrl ? (C(), T("a", {
            key: 2,
            href: W.value.nextUrl
          }, c(f(s)("library", "Next")), 9, _b)) : (C(), T("span", vb, c(f(s)("library", "Next")), 1))
        ], 8, hb)) : Y("", !0),
        oe.value ? (C(), T("div", {
          key: 6,
          class: "library-detail-drawer-backdrop",
          onClick: $t,
          "aria-hidden": "true"
        })) : Y("", !0),
        oe.value ? (C(), T("aside", wb, [
          l("button", {
            type: "button",
            class: "library-detail-drawer-close",
            "aria-label": "Close details panel",
            onClick: $t
          }, "×"),
          l("p", Sb, c(f(s)("library", "Esc closes; arrow keys browse neighbouring items.")), 1),
          l("img", {
            class: "library-detail-drawer-cover",
            src: oe.value.coverUrl,
            alt: `Cover for ${oe.value.title}`,
            loading: "lazy"
          }, null, 8, Eb),
          l("p", Cb, c(oe.value.publicationType || f(s)("library", "Publication")), 1),
          l("h3", Tb, c(oe.value.title), 1),
          oe.value.creators ? (C(), T("p", xb, c(oe.value.creators), 1)) : Y("", !0),
          oe.value.description ? (C(), T("p", Ab, c(oe.value.description), 1)) : Y("", !0),
          l("dl", kb, [
            oe.value.publication ? (C(), T("div", Rb, [
              l("dt", null, c(f(s)("library", "Series")), 1),
              l("dd", null, c(oe.value.publication), 1)
            ])) : Y("", !0),
            oe.value.publicationDate ? (C(), T("div", Ob, [
              l("dt", null, c(f(s)("library", "Date")), 1),
              l("dd", null, c(oe.value.publicationDate), 1)
            ])) : Y("", !0),
            oe.value.shelf ? (C(), T("div", Nb, [
              l("dt", null, c(f(s)("library", "Shelf")), 1),
              l("dd", null, c(oe.value.shelf), 1)
            ])) : Y("", !0)
          ]),
          l("p", Pb, [
            l("a", {
              class: "button primary",
              href: oe.value.openUrl
            }, c(f(s)("library", "Read")), 9, Ib),
            l("a", {
              class: "button secondary",
              href: oe.value.detailsUrl
            }, c(f(s)("library", "View full details")), 9, Lb)
          ]),
          l("nav", {
            class: "library-detail-drawer-stepper",
            "aria-label": f(s)("library", "Browse neighbouring items")
          }, [
            l("button", {
              type: "button",
              class: "button secondary",
              disabled: !Ae.value,
              onClick: _[20] || (_[20] = (h) => Pt(Ae.value))
            }, c(f(s)("library", "Previous issue")), 9, Mb),
            l("button", {
              type: "button",
              class: "button secondary",
              disabled: !Ye.value,
              onClick: _[21] || (_[21] = (h) => Pt(Ye.value))
            }, c(f(s)("library", "Next issue")), 9, Ub)
          ], 8, Db)
        ])) : Y("", !0)
      ])
    ]));
  }
}, ws = fu("library", "catalogue", {}), Bn = document.querySelector("#library-vue-root"), Ss = {
  ...ws,
  requestToken: Bn?.dataset.requestToken || ws.requestToken || ""
};
function X(e) {
  return String(e ?? "");
}
function Ml(e) {
  return X(e).toUpperCase();
}
function Hb(e, t, r, n = X) {
  for (const a of t) {
    const i = document.createElement("option");
    i.value = X(a), i.textContent = n(a), X(a) === X(r) && (i.selected = !0), e.appendChild(i);
  }
}
function Es(e, t, r, n, a = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = r === "q" ? "search" : "text", o.name = r, o.value = X(n), o.placeholder = a, i.appendChild(o), e.appendChild(i);
}
function jr(e, t, r, n, a, i, o = X) {
  const u = document.createElement("label");
  u.textContent = t;
  const p = document.createElement("select");
  p.name = r;
  const w = document.createElement("option");
  w.value = "", w.textContent = a, p.appendChild(w), Hb(p, i, n, o), u.appendChild(p), e.appendChild(u);
}
function Vr(e) {
  const t = X(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function $b(e, t = {}) {
  return X(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(X(e || t?.publication || ""))}`);
}
function jb(e) {
  return X(e.discoveryPage) === "publication";
}
function Vb(e, t = {}) {
  return X(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(X(e))}`);
}
function qa(e) {
  return X(e.discoveryPage) === "year";
}
function qb(e, t = {}) {
  return X(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(X(e))}`);
}
function Ba(e) {
  return X(e.discoveryPage) === "creator";
}
function Bb(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && X(n).trim() !== "");
}
function zb() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function cn(e, t, r, n) {
  const a = document.createElement("a");
  return a.href = t, a.className = r, a.textContent = n, e.appendChild(a), a;
}
function Wb(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function Kb(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", s("library", "Catalogue search and filters")), Es(n, s("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), jr(n, s("library", "Type"), "type", r.type, s("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), Es(n, s("library", "Nextcloud tag"), "tag", r.tag, "photography"), jr(n, s("library", "Format"), "format", r.format, s("library", "All formats"), e.formats || [], Ml), jr(n, s("library", "Shelf"), "shelf", r.shelf, s("library", "All shelves"), e.shelves || []), jr(n, s("library", "Scan status"), "status", r.status, s("library", "All scan statuses"), e.scanStatuses || []), jr(n, s("library", "Sort"), "sort", r.sort || "title", s("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), jr(n, s("library", "Page size"), "limit", t.limit || 100, s("library", "Page size"), [25, 50, 100, 250, 500]);
  const a = document.createElement("button");
  a.type = "submit", a.className = "button primary", a.setAttribute("aria-label", s("library", "Apply catalogue filters")), a.textContent = s("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", s("library", "Clear catalogue filters")), i.textContent = s("library", "Clear"), n.append(a, i), n;
}
function Gb() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", a = e.get("batchMetadataSkipped") || "0", i = document.createElement("p");
  return i.className = "library-notice library-batch-metadata-apply-result", i.textContent = s("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${a} skipped.`), i;
}
function Yb(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", s("library", "Quick catalogue filters"));
  let a = null;
  const i = () => {
    window.clearTimeout(a), a = window.setTimeout(() => n.requestSubmit(), 350);
  };
  for (const [E, I] of Object.entries(r)) {
    if (["q", "sort", "starred"].includes(E) || X(I).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = E, j.value = X(I), n.appendChild(j);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = s("library", "Search");
  const u = document.createElement("input");
  u.type = "search", u.name = "q", u.value = X(r.q), u.placeholder = "Camera, Eco, Rolleiflex...", u.addEventListener("input", i), o.appendChild(u), n.appendChild(o);
  const p = [
    [s("library", "Sort"), "sort", r.sort || "title", [["title", s("library", "Title")], ["recent", s("library", "Recently added")], ["publicationDate", s("library", "Publication date")], ["publication", s("library", "Series")], ["lastOpened", s("library", "Recently opened")], ["format", s("library", "Format")]]],
    [s("library", "Starred"), "starred", r.starred || "", [["", s("library", "All")], ["1", s("library", "Starred")]]],
    [s("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [E, I, j, se] of p) {
    const K = document.createElement("label");
    K.textContent = E;
    const ue = document.createElement("select");
    ue.name = I;
    for (const [le, W] of se) {
      const M = document.createElement("option");
      M.value = X(le), M.textContent = X(W), X(le) === X(j) && (M.selected = !0), ue.appendChild(M);
    }
    ue.addEventListener("change", () => n.requestSubmit()), K.appendChild(ue), n.appendChild(K);
  }
  const w = document.createElement("button");
  w.type = "submit", w.className = "button primary", w.setAttribute("aria-label", s("library", "Apply catalogue filters")), w.textContent = s("library", "Apply filters");
  const y = document.createElement("a");
  return y.href = "?", y.className = "button secondary", y.setAttribute("aria-label", s("library", "Clear catalogue filters")), y.textContent = s("library", "Clear all"), n.append(w, y), n;
}
function Xb(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, a = X(e.settingsUrl || ""), i = X(e.metadataExportUrl || ""), o = X(e.batchTagUrl || "/apps/library/bulk/tags"), u = X(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), p = X(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), w = X(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), y = X(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), E = document.createElement("div");
  E.className = "library-vue-catalogue library-vue-fallback", E.dataset.vueFallback = "true";
  const I = document.createElement("section");
  I.className = "library-panel", I.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const se = document.createElement("div"), K = document.createElement("h2");
  K.id = "library-catalogue-heading", K.textContent = s("library", "Library");
  const ue = document.createElement("p");
  ue.className = "library-muted", ue.textContent = s("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), se.append(K, ue);
  const le = document.createElement("nav");
  if (le.className = "library-catalogue-toolbar", le.setAttribute("aria-label", s("library", "Library actions")), a) {
    const P = document.createElement("a");
    P.href = a, P.className = "button secondary", P.setAttribute("aria-label", "Open Library settings"), P.textContent = s("library", "Settings"), le.appendChild(P);
  }
  if (i) {
    const P = document.createElement("a");
    P.href = i, P.className = "button secondary", P.setAttribute("aria-label", "Export corrected metadata"), P.textContent = s("library", "Export corrected metadata"), le.appendChild(P);
  }
  if (e.metadataSidecarManifestUrl) {
    const P = document.createElement("a");
    P.href = e.metadataSidecarManifestUrl, P.className = "button secondary", P.setAttribute("aria-label", "Export sidecar manifest"), P.textContent = s("library", "Sidecar manifest"), le.appendChild(P);
  }
  if (e.metadataSidecarBundleUrl) {
    const P = document.createElement("a");
    P.href = e.metadataSidecarBundleUrl, P.className = "button secondary", P.setAttribute("aria-label", "Export sidecar ZIP"), P.textContent = s("library", "Sidecar ZIP"), le.appendChild(P);
  }
  j.append(se, le), I.appendChild(j);
  const W = Gb();
  W && I.appendChild(W), I.appendChild(Yb(e, n));
  const M = document.createElement("details");
  M.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = s("library", "Show catalogue filters"), M.append(V, Kb(e, n)), I.appendChild(M), jb(e) || qa(e) || Ba(e)) {
    const P = document.createElement("section");
    P.className = "library-discovery-header", P.setAttribute("aria-labelledby", "library-discovery-heading");
    const N = document.createElement("p");
    N.className = "library-muted", N.textContent = Ba(e) ? s("library", "Creator") : qa(e) ? s("library", "Publication year") : s("library", "Publication / series");
    const $ = document.createElement("h3");
    $.id = "library-discovery-heading", $.textContent = X(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const te = document.createElement("p");
    te.className = "library-muted", te.textContent = `${n.total ?? r.length} ${Ba(e) ? s("library", "items by this creator. Sorted by publication context when available.") : qa(e) ? s("library", "items from this publication year. Sorted by publication date when available.") : s("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const ae = document.createElement("a");
    ae.href = "/apps/library/", ae.className = "button secondary", ae.textContent = s("library", "Back to full catalogue"), P.append(N, $, te, ae), I.appendChild(P);
  }
  const ce = document.createElement("p");
  ce.className = "library-muted library-filter-result-summary", ce.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const De = document.createElement("a");
  De.href = "?", De.textContent = ` ${s("library", "Clear all filters")}`, ce.appendChild(De), I.appendChild(ce);
  const Ie = document.createElement("details");
  Ie.className = "library-batch-actions";
  const qe = document.createElement("summary");
  qe.textContent = `${s("library", "Batch actions for current results")} (${n.total ?? r.length} ${s("library", "Current filter result")})`;
  const Ee = document.createElement("form");
  Ee.method = "post", Ee.action = o, Ee.className = "library-batch-tag-form";
  const Me = Vr(e);
  Me && Ee.appendChild(Me);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (X(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = P, $.value = X(N), Ee.appendChild($);
  }
  const rt = document.createElement("label");
  rt.textContent = s("library", "Apply Nextcloud tag to current results");
  const dt = document.createElement("input");
  dt.type = "text", dt.name = "nextcloudTagName", dt.placeholder = "batch-review", rt.appendChild(dt);
  const Ge = document.createElement("button");
  Ge.type = "submit", Ge.className = "button secondary", Ge.textContent = s("library", "Apply Nextcloud tag to current results");
  const At = document.createElement("p");
  At.className = "library-muted", At.textContent = s("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ee.append(rt, Ge, At);
  const He = document.createElement("form");
  He.method = "post", He.action = u, He.className = "library-batch-tag-remove-form";
  const Ue = Vr(e);
  Ue && He.appendChild(Ue);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (X(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = P, $.value = X(N), He.appendChild($);
  }
  const ge = document.createElement("label");
  ge.textContent = s("library", "Nextcloud tag");
  const fe = document.createElement("input");
  fe.type = "text", fe.name = "nextcloudTagName", fe.setAttribute("list", "library-nextcloud-tag-suggestions"), fe.placeholder = s("library", "e.g. Review"), fe.autocomplete = "off", ge.appendChild(fe);
  const Be = document.createElement("button");
  Be.type = "submit", Be.className = "button secondary", Be.textContent = s("library", "Remove tag from current results");
  const _e = document.createElement("p");
  _e.className = "library-muted", _e.textContent = s("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), He.append(ge, Be, _e);
  const Oe = document.createElement("form");
  Oe.method = "post", Oe.action = p, Oe.className = "library-batch-metadata-reset-form";
  const ze = Vr(e);
  ze && Oe.appendChild(ze);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (X(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = P, $.value = X(N), Oe.appendChild($);
  }
  const nt = document.createElement("input");
  nt.type = "hidden", nt.name = "scannerConflicts", nt.value = "1";
  const me = document.createElement("button");
  me.type = "submit", me.className = "button secondary", me.textContent = s("library", "Reset filtered metadata");
  const Qt = document.createElement("p");
  Qt.className = "library-muted", Qt.textContent = s("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Oe.append(nt, me, Qt);
  const $e = document.createElement("form");
  $e.method = "post", $e.action = w, $e.className = "library-batch-metadata-edit-preview-form", $e.target = "_blank";
  const vt = Vr(e);
  vt && $e.appendChild(vt);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (X(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = P, $.value = X(N), $e.appendChild($);
  }
  const wt = document.createElement("label");
  wt.textContent = s("library", "Metadata field");
  const St = document.createElement("select");
  St.name = "bulkEditField";
  for (const [P, N] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const $ = document.createElement("option");
    $.value = P, $.textContent = s("library", N), St.appendChild($);
  }
  wt.appendChild(St);
  const ft = document.createElement("label");
  ft.textContent = s("library", "Preview value");
  const Nt = document.createElement("input");
  Nt.type = "text", Nt.name = "bulkEditValue", Nt.placeholder = "magazine, de, photography...", Nt.autocomplete = "off", ft.appendChild(Nt);
  const m = document.createElement("button");
  m.type = "submit", m.className = "button secondary", m.textContent = s("library", "Preview & apply metadata edit");
  const b = document.createElement("p");
  b.className = "library-muted", b.textContent = s("library", "Preview first, then apply from the review page."), $e.append(wt, ft, m, b);
  const v = document.createElement("form");
  v.method = "post", v.action = y, v.className = "library-batch-cover-refresh-form";
  const R = Vr(e);
  R && v.appendChild(R);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (X(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = P, $.value = X(N), v.appendChild($);
  }
  const x = document.createElement("button");
  x.type = "submit", x.className = "button secondary", x.textContent = s("library", "Request fresh cover previews");
  const k = document.createElement("p");
  k.className = "library-muted", k.textContent = s("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), v.append(x, k), Ie.append(qe, Ee, He, Oe, $e, v), I.appendChild(Ie);
  const D = document.createElement("nav");
  D.className = "library-pagination", D.setAttribute("aria-label", s("library", "Catalogue pagination"));
  const U = document.createElement("span");
  U.className = "library-pagination-range", U.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, D.appendChild(U), I.appendChild(D);
  const L = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], A = document.createElement("details");
  A.className = L.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const G = document.createElement("summary");
  G.className = "library-periodical-groups-summary", G.textContent = s("library", "Show top series and periodicals"), A.appendChild(G);
  const H = document.createElement("h3");
  H.textContent = L.length > 0 ? s("library", "Top series and periodicals") : s("library", "No series or periodicals found yet");
  const B = document.createElement("p");
  if (B.className = "library-muted", B.textContent = L.length > 0 ? s("library", "Jump into recurring publications with one click.") : s("library", "Add publication or series names in item details to build this shortcut panel."), A.append(H, B), L.length > 0) {
    const P = document.createElement("ul");
    for (const N of L) {
      const $ = document.createElement("li"), te = document.createElement("a");
      te.href = $b(N.publication, N), te.textContent = X(N.publication);
      const ae = document.createElement("span");
      ae.className = "library-muted", ae.textContent = `${N.itemCount} items`, $.append(te, ae), P.appendChild($);
    }
    A.appendChild(P);
  }
  I.appendChild(A);
  const Q = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (Q.length > 0) {
    const P = document.createElement("details");
    P.className = "library-year-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = s("library", "Show publication years");
    const $ = document.createElement("h3");
    $.textContent = s("library", "Top publication years");
    const te = document.createElement("p");
    te.className = "library-muted", te.textContent = s("library", "Jump into dated books, magazines, journals and comics by year.");
    const ae = document.createElement("ul");
    for (const pe of Q) {
      const he = document.createElement("li"), oe = document.createElement("a");
      oe.href = Vb(pe, e), oe.textContent = X(pe), he.appendChild(oe), ae.appendChild(he);
    }
    P.append(N, $, te, ae), I.appendChild(P);
  }
  const ee = Array.isArray(e.creators) ? e.creators : [];
  if (ee.length > 0) {
    const P = document.createElement("details");
    P.className = "library-creator-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = s("library", "Show creators");
    const $ = document.createElement("h3");
    $.textContent = s("library", "Top creators");
    const te = document.createElement("p");
    te.className = "library-muted", te.textContent = s("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const ae = document.createElement("ul");
    for (const pe of ee) {
      const he = document.createElement("li"), oe = document.createElement("a");
      oe.href = qb(pe, e), oe.textContent = X(pe), he.appendChild(oe), ae.appendChild(he);
    }
    P.append(N, $, te, ae), I.appendChild(P);
  }
  if (r.length === 0) {
    const P = document.createElement("div"), N = Number(e.rootCount || 0), $ = Number(e.enabledRootCount || 0), te = Bb(e);
    P.className = "library-empty-content", (N === 0 || $ === 0) && P.classList.add("library-first-run-guidance"), te && N > 0 && $ > 0 && P.classList.add("library-filter-empty-state"), P.setAttribute("role", "status");
    const ae = document.createElement("h3"), pe = document.createElement("p");
    pe.className = "library-muted";
    const he = document.createElement("p");
    he.className = "library-empty-actions", N === 0 ? (ae.textContent = s("library", "Start with one Library root"), pe.textContent = s("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), cn(he, a, "button primary", s("library", "Add a Library root")), Wb(he, s("library", "Run a scan after saving a root"))) : $ === 0 ? (ae.textContent = s("library", "No enabled Library roots"), pe.textContent = s("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), cn(he, a, "button primary", s("library", "Open Library settings"))) : te ? (ae.textContent = s("library", "No matches for the current filters"), pe.textContent = s("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), cn(he, zb(), "button secondary", s("library", "Clear search")), cn(he, "?", "button primary", s("library", "Clear all filters"))) : (ae.textContent = s("library", "No catalogue items yet"), pe.textContent = s("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), cn(he, a, "button primary", s("library", "Run a scan from settings"))), P.append(ae, pe, he), I.appendChild(P);
  } else {
    const P = document.createElement("div");
    P.className = "library-cover-gallery";
    for (const N of r) {
      const $ = document.createElement("article");
      $.className = "library-cover-card";
      const te = document.createElement("a");
      te.className = "library-cover-link", te.href = X(N.openUrl || "#"), te.setAttribute("aria-label", `Read ${X(N.title || "publication")}`);
      const ae = document.createElement("img");
      ae.className = "library-cover-image", ae.src = X(N.coverUrl || ""), ae.alt = `Cover for ${X(N.title || "publication")}`, ae.loading = "lazy", te.appendChild(ae);
      const pe = Vr(e), he = document.createElement("form");
      he.method = "post", he.action = X(N.starUrl || ""), he.className = "library-cover-star-form", pe && he.appendChild(pe);
      const oe = document.createElement("input");
      oe.type = "hidden", oe.name = "returnTo", oe.value = "catalogue";
      const Ce = document.createElement("input");
      Ce.type = "hidden", Ce.name = "starred", Ce.value = N.starred ? "0" : "1";
      const Ae = document.createElement("button");
      Ae.type = "submit", Ae.className = N.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Ae.setAttribute("aria-pressed", N.starred ? "true" : "false"), Ae.setAttribute("aria-label", N.starred ? s("library", "Unstar this publication") : s("library", "Star this publication")), Ae.title = N.starred ? s("library", "Unstar this publication") : s("library", "Star this publication"), Ae.textContent = N.starred ? "★" : "☆", he.append(oe, Ce, Ae);
      const Ye = document.createElement("div");
      Ye.className = "library-cover-summary";
      const Ht = document.createElement("h3");
      if (Ht.textContent = X(N.title || "Untitled publication"), Ye.appendChild(Ht), N.creators) {
        const mt = document.createElement("p");
        mt.className = "library-creator", mt.textContent = X(N.creators), Ye.appendChild(mt);
      }
      const Xe = document.createElement("dl");
      Xe.className = "library-cover-detail-list";
      const er = [
        ["Type", X(N.publicationType || "other")],
        ["Format", N.extension ? Ml(N.extension) : ""],
        ["Shelf", N.shelf ? X(N.shelf) : ""]
      ].filter(([, mt]) => mt !== "");
      for (const [mt, Ir] of er) {
        const jt = document.createElement("div");
        jt.className = "library-cover-detail-chip";
        const Vt = document.createElement("dt");
        Vt.textContent = mt;
        const at = document.createElement("dd");
        at.textContent = Ir, jt.append(Vt, at), Xe.appendChild(jt);
      }
      Ye.appendChild(Xe);
      const kt = document.createElement("p"), pt = document.createElement("a");
      pt.href = X(N.openUrl || "#"), pt.textContent = s("library", "Read");
      const $t = document.createElement("a");
      $t.href = X(N.filesUrl || "#"), $t.textContent = s("library", "Show in Files");
      const Pt = document.createElement("a");
      Pt.href = X(N.downloadUrl || "#"), Pt.textContent = s("library", "Download source");
      const ht = document.createElement("a");
      ht.href = X(N.detailsUrl || "#"), ht.textContent = s("library", "Details"), kt.append(pt, document.createTextNode(" · "), $t, document.createTextNode(" · "), Pt, document.createTextNode(" · "), ht), Ye.appendChild(kt), $.append(te, he, Ye), P.appendChild($);
    }
    I.appendChild(P);
  }
  return E.appendChild(I), E;
}
if (Bn)
  try {
    cu(Fb, { state: Ss }).mount(Bn);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Bn.replaceChildren(Xb(Ss));
  }
//# sourceMappingURL=library-main.mjs.map
