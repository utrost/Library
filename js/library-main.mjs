// @__NO_SIDE_EFFECTS__
function Ui(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const _e = {}, On = [], It = () => {
}, ds = () => !1, Mr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ur = (e) => e.startsWith("onUpdate:"), Ge = Object.assign, Fi = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, $l = Object.prototype.hasOwnProperty, be = (e, t) => $l.call(e, t), Q = Array.isArray, Zt = (e) => sr(e) === "[object Map]", mn = (e) => sr(e) === "[object Set]", mo = (e) => sr(e) === "[object Date]", ie = (e) => typeof e == "function", Ne = (e) => typeof e == "string", Dt = (e) => typeof e == "symbol", ye = (e) => e !== null && typeof e == "object", ps = (e) => (ye(e) || ie(e)) && ie(e.then) && ie(e.catch), hs = Object.prototype.toString, sr = (e) => hs.call(e), Vl = (e) => sr(e).slice(8, -1), ms = (e) => sr(e) === "[object Object]", Hi = (e) => Ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Gn = /* @__PURE__ */ Ui(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, zl = /-\w/g, vt = Fr(
  (e) => e.replace(zl, (t) => t.slice(1).toUpperCase())
), Bl = /\B([A-Z])/g, bn = Fr(
  (e) => e.replace(Bl, "-$1").toLowerCase()
), bs = Fr((e) => e.charAt(0).toUpperCase() + e.slice(1)), ni = Fr(
  (e) => e ? `on${bs(e)}` : ""
), kt = (e, t) => !Object.is(e, t), Sr = (e, ...t) => {
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
const jr = () => bo || (bo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ji(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = Ne(r) ? Gl(r) : ji(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Ne(e) || ye(e))
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
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const r = Nn(e[n]);
      r && (t += r + " ");
    }
  else if (ye(e))
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
    n = Qt(e[r], t[r]);
  return n;
}
function yo(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const i of e) {
    let o = -1;
    for (let s = 0; s < n.length; s++)
      if (!r[s] && Qt(i, n[s])) {
        o = s;
        break;
      }
    if (o < 0) return !1;
    r[o] = 1;
  }
  return !0;
}
function Qt(e, t) {
  if (e === t) return !0;
  let n = mo(e), r = mo(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Dt(e), r = Dt(t), n || r)
    return e === t;
  if (n = Q(e), r = Q(t), n || r)
    return n && r ? Jl(e, t) : !1;
  if (n = ye(e), r = ye(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = Zt(e), r = Zt(t), n || r || (n = mn(e), r = mn(t), n || r))
      return n && r ? yo(e, t) : !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s), u = t.hasOwnProperty(s);
      if (l && !u || !l && u || !Qt(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((n) => Qt(n, t));
}
const _s = (e) => !!(e && e.__v_isRef === !0), m = (e) => Ne(e) ? e : e == null ? "" : Q(e) || ye(e) && (e.toString === hs || !ie(e.toString)) ? _s(e) ? m(e.value) : JSON.stringify(e, vs, 2) : String(e), vs = (e, t) => _s(t) ? vs(e, t.value) : Zt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], o) => (n[ri(r, o) + " =>"] = i, n),
    {}
  )
} : mn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ri(n))
} : Dt(t) ? ri(t) : ye(t) && !Q(t) && !ms(t) ? String(t) : t, ri = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Dt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let je;
class Ql {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && je && (je.active ? (this.parent = je, this.index = (je.scopes || (je.scopes = [])).push(
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
      const n = je;
      try {
        return je = this, t();
      } finally {
        je = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = je, je = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (je === this)
        je = this.prevScope;
      else {
        let t = je;
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
  return je;
}
let Ee;
const ii = /* @__PURE__ */ new WeakSet();
class Es {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, je && (je.active ? je.effects.push(this) : this.flags &= -2);
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
    const t = Ee, n = Et;
    Ee = this, Et = !0;
    try {
      return this.fn();
    } finally {
      xs(this), Ee = t, Et = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        zi(t);
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
function $i() {
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
    r.version === -1 ? (r === n && (n = i), zi(r), ta(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
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
  const t = e.dep, n = Ee, r = Et;
  Ee = e, Et = !0;
  try {
    Cs(e);
    const i = e.fn(e._value);
    (t.version === 0 || kt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Ee = n, Et = r, xs(e), e.flags &= -3;
  }
}
function zi(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      zi(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ta(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Et = !0;
const ws = [];
function zt() {
  ws.push(Et), Et = !1;
}
function Bt() {
  const e = ws.pop();
  Et = e === void 0 ? !0 : e;
}
function go(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ee;
    Ee = void 0;
    try {
      t();
    } finally {
      Ee = n;
    }
  }
}
let er = 0;
class na {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Bi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ee || !Et || Ee === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ee)
      n = this.activeLink = new na(Ee, this), Ee.deps ? (n.prevDep = Ee.depsTail, Ee.depsTail.nextDep = n, Ee.depsTail = n) : Ee.deps = Ee.depsTail = n, Rs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ee.depsTail, n.nextDep = void 0, Ee.depsTail.nextDep = n, Ee.depsTail = n, Ee.deps === n && (Ee.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, er++, this.notify(t);
  }
  notify(t) {
    $i();
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
const Ai = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ Symbol(
  ""
), wi = /* @__PURE__ */ Symbol(
  ""
), tr = /* @__PURE__ */ Symbol(
  ""
);
function qe(e, t, n) {
  if (Et && Ee) {
    let r = Ai.get(e);
    r || Ai.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new Bi()), i.map = r, i.key = n), i.track();
  }
}
function jt(e, t, n, r, i, o) {
  const s = Ai.get(e);
  if (!s) {
    er++;
    return;
  }
  const l = (u) => {
    u && u.trigger();
  };
  if ($i(), t === "clear")
    s.forEach(l);
  else {
    const u = Q(e), _ = u && Hi(n);
    if (u && n === "length") {
      const b = Number(r);
      s.forEach((E, P) => {
        (P === "length" || P === tr || !Dt(P) && P >= b) && l(E);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && l(s.get(n)), _ && l(s.get(tr)), t) {
        case "add":
          u ? _ && l(s.get("length")) : (l(s.get(dn)), Zt(e) && l(s.get(wi)));
          break;
        case "delete":
          u || (l(s.get(dn)), Zt(e) && l(s.get(wi)));
          break;
        case "set":
          Zt(e) && l(s.get(dn));
          break;
      }
  }
  Vi();
}
function Cn(e) {
  const t = /* @__PURE__ */ me(e);
  return t === e ? t : (qe(t, "iterate", tr), /* @__PURE__ */ yt(e) ? t : t.map(Tt));
}
function $r(e) {
  return qe(e = /* @__PURE__ */ me(e), "iterate", tr), e;
}
function Pt(e, t) {
  return /* @__PURE__ */ Wt(e) ? In(/* @__PURE__ */ pn(e) ? Tt(t) : t) : Tt(t);
}
const ra = {
  __proto__: null,
  [Symbol.iterator]() {
    return oi(this, Symbol.iterator, (e) => Pt(this, e));
  },
  concat(...e) {
    return Cn(this).concat(
      ...e.map((t) => Q(t) ? Cn(t) : t)
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
  const r = $r(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ yt(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const ia = Array.prototype;
function Ut(e, t, n, r, i, o) {
  const s = $r(e), l = s !== e && !/* @__PURE__ */ yt(e), u = s[t];
  if (u !== ia[t]) {
    const E = u.apply(e, o);
    return l ? Tt(E) : E;
  }
  let _ = n;
  s !== e && (l ? _ = function(E, P) {
    return n.call(this, Pt(e, E), P, e);
  } : n.length > 2 && (_ = function(E, P) {
    return n.call(this, E, P, e);
  }));
  const b = u.call(s, _, r);
  return l && i ? i(b) : b;
}
function _o(e, t, n, r) {
  const i = $r(e), o = i !== e && !/* @__PURE__ */ yt(e);
  let s = n, l = !1;
  i !== e && (o ? (l = r.length === 0, s = function(_, b, E) {
    return l && (l = !1, _ = Pt(e, _)), n.call(this, _, Pt(e, b), E, e);
  }) : n.length > 3 && (s = function(_, b, E) {
    return n.call(this, _, b, E, e);
  }));
  const u = i[t](s, ...r);
  return l ? Pt(e, u) : u;
}
function si(e, t, n) {
  const r = /* @__PURE__ */ me(e);
  qe(r, "iterate", tr);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Ki(n[0]) ? (n[0] = /* @__PURE__ */ me(n[0]), r[t](...n)) : i;
}
function Hn(e, t, n = []) {
  zt(), $i();
  const r = (/* @__PURE__ */ me(e))[t].apply(e, n);
  return Vi(), Bt(), r;
}
const oa = /* @__PURE__ */ Ui("__proto__,__v_isRef,__isVue"), Os = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Dt)
);
function sa(e) {
  Dt(e) || (e = String(e));
  const t = /* @__PURE__ */ me(this);
  return qe(t, "has", e), t.hasOwnProperty(e);
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
      return r === (i ? o ? ba : Is : o ? ks : Ls).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = Q(t);
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
      /* @__PURE__ */ Ke(t) ? t : r
    );
    if ((Dt(n) ? Os.has(n) : oa(n)) || (i || qe(t, "get", n), o))
      return l;
    if (/* @__PURE__ */ Ke(l)) {
      const u = s && Hi(n) ? l : l.value;
      return i && ye(u) ? /* @__PURE__ */ Oi(u) : u;
    }
    return ye(l) ? i ? /* @__PURE__ */ Oi(l) : /* @__PURE__ */ un(l) : l;
  }
}
class Ps extends Ns {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    const s = Q(t) && Hi(n);
    if (!this._isShallow) {
      const _ = /* @__PURE__ */ Wt(o);
      if (!/* @__PURE__ */ yt(r) && !/* @__PURE__ */ Wt(r) && (o = /* @__PURE__ */ me(o), r = /* @__PURE__ */ me(r)), !s && /* @__PURE__ */ Ke(o) && !/* @__PURE__ */ Ke(r))
        return _ || (o.value = r), !0;
    }
    const l = s ? Number(n) < t.length : be(t, n), u = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Ke(t) ? t : i
    );
    return t === /* @__PURE__ */ me(i) && u && (l ? kt(r, o) && jt(t, "set", n, r) : jt(t, "add", n, r)), u;
  }
  deleteProperty(t, n) {
    const r = be(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && jt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Dt(n) || !Os.has(n)) && qe(t, "has", n), r;
  }
  ownKeys(t) {
    return qe(
      t,
      "iterate",
      Q(t) ? "length" : dn
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
    const i = this.__v_raw, o = /* @__PURE__ */ me(i), s = Zt(o), l = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, _ = i[e](...r), b = n ? Ri : t ? In : Tt;
    return !t && qe(
      o,
      "iterate",
      u ? wi : dn
    ), Ge(
      // inheriting all iterator properties
      Object.create(_),
      {
        // iterator protocol
        next() {
          const { value: E, done: P } = _.next();
          return P ? { value: E, done: P } : {
            value: l ? [b(E[0]), b(E[1])] : b(E),
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
      e || (kt(i, l) && qe(s, "get", i), qe(s, "get", l));
      const { has: u } = br(s), _ = t ? Ri : e ? In : Tt;
      if (u.call(s, i))
        return _(o.get(i));
      if (u.call(s, l))
        return _(o.get(l));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && qe(/* @__PURE__ */ me(i), "iterate", dn), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ me(o), l = /* @__PURE__ */ me(i);
      return e || (kt(i, l) && qe(s, "has", i), qe(s, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const s = this, l = s.__v_raw, u = /* @__PURE__ */ me(l), _ = t ? Ri : e ? In : Tt;
      return !e && qe(u, "iterate", dn), l.forEach((b, E) => i.call(o, _(b), _(E), s));
    }
  };
  return Ge(
    n,
    e ? {
      add: yr("add"),
      set: yr("set"),
      delete: yr("delete"),
      clear: yr("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ me(this), s = br(o), l = /* @__PURE__ */ me(i), u = !t && !/* @__PURE__ */ yt(i) && !/* @__PURE__ */ Wt(i) ? l : i;
        return s.has.call(o, u) || kt(i, u) && s.has.call(o, i) || kt(l, u) && s.has.call(o, l) || (o.add(u), jt(o, "add", u, u)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ yt(o) && !/* @__PURE__ */ Wt(o) && (o = /* @__PURE__ */ me(o));
        const s = /* @__PURE__ */ me(this), { has: l, get: u } = br(s);
        let _ = l.call(s, i);
        _ || (i = /* @__PURE__ */ me(i), _ = l.call(s, i));
        const b = u.call(s, i);
        return s.set(i, o), _ ? kt(o, b) && jt(s, "set", i, o) : jt(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ me(this), { has: s, get: l } = br(o);
        let u = s.call(o, i);
        u || (i = /* @__PURE__ */ me(i), u = s.call(o, i)), l && l.call(o, i);
        const _ = o.delete(i);
        return u && jt(o, "delete", i, void 0), _;
      },
      clear() {
        const i = /* @__PURE__ */ me(this), o = i.size !== 0, s = i.clear();
        return o && jt(
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
const Ls = /* @__PURE__ */ new WeakMap(), ks = /* @__PURE__ */ new WeakMap(), Is = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakMap();
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
function un(e) {
  return /* @__PURE__ */ Wt(e) ? e : qi(
    e,
    !1,
    aa,
    pa,
    Ls
  );
}
// @__NO_SIDE_EFFECTS__
function ga(e) {
  return qi(
    e,
    !1,
    ua,
    ha,
    ks
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
  if (!ye(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
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
function pn(e) {
  return /* @__PURE__ */ Wt(e) ? /* @__PURE__ */ pn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
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
const Tt = (e) => ye(e) ? /* @__PURE__ */ un(e) : e, In = (e) => ye(e) ? /* @__PURE__ */ Oi(e) : e;
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function va(e) {
  return Ea(e, !1);
}
function Ea(e, t) {
  return /* @__PURE__ */ Ke(e) ? e : new Ta(e, t);
}
class Ta {
  constructor(t, n) {
    this.dep = new Bi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ me(t), this._value = n ? t : Tt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ yt(t) || /* @__PURE__ */ Wt(t);
    t = r ? t : /* @__PURE__ */ me(t), kt(t, n) && (this._rawValue = t, this._value = r ? t : Tt(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Ke(e) ? e.value : e;
}
const Sa = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ Ke(i) && !/* @__PURE__ */ Ke(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Ds(e) {
  return /* @__PURE__ */ pn(e) ? e : new Proxy(e, Sa);
}
class Ca {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Bi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = er - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ee !== this)
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
  return ie(e) ? r = e : (r = e.get, i = e.set), new Ca(r, i, n);
}
const gr = {}, wr = /* @__PURE__ */ new WeakMap();
let ln;
function Aa(e, t = !1, n = ln) {
  if (n) {
    let r = wr.get(n);
    r || wr.set(n, r = []), r.push(e);
  }
}
function wa(e, t, n = _e) {
  const { immediate: r, deep: i, once: o, scheduler: s, augmentJob: l, call: u } = n, _ = ($) => i ? $ : /* @__PURE__ */ yt($) || i === !1 || i === 0 ? $t($, 1) : $t($);
  let b, E, P, V, te = !1, B = !1;
  if (/* @__PURE__ */ Ke(e) ? (E = () => e.value, te = /* @__PURE__ */ yt(e)) : /* @__PURE__ */ pn(e) ? (E = () => _(e), te = !0) : Q(e) ? (B = !0, te = e.some(($) => /* @__PURE__ */ pn($) || /* @__PURE__ */ yt($)), E = () => e.map(($) => {
    if (/* @__PURE__ */ Ke($))
      return $.value;
    if (/* @__PURE__ */ pn($))
      return _($);
    if (ie($))
      return u ? u($, 2) : $();
  })) : ie(e) ? t ? E = u ? () => u(e, 2) : e : E = () => {
    if (P) {
      zt();
      try {
        P();
      } finally {
        Bt();
      }
    }
    const $ = ln;
    ln = b;
    try {
      return u ? u(e, 3, [V]) : e(V);
    } finally {
      ln = $;
    }
  } : E = It, t && i) {
    const $ = E, le = i === !0 ? 1 / 0 : i;
    E = () => $t($(), le);
  }
  const re = ea(), ne = () => {
    b.stop(), re && re.active && Fi(re.effects, b);
  };
  if (o && t) {
    const $ = t;
    t = (...le) => {
      const Re = $(...le);
      return ne(), Re;
    };
  }
  let q = B ? new Array(e.length).fill(gr) : gr;
  const D = ($) => {
    if (!(!(b.flags & 1) || !b.dirty && !$))
      if (t) {
        const le = b.run();
        if ($ || i || te || (B ? le.some((Re, Oe) => kt(Re, q[Oe])) : kt(le, q))) {
          P && P();
          const Re = ln;
          ln = b;
          try {
            const Oe = [
              le,
              // pass undefined as the old value when it's changed for the first time
              q === gr ? void 0 : B && q[0] === gr ? [] : q,
              V
            ];
            q = le, u ? u(t, 3, Oe) : (
              // @ts-expect-error
              t(...Oe)
            );
          } finally {
            ln = Re;
          }
        }
      } else
        b.run();
  };
  return l && l(D), b = new Es(E), b.scheduler = s ? () => s(D, !1) : D, V = ($) => Aa($, !1, b), P = b.onStop = () => {
    const $ = wr.get(b);
    if ($) {
      if (u)
        u($, 4);
      else
        for (const le of $) le();
      wr.delete(b);
    }
  }, t ? r ? D(!0) : q = b.run() : s ? s(D.bind(null, !0), !0) : b.run(), ne.pause = b.pause.bind(b), ne.resume = b.resume.bind(b), ne.stop = ne, ne;
}
function $t(e, t = 1 / 0, n) {
  if (t <= 0 || !ye(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ke(e))
    $t(e.value, t, n);
  else if (Q(e))
    for (let r = 0; r < e.length; r++)
      $t(e[r], t, n);
  else if (mn(e) || Zt(e))
    e.forEach((r) => {
      $t(r, t, n);
    });
  else if (ms(e)) {
    for (const r in e)
      $t(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && $t(e[r], t, n);
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
  if (ie(e)) {
    const i = lr(e, t, n, r);
    return i && ps(i) && i.catch((o) => {
      Vr(o, t, n);
    }), i;
  }
  if (Q(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(St(e[o], t, n, r));
    return i;
  }
}
function Vr(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || _e;
  if (t) {
    let l = t.parent;
    const u = t.proxy, _ = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const b = l.ec;
      if (b) {
        for (let E = 0; E < b.length; E++)
          if (b[E](e, u, _) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      zt(), lr(o, null, 10, [
        e,
        u,
        _
      ]), Bt();
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
const nt = [];
let Nt = -1;
const Pn = [];
let Jt = null, wn = 0;
const Ms = /* @__PURE__ */ Promise.resolve();
let Rr = null;
function Us(e) {
  const t = Rr || Ms;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Oa(e) {
  let t = Nt + 1, n = nt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = nt[r], o = nr(i);
    o < e || o === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Gi(e) {
  if (!(e.flags & 1)) {
    const t = nr(e), n = nt[nt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= nr(n) ? nt.push(e) : nt.splice(Oa(t), 0, e), e.flags |= 1, Fs();
  }
}
function Fs() {
  Rr || (Rr = Ms.then(js));
}
function Na(e) {
  if (!Q(e))
    Jt && e.id === -1 ? Jt.splice(wn + 1, 0, e) : e.flags & 1 || (Pn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Pn.push(e[t]);
  Fs();
}
function vo(e, t, n = Nt + 1) {
  for (; n < nt.length; n++) {
    const r = nt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      nt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Hs(e) {
  if (Pn.length) {
    const t = [...new Set(Pn)].sort(
      (n, r) => nr(n) - nr(r)
    );
    if (Pn.length = 0, Jt) {
      for (let n = 0; n < t.length; n++)
        Jt.push(t[n]);
      return;
    }
    for (Jt = t, wn = 0; wn < Jt.length; wn++) {
      const n = Jt[wn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Jt = null, wn = 0;
  }
}
const nr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function js(e) {
  try {
    for (Nt = 0; Nt < nt.length; Nt++) {
      const t = nt[Nt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), lr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Nt < nt.length; Nt++) {
      const t = nt[Nt];
      t && (t.flags &= -2);
    }
    Nt = -1, nt.length = 0, Hs(), Rr = null, (nt.length || Pn.length) && js();
  }
}
let bt = null, $s = null;
function Or(e) {
  const t = bt;
  return bt = e, $s = e && e.type.__scopeId || null, t;
}
function Pa(e, t = bt, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && Po(-1);
    const o = Or(t), s = hn.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let u = hn.length; u > s; u--) pl();
      Or(o), r._d && Po(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Me(e, t) {
  if (bt === null)
    return e;
  const n = Kr(bt), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, l, u = _e] = t[i];
    o && (ie(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && $t(s), r.push({
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
function rn(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    o && (l.oldValue = o[s].value);
    let u = l.dir[r];
    u && (zt(), St(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Bt());
  }
}
function La(e, t) {
  if (rt) {
    let n = rt.provides;
    const r = rt.parent && rt.parent.provides;
    r === n && (n = rt.provides = Object.create(r)), n[e] = t;
  }
}
function Cr(e, t, n = !1) {
  const r = Rc();
  if (r || Ln) {
    let i = Ln ? Ln._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && ie(t) ? t.call(r && r.proxy) : t;
  }
}
const ka = /* @__PURE__ */ Symbol.for("v-scx"), Ia = () => Cr(ka);
function li(e, t, n) {
  return Vs(e, t, n);
}
function Vs(e, t, n = _e) {
  const { immediate: r, deep: i, flush: o, once: s } = n, l = Ge({}, n), u = t && r || !t && o !== "post";
  let _;
  if (or) {
    if (o === "sync") {
      const V = Ia();
      _ = V.__watcherHandles || (V.__watcherHandles = []);
    } else if (!u) {
      const V = () => {
      };
      return V.stop = It, V.resume = It, V.pause = It, V;
    }
  }
  const b = rt;
  l.call = (V, te, B) => St(V, b, te, B);
  let E = !1;
  o === "post" ? l.scheduler = (V) => {
    ct(V, b && b.suspense);
  } : o !== "sync" && (E = !0, l.scheduler = (V, te) => {
    te ? V() : Gi(V);
  }), l.augmentJob = (V) => {
    t && (V.flags |= 4), E && (V.flags |= 2, b && (V.id = b.uid, V.i = b));
  };
  const P = wa(e, t, l);
  return or && (_ ? _.push(P) : u && P()), P;
}
function Da(e, t, n) {
  const r = this.proxy, i = Ne(e) ? e.includes(".") ? zs(r, e) : () => r[e] : e.bind(r, r);
  let o;
  ie(t) ? o = t : (o = t.handler, n = t);
  const s = ar(this), l = Vs(i, o.bind(r), n);
  return s(), l;
}
function zs(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const Ma = /* @__PURE__ */ Symbol("_vte"), zr = (e) => e.__isTeleport, ai = /* @__PURE__ */ Symbol("_leaveCb");
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
function Bs(e) {
  if (!Xi(e))
    return zr(e.type) && e.children ? Ua(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ie(n.default))
      return n.default();
  }
}
function Yi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Yi(
      zr(n.type) && Bs(n) || n,
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
  if (Q(e)) {
    e.forEach(
      (B, re) => Jn(
        B,
        t && (Q(t) ? t[re] : t),
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
  const o = r.shapeFlag & 4 ? Kr(r.component) : r.el, s = i ? null : o, { i: l, r: u } = e, _ = t && t.r, b = l.refs === _e ? l.refs = {} : l.refs, E = l.setupState, P = /* @__PURE__ */ me(E), V = E === _e ? ds : (B) => Eo(b, B) ? !1 : be(P, B), te = (B, re) => !(re && Eo(b, re));
  if (_ != null && _ !== u) {
    if (To(t), Ne(_))
      b[_] = null, V(_) && (E[_] = null);
    else if (/* @__PURE__ */ Ke(_)) {
      const B = t;
      te(_, B.k) && (_.value = null), B.k && (b[B.k] = null);
    }
  }
  if (ie(u))
    lr(u, l, 12, [s, b]);
  else {
    const B = Ne(u), re = /* @__PURE__ */ Ke(u);
    if (B || re) {
      const ne = () => {
        if (e.f) {
          const q = B ? V(u) ? E[u] : b[u] : te() || !e.k ? u.value : b[e.k];
          if (i)
            Q(q) && Fi(q, o);
          else if (Q(q))
            q.includes(o) || q.push(o);
          else if (B)
            b[u] = [o], V(u) && (E[u] = b[u]);
          else {
            const D = [o];
            te(u, e.k) && (u.value = D), e.k && (b[e.k] = D);
          }
        } else B ? (b[u] = s, V(u) && (E[u] = s)) : re && (te(u, e.k) && (u.value = s), e.k && (b[e.k] = s));
      };
      if (s) {
        const q = () => {
          ne(), Nr.delete(e);
        };
        q.id = -1, Nr.set(e, q), ct(q, n);
      } else
        To(e), ne();
    }
  }
}
function To(e) {
  const t = Nr.get(e);
  t && (t.flags |= 8, Nr.delete(e));
}
jr().requestIdleCallback;
jr().cancelIdleCallback;
const Zn = (e) => !!e.type.__asyncLoader, Xi = (e) => e.type.__isKeepAlive;
function Fa(e, t) {
  qs(e, "a", t);
}
function Ha(e, t) {
  qs(e, "da", t);
}
function qs(e, t, n = rt) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Br(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Xi(i.parent.vnode) && ja(r, t, n, i), i = i.parent;
  }
}
function ja(e, t, n, r) {
  const i = Br(
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
function Br(e, t, n = rt, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      zt();
      const l = ar(n), u = St(t, n, e, s);
      return l(), Bt(), u;
    });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const Kt = (e) => (t, n = rt) => {
  (!or || e === "sp") && Br(e, (...r) => t(...r), n);
}, $a = Kt("bm"), Ks = Kt("m"), Va = Kt(
  "bu"
), za = Kt("u"), Gs = Kt(
  "bum"
), Ys = Kt("um"), Ba = Kt(
  "sp"
), Wa = Kt("rtg"), qa = Kt("rtc");
function Ka(e, t = rt) {
  Br("ec", e, t);
}
const Ga = /* @__PURE__ */ Symbol.for("v-ndc");
function xe(e, t, n, r) {
  let i;
  const o = n, s = Q(e);
  if (s || Ne(e)) {
    const l = s && /* @__PURE__ */ pn(e);
    let u = !1, _ = !1;
    l && (u = !/* @__PURE__ */ yt(e), _ = /* @__PURE__ */ Wt(e), e = $r(e)), i = new Array(e.length);
    for (let b = 0, E = e.length; b < E; b++)
      i[b] = t(
        u ? _ ? In(Tt(e[b])) : Tt(e[b]) : e[b],
        b,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o);
  } else if (ye(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, u) => t(l, u, void 0, o)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let u = 0, _ = l.length; u < _; u++) {
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
  /* @__PURE__ */ Ge(/* @__PURE__ */ Object.create(null), {
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
    $watch: (e) => Da.bind(e)
  })
), ci = (e, t) => e !== _e && !e.__isScriptSetup && be(e, t), Ya = {
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
        if (i !== _e && be(i, t))
          return s[t] = 2, i[t];
        if (be(o, t))
          return s[t] = 3, o[t];
        if (n !== _e && be(n, t))
          return s[t] = 4, n[t];
        Pi && (s[t] = 0);
      }
    }
    const _ = Qn[t];
    let b, E;
    if (_)
      return t === "$attrs" && qe(e.attrs, "get", ""), _(e);
    if (
      // css module (injected by vue-loader)
      (b = l.__cssModules) && (b = b[t])
    )
      return b;
    if (n !== _e && be(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      E = u.config.globalProperties, be(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return ci(i, t) ? (i[t] = n, !0) : r !== _e && be(r, t) ? (r[t] = n, !0) : be(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: o, type: s }
  }, l) {
    let u;
    return !!(n[l] || e !== _e && l[0] !== "$" && be(e, l) || ci(t, l) || be(o, l) || be(r, l) || be(Qn, l) || be(i.config.globalProperties, l) || (u = s.__cssModules) && u[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : be(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function So(e) {
  return Q(e) ? e.reduce(
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
    inject: _,
    // lifecycle
    created: b,
    beforeMount: E,
    mounted: P,
    beforeUpdate: V,
    updated: te,
    activated: B,
    deactivated: re,
    beforeDestroy: ne,
    beforeUnmount: q,
    destroyed: D,
    unmounted: $,
    render: le,
    renderTracked: Re,
    renderTriggered: Oe,
    errorCaptured: Ae,
    serverPrefetch: Se,
    // public API
    expose: Pe,
    inheritAttrs: $e,
    // assets
    components: it,
    directives: Ve,
    filters: ze
  } = t;
  if (_ && Ja(_, r, null), s)
    for (const ce in s) {
      const oe = s[ce];
      ie(oe) && (r[ce] = oe.bind(n));
    }
  if (i) {
    const ce = i.call(n, n);
    ye(ce) && (e.data = /* @__PURE__ */ un(ce));
  }
  if (Pi = !0, o)
    for (const ce in o) {
      const oe = o[ce], Fe = ie(oe) ? oe.bind(n, n) : ie(oe.get) ? oe.get.bind(n, n) : It, He = !ie(oe) && ie(oe.set) ? oe.set.bind(n) : It, Ye = se({
        get: Fe,
        set: He
      });
      Object.defineProperty(r, ce, {
        enumerable: !0,
        configurable: !0,
        get: () => Ye.value,
        set: (Ie) => Ye.value = Ie
      });
    }
  if (l)
    for (const ce in l)
      Xs(l[ce], r, n, ce);
  if (u) {
    const ce = ie(u) ? u.call(n) : u;
    Reflect.ownKeys(ce).forEach((oe) => {
      La(oe, ce[oe]);
    });
  }
  b && Co(b, e, "c");
  function Ce(ce, oe) {
    Q(oe) ? oe.forEach((Fe) => ce(Fe.bind(n))) : oe && ce(oe.bind(n));
  }
  if (Ce($a, E), Ce(Ks, P), Ce(Va, V), Ce(za, te), Ce(Fa, B), Ce(Ha, re), Ce(Ka, Ae), Ce(qa, Re), Ce(Wa, Oe), Ce(Gs, q), Ce(Ys, $), Ce(Ba, Se), Q(Pe))
    if (Pe.length) {
      const ce = e.exposed || (e.exposed = {});
      Pe.forEach((oe) => {
        Object.defineProperty(ce, oe, {
          get: () => n[oe],
          set: (Fe) => n[oe] = Fe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  le && e.render === It && (e.render = le), $e != null && (e.inheritAttrs = $e), it && (e.components = it), Ve && (e.directives = Ve), Se && Ws(e);
}
function Ja(e, t, n = It) {
  Q(e) && (e = Li(e));
  for (const r in e) {
    const i = e[r];
    let o;
    ye(i) ? "default" in i ? o = Cr(
      i.from || r,
      i.default,
      !0
    ) : o = Cr(i.from || r) : o = Cr(i), /* @__PURE__ */ Ke(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[r] = o;
  }
}
function Co(e, t, n) {
  St(
    Q(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Xs(e, t, n, r) {
  let i = r.includes(".") ? zs(n, r) : () => n[r];
  if (Ne(e)) {
    const o = t[e];
    ie(o) && li(i, o);
  } else if (ie(e))
    li(i, e.bind(n));
  else if (ye(e))
    if (Q(e))
      e.forEach((o) => Xs(o, t, n, r));
    else {
      const o = ie(e.handler) ? e.handler.bind(n) : t[e.handler];
      ie(o) && li(i, o, e);
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
    (_) => Pr(u, _, s, !0)
  ), Pr(u, t, s)), ye(t) && o.set(t, u), u;
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
  beforeCreate: tt,
  created: tt,
  beforeMount: tt,
  mounted: tt,
  beforeUpdate: tt,
  updated: tt,
  beforeDestroy: tt,
  beforeUnmount: tt,
  destroyed: tt,
  unmounted: tt,
  activated: tt,
  deactivated: tt,
  errorCaptured: tt,
  serverPrefetch: tt,
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
    return Ge(
      ie(e) ? e.call(this, this) : e,
      ie(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qa(e, t) {
  return Wn(Li(e), Li(t));
}
function Li(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function tt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wn(e, t) {
  return e ? Ge(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ao(e, t) {
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ge(
    /* @__PURE__ */ Object.create(null),
    So(e),
    So(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ge(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = tt(e[r], t[r]);
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
    ie(r) || (r = Ge({}, r)), i != null && !ye(i) && (i = null);
    const o = Zs(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const _ = o.app = {
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
        return s.has(b) || (b && ie(b.install) ? (s.add(b), b.install(_, ...E)) : ie(b) && (s.add(b), b(_, ...E))), _;
      },
      mixin(b) {
        return o.mixins.includes(b) || o.mixins.push(b), _;
      },
      component(b, E) {
        return E ? (o.components[b] = E, _) : o.components[b];
      },
      directive(b, E) {
        return E ? (o.directives[b] = E, _) : o.directives[b];
      },
      mount(b, E, P) {
        if (!u) {
          const V = _._ceVNode || Vt(r, i);
          return V.appContext = o, P === !0 ? P = "svg" : P === !1 && (P = void 0), e(V, b, P), u = !0, _._container = b, b.__vue_app__ = _, Kr(V.component);
        }
      },
      onUnmount(b) {
        l.push(b);
      },
      unmount() {
        u && (St(
          l,
          _._instance,
          16
        ), e(null, _._container), delete _._container.__vue_app__);
      },
      provide(b, E) {
        return o.provides[b] = E, _;
      },
      runWithContext(b) {
        const E = Ln;
        Ln = _;
        try {
          return b();
        } finally {
          Ln = E;
        }
      }
    };
    return _;
  };
}
let Ln = null;
const rc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${vt(t)}Modifiers`] || e[`${bn(t)}Modifiers`];
function ic(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || _e;
  let i = n;
  const o = t.startsWith("update:"), s = o && rc(r, t.slice(7));
  s && (s.trim && (i = n.map((b) => Ne(b) ? b.trim() : b)), s.number && (i = i.map(Hr)));
  let l, u = r[l = ni(t)] || // also try camelCase event handler (#2249)
  r[l = ni(vt(t))];
  !u && o && (u = r[l = ni(bn(t))]), u && St(
    u,
    e,
    6,
    i
  );
  const _ = r[l + "Once"];
  if (_) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, St(
      _,
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
  if (!ie(e)) {
    const u = (_) => {
      const b = Qs(_, t, !0);
      b && (l = !0, Ge(s, b));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !l ? (ye(e) && r.set(e, null), null) : (Q(o) ? o.forEach((u) => s[u] = null) : Ge(s, o), ye(e) && r.set(e, s), s);
}
function Wr(e, t) {
  return !e || !Mr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), be(e, t[0].toLowerCase() + t.slice(1)) || be(e, bn(t)) || be(e, t));
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
    render: _,
    renderCache: b,
    props: E,
    data: P,
    setupState: V,
    ctx: te,
    inheritAttrs: B
  } = e, re = Or(e);
  let ne, q;
  try {
    if (n.shapeFlag & 4) {
      const $ = i || r, le = $;
      ne = Lt(
        _.call(
          le,
          $,
          b,
          E,
          V,
          P,
          te
        )
      ), q = l;
    } else {
      const $ = t;
      ne = Lt(
        $.length > 1 ? $(
          E,
          { attrs: l, slots: s, emit: u }
        ) : $(
          E,
          null
        )
      ), q = t.props ? l : sc(l);
    }
  } catch ($) {
    hn.length = 0, Vr($, e, 1), ne = Vt(qt);
  }
  let D = ne;
  if (q && B !== !1) {
    const $ = Object.keys(q), { shapeFlag: le } = D;
    $.length && le & 7 && (o && $.some(Ur) && (q = lc(
      q,
      o
    )), D = Dn(D, q, !1, !0));
  }
  if (n.dirs && (D = Dn(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const $ = zr(D.type) && Bs(D) || D;
    Yi($, n.transition);
  }
  return ne = D, Or(re), ne;
}
const sc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Mr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, lc = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ur(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function ac(e, t, n) {
  const { props: r, children: i, component: o } = e, { props: s, children: l, patchFlag: u } = t, _ = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return r ? Ro(r, s, _) : !!s;
    if (u & 8) {
      const b = t.dynamicProps;
      for (let E = 0; E < b.length; E++) {
        const P = b[E];
        if (el(s, r, P) && !Wr(_, P))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : r === s ? !1 : r ? s ? Ro(r, s, _) : !0 : !!s;
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
  return n === "style" && ye(r) && ye(i) ? !Qt(r, i) : r !== i;
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
  let _ = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const b = e.vnode.dynamicProps;
      for (let E = 0; E < b.length; E++) {
        let P = b[E];
        if (Wr(e.emitsOptions, P))
          continue;
        const V = t[P];
        if (u)
          if (be(o, P))
            V !== o[P] && (o[P] = V, _ = !0);
          else {
            const te = vt(P);
            i[te] = ki(
              u,
              l,
              te,
              V,
              e,
              !1
            );
          }
        else
          V !== o[P] && (o[P] = V, _ = !0);
      }
    }
  } else {
    il(e, t, i, o) && (_ = !0);
    let b;
    for (const E in l)
      (!t || // for camelCase
      !be(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((b = bn(E)) === E || !be(t, b))) && (u ? n && // for camelCase
      (n[E] !== void 0 || // for kebab-case
      n[b] !== void 0) && (i[E] = ki(
        u,
        l,
        E,
        void 0,
        e,
        !0
      )) : delete i[E]);
    if (o !== l)
      for (const E in o)
        (!t || !be(t, E)) && (delete o[E], _ = !0);
  }
  _ && jt(e.attrs, "set", "");
}
function il(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let u in t) {
      if (Gn(u))
        continue;
      const _ = t[u];
      let b;
      i && be(i, b = vt(u)) ? !o || !o.includes(b) ? n[b] = _ : (l || (l = {}))[b] = _ : Wr(e.emitsOptions, u) || (!(u in r) || _ !== r[u]) && (r[u] = _, s = !0);
    }
  if (o) {
    const u = /* @__PURE__ */ me(n), _ = l || _e;
    for (let b = 0; b < o.length; b++) {
      const E = o[b];
      n[E] = ki(
        i,
        u,
        E,
        _[E],
        e,
        !be(_, E)
      );
    }
  }
  return s;
}
function ki(e, t, n, r, i, o) {
  const s = e[n];
  if (s != null) {
    const l = be(s, "default");
    if (l && r === void 0) {
      const u = s.default;
      if (s.type !== Function && !s.skipFactory && ie(u)) {
        const { propsDefaults: _ } = i;
        if (n in _)
          r = _[n];
        else {
          const b = ar(i);
          r = _[n] = u.call(
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
    ] && (r === "" || r === bn(n)) && (r = !0));
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
  if (!ie(e)) {
    const b = (E) => {
      u = !0;
      const [P, V] = ol(E, t, !0);
      Ge(s, P), V && l.push(...V);
    };
    !n && t.mixins.length && t.mixins.forEach(b), e.extends && b(e.extends), e.mixins && e.mixins.forEach(b);
  }
  if (!o && !u)
    return ye(e) && r.set(e, On), On;
  if (Q(o))
    for (let b = 0; b < o.length; b++) {
      const E = vt(o[b]);
      Oo(E) && (s[E] = _e);
    }
  else if (o)
    for (const b in o) {
      const E = vt(b);
      if (Oo(E)) {
        const P = o[b], V = s[E] = Q(P) || ie(P) ? { type: P } : Ge({}, P), te = V.type;
        let B = !1, re = !0;
        if (Q(te))
          for (let ne = 0; ne < te.length; ++ne) {
            const q = te[ne], D = ie(q) && q.name;
            if (D === "Boolean") {
              B = !0;
              break;
            } else D === "String" && (re = !1);
          }
        else
          B = ie(te) && te.name === "Boolean";
        V[
          0
          /* shouldCast */
        ] = B, V[
          1
          /* shouldCastTrue */
        ] = re, (B || be(V, "default")) && l.push(E);
      }
    }
  const _ = [s, l];
  return ye(e) && r.set(e, _), _;
}
function Oo(e) {
  return e[0] !== "$" && !Gn(e);
}
const Ji = (e) => e === "_" || e === "_ctx" || e === "$stable", Zi = (e) => Q(e) ? e.map(Lt) : [Lt(e)], pc = (e, t, n) => {
  if (t._n)
    return t;
  const r = Pa((...i) => Zi(t(...i)), n);
  return r._c = !1, r;
}, sl = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (Ji(i)) continue;
    const o = e[i];
    if (ie(o))
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
  let o = !0, s = _e;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : al(i, t, n) : (o = !t.$stable, sl(t, i)), s = t;
  } else t && (ll(e, t), s = { default: 1 });
  if (o)
    for (const l in i)
      !Ji(l) && s[l] == null && delete i[l];
}, ct = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const n = jr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: o,
    createElement: s,
    createText: l,
    createComment: u,
    setText: _,
    setElementText: b,
    parentNode: E,
    nextSibling: P,
    setScopeId: V = It,
    insertStaticContent: te
  } = e, B = (f, h, v, A = null, T = null, x = null, I = void 0, k = null, L = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !jn(f, h) && (A = Je(f), Ie(f, T, x, !0), f = null), h.patchFlag === -2 && (L = !1, h.dynamicChildren = null);
    const { type: C, ref: G, shapeFlag: j } = h;
    switch (C) {
      case qr:
        re(f, h, v, A);
        break;
      case qt:
        ne(f, h, v, A);
        break;
      case fi:
        f == null && q(h, v, A, I);
        break;
      case ae:
        it(
          f,
          h,
          v,
          A,
          T,
          x,
          I,
          k,
          L
        );
        break;
      default:
        j & 1 ? le(
          f,
          h,
          v,
          A,
          T,
          x,
          I,
          k,
          L
        ) : j & 6 ? Ve(
          f,
          h,
          v,
          A,
          T,
          x,
          I,
          k,
          L
        ) : (j & 64 || j & 128) && C.process(
          f,
          h,
          v,
          A,
          T,
          x,
          I,
          k,
          L,
          Be
        );
    }
    G != null && T ? Jn(G, f && f.ref, x, h || f, !h) : G == null && f && f.ref != null && Jn(f.ref, null, x, f, !0);
  }, re = (f, h, v, A) => {
    if (f == null)
      r(
        h.el = l(h.children),
        v,
        A
      );
    else {
      const T = h.el = f.el;
      h.children !== f.children && _(T, h.children);
    }
  }, ne = (f, h, v, A) => {
    f == null ? r(
      h.el = u(h.children || ""),
      v,
      A
    ) : h.el = f.el;
  }, q = (f, h, v, A) => {
    [f.el, f.anchor] = te(
      f.children,
      h,
      v,
      A,
      f.el,
      f.anchor
    );
  }, D = ({ el: f, anchor: h }, v, A) => {
    let T;
    for (; f && f !== h; )
      T = P(f), r(f, v, A), f = T;
    r(h, v, A);
  }, $ = ({ el: f, anchor: h }) => {
    let v;
    for (; f && f !== h; )
      v = P(f), i(f), f = v;
    i(h);
  }, le = (f, h, v, A, T, x, I, k, L) => {
    if (h.type === "svg" ? I = "svg" : h.type === "math" && (I = "mathml"), f == null)
      Re(
        h,
        v,
        A,
        T,
        x,
        I,
        k,
        L
      );
    else {
      const C = f.el && f.el._isVueCE ? f.el : null;
      try {
        C && C._beginPatch(), Se(
          f,
          h,
          T,
          x,
          I,
          k,
          L
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, Re = (f, h, v, A, T, x, I, k) => {
    let L, C;
    const { props: G, shapeFlag: j, transition: W, dirs: X } = f;
    if (L = f.el = s(
      f.type,
      x,
      G && G.is,
      G
    ), j & 8 ? b(L, f.children) : j & 16 && Ae(
      f.children,
      L,
      null,
      A,
      T,
      ui(f, x),
      I,
      k
    ), X && rn(f, null, A, "created"), Oe(L, f, f.scopeId, I, A), G) {
      for (const N in G)
        N !== "value" && !Gn(N) && o(L, N, null, G[N], x, A);
      "value" in G && o(L, "value", null, G.value, x), (C = G.onVnodeBeforeMount) && Ot(C, A, f);
    }
    X && rn(f, null, A, "beforeMount");
    const w = gc(T, W);
    w && W.beforeEnter(L), r(L, h, v), ((C = G && G.onVnodeMounted) || w || X) && ct(() => {
      C && Ot(C, A, f), w && W.enter(L), X && rn(f, null, A, "mounted");
    }, T);
  }, Oe = (f, h, v, A, T) => {
    if (v && V(f, v), A)
      for (let x = 0; x < A.length; x++)
        V(f, A[x]);
    if (T) {
      let x = T.subTree;
      if (h === x || dl(x.type) && (x.ssContent === h || x.ssFallback === h)) {
        const I = T.vnode;
        Oe(
          f,
          I,
          I.scopeId,
          I.slotScopeIds,
          T.parent
        );
      }
    }
  }, Ae = (f, h, v, A, T, x, I, k, L = 0) => {
    for (let C = L; C < f.length; C++) {
      const G = f[C] = k ? Ht(f[C]) : Lt(f[C]);
      B(
        null,
        G,
        h,
        v,
        A,
        T,
        x,
        I,
        k
      );
    }
  }, Se = (f, h, v, A, T, x, I) => {
    const k = h.el = f.el;
    let { patchFlag: L, dynamicChildren: C, dirs: G } = h;
    L |= f.patchFlag & 16;
    const j = f.props || _e, W = h.props || _e;
    let X;
    if (v && on(v, !1), (X = W.onVnodeBeforeUpdate) && Ot(X, v, h, f), G && rn(h, f, v, "beforeUpdate"), v && on(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    C && (!f.dynamicChildren || f.dynamicChildren.length !== C.length) && (L = 0, I = !1, C = null), (j.innerHTML && W.innerHTML == null || j.textContent && W.textContent == null) && b(k, ""), C ? Pe(
      f.dynamicChildren,
      C,
      k,
      v,
      A,
      ui(h, T),
      x
    ) : I || oe(
      f,
      h,
      k,
      null,
      v,
      A,
      ui(h, T),
      x,
      !1
    ), L > 0) {
      if (L & 16)
        $e(k, j, W, v, T);
      else if (L & 2 && j.class !== W.class && o(k, "class", null, W.class, T), L & 4 && o(k, "style", j.style, W.style, T), L & 8) {
        const w = h.dynamicProps;
        for (let N = 0; N < w.length; N++) {
          const U = w[N], J = j[U], Z = W[U];
          (Z !== J || U === "value") && o(k, U, J, Z, T, v);
        }
      }
      L & 1 && f.children !== h.children && b(k, h.children);
    } else !I && C == null && $e(k, j, W, v, T);
    ((X = W.onVnodeUpdated) || G) && ct(() => {
      X && Ot(X, v, h, f), G && rn(h, f, v, "updated");
    }, A);
  }, Pe = (f, h, v, A, T, x, I) => {
    for (let k = 0; k < h.length; k++) {
      const L = f[k], C = h[k], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !jn(L, C) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? E(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      B(
        L,
        C,
        G,
        null,
        A,
        T,
        x,
        I,
        !0
      );
    }
  }, $e = (f, h, v, A, T) => {
    if (h !== v) {
      if (h !== _e)
        for (const x in h)
          !Gn(x) && !(x in v) && o(
            f,
            x,
            h[x],
            null,
            T,
            A
          );
      for (const x in v) {
        if (Gn(x)) continue;
        const I = v[x], k = h[x];
        I !== k && x !== "value" && o(f, x, k, I, T, A);
      }
      "value" in v && o(f, "value", h.value, v.value, T);
    }
  }, it = (f, h, v, A, T, x, I, k, L) => {
    const C = h.el = f ? f.el : l(""), G = h.anchor = f ? f.anchor : l("");
    let { patchFlag: j, dynamicChildren: W, slotScopeIds: X } = h;
    X && (k = k ? k.concat(X) : X), f == null ? (r(C, v, A), r(G, v, A), Ae(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      v,
      G,
      T,
      x,
      I,
      k,
      L
    )) : j > 0 && j & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === W.length ? (Pe(
      f.dynamicChildren,
      W,
      v,
      T,
      x,
      I,
      k
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || T && h === T.subTree) && cl(
      f,
      h,
      !0
      /* shallow */
    )) : oe(
      f,
      h,
      v,
      G,
      T,
      x,
      I,
      k,
      L
    );
  }, Ve = (f, h, v, A, T, x, I, k, L) => {
    h.slotScopeIds = k, f == null ? h.shapeFlag & 512 ? T.ctx.activate(
      h,
      v,
      A,
      I,
      L
    ) : ze(
      h,
      v,
      A,
      T,
      x,
      I,
      L
    ) : ot(f, h, L);
  }, ze = (f, h, v, A, T, x, I) => {
    const k = f.component = wc(
      f,
      A,
      T
    );
    if (Xi(f) && (k.ctx.renderer = Be), Oc(k, !1, I), k.asyncDep) {
      if (T && T.registerDep(k, Ce, I), !f.el) {
        const L = k.subTree = Vt(qt);
        ne(null, L, h, v), f.placeholder = L.el;
      }
    } else
      Ce(
        k,
        f,
        h,
        v,
        T,
        x,
        I
      );
  }, ot = (f, h, v) => {
    const A = h.component = f.component;
    if (ac(f, h, v))
      if (A.asyncDep && !A.asyncResolved) {
        ce(A, h, v);
        return;
      } else
        A.next = h, A.update();
    else
      h.el = f.el, A.vnode = h;
  }, Ce = (f, h, v, A, T, x, I) => {
    const k = () => {
      if (f.isMounted) {
        let { next: j, bu: W, u: X, parent: w, vnode: N } = f;
        {
          const S = ul(f);
          if (S) {
            j && (j.el = N.el, ce(f, j, I)), S.asyncDep.then(() => {
              ct(() => {
                f.isUnmounted || C();
              }, T);
            });
            return;
          }
        }
        let U = j, J;
        on(f, !1), j ? (j.el = N.el, ce(f, j, I)) : j = N, W && Sr(W), (J = j.props && j.props.onVnodeBeforeUpdate) && Ot(J, w, j, N), on(f, !0);
        const Z = wo(f), O = f.subTree;
        f.subTree = Z, B(
          O,
          Z,
          // parent may have changed if it's in a teleport
          E(O.el),
          // anchor may have changed if it's in a fragment
          Je(O),
          f,
          T,
          x
        ), j.el = Z.el, U === null && cc(f, Z.el), X && ct(X, T), (J = j.props && j.props.onVnodeUpdated) && ct(
          () => Ot(J, w, j, N),
          T
        );
      } else {
        let j;
        const { el: W, props: X } = h, { bm: w, m: N, parent: U, root: J, type: Z } = f, O = Zn(h);
        on(f, !1), w && Sr(w), !O && (j = X && X.onVnodeBeforeMount) && Ot(j, U, h), on(f, !0);
        {
          J.ce && J.ce._hasShadowRoot() && J.ce._injectChildStyle(
            Z,
            f.parent ? f.parent.type : void 0
          );
          const S = f.subTree = wo(f);
          B(
            null,
            S,
            v,
            A,
            f,
            T,
            x
          ), h.el = S.el;
        }
        if (N && ct(N, T), !O && (j = X && X.onVnodeMounted)) {
          const S = h;
          ct(
            () => Ot(j, U, S),
            T
          );
        }
        (h.shapeFlag & 256 || U && Zn(U.vnode) && U.vnode.shapeFlag & 256) && f.a && ct(f.a, T), f.isMounted = !0, h = v = A = null;
      }
    };
    f.scope.on();
    const L = f.effect = new Es(k);
    f.scope.off();
    const C = f.update = L.run.bind(L), G = f.job = L.runIfDirty.bind(L);
    G.i = f, G.id = f.uid, L.scheduler = () => Gi(G), on(f, !0), C();
  }, ce = (f, h, v) => {
    h.component = f;
    const A = f.vnode.props;
    f.vnode = h, f.next = null, fc(f, h.props, A, v), mc(f, h.children, v), zt(), vo(f), Bt();
  }, oe = (f, h, v, A, T, x, I, k, L = !1) => {
    const C = f && f.children, G = f ? f.shapeFlag : 0, j = h.children, { patchFlag: W, shapeFlag: X } = h;
    if (W > 0) {
      if (W & 128) {
        He(
          C,
          j,
          v,
          A,
          T,
          x,
          I,
          k,
          L
        );
        return;
      } else if (W & 256) {
        Fe(
          C,
          j,
          v,
          A,
          T,
          x,
          I,
          k,
          L
        );
        return;
      }
    }
    X & 8 ? (G & 16 && mt(C, T, x), j !== C && b(v, j)) : G & 16 ? X & 16 ? He(
      C,
      j,
      v,
      A,
      T,
      x,
      I,
      k,
      L
    ) : mt(C, T, x, !0) : (G & 8 && b(v, ""), X & 16 && Ae(
      j,
      v,
      A,
      T,
      x,
      I,
      k,
      L
    ));
  }, Fe = (f, h, v, A, T, x, I, k, L) => {
    f = f || On, h = h || On;
    const C = f.length, G = h.length, j = Math.min(C, G);
    let W;
    for (W = 0; W < j; W++) {
      const X = h[W] = L ? Ht(h[W]) : Lt(h[W]);
      B(
        f[W],
        X,
        v,
        null,
        T,
        x,
        I,
        k,
        L
      );
    }
    C > G ? mt(
      f,
      T,
      x,
      !0,
      !1,
      j
    ) : Ae(
      h,
      v,
      A,
      T,
      x,
      I,
      k,
      L,
      j
    );
  }, He = (f, h, v, A, T, x, I, k, L) => {
    let C = 0;
    const G = h.length;
    let j = f.length - 1, W = G - 1;
    for (; C <= j && C <= W; ) {
      const X = f[C], w = h[C] = L ? Ht(h[C]) : Lt(h[C]);
      if (jn(X, w))
        B(
          X,
          w,
          v,
          null,
          T,
          x,
          I,
          k,
          L
        );
      else
        break;
      C++;
    }
    for (; C <= j && C <= W; ) {
      const X = f[j], w = h[W] = L ? Ht(h[W]) : Lt(h[W]);
      if (jn(X, w))
        B(
          X,
          w,
          v,
          null,
          T,
          x,
          I,
          k,
          L
        );
      else
        break;
      j--, W--;
    }
    if (C > j) {
      if (C <= W) {
        const X = W + 1, w = X < G ? h[X].el : A;
        for (; C <= W; )
          B(
            null,
            h[C] = L ? Ht(h[C]) : Lt(h[C]),
            v,
            w,
            T,
            x,
            I,
            k,
            L
          ), C++;
      }
    } else if (C > W)
      for (; C <= j; )
        Ie(f[C], T, x, !0), C++;
    else {
      const X = C, w = C, N = /* @__PURE__ */ new Map();
      for (C = w; C <= W; C++) {
        const pe = h[C] = L ? Ht(h[C]) : Lt(h[C]);
        pe.key != null && N.set(pe.key, C);
      }
      let U, J = 0;
      const Z = W - w + 1;
      let O = !1, S = 0;
      const p = new Array(Z);
      for (C = 0; C < Z; C++) p[C] = 0;
      for (C = X; C <= j; C++) {
        const pe = f[C];
        if (J >= Z) {
          Ie(pe, T, x, !0);
          continue;
        }
        let ge;
        if (pe.key != null)
          ge = N.get(pe.key);
        else
          for (U = w; U <= W; U++)
            if (p[U - w] === 0 && jn(pe, h[U])) {
              ge = U;
              break;
            }
        ge === void 0 ? Ie(pe, T, x, !0) : (p[ge - w] = C + 1, ge >= S ? S = ge : O = !0, B(
          pe,
          h[ge],
          v,
          null,
          T,
          x,
          I,
          k,
          L
        ), J++);
      }
      const fe = O ? _c(p) : On;
      for (U = fe.length - 1, C = Z - 1; C >= 0; C--) {
        const pe = w + C, ge = h[pe], Gt = h[pe + 1], Mt = pe + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Gt.el || fl(Gt)
        ) : A;
        p[C] === 0 ? B(
          null,
          ge,
          v,
          Mt,
          T,
          x,
          I,
          k,
          L
        ) : O && (U < 0 || C !== fe[U] ? Ye(ge, v, Mt, 2) : U--);
      }
    }
  }, Ye = (f, h, v, A, T = null) => {
    const { el: x, type: I, transition: k, children: L, shapeFlag: C } = f;
    if (C & 6) {
      Ye(f.component.subTree, h, v, A);
      return;
    }
    if (C & 128) {
      f.suspense.move(h, v, A);
      return;
    }
    if (C & 64) {
      I.move(f, h, v, Be);
      return;
    }
    if (I === ae) {
      r(x, h, v);
      for (let j = 0; j < L.length; j++)
        Ye(L[j], h, v, A);
      r(f.anchor, h, v);
      return;
    }
    if (I === fi) {
      D(f, h, v);
      return;
    }
    if (A !== 2 && C & 1 && k)
      if (A === 0)
        k.persisted && !x[ai] ? r(x, h, v) : (k.beforeEnter(x), r(x, h, v), ct(() => k.enter(x), T));
      else {
        const { leave: j, delayLeave: W, afterLeave: X } = k, w = () => {
          f.ctx.isUnmounted ? i(x) : r(x, h, v);
        }, N = () => {
          const U = x._isLeaving || !!x[ai];
          x._isLeaving && x[ai](
            !0
            /* cancelled */
          ), k.persisted && !U ? w() : j(x, () => {
            w(), X && X();
          });
        };
        W ? W(x, w, N) : N();
      }
    else
      r(x, h, v);
  }, Ie = (f, h, v, A = !1, T = !1) => {
    const {
      type: x,
      props: I,
      ref: k,
      children: L,
      dynamicChildren: C,
      shapeFlag: G,
      patchFlag: j,
      dirs: W,
      cacheIndex: X,
      memo: w
    } = f;
    if (j === -2 && (T = !1), k != null && (zt(), Jn(k, null, v, f, !0), Bt()), X != null && (h.renderCache[X] = void 0), G & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const N = G & 1 && W, U = !Zn(f);
    let J;
    if (U && (J = I && I.onVnodeBeforeUnmount) && Ot(J, h, f), G & 6)
      Xe(f.component, v, A);
    else {
      if (G & 128) {
        f.suspense.unmount(v, A);
        return;
      }
      N && rn(f, null, h, "beforeUnmount"), G & 64 ? f.type.remove(
        f,
        h,
        v,
        Be,
        A
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== ae || j > 0 && j & 64) ? mt(
        C,
        h,
        v,
        !1,
        !0
      ) : (x === ae && j & 384 || !T && G & 16) && mt(L, h, v), A && ft(f);
    }
    const Z = w != null && X == null;
    (U && (J = I && I.onVnodeUnmounted) || N || Z) && ct(() => {
      J && Ot(J, h, f), N && rn(f, null, h, "unmounted"), Z && (f.el = null);
    }, v);
  }, ft = (f) => {
    const { type: h, el: v, anchor: A, transition: T } = f;
    if (h === ae) {
      ue(v, A);
      return;
    }
    if (h === fi) {
      $(f);
      return;
    }
    const x = () => {
      i(v), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (f.shapeFlag & 1 && T && !T.persisted) {
      const { leave: I, delayLeave: k } = T, L = () => I(v, x);
      k ? k(f.el, x, L) : L();
    } else
      x();
  }, ue = (f, h) => {
    let v;
    for (; f !== h; )
      v = P(f), i(f), f = v;
    i(h);
  }, Xe = (f, h, v) => {
    const { bum: A, scope: T, job: x, subTree: I, um: k, m: L, a: C } = f;
    No(L), No(C), A && Sr(A), T.stop(), x && (x.flags |= 8, Ie(I, f, h, v)), k && ct(k, h), ct(() => {
      f.isUnmounted = !0;
    }, h);
  }, mt = (f, h, v, A = !1, T = !1, x = 0) => {
    for (let I = x; I < f.length; I++)
      Ie(f[I], h, v, A, T);
  }, Je = (f) => {
    if (f.shapeFlag & 6)
      return Je(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const h = P(f.anchor || f.el), v = h && h[Ma];
    return v ? P(v) : h;
  };
  let gt = !1;
  const st = (f, h, v) => {
    let A;
    f == null ? h._vnode && (Ie(h._vnode, null, null, !0), A = h._vnode.component) : B(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      v
    ), h._vnode = f, gt || (gt = !0, vo(A), Hs(), gt = !1);
  }, Be = {
    p: B,
    um: Ie,
    m: Ye,
    r: ft,
    mt: ze,
    mc: Ae,
    pc: oe,
    pbc: Pe,
    n: Je,
    o: e
  };
  return {
    render: st,
    hydrate: void 0,
    createApp: nc(st)
  };
}
function ui({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function on({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function cl(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (Q(r) && Q(i))
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
    const _ = e[r];
    if (_ !== 0) {
      if (i = n[n.length - 1], e[i] < _) {
        t[r] = i, n.push(r);
        continue;
      }
      for (o = 0, s = n.length - 1; o < s; )
        l = o + s >> 1, e[n[l]] < _ ? o = l + 1 : s = l;
      _ < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
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
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Na(e);
}
const ae = /* @__PURE__ */ Symbol.for("v-fgt"), qr = /* @__PURE__ */ Symbol.for("v-txt"), qt = /* @__PURE__ */ Symbol.for("v-cmt"), fi = /* @__PURE__ */ Symbol.for("v-stc"), hn = [];
let ht = null;
function F(e = !1) {
  hn.push(ht = e ? null : []);
}
function pl() {
  hn.pop(), ht = hn[hn.length - 1] || null;
}
let rr = 1;
function Po(e, t = !1) {
  rr += e, e < 0 && ht && t && (ht.hasOnce = !0);
}
function hl(e) {
  return e.dynamicChildren = rr > 0 ? ht || On : null, pl(), rr > 0 && ht && ht.push(e), e;
}
function H(e, t, n, r, i, o) {
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
function jn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const bl = ({ key: e }) => e ?? null, xr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ne(e) || /* @__PURE__ */ Ke(e) || ie(e) ? { i: bt, r: e, k: t, f: !!n } : e : null);
function d(e, t = null, n = null, r = 0, i = null, o = e === ae ? 0 : 1, s = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bl(t),
    ref: t && xr(t),
    scopeId: $s,
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
    ctx: bt
  };
  return l ? (Lr(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= Ne(n) ? 8 : 16), rr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  ht && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ht.push(u), u;
}
const Vt = Tc;
function Tc(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === Ga) && (e = qt), ml(e)) {
    const l = Dn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Lr(l, n), rr > 0 && !o && ht && (l.shapeFlag & 6 ? ht[ht.indexOf(e)] = l : ht.push(l)), l.patchFlag = -2, l;
  }
  if (kc(e) && (e = e.__vccOpts), t) {
    t = Sc(t);
    let { class: l, style: u } = t;
    l && !Ne(l) && (t.class = Nn(l)), ye(u) && (/* @__PURE__ */ Ki(u) && !Q(u) && (u = Ge({}, u)), t.style = ji(u));
  }
  const s = Ne(e) ? 1 : dl(e) ? 128 : zr(e) ? 64 : ye(e) ? 4 : ie(e) ? 2 : 0;
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
  return e ? /* @__PURE__ */ Ki(e) || rl(e) ? Ge({}, e) : e : null;
}
function Dn(e, t, n = !1, r = !1) {
  const { props: i, ref: o, patchFlag: s, children: l, transition: u } = e, _ = t ? Cc(i || {}, t) : i, b = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: _,
    key: _ && bl(_),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Q(o) ? o.concat(xr(t)) : [o, xr(t)] : xr(t)
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
    patchFlag: t && e.type !== ae ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Dn(e.ssContent),
    ssFallback: e.ssFallback && Dn(e.ssFallback),
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
function Te(e = "", t = !1) {
  return t ? (F(), Ec(qt, null, e)) : Vt(qt, null, e);
}
function Lt(e) {
  return e == null || typeof e == "boolean" ? Vt(qt) : Q(e) ? Vt(
    ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ml(e) ? Ht(e) : Vt(qr, null, String(e));
}
function Ht(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Dn(e);
}
function Lr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Lr(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !rl(t) ? t._ctx = bt : i === 3 && bt && (bt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ie(t)) {
    if (r & 65) {
      Lr(e, { default: t });
      return;
    }
    t = { default: t, _ctx: bt }, n = 32;
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
        t.style = ji([t.style, r.style]);
      else if (Mr(i)) {
        const o = t[i], s = r[i];
        s && o !== s && !(Q(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
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
    propsDefaults: _e,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: _e,
    data: _e,
    props: _e,
    attrs: _e,
    slots: _e,
    refs: _e,
    setupState: _e,
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
let rt = null;
const Rc = () => rt || bt;
let kr, ir;
{
  const e = jr(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  kr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => rt = n
  ), ir = t(
    "__VUE_SSR_SETTERS__",
    (n) => or = n
  );
}
const ar = (e) => {
  const t = rt;
  return kr(e), e.scope.on(), () => {
    e.scope.off(), kr(t);
  };
}, Lo = () => {
  rt && rt.scope.off(), kr(null);
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
    zt();
    const i = e.setupContext = r.length > 1 ? Lc(e) : null, o = ar(e), s = lr(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = ps(s);
    if (Bt(), o(), (l || e.sp) && !Zn(e) && Ws(e), l) {
      if (s.then(Lo, Lo), t)
        return s.then((u) => {
          ir(!0);
          try {
            ko(e, u, t);
          } finally {
            ir(!1);
          }
        }).catch((u) => {
          Vr(u, e, 0);
        });
      e.asyncDep = s;
    } else
      ko(e, s);
  } else
    gl(e);
}
function ko(e, t, n) {
  ie(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ye(t) && (e.setupState = Ds(t)), gl(e);
}
function gl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || It);
  {
    const i = ar(e);
    zt();
    try {
      Xa(e);
    } finally {
      Bt(), i();
    }
  }
}
const Pc = {
  get(e, t) {
    return qe(e, "get", ""), e[t];
  }
};
function Lc(e) {
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
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ds(_a(e.exposed)), {
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
function kc(e) {
  return ie(e) && "__vccOpts" in e;
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
const _l = Ii ? (e) => Ii.createHTML(e) : (e) => e, Dc = "http://www.w3.org/2000/svg", Mc = "http://www.w3.org/1998/Math/MathML", Ft = typeof document < "u" ? document : null, Do = Ft && /* @__PURE__ */ Ft.createElement("template"), Uc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? Ft.createElementNS(Dc, e) : t === "mathml" ? Ft.createElementNS(Mc, e) : n ? Ft.createElement(e, { is: n }) : Ft.createElement(e);
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
      Do.innerHTML = _l(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Do.content;
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
const Mo = /* @__PURE__ */ Symbol("_vod"), jc = /* @__PURE__ */ Symbol("_vsh"), $c = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function zc(e, t, n) {
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
      const s = r[$c];
      s && (n += ";" + s), r.cssText = n, o = Vc.test(n);
    }
  } else t && e.removeAttribute("style");
  Mo in e && (e[Mo] = o ? r.display : "", e[jc] && (r.display = "none"));
}
const _r = /\s*!important$/;
function qn(e, t, n) {
  if (Q(n))
    n.forEach((r) => qn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    _r.test(n) ? e.setProperty(t, n.replace(_r, ""), "important") : e.setProperty(t, n);
  else {
    const r = Bc(e, t);
    _r.test(n) ? e.setProperty(
      bn(r),
      n.replace(_r, ""),
      "important"
    ) : e[r] = n;
  }
}
const Uo = ["Webkit", "Moz", "ms"], di = {};
function Bc(e, t) {
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
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ne(r) && n === r;
}
const Fo = "http://www.w3.org/1999/xlink";
function Ho(e, t, n, r, i, o = Xl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Fo, t.slice(6, t.length)) : e.setAttributeNS(Fo, t, n) : n == null || o && !gs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Dt(n) ? String(n) : n
  );
}
function jo(e, t, n, r, i) {
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
function cn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function qc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const $o = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, n, r, i = null) {
  const o = e[$o] || (e[$o] = {}), s = o[t];
  if (r && s)
    s.value = r;
  else {
    const [l, u] = Xc(t);
    if (r) {
      const _ = o[t] = Qc(
        r,
        i
      );
      cn(e, l, _, u);
    } else s && (qc(e, l, s, u), o[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, n;
  for (; (n = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : bn(e.slice(2)), t];
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
    if (Q(i)) {
      const o = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        o.call(r), r._stopped = !0;
      };
      const s = i.slice(), l = [r];
      for (let u = 0; u < s.length && !r._stopped; u++) {
        const _ = s[u];
        _ && St(
          _,
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
  t === "class" ? Hc(e, r, s) : t === "style" ? zc(e, n, r) : Mr(t) ? Ur(t) || Kc(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, r, s)) ? (jo(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ho(e, t, r, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (nu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ne(r))) ? jo(e, vt(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ho(e, t, r, s));
};
function tu(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Vo(t) && ie(n));
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
  const r = vt(t);
  return Array.isArray(n) ? n.some((i) => vt(i) === r) : Object.keys(n).some((i) => vt(i) === r);
}
const Ir = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (n) => Sr(t, n) : t;
};
function ru(e) {
  e.target.composing = !0;
}
function zo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const fn = /* @__PURE__ */ Symbol("_assign"), vr = /* @__PURE__ */ Symbol("_initialValue");
function hi(e, t, n) {
  return t && (e = e.trim()), n && (e = Hr(e)), e;
}
const mi = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e.parentNode && (e.type === "text" ? e[vr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[vr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[fn] = Ir(i);
    const o = r || i.props && i.props.type === "number";
    cn(e, t ? "change" : "input", (s) => {
      s.target.composing || e[fn](hi(e.value, n, o));
    }), (n || o) && cn(e, "change", () => {
      e.value = hi(e.value, n, o);
    }), t || (cn(e, "compositionstart", ru), cn(e, "compositionend", zo), cn(e, "change", zo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const i = t ?? "", o = e[vr];
    delete e[vr], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[fn](hi(e.value, n, r)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: o } }, s) {
    if (e[fn] = Ir(s), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Hr(e.value) : e.value, u = t ?? "";
    if (l === u)
      return;
    const _ = e.getRootNode();
    (_ instanceof Document || _ instanceof ShadowRoot) && _.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === u) || (e.value = u);
  }
}, et = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, cn(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => n ? Hr(Dr(u)) : Dr(u)
      ), o = e.multiple, s = o ? mn(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
        o,
        o ? Q(s) ? i.slice() : i : s
      ];
      try {
        e[fn](s);
      } finally {
        Us(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[fn] = Ir(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Bo(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[fn] = Ir(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !iu(t, n[1], n[0])) && Bo(e, t);
  }
};
function iu(e, t, n) {
  if (!n || Q(e)) return Qt(e, t);
  if (mn(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Bo(e, t) {
  const n = e.multiple, r = Q(t);
  if (!(n && !r && !mn(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const s = e.options[i], l = Dr(s);
      if (n)
        if (r) {
          const u = typeof l;
          u === "string" || u === "number" ? s.selected = t.some((_) => String(_) === String(l)) : s.selected = Zl(t, l) > -1;
        } else
          s.selected = t.has(l);
      else if (Qt(Dr(s), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Dr(e) {
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
}, lu = /* @__PURE__ */ Ge({ patchProp: eu }, Uc);
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
    !ie(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
    var r, i, o, s, l = [], u = !0, _ = !1;
    try {
      if (o = (n = n.call(e)).next, t !== 0) for (; !(u = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); u = !0) ;
    } catch (b) {
      _ = !0, i = b;
    } finally {
      try {
        if (!u && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (_) throw i;
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
let De = Object.freeze, Ue = Object.seal, Rn = Object.create, El = typeof Reflect < "u" && Reflect, Di = El.apply, Mi = El.construct;
De || (De = function(t) {
  return t;
});
Ue || (Ue = function(t) {
  return t;
});
Di || (Di = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    i[o - 2] = arguments[o];
  return t.apply(n, i);
});
Mi || (Mi = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return new t(...r);
});
const an = ke(Array.prototype.forEach), Eu = ke(Array.prototype.lastIndexOf), Go = ke(Array.prototype.pop), $n = ke(Array.prototype.push), Tu = ke(Array.prototype.splice), kn = Array.isArray, Kn = ke(String.prototype.toLowerCase), bi = ke(String.prototype.toString), Yo = ke(String.prototype.match), Vn = ke(String.prototype.replace), Xo = ke(String.prototype.indexOf), Su = ke(String.prototype.trim), Cu = ke(Number.prototype.toString), xu = ke(Boolean.prototype.toString), Jo = typeof BigInt > "u" ? null : ke(BigInt.prototype.toString), Zo = typeof Symbol > "u" ? null : ke(Symbol.prototype.toString), ut = ke(Object.prototype.hasOwnProperty), zn = ke(Object.prototype.toString), We = ke(RegExp.prototype.test), sn = Au(TypeError);
function ke(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return Di(e, t, r);
  };
}
function Au(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Mi(e, n);
  };
}
function de(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Kn;
  if (Ko && Ko(e, null), !kn(t))
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
    ut(e, t) || (e[t] = null);
  return e;
}
function pt(e) {
  const t = Rn(null);
  for (const r of vl(e)) {
    var n = bu(r, 2);
    const i = n[0], o = n[1];
    ut(e, i) && (kn(o) ? t[i] = wu(o) : o && typeof o == "object" && o.constructor === Object ? t[i] = pt(o) : t[i] = o);
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
      return zn(e);
    case "function":
    case "object": {
      if (e === null)
        return zn(e);
      const t = e, n = _t(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : zn(r);
      }
      return zn(e);
    }
    default:
      return zn(e);
  }
}
function _t(e, t) {
  for (; e !== null; ) {
    const r = vu(e, t);
    if (r) {
      if (r.get)
        return ke(r.get);
      if (typeof r.value == "function")
        return ke(r.value);
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
    return We(e, ""), !0;
  } catch {
    return !1;
  }
}
const Qo = De(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), yi = De(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), gi = De(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Nu = De(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), _i = De(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Pu = De(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), es = De(["#text"]), ts = De(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), vi = De(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ns = De(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Tr = De(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Lu = Ue(/{{[\w\W]*|^[\w\W]*}}/g), ku = Ue(/<%[\w\W]*|^[\w\W]*%>/g), Iu = Ue(/\${[\w\W]*/g), Du = Ue(/^data-[\-\w.\u00B7-\uFFFF]+$/), Mu = Ue(/^aria-[\-\w]+$/), rs = Ue(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Uu = Ue(/^(?:\w+script|data):/i), Fu = Ue(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = Ue(/^html$/i), ju = Ue(/^[a-z][.\w]*(-[.\w]+)+$/i), is = Ue(/<[/\w!]/g), os = Ue(/<[/\w]/g), $u = Ue(/<\/no(script|embed|frames)/i), Vu = Ue(/\/>/i), dt = {
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
}, Tl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], zu = De(de({}, Tl)), Bu = (function() {
  const e = {};
  return an(Tl, (t) => {
    e[t] = Ue(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
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
}, Xt = function(t, n, r, i) {
  return ut(t, n) && kn(t[n]) ? de(i.base ? pt(i.base) : {}, t[n], i.transform) : r;
}, Ei = function(t, n, r) {
  const i = ut(t, n) ? t[n] : void 0;
  return i && typeof i == "object" ? pt(i) : r();
};
function Sl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wu();
  const t = (M) => Sl(M);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== dt.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const o = e.HTMLTemplateElement, s = e.Node, l = e.Element, u = e.NodeFilter, _ = e.NamedNodeMap;
  _ === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const b = e.DOMParser, E = e.trustedTypes, P = l.prototype, V = _t(P, "cloneNode"), te = _t(P, "remove"), B = _t(P, "nextSibling"), re = _t(P, "childNodes"), ne = _t(P, "parentNode"), q = _t(P, "shadowRoot"), D = _t(P, "attributes"), $ = s && s.prototype ? _t(s.prototype, "nodeType") : null, le = s && s.prototype ? _t(s.prototype, "nodeName") : null, Re = s && s.prototype ? _t(s.prototype, "ownerDocument") : null, Oe = function(a) {
    return $ ? $(a) : a.nodeType;
  }, Ae = function(a) {
    return le ? le(a) : a.nodeName;
  };
  if (typeof o == "function") {
    const M = n.createElement("template");
    M.content && M.content.ownerDocument && (n = M.content.ownerDocument);
  }
  let Se, Pe = "", $e, it = !1, Ve = 0;
  const ze = function() {
    if (Ve > 0)
      throw sn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ot = function(a) {
    ze(), Ve++;
    try {
      return Se.createHTML(a);
    } finally {
      Ve--;
    }
  }, Ce = function(a) {
    ze(), Ve++;
    try {
      return Se.createScriptURL(a);
    } finally {
      Ve--;
    }
  }, ce = function() {
    return it || ($e = qu(E, i), it = !0), $e;
  }, oe = n, Fe = oe.implementation, He = oe.createNodeIterator, Ye = oe.createDocumentFragment, Ie = oe.getElementsByTagName, ft = r.importNode;
  let ue = ss();
  t.isSupported = typeof vl == "function" && typeof ne == "function" && Fe && Fe.createHTMLDocument !== void 0;
  const Xe = Lu, mt = ku, Je = Iu, gt = Du, st = Mu, Be = Uu, Ze = Fu, f = ju;
  let h = rs, v = null;
  const A = de({}, [...Qo, ...yi, ...gi, ..._i, ...es]);
  let T = null;
  const x = de({}, [...ts, ...vi, ...ns, ...Tr]);
  let I = Object.seal(Rn(null, {
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
  })), k = null, L = null;
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
  let G = !0, j = !0, W = !1, X = !0, w = !1, N = !0, U = !1, J = !1, Z = null, O = null, S = !1, p = !1, fe = !1, pe = !1, ge = !0, Gt = !1;
  const Mt = "user-content-";
  let Mn = !0, yn = !1, Ct = {}, xt = null;
  const gn = de({}, [
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
  const At = de({}, ["audio", "video", "img", "source", "image", "track"]);
  let cr = null;
  const vn = de({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), en = "http://www.w3.org/1998/Math/MathML", tn = "http://www.w3.org/2000/svg", wt = "http://www.w3.org/1999/xhtml";
  let En = wt, Gr = !1, Yr = null;
  const xl = de({}, [en, tn, wt], bi), Qi = De(["mi", "mo", "mn", "ms", "mtext"]);
  let Xr = de({}, Qi);
  const eo = De(["annotation-xml"]);
  let Jr = de({}, eo);
  const Al = de({}, ["title", "style", "font", "a", "script"]);
  let Un = null;
  const wl = ["application/xhtml+xml", "text/html"], Rl = "text/html";
  let Le = null, Tn = null;
  const Ol = n.createElement("form"), to = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, Zr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Tn && Tn === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = pt(a), Un = // eslint-disable-next-line unicorn/prefer-includes
    wl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? Rl : a.PARSER_MEDIA_TYPE, Le = Un === "application/xhtml+xml" ? bi : Kn, v = Xt(a, "ALLOWED_TAGS", A, {
      transform: Le
    }), T = Xt(a, "ALLOWED_ATTR", x, {
      transform: Le
    }), Yr = Xt(a, "ALLOWED_NAMESPACES", xl, {
      transform: bi
    }), cr = Xt(a, "ADD_URI_SAFE_ATTR", vn, {
      transform: Le,
      base: vn
    }), _n = Xt(a, "ADD_DATA_URI_TAGS", At, {
      transform: Le,
      base: At
    }), xt = Xt(a, "FORBID_CONTENTS", gn, {
      transform: Le
    }), k = Xt(a, "FORBID_TAGS", pt({}), {
      transform: Le
    }), L = Xt(a, "FORBID_ATTR", pt({}), {
      transform: Le
    }), Ct = ut(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? pt(a.USE_PROFILES) : a.USE_PROFILES : !1, G = a.ALLOW_ARIA_ATTR !== !1, j = a.ALLOW_DATA_ATTR !== !1, W = a.ALLOW_UNKNOWN_PROTOCOLS || !1, X = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, w = a.SAFE_FOR_TEMPLATES || !1, N = a.SAFE_FOR_XML !== !1, U = a.WHOLE_DOCUMENT || !1, p = a.RETURN_DOM || !1, fe = a.RETURN_DOM_FRAGMENT || !1, pe = a.RETURN_TRUSTED_TYPE || !1, S = a.FORCE_BODY || !1, ge = a.SANITIZE_DOM !== !1, Gt = a.SANITIZE_NAMED_PROPS || !1, Mn = a.KEEP_CONTENT !== !1, yn = a.IN_PLACE || !1, h = Ou(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : rs, En = typeof a.NAMESPACE == "string" ? a.NAMESPACE : wt, Xr = Ei(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => de({}, Qi)
      // Default built-in map
    ), Jr = Ei(
      a,
      "HTML_INTEGRATION_POINTS",
      () => de({}, eo)
      // Default built-in map
    );
    const y = Ei(a, "CUSTOM_ELEMENT_HANDLING", () => Rn(null));
    if (I = Rn(null), ut(y, "tagNameCheck") && to(y.tagNameCheck) && (I.tagNameCheck = y.tagNameCheck), ut(y, "attributeNameCheck") && to(y.attributeNameCheck) && (I.attributeNameCheck = y.attributeNameCheck), ut(y, "allowCustomizedBuiltInElements") && typeof y.allowCustomizedBuiltInElements == "boolean" && (I.allowCustomizedBuiltInElements = y.allowCustomizedBuiltInElements), Ue(I), w && (j = !1), fe && (p = !0), Ct && (v = de({}, es), T = Rn(null), Ct.html === !0 && (de(v, Qo), de(T, ts)), Ct.svg === !0 && (de(v, yi), de(T, vi), de(T, Tr)), Ct.svgFilters === !0 && (de(v, gi), de(T, vi), de(T, Tr)), Ct.mathMl === !0 && (de(v, _i), de(T, ns), de(T, Tr))), C.tagCheck = null, C.attributeCheck = null, ut(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? C.tagCheck = a.ADD_TAGS : kn(a.ADD_TAGS) && (v === A && (v = pt(v)), de(v, a.ADD_TAGS, Le))), ut(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? C.attributeCheck = a.ADD_ATTR : kn(a.ADD_ATTR) && (T === x && (T = pt(T)), de(T, a.ADD_ATTR, Le))), ut(a, "ADD_FORBID_CONTENTS") && kn(a.ADD_FORBID_CONTENTS) && (xt === gn && (xt = pt(xt)), de(xt, a.ADD_FORBID_CONTENTS, Le)), Mn && (v["#text"] = !0), U && de(v, ["html", "head", "body"]), v.table && (de(v, ["tbody"]), delete k.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw sn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw sn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const R = Se;
      Se = a.TRUSTED_TYPES_POLICY;
      try {
        Pe = ot("");
      } catch (z) {
        throw Se = R, z;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (Se = void 0, Pe = "") : (Se === void 0 && (Se = ce()), Se && typeof Pe == "string" && (Pe = ot("")));
    De && De(a), Tn = a;
  }, no = de({}, [...yi, ...gi, ...Nu]), ro = de({}, [..._i, ...Pu]), Nl = function(a, y, R) {
    return y.namespaceURI === wt ? a === "svg" : y.namespaceURI === en ? a === "svg" && (R === "annotation-xml" || Xr[R]) : !!no[a];
  }, Pl = function(a, y, R) {
    return y.namespaceURI === wt ? a === "math" : y.namespaceURI === tn ? a === "math" && Jr[R] : !!ro[a];
  }, Ll = function(a, y, R) {
    return y.namespaceURI === tn && !Jr[R] || y.namespaceURI === en && !Xr[R] ? !1 : !ro[a] && (Al[a] || !no[a]);
  }, kl = function(a) {
    let y = ne(a);
    (!y || !y.tagName) && (y = {
      namespaceURI: En,
      tagName: "template"
    });
    const R = Kn(a.tagName), z = Kn(y.tagName);
    return Yr[a.namespaceURI] ? a.namespaceURI === tn ? Nl(R, y, z) : a.namespaceURI === en ? Pl(R, y, z) : a.namespaceURI === wt ? Ll(R, y, z) : !!(Un === "application/xhtml+xml" && Yr[a.namespaceURI]) : !1;
  }, Yt = function(a) {
    $n(t.removed, {
      element: a
    });
    try {
      ne(a).removeChild(a);
    } catch {
      if (te(a), !ne(a))
        throw sn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, io = function(a, y, R) {
    try {
      a.removeAttributeNode(y);
    } catch {
      try {
        a.removeAttribute(R);
      } catch {
      }
    }
  }, ur = function(a) {
    fr(a);
    const y = re(a);
    if (y) {
      const z = [];
      an(y, (Y) => {
        $n(z, Y);
      }), an(z, (Y) => {
        try {
          te(Y);
        } catch {
        }
      });
    }
    const R = D(a);
    if (R)
      for (let z = R.length - 1; z >= 0; --z) {
        const Y = R[z], ee = Y && Y.name;
        typeof ee == "string" && io(a, Y, ee);
      }
  }, nn = function(a, y, R) {
    if (!R)
      try {
        R = y.getAttributeNode(a);
      } catch {
        R = null;
      }
    $n(t.removed, {
      attribute: R || null,
      from: y
    });
    try {
      R ? y.removeAttributeNode(R) : y.removeAttribute(a);
    } catch {
      try {
        y.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (p || fe)
        try {
          Yt(y);
        } catch {
        }
      else
        try {
          y.setAttribute(a, "");
        } catch {
        }
  }, Il = function(a) {
    const y = D(a);
    if (y)
      for (let R = y.length - 1; R >= 0; --R) {
        const z = y[R], Y = z && z.name;
        typeof Y != "string" || T[Le(Y)] || io(a, z, Y);
      }
  }, fr = function(a) {
    const y = [a];
    for (; y.length > 0; ) {
      const R = y.pop();
      Oe(R) === dt.element && Il(R);
      const Y = re(R);
      if (Y)
        for (let ee = Y.length - 1; ee >= 0; --ee)
          y.push(Y[ee]);
    }
  }, oo = function(a, y) {
    return N ? a === "patchsrc" ? !0 : a === "for" && y !== "label" && y !== "output" : !1;
  }, Dl = function(a) {
    if (!N)
      return;
    const y = [a];
    for (; y.length > 0; ) {
      const R = y.pop(), z = Oe(R);
      if (z === dt.processingInstruction || z === dt.comment && We(os, R.data)) {
        try {
          te(R);
        } catch {
        }
        continue;
      }
      if (z === dt.element) {
        const ee = R, ve = Le(Ae(R));
        try {
          ee.hasAttribute && ee.hasAttribute("patchsrc") && ee.removeAttribute("patchsrc"), ee.hasAttribute && ee.hasAttribute("for") && oo("for", ve) && ee.removeAttribute("for");
        } catch {
        }
      }
      const Y = re(R);
      if (Y)
        for (let ee = Y.length - 1; ee >= 0; --ee)
          y.push(Y[ee]);
    }
  }, so = function(a) {
    let y = null, R = null;
    if (S)
      a = "<remove></remove>" + a;
    else {
      const ee = Yo(a, /^[\r\n\t ]+/);
      R = ee && ee[0];
    }
    Un === "application/xhtml+xml" && En === wt && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const z = Se ? ot(a) : a;
    if (En === wt)
      try {
        y = new b().parseFromString(z, Un);
      } catch {
      }
    if (!y || !y.documentElement) {
      y = Fe.createDocument(En, "template", null);
      try {
        y.documentElement.innerHTML = Gr ? Pe : z;
      } catch {
      }
    }
    const Y = y.body || y.documentElement;
    return a && R && Y.insertBefore(n.createTextNode(R), Y.childNodes[0] || null), En === wt ? Ie.call(y, U ? "html" : "body")[0] : U ? y.documentElement : Y;
  }, lo = function(a) {
    const y = Re ? Re(a) : a.ownerDocument;
    return He.call(
      y || a,
      a,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, dr = function(a) {
    return a = Vn(a, Xe, " "), a = Vn(a, mt, " "), a = Vn(a, Je, " "), a;
  }, Qr = function(a) {
    var y;
    a.normalize();
    const R = Re ? Re(a) : a.ownerDocument, z = He.call(
      R || a,
      a,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Y = z.nextNode();
    for (; Y; )
      Y.data = dr(Y.data), Y = z.nextNode();
    const ee = (y = a.querySelectorAll) === null || y === void 0 ? void 0 : y.call(a, "template");
    ee && an(ee, (ve) => {
      Sn(ve.content) && Qr(ve.content);
    });
  }, pr = function(a) {
    const y = le ? le(a) : null;
    return typeof y != "string" || Le(y) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== D(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    a.nodeType !== $(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    a.childNodes !== re(a);
  }, Sn = function(a) {
    if (!$ || typeof a != "object" || a === null)
      return !1;
    try {
      return $(a) === dt.documentFragment;
    } catch {
      return !1;
    }
  }, Fn = function(a) {
    if (!$ || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof $(a) == "number";
    } catch {
      return !1;
    }
  };
  function Rt(M, a, y) {
    M.length !== 0 && an(M, (R) => {
      R.call(t, a, y, Tn);
    });
  }
  const Ml = function(a, y) {
    return !!(N && a.hasChildNodes() && !Fn(a.firstElementChild) && We(is, a.textContent) && We(is, a.innerHTML) || N && a.namespaceURI === wt && zu[y] && (Fn(a.firstElementChild) || typeof a.textContent == "string" && We(Bu[y], a.textContent)) || a.nodeType === dt.processingInstruction || N && a.nodeType === dt.comment && We(os, a.data));
  }, hr = function(a, y) {
    if (a instanceof RegExp)
      return We(a, y);
    if (a instanceof Function) {
      for (var R = arguments.length, z = new Array(R > 2 ? R - 2 : 0), Y = 2; Y < R; Y++)
        z[Y - 2] = arguments[Y];
      return !!a(y, ...z);
    }
    return !1;
  }, Ul = function(a, y, R) {
    if (!k[y] && po(y) && hr(I.tagNameCheck, y))
      return !1;
    if (Mn && !xt[y]) {
      const z = ne(a), Y = re(a);
      if (Y && z) {
        const ee = Y.length;
        for (let ve = ee - 1; ve >= 0; --ve) {
          const we = a === R ? V(Y[ve], !0) : Y[ve];
          z.insertBefore(we, B(a));
        }
      }
    }
    return Yt(a), !0;
  }, ao = function(a, y, R, z) {
    return a.length === 0 ? y : y === R || y === z ? pt(y) : y;
  }, co = function(a, y) {
    return a === y || ne(a) !== null ? !1 : (yn && fr(a), !0);
  }, uo = function(a, y) {
    if (Rt(ue.beforeSanitizeElements, a, null), co(a, y))
      return !0;
    if (pr(a))
      return Yt(a), !0;
    const R = Le(Ae(a));
    if (v = ao(ue.uponSanitizeElement, v, A, Z), Rt(ue.uponSanitizeElement, a, {
      tagName: R,
      allowedTags: v
    }), co(a, y))
      return !0;
    if (Ml(a, R))
      return Yt(a), !0;
    if (k[R] || !(C.tagCheck instanceof Function && C.tagCheck(R)) && !v[R]) {
      const Y = Ul(a, R, y);
      return Y === !1 && Rt(ue.afterSanitizeElements, a, null), Y;
    }
    if (Oe(a) === dt.element && !kl(a) || (R === "noscript" || R === "noembed" || R === "noframes") && We($u, a.innerHTML))
      return Yt(a), !0;
    if (w && a.nodeType === dt.text) {
      const Y = dr(a.textContent);
      a.textContent !== Y && ($n(t.removed, {
        element: a.cloneNode()
      }), a.textContent = Y);
    }
    return Rt(ue.afterSanitizeElements, a, null), !1;
  }, fo = function(a, y, R) {
    if (L[y] || oo(y, a) || ge && (y === "id" || y === "name") && (R in n || R in Ol))
      return !1;
    const z = T[y] || C.attributeCheck instanceof Function && C.attributeCheck(y, a);
    return j && We(gt, y) || G && We(st, y) ? !0 : z ? cr[y] || We(h, Vn(R, Ze, "")) || (y === "src" || y === "xlink:href" || y === "href") && a !== "script" && Xo(R, "data:") === 0 && _n[a] || W && !We(Be, Vn(R, Ze, "")) ? !0 : !R : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      po(a) && hr(I.tagNameCheck, a) && hr(I.attributeNameCheck, y, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      y === "is" && I.allowCustomizedBuiltInElements && hr(I.tagNameCheck, R)
    );
  }, Fl = de({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), po = function(a) {
    return !Fl[Kn(a)] && We(f, a);
  }, Hl = function(a, y, R, z) {
    if (Se && typeof E == "object" && typeof E.getAttributeType == "function" && !R)
      switch (E.getAttributeType(a, y)) {
        case "TrustedHTML":
          return ot(z);
        case "TrustedScriptURL":
          return Ce(z);
      }
    return z;
  }, jl = function(a, y, R, z) {
    try {
      R ? a.setAttributeNS(R, y, z) : a.setAttribute(y, z), pr(a) ? Yt(a) : Go(t.removed);
    } catch {
      nn(y, a);
    }
  }, ho = function(a) {
    Rt(ue.beforeSanitizeAttributes, a, null);
    const y = a.attributes;
    if (!y || pr(a))
      return;
    T = ao(ue.uponSanitizeAttribute, T, x, O);
    const R = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let z = y.length;
    const Y = Le(a.nodeName);
    for (; z--; ) {
      const ee = y[z], ve = ee.name, we = ee.namespaceURI, lt = ee.value, at = Le(ve), ti = lt;
      let Qe = ve === "value" ? ti : Su(ti);
      if (R.attrName = at, R.attrValue = Qe, R.keepAttr = !0, R.forceKeepAttr = void 0, Rt(ue.uponSanitizeAttribute, a, R), Qe = R.attrValue, Gt && (at === "id" || at === "name") && Xo(Qe, Mt) !== 0 && (nn(ve, a, ee), Qe = Mt + Qe), N && We(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Qe)) {
        nn(ve, a, ee);
        continue;
      }
      if (at === "attributename" && Yo(Qe, "href")) {
        nn(ve, a, ee);
        continue;
      }
      if (!R.forceKeepAttr) {
        if (!R.keepAttr) {
          nn(ve, a, ee);
          continue;
        }
        if (!X && We(Vu, Qe)) {
          nn(ve, a, ee);
          continue;
        }
        if (w && (Qe = dr(Qe)), !fo(Y, at, Qe)) {
          nn(ve, a, ee);
          continue;
        }
        Qe = Hl(Y, at, we, Qe), Qe !== ti && jl(a, ve, we, Qe);
      }
    }
    Rt(ue.afterSanitizeAttributes, a, null);
  }, mr = function(a) {
    let y = null;
    const R = lo(a);
    for (Rt(ue.beforeSanitizeShadowDOM, a, null); y = R.nextNode(); )
      if (Rt(ue.uponSanitizeShadowNode, y, null), uo(y, a), ho(y), Sn(y.content) && mr(y.content), Oe(y) === dt.element) {
        const z = q(y);
        Sn(z) && (ei(z), mr(z));
      }
    Rt(ue.afterSanitizeShadowDOM, a, null);
  }, ei = function(a) {
    const y = [{
      node: a,
      shadow: null
    }];
    for (; y.length > 0; ) {
      const R = y.pop();
      if (R.shadow) {
        mr(R.shadow);
        continue;
      }
      const z = R.node, ee = Oe(z) === dt.element, ve = re(z);
      if (ve)
        for (let we = ve.length - 1; we >= 0; --we)
          y.push({
            node: ve[we],
            shadow: null
          });
      if (ee) {
        const we = le ? le(z) : null;
        if (typeof we == "string" && Le(we) === "template") {
          const lt = z.content;
          Sn(lt) && y.push({
            node: lt,
            shadow: null
          });
        }
      }
      if (ee) {
        const we = q(z);
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
  return t.sanitize = function(M) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = null, R = null, z = null, Y = null;
    if (Gr = !M, Gr && (M = "<!-->"), typeof M != "string" && !Fn(M) && (M = Ru(M), typeof M != "string"))
      throw sn("dirty is not a string, aborting");
    if (!t.isSupported)
      return M;
    J ? (v = Z, T = O) : Zr(a), (ue.uponSanitizeElement.length > 0 || ue.uponSanitizeAttribute.length > 0) && (v = pt(v)), ue.uponSanitizeAttribute.length > 0 && (T = pt(T)), t.removed = [];
    const ee = yn && typeof M != "string" && Fn(M);
    if (ee) {
      Dl(M);
      const lt = Ae(M);
      if (typeof lt == "string") {
        const at = Le(lt);
        if (!v[at] || k[at])
          throw ur(M), sn("root node is forbidden and cannot be sanitized in-place");
      }
      if (pr(M))
        throw ur(M), sn("root node is clobbered and cannot be sanitized in-place");
      try {
        ei(M);
      } catch (at) {
        throw ur(M), at;
      }
    } else if (Fn(M))
      y = so("<!---->"), R = y.ownerDocument.importNode(M, !0), R.nodeType === dt.element && R.nodeName === "BODY" || R.nodeName === "HTML" ? y = R : y.appendChild(R), ei(R);
    else {
      if (!p && !w && !U && // eslint-disable-next-line unicorn/prefer-includes
      M.indexOf("<") === -1)
        return Se && pe ? ot(M) : M;
      if (y = so(M), !y)
        return p ? null : pe ? Pe : "";
    }
    y && S && Yt(y.firstChild);
    const ve = ee ? M : y;
    try {
      const lt = lo(ve);
      for (; z = lt.nextNode(); )
        uo(z, ve), ho(z), Sn(z.content) && mr(z.content);
    } catch (lt) {
      throw ee && (ur(M), an(t.removed, (at) => {
        at.element && fr(at.element);
      })), lt;
    }
    if (ee)
      return an(t.removed, (lt) => {
        lt.element && fr(lt.element);
      }), w && Qr(M), M;
    if (p) {
      if (w && Qr(y), fe)
        for (Y = Ye.call(y.ownerDocument); y.firstChild; )
          Y.appendChild(y.firstChild);
      else
        Y = y;
      return (T.shadowroot || T.shadowrootmode) && (Y = ft.call(r, Y, !0)), Y;
    }
    let we = U ? y.outerHTML : y.innerHTML;
    return U && v["!doctype"] && y.ownerDocument && y.ownerDocument.doctype && y.ownerDocument.doctype.name && We(Hu, y.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + y.ownerDocument.doctype.name + `>
` + we), w && (we = dr(we)), Se && pe ? ot(we) : we;
  }, t.setConfig = function() {
    let M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zr(M), J = !0, Z = v, O = T;
  }, t.clearConfig = function() {
    Tn = null, J = !1, Z = null, O = null, Se = $e, Pe = "";
  }, t.isValidAttribute = function(M, a, y) {
    Tn || Zr({});
    const R = Le(M), z = Le(a);
    return fo(R, z, y);
  }, t.addHook = function(M, a) {
    typeof a == "function" && ut(ue, M) && $n(ue[M], a);
  }, t.removeHook = function(M, a) {
    if (ut(ue, M)) {
      if (a !== void 0) {
        const y = Eu(ue[M], a);
        return y === -1 ? void 0 : Tu(ue[M], y, 1)[0];
      }
      return Go(ue[M]);
    }
  }, t.removeHooks = function(M) {
    ut(ue, M) && (ue[M] = []);
  }, t.removeAllHooks = function() {
    ue = ss();
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
  }, u = (B) => B, _ = (l.sanitize ? Ku.sanitize : u) || u, b = l.escape ? as : u, E = (B) => typeof B == "string" || typeof B == "number", P = (B, re, ne) => B.replace(/%n/g, "" + ne).replace(/{([^{}]*)}/g, (q, D) => {
    if (re === void 0 || !(D in re))
      return b(q);
    const $ = re[D];
    return E($) ? b(`${$}`) : typeof $ == "object" && E($.value) ? ($.escape !== !1 ? as : u)(`${$.value}`) : b(q);
  });
  let te = (i?.bundle ?? Ju(e)).translations[t] || t;
  return te = Array.isArray(te) ? te[0] : te, _(typeof o == "object" || s !== void 0 ? P(
    te,
    o,
    s
  ) : te);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, ef = { class: "library-catalogue-header" }, tf = { id: "library-catalogue-heading" }, nf = { class: "library-muted" }, rf = ["aria-label"], of = ["href"], sf = ["href"], lf = ["href"], af = ["href"], cf = ["aria-label"], uf = ["name", "value"], ff = { class: "library-quick-filter-search" }, df = { value: "title" }, pf = { value: "recent" }, hf = { value: "publicationDate" }, mf = { value: "publication" }, bf = { value: "lastOpened" }, yf = { value: "format" }, gf = { value: "" }, _f = { value: "1" }, vf = ["value"], Ef = ["value"], Tf = ["aria-label"], Sf = ["aria-label"], Cf = { class: "library-filter-panel" }, xf = { class: "library-filter-panel-summary" }, Af = ["aria-label"], wf = { value: "" }, Rf = ["value"], Of = { value: "" }, Nf = ["value"], Pf = { value: "" }, Lf = ["value"], kf = { value: "" }, If = ["value"], Df = { value: "" }, Mf = ["value"], Uf = { value: "" }, Ff = ["value"], Hf = { value: "" }, jf = ["value"], $f = { value: "" }, Vf = ["value"], zf = { value: "" }, Bf = ["value"], Wf = { value: "" }, qf = ["value"], Kf = { value: "" }, Gf = { value: "1" }, Yf = { value: "" }, Xf = { value: "1" }, Jf = { value: "title" }, Zf = { value: "recent" }, Qf = { value: "publicationDate" }, ed = { value: "publication" }, td = { value: "lastOpened" }, nd = { value: "format" }, rd = ["value"], id = ["value"], od = ["aria-label"], sd = ["aria-label"], ld = ["href"], ad = {
  key: 0,
  class: "library-discovery-header",
  "aria-labelledby": "library-discovery-heading"
}, cd = { class: "library-muted" }, ud = { id: "library-discovery-heading" }, fd = { class: "library-muted" }, dd = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, pd = { key: 0 }, hd = { key: 1 }, md = {
  href: "/apps/library/",
  class: "button secondary"
}, bd = { class: "library-muted library-filter-result-summary" }, yd = { key: 0 }, gd = { href: "?" }, _d = { class: "library-batch-actions" }, vd = { class: "library-settings-count-badge" }, Ed = ["action"], Td = ["value"], Sd = ["name", "value"], Cd = ["placeholder"], xd = {
  type: "submit",
  class: "button primary"
}, Ad = { class: "library-muted" }, wd = ["action"], Rd = ["value"], Od = ["name", "value"], Nd = ["placeholder"], Pd = {
  type: "submit",
  class: "button secondary"
}, Ld = { class: "library-muted" }, kd = ["action"], Id = ["value"], Dd = ["name", "value"], Md = {
  type: "submit",
  class: "button secondary"
}, Ud = { class: "library-muted" }, Fd = ["action"], Hd = ["value"], jd = ["name", "value"], $d = { name: "bulkEditField" }, Vd = { value: "publicationType" }, zd = { value: "subtitle" }, Bd = { value: "creators" }, Wd = { value: "publication" }, qd = { value: "publicationDate" }, Kd = { value: "language" }, Gd = { value: "publisher" }, Yd = { value: "genres" }, Xd = { value: "classifications" }, Jd = {
  type: "submit",
  class: "button secondary"
}, Zd = { class: "library-muted" }, Qd = ["action"], ep = ["value"], tp = ["name", "value"], np = {
  type: "submit",
  class: "button secondary"
}, rp = { class: "library-muted" }, ip = ["aria-label"], op = ["href", "aria-label"], sp = ["aria-label"], lp = { class: "library-pagination-range" }, ap = { key: 0 }, cp = ["href"], up = {
  key: 1,
  class: "library-muted"
}, fp = ["href"], dp = {
  key: 3,
  class: "library-muted"
}, pp = {
  key: 2,
  class: "library-periodical-groups"
}, hp = { class: "library-periodical-groups-summary" }, mp = { id: "library-periodical-groups-heading" }, bp = { class: "library-muted" }, yp = ["href"], gp = { class: "library-muted" }, _p = {
  key: 3,
  class: "library-periodical-groups library-periodical-groups-empty"
}, vp = { class: "library-periodical-groups-summary" }, Ep = { id: "library-periodical-groups-empty-heading" }, Tp = { class: "library-muted" }, Sp = {
  key: 4,
  class: "library-year-groups"
}, Cp = { class: "library-periodical-groups-summary" }, xp = { id: "library-year-groups-heading" }, Ap = { class: "library-muted" }, wp = ["href"], Rp = {
  key: 5,
  class: "library-creator-groups"
}, Op = { class: "library-periodical-groups-summary" }, Np = { id: "library-creator-groups-heading" }, Pp = { class: "library-muted" }, Lp = ["href"], kp = { class: "library-muted" }, Ip = { class: "library-empty-actions" }, Dp = ["href"], Mp = { class: "library-muted" }, Up = { class: "library-muted" }, Fp = { class: "library-empty-actions" }, Hp = ["href"], jp = { class: "library-muted" }, $p = { class: "library-empty-actions" }, Vp = ["href"], zp = {
  href: "?",
  class: "button primary"
}, Bp = { class: "library-muted" }, Wp = { class: "library-empty-actions" }, qp = ["href"], Kp = {
  key: 7,
  class: "library-cover-gallery"
}, Gp = ["href", "aria-label"], Yp = ["src", "alt"], Xp = ["action", "onSubmit"], Jp = ["value"], Zp = ["value"], Qp = ["aria-pressed", "title", "aria-label", "onClick"], eh = { class: "library-cover-summary" }, th = { class: "library-cover-primary" }, nh = ["aria-label"], rh = ["href"], ih = ["onToggle"], oh = ["aria-label"], sh = { class: "library-cover-meta" }, lh = {
  key: 0,
  class: "library-creator"
}, ah = { class: "library-cover-detail-list" }, ch = { class: "library-cover-detail-chip" }, uh = {
  key: 0,
  class: "library-cover-detail-chip"
}, fh = {
  key: 1,
  class: "library-cover-detail-chip"
}, dh = {
  key: 2,
  class: "library-cover-detail-chip"
}, ph = {
  key: 3,
  class: "library-cover-detail-chip"
}, hh = {
  key: 4,
  class: "library-cover-detail-chip"
}, mh = {
  key: 5,
  class: "library-cover-detail-chip"
}, bh = {
  key: 6,
  class: "library-cover-detail-chip"
}, yh = {
  key: 1,
  class: "library-muted library-cover-description"
}, gh = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, _h = { key: 0 }, vh = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Eh = {
  key: 0,
  class: "library-muted"
}, Th = { class: "library-cover-actions" }, Sh = ["href"], Ch = ["href"], xh = ["href"], Ah = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], i = /* @__PURE__ */ un({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), o = /* @__PURE__ */ un((i.items || []).map((O) => ({ ...O }))), s = se(() => o), l = se(() => i.shelves || []), u = se(() => i.formats || []), _ = se(() => i.publications || []), b = se(() => i.publicationSummaries || []), E = se(() => i.publicationIssueContext || null), P = se(() => i.publicationYears || []), V = se(() => i.creators || []), te = se(() => i.scanStatuses || []), B = se(() => i.workflowStatuses || []), re = se(() => i.genres || []), ne = se(() => i.classifications || []), q = se(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), D = /* @__PURE__ */ un({
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
    }), $ = se(() => i.settingsUrl || ""), le = se(() => i.requestToken || ""), Re = se(() => i.metadataExportUrl || ""), Oe = se(() => i.metadataSidecarManifestUrl || ""), Ae = se(() => i.metadataSidecarBundleUrl || ""), Se = se(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), Pe = se(() => i.batchTagUrl || "/apps/library/bulk/tags"), $e = se(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), it = se(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ve = se(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), ze = se(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), ot = se(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), Ce = se(() => i.discoveryPage === "publication"), ce = se(() => i.discoveryPage === "year"), oe = se(() => i.discoveryPage === "creator"), Fe = se(() => Ce.value || ce.value || oe.value), He = se(() => i.discoveryTitle || D.publication || D.year || D.creator || ""), Ye = se(() => Number(i.rootCount || 0)), Ie = se(() => Number(i.enabledRootCount || 0)), ft = se(() => Ye.value === 0), ue = se(() => Ye.value > 0 && Ie.value === 0), Xe = se(() => Je.value.length > 0), mt = {
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
    }, Je = se(() => Object.entries(mt).map(([O, S]) => ({ key: O, label: S, value: D[O] || "" })).filter((O) => String(O.value).trim() !== "")), gt = se(() => Object.entries(D).filter(([O, S]) => !["q", "sort", "starred"].includes(O) && String(S || "").trim() !== "").map(([O, S]) => ({ key: O, value: S }))), st = se(() => Object.entries(D).filter(([O, S]) => String(S || "").trim() !== "").map(([O, S]) => ({ key: O, value: S }))), Be = /* @__PURE__ */ un({}), Ze = /* @__PURE__ */ va(null);
    let f = null;
    function h(O) {
      const S = new URLSearchParams(new FormData(O));
      for (const p of Array.from(S.keys()))
        String(S.get(p) || "").trim() === "" && S.delete(p);
      return S.delete("page"), S;
    }
    function v(O) {
      o.splice(0, o.length, ...(O.items || []).map((S) => ({ ...S })));
      for (const S of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl"])
        Object.prototype.hasOwnProperty.call(O, S) && (i[S] = O[S]);
      Object.assign(D, O.activeFilters || {});
    }
    async function A(O) {
      const S = O?.currentTarget?.tagName === "FORM" ? O.currentTarget : O?.currentTarget?.form;
      if (!S) return;
      const fe = h(S).toString(), pe = fe ? `?${fe}` : "", ge = await fetch(Se.value + pe, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!ge.ok) {
        S.submit();
        return;
      }
      v(await ge.json()), history.replaceState({}, "", fe ? `?${fe}` : window.location.pathname);
    }
    function T(O) {
      A(O);
    }
    function x(O) {
      window.clearTimeout(f), f = window.setTimeout(() => T(O), 350);
    }
    function I(O) {
      const S = new URLSearchParams();
      for (const [fe, pe] of Object.entries(D)) {
        const ge = String(pe || "").trim();
        ge !== "" && fe !== O && !(fe === "sort" && ge === "title") && S.set(fe, ge);
      }
      const p = S.toString();
      return p ? `?${p}` : "?";
    }
    function k() {
      return I("q");
    }
    function L(O) {
      return String(O || "").toUpperCase();
    }
    function C(O) {
      return O.nextcloudTags || [];
    }
    function G(O) {
      return b.value.find((p) => p.publication === O)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(O)}`;
    }
    function j(O) {
      return i.publicationYearLandingUrls?.[O] || `/apps/library/years/${encodeURIComponent(O)}`;
    }
    function W(O) {
      return i.creatorLandingUrls?.[O] || `/apps/library/creators/${encodeURIComponent(O)}`;
    }
    function X(O, S) {
      Be[O] = !!S?.currentTarget?.open;
    }
    function w(O) {
      const S = String(O?.tagName || "").toLowerCase();
      return O?.isContentEditable || ["input", "select", "textarea", "button"].includes(S);
    }
    function N(O) {
      O.key !== "/" || O.metaKey || O.ctrlKey || O.altKey || O.shiftKey || w(O.target) || (O.preventDefault(), Ze.value?.focus(), Ze.value?.select?.());
    }
    function U(O) {
      O.key !== "Escape" || document.activeElement !== Ze.value || D.q === "" || (O.preventDefault(), D.q = "", Ze.value.value = "", window.clearTimeout(f), T({ currentTarget: Ze.value }));
    }
    function J(O) {
      N(O), U(O);
    }
    Ks(() => {
      window.addEventListener("keydown", J);
    }), Gs(() => {
      window.removeEventListener("keydown", J);
    });
    async function Z(O, S) {
      const p = S?.currentTarget?.closest?.("form") || S?.currentTarget;
      if (!p || !O?.starUrl) return;
      const fe = !!O.starred;
      O.starred = !fe;
      try {
        (await fetch(O.starUrl, {
          method: "POST",
          body: new FormData(p),
          credentials: "same-origin"
        })).ok || (O.starred = fe);
      } catch {
        O.starred = fe;
      }
    }
    return (O, S) => (F(), H("div", Zu, [
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
            d("a", {
              href: $.value,
              class: "button secondary",
              "aria-label": "Open Library settings"
            }, m(g(c)("library", "Settings")), 9, of),
            Re.value ? (F(), H("a", {
              key: 0,
              href: Re.value,
              class: "button secondary",
              "aria-label": "Export corrected metadata"
            }, m(g(c)("library", "Export corrected metadata")), 9, sf)) : Te("", !0),
            Oe.value ? (F(), H("a", {
              key: 1,
              href: Oe.value,
              class: "button secondary",
              "aria-label": "Export sidecar manifest"
            }, m(g(c)("library", "Sidecar manifest")), 9, lf)) : Te("", !0),
            Ae.value ? (F(), H("a", {
              key: 2,
              href: Ae.value,
              class: "button secondary",
              "aria-label": "Export sidecar ZIP"
            }, m(g(c)("library", "Sidecar ZIP")), 9, af)) : Te("", !0)
          ], 8, rf)
        ]),
        d("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": g(c)("library", "Quick catalogue filters"),
          onSubmit: Er(A, ["prevent"])
        }, [
          (F(!0), H(ae, null, xe(gt.value, (p) => (F(), H("input", {
            key: p.key,
            type: "hidden",
            name: p.key,
            value: p.value
          }, null, 8, uf))), 128)),
          d("label", ff, [
            he(m(g(c)("library", "Search")) + " ", 1),
            S[18] || (S[18] = d("kbd", { class: "library-keyboard-hint" }, "/", -1)),
            Me(d("input", {
              ref_key: "quickSearchInput",
              ref: Ze,
              "onUpdate:modelValue": S[0] || (S[0] = (p) => D.q = p),
              "data-library-quick-search": "",
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex...",
              onInput: x
            }, null, 544), [
              [mi, D.q]
            ])
          ]),
          d("label", null, [
            he(m(g(c)("library", "Sort")) + " ", 1),
            Me(d("select", {
              "onUpdate:modelValue": S[1] || (S[1] = (p) => D.sort = p),
              name: "sort",
              onChange: A
            }, [
              d("option", df, m(g(c)("library", "Title")), 1),
              d("option", pf, m(g(c)("library", "Recently added")), 1),
              d("option", hf, m(g(c)("library", "Publication date")), 1),
              d("option", mf, m(g(c)("library", "Series")), 1),
              d("option", bf, m(g(c)("library", "Recently opened")), 1),
              d("option", yf, m(g(c)("library", "Format")), 1)
            ], 544), [
              [et, D.sort]
            ])
          ]),
          d("label", null, [
            he(m(g(c)("library", "Starred")) + " ", 1),
            Me(d("select", {
              "onUpdate:modelValue": S[2] || (S[2] = (p) => D.starred = p),
              name: "starred",
              onChange: A
            }, [
              d("option", gf, m(g(c)("library", "All")), 1),
              d("option", _f, m(g(c)("library", "Starred")), 1)
            ], 544), [
              [et, D.starred]
            ])
          ]),
          d("label", null, [
            he(m(g(c)("library", "Size")) + " ", 1),
            d("select", {
              value: q.value.limit,
              name: "limit",
              onChange: A
            }, [
              (F(), H(ae, null, xe(r, (p) => d("option", {
                key: p,
                value: p
              }, m(p), 9, Ef)), 64))
            ], 40, vf)
          ]),
          d("button", {
            type: "submit",
            class: "button primary",
            "aria-label": g(c)("library", "Apply catalogue filters")
          }, m(g(c)("library", "Apply filters")), 9, Tf),
          d("a", {
            href: "?",
            class: "button secondary",
            "aria-label": g(c)("library", "Clear catalogue filters")
          }, m(g(c)("library", "Clear all")), 9, Sf)
        ], 40, cf),
        d("details", Cf, [
          d("summary", xf, m(g(c)("library", "Show catalogue filters")), 1),
          d("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": g(c)("library", "Catalogue search and filters"),
            onSubmit: Er(A, ["prevent"])
          }, [
            d("label", null, [
              he(m(g(c)("library", "Search title / author")) + " ", 1),
              Me(d("input", {
                "onUpdate:modelValue": S[3] || (S[3] = (p) => D.q = p),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [mi, D.q]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Type")) + " ", 1),
              Me(d("select", {
                "onUpdate:modelValue": S[4] || (S[4] = (p) => D.type = p),
                name: "type"
              }, [
                d("option", wf, m(g(c)("library", "All types")), 1),
                (F(), H(ae, null, xe(n, (p) => d("option", {
                  key: p,
                  value: p
                }, m(p), 9, Rf)), 64))
              ], 512), [
                [et, D.type]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Series / periodical")) + " ", 1),
              Me(d("select", {
                "onUpdate:modelValue": S[5] || (S[5] = (p) => D.publication = p),
                name: "publication"
              }, [
                d("option", Of, m(g(c)("library", "All series and periodicals")), 1),
                (F(!0), H(ae, null, xe(_.value, (p) => (F(), H("option", {
                  key: p,
                  value: p
                }, m(p), 9, Nf))), 128))
              ], 512), [
                [et, D.publication]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Publication year")) + " ", 1),
              Me(d("select", {
                "onUpdate:modelValue": S[6] || (S[6] = (p) => D.year = p),
                name: "year"
              }, [
                d("option", Pf, m(g(c)("library", "All years")), 1),
                (F(!0), H(ae, null, xe(P.value, (p) => (F(), H("option", {
                  key: p,
                  value: p
                }, m(p), 9, Lf))), 128))
              ], 512), [
                [et, D.year]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Creator")) + " ", 1),
              Me(d("select", {
                "onUpdate:modelValue": S[7] || (S[7] = (p) => D.creator = p),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                d("option", kf, m(g(c)("library", "All creators")), 1),
                (F(!0), H(ae, null, xe(V.value, (p) => (F(), H("option", {
                  key: p,
                  value: p
                }, m(p), 9, If))), 128))
              ], 512), [
                [et, D.creator]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Nextcloud tag")) + " ", 1),
              Me(d("input", {
                "onUpdate:modelValue": S[8] || (S[8] = (p) => D.tag = p),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [mi, D.tag]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Format")) + " ", 1),
              Me(d("select", {
                "onUpdate:modelValue": S[9] || (S[9] = (p) => D.format = p),
                name: "format"
              }, [
                d("option", Df, m(g(c)("library", "All formats")), 1),
                (F(!0), H(ae, null, xe(u.value, (p) => (F(), H("option", {
                  key: p,
                  value: p
                }, m(L(p)), 9, Mf))), 128))
              ], 512), [
                [et, D.format]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Shelf")) + " ", 1),
              Me(d("select", {
                "onUpdate:modelValue": S[10] || (S[10] = (p) => D.shelf = p),
                name: "shelf"
              }, [
                d("option", Uf, m(g(c)("library", "All shelves")), 1),
                (F(!0), H(ae, null, xe(l.value, (p) => (F(), H("option", {
                  key: p,
                  value: p
                }, m(p), 9, Ff))), 128))
              ], 512), [
                [et, D.shelf]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Scan status")) + " ", 1),
              Me(d("select", {
                "onUpdate:modelValue": S[11] || (S[11] = (p) => D.status = p),
                name: "status"
              }, [
                d("option", Hf, m(g(c)("library", "All scan statuses")), 1),
                (F(!0), H(ae, null, xe(te.value, (p) => (F(), H("option", {
                  key: p,
                  value: p
                }, m(p), 9, jf))), 128))
              ], 512), [
                [et, D.status]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Workflow status")) + " ", 1),
              Me(d("select", {
                "onUpdate:modelValue": S[12] || (S[12] = (p) => D.workflowStatus = p),
                name: "workflowStatus"
              }, [
                d("option", $f, m(g(c)("library", "All workflow statuses")), 1),
                (F(!0), H(ae, null, xe(B.value, (p) => (F(), H("option", {
                  key: p,
                  value: p
                }, m(p), 9, Vf))), 128))
              ], 512), [
                [et, D.workflowStatus]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Genre")) + " ", 1),
              Me(d("select", {
                "onUpdate:modelValue": S[13] || (S[13] = (p) => D.genre = p),
                name: "genre"
              }, [
                d("option", zf, m(g(c)("library", "All genres")), 1),
                (F(!0), H(ae, null, xe(re.value, (p) => (F(), H("option", {
                  key: p,
                  value: p
                }, m(p), 9, Bf))), 128))
              ], 512), [
                [et, D.genre]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Classification")) + " ", 1),
              Me(d("select", {
                "onUpdate:modelValue": S[14] || (S[14] = (p) => D.classification = p),
                name: "classification"
              }, [
                d("option", Wf, m(g(c)("library", "All classifications")), 1),
                (F(!0), H(ae, null, xe(ne.value, (p) => (F(), H("option", {
                  key: p,
                  value: p
                }, m(p), 9, qf))), 128))
              ], 512), [
                [et, D.classification]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Scanner conflicts")) + " ", 1),
              Me(d("select", {
                "onUpdate:modelValue": S[15] || (S[15] = (p) => D.scannerConflicts = p),
                name: "scannerConflicts"
              }, [
                d("option", Kf, m(g(c)("library", "All metadata")), 1),
                d("option", Gf, m(g(c)("library", "Needs review")), 1)
              ], 512), [
                [et, D.scannerConflicts]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Starred")) + " ", 1),
              Me(d("select", {
                "onUpdate:modelValue": S[16] || (S[16] = (p) => D.starred = p),
                name: "starred"
              }, [
                d("option", Yf, m(g(c)("library", "All publications")), 1),
                d("option", Xf, m(g(c)("library", "Starred only")), 1)
              ], 512), [
                [et, D.starred]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Sort")) + " ", 1),
              Me(d("select", {
                "onUpdate:modelValue": S[17] || (S[17] = (p) => D.sort = p),
                name: "sort"
              }, [
                d("option", Jf, m(g(c)("library", "Title")), 1),
                d("option", Zf, m(g(c)("library", "Recently added")), 1),
                d("option", Qf, m(g(c)("library", "Publication date")), 1),
                d("option", ed, m(g(c)("library", "Series / periodical")), 1),
                d("option", td, m(g(c)("library", "Recently opened")), 1),
                d("option", nd, m(g(c)("library", "Format")), 1)
              ], 512), [
                [et, D.sort]
              ])
            ]),
            d("label", null, [
              he(m(g(c)("library", "Page size")) + " ", 1),
              d("select", {
                value: q.value.limit,
                name: "limit"
              }, [
                (F(), H(ae, null, xe(r, (p) => d("option", {
                  key: p,
                  value: p
                }, m(p), 9, id)), 64))
              ], 8, rd)
            ]),
            d("button", {
              type: "submit",
              class: "button primary",
              "aria-label": g(c)("library", "Apply catalogue filters")
            }, m(g(c)("library", "Apply filters")), 9, od),
            d("a", {
              href: "?",
              class: "button secondary",
              "aria-label": g(c)("library", "Clear catalogue filters")
            }, m(g(c)("library", "Clear")), 9, sd),
            d("a", {
              href: ot.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, m(g(c)("library", "Review scanner conflicts")), 9, ld)
          ], 40, Af)
        ]),
        Fe.value ? (F(), H("section", ad, [
          d("p", cd, m(oe.value ? g(c)("library", "Creator") : ce.value ? g(c)("library", "Publication year") : g(c)("library", "Publication / series")), 1),
          d("h3", ud, m(He.value), 1),
          d("p", fd, m(q.value.total) + " " + m(oe.value ? g(c)("library", "items by this creator. Sorted by publication context when available.") : ce.value ? g(c)("library", "items from this publication year. Sorted by publication date when available.") : g(c)("library", "items in this publication. Sorted by issue/date context when available.")), 1),
          Ce.value && E.value ? (F(), H("aside", dd, [
            d("strong", null, m(g(c)("library", "Publication contents")), 1),
            d("span", null, m(E.value.itemCount) + " " + m(g(c)("library", "items")), 1),
            E.value.earliestYear && E.value.latestYear ? (F(), H("span", pd, m(E.value.earliestYear) + "–" + m(E.value.latestYear), 1)) : Te("", !0),
            d("span", null, m(E.value.datedCount) + " " + m(g(c)("library", "with issue/date coverage")), 1),
            E.value.undatedCount > 0 ? (F(), H("span", hd, m(E.value.undatedCount) + " " + m(g(c)("library", "without dates yet")), 1)) : Te("", !0)
          ])) : Te("", !0),
          d("p", null, [
            d("a", md, m(g(c)("library", "Back to full catalogue")), 1)
          ])
        ])) : Te("", !0),
        d("p", bd, [
          he(m(g(c)("library", "Showing")) + " " + m(q.value.from) + "–" + m(q.value.to) + " " + m(g(c)("library", "of")) + " " + m(q.value.total) + " " + m(g(c)("library", "catalogue items")), 1),
          Je.value.length > 0 ? (F(), H("span", yd, [
            S[19] || (S[19] = he(" · ", -1)),
            d("a", gd, m(g(c)("library", "Clear all filters")), 1)
          ])) : Te("", !0)
        ]),
        d("details", _d, [
          d("summary", null, [
            he(m(g(c)("library", "Batch actions for current results")) + " ", 1),
            d("span", vd, m(q.value.total) + " " + m(g(c)("library", "Current filter result")), 1)
          ]),
          d("form", {
            method: "post",
            action: Pe.value,
            class: "library-batch-tag-form"
          }, [
            d("input", {
              type: "hidden",
              name: "requesttoken",
              value: le.value
            }, null, 8, Td),
            (F(!0), H(ae, null, xe(st.value, (p) => (F(), H("input", {
              key: p.key,
              type: "hidden",
              name: p.key,
              value: p.value
            }, null, 8, Sd))), 128)),
            d("label", null, [
              d("span", null, m(g(c)("library", "Nextcloud tag")), 1),
              d("input", {
                type: "text",
                name: "nextcloudTagName",
                list: "library-nextcloud-tag-suggestions",
                placeholder: g(c)("library", "e.g. Review"),
                autocomplete: "off"
              }, null, 8, Cd)
            ]),
            d("button", xd, m(g(c)("library", "Apply Nextcloud tag to current results")), 1),
            d("p", Ad, m(g(c)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
          ], 8, Ed),
          d("form", {
            method: "post",
            action: $e.value,
            class: "library-batch-tag-remove-form"
          }, [
            d("input", {
              type: "hidden",
              name: "requesttoken",
              value: le.value
            }, null, 8, Rd),
            (F(!0), H(ae, null, xe(st.value, (p) => (F(), H("input", {
              key: `remove-tag-${p.key}`,
              type: "hidden",
              name: p.key,
              value: p.value
            }, null, 8, Od))), 128)),
            d("label", null, [
              d("span", null, m(g(c)("library", "Nextcloud tag")), 1),
              d("input", {
                type: "text",
                name: "nextcloudTagName",
                list: "library-nextcloud-tag-suggestions",
                placeholder: g(c)("library", "e.g. Review"),
                autocomplete: "off"
              }, null, 8, Nd)
            ]),
            d("button", Pd, m(g(c)("library", "Remove tag from current results")), 1),
            d("p", Ld, m(g(c)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
          ], 8, wd),
          d("form", {
            method: "post",
            action: it.value,
            class: "library-batch-metadata-reset-form"
          }, [
            d("input", {
              type: "hidden",
              name: "requesttoken",
              value: le.value
            }, null, 8, Id),
            (F(!0), H(ae, null, xe(st.value, (p) => (F(), H("input", {
              key: `reset-${p.key}`,
              type: "hidden",
              name: p.key,
              value: p.value
            }, null, 8, Dd))), 128)),
            S[20] || (S[20] = d("input", {
              type: "hidden",
              name: "scannerConflicts",
              value: "1"
            }, null, -1)),
            d("button", Md, m(g(c)("library", "Reset filtered metadata")), 1),
            d("p", Ud, m(g(c)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
          ], 8, kd),
          d("form", {
            method: "post",
            action: Ve.value,
            class: "library-batch-metadata-edit-preview-form",
            target: "_blank"
          }, [
            d("input", {
              type: "hidden",
              name: "requesttoken",
              value: le.value
            }, null, 8, Hd),
            (F(!0), H(ae, null, xe(st.value, (p) => (F(), H("input", {
              key: `edit-preview-${p.key}`,
              type: "hidden",
              name: p.key,
              value: p.value
            }, null, 8, jd))), 128)),
            d("label", null, [
              d("span", null, m(g(c)("library", "Metadata field")), 1),
              d("select", $d, [
                d("option", Vd, m(g(c)("library", "Publication type")), 1),
                d("option", zd, m(g(c)("library", "Subtitle")), 1),
                d("option", Bd, m(g(c)("library", "Creators")), 1),
                d("option", Wd, m(g(c)("library", "Series / periodical")), 1),
                d("option", qd, m(g(c)("library", "Publication date")), 1),
                d("option", Kd, m(g(c)("library", "Language")), 1),
                d("option", Gd, m(g(c)("library", "Publisher")), 1),
                d("option", Yd, m(g(c)("library", "Genres")), 1),
                d("option", Xd, m(g(c)("library", "Classifications")), 1)
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
            d("button", Jd, m(g(c)("library", "Preview metadata edit")), 1),
            d("p", Zd, m(g(c)("library", "Preview-first batch metadata edit for current filter results. No changes are written during preview.")), 1)
          ], 8, Fd),
          d("form", {
            method: "post",
            action: ze.value,
            class: "library-batch-cover-refresh-form"
          }, [
            d("input", {
              type: "hidden",
              name: "requesttoken",
              value: le.value
            }, null, 8, ep),
            (F(!0), H(ae, null, xe(st.value, (p) => (F(), H("input", {
              key: `cover-${p.key}`,
              type: "hidden",
              name: p.key,
              value: p.value
            }, null, 8, tp))), 128)),
            d("button", np, m(g(c)("library", "Request fresh cover previews")), 1),
            d("p", rp, m(g(c)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
          ], 8, Qd)
        ]),
        Je.value.length > 0 ? (F(), H("nav", {
          key: 1,
          class: "library-active-filter-chips",
          "aria-label": g(c)("library", "Active filters")
        }, [
          d("span", null, m(g(c)("library", "Active filters")), 1),
          (F(!0), H(ae, null, xe(Je.value, (p) => (F(), H("a", {
            key: p.key,
            href: I(p.key),
            class: "library-filter-chip",
            "aria-label": `${g(c)("library", "Remove filter")}: ${p.label}`
          }, [
            d("strong", null, m(p.label) + ":", 1),
            he(" " + m(p.value) + " ", 1),
            S[22] || (S[22] = d("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, op))), 128))
        ], 8, ip)) : Te("", !0),
        d("nav", {
          class: "library-pagination",
          "aria-label": g(c)("library", "Catalogue pagination")
        }, [
          d("span", lp, [
            he(m(g(c)("library", "Page")) + " " + m(q.value.page), 1),
            q.value.total > 0 ? (F(), H("span", ap, " · " + m(q.value.from) + "–" + m(q.value.to), 1)) : Te("", !0)
          ]),
          q.value.previousUrl ? (F(), H("a", {
            key: 0,
            href: q.value.previousUrl
          }, m(g(c)("library", "Previous")), 9, cp)) : (F(), H("span", up, m(g(c)("library", "Previous")), 1)),
          q.value.nextUrl ? (F(), H("a", {
            key: 2,
            href: q.value.nextUrl
          }, m(g(c)("library", "Next")), 9, fp)) : (F(), H("span", dp, m(g(c)("library", "Next")), 1))
        ], 8, sp),
        b.value.length > 0 ? (F(), H("details", pp, [
          d("summary", hp, m(g(c)("library", "Show top series and periodicals")), 1),
          d("h3", mp, m(g(c)("library", "Top series and periodicals")), 1),
          d("p", bp, m(g(c)("library", "Jump into recurring publications with one click.")), 1),
          d("ul", null, [
            (F(!0), H(ae, null, xe(b.value, (p) => (F(), H("li", {
              key: p.publication
            }, [
              d("a", {
                href: G(p.publication)
              }, m(p.publication), 9, yp),
              d("span", gp, m(p.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : b.value.length === 0 ? (F(), H("details", _p, [
          d("summary", vp, m(g(c)("library", "Show top series and periodicals")), 1),
          d("h3", Ep, m(g(c)("library", "No series or periodicals found yet")), 1),
          d("p", Tp, m(g(c)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Te("", !0),
        P.value.length > 0 ? (F(), H("details", Sp, [
          d("summary", Cp, m(g(c)("library", "Show publication years")), 1),
          d("h3", xp, m(g(c)("library", "Top publication years")), 1),
          d("p", Ap, m(g(c)("library", "Jump into dated books, magazines, journals and comics by year.")), 1),
          d("ul", null, [
            (F(!0), H(ae, null, xe(P.value, (p) => (F(), H("li", { key: p }, [
              d("a", {
                href: j(p)
              }, m(p), 9, wp)
            ]))), 128))
          ])
        ])) : Te("", !0),
        V.value.length > 0 ? (F(), H("details", Rp, [
          d("summary", Op, m(g(c)("library", "Show creators")), 1),
          d("h3", Np, m(g(c)("library", "Top creators")), 1),
          d("p", Pp, m(g(c)("library", "Jump to a dedicated creator discovery page with exact full-field matching.")), 1),
          d("ul", null, [
            (F(!0), H(ae, null, xe(V.value, (p) => (F(), H("li", { key: p }, [
              d("a", {
                href: W(p)
              }, m(p), 9, Lp)
            ]))), 128))
          ])
        ])) : Te("", !0),
        s.value.length === 0 ? (F(), H("div", {
          key: 6,
          class: Nn(["library-empty-content", { "library-first-run-guidance": ft.value || ue.value, "library-filter-empty-state": Xe.value && !ft.value && !ue.value }]),
          role: "status"
        }, [
          ft.value ? (F(), H(ae, { key: 0 }, [
            d("h3", null, m(g(c)("library", "Start with one Library root")), 1),
            d("p", kp, m(g(c)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            d("p", Ip, [
              d("a", {
                href: $.value,
                class: "button primary"
              }, m(g(c)("library", "Add a Library root")), 9, Dp),
              d("span", Mp, m(g(c)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : ue.value ? (F(), H(ae, { key: 1 }, [
            d("h3", null, m(g(c)("library", "No enabled Library roots")), 1),
            d("p", Up, m(g(c)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            d("p", Fp, [
              d("a", {
                href: $.value,
                class: "button primary"
              }, m(g(c)("library", "Open Library settings")), 9, Hp)
            ])
          ], 64)) : Xe.value ? (F(), H(ae, { key: 2 }, [
            d("h3", null, m(g(c)("library", "No matches for the current filters")), 1),
            d("p", jp, m(g(c)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            d("p", $p, [
              d("a", {
                href: k(),
                class: "button secondary"
              }, m(g(c)("library", "Clear search")), 9, Vp),
              d("a", zp, m(g(c)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (F(), H(ae, { key: 3 }, [
            d("h3", null, m(g(c)("library", "No catalogue items yet")), 1),
            d("p", Bp, m(g(c)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            d("p", Wp, [
              d("a", {
                href: $.value,
                class: "button primary"
              }, m(g(c)("library", "Run a scan from settings")), 9, qp)
            ])
          ], 64))
        ], 2)) : (F(), H("div", Kp, [
          (F(!0), H(ae, null, xe(s.value, (p) => (F(), H("article", {
            key: p.id,
            class: Nn(["library-cover-card", { "library-cover-card--open": Be[p.id] }])
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
              }, null, 8, Yp)
            ], 8, Gp),
            d("form", {
              method: "post",
              action: p.starUrl,
              class: "library-cover-star-form",
              onSubmit: Er((fe) => Z(p, fe), ["prevent"])
            }, [
              d("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, Jp),
              S[23] || (S[23] = d("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              d("input", {
                type: "hidden",
                name: "starred",
                value: p.starred ? "0" : "1"
              }, null, 8, Zp),
              d("button", {
                type: "submit",
                class: Nn(["library-cover-star-button", { "library-cover-star-button--starred": p.starred }]),
                "aria-pressed": p.starred ? "true" : "false",
                title: p.starred ? g(c)("library", "Unstar this publication") : g(c)("library", "Star this publication"),
                "aria-label": p.starred ? g(c)("library", "Unstar this publication") : g(c)("library", "Star this publication"),
                onClick: Er((fe) => Z(p, fe), ["prevent"])
              }, m(p.starred ? "★" : "☆"), 11, Qp)
            ], 40, Xp),
            d("div", eh, [
              d("div", th, [
                d("h3", null, [
                  p.starred ? (F(), H("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": g(c)("library", "Starred")
                  }, "★", 8, nh)) : Te("", !0),
                  he(m(p.title), 1)
                ]),
                d("a", {
                  class: "library-cover-read",
                  href: p.openUrl
                }, m(g(c)("library", "Read")), 9, rh)
              ]),
              d("details", {
                class: "library-cover-details",
                onToggle: (fe) => X(p.id, fe)
              }, [
                d("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${g(c)("library", "Show details and actions")}: ${p.title}`
                }, m(g(c)("library", "Details")), 9, oh),
                d("div", sh, [
                  p.creators ? (F(), H("p", lh, m(p.creators), 1)) : Te("", !0),
                  d("dl", ah, [
                    d("div", ch, [
                      d("dt", null, m(g(c)("library", "Type")), 1),
                      d("dd", null, m(p.publicationType), 1)
                    ]),
                    p.publication ? (F(), H("div", uh, [
                      d("dt", null, m(g(c)("library", "Series")), 1),
                      d("dd", null, m(p.publication), 1)
                    ])) : Te("", !0),
                    p.publicationDate ? (F(), H("div", fh, [
                      d("dt", null, m(g(c)("library", "Date")), 1),
                      d("dd", null, m(p.publicationDate), 1)
                    ])) : Te("", !0),
                    p.workflowStatus ? (F(), H("div", dh, [
                      d("dt", null, m(g(c)("library", "Status")), 1),
                      d("dd", null, m(p.workflowStatus), 1)
                    ])) : Te("", !0),
                    p.hasScannerConflict ? (F(), H("div", ph, [
                      d("dt", null, m(g(c)("library", "Review")), 1),
                      d("dd", null, m(p.scannerConflictCount) + " fields", 1)
                    ])) : Te("", !0),
                    p.lastOpenedAt ? (F(), H("div", hh, [
                      d("dt", null, m(g(c)("library", "Last opened")), 1),
                      d("dd", null, m(p.lastOpenedAt), 1)
                    ])) : Te("", !0),
                    p.extension ? (F(), H("div", mh, [
                      d("dt", null, m(g(c)("library", "Format")) + ":", 1),
                      d("dd", null, m(L(p.extension)), 1)
                    ])) : Te("", !0),
                    p.shelf ? (F(), H("div", bh, [
                      d("dt", null, m(g(c)("library", "Shelf")), 1),
                      d("dd", null, m(p.shelf), 1)
                    ])) : Te("", !0)
                  ]),
                  p.description ? (F(), H("p", yh, m(p.description), 1)) : Te("", !0),
                  p.scanStatus !== "indexed" || p.scanError ? (F(), H("p", gh, [
                    he(" scanStatus: " + m(p.scanStatus || "unknown"), 1),
                    p.scanError ? (F(), H("span", _h, " · scanError: " + m(p.scanError), 1)) : Te("", !0)
                  ])) : Te("", !0),
                  d("div", vh, [
                    C(p).length === 0 ? (F(), H("span", Eh, "No Nextcloud tags")) : (F(!0), H(ae, { key: 1 }, xe(C(p), (fe) => (F(), H("span", {
                      key: fe.id,
                      class: "library-tag"
                    }, m(fe.name), 1))), 128))
                  ]),
                  d("p", Th, [
                    d("a", {
                      href: p.filesUrl
                    }, m(g(c)("library", "Show in Files")), 9, Sh),
                    S[24] || (S[24] = he(" · ", -1)),
                    d("a", {
                      href: p.downloadUrl
                    }, m(g(c)("library", "Download source")), 9, Ch),
                    S[25] || (S[25] = he(" · ", -1)),
                    d("a", {
                      href: p.detailsUrl
                    }, m(g(c)("library", "Details")), 9, xh)
                  ])
                ])
              ], 40, ih)
            ])
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}, cs = du("library", "catalogue", {}), Ar = document.querySelector("#library-vue-root"), us = {
  ...cs,
  requestToken: Ar?.dataset.requestToken || cs.requestToken || ""
};
function K(e) {
  return String(e ?? "");
}
function Cl(e) {
  return K(e).toUpperCase();
}
function wh(e, t, n, r = K) {
  for (const i of t) {
    const o = document.createElement("option");
    o.value = K(i), o.textContent = r(i), K(i) === K(n) && (o.selected = !0), e.appendChild(o);
  }
}
function fs(e, t, n, r, i = "") {
  const o = document.createElement("label");
  o.textContent = t;
  const s = document.createElement("input");
  s.type = n === "q" ? "search" : "text", s.name = n, s.value = K(r), s.placeholder = i, o.appendChild(s), e.appendChild(o);
}
function xn(e, t, n, r, i, o, s = K) {
  const l = document.createElement("label");
  l.textContent = t;
  const u = document.createElement("select");
  u.name = n;
  const _ = document.createElement("option");
  _.value = "", _.textContent = i, u.appendChild(_), wh(u, o, r, s), l.appendChild(u), e.appendChild(l);
}
function An(e) {
  const t = K(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function Rh(e, t = {}) {
  return K(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(K(e || t?.publication || ""))}`);
}
function Oh(e) {
  return K(e.discoveryPage) === "publication";
}
function Nh(e, t = {}) {
  return K(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(K(e))}`);
}
function Si(e) {
  return K(e.discoveryPage) === "year";
}
function Ph(e, t = {}) {
  return K(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(K(e))}`);
}
function Ci(e) {
  return K(e.discoveryPage) === "creator";
}
function Lh(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([n, r]) => n !== "sort" && K(r).trim() !== "");
}
function kh() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Bn(e, t, n, r) {
  const i = document.createElement("a");
  return i.href = t, i.className = n, i.textContent = r, e.appendChild(i), i;
}
function Ih(e, t) {
  const n = document.createElement("span");
  return n.className = "library-muted", n.textContent = t, e.appendChild(n), n;
}
function Dh(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", c("library", "Catalogue search and filters")), fs(r, c("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), xn(r, c("library", "Type"), "type", n.type, c("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), fs(r, c("library", "Nextcloud tag"), "tag", n.tag, "photography"), xn(r, c("library", "Format"), "format", n.format, c("library", "All formats"), e.formats || [], Cl), xn(r, c("library", "Shelf"), "shelf", n.shelf, c("library", "All shelves"), e.shelves || []), xn(r, c("library", "Scan status"), "status", n.status, c("library", "All scan statuses"), e.scanStatuses || []), xn(r, c("library", "Sort"), "sort", n.sort || "title", c("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), xn(r, c("library", "Page size"), "limit", t.limit || 100, c("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", c("library", "Apply catalogue filters")), i.textContent = c("library", "Apply filters");
  const o = document.createElement("a");
  return o.href = "?", o.className = "button secondary", o.setAttribute("aria-label", c("library", "Clear catalogue filters")), o.textContent = c("library", "Clear"), r.append(i, o), r;
}
function Mh(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-quick-filter-bar", r.setAttribute("aria-label", c("library", "Quick catalogue filters"));
  let i = null;
  const o = () => {
    window.clearTimeout(i), i = window.setTimeout(() => r.requestSubmit(), 350);
  };
  for (const [E, P] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(E) || K(P).trim() === "") continue;
    const V = document.createElement("input");
    V.type = "hidden", V.name = E, V.value = K(P), r.appendChild(V);
  }
  const s = document.createElement("label");
  s.className = "library-quick-filter-search", s.textContent = c("library", "Search");
  const l = document.createElement("input");
  l.type = "search", l.name = "q", l.value = K(n.q), l.placeholder = "Camera, Eco, Rolleiflex...", l.addEventListener("input", o), s.appendChild(l), r.appendChild(s);
  const u = [
    [c("library", "Sort"), "sort", n.sort || "title", [["title", c("library", "Title")], ["recent", c("library", "Recently added")], ["publicationDate", c("library", "Publication date")], ["publication", c("library", "Series")], ["lastOpened", c("library", "Recently opened")], ["format", c("library", "Format")]]],
    [c("library", "Starred"), "starred", n.starred || "", [["", c("library", "All")], ["1", c("library", "Starred")]]],
    [c("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [E, P, V, te] of u) {
    const B = document.createElement("label");
    B.textContent = E;
    const re = document.createElement("select");
    re.name = P;
    for (const [ne, q] of te) {
      const D = document.createElement("option");
      D.value = K(ne), D.textContent = K(q), K(ne) === K(V) && (D.selected = !0), re.appendChild(D);
    }
    re.addEventListener("change", () => r.requestSubmit()), B.appendChild(re), r.appendChild(B);
  }
  const _ = document.createElement("button");
  _.type = "submit", _.className = "button primary", _.setAttribute("aria-label", c("library", "Apply catalogue filters")), _.textContent = c("library", "Apply filters");
  const b = document.createElement("a");
  return b.href = "?", b.className = "button secondary", b.setAttribute("aria-label", c("library", "Clear catalogue filters")), b.textContent = c("library", "Clear all"), r.append(_, b), r;
}
function Uh(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, i = K(e.settingsUrl || ""), o = K(e.metadataExportUrl || ""), s = K(e.batchTagUrl || "/apps/library/bulk/tags"), l = K(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), u = K(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), _ = K(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), b = K(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), E = document.createElement("div");
  E.className = "library-vue-catalogue library-vue-fallback", E.dataset.vueFallback = "true";
  const P = document.createElement("section");
  P.className = "library-panel", P.setAttribute("aria-labelledby", "library-catalogue-heading");
  const V = document.createElement("div");
  V.className = "library-catalogue-header";
  const te = document.createElement("div"), B = document.createElement("h2");
  B.id = "library-catalogue-heading", B.textContent = c("library", "Publication catalogue");
  const re = document.createElement("p");
  re.className = "library-muted", re.textContent = c("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), te.append(B, re);
  const ne = document.createElement("nav");
  if (ne.className = "library-catalogue-toolbar", ne.setAttribute("aria-label", c("library", "Library actions")), i) {
    const w = document.createElement("a");
    w.href = i, w.className = "button secondary", w.setAttribute("aria-label", "Open Library settings"), w.textContent = c("library", "Settings"), ne.appendChild(w);
  }
  if (o) {
    const w = document.createElement("a");
    w.href = o, w.className = "button secondary", w.setAttribute("aria-label", "Export corrected metadata"), w.textContent = c("library", "Export corrected metadata"), ne.appendChild(w);
  }
  if (e.metadataSidecarManifestUrl) {
    const w = document.createElement("a");
    w.href = e.metadataSidecarManifestUrl, w.className = "button secondary", w.setAttribute("aria-label", "Export sidecar manifest"), w.textContent = c("library", "Sidecar manifest"), ne.appendChild(w);
  }
  if (e.metadataSidecarBundleUrl) {
    const w = document.createElement("a");
    w.href = e.metadataSidecarBundleUrl, w.className = "button secondary", w.setAttribute("aria-label", "Export sidecar ZIP"), w.textContent = c("library", "Sidecar ZIP"), ne.appendChild(w);
  }
  V.append(te, ne), P.appendChild(V), P.appendChild(Mh(e, r));
  const q = document.createElement("details");
  q.className = "library-filter-panel";
  const D = document.createElement("summary");
  if (D.className = "library-filter-panel-summary", D.textContent = c("library", "Show catalogue filters"), q.append(D, Dh(e, r)), P.appendChild(q), Oh(e) || Si(e) || Ci(e)) {
    const w = document.createElement("section");
    w.className = "library-discovery-header", w.setAttribute("aria-labelledby", "library-discovery-heading");
    const N = document.createElement("p");
    N.className = "library-muted", N.textContent = Ci(e) ? c("library", "Creator") : Si(e) ? c("library", "Publication year") : c("library", "Publication / series");
    const U = document.createElement("h3");
    U.id = "library-discovery-heading", U.textContent = K(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = `${r.total ?? n.length} ${Ci(e) ? c("library", "items by this creator. Sorted by publication context when available.") : Si(e) ? c("library", "items from this publication year. Sorted by publication date when available.") : c("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const Z = document.createElement("a");
    Z.href = "/apps/library/", Z.className = "button secondary", Z.textContent = c("library", "Back to full catalogue"), w.append(N, U, J, Z), P.appendChild(w);
  }
  const $ = document.createElement("p");
  $.className = "library-muted library-filter-result-summary", $.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`;
  const le = document.createElement("a");
  le.href = "?", le.textContent = ` ${c("library", "Clear all filters")}`, $.appendChild(le), P.appendChild($);
  const Re = document.createElement("details");
  Re.className = "library-batch-actions";
  const Oe = document.createElement("summary");
  Oe.textContent = `${c("library", "Batch actions for current results")} (${r.total ?? n.length} ${c("library", "Current filter result")})`;
  const Ae = document.createElement("form");
  Ae.method = "post", Ae.action = s, Ae.className = "library-batch-tag-form";
  const Se = An(e);
  Se && Ae.appendChild(Se);
  for (const [w, N] of Object.entries(e.activeFilters || {})) {
    if (K(N).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = w, U.value = K(N), Ae.appendChild(U);
  }
  const Pe = document.createElement("label");
  Pe.textContent = c("library", "Apply Nextcloud tag to current results");
  const $e = document.createElement("input");
  $e.type = "text", $e.name = "nextcloudTagName", $e.placeholder = "batch-review", Pe.appendChild($e);
  const it = document.createElement("button");
  it.type = "submit", it.className = "button secondary", it.textContent = c("library", "Apply Nextcloud tag to current results");
  const Ve = document.createElement("p");
  Ve.className = "library-muted", Ve.textContent = c("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ae.append(Pe, it, Ve);
  const ze = document.createElement("form");
  ze.method = "post", ze.action = l, ze.className = "library-batch-tag-remove-form";
  const ot = An(e);
  ot && ze.appendChild(ot);
  for (const [w, N] of Object.entries(e.activeFilters || {})) {
    if (K(N).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = w, U.value = K(N), ze.appendChild(U);
  }
  const Ce = document.createElement("label");
  Ce.textContent = c("library", "Nextcloud tag");
  const ce = document.createElement("input");
  ce.type = "text", ce.name = "nextcloudTagName", ce.setAttribute("list", "library-nextcloud-tag-suggestions"), ce.placeholder = c("library", "e.g. Review"), ce.autocomplete = "off", Ce.appendChild(ce);
  const oe = document.createElement("button");
  oe.type = "submit", oe.className = "button secondary", oe.textContent = c("library", "Remove tag from current results");
  const Fe = document.createElement("p");
  Fe.className = "library-muted", Fe.textContent = c("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), ze.append(Ce, oe, Fe);
  const He = document.createElement("form");
  He.method = "post", He.action = u, He.className = "library-batch-metadata-reset-form";
  const Ye = An(e);
  Ye && He.appendChild(Ye);
  for (const [w, N] of Object.entries(e.activeFilters || {})) {
    if (K(N).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = w, U.value = K(N), He.appendChild(U);
  }
  const Ie = document.createElement("input");
  Ie.type = "hidden", Ie.name = "scannerConflicts", Ie.value = "1";
  const ft = document.createElement("button");
  ft.type = "submit", ft.className = "button secondary", ft.textContent = c("library", "Reset filtered metadata");
  const ue = document.createElement("p");
  ue.className = "library-muted", ue.textContent = c("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), He.append(Ie, ft, ue);
  const Xe = document.createElement("form");
  Xe.method = "post", Xe.action = _, Xe.className = "library-batch-metadata-edit-preview-form", Xe.target = "_blank";
  const mt = An(e);
  mt && Xe.appendChild(mt);
  for (const [w, N] of Object.entries(e.activeFilters || {})) {
    if (K(N).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = w, U.value = K(N), Xe.appendChild(U);
  }
  const Je = document.createElement("label");
  Je.textContent = c("library", "Metadata field");
  const gt = document.createElement("select");
  gt.name = "bulkEditField";
  for (const [w, N] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const U = document.createElement("option");
    U.value = w, U.textContent = c("library", N), gt.appendChild(U);
  }
  Je.appendChild(gt);
  const st = document.createElement("label");
  st.textContent = c("library", "Preview value");
  const Be = document.createElement("input");
  Be.type = "text", Be.name = "bulkEditValue", Be.placeholder = "magazine, de, photography...", Be.autocomplete = "off", st.appendChild(Be);
  const Ze = document.createElement("button");
  Ze.type = "submit", Ze.className = "button secondary", Ze.textContent = c("library", "Preview metadata edit");
  const f = document.createElement("p");
  f.className = "library-muted", f.textContent = c("library", "Preview-first batch metadata edit for current filter results. No changes are written during preview."), Xe.append(Je, st, Ze, f);
  const h = document.createElement("form");
  h.method = "post", h.action = b, h.className = "library-batch-cover-refresh-form";
  const v = An(e);
  v && h.appendChild(v);
  for (const [w, N] of Object.entries(e.activeFilters || {})) {
    if (K(N).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = w, U.value = K(N), h.appendChild(U);
  }
  const A = document.createElement("button");
  A.type = "submit", A.className = "button secondary", A.textContent = c("library", "Request fresh cover previews");
  const T = document.createElement("p");
  T.className = "library-muted", T.textContent = c("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), h.append(A, T), Re.append(Oe, Ae, ze, He, Xe, h), P.appendChild(Re);
  const x = document.createElement("nav");
  x.className = "library-pagination", x.setAttribute("aria-label", c("library", "Catalogue pagination"));
  const I = document.createElement("span");
  I.className = "library-pagination-range", I.textContent = `Page ${r.page ?? 1} · ${r.from ?? 0}–${r.to ?? n.length}`, x.appendChild(I), P.appendChild(x);
  const k = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], L = document.createElement("details");
  L.className = k.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const C = document.createElement("summary");
  C.className = "library-periodical-groups-summary", C.textContent = c("library", "Show top series and periodicals"), L.appendChild(C);
  const G = document.createElement("h3");
  G.textContent = k.length > 0 ? c("library", "Top series and periodicals") : c("library", "No series or periodicals found yet");
  const j = document.createElement("p");
  if (j.className = "library-muted", j.textContent = k.length > 0 ? c("library", "Jump into recurring publications with one click.") : c("library", "Add publication or series names in item details to build this shortcut panel."), L.append(G, j), k.length > 0) {
    const w = document.createElement("ul");
    for (const N of k) {
      const U = document.createElement("li"), J = document.createElement("a");
      J.href = Rh(N.publication, N), J.textContent = K(N.publication);
      const Z = document.createElement("span");
      Z.className = "library-muted", Z.textContent = `${N.itemCount} items`, U.append(J, Z), w.appendChild(U);
    }
    L.appendChild(w);
  }
  P.appendChild(L);
  const W = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (W.length > 0) {
    const w = document.createElement("details");
    w.className = "library-year-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = c("library", "Show publication years");
    const U = document.createElement("h3");
    U.textContent = c("library", "Top publication years");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = c("library", "Jump into dated books, magazines, journals and comics by year.");
    const Z = document.createElement("ul");
    for (const O of W) {
      const S = document.createElement("li"), p = document.createElement("a");
      p.href = Nh(O, e), p.textContent = K(O), S.appendChild(p), Z.appendChild(S);
    }
    w.append(N, U, J, Z), P.appendChild(w);
  }
  const X = Array.isArray(e.creators) ? e.creators : [];
  if (X.length > 0) {
    const w = document.createElement("details");
    w.className = "library-creator-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = c("library", "Show creators");
    const U = document.createElement("h3");
    U.textContent = c("library", "Top creators");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = c("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const Z = document.createElement("ul");
    for (const O of X) {
      const S = document.createElement("li"), p = document.createElement("a");
      p.href = Ph(O, e), p.textContent = K(O), S.appendChild(p), Z.appendChild(S);
    }
    w.append(N, U, J, Z), P.appendChild(w);
  }
  if (n.length === 0) {
    const w = document.createElement("div"), N = Number(e.rootCount || 0), U = Number(e.enabledRootCount || 0), J = Lh(e);
    w.className = "library-empty-content", (N === 0 || U === 0) && w.classList.add("library-first-run-guidance"), J && N > 0 && U > 0 && w.classList.add("library-filter-empty-state"), w.setAttribute("role", "status");
    const Z = document.createElement("h3"), O = document.createElement("p");
    O.className = "library-muted";
    const S = document.createElement("p");
    S.className = "library-empty-actions", N === 0 ? (Z.textContent = c("library", "Start with one Library root"), O.textContent = c("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Bn(S, i, "button primary", c("library", "Add a Library root")), Ih(S, c("library", "Run a scan after saving a root"))) : U === 0 ? (Z.textContent = c("library", "No enabled Library roots"), O.textContent = c("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Bn(S, i, "button primary", c("library", "Open Library settings"))) : J ? (Z.textContent = c("library", "No matches for the current filters"), O.textContent = c("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Bn(S, kh(), "button secondary", c("library", "Clear search")), Bn(S, "?", "button primary", c("library", "Clear all filters"))) : (Z.textContent = c("library", "No catalogue items yet"), O.textContent = c("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Bn(S, i, "button primary", c("library", "Run a scan from settings"))), w.append(Z, O, S), P.appendChild(w);
  } else {
    const w = document.createElement("div");
    w.className = "library-cover-gallery";
    for (const N of n) {
      const U = document.createElement("article");
      U.className = "library-cover-card";
      const J = document.createElement("a");
      J.className = "library-cover-link", J.href = K(N.openUrl || "#"), J.setAttribute("aria-label", `Read ${K(N.title || "publication")}`);
      const Z = document.createElement("img");
      Z.className = "library-cover-image", Z.src = K(N.coverUrl || ""), Z.alt = `Cover for ${K(N.title || "publication")}`, Z.loading = "lazy", J.appendChild(Z);
      const O = An(e), S = document.createElement("form");
      S.method = "post", S.action = K(N.starUrl || ""), S.className = "library-cover-star-form", O && S.appendChild(O);
      const p = document.createElement("input");
      p.type = "hidden", p.name = "returnTo", p.value = "catalogue";
      const fe = document.createElement("input");
      fe.type = "hidden", fe.name = "starred", fe.value = N.starred ? "0" : "1";
      const pe = document.createElement("button");
      pe.type = "submit", pe.className = N.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", pe.setAttribute("aria-pressed", N.starred ? "true" : "false"), pe.setAttribute("aria-label", N.starred ? c("library", "Unstar this publication") : c("library", "Star this publication")), pe.title = N.starred ? c("library", "Unstar this publication") : c("library", "Star this publication"), pe.textContent = N.starred ? "★" : "☆", S.append(p, fe, pe);
      const ge = document.createElement("div");
      ge.className = "library-cover-summary";
      const Gt = document.createElement("h3");
      if (Gt.textContent = K(N.title || "Untitled publication"), ge.appendChild(Gt), N.creators) {
        const At = document.createElement("p");
        At.className = "library-creator", At.textContent = K(N.creators), ge.appendChild(At);
      }
      const Mt = document.createElement("dl");
      Mt.className = "library-cover-detail-list";
      const Mn = [
        ["Type", K(N.publicationType || "other")],
        ["Format", N.extension ? Cl(N.extension) : ""],
        ["Shelf", N.shelf ? K(N.shelf) : ""]
      ].filter(([, At]) => At !== "");
      for (const [At, cr] of Mn) {
        const vn = document.createElement("div");
        vn.className = "library-cover-detail-chip";
        const en = document.createElement("dt");
        en.textContent = At;
        const tn = document.createElement("dd");
        tn.textContent = cr, vn.append(en, tn), Mt.appendChild(vn);
      }
      ge.appendChild(Mt);
      const yn = document.createElement("p"), Ct = document.createElement("a");
      Ct.href = K(N.openUrl || "#"), Ct.textContent = c("library", "Read");
      const xt = document.createElement("a");
      xt.href = K(N.filesUrl || "#"), xt.textContent = c("library", "Show in Files");
      const gn = document.createElement("a");
      gn.href = K(N.downloadUrl || "#"), gn.textContent = c("library", "Download source");
      const _n = document.createElement("a");
      _n.href = K(N.detailsUrl || "#"), _n.textContent = c("library", "Details"), yn.append(Ct, document.createTextNode(" · "), xt, document.createTextNode(" · "), gn, document.createTextNode(" · "), _n), ge.appendChild(yn), U.append(J, S, ge), w.appendChild(U);
    }
    P.appendChild(w);
  }
  return E.appendChild(P), E;
}
if (Ar)
  try {
    cu(Ah, { state: us }).mount(Ar);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Ar.replaceChildren(Uh(us));
  }
//# sourceMappingURL=library-main.mjs.map
