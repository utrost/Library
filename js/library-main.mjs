// @__NO_SIDE_EFFECTS__
function $i(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Ce = {}, Ur = [], Vt = () => {
}, po = () => !1, Vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Bn = (e) => e.startsWith("onUpdate:"), tt = Object.assign, ji = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, ja = Object.prototype.hasOwnProperty, Ee = (e, t) => ja.call(e, t), ee = Array.isArray, dr = (e) => pn(e) === "[object Map]", xr = (e) => pn(e) === "[object Set]", ms = (e) => pn(e) === "[object Date]", ae = (e) => typeof e == "function", Ue = (e) => typeof e == "string", Bt = (e) => typeof e == "symbol", Te = (e) => e !== null && typeof e == "object", ho = (e) => (Te(e) || ae(e)) && ae(e.then) && ae(e.catch), mo = Object.prototype.toString, pn = (e) => mo.call(e), Va = (e) => pn(e).slice(8, -1), bo = (e) => pn(e) === "[object Object]", Vi = (e) => Ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, en = /* @__PURE__ */ $i(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Ba = /-\w/g, Ot = qn(
  (e) => e.replace(Ba, (t) => t.slice(1).toUpperCase())
), qa = /\B([A-Z])/g, Ar = qn(
  (e) => e.replace(qa, "-$1").toLowerCase()
), yo = qn((e) => e.charAt(0).toUpperCase() + e.slice(1)), si = qn(
  (e) => e ? `on${yo(e)}` : ""
), jt = (e, t) => !Object.is(e, t), kn = (e, ...t) => {
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
const Wn = () => bs || (bs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Bi(e) {
  if (ee(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Ue(n) ? Ga(n) : Bi(n);
      if (i)
        for (const s in i)
          t[s] = i[s];
    }
    return t;
  } else if (Ue(e) || Te(e))
    return e;
}
const za = /;(?![^(]*\))/g, Wa = /:([^]+)/, Ka = /\/\*[^]*?\*\//g;
function Ga(e) {
  const t = {};
  return e.replace(Ka, "").split(za).forEach((r) => {
    if (r) {
      const n = r.split(Wa);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Dr(e) {
  let t = "";
  if (Ue(e))
    t = e;
  else if (ee(e))
    for (let r = 0; r < e.length; r++) {
      const n = Dr(e[r]);
      n && (t += n + " ");
    }
  else if (Te(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Ya = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xa = /* @__PURE__ */ $i(Ya);
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
  if (r = Bt(e), n = Bt(t), r || n)
    return e === t;
  if (r = ee(e), n = ee(t), r || n)
    return r && n ? Ja(e, t) : !1;
  if (r = Te(e), n = Te(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = dr(e), n = dr(t), r || n || (r = xr(e), n = xr(t), r || n))
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
    (r, [n, i], s) => (r[oi(n, s) + " =>"] = i, r),
    {}
  )
} : xr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => oi(r))
} : Bt(t) ? oi(t) : Te(t) && !ee(t) && !bo(t) ? String(t) : t, oi = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Bt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
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
const ai = /* @__PURE__ */ new WeakSet();
class So {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ge && (Ge.active ? Ge.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ai.has(this) && (ai.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, gs(this), Co(this);
    const t = Ae, r = Nt;
    Ae = this, Nt = !0;
    try {
      return this.fn();
    } finally {
      xo(this), Ae = t, Nt = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Wi(t);
      this.deps = this.depsTail = void 0, gs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ai.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ri(this) && this.run();
  }
  get dirty() {
    return Ri(this);
  }
}
let To = 0, tn, rn;
function wo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = rn, rn = e;
    return;
  }
  e.next = tn, tn = e;
}
function qi() {
  To++;
}
function zi() {
  if (--To > 0)
    return;
  if (rn) {
    let t = rn;
    for (rn = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; tn; ) {
    let t = tn;
    for (tn = void 0; t; ) {
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
function xo(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Wi(n), tl(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Ri(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ao(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ao(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === an) || (e.globalVersion = an, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ri(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Ae, n = Nt;
  Ae = e, Nt = !0;
  try {
    Co(e);
    const i = e.fn(e._value);
    (t.version === 0 || jt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Ae = r, Nt = n, xo(e), e.flags &= -3;
  }
}
function Wi(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let s = r.computed.deps; s; s = s.nextDep)
      Wi(s, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function tl(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Nt = !0;
const Ro = [];
function er() {
  Ro.push(Nt), Nt = !1;
}
function tr() {
  const e = Ro.pop();
  Nt = e === void 0 ? !0 : e;
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
let an = 0;
class rl {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ki {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ae || !Nt || Ae === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Ae)
      r = this.activeLink = new rl(Ae, this), Ae.deps ? (r.prevDep = Ae.depsTail, Ae.depsTail.nextDep = r, Ae.depsTail = r) : Ae.deps = Ae.depsTail = r, ko(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Ae.depsTail, r.nextDep = void 0, Ae.depsTail.nextDep = r, Ae.depsTail = r, Ae.deps === r && (Ae.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, an++, this.notify(t);
  }
  notify(t) {
    qi();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      zi();
    }
  }
}
function ko(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        ko(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const ki = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ Symbol(
  ""
), Oi = /* @__PURE__ */ Symbol(
  ""
), ln = /* @__PURE__ */ Symbol(
  ""
);
function Qe(e, t, r) {
  if (Nt && Ae) {
    let n = ki.get(e);
    n || ki.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Ki()), i.map = n, i.key = r), i.track();
  }
}
function Jt(e, t, r, n, i, s) {
  const o = ki.get(e);
  if (!o) {
    an++;
    return;
  }
  const c = (d) => {
    d && d.trigger();
  };
  if (qi(), t === "clear")
    o.forEach(c);
  else {
    const d = ee(e), v = d && Vi(r);
    if (d && r === "length") {
      const y = Number(n);
      o.forEach((E, P) => {
        (P === "length" || P === ln || !Bt(P) && P >= y) && c(E);
      });
    } else
      switch ((r !== void 0 || o.has(void 0)) && c(o.get(r)), v && c(o.get(ln)), t) {
        case "add":
          d ? v && c(o.get("length")) : (c(o.get(Tr)), dr(e) && c(o.get(Oi)));
          break;
        case "delete":
          d || (c(o.get(Tr)), dr(e) && c(o.get(Oi)));
          break;
        case "set":
          dr(e) && c(o.get(Tr));
          break;
      }
  }
  zi();
}
function Nr(e) {
  const t = /* @__PURE__ */ ve(e);
  return t === e ? t : (Qe(t, "iterate", ln), /* @__PURE__ */ At(e) ? t : t.map(Pt));
}
function Kn(e) {
  return Qe(e = /* @__PURE__ */ ve(e), "iterate", ln), e;
}
function Ht(e, t) {
  return /* @__PURE__ */ rr(e) ? jr(/* @__PURE__ */ wr(e) ? Pt(t) : t) : Pt(t);
}
const nl = {
  __proto__: null,
  [Symbol.iterator]() {
    return li(this, Symbol.iterator, (e) => Ht(this, e));
  },
  concat(...e) {
    return Nr(this).concat(
      ...e.map((t) => ee(t) ? Nr(t) : t)
    );
  },
  entries() {
    return li(this, "entries", (e) => (e[1] = Ht(this, e[1]), e));
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
      (r) => r.map((n) => Ht(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Gt(
      this,
      "find",
      e,
      t,
      (r) => Ht(this, r),
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
      (r) => Ht(this, r),
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
    return ci(this, "includes", e);
  },
  indexOf(...e) {
    return ci(this, "indexOf", e);
  },
  join(e) {
    return Nr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ci(this, "lastIndexOf", e);
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
    return Nr(this).toReversed();
  },
  toSorted(e) {
    return Nr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Nr(this).toSpliced(...e);
  },
  unshift(...e) {
    return zr(this, "unshift", e);
  },
  values() {
    return li(this, "values", (e) => Ht(this, e));
  }
};
function li(e, t, r) {
  const n = Kn(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ At(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = r(s.value)), s;
  }), i;
}
const il = Array.prototype;
function Gt(e, t, r, n, i, s) {
  const o = Kn(e), c = o !== e && !/* @__PURE__ */ At(e), d = o[t];
  if (d !== il[t]) {
    const E = d.apply(e, s);
    return c ? Pt(E) : E;
  }
  let v = r;
  o !== e && (c ? v = function(E, P) {
    return r.call(this, Ht(e, E), P, e);
  } : r.length > 2 && (v = function(E, P) {
    return r.call(this, E, P, e);
  }));
  const y = d.call(o, v, n);
  return c && i ? i(y) : y;
}
function _s(e, t, r, n) {
  const i = Kn(e), s = i !== e && !/* @__PURE__ */ At(e);
  let o = r, c = !1;
  i !== e && (s ? (c = n.length === 0, o = function(v, y, E) {
    return c && (c = !1, v = Ht(e, v)), r.call(this, v, Ht(e, y), E, e);
  }) : r.length > 3 && (o = function(v, y, E) {
    return r.call(this, v, y, E, e);
  }));
  const d = i[t](o, ...n);
  return c ? Ht(e, d) : d;
}
function ci(e, t, r) {
  const n = /* @__PURE__ */ ve(e);
  Qe(n, "iterate", ln);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Xi(r[0]) ? (r[0] = /* @__PURE__ */ ve(r[0]), n[t](...r)) : i;
}
function zr(e, t, r = []) {
  er(), qi();
  const n = (/* @__PURE__ */ ve(e))[t].apply(e, r);
  return zi(), tr(), n;
}
const sl = /* @__PURE__ */ $i("__proto__,__v_isRef,__isVue"), Oo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bt)
);
function ol(e) {
  Bt(e) || (e = String(e));
  const t = /* @__PURE__ */ ve(this);
  return Qe(t, "has", e), t.hasOwnProperty(e);
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
      return n === (i ? s ? bl : Lo : s ? Io : Mo).get(t) || // receiver is not the reactive proxy, but has the same prototype
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
      /* @__PURE__ */ et(t) ? t : n
    );
    if ((Bt(r) ? Oo.has(r) : sl(r)) || (i || Qe(t, "get", r), s))
      return c;
    if (/* @__PURE__ */ et(c)) {
      const d = o && Vi(r) ? c : c.value;
      return i && Te(d) ? /* @__PURE__ */ Pi(d) : d;
    }
    return Te(c) ? i ? /* @__PURE__ */ Pi(c) : /* @__PURE__ */ fr(c) : c;
  }
}
class Po extends No {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let s = t[r];
    const o = ee(t) && Vi(r);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ rr(s);
      if (!/* @__PURE__ */ At(n) && !/* @__PURE__ */ rr(n) && (s = /* @__PURE__ */ ve(s), n = /* @__PURE__ */ ve(n)), !o && /* @__PURE__ */ et(s) && !/* @__PURE__ */ et(n))
        return v || (s.value = n), !0;
    }
    const c = o ? Number(r) < t.length : Ee(t, r), d = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ et(t) ? t : i
    );
    return t === /* @__PURE__ */ ve(i) && d && (c ? jt(n, s) && Jt(t, "set", r, n) : Jt(t, "add", r, n)), d;
  }
  deleteProperty(t, r) {
    const n = Ee(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Jt(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Bt(r) || !Oo.has(r)) && Qe(t, "has", r), n;
  }
  ownKeys(t) {
    return Qe(
      t,
      "iterate",
      ee(t) ? "length" : Tr
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
const Ni = (e) => e, Sn = (e) => Reflect.getPrototypeOf(e);
function fl(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, s = /* @__PURE__ */ ve(i), o = dr(s), c = e === "entries" || e === Symbol.iterator && o, d = e === "keys" && o, v = i[e](...n), y = r ? Ni : t ? jr : Pt;
    return !t && Qe(
      s,
      "iterate",
      d ? Oi : Tr
    ), tt(
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
function Tn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function dl(e, t) {
  const r = {
    get(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ ve(s), c = /* @__PURE__ */ ve(i);
      e || (jt(i, c) && Qe(o, "get", i), Qe(o, "get", c));
      const { has: d } = Sn(o), v = t ? Ni : e ? jr : Pt;
      if (d.call(o, i))
        return v(s.get(i));
      if (d.call(o, c))
        return v(s.get(c));
      s !== o && s.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Qe(/* @__PURE__ */ ve(i), "iterate", Tr), i.size;
    },
    has(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ ve(s), c = /* @__PURE__ */ ve(i);
      return e || (jt(i, c) && Qe(o, "has", i), Qe(o, "has", c)), i === c ? s.has(i) : s.has(i) || s.has(c);
    },
    forEach(i, s) {
      const o = this, c = o.__v_raw, d = /* @__PURE__ */ ve(c), v = t ? Ni : e ? jr : Pt;
      return !e && Qe(d, "iterate", Tr), c.forEach((y, E) => i.call(s, v(y), v(E), o));
    }
  };
  return tt(
    r,
    e ? {
      add: Tn("add"),
      set: Tn("set"),
      delete: Tn("delete"),
      clear: Tn("clear")
    } : {
      add(i) {
        const s = /* @__PURE__ */ ve(this), o = Sn(s), c = /* @__PURE__ */ ve(i), d = !t && !/* @__PURE__ */ At(i) && !/* @__PURE__ */ rr(i) ? c : i;
        return o.has.call(s, d) || jt(i, d) && o.has.call(s, i) || jt(c, d) && o.has.call(s, c) || (s.add(d), Jt(s, "add", d, d)), this;
      },
      set(i, s) {
        !t && !/* @__PURE__ */ At(s) && !/* @__PURE__ */ rr(s) && (s = /* @__PURE__ */ ve(s));
        const o = /* @__PURE__ */ ve(this), { has: c, get: d } = Sn(o);
        let v = c.call(o, i);
        v || (i = /* @__PURE__ */ ve(i), v = c.call(o, i));
        const y = d.call(o, i);
        return o.set(i, s), v ? jt(s, y) && Jt(o, "set", i, s) : Jt(o, "add", i, s), this;
      },
      delete(i) {
        const s = /* @__PURE__ */ ve(this), { has: o, get: c } = Sn(s);
        let d = o.call(s, i);
        d || (i = /* @__PURE__ */ ve(i), d = o.call(s, i)), c && c.call(s, i);
        const v = s.delete(i);
        return d && Jt(s, "delete", i, void 0), v;
      },
      clear() {
        const i = /* @__PURE__ */ ve(this), s = i.size !== 0, o = i.clear();
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
function Gi(e, t) {
  const r = dl(e, t);
  return (n, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    Ee(r, i) && i in n ? r : n,
    i,
    s
  );
}
const pl = {
  get: /* @__PURE__ */ Gi(!1, !1)
}, hl = {
  get: /* @__PURE__ */ Gi(!1, !0)
}, ml = {
  get: /* @__PURE__ */ Gi(!0, !1)
};
const Mo = /* @__PURE__ */ new WeakMap(), Io = /* @__PURE__ */ new WeakMap(), Lo = /* @__PURE__ */ new WeakMap(), bl = /* @__PURE__ */ new WeakMap();
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
  return /* @__PURE__ */ rr(e) ? e : Yi(
    e,
    !1,
    ll,
    pl,
    Mo
  );
}
// @__NO_SIDE_EFFECTS__
function gl(e) {
  return Yi(
    e,
    !1,
    ul,
    hl,
    Io
  );
}
// @__NO_SIDE_EFFECTS__
function Pi(e) {
  return Yi(
    e,
    !0,
    cl,
    ml,
    Lo
  );
}
function Yi(e, t, r, n, i) {
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
function wr(e) {
  return /* @__PURE__ */ rr(e) ? /* @__PURE__ */ wr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function rr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function At(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Xi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ve(t) : e;
}
function _l(e) {
  return !Ee(e, "__v_skip") && Object.isExtensible(e) && go(e, "__v_skip", !0), e;
}
const Pt = (e) => Te(e) ? /* @__PURE__ */ fr(e) : e, jr = (e) => Te(e) ? /* @__PURE__ */ Pi(e) : e;
// @__NO_SIDE_EFFECTS__
function et(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function vl(e) {
  return El(e, !1);
}
function El(e, t) {
  return /* @__PURE__ */ et(e) ? e : new Sl(e, t);
}
class Sl {
  constructor(t, r) {
    this.dep = new Ki(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ ve(t), this._value = r ? t : Pt(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ At(t) || /* @__PURE__ */ rr(t);
    t = n ? t : /* @__PURE__ */ ve(t), jt(t, r) && (this._rawValue = t, this._value = n ? t : Pt(t), this.dep.trigger());
  }
}
function m(e) {
  return /* @__PURE__ */ et(e) ? e.value : e;
}
const Tl = {
  get: (e, t, r) => t === "__v_raw" ? e : m(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ et(i) && !/* @__PURE__ */ et(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Uo(e) {
  return /* @__PURE__ */ wr(e) ? e : new Proxy(e, Tl);
}
class wl {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Ki(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = an - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ae !== this)
      return wo(this, !0), !0;
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
  return ae(e) ? n = e : (n = e.get, i = e.set), new wl(n, i, r);
}
const wn = {}, Mn = /* @__PURE__ */ new WeakMap();
let _r;
function xl(e, t = !1, r = _r) {
  if (r) {
    let n = Mn.get(r);
    n || Mn.set(r, n = []), n.push(e);
  }
}
function Al(e, t, r = Ce) {
  const { immediate: n, deep: i, once: s, scheduler: o, augmentJob: c, call: d } = r, v = (V) => i ? V : /* @__PURE__ */ At(V) || i === !1 || i === 0 ? Zt(V, 1) : Zt(V);
  let y, E, P, j, re = !1, W = !1;
  if (/* @__PURE__ */ et(e) ? (E = () => e.value, re = /* @__PURE__ */ At(e)) : /* @__PURE__ */ wr(e) ? (E = () => v(e), re = !0) : ee(e) ? (W = !0, re = e.some((V) => /* @__PURE__ */ wr(V) || /* @__PURE__ */ At(V)), E = () => e.map((V) => {
    if (/* @__PURE__ */ et(V))
      return V.value;
    if (/* @__PURE__ */ wr(V))
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
    const V = _r;
    _r = y;
    try {
      return d ? d(e, 3, [j]) : e(j);
    } finally {
      _r = V;
    }
  } : E = Vt, t && i) {
    const V = E, le = i === !0 ? 1 / 0 : i;
    E = () => Zt(V(), le);
  }
  const oe = el(), ne = () => {
    y.stop(), oe && oe.active && ji(oe.effects, y);
  };
  if (s && t) {
    const V = t;
    t = (...le) => {
      const Me = V(...le);
      return ne(), Me;
    };
  }
  let q = W ? new Array(e.length).fill(wn) : wn;
  const D = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const le = y.run();
        if (V || i || re || (W ? le.some((Me, Oe) => jt(Me, q[Oe])) : jt(le, q))) {
          P && P();
          const Me = _r;
          _r = y;
          try {
            const Oe = [
              le,
              // pass undefined as the old value when it's changed for the first time
              q === wn ? void 0 : W && q[0] === wn ? [] : q,
              j
            ];
            q = le, d ? d(t, 3, Oe) : (
              // @ts-expect-error
              t(...Oe)
            );
          } finally {
            _r = Me;
          }
        }
      } else
        y.run();
  };
  return c && c(D), y = new So(E), y.scheduler = o ? () => o(D, !1) : D, j = (V) => xl(V, !1, y), P = y.onStop = () => {
    const V = Mn.get(y);
    if (V) {
      if (d)
        d(V, 4);
      else
        for (const le of V) le();
      Mn.delete(y);
    }
  }, t ? n ? D(!0) : q = y.run() : o ? o(D.bind(null, !0), !0) : y.run(), ne.pause = y.pause.bind(y), ne.resume = y.resume.bind(y), ne.stop = ne, ne;
}
function Zt(e, t = 1 / 0, r) {
  if (t <= 0 || !Te(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ et(e))
    Zt(e.value, t, r);
  else if (ee(e))
    for (let n = 0; n < e.length; n++)
      Zt(e[n], t, r);
  else if (xr(e) || dr(e))
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
function hn(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Gn(i, t, r);
  }
}
function Mt(e, t, r, n) {
  if (ae(e)) {
    const i = hn(e, t, r, n);
    return i && ho(i) && i.catch((s) => {
      Gn(s, t, r);
    }), i;
  }
  if (ee(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++)
      i.push(Mt(e[s], t, r, n));
    return i;
  }
}
function Gn(e, t, r, n = !0) {
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
      er(), hn(s, null, 10, [
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
const at = [];
let Ft = -1;
const Fr = [];
let ur = null, Ir = 0;
const Do = /* @__PURE__ */ Promise.resolve();
let In = null;
function Fo(e) {
  const t = In || Do;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kl(e) {
  let t = Ft + 1, r = at.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = at[n], s = cn(i);
    s < e || s === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Ji(e) {
  if (!(e.flags & 1)) {
    const t = cn(e), r = at[at.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= cn(r) ? at.push(e) : at.splice(kl(t), 0, e), e.flags |= 1, Ho();
  }
}
function Ho() {
  In || (In = Do.then(jo));
}
function Ol(e) {
  if (!ee(e))
    ur && e.id === -1 ? ur.splice(Ir + 1, 0, e) : e.flags & 1 || (Fr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Fr.push(e[t]);
  Ho();
}
function vs(e, t, r = Ft + 1) {
  for (; r < at.length; r++) {
    const n = at[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      at.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function $o(e) {
  if (Fr.length) {
    const t = [...new Set(Fr)].sort(
      (r, n) => cn(r) - cn(n)
    );
    if (Fr.length = 0, ur) {
      for (let r = 0; r < t.length; r++)
        ur.push(t[r]);
      return;
    }
    for (ur = t, Ir = 0; Ir < ur.length; Ir++) {
      const r = ur[Ir];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    ur = null, Ir = 0;
  }
}
const cn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function jo(e) {
  try {
    for (Ft = 0; Ft < at.length; Ft++) {
      const t = at[Ft];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), hn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ft < at.length; Ft++) {
      const t = at[Ft];
      t && (t.flags &= -2);
    }
    Ft = -1, at.length = 0, $o(), In = null, (at.length || Fr.length) && jo();
  }
}
let xt = null, Vo = null;
function Ln(e) {
  const t = xt;
  return xt = e, Vo = e && e.type.__scopeId || null, t;
}
function Nl(e, t = xt, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Ns(-1);
    const s = Ln(t), o = Cr.length;
    let c;
    try {
      c = e(...i);
    } finally {
      for (let d = Cr.length; d > o; d--) ha();
      Ln(s), n._d && Ns(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ze(e, t) {
  if (xt === null)
    return e;
  const r = Qn(xt), n = e.dirs || (e.dirs = []);
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
function br(e, t, r, n) {
  const i = e.dirs, s = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const c = i[o];
    s && (c.oldValue = s[o].value);
    let d = c.dir[n];
    d && (er(), Mt(d, r, 8, [
      e.el,
      c,
      e,
      t
    ]), tr());
  }
}
function Pl(e, t) {
  if (lt) {
    let r = lt.provides;
    const n = lt.parent && lt.parent.provides;
    n === r && (r = lt.provides = Object.create(n)), r[e] = t;
  }
}
function On(e, t, r = !1) {
  const n = Rc();
  if (n || Hr) {
    let i = Hr ? Hr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && ae(t) ? t.call(n && n.proxy) : t;
  }
}
const Ml = /* @__PURE__ */ Symbol.for("v-scx"), Il = () => On(Ml);
function ui(e, t, r) {
  return Bo(e, t, r);
}
function Bo(e, t, r = Ce) {
  const { immediate: n, deep: i, flush: s, once: o } = r, c = tt({}, r), d = t && n || !t && s !== "post";
  let v;
  if (dn) {
    if (s === "sync") {
      const j = Il();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!d) {
      const j = () => {
      };
      return j.stop = Vt, j.resume = Vt, j.pause = Vt, j;
    }
  }
  const y = lt;
  c.call = (j, re, W) => Mt(j, y, re, W);
  let E = !1;
  s === "post" ? c.scheduler = (j) => {
    bt(j, y && y.suspense);
  } : s !== "sync" && (E = !0, c.scheduler = (j, re) => {
    re ? j() : Ji(j);
  }), c.augmentJob = (j) => {
    t && (j.flags |= 4), E && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const P = Al(e, t, c);
  return dn && (v ? v.push(P) : d && P()), P;
}
function Ll(e, t, r) {
  const n = this.proxy, i = Ue(e) ? e.includes(".") ? qo(n, e) : () => n[e] : e.bind(n, n);
  let s;
  ae(t) ? s = t : (s = t.handler, r = t);
  const o = mn(this), c = Bo(i, s.bind(n), r);
  return o(), c;
}
function qo(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const Ul = /* @__PURE__ */ Symbol("_vte"), Yn = (e) => e.__isTeleport, fi = /* @__PURE__ */ Symbol("_leaveCb");
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
function zo(e) {
  if (!Qi(e))
    return Yn(e.type) && e.children ? Dl(e.children) : e;
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
function Zi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    Zi(
      Yn(r.type) && zo(r) || r,
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
const Un = /* @__PURE__ */ new WeakMap();
function nn(e, t, r, n, i = !1) {
  if (ee(e)) {
    e.forEach(
      (W, oe) => nn(
        W,
        t && (ee(t) ? t[oe] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (sn(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && nn(e, t, r, n.component.subTree);
    return;
  }
  const s = n.shapeFlag & 4 ? Qn(n.component) : n.el, o = i ? null : s, { i: c, r: d } = e, v = t && t.r, y = c.refs === Ce ? c.refs = {} : c.refs, E = c.setupState, P = /* @__PURE__ */ ve(E), j = E === Ce ? po : (W) => Es(y, W) ? !1 : Ee(P, W), re = (W, oe) => !(oe && Es(y, oe));
  if (v != null && v !== d) {
    if (Ss(t), Ue(v))
      y[v] = null, j(v) && (E[v] = null);
    else if (/* @__PURE__ */ et(v)) {
      const W = t;
      re(v, W.k) && (v.value = null), W.k && (y[W.k] = null);
    }
  }
  if (ae(d))
    hn(d, c, 12, [o, y]);
  else {
    const W = Ue(d), oe = /* @__PURE__ */ et(d);
    if (W || oe) {
      const ne = () => {
        if (e.f) {
          const q = W ? j(d) ? E[d] : y[d] : re() || !e.k ? d.value : y[e.k];
          if (i)
            ee(q) && ji(q, s);
          else if (ee(q))
            q.includes(s) || q.push(s);
          else if (W)
            y[d] = [s], j(d) && (E[d] = y[d]);
          else {
            const D = [s];
            re(d, e.k) && (d.value = D), e.k && (y[e.k] = D);
          }
        } else W ? (y[d] = o, j(d) && (E[d] = o)) : oe && (re(d, e.k) && (d.value = o), e.k && (y[e.k] = o));
      };
      if (o) {
        const q = () => {
          ne(), Un.delete(e);
        };
        q.id = -1, Un.set(e, q), bt(q, r);
      } else
        Ss(e), ne();
    }
  }
}
function Ss(e) {
  const t = Un.get(e);
  t && (t.flags |= 8, Un.delete(e));
}
Wn().requestIdleCallback;
Wn().cancelIdleCallback;
const sn = (e) => !!e.type.__asyncLoader, Qi = (e) => e.type.__isKeepAlive;
function Fl(e, t) {
  Ko(e, "a", t);
}
function Hl(e, t) {
  Ko(e, "da", t);
}
function Ko(e, t, r = lt) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Xn(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Qi(i.parent.vnode) && $l(n, t, r, i), i = i.parent;
  }
}
function $l(e, t, r, n) {
  const i = Xn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Xo(() => {
    ji(n[t], i);
  }, r);
}
function Xn(e, t, r = lt, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), s = t.__weh || (t.__weh = (...o) => {
      er();
      const c = mn(r), d = Mt(t, r, e, o);
      return c(), tr(), d;
    });
    return n ? i.unshift(s) : i.push(s), s;
  }
}
const ir = (e) => (t, r = lt) => {
  (!dn || e === "sp") && Xn(e, (...n) => t(...n), r);
}, jl = ir("bm"), Go = ir("m"), Vl = ir(
  "bu"
), Bl = ir("u"), Yo = ir(
  "bum"
), Xo = ir("um"), ql = ir(
  "sp"
), zl = ir("rtg"), Wl = ir("rtc");
function Kl(e, t = lt) {
  Xn("ec", e, t);
}
const Gl = /* @__PURE__ */ Symbol.for("v-ndc");
function _e(e, t, r, n) {
  let i;
  const s = r, o = ee(e);
  if (o || Ue(e)) {
    const c = o && /* @__PURE__ */ wr(e);
    let d = !1, v = !1;
    c && (d = !/* @__PURE__ */ At(e), v = /* @__PURE__ */ rr(e), e = Kn(e)), i = new Array(e.length);
    for (let y = 0, E = e.length; y < E; y++)
      i[y] = t(
        d ? v ? jr(Pt(e[y])) : Pt(e[y]) : e[y],
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
const Mi = (e) => e ? ga(e) ? Qn(e) : Mi(e.parent) : null, on = (
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
    $parent: (e) => Mi(e.parent),
    $root: (e) => Mi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Zo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ji(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Fo.bind(e.proxy)),
    $watch: (e) => Ll.bind(e)
  })
), di = (e, t) => e !== Ce && !e.__isScriptSetup && Ee(e, t), Yl = {
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
        if (di(n, t))
          return o[t] = 1, n[t];
        if (i !== Ce && Ee(i, t))
          return o[t] = 2, i[t];
        if (Ee(s, t))
          return o[t] = 3, s[t];
        if (r !== Ce && Ee(r, t))
          return o[t] = 4, r[t];
        Ii && (o[t] = 0);
      }
    }
    const v = on[t];
    let y, E;
    if (v)
      return t === "$attrs" && Qe(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = c.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== Ce && Ee(r, t))
      return o[t] = 4, r[t];
    if (
      // global properties
      E = d.config.globalProperties, Ee(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: s } = e;
    return di(i, t) ? (i[t] = r, !0) : n !== Ce && Ee(n, t) ? (n[t] = r, !0) : Ee(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: s, type: o }
  }, c) {
    let d;
    return !!(r[c] || e !== Ce && c[0] !== "$" && Ee(e, c) || di(t, c) || Ee(s, c) || Ee(n, c) || Ee(on, c) || Ee(i.config.globalProperties, c) || (d = o.__cssModules) && d[c]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Ee(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Ts(e) {
  return ee(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Ii = !0;
function Xl(e) {
  const t = Zo(e), r = e.proxy, n = e.ctx;
  Ii = !1, t.beforeCreate && ws(t.beforeCreate, e, "bc");
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
    beforeUnmount: q,
    destroyed: D,
    unmounted: V,
    render: le,
    renderTracked: Me,
    renderTriggered: Oe,
    errorCaptured: je,
    serverPrefetch: Se,
    // public API
    expose: Ie,
    inheritAttrs: rt,
    // assets
    components: ct,
    directives: Ke,
    filters: St
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
  if (Ii = !0, s)
    for (const he in s) {
      const ue = s[he], Ve = ae(ue) ? ue.bind(r, r) : ae(ue.get) ? ue.get.bind(r, r) : Vt, me = !ae(ue) && ae(ue.set) ? ue.set.bind(r) : Vt, we = J({
        get: Ve,
        set: me
      });
      Object.defineProperty(n, he, {
        enumerable: !0,
        configurable: !0,
        get: () => we.value,
        set: (Be) => we.value = Be
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
  y && ws(y, e, "c");
  function Le(he, ue) {
    ee(ue) ? ue.forEach((Ve) => he(Ve.bind(r))) : ue && he(ue.bind(r));
  }
  if (Le(jl, E), Le(Go, P), Le(Vl, j), Le(Bl, re), Le(Fl, W), Le(Hl, oe), Le(Kl, je), Le(Wl, Me), Le(zl, Oe), Le(Yo, q), Le(Xo, V), Le(ql, Se), ee(Ie))
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
  le && e.render === Vt && (e.render = le), rt != null && (e.inheritAttrs = rt), ct && (e.components = ct), Ke && (e.directives = Ke), Se && Wo(e);
}
function Jl(e, t, r = Vt) {
  ee(e) && (e = Li(e));
  for (const n in e) {
    const i = e[n];
    let s;
    Te(i) ? "default" in i ? s = On(
      i.from || n,
      i.default,
      !0
    ) : s = On(i.from || n) : s = On(i), /* @__PURE__ */ et(s) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : t[n] = s;
  }
}
function ws(e, t, r) {
  Mt(
    ee(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Jo(e, t, r, n) {
  let i = n.includes(".") ? qo(r, n) : () => r[n];
  if (Ue(e)) {
    const s = t[e];
    ae(s) && ui(i, s);
  } else if (ae(e))
    ui(i, e.bind(r));
  else if (Te(e))
    if (ee(e))
      e.forEach((s) => Jo(s, t, r, n));
    else {
      const s = ae(e.handler) ? e.handler.bind(r) : t[e.handler];
      ae(s) && ui(i, s, e);
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
    (v) => Dn(d, v, o, !0)
  ), Dn(d, t, o)), Te(t) && s.set(t, d), d;
}
function Dn(e, t, r, n = !1) {
  const { mixins: i, extends: s } = t;
  s && Dn(e, s, r, !0), i && i.forEach(
    (o) => Dn(e, o, r, !0)
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
  props: xs,
  emits: xs,
  // objects
  methods: Jr,
  computed: Jr,
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
  components: Jr,
  directives: Jr,
  // watch
  watch: ec,
  // provide / inject
  provide: Cs,
  inject: Ql
};
function Cs(e, t) {
  return t ? e ? function() {
    return tt(
      ae(e) ? e.call(this, this) : e,
      ae(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ql(e, t) {
  return Jr(Li(e), Li(t));
}
function Li(e) {
  if (ee(e)) {
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
function Jr(e, t) {
  return e ? tt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function xs(e, t) {
  return e ? ee(e) && ee(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : tt(
    /* @__PURE__ */ Object.create(null),
    Ts(e),
    Ts(t ?? {})
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
    ae(n) || (n = tt({}, n)), i != null && !Te(i) && (i = null);
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
          return j.appContext = s, P === !0 ? P = "svg" : P === !1 && (P = void 0), e(j, y, P), d = !0, v._container = y, y.__vue_app__ = v, Qn(j.component);
        }
      },
      onUnmount(y) {
        c.push(y);
      },
      unmount() {
        d && (Mt(
          c,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, E) {
        return s.provides[y] = E, v;
      },
      runWithContext(y) {
        const E = Hr;
        Hr = v;
        try {
          return y();
        } finally {
          Hr = E;
        }
      }
    };
    return v;
  };
}
let Hr = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ot(t)}Modifiers`] || e[`${Ar(t)}Modifiers`];
function ic(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ce;
  let i = r;
  const s = t.startsWith("update:"), o = s && nc(n, t.slice(7));
  o && (o.trim && (i = r.map((y) => Ue(y) ? y.trim() : y)), o.number && (i = i.map(zn)));
  let c, d = n[c = si(t)] || // also try camelCase event handler (#2249)
  n[c = si(Ot(t))];
  !d && s && (d = n[c = si(Ar(t))]), d && Mt(
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
    e.emitted[c] = !0, Mt(
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
      y && (c = !0, tt(o, y));
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !s && !c ? (Te(e) && n.set(e, null), null) : (ee(s) ? s.forEach((d) => o[d] = null) : tt(o, s), Te(e) && n.set(e, o), o);
}
function Jn(e, t) {
  return !e || !Vn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ee(e, t[0].toLowerCase() + t.slice(1)) || Ee(e, Ar(t)) || Ee(e, t));
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
  } = e, oe = Ln(e);
  let ne, q;
  try {
    if (r.shapeFlag & 4) {
      const V = i || n, le = V;
      ne = $t(
        v.call(
          le,
          V,
          y,
          E,
          j,
          P,
          re
        )
      ), q = c;
    } else {
      const V = t;
      ne = $t(
        V.length > 1 ? V(
          E,
          { attrs: c, slots: o, emit: d }
        ) : V(
          E,
          null
        )
      ), q = t.props ? c : oc(c);
    }
  } catch (V) {
    Cr.length = 0, Gn(V, e, 1), ne = Qt(nr);
  }
  let D = ne;
  if (q && W !== !1) {
    const V = Object.keys(q), { shapeFlag: le } = D;
    V.length && le & 7 && (s && V.some(Bn) && (q = ac(
      q,
      s
    )), D = Vr(D, q, !1, !0));
  }
  if (r.dirs && (D = Vr(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = Yn(D.type) && zo(D) || D;
    Zi(V, r.transition);
  }
  return ne = D, Ln(oe), ne;
}
const oc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Vn(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, ac = (e, t) => {
  const r = {};
  for (const n in e)
    (!Bn(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
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
        if (ta(o, n, P) && !Jn(v, P))
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
    if (ta(t, e, s) && !Jn(r, s))
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
  } = e, c = /* @__PURE__ */ ve(i), [d] = e.propsOptions;
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
        if (Jn(e.emitsOptions, P))
          continue;
        const j = t[P];
        if (d)
          if (Ee(s, P))
            j !== s[P] && (s[P] = j, v = !0);
          else {
            const re = Ot(P);
            i[re] = Ui(
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
      !Ee(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Ar(E)) === E || !Ee(t, y))) && (d ? r && // for camelCase
      (r[E] !== void 0 || // for kebab-case
      r[y] !== void 0) && (i[E] = Ui(
        d,
        c,
        E,
        void 0,
        e,
        !0
      )) : delete i[E]);
    if (s !== c)
      for (const E in s)
        (!t || !Ee(t, E)) && (delete s[E], v = !0);
  }
  v && Jt(e.attrs, "set", "");
}
function sa(e, t, r, n) {
  const [i, s] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let d in t) {
      if (en(d))
        continue;
      const v = t[d];
      let y;
      i && Ee(i, y = Ot(d)) ? !s || !s.includes(y) ? r[y] = v : (c || (c = {}))[y] = v : Jn(e.emitsOptions, d) || (!(d in n) || v !== n[d]) && (n[d] = v, o = !0);
    }
  if (s) {
    const d = /* @__PURE__ */ ve(r), v = c || Ce;
    for (let y = 0; y < s.length; y++) {
      const E = s[y];
      r[E] = Ui(
        i,
        d,
        E,
        v[E],
        e,
        !Ee(v, E)
      );
    }
  }
  return o;
}
function Ui(e, t, r, n, i, s) {
  const o = e[r];
  if (o != null) {
    const c = Ee(o, "default");
    if (c && n === void 0) {
      const d = o.default;
      if (o.type !== Function && !o.skipFactory && ae(d)) {
        const { propsDefaults: v } = i;
        if (r in v)
          n = v[r];
        else {
          const y = mn(i);
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
    ] && (n === "" || n === Ar(r)) && (n = !0));
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
      tt(o, P), j && c.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!s && !d)
    return Te(e) && n.set(e, Ur), Ur;
  if (ee(s))
    for (let y = 0; y < s.length; y++) {
      const E = Ot(s[y]);
      ks(E) && (o[E] = Ce);
    }
  else if (s)
    for (const y in s) {
      const E = Ot(y);
      if (ks(E)) {
        const P = s[y], j = o[E] = ee(P) || ae(P) ? { type: P } : tt({}, P), re = j.type;
        let W = !1, oe = !0;
        if (ee(re))
          for (let ne = 0; ne < re.length; ++ne) {
            const q = re[ne], D = ae(q) && q.name;
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
        ] = oe, (W || Ee(j, "default")) && c.push(E);
      }
    }
  const v = [o, c];
  return Te(e) && n.set(e, v), v;
}
function ks(e) {
  return e[0] !== "$" && !en(e);
}
const es = (e) => e === "_" || e === "_ctx" || e === "$stable", ts = (e) => ee(e) ? e.map($t) : [$t(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = Nl((...i) => ts(t(...i)), r);
  return n._c = !1, n;
}, aa = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (es(i)) continue;
    const s = e[i];
    if (ae(s))
      t[i] = pc(i, s, n);
    else if (s != null) {
      const o = ts(s);
      t[i] = () => o;
    }
  }
}, la = (e, t) => {
  const r = ts(t);
  e.slots.default = () => r;
}, ca = (e, t, r) => {
  for (const n in t)
    (r || !es(n)) && (e[n] = t[n]);
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
      !es(c) && o[c] == null && delete i[c];
}, bt = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = Wn();
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
    setScopeId: j = Vt,
    insertStaticContent: re
  } = e, W = (p, b, _, k = null, S = null, x = null, M = void 0, L = null, I = !!b.dynamicChildren) => {
    if (p === b)
      return;
    p && !Wr(p, b) && (k = ut(p), Be(p, S, x, !0), p = null), b.patchFlag === -2 && (I = !1, b.dynamicChildren = null);
    const { type: T, ref: K, shapeFlag: H } = b;
    switch (T) {
      case Zn:
        oe(p, b, _, k);
        break;
      case nr:
        ne(p, b, _, k);
        break;
      case hi:
        p == null && q(b, _, k, M);
        break;
      case se:
        ct(
          p,
          b,
          _,
          k,
          S,
          x,
          M,
          L,
          I
        );
        break;
      default:
        H & 1 ? le(
          p,
          b,
          _,
          k,
          S,
          x,
          M,
          L,
          I
        ) : H & 6 ? Ke(
          p,
          b,
          _,
          k,
          S,
          x,
          M,
          L,
          I
        ) : (H & 64 || H & 128) && T.process(
          p,
          b,
          _,
          k,
          S,
          x,
          M,
          L,
          I,
          nt
        );
    }
    K != null && S ? nn(K, p && p.ref, x, b || p, !b) : K == null && p && p.ref != null && nn(p.ref, null, x, p, !0);
  }, oe = (p, b, _, k) => {
    if (p == null)
      n(
        b.el = c(b.children),
        _,
        k
      );
    else {
      const S = b.el = p.el;
      b.children !== p.children && v(S, b.children);
    }
  }, ne = (p, b, _, k) => {
    p == null ? n(
      b.el = d(b.children || ""),
      _,
      k
    ) : b.el = p.el;
  }, q = (p, b, _, k) => {
    [p.el, p.anchor] = re(
      p.children,
      b,
      _,
      k,
      p.el,
      p.anchor
    );
  }, D = ({ el: p, anchor: b }, _, k) => {
    let S;
    for (; p && p !== b; )
      S = P(p), n(p, _, k), p = S;
    n(b, _, k);
  }, V = ({ el: p, anchor: b }) => {
    let _;
    for (; p && p !== b; )
      _ = P(p), i(p), p = _;
    i(b);
  }, le = (p, b, _, k, S, x, M, L, I) => {
    if (b.type === "svg" ? M = "svg" : b.type === "math" && (M = "mathml"), p == null)
      Me(
        b,
        _,
        k,
        S,
        x,
        M,
        L,
        I
      );
    else {
      const T = p.el && p.el._isVueCE ? p.el : null;
      try {
        T && T._beginPatch(), Se(
          p,
          b,
          S,
          x,
          M,
          L,
          I
        );
      } finally {
        T && T._endPatch();
      }
    }
  }, Me = (p, b, _, k, S, x, M, L) => {
    let I, T;
    const { props: K, shapeFlag: H, transition: z, dirs: X } = p;
    if (I = p.el = o(
      p.type,
      x,
      K && K.is,
      K
    ), H & 8 ? y(I, p.children) : H & 16 && je(
      p.children,
      I,
      null,
      k,
      S,
      pi(p, x),
      M,
      L
    ), X && br(p, null, k, "created"), Oe(I, p, p.scopeId, M, k), K) {
      for (const O in K)
        O !== "value" && !en(O) && s(I, O, null, K[O], x, k);
      "value" in K && s(I, "value", null, K.value, x), (T = K.onVnodeBeforeMount) && Dt(T, k, p);
    }
    X && br(p, null, k, "beforeMount");
    const Z = gc(S, z);
    Z && z.beforeEnter(I), n(I, b, _), ((T = K && K.onVnodeMounted) || Z || X) && bt(() => {
      T && Dt(T, k, p), Z && z.enter(I), X && br(p, null, k, "mounted");
    }, S);
  }, Oe = (p, b, _, k, S) => {
    if (_ && j(p, _), k)
      for (let x = 0; x < k.length; x++)
        j(p, k[x]);
    if (S) {
      let x = S.subTree;
      if (b === x || pa(x.type) && (x.ssContent === b || x.ssFallback === b)) {
        const M = S.vnode;
        Oe(
          p,
          M,
          M.scopeId,
          M.slotScopeIds,
          S.parent
        );
      }
    }
  }, je = (p, b, _, k, S, x, M, L, I = 0) => {
    for (let T = I; T < p.length; T++) {
      const K = p[T] = L ? Xt(p[T]) : $t(p[T]);
      W(
        null,
        K,
        b,
        _,
        k,
        S,
        x,
        M,
        L
      );
    }
  }, Se = (p, b, _, k, S, x, M) => {
    const L = b.el = p.el;
    let { patchFlag: I, dynamicChildren: T, dirs: K } = b;
    I |= p.patchFlag & 16;
    const H = p.props || Ce, z = b.props || Ce;
    let X;
    if (_ && yr(_, !1), (X = z.onVnodeBeforeUpdate) && Dt(X, _, b, p), K && br(b, p, _, "beforeUpdate"), _ && yr(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    T && (!p.dynamicChildren || p.dynamicChildren.length !== T.length) && (I = 0, M = !1, T = null), (H.innerHTML && z.innerHTML == null || H.textContent && z.textContent == null) && y(L, ""), T ? Ie(
      p.dynamicChildren,
      T,
      L,
      _,
      k,
      pi(b, S),
      x
    ) : M || ue(
      p,
      b,
      L,
      null,
      _,
      k,
      pi(b, S),
      x,
      !1
    ), I > 0) {
      if (I & 16)
        rt(L, H, z, _, S);
      else if (I & 2 && H.class !== z.class && s(L, "class", null, z.class, S), I & 4 && s(L, "style", H.style, z.style, S), I & 8) {
        const Z = b.dynamicProps;
        for (let O = 0; O < Z.length; O++) {
          const N = Z[O], $ = H[N], Q = z[N];
          (Q !== $ || N === "value") && s(L, N, $, Q, S, _);
        }
      }
      I & 1 && p.children !== b.children && y(L, b.children);
    } else !M && T == null && rt(L, H, z, _, S);
    ((X = z.onVnodeUpdated) || K) && bt(() => {
      X && Dt(X, _, b, p), K && br(b, p, _, "updated");
    }, k);
  }, Ie = (p, b, _, k, S, x, M) => {
    for (let L = 0; L < b.length; L++) {
      const I = p[L], T = b[L], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        I.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (I.type === se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Wr(I, T) || // - In the case of a component, it could contain anything.
        I.shapeFlag & 198) ? E(I.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      W(
        I,
        T,
        K,
        null,
        k,
        S,
        x,
        M,
        !0
      );
    }
  }, rt = (p, b, _, k, S) => {
    if (b !== _) {
      if (b !== Ce)
        for (const x in b)
          !en(x) && !(x in _) && s(
            p,
            x,
            b[x],
            null,
            S,
            k
          );
      for (const x in _) {
        if (en(x)) continue;
        const M = _[x], L = b[x];
        M !== L && x !== "value" && s(p, x, L, M, S, k);
      }
      "value" in _ && s(p, "value", b.value, _.value, S);
    }
  }, ct = (p, b, _, k, S, x, M, L, I) => {
    const T = b.el = p ? p.el : c(""), K = b.anchor = p ? p.anchor : c("");
    let { patchFlag: H, dynamicChildren: z, slotScopeIds: X } = b;
    X && (L = L ? L.concat(X) : X), p == null ? (n(T, _, k), n(K, _, k), je(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      _,
      K,
      S,
      x,
      M,
      L,
      I
    )) : H > 0 && H & 64 && z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === z.length ? (Ie(
      p.dynamicChildren,
      z,
      _,
      S,
      x,
      M,
      L
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
      x,
      M,
      L,
      I
    );
  }, Ke = (p, b, _, k, S, x, M, L, I) => {
    b.slotScopeIds = L, p == null ? b.shapeFlag & 512 ? S.ctx.activate(
      b,
      _,
      k,
      M,
      I
    ) : St(
      b,
      _,
      k,
      S,
      x,
      M,
      I
    ) : Fe(p, b, I);
  }, St = (p, b, _, k, S, x, M) => {
    const L = p.component = Ac(
      p,
      k,
      S
    );
    if (Qi(p) && (L.ctx.renderer = nt), kc(L, !1, M), L.asyncDep) {
      if (S && S.registerDep(L, Le, M), !p.el) {
        const I = L.subTree = Qt(nr);
        ne(null, I, b, _), p.placeholder = I.el;
      }
    } else
      Le(
        L,
        p,
        b,
        _,
        S,
        x,
        M
      );
  }, Fe = (p, b, _) => {
    const k = b.component = p.component;
    if (lc(p, b, _))
      if (k.asyncDep && !k.asyncResolved) {
        he(k, b, _);
        return;
      } else
        k.next = b, k.update();
    else
      b.el = p.el, k.vnode = b;
  }, Le = (p, b, _, k, S, x, M) => {
    const L = () => {
      if (p.isMounted) {
        let { next: H, bu: z, u: X, parent: Z, vnode: O } = p;
        {
          const be = fa(p);
          if (be) {
            H && (H.el = O.el, he(p, H, M)), be.asyncDep.then(() => {
              bt(() => {
                p.isUnmounted || T();
              }, S);
            });
            return;
          }
        }
        let N = H, $;
        yr(p, !1), H ? (H.el = O.el, he(p, H, M)) : H = O, z && kn(z), ($ = H.props && H.props.onVnodeBeforeUpdate) && Dt($, Z, H, O), yr(p, !0);
        const Q = As(p), ie = p.subTree;
        p.subTree = Q, W(
          ie,
          Q,
          // parent may have changed if it's in a teleport
          E(ie.el),
          // anchor may have changed if it's in a fragment
          ut(ie),
          p,
          S,
          x
        ), H.el = Q.el, N === null && cc(p, Q.el), X && bt(X, S), ($ = H.props && H.props.onVnodeUpdated) && bt(
          () => Dt($, Z, H, O),
          S
        );
      } else {
        let H;
        const { el: z, props: X } = b, { bm: Z, m: O, parent: N, root: $, type: Q } = p, ie = sn(b);
        yr(p, !1), Z && kn(Z), !ie && (H = X && X.onVnodeBeforeMount) && Dt(H, N, b), yr(p, !0);
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
            k,
            p,
            S,
            x
          ), b.el = be.el;
        }
        if (O && bt(O, S), !ie && (H = X && X.onVnodeMounted)) {
          const be = b;
          bt(
            () => Dt(H, N, be),
            S
          );
        }
        (b.shapeFlag & 256 || N && sn(N.vnode) && N.vnode.shapeFlag & 256) && p.a && bt(p.a, S), p.isMounted = !0, b = _ = k = null;
      }
    };
    p.scope.on();
    const I = p.effect = new So(L);
    p.scope.off();
    const T = p.update = I.run.bind(I), K = p.job = I.runIfDirty.bind(I);
    K.i = p, K.id = p.uid, I.scheduler = () => Ji(K), yr(p, !0), T();
  }, he = (p, b, _) => {
    b.component = p;
    const k = p.vnode.props;
    p.vnode = b, p.next = null, fc(p, b.props, k, _), mc(p, b.children, _), er(), vs(p), tr();
  }, ue = (p, b, _, k, S, x, M, L, I = !1) => {
    const T = p && p.children, K = p ? p.shapeFlag : 0, H = b.children, { patchFlag: z, shapeFlag: X } = b;
    if (z > 0) {
      if (z & 128) {
        me(
          T,
          H,
          _,
          k,
          S,
          x,
          M,
          L,
          I
        );
        return;
      } else if (z & 256) {
        Ve(
          T,
          H,
          _,
          k,
          S,
          x,
          M,
          L,
          I
        );
        return;
      }
    }
    X & 8 ? (K & 16 && qe(T, S, x), H !== T && y(_, H)) : K & 16 ? X & 16 ? me(
      T,
      H,
      _,
      k,
      S,
      x,
      M,
      L,
      I
    ) : qe(T, S, x, !0) : (K & 8 && y(_, ""), X & 16 && je(
      H,
      _,
      k,
      S,
      x,
      M,
      L,
      I
    ));
  }, Ve = (p, b, _, k, S, x, M, L, I) => {
    p = p || Ur, b = b || Ur;
    const T = p.length, K = b.length, H = Math.min(T, K);
    let z;
    for (z = 0; z < H; z++) {
      const X = b[z] = I ? Xt(b[z]) : $t(b[z]);
      W(
        p[z],
        X,
        _,
        null,
        S,
        x,
        M,
        L,
        I
      );
    }
    T > K ? qe(
      p,
      S,
      x,
      !0,
      !1,
      H
    ) : je(
      b,
      _,
      k,
      S,
      x,
      M,
      L,
      I,
      H
    );
  }, me = (p, b, _, k, S, x, M, L, I) => {
    let T = 0;
    const K = b.length;
    let H = p.length - 1, z = K - 1;
    for (; T <= H && T <= z; ) {
      const X = p[T], Z = b[T] = I ? Xt(b[T]) : $t(b[T]);
      if (Wr(X, Z))
        W(
          X,
          Z,
          _,
          null,
          S,
          x,
          M,
          L,
          I
        );
      else
        break;
      T++;
    }
    for (; T <= H && T <= z; ) {
      const X = p[H], Z = b[z] = I ? Xt(b[z]) : $t(b[z]);
      if (Wr(X, Z))
        W(
          X,
          Z,
          _,
          null,
          S,
          x,
          M,
          L,
          I
        );
      else
        break;
      H--, z--;
    }
    if (T > H) {
      if (T <= z) {
        const X = z + 1, Z = X < K ? b[X].el : k;
        for (; T <= z; )
          W(
            null,
            b[T] = I ? Xt(b[T]) : $t(b[T]),
            _,
            Z,
            S,
            x,
            M,
            L,
            I
          ), T++;
      }
    } else if (T > z)
      for (; T <= H; )
        Be(p[T], S, x, !0), T++;
    else {
      const X = T, Z = T, O = /* @__PURE__ */ new Map();
      for (T = Z; T <= z; T++) {
        const Re = b[T] = I ? Xt(b[T]) : $t(b[T]);
        Re.key != null && O.set(Re.key, T);
      }
      let N, $ = 0;
      const Q = z - Z + 1;
      let ie = !1, be = 0;
      const ce = new Array(Q);
      for (T = 0; T < Q; T++) ce[T] = 0;
      for (T = X; T <= H; T++) {
        const Re = p[T];
        if ($ >= Q) {
          Be(Re, S, x, !0);
          continue;
        }
        let ke;
        if (Re.key != null)
          ke = O.get(Re.key);
        else
          for (N = Z; N <= z; N++)
            if (ce[N - Z] === 0 && Wr(Re, b[N])) {
              ke = N;
              break;
            }
        ke === void 0 ? Be(Re, S, x, !0) : (ce[ke - Z] = T + 1, ke >= be ? be = ke : ie = !0, W(
          Re,
          b[ke],
          _,
          null,
          S,
          x,
          M,
          L,
          I
        ), $++);
      }
      const Ne = ie ? _c(ce) : Ur;
      for (N = Ne.length - 1, T = Q - 1; T >= 0; T--) {
        const Re = Z + T, ke = b[Re], dt = b[Re + 1], It = Re + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          dt.el || da(dt)
        ) : k;
        ce[T] === 0 ? W(
          null,
          ke,
          _,
          It,
          S,
          x,
          M,
          L,
          I
        ) : ie && (N < 0 || T !== Ne[N] ? we(ke, _, It, 2) : N--);
      }
    }
  }, we = (p, b, _, k, S = null) => {
    const { el: x, type: M, transition: L, children: I, shapeFlag: T } = p;
    if (T & 6) {
      we(p.component.subTree, b, _, k);
      return;
    }
    if (T & 128) {
      p.suspense.move(b, _, k);
      return;
    }
    if (T & 64) {
      M.move(p, b, _, nt);
      return;
    }
    if (M === se) {
      n(x, b, _);
      for (let H = 0; H < I.length; H++)
        we(I[H], b, _, k);
      n(p.anchor, b, _);
      return;
    }
    if (M === hi) {
      D(p, b, _);
      return;
    }
    if (k !== 2 && T & 1 && L)
      if (k === 0)
        L.persisted && !x[fi] ? n(x, b, _) : (L.beforeEnter(x), n(x, b, _), bt(() => L.enter(x), S));
      else {
        const { leave: H, delayLeave: z, afterLeave: X } = L, Z = () => {
          p.ctx.isUnmounted ? i(x) : n(x, b, _);
        }, O = () => {
          const N = x._isLeaving || !!x[fi];
          x._isLeaving && x[fi](
            !0
            /* cancelled */
          ), L.persisted && !N ? Z() : H(x, () => {
            Z(), X && X();
          });
        };
        z ? z(x, Z, O) : O();
      }
    else
      n(x, b, _);
  }, Be = (p, b, _, k = !1, S = !1) => {
    const {
      type: x,
      props: M,
      ref: L,
      children: I,
      dynamicChildren: T,
      shapeFlag: K,
      patchFlag: H,
      dirs: z,
      cacheIndex: X,
      memo: Z
    } = p;
    if (H === -2 && (S = !1), L != null && (er(), nn(L, null, _, p, !0), tr()), X != null && (b.renderCache[X] = void 0), K & 256) {
      b.ctx.deactivate(p);
      return;
    }
    const O = K & 1 && z, N = !sn(p);
    let $;
    if (N && ($ = M && M.onVnodeBeforeUnmount) && Dt($, b, p), K & 6)
      Rt(p.component, _, k);
    else {
      if (K & 128) {
        p.suspense.unmount(_, k);
        return;
      }
      O && br(p, null, b, "beforeUnmount"), K & 64 ? p.type.remove(
        p,
        b,
        _,
        nt,
        k
      ) : T && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !T.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== se || H > 0 && H & 64) ? qe(
        T,
        b,
        _,
        !1,
        !0
      ) : (x === se && H & 384 || !S && K & 16) && qe(I, b, _), k && Ye(p);
    }
    const Q = Z != null && X == null;
    (N && ($ = M && M.onVnodeUnmounted) || O || Q) && bt(() => {
      $ && Dt($, b, p), O && br(p, null, b, "unmounted"), Q && (p.el = null);
    }, _);
  }, Ye = (p) => {
    const { type: b, el: _, anchor: k, transition: S } = p;
    if (b === se) {
      de(_, k);
      return;
    }
    if (b === hi) {
      V(p);
      return;
    }
    const x = () => {
      i(_), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (p.shapeFlag & 1 && S && !S.persisted) {
      const { leave: M, delayLeave: L } = S, I = () => M(_, x);
      L ? L(p.el, x, I) : I();
    } else
      x();
  }, de = (p, b) => {
    let _;
    for (; p !== b; )
      _ = P(p), i(p), p = _;
    i(b);
  }, Rt = (p, b, _) => {
    const { bum: k, scope: S, job: x, subTree: M, um: L, m: I, a: T } = p;
    Os(I), Os(T), k && kn(k), S.stop(), x && (x.flags |= 8, Be(M, p, b, _)), L && bt(L, b), bt(() => {
      p.isUnmounted = !0;
    }, b);
  }, qe = (p, b, _, k = !1, S = !1, x = 0) => {
    for (let M = x; M < p.length; M++)
      Be(p[M], b, _, k, S);
  }, ut = (p) => {
    if (p.shapeFlag & 6)
      return ut(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const b = P(p.anchor || p.el), _ = b && b[Ul];
    return _ ? P(_) : b;
  };
  let Tt = !1;
  const wt = (p, b, _) => {
    let k;
    p == null ? b._vnode && (Be(b._vnode, null, null, !0), k = b._vnode.component) : W(
      b._vnode || null,
      p,
      b,
      null,
      null,
      null,
      _
    ), b._vnode = p, Tt || (Tt = !0, vs(k), $o(), Tt = !1);
  }, nt = {
    p: W,
    um: Be,
    m: we,
    r: Ye,
    mt: St,
    mc: je,
    pc: ue,
    pbc: Ie,
    n: ut,
    o: e
  };
  return {
    render: wt,
    hydrate: void 0,
    createApp: rc(wt)
  };
}
function pi({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function yr({ effect: e, job: t }, r) {
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
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[s] = Xt(i[s]), c.el = o.el), !r && c.patchFlag !== -2 && ua(o, c)), c.type === Zn && (c.patchFlag === -1 && (c = i[s] = Xt(c)), c.el = o.el), c.type === nr && !c.el && (c.el = o.el);
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
function Os(e) {
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
  t && t.pendingBranch ? ee(e) ? t.effects.push(...e) : t.effects.push(e) : Ol(e);
}
const se = /* @__PURE__ */ Symbol.for("v-fgt"), Zn = /* @__PURE__ */ Symbol.for("v-txt"), nr = /* @__PURE__ */ Symbol.for("v-cmt"), hi = /* @__PURE__ */ Symbol.for("v-stc"), Cr = [];
let Et = null;
function C(e = !1) {
  Cr.push(Et = e ? null : []);
}
function ha() {
  Cr.pop(), Et = Cr[Cr.length - 1] || null;
}
let un = 1;
function Ns(e, t = !1) {
  un += e, e < 0 && Et && t && (Et.hasOnce = !0);
}
function ma(e) {
  return e.dynamicChildren = un > 0 ? Et || Ur : null, ha(), un > 0 && Et && Et.push(e), e;
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
function Wr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ya = ({ key: e }) => e ?? null, Nn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Ue(e) || /* @__PURE__ */ et(e) || ae(e) ? { i: xt, r: e, k: t, f: !!r } : e : null);
function l(e, t = null, r = null, n = 0, i = null, s = e === se ? 0 : 1, o = !1, c = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ya(t),
    ref: t && Nn(t),
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
    ctx: xt
  };
  return c ? (Fn(d, r), s & 128 && e.normalize(d)) : r && (d.shapeFlag |= Ue(r) ? 8 : 16), un > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Et && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Et.push(d), d;
}
const Qt = Sc;
function Sc(e, t = null, r = null, n = 0, i = null, s = !1) {
  if ((!e || e === Gl) && (e = nr), ba(e)) {
    const c = Vr(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Fn(c, r), un > 0 && !s && Et && (c.shapeFlag & 6 ? Et[Et.indexOf(e)] = c : Et.push(c)), c.patchFlag = -2, c;
  }
  if (Mc(e) && (e = e.__vccOpts), t) {
    t = Tc(t);
    let { class: c, style: d } = t;
    c && !Ue(c) && (t.class = Dr(c)), Te(d) && (/* @__PURE__ */ Xi(d) && !ee(d) && (d = tt({}, d)), t.style = Bi(d));
  }
  const o = Ue(e) ? 1 : pa(e) ? 128 : Yn(e) ? 64 : Te(e) ? 4 : ae(e) ? 2 : 0;
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
  return e ? /* @__PURE__ */ Xi(e) || ia(e) ? tt({}, e) : e : null;
}
function Vr(e, t, r = !1, n = !1) {
  const { props: i, ref: s, patchFlag: o, children: c, transition: d } = e, v = t ? wc(i || {}, t) : i, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && ya(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && s ? ee(s) ? s.concat(Nn(t)) : [s, Nn(t)] : Nn(t)
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
    ssContent: e.ssContent && Vr(e.ssContent),
    ssFallback: e.ssFallback && Vr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && Zi(
    y,
    d.clone(y)
  ), y;
}
function ye(e = " ", t = 0) {
  return Qt(Zn, null, e, t);
}
function fe(e = "", t = !1) {
  return t ? (C(), Ec(nr, null, e)) : Qt(nr, null, e);
}
function $t(e) {
  return e == null || typeof e == "boolean" ? Qt(nr) : ee(e) ? Qt(
    se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ba(e) ? Xt(e) : Qt(Zn, null, String(e));
}
function Xt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vr(e);
}
function Fn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ee(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Fn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !ia(t) ? t._ctx = xt : i === 3 && xt && (xt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ae(t)) {
    if (n & 65) {
      Fn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: xt }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [ye(t)]) : r = 8;
  e.children = t, e.shapeFlag |= r;
}
function wc(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = Dr([t.class, n.class]));
      else if (i === "style")
        t.style = Bi([t.style, n.style]);
      else if (Vn(i)) {
        const s = t[i], o = n[i];
        o && s !== o && !(ee(s) && s.includes(o)) ? t[i] = s ? [].concat(s, o) : o : o == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Bn(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Dt(e, t, r, n = null) {
  Mt(e, t, 7, [
    r,
    n
  ]);
}
const Cc = Qo();
let xc = 0;
function Ac(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Cc, s = {
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
let lt = null;
const Rc = () => lt || xt;
let Hn, fn;
{
  const e = Wn(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (s) => {
      i.length > 1 ? i.forEach((o) => o(s)) : i[0](s);
    };
  };
  Hn = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => lt = r
  ), fn = t(
    "__VUE_SSR_SETTERS__",
    (r) => dn = r
  );
}
const mn = (e) => {
  const t = lt;
  return Hn(e), e.scope.on(), () => {
    e.scope.off(), Hn(t);
  };
}, Ps = () => {
  lt && lt.scope.off(), Hn(null);
};
function ga(e) {
  return e.vnode.shapeFlag & 4;
}
let dn = !1;
function kc(e, t = !1, r = !1) {
  t && fn(t);
  const { props: n, children: i } = e.vnode, s = ga(e);
  uc(e, n, s, t), hc(e, i, r || t);
  const o = s ? Oc(e, t) : void 0;
  return t && fn(!1), o;
}
function Oc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yl);
  const { setup: n } = r;
  if (n) {
    er();
    const i = e.setupContext = n.length > 1 ? Pc(e) : null, s = mn(e), o = hn(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), c = ho(o);
    if (tr(), s(), (c || e.sp) && !sn(e) && Wo(e), c) {
      if (o.then(Ps, Ps), t)
        return o.then((d) => {
          fn(!0);
          try {
            Ms(e, d, t);
          } finally {
            fn(!1);
          }
        }).catch((d) => {
          Gn(d, e, 0);
        });
      e.asyncDep = o;
    } else
      Ms(e, o);
  } else
    _a(e);
}
function Ms(e, t, r) {
  ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Te(t) && (e.setupState = Uo(t)), _a(e);
}
function _a(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Vt);
  {
    const i = mn(e);
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
function Qn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Uo(_l(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in on)
        return on[r](e);
    },
    has(t, r) {
      return r in t || r in on;
    }
  })) : e.proxy;
}
function Mc(e) {
  return ae(e) && "__vccOpts" in e;
}
const J = (e, t) => /* @__PURE__ */ Cl(e, t, dn), Ic = "3.5.42";
let Di;
const Is = typeof window < "u" && window.trustedTypes;
if (Is)
  try {
    Di = /* @__PURE__ */ Is.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const va = Di ? (e) => Di.createHTML(e) : (e) => e, Lc = "http://www.w3.org/2000/svg", Uc = "http://www.w3.org/1998/Math/MathML", Yt = typeof document < "u" ? document : null, Ls = Yt && /* @__PURE__ */ Yt.createElement("template"), Dc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Yt.createElementNS(Lc, e) : t === "mathml" ? Yt.createElementNS(Uc, e) : r ? Yt.createElement(e, { is: r }) : Yt.createElement(e);
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
      Ls.innerHTML = va(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const c = Ls.content;
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
          r[c] == null && Zr(n, c, "");
        }
      else
        for (const o in t)
          r[o] == null && Zr(n, o, "");
    for (const o in r) {
      o === "display" && (s = !0);
      const c = r[o];
      c != null ? zc(
        e,
        o,
        !Ue(t) && t ? t[o] : void 0,
        c
      ) || Zr(n, o, c) : Zr(n, o, "");
    }
  } else if (i) {
    if (t !== r) {
      const o = n[jc];
      o && (r += ";" + o), n.cssText = r, s = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  Us in e && (e[Us] = s ? n.display : "", e[$c] && (n.display = "none"));
}
const Cn = /\s*!important$/;
function Zr(e, t, r) {
  if (ee(r))
    r.forEach((n) => Zr(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    Cn.test(r) ? e.setProperty(t, r.replace(Cn, ""), "important") : e.setProperty(t, r);
  else {
    const n = qc(e, t);
    Cn.test(r) ? e.setProperty(
      Ar(n),
      r.replace(Cn, ""),
      "important"
    ) : e[n] = r;
  }
}
const Ds = ["Webkit", "Moz", "ms"], mi = {};
function qc(e, t) {
  const r = mi[t];
  if (r)
    return r;
  let n = Ot(t);
  if (n !== "filter" && n in e)
    return mi[t] = n;
  n = yo(n);
  for (let i = 0; i < Ds.length; i++) {
    const s = Ds[i] + n;
    if (s in e)
      return mi[t] = s;
  }
  return t;
}
function zc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ue(n) && r === n;
}
const Fs = "http://www.w3.org/1999/xlink";
function Hs(e, t, r, n, i, s = Xa(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Fs, t.slice(6, t.length)) : e.setAttributeNS(Fs, t, r) : r == null || s && !_o(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Bt(r) ? String(r) : r
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
function Er(e, t, r, n) {
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
      Er(e, c, v, d);
    } else o && (Wc(e, c, o, d), s[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ar(e.slice(2)), t];
}
let bi = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => bi || (Jc.then(() => bi = 0), bi = Date.now());
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
        v && Mt(
          v,
          t,
          5,
          c
        );
      }
    } else
      Mt(
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
  t === "class" ? Hc(e, n, o) : t === "style" ? Bc(e, r, n) : Vn(t) ? Bn(t) || Kc(e, t, r, n, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, o)) ? ($s(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Hs(e, t, n, o, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ue(n))) ? $s(e, Ot(t), n, s, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Hs(e, t, n, o));
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
  const n = Ot(t);
  return Array.isArray(r) ? r.some((i) => Ot(i) === n) : Object.keys(r).some((i) => Ot(i) === n);
}
const $n = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ee(t) ? (r) => kn(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function Bs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Sr = /* @__PURE__ */ Symbol("_assign"), xn = /* @__PURE__ */ Symbol("_initialValue");
function yi(e, t, r) {
  return t && (e = e.trim()), r && (e = zn(e)), e;
}
const gi = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e.parentNode && (e.type === "text" ? e[xn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[xn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Sr] = $n(i);
    const s = n || i.props && i.props.type === "number";
    Er(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Sr](yi(e.value, r, s));
    }), (r || s) && Er(e, "change", () => {
      e.value = yi(e.value, r, s);
    }), t || (Er(e, "compositionstart", nu), Er(e, "compositionend", Bs), Er(e, "change", Bs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const i = t ?? "", s = e[xn];
    delete e[xn], s !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== s ? e[Sr](yi(e.value, r, n)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: s } }, o) {
    if (e[Sr] = $n(o), e.composing) return;
    const c = (s || e.type === "number") && !/^0\d/.test(e.value) ? zn(e.value) : e.value, d = t ?? "";
    if (c === d)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === d) || (e.value = d);
  }
}, st = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, Er(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (d) => d.selected).map(
        (d) => r ? zn(jn(d)) : jn(d)
      ), s = e.multiple, o = s ? xr(e._modelValue) ? new Set(i) : i : i[0], c = e._pendingValue = [
        s,
        s ? ee(o) ? i.slice() : i : o
      ];
      try {
        e[Sr](o);
      } finally {
        Fo(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[Sr] = $n(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    qs(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[Sr] = $n(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !iu(t, r[1], r[0])) && qs(e, t);
  }
};
function iu(e, t, r) {
  if (!r || ee(e)) return pr(e, t);
  if (xr(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function qs(e, t) {
  const r = e.multiple, n = ee(t);
  if (!(r && !n && !xr(t))) {
    for (let i = 0, s = e.options.length; i < s; i++) {
      const o = e.options[i], c = jn(o);
      if (r)
        if (n) {
          const d = typeof c;
          d === "string" || d === "number" ? o.selected = t.some((v) => String(v) === String(c)) : o.selected = Za(t, c) > -1;
        } else
          o.selected = t.has(c);
      else if (pr(jn(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function jn(e) {
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
}, An = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...s) => {
    for (let o = 0; o < t.length; o++) {
      const c = ou[t[o]];
      if (c && c(i, t)) return;
    }
    return e(i, ...s);
  }));
}, au = /* @__PURE__ */ tt({ patchProp: eu }, Dc);
let zs;
function lu() {
  return zs || (zs = bc(au));
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
let $e = Object.freeze, We = Object.seal, Lr = Object.create, Sa = typeof Reflect < "u" && Reflect, Fi = Sa.apply, Hi = Sa.construct;
$e || ($e = function(t) {
  return t;
});
We || (We = function(t) {
  return t;
});
Fi || (Fi = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Hi || (Hi = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const vr = He(Array.prototype.forEach), Eu = He(Array.prototype.lastIndexOf), Gs = He(Array.prototype.pop), Kr = He(Array.prototype.push), Su = He(Array.prototype.splice), $r = Array.isArray, Qr = He(String.prototype.toLowerCase), _i = He(String.prototype.toString), Ys = He(String.prototype.match), Gr = He(String.prototype.replace), Xs = He(String.prototype.indexOf), Tu = He(String.prototype.trim), wu = He(Number.prototype.toString), Cu = He(Boolean.prototype.toString), Js = typeof BigInt > "u" ? null : He(BigInt.prototype.toString), Zs = typeof Symbol > "u" ? null : He(Symbol.prototype.toString), yt = He(Object.prototype.hasOwnProperty), Yr = He(Object.prototype.toString), Ze = He(RegExp.prototype.test), gr = xu(TypeError);
function He(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Fi(e, t, n);
  };
}
function xu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Hi(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Qr;
  if (Ks && Ks(e, null), !$r(t))
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
    yt(e, t) || (e[t] = null);
  return e;
}
function vt(e) {
  const t = Lr(null);
  for (const n of Ea(e)) {
    var r = bu(n, 2);
    const i = r[0], s = r[1];
    yt(e, i) && ($r(s) ? t[i] = Au(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = vt(s) : t[i] = s);
  }
  return t;
}
function Ru(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return wu(e);
    case "boolean":
      return Cu(e);
    case "bigint":
      return Js ? Js(e) : "0";
    case "symbol":
      return Zs ? Zs(e) : "Symbol()";
    case "undefined":
      return Yr(e);
    case "function":
    case "object": {
      if (e === null)
        return Yr(e);
      const t = e, r = kt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Yr(n);
      }
      return Yr(e);
    }
    default:
      return Yr(e);
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
function ku(e) {
  try {
    return Ze(e, ""), !0;
  } catch {
    return !1;
  }
}
const Qs = $e(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), vi = $e(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ei = $e(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ou = $e(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Si = $e(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Nu = $e(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), eo = $e(["#text"]), to = $e(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ti = $e(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ro = $e(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Rn = $e(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pu = We(/{{[\w\W]*|^[\w\W]*}}/g), Mu = We(/<%[\w\W]*|^[\w\W]*%>/g), Iu = We(/\${[\w\W]*/g), Lu = We(/^data-[\-\w.\u00B7-\uFFFF]+$/), Uu = We(/^aria-[\-\w]+$/), no = We(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = We(/^(?:\w+script|data):/i), Fu = We(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = We(/^html$/i), $u = We(/^[a-z][.\w]*(-[.\w]+)+$/i), io = We(/<[/\w!]/g), so = We(/<[/\w]/g), ju = We(/<\/no(script|embed|frames)/i), Vu = We(/\/>/i), _t = {
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
}, Ta = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Bu = $e(pe({}, Ta)), qu = (function() {
  const e = {};
  return vr(Ta, (t) => {
    e[t] = We(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), $e(e);
})(), zu = function() {
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
  return yt(t, r) && $r(t[r]) ? pe(i.base ? vt(i.base) : {}, t[r], i.transform) : n;
}, wi = function(t, r, n) {
  const i = yt(t, r) ? t[r] : void 0;
  return i && typeof i == "object" ? vt(i) : n();
};
function wa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (F) => wa(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== _t.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, c = e.Element, d = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, E = e.trustedTypes, P = c.prototype, j = kt(P, "cloneNode"), re = kt(P, "remove"), W = kt(P, "nextSibling"), oe = kt(P, "childNodes"), ne = kt(P, "parentNode"), q = kt(P, "shadowRoot"), D = kt(P, "attributes"), V = o && o.prototype ? kt(o.prototype, "nodeType") : null, le = o && o.prototype ? kt(o.prototype, "nodeName") : null, Me = o && o.prototype ? kt(o.prototype, "ownerDocument") : null, Oe = function(u) {
    return V ? V(u) : u.nodeType;
  }, je = function(u) {
    return le ? le(u) : u.nodeName;
  };
  if (typeof s == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let Se, Ie = "", rt, ct = !1, Ke = 0;
  const St = function() {
    if (Ke > 0)
      throw gr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Fe = function(u) {
    St(), Ke++;
    try {
      return Se.createHTML(u);
    } finally {
      Ke--;
    }
  }, Le = function(u) {
    St(), Ke++;
    try {
      return Se.createScriptURL(u);
    } finally {
      Ke--;
    }
  }, he = function() {
    return ct || (rt = Wu(E, i), ct = !0), rt;
  }, ue = r, Ve = ue.implementation, me = ue.createNodeIterator, we = ue.createDocumentFragment, Be = ue.getElementsByTagName, Ye = n.importNode;
  let de = oo();
  t.isSupported = typeof Ea == "function" && typeof ne == "function" && Ve && Ve.createHTMLDocument !== void 0;
  const Rt = Pu, qe = Mu, ut = Iu, Tt = Lu, wt = Uu, nt = Du, ft = Fu, p = $u;
  let b = no, _ = null;
  const k = pe({}, [...Qs, ...vi, ...Ei, ...Si, ...eo]);
  let S = null;
  const x = pe({}, [...to, ...Ti, ...ro, ...Rn]);
  let M = Object.seal(Lr(null, {
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
  })), L = null, I = null;
  const T = Object.seal(Lr(null, {
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
  let K = !0, H = !0, z = !1, X = !0, Z = !1, O = !0, N = !1, $ = !1, Q = null, ie = null, be = !1, ce = !1, Ne = !1, Re = !1, ke = !0, dt = !1;
  const It = "user-content-";
  let qt = !0, hr = !1, Xe = {}, gt = null;
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
  let Ct = null;
  const Rr = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Lt = "http://www.w3.org/1998/Math/MathML", zt = "http://www.w3.org/2000/svg", Je = "http://www.w3.org/1999/xhtml";
  let Wt = Je, U = !1, w = null;
  const h = pe({}, [Lt, zt, Je], _i), ge = $e(["mi", "mo", "mn", "ms", "mtext"]);
  let pt = pe({}, ge);
  const Kt = $e(["annotation-xml"]);
  let ei = pe({}, Kt);
  const xa = pe({}, ["title", "style", "font", "a", "script"]);
  let Br = null;
  const Aa = ["application/xhtml+xml", "text/html"], Ra = "text/html";
  let De = null, kr = null;
  const ka = r.createElement("form"), rs = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, ti = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (kr && kr === u)
      return;
    (!u || typeof u != "object") && (u = {}), u = vt(u), Br = // eslint-disable-next-line unicorn/prefer-includes
    Aa.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? Ra : u.PARSER_MEDIA_TYPE, De = Br === "application/xhtml+xml" ? _i : Qr, _ = cr(u, "ALLOWED_TAGS", k, {
      transform: De
    }), S = cr(u, "ALLOWED_ATTR", x, {
      transform: De
    }), w = cr(u, "ALLOWED_NAMESPACES", h, {
      transform: _i
    }), Ct = cr(u, "ADD_URI_SAFE_ATTR", Rr, {
      transform: De,
      base: Rr
    }), or = cr(u, "ADD_DATA_URI_TAGS", ar, {
      transform: De,
      base: ar
    }), gt = cr(u, "FORBID_CONTENTS", sr, {
      transform: De
    }), L = cr(u, "FORBID_TAGS", vt({}), {
      transform: De
    }), I = cr(u, "FORBID_ATTR", vt({}), {
      transform: De
    }), Xe = yt(u, "USE_PROFILES") ? u.USE_PROFILES && typeof u.USE_PROFILES == "object" ? vt(u.USE_PROFILES) : u.USE_PROFILES : !1, K = u.ALLOW_ARIA_ATTR !== !1, H = u.ALLOW_DATA_ATTR !== !1, z = u.ALLOW_UNKNOWN_PROTOCOLS || !1, X = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = u.SAFE_FOR_TEMPLATES || !1, O = u.SAFE_FOR_XML !== !1, N = u.WHOLE_DOCUMENT || !1, ce = u.RETURN_DOM || !1, Ne = u.RETURN_DOM_FRAGMENT || !1, Re = u.RETURN_TRUSTED_TYPE || !1, be = u.FORCE_BODY || !1, ke = u.SANITIZE_DOM !== !1, dt = u.SANITIZE_NAMED_PROPS || !1, qt = u.KEEP_CONTENT !== !1, hr = u.IN_PLACE || !1, b = ku(u.ALLOWED_URI_REGEXP) ? u.ALLOWED_URI_REGEXP : no, Wt = typeof u.NAMESPACE == "string" ? u.NAMESPACE : Je, pt = wi(
      u,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => pe({}, ge)
      // Default built-in map
    ), ei = wi(
      u,
      "HTML_INTEGRATION_POINTS",
      () => pe({}, Kt)
      // Default built-in map
    );
    const g = wi(u, "CUSTOM_ELEMENT_HANDLING", () => Lr(null));
    if (M = Lr(null), yt(g, "tagNameCheck") && rs(g.tagNameCheck) && (M.tagNameCheck = g.tagNameCheck), yt(g, "attributeNameCheck") && rs(g.attributeNameCheck) && (M.attributeNameCheck = g.attributeNameCheck), yt(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), We(M), Z && (H = !1), Ne && (ce = !0), Xe && (_ = pe({}, eo), S = Lr(null), Xe.html === !0 && (pe(_, Qs), pe(S, to)), Xe.svg === !0 && (pe(_, vi), pe(S, Ti), pe(S, Rn)), Xe.svgFilters === !0 && (pe(_, Ei), pe(S, Ti), pe(S, Rn)), Xe.mathMl === !0 && (pe(_, Si), pe(S, ro), pe(S, Rn))), T.tagCheck = null, T.attributeCheck = null, yt(u, "ADD_TAGS") && (typeof u.ADD_TAGS == "function" ? T.tagCheck = u.ADD_TAGS : $r(u.ADD_TAGS) && (_ === k && (_ = vt(_)), pe(_, u.ADD_TAGS, De))), yt(u, "ADD_ATTR") && (typeof u.ADD_ATTR == "function" ? T.attributeCheck = u.ADD_ATTR : $r(u.ADD_ATTR) && (S === x && (S = vt(S)), pe(S, u.ADD_ATTR, De))), yt(u, "ADD_FORBID_CONTENTS") && $r(u.ADD_FORBID_CONTENTS) && (gt === sr && (gt = vt(gt)), pe(gt, u.ADD_FORBID_CONTENTS, De)), qt && (_["#text"] = !0), N && pe(_, ["html", "head", "body"]), _.table && (pe(_, ["tbody"]), delete L.tbody), u.TRUSTED_TYPES_POLICY) {
      if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw gr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw gr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const R = Se;
      Se = u.TRUSTED_TYPES_POLICY;
      try {
        Ie = Fe("");
      } catch (B) {
        throw Se = R, B;
      }
    } else u.TRUSTED_TYPES_POLICY === null ? (Se = void 0, Ie = "") : (Se === void 0 && (Se = he()), Se && typeof Ie == "string" && (Ie = Fe("")));
    $e && $e(u), kr = u;
  }, ns = pe({}, [...vi, ...Ei, ...Ou]), is = pe({}, [...Si, ...Nu]), Oa = function(u, g, R) {
    return g.namespaceURI === Je ? u === "svg" : g.namespaceURI === Lt ? u === "svg" && (R === "annotation-xml" || pt[R]) : !!ns[u];
  }, Na = function(u, g, R) {
    return g.namespaceURI === Je ? u === "math" : g.namespaceURI === zt ? u === "math" && ei[R] : !!is[u];
  }, Pa = function(u, g, R) {
    return g.namespaceURI === zt && !ei[R] || g.namespaceURI === Lt && !pt[R] ? !1 : !is[u] && (xa[u] || !ns[u]);
  }, Ma = function(u) {
    let g = ne(u);
    (!g || !g.tagName) && (g = {
      namespaceURI: Wt,
      tagName: "template"
    });
    const R = Qr(u.tagName), B = Qr(g.tagName);
    return w[u.namespaceURI] ? u.namespaceURI === zt ? Oa(R, g, B) : u.namespaceURI === Lt ? Na(R, g, B) : u.namespaceURI === Je ? Pa(R, g, B) : !!(Br === "application/xhtml+xml" && w[u.namespaceURI]) : !1;
  }, lr = function(u) {
    Kr(t.removed, {
      element: u
    });
    try {
      ne(u).removeChild(u);
    } catch {
      if (re(u), !ne(u))
        throw gr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
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
  }, bn = function(u) {
    yn(u);
    const g = oe(u);
    if (g) {
      const B = [];
      vr(g, (Y) => {
        Kr(B, Y);
      }), vr(B, (Y) => {
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
  }, mr = function(u, g, R) {
    if (!R)
      try {
        R = g.getAttributeNode(u);
      } catch {
        R = null;
      }
    Kr(t.removed, {
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
  }, yn = function(u) {
    const g = [u];
    for (; g.length > 0; ) {
      const R = g.pop();
      Oe(R) === _t.element && Ia(R);
      const Y = oe(R);
      if (Y)
        for (let te = Y.length - 1; te >= 0; --te)
          g.push(Y[te]);
    }
  }, os = function(u, g) {
    return O ? u === "patchsrc" ? !0 : u === "for" && g !== "label" && g !== "output" : !1;
  }, La = function(u) {
    if (!O)
      return;
    const g = [u];
    for (; g.length > 0; ) {
      const R = g.pop(), B = Oe(R);
      if (B === _t.processingInstruction || B === _t.comment && Ze(so, R.data)) {
        try {
          re(R);
        } catch {
        }
        continue;
      }
      if (B === _t.element) {
        const te = R, xe = De(je(R));
        try {
          te.hasAttribute && te.hasAttribute("patchsrc") && te.removeAttribute("patchsrc"), te.hasAttribute && te.hasAttribute("for") && os("for", xe) && te.removeAttribute("for");
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
    Br === "application/xhtml+xml" && Wt === Je && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const B = Se ? Fe(u) : u;
    if (Wt === Je)
      try {
        g = new y().parseFromString(B, Br);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = Ve.createDocument(Wt, "template", null);
      try {
        g.documentElement.innerHTML = U ? Ie : B;
      } catch {
      }
    }
    const Y = g.body || g.documentElement;
    return u && R && Y.insertBefore(r.createTextNode(R), Y.childNodes[0] || null), Wt === Je ? Be.call(g, N ? "html" : "body")[0] : N ? g.documentElement : Y;
  }, ls = function(u) {
    const g = Me ? Me(u) : u.ownerDocument;
    return me.call(
      g || u,
      u,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, gn = function(u) {
    return u = Gr(u, Rt, " "), u = Gr(u, qe, " "), u = Gr(u, ut, " "), u;
  }, ri = function(u) {
    var g;
    u.normalize();
    const R = Me ? Me(u) : u.ownerDocument, B = me.call(
      R || u,
      u,
      // eslint-disable-next-line no-bitwise
      d.SHOW_TEXT | d.SHOW_COMMENT | d.SHOW_CDATA_SECTION | d.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Y = B.nextNode();
    for (; Y; )
      Y.data = gn(Y.data), Y = B.nextNode();
    const te = (g = u.querySelectorAll) === null || g === void 0 ? void 0 : g.call(u, "template");
    te && vr(te, (xe) => {
      Or(xe.content) && ri(xe.content);
    });
  }, _n = function(u) {
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
      return V(u) === _t.documentFragment;
    } catch {
      return !1;
    }
  }, qr = function(u) {
    if (!V || typeof u != "object" || u === null)
      return !1;
    try {
      return typeof V(u) == "number";
    } catch {
      return !1;
    }
  };
  function Ut(F, u, g) {
    F.length !== 0 && vr(F, (R) => {
      R.call(t, u, g, kr);
    });
  }
  const Ua = function(u, g) {
    return !!(O && u.hasChildNodes() && !qr(u.firstElementChild) && Ze(io, u.textContent) && Ze(io, u.innerHTML) || O && u.namespaceURI === Je && Bu[g] && (qr(u.firstElementChild) || typeof u.textContent == "string" && Ze(qu[g], u.textContent)) || u.nodeType === _t.processingInstruction || O && u.nodeType === _t.comment && Ze(so, u.data));
  }, vn = function(u, g) {
    if (u instanceof RegExp)
      return Ze(u, g);
    if (u instanceof Function) {
      for (var R = arguments.length, B = new Array(R > 2 ? R - 2 : 0), Y = 2; Y < R; Y++)
        B[Y - 2] = arguments[Y];
      return !!u(g, ...B);
    }
    return !1;
  }, Da = function(u, g, R) {
    if (!L[g] && ps(g) && vn(M.tagNameCheck, g))
      return !1;
    if (qt && !gt[g]) {
      const B = ne(u), Y = oe(u);
      if (Y && B) {
        const te = Y.length;
        for (let xe = te - 1; xe >= 0; --xe) {
          const Pe = u === R ? j(Y[xe], !0) : Y[xe];
          B.insertBefore(Pe, W(u));
        }
      }
    }
    return lr(u), !0;
  }, cs = function(u, g, R, B) {
    return u.length === 0 ? g : g === R || g === B ? vt(g) : g;
  }, us = function(u, g) {
    return u === g || ne(u) !== null ? !1 : (hr && yn(u), !0);
  }, fs = function(u, g) {
    if (Ut(de.beforeSanitizeElements, u, null), us(u, g))
      return !0;
    if (_n(u))
      return lr(u), !0;
    const R = De(je(u));
    if (_ = cs(de.uponSanitizeElement, _, k, Q), Ut(de.uponSanitizeElement, u, {
      tagName: R,
      allowedTags: _
    }), us(u, g))
      return !0;
    if (Ua(u, R))
      return lr(u), !0;
    if (L[R] || !(T.tagCheck instanceof Function && T.tagCheck(R)) && !_[R]) {
      const Y = Da(u, R, g);
      return Y === !1 && Ut(de.afterSanitizeElements, u, null), Y;
    }
    if (Oe(u) === _t.element && !Ma(u) || (R === "noscript" || R === "noembed" || R === "noframes") && Ze(ju, u.innerHTML))
      return lr(u), !0;
    if (Z && u.nodeType === _t.text) {
      const Y = gn(u.textContent);
      u.textContent !== Y && (Kr(t.removed, {
        element: u.cloneNode()
      }), u.textContent = Y);
    }
    return Ut(de.afterSanitizeElements, u, null), !1;
  }, ds = function(u, g, R) {
    if (I[g] || os(g, u) || ke && (g === "id" || g === "name") && (R in r || R in ka))
      return !1;
    const B = S[g] || T.attributeCheck instanceof Function && T.attributeCheck(g, u);
    return H && Ze(Tt, g) || K && Ze(wt, g) ? !0 : B ? Ct[g] || Ze(b, Gr(R, ft, "")) || (g === "src" || g === "xlink:href" || g === "href") && u !== "script" && Xs(R, "data:") === 0 && or[u] || z && !Ze(nt, Gr(R, ft, "")) ? !0 : !R : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ps(u) && vn(M.tagNameCheck, u) && vn(M.attributeNameCheck, g, u) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && M.allowCustomizedBuiltInElements && vn(M.tagNameCheck, R)
    );
  }, Fa = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ps = function(u) {
    return !Fa[Qr(u)] && Ze(p, u);
  }, Ha = function(u, g, R, B) {
    if (Se && typeof E == "object" && typeof E.getAttributeType == "function" && !R)
      switch (E.getAttributeType(u, g)) {
        case "TrustedHTML":
          return Fe(B);
        case "TrustedScriptURL":
          return Le(B);
      }
    return B;
  }, $a = function(u, g, R, B) {
    try {
      R ? u.setAttributeNS(R, g, B) : u.setAttribute(g, B), _n(u) ? lr(u) : Gs(t.removed);
    } catch {
      mr(g, u);
    }
  }, hs = function(u) {
    Ut(de.beforeSanitizeAttributes, u, null);
    const g = u.attributes;
    if (!g || _n(u))
      return;
    S = cs(de.uponSanitizeAttribute, S, x, ie);
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
      const te = g[B], xe = te.name, Pe = te.namespaceURI, ht = te.value, mt = De(xe), ii = ht;
      let it = xe === "value" ? ii : Tu(ii);
      if (R.attrName = mt, R.attrValue = it, R.keepAttr = !0, R.forceKeepAttr = void 0, Ut(de.uponSanitizeAttribute, u, R), it = R.attrValue, dt && (mt === "id" || mt === "name") && Xs(it, It) !== 0 && (mr(xe, u, te), it = It + it), O && Ze(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, it)) {
        mr(xe, u, te);
        continue;
      }
      if (mt === "attributename" && Ys(it, "href")) {
        mr(xe, u, te);
        continue;
      }
      if (!R.forceKeepAttr) {
        if (!R.keepAttr) {
          mr(xe, u, te);
          continue;
        }
        if (!X && Ze(Vu, it)) {
          mr(xe, u, te);
          continue;
        }
        if (Z && (it = gn(it)), !ds(Y, mt, it)) {
          mr(xe, u, te);
          continue;
        }
        it = Ha(Y, mt, Pe, it), it !== ii && $a(u, xe, Pe, it);
      }
    }
    Ut(de.afterSanitizeAttributes, u, null);
  }, En = function(u) {
    let g = null;
    const R = ls(u);
    for (Ut(de.beforeSanitizeShadowDOM, u, null); g = R.nextNode(); )
      if (Ut(de.uponSanitizeShadowNode, g, null), fs(g, u), hs(g), Or(g.content) && En(g.content), Oe(g) === _t.element) {
        const B = q(g);
        Or(B) && (ni(B), En(B));
      }
    Ut(de.afterSanitizeShadowDOM, u, null);
  }, ni = function(u) {
    const g = [{
      node: u,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const R = g.pop();
      if (R.shadow) {
        En(R.shadow);
        continue;
      }
      const B = R.node, te = Oe(B) === _t.element, xe = oe(B);
      if (xe)
        for (let Pe = xe.length - 1; Pe >= 0; --Pe)
          g.push({
            node: xe[Pe],
            shadow: null
          });
      if (te) {
        const Pe = le ? le(B) : null;
        if (typeof Pe == "string" && De(Pe) === "template") {
          const ht = B.content;
          Or(ht) && g.push({
            node: ht,
            shadow: null
          });
        }
      }
      if (te) {
        const Pe = q(B);
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
    if (U = !F, U && (F = "<!-->"), typeof F != "string" && !qr(F) && (F = Ru(F), typeof F != "string"))
      throw gr("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    $ ? (_ = Q, S = ie) : ti(u), (de.uponSanitizeElement.length > 0 || de.uponSanitizeAttribute.length > 0) && (_ = vt(_)), de.uponSanitizeAttribute.length > 0 && (S = vt(S)), t.removed = [];
    const te = hr && typeof F != "string" && qr(F);
    if (te) {
      La(F);
      const ht = je(F);
      if (typeof ht == "string") {
        const mt = De(ht);
        if (!_[mt] || L[mt])
          throw bn(F), gr("root node is forbidden and cannot be sanitized in-place");
      }
      if (_n(F))
        throw bn(F), gr("root node is clobbered and cannot be sanitized in-place");
      try {
        ni(F);
      } catch (mt) {
        throw bn(F), mt;
      }
    } else if (qr(F))
      g = as("<!---->"), R = g.ownerDocument.importNode(F, !0), R.nodeType === _t.element && R.nodeName === "BODY" || R.nodeName === "HTML" ? g = R : g.appendChild(R), ni(R);
    else {
      if (!ce && !Z && !N && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return Se && Re ? Fe(F) : F;
      if (g = as(F), !g)
        return ce ? null : Re ? Ie : "";
    }
    g && be && lr(g.firstChild);
    const xe = te ? F : g;
    try {
      const ht = ls(xe);
      for (; B = ht.nextNode(); )
        fs(B, xe), hs(B), Or(B.content) && En(B.content);
    } catch (ht) {
      throw te && (bn(F), vr(t.removed, (mt) => {
        mt.element && yn(mt.element);
      })), ht;
    }
    if (te)
      return vr(t.removed, (ht) => {
        ht.element && yn(ht.element);
      }), Z && ri(F), F;
    if (ce) {
      if (Z && ri(g), Ne)
        for (Y = we.call(g.ownerDocument); g.firstChild; )
          Y.appendChild(g.firstChild);
      else
        Y = g;
      return (S.shadowroot || S.shadowrootmode) && (Y = Ye.call(n, Y, !0)), Y;
    }
    let Pe = N ? g.outerHTML : g.innerHTML;
    return N && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Ze(Hu, g.ownerDocument.doctype.name) && (Pe = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Pe), Z && (Pe = gn(Pe)), Se && Re ? Fe(Pe) : Pe;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ti(F), $ = !0, Q = _, ie = S;
  }, t.clearConfig = function() {
    kr = null, $ = !1, Q = null, ie = null, Se = rt, Ie = "";
  }, t.isValidAttribute = function(F, u, g) {
    kr || ti({});
    const R = De(F), B = De(u);
    return ds(R, B, g);
  }, t.addHook = function(F, u) {
    typeof u == "function" && yt(de, F) && Kr(de[F], u);
  }, t.removeHook = function(F, u) {
    if (yt(de, F)) {
      if (u !== void 0) {
        const g = Eu(de[F], u);
        return g === -1 ? void 0 : Su(de[F], g, 1)[0];
      }
      return Gs(de[F]);
    }
  }, t.removeHooks = function(F) {
    yt(de, F) && (de[F] = []);
  }, t.removeAllHooks = function() {
    de = oo();
  }, t;
}
var Ku = wa();
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ci, ao;
function Yu() {
  if (ao) return Ci;
  ao = 1;
  var e = /["'&<>]/;
  Ci = t;
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
  return Ci;
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
  }, d = (W) => W, v = (c.sanitize ? Ku.sanitize : d) || d, y = c.escape ? lo : d, E = (W) => typeof W == "string" || typeof W == "number", P = (W, oe, ne) => W.replace(/%n/g, "" + ne).replace(/{([^{}]*)}/g, (q, D) => {
    if (oe === void 0 || !(D in oe))
      return y(q);
    const V = oe[D];
    return E(V) ? y(`${V}`) : typeof V == "object" && E(V.value) ? (V.escape !== !1 ? lo : d)(`${V.value}`) : y(q);
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
}, Ef = ["disabled"], Sf = { class: "library-actions-health-links" }, Tf = ["href"], wf = ["href"], Cf = ["href"], xf = ["href"], Af = { class: "library-actions-health-grid" }, Rf = { class: "library-import-health-number" }, kf = { class: "library-import-health-number" }, Of = { class: "library-muted" }, Nf = { class: "library-muted" }, Pf = { class: "library-muted" }, Mf = {
  key: 3,
  class: "library-import-health-examples"
}, If = {
  class: "library-review-queue-actions",
  "aria-label": "Review queue shortcuts"
}, Lf = { class: "library-muted" }, Uf = ["href"], Df = ["href"], Ff = ["action"], Hf = ["value"], $f = {
  type: "submit",
  class: "button secondary"
}, jf = { class: "library-muted" }, Vf = ["href"], Bf = ["action"], qf = ["value"], zf = {
  type: "submit",
  class: "button secondary"
}, Wf = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, Kf = {
  class: "library-useful-views",
  "aria-labelledby": "library-useful-views-heading"
}, Gf = { class: "library-useful-views-copy" }, Yf = { class: "library-muted library-catalogue-eyebrow" }, Xf = { id: "library-useful-views-heading" }, Jf = { class: "library-muted" }, Zf = { class: "library-muted" }, Qf = ["aria-label"], ed = ["href", "title"], td = { class: "library-useful-view-count" }, rd = ["aria-label"], nd = ["name", "value"], id = { class: "library-quick-search-row" }, sd = { class: "library-quick-filter-search" }, od = ["aria-label"], ad = { class: "library-quick-filter-options" }, ld = { class: "library-quick-filter-option-grid" }, cd = { value: "title" }, ud = { value: "recent" }, fd = { value: "publicationDate" }, dd = { value: "publication" }, pd = { value: "lastOpened" }, hd = { value: "format" }, md = { value: "" }, bd = { value: "1" }, yd = ["value"], gd = ["value"], _d = ["aria-label"], vd = ["aria-label"], Ed = { class: "library-filter-panel" }, Sd = { class: "library-filter-panel-summary" }, Td = ["aria-label"], wd = {
  id: "library-search-scope",
  class: "library-muted library-search-scope"
}, Cd = { value: "" }, xd = ["value"], Ad = { value: "" }, Rd = ["value"], kd = { value: "" }, Od = ["value"], Nd = { value: "" }, Pd = ["value"], Md = { value: "" }, Id = ["value"], Ld = { value: "" }, Ud = ["value"], Dd = { value: "" }, Fd = ["value"], Hd = { value: "" }, $d = ["value"], jd = { value: "" }, Vd = ["value"], Bd = { value: "" }, qd = ["value"], zd = { value: "" }, Wd = { value: "1" }, Kd = { value: "" }, Gd = { value: "1" }, Yd = { value: "title" }, Xd = { value: "recent" }, Jd = { value: "publicationDate" }, Zd = { value: "publication" }, Qd = { value: "lastOpened" }, ep = { value: "format" }, tp = ["value"], rp = ["value"], np = ["aria-label"], ip = ["aria-label"], sp = ["href"], op = {
  key: 1,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, ap = { class: "library-muted library-catalogue-eyebrow" }, lp = { id: "library-discovery-heading" }, cp = { class: "library-muted" }, up = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, fp = { key: 0 }, dp = { key: 1 }, pp = { key: 2 }, hp = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, mp = { key: 0 }, bp = { key: 1 }, yp = {
  href: "/apps/library/",
  class: "button secondary"
}, gp = { class: "library-catalogue-status-row" }, _p = { class: "library-muted library-filter-result-summary" }, vp = { key: 0 }, Ep = { href: "?" }, Sp = ["aria-label"], Tp = { class: "library-pagination-range" }, wp = { key: 0 }, Cp = ["href"], xp = {
  key: 1,
  class: "library-muted"
}, Ap = ["href"], Rp = {
  key: 3,
  class: "library-muted"
}, kp = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, Op = ["aria-label"], Np = { class: "library-settings-count-badge" }, Pp = ["action"], Mp = ["value"], Ip = ["name", "value"], Lp = ["placeholder"], Up = {
  type: "submit",
  class: "button primary"
}, Dp = { class: "library-muted" }, Fp = ["action"], Hp = ["value"], $p = ["name", "value"], jp = ["placeholder"], Vp = {
  type: "submit",
  class: "button secondary"
}, Bp = { class: "library-muted" }, qp = ["action"], zp = ["value"], Wp = ["name", "value"], Kp = {
  type: "submit",
  class: "button secondary"
}, Gp = { class: "library-muted" }, Yp = ["action"], Xp = ["value"], Jp = ["name", "value"], Zp = { name: "bulkEditField" }, Qp = { value: "publicationType" }, eh = { value: "subtitle" }, th = { value: "creators" }, rh = { value: "publication" }, nh = { value: "publicationDate" }, ih = { value: "language" }, sh = { value: "publisher" }, oh = { value: "genres" }, ah = { value: "classifications" }, lh = {
  type: "submit",
  class: "button secondary"
}, ch = { class: "library-muted" }, uh = ["action"], fh = ["value"], dh = ["name", "value"], ph = {
  type: "submit",
  class: "button secondary"
}, hh = { class: "library-muted" }, mh = { class: "library-discovery-shortcuts" }, bh = { class: "library-discovery-shortcut-grid" }, yh = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, gh = { id: "library-periodical-groups-heading" }, _h = { class: "library-muted" }, vh = ["href"], Eh = { class: "library-muted" }, Sh = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, Th = { id: "library-periodical-groups-empty-heading" }, wh = { class: "library-muted" }, Ch = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, xh = { id: "library-year-groups-heading" }, Ah = ["href"], Rh = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, kh = { id: "library-creator-groups-heading" }, Oh = ["href"], Nh = ["aria-label"], Ph = ["href", "aria-label"], Mh = { class: "library-muted" }, Ih = { class: "library-empty-actions" }, Lh = ["href"], Uh = { class: "library-muted" }, Dh = { class: "library-muted" }, Fh = { class: "library-empty-actions" }, Hh = ["href"], $h = { class: "library-muted" }, jh = { class: "library-empty-actions" }, Vh = ["href"], Bh = {
  href: "?",
  class: "button primary"
}, qh = { class: "library-muted" }, zh = { class: "library-empty-actions" }, Wh = ["href"], Kh = {
  key: 4,
  class: "library-cover-gallery"
}, Gh = ["href", "aria-label"], Yh = ["src", "alt"], Xh = ["action", "onSubmit"], Jh = ["value"], Zh = ["value"], Qh = ["aria-pressed", "title", "aria-label", "onClick"], em = { class: "library-cover-summary" }, tm = { class: "library-cover-primary" }, rm = ["aria-label"], nm = ["href"], im = ["onToggle"], sm = ["aria-label"], om = { class: "library-cover-meta" }, am = {
  key: 0,
  class: "library-creator"
}, lm = { class: "library-cover-detail-list" }, cm = { class: "library-cover-detail-chip" }, um = {
  key: 0,
  class: "library-cover-detail-chip"
}, fm = {
  key: 1,
  class: "library-cover-detail-chip"
}, dm = {
  key: 2,
  class: "library-cover-detail-chip"
}, pm = {
  key: 3,
  class: "library-cover-detail-chip"
}, hm = {
  key: 4,
  class: "library-cover-detail-chip"
}, mm = {
  key: 5,
  class: "library-cover-detail-chip"
}, bm = {
  key: 6,
  class: "library-cover-detail-chip"
}, ym = {
  key: 1,
  class: "library-muted library-cover-description"
}, gm = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, _m = { key: 0 }, vm = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Em = {
  key: 0,
  class: "library-muted"
}, Sm = { class: "library-cover-actions" }, Tm = ["href"], wm = ["href"], Cm = ["href"], xm = ["aria-label"], Am = { class: "library-pagination-range" }, Rm = { key: 0 }, km = ["href"], Om = {
  key: 1,
  class: "library-muted"
}, Nm = ["href"], Pm = {
  key: 3,
  class: "library-muted"
}, Mm = {
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
    }), s = /* @__PURE__ */ fr((i.items || []).map((U) => ({ ...U }))), o = J(() => s), c = J(() => i.shelves || []), d = J(() => i.formats || []), v = J(() => i.publications || []), y = J(() => i.publicationSummaries || []), E = J(() => i.publicationIssueContext || null), P = J(() => i.publicationYears || []), j = J(() => i.creators || []), re = J(() => i.scanStatuses || []), W = J(() => i.workflowStatuses || []), oe = J(() => i.genres || []), ne = J(() => i.classifications || []), q = J(() => i.cataloguePagination || {
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
      needsMetadata: i.activeFilters?.needsMetadata || "",
      coverReview: i.activeFilters?.coverReview || "",
      noCreator: i.activeFilters?.noCreator || "",
      noPublication: i.activeFilters?.noPublication || "",
      weakMetadata: i.activeFilters?.weakMetadata || "",
      unreviewedImports: i.activeFilters?.unreviewedImports || "",
      sort: i.activeFilters?.sort || "title"
    }), V = J(() => i.settingsUrl || ""), le = J(() => i.requestToken || ""), Me = J(() => i.metadataExportUrl || ""), Oe = J(() => i.metadataSidecarManifestUrl || ""), je = J(() => i.metadataSidecarBundleUrl || ""), Se = J(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), Ie = J(() => i.batchTagUrl || "/apps/library/bulk/tags"), rt = J(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), ct = J(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ke = J(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), St = J(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Fe = J(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), Le = J(() => i.metadataErrorsUrl || "/apps/library/health/metadata-errors"), he = J(() => i.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), ue = J(() => i.coverProbeUrl || "/apps/library/health/covers/probe"), Ve = J(() => i.importHealthSummaryUrl || "/apps/library/health/import-summary"), me = /* @__PURE__ */ fr({
      summary: i.importHealthSummary || {},
      loaded: !!(i.importHealthSummary && Object.keys(i.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), we = J(() => me.summary || {}), Be = J(() => {
      const U = Number(we.value.generatedAt || 0);
      return U > 0 ? new Date(U * 1e3).toLocaleString() : "";
    }), Ye = J(() => we.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), de = J(() => we.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), Rt = J(() => we.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), qe = J(() => we.value.coverSupportMatrix || Rt.value.byFormat || []), ut = J(() => we.value.environmentCapabilities || {}), Tt = J(() => i.discoveryPage === "publication"), wt = J(() => i.discoveryPage === "year"), nt = J(() => i.discoveryPage === "creator"), ft = J(() => Tt.value || wt.value || nt.value), p = J(() => i.discoveryTitle || D.publication || D.year || D.creator || ""), b = J(() => ft.value ? p.value : a("library", "Publication catalogue")), _ = J(() => nt.value ? a("library", "Creator") : wt.value ? a("library", "Publication year") : a("library", "Publication / series")), k = J(() => Number(i.rootCount || 0)), S = J(() => Number(i.enabledRootCount || 0)), x = J(() => k.value === 0), M = J(() => k.value > 0 && S.value === 0), L = J(() => K.value.length > 0), I = {
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
      weakMetadata: "Weak metadata",
      unreviewedImports: "Unreviewed imports"
    }, T = J(() => {
      if (typeof window > "u") return "";
      const U = new URLSearchParams(window.location.search);
      if (U.get("batchMetadataApplyResult") !== "1") return "";
      const w = U.get("batchMetadataField") || "field", h = U.get("batchMetadataApplied") || "0", ge = U.get("batchMetadataUnchanged") || "0", pt = U.get("batchMetadataSkipped") || "0";
      return a("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: h, field: w, unchanged: ge, skipped: pt });
    }), K = J(() => Object.entries(I).map(([U, w]) => ({ key: U, label: w, value: D[U] || "" })).filter((U) => String(U.value).trim() !== "")), H = J(() => Object.entries(D).filter(([U, w]) => !["q", "sort", "starred"].includes(U) && String(w || "").trim() !== "").map(([U, w]) => ({ key: U, value: w }))), z = J(() => Object.entries(D).filter(([U, w]) => String(w || "").trim() !== "").map(([U, w]) => ({ key: U, value: w }))), X = /* @__PURE__ */ fr({}), Z = /* @__PURE__ */ vl(null);
    let O = null;
    function N(U) {
      const w = new URLSearchParams(new FormData(U));
      for (const h of Array.from(w.keys()))
        String(w.get(h) || "").trim() === "" && w.delete(h);
      return w.delete("page"), w;
    }
    function $(U) {
      s.splice(0, s.length, ...(U.items || []).map((w) => ({ ...w })));
      for (const w of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl"])
        Object.prototype.hasOwnProperty.call(U, w) && (i[w] = U[w]);
      Object.assign(D, U.activeFilters || {});
    }
    async function Q(U = !1) {
      if (!(me.loading || me.refreshing)) {
        U ? me.refreshing = !0 : me.loading = !0, me.error = "";
        try {
          const w = await fetch(`${Ve.value}${U ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!w.ok)
            throw new Error(`Import health request failed: ${w.status}`);
          me.summary = await w.json(), me.loaded = !0;
        } catch (w) {
          me.error = w?.message || String(w);
        } finally {
          me.loading = !1, me.refreshing = !1;
        }
      }
    }
    async function ie(U) {
      U && U.currentTarget && U.currentTarget.open !== !0 || me.loaded || me.loading || await Q(!1);
    }
    async function be() {
      await Q(!0);
    }
    async function ce(U) {
      const w = U?.currentTarget?.tagName === "FORM" ? U.currentTarget : U?.currentTarget?.form;
      if (!w) return;
      const ge = N(w).toString(), pt = ge ? `?${ge}` : "", Kt = await fetch(Se.value + pt, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!Kt.ok) {
        w.submit();
        return;
      }
      $(await Kt.json()), history.replaceState({}, "", ge ? `?${ge}` : window.location.pathname);
    }
    function Ne(U) {
      ce(U);
    }
    function Re(U) {
      window.clearTimeout(O), O = window.setTimeout(() => Ne(U), 350);
    }
    function ke(U) {
      const w = new URLSearchParams();
      for (const [ge, pt] of Object.entries(D)) {
        const Kt = String(pt || "").trim();
        Kt !== "" && ge !== U && !(ge === "sort" && Kt === "title") && w.set(ge, Kt);
      }
      const h = w.toString();
      return h ? `?${h}` : "?";
    }
    function dt() {
      return ke("q");
    }
    const It = J(() => i.smartViewCounts || {}), qt = J(() => [
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
      { key: "weak-filename-metadata", label: "Weak filename metadata", description: "Items whose metadata still depends on filename/folder parsing.", query: "weakMetadata=filename", filters: { weakMetadata: "filename" } },
      { key: "unreviewed-imports", label: "Unreviewed imports", description: "Scanner-created catalogue rows not yet touched by user review.", query: "unreviewedImports=1", filters: { unreviewedImports: "1" } }
    ]);
    function hr(U) {
      const w = new URLSearchParams(window.location.search);
      for (const ge of Object.keys(I))
        w.delete(ge);
      w.delete("page");
      for (const [ge, pt] of Object.entries(U))
        String(pt || "").trim() !== "" && w.set(ge, String(pt));
      const h = w.toString();
      return h ? `?${h}` : "?";
    }
    function Xe(U) {
      return String(U || "").toUpperCase();
    }
    function gt(U) {
      return U.nextcloudTags || [];
    }
    function sr(U) {
      return y.value.find((h) => h.publication === U)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(U)}`;
    }
    function or(U) {
      return i.publicationYearLandingUrls?.[U] || `/apps/library/years/${encodeURIComponent(U)}`;
    }
    function ar(U) {
      return i.creatorLandingUrls?.[U] || `/apps/library/creators/${encodeURIComponent(U)}`;
    }
    function Ct(U, w) {
      X[U] = !!w?.currentTarget?.open;
    }
    function Rr(U) {
      const w = String(U?.tagName || "").toLowerCase();
      return U?.isContentEditable || ["input", "select", "textarea", "button"].includes(w);
    }
    function Lt(U) {
      U.key !== "/" || U.metaKey || U.ctrlKey || U.altKey || U.shiftKey || Rr(U.target) || (U.preventDefault(), Z.value?.focus(), Z.value?.select?.());
    }
    function zt(U) {
      U.key !== "Escape" || document.activeElement !== Z.value || D.q === "" || (U.preventDefault(), D.q = "", Z.value.value = "", window.clearTimeout(O), Ne({ currentTarget: Z.value }));
    }
    function Je(U) {
      Lt(U), zt(U);
    }
    Go(() => {
      window.addEventListener("keydown", Je);
    }), Yo(() => {
      window.removeEventListener("keydown", Je);
    });
    async function Wt(U, w) {
      const h = w?.currentTarget?.closest?.("form") || w?.currentTarget;
      if (!h || !U?.starUrl) return;
      const ge = !!U.starred;
      U.starred = !ge;
      try {
        (await fetch(U.starUrl, {
          method: "POST",
          body: new FormData(h),
          credentials: "same-origin"
        })).ok || (U.starred = ge);
      } catch {
        U.starred = ge;
      }
    }
    return (U, w) => (C(), A("div", Zu, [
      l("section", Qu, [
        l("div", ef, [
          l("div", null, [
            ft.value ? (C(), A("p", tf, f(_.value), 1)) : fe("", !0),
            l("h2", rf, f(b.value), 1),
            l("p", nf, f(ft.value ? m(a)("library", "Browse this focused view; use filters only when you need to narrow it further.") : m(a)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
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
                Me.value ? (C(), A("a", {
                  key: 0,
                  href: Me.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, f(m(a)("library", "Export corrected metadata")), 9, lf)) : fe("", !0),
                Oe.value ? (C(), A("a", {
                  key: 1,
                  href: Oe.value,
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
                    we.value.message ? (C(), A("p", gf, f(we.value.message), 1)) : we.value.cacheStatus === "missing" ? (C(), A("p", _f, f(m(a)("library", "No cached metadata overview exists yet")), 1)) : fe("", !0),
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
                        href: Le.value
                      }, f(m(a)("library", "Full review")), 9, wf),
                      l("a", {
                        class: "button secondary",
                        href: he.value
                      }, f(m(a)("library", "Export TSV")), 9, Cf),
                      l("a", {
                        class: "button secondary",
                        href: ue.value
                      }, f(m(a)("library", "Probe covers")), 9, xf)
                    ]),
                    l("div", Af, [
                      l("article", null, [
                        l("h4", null, f(m(a)("library", "Metadata errors")), 1),
                        l("p", Rf, f(Ye.value.total || 0), 1),
                        l("ul", null, [
                          (C(!0), A(se, null, _e(Ye.value.byExtension, (h) => (C(), A("li", {
                            key: h.extension
                          }, f(Xe(h.extension)) + " · " + f(h.count), 1))), 128))
                        ])
                      ]),
                      l("article", null, [
                        l("h4", null, f(m(a)("library", "Archive/container check")), 1),
                        l("p", kf, f(de.value.mismatches || 0), 1),
                        l("ul", null, [
                          (C(!0), A(se, null, _e(de.value.byExtensionAndContainer, (h) => (C(), A("li", {
                            key: `${h.extension}-${h.actualContainerType}`
                          }, f(Xe(h.extension)) + " · " + f(h.actualContainerType) + " · " + f(h.count), 1))), 128))
                        ])
                      ]),
                      l("article", null, [
                        l("h4", null, f(m(a)("library", "Cover health")), 1),
                        l("p", Of, f(Rt.value.note), 1),
                        l("ul", null, [
                          (C(!0), A(se, null, _e(Rt.value.byFormat, (h) => (C(), A("li", {
                            key: `${h.extension}-${h.nextcloudPreview}-${h.libraryCoverRoute}`
                          }, f(Xe(h.extension)) + " · nextcloudPreview: " + f(h.nextcloudPreview) + " · libraryCoverRoute: " + f(h.libraryCoverRoute) + " · " + f(h.count), 1))), 128))
                        ])
                      ]),
                      l("article", null, [
                        l("h4", null, f(m(a)("library", "Cover support matrix")), 1),
                        l("p", Nf, f(m(a)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1),
                        l("ul", null, [
                          (C(!0), A(se, null, _e(qe.value, (h) => (C(), A("li", {
                            key: `${h.extension}-${h.nextcloudPreview}-${h.libraryCoverRoute}-${h.count}`
                          }, f(Xe(h.extension)) + " · Nextcloud/plugin preview: " + f(h.nextcloudPreview) + " · Library extraction: " + f(h.libraryCoverRoute) + " · " + f(h.count), 1))), 128))
                        ]),
                        l("p", Pf, f(m(a)("library", "Extractor tools")) + ": ZIP=" + f(ut.value.phpZipArchive ? "ZipArchive" : "missing") + " · 7z=" + f(ut.value.sevenZipCommand || "missing") + " · RAR=" + f(ut.value.rarCommand || "missing") + " · bsdtar=" + f(ut.value.bsdtarCommand || "missing"), 1)
                      ])
                    ]),
                    Ye.value.examples?.length ? (C(), A("details", Mf, [
                      l("summary", null, f(m(a)("library", "Example files and suggested actions")), 1),
                      l("ul", null, [
                        (C(!0), A(se, null, _e(Ye.value.examples, (h) => (C(), A("li", {
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
                      l("p", Lf, f(m(a)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")), 1),
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
                        w[18] || (w[18] = l("input", {
                          type: "hidden",
                          name: "status",
                          value: "metadata_error"
                        }, null, -1)),
                        w[19] || (w[19] = l("input", {
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
                        }, null, 8, qf),
                        w[20] || (w[20] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        w[21] || (w[21] = l("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-scanner-conflict"
                        }, null, -1)),
                        l("button", zf, f(m(a)("library", "Tag scanner-conflict rows")), 1)
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
            (C(!0), A(se, null, _e(qt.value, (h) => (C(), A("a", {
              key: h.key,
              class: "library-useful-view-chip",
              href: hr(h.filters),
              title: h.description
            }, [
              l("strong", null, f(m(a)("library", h.label)), 1),
              l("span", null, f(m(a)("library", h.description)), 1),
              l("small", td, f(Number(It.value[h.key] || 0)), 1)
            ], 8, ed))), 128))
          ], 8, Qf)
        ]),
        l("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": m(a)("library", "Quick catalogue filters"),
          onSubmit: An(ce, ["prevent"])
        }, [
          (C(!0), A(se, null, _e(H.value, (h) => (C(), A("input", {
            key: h.key,
            type: "hidden",
            name: h.key,
            value: h.value
          }, null, 8, nd))), 128)),
          l("div", id, [
            l("label", sd, [
              l("span", null, [
                ye(f(m(a)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                w[22] || (w[22] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
              ]),
              ze(l("input", {
                ref_key: "quickSearchInput",
                ref: Z,
                "onUpdate:modelValue": w[0] || (w[0] = (h) => D.q = h),
                "data-library-quick-search": "",
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope",
                onInput: Re
              }, null, 544), [
                [gi, D.q]
              ])
            ]),
            l("button", {
              type: "submit",
              class: "button primary",
              "aria-label": m(a)("library", "Search catalogue")
            }, f(m(a)("library", "Search")), 9, od)
          ]),
          l("details", ad, [
            l("summary", null, f(m(a)("library", "Filter & sort")), 1),
            l("div", ld, [
              l("label", null, [
                ye(f(m(a)("library", "Sort")) + " ", 1),
                ze(l("select", {
                  "onUpdate:modelValue": w[1] || (w[1] = (h) => D.sort = h),
                  name: "sort",
                  onChange: ce
                }, [
                  l("option", cd, f(m(a)("library", "Title")), 1),
                  l("option", ud, f(m(a)("library", "Recently added")), 1),
                  l("option", fd, f(m(a)("library", "Publication date")), 1),
                  l("option", dd, f(m(a)("library", "Series")), 1),
                  l("option", pd, f(m(a)("library", "Recently opened")), 1),
                  l("option", hd, f(m(a)("library", "Format")), 1)
                ], 544), [
                  [st, D.sort]
                ])
              ]),
              l("label", null, [
                ye(f(m(a)("library", "Starred")) + " ", 1),
                ze(l("select", {
                  "onUpdate:modelValue": w[2] || (w[2] = (h) => D.starred = h),
                  name: "starred",
                  onChange: ce
                }, [
                  l("option", md, f(m(a)("library", "All")), 1),
                  l("option", bd, f(m(a)("library", "Starred")), 1)
                ], 544), [
                  [st, D.starred]
                ])
              ]),
              l("label", null, [
                ye(f(m(a)("library", "Size")) + " ", 1),
                l("select", {
                  value: q.value.limit,
                  name: "limit",
                  onChange: ce
                }, [
                  (C(), A(se, null, _e(n, (h) => l("option", {
                    key: h,
                    value: h
                  }, f(h), 9, gd)), 64))
                ], 40, yd)
              ]),
              l("button", {
                type: "submit",
                class: "button secondary",
                "aria-label": m(a)("library", "Apply catalogue filters")
              }, f(m(a)("library", "Apply filters")), 9, _d),
              l("a", {
                href: "?",
                class: "button secondary",
                "aria-label": m(a)("library", "Clear catalogue filters")
              }, f(m(a)("library", "Clear all")), 9, vd)
            ])
          ])
        ], 40, rd),
        l("details", Ed, [
          l("summary", Sd, f(m(a)("library", "Show catalogue filters")), 1),
          l("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": m(a)("library", "Catalogue search and filters"),
            onSubmit: An(ce, ["prevent"])
          }, [
            l("label", null, [
              ye(f(m(a)("library", "Search title, creator, description, filename or folder")) + " ", 1),
              ze(l("input", {
                "onUpdate:modelValue": w[3] || (w[3] = (h) => D.q = h),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope"
              }, null, 512), [
                [gi, D.q]
              ])
            ]),
            l("p", wd, f(m(a)("library", "Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")), 1),
            l("label", null, [
              ye(f(m(a)("library", "Type")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": w[4] || (w[4] = (h) => D.type = h),
                name: "type"
              }, [
                l("option", Cd, f(m(a)("library", "All types")), 1),
                (C(), A(se, null, _e(r, (h) => l("option", {
                  key: h,
                  value: h
                }, f(h), 9, xd)), 64))
              ], 512), [
                [st, D.type]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Series / periodical")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": w[5] || (w[5] = (h) => D.publication = h),
                name: "publication"
              }, [
                l("option", Ad, f(m(a)("library", "All series and periodicals")), 1),
                (C(!0), A(se, null, _e(v.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(h), 9, Rd))), 128))
              ], 512), [
                [st, D.publication]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Publication year")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": w[6] || (w[6] = (h) => D.year = h),
                name: "year"
              }, [
                l("option", kd, f(m(a)("library", "All years")), 1),
                (C(!0), A(se, null, _e(P.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(h), 9, Od))), 128))
              ], 512), [
                [st, D.year]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Creator")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": w[7] || (w[7] = (h) => D.creator = h),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                l("option", Nd, f(m(a)("library", "All creators")), 1),
                (C(!0), A(se, null, _e(j.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(h), 9, Pd))), 128))
              ], 512), [
                [st, D.creator]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Nextcloud tag")) + " ", 1),
              ze(l("input", {
                "onUpdate:modelValue": w[8] || (w[8] = (h) => D.tag = h),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [gi, D.tag]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Format")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": w[9] || (w[9] = (h) => D.format = h),
                name: "format"
              }, [
                l("option", Md, f(m(a)("library", "All formats")), 1),
                (C(!0), A(se, null, _e(d.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(Xe(h)), 9, Id))), 128))
              ], 512), [
                [st, D.format]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Shelf")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": w[10] || (w[10] = (h) => D.shelf = h),
                name: "shelf"
              }, [
                l("option", Ld, f(m(a)("library", "All shelves")), 1),
                (C(!0), A(se, null, _e(c.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(h), 9, Ud))), 128))
              ], 512), [
                [st, D.shelf]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Scan status")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": w[11] || (w[11] = (h) => D.status = h),
                name: "status"
              }, [
                l("option", Dd, f(m(a)("library", "All scan statuses")), 1),
                (C(!0), A(se, null, _e(re.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(h), 9, Fd))), 128))
              ], 512), [
                [st, D.status]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Workflow status")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": w[12] || (w[12] = (h) => D.workflowStatus = h),
                name: "workflowStatus"
              }, [
                l("option", Hd, f(m(a)("library", "All workflow statuses")), 1),
                (C(!0), A(se, null, _e(W.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(h), 9, $d))), 128))
              ], 512), [
                [st, D.workflowStatus]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Genre")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": w[13] || (w[13] = (h) => D.genre = h),
                name: "genre"
              }, [
                l("option", jd, f(m(a)("library", "All genres")), 1),
                (C(!0), A(se, null, _e(oe.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(h), 9, Vd))), 128))
              ], 512), [
                [st, D.genre]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Classification")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": w[14] || (w[14] = (h) => D.classification = h),
                name: "classification"
              }, [
                l("option", Bd, f(m(a)("library", "All classifications")), 1),
                (C(!0), A(se, null, _e(ne.value, (h) => (C(), A("option", {
                  key: h,
                  value: h
                }, f(h), 9, qd))), 128))
              ], 512), [
                [st, D.classification]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Scanner conflicts")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": w[15] || (w[15] = (h) => D.scannerConflicts = h),
                name: "scannerConflicts"
              }, [
                l("option", zd, f(m(a)("library", "All metadata")), 1),
                l("option", Wd, f(m(a)("library", "Needs review")), 1)
              ], 512), [
                [st, D.scannerConflicts]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Starred")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": w[16] || (w[16] = (h) => D.starred = h),
                name: "starred"
              }, [
                l("option", Kd, f(m(a)("library", "All publications")), 1),
                l("option", Gd, f(m(a)("library", "Starred only")), 1)
              ], 512), [
                [st, D.starred]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Sort")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": w[17] || (w[17] = (h) => D.sort = h),
                name: "sort"
              }, [
                l("option", Yd, f(m(a)("library", "Title")), 1),
                l("option", Xd, f(m(a)("library", "Recently added")), 1),
                l("option", Jd, f(m(a)("library", "Publication date")), 1),
                l("option", Zd, f(m(a)("library", "Series / periodical")), 1),
                l("option", Qd, f(m(a)("library", "Recently opened")), 1),
                l("option", ep, f(m(a)("library", "Format")), 1)
              ], 512), [
                [st, D.sort]
              ])
            ]),
            l("label", null, [
              ye(f(m(a)("library", "Page size")) + " ", 1),
              l("select", {
                value: q.value.limit,
                name: "limit"
              }, [
                (C(), A(se, null, _e(n, (h) => l("option", {
                  key: h,
                  value: h
                }, f(h), 9, rp)), 64))
              ], 8, tp)
            ]),
            l("button", {
              type: "submit",
              class: "button primary",
              "aria-label": m(a)("library", "Apply catalogue filters")
            }, f(m(a)("library", "Apply filters")), 9, np),
            l("a", {
              href: "?",
              class: "button secondary",
              "aria-label": m(a)("library", "Clear catalogue filters")
            }, f(m(a)("library", "Clear")), 9, ip),
            l("a", {
              href: Fe.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, f(m(a)("library", "Review scanner conflicts")), 9, sp)
          ], 40, Td)
        ]),
        ft.value ? (C(), A("section", op, [
          l("p", ap, f(_.value), 1),
          l("h3", lp, f(p.value), 1),
          l("p", cp, f(nt.value ? m(a)("library", "Items by this creator, sorted by publication context when available.") : wt.value ? m(a)("library", "Items from this publication year, sorted by publication date when available.") : m(a)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          l("div", up, [
            l("span", null, f(q.value.total) + " " + f(m(a)("library", "items")), 1),
            E.value?.earliestYear && E.value?.latestYear ? (C(), A("span", fp, f(E.value.earliestYear) + "–" + f(E.value.latestYear), 1)) : fe("", !0),
            E.value?.datedCount ? (C(), A("span", dp, f(E.value.datedCount) + " " + f(m(a)("library", "dated")), 1)) : fe("", !0),
            E.value?.undatedCount > 0 ? (C(), A("span", pp, f(E.value.undatedCount) + " " + f(m(a)("library", "undated")), 1)) : fe("", !0)
          ]),
          Tt.value && E.value ? (C(), A("aside", hp, [
            l("strong", null, f(m(a)("library", "Publication contents")), 1),
            l("span", null, f(E.value.itemCount) + " " + f(m(a)("library", "items")), 1),
            E.value.earliestYear && E.value.latestYear ? (C(), A("span", mp, f(E.value.earliestYear) + "–" + f(E.value.latestYear), 1)) : fe("", !0),
            l("span", null, f(E.value.datedCount) + " " + f(m(a)("library", "with issue/date coverage")), 1),
            E.value.undatedCount > 0 ? (C(), A("span", bp, f(E.value.undatedCount) + " " + f(m(a)("library", "without dates yet")), 1)) : fe("", !0)
          ])) : fe("", !0),
          l("p", null, [
            l("a", yp, f(m(a)("library", "Back to full catalogue")), 1)
          ])
        ])) : fe("", !0),
        l("div", gp, [
          l("p", _p, [
            ye(f(m(a)("library", "Showing")) + " " + f(q.value.from) + "–" + f(q.value.to) + " " + f(m(a)("library", "of")) + " " + f(q.value.total) + " " + f(m(a)("library", "catalogue items")), 1),
            K.value.length > 0 ? (C(), A("span", vp, [
              w[23] || (w[23] = ye(" · ", -1)),
              l("a", Ep, f(m(a)("library", "Clear all filters")), 1)
            ])) : fe("", !0)
          ]),
          l("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": m(a)("library", "Catalogue pagination")
          }, [
            l("span", Tp, [
              ye(f(m(a)("library", "Page")) + " " + f(q.value.page), 1),
              q.value.total > 0 ? (C(), A("span", wp, " · " + f(q.value.from) + "–" + f(q.value.to), 1)) : fe("", !0)
            ]),
            q.value.previousUrl ? (C(), A("a", {
              key: 0,
              href: q.value.previousUrl
            }, f(m(a)("library", "Previous")), 9, Cp)) : (C(), A("span", xp, f(m(a)("library", "Previous")), 1)),
            q.value.nextUrl ? (C(), A("a", {
              key: 2,
              href: q.value.nextUrl
            }, f(m(a)("library", "Next")), 9, Ap)) : (C(), A("span", Rp, f(m(a)("library", "Next")), 1))
          ], 8, Sp)
        ]),
        l("div", kp, [
          l("details", {
            class: "library-batch-actions",
            "aria-label": m(a)("library", "Batch actions for current results")
          }, [
            l("summary", null, [
              ye(f(m(a)("library", "Batch")) + " ", 1),
              l("span", Np, f(q.value.total) + " " + f(m(a)("library", "Current filter result")), 1)
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
              }, null, 8, Mp),
              (C(!0), A(se, null, _e(z.value, (h) => (C(), A("input", {
                key: h.key,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, Ip))), 128)),
              l("label", null, [
                l("span", null, f(m(a)("library", "Nextcloud tag")), 1),
                l("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: m(a)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, Lp)
              ]),
              l("button", Up, f(m(a)("library", "Apply Nextcloud tag to current results")), 1),
              l("p", Dp, f(m(a)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, Pp),
            l("form", {
              method: "post",
              action: rt.value,
              class: "library-batch-tag-remove-form"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, Hp),
              (C(!0), A(se, null, _e(z.value, (h) => (C(), A("input", {
                key: `remove-tag-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, $p))), 128)),
              l("label", null, [
                l("span", null, f(m(a)("library", "Nextcloud tag")), 1),
                l("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: m(a)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, jp)
              ]),
              l("button", Vp, f(m(a)("library", "Remove tag from current results")), 1),
              l("p", Bp, f(m(a)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, Fp),
            l("form", {
              method: "post",
              action: ct.value,
              class: "library-batch-metadata-reset-form"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, zp),
              (C(!0), A(se, null, _e(z.value, (h) => (C(), A("input", {
                key: `reset-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, Wp))), 128)),
              w[24] || (w[24] = l("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              l("button", Kp, f(m(a)("library", "Reset filtered metadata")), 1),
              l("p", Gp, f(m(a)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, qp),
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
              }, null, 8, Xp),
              (C(!0), A(se, null, _e(z.value, (h) => (C(), A("input", {
                key: `edit-preview-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, Jp))), 128)),
              l("label", null, [
                l("span", null, f(m(a)("library", "Metadata field")), 1),
                l("select", Zp, [
                  l("option", Qp, f(m(a)("library", "Publication type")), 1),
                  l("option", eh, f(m(a)("library", "Subtitle")), 1),
                  l("option", th, f(m(a)("library", "Creators")), 1),
                  l("option", rh, f(m(a)("library", "Series / periodical")), 1),
                  l("option", nh, f(m(a)("library", "Publication date")), 1),
                  l("option", ih, f(m(a)("library", "Language")), 1),
                  l("option", sh, f(m(a)("library", "Publisher")), 1),
                  l("option", oh, f(m(a)("library", "Genres")), 1),
                  l("option", ah, f(m(a)("library", "Classifications")), 1)
                ])
              ]),
              l("label", null, [
                l("span", null, f(m(a)("library", "Preview value")), 1),
                w[25] || (w[25] = l("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              l("button", lh, f(m(a)("library", "Preview & apply metadata edit")), 1),
              l("p", ch, f(m(a)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, Yp),
            l("form", {
              method: "post",
              action: St.value,
              class: "library-batch-cover-refresh-form"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, fh),
              (C(!0), A(se, null, _e(z.value, (h) => (C(), A("input", {
                key: `cover-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, dh))), 128)),
              l("button", ph, f(m(a)("library", "Request fresh cover previews")), 1),
              l("p", hh, f(m(a)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, uh)
          ], 8, Op),
          l("details", mh, [
            l("summary", null, f(m(a)("library", "Browse")), 1),
            l("div", bh, [
              y.value.length > 0 ? (C(), A("section", yh, [
                l("h3", gh, f(m(a)("library", "Top series and periodicals")), 1),
                l("p", _h, f(m(a)("library", "Jump into recurring publications with one click.")), 1),
                l("ul", null, [
                  (C(!0), A(se, null, _e(y.value, (h) => (C(), A("li", {
                    key: h.publication
                  }, [
                    l("a", {
                      href: sr(h.publication)
                    }, f(h.publication), 9, vh),
                    l("span", Eh, f(h.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : y.value.length === 0 ? (C(), A("section", Sh, [
                l("h3", Th, f(m(a)("library", "No series or periodicals found yet")), 1),
                l("p", wh, f(m(a)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : fe("", !0),
              P.value.length > 0 ? (C(), A("section", Ch, [
                l("h3", xh, f(m(a)("library", "Top publication years")), 1),
                l("ul", null, [
                  (C(!0), A(se, null, _e(P.value, (h) => (C(), A("li", { key: h }, [
                    l("a", {
                      href: or(h)
                    }, f(h), 9, Ah)
                  ]))), 128))
                ])
              ])) : fe("", !0),
              j.value.length > 0 ? (C(), A("section", Rh, [
                l("h3", kh, f(m(a)("library", "Top creators")), 1),
                l("ul", null, [
                  (C(!0), A(se, null, _e(j.value, (h) => (C(), A("li", { key: h }, [
                    l("a", {
                      href: ar(h)
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
          (C(!0), A(se, null, _e(K.value, (h) => (C(), A("a", {
            key: h.key,
            href: ke(h.key),
            class: "library-filter-chip",
            "aria-label": `${m(a)("library", "Remove filter")}: ${h.label}`
          }, [
            l("strong", null, f(h.label) + ":", 1),
            ye(" " + f(h.value) + " ", 1),
            w[26] || (w[26] = l("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Ph))), 128))
        ], 8, Nh)) : fe("", !0),
        o.value.length === 0 ? (C(), A("div", {
          key: 3,
          class: Dr(["library-empty-content", { "library-first-run-guidance": x.value || M.value, "library-filter-empty-state": L.value && !x.value && !M.value }]),
          role: "status"
        }, [
          x.value ? (C(), A(se, { key: 0 }, [
            l("h3", null, f(m(a)("library", "Start with one Library root")), 1),
            l("p", Mh, f(m(a)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            l("p", Ih, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, f(m(a)("library", "Add a Library root")), 9, Lh),
              l("span", Uh, f(m(a)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : M.value ? (C(), A(se, { key: 1 }, [
            l("h3", null, f(m(a)("library", "No enabled Library roots")), 1),
            l("p", Dh, f(m(a)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            l("p", Fh, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, f(m(a)("library", "Open Library settings")), 9, Hh)
            ])
          ], 64)) : L.value ? (C(), A(se, { key: 2 }, [
            l("h3", null, f(m(a)("library", "No matches for the current filters")), 1),
            l("p", $h, f(m(a)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            l("p", jh, [
              l("a", {
                href: dt(),
                class: "button secondary"
              }, f(m(a)("library", "Clear search")), 9, Vh),
              l("a", Bh, f(m(a)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (C(), A(se, { key: 3 }, [
            l("h3", null, f(m(a)("library", "No catalogue items yet")), 1),
            l("p", qh, f(m(a)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            l("p", zh, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, f(m(a)("library", "Run a scan from settings")), 9, Wh)
            ])
          ], 64))
        ], 2)) : (C(), A("div", Kh, [
          (C(!0), A(se, null, _e(o.value, (h) => (C(), A("article", {
            key: h.id,
            class: Dr(["library-cover-card", { "library-cover-card--open": X[h.id] }])
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
              }, null, 8, Yh)
            ], 8, Gh),
            l("form", {
              method: "post",
              action: h.starUrl,
              class: "library-cover-star-form",
              onSubmit: An((ge) => Wt(h, ge), ["prevent"])
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, Jh),
              w[27] || (w[27] = l("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              l("input", {
                type: "hidden",
                name: "starred",
                value: h.starred ? "0" : "1"
              }, null, 8, Zh),
              l("button", {
                type: "submit",
                class: Dr(["library-cover-star-button", { "library-cover-star-button--starred": h.starred }]),
                "aria-pressed": h.starred ? "true" : "false",
                title: h.starred ? m(a)("library", "Unstar this publication") : m(a)("library", "Star this publication"),
                "aria-label": h.starred ? m(a)("library", "Unstar this publication") : m(a)("library", "Star this publication"),
                onClick: An((ge) => Wt(h, ge), ["prevent"])
              }, f(h.starred ? "★" : "☆"), 11, Qh)
            ], 40, Xh),
            l("div", em, [
              l("div", tm, [
                l("h3", null, [
                  h.starred ? (C(), A("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": m(a)("library", "Starred")
                  }, "★", 8, rm)) : fe("", !0),
                  ye(f(h.title), 1)
                ]),
                l("a", {
                  class: "library-cover-read",
                  href: h.openUrl
                }, f(m(a)("library", "Read")), 9, nm)
              ]),
              l("details", {
                class: "library-cover-details",
                onToggle: (ge) => Ct(h.id, ge)
              }, [
                l("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${m(a)("library", "Show details and actions")}: ${h.title}`
                }, f(m(a)("library", "Details")), 9, sm),
                l("div", om, [
                  h.creators ? (C(), A("p", am, f(h.creators), 1)) : fe("", !0),
                  l("dl", lm, [
                    l("div", cm, [
                      l("dt", null, f(m(a)("library", "Type")), 1),
                      l("dd", null, f(h.publicationType), 1)
                    ]),
                    h.publication ? (C(), A("div", um, [
                      l("dt", null, f(m(a)("library", "Series")), 1),
                      l("dd", null, f(h.publication), 1)
                    ])) : fe("", !0),
                    h.publicationDate ? (C(), A("div", fm, [
                      l("dt", null, f(m(a)("library", "Date")), 1),
                      l("dd", null, f(h.publicationDate), 1)
                    ])) : fe("", !0),
                    h.workflowStatus ? (C(), A("div", dm, [
                      l("dt", null, f(m(a)("library", "Status")), 1),
                      l("dd", null, f(h.workflowStatus), 1)
                    ])) : fe("", !0),
                    h.hasScannerConflict ? (C(), A("div", pm, [
                      l("dt", null, f(m(a)("library", "Review")), 1),
                      l("dd", null, f(h.scannerConflictCount) + " fields", 1)
                    ])) : fe("", !0),
                    h.lastOpenedAt ? (C(), A("div", hm, [
                      l("dt", null, f(m(a)("library", "Last opened")), 1),
                      l("dd", null, f(h.lastOpenedAt), 1)
                    ])) : fe("", !0),
                    h.extension ? (C(), A("div", mm, [
                      l("dt", null, f(m(a)("library", "Format")) + ":", 1),
                      l("dd", null, f(Xe(h.extension)), 1)
                    ])) : fe("", !0),
                    h.shelf ? (C(), A("div", bm, [
                      l("dt", null, f(m(a)("library", "Shelf")), 1),
                      l("dd", null, f(h.shelf), 1)
                    ])) : fe("", !0)
                  ]),
                  h.description ? (C(), A("p", ym, f(h.description), 1)) : fe("", !0),
                  h.scanStatus !== "indexed" || h.scanError ? (C(), A("p", gm, [
                    ye(" scanStatus: " + f(h.scanStatus || "unknown"), 1),
                    h.scanError ? (C(), A("span", _m, " · scanError: " + f(h.scanError), 1)) : fe("", !0)
                  ])) : fe("", !0),
                  l("div", vm, [
                    gt(h).length === 0 ? (C(), A("span", Em, "No Nextcloud tags")) : (C(!0), A(se, { key: 1 }, _e(gt(h), (ge) => (C(), A("span", {
                      key: ge.id,
                      class: "library-tag"
                    }, f(ge.name), 1))), 128))
                  ]),
                  l("p", Sm, [
                    l("a", {
                      href: h.filesUrl
                    }, f(m(a)("library", "Show in Files")), 9, Tm),
                    w[28] || (w[28] = ye(" · ", -1)),
                    l("a", {
                      href: h.downloadUrl
                    }, f(m(a)("library", "Download source")), 9, wm),
                    w[29] || (w[29] = ye(" · ", -1)),
                    l("a", {
                      href: h.detailsUrl
                    }, f(m(a)("library", "Details")), 9, Cm)
                  ])
                ])
              ], 40, im)
            ])
          ], 2))), 128))
        ])),
        o.value.length > 0 ? (C(), A("nav", {
          key: 5,
          class: "library-pagination library-pagination--bottom",
          "aria-label": m(a)("library", "Catalogue pagination")
        }, [
          l("span", Am, [
            ye(f(m(a)("library", "Page")) + " " + f(q.value.page), 1),
            q.value.total > 0 ? (C(), A("span", Rm, " · " + f(q.value.from) + "–" + f(q.value.to), 1)) : fe("", !0)
          ]),
          q.value.previousUrl ? (C(), A("a", {
            key: 0,
            href: q.value.previousUrl
          }, f(m(a)("library", "Previous")), 9, km)) : (C(), A("span", Om, f(m(a)("library", "Previous")), 1)),
          q.value.nextUrl ? (C(), A("a", {
            key: 2,
            href: q.value.nextUrl
          }, f(m(a)("library", "Next")), 9, Nm)) : (C(), A("span", Pm, f(m(a)("library", "Next")), 1))
        ], 8, xm)) : fe("", !0)
      ])
    ]));
  }
}, co = du("library", "catalogue", {}), Pn = document.querySelector("#library-vue-root"), uo = {
  ...co,
  requestToken: Pn?.dataset.requestToken || co.requestToken || ""
};
function G(e) {
  return String(e ?? "");
}
function Ca(e) {
  return G(e).toUpperCase();
}
function Im(e, t, r, n = G) {
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
function Pr(e, t, r, n, i, s, o = G) {
  const c = document.createElement("label");
  c.textContent = t;
  const d = document.createElement("select");
  d.name = r;
  const v = document.createElement("option");
  v.value = "", v.textContent = i, d.appendChild(v), Im(d, s, n, o), c.appendChild(d), e.appendChild(c);
}
function Mr(e) {
  const t = G(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function Lm(e, t = {}) {
  return G(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(G(e || t?.publication || ""))}`);
}
function Um(e) {
  return G(e.discoveryPage) === "publication";
}
function Dm(e, t = {}) {
  return G(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(G(e))}`);
}
function xi(e) {
  return G(e.discoveryPage) === "year";
}
function Fm(e, t = {}) {
  return G(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(G(e))}`);
}
function Ai(e) {
  return G(e.discoveryPage) === "creator";
}
function Hm(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && G(n).trim() !== "");
}
function $m() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Xr(e, t, r, n) {
  const i = document.createElement("a");
  return i.href = t, i.className = r, i.textContent = n, e.appendChild(i), i;
}
function jm(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function Vm(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", a("library", "Catalogue search and filters")), fo(n, a("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), Pr(n, a("library", "Type"), "type", r.type, a("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), fo(n, a("library", "Nextcloud tag"), "tag", r.tag, "photography"), Pr(n, a("library", "Format"), "format", r.format, a("library", "All formats"), e.formats || [], Ca), Pr(n, a("library", "Shelf"), "shelf", r.shelf, a("library", "All shelves"), e.shelves || []), Pr(n, a("library", "Scan status"), "status", r.status, a("library", "All scan statuses"), e.scanStatuses || []), Pr(n, a("library", "Sort"), "sort", r.sort || "title", a("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Pr(n, a("library", "Page size"), "limit", t.limit || 100, a("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", a("library", "Apply catalogue filters")), i.textContent = a("library", "Apply filters");
  const s = document.createElement("a");
  return s.href = "?", s.className = "button secondary", s.setAttribute("aria-label", a("library", "Clear catalogue filters")), s.textContent = a("library", "Clear"), n.append(i, s), n;
}
function Bm() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", i = e.get("batchMetadataSkipped") || "0", s = document.createElement("p");
  return s.className = "library-notice library-batch-metadata-apply-result", s.textContent = a("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${i} skipped.`), s;
}
function qm(e, t) {
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
    for (const [ne, q] of re) {
      const D = document.createElement("option");
      D.value = G(ne), D.textContent = G(q), G(ne) === G(j) && (D.selected = !0), oe.appendChild(D);
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
    const O = document.createElement("a");
    O.href = i, O.className = "button secondary", O.setAttribute("aria-label", "Open Library settings"), O.textContent = a("library", "Settings"), ne.appendChild(O);
  }
  if (s) {
    const O = document.createElement("a");
    O.href = s, O.className = "button secondary", O.setAttribute("aria-label", "Export corrected metadata"), O.textContent = a("library", "Export corrected metadata"), ne.appendChild(O);
  }
  if (e.metadataSidecarManifestUrl) {
    const O = document.createElement("a");
    O.href = e.metadataSidecarManifestUrl, O.className = "button secondary", O.setAttribute("aria-label", "Export sidecar manifest"), O.textContent = a("library", "Sidecar manifest"), ne.appendChild(O);
  }
  if (e.metadataSidecarBundleUrl) {
    const O = document.createElement("a");
    O.href = e.metadataSidecarBundleUrl, O.className = "button secondary", O.setAttribute("aria-label", "Export sidecar ZIP"), O.textContent = a("library", "Sidecar ZIP"), ne.appendChild(O);
  }
  j.append(re, ne), P.appendChild(j);
  const q = Bm();
  q && P.appendChild(q), P.appendChild(qm(e, n));
  const D = document.createElement("details");
  D.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = a("library", "Show catalogue filters"), D.append(V, Vm(e, n)), P.appendChild(D), Um(e) || xi(e) || Ai(e)) {
    const O = document.createElement("section");
    O.className = "library-discovery-header", O.setAttribute("aria-labelledby", "library-discovery-heading");
    const N = document.createElement("p");
    N.className = "library-muted", N.textContent = Ai(e) ? a("library", "Creator") : xi(e) ? a("library", "Publication year") : a("library", "Publication / series");
    const $ = document.createElement("h3");
    $.id = "library-discovery-heading", $.textContent = G(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = `${n.total ?? r.length} ${Ai(e) ? a("library", "items by this creator. Sorted by publication context when available.") : xi(e) ? a("library", "items from this publication year. Sorted by publication date when available.") : a("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const ie = document.createElement("a");
    ie.href = "/apps/library/", ie.className = "button secondary", ie.textContent = a("library", "Back to full catalogue"), O.append(N, $, Q, ie), P.appendChild(O);
  }
  const le = document.createElement("p");
  le.className = "library-muted library-filter-result-summary", le.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Me = document.createElement("a");
  Me.href = "?", Me.textContent = ` ${a("library", "Clear all filters")}`, le.appendChild(Me), P.appendChild(le);
  const Oe = document.createElement("details");
  Oe.className = "library-batch-actions";
  const je = document.createElement("summary");
  je.textContent = `${a("library", "Batch actions for current results")} (${n.total ?? r.length} ${a("library", "Current filter result")})`;
  const Se = document.createElement("form");
  Se.method = "post", Se.action = o, Se.className = "library-batch-tag-form";
  const Ie = Mr(e);
  Ie && Se.appendChild(Ie);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = O, $.value = G(N), Se.appendChild($);
  }
  const rt = document.createElement("label");
  rt.textContent = a("library", "Apply Nextcloud tag to current results");
  const ct = document.createElement("input");
  ct.type = "text", ct.name = "nextcloudTagName", ct.placeholder = "batch-review", rt.appendChild(ct);
  const Ke = document.createElement("button");
  Ke.type = "submit", Ke.className = "button secondary", Ke.textContent = a("library", "Apply Nextcloud tag to current results");
  const St = document.createElement("p");
  St.className = "library-muted", St.textContent = a("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Se.append(rt, Ke, St);
  const Fe = document.createElement("form");
  Fe.method = "post", Fe.action = c, Fe.className = "library-batch-tag-remove-form";
  const Le = Mr(e);
  Le && Fe.appendChild(Le);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = O, $.value = G(N), Fe.appendChild($);
  }
  const he = document.createElement("label");
  he.textContent = a("library", "Nextcloud tag");
  const ue = document.createElement("input");
  ue.type = "text", ue.name = "nextcloudTagName", ue.setAttribute("list", "library-nextcloud-tag-suggestions"), ue.placeholder = a("library", "e.g. Review"), ue.autocomplete = "off", he.appendChild(ue);
  const Ve = document.createElement("button");
  Ve.type = "submit", Ve.className = "button secondary", Ve.textContent = a("library", "Remove tag from current results");
  const me = document.createElement("p");
  me.className = "library-muted", me.textContent = a("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), Fe.append(he, Ve, me);
  const we = document.createElement("form");
  we.method = "post", we.action = d, we.className = "library-batch-metadata-reset-form";
  const Be = Mr(e);
  Be && we.appendChild(Be);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = O, $.value = G(N), we.appendChild($);
  }
  const Ye = document.createElement("input");
  Ye.type = "hidden", Ye.name = "scannerConflicts", Ye.value = "1";
  const de = document.createElement("button");
  de.type = "submit", de.className = "button secondary", de.textContent = a("library", "Reset filtered metadata");
  const Rt = document.createElement("p");
  Rt.className = "library-muted", Rt.textContent = a("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), we.append(Ye, de, Rt);
  const qe = document.createElement("form");
  qe.method = "post", qe.action = v, qe.className = "library-batch-metadata-edit-preview-form", qe.target = "_blank";
  const ut = Mr(e);
  ut && qe.appendChild(ut);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = O, $.value = G(N), qe.appendChild($);
  }
  const Tt = document.createElement("label");
  Tt.textContent = a("library", "Metadata field");
  const wt = document.createElement("select");
  wt.name = "bulkEditField";
  for (const [O, N] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const $ = document.createElement("option");
    $.value = O, $.textContent = a("library", N), wt.appendChild($);
  }
  Tt.appendChild(wt);
  const nt = document.createElement("label");
  nt.textContent = a("library", "Preview value");
  const ft = document.createElement("input");
  ft.type = "text", ft.name = "bulkEditValue", ft.placeholder = "magazine, de, photography...", ft.autocomplete = "off", nt.appendChild(ft);
  const p = document.createElement("button");
  p.type = "submit", p.className = "button secondary", p.textContent = a("library", "Preview & apply metadata edit");
  const b = document.createElement("p");
  b.className = "library-muted", b.textContent = a("library", "Preview first, then apply from the review page."), qe.append(Tt, nt, p, b);
  const _ = document.createElement("form");
  _.method = "post", _.action = y, _.className = "library-batch-cover-refresh-form";
  const k = Mr(e);
  k && _.appendChild(k);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (G(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = O, $.value = G(N), _.appendChild($);
  }
  const S = document.createElement("button");
  S.type = "submit", S.className = "button secondary", S.textContent = a("library", "Request fresh cover previews");
  const x = document.createElement("p");
  x.className = "library-muted", x.textContent = a("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(S, x), Oe.append(je, Se, Fe, we, qe, _), P.appendChild(Oe);
  const M = document.createElement("nav");
  M.className = "library-pagination", M.setAttribute("aria-label", a("library", "Catalogue pagination"));
  const L = document.createElement("span");
  L.className = "library-pagination-range", L.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, M.appendChild(L), P.appendChild(M);
  const I = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], T = document.createElement("details");
  T.className = I.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const K = document.createElement("summary");
  K.className = "library-periodical-groups-summary", K.textContent = a("library", "Show top series and periodicals"), T.appendChild(K);
  const H = document.createElement("h3");
  H.textContent = I.length > 0 ? a("library", "Top series and periodicals") : a("library", "No series or periodicals found yet");
  const z = document.createElement("p");
  if (z.className = "library-muted", z.textContent = I.length > 0 ? a("library", "Jump into recurring publications with one click.") : a("library", "Add publication or series names in item details to build this shortcut panel."), T.append(H, z), I.length > 0) {
    const O = document.createElement("ul");
    for (const N of I) {
      const $ = document.createElement("li"), Q = document.createElement("a");
      Q.href = Lm(N.publication, N), Q.textContent = G(N.publication);
      const ie = document.createElement("span");
      ie.className = "library-muted", ie.textContent = `${N.itemCount} items`, $.append(Q, ie), O.appendChild($);
    }
    T.appendChild(O);
  }
  P.appendChild(T);
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
    const ie = document.createElement("ul");
    for (const be of X) {
      const ce = document.createElement("li"), Ne = document.createElement("a");
      Ne.href = Dm(be, e), Ne.textContent = G(be), ce.appendChild(Ne), ie.appendChild(ce);
    }
    O.append(N, $, Q, ie), P.appendChild(O);
  }
  const Z = Array.isArray(e.creators) ? e.creators : [];
  if (Z.length > 0) {
    const O = document.createElement("details");
    O.className = "library-creator-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = a("library", "Show creators");
    const $ = document.createElement("h3");
    $.textContent = a("library", "Top creators");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = a("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const ie = document.createElement("ul");
    for (const be of Z) {
      const ce = document.createElement("li"), Ne = document.createElement("a");
      Ne.href = Fm(be, e), Ne.textContent = G(be), ce.appendChild(Ne), ie.appendChild(ce);
    }
    O.append(N, $, Q, ie), P.appendChild(O);
  }
  if (r.length === 0) {
    const O = document.createElement("div"), N = Number(e.rootCount || 0), $ = Number(e.enabledRootCount || 0), Q = Hm(e);
    O.className = "library-empty-content", (N === 0 || $ === 0) && O.classList.add("library-first-run-guidance"), Q && N > 0 && $ > 0 && O.classList.add("library-filter-empty-state"), O.setAttribute("role", "status");
    const ie = document.createElement("h3"), be = document.createElement("p");
    be.className = "library-muted";
    const ce = document.createElement("p");
    ce.className = "library-empty-actions", N === 0 ? (ie.textContent = a("library", "Start with one Library root"), be.textContent = a("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Xr(ce, i, "button primary", a("library", "Add a Library root")), jm(ce, a("library", "Run a scan after saving a root"))) : $ === 0 ? (ie.textContent = a("library", "No enabled Library roots"), be.textContent = a("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Xr(ce, i, "button primary", a("library", "Open Library settings"))) : Q ? (ie.textContent = a("library", "No matches for the current filters"), be.textContent = a("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Xr(ce, $m(), "button secondary", a("library", "Clear search")), Xr(ce, "?", "button primary", a("library", "Clear all filters"))) : (ie.textContent = a("library", "No catalogue items yet"), be.textContent = a("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Xr(ce, i, "button primary", a("library", "Run a scan from settings"))), O.append(ie, be, ce), P.appendChild(O);
  } else {
    const O = document.createElement("div");
    O.className = "library-cover-gallery";
    for (const N of r) {
      const $ = document.createElement("article");
      $.className = "library-cover-card";
      const Q = document.createElement("a");
      Q.className = "library-cover-link", Q.href = G(N.openUrl || "#"), Q.setAttribute("aria-label", `Read ${G(N.title || "publication")}`);
      const ie = document.createElement("img");
      ie.className = "library-cover-image", ie.src = G(N.coverUrl || ""), ie.alt = `Cover for ${G(N.title || "publication")}`, ie.loading = "lazy", Q.appendChild(ie);
      const be = Mr(e), ce = document.createElement("form");
      ce.method = "post", ce.action = G(N.starUrl || ""), ce.className = "library-cover-star-form", be && ce.appendChild(be);
      const Ne = document.createElement("input");
      Ne.type = "hidden", Ne.name = "returnTo", Ne.value = "catalogue";
      const Re = document.createElement("input");
      Re.type = "hidden", Re.name = "starred", Re.value = N.starred ? "0" : "1";
      const ke = document.createElement("button");
      ke.type = "submit", ke.className = N.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", ke.setAttribute("aria-pressed", N.starred ? "true" : "false"), ke.setAttribute("aria-label", N.starred ? a("library", "Unstar this publication") : a("library", "Star this publication")), ke.title = N.starred ? a("library", "Unstar this publication") : a("library", "Star this publication"), ke.textContent = N.starred ? "★" : "☆", ce.append(Ne, Re, ke);
      const dt = document.createElement("div");
      dt.className = "library-cover-summary";
      const It = document.createElement("h3");
      if (It.textContent = G(N.title || "Untitled publication"), dt.appendChild(It), N.creators) {
        const Ct = document.createElement("p");
        Ct.className = "library-creator", Ct.textContent = G(N.creators), dt.appendChild(Ct);
      }
      const qt = document.createElement("dl");
      qt.className = "library-cover-detail-list";
      const hr = [
        ["Type", G(N.publicationType || "other")],
        ["Format", N.extension ? Ca(N.extension) : ""],
        ["Shelf", N.shelf ? G(N.shelf) : ""]
      ].filter(([, Ct]) => Ct !== "");
      for (const [Ct, Rr] of hr) {
        const Lt = document.createElement("div");
        Lt.className = "library-cover-detail-chip";
        const zt = document.createElement("dt");
        zt.textContent = Ct;
        const Je = document.createElement("dd");
        Je.textContent = Rr, Lt.append(zt, Je), qt.appendChild(Lt);
      }
      dt.appendChild(qt);
      const Xe = document.createElement("p"), gt = document.createElement("a");
      gt.href = G(N.openUrl || "#"), gt.textContent = a("library", "Read");
      const sr = document.createElement("a");
      sr.href = G(N.filesUrl || "#"), sr.textContent = a("library", "Show in Files");
      const or = document.createElement("a");
      or.href = G(N.downloadUrl || "#"), or.textContent = a("library", "Download source");
      const ar = document.createElement("a");
      ar.href = G(N.detailsUrl || "#"), ar.textContent = a("library", "Details"), Xe.append(gt, document.createTextNode(" · "), sr, document.createTextNode(" · "), or, document.createTextNode(" · "), ar), dt.appendChild(Xe), $.append(Q, ce, dt), O.appendChild($);
    }
    P.appendChild(O);
  }
  return E.appendChild(P), E;
}
if (Pn)
  try {
    cu(Mm, { state: uo }).mount(Pn);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Pn.replaceChildren(zm(uo));
  }
//# sourceMappingURL=library-main.mjs.map
