// @__NO_SIDE_EFFECTS__
function Di(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const me = {}, Rn = [], It = () => {
}, uo = () => !1, Dr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ur = (e) => e.startsWith("onUpdate:"), Xe = Object.assign, Ui = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, jl = Object.prototype.hasOwnProperty, de = (e, t) => jl.call(e, t), Z = Array.isArray, Jt = (e) => sr(e) === "[object Map]", mn = (e) => sr(e) === "[object Set]", ps = (e) => sr(e) === "[object Date]", ne = (e) => typeof e == "function", we = (e) => typeof e == "string", Mt = (e) => typeof e == "symbol", he = (e) => e !== null && typeof e == "object", fo = (e) => (he(e) || ne(e)) && ne(e.then) && ne(e.catch), po = Object.prototype.toString, sr = (e) => po.call(e), $l = (e) => sr(e).slice(8, -1), ho = (e) => sr(e) === "[object Object]", Fi = (e) => we(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Kn = /* @__PURE__ */ Di(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Vl = /-\w/g, _t = Fr(
  (e) => e.replace(Vl, (t) => t.slice(1).toUpperCase())
), zl = /\B([A-Z])/g, bn = Fr(
  (e) => e.replace(zl, "-$1").toLowerCase()
), mo = Fr((e) => e.charAt(0).toUpperCase() + e.slice(1)), ni = Fr(
  (e) => e ? `on${mo(e)}` : ""
), kt = (e, t) => !Object.is(e, t), Sr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, bo = (e, t, n, r = !1) => {
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
let hs;
const jr = () => hs || (hs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Hi(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = we(r) ? Kl(r) : Hi(r);
      if (i)
        for (const s in i)
          t[s] = i[s];
    }
    return t;
  } else if (we(e) || he(e))
    return e;
}
const Bl = /;(?![^(]*\))/g, Wl = /:([^]+)/, ql = /\/\*[^]*?\*\//g;
function Kl(e) {
  const t = {};
  return e.replace(ql, "").split(Bl).forEach((n) => {
    if (n) {
      const r = n.split(Wl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function On(e) {
  let t = "";
  if (we(e))
    t = e;
  else if (Z(e))
    for (let n = 0; n < e.length; n++) {
      const r = On(e[n]);
      r && (t += r + " ");
    }
  else if (he(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Gl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Yl = /* @__PURE__ */ Di(Gl);
function yo(e) {
  return !!e || e === "";
}
function Xl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Zt(e[r], t[r]);
  return n;
}
function ms(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const i of e) {
    let s = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && Zt(i, n[o])) {
        s = o;
        break;
      }
    if (s < 0) return !1;
    r[s] = 1;
  }
  return !0;
}
function Zt(e, t) {
  if (e === t) return !0;
  let n = ps(e), r = ps(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Mt(e), r = Mt(t), n || r)
    return e === t;
  if (n = Z(e), r = Z(t), n || r)
    return n && r ? Xl(e, t) : !1;
  if (n = he(e), r = he(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = Jt(e), r = Jt(t), n || r || (n = mn(e), r = mn(t), n || r))
      return n && r ? ms(e, t) : !1;
    const i = Object.keys(e).length, s = Object.keys(t).length;
    if (i !== s)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Zt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Jl(e, t) {
  return e.findIndex((n) => Zt(n, t));
}
const go = (e) => !!(e && e.__v_isRef === !0), b = (e) => we(e) ? e : e == null ? "" : Z(e) || he(e) && (e.toString === po || !ne(e.toString)) ? go(e) ? b(e.value) : JSON.stringify(e, _o, 2) : String(e), _o = (e, t) => go(t) ? _o(e, t.value) : Jt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], s) => (n[ri(r, s) + " =>"] = i, n),
    {}
  )
} : mn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ri(n))
} : Mt(t) ? ri(t) : he(t) && !Z(t) && !ho(t) ? String(t) : t, ri = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Mt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let je;
class Zl {
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
function Ql() {
  return je;
}
let ye;
const ii = /* @__PURE__ */ new WeakSet();
class vo {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || To(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, bs(this), So(this);
    const t = ye, n = vt;
    ye = this, vt = !0;
    try {
      return this.fn();
    } finally {
      xo(this), ye = t, vt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Vi(t);
      this.deps = this.depsTail = void 0, bs(this), this.onStop && this.onStop(), this.flags &= -2;
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
let Eo = 0, Gn, Yn;
function To(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Yn, Yn = e;
    return;
  }
  e.next = Gn, Gn = e;
}
function ji() {
  Eo++;
}
function $i() {
  if (--Eo > 0)
    return;
  if (Yn) {
    let t = Yn;
    for (Yn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Gn; ) {
    let t = Gn;
    for (Gn = void 0; t; ) {
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
function So(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function xo(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Vi(r), ea(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function xi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Co(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Co(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Qn) || (e.globalVersion = Qn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !xi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ye, r = vt;
  ye = e, vt = !0;
  try {
    So(e);
    const i = e.fn(e._value);
    (t.version === 0 || kt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ye = n, vt = r, xo(e), e.flags &= -3;
  }
}
function Vi(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Vi(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ea(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let vt = !0;
const Ao = [];
function zt() {
  Ao.push(vt), vt = !1;
}
function Bt() {
  const e = Ao.pop();
  vt = e === void 0 ? !0 : e;
}
function bs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ye;
    ye = void 0;
    try {
      t();
    } finally {
      ye = n;
    }
  }
}
let Qn = 0;
class ta {
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
    if (!ye || !vt || ye === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ye)
      n = this.activeLink = new ta(ye, this), ye.deps ? (n.prevDep = ye.depsTail, ye.depsTail.nextDep = n, ye.depsTail = n) : ye.deps = ye.depsTail = n, wo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ye.depsTail, n.nextDep = void 0, ye.depsTail.nextDep = n, ye.depsTail = n, ye.deps === n && (ye.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Qn++, this.notify(t);
  }
  notify(t) {
    ji();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      $i();
    }
  }
}
function wo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        wo(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ci = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ Symbol(
  ""
), Ai = /* @__PURE__ */ Symbol(
  ""
), er = /* @__PURE__ */ Symbol(
  ""
);
function Ge(e, t, n) {
  if (vt && ye) {
    let r = Ci.get(e);
    r || Ci.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new zi()), i.map = r, i.key = n), i.track();
  }
}
function jt(e, t, n, r, i, s) {
  const o = Ci.get(e);
  if (!o) {
    Qn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (ji(), t === "clear")
    o.forEach(l);
  else {
    const c = Z(e), _ = c && Fi(n);
    if (c && n === "length") {
      const m = Number(r);
      o.forEach((S, P) => {
        (P === "length" || P === er || !Mt(P) && P >= m) && l(S);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), _ && l(o.get(er)), t) {
        case "add":
          c ? _ && l(o.get("length")) : (l(o.get(dn)), Jt(e) && l(o.get(Ai)));
          break;
        case "delete":
          c || (l(o.get(dn)), Jt(e) && l(o.get(Ai)));
          break;
        case "set":
          Jt(e) && l(o.get(dn));
          break;
      }
  }
  $i();
}
function Sn(e) {
  const t = /* @__PURE__ */ fe(e);
  return t === e ? t : (Ge(t, "iterate", er), /* @__PURE__ */ yt(e) ? t : t.map(Et));
}
function $r(e) {
  return Ge(e = /* @__PURE__ */ fe(e), "iterate", er), e;
}
function Pt(e, t) {
  return /* @__PURE__ */ Wt(e) ? kn(/* @__PURE__ */ pn(e) ? Et(t) : t) : Et(t);
}
const na = {
  __proto__: null,
  [Symbol.iterator]() {
    return si(this, Symbol.iterator, (e) => Pt(this, e));
  },
  concat(...e) {
    return Sn(this).concat(
      ...e.map((t) => Z(t) ? Sn(t) : t)
    );
  },
  entries() {
    return si(this, "entries", (e) => (e[1] = Pt(this, e[1]), e));
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
    return oi(this, "includes", e);
  },
  indexOf(...e) {
    return oi(this, "indexOf", e);
  },
  join(e) {
    return Sn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return oi(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ut(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Fn(this, "pop");
  },
  push(...e) {
    return Fn(this, "push", e);
  },
  reduce(e, ...t) {
    return ys(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ys(this, "reduceRight", e, t);
  },
  shift() {
    return Fn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ut(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Fn(this, "splice", e);
  },
  toReversed() {
    return Sn(this).toReversed();
  },
  toSorted(e) {
    return Sn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Sn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Fn(this, "unshift", e);
  },
  values() {
    return si(this, "values", (e) => Pt(this, e));
  }
};
function si(e, t, n) {
  const r = $r(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ yt(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = n(s.value)), s;
  }), i;
}
const ra = Array.prototype;
function Ut(e, t, n, r, i, s) {
  const o = $r(e), l = o !== e && !/* @__PURE__ */ yt(e), c = o[t];
  if (c !== ra[t]) {
    const S = c.apply(e, s);
    return l ? Et(S) : S;
  }
  let _ = n;
  o !== e && (l ? _ = function(S, P) {
    return n.call(this, Pt(e, S), P, e);
  } : n.length > 2 && (_ = function(S, P) {
    return n.call(this, S, P, e);
  }));
  const m = c.call(o, _, r);
  return l && i ? i(m) : m;
}
function ys(e, t, n, r) {
  const i = $r(e), s = i !== e && !/* @__PURE__ */ yt(e);
  let o = n, l = !1;
  i !== e && (s ? (l = r.length === 0, o = function(_, m, S) {
    return l && (l = !1, _ = Pt(e, _)), n.call(this, _, Pt(e, m), S, e);
  }) : n.length > 3 && (o = function(_, m, S) {
    return n.call(this, _, m, S, e);
  }));
  const c = i[t](o, ...r);
  return l ? Pt(e, c) : c;
}
function oi(e, t, n) {
  const r = /* @__PURE__ */ fe(e);
  Ge(r, "iterate", er);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ qi(n[0]) ? (n[0] = /* @__PURE__ */ fe(n[0]), r[t](...n)) : i;
}
function Fn(e, t, n = []) {
  zt(), ji();
  const r = (/* @__PURE__ */ fe(e))[t].apply(e, n);
  return $i(), Bt(), r;
}
const ia = /* @__PURE__ */ Di("__proto__,__v_isRef,__isVue"), Ro = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Mt)
);
function sa(e) {
  Mt(e) || (e = String(e));
  const t = /* @__PURE__ */ fe(this);
  return Ge(t, "has", e), t.hasOwnProperty(e);
}
class Oo {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (i ? s ? ma : ko : s ? Lo : Po).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = Z(t);
    if (!i) {
      let c;
      if (o && (c = na[n]))
        return c;
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
    if ((Mt(n) ? Ro.has(n) : ia(n)) || (i || Ge(t, "get", n), s))
      return l;
    if (/* @__PURE__ */ Ye(l)) {
      const c = o && Fi(n) ? l : l.value;
      return i && he(c) ? /* @__PURE__ */ Ri(c) : c;
    }
    return he(l) ? i ? /* @__PURE__ */ Ri(l) : /* @__PURE__ */ un(l) : l;
  }
}
class No extends Oo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let s = t[n];
    const o = Z(t) && Fi(n);
    if (!this._isShallow) {
      const _ = /* @__PURE__ */ Wt(s);
      if (!/* @__PURE__ */ yt(r) && !/* @__PURE__ */ Wt(r) && (s = /* @__PURE__ */ fe(s), r = /* @__PURE__ */ fe(r)), !o && /* @__PURE__ */ Ye(s) && !/* @__PURE__ */ Ye(r))
        return _ || (s.value = r), !0;
    }
    const l = o ? Number(n) < t.length : de(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Ye(t) ? t : i
    );
    return t === /* @__PURE__ */ fe(i) && c && (l ? kt(r, s) && jt(t, "set", n, r) : jt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = de(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && jt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Mt(n) || !Ro.has(n)) && Ge(t, "has", n), r;
  }
  ownKeys(t) {
    return Ge(
      t,
      "iterate",
      Z(t) ? "length" : dn
    ), Reflect.ownKeys(t);
  }
}
class oa extends Oo {
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
const la = /* @__PURE__ */ new No(), aa = /* @__PURE__ */ new oa(), ca = /* @__PURE__ */ new No(!0);
const wi = (e) => e, br = (e) => Reflect.getPrototypeOf(e);
function ua(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, s = /* @__PURE__ */ fe(i), o = Jt(s), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, _ = i[e](...r), m = n ? wi : t ? kn : Et;
    return !t && Ge(
      s,
      "iterate",
      c ? Ai : dn
    ), Xe(
      // inheriting all iterator properties
      Object.create(_),
      {
        // iterator protocol
        next() {
          const { value: S, done: P } = _.next();
          return P ? { value: S, done: P } : {
            value: l ? [m(S[0]), m(S[1])] : m(S),
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
function fa(e, t) {
  const n = {
    get(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ fe(s), l = /* @__PURE__ */ fe(i);
      e || (kt(i, l) && Ge(o, "get", i), Ge(o, "get", l));
      const { has: c } = br(o), _ = t ? wi : e ? kn : Et;
      if (c.call(o, i))
        return _(s.get(i));
      if (c.call(o, l))
        return _(s.get(l));
      s !== o && s.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ge(/* @__PURE__ */ fe(i), "iterate", dn), i.size;
    },
    has(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ fe(s), l = /* @__PURE__ */ fe(i);
      return e || (kt(i, l) && Ge(o, "has", i), Ge(o, "has", l)), i === l ? s.has(i) : s.has(i) || s.has(l);
    },
    forEach(i, s) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ fe(l), _ = t ? wi : e ? kn : Et;
      return !e && Ge(c, "iterate", dn), l.forEach((m, S) => i.call(s, _(m), _(S), o));
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
        const s = /* @__PURE__ */ fe(this), o = br(s), l = /* @__PURE__ */ fe(i), c = !t && !/* @__PURE__ */ yt(i) && !/* @__PURE__ */ Wt(i) ? l : i;
        return o.has.call(s, c) || kt(i, c) && o.has.call(s, i) || kt(l, c) && o.has.call(s, l) || (s.add(c), jt(s, "add", c, c)), this;
      },
      set(i, s) {
        !t && !/* @__PURE__ */ yt(s) && !/* @__PURE__ */ Wt(s) && (s = /* @__PURE__ */ fe(s));
        const o = /* @__PURE__ */ fe(this), { has: l, get: c } = br(o);
        let _ = l.call(o, i);
        _ || (i = /* @__PURE__ */ fe(i), _ = l.call(o, i));
        const m = c.call(o, i);
        return o.set(i, s), _ ? kt(s, m) && jt(o, "set", i, s) : jt(o, "add", i, s), this;
      },
      delete(i) {
        const s = /* @__PURE__ */ fe(this), { has: o, get: l } = br(s);
        let c = o.call(s, i);
        c || (i = /* @__PURE__ */ fe(i), c = o.call(s, i)), l && l.call(s, i);
        const _ = s.delete(i);
        return c && jt(s, "delete", i, void 0), _;
      },
      clear() {
        const i = /* @__PURE__ */ fe(this), s = i.size !== 0, o = i.clear();
        return s && jt(
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
    n[i] = ua(i, e, t);
  }), n;
}
function Bi(e, t) {
  const n = fa(e, t);
  return (r, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    de(n, i) && i in r ? n : r,
    i,
    s
  );
}
const da = {
  get: /* @__PURE__ */ Bi(!1, !1)
}, pa = {
  get: /* @__PURE__ */ Bi(!1, !0)
}, ha = {
  get: /* @__PURE__ */ Bi(!0, !1)
};
const Po = /* @__PURE__ */ new WeakMap(), Lo = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ new WeakMap();
function ba(e) {
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
  return /* @__PURE__ */ Wt(e) ? e : Wi(
    e,
    !1,
    la,
    da,
    Po
  );
}
// @__NO_SIDE_EFFECTS__
function ya(e) {
  return Wi(
    e,
    !1,
    ca,
    pa,
    Lo
  );
}
// @__NO_SIDE_EFFECTS__
function Ri(e) {
  return Wi(
    e,
    !0,
    aa,
    ha,
    ko
  );
}
function Wi(e, t, n, r, i) {
  if (!he(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const o = ba($l(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
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
function qi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function fe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ fe(t) : e;
}
function ga(e) {
  return !de(e, "__v_skip") && Object.isExtensible(e) && bo(e, "__v_skip", !0), e;
}
const Et = (e) => he(e) ? /* @__PURE__ */ un(e) : e, kn = (e) => he(e) ? /* @__PURE__ */ Ri(e) : e;
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function _a(e) {
  return va(e, !1);
}
function va(e, t) {
  return /* @__PURE__ */ Ye(e) ? e : new Ea(e, t);
}
class Ea {
  constructor(t, n) {
    this.dep = new zi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ fe(t), this._value = n ? t : Et(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ yt(t) || /* @__PURE__ */ Wt(t);
    t = r ? t : /* @__PURE__ */ fe(t), kt(t, n) && (this._rawValue = t, this._value = r ? t : Et(t), this.dep.trigger());
  }
}
function v(e) {
  return /* @__PURE__ */ Ye(e) ? e.value : e;
}
const Ta = {
  get: (e, t, n) => t === "__v_raw" ? e : v(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ Ye(i) && !/* @__PURE__ */ Ye(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Io(e) {
  return /* @__PURE__ */ pn(e) ? e : new Proxy(e, Ta);
}
class Sa {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new zi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ye !== this)
      return To(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Co(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function xa(e, t, n = !1) {
  let r, i;
  return ne(e) ? r = e : (r = e.get, i = e.set), new Sa(r, i, n);
}
const gr = {}, wr = /* @__PURE__ */ new WeakMap();
let ln;
function Ca(e, t = !1, n = ln) {
  if (n) {
    let r = wr.get(n);
    r || wr.set(n, r = []), r.push(e);
  }
}
function Aa(e, t, n = me) {
  const { immediate: r, deep: i, once: s, scheduler: o, augmentJob: l, call: c } = n, _ = ($) => i ? $ : /* @__PURE__ */ yt($) || i === !1 || i === 0 ? $t($, 1) : $t($);
  let m, S, P, z, ee = !1, B = !1;
  if (/* @__PURE__ */ Ye(e) ? (S = () => e.value, ee = /* @__PURE__ */ yt(e)) : /* @__PURE__ */ pn(e) ? (S = () => _(e), ee = !0) : Z(e) ? (B = !0, ee = e.some(($) => /* @__PURE__ */ pn($) || /* @__PURE__ */ yt($)), S = () => e.map(($) => {
    if (/* @__PURE__ */ Ye($))
      return $.value;
    if (/* @__PURE__ */ pn($))
      return _($);
    if (ne($))
      return c ? c($, 2) : $();
  })) : ne(e) ? t ? S = c ? () => c(e, 2) : e : S = () => {
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
      return c ? c(e, 3, [z]) : e(z);
    } finally {
      ln = $;
    }
  } : S = It, t && i) {
    const $ = S, oe = i === !0 ? 1 / 0 : i;
    S = () => $t($(), oe);
  }
  const te = Ql(), q = () => {
    m.stop(), te && te.active && Ui(te.effects, m);
  };
  if (s && t) {
    const $ = t;
    t = (...oe) => {
      const xe = $(...oe);
      return q(), xe;
    };
  }
  let D = B ? new Array(e.length).fill(gr) : gr;
  const J = ($) => {
    if (!(!(m.flags & 1) || !m.dirty && !$))
      if (t) {
        const oe = m.run();
        if ($ || i || ee || (B ? oe.some((xe, Ce) => kt(xe, D[Ce])) : kt(oe, D))) {
          P && P();
          const xe = ln;
          ln = m;
          try {
            const Ce = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              D === gr ? void 0 : B && D[0] === gr ? [] : D,
              z
            ];
            D = oe, c ? c(t, 3, Ce) : (
              // @ts-expect-error
              t(...Ce)
            );
          } finally {
            ln = xe;
          }
        }
      } else
        m.run();
  };
  return l && l(J), m = new vo(S), m.scheduler = o ? () => o(J, !1) : J, z = ($) => Ca($, !1, m), P = m.onStop = () => {
    const $ = wr.get(m);
    if ($) {
      if (c)
        c($, 4);
      else
        for (const oe of $) oe();
      wr.delete(m);
    }
  }, t ? r ? J(!0) : D = m.run() : o ? o(J.bind(null, !0), !0) : m.run(), q.pause = m.pause.bind(m), q.resume = m.resume.bind(m), q.stop = q, q;
}
function $t(e, t = 1 / 0, n) {
  if (t <= 0 || !he(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ye(e))
    $t(e.value, t, n);
  else if (Z(e))
    for (let r = 0; r < e.length; r++)
      $t(e[r], t, n);
  else if (mn(e) || Jt(e))
    e.forEach((r) => {
      $t(r, t, n);
    });
  else if (ho(e)) {
    for (const r in e)
      $t(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && $t(e[r], t, n);
  }
  return e;
}
function or(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    Vr(i, t, n);
  }
}
function Tt(e, t, n, r) {
  if (ne(e)) {
    const i = or(e, t, n, r);
    return i && fo(i) && i.catch((s) => {
      Vr(s, t, n);
    }), i;
  }
  if (Z(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++)
      i.push(Tt(e[s], t, n, r));
    return i;
  }
}
function Vr(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = t && t.appContext.config || me;
  if (t) {
    let l = t.parent;
    const c = t.proxy, _ = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const m = l.ec;
      if (m) {
        for (let S = 0; S < m.length; S++)
          if (m[S](e, c, _) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      zt(), or(s, null, 10, [
        e,
        c,
        _
      ]), Bt();
      return;
    }
  }
  wa(e, n, i, r, o);
}
function wa(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const nt = [];
let Nt = -1;
const Nn = [];
let Xt = null, An = 0;
const Mo = /* @__PURE__ */ Promise.resolve();
let Rr = null;
function Do(e) {
  const t = Rr || Mo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ra(e) {
  let t = Nt + 1, n = nt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = nt[r], s = tr(i);
    s < e || s === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Ki(e) {
  if (!(e.flags & 1)) {
    const t = tr(e), n = nt[nt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= tr(n) ? nt.push(e) : nt.splice(Ra(t), 0, e), e.flags |= 1, Uo();
  }
}
function Uo() {
  Rr || (Rr = Mo.then(Ho));
}
function Oa(e) {
  if (!Z(e))
    Xt && e.id === -1 ? Xt.splice(An + 1, 0, e) : e.flags & 1 || (Nn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Nn.push(e[t]);
  Uo();
}
function gs(e, t, n = Nt + 1) {
  for (; n < nt.length; n++) {
    const r = nt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      nt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Fo(e) {
  if (Nn.length) {
    const t = [...new Set(Nn)].sort(
      (n, r) => tr(n) - tr(r)
    );
    if (Nn.length = 0, Xt) {
      for (let n = 0; n < t.length; n++)
        Xt.push(t[n]);
      return;
    }
    for (Xt = t, An = 0; An < Xt.length; An++) {
      const n = Xt[An];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Xt = null, An = 0;
  }
}
const tr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ho(e) {
  try {
    for (Nt = 0; Nt < nt.length; Nt++) {
      const t = nt[Nt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), or(
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
    Nt = -1, nt.length = 0, Fo(), Rr = null, (nt.length || Nn.length) && Ho();
  }
}
let bt = null, jo = null;
function Or(e) {
  const t = bt;
  return bt = e, jo = e && e.type.__scopeId || null, t;
}
function Na(e, t = bt, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && Os(-1);
    const s = Or(t), o = hn.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let c = hn.length; c > o; c--) dl();
      Or(s), r._d && Os(1);
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
    let [s, o, l, c = me] = t[i];
    s && (ne(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && $t(o), r.push({
      dir: s,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function rn(e, t, n, r) {
  const i = e.dirs, s = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    s && (l.oldValue = s[o].value);
    let c = l.dir[r];
    c && (zt(), Tt(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Bt());
  }
}
function Pa(e, t) {
  if (rt) {
    let n = rt.provides;
    const r = rt.parent && rt.parent.provides;
    r === n && (n = rt.provides = Object.create(r)), n[e] = t;
  }
}
function xr(e, t, n = !1) {
  const r = wc();
  if (r || Pn) {
    let i = Pn ? Pn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && ne(t) ? t.call(r && r.proxy) : t;
  }
}
const La = /* @__PURE__ */ Symbol.for("v-scx"), ka = () => xr(La);
function li(e, t, n) {
  return $o(e, t, n);
}
function $o(e, t, n = me) {
  const { immediate: r, deep: i, flush: s, once: o } = n, l = Xe({}, n), c = t && r || !t && s !== "post";
  let _;
  if (ir) {
    if (s === "sync") {
      const z = ka();
      _ = z.__watcherHandles || (z.__watcherHandles = []);
    } else if (!c) {
      const z = () => {
      };
      return z.stop = It, z.resume = It, z.pause = It, z;
    }
  }
  const m = rt;
  l.call = (z, ee, B) => Tt(z, m, ee, B);
  let S = !1;
  s === "post" ? l.scheduler = (z) => {
    at(z, m && m.suspense);
  } : s !== "sync" && (S = !0, l.scheduler = (z, ee) => {
    ee ? z() : Ki(z);
  }), l.augmentJob = (z) => {
    t && (z.flags |= 4), S && (z.flags |= 2, m && (z.id = m.uid, z.i = m));
  };
  const P = Aa(e, t, l);
  return ir && (_ ? _.push(P) : c && P()), P;
}
function Ia(e, t, n) {
  const r = this.proxy, i = we(e) ? e.includes(".") ? Vo(r, e) : () => r[e] : e.bind(r, r);
  let s;
  ne(t) ? s = t : (s = t.handler, n = t);
  const o = lr(this), l = $o(i, s.bind(r), n);
  return o(), l;
}
function Vo(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const Ma = /* @__PURE__ */ Symbol("_vte"), zr = (e) => e.__isTeleport, ai = /* @__PURE__ */ Symbol("_leaveCb");
function Da(e) {
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
function zo(e) {
  if (!Yi(e))
    return zr(e.type) && e.children ? Da(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ne(n.default))
      return n.default();
  }
}
function Gi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Gi(
      zr(n.type) && zo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Bo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function _s(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Nr = /* @__PURE__ */ new WeakMap();
function Xn(e, t, n, r, i = !1) {
  if (Z(e)) {
    e.forEach(
      (B, te) => Xn(
        B,
        t && (Z(t) ? t[te] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (Jn(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Xn(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? Kr(r.component) : r.el, o = i ? null : s, { i: l, r: c } = e, _ = t && t.r, m = l.refs === me ? l.refs = {} : l.refs, S = l.setupState, P = /* @__PURE__ */ fe(S), z = S === me ? uo : (B) => _s(m, B) ? !1 : de(P, B), ee = (B, te) => !(te && _s(m, te));
  if (_ != null && _ !== c) {
    if (vs(t), we(_))
      m[_] = null, z(_) && (S[_] = null);
    else if (/* @__PURE__ */ Ye(_)) {
      const B = t;
      ee(_, B.k) && (_.value = null), B.k && (m[B.k] = null);
    }
  }
  if (ne(c))
    or(c, l, 12, [o, m]);
  else {
    const B = we(c), te = /* @__PURE__ */ Ye(c);
    if (B || te) {
      const q = () => {
        if (e.f) {
          const D = B ? z(c) ? S[c] : m[c] : ee() || !e.k ? c.value : m[e.k];
          if (i)
            Z(D) && Ui(D, s);
          else if (Z(D))
            D.includes(s) || D.push(s);
          else if (B)
            m[c] = [s], z(c) && (S[c] = m[c]);
          else {
            const J = [s];
            ee(c, e.k) && (c.value = J), e.k && (m[e.k] = J);
          }
        } else B ? (m[c] = o, z(c) && (S[c] = o)) : te && (ee(c, e.k) && (c.value = o), e.k && (m[e.k] = o));
      };
      if (o) {
        const D = () => {
          q(), Nr.delete(e);
        };
        D.id = -1, Nr.set(e, D), at(D, n);
      } else
        vs(e), q();
    }
  }
}
function vs(e) {
  const t = Nr.get(e);
  t && (t.flags |= 8, Nr.delete(e));
}
jr().requestIdleCallback;
jr().cancelIdleCallback;
const Jn = (e) => !!e.type.__asyncLoader, Yi = (e) => e.type.__isKeepAlive;
function Ua(e, t) {
  Wo(e, "a", t);
}
function Fa(e, t) {
  Wo(e, "da", t);
}
function Wo(e, t, n = rt) {
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
      Yi(i.parent.vnode) && Ha(r, t, n, i), i = i.parent;
  }
}
function Ha(e, t, n, r) {
  const i = Br(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Go(() => {
    Ui(r[t], i);
  }, n);
}
function Br(e, t, n = rt, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...o) => {
      zt();
      const l = lr(n), c = Tt(t, n, e, o);
      return l(), Bt(), c;
    });
    return r ? i.unshift(s) : i.push(s), s;
  }
}
const Kt = (e) => (t, n = rt) => {
  (!ir || e === "sp") && Br(e, (...r) => t(...r), n);
}, ja = Kt("bm"), qo = Kt("m"), $a = Kt(
  "bu"
), Va = Kt("u"), Ko = Kt(
  "bum"
), Go = Kt("um"), za = Kt(
  "sp"
), Ba = Kt("rtg"), Wa = Kt("rtc");
function qa(e, t = rt) {
  Br("ec", e, t);
}
const Ka = /* @__PURE__ */ Symbol.for("v-ndc");
function Se(e, t, n, r) {
  let i;
  const s = n, o = Z(e);
  if (o || we(e)) {
    const l = o && /* @__PURE__ */ pn(e);
    let c = !1, _ = !1;
    l && (c = !/* @__PURE__ */ yt(e), _ = /* @__PURE__ */ Wt(e), e = $r(e)), i = new Array(e.length);
    for (let m = 0, S = e.length; m < S; m++)
      i[m] = t(
        c ? _ ? kn(Et(e[m])) : Et(e[m]) : e[m],
        m,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, s);
  } else if (he(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, c) => t(l, c, void 0, s)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let c = 0, _ = l.length; c < _; c++) {
        const m = l[c];
        i[c] = t(e[m], m, c, s);
      }
    }
  else
    i = [];
  return i;
}
const Oi = (e) => e ? bl(e) ? Kr(e) : Oi(e.parent) : null, Zn = (
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
    $parent: (e) => Oi(e.parent),
    $root: (e) => Oi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Xo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ki(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Do.bind(e.proxy)),
    $watch: (e) => Ia.bind(e)
  })
), ci = (e, t) => e !== me && !e.__isScriptSetup && de(e, t), Ga = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: s, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const P = o[t];
      if (P !== void 0)
        switch (P) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (ci(r, t))
          return o[t] = 1, r[t];
        if (i !== me && de(i, t))
          return o[t] = 2, i[t];
        if (de(s, t))
          return o[t] = 3, s[t];
        if (n !== me && de(n, t))
          return o[t] = 4, n[t];
        Ni && (o[t] = 0);
      }
    }
    const _ = Zn[t];
    let m, S;
    if (_)
      return t === "$attrs" && Ge(e.attrs, "get", ""), _(e);
    if (
      // css module (injected by vue-loader)
      (m = l.__cssModules) && (m = m[t])
    )
      return m;
    if (n !== me && de(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      S = c.config.globalProperties, de(S, t)
    )
      return S[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: s } = e;
    return ci(i, t) ? (i[t] = n, !0) : r !== me && de(r, t) ? (r[t] = n, !0) : de(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: s, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== me && l[0] !== "$" && de(e, l) || ci(t, l) || de(s, l) || de(r, l) || de(Zn, l) || de(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : de(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Es(e) {
  return Z(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Ni = !0;
function Ya(e) {
  const t = Xo(e), n = e.proxy, r = e.ctx;
  Ni = !1, t.beforeCreate && Ts(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: o,
    watch: l,
    provide: c,
    inject: _,
    // lifecycle
    created: m,
    beforeMount: S,
    mounted: P,
    beforeUpdate: z,
    updated: ee,
    activated: B,
    deactivated: te,
    beforeDestroy: q,
    beforeUnmount: D,
    destroyed: J,
    unmounted: $,
    render: oe,
    renderTracked: xe,
    renderTriggered: Ce,
    errorCaptured: Ae,
    serverPrefetch: ve,
    // public API
    expose: Re,
    inheritAttrs: $e,
    // assets
    components: it,
    directives: Ve,
    filters: ze
  } = t;
  if (_ && Xa(_, r, null), o)
    for (const le in o) {
      const re = o[le];
      ne(re) && (r[le] = re.bind(n));
    }
  if (i) {
    const le = i.call(n, n);
    he(le) && (e.data = /* @__PURE__ */ un(le));
  }
  if (Ni = !0, s)
    for (const le in s) {
      const re = s[le], Ie = ne(re) ? re.bind(n, n) : ne(re.get) ? re.get.bind(n, n) : It, Ue = !ne(re) && ne(re.set) ? re.set.bind(n) : It, Be = ie({
        get: Ie,
        set: Ue
      });
      Object.defineProperty(r, le, {
        enumerable: !0,
        configurable: !0,
        get: () => Be.value,
        set: (Oe) => Be.value = Oe
      });
    }
  if (l)
    for (const le in l)
      Yo(l[le], r, n, le);
  if (c) {
    const le = ne(c) ? c.call(n) : c;
    Reflect.ownKeys(le).forEach((re) => {
      Pa(re, le[re]);
    });
  }
  m && Ts(m, e, "c");
  function ge(le, re) {
    Z(re) ? re.forEach((Ie) => le(Ie.bind(n))) : re && le(re.bind(n));
  }
  if (ge(ja, S), ge(qo, P), ge($a, z), ge(Va, ee), ge(Ua, B), ge(Fa, te), ge(qa, Ae), ge(Wa, xe), ge(Ba, Ce), ge(Ko, D), ge(Go, $), ge(za, ve), Z(Re))
    if (Re.length) {
      const le = e.exposed || (e.exposed = {});
      Re.forEach((re) => {
        Object.defineProperty(le, re, {
          get: () => n[re],
          set: (Ie) => n[re] = Ie,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  oe && e.render === It && (e.render = oe), $e != null && (e.inheritAttrs = $e), it && (e.components = it), Ve && (e.directives = Ve), ve && Bo(e);
}
function Xa(e, t, n = It) {
  Z(e) && (e = Pi(e));
  for (const r in e) {
    const i = e[r];
    let s;
    he(i) ? "default" in i ? s = xr(
      i.from || r,
      i.default,
      !0
    ) : s = xr(i.from || r) : s = xr(i), /* @__PURE__ */ Ye(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : t[r] = s;
  }
}
function Ts(e, t, n) {
  Tt(
    Z(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Yo(e, t, n, r) {
  let i = r.includes(".") ? Vo(n, r) : () => n[r];
  if (we(e)) {
    const s = t[e];
    ne(s) && li(i, s);
  } else if (ne(e))
    li(i, e.bind(n));
  else if (he(e))
    if (Z(e))
      e.forEach((s) => Yo(s, t, n, r));
    else {
      const s = ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      ne(s) && li(i, s, e);
    }
}
function Xo(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = s.get(t);
  let c;
  return l ? c = l : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach(
    (_) => Pr(c, _, o, !0)
  ), Pr(c, t, o)), he(t) && s.set(t, c), c;
}
function Pr(e, t, n, r = !1) {
  const { mixins: i, extends: s } = t;
  s && Pr(e, s, n, !0), i && i.forEach(
    (o) => Pr(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = Ja[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Ja = {
  data: Ss,
  props: xs,
  emits: xs,
  // objects
  methods: Bn,
  computed: Bn,
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
  components: Bn,
  directives: Bn,
  // watch
  watch: Qa,
  // provide / inject
  provide: Ss,
  inject: Za
};
function Ss(e, t) {
  return t ? e ? function() {
    return Xe(
      ne(e) ? e.call(this, this) : e,
      ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Za(e, t) {
  return Bn(Pi(e), Pi(t));
}
function Pi(e) {
  if (Z(e)) {
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
function Bn(e, t) {
  return e ? Xe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function xs(e, t) {
  return e ? Z(e) && Z(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Xe(
    /* @__PURE__ */ Object.create(null),
    Es(e),
    Es(t ?? {})
  ) : t;
}
function Qa(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Xe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = tt(e[r], t[r]);
  return n;
}
function Jo() {
  return {
    app: null,
    config: {
      isNativeTag: uo,
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
let ec = 0;
function tc(e, t) {
  return function(r, i = null) {
    ne(r) || (r = Xe({}, r)), i != null && !he(i) && (i = null);
    const s = Jo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const _ = s.app = {
      _uid: ec++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: kc,
      get config() {
        return s.config;
      },
      set config(m) {
      },
      use(m, ...S) {
        return o.has(m) || (m && ne(m.install) ? (o.add(m), m.install(_, ...S)) : ne(m) && (o.add(m), m(_, ...S))), _;
      },
      mixin(m) {
        return s.mixins.includes(m) || s.mixins.push(m), _;
      },
      component(m, S) {
        return S ? (s.components[m] = S, _) : s.components[m];
      },
      directive(m, S) {
        return S ? (s.directives[m] = S, _) : s.directives[m];
      },
      mount(m, S, P) {
        if (!c) {
          const z = _._ceVNode || Vt(r, i);
          return z.appContext = s, P === !0 ? P = "svg" : P === !1 && (P = void 0), e(z, m, P), c = !0, _._container = m, m.__vue_app__ = _, Kr(z.component);
        }
      },
      onUnmount(m) {
        l.push(m);
      },
      unmount() {
        c && (Tt(
          l,
          _._instance,
          16
        ), e(null, _._container), delete _._container.__vue_app__);
      },
      provide(m, S) {
        return s.provides[m] = S, _;
      },
      runWithContext(m) {
        const S = Pn;
        Pn = _;
        try {
          return m();
        } finally {
          Pn = S;
        }
      }
    };
    return _;
  };
}
let Pn = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_t(t)}Modifiers`] || e[`${bn(t)}Modifiers`];
function rc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || me;
  let i = n;
  const s = t.startsWith("update:"), o = s && nc(r, t.slice(7));
  o && (o.trim && (i = n.map((m) => we(m) ? m.trim() : m)), o.number && (i = i.map(Hr)));
  let l, c = r[l = ni(t)] || // also try camelCase event handler (#2249)
  r[l = ni(_t(t))];
  !c && s && (c = r[l = ni(bn(t))]), c && Tt(
    c,
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
    e.emitted[l] = !0, Tt(
      _,
      e,
      6,
      i
    );
  }
}
const ic = /* @__PURE__ */ new WeakMap();
function Zo(e, t, n = !1) {
  const r = n ? ic : t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const s = e.emits;
  let o = {}, l = !1;
  if (!ne(e)) {
    const c = (_) => {
      const m = Zo(_, t, !0);
      m && (l = !0, Xe(o, m));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !s && !l ? (he(e) && r.set(e, null), null) : (Z(s) ? s.forEach((c) => o[c] = null) : Xe(o, s), he(e) && r.set(e, o), o);
}
function Wr(e, t) {
  return !e || !Dr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), de(e, t[0].toLowerCase() + t.slice(1)) || de(e, bn(t)) || de(e, t));
}
function Cs(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [s],
    slots: o,
    attrs: l,
    emit: c,
    render: _,
    renderCache: m,
    props: S,
    data: P,
    setupState: z,
    ctx: ee,
    inheritAttrs: B
  } = e, te = Or(e);
  let q, D;
  try {
    if (n.shapeFlag & 4) {
      const $ = i || r, oe = $;
      q = Lt(
        _.call(
          oe,
          $,
          m,
          S,
          z,
          P,
          ee
        )
      ), D = l;
    } else {
      const $ = t;
      q = Lt(
        $.length > 1 ? $(
          S,
          { attrs: l, slots: o, emit: c }
        ) : $(
          S,
          null
        )
      ), D = t.props ? l : sc(l);
    }
  } catch ($) {
    hn.length = 0, Vr($, e, 1), q = Vt(qt);
  }
  let J = q;
  if (D && B !== !1) {
    const $ = Object.keys(D), { shapeFlag: oe } = J;
    $.length && oe & 7 && (s && $.some(Ur) && (D = oc(
      D,
      s
    )), J = In(J, D, !1, !0));
  }
  if (n.dirs && (J = In(J, null, !1, !0), J.dirs = J.dirs ? J.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const $ = zr(J.type) && zo(J) || J;
    Gi($, n.transition);
  }
  return q = J, Or(te), q;
}
const sc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Dr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, oc = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ur(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function lc(e, t, n) {
  const { props: r, children: i, component: s } = e, { props: o, children: l, patchFlag: c } = t, _ = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? As(r, o, _) : !!o;
    if (c & 8) {
      const m = t.dynamicProps;
      for (let S = 0; S < m.length; S++) {
        const P = m[S];
        if (Qo(o, r, P) && !Wr(_, P))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? As(r, o, _) : !0 : !!o;
  return !1;
}
function As(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (Qo(t, e, s) && !Wr(n, s))
      return !0;
  }
  return !1;
}
function Qo(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && he(r) && he(i) ? !Zt(r, i) : r !== i;
}
function ac({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const el = {}, tl = () => Object.create(el), nl = (e) => Object.getPrototypeOf(e) === el;
function cc(e, t, n, r = !1) {
  const i = {}, s = tl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), rl(e, t, i, s);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = r ? i : /* @__PURE__ */ ya(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
}
function uc(e, t, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ fe(i), [c] = e.propsOptions;
  let _ = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const m = e.vnode.dynamicProps;
      for (let S = 0; S < m.length; S++) {
        let P = m[S];
        if (Wr(e.emitsOptions, P))
          continue;
        const z = t[P];
        if (c)
          if (de(s, P))
            z !== s[P] && (s[P] = z, _ = !0);
          else {
            const ee = _t(P);
            i[ee] = Li(
              c,
              l,
              ee,
              z,
              e,
              !1
            );
          }
        else
          z !== s[P] && (s[P] = z, _ = !0);
      }
    }
  } else {
    rl(e, t, i, s) && (_ = !0);
    let m;
    for (const S in l)
      (!t || // for camelCase
      !de(t, S) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = bn(S)) === S || !de(t, m))) && (c ? n && // for camelCase
      (n[S] !== void 0 || // for kebab-case
      n[m] !== void 0) && (i[S] = Li(
        c,
        l,
        S,
        void 0,
        e,
        !0
      )) : delete i[S]);
    if (s !== l)
      for (const S in s)
        (!t || !de(t, S)) && (delete s[S], _ = !0);
  }
  _ && jt(e.attrs, "set", "");
}
function rl(e, t, n, r) {
  const [i, s] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Kn(c))
        continue;
      const _ = t[c];
      let m;
      i && de(i, m = _t(c)) ? !s || !s.includes(m) ? n[m] = _ : (l || (l = {}))[m] = _ : Wr(e.emitsOptions, c) || (!(c in r) || _ !== r[c]) && (r[c] = _, o = !0);
    }
  if (s) {
    const c = /* @__PURE__ */ fe(n), _ = l || me;
    for (let m = 0; m < s.length; m++) {
      const S = s[m];
      n[S] = Li(
        i,
        c,
        S,
        _[S],
        e,
        !de(_, S)
      );
    }
  }
  return o;
}
function Li(e, t, n, r, i, s) {
  const o = e[n];
  if (o != null) {
    const l = de(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && ne(c)) {
        const { propsDefaults: _ } = i;
        if (n in _)
          r = _[n];
        else {
          const m = lr(i);
          r = _[n] = c.call(
            null,
            t
          ), m();
        }
      } else
        r = c;
      i.ce && i.ce._setProp(n, r);
    }
    o[
      0
      /* shouldCast */
    ] && (s && !l ? r = !1 : o[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === bn(n)) && (r = !0));
  }
  return r;
}
const fc = /* @__PURE__ */ new WeakMap();
function il(e, t, n = !1) {
  const r = n ? fc : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const s = e.props, o = {}, l = [];
  let c = !1;
  if (!ne(e)) {
    const m = (S) => {
      c = !0;
      const [P, z] = il(S, t, !0);
      Xe(o, P), z && l.push(...z);
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!s && !c)
    return he(e) && r.set(e, Rn), Rn;
  if (Z(s))
    for (let m = 0; m < s.length; m++) {
      const S = _t(s[m]);
      ws(S) && (o[S] = me);
    }
  else if (s)
    for (const m in s) {
      const S = _t(m);
      if (ws(S)) {
        const P = s[m], z = o[S] = Z(P) || ne(P) ? { type: P } : Xe({}, P), ee = z.type;
        let B = !1, te = !0;
        if (Z(ee))
          for (let q = 0; q < ee.length; ++q) {
            const D = ee[q], J = ne(D) && D.name;
            if (J === "Boolean") {
              B = !0;
              break;
            } else J === "String" && (te = !1);
          }
        else
          B = ne(ee) && ee.name === "Boolean";
        z[
          0
          /* shouldCast */
        ] = B, z[
          1
          /* shouldCastTrue */
        ] = te, (B || de(z, "default")) && l.push(S);
      }
    }
  const _ = [o, l];
  return he(e) && r.set(e, _), _;
}
function ws(e) {
  return e[0] !== "$" && !Kn(e);
}
const Xi = (e) => e === "_" || e === "_ctx" || e === "$stable", Ji = (e) => Z(e) ? e.map(Lt) : [Lt(e)], dc = (e, t, n) => {
  if (t._n)
    return t;
  const r = Na((...i) => Ji(t(...i)), n);
  return r._c = !1, r;
}, sl = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (Xi(i)) continue;
    const s = e[i];
    if (ne(s))
      t[i] = dc(i, s, r);
    else if (s != null) {
      const o = Ji(s);
      t[i] = () => o;
    }
  }
}, ol = (e, t) => {
  const n = Ji(t);
  e.slots.default = () => n;
}, ll = (e, t, n) => {
  for (const r in t)
    (n || !Xi(r)) && (e[r] = t[r]);
}, pc = (e, t, n) => {
  const r = e.slots = tl();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (ll(r, t, n), n && bo(r, "_", i, !0)) : sl(t, r);
  } else t && ol(e, t);
}, hc = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let s = !0, o = me;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? s = !1 : ll(i, t, n) : (s = !t.$stable, sl(t, i)), o = t;
  } else t && (ol(e, t), o = { default: 1 });
  if (s)
    for (const l in i)
      !Xi(l) && o[l] == null && delete i[l];
}, at = _c;
function mc(e) {
  return bc(e);
}
function bc(e, t) {
  const n = jr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: o,
    createText: l,
    createComment: c,
    setText: _,
    setElementText: m,
    parentNode: S,
    nextSibling: P,
    setScopeId: z = It,
    insertStaticContent: ee
  } = e, B = (f, h, g, R = null, T = null, A = null, I = void 0, L = null, k = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !Hn(f, h) && (R = We(f), Oe(f, T, A, !0), f = null), h.patchFlag === -2 && (k = !1, h.dynamicChildren = null);
    const { type: C, ref: K, shapeFlag: F } = h;
    switch (C) {
      case qr:
        te(f, h, g, R);
        break;
      case qt:
        q(f, h, g, R);
        break;
      case fi:
        f == null && D(h, g, R, I);
        break;
      case se:
        it(
          f,
          h,
          g,
          R,
          T,
          A,
          I,
          L,
          k
        );
        break;
      default:
        F & 1 ? oe(
          f,
          h,
          g,
          R,
          T,
          A,
          I,
          L,
          k
        ) : F & 6 ? Ve(
          f,
          h,
          g,
          R,
          T,
          A,
          I,
          L,
          k
        ) : (F & 64 || F & 128) && C.process(
          f,
          h,
          g,
          R,
          T,
          A,
          I,
          L,
          k,
          He
        );
    }
    K != null && T ? Xn(K, f && f.ref, A, h || f, !h) : K == null && f && f.ref != null && Xn(f.ref, null, A, f, !0);
  }, te = (f, h, g, R) => {
    if (f == null)
      r(
        h.el = l(h.children),
        g,
        R
      );
    else {
      const T = h.el = f.el;
      h.children !== f.children && _(T, h.children);
    }
  }, q = (f, h, g, R) => {
    f == null ? r(
      h.el = c(h.children || ""),
      g,
      R
    ) : h.el = f.el;
  }, D = (f, h, g, R) => {
    [f.el, f.anchor] = ee(
      f.children,
      h,
      g,
      R,
      f.el,
      f.anchor
    );
  }, J = ({ el: f, anchor: h }, g, R) => {
    let T;
    for (; f && f !== h; )
      T = P(f), r(f, g, R), f = T;
    r(h, g, R);
  }, $ = ({ el: f, anchor: h }) => {
    let g;
    for (; f && f !== h; )
      g = P(f), i(f), f = g;
    i(h);
  }, oe = (f, h, g, R, T, A, I, L, k) => {
    if (h.type === "svg" ? I = "svg" : h.type === "math" && (I = "mathml"), f == null)
      xe(
        h,
        g,
        R,
        T,
        A,
        I,
        L,
        k
      );
    else {
      const C = f.el && f.el._isVueCE ? f.el : null;
      try {
        C && C._beginPatch(), ve(
          f,
          h,
          T,
          A,
          I,
          L,
          k
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, xe = (f, h, g, R, T, A, I, L) => {
    let k, C;
    const { props: K, shapeFlag: F, transition: W, dirs: w } = f;
    if (k = f.el = o(
      f.type,
      A,
      K && K.is,
      K
    ), F & 8 ? m(k, f.children) : F & 16 && Ae(
      f.children,
      k,
      null,
      R,
      T,
      ui(f, A),
      I,
      L
    ), w && rn(f, null, R, "created"), Ce(k, f, f.scopeId, I, R), K) {
      for (const U in K)
        U !== "value" && !Kn(U) && s(k, U, null, K[U], A, R);
      "value" in K && s(k, "value", null, K.value, A), (C = K.onVnodeBeforeMount) && Ot(C, R, f);
    }
    w && rn(f, null, R, "beforeMount");
    const N = yc(T, W);
    N && W.beforeEnter(k), r(k, h, g), ((C = K && K.onVnodeMounted) || N || w) && at(() => {
      C && Ot(C, R, f), N && W.enter(k), w && rn(f, null, R, "mounted");
    }, T);
  }, Ce = (f, h, g, R, T) => {
    if (g && z(f, g), R)
      for (let A = 0; A < R.length; A++)
        z(f, R[A]);
    if (T) {
      let A = T.subTree;
      if (h === A || fl(A.type) && (A.ssContent === h || A.ssFallback === h)) {
        const I = T.vnode;
        Ce(
          f,
          I,
          I.scopeId,
          I.slotScopeIds,
          T.parent
        );
      }
    }
  }, Ae = (f, h, g, R, T, A, I, L, k = 0) => {
    for (let C = k; C < f.length; C++) {
      const K = f[C] = L ? Ht(f[C]) : Lt(f[C]);
      B(
        null,
        K,
        h,
        g,
        R,
        T,
        A,
        I,
        L
      );
    }
  }, ve = (f, h, g, R, T, A, I) => {
    const L = h.el = f.el;
    let { patchFlag: k, dynamicChildren: C, dirs: K } = h;
    k |= f.patchFlag & 16;
    const F = f.props || me, W = h.props || me;
    let w;
    if (g && sn(g, !1), (w = W.onVnodeBeforeUpdate) && Ot(w, g, h, f), K && rn(h, f, g, "beforeUpdate"), g && sn(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    C && (!f.dynamicChildren || f.dynamicChildren.length !== C.length) && (k = 0, I = !1, C = null), (F.innerHTML && W.innerHTML == null || F.textContent && W.textContent == null) && m(L, ""), C ? Re(
      f.dynamicChildren,
      C,
      L,
      g,
      R,
      ui(h, T),
      A
    ) : I || re(
      f,
      h,
      L,
      null,
      g,
      R,
      ui(h, T),
      A,
      !1
    ), k > 0) {
      if (k & 16)
        $e(L, F, W, g, T);
      else if (k & 2 && F.class !== W.class && s(L, "class", null, W.class, T), k & 4 && s(L, "style", F.style, W.style, T), k & 8) {
        const N = h.dynamicProps;
        for (let U = 0; U < N.length; U++) {
          const x = N[U], E = F[x], d = W[x];
          (d !== E || x === "value") && s(L, x, E, d, T, g);
        }
      }
      k & 1 && f.children !== h.children && m(L, h.children);
    } else !I && C == null && $e(L, F, W, g, T);
    ((w = W.onVnodeUpdated) || K) && at(() => {
      w && Ot(w, g, h, f), K && rn(h, f, g, "updated");
    }, R);
  }, Re = (f, h, g, R, T, A, I) => {
    for (let L = 0; L < h.length; L++) {
      const k = f[L], C = h[L], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        k.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (k.type === se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Hn(k, C) || // - In the case of a component, it could contain anything.
        k.shapeFlag & 198) ? S(k.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      B(
        k,
        C,
        K,
        null,
        R,
        T,
        A,
        I,
        !0
      );
    }
  }, $e = (f, h, g, R, T) => {
    if (h !== g) {
      if (h !== me)
        for (const A in h)
          !Kn(A) && !(A in g) && s(
            f,
            A,
            h[A],
            null,
            T,
            R
          );
      for (const A in g) {
        if (Kn(A)) continue;
        const I = g[A], L = h[A];
        I !== L && A !== "value" && s(f, A, L, I, T, R);
      }
      "value" in g && s(f, "value", h.value, g.value, T);
    }
  }, it = (f, h, g, R, T, A, I, L, k) => {
    const C = h.el = f ? f.el : l(""), K = h.anchor = f ? f.anchor : l("");
    let { patchFlag: F, dynamicChildren: W, slotScopeIds: w } = h;
    w && (L = L ? L.concat(w) : w), f == null ? (r(C, g, R), r(K, g, R), Ae(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      g,
      K,
      T,
      A,
      I,
      L,
      k
    )) : F > 0 && F & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === W.length ? (Re(
      f.dynamicChildren,
      W,
      g,
      T,
      A,
      I,
      L
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || T && h === T.subTree) && al(
      f,
      h,
      !0
      /* shallow */
    )) : re(
      f,
      h,
      g,
      K,
      T,
      A,
      I,
      L,
      k
    );
  }, Ve = (f, h, g, R, T, A, I, L, k) => {
    h.slotScopeIds = L, f == null ? h.shapeFlag & 512 ? T.ctx.activate(
      h,
      g,
      R,
      I,
      k
    ) : ze(
      h,
      g,
      R,
      T,
      A,
      I,
      k
    ) : st(f, h, k);
  }, ze = (f, h, g, R, T, A, I) => {
    const L = f.component = Ac(
      f,
      R,
      T
    );
    if (Yi(f) && (L.ctx.renderer = He), Rc(L, !1, I), L.asyncDep) {
      if (T && T.registerDep(L, ge, I), !f.el) {
        const k = L.subTree = Vt(qt);
        q(null, k, h, g), f.placeholder = k.el;
      }
    } else
      ge(
        L,
        f,
        h,
        g,
        T,
        A,
        I
      );
  }, st = (f, h, g) => {
    const R = h.component = f.component;
    if (lc(f, h, g))
      if (R.asyncDep && !R.asyncResolved) {
        le(R, h, g);
        return;
      } else
        R.next = h, R.update();
    else
      h.el = f.el, R.vnode = h;
  }, ge = (f, h, g, R, T, A, I) => {
    const L = () => {
      if (f.isMounted) {
        let { next: F, bu: W, u: w, parent: N, vnode: U } = f;
        {
          const pe = cl(f);
          if (pe) {
            F && (F.el = U.el, le(f, F, I)), pe.asyncDep.then(() => {
              at(() => {
                f.isUnmounted || C();
              }, T);
            });
            return;
          }
        }
        let x = F, E;
        sn(f, !1), F ? (F.el = U.el, le(f, F, I)) : F = U, W && Sr(W), (E = F.props && F.props.onVnodeBeforeUpdate) && Ot(E, N, F, U), sn(f, !0);
        const d = Cs(f), Y = f.subTree;
        f.subTree = d, B(
          Y,
          d,
          // parent may have changed if it's in a teleport
          S(Y.el),
          // anchor may have changed if it's in a fragment
          We(Y),
          f,
          T,
          A
        ), F.el = d.el, x === null && ac(f, d.el), w && at(w, T), (E = F.props && F.props.onVnodeUpdated) && at(
          () => Ot(E, N, F, U),
          T
        );
      } else {
        let F;
        const { el: W, props: w } = h, { bm: N, m: U, parent: x, root: E, type: d } = f, Y = Jn(h);
        sn(f, !1), N && Sr(N), !Y && (F = w && w.onVnodeBeforeMount) && Ot(F, x, h), sn(f, !0);
        {
          E.ce && E.ce._hasShadowRoot() && E.ce._injectChildStyle(
            d,
            f.parent ? f.parent.type : void 0
          );
          const pe = f.subTree = Cs(f);
          B(
            null,
            pe,
            g,
            R,
            f,
            T,
            A
          ), h.el = pe.el;
        }
        if (U && at(U, T), !Y && (F = w && w.onVnodeMounted)) {
          const pe = h;
          at(
            () => Ot(F, x, pe),
            T
          );
        }
        (h.shapeFlag & 256 || x && Jn(x.vnode) && x.vnode.shapeFlag & 256) && f.a && at(f.a, T), f.isMounted = !0, h = g = R = null;
      }
    };
    f.scope.on();
    const k = f.effect = new vo(L);
    f.scope.off();
    const C = f.update = k.run.bind(k), K = f.job = k.runIfDirty.bind(k);
    K.i = f, K.id = f.uid, k.scheduler = () => Ki(K), sn(f, !0), C();
  }, le = (f, h, g) => {
    h.component = f;
    const R = f.vnode.props;
    f.vnode = h, f.next = null, uc(f, h.props, R, g), hc(f, h.children, g), zt(), gs(f), Bt();
  }, re = (f, h, g, R, T, A, I, L, k = !1) => {
    const C = f && f.children, K = f ? f.shapeFlag : 0, F = h.children, { patchFlag: W, shapeFlag: w } = h;
    if (W > 0) {
      if (W & 128) {
        Ue(
          C,
          F,
          g,
          R,
          T,
          A,
          I,
          L,
          k
        );
        return;
      } else if (W & 256) {
        Ie(
          C,
          F,
          g,
          R,
          T,
          A,
          I,
          L,
          k
        );
        return;
      }
    }
    w & 8 ? (K & 16 && ht(C, T, A), F !== C && m(g, F)) : K & 16 ? w & 16 ? Ue(
      C,
      F,
      g,
      R,
      T,
      A,
      I,
      L,
      k
    ) : ht(C, T, A, !0) : (K & 8 && m(g, ""), w & 16 && Ae(
      F,
      g,
      R,
      T,
      A,
      I,
      L,
      k
    ));
  }, Ie = (f, h, g, R, T, A, I, L, k) => {
    f = f || Rn, h = h || Rn;
    const C = f.length, K = h.length, F = Math.min(C, K);
    let W;
    for (W = 0; W < F; W++) {
      const w = h[W] = k ? Ht(h[W]) : Lt(h[W]);
      B(
        f[W],
        w,
        g,
        null,
        T,
        A,
        I,
        L,
        k
      );
    }
    C > K ? ht(
      f,
      T,
      A,
      !0,
      !1,
      F
    ) : Ae(
      h,
      g,
      R,
      T,
      A,
      I,
      L,
      k,
      F
    );
  }, Ue = (f, h, g, R, T, A, I, L, k) => {
    let C = 0;
    const K = h.length;
    let F = f.length - 1, W = K - 1;
    for (; C <= F && C <= W; ) {
      const w = f[C], N = h[C] = k ? Ht(h[C]) : Lt(h[C]);
      if (Hn(w, N))
        B(
          w,
          N,
          g,
          null,
          T,
          A,
          I,
          L,
          k
        );
      else
        break;
      C++;
    }
    for (; C <= F && C <= W; ) {
      const w = f[F], N = h[W] = k ? Ht(h[W]) : Lt(h[W]);
      if (Hn(w, N))
        B(
          w,
          N,
          g,
          null,
          T,
          A,
          I,
          L,
          k
        );
      else
        break;
      F--, W--;
    }
    if (C > F) {
      if (C <= W) {
        const w = W + 1, N = w < K ? h[w].el : R;
        for (; C <= W; )
          B(
            null,
            h[C] = k ? Ht(h[C]) : Lt(h[C]),
            g,
            N,
            T,
            A,
            I,
            L,
            k
          ), C++;
      }
    } else if (C > W)
      for (; C <= F; )
        Oe(f[C], T, A, !0), C++;
    else {
      const w = C, N = C, U = /* @__PURE__ */ new Map();
      for (C = N; C <= W; C++) {
        const _e = h[C] = k ? Ht(h[C]) : Lt(h[C]);
        _e.key != null && U.set(_e.key, C);
      }
      let x, E = 0;
      const d = W - N + 1;
      let Y = !1, pe = 0;
      const Ee = new Array(d);
      for (C = 0; C < d; C++) Ee[C] = 0;
      for (C = w; C <= F; C++) {
        const _e = f[C];
        if (E >= d) {
          Oe(_e, T, A, !0);
          continue;
        }
        let qe;
        if (_e.key != null)
          qe = U.get(_e.key);
        else
          for (x = N; x <= W; x++)
            if (Ee[x - N] === 0 && Hn(_e, h[x])) {
              qe = x;
              break;
            }
        qe === void 0 ? Oe(_e, T, A, !0) : (Ee[qe - N] = C + 1, qe >= pe ? pe = qe : Y = !0, B(
          _e,
          h[qe],
          g,
          null,
          T,
          A,
          I,
          L,
          k
        ), E++);
      }
      const Ze = Y ? gc(Ee) : Rn;
      for (x = Ze.length - 1, C = d - 1; C >= 0; C--) {
        const _e = N + C, qe = h[_e], Dt = h[_e + 1], Qt = _e + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Dt.el || ul(Dt)
        ) : R;
        Ee[C] === 0 ? B(
          null,
          qe,
          g,
          Qt,
          T,
          A,
          I,
          L,
          k
        ) : Y && (x < 0 || C !== Ze[x] ? Be(qe, g, Qt, 2) : x--);
      }
    }
  }, Be = (f, h, g, R, T = null) => {
    const { el: A, type: I, transition: L, children: k, shapeFlag: C } = f;
    if (C & 6) {
      Be(f.component.subTree, h, g, R);
      return;
    }
    if (C & 128) {
      f.suspense.move(h, g, R);
      return;
    }
    if (C & 64) {
      I.move(f, h, g, He);
      return;
    }
    if (I === se) {
      r(A, h, g);
      for (let F = 0; F < k.length; F++)
        Be(k[F], h, g, R);
      r(f.anchor, h, g);
      return;
    }
    if (I === fi) {
      J(f, h, g);
      return;
    }
    if (R !== 2 && C & 1 && L)
      if (R === 0)
        L.persisted && !A[ai] ? r(A, h, g) : (L.beforeEnter(A), r(A, h, g), at(() => L.enter(A), T));
      else {
        const { leave: F, delayLeave: W, afterLeave: w } = L, N = () => {
          f.ctx.isUnmounted ? i(A) : r(A, h, g);
        }, U = () => {
          const x = A._isLeaving || !!A[ai];
          A._isLeaving && A[ai](
            !0
            /* cancelled */
          ), L.persisted && !x ? N() : F(A, () => {
            N(), w && w();
          });
        };
        W ? W(A, N, U) : U();
      }
    else
      r(A, h, g);
  }, Oe = (f, h, g, R = !1, T = !1) => {
    const {
      type: A,
      props: I,
      ref: L,
      children: k,
      dynamicChildren: C,
      shapeFlag: K,
      patchFlag: F,
      dirs: W,
      cacheIndex: w,
      memo: N
    } = f;
    if (F === -2 && (T = !1), L != null && (zt(), Xn(L, null, g, f, !0), Bt()), w != null && (h.renderCache[w] = void 0), K & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const U = K & 1 && W, x = !Jn(f);
    let E;
    if (x && (E = I && I.onVnodeBeforeUnmount) && Ot(E, h, f), K & 6)
      Fe(f.component, g, R);
    else {
      if (K & 128) {
        f.suspense.unmount(g, R);
        return;
      }
      U && rn(f, null, h, "beforeUnmount"), K & 64 ? f.type.remove(
        f,
        h,
        g,
        He,
        R
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== se || F > 0 && F & 64) ? ht(
        C,
        h,
        g,
        !1,
        !0
      ) : (A === se && F & 384 || !T && K & 16) && ht(k, h, g), R && pt(f);
    }
    const d = N != null && w == null;
    (x && (E = I && I.onVnodeUnmounted) || U || d) && at(() => {
      E && Ot(E, h, f), U && rn(f, null, h, "unmounted"), d && (f.el = null);
    }, g);
  }, pt = (f) => {
    const { type: h, el: g, anchor: R, transition: T } = f;
    if (h === se) {
      ce(g, R);
      return;
    }
    if (h === fi) {
      $(f);
      return;
    }
    const A = () => {
      i(g), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (f.shapeFlag & 1 && T && !T.persisted) {
      const { leave: I, delayLeave: L } = T, k = () => I(g, A);
      L ? L(f.el, A, k) : k();
    } else
      A();
  }, ce = (f, h) => {
    let g;
    for (; f !== h; )
      g = P(f), i(f), f = g;
    i(h);
  }, Fe = (f, h, g) => {
    const { bum: R, scope: T, job: A, subTree: I, um: L, m: k, a: C } = f;
    Rs(k), Rs(C), R && Sr(R), T.stop(), A && (A.flags |= 8, Oe(I, f, h, g)), L && at(L, h), at(() => {
      f.isUnmounted = !0;
    }, h);
  }, ht = (f, h, g, R = !1, T = !1, A = 0) => {
    for (let I = A; I < f.length; I++)
      Oe(f[I], h, g, R, T);
  }, We = (f) => {
    if (f.shapeFlag & 6)
      return We(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const h = P(f.anchor || f.el), g = h && h[Ma];
    return g ? P(g) : h;
  };
  let mt = !1;
  const Je = (f, h, g) => {
    let R;
    f == null ? h._vnode && (Oe(h._vnode, null, null, !0), R = h._vnode.component) : B(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      g
    ), h._vnode = f, mt || (mt = !0, gs(R), Fo(), mt = !1);
  }, He = {
    p: B,
    um: Oe,
    m: Be,
    r: pt,
    mt: ze,
    mc: Ae,
    pc: re,
    pbc: Re,
    n: We,
    o: e
  };
  return {
    render: Je,
    hydrate: void 0,
    createApp: tc(Je)
  };
}
function ui({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function sn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function yc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function al(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (Z(r) && Z(i))
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let l = i[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[s] = Ht(i[s]), l.el = o.el), !n && l.patchFlag !== -2 && al(o, l)), l.type === qr && (l.patchFlag === -1 && (l = i[s] = Ht(l)), l.el = o.el), l.type === qt && !l.el && (l.el = o.el);
    }
}
function gc(e) {
  const t = e.slice(), n = [0];
  let r, i, s, o, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const _ = e[r];
    if (_ !== 0) {
      if (i = n[n.length - 1], e[i] < _) {
        t[r] = i, n.push(r);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; )
        l = s + o >> 1, e[n[l]] < _ ? s = l + 1 : o = l;
      _ < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; )
    n[s] = o, o = t[o];
  return n;
}
function cl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : cl(t);
}
function Rs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ul(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ul(t.subTree) : null;
}
const fl = (e) => e.__isSuspense;
function _c(e, t) {
  t && t.pendingBranch ? Z(e) ? t.effects.push(...e) : t.effects.push(e) : Oa(e);
}
const se = /* @__PURE__ */ Symbol.for("v-fgt"), qr = /* @__PURE__ */ Symbol.for("v-txt"), qt = /* @__PURE__ */ Symbol.for("v-cmt"), fi = /* @__PURE__ */ Symbol.for("v-stc"), hn = [];
let dt = null;
function H(e = !1) {
  hn.push(dt = e ? null : []);
}
function dl() {
  hn.pop(), dt = hn[hn.length - 1] || null;
}
let nr = 1;
function Os(e, t = !1) {
  nr += e, e < 0 && dt && t && (dt.hasOnce = !0);
}
function pl(e) {
  return e.dynamicChildren = nr > 0 ? dt || Rn : null, dl(), nr > 0 && dt && dt.push(e), e;
}
function j(e, t, n, r, i, s) {
  return pl(
    p(
      e,
      t,
      n,
      r,
      i,
      s,
      !0
    )
  );
}
function vc(e, t, n, r, i) {
  return pl(
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
function hl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Hn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ml = ({ key: e }) => e ?? null, Cr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? we(e) || /* @__PURE__ */ Ye(e) || ne(e) ? { i: bt, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, r = 0, i = null, s = e === se ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ml(t),
    ref: t && Cr(t),
    scopeId: jo,
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
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: bt
  };
  return l ? (Lr(c, n), s & 128 && e.normalize(c)) : n && (c.shapeFlag |= we(n) ? 8 : 16), nr > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  dt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && dt.push(c), c;
}
const Vt = Ec;
function Ec(e, t = null, n = null, r = 0, i = null, s = !1) {
  if ((!e || e === Ka) && (e = qt), hl(e)) {
    const l = In(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Lr(l, n), nr > 0 && !s && dt && (l.shapeFlag & 6 ? dt[dt.indexOf(e)] = l : dt.push(l)), l.patchFlag = -2, l;
  }
  if (Lc(e) && (e = e.__vccOpts), t) {
    t = Tc(t);
    let { class: l, style: c } = t;
    l && !we(l) && (t.class = On(l)), he(c) && (/* @__PURE__ */ qi(c) && !Z(c) && (c = Xe({}, c)), t.style = Hi(c));
  }
  const o = we(e) ? 1 : fl(e) ? 128 : zr(e) ? 64 : he(e) ? 4 : ne(e) ? 2 : 0;
  return p(
    e,
    t,
    n,
    r,
    i,
    o,
    s,
    !0
  );
}
function Tc(e) {
  return e ? /* @__PURE__ */ qi(e) || nl(e) ? Xe({}, e) : e : null;
}
function In(e, t, n = !1, r = !1) {
  const { props: i, ref: s, patchFlag: o, children: l, transition: c } = e, _ = t ? Sc(i || {}, t) : i, m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: _,
    key: _ && ml(_),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Z(s) ? s.concat(Cr(t)) : [s, Cr(t)] : Cr(t)
    ) : s,
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
    patchFlag: t && e.type !== se ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
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
  return c && r && Gi(
    m,
    c.clone(m)
  ), m;
}
function ue(e = " ", t = 0) {
  return Vt(qr, null, e, t);
}
function Pe(e = "", t = !1) {
  return t ? (H(), vc(qt, null, e)) : Vt(qt, null, e);
}
function Lt(e) {
  return e == null || typeof e == "boolean" ? Vt(qt) : Z(e) ? Vt(
    se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : hl(e) ? Ht(e) : Vt(qr, null, String(e));
}
function Ht(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : In(e);
}
function Lr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Z(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Lr(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !nl(t) ? t._ctx = bt : i === 3 && bt && (bt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ne(t)) {
    if (r & 65) {
      Lr(e, { default: t });
      return;
    }
    t = { default: t, _ctx: bt }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [ue(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Sc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = On([t.class, r.class]));
      else if (i === "style")
        t.style = Hi([t.style, r.style]);
      else if (Dr(i)) {
        const s = t[i], o = r[i];
        o && s !== o && !(Z(s) && s.includes(o)) ? t[i] = s ? [].concat(s, o) : o : o == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ur(i) && (t[i] = o);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function Ot(e, t, n, r = null) {
  Tt(e, t, 7, [
    n,
    r
  ]);
}
const xc = Jo();
let Cc = 0;
function Ac(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || xc, s = {
    uid: Cc++,
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
    scope: new Zl(
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
    propsOptions: il(r, i),
    emitsOptions: Zo(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: me,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: me,
    data: me,
    props: me,
    attrs: me,
    slots: me,
    refs: me,
    setupState: me,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = rc.bind(null, s), e.ce && e.ce(s), s;
}
let rt = null;
const wc = () => rt || bt;
let kr, rr;
{
  const e = jr(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((o) => o(s)) : i[0](s);
    };
  };
  kr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => rt = n
  ), rr = t(
    "__VUE_SSR_SETTERS__",
    (n) => ir = n
  );
}
const lr = (e) => {
  const t = rt;
  return kr(e), e.scope.on(), () => {
    e.scope.off(), kr(t);
  };
}, Ns = () => {
  rt && rt.scope.off(), kr(null);
};
function bl(e) {
  return e.vnode.shapeFlag & 4;
}
let ir = !1;
function Rc(e, t = !1, n = !1) {
  t && rr(t);
  const { props: r, children: i } = e.vnode, s = bl(e);
  cc(e, r, s, t), pc(e, i, n || t);
  const o = s ? Oc(e, t) : void 0;
  return t && rr(!1), o;
}
function Oc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ga);
  const { setup: r } = n;
  if (r) {
    zt();
    const i = e.setupContext = r.length > 1 ? Pc(e) : null, s = lr(e), o = or(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = fo(o);
    if (Bt(), s(), (l || e.sp) && !Jn(e) && Bo(e), l) {
      if (o.then(Ns, Ns), t)
        return o.then((c) => {
          rr(!0);
          try {
            Ps(e, c, t);
          } finally {
            rr(!1);
          }
        }).catch((c) => {
          Vr(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Ps(e, o);
  } else
    yl(e);
}
function Ps(e, t, n) {
  ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) && (e.setupState = Io(t)), yl(e);
}
function yl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || It);
  {
    const i = lr(e);
    zt();
    try {
      Ya(e);
    } finally {
      Bt(), i();
    }
  }
}
const Nc = {
  get(e, t) {
    return Ge(e, "get", ""), e[t];
  }
};
function Pc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Nc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Kr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Io(ga(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Zn)
        return Zn[n](e);
    },
    has(t, n) {
      return n in t || n in Zn;
    }
  })) : e.proxy;
}
function Lc(e) {
  return ne(e) && "__vccOpts" in e;
}
const ie = (e, t) => /* @__PURE__ */ xa(e, t, ir), kc = "3.5.42";
let ki;
const Ls = typeof window < "u" && window.trustedTypes;
if (Ls)
  try {
    ki = /* @__PURE__ */ Ls.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const gl = ki ? (e) => ki.createHTML(e) : (e) => e, Ic = "http://www.w3.org/2000/svg", Mc = "http://www.w3.org/1998/Math/MathML", Ft = typeof document < "u" ? document : null, ks = Ft && /* @__PURE__ */ Ft.createElement("template"), Dc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? Ft.createElementNS(Ic, e) : t === "mathml" ? Ft.createElementNS(Mc, e) : n ? Ft.createElement(e, { is: n }) : Ft.createElement(e);
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
  insertStaticContent(e, t, n, r, i, s) {
    const o = n ? n.previousSibling : t.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      ks.innerHTML = gl(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = ks.content;
      if (r === "svg" || r === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Uc = /* @__PURE__ */ Symbol("_vtc");
function Fc(e, t, n) {
  const r = e[Uc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Is = /* @__PURE__ */ Symbol("_vod"), Hc = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), $c = /(?:^|;)\s*display\s*:/;
function Vc(e, t, n) {
  const r = e.style, i = we(n);
  let s = !1;
  if (n && !i) {
    if (t)
      if (we(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Wn(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Wn(r, o, "");
    for (const o in n) {
      o === "display" && (s = !0);
      const l = n[o];
      l != null ? Bc(
        e,
        o,
        !we(t) && t ? t[o] : void 0,
        l
      ) || Wn(r, o, l) : Wn(r, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = r[jc];
      o && (n += ";" + o), r.cssText = n, s = $c.test(n);
    }
  } else t && e.removeAttribute("style");
  Is in e && (e[Is] = s ? r.display : "", e[Hc] && (r.display = "none"));
}
const _r = /\s*!important$/;
function Wn(e, t, n) {
  if (Z(n))
    n.forEach((r) => Wn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    _r.test(n) ? e.setProperty(t, n.replace(_r, ""), "important") : e.setProperty(t, n);
  else {
    const r = zc(e, t);
    _r.test(n) ? e.setProperty(
      bn(r),
      n.replace(_r, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ms = ["Webkit", "Moz", "ms"], di = {};
function zc(e, t) {
  const n = di[t];
  if (n)
    return n;
  let r = _t(t);
  if (r !== "filter" && r in e)
    return di[t] = r;
  r = mo(r);
  for (let i = 0; i < Ms.length; i++) {
    const s = Ms[i] + r;
    if (s in e)
      return di[t] = s;
  }
  return t;
}
function Bc(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && we(r) && n === r;
}
const Ds = "http://www.w3.org/1999/xlink";
function Us(e, t, n, r, i, s = Yl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ds, t.slice(6, t.length)) : e.setAttributeNS(Ds, t, n) : n == null || s && !yo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Mt(n) ? String(n) : n
  );
}
function Fs(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? gl(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = yo(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function cn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Wc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Hs = /* @__PURE__ */ Symbol("_vei");
function qc(e, t, n, r, i = null) {
  const s = e[Hs] || (e[Hs] = {}), o = s[t];
  if (r && o)
    o.value = r;
  else {
    const [l, c] = Yc(t);
    if (r) {
      const _ = s[t] = Zc(
        r,
        i
      );
      cn(e, l, _, c);
    } else o && (Wc(e, l, o, c), s[t] = void 0);
  }
}
const Kc = /(Once|Passive|Capture)$/, Gc = /^on:?(?:Once|Passive|Capture)$/;
function Yc(e) {
  let t, n;
  for (; (n = e.match(Kc)) && !Gc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : bn(e.slice(2)), t];
}
let pi = 0;
const Xc = /* @__PURE__ */ Promise.resolve(), Jc = () => pi || (Xc.then(() => pi = 0), pi = Date.now());
function Zc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const i = n.value;
    if (Z(i)) {
      const s = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        s.call(r), r._stopped = !0;
      };
      const o = i.slice(), l = [r];
      for (let c = 0; c < o.length && !r._stopped; c++) {
        const _ = o[c];
        _ && Tt(
          _,
          t,
          5,
          l
        );
      }
    } else
      Tt(
        i,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Jc(), n;
}
const js = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Qc = (e, t, n, r, i, s) => {
  const o = i === "svg";
  t === "class" ? Fc(e, r, o) : t === "style" ? Vc(e, n, r) : Dr(t) ? Ur(t) || qc(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : eu(e, t, r, o)) ? (Fs(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Us(e, t, r, o, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (tu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !we(r))) ? Fs(e, _t(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Us(e, t, r, o));
};
function eu(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && js(t) && ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return js(t) && we(n) ? !1 : t in e;
}
function tu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = _t(t);
  return Array.isArray(n) ? n.some((i) => _t(i) === r) : Object.keys(n).some((i) => _t(i) === r);
}
const Ir = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Z(t) ? (n) => Sr(t, n) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function $s(e) {
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
    const s = r || i.props && i.props.type === "number";
    cn(e, t ? "change" : "input", (o) => {
      o.target.composing || e[fn](hi(e.value, n, s));
    }), (n || s) && cn(e, "change", () => {
      e.value = hi(e.value, n, s);
    }), t || (cn(e, "compositionstart", nu), cn(e, "compositionend", $s), cn(e, "change", $s));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const i = t ?? "", s = e[vr];
    delete e[vr], s !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== s ? e[fn](hi(e.value, n, r)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: s } }, o) {
    if (e[fn] = Ir(o), e.composing) return;
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? Hr(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const _ = e.getRootNode();
    (_ instanceof Document || _ instanceof ShadowRoot) && _.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
  }
}, et = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, cn(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? Hr(Mr(c)) : Mr(c)
      ), s = e.multiple, o = s ? mn(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
        s,
        s ? Z(o) ? i.slice() : i : o
      ];
      try {
        e[fn](o);
      } finally {
        Do(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[fn] = Ir(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Vs(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[fn] = Ir(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !ru(t, n[1], n[0])) && Vs(e, t);
  }
};
function ru(e, t, n) {
  if (!n || Z(e)) return Zt(e, t);
  if (mn(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Vs(e, t) {
  const n = e.multiple, r = Z(t);
  if (!(n && !r && !mn(t))) {
    for (let i = 0, s = e.options.length; i < s; i++) {
      const o = e.options[i], l = Mr(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((_) => String(_) === String(l)) : o.selected = Jl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Zt(Mr(o), t)) {
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
  exact: (e, t) => iu.some((n) => e[`${n}Key`] && !t.includes(n))
}, Er = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((i, ...s) => {
    for (let o = 0; o < t.length; o++) {
      const l = su[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...s);
  }));
}, ou = /* @__PURE__ */ Xe({ patchProp: Qc }, Dc);
let zs;
function lu() {
  return zs || (zs = mc(ou));
}
const au = ((...e) => {
  const t = lu().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = uu(r);
    if (!i) return;
    const s = t._component;
    !ne(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, cu(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function cu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function uu(e) {
  return we(e) ? document.querySelector(e) : e;
}
function fu(e, t, n) {
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
    const s = JSON.parse(atob(i.value));
    return window._nc_initial_state.set(r, s), s;
  } catch (s) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: s }), n !== void 0)
      return n;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: s });
  }
}
function Bs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function du(e) {
  if (Array.isArray(e)) return e;
}
function pu(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, s, o, l = [], c = !0, _ = !1;
    try {
      if (s = (n = n.call(e)).next, t !== 0) for (; !(c = (r = s.call(n)).done) && (l.push(r.value), l.length !== t); c = !0) ;
    } catch (m) {
      _ = !0, i = m;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (_) throw i;
      }
    }
    return l;
  }
}
function hu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mu(e, t) {
  return du(e) || pu(e, t) || bu(e, t) || hu();
}
function bu(e, t) {
  if (e) {
    if (typeof e == "string") return Bs(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Bs(e, t) : void 0;
  }
}
const _l = Object.entries, Ws = Object.setPrototypeOf, yu = Object.isFrozen, gu = Object.getPrototypeOf, _u = Object.getOwnPropertyDescriptor;
let ke = Object.freeze, De = Object.seal, wn = Object.create, vl = typeof Reflect < "u" && Reflect, Ii = vl.apply, Mi = vl.construct;
ke || (ke = function(t) {
  return t;
});
De || (De = function(t) {
  return t;
});
Ii || (Ii = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
    i[s - 2] = arguments[s];
  return t.apply(n, i);
});
Mi || (Mi = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return new t(...r);
});
const an = Le(Array.prototype.forEach), vu = Le(Array.prototype.lastIndexOf), qs = Le(Array.prototype.pop), jn = Le(Array.prototype.push), Eu = Le(Array.prototype.splice), Ln = Array.isArray, qn = Le(String.prototype.toLowerCase), bi = Le(String.prototype.toString), Ks = Le(String.prototype.match), $n = Le(String.prototype.replace), Gs = Le(String.prototype.indexOf), Tu = Le(String.prototype.trim), Su = Le(Number.prototype.toString), xu = Le(Boolean.prototype.toString), Ys = typeof BigInt > "u" ? null : Le(BigInt.prototype.toString), Xs = typeof Symbol > "u" ? null : Le(Symbol.prototype.toString), ct = Le(Object.prototype.hasOwnProperty), Vn = Le(Object.prototype.toString), Ke = Le(RegExp.prototype.test), on = Cu(TypeError);
function Le(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return Ii(e, t, r);
  };
}
function Cu(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Mi(e, n);
  };
}
function ae(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qn;
  if (Ws && Ws(e, null), !Ln(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      const s = n(i);
      s !== i && (yu(t) || (t[r] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function Au(e) {
  for (let t = 0; t < e.length; t++)
    ct(e, t) || (e[t] = null);
  return e;
}
function ft(e) {
  const t = wn(null);
  for (const r of _l(e)) {
    var n = mu(r, 2);
    const i = n[0], s = n[1];
    ct(e, i) && (Ln(s) ? t[i] = Au(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ft(s) : t[i] = s);
  }
  return t;
}
function wu(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Su(e);
    case "boolean":
      return xu(e);
    case "bigint":
      return Ys ? Ys(e) : "0";
    case "symbol":
      return Xs ? Xs(e) : "Symbol()";
    case "undefined":
      return Vn(e);
    case "function":
    case "object": {
      if (e === null)
        return Vn(e);
      const t = e, n = gt(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Vn(r);
      }
      return Vn(e);
    }
    default:
      return Vn(e);
  }
}
function gt(e, t) {
  for (; e !== null; ) {
    const r = _u(e, t);
    if (r) {
      if (r.get)
        return Le(r.get);
      if (typeof r.value == "function")
        return Le(r.value);
    }
    e = gu(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Ru(e) {
  try {
    return Ke(e, ""), !0;
  } catch {
    return !1;
  }
}
const Js = ke(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), yi = ke(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), gi = ke(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ou = ke(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), _i = ke(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Nu = ke(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Zs = ke(["#text"]), Qs = ke(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), vi = ke(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), eo = ke(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Tr = ke(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pu = De(/{{[\w\W]*|^[\w\W]*}}/g), Lu = De(/<%[\w\W]*|^[\w\W]*%>/g), ku = De(/\${[\w\W]*/g), Iu = De(/^data-[\-\w.\u00B7-\uFFFF]+$/), Mu = De(/^aria-[\-\w]+$/), to = De(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = De(/^(?:\w+script|data):/i), Uu = De(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Fu = De(/^html$/i), Hu = De(/^[a-z][.\w]*(-[.\w]+)+$/i), no = De(/<[/\w!]/g), ro = De(/<[/\w]/g), ju = De(/<\/no(script|embed|frames)/i), $u = De(/\/>/i), ut = {
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
}, El = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Vu = ke(ae({}, El)), zu = (function() {
  const e = {};
  return an(El, (t) => {
    e[t] = De(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), ke(e);
})(), Bu = function() {
  return typeof window > "u" ? null : window;
}, Wu = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const i = "data-tt-policy-suffix";
  n && n.hasAttribute(i) && (r = n.getAttribute(i));
  const s = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(s, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, io = function() {
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
}, Yt = function(t, n, r, i) {
  return ct(t, n) && Ln(t[n]) ? ae(i.base ? ft(i.base) : {}, t[n], i.transform) : r;
}, Ei = function(t, n, r) {
  const i = ct(t, n) ? t[n] : void 0;
  return i && typeof i == "object" ? ft(i) : r();
};
function Tl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Bu();
  const t = (M) => Tl(M);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== ut.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, _ = e.NamedNodeMap;
  _ === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const m = e.DOMParser, S = e.trustedTypes, P = l.prototype, z = gt(P, "cloneNode"), ee = gt(P, "remove"), B = gt(P, "nextSibling"), te = gt(P, "childNodes"), q = gt(P, "parentNode"), D = gt(P, "shadowRoot"), J = gt(P, "attributes"), $ = o && o.prototype ? gt(o.prototype, "nodeType") : null, oe = o && o.prototype ? gt(o.prototype, "nodeName") : null, xe = o && o.prototype ? gt(o.prototype, "ownerDocument") : null, Ce = function(a) {
    return $ ? $(a) : a.nodeType;
  }, Ae = function(a) {
    return oe ? oe(a) : a.nodeName;
  };
  if (typeof s == "function") {
    const M = n.createElement("template");
    M.content && M.content.ownerDocument && (n = M.content.ownerDocument);
  }
  let ve, Re = "", $e, it = !1, Ve = 0;
  const ze = function() {
    if (Ve > 0)
      throw on('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, st = function(a) {
    ze(), Ve++;
    try {
      return ve.createHTML(a);
    } finally {
      Ve--;
    }
  }, ge = function(a) {
    ze(), Ve++;
    try {
      return ve.createScriptURL(a);
    } finally {
      Ve--;
    }
  }, le = function() {
    return it || ($e = Wu(S, i), it = !0), $e;
  }, re = n, Ie = re.implementation, Ue = re.createNodeIterator, Be = re.createDocumentFragment, Oe = re.getElementsByTagName, pt = r.importNode;
  let ce = io();
  t.isSupported = typeof _l == "function" && typeof q == "function" && Ie && Ie.createHTMLDocument !== void 0;
  const Fe = Pu, ht = Lu, We = ku, mt = Iu, Je = Mu, He = Du, St = Uu, f = Hu;
  let h = to, g = null;
  const R = ae({}, [...Js, ...yi, ...gi, ..._i, ...Zs]);
  let T = null;
  const A = ae({}, [...Qs, ...vi, ...eo, ...Tr]);
  let I = Object.seal(wn(null, {
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
  const C = Object.seal(wn(null, {
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
  let K = !0, F = !0, W = !1, w = !0, N = !1, U = !0, x = !1, E = !1, d = null, Y = null, pe = !1, Ee = !1, Ze = !1, _e = !1, qe = !0, Dt = !1;
  const Qt = "user-content-";
  let yn = !0, en = !1, xt = {}, Ct = null;
  const gn = ae({}, [
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
  let At = null;
  const ar = ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let _n = null;
  const Mn = ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), tn = "http://www.w3.org/1998/Math/MathML", cr = "http://www.w3.org/2000/svg", wt = "http://www.w3.org/1999/xhtml";
  let vn = wt, Gr = !1, Yr = null;
  const xl = ae({}, [tn, cr, wt], bi), Zi = ke(["mi", "mo", "mn", "ms", "mtext"]);
  let Xr = ae({}, Zi);
  const Qi = ke(["annotation-xml"]);
  let Jr = ae({}, Qi);
  const Cl = ae({}, ["title", "style", "font", "a", "script"]);
  let Dn = null;
  const Al = ["application/xhtml+xml", "text/html"], wl = "text/html";
  let Ne = null, En = null;
  const Rl = n.createElement("form"), es = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, Zr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (En && En === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = ft(a), Dn = // eslint-disable-next-line unicorn/prefer-includes
    Al.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? wl : a.PARSER_MEDIA_TYPE, Ne = Dn === "application/xhtml+xml" ? bi : qn, g = Yt(a, "ALLOWED_TAGS", R, {
      transform: Ne
    }), T = Yt(a, "ALLOWED_ATTR", A, {
      transform: Ne
    }), Yr = Yt(a, "ALLOWED_NAMESPACES", xl, {
      transform: bi
    }), _n = Yt(a, "ADD_URI_SAFE_ATTR", Mn, {
      transform: Ne,
      base: Mn
    }), At = Yt(a, "ADD_DATA_URI_TAGS", ar, {
      transform: Ne,
      base: ar
    }), Ct = Yt(a, "FORBID_CONTENTS", gn, {
      transform: Ne
    }), L = Yt(a, "FORBID_TAGS", ft({}), {
      transform: Ne
    }), k = Yt(a, "FORBID_ATTR", ft({}), {
      transform: Ne
    }), xt = ct(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? ft(a.USE_PROFILES) : a.USE_PROFILES : !1, K = a.ALLOW_ARIA_ATTR !== !1, F = a.ALLOW_DATA_ATTR !== !1, W = a.ALLOW_UNKNOWN_PROTOCOLS || !1, w = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, N = a.SAFE_FOR_TEMPLATES || !1, U = a.SAFE_FOR_XML !== !1, x = a.WHOLE_DOCUMENT || !1, Ee = a.RETURN_DOM || !1, Ze = a.RETURN_DOM_FRAGMENT || !1, _e = a.RETURN_TRUSTED_TYPE || !1, pe = a.FORCE_BODY || !1, qe = a.SANITIZE_DOM !== !1, Dt = a.SANITIZE_NAMED_PROPS || !1, yn = a.KEEP_CONTENT !== !1, en = a.IN_PLACE || !1, h = Ru(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : to, vn = typeof a.NAMESPACE == "string" ? a.NAMESPACE : wt, Xr = Ei(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ae({}, Zi)
      // Default built-in map
    ), Jr = Ei(
      a,
      "HTML_INTEGRATION_POINTS",
      () => ae({}, Qi)
      // Default built-in map
    );
    const y = Ei(a, "CUSTOM_ELEMENT_HANDLING", () => wn(null));
    if (I = wn(null), ct(y, "tagNameCheck") && es(y.tagNameCheck) && (I.tagNameCheck = y.tagNameCheck), ct(y, "attributeNameCheck") && es(y.attributeNameCheck) && (I.attributeNameCheck = y.attributeNameCheck), ct(y, "allowCustomizedBuiltInElements") && typeof y.allowCustomizedBuiltInElements == "boolean" && (I.allowCustomizedBuiltInElements = y.allowCustomizedBuiltInElements), De(I), N && (F = !1), Ze && (Ee = !0), xt && (g = ae({}, Zs), T = wn(null), xt.html === !0 && (ae(g, Js), ae(T, Qs)), xt.svg === !0 && (ae(g, yi), ae(T, vi), ae(T, Tr)), xt.svgFilters === !0 && (ae(g, gi), ae(T, vi), ae(T, Tr)), xt.mathMl === !0 && (ae(g, _i), ae(T, eo), ae(T, Tr))), C.tagCheck = null, C.attributeCheck = null, ct(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? C.tagCheck = a.ADD_TAGS : Ln(a.ADD_TAGS) && (g === R && (g = ft(g)), ae(g, a.ADD_TAGS, Ne))), ct(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? C.attributeCheck = a.ADD_ATTR : Ln(a.ADD_ATTR) && (T === A && (T = ft(T)), ae(T, a.ADD_ATTR, Ne))), ct(a, "ADD_FORBID_CONTENTS") && Ln(a.ADD_FORBID_CONTENTS) && (Ct === gn && (Ct = ft(Ct)), ae(Ct, a.ADD_FORBID_CONTENTS, Ne)), yn && (g["#text"] = !0), x && ae(g, ["html", "head", "body"]), g.table && (ae(g, ["tbody"]), delete L.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw on('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw on('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const O = ve;
      ve = a.TRUSTED_TYPES_POLICY;
      try {
        Re = st("");
      } catch (V) {
        throw ve = O, V;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (ve = void 0, Re = "") : (ve === void 0 && (ve = le()), ve && typeof Re == "string" && (Re = st("")));
    ke && ke(a), En = a;
  }, ts = ae({}, [...yi, ...gi, ...Ou]), ns = ae({}, [..._i, ...Nu]), Ol = function(a, y, O) {
    return y.namespaceURI === wt ? a === "svg" : y.namespaceURI === tn ? a === "svg" && (O === "annotation-xml" || Xr[O]) : !!ts[a];
  }, Nl = function(a, y, O) {
    return y.namespaceURI === wt ? a === "math" : y.namespaceURI === cr ? a === "math" && Jr[O] : !!ns[a];
  }, Pl = function(a, y, O) {
    return y.namespaceURI === cr && !Jr[O] || y.namespaceURI === tn && !Xr[O] ? !1 : !ns[a] && (Cl[a] || !ts[a]);
  }, Ll = function(a) {
    let y = q(a);
    (!y || !y.tagName) && (y = {
      namespaceURI: vn,
      tagName: "template"
    });
    const O = qn(a.tagName), V = qn(y.tagName);
    return Yr[a.namespaceURI] ? a.namespaceURI === cr ? Ol(O, y, V) : a.namespaceURI === tn ? Nl(O, y, V) : a.namespaceURI === wt ? Pl(O, y, V) : !!(Dn === "application/xhtml+xml" && Yr[a.namespaceURI]) : !1;
  }, Gt = function(a) {
    jn(t.removed, {
      element: a
    });
    try {
      q(a).removeChild(a);
    } catch {
      if (ee(a), !q(a))
        throw on("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, rs = function(a, y, O) {
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
    const y = te(a);
    if (y) {
      const V = [];
      an(y, (G) => {
        jn(V, G);
      }), an(V, (G) => {
        try {
          ee(G);
        } catch {
        }
      });
    }
    const O = J(a);
    if (O)
      for (let V = O.length - 1; V >= 0; --V) {
        const G = O[V], Q = G && G.name;
        typeof Q == "string" && rs(a, G, Q);
      }
  }, nn = function(a, y, O) {
    if (!O)
      try {
        O = y.getAttributeNode(a);
      } catch {
        O = null;
      }
    jn(t.removed, {
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
      if (Ee || Ze)
        try {
          Gt(y);
        } catch {
        }
      else
        try {
          y.setAttribute(a, "");
        } catch {
        }
  }, kl = function(a) {
    const y = J(a);
    if (y)
      for (let O = y.length - 1; O >= 0; --O) {
        const V = y[O], G = V && V.name;
        typeof G != "string" || T[Ne(G)] || rs(a, V, G);
      }
  }, fr = function(a) {
    const y = [a];
    for (; y.length > 0; ) {
      const O = y.pop();
      Ce(O) === ut.element && kl(O);
      const G = te(O);
      if (G)
        for (let Q = G.length - 1; Q >= 0; --Q)
          y.push(G[Q]);
    }
  }, is = function(a, y) {
    return U ? a === "patchsrc" ? !0 : a === "for" && y !== "label" && y !== "output" : !1;
  }, Il = function(a) {
    if (!U)
      return;
    const y = [a];
    for (; y.length > 0; ) {
      const O = y.pop(), V = Ce(O);
      if (V === ut.processingInstruction || V === ut.comment && Ke(ro, O.data)) {
        try {
          ee(O);
        } catch {
        }
        continue;
      }
      if (V === ut.element) {
        const Q = O, be = Ne(Ae(O));
        try {
          Q.hasAttribute && Q.hasAttribute("patchsrc") && Q.removeAttribute("patchsrc"), Q.hasAttribute && Q.hasAttribute("for") && is("for", be) && Q.removeAttribute("for");
        } catch {
        }
      }
      const G = te(O);
      if (G)
        for (let Q = G.length - 1; Q >= 0; --Q)
          y.push(G[Q]);
    }
  }, ss = function(a) {
    let y = null, O = null;
    if (pe)
      a = "<remove></remove>" + a;
    else {
      const Q = Ks(a, /^[\r\n\t ]+/);
      O = Q && Q[0];
    }
    Dn === "application/xhtml+xml" && vn === wt && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const V = ve ? st(a) : a;
    if (vn === wt)
      try {
        y = new m().parseFromString(V, Dn);
      } catch {
      }
    if (!y || !y.documentElement) {
      y = Ie.createDocument(vn, "template", null);
      try {
        y.documentElement.innerHTML = Gr ? Re : V;
      } catch {
      }
    }
    const G = y.body || y.documentElement;
    return a && O && G.insertBefore(n.createTextNode(O), G.childNodes[0] || null), vn === wt ? Oe.call(y, x ? "html" : "body")[0] : x ? y.documentElement : G;
  }, os = function(a) {
    const y = xe ? xe(a) : a.ownerDocument;
    return Ue.call(
      y || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, dr = function(a) {
    return a = $n(a, Fe, " "), a = $n(a, ht, " "), a = $n(a, We, " "), a;
  }, Qr = function(a) {
    var y;
    a.normalize();
    const O = xe ? xe(a) : a.ownerDocument, V = Ue.call(
      O || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let G = V.nextNode();
    for (; G; )
      G.data = dr(G.data), G = V.nextNode();
    const Q = (y = a.querySelectorAll) === null || y === void 0 ? void 0 : y.call(a, "template");
    Q && an(Q, (be) => {
      Tn(be.content) && Qr(be.content);
    });
  }, pr = function(a) {
    const y = oe ? oe(a) : null;
    return typeof y != "string" || Ne(y) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== J(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
    a.childNodes !== te(a);
  }, Tn = function(a) {
    if (!$ || typeof a != "object" || a === null)
      return !1;
    try {
      return $(a) === ut.documentFragment;
    } catch {
      return !1;
    }
  }, Un = function(a) {
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
      O.call(t, a, y, En);
    });
  }
  const Ml = function(a, y) {
    return !!(U && a.hasChildNodes() && !Un(a.firstElementChild) && Ke(no, a.textContent) && Ke(no, a.innerHTML) || U && a.namespaceURI === wt && Vu[y] && (Un(a.firstElementChild) || typeof a.textContent == "string" && Ke(zu[y], a.textContent)) || a.nodeType === ut.processingInstruction || U && a.nodeType === ut.comment && Ke(ro, a.data));
  }, hr = function(a, y) {
    if (a instanceof RegExp)
      return Ke(a, y);
    if (a instanceof Function) {
      for (var O = arguments.length, V = new Array(O > 2 ? O - 2 : 0), G = 2; G < O; G++)
        V[G - 2] = arguments[G];
      return !!a(y, ...V);
    }
    return !1;
  }, Dl = function(a, y, O) {
    if (!L[y] && fs(y) && hr(I.tagNameCheck, y))
      return !1;
    if (yn && !Ct[y]) {
      const V = q(a), G = te(a);
      if (G && V) {
        const Q = G.length;
        for (let be = Q - 1; be >= 0; --be) {
          const Te = a === O ? z(G[be], !0) : G[be];
          V.insertBefore(Te, B(a));
        }
      }
    }
    return Gt(a), !0;
  }, ls = function(a, y, O, V) {
    return a.length === 0 ? y : y === O || y === V ? ft(y) : y;
  }, as = function(a, y) {
    return a === y || q(a) !== null ? !1 : (en && fr(a), !0);
  }, cs = function(a, y) {
    if (Rt(ce.beforeSanitizeElements, a, null), as(a, y))
      return !0;
    if (pr(a))
      return Gt(a), !0;
    const O = Ne(Ae(a));
    if (g = ls(ce.uponSanitizeElement, g, R, d), Rt(ce.uponSanitizeElement, a, {
      tagName: O,
      allowedTags: g
    }), as(a, y))
      return !0;
    if (Ml(a, O))
      return Gt(a), !0;
    if (L[O] || !(C.tagCheck instanceof Function && C.tagCheck(O)) && !g[O]) {
      const G = Dl(a, O, y);
      return G === !1 && Rt(ce.afterSanitizeElements, a, null), G;
    }
    if (Ce(a) === ut.element && !Ll(a) || (O === "noscript" || O === "noembed" || O === "noframes") && Ke(ju, a.innerHTML))
      return Gt(a), !0;
    if (N && a.nodeType === ut.text) {
      const G = dr(a.textContent);
      a.textContent !== G && (jn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = G);
    }
    return Rt(ce.afterSanitizeElements, a, null), !1;
  }, us = function(a, y, O) {
    if (k[y] || is(y, a) || qe && (y === "id" || y === "name") && (O in n || O in Rl))
      return !1;
    const V = T[y] || C.attributeCheck instanceof Function && C.attributeCheck(y, a);
    return F && Ke(mt, y) || K && Ke(Je, y) ? !0 : V ? _n[y] || Ke(h, $n(O, St, "")) || (y === "src" || y === "xlink:href" || y === "href") && a !== "script" && Gs(O, "data:") === 0 && At[a] || W && !Ke(He, $n(O, St, "")) ? !0 : !O : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      fs(a) && hr(I.tagNameCheck, a) && hr(I.attributeNameCheck, y, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      y === "is" && I.allowCustomizedBuiltInElements && hr(I.tagNameCheck, O)
    );
  }, Ul = ae({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), fs = function(a) {
    return !Ul[qn(a)] && Ke(f, a);
  }, Fl = function(a, y, O, V) {
    if (ve && typeof S == "object" && typeof S.getAttributeType == "function" && !O)
      switch (S.getAttributeType(a, y)) {
        case "TrustedHTML":
          return st(V);
        case "TrustedScriptURL":
          return ge(V);
      }
    return V;
  }, Hl = function(a, y, O, V) {
    try {
      O ? a.setAttributeNS(O, y, V) : a.setAttribute(y, V), pr(a) ? Gt(a) : qs(t.removed);
    } catch {
      nn(y, a);
    }
  }, ds = function(a) {
    Rt(ce.beforeSanitizeAttributes, a, null);
    const y = a.attributes;
    if (!y || pr(a))
      return;
    T = ls(ce.uponSanitizeAttribute, T, A, Y);
    const O = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let V = y.length;
    const G = Ne(a.nodeName);
    for (; V--; ) {
      const Q = y[V], be = Q.name, Te = Q.namespaceURI, ot = Q.value, lt = Ne(be), ti = ot;
      let Qe = be === "value" ? ti : Tu(ti);
      if (O.attrName = lt, O.attrValue = Qe, O.keepAttr = !0, O.forceKeepAttr = void 0, Rt(ce.uponSanitizeAttribute, a, O), Qe = O.attrValue, Dt && (lt === "id" || lt === "name") && Gs(Qe, Qt) !== 0 && (nn(be, a, Q), Qe = Qt + Qe), U && Ke(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Qe)) {
        nn(be, a, Q);
        continue;
      }
      if (lt === "attributename" && Ks(Qe, "href")) {
        nn(be, a, Q);
        continue;
      }
      if (!O.forceKeepAttr) {
        if (!O.keepAttr) {
          nn(be, a, Q);
          continue;
        }
        if (!w && Ke($u, Qe)) {
          nn(be, a, Q);
          continue;
        }
        if (N && (Qe = dr(Qe)), !us(G, lt, Qe)) {
          nn(be, a, Q);
          continue;
        }
        Qe = Fl(G, lt, Te, Qe), Qe !== ti && Hl(a, be, Te, Qe);
      }
    }
    Rt(ce.afterSanitizeAttributes, a, null);
  }, mr = function(a) {
    let y = null;
    const O = os(a);
    for (Rt(ce.beforeSanitizeShadowDOM, a, null); y = O.nextNode(); )
      if (Rt(ce.uponSanitizeShadowNode, y, null), cs(y, a), ds(y), Tn(y.content) && mr(y.content), Ce(y) === ut.element) {
        const V = D(y);
        Tn(V) && (ei(V), mr(V));
      }
    Rt(ce.afterSanitizeShadowDOM, a, null);
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
      const V = O.node, Q = Ce(V) === ut.element, be = te(V);
      if (be)
        for (let Te = be.length - 1; Te >= 0; --Te)
          y.push({
            node: be[Te],
            shadow: null
          });
      if (Q) {
        const Te = oe ? oe(V) : null;
        if (typeof Te == "string" && Ne(Te) === "template") {
          const ot = V.content;
          Tn(ot) && y.push({
            node: ot,
            shadow: null
          });
        }
      }
      if (Q) {
        const Te = D(V);
        Tn(Te) && y.push({
          node: null,
          shadow: Te
        }, {
          node: Te,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(M) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = null, O = null, V = null, G = null;
    if (Gr = !M, Gr && (M = "<!-->"), typeof M != "string" && !Un(M) && (M = wu(M), typeof M != "string"))
      throw on("dirty is not a string, aborting");
    if (!t.isSupported)
      return M;
    E ? (g = d, T = Y) : Zr(a), (ce.uponSanitizeElement.length > 0 || ce.uponSanitizeAttribute.length > 0) && (g = ft(g)), ce.uponSanitizeAttribute.length > 0 && (T = ft(T)), t.removed = [];
    const Q = en && typeof M != "string" && Un(M);
    if (Q) {
      Il(M);
      const ot = Ae(M);
      if (typeof ot == "string") {
        const lt = Ne(ot);
        if (!g[lt] || L[lt])
          throw ur(M), on("root node is forbidden and cannot be sanitized in-place");
      }
      if (pr(M))
        throw ur(M), on("root node is clobbered and cannot be sanitized in-place");
      try {
        ei(M);
      } catch (lt) {
        throw ur(M), lt;
      }
    } else if (Un(M))
      y = ss("<!---->"), O = y.ownerDocument.importNode(M, !0), O.nodeType === ut.element && O.nodeName === "BODY" || O.nodeName === "HTML" ? y = O : y.appendChild(O), ei(O);
    else {
      if (!Ee && !N && !x && // eslint-disable-next-line unicorn/prefer-includes
      M.indexOf("<") === -1)
        return ve && _e ? st(M) : M;
      if (y = ss(M), !y)
        return Ee ? null : _e ? Re : "";
    }
    y && pe && Gt(y.firstChild);
    const be = Q ? M : y;
    try {
      const ot = os(be);
      for (; V = ot.nextNode(); )
        cs(V, be), ds(V), Tn(V.content) && mr(V.content);
    } catch (ot) {
      throw Q && (ur(M), an(t.removed, (lt) => {
        lt.element && fr(lt.element);
      })), ot;
    }
    if (Q)
      return an(t.removed, (ot) => {
        ot.element && fr(ot.element);
      }), N && Qr(M), M;
    if (Ee) {
      if (N && Qr(y), Ze)
        for (G = Be.call(y.ownerDocument); y.firstChild; )
          G.appendChild(y.firstChild);
      else
        G = y;
      return (T.shadowroot || T.shadowrootmode) && (G = pt.call(r, G, !0)), G;
    }
    let Te = x ? y.outerHTML : y.innerHTML;
    return x && g["!doctype"] && y.ownerDocument && y.ownerDocument.doctype && y.ownerDocument.doctype.name && Ke(Fu, y.ownerDocument.doctype.name) && (Te = "<!DOCTYPE " + y.ownerDocument.doctype.name + `>
` + Te), N && (Te = dr(Te)), ve && _e ? st(Te) : Te;
  }, t.setConfig = function() {
    let M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zr(M), E = !0, d = g, Y = T;
  }, t.clearConfig = function() {
    En = null, E = !1, d = null, Y = null, ve = $e, Re = "";
  }, t.isValidAttribute = function(M, a, y) {
    En || Zr({});
    const O = Ne(M), V = Ne(a);
    return us(O, V, y);
  }, t.addHook = function(M, a) {
    typeof a == "function" && ct(ce, M) && jn(ce[M], a);
  }, t.removeHook = function(M, a) {
    if (ct(ce, M)) {
      if (a !== void 0) {
        const y = vu(ce[M], a);
        return y === -1 ? void 0 : Eu(ce[M], y, 1)[0];
      }
      return qs(ce[M]);
    }
  }, t.removeHooks = function(M) {
    ct(ce, M) && (ce[M] = []);
  }, t.removeAllHooks = function() {
    ce = io();
  }, t;
}
var qu = Tl();
function Ku(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ti, so;
function Gu() {
  if (so) return Ti;
  so = 1;
  var e = /["'&<>]/;
  Ti = t;
  function t(n) {
    var r = "" + n, i = e.exec(r);
    if (!i)
      return r;
    var s, o = "", l = 0, c = 0;
    for (l = i.index; l < r.length; l++) {
      switch (r.charCodeAt(l)) {
        case 34:
          s = "&quot;";
          break;
        case 38:
          s = "&amp;";
          break;
        case 39:
          s = "&#39;";
          break;
        case 60:
          s = "&lt;";
          break;
        case 62:
          s = "&gt;";
          break;
        default:
          continue;
      }
      c !== l && (o += r.substring(c, l)), c = l + 1, o += s;
    }
    return c !== l ? o + r.substring(c, l) : o;
  }
  return Ti;
}
var Yu = Gu();
const oo = /* @__PURE__ */ Ku(Yu);
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_");
globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function Xu(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function u(e, t, n, r, i) {
  const s = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof r == "object" ? r : {}
  }, c = (B) => B, _ = (l.sanitize ? qu.sanitize : c) || c, m = l.escape ? oo : c, S = (B) => typeof B == "string" || typeof B == "number", P = (B, te, q) => B.replace(/%n/g, "" + q).replace(/{([^{}]*)}/g, (D, J) => {
    if (te === void 0 || !(J in te))
      return m(D);
    const $ = te[J];
    return S($) ? m(`${$}`) : typeof $ == "object" && S($.value) ? ($.escape !== !1 ? oo : c)(`${$.value}`) : m(D);
  });
  let ee = (i?.bundle ?? Xu(e)).translations[t] || t;
  return ee = Array.isArray(ee) ? ee[0] : ee, _(typeof s == "object" || o !== void 0 ? P(
    ee,
    s,
    o
  ) : ee);
}
const Ju = { class: "library-vue-catalogue" }, Zu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Qu = { class: "library-catalogue-header" }, ef = { id: "library-catalogue-heading" }, tf = { class: "library-muted" }, nf = ["aria-label"], rf = ["href"], sf = ["href"], of = ["href"], lf = ["href"], af = ["aria-label"], cf = ["name", "value"], uf = { class: "library-quick-filter-search" }, ff = { value: "title" }, df = { value: "recent" }, pf = { value: "publicationDate" }, hf = { value: "publication" }, mf = { value: "lastOpened" }, bf = { value: "format" }, yf = { value: "" }, gf = { value: "1" }, _f = ["value"], vf = ["value"], Ef = ["aria-label"], Tf = ["aria-label"], Sf = { class: "library-filter-panel" }, xf = { class: "library-filter-panel-summary" }, Cf = ["aria-label"], Af = { value: "" }, wf = ["value"], Rf = { value: "" }, Of = ["value"], Nf = { value: "" }, Pf = ["value"], Lf = { value: "" }, kf = ["value"], If = { value: "" }, Mf = ["value"], Df = { value: "" }, Uf = ["value"], Ff = { value: "" }, Hf = ["value"], jf = { value: "" }, $f = ["value"], Vf = { value: "" }, zf = ["value"], Bf = { value: "" }, Wf = ["value"], qf = { value: "" }, Kf = { value: "1" }, Gf = { value: "" }, Yf = { value: "1" }, Xf = { value: "title" }, Jf = { value: "recent" }, Zf = { value: "publicationDate" }, Qf = { value: "publication" }, ed = { value: "lastOpened" }, td = { value: "format" }, nd = ["value"], rd = ["value"], id = ["aria-label"], sd = ["aria-label"], od = ["href"], ld = {
  key: 0,
  class: "library-discovery-header",
  "aria-labelledby": "library-discovery-heading"
}, ad = { class: "library-muted" }, cd = { id: "library-discovery-heading" }, ud = { class: "library-muted" }, fd = {
  href: "/apps/library/",
  class: "button secondary"
}, dd = { class: "library-muted library-filter-result-summary" }, pd = { key: 0 }, hd = { href: "?" }, md = { class: "library-batch-actions" }, bd = { class: "library-settings-count-badge" }, yd = ["action"], gd = ["value"], _d = ["name", "value"], vd = ["placeholder"], Ed = {
  type: "submit",
  class: "button primary"
}, Td = { class: "library-muted" }, Sd = ["action"], xd = ["value"], Cd = ["name", "value"], Ad = ["placeholder"], wd = {
  type: "submit",
  class: "button secondary"
}, Rd = { class: "library-muted" }, Od = ["action"], Nd = ["value"], Pd = ["name", "value"], Ld = {
  type: "submit",
  class: "button secondary"
}, kd = { class: "library-muted" }, Id = ["action"], Md = ["value"], Dd = ["name", "value"], Ud = { name: "bulkEditField" }, Fd = { value: "publicationType" }, Hd = { value: "subtitle" }, jd = { value: "creators" }, $d = { value: "publication" }, Vd = { value: "publicationDate" }, zd = { value: "language" }, Bd = { value: "publisher" }, Wd = { value: "genres" }, qd = { value: "classifications" }, Kd = {
  type: "submit",
  class: "button secondary"
}, Gd = { class: "library-muted" }, Yd = ["action"], Xd = ["value"], Jd = ["name", "value"], Zd = {
  type: "submit",
  class: "button secondary"
}, Qd = { class: "library-muted" }, ep = ["aria-label"], tp = ["href", "aria-label"], np = ["aria-label"], rp = { class: "library-pagination-range" }, ip = { key: 0 }, sp = ["href"], op = {
  key: 1,
  class: "library-muted"
}, lp = ["href"], ap = {
  key: 3,
  class: "library-muted"
}, cp = {
  key: 2,
  class: "library-periodical-groups"
}, up = { class: "library-periodical-groups-summary" }, fp = { id: "library-periodical-groups-heading" }, dp = { class: "library-muted" }, pp = ["href"], hp = { class: "library-muted" }, mp = {
  key: 3,
  class: "library-periodical-groups library-periodical-groups-empty"
}, bp = { class: "library-periodical-groups-summary" }, yp = { id: "library-periodical-groups-empty-heading" }, gp = { class: "library-muted" }, _p = {
  key: 4,
  class: "library-year-groups"
}, vp = { class: "library-periodical-groups-summary" }, Ep = { id: "library-year-groups-heading" }, Tp = { class: "library-muted" }, Sp = ["href"], xp = { class: "library-muted" }, Cp = { class: "library-empty-actions" }, Ap = ["href"], wp = { class: "library-muted" }, Rp = { class: "library-muted" }, Op = { class: "library-empty-actions" }, Np = ["href"], Pp = { class: "library-muted" }, Lp = { class: "library-empty-actions" }, kp = ["href"], Ip = {
  href: "?",
  class: "button primary"
}, Mp = { class: "library-muted" }, Dp = { class: "library-empty-actions" }, Up = ["href"], Fp = {
  key: 6,
  class: "library-cover-gallery"
}, Hp = ["href", "aria-label"], jp = ["src", "alt"], $p = ["action", "onSubmit"], Vp = ["value"], zp = ["value"], Bp = ["aria-pressed", "title", "aria-label", "onClick"], Wp = { class: "library-cover-summary" }, qp = { class: "library-cover-primary" }, Kp = ["aria-label"], Gp = ["href"], Yp = ["onToggle"], Xp = ["aria-label"], Jp = { class: "library-cover-meta" }, Zp = {
  key: 0,
  class: "library-creator"
}, Qp = { class: "library-cover-detail-list" }, eh = { class: "library-cover-detail-chip" }, th = {
  key: 0,
  class: "library-cover-detail-chip"
}, nh = {
  key: 1,
  class: "library-cover-detail-chip"
}, rh = {
  key: 2,
  class: "library-cover-detail-chip"
}, ih = {
  key: 3,
  class: "library-cover-detail-chip"
}, sh = {
  key: 4,
  class: "library-cover-detail-chip"
}, oh = {
  key: 5,
  class: "library-cover-detail-chip"
}, lh = {
  key: 6,
  class: "library-cover-detail-chip"
}, ah = {
  key: 1,
  class: "library-muted library-cover-description"
}, ch = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, uh = { key: 0 }, fh = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, dh = {
  key: 0,
  class: "library-muted"
}, ph = { class: "library-cover-actions" }, hh = ["href"], mh = ["href"], bh = ["href"], yh = {
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
    }), s = /* @__PURE__ */ un((i.items || []).map((x) => ({ ...x }))), o = ie(() => s), l = ie(() => i.shelves || []), c = ie(() => i.formats || []), _ = ie(() => i.publications || []), m = ie(() => i.publicationSummaries || []), S = ie(() => i.publicationYears || []), P = ie(() => i.creators || []), z = ie(() => i.scanStatuses || []), ee = ie(() => i.workflowStatuses || []), B = ie(() => i.genres || []), te = ie(() => i.classifications || []), q = ie(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
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
    }), J = ie(() => i.settingsUrl || ""), $ = ie(() => i.requestToken || ""), oe = ie(() => i.metadataExportUrl || ""), xe = ie(() => i.metadataSidecarManifestUrl || ""), Ce = ie(() => i.metadataSidecarBundleUrl || ""), Ae = ie(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), ve = ie(() => i.batchTagUrl || "/apps/library/bulk/tags"), Re = ie(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), $e = ie(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), it = ie(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Ve = ie(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), ze = ie(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), st = ie(() => i.discoveryPage === "publication"), ge = ie(() => i.discoveryPage === "year"), le = ie(() => st.value || ge.value), re = ie(() => i.discoveryTitle || D.publication || D.year || ""), Ie = ie(() => Number(i.rootCount || 0)), Ue = ie(() => Number(i.enabledRootCount || 0)), Be = ie(() => Ie.value === 0), Oe = ie(() => Ie.value > 0 && Ue.value === 0), pt = ie(() => Fe.value.length > 0), ce = {
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
    }, Fe = ie(() => Object.entries(ce).map(([x, E]) => ({ key: x, label: E, value: D[x] || "" })).filter((x) => String(x.value).trim() !== "")), ht = ie(() => Object.entries(D).filter(([x, E]) => !["q", "sort", "starred"].includes(x) && String(E || "").trim() !== "").map(([x, E]) => ({ key: x, value: E }))), We = ie(() => Object.entries(D).filter(([x, E]) => String(E || "").trim() !== "").map(([x, E]) => ({ key: x, value: E }))), mt = /* @__PURE__ */ un({}), Je = /* @__PURE__ */ _a(null);
    let He = null;
    function St(x) {
      const E = new URLSearchParams(new FormData(x));
      for (const d of Array.from(E.keys()))
        String(E.get(d) || "").trim() === "" && E.delete(d);
      return E.delete("page"), E;
    }
    function f(x) {
      s.splice(0, s.length, ...(x.items || []).map((E) => ({ ...E })));
      for (const E of ["shelves", "formats", "publications", "publicationSummaries", "publicationYears", "publicationYearLandingUrls", "creators", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl"])
        Object.prototype.hasOwnProperty.call(x, E) && (i[E] = x[E]);
      Object.assign(D, x.activeFilters || {});
    }
    async function h(x) {
      const E = x?.currentTarget?.tagName === "FORM" ? x.currentTarget : x?.currentTarget?.form;
      if (!E) return;
      const Y = St(E).toString(), pe = Y ? `?${Y}` : "", Ee = await fetch(Ae.value + pe, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!Ee.ok) {
        E.submit();
        return;
      }
      f(await Ee.json()), history.replaceState({}, "", Y ? `?${Y}` : window.location.pathname);
    }
    function g(x) {
      h(x);
    }
    function R(x) {
      window.clearTimeout(He), He = window.setTimeout(() => g(x), 350);
    }
    function T(x) {
      const E = new URLSearchParams();
      for (const [Y, pe] of Object.entries(D)) {
        const Ee = String(pe || "").trim();
        Ee !== "" && Y !== x && !(Y === "sort" && Ee === "title") && E.set(Y, Ee);
      }
      const d = E.toString();
      return d ? `?${d}` : "?";
    }
    function A() {
      return T("q");
    }
    function I(x) {
      return String(x || "").toUpperCase();
    }
    function L(x) {
      return x.nextcloudTags || [];
    }
    function k(x) {
      return m.value.find((d) => d.publication === x)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(x)}`;
    }
    function C(x) {
      return i.publicationYearLandingUrls?.[x] || `/apps/library/years/${encodeURIComponent(x)}`;
    }
    function K(x, E) {
      mt[x] = !!E?.currentTarget?.open;
    }
    function F(x) {
      const E = String(x?.tagName || "").toLowerCase();
      return x?.isContentEditable || ["input", "select", "textarea", "button"].includes(E);
    }
    function W(x) {
      x.key !== "/" || x.metaKey || x.ctrlKey || x.altKey || x.shiftKey || F(x.target) || (x.preventDefault(), Je.value?.focus(), Je.value?.select?.());
    }
    function w(x) {
      x.key !== "Escape" || document.activeElement !== Je.value || D.q === "" || (x.preventDefault(), D.q = "", Je.value.value = "", window.clearTimeout(He), g({ currentTarget: Je.value }));
    }
    function N(x) {
      W(x), w(x);
    }
    qo(() => {
      window.addEventListener("keydown", N);
    }), Ko(() => {
      window.removeEventListener("keydown", N);
    });
    async function U(x, E) {
      const d = E?.currentTarget?.closest?.("form") || E?.currentTarget;
      if (!d || !x?.starUrl) return;
      const Y = !!x.starred;
      x.starred = !Y;
      try {
        (await fetch(x.starUrl, {
          method: "POST",
          body: new FormData(d),
          credentials: "same-origin"
        })).ok || (x.starred = Y);
      } catch {
        x.starred = Y;
      }
    }
    return (x, E) => (H(), j("div", Ju, [
      p("section", Zu, [
        p("div", Qu, [
          p("div", null, [
            p("h2", ef, b(v(u)("library", "Publication catalogue")), 1),
            p("p", tf, b(v(u)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          p("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": v(u)("library", "Library actions")
          }, [
            p("a", {
              href: J.value,
              class: "button secondary",
              "aria-label": "Open Library settings"
            }, b(v(u)("library", "Settings")), 9, rf),
            oe.value ? (H(), j("a", {
              key: 0,
              href: oe.value,
              class: "button secondary",
              "aria-label": "Export corrected metadata"
            }, b(v(u)("library", "Export corrected metadata")), 9, sf)) : Pe("", !0),
            xe.value ? (H(), j("a", {
              key: 1,
              href: xe.value,
              class: "button secondary",
              "aria-label": "Export sidecar manifest"
            }, b(v(u)("library", "Sidecar manifest")), 9, of)) : Pe("", !0),
            Ce.value ? (H(), j("a", {
              key: 2,
              href: Ce.value,
              class: "button secondary",
              "aria-label": "Export sidecar ZIP"
            }, b(v(u)("library", "Sidecar ZIP")), 9, lf)) : Pe("", !0)
          ], 8, nf)
        ]),
        p("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": v(u)("library", "Quick catalogue filters"),
          onSubmit: Er(h, ["prevent"])
        }, [
          (H(!0), j(se, null, Se(ht.value, (d) => (H(), j("input", {
            key: d.key,
            type: "hidden",
            name: d.key,
            value: d.value
          }, null, 8, cf))), 128)),
          p("label", uf, [
            ue(b(v(u)("library", "Search")) + " ", 1),
            E[18] || (E[18] = p("kbd", { class: "library-keyboard-hint" }, "/", -1)),
            Me(p("input", {
              ref_key: "quickSearchInput",
              ref: Je,
              "onUpdate:modelValue": E[0] || (E[0] = (d) => D.q = d),
              "data-library-quick-search": "",
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex...",
              onInput: R
            }, null, 544), [
              [mi, D.q]
            ])
          ]),
          p("label", null, [
            ue(b(v(u)("library", "Sort")) + " ", 1),
            Me(p("select", {
              "onUpdate:modelValue": E[1] || (E[1] = (d) => D.sort = d),
              name: "sort",
              onChange: h
            }, [
              p("option", ff, b(v(u)("library", "Title")), 1),
              p("option", df, b(v(u)("library", "Recently added")), 1),
              p("option", pf, b(v(u)("library", "Publication date")), 1),
              p("option", hf, b(v(u)("library", "Series")), 1),
              p("option", mf, b(v(u)("library", "Recently opened")), 1),
              p("option", bf, b(v(u)("library", "Format")), 1)
            ], 544), [
              [et, D.sort]
            ])
          ]),
          p("label", null, [
            ue(b(v(u)("library", "Starred")) + " ", 1),
            Me(p("select", {
              "onUpdate:modelValue": E[2] || (E[2] = (d) => D.starred = d),
              name: "starred",
              onChange: h
            }, [
              p("option", yf, b(v(u)("library", "All")), 1),
              p("option", gf, b(v(u)("library", "Starred")), 1)
            ], 544), [
              [et, D.starred]
            ])
          ]),
          p("label", null, [
            ue(b(v(u)("library", "Size")) + " ", 1),
            p("select", {
              value: q.value.limit,
              name: "limit",
              onChange: h
            }, [
              (H(), j(se, null, Se(r, (d) => p("option", {
                key: d,
                value: d
              }, b(d), 9, vf)), 64))
            ], 40, _f)
          ]),
          p("button", {
            type: "submit",
            class: "button primary",
            "aria-label": v(u)("library", "Apply catalogue filters")
          }, b(v(u)("library", "Apply filters")), 9, Ef),
          p("a", {
            href: "?",
            class: "button secondary",
            "aria-label": v(u)("library", "Clear catalogue filters")
          }, b(v(u)("library", "Clear all")), 9, Tf)
        ], 40, af),
        p("details", Sf, [
          p("summary", xf, b(v(u)("library", "Show catalogue filters")), 1),
          p("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": v(u)("library", "Catalogue search and filters"),
            onSubmit: Er(h, ["prevent"])
          }, [
            p("label", null, [
              ue(b(v(u)("library", "Search title / author")) + " ", 1),
              Me(p("input", {
                "onUpdate:modelValue": E[3] || (E[3] = (d) => D.q = d),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [mi, D.q]
              ])
            ]),
            p("label", null, [
              ue(b(v(u)("library", "Type")) + " ", 1),
              Me(p("select", {
                "onUpdate:modelValue": E[4] || (E[4] = (d) => D.type = d),
                name: "type"
              }, [
                p("option", Af, b(v(u)("library", "All types")), 1),
                (H(), j(se, null, Se(n, (d) => p("option", {
                  key: d,
                  value: d
                }, b(d), 9, wf)), 64))
              ], 512), [
                [et, D.type]
              ])
            ]),
            p("label", null, [
              ue(b(v(u)("library", "Series / periodical")) + " ", 1),
              Me(p("select", {
                "onUpdate:modelValue": E[5] || (E[5] = (d) => D.publication = d),
                name: "publication"
              }, [
                p("option", Rf, b(v(u)("library", "All series and periodicals")), 1),
                (H(!0), j(se, null, Se(_.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, b(d), 9, Of))), 128))
              ], 512), [
                [et, D.publication]
              ])
            ]),
            p("label", null, [
              ue(b(v(u)("library", "Publication year")) + " ", 1),
              Me(p("select", {
                "onUpdate:modelValue": E[6] || (E[6] = (d) => D.year = d),
                name: "year"
              }, [
                p("option", Nf, b(v(u)("library", "All years")), 1),
                (H(!0), j(se, null, Se(S.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, b(d), 9, Pf))), 128))
              ], 512), [
                [et, D.year]
              ])
            ]),
            p("label", null, [
              ue(b(v(u)("library", "Creator")) + " ", 1),
              Me(p("select", {
                "onUpdate:modelValue": E[7] || (E[7] = (d) => D.creator = d),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                p("option", Lf, b(v(u)("library", "All creators")), 1),
                (H(!0), j(se, null, Se(P.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, b(d), 9, kf))), 128))
              ], 512), [
                [et, D.creator]
              ])
            ]),
            p("label", null, [
              ue(b(v(u)("library", "Nextcloud tag")) + " ", 1),
              Me(p("input", {
                "onUpdate:modelValue": E[8] || (E[8] = (d) => D.tag = d),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [mi, D.tag]
              ])
            ]),
            p("label", null, [
              ue(b(v(u)("library", "Format")) + " ", 1),
              Me(p("select", {
                "onUpdate:modelValue": E[9] || (E[9] = (d) => D.format = d),
                name: "format"
              }, [
                p("option", If, b(v(u)("library", "All formats")), 1),
                (H(!0), j(se, null, Se(c.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, b(I(d)), 9, Mf))), 128))
              ], 512), [
                [et, D.format]
              ])
            ]),
            p("label", null, [
              ue(b(v(u)("library", "Shelf")) + " ", 1),
              Me(p("select", {
                "onUpdate:modelValue": E[10] || (E[10] = (d) => D.shelf = d),
                name: "shelf"
              }, [
                p("option", Df, b(v(u)("library", "All shelves")), 1),
                (H(!0), j(se, null, Se(l.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, b(d), 9, Uf))), 128))
              ], 512), [
                [et, D.shelf]
              ])
            ]),
            p("label", null, [
              ue(b(v(u)("library", "Scan status")) + " ", 1),
              Me(p("select", {
                "onUpdate:modelValue": E[11] || (E[11] = (d) => D.status = d),
                name: "status"
              }, [
                p("option", Ff, b(v(u)("library", "All scan statuses")), 1),
                (H(!0), j(se, null, Se(z.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, b(d), 9, Hf))), 128))
              ], 512), [
                [et, D.status]
              ])
            ]),
            p("label", null, [
              ue(b(v(u)("library", "Workflow status")) + " ", 1),
              Me(p("select", {
                "onUpdate:modelValue": E[12] || (E[12] = (d) => D.workflowStatus = d),
                name: "workflowStatus"
              }, [
                p("option", jf, b(v(u)("library", "All workflow statuses")), 1),
                (H(!0), j(se, null, Se(ee.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, b(d), 9, $f))), 128))
              ], 512), [
                [et, D.workflowStatus]
              ])
            ]),
            p("label", null, [
              ue(b(v(u)("library", "Genre")) + " ", 1),
              Me(p("select", {
                "onUpdate:modelValue": E[13] || (E[13] = (d) => D.genre = d),
                name: "genre"
              }, [
                p("option", Vf, b(v(u)("library", "All genres")), 1),
                (H(!0), j(se, null, Se(B.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, b(d), 9, zf))), 128))
              ], 512), [
                [et, D.genre]
              ])
            ]),
            p("label", null, [
              ue(b(v(u)("library", "Classification")) + " ", 1),
              Me(p("select", {
                "onUpdate:modelValue": E[14] || (E[14] = (d) => D.classification = d),
                name: "classification"
              }, [
                p("option", Bf, b(v(u)("library", "All classifications")), 1),
                (H(!0), j(se, null, Se(te.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, b(d), 9, Wf))), 128))
              ], 512), [
                [et, D.classification]
              ])
            ]),
            p("label", null, [
              ue(b(v(u)("library", "Scanner conflicts")) + " ", 1),
              Me(p("select", {
                "onUpdate:modelValue": E[15] || (E[15] = (d) => D.scannerConflicts = d),
                name: "scannerConflicts"
              }, [
                p("option", qf, b(v(u)("library", "All metadata")), 1),
                p("option", Kf, b(v(u)("library", "Needs review")), 1)
              ], 512), [
                [et, D.scannerConflicts]
              ])
            ]),
            p("label", null, [
              ue(b(v(u)("library", "Starred")) + " ", 1),
              Me(p("select", {
                "onUpdate:modelValue": E[16] || (E[16] = (d) => D.starred = d),
                name: "starred"
              }, [
                p("option", Gf, b(v(u)("library", "All publications")), 1),
                p("option", Yf, b(v(u)("library", "Starred only")), 1)
              ], 512), [
                [et, D.starred]
              ])
            ]),
            p("label", null, [
              ue(b(v(u)("library", "Sort")) + " ", 1),
              Me(p("select", {
                "onUpdate:modelValue": E[17] || (E[17] = (d) => D.sort = d),
                name: "sort"
              }, [
                p("option", Xf, b(v(u)("library", "Title")), 1),
                p("option", Jf, b(v(u)("library", "Recently added")), 1),
                p("option", Zf, b(v(u)("library", "Publication date")), 1),
                p("option", Qf, b(v(u)("library", "Series / periodical")), 1),
                p("option", ed, b(v(u)("library", "Recently opened")), 1),
                p("option", td, b(v(u)("library", "Format")), 1)
              ], 512), [
                [et, D.sort]
              ])
            ]),
            p("label", null, [
              ue(b(v(u)("library", "Page size")) + " ", 1),
              p("select", {
                value: q.value.limit,
                name: "limit"
              }, [
                (H(), j(se, null, Se(r, (d) => p("option", {
                  key: d,
                  value: d
                }, b(d), 9, rd)), 64))
              ], 8, nd)
            ]),
            p("button", {
              type: "submit",
              class: "button primary",
              "aria-label": v(u)("library", "Apply catalogue filters")
            }, b(v(u)("library", "Apply filters")), 9, id),
            p("a", {
              href: "?",
              class: "button secondary",
              "aria-label": v(u)("library", "Clear catalogue filters")
            }, b(v(u)("library", "Clear")), 9, sd),
            p("a", {
              href: ze.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, b(v(u)("library", "Review scanner conflicts")), 9, od)
          ], 40, Cf)
        ]),
        le.value ? (H(), j("section", ld, [
          p("p", ad, b(ge.value ? v(u)("library", "Publication year") : v(u)("library", "Publication / series")), 1),
          p("h3", cd, b(re.value), 1),
          p("p", ud, b(q.value.total) + " " + b(ge.value ? v(u)("library", "items from this publication year. Sorted by publication date when available.") : v(u)("library", "items in this publication. Sorted by issue/date context when available.")), 1),
          p("p", null, [
            p("a", fd, b(v(u)("library", "Back to full catalogue")), 1)
          ])
        ])) : Pe("", !0),
        p("p", dd, [
          ue(b(v(u)("library", "Showing")) + " " + b(q.value.from) + "–" + b(q.value.to) + " " + b(v(u)("library", "of")) + " " + b(q.value.total) + " " + b(v(u)("library", "catalogue items")), 1),
          Fe.value.length > 0 ? (H(), j("span", pd, [
            E[19] || (E[19] = ue(" · ", -1)),
            p("a", hd, b(v(u)("library", "Clear all filters")), 1)
          ])) : Pe("", !0)
        ]),
        p("details", md, [
          p("summary", null, [
            ue(b(v(u)("library", "Batch actions for current results")) + " ", 1),
            p("span", bd, b(q.value.total) + " " + b(v(u)("library", "Current filter result")), 1)
          ]),
          p("form", {
            method: "post",
            action: ve.value,
            class: "library-batch-tag-form"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: $.value
            }, null, 8, gd),
            (H(!0), j(se, null, Se(We.value, (d) => (H(), j("input", {
              key: d.key,
              type: "hidden",
              name: d.key,
              value: d.value
            }, null, 8, _d))), 128)),
            p("label", null, [
              p("span", null, b(v(u)("library", "Nextcloud tag")), 1),
              p("input", {
                type: "text",
                name: "nextcloudTagName",
                list: "library-nextcloud-tag-suggestions",
                placeholder: v(u)("library", "e.g. Review"),
                autocomplete: "off"
              }, null, 8, vd)
            ]),
            p("button", Ed, b(v(u)("library", "Apply Nextcloud tag to current results")), 1),
            p("p", Td, b(v(u)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
          ], 8, yd),
          p("form", {
            method: "post",
            action: Re.value,
            class: "library-batch-tag-remove-form"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: $.value
            }, null, 8, xd),
            (H(!0), j(se, null, Se(We.value, (d) => (H(), j("input", {
              key: `remove-tag-${d.key}`,
              type: "hidden",
              name: d.key,
              value: d.value
            }, null, 8, Cd))), 128)),
            p("label", null, [
              p("span", null, b(v(u)("library", "Nextcloud tag")), 1),
              p("input", {
                type: "text",
                name: "nextcloudTagName",
                list: "library-nextcloud-tag-suggestions",
                placeholder: v(u)("library", "e.g. Review"),
                autocomplete: "off"
              }, null, 8, Ad)
            ]),
            p("button", wd, b(v(u)("library", "Remove tag from current results")), 1),
            p("p", Rd, b(v(u)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
          ], 8, Sd),
          p("form", {
            method: "post",
            action: $e.value,
            class: "library-batch-metadata-reset-form"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: $.value
            }, null, 8, Nd),
            (H(!0), j(se, null, Se(We.value, (d) => (H(), j("input", {
              key: `reset-${d.key}`,
              type: "hidden",
              name: d.key,
              value: d.value
            }, null, 8, Pd))), 128)),
            E[20] || (E[20] = p("input", {
              type: "hidden",
              name: "scannerConflicts",
              value: "1"
            }, null, -1)),
            p("button", Ld, b(v(u)("library", "Reset filtered metadata")), 1),
            p("p", kd, b(v(u)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
          ], 8, Od),
          p("form", {
            method: "post",
            action: it.value,
            class: "library-batch-metadata-edit-preview-form",
            target: "_blank"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: $.value
            }, null, 8, Md),
            (H(!0), j(se, null, Se(We.value, (d) => (H(), j("input", {
              key: `edit-preview-${d.key}`,
              type: "hidden",
              name: d.key,
              value: d.value
            }, null, 8, Dd))), 128)),
            p("label", null, [
              p("span", null, b(v(u)("library", "Metadata field")), 1),
              p("select", Ud, [
                p("option", Fd, b(v(u)("library", "Publication type")), 1),
                p("option", Hd, b(v(u)("library", "Subtitle")), 1),
                p("option", jd, b(v(u)("library", "Creators")), 1),
                p("option", $d, b(v(u)("library", "Series / periodical")), 1),
                p("option", Vd, b(v(u)("library", "Publication date")), 1),
                p("option", zd, b(v(u)("library", "Language")), 1),
                p("option", Bd, b(v(u)("library", "Publisher")), 1),
                p("option", Wd, b(v(u)("library", "Genres")), 1),
                p("option", qd, b(v(u)("library", "Classifications")), 1)
              ])
            ]),
            p("label", null, [
              p("span", null, b(v(u)("library", "Preview value")), 1),
              E[21] || (E[21] = p("input", {
                type: "text",
                name: "bulkEditValue",
                placeholder: "magazine, de, photography...",
                autocomplete: "off"
              }, null, -1))
            ]),
            p("button", Kd, b(v(u)("library", "Preview metadata edit")), 1),
            p("p", Gd, b(v(u)("library", "Preview-first batch metadata edit for current filter results. No changes are written during preview.")), 1)
          ], 8, Id),
          p("form", {
            method: "post",
            action: Ve.value,
            class: "library-batch-cover-refresh-form"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: $.value
            }, null, 8, Xd),
            (H(!0), j(se, null, Se(We.value, (d) => (H(), j("input", {
              key: `cover-${d.key}`,
              type: "hidden",
              name: d.key,
              value: d.value
            }, null, 8, Jd))), 128)),
            p("button", Zd, b(v(u)("library", "Request fresh cover previews")), 1),
            p("p", Qd, b(v(u)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
          ], 8, Yd)
        ]),
        Fe.value.length > 0 ? (H(), j("nav", {
          key: 1,
          class: "library-active-filter-chips",
          "aria-label": v(u)("library", "Active filters")
        }, [
          p("span", null, b(v(u)("library", "Active filters")), 1),
          (H(!0), j(se, null, Se(Fe.value, (d) => (H(), j("a", {
            key: d.key,
            href: T(d.key),
            class: "library-filter-chip",
            "aria-label": `${v(u)("library", "Remove filter")}: ${d.label}`
          }, [
            p("strong", null, b(d.label) + ":", 1),
            ue(" " + b(d.value) + " ", 1),
            E[22] || (E[22] = p("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, tp))), 128))
        ], 8, ep)) : Pe("", !0),
        p("nav", {
          class: "library-pagination",
          "aria-label": v(u)("library", "Catalogue pagination")
        }, [
          p("span", rp, [
            ue(b(v(u)("library", "Page")) + " " + b(q.value.page), 1),
            q.value.total > 0 ? (H(), j("span", ip, " · " + b(q.value.from) + "–" + b(q.value.to), 1)) : Pe("", !0)
          ]),
          q.value.previousUrl ? (H(), j("a", {
            key: 0,
            href: q.value.previousUrl
          }, b(v(u)("library", "Previous")), 9, sp)) : (H(), j("span", op, b(v(u)("library", "Previous")), 1)),
          q.value.nextUrl ? (H(), j("a", {
            key: 2,
            href: q.value.nextUrl
          }, b(v(u)("library", "Next")), 9, lp)) : (H(), j("span", ap, b(v(u)("library", "Next")), 1))
        ], 8, np),
        m.value.length > 0 ? (H(), j("details", cp, [
          p("summary", up, b(v(u)("library", "Show top series and periodicals")), 1),
          p("h3", fp, b(v(u)("library", "Top series and periodicals")), 1),
          p("p", dp, b(v(u)("library", "Jump into recurring publications with one click.")), 1),
          p("ul", null, [
            (H(!0), j(se, null, Se(m.value, (d) => (H(), j("li", {
              key: d.publication
            }, [
              p("a", {
                href: k(d.publication)
              }, b(d.publication), 9, pp),
              p("span", hp, b(d.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : m.value.length === 0 ? (H(), j("details", mp, [
          p("summary", bp, b(v(u)("library", "Show top series and periodicals")), 1),
          p("h3", yp, b(v(u)("library", "No series or periodicals found yet")), 1),
          p("p", gp, b(v(u)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Pe("", !0),
        S.value.length > 0 ? (H(), j("details", _p, [
          p("summary", vp, b(v(u)("library", "Show publication years")), 1),
          p("h3", Ep, b(v(u)("library", "Top publication years")), 1),
          p("p", Tp, b(v(u)("library", "Jump into dated books, magazines, journals and comics by year.")), 1),
          p("ul", null, [
            (H(!0), j(se, null, Se(S.value, (d) => (H(), j("li", { key: d }, [
              p("a", {
                href: C(d)
              }, b(d), 9, Sp)
            ]))), 128))
          ])
        ])) : Pe("", !0),
        o.value.length === 0 ? (H(), j("div", {
          key: 5,
          class: On(["library-empty-content", { "library-first-run-guidance": Be.value || Oe.value, "library-filter-empty-state": pt.value && !Be.value && !Oe.value }]),
          role: "status"
        }, [
          Be.value ? (H(), j(se, { key: 0 }, [
            p("h3", null, b(v(u)("library", "Start with one Library root")), 1),
            p("p", xp, b(v(u)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            p("p", Cp, [
              p("a", {
                href: J.value,
                class: "button primary"
              }, b(v(u)("library", "Add a Library root")), 9, Ap),
              p("span", wp, b(v(u)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : Oe.value ? (H(), j(se, { key: 1 }, [
            p("h3", null, b(v(u)("library", "No enabled Library roots")), 1),
            p("p", Rp, b(v(u)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            p("p", Op, [
              p("a", {
                href: J.value,
                class: "button primary"
              }, b(v(u)("library", "Open Library settings")), 9, Np)
            ])
          ], 64)) : pt.value ? (H(), j(se, { key: 2 }, [
            p("h3", null, b(v(u)("library", "No matches for the current filters")), 1),
            p("p", Pp, b(v(u)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            p("p", Lp, [
              p("a", {
                href: A(),
                class: "button secondary"
              }, b(v(u)("library", "Clear search")), 9, kp),
              p("a", Ip, b(v(u)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (H(), j(se, { key: 3 }, [
            p("h3", null, b(v(u)("library", "No catalogue items yet")), 1),
            p("p", Mp, b(v(u)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            p("p", Dp, [
              p("a", {
                href: J.value,
                class: "button primary"
              }, b(v(u)("library", "Run a scan from settings")), 9, Up)
            ])
          ], 64))
        ], 2)) : (H(), j("div", Fp, [
          (H(!0), j(se, null, Se(o.value, (d) => (H(), j("article", {
            key: d.id,
            class: On(["library-cover-card", { "library-cover-card--open": mt[d.id] }])
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
              }, null, 8, jp)
            ], 8, Hp),
            p("form", {
              method: "post",
              action: d.starUrl,
              class: "library-cover-star-form",
              onSubmit: Er((Y) => U(d, Y), ["prevent"])
            }, [
              p("input", {
                type: "hidden",
                name: "requesttoken",
                value: $.value
              }, null, 8, Vp),
              E[23] || (E[23] = p("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              p("input", {
                type: "hidden",
                name: "starred",
                value: d.starred ? "0" : "1"
              }, null, 8, zp),
              p("button", {
                type: "submit",
                class: On(["library-cover-star-button", { "library-cover-star-button--starred": d.starred }]),
                "aria-pressed": d.starred ? "true" : "false",
                title: d.starred ? v(u)("library", "Unstar this publication") : v(u)("library", "Star this publication"),
                "aria-label": d.starred ? v(u)("library", "Unstar this publication") : v(u)("library", "Star this publication"),
                onClick: Er((Y) => U(d, Y), ["prevent"])
              }, b(d.starred ? "★" : "☆"), 11, Bp)
            ], 40, $p),
            p("div", Wp, [
              p("div", qp, [
                p("h3", null, [
                  d.starred ? (H(), j("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": v(u)("library", "Starred")
                  }, "★", 8, Kp)) : Pe("", !0),
                  ue(b(d.title), 1)
                ]),
                p("a", {
                  class: "library-cover-read",
                  href: d.openUrl
                }, b(v(u)("library", "Read")), 9, Gp)
              ]),
              p("details", {
                class: "library-cover-details",
                onToggle: (Y) => K(d.id, Y)
              }, [
                p("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${v(u)("library", "Show details and actions")}: ${d.title}`
                }, b(v(u)("library", "Details")), 9, Xp),
                p("div", Jp, [
                  d.creators ? (H(), j("p", Zp, b(d.creators), 1)) : Pe("", !0),
                  p("dl", Qp, [
                    p("div", eh, [
                      p("dt", null, b(v(u)("library", "Type")), 1),
                      p("dd", null, b(d.publicationType), 1)
                    ]),
                    d.publication ? (H(), j("div", th, [
                      p("dt", null, b(v(u)("library", "Series")), 1),
                      p("dd", null, b(d.publication), 1)
                    ])) : Pe("", !0),
                    d.publicationDate ? (H(), j("div", nh, [
                      p("dt", null, b(v(u)("library", "Date")), 1),
                      p("dd", null, b(d.publicationDate), 1)
                    ])) : Pe("", !0),
                    d.workflowStatus ? (H(), j("div", rh, [
                      p("dt", null, b(v(u)("library", "Status")), 1),
                      p("dd", null, b(d.workflowStatus), 1)
                    ])) : Pe("", !0),
                    d.hasScannerConflict ? (H(), j("div", ih, [
                      p("dt", null, b(v(u)("library", "Review")), 1),
                      p("dd", null, b(d.scannerConflictCount) + " fields", 1)
                    ])) : Pe("", !0),
                    d.lastOpenedAt ? (H(), j("div", sh, [
                      p("dt", null, b(v(u)("library", "Last opened")), 1),
                      p("dd", null, b(d.lastOpenedAt), 1)
                    ])) : Pe("", !0),
                    d.extension ? (H(), j("div", oh, [
                      p("dt", null, b(v(u)("library", "Format")) + ":", 1),
                      p("dd", null, b(I(d.extension)), 1)
                    ])) : Pe("", !0),
                    d.shelf ? (H(), j("div", lh, [
                      p("dt", null, b(v(u)("library", "Shelf")), 1),
                      p("dd", null, b(d.shelf), 1)
                    ])) : Pe("", !0)
                  ]),
                  d.description ? (H(), j("p", ah, b(d.description), 1)) : Pe("", !0),
                  d.scanStatus !== "indexed" || d.scanError ? (H(), j("p", ch, [
                    ue(" scanStatus: " + b(d.scanStatus || "unknown"), 1),
                    d.scanError ? (H(), j("span", uh, " · scanError: " + b(d.scanError), 1)) : Pe("", !0)
                  ])) : Pe("", !0),
                  p("div", fh, [
                    L(d).length === 0 ? (H(), j("span", dh, "No Nextcloud tags")) : (H(!0), j(se, { key: 1 }, Se(L(d), (Y) => (H(), j("span", {
                      key: Y.id,
                      class: "library-tag"
                    }, b(Y.name), 1))), 128))
                  ]),
                  p("p", ph, [
                    p("a", {
                      href: d.filesUrl
                    }, b(v(u)("library", "Show in Files")), 9, hh),
                    E[24] || (E[24] = ue(" · ", -1)),
                    p("a", {
                      href: d.downloadUrl
                    }, b(v(u)("library", "Download source")), 9, mh),
                    E[25] || (E[25] = ue(" · ", -1)),
                    p("a", {
                      href: d.detailsUrl
                    }, b(v(u)("library", "Details")), 9, bh)
                  ])
                ])
              ], 40, Yp)
            ])
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}, lo = fu("library", "catalogue", {}), Ar = document.querySelector("#library-vue-root"), ao = {
  ...lo,
  requestToken: Ar?.dataset.requestToken || lo.requestToken || ""
};
function X(e) {
  return String(e ?? "");
}
function Sl(e) {
  return X(e).toUpperCase();
}
function gh(e, t, n, r = X) {
  for (const i of t) {
    const s = document.createElement("option");
    s.value = X(i), s.textContent = r(i), X(i) === X(n) && (s.selected = !0), e.appendChild(s);
  }
}
function co(e, t, n, r, i = "") {
  const s = document.createElement("label");
  s.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = X(r), o.placeholder = i, s.appendChild(o), e.appendChild(s);
}
function xn(e, t, n, r, i, s, o = X) {
  const l = document.createElement("label");
  l.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const _ = document.createElement("option");
  _.value = "", _.textContent = i, c.appendChild(_), gh(c, s, r, o), l.appendChild(c), e.appendChild(l);
}
function Cn(e) {
  const t = X(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function _h(e, t = {}) {
  return X(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(X(e || t?.publication || ""))}`);
}
function vh(e) {
  return X(e.discoveryPage) === "publication";
}
function Eh(e, t = {}) {
  return X(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(X(e))}`);
}
function Si(e) {
  return X(e.discoveryPage) === "year";
}
function Th(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([n, r]) => n !== "sort" && X(r).trim() !== "");
}
function Sh() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function zn(e, t, n, r) {
  const i = document.createElement("a");
  return i.href = t, i.className = n, i.textContent = r, e.appendChild(i), i;
}
function xh(e, t) {
  const n = document.createElement("span");
  return n.className = "library-muted", n.textContent = t, e.appendChild(n), n;
}
function Ch(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", u("library", "Catalogue search and filters")), co(r, u("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), xn(r, u("library", "Type"), "type", n.type, u("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), co(r, u("library", "Nextcloud tag"), "tag", n.tag, "photography"), xn(r, u("library", "Format"), "format", n.format, u("library", "All formats"), e.formats || [], Sl), xn(r, u("library", "Shelf"), "shelf", n.shelf, u("library", "All shelves"), e.shelves || []), xn(r, u("library", "Scan status"), "status", n.status, u("library", "All scan statuses"), e.scanStatuses || []), xn(r, u("library", "Sort"), "sort", n.sort || "title", u("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), xn(r, u("library", "Page size"), "limit", t.limit || 100, u("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", u("library", "Apply catalogue filters")), i.textContent = u("library", "Apply filters");
  const s = document.createElement("a");
  return s.href = "?", s.className = "button secondary", s.setAttribute("aria-label", u("library", "Clear catalogue filters")), s.textContent = u("library", "Clear"), r.append(i, s), r;
}
function Ah(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-quick-filter-bar", r.setAttribute("aria-label", u("library", "Quick catalogue filters"));
  let i = null;
  const s = () => {
    window.clearTimeout(i), i = window.setTimeout(() => r.requestSubmit(), 350);
  };
  for (const [S, P] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(S) || X(P).trim() === "") continue;
    const z = document.createElement("input");
    z.type = "hidden", z.name = S, z.value = X(P), r.appendChild(z);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = u("library", "Search");
  const l = document.createElement("input");
  l.type = "search", l.name = "q", l.value = X(n.q), l.placeholder = "Camera, Eco, Rolleiflex...", l.addEventListener("input", s), o.appendChild(l), r.appendChild(o);
  const c = [
    [u("library", "Sort"), "sort", n.sort || "title", [["title", u("library", "Title")], ["recent", u("library", "Recently added")], ["publicationDate", u("library", "Publication date")], ["publication", u("library", "Series")], ["lastOpened", u("library", "Recently opened")], ["format", u("library", "Format")]]],
    [u("library", "Starred"), "starred", n.starred || "", [["", u("library", "All")], ["1", u("library", "Starred")]]],
    [u("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [S, P, z, ee] of c) {
    const B = document.createElement("label");
    B.textContent = S;
    const te = document.createElement("select");
    te.name = P;
    for (const [q, D] of ee) {
      const J = document.createElement("option");
      J.value = X(q), J.textContent = X(D), X(q) === X(z) && (J.selected = !0), te.appendChild(J);
    }
    te.addEventListener("change", () => r.requestSubmit()), B.appendChild(te), r.appendChild(B);
  }
  const _ = document.createElement("button");
  _.type = "submit", _.className = "button primary", _.setAttribute("aria-label", u("library", "Apply catalogue filters")), _.textContent = u("library", "Apply filters");
  const m = document.createElement("a");
  return m.href = "?", m.className = "button secondary", m.setAttribute("aria-label", u("library", "Clear catalogue filters")), m.textContent = u("library", "Clear all"), r.append(_, m), r;
}
function wh(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, i = X(e.settingsUrl || ""), s = X(e.metadataExportUrl || ""), o = X(e.batchTagUrl || "/apps/library/bulk/tags"), l = X(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), c = X(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), _ = X(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), m = X(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), S = document.createElement("div");
  S.className = "library-vue-catalogue library-vue-fallback", S.dataset.vueFallback = "true";
  const P = document.createElement("section");
  P.className = "library-panel", P.setAttribute("aria-labelledby", "library-catalogue-heading");
  const z = document.createElement("div");
  z.className = "library-catalogue-header";
  const ee = document.createElement("div"), B = document.createElement("h2");
  B.id = "library-catalogue-heading", B.textContent = u("library", "Publication catalogue");
  const te = document.createElement("p");
  te.className = "library-muted", te.textContent = u("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), ee.append(B, te);
  const q = document.createElement("nav");
  if (q.className = "library-catalogue-toolbar", q.setAttribute("aria-label", u("library", "Library actions")), i) {
    const w = document.createElement("a");
    w.href = i, w.className = "button secondary", w.setAttribute("aria-label", "Open Library settings"), w.textContent = u("library", "Settings"), q.appendChild(w);
  }
  if (s) {
    const w = document.createElement("a");
    w.href = s, w.className = "button secondary", w.setAttribute("aria-label", "Export corrected metadata"), w.textContent = u("library", "Export corrected metadata"), q.appendChild(w);
  }
  if (e.metadataSidecarManifestUrl) {
    const w = document.createElement("a");
    w.href = e.metadataSidecarManifestUrl, w.className = "button secondary", w.setAttribute("aria-label", "Export sidecar manifest"), w.textContent = u("library", "Sidecar manifest"), q.appendChild(w);
  }
  if (e.metadataSidecarBundleUrl) {
    const w = document.createElement("a");
    w.href = e.metadataSidecarBundleUrl, w.className = "button secondary", w.setAttribute("aria-label", "Export sidecar ZIP"), w.textContent = u("library", "Sidecar ZIP"), q.appendChild(w);
  }
  z.append(ee, q), P.appendChild(z), P.appendChild(Ah(e, r));
  const D = document.createElement("details");
  D.className = "library-filter-panel";
  const J = document.createElement("summary");
  if (J.className = "library-filter-panel-summary", J.textContent = u("library", "Show catalogue filters"), D.append(J, Ch(e, r)), P.appendChild(D), vh(e) || Si(e)) {
    const w = document.createElement("section");
    w.className = "library-discovery-header", w.setAttribute("aria-labelledby", "library-discovery-heading");
    const N = document.createElement("p");
    N.className = "library-muted", N.textContent = Si(e) ? u("library", "Publication year") : u("library", "Publication / series");
    const U = document.createElement("h3");
    U.id = "library-discovery-heading", U.textContent = X(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || "");
    const x = document.createElement("p");
    x.className = "library-muted", x.textContent = `${r.total ?? n.length} ${Si(e) ? u("library", "items from this publication year. Sorted by publication date when available.") : u("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const E = document.createElement("a");
    E.href = "/apps/library/", E.className = "button secondary", E.textContent = u("library", "Back to full catalogue"), w.append(N, U, x, E), P.appendChild(w);
  }
  const $ = document.createElement("p");
  $.className = "library-muted library-filter-result-summary", $.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`;
  const oe = document.createElement("a");
  oe.href = "?", oe.textContent = ` ${u("library", "Clear all filters")}`, $.appendChild(oe), P.appendChild($);
  const xe = document.createElement("details");
  xe.className = "library-batch-actions";
  const Ce = document.createElement("summary");
  Ce.textContent = `${u("library", "Batch actions for current results")} (${r.total ?? n.length} ${u("library", "Current filter result")})`;
  const Ae = document.createElement("form");
  Ae.method = "post", Ae.action = o, Ae.className = "library-batch-tag-form";
  const ve = Cn(e);
  ve && Ae.appendChild(ve);
  for (const [w, N] of Object.entries(e.activeFilters || {})) {
    if (X(N).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = w, U.value = X(N), Ae.appendChild(U);
  }
  const Re = document.createElement("label");
  Re.textContent = u("library", "Apply Nextcloud tag to current results");
  const $e = document.createElement("input");
  $e.type = "text", $e.name = "nextcloudTagName", $e.placeholder = "batch-review", Re.appendChild($e);
  const it = document.createElement("button");
  it.type = "submit", it.className = "button secondary", it.textContent = u("library", "Apply Nextcloud tag to current results");
  const Ve = document.createElement("p");
  Ve.className = "library-muted", Ve.textContent = u("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ae.append(Re, it, Ve);
  const ze = document.createElement("form");
  ze.method = "post", ze.action = l, ze.className = "library-batch-tag-remove-form";
  const st = Cn(e);
  st && ze.appendChild(st);
  for (const [w, N] of Object.entries(e.activeFilters || {})) {
    if (X(N).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = w, U.value = X(N), ze.appendChild(U);
  }
  const ge = document.createElement("label");
  ge.textContent = u("library", "Nextcloud tag");
  const le = document.createElement("input");
  le.type = "text", le.name = "nextcloudTagName", le.setAttribute("list", "library-nextcloud-tag-suggestions"), le.placeholder = u("library", "e.g. Review"), le.autocomplete = "off", ge.appendChild(le);
  const re = document.createElement("button");
  re.type = "submit", re.className = "button secondary", re.textContent = u("library", "Remove tag from current results");
  const Ie = document.createElement("p");
  Ie.className = "library-muted", Ie.textContent = u("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), ze.append(ge, re, Ie);
  const Ue = document.createElement("form");
  Ue.method = "post", Ue.action = c, Ue.className = "library-batch-metadata-reset-form";
  const Be = Cn(e);
  Be && Ue.appendChild(Be);
  for (const [w, N] of Object.entries(e.activeFilters || {})) {
    if (X(N).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = w, U.value = X(N), Ue.appendChild(U);
  }
  const Oe = document.createElement("input");
  Oe.type = "hidden", Oe.name = "scannerConflicts", Oe.value = "1";
  const pt = document.createElement("button");
  pt.type = "submit", pt.className = "button secondary", pt.textContent = u("library", "Reset filtered metadata");
  const ce = document.createElement("p");
  ce.className = "library-muted", ce.textContent = u("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Ue.append(Oe, pt, ce);
  const Fe = document.createElement("form");
  Fe.method = "post", Fe.action = _, Fe.className = "library-batch-metadata-edit-preview-form", Fe.target = "_blank";
  const ht = Cn(e);
  ht && Fe.appendChild(ht);
  for (const [w, N] of Object.entries(e.activeFilters || {})) {
    if (X(N).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = w, U.value = X(N), Fe.appendChild(U);
  }
  const We = document.createElement("label");
  We.textContent = u("library", "Metadata field");
  const mt = document.createElement("select");
  mt.name = "bulkEditField";
  for (const [w, N] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const U = document.createElement("option");
    U.value = w, U.textContent = u("library", N), mt.appendChild(U);
  }
  We.appendChild(mt);
  const Je = document.createElement("label");
  Je.textContent = u("library", "Preview value");
  const He = document.createElement("input");
  He.type = "text", He.name = "bulkEditValue", He.placeholder = "magazine, de, photography...", He.autocomplete = "off", Je.appendChild(He);
  const St = document.createElement("button");
  St.type = "submit", St.className = "button secondary", St.textContent = u("library", "Preview metadata edit");
  const f = document.createElement("p");
  f.className = "library-muted", f.textContent = u("library", "Preview-first batch metadata edit for current filter results. No changes are written during preview."), Fe.append(We, Je, St, f);
  const h = document.createElement("form");
  h.method = "post", h.action = m, h.className = "library-batch-cover-refresh-form";
  const g = Cn(e);
  g && h.appendChild(g);
  for (const [w, N] of Object.entries(e.activeFilters || {})) {
    if (X(N).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = w, U.value = X(N), h.appendChild(U);
  }
  const R = document.createElement("button");
  R.type = "submit", R.className = "button secondary", R.textContent = u("library", "Request fresh cover previews");
  const T = document.createElement("p");
  T.className = "library-muted", T.textContent = u("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), h.append(R, T), xe.append(Ce, Ae, ze, Ue, Fe, h), P.appendChild(xe);
  const A = document.createElement("nav");
  A.className = "library-pagination", A.setAttribute("aria-label", u("library", "Catalogue pagination"));
  const I = document.createElement("span");
  I.className = "library-pagination-range", I.textContent = `Page ${r.page ?? 1} · ${r.from ?? 0}–${r.to ?? n.length}`, A.appendChild(I), P.appendChild(A);
  const L = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], k = document.createElement("details");
  k.className = L.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const C = document.createElement("summary");
  C.className = "library-periodical-groups-summary", C.textContent = u("library", "Show top series and periodicals"), k.appendChild(C);
  const K = document.createElement("h3");
  K.textContent = L.length > 0 ? u("library", "Top series and periodicals") : u("library", "No series or periodicals found yet");
  const F = document.createElement("p");
  if (F.className = "library-muted", F.textContent = L.length > 0 ? u("library", "Jump into recurring publications with one click.") : u("library", "Add publication or series names in item details to build this shortcut panel."), k.append(K, F), L.length > 0) {
    const w = document.createElement("ul");
    for (const N of L) {
      const U = document.createElement("li"), x = document.createElement("a");
      x.href = _h(N.publication, N), x.textContent = X(N.publication);
      const E = document.createElement("span");
      E.className = "library-muted", E.textContent = `${N.itemCount} items`, U.append(x, E), w.appendChild(U);
    }
    k.appendChild(w);
  }
  P.appendChild(k);
  const W = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (W.length > 0) {
    const w = document.createElement("details");
    w.className = "library-year-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = u("library", "Show publication years");
    const U = document.createElement("h3");
    U.textContent = u("library", "Top publication years");
    const x = document.createElement("p");
    x.className = "library-muted", x.textContent = u("library", "Jump into dated books, magazines, journals and comics by year.");
    const E = document.createElement("ul");
    for (const d of W) {
      const Y = document.createElement("li"), pe = document.createElement("a");
      pe.href = Eh(d, e), pe.textContent = X(d), Y.appendChild(pe), E.appendChild(Y);
    }
    w.append(N, U, x, E), P.appendChild(w);
  }
  if (n.length === 0) {
    const w = document.createElement("div"), N = Number(e.rootCount || 0), U = Number(e.enabledRootCount || 0), x = Th(e);
    w.className = "library-empty-content", (N === 0 || U === 0) && w.classList.add("library-first-run-guidance"), x && N > 0 && U > 0 && w.classList.add("library-filter-empty-state"), w.setAttribute("role", "status");
    const E = document.createElement("h3"), d = document.createElement("p");
    d.className = "library-muted";
    const Y = document.createElement("p");
    Y.className = "library-empty-actions", N === 0 ? (E.textContent = u("library", "Start with one Library root"), d.textContent = u("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), zn(Y, i, "button primary", u("library", "Add a Library root")), xh(Y, u("library", "Run a scan after saving a root"))) : U === 0 ? (E.textContent = u("library", "No enabled Library roots"), d.textContent = u("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), zn(Y, i, "button primary", u("library", "Open Library settings"))) : x ? (E.textContent = u("library", "No matches for the current filters"), d.textContent = u("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), zn(Y, Sh(), "button secondary", u("library", "Clear search")), zn(Y, "?", "button primary", u("library", "Clear all filters"))) : (E.textContent = u("library", "No catalogue items yet"), d.textContent = u("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), zn(Y, i, "button primary", u("library", "Run a scan from settings"))), w.append(E, d, Y), P.appendChild(w);
  } else {
    const w = document.createElement("div");
    w.className = "library-cover-gallery";
    for (const N of n) {
      const U = document.createElement("article");
      U.className = "library-cover-card";
      const x = document.createElement("a");
      x.className = "library-cover-link", x.href = X(N.openUrl || "#"), x.setAttribute("aria-label", `Read ${X(N.title || "publication")}`);
      const E = document.createElement("img");
      E.className = "library-cover-image", E.src = X(N.coverUrl || ""), E.alt = `Cover for ${X(N.title || "publication")}`, E.loading = "lazy", x.appendChild(E);
      const d = Cn(e), Y = document.createElement("form");
      Y.method = "post", Y.action = X(N.starUrl || ""), Y.className = "library-cover-star-form", d && Y.appendChild(d);
      const pe = document.createElement("input");
      pe.type = "hidden", pe.name = "returnTo", pe.value = "catalogue";
      const Ee = document.createElement("input");
      Ee.type = "hidden", Ee.name = "starred", Ee.value = N.starred ? "0" : "1";
      const Ze = document.createElement("button");
      Ze.type = "submit", Ze.className = N.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Ze.setAttribute("aria-pressed", N.starred ? "true" : "false"), Ze.setAttribute("aria-label", N.starred ? u("library", "Unstar this publication") : u("library", "Star this publication")), Ze.title = N.starred ? u("library", "Unstar this publication") : u("library", "Star this publication"), Ze.textContent = N.starred ? "★" : "☆", Y.append(pe, Ee, Ze);
      const _e = document.createElement("div");
      _e.className = "library-cover-summary";
      const qe = document.createElement("h3");
      if (qe.textContent = X(N.title || "Untitled publication"), _e.appendChild(qe), N.creators) {
        const At = document.createElement("p");
        At.className = "library-creator", At.textContent = X(N.creators), _e.appendChild(At);
      }
      const Dt = document.createElement("dl");
      Dt.className = "library-cover-detail-list";
      const Qt = [
        ["Type", X(N.publicationType || "other")],
        ["Format", N.extension ? Sl(N.extension) : ""],
        ["Shelf", N.shelf ? X(N.shelf) : ""]
      ].filter(([, At]) => At !== "");
      for (const [At, ar] of Qt) {
        const _n = document.createElement("div");
        _n.className = "library-cover-detail-chip";
        const Mn = document.createElement("dt");
        Mn.textContent = At;
        const tn = document.createElement("dd");
        tn.textContent = ar, _n.append(Mn, tn), Dt.appendChild(_n);
      }
      _e.appendChild(Dt);
      const yn = document.createElement("p"), en = document.createElement("a");
      en.href = X(N.openUrl || "#"), en.textContent = u("library", "Read");
      const xt = document.createElement("a");
      xt.href = X(N.filesUrl || "#"), xt.textContent = u("library", "Show in Files");
      const Ct = document.createElement("a");
      Ct.href = X(N.downloadUrl || "#"), Ct.textContent = u("library", "Download source");
      const gn = document.createElement("a");
      gn.href = X(N.detailsUrl || "#"), gn.textContent = u("library", "Details"), yn.append(en, document.createTextNode(" · "), xt, document.createTextNode(" · "), Ct, document.createTextNode(" · "), gn), _e.appendChild(yn), U.append(x, Y, _e), w.appendChild(U);
    }
    P.appendChild(w);
  }
  return S.appendChild(P), S;
}
if (Ar)
  try {
    au(yh, { state: ao }).mount(Ar);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Ar.replaceChildren(wh(ao));
  }
//# sourceMappingURL=library-main.mjs.map
