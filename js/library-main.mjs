// @__NO_SIDE_EFFECTS__
function ws(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const me = {}, yn = [], At = () => {
}, oo = () => !1, Cr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), wr = (e) => e.startsWith("onUpdate:"), ze = Object.assign, Os = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ll = Object.prototype.hasOwnProperty, ue = (e, t) => Ll.call(e, t), Y = Array.isArray, zt = (e) => Xn(e) === "[object Map]", on = (e) => Xn(e) === "[object Set]", ai = (e) => Xn(e) === "[object Date]", ne = (e) => typeof e == "function", we = (e) => typeof e == "string", xt = (e) => typeof e == "symbol", he = (e) => e !== null && typeof e == "object", lo = (e) => (he(e) || ne(e)) && ne(e.then) && ne(e.catch), ao = Object.prototype.toString, Xn = (e) => ao.call(e), Fl = (e) => Xn(e).slice(8, -1), co = (e) => Xn(e) === "[object Object]", Rs = (e) => we(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Un = /* @__PURE__ */ ws(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Or = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Ul = /-\w/g, pt = Or(
  (e) => e.replace(Ul, (t) => t.slice(1).toUpperCase())
), kl = /\B([A-Z])/g, ln = Or(
  (e) => e.replace(kl, "-$1").toLowerCase()
), uo = Or((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gr = Or(
  (e) => e ? `on${uo(e)}` : ""
), Pt = (e, t) => !Object.is(e, t), pr = (e, ...t) => {
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
let ci;
const Pr = () => ci || (ci = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ps(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = we(r) ? Vl(r) : Ps(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (we(e) || he(e))
    return e;
}
const Hl = /;(?![^(]*\))/g, jl = /:([^]+)/, $l = /\/\*[^]*?\*\//g;
function Vl(e) {
  const t = {};
  return e.replace($l, "").split(Hl).forEach((n) => {
    if (n) {
      const r = n.split(jl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function zn(e) {
  let t = "";
  if (we(e))
    t = e;
  else if (Y(e))
    for (let n = 0; n < e.length; n++) {
      const r = zn(e[n]);
      r && (t += r + " ");
    }
  else if (he(e))
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
    n = Bt(e[r], t[r]);
  return n;
}
function ui(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const s of e) {
    let i = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && Bt(s, n[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    r[i] = 1;
  }
  return !0;
}
function Bt(e, t) {
  if (e === t) return !0;
  let n = ai(e), r = ai(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = xt(e), r = xt(t), n || r)
    return e === t;
  if (n = Y(e), r = Y(t), n || r)
    return n && r ? Wl(e, t) : !1;
  if (n = he(e), r = he(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = zt(e), r = zt(t), n || r || (n = on(e), r = on(t), n || r))
      return n && r ? ui(e, t) : !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Bt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ql(e, t) {
  return e.findIndex((n) => Bt(n, t));
}
const ho = (e) => !!(e && e.__v_isRef === !0), _ = (e) => we(e) ? e : e == null ? "" : Y(e) || he(e) && (e.toString === ao || !ne(e.toString)) ? ho(e) ? _(e.value) : JSON.stringify(e, mo, 2) : String(e), mo = (e, t) => ho(t) ? mo(e, t.value) : zt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Yr(r, i) + " =>"] = s, n),
    {}
  )
} : on(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yr(n))
} : xt(t) ? Yr(t) : he(t) && !Y(t) && !co(t) ? String(t) : t, Yr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    xt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let ke;
class Kl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ke && (ke.active ? (this.parent = ke, this.index = (ke.scopes || (ke.scopes = [])).push(
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
      const n = ke;
      try {
        return ke = this, t();
      } finally {
        ke = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ke, ke = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ke === this)
        ke = this.prevScope;
      else {
        let t = ke;
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
function Gl() {
  return ke;
}
let _e;
const Xr = /* @__PURE__ */ new WeakSet();
class bo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ke && (ke.active ? ke.effects.push(this) : this.flags &= -2);
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
    this.flags |= 2, fi(this), _o(this);
    const t = _e, n = ht;
    _e = this, ht = !0;
    try {
      return this.fn();
    } finally {
      vo(this), _e = t, ht = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ds(t);
      this.deps = this.depsTail = void 0, fi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Xr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ms(this) && this.run();
  }
  get dirty() {
    return ms(this);
  }
}
let go = 0, kn, Hn;
function yo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Hn, Hn = e;
    return;
  }
  e.next = kn, kn = e;
}
function Ns() {
  go++;
}
function Is() {
  if (--go > 0)
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
function vo(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Ds(r), Yl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function ms(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (To(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function To(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Bn) || (e.globalVersion = Bn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ms(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = _e, r = ht;
  _e = e, ht = !0;
  try {
    _o(e);
    const s = e.fn(e._value);
    (t.version === 0 || Pt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    _e = n, ht = r, vo(e), e.flags &= -3;
  }
}
function Ds(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Ds(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Yl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ht = !0;
const So = [];
function Mt() {
  So.push(ht), ht = !1;
}
function Lt() {
  const e = So.pop();
  ht = e === void 0 ? !0 : e;
}
function fi(e) {
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
    if (!_e || !ht || _e === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== _e)
      n = this.activeLink = new Xl(_e, this), _e.deps ? (n.prevDep = _e.depsTail, _e.depsTail.nextDep = n, _e.depsTail = n) : _e.deps = _e.depsTail = n, Ao(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = _e.depsTail, n.nextDep = void 0, _e.depsTail.nextDep = n, _e.depsTail = n, _e.deps === n && (_e.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Bn++, this.notify(t);
  }
  notify(t) {
    Ns();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Is();
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
const bs = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ Symbol(
  ""
), gs = /* @__PURE__ */ Symbol(
  ""
), Wn = /* @__PURE__ */ Symbol(
  ""
);
function Ve(e, t, n) {
  if (ht && _e) {
    let r = bs.get(e);
    r || bs.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Eo()), s.map = r, s.key = n), s.track();
  }
}
function Nt(e, t, n, r, s, i) {
  const o = bs.get(e);
  if (!o) {
    Bn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Ns(), t === "clear")
    o.forEach(l);
  else {
    const c = Y(e), b = c && Rs(n);
    if (c && n === "length") {
      const d = Number(r);
      o.forEach((T, O) => {
        (O === "length" || O === Wn || !xt(O) && O >= d) && l(T);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), b && l(o.get(Wn)), t) {
        case "add":
          c ? b && l(o.get("length")) : (l(o.get(nn)), zt(e) && l(o.get(gs)));
          break;
        case "delete":
          c || (l(o.get(nn)), zt(e) && l(o.get(gs)));
          break;
        case "set":
          zt(e) && l(o.get(nn));
          break;
      }
  }
  Is();
}
function hn(e) {
  const t = /* @__PURE__ */ pe(e);
  return t === e ? t : (Ve(t, "iterate", Wn), /* @__PURE__ */ mt(e) ? t : t.map(Ft));
}
function Nr(e) {
  return Ve(e = /* @__PURE__ */ pe(e), "iterate", Wn), e;
}
function St(e, t) {
  return /* @__PURE__ */ Wt(e) ? En(/* @__PURE__ */ rn(e) ? Ft(t) : t) : Ft(t);
}
const Jl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Jr(this, Symbol.iterator, (e) => St(this, e));
  },
  concat(...e) {
    return hn(this).concat(
      ...e.map((t) => Y(t) ? hn(t) : t)
    );
  },
  entries() {
    return Jr(this, "entries", (e) => (e[1] = St(this, e[1]), e));
  },
  every(e, t) {
    return wt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return wt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => St(this, r)),
      arguments
    );
  },
  find(e, t) {
    return wt(
      this,
      "find",
      e,
      t,
      (n) => St(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return wt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return wt(
      this,
      "findLast",
      e,
      t,
      (n) => St(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return wt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return wt(this, "forEach", e, t, void 0, arguments);
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
    return wt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Rn(this, "pop");
  },
  push(...e) {
    return Rn(this, "push", e);
  },
  reduce(e, ...t) {
    return di(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return di(this, "reduceRight", e, t);
  },
  shift() {
    return Rn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return wt(this, "some", e, t, void 0, arguments);
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
    return Jr(this, "values", (e) => St(this, e));
  }
};
function Jr(e, t, n) {
  const r = Nr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ mt(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Zl = Array.prototype;
function wt(e, t, n, r, s, i) {
  const o = Nr(e), l = o !== e && !/* @__PURE__ */ mt(e), c = o[t];
  if (c !== Zl[t]) {
    const T = c.apply(e, i);
    return l ? Ft(T) : T;
  }
  let b = n;
  o !== e && (l ? b = function(T, O) {
    return n.call(this, St(e, T), O, e);
  } : n.length > 2 && (b = function(T, O) {
    return n.call(this, T, O, e);
  }));
  const d = c.call(o, b, r);
  return l && s ? s(d) : d;
}
function di(e, t, n, r) {
  const s = Nr(e), i = s !== e && !/* @__PURE__ */ mt(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(b, d, T) {
    return l && (l = !1, b = St(e, b)), n.call(this, b, St(e, d), T, e);
  }) : n.length > 3 && (o = function(b, d, T) {
    return n.call(this, b, d, T, e);
  }));
  const c = s[t](o, ...r);
  return l ? St(e, c) : c;
}
function Zr(e, t, n) {
  const r = /* @__PURE__ */ pe(e);
  Ve(r, "iterate", Wn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Fs(n[0]) ? (n[0] = /* @__PURE__ */ pe(n[0]), r[t](...n)) : s;
}
function Rn(e, t, n = []) {
  Mt(), Ns();
  const r = (/* @__PURE__ */ pe(e))[t].apply(e, n);
  return Is(), Lt(), r;
}
const Ql = /* @__PURE__ */ ws("__proto__,__v_isRef,__isVue"), xo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(xt)
);
function ea(e) {
  xt(e) || (e = String(e));
  const t = /* @__PURE__ */ pe(this);
  return Ve(t, "has", e), t.hasOwnProperty(e);
}
class Co {
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
      /* @__PURE__ */ Je(t) ? t : r
    );
    if ((xt(n) ? xo.has(n) : Ql(n)) || (s || Ve(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ Je(l)) {
      const c = o && Rs(n) ? l : l.value;
      return s && he(c) ? /* @__PURE__ */ _s(c) : c;
    }
    return he(l) ? s ? /* @__PURE__ */ _s(l) : /* @__PURE__ */ _n(l) : l;
  }
}
class wo extends Co {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = Y(t) && Rs(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ Wt(i);
      if (!/* @__PURE__ */ mt(r) && !/* @__PURE__ */ Wt(r) && (i = /* @__PURE__ */ pe(i), r = /* @__PURE__ */ pe(r)), !o && /* @__PURE__ */ Je(i) && !/* @__PURE__ */ Je(r))
        return b || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : ue(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Je(t) ? t : s
    );
    return t === /* @__PURE__ */ pe(s) && c && (l ? Pt(r, i) && Nt(t, "set", n, r) : Nt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = ue(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Nt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!xt(n) || !xo.has(n)) && Ve(t, "has", n), r;
  }
  ownKeys(t) {
    return Ve(
      t,
      "iterate",
      Y(t) ? "length" : nn
    ), Reflect.ownKeys(t);
  }
}
class ta extends Co {
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
const na = /* @__PURE__ */ new wo(), ra = /* @__PURE__ */ new ta(), sa = /* @__PURE__ */ new wo(!0);
const ys = (e) => e, lr = (e) => Reflect.getPrototypeOf(e);
function ia(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ pe(s), o = zt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, b = s[e](...r), d = n ? ys : t ? En : Ft;
    return !t && Ve(
      i,
      "iterate",
      c ? gs : nn
    ), ze(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: T, done: O } = b.next();
          return O ? { value: T, done: O } : {
            value: l ? [d(T[0]), d(T[1])] : d(T),
            done: O
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
      const i = this.__v_raw, o = /* @__PURE__ */ pe(i), l = /* @__PURE__ */ pe(s);
      e || (Pt(s, l) && Ve(o, "get", s), Ve(o, "get", l));
      const { has: c } = lr(o), b = t ? ys : e ? En : Ft;
      if (c.call(o, s))
        return b(i.get(s));
      if (c.call(o, l))
        return b(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Ve(/* @__PURE__ */ pe(s), "iterate", nn), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ pe(i), l = /* @__PURE__ */ pe(s);
      return e || (Pt(s, l) && Ve(o, "has", s), Ve(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ pe(l), b = t ? ys : e ? En : Ft;
      return !e && Ve(c, "iterate", nn), l.forEach((d, T) => s.call(i, b(d), b(T), o));
    }
  };
  return ze(
    n,
    e ? {
      add: ar("add"),
      set: ar("set"),
      delete: ar("delete"),
      clear: ar("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ pe(this), o = lr(i), l = /* @__PURE__ */ pe(s), c = !t && !/* @__PURE__ */ mt(s) && !/* @__PURE__ */ Wt(s) ? l : s;
        return o.has.call(i, c) || Pt(s, c) && o.has.call(i, s) || Pt(l, c) && o.has.call(i, l) || (i.add(c), Nt(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ mt(i) && !/* @__PURE__ */ Wt(i) && (i = /* @__PURE__ */ pe(i));
        const o = /* @__PURE__ */ pe(this), { has: l, get: c } = lr(o);
        let b = l.call(o, s);
        b || (s = /* @__PURE__ */ pe(s), b = l.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), b ? Pt(i, d) && Nt(o, "set", s, i) : Nt(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ pe(this), { has: o, get: l } = lr(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ pe(s), c = o.call(i, s)), l && l.call(i, s);
        const b = i.delete(s);
        return c && Nt(i, "delete", s, void 0), b;
      },
      clear() {
        const s = /* @__PURE__ */ pe(this), i = s.size !== 0, o = s.clear();
        return i && Nt(
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
function Ms(e, t) {
  const n = oa(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    ue(n, s) && s in r ? n : r,
    s,
    i
  );
}
const la = {
  get: /* @__PURE__ */ Ms(!1, !1)
}, aa = {
  get: /* @__PURE__ */ Ms(!1, !0)
}, ca = {
  get: /* @__PURE__ */ Ms(!0, !1)
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
  return /* @__PURE__ */ Wt(e) ? e : Ls(
    e,
    !1,
    na,
    la,
    Oo
  );
}
// @__NO_SIDE_EFFECTS__
function da(e) {
  return Ls(
    e,
    !1,
    sa,
    aa,
    Ro
  );
}
// @__NO_SIDE_EFFECTS__
function _s(e) {
  return Ls(
    e,
    !0,
    ra,
    ca,
    Po
  );
}
function Ls(e, t, n, r, s) {
  if (!he(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
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
  return /* @__PURE__ */ Wt(e) ? /* @__PURE__ */ rn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Fs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ pe(t) : e;
}
function pa(e) {
  return !ue(e, "__v_skip") && Object.isExtensible(e) && fo(e, "__v_skip", !0), e;
}
const Ft = (e) => he(e) ? /* @__PURE__ */ _n(e) : e, En = (e) => he(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function E(e) {
  return /* @__PURE__ */ Je(e) ? e.value : e;
}
const ha = {
  get: (e, t, n) => t === "__v_raw" ? e : E(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ Je(s) && !/* @__PURE__ */ Je(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
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
    _e !== this)
      return yo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return To(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ba(e, t, n = !1) {
  let r, s;
  return ne(e) ? r = e : (r = e.get, s = e.set), new ma(r, s, n);
}
const cr = {}, gr = /* @__PURE__ */ new WeakMap();
let Zt;
function ga(e, t = !1, n = Zt) {
  if (n) {
    let r = gr.get(n);
    r || gr.set(n, r = []), r.push(e);
  }
}
function ya(e, t, n = me) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, b = (L) => s ? L : /* @__PURE__ */ mt(L) || s === !1 || s === 0 ? It(L, 1) : It(L);
  let d, T, O, U, X = !1, k = !1;
  if (/* @__PURE__ */ Je(e) ? (T = () => e.value, X = /* @__PURE__ */ mt(e)) : /* @__PURE__ */ rn(e) ? (T = () => b(e), X = !0) : Y(e) ? (k = !0, X = e.some((L) => /* @__PURE__ */ rn(L) || /* @__PURE__ */ mt(L)), T = () => e.map((L) => {
    if (/* @__PURE__ */ Je(L))
      return L.value;
    if (/* @__PURE__ */ rn(L))
      return b(L);
    if (ne(L))
      return c ? c(L, 2) : L();
  })) : ne(e) ? t ? T = c ? () => c(e, 2) : e : T = () => {
    if (O) {
      Mt();
      try {
        O();
      } finally {
        Lt();
      }
    }
    const L = Zt;
    Zt = d;
    try {
      return c ? c(e, 3, [U]) : e(U);
    } finally {
      Zt = L;
    }
  } : T = At, t && s) {
    const L = T, le = s === !0 ? 1 / 0 : s;
    T = () => It(L(), le);
  }
  const z = Gl(), D = () => {
    d.stop(), z && z.active && Os(z.effects, d);
  };
  if (i && t) {
    const L = t;
    t = (...le) => {
      const Oe = L(...le);
      return D(), Oe;
    };
  }
  let J = k ? new Array(e.length).fill(cr) : cr;
  const G = (L) => {
    if (!(!(d.flags & 1) || !d.dirty && !L))
      if (t) {
        const le = d.run();
        if (L || s || X || (k ? le.some((Oe, xe) => Pt(Oe, J[xe])) : Pt(le, J))) {
          O && O();
          const Oe = Zt;
          Zt = d;
          try {
            const xe = [
              le,
              // pass undefined as the old value when it's changed for the first time
              J === cr ? void 0 : k && J[0] === cr ? [] : J,
              U
            ];
            J = le, c ? c(t, 3, xe) : (
              // @ts-expect-error
              t(...xe)
            );
          } finally {
            Zt = Oe;
          }
        }
      } else
        d.run();
  };
  return l && l(G), d = new bo(T), d.scheduler = o ? () => o(G, !1) : G, U = (L) => ga(L, !1, d), O = d.onStop = () => {
    const L = gr.get(d);
    if (L) {
      if (c)
        c(L, 4);
      else
        for (const le of L) le();
      gr.delete(d);
    }
  }, t ? r ? G(!0) : J = d.run() : o ? o(G.bind(null, !0), !0) : d.run(), D.pause = d.pause.bind(d), D.resume = d.resume.bind(d), D.stop = D, D;
}
function It(e, t = 1 / 0, n) {
  if (t <= 0 || !he(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Je(e))
    It(e.value, t, n);
  else if (Y(e))
    for (let r = 0; r < e.length; r++)
      It(e[r], t, n);
  else if (on(e) || zt(e))
    e.forEach((r) => {
      It(r, t, n);
    });
  else if (co(e)) {
    for (const r in e)
      It(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && It(e[r], t, n);
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
function bt(e, t, n, r) {
  if (ne(e)) {
    const s = Jn(e, t, n, r);
    return s && lo(s) && s.catch((i) => {
      Ir(i, t, n);
    }), s;
  }
  if (Y(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(bt(e[i], t, n, r));
    return s;
  }
}
function Ir(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || me;
  if (t) {
    let l = t.parent;
    const c = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let T = 0; T < d.length; T++)
          if (d[T](e, c, b) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Mt(), Jn(i, null, 10, [
        e,
        c,
        b
      ]), Lt();
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
const Ye = [];
let Tt = -1;
const vn = [];
let Vt = null, bn = 0;
const Io = /* @__PURE__ */ Promise.resolve();
let yr = null;
function Do(e) {
  const t = yr || Io;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function va(e) {
  let t = Tt + 1, n = Ye.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = Ye[r], i = qn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Us(e) {
  if (!(e.flags & 1)) {
    const t = qn(e), n = Ye[Ye.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= qn(n) ? Ye.push(e) : Ye.splice(va(t), 0, e), e.flags |= 1, Mo();
  }
}
function Mo() {
  yr || (yr = Io.then(Fo));
}
function Ta(e) {
  if (!Y(e))
    Vt && e.id === -1 ? Vt.splice(bn + 1, 0, e) : e.flags & 1 || (vn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      vn.push(e[t]);
  Mo();
}
function pi(e, t, n = Tt + 1) {
  for (; n < Ye.length; n++) {
    const r = Ye[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Ye.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Lo(e) {
  if (vn.length) {
    const t = [...new Set(vn)].sort(
      (n, r) => qn(n) - qn(r)
    );
    if (vn.length = 0, Vt) {
      for (let n = 0; n < t.length; n++)
        Vt.push(t[n]);
      return;
    }
    for (Vt = t, bn = 0; bn < Vt.length; bn++) {
      const n = Vt[bn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Vt = null, bn = 0;
  }
}
const qn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Fo(e) {
  try {
    for (Tt = 0; Tt < Ye.length; Tt++) {
      const t = Ye[Tt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Jn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Tt < Ye.length; Tt++) {
      const t = Ye[Tt];
      t && (t.flags &= -2);
    }
    Tt = -1, Ye.length = 0, Lo(), yr = null, (Ye.length || vn.length) && Fo();
  }
}
let ut = null, Uo = null;
function _r(e) {
  const t = ut;
  return ut = e, Uo = e && e.type.__scopeId || null, t;
}
function Sa(e, t = ut, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Ai(-1);
    const i = _r(t), o = sn.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = sn.length; c > o; c--) ll();
      _r(i), r._d && Ai(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Le(e, t) {
  if (ut === null)
    return e;
  const n = Ur(ut), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = me] = t[s];
    i && (ne(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && It(o), r.push({
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
    c && (Mt(), bt(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Lt());
  }
}
function Ea(e, t) {
  if (Xe) {
    let n = Xe.provides;
    const r = Xe.parent && Xe.parent.provides;
    r === n && (n = Xe.provides = Object.create(r)), n[e] = t;
  }
}
function hr(e, t, n = !1) {
  const r = Tc();
  if (r || Tn) {
    let s = Tn ? Tn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && ne(t) ? t.call(r && r.proxy) : t;
  }
}
const Aa = /* @__PURE__ */ Symbol.for("v-scx"), xa = () => hr(Aa);
function Qr(e, t, n) {
  return ko(e, t, n);
}
function ko(e, t, n = me) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = ze({}, n), c = t && r || !t && i !== "post";
  let b;
  if (Yn) {
    if (i === "sync") {
      const U = xa();
      b = U.__watcherHandles || (U.__watcherHandles = []);
    } else if (!c) {
      const U = () => {
      };
      return U.stop = At, U.resume = At, U.pause = At, U;
    }
  }
  const d = Xe;
  l.call = (U, X, k) => bt(U, d, X, k);
  let T = !1;
  i === "post" ? l.scheduler = (U) => {
    rt(U, d && d.suspense);
  } : i !== "sync" && (T = !0, l.scheduler = (U, X) => {
    X ? U() : Us(U);
  }), l.augmentJob = (U) => {
    t && (U.flags |= 4), T && (U.flags |= 2, d && (U.id = d.uid, U.i = d));
  };
  const O = ya(e, t, l);
  return Yn && (b ? b.push(O) : c && O()), O;
}
function Ca(e, t, n) {
  const r = this.proxy, s = we(e) ? e.includes(".") ? Ho(r, e) : () => r[e] : e.bind(r, r);
  let i;
  ne(t) ? i = t : (i = t.handler, n = t);
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
const wa = /* @__PURE__ */ Symbol("_vte"), Dr = (e) => e.__isTeleport, es = /* @__PURE__ */ Symbol("_leaveCb");
function Oa(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ut) {
        t = n;
        break;
      }
  }
  return t;
}
function jo(e) {
  if (!Hs(e))
    return Dr(e.type) && e.children ? Oa(e.children) : e;
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
function ks(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    ks(
      Dr(n.type) && jo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function $o(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function hi(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const vr = /* @__PURE__ */ new WeakMap();
function jn(e, t, n, r, s = !1) {
  if (Y(e)) {
    e.forEach(
      (k, z) => jn(
        k,
        t && (Y(t) ? t[z] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if ($n(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && jn(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Ur(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, b = t && t.r, d = l.refs === me ? l.refs = {} : l.refs, T = l.setupState, O = /* @__PURE__ */ pe(T), U = T === me ? oo : (k) => hi(d, k) ? !1 : ue(O, k), X = (k, z) => !(z && hi(d, z));
  if (b != null && b !== c) {
    if (mi(t), we(b))
      d[b] = null, U(b) && (T[b] = null);
    else if (/* @__PURE__ */ Je(b)) {
      const k = t;
      X(b, k.k) && (b.value = null), k.k && (d[k.k] = null);
    }
  }
  if (ne(c))
    Jn(c, l, 12, [o, d]);
  else {
    const k = we(c), z = /* @__PURE__ */ Je(c);
    if (k || z) {
      const D = () => {
        if (e.f) {
          const J = k ? U(c) ? T[c] : d[c] : X() || !e.k ? c.value : d[e.k];
          if (s)
            Y(J) && Os(J, i);
          else if (Y(J))
            J.includes(i) || J.push(i);
          else if (k)
            d[c] = [i], U(c) && (T[c] = d[c]);
          else {
            const G = [i];
            X(c, e.k) && (c.value = G), e.k && (d[e.k] = G);
          }
        } else k ? (d[c] = o, U(c) && (T[c] = o)) : z && (X(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const J = () => {
          D(), vr.delete(e);
        };
        J.id = -1, vr.set(e, J), rt(J, n);
      } else
        mi(e), D();
    }
  }
}
function mi(e) {
  const t = vr.get(e);
  t && (t.flags |= 8, vr.delete(e));
}
Pr().requestIdleCallback;
Pr().cancelIdleCallback;
const $n = (e) => !!e.type.__asyncLoader, Hs = (e) => e.type.__isKeepAlive;
function Ra(e, t) {
  Vo(e, "a", t);
}
function Pa(e, t) {
  Vo(e, "da", t);
}
function Vo(e, t, n = Xe) {
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
      Hs(s.parent.vnode) && Na(r, t, n, s), s = s.parent;
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
    Os(r[t], s);
  }, n);
}
function Mr(e, t, n = Xe, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Mt();
      const l = Zn(n), c = bt(t, n, e, o);
      return l(), Lt(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const kt = (e) => (t, n = Xe) => {
  (!Yn || e === "sp") && Mr(e, (...r) => t(...r), n);
}, Ia = kt("bm"), Da = kt("m"), Ma = kt(
  "bu"
), La = kt("u"), Fa = kt(
  "bum"
), zo = kt("um"), Ua = kt(
  "sp"
), ka = kt("rtg"), Ha = kt("rtc");
function ja(e, t = Xe) {
  Mr("ec", e, t);
}
const $a = /* @__PURE__ */ Symbol.for("v-ndc");
function Ue(e, t, n, r) {
  let s;
  const i = n, o = Y(e);
  if (o || we(e)) {
    const l = o && /* @__PURE__ */ rn(e);
    let c = !1, b = !1;
    l && (c = !/* @__PURE__ */ mt(e), b = /* @__PURE__ */ Wt(e), e = Nr(e)), s = new Array(e.length);
    for (let d = 0, T = e.length; d < T; d++)
      s[d] = t(
        c ? b ? En(Ft(e[d])) : Ft(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (he(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let c = 0, b = l.length; c < b; c++) {
        const d = l[c];
        s[c] = t(e[d], d, c, i);
      }
    }
  else
    s = [];
  return s;
}
const vs = (e) => e ? fl(e) ? Ur(e) : vs(e.parent) : null, Vn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ze(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => vs(e.parent),
    $root: (e) => vs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Wo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Us(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Do.bind(e.proxy)),
    $watch: (e) => Ca.bind(e)
  })
), ts = (e, t) => e !== me && !e.__isScriptSetup && ue(e, t), Va = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const O = o[t];
      if (O !== void 0)
        switch (O) {
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
        if (s !== me && ue(s, t))
          return o[t] = 2, s[t];
        if (ue(i, t))
          return o[t] = 3, i[t];
        if (n !== me && ue(n, t))
          return o[t] = 4, n[t];
        Ts && (o[t] = 0);
      }
    }
    const b = Vn[t];
    let d, T;
    if (b)
      return t === "$attrs" && Ve(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== me && ue(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      T = c.config.globalProperties, ue(T, t)
    )
      return T[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return ts(s, t) ? (s[t] = n, !0) : r !== me && ue(r, t) ? (r[t] = n, !0) : ue(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== me && l[0] !== "$" && ue(e, l) || ts(t, l) || ue(i, l) || ue(r, l) || ue(Vn, l) || ue(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ue(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function bi(e) {
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
    inject: b,
    // lifecycle
    created: d,
    beforeMount: T,
    mounted: O,
    beforeUpdate: U,
    updated: X,
    activated: k,
    deactivated: z,
    beforeDestroy: D,
    beforeUnmount: J,
    destroyed: G,
    unmounted: L,
    render: le,
    renderTracked: Oe,
    renderTriggered: xe,
    errorCaptured: q,
    serverPrefetch: B,
    // public API
    expose: de,
    inheritAttrs: be,
    // assets
    components: ve,
    directives: Ee,
    filters: Be
  } = t;
  if (b && Ba(b, r, null), o)
    for (const se in o) {
      const re = o[se];
      ne(re) && (r[se] = re.bind(n));
    }
  if (s) {
    const se = s.call(n, n);
    he(se) && (e.data = /* @__PURE__ */ _n(se));
  }
  if (Ts = !0, i)
    for (const se in i) {
      const re = i[se], je = ne(re) ? re.bind(n, n) : ne(re.get) ? re.get.bind(n, n) : At, Ze = !ne(re) && ne(re.set) ? re.set.bind(n) : At, Q = Pe({
        get: je,
        set: Ze
      });
      Object.defineProperty(r, se, {
        enumerable: !0,
        configurable: !0,
        get: () => Q.value,
        set: (R) => Q.value = R
      });
    }
  if (l)
    for (const se in l)
      Bo(l[se], r, n, se);
  if (c) {
    const se = ne(c) ? c.call(n) : c;
    Reflect.ownKeys(se).forEach((re) => {
      Ea(re, se[re]);
    });
  }
  d && gi(d, e, "c");
  function Te(se, re) {
    Y(re) ? re.forEach((je) => se(je.bind(n))) : re && se(re.bind(n));
  }
  if (Te(Ia, T), Te(Da, O), Te(Ma, U), Te(La, X), Te(Ra, k), Te(Pa, z), Te(ja, q), Te(Ha, Oe), Te(ka, xe), Te(Fa, J), Te(zo, L), Te(Ua, B), Y(de))
    if (de.length) {
      const se = e.exposed || (e.exposed = {});
      de.forEach((re) => {
        Object.defineProperty(se, re, {
          get: () => n[re],
          set: (je) => n[re] = je,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  le && e.render === At && (e.render = le), be != null && (e.inheritAttrs = be), ve && (e.components = ve), Ee && (e.directives = Ee), B && $o(e);
}
function Ba(e, t, n = At) {
  Y(e) && (e = Ss(e));
  for (const r in e) {
    const s = e[r];
    let i;
    he(s) ? "default" in s ? i = hr(
      s.from || r,
      s.default,
      !0
    ) : i = hr(s.from || r) : i = hr(s), /* @__PURE__ */ Je(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function gi(e, t, n) {
  bt(
    Y(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Bo(e, t, n, r) {
  let s = r.includes(".") ? Ho(n, r) : () => n[r];
  if (we(e)) {
    const i = t[e];
    ne(i) && Qr(s, i);
  } else if (ne(e))
    Qr(s, e.bind(n));
  else if (he(e))
    if (Y(e))
      e.forEach((i) => Bo(i, t, n, r));
    else {
      const i = ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      ne(i) && Qr(s, i, e);
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
    (b) => Tr(c, b, o, !0)
  ), Tr(c, t, o)), he(t) && i.set(t, c), c;
}
function Tr(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && Tr(e, i, n, !0), s && s.forEach(
    (o) => Tr(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = Wa[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Wa = {
  data: yi,
  props: _i,
  emits: _i,
  // objects
  methods: Mn,
  computed: Mn,
  // lifecycle
  beforeCreate: Ge,
  created: Ge,
  beforeMount: Ge,
  mounted: Ge,
  beforeUpdate: Ge,
  updated: Ge,
  beforeDestroy: Ge,
  beforeUnmount: Ge,
  destroyed: Ge,
  unmounted: Ge,
  activated: Ge,
  deactivated: Ge,
  errorCaptured: Ge,
  serverPrefetch: Ge,
  // assets
  components: Mn,
  directives: Mn,
  // watch
  watch: Ka,
  // provide / inject
  provide: yi,
  inject: qa
};
function yi(e, t) {
  return t ? e ? function() {
    return ze(
      ne(e) ? e.call(this, this) : e,
      ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function qa(e, t) {
  return Mn(Ss(e), Ss(t));
}
function Ss(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ge(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Mn(e, t) {
  return e ? ze(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _i(e, t) {
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ze(
    /* @__PURE__ */ Object.create(null),
    bi(e),
    bi(t ?? {})
  ) : t;
}
function Ka(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ze(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ge(e[r], t[r]);
  return n;
}
function qo() {
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
let Ga = 0;
function Ya(e, t) {
  return function(r, s = null) {
    ne(r) || (r = ze({}, r)), s != null && !he(s) && (s = null);
    const i = qo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const b = i.app = {
      _uid: Ga++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: wc,
      get config() {
        return i.config;
      },
      set config(d) {
      },
      use(d, ...T) {
        return o.has(d) || (d && ne(d.install) ? (o.add(d), d.install(b, ...T)) : ne(d) && (o.add(d), d(b, ...T))), b;
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), b;
      },
      component(d, T) {
        return T ? (i.components[d] = T, b) : i.components[d];
      },
      directive(d, T) {
        return T ? (i.directives[d] = T, b) : i.directives[d];
      },
      mount(d, T, O) {
        if (!c) {
          const U = b._ceVNode || Dt(r, s);
          return U.appContext = i, O === !0 ? O = "svg" : O === !1 && (O = void 0), e(U, d, O), c = !0, b._container = d, d.__vue_app__ = b, Ur(U.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c && (bt(
          l,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(d, T) {
        return i.provides[d] = T, b;
      },
      runWithContext(d) {
        const T = Tn;
        Tn = b;
        try {
          return d();
        } finally {
          Tn = T;
        }
      }
    };
    return b;
  };
}
let Tn = null;
const Xa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${pt(t)}Modifiers`] || e[`${ln(t)}Modifiers`];
function Ja(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || me;
  let s = n;
  const i = t.startsWith("update:"), o = i && Xa(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => we(d) ? d.trim() : d)), o.number && (s = s.map(Rr)));
  let l, c = r[l = Gr(t)] || // also try camelCase event handler (#2249)
  r[l = Gr(pt(t))];
  !c && i && (c = r[l = Gr(ln(t))]), c && bt(
    c,
    e,
    6,
    s
  );
  const b = r[l + "Once"];
  if (b) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, bt(
      b,
      e,
      6,
      s
    );
  }
}
const Za = /* @__PURE__ */ new WeakMap();
function Ko(e, t, n = !1) {
  const r = n ? Za : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {}, l = !1;
  if (!ne(e)) {
    const c = (b) => {
      const d = Ko(b, t, !0);
      d && (l = !0, ze(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (he(e) && r.set(e, null), null) : (Y(i) ? i.forEach((c) => o[c] = null) : ze(o, i), he(e) && r.set(e, o), o);
}
function Lr(e, t) {
  return !e || !Cr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ue(e, t[0].toLowerCase() + t.slice(1)) || ue(e, ln(t)) || ue(e, t));
}
function vi(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: c,
    render: b,
    renderCache: d,
    props: T,
    data: O,
    setupState: U,
    ctx: X,
    inheritAttrs: k
  } = e, z = _r(e);
  let D, J;
  try {
    if (n.shapeFlag & 4) {
      const L = s || r, le = L;
      D = Et(
        b.call(
          le,
          L,
          d,
          T,
          U,
          O,
          X
        )
      ), J = l;
    } else {
      const L = t;
      D = Et(
        L.length > 1 ? L(
          T,
          { attrs: l, slots: o, emit: c }
        ) : L(
          T,
          null
        )
      ), J = t.props ? l : Qa(l);
    }
  } catch (L) {
    sn.length = 0, Ir(L, e, 1), D = Dt(Ut);
  }
  let G = D;
  if (J && k !== !1) {
    const L = Object.keys(J), { shapeFlag: le } = G;
    L.length && le & 7 && (i && L.some(wr) && (J = ec(
      J,
      i
    )), G = An(G, J, !1, !0));
  }
  if (n.dirs && (G = An(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const L = Dr(G.type) && jo(G) || G;
    ks(L, n.transition);
  }
  return D = G, _r(z), D;
}
const Qa = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Cr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ec = (e, t) => {
  const n = {};
  for (const r in e)
    (!wr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function tc(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: c } = t, b = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? Ti(r, o, b) : !!o;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let T = 0; T < d.length; T++) {
        const O = d[T];
        if (Go(o, r, O) && !Lr(b, O))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Ti(r, o, b) : !0 : !!o;
  return !1;
}
function Ti(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (Go(t, e, i) && !Lr(n, i))
      return !0;
  }
  return !1;
}
function Go(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && he(r) && he(s) ? !Bt(r, s) : r !== s;
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
  } = e, l = /* @__PURE__ */ pe(s), [c] = e.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let T = 0; T < d.length; T++) {
        let O = d[T];
        if (Lr(e.emitsOptions, O))
          continue;
        const U = t[O];
        if (c)
          if (ue(i, O))
            U !== i[O] && (i[O] = U, b = !0);
          else {
            const X = pt(O);
            s[X] = Es(
              c,
              l,
              X,
              U,
              e,
              !1
            );
          }
        else
          U !== i[O] && (i[O] = U, b = !0);
      }
    }
  } else {
    Zo(e, t, s, i) && (b = !0);
    let d;
    for (const T in l)
      (!t || // for camelCase
      !ue(t, T) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = ln(T)) === T || !ue(t, d))) && (c ? n && // for camelCase
      (n[T] !== void 0 || // for kebab-case
      n[d] !== void 0) && (s[T] = Es(
        c,
        l,
        T,
        void 0,
        e,
        !0
      )) : delete s[T]);
    if (i !== l)
      for (const T in i)
        (!t || !ue(t, T)) && (delete i[T], b = !0);
  }
  b && Nt(e.attrs, "set", "");
}
function Zo(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Un(c))
        continue;
      const b = t[c];
      let d;
      s && ue(s, d = pt(c)) ? !i || !i.includes(d) ? n[d] = b : (l || (l = {}))[d] = b : Lr(e.emitsOptions, c) || (!(c in r) || b !== r[c]) && (r[c] = b, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ pe(n), b = l || me;
    for (let d = 0; d < i.length; d++) {
      const T = i[d];
      n[T] = Es(
        s,
        c,
        T,
        b[T],
        e,
        !ue(b, T)
      );
    }
  }
  return o;
}
function Es(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = ue(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && ne(c)) {
        const { propsDefaults: b } = s;
        if (n in b)
          r = b[n];
        else {
          const d = Zn(s);
          r = b[n] = c.call(
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
  if (!ne(e)) {
    const d = (T) => {
      c = !0;
      const [O, U] = Qo(T, t, !0);
      ze(o, O), U && l.push(...U);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c)
    return he(e) && r.set(e, yn), yn;
  if (Y(i))
    for (let d = 0; d < i.length; d++) {
      const T = pt(i[d]);
      Si(T) && (o[T] = me);
    }
  else if (i)
    for (const d in i) {
      const T = pt(d);
      if (Si(T)) {
        const O = i[d], U = o[T] = Y(O) || ne(O) ? { type: O } : ze({}, O), X = U.type;
        let k = !1, z = !0;
        if (Y(X))
          for (let D = 0; D < X.length; ++D) {
            const J = X[D], G = ne(J) && J.name;
            if (G === "Boolean") {
              k = !0;
              break;
            } else G === "String" && (z = !1);
          }
        else
          k = ne(X) && X.name === "Boolean";
        U[
          0
          /* shouldCast */
        ] = k, U[
          1
          /* shouldCastTrue */
        ] = z, (k || ue(U, "default")) && l.push(T);
      }
    }
  const b = [o, l];
  return he(e) && r.set(e, b), b;
}
function Si(e) {
  return e[0] !== "$" && !Un(e);
}
const js = (e) => e === "_" || e === "_ctx" || e === "$stable", $s = (e) => Y(e) ? e.map(Et) : [Et(e)], oc = (e, t, n) => {
  if (t._n)
    return t;
  const r = Sa((...s) => $s(t(...s)), n);
  return r._c = !1, r;
}, el = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (js(s)) continue;
    const i = e[s];
    if (ne(i))
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
    (n || !js(r)) && (e[r] = t[r]);
}, lc = (e, t, n) => {
  const r = e.slots = Xo();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (nl(r, t, n), n && fo(r, "_", s, !0)) : el(t, r);
  } else t && tl(e, t);
}, ac = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = me;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : nl(s, t, n) : (i = !t.$stable, el(t, s)), o = t;
  } else t && (tl(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !js(l) && o[l] == null && delete s[l];
}, rt = pc;
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
    setText: b,
    setElementText: d,
    parentNode: T,
    nextSibling: O,
    setScopeId: U = At,
    insertStaticContent: X
  } = e, k = (u, f, g, C = null, v = null, A = null, P = void 0, N = null, I = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !Pn(u, f) && (C = Qe(u), R(u, v, A, !0), u = null), f.patchFlag === -2 && (I = !1, f.dynamicChildren = null);
    const { type: S, ref: W, shapeFlag: M } = f;
    switch (S) {
      case Fr:
        z(u, f, g, C);
        break;
      case Ut:
        D(u, f, g, C);
        break;
      case rs:
        u == null && J(f, g, C, P);
        break;
      case ye:
        ve(
          u,
          f,
          g,
          C,
          v,
          A,
          P,
          N,
          I
        );
        break;
      default:
        M & 1 ? le(
          u,
          f,
          g,
          C,
          v,
          A,
          P,
          N,
          I
        ) : M & 6 ? Ee(
          u,
          f,
          g,
          C,
          v,
          A,
          P,
          N,
          I
        ) : (M & 64 || M & 128) && S.process(
          u,
          f,
          g,
          C,
          v,
          A,
          P,
          N,
          I,
          gt
        );
    }
    W != null && v ? jn(W, u && u.ref, A, f || u, !f) : W == null && u && u.ref != null && jn(u.ref, null, A, u, !0);
  }, z = (u, f, g, C) => {
    if (u == null)
      r(
        f.el = l(f.children),
        g,
        C
      );
    else {
      const v = f.el = u.el;
      f.children !== u.children && b(v, f.children);
    }
  }, D = (u, f, g, C) => {
    u == null ? r(
      f.el = c(f.children || ""),
      g,
      C
    ) : f.el = u.el;
  }, J = (u, f, g, C) => {
    [u.el, u.anchor] = X(
      u.children,
      f,
      g,
      C,
      u.el,
      u.anchor
    );
  }, G = ({ el: u, anchor: f }, g, C) => {
    let v;
    for (; u && u !== f; )
      v = O(u), r(u, g, C), u = v;
    r(f, g, C);
  }, L = ({ el: u, anchor: f }) => {
    let g;
    for (; u && u !== f; )
      g = O(u), s(u), u = g;
    s(f);
  }, le = (u, f, g, C, v, A, P, N, I) => {
    if (f.type === "svg" ? P = "svg" : f.type === "math" && (P = "mathml"), u == null)
      Oe(
        f,
        g,
        C,
        v,
        A,
        P,
        N,
        I
      );
    else {
      const S = u.el && u.el._isVueCE ? u.el : null;
      try {
        S && S._beginPatch(), B(
          u,
          f,
          v,
          A,
          P,
          N,
          I
        );
      } finally {
        S && S._endPatch();
      }
    }
  }, Oe = (u, f, g, C, v, A, P, N) => {
    let I, S;
    const { props: W, shapeFlag: M, transition: V, dirs: K } = u;
    if (I = u.el = o(
      u.type,
      A,
      W && W.is,
      W
    ), M & 8 ? d(I, u.children) : M & 16 && q(
      u.children,
      I,
      null,
      C,
      v,
      ns(u, A),
      P,
      N
    ), K && Yt(u, null, C, "created"), xe(I, u, u.scopeId, P, C), W) {
      for (const oe in W)
        oe !== "value" && !Un(oe) && i(I, oe, null, W[oe], A, C);
      "value" in W && i(I, "value", null, W.value, A), (S = W.onVnodeBeforeMount) && vt(S, C, u);
    }
    K && Yt(u, null, C, "beforeMount");
    const te = fc(v, V);
    te && V.beforeEnter(I), r(I, f, g), ((S = W && W.onVnodeMounted) || te || K) && rt(() => {
      S && vt(S, C, u), te && V.enter(I), K && Yt(u, null, C, "mounted");
    }, v);
  }, xe = (u, f, g, C, v) => {
    if (g && U(u, g), C)
      for (let A = 0; A < C.length; A++)
        U(u, C[A]);
    if (v) {
      let A = v.subTree;
      if (f === A || ol(A.type) && (A.ssContent === f || A.ssFallback === f)) {
        const P = v.vnode;
        xe(
          u,
          P,
          P.scopeId,
          P.slotScopeIds,
          v.parent
        );
      }
    }
  }, q = (u, f, g, C, v, A, P, N, I = 0) => {
    for (let S = I; S < u.length; S++) {
      const W = u[S] = N ? Rt(u[S]) : Et(u[S]);
      k(
        null,
        W,
        f,
        g,
        C,
        v,
        A,
        P,
        N
      );
    }
  }, B = (u, f, g, C, v, A, P) => {
    const N = f.el = u.el;
    let { patchFlag: I, dynamicChildren: S, dirs: W } = f;
    I |= u.patchFlag & 16;
    const M = u.props || me, V = f.props || me;
    let K;
    if (g && Xt(g, !1), (K = V.onVnodeBeforeUpdate) && vt(K, g, f, u), W && Yt(f, u, g, "beforeUpdate"), g && Xt(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    S && (!u.dynamicChildren || u.dynamicChildren.length !== S.length) && (I = 0, P = !1, S = null), (M.innerHTML && V.innerHTML == null || M.textContent && V.textContent == null) && d(N, ""), S ? de(
      u.dynamicChildren,
      S,
      N,
      g,
      C,
      ns(f, v),
      A
    ) : P || re(
      u,
      f,
      N,
      null,
      g,
      C,
      ns(f, v),
      A,
      !1
    ), I > 0) {
      if (I & 16)
        be(N, M, V, g, v);
      else if (I & 2 && M.class !== V.class && i(N, "class", null, V.class, v), I & 4 && i(N, "style", M.style, V.style, v), I & 8) {
        const te = f.dynamicProps;
        for (let oe = 0; oe < te.length; oe++) {
          const ie = te[oe], Se = M[ie], Ce = V[ie];
          (Ce !== Se || ie === "value") && i(N, ie, Se, Ce, v, g);
        }
      }
      I & 1 && u.children !== f.children && d(N, f.children);
    } else !P && S == null && be(N, M, V, g, v);
    ((K = V.onVnodeUpdated) || W) && rt(() => {
      K && vt(K, g, f, u), W && Yt(f, u, g, "updated");
    }, C);
  }, de = (u, f, g, C, v, A, P) => {
    for (let N = 0; N < f.length; N++) {
      const I = u[N], S = f[N], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        I.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (I.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pn(I, S) || // - In the case of a component, it could contain anything.
        I.shapeFlag & 198) ? T(I.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      k(
        I,
        S,
        W,
        null,
        C,
        v,
        A,
        P,
        !0
      );
    }
  }, be = (u, f, g, C, v) => {
    if (f !== g) {
      if (f !== me)
        for (const A in f)
          !Un(A) && !(A in g) && i(
            u,
            A,
            f[A],
            null,
            v,
            C
          );
      for (const A in g) {
        if (Un(A)) continue;
        const P = g[A], N = f[A];
        P !== N && A !== "value" && i(u, A, N, P, v, C);
      }
      "value" in g && i(u, "value", f.value, g.value, v);
    }
  }, ve = (u, f, g, C, v, A, P, N, I) => {
    const S = f.el = u ? u.el : l(""), W = f.anchor = u ? u.anchor : l("");
    let { patchFlag: M, dynamicChildren: V, slotScopeIds: K } = f;
    K && (N = N ? N.concat(K) : K), u == null ? (r(S, g, C), r(W, g, C), q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      W,
      v,
      A,
      P,
      N,
      I
    )) : M > 0 && M & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === V.length ? (de(
      u.dynamicChildren,
      V,
      g,
      v,
      A,
      P,
      N
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || v && f === v.subTree) && rl(
      u,
      f,
      !0
      /* shallow */
    )) : re(
      u,
      f,
      g,
      W,
      v,
      A,
      P,
      N,
      I
    );
  }, Ee = (u, f, g, C, v, A, P, N, I) => {
    f.slotScopeIds = N, u == null ? f.shapeFlag & 512 ? v.ctx.activate(
      f,
      g,
      C,
      P,
      I
    ) : Be(
      f,
      g,
      C,
      v,
      A,
      P,
      I
    ) : He(u, f, I);
  }, Be = (u, f, g, C, v, A, P) => {
    const N = u.component = vc(
      u,
      C,
      v
    );
    if (Hs(u) && (N.ctx.renderer = gt), Sc(N, !1, P), N.asyncDep) {
      if (v && v.registerDep(N, Te, P), !u.el) {
        const I = N.subTree = Dt(Ut);
        D(null, I, f, g), u.placeholder = I.el;
      }
    } else
      Te(
        N,
        u,
        f,
        g,
        v,
        A,
        P
      );
  }, He = (u, f, g) => {
    const C = f.component = u.component;
    if (tc(u, f, g))
      if (C.asyncDep && !C.asyncResolved) {
        se(C, f, g);
        return;
      } else
        C.next = f, C.update();
    else
      f.el = u.el, C.vnode = f;
  }, Te = (u, f, g, C, v, A, P) => {
    const N = () => {
      if (u.isMounted) {
        let { next: M, bu: V, u: K, parent: te, vnode: oe } = u;
        {
          const et = sl(u);
          if (et) {
            M && (M.el = oe.el, se(u, M, P)), et.asyncDep.then(() => {
              rt(() => {
                u.isUnmounted || S();
              }, v);
            });
            return;
          }
        }
        let ie = M, Se;
        Xt(u, !1), M ? (M.el = oe.el, se(u, M, P)) : M = oe, V && pr(V), (Se = M.props && M.props.onVnodeBeforeUpdate) && vt(Se, te, M, oe), Xt(u, !0);
        const Ce = vi(u), We = u.subTree;
        u.subTree = Ce, k(
          We,
          Ce,
          // parent may have changed if it's in a teleport
          T(We.el),
          // anchor may have changed if it's in a fragment
          Qe(We),
          u,
          v,
          A
        ), M.el = Ce.el, ie === null && nc(u, Ce.el), K && rt(K, v), (Se = M.props && M.props.onVnodeUpdated) && rt(
          () => vt(Se, te, M, oe),
          v
        );
      } else {
        let M;
        const { el: V, props: K } = f, { bm: te, m: oe, parent: ie, root: Se, type: Ce } = u, We = $n(f);
        Xt(u, !1), te && pr(te), !We && (M = K && K.onVnodeBeforeMount) && vt(M, ie, f), Xt(u, !0);
        {
          Se.ce && Se.ce._hasShadowRoot() && Se.ce._injectChildStyle(
            Ce,
            u.parent ? u.parent.type : void 0
          );
          const et = u.subTree = vi(u);
          k(
            null,
            et,
            g,
            C,
            u,
            v,
            A
          ), f.el = et.el;
        }
        if (oe && rt(oe, v), !We && (M = K && K.onVnodeMounted)) {
          const et = f;
          rt(
            () => vt(M, ie, et),
            v
          );
        }
        (f.shapeFlag & 256 || ie && $n(ie.vnode) && ie.vnode.shapeFlag & 256) && u.a && rt(u.a, v), u.isMounted = !0, f = g = C = null;
      }
    };
    u.scope.on();
    const I = u.effect = new bo(N);
    u.scope.off();
    const S = u.update = I.run.bind(I), W = u.job = I.runIfDirty.bind(I);
    W.i = u, W.id = u.uid, I.scheduler = () => Us(W), Xt(u, !0), S();
  }, se = (u, f, g) => {
    f.component = u;
    const C = u.vnode.props;
    u.vnode = f, u.next = null, sc(u, f.props, C, g), ac(u, f.children, g), Mt(), pi(u), Lt();
  }, re = (u, f, g, C, v, A, P, N, I = !1) => {
    const S = u && u.children, W = u ? u.shapeFlag : 0, M = f.children, { patchFlag: V, shapeFlag: K } = f;
    if (V > 0) {
      if (V & 128) {
        Ze(
          S,
          M,
          g,
          C,
          v,
          A,
          P,
          N,
          I
        );
        return;
      } else if (V & 256) {
        je(
          S,
          M,
          g,
          C,
          v,
          A,
          P,
          N,
          I
        );
        return;
      }
    }
    K & 8 ? (W & 16 && ft(S, v, A), M !== S && d(g, M)) : W & 16 ? K & 16 ? Ze(
      S,
      M,
      g,
      C,
      v,
      A,
      P,
      N,
      I
    ) : ft(S, v, A, !0) : (W & 8 && d(g, ""), K & 16 && q(
      M,
      g,
      C,
      v,
      A,
      P,
      N,
      I
    ));
  }, je = (u, f, g, C, v, A, P, N, I) => {
    u = u || yn, f = f || yn;
    const S = u.length, W = f.length, M = Math.min(S, W);
    let V;
    for (V = 0; V < M; V++) {
      const K = f[V] = I ? Rt(f[V]) : Et(f[V]);
      k(
        u[V],
        K,
        g,
        null,
        v,
        A,
        P,
        N,
        I
      );
    }
    S > W ? ft(
      u,
      v,
      A,
      !0,
      !1,
      M
    ) : q(
      f,
      g,
      C,
      v,
      A,
      P,
      N,
      I,
      M
    );
  }, Ze = (u, f, g, C, v, A, P, N, I) => {
    let S = 0;
    const W = f.length;
    let M = u.length - 1, V = W - 1;
    for (; S <= M && S <= V; ) {
      const K = u[S], te = f[S] = I ? Rt(f[S]) : Et(f[S]);
      if (Pn(K, te))
        k(
          K,
          te,
          g,
          null,
          v,
          A,
          P,
          N,
          I
        );
      else
        break;
      S++;
    }
    for (; S <= M && S <= V; ) {
      const K = u[M], te = f[V] = I ? Rt(f[V]) : Et(f[V]);
      if (Pn(K, te))
        k(
          K,
          te,
          g,
          null,
          v,
          A,
          P,
          N,
          I
        );
      else
        break;
      M--, V--;
    }
    if (S > M) {
      if (S <= V) {
        const K = V + 1, te = K < W ? f[K].el : C;
        for (; S <= V; )
          k(
            null,
            f[S] = I ? Rt(f[S]) : Et(f[S]),
            g,
            te,
            v,
            A,
            P,
            N,
            I
          ), S++;
      }
    } else if (S > V)
      for (; S <= M; )
        R(u[S], v, A, !0), S++;
    else {
      const K = S, te = S, oe = /* @__PURE__ */ new Map();
      for (S = te; S <= V; S++) {
        const Me = f[S] = I ? Rt(f[S]) : Et(f[S]);
        Me.key != null && oe.set(Me.key, S);
      }
      let ie, Se = 0;
      const Ce = V - te + 1;
      let We = !1, et = 0;
      const ct = new Array(Ce);
      for (S = 0; S < Ce; S++) ct[S] = 0;
      for (S = K; S <= M; S++) {
        const Me = u[S];
        if (Se >= Ce) {
          R(Me, v, A, !0);
          continue;
        }
        let it;
        if (Me.key != null)
          it = oe.get(Me.key);
        else
          for (ie = te; ie <= V; ie++)
            if (ct[ie - te] === 0 && Pn(Me, f[ie])) {
              it = ie;
              break;
            }
        it === void 0 ? R(Me, v, A, !0) : (ct[it - te] = S + 1, it >= et ? et = it : We = !0, k(
          Me,
          f[it],
          g,
          null,
          v,
          A,
          P,
          N,
          I
        ), Se++);
      }
      const Kt = We ? dc(ct) : yn;
      for (ie = Kt.length - 1, S = Ce - 1; S >= 0; S--) {
        const Me = te + S, it = f[Me], xn = f[Me + 1], Cn = Me + 1 < W ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          xn.el || il(xn)
        ) : C;
        ct[S] === 0 ? k(
          null,
          it,
          g,
          Cn,
          v,
          A,
          P,
          N,
          I
        ) : We && (ie < 0 || S !== Kt[ie] ? Q(it, g, Cn, 2) : ie--);
      }
    }
  }, Q = (u, f, g, C, v = null) => {
    const { el: A, type: P, transition: N, children: I, shapeFlag: S } = u;
    if (S & 6) {
      Q(u.component.subTree, f, g, C);
      return;
    }
    if (S & 128) {
      u.suspense.move(f, g, C);
      return;
    }
    if (S & 64) {
      P.move(u, f, g, gt);
      return;
    }
    if (P === ye) {
      r(A, f, g);
      for (let M = 0; M < I.length; M++)
        Q(I[M], f, g, C);
      r(u.anchor, f, g);
      return;
    }
    if (P === rs) {
      G(u, f, g);
      return;
    }
    if (C !== 2 && S & 1 && N)
      if (C === 0)
        N.persisted && !A[es] ? r(A, f, g) : (N.beforeEnter(A), r(A, f, g), rt(() => N.enter(A), v));
      else {
        const { leave: M, delayLeave: V, afterLeave: K } = N, te = () => {
          u.ctx.isUnmounted ? s(A) : r(A, f, g);
        }, oe = () => {
          const ie = A._isLeaving || !!A[es];
          A._isLeaving && A[es](
            !0
            /* cancelled */
          ), N.persisted && !ie ? te() : M(A, () => {
            te(), K && K();
          });
        };
        V ? V(A, te, oe) : oe();
      }
    else
      r(A, f, g);
  }, R = (u, f, g, C = !1, v = !1) => {
    const {
      type: A,
      props: P,
      ref: N,
      children: I,
      dynamicChildren: S,
      shapeFlag: W,
      patchFlag: M,
      dirs: V,
      cacheIndex: K,
      memo: te
    } = u;
    if (M === -2 && (v = !1), N != null && (Mt(), jn(N, null, g, u, !0), Lt()), K != null && (f.renderCache[K] = void 0), W & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const oe = W & 1 && V, ie = !$n(u);
    let Se;
    if (ie && (Se = P && P.onVnodeBeforeUnmount) && vt(Se, f, u), W & 6)
      Ct(u.component, g, C);
    else {
      if (W & 128) {
        u.suspense.unmount(g, C);
        return;
      }
      oe && Yt(u, null, f, "beforeUnmount"), W & 64 ? u.type.remove(
        u,
        f,
        g,
        gt,
        C
      ) : S && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !S.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== ye || M > 0 && M & 64) ? ft(
        S,
        f,
        g,
        !1,
        !0
      ) : (A === ye && M & 384 || !v && W & 16) && ft(I, f, g), C && m(u);
    }
    const Ce = te != null && K == null;
    (ie && (Se = P && P.onVnodeUnmounted) || oe || Ce) && rt(() => {
      Se && vt(Se, f, u), oe && Yt(u, null, f, "unmounted"), Ce && (u.el = null);
    }, g);
  }, m = (u) => {
    const { type: f, el: g, anchor: C, transition: v } = u;
    if (f === ye) {
      ee(g, C);
      return;
    }
    if (f === rs) {
      L(u);
      return;
    }
    const A = () => {
      s(g), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (u.shapeFlag & 1 && v && !v.persisted) {
      const { leave: P, delayLeave: N } = v, I = () => P(g, A);
      N ? N(u.el, A, I) : I();
    } else
      A();
  }, ee = (u, f) => {
    let g;
    for (; u !== f; )
      g = O(u), s(u), u = g;
    s(f);
  }, Ct = (u, f, g) => {
    const { bum: C, scope: v, job: A, subTree: P, um: N, m: I, a: S } = u;
    Ei(I), Ei(S), C && pr(C), v.stop(), A && (A.flags |= 8, R(P, u, f, g)), N && rt(N, f), rt(() => {
      u.isUnmounted = !0;
    }, f);
  }, ft = (u, f, g, C = !1, v = !1, A = 0) => {
    for (let P = A; P < u.length; P++)
      R(u[P], f, g, C, v);
  }, Qe = (u) => {
    if (u.shapeFlag & 6)
      return Qe(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = O(u.anchor || u.el), g = f && f[wa];
    return g ? O(g) : f;
  };
  let qt = !1;
  const Ht = (u, f, g) => {
    let C;
    u == null ? f._vnode && (R(f._vnode, null, null, !0), C = f._vnode.component) : k(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      g
    ), f._vnode = u, qt || (qt = !0, pi(C), Lo(), qt = !1);
  }, gt = {
    p: k,
    um: R,
    m: Q,
    r: m,
    mt: Be,
    mc: q,
    pc: re,
    pbc: de,
    n: Qe,
    o: e
  };
  return {
    render: Ht,
    hydrate: void 0,
    createApp: Ya(Ht)
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
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Rt(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && rl(o, l)), l.type === Fr && (l.patchFlag === -1 && (l = s[i] = Rt(l)), l.el = o.el), l.type === Ut && !l.el && (l.el = o.el);
    }
}
function dc(e) {
  const t = e.slice(), n = [0];
  let r, s, i, o, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const b = e[r];
    if (b !== 0) {
      if (s = n[n.length - 1], e[s] < b) {
        t[r] = s, n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < b ? i = l + 1 : o = l;
      b < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
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
function Ei(e) {
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
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : Ta(e);
}
const ye = /* @__PURE__ */ Symbol.for("v-fgt"), Fr = /* @__PURE__ */ Symbol.for("v-txt"), Ut = /* @__PURE__ */ Symbol.for("v-cmt"), rs = /* @__PURE__ */ Symbol.for("v-stc"), sn = [];
let at = null;
function H(e = !1) {
  sn.push(at = e ? null : []);
}
function ll() {
  sn.pop(), at = sn[sn.length - 1] || null;
}
let Kn = 1;
function Ai(e, t = !1) {
  Kn += e, e < 0 && at && t && (at.hasOnce = !0);
}
function al(e) {
  return e.dynamicChildren = Kn > 0 ? at || yn : null, ll(), Kn > 0 && at && at.push(e), e;
}
function j(e, t, n, r, s, i) {
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
    Dt(
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
}) => (typeof e == "number" && (e = "" + e), e != null ? we(e) || /* @__PURE__ */ Je(e) || ne(e) ? { i: ut, r: e, k: t, f: !!n } : e : null);
function y(e, t = null, n = null, r = 0, s = null, i = e === ye ? 0 : 1, o = !1, l = !1) {
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
    ctx: ut
  };
  return l ? (Sr(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= we(n) ? 8 : 16), Kn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  at && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && at.push(c), c;
}
const Dt = mc;
function mc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === $a) && (e = Ut), cl(e)) {
    const l = An(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Sr(l, n), Kn > 0 && !i && at && (l.shapeFlag & 6 ? at[at.indexOf(e)] = l : at.push(l)), l.patchFlag = -2, l;
  }
  if (Cc(e) && (e = e.__vccOpts), t) {
    t = bc(t);
    let { class: l, style: c } = t;
    l && !we(l) && (t.class = zn(l)), he(c) && (/* @__PURE__ */ Fs(c) && !Y(c) && (c = ze({}, c)), t.style = Ps(c));
  }
  const o = we(e) ? 1 : ol(e) ? 128 : Dr(e) ? 64 : he(e) ? 4 : ne(e) ? 2 : 0;
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
function bc(e) {
  return e ? /* @__PURE__ */ Fs(e) || Jo(e) ? ze({}, e) : e : null;
}
function An(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: c } = e, b = t ? gc(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && ul(b),
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
    patchFlag: t && e.type !== ye ? o === -1 ? 16 : o | 16 : o,
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
  return c && r && ks(
    d,
    c.clone(d)
  ), d;
}
function fe(e = " ", t = 0) {
  return Dt(Fr, null, e, t);
}
function Ie(e = "", t = !1) {
  return t ? (H(), hc(Ut, null, e)) : Dt(Ut, null, e);
}
function Et(e) {
  return e == null || typeof e == "boolean" ? Dt(Ut) : Y(e) ? Dt(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : cl(e) ? Rt(e) : Dt(Fr, null, String(e));
}
function Rt(e) {
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
      !s && !Jo(t) ? t._ctx = ut : s === 3 && ut && (ut.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ne(t)) {
    if (r & 65) {
      Sr(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ut }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [fe(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function gc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = zn([t.class, r.class]));
      else if (s === "style")
        t.style = Ps([t.style, r.style]);
      else if (Cr(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(Y(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !wr(s) && (t[s] = o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function vt(e, t, n, r = null) {
  bt(e, t, 7, [
    n,
    r
  ]);
}
const yc = qo();
let _c = 0;
function vc(e, t, n) {
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
    scope: new Kl(
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
    emitsOptions: Ko(r, s),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Ja.bind(null, i), e.ce && e.ce(i), i;
}
let Xe = null;
const Tc = () => Xe || ut;
let Er, Gn;
{
  const e = Pr(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  Er = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Xe = n
  ), Gn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Yn = n
  );
}
const Zn = (e) => {
  const t = Xe;
  return Er(e), e.scope.on(), () => {
    e.scope.off(), Er(t);
  };
}, xi = () => {
  Xe && Xe.scope.off(), Er(null);
};
function fl(e) {
  return e.vnode.shapeFlag & 4;
}
let Yn = !1;
function Sc(e, t = !1, n = !1) {
  t && Gn(t);
  const { props: r, children: s } = e.vnode, i = fl(e);
  rc(e, r, i, t), lc(e, s, n || t);
  const o = i ? Ec(e, t) : void 0;
  return t && Gn(!1), o;
}
function Ec(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Va);
  const { setup: r } = n;
  if (r) {
    Mt();
    const s = e.setupContext = r.length > 1 ? xc(e) : null, i = Zn(e), o = Jn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = lo(o);
    if (Lt(), i(), (l || e.sp) && !$n(e) && $o(e), l) {
      if (o.then(xi, xi), t)
        return o.then((c) => {
          Gn(!0);
          try {
            Ci(e, c, t);
          } finally {
            Gn(!1);
          }
        }).catch((c) => {
          Ir(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Ci(e, o);
  } else
    dl(e);
}
function Ci(e, t, n) {
  ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) && (e.setupState = No(t)), dl(e);
}
function dl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || At);
  {
    const s = Zn(e);
    Mt();
    try {
      za(e);
    } finally {
      Lt(), s();
    }
  }
}
const Ac = {
  get(e, t) {
    return Ve(e, "get", ""), e[t];
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
function Cc(e) {
  return ne(e) && "__vccOpts" in e;
}
const Pe = (e, t) => /* @__PURE__ */ ba(e, t, Yn), wc = "3.5.42";
let As;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    As = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const pl = As ? (e) => As.createHTML(e) : (e) => e, Oc = "http://www.w3.org/2000/svg", Rc = "http://www.w3.org/1998/Math/MathML", Ot = typeof document < "u" ? document : null, Oi = Ot && /* @__PURE__ */ Ot.createElement("template"), Pc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? Ot.createElementNS(Oc, e) : t === "mathml" ? Ot.createElementNS(Rc, e) : n ? Ot.createElement(e, { is: n }) : Ot.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => Ot.createTextNode(e),
  createComment: (e) => Ot.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ot.querySelector(e),
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
      Oi.innerHTML = pl(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Oi.content;
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
const Ri = /* @__PURE__ */ Symbol("_vod"), Dc = /* @__PURE__ */ Symbol("_vsh"), Mc = /* @__PURE__ */ Symbol(""), Lc = /(?:^|;)\s*display\s*:/;
function Fc(e, t, n) {
  const r = e.style, s = we(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (we(t))
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
        !we(t) && t ? t[o] : void 0,
        l
      ) || Ln(r, o, l) : Ln(r, o, "");
    }
  } else if (s) {
    if (t !== n) {
      const o = r[Mc];
      o && (n += ";" + o), r.cssText = n, i = Lc.test(n);
    }
  } else t && e.removeAttribute("style");
  Ri in e && (e[Ri] = i ? r.display : "", e[Dc] && (r.display = "none"));
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
const Pi = ["Webkit", "Moz", "ms"], ss = {};
function Uc(e, t) {
  const n = ss[t];
  if (n)
    return n;
  let r = pt(t);
  if (r !== "filter" && r in e)
    return ss[t] = r;
  r = uo(r);
  for (let s = 0; s < Pi.length; s++) {
    const i = Pi[s] + r;
    if (i in e)
      return ss[t] = i;
  }
  return t;
}
function kc(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && we(r) && n === r;
}
const Ni = "http://www.w3.org/1999/xlink";
function Ii(e, t, n, r, s, i = Bl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ni, t.slice(6, t.length)) : e.setAttributeNS(Ni, t, n) : n == null || i && !po(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : xt(n) ? String(n) : n
  );
}
function Di(e, t, n, r, s) {
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
const Mi = /* @__PURE__ */ Symbol("_vei");
function jc(e, t, n, r, s = null) {
  const i = e[Mi] || (e[Mi] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, c] = zc(t);
    if (r) {
      const b = i[t] = qc(
        r,
        s
      );
      en(e, l, b, c);
    } else o && (Hc(e, l, o, c), i[t] = void 0);
  }
}
const $c = /(Once|Passive|Capture)$/, Vc = /^on:?(?:Once|Passive|Capture)$/;
function zc(e) {
  let t, n;
  for (; (n = e.match($c)) && !Vc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : ln(e.slice(2)), t];
}
let is = 0;
const Bc = /* @__PURE__ */ Promise.resolve(), Wc = () => is || (Bc.then(() => is = 0), is = Date.now());
function qc(e, t) {
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
        const b = o[c];
        b && bt(
          b,
          t,
          5,
          l
        );
      }
    } else
      bt(
        s,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Wc(), n;
}
const Li = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Kc = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Ic(e, r, o) : t === "style" ? Fc(e, n, r) : Cr(t) ? wr(t) || jc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Gc(e, t, r, o)) ? (Di(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ii(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Yc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !we(r))) ? Di(e, pt(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ii(e, t, r, o));
};
function Gc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Li(t) && ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Li(t) && we(n) ? !1 : t in e;
}
function Yc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = pt(t);
  return Array.isArray(n) ? n.some((s) => pt(s) === r) : Object.keys(n).some((s) => pt(s) === r);
}
const Ar = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Y(t) ? (n) => pr(t, n) : t;
};
function Xc(e) {
  e.target.composing = !0;
}
function Fi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const tn = /* @__PURE__ */ Symbol("_assign"), fr = /* @__PURE__ */ Symbol("_initialValue");
function os(e, t, n) {
  return t && (e = e.trim()), n && (e = Rr(e)), e;
}
const ls = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[fr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[fr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[tn] = Ar(s);
    const i = r || s.props && s.props.type === "number";
    en(e, t ? "change" : "input", (o) => {
      o.target.composing || e[tn](os(e.value, n, i));
    }), (n || i) && en(e, "change", () => {
      e.value = os(e.value, n, i);
    }), t || (en(e, "compositionstart", Xc), en(e, "compositionend", Fi), en(e, "change", Fi));
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
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === c) || (e.value = c);
  }
}, Ke = {
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
  if (!n || Y(e)) return Bt(e, t);
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
          c === "string" || c === "number" ? o.selected = t.some((b) => String(b) === String(l)) : o.selected = ql(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Bt(xr(o), t)) {
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
}, eu = /* @__PURE__ */ ze({ patchProp: Kc }, Pc);
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
    !ne(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
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
  return we(e) ? document.querySelector(e) : e;
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
function ji(e, t) {
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
    var r, s, i, o, l = [], c = !0, b = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(c = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); c = !0) ;
    } catch (d) {
      b = !0, s = d;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (b) throw s;
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
    if (typeof e == "string") return ji(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ji(e, t) : void 0;
  }
}
const hl = Object.entries, $i = Object.setPrototypeOf, fu = Object.isFrozen, du = Object.getPrototypeOf, pu = Object.getOwnPropertyDescriptor;
let De = Object.freeze, Fe = Object.seal, gn = Object.create, ml = typeof Reflect < "u" && Reflect, xs = ml.apply, Cs = ml.construct;
De || (De = function(t) {
  return t;
});
Fe || (Fe = function(t) {
  return t;
});
xs || (xs = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    s[i - 2] = arguments[i];
  return t.apply(n, s);
});
Cs || (Cs = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const Qt = Ne(Array.prototype.forEach), hu = Ne(Array.prototype.lastIndexOf), Vi = Ne(Array.prototype.pop), Nn = Ne(Array.prototype.push), mu = Ne(Array.prototype.splice), Sn = Array.isArray, Fn = Ne(String.prototype.toLowerCase), as = Ne(String.prototype.toString), zi = Ne(String.prototype.match), In = Ne(String.prototype.replace), Bi = Ne(String.prototype.indexOf), bu = Ne(String.prototype.trim), gu = Ne(Number.prototype.toString), yu = Ne(Boolean.prototype.toString), Wi = typeof BigInt > "u" ? null : Ne(BigInt.prototype.toString), qi = typeof Symbol > "u" ? null : Ne(Symbol.prototype.toString), st = Ne(Object.prototype.hasOwnProperty), Dn = Ne(Object.prototype.toString), $e = Ne(RegExp.prototype.test), Jt = _u(TypeError);
function Ne(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return xs(e, t, r);
  };
}
function _u(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Cs(e, n);
  };
}
function ae(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Fn;
  if ($i && $i(e, null), !Sn(t))
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
function vu(e) {
  for (let t = 0; t < e.length; t++)
    st(e, t) || (e[t] = null);
  return e;
}
function lt(e) {
  const t = gn(null);
  for (const r of hl(e)) {
    var n = cu(r, 2);
    const s = n[0], i = n[1];
    st(e, s) && (Sn(i) ? t[s] = vu(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = lt(i) : t[s] = i);
  }
  return t;
}
function Tu(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return gu(e);
    case "boolean":
      return yu(e);
    case "bigint":
      return Wi ? Wi(e) : "0";
    case "symbol":
      return qi ? qi(e) : "Symbol()";
    case "undefined":
      return Dn(e);
    case "function":
    case "object": {
      if (e === null)
        return Dn(e);
      const t = e, n = dt(t, "toString");
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
function dt(e, t) {
  for (; e !== null; ) {
    const r = pu(e, t);
    if (r) {
      if (r.get)
        return Ne(r.get);
      if (typeof r.value == "function")
        return Ne(r.value);
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
    return $e(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ki = De(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), cs = De(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), us = De(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Eu = De(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), fs = De(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Au = De(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Gi = De(["#text"]), Yi = De(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ds = De(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Xi = De(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), dr = De(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), xu = Fe(/{{[\w\W]*|^[\w\W]*}}/g), Cu = Fe(/<%[\w\W]*|^[\w\W]*%>/g), wu = Fe(/\${[\w\W]*/g), Ou = Fe(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ru = Fe(/^aria-[\-\w]+$/), Ji = Fe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Pu = Fe(/^(?:\w+script|data):/i), Nu = Fe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Iu = Fe(/^html$/i), Du = Fe(/^[a-z][.\w]*(-[.\w]+)+$/i), Zi = Fe(/<[/\w!]/g), Qi = Fe(/<[/\w]/g), Mu = Fe(/<\/no(script|embed|frames)/i), Lu = Fe(/\/>/i), ot = {
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
}, bl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Fu = De(ae({}, bl)), Uu = (function() {
  const e = {};
  return Qt(bl, (t) => {
    e[t] = Fe(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), De(e);
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
  return st(t, n) && Sn(t[n]) ? ae(s.base ? lt(s.base) : {}, t[n], s.transform) : r;
}, ps = function(t, n, r) {
  const s = st(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? lt(s) : r();
};
function gl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ku();
  const t = (w) => gl(w);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== ot.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, b = e.NamedNodeMap;
  b === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, T = e.trustedTypes, O = l.prototype, U = dt(O, "cloneNode"), X = dt(O, "remove"), k = dt(O, "nextSibling"), z = dt(O, "childNodes"), D = dt(O, "parentNode"), J = dt(O, "shadowRoot"), G = dt(O, "attributes"), L = o && o.prototype ? dt(o.prototype, "nodeType") : null, le = o && o.prototype ? dt(o.prototype, "nodeName") : null, Oe = o && o.prototype ? dt(o.prototype, "ownerDocument") : null, xe = function(a) {
    return L ? L(a) : a.nodeType;
  }, q = function(a) {
    return le ? le(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const w = n.createElement("template");
    w.content && w.content.ownerDocument && (n = w.content.ownerDocument);
  }
  let B, de = "", be, ve = !1, Ee = 0;
  const Be = function() {
    if (Ee > 0)
      throw Jt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, He = function(a) {
    Be(), Ee++;
    try {
      return B.createHTML(a);
    } finally {
      Ee--;
    }
  }, Te = function(a) {
    Be(), Ee++;
    try {
      return B.createScriptURL(a);
    } finally {
      Ee--;
    }
  }, se = function() {
    return ve || (be = Hu(T, s), ve = !0), be;
  }, re = n, je = re.implementation, Ze = re.createNodeIterator, Q = re.createDocumentFragment, R = re.getElementsByTagName, m = r.importNode;
  let ee = eo();
  t.isSupported = typeof hl == "function" && typeof D == "function" && je && je.createHTMLDocument !== void 0;
  const Ct = xu, ft = Cu, Qe = wu, qt = Ou, Ht = Ru, gt = Pu, an = Nu, u = Du;
  let f = Ji, g = null;
  const C = ae({}, [...Ki, ...cs, ...us, ...fs, ...Gi]);
  let v = null;
  const A = ae({}, [...Yi, ...ds, ...Xi, ...dr]);
  let P = Object.seal(gn(null, {
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
  })), N = null, I = null;
  const S = Object.seal(gn(null, {
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
  let W = !0, M = !0, V = !1, K = !0, te = !1, oe = !0, ie = !1, Se = !1, Ce = null, We = null, et = !1, ct = !1, Kt = !1, Me = !1, it = !0, xn = !1;
  const Cn = "user-content-";
  let kr = !0, Hr = !1, cn = {}, un = null;
  const Vs = ae({}, [
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
  let zs = null;
  const Bs = ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ws = null;
  const qs = ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Qn = "http://www.w3.org/1998/Math/MathML", er = "http://www.w3.org/2000/svg", yt = "http://www.w3.org/1999/xhtml";
  let fn = yt, jr = !1, $r = null;
  const _l = ae({}, [Qn, er, yt], as), Ks = De(["mi", "mo", "mn", "ms", "mtext"]);
  let Vr = ae({}, Ks);
  const Gs = De(["annotation-xml"]);
  let zr = ae({}, Gs);
  const vl = ae({}, ["title", "style", "font", "a", "script"]);
  let wn = null;
  const Tl = ["application/xhtml+xml", "text/html"], Sl = "text/html";
  let Re = null, dn = null;
  const El = n.createElement("form"), Ys = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, Br = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (dn && dn === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = lt(a), wn = // eslint-disable-next-line unicorn/prefer-includes
    Tl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? Sl : a.PARSER_MEDIA_TYPE, Re = wn === "application/xhtml+xml" ? as : Fn, g = $t(a, "ALLOWED_TAGS", C, {
      transform: Re
    }), v = $t(a, "ALLOWED_ATTR", A, {
      transform: Re
    }), $r = $t(a, "ALLOWED_NAMESPACES", _l, {
      transform: as
    }), Ws = $t(a, "ADD_URI_SAFE_ATTR", qs, {
      transform: Re,
      base: qs
    }), zs = $t(a, "ADD_DATA_URI_TAGS", Bs, {
      transform: Re,
      base: Bs
    }), un = $t(a, "FORBID_CONTENTS", Vs, {
      transform: Re
    }), N = $t(a, "FORBID_TAGS", lt({}), {
      transform: Re
    }), I = $t(a, "FORBID_ATTR", lt({}), {
      transform: Re
    }), cn = st(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? lt(a.USE_PROFILES) : a.USE_PROFILES : !1, W = a.ALLOW_ARIA_ATTR !== !1, M = a.ALLOW_DATA_ATTR !== !1, V = a.ALLOW_UNKNOWN_PROTOCOLS || !1, K = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, te = a.SAFE_FOR_TEMPLATES || !1, oe = a.SAFE_FOR_XML !== !1, ie = a.WHOLE_DOCUMENT || !1, ct = a.RETURN_DOM || !1, Kt = a.RETURN_DOM_FRAGMENT || !1, Me = a.RETURN_TRUSTED_TYPE || !1, et = a.FORCE_BODY || !1, it = a.SANITIZE_DOM !== !1, xn = a.SANITIZE_NAMED_PROPS || !1, kr = a.KEEP_CONTENT !== !1, Hr = a.IN_PLACE || !1, f = Su(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Ji, fn = typeof a.NAMESPACE == "string" ? a.NAMESPACE : yt, Vr = ps(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ae({}, Ks)
      // Default built-in map
    ), zr = ps(
      a,
      "HTML_INTEGRATION_POINTS",
      () => ae({}, Gs)
      // Default built-in map
    );
    const h = ps(a, "CUSTOM_ELEMENT_HANDLING", () => gn(null));
    if (P = gn(null), st(h, "tagNameCheck") && Ys(h.tagNameCheck) && (P.tagNameCheck = h.tagNameCheck), st(h, "attributeNameCheck") && Ys(h.attributeNameCheck) && (P.attributeNameCheck = h.attributeNameCheck), st(h, "allowCustomizedBuiltInElements") && typeof h.allowCustomizedBuiltInElements == "boolean" && (P.allowCustomizedBuiltInElements = h.allowCustomizedBuiltInElements), Fe(P), te && (M = !1), Kt && (ct = !0), cn && (g = ae({}, Gi), v = gn(null), cn.html === !0 && (ae(g, Ki), ae(v, Yi)), cn.svg === !0 && (ae(g, cs), ae(v, ds), ae(v, dr)), cn.svgFilters === !0 && (ae(g, us), ae(v, ds), ae(v, dr)), cn.mathMl === !0 && (ae(g, fs), ae(v, Xi), ae(v, dr))), S.tagCheck = null, S.attributeCheck = null, st(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? S.tagCheck = a.ADD_TAGS : Sn(a.ADD_TAGS) && (g === C && (g = lt(g)), ae(g, a.ADD_TAGS, Re))), st(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? S.attributeCheck = a.ADD_ATTR : Sn(a.ADD_ATTR) && (v === A && (v = lt(v)), ae(v, a.ADD_ATTR, Re))), st(a, "ADD_FORBID_CONTENTS") && Sn(a.ADD_FORBID_CONTENTS) && (un === Vs && (un = lt(un)), ae(un, a.ADD_FORBID_CONTENTS, Re)), kr && (g["#text"] = !0), ie && ae(g, ["html", "head", "body"]), g.table && (ae(g, ["tbody"]), delete N.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Jt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Jt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const x = B;
      B = a.TRUSTED_TYPES_POLICY;
      try {
        de = He("");
      } catch (F) {
        throw B = x, F;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (B = void 0, de = "") : (B === void 0 && (B = se()), B && typeof de == "string" && (de = He("")));
    De && De(a), dn = a;
  }, Xs = ae({}, [...cs, ...us, ...Eu]), Js = ae({}, [...fs, ...Au]), Al = function(a, h, x) {
    return h.namespaceURI === yt ? a === "svg" : h.namespaceURI === Qn ? a === "svg" && (x === "annotation-xml" || Vr[x]) : !!Xs[a];
  }, xl = function(a, h, x) {
    return h.namespaceURI === yt ? a === "math" : h.namespaceURI === er ? a === "math" && zr[x] : !!Js[a];
  }, Cl = function(a, h, x) {
    return h.namespaceURI === er && !zr[x] || h.namespaceURI === Qn && !Vr[x] ? !1 : !Js[a] && (vl[a] || !Xs[a]);
  }, wl = function(a) {
    let h = D(a);
    (!h || !h.tagName) && (h = {
      namespaceURI: fn,
      tagName: "template"
    });
    const x = Fn(a.tagName), F = Fn(h.tagName);
    return $r[a.namespaceURI] ? a.namespaceURI === er ? Al(x, h, F) : a.namespaceURI === Qn ? xl(x, h, F) : a.namespaceURI === yt ? Cl(x, h, F) : !!(wn === "application/xhtml+xml" && $r[a.namespaceURI]) : !1;
  }, jt = function(a) {
    Nn(t.removed, {
      element: a
    });
    try {
      D(a).removeChild(a);
    } catch {
      if (X(a), !D(a))
        throw Jt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Zs = function(a, h, x) {
    try {
      a.removeAttributeNode(h);
    } catch {
      try {
        a.removeAttribute(x);
      } catch {
      }
    }
  }, tr = function(a) {
    nr(a);
    const h = z(a);
    if (h) {
      const F = [];
      Qt(h, ($) => {
        Nn(F, $);
      }), Qt(F, ($) => {
        try {
          X($);
        } catch {
        }
      });
    }
    const x = G(a);
    if (x)
      for (let F = x.length - 1; F >= 0; --F) {
        const $ = x[F], Z = $ && $.name;
        typeof Z == "string" && Zs(a, $, Z);
      }
  }, Gt = function(a, h, x) {
    if (!x)
      try {
        x = h.getAttributeNode(a);
      } catch {
        x = null;
      }
    Nn(t.removed, {
      attribute: x || null,
      from: h
    });
    try {
      x ? h.removeAttributeNode(x) : h.removeAttribute(a);
    } catch {
      try {
        h.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (ct || Kt)
        try {
          jt(h);
        } catch {
        }
      else
        try {
          h.setAttribute(a, "");
        } catch {
        }
  }, Ol = function(a) {
    const h = G(a);
    if (h)
      for (let x = h.length - 1; x >= 0; --x) {
        const F = h[x], $ = F && F.name;
        typeof $ != "string" || v[Re($)] || Zs(a, F, $);
      }
  }, nr = function(a) {
    const h = [a];
    for (; h.length > 0; ) {
      const x = h.pop();
      xe(x) === ot.element && Ol(x);
      const $ = z(x);
      if ($)
        for (let Z = $.length - 1; Z >= 0; --Z)
          h.push($[Z]);
    }
  }, Qs = function(a, h) {
    return oe ? a === "patchsrc" ? !0 : a === "for" && h !== "label" && h !== "output" : !1;
  }, Rl = function(a) {
    if (!oe)
      return;
    const h = [a];
    for (; h.length > 0; ) {
      const x = h.pop(), F = xe(x);
      if (F === ot.processingInstruction || F === ot.comment && $e(Qi, x.data)) {
        try {
          X(x);
        } catch {
        }
        continue;
      }
      if (F === ot.element) {
        const Z = x, ge = Re(q(x));
        try {
          Z.hasAttribute && Z.hasAttribute("patchsrc") && Z.removeAttribute("patchsrc"), Z.hasAttribute && Z.hasAttribute("for") && Qs("for", ge) && Z.removeAttribute("for");
        } catch {
        }
      }
      const $ = z(x);
      if ($)
        for (let Z = $.length - 1; Z >= 0; --Z)
          h.push($[Z]);
    }
  }, ei = function(a) {
    let h = null, x = null;
    if (et)
      a = "<remove></remove>" + a;
    else {
      const Z = zi(a, /^[\r\n\t ]+/);
      x = Z && Z[0];
    }
    wn === "application/xhtml+xml" && fn === yt && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const F = B ? He(a) : a;
    if (fn === yt)
      try {
        h = new d().parseFromString(F, wn);
      } catch {
      }
    if (!h || !h.documentElement) {
      h = je.createDocument(fn, "template", null);
      try {
        h.documentElement.innerHTML = jr ? de : F;
      } catch {
      }
    }
    const $ = h.body || h.documentElement;
    return a && x && $.insertBefore(n.createTextNode(x), $.childNodes[0] || null), fn === yt ? R.call(h, ie ? "html" : "body")[0] : ie ? h.documentElement : $;
  }, ti = function(a) {
    const h = Oe ? Oe(a) : a.ownerDocument;
    return Ze.call(
      h || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, rr = function(a) {
    return a = In(a, Ct, " "), a = In(a, ft, " "), a = In(a, Qe, " "), a;
  }, Wr = function(a) {
    var h;
    a.normalize();
    const x = Oe ? Oe(a) : a.ownerDocument, F = Ze.call(
      x || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let $ = F.nextNode();
    for (; $; )
      $.data = rr($.data), $ = F.nextNode();
    const Z = (h = a.querySelectorAll) === null || h === void 0 ? void 0 : h.call(a, "template");
    Z && Qt(Z, (ge) => {
      pn(ge.content) && Wr(ge.content);
    });
  }, sr = function(a) {
    const h = le ? le(a) : null;
    return typeof h != "string" || Re(h) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== G(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    a.nodeType !== L(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    a.childNodes !== z(a);
  }, pn = function(a) {
    if (!L || typeof a != "object" || a === null)
      return !1;
    try {
      return L(a) === ot.documentFragment;
    } catch {
      return !1;
    }
  }, On = function(a) {
    if (!L || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof L(a) == "number";
    } catch {
      return !1;
    }
  };
  function _t(w, a, h) {
    w.length !== 0 && Qt(w, (x) => {
      x.call(t, a, h, dn);
    });
  }
  const Pl = function(a, h) {
    return !!(oe && a.hasChildNodes() && !On(a.firstElementChild) && $e(Zi, a.textContent) && $e(Zi, a.innerHTML) || oe && a.namespaceURI === yt && Fu[h] && (On(a.firstElementChild) || typeof a.textContent == "string" && $e(Uu[h], a.textContent)) || a.nodeType === ot.processingInstruction || oe && a.nodeType === ot.comment && $e(Qi, a.data));
  }, ir = function(a, h) {
    if (a instanceof RegExp)
      return $e(a, h);
    if (a instanceof Function) {
      for (var x = arguments.length, F = new Array(x > 2 ? x - 2 : 0), $ = 2; $ < x; $++)
        F[$ - 2] = arguments[$];
      return !!a(h, ...F);
    }
    return !1;
  }, Nl = function(a, h, x) {
    if (!N[h] && oi(h) && ir(P.tagNameCheck, h))
      return !1;
    if (kr && !un[h]) {
      const F = D(a), $ = z(a);
      if ($ && F) {
        const Z = $.length;
        for (let ge = Z - 1; ge >= 0; --ge) {
          const Ae = a === x ? U($[ge], !0) : $[ge];
          F.insertBefore(Ae, k(a));
        }
      }
    }
    return jt(a), !0;
  }, ni = function(a, h, x, F) {
    return a.length === 0 ? h : h === x || h === F ? lt(h) : h;
  }, ri = function(a, h) {
    return a === h || D(a) !== null ? !1 : (Hr && nr(a), !0);
  }, si = function(a, h) {
    if (_t(ee.beforeSanitizeElements, a, null), ri(a, h))
      return !0;
    if (sr(a))
      return jt(a), !0;
    const x = Re(q(a));
    if (g = ni(ee.uponSanitizeElement, g, C, Ce), _t(ee.uponSanitizeElement, a, {
      tagName: x,
      allowedTags: g
    }), ri(a, h))
      return !0;
    if (Pl(a, x))
      return jt(a), !0;
    if (N[x] || !(S.tagCheck instanceof Function && S.tagCheck(x)) && !g[x]) {
      const $ = Nl(a, x, h);
      return $ === !1 && _t(ee.afterSanitizeElements, a, null), $;
    }
    if (xe(a) === ot.element && !wl(a) || (x === "noscript" || x === "noembed" || x === "noframes") && $e(Mu, a.innerHTML))
      return jt(a), !0;
    if (te && a.nodeType === ot.text) {
      const $ = rr(a.textContent);
      a.textContent !== $ && (Nn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = $);
    }
    return _t(ee.afterSanitizeElements, a, null), !1;
  }, ii = function(a, h, x) {
    if (I[h] || Qs(h, a) || it && (h === "id" || h === "name") && (x in n || x in El))
      return !1;
    const F = v[h] || S.attributeCheck instanceof Function && S.attributeCheck(h, a);
    return M && $e(qt, h) || W && $e(Ht, h) ? !0 : F ? Ws[h] || $e(f, In(x, an, "")) || (h === "src" || h === "xlink:href" || h === "href") && a !== "script" && Bi(x, "data:") === 0 && zs[a] || V && !$e(gt, In(x, an, "")) ? !0 : !x : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      oi(a) && ir(P.tagNameCheck, a) && ir(P.attributeNameCheck, h, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      h === "is" && P.allowCustomizedBuiltInElements && ir(P.tagNameCheck, x)
    );
  }, Il = ae({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), oi = function(a) {
    return !Il[Fn(a)] && $e(u, a);
  }, Dl = function(a, h, x, F) {
    if (B && typeof T == "object" && typeof T.getAttributeType == "function" && !x)
      switch (T.getAttributeType(a, h)) {
        case "TrustedHTML":
          return He(F);
        case "TrustedScriptURL":
          return Te(F);
      }
    return F;
  }, Ml = function(a, h, x, F) {
    try {
      x ? a.setAttributeNS(x, h, F) : a.setAttribute(h, F), sr(a) ? jt(a) : Vi(t.removed);
    } catch {
      Gt(h, a);
    }
  }, li = function(a) {
    _t(ee.beforeSanitizeAttributes, a, null);
    const h = a.attributes;
    if (!h || sr(a))
      return;
    v = ni(ee.uponSanitizeAttribute, v, A, We);
    const x = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: v,
      forceKeepAttr: void 0
    };
    let F = h.length;
    const $ = Re(a.nodeName);
    for (; F--; ) {
      const Z = h[F], ge = Z.name, Ae = Z.namespaceURI, tt = Z.value, nt = Re(ge), Kr = tt;
      let qe = ge === "value" ? Kr : bu(Kr);
      if (x.attrName = nt, x.attrValue = qe, x.keepAttr = !0, x.forceKeepAttr = void 0, _t(ee.uponSanitizeAttribute, a, x), qe = x.attrValue, xn && (nt === "id" || nt === "name") && Bi(qe, Cn) !== 0 && (Gt(ge, a, Z), qe = Cn + qe), oe && $e(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, qe)) {
        Gt(ge, a, Z);
        continue;
      }
      if (nt === "attributename" && zi(qe, "href")) {
        Gt(ge, a, Z);
        continue;
      }
      if (!x.forceKeepAttr) {
        if (!x.keepAttr) {
          Gt(ge, a, Z);
          continue;
        }
        if (!K && $e(Lu, qe)) {
          Gt(ge, a, Z);
          continue;
        }
        if (te && (qe = rr(qe)), !ii($, nt, qe)) {
          Gt(ge, a, Z);
          continue;
        }
        qe = Dl($, nt, Ae, qe), qe !== Kr && Ml(a, ge, Ae, qe);
      }
    }
    _t(ee.afterSanitizeAttributes, a, null);
  }, or = function(a) {
    let h = null;
    const x = ti(a);
    for (_t(ee.beforeSanitizeShadowDOM, a, null); h = x.nextNode(); )
      if (_t(ee.uponSanitizeShadowNode, h, null), si(h, a), li(h), pn(h.content) && or(h.content), xe(h) === ot.element) {
        const F = J(h);
        pn(F) && (qr(F), or(F));
      }
    _t(ee.afterSanitizeShadowDOM, a, null);
  }, qr = function(a) {
    const h = [{
      node: a,
      shadow: null
    }];
    for (; h.length > 0; ) {
      const x = h.pop();
      if (x.shadow) {
        or(x.shadow);
        continue;
      }
      const F = x.node, Z = xe(F) === ot.element, ge = z(F);
      if (ge)
        for (let Ae = ge.length - 1; Ae >= 0; --Ae)
          h.push({
            node: ge[Ae],
            shadow: null
          });
      if (Z) {
        const Ae = le ? le(F) : null;
        if (typeof Ae == "string" && Re(Ae) === "template") {
          const tt = F.content;
          pn(tt) && h.push({
            node: tt,
            shadow: null
          });
        }
      }
      if (Z) {
        const Ae = J(F);
        pn(Ae) && h.push({
          node: null,
          shadow: Ae
        }, {
          node: Ae,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(w) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h = null, x = null, F = null, $ = null;
    if (jr = !w, jr && (w = "<!-->"), typeof w != "string" && !On(w) && (w = Tu(w), typeof w != "string"))
      throw Jt("dirty is not a string, aborting");
    if (!t.isSupported)
      return w;
    Se ? (g = Ce, v = We) : Br(a), (ee.uponSanitizeElement.length > 0 || ee.uponSanitizeAttribute.length > 0) && (g = lt(g)), ee.uponSanitizeAttribute.length > 0 && (v = lt(v)), t.removed = [];
    const Z = Hr && typeof w != "string" && On(w);
    if (Z) {
      Rl(w);
      const tt = q(w);
      if (typeof tt == "string") {
        const nt = Re(tt);
        if (!g[nt] || N[nt])
          throw tr(w), Jt("root node is forbidden and cannot be sanitized in-place");
      }
      if (sr(w))
        throw tr(w), Jt("root node is clobbered and cannot be sanitized in-place");
      try {
        qr(w);
      } catch (nt) {
        throw tr(w), nt;
      }
    } else if (On(w))
      h = ei("<!---->"), x = h.ownerDocument.importNode(w, !0), x.nodeType === ot.element && x.nodeName === "BODY" || x.nodeName === "HTML" ? h = x : h.appendChild(x), qr(x);
    else {
      if (!ct && !te && !ie && // eslint-disable-next-line unicorn/prefer-includes
      w.indexOf("<") === -1)
        return B && Me ? He(w) : w;
      if (h = ei(w), !h)
        return ct ? null : Me ? de : "";
    }
    h && et && jt(h.firstChild);
    const ge = Z ? w : h;
    try {
      const tt = ti(ge);
      for (; F = tt.nextNode(); )
        si(F, ge), li(F), pn(F.content) && or(F.content);
    } catch (tt) {
      throw Z && (tr(w), Qt(t.removed, (nt) => {
        nt.element && nr(nt.element);
      })), tt;
    }
    if (Z)
      return Qt(t.removed, (tt) => {
        tt.element && nr(tt.element);
      }), te && Wr(w), w;
    if (ct) {
      if (te && Wr(h), Kt)
        for ($ = Q.call(h.ownerDocument); h.firstChild; )
          $.appendChild(h.firstChild);
      else
        $ = h;
      return (v.shadowroot || v.shadowrootmode) && ($ = m.call(r, $, !0)), $;
    }
    let Ae = ie ? h.outerHTML : h.innerHTML;
    return ie && g["!doctype"] && h.ownerDocument && h.ownerDocument.doctype && h.ownerDocument.doctype.name && $e(Iu, h.ownerDocument.doctype.name) && (Ae = "<!DOCTYPE " + h.ownerDocument.doctype.name + `>
` + Ae), te && (Ae = rr(Ae)), B && Me ? He(Ae) : Ae;
  }, t.setConfig = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Br(w), Se = !0, Ce = g, We = v;
  }, t.clearConfig = function() {
    dn = null, Se = !1, Ce = null, We = null, B = be, de = "";
  }, t.isValidAttribute = function(w, a, h) {
    dn || Br({});
    const x = Re(w), F = Re(a);
    return ii(x, F, h);
  }, t.addHook = function(w, a) {
    typeof a == "function" && st(ee, w) && Nn(ee[w], a);
  }, t.removeHook = function(w, a) {
    if (st(ee, w)) {
      if (a !== void 0) {
        const h = hu(ee[w], a);
        return h === -1 ? void 0 : mu(ee[w], h, 1)[0];
      }
      return Vi(ee[w]);
    }
  }, t.removeHooks = function(w) {
    st(ee, w) && (ee[w] = []);
  }, t.removeAllHooks = function() {
    ee = eo();
  }, t;
}
var ju = gl();
function $u(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hs, to;
function Vu() {
  if (to) return hs;
  to = 1;
  var e = /["'&<>]/;
  hs = t;
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
  return hs;
}
var zu = Vu();
const no = /* @__PURE__ */ $u(zu);
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
function p(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = (k) => k, b = (l.sanitize ? ju.sanitize : c) || c, d = l.escape ? no : c, T = (k) => typeof k == "string" || typeof k == "number", O = (k, z, D) => k.replace(/%n/g, "" + D).replace(/{([^{}]*)}/g, (J, G) => {
    if (z === void 0 || !(G in z))
      return d(J);
    const L = z[G];
    return T(L) ? d(`${L}`) : typeof L == "object" && T(L.value) ? (L.escape !== !1 ? no : c)(`${L.value}`) : d(J);
  });
  let X = (s?.bundle ?? Bu(e)).translations[t] || t;
  return X = Array.isArray(X) ? X[0] : X, b(typeof i == "object" || o !== void 0 ? O(
    X,
    i,
    o
  ) : X);
}
const Wu = { class: "library-vue-catalogue" }, qu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Ku = { class: "library-catalogue-header" }, Gu = { id: "library-catalogue-heading" }, Yu = { class: "library-muted" }, Xu = ["aria-label"], Ju = ["href"], Zu = ["href"], Qu = ["href"], ef = ["href"], tf = ["aria-label"], nf = ["name", "value"], rf = { class: "library-quick-filter-search" }, sf = { value: "title" }, of = { value: "recent" }, lf = { value: "publicationDate" }, af = { value: "publication" }, cf = { value: "lastOpened" }, uf = { value: "format" }, ff = { value: "" }, df = { value: "1" }, pf = ["value"], hf = ["value"], mf = ["aria-label"], bf = ["aria-label"], gf = { class: "library-filter-panel" }, yf = { class: "library-filter-panel-summary" }, _f = ["aria-label"], vf = { value: "" }, Tf = ["value"], Sf = { value: "" }, Ef = ["value"], Af = { value: "" }, xf = ["value"], Cf = { value: "" }, wf = ["value"], Of = { value: "" }, Rf = ["value"], Pf = { value: "" }, Nf = ["value"], If = { value: "" }, Df = ["value"], Mf = { value: "" }, Lf = ["value"], Ff = { value: "" }, Uf = ["value"], kf = { value: "" }, Hf = ["value"], jf = { value: "" }, $f = { value: "1" }, Vf = { value: "" }, zf = { value: "1" }, Bf = { value: "title" }, Wf = { value: "recent" }, qf = { value: "publicationDate" }, Kf = { value: "publication" }, Gf = { value: "lastOpened" }, Yf = { value: "format" }, Xf = ["value"], Jf = ["value"], Zf = ["aria-label"], Qf = ["aria-label"], ed = ["href"], td = { class: "library-muted library-filter-result-summary" }, nd = { key: 0 }, rd = { href: "?" }, sd = ["aria-label"], id = ["href", "aria-label"], od = ["aria-label"], ld = { class: "library-pagination-range" }, ad = { key: 0 }, cd = ["href"], ud = {
  key: 1,
  class: "library-muted"
}, fd = ["href"], dd = {
  key: 3,
  class: "library-muted"
}, pd = {
  key: 1,
  class: "library-periodical-groups"
}, hd = { class: "library-periodical-groups-summary" }, md = { id: "library-periodical-groups-heading" }, bd = { class: "library-muted" }, gd = ["href"], yd = { class: "library-muted" }, _d = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty"
}, vd = { class: "library-periodical-groups-summary" }, Td = { id: "library-periodical-groups-empty-heading" }, Sd = { class: "library-muted" }, Ed = {
  key: 3,
  class: "library-empty-content",
  role: "status"
}, Ad = { class: "library-muted" }, xd = { class: "library-empty-actions" }, Cd = {
  href: "?",
  class: "button secondary"
}, wd = ["href"], Od = {
  key: 4,
  class: "library-cover-gallery"
}, Rd = ["href", "aria-label"], Pd = ["src", "alt"], Nd = ["action", "onSubmit"], Id = ["value"], Dd = ["value"], Md = ["aria-pressed", "title", "aria-label", "onClick"], Ld = { class: "library-cover-summary" }, Fd = { class: "library-cover-primary" }, Ud = ["aria-label"], kd = ["href"], Hd = ["onToggle"], jd = ["aria-label"], $d = { class: "library-cover-meta" }, Vd = {
  key: 0,
  class: "library-creator"
}, zd = { class: "library-cover-detail-list" }, Bd = { class: "library-cover-detail-chip" }, Wd = {
  key: 0,
  class: "library-cover-detail-chip"
}, qd = {
  key: 1,
  class: "library-cover-detail-chip"
}, Kd = {
  key: 2,
  class: "library-cover-detail-chip"
}, Gd = {
  key: 3,
  class: "library-cover-detail-chip"
}, Yd = {
  key: 4,
  class: "library-cover-detail-chip"
}, Xd = {
  key: 5,
  class: "library-cover-detail-chip"
}, Jd = {
  key: 6,
  class: "library-cover-detail-chip"
}, Zd = {
  key: 1,
  class: "library-muted library-cover-description"
}, Qd = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, ep = { key: 0 }, tp = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, np = {
  key: 0,
  class: "library-muted"
}, rp = { class: "library-cover-actions" }, sp = ["href"], ip = ["href"], op = ["href"], lp = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = /* @__PURE__ */ _n((t.state.items || []).map((Q) => ({ ...Q }))), i = Pe(() => s), o = Pe(() => t.state.shelves || []), l = Pe(() => t.state.formats || []), c = Pe(() => t.state.publications || []), b = Pe(() => t.state.publicationSummaries || []), d = Pe(() => t.state.publicationYears || []), T = Pe(() => t.state.creators || []), O = Pe(() => t.state.scanStatuses || []), U = Pe(() => t.state.workflowStatuses || []), X = Pe(() => t.state.genres || []), k = Pe(() => t.state.classifications || []), z = Pe(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: i.value.length,
      visible: i.value.length,
      from: i.value.length > 0 ? 1 : 0,
      to: i.value.length,
      previousUrl: "",
      nextUrl: ""
    }), D = /* @__PURE__ */ _n({
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
    }), J = Pe(() => t.state.settingsUrl || ""), G = Pe(() => t.state.requestToken || ""), L = Pe(() => t.state.metadataExportUrl || ""), le = Pe(() => t.state.metadataSidecarManifestUrl || ""), Oe = Pe(() => t.state.metadataSidecarBundleUrl || ""), xe = Pe(() => t.state.scannerConflictReviewUrl || "?scannerConflicts=1"), q = {
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
    }, B = Pe(() => Object.entries(q).map(([Q, R]) => ({ key: Q, label: R, value: D[Q] || "" })).filter((Q) => String(Q.value).trim() !== "")), de = Pe(() => Object.entries(D).filter(([Q, R]) => !["q", "sort", "starred"].includes(Q) && String(R || "").trim() !== "").map(([Q, R]) => ({ key: Q, value: R }))), be = /* @__PURE__ */ _n({});
    let ve = null;
    function Ee(Q) {
      const R = Q?.currentTarget?.form || Q?.currentTarget?.closest?.("form");
      R && (typeof R.requestSubmit == "function" ? R.requestSubmit() : R.submit());
    }
    function Be(Q) {
      window.clearTimeout(ve), ve = window.setTimeout(() => Ee(Q), 350);
    }
    function He(Q) {
      const R = new URLSearchParams(window.location.search);
      R.delete(Q), R.delete("page");
      const m = R.toString();
      return m ? `?${m}` : "?";
    }
    function Te(Q) {
      return String(Q || "").toUpperCase();
    }
    function se(Q) {
      return Q.nextcloudTags || [];
    }
    function re(Q) {
      const R = new URLSearchParams(window.location.search);
      return R.set("publication", Q), R.set("sort", "publication"), R.delete("page"), `?${R.toString()}`;
    }
    function je(Q, R) {
      be[Q] = !!R?.currentTarget?.open;
    }
    async function Ze(Q, R) {
      const m = R?.currentTarget?.closest?.("form") || R?.currentTarget;
      if (!m || !Q?.starUrl) return;
      const ee = !!Q.starred;
      Q.starred = !ee;
      try {
        (await fetch(Q.starUrl, {
          method: "POST",
          body: new FormData(m),
          credentials: "same-origin"
        })).ok || (Q.starred = ee);
      } catch {
        Q.starred = ee;
      }
    }
    return (Q, R) => (H(), j("div", Wu, [
      y("section", qu, [
        y("div", Ku, [
          y("div", null, [
            y("h2", Gu, _(E(p)("library", "Publication catalogue")), 1),
            y("p", Yu, _(E(p)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          y("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": E(p)("library", "Library actions")
          }, [
            y("a", {
              href: J.value,
              class: "button secondary",
              "aria-label": "Open Library settings"
            }, _(E(p)("library", "Settings")), 9, Ju),
            L.value ? (H(), j("a", {
              key: 0,
              href: L.value,
              class: "button secondary",
              "aria-label": "Export corrected metadata"
            }, _(E(p)("library", "Export corrected metadata")), 9, Zu)) : Ie("", !0),
            le.value ? (H(), j("a", {
              key: 1,
              href: le.value,
              class: "button secondary",
              "aria-label": "Export sidecar manifest"
            }, _(E(p)("library", "Sidecar manifest")), 9, Qu)) : Ie("", !0),
            Oe.value ? (H(), j("a", {
              key: 2,
              href: Oe.value,
              class: "button secondary",
              "aria-label": "Export sidecar ZIP"
            }, _(E(p)("library", "Sidecar ZIP")), 9, ef)) : Ie("", !0)
          ], 8, Xu)
        ]),
        y("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": E(p)("library", "Quick catalogue filters")
        }, [
          (H(!0), j(ye, null, Ue(de.value, (m) => (H(), j("input", {
            key: m.key,
            type: "hidden",
            name: m.key,
            value: m.value
          }, null, 8, nf))), 128)),
          y("label", rf, [
            fe(_(E(p)("library", "Search")) + " ", 1),
            Le(y("input", {
              "onUpdate:modelValue": R[0] || (R[0] = (m) => D.q = m),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex...",
              onInput: Be
            }, null, 544), [
              [ls, D.q]
            ])
          ]),
          y("label", null, [
            fe(_(E(p)("library", "Sort")) + " ", 1),
            Le(y("select", {
              "onUpdate:modelValue": R[1] || (R[1] = (m) => D.sort = m),
              name: "sort",
              onChange: Ee
            }, [
              y("option", sf, _(E(p)("library", "Title")), 1),
              y("option", of, _(E(p)("library", "Recently added")), 1),
              y("option", lf, _(E(p)("library", "Publication date")), 1),
              y("option", af, _(E(p)("library", "Series")), 1),
              y("option", cf, _(E(p)("library", "Recently opened")), 1),
              y("option", uf, _(E(p)("library", "Format")), 1)
            ], 544), [
              [Ke, D.sort]
            ])
          ]),
          y("label", null, [
            fe(_(E(p)("library", "Starred")) + " ", 1),
            Le(y("select", {
              "onUpdate:modelValue": R[2] || (R[2] = (m) => D.starred = m),
              name: "starred",
              onChange: Ee
            }, [
              y("option", ff, _(E(p)("library", "All")), 1),
              y("option", df, _(E(p)("library", "Starred")), 1)
            ], 544), [
              [Ke, D.starred]
            ])
          ]),
          y("label", null, [
            fe(_(E(p)("library", "Size")) + " ", 1),
            y("select", {
              value: z.value.limit,
              name: "limit",
              onChange: Ee
            }, [
              (H(), j(ye, null, Ue(r, (m) => y("option", {
                key: m,
                value: m
              }, _(m), 9, hf)), 64))
            ], 40, pf)
          ]),
          y("button", {
            type: "submit",
            class: "button primary",
            "aria-label": E(p)("library", "Apply catalogue filters")
          }, _(E(p)("library", "Apply filters")), 9, mf),
          y("a", {
            href: "?",
            class: "button secondary",
            "aria-label": E(p)("library", "Clear catalogue filters")
          }, _(E(p)("library", "Clear all")), 9, bf)
        ], 8, tf),
        y("details", gf, [
          y("summary", yf, _(E(p)("library", "Show catalogue filters")), 1),
          y("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": E(p)("library", "Catalogue search and filters")
          }, [
            y("label", null, [
              fe(_(E(p)("library", "Search title / author")) + " ", 1),
              Le(y("input", {
                "onUpdate:modelValue": R[3] || (R[3] = (m) => D.q = m),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [ls, D.q]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Type")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": R[4] || (R[4] = (m) => D.type = m),
                name: "type"
              }, [
                y("option", vf, _(E(p)("library", "All types")), 1),
                (H(), j(ye, null, Ue(n, (m) => y("option", {
                  key: m,
                  value: m
                }, _(m), 9, Tf)), 64))
              ], 512), [
                [Ke, D.type]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Series / periodical")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": R[5] || (R[5] = (m) => D.publication = m),
                name: "publication"
              }, [
                y("option", Sf, _(E(p)("library", "All series and periodicals")), 1),
                (H(!0), j(ye, null, Ue(c.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(m), 9, Ef))), 128))
              ], 512), [
                [Ke, D.publication]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Publication year")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": R[6] || (R[6] = (m) => D.year = m),
                name: "year"
              }, [
                y("option", Af, _(E(p)("library", "All years")), 1),
                (H(!0), j(ye, null, Ue(d.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(m), 9, xf))), 128))
              ], 512), [
                [Ke, D.year]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Creator")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": R[7] || (R[7] = (m) => D.creator = m),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                y("option", Cf, _(E(p)("library", "All creators")), 1),
                (H(!0), j(ye, null, Ue(T.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(m), 9, wf))), 128))
              ], 512), [
                [Ke, D.creator]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Nextcloud tag")) + " ", 1),
              Le(y("input", {
                "onUpdate:modelValue": R[8] || (R[8] = (m) => D.tag = m),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [ls, D.tag]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Format")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": R[9] || (R[9] = (m) => D.format = m),
                name: "format"
              }, [
                y("option", Of, _(E(p)("library", "All formats")), 1),
                (H(!0), j(ye, null, Ue(l.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(Te(m)), 9, Rf))), 128))
              ], 512), [
                [Ke, D.format]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Shelf")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": R[10] || (R[10] = (m) => D.shelf = m),
                name: "shelf"
              }, [
                y("option", Pf, _(E(p)("library", "All shelves")), 1),
                (H(!0), j(ye, null, Ue(o.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(m), 9, Nf))), 128))
              ], 512), [
                [Ke, D.shelf]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Scan status")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": R[11] || (R[11] = (m) => D.status = m),
                name: "status"
              }, [
                y("option", If, _(E(p)("library", "All scan statuses")), 1),
                (H(!0), j(ye, null, Ue(O.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(m), 9, Df))), 128))
              ], 512), [
                [Ke, D.status]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Workflow status")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": R[12] || (R[12] = (m) => D.workflowStatus = m),
                name: "workflowStatus"
              }, [
                y("option", Mf, _(E(p)("library", "All workflow statuses")), 1),
                (H(!0), j(ye, null, Ue(U.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(m), 9, Lf))), 128))
              ], 512), [
                [Ke, D.workflowStatus]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Genre")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": R[13] || (R[13] = (m) => D.genre = m),
                name: "genre"
              }, [
                y("option", Ff, _(E(p)("library", "All genres")), 1),
                (H(!0), j(ye, null, Ue(X.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(m), 9, Uf))), 128))
              ], 512), [
                [Ke, D.genre]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Classification")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": R[14] || (R[14] = (m) => D.classification = m),
                name: "classification"
              }, [
                y("option", kf, _(E(p)("library", "All classifications")), 1),
                (H(!0), j(ye, null, Ue(k.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(m), 9, Hf))), 128))
              ], 512), [
                [Ke, D.classification]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Scanner conflicts")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": R[15] || (R[15] = (m) => D.scannerConflicts = m),
                name: "scannerConflicts"
              }, [
                y("option", jf, _(E(p)("library", "All metadata")), 1),
                y("option", $f, _(E(p)("library", "Needs review")), 1)
              ], 512), [
                [Ke, D.scannerConflicts]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Starred")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": R[16] || (R[16] = (m) => D.starred = m),
                name: "starred"
              }, [
                y("option", Vf, _(E(p)("library", "All publications")), 1),
                y("option", zf, _(E(p)("library", "Starred only")), 1)
              ], 512), [
                [Ke, D.starred]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Sort")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": R[17] || (R[17] = (m) => D.sort = m),
                name: "sort"
              }, [
                y("option", Bf, _(E(p)("library", "Title")), 1),
                y("option", Wf, _(E(p)("library", "Recently added")), 1),
                y("option", qf, _(E(p)("library", "Publication date")), 1),
                y("option", Kf, _(E(p)("library", "Series / periodical")), 1),
                y("option", Gf, _(E(p)("library", "Recently opened")), 1),
                y("option", Yf, _(E(p)("library", "Format")), 1)
              ], 512), [
                [Ke, D.sort]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Page size")) + " ", 1),
              y("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (H(), j(ye, null, Ue(r, (m) => y("option", {
                  key: m,
                  value: m
                }, _(m), 9, Jf)), 64))
              ], 8, Xf)
            ]),
            y("button", {
              type: "submit",
              class: "button primary",
              "aria-label": E(p)("library", "Apply catalogue filters")
            }, _(E(p)("library", "Apply filters")), 9, Zf),
            y("a", {
              href: "?",
              class: "button secondary",
              "aria-label": E(p)("library", "Clear catalogue filters")
            }, _(E(p)("library", "Clear")), 9, Qf),
            y("a", {
              href: xe.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, _(E(p)("library", "Review scanner conflicts")), 9, ed)
          ], 8, _f)
        ]),
        y("p", td, [
          fe(_(E(p)("library", "Showing")) + " " + _(z.value.from) + "–" + _(z.value.to) + " " + _(E(p)("library", "of")) + " " + _(z.value.total) + " " + _(E(p)("library", "catalogue items")), 1),
          B.value.length > 0 ? (H(), j("span", nd, [
            R[18] || (R[18] = fe(" · ", -1)),
            y("a", rd, _(E(p)("library", "Clear all filters")), 1)
          ])) : Ie("", !0)
        ]),
        B.value.length > 0 ? (H(), j("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": E(p)("library", "Active filters")
        }, [
          y("span", null, _(E(p)("library", "Active filters")), 1),
          (H(!0), j(ye, null, Ue(B.value, (m) => (H(), j("a", {
            key: m.key,
            href: He(m.key),
            class: "library-filter-chip",
            "aria-label": `${E(p)("library", "Remove filter")}: ${m.label}`
          }, [
            y("strong", null, _(m.label) + ":", 1),
            fe(" " + _(m.value) + " ", 1),
            R[19] || (R[19] = y("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, id))), 128))
        ], 8, sd)) : Ie("", !0),
        y("nav", {
          class: "library-pagination",
          "aria-label": E(p)("library", "Catalogue pagination")
        }, [
          y("span", ld, [
            fe(_(E(p)("library", "Page")) + " " + _(z.value.page), 1),
            z.value.total > 0 ? (H(), j("span", ad, " · " + _(z.value.from) + "–" + _(z.value.to), 1)) : Ie("", !0)
          ]),
          z.value.previousUrl ? (H(), j("a", {
            key: 0,
            href: z.value.previousUrl
          }, _(E(p)("library", "Previous")), 9, cd)) : (H(), j("span", ud, _(E(p)("library", "Previous")), 1)),
          z.value.nextUrl ? (H(), j("a", {
            key: 2,
            href: z.value.nextUrl
          }, _(E(p)("library", "Next")), 9, fd)) : (H(), j("span", dd, _(E(p)("library", "Next")), 1))
        ], 8, od),
        b.value.length > 0 ? (H(), j("details", pd, [
          y("summary", hd, _(E(p)("library", "Show top series and periodicals")), 1),
          y("h3", md, _(E(p)("library", "Top series and periodicals")), 1),
          y("p", bd, _(E(p)("library", "Jump into recurring publications with one click.")), 1),
          y("ul", null, [
            (H(!0), j(ye, null, Ue(b.value, (m) => (H(), j("li", {
              key: m.publication
            }, [
              y("a", {
                href: re(m.publication)
              }, _(m.publication), 9, gd),
              y("span", yd, _(m.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : b.value.length === 0 ? (H(), j("details", _d, [
          y("summary", vd, _(E(p)("library", "Show top series and periodicals")), 1),
          y("h3", Td, _(E(p)("library", "No series or periodicals found yet")), 1),
          y("p", Sd, _(E(p)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Ie("", !0),
        i.value.length === 0 ? (H(), j("div", Ed, [
          y("h3", null, _(E(p)("library", "No catalogue items match")), 1),
          y("p", Ad, _(E(p)("library", "Scan enabled roots or clear the active filters.")), 1),
          y("p", xd, [
            y("a", Cd, _(E(p)("library", "Clear all filters")), 1),
            y("a", {
              href: J.value,
              class: "button primary"
            }, _(E(p)("library", "Run a scan from settings")), 9, wd)
          ])
        ])) : (H(), j("div", Od, [
          (H(!0), j(ye, null, Ue(i.value, (m) => (H(), j("article", {
            key: m.id,
            class: zn(["library-cover-card", { "library-cover-card--open": be[m.id] }])
          }, [
            y("a", {
              class: "library-cover-link",
              href: m.openUrl,
              "aria-label": `Read ${m.title}`
            }, [
              y("img", {
                class: "library-cover-image",
                src: m.coverUrl,
                alt: `Cover for ${m.title}`,
                loading: "lazy"
              }, null, 8, Pd)
            ], 8, Rd),
            y("form", {
              method: "post",
              action: m.starUrl,
              class: "library-cover-star-form",
              onSubmit: ki((ee) => Ze(m, ee), ["prevent"])
            }, [
              y("input", {
                type: "hidden",
                name: "requesttoken",
                value: G.value
              }, null, 8, Id),
              R[20] || (R[20] = y("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              y("input", {
                type: "hidden",
                name: "starred",
                value: m.starred ? "0" : "1"
              }, null, 8, Dd),
              y("button", {
                type: "submit",
                class: zn(["library-cover-star-button", { "library-cover-star-button--starred": m.starred }]),
                "aria-pressed": m.starred ? "true" : "false",
                title: m.starred ? E(p)("library", "Unstar this publication") : E(p)("library", "Star this publication"),
                "aria-label": m.starred ? E(p)("library", "Unstar this publication") : E(p)("library", "Star this publication"),
                onClick: ki((ee) => Ze(m, ee), ["prevent"])
              }, _(m.starred ? "★" : "☆"), 11, Md)
            ], 40, Nd),
            y("div", Ld, [
              y("div", Fd, [
                y("h3", null, [
                  m.starred ? (H(), j("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": E(p)("library", "Starred")
                  }, "★", 8, Ud)) : Ie("", !0),
                  fe(_(m.title), 1)
                ]),
                y("a", {
                  class: "library-cover-read",
                  href: m.openUrl
                }, _(E(p)("library", "Read")), 9, kd)
              ]),
              y("details", {
                class: "library-cover-details",
                onToggle: (ee) => je(m.id, ee)
              }, [
                y("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${E(p)("library", "Show details and actions")}: ${m.title}`
                }, _(E(p)("library", "Details")), 9, jd),
                y("div", $d, [
                  m.creators ? (H(), j("p", Vd, _(m.creators), 1)) : Ie("", !0),
                  y("dl", zd, [
                    y("div", Bd, [
                      y("dt", null, _(E(p)("library", "Type")), 1),
                      y("dd", null, _(m.publicationType), 1)
                    ]),
                    m.publication ? (H(), j("div", Wd, [
                      y("dt", null, _(E(p)("library", "Series")), 1),
                      y("dd", null, _(m.publication), 1)
                    ])) : Ie("", !0),
                    m.publicationDate ? (H(), j("div", qd, [
                      y("dt", null, _(E(p)("library", "Date")), 1),
                      y("dd", null, _(m.publicationDate), 1)
                    ])) : Ie("", !0),
                    m.workflowStatus ? (H(), j("div", Kd, [
                      y("dt", null, _(E(p)("library", "Status")), 1),
                      y("dd", null, _(m.workflowStatus), 1)
                    ])) : Ie("", !0),
                    m.hasScannerConflict ? (H(), j("div", Gd, [
                      y("dt", null, _(E(p)("library", "Review")), 1),
                      y("dd", null, _(m.scannerConflictCount) + " fields", 1)
                    ])) : Ie("", !0),
                    m.lastOpenedAt ? (H(), j("div", Yd, [
                      y("dt", null, _(E(p)("library", "Last opened")), 1),
                      y("dd", null, _(m.lastOpenedAt), 1)
                    ])) : Ie("", !0),
                    m.extension ? (H(), j("div", Xd, [
                      y("dt", null, _(E(p)("library", "Format")) + ":", 1),
                      y("dd", null, _(Te(m.extension)), 1)
                    ])) : Ie("", !0),
                    m.shelf ? (H(), j("div", Jd, [
                      y("dt", null, _(E(p)("library", "Shelf")), 1),
                      y("dd", null, _(m.shelf), 1)
                    ])) : Ie("", !0)
                  ]),
                  m.description ? (H(), j("p", Zd, _(m.description), 1)) : Ie("", !0),
                  m.scanStatus !== "indexed" || m.scanError ? (H(), j("p", Qd, [
                    fe(" scanStatus: " + _(m.scanStatus || "unknown"), 1),
                    m.scanError ? (H(), j("span", ep, " · scanError: " + _(m.scanError), 1)) : Ie("", !0)
                  ])) : Ie("", !0),
                  y("div", tp, [
                    se(m).length === 0 ? (H(), j("span", np, "No Nextcloud tags")) : (H(!0), j(ye, { key: 1 }, Ue(se(m), (ee) => (H(), j("span", {
                      key: ee.id,
                      class: "library-tag"
                    }, _(ee.name), 1))), 128))
                  ]),
                  y("p", rp, [
                    y("a", {
                      href: m.filesUrl
                    }, _(E(p)("library", "Show in Files")), 9, sp),
                    R[21] || (R[21] = fe(" · ", -1)),
                    y("a", {
                      href: m.downloadUrl
                    }, _(E(p)("library", "Download source")), 9, ip),
                    R[22] || (R[22] = fe(" · ", -1)),
                    y("a", {
                      href: m.detailsUrl
                    }, _(E(p)("library", "Details")), 9, op)
                  ])
                ])
              ], 40, Hd)
            ])
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}, ro = iu("library", "catalogue", {}), br = document.querySelector("#library-vue-root"), so = {
  ...ro,
  requestToken: br?.dataset.requestToken || ro.requestToken || ""
};
function ce(e) {
  return String(e ?? "");
}
function yl(e) {
  return ce(e).toUpperCase();
}
function ap(e, t, n, r = ce) {
  for (const s of t) {
    const i = document.createElement("option");
    i.value = ce(s), i.textContent = r(s), ce(s) === ce(n) && (i.selected = !0), e.appendChild(i);
  }
}
function io(e, t, n, r, s = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = ce(r), o.placeholder = s, i.appendChild(o), e.appendChild(i);
}
function mn(e, t, n, r, s, i, o = ce) {
  const l = document.createElement("label");
  l.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const b = document.createElement("option");
  b.value = "", b.textContent = s, c.appendChild(b), ap(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function cp(e) {
  const t = ce(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function up(e) {
  const t = new URLSearchParams(window.location.search);
  return t.set("publication", e), t.set("sort", "publication"), t.delete("page"), `?${t.toString()}`;
}
function fp(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", p("library", "Catalogue search and filters")), io(r, p("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), mn(r, p("library", "Type"), "type", n.type, p("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), io(r, p("library", "Nextcloud tag"), "tag", n.tag, "photography"), mn(r, p("library", "Format"), "format", n.format, p("library", "All formats"), e.formats || [], yl), mn(r, p("library", "Shelf"), "shelf", n.shelf, p("library", "All shelves"), e.shelves || []), mn(r, p("library", "Scan status"), "status", n.status, p("library", "All scan statuses"), e.scanStatuses || []), mn(r, p("library", "Sort"), "sort", n.sort || "title", p("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), mn(r, p("library", "Page size"), "limit", t.limit || 100, p("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", p("library", "Apply catalogue filters")), s.textContent = p("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", p("library", "Clear catalogue filters")), i.textContent = p("library", "Clear"), r.append(s, i), r;
}
function dp(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-quick-filter-bar", r.setAttribute("aria-label", p("library", "Quick catalogue filters"));
  let s = null;
  const i = () => {
    window.clearTimeout(s), s = window.setTimeout(() => r.requestSubmit(), 350);
  };
  for (const [T, O] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(T) || ce(O).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = T, U.value = ce(O), r.appendChild(U);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = p("library", "Search");
  const l = document.createElement("input");
  l.type = "search", l.name = "q", l.value = ce(n.q), l.placeholder = "Camera, Eco, Rolleiflex...", l.addEventListener("input", i), o.appendChild(l), r.appendChild(o);
  const c = [
    [p("library", "Sort"), "sort", n.sort || "title", [["title", p("library", "Title")], ["recent", p("library", "Recently added")], ["publicationDate", p("library", "Publication date")], ["publication", p("library", "Series")], ["lastOpened", p("library", "Recently opened")], ["format", p("library", "Format")]]],
    [p("library", "Starred"), "starred", n.starred || "", [["", p("library", "All")], ["1", p("library", "Starred")]]],
    [p("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [T, O, U, X] of c) {
    const k = document.createElement("label");
    k.textContent = T;
    const z = document.createElement("select");
    z.name = O;
    for (const [D, J] of X) {
      const G = document.createElement("option");
      G.value = ce(D), G.textContent = ce(J), ce(D) === ce(U) && (G.selected = !0), z.appendChild(G);
    }
    z.addEventListener("change", () => r.requestSubmit()), k.appendChild(z), r.appendChild(k);
  }
  const b = document.createElement("button");
  b.type = "submit", b.className = "button primary", b.setAttribute("aria-label", p("library", "Apply catalogue filters")), b.textContent = p("library", "Apply filters");
  const d = document.createElement("a");
  return d.href = "?", d.className = "button secondary", d.setAttribute("aria-label", p("library", "Clear catalogue filters")), d.textContent = p("library", "Clear all"), r.append(b, d), r;
}
function pp(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = ce(e.settingsUrl || ""), i = ce(e.metadataExportUrl || ""), o = document.createElement("div");
  o.className = "library-vue-catalogue library-vue-fallback", o.dataset.vueFallback = "true";
  const l = document.createElement("section");
  l.className = "library-panel", l.setAttribute("aria-labelledby", "library-catalogue-heading");
  const c = document.createElement("div");
  c.className = "library-catalogue-header";
  const b = document.createElement("div"), d = document.createElement("h2");
  d.id = "library-catalogue-heading", d.textContent = p("library", "Publication catalogue");
  const T = document.createElement("p");
  T.className = "library-muted", T.textContent = p("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), b.append(d, T);
  const O = document.createElement("nav");
  if (O.className = "library-catalogue-toolbar", O.setAttribute("aria-label", p("library", "Library actions")), s) {
    const q = document.createElement("a");
    q.href = s, q.className = "button secondary", q.setAttribute("aria-label", "Open Library settings"), q.textContent = p("library", "Settings"), O.appendChild(q);
  }
  if (i) {
    const q = document.createElement("a");
    q.href = i, q.className = "button secondary", q.setAttribute("aria-label", "Export corrected metadata"), q.textContent = p("library", "Export corrected metadata"), O.appendChild(q);
  }
  if (e.metadataSidecarManifestUrl) {
    const q = document.createElement("a");
    q.href = e.metadataSidecarManifestUrl, q.className = "button secondary", q.setAttribute("aria-label", "Export sidecar manifest"), q.textContent = p("library", "Sidecar manifest"), O.appendChild(q);
  }
  if (e.metadataSidecarBundleUrl) {
    const q = document.createElement("a");
    q.href = e.metadataSidecarBundleUrl, q.className = "button secondary", q.setAttribute("aria-label", "Export sidecar ZIP"), q.textContent = p("library", "Sidecar ZIP"), O.appendChild(q);
  }
  c.append(b, O), l.appendChild(c), l.appendChild(dp(e, r));
  const U = document.createElement("details");
  U.className = "library-filter-panel";
  const X = document.createElement("summary");
  X.className = "library-filter-panel-summary", X.textContent = p("library", "Show catalogue filters"), U.append(X, fp(e, r)), l.appendChild(U);
  const k = document.createElement("p");
  k.className = "library-muted library-filter-result-summary", k.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`;
  const z = document.createElement("a");
  z.href = "?", z.textContent = ` ${p("library", "Clear all filters")}`, k.appendChild(z), l.appendChild(k);
  const D = document.createElement("nav");
  D.className = "library-pagination", D.setAttribute("aria-label", p("library", "Catalogue pagination"));
  const J = document.createElement("span");
  J.className = "library-pagination-range", J.textContent = `Page ${r.page ?? 1} · ${r.from ?? 0}–${r.to ?? n.length}`, D.appendChild(J), l.appendChild(D);
  const G = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], L = document.createElement("details");
  L.className = G.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const le = document.createElement("summary");
  le.className = "library-periodical-groups-summary", le.textContent = p("library", "Show top series and periodicals"), L.appendChild(le);
  const Oe = document.createElement("h3");
  Oe.textContent = G.length > 0 ? p("library", "Top series and periodicals") : p("library", "No series or periodicals found yet");
  const xe = document.createElement("p");
  if (xe.className = "library-muted", xe.textContent = G.length > 0 ? p("library", "Jump into recurring publications with one click.") : p("library", "Add publication or series names in item details to build this shortcut panel."), L.append(Oe, xe), G.length > 0) {
    const q = document.createElement("ul");
    for (const B of G) {
      const de = document.createElement("li"), be = document.createElement("a");
      be.href = up(ce(B.publication)), be.textContent = ce(B.publication);
      const ve = document.createElement("span");
      ve.className = "library-muted", ve.textContent = `${B.itemCount} items`, de.append(be, ve), q.appendChild(de);
    }
    L.appendChild(q);
  }
  if (l.appendChild(L), n.length === 0) {
    const q = document.createElement("div");
    q.className = "library-empty-content", q.setAttribute("role", "status");
    const B = document.createElement("h3");
    B.textContent = p("library", "No catalogue items match");
    const de = document.createElement("p");
    de.className = "library-muted", de.textContent = p("library", "Scan enabled roots or clear the active filters.");
    const be = document.createElement("p");
    be.className = "library-empty-actions";
    const ve = document.createElement("a");
    ve.href = "?", ve.className = "button secondary", ve.textContent = p("library", "Clear all filters");
    const Ee = document.createElement("a");
    Ee.href = s, Ee.className = "button primary", Ee.textContent = p("library", "Run a scan from settings"), be.append(ve, Ee), q.append(B, de, be), l.appendChild(q);
  } else {
    const q = document.createElement("div");
    q.className = "library-cover-gallery";
    for (const B of n) {
      const de = document.createElement("article");
      de.className = "library-cover-card";
      const be = document.createElement("a");
      be.className = "library-cover-link", be.href = ce(B.openUrl || "#"), be.setAttribute("aria-label", `Read ${ce(B.title || "publication")}`);
      const ve = document.createElement("img");
      ve.className = "library-cover-image", ve.src = ce(B.coverUrl || ""), ve.alt = `Cover for ${ce(B.title || "publication")}`, ve.loading = "lazy", be.appendChild(ve);
      const Ee = cp(e), Be = document.createElement("form");
      Be.method = "post", Be.action = ce(B.starUrl || ""), Be.className = "library-cover-star-form", Ee && Be.appendChild(Ee);
      const He = document.createElement("input");
      He.type = "hidden", He.name = "returnTo", He.value = "catalogue";
      const Te = document.createElement("input");
      Te.type = "hidden", Te.name = "starred", Te.value = B.starred ? "0" : "1";
      const se = document.createElement("button");
      se.type = "submit", se.className = B.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", se.setAttribute("aria-pressed", B.starred ? "true" : "false"), se.setAttribute("aria-label", B.starred ? p("library", "Unstar this publication") : p("library", "Star this publication")), se.title = B.starred ? p("library", "Unstar this publication") : p("library", "Star this publication"), se.textContent = B.starred ? "★" : "☆", Be.append(He, Te, se);
      const re = document.createElement("div");
      re.className = "library-cover-summary";
      const je = document.createElement("h3");
      if (je.textContent = ce(B.title || "Untitled publication"), re.appendChild(je), B.creators) {
        const Qe = document.createElement("p");
        Qe.className = "library-creator", Qe.textContent = ce(B.creators), re.appendChild(Qe);
      }
      const Ze = document.createElement("dl");
      Ze.className = "library-cover-detail-list";
      const Q = [
        ["Type", ce(B.publicationType || "other")],
        ["Format", B.extension ? yl(B.extension) : ""],
        ["Shelf", B.shelf ? ce(B.shelf) : ""]
      ].filter(([, Qe]) => Qe !== "");
      for (const [Qe, qt] of Q) {
        const Ht = document.createElement("div");
        Ht.className = "library-cover-detail-chip";
        const gt = document.createElement("dt");
        gt.textContent = Qe;
        const an = document.createElement("dd");
        an.textContent = qt, Ht.append(gt, an), Ze.appendChild(Ht);
      }
      re.appendChild(Ze);
      const R = document.createElement("p"), m = document.createElement("a");
      m.href = ce(B.openUrl || "#"), m.textContent = p("library", "Read");
      const ee = document.createElement("a");
      ee.href = ce(B.filesUrl || "#"), ee.textContent = p("library", "Show in Files");
      const Ct = document.createElement("a");
      Ct.href = ce(B.downloadUrl || "#"), Ct.textContent = p("library", "Download source");
      const ft = document.createElement("a");
      ft.href = ce(B.detailsUrl || "#"), ft.textContent = p("library", "Details"), R.append(m, document.createTextNode(" · "), ee, document.createTextNode(" · "), Ct, document.createTextNode(" · "), ft), re.appendChild(R), de.append(be, Be, re), q.appendChild(de);
    }
    l.appendChild(q);
  }
  return o.appendChild(l), o;
}
if (br)
  try {
    nu(lp, { state: so }).mount(br);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), br.replaceChildren(pp(so));
  }
//# sourceMappingURL=library-main.mjs.map
