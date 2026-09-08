// @__NO_SIDE_EFFECTS__
function Ui(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Te = {}, On = [], Dt = () => {
}, ds = () => !1, Dr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ur = (e) => e.startsWith("onUpdate:"), Xe = Object.assign, Fi = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, jl = Object.prototype.hasOwnProperty, _e = (e, t) => jl.call(e, t), Z = Array.isArray, en = (e) => sr(e) === "[object Map]", bn = (e) => sr(e) === "[object Set]", mo = (e) => sr(e) === "[object Date]", le = (e) => typeof e == "function", Ne = (e) => typeof e == "string", Ut = (e) => typeof e == "symbol", Ee = (e) => e !== null && typeof e == "object", ps = (e) => (Ee(e) || le(e)) && le(e.then) && le(e.catch), hs = Object.prototype.toString, sr = (e) => hs.call(e), Vl = (e) => sr(e).slice(8, -1), ms = (e) => sr(e) === "[object Object]", Hi = (e) => Ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Gn = /* @__PURE__ */ Ui(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Bl = /-\w/g, Ct = Fr(
  (e) => e.replace(Bl, (t) => t.slice(1).toUpperCase())
), zl = /\B([A-Z])/g, yn = Fr(
  (e) => e.replace(zl, "-$1").toLowerCase()
), bs = Fr((e) => e.charAt(0).toUpperCase() + e.slice(1)), ni = Fr(
  (e) => e ? `on${bs(e)}` : ""
), Mt = (e, t) => !Object.is(e, t), Sr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ys = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Hr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let bo;
const $r = () => bo || (bo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $i(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = Ne(r) ? Gl(r) : $i(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Ne(e) || Ee(e))
    return e;
}
const Wl = /;(?![^(]*\))/g, ql = /:([^]+)/, Kl = /\/\*[^]*?\*\//g;
function Gl(e) {
  const t = {};
  return e.replace(Kl, "").split(Wl).forEach((n) => {
    if (n) {
      const r = n.split(ql);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Nn(e) {
  let t = "";
  if (Ne(e))
    t = e;
  else if (Z(e))
    for (let n = 0; n < e.length; n++) {
      const r = Nn(e[n]);
      r && (t += r + " ");
    }
  else if (Ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Yl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xl = /* @__PURE__ */ Ui(Yl);
function gs(e) {
  return !!e || e === "";
}
function Jl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = tn(e[r], t[r]);
  return n;
}
function yo(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const i of e) {
    let o = -1;
    for (let s = 0; s < n.length; s++)
      if (!r[s] && tn(i, n[s])) {
        o = s;
        break;
      }
    if (o < 0) return !1;
    r[o] = 1;
  }
  return !0;
}
function tn(e, t) {
  if (e === t) return !0;
  let n = mo(e), r = mo(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Ut(e), r = Ut(t), n || r)
    return e === t;
  if (n = Z(e), r = Z(t), n || r)
    return n && r ? Jl(e, t) : !1;
  if (n = Ee(e), r = Ee(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = en(e), r = en(t), n || r || (n = bn(e), r = bn(t), n || r))
      return n && r ? yo(e, t) : !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s), u = t.hasOwnProperty(s);
      if (l && !u || !l && u || !tn(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((n) => tn(n, t));
}
const _s = (e) => !!(e && e.__v_isRef === !0), h = (e) => Ne(e) ? e : e == null ? "" : Z(e) || Ee(e) && (e.toString === hs || !le(e.toString)) ? _s(e) ? h(e.value) : JSON.stringify(e, vs, 2) : String(e), vs = (e, t) => _s(t) ? vs(e, t.value) : en(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], o) => (n[ri(r, o) + " =>"] = i, n),
    {}
  )
} : bn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ri(n))
} : Ut(t) ? ri(t) : Ee(t) && !Z(t) && !ms(t) ? String(t) : t, ri = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ut(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let ze;
class Ql {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ze && (ze.active ? (this.parent = ze, this.index = (ze.scopes || (ze.scopes = [])).push(
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
        const r = this.scopes.slice();
        for (t = 0, n = r.length; t < n; t++)
          r[t].pause();
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
        const i = this.scopes.slice();
        for (t = 0, n = i.length; t < n; t++)
          i[t].resume();
      }
      const r = this.effects.slice();
      for (t = 0, n = r.length; t < n; t++)
        r[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ze;
      try {
        return ze = this, t();
      } finally {
        ze = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ze, ze = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ze === this)
        ze = this.prevScope;
      else {
        let t = ze;
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
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const i = this.scopes.slice();
        for (n = 0, r = i.length; n < r; n++)
          i[n].stop(!0);
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
  return ze;
}
let Ce;
const ii = /* @__PURE__ */ new WeakSet();
class Es {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ze && (ze.active ? ze.effects.push(this) : this.flags &= -2);
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
    const t = Ce, n = xt;
    Ce = this, xt = !0;
    try {
      return this.fn();
    } finally {
      xs(this), Ce = t, xt = n, this.flags &= -3;
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
let Ts = 0, Yn, Xn;
function Ss(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Xn, Xn = e;
    return;
  }
  e.next = Yn, Yn = e;
}
function ji() {
  Ts++;
}
function Vi() {
  if (--Ts > 0)
    return;
  if (Xn) {
    let t = Xn;
    for (Xn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Yn; ) {
    let t = Yn;
    for (Yn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Cs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function xs(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Bi(r), ta(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function xi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (As(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function As(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === er) || (e.globalVersion = er, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !xi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Ce, r = xt;
  Ce = e, xt = !0;
  try {
    Cs(e);
    const i = e.fn(e._value);
    (t.version === 0 || Mt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Ce = n, xt = r, xs(e), e.flags &= -3;
  }
}
function Bi(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Bi(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ta(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let xt = !0;
const ws = [];
function Wt() {
  ws.push(xt), xt = !1;
}
function qt() {
  const e = ws.pop();
  xt = e === void 0 ? !0 : e;
}
function go(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ce;
    Ce = void 0;
    try {
      t();
    } finally {
      Ce = n;
    }
  }
}
let er = 0;
class na {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class zi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ce || !xt || Ce === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ce)
      n = this.activeLink = new na(Ce, this), Ce.deps ? (n.prevDep = Ce.depsTail, Ce.depsTail.nextDep = n, Ce.depsTail = n) : Ce.deps = Ce.depsTail = n, Rs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ce.depsTail, n.nextDep = void 0, Ce.depsTail.nextDep = n, Ce.depsTail = n, Ce.deps === n && (Ce.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, er++, this.notify(t);
  }
  notify(t) {
    ji();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
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
      for (let r = t.deps; r; r = r.nextDep)
        Rs(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ai = /* @__PURE__ */ new WeakMap(), pn = /* @__PURE__ */ Symbol(
  ""
), wi = /* @__PURE__ */ Symbol(
  ""
), tr = /* @__PURE__ */ Symbol(
  ""
);
function Ge(e, t, n) {
  if (xt && Ce) {
    let r = Ai.get(e);
    r || Ai.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new zi()), i.map = r, i.key = n), i.track();
  }
}
function Vt(e, t, n, r, i, o) {
  const s = Ai.get(e);
  if (!s) {
    er++;
    return;
  }
  const l = (u) => {
    u && u.trigger();
  };
  if (ji(), t === "clear")
    s.forEach(l);
  else {
    const u = Z(e), v = u && Hi(n);
    if (u && n === "length") {
      const b = Number(r);
      s.forEach((E, N) => {
        (N === "length" || N === tr || !Ut(N) && N >= b) && l(E);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && l(s.get(n)), v && l(s.get(tr)), t) {
        case "add":
          u ? v && l(s.get("length")) : (l(s.get(pn)), en(e) && l(s.get(wi)));
          break;
        case "delete":
          u || (l(s.get(pn)), en(e) && l(s.get(wi)));
          break;
        case "set":
          en(e) && l(s.get(pn));
          break;
      }
  }
  Vi();
}
function Cn(e) {
  const t = /* @__PURE__ */ ge(e);
  return t === e ? t : (Ge(t, "iterate", tr), /* @__PURE__ */ gt(e) ? t : t.map(At));
}
function jr(e) {
  return Ge(e = /* @__PURE__ */ ge(e), "iterate", tr), e;
}
function Lt(e, t) {
  return /* @__PURE__ */ Kt(e) ? In(/* @__PURE__ */ hn(e) ? At(t) : t) : At(t);
}
const ra = {
  __proto__: null,
  [Symbol.iterator]() {
    return oi(this, Symbol.iterator, (e) => Lt(this, e));
  },
  concat(...e) {
    return Cn(this).concat(
      ...e.map((t) => Z(t) ? Cn(t) : t)
    );
  },
  entries() {
    return oi(this, "entries", (e) => (e[1] = Lt(this, e[1]), e));
  },
  every(e, t) {
    return Ht(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ht(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Lt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Ht(
      this,
      "find",
      e,
      t,
      (n) => Lt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ht(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ht(
      this,
      "findLast",
      e,
      t,
      (n) => Lt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ht(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ht(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return si(this, "includes", e);
  },
  indexOf(...e) {
    return si(this, "indexOf", e);
  },
  join(e) {
    return Cn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return si(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ht(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Hn(this, "pop");
  },
  push(...e) {
    return Hn(this, "push", e);
  },
  reduce(e, ...t) {
    return _o(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return _o(this, "reduceRight", e, t);
  },
  shift() {
    return Hn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ht(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Hn(this, "splice", e);
  },
  toReversed() {
    return Cn(this).toReversed();
  },
  toSorted(e) {
    return Cn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Cn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Hn(this, "unshift", e);
  },
  values() {
    return oi(this, "values", (e) => Lt(this, e));
  }
};
function oi(e, t, n) {
  const r = jr(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ gt(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const ia = Array.prototype;
function Ht(e, t, n, r, i, o) {
  const s = jr(e), l = s !== e && !/* @__PURE__ */ gt(e), u = s[t];
  if (u !== ia[t]) {
    const E = u.apply(e, o);
    return l ? At(E) : E;
  }
  let v = n;
  s !== e && (l ? v = function(E, N) {
    return n.call(this, Lt(e, E), N, e);
  } : n.length > 2 && (v = function(E, N) {
    return n.call(this, E, N, e);
  }));
  const b = u.call(s, v, r);
  return l && i ? i(b) : b;
}
function _o(e, t, n, r) {
  const i = jr(e), o = i !== e && !/* @__PURE__ */ gt(e);
  let s = n, l = !1;
  i !== e && (o ? (l = r.length === 0, s = function(v, b, E) {
    return l && (l = !1, v = Lt(e, v)), n.call(this, v, Lt(e, b), E, e);
  }) : n.length > 3 && (s = function(v, b, E) {
    return n.call(this, v, b, E, e);
  }));
  const u = i[t](s, ...r);
  return l ? Lt(e, u) : u;
}
function si(e, t, n) {
  const r = /* @__PURE__ */ ge(e);
  Ge(r, "iterate", tr);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Ki(n[0]) ? (n[0] = /* @__PURE__ */ ge(n[0]), r[t](...n)) : i;
}
function Hn(e, t, n = []) {
  Wt(), ji();
  const r = (/* @__PURE__ */ ge(e))[t].apply(e, n);
  return Vi(), qt(), r;
}
const oa = /* @__PURE__ */ Ui("__proto__,__v_isRef,__isVue"), Os = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ut)
);
function sa(e) {
  Ut(e) || (e = String(e));
  const t = /* @__PURE__ */ ge(this);
  return Ge(t, "has", e), t.hasOwnProperty(e);
}
class Ns {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (i ? o ? ba : Is : o ? Ls : ks).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = Z(t);
    if (!i) {
      let u;
      if (s && (u = ra[n]))
        return u;
      if (n === "hasOwnProperty")
        return sa;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ye(t) ? t : r
    );
    if ((Ut(n) ? Os.has(n) : oa(n)) || (i || Ge(t, "get", n), o))
      return l;
    if (/* @__PURE__ */ Ye(l)) {
      const u = s && Hi(n) ? l : l.value;
      return i && Ee(u) ? /* @__PURE__ */ Oi(u) : u;
    }
    return Ee(l) ? i ? /* @__PURE__ */ Oi(l) : /* @__PURE__ */ fn(l) : l;
  }
}
class Ps extends Ns {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    const s = Z(t) && Hi(n);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ Kt(o);
      if (!/* @__PURE__ */ gt(r) && !/* @__PURE__ */ Kt(r) && (o = /* @__PURE__ */ ge(o), r = /* @__PURE__ */ ge(r)), !s && /* @__PURE__ */ Ye(o) && !/* @__PURE__ */ Ye(r))
        return v || (o.value = r), !0;
    }
    const l = s ? Number(n) < t.length : _e(t, n), u = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Ye(t) ? t : i
    );
    return t === /* @__PURE__ */ ge(i) && u && (l ? Mt(r, o) && Vt(t, "set", n, r) : Vt(t, "add", n, r)), u;
  }
  deleteProperty(t, n) {
    const r = _e(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && Vt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Ut(n) || !Os.has(n)) && Ge(t, "has", n), r;
  }
  ownKeys(t) {
    return Ge(
      t,
      "iterate",
      Z(t) ? "length" : pn
    ), Reflect.ownKeys(t);
  }
}
class la extends Ns {
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
const aa = /* @__PURE__ */ new Ps(), ca = /* @__PURE__ */ new la(), ua = /* @__PURE__ */ new Ps(!0);
const Ri = (e) => e, br = (e) => Reflect.getPrototypeOf(e);
function fa(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = /* @__PURE__ */ ge(i), s = en(o), l = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, v = i[e](...r), b = n ? Ri : t ? In : At;
    return !t && Ge(
      o,
      "iterate",
      u ? wi : pn
    ), Xe(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: E, done: N } = v.next();
          return N ? { value: E, done: N } : {
            value: l ? [b(E[0]), b(E[1])] : b(E),
            done: N
          };
        }
      }
    );
  };
}
function yr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function da(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ ge(o), l = /* @__PURE__ */ ge(i);
      e || (Mt(i, l) && Ge(s, "get", i), Ge(s, "get", l));
      const { has: u } = br(s), v = t ? Ri : e ? In : At;
      if (u.call(s, i))
        return v(o.get(i));
      if (u.call(s, l))
        return v(o.get(l));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ge(/* @__PURE__ */ ge(i), "iterate", pn), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ ge(o), l = /* @__PURE__ */ ge(i);
      return e || (Mt(i, l) && Ge(s, "has", i), Ge(s, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const s = this, l = s.__v_raw, u = /* @__PURE__ */ ge(l), v = t ? Ri : e ? In : At;
      return !e && Ge(u, "iterate", pn), l.forEach((b, E) => i.call(o, v(b), v(E), s));
    }
  };
  return Xe(
    n,
    e ? {
      add: yr("add"),
      set: yr("set"),
      delete: yr("delete"),
      clear: yr("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ ge(this), s = br(o), l = /* @__PURE__ */ ge(i), u = !t && !/* @__PURE__ */ gt(i) && !/* @__PURE__ */ Kt(i) ? l : i;
        return s.has.call(o, u) || Mt(i, u) && s.has.call(o, i) || Mt(l, u) && s.has.call(o, l) || (o.add(u), Vt(o, "add", u, u)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ gt(o) && !/* @__PURE__ */ Kt(o) && (o = /* @__PURE__ */ ge(o));
        const s = /* @__PURE__ */ ge(this), { has: l, get: u } = br(s);
        let v = l.call(s, i);
        v || (i = /* @__PURE__ */ ge(i), v = l.call(s, i));
        const b = u.call(s, i);
        return s.set(i, o), v ? Mt(o, b) && Vt(s, "set", i, o) : Vt(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ ge(this), { has: s, get: l } = br(o);
        let u = s.call(o, i);
        u || (i = /* @__PURE__ */ ge(i), u = s.call(o, i)), l && l.call(o, i);
        const v = o.delete(i);
        return u && Vt(o, "delete", i, void 0), v;
      },
      clear() {
        const i = /* @__PURE__ */ ge(this), o = i.size !== 0, s = i.clear();
        return o && Vt(
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
    n[i] = fa(i, e, t);
  }), n;
}
function Wi(e, t) {
  const n = da(e, t);
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    _e(n, i) && i in r ? n : r,
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
const ks = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), Is = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakMap();
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
function fn(e) {
  return /* @__PURE__ */ Kt(e) ? e : qi(
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
    Is
  );
}
function qi(e, t, n, r, i) {
  if (!Ee(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const s = ya(Vl(e));
  if (s === 0)
    return e;
  const l = new Proxy(
    e,
    s === 2 ? r : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function hn(e) {
  return /* @__PURE__ */ Kt(e) ? /* @__PURE__ */ hn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function gt(e) {
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
const At = (e) => Ee(e) ? /* @__PURE__ */ fn(e) : e, In = (e) => Ee(e) ? /* @__PURE__ */ Oi(e) : e;
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function va(e) {
  return Ea(e, !1);
}
function Ea(e, t) {
  return /* @__PURE__ */ Ye(e) ? e : new Ta(e, t);
}
class Ta {
  constructor(t, n) {
    this.dep = new zi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ge(t), this._value = n ? t : At(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ gt(t) || /* @__PURE__ */ Kt(t);
    t = r ? t : /* @__PURE__ */ ge(t), Mt(t, n) && (this._rawValue = t, this._value = r ? t : At(t), this.dep.trigger());
  }
}
function y(e) {
  return /* @__PURE__ */ Ye(e) ? e.value : e;
}
const Sa = {
  get: (e, t, n) => t === "__v_raw" ? e : y(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ Ye(i) && !/* @__PURE__ */ Ye(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Ms(e) {
  return /* @__PURE__ */ hn(e) ? e : new Proxy(e, Sa);
}
class Ca {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new zi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = er - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
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
function xa(e, t, n = !1) {
  let r, i;
  return le(e) ? r = e : (r = e.get, i = e.set), new Ca(r, i, n);
}
const gr = {}, wr = /* @__PURE__ */ new WeakMap();
let an;
function Aa(e, t = !1, n = an) {
  if (n) {
    let r = wr.get(n);
    r || wr.set(n, r = []), r.push(e);
  }
}
function wa(e, t, n = Te) {
  const { immediate: r, deep: i, once: o, scheduler: s, augmentJob: l, call: u } = n, v = (V) => i ? V : /* @__PURE__ */ gt(V) || i === !1 || i === 0 ? Bt(V, 1) : Bt(V);
  let b, E, N, j, te = !1, q = !1;
  if (/* @__PURE__ */ Ye(e) ? (E = () => e.value, te = /* @__PURE__ */ gt(e)) : /* @__PURE__ */ hn(e) ? (E = () => v(e), te = !0) : Z(e) ? (q = !0, te = e.some((V) => /* @__PURE__ */ hn(V) || /* @__PURE__ */ gt(V)), E = () => e.map((V) => {
    if (/* @__PURE__ */ Ye(V))
      return V.value;
    if (/* @__PURE__ */ hn(V))
      return v(V);
    if (le(V))
      return u ? u(V, 2) : V();
  })) : le(e) ? t ? E = u ? () => u(e, 2) : e : E = () => {
    if (N) {
      Wt();
      try {
        N();
      } finally {
        qt();
      }
    }
    const V = an;
    an = b;
    try {
      return u ? u(e, 3, [j]) : e(j);
    } finally {
      an = V;
    }
  } : E = Dt, t && i) {
    const V = E, ae = i === !0 ? 1 / 0 : i;
    E = () => Bt(V(), ae);
  }
  const ie = ea(), ne = () => {
    b.stop(), ie && ie.active && Fi(ie.effects, b);
  };
  if (o && t) {
    const V = t;
    t = (...ae) => {
      const Oe = V(...ae);
      return ne(), Oe;
    };
  }
  let z = q ? new Array(e.length).fill(gr) : gr;
  const U = (V) => {
    if (!(!(b.flags & 1) || !b.dirty && !V))
      if (t) {
        const ae = b.run();
        if (V || i || te || (q ? ae.some((Oe, Ae) => Mt(Oe, z[Ae])) : Mt(ae, z))) {
          N && N();
          const Oe = an;
          an = b;
          try {
            const Ae = [
              ae,
              // pass undefined as the old value when it's changed for the first time
              z === gr ? void 0 : q && z[0] === gr ? [] : z,
              j
            ];
            z = ae, u ? u(t, 3, Ae) : (
              // @ts-expect-error
              t(...Ae)
            );
          } finally {
            an = Oe;
          }
        }
      } else
        b.run();
  };
  return l && l(U), b = new Es(E), b.scheduler = s ? () => s(U, !1) : U, j = (V) => Aa(V, !1, b), N = b.onStop = () => {
    const V = wr.get(b);
    if (V) {
      if (u)
        u(V, 4);
      else
        for (const ae of V) ae();
      wr.delete(b);
    }
  }, t ? r ? U(!0) : z = b.run() : s ? s(U.bind(null, !0), !0) : b.run(), ne.pause = b.pause.bind(b), ne.resume = b.resume.bind(b), ne.stop = ne, ne;
}
function Bt(e, t = 1 / 0, n) {
  if (t <= 0 || !Ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ye(e))
    Bt(e.value, t, n);
  else if (Z(e))
    for (let r = 0; r < e.length; r++)
      Bt(e[r], t, n);
  else if (bn(e) || en(e))
    e.forEach((r) => {
      Bt(r, t, n);
    });
  else if (ms(e)) {
    for (const r in e)
      Bt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Bt(e[r], t, n);
  }
  return e;
}
function lr(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    Vr(i, t, n);
  }
}
function wt(e, t, n, r) {
  if (le(e)) {
    const i = lr(e, t, n, r);
    return i && ps(i) && i.catch((o) => {
      Vr(o, t, n);
    }), i;
  }
  if (Z(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(wt(e[o], t, n, r));
    return i;
  }
}
function Vr(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Te;
  if (t) {
    let l = t.parent;
    const u = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const b = l.ec;
      if (b) {
        for (let E = 0; E < b.length; E++)
          if (b[E](e, u, v) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      Wt(), lr(o, null, 10, [
        e,
        u,
        v
      ]), qt();
      return;
    }
  }
  Ra(e, n, i, r, s);
}
function Ra(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const tt = [];
let kt = -1;
const Pn = [];
let Qt = null, wn = 0;
const Ds = /* @__PURE__ */ Promise.resolve();
let Rr = null;
function Us(e) {
  const t = Rr || Ds;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Oa(e) {
  let t = kt + 1, n = tt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = tt[r], o = nr(i);
    o < e || o === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Gi(e) {
  if (!(e.flags & 1)) {
    const t = nr(e), n = tt[tt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= nr(n) ? tt.push(e) : tt.splice(Oa(t), 0, e), e.flags |= 1, Fs();
  }
}
function Fs() {
  Rr || (Rr = Ds.then($s));
}
function Na(e) {
  if (!Z(e))
    Qt && e.id === -1 ? Qt.splice(wn + 1, 0, e) : e.flags & 1 || (Pn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Pn.push(e[t]);
  Fs();
}
function vo(e, t, n = kt + 1) {
  for (; n < tt.length; n++) {
    const r = tt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      tt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Hs(e) {
  if (Pn.length) {
    const t = [...new Set(Pn)].sort(
      (n, r) => nr(n) - nr(r)
    );
    if (Pn.length = 0, Qt) {
      for (let n = 0; n < t.length; n++)
        Qt.push(t[n]);
      return;
    }
    for (Qt = t, wn = 0; wn < Qt.length; wn++) {
      const n = Qt[wn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Qt = null, wn = 0;
  }
}
const nr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $s(e) {
  try {
    for (kt = 0; kt < tt.length; kt++) {
      const t = tt[kt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), lr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; kt < tt.length; kt++) {
      const t = tt[kt];
      t && (t.flags &= -2);
    }
    kt = -1, tt.length = 0, Hs(), Rr = null, (tt.length || Pn.length) && $s();
  }
}
let yt = null, js = null;
function Or(e) {
  const t = yt;
  return yt = e, js = e && e.type.__scopeId || null, t;
}
function Pa(e, t = yt, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && Po(-1);
    const o = Or(t), s = mn.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let u = mn.length; u > s; u--) pl();
      Or(o), r._d && Po(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function je(e, t) {
  if (yt === null)
    return e;
  const n = Kr(yt), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, l, u = Te] = t[i];
    o && (le(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Bt(s), r.push({
      dir: o,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: u
    }));
  }
  return e;
}
function on(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    o && (l.oldValue = o[s].value);
    let u = l.dir[r];
    u && (Wt(), wt(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), qt());
  }
}
function ka(e, t) {
  if (nt) {
    let n = nt.provides;
    const r = nt.parent && nt.parent.provides;
    r === n && (n = nt.provides = Object.create(r)), n[e] = t;
  }
}
function Cr(e, t, n = !1) {
  const r = Rc();
  if (r || kn) {
    let i = kn ? kn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && le(t) ? t.call(r && r.proxy) : t;
  }
}
const La = /* @__PURE__ */ Symbol.for("v-scx"), Ia = () => Cr(La);
function li(e, t, n) {
  return Vs(e, t, n);
}
function Vs(e, t, n = Te) {
  const { immediate: r, deep: i, flush: o, once: s } = n, l = Xe({}, n), u = t && r || !t && o !== "post";
  let v;
  if (or) {
    if (o === "sync") {
      const j = Ia();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!u) {
      const j = () => {
      };
      return j.stop = Dt, j.resume = Dt, j.pause = Dt, j;
    }
  }
  const b = nt;
  l.call = (j, te, q) => wt(j, b, te, q);
  let E = !1;
  o === "post" ? l.scheduler = (j) => {
    at(j, b && b.suspense);
  } : o !== "sync" && (E = !0, l.scheduler = (j, te) => {
    te ? j() : Gi(j);
  }), l.augmentJob = (j) => {
    t && (j.flags |= 4), E && (j.flags |= 2, b && (j.id = b.uid, j.i = b));
  };
  const N = wa(e, t, l);
  return or && (v ? v.push(N) : u && N()), N;
}
function Ma(e, t, n) {
  const r = this.proxy, i = Ne(e) ? e.includes(".") ? Bs(r, e) : () => r[e] : e.bind(r, r);
  let o;
  le(t) ? o = t : (o = t.handler, n = t);
  const s = ar(this), l = Vs(i, o.bind(r), n);
  return s(), l;
}
function Bs(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const Da = /* @__PURE__ */ Symbol("_vte"), Br = (e) => e.__isTeleport, ai = /* @__PURE__ */ Symbol("_leaveCb");
function Ua(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Gt) {
        t = n;
        break;
      }
  }
  return t;
}
function zs(e) {
  if (!Xi(e))
    return Br(e.type) && e.children ? Ua(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && le(n.default))
      return n.default();
  }
}
function Yi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Yi(
      Br(n.type) && zs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ws(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Eo(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Nr = /* @__PURE__ */ new WeakMap();
function Jn(e, t, n, r, i = !1) {
  if (Z(e)) {
    e.forEach(
      (q, ie) => Jn(
        q,
        t && (Z(t) ? t[ie] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (Zn(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Jn(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? Kr(r.component) : r.el, s = i ? null : o, { i: l, r: u } = e, v = t && t.r, b = l.refs === Te ? l.refs = {} : l.refs, E = l.setupState, N = /* @__PURE__ */ ge(E), j = E === Te ? ds : (q) => Eo(b, q) ? !1 : _e(N, q), te = (q, ie) => !(ie && Eo(b, ie));
  if (v != null && v !== u) {
    if (To(t), Ne(v))
      b[v] = null, j(v) && (E[v] = null);
    else if (/* @__PURE__ */ Ye(v)) {
      const q = t;
      te(v, q.k) && (v.value = null), q.k && (b[q.k] = null);
    }
  }
  if (le(u))
    lr(u, l, 12, [s, b]);
  else {
    const q = Ne(u), ie = /* @__PURE__ */ Ye(u);
    if (q || ie) {
      const ne = () => {
        if (e.f) {
          const z = q ? j(u) ? E[u] : b[u] : te() || !e.k ? u.value : b[e.k];
          if (i)
            Z(z) && Fi(z, o);
          else if (Z(z))
            z.includes(o) || z.push(o);
          else if (q)
            b[u] = [o], j(u) && (E[u] = b[u]);
          else {
            const U = [o];
            te(u, e.k) && (u.value = U), e.k && (b[e.k] = U);
          }
        } else q ? (b[u] = s, j(u) && (E[u] = s)) : ie && (te(u, e.k) && (u.value = s), e.k && (b[e.k] = s));
      };
      if (s) {
        const z = () => {
          ne(), Nr.delete(e);
        };
        z.id = -1, Nr.set(e, z), at(z, n);
      } else
        To(e), ne();
    }
  }
}
function To(e) {
  const t = Nr.get(e);
  t && (t.flags |= 8, Nr.delete(e));
}
$r().requestIdleCallback;
$r().cancelIdleCallback;
const Zn = (e) => !!e.type.__asyncLoader, Xi = (e) => e.type.__isKeepAlive;
function Fa(e, t) {
  qs(e, "a", t);
}
function Ha(e, t) {
  qs(e, "da", t);
}
function qs(e, t, n = nt) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (zr(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Xi(i.parent.vnode) && $a(r, t, n, i), i = i.parent;
  }
}
function $a(e, t, n, r) {
  const i = zr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ys(() => {
    Fi(r[t], i);
  }, n);
}
function zr(e, t, n = nt, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Wt();
      const l = ar(n), u = wt(t, n, e, s);
      return l(), qt(), u;
    });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const Yt = (e) => (t, n = nt) => {
  (!or || e === "sp") && zr(e, (...r) => t(...r), n);
}, ja = Yt("bm"), Ks = Yt("m"), Va = Yt(
  "bu"
), Ba = Yt("u"), Gs = Yt(
  "bum"
), Ys = Yt("um"), za = Yt(
  "sp"
), Wa = Yt("rtg"), qa = Yt("rtc");
function Ka(e, t = nt) {
  zr("ec", e, t);
}
const Ga = /* @__PURE__ */ Symbol.for("v-ndc");
function xe(e, t, n, r) {
  let i;
  const o = n, s = Z(e);
  if (s || Ne(e)) {
    const l = s && /* @__PURE__ */ hn(e);
    let u = !1, v = !1;
    l && (u = !/* @__PURE__ */ gt(e), v = /* @__PURE__ */ Kt(e), e = jr(e)), i = new Array(e.length);
    for (let b = 0, E = e.length; b < E; b++)
      i[b] = t(
        u ? v ? In(At(e[b])) : At(e[b]) : e[b],
        b,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o);
  } else if (Ee(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, u) => t(l, u, void 0, o)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let u = 0, v = l.length; u < v; u++) {
        const b = l[u];
        i[u] = t(e[b], b, u, o);
      }
    }
  else
    i = [];
  return i;
}
const Ni = (e) => e ? yl(e) ? Kr(e) : Ni(e.parent) : null, Qn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Xe(/* @__PURE__ */ Object.create(null), {
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
    $nextTick: (e) => e.n || (e.n = Us.bind(e.proxy)),
    $watch: (e) => Ma.bind(e)
  })
), ci = (e, t) => e !== Te && !e.__isScriptSetup && _e(e, t), Ya = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: o, accessCache: s, type: l, appContext: u } = e;
    if (t[0] !== "$") {
      const N = s[t];
      if (N !== void 0)
        switch (N) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (ci(r, t))
          return s[t] = 1, r[t];
        if (i !== Te && _e(i, t))
          return s[t] = 2, i[t];
        if (_e(o, t))
          return s[t] = 3, o[t];
        if (n !== Te && _e(n, t))
          return s[t] = 4, n[t];
        Pi && (s[t] = 0);
      }
    }
    const v = Qn[t];
    let b, E;
    if (v)
      return t === "$attrs" && Ge(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (b = l.__cssModules) && (b = b[t])
    )
      return b;
    if (n !== Te && _e(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      E = u.config.globalProperties, _e(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return ci(i, t) ? (i[t] = n, !0) : r !== Te && _e(r, t) ? (r[t] = n, !0) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: o, type: s }
  }, l) {
    let u;
    return !!(n[l] || e !== Te && l[0] !== "$" && _e(e, l) || ci(t, l) || _e(o, l) || _e(r, l) || _e(Qn, l) || _e(i.config.globalProperties, l) || (u = s.__cssModules) && u[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : _e(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function So(e) {
  return Z(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Pi = !0;
function Xa(e) {
  const t = Js(e), n = e.proxy, r = e.ctx;
  Pi = !1, t.beforeCreate && Co(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: s,
    watch: l,
    provide: u,
    inject: v,
    // lifecycle
    created: b,
    beforeMount: E,
    mounted: N,
    beforeUpdate: j,
    updated: te,
    activated: q,
    deactivated: ie,
    beforeDestroy: ne,
    beforeUnmount: z,
    destroyed: U,
    unmounted: V,
    render: ae,
    renderTracked: Oe,
    renderTriggered: Ae,
    errorCaptured: He,
    serverPrefetch: ve,
    // public API
    expose: Le,
    inheritAttrs: Je,
    // assets
    components: rt,
    directives: Be,
    filters: ht
  } = t;
  if (v && Ja(v, r, null), s)
    for (const de in s) {
      const oe = s[de];
      le(oe) && (r[de] = oe.bind(n));
    }
  if (i) {
    const de = i.call(n, n);
    Ee(de) && (e.data = /* @__PURE__ */ fn(de));
  }
  if (Pi = !0, o)
    for (const de in o) {
      const oe = o[de], Pe = le(oe) ? oe.bind(n, n) : le(oe.get) ? oe.get.bind(n, n) : Dt, it = !le(oe) && le(oe.set) ? oe.set.bind(n) : Dt, Ue = se({
        get: Pe,
        set: it
      });
      Object.defineProperty(r, de, {
        enumerable: !0,
        configurable: !0,
        get: () => Ue.value,
        set: ($e) => Ue.value = $e
      });
    }
  if (l)
    for (const de in l)
      Xs(l[de], r, n, de);
  if (u) {
    const de = le(u) ? u.call(n) : u;
    Reflect.ownKeys(de).forEach((oe) => {
      ka(oe, de[oe]);
    });
  }
  b && Co(b, e, "c");
  function we(de, oe) {
    Z(oe) ? oe.forEach((Pe) => de(Pe.bind(n))) : oe && de(oe.bind(n));
  }
  if (we(ja, E), we(Ks, N), we(Va, j), we(Ba, te), we(Fa, q), we(Ha, ie), we(Ka, He), we(qa, Oe), we(Wa, Ae), we(Gs, z), we(Ys, V), we(za, ve), Z(Le))
    if (Le.length) {
      const de = e.exposed || (e.exposed = {});
      Le.forEach((oe) => {
        Object.defineProperty(de, oe, {
          get: () => n[oe],
          set: (Pe) => n[oe] = Pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ae && e.render === Dt && (e.render = ae), Je != null && (e.inheritAttrs = Je), rt && (e.components = rt), Be && (e.directives = Be), ve && Ws(e);
}
function Ja(e, t, n = Dt) {
  Z(e) && (e = ki(e));
  for (const r in e) {
    const i = e[r];
    let o;
    Ee(i) ? "default" in i ? o = Cr(
      i.from || r,
      i.default,
      !0
    ) : o = Cr(i.from || r) : o = Cr(i), /* @__PURE__ */ Ye(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[r] = o;
  }
}
function Co(e, t, n) {
  wt(
    Z(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Xs(e, t, n, r) {
  let i = r.includes(".") ? Bs(n, r) : () => n[r];
  if (Ne(e)) {
    const o = t[e];
    le(o) && li(i, o);
  } else if (le(e))
    li(i, e.bind(n));
  else if (Ee(e))
    if (Z(e))
      e.forEach((o) => Xs(o, t, n, r));
    else {
      const o = le(e.handler) ? e.handler.bind(n) : t[e.handler];
      le(o) && li(i, o, e);
    }
}
function Js(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = o.get(t);
  let u;
  return l ? u = l : !i.length && !n && !r ? u = t : (u = {}, i.length && i.forEach(
    (v) => Pr(u, v, s, !0)
  ), Pr(u, t, s)), Ee(t) && o.set(t, u), u;
}
function Pr(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t;
  o && Pr(e, o, n, !0), i && i.forEach(
    (s) => Pr(e, s, n, !0)
  );
  for (const s in t)
    if (!(r && s === "expose")) {
      const l = Za[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Za = {
  data: xo,
  props: Ao,
  emits: Ao,
  // objects
  methods: Wn,
  computed: Wn,
  // lifecycle
  beforeCreate: et,
  created: et,
  beforeMount: et,
  mounted: et,
  beforeUpdate: et,
  updated: et,
  beforeDestroy: et,
  beforeUnmount: et,
  destroyed: et,
  unmounted: et,
  activated: et,
  deactivated: et,
  errorCaptured: et,
  serverPrefetch: et,
  // assets
  components: Wn,
  directives: Wn,
  // watch
  watch: ec,
  // provide / inject
  provide: xo,
  inject: Qa
};
function xo(e, t) {
  return t ? e ? function() {
    return Xe(
      le(e) ? e.call(this, this) : e,
      le(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qa(e, t) {
  return Wn(ki(e), ki(t));
}
function ki(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function et(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wn(e, t) {
  return e ? Xe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ao(e, t) {
  return e ? Z(e) && Z(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Xe(
    /* @__PURE__ */ Object.create(null),
    So(e),
    So(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Xe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = et(e[r], t[r]);
  return n;
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
function nc(e, t) {
  return function(r, i = null) {
    le(r) || (r = Xe({}, r)), i != null && !Ee(i) && (i = null);
    const o = Zs(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const v = o.app = {
      _uid: tc++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Ic,
      get config() {
        return o.config;
      },
      set config(b) {
      },
      use(b, ...E) {
        return s.has(b) || (b && le(b.install) ? (s.add(b), b.install(v, ...E)) : le(b) && (s.add(b), b(v, ...E))), v;
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
      mount(b, E, N) {
        if (!u) {
          const j = v._ceVNode || zt(r, i);
          return j.appContext = o, N === !0 ? N = "svg" : N === !1 && (N = void 0), e(j, b, N), u = !0, v._container = b, b.__vue_app__ = v, Kr(j.component);
        }
      },
      onUnmount(b) {
        l.push(b);
      },
      unmount() {
        u && (wt(
          l,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(b, E) {
        return o.provides[b] = E, v;
      },
      runWithContext(b) {
        const E = kn;
        kn = v;
        try {
          return b();
        } finally {
          kn = E;
        }
      }
    };
    return v;
  };
}
let kn = null;
const rc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ct(t)}Modifiers`] || e[`${yn(t)}Modifiers`];
function ic(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Te;
  let i = n;
  const o = t.startsWith("update:"), s = o && rc(r, t.slice(7));
  s && (s.trim && (i = n.map((b) => Ne(b) ? b.trim() : b)), s.number && (i = i.map(Hr)));
  let l, u = r[l = ni(t)] || // also try camelCase event handler (#2249)
  r[l = ni(Ct(t))];
  !u && o && (u = r[l = ni(yn(t))]), u && wt(
    u,
    e,
    6,
    i
  );
  const v = r[l + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, wt(
      v,
      e,
      6,
      i
    );
  }
}
const oc = /* @__PURE__ */ new WeakMap();
function Qs(e, t, n = !1) {
  const r = n ? oc : t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, l = !1;
  if (!le(e)) {
    const u = (v) => {
      const b = Qs(v, t, !0);
      b && (l = !0, Xe(s, b));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !l ? (Ee(e) && r.set(e, null), null) : (Z(o) ? o.forEach((u) => s[u] = null) : Xe(s, o), Ee(e) && r.set(e, s), s);
}
function Wr(e, t) {
  return !e || !Dr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, yn(t)) || _e(e, t));
}
function wo(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [o],
    slots: s,
    attrs: l,
    emit: u,
    render: v,
    renderCache: b,
    props: E,
    data: N,
    setupState: j,
    ctx: te,
    inheritAttrs: q
  } = e, ie = Or(e);
  let ne, z;
  try {
    if (n.shapeFlag & 4) {
      const V = i || r, ae = V;
      ne = It(
        v.call(
          ae,
          V,
          b,
          E,
          j,
          N,
          te
        )
      ), z = l;
    } else {
      const V = t;
      ne = It(
        V.length > 1 ? V(
          E,
          { attrs: l, slots: s, emit: u }
        ) : V(
          E,
          null
        )
      ), z = t.props ? l : sc(l);
    }
  } catch (V) {
    mn.length = 0, Vr(V, e, 1), ne = zt(Gt);
  }
  let U = ne;
  if (z && q !== !1) {
    const V = Object.keys(z), { shapeFlag: ae } = U;
    V.length && ae & 7 && (o && V.some(Ur) && (z = lc(
      z,
      o
    )), U = Mn(U, z, !1, !0));
  }
  if (n.dirs && (U = Mn(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const V = Br(U.type) && zs(U) || U;
    Yi(V, n.transition);
  }
  return ne = U, Or(ie), ne;
}
const sc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Dr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, lc = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ur(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function ac(e, t, n) {
  const { props: r, children: i, component: o } = e, { props: s, children: l, patchFlag: u } = t, v = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return r ? Ro(r, s, v) : !!s;
    if (u & 8) {
      const b = t.dynamicProps;
      for (let E = 0; E < b.length; E++) {
        const N = b[E];
        if (el(s, r, N) && !Wr(v, N))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : r === s ? !1 : r ? s ? Ro(r, s, v) : !0 : !!s;
  return !1;
}
function Ro(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (el(t, e, o) && !Wr(n, o))
      return !0;
  }
  return !1;
}
function el(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && Ee(r) && Ee(i) ? !tn(r, i) : r !== i;
}
function cc({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const tl = {}, nl = () => Object.create(tl), rl = (e) => Object.getPrototypeOf(e) === tl;
function uc(e, t, n, r = !1) {
  const i = {}, o = nl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), il(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  n ? e.props = r ? i : /* @__PURE__ */ ga(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function fc(e, t, n, r) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, l = /* @__PURE__ */ ge(i), [u] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const b = e.vnode.dynamicProps;
      for (let E = 0; E < b.length; E++) {
        let N = b[E];
        if (Wr(e.emitsOptions, N))
          continue;
        const j = t[N];
        if (u)
          if (_e(o, N))
            j !== o[N] && (o[N] = j, v = !0);
          else {
            const te = Ct(N);
            i[te] = Li(
              u,
              l,
              te,
              j,
              e,
              !1
            );
          }
        else
          j !== o[N] && (o[N] = j, v = !0);
      }
    }
  } else {
    il(e, t, i, o) && (v = !0);
    let b;
    for (const E in l)
      (!t || // for camelCase
      !_e(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((b = yn(E)) === E || !_e(t, b))) && (u ? n && // for camelCase
      (n[E] !== void 0 || // for kebab-case
      n[b] !== void 0) && (i[E] = Li(
        u,
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
  v && Vt(e.attrs, "set", "");
}
function il(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let u in t) {
      if (Gn(u))
        continue;
      const v = t[u];
      let b;
      i && _e(i, b = Ct(u)) ? !o || !o.includes(b) ? n[b] = v : (l || (l = {}))[b] = v : Wr(e.emitsOptions, u) || (!(u in r) || v !== r[u]) && (r[u] = v, s = !0);
    }
  if (o) {
    const u = /* @__PURE__ */ ge(n), v = l || Te;
    for (let b = 0; b < o.length; b++) {
      const E = o[b];
      n[E] = Li(
        i,
        u,
        E,
        v[E],
        e,
        !_e(v, E)
      );
    }
  }
  return s;
}
function Li(e, t, n, r, i, o) {
  const s = e[n];
  if (s != null) {
    const l = _e(s, "default");
    if (l && r === void 0) {
      const u = s.default;
      if (s.type !== Function && !s.skipFactory && le(u)) {
        const { propsDefaults: v } = i;
        if (n in v)
          r = v[n];
        else {
          const b = ar(i);
          r = v[n] = u.call(
            null,
            t
          ), b();
        }
      } else
        r = u;
      i.ce && i.ce._setProp(n, r);
    }
    s[
      0
      /* shouldCast */
    ] && (o && !l ? r = !1 : s[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === yn(n)) && (r = !0));
  }
  return r;
}
const dc = /* @__PURE__ */ new WeakMap();
function ol(e, t, n = !1) {
  const r = n ? dc : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, l = [];
  let u = !1;
  if (!le(e)) {
    const b = (E) => {
      u = !0;
      const [N, j] = ol(E, t, !0);
      Xe(s, N), j && l.push(...j);
    };
    !n && t.mixins.length && t.mixins.forEach(b), e.extends && b(e.extends), e.mixins && e.mixins.forEach(b);
  }
  if (!o && !u)
    return Ee(e) && r.set(e, On), On;
  if (Z(o))
    for (let b = 0; b < o.length; b++) {
      const E = Ct(o[b]);
      Oo(E) && (s[E] = Te);
    }
  else if (o)
    for (const b in o) {
      const E = Ct(b);
      if (Oo(E)) {
        const N = o[b], j = s[E] = Z(N) || le(N) ? { type: N } : Xe({}, N), te = j.type;
        let q = !1, ie = !0;
        if (Z(te))
          for (let ne = 0; ne < te.length; ++ne) {
            const z = te[ne], U = le(z) && z.name;
            if (U === "Boolean") {
              q = !0;
              break;
            } else U === "String" && (ie = !1);
          }
        else
          q = le(te) && te.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = q, j[
          1
          /* shouldCastTrue */
        ] = ie, (q || _e(j, "default")) && l.push(E);
      }
    }
  const v = [s, l];
  return Ee(e) && r.set(e, v), v;
}
function Oo(e) {
  return e[0] !== "$" && !Gn(e);
}
const Ji = (e) => e === "_" || e === "_ctx" || e === "$stable", Zi = (e) => Z(e) ? e.map(It) : [It(e)], pc = (e, t, n) => {
  if (t._n)
    return t;
  const r = Pa((...i) => Zi(t(...i)), n);
  return r._c = !1, r;
}, sl = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (Ji(i)) continue;
    const o = e[i];
    if (le(o))
      t[i] = pc(i, o, r);
    else if (o != null) {
      const s = Zi(o);
      t[i] = () => s;
    }
  }
}, ll = (e, t) => {
  const n = Zi(t);
  e.slots.default = () => n;
}, al = (e, t, n) => {
  for (const r in t)
    (n || !Ji(r)) && (e[r] = t[r]);
}, hc = (e, t, n) => {
  const r = e.slots = nl();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (al(r, t, n), n && ys(r, "_", i, !0)) : sl(t, r);
  } else t && ll(e, t);
}, mc = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let o = !0, s = Te;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : al(i, t, n) : (o = !t.$stable, sl(t, i)), s = t;
  } else t && (ll(e, t), s = { default: 1 });
  if (o)
    for (const l in i)
      !Ji(l) && s[l] == null && delete i[l];
}, at = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const n = $r();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: o,
    createElement: s,
    createText: l,
    createComment: u,
    setText: v,
    setElementText: b,
    parentNode: E,
    nextSibling: N,
    setScopeId: j = Dt,
    insertStaticContent: te
  } = e, q = (f, m, _, A = null, T = null, x = null, P = void 0, D = null, M = !!m.dynamicChildren) => {
    if (f === m)
      return;
    f && !$n(f, m) && (A = bt(f), $e(f, T, x, !0), f = null), m.patchFlag === -2 && (M = !1, m.dynamicChildren = null);
    const { type: S, ref: K, shapeFlag: H } = m;
    switch (S) {
      case qr:
        ie(f, m, _, A);
        break;
      case Gt:
        ne(f, m, _, A);
        break;
      case fi:
        f == null && z(m, _, A, P);
        break;
      case ue:
        rt(
          f,
          m,
          _,
          A,
          T,
          x,
          P,
          D,
          M
        );
        break;
      default:
        H & 1 ? ae(
          f,
          m,
          _,
          A,
          T,
          x,
          P,
          D,
          M
        ) : H & 6 ? Be(
          f,
          m,
          _,
          A,
          T,
          x,
          P,
          D,
          M
        ) : (H & 64 || H & 128) && S.process(
          f,
          m,
          _,
          A,
          T,
          x,
          P,
          D,
          M,
          We
        );
    }
    K != null && T ? Jn(K, f && f.ref, x, m || f, !m) : K == null && f && f.ref != null && Jn(f.ref, null, x, f, !0);
  }, ie = (f, m, _, A) => {
    if (f == null)
      r(
        m.el = l(m.children),
        _,
        A
      );
    else {
      const T = m.el = f.el;
      m.children !== f.children && v(T, m.children);
    }
  }, ne = (f, m, _, A) => {
    f == null ? r(
      m.el = u(m.children || ""),
      _,
      A
    ) : m.el = f.el;
  }, z = (f, m, _, A) => {
    [f.el, f.anchor] = te(
      f.children,
      m,
      _,
      A,
      f.el,
      f.anchor
    );
  }, U = ({ el: f, anchor: m }, _, A) => {
    let T;
    for (; f && f !== m; )
      T = N(f), r(f, _, A), f = T;
    r(m, _, A);
  }, V = ({ el: f, anchor: m }) => {
    let _;
    for (; f && f !== m; )
      _ = N(f), i(f), f = _;
    i(m);
  }, ae = (f, m, _, A, T, x, P, D, M) => {
    if (m.type === "svg" ? P = "svg" : m.type === "math" && (P = "mathml"), f == null)
      Oe(
        m,
        _,
        A,
        T,
        x,
        P,
        D,
        M
      );
    else {
      const S = f.el && f.el._isVueCE ? f.el : null;
      try {
        S && S._beginPatch(), ve(
          f,
          m,
          T,
          x,
          P,
          D,
          M
        );
      } finally {
        S && S._endPatch();
      }
    }
  }, Oe = (f, m, _, A, T, x, P, D) => {
    let M, S;
    const { props: K, shapeFlag: H, transition: W, dirs: X } = f;
    if (M = f.el = s(
      f.type,
      x,
      K && K.is,
      K
    ), H & 8 ? b(M, f.children) : H & 16 && He(
      f.children,
      M,
      null,
      A,
      T,
      ui(f, x),
      P,
      D
    ), X && on(f, null, A, "created"), Ae(M, f, f.scopeId, P, A), K) {
      for (const R in K)
        R !== "value" && !Gn(R) && o(M, R, null, K[R], x, A);
      "value" in K && o(M, "value", null, K.value, x), (S = K.onVnodeBeforeMount) && Pt(S, A, f);
    }
    X && on(f, null, A, "beforeMount");
    const Q = gc(T, W);
    Q && W.beforeEnter(M), r(M, m, _), ((S = K && K.onVnodeMounted) || Q || X) && at(() => {
      S && Pt(S, A, f), Q && W.enter(M), X && on(f, null, A, "mounted");
    }, T);
  }, Ae = (f, m, _, A, T) => {
    if (_ && j(f, _), A)
      for (let x = 0; x < A.length; x++)
        j(f, A[x]);
    if (T) {
      let x = T.subTree;
      if (m === x || dl(x.type) && (x.ssContent === m || x.ssFallback === m)) {
        const P = T.vnode;
        Ae(
          f,
          P,
          P.scopeId,
          P.slotScopeIds,
          T.parent
        );
      }
    }
  }, He = (f, m, _, A, T, x, P, D, M = 0) => {
    for (let S = M; S < f.length; S++) {
      const K = f[S] = D ? jt(f[S]) : It(f[S]);
      q(
        null,
        K,
        m,
        _,
        A,
        T,
        x,
        P,
        D
      );
    }
  }, ve = (f, m, _, A, T, x, P) => {
    const D = m.el = f.el;
    let { patchFlag: M, dynamicChildren: S, dirs: K } = m;
    M |= f.patchFlag & 16;
    const H = f.props || Te, W = m.props || Te;
    let X;
    if (_ && sn(_, !1), (X = W.onVnodeBeforeUpdate) && Pt(X, _, m, f), K && on(m, f, _, "beforeUpdate"), _ && sn(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    S && (!f.dynamicChildren || f.dynamicChildren.length !== S.length) && (M = 0, P = !1, S = null), (H.innerHTML && W.innerHTML == null || H.textContent && W.textContent == null) && b(D, ""), S ? Le(
      f.dynamicChildren,
      S,
      D,
      _,
      A,
      ui(m, T),
      x
    ) : P || oe(
      f,
      m,
      D,
      null,
      _,
      A,
      ui(m, T),
      x,
      !1
    ), M > 0) {
      if (M & 16)
        Je(D, H, W, _, T);
      else if (M & 2 && H.class !== W.class && o(D, "class", null, W.class, T), M & 4 && o(D, "style", H.style, W.style, T), M & 8) {
        const Q = m.dynamicProps;
        for (let R = 0; R < Q.length; R++) {
          const O = Q[R], $ = H[O], J = W[O];
          (J !== $ || O === "value") && o(D, O, $, J, T, _);
        }
      }
      M & 1 && f.children !== m.children && b(D, m.children);
    } else !P && S == null && Je(D, H, W, _, T);
    ((X = W.onVnodeUpdated) || K) && at(() => {
      X && Pt(X, _, m, f), K && on(m, f, _, "updated");
    }, A);
  }, Le = (f, m, _, A, T, x, P) => {
    for (let D = 0; D < m.length; D++) {
      const M = f[D], S = m[D], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        M.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (M.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$n(M, S) || // - In the case of a component, it could contain anything.
        M.shapeFlag & 198) ? E(M.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      q(
        M,
        S,
        K,
        null,
        A,
        T,
        x,
        P,
        !0
      );
    }
  }, Je = (f, m, _, A, T) => {
    if (m !== _) {
      if (m !== Te)
        for (const x in m)
          !Gn(x) && !(x in _) && o(
            f,
            x,
            m[x],
            null,
            T,
            A
          );
      for (const x in _) {
        if (Gn(x)) continue;
        const P = _[x], D = m[x];
        P !== D && x !== "value" && o(f, x, D, P, T, A);
      }
      "value" in _ && o(f, "value", m.value, _.value, T);
    }
  }, rt = (f, m, _, A, T, x, P, D, M) => {
    const S = m.el = f ? f.el : l(""), K = m.anchor = f ? f.anchor : l("");
    let { patchFlag: H, dynamicChildren: W, slotScopeIds: X } = m;
    X && (D = D ? D.concat(X) : X), f == null ? (r(S, _, A), r(K, _, A), He(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      _,
      K,
      T,
      x,
      P,
      D,
      M
    )) : H > 0 && H & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === W.length ? (Le(
      f.dynamicChildren,
      W,
      _,
      T,
      x,
      P,
      D
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || T && m === T.subTree) && cl(
      f,
      m,
      !0
      /* shallow */
    )) : oe(
      f,
      m,
      _,
      K,
      T,
      x,
      P,
      D,
      M
    );
  }, Be = (f, m, _, A, T, x, P, D, M) => {
    m.slotScopeIds = D, f == null ? m.shapeFlag & 512 ? T.ctx.activate(
      m,
      _,
      A,
      P,
      M
    ) : ht(
      m,
      _,
      A,
      T,
      x,
      P,
      M
    ) : De(f, m, M);
  }, ht = (f, m, _, A, T, x, P) => {
    const D = f.component = wc(
      f,
      A,
      T
    );
    if (Xi(f) && (D.ctx.renderer = We), Oc(D, !1, P), D.asyncDep) {
      if (T && T.registerDep(D, we, P), !f.el) {
        const M = D.subTree = zt(Gt);
        ne(null, M, m, _), f.placeholder = M.el;
      }
    } else
      we(
        D,
        f,
        m,
        _,
        T,
        x,
        P
      );
  }, De = (f, m, _) => {
    const A = m.component = f.component;
    if (ac(f, m, _))
      if (A.asyncDep && !A.asyncResolved) {
        de(A, m, _);
        return;
      } else
        A.next = m, A.update();
    else
      m.el = f.el, A.vnode = m;
  }, we = (f, m, _, A, T, x, P) => {
    const D = () => {
      if (f.isMounted) {
        let { next: H, bu: W, u: X, parent: Q, vnode: R } = f;
        {
          const he = ul(f);
          if (he) {
            H && (H.el = R.el, de(f, H, P)), he.asyncDep.then(() => {
              at(() => {
                f.isUnmounted || S();
              }, T);
            });
            return;
          }
        }
        let O = H, $;
        sn(f, !1), H ? (H.el = R.el, de(f, H, P)) : H = R, W && Sr(W), ($ = H.props && H.props.onVnodeBeforeUpdate) && Pt($, Q, H, R), sn(f, !0);
        const J = wo(f), re = f.subTree;
        f.subTree = J, q(
          re,
          J,
          // parent may have changed if it's in a teleport
          E(re.el),
          // anchor may have changed if it's in a fragment
          bt(re),
          f,
          T,
          x
        ), H.el = J.el, O === null && cc(f, J.el), X && at(X, T), ($ = H.props && H.props.onVnodeUpdated) && at(
          () => Pt($, Q, H, R),
          T
        );
      } else {
        let H;
        const { el: W, props: X } = m, { bm: Q, m: R, parent: O, root: $, type: J } = f, re = Zn(m);
        sn(f, !1), Q && Sr(Q), !re && (H = X && X.onVnodeBeforeMount) && Pt(H, O, m), sn(f, !0);
        {
          $.ce && $.ce._hasShadowRoot() && $.ce._injectChildStyle(
            J,
            f.parent ? f.parent.type : void 0
          );
          const he = f.subTree = wo(f);
          q(
            null,
            he,
            _,
            A,
            f,
            T,
            x
          ), m.el = he.el;
        }
        if (R && at(R, T), !re && (H = X && X.onVnodeMounted)) {
          const he = m;
          at(
            () => Pt(H, O, he),
            T
          );
        }
        (m.shapeFlag & 256 || O && Zn(O.vnode) && O.vnode.shapeFlag & 256) && f.a && at(f.a, T), f.isMounted = !0, m = _ = A = null;
      }
    };
    f.scope.on();
    const M = f.effect = new Es(D);
    f.scope.off();
    const S = f.update = M.run.bind(M), K = f.job = M.runIfDirty.bind(M);
    K.i = f, K.id = f.uid, M.scheduler = () => Gi(K), sn(f, !0), S();
  }, de = (f, m, _) => {
    m.component = f;
    const A = f.vnode.props;
    f.vnode = m, f.next = null, fc(f, m.props, A, _), mc(f, m.children, _), Wt(), vo(f), qt();
  }, oe = (f, m, _, A, T, x, P, D, M = !1) => {
    const S = f && f.children, K = f ? f.shapeFlag : 0, H = m.children, { patchFlag: W, shapeFlag: X } = m;
    if (W > 0) {
      if (W & 128) {
        it(
          S,
          H,
          _,
          A,
          T,
          x,
          P,
          D,
          M
        );
        return;
      } else if (W & 256) {
        Pe(
          S,
          H,
          _,
          A,
          T,
          x,
          P,
          D,
          M
        );
        return;
      }
    }
    X & 8 ? (K & 16 && Ie(S, T, x), H !== S && b(_, H)) : K & 16 ? X & 16 ? it(
      S,
      H,
      _,
      A,
      T,
      x,
      P,
      D,
      M
    ) : Ie(S, T, x, !0) : (K & 8 && b(_, ""), X & 16 && He(
      H,
      _,
      A,
      T,
      x,
      P,
      D,
      M
    ));
  }, Pe = (f, m, _, A, T, x, P, D, M) => {
    f = f || On, m = m || On;
    const S = f.length, K = m.length, H = Math.min(S, K);
    let W;
    for (W = 0; W < H; W++) {
      const X = m[W] = M ? jt(m[W]) : It(m[W]);
      q(
        f[W],
        X,
        _,
        null,
        T,
        x,
        P,
        D,
        M
      );
    }
    S > K ? Ie(
      f,
      T,
      x,
      !0,
      !1,
      H
    ) : He(
      m,
      _,
      A,
      T,
      x,
      P,
      D,
      M,
      H
    );
  }, it = (f, m, _, A, T, x, P, D, M) => {
    let S = 0;
    const K = m.length;
    let H = f.length - 1, W = K - 1;
    for (; S <= H && S <= W; ) {
      const X = f[S], Q = m[S] = M ? jt(m[S]) : It(m[S]);
      if ($n(X, Q))
        q(
          X,
          Q,
          _,
          null,
          T,
          x,
          P,
          D,
          M
        );
      else
        break;
      S++;
    }
    for (; S <= H && S <= W; ) {
      const X = f[H], Q = m[W] = M ? jt(m[W]) : It(m[W]);
      if ($n(X, Q))
        q(
          X,
          Q,
          _,
          null,
          T,
          x,
          P,
          D,
          M
        );
      else
        break;
      H--, W--;
    }
    if (S > H) {
      if (S <= W) {
        const X = W + 1, Q = X < K ? m[X].el : A;
        for (; S <= W; )
          q(
            null,
            m[S] = M ? jt(m[S]) : It(m[S]),
            _,
            Q,
            T,
            x,
            P,
            D,
            M
          ), S++;
      }
    } else if (S > W)
      for (; S <= H; )
        $e(f[S], T, x, !0), S++;
    else {
      const X = S, Q = S, R = /* @__PURE__ */ new Map();
      for (S = Q; S <= W; S++) {
        const C = m[S] = M ? jt(m[S]) : It(m[S]);
        C.key != null && R.set(C.key, S);
      }
      let O, $ = 0;
      const J = W - Q + 1;
      let re = !1, he = 0;
      const ce = new Array(J);
      for (S = 0; S < J; S++) ce[S] = 0;
      for (S = X; S <= H; S++) {
        const C = f[S];
        if ($ >= J) {
          $e(C, T, x, !0);
          continue;
        }
        let p;
        if (C.key != null)
          p = R.get(C.key);
        else
          for (O = Q; O <= W; O++)
            if (ce[O - Q] === 0 && $n(C, m[O])) {
              p = O;
              break;
            }
        p === void 0 ? $e(C, T, x, !0) : (ce[p - Q] = S + 1, p >= he ? he = p : re = !0, q(
          C,
          m[p],
          _,
          null,
          T,
          x,
          P,
          D,
          M
        ), $++);
      }
      const k = re ? _c(ce) : On;
      for (O = k.length - 1, S = J - 1; S >= 0; S--) {
        const C = Q + S, p = m[C], fe = m[C + 1], qe = C + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          fe.el || fl(fe)
        ) : A;
        ce[S] === 0 ? q(
          null,
          p,
          _,
          qe,
          T,
          x,
          P,
          D,
          M
        ) : re && (O < 0 || S !== k[O] ? Ue(p, _, qe, 2) : O--);
      }
    }
  }, Ue = (f, m, _, A, T = null) => {
    const { el: x, type: P, transition: D, children: M, shapeFlag: S } = f;
    if (S & 6) {
      Ue(f.component.subTree, m, _, A);
      return;
    }
    if (S & 128) {
      f.suspense.move(m, _, A);
      return;
    }
    if (S & 64) {
      P.move(f, m, _, We);
      return;
    }
    if (P === ue) {
      r(x, m, _);
      for (let H = 0; H < M.length; H++)
        Ue(M[H], m, _, A);
      r(f.anchor, m, _);
      return;
    }
    if (P === fi) {
      U(f, m, _);
      return;
    }
    if (A !== 2 && S & 1 && D)
      if (A === 0)
        D.persisted && !x[ai] ? r(x, m, _) : (D.beforeEnter(x), r(x, m, _), at(() => D.enter(x), T));
      else {
        const { leave: H, delayLeave: W, afterLeave: X } = D, Q = () => {
          f.ctx.isUnmounted ? i(x) : r(x, m, _);
        }, R = () => {
          const O = x._isLeaving || !!x[ai];
          x._isLeaving && x[ai](
            !0
            /* cancelled */
          ), D.persisted && !O ? Q() : H(x, () => {
            Q(), X && X();
          });
        };
        W ? W(x, Q, R) : R();
      }
    else
      r(x, m, _);
  }, $e = (f, m, _, A = !1, T = !1) => {
    const {
      type: x,
      props: P,
      ref: D,
      children: M,
      dynamicChildren: S,
      shapeFlag: K,
      patchFlag: H,
      dirs: W,
      cacheIndex: X,
      memo: Q
    } = f;
    if (H === -2 && (T = !1), D != null && (Wt(), Jn(D, null, _, f, !0), qt()), X != null && (m.renderCache[X] = void 0), K & 256) {
      m.ctx.deactivate(f);
      return;
    }
    const R = K & 1 && W, O = !Zn(f);
    let $;
    if (O && ($ = P && P.onVnodeBeforeUnmount) && Pt($, m, f), K & 6)
      _t(f.component, _, A);
    else {
      if (K & 128) {
        f.suspense.unmount(_, A);
        return;
      }
      R && on(f, null, m, "beforeUnmount"), K & 64 ? f.type.remove(
        f,
        m,
        _,
        We,
        A
      ) : S && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !S.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== ue || H > 0 && H & 64) ? Ie(
        S,
        m,
        _,
        !1,
        !0
      ) : (x === ue && H & 384 || !T && K & 16) && Ie(M, m, _), A && mt(f);
    }
    const J = Q != null && X == null;
    (O && ($ = P && P.onVnodeUnmounted) || R || J) && at(() => {
      $ && Pt($, m, f), R && on(f, null, m, "unmounted"), J && (f.el = null);
    }, _);
  }, mt = (f) => {
    const { type: m, el: _, anchor: A, transition: T } = f;
    if (m === ue) {
      pe(_, A);
      return;
    }
    if (m === fi) {
      V(f);
      return;
    }
    const x = () => {
      i(_), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (f.shapeFlag & 1 && T && !T.persisted) {
      const { leave: P, delayLeave: D } = T, M = () => P(_, x);
      D ? D(f.el, x, M) : M();
    } else
      x();
  }, pe = (f, m) => {
    let _;
    for (; f !== m; )
      _ = N(f), i(f), f = _;
    i(m);
  }, _t = (f, m, _) => {
    const { bum: A, scope: T, job: x, subTree: P, um: D, m: M, a: S } = f;
    No(M), No(S), A && Sr(A), T.stop(), x && (x.flags |= 8, $e(P, f, m, _)), D && at(D, m), at(() => {
      f.isUnmounted = !0;
    }, m);
  }, Ie = (f, m, _, A = !1, T = !1, x = 0) => {
    for (let P = x; P < f.length; P++)
      $e(f[P], m, _, A, T);
  }, bt = (f) => {
    if (f.shapeFlag & 6)
      return bt(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const m = N(f.anchor || f.el), _ = m && m[Da];
    return _ ? N(_) : m;
  };
  let vt = !1;
  const Et = (f, m, _) => {
    let A;
    f == null ? m._vnode && ($e(m._vnode, null, null, !0), A = m._vnode.component) : q(
      m._vnode || null,
      f,
      m,
      null,
      null,
      null,
      _
    ), m._vnode = f, vt || (vt = !0, vo(A), Hs(), vt = !1);
  }, We = {
    p: q,
    um: $e,
    m: Ue,
    r: mt,
    mt: ht,
    mc: He,
    pc: oe,
    pbc: Le,
    n: bt,
    o: e
  };
  return {
    render: Et,
    hydrate: void 0,
    createApp: nc(Et)
  };
}
function ui({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function sn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function cl(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (Z(r) && Z(i))
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = jt(i[o]), l.el = s.el), !n && l.patchFlag !== -2 && cl(s, l)), l.type === qr && (l.patchFlag === -1 && (l = i[o] = jt(l)), l.el = s.el), l.type === Gt && !l.el && (l.el = s.el);
    }
}
function _c(e) {
  const t = e.slice(), n = [0];
  let r, i, o, s, l;
  const u = e.length;
  for (r = 0; r < u; r++) {
    const v = e[r];
    if (v !== 0) {
      if (i = n[n.length - 1], e[i] < v) {
        t[r] = i, n.push(r);
        continue;
      }
      for (o = 0, s = n.length - 1; o < s; )
        l = o + s >> 1, e[n[l]] < v ? o = l + 1 : s = l;
      v < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, s = n[o - 1]; o-- > 0; )
    n[o] = s, s = t[s];
  return n;
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
  t && t.pendingBranch ? Z(e) ? t.effects.push(...e) : t.effects.push(e) : Na(e);
}
const ue = /* @__PURE__ */ Symbol.for("v-fgt"), qr = /* @__PURE__ */ Symbol.for("v-txt"), Gt = /* @__PURE__ */ Symbol.for("v-cmt"), fi = /* @__PURE__ */ Symbol.for("v-stc"), mn = [];
let pt = null;
function L(e = !1) {
  mn.push(pt = e ? null : []);
}
function pl() {
  mn.pop(), pt = mn[mn.length - 1] || null;
}
let rr = 1;
function Po(e, t = !1) {
  rr += e, e < 0 && pt && t && (pt.hasOnce = !0);
}
function hl(e) {
  return e.dynamicChildren = rr > 0 ? pt || On : null, pl(), rr > 0 && pt && pt.push(e), e;
}
function I(e, t, n, r, i, o) {
  return hl(
    d(
      e,
      t,
      n,
      r,
      i,
      o,
      !0
    )
  );
}
function Ec(e, t, n, r, i) {
  return hl(
    zt(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function ml(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function $n(e, t) {
  return e.type === t.type && e.key === t.key;
}
const bl = ({ key: e }) => e ?? null, xr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ne(e) || /* @__PURE__ */ Ye(e) || le(e) ? { i: yt, r: e, k: t, f: !!n } : e : null);
function d(e, t = null, n = null, r = 0, i = null, o = e === ue ? 0 : 1, s = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bl(t),
    ref: t && xr(t),
    scopeId: js,
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
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: yt
  };
  return l ? (kr(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= Ne(n) ? 8 : 16), rr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  pt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && pt.push(u), u;
}
const zt = Tc;
function Tc(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === Ga) && (e = Gt), ml(e)) {
    const l = Mn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && kr(l, n), rr > 0 && !o && pt && (l.shapeFlag & 6 ? pt[pt.indexOf(e)] = l : pt.push(l)), l.patchFlag = -2, l;
  }
  if (Lc(e) && (e = e.__vccOpts), t) {
    t = Sc(t);
    let { class: l, style: u } = t;
    l && !Ne(l) && (t.class = Nn(l)), Ee(u) && (/* @__PURE__ */ Ki(u) && !Z(u) && (u = Xe({}, u)), t.style = $i(u));
  }
  const s = Ne(e) ? 1 : dl(e) ? 128 : Br(e) ? 64 : Ee(e) ? 4 : le(e) ? 2 : 0;
  return d(
    e,
    t,
    n,
    r,
    i,
    s,
    o,
    !0
  );
}
function Sc(e) {
  return e ? /* @__PURE__ */ Ki(e) || rl(e) ? Xe({}, e) : e : null;
}
function Mn(e, t, n = !1, r = !1) {
  const { props: i, ref: o, patchFlag: s, children: l, transition: u } = e, v = t ? Cc(i || {}, t) : i, b = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && bl(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Z(o) ? o.concat(xr(t)) : [o, xr(t)] : xr(t)
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
    patchFlag: t && e.type !== ue ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Mn(e.ssContent),
    ssFallback: e.ssFallback && Mn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && r && Yi(
    b,
    u.clone(b)
  ), b;
}
function ye(e = " ", t = 0) {
  return zt(qr, null, e, t);
}
function be(e = "", t = !1) {
  return t ? (L(), Ec(Gt, null, e)) : zt(Gt, null, e);
}
function It(e) {
  return e == null || typeof e == "boolean" ? zt(Gt) : Z(e) ? zt(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ml(e) ? jt(e) : zt(qr, null, String(e));
}
function jt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Mn(e);
}
function kr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Z(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), kr(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !rl(t) ? t._ctx = yt : i === 3 && yt && (yt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (le(t)) {
    if (r & 65) {
      kr(e, { default: t });
      return;
    }
    t = { default: t, _ctx: yt }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [ye(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Cc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = Nn([t.class, r.class]));
      else if (i === "style")
        t.style = $i([t.style, r.style]);
      else if (Dr(i)) {
        const o = t[i], s = r[i];
        s && o !== s && !(Z(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ur(i) && (t[i] = s);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function Pt(e, t, n, r = null) {
  wt(e, t, 7, [
    n,
    r
  ]);
}
const xc = Zs();
let Ac = 0;
function wc(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || xc, o = {
    uid: Ac++,
    vnode: e,
    type: r,
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
    propsOptions: ol(r, i),
    emitsOptions: Qs(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Te,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Te,
    data: Te,
    props: Te,
    attrs: Te,
    slots: Te,
    refs: Te,
    setupState: Te,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ic.bind(null, o), e.ce && e.ce(o), o;
}
let nt = null;
const Rc = () => nt || yt;
let Lr, ir;
{
  const e = $r(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Lr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => nt = n
  ), ir = t(
    "__VUE_SSR_SETTERS__",
    (n) => or = n
  );
}
const ar = (e) => {
  const t = nt;
  return Lr(e), e.scope.on(), () => {
    e.scope.off(), Lr(t);
  };
}, ko = () => {
  nt && nt.scope.off(), Lr(null);
};
function yl(e) {
  return e.vnode.shapeFlag & 4;
}
let or = !1;
function Oc(e, t = !1, n = !1) {
  t && ir(t);
  const { props: r, children: i } = e.vnode, o = yl(e);
  uc(e, r, o, t), hc(e, i, n || t);
  const s = o ? Nc(e, t) : void 0;
  return t && ir(!1), s;
}
function Nc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ya);
  const { setup: r } = n;
  if (r) {
    Wt();
    const i = e.setupContext = r.length > 1 ? kc(e) : null, o = ar(e), s = lr(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = ps(s);
    if (qt(), o(), (l || e.sp) && !Zn(e) && Ws(e), l) {
      if (s.then(ko, ko), t)
        return s.then((u) => {
          ir(!0);
          try {
            Lo(e, u, t);
          } finally {
            ir(!1);
          }
        }).catch((u) => {
          Vr(u, e, 0);
        });
      e.asyncDep = s;
    } else
      Lo(e, s);
  } else
    gl(e);
}
function Lo(e, t, n) {
  le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ee(t) && (e.setupState = Ms(t)), gl(e);
}
function gl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Dt);
  {
    const i = ar(e);
    Wt();
    try {
      Xa(e);
    } finally {
      qt(), i();
    }
  }
}
const Pc = {
  get(e, t) {
    return Ge(e, "get", ""), e[t];
  }
};
function kc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Pc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Kr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ms(_a(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Qn)
        return Qn[n](e);
    },
    has(t, n) {
      return n in t || n in Qn;
    }
  })) : e.proxy;
}
function Lc(e) {
  return le(e) && "__vccOpts" in e;
}
const se = (e, t) => /* @__PURE__ */ xa(e, t, or), Ic = "3.5.42";
let Ii;
const Io = typeof window < "u" && window.trustedTypes;
if (Io)
  try {
    Ii = /* @__PURE__ */ Io.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const _l = Ii ? (e) => Ii.createHTML(e) : (e) => e, Mc = "http://www.w3.org/2000/svg", Dc = "http://www.w3.org/1998/Math/MathML", $t = typeof document < "u" ? document : null, Mo = $t && /* @__PURE__ */ $t.createElement("template"), Uc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? $t.createElementNS(Mc, e) : t === "mathml" ? $t.createElementNS(Dc, e) : n ? $t.createElement(e, { is: n }) : $t.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => $t.createTextNode(e),
  createComment: (e) => $t.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => $t.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, o) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Mo.innerHTML = _l(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Mo.content;
      if (r === "svg" || r === "mathml") {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Fc = /* @__PURE__ */ Symbol("_vtc");
function Hc(e, t, n) {
  const r = e[Fc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Do = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function Bc(e, t, n) {
  const r = e.style, i = Ne(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (Ne(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && qn(r, l, "");
        }
      else
        for (const s in t)
          n[s] == null && qn(r, s, "");
    for (const s in n) {
      s === "display" && (o = !0);
      const l = n[s];
      l != null ? Wc(
        e,
        s,
        !Ne(t) && t ? t[s] : void 0,
        l
      ) || qn(r, s, l) : qn(r, s, "");
    }
  } else if (i) {
    if (t !== n) {
      const s = r[jc];
      s && (n += ";" + s), r.cssText = n, o = Vc.test(n);
    }
  } else t && e.removeAttribute("style");
  Do in e && (e[Do] = o ? r.display : "", e[$c] && (r.display = "none"));
}
const _r = /\s*!important$/;
function qn(e, t, n) {
  if (Z(n))
    n.forEach((r) => qn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    _r.test(n) ? e.setProperty(t, n.replace(_r, ""), "important") : e.setProperty(t, n);
  else {
    const r = zc(e, t);
    _r.test(n) ? e.setProperty(
      yn(r),
      n.replace(_r, ""),
      "important"
    ) : e[r] = n;
  }
}
const Uo = ["Webkit", "Moz", "ms"], di = {};
function zc(e, t) {
  const n = di[t];
  if (n)
    return n;
  let r = Ct(t);
  if (r !== "filter" && r in e)
    return di[t] = r;
  r = bs(r);
  for (let i = 0; i < Uo.length; i++) {
    const o = Uo[i] + r;
    if (o in e)
      return di[t] = o;
  }
  return t;
}
function Wc(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ne(r) && n === r;
}
const Fo = "http://www.w3.org/1999/xlink";
function Ho(e, t, n, r, i, o = Xl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Fo, t.slice(6, t.length)) : e.setAttributeNS(Fo, t, n) : n == null || o && !gs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Ut(n) ? String(n) : n
  );
}
function $o(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? _l(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = gs(n) : n == null && l === "string" ? (n = "", s = !0) : l === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function un(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function qc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const jo = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, n, r, i = null) {
  const o = e[jo] || (e[jo] = {}), s = o[t];
  if (r && s)
    s.value = r;
  else {
    const [l, u] = Xc(t);
    if (r) {
      const v = o[t] = Qc(
        r,
        i
      );
      un(e, l, v, u);
    } else s && (qc(e, l, s, u), o[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, n;
  for (; (n = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : yn(e.slice(2)), t];
}
let pi = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => pi || (Jc.then(() => pi = 0), pi = Date.now());
function Qc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const i = n.value;
    if (Z(i)) {
      const o = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        o.call(r), r._stopped = !0;
      };
      const s = i.slice(), l = [r];
      for (let u = 0; u < s.length && !r._stopped; u++) {
        const v = s[u];
        v && wt(
          v,
          t,
          5,
          l
        );
      }
    } else
      wt(
        i,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Zc(), n;
}
const Vo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eu = (e, t, n, r, i, o) => {
  const s = i === "svg";
  t === "class" ? Hc(e, r, s) : t === "style" ? Bc(e, n, r) : Dr(t) ? Ur(t) || Kc(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, r, s)) ? ($o(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ho(e, t, r, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (nu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ne(r))) ? $o(e, Ct(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ho(e, t, r, s));
};
function tu(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Vo(t) && le(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Vo(t) && Ne(n) ? !1 : t in e;
}
function nu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Ct(t);
  return Array.isArray(n) ? n.some((i) => Ct(i) === r) : Object.keys(n).some((i) => Ct(i) === r);
}
const Ir = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Z(t) ? (n) => Sr(t, n) : t;
};
function ru(e) {
  e.target.composing = !0;
}
function Bo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const dn = /* @__PURE__ */ Symbol("_assign"), vr = /* @__PURE__ */ Symbol("_initialValue");
function hi(e, t, n) {
  return t && (e = e.trim()), n && (e = Hr(e)), e;
}
const mi = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e.parentNode && (e.type === "text" ? e[vr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[vr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[dn] = Ir(i);
    const o = r || i.props && i.props.type === "number";
    un(e, t ? "change" : "input", (s) => {
      s.target.composing || e[dn](hi(e.value, n, o));
    }), (n || o) && un(e, "change", () => {
      e.value = hi(e.value, n, o);
    }), t || (un(e, "compositionstart", ru), un(e, "compositionend", Bo), un(e, "change", Bo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const i = t ?? "", o = e[vr];
    delete e[vr], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[dn](hi(e.value, n, r)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: o } }, s) {
    if (e[dn] = Ir(s), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Hr(e.value) : e.value, u = t ?? "";
    if (l === u)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === u) || (e.value = u);
  }
}, Qe = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, un(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => n ? Hr(Mr(u)) : Mr(u)
      ), o = e.multiple, s = o ? bn(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
        o,
        o ? Z(s) ? i.slice() : i : s
      ];
      try {
        e[dn](s);
      } finally {
        Us(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[dn] = Ir(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    zo(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[dn] = Ir(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !iu(t, n[1], n[0])) && zo(e, t);
  }
};
function iu(e, t, n) {
  if (!n || Z(e)) return tn(e, t);
  if (bn(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function zo(e, t) {
  const n = e.multiple, r = Z(t);
  if (!(n && !r && !bn(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const s = e.options[i], l = Mr(s);
      if (n)
        if (r) {
          const u = typeof l;
          u === "string" || u === "number" ? s.selected = t.some((v) => String(v) === String(l)) : s.selected = Zl(t, l) > -1;
        } else
          s.selected = t.has(l);
      else if (tn(Mr(s), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Mr(e) {
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
  exact: (e, t) => ou.some((n) => e[`${n}Key`] && !t.includes(n))
}, Er = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const l = su[t[s]];
      if (l && l(i, t)) return;
    }
    return e(i, ...o);
  }));
}, lu = /* @__PURE__ */ Xe({ patchProp: eu }, Uc);
let Wo;
function au() {
  return Wo || (Wo = bc(lu));
}
const cu = ((...e) => {
  const t = au().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = fu(r);
    if (!i) return;
    const o = t._component;
    !le(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, uu(i));
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
  return Ne(e) ? document.querySelector(e) : e;
}
function du(e, t, n) {
  const r = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(r))
    return window._nc_initial_state.get(r);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const i = document.querySelector(r);
  if (i === null) {
    if (n !== void 0)
      return n;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const o = JSON.parse(atob(i.value));
    return window._nc_initial_state.set(r, o), o;
  } catch (o) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: o }), n !== void 0)
      return n;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: o });
  }
}
function qo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function pu(e) {
  if (Array.isArray(e)) return e;
}
function hu(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, o, s, l = [], u = !0, v = !1;
    try {
      if (o = (n = n.call(e)).next, t !== 0) for (; !(u = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); u = !0) ;
    } catch (b) {
      v = !0, i = b;
    } finally {
      try {
        if (!u && n.return != null && (s = n.return(), Object(s) !== s)) return;
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
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? qo(e, t) : void 0;
  }
}
const vl = Object.entries, Ko = Object.setPrototypeOf, gu = Object.isFrozen, _u = Object.getPrototypeOf, vu = Object.getOwnPropertyDescriptor;
let Fe = Object.freeze, Ve = Object.seal, Rn = Object.create, El = typeof Reflect < "u" && Reflect, Mi = El.apply, Di = El.construct;
Fe || (Fe = function(t) {
  return t;
});
Ve || (Ve = function(t) {
  return t;
});
Mi || (Mi = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    i[o - 2] = arguments[o];
  return t.apply(n, i);
});
Di || (Di = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return new t(...r);
});
const cn = Me(Array.prototype.forEach), Eu = Me(Array.prototype.lastIndexOf), Go = Me(Array.prototype.pop), jn = Me(Array.prototype.push), Tu = Me(Array.prototype.splice), Ln = Array.isArray, Kn = Me(String.prototype.toLowerCase), bi = Me(String.prototype.toString), Yo = Me(String.prototype.match), Vn = Me(String.prototype.replace), Xo = Me(String.prototype.indexOf), Su = Me(String.prototype.trim), Cu = Me(Number.prototype.toString), xu = Me(Boolean.prototype.toString), Jo = typeof BigInt > "u" ? null : Me(BigInt.prototype.toString), Zo = typeof Symbol > "u" ? null : Me(Symbol.prototype.toString), ct = Me(Object.prototype.hasOwnProperty), Bn = Me(Object.prototype.toString), Ke = Me(RegExp.prototype.test), ln = Au(TypeError);
function Me(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return Mi(e, t, r);
  };
}
function Au(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Di(e, n);
  };
}
function me(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Kn;
  if (Ko && Ko(e, null), !Ln(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      const o = n(i);
      o !== i && (gu(t) || (t[r] = o), i = o);
    }
    e[i] = !0;
  }
  return e;
}
function wu(e) {
  for (let t = 0; t < e.length; t++)
    ct(e, t) || (e[t] = null);
  return e;
}
function dt(e) {
  const t = Rn(null);
  for (const r of vl(e)) {
    var n = bu(r, 2);
    const i = n[0], o = n[1];
    ct(e, i) && (Ln(o) ? t[i] = wu(o) : o && typeof o == "object" && o.constructor === Object ? t[i] = dt(o) : t[i] = o);
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
      return Bn(e);
    case "function":
    case "object": {
      if (e === null)
        return Bn(e);
      const t = e, n = St(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Bn(r);
      }
      return Bn(e);
    }
    default:
      return Bn(e);
  }
}
function St(e, t) {
  for (; e !== null; ) {
    const r = vu(e, t);
    if (r) {
      if (r.get)
        return Me(r.get);
      if (typeof r.value == "function")
        return Me(r.value);
    }
    e = _u(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Ou(e) {
  try {
    return Ke(e, ""), !0;
  } catch {
    return !1;
  }
}
const Qo = Fe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), yi = Fe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), gi = Fe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Nu = Fe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), _i = Fe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Pu = Fe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), es = Fe(["#text"]), ts = Fe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), vi = Fe(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ns = Fe(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Tr = Fe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ku = Ve(/{{[\w\W]*|^[\w\W]*}}/g), Lu = Ve(/<%[\w\W]*|^[\w\W]*%>/g), Iu = Ve(/\${[\w\W]*/g), Mu = Ve(/^data-[\-\w.\u00B7-\uFFFF]+$/), Du = Ve(/^aria-[\-\w]+$/), rs = Ve(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Uu = Ve(/^(?:\w+script|data):/i), Fu = Ve(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = Ve(/^html$/i), $u = Ve(/^[a-z][.\w]*(-[.\w]+)+$/i), is = Ve(/<[/\w!]/g), os = Ve(/<[/\w]/g), ju = Ve(/<\/no(script|embed|frames)/i), Vu = Ve(/\/>/i), ft = {
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
}, Tl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Bu = Fe(me({}, Tl)), zu = (function() {
  const e = {};
  return cn(Tl, (t) => {
    e[t] = Ve(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Fe(e);
})(), Wu = function() {
  return typeof window > "u" ? null : window;
}, qu = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const i = "data-tt-policy-suffix";
  n && n.hasAttribute(i) && (r = n.getAttribute(i));
  const o = "dompurify" + (r ? "#" + r : "");
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
}, Zt = function(t, n, r, i) {
  return ct(t, n) && Ln(t[n]) ? me(i.base ? dt(i.base) : {}, t[n], i.transform) : r;
}, Ei = function(t, n, r) {
  const i = ct(t, n) ? t[n] : void 0;
  return i && typeof i == "object" ? dt(i) : r();
};
function Sl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wu();
  const t = (F) => Sl(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== ft.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const o = e.HTMLTemplateElement, s = e.Node, l = e.Element, u = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const b = e.DOMParser, E = e.trustedTypes, N = l.prototype, j = St(N, "cloneNode"), te = St(N, "remove"), q = St(N, "nextSibling"), ie = St(N, "childNodes"), ne = St(N, "parentNode"), z = St(N, "shadowRoot"), U = St(N, "attributes"), V = s && s.prototype ? St(s.prototype, "nodeType") : null, ae = s && s.prototype ? St(s.prototype, "nodeName") : null, Oe = s && s.prototype ? St(s.prototype, "ownerDocument") : null, Ae = function(a) {
    return V ? V(a) : a.nodeType;
  }, He = function(a) {
    return ae ? ae(a) : a.nodeName;
  };
  if (typeof o == "function") {
    const F = n.createElement("template");
    F.content && F.content.ownerDocument && (n = F.content.ownerDocument);
  }
  let ve, Le = "", Je, rt = !1, Be = 0;
  const ht = function() {
    if (Be > 0)
      throw ln('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, De = function(a) {
    ht(), Be++;
    try {
      return ve.createHTML(a);
    } finally {
      Be--;
    }
  }, we = function(a) {
    ht(), Be++;
    try {
      return ve.createScriptURL(a);
    } finally {
      Be--;
    }
  }, de = function() {
    return rt || (Je = qu(E, i), rt = !0), Je;
  }, oe = n, Pe = oe.implementation, it = oe.createNodeIterator, Ue = oe.createDocumentFragment, $e = oe.getElementsByTagName, mt = r.importNode;
  let pe = ss();
  t.isSupported = typeof vl == "function" && typeof ne == "function" && Pe && Pe.createHTMLDocument !== void 0;
  const _t = ku, Ie = Lu, bt = Iu, vt = Mu, Et = Du, We = Uu, Tt = Fu, f = $u;
  let m = rs, _ = null;
  const A = me({}, [...Qo, ...yi, ...gi, ..._i, ...es]);
  let T = null;
  const x = me({}, [...ts, ...vi, ...ns, ...Tr]);
  let P = Object.seal(Rn(null, {
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
  })), D = null, M = null;
  const S = Object.seal(Rn(null, {
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
  let K = !0, H = !0, W = !1, X = !0, Q = !1, R = !0, O = !1, $ = !1, J = null, re = null, he = !1, ce = !1, k = !1, C = !1, p = !0, fe = !1;
  const qe = "user-content-";
  let ot = !0, Dn = !1, Ft = {}, Rt = null;
  const gn = me({}, [
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
  let _n = null;
  const vn = me({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ot = null;
  const cr = me({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Xt = "http://www.w3.org/1998/Math/MathML", nn = "http://www.w3.org/2000/svg", ut = "http://www.w3.org/1999/xhtml";
  let En = ut, Gr = !1, Yr = null;
  const xl = me({}, [Xt, nn, ut], bi), Qi = Fe(["mi", "mo", "mn", "ms", "mtext"]);
  let Xr = me({}, Qi);
  const eo = Fe(["annotation-xml"]);
  let Jr = me({}, eo);
  const Al = me({}, ["title", "style", "font", "a", "script"]);
  let Un = null;
  const wl = ["application/xhtml+xml", "text/html"], Rl = "text/html";
  let ke = null, Tn = null;
  const Ol = n.createElement("form"), to = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, Zr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Tn && Tn === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = dt(a), Un = // eslint-disable-next-line unicorn/prefer-includes
    wl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? Rl : a.PARSER_MEDIA_TYPE, ke = Un === "application/xhtml+xml" ? bi : Kn, _ = Zt(a, "ALLOWED_TAGS", A, {
      transform: ke
    }), T = Zt(a, "ALLOWED_ATTR", x, {
      transform: ke
    }), Yr = Zt(a, "ALLOWED_NAMESPACES", xl, {
      transform: bi
    }), Ot = Zt(a, "ADD_URI_SAFE_ATTR", cr, {
      transform: ke,
      base: cr
    }), _n = Zt(a, "ADD_DATA_URI_TAGS", vn, {
      transform: ke,
      base: vn
    }), Rt = Zt(a, "FORBID_CONTENTS", gn, {
      transform: ke
    }), D = Zt(a, "FORBID_TAGS", dt({}), {
      transform: ke
    }), M = Zt(a, "FORBID_ATTR", dt({}), {
      transform: ke
    }), Ft = ct(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? dt(a.USE_PROFILES) : a.USE_PROFILES : !1, K = a.ALLOW_ARIA_ATTR !== !1, H = a.ALLOW_DATA_ATTR !== !1, W = a.ALLOW_UNKNOWN_PROTOCOLS || !1, X = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = a.SAFE_FOR_TEMPLATES || !1, R = a.SAFE_FOR_XML !== !1, O = a.WHOLE_DOCUMENT || !1, ce = a.RETURN_DOM || !1, k = a.RETURN_DOM_FRAGMENT || !1, C = a.RETURN_TRUSTED_TYPE || !1, he = a.FORCE_BODY || !1, p = a.SANITIZE_DOM !== !1, fe = a.SANITIZE_NAMED_PROPS || !1, ot = a.KEEP_CONTENT !== !1, Dn = a.IN_PLACE || !1, m = Ou(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : rs, En = typeof a.NAMESPACE == "string" ? a.NAMESPACE : ut, Xr = Ei(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => me({}, Qi)
      // Default built-in map
    ), Jr = Ei(
      a,
      "HTML_INTEGRATION_POINTS",
      () => me({}, eo)
      // Default built-in map
    );
    const g = Ei(a, "CUSTOM_ELEMENT_HANDLING", () => Rn(null));
    if (P = Rn(null), ct(g, "tagNameCheck") && to(g.tagNameCheck) && (P.tagNameCheck = g.tagNameCheck), ct(g, "attributeNameCheck") && to(g.attributeNameCheck) && (P.attributeNameCheck = g.attributeNameCheck), ct(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (P.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), Ve(P), Q && (H = !1), k && (ce = !0), Ft && (_ = me({}, es), T = Rn(null), Ft.html === !0 && (me(_, Qo), me(T, ts)), Ft.svg === !0 && (me(_, yi), me(T, vi), me(T, Tr)), Ft.svgFilters === !0 && (me(_, gi), me(T, vi), me(T, Tr)), Ft.mathMl === !0 && (me(_, _i), me(T, ns), me(T, Tr))), S.tagCheck = null, S.attributeCheck = null, ct(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? S.tagCheck = a.ADD_TAGS : Ln(a.ADD_TAGS) && (_ === A && (_ = dt(_)), me(_, a.ADD_TAGS, ke))), ct(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? S.attributeCheck = a.ADD_ATTR : Ln(a.ADD_ATTR) && (T === x && (T = dt(T)), me(T, a.ADD_ATTR, ke))), ct(a, "ADD_FORBID_CONTENTS") && Ln(a.ADD_FORBID_CONTENTS) && (Rt === gn && (Rt = dt(Rt)), me(Rt, a.ADD_FORBID_CONTENTS, ke)), ot && (_["#text"] = !0), O && me(_, ["html", "head", "body"]), _.table && (me(_, ["tbody"]), delete D.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ln('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ln('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const w = ve;
      ve = a.TRUSTED_TYPES_POLICY;
      try {
        Le = De("");
      } catch (B) {
        throw ve = w, B;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (ve = void 0, Le = "") : (ve === void 0 && (ve = de()), ve && typeof Le == "string" && (Le = De("")));
    Fe && Fe(a), Tn = a;
  }, no = me({}, [...yi, ...gi, ...Nu]), ro = me({}, [..._i, ...Pu]), Nl = function(a, g, w) {
    return g.namespaceURI === ut ? a === "svg" : g.namespaceURI === Xt ? a === "svg" && (w === "annotation-xml" || Xr[w]) : !!no[a];
  }, Pl = function(a, g, w) {
    return g.namespaceURI === ut ? a === "math" : g.namespaceURI === nn ? a === "math" && Jr[w] : !!ro[a];
  }, kl = function(a, g, w) {
    return g.namespaceURI === nn && !Jr[w] || g.namespaceURI === Xt && !Xr[w] ? !1 : !ro[a] && (Al[a] || !no[a]);
  }, Ll = function(a) {
    let g = ne(a);
    (!g || !g.tagName) && (g = {
      namespaceURI: En,
      tagName: "template"
    });
    const w = Kn(a.tagName), B = Kn(g.tagName);
    return Yr[a.namespaceURI] ? a.namespaceURI === nn ? Nl(w, g, B) : a.namespaceURI === Xt ? Pl(w, g, B) : a.namespaceURI === ut ? kl(w, g, B) : !!(Un === "application/xhtml+xml" && Yr[a.namespaceURI]) : !1;
  }, Jt = function(a) {
    jn(t.removed, {
      element: a
    });
    try {
      ne(a).removeChild(a);
    } catch {
      if (te(a), !ne(a))
        throw ln("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, io = function(a, g, w) {
    try {
      a.removeAttributeNode(g);
    } catch {
      try {
        a.removeAttribute(w);
      } catch {
      }
    }
  }, ur = function(a) {
    fr(a);
    const g = ie(a);
    if (g) {
      const B = [];
      cn(g, (Y) => {
        jn(B, Y);
      }), cn(B, (Y) => {
        try {
          te(Y);
        } catch {
        }
      });
    }
    const w = U(a);
    if (w)
      for (let B = w.length - 1; B >= 0; --B) {
        const Y = w[B], ee = Y && Y.name;
        typeof ee == "string" && io(a, Y, ee);
      }
  }, rn = function(a, g, w) {
    if (!w)
      try {
        w = g.getAttributeNode(a);
      } catch {
        w = null;
      }
    jn(t.removed, {
      attribute: w || null,
      from: g
    });
    try {
      w ? g.removeAttributeNode(w) : g.removeAttribute(a);
    } catch {
      try {
        g.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (ce || k)
        try {
          Jt(g);
        } catch {
        }
      else
        try {
          g.setAttribute(a, "");
        } catch {
        }
  }, Il = function(a) {
    const g = U(a);
    if (g)
      for (let w = g.length - 1; w >= 0; --w) {
        const B = g[w], Y = B && B.name;
        typeof Y != "string" || T[ke(Y)] || io(a, B, Y);
      }
  }, fr = function(a) {
    const g = [a];
    for (; g.length > 0; ) {
      const w = g.pop();
      Ae(w) === ft.element && Il(w);
      const Y = ie(w);
      if (Y)
        for (let ee = Y.length - 1; ee >= 0; --ee)
          g.push(Y[ee]);
    }
  }, oo = function(a, g) {
    return R ? a === "patchsrc" ? !0 : a === "for" && g !== "label" && g !== "output" : !1;
  }, Ml = function(a) {
    if (!R)
      return;
    const g = [a];
    for (; g.length > 0; ) {
      const w = g.pop(), B = Ae(w);
      if (B === ft.processingInstruction || B === ft.comment && Ke(os, w.data)) {
        try {
          te(w);
        } catch {
        }
        continue;
      }
      if (B === ft.element) {
        const ee = w, Se = ke(He(w));
        try {
          ee.hasAttribute && ee.hasAttribute("patchsrc") && ee.removeAttribute("patchsrc"), ee.hasAttribute && ee.hasAttribute("for") && oo("for", Se) && ee.removeAttribute("for");
        } catch {
        }
      }
      const Y = ie(w);
      if (Y)
        for (let ee = Y.length - 1; ee >= 0; --ee)
          g.push(Y[ee]);
    }
  }, so = function(a) {
    let g = null, w = null;
    if (he)
      a = "<remove></remove>" + a;
    else {
      const ee = Yo(a, /^[\r\n\t ]+/);
      w = ee && ee[0];
    }
    Un === "application/xhtml+xml" && En === ut && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const B = ve ? De(a) : a;
    if (En === ut)
      try {
        g = new b().parseFromString(B, Un);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = Pe.createDocument(En, "template", null);
      try {
        g.documentElement.innerHTML = Gr ? Le : B;
      } catch {
      }
    }
    const Y = g.body || g.documentElement;
    return a && w && Y.insertBefore(n.createTextNode(w), Y.childNodes[0] || null), En === ut ? $e.call(g, O ? "html" : "body")[0] : O ? g.documentElement : Y;
  }, lo = function(a) {
    const g = Oe ? Oe(a) : a.ownerDocument;
    return it.call(
      g || a,
      a,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, dr = function(a) {
    return a = Vn(a, _t, " "), a = Vn(a, Ie, " "), a = Vn(a, bt, " "), a;
  }, Qr = function(a) {
    var g;
    a.normalize();
    const w = Oe ? Oe(a) : a.ownerDocument, B = it.call(
      w || a,
      a,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Y = B.nextNode();
    for (; Y; )
      Y.data = dr(Y.data), Y = B.nextNode();
    const ee = (g = a.querySelectorAll) === null || g === void 0 ? void 0 : g.call(a, "template");
    ee && cn(ee, (Se) => {
      Sn(Se.content) && Qr(Se.content);
    });
  }, pr = function(a) {
    const g = ae ? ae(a) : null;
    return typeof g != "string" || ke(g) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== U(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    a.nodeType !== V(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    a.childNodes !== ie(a);
  }, Sn = function(a) {
    if (!V || typeof a != "object" || a === null)
      return !1;
    try {
      return V(a) === ft.documentFragment;
    } catch {
      return !1;
    }
  }, Fn = function(a) {
    if (!V || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof V(a) == "number";
    } catch {
      return !1;
    }
  };
  function Nt(F, a, g) {
    F.length !== 0 && cn(F, (w) => {
      w.call(t, a, g, Tn);
    });
  }
  const Dl = function(a, g) {
    return !!(R && a.hasChildNodes() && !Fn(a.firstElementChild) && Ke(is, a.textContent) && Ke(is, a.innerHTML) || R && a.namespaceURI === ut && Bu[g] && (Fn(a.firstElementChild) || typeof a.textContent == "string" && Ke(zu[g], a.textContent)) || a.nodeType === ft.processingInstruction || R && a.nodeType === ft.comment && Ke(os, a.data));
  }, hr = function(a, g) {
    if (a instanceof RegExp)
      return Ke(a, g);
    if (a instanceof Function) {
      for (var w = arguments.length, B = new Array(w > 2 ? w - 2 : 0), Y = 2; Y < w; Y++)
        B[Y - 2] = arguments[Y];
      return !!a(g, ...B);
    }
    return !1;
  }, Ul = function(a, g, w) {
    if (!D[g] && po(g) && hr(P.tagNameCheck, g))
      return !1;
    if (ot && !Rt[g]) {
      const B = ne(a), Y = ie(a);
      if (Y && B) {
        const ee = Y.length;
        for (let Se = ee - 1; Se >= 0; --Se) {
          const Re = a === w ? j(Y[Se], !0) : Y[Se];
          B.insertBefore(Re, q(a));
        }
      }
    }
    return Jt(a), !0;
  }, ao = function(a, g, w, B) {
    return a.length === 0 ? g : g === w || g === B ? dt(g) : g;
  }, co = function(a, g) {
    return a === g || ne(a) !== null ? !1 : (Dn && fr(a), !0);
  }, uo = function(a, g) {
    if (Nt(pe.beforeSanitizeElements, a, null), co(a, g))
      return !0;
    if (pr(a))
      return Jt(a), !0;
    const w = ke(He(a));
    if (_ = ao(pe.uponSanitizeElement, _, A, J), Nt(pe.uponSanitizeElement, a, {
      tagName: w,
      allowedTags: _
    }), co(a, g))
      return !0;
    if (Dl(a, w))
      return Jt(a), !0;
    if (D[w] || !(S.tagCheck instanceof Function && S.tagCheck(w)) && !_[w]) {
      const Y = Ul(a, w, g);
      return Y === !1 && Nt(pe.afterSanitizeElements, a, null), Y;
    }
    if (Ae(a) === ft.element && !Ll(a) || (w === "noscript" || w === "noembed" || w === "noframes") && Ke(ju, a.innerHTML))
      return Jt(a), !0;
    if (Q && a.nodeType === ft.text) {
      const Y = dr(a.textContent);
      a.textContent !== Y && (jn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = Y);
    }
    return Nt(pe.afterSanitizeElements, a, null), !1;
  }, fo = function(a, g, w) {
    if (M[g] || oo(g, a) || p && (g === "id" || g === "name") && (w in n || w in Ol))
      return !1;
    const B = T[g] || S.attributeCheck instanceof Function && S.attributeCheck(g, a);
    return H && Ke(vt, g) || K && Ke(Et, g) ? !0 : B ? Ot[g] || Ke(m, Vn(w, Tt, "")) || (g === "src" || g === "xlink:href" || g === "href") && a !== "script" && Xo(w, "data:") === 0 && _n[a] || W && !Ke(We, Vn(w, Tt, "")) ? !0 : !w : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      po(a) && hr(P.tagNameCheck, a) && hr(P.attributeNameCheck, g, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && P.allowCustomizedBuiltInElements && hr(P.tagNameCheck, w)
    );
  }, Fl = me({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), po = function(a) {
    return !Fl[Kn(a)] && Ke(f, a);
  }, Hl = function(a, g, w, B) {
    if (ve && typeof E == "object" && typeof E.getAttributeType == "function" && !w)
      switch (E.getAttributeType(a, g)) {
        case "TrustedHTML":
          return De(B);
        case "TrustedScriptURL":
          return we(B);
      }
    return B;
  }, $l = function(a, g, w, B) {
    try {
      w ? a.setAttributeNS(w, g, B) : a.setAttribute(g, B), pr(a) ? Jt(a) : Go(t.removed);
    } catch {
      rn(g, a);
    }
  }, ho = function(a) {
    Nt(pe.beforeSanitizeAttributes, a, null);
    const g = a.attributes;
    if (!g || pr(a))
      return;
    T = ao(pe.uponSanitizeAttribute, T, x, re);
    const w = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let B = g.length;
    const Y = ke(a.nodeName);
    for (; B--; ) {
      const ee = g[B], Se = ee.name, Re = ee.namespaceURI, st = ee.value, lt = ke(Se), ti = st;
      let Ze = Se === "value" ? ti : Su(ti);
      if (w.attrName = lt, w.attrValue = Ze, w.keepAttr = !0, w.forceKeepAttr = void 0, Nt(pe.uponSanitizeAttribute, a, w), Ze = w.attrValue, fe && (lt === "id" || lt === "name") && Xo(Ze, qe) !== 0 && (rn(Se, a, ee), Ze = qe + Ze), R && Ke(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ze)) {
        rn(Se, a, ee);
        continue;
      }
      if (lt === "attributename" && Yo(Ze, "href")) {
        rn(Se, a, ee);
        continue;
      }
      if (!w.forceKeepAttr) {
        if (!w.keepAttr) {
          rn(Se, a, ee);
          continue;
        }
        if (!X && Ke(Vu, Ze)) {
          rn(Se, a, ee);
          continue;
        }
        if (Q && (Ze = dr(Ze)), !fo(Y, lt, Ze)) {
          rn(Se, a, ee);
          continue;
        }
        Ze = Hl(Y, lt, Re, Ze), Ze !== ti && $l(a, Se, Re, Ze);
      }
    }
    Nt(pe.afterSanitizeAttributes, a, null);
  }, mr = function(a) {
    let g = null;
    const w = lo(a);
    for (Nt(pe.beforeSanitizeShadowDOM, a, null); g = w.nextNode(); )
      if (Nt(pe.uponSanitizeShadowNode, g, null), uo(g, a), ho(g), Sn(g.content) && mr(g.content), Ae(g) === ft.element) {
        const B = z(g);
        Sn(B) && (ei(B), mr(B));
      }
    Nt(pe.afterSanitizeShadowDOM, a, null);
  }, ei = function(a) {
    const g = [{
      node: a,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const w = g.pop();
      if (w.shadow) {
        mr(w.shadow);
        continue;
      }
      const B = w.node, ee = Ae(B) === ft.element, Se = ie(B);
      if (Se)
        for (let Re = Se.length - 1; Re >= 0; --Re)
          g.push({
            node: Se[Re],
            shadow: null
          });
      if (ee) {
        const Re = ae ? ae(B) : null;
        if (typeof Re == "string" && ke(Re) === "template") {
          const st = B.content;
          Sn(st) && g.push({
            node: st,
            shadow: null
          });
        }
      }
      if (ee) {
        const Re = z(B);
        Sn(Re) && g.push({
          node: null,
          shadow: Re
        }, {
          node: Re,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, w = null, B = null, Y = null;
    if (Gr = !F, Gr && (F = "<!-->"), typeof F != "string" && !Fn(F) && (F = Ru(F), typeof F != "string"))
      throw ln("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    $ ? (_ = J, T = re) : Zr(a), (pe.uponSanitizeElement.length > 0 || pe.uponSanitizeAttribute.length > 0) && (_ = dt(_)), pe.uponSanitizeAttribute.length > 0 && (T = dt(T)), t.removed = [];
    const ee = Dn && typeof F != "string" && Fn(F);
    if (ee) {
      Ml(F);
      const st = He(F);
      if (typeof st == "string") {
        const lt = ke(st);
        if (!_[lt] || D[lt])
          throw ur(F), ln("root node is forbidden and cannot be sanitized in-place");
      }
      if (pr(F))
        throw ur(F), ln("root node is clobbered and cannot be sanitized in-place");
      try {
        ei(F);
      } catch (lt) {
        throw ur(F), lt;
      }
    } else if (Fn(F))
      g = so("<!---->"), w = g.ownerDocument.importNode(F, !0), w.nodeType === ft.element && w.nodeName === "BODY" || w.nodeName === "HTML" ? g = w : g.appendChild(w), ei(w);
    else {
      if (!ce && !Q && !O && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return ve && C ? De(F) : F;
      if (g = so(F), !g)
        return ce ? null : C ? Le : "";
    }
    g && he && Jt(g.firstChild);
    const Se = ee ? F : g;
    try {
      const st = lo(Se);
      for (; B = st.nextNode(); )
        uo(B, Se), ho(B), Sn(B.content) && mr(B.content);
    } catch (st) {
      throw ee && (ur(F), cn(t.removed, (lt) => {
        lt.element && fr(lt.element);
      })), st;
    }
    if (ee)
      return cn(t.removed, (st) => {
        st.element && fr(st.element);
      }), Q && Qr(F), F;
    if (ce) {
      if (Q && Qr(g), k)
        for (Y = Ue.call(g.ownerDocument); g.firstChild; )
          Y.appendChild(g.firstChild);
      else
        Y = g;
      return (T.shadowroot || T.shadowrootmode) && (Y = mt.call(r, Y, !0)), Y;
    }
    let Re = O ? g.outerHTML : g.innerHTML;
    return O && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Ke(Hu, g.ownerDocument.doctype.name) && (Re = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Re), Q && (Re = dr(Re)), ve && C ? De(Re) : Re;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zr(F), $ = !0, J = _, re = T;
  }, t.clearConfig = function() {
    Tn = null, $ = !1, J = null, re = null, ve = Je, Le = "";
  }, t.isValidAttribute = function(F, a, g) {
    Tn || Zr({});
    const w = ke(F), B = ke(a);
    return fo(w, B, g);
  }, t.addHook = function(F, a) {
    typeof a == "function" && ct(pe, F) && jn(pe[F], a);
  }, t.removeHook = function(F, a) {
    if (ct(pe, F)) {
      if (a !== void 0) {
        const g = Eu(pe[F], a);
        return g === -1 ? void 0 : Tu(pe[F], g, 1)[0];
      }
      return Go(pe[F]);
    }
  }, t.removeHooks = function(F) {
    ct(pe, F) && (pe[F] = []);
  }, t.removeAllHooks = function() {
    pe = ss();
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
  function t(n) {
    var r = "" + n, i = e.exec(r);
    if (!i)
      return r;
    var o, s = "", l = 0, u = 0;
    for (l = i.index; l < r.length; l++) {
      switch (r.charCodeAt(l)) {
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
      u !== l && (s += r.substring(u, l)), u = l + 1, s += o;
    }
    return u !== l ? s + r.substring(u, l) : s;
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
function c(e, t, n, r, i) {
  const o = typeof n == "object" ? n : void 0, s = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof r == "object" ? r : {}
  }, u = (q) => q, v = (l.sanitize ? Ku.sanitize : u) || u, b = l.escape ? as : u, E = (q) => typeof q == "string" || typeof q == "number", N = (q, ie, ne) => q.replace(/%n/g, "" + ne).replace(/{([^{}]*)}/g, (z, U) => {
    if (ie === void 0 || !(U in ie))
      return b(z);
    const V = ie[U];
    return E(V) ? b(`${V}`) : typeof V == "object" && E(V.value) ? (V.escape !== !1 ? as : u)(`${V.value}`) : b(z);
  });
  let te = (i?.bundle ?? Ju(e)).translations[t] || t;
  return te = Array.isArray(te) ? te[0] : te, v(typeof o == "object" || s !== void 0 ? N(
    te,
    o,
    s
  ) : te);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ef = { class: "library-catalogue-header" }, tf = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, nf = { id: "library-catalogue-heading" }, rf = { class: "library-muted" }, of = ["aria-label"], sf = { class: "library-catalogue-actions-menu" }, lf = { class: "library-catalogue-actions-list" }, af = ["href"], cf = ["href"], uf = ["href"], ff = ["href"], df = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, pf = ["aria-label"], hf = ["name", "value"], mf = { class: "library-quick-search-row" }, bf = { class: "library-quick-filter-search" }, yf = ["aria-label"], gf = { class: "library-quick-filter-options" }, _f = { class: "library-quick-filter-option-grid" }, vf = { value: "title" }, Ef = { value: "recent" }, Tf = { value: "publicationDate" }, Sf = { value: "publication" }, Cf = { value: "lastOpened" }, xf = { value: "format" }, Af = { value: "" }, wf = { value: "1" }, Rf = ["value"], Of = ["value"], Nf = ["aria-label"], Pf = ["aria-label"], kf = { class: "library-filter-panel" }, Lf = { class: "library-filter-panel-summary" }, If = ["aria-label"], Mf = { value: "" }, Df = ["value"], Uf = { value: "" }, Ff = ["value"], Hf = { value: "" }, $f = ["value"], jf = { value: "" }, Vf = ["value"], Bf = { value: "" }, zf = ["value"], Wf = { value: "" }, qf = ["value"], Kf = { value: "" }, Gf = ["value"], Yf = { value: "" }, Xf = ["value"], Jf = { value: "" }, Zf = ["value"], Qf = { value: "" }, ed = ["value"], td = { value: "" }, nd = { value: "1" }, rd = { value: "" }, id = { value: "1" }, od = { value: "title" }, sd = { value: "recent" }, ld = { value: "publicationDate" }, ad = { value: "publication" }, cd = { value: "lastOpened" }, ud = { value: "format" }, fd = ["value"], dd = ["value"], pd = ["aria-label"], hd = ["aria-label"], md = ["href"], bd = {
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
}, Rd = { class: "library-catalogue-status-row" }, Od = { class: "library-muted library-filter-result-summary" }, Nd = { key: 0 }, Pd = { href: "?" }, kd = ["aria-label"], Ld = { class: "library-pagination-range" }, Id = { key: 0 }, Md = ["href"], Dd = {
  key: 1,
  class: "library-muted"
}, Ud = ["href"], Fd = {
  key: 3,
  class: "library-muted"
}, Hd = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, $d = ["aria-label"], jd = { class: "library-settings-count-badge" }, Vd = ["action"], Bd = ["value"], zd = ["name", "value"], Wd = ["placeholder"], qd = {
  type: "submit",
  class: "button primary"
}, Kd = { class: "library-muted" }, Gd = ["action"], Yd = ["value"], Xd = ["name", "value"], Jd = ["placeholder"], Zd = {
  type: "submit",
  class: "button secondary"
}, Qd = { class: "library-muted" }, ep = ["action"], tp = ["value"], np = ["name", "value"], rp = {
  type: "submit",
  class: "button secondary"
}, ip = { class: "library-muted" }, op = ["action"], sp = ["value"], lp = ["name", "value"], ap = { name: "bulkEditField" }, cp = { value: "publicationType" }, up = { value: "subtitle" }, fp = { value: "creators" }, dp = { value: "publication" }, pp = { value: "publicationDate" }, hp = { value: "language" }, mp = { value: "publisher" }, bp = { value: "genres" }, yp = { value: "classifications" }, gp = {
  type: "submit",
  class: "button secondary"
}, _p = { class: "library-muted" }, vp = ["action"], Ep = ["value"], Tp = ["name", "value"], Sp = {
  type: "submit",
  class: "button secondary"
}, Cp = { class: "library-muted" }, xp = { class: "library-discovery-shortcuts" }, Ap = { class: "library-discovery-shortcut-grid" }, wp = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, Rp = { id: "library-periodical-groups-heading" }, Op = { class: "library-muted" }, Np = ["href"], Pp = { class: "library-muted" }, kp = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, Lp = { id: "library-periodical-groups-empty-heading" }, Ip = { class: "library-muted" }, Mp = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, Dp = { id: "library-year-groups-heading" }, Up = ["href"], Fp = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, Hp = { id: "library-creator-groups-heading" }, $p = ["href"], jp = ["aria-label"], Vp = ["href", "aria-label"], Bp = { class: "library-muted" }, zp = { class: "library-empty-actions" }, Wp = ["href"], qp = { class: "library-muted" }, Kp = { class: "library-muted" }, Gp = { class: "library-empty-actions" }, Yp = ["href"], Xp = { class: "library-muted" }, Jp = { class: "library-empty-actions" }, Zp = ["href"], Qp = {
  href: "?",
  class: "button primary"
}, eh = { class: "library-muted" }, th = { class: "library-empty-actions" }, nh = ["href"], rh = {
  key: 4,
  class: "library-cover-gallery"
}, ih = ["href", "aria-label"], oh = ["src", "alt"], sh = ["action", "onSubmit"], lh = ["value"], ah = ["value"], ch = ["aria-pressed", "title", "aria-label", "onClick"], uh = { class: "library-cover-summary" }, fh = { class: "library-cover-primary" }, dh = ["aria-label"], ph = ["href"], hh = ["onToggle"], mh = ["aria-label"], bh = { class: "library-cover-meta" }, yh = {
  key: 0,
  class: "library-creator"
}, gh = { class: "library-cover-detail-list" }, _h = { class: "library-cover-detail-chip" }, vh = {
  key: 0,
  class: "library-cover-detail-chip"
}, Eh = {
  key: 1,
  class: "library-cover-detail-chip"
}, Th = {
  key: 2,
  class: "library-cover-detail-chip"
}, Sh = {
  key: 3,
  class: "library-cover-detail-chip"
}, Ch = {
  key: 4,
  class: "library-cover-detail-chip"
}, xh = {
  key: 5,
  class: "library-cover-detail-chip"
}, Ah = {
  key: 6,
  class: "library-cover-detail-chip"
}, wh = {
  key: 1,
  class: "library-muted library-cover-description"
}, Rh = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Oh = { key: 0 }, Nh = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Ph = {
  key: 0,
  class: "library-muted"
}, kh = { class: "library-cover-actions" }, Lh = ["href"], Ih = ["href"], Mh = ["href"], Dh = ["aria-label"], Uh = { class: "library-pagination-range" }, Fh = { key: 0 }, Hh = ["href"], $h = {
  key: 1,
  class: "library-muted"
}, jh = ["href"], Vh = {
  key: 3,
  class: "library-muted"
}, Bh = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], i = /* @__PURE__ */ fn({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), o = /* @__PURE__ */ fn((i.items || []).map((k) => ({ ...k }))), s = se(() => o), l = se(() => i.shelves || []), u = se(() => i.formats || []), v = se(() => i.publications || []), b = se(() => i.publicationSummaries || []), E = se(() => i.publicationIssueContext || null), N = se(() => i.publicationYears || []), j = se(() => i.creators || []), te = se(() => i.scanStatuses || []), q = se(() => i.workflowStatuses || []), ie = se(() => i.genres || []), ne = se(() => i.classifications || []), z = se(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), U = /* @__PURE__ */ fn({
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
    }), V = se(() => i.settingsUrl || ""), ae = se(() => i.requestToken || ""), Oe = se(() => i.metadataExportUrl || ""), Ae = se(() => i.metadataSidecarManifestUrl || ""), He = se(() => i.metadataSidecarBundleUrl || ""), ve = se(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), Le = se(() => i.batchTagUrl || "/apps/library/bulk/tags"), Je = se(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), rt = se(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Be = se(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), ht = se(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), De = se(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), we = se(() => i.discoveryPage === "publication"), de = se(() => i.discoveryPage === "year"), oe = se(() => i.discoveryPage === "creator"), Pe = se(() => we.value || de.value || oe.value), it = se(() => i.discoveryTitle || U.publication || U.year || U.creator || ""), Ue = se(() => Pe.value ? it.value : c("library", "Publication catalogue")), $e = se(() => oe.value ? c("library", "Creator") : de.value ? c("library", "Publication year") : c("library", "Publication / series")), mt = se(() => Number(i.rootCount || 0)), pe = se(() => Number(i.enabledRootCount || 0)), _t = se(() => mt.value === 0), Ie = se(() => mt.value > 0 && pe.value === 0), bt = se(() => We.value.length > 0), vt = {
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
    }, Et = se(() => {
      if (typeof window > "u") return "";
      const k = new URLSearchParams(window.location.search);
      if (k.get("batchMetadataApplyResult") !== "1") return "";
      const C = k.get("batchMetadataField") || "field", p = k.get("batchMetadataApplied") || "0", fe = k.get("batchMetadataUnchanged") || "0", qe = k.get("batchMetadataSkipped") || "0";
      return c("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: p, field: C, unchanged: fe, skipped: qe });
    }), We = se(() => Object.entries(vt).map(([k, C]) => ({ key: k, label: C, value: U[k] || "" })).filter((k) => String(k.value).trim() !== "")), Tt = se(() => Object.entries(U).filter(([k, C]) => !["q", "sort", "starred"].includes(k) && String(C || "").trim() !== "").map(([k, C]) => ({ key: k, value: C }))), f = se(() => Object.entries(U).filter(([k, C]) => String(C || "").trim() !== "").map(([k, C]) => ({ key: k, value: C }))), m = /* @__PURE__ */ fn({}), _ = /* @__PURE__ */ va(null);
    let A = null;
    function T(k) {
      const C = new URLSearchParams(new FormData(k));
      for (const p of Array.from(C.keys()))
        String(C.get(p) || "").trim() === "" && C.delete(p);
      return C.delete("page"), C;
    }
    function x(k) {
      o.splice(0, o.length, ...(k.items || []).map((C) => ({ ...C })));
      for (const C of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl"])
        Object.prototype.hasOwnProperty.call(k, C) && (i[C] = k[C]);
      Object.assign(U, k.activeFilters || {});
    }
    async function P(k) {
      const C = k?.currentTarget?.tagName === "FORM" ? k.currentTarget : k?.currentTarget?.form;
      if (!C) return;
      const fe = T(C).toString(), qe = fe ? `?${fe}` : "", ot = await fetch(ve.value + qe, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!ot.ok) {
        C.submit();
        return;
      }
      x(await ot.json()), history.replaceState({}, "", fe ? `?${fe}` : window.location.pathname);
    }
    function D(k) {
      P(k);
    }
    function M(k) {
      window.clearTimeout(A), A = window.setTimeout(() => D(k), 350);
    }
    function S(k) {
      const C = new URLSearchParams();
      for (const [fe, qe] of Object.entries(U)) {
        const ot = String(qe || "").trim();
        ot !== "" && fe !== k && !(fe === "sort" && ot === "title") && C.set(fe, ot);
      }
      const p = C.toString();
      return p ? `?${p}` : "?";
    }
    function K() {
      return S("q");
    }
    function H(k) {
      return String(k || "").toUpperCase();
    }
    function W(k) {
      return k.nextcloudTags || [];
    }
    function X(k) {
      return b.value.find((p) => p.publication === k)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(k)}`;
    }
    function Q(k) {
      return i.publicationYearLandingUrls?.[k] || `/apps/library/years/${encodeURIComponent(k)}`;
    }
    function R(k) {
      return i.creatorLandingUrls?.[k] || `/apps/library/creators/${encodeURIComponent(k)}`;
    }
    function O(k, C) {
      m[k] = !!C?.currentTarget?.open;
    }
    function $(k) {
      const C = String(k?.tagName || "").toLowerCase();
      return k?.isContentEditable || ["input", "select", "textarea", "button"].includes(C);
    }
    function J(k) {
      k.key !== "/" || k.metaKey || k.ctrlKey || k.altKey || k.shiftKey || $(k.target) || (k.preventDefault(), _.value?.focus(), _.value?.select?.());
    }
    function re(k) {
      k.key !== "Escape" || document.activeElement !== _.value || U.q === "" || (k.preventDefault(), U.q = "", _.value.value = "", window.clearTimeout(A), D({ currentTarget: _.value }));
    }
    function he(k) {
      J(k), re(k);
    }
    Ks(() => {
      window.addEventListener("keydown", he);
    }), Gs(() => {
      window.removeEventListener("keydown", he);
    });
    async function ce(k, C) {
      const p = C?.currentTarget?.closest?.("form") || C?.currentTarget;
      if (!p || !k?.starUrl) return;
      const fe = !!k.starred;
      k.starred = !fe;
      try {
        (await fetch(k.starUrl, {
          method: "POST",
          body: new FormData(p),
          credentials: "same-origin"
        })).ok || (k.starred = fe);
      } catch {
        k.starred = fe;
      }
    }
    return (k, C) => (L(), I("div", Zu, [
      d("section", Qu, [
        d("div", ef, [
          d("div", null, [
            Pe.value ? (L(), I("p", tf, h($e.value), 1)) : be("", !0),
            d("h2", nf, h(Ue.value), 1),
            d("p", rf, h(Pe.value ? y(c)("library", "Browse this focused view; use filters only when you need to narrow it further.") : y(c)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          d("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": y(c)("library", "Library actions")
          }, [
            d("details", sf, [
              d("summary", null, h(y(c)("library", "Actions")), 1),
              d("div", lf, [
                d("a", {
                  href: V.value,
                  class: "button secondary",
                  "aria-label": "Open Library settings"
                }, h(y(c)("library", "Settings")), 9, af),
                Oe.value ? (L(), I("a", {
                  key: 0,
                  href: Oe.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, h(y(c)("library", "Export corrected metadata")), 9, cf)) : be("", !0),
                Ae.value ? (L(), I("a", {
                  key: 1,
                  href: Ae.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar manifest"
                }, h(y(c)("library", "Sidecar manifest")), 9, uf)) : be("", !0),
                He.value ? (L(), I("a", {
                  key: 2,
                  href: He.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar ZIP"
                }, h(y(c)("library", "Sidecar ZIP")), 9, ff)) : be("", !0)
              ])
            ])
          ], 8, of)
        ]),
        Et.value ? (L(), I("p", df, h(Et.value), 1)) : be("", !0),
        d("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": y(c)("library", "Quick catalogue filters"),
          onSubmit: Er(P, ["prevent"])
        }, [
          (L(!0), I(ue, null, xe(Tt.value, (p) => (L(), I("input", {
            key: p.key,
            type: "hidden",
            name: p.key,
            value: p.value
          }, null, 8, hf))), 128)),
          d("div", mf, [
            d("label", bf, [
              d("span", null, [
                ye(h(y(c)("library", "Search")) + " ", 1),
                C[18] || (C[18] = d("kbd", { class: "library-keyboard-hint" }, "/", -1))
              ]),
              je(d("input", {
                ref_key: "quickSearchInput",
                ref: _,
                "onUpdate:modelValue": C[0] || (C[0] = (p) => U.q = p),
                "data-library-quick-search": "",
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex...",
                onInput: M
              }, null, 544), [
                [mi, U.q]
              ])
            ]),
            d("button", {
              type: "submit",
              class: "button primary",
              "aria-label": y(c)("library", "Search catalogue")
            }, h(y(c)("library", "Search")), 9, yf)
          ]),
          d("details", gf, [
            d("summary", null, h(y(c)("library", "Filter & sort")), 1),
            d("div", _f, [
              d("label", null, [
                ye(h(y(c)("library", "Sort")) + " ", 1),
                je(d("select", {
                  "onUpdate:modelValue": C[1] || (C[1] = (p) => U.sort = p),
                  name: "sort",
                  onChange: P
                }, [
                  d("option", vf, h(y(c)("library", "Title")), 1),
                  d("option", Ef, h(y(c)("library", "Recently added")), 1),
                  d("option", Tf, h(y(c)("library", "Publication date")), 1),
                  d("option", Sf, h(y(c)("library", "Series")), 1),
                  d("option", Cf, h(y(c)("library", "Recently opened")), 1),
                  d("option", xf, h(y(c)("library", "Format")), 1)
                ], 544), [
                  [Qe, U.sort]
                ])
              ]),
              d("label", null, [
                ye(h(y(c)("library", "Starred")) + " ", 1),
                je(d("select", {
                  "onUpdate:modelValue": C[2] || (C[2] = (p) => U.starred = p),
                  name: "starred",
                  onChange: P
                }, [
                  d("option", Af, h(y(c)("library", "All")), 1),
                  d("option", wf, h(y(c)("library", "Starred")), 1)
                ], 544), [
                  [Qe, U.starred]
                ])
              ]),
              d("label", null, [
                ye(h(y(c)("library", "Size")) + " ", 1),
                d("select", {
                  value: z.value.limit,
                  name: "limit",
                  onChange: P
                }, [
                  (L(), I(ue, null, xe(r, (p) => d("option", {
                    key: p,
                    value: p
                  }, h(p), 9, Of)), 64))
                ], 40, Rf)
              ]),
              d("button", {
                type: "submit",
                class: "button secondary",
                "aria-label": y(c)("library", "Apply catalogue filters")
              }, h(y(c)("library", "Apply filters")), 9, Nf),
              d("a", {
                href: "?",
                class: "button secondary",
                "aria-label": y(c)("library", "Clear catalogue filters")
              }, h(y(c)("library", "Clear all")), 9, Pf)
            ])
          ])
        ], 40, pf),
        d("details", kf, [
          d("summary", Lf, h(y(c)("library", "Show catalogue filters")), 1),
          d("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": y(c)("library", "Catalogue search and filters"),
            onSubmit: Er(P, ["prevent"])
          }, [
            d("label", null, [
              ye(h(y(c)("library", "Search title / author")) + " ", 1),
              je(d("input", {
                "onUpdate:modelValue": C[3] || (C[3] = (p) => U.q = p),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [mi, U.q]
              ])
            ]),
            d("label", null, [
              ye(h(y(c)("library", "Type")) + " ", 1),
              je(d("select", {
                "onUpdate:modelValue": C[4] || (C[4] = (p) => U.type = p),
                name: "type"
              }, [
                d("option", Mf, h(y(c)("library", "All types")), 1),
                (L(), I(ue, null, xe(n, (p) => d("option", {
                  key: p,
                  value: p
                }, h(p), 9, Df)), 64))
              ], 512), [
                [Qe, U.type]
              ])
            ]),
            d("label", null, [
              ye(h(y(c)("library", "Series / periodical")) + " ", 1),
              je(d("select", {
                "onUpdate:modelValue": C[5] || (C[5] = (p) => U.publication = p),
                name: "publication"
              }, [
                d("option", Uf, h(y(c)("library", "All series and periodicals")), 1),
                (L(!0), I(ue, null, xe(v.value, (p) => (L(), I("option", {
                  key: p,
                  value: p
                }, h(p), 9, Ff))), 128))
              ], 512), [
                [Qe, U.publication]
              ])
            ]),
            d("label", null, [
              ye(h(y(c)("library", "Publication year")) + " ", 1),
              je(d("select", {
                "onUpdate:modelValue": C[6] || (C[6] = (p) => U.year = p),
                name: "year"
              }, [
                d("option", Hf, h(y(c)("library", "All years")), 1),
                (L(!0), I(ue, null, xe(N.value, (p) => (L(), I("option", {
                  key: p,
                  value: p
                }, h(p), 9, $f))), 128))
              ], 512), [
                [Qe, U.year]
              ])
            ]),
            d("label", null, [
              ye(h(y(c)("library", "Creator")) + " ", 1),
              je(d("select", {
                "onUpdate:modelValue": C[7] || (C[7] = (p) => U.creator = p),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                d("option", jf, h(y(c)("library", "All creators")), 1),
                (L(!0), I(ue, null, xe(j.value, (p) => (L(), I("option", {
                  key: p,
                  value: p
                }, h(p), 9, Vf))), 128))
              ], 512), [
                [Qe, U.creator]
              ])
            ]),
            d("label", null, [
              ye(h(y(c)("library", "Nextcloud tag")) + " ", 1),
              je(d("input", {
                "onUpdate:modelValue": C[8] || (C[8] = (p) => U.tag = p),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [mi, U.tag]
              ])
            ]),
            d("label", null, [
              ye(h(y(c)("library", "Format")) + " ", 1),
              je(d("select", {
                "onUpdate:modelValue": C[9] || (C[9] = (p) => U.format = p),
                name: "format"
              }, [
                d("option", Bf, h(y(c)("library", "All formats")), 1),
                (L(!0), I(ue, null, xe(u.value, (p) => (L(), I("option", {
                  key: p,
                  value: p
                }, h(H(p)), 9, zf))), 128))
              ], 512), [
                [Qe, U.format]
              ])
            ]),
            d("label", null, [
              ye(h(y(c)("library", "Shelf")) + " ", 1),
              je(d("select", {
                "onUpdate:modelValue": C[10] || (C[10] = (p) => U.shelf = p),
                name: "shelf"
              }, [
                d("option", Wf, h(y(c)("library", "All shelves")), 1),
                (L(!0), I(ue, null, xe(l.value, (p) => (L(), I("option", {
                  key: p,
                  value: p
                }, h(p), 9, qf))), 128))
              ], 512), [
                [Qe, U.shelf]
              ])
            ]),
            d("label", null, [
              ye(h(y(c)("library", "Scan status")) + " ", 1),
              je(d("select", {
                "onUpdate:modelValue": C[11] || (C[11] = (p) => U.status = p),
                name: "status"
              }, [
                d("option", Kf, h(y(c)("library", "All scan statuses")), 1),
                (L(!0), I(ue, null, xe(te.value, (p) => (L(), I("option", {
                  key: p,
                  value: p
                }, h(p), 9, Gf))), 128))
              ], 512), [
                [Qe, U.status]
              ])
            ]),
            d("label", null, [
              ye(h(y(c)("library", "Workflow status")) + " ", 1),
              je(d("select", {
                "onUpdate:modelValue": C[12] || (C[12] = (p) => U.workflowStatus = p),
                name: "workflowStatus"
              }, [
                d("option", Yf, h(y(c)("library", "All workflow statuses")), 1),
                (L(!0), I(ue, null, xe(q.value, (p) => (L(), I("option", {
                  key: p,
                  value: p
                }, h(p), 9, Xf))), 128))
              ], 512), [
                [Qe, U.workflowStatus]
              ])
            ]),
            d("label", null, [
              ye(h(y(c)("library", "Genre")) + " ", 1),
              je(d("select", {
                "onUpdate:modelValue": C[13] || (C[13] = (p) => U.genre = p),
                name: "genre"
              }, [
                d("option", Jf, h(y(c)("library", "All genres")), 1),
                (L(!0), I(ue, null, xe(ie.value, (p) => (L(), I("option", {
                  key: p,
                  value: p
                }, h(p), 9, Zf))), 128))
              ], 512), [
                [Qe, U.genre]
              ])
            ]),
            d("label", null, [
              ye(h(y(c)("library", "Classification")) + " ", 1),
              je(d("select", {
                "onUpdate:modelValue": C[14] || (C[14] = (p) => U.classification = p),
                name: "classification"
              }, [
                d("option", Qf, h(y(c)("library", "All classifications")), 1),
                (L(!0), I(ue, null, xe(ne.value, (p) => (L(), I("option", {
                  key: p,
                  value: p
                }, h(p), 9, ed))), 128))
              ], 512), [
                [Qe, U.classification]
              ])
            ]),
            d("label", null, [
              ye(h(y(c)("library", "Scanner conflicts")) + " ", 1),
              je(d("select", {
                "onUpdate:modelValue": C[15] || (C[15] = (p) => U.scannerConflicts = p),
                name: "scannerConflicts"
              }, [
                d("option", td, h(y(c)("library", "All metadata")), 1),
                d("option", nd, h(y(c)("library", "Needs review")), 1)
              ], 512), [
                [Qe, U.scannerConflicts]
              ])
            ]),
            d("label", null, [
              ye(h(y(c)("library", "Starred")) + " ", 1),
              je(d("select", {
                "onUpdate:modelValue": C[16] || (C[16] = (p) => U.starred = p),
                name: "starred"
              }, [
                d("option", rd, h(y(c)("library", "All publications")), 1),
                d("option", id, h(y(c)("library", "Starred only")), 1)
              ], 512), [
                [Qe, U.starred]
              ])
            ]),
            d("label", null, [
              ye(h(y(c)("library", "Sort")) + " ", 1),
              je(d("select", {
                "onUpdate:modelValue": C[17] || (C[17] = (p) => U.sort = p),
                name: "sort"
              }, [
                d("option", od, h(y(c)("library", "Title")), 1),
                d("option", sd, h(y(c)("library", "Recently added")), 1),
                d("option", ld, h(y(c)("library", "Publication date")), 1),
                d("option", ad, h(y(c)("library", "Series / periodical")), 1),
                d("option", cd, h(y(c)("library", "Recently opened")), 1),
                d("option", ud, h(y(c)("library", "Format")), 1)
              ], 512), [
                [Qe, U.sort]
              ])
            ]),
            d("label", null, [
              ye(h(y(c)("library", "Page size")) + " ", 1),
              d("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (L(), I(ue, null, xe(r, (p) => d("option", {
                  key: p,
                  value: p
                }, h(p), 9, dd)), 64))
              ], 8, fd)
            ]),
            d("button", {
              type: "submit",
              class: "button primary",
              "aria-label": y(c)("library", "Apply catalogue filters")
            }, h(y(c)("library", "Apply filters")), 9, pd),
            d("a", {
              href: "?",
              class: "button secondary",
              "aria-label": y(c)("library", "Clear catalogue filters")
            }, h(y(c)("library", "Clear")), 9, hd),
            d("a", {
              href: De.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, h(y(c)("library", "Review scanner conflicts")), 9, md)
          ], 40, If)
        ]),
        Pe.value ? (L(), I("section", bd, [
          d("p", yd, h($e.value), 1),
          d("h3", gd, h(it.value), 1),
          d("p", _d, h(oe.value ? y(c)("library", "Items by this creator, sorted by publication context when available.") : de.value ? y(c)("library", "Items from this publication year, sorted by publication date when available.") : y(c)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          d("div", vd, [
            d("span", null, h(z.value.total) + " " + h(y(c)("library", "items")), 1),
            E.value?.earliestYear && E.value?.latestYear ? (L(), I("span", Ed, h(E.value.earliestYear) + "–" + h(E.value.latestYear), 1)) : be("", !0),
            E.value?.datedCount ? (L(), I("span", Td, h(E.value.datedCount) + " " + h(y(c)("library", "dated")), 1)) : be("", !0),
            E.value?.undatedCount > 0 ? (L(), I("span", Sd, h(E.value.undatedCount) + " " + h(y(c)("library", "undated")), 1)) : be("", !0)
          ]),
          we.value && E.value ? (L(), I("aside", Cd, [
            d("strong", null, h(y(c)("library", "Publication contents")), 1),
            d("span", null, h(E.value.itemCount) + " " + h(y(c)("library", "items")), 1),
            E.value.earliestYear && E.value.latestYear ? (L(), I("span", xd, h(E.value.earliestYear) + "–" + h(E.value.latestYear), 1)) : be("", !0),
            d("span", null, h(E.value.datedCount) + " " + h(y(c)("library", "with issue/date coverage")), 1),
            E.value.undatedCount > 0 ? (L(), I("span", Ad, h(E.value.undatedCount) + " " + h(y(c)("library", "without dates yet")), 1)) : be("", !0)
          ])) : be("", !0),
          d("p", null, [
            d("a", wd, h(y(c)("library", "Back to full catalogue")), 1)
          ])
        ])) : be("", !0),
        d("div", Rd, [
          d("p", Od, [
            ye(h(y(c)("library", "Showing")) + " " + h(z.value.from) + "–" + h(z.value.to) + " " + h(y(c)("library", "of")) + " " + h(z.value.total) + " " + h(y(c)("library", "catalogue items")), 1),
            We.value.length > 0 ? (L(), I("span", Nd, [
              C[19] || (C[19] = ye(" · ", -1)),
              d("a", Pd, h(y(c)("library", "Clear all filters")), 1)
            ])) : be("", !0)
          ]),
          d("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": y(c)("library", "Catalogue pagination")
          }, [
            d("span", Ld, [
              ye(h(y(c)("library", "Page")) + " " + h(z.value.page), 1),
              z.value.total > 0 ? (L(), I("span", Id, " · " + h(z.value.from) + "–" + h(z.value.to), 1)) : be("", !0)
            ]),
            z.value.previousUrl ? (L(), I("a", {
              key: 0,
              href: z.value.previousUrl
            }, h(y(c)("library", "Previous")), 9, Md)) : (L(), I("span", Dd, h(y(c)("library", "Previous")), 1)),
            z.value.nextUrl ? (L(), I("a", {
              key: 2,
              href: z.value.nextUrl
            }, h(y(c)("library", "Next")), 9, Ud)) : (L(), I("span", Fd, h(y(c)("library", "Next")), 1))
          ], 8, kd)
        ]),
        d("div", Hd, [
          d("details", {
            class: "library-batch-actions",
            "aria-label": y(c)("library", "Batch actions for current results")
          }, [
            d("summary", null, [
              ye(h(y(c)("library", "Batch")) + " ", 1),
              d("span", jd, h(z.value.total) + " " + h(y(c)("library", "Current filter result")), 1)
            ]),
            d("form", {
              method: "post",
              action: Le.value,
              class: "library-batch-tag-form"
            }, [
              d("input", {
                type: "hidden",
                name: "requesttoken",
                value: ae.value
              }, null, 8, Bd),
              (L(!0), I(ue, null, xe(f.value, (p) => (L(), I("input", {
                key: p.key,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, zd))), 128)),
              d("label", null, [
                d("span", null, h(y(c)("library", "Nextcloud tag")), 1),
                d("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: y(c)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, Wd)
              ]),
              d("button", qd, h(y(c)("library", "Apply Nextcloud tag to current results")), 1),
              d("p", Kd, h(y(c)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, Vd),
            d("form", {
              method: "post",
              action: Je.value,
              class: "library-batch-tag-remove-form"
            }, [
              d("input", {
                type: "hidden",
                name: "requesttoken",
                value: ae.value
              }, null, 8, Yd),
              (L(!0), I(ue, null, xe(f.value, (p) => (L(), I("input", {
                key: `remove-tag-${p.key}`,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, Xd))), 128)),
              d("label", null, [
                d("span", null, h(y(c)("library", "Nextcloud tag")), 1),
                d("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: y(c)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, Jd)
              ]),
              d("button", Zd, h(y(c)("library", "Remove tag from current results")), 1),
              d("p", Qd, h(y(c)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, Gd),
            d("form", {
              method: "post",
              action: rt.value,
              class: "library-batch-metadata-reset-form"
            }, [
              d("input", {
                type: "hidden",
                name: "requesttoken",
                value: ae.value
              }, null, 8, tp),
              (L(!0), I(ue, null, xe(f.value, (p) => (L(), I("input", {
                key: `reset-${p.key}`,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, np))), 128)),
              C[20] || (C[20] = d("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              d("button", rp, h(y(c)("library", "Reset filtered metadata")), 1),
              d("p", ip, h(y(c)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, ep),
            d("form", {
              method: "post",
              action: Be.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              d("input", {
                type: "hidden",
                name: "requesttoken",
                value: ae.value
              }, null, 8, sp),
              (L(!0), I(ue, null, xe(f.value, (p) => (L(), I("input", {
                key: `edit-preview-${p.key}`,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, lp))), 128)),
              d("label", null, [
                d("span", null, h(y(c)("library", "Metadata field")), 1),
                d("select", ap, [
                  d("option", cp, h(y(c)("library", "Publication type")), 1),
                  d("option", up, h(y(c)("library", "Subtitle")), 1),
                  d("option", fp, h(y(c)("library", "Creators")), 1),
                  d("option", dp, h(y(c)("library", "Series / periodical")), 1),
                  d("option", pp, h(y(c)("library", "Publication date")), 1),
                  d("option", hp, h(y(c)("library", "Language")), 1),
                  d("option", mp, h(y(c)("library", "Publisher")), 1),
                  d("option", bp, h(y(c)("library", "Genres")), 1),
                  d("option", yp, h(y(c)("library", "Classifications")), 1)
                ])
              ]),
              d("label", null, [
                d("span", null, h(y(c)("library", "Preview value")), 1),
                C[21] || (C[21] = d("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              d("button", gp, h(y(c)("library", "Preview & apply metadata edit")), 1),
              d("p", _p, h(y(c)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, op),
            d("form", {
              method: "post",
              action: ht.value,
              class: "library-batch-cover-refresh-form"
            }, [
              d("input", {
                type: "hidden",
                name: "requesttoken",
                value: ae.value
              }, null, 8, Ep),
              (L(!0), I(ue, null, xe(f.value, (p) => (L(), I("input", {
                key: `cover-${p.key}`,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, Tp))), 128)),
              d("button", Sp, h(y(c)("library", "Request fresh cover previews")), 1),
              d("p", Cp, h(y(c)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, vp)
          ], 8, $d),
          d("details", xp, [
            d("summary", null, h(y(c)("library", "Browse")), 1),
            d("div", Ap, [
              b.value.length > 0 ? (L(), I("section", wp, [
                d("h3", Rp, h(y(c)("library", "Top series and periodicals")), 1),
                d("p", Op, h(y(c)("library", "Jump into recurring publications with one click.")), 1),
                d("ul", null, [
                  (L(!0), I(ue, null, xe(b.value, (p) => (L(), I("li", {
                    key: p.publication
                  }, [
                    d("a", {
                      href: X(p.publication)
                    }, h(p.publication), 9, Np),
                    d("span", Pp, h(p.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : b.value.length === 0 ? (L(), I("section", kp, [
                d("h3", Lp, h(y(c)("library", "No series or periodicals found yet")), 1),
                d("p", Ip, h(y(c)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : be("", !0),
              N.value.length > 0 ? (L(), I("section", Mp, [
                d("h3", Dp, h(y(c)("library", "Top publication years")), 1),
                d("ul", null, [
                  (L(!0), I(ue, null, xe(N.value, (p) => (L(), I("li", { key: p }, [
                    d("a", {
                      href: Q(p)
                    }, h(p), 9, Up)
                  ]))), 128))
                ])
              ])) : be("", !0),
              j.value.length > 0 ? (L(), I("section", Fp, [
                d("h3", Hp, h(y(c)("library", "Top creators")), 1),
                d("ul", null, [
                  (L(!0), I(ue, null, xe(j.value, (p) => (L(), I("li", { key: p }, [
                    d("a", {
                      href: R(p)
                    }, h(p), 9, $p)
                  ]))), 128))
                ])
              ])) : be("", !0)
            ])
          ])
        ]),
        We.value.length > 0 ? (L(), I("nav", {
          key: 2,
          class: "library-active-filter-chips",
          "aria-label": y(c)("library", "Active filters")
        }, [
          d("span", null, h(y(c)("library", "Active filters")), 1),
          (L(!0), I(ue, null, xe(We.value, (p) => (L(), I("a", {
            key: p.key,
            href: S(p.key),
            class: "library-filter-chip",
            "aria-label": `${y(c)("library", "Remove filter")}: ${p.label}`
          }, [
            d("strong", null, h(p.label) + ":", 1),
            ye(" " + h(p.value) + " ", 1),
            C[22] || (C[22] = d("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Vp))), 128))
        ], 8, jp)) : be("", !0),
        s.value.length === 0 ? (L(), I("div", {
          key: 3,
          class: Nn(["library-empty-content", { "library-first-run-guidance": _t.value || Ie.value, "library-filter-empty-state": bt.value && !_t.value && !Ie.value }]),
          role: "status"
        }, [
          _t.value ? (L(), I(ue, { key: 0 }, [
            d("h3", null, h(y(c)("library", "Start with one Library root")), 1),
            d("p", Bp, h(y(c)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            d("p", zp, [
              d("a", {
                href: V.value,
                class: "button primary"
              }, h(y(c)("library", "Add a Library root")), 9, Wp),
              d("span", qp, h(y(c)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : Ie.value ? (L(), I(ue, { key: 1 }, [
            d("h3", null, h(y(c)("library", "No enabled Library roots")), 1),
            d("p", Kp, h(y(c)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            d("p", Gp, [
              d("a", {
                href: V.value,
                class: "button primary"
              }, h(y(c)("library", "Open Library settings")), 9, Yp)
            ])
          ], 64)) : bt.value ? (L(), I(ue, { key: 2 }, [
            d("h3", null, h(y(c)("library", "No matches for the current filters")), 1),
            d("p", Xp, h(y(c)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            d("p", Jp, [
              d("a", {
                href: K(),
                class: "button secondary"
              }, h(y(c)("library", "Clear search")), 9, Zp),
              d("a", Qp, h(y(c)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (L(), I(ue, { key: 3 }, [
            d("h3", null, h(y(c)("library", "No catalogue items yet")), 1),
            d("p", eh, h(y(c)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            d("p", th, [
              d("a", {
                href: V.value,
                class: "button primary"
              }, h(y(c)("library", "Run a scan from settings")), 9, nh)
            ])
          ], 64))
        ], 2)) : (L(), I("div", rh, [
          (L(!0), I(ue, null, xe(s.value, (p) => (L(), I("article", {
            key: p.id,
            class: Nn(["library-cover-card", { "library-cover-card--open": m[p.id] }])
          }, [
            d("a", {
              class: "library-cover-link",
              href: p.openUrl,
              "aria-label": `Read ${p.title}`
            }, [
              d("img", {
                class: "library-cover-image",
                src: p.coverUrl,
                alt: `Cover for ${p.title}`,
                loading: "lazy"
              }, null, 8, oh)
            ], 8, ih),
            d("form", {
              method: "post",
              action: p.starUrl,
              class: "library-cover-star-form",
              onSubmit: Er((fe) => ce(p, fe), ["prevent"])
            }, [
              d("input", {
                type: "hidden",
                name: "requesttoken",
                value: ae.value
              }, null, 8, lh),
              C[23] || (C[23] = d("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              d("input", {
                type: "hidden",
                name: "starred",
                value: p.starred ? "0" : "1"
              }, null, 8, ah),
              d("button", {
                type: "submit",
                class: Nn(["library-cover-star-button", { "library-cover-star-button--starred": p.starred }]),
                "aria-pressed": p.starred ? "true" : "false",
                title: p.starred ? y(c)("library", "Unstar this publication") : y(c)("library", "Star this publication"),
                "aria-label": p.starred ? y(c)("library", "Unstar this publication") : y(c)("library", "Star this publication"),
                onClick: Er((fe) => ce(p, fe), ["prevent"])
              }, h(p.starred ? "★" : "☆"), 11, ch)
            ], 40, sh),
            d("div", uh, [
              d("div", fh, [
                d("h3", null, [
                  p.starred ? (L(), I("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": y(c)("library", "Starred")
                  }, "★", 8, dh)) : be("", !0),
                  ye(h(p.title), 1)
                ]),
                d("a", {
                  class: "library-cover-read",
                  href: p.openUrl
                }, h(y(c)("library", "Read")), 9, ph)
              ]),
              d("details", {
                class: "library-cover-details",
                onToggle: (fe) => O(p.id, fe)
              }, [
                d("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${y(c)("library", "Show details and actions")}: ${p.title}`
                }, h(y(c)("library", "Details")), 9, mh),
                d("div", bh, [
                  p.creators ? (L(), I("p", yh, h(p.creators), 1)) : be("", !0),
                  d("dl", gh, [
                    d("div", _h, [
                      d("dt", null, h(y(c)("library", "Type")), 1),
                      d("dd", null, h(p.publicationType), 1)
                    ]),
                    p.publication ? (L(), I("div", vh, [
                      d("dt", null, h(y(c)("library", "Series")), 1),
                      d("dd", null, h(p.publication), 1)
                    ])) : be("", !0),
                    p.publicationDate ? (L(), I("div", Eh, [
                      d("dt", null, h(y(c)("library", "Date")), 1),
                      d("dd", null, h(p.publicationDate), 1)
                    ])) : be("", !0),
                    p.workflowStatus ? (L(), I("div", Th, [
                      d("dt", null, h(y(c)("library", "Status")), 1),
                      d("dd", null, h(p.workflowStatus), 1)
                    ])) : be("", !0),
                    p.hasScannerConflict ? (L(), I("div", Sh, [
                      d("dt", null, h(y(c)("library", "Review")), 1),
                      d("dd", null, h(p.scannerConflictCount) + " fields", 1)
                    ])) : be("", !0),
                    p.lastOpenedAt ? (L(), I("div", Ch, [
                      d("dt", null, h(y(c)("library", "Last opened")), 1),
                      d("dd", null, h(p.lastOpenedAt), 1)
                    ])) : be("", !0),
                    p.extension ? (L(), I("div", xh, [
                      d("dt", null, h(y(c)("library", "Format")) + ":", 1),
                      d("dd", null, h(H(p.extension)), 1)
                    ])) : be("", !0),
                    p.shelf ? (L(), I("div", Ah, [
                      d("dt", null, h(y(c)("library", "Shelf")), 1),
                      d("dd", null, h(p.shelf), 1)
                    ])) : be("", !0)
                  ]),
                  p.description ? (L(), I("p", wh, h(p.description), 1)) : be("", !0),
                  p.scanStatus !== "indexed" || p.scanError ? (L(), I("p", Rh, [
                    ye(" scanStatus: " + h(p.scanStatus || "unknown"), 1),
                    p.scanError ? (L(), I("span", Oh, " · scanError: " + h(p.scanError), 1)) : be("", !0)
                  ])) : be("", !0),
                  d("div", Nh, [
                    W(p).length === 0 ? (L(), I("span", Ph, "No Nextcloud tags")) : (L(!0), I(ue, { key: 1 }, xe(W(p), (fe) => (L(), I("span", {
                      key: fe.id,
                      class: "library-tag"
                    }, h(fe.name), 1))), 128))
                  ]),
                  d("p", kh, [
                    d("a", {
                      href: p.filesUrl
                    }, h(y(c)("library", "Show in Files")), 9, Lh),
                    C[24] || (C[24] = ye(" · ", -1)),
                    d("a", {
                      href: p.downloadUrl
                    }, h(y(c)("library", "Download source")), 9, Ih),
                    C[25] || (C[25] = ye(" · ", -1)),
                    d("a", {
                      href: p.detailsUrl
                    }, h(y(c)("library", "Details")), 9, Mh)
                  ])
                ])
              ], 40, hh)
            ])
          ], 2))), 128))
        ])),
        s.value.length > 0 ? (L(), I("nav", {
          key: 5,
          class: "library-pagination library-pagination--bottom",
          "aria-label": y(c)("library", "Catalogue pagination")
        }, [
          d("span", Uh, [
            ye(h(y(c)("library", "Page")) + " " + h(z.value.page), 1),
            z.value.total > 0 ? (L(), I("span", Fh, " · " + h(z.value.from) + "–" + h(z.value.to), 1)) : be("", !0)
          ]),
          z.value.previousUrl ? (L(), I("a", {
            key: 0,
            href: z.value.previousUrl
          }, h(y(c)("library", "Previous")), 9, Hh)) : (L(), I("span", $h, h(y(c)("library", "Previous")), 1)),
          z.value.nextUrl ? (L(), I("a", {
            key: 2,
            href: z.value.nextUrl
          }, h(y(c)("library", "Next")), 9, jh)) : (L(), I("span", Vh, h(y(c)("library", "Next")), 1))
        ], 8, Dh)) : be("", !0)
      ])
    ]));
  }
}, cs = du("library", "catalogue", {}), Ar = document.querySelector("#library-vue-root"), us = {
  ...cs,
  requestToken: Ar?.dataset.requestToken || cs.requestToken || ""
};
function G(e) {
  return String(e ?? "");
}
function Cl(e) {
  return G(e).toUpperCase();
}
function zh(e, t, n, r = G) {
  for (const i of t) {
    const o = document.createElement("option");
    o.value = G(i), o.textContent = r(i), G(i) === G(n) && (o.selected = !0), e.appendChild(o);
  }
}
function fs(e, t, n, r, i = "") {
  const o = document.createElement("label");
  o.textContent = t;
  const s = document.createElement("input");
  s.type = n === "q" ? "search" : "text", s.name = n, s.value = G(r), s.placeholder = i, o.appendChild(s), e.appendChild(o);
}
function xn(e, t, n, r, i, o, s = G) {
  const l = document.createElement("label");
  l.textContent = t;
  const u = document.createElement("select");
  u.name = n;
  const v = document.createElement("option");
  v.value = "", v.textContent = i, u.appendChild(v), zh(u, o, r, s), l.appendChild(u), e.appendChild(l);
}
function An(e) {
  const t = G(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function Wh(e, t = {}) {
  return G(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(G(e || t?.publication || ""))}`);
}
function qh(e) {
  return G(e.discoveryPage) === "publication";
}
function Kh(e, t = {}) {
  return G(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(G(e))}`);
}
function Si(e) {
  return G(e.discoveryPage) === "year";
}
function Gh(e, t = {}) {
  return G(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(G(e))}`);
}
function Ci(e) {
  return G(e.discoveryPage) === "creator";
}
function Yh(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([n, r]) => n !== "sort" && G(r).trim() !== "");
}
function Xh() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function zn(e, t, n, r) {
  const i = document.createElement("a");
  return i.href = t, i.className = n, i.textContent = r, e.appendChild(i), i;
}
function Jh(e, t) {
  const n = document.createElement("span");
  return n.className = "library-muted", n.textContent = t, e.appendChild(n), n;
}
function Zh(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", c("library", "Catalogue search and filters")), fs(r, c("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), xn(r, c("library", "Type"), "type", n.type, c("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), fs(r, c("library", "Nextcloud tag"), "tag", n.tag, "photography"), xn(r, c("library", "Format"), "format", n.format, c("library", "All formats"), e.formats || [], Cl), xn(r, c("library", "Shelf"), "shelf", n.shelf, c("library", "All shelves"), e.shelves || []), xn(r, c("library", "Scan status"), "status", n.status, c("library", "All scan statuses"), e.scanStatuses || []), xn(r, c("library", "Sort"), "sort", n.sort || "title", c("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), xn(r, c("library", "Page size"), "limit", t.limit || 100, c("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", c("library", "Apply catalogue filters")), i.textContent = c("library", "Apply filters");
  const o = document.createElement("a");
  return o.href = "?", o.className = "button secondary", o.setAttribute("aria-label", c("library", "Clear catalogue filters")), o.textContent = c("library", "Clear"), r.append(i, o), r;
}
function Qh() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", n = e.get("batchMetadataApplied") || "0", r = e.get("batchMetadataUnchanged") || "0", i = e.get("batchMetadataSkipped") || "0", o = document.createElement("p");
  return o.className = "library-notice library-batch-metadata-apply-result", o.textContent = c("library", `Batch metadata apply updated ${n} ${t} values; ${r} already matched, ${i} skipped.`), o;
}
function em(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-quick-filter-bar", r.setAttribute("aria-label", c("library", "Quick catalogue filters"));
  let i = null;
  const o = () => {
    window.clearTimeout(i), i = window.setTimeout(() => r.requestSubmit(), 350);
  };
  for (const [E, N] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(E) || G(N).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = E, j.value = G(N), r.appendChild(j);
  }
  const s = document.createElement("label");
  s.className = "library-quick-filter-search", s.textContent = c("library", "Search");
  const l = document.createElement("input");
  l.type = "search", l.name = "q", l.value = G(n.q), l.placeholder = "Camera, Eco, Rolleiflex...", l.addEventListener("input", o), s.appendChild(l), r.appendChild(s);
  const u = [
    [c("library", "Sort"), "sort", n.sort || "title", [["title", c("library", "Title")], ["recent", c("library", "Recently added")], ["publicationDate", c("library", "Publication date")], ["publication", c("library", "Series")], ["lastOpened", c("library", "Recently opened")], ["format", c("library", "Format")]]],
    [c("library", "Starred"), "starred", n.starred || "", [["", c("library", "All")], ["1", c("library", "Starred")]]],
    [c("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [E, N, j, te] of u) {
    const q = document.createElement("label");
    q.textContent = E;
    const ie = document.createElement("select");
    ie.name = N;
    for (const [ne, z] of te) {
      const U = document.createElement("option");
      U.value = G(ne), U.textContent = G(z), G(ne) === G(j) && (U.selected = !0), ie.appendChild(U);
    }
    ie.addEventListener("change", () => r.requestSubmit()), q.appendChild(ie), r.appendChild(q);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", c("library", "Apply catalogue filters")), v.textContent = c("library", "Apply filters");
  const b = document.createElement("a");
  return b.href = "?", b.className = "button secondary", b.setAttribute("aria-label", c("library", "Clear catalogue filters")), b.textContent = c("library", "Clear all"), r.append(v, b), r;
}
function tm(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, i = G(e.settingsUrl || ""), o = G(e.metadataExportUrl || ""), s = G(e.batchTagUrl || "/apps/library/bulk/tags"), l = G(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), u = G(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = G(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), b = G(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), E = document.createElement("div");
  E.className = "library-vue-catalogue library-vue-fallback", E.dataset.vueFallback = "true";
  const N = document.createElement("section");
  N.className = "library-panel", N.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const te = document.createElement("div"), q = document.createElement("h2");
  q.id = "library-catalogue-heading", q.textContent = c("library", "Publication catalogue");
  const ie = document.createElement("p");
  ie.className = "library-muted", ie.textContent = c("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), te.append(q, ie);
  const ne = document.createElement("nav");
  if (ne.className = "library-catalogue-toolbar", ne.setAttribute("aria-label", c("library", "Library actions")), i) {
    const R = document.createElement("a");
    R.href = i, R.className = "button secondary", R.setAttribute("aria-label", "Open Library settings"), R.textContent = c("library", "Settings"), ne.appendChild(R);
  }
  if (o) {
    const R = document.createElement("a");
    R.href = o, R.className = "button secondary", R.setAttribute("aria-label", "Export corrected metadata"), R.textContent = c("library", "Export corrected metadata"), ne.appendChild(R);
  }
  if (e.metadataSidecarManifestUrl) {
    const R = document.createElement("a");
    R.href = e.metadataSidecarManifestUrl, R.className = "button secondary", R.setAttribute("aria-label", "Export sidecar manifest"), R.textContent = c("library", "Sidecar manifest"), ne.appendChild(R);
  }
  if (e.metadataSidecarBundleUrl) {
    const R = document.createElement("a");
    R.href = e.metadataSidecarBundleUrl, R.className = "button secondary", R.setAttribute("aria-label", "Export sidecar ZIP"), R.textContent = c("library", "Sidecar ZIP"), ne.appendChild(R);
  }
  j.append(te, ne), N.appendChild(j);
  const z = Qh();
  z && N.appendChild(z), N.appendChild(em(e, r));
  const U = document.createElement("details");
  U.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = c("library", "Show catalogue filters"), U.append(V, Zh(e, r)), N.appendChild(U), qh(e) || Si(e) || Ci(e)) {
    const R = document.createElement("section");
    R.className = "library-discovery-header", R.setAttribute("aria-labelledby", "library-discovery-heading");
    const O = document.createElement("p");
    O.className = "library-muted", O.textContent = Ci(e) ? c("library", "Creator") : Si(e) ? c("library", "Publication year") : c("library", "Publication / series");
    const $ = document.createElement("h3");
    $.id = "library-discovery-heading", $.textContent = G(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = `${r.total ?? n.length} ${Ci(e) ? c("library", "items by this creator. Sorted by publication context when available.") : Si(e) ? c("library", "items from this publication year. Sorted by publication date when available.") : c("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const re = document.createElement("a");
    re.href = "/apps/library/", re.className = "button secondary", re.textContent = c("library", "Back to full catalogue"), R.append(O, $, J, re), N.appendChild(R);
  }
  const ae = document.createElement("p");
  ae.className = "library-muted library-filter-result-summary", ae.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`;
  const Oe = document.createElement("a");
  Oe.href = "?", Oe.textContent = ` ${c("library", "Clear all filters")}`, ae.appendChild(Oe), N.appendChild(ae);
  const Ae = document.createElement("details");
  Ae.className = "library-batch-actions";
  const He = document.createElement("summary");
  He.textContent = `${c("library", "Batch actions for current results")} (${r.total ?? n.length} ${c("library", "Current filter result")})`;
  const ve = document.createElement("form");
  ve.method = "post", ve.action = s, ve.className = "library-batch-tag-form";
  const Le = An(e);
  Le && ve.appendChild(Le);
  for (const [R, O] of Object.entries(e.activeFilters || {})) {
    if (G(O).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = R, $.value = G(O), ve.appendChild($);
  }
  const Je = document.createElement("label");
  Je.textContent = c("library", "Apply Nextcloud tag to current results");
  const rt = document.createElement("input");
  rt.type = "text", rt.name = "nextcloudTagName", rt.placeholder = "batch-review", Je.appendChild(rt);
  const Be = document.createElement("button");
  Be.type = "submit", Be.className = "button secondary", Be.textContent = c("library", "Apply Nextcloud tag to current results");
  const ht = document.createElement("p");
  ht.className = "library-muted", ht.textContent = c("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), ve.append(Je, Be, ht);
  const De = document.createElement("form");
  De.method = "post", De.action = l, De.className = "library-batch-tag-remove-form";
  const we = An(e);
  we && De.appendChild(we);
  for (const [R, O] of Object.entries(e.activeFilters || {})) {
    if (G(O).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = R, $.value = G(O), De.appendChild($);
  }
  const de = document.createElement("label");
  de.textContent = c("library", "Nextcloud tag");
  const oe = document.createElement("input");
  oe.type = "text", oe.name = "nextcloudTagName", oe.setAttribute("list", "library-nextcloud-tag-suggestions"), oe.placeholder = c("library", "e.g. Review"), oe.autocomplete = "off", de.appendChild(oe);
  const Pe = document.createElement("button");
  Pe.type = "submit", Pe.className = "button secondary", Pe.textContent = c("library", "Remove tag from current results");
  const it = document.createElement("p");
  it.className = "library-muted", it.textContent = c("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), De.append(de, Pe, it);
  const Ue = document.createElement("form");
  Ue.method = "post", Ue.action = u, Ue.className = "library-batch-metadata-reset-form";
  const $e = An(e);
  $e && Ue.appendChild($e);
  for (const [R, O] of Object.entries(e.activeFilters || {})) {
    if (G(O).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = R, $.value = G(O), Ue.appendChild($);
  }
  const mt = document.createElement("input");
  mt.type = "hidden", mt.name = "scannerConflicts", mt.value = "1";
  const pe = document.createElement("button");
  pe.type = "submit", pe.className = "button secondary", pe.textContent = c("library", "Reset filtered metadata");
  const _t = document.createElement("p");
  _t.className = "library-muted", _t.textContent = c("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Ue.append(mt, pe, _t);
  const Ie = document.createElement("form");
  Ie.method = "post", Ie.action = v, Ie.className = "library-batch-metadata-edit-preview-form", Ie.target = "_blank";
  const bt = An(e);
  bt && Ie.appendChild(bt);
  for (const [R, O] of Object.entries(e.activeFilters || {})) {
    if (G(O).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = R, $.value = G(O), Ie.appendChild($);
  }
  const vt = document.createElement("label");
  vt.textContent = c("library", "Metadata field");
  const Et = document.createElement("select");
  Et.name = "bulkEditField";
  for (const [R, O] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const $ = document.createElement("option");
    $.value = R, $.textContent = c("library", O), Et.appendChild($);
  }
  vt.appendChild(Et);
  const We = document.createElement("label");
  We.textContent = c("library", "Preview value");
  const Tt = document.createElement("input");
  Tt.type = "text", Tt.name = "bulkEditValue", Tt.placeholder = "magazine, de, photography...", Tt.autocomplete = "off", We.appendChild(Tt);
  const f = document.createElement("button");
  f.type = "submit", f.className = "button secondary", f.textContent = c("library", "Preview & apply metadata edit");
  const m = document.createElement("p");
  m.className = "library-muted", m.textContent = c("library", "Preview first, then apply from the review page."), Ie.append(vt, We, f, m);
  const _ = document.createElement("form");
  _.method = "post", _.action = b, _.className = "library-batch-cover-refresh-form";
  const A = An(e);
  A && _.appendChild(A);
  for (const [R, O] of Object.entries(e.activeFilters || {})) {
    if (G(O).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = R, $.value = G(O), _.appendChild($);
  }
  const T = document.createElement("button");
  T.type = "submit", T.className = "button secondary", T.textContent = c("library", "Request fresh cover previews");
  const x = document.createElement("p");
  x.className = "library-muted", x.textContent = c("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(T, x), Ae.append(He, ve, De, Ue, Ie, _), N.appendChild(Ae);
  const P = document.createElement("nav");
  P.className = "library-pagination", P.setAttribute("aria-label", c("library", "Catalogue pagination"));
  const D = document.createElement("span");
  D.className = "library-pagination-range", D.textContent = `Page ${r.page ?? 1} · ${r.from ?? 0}–${r.to ?? n.length}`, P.appendChild(D), N.appendChild(P);
  const M = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], S = document.createElement("details");
  S.className = M.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const K = document.createElement("summary");
  K.className = "library-periodical-groups-summary", K.textContent = c("library", "Show top series and periodicals"), S.appendChild(K);
  const H = document.createElement("h3");
  H.textContent = M.length > 0 ? c("library", "Top series and periodicals") : c("library", "No series or periodicals found yet");
  const W = document.createElement("p");
  if (W.className = "library-muted", W.textContent = M.length > 0 ? c("library", "Jump into recurring publications with one click.") : c("library", "Add publication or series names in item details to build this shortcut panel."), S.append(H, W), M.length > 0) {
    const R = document.createElement("ul");
    for (const O of M) {
      const $ = document.createElement("li"), J = document.createElement("a");
      J.href = Wh(O.publication, O), J.textContent = G(O.publication);
      const re = document.createElement("span");
      re.className = "library-muted", re.textContent = `${O.itemCount} items`, $.append(J, re), R.appendChild($);
    }
    S.appendChild(R);
  }
  N.appendChild(S);
  const X = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (X.length > 0) {
    const R = document.createElement("details");
    R.className = "library-year-groups";
    const O = document.createElement("summary");
    O.className = "library-periodical-groups-summary", O.textContent = c("library", "Show publication years");
    const $ = document.createElement("h3");
    $.textContent = c("library", "Top publication years");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = c("library", "Jump into dated books, magazines, journals and comics by year.");
    const re = document.createElement("ul");
    for (const he of X) {
      const ce = document.createElement("li"), k = document.createElement("a");
      k.href = Kh(he, e), k.textContent = G(he), ce.appendChild(k), re.appendChild(ce);
    }
    R.append(O, $, J, re), N.appendChild(R);
  }
  const Q = Array.isArray(e.creators) ? e.creators : [];
  if (Q.length > 0) {
    const R = document.createElement("details");
    R.className = "library-creator-groups";
    const O = document.createElement("summary");
    O.className = "library-periodical-groups-summary", O.textContent = c("library", "Show creators");
    const $ = document.createElement("h3");
    $.textContent = c("library", "Top creators");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = c("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const re = document.createElement("ul");
    for (const he of Q) {
      const ce = document.createElement("li"), k = document.createElement("a");
      k.href = Gh(he, e), k.textContent = G(he), ce.appendChild(k), re.appendChild(ce);
    }
    R.append(O, $, J, re), N.appendChild(R);
  }
  if (n.length === 0) {
    const R = document.createElement("div"), O = Number(e.rootCount || 0), $ = Number(e.enabledRootCount || 0), J = Yh(e);
    R.className = "library-empty-content", (O === 0 || $ === 0) && R.classList.add("library-first-run-guidance"), J && O > 0 && $ > 0 && R.classList.add("library-filter-empty-state"), R.setAttribute("role", "status");
    const re = document.createElement("h3"), he = document.createElement("p");
    he.className = "library-muted";
    const ce = document.createElement("p");
    ce.className = "library-empty-actions", O === 0 ? (re.textContent = c("library", "Start with one Library root"), he.textContent = c("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), zn(ce, i, "button primary", c("library", "Add a Library root")), Jh(ce, c("library", "Run a scan after saving a root"))) : $ === 0 ? (re.textContent = c("library", "No enabled Library roots"), he.textContent = c("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), zn(ce, i, "button primary", c("library", "Open Library settings"))) : J ? (re.textContent = c("library", "No matches for the current filters"), he.textContent = c("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), zn(ce, Xh(), "button secondary", c("library", "Clear search")), zn(ce, "?", "button primary", c("library", "Clear all filters"))) : (re.textContent = c("library", "No catalogue items yet"), he.textContent = c("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), zn(ce, i, "button primary", c("library", "Run a scan from settings"))), R.append(re, he, ce), N.appendChild(R);
  } else {
    const R = document.createElement("div");
    R.className = "library-cover-gallery";
    for (const O of n) {
      const $ = document.createElement("article");
      $.className = "library-cover-card";
      const J = document.createElement("a");
      J.className = "library-cover-link", J.href = G(O.openUrl || "#"), J.setAttribute("aria-label", `Read ${G(O.title || "publication")}`);
      const re = document.createElement("img");
      re.className = "library-cover-image", re.src = G(O.coverUrl || ""), re.alt = `Cover for ${G(O.title || "publication")}`, re.loading = "lazy", J.appendChild(re);
      const he = An(e), ce = document.createElement("form");
      ce.method = "post", ce.action = G(O.starUrl || ""), ce.className = "library-cover-star-form", he && ce.appendChild(he);
      const k = document.createElement("input");
      k.type = "hidden", k.name = "returnTo", k.value = "catalogue";
      const C = document.createElement("input");
      C.type = "hidden", C.name = "starred", C.value = O.starred ? "0" : "1";
      const p = document.createElement("button");
      p.type = "submit", p.className = O.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", p.setAttribute("aria-pressed", O.starred ? "true" : "false"), p.setAttribute("aria-label", O.starred ? c("library", "Unstar this publication") : c("library", "Star this publication")), p.title = O.starred ? c("library", "Unstar this publication") : c("library", "Star this publication"), p.textContent = O.starred ? "★" : "☆", ce.append(k, C, p);
      const fe = document.createElement("div");
      fe.className = "library-cover-summary";
      const qe = document.createElement("h3");
      if (qe.textContent = G(O.title || "Untitled publication"), fe.appendChild(qe), O.creators) {
        const Ot = document.createElement("p");
        Ot.className = "library-creator", Ot.textContent = G(O.creators), fe.appendChild(Ot);
      }
      const ot = document.createElement("dl");
      ot.className = "library-cover-detail-list";
      const Dn = [
        ["Type", G(O.publicationType || "other")],
        ["Format", O.extension ? Cl(O.extension) : ""],
        ["Shelf", O.shelf ? G(O.shelf) : ""]
      ].filter(([, Ot]) => Ot !== "");
      for (const [Ot, cr] of Dn) {
        const Xt = document.createElement("div");
        Xt.className = "library-cover-detail-chip";
        const nn = document.createElement("dt");
        nn.textContent = Ot;
        const ut = document.createElement("dd");
        ut.textContent = cr, Xt.append(nn, ut), ot.appendChild(Xt);
      }
      fe.appendChild(ot);
      const Ft = document.createElement("p"), Rt = document.createElement("a");
      Rt.href = G(O.openUrl || "#"), Rt.textContent = c("library", "Read");
      const gn = document.createElement("a");
      gn.href = G(O.filesUrl || "#"), gn.textContent = c("library", "Show in Files");
      const _n = document.createElement("a");
      _n.href = G(O.downloadUrl || "#"), _n.textContent = c("library", "Download source");
      const vn = document.createElement("a");
      vn.href = G(O.detailsUrl || "#"), vn.textContent = c("library", "Details"), Ft.append(Rt, document.createTextNode(" · "), gn, document.createTextNode(" · "), _n, document.createTextNode(" · "), vn), fe.appendChild(Ft), $.append(J, ce, fe), R.appendChild($);
    }
    N.appendChild(R);
  }
  return E.appendChild(N), E;
}
if (Ar)
  try {
    cu(Bh, { state: us }).mount(Ar);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Ar.replaceChildren(tm(us));
  }
//# sourceMappingURL=library-main.mjs.map
