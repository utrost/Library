// @__NO_SIDE_EFFECTS__
function ws(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const de = {}, pn = [], Tt = () => {
}, io = () => !1, Ar = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), xr = (e) => e.startsWith("onUpdate:"), Ue = Object.assign, Cs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ml = Object.prototype.hasOwnProperty, le = (e, t) => Ml.call(e, t), G = Array.isArray, Ut = (e) => Gn(e) === "[object Map]", en = (e) => Gn(e) === "[object Set]", li = (e) => Gn(e) === "[object Date]", Q = (e) => typeof e == "function", Se = (e) => typeof e == "string", Et = (e) => typeof e == "symbol", fe = (e) => e !== null && typeof e == "object", oo = (e) => (fe(e) || Q(e)) && Q(e.then) && Q(e.catch), lo = Object.prototype.toString, Gn = (e) => lo.call(e), Ll = (e) => Gn(e).slice(8, -1), ao = (e) => Gn(e) === "[object Object]", Os = (e) => Se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Nn = /* @__PURE__ */ ws(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), wr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Fl = /-\w/g, ut = wr(
  (e) => e.replace(Fl, (t) => t.slice(1).toUpperCase())
), Ul = /\B([A-Z])/g, tn = wr(
  (e) => e.replace(Ul, "-$1").toLowerCase()
), co = wr((e) => e.charAt(0).toUpperCase() + e.slice(1)), qr = wr(
  (e) => e ? `on${co(e)}` : ""
), xt = (e, t) => !Object.is(e, t), fr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, uo = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Cr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ai;
const Or = () => ai || (ai = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rs(e) {
  if (G(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = Se(r) ? $l(r) : Rs(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (Se(e) || fe(e))
    return e;
}
const kl = /;(?![^(]*\))/g, Hl = /:([^]+)/, jl = /\/\*[^]*?\*\//g;
function $l(e) {
  const t = {};
  return e.replace(jl, "").split(kl).forEach((n) => {
    if (n) {
      const r = n.split(Hl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function kn(e) {
  let t = "";
  if (Se(e))
    t = e;
  else if (G(e))
    for (let n = 0; n < e.length; n++) {
      const r = kn(e[n]);
      r && (t += r + " ");
    }
  else if (fe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Vl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zl = /* @__PURE__ */ ws(Vl);
function fo(e) {
  return !!e || e === "";
}
function Bl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = kt(e[r], t[r]);
  return n;
}
function ci(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const s of e) {
    let i = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && kt(s, n[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    r[i] = 1;
  }
  return !0;
}
function kt(e, t) {
  if (e === t) return !0;
  let n = li(e), r = li(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Et(e), r = Et(t), n || r)
    return e === t;
  if (n = G(e), r = G(t), n || r)
    return n && r ? Bl(e, t) : !1;
  if (n = fe(e), r = fe(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = Ut(e), r = Ut(t), n || r || (n = en(e), r = en(t), n || r))
      return n && r ? ci(e, t) : !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !kt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Wl(e, t) {
  return e.findIndex((n) => kt(n, t));
}
const po = (e) => !!(e && e.__v_isRef === !0), w = (e) => Se(e) ? e : e == null ? "" : G(e) || fe(e) && (e.toString === lo || !Q(e.toString)) ? po(e) ? w(e.value) : JSON.stringify(e, ho, 2) : String(e), ho = (e, t) => po(t) ? ho(e, t.value) : Ut(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Yr(r, i) + " =>"] = s, n),
    {}
  )
} : en(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yr(n))
} : Et(t) ? Yr(t) : fe(t) && !G(t) && !ao(t) ? String(t) : t, Yr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Et(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Me;
class Gl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Me && (Me.active ? (this.parent = Me, this.index = (Me.scopes || (Me.scopes = [])).push(
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
      const n = Me;
      try {
        return Me = this, t();
      } finally {
        Me = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Me, Me = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Me === this)
        Me = this.prevScope;
      else {
        let t = Me;
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
function Kl() {
  return Me;
}
let me;
const Xr = /* @__PURE__ */ new WeakSet();
class mo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Me && (Me.active ? Me.effects.push(this) : this.flags &= -2);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || bo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ui(this), yo(this);
    const t = me, n = ft;
    me = this, ft = !0;
    try {
      return this.fn();
    } finally {
      _o(this), me = t, ft = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ns(t);
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
let go = 0, Dn, Mn;
function bo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Mn, Mn = e;
    return;
  }
  e.next = Dn, Dn = e;
}
function Ps() {
  go++;
}
function Is() {
  if (--go > 0)
    return;
  if (Mn) {
    let t = Mn;
    for (Mn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Dn; ) {
    let t = Dn;
    for (Dn = void 0; t; ) {
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
function yo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function _o(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Ns(r), ql(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function hs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (To(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function To(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Hn) || (e.globalVersion = Hn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !hs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = me, r = ft;
  me = e, ft = !0;
  try {
    yo(e);
    const s = e.fn(e._value);
    (t.version === 0 || xt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    me = n, ft = r, _o(e), e.flags &= -3;
  }
}
function Ns(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Ns(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ql(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ft = !0;
const Eo = [];
function Rt() {
  Eo.push(ft), ft = !1;
}
function Pt() {
  const e = Eo.pop();
  ft = e === void 0 ? !0 : e;
}
function ui(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = me;
    me = void 0;
    try {
      t();
    } finally {
      me = n;
    }
  }
}
let Hn = 0;
class Yl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class vo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!me || !ft || me === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== me)
      n = this.activeLink = new Yl(me, this), me.deps ? (n.prevDep = me.depsTail, me.depsTail.nextDep = n, me.depsTail = n) : me.deps = me.depsTail = n, So(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = me.depsTail, n.nextDep = void 0, me.depsTail.nextDep = n, me.depsTail = n, me.deps === n && (me.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Hn++, this.notify(t);
  }
  notify(t) {
    Ps();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Is();
    }
  }
}
function So(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        So(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ms = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ Symbol(
  ""
), gs = /* @__PURE__ */ Symbol(
  ""
), jn = /* @__PURE__ */ Symbol(
  ""
);
function Fe(e, t, n) {
  if (ft && me) {
    let r = ms.get(e);
    r || ms.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new vo()), s.map = r, s.key = n), s.track();
  }
}
function wt(e, t, n, r, s, i) {
  const o = ms.get(e);
  if (!o) {
    Hn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Ps(), t === "clear")
    o.forEach(l);
  else {
    const c = G(e), m = c && Os(n);
    if (c && n === "length") {
      const d = Number(r);
      o.forEach((y, I) => {
        (I === "length" || I === jn || !Et(I) && I >= d) && l(y);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), m && l(o.get(jn)), t) {
        case "add":
          c ? m && l(o.get("length")) : (l(o.get(Jt)), Ut(e) && l(o.get(gs)));
          break;
        case "delete":
          c || (l(o.get(Jt)), Ut(e) && l(o.get(gs)));
          break;
        case "set":
          Ut(e) && l(o.get(Jt));
          break;
      }
  }
  Is();
}
function cn(e) {
  const t = /* @__PURE__ */ ue(e);
  return t === e ? t : (Fe(t, "iterate", jn), /* @__PURE__ */ dt(e) ? t : t.map(It));
}
function Rr(e) {
  return Fe(e = /* @__PURE__ */ ue(e), "iterate", jn), e;
}
function yt(e, t) {
  return /* @__PURE__ */ Ht(e) ? bn(/* @__PURE__ */ Zt(e) ? It(t) : t) : It(t);
}
const Xl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Jr(this, Symbol.iterator, (e) => yt(this, e));
  },
  concat(...e) {
    return cn(this).concat(
      ...e.map((t) => G(t) ? cn(t) : t)
    );
  },
  entries() {
    return Jr(this, "entries", (e) => (e[1] = yt(this, e[1]), e));
  },
  every(e, t) {
    return vt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return vt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => yt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return vt(
      this,
      "find",
      e,
      t,
      (n) => yt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return vt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return vt(
      this,
      "findLast",
      e,
      t,
      (n) => yt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return vt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return vt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Zr(this, "includes", e);
  },
  indexOf(...e) {
    return Zr(this, "indexOf", e);
  },
  join(e) {
    return cn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Zr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return vt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return An(this, "pop");
  },
  push(...e) {
    return An(this, "push", e);
  },
  reduce(e, ...t) {
    return fi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fi(this, "reduceRight", e, t);
  },
  shift() {
    return An(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return vt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return An(this, "splice", e);
  },
  toReversed() {
    return cn(this).toReversed();
  },
  toSorted(e) {
    return cn(this).toSorted(e);
  },
  toSpliced(...e) {
    return cn(this).toSpliced(...e);
  },
  unshift(...e) {
    return An(this, "unshift", e);
  },
  values() {
    return Jr(this, "values", (e) => yt(this, e));
  }
};
function Jr(e, t, n) {
  const r = Rr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ dt(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Jl = Array.prototype;
function vt(e, t, n, r, s, i) {
  const o = Rr(e), l = o !== e && !/* @__PURE__ */ dt(e), c = o[t];
  if (c !== Jl[t]) {
    const y = c.apply(e, i);
    return l ? It(y) : y;
  }
  let m = n;
  o !== e && (l ? m = function(y, I) {
    return n.call(this, yt(e, y), I, e);
  } : n.length > 2 && (m = function(y, I) {
    return n.call(this, y, I, e);
  }));
  const d = c.call(o, m, r);
  return l && s ? s(d) : d;
}
function fi(e, t, n, r) {
  const s = Rr(e), i = s !== e && !/* @__PURE__ */ dt(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(m, d, y) {
    return l && (l = !1, m = yt(e, m)), n.call(this, m, yt(e, d), y, e);
  }) : n.length > 3 && (o = function(m, d, y) {
    return n.call(this, m, d, y, e);
  }));
  const c = s[t](o, ...r);
  return l ? yt(e, c) : c;
}
function Zr(e, t, n) {
  const r = /* @__PURE__ */ ue(e);
  Fe(r, "iterate", jn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ ue(n[0]), r[t](...n)) : s;
}
function An(e, t, n = []) {
  Rt(), Ps();
  const r = (/* @__PURE__ */ ue(e))[t].apply(e, n);
  return Is(), Pt(), r;
}
const Zl = /* @__PURE__ */ ws("__proto__,__v_isRef,__isVue"), Ao = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Et)
);
function Ql(e) {
  Et(e) || (e = String(e));
  const t = /* @__PURE__ */ ue(this);
  return Fe(t, "has", e), t.hasOwnProperty(e);
}
class xo {
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
      return r === (s ? i ? ca : Ro : i ? Oo : Co).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = G(t);
    if (!s) {
      let c;
      if (o && (c = Xl[n]))
        return c;
      if (n === "hasOwnProperty")
        return Ql;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ge(t) ? t : r
    );
    if ((Et(n) ? Ao.has(n) : Zl(n)) || (s || Fe(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ Ge(l)) {
      const c = o && Os(n) ? l : l.value;
      return s && fe(c) ? /* @__PURE__ */ ys(c) : c;
    }
    return fe(l) ? s ? /* @__PURE__ */ ys(l) : /* @__PURE__ */ $n(l) : l;
  }
}
class wo extends xo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = G(t) && Os(n);
    if (!this._isShallow) {
      const m = /* @__PURE__ */ Ht(i);
      if (!/* @__PURE__ */ dt(r) && !/* @__PURE__ */ Ht(r) && (i = /* @__PURE__ */ ue(i), r = /* @__PURE__ */ ue(r)), !o && /* @__PURE__ */ Ge(i) && !/* @__PURE__ */ Ge(r))
        return m || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : le(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Ge(t) ? t : s
    );
    return t === /* @__PURE__ */ ue(s) && c && (l ? xt(r, i) && wt(t, "set", n, r) : wt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = le(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && wt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Et(n) || !Ao.has(n)) && Fe(t, "has", n), r;
  }
  ownKeys(t) {
    return Fe(
      t,
      "iterate",
      G(t) ? "length" : Jt
    ), Reflect.ownKeys(t);
  }
}
class ea extends xo {
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
const ta = /* @__PURE__ */ new wo(), na = /* @__PURE__ */ new ea(), ra = /* @__PURE__ */ new wo(!0);
const bs = (e) => e, ir = (e) => Reflect.getPrototypeOf(e);
function sa(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ ue(s), o = Ut(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, m = s[e](...r), d = n ? bs : t ? bn : It;
    return !t && Fe(
      i,
      "iterate",
      c ? gs : Jt
    ), Ue(
      // inheriting all iterator properties
      Object.create(m),
      {
        // iterator protocol
        next() {
          const { value: y, done: I } = m.next();
          return I ? { value: y, done: I } : {
            value: l ? [d(y[0]), d(y[1])] : d(y),
            done: I
          };
        }
      }
    );
  };
}
function or(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ia(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ue(i), l = /* @__PURE__ */ ue(s);
      e || (xt(s, l) && Fe(o, "get", s), Fe(o, "get", l));
      const { has: c } = ir(o), m = t ? bs : e ? bn : It;
      if (c.call(o, s))
        return m(i.get(s));
      if (c.call(o, l))
        return m(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Fe(/* @__PURE__ */ ue(s), "iterate", Jt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ue(i), l = /* @__PURE__ */ ue(s);
      return e || (xt(s, l) && Fe(o, "has", s), Fe(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ ue(l), m = t ? bs : e ? bn : It;
      return !e && Fe(c, "iterate", Jt), l.forEach((d, y) => s.call(i, m(d), m(y), o));
    }
  };
  return Ue(
    n,
    e ? {
      add: or("add"),
      set: or("set"),
      delete: or("delete"),
      clear: or("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ ue(this), o = ir(i), l = /* @__PURE__ */ ue(s), c = !t && !/* @__PURE__ */ dt(s) && !/* @__PURE__ */ Ht(s) ? l : s;
        return o.has.call(i, c) || xt(s, c) && o.has.call(i, s) || xt(l, c) && o.has.call(i, l) || (i.add(c), wt(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ dt(i) && !/* @__PURE__ */ Ht(i) && (i = /* @__PURE__ */ ue(i));
        const o = /* @__PURE__ */ ue(this), { has: l, get: c } = ir(o);
        let m = l.call(o, s);
        m || (s = /* @__PURE__ */ ue(s), m = l.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), m ? xt(i, d) && wt(o, "set", s, i) : wt(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ ue(this), { has: o, get: l } = ir(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ ue(s), c = o.call(i, s)), l && l.call(i, s);
        const m = i.delete(s);
        return c && wt(i, "delete", s, void 0), m;
      },
      clear() {
        const s = /* @__PURE__ */ ue(this), i = s.size !== 0, o = s.clear();
        return i && wt(
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
    n[s] = sa(s, e, t);
  }), n;
}
function Ds(e, t) {
  const n = ia(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    le(n, s) && s in r ? n : r,
    s,
    i
  );
}
const oa = {
  get: /* @__PURE__ */ Ds(!1, !1)
}, la = {
  get: /* @__PURE__ */ Ds(!1, !0)
}, aa = {
  get: /* @__PURE__ */ Ds(!0, !1)
};
const Co = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap(), Ro = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap();
function ua(e) {
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
function $n(e) {
  return /* @__PURE__ */ Ht(e) ? e : Ms(
    e,
    !1,
    ta,
    oa,
    Co
  );
}
// @__NO_SIDE_EFFECTS__
function fa(e) {
  return Ms(
    e,
    !1,
    ra,
    la,
    Oo
  );
}
// @__NO_SIDE_EFFECTS__
function ys(e) {
  return Ms(
    e,
    !0,
    na,
    aa,
    Ro
  );
}
function Ms(e, t, n, r, s) {
  if (!fe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const o = ua(Ll(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
  return /* @__PURE__ */ Ht(e) ? /* @__PURE__ */ Zt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ue(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ue(t) : e;
}
function da(e) {
  return !le(e, "__v_skip") && Object.isExtensible(e) && uo(e, "__v_skip", !0), e;
}
const It = (e) => fe(e) ? /* @__PURE__ */ $n(e) : e, bn = (e) => fe(e) ? /* @__PURE__ */ ys(e) : e;
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function M(e) {
  return /* @__PURE__ */ Ge(e) ? e.value : e;
}
const pa = {
  get: (e, t, n) => t === "__v_raw" ? e : M(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ Ge(s) && !/* @__PURE__ */ Ge(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Po(e) {
  return /* @__PURE__ */ Zt(e) ? e : new Proxy(e, pa);
}
class ha {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new vo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Hn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    me !== this)
      return bo(this, !0), !0;
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
function ma(e, t, n = !1) {
  let r, s;
  return Q(e) ? r = e : (r = e.get, s = e.set), new ha(r, s, n);
}
const lr = {}, mr = /* @__PURE__ */ new WeakMap();
let Kt;
function ga(e, t = !1, n = Kt) {
  if (n) {
    let r = mr.get(n);
    r || mr.set(n, r = []), r.push(e);
  }
}
function ba(e, t, n = de) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, m = (A) => s ? A : /* @__PURE__ */ dt(A) || s === !1 || s === 0 ? Ct(A, 1) : Ct(A);
  let d, y, I, k, K = !1, F = !1;
  if (/* @__PURE__ */ Ge(e) ? (y = () => e.value, K = /* @__PURE__ */ dt(e)) : /* @__PURE__ */ Zt(e) ? (y = () => m(e), K = !0) : G(e) ? (F = !0, K = e.some((A) => /* @__PURE__ */ Zt(A) || /* @__PURE__ */ dt(A)), y = () => e.map((A) => {
    if (/* @__PURE__ */ Ge(A))
      return A.value;
    if (/* @__PURE__ */ Zt(A))
      return m(A);
    if (Q(A))
      return c ? c(A, 2) : A();
  })) : Q(e) ? t ? y = c ? () => c(e, 2) : e : y = () => {
    if (I) {
      Rt();
      try {
        I();
      } finally {
        Pt();
      }
    }
    const A = Kt;
    Kt = d;
    try {
      return c ? c(e, 3, [k]) : e(k);
    } finally {
      Kt = A;
    }
  } : y = Tt, t && s) {
    const A = y, X = s === !0 ? 1 / 0 : s;
    y = () => Ct(A(), X);
  }
  const U = Kl(), te = () => {
    d.stop(), U && U.active && Cs(U.effects, d);
  };
  if (i && t) {
    const A = t;
    t = (...X) => {
      const oe = A(...X);
      return te(), oe;
    };
  }
  let Y = F ? new Array(e.length).fill(lr) : lr;
  const z = (A) => {
    if (!(!(d.flags & 1) || !d.dirty && !A))
      if (t) {
        const X = d.run();
        if (A || s || K || (F ? X.some((oe, re) => xt(oe, Y[re])) : xt(X, Y))) {
          I && I();
          const oe = Kt;
          Kt = d;
          try {
            const re = [
              X,
              // pass undefined as the old value when it's changed for the first time
              Y === lr ? void 0 : F && Y[0] === lr ? [] : Y,
              k
            ];
            Y = X, c ? c(t, 3, re) : (
              // @ts-expect-error
              t(...re)
            );
          } finally {
            Kt = oe;
          }
        }
      } else
        d.run();
  };
  return l && l(z), d = new mo(y), d.scheduler = o ? () => o(z, !1) : z, k = (A) => ga(A, !1, d), I = d.onStop = () => {
    const A = mr.get(d);
    if (A) {
      if (c)
        c(A, 4);
      else
        for (const X of A) X();
      mr.delete(d);
    }
  }, t ? r ? z(!0) : Y = d.run() : o ? o(z.bind(null, !0), !0) : d.run(), te.pause = d.pause.bind(d), te.resume = d.resume.bind(d), te.stop = te, te;
}
function Ct(e, t = 1 / 0, n) {
  if (t <= 0 || !fe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ge(e))
    Ct(e.value, t, n);
  else if (G(e))
    for (let r = 0; r < e.length; r++)
      Ct(e[r], t, n);
  else if (en(e) || Ut(e))
    e.forEach((r) => {
      Ct(r, t, n);
    });
  else if (ao(e)) {
    for (const r in e)
      Ct(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Ct(e[r], t, n);
  }
  return e;
}
function Kn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Pr(s, t, n);
  }
}
function pt(e, t, n, r) {
  if (Q(e)) {
    const s = Kn(e, t, n, r);
    return s && oo(s) && s.catch((i) => {
      Pr(i, t, n);
    }), s;
  }
  if (G(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(pt(e[i], t, n, r));
    return s;
  }
}
function Pr(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || de;
  if (t) {
    let l = t.parent;
    const c = t.proxy, m = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let y = 0; y < d.length; y++)
          if (d[y](e, c, m) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Rt(), Kn(i, null, 10, [
        e,
        c,
        m
      ]), Pt();
      return;
    }
  }
  ya(e, n, s, r, o);
}
function ya(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const Be = [];
let bt = -1;
const hn = [];
let Ft = null, fn = 0;
const Io = /* @__PURE__ */ Promise.resolve();
let gr = null;
function No(e) {
  const t = gr || Io;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function _a(e) {
  let t = bt + 1, n = Be.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = Be[r], i = Vn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = Vn(e), n = Be[Be.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Vn(n) ? Be.push(e) : Be.splice(_a(t), 0, e), e.flags |= 1, Do();
  }
}
function Do() {
  gr || (gr = Io.then(Lo));
}
function Ta(e) {
  if (!G(e))
    Ft && e.id === -1 ? Ft.splice(fn + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      hn.push(e[t]);
  Do();
}
function di(e, t, n = bt + 1) {
  for (; n < Be.length; n++) {
    const r = Be[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Be.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Mo(e) {
  if (hn.length) {
    const t = [...new Set(hn)].sort(
      (n, r) => Vn(n) - Vn(r)
    );
    if (hn.length = 0, Ft) {
      for (let n = 0; n < t.length; n++)
        Ft.push(t[n]);
      return;
    }
    for (Ft = t, fn = 0; fn < Ft.length; fn++) {
      const n = Ft[fn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ft = null, fn = 0;
  }
}
const Vn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Lo(e) {
  try {
    for (bt = 0; bt < Be.length; bt++) {
      const t = Be[bt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Kn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; bt < Be.length; bt++) {
      const t = Be[bt];
      t && (t.flags &= -2);
    }
    bt = -1, Be.length = 0, Mo(), gr = null, (Be.length || hn.length) && Lo();
  }
}
let ot = null, Fo = null;
function br(e) {
  const t = ot;
  return ot = e, Fo = e && e.type.__scopeId || null, t;
}
function Ea(e, t = ot, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Si(-1);
    const i = br(t), o = Qt.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = Qt.length; c > o; c--) ol();
      br(i), r._d && Si(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function $e(e, t) {
  if (ot === null)
    return e;
  const n = Lr(ot), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = de] = t[s];
    i && (Q(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ct(o), r.push({
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
function Bt(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[r];
    c && (Rt(), pt(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Pt());
  }
}
function va(e, t) {
  if (We) {
    let n = We.provides;
    const r = We.parent && We.parent.provides;
    r === n && (n = We.provides = Object.create(r)), n[e] = t;
  }
}
function dr(e, t, n = !1) {
  const r = Tc();
  if (r || mn) {
    let s = mn ? mn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && Q(t) ? t.call(r && r.proxy) : t;
  }
}
const Sa = /* @__PURE__ */ Symbol.for("v-scx"), Aa = () => dr(Sa);
function Qr(e, t, n) {
  return Uo(e, t, n);
}
function Uo(e, t, n = de) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = Ue({}, n), c = t && r || !t && i !== "post";
  let m;
  if (Wn) {
    if (i === "sync") {
      const k = Aa();
      m = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!c) {
      const k = () => {
      };
      return k.stop = Tt, k.resume = Tt, k.pause = Tt, k;
    }
  }
  const d = We;
  l.call = (k, K, F) => pt(k, d, K, F);
  let y = !1;
  i === "post" ? l.scheduler = (k) => {
    Xe(k, d && d.suspense);
  } : i !== "sync" && (y = !0, l.scheduler = (k, K) => {
    K ? k() : Fs(k);
  }), l.augmentJob = (k) => {
    t && (k.flags |= 4), y && (k.flags |= 2, d && (k.id = d.uid, k.i = d));
  };
  const I = ba(e, t, l);
  return Wn && (m ? m.push(I) : c && I()), I;
}
function xa(e, t, n) {
  const r = this.proxy, s = Se(e) ? e.includes(".") ? ko(r, e) : () => r[e] : e.bind(r, r);
  let i;
  Q(t) ? i = t : (i = t.handler, n = t);
  const o = qn(this), l = Uo(s, i.bind(r), n);
  return o(), l;
}
function ko(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const wa = /* @__PURE__ */ Symbol("_vte"), Ir = (e) => e.__isTeleport, es = /* @__PURE__ */ Symbol("_leaveCb");
function Ca(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Nt) {
        t = n;
        break;
      }
  }
  return t;
}
function Ho(e) {
  if (!ks(e))
    return Ir(e.type) && e.children ? Ca(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Q(n.default))
      return n.default();
  }
}
function Us(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Us(
      Ir(n.type) && Ho(n) || n,
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
const yr = /* @__PURE__ */ new WeakMap();
function Ln(e, t, n, r, s = !1) {
  if (G(e)) {
    e.forEach(
      (F, U) => Ln(
        F,
        t && (G(t) ? t[U] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (Fn(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ln(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Lr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, m = t && t.r, d = l.refs === de ? l.refs = {} : l.refs, y = l.setupState, I = /* @__PURE__ */ ue(y), k = y === de ? io : (F) => pi(d, F) ? !1 : le(I, F), K = (F, U) => !(U && pi(d, U));
  if (m != null && m !== c) {
    if (hi(t), Se(m))
      d[m] = null, k(m) && (y[m] = null);
    else if (/* @__PURE__ */ Ge(m)) {
      const F = t;
      K(m, F.k) && (m.value = null), F.k && (d[F.k] = null);
    }
  }
  if (Q(c))
    Kn(c, l, 12, [o, d]);
  else {
    const F = Se(c), U = /* @__PURE__ */ Ge(c);
    if (F || U) {
      const te = () => {
        if (e.f) {
          const Y = F ? k(c) ? y[c] : d[c] : K() || !e.k ? c.value : d[e.k];
          if (s)
            G(Y) && Cs(Y, i);
          else if (G(Y))
            Y.includes(i) || Y.push(i);
          else if (F)
            d[c] = [i], k(c) && (y[c] = d[c]);
          else {
            const z = [i];
            K(c, e.k) && (c.value = z), e.k && (d[e.k] = z);
          }
        } else F ? (d[c] = o, k(c) && (y[c] = o)) : U && (K(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const Y = () => {
          te(), yr.delete(e);
        };
        Y.id = -1, yr.set(e, Y), Xe(Y, n);
      } else
        hi(e), te();
    }
  }
}
function hi(e) {
  const t = yr.get(e);
  t && (t.flags |= 8, yr.delete(e));
}
Or().requestIdleCallback;
Or().cancelIdleCallback;
const Fn = (e) => !!e.type.__asyncLoader, ks = (e) => e.type.__isKeepAlive;
function Oa(e, t) {
  $o(e, "a", t);
}
function Ra(e, t) {
  $o(e, "da", t);
}
function $o(e, t, n = We) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Nr(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      ks(s.parent.vnode) && Pa(r, t, n, s), s = s.parent;
  }
}
function Pa(e, t, n, r) {
  const s = Nr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Vo(() => {
    Cs(r[t], s);
  }, n);
}
function Nr(e, t, n = We, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Rt();
      const l = qn(n), c = pt(t, n, e, o);
      return l(), Pt(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Dt = (e) => (t, n = We) => {
  (!Wn || e === "sp") && Nr(e, (...r) => t(...r), n);
}, Ia = Dt("bm"), Na = Dt("m"), Da = Dt(
  "bu"
), Ma = Dt("u"), La = Dt(
  "bum"
), Vo = Dt("um"), Fa = Dt(
  "sp"
), Ua = Dt("rtg"), ka = Dt("rtc");
function Ha(e, t = We) {
  Nr("ec", e, t);
}
const ja = /* @__PURE__ */ Symbol.for("v-ndc");
function Ve(e, t, n, r) {
  let s;
  const i = n, o = G(e);
  if (o || Se(e)) {
    const l = o && /* @__PURE__ */ Zt(e);
    let c = !1, m = !1;
    l && (c = !/* @__PURE__ */ dt(e), m = /* @__PURE__ */ Ht(e), e = Rr(e)), s = new Array(e.length);
    for (let d = 0, y = e.length; d < y; d++)
      s[d] = t(
        c ? m ? bn(It(e[d])) : It(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (fe(e))
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
const _s = (e) => e ? ul(e) ? Lr(e) : _s(e.parent) : null, Un = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ue(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => Bo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = No.bind(e.proxy)),
    $watch: (e) => xa.bind(e)
  })
), ts = (e, t) => e !== de && !e.__isScriptSetup && le(e, t), $a = {
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
        if (s !== de && le(s, t))
          return o[t] = 2, s[t];
        if (le(i, t))
          return o[t] = 3, i[t];
        if (n !== de && le(n, t))
          return o[t] = 4, n[t];
        Ts && (o[t] = 0);
      }
    }
    const m = Un[t];
    let d, y;
    if (m)
      return t === "$attrs" && Fe(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== de && le(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      y = c.config.globalProperties, le(y, t)
    )
      return y[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return ts(s, t) ? (s[t] = n, !0) : r !== de && le(r, t) ? (r[t] = n, !0) : le(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== de && l[0] !== "$" && le(e, l) || ts(t, l) || le(i, l) || le(r, l) || le(Un, l) || le(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : le(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function mi(e) {
  return G(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Ts = !0;
function Va(e) {
  const t = Bo(e), n = e.proxy, r = e.ctx;
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
    beforeMount: y,
    mounted: I,
    beforeUpdate: k,
    updated: K,
    activated: F,
    deactivated: U,
    beforeDestroy: te,
    beforeUnmount: Y,
    destroyed: z,
    unmounted: A,
    render: X,
    renderTracked: oe,
    renderTriggered: re,
    errorCaptured: J,
    serverPrefetch: ae,
    // public API
    expose: Te,
    inheritAttrs: De,
    // assets
    components: Pe,
    directives: Ce,
    filters: lt
  } = t;
  if (m && za(m, r, null), o)
    for (const p in o) {
      const ee = o[p];
      Q(ee) && (r[p] = ee.bind(n));
    }
  if (s) {
    const p = s.call(n, n);
    fe(p) && (e.data = /* @__PURE__ */ $n(p));
  }
  if (Ts = !0, i)
    for (const p in i) {
      const ee = i[p], ke = Q(ee) ? ee.bind(n, n) : Q(ee.get) ? ee.get.bind(n, n) : Tt, at = !Q(ee) && Q(ee.set) ? ee.set.bind(n) : Tt, Ze = xe({
        get: ke,
        set: at
      });
      Object.defineProperty(r, p, {
        enumerable: !0,
        configurable: !0,
        get: () => Ze.value,
        set: (st) => Ze.value = st
      });
    }
  if (l)
    for (const p in l)
      zo(l[p], r, n, p);
  if (c) {
    const p = Q(c) ? c.call(n) : c;
    Reflect.ownKeys(p).forEach((ee) => {
      va(ee, p[ee]);
    });
  }
  d && gi(d, e, "c");
  function N(p, ee) {
    G(ee) ? ee.forEach((ke) => p(ke.bind(n))) : ee && p(ee.bind(n));
  }
  if (N(Ia, y), N(Na, I), N(Da, k), N(Ma, K), N(Oa, F), N(Ra, U), N(Ha, J), N(ka, oe), N(Ua, re), N(La, Y), N(Vo, A), N(Fa, ae), G(Te))
    if (Te.length) {
      const p = e.exposed || (e.exposed = {});
      Te.forEach((ee) => {
        Object.defineProperty(p, ee, {
          get: () => n[ee],
          set: (ke) => n[ee] = ke,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  X && e.render === Tt && (e.render = X), De != null && (e.inheritAttrs = De), Pe && (e.components = Pe), Ce && (e.directives = Ce), ae && jo(e);
}
function za(e, t, n = Tt) {
  G(e) && (e = Es(e));
  for (const r in e) {
    const s = e[r];
    let i;
    fe(s) ? "default" in s ? i = dr(
      s.from || r,
      s.default,
      !0
    ) : i = dr(s.from || r) : i = dr(s), /* @__PURE__ */ Ge(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function gi(e, t, n) {
  pt(
    G(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zo(e, t, n, r) {
  let s = r.includes(".") ? ko(n, r) : () => n[r];
  if (Se(e)) {
    const i = t[e];
    Q(i) && Qr(s, i);
  } else if (Q(e))
    Qr(s, e.bind(n));
  else if (fe(e))
    if (G(e))
      e.forEach((i) => zo(i, t, n, r));
    else {
      const i = Q(e.handler) ? e.handler.bind(n) : t[e.handler];
      Q(i) && Qr(s, i, e);
    }
}
function Bo(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach(
    (m) => _r(c, m, o, !0)
  ), _r(c, t, o)), fe(t) && i.set(t, c), c;
}
function _r(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && _r(e, i, n, !0), s && s.forEach(
    (o) => _r(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = Ba[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Ba = {
  data: bi,
  props: yi,
  emits: yi,
  // objects
  methods: Rn,
  computed: Rn,
  // lifecycle
  beforeCreate: ze,
  created: ze,
  beforeMount: ze,
  mounted: ze,
  beforeUpdate: ze,
  updated: ze,
  beforeDestroy: ze,
  beforeUnmount: ze,
  destroyed: ze,
  unmounted: ze,
  activated: ze,
  deactivated: ze,
  errorCaptured: ze,
  serverPrefetch: ze,
  // assets
  components: Rn,
  directives: Rn,
  // watch
  watch: Ga,
  // provide / inject
  provide: bi,
  inject: Wa
};
function bi(e, t) {
  return t ? e ? function() {
    return Ue(
      Q(e) ? e.call(this, this) : e,
      Q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Wa(e, t) {
  return Rn(Es(e), Es(t));
}
function Es(e) {
  if (G(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ze(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Rn(e, t) {
  return e ? Ue(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function yi(e, t) {
  return e ? G(e) && G(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ue(
    /* @__PURE__ */ Object.create(null),
    mi(e),
    mi(t ?? {})
  ) : t;
}
function Ga(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ue(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = ze(e[r], t[r]);
  return n;
}
function Wo() {
  return {
    app: null,
    config: {
      isNativeTag: io,
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
let Ka = 0;
function qa(e, t) {
  return function(r, s = null) {
    Q(r) || (r = Ue({}, r)), s != null && !fe(s) && (s = null);
    const i = Wo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const m = i.app = {
      _uid: Ka++,
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
      use(d, ...y) {
        return o.has(d) || (d && Q(d.install) ? (o.add(d), d.install(m, ...y)) : Q(d) && (o.add(d), d(m, ...y))), m;
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), m;
      },
      component(d, y) {
        return y ? (i.components[d] = y, m) : i.components[d];
      },
      directive(d, y) {
        return y ? (i.directives[d] = y, m) : i.directives[d];
      },
      mount(d, y, I) {
        if (!c) {
          const k = m._ceVNode || Ot(r, s);
          return k.appContext = i, I === !0 ? I = "svg" : I === !1 && (I = void 0), e(k, d, I), c = !0, m._container = d, d.__vue_app__ = m, Lr(k.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c && (pt(
          l,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(d, y) {
        return i.provides[d] = y, m;
      },
      runWithContext(d) {
        const y = mn;
        mn = m;
        try {
          return d();
        } finally {
          mn = y;
        }
      }
    };
    return m;
  };
}
let mn = null;
const Ya = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ut(t)}Modifiers`] || e[`${tn(t)}Modifiers`];
function Xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || de;
  let s = n;
  const i = t.startsWith("update:"), o = i && Ya(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => Se(d) ? d.trim() : d)), o.number && (s = s.map(Cr)));
  let l, c = r[l = qr(t)] || // also try camelCase event handler (#2249)
  r[l = qr(ut(t))];
  !c && i && (c = r[l = qr(tn(t))]), c && pt(
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
    e.emitted[l] = !0, pt(
      m,
      e,
      6,
      s
    );
  }
}
const Ja = /* @__PURE__ */ new WeakMap();
function Go(e, t, n = !1) {
  const r = n ? Ja : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {}, l = !1;
  if (!Q(e)) {
    const c = (m) => {
      const d = Go(m, t, !0);
      d && (l = !0, Ue(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (fe(e) && r.set(e, null), null) : (G(i) ? i.forEach((c) => o[c] = null) : Ue(o, i), fe(e) && r.set(e, o), o);
}
function Dr(e, t) {
  return !e || !Ar(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), le(e, t[0].toLowerCase() + t.slice(1)) || le(e, tn(t)) || le(e, t));
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
    props: y,
    data: I,
    setupState: k,
    ctx: K,
    inheritAttrs: F
  } = e, U = br(e);
  let te, Y;
  try {
    if (n.shapeFlag & 4) {
      const A = s || r, X = A;
      te = _t(
        m.call(
          X,
          A,
          d,
          y,
          k,
          I,
          K
        )
      ), Y = l;
    } else {
      const A = t;
      te = _t(
        A.length > 1 ? A(
          y,
          { attrs: l, slots: o, emit: c }
        ) : A(
          y,
          null
        )
      ), Y = t.props ? l : Za(l);
    }
  } catch (A) {
    Qt.length = 0, Pr(A, e, 1), te = Ot(Nt);
  }
  let z = te;
  if (Y && F !== !1) {
    const A = Object.keys(Y), { shapeFlag: X } = z;
    A.length && X & 7 && (i && A.some(xr) && (Y = Qa(
      Y,
      i
    )), z = yn(z, Y, !1, !0));
  }
  if (n.dirs && (z = yn(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const A = Ir(z.type) && Ho(z) || z;
    Us(A, n.transition);
  }
  return te = z, br(U), te;
}
const Za = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ar(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Qa = (e, t) => {
  const n = {};
  for (const r in e)
    (!xr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function ec(e, t, n) {
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
      for (let y = 0; y < d.length; y++) {
        const I = d[y];
        if (Ko(o, r, I) && !Dr(m, I))
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
    if (Ko(t, e, i) && !Dr(n, i))
      return !0;
  }
  return !1;
}
function Ko(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && fe(r) && fe(s) ? !kt(r, s) : r !== s;
}
function tc({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = r, e = s), s === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const qo = {}, Yo = () => Object.create(qo), Xo = (e) => Object.getPrototypeOf(e) === qo;
function nc(e, t, n, r = !1) {
  const s = {}, i = Yo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Jo(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = r ? s : /* @__PURE__ */ fa(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function rc(e, t, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ ue(s), [c] = e.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let y = 0; y < d.length; y++) {
        let I = d[y];
        if (Dr(e.emitsOptions, I))
          continue;
        const k = t[I];
        if (c)
          if (le(i, I))
            k !== i[I] && (i[I] = k, m = !0);
          else {
            const K = ut(I);
            s[K] = vs(
              c,
              l,
              K,
              k,
              e,
              !1
            );
          }
        else
          k !== i[I] && (i[I] = k, m = !0);
      }
    }
  } else {
    Jo(e, t, s, i) && (m = !0);
    let d;
    for (const y in l)
      (!t || // for camelCase
      !le(t, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = tn(y)) === y || !le(t, d))) && (c ? n && // for camelCase
      (n[y] !== void 0 || // for kebab-case
      n[d] !== void 0) && (s[y] = vs(
        c,
        l,
        y,
        void 0,
        e,
        !0
      )) : delete s[y]);
    if (i !== l)
      for (const y in i)
        (!t || !le(t, y)) && (delete i[y], m = !0);
  }
  m && wt(e.attrs, "set", "");
}
function Jo(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Nn(c))
        continue;
      const m = t[c];
      let d;
      s && le(s, d = ut(c)) ? !i || !i.includes(d) ? n[d] = m : (l || (l = {}))[d] = m : Dr(e.emitsOptions, c) || (!(c in r) || m !== r[c]) && (r[c] = m, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ ue(n), m = l || de;
    for (let d = 0; d < i.length; d++) {
      const y = i[d];
      n[y] = vs(
        s,
        c,
        y,
        m[y],
        e,
        !le(m, y)
      );
    }
  }
  return o;
}
function vs(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = le(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && Q(c)) {
        const { propsDefaults: m } = s;
        if (n in m)
          r = m[n];
        else {
          const d = qn(s);
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
    ] && (r === "" || r === tn(n)) && (r = !0));
  }
  return r;
}
const sc = /* @__PURE__ */ new WeakMap();
function Zo(e, t, n = !1) {
  const r = n ? sc : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, l = [];
  let c = !1;
  if (!Q(e)) {
    const d = (y) => {
      c = !0;
      const [I, k] = Zo(y, t, !0);
      Ue(o, I), k && l.push(...k);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c)
    return fe(e) && r.set(e, pn), pn;
  if (G(i))
    for (let d = 0; d < i.length; d++) {
      const y = ut(i[d]);
      Ei(y) && (o[y] = de);
    }
  else if (i)
    for (const d in i) {
      const y = ut(d);
      if (Ei(y)) {
        const I = i[d], k = o[y] = G(I) || Q(I) ? { type: I } : Ue({}, I), K = k.type;
        let F = !1, U = !0;
        if (G(K))
          for (let te = 0; te < K.length; ++te) {
            const Y = K[te], z = Q(Y) && Y.name;
            if (z === "Boolean") {
              F = !0;
              break;
            } else z === "String" && (U = !1);
          }
        else
          F = Q(K) && K.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = F, k[
          1
          /* shouldCastTrue */
        ] = U, (F || le(k, "default")) && l.push(y);
      }
    }
  const m = [o, l];
  return fe(e) && r.set(e, m), m;
}
function Ei(e) {
  return e[0] !== "$" && !Nn(e);
}
const Hs = (e) => e === "_" || e === "_ctx" || e === "$stable", js = (e) => G(e) ? e.map(_t) : [_t(e)], ic = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ea((...s) => js(t(...s)), n);
  return r._c = !1, r;
}, Qo = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Hs(s)) continue;
    const i = e[s];
    if (Q(i))
      t[s] = ic(s, i, r);
    else if (i != null) {
      const o = js(i);
      t[s] = () => o;
    }
  }
}, el = (e, t) => {
  const n = js(t);
  e.slots.default = () => n;
}, tl = (e, t, n) => {
  for (const r in t)
    (n || !Hs(r)) && (e[r] = t[r]);
}, oc = (e, t, n) => {
  const r = e.slots = Yo();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (tl(r, t, n), n && uo(r, "_", s, !0)) : Qo(t, r);
  } else t && el(e, t);
}, lc = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = de;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : tl(s, t, n) : (i = !t.$stable, Qo(t, s)), o = t;
  } else t && (el(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !Hs(l) && o[l] == null && delete s[l];
}, Xe = dc;
function ac(e) {
  return cc(e);
}
function cc(e, t) {
  const n = Or();
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
    parentNode: y,
    nextSibling: I,
    setScopeId: k = Tt,
    insertStaticContent: K
  } = e, F = (u, f, g, x = null, b = null, v = null, O = void 0, R = null, P = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !xn(u, f) && (x = nn(u), st(u, b, v, !0), u = null), f.patchFlag === -2 && (P = !1, f.dynamicChildren = null);
    const { type: _, ref: B, shapeFlag: D } = f;
    switch (_) {
      case Mr:
        U(u, f, g, x);
        break;
      case Nt:
        te(u, f, g, x);
        break;
      case rs:
        u == null && Y(f, g, x, O);
        break;
      case ye:
        Pe(
          u,
          f,
          g,
          x,
          b,
          v,
          O,
          R,
          P
        );
        break;
      default:
        D & 1 ? X(
          u,
          f,
          g,
          x,
          b,
          v,
          O,
          R,
          P
        ) : D & 6 ? Ce(
          u,
          f,
          g,
          x,
          b,
          v,
          O,
          R,
          P
        ) : (D & 64 || D & 128) && _.process(
          u,
          f,
          g,
          x,
          b,
          v,
          O,
          R,
          P,
          $t
        );
    }
    B != null && b ? Ln(B, u && u.ref, v, f || u, !f) : B == null && u && u.ref != null && Ln(u.ref, null, v, u, !0);
  }, U = (u, f, g, x) => {
    if (u == null)
      r(
        f.el = l(f.children),
        g,
        x
      );
    else {
      const b = f.el = u.el;
      f.children !== u.children && m(b, f.children);
    }
  }, te = (u, f, g, x) => {
    u == null ? r(
      f.el = c(f.children || ""),
      g,
      x
    ) : f.el = u.el;
  }, Y = (u, f, g, x) => {
    [u.el, u.anchor] = K(
      u.children,
      f,
      g,
      x,
      u.el,
      u.anchor
    );
  }, z = ({ el: u, anchor: f }, g, x) => {
    let b;
    for (; u && u !== f; )
      b = I(u), r(u, g, x), u = b;
    r(f, g, x);
  }, A = ({ el: u, anchor: f }) => {
    let g;
    for (; u && u !== f; )
      g = I(u), s(u), u = g;
    s(f);
  }, X = (u, f, g, x, b, v, O, R, P) => {
    if (f.type === "svg" ? O = "svg" : f.type === "math" && (O = "mathml"), u == null)
      oe(
        f,
        g,
        x,
        b,
        v,
        O,
        R,
        P
      );
    else {
      const _ = u.el && u.el._isVueCE ? u.el : null;
      try {
        _ && _._beginPatch(), ae(
          u,
          f,
          b,
          v,
          O,
          R,
          P
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, oe = (u, f, g, x, b, v, O, R) => {
    let P, _;
    const { props: B, shapeFlag: D, transition: $, dirs: W } = u;
    if (P = u.el = o(
      u.type,
      v,
      B && B.is,
      B
    ), D & 8 ? d(P, u.children) : D & 16 && J(
      u.children,
      P,
      null,
      x,
      b,
      ns(u, v),
      O,
      R
    ), W && Bt(u, null, x, "created"), re(P, u, u.scopeId, O, x), B) {
      for (const se in B)
        se !== "value" && !Nn(se) && i(P, se, null, B[se], v, x);
      "value" in B && i(P, "value", null, B.value, v), (_ = B.onVnodeBeforeMount) && gt(_, x, u);
    }
    W && Bt(u, null, x, "beforeMount");
    const Z = uc(b, $);
    Z && $.beforeEnter(P), r(P, f, g), ((_ = B && B.onVnodeMounted) || Z || W) && Xe(() => {
      _ && gt(_, x, u), Z && $.enter(P), W && Bt(u, null, x, "mounted");
    }, b);
  }, re = (u, f, g, x, b) => {
    if (g && k(u, g), x)
      for (let v = 0; v < x.length; v++)
        k(u, x[v]);
    if (b) {
      let v = b.subTree;
      if (f === v || il(v.type) && (v.ssContent === f || v.ssFallback === f)) {
        const O = b.vnode;
        re(
          u,
          O,
          O.scopeId,
          O.slotScopeIds,
          b.parent
        );
      }
    }
  }, J = (u, f, g, x, b, v, O, R, P = 0) => {
    for (let _ = P; _ < u.length; _++) {
      const B = u[_] = R ? At(u[_]) : _t(u[_]);
      F(
        null,
        B,
        f,
        g,
        x,
        b,
        v,
        O,
        R
      );
    }
  }, ae = (u, f, g, x, b, v, O) => {
    const R = f.el = u.el;
    let { patchFlag: P, dynamicChildren: _, dirs: B } = f;
    P |= u.patchFlag & 16;
    const D = u.props || de, $ = f.props || de;
    let W;
    if (g && Wt(g, !1), (W = $.onVnodeBeforeUpdate) && gt(W, g, f, u), B && Bt(f, u, g, "beforeUpdate"), g && Wt(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    _ && (!u.dynamicChildren || u.dynamicChildren.length !== _.length) && (P = 0, O = !1, _ = null), (D.innerHTML && $.innerHTML == null || D.textContent && $.textContent == null) && d(R, ""), _ ? Te(
      u.dynamicChildren,
      _,
      R,
      g,
      x,
      ns(f, b),
      v
    ) : O || ee(
      u,
      f,
      R,
      null,
      g,
      x,
      ns(f, b),
      v,
      !1
    ), P > 0) {
      if (P & 16)
        De(R, D, $, g, b);
      else if (P & 2 && D.class !== $.class && i(R, "class", null, $.class, b), P & 4 && i(R, "style", D.style, $.style, b), P & 8) {
        const Z = f.dynamicProps;
        for (let se = 0; se < Z.length; se++) {
          const ne = Z[se], be = D[ne], Ee = $[ne];
          (Ee !== be || ne === "value") && i(R, ne, be, Ee, b, g);
        }
      }
      P & 1 && u.children !== f.children && d(R, f.children);
    } else !O && _ == null && De(R, D, $, g, b);
    ((W = $.onVnodeUpdated) || B) && Xe(() => {
      W && gt(W, g, f, u), B && Bt(f, u, g, "updated");
    }, x);
  }, Te = (u, f, g, x, b, v, O) => {
    for (let R = 0; R < f.length; R++) {
      const P = u[R], _ = f[R], B = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xn(P, _) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 198) ? y(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      F(
        P,
        _,
        B,
        null,
        x,
        b,
        v,
        O,
        !0
      );
    }
  }, De = (u, f, g, x, b) => {
    if (f !== g) {
      if (f !== de)
        for (const v in f)
          !Nn(v) && !(v in g) && i(
            u,
            v,
            f[v],
            null,
            b,
            x
          );
      for (const v in g) {
        if (Nn(v)) continue;
        const O = g[v], R = f[v];
        O !== R && v !== "value" && i(u, v, R, O, b, x);
      }
      "value" in g && i(u, "value", f.value, g.value, b);
    }
  }, Pe = (u, f, g, x, b, v, O, R, P) => {
    const _ = f.el = u ? u.el : l(""), B = f.anchor = u ? u.anchor : l("");
    let { patchFlag: D, dynamicChildren: $, slotScopeIds: W } = f;
    W && (R = R ? R.concat(W) : W), u == null ? (r(_, g, x), r(B, g, x), J(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      B,
      b,
      v,
      O,
      R,
      P
    )) : D > 0 && D & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === $.length ? (Te(
      u.dynamicChildren,
      $,
      g,
      b,
      v,
      O,
      R
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || b && f === b.subTree) && nl(
      u,
      f,
      !0
      /* shallow */
    )) : ee(
      u,
      f,
      g,
      B,
      b,
      v,
      O,
      R,
      P
    );
  }, Ce = (u, f, g, x, b, v, O, R, P) => {
    f.slotScopeIds = R, u == null ? f.shapeFlag & 512 ? b.ctx.activate(
      f,
      g,
      x,
      O,
      P
    ) : lt(
      f,
      g,
      x,
      b,
      v,
      O,
      P
    ) : ce(u, f, P);
  }, lt = (u, f, g, x, b, v, O) => {
    const R = u.component = _c(
      u,
      x,
      b
    );
    if (ks(u) && (R.ctx.renderer = $t), Ec(R, !1, O), R.asyncDep) {
      if (b && b.registerDep(R, N, O), !u.el) {
        const P = R.subTree = Ot(Nt);
        te(null, P, f, g), u.placeholder = P.el;
      }
    } else
      N(
        R,
        u,
        f,
        g,
        b,
        v,
        O
      );
  }, ce = (u, f, g) => {
    const x = f.component = u.component;
    if (ec(u, f, g))
      if (x.asyncDep && !x.asyncResolved) {
        p(x, f, g);
        return;
      } else
        x.next = f, x.update();
    else
      f.el = u.el, x.vnode = f;
  }, N = (u, f, g, x, b, v, O) => {
    const R = () => {
      if (u.isMounted) {
        let { next: D, bu: $, u: W, parent: Z, vnode: se } = u;
        {
          const Ke = rl(u);
          if (Ke) {
            D && (D.el = se.el, p(u, D, O)), Ke.asyncDep.then(() => {
              Xe(() => {
                u.isUnmounted || _();
              }, b);
            });
            return;
          }
        }
        let ne = D, be;
        Wt(u, !1), D ? (D.el = se.el, p(u, D, O)) : D = se, $ && fr($), (be = D.props && D.props.onVnodeBeforeUpdate) && gt(be, Z, D, se), Wt(u, !0);
        const Ee = _i(u), He = u.subTree;
        u.subTree = Ee, F(
          He,
          Ee,
          // parent may have changed if it's in a teleport
          y(He.el),
          // anchor may have changed if it's in a fragment
          nn(He),
          u,
          b,
          v
        ), D.el = Ee.el, ne === null && tc(u, Ee.el), W && Xe(W, b), (be = D.props && D.props.onVnodeUpdated) && Xe(
          () => gt(be, Z, D, se),
          b
        );
      } else {
        let D;
        const { el: $, props: W } = f, { bm: Z, m: se, parent: ne, root: be, type: Ee } = u, He = Fn(f);
        Wt(u, !1), Z && fr(Z), !He && (D = W && W.onVnodeBeforeMount) && gt(D, ne, f), Wt(u, !0);
        {
          be.ce && be.ce._hasShadowRoot() && be.ce._injectChildStyle(
            Ee,
            u.parent ? u.parent.type : void 0
          );
          const Ke = u.subTree = _i(u);
          F(
            null,
            Ke,
            g,
            x,
            u,
            b,
            v
          ), f.el = Ke.el;
        }
        if (se && Xe(se, b), !He && (D = W && W.onVnodeMounted)) {
          const Ke = f;
          Xe(
            () => gt(D, ne, Ke),
            b
          );
        }
        (f.shapeFlag & 256 || ne && Fn(ne.vnode) && ne.vnode.shapeFlag & 256) && u.a && Xe(u.a, b), u.isMounted = !0, f = g = x = null;
      }
    };
    u.scope.on();
    const P = u.effect = new mo(R);
    u.scope.off();
    const _ = u.update = P.run.bind(P), B = u.job = P.runIfDirty.bind(P);
    B.i = u, B.id = u.uid, P.scheduler = () => Fs(B), Wt(u, !0), _();
  }, p = (u, f, g) => {
    f.component = u;
    const x = u.vnode.props;
    u.vnode = f, u.next = null, rc(u, f.props, x, g), lc(u, f.children, g), Rt(), di(u), Pt();
  }, ee = (u, f, g, x, b, v, O, R, P = !1) => {
    const _ = u && u.children, B = u ? u.shapeFlag : 0, D = f.children, { patchFlag: $, shapeFlag: W } = f;
    if ($ > 0) {
      if ($ & 128) {
        at(
          _,
          D,
          g,
          x,
          b,
          v,
          O,
          R,
          P
        );
        return;
      } else if ($ & 256) {
        ke(
          _,
          D,
          g,
          x,
          b,
          v,
          O,
          R,
          P
        );
        return;
      }
    }
    W & 8 ? (B & 16 && jt(_, b, v), D !== _ && d(g, D)) : B & 16 ? W & 16 ? at(
      _,
      D,
      g,
      x,
      b,
      v,
      O,
      R,
      P
    ) : jt(_, b, v, !0) : (B & 8 && d(g, ""), W & 16 && J(
      D,
      g,
      x,
      b,
      v,
      O,
      R,
      P
    ));
  }, ke = (u, f, g, x, b, v, O, R, P) => {
    u = u || pn, f = f || pn;
    const _ = u.length, B = f.length, D = Math.min(_, B);
    let $;
    for ($ = 0; $ < D; $++) {
      const W = f[$] = P ? At(f[$]) : _t(f[$]);
      F(
        u[$],
        W,
        g,
        null,
        b,
        v,
        O,
        R,
        P
      );
    }
    _ > B ? jt(
      u,
      b,
      v,
      !0,
      !1,
      D
    ) : J(
      f,
      g,
      x,
      b,
      v,
      O,
      R,
      P,
      D
    );
  }, at = (u, f, g, x, b, v, O, R, P) => {
    let _ = 0;
    const B = f.length;
    let D = u.length - 1, $ = B - 1;
    for (; _ <= D && _ <= $; ) {
      const W = u[_], Z = f[_] = P ? At(f[_]) : _t(f[_]);
      if (xn(W, Z))
        F(
          W,
          Z,
          g,
          null,
          b,
          v,
          O,
          R,
          P
        );
      else
        break;
      _++;
    }
    for (; _ <= D && _ <= $; ) {
      const W = u[D], Z = f[$] = P ? At(f[$]) : _t(f[$]);
      if (xn(W, Z))
        F(
          W,
          Z,
          g,
          null,
          b,
          v,
          O,
          R,
          P
        );
      else
        break;
      D--, $--;
    }
    if (_ > D) {
      if (_ <= $) {
        const W = $ + 1, Z = W < B ? f[W].el : x;
        for (; _ <= $; )
          F(
            null,
            f[_] = P ? At(f[_]) : _t(f[_]),
            g,
            Z,
            b,
            v,
            O,
            R,
            P
          ), _++;
      }
    } else if (_ > $)
      for (; _ <= D; )
        st(u[_], b, v, !0), _++;
    else {
      const W = _, Z = _, se = /* @__PURE__ */ new Map();
      for (_ = Z; _ <= $; _++) {
        const Ie = f[_] = P ? At(f[_]) : _t(f[_]);
        Ie.key != null && se.set(Ie.key, _);
      }
      let ne, be = 0;
      const Ee = $ - Z + 1;
      let He = !1, Ke = 0;
      const it = new Array(Ee);
      for (_ = 0; _ < Ee; _++) it[_] = 0;
      for (_ = W; _ <= D; _++) {
        const Ie = u[_];
        if (be >= Ee) {
          st(Ie, b, v, !0);
          continue;
        }
        let Qe;
        if (Ie.key != null)
          Qe = se.get(Ie.key);
        else
          for (ne = Z; ne <= $; ne++)
            if (it[ne - Z] === 0 && xn(Ie, f[ne])) {
              Qe = ne;
              break;
            }
        Qe === void 0 ? st(Ie, b, v, !0) : (it[Qe - Z] = _ + 1, Qe >= Ke ? Ke = Qe : He = !0, F(
          Ie,
          f[Qe],
          g,
          null,
          b,
          v,
          O,
          R,
          P
        ), be++);
      }
      const Vt = He ? fc(it) : pn;
      for (ne = Vt.length - 1, _ = Ee - 1; _ >= 0; _--) {
        const Ie = Z + _, Qe = f[Ie], Tn = f[Ie + 1], En = Ie + 1 < B ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Tn.el || sl(Tn)
        ) : x;
        it[_] === 0 ? F(
          null,
          Qe,
          g,
          En,
          b,
          v,
          O,
          R,
          P
        ) : He && (ne < 0 || _ !== Vt[ne] ? Ze(Qe, g, En, 2) : ne--);
      }
    }
  }, Ze = (u, f, g, x, b = null) => {
    const { el: v, type: O, transition: R, children: P, shapeFlag: _ } = u;
    if (_ & 6) {
      Ze(u.component.subTree, f, g, x);
      return;
    }
    if (_ & 128) {
      u.suspense.move(f, g, x);
      return;
    }
    if (_ & 64) {
      O.move(u, f, g, $t);
      return;
    }
    if (O === ye) {
      r(v, f, g);
      for (let D = 0; D < P.length; D++)
        Ze(P[D], f, g, x);
      r(u.anchor, f, g);
      return;
    }
    if (O === rs) {
      z(u, f, g);
      return;
    }
    if (x !== 2 && _ & 1 && R)
      if (x === 0)
        R.persisted && !v[es] ? r(v, f, g) : (R.beforeEnter(v), r(v, f, g), Xe(() => R.enter(v), b));
      else {
        const { leave: D, delayLeave: $, afterLeave: W } = R, Z = () => {
          u.ctx.isUnmounted ? s(v) : r(v, f, g);
        }, se = () => {
          const ne = v._isLeaving || !!v[es];
          v._isLeaving && v[es](
            !0
            /* cancelled */
          ), R.persisted && !ne ? Z() : D(v, () => {
            Z(), W && W();
          });
        };
        $ ? $(v, Z, se) : se();
      }
    else
      r(v, f, g);
  }, st = (u, f, g, x = !1, b = !1) => {
    const {
      type: v,
      props: O,
      ref: R,
      children: P,
      dynamicChildren: _,
      shapeFlag: B,
      patchFlag: D,
      dirs: $,
      cacheIndex: W,
      memo: Z
    } = u;
    if (D === -2 && (b = !1), R != null && (Rt(), Ln(R, null, g, u, !0), Pt()), W != null && (f.renderCache[W] = void 0), B & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const se = B & 1 && $, ne = !Fn(u);
    let be;
    if (ne && (be = O && O.onVnodeBeforeUnmount) && gt(be, f, u), B & 6)
      Fr(u.component, g, x);
    else {
      if (B & 128) {
        u.suspense.unmount(g, x);
        return;
      }
      se && Bt(u, null, f, "beforeUnmount"), B & 64 ? u.type.remove(
        u,
        f,
        g,
        $t,
        x
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== ye || D > 0 && D & 64) ? jt(
        _,
        f,
        g,
        !1,
        !0
      ) : (v === ye && D & 384 || !b && B & 16) && jt(P, f, g), x && Yn(u);
    }
    const Ee = Z != null && W == null;
    (ne && (be = O && O.onVnodeUnmounted) || se || Ee) && Xe(() => {
      be && gt(be, f, u), se && Bt(u, null, f, "unmounted"), Ee && (u.el = null);
    }, g);
  }, Yn = (u) => {
    const { type: f, el: g, anchor: x, transition: b } = u;
    if (f === ye) {
      pe(g, x);
      return;
    }
    if (f === rs) {
      A(u);
      return;
    }
    const v = () => {
      s(g), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (u.shapeFlag & 1 && b && !b.persisted) {
      const { leave: O, delayLeave: R } = b, P = () => O(g, v);
      R ? R(u.el, v, P) : P();
    } else
      v();
  }, pe = (u, f) => {
    let g;
    for (; u !== f; )
      g = I(u), s(u), u = g;
    s(f);
  }, Fr = (u, f, g) => {
    const { bum: x, scope: b, job: v, subTree: O, um: R, m: P, a: _ } = u;
    vi(P), vi(_), x && fr(x), b.stop(), v && (v.flags |= 8, st(O, u, f, g)), R && Xe(R, f), Xe(() => {
      u.isUnmounted = !0;
    }, f);
  }, jt = (u, f, g, x = !1, b = !1, v = 0) => {
    for (let O = v; O < u.length; O++)
      st(u[O], f, g, x, b);
  }, nn = (u) => {
    if (u.shapeFlag & 6)
      return nn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = I(u.anchor || u.el), g = f && f[wa];
    return g ? I(g) : f;
  };
  let _n = !1;
  const Xn = (u, f, g) => {
    let x;
    u == null ? f._vnode && (st(f._vnode, null, null, !0), x = f._vnode.component) : F(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      g
    ), f._vnode = u, _n || (_n = !0, di(x), Mo(), _n = !1);
  }, $t = {
    p: F,
    um: st,
    m: Ze,
    r: Yn,
    mt: lt,
    mc: J,
    pc: ee,
    pbc: Te,
    n: nn,
    o: e
  };
  return {
    render: Xn,
    hydrate: void 0,
    createApp: qa(Xn)
  };
}
function ns({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Wt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function uc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function nl(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (G(r) && G(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = At(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && nl(o, l)), l.type === Mr && (l.patchFlag === -1 && (l = s[i] = At(l)), l.el = o.el), l.type === Nt && !l.el && (l.el = o.el);
    }
}
function fc(e) {
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
function rl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : rl(t);
}
function vi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function sl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? sl(t.subTree) : null;
}
const il = (e) => e.__isSuspense;
function dc(e, t) {
  t && t.pendingBranch ? G(e) ? t.effects.push(...e) : t.effects.push(e) : Ta(e);
}
const ye = /* @__PURE__ */ Symbol.for("v-fgt"), Mr = /* @__PURE__ */ Symbol.for("v-txt"), Nt = /* @__PURE__ */ Symbol.for("v-cmt"), rs = /* @__PURE__ */ Symbol.for("v-stc"), Qt = [];
let rt = null;
function j(e = !1) {
  Qt.push(rt = e ? null : []);
}
function ol() {
  Qt.pop(), rt = Qt[Qt.length - 1] || null;
}
let zn = 1;
function Si(e, t = !1) {
  zn += e, e < 0 && rt && t && (rt.hasOnce = !0);
}
function ll(e) {
  return e.dynamicChildren = zn > 0 ? rt || pn : null, ol(), zn > 0 && rt && rt.push(e), e;
}
function V(e, t, n, r, s, i) {
  return ll(
    E(
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
function pc(e, t, n, r, s) {
  return ll(
    Ot(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function al(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const cl = ({ key: e }) => e ?? null, pr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Se(e) || /* @__PURE__ */ Ge(e) || Q(e) ? { i: ot, r: e, k: t, f: !!n } : e : null);
function E(e, t = null, n = null, r = 0, s = null, i = e === ye ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && cl(t),
    ref: t && pr(t),
    scopeId: Fo,
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
    ctx: ot
  };
  return l ? (Tr(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= Se(n) ? 8 : 16), zn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  rt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && rt.push(c), c;
}
const Ot = hc;
function hc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === ja) && (e = Nt), al(e)) {
    const l = yn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Tr(l, n), zn > 0 && !i && rt && (l.shapeFlag & 6 ? rt[rt.indexOf(e)] = l : rt.push(l)), l.patchFlag = -2, l;
  }
  if (xc(e) && (e = e.__vccOpts), t) {
    t = mc(t);
    let { class: l, style: c } = t;
    l && !Se(l) && (t.class = kn(l)), fe(c) && (/* @__PURE__ */ Ls(c) && !G(c) && (c = Ue({}, c)), t.style = Rs(c));
  }
  const o = Se(e) ? 1 : il(e) ? 128 : Ir(e) ? 64 : fe(e) ? 4 : Q(e) ? 2 : 0;
  return E(
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
function mc(e) {
  return e ? /* @__PURE__ */ Ls(e) || Xo(e) ? Ue({}, e) : e : null;
}
function yn(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: c } = e, m = t ? gc(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && cl(m),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? G(i) ? i.concat(pr(t)) : [i, pr(t)] : pr(t)
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
    ssContent: e.ssContent && yn(e.ssContent),
    ssFallback: e.ssFallback && yn(e.ssFallback),
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
function ve(e = " ", t = 0) {
  return Ot(Mr, null, e, t);
}
function Oe(e = "", t = !1) {
  return t ? (j(), pc(Nt, null, e)) : Ot(Nt, null, e);
}
function _t(e) {
  return e == null || typeof e == "boolean" ? Ot(Nt) : G(e) ? Ot(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : al(e) ? At(e) : Ot(Mr, null, String(e));
}
function At(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : yn(e);
}
function Tr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (G(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Tr(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Xo(t) ? t._ctx = ot : s === 3 && ot && (ot.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Q(t)) {
    if (r & 65) {
      Tr(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ot }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [ve(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function gc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = kn([t.class, r.class]));
      else if (s === "style")
        t.style = Rs([t.style, r.style]);
      else if (Ar(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(G(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !xr(s) && (t[s] = o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function gt(e, t, n, r = null) {
  pt(e, t, 7, [
    n,
    r
  ]);
}
const bc = Wo();
let yc = 0;
function _c(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || bc, i = {
    uid: yc++,
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
    propsOptions: Zo(r, s),
    emitsOptions: Go(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: de,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: de,
    data: de,
    props: de,
    attrs: de,
    slots: de,
    refs: de,
    setupState: de,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Xa.bind(null, i), e.ce && e.ce(i), i;
}
let We = null;
const Tc = () => We || ot;
let Er, Bn;
{
  const e = Or(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  Er = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => We = n
  ), Bn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Wn = n
  );
}
const qn = (e) => {
  const t = We;
  return Er(e), e.scope.on(), () => {
    e.scope.off(), Er(t);
  };
}, Ai = () => {
  We && We.scope.off(), Er(null);
};
function ul(e) {
  return e.vnode.shapeFlag & 4;
}
let Wn = !1;
function Ec(e, t = !1, n = !1) {
  t && Bn(t);
  const { props: r, children: s } = e.vnode, i = ul(e);
  nc(e, r, i, t), oc(e, s, n || t);
  const o = i ? vc(e, t) : void 0;
  return t && Bn(!1), o;
}
function vc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $a);
  const { setup: r } = n;
  if (r) {
    Rt();
    const s = e.setupContext = r.length > 1 ? Ac(e) : null, i = qn(e), o = Kn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = oo(o);
    if (Pt(), i(), (l || e.sp) && !Fn(e) && jo(e), l) {
      if (o.then(Ai, Ai), t)
        return o.then((c) => {
          Bn(!0);
          try {
            xi(e, c, t);
          } finally {
            Bn(!1);
          }
        }).catch((c) => {
          Pr(c, e, 0);
        });
      e.asyncDep = o;
    } else
      xi(e, o);
  } else
    fl(e);
}
function xi(e, t, n) {
  Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : fe(t) && (e.setupState = Po(t)), fl(e);
}
function fl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Tt);
  {
    const s = qn(e);
    Rt();
    try {
      Va(e);
    } finally {
      Pt(), s();
    }
  }
}
const Sc = {
  get(e, t) {
    return Fe(e, "get", ""), e[t];
  }
};
function Ac(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Sc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Lr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Po(da(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Un)
        return Un[n](e);
    },
    has(t, n) {
      return n in t || n in Un;
    }
  })) : e.proxy;
}
function xc(e) {
  return Q(e) && "__vccOpts" in e;
}
const xe = (e, t) => /* @__PURE__ */ ma(e, t, Wn), wc = "3.5.42";
let Ss;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    Ss = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const dl = Ss ? (e) => Ss.createHTML(e) : (e) => e, Cc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", St = typeof document < "u" ? document : null, Ci = St && /* @__PURE__ */ St.createElement("template"), Rc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? St.createElementNS(Cc, e) : t === "mathml" ? St.createElementNS(Oc, e) : n ? St.createElement(e, { is: n }) : St.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => St.createTextNode(e),
  createComment: (e) => St.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => St.querySelector(e),
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
      Ci.innerHTML = dl(
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
}, Pc = /* @__PURE__ */ Symbol("_vtc");
function Ic(e, t, n) {
  const r = e[Pc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Oi = /* @__PURE__ */ Symbol("_vod"), Nc = /* @__PURE__ */ Symbol("_vsh"), Dc = /* @__PURE__ */ Symbol(""), Mc = /(?:^|;)\s*display\s*:/;
function Lc(e, t, n) {
  const r = e.style, s = Se(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (Se(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Pn(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Pn(r, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? Uc(
        e,
        o,
        !Se(t) && t ? t[o] : void 0,
        l
      ) || Pn(r, o, l) : Pn(r, o, "");
    }
  } else if (s) {
    if (t !== n) {
      const o = r[Dc];
      o && (n += ";" + o), r.cssText = n, i = Mc.test(n);
    }
  } else t && e.removeAttribute("style");
  Oi in e && (e[Oi] = i ? r.display : "", e[Nc] && (r.display = "none"));
}
const ar = /\s*!important$/;
function Pn(e, t, n) {
  if (G(n))
    n.forEach((r) => Pn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    ar.test(n) ? e.setProperty(t, n.replace(ar, ""), "important") : e.setProperty(t, n);
  else {
    const r = Fc(e, t);
    ar.test(n) ? e.setProperty(
      tn(r),
      n.replace(ar, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ri = ["Webkit", "Moz", "ms"], ss = {};
function Fc(e, t) {
  const n = ss[t];
  if (n)
    return n;
  let r = ut(t);
  if (r !== "filter" && r in e)
    return ss[t] = r;
  r = co(r);
  for (let s = 0; s < Ri.length; s++) {
    const i = Ri[s] + r;
    if (i in e)
      return ss[t] = i;
  }
  return t;
}
function Uc(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Se(r) && n === r;
}
const Pi = "http://www.w3.org/1999/xlink";
function Ii(e, t, n, r, s, i = zl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Pi, t.slice(6, t.length)) : e.setAttributeNS(Pi, t, n) : n == null || i && !fo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Et(n) ? String(n) : n
  );
}
function Ni(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? dl(n) : n);
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
    l === "boolean" ? n = fo(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function Yt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function kc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Di = /* @__PURE__ */ Symbol("_vei");
function Hc(e, t, n, r, s = null) {
  const i = e[Di] || (e[Di] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, c] = Vc(t);
    if (r) {
      const m = i[t] = Wc(
        r,
        s
      );
      Yt(e, l, m, c);
    } else o && (kc(e, l, o, c), i[t] = void 0);
  }
}
const jc = /(Once|Passive|Capture)$/, $c = /^on:?(?:Once|Passive|Capture)$/;
function Vc(e) {
  let t, n;
  for (; (n = e.match(jc)) && !$c.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : tn(e.slice(2)), t];
}
let is = 0;
const zc = /* @__PURE__ */ Promise.resolve(), Bc = () => is || (zc.then(() => is = 0), is = Date.now());
function Wc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const s = n.value;
    if (G(s)) {
      const i = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        i.call(r), r._stopped = !0;
      };
      const o = s.slice(), l = [r];
      for (let c = 0; c < o.length && !r._stopped; c++) {
        const m = o[c];
        m && pt(
          m,
          t,
          5,
          l
        );
      }
    } else
      pt(
        s,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Bc(), n;
}
const Mi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Gc = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Ic(e, r, o) : t === "style" ? Lc(e, n, r) : Ar(t) ? xr(t) || Hc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Kc(e, t, r, o)) ? (Ni(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ii(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (qc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Se(r))) ? Ni(e, ut(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ii(e, t, r, o));
};
function Kc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Mi(t) && Q(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Mi(t) && Se(n) ? !1 : t in e;
}
function qc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = ut(t);
  return Array.isArray(n) ? n.some((s) => ut(s) === r) : Object.keys(n).some((s) => ut(s) === r);
}
const vr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return G(t) ? (n) => fr(t, n) : t;
};
function Yc(e) {
  e.target.composing = !0;
}
function Li(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Xt = /* @__PURE__ */ Symbol("_assign"), cr = /* @__PURE__ */ Symbol("_initialValue");
function os(e, t, n) {
  return t && (e = e.trim()), n && (e = Cr(e)), e;
}
const Fi = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[cr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[cr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Xt] = vr(s);
    const i = r || s.props && s.props.type === "number";
    Yt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Xt](os(e.value, n, i));
    }), (n || i) && Yt(e, "change", () => {
      e.value = os(e.value, n, i);
    }), t || (Yt(e, "compositionstart", Yc), Yt(e, "compositionend", Li), Yt(e, "change", Li));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const s = t ?? "", i = e[cr];
    delete e[cr], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[Xt](os(e.value, n, r)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
    if (e[Xt] = vr(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Cr(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const m = e.getRootNode();
    (m instanceof Document || m instanceof ShadowRoot) && m.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === c) || (e.value = c);
  }
}, et = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, Yt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? Cr(Sr(c)) : Sr(c)
      ), i = e.multiple, o = i ? en(e._modelValue) ? new Set(s) : s : s[0], l = e._pendingValue = [
        i,
        i ? G(o) ? s.slice() : s : o
      ];
      try {
        e[Xt](o);
      } finally {
        No(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[Xt] = vr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ui(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Xt] = vr(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Xc(t, n[1], n[0])) && Ui(e, t);
  }
};
function Xc(e, t, n) {
  if (!n || G(e)) return kt(e, t);
  if (en(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Ui(e, t) {
  const n = e.multiple, r = G(t);
  if (!(n && !r && !en(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const o = e.options[s], l = Sr(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((m) => String(m) === String(l)) : o.selected = Wl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (kt(Sr(o), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Sr(e) {
  return "_value" in e ? e._value : e.value;
}
const Jc = /* @__PURE__ */ Ue({ patchProp: Gc }, Rc);
let ki;
function Zc() {
  return ki || (ki = ac(Jc));
}
const Qc = ((...e) => {
  const t = Zc().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = tu(r);
    if (!s) return;
    const i = t._component;
    !Q(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, eu(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
});
function eu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function tu(e) {
  return Se(e) ? document.querySelector(e) : e;
}
function nu(e, t, n) {
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
function Hi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ru(e) {
  if (Array.isArray(e)) return e;
}
function su(e, t) {
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
function iu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ou(e, t) {
  return ru(e) || su(e, t) || lu(e, t) || iu();
}
function lu(e, t) {
  if (e) {
    if (typeof e == "string") return Hi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Hi(e, t) : void 0;
  }
}
const pl = Object.entries, ji = Object.setPrototypeOf, au = Object.isFrozen, cu = Object.getPrototypeOf, uu = Object.getOwnPropertyDescriptor;
let Re = Object.freeze, Ne = Object.seal, dn = Object.create, hl = typeof Reflect < "u" && Reflect, As = hl.apply, xs = hl.construct;
Re || (Re = function(t) {
  return t;
});
Ne || (Ne = function(t) {
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
const qt = we(Array.prototype.forEach), fu = we(Array.prototype.lastIndexOf), $i = we(Array.prototype.pop), wn = we(Array.prototype.push), du = we(Array.prototype.splice), gn = Array.isArray, In = we(String.prototype.toLowerCase), ls = we(String.prototype.toString), Vi = we(String.prototype.match), Cn = we(String.prototype.replace), zi = we(String.prototype.indexOf), pu = we(String.prototype.trim), hu = we(Number.prototype.toString), mu = we(Boolean.prototype.toString), Bi = typeof BigInt > "u" ? null : we(BigInt.prototype.toString), Wi = typeof Symbol > "u" ? null : we(Symbol.prototype.toString), Je = we(Object.prototype.hasOwnProperty), On = we(Object.prototype.toString), Le = we(RegExp.prototype.test), Gt = gu(TypeError);
function we(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return As(e, t, r);
  };
}
function gu(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return xs(e, n);
  };
}
function ie(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : In;
  if (ji && ji(e, null), !gn(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let s = t[r];
    if (typeof s == "string") {
      const i = n(s);
      i !== s && (au(t) || (t[r] = i), s = i);
    }
    e[s] = !0;
  }
  return e;
}
function bu(e) {
  for (let t = 0; t < e.length; t++)
    Je(e, t) || (e[t] = null);
  return e;
}
function nt(e) {
  const t = dn(null);
  for (const r of pl(e)) {
    var n = ou(r, 2);
    const s = n[0], i = n[1];
    Je(e, s) && (gn(i) ? t[s] = bu(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = nt(i) : t[s] = i);
  }
  return t;
}
function yu(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return hu(e);
    case "boolean":
      return mu(e);
    case "bigint":
      return Bi ? Bi(e) : "0";
    case "symbol":
      return Wi ? Wi(e) : "Symbol()";
    case "undefined":
      return On(e);
    case "function":
    case "object": {
      if (e === null)
        return On(e);
      const t = e, n = ct(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : On(r);
      }
      return On(e);
    }
    default:
      return On(e);
  }
}
function ct(e, t) {
  for (; e !== null; ) {
    const r = uu(e, t);
    if (r) {
      if (r.get)
        return we(r.get);
      if (typeof r.value == "function")
        return we(r.value);
    }
    e = cu(e);
  }
  function n() {
    return null;
  }
  return n;
}
function _u(e) {
  try {
    return Le(e, ""), !0;
  } catch {
    return !1;
  }
}
const Gi = Re(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), as = Re(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), cs = Re(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Tu = Re(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), us = Re(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Eu = Re(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ki = Re(["#text"]), qi = Re(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), fs = Re(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Yi = Re(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ur = Re(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), vu = Ne(/{{[\w\W]*|^[\w\W]*}}/g), Su = Ne(/<%[\w\W]*|^[\w\W]*%>/g), Au = Ne(/\${[\w\W]*/g), xu = Ne(/^data-[\-\w.\u00B7-\uFFFF]+$/), wu = Ne(/^aria-[\-\w]+$/), Xi = Ne(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Cu = Ne(/^(?:\w+script|data):/i), Ou = Ne(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ru = Ne(/^html$/i), Pu = Ne(/^[a-z][.\w]*(-[.\w]+)+$/i), Ji = Ne(/<[/\w!]/g), Zi = Ne(/<[/\w]/g), Iu = Ne(/<\/no(script|embed|frames)/i), Nu = Ne(/\/>/i), tt = {
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
}, ml = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Du = Re(ie({}, ml)), Mu = (function() {
  const e = {};
  return qt(ml, (t) => {
    e[t] = Ne(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Re(e);
})(), Lu = function() {
  return typeof window > "u" ? null : window;
}, Fu = function(t, n) {
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
}, Qi = function() {
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
}, Lt = function(t, n, r, s) {
  return Je(t, n) && gn(t[n]) ? ie(s.base ? nt(s.base) : {}, t[n], s.transform) : r;
}, ds = function(t, n, r) {
  const s = Je(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? nt(s) : r();
};
function gl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Lu();
  const t = (C) => gl(C);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== tt.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, m = e.NamedNodeMap;
  m === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, y = e.trustedTypes, I = l.prototype, k = ct(I, "cloneNode"), K = ct(I, "remove"), F = ct(I, "nextSibling"), U = ct(I, "childNodes"), te = ct(I, "parentNode"), Y = ct(I, "shadowRoot"), z = ct(I, "attributes"), A = o && o.prototype ? ct(o.prototype, "nodeType") : null, X = o && o.prototype ? ct(o.prototype, "nodeName") : null, oe = o && o.prototype ? ct(o.prototype, "ownerDocument") : null, re = function(a) {
    return A ? A(a) : a.nodeType;
  }, J = function(a) {
    return X ? X(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const C = n.createElement("template");
    C.content && C.content.ownerDocument && (n = C.content.ownerDocument);
  }
  let ae, Te = "", De, Pe = !1, Ce = 0;
  const lt = function() {
    if (Ce > 0)
      throw Gt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ce = function(a) {
    lt(), Ce++;
    try {
      return ae.createHTML(a);
    } finally {
      Ce--;
    }
  }, N = function(a) {
    lt(), Ce++;
    try {
      return ae.createScriptURL(a);
    } finally {
      Ce--;
    }
  }, p = function() {
    return Pe || (De = Fu(y, s), Pe = !0), De;
  }, ee = n, ke = ee.implementation, at = ee.createNodeIterator, Ze = ee.createDocumentFragment, st = ee.getElementsByTagName, Yn = r.importNode;
  let pe = Qi();
  t.isSupported = typeof pl == "function" && typeof te == "function" && ke && ke.createHTMLDocument !== void 0;
  const Fr = vu, jt = Su, nn = Au, _n = xu, Xn = wu, $t = Cu, Ur = Ou, u = Pu;
  let f = Xi, g = null;
  const x = ie({}, [...Gi, ...as, ...cs, ...us, ...Ki]);
  let b = null;
  const v = ie({}, [...qi, ...fs, ...Yi, ...ur]);
  let O = Object.seal(dn(null, {
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
  })), R = null, P = null;
  const _ = Object.seal(dn(null, {
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
  let B = !0, D = !0, $ = !1, W = !0, Z = !1, se = !0, ne = !1, be = !1, Ee = null, He = null, Ke = !1, it = !1, Vt = !1, Ie = !1, Qe = !0, Tn = !1;
  const En = "user-content-";
  let kr = !0, Hr = !1, rn = {}, sn = null;
  const $s = ie({}, [
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
  const Ws = ie({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Jn = "http://www.w3.org/1998/Math/MathML", Zn = "http://www.w3.org/2000/svg", ht = "http://www.w3.org/1999/xhtml";
  let on = ht, jr = !1, $r = null;
  const yl = ie({}, [Jn, Zn, ht], ls), Gs = Re(["mi", "mo", "mn", "ms", "mtext"]);
  let Vr = ie({}, Gs);
  const Ks = Re(["annotation-xml"]);
  let zr = ie({}, Ks);
  const _l = ie({}, ["title", "style", "font", "a", "script"]);
  let vn = null;
  const Tl = ["application/xhtml+xml", "text/html"], El = "text/html";
  let Ae = null, ln = null;
  const vl = n.createElement("form"), qs = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, Br = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ln && ln === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = nt(a), vn = // eslint-disable-next-line unicorn/prefer-includes
    Tl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? El : a.PARSER_MEDIA_TYPE, Ae = vn === "application/xhtml+xml" ? ls : In, g = Lt(a, "ALLOWED_TAGS", x, {
      transform: Ae
    }), b = Lt(a, "ALLOWED_ATTR", v, {
      transform: Ae
    }), $r = Lt(a, "ALLOWED_NAMESPACES", yl, {
      transform: ls
    }), Bs = Lt(a, "ADD_URI_SAFE_ATTR", Ws, {
      transform: Ae,
      base: Ws
    }), Vs = Lt(a, "ADD_DATA_URI_TAGS", zs, {
      transform: Ae,
      base: zs
    }), sn = Lt(a, "FORBID_CONTENTS", $s, {
      transform: Ae
    }), R = Lt(a, "FORBID_TAGS", nt({}), {
      transform: Ae
    }), P = Lt(a, "FORBID_ATTR", nt({}), {
      transform: Ae
    }), rn = Je(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? nt(a.USE_PROFILES) : a.USE_PROFILES : !1, B = a.ALLOW_ARIA_ATTR !== !1, D = a.ALLOW_DATA_ATTR !== !1, $ = a.ALLOW_UNKNOWN_PROTOCOLS || !1, W = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = a.SAFE_FOR_TEMPLATES || !1, se = a.SAFE_FOR_XML !== !1, ne = a.WHOLE_DOCUMENT || !1, it = a.RETURN_DOM || !1, Vt = a.RETURN_DOM_FRAGMENT || !1, Ie = a.RETURN_TRUSTED_TYPE || !1, Ke = a.FORCE_BODY || !1, Qe = a.SANITIZE_DOM !== !1, Tn = a.SANITIZE_NAMED_PROPS || !1, kr = a.KEEP_CONTENT !== !1, Hr = a.IN_PLACE || !1, f = _u(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Xi, on = typeof a.NAMESPACE == "string" ? a.NAMESPACE : ht, Vr = ds(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ie({}, Gs)
      // Default built-in map
    ), zr = ds(
      a,
      "HTML_INTEGRATION_POINTS",
      () => ie({}, Ks)
      // Default built-in map
    );
    const h = ds(a, "CUSTOM_ELEMENT_HANDLING", () => dn(null));
    if (O = dn(null), Je(h, "tagNameCheck") && qs(h.tagNameCheck) && (O.tagNameCheck = h.tagNameCheck), Je(h, "attributeNameCheck") && qs(h.attributeNameCheck) && (O.attributeNameCheck = h.attributeNameCheck), Je(h, "allowCustomizedBuiltInElements") && typeof h.allowCustomizedBuiltInElements == "boolean" && (O.allowCustomizedBuiltInElements = h.allowCustomizedBuiltInElements), Ne(O), Z && (D = !1), Vt && (it = !0), rn && (g = ie({}, Ki), b = dn(null), rn.html === !0 && (ie(g, Gi), ie(b, qi)), rn.svg === !0 && (ie(g, as), ie(b, fs), ie(b, ur)), rn.svgFilters === !0 && (ie(g, cs), ie(b, fs), ie(b, ur)), rn.mathMl === !0 && (ie(g, us), ie(b, Yi), ie(b, ur))), _.tagCheck = null, _.attributeCheck = null, Je(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? _.tagCheck = a.ADD_TAGS : gn(a.ADD_TAGS) && (g === x && (g = nt(g)), ie(g, a.ADD_TAGS, Ae))), Je(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? _.attributeCheck = a.ADD_ATTR : gn(a.ADD_ATTR) && (b === v && (b = nt(b)), ie(b, a.ADD_ATTR, Ae))), Je(a, "ADD_FORBID_CONTENTS") && gn(a.ADD_FORBID_CONTENTS) && (sn === $s && (sn = nt(sn)), ie(sn, a.ADD_FORBID_CONTENTS, Ae)), kr && (g["#text"] = !0), ne && ie(g, ["html", "head", "body"]), g.table && (ie(g, ["tbody"]), delete R.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Gt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Gt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const S = ae;
      ae = a.TRUSTED_TYPES_POLICY;
      try {
        Te = ce("");
      } catch (L) {
        throw ae = S, L;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (ae = void 0, Te = "") : (ae === void 0 && (ae = p()), ae && typeof Te == "string" && (Te = ce("")));
    Re && Re(a), ln = a;
  }, Ys = ie({}, [...as, ...cs, ...Tu]), Xs = ie({}, [...us, ...Eu]), Sl = function(a, h, S) {
    return h.namespaceURI === ht ? a === "svg" : h.namespaceURI === Jn ? a === "svg" && (S === "annotation-xml" || Vr[S]) : !!Ys[a];
  }, Al = function(a, h, S) {
    return h.namespaceURI === ht ? a === "math" : h.namespaceURI === Zn ? a === "math" && zr[S] : !!Xs[a];
  }, xl = function(a, h, S) {
    return h.namespaceURI === Zn && !zr[S] || h.namespaceURI === Jn && !Vr[S] ? !1 : !Xs[a] && (_l[a] || !Ys[a]);
  }, wl = function(a) {
    let h = te(a);
    (!h || !h.tagName) && (h = {
      namespaceURI: on,
      tagName: "template"
    });
    const S = In(a.tagName), L = In(h.tagName);
    return $r[a.namespaceURI] ? a.namespaceURI === Zn ? Sl(S, h, L) : a.namespaceURI === Jn ? Al(S, h, L) : a.namespaceURI === ht ? xl(S, h, L) : !!(vn === "application/xhtml+xml" && $r[a.namespaceURI]) : !1;
  }, Mt = function(a) {
    wn(t.removed, {
      element: a
    });
    try {
      te(a).removeChild(a);
    } catch {
      if (K(a), !te(a))
        throw Gt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Js = function(a, h, S) {
    try {
      a.removeAttributeNode(h);
    } catch {
      try {
        a.removeAttribute(S);
      } catch {
      }
    }
  }, Qn = function(a) {
    er(a);
    const h = U(a);
    if (h) {
      const L = [];
      qt(h, (H) => {
        wn(L, H);
      }), qt(L, (H) => {
        try {
          K(H);
        } catch {
        }
      });
    }
    const S = z(a);
    if (S)
      for (let L = S.length - 1; L >= 0; --L) {
        const H = S[L], q = H && H.name;
        typeof q == "string" && Js(a, H, q);
      }
  }, zt = function(a, h, S) {
    if (!S)
      try {
        S = h.getAttributeNode(a);
      } catch {
        S = null;
      }
    wn(t.removed, {
      attribute: S || null,
      from: h
    });
    try {
      S ? h.removeAttributeNode(S) : h.removeAttribute(a);
    } catch {
      try {
        h.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (it || Vt)
        try {
          Mt(h);
        } catch {
        }
      else
        try {
          h.setAttribute(a, "");
        } catch {
        }
  }, Cl = function(a) {
    const h = z(a);
    if (h)
      for (let S = h.length - 1; S >= 0; --S) {
        const L = h[S], H = L && L.name;
        typeof H != "string" || b[Ae(H)] || Js(a, L, H);
      }
  }, er = function(a) {
    const h = [a];
    for (; h.length > 0; ) {
      const S = h.pop();
      re(S) === tt.element && Cl(S);
      const H = U(S);
      if (H)
        for (let q = H.length - 1; q >= 0; --q)
          h.push(H[q]);
    }
  }, Zs = function(a, h) {
    return se ? a === "patchsrc" ? !0 : a === "for" && h !== "label" && h !== "output" : !1;
  }, Ol = function(a) {
    if (!se)
      return;
    const h = [a];
    for (; h.length > 0; ) {
      const S = h.pop(), L = re(S);
      if (L === tt.processingInstruction || L === tt.comment && Le(Zi, S.data)) {
        try {
          K(S);
        } catch {
        }
        continue;
      }
      if (L === tt.element) {
        const q = S, he = Ae(J(S));
        try {
          q.hasAttribute && q.hasAttribute("patchsrc") && q.removeAttribute("patchsrc"), q.hasAttribute && q.hasAttribute("for") && Zs("for", he) && q.removeAttribute("for");
        } catch {
        }
      }
      const H = U(S);
      if (H)
        for (let q = H.length - 1; q >= 0; --q)
          h.push(H[q]);
    }
  }, Qs = function(a) {
    let h = null, S = null;
    if (Ke)
      a = "<remove></remove>" + a;
    else {
      const q = Vi(a, /^[\r\n\t ]+/);
      S = q && q[0];
    }
    vn === "application/xhtml+xml" && on === ht && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const L = ae ? ce(a) : a;
    if (on === ht)
      try {
        h = new d().parseFromString(L, vn);
      } catch {
      }
    if (!h || !h.documentElement) {
      h = ke.createDocument(on, "template", null);
      try {
        h.documentElement.innerHTML = jr ? Te : L;
      } catch {
      }
    }
    const H = h.body || h.documentElement;
    return a && S && H.insertBefore(n.createTextNode(S), H.childNodes[0] || null), on === ht ? st.call(h, ne ? "html" : "body")[0] : ne ? h.documentElement : H;
  }, ei = function(a) {
    const h = oe ? oe(a) : a.ownerDocument;
    return at.call(
      h || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, tr = function(a) {
    return a = Cn(a, Fr, " "), a = Cn(a, jt, " "), a = Cn(a, nn, " "), a;
  }, Wr = function(a) {
    var h;
    a.normalize();
    const S = oe ? oe(a) : a.ownerDocument, L = at.call(
      S || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let H = L.nextNode();
    for (; H; )
      H.data = tr(H.data), H = L.nextNode();
    const q = (h = a.querySelectorAll) === null || h === void 0 ? void 0 : h.call(a, "template");
    q && qt(q, (he) => {
      an(he.content) && Wr(he.content);
    });
  }, nr = function(a) {
    const h = X ? X(a) : null;
    return typeof h != "string" || Ae(h) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== z(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    a.nodeType !== A(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    a.childNodes !== U(a);
  }, an = function(a) {
    if (!A || typeof a != "object" || a === null)
      return !1;
    try {
      return A(a) === tt.documentFragment;
    } catch {
      return !1;
    }
  }, Sn = function(a) {
    if (!A || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof A(a) == "number";
    } catch {
      return !1;
    }
  };
  function mt(C, a, h) {
    C.length !== 0 && qt(C, (S) => {
      S.call(t, a, h, ln);
    });
  }
  const Rl = function(a, h) {
    return !!(se && a.hasChildNodes() && !Sn(a.firstElementChild) && Le(Ji, a.textContent) && Le(Ji, a.innerHTML) || se && a.namespaceURI === ht && Du[h] && (Sn(a.firstElementChild) || typeof a.textContent == "string" && Le(Mu[h], a.textContent)) || a.nodeType === tt.processingInstruction || se && a.nodeType === tt.comment && Le(Zi, a.data));
  }, rr = function(a, h) {
    if (a instanceof RegExp)
      return Le(a, h);
    if (a instanceof Function) {
      for (var S = arguments.length, L = new Array(S > 2 ? S - 2 : 0), H = 2; H < S; H++)
        L[H - 2] = arguments[H];
      return !!a(h, ...L);
    }
    return !1;
  }, Pl = function(a, h, S) {
    if (!R[h] && ii(h) && rr(O.tagNameCheck, h))
      return !1;
    if (kr && !sn[h]) {
      const L = te(a), H = U(a);
      if (H && L) {
        const q = H.length;
        for (let he = q - 1; he >= 0; --he) {
          const _e = a === S ? k(H[he], !0) : H[he];
          L.insertBefore(_e, F(a));
        }
      }
    }
    return Mt(a), !0;
  }, ti = function(a, h, S, L) {
    return a.length === 0 ? h : h === S || h === L ? nt(h) : h;
  }, ni = function(a, h) {
    return a === h || te(a) !== null ? !1 : (Hr && er(a), !0);
  }, ri = function(a, h) {
    if (mt(pe.beforeSanitizeElements, a, null), ni(a, h))
      return !0;
    if (nr(a))
      return Mt(a), !0;
    const S = Ae(J(a));
    if (g = ti(pe.uponSanitizeElement, g, x, Ee), mt(pe.uponSanitizeElement, a, {
      tagName: S,
      allowedTags: g
    }), ni(a, h))
      return !0;
    if (Rl(a, S))
      return Mt(a), !0;
    if (R[S] || !(_.tagCheck instanceof Function && _.tagCheck(S)) && !g[S]) {
      const H = Pl(a, S, h);
      return H === !1 && mt(pe.afterSanitizeElements, a, null), H;
    }
    if (re(a) === tt.element && !wl(a) || (S === "noscript" || S === "noembed" || S === "noframes") && Le(Iu, a.innerHTML))
      return Mt(a), !0;
    if (Z && a.nodeType === tt.text) {
      const H = tr(a.textContent);
      a.textContent !== H && (wn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = H);
    }
    return mt(pe.afterSanitizeElements, a, null), !1;
  }, si = function(a, h, S) {
    if (P[h] || Zs(h, a) || Qe && (h === "id" || h === "name") && (S in n || S in vl))
      return !1;
    const L = b[h] || _.attributeCheck instanceof Function && _.attributeCheck(h, a);
    return D && Le(_n, h) || B && Le(Xn, h) ? !0 : L ? Bs[h] || Le(f, Cn(S, Ur, "")) || (h === "src" || h === "xlink:href" || h === "href") && a !== "script" && zi(S, "data:") === 0 && Vs[a] || $ && !Le($t, Cn(S, Ur, "")) ? !0 : !S : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ii(a) && rr(O.tagNameCheck, a) && rr(O.attributeNameCheck, h, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      h === "is" && O.allowCustomizedBuiltInElements && rr(O.tagNameCheck, S)
    );
  }, Il = ie({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ii = function(a) {
    return !Il[In(a)] && Le(u, a);
  }, Nl = function(a, h, S, L) {
    if (ae && typeof y == "object" && typeof y.getAttributeType == "function" && !S)
      switch (y.getAttributeType(a, h)) {
        case "TrustedHTML":
          return ce(L);
        case "TrustedScriptURL":
          return N(L);
      }
    return L;
  }, Dl = function(a, h, S, L) {
    try {
      S ? a.setAttributeNS(S, h, L) : a.setAttribute(h, L), nr(a) ? Mt(a) : $i(t.removed);
    } catch {
      zt(h, a);
    }
  }, oi = function(a) {
    mt(pe.beforeSanitizeAttributes, a, null);
    const h = a.attributes;
    if (!h || nr(a))
      return;
    b = ti(pe.uponSanitizeAttribute, b, v, He);
    const S = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: b,
      forceKeepAttr: void 0
    };
    let L = h.length;
    const H = Ae(a.nodeName);
    for (; L--; ) {
      const q = h[L], he = q.name, _e = q.namespaceURI, qe = q.value, Ye = Ae(he), Kr = qe;
      let je = he === "value" ? Kr : pu(Kr);
      if (S.attrName = Ye, S.attrValue = je, S.keepAttr = !0, S.forceKeepAttr = void 0, mt(pe.uponSanitizeAttribute, a, S), je = S.attrValue, Tn && (Ye === "id" || Ye === "name") && zi(je, En) !== 0 && (zt(he, a, q), je = En + je), se && Le(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, je)) {
        zt(he, a, q);
        continue;
      }
      if (Ye === "attributename" && Vi(je, "href")) {
        zt(he, a, q);
        continue;
      }
      if (!S.forceKeepAttr) {
        if (!S.keepAttr) {
          zt(he, a, q);
          continue;
        }
        if (!W && Le(Nu, je)) {
          zt(he, a, q);
          continue;
        }
        if (Z && (je = tr(je)), !si(H, Ye, je)) {
          zt(he, a, q);
          continue;
        }
        je = Nl(H, Ye, _e, je), je !== Kr && Dl(a, he, _e, je);
      }
    }
    mt(pe.afterSanitizeAttributes, a, null);
  }, sr = function(a) {
    let h = null;
    const S = ei(a);
    for (mt(pe.beforeSanitizeShadowDOM, a, null); h = S.nextNode(); )
      if (mt(pe.uponSanitizeShadowNode, h, null), ri(h, a), oi(h), an(h.content) && sr(h.content), re(h) === tt.element) {
        const L = Y(h);
        an(L) && (Gr(L), sr(L));
      }
    mt(pe.afterSanitizeShadowDOM, a, null);
  }, Gr = function(a) {
    const h = [{
      node: a,
      shadow: null
    }];
    for (; h.length > 0; ) {
      const S = h.pop();
      if (S.shadow) {
        sr(S.shadow);
        continue;
      }
      const L = S.node, q = re(L) === tt.element, he = U(L);
      if (he)
        for (let _e = he.length - 1; _e >= 0; --_e)
          h.push({
            node: he[_e],
            shadow: null
          });
      if (q) {
        const _e = X ? X(L) : null;
        if (typeof _e == "string" && Ae(_e) === "template") {
          const qe = L.content;
          an(qe) && h.push({
            node: qe,
            shadow: null
          });
        }
      }
      if (q) {
        const _e = Y(L);
        an(_e) && h.push({
          node: null,
          shadow: _e
        }, {
          node: _e,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(C) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h = null, S = null, L = null, H = null;
    if (jr = !C, jr && (C = "<!-->"), typeof C != "string" && !Sn(C) && (C = yu(C), typeof C != "string"))
      throw Gt("dirty is not a string, aborting");
    if (!t.isSupported)
      return C;
    be ? (g = Ee, b = He) : Br(a), (pe.uponSanitizeElement.length > 0 || pe.uponSanitizeAttribute.length > 0) && (g = nt(g)), pe.uponSanitizeAttribute.length > 0 && (b = nt(b)), t.removed = [];
    const q = Hr && typeof C != "string" && Sn(C);
    if (q) {
      Ol(C);
      const qe = J(C);
      if (typeof qe == "string") {
        const Ye = Ae(qe);
        if (!g[Ye] || R[Ye])
          throw Qn(C), Gt("root node is forbidden and cannot be sanitized in-place");
      }
      if (nr(C))
        throw Qn(C), Gt("root node is clobbered and cannot be sanitized in-place");
      try {
        Gr(C);
      } catch (Ye) {
        throw Qn(C), Ye;
      }
    } else if (Sn(C))
      h = Qs("<!---->"), S = h.ownerDocument.importNode(C, !0), S.nodeType === tt.element && S.nodeName === "BODY" || S.nodeName === "HTML" ? h = S : h.appendChild(S), Gr(S);
    else {
      if (!it && !Z && !ne && // eslint-disable-next-line unicorn/prefer-includes
      C.indexOf("<") === -1)
        return ae && Ie ? ce(C) : C;
      if (h = Qs(C), !h)
        return it ? null : Ie ? Te : "";
    }
    h && Ke && Mt(h.firstChild);
    const he = q ? C : h;
    try {
      const qe = ei(he);
      for (; L = qe.nextNode(); )
        ri(L, he), oi(L), an(L.content) && sr(L.content);
    } catch (qe) {
      throw q && (Qn(C), qt(t.removed, (Ye) => {
        Ye.element && er(Ye.element);
      })), qe;
    }
    if (q)
      return qt(t.removed, (qe) => {
        qe.element && er(qe.element);
      }), Z && Wr(C), C;
    if (it) {
      if (Z && Wr(h), Vt)
        for (H = Ze.call(h.ownerDocument); h.firstChild; )
          H.appendChild(h.firstChild);
      else
        H = h;
      return (b.shadowroot || b.shadowrootmode) && (H = Yn.call(r, H, !0)), H;
    }
    let _e = ne ? h.outerHTML : h.innerHTML;
    return ne && g["!doctype"] && h.ownerDocument && h.ownerDocument.doctype && h.ownerDocument.doctype.name && Le(Ru, h.ownerDocument.doctype.name) && (_e = "<!DOCTYPE " + h.ownerDocument.doctype.name + `>
` + _e), Z && (_e = tr(_e)), ae && Ie ? ce(_e) : _e;
  }, t.setConfig = function() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Br(C), be = !0, Ee = g, He = b;
  }, t.clearConfig = function() {
    ln = null, be = !1, Ee = null, He = null, ae = De, Te = "";
  }, t.isValidAttribute = function(C, a, h) {
    ln || Br({});
    const S = Ae(C), L = Ae(a);
    return si(S, L, h);
  }, t.addHook = function(C, a) {
    typeof a == "function" && Je(pe, C) && wn(pe[C], a);
  }, t.removeHook = function(C, a) {
    if (Je(pe, C)) {
      if (a !== void 0) {
        const h = fu(pe[C], a);
        return h === -1 ? void 0 : du(pe[C], h, 1)[0];
      }
      return $i(pe[C]);
    }
  }, t.removeHooks = function(C) {
    Je(pe, C) && (pe[C] = []);
  }, t.removeAllHooks = function() {
    pe = Qi();
  }, t;
}
var Uu = gl();
function ku(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ps, eo;
function Hu() {
  if (eo) return ps;
  eo = 1;
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
var ju = Hu();
const to = /* @__PURE__ */ ku(ju);
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_");
globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function $u(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function T(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = (F) => F, m = (l.sanitize ? Uu.sanitize : c) || c, d = l.escape ? to : c, y = (F) => typeof F == "string" || typeof F == "number", I = (F, U, te) => F.replace(/%n/g, "" + te).replace(/{([^{}]*)}/g, (Y, z) => {
    if (U === void 0 || !(z in U))
      return d(Y);
    const A = U[z];
    return y(A) ? d(`${A}`) : typeof A == "object" && y(A.value) ? (A.escape !== !1 ? to : c)(`${A.value}`) : d(Y);
  });
  let K = (s?.bundle ?? $u(e)).translations[t] || t;
  return K = Array.isArray(K) ? K[0] : K, m(typeof i == "object" || o !== void 0 ? I(
    K,
    i,
    o
  ) : K);
}
const Vu = { class: "library-vue-catalogue" }, zu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Bu = { id: "library-catalogue-heading" }, Wu = { class: "library-muted" }, Gu = { class: "library-filter-panel" }, Ku = { class: "library-filter-panel-summary" }, qu = ["aria-label"], Yu = { value: "" }, Xu = ["value"], Ju = { value: "" }, Zu = ["value"], Qu = { value: "" }, ef = ["value"], tf = { value: "" }, nf = ["value"], rf = { value: "" }, sf = ["value"], of = { value: "" }, lf = ["value"], af = { value: "" }, cf = ["value"], uf = { value: "" }, ff = ["value"], df = { value: "" }, pf = ["value"], hf = { value: "" }, mf = ["value"], gf = { value: "" }, bf = { value: "1" }, yf = { value: "" }, _f = { value: "1" }, Tf = { value: "title" }, Ef = { value: "recent" }, vf = { value: "publicationDate" }, Sf = { value: "publication" }, Af = { value: "lastOpened" }, xf = { value: "format" }, wf = ["value"], Cf = ["value"], Of = ["aria-label"], Rf = ["aria-label"], Pf = ["href"], If = ["aria-label"], Nf = ["href", "aria-label"], Df = ["aria-label"], Mf = ["href"], Lf = {
  key: 1,
  class: "library-muted"
}, Ff = ["href"], Uf = {
  key: 3,
  class: "library-muted"
}, kf = {
  key: 1,
  class: "library-periodical-groups"
}, Hf = { class: "library-periodical-groups-summary" }, jf = { id: "library-periodical-groups-heading" }, $f = { class: "library-muted" }, Vf = ["href"], zf = { class: "library-muted" }, Bf = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty"
}, Wf = { class: "library-periodical-groups-summary" }, Gf = { id: "library-periodical-groups-empty-heading" }, Kf = { class: "library-muted" }, qf = {
  key: 3,
  class: "library-empty-content",
  role: "status"
}, Yf = { class: "library-muted" }, Xf = {
  key: 4,
  class: "library-cover-gallery"
}, Jf = ["href", "aria-label"], Zf = ["src", "alt"], Qf = ["action"], ed = ["value"], td = ["value"], nd = ["aria-pressed", "title", "aria-label"], rd = { class: "library-cover-summary" }, sd = { class: "library-cover-primary" }, id = ["aria-label"], od = ["href"], ld = ["onToggle"], ad = ["aria-label"], cd = { class: "library-cover-meta" }, ud = {
  key: 0,
  class: "library-creator"
}, fd = { class: "library-muted" }, dd = { key: 0 }, pd = { key: 1 }, hd = { key: 2 }, md = { key: 3 }, gd = { key: 4 }, bd = { key: 5 }, yd = { key: 6 }, _d = { key: 7 }, Td = { key: 8 }, Ed = {
  key: 1,
  class: "library-muted library-cover-description"
}, vd = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Sd = { key: 0 }, Ad = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, xd = {
  key: 0,
  class: "library-muted"
}, wd = { class: "library-cover-actions" }, Cd = ["href"], Od = ["href"], Rd = ["href"], Pd = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, Id = { class: "library-hero-actions" }, Nd = ["href"], Dd = ["href"], Md = ["href"], Ld = ["href"], Fd = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = xe(() => t.state.items || []), i = xe(() => t.state.shelves || []), o = xe(() => t.state.formats || []), l = xe(() => t.state.publications || []), c = xe(() => t.state.publicationSummaries || []), m = xe(() => t.state.publicationYears || []), d = xe(() => t.state.creators || []), y = xe(() => t.state.scanStatuses || []), I = xe(() => t.state.workflowStatuses || []), k = xe(() => t.state.genres || []), K = xe(() => t.state.classifications || []), F = xe(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), U = /* @__PURE__ */ $n({
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
    }), te = xe(() => t.state.settingsUrl || ""), Y = xe(() => t.state.requestToken || ""), z = xe(() => t.state.metadataExportUrl || ""), A = xe(() => t.state.metadataSidecarManifestUrl || ""), X = xe(() => t.state.metadataSidecarBundleUrl || ""), oe = xe(() => t.state.scannerConflictReviewUrl || "?scannerConflicts=1"), re = {
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
    }, J = xe(() => Object.entries(re).map(([ce, N]) => ({ key: ce, label: N, value: U[ce] || "" })).filter((ce) => String(ce.value).trim() !== "")), ae = /* @__PURE__ */ $n({});
    function Te(ce) {
      const N = new URLSearchParams(window.location.search);
      N.delete(ce), N.delete("page");
      const p = N.toString();
      return p ? `?${p}` : "?";
    }
    function De(ce) {
      return String(ce || "").toUpperCase();
    }
    function Pe(ce) {
      return ce.nextcloudTags || [];
    }
    function Ce(ce) {
      const N = new URLSearchParams(window.location.search);
      return N.set("publication", ce), N.set("sort", "publication"), N.delete("page"), `?${N.toString()}`;
    }
    function lt(ce, N) {
      ae[ce] = !!N?.currentTarget?.open;
    }
    return (ce, N) => (j(), V("div", Vu, [
      E("section", zu, [
        E("h2", Bu, w(M(T)("library", "Publication catalogue")), 1),
        E("p", Wu, w(M(T)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1),
        E("details", Gu, [
          E("summary", Ku, w(M(T)("library", "Show catalogue filters")), 1),
          E("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": M(T)("library", "Catalogue search and filters")
          }, [
            E("label", null, [
              ve(w(M(T)("library", "Search title / author")) + " ", 1),
              $e(E("input", {
                "onUpdate:modelValue": N[0] || (N[0] = (p) => U.q = p),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [Fi, U.q]
              ])
            ]),
            E("label", null, [
              ve(w(M(T)("library", "Type")) + " ", 1),
              $e(E("select", {
                "onUpdate:modelValue": N[1] || (N[1] = (p) => U.type = p),
                name: "type"
              }, [
                E("option", Yu, w(M(T)("library", "All types")), 1),
                (j(), V(ye, null, Ve(n, (p) => E("option", {
                  key: p,
                  value: p
                }, w(p), 9, Xu)), 64))
              ], 512), [
                [et, U.type]
              ])
            ]),
            E("label", null, [
              ve(w(M(T)("library", "Series / periodical")) + " ", 1),
              $e(E("select", {
                "onUpdate:modelValue": N[2] || (N[2] = (p) => U.publication = p),
                name: "publication"
              }, [
                E("option", Ju, w(M(T)("library", "All series and periodicals")), 1),
                (j(!0), V(ye, null, Ve(l.value, (p) => (j(), V("option", {
                  key: p,
                  value: p
                }, w(p), 9, Zu))), 128))
              ], 512), [
                [et, U.publication]
              ])
            ]),
            E("label", null, [
              ve(w(M(T)("library", "Publication year")) + " ", 1),
              $e(E("select", {
                "onUpdate:modelValue": N[3] || (N[3] = (p) => U.year = p),
                name: "year"
              }, [
                E("option", Qu, w(M(T)("library", "All years")), 1),
                (j(!0), V(ye, null, Ve(m.value, (p) => (j(), V("option", {
                  key: p,
                  value: p
                }, w(p), 9, ef))), 128))
              ], 512), [
                [et, U.year]
              ])
            ]),
            E("label", null, [
              ve(w(M(T)("library", "Creator")) + " ", 1),
              $e(E("select", {
                "onUpdate:modelValue": N[4] || (N[4] = (p) => U.creator = p),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                E("option", tf, w(M(T)("library", "All creators")), 1),
                (j(!0), V(ye, null, Ve(d.value, (p) => (j(), V("option", {
                  key: p,
                  value: p
                }, w(p), 9, nf))), 128))
              ], 512), [
                [et, U.creator]
              ])
            ]),
            E("label", null, [
              ve(w(M(T)("library", "Nextcloud tag")) + " ", 1),
              $e(E("input", {
                "onUpdate:modelValue": N[5] || (N[5] = (p) => U.tag = p),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [Fi, U.tag]
              ])
            ]),
            E("label", null, [
              ve(w(M(T)("library", "Format")) + " ", 1),
              $e(E("select", {
                "onUpdate:modelValue": N[6] || (N[6] = (p) => U.format = p),
                name: "format"
              }, [
                E("option", rf, w(M(T)("library", "All formats")), 1),
                (j(!0), V(ye, null, Ve(o.value, (p) => (j(), V("option", {
                  key: p,
                  value: p
                }, w(De(p)), 9, sf))), 128))
              ], 512), [
                [et, U.format]
              ])
            ]),
            E("label", null, [
              ve(w(M(T)("library", "Shelf")) + " ", 1),
              $e(E("select", {
                "onUpdate:modelValue": N[7] || (N[7] = (p) => U.shelf = p),
                name: "shelf"
              }, [
                E("option", of, w(M(T)("library", "All shelves")), 1),
                (j(!0), V(ye, null, Ve(i.value, (p) => (j(), V("option", {
                  key: p,
                  value: p
                }, w(p), 9, lf))), 128))
              ], 512), [
                [et, U.shelf]
              ])
            ]),
            E("label", null, [
              ve(w(M(T)("library", "Scan status")) + " ", 1),
              $e(E("select", {
                "onUpdate:modelValue": N[8] || (N[8] = (p) => U.status = p),
                name: "status"
              }, [
                E("option", af, w(M(T)("library", "All scan statuses")), 1),
                (j(!0), V(ye, null, Ve(y.value, (p) => (j(), V("option", {
                  key: p,
                  value: p
                }, w(p), 9, cf))), 128))
              ], 512), [
                [et, U.status]
              ])
            ]),
            E("label", null, [
              ve(w(M(T)("library", "Workflow status")) + " ", 1),
              $e(E("select", {
                "onUpdate:modelValue": N[9] || (N[9] = (p) => U.workflowStatus = p),
                name: "workflowStatus"
              }, [
                E("option", uf, w(M(T)("library", "All workflow statuses")), 1),
                (j(!0), V(ye, null, Ve(I.value, (p) => (j(), V("option", {
                  key: p,
                  value: p
                }, w(p), 9, ff))), 128))
              ], 512), [
                [et, U.workflowStatus]
              ])
            ]),
            E("label", null, [
              ve(w(M(T)("library", "Genre")) + " ", 1),
              $e(E("select", {
                "onUpdate:modelValue": N[10] || (N[10] = (p) => U.genre = p),
                name: "genre"
              }, [
                E("option", df, w(M(T)("library", "All genres")), 1),
                (j(!0), V(ye, null, Ve(k.value, (p) => (j(), V("option", {
                  key: p,
                  value: p
                }, w(p), 9, pf))), 128))
              ], 512), [
                [et, U.genre]
              ])
            ]),
            E("label", null, [
              ve(w(M(T)("library", "Classification")) + " ", 1),
              $e(E("select", {
                "onUpdate:modelValue": N[11] || (N[11] = (p) => U.classification = p),
                name: "classification"
              }, [
                E("option", hf, w(M(T)("library", "All classifications")), 1),
                (j(!0), V(ye, null, Ve(K.value, (p) => (j(), V("option", {
                  key: p,
                  value: p
                }, w(p), 9, mf))), 128))
              ], 512), [
                [et, U.classification]
              ])
            ]),
            E("label", null, [
              ve(w(M(T)("library", "Scanner conflicts")) + " ", 1),
              $e(E("select", {
                "onUpdate:modelValue": N[12] || (N[12] = (p) => U.scannerConflicts = p),
                name: "scannerConflicts"
              }, [
                E("option", gf, w(M(T)("library", "All metadata")), 1),
                E("option", bf, w(M(T)("library", "Needs review")), 1)
              ], 512), [
                [et, U.scannerConflicts]
              ])
            ]),
            E("label", null, [
              ve(w(M(T)("library", "Starred")) + " ", 1),
              $e(E("select", {
                "onUpdate:modelValue": N[13] || (N[13] = (p) => U.starred = p),
                name: "starred"
              }, [
                E("option", yf, w(M(T)("library", "All publications")), 1),
                E("option", _f, w(M(T)("library", "Starred only")), 1)
              ], 512), [
                [et, U.starred]
              ])
            ]),
            E("label", null, [
              ve(w(M(T)("library", "Sort")) + " ", 1),
              $e(E("select", {
                "onUpdate:modelValue": N[14] || (N[14] = (p) => U.sort = p),
                name: "sort"
              }, [
                E("option", Tf, w(M(T)("library", "Title")), 1),
                E("option", Ef, w(M(T)("library", "Recently added")), 1),
                E("option", vf, w(M(T)("library", "Publication date")), 1),
                E("option", Sf, w(M(T)("library", "Series / periodical")), 1),
                E("option", Af, w(M(T)("library", "Recently opened")), 1),
                E("option", xf, w(M(T)("library", "Format")), 1)
              ], 512), [
                [et, U.sort]
              ])
            ]),
            E("label", null, [
              ve(w(M(T)("library", "Page size")) + " ", 1),
              E("select", {
                value: F.value.limit,
                name: "limit"
              }, [
                (j(), V(ye, null, Ve(r, (p) => E("option", {
                  key: p,
                  value: p
                }, w(p), 9, Cf)), 64))
              ], 8, wf)
            ]),
            E("button", {
              type: "submit",
              class: "button primary",
              "aria-label": M(T)("library", "Apply catalogue filters")
            }, w(M(T)("library", "Apply filters")), 9, Of),
            E("a", {
              href: "?",
              class: "button secondary",
              "aria-label": M(T)("library", "Clear catalogue filters")
            }, w(M(T)("library", "Clear")), 9, Rf),
            E("a", {
              href: oe.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, w(M(T)("library", "Review scanner conflicts")), 9, Pf)
          ], 8, qu)
        ]),
        J.value.length > 0 ? (j(), V("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": M(T)("library", "Active filters")
        }, [
          E("span", null, w(M(T)("library", "Active filters")), 1),
          (j(!0), V(ye, null, Ve(J.value, (p) => (j(), V("a", {
            key: p.key,
            href: Te(p.key),
            class: "library-filter-chip",
            "aria-label": `${M(T)("library", "Remove filter")}: ${p.label}`
          }, [
            E("strong", null, w(p.label) + ":", 1),
            ve(" " + w(p.value) + " ", 1),
            N[15] || (N[15] = E("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Nf))), 128))
        ], 8, If)) : Oe("", !0),
        E("nav", {
          class: "library-pagination",
          "aria-label": M(T)("library", "Catalogue pagination")
        }, [
          E("span", null, "Showing " + w(F.value.from) + "–" + w(F.value.to) + " of " + w(F.value.total) + " catalogue items", 1),
          F.value.previousUrl ? (j(), V("a", {
            key: 0,
            href: F.value.previousUrl
          }, w(M(T)("library", "Previous")), 9, Mf)) : (j(), V("span", Lf, w(M(T)("library", "Previous")), 1)),
          F.value.nextUrl ? (j(), V("a", {
            key: 2,
            href: F.value.nextUrl
          }, w(M(T)("library", "Next")), 9, Ff)) : (j(), V("span", Uf, w(M(T)("library", "Next")), 1))
        ], 8, Df),
        c.value.length > 0 ? (j(), V("details", kf, [
          E("summary", Hf, w(M(T)("library", "Show top series and periodicals")), 1),
          E("h3", jf, w(M(T)("library", "Top series and periodicals")), 1),
          E("p", $f, w(M(T)("library", "Jump into recurring publications with one click.")), 1),
          E("ul", null, [
            (j(!0), V(ye, null, Ve(c.value, (p) => (j(), V("li", {
              key: p.publication
            }, [
              E("a", {
                href: Ce(p.publication)
              }, w(p.publication), 9, Vf),
              E("span", zf, w(p.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : c.value.length === 0 ? (j(), V("details", Bf, [
          E("summary", Wf, w(M(T)("library", "Show top series and periodicals")), 1),
          E("h3", Gf, w(M(T)("library", "No series or periodicals found yet")), 1),
          E("p", Kf, w(M(T)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Oe("", !0),
        s.value.length === 0 ? (j(), V("div", qf, [
          E("h3", null, w(M(T)("library", "No catalogue items match")), 1),
          E("p", Yf, w(M(T)("library", "Scan enabled roots or clear the active filters.")), 1)
        ])) : (j(), V("div", Xf, [
          (j(!0), V(ye, null, Ve(s.value, (p) => (j(), V("article", {
            key: p.id,
            class: kn(["library-cover-card", { "library-cover-card--open": ae[p.id] }])
          }, [
            E("a", {
              class: "library-cover-link",
              href: p.openUrl,
              "aria-label": `Read ${p.title}`
            }, [
              E("img", {
                class: "library-cover-image",
                src: p.coverUrl,
                alt: `Cover for ${p.title}`,
                loading: "lazy"
              }, null, 8, Zf)
            ], 8, Jf),
            E("form", {
              method: "post",
              action: p.starUrl,
              class: "library-cover-star-form"
            }, [
              E("input", {
                type: "hidden",
                name: "requesttoken",
                value: Y.value
              }, null, 8, ed),
              N[16] || (N[16] = E("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              E("input", {
                type: "hidden",
                name: "starred",
                value: p.starred ? "0" : "1"
              }, null, 8, td),
              E("button", {
                type: "submit",
                class: kn(["library-cover-star-button", { "library-cover-star-button--starred": p.starred }]),
                "aria-pressed": p.starred ? "true" : "false",
                title: p.starred ? M(T)("library", "Unstar this publication") : M(T)("library", "Star this publication"),
                "aria-label": p.starred ? M(T)("library", "Unstar this publication") : M(T)("library", "Star this publication")
              }, w(p.starred ? "★" : "☆"), 11, nd)
            ], 8, Qf),
            E("div", rd, [
              E("div", sd, [
                E("h3", null, [
                  p.starred ? (j(), V("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": M(T)("library", "Starred")
                  }, "★", 8, id)) : Oe("", !0),
                  ve(w(p.title), 1)
                ]),
                E("a", {
                  class: "library-cover-read",
                  href: p.openUrl
                }, w(M(T)("library", "Read")), 9, od)
              ]),
              E("details", {
                class: "library-cover-details",
                onToggle: (ee) => lt(p.id, ee)
              }, [
                E("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${M(T)("library", "Show details and actions")}: ${p.title}`
                }, w(M(T)("library", "Details")), 9, ad),
                E("div", cd, [
                  p.creators ? (j(), V("p", ud, w(p.creators), 1)) : Oe("", !0),
                  E("p", fd, [
                    E("span", null, w(p.publicationType), 1),
                    p.publication ? (j(), V("span", dd, " · " + w(p.publication), 1)) : Oe("", !0),
                    p.publicationDate ? (j(), V("span", pd, " · " + w(p.publicationDate), 1)) : Oe("", !0),
                    p.workflowStatus ? (j(), V("span", hd, " · Workflow status: " + w(p.workflowStatus), 1)) : Oe("", !0),
                    p.genres?.length ? (j(), V("span", md, " · Genres: " + w(p.genres.join("; ")), 1)) : Oe("", !0),
                    p.classifications?.length ? (j(), V("span", gd, " · Classifications: " + w(p.classifications.join("; ")), 1)) : Oe("", !0),
                    p.hasScannerConflict ? (j(), V("span", bd, " · Needs scanner review: " + w(p.scannerConflictCount) + " fields", 1)) : Oe("", !0),
                    p.lastOpenedAt ? (j(), V("span", yd, " · Last opened: " + w(p.lastOpenedAt), 1)) : Oe("", !0),
                    p.extension ? (j(), V("span", _d, " · Format: " + w(De(p.extension)), 1)) : Oe("", !0),
                    p.shelf ? (j(), V("span", Td, " · Shelf: " + w(p.shelf), 1)) : Oe("", !0)
                  ]),
                  p.description ? (j(), V("p", Ed, w(p.description), 1)) : Oe("", !0),
                  p.scanStatus !== "indexed" || p.scanError ? (j(), V("p", vd, [
                    ve(" scanStatus: " + w(p.scanStatus || "unknown"), 1),
                    p.scanError ? (j(), V("span", Sd, " · scanError: " + w(p.scanError), 1)) : Oe("", !0)
                  ])) : Oe("", !0),
                  E("div", Ad, [
                    Pe(p).length === 0 ? (j(), V("span", xd, "No Nextcloud tags")) : (j(!0), V(ye, { key: 1 }, Ve(Pe(p), (ee) => (j(), V("span", {
                      key: ee.id,
                      class: "library-tag"
                    }, w(ee.name), 1))), 128))
                  ]),
                  E("p", wd, [
                    E("a", {
                      href: p.filesUrl
                    }, w(M(T)("library", "Show in Files")), 9, Cd),
                    N[17] || (N[17] = ve(" · ", -1)),
                    E("a", {
                      href: p.downloadUrl
                    }, w(M(T)("library", "Download source")), 9, Od),
                    N[18] || (N[18] = ve(" · ", -1)),
                    E("a", {
                      href: p.detailsUrl
                    }, w(M(T)("library", "Details")), 9, Rd)
                  ])
                ])
              ], 40, ld)
            ])
          ], 2))), 128))
        ]))
      ]),
      E("section", Pd, [
        N[19] || (N[19] = E("div", null, [
          E("h2", null, "Library"),
          E("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        E("div", Id, [
          E("a", {
            href: te.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, Nd),
          z.value ? (j(), V("a", {
            key: 0,
            href: z.value,
            class: "button secondary",
            "aria-label": "Export corrected metadata"
          }, "Export corrected metadata", 8, Dd)) : Oe("", !0),
          A.value ? (j(), V("a", {
            key: 1,
            href: A.value,
            class: "button secondary",
            "aria-label": "Export sidecar manifest"
          }, "Export sidecar manifest", 8, Md)) : Oe("", !0),
          X.value ? (j(), V("a", {
            key: 2,
            href: X.value,
            class: "button secondary",
            "aria-label": "Export sidecar ZIP"
          }, "Export sidecar ZIP", 8, Ld)) : Oe("", !0)
        ])
      ])
    ]));
  }
}, no = nu("library", "catalogue", {}), hr = document.querySelector("#library-vue-root"), ro = {
  ...no,
  requestToken: hr?.dataset.requestToken || no.requestToken || ""
};
function ge(e) {
  return String(e ?? "");
}
function bl(e) {
  return ge(e).toUpperCase();
}
function Ud(e, t, n, r = ge) {
  for (const s of t) {
    const i = document.createElement("option");
    i.value = ge(s), i.textContent = r(s), ge(s) === ge(n) && (i.selected = !0), e.appendChild(i);
  }
}
function so(e, t, n, r, s = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = ge(r), o.placeholder = s, i.appendChild(o), e.appendChild(i);
}
function un(e, t, n, r, s, i, o = ge) {
  const l = document.createElement("label");
  l.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const m = document.createElement("option");
  m.value = "", m.textContent = s, c.appendChild(m), Ud(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function kd(e) {
  const t = ge(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function Hd(e) {
  const t = new URLSearchParams(window.location.search);
  return t.set("publication", e), t.set("sort", "publication"), t.delete("page"), `?${t.toString()}`;
}
function jd(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", T("library", "Catalogue search and filters")), so(r, T("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), un(r, T("library", "Type"), "type", n.type, T("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), so(r, T("library", "Nextcloud tag"), "tag", n.tag, "photography"), un(r, T("library", "Format"), "format", n.format, T("library", "All formats"), e.formats || [], bl), un(r, T("library", "Shelf"), "shelf", n.shelf, T("library", "All shelves"), e.shelves || []), un(r, T("library", "Scan status"), "status", n.status, T("library", "All scan statuses"), e.scanStatuses || []), un(r, T("library", "Sort"), "sort", n.sort || "title", T("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), un(r, T("library", "Page size"), "limit", t.limit || 100, T("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", T("library", "Apply catalogue filters")), s.textContent = T("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", T("library", "Clear catalogue filters")), i.textContent = T("library", "Clear"), r.append(s, i), r;
}
function $d(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = ge(e.settingsUrl || ""), i = ge(e.metadataExportUrl || ""), o = document.createElement("div");
  o.className = "library-vue-catalogue library-vue-fallback", o.dataset.vueFallback = "true";
  const l = document.createElement("section");
  l.className = "library-panel", l.setAttribute("aria-labelledby", "library-catalogue-heading");
  const c = document.createElement("h2");
  c.id = "library-catalogue-heading", c.textContent = T("library", "Publication catalogue"), l.appendChild(c);
  const m = document.createElement("p");
  m.className = "library-muted", m.textContent = T("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), l.appendChild(m);
  const d = document.createElement("details");
  d.className = "library-filter-panel";
  const y = document.createElement("summary");
  y.className = "library-filter-panel-summary", y.textContent = T("library", "Show catalogue filters"), d.append(y, jd(e, r)), l.appendChild(d);
  const I = document.createElement("nav");
  I.className = "library-pagination", I.setAttribute("aria-label", T("library", "Catalogue pagination"));
  const k = document.createElement("span");
  k.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`, I.appendChild(k), l.appendChild(I);
  const K = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], F = document.createElement("details");
  F.className = K.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const U = document.createElement("summary");
  U.className = "library-periodical-groups-summary", U.textContent = T("library", "Show top series and periodicals"), F.appendChild(U);
  const te = document.createElement("h3");
  te.textContent = K.length > 0 ? T("library", "Top series and periodicals") : T("library", "No series or periodicals found yet");
  const Y = document.createElement("p");
  if (Y.className = "library-muted", Y.textContent = K.length > 0 ? T("library", "Jump into recurring publications with one click.") : T("library", "Add publication or series names in item details to build this shortcut panel."), F.append(te, Y), K.length > 0) {
    const z = document.createElement("ul");
    for (const A of K) {
      const X = document.createElement("li"), oe = document.createElement("a");
      oe.href = Hd(ge(A.publication)), oe.textContent = ge(A.publication);
      const re = document.createElement("span");
      re.className = "library-muted", re.textContent = `${A.itemCount} items`, X.append(oe, re), z.appendChild(X);
    }
    F.appendChild(z);
  }
  if (l.appendChild(F), n.length === 0) {
    const z = document.createElement("div");
    z.className = "library-empty-content", z.setAttribute("role", "status");
    const A = document.createElement("h3");
    A.textContent = T("library", "No catalogue items match");
    const X = document.createElement("p");
    X.className = "library-muted", X.textContent = T("library", "Scan enabled roots or clear the active filters."), z.append(A, X), l.appendChild(z);
  } else {
    const z = document.createElement("div");
    z.className = "library-cover-gallery";
    for (const A of n) {
      const X = document.createElement("article");
      X.className = "library-cover-card";
      const oe = document.createElement("a");
      oe.className = "library-cover-link", oe.href = ge(A.openUrl || "#"), oe.setAttribute("aria-label", `Read ${ge(A.title || "publication")}`);
      const re = document.createElement("img");
      re.className = "library-cover-image", re.src = ge(A.coverUrl || ""), re.alt = `Cover for ${ge(A.title || "publication")}`, re.loading = "lazy", oe.appendChild(re);
      const J = kd(e), ae = document.createElement("form");
      ae.method = "post", ae.action = ge(A.starUrl || ""), ae.className = "library-cover-star-form", J && ae.appendChild(J);
      const Te = document.createElement("input");
      Te.type = "hidden", Te.name = "returnTo", Te.value = "catalogue";
      const De = document.createElement("input");
      De.type = "hidden", De.name = "starred", De.value = A.starred ? "0" : "1";
      const Pe = document.createElement("button");
      Pe.type = "submit", Pe.className = A.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Pe.setAttribute("aria-pressed", A.starred ? "true" : "false"), Pe.setAttribute("aria-label", A.starred ? T("library", "Unstar this publication") : T("library", "Star this publication")), Pe.title = A.starred ? T("library", "Unstar this publication") : T("library", "Star this publication"), Pe.textContent = A.starred ? "★" : "☆", ae.append(Te, De, Pe);
      const Ce = document.createElement("div");
      Ce.className = "library-cover-summary";
      const lt = document.createElement("h3");
      if (lt.textContent = ge(A.title || "Untitled publication"), Ce.appendChild(lt), A.creators) {
        const Ze = document.createElement("p");
        Ze.className = "library-creator", Ze.textContent = ge(A.creators), Ce.appendChild(Ze);
      }
      const ce = document.createElement("p");
      ce.className = "library-muted", ce.textContent = [
        ge(A.publicationType || "other"),
        A.extension ? `Format: ${bl(A.extension)}` : "",
        A.shelf ? `Shelf: ${ge(A.shelf)}` : ""
      ].filter(Boolean).join(" · "), Ce.appendChild(ce);
      const N = document.createElement("p"), p = document.createElement("a");
      p.href = ge(A.openUrl || "#"), p.textContent = T("library", "Read");
      const ee = document.createElement("a");
      ee.href = ge(A.filesUrl || "#"), ee.textContent = T("library", "Show in Files");
      const ke = document.createElement("a");
      ke.href = ge(A.downloadUrl || "#"), ke.textContent = T("library", "Download source");
      const at = document.createElement("a");
      at.href = ge(A.detailsUrl || "#"), at.textContent = T("library", "Details"), N.append(p, document.createTextNode(" · "), ee, document.createTextNode(" · "), ke, document.createTextNode(" · "), at), Ce.appendChild(N), X.append(oe, ae, Ce), z.appendChild(X);
    }
    l.appendChild(z);
  }
  if (o.appendChild(l), s || i) {
    const z = document.createElement("section");
    z.className = "library-hero library-secondary-panel", z.setAttribute("aria-label", "Library settings");
    const A = document.createElement("div"), X = document.createElement("h2");
    X.textContent = "Library";
    const oe = document.createElement("p");
    oe.className = "library-lede", oe.textContent = "Browse publications already stored in Nextcloud.", A.append(X, oe);
    const re = document.createElement("div");
    if (re.className = "library-hero-actions", s) {
      const J = document.createElement("a");
      J.href = s, J.className = "button secondary", J.setAttribute("aria-label", "Open Library settings"), J.textContent = "Library settings", re.appendChild(J);
    }
    if (i) {
      const J = document.createElement("a");
      J.href = i, J.className = "button secondary", J.setAttribute("aria-label", "Export corrected metadata"), J.textContent = "Export corrected metadata", re.appendChild(J);
    }
    if (e.metadataSidecarManifestUrl) {
      const J = document.createElement("a");
      J.href = e.metadataSidecarManifestUrl, J.className = "button secondary", J.setAttribute("aria-label", "Export sidecar manifest"), J.textContent = "Export sidecar manifest", re.appendChild(J);
    }
    if (e.metadataSidecarBundleUrl) {
      const J = document.createElement("a");
      J.href = e.metadataSidecarBundleUrl, J.className = "button secondary", J.setAttribute("aria-label", "Export sidecar ZIP"), J.textContent = "Export sidecar ZIP", re.appendChild(J);
    }
    z.append(A, re), o.appendChild(z);
  }
  return o;
}
if (hr)
  try {
    Qc(Fd, { state: ro }).mount(hr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), hr.replaceChildren($d(ro));
  }
//# sourceMappingURL=library-main.mjs.map
