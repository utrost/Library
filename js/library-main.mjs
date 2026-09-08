// @__NO_SIDE_EFFECTS__
function Ui(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ye = {}, On = [], It = () => {
}, ds = () => !1, Mr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ur = (e) => e.startsWith("onUpdate:"), Ge = Object.assign, Fi = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, $l = Object.prototype.hasOwnProperty, me = (e, t) => $l.call(e, t), Q = Array.isArray, Zt = (e) => sr(e) === "[object Map]", mn = (e) => sr(e) === "[object Set]", mo = (e) => sr(e) === "[object Date]", ie = (e) => typeof e == "function", Re = (e) => typeof e == "string", Dt = (e) => typeof e == "symbol", be = (e) => e !== null && typeof e == "object", ps = (e) => (be(e) || ie(e)) && ie(e.then) && ie(e.catch), hs = Object.prototype.toString, sr = (e) => hs.call(e), Vl = (e) => sr(e).slice(8, -1), ms = (e) => sr(e) === "[object Object]", Hi = (e) => Re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Gn = /* @__PURE__ */ Ui(
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
      const r = e[n], i = Re(r) ? Gl(r) : ji(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Re(e) || be(e))
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
  if (Re(e))
    t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const r = Nn(e[n]);
      r && (t += r + " ");
    }
  else if (be(e))
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
  if (n = be(e), r = be(t), n || r) {
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
const _s = (e) => !!(e && e.__v_isRef === !0), b = (e) => Re(e) ? e : e == null ? "" : Q(e) || be(e) && (e.toString === hs || !ie(e.toString)) ? _s(e) ? b(e.value) : JSON.stringify(e, vs, 2) : String(e), vs = (e, t) => _s(t) ? vs(e, t.value) : Zt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], o) => (n[ri(r, o) + " =>"] = i, n),
    {}
  )
} : mn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ri(n))
} : Dt(t) ? ri(t) : be(t) && !Q(t) && !ms(t) ? String(t) : t, ri = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Dt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let $e;
class Ql {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && $e && ($e.active ? (this.parent = $e, this.index = ($e.scopes || ($e.scopes = [])).push(
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
      const n = $e;
      try {
        return $e = this, t();
      } finally {
        $e = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = $e, $e = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if ($e === this)
        $e = this.prevScope;
      else {
        let t = $e;
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
  return $e;
}
let _e;
const ii = /* @__PURE__ */ new WeakSet();
class Es {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, $e && ($e.active ? $e.effects.push(this) : this.flags &= -2);
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
    const t = _e, n = Et;
    _e = this, Et = !0;
    try {
      return this.fn();
    } finally {
      xs(this), _e = t, Et = n, this.flags &= -3;
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
  const t = e.dep, n = _e, r = Et;
  _e = e, Et = !0;
  try {
    Cs(e);
    const i = e.fn(e._value);
    (t.version === 0 || kt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    _e = n, Et = r, xs(e), e.flags &= -3;
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
    const n = _e;
    _e = void 0;
    try {
      t();
    } finally {
      _e = n;
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
    if (!_e || !Et || _e === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== _e)
      n = this.activeLink = new na(_e, this), _e.deps ? (n.prevDep = _e.depsTail, _e.depsTail.nextDep = n, _e.depsTail = n) : _e.deps = _e.depsTail = n, Rs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = _e.depsTail, n.nextDep = void 0, _e.depsTail.nextDep = n, _e.depsTail = n, _e.deps === n && (_e.deps = r);
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
  if (Et && _e) {
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
    const u = Q(e), v = u && Hi(n);
    if (u && n === "length") {
      const m = Number(r);
      s.forEach((T, P) => {
        (P === "length" || P === tr || !Dt(P) && P >= m) && l(T);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && l(s.get(n)), v && l(s.get(tr)), t) {
        case "add":
          u ? v && l(s.get("length")) : (l(s.get(dn)), Zt(e) && l(s.get(wi)));
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
  const t = /* @__PURE__ */ he(e);
  return t === e ? t : (qe(t, "iterate", tr), /* @__PURE__ */ yt(e) ? t : t.map(Tt));
}
function $r(e) {
  return qe(e = /* @__PURE__ */ he(e), "iterate", tr), e;
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
    const T = u.apply(e, o);
    return l ? Tt(T) : T;
  }
  let v = n;
  s !== e && (l ? v = function(T, P) {
    return n.call(this, Pt(e, T), P, e);
  } : n.length > 2 && (v = function(T, P) {
    return n.call(this, T, P, e);
  }));
  const m = u.call(s, v, r);
  return l && i ? i(m) : m;
}
function _o(e, t, n, r) {
  const i = $r(e), o = i !== e && !/* @__PURE__ */ yt(e);
  let s = n, l = !1;
  i !== e && (o ? (l = r.length === 0, s = function(v, m, T) {
    return l && (l = !1, v = Pt(e, v)), n.call(this, v, Pt(e, m), T, e);
  }) : n.length > 3 && (s = function(v, m, T) {
    return n.call(this, v, m, T, e);
  }));
  const u = i[t](s, ...r);
  return l ? Pt(e, u) : u;
}
function si(e, t, n) {
  const r = /* @__PURE__ */ he(e);
  qe(r, "iterate", tr);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Ki(n[0]) ? (n[0] = /* @__PURE__ */ he(n[0]), r[t](...n)) : i;
}
function Hn(e, t, n = []) {
  zt(), $i();
  const r = (/* @__PURE__ */ he(e))[t].apply(e, n);
  return Vi(), Bt(), r;
}
const oa = /* @__PURE__ */ Ui("__proto__,__v_isRef,__isVue"), Os = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Dt)
);
function sa(e) {
  Dt(e) || (e = String(e));
  const t = /* @__PURE__ */ he(this);
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
      return i && be(u) ? /* @__PURE__ */ Oi(u) : u;
    }
    return be(l) ? i ? /* @__PURE__ */ Oi(l) : /* @__PURE__ */ un(l) : l;
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
      const v = /* @__PURE__ */ Wt(o);
      if (!/* @__PURE__ */ yt(r) && !/* @__PURE__ */ Wt(r) && (o = /* @__PURE__ */ he(o), r = /* @__PURE__ */ he(r)), !s && /* @__PURE__ */ Ke(o) && !/* @__PURE__ */ Ke(r))
        return v || (o.value = r), !0;
    }
    const l = s ? Number(n) < t.length : me(t, n), u = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Ke(t) ? t : i
    );
    return t === /* @__PURE__ */ he(i) && u && (l ? kt(r, o) && jt(t, "set", n, r) : jt(t, "add", n, r)), u;
  }
  deleteProperty(t, n) {
    const r = me(t, n);
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
    const i = this.__v_raw, o = /* @__PURE__ */ he(i), s = Zt(o), l = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, v = i[e](...r), m = n ? Ri : t ? In : Tt;
    return !t && qe(
      o,
      "iterate",
      u ? wi : dn
    ), Ge(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: T, done: P } = v.next();
          return P ? { value: T, done: P } : {
            value: l ? [m(T[0]), m(T[1])] : m(T),
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
      const o = this.__v_raw, s = /* @__PURE__ */ he(o), l = /* @__PURE__ */ he(i);
      e || (kt(i, l) && qe(s, "get", i), qe(s, "get", l));
      const { has: u } = br(s), v = t ? Ri : e ? In : Tt;
      if (u.call(s, i))
        return v(o.get(i));
      if (u.call(s, l))
        return v(o.get(l));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && qe(/* @__PURE__ */ he(i), "iterate", dn), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ he(o), l = /* @__PURE__ */ he(i);
      return e || (kt(i, l) && qe(s, "has", i), qe(s, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const s = this, l = s.__v_raw, u = /* @__PURE__ */ he(l), v = t ? Ri : e ? In : Tt;
      return !e && qe(u, "iterate", dn), l.forEach((m, T) => i.call(o, v(m), v(T), s));
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
        const o = /* @__PURE__ */ he(this), s = br(o), l = /* @__PURE__ */ he(i), u = !t && !/* @__PURE__ */ yt(i) && !/* @__PURE__ */ Wt(i) ? l : i;
        return s.has.call(o, u) || kt(i, u) && s.has.call(o, i) || kt(l, u) && s.has.call(o, l) || (o.add(u), jt(o, "add", u, u)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ yt(o) && !/* @__PURE__ */ Wt(o) && (o = /* @__PURE__ */ he(o));
        const s = /* @__PURE__ */ he(this), { has: l, get: u } = br(s);
        let v = l.call(s, i);
        v || (i = /* @__PURE__ */ he(i), v = l.call(s, i));
        const m = u.call(s, i);
        return s.set(i, o), v ? kt(o, m) && jt(s, "set", i, o) : jt(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ he(this), { has: s, get: l } = br(o);
        let u = s.call(o, i);
        u || (i = /* @__PURE__ */ he(i), u = s.call(o, i)), l && l.call(o, i);
        const v = o.delete(i);
        return u && jt(o, "delete", i, void 0), v;
      },
      clear() {
        const i = /* @__PURE__ */ he(this), o = i.size !== 0, s = i.clear();
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
    me(n, i) && i in r ? n : r,
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
  if (!be(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
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
function he(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ he(t) : e;
}
function _a(e) {
  return !me(e, "__v_skip") && Object.isExtensible(e) && ys(e, "__v_skip", !0), e;
}
const Tt = (e) => be(e) ? /* @__PURE__ */ un(e) : e, In = (e) => be(e) ? /* @__PURE__ */ Oi(e) : e;
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
    this.dep = new Bi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ he(t), this._value = n ? t : Tt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ yt(t) || /* @__PURE__ */ Wt(t);
    t = r ? t : /* @__PURE__ */ he(t), kt(t, n) && (this._rawValue = t, this._value = r ? t : Tt(t), this.dep.trigger());
  }
}
function _(e) {
  return /* @__PURE__ */ Ke(e) ? e.value : e;
}
const Sa = {
  get: (e, t, n) => t === "__v_raw" ? e : _(Reflect.get(e, t, n)),
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
    _e !== this)
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
function wa(e, t, n = ye) {
  const { immediate: r, deep: i, once: o, scheduler: s, augmentJob: l, call: u } = n, v = ($) => i ? $ : /* @__PURE__ */ yt($) || i === !1 || i === 0 ? $t($, 1) : $t($);
  let m, T, P, z, ne = !1, B = !1;
  if (/* @__PURE__ */ Ke(e) ? (T = () => e.value, ne = /* @__PURE__ */ yt(e)) : /* @__PURE__ */ pn(e) ? (T = () => v(e), ne = !0) : Q(e) ? (B = !0, ne = e.some(($) => /* @__PURE__ */ pn($) || /* @__PURE__ */ yt($)), T = () => e.map(($) => {
    if (/* @__PURE__ */ Ke($))
      return $.value;
    if (/* @__PURE__ */ pn($))
      return v($);
    if (ie($))
      return u ? u($, 2) : $();
  })) : ie(e) ? t ? T = u ? () => u(e, 2) : e : T = () => {
    if (P) {
      zt();
      try {
        P();
      } finally {
        Bt();
      }
    }
    const $ = ln;
    ln = m;
    try {
      return u ? u(e, 3, [z]) : e(z);
    } finally {
      ln = $;
    }
  } : T = It, t && i) {
    const $ = T, ce = i === !0 ? 1 / 0 : i;
    T = () => $t($(), ce);
  }
  const re = ea(), q = () => {
    m.stop(), re && re.active && Fi(re.effects, m);
  };
  if (o && t) {
    const $ = t;
    t = (...ce) => {
      const Ce = $(...ce);
      return q(), Ce;
    };
  }
  let I = B ? new Array(e.length).fill(gr) : gr;
  const Z = ($) => {
    if (!(!(m.flags & 1) || !m.dirty && !$))
      if (t) {
        const ce = m.run();
        if ($ || i || ne || (B ? ce.some((Ce, xe) => kt(Ce, I[xe])) : kt(ce, I))) {
          P && P();
          const Ce = ln;
          ln = m;
          try {
            const xe = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              I === gr ? void 0 : B && I[0] === gr ? [] : I,
              z
            ];
            I = ce, u ? u(t, 3, xe) : (
              // @ts-expect-error
              t(...xe)
            );
          } finally {
            ln = Ce;
          }
        }
      } else
        m.run();
  };
  return l && l(Z), m = new Es(T), m.scheduler = s ? () => s(Z, !1) : Z, z = ($) => Aa($, !1, m), P = m.onStop = () => {
    const $ = wr.get(m);
    if ($) {
      if (u)
        u($, 4);
      else
        for (const ce of $) ce();
      wr.delete(m);
    }
  }, t ? r ? Z(!0) : I = m.run() : s ? s(Z.bind(null, !0), !0) : m.run(), q.pause = m.pause.bind(m), q.resume = m.resume.bind(m), q.stop = q, q;
}
function $t(e, t = 1 / 0, n) {
  if (t <= 0 || !be(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
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
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || ye;
  if (t) {
    let l = t.parent;
    const u = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const m = l.ec;
      if (m) {
        for (let T = 0; T < m.length; T++)
          if (m[T](e, u, v) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      zt(), lr(o, null, 10, [
        e,
        u,
        v
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
const et = [];
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
    Nt = -1, et.length = 0, Hs(), Rr = null, (et.length || Pn.length) && js();
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
function Fe(e, t) {
  if (bt === null)
    return e;
  const n = Kr(bt), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, l, u = ye] = t[i];
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
  if (tt) {
    let n = tt.provides;
    const r = tt.parent && tt.parent.provides;
    r === n && (n = tt.provides = Object.create(r)), n[e] = t;
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
function Vs(e, t, n = ye) {
  const { immediate: r, deep: i, flush: o, once: s } = n, l = Ge({}, n), u = t && r || !t && o !== "post";
  let v;
  if (or) {
    if (o === "sync") {
      const z = Ia();
      v = z.__watcherHandles || (z.__watcherHandles = []);
    } else if (!u) {
      const z = () => {
      };
      return z.stop = It, z.resume = It, z.pause = It, z;
    }
  }
  const m = tt;
  l.call = (z, ne, B) => St(z, m, ne, B);
  let T = !1;
  o === "post" ? l.scheduler = (z) => {
    at(z, m && m.suspense);
  } : o !== "sync" && (T = !0, l.scheduler = (z, ne) => {
    ne ? z() : Gi(z);
  }), l.augmentJob = (z) => {
    t && (z.flags |= 4), T && (z.flags |= 2, m && (z.id = m.uid, z.i = m));
  };
  const P = wa(e, t, l);
  return or && (v ? v.push(P) : u && P()), P;
}
function Da(e, t, n) {
  const r = this.proxy, i = Re(e) ? e.includes(".") ? zs(r, e) : () => r[e] : e.bind(r, r);
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
  const o = r.shapeFlag & 4 ? Kr(r.component) : r.el, s = i ? null : o, { i: l, r: u } = e, v = t && t.r, m = l.refs === ye ? l.refs = {} : l.refs, T = l.setupState, P = /* @__PURE__ */ he(T), z = T === ye ? ds : (B) => Eo(m, B) ? !1 : me(P, B), ne = (B, re) => !(re && Eo(m, re));
  if (v != null && v !== u) {
    if (To(t), Re(v))
      m[v] = null, z(v) && (T[v] = null);
    else if (/* @__PURE__ */ Ke(v)) {
      const B = t;
      ne(v, B.k) && (v.value = null), B.k && (m[B.k] = null);
    }
  }
  if (ie(u))
    lr(u, l, 12, [s, m]);
  else {
    const B = Re(u), re = /* @__PURE__ */ Ke(u);
    if (B || re) {
      const q = () => {
        if (e.f) {
          const I = B ? z(u) ? T[u] : m[u] : ne() || !e.k ? u.value : m[e.k];
          if (i)
            Q(I) && Fi(I, o);
          else if (Q(I))
            I.includes(o) || I.push(o);
          else if (B)
            m[u] = [o], z(u) && (T[u] = m[u]);
          else {
            const Z = [o];
            ne(u, e.k) && (u.value = Z), e.k && (m[e.k] = Z);
          }
        } else B ? (m[u] = s, z(u) && (T[u] = s)) : re && (ne(u, e.k) && (u.value = s), e.k && (m[e.k] = s));
      };
      if (s) {
        const I = () => {
          q(), Nr.delete(e);
        };
        I.id = -1, Nr.set(e, I), at(I, n);
      } else
        To(e), q();
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
function Br(e, t, n = tt, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      zt();
      const l = ar(n), u = St(t, n, e, s);
      return l(), Bt(), u;
    });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const Kt = (e) => (t, n = tt) => {
  (!or || e === "sp") && Br(e, (...r) => t(...r), n);
}, $a = Kt("bm"), Ks = Kt("m"), Va = Kt(
  "bu"
), za = Kt("u"), Gs = Kt(
  "bum"
), Ys = Kt("um"), Ba = Kt(
  "sp"
), Wa = Kt("rtg"), qa = Kt("rtc");
function Ka(e, t = tt) {
  Br("ec", e, t);
}
const Ga = /* @__PURE__ */ Symbol.for("v-ndc");
function Te(e, t, n, r) {
  let i;
  const o = n, s = Q(e);
  if (s || Re(e)) {
    const l = s && /* @__PURE__ */ pn(e);
    let u = !1, v = !1;
    l && (u = !/* @__PURE__ */ yt(e), v = /* @__PURE__ */ Wt(e), e = $r(e)), i = new Array(e.length);
    for (let m = 0, T = e.length; m < T; m++)
      i[m] = t(
        u ? v ? In(Tt(e[m])) : Tt(e[m]) : e[m],
        m,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o);
  } else if (be(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, u) => t(l, u, void 0, o)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let u = 0, v = l.length; u < v; u++) {
        const m = l[u];
        i[u] = t(e[m], m, u, o);
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
), ci = (e, t) => e !== ye && !e.__isScriptSetup && me(e, t), Ya = {
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
        if (i !== ye && me(i, t))
          return s[t] = 2, i[t];
        if (me(o, t))
          return s[t] = 3, o[t];
        if (n !== ye && me(n, t))
          return s[t] = 4, n[t];
        Pi && (s[t] = 0);
      }
    }
    const v = Qn[t];
    let m, T;
    if (v)
      return t === "$attrs" && qe(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (m = l.__cssModules) && (m = m[t])
    )
      return m;
    if (n !== ye && me(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      T = u.config.globalProperties, me(T, t)
    )
      return T[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return ci(i, t) ? (i[t] = n, !0) : r !== ye && me(r, t) ? (r[t] = n, !0) : me(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: o, type: s }
  }, l) {
    let u;
    return !!(n[l] || e !== ye && l[0] !== "$" && me(e, l) || ci(t, l) || me(o, l) || me(r, l) || me(Qn, l) || me(i.config.globalProperties, l) || (u = s.__cssModules) && u[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : me(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
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
    inject: v,
    // lifecycle
    created: m,
    beforeMount: T,
    mounted: P,
    beforeUpdate: z,
    updated: ne,
    activated: B,
    deactivated: re,
    beforeDestroy: q,
    beforeUnmount: I,
    destroyed: Z,
    unmounted: $,
    render: ce,
    renderTracked: Ce,
    renderTriggered: xe,
    errorCaptured: Ae,
    serverPrefetch: Ee,
    // public API
    expose: Oe,
    inheritAttrs: Ve,
    // assets
    components: nt,
    directives: ze,
    filters: Be
  } = t;
  if (v && Ja(v, r, null), s)
    for (const ae in s) {
      const oe = s[ae];
      ie(oe) && (r[ae] = oe.bind(n));
    }
  if (i) {
    const ae = i.call(n, n);
    be(ae) && (e.data = /* @__PURE__ */ un(ae));
  }
  if (Pi = !0, o)
    for (const ae in o) {
      const oe = o[ae], je = ie(oe) ? oe.bind(n, n) : ie(oe.get) ? oe.get.bind(n, n) : It, Me = !ie(oe) && ie(oe.set) ? oe.set.bind(n) : It, it = se({
        get: je,
        set: Me
      });
      Object.defineProperty(r, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => it.value,
        set: (Ne) => it.value = Ne
      });
    }
  if (l)
    for (const ae in l)
      Xs(l[ae], r, n, ae);
  if (u) {
    const ae = ie(u) ? u.call(n) : u;
    Reflect.ownKeys(ae).forEach((oe) => {
      La(oe, ae[oe]);
    });
  }
  m && Co(m, e, "c");
  function ve(ae, oe) {
    Q(oe) ? oe.forEach((je) => ae(je.bind(n))) : oe && ae(oe.bind(n));
  }
  if (ve($a, T), ve(Ks, P), ve(Va, z), ve(za, ne), ve(Fa, B), ve(Ha, re), ve(Ka, Ae), ve(qa, Ce), ve(Wa, xe), ve(Gs, I), ve(Ys, $), ve(Ba, Ee), Q(Oe))
    if (Oe.length) {
      const ae = e.exposed || (e.exposed = {});
      Oe.forEach((oe) => {
        Object.defineProperty(ae, oe, {
          get: () => n[oe],
          set: (je) => n[oe] = je,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === It && (e.render = ce), Ve != null && (e.inheritAttrs = Ve), nt && (e.components = nt), ze && (e.directives = ze), Ee && Ws(e);
}
function Ja(e, t, n = It) {
  Q(e) && (e = Li(e));
  for (const r in e) {
    const i = e[r];
    let o;
    be(i) ? "default" in i ? o = Cr(
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
  if (Re(e)) {
    const o = t[e];
    ie(o) && li(i, o);
  } else if (ie(e))
    li(i, e.bind(n));
  else if (be(e))
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
    (v) => Pr(u, v, s, !0)
  ), Pr(u, t, s)), be(t) && o.set(t, u), u;
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
function Qe(e, t) {
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
    ie(r) || (r = Ge({}, r)), i != null && !be(i) && (i = null);
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
      set config(m) {
      },
      use(m, ...T) {
        return s.has(m) || (m && ie(m.install) ? (s.add(m), m.install(v, ...T)) : ie(m) && (s.add(m), m(v, ...T))), v;
      },
      mixin(m) {
        return o.mixins.includes(m) || o.mixins.push(m), v;
      },
      component(m, T) {
        return T ? (o.components[m] = T, v) : o.components[m];
      },
      directive(m, T) {
        return T ? (o.directives[m] = T, v) : o.directives[m];
      },
      mount(m, T, P) {
        if (!u) {
          const z = v._ceVNode || Vt(r, i);
          return z.appContext = o, P === !0 ? P = "svg" : P === !1 && (P = void 0), e(z, m, P), u = !0, v._container = m, m.__vue_app__ = v, Kr(z.component);
        }
      },
      onUnmount(m) {
        l.push(m);
      },
      unmount() {
        u && (St(
          l,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(m, T) {
        return o.provides[m] = T, v;
      },
      runWithContext(m) {
        const T = Ln;
        Ln = v;
        try {
          return m();
        } finally {
          Ln = T;
        }
      }
    };
    return v;
  };
}
let Ln = null;
const rc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${vt(t)}Modifiers`] || e[`${bn(t)}Modifiers`];
function ic(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ye;
  let i = n;
  const o = t.startsWith("update:"), s = o && rc(r, t.slice(7));
  s && (s.trim && (i = n.map((m) => Re(m) ? m.trim() : m)), s.number && (i = i.map(Hr)));
  let l, u = r[l = ni(t)] || // also try camelCase event handler (#2249)
  r[l = ni(vt(t))];
  !u && o && (u = r[l = ni(bn(t))]), u && St(
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
  if (!ie(e)) {
    const u = (v) => {
      const m = Qs(v, t, !0);
      m && (l = !0, Ge(s, m));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !l ? (be(e) && r.set(e, null), null) : (Q(o) ? o.forEach((u) => s[u] = null) : Ge(s, o), be(e) && r.set(e, s), s);
}
function Wr(e, t) {
  return !e || !Mr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), me(e, t[0].toLowerCase() + t.slice(1)) || me(e, bn(t)) || me(e, t));
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
    renderCache: m,
    props: T,
    data: P,
    setupState: z,
    ctx: ne,
    inheritAttrs: B
  } = e, re = Or(e);
  let q, I;
  try {
    if (n.shapeFlag & 4) {
      const $ = i || r, ce = $;
      q = Lt(
        v.call(
          ce,
          $,
          m,
          T,
          z,
          P,
          ne
        )
      ), I = l;
    } else {
      const $ = t;
      q = Lt(
        $.length > 1 ? $(
          T,
          { attrs: l, slots: s, emit: u }
        ) : $(
          T,
          null
        )
      ), I = t.props ? l : sc(l);
    }
  } catch ($) {
    hn.length = 0, Vr($, e, 1), q = Vt(qt);
  }
  let Z = q;
  if (I && B !== !1) {
    const $ = Object.keys(I), { shapeFlag: ce } = Z;
    $.length && ce & 7 && (o && $.some(Ur) && (I = lc(
      I,
      o
    )), Z = Dn(Z, I, !1, !0));
  }
  if (n.dirs && (Z = Dn(Z, null, !1, !0), Z.dirs = Z.dirs ? Z.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const $ = zr(Z.type) && Bs(Z) || Z;
    Yi($, n.transition);
  }
  return q = Z, Or(re), q;
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
  const { props: r, children: i, component: o } = e, { props: s, children: l, patchFlag: u } = t, v = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return r ? Ro(r, s, v) : !!s;
    if (u & 8) {
      const m = t.dynamicProps;
      for (let T = 0; T < m.length; T++) {
        const P = m[T];
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
  return n === "style" && be(r) && be(i) ? !Qt(r, i) : r !== i;
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
  } = e, l = /* @__PURE__ */ he(i), [u] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const m = e.vnode.dynamicProps;
      for (let T = 0; T < m.length; T++) {
        let P = m[T];
        if (Wr(e.emitsOptions, P))
          continue;
        const z = t[P];
        if (u)
          if (me(o, P))
            z !== o[P] && (o[P] = z, v = !0);
          else {
            const ne = vt(P);
            i[ne] = ki(
              u,
              l,
              ne,
              z,
              e,
              !1
            );
          }
        else
          z !== o[P] && (o[P] = z, v = !0);
      }
    }
  } else {
    il(e, t, i, o) && (v = !0);
    let m;
    for (const T in l)
      (!t || // for camelCase
      !me(t, T) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = bn(T)) === T || !me(t, m))) && (u ? n && // for camelCase
      (n[T] !== void 0 || // for kebab-case
      n[m] !== void 0) && (i[T] = ki(
        u,
        l,
        T,
        void 0,
        e,
        !0
      )) : delete i[T]);
    if (o !== l)
      for (const T in o)
        (!t || !me(t, T)) && (delete o[T], v = !0);
  }
  v && jt(e.attrs, "set", "");
}
function il(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let u in t) {
      if (Gn(u))
        continue;
      const v = t[u];
      let m;
      i && me(i, m = vt(u)) ? !o || !o.includes(m) ? n[m] = v : (l || (l = {}))[m] = v : Wr(e.emitsOptions, u) || (!(u in r) || v !== r[u]) && (r[u] = v, s = !0);
    }
  if (o) {
    const u = /* @__PURE__ */ he(n), v = l || ye;
    for (let m = 0; m < o.length; m++) {
      const T = o[m];
      n[T] = ki(
        i,
        u,
        T,
        v[T],
        e,
        !me(v, T)
      );
    }
  }
  return s;
}
function ki(e, t, n, r, i, o) {
  const s = e[n];
  if (s != null) {
    const l = me(s, "default");
    if (l && r === void 0) {
      const u = s.default;
      if (s.type !== Function && !s.skipFactory && ie(u)) {
        const { propsDefaults: v } = i;
        if (n in v)
          r = v[n];
        else {
          const m = ar(i);
          r = v[n] = u.call(
            null,
            t
          ), m();
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
    const m = (T) => {
      u = !0;
      const [P, z] = ol(T, t, !0);
      Ge(s, P), z && l.push(...z);
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!o && !u)
    return be(e) && r.set(e, On), On;
  if (Q(o))
    for (let m = 0; m < o.length; m++) {
      const T = vt(o[m]);
      Oo(T) && (s[T] = ye);
    }
  else if (o)
    for (const m in o) {
      const T = vt(m);
      if (Oo(T)) {
        const P = o[m], z = s[T] = Q(P) || ie(P) ? { type: P } : Ge({}, P), ne = z.type;
        let B = !1, re = !0;
        if (Q(ne))
          for (let q = 0; q < ne.length; ++q) {
            const I = ne[q], Z = ie(I) && I.name;
            if (Z === "Boolean") {
              B = !0;
              break;
            } else Z === "String" && (re = !1);
          }
        else
          B = ie(ne) && ne.name === "Boolean";
        z[
          0
          /* shouldCast */
        ] = B, z[
          1
          /* shouldCastTrue */
        ] = re, (B || me(z, "default")) && l.push(T);
      }
    }
  const v = [s, l];
  return be(e) && r.set(e, v), v;
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
  let o = !0, s = ye;
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
  const n = jr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: o,
    createElement: s,
    createText: l,
    createComment: u,
    setText: v,
    setElementText: m,
    parentNode: T,
    nextSibling: P,
    setScopeId: z = It,
    insertStaticContent: ne
  } = e, B = (f, h, g, w = null, E = null, A = null, D = void 0, L = null, k = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !jn(f, h) && (w = ht(f), Ne(f, E, A, !0), f = null), h.patchFlag === -2 && (k = !1, h.dynamicChildren = null);
    const { type: x, ref: G, shapeFlag: j } = h;
    switch (x) {
      case qr:
        re(f, h, g, w);
        break;
      case qt:
        q(f, h, g, w);
        break;
      case fi:
        f == null && I(h, g, w, D);
        break;
      case le:
        nt(
          f,
          h,
          g,
          w,
          E,
          A,
          D,
          L,
          k
        );
        break;
      default:
        j & 1 ? ce(
          f,
          h,
          g,
          w,
          E,
          A,
          D,
          L,
          k
        ) : j & 6 ? ze(
          f,
          h,
          g,
          w,
          E,
          A,
          D,
          L,
          k
        ) : (j & 64 || j & 128) && x.process(
          f,
          h,
          g,
          w,
          E,
          A,
          D,
          L,
          k,
          Le
        );
    }
    G != null && E ? Jn(G, f && f.ref, A, h || f, !h) : G == null && f && f.ref != null && Jn(f.ref, null, A, f, !0);
  }, re = (f, h, g, w) => {
    if (f == null)
      r(
        h.el = l(h.children),
        g,
        w
      );
    else {
      const E = h.el = f.el;
      h.children !== f.children && v(E, h.children);
    }
  }, q = (f, h, g, w) => {
    f == null ? r(
      h.el = u(h.children || ""),
      g,
      w
    ) : h.el = f.el;
  }, I = (f, h, g, w) => {
    [f.el, f.anchor] = ne(
      f.children,
      h,
      g,
      w,
      f.el,
      f.anchor
    );
  }, Z = ({ el: f, anchor: h }, g, w) => {
    let E;
    for (; f && f !== h; )
      E = P(f), r(f, g, w), f = E;
    r(h, g, w);
  }, $ = ({ el: f, anchor: h }) => {
    let g;
    for (; f && f !== h; )
      g = P(f), i(f), f = g;
    i(h);
  }, ce = (f, h, g, w, E, A, D, L, k) => {
    if (h.type === "svg" ? D = "svg" : h.type === "math" && (D = "mathml"), f == null)
      Ce(
        h,
        g,
        w,
        E,
        A,
        D,
        L,
        k
      );
    else {
      const x = f.el && f.el._isVueCE ? f.el : null;
      try {
        x && x._beginPatch(), Ee(
          f,
          h,
          E,
          A,
          D,
          L,
          k
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, Ce = (f, h, g, w, E, A, D, L) => {
    let k, x;
    const { props: G, shapeFlag: j, transition: W, dirs: X } = f;
    if (k = f.el = s(
      f.type,
      A,
      G && G.is,
      G
    ), j & 8 ? m(k, f.children) : j & 16 && Ae(
      f.children,
      k,
      null,
      w,
      E,
      ui(f, A),
      D,
      L
    ), X && rn(f, null, w, "created"), xe(k, f, f.scopeId, D, w), G) {
      for (const N in G)
        N !== "value" && !Gn(N) && o(k, N, null, G[N], A, w);
      "value" in G && o(k, "value", null, G.value, A), (x = G.onVnodeBeforeMount) && Ot(x, w, f);
    }
    X && rn(f, null, w, "beforeMount");
    const R = gc(E, W);
    R && W.beforeEnter(k), r(k, h, g), ((x = G && G.onVnodeMounted) || R || X) && at(() => {
      x && Ot(x, w, f), R && W.enter(k), X && rn(f, null, w, "mounted");
    }, E);
  }, xe = (f, h, g, w, E) => {
    if (g && z(f, g), w)
      for (let A = 0; A < w.length; A++)
        z(f, w[A]);
    if (E) {
      let A = E.subTree;
      if (h === A || dl(A.type) && (A.ssContent === h || A.ssFallback === h)) {
        const D = E.vnode;
        xe(
          f,
          D,
          D.scopeId,
          D.slotScopeIds,
          E.parent
        );
      }
    }
  }, Ae = (f, h, g, w, E, A, D, L, k = 0) => {
    for (let x = k; x < f.length; x++) {
      const G = f[x] = L ? Ht(f[x]) : Lt(f[x]);
      B(
        null,
        G,
        h,
        g,
        w,
        E,
        A,
        D,
        L
      );
    }
  }, Ee = (f, h, g, w, E, A, D) => {
    const L = h.el = f.el;
    let { patchFlag: k, dynamicChildren: x, dirs: G } = h;
    k |= f.patchFlag & 16;
    const j = f.props || ye, W = h.props || ye;
    let X;
    if (g && on(g, !1), (X = W.onVnodeBeforeUpdate) && Ot(X, g, h, f), G && rn(h, f, g, "beforeUpdate"), g && on(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    x && (!f.dynamicChildren || f.dynamicChildren.length !== x.length) && (k = 0, D = !1, x = null), (j.innerHTML && W.innerHTML == null || j.textContent && W.textContent == null) && m(L, ""), x ? Oe(
      f.dynamicChildren,
      x,
      L,
      g,
      w,
      ui(h, E),
      A
    ) : D || oe(
      f,
      h,
      L,
      null,
      g,
      w,
      ui(h, E),
      A,
      !1
    ), k > 0) {
      if (k & 16)
        Ve(L, j, W, g, E);
      else if (k & 2 && j.class !== W.class && o(L, "class", null, W.class, E), k & 4 && o(L, "style", j.style, W.style, E), k & 8) {
        const R = h.dynamicProps;
        for (let N = 0; N < R.length; N++) {
          const U = R[N], J = j[U], C = W[U];
          (C !== J || U === "value") && o(L, U, J, C, E, g);
        }
      }
      k & 1 && f.children !== h.children && m(L, h.children);
    } else !D && x == null && Ve(L, j, W, g, E);
    ((X = W.onVnodeUpdated) || G) && at(() => {
      X && Ot(X, g, h, f), G && rn(h, f, g, "updated");
    }, w);
  }, Oe = (f, h, g, w, E, A, D) => {
    for (let L = 0; L < h.length; L++) {
      const k = f[L], x = h[L], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        k.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (k.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !jn(k, x) || // - In the case of a component, it could contain anything.
        k.shapeFlag & 198) ? T(k.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      B(
        k,
        x,
        G,
        null,
        w,
        E,
        A,
        D,
        !0
      );
    }
  }, Ve = (f, h, g, w, E) => {
    if (h !== g) {
      if (h !== ye)
        for (const A in h)
          !Gn(A) && !(A in g) && o(
            f,
            A,
            h[A],
            null,
            E,
            w
          );
      for (const A in g) {
        if (Gn(A)) continue;
        const D = g[A], L = h[A];
        D !== L && A !== "value" && o(f, A, L, D, E, w);
      }
      "value" in g && o(f, "value", h.value, g.value, E);
    }
  }, nt = (f, h, g, w, E, A, D, L, k) => {
    const x = h.el = f ? f.el : l(""), G = h.anchor = f ? f.anchor : l("");
    let { patchFlag: j, dynamicChildren: W, slotScopeIds: X } = h;
    X && (L = L ? L.concat(X) : X), f == null ? (r(x, g, w), r(G, g, w), Ae(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      g,
      G,
      E,
      A,
      D,
      L,
      k
    )) : j > 0 && j & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === W.length ? (Oe(
      f.dynamicChildren,
      W,
      g,
      E,
      A,
      D,
      L
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || E && h === E.subTree) && cl(
      f,
      h,
      !0
      /* shallow */
    )) : oe(
      f,
      h,
      g,
      G,
      E,
      A,
      D,
      L,
      k
    );
  }, ze = (f, h, g, w, E, A, D, L, k) => {
    h.slotScopeIds = L, f == null ? h.shapeFlag & 512 ? E.ctx.activate(
      h,
      g,
      w,
      D,
      k
    ) : Be(
      h,
      g,
      w,
      E,
      A,
      D,
      k
    ) : rt(f, h, k);
  }, Be = (f, h, g, w, E, A, D) => {
    const L = f.component = wc(
      f,
      w,
      E
    );
    if (Xi(f) && (L.ctx.renderer = Le), Oc(L, !1, D), L.asyncDep) {
      if (E && E.registerDep(L, ve, D), !f.el) {
        const k = L.subTree = Vt(qt);
        q(null, k, h, g), f.placeholder = k.el;
      }
    } else
      ve(
        L,
        f,
        h,
        g,
        E,
        A,
        D
      );
  }, rt = (f, h, g) => {
    const w = h.component = f.component;
    if (ac(f, h, g))
      if (w.asyncDep && !w.asyncResolved) {
        ae(w, h, g);
        return;
      } else
        w.next = h, w.update();
    else
      h.el = f.el, w.vnode = h;
  }, ve = (f, h, g, w, E, A, D) => {
    const L = () => {
      if (f.isMounted) {
        let { next: j, bu: W, u: X, parent: R, vnode: N } = f;
        {
          const d = ul(f);
          if (d) {
            j && (j.el = N.el, ae(f, j, D)), d.asyncDep.then(() => {
              at(() => {
                f.isUnmounted || x();
              }, E);
            });
            return;
          }
        }
        let U = j, J;
        on(f, !1), j ? (j.el = N.el, ae(f, j, D)) : j = N, W && Sr(W), (J = j.props && j.props.onVnodeBeforeUpdate) && Ot(J, R, j, N), on(f, !0);
        const C = wo(f), S = f.subTree;
        f.subTree = C, B(
          S,
          C,
          // parent may have changed if it's in a teleport
          T(S.el),
          // anchor may have changed if it's in a fragment
          ht(S),
          f,
          E,
          A
        ), j.el = C.el, U === null && cc(f, C.el), X && at(X, E), (J = j.props && j.props.onVnodeUpdated) && at(
          () => Ot(J, R, j, N),
          E
        );
      } else {
        let j;
        const { el: W, props: X } = h, { bm: R, m: N, parent: U, root: J, type: C } = f, S = Zn(h);
        on(f, !1), R && Sr(R), !S && (j = X && X.onVnodeBeforeMount) && Ot(j, U, h), on(f, !0);
        {
          J.ce && J.ce._hasShadowRoot() && J.ce._injectChildStyle(
            C,
            f.parent ? f.parent.type : void 0
          );
          const d = f.subTree = wo(f);
          B(
            null,
            d,
            g,
            w,
            f,
            E,
            A
          ), h.el = d.el;
        }
        if (N && at(N, E), !S && (j = X && X.onVnodeMounted)) {
          const d = h;
          at(
            () => Ot(j, U, d),
            E
          );
        }
        (h.shapeFlag & 256 || U && Zn(U.vnode) && U.vnode.shapeFlag & 256) && f.a && at(f.a, E), f.isMounted = !0, h = g = w = null;
      }
    };
    f.scope.on();
    const k = f.effect = new Es(L);
    f.scope.off();
    const x = f.update = k.run.bind(k), G = f.job = k.runIfDirty.bind(k);
    G.i = f, G.id = f.uid, k.scheduler = () => Gi(G), on(f, !0), x();
  }, ae = (f, h, g) => {
    h.component = f;
    const w = f.vnode.props;
    f.vnode = h, f.next = null, fc(f, h.props, w, g), mc(f, h.children, g), zt(), vo(f), Bt();
  }, oe = (f, h, g, w, E, A, D, L, k = !1) => {
    const x = f && f.children, G = f ? f.shapeFlag : 0, j = h.children, { patchFlag: W, shapeFlag: X } = h;
    if (W > 0) {
      if (W & 128) {
        Me(
          x,
          j,
          g,
          w,
          E,
          A,
          D,
          L,
          k
        );
        return;
      } else if (W & 256) {
        je(
          x,
          j,
          g,
          w,
          E,
          A,
          D,
          L,
          k
        );
        return;
      }
    }
    X & 8 ? (G & 16 && Ye(x, E, A), j !== x && m(g, j)) : G & 16 ? X & 16 ? Me(
      x,
      j,
      g,
      w,
      E,
      A,
      D,
      L,
      k
    ) : Ye(x, E, A, !0) : (G & 8 && m(g, ""), X & 16 && Ae(
      j,
      g,
      w,
      E,
      A,
      D,
      L,
      k
    ));
  }, je = (f, h, g, w, E, A, D, L, k) => {
    f = f || On, h = h || On;
    const x = f.length, G = h.length, j = Math.min(x, G);
    let W;
    for (W = 0; W < j; W++) {
      const X = h[W] = k ? Ht(h[W]) : Lt(h[W]);
      B(
        f[W],
        X,
        g,
        null,
        E,
        A,
        D,
        L,
        k
      );
    }
    x > G ? Ye(
      f,
      E,
      A,
      !0,
      !1,
      j
    ) : Ae(
      h,
      g,
      w,
      E,
      A,
      D,
      L,
      k,
      j
    );
  }, Me = (f, h, g, w, E, A, D, L, k) => {
    let x = 0;
    const G = h.length;
    let j = f.length - 1, W = G - 1;
    for (; x <= j && x <= W; ) {
      const X = f[x], R = h[x] = k ? Ht(h[x]) : Lt(h[x]);
      if (jn(X, R))
        B(
          X,
          R,
          g,
          null,
          E,
          A,
          D,
          L,
          k
        );
      else
        break;
      x++;
    }
    for (; x <= j && x <= W; ) {
      const X = f[j], R = h[W] = k ? Ht(h[W]) : Lt(h[W]);
      if (jn(X, R))
        B(
          X,
          R,
          g,
          null,
          E,
          A,
          D,
          L,
          k
        );
      else
        break;
      j--, W--;
    }
    if (x > j) {
      if (x <= W) {
        const X = W + 1, R = X < G ? h[X].el : w;
        for (; x <= W; )
          B(
            null,
            h[x] = k ? Ht(h[x]) : Lt(h[x]),
            g,
            R,
            E,
            A,
            D,
            L,
            k
          ), x++;
      }
    } else if (x > W)
      for (; x <= j; )
        Ne(f[x], E, A, !0), x++;
    else {
      const X = x, R = x, N = /* @__PURE__ */ new Map();
      for (x = R; x <= W; x++) {
        const fe = h[x] = k ? Ht(h[x]) : Lt(h[x]);
        fe.key != null && N.set(fe.key, x);
      }
      let U, J = 0;
      const C = W - R + 1;
      let S = !1, d = 0;
      const ee = new Array(C);
      for (x = 0; x < C; x++) ee[x] = 0;
      for (x = X; x <= j; x++) {
        const fe = f[x];
        if (J >= C) {
          Ne(fe, E, A, !0);
          continue;
        }
        let ke;
        if (fe.key != null)
          ke = N.get(fe.key);
        else
          for (U = R; U <= W; U++)
            if (ee[U - R] === 0 && jn(fe, h[U])) {
              ke = U;
              break;
            }
        ke === void 0 ? Ne(fe, E, A, !0) : (ee[ke - R] = x + 1, ke >= d ? d = ke : S = !0, B(
          fe,
          h[ke],
          g,
          null,
          E,
          A,
          D,
          L,
          k
        ), J++);
      }
      const Ue = S ? _c(ee) : On;
      for (U = Ue.length - 1, x = C - 1; x >= 0; x--) {
        const fe = R + x, ke = h[fe], Gt = h[fe + 1], Mt = fe + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Gt.el || fl(Gt)
        ) : w;
        ee[x] === 0 ? B(
          null,
          ke,
          g,
          Mt,
          E,
          A,
          D,
          L,
          k
        ) : S && (U < 0 || x !== Ue[U] ? it(ke, g, Mt, 2) : U--);
      }
    }
  }, it = (f, h, g, w, E = null) => {
    const { el: A, type: D, transition: L, children: k, shapeFlag: x } = f;
    if (x & 6) {
      it(f.component.subTree, h, g, w);
      return;
    }
    if (x & 128) {
      f.suspense.move(h, g, w);
      return;
    }
    if (x & 64) {
      D.move(f, h, g, Le);
      return;
    }
    if (D === le) {
      r(A, h, g);
      for (let j = 0; j < k.length; j++)
        it(k[j], h, g, w);
      r(f.anchor, h, g);
      return;
    }
    if (D === fi) {
      Z(f, h, g);
      return;
    }
    if (w !== 2 && x & 1 && L)
      if (w === 0)
        L.persisted && !A[ai] ? r(A, h, g) : (L.beforeEnter(A), r(A, h, g), at(() => L.enter(A), E));
      else {
        const { leave: j, delayLeave: W, afterLeave: X } = L, R = () => {
          f.ctx.isUnmounted ? i(A) : r(A, h, g);
        }, N = () => {
          const U = A._isLeaving || !!A[ai];
          A._isLeaving && A[ai](
            !0
            /* cancelled */
          ), L.persisted && !U ? R() : j(A, () => {
            R(), X && X();
          });
        };
        W ? W(A, R, N) : N();
      }
    else
      r(A, h, g);
  }, Ne = (f, h, g, w = !1, E = !1) => {
    const {
      type: A,
      props: D,
      ref: L,
      children: k,
      dynamicChildren: x,
      shapeFlag: G,
      patchFlag: j,
      dirs: W,
      cacheIndex: X,
      memo: R
    } = f;
    if (j === -2 && (E = !1), L != null && (zt(), Jn(L, null, g, f, !0), Bt()), X != null && (h.renderCache[X] = void 0), G & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const N = G & 1 && W, U = !Zn(f);
    let J;
    if (U && (J = D && D.onVnodeBeforeUnmount) && Ot(J, h, f), G & 6)
      ot(f.component, g, w);
    else {
      if (G & 128) {
        f.suspense.unmount(g, w);
        return;
      }
      N && rn(f, null, h, "beforeUnmount"), G & 64 ? f.type.remove(
        f,
        h,
        g,
        Le,
        w
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== le || j > 0 && j & 64) ? Ye(
        x,
        h,
        g,
        !1,
        !0
      ) : (A === le && j & 384 || !E && G & 16) && Ye(k, h, g), w && ut(f);
    }
    const C = R != null && X == null;
    (U && (J = D && D.onVnodeUnmounted) || N || C) && at(() => {
      J && Ot(J, h, f), N && rn(f, null, h, "unmounted"), C && (f.el = null);
    }, g);
  }, ut = (f) => {
    const { type: h, el: g, anchor: w, transition: E } = f;
    if (h === le) {
      ue(g, w);
      return;
    }
    if (h === fi) {
      $(f);
      return;
    }
    const A = () => {
      i(g), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (f.shapeFlag & 1 && E && !E.persisted) {
      const { leave: D, delayLeave: L } = E, k = () => D(g, A);
      L ? L(f.el, A, k) : k();
    } else
      A();
  }, ue = (f, h) => {
    let g;
    for (; f !== h; )
      g = P(f), i(f), f = g;
    i(h);
  }, ot = (f, h, g) => {
    const { bum: w, scope: E, job: A, subTree: D, um: L, m: k, a: x } = f;
    No(k), No(x), w && Sr(w), E.stop(), A && (A.flags |= 8, Ne(D, f, h, g)), L && at(L, h), at(() => {
      f.isUnmounted = !0;
    }, h);
  }, Ye = (f, h, g, w = !1, E = !1, A = 0) => {
    for (let D = A; D < f.length; D++)
      Ne(f[D], h, g, w, E);
  }, ht = (f) => {
    if (f.shapeFlag & 6)
      return ht(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const h = P(f.anchor || f.el), g = h && h[Ma];
    return g ? P(g) : h;
  };
  let Xe = !1;
  const gt = (f, h, g) => {
    let w;
    f == null ? h._vnode && (Ne(h._vnode, null, null, !0), w = h._vnode.component) : B(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      g
    ), h._vnode = f, Xe || (Xe = !0, vo(w), Hs(), Xe = !1);
  }, Le = {
    p: B,
    um: Ne,
    m: it,
    r: ut,
    mt: Be,
    mc: Ae,
    pc: oe,
    pbc: Oe,
    n: ht,
    o: e
  };
  return {
    render: gt,
    hydrate: void 0,
    createApp: nc(gt)
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
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Na(e);
}
const le = /* @__PURE__ */ Symbol.for("v-fgt"), qr = /* @__PURE__ */ Symbol.for("v-txt"), qt = /* @__PURE__ */ Symbol.for("v-cmt"), fi = /* @__PURE__ */ Symbol.for("v-stc"), hn = [];
let pt = null;
function F(e = !1) {
  hn.push(pt = e ? null : []);
}
function pl() {
  hn.pop(), pt = hn[hn.length - 1] || null;
}
let rr = 1;
function Po(e, t = !1) {
  rr += e, e < 0 && pt && t && (pt.hasOnce = !0);
}
function hl(e) {
  return e.dynamicChildren = rr > 0 ? pt || On : null, pl(), rr > 0 && pt && pt.push(e), e;
}
function H(e, t, n, r, i, o) {
  return hl(
    p(
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
}) => (typeof e == "number" && (e = "" + e), e != null ? Re(e) || /* @__PURE__ */ Ke(e) || ie(e) ? { i: bt, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, r = 0, i = null, o = e === le ? 0 : 1, s = !1, l = !1) {
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
  return l ? (Lr(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= Re(n) ? 8 : 16), rr > 0 && // avoid a block node from tracking itself
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
    const l = Dn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Lr(l, n), rr > 0 && !o && pt && (l.shapeFlag & 6 ? pt[pt.indexOf(e)] = l : pt.push(l)), l.patchFlag = -2, l;
  }
  if (kc(e) && (e = e.__vccOpts), t) {
    t = Sc(t);
    let { class: l, style: u } = t;
    l && !Re(l) && (t.class = Nn(l)), be(u) && (/* @__PURE__ */ Ki(u) && !Q(u) && (u = Ge({}, u)), t.style = ji(u));
  }
  const s = Re(e) ? 1 : dl(e) ? 128 : zr(e) ? 64 : be(e) ? 4 : ie(e) ? 2 : 0;
  return p(
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
  const { props: i, ref: o, patchFlag: s, children: l, transition: u } = e, v = t ? Cc(i || {}, t) : i, m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && bl(v),
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
    patchFlag: t && e.type !== le ? s === -1 ? 16 : s | 16 : s,
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
    m,
    u.clone(m)
  ), m;
}
function pe(e = " ", t = 0) {
  return Vt(qr, null, e, t);
}
function we(e = "", t = !1) {
  return t ? (F(), Ec(qt, null, e)) : Vt(qt, null, e);
}
function Lt(e) {
  return e == null || typeof e == "boolean" ? Vt(qt) : Q(e) ? Vt(
    le,
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
    t = String(t), r & 64 ? (n = 16, t = [pe(t)]) : n = 8;
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
    propsDefaults: ye,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: ye,
    data: ye,
    props: ye,
    attrs: ye,
    slots: ye,
    refs: ye,
    setupState: ye,
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
const Rc = () => tt || bt;
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
    (n) => tt = n
  ), ir = t(
    "__VUE_SSR_SETTERS__",
    (n) => or = n
  );
}
const ar = (e) => {
  const t = tt;
  return kr(e), e.scope.on(), () => {
    e.scope.off(), kr(t);
  };
}, Lo = () => {
  tt && tt.scope.off(), kr(null);
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
  ie(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : be(t) && (e.setupState = Ds(t)), gl(e);
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
  const r = e.style, i = Re(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (Re(t))
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
        !Re(t) && t ? t[s] : void 0,
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
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Re(r) && n === r;
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
      const v = o[t] = Qc(
        r,
        i
      );
      cn(e, l, v, u);
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
  t === "class" ? Hc(e, r, s) : t === "style" ? zc(e, n, r) : Mr(t) ? Ur(t) || Kc(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, r, s)) ? (jo(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ho(e, t, r, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (nu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Re(r))) ? jo(e, vt(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ho(e, t, r, s));
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
  return Vo(t) && Re(n) ? !1 : t in e;
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
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === u) || (e.value = u);
  }
}, Ze = {
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
          u === "string" || u === "number" ? s.selected = t.some((v) => String(v) === String(l)) : s.selected = Zl(t, l) > -1;
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
  return Re(e) ? document.querySelector(e) : e;
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
    } catch (m) {
      v = !0, i = m;
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
let De = Object.freeze, He = Object.seal, Rn = Object.create, El = typeof Reflect < "u" && Reflect, Di = El.apply, Mi = El.construct;
De || (De = function(t) {
  return t;
});
He || (He = function(t) {
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
const an = Ie(Array.prototype.forEach), Eu = Ie(Array.prototype.lastIndexOf), Go = Ie(Array.prototype.pop), $n = Ie(Array.prototype.push), Tu = Ie(Array.prototype.splice), kn = Array.isArray, Kn = Ie(String.prototype.toLowerCase), bi = Ie(String.prototype.toString), Yo = Ie(String.prototype.match), Vn = Ie(String.prototype.replace), Xo = Ie(String.prototype.indexOf), Su = Ie(String.prototype.trim), Cu = Ie(Number.prototype.toString), xu = Ie(Boolean.prototype.toString), Jo = typeof BigInt > "u" ? null : Ie(BigInt.prototype.toString), Zo = typeof Symbol > "u" ? null : Ie(Symbol.prototype.toString), ct = Ie(Object.prototype.hasOwnProperty), zn = Ie(Object.prototype.toString), We = Ie(RegExp.prototype.test), sn = Au(TypeError);
function Ie(e) {
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
    ct(e, t) || (e[t] = null);
  return e;
}
function dt(e) {
  const t = Rn(null);
  for (const r of vl(e)) {
    var n = bu(r, 2);
    const i = n[0], o = n[1];
    ct(e, i) && (kn(o) ? t[i] = wu(o) : o && typeof o == "object" && o.constructor === Object ? t[i] = dt(o) : t[i] = o);
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
        return Ie(r.get);
      if (typeof r.value == "function")
        return Ie(r.value);
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
const Qo = De(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), yi = De(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), gi = De(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Nu = De(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), _i = De(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Pu = De(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), es = De(["#text"]), ts = De(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), vi = De(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ns = De(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Tr = De(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Lu = He(/{{[\w\W]*|^[\w\W]*}}/g), ku = He(/<%[\w\W]*|^[\w\W]*%>/g), Iu = He(/\${[\w\W]*/g), Du = He(/^data-[\-\w.\u00B7-\uFFFF]+$/), Mu = He(/^aria-[\-\w]+$/), rs = He(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Uu = He(/^(?:\w+script|data):/i), Fu = He(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = He(/^html$/i), ju = He(/^[a-z][.\w]*(-[.\w]+)+$/i), is = He(/<[/\w!]/g), os = He(/<[/\w]/g), $u = He(/<\/no(script|embed|frames)/i), Vu = He(/\/>/i), ft = {
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
    e[t] = He(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
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
  return ct(t, n) && kn(t[n]) ? de(i.base ? dt(i.base) : {}, t[n], i.transform) : r;
}, Ei = function(t, n, r) {
  const i = ct(t, n) ? t[n] : void 0;
  return i && typeof i == "object" ? dt(i) : r();
};
function Sl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wu();
  const t = (M) => Sl(M);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== ft.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const o = e.HTMLTemplateElement, s = e.Node, l = e.Element, u = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const m = e.DOMParser, T = e.trustedTypes, P = l.prototype, z = _t(P, "cloneNode"), ne = _t(P, "remove"), B = _t(P, "nextSibling"), re = _t(P, "childNodes"), q = _t(P, "parentNode"), I = _t(P, "shadowRoot"), Z = _t(P, "attributes"), $ = s && s.prototype ? _t(s.prototype, "nodeType") : null, ce = s && s.prototype ? _t(s.prototype, "nodeName") : null, Ce = s && s.prototype ? _t(s.prototype, "ownerDocument") : null, xe = function(a) {
    return $ ? $(a) : a.nodeType;
  }, Ae = function(a) {
    return ce ? ce(a) : a.nodeName;
  };
  if (typeof o == "function") {
    const M = n.createElement("template");
    M.content && M.content.ownerDocument && (n = M.content.ownerDocument);
  }
  let Ee, Oe = "", Ve, nt = !1, ze = 0;
  const Be = function() {
    if (ze > 0)
      throw sn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, rt = function(a) {
    Be(), ze++;
    try {
      return Ee.createHTML(a);
    } finally {
      ze--;
    }
  }, ve = function(a) {
    Be(), ze++;
    try {
      return Ee.createScriptURL(a);
    } finally {
      ze--;
    }
  }, ae = function() {
    return nt || (Ve = qu(T, i), nt = !0), Ve;
  }, oe = n, je = oe.implementation, Me = oe.createNodeIterator, it = oe.createDocumentFragment, Ne = oe.getElementsByTagName, ut = r.importNode;
  let ue = ss();
  t.isSupported = typeof vl == "function" && typeof q == "function" && je && je.createHTMLDocument !== void 0;
  const ot = Lu, Ye = ku, ht = Iu, Xe = Du, gt = Mu, Le = Uu, mt = Fu, f = ju;
  let h = rs, g = null;
  const w = de({}, [...Qo, ...yi, ...gi, ..._i, ...es]);
  let E = null;
  const A = de({}, [...ts, ...vi, ...ns, ...Tr]);
  let D = Object.seal(Rn(null, {
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
  })), L = null, k = null;
  const x = Object.seal(Rn(null, {
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
  let G = !0, j = !0, W = !1, X = !0, R = !1, N = !0, U = !1, J = !1, C = null, S = null, d = !1, ee = !1, Ue = !1, fe = !1, ke = !0, Gt = !1;
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
  let Pe = null, Tn = null;
  const Ol = n.createElement("form"), to = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, Zr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Tn && Tn === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = dt(a), Un = // eslint-disable-next-line unicorn/prefer-includes
    wl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? Rl : a.PARSER_MEDIA_TYPE, Pe = Un === "application/xhtml+xml" ? bi : Kn, g = Xt(a, "ALLOWED_TAGS", w, {
      transform: Pe
    }), E = Xt(a, "ALLOWED_ATTR", A, {
      transform: Pe
    }), Yr = Xt(a, "ALLOWED_NAMESPACES", xl, {
      transform: bi
    }), cr = Xt(a, "ADD_URI_SAFE_ATTR", vn, {
      transform: Pe,
      base: vn
    }), _n = Xt(a, "ADD_DATA_URI_TAGS", At, {
      transform: Pe,
      base: At
    }), xt = Xt(a, "FORBID_CONTENTS", gn, {
      transform: Pe
    }), L = Xt(a, "FORBID_TAGS", dt({}), {
      transform: Pe
    }), k = Xt(a, "FORBID_ATTR", dt({}), {
      transform: Pe
    }), Ct = ct(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? dt(a.USE_PROFILES) : a.USE_PROFILES : !1, G = a.ALLOW_ARIA_ATTR !== !1, j = a.ALLOW_DATA_ATTR !== !1, W = a.ALLOW_UNKNOWN_PROTOCOLS || !1, X = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, R = a.SAFE_FOR_TEMPLATES || !1, N = a.SAFE_FOR_XML !== !1, U = a.WHOLE_DOCUMENT || !1, ee = a.RETURN_DOM || !1, Ue = a.RETURN_DOM_FRAGMENT || !1, fe = a.RETURN_TRUSTED_TYPE || !1, d = a.FORCE_BODY || !1, ke = a.SANITIZE_DOM !== !1, Gt = a.SANITIZE_NAMED_PROPS || !1, Mn = a.KEEP_CONTENT !== !1, yn = a.IN_PLACE || !1, h = Ou(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : rs, En = typeof a.NAMESPACE == "string" ? a.NAMESPACE : wt, Xr = Ei(
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
    if (D = Rn(null), ct(y, "tagNameCheck") && to(y.tagNameCheck) && (D.tagNameCheck = y.tagNameCheck), ct(y, "attributeNameCheck") && to(y.attributeNameCheck) && (D.attributeNameCheck = y.attributeNameCheck), ct(y, "allowCustomizedBuiltInElements") && typeof y.allowCustomizedBuiltInElements == "boolean" && (D.allowCustomizedBuiltInElements = y.allowCustomizedBuiltInElements), He(D), R && (j = !1), Ue && (ee = !0), Ct && (g = de({}, es), E = Rn(null), Ct.html === !0 && (de(g, Qo), de(E, ts)), Ct.svg === !0 && (de(g, yi), de(E, vi), de(E, Tr)), Ct.svgFilters === !0 && (de(g, gi), de(E, vi), de(E, Tr)), Ct.mathMl === !0 && (de(g, _i), de(E, ns), de(E, Tr))), x.tagCheck = null, x.attributeCheck = null, ct(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? x.tagCheck = a.ADD_TAGS : kn(a.ADD_TAGS) && (g === w && (g = dt(g)), de(g, a.ADD_TAGS, Pe))), ct(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? x.attributeCheck = a.ADD_ATTR : kn(a.ADD_ATTR) && (E === A && (E = dt(E)), de(E, a.ADD_ATTR, Pe))), ct(a, "ADD_FORBID_CONTENTS") && kn(a.ADD_FORBID_CONTENTS) && (xt === gn && (xt = dt(xt)), de(xt, a.ADD_FORBID_CONTENTS, Pe)), Mn && (g["#text"] = !0), U && de(g, ["html", "head", "body"]), g.table && (de(g, ["tbody"]), delete L.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw sn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw sn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const O = Ee;
      Ee = a.TRUSTED_TYPES_POLICY;
      try {
        Oe = rt("");
      } catch (V) {
        throw Ee = O, V;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (Ee = void 0, Oe = "") : (Ee === void 0 && (Ee = ae()), Ee && typeof Oe == "string" && (Oe = rt("")));
    De && De(a), Tn = a;
  }, no = de({}, [...yi, ...gi, ...Nu]), ro = de({}, [..._i, ...Pu]), Nl = function(a, y, O) {
    return y.namespaceURI === wt ? a === "svg" : y.namespaceURI === en ? a === "svg" && (O === "annotation-xml" || Xr[O]) : !!no[a];
  }, Pl = function(a, y, O) {
    return y.namespaceURI === wt ? a === "math" : y.namespaceURI === tn ? a === "math" && Jr[O] : !!ro[a];
  }, Ll = function(a, y, O) {
    return y.namespaceURI === tn && !Jr[O] || y.namespaceURI === en && !Xr[O] ? !1 : !ro[a] && (Al[a] || !no[a]);
  }, kl = function(a) {
    let y = q(a);
    (!y || !y.tagName) && (y = {
      namespaceURI: En,
      tagName: "template"
    });
    const O = Kn(a.tagName), V = Kn(y.tagName);
    return Yr[a.namespaceURI] ? a.namespaceURI === tn ? Nl(O, y, V) : a.namespaceURI === en ? Pl(O, y, V) : a.namespaceURI === wt ? Ll(O, y, V) : !!(Un === "application/xhtml+xml" && Yr[a.namespaceURI]) : !1;
  }, Yt = function(a) {
    $n(t.removed, {
      element: a
    });
    try {
      q(a).removeChild(a);
    } catch {
      if (ne(a), !q(a))
        throw sn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, io = function(a, y, O) {
    try {
      a.removeAttributeNode(y);
    } catch {
      try {
        a.removeAttribute(O);
      } catch {
      }
    }
  }, ur = function(a) {
    fr(a);
    const y = re(a);
    if (y) {
      const V = [];
      an(y, (Y) => {
        $n(V, Y);
      }), an(V, (Y) => {
        try {
          ne(Y);
        } catch {
        }
      });
    }
    const O = Z(a);
    if (O)
      for (let V = O.length - 1; V >= 0; --V) {
        const Y = O[V], te = Y && Y.name;
        typeof te == "string" && io(a, Y, te);
      }
  }, nn = function(a, y, O) {
    if (!O)
      try {
        O = y.getAttributeNode(a);
      } catch {
        O = null;
      }
    $n(t.removed, {
      attribute: O || null,
      from: y
    });
    try {
      O ? y.removeAttributeNode(O) : y.removeAttribute(a);
    } catch {
      try {
        y.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (ee || Ue)
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
    const y = Z(a);
    if (y)
      for (let O = y.length - 1; O >= 0; --O) {
        const V = y[O], Y = V && V.name;
        typeof Y != "string" || E[Pe(Y)] || io(a, V, Y);
      }
  }, fr = function(a) {
    const y = [a];
    for (; y.length > 0; ) {
      const O = y.pop();
      xe(O) === ft.element && Il(O);
      const Y = re(O);
      if (Y)
        for (let te = Y.length - 1; te >= 0; --te)
          y.push(Y[te]);
    }
  }, oo = function(a, y) {
    return N ? a === "patchsrc" ? !0 : a === "for" && y !== "label" && y !== "output" : !1;
  }, Dl = function(a) {
    if (!N)
      return;
    const y = [a];
    for (; y.length > 0; ) {
      const O = y.pop(), V = xe(O);
      if (V === ft.processingInstruction || V === ft.comment && We(os, O.data)) {
        try {
          ne(O);
        } catch {
        }
        continue;
      }
      if (V === ft.element) {
        const te = O, ge = Pe(Ae(O));
        try {
          te.hasAttribute && te.hasAttribute("patchsrc") && te.removeAttribute("patchsrc"), te.hasAttribute && te.hasAttribute("for") && oo("for", ge) && te.removeAttribute("for");
        } catch {
        }
      }
      const Y = re(O);
      if (Y)
        for (let te = Y.length - 1; te >= 0; --te)
          y.push(Y[te]);
    }
  }, so = function(a) {
    let y = null, O = null;
    if (d)
      a = "<remove></remove>" + a;
    else {
      const te = Yo(a, /^[\r\n\t ]+/);
      O = te && te[0];
    }
    Un === "application/xhtml+xml" && En === wt && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const V = Ee ? rt(a) : a;
    if (En === wt)
      try {
        y = new m().parseFromString(V, Un);
      } catch {
      }
    if (!y || !y.documentElement) {
      y = je.createDocument(En, "template", null);
      try {
        y.documentElement.innerHTML = Gr ? Oe : V;
      } catch {
      }
    }
    const Y = y.body || y.documentElement;
    return a && O && Y.insertBefore(n.createTextNode(O), Y.childNodes[0] || null), En === wt ? Ne.call(y, U ? "html" : "body")[0] : U ? y.documentElement : Y;
  }, lo = function(a) {
    const y = Ce ? Ce(a) : a.ownerDocument;
    return Me.call(
      y || a,
      a,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, dr = function(a) {
    return a = Vn(a, ot, " "), a = Vn(a, Ye, " "), a = Vn(a, ht, " "), a;
  }, Qr = function(a) {
    var y;
    a.normalize();
    const O = Ce ? Ce(a) : a.ownerDocument, V = Me.call(
      O || a,
      a,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Y = V.nextNode();
    for (; Y; )
      Y.data = dr(Y.data), Y = V.nextNode();
    const te = (y = a.querySelectorAll) === null || y === void 0 ? void 0 : y.call(a, "template");
    te && an(te, (ge) => {
      Sn(ge.content) && Qr(ge.content);
    });
  }, pr = function(a) {
    const y = ce ? ce(a) : null;
    return typeof y != "string" || Pe(y) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== Z(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
      return $(a) === ft.documentFragment;
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
    M.length !== 0 && an(M, (O) => {
      O.call(t, a, y, Tn);
    });
  }
  const Ml = function(a, y) {
    return !!(N && a.hasChildNodes() && !Fn(a.firstElementChild) && We(is, a.textContent) && We(is, a.innerHTML) || N && a.namespaceURI === wt && zu[y] && (Fn(a.firstElementChild) || typeof a.textContent == "string" && We(Bu[y], a.textContent)) || a.nodeType === ft.processingInstruction || N && a.nodeType === ft.comment && We(os, a.data));
  }, hr = function(a, y) {
    if (a instanceof RegExp)
      return We(a, y);
    if (a instanceof Function) {
      for (var O = arguments.length, V = new Array(O > 2 ? O - 2 : 0), Y = 2; Y < O; Y++)
        V[Y - 2] = arguments[Y];
      return !!a(y, ...V);
    }
    return !1;
  }, Ul = function(a, y, O) {
    if (!L[y] && po(y) && hr(D.tagNameCheck, y))
      return !1;
    if (Mn && !xt[y]) {
      const V = q(a), Y = re(a);
      if (Y && V) {
        const te = Y.length;
        for (let ge = te - 1; ge >= 0; --ge) {
          const Se = a === O ? z(Y[ge], !0) : Y[ge];
          V.insertBefore(Se, B(a));
        }
      }
    }
    return Yt(a), !0;
  }, ao = function(a, y, O, V) {
    return a.length === 0 ? y : y === O || y === V ? dt(y) : y;
  }, co = function(a, y) {
    return a === y || q(a) !== null ? !1 : (yn && fr(a), !0);
  }, uo = function(a, y) {
    if (Rt(ue.beforeSanitizeElements, a, null), co(a, y))
      return !0;
    if (pr(a))
      return Yt(a), !0;
    const O = Pe(Ae(a));
    if (g = ao(ue.uponSanitizeElement, g, w, C), Rt(ue.uponSanitizeElement, a, {
      tagName: O,
      allowedTags: g
    }), co(a, y))
      return !0;
    if (Ml(a, O))
      return Yt(a), !0;
    if (L[O] || !(x.tagCheck instanceof Function && x.tagCheck(O)) && !g[O]) {
      const Y = Ul(a, O, y);
      return Y === !1 && Rt(ue.afterSanitizeElements, a, null), Y;
    }
    if (xe(a) === ft.element && !kl(a) || (O === "noscript" || O === "noembed" || O === "noframes") && We($u, a.innerHTML))
      return Yt(a), !0;
    if (R && a.nodeType === ft.text) {
      const Y = dr(a.textContent);
      a.textContent !== Y && ($n(t.removed, {
        element: a.cloneNode()
      }), a.textContent = Y);
    }
    return Rt(ue.afterSanitizeElements, a, null), !1;
  }, fo = function(a, y, O) {
    if (k[y] || oo(y, a) || ke && (y === "id" || y === "name") && (O in n || O in Ol))
      return !1;
    const V = E[y] || x.attributeCheck instanceof Function && x.attributeCheck(y, a);
    return j && We(Xe, y) || G && We(gt, y) ? !0 : V ? cr[y] || We(h, Vn(O, mt, "")) || (y === "src" || y === "xlink:href" || y === "href") && a !== "script" && Xo(O, "data:") === 0 && _n[a] || W && !We(Le, Vn(O, mt, "")) ? !0 : !O : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      po(a) && hr(D.tagNameCheck, a) && hr(D.attributeNameCheck, y, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      y === "is" && D.allowCustomizedBuiltInElements && hr(D.tagNameCheck, O)
    );
  }, Fl = de({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), po = function(a) {
    return !Fl[Kn(a)] && We(f, a);
  }, Hl = function(a, y, O, V) {
    if (Ee && typeof T == "object" && typeof T.getAttributeType == "function" && !O)
      switch (T.getAttributeType(a, y)) {
        case "TrustedHTML":
          return rt(V);
        case "TrustedScriptURL":
          return ve(V);
      }
    return V;
  }, jl = function(a, y, O, V) {
    try {
      O ? a.setAttributeNS(O, y, V) : a.setAttribute(y, V), pr(a) ? Yt(a) : Go(t.removed);
    } catch {
      nn(y, a);
    }
  }, ho = function(a) {
    Rt(ue.beforeSanitizeAttributes, a, null);
    const y = a.attributes;
    if (!y || pr(a))
      return;
    E = ao(ue.uponSanitizeAttribute, E, A, S);
    const O = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: E,
      forceKeepAttr: void 0
    };
    let V = y.length;
    const Y = Pe(a.nodeName);
    for (; V--; ) {
      const te = y[V], ge = te.name, Se = te.namespaceURI, st = te.value, lt = Pe(ge), ti = st;
      let Je = ge === "value" ? ti : Su(ti);
      if (O.attrName = lt, O.attrValue = Je, O.keepAttr = !0, O.forceKeepAttr = void 0, Rt(ue.uponSanitizeAttribute, a, O), Je = O.attrValue, Gt && (lt === "id" || lt === "name") && Xo(Je, Mt) !== 0 && (nn(ge, a, te), Je = Mt + Je), N && We(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Je)) {
        nn(ge, a, te);
        continue;
      }
      if (lt === "attributename" && Yo(Je, "href")) {
        nn(ge, a, te);
        continue;
      }
      if (!O.forceKeepAttr) {
        if (!O.keepAttr) {
          nn(ge, a, te);
          continue;
        }
        if (!X && We(Vu, Je)) {
          nn(ge, a, te);
          continue;
        }
        if (R && (Je = dr(Je)), !fo(Y, lt, Je)) {
          nn(ge, a, te);
          continue;
        }
        Je = Hl(Y, lt, Se, Je), Je !== ti && jl(a, ge, Se, Je);
      }
    }
    Rt(ue.afterSanitizeAttributes, a, null);
  }, mr = function(a) {
    let y = null;
    const O = lo(a);
    for (Rt(ue.beforeSanitizeShadowDOM, a, null); y = O.nextNode(); )
      if (Rt(ue.uponSanitizeShadowNode, y, null), uo(y, a), ho(y), Sn(y.content) && mr(y.content), xe(y) === ft.element) {
        const V = I(y);
        Sn(V) && (ei(V), mr(V));
      }
    Rt(ue.afterSanitizeShadowDOM, a, null);
  }, ei = function(a) {
    const y = [{
      node: a,
      shadow: null
    }];
    for (; y.length > 0; ) {
      const O = y.pop();
      if (O.shadow) {
        mr(O.shadow);
        continue;
      }
      const V = O.node, te = xe(V) === ft.element, ge = re(V);
      if (ge)
        for (let Se = ge.length - 1; Se >= 0; --Se)
          y.push({
            node: ge[Se],
            shadow: null
          });
      if (te) {
        const Se = ce ? ce(V) : null;
        if (typeof Se == "string" && Pe(Se) === "template") {
          const st = V.content;
          Sn(st) && y.push({
            node: st,
            shadow: null
          });
        }
      }
      if (te) {
        const Se = I(V);
        Sn(Se) && y.push({
          node: null,
          shadow: Se
        }, {
          node: Se,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(M) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = null, O = null, V = null, Y = null;
    if (Gr = !M, Gr && (M = "<!-->"), typeof M != "string" && !Fn(M) && (M = Ru(M), typeof M != "string"))
      throw sn("dirty is not a string, aborting");
    if (!t.isSupported)
      return M;
    J ? (g = C, E = S) : Zr(a), (ue.uponSanitizeElement.length > 0 || ue.uponSanitizeAttribute.length > 0) && (g = dt(g)), ue.uponSanitizeAttribute.length > 0 && (E = dt(E)), t.removed = [];
    const te = yn && typeof M != "string" && Fn(M);
    if (te) {
      Dl(M);
      const st = Ae(M);
      if (typeof st == "string") {
        const lt = Pe(st);
        if (!g[lt] || L[lt])
          throw ur(M), sn("root node is forbidden and cannot be sanitized in-place");
      }
      if (pr(M))
        throw ur(M), sn("root node is clobbered and cannot be sanitized in-place");
      try {
        ei(M);
      } catch (lt) {
        throw ur(M), lt;
      }
    } else if (Fn(M))
      y = so("<!---->"), O = y.ownerDocument.importNode(M, !0), O.nodeType === ft.element && O.nodeName === "BODY" || O.nodeName === "HTML" ? y = O : y.appendChild(O), ei(O);
    else {
      if (!ee && !R && !U && // eslint-disable-next-line unicorn/prefer-includes
      M.indexOf("<") === -1)
        return Ee && fe ? rt(M) : M;
      if (y = so(M), !y)
        return ee ? null : fe ? Oe : "";
    }
    y && d && Yt(y.firstChild);
    const ge = te ? M : y;
    try {
      const st = lo(ge);
      for (; V = st.nextNode(); )
        uo(V, ge), ho(V), Sn(V.content) && mr(V.content);
    } catch (st) {
      throw te && (ur(M), an(t.removed, (lt) => {
        lt.element && fr(lt.element);
      })), st;
    }
    if (te)
      return an(t.removed, (st) => {
        st.element && fr(st.element);
      }), R && Qr(M), M;
    if (ee) {
      if (R && Qr(y), Ue)
        for (Y = it.call(y.ownerDocument); y.firstChild; )
          Y.appendChild(y.firstChild);
      else
        Y = y;
      return (E.shadowroot || E.shadowrootmode) && (Y = ut.call(r, Y, !0)), Y;
    }
    let Se = U ? y.outerHTML : y.innerHTML;
    return U && g["!doctype"] && y.ownerDocument && y.ownerDocument.doctype && y.ownerDocument.doctype.name && We(Hu, y.ownerDocument.doctype.name) && (Se = "<!DOCTYPE " + y.ownerDocument.doctype.name + `>
` + Se), R && (Se = dr(Se)), Ee && fe ? rt(Se) : Se;
  }, t.setConfig = function() {
    let M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zr(M), J = !0, C = g, S = E;
  }, t.clearConfig = function() {
    Tn = null, J = !1, C = null, S = null, Ee = Ve, Oe = "";
  }, t.isValidAttribute = function(M, a, y) {
    Tn || Zr({});
    const O = Pe(M), V = Pe(a);
    return fo(O, V, y);
  }, t.addHook = function(M, a) {
    typeof a == "function" && ct(ue, M) && $n(ue[M], a);
  }, t.removeHook = function(M, a) {
    if (ct(ue, M)) {
      if (a !== void 0) {
        const y = Eu(ue[M], a);
        return y === -1 ? void 0 : Tu(ue[M], y, 1)[0];
      }
      return Go(ue[M]);
    }
  }, t.removeHooks = function(M) {
    ct(ue, M) && (ue[M] = []);
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
  }, u = (B) => B, v = (l.sanitize ? Ku.sanitize : u) || u, m = l.escape ? as : u, T = (B) => typeof B == "string" || typeof B == "number", P = (B, re, q) => B.replace(/%n/g, "" + q).replace(/{([^{}]*)}/g, (I, Z) => {
    if (re === void 0 || !(Z in re))
      return m(I);
    const $ = re[Z];
    return T($) ? m(`${$}`) : typeof $ == "object" && T($.value) ? ($.escape !== !1 ? as : u)(`${$.value}`) : m(I);
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
}, ef = { class: "library-catalogue-header" }, tf = { id: "library-catalogue-heading" }, nf = { class: "library-muted" }, rf = ["aria-label"], of = ["href"], sf = ["href"], lf = ["href"], af = ["href"], cf = ["aria-label"], uf = ["name", "value"], ff = { class: "library-quick-filter-search" }, df = { value: "title" }, pf = { value: "recent" }, hf = { value: "publicationDate" }, mf = { value: "publication" }, bf = { value: "lastOpened" }, yf = { value: "format" }, gf = { value: "" }, _f = { value: "1" }, vf = ["value"], Ef = ["value"], Tf = ["aria-label"], Sf = ["aria-label"], Cf = { class: "library-filter-panel" }, xf = { class: "library-filter-panel-summary" }, Af = ["aria-label"], wf = { value: "" }, Rf = ["value"], Of = { value: "" }, Nf = ["value"], Pf = { value: "" }, Lf = ["value"], kf = { value: "" }, If = ["value"], Df = { value: "" }, Mf = ["value"], Uf = { value: "" }, Ff = ["value"], Hf = { value: "" }, jf = ["value"], $f = { value: "" }, Vf = ["value"], zf = { value: "" }, Bf = ["value"], Wf = { value: "" }, qf = ["value"], Kf = { value: "" }, Gf = { value: "1" }, Yf = { value: "" }, Xf = { value: "1" }, Jf = { value: "title" }, Zf = { value: "recent" }, Qf = { value: "publicationDate" }, ed = { value: "publication" }, td = { value: "lastOpened" }, nd = { value: "format" }, rd = ["value"], id = ["value"], od = ["aria-label"], sd = ["aria-label"], ld = ["href"], ad = {
  key: 0,
  class: "library-discovery-header",
  "aria-labelledby": "library-discovery-heading"
}, cd = { class: "library-muted" }, ud = { id: "library-discovery-heading" }, fd = { class: "library-muted" }, dd = {
  href: "/apps/library/",
  class: "button secondary"
}, pd = { class: "library-muted library-filter-result-summary" }, hd = { key: 0 }, md = { href: "?" }, bd = { class: "library-batch-actions" }, yd = { class: "library-settings-count-badge" }, gd = ["action"], _d = ["value"], vd = ["name", "value"], Ed = ["placeholder"], Td = {
  type: "submit",
  class: "button primary"
}, Sd = { class: "library-muted" }, Cd = ["action"], xd = ["value"], Ad = ["name", "value"], wd = ["placeholder"], Rd = {
  type: "submit",
  class: "button secondary"
}, Od = { class: "library-muted" }, Nd = ["action"], Pd = ["value"], Ld = ["name", "value"], kd = {
  type: "submit",
  class: "button secondary"
}, Id = { class: "library-muted" }, Dd = ["action"], Md = ["value"], Ud = ["name", "value"], Fd = { name: "bulkEditField" }, Hd = { value: "publicationType" }, jd = { value: "subtitle" }, $d = { value: "creators" }, Vd = { value: "publication" }, zd = { value: "publicationDate" }, Bd = { value: "language" }, Wd = { value: "publisher" }, qd = { value: "genres" }, Kd = { value: "classifications" }, Gd = {
  type: "submit",
  class: "button secondary"
}, Yd = { class: "library-muted" }, Xd = ["action"], Jd = ["value"], Zd = ["name", "value"], Qd = {
  type: "submit",
  class: "button secondary"
}, ep = { class: "library-muted" }, tp = ["aria-label"], np = ["href", "aria-label"], rp = ["aria-label"], ip = { class: "library-pagination-range" }, op = { key: 0 }, sp = ["href"], lp = {
  key: 1,
  class: "library-muted"
}, ap = ["href"], cp = {
  key: 3,
  class: "library-muted"
}, up = {
  key: 2,
  class: "library-periodical-groups"
}, fp = { class: "library-periodical-groups-summary" }, dp = { id: "library-periodical-groups-heading" }, pp = { class: "library-muted" }, hp = ["href"], mp = { class: "library-muted" }, bp = {
  key: 3,
  class: "library-periodical-groups library-periodical-groups-empty"
}, yp = { class: "library-periodical-groups-summary" }, gp = { id: "library-periodical-groups-empty-heading" }, _p = { class: "library-muted" }, vp = {
  key: 4,
  class: "library-year-groups"
}, Ep = { class: "library-periodical-groups-summary" }, Tp = { id: "library-year-groups-heading" }, Sp = { class: "library-muted" }, Cp = ["href"], xp = {
  key: 5,
  class: "library-creator-groups"
}, Ap = { class: "library-periodical-groups-summary" }, wp = { id: "library-creator-groups-heading" }, Rp = { class: "library-muted" }, Op = ["href"], Np = { class: "library-muted" }, Pp = { class: "library-empty-actions" }, Lp = ["href"], kp = { class: "library-muted" }, Ip = { class: "library-muted" }, Dp = { class: "library-empty-actions" }, Mp = ["href"], Up = { class: "library-muted" }, Fp = { class: "library-empty-actions" }, Hp = ["href"], jp = {
  href: "?",
  class: "button primary"
}, $p = { class: "library-muted" }, Vp = { class: "library-empty-actions" }, zp = ["href"], Bp = {
  key: 7,
  class: "library-cover-gallery"
}, Wp = ["href", "aria-label"], qp = ["src", "alt"], Kp = ["action", "onSubmit"], Gp = ["value"], Yp = ["value"], Xp = ["aria-pressed", "title", "aria-label", "onClick"], Jp = { class: "library-cover-summary" }, Zp = { class: "library-cover-primary" }, Qp = ["aria-label"], eh = ["href"], th = ["onToggle"], nh = ["aria-label"], rh = { class: "library-cover-meta" }, ih = {
  key: 0,
  class: "library-creator"
}, oh = { class: "library-cover-detail-list" }, sh = { class: "library-cover-detail-chip" }, lh = {
  key: 0,
  class: "library-cover-detail-chip"
}, ah = {
  key: 1,
  class: "library-cover-detail-chip"
}, ch = {
  key: 2,
  class: "library-cover-detail-chip"
}, uh = {
  key: 3,
  class: "library-cover-detail-chip"
}, fh = {
  key: 4,
  class: "library-cover-detail-chip"
}, dh = {
  key: 5,
  class: "library-cover-detail-chip"
}, ph = {
  key: 6,
  class: "library-cover-detail-chip"
}, hh = {
  key: 1,
  class: "library-muted library-cover-description"
}, mh = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, bh = { key: 0 }, yh = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, gh = {
  key: 0,
  class: "library-muted"
}, _h = { class: "library-cover-actions" }, vh = ["href"], Eh = ["href"], Th = ["href"], Sh = {
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
    }), o = /* @__PURE__ */ un((i.items || []).map((C) => ({ ...C }))), s = se(() => o), l = se(() => i.shelves || []), u = se(() => i.formats || []), v = se(() => i.publications || []), m = se(() => i.publicationSummaries || []), T = se(() => i.publicationYears || []), P = se(() => i.creators || []), z = se(() => i.scanStatuses || []), ne = se(() => i.workflowStatuses || []), B = se(() => i.genres || []), re = se(() => i.classifications || []), q = se(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), I = /* @__PURE__ */ un({
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
    }), Z = se(() => i.settingsUrl || ""), $ = se(() => i.requestToken || ""), ce = se(() => i.metadataExportUrl || ""), Ce = se(() => i.metadataSidecarManifestUrl || ""), xe = se(() => i.metadataSidecarBundleUrl || ""), Ae = se(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), Ee = se(() => i.batchTagUrl || "/apps/library/bulk/tags"), Oe = se(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Ve = se(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), nt = se(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), ze = se(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Be = se(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), rt = se(() => i.discoveryPage === "publication"), ve = se(() => i.discoveryPage === "year"), ae = se(() => i.discoveryPage === "creator"), oe = se(() => rt.value || ve.value || ae.value), je = se(() => i.discoveryTitle || I.publication || I.year || I.creator || ""), Me = se(() => Number(i.rootCount || 0)), it = se(() => Number(i.enabledRootCount || 0)), Ne = se(() => Me.value === 0), ut = se(() => Me.value > 0 && it.value === 0), ue = se(() => Ye.value.length > 0), ot = {
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
    }, Ye = se(() => Object.entries(ot).map(([C, S]) => ({ key: C, label: S, value: I[C] || "" })).filter((C) => String(C.value).trim() !== "")), ht = se(() => Object.entries(I).filter(([C, S]) => !["q", "sort", "starred"].includes(C) && String(S || "").trim() !== "").map(([C, S]) => ({ key: C, value: S }))), Xe = se(() => Object.entries(I).filter(([C, S]) => String(S || "").trim() !== "").map(([C, S]) => ({ key: C, value: S }))), gt = /* @__PURE__ */ un({}), Le = /* @__PURE__ */ va(null);
    let mt = null;
    function f(C) {
      const S = new URLSearchParams(new FormData(C));
      for (const d of Array.from(S.keys()))
        String(S.get(d) || "").trim() === "" && S.delete(d);
      return S.delete("page"), S;
    }
    function h(C) {
      o.splice(0, o.length, ...(C.items || []).map((S) => ({ ...S })));
      for (const S of ["shelves", "formats", "publications", "publicationSummaries", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl"])
        Object.prototype.hasOwnProperty.call(C, S) && (i[S] = C[S]);
      Object.assign(I, C.activeFilters || {});
    }
    async function g(C) {
      const S = C?.currentTarget?.tagName === "FORM" ? C.currentTarget : C?.currentTarget?.form;
      if (!S) return;
      const ee = f(S).toString(), Ue = ee ? `?${ee}` : "", fe = await fetch(Ae.value + Ue, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!fe.ok) {
        S.submit();
        return;
      }
      h(await fe.json()), history.replaceState({}, "", ee ? `?${ee}` : window.location.pathname);
    }
    function w(C) {
      g(C);
    }
    function E(C) {
      window.clearTimeout(mt), mt = window.setTimeout(() => w(C), 350);
    }
    function A(C) {
      const S = new URLSearchParams();
      for (const [ee, Ue] of Object.entries(I)) {
        const fe = String(Ue || "").trim();
        fe !== "" && ee !== C && !(ee === "sort" && fe === "title") && S.set(ee, fe);
      }
      const d = S.toString();
      return d ? `?${d}` : "?";
    }
    function D() {
      return A("q");
    }
    function L(C) {
      return String(C || "").toUpperCase();
    }
    function k(C) {
      return C.nextcloudTags || [];
    }
    function x(C) {
      return m.value.find((d) => d.publication === C)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(C)}`;
    }
    function G(C) {
      return i.publicationYearLandingUrls?.[C] || `/apps/library/years/${encodeURIComponent(C)}`;
    }
    function j(C) {
      return i.creatorLandingUrls?.[C] || `/apps/library/creators/${encodeURIComponent(C)}`;
    }
    function W(C, S) {
      gt[C] = !!S?.currentTarget?.open;
    }
    function X(C) {
      const S = String(C?.tagName || "").toLowerCase();
      return C?.isContentEditable || ["input", "select", "textarea", "button"].includes(S);
    }
    function R(C) {
      C.key !== "/" || C.metaKey || C.ctrlKey || C.altKey || C.shiftKey || X(C.target) || (C.preventDefault(), Le.value?.focus(), Le.value?.select?.());
    }
    function N(C) {
      C.key !== "Escape" || document.activeElement !== Le.value || I.q === "" || (C.preventDefault(), I.q = "", Le.value.value = "", window.clearTimeout(mt), w({ currentTarget: Le.value }));
    }
    function U(C) {
      R(C), N(C);
    }
    Ks(() => {
      window.addEventListener("keydown", U);
    }), Gs(() => {
      window.removeEventListener("keydown", U);
    });
    async function J(C, S) {
      const d = S?.currentTarget?.closest?.("form") || S?.currentTarget;
      if (!d || !C?.starUrl) return;
      const ee = !!C.starred;
      C.starred = !ee;
      try {
        (await fetch(C.starUrl, {
          method: "POST",
          body: new FormData(d),
          credentials: "same-origin"
        })).ok || (C.starred = ee);
      } catch {
        C.starred = ee;
      }
    }
    return (C, S) => (F(), H("div", Zu, [
      p("section", Qu, [
        p("div", ef, [
          p("div", null, [
            p("h2", tf, b(_(c)("library", "Publication catalogue")), 1),
            p("p", nf, b(_(c)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          p("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": _(c)("library", "Library actions")
          }, [
            p("a", {
              href: Z.value,
              class: "button secondary",
              "aria-label": "Open Library settings"
            }, b(_(c)("library", "Settings")), 9, of),
            ce.value ? (F(), H("a", {
              key: 0,
              href: ce.value,
              class: "button secondary",
              "aria-label": "Export corrected metadata"
            }, b(_(c)("library", "Export corrected metadata")), 9, sf)) : we("", !0),
            Ce.value ? (F(), H("a", {
              key: 1,
              href: Ce.value,
              class: "button secondary",
              "aria-label": "Export sidecar manifest"
            }, b(_(c)("library", "Sidecar manifest")), 9, lf)) : we("", !0),
            xe.value ? (F(), H("a", {
              key: 2,
              href: xe.value,
              class: "button secondary",
              "aria-label": "Export sidecar ZIP"
            }, b(_(c)("library", "Sidecar ZIP")), 9, af)) : we("", !0)
          ], 8, rf)
        ]),
        p("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": _(c)("library", "Quick catalogue filters"),
          onSubmit: Er(g, ["prevent"])
        }, [
          (F(!0), H(le, null, Te(ht.value, (d) => (F(), H("input", {
            key: d.key,
            type: "hidden",
            name: d.key,
            value: d.value
          }, null, 8, uf))), 128)),
          p("label", ff, [
            pe(b(_(c)("library", "Search")) + " ", 1),
            S[18] || (S[18] = p("kbd", { class: "library-keyboard-hint" }, "/", -1)),
            Fe(p("input", {
              ref_key: "quickSearchInput",
              ref: Le,
              "onUpdate:modelValue": S[0] || (S[0] = (d) => I.q = d),
              "data-library-quick-search": "",
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex...",
              onInput: E
            }, null, 544), [
              [mi, I.q]
            ])
          ]),
          p("label", null, [
            pe(b(_(c)("library", "Sort")) + " ", 1),
            Fe(p("select", {
              "onUpdate:modelValue": S[1] || (S[1] = (d) => I.sort = d),
              name: "sort",
              onChange: g
            }, [
              p("option", df, b(_(c)("library", "Title")), 1),
              p("option", pf, b(_(c)("library", "Recently added")), 1),
              p("option", hf, b(_(c)("library", "Publication date")), 1),
              p("option", mf, b(_(c)("library", "Series")), 1),
              p("option", bf, b(_(c)("library", "Recently opened")), 1),
              p("option", yf, b(_(c)("library", "Format")), 1)
            ], 544), [
              [Ze, I.sort]
            ])
          ]),
          p("label", null, [
            pe(b(_(c)("library", "Starred")) + " ", 1),
            Fe(p("select", {
              "onUpdate:modelValue": S[2] || (S[2] = (d) => I.starred = d),
              name: "starred",
              onChange: g
            }, [
              p("option", gf, b(_(c)("library", "All")), 1),
              p("option", _f, b(_(c)("library", "Starred")), 1)
            ], 544), [
              [Ze, I.starred]
            ])
          ]),
          p("label", null, [
            pe(b(_(c)("library", "Size")) + " ", 1),
            p("select", {
              value: q.value.limit,
              name: "limit",
              onChange: g
            }, [
              (F(), H(le, null, Te(r, (d) => p("option", {
                key: d,
                value: d
              }, b(d), 9, Ef)), 64))
            ], 40, vf)
          ]),
          p("button", {
            type: "submit",
            class: "button primary",
            "aria-label": _(c)("library", "Apply catalogue filters")
          }, b(_(c)("library", "Apply filters")), 9, Tf),
          p("a", {
            href: "?",
            class: "button secondary",
            "aria-label": _(c)("library", "Clear catalogue filters")
          }, b(_(c)("library", "Clear all")), 9, Sf)
        ], 40, cf),
        p("details", Cf, [
          p("summary", xf, b(_(c)("library", "Show catalogue filters")), 1),
          p("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": _(c)("library", "Catalogue search and filters"),
            onSubmit: Er(g, ["prevent"])
          }, [
            p("label", null, [
              pe(b(_(c)("library", "Search title / author")) + " ", 1),
              Fe(p("input", {
                "onUpdate:modelValue": S[3] || (S[3] = (d) => I.q = d),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [mi, I.q]
              ])
            ]),
            p("label", null, [
              pe(b(_(c)("library", "Type")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": S[4] || (S[4] = (d) => I.type = d),
                name: "type"
              }, [
                p("option", wf, b(_(c)("library", "All types")), 1),
                (F(), H(le, null, Te(n, (d) => p("option", {
                  key: d,
                  value: d
                }, b(d), 9, Rf)), 64))
              ], 512), [
                [Ze, I.type]
              ])
            ]),
            p("label", null, [
              pe(b(_(c)("library", "Series / periodical")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": S[5] || (S[5] = (d) => I.publication = d),
                name: "publication"
              }, [
                p("option", Of, b(_(c)("library", "All series and periodicals")), 1),
                (F(!0), H(le, null, Te(v.value, (d) => (F(), H("option", {
                  key: d,
                  value: d
                }, b(d), 9, Nf))), 128))
              ], 512), [
                [Ze, I.publication]
              ])
            ]),
            p("label", null, [
              pe(b(_(c)("library", "Publication year")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": S[6] || (S[6] = (d) => I.year = d),
                name: "year"
              }, [
                p("option", Pf, b(_(c)("library", "All years")), 1),
                (F(!0), H(le, null, Te(T.value, (d) => (F(), H("option", {
                  key: d,
                  value: d
                }, b(d), 9, Lf))), 128))
              ], 512), [
                [Ze, I.year]
              ])
            ]),
            p("label", null, [
              pe(b(_(c)("library", "Creator")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": S[7] || (S[7] = (d) => I.creator = d),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                p("option", kf, b(_(c)("library", "All creators")), 1),
                (F(!0), H(le, null, Te(P.value, (d) => (F(), H("option", {
                  key: d,
                  value: d
                }, b(d), 9, If))), 128))
              ], 512), [
                [Ze, I.creator]
              ])
            ]),
            p("label", null, [
              pe(b(_(c)("library", "Nextcloud tag")) + " ", 1),
              Fe(p("input", {
                "onUpdate:modelValue": S[8] || (S[8] = (d) => I.tag = d),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [mi, I.tag]
              ])
            ]),
            p("label", null, [
              pe(b(_(c)("library", "Format")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": S[9] || (S[9] = (d) => I.format = d),
                name: "format"
              }, [
                p("option", Df, b(_(c)("library", "All formats")), 1),
                (F(!0), H(le, null, Te(u.value, (d) => (F(), H("option", {
                  key: d,
                  value: d
                }, b(L(d)), 9, Mf))), 128))
              ], 512), [
                [Ze, I.format]
              ])
            ]),
            p("label", null, [
              pe(b(_(c)("library", "Shelf")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": S[10] || (S[10] = (d) => I.shelf = d),
                name: "shelf"
              }, [
                p("option", Uf, b(_(c)("library", "All shelves")), 1),
                (F(!0), H(le, null, Te(l.value, (d) => (F(), H("option", {
                  key: d,
                  value: d
                }, b(d), 9, Ff))), 128))
              ], 512), [
                [Ze, I.shelf]
              ])
            ]),
            p("label", null, [
              pe(b(_(c)("library", "Scan status")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": S[11] || (S[11] = (d) => I.status = d),
                name: "status"
              }, [
                p("option", Hf, b(_(c)("library", "All scan statuses")), 1),
                (F(!0), H(le, null, Te(z.value, (d) => (F(), H("option", {
                  key: d,
                  value: d
                }, b(d), 9, jf))), 128))
              ], 512), [
                [Ze, I.status]
              ])
            ]),
            p("label", null, [
              pe(b(_(c)("library", "Workflow status")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": S[12] || (S[12] = (d) => I.workflowStatus = d),
                name: "workflowStatus"
              }, [
                p("option", $f, b(_(c)("library", "All workflow statuses")), 1),
                (F(!0), H(le, null, Te(ne.value, (d) => (F(), H("option", {
                  key: d,
                  value: d
                }, b(d), 9, Vf))), 128))
              ], 512), [
                [Ze, I.workflowStatus]
              ])
            ]),
            p("label", null, [
              pe(b(_(c)("library", "Genre")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": S[13] || (S[13] = (d) => I.genre = d),
                name: "genre"
              }, [
                p("option", zf, b(_(c)("library", "All genres")), 1),
                (F(!0), H(le, null, Te(B.value, (d) => (F(), H("option", {
                  key: d,
                  value: d
                }, b(d), 9, Bf))), 128))
              ], 512), [
                [Ze, I.genre]
              ])
            ]),
            p("label", null, [
              pe(b(_(c)("library", "Classification")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": S[14] || (S[14] = (d) => I.classification = d),
                name: "classification"
              }, [
                p("option", Wf, b(_(c)("library", "All classifications")), 1),
                (F(!0), H(le, null, Te(re.value, (d) => (F(), H("option", {
                  key: d,
                  value: d
                }, b(d), 9, qf))), 128))
              ], 512), [
                [Ze, I.classification]
              ])
            ]),
            p("label", null, [
              pe(b(_(c)("library", "Scanner conflicts")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": S[15] || (S[15] = (d) => I.scannerConflicts = d),
                name: "scannerConflicts"
              }, [
                p("option", Kf, b(_(c)("library", "All metadata")), 1),
                p("option", Gf, b(_(c)("library", "Needs review")), 1)
              ], 512), [
                [Ze, I.scannerConflicts]
              ])
            ]),
            p("label", null, [
              pe(b(_(c)("library", "Starred")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": S[16] || (S[16] = (d) => I.starred = d),
                name: "starred"
              }, [
                p("option", Yf, b(_(c)("library", "All publications")), 1),
                p("option", Xf, b(_(c)("library", "Starred only")), 1)
              ], 512), [
                [Ze, I.starred]
              ])
            ]),
            p("label", null, [
              pe(b(_(c)("library", "Sort")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": S[17] || (S[17] = (d) => I.sort = d),
                name: "sort"
              }, [
                p("option", Jf, b(_(c)("library", "Title")), 1),
                p("option", Zf, b(_(c)("library", "Recently added")), 1),
                p("option", Qf, b(_(c)("library", "Publication date")), 1),
                p("option", ed, b(_(c)("library", "Series / periodical")), 1),
                p("option", td, b(_(c)("library", "Recently opened")), 1),
                p("option", nd, b(_(c)("library", "Format")), 1)
              ], 512), [
                [Ze, I.sort]
              ])
            ]),
            p("label", null, [
              pe(b(_(c)("library", "Page size")) + " ", 1),
              p("select", {
                value: q.value.limit,
                name: "limit"
              }, [
                (F(), H(le, null, Te(r, (d) => p("option", {
                  key: d,
                  value: d
                }, b(d), 9, id)), 64))
              ], 8, rd)
            ]),
            p("button", {
              type: "submit",
              class: "button primary",
              "aria-label": _(c)("library", "Apply catalogue filters")
            }, b(_(c)("library", "Apply filters")), 9, od),
            p("a", {
              href: "?",
              class: "button secondary",
              "aria-label": _(c)("library", "Clear catalogue filters")
            }, b(_(c)("library", "Clear")), 9, sd),
            p("a", {
              href: Be.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, b(_(c)("library", "Review scanner conflicts")), 9, ld)
          ], 40, Af)
        ]),
        oe.value ? (F(), H("section", ad, [
          p("p", cd, b(ae.value ? _(c)("library", "Creator") : ve.value ? _(c)("library", "Publication year") : _(c)("library", "Publication / series")), 1),
          p("h3", ud, b(je.value), 1),
          p("p", fd, b(q.value.total) + " " + b(ae.value ? _(c)("library", "items by this creator. Sorted by publication context when available.") : ve.value ? _(c)("library", "items from this publication year. Sorted by publication date when available.") : _(c)("library", "items in this publication. Sorted by issue/date context when available.")), 1),
          p("p", null, [
            p("a", dd, b(_(c)("library", "Back to full catalogue")), 1)
          ])
        ])) : we("", !0),
        p("p", pd, [
          pe(b(_(c)("library", "Showing")) + " " + b(q.value.from) + "–" + b(q.value.to) + " " + b(_(c)("library", "of")) + " " + b(q.value.total) + " " + b(_(c)("library", "catalogue items")), 1),
          Ye.value.length > 0 ? (F(), H("span", hd, [
            S[19] || (S[19] = pe(" · ", -1)),
            p("a", md, b(_(c)("library", "Clear all filters")), 1)
          ])) : we("", !0)
        ]),
        p("details", bd, [
          p("summary", null, [
            pe(b(_(c)("library", "Batch actions for current results")) + " ", 1),
            p("span", yd, b(q.value.total) + " " + b(_(c)("library", "Current filter result")), 1)
          ]),
          p("form", {
            method: "post",
            action: Ee.value,
            class: "library-batch-tag-form"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: $.value
            }, null, 8, _d),
            (F(!0), H(le, null, Te(Xe.value, (d) => (F(), H("input", {
              key: d.key,
              type: "hidden",
              name: d.key,
              value: d.value
            }, null, 8, vd))), 128)),
            p("label", null, [
              p("span", null, b(_(c)("library", "Nextcloud tag")), 1),
              p("input", {
                type: "text",
                name: "nextcloudTagName",
                list: "library-nextcloud-tag-suggestions",
                placeholder: _(c)("library", "e.g. Review"),
                autocomplete: "off"
              }, null, 8, Ed)
            ]),
            p("button", Td, b(_(c)("library", "Apply Nextcloud tag to current results")), 1),
            p("p", Sd, b(_(c)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
          ], 8, gd),
          p("form", {
            method: "post",
            action: Oe.value,
            class: "library-batch-tag-remove-form"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: $.value
            }, null, 8, xd),
            (F(!0), H(le, null, Te(Xe.value, (d) => (F(), H("input", {
              key: `remove-tag-${d.key}`,
              type: "hidden",
              name: d.key,
              value: d.value
            }, null, 8, Ad))), 128)),
            p("label", null, [
              p("span", null, b(_(c)("library", "Nextcloud tag")), 1),
              p("input", {
                type: "text",
                name: "nextcloudTagName",
                list: "library-nextcloud-tag-suggestions",
                placeholder: _(c)("library", "e.g. Review"),
                autocomplete: "off"
              }, null, 8, wd)
            ]),
            p("button", Rd, b(_(c)("library", "Remove tag from current results")), 1),
            p("p", Od, b(_(c)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
          ], 8, Cd),
          p("form", {
            method: "post",
            action: Ve.value,
            class: "library-batch-metadata-reset-form"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: $.value
            }, null, 8, Pd),
            (F(!0), H(le, null, Te(Xe.value, (d) => (F(), H("input", {
              key: `reset-${d.key}`,
              type: "hidden",
              name: d.key,
              value: d.value
            }, null, 8, Ld))), 128)),
            S[20] || (S[20] = p("input", {
              type: "hidden",
              name: "scannerConflicts",
              value: "1"
            }, null, -1)),
            p("button", kd, b(_(c)("library", "Reset filtered metadata")), 1),
            p("p", Id, b(_(c)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
          ], 8, Nd),
          p("form", {
            method: "post",
            action: nt.value,
            class: "library-batch-metadata-edit-preview-form",
            target: "_blank"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: $.value
            }, null, 8, Md),
            (F(!0), H(le, null, Te(Xe.value, (d) => (F(), H("input", {
              key: `edit-preview-${d.key}`,
              type: "hidden",
              name: d.key,
              value: d.value
            }, null, 8, Ud))), 128)),
            p("label", null, [
              p("span", null, b(_(c)("library", "Metadata field")), 1),
              p("select", Fd, [
                p("option", Hd, b(_(c)("library", "Publication type")), 1),
                p("option", jd, b(_(c)("library", "Subtitle")), 1),
                p("option", $d, b(_(c)("library", "Creators")), 1),
                p("option", Vd, b(_(c)("library", "Series / periodical")), 1),
                p("option", zd, b(_(c)("library", "Publication date")), 1),
                p("option", Bd, b(_(c)("library", "Language")), 1),
                p("option", Wd, b(_(c)("library", "Publisher")), 1),
                p("option", qd, b(_(c)("library", "Genres")), 1),
                p("option", Kd, b(_(c)("library", "Classifications")), 1)
              ])
            ]),
            p("label", null, [
              p("span", null, b(_(c)("library", "Preview value")), 1),
              S[21] || (S[21] = p("input", {
                type: "text",
                name: "bulkEditValue",
                placeholder: "magazine, de, photography...",
                autocomplete: "off"
              }, null, -1))
            ]),
            p("button", Gd, b(_(c)("library", "Preview metadata edit")), 1),
            p("p", Yd, b(_(c)("library", "Preview-first batch metadata edit for current filter results. No changes are written during preview.")), 1)
          ], 8, Dd),
          p("form", {
            method: "post",
            action: ze.value,
            class: "library-batch-cover-refresh-form"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: $.value
            }, null, 8, Jd),
            (F(!0), H(le, null, Te(Xe.value, (d) => (F(), H("input", {
              key: `cover-${d.key}`,
              type: "hidden",
              name: d.key,
              value: d.value
            }, null, 8, Zd))), 128)),
            p("button", Qd, b(_(c)("library", "Request fresh cover previews")), 1),
            p("p", ep, b(_(c)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
          ], 8, Xd)
        ]),
        Ye.value.length > 0 ? (F(), H("nav", {
          key: 1,
          class: "library-active-filter-chips",
          "aria-label": _(c)("library", "Active filters")
        }, [
          p("span", null, b(_(c)("library", "Active filters")), 1),
          (F(!0), H(le, null, Te(Ye.value, (d) => (F(), H("a", {
            key: d.key,
            href: A(d.key),
            class: "library-filter-chip",
            "aria-label": `${_(c)("library", "Remove filter")}: ${d.label}`
          }, [
            p("strong", null, b(d.label) + ":", 1),
            pe(" " + b(d.value) + " ", 1),
            S[22] || (S[22] = p("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, np))), 128))
        ], 8, tp)) : we("", !0),
        p("nav", {
          class: "library-pagination",
          "aria-label": _(c)("library", "Catalogue pagination")
        }, [
          p("span", ip, [
            pe(b(_(c)("library", "Page")) + " " + b(q.value.page), 1),
            q.value.total > 0 ? (F(), H("span", op, " · " + b(q.value.from) + "–" + b(q.value.to), 1)) : we("", !0)
          ]),
          q.value.previousUrl ? (F(), H("a", {
            key: 0,
            href: q.value.previousUrl
          }, b(_(c)("library", "Previous")), 9, sp)) : (F(), H("span", lp, b(_(c)("library", "Previous")), 1)),
          q.value.nextUrl ? (F(), H("a", {
            key: 2,
            href: q.value.nextUrl
          }, b(_(c)("library", "Next")), 9, ap)) : (F(), H("span", cp, b(_(c)("library", "Next")), 1))
        ], 8, rp),
        m.value.length > 0 ? (F(), H("details", up, [
          p("summary", fp, b(_(c)("library", "Show top series and periodicals")), 1),
          p("h3", dp, b(_(c)("library", "Top series and periodicals")), 1),
          p("p", pp, b(_(c)("library", "Jump into recurring publications with one click.")), 1),
          p("ul", null, [
            (F(!0), H(le, null, Te(m.value, (d) => (F(), H("li", {
              key: d.publication
            }, [
              p("a", {
                href: x(d.publication)
              }, b(d.publication), 9, hp),
              p("span", mp, b(d.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : m.value.length === 0 ? (F(), H("details", bp, [
          p("summary", yp, b(_(c)("library", "Show top series and periodicals")), 1),
          p("h3", gp, b(_(c)("library", "No series or periodicals found yet")), 1),
          p("p", _p, b(_(c)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : we("", !0),
        T.value.length > 0 ? (F(), H("details", vp, [
          p("summary", Ep, b(_(c)("library", "Show publication years")), 1),
          p("h3", Tp, b(_(c)("library", "Top publication years")), 1),
          p("p", Sp, b(_(c)("library", "Jump into dated books, magazines, journals and comics by year.")), 1),
          p("ul", null, [
            (F(!0), H(le, null, Te(T.value, (d) => (F(), H("li", { key: d }, [
              p("a", {
                href: G(d)
              }, b(d), 9, Cp)
            ]))), 128))
          ])
        ])) : we("", !0),
        P.value.length > 0 ? (F(), H("details", xp, [
          p("summary", Ap, b(_(c)("library", "Show creators")), 1),
          p("h3", wp, b(_(c)("library", "Top creators")), 1),
          p("p", Rp, b(_(c)("library", "Jump to a dedicated creator discovery page with exact full-field matching.")), 1),
          p("ul", null, [
            (F(!0), H(le, null, Te(P.value, (d) => (F(), H("li", { key: d }, [
              p("a", {
                href: j(d)
              }, b(d), 9, Op)
            ]))), 128))
          ])
        ])) : we("", !0),
        s.value.length === 0 ? (F(), H("div", {
          key: 6,
          class: Nn(["library-empty-content", { "library-first-run-guidance": Ne.value || ut.value, "library-filter-empty-state": ue.value && !Ne.value && !ut.value }]),
          role: "status"
        }, [
          Ne.value ? (F(), H(le, { key: 0 }, [
            p("h3", null, b(_(c)("library", "Start with one Library root")), 1),
            p("p", Np, b(_(c)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            p("p", Pp, [
              p("a", {
                href: Z.value,
                class: "button primary"
              }, b(_(c)("library", "Add a Library root")), 9, Lp),
              p("span", kp, b(_(c)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : ut.value ? (F(), H(le, { key: 1 }, [
            p("h3", null, b(_(c)("library", "No enabled Library roots")), 1),
            p("p", Ip, b(_(c)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            p("p", Dp, [
              p("a", {
                href: Z.value,
                class: "button primary"
              }, b(_(c)("library", "Open Library settings")), 9, Mp)
            ])
          ], 64)) : ue.value ? (F(), H(le, { key: 2 }, [
            p("h3", null, b(_(c)("library", "No matches for the current filters")), 1),
            p("p", Up, b(_(c)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            p("p", Fp, [
              p("a", {
                href: D(),
                class: "button secondary"
              }, b(_(c)("library", "Clear search")), 9, Hp),
              p("a", jp, b(_(c)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (F(), H(le, { key: 3 }, [
            p("h3", null, b(_(c)("library", "No catalogue items yet")), 1),
            p("p", $p, b(_(c)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            p("p", Vp, [
              p("a", {
                href: Z.value,
                class: "button primary"
              }, b(_(c)("library", "Run a scan from settings")), 9, zp)
            ])
          ], 64))
        ], 2)) : (F(), H("div", Bp, [
          (F(!0), H(le, null, Te(s.value, (d) => (F(), H("article", {
            key: d.id,
            class: Nn(["library-cover-card", { "library-cover-card--open": gt[d.id] }])
          }, [
            p("a", {
              class: "library-cover-link",
              href: d.openUrl,
              "aria-label": `Read ${d.title}`
            }, [
              p("img", {
                class: "library-cover-image",
                src: d.coverUrl,
                alt: `Cover for ${d.title}`,
                loading: "lazy"
              }, null, 8, qp)
            ], 8, Wp),
            p("form", {
              method: "post",
              action: d.starUrl,
              class: "library-cover-star-form",
              onSubmit: Er((ee) => J(d, ee), ["prevent"])
            }, [
              p("input", {
                type: "hidden",
                name: "requesttoken",
                value: $.value
              }, null, 8, Gp),
              S[23] || (S[23] = p("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              p("input", {
                type: "hidden",
                name: "starred",
                value: d.starred ? "0" : "1"
              }, null, 8, Yp),
              p("button", {
                type: "submit",
                class: Nn(["library-cover-star-button", { "library-cover-star-button--starred": d.starred }]),
                "aria-pressed": d.starred ? "true" : "false",
                title: d.starred ? _(c)("library", "Unstar this publication") : _(c)("library", "Star this publication"),
                "aria-label": d.starred ? _(c)("library", "Unstar this publication") : _(c)("library", "Star this publication"),
                onClick: Er((ee) => J(d, ee), ["prevent"])
              }, b(d.starred ? "★" : "☆"), 11, Xp)
            ], 40, Kp),
            p("div", Jp, [
              p("div", Zp, [
                p("h3", null, [
                  d.starred ? (F(), H("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": _(c)("library", "Starred")
                  }, "★", 8, Qp)) : we("", !0),
                  pe(b(d.title), 1)
                ]),
                p("a", {
                  class: "library-cover-read",
                  href: d.openUrl
                }, b(_(c)("library", "Read")), 9, eh)
              ]),
              p("details", {
                class: "library-cover-details",
                onToggle: (ee) => W(d.id, ee)
              }, [
                p("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${_(c)("library", "Show details and actions")}: ${d.title}`
                }, b(_(c)("library", "Details")), 9, nh),
                p("div", rh, [
                  d.creators ? (F(), H("p", ih, b(d.creators), 1)) : we("", !0),
                  p("dl", oh, [
                    p("div", sh, [
                      p("dt", null, b(_(c)("library", "Type")), 1),
                      p("dd", null, b(d.publicationType), 1)
                    ]),
                    d.publication ? (F(), H("div", lh, [
                      p("dt", null, b(_(c)("library", "Series")), 1),
                      p("dd", null, b(d.publication), 1)
                    ])) : we("", !0),
                    d.publicationDate ? (F(), H("div", ah, [
                      p("dt", null, b(_(c)("library", "Date")), 1),
                      p("dd", null, b(d.publicationDate), 1)
                    ])) : we("", !0),
                    d.workflowStatus ? (F(), H("div", ch, [
                      p("dt", null, b(_(c)("library", "Status")), 1),
                      p("dd", null, b(d.workflowStatus), 1)
                    ])) : we("", !0),
                    d.hasScannerConflict ? (F(), H("div", uh, [
                      p("dt", null, b(_(c)("library", "Review")), 1),
                      p("dd", null, b(d.scannerConflictCount) + " fields", 1)
                    ])) : we("", !0),
                    d.lastOpenedAt ? (F(), H("div", fh, [
                      p("dt", null, b(_(c)("library", "Last opened")), 1),
                      p("dd", null, b(d.lastOpenedAt), 1)
                    ])) : we("", !0),
                    d.extension ? (F(), H("div", dh, [
                      p("dt", null, b(_(c)("library", "Format")) + ":", 1),
                      p("dd", null, b(L(d.extension)), 1)
                    ])) : we("", !0),
                    d.shelf ? (F(), H("div", ph, [
                      p("dt", null, b(_(c)("library", "Shelf")), 1),
                      p("dd", null, b(d.shelf), 1)
                    ])) : we("", !0)
                  ]),
                  d.description ? (F(), H("p", hh, b(d.description), 1)) : we("", !0),
                  d.scanStatus !== "indexed" || d.scanError ? (F(), H("p", mh, [
                    pe(" scanStatus: " + b(d.scanStatus || "unknown"), 1),
                    d.scanError ? (F(), H("span", bh, " · scanError: " + b(d.scanError), 1)) : we("", !0)
                  ])) : we("", !0),
                  p("div", yh, [
                    k(d).length === 0 ? (F(), H("span", gh, "No Nextcloud tags")) : (F(!0), H(le, { key: 1 }, Te(k(d), (ee) => (F(), H("span", {
                      key: ee.id,
                      class: "library-tag"
                    }, b(ee.name), 1))), 128))
                  ]),
                  p("p", _h, [
                    p("a", {
                      href: d.filesUrl
                    }, b(_(c)("library", "Show in Files")), 9, vh),
                    S[24] || (S[24] = pe(" · ", -1)),
                    p("a", {
                      href: d.downloadUrl
                    }, b(_(c)("library", "Download source")), 9, Eh),
                    S[25] || (S[25] = pe(" · ", -1)),
                    p("a", {
                      href: d.detailsUrl
                    }, b(_(c)("library", "Details")), 9, Th)
                  ])
                ])
              ], 40, th)
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
function Ch(e, t, n, r = K) {
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
  const v = document.createElement("option");
  v.value = "", v.textContent = i, u.appendChild(v), Ch(u, o, r, s), l.appendChild(u), e.appendChild(l);
}
function An(e) {
  const t = K(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function xh(e, t = {}) {
  return K(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(K(e || t?.publication || ""))}`);
}
function Ah(e) {
  return K(e.discoveryPage) === "publication";
}
function wh(e, t = {}) {
  return K(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(K(e))}`);
}
function Si(e) {
  return K(e.discoveryPage) === "year";
}
function Rh(e, t = {}) {
  return K(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(K(e))}`);
}
function Ci(e) {
  return K(e.discoveryPage) === "creator";
}
function Oh(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([n, r]) => n !== "sort" && K(r).trim() !== "");
}
function Nh() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Bn(e, t, n, r) {
  const i = document.createElement("a");
  return i.href = t, i.className = n, i.textContent = r, e.appendChild(i), i;
}
function Ph(e, t) {
  const n = document.createElement("span");
  return n.className = "library-muted", n.textContent = t, e.appendChild(n), n;
}
function Lh(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", c("library", "Catalogue search and filters")), fs(r, c("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), xn(r, c("library", "Type"), "type", n.type, c("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), fs(r, c("library", "Nextcloud tag"), "tag", n.tag, "photography"), xn(r, c("library", "Format"), "format", n.format, c("library", "All formats"), e.formats || [], Cl), xn(r, c("library", "Shelf"), "shelf", n.shelf, c("library", "All shelves"), e.shelves || []), xn(r, c("library", "Scan status"), "status", n.status, c("library", "All scan statuses"), e.scanStatuses || []), xn(r, c("library", "Sort"), "sort", n.sort || "title", c("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), xn(r, c("library", "Page size"), "limit", t.limit || 100, c("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", c("library", "Apply catalogue filters")), i.textContent = c("library", "Apply filters");
  const o = document.createElement("a");
  return o.href = "?", o.className = "button secondary", o.setAttribute("aria-label", c("library", "Clear catalogue filters")), o.textContent = c("library", "Clear"), r.append(i, o), r;
}
function kh(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-quick-filter-bar", r.setAttribute("aria-label", c("library", "Quick catalogue filters"));
  let i = null;
  const o = () => {
    window.clearTimeout(i), i = window.setTimeout(() => r.requestSubmit(), 350);
  };
  for (const [T, P] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(T) || K(P).trim() === "") continue;
    const z = document.createElement("input");
    z.type = "hidden", z.name = T, z.value = K(P), r.appendChild(z);
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
  for (const [T, P, z, ne] of u) {
    const B = document.createElement("label");
    B.textContent = T;
    const re = document.createElement("select");
    re.name = P;
    for (const [q, I] of ne) {
      const Z = document.createElement("option");
      Z.value = K(q), Z.textContent = K(I), K(q) === K(z) && (Z.selected = !0), re.appendChild(Z);
    }
    re.addEventListener("change", () => r.requestSubmit()), B.appendChild(re), r.appendChild(B);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", c("library", "Apply catalogue filters")), v.textContent = c("library", "Apply filters");
  const m = document.createElement("a");
  return m.href = "?", m.className = "button secondary", m.setAttribute("aria-label", c("library", "Clear catalogue filters")), m.textContent = c("library", "Clear all"), r.append(v, m), r;
}
function Ih(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, i = K(e.settingsUrl || ""), o = K(e.metadataExportUrl || ""), s = K(e.batchTagUrl || "/apps/library/bulk/tags"), l = K(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), u = K(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = K(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), m = K(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), T = document.createElement("div");
  T.className = "library-vue-catalogue library-vue-fallback", T.dataset.vueFallback = "true";
  const P = document.createElement("section");
  P.className = "library-panel", P.setAttribute("aria-labelledby", "library-catalogue-heading");
  const z = document.createElement("div");
  z.className = "library-catalogue-header";
  const ne = document.createElement("div"), B = document.createElement("h2");
  B.id = "library-catalogue-heading", B.textContent = c("library", "Publication catalogue");
  const re = document.createElement("p");
  re.className = "library-muted", re.textContent = c("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), ne.append(B, re);
  const q = document.createElement("nav");
  if (q.className = "library-catalogue-toolbar", q.setAttribute("aria-label", c("library", "Library actions")), i) {
    const R = document.createElement("a");
    R.href = i, R.className = "button secondary", R.setAttribute("aria-label", "Open Library settings"), R.textContent = c("library", "Settings"), q.appendChild(R);
  }
  if (o) {
    const R = document.createElement("a");
    R.href = o, R.className = "button secondary", R.setAttribute("aria-label", "Export corrected metadata"), R.textContent = c("library", "Export corrected metadata"), q.appendChild(R);
  }
  if (e.metadataSidecarManifestUrl) {
    const R = document.createElement("a");
    R.href = e.metadataSidecarManifestUrl, R.className = "button secondary", R.setAttribute("aria-label", "Export sidecar manifest"), R.textContent = c("library", "Sidecar manifest"), q.appendChild(R);
  }
  if (e.metadataSidecarBundleUrl) {
    const R = document.createElement("a");
    R.href = e.metadataSidecarBundleUrl, R.className = "button secondary", R.setAttribute("aria-label", "Export sidecar ZIP"), R.textContent = c("library", "Sidecar ZIP"), q.appendChild(R);
  }
  z.append(ne, q), P.appendChild(z), P.appendChild(kh(e, r));
  const I = document.createElement("details");
  I.className = "library-filter-panel";
  const Z = document.createElement("summary");
  if (Z.className = "library-filter-panel-summary", Z.textContent = c("library", "Show catalogue filters"), I.append(Z, Lh(e, r)), P.appendChild(I), Ah(e) || Si(e) || Ci(e)) {
    const R = document.createElement("section");
    R.className = "library-discovery-header", R.setAttribute("aria-labelledby", "library-discovery-heading");
    const N = document.createElement("p");
    N.className = "library-muted", N.textContent = Ci(e) ? c("library", "Creator") : Si(e) ? c("library", "Publication year") : c("library", "Publication / series");
    const U = document.createElement("h3");
    U.id = "library-discovery-heading", U.textContent = K(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = `${r.total ?? n.length} ${Ci(e) ? c("library", "items by this creator. Sorted by publication context when available.") : Si(e) ? c("library", "items from this publication year. Sorted by publication date when available.") : c("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const C = document.createElement("a");
    C.href = "/apps/library/", C.className = "button secondary", C.textContent = c("library", "Back to full catalogue"), R.append(N, U, J, C), P.appendChild(R);
  }
  const $ = document.createElement("p");
  $.className = "library-muted library-filter-result-summary", $.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`;
  const ce = document.createElement("a");
  ce.href = "?", ce.textContent = ` ${c("library", "Clear all filters")}`, $.appendChild(ce), P.appendChild($);
  const Ce = document.createElement("details");
  Ce.className = "library-batch-actions";
  const xe = document.createElement("summary");
  xe.textContent = `${c("library", "Batch actions for current results")} (${r.total ?? n.length} ${c("library", "Current filter result")})`;
  const Ae = document.createElement("form");
  Ae.method = "post", Ae.action = s, Ae.className = "library-batch-tag-form";
  const Ee = An(e);
  Ee && Ae.appendChild(Ee);
  for (const [R, N] of Object.entries(e.activeFilters || {})) {
    if (K(N).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = R, U.value = K(N), Ae.appendChild(U);
  }
  const Oe = document.createElement("label");
  Oe.textContent = c("library", "Apply Nextcloud tag to current results");
  const Ve = document.createElement("input");
  Ve.type = "text", Ve.name = "nextcloudTagName", Ve.placeholder = "batch-review", Oe.appendChild(Ve);
  const nt = document.createElement("button");
  nt.type = "submit", nt.className = "button secondary", nt.textContent = c("library", "Apply Nextcloud tag to current results");
  const ze = document.createElement("p");
  ze.className = "library-muted", ze.textContent = c("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ae.append(Oe, nt, ze);
  const Be = document.createElement("form");
  Be.method = "post", Be.action = l, Be.className = "library-batch-tag-remove-form";
  const rt = An(e);
  rt && Be.appendChild(rt);
  for (const [R, N] of Object.entries(e.activeFilters || {})) {
    if (K(N).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = R, U.value = K(N), Be.appendChild(U);
  }
  const ve = document.createElement("label");
  ve.textContent = c("library", "Nextcloud tag");
  const ae = document.createElement("input");
  ae.type = "text", ae.name = "nextcloudTagName", ae.setAttribute("list", "library-nextcloud-tag-suggestions"), ae.placeholder = c("library", "e.g. Review"), ae.autocomplete = "off", ve.appendChild(ae);
  const oe = document.createElement("button");
  oe.type = "submit", oe.className = "button secondary", oe.textContent = c("library", "Remove tag from current results");
  const je = document.createElement("p");
  je.className = "library-muted", je.textContent = c("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), Be.append(ve, oe, je);
  const Me = document.createElement("form");
  Me.method = "post", Me.action = u, Me.className = "library-batch-metadata-reset-form";
  const it = An(e);
  it && Me.appendChild(it);
  for (const [R, N] of Object.entries(e.activeFilters || {})) {
    if (K(N).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = R, U.value = K(N), Me.appendChild(U);
  }
  const Ne = document.createElement("input");
  Ne.type = "hidden", Ne.name = "scannerConflicts", Ne.value = "1";
  const ut = document.createElement("button");
  ut.type = "submit", ut.className = "button secondary", ut.textContent = c("library", "Reset filtered metadata");
  const ue = document.createElement("p");
  ue.className = "library-muted", ue.textContent = c("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Me.append(Ne, ut, ue);
  const ot = document.createElement("form");
  ot.method = "post", ot.action = v, ot.className = "library-batch-metadata-edit-preview-form", ot.target = "_blank";
  const Ye = An(e);
  Ye && ot.appendChild(Ye);
  for (const [R, N] of Object.entries(e.activeFilters || {})) {
    if (K(N).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = R, U.value = K(N), ot.appendChild(U);
  }
  const ht = document.createElement("label");
  ht.textContent = c("library", "Metadata field");
  const Xe = document.createElement("select");
  Xe.name = "bulkEditField";
  for (const [R, N] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const U = document.createElement("option");
    U.value = R, U.textContent = c("library", N), Xe.appendChild(U);
  }
  ht.appendChild(Xe);
  const gt = document.createElement("label");
  gt.textContent = c("library", "Preview value");
  const Le = document.createElement("input");
  Le.type = "text", Le.name = "bulkEditValue", Le.placeholder = "magazine, de, photography...", Le.autocomplete = "off", gt.appendChild(Le);
  const mt = document.createElement("button");
  mt.type = "submit", mt.className = "button secondary", mt.textContent = c("library", "Preview metadata edit");
  const f = document.createElement("p");
  f.className = "library-muted", f.textContent = c("library", "Preview-first batch metadata edit for current filter results. No changes are written during preview."), ot.append(ht, gt, mt, f);
  const h = document.createElement("form");
  h.method = "post", h.action = m, h.className = "library-batch-cover-refresh-form";
  const g = An(e);
  g && h.appendChild(g);
  for (const [R, N] of Object.entries(e.activeFilters || {})) {
    if (K(N).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = R, U.value = K(N), h.appendChild(U);
  }
  const w = document.createElement("button");
  w.type = "submit", w.className = "button secondary", w.textContent = c("library", "Request fresh cover previews");
  const E = document.createElement("p");
  E.className = "library-muted", E.textContent = c("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), h.append(w, E), Ce.append(xe, Ae, Be, Me, ot, h), P.appendChild(Ce);
  const A = document.createElement("nav");
  A.className = "library-pagination", A.setAttribute("aria-label", c("library", "Catalogue pagination"));
  const D = document.createElement("span");
  D.className = "library-pagination-range", D.textContent = `Page ${r.page ?? 1} · ${r.from ?? 0}–${r.to ?? n.length}`, A.appendChild(D), P.appendChild(A);
  const L = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], k = document.createElement("details");
  k.className = L.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const x = document.createElement("summary");
  x.className = "library-periodical-groups-summary", x.textContent = c("library", "Show top series and periodicals"), k.appendChild(x);
  const G = document.createElement("h3");
  G.textContent = L.length > 0 ? c("library", "Top series and periodicals") : c("library", "No series or periodicals found yet");
  const j = document.createElement("p");
  if (j.className = "library-muted", j.textContent = L.length > 0 ? c("library", "Jump into recurring publications with one click.") : c("library", "Add publication or series names in item details to build this shortcut panel."), k.append(G, j), L.length > 0) {
    const R = document.createElement("ul");
    for (const N of L) {
      const U = document.createElement("li"), J = document.createElement("a");
      J.href = xh(N.publication, N), J.textContent = K(N.publication);
      const C = document.createElement("span");
      C.className = "library-muted", C.textContent = `${N.itemCount} items`, U.append(J, C), R.appendChild(U);
    }
    k.appendChild(R);
  }
  P.appendChild(k);
  const W = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (W.length > 0) {
    const R = document.createElement("details");
    R.className = "library-year-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = c("library", "Show publication years");
    const U = document.createElement("h3");
    U.textContent = c("library", "Top publication years");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = c("library", "Jump into dated books, magazines, journals and comics by year.");
    const C = document.createElement("ul");
    for (const S of W) {
      const d = document.createElement("li"), ee = document.createElement("a");
      ee.href = wh(S, e), ee.textContent = K(S), d.appendChild(ee), C.appendChild(d);
    }
    R.append(N, U, J, C), P.appendChild(R);
  }
  const X = Array.isArray(e.creators) ? e.creators : [];
  if (X.length > 0) {
    const R = document.createElement("details");
    R.className = "library-creator-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = c("library", "Show creators");
    const U = document.createElement("h3");
    U.textContent = c("library", "Top creators");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = c("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const C = document.createElement("ul");
    for (const S of X) {
      const d = document.createElement("li"), ee = document.createElement("a");
      ee.href = Rh(S, e), ee.textContent = K(S), d.appendChild(ee), C.appendChild(d);
    }
    R.append(N, U, J, C), P.appendChild(R);
  }
  if (n.length === 0) {
    const R = document.createElement("div"), N = Number(e.rootCount || 0), U = Number(e.enabledRootCount || 0), J = Oh(e);
    R.className = "library-empty-content", (N === 0 || U === 0) && R.classList.add("library-first-run-guidance"), J && N > 0 && U > 0 && R.classList.add("library-filter-empty-state"), R.setAttribute("role", "status");
    const C = document.createElement("h3"), S = document.createElement("p");
    S.className = "library-muted";
    const d = document.createElement("p");
    d.className = "library-empty-actions", N === 0 ? (C.textContent = c("library", "Start with one Library root"), S.textContent = c("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Bn(d, i, "button primary", c("library", "Add a Library root")), Ph(d, c("library", "Run a scan after saving a root"))) : U === 0 ? (C.textContent = c("library", "No enabled Library roots"), S.textContent = c("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Bn(d, i, "button primary", c("library", "Open Library settings"))) : J ? (C.textContent = c("library", "No matches for the current filters"), S.textContent = c("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Bn(d, Nh(), "button secondary", c("library", "Clear search")), Bn(d, "?", "button primary", c("library", "Clear all filters"))) : (C.textContent = c("library", "No catalogue items yet"), S.textContent = c("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Bn(d, i, "button primary", c("library", "Run a scan from settings"))), R.append(C, S, d), P.appendChild(R);
  } else {
    const R = document.createElement("div");
    R.className = "library-cover-gallery";
    for (const N of n) {
      const U = document.createElement("article");
      U.className = "library-cover-card";
      const J = document.createElement("a");
      J.className = "library-cover-link", J.href = K(N.openUrl || "#"), J.setAttribute("aria-label", `Read ${K(N.title || "publication")}`);
      const C = document.createElement("img");
      C.className = "library-cover-image", C.src = K(N.coverUrl || ""), C.alt = `Cover for ${K(N.title || "publication")}`, C.loading = "lazy", J.appendChild(C);
      const S = An(e), d = document.createElement("form");
      d.method = "post", d.action = K(N.starUrl || ""), d.className = "library-cover-star-form", S && d.appendChild(S);
      const ee = document.createElement("input");
      ee.type = "hidden", ee.name = "returnTo", ee.value = "catalogue";
      const Ue = document.createElement("input");
      Ue.type = "hidden", Ue.name = "starred", Ue.value = N.starred ? "0" : "1";
      const fe = document.createElement("button");
      fe.type = "submit", fe.className = N.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", fe.setAttribute("aria-pressed", N.starred ? "true" : "false"), fe.setAttribute("aria-label", N.starred ? c("library", "Unstar this publication") : c("library", "Star this publication")), fe.title = N.starred ? c("library", "Unstar this publication") : c("library", "Star this publication"), fe.textContent = N.starred ? "★" : "☆", d.append(ee, Ue, fe);
      const ke = document.createElement("div");
      ke.className = "library-cover-summary";
      const Gt = document.createElement("h3");
      if (Gt.textContent = K(N.title || "Untitled publication"), ke.appendChild(Gt), N.creators) {
        const At = document.createElement("p");
        At.className = "library-creator", At.textContent = K(N.creators), ke.appendChild(At);
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
      ke.appendChild(Mt);
      const yn = document.createElement("p"), Ct = document.createElement("a");
      Ct.href = K(N.openUrl || "#"), Ct.textContent = c("library", "Read");
      const xt = document.createElement("a");
      xt.href = K(N.filesUrl || "#"), xt.textContent = c("library", "Show in Files");
      const gn = document.createElement("a");
      gn.href = K(N.downloadUrl || "#"), gn.textContent = c("library", "Download source");
      const _n = document.createElement("a");
      _n.href = K(N.detailsUrl || "#"), _n.textContent = c("library", "Details"), yn.append(Ct, document.createTextNode(" · "), xt, document.createTextNode(" · "), gn, document.createTextNode(" · "), _n), ke.appendChild(yn), U.append(J, d, ke), R.appendChild(U);
    }
    P.appendChild(R);
  }
  return T.appendChild(P), T;
}
if (Ar)
  try {
    cu(Sh, { state: us }).mount(Ar);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Ar.replaceChildren(Ih(us));
  }
//# sourceMappingURL=library-main.mjs.map
