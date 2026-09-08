// @__NO_SIDE_EFFECTS__
function Ui(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ee = {}, On = [], Mt = () => {
}, ds = () => !1, Dr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ur = (e) => e.startsWith("onUpdate:"), Ye = Object.assign, Fi = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, jl = Object.prototype.hasOwnProperty, be = (e, t) => jl.call(e, t), Z = Array.isArray, Qt = (e) => sr(e) === "[object Map]", bn = (e) => sr(e) === "[object Set]", mo = (e) => sr(e) === "[object Date]", le = (e) => typeof e == "function", Oe = (e) => typeof e == "string", It = (e) => typeof e == "symbol", ve = (e) => e !== null && typeof e == "object", ps = (e) => (ve(e) || le(e)) && le(e.then) && le(e.catch), hs = Object.prototype.toString, sr = (e) => hs.call(e), Vl = (e) => sr(e).slice(8, -1), ms = (e) => sr(e) === "[object Object]", Hi = (e) => Oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Gn = /* @__PURE__ */ Ui(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Bl = /-\w/g, vt = Fr(
  (e) => e.replace(Bl, (t) => t.slice(1).toUpperCase())
), zl = /\B([A-Z])/g, yn = Fr(
  (e) => e.replace(zl, "-$1").toLowerCase()
), bs = Fr((e) => e.charAt(0).toUpperCase() + e.slice(1)), ni = Fr(
  (e) => e ? `on${bs(e)}` : ""
), Lt = (e, t) => !Object.is(e, t), Sr = (e, ...t) => {
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
      const r = e[n], i = Oe(r) ? Gl(r) : $i(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Oe(e) || ve(e))
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
  if (Oe(e))
    t = e;
  else if (Z(e))
    for (let n = 0; n < e.length; n++) {
      const r = Nn(e[n]);
      r && (t += r + " ");
    }
  else if (ve(e))
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
    n = en(e[r], t[r]);
  return n;
}
function yo(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const i of e) {
    let o = -1;
    for (let s = 0; s < n.length; s++)
      if (!r[s] && en(i, n[s])) {
        o = s;
        break;
      }
    if (o < 0) return !1;
    r[o] = 1;
  }
  return !0;
}
function en(e, t) {
  if (e === t) return !0;
  let n = mo(e), r = mo(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = It(e), r = It(t), n || r)
    return e === t;
  if (n = Z(e), r = Z(t), n || r)
    return n && r ? Jl(e, t) : !1;
  if (n = ve(e), r = ve(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = Qt(e), r = Qt(t), n || r || (n = bn(e), r = bn(t), n || r))
      return n && r ? yo(e, t) : !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s), u = t.hasOwnProperty(s);
      if (l && !u || !l && u || !en(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((n) => en(n, t));
}
const _s = (e) => !!(e && e.__v_isRef === !0), m = (e) => Oe(e) ? e : e == null ? "" : Z(e) || ve(e) && (e.toString === hs || !le(e.toString)) ? _s(e) ? m(e.value) : JSON.stringify(e, vs, 2) : String(e), vs = (e, t) => _s(t) ? vs(e, t.value) : Qt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], o) => (n[ri(r, o) + " =>"] = i, n),
    {}
  )
} : bn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ri(n))
} : It(t) ? ri(t) : ve(t) && !Z(t) && !ms(t) ? String(t) : t, ri = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    It(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let We;
class Ql {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && We && (We.active ? (this.parent = We, this.index = (We.scopes || (We.scopes = [])).push(
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
      const n = We;
      try {
        return We = this, t();
      } finally {
        We = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = We, We = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (We === this)
        We = this.prevScope;
      else {
        let t = We;
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
  return We;
}
let Se;
const ii = /* @__PURE__ */ new WeakSet();
class Es {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, We && (We.active ? We.effects.push(this) : this.flags &= -2);
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
    const t = Se, n = Et;
    Se = this, Et = !0;
    try {
      return this.fn();
    } finally {
      xs(this), Se = t, Et = n, this.flags &= -3;
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
  const t = e.dep, n = Se, r = Et;
  Se = e, Et = !0;
  try {
    Cs(e);
    const i = e.fn(e._value);
    (t.version === 0 || Lt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Se = n, Et = r, xs(e), e.flags &= -3;
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
let Et = !0;
const ws = [];
function Bt() {
  ws.push(Et), Et = !1;
}
function zt() {
  const e = ws.pop();
  Et = e === void 0 ? !0 : e;
}
function go(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Se;
    Se = void 0;
    try {
      t();
    } finally {
      Se = n;
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
    if (!Se || !Et || Se === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Se)
      n = this.activeLink = new na(Se, this), Se.deps ? (n.prevDep = Se.depsTail, Se.depsTail.nextDep = n, Se.depsTail = n) : Se.deps = Se.depsTail = n, Rs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Se.depsTail, n.nextDep = void 0, Se.depsTail.nextDep = n, Se.depsTail = n, Se.deps === n && (Se.deps = r);
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
function Ke(e, t, n) {
  if (Et && Se) {
    let r = Ai.get(e);
    r || Ai.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new zi()), i.map = r, i.key = n), i.track();
  }
}
function $t(e, t, n, r, i, o) {
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
      s.forEach((T, P) => {
        (P === "length" || P === tr || !It(P) && P >= b) && l(T);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && l(s.get(n)), v && l(s.get(tr)), t) {
        case "add":
          u ? v && l(s.get("length")) : (l(s.get(pn)), Qt(e) && l(s.get(wi)));
          break;
        case "delete":
          u || (l(s.get(pn)), Qt(e) && l(s.get(wi)));
          break;
        case "set":
          Qt(e) && l(s.get(pn));
          break;
      }
  }
  Vi();
}
function Cn(e) {
  const t = /* @__PURE__ */ me(e);
  return t === e ? t : (Ke(t, "iterate", tr), /* @__PURE__ */ gt(e) ? t : t.map(Tt));
}
function jr(e) {
  return Ke(e = /* @__PURE__ */ me(e), "iterate", tr), e;
}
function Pt(e, t) {
  return /* @__PURE__ */ Wt(e) ? Mn(/* @__PURE__ */ hn(e) ? Tt(t) : t) : Tt(t);
}
const ra = {
  __proto__: null,
  [Symbol.iterator]() {
    return oi(this, Symbol.iterator, (e) => Pt(this, e));
  },
  concat(...e) {
    return Cn(this).concat(
      ...e.map((t) => Z(t) ? Cn(t) : t)
    );
  },
  entries() {
    return oi(this, "entries", (e) => (e[1] = Pt(this, e[1]), e));
  },
  every(e, t) {
    return Ut(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ut(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Pt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Ut(
      this,
      "find",
      e,
      t,
      (n) => Pt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ut(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ut(
      this,
      "findLast",
      e,
      t,
      (n) => Pt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ut(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ut(this, "forEach", e, t, void 0, arguments);
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
    return Ut(this, "map", e, t, void 0, arguments);
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
    return Ut(this, "some", e, t, void 0, arguments);
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
    return oi(this, "values", (e) => Pt(this, e));
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
function Ut(e, t, n, r, i, o) {
  const s = jr(e), l = s !== e && !/* @__PURE__ */ gt(e), u = s[t];
  if (u !== ia[t]) {
    const T = u.apply(e, o);
    return l ? Tt(T) : T;
  }
  let v = n;
  s !== e && (l ? v = function(T, P) {
    return n.call(this, Pt(e, T), P, e);
  } : n.length > 2 && (v = function(T, P) {
    return n.call(this, T, P, e);
  }));
  const b = u.call(s, v, r);
  return l && i ? i(b) : b;
}
function _o(e, t, n, r) {
  const i = jr(e), o = i !== e && !/* @__PURE__ */ gt(e);
  let s = n, l = !1;
  i !== e && (o ? (l = r.length === 0, s = function(v, b, T) {
    return l && (l = !1, v = Pt(e, v)), n.call(this, v, Pt(e, b), T, e);
  }) : n.length > 3 && (s = function(v, b, T) {
    return n.call(this, v, b, T, e);
  }));
  const u = i[t](s, ...r);
  return l ? Pt(e, u) : u;
}
function si(e, t, n) {
  const r = /* @__PURE__ */ me(e);
  Ke(r, "iterate", tr);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Ki(n[0]) ? (n[0] = /* @__PURE__ */ me(n[0]), r[t](...n)) : i;
}
function Hn(e, t, n = []) {
  Bt(), ji();
  const r = (/* @__PURE__ */ me(e))[t].apply(e, n);
  return Vi(), zt(), r;
}
const oa = /* @__PURE__ */ Ui("__proto__,__v_isRef,__isVue"), Os = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(It)
);
function sa(e) {
  It(e) || (e = String(e));
  const t = /* @__PURE__ */ me(this);
  return Ke(t, "has", e), t.hasOwnProperty(e);
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
      return r === (i ? o ? ba : Ms : o ? Ls : ks).get(t) || // receiver is not the reactive proxy, but has the same prototype
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
      /* @__PURE__ */ Ge(t) ? t : r
    );
    if ((It(n) ? Os.has(n) : oa(n)) || (i || Ke(t, "get", n), o))
      return l;
    if (/* @__PURE__ */ Ge(l)) {
      const u = s && Hi(n) ? l : l.value;
      return i && ve(u) ? /* @__PURE__ */ Oi(u) : u;
    }
    return ve(l) ? i ? /* @__PURE__ */ Oi(l) : /* @__PURE__ */ fn(l) : l;
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
      const v = /* @__PURE__ */ Wt(o);
      if (!/* @__PURE__ */ gt(r) && !/* @__PURE__ */ Wt(r) && (o = /* @__PURE__ */ me(o), r = /* @__PURE__ */ me(r)), !s && /* @__PURE__ */ Ge(o) && !/* @__PURE__ */ Ge(r))
        return v || (o.value = r), !0;
    }
    const l = s ? Number(n) < t.length : be(t, n), u = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Ge(t) ? t : i
    );
    return t === /* @__PURE__ */ me(i) && u && (l ? Lt(r, o) && $t(t, "set", n, r) : $t(t, "add", n, r)), u;
  }
  deleteProperty(t, n) {
    const r = be(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && $t(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!It(n) || !Os.has(n)) && Ke(t, "has", n), r;
  }
  ownKeys(t) {
    return Ke(
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
    const i = this.__v_raw, o = /* @__PURE__ */ me(i), s = Qt(o), l = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, v = i[e](...r), b = n ? Ri : t ? Mn : Tt;
    return !t && Ke(
      o,
      "iterate",
      u ? wi : pn
    ), Ye(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: T, done: P } = v.next();
          return P ? { value: T, done: P } : {
            value: l ? [b(T[0]), b(T[1])] : b(T),
            done: P
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
      const o = this.__v_raw, s = /* @__PURE__ */ me(o), l = /* @__PURE__ */ me(i);
      e || (Lt(i, l) && Ke(s, "get", i), Ke(s, "get", l));
      const { has: u } = br(s), v = t ? Ri : e ? Mn : Tt;
      if (u.call(s, i))
        return v(o.get(i));
      if (u.call(s, l))
        return v(o.get(l));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ke(/* @__PURE__ */ me(i), "iterate", pn), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ me(o), l = /* @__PURE__ */ me(i);
      return e || (Lt(i, l) && Ke(s, "has", i), Ke(s, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const s = this, l = s.__v_raw, u = /* @__PURE__ */ me(l), v = t ? Ri : e ? Mn : Tt;
      return !e && Ke(u, "iterate", pn), l.forEach((b, T) => i.call(o, v(b), v(T), s));
    }
  };
  return Ye(
    n,
    e ? {
      add: yr("add"),
      set: yr("set"),
      delete: yr("delete"),
      clear: yr("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ me(this), s = br(o), l = /* @__PURE__ */ me(i), u = !t && !/* @__PURE__ */ gt(i) && !/* @__PURE__ */ Wt(i) ? l : i;
        return s.has.call(o, u) || Lt(i, u) && s.has.call(o, i) || Lt(l, u) && s.has.call(o, l) || (o.add(u), $t(o, "add", u, u)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ gt(o) && !/* @__PURE__ */ Wt(o) && (o = /* @__PURE__ */ me(o));
        const s = /* @__PURE__ */ me(this), { has: l, get: u } = br(s);
        let v = l.call(s, i);
        v || (i = /* @__PURE__ */ me(i), v = l.call(s, i));
        const b = u.call(s, i);
        return s.set(i, o), v ? Lt(o, b) && $t(s, "set", i, o) : $t(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ me(this), { has: s, get: l } = br(o);
        let u = s.call(o, i);
        u || (i = /* @__PURE__ */ me(i), u = s.call(o, i)), l && l.call(o, i);
        const v = o.delete(i);
        return u && $t(o, "delete", i, void 0), v;
      },
      clear() {
        const i = /* @__PURE__ */ me(this), o = i.size !== 0, s = i.clear();
        return o && $t(
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
    be(n, i) && i in r ? n : r,
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
function fn(e) {
  return /* @__PURE__ */ Wt(e) ? e : qi(
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
function qi(e, t, n, r, i) {
  if (!ve(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
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
  return /* @__PURE__ */ Wt(e) ? /* @__PURE__ */ hn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
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
function me(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ me(t) : e;
}
function _a(e) {
  return !be(e, "__v_skip") && Object.isExtensible(e) && ys(e, "__v_skip", !0), e;
}
const Tt = (e) => ve(e) ? /* @__PURE__ */ fn(e) : e, Mn = (e) => ve(e) ? /* @__PURE__ */ Oi(e) : e;
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function va(e) {
  return Ea(e, !1);
}
function Ea(e, t) {
  return /* @__PURE__ */ Ge(e) ? e : new Ta(e, t);
}
class Ta {
  constructor(t, n) {
    this.dep = new zi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ me(t), this._value = n ? t : Tt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ gt(t) || /* @__PURE__ */ Wt(t);
    t = r ? t : /* @__PURE__ */ me(t), Lt(t, n) && (this._rawValue = t, this._value = r ? t : Tt(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Ge(e) ? e.value : e;
}
const Sa = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ Ge(i) && !/* @__PURE__ */ Ge(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Is(e) {
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
    Se !== this)
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
function wa(e, t, n = Ee) {
  const { immediate: r, deep: i, once: o, scheduler: s, augmentJob: l, call: u } = n, v = (V) => i ? V : /* @__PURE__ */ gt(V) || i === !1 || i === 0 ? jt(V, 1) : jt(V);
  let b, T, P, j, ne = !1, W = !1;
  if (/* @__PURE__ */ Ge(e) ? (T = () => e.value, ne = /* @__PURE__ */ gt(e)) : /* @__PURE__ */ hn(e) ? (T = () => v(e), ne = !0) : Z(e) ? (W = !0, ne = e.some((V) => /* @__PURE__ */ hn(V) || /* @__PURE__ */ gt(V)), T = () => e.map((V) => {
    if (/* @__PURE__ */ Ge(V))
      return V.value;
    if (/* @__PURE__ */ hn(V))
      return v(V);
    if (le(V))
      return u ? u(V, 2) : V();
  })) : le(e) ? t ? T = u ? () => u(e, 2) : e : T = () => {
    if (P) {
      Bt();
      try {
        P();
      } finally {
        zt();
      }
    }
    const V = an;
    an = b;
    try {
      return u ? u(e, 3, [j]) : e(j);
    } finally {
      an = V;
    }
  } : T = Mt, t && i) {
    const V = T, ce = i === !0 ? 1 / 0 : i;
    T = () => jt(V(), ce);
  }
  const oe = ea(), re = () => {
    b.stop(), oe && oe.active && Fi(oe.effects, b);
  };
  if (o && t) {
    const V = t;
    t = (...ce) => {
      const Re = V(...ce);
      return re(), Re;
    };
  }
  let z = W ? new Array(e.length).fill(gr) : gr;
  const I = (V) => {
    if (!(!(b.flags & 1) || !b.dirty && !V))
      if (t) {
        const ce = b.run();
        if (V || i || ne || (W ? ce.some((Re, xe) => Lt(Re, z[xe])) : Lt(ce, z))) {
          P && P();
          const Re = an;
          an = b;
          try {
            const xe = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              z === gr ? void 0 : W && z[0] === gr ? [] : z,
              j
            ];
            z = ce, u ? u(t, 3, xe) : (
              // @ts-expect-error
              t(...xe)
            );
          } finally {
            an = Re;
          }
        }
      } else
        b.run();
  };
  return l && l(I), b = new Es(T), b.scheduler = s ? () => s(I, !1) : I, j = (V) => Aa(V, !1, b), P = b.onStop = () => {
    const V = wr.get(b);
    if (V) {
      if (u)
        u(V, 4);
      else
        for (const ce of V) ce();
      wr.delete(b);
    }
  }, t ? r ? I(!0) : z = b.run() : s ? s(I.bind(null, !0), !0) : b.run(), re.pause = b.pause.bind(b), re.resume = b.resume.bind(b), re.stop = re, re;
}
function jt(e, t = 1 / 0, n) {
  if (t <= 0 || !ve(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ge(e))
    jt(e.value, t, n);
  else if (Z(e))
    for (let r = 0; r < e.length; r++)
      jt(e[r], t, n);
  else if (bn(e) || Qt(e))
    e.forEach((r) => {
      jt(r, t, n);
    });
  else if (ms(e)) {
    for (const r in e)
      jt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && jt(e[r], t, n);
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
function St(e, t, n, r) {
  if (le(e)) {
    const i = lr(e, t, n, r);
    return i && ps(i) && i.catch((o) => {
      Vr(o, t, n);
    }), i;
  }
  if (Z(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(St(e[o], t, n, r));
    return i;
  }
}
function Vr(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Ee;
  if (t) {
    let l = t.parent;
    const u = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const b = l.ec;
      if (b) {
        for (let T = 0; T < b.length; T++)
          if (b[T](e, u, v) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      Bt(), lr(o, null, 10, [
        e,
        u,
        v
      ]), zt();
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
const et = [];
let Nt = -1;
const Pn = [];
let Zt = null, wn = 0;
const Ds = /* @__PURE__ */ Promise.resolve();
let Rr = null;
function Us(e) {
  const t = Rr || Ds;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Oa(e) {
  let t = Nt + 1, n = et.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = et[r], o = nr(i);
    o < e || o === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Gi(e) {
  if (!(e.flags & 1)) {
    const t = nr(e), n = et[et.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= nr(n) ? et.push(e) : et.splice(Oa(t), 0, e), e.flags |= 1, Fs();
  }
}
function Fs() {
  Rr || (Rr = Ds.then($s));
}
function Na(e) {
  if (!Z(e))
    Zt && e.id === -1 ? Zt.splice(wn + 1, 0, e) : e.flags & 1 || (Pn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Pn.push(e[t]);
  Fs();
}
function vo(e, t, n = Nt + 1) {
  for (; n < et.length; n++) {
    const r = et[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      et.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Hs(e) {
  if (Pn.length) {
    const t = [...new Set(Pn)].sort(
      (n, r) => nr(n) - nr(r)
    );
    if (Pn.length = 0, Zt) {
      for (let n = 0; n < t.length; n++)
        Zt.push(t[n]);
      return;
    }
    for (Zt = t, wn = 0; wn < Zt.length; wn++) {
      const n = Zt[wn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Zt = null, wn = 0;
  }
}
const nr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $s(e) {
  try {
    for (Nt = 0; Nt < et.length; Nt++) {
      const t = et[Nt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), lr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Nt < et.length; Nt++) {
      const t = et[Nt];
      t && (t.flags &= -2);
    }
    Nt = -1, et.length = 0, Hs(), Rr = null, (et.length || Pn.length) && $s();
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
function $e(e, t) {
  if (yt === null)
    return e;
  const n = Kr(yt), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, l, u = Ee] = t[i];
    o && (le(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && jt(s), r.push({
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
    u && (Bt(), St(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), zt());
  }
}
function ka(e, t) {
  if (tt) {
    let n = tt.provides;
    const r = tt.parent && tt.parent.provides;
    r === n && (n = tt.provides = Object.create(r)), n[e] = t;
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
const La = /* @__PURE__ */ Symbol.for("v-scx"), Ma = () => Cr(La);
function li(e, t, n) {
  return Vs(e, t, n);
}
function Vs(e, t, n = Ee) {
  const { immediate: r, deep: i, flush: o, once: s } = n, l = Ye({}, n), u = t && r || !t && o !== "post";
  let v;
  if (or) {
    if (o === "sync") {
      const j = Ma();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!u) {
      const j = () => {
      };
      return j.stop = Mt, j.resume = Mt, j.pause = Mt, j;
    }
  }
  const b = tt;
  l.call = (j, ne, W) => St(j, b, ne, W);
  let T = !1;
  o === "post" ? l.scheduler = (j) => {
    st(j, b && b.suspense);
  } : o !== "sync" && (T = !0, l.scheduler = (j, ne) => {
    ne ? j() : Gi(j);
  }), l.augmentJob = (j) => {
    t && (j.flags |= 4), T && (j.flags |= 2, b && (j.id = b.uid, j.i = b));
  };
  const P = wa(e, t, l);
  return or && (v ? v.push(P) : u && P()), P;
}
function Ia(e, t, n) {
  const r = this.proxy, i = Oe(e) ? e.includes(".") ? Bs(r, e) : () => r[e] : e.bind(r, r);
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
      if (n.type !== qt) {
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
      (W, oe) => Jn(
        W,
        t && (Z(t) ? t[oe] : t),
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
  const o = r.shapeFlag & 4 ? Kr(r.component) : r.el, s = i ? null : o, { i: l, r: u } = e, v = t && t.r, b = l.refs === Ee ? l.refs = {} : l.refs, T = l.setupState, P = /* @__PURE__ */ me(T), j = T === Ee ? ds : (W) => Eo(b, W) ? !1 : be(P, W), ne = (W, oe) => !(oe && Eo(b, oe));
  if (v != null && v !== u) {
    if (To(t), Oe(v))
      b[v] = null, j(v) && (T[v] = null);
    else if (/* @__PURE__ */ Ge(v)) {
      const W = t;
      ne(v, W.k) && (v.value = null), W.k && (b[W.k] = null);
    }
  }
  if (le(u))
    lr(u, l, 12, [s, b]);
  else {
    const W = Oe(u), oe = /* @__PURE__ */ Ge(u);
    if (W || oe) {
      const re = () => {
        if (e.f) {
          const z = W ? j(u) ? T[u] : b[u] : ne() || !e.k ? u.value : b[e.k];
          if (i)
            Z(z) && Fi(z, o);
          else if (Z(z))
            z.includes(o) || z.push(o);
          else if (W)
            b[u] = [o], j(u) && (T[u] = b[u]);
          else {
            const I = [o];
            ne(u, e.k) && (u.value = I), e.k && (b[e.k] = I);
          }
        } else W ? (b[u] = s, j(u) && (T[u] = s)) : oe && (ne(u, e.k) && (u.value = s), e.k && (b[e.k] = s));
      };
      if (s) {
        const z = () => {
          re(), Nr.delete(e);
        };
        z.id = -1, Nr.set(e, z), st(z, n);
      } else
        To(e), re();
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
function qs(e, t, n = tt) {
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
function zr(e, t, n = tt, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Bt();
      const l = ar(n), u = St(t, n, e, s);
      return l(), zt(), u;
    });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const Kt = (e) => (t, n = tt) => {
  (!or || e === "sp") && zr(e, (...r) => t(...r), n);
}, ja = Kt("bm"), Ks = Kt("m"), Va = Kt(
  "bu"
), Ba = Kt("u"), Gs = Kt(
  "bum"
), Ys = Kt("um"), za = Kt(
  "sp"
), Wa = Kt("rtg"), qa = Kt("rtc");
function Ka(e, t = tt) {
  zr("ec", e, t);
}
const Ga = /* @__PURE__ */ Symbol.for("v-ndc");
function Ce(e, t, n, r) {
  let i;
  const o = n, s = Z(e);
  if (s || Oe(e)) {
    const l = s && /* @__PURE__ */ hn(e);
    let u = !1, v = !1;
    l && (u = !/* @__PURE__ */ gt(e), v = /* @__PURE__ */ Wt(e), e = jr(e)), i = new Array(e.length);
    for (let b = 0, T = e.length; b < T; b++)
      i[b] = t(
        u ? v ? Mn(Tt(e[b])) : Tt(e[b]) : e[b],
        b,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o);
  } else if (ve(e))
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
  /* @__PURE__ */ Ye(/* @__PURE__ */ Object.create(null), {
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
    $watch: (e) => Ia.bind(e)
  })
), ci = (e, t) => e !== Ee && !e.__isScriptSetup && be(e, t), Ya = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: o, accessCache: s, type: l, appContext: u } = e;
    if (t[0] !== "$") {
      const P = s[t];
      if (P !== void 0)
        switch (P) {
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
        if (i !== Ee && be(i, t))
          return s[t] = 2, i[t];
        if (be(o, t))
          return s[t] = 3, o[t];
        if (n !== Ee && be(n, t))
          return s[t] = 4, n[t];
        Pi && (s[t] = 0);
      }
    }
    const v = Qn[t];
    let b, T;
    if (v)
      return t === "$attrs" && Ke(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (b = l.__cssModules) && (b = b[t])
    )
      return b;
    if (n !== Ee && be(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      T = u.config.globalProperties, be(T, t)
    )
      return T[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return ci(i, t) ? (i[t] = n, !0) : r !== Ee && be(r, t) ? (r[t] = n, !0) : be(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: o, type: s }
  }, l) {
    let u;
    return !!(n[l] || e !== Ee && l[0] !== "$" && be(e, l) || ci(t, l) || be(o, l) || be(r, l) || be(Qn, l) || be(i.config.globalProperties, l) || (u = s.__cssModules) && u[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : be(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
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
    beforeMount: T,
    mounted: P,
    beforeUpdate: j,
    updated: ne,
    activated: W,
    deactivated: oe,
    beforeDestroy: re,
    beforeUnmount: z,
    destroyed: I,
    unmounted: V,
    render: ce,
    renderTracked: Re,
    renderTriggered: xe,
    errorCaptured: Ue,
    serverPrefetch: ye,
    // public API
    expose: Pe,
    inheritAttrs: Xe,
    // assets
    components: nt,
    directives: Ve,
    filters: ht
  } = t;
  if (v && Ja(v, r, null), s)
    for (const de in s) {
      const se = s[de];
      le(se) && (r[de] = se.bind(n));
    }
  if (i) {
    const de = i.call(n, n);
    ve(de) && (e.data = /* @__PURE__ */ fn(de));
  }
  if (Pi = !0, o)
    for (const de in o) {
      const se = o[de], Fe = le(se) ? se.bind(n, n) : le(se.get) ? se.get.bind(n, n) : Mt, at = !le(se) && le(se.set) ? se.set.bind(n) : Mt, ke = ae({
        get: Fe,
        set: at
      });
      Object.defineProperty(r, de, {
        enumerable: !0,
        configurable: !0,
        get: () => ke.value,
        set: (Be) => ke.value = Be
      });
    }
  if (l)
    for (const de in l)
      Xs(l[de], r, n, de);
  if (u) {
    const de = le(u) ? u.call(n) : u;
    Reflect.ownKeys(de).forEach((se) => {
      ka(se, de[se]);
    });
  }
  b && Co(b, e, "c");
  function Ae(de, se) {
    Z(se) ? se.forEach((Fe) => de(Fe.bind(n))) : se && de(se.bind(n));
  }
  if (Ae(ja, T), Ae(Ks, P), Ae(Va, j), Ae(Ba, ne), Ae(Fa, W), Ae(Ha, oe), Ae(Ka, Ue), Ae(qa, Re), Ae(Wa, xe), Ae(Gs, z), Ae(Ys, V), Ae(za, ye), Z(Pe))
    if (Pe.length) {
      const de = e.exposed || (e.exposed = {});
      Pe.forEach((se) => {
        Object.defineProperty(de, se, {
          get: () => n[se],
          set: (Fe) => n[se] = Fe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === Mt && (e.render = ce), Xe != null && (e.inheritAttrs = Xe), nt && (e.components = nt), Ve && (e.directives = Ve), ye && Ws(e);
}
function Ja(e, t, n = Mt) {
  Z(e) && (e = ki(e));
  for (const r in e) {
    const i = e[r];
    let o;
    ve(i) ? "default" in i ? o = Cr(
      i.from || r,
      i.default,
      !0
    ) : o = Cr(i.from || r) : o = Cr(i), /* @__PURE__ */ Ge(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[r] = o;
  }
}
function Co(e, t, n) {
  St(
    Z(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Xs(e, t, n, r) {
  let i = r.includes(".") ? Bs(n, r) : () => n[r];
  if (Oe(e)) {
    const o = t[e];
    le(o) && li(i, o);
  } else if (le(e))
    li(i, e.bind(n));
  else if (ve(e))
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
  ), Pr(u, t, s)), ve(t) && o.set(t, u), u;
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
  beforeCreate: Qe,
  created: Qe,
  beforeMount: Qe,
  mounted: Qe,
  beforeUpdate: Qe,
  updated: Qe,
  beforeDestroy: Qe,
  beforeUnmount: Qe,
  destroyed: Qe,
  unmounted: Qe,
  activated: Qe,
  deactivated: Qe,
  errorCaptured: Qe,
  serverPrefetch: Qe,
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
    return Ye(
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
function Qe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wn(e, t) {
  return e ? Ye(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ao(e, t) {
  return e ? Z(e) && Z(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ye(
    /* @__PURE__ */ Object.create(null),
    So(e),
    So(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ye(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Qe(e[r], t[r]);
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
    le(r) || (r = Ye({}, r)), i != null && !ve(i) && (i = null);
    const o = Zs(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const v = o.app = {
      _uid: tc++,
      _component: r,
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
      use(b, ...T) {
        return s.has(b) || (b && le(b.install) ? (s.add(b), b.install(v, ...T)) : le(b) && (s.add(b), b(v, ...T))), v;
      },
      mixin(b) {
        return o.mixins.includes(b) || o.mixins.push(b), v;
      },
      component(b, T) {
        return T ? (o.components[b] = T, v) : o.components[b];
      },
      directive(b, T) {
        return T ? (o.directives[b] = T, v) : o.directives[b];
      },
      mount(b, T, P) {
        if (!u) {
          const j = v._ceVNode || Vt(r, i);
          return j.appContext = o, P === !0 ? P = "svg" : P === !1 && (P = void 0), e(j, b, P), u = !0, v._container = b, b.__vue_app__ = v, Kr(j.component);
        }
      },
      onUnmount(b) {
        l.push(b);
      },
      unmount() {
        u && (St(
          l,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(b, T) {
        return o.provides[b] = T, v;
      },
      runWithContext(b) {
        const T = kn;
        kn = v;
        try {
          return b();
        } finally {
          kn = T;
        }
      }
    };
    return v;
  };
}
let kn = null;
const rc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${vt(t)}Modifiers`] || e[`${yn(t)}Modifiers`];
function ic(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ee;
  let i = n;
  const o = t.startsWith("update:"), s = o && rc(r, t.slice(7));
  s && (s.trim && (i = n.map((b) => Oe(b) ? b.trim() : b)), s.number && (i = i.map(Hr)));
  let l, u = r[l = ni(t)] || // also try camelCase event handler (#2249)
  r[l = ni(vt(t))];
  !u && o && (u = r[l = ni(yn(t))]), u && St(
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
    e.emitted[l] = !0, St(
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
      b && (l = !0, Ye(s, b));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !l ? (ve(e) && r.set(e, null), null) : (Z(o) ? o.forEach((u) => s[u] = null) : Ye(s, o), ve(e) && r.set(e, s), s);
}
function Wr(e, t) {
  return !e || !Dr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), be(e, t[0].toLowerCase() + t.slice(1)) || be(e, yn(t)) || be(e, t));
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
    props: T,
    data: P,
    setupState: j,
    ctx: ne,
    inheritAttrs: W
  } = e, oe = Or(e);
  let re, z;
  try {
    if (n.shapeFlag & 4) {
      const V = i || r, ce = V;
      re = kt(
        v.call(
          ce,
          V,
          b,
          T,
          j,
          P,
          ne
        )
      ), z = l;
    } else {
      const V = t;
      re = kt(
        V.length > 1 ? V(
          T,
          { attrs: l, slots: s, emit: u }
        ) : V(
          T,
          null
        )
      ), z = t.props ? l : sc(l);
    }
  } catch (V) {
    mn.length = 0, Vr(V, e, 1), re = Vt(qt);
  }
  let I = re;
  if (z && W !== !1) {
    const V = Object.keys(z), { shapeFlag: ce } = I;
    V.length && ce & 7 && (o && V.some(Ur) && (z = lc(
      z,
      o
    )), I = In(I, z, !1, !0));
  }
  if (n.dirs && (I = In(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const V = Br(I.type) && zs(I) || I;
    Yi(V, n.transition);
  }
  return re = I, Or(oe), re;
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
      for (let T = 0; T < b.length; T++) {
        const P = b[T];
        if (el(s, r, P) && !Wr(v, P))
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
  return n === "style" && ve(r) && ve(i) ? !en(r, i) : r !== i;
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
  } = e, l = /* @__PURE__ */ me(i), [u] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const b = e.vnode.dynamicProps;
      for (let T = 0; T < b.length; T++) {
        let P = b[T];
        if (Wr(e.emitsOptions, P))
          continue;
        const j = t[P];
        if (u)
          if (be(o, P))
            j !== o[P] && (o[P] = j, v = !0);
          else {
            const ne = vt(P);
            i[ne] = Li(
              u,
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
    for (const T in l)
      (!t || // for camelCase
      !be(t, T) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((b = yn(T)) === T || !be(t, b))) && (u ? n && // for camelCase
      (n[T] !== void 0 || // for kebab-case
      n[b] !== void 0) && (i[T] = Li(
        u,
        l,
        T,
        void 0,
        e,
        !0
      )) : delete i[T]);
    if (o !== l)
      for (const T in o)
        (!t || !be(t, T)) && (delete o[T], v = !0);
  }
  v && $t(e.attrs, "set", "");
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
      i && be(i, b = vt(u)) ? !o || !o.includes(b) ? n[b] = v : (l || (l = {}))[b] = v : Wr(e.emitsOptions, u) || (!(u in r) || v !== r[u]) && (r[u] = v, s = !0);
    }
  if (o) {
    const u = /* @__PURE__ */ me(n), v = l || Ee;
    for (let b = 0; b < o.length; b++) {
      const T = o[b];
      n[T] = Li(
        i,
        u,
        T,
        v[T],
        e,
        !be(v, T)
      );
    }
  }
  return s;
}
function Li(e, t, n, r, i, o) {
  const s = e[n];
  if (s != null) {
    const l = be(s, "default");
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
    const b = (T) => {
      u = !0;
      const [P, j] = ol(T, t, !0);
      Ye(s, P), j && l.push(...j);
    };
    !n && t.mixins.length && t.mixins.forEach(b), e.extends && b(e.extends), e.mixins && e.mixins.forEach(b);
  }
  if (!o && !u)
    return ve(e) && r.set(e, On), On;
  if (Z(o))
    for (let b = 0; b < o.length; b++) {
      const T = vt(o[b]);
      Oo(T) && (s[T] = Ee);
    }
  else if (o)
    for (const b in o) {
      const T = vt(b);
      if (Oo(T)) {
        const P = o[b], j = s[T] = Z(P) || le(P) ? { type: P } : Ye({}, P), ne = j.type;
        let W = !1, oe = !0;
        if (Z(ne))
          for (let re = 0; re < ne.length; ++re) {
            const z = ne[re], I = le(z) && z.name;
            if (I === "Boolean") {
              W = !0;
              break;
            } else I === "String" && (oe = !1);
          }
        else
          W = le(ne) && ne.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = W, j[
          1
          /* shouldCastTrue */
        ] = oe, (W || be(j, "default")) && l.push(T);
      }
    }
  const v = [s, l];
  return ve(e) && r.set(e, v), v;
}
function Oo(e) {
  return e[0] !== "$" && !Gn(e);
}
const Ji = (e) => e === "_" || e === "_ctx" || e === "$stable", Zi = (e) => Z(e) ? e.map(kt) : [kt(e)], pc = (e, t, n) => {
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
  let o = !0, s = Ee;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : al(i, t, n) : (o = !t.$stable, sl(t, i)), s = t;
  } else t && (ll(e, t), s = { default: 1 });
  if (o)
    for (const l in i)
      !Ji(l) && s[l] == null && delete i[l];
}, st = vc;
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
    parentNode: T,
    nextSibling: P,
    setScopeId: j = Mt,
    insertStaticContent: ne
  } = e, W = (f, h, _, R = null, E = null, x = null, L = void 0, M = null, k = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !$n(f, h) && (R = mt(f), Be(f, E, x, !0), f = null), h.patchFlag === -2 && (k = !1, h.dynamicChildren = null);
    const { type: C, ref: K, shapeFlag: H } = h;
    switch (C) {
      case qr:
        oe(f, h, _, R);
        break;
      case qt:
        re(f, h, _, R);
        break;
      case fi:
        f == null && z(h, _, R, L);
        break;
      case ue:
        nt(
          f,
          h,
          _,
          R,
          E,
          x,
          L,
          M,
          k
        );
        break;
      default:
        H & 1 ? ce(
          f,
          h,
          _,
          R,
          E,
          x,
          L,
          M,
          k
        ) : H & 6 ? Ve(
          f,
          h,
          _,
          R,
          E,
          x,
          L,
          M,
          k
        ) : (H & 64 || H & 128) && C.process(
          f,
          h,
          _,
          R,
          E,
          x,
          L,
          M,
          k,
          ze
        );
    }
    K != null && E ? Jn(K, f && f.ref, x, h || f, !h) : K == null && f && f.ref != null && Jn(f.ref, null, x, f, !0);
  }, oe = (f, h, _, R) => {
    if (f == null)
      r(
        h.el = l(h.children),
        _,
        R
      );
    else {
      const E = h.el = f.el;
      h.children !== f.children && v(E, h.children);
    }
  }, re = (f, h, _, R) => {
    f == null ? r(
      h.el = u(h.children || ""),
      _,
      R
    ) : h.el = f.el;
  }, z = (f, h, _, R) => {
    [f.el, f.anchor] = ne(
      f.children,
      h,
      _,
      R,
      f.el,
      f.anchor
    );
  }, I = ({ el: f, anchor: h }, _, R) => {
    let E;
    for (; f && f !== h; )
      E = P(f), r(f, _, R), f = E;
    r(h, _, R);
  }, V = ({ el: f, anchor: h }) => {
    let _;
    for (; f && f !== h; )
      _ = P(f), i(f), f = _;
    i(h);
  }, ce = (f, h, _, R, E, x, L, M, k) => {
    if (h.type === "svg" ? L = "svg" : h.type === "math" && (L = "mathml"), f == null)
      Re(
        h,
        _,
        R,
        E,
        x,
        L,
        M,
        k
      );
    else {
      const C = f.el && f.el._isVueCE ? f.el : null;
      try {
        C && C._beginPatch(), ye(
          f,
          h,
          E,
          x,
          L,
          M,
          k
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, Re = (f, h, _, R, E, x, L, M) => {
    let k, C;
    const { props: K, shapeFlag: H, transition: q, dirs: X } = f;
    if (k = f.el = s(
      f.type,
      x,
      K && K.is,
      K
    ), H & 8 ? b(k, f.children) : H & 16 && Ue(
      f.children,
      k,
      null,
      R,
      E,
      ui(f, x),
      L,
      M
    ), X && on(f, null, R, "created"), xe(k, f, f.scopeId, L, R), K) {
      for (const O in K)
        O !== "value" && !Gn(O) && o(k, O, null, K[O], x, R);
      "value" in K && o(k, "value", null, K.value, x), (C = K.onVnodeBeforeMount) && Ot(C, R, f);
    }
    X && on(f, null, R, "beforeMount");
    const Q = gc(E, q);
    Q && q.beforeEnter(k), r(k, h, _), ((C = K && K.onVnodeMounted) || Q || X) && st(() => {
      C && Ot(C, R, f), Q && q.enter(k), X && on(f, null, R, "mounted");
    }, E);
  }, xe = (f, h, _, R, E) => {
    if (_ && j(f, _), R)
      for (let x = 0; x < R.length; x++)
        j(f, R[x]);
    if (E) {
      let x = E.subTree;
      if (h === x || dl(x.type) && (x.ssContent === h || x.ssFallback === h)) {
        const L = E.vnode;
        xe(
          f,
          L,
          L.scopeId,
          L.slotScopeIds,
          E.parent
        );
      }
    }
  }, Ue = (f, h, _, R, E, x, L, M, k = 0) => {
    for (let C = k; C < f.length; C++) {
      const K = f[C] = M ? Ht(f[C]) : kt(f[C]);
      W(
        null,
        K,
        h,
        _,
        R,
        E,
        x,
        L,
        M
      );
    }
  }, ye = (f, h, _, R, E, x, L) => {
    const M = h.el = f.el;
    let { patchFlag: k, dynamicChildren: C, dirs: K } = h;
    k |= f.patchFlag & 16;
    const H = f.props || Ee, q = h.props || Ee;
    let X;
    if (_ && sn(_, !1), (X = q.onVnodeBeforeUpdate) && Ot(X, _, h, f), K && on(h, f, _, "beforeUpdate"), _ && sn(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    C && (!f.dynamicChildren || f.dynamicChildren.length !== C.length) && (k = 0, L = !1, C = null), (H.innerHTML && q.innerHTML == null || H.textContent && q.textContent == null) && b(M, ""), C ? Pe(
      f.dynamicChildren,
      C,
      M,
      _,
      R,
      ui(h, E),
      x
    ) : L || se(
      f,
      h,
      M,
      null,
      _,
      R,
      ui(h, E),
      x,
      !1
    ), k > 0) {
      if (k & 16)
        Xe(M, H, q, _, E);
      else if (k & 2 && H.class !== q.class && o(M, "class", null, q.class, E), k & 4 && o(M, "style", H.style, q.style, E), k & 8) {
        const Q = h.dynamicProps;
        for (let O = 0; O < Q.length; O++) {
          const N = Q[O], $ = H[N], J = q[N];
          (J !== $ || N === "value") && o(M, N, $, J, E, _);
        }
      }
      k & 1 && f.children !== h.children && b(M, h.children);
    } else !L && C == null && Xe(M, H, q, _, E);
    ((X = q.onVnodeUpdated) || K) && st(() => {
      X && Ot(X, _, h, f), K && on(h, f, _, "updated");
    }, R);
  }, Pe = (f, h, _, R, E, x, L) => {
    for (let M = 0; M < h.length; M++) {
      const k = f[M], C = h[M], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        k.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (k.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$n(k, C) || // - In the case of a component, it could contain anything.
        k.shapeFlag & 198) ? T(k.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      W(
        k,
        C,
        K,
        null,
        R,
        E,
        x,
        L,
        !0
      );
    }
  }, Xe = (f, h, _, R, E) => {
    if (h !== _) {
      if (h !== Ee)
        for (const x in h)
          !Gn(x) && !(x in _) && o(
            f,
            x,
            h[x],
            null,
            E,
            R
          );
      for (const x in _) {
        if (Gn(x)) continue;
        const L = _[x], M = h[x];
        L !== M && x !== "value" && o(f, x, M, L, E, R);
      }
      "value" in _ && o(f, "value", h.value, _.value, E);
    }
  }, nt = (f, h, _, R, E, x, L, M, k) => {
    const C = h.el = f ? f.el : l(""), K = h.anchor = f ? f.anchor : l("");
    let { patchFlag: H, dynamicChildren: q, slotScopeIds: X } = h;
    X && (M = M ? M.concat(X) : X), f == null ? (r(C, _, R), r(K, _, R), Ue(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      _,
      K,
      E,
      x,
      L,
      M,
      k
    )) : H > 0 && H & 64 && q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === q.length ? (Pe(
      f.dynamicChildren,
      q,
      _,
      E,
      x,
      L,
      M
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || E && h === E.subTree) && cl(
      f,
      h,
      !0
      /* shallow */
    )) : se(
      f,
      h,
      _,
      K,
      E,
      x,
      L,
      M,
      k
    );
  }, Ve = (f, h, _, R, E, x, L, M, k) => {
    h.slotScopeIds = M, f == null ? h.shapeFlag & 512 ? E.ctx.activate(
      h,
      _,
      R,
      L,
      k
    ) : ht(
      h,
      _,
      R,
      E,
      x,
      L,
      k
    ) : Me(f, h, k);
  }, ht = (f, h, _, R, E, x, L) => {
    const M = f.component = wc(
      f,
      R,
      E
    );
    if (Xi(f) && (M.ctx.renderer = ze), Oc(M, !1, L), M.asyncDep) {
      if (E && E.registerDep(M, Ae, L), !f.el) {
        const k = M.subTree = Vt(qt);
        re(null, k, h, _), f.placeholder = k.el;
      }
    } else
      Ae(
        M,
        f,
        h,
        _,
        E,
        x,
        L
      );
  }, Me = (f, h, _) => {
    const R = h.component = f.component;
    if (ac(f, h, _))
      if (R.asyncDep && !R.asyncResolved) {
        de(R, h, _);
        return;
      } else
        R.next = h, R.update();
    else
      h.el = f.el, R.vnode = h;
  }, Ae = (f, h, _, R, E, x, L) => {
    const M = () => {
      if (f.isMounted) {
        let { next: H, bu: q, u: X, parent: Q, vnode: O } = f;
        {
          const A = ul(f);
          if (A) {
            H && (H.el = O.el, de(f, H, L)), A.asyncDep.then(() => {
              st(() => {
                f.isUnmounted || C();
              }, E);
            });
            return;
          }
        }
        let N = H, $;
        sn(f, !1), H ? (H.el = O.el, de(f, H, L)) : H = O, q && Sr(q), ($ = H.props && H.props.onVnodeBeforeUpdate) && Ot($, Q, H, O), sn(f, !0);
        const J = wo(f), ie = f.subTree;
        f.subTree = J, W(
          ie,
          J,
          // parent may have changed if it's in a teleport
          T(ie.el),
          // anchor may have changed if it's in a fragment
          mt(ie),
          f,
          E,
          x
        ), H.el = J.el, N === null && cc(f, J.el), X && st(X, E), ($ = H.props && H.props.onVnodeUpdated) && st(
          () => Ot($, Q, H, O),
          E
        );
      } else {
        let H;
        const { el: q, props: X } = h, { bm: Q, m: O, parent: N, root: $, type: J } = f, ie = Zn(h);
        sn(f, !1), Q && Sr(Q), !ie && (H = X && X.onVnodeBeforeMount) && Ot(H, N, h), sn(f, !0);
        {
          $.ce && $.ce._hasShadowRoot() && $.ce._injectChildStyle(
            J,
            f.parent ? f.parent.type : void 0
          );
          const A = f.subTree = wo(f);
          W(
            null,
            A,
            _,
            R,
            f,
            E,
            x
          ), h.el = A.el;
        }
        if (O && st(O, E), !ie && (H = X && X.onVnodeMounted)) {
          const A = h;
          st(
            () => Ot(H, N, A),
            E
          );
        }
        (h.shapeFlag & 256 || N && Zn(N.vnode) && N.vnode.shapeFlag & 256) && f.a && st(f.a, E), f.isMounted = !0, h = _ = R = null;
      }
    };
    f.scope.on();
    const k = f.effect = new Es(M);
    f.scope.off();
    const C = f.update = k.run.bind(k), K = f.job = k.runIfDirty.bind(k);
    K.i = f, K.id = f.uid, k.scheduler = () => Gi(K), sn(f, !0), C();
  }, de = (f, h, _) => {
    h.component = f;
    const R = f.vnode.props;
    f.vnode = h, f.next = null, fc(f, h.props, R, _), mc(f, h.children, _), Bt(), vo(f), zt();
  }, se = (f, h, _, R, E, x, L, M, k = !1) => {
    const C = f && f.children, K = f ? f.shapeFlag : 0, H = h.children, { patchFlag: q, shapeFlag: X } = h;
    if (q > 0) {
      if (q & 128) {
        at(
          C,
          H,
          _,
          R,
          E,
          x,
          L,
          M,
          k
        );
        return;
      } else if (q & 256) {
        Fe(
          C,
          H,
          _,
          R,
          E,
          x,
          L,
          M,
          k
        );
        return;
      }
    }
    X & 8 ? (K & 16 && He(C, E, x), H !== C && b(_, H)) : K & 16 ? X & 16 ? at(
      C,
      H,
      _,
      R,
      E,
      x,
      L,
      M,
      k
    ) : He(C, E, x, !0) : (K & 8 && b(_, ""), X & 16 && Ue(
      H,
      _,
      R,
      E,
      x,
      L,
      M,
      k
    ));
  }, Fe = (f, h, _, R, E, x, L, M, k) => {
    f = f || On, h = h || On;
    const C = f.length, K = h.length, H = Math.min(C, K);
    let q;
    for (q = 0; q < H; q++) {
      const X = h[q] = k ? Ht(h[q]) : kt(h[q]);
      W(
        f[q],
        X,
        _,
        null,
        E,
        x,
        L,
        M,
        k
      );
    }
    C > K ? He(
      f,
      E,
      x,
      !0,
      !1,
      H
    ) : Ue(
      h,
      _,
      R,
      E,
      x,
      L,
      M,
      k,
      H
    );
  }, at = (f, h, _, R, E, x, L, M, k) => {
    let C = 0;
    const K = h.length;
    let H = f.length - 1, q = K - 1;
    for (; C <= H && C <= q; ) {
      const X = f[C], Q = h[C] = k ? Ht(h[C]) : kt(h[C]);
      if ($n(X, Q))
        W(
          X,
          Q,
          _,
          null,
          E,
          x,
          L,
          M,
          k
        );
      else
        break;
      C++;
    }
    for (; C <= H && C <= q; ) {
      const X = f[H], Q = h[q] = k ? Ht(h[q]) : kt(h[q]);
      if ($n(X, Q))
        W(
          X,
          Q,
          _,
          null,
          E,
          x,
          L,
          M,
          k
        );
      else
        break;
      H--, q--;
    }
    if (C > H) {
      if (C <= q) {
        const X = q + 1, Q = X < K ? h[X].el : R;
        for (; C <= q; )
          W(
            null,
            h[C] = k ? Ht(h[C]) : kt(h[C]),
            _,
            Q,
            E,
            x,
            L,
            M,
            k
          ), C++;
      }
    } else if (C > q)
      for (; C <= H; )
        Be(f[C], E, x, !0), C++;
    else {
      const X = C, Q = C, O = /* @__PURE__ */ new Map();
      for (C = Q; C <= q; C++) {
        const ee = h[C] = k ? Ht(h[C]) : kt(h[C]);
        ee.key != null && O.set(ee.key, C);
      }
      let N, $ = 0;
      const J = q - Q + 1;
      let ie = !1, A = 0;
      const S = new Array(J);
      for (C = 0; C < J; C++) S[C] = 0;
      for (C = X; C <= H; C++) {
        const ee = f[C];
        if ($ >= J) {
          Be(ee, E, x, !0);
          continue;
        }
        let ge;
        if (ee.key != null)
          ge = O.get(ee.key);
        else
          for (N = Q; N <= q; N++)
            if (S[N - Q] === 0 && $n(ee, h[N])) {
              ge = N;
              break;
            }
        ge === void 0 ? Be(ee, E, x, !0) : (S[ge - Q] = C + 1, ge >= A ? A = ge : ie = !0, W(
          ee,
          h[ge],
          _,
          null,
          E,
          x,
          L,
          M,
          k
        ), $++);
      }
      const p = ie ? _c(S) : On;
      for (N = p.length - 1, C = J - 1; C >= 0; C--) {
        const ee = Q + C, ge = h[ee], Ie = h[ee + 1], Gt = ee + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ie.el || fl(Ie)
        ) : R;
        S[C] === 0 ? W(
          null,
          ge,
          _,
          Gt,
          E,
          x,
          L,
          M,
          k
        ) : ie && (N < 0 || C !== p[N] ? ke(ge, _, Gt, 2) : N--);
      }
    }
  }, ke = (f, h, _, R, E = null) => {
    const { el: x, type: L, transition: M, children: k, shapeFlag: C } = f;
    if (C & 6) {
      ke(f.component.subTree, h, _, R);
      return;
    }
    if (C & 128) {
      f.suspense.move(h, _, R);
      return;
    }
    if (C & 64) {
      L.move(f, h, _, ze);
      return;
    }
    if (L === ue) {
      r(x, h, _);
      for (let H = 0; H < k.length; H++)
        ke(k[H], h, _, R);
      r(f.anchor, h, _);
      return;
    }
    if (L === fi) {
      I(f, h, _);
      return;
    }
    if (R !== 2 && C & 1 && M)
      if (R === 0)
        M.persisted && !x[ai] ? r(x, h, _) : (M.beforeEnter(x), r(x, h, _), st(() => M.enter(x), E));
      else {
        const { leave: H, delayLeave: q, afterLeave: X } = M, Q = () => {
          f.ctx.isUnmounted ? i(x) : r(x, h, _);
        }, O = () => {
          const N = x._isLeaving || !!x[ai];
          x._isLeaving && x[ai](
            !0
            /* cancelled */
          ), M.persisted && !N ? Q() : H(x, () => {
            Q(), X && X();
          });
        };
        q ? q(x, Q, O) : O();
      }
    else
      r(x, h, _);
  }, Be = (f, h, _, R = !1, E = !1) => {
    const {
      type: x,
      props: L,
      ref: M,
      children: k,
      dynamicChildren: C,
      shapeFlag: K,
      patchFlag: H,
      dirs: q,
      cacheIndex: X,
      memo: Q
    } = f;
    if (H === -2 && (E = !1), M != null && (Bt(), Jn(M, null, _, f, !0), zt()), X != null && (h.renderCache[X] = void 0), K & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const O = K & 1 && q, N = !Zn(f);
    let $;
    if (N && ($ = L && L.onVnodeBeforeUnmount) && Ot($, h, f), K & 6)
      Ct(f.component, _, R);
    else {
      if (K & 128) {
        f.suspense.unmount(_, R);
        return;
      }
      O && on(f, null, h, "beforeUnmount"), K & 64 ? f.type.remove(
        f,
        h,
        _,
        ze,
        R
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== ue || H > 0 && H & 64) ? He(
        C,
        h,
        _,
        !1,
        !0
      ) : (x === ue && H & 384 || !E && K & 16) && He(k, h, _), R && ct(f);
    }
    const J = Q != null && X == null;
    (N && ($ = L && L.onVnodeUnmounted) || O || J) && st(() => {
      $ && Ot($, h, f), O && on(f, null, h, "unmounted"), J && (f.el = null);
    }, _);
  }, ct = (f) => {
    const { type: h, el: _, anchor: R, transition: E } = f;
    if (h === ue) {
      fe(_, R);
      return;
    }
    if (h === fi) {
      V(f);
      return;
    }
    const x = () => {
      i(_), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (f.shapeFlag & 1 && E && !E.persisted) {
      const { leave: L, delayLeave: M } = E, k = () => L(_, x);
      M ? M(f.el, x, k) : k();
    } else
      x();
  }, fe = (f, h) => {
    let _;
    for (; f !== h; )
      _ = P(f), i(f), f = _;
    i(h);
  }, Ct = (f, h, _) => {
    const { bum: R, scope: E, job: x, subTree: L, um: M, m: k, a: C } = f;
    No(k), No(C), R && Sr(R), E.stop(), x && (x.flags |= 8, Be(L, f, h, _)), M && st(M, h), st(() => {
      f.isUnmounted = !0;
    }, h);
  }, He = (f, h, _, R = !1, E = !1, x = 0) => {
    for (let L = x; L < f.length; L++)
      Be(f[L], h, _, R, E);
  }, mt = (f) => {
    if (f.shapeFlag & 6)
      return mt(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const h = P(f.anchor || f.el), _ = h && h[Da];
    return _ ? P(_) : h;
  };
  let rt = !1;
  const xt = (f, h, _) => {
    let R;
    f == null ? h._vnode && (Be(h._vnode, null, null, !0), R = h._vnode.component) : W(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      _
    ), h._vnode = f, rt || (rt = !0, vo(R), Hs(), rt = !1);
  }, ze = {
    p: W,
    um: Be,
    m: ke,
    r: ct,
    mt: ht,
    mc: Ue,
    pc: se,
    pbc: Pe,
    n: mt,
    o: e
  };
  return {
    render: xt,
    hydrate: void 0,
    createApp: nc(xt)
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
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = Ht(i[o]), l.el = s.el), !n && l.patchFlag !== -2 && cl(s, l)), l.type === qr && (l.patchFlag === -1 && (l = i[o] = Ht(l)), l.el = s.el), l.type === qt && !l.el && (l.el = s.el);
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
const ue = /* @__PURE__ */ Symbol.for("v-fgt"), qr = /* @__PURE__ */ Symbol.for("v-txt"), qt = /* @__PURE__ */ Symbol.for("v-cmt"), fi = /* @__PURE__ */ Symbol.for("v-stc"), mn = [];
let pt = null;
function U(e = !1) {
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
function F(e, t, n, r, i, o) {
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
    Vt(
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
}) => (typeof e == "number" && (e = "" + e), e != null ? Oe(e) || /* @__PURE__ */ Ge(e) || le(e) ? { i: yt, r: e, k: t, f: !!n } : e : null);
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
  return l ? (kr(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= Oe(n) ? 8 : 16), rr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  pt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && pt.push(u), u;
}
const Vt = Tc;
function Tc(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === Ga) && (e = qt), ml(e)) {
    const l = In(
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
    l && !Oe(l) && (t.class = Nn(l)), ve(u) && (/* @__PURE__ */ Ki(u) && !Z(u) && (u = Ye({}, u)), t.style = $i(u));
  }
  const s = Oe(e) ? 1 : dl(e) ? 128 : Br(e) ? 64 : ve(e) ? 4 : le(e) ? 2 : 0;
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
  return e ? /* @__PURE__ */ Ki(e) || rl(e) ? Ye({}, e) : e : null;
}
function In(e, t, n = !1, r = !1) {
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
    ssContent: e.ssContent && In(e.ssContent),
    ssFallback: e.ssFallback && In(e.ssFallback),
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
function he(e = " ", t = 0) {
  return Vt(qr, null, e, t);
}
function _e(e = "", t = !1) {
  return t ? (U(), Ec(qt, null, e)) : Vt(qt, null, e);
}
function kt(e) {
  return e == null || typeof e == "boolean" ? Vt(qt) : Z(e) ? Vt(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ml(e) ? Ht(e) : Vt(qr, null, String(e));
}
function Ht(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : In(e);
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
    t = String(t), r & 64 ? (n = 16, t = [he(t)]) : n = 8;
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
function Ot(e, t, n, r = null) {
  St(e, t, 7, [
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
    propsDefaults: Ee,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ee,
    data: Ee,
    props: Ee,
    attrs: Ee,
    slots: Ee,
    refs: Ee,
    setupState: Ee,
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
let tt = null;
const Rc = () => tt || yt;
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
    (n) => tt = n
  ), ir = t(
    "__VUE_SSR_SETTERS__",
    (n) => or = n
  );
}
const ar = (e) => {
  const t = tt;
  return Lr(e), e.scope.on(), () => {
    e.scope.off(), Lr(t);
  };
}, ko = () => {
  tt && tt.scope.off(), Lr(null);
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
    Bt();
    const i = e.setupContext = r.length > 1 ? kc(e) : null, o = ar(e), s = lr(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = ps(s);
    if (zt(), o(), (l || e.sp) && !Zn(e) && Ws(e), l) {
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
  le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ve(t) && (e.setupState = Is(t)), gl(e);
}
function gl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Mt);
  {
    const i = ar(e);
    Bt();
    try {
      Xa(e);
    } finally {
      zt(), i();
    }
  }
}
const Pc = {
  get(e, t) {
    return Ke(e, "get", ""), e[t];
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
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Is(_a(e.exposed)), {
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
const ae = (e, t) => /* @__PURE__ */ xa(e, t, or), Mc = "3.5.42";
let Mi;
const Mo = typeof window < "u" && window.trustedTypes;
if (Mo)
  try {
    Mi = /* @__PURE__ */ Mo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const _l = Mi ? (e) => Mi.createHTML(e) : (e) => e, Ic = "http://www.w3.org/2000/svg", Dc = "http://www.w3.org/1998/Math/MathML", Ft = typeof document < "u" ? document : null, Io = Ft && /* @__PURE__ */ Ft.createElement("template"), Uc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? Ft.createElementNS(Ic, e) : t === "mathml" ? Ft.createElementNS(Dc, e) : n ? Ft.createElement(e, { is: n }) : Ft.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => Ft.createTextNode(e),
  createComment: (e) => Ft.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ft.querySelector(e),
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
      Io.innerHTML = _l(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Io.content;
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
  const r = e.style, i = Oe(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (Oe(t))
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
        !Oe(t) && t ? t[s] : void 0,
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
  let r = vt(t);
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
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Oe(r) && n === r;
}
const Fo = "http://www.w3.org/1999/xlink";
function Ho(e, t, n, r, i, o = Xl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Fo, t.slice(6, t.length)) : e.setAttributeNS(Fo, t, n) : n == null || o && !gs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : It(n) ? String(n) : n
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
        v && St(
          v,
          t,
          5,
          l
        );
      }
    } else
      St(
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
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Oe(r))) ? $o(e, vt(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ho(e, t, r, s));
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
  return Vo(t) && Oe(n) ? !1 : t in e;
}
function nu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = vt(t);
  return Array.isArray(n) ? n.some((i) => vt(i) === r) : Object.keys(n).some((i) => vt(i) === r);
}
const Mr = (e) => {
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
`))), e[dn] = Mr(i);
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
    if (e[dn] = Mr(s), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Hr(e.value) : e.value, u = t ?? "";
    if (l === u)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === u) || (e.value = u);
  }
}, Ze = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, un(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => n ? Hr(Ir(u)) : Ir(u)
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
    }), e[dn] = Mr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    zo(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[dn] = Mr(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !iu(t, n[1], n[0])) && zo(e, t);
  }
};
function iu(e, t, n) {
  if (!n || Z(e)) return en(e, t);
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
      const s = e.options[i], l = Ir(s);
      if (n)
        if (r) {
          const u = typeof l;
          u === "string" || u === "number" ? s.selected = t.some((v) => String(v) === String(l)) : s.selected = Zl(t, l) > -1;
        } else
          s.selected = t.has(l);
      else if (en(Ir(s), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ir(e) {
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
}, lu = /* @__PURE__ */ Ye({ patchProp: eu }, Uc);
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
  return Oe(e) ? document.querySelector(e) : e;
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
let De = Object.freeze, je = Object.seal, Rn = Object.create, El = typeof Reflect < "u" && Reflect, Ii = El.apply, Di = El.construct;
De || (De = function(t) {
  return t;
});
je || (je = function(t) {
  return t;
});
Ii || (Ii = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    i[o - 2] = arguments[o];
  return t.apply(n, i);
});
Di || (Di = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return new t(...r);
});
const cn = Le(Array.prototype.forEach), Eu = Le(Array.prototype.lastIndexOf), Go = Le(Array.prototype.pop), jn = Le(Array.prototype.push), Tu = Le(Array.prototype.splice), Ln = Array.isArray, Kn = Le(String.prototype.toLowerCase), bi = Le(String.prototype.toString), Yo = Le(String.prototype.match), Vn = Le(String.prototype.replace), Xo = Le(String.prototype.indexOf), Su = Le(String.prototype.trim), Cu = Le(Number.prototype.toString), xu = Le(Boolean.prototype.toString), Jo = typeof BigInt > "u" ? null : Le(BigInt.prototype.toString), Zo = typeof Symbol > "u" ? null : Le(Symbol.prototype.toString), lt = Le(Object.prototype.hasOwnProperty), Bn = Le(Object.prototype.toString), qe = Le(RegExp.prototype.test), ln = Au(TypeError);
function Le(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return Ii(e, t, r);
  };
}
function Au(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Di(e, n);
  };
}
function pe(e, t) {
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
    lt(e, t) || (e[t] = null);
  return e;
}
function dt(e) {
  const t = Rn(null);
  for (const r of vl(e)) {
    var n = bu(r, 2);
    const i = n[0], o = n[1];
    lt(e, i) && (Ln(o) ? t[i] = wu(o) : o && typeof o == "object" && o.constructor === Object ? t[i] = dt(o) : t[i] = o);
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
      const t = e, n = _t(t, "toString");
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
function _t(e, t) {
  for (; e !== null; ) {
    const r = vu(e, t);
    if (r) {
      if (r.get)
        return Le(r.get);
      if (typeof r.value == "function")
        return Le(r.value);
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
    return qe(e, ""), !0;
  } catch {
    return !1;
  }
}
const Qo = De(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), yi = De(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), gi = De(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Nu = De(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), _i = De(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Pu = De(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), es = De(["#text"]), ts = De(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), vi = De(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ns = De(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Tr = De(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ku = je(/{{[\w\W]*|^[\w\W]*}}/g), Lu = je(/<%[\w\W]*|^[\w\W]*%>/g), Mu = je(/\${[\w\W]*/g), Iu = je(/^data-[\-\w.\u00B7-\uFFFF]+$/), Du = je(/^aria-[\-\w]+$/), rs = je(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Uu = je(/^(?:\w+script|data):/i), Fu = je(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = je(/^html$/i), $u = je(/^[a-z][.\w]*(-[.\w]+)+$/i), is = je(/<[/\w!]/g), os = je(/<[/\w]/g), ju = je(/<\/no(script|embed|frames)/i), Vu = je(/\/>/i), ft = {
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
}, Tl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Bu = De(pe({}, Tl)), zu = (function() {
  const e = {};
  return cn(Tl, (t) => {
    e[t] = je(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), De(e);
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
}, Jt = function(t, n, r, i) {
  return lt(t, n) && Ln(t[n]) ? pe(i.base ? dt(i.base) : {}, t[n], i.transform) : r;
}, Ei = function(t, n, r) {
  const i = lt(t, n) ? t[n] : void 0;
  return i && typeof i == "object" ? dt(i) : r();
};
function Sl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wu();
  const t = (D) => Sl(D);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== ft.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const o = e.HTMLTemplateElement, s = e.Node, l = e.Element, u = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const b = e.DOMParser, T = e.trustedTypes, P = l.prototype, j = _t(P, "cloneNode"), ne = _t(P, "remove"), W = _t(P, "nextSibling"), oe = _t(P, "childNodes"), re = _t(P, "parentNode"), z = _t(P, "shadowRoot"), I = _t(P, "attributes"), V = s && s.prototype ? _t(s.prototype, "nodeType") : null, ce = s && s.prototype ? _t(s.prototype, "nodeName") : null, Re = s && s.prototype ? _t(s.prototype, "ownerDocument") : null, xe = function(a) {
    return V ? V(a) : a.nodeType;
  }, Ue = function(a) {
    return ce ? ce(a) : a.nodeName;
  };
  if (typeof o == "function") {
    const D = n.createElement("template");
    D.content && D.content.ownerDocument && (n = D.content.ownerDocument);
  }
  let ye, Pe = "", Xe, nt = !1, Ve = 0;
  const ht = function() {
    if (Ve > 0)
      throw ln('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Me = function(a) {
    ht(), Ve++;
    try {
      return ye.createHTML(a);
    } finally {
      Ve--;
    }
  }, Ae = function(a) {
    ht(), Ve++;
    try {
      return ye.createScriptURL(a);
    } finally {
      Ve--;
    }
  }, de = function() {
    return nt || (Xe = qu(T, i), nt = !0), Xe;
  }, se = n, Fe = se.implementation, at = se.createNodeIterator, ke = se.createDocumentFragment, Be = se.getElementsByTagName, ct = r.importNode;
  let fe = ss();
  t.isSupported = typeof vl == "function" && typeof re == "function" && Fe && Fe.createHTMLDocument !== void 0;
  const Ct = ku, He = Lu, mt = Mu, rt = Iu, xt = Du, ze = Uu, bt = Fu, f = $u;
  let h = rs, _ = null;
  const R = pe({}, [...Qo, ...yi, ...gi, ..._i, ...es]);
  let E = null;
  const x = pe({}, [...ts, ...vi, ...ns, ...Tr]);
  let L = Object.seal(Rn(null, {
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
  })), M = null, k = null;
  const C = Object.seal(Rn(null, {
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
  let K = !0, H = !0, q = !1, X = !0, Q = !1, O = !0, N = !1, $ = !1, J = null, ie = null, A = !1, S = !1, p = !1, ee = !1, ge = !0, Ie = !1;
  const Gt = "user-content-";
  let tn = !0, Dn = !1, Dt = {}, At = null;
  const gn = pe({}, [
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
  const vn = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let wt = null;
  const cr = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Yt = "http://www.w3.org/1998/Math/MathML", nn = "http://www.w3.org/2000/svg", ut = "http://www.w3.org/1999/xhtml";
  let En = ut, Gr = !1, Yr = null;
  const xl = pe({}, [Yt, nn, ut], bi), Qi = De(["mi", "mo", "mn", "ms", "mtext"]);
  let Xr = pe({}, Qi);
  const eo = De(["annotation-xml"]);
  let Jr = pe({}, eo);
  const Al = pe({}, ["title", "style", "font", "a", "script"]);
  let Un = null;
  const wl = ["application/xhtml+xml", "text/html"], Rl = "text/html";
  let Ne = null, Tn = null;
  const Ol = n.createElement("form"), to = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, Zr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Tn && Tn === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = dt(a), Un = // eslint-disable-next-line unicorn/prefer-includes
    wl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? Rl : a.PARSER_MEDIA_TYPE, Ne = Un === "application/xhtml+xml" ? bi : Kn, _ = Jt(a, "ALLOWED_TAGS", R, {
      transform: Ne
    }), E = Jt(a, "ALLOWED_ATTR", x, {
      transform: Ne
    }), Yr = Jt(a, "ALLOWED_NAMESPACES", xl, {
      transform: bi
    }), wt = Jt(a, "ADD_URI_SAFE_ATTR", cr, {
      transform: Ne,
      base: cr
    }), _n = Jt(a, "ADD_DATA_URI_TAGS", vn, {
      transform: Ne,
      base: vn
    }), At = Jt(a, "FORBID_CONTENTS", gn, {
      transform: Ne
    }), M = Jt(a, "FORBID_TAGS", dt({}), {
      transform: Ne
    }), k = Jt(a, "FORBID_ATTR", dt({}), {
      transform: Ne
    }), Dt = lt(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? dt(a.USE_PROFILES) : a.USE_PROFILES : !1, K = a.ALLOW_ARIA_ATTR !== !1, H = a.ALLOW_DATA_ATTR !== !1, q = a.ALLOW_UNKNOWN_PROTOCOLS || !1, X = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = a.SAFE_FOR_TEMPLATES || !1, O = a.SAFE_FOR_XML !== !1, N = a.WHOLE_DOCUMENT || !1, S = a.RETURN_DOM || !1, p = a.RETURN_DOM_FRAGMENT || !1, ee = a.RETURN_TRUSTED_TYPE || !1, A = a.FORCE_BODY || !1, ge = a.SANITIZE_DOM !== !1, Ie = a.SANITIZE_NAMED_PROPS || !1, tn = a.KEEP_CONTENT !== !1, Dn = a.IN_PLACE || !1, h = Ou(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : rs, En = typeof a.NAMESPACE == "string" ? a.NAMESPACE : ut, Xr = Ei(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => pe({}, Qi)
      // Default built-in map
    ), Jr = Ei(
      a,
      "HTML_INTEGRATION_POINTS",
      () => pe({}, eo)
      // Default built-in map
    );
    const y = Ei(a, "CUSTOM_ELEMENT_HANDLING", () => Rn(null));
    if (L = Rn(null), lt(y, "tagNameCheck") && to(y.tagNameCheck) && (L.tagNameCheck = y.tagNameCheck), lt(y, "attributeNameCheck") && to(y.attributeNameCheck) && (L.attributeNameCheck = y.attributeNameCheck), lt(y, "allowCustomizedBuiltInElements") && typeof y.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = y.allowCustomizedBuiltInElements), je(L), Q && (H = !1), p && (S = !0), Dt && (_ = pe({}, es), E = Rn(null), Dt.html === !0 && (pe(_, Qo), pe(E, ts)), Dt.svg === !0 && (pe(_, yi), pe(E, vi), pe(E, Tr)), Dt.svgFilters === !0 && (pe(_, gi), pe(E, vi), pe(E, Tr)), Dt.mathMl === !0 && (pe(_, _i), pe(E, ns), pe(E, Tr))), C.tagCheck = null, C.attributeCheck = null, lt(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? C.tagCheck = a.ADD_TAGS : Ln(a.ADD_TAGS) && (_ === R && (_ = dt(_)), pe(_, a.ADD_TAGS, Ne))), lt(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? C.attributeCheck = a.ADD_ATTR : Ln(a.ADD_ATTR) && (E === x && (E = dt(E)), pe(E, a.ADD_ATTR, Ne))), lt(a, "ADD_FORBID_CONTENTS") && Ln(a.ADD_FORBID_CONTENTS) && (At === gn && (At = dt(At)), pe(At, a.ADD_FORBID_CONTENTS, Ne)), tn && (_["#text"] = !0), N && pe(_, ["html", "head", "body"]), _.table && (pe(_, ["tbody"]), delete M.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ln('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ln('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const w = ye;
      ye = a.TRUSTED_TYPES_POLICY;
      try {
        Pe = Me("");
      } catch (B) {
        throw ye = w, B;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (ye = void 0, Pe = "") : (ye === void 0 && (ye = de()), ye && typeof Pe == "string" && (Pe = Me("")));
    De && De(a), Tn = a;
  }, no = pe({}, [...yi, ...gi, ...Nu]), ro = pe({}, [..._i, ...Pu]), Nl = function(a, y, w) {
    return y.namespaceURI === ut ? a === "svg" : y.namespaceURI === Yt ? a === "svg" && (w === "annotation-xml" || Xr[w]) : !!no[a];
  }, Pl = function(a, y, w) {
    return y.namespaceURI === ut ? a === "math" : y.namespaceURI === nn ? a === "math" && Jr[w] : !!ro[a];
  }, kl = function(a, y, w) {
    return y.namespaceURI === nn && !Jr[w] || y.namespaceURI === Yt && !Xr[w] ? !1 : !ro[a] && (Al[a] || !no[a]);
  }, Ll = function(a) {
    let y = re(a);
    (!y || !y.tagName) && (y = {
      namespaceURI: En,
      tagName: "template"
    });
    const w = Kn(a.tagName), B = Kn(y.tagName);
    return Yr[a.namespaceURI] ? a.namespaceURI === nn ? Nl(w, y, B) : a.namespaceURI === Yt ? Pl(w, y, B) : a.namespaceURI === ut ? kl(w, y, B) : !!(Un === "application/xhtml+xml" && Yr[a.namespaceURI]) : !1;
  }, Xt = function(a) {
    jn(t.removed, {
      element: a
    });
    try {
      re(a).removeChild(a);
    } catch {
      if (ne(a), !re(a))
        throw ln("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, io = function(a, y, w) {
    try {
      a.removeAttributeNode(y);
    } catch {
      try {
        a.removeAttribute(w);
      } catch {
      }
    }
  }, ur = function(a) {
    fr(a);
    const y = oe(a);
    if (y) {
      const B = [];
      cn(y, (Y) => {
        jn(B, Y);
      }), cn(B, (Y) => {
        try {
          ne(Y);
        } catch {
        }
      });
    }
    const w = I(a);
    if (w)
      for (let B = w.length - 1; B >= 0; --B) {
        const Y = w[B], te = Y && Y.name;
        typeof te == "string" && io(a, Y, te);
      }
  }, rn = function(a, y, w) {
    if (!w)
      try {
        w = y.getAttributeNode(a);
      } catch {
        w = null;
      }
    jn(t.removed, {
      attribute: w || null,
      from: y
    });
    try {
      w ? y.removeAttributeNode(w) : y.removeAttribute(a);
    } catch {
      try {
        y.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (S || p)
        try {
          Xt(y);
        } catch {
        }
      else
        try {
          y.setAttribute(a, "");
        } catch {
        }
  }, Ml = function(a) {
    const y = I(a);
    if (y)
      for (let w = y.length - 1; w >= 0; --w) {
        const B = y[w], Y = B && B.name;
        typeof Y != "string" || E[Ne(Y)] || io(a, B, Y);
      }
  }, fr = function(a) {
    const y = [a];
    for (; y.length > 0; ) {
      const w = y.pop();
      xe(w) === ft.element && Ml(w);
      const Y = oe(w);
      if (Y)
        for (let te = Y.length - 1; te >= 0; --te)
          y.push(Y[te]);
    }
  }, oo = function(a, y) {
    return O ? a === "patchsrc" ? !0 : a === "for" && y !== "label" && y !== "output" : !1;
  }, Il = function(a) {
    if (!O)
      return;
    const y = [a];
    for (; y.length > 0; ) {
      const w = y.pop(), B = xe(w);
      if (B === ft.processingInstruction || B === ft.comment && qe(os, w.data)) {
        try {
          ne(w);
        } catch {
        }
        continue;
      }
      if (B === ft.element) {
        const te = w, Te = Ne(Ue(w));
        try {
          te.hasAttribute && te.hasAttribute("patchsrc") && te.removeAttribute("patchsrc"), te.hasAttribute && te.hasAttribute("for") && oo("for", Te) && te.removeAttribute("for");
        } catch {
        }
      }
      const Y = oe(w);
      if (Y)
        for (let te = Y.length - 1; te >= 0; --te)
          y.push(Y[te]);
    }
  }, so = function(a) {
    let y = null, w = null;
    if (A)
      a = "<remove></remove>" + a;
    else {
      const te = Yo(a, /^[\r\n\t ]+/);
      w = te && te[0];
    }
    Un === "application/xhtml+xml" && En === ut && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const B = ye ? Me(a) : a;
    if (En === ut)
      try {
        y = new b().parseFromString(B, Un);
      } catch {
      }
    if (!y || !y.documentElement) {
      y = Fe.createDocument(En, "template", null);
      try {
        y.documentElement.innerHTML = Gr ? Pe : B;
      } catch {
      }
    }
    const Y = y.body || y.documentElement;
    return a && w && Y.insertBefore(n.createTextNode(w), Y.childNodes[0] || null), En === ut ? Be.call(y, N ? "html" : "body")[0] : N ? y.documentElement : Y;
  }, lo = function(a) {
    const y = Re ? Re(a) : a.ownerDocument;
    return at.call(
      y || a,
      a,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, dr = function(a) {
    return a = Vn(a, Ct, " "), a = Vn(a, He, " "), a = Vn(a, mt, " "), a;
  }, Qr = function(a) {
    var y;
    a.normalize();
    const w = Re ? Re(a) : a.ownerDocument, B = at.call(
      w || a,
      a,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Y = B.nextNode();
    for (; Y; )
      Y.data = dr(Y.data), Y = B.nextNode();
    const te = (y = a.querySelectorAll) === null || y === void 0 ? void 0 : y.call(a, "template");
    te && cn(te, (Te) => {
      Sn(Te.content) && Qr(Te.content);
    });
  }, pr = function(a) {
    const y = ce ? ce(a) : null;
    return typeof y != "string" || Ne(y) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== I(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
    a.childNodes !== oe(a);
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
  function Rt(D, a, y) {
    D.length !== 0 && cn(D, (w) => {
      w.call(t, a, y, Tn);
    });
  }
  const Dl = function(a, y) {
    return !!(O && a.hasChildNodes() && !Fn(a.firstElementChild) && qe(is, a.textContent) && qe(is, a.innerHTML) || O && a.namespaceURI === ut && Bu[y] && (Fn(a.firstElementChild) || typeof a.textContent == "string" && qe(zu[y], a.textContent)) || a.nodeType === ft.processingInstruction || O && a.nodeType === ft.comment && qe(os, a.data));
  }, hr = function(a, y) {
    if (a instanceof RegExp)
      return qe(a, y);
    if (a instanceof Function) {
      for (var w = arguments.length, B = new Array(w > 2 ? w - 2 : 0), Y = 2; Y < w; Y++)
        B[Y - 2] = arguments[Y];
      return !!a(y, ...B);
    }
    return !1;
  }, Ul = function(a, y, w) {
    if (!M[y] && po(y) && hr(L.tagNameCheck, y))
      return !1;
    if (tn && !At[y]) {
      const B = re(a), Y = oe(a);
      if (Y && B) {
        const te = Y.length;
        for (let Te = te - 1; Te >= 0; --Te) {
          const we = a === w ? j(Y[Te], !0) : Y[Te];
          B.insertBefore(we, W(a));
        }
      }
    }
    return Xt(a), !0;
  }, ao = function(a, y, w, B) {
    return a.length === 0 ? y : y === w || y === B ? dt(y) : y;
  }, co = function(a, y) {
    return a === y || re(a) !== null ? !1 : (Dn && fr(a), !0);
  }, uo = function(a, y) {
    if (Rt(fe.beforeSanitizeElements, a, null), co(a, y))
      return !0;
    if (pr(a))
      return Xt(a), !0;
    const w = Ne(Ue(a));
    if (_ = ao(fe.uponSanitizeElement, _, R, J), Rt(fe.uponSanitizeElement, a, {
      tagName: w,
      allowedTags: _
    }), co(a, y))
      return !0;
    if (Dl(a, w))
      return Xt(a), !0;
    if (M[w] || !(C.tagCheck instanceof Function && C.tagCheck(w)) && !_[w]) {
      const Y = Ul(a, w, y);
      return Y === !1 && Rt(fe.afterSanitizeElements, a, null), Y;
    }
    if (xe(a) === ft.element && !Ll(a) || (w === "noscript" || w === "noembed" || w === "noframes") && qe(ju, a.innerHTML))
      return Xt(a), !0;
    if (Q && a.nodeType === ft.text) {
      const Y = dr(a.textContent);
      a.textContent !== Y && (jn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = Y);
    }
    return Rt(fe.afterSanitizeElements, a, null), !1;
  }, fo = function(a, y, w) {
    if (k[y] || oo(y, a) || ge && (y === "id" || y === "name") && (w in n || w in Ol))
      return !1;
    const B = E[y] || C.attributeCheck instanceof Function && C.attributeCheck(y, a);
    return H && qe(rt, y) || K && qe(xt, y) ? !0 : B ? wt[y] || qe(h, Vn(w, bt, "")) || (y === "src" || y === "xlink:href" || y === "href") && a !== "script" && Xo(w, "data:") === 0 && _n[a] || q && !qe(ze, Vn(w, bt, "")) ? !0 : !w : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      po(a) && hr(L.tagNameCheck, a) && hr(L.attributeNameCheck, y, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      y === "is" && L.allowCustomizedBuiltInElements && hr(L.tagNameCheck, w)
    );
  }, Fl = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), po = function(a) {
    return !Fl[Kn(a)] && qe(f, a);
  }, Hl = function(a, y, w, B) {
    if (ye && typeof T == "object" && typeof T.getAttributeType == "function" && !w)
      switch (T.getAttributeType(a, y)) {
        case "TrustedHTML":
          return Me(B);
        case "TrustedScriptURL":
          return Ae(B);
      }
    return B;
  }, $l = function(a, y, w, B) {
    try {
      w ? a.setAttributeNS(w, y, B) : a.setAttribute(y, B), pr(a) ? Xt(a) : Go(t.removed);
    } catch {
      rn(y, a);
    }
  }, ho = function(a) {
    Rt(fe.beforeSanitizeAttributes, a, null);
    const y = a.attributes;
    if (!y || pr(a))
      return;
    E = ao(fe.uponSanitizeAttribute, E, x, ie);
    const w = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: E,
      forceKeepAttr: void 0
    };
    let B = y.length;
    const Y = Ne(a.nodeName);
    for (; B--; ) {
      const te = y[B], Te = te.name, we = te.namespaceURI, it = te.value, ot = Ne(Te), ti = it;
      let Je = Te === "value" ? ti : Su(ti);
      if (w.attrName = ot, w.attrValue = Je, w.keepAttr = !0, w.forceKeepAttr = void 0, Rt(fe.uponSanitizeAttribute, a, w), Je = w.attrValue, Ie && (ot === "id" || ot === "name") && Xo(Je, Gt) !== 0 && (rn(Te, a, te), Je = Gt + Je), O && qe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Je)) {
        rn(Te, a, te);
        continue;
      }
      if (ot === "attributename" && Yo(Je, "href")) {
        rn(Te, a, te);
        continue;
      }
      if (!w.forceKeepAttr) {
        if (!w.keepAttr) {
          rn(Te, a, te);
          continue;
        }
        if (!X && qe(Vu, Je)) {
          rn(Te, a, te);
          continue;
        }
        if (Q && (Je = dr(Je)), !fo(Y, ot, Je)) {
          rn(Te, a, te);
          continue;
        }
        Je = Hl(Y, ot, we, Je), Je !== ti && $l(a, Te, we, Je);
      }
    }
    Rt(fe.afterSanitizeAttributes, a, null);
  }, mr = function(a) {
    let y = null;
    const w = lo(a);
    for (Rt(fe.beforeSanitizeShadowDOM, a, null); y = w.nextNode(); )
      if (Rt(fe.uponSanitizeShadowNode, y, null), uo(y, a), ho(y), Sn(y.content) && mr(y.content), xe(y) === ft.element) {
        const B = z(y);
        Sn(B) && (ei(B), mr(B));
      }
    Rt(fe.afterSanitizeShadowDOM, a, null);
  }, ei = function(a) {
    const y = [{
      node: a,
      shadow: null
    }];
    for (; y.length > 0; ) {
      const w = y.pop();
      if (w.shadow) {
        mr(w.shadow);
        continue;
      }
      const B = w.node, te = xe(B) === ft.element, Te = oe(B);
      if (Te)
        for (let we = Te.length - 1; we >= 0; --we)
          y.push({
            node: Te[we],
            shadow: null
          });
      if (te) {
        const we = ce ? ce(B) : null;
        if (typeof we == "string" && Ne(we) === "template") {
          const it = B.content;
          Sn(it) && y.push({
            node: it,
            shadow: null
          });
        }
      }
      if (te) {
        const we = z(B);
        Sn(we) && y.push({
          node: null,
          shadow: we
        }, {
          node: we,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(D) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = null, w = null, B = null, Y = null;
    if (Gr = !D, Gr && (D = "<!-->"), typeof D != "string" && !Fn(D) && (D = Ru(D), typeof D != "string"))
      throw ln("dirty is not a string, aborting");
    if (!t.isSupported)
      return D;
    $ ? (_ = J, E = ie) : Zr(a), (fe.uponSanitizeElement.length > 0 || fe.uponSanitizeAttribute.length > 0) && (_ = dt(_)), fe.uponSanitizeAttribute.length > 0 && (E = dt(E)), t.removed = [];
    const te = Dn && typeof D != "string" && Fn(D);
    if (te) {
      Il(D);
      const it = Ue(D);
      if (typeof it == "string") {
        const ot = Ne(it);
        if (!_[ot] || M[ot])
          throw ur(D), ln("root node is forbidden and cannot be sanitized in-place");
      }
      if (pr(D))
        throw ur(D), ln("root node is clobbered and cannot be sanitized in-place");
      try {
        ei(D);
      } catch (ot) {
        throw ur(D), ot;
      }
    } else if (Fn(D))
      y = so("<!---->"), w = y.ownerDocument.importNode(D, !0), w.nodeType === ft.element && w.nodeName === "BODY" || w.nodeName === "HTML" ? y = w : y.appendChild(w), ei(w);
    else {
      if (!S && !Q && !N && // eslint-disable-next-line unicorn/prefer-includes
      D.indexOf("<") === -1)
        return ye && ee ? Me(D) : D;
      if (y = so(D), !y)
        return S ? null : ee ? Pe : "";
    }
    y && A && Xt(y.firstChild);
    const Te = te ? D : y;
    try {
      const it = lo(Te);
      for (; B = it.nextNode(); )
        uo(B, Te), ho(B), Sn(B.content) && mr(B.content);
    } catch (it) {
      throw te && (ur(D), cn(t.removed, (ot) => {
        ot.element && fr(ot.element);
      })), it;
    }
    if (te)
      return cn(t.removed, (it) => {
        it.element && fr(it.element);
      }), Q && Qr(D), D;
    if (S) {
      if (Q && Qr(y), p)
        for (Y = ke.call(y.ownerDocument); y.firstChild; )
          Y.appendChild(y.firstChild);
      else
        Y = y;
      return (E.shadowroot || E.shadowrootmode) && (Y = ct.call(r, Y, !0)), Y;
    }
    let we = N ? y.outerHTML : y.innerHTML;
    return N && _["!doctype"] && y.ownerDocument && y.ownerDocument.doctype && y.ownerDocument.doctype.name && qe(Hu, y.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + y.ownerDocument.doctype.name + `>
` + we), Q && (we = dr(we)), ye && ee ? Me(we) : we;
  }, t.setConfig = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zr(D), $ = !0, J = _, ie = E;
  }, t.clearConfig = function() {
    Tn = null, $ = !1, J = null, ie = null, ye = Xe, Pe = "";
  }, t.isValidAttribute = function(D, a, y) {
    Tn || Zr({});
    const w = Ne(D), B = Ne(a);
    return fo(w, B, y);
  }, t.addHook = function(D, a) {
    typeof a == "function" && lt(fe, D) && jn(fe[D], a);
  }, t.removeHook = function(D, a) {
    if (lt(fe, D)) {
      if (a !== void 0) {
        const y = Eu(fe[D], a);
        return y === -1 ? void 0 : Tu(fe[D], y, 1)[0];
      }
      return Go(fe[D]);
    }
  }, t.removeHooks = function(D) {
    lt(fe, D) && (fe[D] = []);
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
  }, u = (W) => W, v = (l.sanitize ? Ku.sanitize : u) || u, b = l.escape ? as : u, T = (W) => typeof W == "string" || typeof W == "number", P = (W, oe, re) => W.replace(/%n/g, "" + re).replace(/{([^{}]*)}/g, (z, I) => {
    if (oe === void 0 || !(I in oe))
      return b(z);
    const V = oe[I];
    return T(V) ? b(`${V}`) : typeof V == "object" && T(V.value) ? (V.escape !== !1 ? as : u)(`${V.value}`) : b(z);
  });
  let ne = (i?.bundle ?? Ju(e)).translations[t] || t;
  return ne = Array.isArray(ne) ? ne[0] : ne, v(typeof o == "object" || s !== void 0 ? P(
    ne,
    o,
    s
  ) : ne);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, ef = { class: "library-catalogue-header" }, tf = { id: "library-catalogue-heading" }, nf = { class: "library-muted" }, rf = ["aria-label"], of = { class: "library-catalogue-actions-menu" }, sf = { class: "library-catalogue-actions-list" }, lf = ["href"], af = ["href"], cf = ["href"], uf = ["href"], ff = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, df = ["aria-label"], pf = ["name", "value"], hf = { class: "library-quick-filter-search" }, mf = { value: "title" }, bf = { value: "recent" }, yf = { value: "publicationDate" }, gf = { value: "publication" }, _f = { value: "lastOpened" }, vf = { value: "format" }, Ef = { value: "" }, Tf = { value: "1" }, Sf = ["value"], Cf = ["value"], xf = ["aria-label"], Af = ["aria-label"], wf = { class: "library-filter-panel" }, Rf = { class: "library-filter-panel-summary" }, Of = ["aria-label"], Nf = { value: "" }, Pf = ["value"], kf = { value: "" }, Lf = ["value"], Mf = { value: "" }, If = ["value"], Df = { value: "" }, Uf = ["value"], Ff = { value: "" }, Hf = ["value"], $f = { value: "" }, jf = ["value"], Vf = { value: "" }, Bf = ["value"], zf = { value: "" }, Wf = ["value"], qf = { value: "" }, Kf = ["value"], Gf = { value: "" }, Yf = ["value"], Xf = { value: "" }, Jf = { value: "1" }, Zf = { value: "" }, Qf = { value: "1" }, ed = { value: "title" }, td = { value: "recent" }, nd = { value: "publicationDate" }, rd = { value: "publication" }, id = { value: "lastOpened" }, od = { value: "format" }, sd = ["value"], ld = ["value"], ad = ["aria-label"], cd = ["aria-label"], ud = ["href"], fd = {
  key: 1,
  class: "library-discovery-header",
  "aria-labelledby": "library-discovery-heading"
}, dd = { class: "library-muted" }, pd = { id: "library-discovery-heading" }, hd = { class: "library-muted" }, md = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, bd = { key: 0 }, yd = { key: 1 }, gd = {
  href: "/apps/library/",
  class: "button secondary"
}, _d = { class: "library-catalogue-status-row" }, vd = { class: "library-muted library-filter-result-summary" }, Ed = { key: 0 }, Td = { href: "?" }, Sd = ["aria-label"], Cd = { class: "library-pagination-range" }, xd = { key: 0 }, Ad = ["href"], wd = {
  key: 1,
  class: "library-muted"
}, Rd = ["href"], Od = {
  key: 3,
  class: "library-muted"
}, Nd = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, Pd = ["aria-label"], kd = { class: "library-settings-count-badge" }, Ld = ["action"], Md = ["value"], Id = ["name", "value"], Dd = ["placeholder"], Ud = {
  type: "submit",
  class: "button primary"
}, Fd = { class: "library-muted" }, Hd = ["action"], $d = ["value"], jd = ["name", "value"], Vd = ["placeholder"], Bd = {
  type: "submit",
  class: "button secondary"
}, zd = { class: "library-muted" }, Wd = ["action"], qd = ["value"], Kd = ["name", "value"], Gd = {
  type: "submit",
  class: "button secondary"
}, Yd = { class: "library-muted" }, Xd = ["action"], Jd = ["value"], Zd = ["name", "value"], Qd = { name: "bulkEditField" }, ep = { value: "publicationType" }, tp = { value: "subtitle" }, np = { value: "creators" }, rp = { value: "publication" }, ip = { value: "publicationDate" }, op = { value: "language" }, sp = { value: "publisher" }, lp = { value: "genres" }, ap = { value: "classifications" }, cp = {
  type: "submit",
  class: "button secondary"
}, up = { class: "library-muted" }, fp = ["action"], dp = ["value"], pp = ["name", "value"], hp = {
  type: "submit",
  class: "button secondary"
}, mp = { class: "library-muted" }, bp = { class: "library-discovery-shortcuts" }, yp = { class: "library-discovery-shortcut-grid" }, gp = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, _p = { id: "library-periodical-groups-heading" }, vp = { class: "library-muted" }, Ep = ["href"], Tp = { class: "library-muted" }, Sp = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, Cp = { id: "library-periodical-groups-empty-heading" }, xp = { class: "library-muted" }, Ap = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, wp = { id: "library-year-groups-heading" }, Rp = ["href"], Op = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, Np = { id: "library-creator-groups-heading" }, Pp = ["href"], kp = ["aria-label"], Lp = ["href", "aria-label"], Mp = { class: "library-muted" }, Ip = { class: "library-empty-actions" }, Dp = ["href"], Up = { class: "library-muted" }, Fp = { class: "library-muted" }, Hp = { class: "library-empty-actions" }, $p = ["href"], jp = { class: "library-muted" }, Vp = { class: "library-empty-actions" }, Bp = ["href"], zp = {
  href: "?",
  class: "button primary"
}, Wp = { class: "library-muted" }, qp = { class: "library-empty-actions" }, Kp = ["href"], Gp = {
  key: 4,
  class: "library-cover-gallery"
}, Yp = ["href", "aria-label"], Xp = ["src", "alt"], Jp = ["action", "onSubmit"], Zp = ["value"], Qp = ["value"], eh = ["aria-pressed", "title", "aria-label", "onClick"], th = { class: "library-cover-summary" }, nh = { class: "library-cover-primary" }, rh = ["aria-label"], ih = ["href"], oh = ["onToggle"], sh = ["aria-label"], lh = { class: "library-cover-meta" }, ah = {
  key: 0,
  class: "library-creator"
}, ch = { class: "library-cover-detail-list" }, uh = { class: "library-cover-detail-chip" }, fh = {
  key: 0,
  class: "library-cover-detail-chip"
}, dh = {
  key: 1,
  class: "library-cover-detail-chip"
}, ph = {
  key: 2,
  class: "library-cover-detail-chip"
}, hh = {
  key: 3,
  class: "library-cover-detail-chip"
}, mh = {
  key: 4,
  class: "library-cover-detail-chip"
}, bh = {
  key: 5,
  class: "library-cover-detail-chip"
}, yh = {
  key: 6,
  class: "library-cover-detail-chip"
}, gh = {
  key: 1,
  class: "library-muted library-cover-description"
}, _h = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, vh = { key: 0 }, Eh = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Th = {
  key: 0,
  class: "library-muted"
}, Sh = { class: "library-cover-actions" }, Ch = ["href"], xh = ["href"], Ah = ["href"], wh = ["aria-label"], Rh = { class: "library-pagination-range" }, Oh = { key: 0 }, Nh = ["href"], Ph = {
  key: 1,
  class: "library-muted"
}, kh = ["href"], Lh = {
  key: 3,
  class: "library-muted"
}, Mh = {
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
    }), o = /* @__PURE__ */ fn((i.items || []).map((A) => ({ ...A }))), s = ae(() => o), l = ae(() => i.shelves || []), u = ae(() => i.formats || []), v = ae(() => i.publications || []), b = ae(() => i.publicationSummaries || []), T = ae(() => i.publicationIssueContext || null), P = ae(() => i.publicationYears || []), j = ae(() => i.creators || []), ne = ae(() => i.scanStatuses || []), W = ae(() => i.workflowStatuses || []), oe = ae(() => i.genres || []), re = ae(() => i.classifications || []), z = ae(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), I = /* @__PURE__ */ fn({
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
    }), V = ae(() => i.settingsUrl || ""), ce = ae(() => i.requestToken || ""), Re = ae(() => i.metadataExportUrl || ""), xe = ae(() => i.metadataSidecarManifestUrl || ""), Ue = ae(() => i.metadataSidecarBundleUrl || ""), ye = ae(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), Pe = ae(() => i.batchTagUrl || "/apps/library/bulk/tags"), Xe = ae(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), nt = ae(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ve = ae(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), ht = ae(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Me = ae(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), Ae = ae(() => i.discoveryPage === "publication"), de = ae(() => i.discoveryPage === "year"), se = ae(() => i.discoveryPage === "creator"), Fe = ae(() => Ae.value || de.value || se.value), at = ae(() => i.discoveryTitle || I.publication || I.year || I.creator || ""), ke = ae(() => Number(i.rootCount || 0)), Be = ae(() => Number(i.enabledRootCount || 0)), ct = ae(() => ke.value === 0), fe = ae(() => ke.value > 0 && Be.value === 0), Ct = ae(() => rt.value.length > 0), He = {
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
    }, mt = ae(() => {
      if (typeof window > "u") return "";
      const A = new URLSearchParams(window.location.search);
      if (A.get("batchMetadataApplyResult") !== "1") return "";
      const S = A.get("batchMetadataField") || "field", p = A.get("batchMetadataApplied") || "0", ee = A.get("batchMetadataUnchanged") || "0", ge = A.get("batchMetadataSkipped") || "0";
      return c("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: p, field: S, unchanged: ee, skipped: ge });
    }), rt = ae(() => Object.entries(He).map(([A, S]) => ({ key: A, label: S, value: I[A] || "" })).filter((A) => String(A.value).trim() !== "")), xt = ae(() => Object.entries(I).filter(([A, S]) => !["q", "sort", "starred"].includes(A) && String(S || "").trim() !== "").map(([A, S]) => ({ key: A, value: S }))), ze = ae(() => Object.entries(I).filter(([A, S]) => String(S || "").trim() !== "").map(([A, S]) => ({ key: A, value: S }))), bt = /* @__PURE__ */ fn({}), f = /* @__PURE__ */ va(null);
    let h = null;
    function _(A) {
      const S = new URLSearchParams(new FormData(A));
      for (const p of Array.from(S.keys()))
        String(S.get(p) || "").trim() === "" && S.delete(p);
      return S.delete("page"), S;
    }
    function R(A) {
      o.splice(0, o.length, ...(A.items || []).map((S) => ({ ...S })));
      for (const S of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl"])
        Object.prototype.hasOwnProperty.call(A, S) && (i[S] = A[S]);
      Object.assign(I, A.activeFilters || {});
    }
    async function E(A) {
      const S = A?.currentTarget?.tagName === "FORM" ? A.currentTarget : A?.currentTarget?.form;
      if (!S) return;
      const ee = _(S).toString(), ge = ee ? `?${ee}` : "", Ie = await fetch(ye.value + ge, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!Ie.ok) {
        S.submit();
        return;
      }
      R(await Ie.json()), history.replaceState({}, "", ee ? `?${ee}` : window.location.pathname);
    }
    function x(A) {
      E(A);
    }
    function L(A) {
      window.clearTimeout(h), h = window.setTimeout(() => x(A), 350);
    }
    function M(A) {
      const S = new URLSearchParams();
      for (const [ee, ge] of Object.entries(I)) {
        const Ie = String(ge || "").trim();
        Ie !== "" && ee !== A && !(ee === "sort" && Ie === "title") && S.set(ee, Ie);
      }
      const p = S.toString();
      return p ? `?${p}` : "?";
    }
    function k() {
      return M("q");
    }
    function C(A) {
      return String(A || "").toUpperCase();
    }
    function K(A) {
      return A.nextcloudTags || [];
    }
    function H(A) {
      return b.value.find((p) => p.publication === A)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(A)}`;
    }
    function q(A) {
      return i.publicationYearLandingUrls?.[A] || `/apps/library/years/${encodeURIComponent(A)}`;
    }
    function X(A) {
      return i.creatorLandingUrls?.[A] || `/apps/library/creators/${encodeURIComponent(A)}`;
    }
    function Q(A, S) {
      bt[A] = !!S?.currentTarget?.open;
    }
    function O(A) {
      const S = String(A?.tagName || "").toLowerCase();
      return A?.isContentEditable || ["input", "select", "textarea", "button"].includes(S);
    }
    function N(A) {
      A.key !== "/" || A.metaKey || A.ctrlKey || A.altKey || A.shiftKey || O(A.target) || (A.preventDefault(), f.value?.focus(), f.value?.select?.());
    }
    function $(A) {
      A.key !== "Escape" || document.activeElement !== f.value || I.q === "" || (A.preventDefault(), I.q = "", f.value.value = "", window.clearTimeout(h), x({ currentTarget: f.value }));
    }
    function J(A) {
      N(A), $(A);
    }
    Ks(() => {
      window.addEventListener("keydown", J);
    }), Gs(() => {
      window.removeEventListener("keydown", J);
    });
    async function ie(A, S) {
      const p = S?.currentTarget?.closest?.("form") || S?.currentTarget;
      if (!p || !A?.starUrl) return;
      const ee = !!A.starred;
      A.starred = !ee;
      try {
        (await fetch(A.starUrl, {
          method: "POST",
          body: new FormData(p),
          credentials: "same-origin"
        })).ok || (A.starred = ee);
      } catch {
        A.starred = ee;
      }
    }
    return (A, S) => (U(), F("div", Zu, [
      d("section", Qu, [
        d("div", ef, [
          d("div", null, [
            d("h2", tf, m(g(c)("library", "Publication catalogue")), 1),
            d("p", nf, m(g(c)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          d("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": g(c)("library", "Library actions")
          }, [
            d("details", of, [
              d("summary", null, m(g(c)("library", "Actions")), 1),
              d("div", sf, [
                d("a", {
                  href: V.value,
                  class: "button secondary",
                  "aria-label": "Open Library settings"
                }, m(g(c)("library", "Settings")), 9, lf),
                Re.value ? (U(), F("a", {
                  key: 0,
                  href: Re.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, m(g(c)("library", "Export corrected metadata")), 9, af)) : _e("", !0),
                xe.value ? (U(), F("a", {
                  key: 1,
                  href: xe.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar manifest"
                }, m(g(c)("library", "Sidecar manifest")), 9, cf)) : _e("", !0),
                Ue.value ? (U(), F("a", {
                  key: 2,
                  href: Ue.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar ZIP"
                }, m(g(c)("library", "Sidecar ZIP")), 9, uf)) : _e("", !0)
              ])
            ])
          ], 8, rf)
        ]),
        mt.value ? (U(), F("p", ff, m(mt.value), 1)) : _e("", !0),
        d("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": g(c)("library", "Quick catalogue filters"),
          onSubmit: Er(E, ["prevent"])
        }, [
          (U(!0), F(ue, null, Ce(xt.value, (p) => (U(), F("input", {
            key: p.key,
            type: "hidden",
            name: p.key,
            value: p.value
          }, null, 8, pf))), 128)),
          d("label", hf, [
            he(m(g(c)("library", "Search")) + " ", 1),
            S[18] || (S[18] = d("kbd", { class: "library-keyboard-hint" }, "/", -1)),
            $e(d("input", {
              ref_key: "quickSearchInput",
              ref: f,
              "onUpdate:modelValue": S[0] || (S[0] = (p) => I.q = p),
              "data-library-quick-search": "",
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex...",
              onInput: L
            }, null, 544), [
              [mi, I.q]
            ])
          ]),
          d("label", null, [
            he(m(g(c)("library", "Sort")) + " ", 1),
            $e(d("select", {
              "onUpdate:modelValue": S[1] || (S[1] = (p) => I.sort = p),
              name: "sort",
              onChange: E
            }, [
              d("option", mf, m(g(c)("library", "Title")), 1),
              d("option", bf, m(g(c)("library", "Recently added")), 1),
              d("option", yf, m(g(c)("library", "Publication date")), 1),
              d("option", gf, m(g(c)("library", "Series")), 1),
              d("option", _f, m(g(c)("library", "Recently opened")), 1),
              d("option", vf, m(g(c)("library", "Format")), 1)
            ], 544), [
              [Ze, I.sort]
            ])
          ]),
          d("label", null, [
            he(m(g(c)("library", "Starred")) + " ", 1),
            $e(d("select", {
              "onUpdate:modelValue": S[2] || (S[2] = (p) => I.starred = p),
              name: "starred",
              onChange: E
            }, [
              d("option", Ef, m(g(c)("library", "All")), 1),
              d("option", Tf, m(g(c)("library", "Starred")), 1)
            ], 544), [
              [Ze, I.starred]
            ])
          ]),
          d("label", null, [
            he(m(g(c)("library", "Size")) + " ", 1),
            d("select", {
              value: z.value.limit,
              name: "limit",
              onChange: E
            }, [
              (U(), F(ue, null, Ce(r, (p) => d("option", {
                key: p,
                value: p
              }, m(p), 9, Cf)), 64))
            ], 40, Sf)
          ]),
          d("button", {
            type: "submit",
            class: "button primary",
            "aria-label": g(c)("library", "Apply catalogue filters")
          }, m(g(c)("library", "Apply filters")), 9, xf),
          d("a", {
            href: "?",
            class: "button secondary",
            "aria-label": g(c)("library", "Clear catalogue filters")
          }, m(g(c)("library", "Clear all")), 9, Af)
        ], 40, df),
        d("details", wf, [
          d("summary", Rf, m(g(c)("library", "Show catalogue filters")), 1),
          d("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": g(c)("library", "Catalogue search and filters"),
            onSubmit: Er(E, ["prevent"])
          }, [
            d("label", null, [
              he(m(g(c)("library", "Search title / author")) + " ", 1),
              $e(d("input", {
                "onUpdate:modelValue": S[3] || (S[3] = (p) => I.q = p),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [mi, I.q]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Type")) + " ", 1),
              $e(d("select", {
                "onUpdate:modelValue": S[4] || (S[4] = (p) => I.type = p),
                name: "type"
              }, [
                d("option", Nf, m(g(c)("library", "All types")), 1),
                (U(), F(ue, null, Ce(n, (p) => d("option", {
                  key: p,
                  value: p
                }, m(p), 9, Pf)), 64))
              ], 512), [
                [Ze, I.type]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Series / periodical")) + " ", 1),
              $e(d("select", {
                "onUpdate:modelValue": S[5] || (S[5] = (p) => I.publication = p),
                name: "publication"
              }, [
                d("option", kf, m(g(c)("library", "All series and periodicals")), 1),
                (U(!0), F(ue, null, Ce(v.value, (p) => (U(), F("option", {
                  key: p,
                  value: p
                }, m(p), 9, Lf))), 128))
              ], 512), [
                [Ze, I.publication]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Publication year")) + " ", 1),
              $e(d("select", {
                "onUpdate:modelValue": S[6] || (S[6] = (p) => I.year = p),
                name: "year"
              }, [
                d("option", Mf, m(g(c)("library", "All years")), 1),
                (U(!0), F(ue, null, Ce(P.value, (p) => (U(), F("option", {
                  key: p,
                  value: p
                }, m(p), 9, If))), 128))
              ], 512), [
                [Ze, I.year]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Creator")) + " ", 1),
              $e(d("select", {
                "onUpdate:modelValue": S[7] || (S[7] = (p) => I.creator = p),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                d("option", Df, m(g(c)("library", "All creators")), 1),
                (U(!0), F(ue, null, Ce(j.value, (p) => (U(), F("option", {
                  key: p,
                  value: p
                }, m(p), 9, Uf))), 128))
              ], 512), [
                [Ze, I.creator]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Nextcloud tag")) + " ", 1),
              $e(d("input", {
                "onUpdate:modelValue": S[8] || (S[8] = (p) => I.tag = p),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [mi, I.tag]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Format")) + " ", 1),
              $e(d("select", {
                "onUpdate:modelValue": S[9] || (S[9] = (p) => I.format = p),
                name: "format"
              }, [
                d("option", Ff, m(g(c)("library", "All formats")), 1),
                (U(!0), F(ue, null, Ce(u.value, (p) => (U(), F("option", {
                  key: p,
                  value: p
                }, m(C(p)), 9, Hf))), 128))
              ], 512), [
                [Ze, I.format]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Shelf")) + " ", 1),
              $e(d("select", {
                "onUpdate:modelValue": S[10] || (S[10] = (p) => I.shelf = p),
                name: "shelf"
              }, [
                d("option", $f, m(g(c)("library", "All shelves")), 1),
                (U(!0), F(ue, null, Ce(l.value, (p) => (U(), F("option", {
                  key: p,
                  value: p
                }, m(p), 9, jf))), 128))
              ], 512), [
                [Ze, I.shelf]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Scan status")) + " ", 1),
              $e(d("select", {
                "onUpdate:modelValue": S[11] || (S[11] = (p) => I.status = p),
                name: "status"
              }, [
                d("option", Vf, m(g(c)("library", "All scan statuses")), 1),
                (U(!0), F(ue, null, Ce(ne.value, (p) => (U(), F("option", {
                  key: p,
                  value: p
                }, m(p), 9, Bf))), 128))
              ], 512), [
                [Ze, I.status]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Workflow status")) + " ", 1),
              $e(d("select", {
                "onUpdate:modelValue": S[12] || (S[12] = (p) => I.workflowStatus = p),
                name: "workflowStatus"
              }, [
                d("option", zf, m(g(c)("library", "All workflow statuses")), 1),
                (U(!0), F(ue, null, Ce(W.value, (p) => (U(), F("option", {
                  key: p,
                  value: p
                }, m(p), 9, Wf))), 128))
              ], 512), [
                [Ze, I.workflowStatus]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Genre")) + " ", 1),
              $e(d("select", {
                "onUpdate:modelValue": S[13] || (S[13] = (p) => I.genre = p),
                name: "genre"
              }, [
                d("option", qf, m(g(c)("library", "All genres")), 1),
                (U(!0), F(ue, null, Ce(oe.value, (p) => (U(), F("option", {
                  key: p,
                  value: p
                }, m(p), 9, Kf))), 128))
              ], 512), [
                [Ze, I.genre]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Classification")) + " ", 1),
              $e(d("select", {
                "onUpdate:modelValue": S[14] || (S[14] = (p) => I.classification = p),
                name: "classification"
              }, [
                d("option", Gf, m(g(c)("library", "All classifications")), 1),
                (U(!0), F(ue, null, Ce(re.value, (p) => (U(), F("option", {
                  key: p,
                  value: p
                }, m(p), 9, Yf))), 128))
              ], 512), [
                [Ze, I.classification]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Scanner conflicts")) + " ", 1),
              $e(d("select", {
                "onUpdate:modelValue": S[15] || (S[15] = (p) => I.scannerConflicts = p),
                name: "scannerConflicts"
              }, [
                d("option", Xf, m(g(c)("library", "All metadata")), 1),
                d("option", Jf, m(g(c)("library", "Needs review")), 1)
              ], 512), [
                [Ze, I.scannerConflicts]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Starred")) + " ", 1),
              $e(d("select", {
                "onUpdate:modelValue": S[16] || (S[16] = (p) => I.starred = p),
                name: "starred"
              }, [
                d("option", Zf, m(g(c)("library", "All publications")), 1),
                d("option", Qf, m(g(c)("library", "Starred only")), 1)
              ], 512), [
                [Ze, I.starred]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Sort")) + " ", 1),
              $e(d("select", {
                "onUpdate:modelValue": S[17] || (S[17] = (p) => I.sort = p),
                name: "sort"
              }, [
                d("option", ed, m(g(c)("library", "Title")), 1),
                d("option", td, m(g(c)("library", "Recently added")), 1),
                d("option", nd, m(g(c)("library", "Publication date")), 1),
                d("option", rd, m(g(c)("library", "Series / periodical")), 1),
                d("option", id, m(g(c)("library", "Recently opened")), 1),
                d("option", od, m(g(c)("library", "Format")), 1)
              ], 512), [
                [Ze, I.sort]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Page size")) + " ", 1),
              d("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (U(), F(ue, null, Ce(r, (p) => d("option", {
                  key: p,
                  value: p
                }, m(p), 9, ld)), 64))
              ], 8, sd)
            ]),
            d("button", {
              type: "submit",
              class: "button primary",
              "aria-label": g(c)("library", "Apply catalogue filters")
            }, m(g(c)("library", "Apply filters")), 9, ad),
            d("a", {
              href: "?",
              class: "button secondary",
              "aria-label": g(c)("library", "Clear catalogue filters")
            }, m(g(c)("library", "Clear")), 9, cd),
            d("a", {
              href: Me.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, m(g(c)("library", "Review scanner conflicts")), 9, ud)
          ], 40, Of)
        ]),
        Fe.value ? (U(), F("section", fd, [
          d("p", dd, m(se.value ? g(c)("library", "Creator") : de.value ? g(c)("library", "Publication year") : g(c)("library", "Publication / series")), 1),
          d("h3", pd, m(at.value), 1),
          d("p", hd, m(z.value.total) + " " + m(se.value ? g(c)("library", "items by this creator. Sorted by publication context when available.") : de.value ? g(c)("library", "items from this publication year. Sorted by publication date when available.") : g(c)("library", "items in this publication. Sorted by issue/date context when available.")), 1),
          Ae.value && T.value ? (U(), F("aside", md, [
            d("strong", null, m(g(c)("library", "Publication contents")), 1),
            d("span", null, m(T.value.itemCount) + " " + m(g(c)("library", "items")), 1),
            T.value.earliestYear && T.value.latestYear ? (U(), F("span", bd, m(T.value.earliestYear) + "–" + m(T.value.latestYear), 1)) : _e("", !0),
            d("span", null, m(T.value.datedCount) + " " + m(g(c)("library", "with issue/date coverage")), 1),
            T.value.undatedCount > 0 ? (U(), F("span", yd, m(T.value.undatedCount) + " " + m(g(c)("library", "without dates yet")), 1)) : _e("", !0)
          ])) : _e("", !0),
          d("p", null, [
            d("a", gd, m(g(c)("library", "Back to full catalogue")), 1)
          ])
        ])) : _e("", !0),
        d("div", _d, [
          d("p", vd, [
            he(m(g(c)("library", "Showing")) + " " + m(z.value.from) + "–" + m(z.value.to) + " " + m(g(c)("library", "of")) + " " + m(z.value.total) + " " + m(g(c)("library", "catalogue items")), 1),
            rt.value.length > 0 ? (U(), F("span", Ed, [
              S[19] || (S[19] = he(" · ", -1)),
              d("a", Td, m(g(c)("library", "Clear all filters")), 1)
            ])) : _e("", !0)
          ]),
          d("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": g(c)("library", "Catalogue pagination")
          }, [
            d("span", Cd, [
              he(m(g(c)("library", "Page")) + " " + m(z.value.page), 1),
              z.value.total > 0 ? (U(), F("span", xd, " · " + m(z.value.from) + "–" + m(z.value.to), 1)) : _e("", !0)
            ]),
            z.value.previousUrl ? (U(), F("a", {
              key: 0,
              href: z.value.previousUrl
            }, m(g(c)("library", "Previous")), 9, Ad)) : (U(), F("span", wd, m(g(c)("library", "Previous")), 1)),
            z.value.nextUrl ? (U(), F("a", {
              key: 2,
              href: z.value.nextUrl
            }, m(g(c)("library", "Next")), 9, Rd)) : (U(), F("span", Od, m(g(c)("library", "Next")), 1))
          ], 8, Sd)
        ]),
        d("div", Nd, [
          d("details", {
            class: "library-batch-actions",
            "aria-label": g(c)("library", "Batch actions for current results")
          }, [
            d("summary", null, [
              he(m(g(c)("library", "Batch")) + " ", 1),
              d("span", kd, m(z.value.total) + " " + m(g(c)("library", "Current filter result")), 1)
            ]),
            d("form", {
              method: "post",
              action: Pe.value,
              class: "library-batch-tag-form"
            }, [
              d("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Md),
              (U(!0), F(ue, null, Ce(ze.value, (p) => (U(), F("input", {
                key: p.key,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, Id))), 128)),
              d("label", null, [
                d("span", null, m(g(c)("library", "Nextcloud tag")), 1),
                d("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: g(c)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, Dd)
              ]),
              d("button", Ud, m(g(c)("library", "Apply Nextcloud tag to current results")), 1),
              d("p", Fd, m(g(c)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, Ld),
            d("form", {
              method: "post",
              action: Xe.value,
              class: "library-batch-tag-remove-form"
            }, [
              d("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, $d),
              (U(!0), F(ue, null, Ce(ze.value, (p) => (U(), F("input", {
                key: `remove-tag-${p.key}`,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, jd))), 128)),
              d("label", null, [
                d("span", null, m(g(c)("library", "Nextcloud tag")), 1),
                d("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: g(c)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, Vd)
              ]),
              d("button", Bd, m(g(c)("library", "Remove tag from current results")), 1),
              d("p", zd, m(g(c)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, Hd),
            d("form", {
              method: "post",
              action: nt.value,
              class: "library-batch-metadata-reset-form"
            }, [
              d("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, qd),
              (U(!0), F(ue, null, Ce(ze.value, (p) => (U(), F("input", {
                key: `reset-${p.key}`,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, Kd))), 128)),
              S[20] || (S[20] = d("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              d("button", Gd, m(g(c)("library", "Reset filtered metadata")), 1),
              d("p", Yd, m(g(c)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, Wd),
            d("form", {
              method: "post",
              action: Ve.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              d("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Jd),
              (U(!0), F(ue, null, Ce(ze.value, (p) => (U(), F("input", {
                key: `edit-preview-${p.key}`,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, Zd))), 128)),
              d("label", null, [
                d("span", null, m(g(c)("library", "Metadata field")), 1),
                d("select", Qd, [
                  d("option", ep, m(g(c)("library", "Publication type")), 1),
                  d("option", tp, m(g(c)("library", "Subtitle")), 1),
                  d("option", np, m(g(c)("library", "Creators")), 1),
                  d("option", rp, m(g(c)("library", "Series / periodical")), 1),
                  d("option", ip, m(g(c)("library", "Publication date")), 1),
                  d("option", op, m(g(c)("library", "Language")), 1),
                  d("option", sp, m(g(c)("library", "Publisher")), 1),
                  d("option", lp, m(g(c)("library", "Genres")), 1),
                  d("option", ap, m(g(c)("library", "Classifications")), 1)
                ])
              ]),
              d("label", null, [
                d("span", null, m(g(c)("library", "Preview value")), 1),
                S[21] || (S[21] = d("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              d("button", cp, m(g(c)("library", "Preview & apply metadata edit")), 1),
              d("p", up, m(g(c)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, Xd),
            d("form", {
              method: "post",
              action: ht.value,
              class: "library-batch-cover-refresh-form"
            }, [
              d("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, dp),
              (U(!0), F(ue, null, Ce(ze.value, (p) => (U(), F("input", {
                key: `cover-${p.key}`,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, pp))), 128)),
              d("button", hp, m(g(c)("library", "Request fresh cover previews")), 1),
              d("p", mp, m(g(c)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, fp)
          ], 8, Pd),
          d("details", bp, [
            d("summary", null, m(g(c)("library", "Browse")), 1),
            d("div", yp, [
              b.value.length > 0 ? (U(), F("section", gp, [
                d("h3", _p, m(g(c)("library", "Top series and periodicals")), 1),
                d("p", vp, m(g(c)("library", "Jump into recurring publications with one click.")), 1),
                d("ul", null, [
                  (U(!0), F(ue, null, Ce(b.value, (p) => (U(), F("li", {
                    key: p.publication
                  }, [
                    d("a", {
                      href: H(p.publication)
                    }, m(p.publication), 9, Ep),
                    d("span", Tp, m(p.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : b.value.length === 0 ? (U(), F("section", Sp, [
                d("h3", Cp, m(g(c)("library", "No series or periodicals found yet")), 1),
                d("p", xp, m(g(c)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : _e("", !0),
              P.value.length > 0 ? (U(), F("section", Ap, [
                d("h3", wp, m(g(c)("library", "Top publication years")), 1),
                d("ul", null, [
                  (U(!0), F(ue, null, Ce(P.value, (p) => (U(), F("li", { key: p }, [
                    d("a", {
                      href: q(p)
                    }, m(p), 9, Rp)
                  ]))), 128))
                ])
              ])) : _e("", !0),
              j.value.length > 0 ? (U(), F("section", Op, [
                d("h3", Np, m(g(c)("library", "Top creators")), 1),
                d("ul", null, [
                  (U(!0), F(ue, null, Ce(j.value, (p) => (U(), F("li", { key: p }, [
                    d("a", {
                      href: X(p)
                    }, m(p), 9, Pp)
                  ]))), 128))
                ])
              ])) : _e("", !0)
            ])
          ])
        ]),
        rt.value.length > 0 ? (U(), F("nav", {
          key: 2,
          class: "library-active-filter-chips",
          "aria-label": g(c)("library", "Active filters")
        }, [
          d("span", null, m(g(c)("library", "Active filters")), 1),
          (U(!0), F(ue, null, Ce(rt.value, (p) => (U(), F("a", {
            key: p.key,
            href: M(p.key),
            class: "library-filter-chip",
            "aria-label": `${g(c)("library", "Remove filter")}: ${p.label}`
          }, [
            d("strong", null, m(p.label) + ":", 1),
            he(" " + m(p.value) + " ", 1),
            S[22] || (S[22] = d("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Lp))), 128))
        ], 8, kp)) : _e("", !0),
        s.value.length === 0 ? (U(), F("div", {
          key: 3,
          class: Nn(["library-empty-content", { "library-first-run-guidance": ct.value || fe.value, "library-filter-empty-state": Ct.value && !ct.value && !fe.value }]),
          role: "status"
        }, [
          ct.value ? (U(), F(ue, { key: 0 }, [
            d("h3", null, m(g(c)("library", "Start with one Library root")), 1),
            d("p", Mp, m(g(c)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            d("p", Ip, [
              d("a", {
                href: V.value,
                class: "button primary"
              }, m(g(c)("library", "Add a Library root")), 9, Dp),
              d("span", Up, m(g(c)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : fe.value ? (U(), F(ue, { key: 1 }, [
            d("h3", null, m(g(c)("library", "No enabled Library roots")), 1),
            d("p", Fp, m(g(c)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            d("p", Hp, [
              d("a", {
                href: V.value,
                class: "button primary"
              }, m(g(c)("library", "Open Library settings")), 9, $p)
            ])
          ], 64)) : Ct.value ? (U(), F(ue, { key: 2 }, [
            d("h3", null, m(g(c)("library", "No matches for the current filters")), 1),
            d("p", jp, m(g(c)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            d("p", Vp, [
              d("a", {
                href: k(),
                class: "button secondary"
              }, m(g(c)("library", "Clear search")), 9, Bp),
              d("a", zp, m(g(c)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (U(), F(ue, { key: 3 }, [
            d("h3", null, m(g(c)("library", "No catalogue items yet")), 1),
            d("p", Wp, m(g(c)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            d("p", qp, [
              d("a", {
                href: V.value,
                class: "button primary"
              }, m(g(c)("library", "Run a scan from settings")), 9, Kp)
            ])
          ], 64))
        ], 2)) : (U(), F("div", Gp, [
          (U(!0), F(ue, null, Ce(s.value, (p) => (U(), F("article", {
            key: p.id,
            class: Nn(["library-cover-card", { "library-cover-card--open": bt[p.id] }])
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
              }, null, 8, Xp)
            ], 8, Yp),
            d("form", {
              method: "post",
              action: p.starUrl,
              class: "library-cover-star-form",
              onSubmit: Er((ee) => ie(p, ee), ["prevent"])
            }, [
              d("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Zp),
              S[23] || (S[23] = d("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              d("input", {
                type: "hidden",
                name: "starred",
                value: p.starred ? "0" : "1"
              }, null, 8, Qp),
              d("button", {
                type: "submit",
                class: Nn(["library-cover-star-button", { "library-cover-star-button--starred": p.starred }]),
                "aria-pressed": p.starred ? "true" : "false",
                title: p.starred ? g(c)("library", "Unstar this publication") : g(c)("library", "Star this publication"),
                "aria-label": p.starred ? g(c)("library", "Unstar this publication") : g(c)("library", "Star this publication"),
                onClick: Er((ee) => ie(p, ee), ["prevent"])
              }, m(p.starred ? "★" : "☆"), 11, eh)
            ], 40, Jp),
            d("div", th, [
              d("div", nh, [
                d("h3", null, [
                  p.starred ? (U(), F("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": g(c)("library", "Starred")
                  }, "★", 8, rh)) : _e("", !0),
                  he(m(p.title), 1)
                ]),
                d("a", {
                  class: "library-cover-read",
                  href: p.openUrl
                }, m(g(c)("library", "Read")), 9, ih)
              ]),
              d("details", {
                class: "library-cover-details",
                onToggle: (ee) => Q(p.id, ee)
              }, [
                d("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${g(c)("library", "Show details and actions")}: ${p.title}`
                }, m(g(c)("library", "Details")), 9, sh),
                d("div", lh, [
                  p.creators ? (U(), F("p", ah, m(p.creators), 1)) : _e("", !0),
                  d("dl", ch, [
                    d("div", uh, [
                      d("dt", null, m(g(c)("library", "Type")), 1),
                      d("dd", null, m(p.publicationType), 1)
                    ]),
                    p.publication ? (U(), F("div", fh, [
                      d("dt", null, m(g(c)("library", "Series")), 1),
                      d("dd", null, m(p.publication), 1)
                    ])) : _e("", !0),
                    p.publicationDate ? (U(), F("div", dh, [
                      d("dt", null, m(g(c)("library", "Date")), 1),
                      d("dd", null, m(p.publicationDate), 1)
                    ])) : _e("", !0),
                    p.workflowStatus ? (U(), F("div", ph, [
                      d("dt", null, m(g(c)("library", "Status")), 1),
                      d("dd", null, m(p.workflowStatus), 1)
                    ])) : _e("", !0),
                    p.hasScannerConflict ? (U(), F("div", hh, [
                      d("dt", null, m(g(c)("library", "Review")), 1),
                      d("dd", null, m(p.scannerConflictCount) + " fields", 1)
                    ])) : _e("", !0),
                    p.lastOpenedAt ? (U(), F("div", mh, [
                      d("dt", null, m(g(c)("library", "Last opened")), 1),
                      d("dd", null, m(p.lastOpenedAt), 1)
                    ])) : _e("", !0),
                    p.extension ? (U(), F("div", bh, [
                      d("dt", null, m(g(c)("library", "Format")) + ":", 1),
                      d("dd", null, m(C(p.extension)), 1)
                    ])) : _e("", !0),
                    p.shelf ? (U(), F("div", yh, [
                      d("dt", null, m(g(c)("library", "Shelf")), 1),
                      d("dd", null, m(p.shelf), 1)
                    ])) : _e("", !0)
                  ]),
                  p.description ? (U(), F("p", gh, m(p.description), 1)) : _e("", !0),
                  p.scanStatus !== "indexed" || p.scanError ? (U(), F("p", _h, [
                    he(" scanStatus: " + m(p.scanStatus || "unknown"), 1),
                    p.scanError ? (U(), F("span", vh, " · scanError: " + m(p.scanError), 1)) : _e("", !0)
                  ])) : _e("", !0),
                  d("div", Eh, [
                    K(p).length === 0 ? (U(), F("span", Th, "No Nextcloud tags")) : (U(!0), F(ue, { key: 1 }, Ce(K(p), (ee) => (U(), F("span", {
                      key: ee.id,
                      class: "library-tag"
                    }, m(ee.name), 1))), 128))
                  ]),
                  d("p", Sh, [
                    d("a", {
                      href: p.filesUrl
                    }, m(g(c)("library", "Show in Files")), 9, Ch),
                    S[24] || (S[24] = he(" · ", -1)),
                    d("a", {
                      href: p.downloadUrl
                    }, m(g(c)("library", "Download source")), 9, xh),
                    S[25] || (S[25] = he(" · ", -1)),
                    d("a", {
                      href: p.detailsUrl
                    }, m(g(c)("library", "Details")), 9, Ah)
                  ])
                ])
              ], 40, oh)
            ])
          ], 2))), 128))
        ])),
        s.value.length > 0 ? (U(), F("nav", {
          key: 5,
          class: "library-pagination library-pagination--bottom",
          "aria-label": g(c)("library", "Catalogue pagination")
        }, [
          d("span", Rh, [
            he(m(g(c)("library", "Page")) + " " + m(z.value.page), 1),
            z.value.total > 0 ? (U(), F("span", Oh, " · " + m(z.value.from) + "–" + m(z.value.to), 1)) : _e("", !0)
          ]),
          z.value.previousUrl ? (U(), F("a", {
            key: 0,
            href: z.value.previousUrl
          }, m(g(c)("library", "Previous")), 9, Nh)) : (U(), F("span", Ph, m(g(c)("library", "Previous")), 1)),
          z.value.nextUrl ? (U(), F("a", {
            key: 2,
            href: z.value.nextUrl
          }, m(g(c)("library", "Next")), 9, kh)) : (U(), F("span", Lh, m(g(c)("library", "Next")), 1))
        ], 8, wh)) : _e("", !0)
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
function Ih(e, t, n, r = G) {
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
  v.value = "", v.textContent = i, u.appendChild(v), Ih(u, o, r, s), l.appendChild(u), e.appendChild(l);
}
function An(e) {
  const t = G(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function Dh(e, t = {}) {
  return G(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(G(e || t?.publication || ""))}`);
}
function Uh(e) {
  return G(e.discoveryPage) === "publication";
}
function Fh(e, t = {}) {
  return G(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(G(e))}`);
}
function Si(e) {
  return G(e.discoveryPage) === "year";
}
function Hh(e, t = {}) {
  return G(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(G(e))}`);
}
function Ci(e) {
  return G(e.discoveryPage) === "creator";
}
function $h(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([n, r]) => n !== "sort" && G(r).trim() !== "");
}
function jh() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function zn(e, t, n, r) {
  const i = document.createElement("a");
  return i.href = t, i.className = n, i.textContent = r, e.appendChild(i), i;
}
function Vh(e, t) {
  const n = document.createElement("span");
  return n.className = "library-muted", n.textContent = t, e.appendChild(n), n;
}
function Bh(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", c("library", "Catalogue search and filters")), fs(r, c("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), xn(r, c("library", "Type"), "type", n.type, c("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), fs(r, c("library", "Nextcloud tag"), "tag", n.tag, "photography"), xn(r, c("library", "Format"), "format", n.format, c("library", "All formats"), e.formats || [], Cl), xn(r, c("library", "Shelf"), "shelf", n.shelf, c("library", "All shelves"), e.shelves || []), xn(r, c("library", "Scan status"), "status", n.status, c("library", "All scan statuses"), e.scanStatuses || []), xn(r, c("library", "Sort"), "sort", n.sort || "title", c("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), xn(r, c("library", "Page size"), "limit", t.limit || 100, c("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", c("library", "Apply catalogue filters")), i.textContent = c("library", "Apply filters");
  const o = document.createElement("a");
  return o.href = "?", o.className = "button secondary", o.setAttribute("aria-label", c("library", "Clear catalogue filters")), o.textContent = c("library", "Clear"), r.append(i, o), r;
}
function zh() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", n = e.get("batchMetadataApplied") || "0", r = e.get("batchMetadataUnchanged") || "0", i = e.get("batchMetadataSkipped") || "0", o = document.createElement("p");
  return o.className = "library-notice library-batch-metadata-apply-result", o.textContent = c("library", `Batch metadata apply updated ${n} ${t} values; ${r} already matched, ${i} skipped.`), o;
}
function Wh(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-quick-filter-bar", r.setAttribute("aria-label", c("library", "Quick catalogue filters"));
  let i = null;
  const o = () => {
    window.clearTimeout(i), i = window.setTimeout(() => r.requestSubmit(), 350);
  };
  for (const [T, P] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(T) || G(P).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = T, j.value = G(P), r.appendChild(j);
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
  for (const [T, P, j, ne] of u) {
    const W = document.createElement("label");
    W.textContent = T;
    const oe = document.createElement("select");
    oe.name = P;
    for (const [re, z] of ne) {
      const I = document.createElement("option");
      I.value = G(re), I.textContent = G(z), G(re) === G(j) && (I.selected = !0), oe.appendChild(I);
    }
    oe.addEventListener("change", () => r.requestSubmit()), W.appendChild(oe), r.appendChild(W);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", c("library", "Apply catalogue filters")), v.textContent = c("library", "Apply filters");
  const b = document.createElement("a");
  return b.href = "?", b.className = "button secondary", b.setAttribute("aria-label", c("library", "Clear catalogue filters")), b.textContent = c("library", "Clear all"), r.append(v, b), r;
}
function qh(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, i = G(e.settingsUrl || ""), o = G(e.metadataExportUrl || ""), s = G(e.batchTagUrl || "/apps/library/bulk/tags"), l = G(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), u = G(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = G(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), b = G(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), T = document.createElement("div");
  T.className = "library-vue-catalogue library-vue-fallback", T.dataset.vueFallback = "true";
  const P = document.createElement("section");
  P.className = "library-panel", P.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const ne = document.createElement("div"), W = document.createElement("h2");
  W.id = "library-catalogue-heading", W.textContent = c("library", "Publication catalogue");
  const oe = document.createElement("p");
  oe.className = "library-muted", oe.textContent = c("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), ne.append(W, oe);
  const re = document.createElement("nav");
  if (re.className = "library-catalogue-toolbar", re.setAttribute("aria-label", c("library", "Library actions")), i) {
    const O = document.createElement("a");
    O.href = i, O.className = "button secondary", O.setAttribute("aria-label", "Open Library settings"), O.textContent = c("library", "Settings"), re.appendChild(O);
  }
  if (o) {
    const O = document.createElement("a");
    O.href = o, O.className = "button secondary", O.setAttribute("aria-label", "Export corrected metadata"), O.textContent = c("library", "Export corrected metadata"), re.appendChild(O);
  }
  if (e.metadataSidecarManifestUrl) {
    const O = document.createElement("a");
    O.href = e.metadataSidecarManifestUrl, O.className = "button secondary", O.setAttribute("aria-label", "Export sidecar manifest"), O.textContent = c("library", "Sidecar manifest"), re.appendChild(O);
  }
  if (e.metadataSidecarBundleUrl) {
    const O = document.createElement("a");
    O.href = e.metadataSidecarBundleUrl, O.className = "button secondary", O.setAttribute("aria-label", "Export sidecar ZIP"), O.textContent = c("library", "Sidecar ZIP"), re.appendChild(O);
  }
  j.append(ne, re), P.appendChild(j);
  const z = zh();
  z && P.appendChild(z), P.appendChild(Wh(e, r));
  const I = document.createElement("details");
  I.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = c("library", "Show catalogue filters"), I.append(V, Bh(e, r)), P.appendChild(I), Uh(e) || Si(e) || Ci(e)) {
    const O = document.createElement("section");
    O.className = "library-discovery-header", O.setAttribute("aria-labelledby", "library-discovery-heading");
    const N = document.createElement("p");
    N.className = "library-muted", N.textContent = Ci(e) ? c("library", "Creator") : Si(e) ? c("library", "Publication year") : c("library", "Publication / series");
    const $ = document.createElement("h3");
    $.id = "library-discovery-heading", $.textContent = G(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = `${r.total ?? n.length} ${Ci(e) ? c("library", "items by this creator. Sorted by publication context when available.") : Si(e) ? c("library", "items from this publication year. Sorted by publication date when available.") : c("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const ie = document.createElement("a");
    ie.href = "/apps/library/", ie.className = "button secondary", ie.textContent = c("library", "Back to full catalogue"), O.append(N, $, J, ie), P.appendChild(O);
  }
  const ce = document.createElement("p");
  ce.className = "library-muted library-filter-result-summary", ce.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`;
  const Re = document.createElement("a");
  Re.href = "?", Re.textContent = ` ${c("library", "Clear all filters")}`, ce.appendChild(Re), P.appendChild(ce);
  const xe = document.createElement("details");
  xe.className = "library-batch-actions";
  const Ue = document.createElement("summary");
  Ue.textContent = `${c("library", "Batch actions for current results")} (${r.total ?? n.length} ${c("library", "Current filter result")})`;
  const ye = document.createElement("form");
  ye.method = "post", ye.action = s, ye.className = "library-batch-tag-form";
  const Pe = An(e);
  Pe && ye.appendChild(Pe);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = O, $.value = G(N), ye.appendChild($);
  }
  const Xe = document.createElement("label");
  Xe.textContent = c("library", "Apply Nextcloud tag to current results");
  const nt = document.createElement("input");
  nt.type = "text", nt.name = "nextcloudTagName", nt.placeholder = "batch-review", Xe.appendChild(nt);
  const Ve = document.createElement("button");
  Ve.type = "submit", Ve.className = "button secondary", Ve.textContent = c("library", "Apply Nextcloud tag to current results");
  const ht = document.createElement("p");
  ht.className = "library-muted", ht.textContent = c("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), ye.append(Xe, Ve, ht);
  const Me = document.createElement("form");
  Me.method = "post", Me.action = l, Me.className = "library-batch-tag-remove-form";
  const Ae = An(e);
  Ae && Me.appendChild(Ae);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = O, $.value = G(N), Me.appendChild($);
  }
  const de = document.createElement("label");
  de.textContent = c("library", "Nextcloud tag");
  const se = document.createElement("input");
  se.type = "text", se.name = "nextcloudTagName", se.setAttribute("list", "library-nextcloud-tag-suggestions"), se.placeholder = c("library", "e.g. Review"), se.autocomplete = "off", de.appendChild(se);
  const Fe = document.createElement("button");
  Fe.type = "submit", Fe.className = "button secondary", Fe.textContent = c("library", "Remove tag from current results");
  const at = document.createElement("p");
  at.className = "library-muted", at.textContent = c("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), Me.append(de, Fe, at);
  const ke = document.createElement("form");
  ke.method = "post", ke.action = u, ke.className = "library-batch-metadata-reset-form";
  const Be = An(e);
  Be && ke.appendChild(Be);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = O, $.value = G(N), ke.appendChild($);
  }
  const ct = document.createElement("input");
  ct.type = "hidden", ct.name = "scannerConflicts", ct.value = "1";
  const fe = document.createElement("button");
  fe.type = "submit", fe.className = "button secondary", fe.textContent = c("library", "Reset filtered metadata");
  const Ct = document.createElement("p");
  Ct.className = "library-muted", Ct.textContent = c("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), ke.append(ct, fe, Ct);
  const He = document.createElement("form");
  He.method = "post", He.action = v, He.className = "library-batch-metadata-edit-preview-form", He.target = "_blank";
  const mt = An(e);
  mt && He.appendChild(mt);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = O, $.value = G(N), He.appendChild($);
  }
  const rt = document.createElement("label");
  rt.textContent = c("library", "Metadata field");
  const xt = document.createElement("select");
  xt.name = "bulkEditField";
  for (const [O, N] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const $ = document.createElement("option");
    $.value = O, $.textContent = c("library", N), xt.appendChild($);
  }
  rt.appendChild(xt);
  const ze = document.createElement("label");
  ze.textContent = c("library", "Preview value");
  const bt = document.createElement("input");
  bt.type = "text", bt.name = "bulkEditValue", bt.placeholder = "magazine, de, photography...", bt.autocomplete = "off", ze.appendChild(bt);
  const f = document.createElement("button");
  f.type = "submit", f.className = "button secondary", f.textContent = c("library", "Preview & apply metadata edit");
  const h = document.createElement("p");
  h.className = "library-muted", h.textContent = c("library", "Preview first, then apply from the review page."), He.append(rt, ze, f, h);
  const _ = document.createElement("form");
  _.method = "post", _.action = b, _.className = "library-batch-cover-refresh-form";
  const R = An(e);
  R && _.appendChild(R);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = O, $.value = G(N), _.appendChild($);
  }
  const E = document.createElement("button");
  E.type = "submit", E.className = "button secondary", E.textContent = c("library", "Request fresh cover previews");
  const x = document.createElement("p");
  x.className = "library-muted", x.textContent = c("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(E, x), xe.append(Ue, ye, Me, ke, He, _), P.appendChild(xe);
  const L = document.createElement("nav");
  L.className = "library-pagination", L.setAttribute("aria-label", c("library", "Catalogue pagination"));
  const M = document.createElement("span");
  M.className = "library-pagination-range", M.textContent = `Page ${r.page ?? 1} · ${r.from ?? 0}–${r.to ?? n.length}`, L.appendChild(M), P.appendChild(L);
  const k = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], C = document.createElement("details");
  C.className = k.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const K = document.createElement("summary");
  K.className = "library-periodical-groups-summary", K.textContent = c("library", "Show top series and periodicals"), C.appendChild(K);
  const H = document.createElement("h3");
  H.textContent = k.length > 0 ? c("library", "Top series and periodicals") : c("library", "No series or periodicals found yet");
  const q = document.createElement("p");
  if (q.className = "library-muted", q.textContent = k.length > 0 ? c("library", "Jump into recurring publications with one click.") : c("library", "Add publication or series names in item details to build this shortcut panel."), C.append(H, q), k.length > 0) {
    const O = document.createElement("ul");
    for (const N of k) {
      const $ = document.createElement("li"), J = document.createElement("a");
      J.href = Dh(N.publication, N), J.textContent = G(N.publication);
      const ie = document.createElement("span");
      ie.className = "library-muted", ie.textContent = `${N.itemCount} items`, $.append(J, ie), O.appendChild($);
    }
    C.appendChild(O);
  }
  P.appendChild(C);
  const X = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (X.length > 0) {
    const O = document.createElement("details");
    O.className = "library-year-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = c("library", "Show publication years");
    const $ = document.createElement("h3");
    $.textContent = c("library", "Top publication years");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = c("library", "Jump into dated books, magazines, journals and comics by year.");
    const ie = document.createElement("ul");
    for (const A of X) {
      const S = document.createElement("li"), p = document.createElement("a");
      p.href = Fh(A, e), p.textContent = G(A), S.appendChild(p), ie.appendChild(S);
    }
    O.append(N, $, J, ie), P.appendChild(O);
  }
  const Q = Array.isArray(e.creators) ? e.creators : [];
  if (Q.length > 0) {
    const O = document.createElement("details");
    O.className = "library-creator-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = c("library", "Show creators");
    const $ = document.createElement("h3");
    $.textContent = c("library", "Top creators");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = c("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const ie = document.createElement("ul");
    for (const A of Q) {
      const S = document.createElement("li"), p = document.createElement("a");
      p.href = Hh(A, e), p.textContent = G(A), S.appendChild(p), ie.appendChild(S);
    }
    O.append(N, $, J, ie), P.appendChild(O);
  }
  if (n.length === 0) {
    const O = document.createElement("div"), N = Number(e.rootCount || 0), $ = Number(e.enabledRootCount || 0), J = $h(e);
    O.className = "library-empty-content", (N === 0 || $ === 0) && O.classList.add("library-first-run-guidance"), J && N > 0 && $ > 0 && O.classList.add("library-filter-empty-state"), O.setAttribute("role", "status");
    const ie = document.createElement("h3"), A = document.createElement("p");
    A.className = "library-muted";
    const S = document.createElement("p");
    S.className = "library-empty-actions", N === 0 ? (ie.textContent = c("library", "Start with one Library root"), A.textContent = c("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), zn(S, i, "button primary", c("library", "Add a Library root")), Vh(S, c("library", "Run a scan after saving a root"))) : $ === 0 ? (ie.textContent = c("library", "No enabled Library roots"), A.textContent = c("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), zn(S, i, "button primary", c("library", "Open Library settings"))) : J ? (ie.textContent = c("library", "No matches for the current filters"), A.textContent = c("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), zn(S, jh(), "button secondary", c("library", "Clear search")), zn(S, "?", "button primary", c("library", "Clear all filters"))) : (ie.textContent = c("library", "No catalogue items yet"), A.textContent = c("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), zn(S, i, "button primary", c("library", "Run a scan from settings"))), O.append(ie, A, S), P.appendChild(O);
  } else {
    const O = document.createElement("div");
    O.className = "library-cover-gallery";
    for (const N of n) {
      const $ = document.createElement("article");
      $.className = "library-cover-card";
      const J = document.createElement("a");
      J.className = "library-cover-link", J.href = G(N.openUrl || "#"), J.setAttribute("aria-label", `Read ${G(N.title || "publication")}`);
      const ie = document.createElement("img");
      ie.className = "library-cover-image", ie.src = G(N.coverUrl || ""), ie.alt = `Cover for ${G(N.title || "publication")}`, ie.loading = "lazy", J.appendChild(ie);
      const A = An(e), S = document.createElement("form");
      S.method = "post", S.action = G(N.starUrl || ""), S.className = "library-cover-star-form", A && S.appendChild(A);
      const p = document.createElement("input");
      p.type = "hidden", p.name = "returnTo", p.value = "catalogue";
      const ee = document.createElement("input");
      ee.type = "hidden", ee.name = "starred", ee.value = N.starred ? "0" : "1";
      const ge = document.createElement("button");
      ge.type = "submit", ge.className = N.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", ge.setAttribute("aria-pressed", N.starred ? "true" : "false"), ge.setAttribute("aria-label", N.starred ? c("library", "Unstar this publication") : c("library", "Star this publication")), ge.title = N.starred ? c("library", "Unstar this publication") : c("library", "Star this publication"), ge.textContent = N.starred ? "★" : "☆", S.append(p, ee, ge);
      const Ie = document.createElement("div");
      Ie.className = "library-cover-summary";
      const Gt = document.createElement("h3");
      if (Gt.textContent = G(N.title || "Untitled publication"), Ie.appendChild(Gt), N.creators) {
        const wt = document.createElement("p");
        wt.className = "library-creator", wt.textContent = G(N.creators), Ie.appendChild(wt);
      }
      const tn = document.createElement("dl");
      tn.className = "library-cover-detail-list";
      const Dn = [
        ["Type", G(N.publicationType || "other")],
        ["Format", N.extension ? Cl(N.extension) : ""],
        ["Shelf", N.shelf ? G(N.shelf) : ""]
      ].filter(([, wt]) => wt !== "");
      for (const [wt, cr] of Dn) {
        const Yt = document.createElement("div");
        Yt.className = "library-cover-detail-chip";
        const nn = document.createElement("dt");
        nn.textContent = wt;
        const ut = document.createElement("dd");
        ut.textContent = cr, Yt.append(nn, ut), tn.appendChild(Yt);
      }
      Ie.appendChild(tn);
      const Dt = document.createElement("p"), At = document.createElement("a");
      At.href = G(N.openUrl || "#"), At.textContent = c("library", "Read");
      const gn = document.createElement("a");
      gn.href = G(N.filesUrl || "#"), gn.textContent = c("library", "Show in Files");
      const _n = document.createElement("a");
      _n.href = G(N.downloadUrl || "#"), _n.textContent = c("library", "Download source");
      const vn = document.createElement("a");
      vn.href = G(N.detailsUrl || "#"), vn.textContent = c("library", "Details"), Dt.append(At, document.createTextNode(" · "), gn, document.createTextNode(" · "), _n, document.createTextNode(" · "), vn), Ie.appendChild(Dt), $.append(J, S, Ie), O.appendChild($);
    }
    P.appendChild(O);
  }
  return T.appendChild(P), T;
}
if (Ar)
  try {
    cu(Mh, { state: us }).mount(Ar);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Ar.replaceChildren(qh(us));
  }
//# sourceMappingURL=library-main.mjs.map
