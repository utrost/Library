// @__NO_SIDE_EFFECTS__
function Hi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Ce = {}, Mr = [], qt = () => {
}, po = () => !1, jn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Vn = (e) => e.startsWith("onUpdate:"), et = Object.assign, $i = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, ja = Object.prototype.hasOwnProperty, ve = (e, t) => ja.call(e, t), ee = Array.isArray, dr = (e) => dn(e) === "[object Map]", Cr = (e) => dn(e) === "[object Set]", ms = (e) => dn(e) === "[object Date]", ae = (e) => typeof e == "function", Ue = (e) => typeof e == "string", Wt = (e) => typeof e == "symbol", Te = (e) => e !== null && typeof e == "object", ho = (e) => (Te(e) || ae(e)) && ae(e.then) && ae(e.catch), mo = Object.prototype.toString, dn = (e) => mo.call(e), Va = (e) => dn(e).slice(8, -1), bo = (e) => dn(e) === "[object Object]", ji = (e) => Ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Qr = /* @__PURE__ */ Hi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Ba = /-\w/g, Nt = Bn(
  (e) => e.replace(Ba, (t) => t.slice(1).toUpperCase())
), za = /\B([A-Z])/g, wr = Bn(
  (e) => e.replace(za, "-$1").toLowerCase()
), yo = Bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ii = Bn(
  (e) => e ? `on${yo(e)}` : ""
), zt = (e, t) => !Object.is(e, t), Rn = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, go = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, zn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let bs;
const qn = () => bs || (bs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vi(e) {
  if (ee(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Ue(n) ? Ga(n) : Vi(n);
      if (i)
        for (const s in i)
          t[s] = i[s];
    }
    return t;
  } else if (Ue(e) || Te(e))
    return e;
}
const qa = /;(?![^(]*\))/g, Wa = /:([^]+)/, Ka = /\/\*[^]*?\*\//g;
function Ga(e) {
  const t = {};
  return e.replace(Ka, "").split(qa).forEach((r) => {
    if (r) {
      const n = r.split(Wa);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ur(e) {
  let t = "";
  if (Ue(e))
    t = e;
  else if (ee(e))
    for (let r = 0; r < e.length; r++) {
      const n = Ur(e[r]);
      n && (t += n + " ");
    }
  else if (Te(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Ya = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xa = /* @__PURE__ */ Hi(Ya);
function _o(e) {
  return !!e || e === "";
}
function Ja(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = pr(e[n], t[n]);
  return r;
}
function ys(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const i of e) {
    let s = -1;
    for (let o = 0; o < r.length; o++)
      if (!n[o] && pr(i, r[o])) {
        s = o;
        break;
      }
    if (s < 0) return !1;
    n[s] = 1;
  }
  return !0;
}
function pr(e, t) {
  if (e === t) return !0;
  let r = ms(e), n = ms(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Wt(e), n = Wt(t), r || n)
    return e === t;
  if (r = ee(e), n = ee(t), r || n)
    return r && n ? Ja(e, t) : !1;
  if (r = Te(e), n = Te(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = dr(e), n = dr(t), r || n || (r = Cr(e), n = Cr(t), r || n))
      return r && n ? ys(e, t) : !1;
    const i = Object.keys(e).length, s = Object.keys(t).length;
    if (i !== s)
      return !1;
    for (const o in e) {
      const c = e.hasOwnProperty(o), d = t.hasOwnProperty(o);
      if (c && !d || !c && d || !pr(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Za(e, t) {
  return e.findIndex((r) => pr(r, t));
}
const vo = (e) => !!(e && e.__v_isRef === !0), f = (e) => Ue(e) ? e : e == null ? "" : ee(e) || Te(e) && (e.toString === mo || !ae(e.toString)) ? vo(e) ? f(e.value) : JSON.stringify(e, Eo, 2) : String(e), Eo = (e, t) => vo(t) ? Eo(e, t.value) : dr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], s) => (r[si(n, s) + " =>"] = i, r),
    {}
  )
} : Cr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => si(r))
} : Wt(t) ? si(t) : Te(t) && !ee(t) && !bo(t) ? String(t) : t, si = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Wt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
let Ge;
class Qa {
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
function el() {
  return Ge;
}
let Ae;
const oi = /* @__PURE__ */ new WeakSet();
class So {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ge && (Ge.active ? Ge.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, oi.has(this) && (oi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || xo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, gs(this), Co(this);
    const t = Ae, r = Pt;
    Ae = this, Pt = !0;
    try {
      return this.fn();
    } finally {
      wo(this), Ae = t, Pt = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        qi(t);
      this.deps = this.depsTail = void 0, gs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? oi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ai(this) && this.run();
  }
  get dirty() {
    return Ai(this);
  }
}
let To = 0, en, tn;
function xo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = tn, tn = e;
    return;
  }
  e.next = en, en = e;
}
function Bi() {
  To++;
}
function zi() {
  if (--To > 0)
    return;
  if (tn) {
    let t = tn;
    for (tn = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; en; ) {
    let t = en;
    for (en = void 0; t; ) {
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
function Co(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function wo(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), qi(n), tl(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Ai(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ao(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ao(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === on) || (e.globalVersion = on, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ai(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Ae, n = Pt;
  Ae = e, Pt = !0;
  try {
    Co(e);
    const i = e.fn(e._value);
    (t.version === 0 || zt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Ae = r, Pt = n, wo(e), e.flags &= -3;
  }
}
function qi(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let s = r.computed.deps; s; s = s.nextDep)
      qi(s, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function tl(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Pt = !0;
const Ro = [];
function er() {
  Ro.push(Pt), Pt = !1;
}
function tr() {
  const e = Ro.pop();
  Pt = e === void 0 ? !0 : e;
}
function gs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = Ae;
    Ae = void 0;
    try {
      t();
    } finally {
      Ae = r;
    }
  }
}
let on = 0;
class rl {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Wi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ae || !Pt || Ae === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Ae)
      r = this.activeLink = new rl(Ae, this), Ae.deps ? (r.prevDep = Ae.depsTail, Ae.depsTail.nextDep = r, Ae.depsTail = r) : Ae.deps = Ae.depsTail = r, Oo(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Ae.depsTail, r.nextDep = void 0, Ae.depsTail.nextDep = r, Ae.depsTail = r, Ae.deps === r && (Ae.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, on++, this.notify(t);
  }
  notify(t) {
    Bi();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      zi();
    }
  }
}
function Oo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Oo(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Ri = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ Symbol(
  ""
), Oi = /* @__PURE__ */ Symbol(
  ""
), an = /* @__PURE__ */ Symbol(
  ""
);
function Ze(e, t, r) {
  if (Pt && Ae) {
    let n = Ri.get(e);
    n || Ri.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Wi()), i.map = n, i.key = r), i.track();
  }
}
function Jt(e, t, r, n, i, s) {
  const o = Ri.get(e);
  if (!o) {
    on++;
    return;
  }
  const c = (d) => {
    d && d.trigger();
  };
  if (Bi(), t === "clear")
    o.forEach(c);
  else {
    const d = ee(e), v = d && ji(r);
    if (d && r === "length") {
      const y = Number(n);
      o.forEach((E, P) => {
        (P === "length" || P === an || !Wt(P) && P >= y) && c(E);
      });
    } else
      switch ((r !== void 0 || o.has(void 0)) && c(o.get(r)), v && c(o.get(an)), t) {
        case "add":
          d ? v && c(o.get("length")) : (c(o.get(Sr)), dr(e) && c(o.get(Oi)));
          break;
        case "delete":
          d || (c(o.get(Sr)), dr(e) && c(o.get(Oi)));
          break;
        case "set":
          dr(e) && c(o.get(Sr));
          break;
      }
  }
  zi();
}
function kr(e) {
  const t = /* @__PURE__ */ _e(e);
  return t === e ? t : (Ze(t, "iterate", an), /* @__PURE__ */ Rt(e) ? t : t.map(Lt));
}
function Wn(e) {
  return Ze(e = /* @__PURE__ */ _e(e), "iterate", an), e;
}
function Vt(e, t) {
  return /* @__PURE__ */ rr(e) ? $r(/* @__PURE__ */ Tr(e) ? Lt(t) : t) : Lt(t);
}
const nl = {
  __proto__: null,
  [Symbol.iterator]() {
    return ai(this, Symbol.iterator, (e) => Vt(this, e));
  },
  concat(...e) {
    return kr(this).concat(
      ...e.map((t) => ee(t) ? kr(t) : t)
    );
  },
  entries() {
    return ai(this, "entries", (e) => (e[1] = Vt(this, e[1]), e));
  },
  every(e, t) {
    return Gt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Gt(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => Vt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Gt(
      this,
      "find",
      e,
      t,
      (r) => Vt(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Gt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Gt(
      this,
      "findLast",
      e,
      t,
      (r) => Vt(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Gt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Gt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return li(this, "includes", e);
  },
  indexOf(...e) {
    return li(this, "indexOf", e);
  },
  join(e) {
    return kr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return li(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Gt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return zr(this, "pop");
  },
  push(...e) {
    return zr(this, "push", e);
  },
  reduce(e, ...t) {
    return _s(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return _s(this, "reduceRight", e, t);
  },
  shift() {
    return zr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Gt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return zr(this, "splice", e);
  },
  toReversed() {
    return kr(this).toReversed();
  },
  toSorted(e) {
    return kr(this).toSorted(e);
  },
  toSpliced(...e) {
    return kr(this).toSpliced(...e);
  },
  unshift(...e) {
    return zr(this, "unshift", e);
  },
  values() {
    return ai(this, "values", (e) => Vt(this, e));
  }
};
function ai(e, t, r) {
  const n = Wn(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Rt(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = r(s.value)), s;
  }), i;
}
const il = Array.prototype;
function Gt(e, t, r, n, i, s) {
  const o = Wn(e), c = o !== e && !/* @__PURE__ */ Rt(e), d = o[t];
  if (d !== il[t]) {
    const E = d.apply(e, s);
    return c ? Lt(E) : E;
  }
  let v = r;
  o !== e && (c ? v = function(E, P) {
    return r.call(this, Vt(e, E), P, e);
  } : r.length > 2 && (v = function(E, P) {
    return r.call(this, E, P, e);
  }));
  const y = d.call(o, v, n);
  return c && i ? i(y) : y;
}
function _s(e, t, r, n) {
  const i = Wn(e), s = i !== e && !/* @__PURE__ */ Rt(e);
  let o = r, c = !1;
  i !== e && (s ? (c = n.length === 0, o = function(v, y, E) {
    return c && (c = !1, v = Vt(e, v)), r.call(this, v, Vt(e, y), E, e);
  }) : r.length > 3 && (o = function(v, y, E) {
    return r.call(this, v, y, E, e);
  }));
  const d = i[t](o, ...n);
  return c ? Vt(e, d) : d;
}
function li(e, t, r) {
  const n = /* @__PURE__ */ _e(e);
  Ze(n, "iterate", an);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Yi(r[0]) ? (r[0] = /* @__PURE__ */ _e(r[0]), n[t](...r)) : i;
}
function zr(e, t, r = []) {
  er(), Bi();
  const n = (/* @__PURE__ */ _e(e))[t].apply(e, r);
  return zi(), tr(), n;
}
const sl = /* @__PURE__ */ Hi("__proto__,__v_isRef,__isVue"), ko = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Wt)
);
function ol(e) {
  Wt(e) || (e = String(e));
  const t = /* @__PURE__ */ _e(this);
  return Ze(t, "has", e), t.hasOwnProperty(e);
}
class No {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, s = this._isShallow;
    if (r === "__v_isReactive")
      return !i;
    if (r === "__v_isReadonly")
      return i;
    if (r === "__v_isShallow")
      return s;
    if (r === "__v_raw")
      return n === (i ? s ? bl : Mo : s ? Io : Lo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = ee(t);
    if (!i) {
      let d;
      if (o && (d = nl[r]))
        return d;
      if (r === "hasOwnProperty")
        return ol;
    }
    const c = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Qe(t) ? t : n
    );
    if ((Wt(r) ? ko.has(r) : sl(r)) || (i || Ze(t, "get", r), s))
      return c;
    if (/* @__PURE__ */ Qe(c)) {
      const d = o && ji(r) ? c : c.value;
      return i && Te(d) ? /* @__PURE__ */ Ni(d) : d;
    }
    return Te(c) ? i ? /* @__PURE__ */ Ni(c) : /* @__PURE__ */ fr(c) : c;
  }
}
class Po extends No {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let s = t[r];
    const o = ee(t) && ji(r);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ rr(s);
      if (!/* @__PURE__ */ Rt(n) && !/* @__PURE__ */ rr(n) && (s = /* @__PURE__ */ _e(s), n = /* @__PURE__ */ _e(n)), !o && /* @__PURE__ */ Qe(s) && !/* @__PURE__ */ Qe(n))
        return v || (s.value = n), !0;
    }
    const c = o ? Number(r) < t.length : ve(t, r), d = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ Qe(t) ? t : i
    );
    return t === /* @__PURE__ */ _e(i) && d && (c ? zt(n, s) && Jt(t, "set", r, n) : Jt(t, "add", r, n)), d;
  }
  deleteProperty(t, r) {
    const n = ve(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Jt(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Wt(r) || !ko.has(r)) && Ze(t, "has", r), n;
  }
  ownKeys(t) {
    return Ze(
      t,
      "iterate",
      ee(t) ? "length" : Sr
    ), Reflect.ownKeys(t);
  }
}
class al extends No {
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
const ll = /* @__PURE__ */ new Po(), cl = /* @__PURE__ */ new al(), ul = /* @__PURE__ */ new Po(!0);
const ki = (e) => e, En = (e) => Reflect.getPrototypeOf(e);
function fl(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, s = /* @__PURE__ */ _e(i), o = dr(s), c = e === "entries" || e === Symbol.iterator && o, d = e === "keys" && o, v = i[e](...n), y = r ? ki : t ? $r : Lt;
    return !t && Ze(
      s,
      "iterate",
      d ? Oi : Sr
    ), et(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: E, done: P } = v.next();
          return P ? { value: E, done: P } : {
            value: c ? [y(E[0]), y(E[1])] : y(E),
            done: P
          };
        }
      }
    );
  };
}
function Sn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function dl(e, t) {
  const r = {
    get(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ _e(s), c = /* @__PURE__ */ _e(i);
      e || (zt(i, c) && Ze(o, "get", i), Ze(o, "get", c));
      const { has: d } = En(o), v = t ? ki : e ? $r : Lt;
      if (d.call(o, i))
        return v(s.get(i));
      if (d.call(o, c))
        return v(s.get(c));
      s !== o && s.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ze(/* @__PURE__ */ _e(i), "iterate", Sr), i.size;
    },
    has(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ _e(s), c = /* @__PURE__ */ _e(i);
      return e || (zt(i, c) && Ze(o, "has", i), Ze(o, "has", c)), i === c ? s.has(i) : s.has(i) || s.has(c);
    },
    forEach(i, s) {
      const o = this, c = o.__v_raw, d = /* @__PURE__ */ _e(c), v = t ? ki : e ? $r : Lt;
      return !e && Ze(d, "iterate", Sr), c.forEach((y, E) => i.call(s, v(y), v(E), o));
    }
  };
  return et(
    r,
    e ? {
      add: Sn("add"),
      set: Sn("set"),
      delete: Sn("delete"),
      clear: Sn("clear")
    } : {
      add(i) {
        const s = /* @__PURE__ */ _e(this), o = En(s), c = /* @__PURE__ */ _e(i), d = !t && !/* @__PURE__ */ Rt(i) && !/* @__PURE__ */ rr(i) ? c : i;
        return o.has.call(s, d) || zt(i, d) && o.has.call(s, i) || zt(c, d) && o.has.call(s, c) || (s.add(d), Jt(s, "add", d, d)), this;
      },
      set(i, s) {
        !t && !/* @__PURE__ */ Rt(s) && !/* @__PURE__ */ rr(s) && (s = /* @__PURE__ */ _e(s));
        const o = /* @__PURE__ */ _e(this), { has: c, get: d } = En(o);
        let v = c.call(o, i);
        v || (i = /* @__PURE__ */ _e(i), v = c.call(o, i));
        const y = d.call(o, i);
        return o.set(i, s), v ? zt(s, y) && Jt(o, "set", i, s) : Jt(o, "add", i, s), this;
      },
      delete(i) {
        const s = /* @__PURE__ */ _e(this), { has: o, get: c } = En(s);
        let d = o.call(s, i);
        d || (i = /* @__PURE__ */ _e(i), d = o.call(s, i)), c && c.call(s, i);
        const v = s.delete(i);
        return d && Jt(s, "delete", i, void 0), v;
      },
      clear() {
        const i = /* @__PURE__ */ _e(this), s = i.size !== 0, o = i.clear();
        return s && Jt(
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
    r[i] = fl(i, e, t);
  }), r;
}
function Ki(e, t) {
  const r = dl(e, t);
  return (n, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    ve(r, i) && i in n ? r : n,
    i,
    s
  );
}
const pl = {
  get: /* @__PURE__ */ Ki(!1, !1)
}, hl = {
  get: /* @__PURE__ */ Ki(!1, !0)
}, ml = {
  get: /* @__PURE__ */ Ki(!0, !1)
};
const Lo = /* @__PURE__ */ new WeakMap(), Io = /* @__PURE__ */ new WeakMap(), Mo = /* @__PURE__ */ new WeakMap(), bl = /* @__PURE__ */ new WeakMap();
function yl(e) {
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
function fr(e) {
  return /* @__PURE__ */ rr(e) ? e : Gi(
    e,
    !1,
    ll,
    pl,
    Lo
  );
}
// @__NO_SIDE_EFFECTS__
function gl(e) {
  return Gi(
    e,
    !1,
    ul,
    hl,
    Io
  );
}
// @__NO_SIDE_EFFECTS__
function Ni(e) {
  return Gi(
    e,
    !0,
    cl,
    ml,
    Mo
  );
}
function Gi(e, t, r, n, i) {
  if (!Te(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const o = yl(Va(e));
  if (o === 0)
    return e;
  const c = new Proxy(
    e,
    o === 2 ? n : r
  );
  return i.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function Tr(e) {
  return /* @__PURE__ */ rr(e) ? /* @__PURE__ */ Tr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function rr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Yi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ _e(t) : e;
}
function _l(e) {
  return !ve(e, "__v_skip") && Object.isExtensible(e) && go(e, "__v_skip", !0), e;
}
const Lt = (e) => Te(e) ? /* @__PURE__ */ fr(e) : e, $r = (e) => Te(e) ? /* @__PURE__ */ Ni(e) : e;
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function vl(e) {
  return El(e, !1);
}
function El(e, t) {
  return /* @__PURE__ */ Qe(e) ? e : new Sl(e, t);
}
class Sl {
  constructor(t, r) {
    this.dep = new Wi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ _e(t), this._value = r ? t : Lt(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Rt(t) || /* @__PURE__ */ rr(t);
    t = n ? t : /* @__PURE__ */ _e(t), zt(t, r) && (this._rawValue = t, this._value = n ? t : Lt(t), this.dep.trigger());
  }
}
function m(e) {
  return /* @__PURE__ */ Qe(e) ? e.value : e;
}
const Tl = {
  get: (e, t, r) => t === "__v_raw" ? e : m(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ Qe(i) && !/* @__PURE__ */ Qe(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Uo(e) {
  return /* @__PURE__ */ Tr(e) ? e : new Proxy(e, Tl);
}
class xl {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Wi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = on - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ae !== this)
      return xo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ao(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Cl(e, t, r = !1) {
  let n, i;
  return ae(e) ? n = e : (n = e.get, i = e.set), new xl(n, i, r);
}
const Tn = {}, Pn = /* @__PURE__ */ new WeakMap();
let gr;
function wl(e, t = !1, r = gr) {
  if (r) {
    let n = Pn.get(r);
    n || Pn.set(r, n = []), n.push(e);
  }
}
function Al(e, t, r = Ce) {
  const { immediate: n, deep: i, once: s, scheduler: o, augmentJob: c, call: d } = r, v = (V) => i ? V : /* @__PURE__ */ Rt(V) || i === !1 || i === 0 ? Zt(V, 1) : Zt(V);
  let y, E, P, j, re = !1, W = !1;
  if (/* @__PURE__ */ Qe(e) ? (E = () => e.value, re = /* @__PURE__ */ Rt(e)) : /* @__PURE__ */ Tr(e) ? (E = () => v(e), re = !0) : ee(e) ? (W = !0, re = e.some((V) => /* @__PURE__ */ Tr(V) || /* @__PURE__ */ Rt(V)), E = () => e.map((V) => {
    if (/* @__PURE__ */ Qe(V))
      return V.value;
    if (/* @__PURE__ */ Tr(V))
      return v(V);
    if (ae(V))
      return d ? d(V, 2) : V();
  })) : ae(e) ? t ? E = d ? () => d(e, 2) : e : E = () => {
    if (P) {
      er();
      try {
        P();
      } finally {
        tr();
      }
    }
    const V = gr;
    gr = y;
    try {
      return d ? d(e, 3, [j]) : e(j);
    } finally {
      gr = V;
    }
  } : E = qt, t && i) {
    const V = E, le = i === !0 ? 1 / 0 : i;
    E = () => Zt(V(), le);
  }
  const oe = el(), ne = () => {
    y.stop(), oe && oe.active && $i(oe.effects, y);
  };
  if (s && t) {
    const V = t;
    t = (...le) => {
      const Le = V(...le);
      return ne(), Le;
    };
  }
  let z = W ? new Array(e.length).fill(Tn) : Tn;
  const D = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const le = y.run();
        if (V || i || re || (W ? le.some((Le, ke) => zt(Le, z[ke])) : zt(le, z))) {
          P && P();
          const Le = gr;
          gr = y;
          try {
            const ke = [
              le,
              // pass undefined as the old value when it's changed for the first time
              z === Tn ? void 0 : W && z[0] === Tn ? [] : z,
              j
            ];
            z = le, d ? d(t, 3, ke) : (
              // @ts-expect-error
              t(...ke)
            );
          } finally {
            gr = Le;
          }
        }
      } else
        y.run();
  };
  return c && c(D), y = new So(E), y.scheduler = o ? () => o(D, !1) : D, j = (V) => wl(V, !1, y), P = y.onStop = () => {
    const V = Pn.get(y);
    if (V) {
      if (d)
        d(V, 4);
      else
        for (const le of V) le();
      Pn.delete(y);
    }
  }, t ? n ? D(!0) : z = y.run() : o ? o(D.bind(null, !0), !0) : y.run(), ne.pause = y.pause.bind(y), ne.resume = y.resume.bind(y), ne.stop = ne, ne;
}
function Zt(e, t = 1 / 0, r) {
  if (t <= 0 || !Te(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ Qe(e))
    Zt(e.value, t, r);
  else if (ee(e))
    for (let n = 0; n < e.length; n++)
      Zt(e[n], t, r);
  else if (Cr(e) || dr(e))
    e.forEach((n) => {
      Zt(n, t, r);
    });
  else if (bo(e)) {
    for (const n in e)
      Zt(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Zt(e[n], t, r);
  }
  return e;
}
function pn(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Kn(i, t, r);
  }
}
function It(e, t, r, n) {
  if (ae(e)) {
    const i = pn(e, t, r, n);
    return i && ho(i) && i.catch((s) => {
      Kn(s, t, r);
    }), i;
  }
  if (ee(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++)
      i.push(It(e[s], t, r, n));
    return i;
  }
}
function Kn(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Ce;
  if (t) {
    let c = t.parent;
    const d = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; c; ) {
      const y = c.ec;
      if (y) {
        for (let E = 0; E < y.length; E++)
          if (y[E](e, d, v) === !1)
            return;
      }
      c = c.parent;
    }
    if (s) {
      er(), pn(s, null, 10, [
        e,
        d,
        v
      ]), tr();
      return;
    }
  }
  Rl(e, r, i, n, o);
}
function Rl(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const ot = [];
let jt = -1;
const Dr = [];
let ur = null, Lr = 0;
const Do = /* @__PURE__ */ Promise.resolve();
let Ln = null;
function Fo(e) {
  const t = Ln || Do;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ol(e) {
  let t = jt + 1, r = ot.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = ot[n], s = ln(i);
    s < e || s === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Xi(e) {
  if (!(e.flags & 1)) {
    const t = ln(e), r = ot[ot.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ln(r) ? ot.push(e) : ot.splice(Ol(t), 0, e), e.flags |= 1, Ho();
  }
}
function Ho() {
  Ln || (Ln = Do.then(jo));
}
function kl(e) {
  if (!ee(e))
    ur && e.id === -1 ? ur.splice(Lr + 1, 0, e) : e.flags & 1 || (Dr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Dr.push(e[t]);
  Ho();
}
function vs(e, t, r = jt + 1) {
  for (; r < ot.length; r++) {
    const n = ot[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ot.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function $o(e) {
  if (Dr.length) {
    const t = [...new Set(Dr)].sort(
      (r, n) => ln(r) - ln(n)
    );
    if (Dr.length = 0, ur) {
      for (let r = 0; r < t.length; r++)
        ur.push(t[r]);
      return;
    }
    for (ur = t, Lr = 0; Lr < ur.length; Lr++) {
      const r = ur[Lr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    ur = null, Lr = 0;
  }
}
const ln = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function jo(e) {
  try {
    for (jt = 0; jt < ot.length; jt++) {
      const t = ot[jt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), pn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; jt < ot.length; jt++) {
      const t = ot[jt];
      t && (t.flags &= -2);
    }
    jt = -1, ot.length = 0, $o(), Ln = null, (ot.length || Dr.length) && jo();
  }
}
let At = null, Vo = null;
function In(e) {
  const t = At;
  return At = e, Vo = e && e.type.__scopeId || null, t;
}
function Nl(e, t = At, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Ns(-1);
    const s = In(t), o = xr.length;
    let c;
    try {
      c = e(...i);
    } finally {
      for (let d = xr.length; d > o; d--) ha();
      In(s), n._d && Ns(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qe(e, t) {
  if (At === null)
    return e;
  const r = Zn(At), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [s, o, c, d = Ce] = t[i];
    s && (ae(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Zt(o), n.push({
      dir: s,
      instance: r,
      value: o,
      oldValue: void 0,
      arg: c,
      modifiers: d
    }));
  }
  return e;
}
function mr(e, t, r, n) {
  const i = e.dirs, s = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const c = i[o];
    s && (c.oldValue = s[o].value);
    let d = c.dir[n];
    d && (er(), It(d, r, 8, [
      e.el,
      c,
      e,
      t
    ]), tr());
  }
}
function Pl(e, t) {
  if (at) {
    let r = at.provides;
    const n = at.parent && at.parent.provides;
    n === r && (r = at.provides = Object.create(n)), r[e] = t;
  }
}
function On(e, t, r = !1) {
  const n = Rc();
  if (n || Fr) {
    let i = Fr ? Fr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && ae(t) ? t.call(n && n.proxy) : t;
  }
}
const Ll = /* @__PURE__ */ Symbol.for("v-scx"), Il = () => On(Ll);
function ci(e, t, r) {
  return Bo(e, t, r);
}
function Bo(e, t, r = Ce) {
  const { immediate: n, deep: i, flush: s, once: o } = r, c = et({}, r), d = t && n || !t && s !== "post";
  let v;
  if (fn) {
    if (s === "sync") {
      const j = Il();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!d) {
      const j = () => {
      };
      return j.stop = qt, j.resume = qt, j.pause = qt, j;
    }
  }
  const y = at;
  c.call = (j, re, W) => It(j, y, re, W);
  let E = !1;
  s === "post" ? c.scheduler = (j) => {
    ht(j, y && y.suspense);
  } : s !== "sync" && (E = !0, c.scheduler = (j, re) => {
    re ? j() : Xi(j);
  }), c.augmentJob = (j) => {
    t && (j.flags |= 4), E && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const P = Al(e, t, c);
  return fn && (v ? v.push(P) : d && P()), P;
}
function Ml(e, t, r) {
  const n = this.proxy, i = Ue(e) ? e.includes(".") ? zo(n, e) : () => n[e] : e.bind(n, n);
  let s;
  ae(t) ? s = t : (s = t.handler, r = t);
  const o = hn(this), c = Bo(i, s.bind(n), r);
  return o(), c;
}
function zo(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const Ul = /* @__PURE__ */ Symbol("_vte"), Gn = (e) => e.__isTeleport, ui = /* @__PURE__ */ Symbol("_leaveCb");
function Dl(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== nr) {
        t = r;
        break;
      }
  }
  return t;
}
function qo(e) {
  if (!Zi(e))
    return Gn(e.type) && e.children ? Dl(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: r } = e;
  if (r) {
    if (t & 16)
      return r[0];
    if (t & 32 && ae(r.default))
      return r.default();
  }
}
function Ji(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    Ji(
      Gn(r.type) && qo(r) || r,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Wo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Es(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Mn = /* @__PURE__ */ new WeakMap();
function rn(e, t, r, n, i = !1) {
  if (ee(e)) {
    e.forEach(
      (W, oe) => rn(
        W,
        t && (ee(t) ? t[oe] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (nn(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && rn(e, t, r, n.component.subTree);
    return;
  }
  const s = n.shapeFlag & 4 ? Zn(n.component) : n.el, o = i ? null : s, { i: c, r: d } = e, v = t && t.r, y = c.refs === Ce ? c.refs = {} : c.refs, E = c.setupState, P = /* @__PURE__ */ _e(E), j = E === Ce ? po : (W) => Es(y, W) ? !1 : ve(P, W), re = (W, oe) => !(oe && Es(y, oe));
  if (v != null && v !== d) {
    if (Ss(t), Ue(v))
      y[v] = null, j(v) && (E[v] = null);
    else if (/* @__PURE__ */ Qe(v)) {
      const W = t;
      re(v, W.k) && (v.value = null), W.k && (y[W.k] = null);
    }
  }
  if (ae(d))
    pn(d, c, 12, [o, y]);
  else {
    const W = Ue(d), oe = /* @__PURE__ */ Qe(d);
    if (W || oe) {
      const ne = () => {
        if (e.f) {
          const z = W ? j(d) ? E[d] : y[d] : re() || !e.k ? d.value : y[e.k];
          if (i)
            ee(z) && $i(z, s);
          else if (ee(z))
            z.includes(s) || z.push(s);
          else if (W)
            y[d] = [s], j(d) && (E[d] = y[d]);
          else {
            const D = [s];
            re(d, e.k) && (d.value = D), e.k && (y[e.k] = D);
          }
        } else W ? (y[d] = o, j(d) && (E[d] = o)) : oe && (re(d, e.k) && (d.value = o), e.k && (y[e.k] = o));
      };
      if (o) {
        const z = () => {
          ne(), Mn.delete(e);
        };
        z.id = -1, Mn.set(e, z), ht(z, r);
      } else
        Ss(e), ne();
    }
  }
}
function Ss(e) {
  const t = Mn.get(e);
  t && (t.flags |= 8, Mn.delete(e));
}
qn().requestIdleCallback;
qn().cancelIdleCallback;
const nn = (e) => !!e.type.__asyncLoader, Zi = (e) => e.type.__isKeepAlive;
function Fl(e, t) {
  Ko(e, "a", t);
}
function Hl(e, t) {
  Ko(e, "da", t);
}
function Ko(e, t, r = at) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Yn(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Zi(i.parent.vnode) && $l(n, t, r, i), i = i.parent;
  }
}
function $l(e, t, r, n) {
  const i = Yn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Xo(() => {
    $i(n[t], i);
  }, r);
}
function Yn(e, t, r = at, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), s = t.__weh || (t.__weh = (...o) => {
      er();
      const c = hn(r), d = It(t, r, e, o);
      return c(), tr(), d;
    });
    return n ? i.unshift(s) : i.push(s), s;
  }
}
const ir = (e) => (t, r = at) => {
  (!fn || e === "sp") && Yn(e, (...n) => t(...n), r);
}, jl = ir("bm"), Go = ir("m"), Vl = ir(
  "bu"
), Bl = ir("u"), Yo = ir(
  "bum"
), Xo = ir("um"), zl = ir(
  "sp"
), ql = ir("rtg"), Wl = ir("rtc");
function Kl(e, t = at) {
  Yn("ec", e, t);
}
const Gl = /* @__PURE__ */ Symbol.for("v-ndc");
function ge(e, t, r, n) {
  let i;
  const s = r, o = ee(e);
  if (o || Ue(e)) {
    const c = o && /* @__PURE__ */ Tr(e);
    let d = !1, v = !1;
    c && (d = !/* @__PURE__ */ Rt(e), v = /* @__PURE__ */ rr(e), e = Wn(e)), i = new Array(e.length);
    for (let y = 0, E = e.length; y < E; y++)
      i[y] = t(
        d ? v ? $r(Lt(e[y])) : Lt(e[y]) : e[y],
        y,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let c = 0; c < e; c++)
      i[c] = t(c + 1, c, void 0, s);
  } else if (Te(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (c, d) => t(c, d, void 0, s)
      );
    else {
      const c = Object.keys(e);
      i = new Array(c.length);
      for (let d = 0, v = c.length; d < v; d++) {
        const y = c[d];
        i[d] = t(e[y], y, d, s);
      }
    }
  else
    i = [];
  return i;
}
const Pi = (e) => e ? ga(e) ? Zn(e) : Pi(e.parent) : null, sn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ et(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Pi(e.parent),
    $root: (e) => Pi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Zo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Xi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Fo.bind(e.proxy)),
    $watch: (e) => Ml.bind(e)
  })
), fi = (e, t) => e !== Ce && !e.__isScriptSetup && ve(e, t), Yl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: s, accessCache: o, type: c, appContext: d } = e;
    if (t[0] !== "$") {
      const P = o[t];
      if (P !== void 0)
        switch (P) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return r[t];
          case 3:
            return s[t];
        }
      else {
        if (fi(n, t))
          return o[t] = 1, n[t];
        if (i !== Ce && ve(i, t))
          return o[t] = 2, i[t];
        if (ve(s, t))
          return o[t] = 3, s[t];
        if (r !== Ce && ve(r, t))
          return o[t] = 4, r[t];
        Li && (o[t] = 0);
      }
    }
    const v = sn[t];
    let y, E;
    if (v)
      return t === "$attrs" && Ze(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = c.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== Ce && ve(r, t))
      return o[t] = 4, r[t];
    if (
      // global properties
      E = d.config.globalProperties, ve(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: s } = e;
    return fi(i, t) ? (i[t] = r, !0) : n !== Ce && ve(n, t) ? (n[t] = r, !0) : ve(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: s, type: o }
  }, c) {
    let d;
    return !!(r[c] || e !== Ce && c[0] !== "$" && ve(e, c) || fi(t, c) || ve(s, c) || ve(n, c) || ve(sn, c) || ve(i.config.globalProperties, c) || (d = o.__cssModules) && d[c]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : ve(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Ts(e) {
  return ee(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Li = !0;
function Xl(e) {
  const t = Zo(e), r = e.proxy, n = e.ctx;
  Li = !1, t.beforeCreate && xs(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: o,
    watch: c,
    provide: d,
    inject: v,
    // lifecycle
    created: y,
    beforeMount: E,
    mounted: P,
    beforeUpdate: j,
    updated: re,
    activated: W,
    deactivated: oe,
    beforeDestroy: ne,
    beforeUnmount: z,
    destroyed: D,
    unmounted: V,
    render: le,
    renderTracked: Le,
    renderTriggered: ke,
    errorCaptured: je,
    serverPrefetch: Ee,
    // public API
    expose: Ie,
    inheritAttrs: tt,
    // assets
    components: lt,
    directives: Ke,
    filters: vt
  } = t;
  if (v && Jl(v, n, null), o)
    for (const he in o) {
      const ue = o[he];
      ae(ue) && (n[he] = ue.bind(r));
    }
  if (i) {
    const he = i.call(r, r);
    Te(he) && (e.data = /* @__PURE__ */ fr(he));
  }
  if (Li = !0, s)
    for (const he in s) {
      const ue = s[he], Ve = ae(ue) ? ue.bind(r, r) : ae(ue.get) ? ue.get.bind(r, r) : qt, me = !ae(ue) && ae(ue.set) ? ue.set.bind(r) : qt, xe = J({
        get: Ve,
        set: me
      });
      Object.defineProperty(n, he, {
        enumerable: !0,
        configurable: !0,
        get: () => xe.value,
        set: (Be) => xe.value = Be
      });
    }
  if (c)
    for (const he in c)
      Jo(c[he], n, r, he);
  if (d) {
    const he = ae(d) ? d.call(r) : d;
    Reflect.ownKeys(he).forEach((ue) => {
      Pl(ue, he[ue]);
    });
  }
  y && xs(y, e, "c");
  function Me(he, ue) {
    ee(ue) ? ue.forEach((Ve) => he(Ve.bind(r))) : ue && he(ue.bind(r));
  }
  if (Me(jl, E), Me(Go, P), Me(Vl, j), Me(Bl, re), Me(Fl, W), Me(Hl, oe), Me(Kl, je), Me(Wl, Le), Me(ql, ke), Me(Yo, z), Me(Xo, V), Me(zl, Ee), ee(Ie))
    if (Ie.length) {
      const he = e.exposed || (e.exposed = {});
      Ie.forEach((ue) => {
        Object.defineProperty(he, ue, {
          get: () => r[ue],
          set: (Ve) => r[ue] = Ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  le && e.render === qt && (e.render = le), tt != null && (e.inheritAttrs = tt), lt && (e.components = lt), Ke && (e.directives = Ke), Ee && Wo(e);
}
function Jl(e, t, r = qt) {
  ee(e) && (e = Ii(e));
  for (const n in e) {
    const i = e[n];
    let s;
    Te(i) ? "default" in i ? s = On(
      i.from || n,
      i.default,
      !0
    ) : s = On(i.from || n) : s = On(i), /* @__PURE__ */ Qe(s) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : t[n] = s;
  }
}
function xs(e, t, r) {
  It(
    ee(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Jo(e, t, r, n) {
  let i = n.includes(".") ? zo(r, n) : () => r[n];
  if (Ue(e)) {
    const s = t[e];
    ae(s) && ci(i, s);
  } else if (ae(e))
    ci(i, e.bind(r));
  else if (Te(e))
    if (ee(e))
      e.forEach((s) => Jo(s, t, r, n));
    else {
      const s = ae(e.handler) ? e.handler.bind(r) : t[e.handler];
      ae(s) && ci(i, s, e);
    }
}
function Zo(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = e.appContext, c = s.get(t);
  let d;
  return c ? d = c : !i.length && !r && !n ? d = t : (d = {}, i.length && i.forEach(
    (v) => Un(d, v, o, !0)
  ), Un(d, t, o)), Te(t) && s.set(t, d), d;
}
function Un(e, t, r, n = !1) {
  const { mixins: i, extends: s } = t;
  s && Un(e, s, r, !0), i && i.forEach(
    (o) => Un(e, o, r, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const c = Zl[o] || r && r[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const Zl = {
  data: Cs,
  props: ws,
  emits: ws,
  // objects
  methods: Xr,
  computed: Xr,
  // lifecycle
  beforeCreate: st,
  created: st,
  beforeMount: st,
  mounted: st,
  beforeUpdate: st,
  updated: st,
  beforeDestroy: st,
  beforeUnmount: st,
  destroyed: st,
  unmounted: st,
  activated: st,
  deactivated: st,
  errorCaptured: st,
  serverPrefetch: st,
  // assets
  components: Xr,
  directives: Xr,
  // watch
  watch: ec,
  // provide / inject
  provide: Cs,
  inject: Ql
};
function Cs(e, t) {
  return t ? e ? function() {
    return et(
      ae(e) ? e.call(this, this) : e,
      ae(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ql(e, t) {
  return Xr(Ii(e), Ii(t));
}
function Ii(e) {
  if (ee(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function st(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Xr(e, t) {
  return e ? et(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ws(e, t) {
  return e ? ee(e) && ee(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : et(
    /* @__PURE__ */ Object.create(null),
    Ts(e),
    Ts(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = et(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = st(e[n], t[n]);
  return r;
}
function Qo() {
  return {
    app: null,
    config: {
      isNativeTag: po,
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
    ae(n) || (n = et({}, n)), i != null && !Te(i) && (i = null);
    const s = Qo(), o = /* @__PURE__ */ new WeakSet(), c = [];
    let d = !1;
    const v = s.app = {
      _uid: tc++,
      _component: n,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Ic,
      get config() {
        return s.config;
      },
      set config(y) {
      },
      use(y, ...E) {
        return o.has(y) || (y && ae(y.install) ? (o.add(y), y.install(v, ...E)) : ae(y) && (o.add(y), y(v, ...E))), v;
      },
      mixin(y) {
        return s.mixins.includes(y) || s.mixins.push(y), v;
      },
      component(y, E) {
        return E ? (s.components[y] = E, v) : s.components[y];
      },
      directive(y, E) {
        return E ? (s.directives[y] = E, v) : s.directives[y];
      },
      mount(y, E, P) {
        if (!d) {
          const j = v._ceVNode || Qt(n, i);
          return j.appContext = s, P === !0 ? P = "svg" : P === !1 && (P = void 0), e(j, y, P), d = !0, v._container = y, y.__vue_app__ = v, Zn(j.component);
        }
      },
      onUnmount(y) {
        c.push(y);
      },
      unmount() {
        d && (It(
          c,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, E) {
        return s.provides[y] = E, v;
      },
      runWithContext(y) {
        const E = Fr;
        Fr = v;
        try {
          return y();
        } finally {
          Fr = E;
        }
      }
    };
    return v;
  };
}
let Fr = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Nt(t)}Modifiers`] || e[`${wr(t)}Modifiers`];
function ic(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ce;
  let i = r;
  const s = t.startsWith("update:"), o = s && nc(n, t.slice(7));
  o && (o.trim && (i = r.map((y) => Ue(y) ? y.trim() : y)), o.number && (i = i.map(zn)));
  let c, d = n[c = ii(t)] || // also try camelCase event handler (#2249)
  n[c = ii(Nt(t))];
  !d && s && (d = n[c = ii(wr(t))]), d && It(
    d,
    e,
    6,
    i
  );
  const v = n[c + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, It(
      v,
      e,
      6,
      i
    );
  }
}
const sc = /* @__PURE__ */ new WeakMap();
function ea(e, t, r = !1) {
  const n = r ? sc : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const s = e.emits;
  let o = {}, c = !1;
  if (!ae(e)) {
    const d = (v) => {
      const y = ea(v, t, !0);
      y && (c = !0, et(o, y));
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !s && !c ? (Te(e) && n.set(e, null), null) : (ee(s) ? s.forEach((d) => o[d] = null) : et(o, s), Te(e) && n.set(e, o), o);
}
function Xn(e, t) {
  return !e || !jn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ve(e, t[0].toLowerCase() + t.slice(1)) || ve(e, wr(t)) || ve(e, t));
}
function As(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [s],
    slots: o,
    attrs: c,
    emit: d,
    render: v,
    renderCache: y,
    props: E,
    data: P,
    setupState: j,
    ctx: re,
    inheritAttrs: W
  } = e, oe = In(e);
  let ne, z;
  try {
    if (r.shapeFlag & 4) {
      const V = i || n, le = V;
      ne = Bt(
        v.call(
          le,
          V,
          y,
          E,
          j,
          P,
          re
        )
      ), z = c;
    } else {
      const V = t;
      ne = Bt(
        V.length > 1 ? V(
          E,
          { attrs: c, slots: o, emit: d }
        ) : V(
          E,
          null
        )
      ), z = t.props ? c : oc(c);
    }
  } catch (V) {
    xr.length = 0, Kn(V, e, 1), ne = Qt(nr);
  }
  let D = ne;
  if (z && W !== !1) {
    const V = Object.keys(z), { shapeFlag: le } = D;
    V.length && le & 7 && (s && V.some(Vn) && (z = ac(
      z,
      s
    )), D = jr(D, z, !1, !0));
  }
  if (r.dirs && (D = jr(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = Gn(D.type) && qo(D) || D;
    Ji(V, r.transition);
  }
  return ne = D, In(oe), ne;
}
const oc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || jn(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, ac = (e, t) => {
  const r = {};
  for (const n in e)
    (!Vn(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function lc(e, t, r) {
  const { props: n, children: i, component: s } = e, { props: o, children: c, patchFlag: d } = t, v = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? Rs(n, o, v) : !!o;
    if (d & 8) {
      const y = t.dynamicProps;
      for (let E = 0; E < y.length; E++) {
        const P = y[E];
        if (ta(o, n, P) && !Xn(v, P))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : n === o ? !1 : n ? o ? Rs(n, o, v) : !0 : !!o;
  return !1;
}
function Rs(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (ta(t, e, s) && !Xn(r, s))
      return !0;
  }
  return !1;
}
function ta(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Te(n) && Te(i) ? !pr(n, i) : n !== i;
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
const ra = {}, na = () => Object.create(ra), ia = (e) => Object.getPrototypeOf(e) === ra;
function uc(e, t, r, n = !1) {
  const i = {}, s = na();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), sa(e, t, i, s);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ gl(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
}
function fc(e, t, r, n) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: o }
  } = e, c = /* @__PURE__ */ _e(i), [d] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const y = e.vnode.dynamicProps;
      for (let E = 0; E < y.length; E++) {
        let P = y[E];
        if (Xn(e.emitsOptions, P))
          continue;
        const j = t[P];
        if (d)
          if (ve(s, P))
            j !== s[P] && (s[P] = j, v = !0);
          else {
            const re = Nt(P);
            i[re] = Mi(
              d,
              c,
              re,
              j,
              e,
              !1
            );
          }
        else
          j !== s[P] && (s[P] = j, v = !0);
      }
    }
  } else {
    sa(e, t, i, s) && (v = !0);
    let y;
    for (const E in c)
      (!t || // for camelCase
      !ve(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = wr(E)) === E || !ve(t, y))) && (d ? r && // for camelCase
      (r[E] !== void 0 || // for kebab-case
      r[y] !== void 0) && (i[E] = Mi(
        d,
        c,
        E,
        void 0,
        e,
        !0
      )) : delete i[E]);
    if (s !== c)
      for (const E in s)
        (!t || !ve(t, E)) && (delete s[E], v = !0);
  }
  v && Jt(e.attrs, "set", "");
}
function sa(e, t, r, n) {
  const [i, s] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let d in t) {
      if (Qr(d))
        continue;
      const v = t[d];
      let y;
      i && ve(i, y = Nt(d)) ? !s || !s.includes(y) ? r[y] = v : (c || (c = {}))[y] = v : Xn(e.emitsOptions, d) || (!(d in n) || v !== n[d]) && (n[d] = v, o = !0);
    }
  if (s) {
    const d = /* @__PURE__ */ _e(r), v = c || Ce;
    for (let y = 0; y < s.length; y++) {
      const E = s[y];
      r[E] = Mi(
        i,
        d,
        E,
        v[E],
        e,
        !ve(v, E)
      );
    }
  }
  return o;
}
function Mi(e, t, r, n, i, s) {
  const o = e[r];
  if (o != null) {
    const c = ve(o, "default");
    if (c && n === void 0) {
      const d = o.default;
      if (o.type !== Function && !o.skipFactory && ae(d)) {
        const { propsDefaults: v } = i;
        if (r in v)
          n = v[r];
        else {
          const y = hn(i);
          n = v[r] = d.call(
            null,
            t
          ), y();
        }
      } else
        n = d;
      i.ce && i.ce._setProp(r, n);
    }
    o[
      0
      /* shouldCast */
    ] && (s && !c ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === wr(r)) && (n = !0));
  }
  return n;
}
const dc = /* @__PURE__ */ new WeakMap();
function oa(e, t, r = !1) {
  const n = r ? dc : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const s = e.props, o = {}, c = [];
  let d = !1;
  if (!ae(e)) {
    const y = (E) => {
      d = !0;
      const [P, j] = oa(E, t, !0);
      et(o, P), j && c.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!s && !d)
    return Te(e) && n.set(e, Mr), Mr;
  if (ee(s))
    for (let y = 0; y < s.length; y++) {
      const E = Nt(s[y]);
      Os(E) && (o[E] = Ce);
    }
  else if (s)
    for (const y in s) {
      const E = Nt(y);
      if (Os(E)) {
        const P = s[y], j = o[E] = ee(P) || ae(P) ? { type: P } : et({}, P), re = j.type;
        let W = !1, oe = !0;
        if (ee(re))
          for (let ne = 0; ne < re.length; ++ne) {
            const z = re[ne], D = ae(z) && z.name;
            if (D === "Boolean") {
              W = !0;
              break;
            } else D === "String" && (oe = !1);
          }
        else
          W = ae(re) && re.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = W, j[
          1
          /* shouldCastTrue */
        ] = oe, (W || ve(j, "default")) && c.push(E);
      }
    }
  const v = [o, c];
  return Te(e) && n.set(e, v), v;
}
function Os(e) {
  return e[0] !== "$" && !Qr(e);
}
const Qi = (e) => e === "_" || e === "_ctx" || e === "$stable", es = (e) => ee(e) ? e.map(Bt) : [Bt(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = Nl((...i) => es(t(...i)), r);
  return n._c = !1, n;
}, aa = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Qi(i)) continue;
    const s = e[i];
    if (ae(s))
      t[i] = pc(i, s, n);
    else if (s != null) {
      const o = es(s);
      t[i] = () => o;
    }
  }
}, la = (e, t) => {
  const r = es(t);
  e.slots.default = () => r;
}, ca = (e, t, r) => {
  for (const n in t)
    (r || !Qi(n)) && (e[n] = t[n]);
}, hc = (e, t, r) => {
  const n = e.slots = na();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (ca(n, t, r), r && go(n, "_", i, !0)) : aa(t, n);
  } else t && la(e, t);
}, mc = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let s = !0, o = Ce;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? r && c === 1 ? s = !1 : ca(i, t, r) : (s = !t.$stable, aa(t, i)), o = t;
  } else t && (la(e, t), o = { default: 1 });
  if (s)
    for (const c in i)
      !Qi(c) && o[c] == null && delete i[c];
}, ht = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = qn();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: s,
    createElement: o,
    createText: c,
    createComment: d,
    setText: v,
    setElementText: y,
    parentNode: E,
    nextSibling: P,
    setScopeId: j = qt,
    insertStaticContent: re
  } = e, W = (p, b, _, O = null, S = null, w = null, I = void 0, U = null, M = !!b.dynamicChildren) => {
    if (p === b)
      return;
    p && !qr(p, b) && (O = ct(p), Be(p, S, w, !0), p = null), b.patchFlag === -2 && (M = !1, b.dynamicChildren = null);
    const { type: T, ref: K, shapeFlag: H } = b;
    switch (T) {
      case Jn:
        oe(p, b, _, O);
        break;
      case nr:
        ne(p, b, _, O);
        break;
      case pi:
        p == null && z(b, _, O, I);
        break;
      case se:
        lt(
          p,
          b,
          _,
          O,
          S,
          w,
          I,
          U,
          M
        );
        break;
      default:
        H & 1 ? le(
          p,
          b,
          _,
          O,
          S,
          w,
          I,
          U,
          M
        ) : H & 6 ? Ke(
          p,
          b,
          _,
          O,
          S,
          w,
          I,
          U,
          M
        ) : (H & 64 || H & 128) && T.process(
          p,
          b,
          _,
          O,
          S,
          w,
          I,
          U,
          M,
          rt
        );
    }
    K != null && S ? rn(K, p && p.ref, w, b || p, !b) : K == null && p && p.ref != null && rn(p.ref, null, w, p, !0);
  }, oe = (p, b, _, O) => {
    if (p == null)
      n(
        b.el = c(b.children),
        _,
        O
      );
    else {
      const S = b.el = p.el;
      b.children !== p.children && v(S, b.children);
    }
  }, ne = (p, b, _, O) => {
    p == null ? n(
      b.el = d(b.children || ""),
      _,
      O
    ) : b.el = p.el;
  }, z = (p, b, _, O) => {
    [p.el, p.anchor] = re(
      p.children,
      b,
      _,
      O,
      p.el,
      p.anchor
    );
  }, D = ({ el: p, anchor: b }, _, O) => {
    let S;
    for (; p && p !== b; )
      S = P(p), n(p, _, O), p = S;
    n(b, _, O);
  }, V = ({ el: p, anchor: b }) => {
    let _;
    for (; p && p !== b; )
      _ = P(p), i(p), p = _;
    i(b);
  }, le = (p, b, _, O, S, w, I, U, M) => {
    if (b.type === "svg" ? I = "svg" : b.type === "math" && (I = "mathml"), p == null)
      Le(
        b,
        _,
        O,
        S,
        w,
        I,
        U,
        M
      );
    else {
      const T = p.el && p.el._isVueCE ? p.el : null;
      try {
        T && T._beginPatch(), Ee(
          p,
          b,
          S,
          w,
          I,
          U,
          M
        );
      } finally {
        T && T._endPatch();
      }
    }
  }, Le = (p, b, _, O, S, w, I, U) => {
    let M, T;
    const { props: K, shapeFlag: H, transition: q, dirs: X } = p;
    if (M = p.el = o(
      p.type,
      w,
      K && K.is,
      K
    ), H & 8 ? y(M, p.children) : H & 16 && je(
      p.children,
      M,
      null,
      O,
      S,
      di(p, w),
      I,
      U
    ), X && mr(p, null, O, "created"), ke(M, p, p.scopeId, I, O), K) {
      for (const k in K)
        k !== "value" && !Qr(k) && s(M, k, null, K[k], w, O);
      "value" in K && s(M, "value", null, K.value, w), (T = K.onVnodeBeforeMount) && $t(T, O, p);
    }
    X && mr(p, null, O, "beforeMount");
    const Z = gc(S, q);
    Z && q.beforeEnter(M), n(M, b, _), ((T = K && K.onVnodeMounted) || Z || X) && ht(() => {
      T && $t(T, O, p), Z && q.enter(M), X && mr(p, null, O, "mounted");
    }, S);
  }, ke = (p, b, _, O, S) => {
    if (_ && j(p, _), O)
      for (let w = 0; w < O.length; w++)
        j(p, O[w]);
    if (S) {
      let w = S.subTree;
      if (b === w || pa(w.type) && (w.ssContent === b || w.ssFallback === b)) {
        const I = S.vnode;
        ke(
          p,
          I,
          I.scopeId,
          I.slotScopeIds,
          S.parent
        );
      }
    }
  }, je = (p, b, _, O, S, w, I, U, M = 0) => {
    for (let T = M; T < p.length; T++) {
      const K = p[T] = U ? Xt(p[T]) : Bt(p[T]);
      W(
        null,
        K,
        b,
        _,
        O,
        S,
        w,
        I,
        U
      );
    }
  }, Ee = (p, b, _, O, S, w, I) => {
    const U = b.el = p.el;
    let { patchFlag: M, dynamicChildren: T, dirs: K } = b;
    M |= p.patchFlag & 16;
    const H = p.props || Ce, q = b.props || Ce;
    let X;
    if (_ && br(_, !1), (X = q.onVnodeBeforeUpdate) && $t(X, _, b, p), K && mr(b, p, _, "beforeUpdate"), _ && br(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    T && (!p.dynamicChildren || p.dynamicChildren.length !== T.length) && (M = 0, I = !1, T = null), (H.innerHTML && q.innerHTML == null || H.textContent && q.textContent == null) && y(U, ""), T ? Ie(
      p.dynamicChildren,
      T,
      U,
      _,
      O,
      di(b, S),
      w
    ) : I || ue(
      p,
      b,
      U,
      null,
      _,
      O,
      di(b, S),
      w,
      !1
    ), M > 0) {
      if (M & 16)
        tt(U, H, q, _, S);
      else if (M & 2 && H.class !== q.class && s(U, "class", null, q.class, S), M & 4 && s(U, "style", H.style, q.style, S), M & 8) {
        const Z = b.dynamicProps;
        for (let k = 0; k < Z.length; k++) {
          const N = Z[k], $ = H[N], Q = q[N];
          (Q !== $ || N === "value") && s(U, N, $, Q, S, _);
        }
      }
      M & 1 && p.children !== b.children && y(U, b.children);
    } else !I && T == null && tt(U, H, q, _, S);
    ((X = q.onVnodeUpdated) || K) && ht(() => {
      X && $t(X, _, b, p), K && mr(b, p, _, "updated");
    }, O);
  }, Ie = (p, b, _, O, S, w, I) => {
    for (let U = 0; U < b.length; U++) {
      const M = p[U], T = b[U], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        M.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (M.type === se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !qr(M, T) || // - In the case of a component, it could contain anything.
        M.shapeFlag & 198) ? E(M.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      W(
        M,
        T,
        K,
        null,
        O,
        S,
        w,
        I,
        !0
      );
    }
  }, tt = (p, b, _, O, S) => {
    if (b !== _) {
      if (b !== Ce)
        for (const w in b)
          !Qr(w) && !(w in _) && s(
            p,
            w,
            b[w],
            null,
            S,
            O
          );
      for (const w in _) {
        if (Qr(w)) continue;
        const I = _[w], U = b[w];
        I !== U && w !== "value" && s(p, w, U, I, S, O);
      }
      "value" in _ && s(p, "value", b.value, _.value, S);
    }
  }, lt = (p, b, _, O, S, w, I, U, M) => {
    const T = b.el = p ? p.el : c(""), K = b.anchor = p ? p.anchor : c("");
    let { patchFlag: H, dynamicChildren: q, slotScopeIds: X } = b;
    X && (U = U ? U.concat(X) : X), p == null ? (n(T, _, O), n(K, _, O), je(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      _,
      K,
      S,
      w,
      I,
      U,
      M
    )) : H > 0 && H & 64 && q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === q.length ? (Ie(
      p.dynamicChildren,
      q,
      _,
      S,
      w,
      I,
      U
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || S && b === S.subTree) && ua(
      p,
      b,
      !0
      /* shallow */
    )) : ue(
      p,
      b,
      _,
      K,
      S,
      w,
      I,
      U,
      M
    );
  }, Ke = (p, b, _, O, S, w, I, U, M) => {
    b.slotScopeIds = U, p == null ? b.shapeFlag & 512 ? S.ctx.activate(
      b,
      _,
      O,
      I,
      M
    ) : vt(
      b,
      _,
      O,
      S,
      w,
      I,
      M
    ) : Fe(p, b, M);
  }, vt = (p, b, _, O, S, w, I) => {
    const U = p.component = Ac(
      p,
      O,
      S
    );
    if (Zi(p) && (U.ctx.renderer = rt), Oc(U, !1, I), U.asyncDep) {
      if (S && S.registerDep(U, Me, I), !p.el) {
        const M = U.subTree = Qt(nr);
        ne(null, M, b, _), p.placeholder = M.el;
      }
    } else
      Me(
        U,
        p,
        b,
        _,
        S,
        w,
        I
      );
  }, Fe = (p, b, _) => {
    const O = b.component = p.component;
    if (lc(p, b, _))
      if (O.asyncDep && !O.asyncResolved) {
        he(O, b, _);
        return;
      } else
        O.next = b, O.update();
    else
      b.el = p.el, O.vnode = b;
  }, Me = (p, b, _, O, S, w, I) => {
    const U = () => {
      if (p.isMounted) {
        let { next: H, bu: q, u: X, parent: Z, vnode: k } = p;
        {
          const be = fa(p);
          if (be) {
            H && (H.el = k.el, he(p, H, I)), be.asyncDep.then(() => {
              ht(() => {
                p.isUnmounted || T();
              }, S);
            });
            return;
          }
        }
        let N = H, $;
        br(p, !1), H ? (H.el = k.el, he(p, H, I)) : H = k, q && Rn(q), ($ = H.props && H.props.onVnodeBeforeUpdate) && $t($, Z, H, k), br(p, !0);
        const Q = As(p), ie = p.subTree;
        p.subTree = Q, W(
          ie,
          Q,
          // parent may have changed if it's in a teleport
          E(ie.el),
          // anchor may have changed if it's in a fragment
          ct(ie),
          p,
          S,
          w
        ), H.el = Q.el, N === null && cc(p, Q.el), X && ht(X, S), ($ = H.props && H.props.onVnodeUpdated) && ht(
          () => $t($, Z, H, k),
          S
        );
      } else {
        let H;
        const { el: q, props: X } = b, { bm: Z, m: k, parent: N, root: $, type: Q } = p, ie = nn(b);
        br(p, !1), Z && Rn(Z), !ie && (H = X && X.onVnodeBeforeMount) && $t(H, N, b), br(p, !0);
        {
          $.ce && $.ce._hasShadowRoot() && $.ce._injectChildStyle(
            Q,
            p.parent ? p.parent.type : void 0
          );
          const be = p.subTree = As(p);
          W(
            null,
            be,
            _,
            O,
            p,
            S,
            w
          ), b.el = be.el;
        }
        if (k && ht(k, S), !ie && (H = X && X.onVnodeMounted)) {
          const be = b;
          ht(
            () => $t(H, N, be),
            S
          );
        }
        (b.shapeFlag & 256 || N && nn(N.vnode) && N.vnode.shapeFlag & 256) && p.a && ht(p.a, S), p.isMounted = !0, b = _ = O = null;
      }
    };
    p.scope.on();
    const M = p.effect = new So(U);
    p.scope.off();
    const T = p.update = M.run.bind(M), K = p.job = M.runIfDirty.bind(M);
    K.i = p, K.id = p.uid, M.scheduler = () => Xi(K), br(p, !0), T();
  }, he = (p, b, _) => {
    b.component = p;
    const O = p.vnode.props;
    p.vnode = b, p.next = null, fc(p, b.props, O, _), mc(p, b.children, _), er(), vs(p), tr();
  }, ue = (p, b, _, O, S, w, I, U, M = !1) => {
    const T = p && p.children, K = p ? p.shapeFlag : 0, H = b.children, { patchFlag: q, shapeFlag: X } = b;
    if (q > 0) {
      if (q & 128) {
        me(
          T,
          H,
          _,
          O,
          S,
          w,
          I,
          U,
          M
        );
        return;
      } else if (q & 256) {
        Ve(
          T,
          H,
          _,
          O,
          S,
          w,
          I,
          U,
          M
        );
        return;
      }
    }
    X & 8 ? (K & 16 && ze(T, S, w), H !== T && y(_, H)) : K & 16 ? X & 16 ? me(
      T,
      H,
      _,
      O,
      S,
      w,
      I,
      U,
      M
    ) : ze(T, S, w, !0) : (K & 8 && y(_, ""), X & 16 && je(
      H,
      _,
      O,
      S,
      w,
      I,
      U,
      M
    ));
  }, Ve = (p, b, _, O, S, w, I, U, M) => {
    p = p || Mr, b = b || Mr;
    const T = p.length, K = b.length, H = Math.min(T, K);
    let q;
    for (q = 0; q < H; q++) {
      const X = b[q] = M ? Xt(b[q]) : Bt(b[q]);
      W(
        p[q],
        X,
        _,
        null,
        S,
        w,
        I,
        U,
        M
      );
    }
    T > K ? ze(
      p,
      S,
      w,
      !0,
      !1,
      H
    ) : je(
      b,
      _,
      O,
      S,
      w,
      I,
      U,
      M,
      H
    );
  }, me = (p, b, _, O, S, w, I, U, M) => {
    let T = 0;
    const K = b.length;
    let H = p.length - 1, q = K - 1;
    for (; T <= H && T <= q; ) {
      const X = p[T], Z = b[T] = M ? Xt(b[T]) : Bt(b[T]);
      if (qr(X, Z))
        W(
          X,
          Z,
          _,
          null,
          S,
          w,
          I,
          U,
          M
        );
      else
        break;
      T++;
    }
    for (; T <= H && T <= q; ) {
      const X = p[H], Z = b[q] = M ? Xt(b[q]) : Bt(b[q]);
      if (qr(X, Z))
        W(
          X,
          Z,
          _,
          null,
          S,
          w,
          I,
          U,
          M
        );
      else
        break;
      H--, q--;
    }
    if (T > H) {
      if (T <= q) {
        const X = q + 1, Z = X < K ? b[X].el : O;
        for (; T <= q; )
          W(
            null,
            b[T] = M ? Xt(b[T]) : Bt(b[T]),
            _,
            Z,
            S,
            w,
            I,
            U,
            M
          ), T++;
      }
    } else if (T > q)
      for (; T <= H; )
        Be(p[T], S, w, !0), T++;
    else {
      const X = T, Z = T, k = /* @__PURE__ */ new Map();
      for (T = Z; T <= q; T++) {
        const Re = b[T] = M ? Xt(b[T]) : Bt(b[T]);
        Re.key != null && k.set(Re.key, T);
      }
      let N, $ = 0;
      const Q = q - Z + 1;
      let ie = !1, be = 0;
      const ce = new Array(Q);
      for (T = 0; T < Q; T++) ce[T] = 0;
      for (T = X; T <= H; T++) {
        const Re = p[T];
        if ($ >= Q) {
          Be(Re, S, w, !0);
          continue;
        }
        let Oe;
        if (Re.key != null)
          Oe = k.get(Re.key);
        else
          for (N = Z; N <= q; N++)
            if (ce[N - Z] === 0 && qr(Re, b[N])) {
              Oe = N;
              break;
            }
        Oe === void 0 ? Be(Re, S, w, !0) : (ce[Oe - Z] = T + 1, Oe >= be ? be = Oe : ie = !0, W(
          Re,
          b[Oe],
          _,
          null,
          S,
          w,
          I,
          U,
          M
        ), $++);
      }
      const Ne = ie ? _c(ce) : Mr;
      for (N = Ne.length - 1, T = Q - 1; T >= 0; T--) {
        const Re = Z + T, Oe = b[Re], ft = b[Re + 1], Mt = Re + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ft.el || da(ft)
        ) : O;
        ce[T] === 0 ? W(
          null,
          Oe,
          _,
          Mt,
          S,
          w,
          I,
          U,
          M
        ) : ie && (N < 0 || T !== Ne[N] ? xe(Oe, _, Mt, 2) : N--);
      }
    }
  }, xe = (p, b, _, O, S = null) => {
    const { el: w, type: I, transition: U, children: M, shapeFlag: T } = p;
    if (T & 6) {
      xe(p.component.subTree, b, _, O);
      return;
    }
    if (T & 128) {
      p.suspense.move(b, _, O);
      return;
    }
    if (T & 64) {
      I.move(p, b, _, rt);
      return;
    }
    if (I === se) {
      n(w, b, _);
      for (let H = 0; H < M.length; H++)
        xe(M[H], b, _, O);
      n(p.anchor, b, _);
      return;
    }
    if (I === pi) {
      D(p, b, _);
      return;
    }
    if (O !== 2 && T & 1 && U)
      if (O === 0)
        U.persisted && !w[ui] ? n(w, b, _) : (U.beforeEnter(w), n(w, b, _), ht(() => U.enter(w), S));
      else {
        const { leave: H, delayLeave: q, afterLeave: X } = U, Z = () => {
          p.ctx.isUnmounted ? i(w) : n(w, b, _);
        }, k = () => {
          const N = w._isLeaving || !!w[ui];
          w._isLeaving && w[ui](
            !0
            /* cancelled */
          ), U.persisted && !N ? Z() : H(w, () => {
            Z(), X && X();
          });
        };
        q ? q(w, Z, k) : k();
      }
    else
      n(w, b, _);
  }, Be = (p, b, _, O = !1, S = !1) => {
    const {
      type: w,
      props: I,
      ref: U,
      children: M,
      dynamicChildren: T,
      shapeFlag: K,
      patchFlag: H,
      dirs: q,
      cacheIndex: X,
      memo: Z
    } = p;
    if (H === -2 && (S = !1), U != null && (er(), rn(U, null, _, p, !0), tr()), X != null && (b.renderCache[X] = void 0), K & 256) {
      b.ctx.deactivate(p);
      return;
    }
    const k = K & 1 && q, N = !nn(p);
    let $;
    if (N && ($ = I && I.onVnodeBeforeUnmount) && $t($, b, p), K & 6)
      Ot(p.component, _, O);
    else {
      if (K & 128) {
        p.suspense.unmount(_, O);
        return;
      }
      k && mr(p, null, b, "beforeUnmount"), K & 64 ? p.type.remove(
        p,
        b,
        _,
        rt,
        O
      ) : T && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !T.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (w !== se || H > 0 && H & 64) ? ze(
        T,
        b,
        _,
        !1,
        !0
      ) : (w === se && H & 384 || !S && K & 16) && ze(M, b, _), O && Ye(p);
    }
    const Q = Z != null && X == null;
    (N && ($ = I && I.onVnodeUnmounted) || k || Q) && ht(() => {
      $ && $t($, b, p), k && mr(p, null, b, "unmounted"), Q && (p.el = null);
    }, _);
  }, Ye = (p) => {
    const { type: b, el: _, anchor: O, transition: S } = p;
    if (b === se) {
      de(_, O);
      return;
    }
    if (b === pi) {
      V(p);
      return;
    }
    const w = () => {
      i(_), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (p.shapeFlag & 1 && S && !S.persisted) {
      const { leave: I, delayLeave: U } = S, M = () => I(_, w);
      U ? U(p.el, w, M) : M();
    } else
      w();
  }, de = (p, b) => {
    let _;
    for (; p !== b; )
      _ = P(p), i(p), p = _;
    i(b);
  }, Ot = (p, b, _) => {
    const { bum: O, scope: S, job: w, subTree: I, um: U, m: M, a: T } = p;
    ks(M), ks(T), O && Rn(O), S.stop(), w && (w.flags |= 8, Be(I, p, b, _)), U && ht(U, b), ht(() => {
      p.isUnmounted = !0;
    }, b);
  }, ze = (p, b, _, O = !1, S = !1, w = 0) => {
    for (let I = w; I < p.length; I++)
      Be(p[I], b, _, O, S);
  }, ct = (p) => {
    if (p.shapeFlag & 6)
      return ct(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const b = P(p.anchor || p.el), _ = b && b[Ul];
    return _ ? P(_) : b;
  };
  let Et = !1;
  const St = (p, b, _) => {
    let O;
    p == null ? b._vnode && (Be(b._vnode, null, null, !0), O = b._vnode.component) : W(
      b._vnode || null,
      p,
      b,
      null,
      null,
      null,
      _
    ), b._vnode = p, Et || (Et = !0, vs(O), $o(), Et = !1);
  }, rt = {
    p: W,
    um: Be,
    m: xe,
    r: Ye,
    mt: vt,
    mc: je,
    pc: ue,
    pbc: Ie,
    n: ct,
    o: e
  };
  return {
    render: St,
    hydrate: void 0,
    createApp: rc(St)
  };
}
function di({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function br({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ua(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (ee(n) && ee(i))
    for (let s = 0; s < n.length; s++) {
      const o = n[s];
      let c = i[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[s] = Xt(i[s]), c.el = o.el), !r && c.patchFlag !== -2 && ua(o, c)), c.type === Jn && (c.patchFlag === -1 && (c = i[s] = Xt(c)), c.el = o.el), c.type === nr && !c.el && (c.el = o.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, i, s, o, c;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const v = e[n];
    if (v !== 0) {
      if (i = r[r.length - 1], e[i] < v) {
        t[n] = i, r.push(n);
        continue;
      }
      for (s = 0, o = r.length - 1; s < o; )
        c = s + o >> 1, e[r[c]] < v ? s = c + 1 : o = c;
      v < e[r[s]] && (s > 0 && (t[n] = r[s - 1]), r[s] = n);
    }
  }
  for (s = r.length, o = r[s - 1]; s-- > 0; )
    r[s] = o, o = t[o];
  return r;
}
function fa(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : fa(t);
}
function ks(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function da(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? da(t.subTree) : null;
}
const pa = (e) => e.__isSuspense;
function vc(e, t) {
  t && t.pendingBranch ? ee(e) ? t.effects.push(...e) : t.effects.push(e) : kl(e);
}
const se = /* @__PURE__ */ Symbol.for("v-fgt"), Jn = /* @__PURE__ */ Symbol.for("v-txt"), nr = /* @__PURE__ */ Symbol.for("v-cmt"), pi = /* @__PURE__ */ Symbol.for("v-stc"), xr = [];
let _t = null;
function C(e = !1) {
  xr.push(_t = e ? null : []);
}
function ha() {
  xr.pop(), _t = xr[xr.length - 1] || null;
}
let cn = 1;
function Ns(e, t = !1) {
  cn += e, e < 0 && _t && t && (_t.hasOnce = !0);
}
function ma(e) {
  return e.dynamicChildren = cn > 0 ? _t || Mr : null, ha(), cn > 0 && _t && _t.push(e), e;
}
function A(e, t, r, n, i, s) {
  return ma(
    l(
      e,
      t,
      r,
      n,
      i,
      s,
      !0
    )
  );
}
function Ec(e, t, r, n, i) {
  return ma(
    Qt(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function ba(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function qr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ya = ({ key: e }) => e ?? null, kn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Ue(e) || /* @__PURE__ */ Qe(e) || ae(e) ? { i: At, r: e, k: t, f: !!r } : e : null);
function l(e, t = null, r = null, n = 0, i = null, s = e === se ? 0 : 1, o = !1, c = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ya(t),
    ref: t && kn(t),
    scopeId: Vo,
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
    shapeFlag: s,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: At
  };
  return c ? (Dn(d, r), s & 128 && e.normalize(d)) : r && (d.shapeFlag |= Ue(r) ? 8 : 16), cn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  _t && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && _t.push(d), d;
}
const Qt = Sc;
function Sc(e, t = null, r = null, n = 0, i = null, s = !1) {
  if ((!e || e === Gl) && (e = nr), ba(e)) {
    const c = jr(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Dn(c, r), cn > 0 && !s && _t && (c.shapeFlag & 6 ? _t[_t.indexOf(e)] = c : _t.push(c)), c.patchFlag = -2, c;
  }
  if (Lc(e) && (e = e.__vccOpts), t) {
    t = Tc(t);
    let { class: c, style: d } = t;
    c && !Ue(c) && (t.class = Ur(c)), Te(d) && (/* @__PURE__ */ Yi(d) && !ee(d) && (d = et({}, d)), t.style = Vi(d));
  }
  const o = Ue(e) ? 1 : pa(e) ? 128 : Gn(e) ? 64 : Te(e) ? 4 : ae(e) ? 2 : 0;
  return l(
    e,
    t,
    r,
    n,
    i,
    o,
    s,
    !0
  );
}
function Tc(e) {
  return e ? /* @__PURE__ */ Yi(e) || ia(e) ? et({}, e) : e : null;
}
function jr(e, t, r = !1, n = !1) {
  const { props: i, ref: s, patchFlag: o, children: c, transition: d } = e, v = t ? xc(i || {}, t) : i, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && ya(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && s ? ee(s) ? s.concat(kn(t)) : [s, kn(t)] : kn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
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
    transition: d,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && jr(e.ssContent),
    ssFallback: e.ssFallback && jr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && Ji(
    y,
    d.clone(y)
  ), y;
}
function ye(e = " ", t = 0) {
  return Qt(Jn, null, e, t);
}
function fe(e = "", t = !1) {
  return t ? (C(), Ec(nr, null, e)) : Qt(nr, null, e);
}
function Bt(e) {
  return e == null || typeof e == "boolean" ? Qt(nr) : ee(e) ? Qt(
    se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ba(e) ? Xt(e) : Qt(Jn, null, String(e));
}
function Xt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : jr(e);
}
function Dn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ee(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Dn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !ia(t) ? t._ctx = At : i === 3 && At && (At.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ae(t)) {
    if (n & 65) {
      Dn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: At }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [ye(t)]) : r = 8;
  e.children = t, e.shapeFlag |= r;
}
function xc(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = Ur([t.class, n.class]));
      else if (i === "style")
        t.style = Vi([t.style, n.style]);
      else if (jn(i)) {
        const s = t[i], o = n[i];
        o && s !== o && !(ee(s) && s.includes(o)) ? t[i] = s ? [].concat(s, o) : o : o == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Vn(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function $t(e, t, r, n = null) {
  It(e, t, 7, [
    r,
    n
  ]);
}
const Cc = Qo();
let wc = 0;
function Ac(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Cc, s = {
    uid: wc++,
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
    scope: new Qa(
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
    propsOptions: oa(n, i),
    emitsOptions: ea(n, i),
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = ic.bind(null, s), e.ce && e.ce(s), s;
}
let at = null;
const Rc = () => at || At;
let Fn, un;
{
  const e = qn(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (s) => {
      i.length > 1 ? i.forEach((o) => o(s)) : i[0](s);
    };
  };
  Fn = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => at = r
  ), un = t(
    "__VUE_SSR_SETTERS__",
    (r) => fn = r
  );
}
const hn = (e) => {
  const t = at;
  return Fn(e), e.scope.on(), () => {
    e.scope.off(), Fn(t);
  };
}, Ps = () => {
  at && at.scope.off(), Fn(null);
};
function ga(e) {
  return e.vnode.shapeFlag & 4;
}
let fn = !1;
function Oc(e, t = !1, r = !1) {
  t && un(t);
  const { props: n, children: i } = e.vnode, s = ga(e);
  uc(e, n, s, t), hc(e, i, r || t);
  const o = s ? kc(e, t) : void 0;
  return t && un(!1), o;
}
function kc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yl);
  const { setup: n } = r;
  if (n) {
    er();
    const i = e.setupContext = n.length > 1 ? Pc(e) : null, s = hn(e), o = pn(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), c = ho(o);
    if (tr(), s(), (c || e.sp) && !nn(e) && Wo(e), c) {
      if (o.then(Ps, Ps), t)
        return o.then((d) => {
          un(!0);
          try {
            Ls(e, d, t);
          } finally {
            un(!1);
          }
        }).catch((d) => {
          Kn(d, e, 0);
        });
      e.asyncDep = o;
    } else
      Ls(e, o);
  } else
    _a(e);
}
function Ls(e, t, r) {
  ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Te(t) && (e.setupState = Uo(t)), _a(e);
}
function _a(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || qt);
  {
    const i = hn(e);
    er();
    try {
      Xl(e);
    } finally {
      tr(), i();
    }
  }
}
const Nc = {
  get(e, t) {
    return Ze(e, "get", ""), e[t];
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
function Zn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Uo(_l(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in sn)
        return sn[r](e);
    },
    has(t, r) {
      return r in t || r in sn;
    }
  })) : e.proxy;
}
function Lc(e) {
  return ae(e) && "__vccOpts" in e;
}
const J = (e, t) => /* @__PURE__ */ Cl(e, t, fn), Ic = "3.5.42";
let Ui;
const Is = typeof window < "u" && window.trustedTypes;
if (Is)
  try {
    Ui = /* @__PURE__ */ Is.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const va = Ui ? (e) => Ui.createHTML(e) : (e) => e, Mc = "http://www.w3.org/2000/svg", Uc = "http://www.w3.org/1998/Math/MathML", Yt = typeof document < "u" ? document : null, Ms = Yt && /* @__PURE__ */ Yt.createElement("template"), Dc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Yt.createElementNS(Mc, e) : t === "mathml" ? Yt.createElementNS(Uc, e) : r ? Yt.createElement(e, { is: r }) : Yt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Yt.createTextNode(e),
  createComment: (e) => Yt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Yt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, s) {
    const o = r ? r.previousSibling : t.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      Ms.innerHTML = va(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const c = Ms.content;
      if (n === "svg" || n === "mathml") {
        const d = c.firstChild;
        for (; d.firstChild; )
          c.appendChild(d.firstChild);
        c.removeChild(d);
      }
      t.insertBefore(c, r);
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
const Us = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function Bc(e, t, r) {
  const n = e.style, i = Ue(r);
  let s = !1;
  if (r && !i) {
    if (t)
      if (Ue(t))
        for (const o of t.split(";")) {
          const c = o.slice(0, o.indexOf(":")).trim();
          r[c] == null && Jr(n, c, "");
        }
      else
        for (const o in t)
          r[o] == null && Jr(n, o, "");
    for (const o in r) {
      o === "display" && (s = !0);
      const c = r[o];
      c != null ? qc(
        e,
        o,
        !Ue(t) && t ? t[o] : void 0,
        c
      ) || Jr(n, o, c) : Jr(n, o, "");
    }
  } else if (i) {
    if (t !== r) {
      const o = n[jc];
      o && (r += ";" + o), n.cssText = r, s = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  Us in e && (e[Us] = s ? n.display : "", e[$c] && (n.display = "none"));
}
const xn = /\s*!important$/;
function Jr(e, t, r) {
  if (ee(r))
    r.forEach((n) => Jr(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    xn.test(r) ? e.setProperty(t, r.replace(xn, ""), "important") : e.setProperty(t, r);
  else {
    const n = zc(e, t);
    xn.test(r) ? e.setProperty(
      wr(n),
      r.replace(xn, ""),
      "important"
    ) : e[n] = r;
  }
}
const Ds = ["Webkit", "Moz", "ms"], hi = {};
function zc(e, t) {
  const r = hi[t];
  if (r)
    return r;
  let n = Nt(t);
  if (n !== "filter" && n in e)
    return hi[t] = n;
  n = yo(n);
  for (let i = 0; i < Ds.length; i++) {
    const s = Ds[i] + n;
    if (s in e)
      return hi[t] = s;
  }
  return t;
}
function qc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ue(n) && r === n;
}
const Fs = "http://www.w3.org/1999/xlink";
function Hs(e, t, r, n, i, s = Xa(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Fs, t.slice(6, t.length)) : e.setAttributeNS(Fs, t, r) : r == null || s && !_o(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Wt(r) ? String(r) : r
  );
}
function $s(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? va(r) : r);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const c = s === "OPTION" ? e.getAttribute("value") || "" : e.value, d = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (c !== d || !("_value" in e)) && (e.value = d), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let o = !1;
  if (r === "" || r == null) {
    const c = typeof e[t];
    c === "boolean" ? r = _o(r) : r == null && c === "string" ? (r = "", o = !0) : c === "number" && (r = 0, o = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function vr(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Wc(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const js = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, r, n, i = null) {
  const s = e[js] || (e[js] = {}), o = s[t];
  if (n && o)
    o.value = n;
  else {
    const [c, d] = Xc(t);
    if (n) {
      const v = s[t] = Qc(
        n,
        i
      );
      vr(e, c, v, d);
    } else o && (Wc(e, c, o, d), s[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : wr(e.slice(2)), t];
}
let mi = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => mi || (Jc.then(() => mi = 0), mi = Date.now());
function Qc(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    const i = r.value;
    if (ee(i)) {
      const s = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        s.call(n), n._stopped = !0;
      };
      const o = i.slice(), c = [n];
      for (let d = 0; d < o.length && !n._stopped; d++) {
        const v = o[d];
        v && It(
          v,
          t,
          5,
          c
        );
      }
    } else
      It(
        i,
        t,
        5,
        [n]
      );
  };
  return r.value = e, r.attached = Zc(), r;
}
const Vs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eu = (e, t, r, n, i, s) => {
  const o = i === "svg";
  t === "class" ? Hc(e, n, o) : t === "style" ? Bc(e, r, n) : jn(t) ? Vn(t) || Kc(e, t, r, n, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, o)) ? ($s(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Hs(e, t, n, o, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ue(n))) ? $s(e, Nt(t), n, s, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Hs(e, t, n, o));
};
function tu(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Vs(t) && ae(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Vs(t) && Ue(r) ? !1 : t in e;
}
function ru(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Nt(t);
  return Array.isArray(r) ? r.some((i) => Nt(i) === n) : Object.keys(r).some((i) => Nt(i) === n);
}
const Hn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ee(t) ? (r) => Rn(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function Bs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Er = /* @__PURE__ */ Symbol("_assign"), Cn = /* @__PURE__ */ Symbol("_initialValue");
function bi(e, t, r) {
  return t && (e = e.trim()), r && (e = zn(e)), e;
}
const yi = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e.parentNode && (e.type === "text" ? e[Cn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Cn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Er] = Hn(i);
    const s = n || i.props && i.props.type === "number";
    vr(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Er](bi(e.value, r, s));
    }), (r || s) && vr(e, "change", () => {
      e.value = bi(e.value, r, s);
    }), t || (vr(e, "compositionstart", nu), vr(e, "compositionend", Bs), vr(e, "change", Bs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const i = t ?? "", s = e[Cn];
    delete e[Cn], s !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== s ? e[Er](bi(e.value, r, n)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: s } }, o) {
    if (e[Er] = Hn(o), e.composing) return;
    const c = (s || e.type === "number") && !/^0\d/.test(e.value) ? zn(e.value) : e.value, d = t ?? "";
    if (c === d)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === d) || (e.value = d);
  }
}, it = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, vr(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (d) => d.selected).map(
        (d) => r ? zn($n(d)) : $n(d)
      ), s = e.multiple, o = s ? Cr(e._modelValue) ? new Set(i) : i : i[0], c = e._pendingValue = [
        s,
        s ? ee(o) ? i.slice() : i : o
      ];
      try {
        e[Er](o);
      } finally {
        Fo(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[Er] = Hn(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    zs(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[Er] = Hn(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !iu(t, r[1], r[0])) && zs(e, t);
  }
};
function iu(e, t, r) {
  if (!r || ee(e)) return pr(e, t);
  if (Cr(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function zs(e, t) {
  const r = e.multiple, n = ee(t);
  if (!(r && !n && !Cr(t))) {
    for (let i = 0, s = e.options.length; i < s; i++) {
      const o = e.options[i], c = $n(o);
      if (r)
        if (n) {
          const d = typeof c;
          d === "string" || d === "number" ? o.selected = t.some((v) => String(v) === String(c)) : o.selected = Za(t, c) > -1;
        } else
          o.selected = t.has(c);
      else if (pr($n(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function $n(e) {
  return "_value" in e ? e._value : e.value;
}
const su = ["ctrl", "shift", "alt", "meta"], ou = {
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
  exact: (e, t) => su.some((r) => e[`${r}Key`] && !t.includes(r))
}, wn = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...s) => {
    for (let o = 0; o < t.length; o++) {
      const c = ou[t[o]];
      if (c && c(i, t)) return;
    }
    return e(i, ...s);
  }));
}, au = /* @__PURE__ */ et({ patchProp: eu }, Dc);
let qs;
function lu() {
  return qs || (qs = bc(au));
}
const cu = ((...e) => {
  const t = lu().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = fu(n);
    if (!i) return;
    const s = t._component;
    !ae(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
function fu(e) {
  return Ue(e) ? document.querySelector(e) : e;
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
    const s = JSON.parse(atob(i.value));
    return window._nc_initial_state.set(n, s), s;
  } catch (s) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: s }), r !== void 0)
      return r;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: s });
  }
}
function Ws(e, t) {
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
    var n, i, s, o, c = [], d = !0, v = !1;
    try {
      if (s = (r = r.call(e)).next, t !== 0) for (; !(d = (n = s.call(r)).done) && (c.push(n.value), c.length !== t); d = !0) ;
    } catch (y) {
      v = !0, i = y;
    } finally {
      try {
        if (!d && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (v) throw i;
      }
    }
    return c;
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
    if (typeof e == "string") return Ws(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ws(e, t) : void 0;
  }
}
const Ea = Object.entries, Ks = Object.setPrototypeOf, gu = Object.isFrozen, _u = Object.getPrototypeOf, vu = Object.getOwnPropertyDescriptor;
let $e = Object.freeze, We = Object.seal, Ir = Object.create, Sa = typeof Reflect < "u" && Reflect, Di = Sa.apply, Fi = Sa.construct;
$e || ($e = function(t) {
  return t;
});
We || (We = function(t) {
  return t;
});
Di || (Di = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Fi || (Fi = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const _r = He(Array.prototype.forEach), Eu = He(Array.prototype.lastIndexOf), Gs = He(Array.prototype.pop), Wr = He(Array.prototype.push), Su = He(Array.prototype.splice), Hr = Array.isArray, Zr = He(String.prototype.toLowerCase), gi = He(String.prototype.toString), Ys = He(String.prototype.match), Kr = He(String.prototype.replace), Xs = He(String.prototype.indexOf), Tu = He(String.prototype.trim), xu = He(Number.prototype.toString), Cu = He(Boolean.prototype.toString), Js = typeof BigInt > "u" ? null : He(BigInt.prototype.toString), Zs = typeof Symbol > "u" ? null : He(Symbol.prototype.toString), mt = He(Object.prototype.hasOwnProperty), Gr = He(Object.prototype.toString), Je = He(RegExp.prototype.test), yr = wu(TypeError);
function He(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Di(e, t, n);
  };
}
function wu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Fi(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Zr;
  if (Ks && Ks(e, null), !Hr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (gu(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function Au(e) {
  for (let t = 0; t < e.length; t++)
    mt(e, t) || (e[t] = null);
  return e;
}
function gt(e) {
  const t = Ir(null);
  for (const n of Ea(e)) {
    var r = bu(n, 2);
    const i = r[0], s = r[1];
    mt(e, i) && (Hr(s) ? t[i] = Au(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = gt(s) : t[i] = s);
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
      return Js ? Js(e) : "0";
    case "symbol":
      return Zs ? Zs(e) : "Symbol()";
    case "undefined":
      return Gr(e);
    case "function":
    case "object": {
      if (e === null)
        return Gr(e);
      const t = e, r = kt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Gr(n);
      }
      return Gr(e);
    }
    default:
      return Gr(e);
  }
}
function kt(e, t) {
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
    return Je(e, ""), !0;
  } catch {
    return !1;
  }
}
const Qs = $e(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), _i = $e(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), vi = $e(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ku = $e(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ei = $e(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Nu = $e(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), eo = $e(["#text"]), to = $e(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Si = $e(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ro = $e(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), An = $e(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pu = We(/{{[\w\W]*|^[\w\W]*}}/g), Lu = We(/<%[\w\W]*|^[\w\W]*%>/g), Iu = We(/\${[\w\W]*/g), Mu = We(/^data-[\-\w.\u00B7-\uFFFF]+$/), Uu = We(/^aria-[\-\w]+$/), no = We(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = We(/^(?:\w+script|data):/i), Fu = We(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = We(/^html$/i), $u = We(/^[a-z][.\w]*(-[.\w]+)+$/i), io = We(/<[/\w!]/g), so = We(/<[/\w]/g), ju = We(/<\/no(script|embed|frames)/i), Vu = We(/\/>/i), yt = {
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
}, Ta = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Bu = $e(pe({}, Ta)), zu = (function() {
  const e = {};
  return _r(Ta, (t) => {
    e[t] = We(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), $e(e);
})(), qu = function() {
  return typeof window > "u" ? null : window;
}, Wu = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (n = r.getAttribute(i));
  const s = "dompurify" + (n ? "#" + n : "");
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
}, oo = function() {
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
}, cr = function(t, r, n, i) {
  return mt(t, r) && Hr(t[r]) ? pe(i.base ? gt(i.base) : {}, t[r], i.transform) : n;
}, Ti = function(t, r, n) {
  const i = mt(t, r) ? t[r] : void 0;
  return i && typeof i == "object" ? gt(i) : n();
};
function xa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : qu();
  const t = (F) => xa(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== yt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, c = e.Element, d = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, E = e.trustedTypes, P = c.prototype, j = kt(P, "cloneNode"), re = kt(P, "remove"), W = kt(P, "nextSibling"), oe = kt(P, "childNodes"), ne = kt(P, "parentNode"), z = kt(P, "shadowRoot"), D = kt(P, "attributes"), V = o && o.prototype ? kt(o.prototype, "nodeType") : null, le = o && o.prototype ? kt(o.prototype, "nodeName") : null, Le = o && o.prototype ? kt(o.prototype, "ownerDocument") : null, ke = function(u) {
    return V ? V(u) : u.nodeType;
  }, je = function(u) {
    return le ? le(u) : u.nodeName;
  };
  if (typeof s == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let Ee, Ie = "", tt, lt = !1, Ke = 0;
  const vt = function() {
    if (Ke > 0)
      throw yr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Fe = function(u) {
    vt(), Ke++;
    try {
      return Ee.createHTML(u);
    } finally {
      Ke--;
    }
  }, Me = function(u) {
    vt(), Ke++;
    try {
      return Ee.createScriptURL(u);
    } finally {
      Ke--;
    }
  }, he = function() {
    return lt || (tt = Wu(E, i), lt = !0), tt;
  }, ue = r, Ve = ue.implementation, me = ue.createNodeIterator, xe = ue.createDocumentFragment, Be = ue.getElementsByTagName, Ye = n.importNode;
  let de = oo();
  t.isSupported = typeof Ea == "function" && typeof ne == "function" && Ve && Ve.createHTMLDocument !== void 0;
  const Ot = Pu, ze = Lu, ct = Iu, Et = Mu, St = Uu, rt = Du, ut = Fu, p = $u;
  let b = no, _ = null;
  const O = pe({}, [...Qs, ..._i, ...vi, ...Ei, ...eo]);
  let S = null;
  const w = pe({}, [...to, ...Si, ...ro, ...An]);
  let I = Object.seal(Ir(null, {
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
  })), U = null, M = null;
  const T = Object.seal(Ir(null, {
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
  let K = !0, H = !0, q = !1, X = !0, Z = !1, k = !0, N = !1, $ = !1, Q = null, ie = null, be = !1, ce = !1, Ne = !1, Re = !1, Oe = !0, ft = !1;
  const Mt = "user-content-";
  let Kt = !0, Tt = !1, xt = {}, Ct = null;
  const sr = pe({}, [
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
  let or = null;
  const ar = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let wt = null;
  const Ar = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ut = "http://www.w3.org/1998/Math/MathML", Dt = "http://www.w3.org/2000/svg", Xe = "http://www.w3.org/1999/xhtml";
  let L = Xe, x = !1, h = null;
  const Se = pe({}, [Ut, Dt, Xe], gi), bt = $e(["mi", "mo", "mn", "ms", "mtext"]);
  let Ft = pe({}, bt);
  const ts = $e(["annotation-xml"]);
  let Qn = pe({}, ts);
  const wa = pe({}, ["title", "style", "font", "a", "script"]);
  let Vr = null;
  const Aa = ["application/xhtml+xml", "text/html"], Ra = "text/html";
  let De = null, Rr = null;
  const Oa = r.createElement("form"), rs = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, ei = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Rr && Rr === u)
      return;
    (!u || typeof u != "object") && (u = {}), u = gt(u), Vr = // eslint-disable-next-line unicorn/prefer-includes
    Aa.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? Ra : u.PARSER_MEDIA_TYPE, De = Vr === "application/xhtml+xml" ? gi : Zr, _ = cr(u, "ALLOWED_TAGS", O, {
      transform: De
    }), S = cr(u, "ALLOWED_ATTR", w, {
      transform: De
    }), h = cr(u, "ALLOWED_NAMESPACES", Se, {
      transform: gi
    }), wt = cr(u, "ADD_URI_SAFE_ATTR", Ar, {
      transform: De,
      base: Ar
    }), or = cr(u, "ADD_DATA_URI_TAGS", ar, {
      transform: De,
      base: ar
    }), Ct = cr(u, "FORBID_CONTENTS", sr, {
      transform: De
    }), U = cr(u, "FORBID_TAGS", gt({}), {
      transform: De
    }), M = cr(u, "FORBID_ATTR", gt({}), {
      transform: De
    }), xt = mt(u, "USE_PROFILES") ? u.USE_PROFILES && typeof u.USE_PROFILES == "object" ? gt(u.USE_PROFILES) : u.USE_PROFILES : !1, K = u.ALLOW_ARIA_ATTR !== !1, H = u.ALLOW_DATA_ATTR !== !1, q = u.ALLOW_UNKNOWN_PROTOCOLS || !1, X = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = u.SAFE_FOR_TEMPLATES || !1, k = u.SAFE_FOR_XML !== !1, N = u.WHOLE_DOCUMENT || !1, ce = u.RETURN_DOM || !1, Ne = u.RETURN_DOM_FRAGMENT || !1, Re = u.RETURN_TRUSTED_TYPE || !1, be = u.FORCE_BODY || !1, Oe = u.SANITIZE_DOM !== !1, ft = u.SANITIZE_NAMED_PROPS || !1, Kt = u.KEEP_CONTENT !== !1, Tt = u.IN_PLACE || !1, b = Ou(u.ALLOWED_URI_REGEXP) ? u.ALLOWED_URI_REGEXP : no, L = typeof u.NAMESPACE == "string" ? u.NAMESPACE : Xe, Ft = Ti(
      u,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => pe({}, bt)
      // Default built-in map
    ), Qn = Ti(
      u,
      "HTML_INTEGRATION_POINTS",
      () => pe({}, ts)
      // Default built-in map
    );
    const g = Ti(u, "CUSTOM_ELEMENT_HANDLING", () => Ir(null));
    if (I = Ir(null), mt(g, "tagNameCheck") && rs(g.tagNameCheck) && (I.tagNameCheck = g.tagNameCheck), mt(g, "attributeNameCheck") && rs(g.attributeNameCheck) && (I.attributeNameCheck = g.attributeNameCheck), mt(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (I.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), We(I), Z && (H = !1), Ne && (ce = !0), xt && (_ = pe({}, eo), S = Ir(null), xt.html === !0 && (pe(_, Qs), pe(S, to)), xt.svg === !0 && (pe(_, _i), pe(S, Si), pe(S, An)), xt.svgFilters === !0 && (pe(_, vi), pe(S, Si), pe(S, An)), xt.mathMl === !0 && (pe(_, Ei), pe(S, ro), pe(S, An))), T.tagCheck = null, T.attributeCheck = null, mt(u, "ADD_TAGS") && (typeof u.ADD_TAGS == "function" ? T.tagCheck = u.ADD_TAGS : Hr(u.ADD_TAGS) && (_ === O && (_ = gt(_)), pe(_, u.ADD_TAGS, De))), mt(u, "ADD_ATTR") && (typeof u.ADD_ATTR == "function" ? T.attributeCheck = u.ADD_ATTR : Hr(u.ADD_ATTR) && (S === w && (S = gt(S)), pe(S, u.ADD_ATTR, De))), mt(u, "ADD_FORBID_CONTENTS") && Hr(u.ADD_FORBID_CONTENTS) && (Ct === sr && (Ct = gt(Ct)), pe(Ct, u.ADD_FORBID_CONTENTS, De)), Kt && (_["#text"] = !0), N && pe(_, ["html", "head", "body"]), _.table && (pe(_, ["tbody"]), delete U.tbody), u.TRUSTED_TYPES_POLICY) {
      if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw yr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw yr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const R = Ee;
      Ee = u.TRUSTED_TYPES_POLICY;
      try {
        Ie = Fe("");
      } catch (B) {
        throw Ee = R, B;
      }
    } else u.TRUSTED_TYPES_POLICY === null ? (Ee = void 0, Ie = "") : (Ee === void 0 && (Ee = he()), Ee && typeof Ie == "string" && (Ie = Fe("")));
    $e && $e(u), Rr = u;
  }, ns = pe({}, [..._i, ...vi, ...ku]), is = pe({}, [...Ei, ...Nu]), ka = function(u, g, R) {
    return g.namespaceURI === Xe ? u === "svg" : g.namespaceURI === Ut ? u === "svg" && (R === "annotation-xml" || Ft[R]) : !!ns[u];
  }, Na = function(u, g, R) {
    return g.namespaceURI === Xe ? u === "math" : g.namespaceURI === Dt ? u === "math" && Qn[R] : !!is[u];
  }, Pa = function(u, g, R) {
    return g.namespaceURI === Dt && !Qn[R] || g.namespaceURI === Ut && !Ft[R] ? !1 : !is[u] && (wa[u] || !ns[u]);
  }, La = function(u) {
    let g = ne(u);
    (!g || !g.tagName) && (g = {
      namespaceURI: L,
      tagName: "template"
    });
    const R = Zr(u.tagName), B = Zr(g.tagName);
    return h[u.namespaceURI] ? u.namespaceURI === Dt ? ka(R, g, B) : u.namespaceURI === Ut ? Na(R, g, B) : u.namespaceURI === Xe ? Pa(R, g, B) : !!(Vr === "application/xhtml+xml" && h[u.namespaceURI]) : !1;
  }, lr = function(u) {
    Wr(t.removed, {
      element: u
    });
    try {
      ne(u).removeChild(u);
    } catch {
      if (re(u), !ne(u))
        throw yr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ss = function(u, g, R) {
    try {
      u.removeAttributeNode(g);
    } catch {
      try {
        u.removeAttribute(R);
      } catch {
      }
    }
  }, mn = function(u) {
    bn(u);
    const g = oe(u);
    if (g) {
      const B = [];
      _r(g, (Y) => {
        Wr(B, Y);
      }), _r(B, (Y) => {
        try {
          re(Y);
        } catch {
        }
      });
    }
    const R = D(u);
    if (R)
      for (let B = R.length - 1; B >= 0; --B) {
        const Y = R[B], te = Y && Y.name;
        typeof te == "string" && ss(u, Y, te);
      }
  }, hr = function(u, g, R) {
    if (!R)
      try {
        R = g.getAttributeNode(u);
      } catch {
        R = null;
      }
    Wr(t.removed, {
      attribute: R || null,
      from: g
    });
    try {
      R ? g.removeAttributeNode(R) : g.removeAttribute(u);
    } catch {
      try {
        g.removeAttribute(u);
      } catch {
      }
    }
    if (u === "is")
      if (ce || Ne)
        try {
          lr(g);
        } catch {
        }
      else
        try {
          g.setAttribute(u, "");
        } catch {
        }
  }, Ia = function(u) {
    const g = D(u);
    if (g)
      for (let R = g.length - 1; R >= 0; --R) {
        const B = g[R], Y = B && B.name;
        typeof Y != "string" || S[De(Y)] || ss(u, B, Y);
      }
  }, bn = function(u) {
    const g = [u];
    for (; g.length > 0; ) {
      const R = g.pop();
      ke(R) === yt.element && Ia(R);
      const Y = oe(R);
      if (Y)
        for (let te = Y.length - 1; te >= 0; --te)
          g.push(Y[te]);
    }
  }, os = function(u, g) {
    return k ? u === "patchsrc" ? !0 : u === "for" && g !== "label" && g !== "output" : !1;
  }, Ma = function(u) {
    if (!k)
      return;
    const g = [u];
    for (; g.length > 0; ) {
      const R = g.pop(), B = ke(R);
      if (B === yt.processingInstruction || B === yt.comment && Je(so, R.data)) {
        try {
          re(R);
        } catch {
        }
        continue;
      }
      if (B === yt.element) {
        const te = R, we = De(je(R));
        try {
          te.hasAttribute && te.hasAttribute("patchsrc") && te.removeAttribute("patchsrc"), te.hasAttribute && te.hasAttribute("for") && os("for", we) && te.removeAttribute("for");
        } catch {
        }
      }
      const Y = oe(R);
      if (Y)
        for (let te = Y.length - 1; te >= 0; --te)
          g.push(Y[te]);
    }
  }, as = function(u) {
    let g = null, R = null;
    if (be)
      u = "<remove></remove>" + u;
    else {
      const te = Ys(u, /^[\r\n\t ]+/);
      R = te && te[0];
    }
    Vr === "application/xhtml+xml" && L === Xe && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const B = Ee ? Fe(u) : u;
    if (L === Xe)
      try {
        g = new y().parseFromString(B, Vr);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = Ve.createDocument(L, "template", null);
      try {
        g.documentElement.innerHTML = x ? Ie : B;
      } catch {
      }
    }
    const Y = g.body || g.documentElement;
    return u && R && Y.insertBefore(r.createTextNode(R), Y.childNodes[0] || null), L === Xe ? Be.call(g, N ? "html" : "body")[0] : N ? g.documentElement : Y;
  }, ls = function(u) {
    const g = Le ? Le(u) : u.ownerDocument;
    return me.call(
      g || u,
      u,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, yn = function(u) {
    return u = Kr(u, Ot, " "), u = Kr(u, ze, " "), u = Kr(u, ct, " "), u;
  }, ti = function(u) {
    var g;
    u.normalize();
    const R = Le ? Le(u) : u.ownerDocument, B = me.call(
      R || u,
      u,
      // eslint-disable-next-line no-bitwise
      d.SHOW_TEXT | d.SHOW_COMMENT | d.SHOW_CDATA_SECTION | d.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Y = B.nextNode();
    for (; Y; )
      Y.data = yn(Y.data), Y = B.nextNode();
    const te = (g = u.querySelectorAll) === null || g === void 0 ? void 0 : g.call(u, "template");
    te && _r(te, (we) => {
      Or(we.content) && ti(we.content);
    });
  }, gn = function(u) {
    const g = le ? le(u) : null;
    return typeof g != "string" || De(g) !== "form" ? !1 : typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    u.attributes !== D(u) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    u.nodeType !== V(u) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    u.childNodes !== oe(u);
  }, Or = function(u) {
    if (!V || typeof u != "object" || u === null)
      return !1;
    try {
      return V(u) === yt.documentFragment;
    } catch {
      return !1;
    }
  }, Br = function(u) {
    if (!V || typeof u != "object" || u === null)
      return !1;
    try {
      return typeof V(u) == "number";
    } catch {
      return !1;
    }
  };
  function Ht(F, u, g) {
    F.length !== 0 && _r(F, (R) => {
      R.call(t, u, g, Rr);
    });
  }
  const Ua = function(u, g) {
    return !!(k && u.hasChildNodes() && !Br(u.firstElementChild) && Je(io, u.textContent) && Je(io, u.innerHTML) || k && u.namespaceURI === Xe && Bu[g] && (Br(u.firstElementChild) || typeof u.textContent == "string" && Je(zu[g], u.textContent)) || u.nodeType === yt.processingInstruction || k && u.nodeType === yt.comment && Je(so, u.data));
  }, _n = function(u, g) {
    if (u instanceof RegExp)
      return Je(u, g);
    if (u instanceof Function) {
      for (var R = arguments.length, B = new Array(R > 2 ? R - 2 : 0), Y = 2; Y < R; Y++)
        B[Y - 2] = arguments[Y];
      return !!u(g, ...B);
    }
    return !1;
  }, Da = function(u, g, R) {
    if (!U[g] && ps(g) && _n(I.tagNameCheck, g))
      return !1;
    if (Kt && !Ct[g]) {
      const B = ne(u), Y = oe(u);
      if (Y && B) {
        const te = Y.length;
        for (let we = te - 1; we >= 0; --we) {
          const Pe = u === R ? j(Y[we], !0) : Y[we];
          B.insertBefore(Pe, W(u));
        }
      }
    }
    return lr(u), !0;
  }, cs = function(u, g, R, B) {
    return u.length === 0 ? g : g === R || g === B ? gt(g) : g;
  }, us = function(u, g) {
    return u === g || ne(u) !== null ? !1 : (Tt && bn(u), !0);
  }, fs = function(u, g) {
    if (Ht(de.beforeSanitizeElements, u, null), us(u, g))
      return !0;
    if (gn(u))
      return lr(u), !0;
    const R = De(je(u));
    if (_ = cs(de.uponSanitizeElement, _, O, Q), Ht(de.uponSanitizeElement, u, {
      tagName: R,
      allowedTags: _
    }), us(u, g))
      return !0;
    if (Ua(u, R))
      return lr(u), !0;
    if (U[R] || !(T.tagCheck instanceof Function && T.tagCheck(R)) && !_[R]) {
      const Y = Da(u, R, g);
      return Y === !1 && Ht(de.afterSanitizeElements, u, null), Y;
    }
    if (ke(u) === yt.element && !La(u) || (R === "noscript" || R === "noembed" || R === "noframes") && Je(ju, u.innerHTML))
      return lr(u), !0;
    if (Z && u.nodeType === yt.text) {
      const Y = yn(u.textContent);
      u.textContent !== Y && (Wr(t.removed, {
        element: u.cloneNode()
      }), u.textContent = Y);
    }
    return Ht(de.afterSanitizeElements, u, null), !1;
  }, ds = function(u, g, R) {
    if (M[g] || os(g, u) || Oe && (g === "id" || g === "name") && (R in r || R in Oa))
      return !1;
    const B = S[g] || T.attributeCheck instanceof Function && T.attributeCheck(g, u);
    return H && Je(Et, g) || K && Je(St, g) ? !0 : B ? wt[g] || Je(b, Kr(R, ut, "")) || (g === "src" || g === "xlink:href" || g === "href") && u !== "script" && Xs(R, "data:") === 0 && or[u] || q && !Je(rt, Kr(R, ut, "")) ? !0 : !R : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ps(u) && _n(I.tagNameCheck, u) && _n(I.attributeNameCheck, g, u) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && I.allowCustomizedBuiltInElements && _n(I.tagNameCheck, R)
    );
  }, Fa = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ps = function(u) {
    return !Fa[Zr(u)] && Je(p, u);
  }, Ha = function(u, g, R, B) {
    if (Ee && typeof E == "object" && typeof E.getAttributeType == "function" && !R)
      switch (E.getAttributeType(u, g)) {
        case "TrustedHTML":
          return Fe(B);
        case "TrustedScriptURL":
          return Me(B);
      }
    return B;
  }, $a = function(u, g, R, B) {
    try {
      R ? u.setAttributeNS(R, g, B) : u.setAttribute(g, B), gn(u) ? lr(u) : Gs(t.removed);
    } catch {
      hr(g, u);
    }
  }, hs = function(u) {
    Ht(de.beforeSanitizeAttributes, u, null);
    const g = u.attributes;
    if (!g || gn(u))
      return;
    S = cs(de.uponSanitizeAttribute, S, w, ie);
    const R = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: S,
      forceKeepAttr: void 0
    };
    let B = g.length;
    const Y = De(u.nodeName);
    for (; B--; ) {
      const te = g[B], we = te.name, Pe = te.namespaceURI, dt = te.value, pt = De(we), ni = dt;
      let nt = we === "value" ? ni : Tu(ni);
      if (R.attrName = pt, R.attrValue = nt, R.keepAttr = !0, R.forceKeepAttr = void 0, Ht(de.uponSanitizeAttribute, u, R), nt = R.attrValue, ft && (pt === "id" || pt === "name") && Xs(nt, Mt) !== 0 && (hr(we, u, te), nt = Mt + nt), k && Je(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, nt)) {
        hr(we, u, te);
        continue;
      }
      if (pt === "attributename" && Ys(nt, "href")) {
        hr(we, u, te);
        continue;
      }
      if (!R.forceKeepAttr) {
        if (!R.keepAttr) {
          hr(we, u, te);
          continue;
        }
        if (!X && Je(Vu, nt)) {
          hr(we, u, te);
          continue;
        }
        if (Z && (nt = yn(nt)), !ds(Y, pt, nt)) {
          hr(we, u, te);
          continue;
        }
        nt = Ha(Y, pt, Pe, nt), nt !== ni && $a(u, we, Pe, nt);
      }
    }
    Ht(de.afterSanitizeAttributes, u, null);
  }, vn = function(u) {
    let g = null;
    const R = ls(u);
    for (Ht(de.beforeSanitizeShadowDOM, u, null); g = R.nextNode(); )
      if (Ht(de.uponSanitizeShadowNode, g, null), fs(g, u), hs(g), Or(g.content) && vn(g.content), ke(g) === yt.element) {
        const B = z(g);
        Or(B) && (ri(B), vn(B));
      }
    Ht(de.afterSanitizeShadowDOM, u, null);
  }, ri = function(u) {
    const g = [{
      node: u,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const R = g.pop();
      if (R.shadow) {
        vn(R.shadow);
        continue;
      }
      const B = R.node, te = ke(B) === yt.element, we = oe(B);
      if (we)
        for (let Pe = we.length - 1; Pe >= 0; --Pe)
          g.push({
            node: we[Pe],
            shadow: null
          });
      if (te) {
        const Pe = le ? le(B) : null;
        if (typeof Pe == "string" && De(Pe) === "template") {
          const dt = B.content;
          Or(dt) && g.push({
            node: dt,
            shadow: null
          });
        }
      }
      if (te) {
        const Pe = z(B);
        Or(Pe) && g.push({
          node: null,
          shadow: Pe
        }, {
          node: Pe,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, R = null, B = null, Y = null;
    if (x = !F, x && (F = "<!-->"), typeof F != "string" && !Br(F) && (F = Ru(F), typeof F != "string"))
      throw yr("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    $ ? (_ = Q, S = ie) : ei(u), (de.uponSanitizeElement.length > 0 || de.uponSanitizeAttribute.length > 0) && (_ = gt(_)), de.uponSanitizeAttribute.length > 0 && (S = gt(S)), t.removed = [];
    const te = Tt && typeof F != "string" && Br(F);
    if (te) {
      Ma(F);
      const dt = je(F);
      if (typeof dt == "string") {
        const pt = De(dt);
        if (!_[pt] || U[pt])
          throw mn(F), yr("root node is forbidden and cannot be sanitized in-place");
      }
      if (gn(F))
        throw mn(F), yr("root node is clobbered and cannot be sanitized in-place");
      try {
        ri(F);
      } catch (pt) {
        throw mn(F), pt;
      }
    } else if (Br(F))
      g = as("<!---->"), R = g.ownerDocument.importNode(F, !0), R.nodeType === yt.element && R.nodeName === "BODY" || R.nodeName === "HTML" ? g = R : g.appendChild(R), ri(R);
    else {
      if (!ce && !Z && !N && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return Ee && Re ? Fe(F) : F;
      if (g = as(F), !g)
        return ce ? null : Re ? Ie : "";
    }
    g && be && lr(g.firstChild);
    const we = te ? F : g;
    try {
      const dt = ls(we);
      for (; B = dt.nextNode(); )
        fs(B, we), hs(B), Or(B.content) && vn(B.content);
    } catch (dt) {
      throw te && (mn(F), _r(t.removed, (pt) => {
        pt.element && bn(pt.element);
      })), dt;
    }
    if (te)
      return _r(t.removed, (dt) => {
        dt.element && bn(dt.element);
      }), Z && ti(F), F;
    if (ce) {
      if (Z && ti(g), Ne)
        for (Y = xe.call(g.ownerDocument); g.firstChild; )
          Y.appendChild(g.firstChild);
      else
        Y = g;
      return (S.shadowroot || S.shadowrootmode) && (Y = Ye.call(n, Y, !0)), Y;
    }
    let Pe = N ? g.outerHTML : g.innerHTML;
    return N && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Je(Hu, g.ownerDocument.doctype.name) && (Pe = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Pe), Z && (Pe = yn(Pe)), Ee && Re ? Fe(Pe) : Pe;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ei(F), $ = !0, Q = _, ie = S;
  }, t.clearConfig = function() {
    Rr = null, $ = !1, Q = null, ie = null, Ee = tt, Ie = "";
  }, t.isValidAttribute = function(F, u, g) {
    Rr || ei({});
    const R = De(F), B = De(u);
    return ds(R, B, g);
  }, t.addHook = function(F, u) {
    typeof u == "function" && mt(de, F) && Wr(de[F], u);
  }, t.removeHook = function(F, u) {
    if (mt(de, F)) {
      if (u !== void 0) {
        const g = Eu(de[F], u);
        return g === -1 ? void 0 : Su(de[F], g, 1)[0];
      }
      return Gs(de[F]);
    }
  }, t.removeHooks = function(F) {
    mt(de, F) && (de[F] = []);
  }, t.removeAllHooks = function() {
    de = oo();
  }, t;
}
var Ku = xa();
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xi, ao;
function Yu() {
  if (ao) return xi;
  ao = 1;
  var e = /["'&<>]/;
  xi = t;
  function t(r) {
    var n = "" + r, i = e.exec(n);
    if (!i)
      return n;
    var s, o = "", c = 0, d = 0;
    for (c = i.index; c < n.length; c++) {
      switch (n.charCodeAt(c)) {
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
      d !== c && (o += n.substring(d, c)), d = c + 1, o += s;
    }
    return d !== c ? o + n.substring(d, c) : o;
  }
  return xi;
}
var Xu = Yu();
const lo = /* @__PURE__ */ Gu(Xu);
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
  const s = typeof r == "object" ? r : void 0, o = typeof n == "number" ? n : typeof r == "number" ? r : void 0, c = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof n == "object" ? n : {}
  }, d = (W) => W, v = (c.sanitize ? Ku.sanitize : d) || d, y = c.escape ? lo : d, E = (W) => typeof W == "string" || typeof W == "number", P = (W, oe, ne) => W.replace(/%n/g, "" + ne).replace(/{([^{}]*)}/g, (z, D) => {
    if (oe === void 0 || !(D in oe))
      return y(z);
    const V = oe[D];
    return E(V) ? y(`${V}`) : typeof V == "object" && E(V.value) ? (V.escape !== !1 ? lo : d)(`${V.value}`) : y(z);
  });
  let re = (i?.bundle ?? Ju(e)).translations[t] || t;
  return re = Array.isArray(re) ? re[0] : re, v(typeof s == "object" || o !== void 0 ? P(
    re,
    s,
    o
  ) : re);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ef = { class: "library-catalogue-header" }, tf = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, rf = { id: "library-catalogue-heading" }, nf = { class: "library-muted" }, sf = ["aria-label"], of = { class: "library-catalogue-actions-list" }, af = ["href"], lf = ["href"], cf = ["href"], uf = ["href"], ff = {
  class: "library-actions-health-overview",
  "aria-labelledby": "library-actions-health-heading"
}, df = { class: "library-muted library-catalogue-eyebrow" }, pf = { id: "library-actions-health-heading" }, hf = { class: "library-muted" }, mf = {
  key: 0,
  class: "library-muted"
}, bf = {
  key: 1,
  class: "library-notice"
}, yf = {
  key: 2,
  class: "library-muted"
}, gf = {
  key: 0,
  class: "library-muted"
}, _f = {
  key: 1,
  class: "library-muted"
}, vf = {
  key: 2,
  class: "library-muted"
}, Ef = ["disabled"], Sf = { class: "library-actions-health-links" }, Tf = ["href"], xf = ["href"], Cf = ["href"], wf = ["href"], Af = { class: "library-actions-health-grid" }, Rf = { class: "library-import-health-number" }, Of = { class: "library-import-health-number" }, kf = { class: "library-muted" }, Nf = { class: "library-muted" }, Pf = { class: "library-muted" }, Lf = {
  key: 3,
  class: "library-import-health-examples"
}, If = {
  class: "library-review-queue-actions",
  "aria-label": "Review queue shortcuts"
}, Mf = { class: "library-muted" }, Uf = ["href"], Df = ["href"], Ff = ["action"], Hf = ["value"], $f = {
  type: "submit",
  class: "button secondary"
}, jf = { class: "library-muted" }, Vf = ["href"], Bf = ["action"], zf = ["value"], qf = {
  type: "submit",
  class: "button secondary"
}, Wf = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, Kf = {
  class: "library-useful-views",
  "aria-labelledby": "library-useful-views-heading"
}, Gf = { class: "library-useful-views-copy" }, Yf = { class: "library-muted library-catalogue-eyebrow" }, Xf = { id: "library-useful-views-heading" }, Jf = { class: "library-muted" }, Zf = { class: "library-muted" }, Qf = ["aria-label"], ed = ["href", "title"], td = ["aria-label"], rd = ["name", "value"], nd = { class: "library-quick-search-row" }, id = { class: "library-quick-filter-search" }, sd = ["aria-label"], od = { class: "library-quick-filter-options" }, ad = { class: "library-quick-filter-option-grid" }, ld = { value: "title" }, cd = { value: "recent" }, ud = { value: "publicationDate" }, fd = { value: "publication" }, dd = { value: "lastOpened" }, pd = { value: "format" }, hd = { value: "" }, md = { value: "1" }, bd = ["value"], yd = ["value"], gd = ["aria-label"], _d = ["aria-label"], vd = { class: "library-filter-panel" }, Ed = { class: "library-filter-panel-summary" }, Sd = ["aria-label"], Td = {
  id: "library-search-scope",
  class: "library-muted library-search-scope"
}, xd = { value: "" }, Cd = ["value"], wd = { value: "" }, Ad = ["value"], Rd = { value: "" }, Od = ["value"], kd = { value: "" }, Nd = ["value"], Pd = { value: "" }, Ld = ["value"], Id = { value: "" }, Md = ["value"], Ud = { value: "" }, Dd = ["value"], Fd = { value: "" }, Hd = ["value"], $d = { value: "" }, jd = ["value"], Vd = { value: "" }, Bd = ["value"], zd = { value: "" }, qd = { value: "1" }, Wd = { value: "" }, Kd = { value: "1" }, Gd = { value: "title" }, Yd = { value: "recent" }, Xd = { value: "publicationDate" }, Jd = { value: "publication" }, Zd = { value: "lastOpened" }, Qd = { value: "format" }, ep = ["value"], tp = ["value"], rp = ["aria-label"], np = ["aria-label"], ip = ["href"], sp = {
  key: 1,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, op = { class: "library-muted library-catalogue-eyebrow" }, ap = { id: "library-discovery-heading" }, lp = { class: "library-muted" }, cp = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, up = { key: 0 }, fp = { key: 1 }, dp = { key: 2 }, pp = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, hp = { key: 0 }, mp = { key: 1 }, bp = {
  href: "/apps/library/",
  class: "button secondary"
}, yp = { class: "library-catalogue-status-row" }, gp = { class: "library-muted library-filter-result-summary" }, _p = { key: 0 }, vp = { href: "?" }, Ep = ["aria-label"], Sp = { class: "library-pagination-range" }, Tp = { key: 0 }, xp = ["href"], Cp = {
  key: 1,
  class: "library-muted"
}, wp = ["href"], Ap = {
  key: 3,
  class: "library-muted"
}, Rp = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, Op = ["aria-label"], kp = { class: "library-settings-count-badge" }, Np = ["action"], Pp = ["value"], Lp = ["name", "value"], Ip = ["placeholder"], Mp = {
  type: "submit",
  class: "button primary"
}, Up = { class: "library-muted" }, Dp = ["action"], Fp = ["value"], Hp = ["name", "value"], $p = ["placeholder"], jp = {
  type: "submit",
  class: "button secondary"
}, Vp = { class: "library-muted" }, Bp = ["action"], zp = ["value"], qp = ["name", "value"], Wp = {
  type: "submit",
  class: "button secondary"
}, Kp = { class: "library-muted" }, Gp = ["action"], Yp = ["value"], Xp = ["name", "value"], Jp = { name: "bulkEditField" }, Zp = { value: "publicationType" }, Qp = { value: "subtitle" }, eh = { value: "creators" }, th = { value: "publication" }, rh = { value: "publicationDate" }, nh = { value: "language" }, ih = { value: "publisher" }, sh = { value: "genres" }, oh = { value: "classifications" }, ah = {
  type: "submit",
  class: "button secondary"
}, lh = { class: "library-muted" }, ch = ["action"], uh = ["value"], fh = ["name", "value"], dh = {
  type: "submit",
  class: "button secondary"
}, ph = { class: "library-muted" }, hh = { class: "library-discovery-shortcuts" }, mh = { class: "library-discovery-shortcut-grid" }, bh = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, yh = { id: "library-periodical-groups-heading" }, gh = { class: "library-muted" }, _h = ["href"], vh = { class: "library-muted" }, Eh = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, Sh = { id: "library-periodical-groups-empty-heading" }, Th = { class: "library-muted" }, xh = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, Ch = { id: "library-year-groups-heading" }, wh = ["href"], Ah = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, Rh = { id: "library-creator-groups-heading" }, Oh = ["href"], kh = ["aria-label"], Nh = ["href", "aria-label"], Ph = { class: "library-muted" }, Lh = { class: "library-empty-actions" }, Ih = ["href"], Mh = { class: "library-muted" }, Uh = { class: "library-muted" }, Dh = { class: "library-empty-actions" }, Fh = ["href"], Hh = { class: "library-muted" }, $h = { class: "library-empty-actions" }, jh = ["href"], Vh = {
  href: "?",
  class: "button primary"
}, Bh = { class: "library-muted" }, zh = { class: "library-empty-actions" }, qh = ["href"], Wh = {
  key: 4,
  class: "library-cover-gallery"
}, Kh = ["href", "aria-label"], Gh = ["src", "alt"], Yh = ["action", "onSubmit"], Xh = ["value"], Jh = ["value"], Zh = ["aria-pressed", "title", "aria-label", "onClick"], Qh = { class: "library-cover-summary" }, em = { class: "library-cover-primary" }, tm = ["aria-label"], rm = ["href"], nm = ["onToggle"], im = ["aria-label"], sm = { class: "library-cover-meta" }, om = {
  key: 0,
  class: "library-creator"
}, am = { class: "library-cover-detail-list" }, lm = { class: "library-cover-detail-chip" }, cm = {
  key: 0,
  class: "library-cover-detail-chip"
}, um = {
  key: 1,
  class: "library-cover-detail-chip"
}, fm = {
  key: 2,
  class: "library-cover-detail-chip"
}, dm = {
  key: 3,
  class: "library-cover-detail-chip"
}, pm = {
  key: 4,
  class: "library-cover-detail-chip"
}, hm = {
  key: 5,
  class: "library-cover-detail-chip"
}, mm = {
  key: 6,
  class: "library-cover-detail-chip"
}, bm = {
  key: 1,
  class: "library-muted library-cover-description"
}, ym = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, gm = { key: 0 }, _m = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, vm = {
  key: 0,
  class: "library-muted"
}, Em = { class: "library-cover-actions" }, Sm = ["href"], Tm = ["href"], xm = ["href"], Cm = ["aria-label"], wm = { class: "library-pagination-range" }, Am = { key: 0 }, Rm = ["href"], Om = {
  key: 1,
  class: "library-muted"
}, km = ["href"], Nm = {
  key: 3,
  class: "library-muted"
}, Pm = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], i = /* @__PURE__ */ fr({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), s = /* @__PURE__ */ fr((i.items || []).map((L) => ({ ...L }))), o = J(() => s), c = J(() => i.shelves || []), d = J(() => i.formats || []), v = J(() => i.publications || []), y = J(() => i.publicationSummaries || []), E = J(() => i.publicationIssueContext || null), P = J(() => i.publicationYears || []), j = J(() => i.creators || []), re = J(() => i.scanStatuses || []), W = J(() => i.workflowStatuses || []), oe = J(() => i.genres || []), ne = J(() => i.classifications || []), z = J(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), D = /* @__PURE__ */ fr({
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
    }), V = J(() => i.settingsUrl || ""), le = J(() => i.requestToken || ""), Le = J(() => i.metadataExportUrl || ""), ke = J(() => i.metadataSidecarManifestUrl || ""), je = J(() => i.metadataSidecarBundleUrl || ""), Ee = J(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), Ie = J(() => i.batchTagUrl || "/apps/library/bulk/tags"), tt = J(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), lt = J(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ke = J(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), vt = J(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Fe = J(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), Me = J(() => i.metadataErrorsUrl || "/apps/library/health/metadata-errors"), he = J(() => i.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), ue = J(() => i.coverProbeUrl || "/apps/library/health/covers/probe"), Ve = J(() => i.importHealthSummaryUrl || "/apps/library/health/import-summary"), me = /* @__PURE__ */ fr({
      summary: i.importHealthSummary || {},
      loaded: !!(i.importHealthSummary && Object.keys(i.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), xe = J(() => me.summary || {}), Be = J(() => {
      const L = Number(xe.value.generatedAt || 0);
      return L > 0 ? new Date(L * 1e3).toLocaleString() : "";
    }), Ye = J(() => xe.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), de = J(() => xe.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), Ot = J(() => xe.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), ze = J(() => xe.value.coverSupportMatrix || Ot.value.byFormat || []), ct = J(() => xe.value.environmentCapabilities || {}), Et = J(() => i.discoveryPage === "publication"), St = J(() => i.discoveryPage === "year"), rt = J(() => i.discoveryPage === "creator"), ut = J(() => Et.value || St.value || rt.value), p = J(() => i.discoveryTitle || D.publication || D.year || D.creator || ""), b = J(() => ut.value ? p.value : a("library", "Publication catalogue")), _ = J(() => rt.value ? a("library", "Creator") : St.value ? a("library", "Publication year") : a("library", "Publication / series")), O = J(() => Number(i.rootCount || 0)), S = J(() => Number(i.enabledRootCount || 0)), w = J(() => O.value === 0), I = J(() => O.value > 0 && S.value === 0), U = J(() => K.value.length > 0), M = {
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
    }, T = J(() => {
      if (typeof window > "u") return "";
      const L = new URLSearchParams(window.location.search);
      if (L.get("batchMetadataApplyResult") !== "1") return "";
      const x = L.get("batchMetadataField") || "field", h = L.get("batchMetadataApplied") || "0", Se = L.get("batchMetadataUnchanged") || "0", bt = L.get("batchMetadataSkipped") || "0";
      return a("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: h, field: x, unchanged: Se, skipped: bt });
    }), K = J(() => Object.entries(M).map(([L, x]) => ({ key: L, label: x, value: D[L] || "" })).filter((L) => String(L.value).trim() !== "")), H = J(() => Object.entries(D).filter(([L, x]) => !["q", "sort", "starred"].includes(L) && String(x || "").trim() !== "").map(([L, x]) => ({ key: L, value: x }))), q = J(() => Object.entries(D).filter(([L, x]) => String(x || "").trim() !== "").map(([L, x]) => ({ key: L, value: x }))), X = /* @__PURE__ */ fr({}), Z = /* @__PURE__ */ vl(null);
    let k = null;
    function N(L) {
      const x = new URLSearchParams(new FormData(L));
      for (const h of Array.from(x.keys()))
        String(x.get(h) || "").trim() === "" && x.delete(h);
      return x.delete("page"), x;
    }
    function $(L) {
      s.splice(0, s.length, ...(L.items || []).map((x) => ({ ...x })));
      for (const x of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl"])
        Object.prototype.hasOwnProperty.call(L, x) && (i[x] = L[x]);
      Object.assign(D, L.activeFilters || {});
    }
    async function Q(L = !1) {
      if (!(me.loading || me.refreshing)) {
        L ? me.refreshing = !0 : me.loading = !0, me.error = "";
        try {
          const x = await fetch(`${Ve.value}${L ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!x.ok)
            throw new Error(`Import health request failed: ${x.status}`);
          me.summary = await x.json(), me.loaded = !0;
        } catch (x) {
          me.error = x?.message || String(x);
        } finally {
          me.loading = !1, me.refreshing = !1;
        }
      }
    }
    async function ie(L) {
      L && L.currentTarget && L.currentTarget.open !== !0 || me.loaded || me.loading || await Q(!1);
    }
    async function be() {
      await Q(!0);
    }
    async function ce(L) {
      const x = L?.currentTarget?.tagName === "FORM" ? L.currentTarget : L?.currentTarget?.form;
      if (!x) return;
      const Se = N(x).toString(), bt = Se ? `?${Se}` : "", Ft = await fetch(Ee.value + bt, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!Ft.ok) {
        x.submit();
        return;
      }
      $(await Ft.json()), history.replaceState({}, "", Se ? `?${Se}` : window.location.pathname);
    }
    function Ne(L) {
      ce(L);
    }
    function Re(L) {
      window.clearTimeout(k), k = window.setTimeout(() => Ne(L), 350);
    }
    function Oe(L) {
      const x = new URLSearchParams();
      for (const [Se, bt] of Object.entries(D)) {
        const Ft = String(bt || "").trim();
        Ft !== "" && Se !== L && !(Se === "sort" && Ft === "title") && x.set(Se, Ft);
      }
      const h = x.toString();
      return h ? `?${h}` : "?";
    }
    function ft() {
      return Oe("q");
    }
    const Mt = J(() => [
      { label: "Recently opened", description: "Continue from the publications you opened through Library.", query: "sort=lastOpened", filters: { sort: "lastOpened" } },
      { label: "Starred", description: "Your marked publications and reference items.", query: "starred=1", filters: { starred: "1" } },
      { label: "To read", description: "Publications queued for later.", query: "workflowStatus=to-read", filters: { workflowStatus: "to-read" } },
      { label: "Reading", description: "Publications currently in progress.", query: "workflowStatus=reading", filters: { workflowStatus: "reading" } },
      { label: "Finished", description: "Completed publications.", query: "workflowStatus=finished", filters: { workflowStatus: "finished" } },
      { label: "Needs action", description: "Items that need a cleanup or follow-up decision.", query: "workflowStatus=needs-action", filters: { workflowStatus: "needs-action" } },
      { label: "Scanner conflicts", description: "Rows where current metadata differs from scanner candidates.", query: "scannerConflicts=1", filters: { scannerConflicts: "1" } },
      { label: "Metadata errors", description: "Files whose metadata extraction needs review.", query: "status=metadata_error", filters: { status: "metadata_error" } }
    ]);
    function Kt(L) {
      const x = new URLSearchParams(window.location.search);
      for (const Se of Object.keys(M))
        x.delete(Se);
      x.delete("page");
      for (const [Se, bt] of Object.entries(L))
        String(bt || "").trim() !== "" && x.set(Se, String(bt));
      const h = x.toString();
      return h ? `?${h}` : "?";
    }
    function Tt(L) {
      return String(L || "").toUpperCase();
    }
    function xt(L) {
      return L.nextcloudTags || [];
    }
    function Ct(L) {
      return y.value.find((h) => h.publication === L)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(L)}`;
    }
    function sr(L) {
      return i.publicationYearLandingUrls?.[L] || `/apps/library/years/${encodeURIComponent(L)}`;
    }
    function or(L) {
      return i.creatorLandingUrls?.[L] || `/apps/library/creators/${encodeURIComponent(L)}`;
    }
    function ar(L, x) {
      X[L] = !!x?.currentTarget?.open;
    }
    function wt(L) {
      const x = String(L?.tagName || "").toLowerCase();
      return L?.isContentEditable || ["input", "select", "textarea", "button"].includes(x);
    }
    function Ar(L) {
      L.key !== "/" || L.metaKey || L.ctrlKey || L.altKey || L.shiftKey || wt(L.target) || (L.preventDefault(), Z.value?.focus(), Z.value?.select?.());
    }
    function Ut(L) {
      L.key !== "Escape" || document.activeElement !== Z.value || D.q === "" || (L.preventDefault(), D.q = "", Z.value.value = "", window.clearTimeout(k), Ne({ currentTarget: Z.value }));
    }
    function Dt(L) {
      Ar(L), Ut(L);
    }
    Go(() => {
      window.addEventListener("keydown", Dt);
    }), Yo(() => {
      window.removeEventListener("keydown", Dt);
    });
    async function Xe(L, x) {
      const h = x?.currentTarget?.closest?.("form") || x?.currentTarget;
      if (!h || !L?.starUrl) return;
      const Se = !!L.starred;
      L.starred = !Se;
      try {
        (await fetch(L.starUrl, {
          method: "POST",
          body: new FormData(h),
          credentials: "same-origin"
        })).ok || (L.starred = Se);
      } catch {
        L.starred = Se;
      }
    }
    return (L, x) => (C(), A("div", Zu, [
      l("section", Qu, [
        l("div", ef, [
          l("div", null, [
            ut.value ? (C(), A("p", tf, f(_.value), 1)) : fe("", !0),
            l("h2", rf, f(b.value), 1),
            l("p", nf, f(ut.value ? m(a)("library", "Browse this focused view; use filters only when you need to narrow it further.") : m(a)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          l("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": m(a)("library", "Library actions")
          }, [
            l("details", {
              class: "library-catalogue-actions-menu",
              onToggle: ie
            }, [
              l("summary", null, f(m(a)("library", "Actions")), 1),
              l("div", of, [
                l("a", {
                  href: V.value,
                  class: "button secondary",
                  "aria-label": "Open Library settings"
                }, f(m(a)("library", "Settings")), 9, af),
                Le.value ? (C(), A("a", {
                  key: 0,
                  href: Le.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, f(m(a)("library", "Export corrected metadata")), 9, lf)) : fe("", !0),
                ke.value ? (C(), A("a", {
                  key: 1,
                  href: ke.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar manifest"
                }, f(m(a)("library", "Sidecar manifest")), 9, cf)) : fe("", !0),
                je.value ? (C(), A("a", {
                  key: 2,
                  href: je.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar ZIP"
                }, f(m(a)("library", "Sidecar ZIP")), 9, uf)) : fe("", !0),
                l("div", ff, [
                  l("p", df, f(m(a)("library", "Import health")), 1),
                  l("h3", pf, f(m(a)("library", "Metadata overview")), 1),
                  l("p", hf, f(m(a)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")), 1),
                  me.loading ? (C(), A("p", mf, f(m(a)("library", "Loading cached metadata overview…")), 1)) : me.error ? (C(), A("p", bf, f(me.error), 1)) : me.loaded ? fe("", !0) : (C(), A("p", yf, f(m(a)("library", "Open Actions to load the cached metadata and cover overview.")), 1)),
                  me.loaded ? (C(), A(se, { key: 3 }, [
                    xe.value.message ? (C(), A("p", gf, f(xe.value.message), 1)) : xe.value.cacheStatus === "missing" ? (C(), A("p", _f, f(m(a)("library", "No cached metadata overview exists yet")), 1)) : fe("", !0),
                    Be.value ? (C(), A("p", vf, f(m(a)("library", "Last generated")) + ": " + f(Be.value), 1)) : fe("", !0),
                    l("button", {
                      type: "button",
                      class: "button secondary library-import-health-refresh",
                      disabled: me.refreshing,
                      onClick: be
                    }, f(me.refreshing ? m(a)("library", "Refreshing metadata overview…") : m(a)("library", "Refresh metadata overview")), 9, Ef),
                    l("div", Sf, [
                      l("a", {
                        class: "button secondary",
                        href: Ye.value.reviewUrl || "?status=metadata_error"
                      }, f(m(a)("library", "Review metadata errors")), 9, Tf),
                      l("a", {
                        class: "button secondary",
                        href: Me.value
                      }, f(m(a)("library", "Full review")), 9, xf),
                      l("a", {
                        class: "button secondary",
                        href: he.value
                      }, f(m(a)("library", "Export TSV")), 9, Cf),
                      l("a", {
                        class: "button secondary",
                        href: ue.value
                      }, f(m(a)("library", "Probe covers")), 9, wf)
                    ]),
                    l("div", Af, [
                      l("article", null, [
                        l("h4", null, f(m(a)("library", "Metadata errors")), 1),
                        l("p", Rf, f(Ye.value.total || 0), 1),
                        l("ul", null, [
                          (C(!0), A(se, null, ge(Ye.value.byExtension, (h) => (C(), A("li", {
                            key: h.extension
                          }, f(Tt(h.extension)) + " · " + f(h.count), 1))), 128))
                        ])
                      ]),
                      l("article", null, [
                        l("h4", null, f(m(a)("library", "Archive/container check")), 1),
                        l("p", Of, f(de.value.mismatches || 0), 1),
                        l("ul", null, [
                          (C(!0), A(se, null, ge(de.value.byExtensionAndContainer, (h) => (C(), A("li", {
                            key: `${h.extension}-${h.actualContainerType}`
                          }, f(Tt(h.extension)) + " · " + f(h.actualContainerType) + " · " + f(h.count), 1))), 128))
                        ])
                      ]),
                      l("article", null, [
                        l("h4", null, f(m(a)("library", "Cover health")), 1),
                        l("p", kf, f(Ot.value.note), 1),
                        l("ul", null, [
                          (C(!0), A(se, null, ge(Ot.value.byFormat, (h) => (C(), A("li", {
                            key: `${h.extension}-${h.nextcloudPreview}-${h.libraryCoverRoute}`
                          }, f(Tt(h.extension)) + " · nextcloudPreview: " + f(h.nextcloudPreview) + " · libraryCoverRoute: " + f(h.libraryCoverRoute) + " · " + f(h.count), 1))), 128))
                        ])
                      ]),
                      l("article", null, [
                        l("h4", null, f(m(a)("library", "Cover support matrix")), 1),
                        l("p", Nf, f(m(a)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1),
                        l("ul", null, [
                          (C(!0), A(se, null, ge(ze.value, (h) => (C(), A("li", {
                            key: `${h.extension}-${h.nextcloudPreview}-${h.libraryCoverRoute}-${h.count}`
                          }, f(Tt(h.extension)) + " · Nextcloud/plugin preview: " + f(h.nextcloudPreview) + " · Library extraction: " + f(h.libraryCoverRoute) + " · " + f(h.count), 1))), 128))
                        ]),
                        l("p", Pf, f(m(a)("library", "Extractor tools")) + ": ZIP=" + f(ct.value.phpZipArchive ? "ZipArchive" : "missing") + " · 7z=" + f(ct.value.sevenZipCommand || "missing") + " · RAR=" + f(ct.value.rarCommand || "missing") + " · bsdtar=" + f(ct.value.bsdtarCommand || "missing"), 1)
                      ])
                    ]),
                    Ye.value.examples?.length ? (C(), A("details", Lf, [
                      l("summary", null, f(m(a)("library", "Example files and suggested actions")), 1),
                      l("ul", null, [
                        (C(!0), A(se, null, ge(Ye.value.examples, (h) => (C(), A("li", {
                          key: `${h.fileId}-${h.path}`
                        }, [
                          l("code", null, f(h.path), 1),
                          l("span", null, f(h.scanStatus) + " · " + f(h.scanError) + " · " + f(h.actualContainerType), 1),
                          l("strong", null, f(h.suggestedRepairAction), 1)
                        ]))), 128))
                      ])
                    ])) : fe("", !0)
                  ], 64)) : fe("", !0),
                  l("div", If, [
                    l("article", null, [
                      l("h4", null, f(m(a)("library", "Metadata-error queue")), 1),
                      l("p", Mf, f(m(a)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")), 1),
                      l("a", {
                        class: "button secondary",
                        href: Ye.value.reviewUrl || "?status=metadata_error"
                      }, f(m(a)("library", "Open metadata-error rows")), 9, Uf),
                      l("a", {
                        class: "button secondary",
                        href: he.value
                      }, f(m(a)("library", "Export metadata-error rows")), 9, Df),
                      l("form", {
                        method: "post",
                        action: Ie.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: le.value
                        }, null, 8, Hf),
                        x[18] || (x[18] = l("input", {
                          type: "hidden",
                          name: "status",
                          value: "metadata_error"
                        }, null, -1)),
                        x[19] || (x[19] = l("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-metadata-error"
                        }, null, -1)),
                        l("button", $f, f(m(a)("library", "Tag metadata-error rows")), 1)
                      ], 8, Ff)
                    ]),
                    l("article", null, [
                      l("h4", null, f(m(a)("library", "Scanner-conflict queue")), 1),
                      l("p", jf, f(m(a)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")), 1),
                      l("a", {
                        class: "button secondary",
                        href: Fe.value
                      }, f(m(a)("library", "Open scanner-conflict rows")), 9, Vf),
                      l("form", {
                        method: "post",
                        action: Ie.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: le.value
                        }, null, 8, zf),
                        x[20] || (x[20] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        x[21] || (x[21] = l("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-scanner-conflict"
                        }, null, -1)),
                        l("button", qf, f(m(a)("library", "Tag scanner-conflict rows")), 1)
                      ], 8, Bf)
                    ])
                  ])
                ])
              ])
            ], 32)
          ], 8, sf)
        ]),
        T.value ? (C(), A("p", Wf, f(T.value), 1)) : fe("", !0),
        l("section", Kf, [
          l("div", Gf, [
            l("p", Yf, f(m(a)("library", "Useful views")), 1),
            l("h3", Xf, f(m(a)("library", "Useful views")), 1),
            l("p", Jf, f(m(a)("library", "One-click smart views reuse normal catalogue filters, so active chips still explain what you are seeing.")), 1),
            l("p", Zf, f(m(a)("library", "Empty useful views mean no current catalogue items match that saved direction yet; add metadata, star items, update workflow status, or run a scan to create matches.")), 1)
          ]),
          l("nav", {
            class: "library-useful-view-links",
            "aria-label": m(a)("library", "Built-in useful catalogue views")
          }, [
            (C(!0), A(se, null, ge(Mt.value, (h) => (C(), A("a", {
              key: h.label,
              class: "library-useful-view-chip",
              href: Kt(h.filters),
              title: h.description
            }, [
              l("strong", null, f(m(a)("library", h.label)), 1),
              l("span", null, f(m(a)("library", h.description)), 1)
            ], 8, ed))), 128))
          ], 8, Qf)
        ]),
        l("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": m(a)("library", "Quick catalogue filters"),
          onSubmit: wn(ce, ["prevent"])
        }, [
          (C(!0), A(se, null, ge(H.value, (h) => (C(), A("input", {
            key: h.key,
            type: "hidden",
            name: h.key,
            value: h.value
          }, null, 8, rd))), 128)),
          l("div", nd, [
            l("label", id, [
              l("span", null, [
                ye(f(m(a)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                x[22] || (x[22] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
              ]),
              qe(l("input", {
                ref_key: "quickSearchInput",
                ref: Z,
                "onUpdate:modelValue": x[0] || (x[0] = (h) => D.q = h),
                "data-library-quick-search": "",
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope",
                onInput: Re
              }, null, 544), [
                [yi, D.q]
              ])
            ]),
            l("button", {
              type: "submit",
              class: "button primary",
              "aria-label": m(a)("library", "Search catalogue")
            }, f(m(a)("library", "Search")), 9, sd)
          ]),
          l("details", od, [
            l("summary", null, f(m(a)("library", "Filter & sort")), 1),
            l("div", ad, [
              l("label", null, [
                ye(f(m(a)("library", "Sort")) + " ", 1),
                qe(l("select", {
                  "onUpdate:modelValue": x[1] || (x[1] = (h) => D.sort = h),
                  name: "sort",
                  onChange: ce
                }, [
                  l("option", ld, f(m(a)("library", "Title")), 1),
                  l("option", cd, f(m(a)("library", "Recently added")), 1),
                  l("option", ud, f(m(a)("library", "Publication date")), 1),
                  l("option", fd, f(m(a)("library", "Series")), 1),
                  l("option", dd, f(m(a)("library", "Recently opened")), 1),
                  l("option", pd, f(m(a)("library", "Format")), 1)
                ], 544), [
                  [it, D.sort]
                ])
              ]),
              l("label", null, [
                ye(f(m(a)("library", "Starred")) + " ", 1),
                qe(l("select", {
                  "onUpdate:modelValue": x[2] || (x[2] = (h) => D.starred = h),
                  name: "starred",
                  onChange: ce
                }, [
                  l("option", hd, f(m(a)("library", "All")), 1),
                  l("option", md, f(m(a)("library", "Starred")), 1)
                ], 544), [
                  [it, D.starred]
                ])
              ]),
              l("label", null, [
                ye(f(m(a)("library", "Size")) + " ", 1),
                l("select", {
                  value: z.value.limit,
                  name: "limit",
                  onChange: ce
                }, [
                  (C(), A(se, null, ge(n, (h) => l("option", {
                    key: h,
                    value: h
                  }, f(h), 9, yd)), 64))
                ], 40, bd)
              ]),
              l("button", {
                type: "submit",
                class: "button secondary",
                "aria-label": m(a)("library", "Apply catalogue filters")
              }, f(m(a)("library", "Apply filters")), 9, gd),
              l("a", {
                href: "?",
                class: "button secondary",
                "aria-label": m(a)("library", "Clear catalogue filters")
              }, f(m(a)("library", "Clear all")), 9, _d)
            ])
          ])
        ], 40, td),
        l("details", vd, [
          l("summary", Ed, f(m(a)("library", "Show catalogue filters")), 1),
          l("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": m(a)("library", "Catalogue search and filters"),
            onSubmit: wn(ce, ["prevent"])
          }, [
            l("label", null, [
              ye(f(m(a)("library", "Search title, creator, description, filename or folder")) + " ", 1),
              qe(l("input", {
                "onUpdate:modelValue": x[3] || (x[3] = (h) => D.q = h),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope"
              }, null, 512), [
                [yi, D.q]
              ])
            ]),
            l("p", Td, f(m(a)("library", "Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")), 1),
            l("label", null, [
              ye(f(m(a)("library", "Type")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[4] || (x[4] = (h) => D.type = h),
                name: "type"
              }, [
                l("option", xd, f(m(a)("library", "All types")), 1),
                (C(), A(se, null, ge(r, (h) => l("option", {
                  key: h,
                  value: h
                }, f(h), 9, Cd)), 64))
              ], 512), [
                [it, D.type]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Series / periodical")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[5] || (x[5] = (h) => D.publication = h),
                name: "publication"
              }, [
                l("option", wd, f(m(a)("library", "All series and periodicals")), 1),
                (C(!0), A(se, null, ge(v.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(h), 9, Ad))), 128))
              ], 512), [
                [it, D.publication]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Publication year")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[6] || (x[6] = (h) => D.year = h),
                name: "year"
              }, [
                l("option", Rd, f(m(a)("library", "All years")), 1),
                (C(!0), A(se, null, ge(P.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(h), 9, Od))), 128))
              ], 512), [
                [it, D.year]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Creator")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[7] || (x[7] = (h) => D.creator = h),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                l("option", kd, f(m(a)("library", "All creators")), 1),
                (C(!0), A(se, null, ge(j.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(h), 9, Nd))), 128))
              ], 512), [
                [it, D.creator]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Nextcloud tag")) + " ", 1),
              qe(l("input", {
                "onUpdate:modelValue": x[8] || (x[8] = (h) => D.tag = h),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [yi, D.tag]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Format")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[9] || (x[9] = (h) => D.format = h),
                name: "format"
              }, [
                l("option", Pd, f(m(a)("library", "All formats")), 1),
                (C(!0), A(se, null, ge(d.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(Tt(h)), 9, Ld))), 128))
              ], 512), [
                [it, D.format]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Shelf")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[10] || (x[10] = (h) => D.shelf = h),
                name: "shelf"
              }, [
                l("option", Id, f(m(a)("library", "All shelves")), 1),
                (C(!0), A(se, null, ge(c.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(h), 9, Md))), 128))
              ], 512), [
                [it, D.shelf]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Scan status")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[11] || (x[11] = (h) => D.status = h),
                name: "status"
              }, [
                l("option", Ud, f(m(a)("library", "All scan statuses")), 1),
                (C(!0), A(se, null, ge(re.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(h), 9, Dd))), 128))
              ], 512), [
                [it, D.status]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Workflow status")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[12] || (x[12] = (h) => D.workflowStatus = h),
                name: "workflowStatus"
              }, [
                l("option", Fd, f(m(a)("library", "All workflow statuses")), 1),
                (C(!0), A(se, null, ge(W.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(h), 9, Hd))), 128))
              ], 512), [
                [it, D.workflowStatus]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Genre")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[13] || (x[13] = (h) => D.genre = h),
                name: "genre"
              }, [
                l("option", $d, f(m(a)("library", "All genres")), 1),
                (C(!0), A(se, null, ge(oe.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(h), 9, jd))), 128))
              ], 512), [
                [it, D.genre]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Classification")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[14] || (x[14] = (h) => D.classification = h),
                name: "classification"
              }, [
                l("option", Vd, f(m(a)("library", "All classifications")), 1),
                (C(!0), A(se, null, ge(ne.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(h), 9, Bd))), 128))
              ], 512), [
                [it, D.classification]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Scanner conflicts")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[15] || (x[15] = (h) => D.scannerConflicts = h),
                name: "scannerConflicts"
              }, [
                l("option", zd, f(m(a)("library", "All metadata")), 1),
                l("option", qd, f(m(a)("library", "Needs review")), 1)
              ], 512), [
                [it, D.scannerConflicts]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Starred")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[16] || (x[16] = (h) => D.starred = h),
                name: "starred"
              }, [
                l("option", Wd, f(m(a)("library", "All publications")), 1),
                l("option", Kd, f(m(a)("library", "Starred only")), 1)
              ], 512), [
                [it, D.starred]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Sort")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[17] || (x[17] = (h) => D.sort = h),
                name: "sort"
              }, [
                l("option", Gd, f(m(a)("library", "Title")), 1),
                l("option", Yd, f(m(a)("library", "Recently added")), 1),
                l("option", Xd, f(m(a)("library", "Publication date")), 1),
                l("option", Jd, f(m(a)("library", "Series / periodical")), 1),
                l("option", Zd, f(m(a)("library", "Recently opened")), 1),
                l("option", Qd, f(m(a)("library", "Format")), 1)
              ], 512), [
                [it, D.sort]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Page size")) + " ", 1),
              l("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (C(), A(se, null, ge(n, (h) => l("option", {
                  key: h,
                  value: h
                }, f(h), 9, tp)), 64))
              ], 8, ep)
            ]),
            l("button", {
              type: "submit",
              class: "button primary",
              "aria-label": m(a)("library", "Apply catalogue filters")
            }, f(m(a)("library", "Apply filters")), 9, rp),
            l("a", {
              href: "?",
              class: "button secondary",
              "aria-label": m(a)("library", "Clear catalogue filters")
            }, f(m(a)("library", "Clear")), 9, np),
            l("a", {
              href: Fe.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, f(m(a)("library", "Review scanner conflicts")), 9, ip)
          ], 40, Sd)
        ]),
        ut.value ? (C(), A("section", sp, [
          l("p", op, f(_.value), 1),
          l("h3", ap, f(p.value), 1),
          l("p", lp, f(rt.value ? m(a)("library", "Items by this creator, sorted by publication context when available.") : St.value ? m(a)("library", "Items from this publication year, sorted by publication date when available.") : m(a)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          l("div", cp, [
            l("span", null, f(z.value.total) + " " + f(m(a)("library", "items")), 1),
            E.value?.earliestYear && E.value?.latestYear ? (C(), A("span", up, f(E.value.earliestYear) + "–" + f(E.value.latestYear), 1)) : fe("", !0),
            E.value?.datedCount ? (C(), A("span", fp, f(E.value.datedCount) + " " + f(m(a)("library", "dated")), 1)) : fe("", !0),
            E.value?.undatedCount > 0 ? (C(), A("span", dp, f(E.value.undatedCount) + " " + f(m(a)("library", "undated")), 1)) : fe("", !0)
          ]),
          Et.value && E.value ? (C(), A("aside", pp, [
            l("strong", null, f(m(a)("library", "Publication contents")), 1),
            l("span", null, f(E.value.itemCount) + " " + f(m(a)("library", "items")), 1),
            E.value.earliestYear && E.value.latestYear ? (C(), A("span", hp, f(E.value.earliestYear) + "–" + f(E.value.latestYear), 1)) : fe("", !0),
            l("span", null, f(E.value.datedCount) + " " + f(m(a)("library", "with issue/date coverage")), 1),
            E.value.undatedCount > 0 ? (C(), A("span", mp, f(E.value.undatedCount) + " " + f(m(a)("library", "without dates yet")), 1)) : fe("", !0)
          ])) : fe("", !0),
          l("p", null, [
            l("a", bp, f(m(a)("library", "Back to full catalogue")), 1)
          ])
        ])) : fe("", !0),
        l("div", yp, [
          l("p", gp, [
            ye(f(m(a)("library", "Showing")) + " " + f(z.value.from) + "–" + f(z.value.to) + " " + f(m(a)("library", "of")) + " " + f(z.value.total) + " " + f(m(a)("library", "catalogue items")), 1),
            K.value.length > 0 ? (C(), A("span", _p, [
              x[23] || (x[23] = ye(" · ", -1)),
              l("a", vp, f(m(a)("library", "Clear all filters")), 1)
            ])) : fe("", !0)
          ]),
          l("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": m(a)("library", "Catalogue pagination")
          }, [
            l("span", Sp, [
              ye(f(m(a)("library", "Page")) + " " + f(z.value.page), 1),
              z.value.total > 0 ? (C(), A("span", Tp, " · " + f(z.value.from) + "–" + f(z.value.to), 1)) : fe("", !0)
            ]),
            z.value.previousUrl ? (C(), A("a", {
              key: 0,
              href: z.value.previousUrl
            }, f(m(a)("library", "Previous")), 9, xp)) : (C(), A("span", Cp, f(m(a)("library", "Previous")), 1)),
            z.value.nextUrl ? (C(), A("a", {
              key: 2,
              href: z.value.nextUrl
            }, f(m(a)("library", "Next")), 9, wp)) : (C(), A("span", Ap, f(m(a)("library", "Next")), 1))
          ], 8, Ep)
        ]),
        l("div", Rp, [
          l("details", {
            class: "library-batch-actions",
            "aria-label": m(a)("library", "Batch actions for current results")
          }, [
            l("summary", null, [
              ye(f(m(a)("library", "Batch")) + " ", 1),
              l("span", kp, f(z.value.total) + " " + f(m(a)("library", "Current filter result")), 1)
            ]),
            l("form", {
              method: "post",
              action: Ie.value,
              class: "library-batch-tag-form"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, Pp),
              (C(!0), A(se, null, ge(q.value, (h) => (C(), A("input", {
                key: h.key,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, Lp))), 128)),
              l("label", null, [
                l("span", null, f(m(a)("library", "Nextcloud tag")), 1),
                l("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: m(a)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, Ip)
              ]),
              l("button", Mp, f(m(a)("library", "Apply Nextcloud tag to current results")), 1),
              l("p", Up, f(m(a)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, Np),
            l("form", {
              method: "post",
              action: tt.value,
              class: "library-batch-tag-remove-form"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, Fp),
              (C(!0), A(se, null, ge(q.value, (h) => (C(), A("input", {
                key: `remove-tag-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, Hp))), 128)),
              l("label", null, [
                l("span", null, f(m(a)("library", "Nextcloud tag")), 1),
                l("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: m(a)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, $p)
              ]),
              l("button", jp, f(m(a)("library", "Remove tag from current results")), 1),
              l("p", Vp, f(m(a)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, Dp),
            l("form", {
              method: "post",
              action: lt.value,
              class: "library-batch-metadata-reset-form"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, zp),
              (C(!0), A(se, null, ge(q.value, (h) => (C(), A("input", {
                key: `reset-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, qp))), 128)),
              x[24] || (x[24] = l("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              l("button", Wp, f(m(a)("library", "Reset filtered metadata")), 1),
              l("p", Kp, f(m(a)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, Bp),
            l("form", {
              method: "post",
              action: Ke.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, Yp),
              (C(!0), A(se, null, ge(q.value, (h) => (C(), A("input", {
                key: `edit-preview-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, Xp))), 128)),
              l("label", null, [
                l("span", null, f(m(a)("library", "Metadata field")), 1),
                l("select", Jp, [
                  l("option", Zp, f(m(a)("library", "Publication type")), 1),
                  l("option", Qp, f(m(a)("library", "Subtitle")), 1),
                  l("option", eh, f(m(a)("library", "Creators")), 1),
                  l("option", th, f(m(a)("library", "Series / periodical")), 1),
                  l("option", rh, f(m(a)("library", "Publication date")), 1),
                  l("option", nh, f(m(a)("library", "Language")), 1),
                  l("option", ih, f(m(a)("library", "Publisher")), 1),
                  l("option", sh, f(m(a)("library", "Genres")), 1),
                  l("option", oh, f(m(a)("library", "Classifications")), 1)
                ])
              ]),
              l("label", null, [
                l("span", null, f(m(a)("library", "Preview value")), 1),
                x[25] || (x[25] = l("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              l("button", ah, f(m(a)("library", "Preview & apply metadata edit")), 1),
              l("p", lh, f(m(a)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, Gp),
            l("form", {
              method: "post",
              action: vt.value,
              class: "library-batch-cover-refresh-form"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, uh),
              (C(!0), A(se, null, ge(q.value, (h) => (C(), A("input", {
                key: `cover-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, fh))), 128)),
              l("button", dh, f(m(a)("library", "Request fresh cover previews")), 1),
              l("p", ph, f(m(a)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, ch)
          ], 8, Op),
          l("details", hh, [
            l("summary", null, f(m(a)("library", "Browse")), 1),
            l("div", mh, [
              y.value.length > 0 ? (C(), A("section", bh, [
                l("h3", yh, f(m(a)("library", "Top series and periodicals")), 1),
                l("p", gh, f(m(a)("library", "Jump into recurring publications with one click.")), 1),
                l("ul", null, [
                  (C(!0), A(se, null, ge(y.value, (h) => (C(), A("li", {
                    key: h.publication
                  }, [
                    l("a", {
                      href: Ct(h.publication)
                    }, f(h.publication), 9, _h),
                    l("span", vh, f(h.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : y.value.length === 0 ? (C(), A("section", Eh, [
                l("h3", Sh, f(m(a)("library", "No series or periodicals found yet")), 1),
                l("p", Th, f(m(a)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : fe("", !0),
              P.value.length > 0 ? (C(), A("section", xh, [
                l("h3", Ch, f(m(a)("library", "Top publication years")), 1),
                l("ul", null, [
                  (C(!0), A(se, null, ge(P.value, (h) => (C(), A("li", { key: h }, [
                    l("a", {
                      href: sr(h)
                    }, f(h), 9, wh)
                  ]))), 128))
                ])
              ])) : fe("", !0),
              j.value.length > 0 ? (C(), A("section", Ah, [
                l("h3", Rh, f(m(a)("library", "Top creators")), 1),
                l("ul", null, [
                  (C(!0), A(se, null, ge(j.value, (h) => (C(), A("li", { key: h }, [
                    l("a", {
                      href: or(h)
                    }, f(h), 9, Oh)
                  ]))), 128))
                ])
              ])) : fe("", !0)
            ])
          ])
        ]),
        K.value.length > 0 ? (C(), A("nav", {
          key: 2,
          class: "library-active-filter-chips",
          "aria-label": m(a)("library", "Active filters")
        }, [
          l("span", null, f(m(a)("library", "Active filters")), 1),
          (C(!0), A(se, null, ge(K.value, (h) => (C(), A("a", {
            key: h.key,
            href: Oe(h.key),
            class: "library-filter-chip",
            "aria-label": `${m(a)("library", "Remove filter")}: ${h.label}`
          }, [
            l("strong", null, f(h.label) + ":", 1),
            ye(" " + f(h.value) + " ", 1),
            x[26] || (x[26] = l("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Nh))), 128))
        ], 8, kh)) : fe("", !0),
        o.value.length === 0 ? (C(), A("div", {
          key: 3,
          class: Ur(["library-empty-content", { "library-first-run-guidance": w.value || I.value, "library-filter-empty-state": U.value && !w.value && !I.value }]),
          role: "status"
        }, [
          w.value ? (C(), A(se, { key: 0 }, [
            l("h3", null, f(m(a)("library", "Start with one Library root")), 1),
            l("p", Ph, f(m(a)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            l("p", Lh, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, f(m(a)("library", "Add a Library root")), 9, Ih),
              l("span", Mh, f(m(a)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : I.value ? (C(), A(se, { key: 1 }, [
            l("h3", null, f(m(a)("library", "No enabled Library roots")), 1),
            l("p", Uh, f(m(a)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            l("p", Dh, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, f(m(a)("library", "Open Library settings")), 9, Fh)
            ])
          ], 64)) : U.value ? (C(), A(se, { key: 2 }, [
            l("h3", null, f(m(a)("library", "No matches for the current filters")), 1),
            l("p", Hh, f(m(a)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            l("p", $h, [
              l("a", {
                href: ft(),
                class: "button secondary"
              }, f(m(a)("library", "Clear search")), 9, jh),
              l("a", Vh, f(m(a)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (C(), A(se, { key: 3 }, [
            l("h3", null, f(m(a)("library", "No catalogue items yet")), 1),
            l("p", Bh, f(m(a)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            l("p", zh, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, f(m(a)("library", "Run a scan from settings")), 9, qh)
            ])
          ], 64))
        ], 2)) : (C(), A("div", Wh, [
          (C(!0), A(se, null, ge(o.value, (h) => (C(), A("article", {
            key: h.id,
            class: Ur(["library-cover-card", { "library-cover-card--open": X[h.id] }])
          }, [
            l("a", {
              class: "library-cover-link",
              href: h.openUrl,
              "aria-label": `Read ${h.title}`
            }, [
              l("img", {
                class: "library-cover-image",
                src: h.coverUrl,
                alt: `Cover for ${h.title}`,
                loading: "lazy"
              }, null, 8, Gh)
            ], 8, Kh),
            l("form", {
              method: "post",
              action: h.starUrl,
              class: "library-cover-star-form",
              onSubmit: wn((Se) => Xe(h, Se), ["prevent"])
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, Xh),
              x[27] || (x[27] = l("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              l("input", {
                type: "hidden",
                name: "starred",
                value: h.starred ? "0" : "1"
              }, null, 8, Jh),
              l("button", {
                type: "submit",
                class: Ur(["library-cover-star-button", { "library-cover-star-button--starred": h.starred }]),
                "aria-pressed": h.starred ? "true" : "false",
                title: h.starred ? m(a)("library", "Unstar this publication") : m(a)("library", "Star this publication"),
                "aria-label": h.starred ? m(a)("library", "Unstar this publication") : m(a)("library", "Star this publication"),
                onClick: wn((Se) => Xe(h, Se), ["prevent"])
              }, f(h.starred ? "★" : "☆"), 11, Zh)
            ], 40, Yh),
            l("div", Qh, [
              l("div", em, [
                l("h3", null, [
                  h.starred ? (C(), A("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": m(a)("library", "Starred")
                  }, "★", 8, tm)) : fe("", !0),
                  ye(f(h.title), 1)
                ]),
                l("a", {
                  class: "library-cover-read",
                  href: h.openUrl
                }, f(m(a)("library", "Read")), 9, rm)
              ]),
              l("details", {
                class: "library-cover-details",
                onToggle: (Se) => ar(h.id, Se)
              }, [
                l("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${m(a)("library", "Show details and actions")}: ${h.title}`
                }, f(m(a)("library", "Details")), 9, im),
                l("div", sm, [
                  h.creators ? (C(), A("p", om, f(h.creators), 1)) : fe("", !0),
                  l("dl", am, [
                    l("div", lm, [
                      l("dt", null, f(m(a)("library", "Type")), 1),
                      l("dd", null, f(h.publicationType), 1)
                    ]),
                    h.publication ? (C(), A("div", cm, [
                      l("dt", null, f(m(a)("library", "Series")), 1),
                      l("dd", null, f(h.publication), 1)
                    ])) : fe("", !0),
                    h.publicationDate ? (C(), A("div", um, [
                      l("dt", null, f(m(a)("library", "Date")), 1),
                      l("dd", null, f(h.publicationDate), 1)
                    ])) : fe("", !0),
                    h.workflowStatus ? (C(), A("div", fm, [
                      l("dt", null, f(m(a)("library", "Status")), 1),
                      l("dd", null, f(h.workflowStatus), 1)
                    ])) : fe("", !0),
                    h.hasScannerConflict ? (C(), A("div", dm, [
                      l("dt", null, f(m(a)("library", "Review")), 1),
                      l("dd", null, f(h.scannerConflictCount) + " fields", 1)
                    ])) : fe("", !0),
                    h.lastOpenedAt ? (C(), A("div", pm, [
                      l("dt", null, f(m(a)("library", "Last opened")), 1),
                      l("dd", null, f(h.lastOpenedAt), 1)
                    ])) : fe("", !0),
                    h.extension ? (C(), A("div", hm, [
                      l("dt", null, f(m(a)("library", "Format")) + ":", 1),
                      l("dd", null, f(Tt(h.extension)), 1)
                    ])) : fe("", !0),
                    h.shelf ? (C(), A("div", mm, [
                      l("dt", null, f(m(a)("library", "Shelf")), 1),
                      l("dd", null, f(h.shelf), 1)
                    ])) : fe("", !0)
                  ]),
                  h.description ? (C(), A("p", bm, f(h.description), 1)) : fe("", !0),
                  h.scanStatus !== "indexed" || h.scanError ? (C(), A("p", ym, [
                    ye(" scanStatus: " + f(h.scanStatus || "unknown"), 1),
                    h.scanError ? (C(), A("span", gm, " · scanError: " + f(h.scanError), 1)) : fe("", !0)
                  ])) : fe("", !0),
                  l("div", _m, [
                    xt(h).length === 0 ? (C(), A("span", vm, "No Nextcloud tags")) : (C(!0), A(se, { key: 1 }, ge(xt(h), (Se) => (C(), A("span", {
                      key: Se.id,
                      class: "library-tag"
                    }, f(Se.name), 1))), 128))
                  ]),
                  l("p", Em, [
                    l("a", {
                      href: h.filesUrl
                    }, f(m(a)("library", "Show in Files")), 9, Sm),
                    x[28] || (x[28] = ye(" · ", -1)),
                    l("a", {
                      href: h.downloadUrl
                    }, f(m(a)("library", "Download source")), 9, Tm),
                    x[29] || (x[29] = ye(" · ", -1)),
                    l("a", {
                      href: h.detailsUrl
                    }, f(m(a)("library", "Details")), 9, xm)
                  ])
                ])
              ], 40, nm)
            ])
          ], 2))), 128))
        ])),
        o.value.length > 0 ? (C(), A("nav", {
          key: 5,
          class: "library-pagination library-pagination--bottom",
          "aria-label": m(a)("library", "Catalogue pagination")
        }, [
          l("span", wm, [
            ye(f(m(a)("library", "Page")) + " " + f(z.value.page), 1),
            z.value.total > 0 ? (C(), A("span", Am, " · " + f(z.value.from) + "–" + f(z.value.to), 1)) : fe("", !0)
          ]),
          z.value.previousUrl ? (C(), A("a", {
            key: 0,
            href: z.value.previousUrl
          }, f(m(a)("library", "Previous")), 9, Rm)) : (C(), A("span", Om, f(m(a)("library", "Previous")), 1)),
          z.value.nextUrl ? (C(), A("a", {
            key: 2,
            href: z.value.nextUrl
          }, f(m(a)("library", "Next")), 9, km)) : (C(), A("span", Nm, f(m(a)("library", "Next")), 1))
        ], 8, Cm)) : fe("", !0)
      ])
    ]));
  }
}, co = du("library", "catalogue", {}), Nn = document.querySelector("#library-vue-root"), uo = {
  ...co,
  requestToken: Nn?.dataset.requestToken || co.requestToken || ""
};
function G(e) {
  return String(e ?? "");
}
function Ca(e) {
  return G(e).toUpperCase();
}
function Lm(e, t, r, n = G) {
  for (const i of t) {
    const s = document.createElement("option");
    s.value = G(i), s.textContent = n(i), G(i) === G(r) && (s.selected = !0), e.appendChild(s);
  }
}
function fo(e, t, r, n, i = "") {
  const s = document.createElement("label");
  s.textContent = t;
  const o = document.createElement("input");
  o.type = r === "q" ? "search" : "text", o.name = r, o.value = G(n), o.placeholder = i, s.appendChild(o), e.appendChild(s);
}
function Nr(e, t, r, n, i, s, o = G) {
  const c = document.createElement("label");
  c.textContent = t;
  const d = document.createElement("select");
  d.name = r;
  const v = document.createElement("option");
  v.value = "", v.textContent = i, d.appendChild(v), Lm(d, s, n, o), c.appendChild(d), e.appendChild(c);
}
function Pr(e) {
  const t = G(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function Im(e, t = {}) {
  return G(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(G(e || t?.publication || ""))}`);
}
function Mm(e) {
  return G(e.discoveryPage) === "publication";
}
function Um(e, t = {}) {
  return G(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(G(e))}`);
}
function Ci(e) {
  return G(e.discoveryPage) === "year";
}
function Dm(e, t = {}) {
  return G(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(G(e))}`);
}
function wi(e) {
  return G(e.discoveryPage) === "creator";
}
function Fm(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && G(n).trim() !== "");
}
function Hm() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Yr(e, t, r, n) {
  const i = document.createElement("a");
  return i.href = t, i.className = r, i.textContent = n, e.appendChild(i), i;
}
function $m(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function jm(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", a("library", "Catalogue search and filters")), fo(n, a("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), Nr(n, a("library", "Type"), "type", r.type, a("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), fo(n, a("library", "Nextcloud tag"), "tag", r.tag, "photography"), Nr(n, a("library", "Format"), "format", r.format, a("library", "All formats"), e.formats || [], Ca), Nr(n, a("library", "Shelf"), "shelf", r.shelf, a("library", "All shelves"), e.shelves || []), Nr(n, a("library", "Scan status"), "status", r.status, a("library", "All scan statuses"), e.scanStatuses || []), Nr(n, a("library", "Sort"), "sort", r.sort || "title", a("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Nr(n, a("library", "Page size"), "limit", t.limit || 100, a("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", a("library", "Apply catalogue filters")), i.textContent = a("library", "Apply filters");
  const s = document.createElement("a");
  return s.href = "?", s.className = "button secondary", s.setAttribute("aria-label", a("library", "Clear catalogue filters")), s.textContent = a("library", "Clear"), n.append(i, s), n;
}
function Vm() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", i = e.get("batchMetadataSkipped") || "0", s = document.createElement("p");
  return s.className = "library-notice library-batch-metadata-apply-result", s.textContent = a("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${i} skipped.`), s;
}
function Bm(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", a("library", "Quick catalogue filters"));
  let i = null;
  const s = () => {
    window.clearTimeout(i), i = window.setTimeout(() => n.requestSubmit(), 350);
  };
  for (const [E, P] of Object.entries(r)) {
    if (["q", "sort", "starred"].includes(E) || G(P).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = E, j.value = G(P), n.appendChild(j);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = a("library", "Search");
  const c = document.createElement("input");
  c.type = "search", c.name = "q", c.value = G(r.q), c.placeholder = "Camera, Eco, Rolleiflex...", c.addEventListener("input", s), o.appendChild(c), n.appendChild(o);
  const d = [
    [a("library", "Sort"), "sort", r.sort || "title", [["title", a("library", "Title")], ["recent", a("library", "Recently added")], ["publicationDate", a("library", "Publication date")], ["publication", a("library", "Series")], ["lastOpened", a("library", "Recently opened")], ["format", a("library", "Format")]]],
    [a("library", "Starred"), "starred", r.starred || "", [["", a("library", "All")], ["1", a("library", "Starred")]]],
    [a("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [E, P, j, re] of d) {
    const W = document.createElement("label");
    W.textContent = E;
    const oe = document.createElement("select");
    oe.name = P;
    for (const [ne, z] of re) {
      const D = document.createElement("option");
      D.value = G(ne), D.textContent = G(z), G(ne) === G(j) && (D.selected = !0), oe.appendChild(D);
    }
    oe.addEventListener("change", () => n.requestSubmit()), W.appendChild(oe), n.appendChild(W);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", a("library", "Apply catalogue filters")), v.textContent = a("library", "Apply filters");
  const y = document.createElement("a");
  return y.href = "?", y.className = "button secondary", y.setAttribute("aria-label", a("library", "Clear catalogue filters")), y.textContent = a("library", "Clear all"), n.append(v, y), n;
}
function zm(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, i = G(e.settingsUrl || ""), s = G(e.metadataExportUrl || ""), o = G(e.batchTagUrl || "/apps/library/bulk/tags"), c = G(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), d = G(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = G(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), y = G(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), E = document.createElement("div");
  E.className = "library-vue-catalogue library-vue-fallback", E.dataset.vueFallback = "true";
  const P = document.createElement("section");
  P.className = "library-panel", P.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const re = document.createElement("div"), W = document.createElement("h2");
  W.id = "library-catalogue-heading", W.textContent = a("library", "Publication catalogue");
  const oe = document.createElement("p");
  oe.className = "library-muted", oe.textContent = a("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), re.append(W, oe);
  const ne = document.createElement("nav");
  if (ne.className = "library-catalogue-toolbar", ne.setAttribute("aria-label", a("library", "Library actions")), i) {
    const k = document.createElement("a");
    k.href = i, k.className = "button secondary", k.setAttribute("aria-label", "Open Library settings"), k.textContent = a("library", "Settings"), ne.appendChild(k);
  }
  if (s) {
    const k = document.createElement("a");
    k.href = s, k.className = "button secondary", k.setAttribute("aria-label", "Export corrected metadata"), k.textContent = a("library", "Export corrected metadata"), ne.appendChild(k);
  }
  if (e.metadataSidecarManifestUrl) {
    const k = document.createElement("a");
    k.href = e.metadataSidecarManifestUrl, k.className = "button secondary", k.setAttribute("aria-label", "Export sidecar manifest"), k.textContent = a("library", "Sidecar manifest"), ne.appendChild(k);
  }
  if (e.metadataSidecarBundleUrl) {
    const k = document.createElement("a");
    k.href = e.metadataSidecarBundleUrl, k.className = "button secondary", k.setAttribute("aria-label", "Export sidecar ZIP"), k.textContent = a("library", "Sidecar ZIP"), ne.appendChild(k);
  }
  j.append(re, ne), P.appendChild(j);
  const z = Vm();
  z && P.appendChild(z), P.appendChild(Bm(e, n));
  const D = document.createElement("details");
  D.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = a("library", "Show catalogue filters"), D.append(V, jm(e, n)), P.appendChild(D), Mm(e) || Ci(e) || wi(e)) {
    const k = document.createElement("section");
    k.className = "library-discovery-header", k.setAttribute("aria-labelledby", "library-discovery-heading");
    const N = document.createElement("p");
    N.className = "library-muted", N.textContent = wi(e) ? a("library", "Creator") : Ci(e) ? a("library", "Publication year") : a("library", "Publication / series");
    const $ = document.createElement("h3");
    $.id = "library-discovery-heading", $.textContent = G(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = `${n.total ?? r.length} ${wi(e) ? a("library", "items by this creator. Sorted by publication context when available.") : Ci(e) ? a("library", "items from this publication year. Sorted by publication date when available.") : a("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const ie = document.createElement("a");
    ie.href = "/apps/library/", ie.className = "button secondary", ie.textContent = a("library", "Back to full catalogue"), k.append(N, $, Q, ie), P.appendChild(k);
  }
  const le = document.createElement("p");
  le.className = "library-muted library-filter-result-summary", le.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Le = document.createElement("a");
  Le.href = "?", Le.textContent = ` ${a("library", "Clear all filters")}`, le.appendChild(Le), P.appendChild(le);
  const ke = document.createElement("details");
  ke.className = "library-batch-actions";
  const je = document.createElement("summary");
  je.textContent = `${a("library", "Batch actions for current results")} (${n.total ?? r.length} ${a("library", "Current filter result")})`;
  const Ee = document.createElement("form");
  Ee.method = "post", Ee.action = o, Ee.className = "library-batch-tag-form";
  const Ie = Pr(e);
  Ie && Ee.appendChild(Ie);
  for (const [k, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = k, $.value = G(N), Ee.appendChild($);
  }
  const tt = document.createElement("label");
  tt.textContent = a("library", "Apply Nextcloud tag to current results");
  const lt = document.createElement("input");
  lt.type = "text", lt.name = "nextcloudTagName", lt.placeholder = "batch-review", tt.appendChild(lt);
  const Ke = document.createElement("button");
  Ke.type = "submit", Ke.className = "button secondary", Ke.textContent = a("library", "Apply Nextcloud tag to current results");
  const vt = document.createElement("p");
  vt.className = "library-muted", vt.textContent = a("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ee.append(tt, Ke, vt);
  const Fe = document.createElement("form");
  Fe.method = "post", Fe.action = c, Fe.className = "library-batch-tag-remove-form";
  const Me = Pr(e);
  Me && Fe.appendChild(Me);
  for (const [k, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = k, $.value = G(N), Fe.appendChild($);
  }
  const he = document.createElement("label");
  he.textContent = a("library", "Nextcloud tag");
  const ue = document.createElement("input");
  ue.type = "text", ue.name = "nextcloudTagName", ue.setAttribute("list", "library-nextcloud-tag-suggestions"), ue.placeholder = a("library", "e.g. Review"), ue.autocomplete = "off", he.appendChild(ue);
  const Ve = document.createElement("button");
  Ve.type = "submit", Ve.className = "button secondary", Ve.textContent = a("library", "Remove tag from current results");
  const me = document.createElement("p");
  me.className = "library-muted", me.textContent = a("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), Fe.append(he, Ve, me);
  const xe = document.createElement("form");
  xe.method = "post", xe.action = d, xe.className = "library-batch-metadata-reset-form";
  const Be = Pr(e);
  Be && xe.appendChild(Be);
  for (const [k, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = k, $.value = G(N), xe.appendChild($);
  }
  const Ye = document.createElement("input");
  Ye.type = "hidden", Ye.name = "scannerConflicts", Ye.value = "1";
  const de = document.createElement("button");
  de.type = "submit", de.className = "button secondary", de.textContent = a("library", "Reset filtered metadata");
  const Ot = document.createElement("p");
  Ot.className = "library-muted", Ot.textContent = a("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), xe.append(Ye, de, Ot);
  const ze = document.createElement("form");
  ze.method = "post", ze.action = v, ze.className = "library-batch-metadata-edit-preview-form", ze.target = "_blank";
  const ct = Pr(e);
  ct && ze.appendChild(ct);
  for (const [k, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = k, $.value = G(N), ze.appendChild($);
  }
  const Et = document.createElement("label");
  Et.textContent = a("library", "Metadata field");
  const St = document.createElement("select");
  St.name = "bulkEditField";
  for (const [k, N] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const $ = document.createElement("option");
    $.value = k, $.textContent = a("library", N), St.appendChild($);
  }
  Et.appendChild(St);
  const rt = document.createElement("label");
  rt.textContent = a("library", "Preview value");
  const ut = document.createElement("input");
  ut.type = "text", ut.name = "bulkEditValue", ut.placeholder = "magazine, de, photography...", ut.autocomplete = "off", rt.appendChild(ut);
  const p = document.createElement("button");
  p.type = "submit", p.className = "button secondary", p.textContent = a("library", "Preview & apply metadata edit");
  const b = document.createElement("p");
  b.className = "library-muted", b.textContent = a("library", "Preview first, then apply from the review page."), ze.append(Et, rt, p, b);
  const _ = document.createElement("form");
  _.method = "post", _.action = y, _.className = "library-batch-cover-refresh-form";
  const O = Pr(e);
  O && _.appendChild(O);
  for (const [k, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = k, $.value = G(N), _.appendChild($);
  }
  const S = document.createElement("button");
  S.type = "submit", S.className = "button secondary", S.textContent = a("library", "Request fresh cover previews");
  const w = document.createElement("p");
  w.className = "library-muted", w.textContent = a("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(S, w), ke.append(je, Ee, Fe, xe, ze, _), P.appendChild(ke);
  const I = document.createElement("nav");
  I.className = "library-pagination", I.setAttribute("aria-label", a("library", "Catalogue pagination"));
  const U = document.createElement("span");
  U.className = "library-pagination-range", U.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, I.appendChild(U), P.appendChild(I);
  const M = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], T = document.createElement("details");
  T.className = M.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const K = document.createElement("summary");
  K.className = "library-periodical-groups-summary", K.textContent = a("library", "Show top series and periodicals"), T.appendChild(K);
  const H = document.createElement("h3");
  H.textContent = M.length > 0 ? a("library", "Top series and periodicals") : a("library", "No series or periodicals found yet");
  const q = document.createElement("p");
  if (q.className = "library-muted", q.textContent = M.length > 0 ? a("library", "Jump into recurring publications with one click.") : a("library", "Add publication or series names in item details to build this shortcut panel."), T.append(H, q), M.length > 0) {
    const k = document.createElement("ul");
    for (const N of M) {
      const $ = document.createElement("li"), Q = document.createElement("a");
      Q.href = Im(N.publication, N), Q.textContent = G(N.publication);
      const ie = document.createElement("span");
      ie.className = "library-muted", ie.textContent = `${N.itemCount} items`, $.append(Q, ie), k.appendChild($);
    }
    T.appendChild(k);
  }
  P.appendChild(T);
  const X = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (X.length > 0) {
    const k = document.createElement("details");
    k.className = "library-year-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = a("library", "Show publication years");
    const $ = document.createElement("h3");
    $.textContent = a("library", "Top publication years");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = a("library", "Jump into dated books, magazines, journals and comics by year.");
    const ie = document.createElement("ul");
    for (const be of X) {
      const ce = document.createElement("li"), Ne = document.createElement("a");
      Ne.href = Um(be, e), Ne.textContent = G(be), ce.appendChild(Ne), ie.appendChild(ce);
    }
    k.append(N, $, Q, ie), P.appendChild(k);
  }
  const Z = Array.isArray(e.creators) ? e.creators : [];
  if (Z.length > 0) {
    const k = document.createElement("details");
    k.className = "library-creator-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = a("library", "Show creators");
    const $ = document.createElement("h3");
    $.textContent = a("library", "Top creators");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = a("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const ie = document.createElement("ul");
    for (const be of Z) {
      const ce = document.createElement("li"), Ne = document.createElement("a");
      Ne.href = Dm(be, e), Ne.textContent = G(be), ce.appendChild(Ne), ie.appendChild(ce);
    }
    k.append(N, $, Q, ie), P.appendChild(k);
  }
  if (r.length === 0) {
    const k = document.createElement("div"), N = Number(e.rootCount || 0), $ = Number(e.enabledRootCount || 0), Q = Fm(e);
    k.className = "library-empty-content", (N === 0 || $ === 0) && k.classList.add("library-first-run-guidance"), Q && N > 0 && $ > 0 && k.classList.add("library-filter-empty-state"), k.setAttribute("role", "status");
    const ie = document.createElement("h3"), be = document.createElement("p");
    be.className = "library-muted";
    const ce = document.createElement("p");
    ce.className = "library-empty-actions", N === 0 ? (ie.textContent = a("library", "Start with one Library root"), be.textContent = a("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Yr(ce, i, "button primary", a("library", "Add a Library root")), $m(ce, a("library", "Run a scan after saving a root"))) : $ === 0 ? (ie.textContent = a("library", "No enabled Library roots"), be.textContent = a("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Yr(ce, i, "button primary", a("library", "Open Library settings"))) : Q ? (ie.textContent = a("library", "No matches for the current filters"), be.textContent = a("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Yr(ce, Hm(), "button secondary", a("library", "Clear search")), Yr(ce, "?", "button primary", a("library", "Clear all filters"))) : (ie.textContent = a("library", "No catalogue items yet"), be.textContent = a("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Yr(ce, i, "button primary", a("library", "Run a scan from settings"))), k.append(ie, be, ce), P.appendChild(k);
  } else {
    const k = document.createElement("div");
    k.className = "library-cover-gallery";
    for (const N of r) {
      const $ = document.createElement("article");
      $.className = "library-cover-card";
      const Q = document.createElement("a");
      Q.className = "library-cover-link", Q.href = G(N.openUrl || "#"), Q.setAttribute("aria-label", `Read ${G(N.title || "publication")}`);
      const ie = document.createElement("img");
      ie.className = "library-cover-image", ie.src = G(N.coverUrl || ""), ie.alt = `Cover for ${G(N.title || "publication")}`, ie.loading = "lazy", Q.appendChild(ie);
      const be = Pr(e), ce = document.createElement("form");
      ce.method = "post", ce.action = G(N.starUrl || ""), ce.className = "library-cover-star-form", be && ce.appendChild(be);
      const Ne = document.createElement("input");
      Ne.type = "hidden", Ne.name = "returnTo", Ne.value = "catalogue";
      const Re = document.createElement("input");
      Re.type = "hidden", Re.name = "starred", Re.value = N.starred ? "0" : "1";
      const Oe = document.createElement("button");
      Oe.type = "submit", Oe.className = N.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Oe.setAttribute("aria-pressed", N.starred ? "true" : "false"), Oe.setAttribute("aria-label", N.starred ? a("library", "Unstar this publication") : a("library", "Star this publication")), Oe.title = N.starred ? a("library", "Unstar this publication") : a("library", "Star this publication"), Oe.textContent = N.starred ? "★" : "☆", ce.append(Ne, Re, Oe);
      const ft = document.createElement("div");
      ft.className = "library-cover-summary";
      const Mt = document.createElement("h3");
      if (Mt.textContent = G(N.title || "Untitled publication"), ft.appendChild(Mt), N.creators) {
        const wt = document.createElement("p");
        wt.className = "library-creator", wt.textContent = G(N.creators), ft.appendChild(wt);
      }
      const Kt = document.createElement("dl");
      Kt.className = "library-cover-detail-list";
      const Tt = [
        ["Type", G(N.publicationType || "other")],
        ["Format", N.extension ? Ca(N.extension) : ""],
        ["Shelf", N.shelf ? G(N.shelf) : ""]
      ].filter(([, wt]) => wt !== "");
      for (const [wt, Ar] of Tt) {
        const Ut = document.createElement("div");
        Ut.className = "library-cover-detail-chip";
        const Dt = document.createElement("dt");
        Dt.textContent = wt;
        const Xe = document.createElement("dd");
        Xe.textContent = Ar, Ut.append(Dt, Xe), Kt.appendChild(Ut);
      }
      ft.appendChild(Kt);
      const xt = document.createElement("p"), Ct = document.createElement("a");
      Ct.href = G(N.openUrl || "#"), Ct.textContent = a("library", "Read");
      const sr = document.createElement("a");
      sr.href = G(N.filesUrl || "#"), sr.textContent = a("library", "Show in Files");
      const or = document.createElement("a");
      or.href = G(N.downloadUrl || "#"), or.textContent = a("library", "Download source");
      const ar = document.createElement("a");
      ar.href = G(N.detailsUrl || "#"), ar.textContent = a("library", "Details"), xt.append(Ct, document.createTextNode(" · "), sr, document.createTextNode(" · "), or, document.createTextNode(" · "), ar), ft.appendChild(xt), $.append(Q, ce, ft), k.appendChild($);
    }
    P.appendChild(k);
  }
  return E.appendChild(P), E;
}
if (Nn)
  try {
    cu(Pm, { state: uo }).mount(Nn);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Nn.replaceChildren(zm(uo));
  }
//# sourceMappingURL=library-main.mjs.map
