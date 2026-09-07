// @__NO_SIDE_EFFECTS__
function ws(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const fe = {}, yn = [], Et = () => {
}, oo = () => !1, wr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Cr = (e) => e.startsWith("onUpdate:"), He = Object.assign, Cs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ll = Object.prototype.hasOwnProperty, le = (e, t) => Ll.call(e, t), Y = Array.isArray, Vt = (e) => Xn(e) === "[object Map]", on = (e) => Xn(e) === "[object Set]", li = (e) => Xn(e) === "[object Date]", te = (e) => typeof e == "function", xe = (e) => typeof e == "string", At = (e) => typeof e == "symbol", ue = (e) => e !== null && typeof e == "object", lo = (e) => (ue(e) || te(e)) && te(e.then) && te(e.catch), ao = Object.prototype.toString, Xn = (e) => ao.call(e), Fl = (e) => Xn(e).slice(8, -1), co = (e) => Xn(e) === "[object Object]", Os = (e) => xe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Un = /* @__PURE__ */ ws(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Or = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Ul = /-\w/g, dt = Or(
  (e) => e.replace(Ul, (t) => t.slice(1).toUpperCase())
), kl = /\B([A-Z])/g, ln = Or(
  (e) => e.replace(kl, "-$1").toLowerCase()
), uo = Or((e) => e.charAt(0).toUpperCase() + e.slice(1)), qr = Or(
  (e) => e ? `on${uo(e)}` : ""
), Ot = (e, t) => !Object.is(e, t), pr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, fo = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Rr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ai;
const Pr = () => ai || (ai = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rs(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = xe(r) ? Vl(r) : Rs(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (xe(e) || ue(e))
    return e;
}
const Hl = /;(?![^(]*\))/g, $l = /:([^]+)/, jl = /\/\*[^]*?\*\//g;
function Vl(e) {
  const t = {};
  return e.replace(jl, "").split(Hl).forEach((n) => {
    if (n) {
      const r = n.split($l);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function zn(e) {
  let t = "";
  if (xe(e))
    t = e;
  else if (Y(e))
    for (let n = 0; n < e.length; n++) {
      const r = zn(e[n]);
      r && (t += r + " ");
    }
  else if (ue(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const zl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Bl = /* @__PURE__ */ ws(zl);
function po(e) {
  return !!e || e === "";
}
function Wl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = zt(e[r], t[r]);
  return n;
}
function ci(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const s of e) {
    let i = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && zt(s, n[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    r[i] = 1;
  }
  return !0;
}
function zt(e, t) {
  if (e === t) return !0;
  let n = li(e), r = li(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = At(e), r = At(t), n || r)
    return e === t;
  if (n = Y(e), r = Y(t), n || r)
    return n && r ? Wl(e, t) : !1;
  if (n = ue(e), r = ue(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = Vt(e), r = Vt(t), n || r || (n = on(e), r = on(t), n || r))
      return n && r ? ci(e, t) : !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !zt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Kl(e, t) {
  return e.findIndex((n) => zt(n, t));
}
const ho = (e) => !!(e && e.__v_isRef === !0), v = (e) => xe(e) ? e : e == null ? "" : Y(e) || ue(e) && (e.toString === ao || !te(e.toString)) ? ho(e) ? v(e.value) : JSON.stringify(e, mo, 2) : String(e), mo = (e, t) => ho(t) ? mo(e, t.value) : Vt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Yr(r, i) + " =>"] = s, n),
    {}
  )
} : on(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yr(n))
} : At(t) ? Yr(t) : ue(t) && !Y(t) && !co(t) ? String(t) : t, Yr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    At(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Le;
class Gl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Le && (Le.active ? (this.parent = Le, this.index = (Le.scopes || (Le.scopes = [])).push(
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
        const s = this.scopes.slice();
        for (t = 0, n = s.length; t < n; t++)
          s[t].resume();
      }
      const r = this.effects.slice();
      for (t = 0, n = r.length; t < n; t++)
        r[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Le;
      try {
        return Le = this, t();
      } finally {
        Le = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Le, Le = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Le === this)
        Le = this.prevScope;
      else {
        let t = Le;
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
        const s = this.scopes.slice();
        for (n = 0, r = s.length; n < r; n++)
          s[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ql() {
  return Le;
}
let pe;
const Xr = /* @__PURE__ */ new WeakSet();
class go {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Le && (Le.active ? Le.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Xr.has(this) && (Xr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || yo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ui(this), _o(this);
    const t = pe, n = pt;
    pe = this, pt = !0;
    try {
      return this.fn();
    } finally {
      To(this), pe = t, pt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Is(t);
      this.deps = this.depsTail = void 0, ui(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Xr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    hs(this) && this.run();
  }
  get dirty() {
    return hs(this);
  }
}
let bo = 0, kn, Hn;
function yo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Hn, Hn = e;
    return;
  }
  e.next = kn, kn = e;
}
function Ps() {
  bo++;
}
function Ns() {
  if (--bo > 0)
    return;
  if (Hn) {
    let t = Hn;
    for (Hn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; kn; ) {
    let t = kn;
    for (kn = void 0; t; ) {
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
function _o(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function To(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Is(r), Yl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function hs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (vo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function vo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Bn) || (e.globalVersion = Bn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !hs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = pe, r = pt;
  pe = e, pt = !0;
  try {
    _o(e);
    const s = e.fn(e._value);
    (t.version === 0 || Ot(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    pe = n, pt = r, To(e), e.flags &= -3;
  }
}
function Is(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Is(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Yl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let pt = !0;
const So = [];
function It() {
  So.push(pt), pt = !1;
}
function Dt() {
  const e = So.pop();
  pt = e === void 0 ? !0 : e;
}
function ui(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = pe;
    pe = void 0;
    try {
      t();
    } finally {
      pe = n;
    }
  }
}
let Bn = 0;
class Xl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Eo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!pe || !pt || pe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== pe)
      n = this.activeLink = new Xl(pe, this), pe.deps ? (n.prevDep = pe.depsTail, pe.depsTail.nextDep = n, pe.depsTail = n) : pe.deps = pe.depsTail = n, Ao(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = pe.depsTail, n.nextDep = void 0, pe.depsTail.nextDep = n, pe.depsTail = n, pe.deps === n && (pe.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Bn++, this.notify(t);
  }
  notify(t) {
    Ps();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ns();
    }
  }
}
function Ao(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Ao(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ms = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ Symbol(
  ""
), gs = /* @__PURE__ */ Symbol(
  ""
), Wn = /* @__PURE__ */ Symbol(
  ""
);
function ke(e, t, n) {
  if (pt && pe) {
    let r = ms.get(e);
    r || ms.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Eo()), s.map = r, s.key = n), s.track();
  }
}
function Rt(e, t, n, r, s, i) {
  const o = ms.get(e);
  if (!o) {
    Bn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Ps(), t === "clear")
    o.forEach(l);
  else {
    const c = Y(e), m = c && Os(n);
    if (c && n === "length") {
      const d = Number(r);
      o.forEach((T, I) => {
        (I === "length" || I === Wn || !At(I) && I >= d) && l(T);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), m && l(o.get(Wn)), t) {
        case "add":
          c ? m && l(o.get("length")) : (l(o.get(nn)), Vt(e) && l(o.get(gs)));
          break;
        case "delete":
          c || (l(o.get(nn)), Vt(e) && l(o.get(gs)));
          break;
        case "set":
          Vt(e) && l(o.get(nn));
          break;
      }
  }
  Ns();
}
function hn(e) {
  const t = /* @__PURE__ */ ce(e);
  return t === e ? t : (ke(t, "iterate", Wn), /* @__PURE__ */ ht(e) ? t : t.map(Mt));
}
function Nr(e) {
  return ke(e = /* @__PURE__ */ ce(e), "iterate", Wn), e;
}
function vt(e, t) {
  return /* @__PURE__ */ Bt(e) ? En(/* @__PURE__ */ rn(e) ? Mt(t) : t) : Mt(t);
}
const Jl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Jr(this, Symbol.iterator, (e) => vt(this, e));
  },
  concat(...e) {
    return hn(this).concat(
      ...e.map((t) => Y(t) ? hn(t) : t)
    );
  },
  entries() {
    return Jr(this, "entries", (e) => (e[1] = vt(this, e[1]), e));
  },
  every(e, t) {
    return xt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return xt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => vt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return xt(
      this,
      "find",
      e,
      t,
      (n) => vt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return xt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return xt(
      this,
      "findLast",
      e,
      t,
      (n) => vt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return xt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return xt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Zr(this, "includes", e);
  },
  indexOf(...e) {
    return Zr(this, "indexOf", e);
  },
  join(e) {
    return hn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Zr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return xt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Rn(this, "pop");
  },
  push(...e) {
    return Rn(this, "push", e);
  },
  reduce(e, ...t) {
    return fi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fi(this, "reduceRight", e, t);
  },
  shift() {
    return Rn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return xt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Rn(this, "splice", e);
  },
  toReversed() {
    return hn(this).toReversed();
  },
  toSorted(e) {
    return hn(this).toSorted(e);
  },
  toSpliced(...e) {
    return hn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Rn(this, "unshift", e);
  },
  values() {
    return Jr(this, "values", (e) => vt(this, e));
  }
};
function Jr(e, t, n) {
  const r = Nr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ ht(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Zl = Array.prototype;
function xt(e, t, n, r, s, i) {
  const o = Nr(e), l = o !== e && !/* @__PURE__ */ ht(e), c = o[t];
  if (c !== Zl[t]) {
    const T = c.apply(e, i);
    return l ? Mt(T) : T;
  }
  let m = n;
  o !== e && (l ? m = function(T, I) {
    return n.call(this, vt(e, T), I, e);
  } : n.length > 2 && (m = function(T, I) {
    return n.call(this, T, I, e);
  }));
  const d = c.call(o, m, r);
  return l && s ? s(d) : d;
}
function fi(e, t, n, r) {
  const s = Nr(e), i = s !== e && !/* @__PURE__ */ ht(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(m, d, T) {
    return l && (l = !1, m = vt(e, m)), n.call(this, m, vt(e, d), T, e);
  }) : n.length > 3 && (o = function(m, d, T) {
    return n.call(this, m, d, T, e);
  }));
  const c = s[t](o, ...r);
  return l ? vt(e, c) : c;
}
function Zr(e, t, n) {
  const r = /* @__PURE__ */ ce(e);
  ke(r, "iterate", Wn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ ce(n[0]), r[t](...n)) : s;
}
function Rn(e, t, n = []) {
  It(), Ps();
  const r = (/* @__PURE__ */ ce(e))[t].apply(e, n);
  return Ns(), Dt(), r;
}
const Ql = /* @__PURE__ */ ws("__proto__,__v_isRef,__isVue"), xo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(At)
);
function ea(e) {
  At(e) || (e = String(e));
  const t = /* @__PURE__ */ ce(this);
  return ke(t, "has", e), t.hasOwnProperty(e);
}
class wo {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return r === (s ? i ? ua : Po : i ? Ro : Oo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = Y(t);
    if (!s) {
      let c;
      if (o && (c = Jl[n]))
        return c;
      if (n === "hasOwnProperty")
        return ea;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ye(t) ? t : r
    );
    if ((At(n) ? xo.has(n) : Ql(n)) || (s || ke(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ Ye(l)) {
      const c = o && Os(n) ? l : l.value;
      return s && ue(c) ? /* @__PURE__ */ ys(c) : c;
    }
    return ue(l) ? s ? /* @__PURE__ */ ys(l) : /* @__PURE__ */ _n(l) : l;
  }
}
class Co extends wo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = Y(t) && Os(n);
    if (!this._isShallow) {
      const m = /* @__PURE__ */ Bt(i);
      if (!/* @__PURE__ */ ht(r) && !/* @__PURE__ */ Bt(r) && (i = /* @__PURE__ */ ce(i), r = /* @__PURE__ */ ce(r)), !o && /* @__PURE__ */ Ye(i) && !/* @__PURE__ */ Ye(r))
        return m || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : le(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Ye(t) ? t : s
    );
    return t === /* @__PURE__ */ ce(s) && c && (l ? Ot(r, i) && Rt(t, "set", n, r) : Rt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = le(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Rt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!At(n) || !xo.has(n)) && ke(t, "has", n), r;
  }
  ownKeys(t) {
    return ke(
      t,
      "iterate",
      Y(t) ? "length" : nn
    ), Reflect.ownKeys(t);
  }
}
class ta extends wo {
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
const na = /* @__PURE__ */ new Co(), ra = /* @__PURE__ */ new ta(), sa = /* @__PURE__ */ new Co(!0);
const bs = (e) => e, lr = (e) => Reflect.getPrototypeOf(e);
function ia(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ ce(s), o = Vt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, m = s[e](...r), d = n ? bs : t ? En : Mt;
    return !t && ke(
      i,
      "iterate",
      c ? gs : nn
    ), He(
      // inheriting all iterator properties
      Object.create(m),
      {
        // iterator protocol
        next() {
          const { value: T, done: I } = m.next();
          return I ? { value: T, done: I } : {
            value: l ? [d(T[0]), d(T[1])] : d(T),
            done: I
          };
        }
      }
    );
  };
}
function ar(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function oa(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ce(i), l = /* @__PURE__ */ ce(s);
      e || (Ot(s, l) && ke(o, "get", s), ke(o, "get", l));
      const { has: c } = lr(o), m = t ? bs : e ? En : Mt;
      if (c.call(o, s))
        return m(i.get(s));
      if (c.call(o, l))
        return m(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && ke(/* @__PURE__ */ ce(s), "iterate", nn), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ce(i), l = /* @__PURE__ */ ce(s);
      return e || (Ot(s, l) && ke(o, "has", s), ke(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ ce(l), m = t ? bs : e ? En : Mt;
      return !e && ke(c, "iterate", nn), l.forEach((d, T) => s.call(i, m(d), m(T), o));
    }
  };
  return He(
    n,
    e ? {
      add: ar("add"),
      set: ar("set"),
      delete: ar("delete"),
      clear: ar("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ ce(this), o = lr(i), l = /* @__PURE__ */ ce(s), c = !t && !/* @__PURE__ */ ht(s) && !/* @__PURE__ */ Bt(s) ? l : s;
        return o.has.call(i, c) || Ot(s, c) && o.has.call(i, s) || Ot(l, c) && o.has.call(i, l) || (i.add(c), Rt(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ ht(i) && !/* @__PURE__ */ Bt(i) && (i = /* @__PURE__ */ ce(i));
        const o = /* @__PURE__ */ ce(this), { has: l, get: c } = lr(o);
        let m = l.call(o, s);
        m || (s = /* @__PURE__ */ ce(s), m = l.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), m ? Ot(i, d) && Rt(o, "set", s, i) : Rt(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ ce(this), { has: o, get: l } = lr(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ ce(s), c = o.call(i, s)), l && l.call(i, s);
        const m = i.delete(s);
        return c && Rt(i, "delete", s, void 0), m;
      },
      clear() {
        const s = /* @__PURE__ */ ce(this), i = s.size !== 0, o = s.clear();
        return i && Rt(
          s,
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
  ].forEach((s) => {
    n[s] = ia(s, e, t);
  }), n;
}
function Ds(e, t) {
  const n = oa(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    le(n, s) && s in r ? n : r,
    s,
    i
  );
}
const la = {
  get: /* @__PURE__ */ Ds(!1, !1)
}, aa = {
  get: /* @__PURE__ */ Ds(!1, !0)
}, ca = {
  get: /* @__PURE__ */ Ds(!0, !1)
};
const Oo = /* @__PURE__ */ new WeakMap(), Ro = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakMap();
function fa(e) {
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
function _n(e) {
  return /* @__PURE__ */ Bt(e) ? e : Ms(
    e,
    !1,
    na,
    la,
    Oo
  );
}
// @__NO_SIDE_EFFECTS__
function da(e) {
  return Ms(
    e,
    !1,
    sa,
    aa,
    Ro
  );
}
// @__NO_SIDE_EFFECTS__
function ys(e) {
  return Ms(
    e,
    !0,
    ra,
    ca,
    Po
  );
}
function Ms(e, t, n, r, s) {
  if (!ue(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const o = fa(Fl(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
  return /* @__PURE__ */ Bt(e) ? /* @__PURE__ */ rn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ht(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ce(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ce(t) : e;
}
function pa(e) {
  return !le(e, "__v_skip") && Object.isExtensible(e) && fo(e, "__v_skip", !0), e;
}
const Mt = (e) => ue(e) ? /* @__PURE__ */ _n(e) : e, En = (e) => ue(e) ? /* @__PURE__ */ ys(e) : e;
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function C(e) {
  return /* @__PURE__ */ Ye(e) ? e.value : e;
}
const ha = {
  get: (e, t, n) => t === "__v_raw" ? e : C(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ Ye(s) && !/* @__PURE__ */ Ye(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function No(e) {
  return /* @__PURE__ */ rn(e) ? e : new Proxy(e, ha);
}
class ma {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Eo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Bn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    pe !== this)
      return yo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return vo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ga(e, t, n = !1) {
  let r, s;
  return te(e) ? r = e : (r = e.get, s = e.set), new ma(r, s, n);
}
const cr = {}, br = /* @__PURE__ */ new WeakMap();
let Zt;
function ba(e, t = !1, n = Zt) {
  if (n) {
    let r = br.get(n);
    r || br.set(n, r = []), r.push(e);
  }
}
function ya(e, t, n = fe) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, m = (M) => s ? M : /* @__PURE__ */ ht(M) || s === !1 || s === 0 ? Pt(M, 1) : Pt(M);
  let d, T, I, U, J = !1, k = !1;
  if (/* @__PURE__ */ Ye(e) ? (T = () => e.value, J = /* @__PURE__ */ ht(e)) : /* @__PURE__ */ rn(e) ? (T = () => m(e), J = !0) : Y(e) ? (k = !0, J = e.some((M) => /* @__PURE__ */ rn(M) || /* @__PURE__ */ ht(M)), T = () => e.map((M) => {
    if (/* @__PURE__ */ Ye(M))
      return M.value;
    if (/* @__PURE__ */ rn(M))
      return m(M);
    if (te(M))
      return c ? c(M, 2) : M();
  })) : te(e) ? t ? T = c ? () => c(e, 2) : e : T = () => {
    if (I) {
      It();
      try {
        I();
      } finally {
        Dt();
      }
    }
    const M = Zt;
    Zt = d;
    try {
      return c ? c(e, 3, [U]) : e(U);
    } finally {
      Zt = M;
    }
  } : T = Et, t && s) {
    const M = T, se = s === !0 ? 1 / 0 : s;
    T = () => Pt(M(), se);
  }
  const q = ql(), F = () => {
    d.stop(), q && q.active && Cs(q.effects, d);
  };
  if (i && t) {
    const M = t;
    t = (...se) => {
      const we = M(...se);
      return F(), we;
    };
  }
  let Z = k ? new Array(e.length).fill(cr) : cr;
  const Q = (M) => {
    if (!(!(d.flags & 1) || !d.dirty && !M))
      if (t) {
        const se = d.run();
        if (M || s || J || (k ? se.some((we, Ee) => Ot(we, Z[Ee])) : Ot(se, Z))) {
          I && I();
          const we = Zt;
          Zt = d;
          try {
            const Ee = [
              se,
              // pass undefined as the old value when it's changed for the first time
              Z === cr ? void 0 : k && Z[0] === cr ? [] : Z,
              U
            ];
            Z = se, c ? c(t, 3, Ee) : (
              // @ts-expect-error
              t(...Ee)
            );
          } finally {
            Zt = we;
          }
        }
      } else
        d.run();
  };
  return l && l(Q), d = new go(T), d.scheduler = o ? () => o(Q, !1) : Q, U = (M) => ba(M, !1, d), I = d.onStop = () => {
    const M = br.get(d);
    if (M) {
      if (c)
        c(M, 4);
      else
        for (const se of M) se();
      br.delete(d);
    }
  }, t ? r ? Q(!0) : Z = d.run() : o ? o(Q.bind(null, !0), !0) : d.run(), F.pause = d.pause.bind(d), F.resume = d.resume.bind(d), F.stop = F, F;
}
function Pt(e, t = 1 / 0, n) {
  if (t <= 0 || !ue(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ye(e))
    Pt(e.value, t, n);
  else if (Y(e))
    for (let r = 0; r < e.length; r++)
      Pt(e[r], t, n);
  else if (on(e) || Vt(e))
    e.forEach((r) => {
      Pt(r, t, n);
    });
  else if (co(e)) {
    for (const r in e)
      Pt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Pt(e[r], t, n);
  }
  return e;
}
function Jn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Ir(s, t, n);
  }
}
function mt(e, t, n, r) {
  if (te(e)) {
    const s = Jn(e, t, n, r);
    return s && lo(s) && s.catch((i) => {
      Ir(i, t, n);
    }), s;
  }
  if (Y(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(mt(e[i], t, n, r));
    return s;
  }
}
function Ir(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || fe;
  if (t) {
    let l = t.parent;
    const c = t.proxy, m = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let T = 0; T < d.length; T++)
          if (d[T](e, c, m) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      It(), Jn(i, null, 10, [
        e,
        c,
        m
      ]), Dt();
      return;
    }
  }
  _a(e, n, s, r, o);
}
function _a(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const Ge = [];
let Tt = -1;
const Tn = [];
let jt = null, gn = 0;
const Io = /* @__PURE__ */ Promise.resolve();
let yr = null;
function Do(e) {
  const t = yr || Io;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ta(e) {
  let t = Tt + 1, n = Ge.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = Ge[r], i = Kn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = Kn(e), n = Ge[Ge.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kn(n) ? Ge.push(e) : Ge.splice(Ta(t), 0, e), e.flags |= 1, Mo();
  }
}
function Mo() {
  yr || (yr = Io.then(Fo));
}
function va(e) {
  if (!Y(e))
    jt && e.id === -1 ? jt.splice(gn + 1, 0, e) : e.flags & 1 || (Tn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Tn.push(e[t]);
  Mo();
}
function di(e, t, n = Tt + 1) {
  for (; n < Ge.length; n++) {
    const r = Ge[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Ge.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Lo(e) {
  if (Tn.length) {
    const t = [...new Set(Tn)].sort(
      (n, r) => Kn(n) - Kn(r)
    );
    if (Tn.length = 0, jt) {
      for (let n = 0; n < t.length; n++)
        jt.push(t[n]);
      return;
    }
    for (jt = t, gn = 0; gn < jt.length; gn++) {
      const n = jt[gn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    jt = null, gn = 0;
  }
}
const Kn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Fo(e) {
  try {
    for (Tt = 0; Tt < Ge.length; Tt++) {
      const t = Ge[Tt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Jn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Tt < Ge.length; Tt++) {
      const t = Ge[Tt];
      t && (t.flags &= -2);
    }
    Tt = -1, Ge.length = 0, Lo(), yr = null, (Ge.length || Tn.length) && Fo();
  }
}
let ct = null, Uo = null;
function _r(e) {
  const t = ct;
  return ct = e, Uo = e && e.type.__scopeId || null, t;
}
function Sa(e, t = ct, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Ei(-1);
    const i = _r(t), o = sn.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = sn.length; c > o; c--) ll();
      _r(i), r._d && Ei(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Be(e, t) {
  if (ct === null)
    return e;
  const n = Ur(ct), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = fe] = t[s];
    i && (te(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Pt(o), r.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function Yt(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[r];
    c && (It(), mt(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Dt());
  }
}
function Ea(e, t) {
  if (qe) {
    let n = qe.provides;
    const r = qe.parent && qe.parent.provides;
    r === n && (n = qe.provides = Object.create(r)), n[e] = t;
  }
}
function hr(e, t, n = !1) {
  const r = vc();
  if (r || vn) {
    let s = vn ? vn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && te(t) ? t.call(r && r.proxy) : t;
  }
}
const Aa = /* @__PURE__ */ Symbol.for("v-scx"), xa = () => hr(Aa);
function Qr(e, t, n) {
  return ko(e, t, n);
}
function ko(e, t, n = fe) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = He({}, n), c = t && r || !t && i !== "post";
  let m;
  if (Yn) {
    if (i === "sync") {
      const U = xa();
      m = U.__watcherHandles || (U.__watcherHandles = []);
    } else if (!c) {
      const U = () => {
      };
      return U.stop = Et, U.resume = Et, U.pause = Et, U;
    }
  }
  const d = qe;
  l.call = (U, J, k) => mt(U, d, J, k);
  let T = !1;
  i === "post" ? l.scheduler = (U) => {
    et(U, d && d.suspense);
  } : i !== "sync" && (T = !0, l.scheduler = (U, J) => {
    J ? U() : Fs(U);
  }), l.augmentJob = (U) => {
    t && (U.flags |= 4), T && (U.flags |= 2, d && (U.id = d.uid, U.i = d));
  };
  const I = ya(e, t, l);
  return Yn && (m ? m.push(I) : c && I()), I;
}
function wa(e, t, n) {
  const r = this.proxy, s = xe(e) ? e.includes(".") ? Ho(r, e) : () => r[e] : e.bind(r, r);
  let i;
  te(t) ? i = t : (i = t.handler, n = t);
  const o = Zn(this), l = ko(s, i.bind(r), n);
  return o(), l;
}
function Ho(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const Ca = /* @__PURE__ */ Symbol("_vte"), Dr = (e) => e.__isTeleport, es = /* @__PURE__ */ Symbol("_leaveCb");
function Oa(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Lt) {
        t = n;
        break;
      }
  }
  return t;
}
function $o(e) {
  if (!ks(e))
    return Dr(e.type) && e.children ? Oa(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && te(n.default))
      return n.default();
  }
}
function Us(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Us(
      Dr(n.type) && $o(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function jo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function pi(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Tr = /* @__PURE__ */ new WeakMap();
function $n(e, t, n, r, s = !1) {
  if (Y(e)) {
    e.forEach(
      (k, q) => $n(
        k,
        t && (Y(t) ? t[q] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (jn(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && $n(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Ur(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, m = t && t.r, d = l.refs === fe ? l.refs = {} : l.refs, T = l.setupState, I = /* @__PURE__ */ ce(T), U = T === fe ? oo : (k) => pi(d, k) ? !1 : le(I, k), J = (k, q) => !(q && pi(d, q));
  if (m != null && m !== c) {
    if (hi(t), xe(m))
      d[m] = null, U(m) && (T[m] = null);
    else if (/* @__PURE__ */ Ye(m)) {
      const k = t;
      J(m, k.k) && (m.value = null), k.k && (d[k.k] = null);
    }
  }
  if (te(c))
    Jn(c, l, 12, [o, d]);
  else {
    const k = xe(c), q = /* @__PURE__ */ Ye(c);
    if (k || q) {
      const F = () => {
        if (e.f) {
          const Z = k ? U(c) ? T[c] : d[c] : J() || !e.k ? c.value : d[e.k];
          if (s)
            Y(Z) && Cs(Z, i);
          else if (Y(Z))
            Z.includes(i) || Z.push(i);
          else if (k)
            d[c] = [i], U(c) && (T[c] = d[c]);
          else {
            const Q = [i];
            J(c, e.k) && (c.value = Q), e.k && (d[e.k] = Q);
          }
        } else k ? (d[c] = o, U(c) && (T[c] = o)) : q && (J(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const Z = () => {
          F(), Tr.delete(e);
        };
        Z.id = -1, Tr.set(e, Z), et(Z, n);
      } else
        hi(e), F();
    }
  }
}
function hi(e) {
  const t = Tr.get(e);
  t && (t.flags |= 8, Tr.delete(e));
}
Pr().requestIdleCallback;
Pr().cancelIdleCallback;
const jn = (e) => !!e.type.__asyncLoader, ks = (e) => e.type.__isKeepAlive;
function Ra(e, t) {
  Vo(e, "a", t);
}
function Pa(e, t) {
  Vo(e, "da", t);
}
function Vo(e, t, n = qe) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Mr(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      ks(s.parent.vnode) && Na(r, t, n, s), s = s.parent;
  }
}
function Na(e, t, n, r) {
  const s = Mr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  zo(() => {
    Cs(r[t], s);
  }, n);
}
function Mr(e, t, n = qe, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      It();
      const l = Zn(n), c = mt(t, n, e, o);
      return l(), Dt(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Ft = (e) => (t, n = qe) => {
  (!Yn || e === "sp") && Mr(e, (...r) => t(...r), n);
}, Ia = Ft("bm"), Da = Ft("m"), Ma = Ft(
  "bu"
), La = Ft("u"), Fa = Ft(
  "bum"
), zo = Ft("um"), Ua = Ft(
  "sp"
), ka = Ft("rtg"), Ha = Ft("rtc");
function $a(e, t = qe) {
  Mr("ec", e, t);
}
const ja = /* @__PURE__ */ Symbol.for("v-ndc");
function We(e, t, n, r) {
  let s;
  const i = n, o = Y(e);
  if (o || xe(e)) {
    const l = o && /* @__PURE__ */ rn(e);
    let c = !1, m = !1;
    l && (c = !/* @__PURE__ */ ht(e), m = /* @__PURE__ */ Bt(e), e = Nr(e)), s = new Array(e.length);
    for (let d = 0, T = e.length; d < T; d++)
      s[d] = t(
        c ? m ? En(Mt(e[d])) : Mt(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (ue(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let c = 0, m = l.length; c < m; c++) {
        const d = l[c];
        s[c] = t(e[d], d, c, i);
      }
    }
  else
    s = [];
  return s;
}
const _s = (e) => e ? fl(e) ? Ur(e) : _s(e.parent) : null, Vn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ He(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _s(e.parent),
    $root: (e) => _s(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Wo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Do.bind(e.proxy)),
    $watch: (e) => wa.bind(e)
  })
), ts = (e, t) => e !== fe && !e.__isScriptSetup && le(e, t), Va = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const I = o[t];
      if (I !== void 0)
        switch (I) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (ts(r, t))
          return o[t] = 1, r[t];
        if (s !== fe && le(s, t))
          return o[t] = 2, s[t];
        if (le(i, t))
          return o[t] = 3, i[t];
        if (n !== fe && le(n, t))
          return o[t] = 4, n[t];
        Ts && (o[t] = 0);
      }
    }
    const m = Vn[t];
    let d, T;
    if (m)
      return t === "$attrs" && ke(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== fe && le(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      T = c.config.globalProperties, le(T, t)
    )
      return T[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return ts(s, t) ? (s[t] = n, !0) : r !== fe && le(r, t) ? (r[t] = n, !0) : le(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== fe && l[0] !== "$" && le(e, l) || ts(t, l) || le(i, l) || le(r, l) || le(Vn, l) || le(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : le(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function mi(e) {
  return Y(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Ts = !0;
function za(e) {
  const t = Wo(e), n = e.proxy, r = e.ctx;
  Ts = !1, t.beforeCreate && gi(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: m,
    // lifecycle
    created: d,
    beforeMount: T,
    mounted: I,
    beforeUpdate: U,
    updated: J,
    activated: k,
    deactivated: q,
    beforeDestroy: F,
    beforeUnmount: Z,
    destroyed: Q,
    unmounted: M,
    render: se,
    renderTracked: we,
    renderTriggered: Ee,
    errorCaptured: K,
    serverPrefetch: B,
    // public API
    expose: ae,
    inheritAttrs: he,
    // assets
    components: me,
    directives: Ce,
    filters: $e
  } = t;
  if (m && Ba(m, r, null), o)
    for (const H in o) {
      const w = o[H];
      te(w) && (r[H] = w.bind(n));
    }
  if (s) {
    const H = s.call(n, n);
    ue(H) && (e.data = /* @__PURE__ */ _n(H));
  }
  if (Ts = !0, i)
    for (const H in i) {
      const w = i[H], h = te(w) ? w.bind(n, n) : te(w.get) ? w.get.bind(n, n) : Et, _e = !te(w) && te(w.set) ? w.set.bind(n) : Et, nt = Re({
        get: h,
        set: _e
      });
      Object.defineProperty(r, H, {
        enumerable: !0,
        configurable: !0,
        get: () => nt.value,
        set: (je) => nt.value = je
      });
    }
  if (l)
    for (const H in l)
      Bo(l[H], r, n, H);
  if (c) {
    const H = te(c) ? c.call(n) : c;
    Reflect.ownKeys(H).forEach((w) => {
      Ea(w, H[w]);
    });
  }
  d && gi(d, e, "c");
  function ge(H, w) {
    Y(w) ? w.forEach((h) => H(h.bind(n))) : w && H(w.bind(n));
  }
  if (ge(Ia, T), ge(Da, I), ge(Ma, U), ge(La, J), ge(Ra, k), ge(Pa, q), ge($a, K), ge(Ha, we), ge(ka, Ee), ge(Fa, Z), ge(zo, M), ge(Ua, B), Y(ae))
    if (ae.length) {
      const H = e.exposed || (e.exposed = {});
      ae.forEach((w) => {
        Object.defineProperty(H, w, {
          get: () => n[w],
          set: (h) => n[w] = h,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  se && e.render === Et && (e.render = se), he != null && (e.inheritAttrs = he), me && (e.components = me), Ce && (e.directives = Ce), B && jo(e);
}
function Ba(e, t, n = Et) {
  Y(e) && (e = vs(e));
  for (const r in e) {
    const s = e[r];
    let i;
    ue(s) ? "default" in s ? i = hr(
      s.from || r,
      s.default,
      !0
    ) : i = hr(s.from || r) : i = hr(s), /* @__PURE__ */ Ye(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function gi(e, t, n) {
  mt(
    Y(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Bo(e, t, n, r) {
  let s = r.includes(".") ? Ho(n, r) : () => n[r];
  if (xe(e)) {
    const i = t[e];
    te(i) && Qr(s, i);
  } else if (te(e))
    Qr(s, e.bind(n));
  else if (ue(e))
    if (Y(e))
      e.forEach((i) => Bo(i, t, n, r));
    else {
      const i = te(e.handler) ? e.handler.bind(n) : t[e.handler];
      te(i) && Qr(s, i, e);
    }
}
function Wo(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach(
    (m) => vr(c, m, o, !0)
  ), vr(c, t, o)), ue(t) && i.set(t, c), c;
}
function vr(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && vr(e, i, n, !0), s && s.forEach(
    (o) => vr(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = Wa[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Wa = {
  data: bi,
  props: yi,
  emits: yi,
  // objects
  methods: Mn,
  computed: Mn,
  // lifecycle
  beforeCreate: Ke,
  created: Ke,
  beforeMount: Ke,
  mounted: Ke,
  beforeUpdate: Ke,
  updated: Ke,
  beforeDestroy: Ke,
  beforeUnmount: Ke,
  destroyed: Ke,
  unmounted: Ke,
  activated: Ke,
  deactivated: Ke,
  errorCaptured: Ke,
  serverPrefetch: Ke,
  // assets
  components: Mn,
  directives: Mn,
  // watch
  watch: Ga,
  // provide / inject
  provide: bi,
  inject: Ka
};
function bi(e, t) {
  return t ? e ? function() {
    return He(
      te(e) ? e.call(this, this) : e,
      te(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ka(e, t) {
  return Mn(vs(e), vs(t));
}
function vs(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ke(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Mn(e, t) {
  return e ? He(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function yi(e, t) {
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : He(
    /* @__PURE__ */ Object.create(null),
    mi(e),
    mi(t ?? {})
  ) : t;
}
function Ga(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = He(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ke(e[r], t[r]);
  return n;
}
function Ko() {
  return {
    app: null,
    config: {
      isNativeTag: oo,
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
let qa = 0;
function Ya(e, t) {
  return function(r, s = null) {
    te(r) || (r = He({}, r)), s != null && !ue(s) && (s = null);
    const i = Ko(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const m = i.app = {
      _uid: qa++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Cc,
      get config() {
        return i.config;
      },
      set config(d) {
      },
      use(d, ...T) {
        return o.has(d) || (d && te(d.install) ? (o.add(d), d.install(m, ...T)) : te(d) && (o.add(d), d(m, ...T))), m;
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), m;
      },
      component(d, T) {
        return T ? (i.components[d] = T, m) : i.components[d];
      },
      directive(d, T) {
        return T ? (i.directives[d] = T, m) : i.directives[d];
      },
      mount(d, T, I) {
        if (!c) {
          const U = m._ceVNode || Nt(r, s);
          return U.appContext = i, I === !0 ? I = "svg" : I === !1 && (I = void 0), e(U, d, I), c = !0, m._container = d, d.__vue_app__ = m, Ur(U.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c && (mt(
          l,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(d, T) {
        return i.provides[d] = T, m;
      },
      runWithContext(d) {
        const T = vn;
        vn = m;
        try {
          return d();
        } finally {
          vn = T;
        }
      }
    };
    return m;
  };
}
let vn = null;
const Xa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${dt(t)}Modifiers`] || e[`${ln(t)}Modifiers`];
function Ja(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || fe;
  let s = n;
  const i = t.startsWith("update:"), o = i && Xa(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => xe(d) ? d.trim() : d)), o.number && (s = s.map(Rr)));
  let l, c = r[l = qr(t)] || // also try camelCase event handler (#2249)
  r[l = qr(dt(t))];
  !c && i && (c = r[l = qr(ln(t))]), c && mt(
    c,
    e,
    6,
    s
  );
  const m = r[l + "Once"];
  if (m) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, mt(
      m,
      e,
      6,
      s
    );
  }
}
const Za = /* @__PURE__ */ new WeakMap();
function Go(e, t, n = !1) {
  const r = n ? Za : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {}, l = !1;
  if (!te(e)) {
    const c = (m) => {
      const d = Go(m, t, !0);
      d && (l = !0, He(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (ue(e) && r.set(e, null), null) : (Y(i) ? i.forEach((c) => o[c] = null) : He(o, i), ue(e) && r.set(e, o), o);
}
function Lr(e, t) {
  return !e || !wr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), le(e, t[0].toLowerCase() + t.slice(1)) || le(e, ln(t)) || le(e, t));
}
function _i(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: c,
    render: m,
    renderCache: d,
    props: T,
    data: I,
    setupState: U,
    ctx: J,
    inheritAttrs: k
  } = e, q = _r(e);
  let F, Z;
  try {
    if (n.shapeFlag & 4) {
      const M = s || r, se = M;
      F = St(
        m.call(
          se,
          M,
          d,
          T,
          U,
          I,
          J
        )
      ), Z = l;
    } else {
      const M = t;
      F = St(
        M.length > 1 ? M(
          T,
          { attrs: l, slots: o, emit: c }
        ) : M(
          T,
          null
        )
      ), Z = t.props ? l : Qa(l);
    }
  } catch (M) {
    sn.length = 0, Ir(M, e, 1), F = Nt(Lt);
  }
  let Q = F;
  if (Z && k !== !1) {
    const M = Object.keys(Z), { shapeFlag: se } = Q;
    M.length && se & 7 && (i && M.some(Cr) && (Z = ec(
      Z,
      i
    )), Q = An(Q, Z, !1, !0));
  }
  if (n.dirs && (Q = An(Q, null, !1, !0), Q.dirs = Q.dirs ? Q.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const M = Dr(Q.type) && $o(Q) || Q;
    Us(M, n.transition);
  }
  return F = Q, _r(q), F;
}
const Qa = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || wr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ec = (e, t) => {
  const n = {};
  for (const r in e)
    (!Cr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function tc(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: c } = t, m = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? Ti(r, o, m) : !!o;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let T = 0; T < d.length; T++) {
        const I = d[T];
        if (qo(o, r, I) && !Lr(m, I))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Ti(r, o, m) : !0 : !!o;
  return !1;
}
function Ti(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (qo(t, e, i) && !Lr(n, i))
      return !0;
  }
  return !1;
}
function qo(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && ue(r) && ue(s) ? !zt(r, s) : r !== s;
}
function nc({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = r, e = s), s === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Yo = {}, Xo = () => Object.create(Yo), Jo = (e) => Object.getPrototypeOf(e) === Yo;
function rc(e, t, n, r = !1) {
  const s = {}, i = Xo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Zo(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = r ? s : /* @__PURE__ */ da(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function sc(e, t, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ ce(s), [c] = e.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let T = 0; T < d.length; T++) {
        let I = d[T];
        if (Lr(e.emitsOptions, I))
          continue;
        const U = t[I];
        if (c)
          if (le(i, I))
            U !== i[I] && (i[I] = U, m = !0);
          else {
            const J = dt(I);
            s[J] = Ss(
              c,
              l,
              J,
              U,
              e,
              !1
            );
          }
        else
          U !== i[I] && (i[I] = U, m = !0);
      }
    }
  } else {
    Zo(e, t, s, i) && (m = !0);
    let d;
    for (const T in l)
      (!t || // for camelCase
      !le(t, T) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = ln(T)) === T || !le(t, d))) && (c ? n && // for camelCase
      (n[T] !== void 0 || // for kebab-case
      n[d] !== void 0) && (s[T] = Ss(
        c,
        l,
        T,
        void 0,
        e,
        !0
      )) : delete s[T]);
    if (i !== l)
      for (const T in i)
        (!t || !le(t, T)) && (delete i[T], m = !0);
  }
  m && Rt(e.attrs, "set", "");
}
function Zo(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Un(c))
        continue;
      const m = t[c];
      let d;
      s && le(s, d = dt(c)) ? !i || !i.includes(d) ? n[d] = m : (l || (l = {}))[d] = m : Lr(e.emitsOptions, c) || (!(c in r) || m !== r[c]) && (r[c] = m, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ ce(n), m = l || fe;
    for (let d = 0; d < i.length; d++) {
      const T = i[d];
      n[T] = Ss(
        s,
        c,
        T,
        m[T],
        e,
        !le(m, T)
      );
    }
  }
  return o;
}
function Ss(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = le(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && te(c)) {
        const { propsDefaults: m } = s;
        if (n in m)
          r = m[n];
        else {
          const d = Zn(s);
          r = m[n] = c.call(
            null,
            t
          ), d();
        }
      } else
        r = c;
      s.ce && s.ce._setProp(n, r);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? r = !1 : o[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === ln(n)) && (r = !0));
  }
  return r;
}
const ic = /* @__PURE__ */ new WeakMap();
function Qo(e, t, n = !1) {
  const r = n ? ic : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, l = [];
  let c = !1;
  if (!te(e)) {
    const d = (T) => {
      c = !0;
      const [I, U] = Qo(T, t, !0);
      He(o, I), U && l.push(...U);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c)
    return ue(e) && r.set(e, yn), yn;
  if (Y(i))
    for (let d = 0; d < i.length; d++) {
      const T = dt(i[d]);
      vi(T) && (o[T] = fe);
    }
  else if (i)
    for (const d in i) {
      const T = dt(d);
      if (vi(T)) {
        const I = i[d], U = o[T] = Y(I) || te(I) ? { type: I } : He({}, I), J = U.type;
        let k = !1, q = !0;
        if (Y(J))
          for (let F = 0; F < J.length; ++F) {
            const Z = J[F], Q = te(Z) && Z.name;
            if (Q === "Boolean") {
              k = !0;
              break;
            } else Q === "String" && (q = !1);
          }
        else
          k = te(J) && J.name === "Boolean";
        U[
          0
          /* shouldCast */
        ] = k, U[
          1
          /* shouldCastTrue */
        ] = q, (k || le(U, "default")) && l.push(T);
      }
    }
  const m = [o, l];
  return ue(e) && r.set(e, m), m;
}
function vi(e) {
  return e[0] !== "$" && !Un(e);
}
const Hs = (e) => e === "_" || e === "_ctx" || e === "$stable", $s = (e) => Y(e) ? e.map(St) : [St(e)], oc = (e, t, n) => {
  if (t._n)
    return t;
  const r = Sa((...s) => $s(t(...s)), n);
  return r._c = !1, r;
}, el = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Hs(s)) continue;
    const i = e[s];
    if (te(i))
      t[s] = oc(s, i, r);
    else if (i != null) {
      const o = $s(i);
      t[s] = () => o;
    }
  }
}, tl = (e, t) => {
  const n = $s(t);
  e.slots.default = () => n;
}, nl = (e, t, n) => {
  for (const r in t)
    (n || !Hs(r)) && (e[r] = t[r]);
}, lc = (e, t, n) => {
  const r = e.slots = Xo();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (nl(r, t, n), n && fo(r, "_", s, !0)) : el(t, r);
  } else t && tl(e, t);
}, ac = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = fe;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : nl(s, t, n) : (i = !t.$stable, el(t, s)), o = t;
  } else t && (tl(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !Hs(l) && o[l] == null && delete s[l];
}, et = pc;
function cc(e) {
  return uc(e);
}
function uc(e, t) {
  const n = Pr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: m,
    setElementText: d,
    parentNode: T,
    nextSibling: I,
    setScopeId: U = Et,
    insertStaticContent: J
  } = e, k = (u, f, g, x = null, _ = null, E = null, R = void 0, P = null, N = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !Pn(u, f) && (x = Xe(u), je(u, _, E, !0), u = null), f.patchFlag === -2 && (N = !1, f.dynamicChildren = null);
    const { type: S, ref: W, shapeFlag: D } = f;
    switch (S) {
      case Fr:
        q(u, f, g, x);
        break;
      case Lt:
        F(u, f, g, x);
        break;
      case rs:
        u == null && Z(f, g, x, R);
        break;
      case ve:
        me(
          u,
          f,
          g,
          x,
          _,
          E,
          R,
          P,
          N
        );
        break;
      default:
        D & 1 ? se(
          u,
          f,
          g,
          x,
          _,
          E,
          R,
          P,
          N
        ) : D & 6 ? Ce(
          u,
          f,
          g,
          x,
          _,
          E,
          R,
          P,
          N
        ) : (D & 64 || D & 128) && S.process(
          u,
          f,
          g,
          x,
          _,
          E,
          R,
          P,
          N,
          gt
        );
    }
    W != null && _ ? $n(W, u && u.ref, E, f || u, !f) : W == null && u && u.ref != null && $n(u.ref, null, E, u, !0);
  }, q = (u, f, g, x) => {
    if (u == null)
      r(
        f.el = l(f.children),
        g,
        x
      );
    else {
      const _ = f.el = u.el;
      f.children !== u.children && m(_, f.children);
    }
  }, F = (u, f, g, x) => {
    u == null ? r(
      f.el = c(f.children || ""),
      g,
      x
    ) : f.el = u.el;
  }, Z = (u, f, g, x) => {
    [u.el, u.anchor] = J(
      u.children,
      f,
      g,
      x,
      u.el,
      u.anchor
    );
  }, Q = ({ el: u, anchor: f }, g, x) => {
    let _;
    for (; u && u !== f; )
      _ = I(u), r(u, g, x), u = _;
    r(f, g, x);
  }, M = ({ el: u, anchor: f }) => {
    let g;
    for (; u && u !== f; )
      g = I(u), s(u), u = g;
    s(f);
  }, se = (u, f, g, x, _, E, R, P, N) => {
    if (f.type === "svg" ? R = "svg" : f.type === "math" && (R = "mathml"), u == null)
      we(
        f,
        g,
        x,
        _,
        E,
        R,
        P,
        N
      );
    else {
      const S = u.el && u.el._isVueCE ? u.el : null;
      try {
        S && S._beginPatch(), B(
          u,
          f,
          _,
          E,
          R,
          P,
          N
        );
      } finally {
        S && S._endPatch();
      }
    }
  }, we = (u, f, g, x, _, E, R, P) => {
    let N, S;
    const { props: W, shapeFlag: D, transition: V, dirs: G } = u;
    if (N = u.el = o(
      u.type,
      E,
      W && W.is,
      W
    ), D & 8 ? d(N, u.children) : D & 16 && K(
      u.children,
      N,
      null,
      x,
      _,
      ns(u, E),
      R,
      P
    ), G && Yt(u, null, x, "created"), Ee(N, u, u.scopeId, R, x), W) {
      for (const re in W)
        re !== "value" && !Un(re) && i(N, re, null, W[re], E, x);
      "value" in W && i(N, "value", null, W.value, E), (S = W.onVnodeBeforeMount) && _t(S, x, u);
    }
    G && Yt(u, null, x, "beforeMount");
    const ee = fc(_, V);
    ee && V.beforeEnter(N), r(N, f, g), ((S = W && W.onVnodeMounted) || ee || G) && et(() => {
      S && _t(S, x, u), ee && V.enter(N), G && Yt(u, null, x, "mounted");
    }, _);
  }, Ee = (u, f, g, x, _) => {
    if (g && U(u, g), x)
      for (let E = 0; E < x.length; E++)
        U(u, x[E]);
    if (_) {
      let E = _.subTree;
      if (f === E || ol(E.type) && (E.ssContent === f || E.ssFallback === f)) {
        const R = _.vnode;
        Ee(
          u,
          R,
          R.scopeId,
          R.slotScopeIds,
          _.parent
        );
      }
    }
  }, K = (u, f, g, x, _, E, R, P, N = 0) => {
    for (let S = N; S < u.length; S++) {
      const W = u[S] = P ? Ct(u[S]) : St(u[S]);
      k(
        null,
        W,
        f,
        g,
        x,
        _,
        E,
        R,
        P
      );
    }
  }, B = (u, f, g, x, _, E, R) => {
    const P = f.el = u.el;
    let { patchFlag: N, dynamicChildren: S, dirs: W } = f;
    N |= u.patchFlag & 16;
    const D = u.props || fe, V = f.props || fe;
    let G;
    if (g && Xt(g, !1), (G = V.onVnodeBeforeUpdate) && _t(G, g, f, u), W && Yt(f, u, g, "beforeUpdate"), g && Xt(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    S && (!u.dynamicChildren || u.dynamicChildren.length !== S.length) && (N = 0, R = !1, S = null), (D.innerHTML && V.innerHTML == null || D.textContent && V.textContent == null) && d(P, ""), S ? ae(
      u.dynamicChildren,
      S,
      P,
      g,
      x,
      ns(f, _),
      E
    ) : R || w(
      u,
      f,
      P,
      null,
      g,
      x,
      ns(f, _),
      E,
      !1
    ), N > 0) {
      if (N & 16)
        he(P, D, V, g, _);
      else if (N & 2 && D.class !== V.class && i(P, "class", null, V.class, _), N & 4 && i(P, "style", D.style, V.style, _), N & 8) {
        const ee = f.dynamicProps;
        for (let re = 0; re < ee.length; re++) {
          const ne = ee[re], Te = D[ne], Ae = V[ne];
          (Ae !== Te || ne === "value") && i(P, ne, Te, Ae, _, g);
        }
      }
      N & 1 && u.children !== f.children && d(P, f.children);
    } else !R && S == null && he(P, D, V, g, _);
    ((G = V.onVnodeUpdated) || W) && et(() => {
      G && _t(G, g, f, u), W && Yt(f, u, g, "updated");
    }, x);
  }, ae = (u, f, g, x, _, E, R) => {
    for (let P = 0; P < f.length; P++) {
      const N = u[P], S = f[P], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pn(N, S) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? T(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      k(
        N,
        S,
        W,
        null,
        x,
        _,
        E,
        R,
        !0
      );
    }
  }, he = (u, f, g, x, _) => {
    if (f !== g) {
      if (f !== fe)
        for (const E in f)
          !Un(E) && !(E in g) && i(
            u,
            E,
            f[E],
            null,
            _,
            x
          );
      for (const E in g) {
        if (Un(E)) continue;
        const R = g[E], P = f[E];
        R !== P && E !== "value" && i(u, E, P, R, _, x);
      }
      "value" in g && i(u, "value", f.value, g.value, _);
    }
  }, me = (u, f, g, x, _, E, R, P, N) => {
    const S = f.el = u ? u.el : l(""), W = f.anchor = u ? u.anchor : l("");
    let { patchFlag: D, dynamicChildren: V, slotScopeIds: G } = f;
    G && (P = P ? P.concat(G) : G), u == null ? (r(S, g, x), r(W, g, x), K(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      W,
      _,
      E,
      R,
      P,
      N
    )) : D > 0 && D & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === V.length ? (ae(
      u.dynamicChildren,
      V,
      g,
      _,
      E,
      R,
      P
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || _ && f === _.subTree) && rl(
      u,
      f,
      !0
      /* shallow */
    )) : w(
      u,
      f,
      g,
      W,
      _,
      E,
      R,
      P,
      N
    );
  }, Ce = (u, f, g, x, _, E, R, P, N) => {
    f.slotScopeIds = P, u == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      g,
      x,
      R,
      N
    ) : $e(
      f,
      g,
      x,
      _,
      E,
      R,
      N
    ) : Fe(u, f, N);
  }, $e = (u, f, g, x, _, E, R) => {
    const P = u.component = Tc(
      u,
      x,
      _
    );
    if (ks(u) && (P.ctx.renderer = gt), Sc(P, !1, R), P.asyncDep) {
      if (_ && _.registerDep(P, ge, R), !u.el) {
        const N = P.subTree = Nt(Lt);
        F(null, N, f, g), u.placeholder = N.el;
      }
    } else
      ge(
        P,
        u,
        f,
        g,
        _,
        E,
        R
      );
  }, Fe = (u, f, g) => {
    const x = f.component = u.component;
    if (tc(u, f, g))
      if (x.asyncDep && !x.asyncResolved) {
        H(x, f, g);
        return;
      } else
        x.next = f, x.update();
    else
      f.el = u.el, x.vnode = f;
  }, ge = (u, f, g, x, _, E, R) => {
    const P = () => {
      if (u.isMounted) {
        let { next: D, bu: V, u: G, parent: ee, vnode: re } = u;
        {
          const Je = sl(u);
          if (Je) {
            D && (D.el = re.el, H(u, D, R)), Je.asyncDep.then(() => {
              et(() => {
                u.isUnmounted || S();
              }, _);
            });
            return;
          }
        }
        let ne = D, Te;
        Xt(u, !1), D ? (D.el = re.el, H(u, D, R)) : D = re, V && pr(V), (Te = D.props && D.props.onVnodeBeforeUpdate) && _t(Te, ee, D, re), Xt(u, !0);
        const Ae = _i(u), Ve = u.subTree;
        u.subTree = Ae, k(
          Ve,
          Ae,
          // parent may have changed if it's in a teleport
          T(Ve.el),
          // anchor may have changed if it's in a fragment
          Xe(Ve),
          u,
          _,
          E
        ), D.el = Ae.el, ne === null && nc(u, Ae.el), G && et(G, _), (Te = D.props && D.props.onVnodeUpdated) && et(
          () => _t(Te, ee, D, re),
          _
        );
      } else {
        let D;
        const { el: V, props: G } = f, { bm: ee, m: re, parent: ne, root: Te, type: Ae } = u, Ve = jn(f);
        Xt(u, !1), ee && pr(ee), !Ve && (D = G && G.onVnodeBeforeMount) && _t(D, ne, f), Xt(u, !0);
        {
          Te.ce && Te.ce._hasShadowRoot() && Te.ce._injectChildStyle(
            Ae,
            u.parent ? u.parent.type : void 0
          );
          const Je = u.subTree = _i(u);
          k(
            null,
            Je,
            g,
            x,
            u,
            _,
            E
          ), f.el = Je.el;
        }
        if (re && et(re, _), !Ve && (D = G && G.onVnodeMounted)) {
          const Je = f;
          et(
            () => _t(D, ne, Je),
            _
          );
        }
        (f.shapeFlag & 256 || ne && jn(ne.vnode) && ne.vnode.shapeFlag & 256) && u.a && et(u.a, _), u.isMounted = !0, f = g = x = null;
      }
    };
    u.scope.on();
    const N = u.effect = new go(P);
    u.scope.off();
    const S = u.update = N.run.bind(N), W = u.job = N.runIfDirty.bind(N);
    W.i = u, W.id = u.uid, N.scheduler = () => Fs(W), Xt(u, !0), S();
  }, H = (u, f, g) => {
    f.component = u;
    const x = u.vnode.props;
    u.vnode = f, u.next = null, sc(u, f.props, x, g), ac(u, f.children, g), It(), di(u), Dt();
  }, w = (u, f, g, x, _, E, R, P, N = !1) => {
    const S = u && u.children, W = u ? u.shapeFlag : 0, D = f.children, { patchFlag: V, shapeFlag: G } = f;
    if (V > 0) {
      if (V & 128) {
        _e(
          S,
          D,
          g,
          x,
          _,
          E,
          R,
          P,
          N
        );
        return;
      } else if (V & 256) {
        h(
          S,
          D,
          g,
          x,
          _,
          E,
          R,
          P,
          N
        );
        return;
      }
    }
    G & 8 ? (W & 16 && ut(S, _, E), D !== S && d(g, D)) : W & 16 ? G & 16 ? _e(
      S,
      D,
      g,
      x,
      _,
      E,
      R,
      P,
      N
    ) : ut(S, _, E, !0) : (W & 8 && d(g, ""), G & 16 && K(
      D,
      g,
      x,
      _,
      E,
      R,
      P,
      N
    ));
  }, h = (u, f, g, x, _, E, R, P, N) => {
    u = u || yn, f = f || yn;
    const S = u.length, W = f.length, D = Math.min(S, W);
    let V;
    for (V = 0; V < D; V++) {
      const G = f[V] = N ? Ct(f[V]) : St(f[V]);
      k(
        u[V],
        G,
        g,
        null,
        _,
        E,
        R,
        P,
        N
      );
    }
    S > W ? ut(
      u,
      _,
      E,
      !0,
      !1,
      D
    ) : K(
      f,
      g,
      x,
      _,
      E,
      R,
      P,
      N,
      D
    );
  }, _e = (u, f, g, x, _, E, R, P, N) => {
    let S = 0;
    const W = f.length;
    let D = u.length - 1, V = W - 1;
    for (; S <= D && S <= V; ) {
      const G = u[S], ee = f[S] = N ? Ct(f[S]) : St(f[S]);
      if (Pn(G, ee))
        k(
          G,
          ee,
          g,
          null,
          _,
          E,
          R,
          P,
          N
        );
      else
        break;
      S++;
    }
    for (; S <= D && S <= V; ) {
      const G = u[D], ee = f[V] = N ? Ct(f[V]) : St(f[V]);
      if (Pn(G, ee))
        k(
          G,
          ee,
          g,
          null,
          _,
          E,
          R,
          P,
          N
        );
      else
        break;
      D--, V--;
    }
    if (S > D) {
      if (S <= V) {
        const G = V + 1, ee = G < W ? f[G].el : x;
        for (; S <= V; )
          k(
            null,
            f[S] = N ? Ct(f[S]) : St(f[S]),
            g,
            ee,
            _,
            E,
            R,
            P,
            N
          ), S++;
      }
    } else if (S > V)
      for (; S <= D; )
        je(u[S], _, E, !0), S++;
    else {
      const G = S, ee = S, re = /* @__PURE__ */ new Map();
      for (S = ee; S <= V; S++) {
        const De = f[S] = N ? Ct(f[S]) : St(f[S]);
        De.key != null && re.set(De.key, S);
      }
      let ne, Te = 0;
      const Ae = V - ee + 1;
      let Ve = !1, Je = 0;
      const at = new Array(Ae);
      for (S = 0; S < Ae; S++) at[S] = 0;
      for (S = G; S <= D; S++) {
        const De = u[S];
        if (Te >= Ae) {
          je(De, _, E, !0);
          continue;
        }
        let rt;
        if (De.key != null)
          rt = re.get(De.key);
        else
          for (ne = ee; ne <= V; ne++)
            if (at[ne - ee] === 0 && Pn(De, f[ne])) {
              rt = ne;
              break;
            }
        rt === void 0 ? je(De, _, E, !0) : (at[rt - ee] = S + 1, rt >= Je ? Je = rt : Ve = !0, k(
          De,
          f[rt],
          g,
          null,
          _,
          E,
          R,
          P,
          N
        ), Te++);
      }
      const Gt = Ve ? dc(at) : yn;
      for (ne = Gt.length - 1, S = Ae - 1; S >= 0; S--) {
        const De = ee + S, rt = f[De], xn = f[De + 1], wn = De + 1 < W ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          xn.el || il(xn)
        ) : x;
        at[S] === 0 ? k(
          null,
          rt,
          g,
          wn,
          _,
          E,
          R,
          P,
          N
        ) : Ve && (ne < 0 || S !== Gt[ne] ? nt(rt, g, wn, 2) : ne--);
      }
    }
  }, nt = (u, f, g, x, _ = null) => {
    const { el: E, type: R, transition: P, children: N, shapeFlag: S } = u;
    if (S & 6) {
      nt(u.component.subTree, f, g, x);
      return;
    }
    if (S & 128) {
      u.suspense.move(f, g, x);
      return;
    }
    if (S & 64) {
      R.move(u, f, g, gt);
      return;
    }
    if (R === ve) {
      r(E, f, g);
      for (let D = 0; D < N.length; D++)
        nt(N[D], f, g, x);
      r(u.anchor, f, g);
      return;
    }
    if (R === rs) {
      Q(u, f, g);
      return;
    }
    if (x !== 2 && S & 1 && P)
      if (x === 0)
        P.persisted && !E[es] ? r(E, f, g) : (P.beforeEnter(E), r(E, f, g), et(() => P.enter(E), _));
      else {
        const { leave: D, delayLeave: V, afterLeave: G } = P, ee = () => {
          u.ctx.isUnmounted ? s(E) : r(E, f, g);
        }, re = () => {
          const ne = E._isLeaving || !!E[es];
          E._isLeaving && E[es](
            !0
            /* cancelled */
          ), P.persisted && !ne ? ee() : D(E, () => {
            ee(), G && G();
          });
        };
        V ? V(E, ee, re) : re();
      }
    else
      r(E, f, g);
  }, je = (u, f, g, x = !1, _ = !1) => {
    const {
      type: E,
      props: R,
      ref: P,
      children: N,
      dynamicChildren: S,
      shapeFlag: W,
      patchFlag: D,
      dirs: V,
      cacheIndex: G,
      memo: ee
    } = u;
    if (D === -2 && (_ = !1), P != null && (It(), $n(P, null, g, u, !0), Dt()), G != null && (f.renderCache[G] = void 0), W & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const re = W & 1 && V, ne = !jn(u);
    let Te;
    if (ne && (Te = R && R.onVnodeBeforeUnmount) && _t(Te, f, u), W & 6)
      Wt(u.component, g, x);
    else {
      if (W & 128) {
        u.suspense.unmount(g, x);
        return;
      }
      re && Yt(u, null, f, "beforeUnmount"), W & 64 ? u.type.remove(
        u,
        f,
        g,
        gt,
        x
      ) : S && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !S.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== ve || D > 0 && D & 64) ? ut(
        S,
        f,
        g,
        !1,
        !0
      ) : (E === ve && D & 384 || !_ && W & 16) && ut(N, f, g), x && Ut(u);
    }
    const Ae = ee != null && G == null;
    (ne && (Te = R && R.onVnodeUnmounted) || re || Ae) && et(() => {
      Te && _t(Te, f, u), re && Yt(u, null, f, "unmounted"), Ae && (u.el = null);
    }, g);
  }, Ut = (u) => {
    const { type: f, el: g, anchor: x, transition: _ } = u;
    if (f === ve) {
      oe(g, x);
      return;
    }
    if (f === rs) {
      M(u);
      return;
    }
    const E = () => {
      s(g), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (u.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: R, delayLeave: P } = _, N = () => R(g, E);
      P ? P(u.el, E, N) : N();
    } else
      E();
  }, oe = (u, f) => {
    let g;
    for (; u !== f; )
      g = I(u), s(u), u = g;
    s(f);
  }, Wt = (u, f, g) => {
    const { bum: x, scope: _, job: E, subTree: R, um: P, m: N, a: S } = u;
    Si(N), Si(S), x && pr(x), _.stop(), E && (E.flags |= 8, je(R, u, f, g)), P && et(P, f), et(() => {
      u.isUnmounted = !0;
    }, f);
  }, ut = (u, f, g, x = !1, _ = !1, E = 0) => {
    for (let R = E; R < u.length; R++)
      je(u[R], f, g, x, _);
  }, Xe = (u) => {
    if (u.shapeFlag & 6)
      return Xe(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = I(u.anchor || u.el), g = f && f[Ca];
    return g ? I(g) : f;
  };
  let Kt = !1;
  const kt = (u, f, g) => {
    let x;
    u == null ? f._vnode && (je(f._vnode, null, null, !0), x = f._vnode.component) : k(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      g
    ), f._vnode = u, Kt || (Kt = !0, di(x), Lo(), Kt = !1);
  }, gt = {
    p: k,
    um: je,
    m: nt,
    r: Ut,
    mt: $e,
    mc: K,
    pc: w,
    pbc: ae,
    n: Xe,
    o: e
  };
  return {
    render: kt,
    hydrate: void 0,
    createApp: Ya(kt)
  };
}
function ns({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Xt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function fc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function rl(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (Y(r) && Y(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Ct(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && rl(o, l)), l.type === Fr && (l.patchFlag === -1 && (l = s[i] = Ct(l)), l.el = o.el), l.type === Lt && !l.el && (l.el = o.el);
    }
}
function dc(e) {
  const t = e.slice(), n = [0];
  let r, s, i, o, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const m = e[r];
    if (m !== 0) {
      if (s = n[n.length - 1], e[s] < m) {
        t[r] = s, n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < m ? i = l + 1 : o = l;
      m < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function sl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : sl(t);
}
function Si(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function il(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? il(t.subTree) : null;
}
const ol = (e) => e.__isSuspense;
function pc(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : va(e);
}
const ve = /* @__PURE__ */ Symbol.for("v-fgt"), Fr = /* @__PURE__ */ Symbol.for("v-txt"), Lt = /* @__PURE__ */ Symbol.for("v-cmt"), rs = /* @__PURE__ */ Symbol.for("v-stc"), sn = [];
let lt = null;
function j(e = !1) {
  sn.push(lt = e ? null : []);
}
function ll() {
  sn.pop(), lt = sn[sn.length - 1] || null;
}
let Gn = 1;
function Ei(e, t = !1) {
  Gn += e, e < 0 && lt && t && (lt.hasOnce = !0);
}
function al(e) {
  return e.dynamicChildren = Gn > 0 ? lt || yn : null, ll(), Gn > 0 && lt && lt.push(e), e;
}
function z(e, t, n, r, s, i) {
  return al(
    y(
      e,
      t,
      n,
      r,
      s,
      i,
      !0
    )
  );
}
function hc(e, t, n, r, s) {
  return al(
    Nt(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function cl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ul = ({ key: e }) => e ?? null, mr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? xe(e) || /* @__PURE__ */ Ye(e) || te(e) ? { i: ct, r: e, k: t, f: !!n } : e : null);
function y(e, t = null, n = null, r = 0, s = null, i = e === ve ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ul(t),
    ref: t && mr(t),
    scopeId: Uo,
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
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ct
  };
  return l ? (Sr(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= xe(n) ? 8 : 16), Gn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  lt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && lt.push(c), c;
}
const Nt = mc;
function mc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === ja) && (e = Lt), cl(e)) {
    const l = An(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Sr(l, n), Gn > 0 && !i && lt && (l.shapeFlag & 6 ? lt[lt.indexOf(e)] = l : lt.push(l)), l.patchFlag = -2, l;
  }
  if (wc(e) && (e = e.__vccOpts), t) {
    t = gc(t);
    let { class: l, style: c } = t;
    l && !xe(l) && (t.class = zn(l)), ue(c) && (/* @__PURE__ */ Ls(c) && !Y(c) && (c = He({}, c)), t.style = Rs(c));
  }
  const o = xe(e) ? 1 : ol(e) ? 128 : Dr(e) ? 64 : ue(e) ? 4 : te(e) ? 2 : 0;
  return y(
    e,
    t,
    n,
    r,
    s,
    o,
    i,
    !0
  );
}
function gc(e) {
  return e ? /* @__PURE__ */ Ls(e) || Jo(e) ? He({}, e) : e : null;
}
function An(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: c } = e, m = t ? bc(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && ul(m),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? Y(i) ? i.concat(mr(t)) : [i, mr(t)] : mr(t)
    ) : i,
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
    patchFlag: t && e.type !== ve ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && An(e.ssContent),
    ssFallback: e.ssFallback && An(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && Us(
    d,
    c.clone(d)
  ), d;
}
function be(e = " ", t = 0) {
  return Nt(Fr, null, e, t);
}
function Ne(e = "", t = !1) {
  return t ? (j(), hc(Lt, null, e)) : Nt(Lt, null, e);
}
function St(e) {
  return e == null || typeof e == "boolean" ? Nt(Lt) : Y(e) ? Nt(
    ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : cl(e) ? Ct(e) : Nt(Fr, null, String(e));
}
function Ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : An(e);
}
function Sr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Y(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Sr(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Jo(t) ? t._ctx = ct : s === 3 && ct && (ct.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (te(t)) {
    if (r & 65) {
      Sr(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ct }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [be(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function bc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = zn([t.class, r.class]));
      else if (s === "style")
        t.style = Rs([t.style, r.style]);
      else if (wr(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(Y(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Cr(s) && (t[s] = o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function _t(e, t, n, r = null) {
  mt(e, t, 7, [
    n,
    r
  ]);
}
const yc = Ko();
let _c = 0;
function Tc(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || yc, i = {
    uid: _c++,
    vnode: e,
    type: r,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Gl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Qo(r, s),
    emitsOptions: Go(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: fe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: fe,
    data: fe,
    props: fe,
    attrs: fe,
    slots: fe,
    refs: fe,
    setupState: fe,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Ja.bind(null, i), e.ce && e.ce(i), i;
}
let qe = null;
const vc = () => qe || ct;
let Er, qn;
{
  const e = Pr(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  Er = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => qe = n
  ), qn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Yn = n
  );
}
const Zn = (e) => {
  const t = qe;
  return Er(e), e.scope.on(), () => {
    e.scope.off(), Er(t);
  };
}, Ai = () => {
  qe && qe.scope.off(), Er(null);
};
function fl(e) {
  return e.vnode.shapeFlag & 4;
}
let Yn = !1;
function Sc(e, t = !1, n = !1) {
  t && qn(t);
  const { props: r, children: s } = e.vnode, i = fl(e);
  rc(e, r, i, t), lc(e, s, n || t);
  const o = i ? Ec(e, t) : void 0;
  return t && qn(!1), o;
}
function Ec(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Va);
  const { setup: r } = n;
  if (r) {
    It();
    const s = e.setupContext = r.length > 1 ? xc(e) : null, i = Zn(e), o = Jn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = lo(o);
    if (Dt(), i(), (l || e.sp) && !jn(e) && jo(e), l) {
      if (o.then(Ai, Ai), t)
        return o.then((c) => {
          qn(!0);
          try {
            xi(e, c, t);
          } finally {
            qn(!1);
          }
        }).catch((c) => {
          Ir(c, e, 0);
        });
      e.asyncDep = o;
    } else
      xi(e, o);
  } else
    dl(e);
}
function xi(e, t, n) {
  te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ue(t) && (e.setupState = No(t)), dl(e);
}
function dl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Et);
  {
    const s = Zn(e);
    It();
    try {
      za(e);
    } finally {
      Dt(), s();
    }
  }
}
const Ac = {
  get(e, t) {
    return ke(e, "get", ""), e[t];
  }
};
function xc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ac),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ur(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(No(pa(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Vn)
        return Vn[n](e);
    },
    has(t, n) {
      return n in t || n in Vn;
    }
  })) : e.proxy;
}
function wc(e) {
  return te(e) && "__vccOpts" in e;
}
const Re = (e, t) => /* @__PURE__ */ ga(e, t, Yn), Cc = "3.5.42";
let Es;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    Es = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const pl = Es ? (e) => Es.createHTML(e) : (e) => e, Oc = "http://www.w3.org/2000/svg", Rc = "http://www.w3.org/1998/Math/MathML", wt = typeof document < "u" ? document : null, Ci = wt && /* @__PURE__ */ wt.createElement("template"), Pc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? wt.createElementNS(Oc, e) : t === "mathml" ? wt.createElementNS(Rc, e) : n ? wt.createElement(e, { is: n }) : wt.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => wt.createTextNode(e),
  createComment: (e) => wt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => wt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, s, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (s && (s === i || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)); )
        ;
    else {
      Ci.innerHTML = pl(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ci.content;
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
}, Nc = /* @__PURE__ */ Symbol("_vtc");
function Ic(e, t, n) {
  const r = e[Nc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Oi = /* @__PURE__ */ Symbol("_vod"), Dc = /* @__PURE__ */ Symbol("_vsh"), Mc = /* @__PURE__ */ Symbol(""), Lc = /(?:^|;)\s*display\s*:/;
function Fc(e, t, n) {
  const r = e.style, s = xe(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (xe(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Ln(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Ln(r, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? kc(
        e,
        o,
        !xe(t) && t ? t[o] : void 0,
        l
      ) || Ln(r, o, l) : Ln(r, o, "");
    }
  } else if (s) {
    if (t !== n) {
      const o = r[Mc];
      o && (n += ";" + o), r.cssText = n, i = Lc.test(n);
    }
  } else t && e.removeAttribute("style");
  Oi in e && (e[Oi] = i ? r.display : "", e[Dc] && (r.display = "none"));
}
const ur = /\s*!important$/;
function Ln(e, t, n) {
  if (Y(n))
    n.forEach((r) => Ln(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    ur.test(n) ? e.setProperty(t, n.replace(ur, ""), "important") : e.setProperty(t, n);
  else {
    const r = Uc(e, t);
    ur.test(n) ? e.setProperty(
      ln(r),
      n.replace(ur, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ri = ["Webkit", "Moz", "ms"], ss = {};
function Uc(e, t) {
  const n = ss[t];
  if (n)
    return n;
  let r = dt(t);
  if (r !== "filter" && r in e)
    return ss[t] = r;
  r = uo(r);
  for (let s = 0; s < Ri.length; s++) {
    const i = Ri[s] + r;
    if (i in e)
      return ss[t] = i;
  }
  return t;
}
function kc(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && xe(r) && n === r;
}
const Pi = "http://www.w3.org/1999/xlink";
function Ni(e, t, n, r, s, i = Bl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Pi, t.slice(6, t.length)) : e.setAttributeNS(Pi, t, n) : n == null || i && !po(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : At(n) ? String(n) : n
  );
}
function Ii(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? pl(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
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
    l === "boolean" ? n = po(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function en(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Hc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Di = /* @__PURE__ */ Symbol("_vei");
function $c(e, t, n, r, s = null) {
  const i = e[Di] || (e[Di] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, c] = zc(t);
    if (r) {
      const m = i[t] = Kc(
        r,
        s
      );
      en(e, l, m, c);
    } else o && (Hc(e, l, o, c), i[t] = void 0);
  }
}
const jc = /(Once|Passive|Capture)$/, Vc = /^on:?(?:Once|Passive|Capture)$/;
function zc(e) {
  let t, n;
  for (; (n = e.match(jc)) && !Vc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : ln(e.slice(2)), t];
}
let is = 0;
const Bc = /* @__PURE__ */ Promise.resolve(), Wc = () => is || (Bc.then(() => is = 0), is = Date.now());
function Kc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const s = n.value;
    if (Y(s)) {
      const i = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        i.call(r), r._stopped = !0;
      };
      const o = s.slice(), l = [r];
      for (let c = 0; c < o.length && !r._stopped; c++) {
        const m = o[c];
        m && mt(
          m,
          t,
          5,
          l
        );
      }
    } else
      mt(
        s,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Wc(), n;
}
const Mi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Gc = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Ic(e, r, o) : t === "style" ? Fc(e, n, r) : wr(t) ? Cr(t) || $c(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qc(e, t, r, o)) ? (Ii(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ni(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Yc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !xe(r))) ? Ii(e, dt(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ni(e, t, r, o));
};
function qc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Mi(t) && te(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Mi(t) && xe(n) ? !1 : t in e;
}
function Yc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = dt(t);
  return Array.isArray(n) ? n.some((s) => dt(s) === r) : Object.keys(n).some((s) => dt(s) === r);
}
const Ar = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Y(t) ? (n) => pr(t, n) : t;
};
function Xc(e) {
  e.target.composing = !0;
}
function Li(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const tn = /* @__PURE__ */ Symbol("_assign"), fr = /* @__PURE__ */ Symbol("_initialValue");
function os(e, t, n) {
  return t && (e = e.trim()), n && (e = Rr(e)), e;
}
const Fi = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[fr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[fr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[tn] = Ar(s);
    const i = r || s.props && s.props.type === "number";
    en(e, t ? "change" : "input", (o) => {
      o.target.composing || e[tn](os(e.value, n, i));
    }), (n || i) && en(e, "change", () => {
      e.value = os(e.value, n, i);
    }), t || (en(e, "compositionstart", Xc), en(e, "compositionend", Li), en(e, "change", Li));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const s = t ?? "", i = e[fr];
    delete e[fr], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[tn](os(e.value, n, r)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
    if (e[tn] = Ar(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Rr(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const m = e.getRootNode();
    (m instanceof Document || m instanceof ShadowRoot) && m.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === c) || (e.value = c);
  }
}, st = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, en(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? Rr(xr(c)) : xr(c)
      ), i = e.multiple, o = i ? on(e._modelValue) ? new Set(s) : s : s[0], l = e._pendingValue = [
        i,
        i ? Y(o) ? s.slice() : s : o
      ];
      try {
        e[tn](o);
      } finally {
        Do(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[tn] = Ar(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ui(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[tn] = Ar(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Jc(t, n[1], n[0])) && Ui(e, t);
  }
};
function Jc(e, t, n) {
  if (!n || Y(e)) return zt(e, t);
  if (on(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Ui(e, t) {
  const n = e.multiple, r = Y(t);
  if (!(n && !r && !on(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const o = e.options[s], l = xr(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((m) => String(m) === String(l)) : o.selected = Kl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (zt(xr(o), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function xr(e) {
  return "_value" in e ? e._value : e.value;
}
const Zc = ["ctrl", "shift", "alt", "meta"], Qc = {
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
  exact: (e, t) => Zc.some((n) => e[`${n}Key`] && !t.includes(n))
}, ki = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((s, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = Qc[t[o]];
      if (l && l(s, t)) return;
    }
    return e(s, ...i);
  }));
}, eu = /* @__PURE__ */ He({ patchProp: Gc }, Pc);
let Hi;
function tu() {
  return Hi || (Hi = cc(eu));
}
const nu = ((...e) => {
  const t = tu().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = su(r);
    if (!s) return;
    const i = t._component;
    !te(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, ru(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
});
function ru(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function su(e) {
  return xe(e) ? document.querySelector(e) : e;
}
function iu(e, t, n) {
  const r = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(r))
    return window._nc_initial_state.get(r);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const s = document.querySelector(r);
  if (s === null) {
    if (n !== void 0)
      return n;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const i = JSON.parse(atob(s.value));
    return window._nc_initial_state.set(r, i), i;
  } catch (i) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: i }), n !== void 0)
      return n;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: i });
  }
}
function $i(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ou(e) {
  if (Array.isArray(e)) return e;
}
function lu(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, s, i, o, l = [], c = !0, m = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(c = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); c = !0) ;
    } catch (d) {
      m = !0, s = d;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (m) throw s;
      }
    }
    return l;
  }
}
function au() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cu(e, t) {
  return ou(e) || lu(e, t) || uu(e, t) || au();
}
function uu(e, t) {
  if (e) {
    if (typeof e == "string") return $i(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $i(e, t) : void 0;
  }
}
const hl = Object.entries, ji = Object.setPrototypeOf, fu = Object.isFrozen, du = Object.getPrototypeOf, pu = Object.getOwnPropertyDescriptor;
let Ie = Object.freeze, Me = Object.seal, bn = Object.create, ml = typeof Reflect < "u" && Reflect, As = ml.apply, xs = ml.construct;
Ie || (Ie = function(t) {
  return t;
});
Me || (Me = function(t) {
  return t;
});
As || (As = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    s[i - 2] = arguments[i];
  return t.apply(n, s);
});
xs || (xs = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const Qt = Pe(Array.prototype.forEach), hu = Pe(Array.prototype.lastIndexOf), Vi = Pe(Array.prototype.pop), Nn = Pe(Array.prototype.push), mu = Pe(Array.prototype.splice), Sn = Array.isArray, Fn = Pe(String.prototype.toLowerCase), ls = Pe(String.prototype.toString), zi = Pe(String.prototype.match), In = Pe(String.prototype.replace), Bi = Pe(String.prototype.indexOf), gu = Pe(String.prototype.trim), bu = Pe(Number.prototype.toString), yu = Pe(Boolean.prototype.toString), Wi = typeof BigInt > "u" ? null : Pe(BigInt.prototype.toString), Ki = typeof Symbol > "u" ? null : Pe(Symbol.prototype.toString), tt = Pe(Object.prototype.hasOwnProperty), Dn = Pe(Object.prototype.toString), Ue = Pe(RegExp.prototype.test), Jt = _u(TypeError);
function Pe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return As(e, t, r);
  };
}
function _u(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return xs(e, n);
  };
}
function ie(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Fn;
  if (ji && ji(e, null), !Sn(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let s = t[r];
    if (typeof s == "string") {
      const i = n(s);
      i !== s && (fu(t) || (t[r] = i), s = i);
    }
    e[s] = !0;
  }
  return e;
}
function Tu(e) {
  for (let t = 0; t < e.length; t++)
    tt(e, t) || (e[t] = null);
  return e;
}
function ot(e) {
  const t = bn(null);
  for (const r of hl(e)) {
    var n = cu(r, 2);
    const s = n[0], i = n[1];
    tt(e, s) && (Sn(i) ? t[s] = Tu(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = ot(i) : t[s] = i);
  }
  return t;
}
function vu(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return bu(e);
    case "boolean":
      return yu(e);
    case "bigint":
      return Wi ? Wi(e) : "0";
    case "symbol":
      return Ki ? Ki(e) : "Symbol()";
    case "undefined":
      return Dn(e);
    case "function":
    case "object": {
      if (e === null)
        return Dn(e);
      const t = e, n = ft(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Dn(r);
      }
      return Dn(e);
    }
    default:
      return Dn(e);
  }
}
function ft(e, t) {
  for (; e !== null; ) {
    const r = pu(e, t);
    if (r) {
      if (r.get)
        return Pe(r.get);
      if (typeof r.value == "function")
        return Pe(r.value);
    }
    e = du(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Su(e) {
  try {
    return Ue(e, ""), !0;
  } catch {
    return !1;
  }
}
const Gi = Ie(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), as = Ie(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), cs = Ie(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Eu = Ie(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), us = Ie(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Au = Ie(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), qi = Ie(["#text"]), Yi = Ie(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), fs = Ie(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Xi = Ie(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), dr = Ie(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), xu = Me(/{{[\w\W]*|^[\w\W]*}}/g), wu = Me(/<%[\w\W]*|^[\w\W]*%>/g), Cu = Me(/\${[\w\W]*/g), Ou = Me(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ru = Me(/^aria-[\-\w]+$/), Ji = Me(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Pu = Me(/^(?:\w+script|data):/i), Nu = Me(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Iu = Me(/^html$/i), Du = Me(/^[a-z][.\w]*(-[.\w]+)+$/i), Zi = Me(/<[/\w!]/g), Qi = Me(/<[/\w]/g), Mu = Me(/<\/no(script|embed|frames)/i), Lu = Me(/\/>/i), it = {
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
}, gl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Fu = Ie(ie({}, gl)), Uu = (function() {
  const e = {};
  return Qt(gl, (t) => {
    e[t] = Me(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Ie(e);
})(), ku = function() {
  return typeof window > "u" ? null : window;
}, Hu = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const s = "data-tt-policy-suffix";
  n && n.hasAttribute(s) && (r = n.getAttribute(s));
  const i = "dompurify" + (r ? "#" + r : "");
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
}, eo = function() {
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
}, $t = function(t, n, r, s) {
  return tt(t, n) && Sn(t[n]) ? ie(s.base ? ot(s.base) : {}, t[n], s.transform) : r;
}, ds = function(t, n, r) {
  const s = tt(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? ot(s) : r();
};
function bl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ku();
  const t = (O) => bl(O);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== it.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, m = e.NamedNodeMap;
  m === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, T = e.trustedTypes, I = l.prototype, U = ft(I, "cloneNode"), J = ft(I, "remove"), k = ft(I, "nextSibling"), q = ft(I, "childNodes"), F = ft(I, "parentNode"), Z = ft(I, "shadowRoot"), Q = ft(I, "attributes"), M = o && o.prototype ? ft(o.prototype, "nodeType") : null, se = o && o.prototype ? ft(o.prototype, "nodeName") : null, we = o && o.prototype ? ft(o.prototype, "ownerDocument") : null, Ee = function(a) {
    return M ? M(a) : a.nodeType;
  }, K = function(a) {
    return se ? se(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const O = n.createElement("template");
    O.content && O.content.ownerDocument && (n = O.content.ownerDocument);
  }
  let B, ae = "", he, me = !1, Ce = 0;
  const $e = function() {
    if (Ce > 0)
      throw Jt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Fe = function(a) {
    $e(), Ce++;
    try {
      return B.createHTML(a);
    } finally {
      Ce--;
    }
  }, ge = function(a) {
    $e(), Ce++;
    try {
      return B.createScriptURL(a);
    } finally {
      Ce--;
    }
  }, H = function() {
    return me || (he = Hu(T, s), me = !0), he;
  }, w = n, h = w.implementation, _e = w.createNodeIterator, nt = w.createDocumentFragment, je = w.getElementsByTagName, Ut = r.importNode;
  let oe = eo();
  t.isSupported = typeof hl == "function" && typeof F == "function" && h && h.createHTMLDocument !== void 0;
  const Wt = xu, ut = wu, Xe = Cu, Kt = Ou, kt = Ru, gt = Pu, an = Nu, u = Du;
  let f = Ji, g = null;
  const x = ie({}, [...Gi, ...as, ...cs, ...us, ...qi]);
  let _ = null;
  const E = ie({}, [...Yi, ...fs, ...Xi, ...dr]);
  let R = Object.seal(bn(null, {
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
  })), P = null, N = null;
  const S = Object.seal(bn(null, {
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
  let W = !0, D = !0, V = !1, G = !0, ee = !1, re = !0, ne = !1, Te = !1, Ae = null, Ve = null, Je = !1, at = !1, Gt = !1, De = !1, rt = !0, xn = !1;
  const wn = "user-content-";
  let kr = !0, Hr = !1, cn = {}, un = null;
  const js = ie({}, [
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
  let Vs = null;
  const zs = ie({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bs = null;
  const Ws = ie({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Qn = "http://www.w3.org/1998/Math/MathML", er = "http://www.w3.org/2000/svg", bt = "http://www.w3.org/1999/xhtml";
  let fn = bt, $r = !1, jr = null;
  const _l = ie({}, [Qn, er, bt], ls), Ks = Ie(["mi", "mo", "mn", "ms", "mtext"]);
  let Vr = ie({}, Ks);
  const Gs = Ie(["annotation-xml"]);
  let zr = ie({}, Gs);
  const Tl = ie({}, ["title", "style", "font", "a", "script"]);
  let Cn = null;
  const vl = ["application/xhtml+xml", "text/html"], Sl = "text/html";
  let Oe = null, dn = null;
  const El = n.createElement("form"), qs = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, Br = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (dn && dn === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = ot(a), Cn = // eslint-disable-next-line unicorn/prefer-includes
    vl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? Sl : a.PARSER_MEDIA_TYPE, Oe = Cn === "application/xhtml+xml" ? ls : Fn, g = $t(a, "ALLOWED_TAGS", x, {
      transform: Oe
    }), _ = $t(a, "ALLOWED_ATTR", E, {
      transform: Oe
    }), jr = $t(a, "ALLOWED_NAMESPACES", _l, {
      transform: ls
    }), Bs = $t(a, "ADD_URI_SAFE_ATTR", Ws, {
      transform: Oe,
      base: Ws
    }), Vs = $t(a, "ADD_DATA_URI_TAGS", zs, {
      transform: Oe,
      base: zs
    }), un = $t(a, "FORBID_CONTENTS", js, {
      transform: Oe
    }), P = $t(a, "FORBID_TAGS", ot({}), {
      transform: Oe
    }), N = $t(a, "FORBID_ATTR", ot({}), {
      transform: Oe
    }), cn = tt(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? ot(a.USE_PROFILES) : a.USE_PROFILES : !1, W = a.ALLOW_ARIA_ATTR !== !1, D = a.ALLOW_DATA_ATTR !== !1, V = a.ALLOW_UNKNOWN_PROTOCOLS || !1, G = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ee = a.SAFE_FOR_TEMPLATES || !1, re = a.SAFE_FOR_XML !== !1, ne = a.WHOLE_DOCUMENT || !1, at = a.RETURN_DOM || !1, Gt = a.RETURN_DOM_FRAGMENT || !1, De = a.RETURN_TRUSTED_TYPE || !1, Je = a.FORCE_BODY || !1, rt = a.SANITIZE_DOM !== !1, xn = a.SANITIZE_NAMED_PROPS || !1, kr = a.KEEP_CONTENT !== !1, Hr = a.IN_PLACE || !1, f = Su(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Ji, fn = typeof a.NAMESPACE == "string" ? a.NAMESPACE : bt, Vr = ds(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ie({}, Ks)
      // Default built-in map
    ), zr = ds(
      a,
      "HTML_INTEGRATION_POINTS",
      () => ie({}, Gs)
      // Default built-in map
    );
    const p = ds(a, "CUSTOM_ELEMENT_HANDLING", () => bn(null));
    if (R = bn(null), tt(p, "tagNameCheck") && qs(p.tagNameCheck) && (R.tagNameCheck = p.tagNameCheck), tt(p, "attributeNameCheck") && qs(p.attributeNameCheck) && (R.attributeNameCheck = p.attributeNameCheck), tt(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (R.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), Me(R), ee && (D = !1), Gt && (at = !0), cn && (g = ie({}, qi), _ = bn(null), cn.html === !0 && (ie(g, Gi), ie(_, Yi)), cn.svg === !0 && (ie(g, as), ie(_, fs), ie(_, dr)), cn.svgFilters === !0 && (ie(g, cs), ie(_, fs), ie(_, dr)), cn.mathMl === !0 && (ie(g, us), ie(_, Xi), ie(_, dr))), S.tagCheck = null, S.attributeCheck = null, tt(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? S.tagCheck = a.ADD_TAGS : Sn(a.ADD_TAGS) && (g === x && (g = ot(g)), ie(g, a.ADD_TAGS, Oe))), tt(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? S.attributeCheck = a.ADD_ATTR : Sn(a.ADD_ATTR) && (_ === E && (_ = ot(_)), ie(_, a.ADD_ATTR, Oe))), tt(a, "ADD_FORBID_CONTENTS") && Sn(a.ADD_FORBID_CONTENTS) && (un === js && (un = ot(un)), ie(un, a.ADD_FORBID_CONTENTS, Oe)), kr && (g["#text"] = !0), ne && ie(g, ["html", "head", "body"]), g.table && (ie(g, ["tbody"]), delete P.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Jt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Jt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const A = B;
      B = a.TRUSTED_TYPES_POLICY;
      try {
        ae = Fe("");
      } catch (L) {
        throw B = A, L;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (B = void 0, ae = "") : (B === void 0 && (B = H()), B && typeof ae == "string" && (ae = Fe("")));
    Ie && Ie(a), dn = a;
  }, Ys = ie({}, [...as, ...cs, ...Eu]), Xs = ie({}, [...us, ...Au]), Al = function(a, p, A) {
    return p.namespaceURI === bt ? a === "svg" : p.namespaceURI === Qn ? a === "svg" && (A === "annotation-xml" || Vr[A]) : !!Ys[a];
  }, xl = function(a, p, A) {
    return p.namespaceURI === bt ? a === "math" : p.namespaceURI === er ? a === "math" && zr[A] : !!Xs[a];
  }, wl = function(a, p, A) {
    return p.namespaceURI === er && !zr[A] || p.namespaceURI === Qn && !Vr[A] ? !1 : !Xs[a] && (Tl[a] || !Ys[a]);
  }, Cl = function(a) {
    let p = F(a);
    (!p || !p.tagName) && (p = {
      namespaceURI: fn,
      tagName: "template"
    });
    const A = Fn(a.tagName), L = Fn(p.tagName);
    return jr[a.namespaceURI] ? a.namespaceURI === er ? Al(A, p, L) : a.namespaceURI === Qn ? xl(A, p, L) : a.namespaceURI === bt ? wl(A, p, L) : !!(Cn === "application/xhtml+xml" && jr[a.namespaceURI]) : !1;
  }, Ht = function(a) {
    Nn(t.removed, {
      element: a
    });
    try {
      F(a).removeChild(a);
    } catch {
      if (J(a), !F(a))
        throw Jt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Js = function(a, p, A) {
    try {
      a.removeAttributeNode(p);
    } catch {
      try {
        a.removeAttribute(A);
      } catch {
      }
    }
  }, tr = function(a) {
    nr(a);
    const p = q(a);
    if (p) {
      const L = [];
      Qt(p, ($) => {
        Nn(L, $);
      }), Qt(L, ($) => {
        try {
          J($);
        } catch {
        }
      });
    }
    const A = Q(a);
    if (A)
      for (let L = A.length - 1; L >= 0; --L) {
        const $ = A[L], X = $ && $.name;
        typeof X == "string" && Js(a, $, X);
      }
  }, qt = function(a, p, A) {
    if (!A)
      try {
        A = p.getAttributeNode(a);
      } catch {
        A = null;
      }
    Nn(t.removed, {
      attribute: A || null,
      from: p
    });
    try {
      A ? p.removeAttributeNode(A) : p.removeAttribute(a);
    } catch {
      try {
        p.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (at || Gt)
        try {
          Ht(p);
        } catch {
        }
      else
        try {
          p.setAttribute(a, "");
        } catch {
        }
  }, Ol = function(a) {
    const p = Q(a);
    if (p)
      for (let A = p.length - 1; A >= 0; --A) {
        const L = p[A], $ = L && L.name;
        typeof $ != "string" || _[Oe($)] || Js(a, L, $);
      }
  }, nr = function(a) {
    const p = [a];
    for (; p.length > 0; ) {
      const A = p.pop();
      Ee(A) === it.element && Ol(A);
      const $ = q(A);
      if ($)
        for (let X = $.length - 1; X >= 0; --X)
          p.push($[X]);
    }
  }, Zs = function(a, p) {
    return re ? a === "patchsrc" ? !0 : a === "for" && p !== "label" && p !== "output" : !1;
  }, Rl = function(a) {
    if (!re)
      return;
    const p = [a];
    for (; p.length > 0; ) {
      const A = p.pop(), L = Ee(A);
      if (L === it.processingInstruction || L === it.comment && Ue(Qi, A.data)) {
        try {
          J(A);
        } catch {
        }
        continue;
      }
      if (L === it.element) {
        const X = A, de = Oe(K(A));
        try {
          X.hasAttribute && X.hasAttribute("patchsrc") && X.removeAttribute("patchsrc"), X.hasAttribute && X.hasAttribute("for") && Zs("for", de) && X.removeAttribute("for");
        } catch {
        }
      }
      const $ = q(A);
      if ($)
        for (let X = $.length - 1; X >= 0; --X)
          p.push($[X]);
    }
  }, Qs = function(a) {
    let p = null, A = null;
    if (Je)
      a = "<remove></remove>" + a;
    else {
      const X = zi(a, /^[\r\n\t ]+/);
      A = X && X[0];
    }
    Cn === "application/xhtml+xml" && fn === bt && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const L = B ? Fe(a) : a;
    if (fn === bt)
      try {
        p = new d().parseFromString(L, Cn);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = h.createDocument(fn, "template", null);
      try {
        p.documentElement.innerHTML = $r ? ae : L;
      } catch {
      }
    }
    const $ = p.body || p.documentElement;
    return a && A && $.insertBefore(n.createTextNode(A), $.childNodes[0] || null), fn === bt ? je.call(p, ne ? "html" : "body")[0] : ne ? p.documentElement : $;
  }, ei = function(a) {
    const p = we ? we(a) : a.ownerDocument;
    return _e.call(
      p || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, rr = function(a) {
    return a = In(a, Wt, " "), a = In(a, ut, " "), a = In(a, Xe, " "), a;
  }, Wr = function(a) {
    var p;
    a.normalize();
    const A = we ? we(a) : a.ownerDocument, L = _e.call(
      A || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let $ = L.nextNode();
    for (; $; )
      $.data = rr($.data), $ = L.nextNode();
    const X = (p = a.querySelectorAll) === null || p === void 0 ? void 0 : p.call(a, "template");
    X && Qt(X, (de) => {
      pn(de.content) && Wr(de.content);
    });
  }, sr = function(a) {
    const p = se ? se(a) : null;
    return typeof p != "string" || Oe(p) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== Q(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    a.nodeType !== M(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    a.childNodes !== q(a);
  }, pn = function(a) {
    if (!M || typeof a != "object" || a === null)
      return !1;
    try {
      return M(a) === it.documentFragment;
    } catch {
      return !1;
    }
  }, On = function(a) {
    if (!M || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof M(a) == "number";
    } catch {
      return !1;
    }
  };
  function yt(O, a, p) {
    O.length !== 0 && Qt(O, (A) => {
      A.call(t, a, p, dn);
    });
  }
  const Pl = function(a, p) {
    return !!(re && a.hasChildNodes() && !On(a.firstElementChild) && Ue(Zi, a.textContent) && Ue(Zi, a.innerHTML) || re && a.namespaceURI === bt && Fu[p] && (On(a.firstElementChild) || typeof a.textContent == "string" && Ue(Uu[p], a.textContent)) || a.nodeType === it.processingInstruction || re && a.nodeType === it.comment && Ue(Qi, a.data));
  }, ir = function(a, p) {
    if (a instanceof RegExp)
      return Ue(a, p);
    if (a instanceof Function) {
      for (var A = arguments.length, L = new Array(A > 2 ? A - 2 : 0), $ = 2; $ < A; $++)
        L[$ - 2] = arguments[$];
      return !!a(p, ...L);
    }
    return !1;
  }, Nl = function(a, p, A) {
    if (!P[p] && ii(p) && ir(R.tagNameCheck, p))
      return !1;
    if (kr && !un[p]) {
      const L = F(a), $ = q(a);
      if ($ && L) {
        const X = $.length;
        for (let de = X - 1; de >= 0; --de) {
          const Se = a === A ? U($[de], !0) : $[de];
          L.insertBefore(Se, k(a));
        }
      }
    }
    return Ht(a), !0;
  }, ti = function(a, p, A, L) {
    return a.length === 0 ? p : p === A || p === L ? ot(p) : p;
  }, ni = function(a, p) {
    return a === p || F(a) !== null ? !1 : (Hr && nr(a), !0);
  }, ri = function(a, p) {
    if (yt(oe.beforeSanitizeElements, a, null), ni(a, p))
      return !0;
    if (sr(a))
      return Ht(a), !0;
    const A = Oe(K(a));
    if (g = ti(oe.uponSanitizeElement, g, x, Ae), yt(oe.uponSanitizeElement, a, {
      tagName: A,
      allowedTags: g
    }), ni(a, p))
      return !0;
    if (Pl(a, A))
      return Ht(a), !0;
    if (P[A] || !(S.tagCheck instanceof Function && S.tagCheck(A)) && !g[A]) {
      const $ = Nl(a, A, p);
      return $ === !1 && yt(oe.afterSanitizeElements, a, null), $;
    }
    if (Ee(a) === it.element && !Cl(a) || (A === "noscript" || A === "noembed" || A === "noframes") && Ue(Mu, a.innerHTML))
      return Ht(a), !0;
    if (ee && a.nodeType === it.text) {
      const $ = rr(a.textContent);
      a.textContent !== $ && (Nn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = $);
    }
    return yt(oe.afterSanitizeElements, a, null), !1;
  }, si = function(a, p, A) {
    if (N[p] || Zs(p, a) || rt && (p === "id" || p === "name") && (A in n || A in El))
      return !1;
    const L = _[p] || S.attributeCheck instanceof Function && S.attributeCheck(p, a);
    return D && Ue(Kt, p) || W && Ue(kt, p) ? !0 : L ? Bs[p] || Ue(f, In(A, an, "")) || (p === "src" || p === "xlink:href" || p === "href") && a !== "script" && Bi(A, "data:") === 0 && Vs[a] || V && !Ue(gt, In(A, an, "")) ? !0 : !A : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ii(a) && ir(R.tagNameCheck, a) && ir(R.attributeNameCheck, p, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      p === "is" && R.allowCustomizedBuiltInElements && ir(R.tagNameCheck, A)
    );
  }, Il = ie({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ii = function(a) {
    return !Il[Fn(a)] && Ue(u, a);
  }, Dl = function(a, p, A, L) {
    if (B && typeof T == "object" && typeof T.getAttributeType == "function" && !A)
      switch (T.getAttributeType(a, p)) {
        case "TrustedHTML":
          return Fe(L);
        case "TrustedScriptURL":
          return ge(L);
      }
    return L;
  }, Ml = function(a, p, A, L) {
    try {
      A ? a.setAttributeNS(A, p, L) : a.setAttribute(p, L), sr(a) ? Ht(a) : Vi(t.removed);
    } catch {
      qt(p, a);
    }
  }, oi = function(a) {
    yt(oe.beforeSanitizeAttributes, a, null);
    const p = a.attributes;
    if (!p || sr(a))
      return;
    _ = ti(oe.uponSanitizeAttribute, _, E, Ve);
    const A = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _,
      forceKeepAttr: void 0
    };
    let L = p.length;
    const $ = Oe(a.nodeName);
    for (; L--; ) {
      const X = p[L], de = X.name, Se = X.namespaceURI, Ze = X.value, Qe = Oe(de), Gr = Ze;
      let ze = de === "value" ? Gr : gu(Gr);
      if (A.attrName = Qe, A.attrValue = ze, A.keepAttr = !0, A.forceKeepAttr = void 0, yt(oe.uponSanitizeAttribute, a, A), ze = A.attrValue, xn && (Qe === "id" || Qe === "name") && Bi(ze, wn) !== 0 && (qt(de, a, X), ze = wn + ze), re && Ue(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ze)) {
        qt(de, a, X);
        continue;
      }
      if (Qe === "attributename" && zi(ze, "href")) {
        qt(de, a, X);
        continue;
      }
      if (!A.forceKeepAttr) {
        if (!A.keepAttr) {
          qt(de, a, X);
          continue;
        }
        if (!G && Ue(Lu, ze)) {
          qt(de, a, X);
          continue;
        }
        if (ee && (ze = rr(ze)), !si($, Qe, ze)) {
          qt(de, a, X);
          continue;
        }
        ze = Dl($, Qe, Se, ze), ze !== Gr && Ml(a, de, Se, ze);
      }
    }
    yt(oe.afterSanitizeAttributes, a, null);
  }, or = function(a) {
    let p = null;
    const A = ei(a);
    for (yt(oe.beforeSanitizeShadowDOM, a, null); p = A.nextNode(); )
      if (yt(oe.uponSanitizeShadowNode, p, null), ri(p, a), oi(p), pn(p.content) && or(p.content), Ee(p) === it.element) {
        const L = Z(p);
        pn(L) && (Kr(L), or(L));
      }
    yt(oe.afterSanitizeShadowDOM, a, null);
  }, Kr = function(a) {
    const p = [{
      node: a,
      shadow: null
    }];
    for (; p.length > 0; ) {
      const A = p.pop();
      if (A.shadow) {
        or(A.shadow);
        continue;
      }
      const L = A.node, X = Ee(L) === it.element, de = q(L);
      if (de)
        for (let Se = de.length - 1; Se >= 0; --Se)
          p.push({
            node: de[Se],
            shadow: null
          });
      if (X) {
        const Se = se ? se(L) : null;
        if (typeof Se == "string" && Oe(Se) === "template") {
          const Ze = L.content;
          pn(Ze) && p.push({
            node: Ze,
            shadow: null
          });
        }
      }
      if (X) {
        const Se = Z(L);
        pn(Se) && p.push({
          node: null,
          shadow: Se
        }, {
          node: Se,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(O) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, A = null, L = null, $ = null;
    if ($r = !O, $r && (O = "<!-->"), typeof O != "string" && !On(O) && (O = vu(O), typeof O != "string"))
      throw Jt("dirty is not a string, aborting");
    if (!t.isSupported)
      return O;
    Te ? (g = Ae, _ = Ve) : Br(a), (oe.uponSanitizeElement.length > 0 || oe.uponSanitizeAttribute.length > 0) && (g = ot(g)), oe.uponSanitizeAttribute.length > 0 && (_ = ot(_)), t.removed = [];
    const X = Hr && typeof O != "string" && On(O);
    if (X) {
      Rl(O);
      const Ze = K(O);
      if (typeof Ze == "string") {
        const Qe = Oe(Ze);
        if (!g[Qe] || P[Qe])
          throw tr(O), Jt("root node is forbidden and cannot be sanitized in-place");
      }
      if (sr(O))
        throw tr(O), Jt("root node is clobbered and cannot be sanitized in-place");
      try {
        Kr(O);
      } catch (Qe) {
        throw tr(O), Qe;
      }
    } else if (On(O))
      p = Qs("<!---->"), A = p.ownerDocument.importNode(O, !0), A.nodeType === it.element && A.nodeName === "BODY" || A.nodeName === "HTML" ? p = A : p.appendChild(A), Kr(A);
    else {
      if (!at && !ee && !ne && // eslint-disable-next-line unicorn/prefer-includes
      O.indexOf("<") === -1)
        return B && De ? Fe(O) : O;
      if (p = Qs(O), !p)
        return at ? null : De ? ae : "";
    }
    p && Je && Ht(p.firstChild);
    const de = X ? O : p;
    try {
      const Ze = ei(de);
      for (; L = Ze.nextNode(); )
        ri(L, de), oi(L), pn(L.content) && or(L.content);
    } catch (Ze) {
      throw X && (tr(O), Qt(t.removed, (Qe) => {
        Qe.element && nr(Qe.element);
      })), Ze;
    }
    if (X)
      return Qt(t.removed, (Ze) => {
        Ze.element && nr(Ze.element);
      }), ee && Wr(O), O;
    if (at) {
      if (ee && Wr(p), Gt)
        for ($ = nt.call(p.ownerDocument); p.firstChild; )
          $.appendChild(p.firstChild);
      else
        $ = p;
      return (_.shadowroot || _.shadowrootmode) && ($ = Ut.call(r, $, !0)), $;
    }
    let Se = ne ? p.outerHTML : p.innerHTML;
    return ne && g["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && Ue(Iu, p.ownerDocument.doctype.name) && (Se = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + Se), ee && (Se = rr(Se)), B && De ? Fe(Se) : Se;
  }, t.setConfig = function() {
    let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Br(O), Te = !0, Ae = g, Ve = _;
  }, t.clearConfig = function() {
    dn = null, Te = !1, Ae = null, Ve = null, B = he, ae = "";
  }, t.isValidAttribute = function(O, a, p) {
    dn || Br({});
    const A = Oe(O), L = Oe(a);
    return si(A, L, p);
  }, t.addHook = function(O, a) {
    typeof a == "function" && tt(oe, O) && Nn(oe[O], a);
  }, t.removeHook = function(O, a) {
    if (tt(oe, O)) {
      if (a !== void 0) {
        const p = hu(oe[O], a);
        return p === -1 ? void 0 : mu(oe[O], p, 1)[0];
      }
      return Vi(oe[O]);
    }
  }, t.removeHooks = function(O) {
    tt(oe, O) && (oe[O] = []);
  }, t.removeAllHooks = function() {
    oe = eo();
  }, t;
}
var $u = bl();
function ju(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ps, to;
function Vu() {
  if (to) return ps;
  to = 1;
  var e = /["'&<>]/;
  ps = t;
  function t(n) {
    var r = "" + n, s = e.exec(r);
    if (!s)
      return r;
    var i, o = "", l = 0, c = 0;
    for (l = s.index; l < r.length; l++) {
      switch (r.charCodeAt(l)) {
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
      c !== l && (o += r.substring(c, l)), c = l + 1, o += i;
    }
    return c !== l ? o + r.substring(c, l) : o;
  }
  return ps;
}
var zu = Vu();
const no = /* @__PURE__ */ ju(zu);
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_");
globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function Bu(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function b(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = (k) => k, m = (l.sanitize ? $u.sanitize : c) || c, d = l.escape ? no : c, T = (k) => typeof k == "string" || typeof k == "number", I = (k, q, F) => k.replace(/%n/g, "" + F).replace(/{([^{}]*)}/g, (Z, Q) => {
    if (q === void 0 || !(Q in q))
      return d(Z);
    const M = q[Q];
    return T(M) ? d(`${M}`) : typeof M == "object" && T(M.value) ? (M.escape !== !1 ? no : c)(`${M.value}`) : d(Z);
  });
  let J = (s?.bundle ?? Bu(e)).translations[t] || t;
  return J = Array.isArray(J) ? J[0] : J, m(typeof i == "object" || o !== void 0 ? I(
    J,
    i,
    o
  ) : J);
}
const Wu = { class: "library-vue-catalogue" }, Ku = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Gu = { class: "library-catalogue-header" }, qu = { id: "library-catalogue-heading" }, Yu = { class: "library-muted" }, Xu = ["aria-label"], Ju = ["href"], Zu = ["href"], Qu = ["href"], ef = ["href"], tf = { class: "library-filter-panel" }, nf = { class: "library-filter-panel-summary" }, rf = ["aria-label"], sf = { value: "" }, of = ["value"], lf = { value: "" }, af = ["value"], cf = { value: "" }, uf = ["value"], ff = { value: "" }, df = ["value"], pf = { value: "" }, hf = ["value"], mf = { value: "" }, gf = ["value"], bf = { value: "" }, yf = ["value"], _f = { value: "" }, Tf = ["value"], vf = { value: "" }, Sf = ["value"], Ef = { value: "" }, Af = ["value"], xf = { value: "" }, wf = { value: "1" }, Cf = { value: "" }, Of = { value: "1" }, Rf = { value: "title" }, Pf = { value: "recent" }, Nf = { value: "publicationDate" }, If = { value: "publication" }, Df = { value: "lastOpened" }, Mf = { value: "format" }, Lf = ["value"], Ff = ["value"], Uf = ["aria-label"], kf = ["aria-label"], Hf = ["href"], $f = { class: "library-muted library-filter-result-summary" }, jf = { key: 0 }, Vf = { href: "?" }, zf = ["aria-label"], Bf = ["href", "aria-label"], Wf = ["aria-label"], Kf = { class: "library-pagination-range" }, Gf = { key: 0 }, qf = ["href"], Yf = {
  key: 1,
  class: "library-muted"
}, Xf = ["href"], Jf = {
  key: 3,
  class: "library-muted"
}, Zf = {
  key: 1,
  class: "library-periodical-groups"
}, Qf = { class: "library-periodical-groups-summary" }, ed = { id: "library-periodical-groups-heading" }, td = { class: "library-muted" }, nd = ["href"], rd = { class: "library-muted" }, sd = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty"
}, id = { class: "library-periodical-groups-summary" }, od = { id: "library-periodical-groups-empty-heading" }, ld = { class: "library-muted" }, ad = {
  key: 3,
  class: "library-empty-content",
  role: "status"
}, cd = { class: "library-muted" }, ud = { class: "library-empty-actions" }, fd = {
  href: "?",
  class: "button secondary"
}, dd = ["href"], pd = {
  key: 4,
  class: "library-cover-gallery"
}, hd = ["href", "aria-label"], md = ["src", "alt"], gd = ["action", "onSubmit"], bd = ["value"], yd = ["value"], _d = ["aria-pressed", "title", "aria-label", "onClick"], Td = { class: "library-cover-summary" }, vd = { class: "library-cover-primary" }, Sd = ["aria-label"], Ed = ["href"], Ad = ["onToggle"], xd = ["aria-label"], wd = { class: "library-cover-meta" }, Cd = {
  key: 0,
  class: "library-creator"
}, Od = { class: "library-cover-detail-list" }, Rd = { class: "library-cover-detail-chip" }, Pd = {
  key: 0,
  class: "library-cover-detail-chip"
}, Nd = {
  key: 1,
  class: "library-cover-detail-chip"
}, Id = {
  key: 2,
  class: "library-cover-detail-chip"
}, Dd = {
  key: 3,
  class: "library-cover-detail-chip"
}, Md = {
  key: 4,
  class: "library-cover-detail-chip"
}, Ld = {
  key: 5,
  class: "library-cover-detail-chip"
}, Fd = {
  key: 6,
  class: "library-cover-detail-chip"
}, Ud = {
  key: 1,
  class: "library-muted library-cover-description"
}, kd = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Hd = { key: 0 }, $d = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, jd = {
  key: 0,
  class: "library-muted"
}, Vd = { class: "library-cover-actions" }, zd = ["href"], Bd = ["href"], Wd = ["href"], Kd = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = /* @__PURE__ */ _n((t.state.items || []).map((H) => ({ ...H }))), i = Re(() => s), o = Re(() => t.state.shelves || []), l = Re(() => t.state.formats || []), c = Re(() => t.state.publications || []), m = Re(() => t.state.publicationSummaries || []), d = Re(() => t.state.publicationYears || []), T = Re(() => t.state.creators || []), I = Re(() => t.state.scanStatuses || []), U = Re(() => t.state.workflowStatuses || []), J = Re(() => t.state.genres || []), k = Re(() => t.state.classifications || []), q = Re(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: i.value.length,
      visible: i.value.length,
      from: i.value.length > 0 ? 1 : 0,
      to: i.value.length,
      previousUrl: "",
      nextUrl: ""
    }), F = /* @__PURE__ */ _n({
      q: t.state.activeFilters?.q || "",
      type: t.state.activeFilters?.type || "",
      publication: t.state.activeFilters?.publication || "",
      year: t.state.activeFilters?.year || "",
      creator: t.state.activeFilters?.creator || "",
      format: t.state.activeFilters?.format || "",
      tag: t.state.activeFilters?.tag || "",
      shelf: t.state.activeFilters?.shelf || "",
      status: t.state.activeFilters?.status || "",
      workflowStatus: t.state.activeFilters?.workflowStatus || "",
      genre: t.state.activeFilters?.genre || "",
      classification: t.state.activeFilters?.classification || "",
      scannerConflicts: t.state.activeFilters?.scannerConflicts || "",
      starred: t.state.activeFilters?.starred || "",
      sort: t.state.activeFilters?.sort || "title"
    }), Z = Re(() => t.state.settingsUrl || ""), Q = Re(() => t.state.requestToken || ""), M = Re(() => t.state.metadataExportUrl || ""), se = Re(() => t.state.metadataSidecarManifestUrl || ""), we = Re(() => t.state.metadataSidecarBundleUrl || ""), Ee = Re(() => t.state.scannerConflictReviewUrl || "?scannerConflicts=1"), K = {
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
    }, B = Re(() => Object.entries(K).map(([H, w]) => ({ key: H, label: w, value: F[H] || "" })).filter((H) => String(H.value).trim() !== "")), ae = /* @__PURE__ */ _n({});
    function he(H) {
      const w = new URLSearchParams(window.location.search);
      w.delete(H), w.delete("page");
      const h = w.toString();
      return h ? `?${h}` : "?";
    }
    function me(H) {
      return String(H || "").toUpperCase();
    }
    function Ce(H) {
      return H.nextcloudTags || [];
    }
    function $e(H) {
      const w = new URLSearchParams(window.location.search);
      return w.set("publication", H), w.set("sort", "publication"), w.delete("page"), `?${w.toString()}`;
    }
    function Fe(H, w) {
      ae[H] = !!w?.currentTarget?.open;
    }
    async function ge(H, w) {
      const h = w?.currentTarget?.closest?.("form") || w?.currentTarget;
      if (!h || !H?.starUrl) return;
      const _e = !!H.starred;
      H.starred = !_e;
      try {
        (await fetch(H.starUrl, {
          method: "POST",
          body: new FormData(h),
          credentials: "same-origin"
        })).ok || (H.starred = _e);
      } catch {
        H.starred = _e;
      }
    }
    return (H, w) => (j(), z("div", Wu, [
      y("section", Ku, [
        y("div", Gu, [
          y("div", null, [
            y("h2", qu, v(C(b)("library", "Publication catalogue")), 1),
            y("p", Yu, v(C(b)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          y("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": C(b)("library", "Library actions")
          }, [
            y("a", {
              href: Z.value,
              class: "button secondary",
              "aria-label": "Open Library settings"
            }, v(C(b)("library", "Settings")), 9, Ju),
            M.value ? (j(), z("a", {
              key: 0,
              href: M.value,
              class: "button secondary",
              "aria-label": "Export corrected metadata"
            }, v(C(b)("library", "Export corrected metadata")), 9, Zu)) : Ne("", !0),
            se.value ? (j(), z("a", {
              key: 1,
              href: se.value,
              class: "button secondary",
              "aria-label": "Export sidecar manifest"
            }, v(C(b)("library", "Sidecar manifest")), 9, Qu)) : Ne("", !0),
            we.value ? (j(), z("a", {
              key: 2,
              href: we.value,
              class: "button secondary",
              "aria-label": "Export sidecar ZIP"
            }, v(C(b)("library", "Sidecar ZIP")), 9, ef)) : Ne("", !0)
          ], 8, Xu)
        ]),
        y("details", tf, [
          y("summary", nf, v(C(b)("library", "Show catalogue filters")), 1),
          y("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": C(b)("library", "Catalogue search and filters")
          }, [
            y("label", null, [
              be(v(C(b)("library", "Search title / author")) + " ", 1),
              Be(y("input", {
                "onUpdate:modelValue": w[0] || (w[0] = (h) => F.q = h),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [Fi, F.q]
              ])
            ]),
            y("label", null, [
              be(v(C(b)("library", "Type")) + " ", 1),
              Be(y("select", {
                "onUpdate:modelValue": w[1] || (w[1] = (h) => F.type = h),
                name: "type"
              }, [
                y("option", sf, v(C(b)("library", "All types")), 1),
                (j(), z(ve, null, We(n, (h) => y("option", {
                  key: h,
                  value: h
                }, v(h), 9, of)), 64))
              ], 512), [
                [st, F.type]
              ])
            ]),
            y("label", null, [
              be(v(C(b)("library", "Series / periodical")) + " ", 1),
              Be(y("select", {
                "onUpdate:modelValue": w[2] || (w[2] = (h) => F.publication = h),
                name: "publication"
              }, [
                y("option", lf, v(C(b)("library", "All series and periodicals")), 1),
                (j(!0), z(ve, null, We(c.value, (h) => (j(), z("option", {
                  key: h,
                  value: h
                }, v(h), 9, af))), 128))
              ], 512), [
                [st, F.publication]
              ])
            ]),
            y("label", null, [
              be(v(C(b)("library", "Publication year")) + " ", 1),
              Be(y("select", {
                "onUpdate:modelValue": w[3] || (w[3] = (h) => F.year = h),
                name: "year"
              }, [
                y("option", cf, v(C(b)("library", "All years")), 1),
                (j(!0), z(ve, null, We(d.value, (h) => (j(), z("option", {
                  key: h,
                  value: h
                }, v(h), 9, uf))), 128))
              ], 512), [
                [st, F.year]
              ])
            ]),
            y("label", null, [
              be(v(C(b)("library", "Creator")) + " ", 1),
              Be(y("select", {
                "onUpdate:modelValue": w[4] || (w[4] = (h) => F.creator = h),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                y("option", ff, v(C(b)("library", "All creators")), 1),
                (j(!0), z(ve, null, We(T.value, (h) => (j(), z("option", {
                  key: h,
                  value: h
                }, v(h), 9, df))), 128))
              ], 512), [
                [st, F.creator]
              ])
            ]),
            y("label", null, [
              be(v(C(b)("library", "Nextcloud tag")) + " ", 1),
              Be(y("input", {
                "onUpdate:modelValue": w[5] || (w[5] = (h) => F.tag = h),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [Fi, F.tag]
              ])
            ]),
            y("label", null, [
              be(v(C(b)("library", "Format")) + " ", 1),
              Be(y("select", {
                "onUpdate:modelValue": w[6] || (w[6] = (h) => F.format = h),
                name: "format"
              }, [
                y("option", pf, v(C(b)("library", "All formats")), 1),
                (j(!0), z(ve, null, We(l.value, (h) => (j(), z("option", {
                  key: h,
                  value: h
                }, v(me(h)), 9, hf))), 128))
              ], 512), [
                [st, F.format]
              ])
            ]),
            y("label", null, [
              be(v(C(b)("library", "Shelf")) + " ", 1),
              Be(y("select", {
                "onUpdate:modelValue": w[7] || (w[7] = (h) => F.shelf = h),
                name: "shelf"
              }, [
                y("option", mf, v(C(b)("library", "All shelves")), 1),
                (j(!0), z(ve, null, We(o.value, (h) => (j(), z("option", {
                  key: h,
                  value: h
                }, v(h), 9, gf))), 128))
              ], 512), [
                [st, F.shelf]
              ])
            ]),
            y("label", null, [
              be(v(C(b)("library", "Scan status")) + " ", 1),
              Be(y("select", {
                "onUpdate:modelValue": w[8] || (w[8] = (h) => F.status = h),
                name: "status"
              }, [
                y("option", bf, v(C(b)("library", "All scan statuses")), 1),
                (j(!0), z(ve, null, We(I.value, (h) => (j(), z("option", {
                  key: h,
                  value: h
                }, v(h), 9, yf))), 128))
              ], 512), [
                [st, F.status]
              ])
            ]),
            y("label", null, [
              be(v(C(b)("library", "Workflow status")) + " ", 1),
              Be(y("select", {
                "onUpdate:modelValue": w[9] || (w[9] = (h) => F.workflowStatus = h),
                name: "workflowStatus"
              }, [
                y("option", _f, v(C(b)("library", "All workflow statuses")), 1),
                (j(!0), z(ve, null, We(U.value, (h) => (j(), z("option", {
                  key: h,
                  value: h
                }, v(h), 9, Tf))), 128))
              ], 512), [
                [st, F.workflowStatus]
              ])
            ]),
            y("label", null, [
              be(v(C(b)("library", "Genre")) + " ", 1),
              Be(y("select", {
                "onUpdate:modelValue": w[10] || (w[10] = (h) => F.genre = h),
                name: "genre"
              }, [
                y("option", vf, v(C(b)("library", "All genres")), 1),
                (j(!0), z(ve, null, We(J.value, (h) => (j(), z("option", {
                  key: h,
                  value: h
                }, v(h), 9, Sf))), 128))
              ], 512), [
                [st, F.genre]
              ])
            ]),
            y("label", null, [
              be(v(C(b)("library", "Classification")) + " ", 1),
              Be(y("select", {
                "onUpdate:modelValue": w[11] || (w[11] = (h) => F.classification = h),
                name: "classification"
              }, [
                y("option", Ef, v(C(b)("library", "All classifications")), 1),
                (j(!0), z(ve, null, We(k.value, (h) => (j(), z("option", {
                  key: h,
                  value: h
                }, v(h), 9, Af))), 128))
              ], 512), [
                [st, F.classification]
              ])
            ]),
            y("label", null, [
              be(v(C(b)("library", "Scanner conflicts")) + " ", 1),
              Be(y("select", {
                "onUpdate:modelValue": w[12] || (w[12] = (h) => F.scannerConflicts = h),
                name: "scannerConflicts"
              }, [
                y("option", xf, v(C(b)("library", "All metadata")), 1),
                y("option", wf, v(C(b)("library", "Needs review")), 1)
              ], 512), [
                [st, F.scannerConflicts]
              ])
            ]),
            y("label", null, [
              be(v(C(b)("library", "Starred")) + " ", 1),
              Be(y("select", {
                "onUpdate:modelValue": w[13] || (w[13] = (h) => F.starred = h),
                name: "starred"
              }, [
                y("option", Cf, v(C(b)("library", "All publications")), 1),
                y("option", Of, v(C(b)("library", "Starred only")), 1)
              ], 512), [
                [st, F.starred]
              ])
            ]),
            y("label", null, [
              be(v(C(b)("library", "Sort")) + " ", 1),
              Be(y("select", {
                "onUpdate:modelValue": w[14] || (w[14] = (h) => F.sort = h),
                name: "sort"
              }, [
                y("option", Rf, v(C(b)("library", "Title")), 1),
                y("option", Pf, v(C(b)("library", "Recently added")), 1),
                y("option", Nf, v(C(b)("library", "Publication date")), 1),
                y("option", If, v(C(b)("library", "Series / periodical")), 1),
                y("option", Df, v(C(b)("library", "Recently opened")), 1),
                y("option", Mf, v(C(b)("library", "Format")), 1)
              ], 512), [
                [st, F.sort]
              ])
            ]),
            y("label", null, [
              be(v(C(b)("library", "Page size")) + " ", 1),
              y("select", {
                value: q.value.limit,
                name: "limit"
              }, [
                (j(), z(ve, null, We(r, (h) => y("option", {
                  key: h,
                  value: h
                }, v(h), 9, Ff)), 64))
              ], 8, Lf)
            ]),
            y("button", {
              type: "submit",
              class: "button primary",
              "aria-label": C(b)("library", "Apply catalogue filters")
            }, v(C(b)("library", "Apply filters")), 9, Uf),
            y("a", {
              href: "?",
              class: "button secondary",
              "aria-label": C(b)("library", "Clear catalogue filters")
            }, v(C(b)("library", "Clear")), 9, kf),
            y("a", {
              href: Ee.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, v(C(b)("library", "Review scanner conflicts")), 9, Hf)
          ], 8, rf)
        ]),
        y("p", $f, [
          be(v(C(b)("library", "Showing")) + " " + v(q.value.from) + "–" + v(q.value.to) + " " + v(C(b)("library", "of")) + " " + v(q.value.total) + " " + v(C(b)("library", "catalogue items")), 1),
          B.value.length > 0 ? (j(), z("span", jf, [
            w[15] || (w[15] = be(" · ", -1)),
            y("a", Vf, v(C(b)("library", "Clear all filters")), 1)
          ])) : Ne("", !0)
        ]),
        B.value.length > 0 ? (j(), z("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": C(b)("library", "Active filters")
        }, [
          y("span", null, v(C(b)("library", "Active filters")), 1),
          (j(!0), z(ve, null, We(B.value, (h) => (j(), z("a", {
            key: h.key,
            href: he(h.key),
            class: "library-filter-chip",
            "aria-label": `${C(b)("library", "Remove filter")}: ${h.label}`
          }, [
            y("strong", null, v(h.label) + ":", 1),
            be(" " + v(h.value) + " ", 1),
            w[16] || (w[16] = y("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Bf))), 128))
        ], 8, zf)) : Ne("", !0),
        y("nav", {
          class: "library-pagination",
          "aria-label": C(b)("library", "Catalogue pagination")
        }, [
          y("span", Kf, [
            be(v(C(b)("library", "Page")) + " " + v(q.value.page), 1),
            q.value.total > 0 ? (j(), z("span", Gf, " · " + v(q.value.from) + "–" + v(q.value.to), 1)) : Ne("", !0)
          ]),
          q.value.previousUrl ? (j(), z("a", {
            key: 0,
            href: q.value.previousUrl
          }, v(C(b)("library", "Previous")), 9, qf)) : (j(), z("span", Yf, v(C(b)("library", "Previous")), 1)),
          q.value.nextUrl ? (j(), z("a", {
            key: 2,
            href: q.value.nextUrl
          }, v(C(b)("library", "Next")), 9, Xf)) : (j(), z("span", Jf, v(C(b)("library", "Next")), 1))
        ], 8, Wf),
        m.value.length > 0 ? (j(), z("details", Zf, [
          y("summary", Qf, v(C(b)("library", "Show top series and periodicals")), 1),
          y("h3", ed, v(C(b)("library", "Top series and periodicals")), 1),
          y("p", td, v(C(b)("library", "Jump into recurring publications with one click.")), 1),
          y("ul", null, [
            (j(!0), z(ve, null, We(m.value, (h) => (j(), z("li", {
              key: h.publication
            }, [
              y("a", {
                href: $e(h.publication)
              }, v(h.publication), 9, nd),
              y("span", rd, v(h.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : m.value.length === 0 ? (j(), z("details", sd, [
          y("summary", id, v(C(b)("library", "Show top series and periodicals")), 1),
          y("h3", od, v(C(b)("library", "No series or periodicals found yet")), 1),
          y("p", ld, v(C(b)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Ne("", !0),
        i.value.length === 0 ? (j(), z("div", ad, [
          y("h3", null, v(C(b)("library", "No catalogue items match")), 1),
          y("p", cd, v(C(b)("library", "Scan enabled roots or clear the active filters.")), 1),
          y("p", ud, [
            y("a", fd, v(C(b)("library", "Clear all filters")), 1),
            y("a", {
              href: Z.value,
              class: "button primary"
            }, v(C(b)("library", "Run a scan from settings")), 9, dd)
          ])
        ])) : (j(), z("div", pd, [
          (j(!0), z(ve, null, We(i.value, (h) => (j(), z("article", {
            key: h.id,
            class: zn(["library-cover-card", { "library-cover-card--open": ae[h.id] }])
          }, [
            y("a", {
              class: "library-cover-link",
              href: h.openUrl,
              "aria-label": `Read ${h.title}`
            }, [
              y("img", {
                class: "library-cover-image",
                src: h.coverUrl,
                alt: `Cover for ${h.title}`,
                loading: "lazy"
              }, null, 8, md)
            ], 8, hd),
            y("form", {
              method: "post",
              action: h.starUrl,
              class: "library-cover-star-form",
              onSubmit: ki((_e) => ge(h, _e), ["prevent"])
            }, [
              y("input", {
                type: "hidden",
                name: "requesttoken",
                value: Q.value
              }, null, 8, bd),
              w[17] || (w[17] = y("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              y("input", {
                type: "hidden",
                name: "starred",
                value: h.starred ? "0" : "1"
              }, null, 8, yd),
              y("button", {
                type: "submit",
                class: zn(["library-cover-star-button", { "library-cover-star-button--starred": h.starred }]),
                "aria-pressed": h.starred ? "true" : "false",
                title: h.starred ? C(b)("library", "Unstar this publication") : C(b)("library", "Star this publication"),
                "aria-label": h.starred ? C(b)("library", "Unstar this publication") : C(b)("library", "Star this publication"),
                onClick: ki((_e) => ge(h, _e), ["prevent"])
              }, v(h.starred ? "★" : "☆"), 11, _d)
            ], 40, gd),
            y("div", Td, [
              y("div", vd, [
                y("h3", null, [
                  h.starred ? (j(), z("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": C(b)("library", "Starred")
                  }, "★", 8, Sd)) : Ne("", !0),
                  be(v(h.title), 1)
                ]),
                y("a", {
                  class: "library-cover-read",
                  href: h.openUrl
                }, v(C(b)("library", "Read")), 9, Ed)
              ]),
              y("details", {
                class: "library-cover-details",
                onToggle: (_e) => Fe(h.id, _e)
              }, [
                y("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${C(b)("library", "Show details and actions")}: ${h.title}`
                }, v(C(b)("library", "Details")), 9, xd),
                y("div", wd, [
                  h.creators ? (j(), z("p", Cd, v(h.creators), 1)) : Ne("", !0),
                  y("dl", Od, [
                    y("div", Rd, [
                      y("dt", null, v(C(b)("library", "Type")), 1),
                      y("dd", null, v(h.publicationType), 1)
                    ]),
                    h.publication ? (j(), z("div", Pd, [
                      y("dt", null, v(C(b)("library", "Series")), 1),
                      y("dd", null, v(h.publication), 1)
                    ])) : Ne("", !0),
                    h.publicationDate ? (j(), z("div", Nd, [
                      y("dt", null, v(C(b)("library", "Date")), 1),
                      y("dd", null, v(h.publicationDate), 1)
                    ])) : Ne("", !0),
                    h.workflowStatus ? (j(), z("div", Id, [
                      y("dt", null, v(C(b)("library", "Status")), 1),
                      y("dd", null, v(h.workflowStatus), 1)
                    ])) : Ne("", !0),
                    h.hasScannerConflict ? (j(), z("div", Dd, [
                      y("dt", null, v(C(b)("library", "Review")), 1),
                      y("dd", null, v(h.scannerConflictCount) + " fields", 1)
                    ])) : Ne("", !0),
                    h.lastOpenedAt ? (j(), z("div", Md, [
                      y("dt", null, v(C(b)("library", "Last opened")), 1),
                      y("dd", null, v(h.lastOpenedAt), 1)
                    ])) : Ne("", !0),
                    h.extension ? (j(), z("div", Ld, [
                      y("dt", null, v(C(b)("library", "Format")) + ":", 1),
                      y("dd", null, v(me(h.extension)), 1)
                    ])) : Ne("", !0),
                    h.shelf ? (j(), z("div", Fd, [
                      y("dt", null, v(C(b)("library", "Shelf")), 1),
                      y("dd", null, v(h.shelf), 1)
                    ])) : Ne("", !0)
                  ]),
                  h.description ? (j(), z("p", Ud, v(h.description), 1)) : Ne("", !0),
                  h.scanStatus !== "indexed" || h.scanError ? (j(), z("p", kd, [
                    be(" scanStatus: " + v(h.scanStatus || "unknown"), 1),
                    h.scanError ? (j(), z("span", Hd, " · scanError: " + v(h.scanError), 1)) : Ne("", !0)
                  ])) : Ne("", !0),
                  y("div", $d, [
                    Ce(h).length === 0 ? (j(), z("span", jd, "No Nextcloud tags")) : (j(!0), z(ve, { key: 1 }, We(Ce(h), (_e) => (j(), z("span", {
                      key: _e.id,
                      class: "library-tag"
                    }, v(_e.name), 1))), 128))
                  ]),
                  y("p", Vd, [
                    y("a", {
                      href: h.filesUrl
                    }, v(C(b)("library", "Show in Files")), 9, zd),
                    w[18] || (w[18] = be(" · ", -1)),
                    y("a", {
                      href: h.downloadUrl
                    }, v(C(b)("library", "Download source")), 9, Bd),
                    w[19] || (w[19] = be(" · ", -1)),
                    y("a", {
                      href: h.detailsUrl
                    }, v(C(b)("library", "Details")), 9, Wd)
                  ])
                ])
              ], 40, Ad)
            ])
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}, ro = iu("library", "catalogue", {}), gr = document.querySelector("#library-vue-root"), so = {
  ...ro,
  requestToken: gr?.dataset.requestToken || ro.requestToken || ""
};
function ye(e) {
  return String(e ?? "");
}
function yl(e) {
  return ye(e).toUpperCase();
}
function Gd(e, t, n, r = ye) {
  for (const s of t) {
    const i = document.createElement("option");
    i.value = ye(s), i.textContent = r(s), ye(s) === ye(n) && (i.selected = !0), e.appendChild(i);
  }
}
function io(e, t, n, r, s = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = ye(r), o.placeholder = s, i.appendChild(o), e.appendChild(i);
}
function mn(e, t, n, r, s, i, o = ye) {
  const l = document.createElement("label");
  l.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const m = document.createElement("option");
  m.value = "", m.textContent = s, c.appendChild(m), Gd(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function qd(e) {
  const t = ye(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function Yd(e) {
  const t = new URLSearchParams(window.location.search);
  return t.set("publication", e), t.set("sort", "publication"), t.delete("page"), `?${t.toString()}`;
}
function Xd(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", b("library", "Catalogue search and filters")), io(r, b("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), mn(r, b("library", "Type"), "type", n.type, b("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), io(r, b("library", "Nextcloud tag"), "tag", n.tag, "photography"), mn(r, b("library", "Format"), "format", n.format, b("library", "All formats"), e.formats || [], yl), mn(r, b("library", "Shelf"), "shelf", n.shelf, b("library", "All shelves"), e.shelves || []), mn(r, b("library", "Scan status"), "status", n.status, b("library", "All scan statuses"), e.scanStatuses || []), mn(r, b("library", "Sort"), "sort", n.sort || "title", b("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), mn(r, b("library", "Page size"), "limit", t.limit || 100, b("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", b("library", "Apply catalogue filters")), s.textContent = b("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", b("library", "Clear catalogue filters")), i.textContent = b("library", "Clear"), r.append(s, i), r;
}
function Jd(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = ye(e.settingsUrl || ""), i = ye(e.metadataExportUrl || ""), o = document.createElement("div");
  o.className = "library-vue-catalogue library-vue-fallback", o.dataset.vueFallback = "true";
  const l = document.createElement("section");
  l.className = "library-panel", l.setAttribute("aria-labelledby", "library-catalogue-heading");
  const c = document.createElement("div");
  c.className = "library-catalogue-header";
  const m = document.createElement("div"), d = document.createElement("h2");
  d.id = "library-catalogue-heading", d.textContent = b("library", "Publication catalogue");
  const T = document.createElement("p");
  T.className = "library-muted", T.textContent = b("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), m.append(d, T);
  const I = document.createElement("nav");
  if (I.className = "library-catalogue-toolbar", I.setAttribute("aria-label", b("library", "Library actions")), s) {
    const K = document.createElement("a");
    K.href = s, K.className = "button secondary", K.setAttribute("aria-label", "Open Library settings"), K.textContent = b("library", "Settings"), I.appendChild(K);
  }
  if (i) {
    const K = document.createElement("a");
    K.href = i, K.className = "button secondary", K.setAttribute("aria-label", "Export corrected metadata"), K.textContent = b("library", "Export corrected metadata"), I.appendChild(K);
  }
  if (e.metadataSidecarManifestUrl) {
    const K = document.createElement("a");
    K.href = e.metadataSidecarManifestUrl, K.className = "button secondary", K.setAttribute("aria-label", "Export sidecar manifest"), K.textContent = b("library", "Sidecar manifest"), I.appendChild(K);
  }
  if (e.metadataSidecarBundleUrl) {
    const K = document.createElement("a");
    K.href = e.metadataSidecarBundleUrl, K.className = "button secondary", K.setAttribute("aria-label", "Export sidecar ZIP"), K.textContent = b("library", "Sidecar ZIP"), I.appendChild(K);
  }
  c.append(m, I), l.appendChild(c);
  const U = document.createElement("details");
  U.className = "library-filter-panel";
  const J = document.createElement("summary");
  J.className = "library-filter-panel-summary", J.textContent = b("library", "Show catalogue filters"), U.append(J, Xd(e, r)), l.appendChild(U);
  const k = document.createElement("p");
  k.className = "library-muted library-filter-result-summary", k.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`;
  const q = document.createElement("a");
  q.href = "?", q.textContent = ` ${b("library", "Clear all filters")}`, k.appendChild(q), l.appendChild(k);
  const F = document.createElement("nav");
  F.className = "library-pagination", F.setAttribute("aria-label", b("library", "Catalogue pagination"));
  const Z = document.createElement("span");
  Z.className = "library-pagination-range", Z.textContent = `Page ${r.page ?? 1} · ${r.from ?? 0}–${r.to ?? n.length}`, F.appendChild(Z), l.appendChild(F);
  const Q = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], M = document.createElement("details");
  M.className = Q.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const se = document.createElement("summary");
  se.className = "library-periodical-groups-summary", se.textContent = b("library", "Show top series and periodicals"), M.appendChild(se);
  const we = document.createElement("h3");
  we.textContent = Q.length > 0 ? b("library", "Top series and periodicals") : b("library", "No series or periodicals found yet");
  const Ee = document.createElement("p");
  if (Ee.className = "library-muted", Ee.textContent = Q.length > 0 ? b("library", "Jump into recurring publications with one click.") : b("library", "Add publication or series names in item details to build this shortcut panel."), M.append(we, Ee), Q.length > 0) {
    const K = document.createElement("ul");
    for (const B of Q) {
      const ae = document.createElement("li"), he = document.createElement("a");
      he.href = Yd(ye(B.publication)), he.textContent = ye(B.publication);
      const me = document.createElement("span");
      me.className = "library-muted", me.textContent = `${B.itemCount} items`, ae.append(he, me), K.appendChild(ae);
    }
    M.appendChild(K);
  }
  if (l.appendChild(M), n.length === 0) {
    const K = document.createElement("div");
    K.className = "library-empty-content", K.setAttribute("role", "status");
    const B = document.createElement("h3");
    B.textContent = b("library", "No catalogue items match");
    const ae = document.createElement("p");
    ae.className = "library-muted", ae.textContent = b("library", "Scan enabled roots or clear the active filters.");
    const he = document.createElement("p");
    he.className = "library-empty-actions";
    const me = document.createElement("a");
    me.href = "?", me.className = "button secondary", me.textContent = b("library", "Clear all filters");
    const Ce = document.createElement("a");
    Ce.href = s, Ce.className = "button primary", Ce.textContent = b("library", "Run a scan from settings"), he.append(me, Ce), K.append(B, ae, he), l.appendChild(K);
  } else {
    const K = document.createElement("div");
    K.className = "library-cover-gallery";
    for (const B of n) {
      const ae = document.createElement("article");
      ae.className = "library-cover-card";
      const he = document.createElement("a");
      he.className = "library-cover-link", he.href = ye(B.openUrl || "#"), he.setAttribute("aria-label", `Read ${ye(B.title || "publication")}`);
      const me = document.createElement("img");
      me.className = "library-cover-image", me.src = ye(B.coverUrl || ""), me.alt = `Cover for ${ye(B.title || "publication")}`, me.loading = "lazy", he.appendChild(me);
      const Ce = qd(e), $e = document.createElement("form");
      $e.method = "post", $e.action = ye(B.starUrl || ""), $e.className = "library-cover-star-form", Ce && $e.appendChild(Ce);
      const Fe = document.createElement("input");
      Fe.type = "hidden", Fe.name = "returnTo", Fe.value = "catalogue";
      const ge = document.createElement("input");
      ge.type = "hidden", ge.name = "starred", ge.value = B.starred ? "0" : "1";
      const H = document.createElement("button");
      H.type = "submit", H.className = B.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", H.setAttribute("aria-pressed", B.starred ? "true" : "false"), H.setAttribute("aria-label", B.starred ? b("library", "Unstar this publication") : b("library", "Star this publication")), H.title = B.starred ? b("library", "Unstar this publication") : b("library", "Star this publication"), H.textContent = B.starred ? "★" : "☆", $e.append(Fe, ge, H);
      const w = document.createElement("div");
      w.className = "library-cover-summary";
      const h = document.createElement("h3");
      if (h.textContent = ye(B.title || "Untitled publication"), w.appendChild(h), B.creators) {
        const Xe = document.createElement("p");
        Xe.className = "library-creator", Xe.textContent = ye(B.creators), w.appendChild(Xe);
      }
      const _e = document.createElement("dl");
      _e.className = "library-cover-detail-list";
      const nt = [
        ["Type", ye(B.publicationType || "other")],
        ["Format", B.extension ? yl(B.extension) : ""],
        ["Shelf", B.shelf ? ye(B.shelf) : ""]
      ].filter(([, Xe]) => Xe !== "");
      for (const [Xe, Kt] of nt) {
        const kt = document.createElement("div");
        kt.className = "library-cover-detail-chip";
        const gt = document.createElement("dt");
        gt.textContent = Xe;
        const an = document.createElement("dd");
        an.textContent = Kt, kt.append(gt, an), _e.appendChild(kt);
      }
      w.appendChild(_e);
      const je = document.createElement("p"), Ut = document.createElement("a");
      Ut.href = ye(B.openUrl || "#"), Ut.textContent = b("library", "Read");
      const oe = document.createElement("a");
      oe.href = ye(B.filesUrl || "#"), oe.textContent = b("library", "Show in Files");
      const Wt = document.createElement("a");
      Wt.href = ye(B.downloadUrl || "#"), Wt.textContent = b("library", "Download source");
      const ut = document.createElement("a");
      ut.href = ye(B.detailsUrl || "#"), ut.textContent = b("library", "Details"), je.append(Ut, document.createTextNode(" · "), oe, document.createTextNode(" · "), Wt, document.createTextNode(" · "), ut), w.appendChild(je), ae.append(he, $e, w), K.appendChild(ae);
    }
    l.appendChild(K);
  }
  return o.appendChild(l), o;
}
if (gr)
  try {
    nu(Kd, { state: so }).mount(gr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), gr.replaceChildren(Jd(so));
  }
//# sourceMappingURL=library-main.mjs.map
